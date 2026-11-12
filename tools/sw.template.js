/*
 * Lemonmath service worker (built into /sw.js by tools/build.js).
 * Lets the site be installed like an app and read again with no network:
 *   - pages: fresh from the network when online, the saved copy when offline;
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
    return Promise.all(keys.filter(function (k) { return k.indexOf('lm-') === 0 && k !== C_CORE && k !== C_PAGES && k !== C_FILES; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function trim(name, max) {
  caches.open(name).then(function (c) {
    c.keys().then(function (keys) { for (var i = 0; i < keys.length - max; i++) c.delete(keys[i]); });
  });
}
function save(name, max, req, res) {
  if (res && res.ok && res.type === 'basic') {
    var copy = res.clone();
    caches.open(name).then(function (c) { c.put(req, copy).then(function () { trim(name, max); }, function () {}); });
  }
  return res;
}
function saved(req) { return caches.match(req, { ignoreSearch: true }); }

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (res) { return save(C_PAGES, MAX_PAGES, req, res); })
      .catch(function () { return saved(req).then(function (r) { return r || caches.match('/offline.html'); }); }));
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
