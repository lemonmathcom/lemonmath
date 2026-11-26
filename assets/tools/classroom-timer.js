/* Lemonmath · LemonMath Tools · Classroom Timer (countdown and stopwatch).
 *
 * The time is never counted tick by tick: the clock keeps the moment it was started and the time already used,
 * and every redraw works the rest out from the real clock (Date.now). So it stays right when the tab is in the
 * background, the laptop sleeps or the page is reloaded (the running clock is saved on this device).
 *
 * The clock model (pure, no DOM) is exported for the unit tests: tools/test/tools-core.test.js.
 */
(function (root, factory) {
  var model = factory();
  if (typeof module === 'object' && module.exports) { module.exports = model; return; }
  if (root.LMT) run(root, model);
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var MAX = 12 * 3600;   // longest countdown: 12 hours (seconds)
  /* state = { mode: 'down' | 'up', total: seconds (countdown length), running, startedAt: ms, base: ms used before this run } */
  function make(mode, total) { return { mode: mode === 'up' ? 'up' : 'down', total: clampTotal(total), running: false, startedAt: 0, base: 0 }; }
  function clampTotal(s) { s = Math.round(Number(s) || 0); return Math.max(1, Math.min(MAX, s)); }
  function elapsed(st, now) { return Math.max(0, st.base + (st.running ? now - st.startedAt : 0)); }
  function remaining(st, now) { return st.total * 1000 - elapsed(st, now); }   // negative = overtime
  function start(st, now) { if (!st.running) { st.running = true; st.startedAt = now; } return st; }
  function pause(st, now) { if (st.running) { st.base = elapsed(st, now); st.running = false; } return st; }
  function reset(st) { st.running = false; st.base = 0; st.startedAt = 0; return st; }
  function started(st) { return st.running || st.base > 0; }
  function done(st, now) { return st.mode === 'down' && started(st) && remaining(st, now) <= 0; }
  /** Add (or take away, sec < 0) time on a countdown. What is left never goes below zero; before the start it changes the length. */
  function add(st, sec, now) {
    if (st.mode !== 'down') return st;
    if (!started(st)) { st.total = clampTotal(st.total + sec); return st; }
    var left = Math.max(0, remaining(st, now)) + sec * 1000;
    left = Math.max(0, left);
    st.total = Math.min(MAX, (elapsed(st, now) + left) / 1000);
    if (left === 0) { st.base = st.total * 1000; st.running = false; }   // taking away more than is left: stop at 00:00
    return st;
  }
  /** what the big digits show: whole seconds, rounded up while counting down (5:00 stays until a full second has gone) */
  function shown(st, now) {
    if (st.mode === 'up') return Math.floor(elapsed(st, now) / 1000);
    var r = remaining(st, now);
    return r > 0 ? Math.ceil(r / 1000) : 0;
  }
  function fraction(st, now) { return st.mode === 'up' ? 0 : Math.max(0, Math.min(1, remaining(st, now) / (st.total * 1000))); }
  function valid(st) { return !!st && (st.mode === 'down' || st.mode === 'up') && st.total >= 1 && st.total <= MAX && st.base >= 0 && typeof st.running === 'boolean'; }
  return { MAX: MAX, make: make, elapsed: elapsed, remaining: remaining, start: start, pause: pause, reset: reset, started: started, done: done, add: add, shown: shown, fraction: fraction, valid: valid };
});

function run(root, M) {
  'use strict';
  var L = root.LMT;
  L.tool('classroom-timer', function (app, ctx) {
    var S = ctx.vi ? {
      down: 'Đếm ngược', up: 'Bấm giờ', start: '▶ Bắt đầu', pause: '⏸ Tạm dừng', resume: '▶ Tiếp tục', reset: '↺ Đặt lại', again: '↺ Đếm lại',
      quick: 'Chọn nhanh', custom: 'Tự đặt', min: 'phút', sec: 'giây', set: 'Đặt giờ', sound: 'Chuông báo khi hết giờ', mode: 'Kiểu đồng hồ',
      ready: 'Sẵn sàng', running: 'Đang chạy', paused: 'Đang tạm dừng', over: function (t) { return 'quá ' + t; }, timeUp: 'Hết giờ!',
      left: function (t) { return 'Còn ' + t; }, plus: function (s) { return '+' + s; }, minus: function (s) { return '−' + s; }, s30: '30 giây', m1: '1 phút',
      keys: 'Phím tắt: <kbd>Space</kbd> bắt đầu / tạm dừng · <kbd>R</kbd> đặt lại · <kbd>F</kbd> toàn màn hình · <kbd>+</kbd> <kbd>−</kbd> thêm, bớt 1 phút',
      bad: 'Hãy nhập từ 1 giây đến 12 giờ.', label: 'Thời gian', adj: 'Thêm hoặc bớt thời gian', presets: ['30 giây', '1 phút', '3 phút', '5 phút', '10 phút', '15 phút']
    } : {
      down: 'Countdown', up: 'Stopwatch', start: '▶ Start', pause: '⏸ Pause', resume: '▶ Resume', reset: '↺ Reset', again: '↺ Again',
      quick: 'Quick times', custom: 'Your own', min: 'min', sec: 'sec', set: 'Set time', sound: 'Ring when time is up', mode: 'Kind of clock',
      ready: 'Ready', running: 'Running', paused: 'Paused', over: function (t) { return 'over by ' + t; }, timeUp: 'Time’s up!',
      left: function (t) { return t + ' left'; }, plus: function (s) { return '+' + s; }, minus: function (s) { return '−' + s; }, s30: '30 s', m1: '1 min',
      keys: 'Shortcuts: <kbd>Space</kbd> start / pause · <kbd>R</kbd> reset · <kbd>F</kbd> full screen · <kbd>+</kbd> <kbd>−</kbd> add or take away 1 minute',
      bad: 'Enter between 1 second and 12 hours.', label: 'Time', adj: 'Add or take away time', presets: ['30 s', '1 min', '3 min', '5 min', '10 min', '15 min']
    };
    var PRESETS = [30, 60, 180, 300, 600, 900];
    var esc = L.esc, $ = function (s) { return L.$(s, app); }, store = ctx.store;

    app.innerHTML =
      '<div class="tl-stage tm-stage">' +
      '  <div class="tl-stage-bar"><button type="button" class="btn btn-outline btn-sm tm-full"></button></div>' +
      '  <div class="tm-face">' +
      '    <div class="tm-digits" role="timer" aria-label="' + esc(S.label) + '">00:00</div>' +
      '    <p class="tm-state"><span class="tm-st" aria-live="polite"></span> <span class="tm-over"></span></p>' +
      '    <div class="tm-bar" aria-hidden="true"><i></i></div>' +
      '    <div class="tm-ctrl"><button type="button" class="btn tm-go"></button><button type="button" class="btn btn-outline tm-reset">' + esc(S.reset) + '</button></div>' +
      '    <div class="tm-adj" role="group" aria-label="' + esc(S.adj) + '">' +
      '      <button type="button" class="btn btn-outline btn-sm" data-add="-60">' + esc(S.minus(S.m1)) + '</button><button type="button" class="btn btn-outline btn-sm" data-add="-30">' + esc(S.minus(S.s30)) + '</button>' +
      '      <button type="button" class="btn btn-outline btn-sm" data-add="30">' + esc(S.plus(S.s30)) + '</button><button type="button" class="btn btn-outline btn-sm" data-add="60">' + esc(S.plus(S.m1)) + '</button></div>' +
      '  </div>' +
      '  <div class="tl-panel tm-set">' +
      '    <div class="tl-row"><span class="tl-seg" role="group" aria-label="' + esc(S.mode) + '"><button type="button" data-mode="down">⏳ ' + esc(S.down) + '</button><button type="button" data-mode="up">⏱️ ' + esc(S.up) + '</button></span>' +
      '      <label class="tl-check"><input type="checkbox" class="tm-sound"> 🔔 ' + esc(S.sound) + '</label></div>' +
      '    <div class="tm-down-only"><p class="tl-help">' + esc(S.quick) + '</p><div class="tm-presets">' +
      PRESETS.map(function (s, i) { return '<button type="button" data-sec="' + s + '" aria-pressed="false">' + esc(S.presets[i]) + '</button>'; }).join('') + '</div></div>' +
      '    <form class="tl-row tm-custom tm-down-only" novalidate><span class="tl-help">' + esc(S.custom) + ':</span>' +
      '      <label><input type="number" class="tm-m" min="0" max="720" step="1" inputmode="numeric" aria-label="' + esc(S.min) + '"> ' + esc(S.min) + '</label>' +
      '      <label><input type="number" class="tm-s" min="0" max="59" step="1" inputmode="numeric" aria-label="' + esc(S.sec) + '"> ' + esc(S.sec) + '</label>' +
      '      <button type="submit" class="btn btn-outline btn-sm">' + esc(S.set) + '</button><span class="tl-err tm-bad" aria-live="polite"></span></form>' +
      '    <p class="tl-kbd">' + S.keys + '</p>' +
      '  </div>' +
      '</div>';

    var stage = $('.tm-stage'), digits = $('.tm-digits'), stateEl = $('.tm-st'), overEl = $('.tm-over'), bar = $('.tm-bar i'), goBtn = $('.tm-go'), soundBox = $('.tm-sound');
    var saved = store.get('state', null);
    var st = M.valid(saved) ? saved : M.make('down', store.get('last', 300));
    var rang = st.mode === 'down' && M.done(st, Date.now());   // already over when the page opened: do not ring again
    if (rang && -M.remaining(st, Date.now()) > 30 * 60 * 1000) { M.reset(st); rang = false; }   // ended long ago: start fresh
    soundBox.checked = store.get('sound', true) !== false;
    var baseTitle = document.title, tick = 0, ring = 0, wake = null;

    function save() { store.set('state', st); }
    function clock(sec) { return L.fmtClock(sec); }
    function draw() {
      var now = Date.now(), isDone = M.done(st, now), sec = M.shown(st, now);
      digits.textContent = clock(sec);
      var f = M.fraction(st, now), low = st.mode === 'down' && M.started(st) && !isDone && (f <= 0.2 || sec <= 30), crit = st.mode === 'down' && M.started(st) && !isDone && (f <= 0.1 || sec <= 10);
      digits.classList.toggle('low', low && !crit); digits.classList.toggle('crit', crit); digits.classList.toggle('done', isDone);
      bar.style.width = (st.mode === 'down' ? f * 100 : 0) + '%';
      bar.classList.toggle('low', low && !crit); bar.classList.toggle('crit', crit || isDone);
      $('.tm-bar').hidden = st.mode !== 'down';
      var txt = isDone ? S.timeUp : st.running ? S.running : M.started(st) ? S.paused : S.ready;
      if (stateEl.textContent !== txt) stateEl.textContent = txt;   // read out only when it changes
      overEl.textContent = isDone ? '· ' + S.over(clock(Math.floor(-M.remaining(st, now) / 1000))) : '';   // overtime counts on quietly
      $('.tm-state').classList.toggle('done', isDone);
      goBtn.textContent = isDone ? S.again : st.running ? S.pause : M.started(st) ? S.resume : S.start;
      goBtn.setAttribute('aria-pressed', st.running ? 'true' : 'false');
      L.$$('[data-add]', app).forEach(function (b) { b.disabled = st.mode !== 'down' || (isDone && +b.getAttribute('data-add') < 0); });
      L.$$('.tm-down-only', app).forEach(function (el) { el.hidden = st.mode !== 'down'; });
      L.$$('[data-mode]', app).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-mode') === st.mode ? 'true' : 'false'); });
      L.$$('[data-sec]', app).forEach(function (b) { b.setAttribute('aria-pressed', !M.started(st) && +b.getAttribute('data-sec') === st.total ? 'true' : 'false'); });
      document.title = M.started(st) ? (st.running ? (isDone ? '🔔 ' : '⏱ ') : '⏸ ') + clock(sec) + ' · ' + baseTitle : baseTitle;
      if (isDone && !rang) finished();
    }
    function finished() {
      rang = true;
      if (soundBox.checked) L.chime('end');
      L.say(S.timeUp);
      if (root.navigator.vibrate) try { root.navigator.vibrate([200, 100, 200]); } catch (e) {}
    }
    function loop() {
      clearInterval(tick); clearTimeout(ring);
      if (st.running) {
        tick = setInterval(draw, 200);
        var r = M.remaining(st, Date.now());
        if (st.mode === 'down' && r > 0) ring = setTimeout(draw, r + 20);   // ring on time even if the tab sleeps through the 200 ms redraws
      }
      draw();
    }
    function lock(on) {   // keep the projector screen awake while the clock runs
      try {
        if (on && !wake && root.navigator.wakeLock) root.navigator.wakeLock.request('screen').then(function (w) { wake = w; w.addEventListener('release', function () { wake = null; }); }, function () {});
        if (!on && wake) { wake.release(); wake = null; }
      } catch (e) {}
    }
    function toggle() {
      var now = Date.now();
      L.unlockSound();
      if (M.done(st, now)) { M.reset(st); rang = false; M.start(st, now); }
      else if (st.running) M.pause(st, now);
      else M.start(st, now);
      lock(st.running); save(); loop();
    }
    function doReset() { M.reset(st); rang = false; lock(false); save(); loop(); }
    function setTotal(sec) { st = M.make(st.mode, sec); rang = false; store.set('last', st.total); mIn.value = Math.floor(st.total / 60); sIn.value = st.total % 60; lock(false); save(); loop(); }
    function addTime(sec) {
      var now = Date.now(), was = M.done(st, now);
      M.add(st, sec, now);
      if (!M.started(st)) store.set('last', st.total);
      if (was && !M.done(st, now)) rang = false;
      save(); loop();
    }

    goBtn.addEventListener('click', toggle);
    $('.tm-reset').addEventListener('click', doReset);
    L.$$('[data-add]', app).forEach(function (b) { b.addEventListener('click', function () { addTime(+b.getAttribute('data-add')); }); });
    L.$$('[data-sec]', app).forEach(function (b) { b.addEventListener('click', function () { setTotal(+b.getAttribute('data-sec')); }); });
    L.$$('[data-mode]', app).forEach(function (b) {
      b.addEventListener('click', function () {
        var m = b.getAttribute('data-mode');
        if (m === st.mode) return;
        st = M.make(m, store.get('last', 300)); rang = false; lock(false); save(); loop();
      });
    });
    soundBox.addEventListener('change', function () { store.set('sound', soundBox.checked); if (soundBox.checked) { L.unlockSound(); L.chime('tick'); } });
    var mIn = $('.tm-m'), sIn = $('.tm-s'), bad = $('.tm-bad');
    mIn.value = Math.floor(st.total / 60); sIn.value = st.total % 60;
    $('.tm-custom').addEventListener('submit', function (e) {
      e.preventDefault();
      var m = Math.floor(+mIn.value || 0), s = Math.floor(+sIn.value || 0), tot = m * 60 + s;
      if (!(m >= 0 && s >= 0 && s < 60 && tot >= 1 && tot <= M.MAX)) { bad.textContent = S.bad; return; }
      bad.textContent = '';
      setTotal(tot);
    });
    L.fullButton($('.tm-full'), stage);
    L.keys({
      ' ': toggle, r: doReset, f: function () { L.fullscreen(stage); },
      '+': function () { addTime(60); }, '=': function () { addTime(60); }, '-': function () { addTime(-60); }
    });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) { draw(); if (st.running) lock(true); } });
    if (st.running) lock(true);
    loop();
  });
}
