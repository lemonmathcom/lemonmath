/* Lemonmath · LemonMath Tools · Random Name Picker.
 *
 * Fair: the name is drawn first (LMT.sampleIndexes: crypto random, every remaining student equally likely), and the
 * wheel is only turned to land on it. With "do not pick the same student twice" on, a student comes back only after
 * the whole class has been picked (or after "Start a new round").
 * Class lists are shared with the group maker (core.js). What was picked and the history are kept per class, on
 * this device only. Pure helpers (pool) are exported for the unit tests.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) { module.exports = api; return; }
  if (root.LMT) pickerUI(root, api);
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  /** names still in the hat: every name, minus one copy of each picked name (two students may share a name) */
  function pool(names, picked) {
    var left = {}, out = [];
    (picked || []).forEach(function (p) { left[p] = (left[p] || 0) + 1; });
    names.forEach(function (n) { if (left[n]) left[n]--; else out.push(n); });
    return out;
  }
  /** keep only picks that are still on the list (after the list was edited) */
  function keepPicked(names, picked) {
    var have = {}, out = [];
    names.forEach(function (n) { have[n] = (have[n] || 0) + 1; });
    (picked || []).forEach(function (p) { if (have[p]) { have[p]--; out.push(p); } });
    return out;
  }
  return { pool: pool, keepPicked: keepPicked, WHEEL_MAX: 60 };
});

function pickerUI(root, P) {
  'use strict';
  var L = root.LMT;
  L.usesClasses('random-name-picker');
  L.tool('random-name-picker', function (app, ctx) {
    var S = ctx.vi ? {
      wheel: '🎡 Vòng quay', simple: '⚡ Gọi nhanh', mode: 'Cách gọi', count: 'Số em mỗi lần', noRep: 'Không gọi lại em đã được gọi', sound: 'Âm thanh',
      pick: '🎯 Gọi tên', pickN: function (k) { return '🎯 Gọi ' + k + ' em'; }, spinning: 'Đang quay…', restore: '↺ Bắt đầu vòng mới',
      left: function (a, b) { return 'Còn ' + a + '/' + b + ' em chưa được gọi'; }, all: function (b) { return 'Cả lớp ' + b + ' em, mỗi lần gọi đều có thể ra bất kì em nào'; },
      empty: 'Thêm tên học sinh vào danh sách ở trên để bắt đầu.', doneAll: 'Cả lớp đã được gọi. Bấm “Bắt đầu vòng mới” để gọi lại từ đầu.',
      tooMany: function (n) { return 'Vòng quay hiện tối đa ' + n + ' tên. Lớp đông hơn sẽ dùng cách Gọi nhanh.'; },
      hist: 'Lịch sử gọi tên', noHist: 'Chưa gọi em nào.', clearHist: 'Xoá lịch sử', clearSure: 'Bấm lần nữa để xoá', classH: 'Danh sách lớp',
      keys: 'Phím tắt: <kbd>Space</kbd> hoặc <kbd>Enter</kbd> gọi tên · <kbd>F</kbd> toàn màn hình', hint: 'Bấm “Gọi tên” nhé!', picked: 'Đã gọi'
    } : {
      wheel: '🎡 Wheel', simple: '⚡ Quick pick', mode: 'How to pick', count: 'Students each time', noRep: 'Do not pick the same student twice', sound: 'Sound',
      pick: '🎯 Pick a name', pickN: function (k) { return '🎯 Pick ' + k + ' students'; }, spinning: 'Spinning…', restore: '↺ Start a new round',
      left: function (a, b) { return a + ' of ' + b + ' students not picked yet'; }, all: function (b) { return b + ' students: anyone can come up every time'; },
      empty: 'Add your students’ names to the list above to start.', doneAll: 'Everyone has been picked. Press “Start a new round” to begin again.',
      tooMany: function (n) { return 'The wheel shows up to ' + n + ' names. Bigger classes use Quick pick.'; },
      hist: 'Picked so far', noHist: 'Nobody picked yet.', clearHist: 'Clear the history', clearSure: 'Press again to clear', classH: 'Class list',
      keys: 'Shortcuts: <kbd>Space</kbd> or <kbd>Enter</kbd> to pick · <kbd>F</kbd> full screen', hint: 'Press “Pick a name”!', picked: 'Picked'
    };
    var COLORS = ['#FFD43B', '#FDBA74', '#86EFAC', '#A5B4FC', '#F9A8D4', '#67E8F9', '#FCA5A5', '#C4B5FD', '#BEF264', '#FDE68A'];
    var esc = L.esc, $ = function (s) { return L.$(s, app); }, store = ctx.store;

    app.innerHTML =
      '<div class="tl-panel np-classbox"><h2>👩‍🏫 ' + esc(S.classH) + '</h2><div class="np-cls"></div></div>' +
      '<div class="np-wrap" style="margin-top:12px">' +
      '  <div class="tl-stage np-stagewrap"><div class="tl-stage-bar"><button type="button" class="btn btn-outline btn-sm np-full"></button></div>' +
      '    <div class="np-stage">' +
      '      <div class="np-wheel" hidden><div class="np-ptr" aria-hidden="true"></div><svg viewBox="0 0 400 400" aria-hidden="true"><g class="np-rot"></g><circle class="np-hub" cx="200" cy="200" r="22"/></svg></div>' +
      '      <div class="np-simple" hidden><div class="np-flash" aria-hidden="true"></div></div>' +
      '      <div class="np-result" aria-live="polite"></div>' +
      '      <p class="np-sub"></p>' +
      '      <div class="np-go"><button type="button" class="btn btn-big np-pick"></button><button type="button" class="btn btn-outline np-restore" hidden>' + esc(S.restore) + '</button></div>' +
      '    </div></div>' +
      '  <div>' +
      '    <div class="tl-panel np-opts">' +
      '      <div class="tl-row"><span class="tl-help">' + esc(S.mode) + '</span><span class="tl-seg" role="group" aria-label="' + esc(S.mode) + '"><button type="button" data-mode="wheel">' + esc(S.wheel) + '</button><button type="button" data-mode="simple">' + esc(S.simple) + '</button></span></div>' +
      '      <label class="tl-row np-k"><span>' + esc(S.count) + '</span><input type="number" class="np-kin" min="1" max="50" step="1" inputmode="numeric"></label>' +
      '      <label class="tl-check"><input type="checkbox" class="np-norep"> ' + esc(S.noRep) + '</label>' +
      '      <label class="tl-check"><input type="checkbox" class="np-sound"> 🔔 ' + esc(S.sound) + '</label>' +
      '      <p class="tl-help np-note" hidden></p>' +
      '      <p class="tl-kbd">' + S.keys + '</p>' +
      '    </div>' +
      '    <div class="tl-panel np-hist"><h2>🕘 ' + esc(S.hist) + '</h2><p class="tl-help np-nohist">' + esc(S.noHist) + '</p><ol reversed></ol>' +
      '      <p><button type="button" class="btn btn-outline btn-sm np-clear">' + esc(S.clearHist) + '</button></p></div>' +
      '  </div>' +
      '</div>';

    var stage = $('.np-stagewrap'), wheel = $('.np-wheel'), rot = $('.np-rot'), simple = $('.np-simple'), flash = $('.np-flash');
    var result = $('.np-result'), sub = $('.np-sub'), pickBtn = $('.np-pick'), restoreBtn = $('.np-restore'), note = $('.np-note');
    var kIn = $('.np-kin'), noRep = $('.np-norep'), sound = $('.np-sound'), histOl = $('.np-hist ol');
    var cls = null, picked = [], hist = [], busy = false, angle = 0, drawn = [];
    var opt = { mode: store.get('mode', 'wheel'), k: store.get('k', 1), noRep: store.get('noRep', true) !== false, sound: store.get('sound', true) !== false };
    noRep.checked = opt.noRep; sound.checked = opt.sound; kIn.value = opt.k;

    function names() { return cls ? cls.names : []; }
    function hat() { return opt.noRep ? P.pool(names(), picked) : names().slice(); }
    function mode() { return opt.mode === 'wheel' && hat().length <= P.WHEEL_MAX ? 'wheel' : 'simple'; }
    function k() { return mode() === 'wheel' ? 1 : Math.max(1, Math.min(50, Math.floor(+kIn.value || 1), hat().length || 1)); }
    function loadClass(c) {
      cls = c;
      picked = P.keepPicked(c.names, store.get('picked:' + c.id, []));
      hist = store.get('hist:' + c.id, []);
      if (!Array.isArray(hist)) hist = [];
      result.textContent = ''; result.classList.remove('many');
      drawWheel(); draw();
    }
    function saveClass() { if (!cls) return; store.set('picked:' + cls.id, picked); store.set('hist:' + cls.id, hist.slice(0, 200)); }

    /* the wheel: one slice per name still in the hat, first slice at the top, clockwise */
    function drawWheel() {
      drawn = hat();
      var n = drawn.length, R = 190, out = '';
      if (!n) { rot.innerHTML = '<circle cx="200" cy="200" r="' + R + '" fill="var(--surface2)" stroke="var(--line)" stroke-width="2"/>'; return; }
      var fs = n <= 10 ? 17 : n <= 18 ? 14 : n <= 30 ? 12 : n <= 45 ? 10 : 8.5, maxc = n <= 10 ? 16 : n <= 30 ? 18 : 22;
      for (var i = 0; i < n; i++) {
        var a0 = (i / n) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2, col = COLORS[i % COLORS.length];
        if (n % COLORS.length === 1 && i === n - 1) col = COLORS[(i + 3) % COLORS.length];   // first and last slice never share a colour
        if (n === 1) out += '<circle cx="200" cy="200" r="' + R + '" fill="' + col + '" stroke="#2B2A33" stroke-width="1.5"/>';
        else out += '<path d="M200 200L' + f(200 + R * Math.cos(a0)) + ' ' + f(200 + R * Math.sin(a0)) + 'A' + R + ' ' + R + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + f(200 + R * Math.cos(a1)) + ' ' + f(200 + R * Math.sin(a1)) + 'Z" fill="' + col + '" stroke="#2B2A33" stroke-width="1.2"/>';
        var mid = ((i + 0.5) / n) * 360 - 90, nm = drawn[i].length > maxc ? drawn[i].slice(0, maxc - 1) + '…' : drawn[i];
        out += '<text class="np-slice-t" x="' + (200 + R - 14) + '" y="' + (200 + fs / 3) + '" text-anchor="end" font-size="' + fs + '" transform="rotate(' + f(mid) + ' 200 200)">' + esc(nm) + '</text>';
      }
      rot.innerHTML = '<circle cx="200" cy="200" r="' + (R + 4) + '" fill="#2B2A33"/>' + out;
    }
    function f(x) { return Math.round(x * 100) / 100; }
    function setAngle(deg, ms) {
      rot.style.transition = ms ? 'transform ' + ms + 'ms cubic-bezier(.12,.7,.1,1)' : 'none';
      rot.style.transform = 'rotate(' + deg + 'deg)';
      angle = deg;
    }

    function draw() {
      var all = names().length, left = hat().length, m = mode();
      wheel.hidden = m !== 'wheel'; simple.hidden = m !== 'simple' || (!busy && !!result.textContent.trim());   // quick pick: the box holds the hint and the shuffle, then the names take its place
      L.$$('[data-mode]', app).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-mode') === opt.mode ? 'true' : 'false'); });
      $('.np-k').hidden = opt.mode === 'wheel' && m === 'wheel';
      note.hidden = !(opt.mode === 'wheel' && m === 'simple'); note.textContent = S.tooMany(P.WHEEL_MAX);
      sub.textContent = !all ? S.empty : opt.noRep ? (left ? S.left(left, all) : S.doneAll) : S.all(all);
      pickBtn.textContent = busy ? S.spinning : k() > 1 ? S.pickN(k()) : S.pick;
      pickBtn.disabled = busy || !left;
      restoreBtn.hidden = !(opt.noRep && picked.length);
      if (m === 'simple' && !busy && !result.textContent) flash.textContent = all ? S.hint : '';
      histOl.innerHTML = hist.slice(0, 200).map(function (h) {
        var t = new Date(h.t), hh = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
        return '<li>' + esc(h.n) + '<time datetime="' + t.toISOString() + '">' + hh + '</time></li>';
      }).reverse().join('');
      $('.np-nohist').hidden = hist.length > 0;
      $('.np-clear').hidden = !hist.length;
    }
    function show(list) {
      result.classList.remove('pop'); void result.offsetWidth;
      result.classList.toggle('many', list.length > 1);
      result.innerHTML = list.length > 1 ? '<ol>' + list.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ol>' : esc(list[0]);
      if (!L.reduced()) result.classList.add('pop');
      if (opt.sound) L.chime('pick');
      var now = Date.now();
      list.forEach(function (n) { hist.push({ n: n, t: now }); });
      if (hist.length > 200) hist = hist.slice(-200);
      if (opt.noRep) picked = picked.concat(list);
      saveClass(); busy = false;
      if (mode() === 'simple') flash.textContent = '';
      draw();
    }
    function pick() {
      if (busy) return;
      var h = hat();
      if (!h.length) return;
      L.unlockSound();
      var kk = k(), idx = L.sampleIndexes(h.length, kk), chosen = idx.map(function (i) { return h[i]; });
      busy = true; draw();
      if (mode() === 'wheel') {
        drawWheel();                      // the hat may have changed since the last spin
        var n = drawn.length, c = idx[0];
        setAngle(((angle % 360) + 360) % 360, 0);
        void rot.getBoundingClientRect();
        var jitter = (L.randInt(1001) / 1000 - 0.5) * 0.7, target = (c + 0.5 + jitter) * 360 / n;
        var turn = ((-target - angle) % 360 + 360) % 360, ms = L.reduced() ? 0 : 4200;
        setAngle(angle + (ms ? 5 * 360 : 0) + turn, ms);
        setTimeout(function () { show(chosen); }, ms + 60);
      } else {
        var steps = L.reduced() ? 0 : 14, i = 0;
        result.textContent = '';
        (function step() {
          if (i++ < steps) { flash.textContent = h[L.randInt(h.length)]; setTimeout(step, 45 + i * 6); }
          else show(chosen);
        })();
      }
    }

    pickBtn.addEventListener('click', pick);
    restoreBtn.addEventListener('click', function () { picked = []; saveClass(); result.textContent = ''; drawWheel(); setAngle(0, 0); draw(); });
    L.$$('[data-mode]', app).forEach(function (b) {
      b.addEventListener('click', function () { if (busy) return; opt.mode = b.getAttribute('data-mode'); store.set('mode', opt.mode); result.textContent = ''; drawWheel(); draw(); });
    });
    kIn.addEventListener('input', function () { opt.k = Math.max(1, Math.min(50, Math.floor(+kIn.value || 1))); store.set('k', opt.k); draw(); });
    noRep.addEventListener('change', function () { opt.noRep = noRep.checked; store.set('noRep', opt.noRep); if (!busy) { drawWheel(); setAngle(0, 0); } draw(); });
    sound.addEventListener('change', function () { opt.sound = sound.checked; store.set('sound', opt.sound); });
    L.confirmButton($('.np-clear'), S.clearSure, function () { hist = []; saveClass(); draw(); });
    L.fullButton($('.np-full'), stage);
    L.keys({ ' ': pick, Enter: pick, f: function () { L.fullscreen(stage); } });

    var editor = L.classEditor($('.np-cls'), function (c) { if (busy) return; loadClass(c); });
    loadClass(editor.current());
  });
}
