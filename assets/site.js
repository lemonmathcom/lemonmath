/*
 * Lemonmath: small enhancements.
 * Every page is complete HTML and works without this file. It only adds:
 * the light/dark switch, the mobile menu, lesson search and progress ticks.
 */
(function () {
  'use strict';

  var d = document;
  var root = d.documentElement;

  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------- light / dark ---------- */
  var themeBtn = $('#theme-btn');
  if (themeBtn) {
    themeBtn.hidden = false;
    themeBtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      lsSet('lm-theme', next);
    });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = $('#menu-btn');
  var sidebar = $('#sidebar');
  var scrim = $('#scrim');
  if (menuBtn && sidebar && scrim) {
    menuBtn.hidden = false; // CSS shows it on small screens only
    var setMenu = function (open) {
      sidebar.classList.toggle('open', open);
      scrim.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
    scrim.addEventListener('click', function () { setMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- progress (saved in this browser only) ---------- */
  var done = [];
  try {
    done = JSON.parse(lsGet('lm-done') || '[]');
    if (!Array.isArray(done)) done = [];
  } catch (e) { done = []; }

  function isDone(id) { return done.indexOf(id) !== -1; }

  function paint() {
    $$('a[data-lesson]').forEach(function (a) {
      var on = isDone(a.getAttribute('data-lesson'));
      var tick = $('.tick', a);
      var label = $('[data-done-label]', a);
      if (tick) tick.classList.toggle('on', on);
      if (label) label.hidden = !on;
    });

    $$('.card[data-lessons]').forEach(function (card) {
      var ids = card.getAttribute('data-lessons').split(',').filter(Boolean);
      var n = ids.filter(isDone).length;
      var pct = ids.length ? Math.round(100 * n / ids.length) : 0;
      var bar = $('.bar', card);
      var meta = $('.card-meta', card);
      // Show progress only once the student has finished something in this chapter.
      if (bar) {
        bar.hidden = n === 0;
        $('i', bar).style.width = pct + '%';
      }
      if (meta) {
        meta.textContent = meta.getAttribute('data-base') + (n ? ' · ' + pct + '% complete' : '');
      }
    });

    var start = $('#start-btn');
    if (start && done.length) {
      var links = $$('#nav a[data-lesson]');
      for (var i = 0; i < links.length; i++) {
        if (!isDone(links[i].getAttribute('data-lesson'))) {
          start.setAttribute('href', links[i].getAttribute('href'));
          start.textContent = 'Continue learning';
          break;
        }
      }
    }
  }

  var doneBtn = $('#done-btn');
  if (doneBtn) {
    var lessonId = doneBtn.getAttribute('data-lesson');
    doneBtn.hidden = false;
    var syncBtn = function () { doneBtn.setAttribute('aria-pressed', isDone(lessonId) ? 'true' : 'false'); };
    doneBtn.addEventListener('click', function () {
      var i = done.indexOf(lessonId);
      if (i === -1) done.push(lessonId); else done.splice(i, 1);
      lsSet('lm-done', JSON.stringify(done));
      syncBtn();
      paint();
    });
    syncBtn();
  }
  paint();

  /* ---------- lesson search ---------- */
  var search = $('#search');
  var empty = $('#nav-empty');
  if (search) {
    $('.search').hidden = false;
    var chapters = $$('#nav details.nav-ch');
    var wasOpen = chapters.map(function (c) { return c.open; });

    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      var any = false;
      chapters.forEach(function (det, idx) {
        var heading = ($('summary', det).textContent || '').toLowerCase();
        var shown = 0;
        $$('li', det).forEach(function (li) {
          var hit = !q || (li.textContent + ' ' + heading).toLowerCase().indexOf(q) !== -1;
          li.hidden = !hit;
          if (hit) shown++;
        });
        det.hidden = shown === 0;
        det.open = q ? shown > 0 : wasOpen[idx];
        if (shown) any = true;
      });
      if (empty) empty.hidden = any;
    });
  }
})();
