/*
 * Lemonmath: small enhancements.
 * Every page is complete HTML and works without this file. It only adds:
 * the light/dark switch, the mobile menu, search, progress ticks and a language hint.
 */
(function () {
  'use strict';

  var d = document;
  var root = d.documentElement;

  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var isVi = root.lang === 'vi';

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
    menuBtn.hidden = false;
    var setMenu = function (open) {
      sidebar.classList.toggle('open', open);
      scrim.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
    scrim.addEventListener('click', function () { setMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- progress (saved in this browser only; shared by both languages) ---------- */
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
    $$('[data-lessons]').forEach(function (card) {
      var ids = card.getAttribute('data-lessons').split(',').filter(Boolean);
      if (!ids.length) return;
      var n = ids.filter(isDone).length;
      var pct = Math.round(100 * n / ids.length);
      var bar = $('.bar', card);
      var meta = $('.card-meta', card);
      if (bar) { bar.hidden = n === 0; $('i', bar).style.width = pct + '%'; }
      if (meta) meta.textContent = meta.getAttribute('data-base') + (n ? ' · ' + pct + '% ' + meta.getAttribute('data-complete') : '');
      var badge = $('.gbadge', card);
      if (badge && n) badge.textContent = pct + '%';
    });
    var start = $('#start-btn');
    if (start && done.length) {
      var links = $$('#nav a[data-lesson]');
      // on the home page there is no sidebar: continue from the first unfinished lesson we know about
      for (var i = 0; i < links.length; i++) {
        if (!isDone(links[i].getAttribute('data-lesson'))) { start.setAttribute('href', links[i].getAttribute('href')); break; }
      }
    }
  }

  var doneBtn = $('#done-btn');
  if (doneBtn) {
    var lessonId = doneBtn.getAttribute('data-lesson');
    var txt = $('.done-text', doneBtn);
    doneBtn.hidden = false;
    var syncBtn = function () {
      var on = isDone(lessonId);
      doneBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (txt) txt.textContent = doneBtn.getAttribute(on ? 'data-on' : 'data-off');
    };
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

  /* ---------- search ---------- */
  var box = $('.searchbox');
  var input = $('#q');
  var list = $('#results');
  if (box && input && list) {
    box.hidden = false;
    var base = (root.getAttribute('data-root') || '.').replace(/\/$/, '');
    var prefix = base === '.' ? '' : base + '/';
    var index = null, loading = false, active = -1;
    var fold = function (s) {
      return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    };
    var load = function (cb) {
      if (index) return cb();
      if (loading) return;
      loading = true;
      fetch(prefix + 'search-index.json').then(function (r) { return r.json(); }).then(function (j) {
        index = j.map(function (r) { r.k = fold(r.t + ' ' + r.s); return r; });
        loading = false; cb();
      }).catch(function () { loading = false; });
    };
    var show = function () {
      var q = fold(input.value.trim());
      list.innerHTML = '';
      active = -1;
      if (!q || !index) { list.hidden = true; return; }
      var words = q.split(/\s+/);
      var hits = index.filter(function (r) { return words.every(function (w) { return r.k.indexOf(w) !== -1; }); }).slice(0, 8);
      if (!hits.length) {
        var none = d.createElement('li'); none.className = 'none';
        none.textContent = isVi ? 'Không tìm thấy kết quả' : 'Nothing found';
        list.appendChild(none);
      }
      hits.forEach(function (r) {
        var li = d.createElement('li'), a = d.createElement('a'), s = d.createElement('small');
        a.href = prefix + r.u + '/'; a.textContent = r.t; s.textContent = r.s; a.appendChild(s); li.appendChild(a); list.appendChild(li);
      });
      list.hidden = false;
    };
    input.addEventListener('input', function () { load(show); });
    input.addEventListener('focus', function () { load(show); });
    input.addEventListener('keydown', function (e) {
      var items = $$('a', list);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!items.length) return;
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach(function (a, i) { a.classList.toggle('active', i === active); });
      } else if (e.key === 'Enter' && items.length) {
        e.preventDefault();
        location.href = items[active < 0 ? 0 : active].href;
      } else if (e.key === 'Escape') { list.hidden = true; }
    });
    d.addEventListener('click', function (e) { if (!box.contains(e.target)) list.hidden = true; });
  }


  /* ---------- mini test: mark like the graduation exam ---------- */
  $$('[data-quiz]').forEach(function (qz) {
    var submit = $('.qz-submit', qz), retry = $('.qz-retry', qz), out = $('.qz-score', qz), keys = $('.qz-keys', qz);
    if (!submit) return;
    submit.hidden = false;
    if (keys) keys.hidden = true;
    var num = function (s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' ? NaN : Number(s); };
    var fmt = function (x) { var t = (Math.round(x * 100) / 100).toString(); return isVi ? t.replace('.', ',') : t; };
    submit.addEventListener('click', function () {
      var got = 0, max = 0;
      $$('.qz-item', qz).forEach(function (it) {
        var t = it.getAttribute('data-type'), key = it.getAttribute('data-key'), ok = false, pts = 0;
        if (t === 'mc') {
          max += 0.25;
          var c = $('input:checked', it); ok = !!c && c.value === key; pts = ok ? 0.25 : 0;
          $$('li', it).forEach(function (li, i) { li.classList.toggle('qz-right', 'ABCD'[i] === key); li.classList.toggle('qz-wrong', !!c && c.parentNode.parentNode === li && c.value !== key); });
        } else if (t === 'tf') {
          max += 1;
          var k = 0;
          $$('tr', it).forEach(function (tr, i) {
            var c = $('input:checked', tr), r = !!c && c.value === key.charAt(i);
            if (r) k++;
            tr.classList.toggle('qz-right', r); tr.classList.toggle('qz-wrong', !r);
          });
          pts = [0, 0.1, 0.25, 0.5, 1][k]; ok = k === 4;
        } else {
          max += 0.5;
          var v = num($('input', it).value), w = num(key);
          ok = !isNaN(v) && Math.abs(v - w) < 1e-9; pts = ok ? 0.5 : 0;
        }
        got += pts;
        it.classList.toggle('qz-ok', ok); it.classList.toggle('qz-no', !ok);
        var e = $('.qz-expl', it); if (e) e.hidden = false;
      });
      out.textContent = (isVi ? 'Điểm của bạn: ' : 'Your score: ') + fmt(got) + ' / ' + fmt(max) + (isVi ? ' (quy ra thang 10: ' : ' (out of 10: ') + fmt(got / max * 10) + ')';
      submit.hidden = true; retry.hidden = false;
    });
    retry.addEventListener('click', function () {
      $$('input', qz).forEach(function (i) { if (i.type === 'text') i.value = ''; else i.checked = false; });
      $$('.qz-item, li, tr', qz).forEach(function (x) { x.classList.remove('qz-ok', 'qz-no', 'qz-right', 'qz-wrong'); });
      $$('.qz-expl', qz).forEach(function (x) { x.hidden = true; });
      out.textContent = ''; submit.hidden = false; retry.hidden = true;
    });
  });

  /* ---------- remember the chosen language; gently offer Vietnamese ---------- */
  var langBtn = $('.lang-btn');
  if (langBtn) langBtn.addEventListener('click', function () { lsSet('lm-lang', langBtn.getAttribute('data-lang')); });
  if (!isVi && $('#start-btn') && !lsGet('lm-lang') && /^vi/i.test(navigator.language || '')) {
    var bar = d.createElement('div');
    bar.className = 'langbar';
    bar.innerHTML = '<span>Bạn muốn xem website bằng tiếng Việt?</span>';
    var a = d.createElement('a'); a.href = langBtn ? langBtn.getAttribute('href') : 'vi/'; a.textContent = 'Xem bằng tiếng Việt';
    a.addEventListener('click', function () { lsSet('lm-lang', 'vi'); });
    var x = d.createElement('button'); x.type = 'button'; x.textContent = 'Không, cảm ơn';
    x.addEventListener('click', function () { lsSet('lm-lang', 'en'); bar.remove(); });
    bar.appendChild(a); bar.appendChild(x);
    d.body.insertBefore(bar, d.body.firstChild.nextSibling);
  }
})();

/* Share a lesson: the phone's share sheet (Zalo, Messenger, …) or, on a computer, copy the link. */
(function () {
  document.querySelectorAll('.share-lesson').forEach(function (b) {
    b.addEventListener('click', function () {
      var data = { title: document.title, url: location.href.split('#')[0] };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(data.url).then(function () { b.textContent = '✓ ' + b.getAttribute('data-copied'); }, function () {});
    });
  });
})();
