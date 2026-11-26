/*
 * Lemonmath service worker (built into /sw.js by tools/build.js).
 * Lets the site be installed like an app and read again with no network:
 *   - pages: fresh from the network when online, the saved copy when offline
 *     (and when the network is too slow to answer within a few seconds);
 *   - "lm-pack-<key>" caches hold the grades a family chose to download (assets/site.js fills them);
 *     they are never trimmed, and a page read online refreshes its copy there;
 *   - styles, scripts, search index: network first, saved copy as the fallback;
 *   - fonts, pictures, KaTeX: saved copy first (they rarely change).
 */
'use strict';
var VERSION = '__VERSION__';
var CORE = __CORE__;
var C_CORE = 'lm-core-' + VERSION, C_PAGES = 'lm-pages-1', C_FILES = 'lm-files-1';
var MAX_PAGES = 300, MAX_FILES = 400;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(C_CORE).then(function (c) {
    return c.addAll(CORE.map(function (u) { return new Request(u, { cache: 'reload' }); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('lm-') === 0 && k.indexOf('lm-pack-') !== 0 && k !== C_CORE && k !== C_PAGES && k !== C_FILES; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function trim(name, max) {
  caches.open(name).then(function (c) {
    c.keys().then(function (keys) { for (var i = 0; i < keys.length - max; i++) c.delete(keys[i]); });
  });
}
function save(name, max, req, res) {
  if (res && res.ok && res.type === 'basic' && !res.redirected) {
    var copy = res.clone();
    caches.open(name).then(function (c) { c.put(req, copy).then(function () { trim(name, max); }, function () {}); });
  }
  return res;
}
function saved(req) { return caches.match(req, { ignoreSearch: true }); }
/* A page that belongs to a downloaded grade is refreshed inside that grade's cache; any other page goes to the recent-pages cache. */
function savePage(req, res) {
  if (!res || !res.ok || res.type !== 'basic' || res.redirected) return res;
  var copy = res.clone();
  caches.keys().then(function (keys) {
    var packs = keys.filter(function (k) { return k.indexOf('lm-pack-') === 0; });
    var next = function (i) {
      if (i >= packs.length) return caches.open(C_PAGES).then(function (c) { return c.put(req, copy).then(function () { trim(C_PAGES, MAX_PAGES); }); });
      return caches.open(packs[i]).then(function (c) {
        return c.match(req, { ignoreSearch: true }).then(function (hit) { return hit ? c.put(new URL(req.url).pathname, copy) : next(i + 1); });
      });
    };
    return next(0);
  }).catch(function () {});
  return res;
}
var SLOW = 3500; /* ms to wait for the network before showing the saved copy */

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf('/pagefind/') === 0) return; /* full-text search: online only, never kept (it would crowd out pictures and fonts) */

  if (req.mode === 'navigate') {
    e.respondWith(saved(req).then(function (hit) {
      var net = fetch(req).then(function (res) { return savePage(req, res); });
      if (!hit) return net.catch(function () { return caches.match('/offline.html'); });
      return new Promise(function (resolve) {
        var done = false;
        var t = setTimeout(function () { if (!done) { done = true; resolve(hit); } }, SLOW);
        net.then(function (res) { if (!done) { done = true; clearTimeout(t); resolve(res.ok ? res : hit); } },
          function () { if (!done) { done = true; clearTimeout(t); resolve(hit); } });
      });
    }));
    return;
  }
  if (/\.(woff2|png|jpe?g|svg|webp|gif)$/.test(url.pathname) || url.pathname.indexOf('/assets/katex/') === 0) {
    e.respondWith(saved(req).then(function (r) {
      return r || fetch(req).then(function (res) { return save(C_FILES, MAX_FILES, req, res); });
    }));
    return;
  }
  e.respondWith(fetch(req).then(function (res) { return save(C_FILES, MAX_FILES, req, res); })
    .catch(function () { return saved(req).then(function (r) { return r || Response.error(); }); }));
});
