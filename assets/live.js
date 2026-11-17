/*
 * Lemonmath, "join your class" (students' phones). The teacher starts a live test from the teachers' corner and
 * shows a 6-digit class code on the projector; a student enters the code and a name here, answers on the phone,
 * and every answer goes straight to the teacher's screen. See assets/teacher.js for the shape of the data.
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi', app = d.getElementById('jn-app');
  if (!app) return;
  var DB = app.getAttribute('data-db');
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function el(tag, cls, html) { var e = d.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fb(method, path, body) {
    return fetch(DB + '/live/' + path + '.json', { method: method, body: body === undefined ? undefined : JSON.stringify(body) }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }
  function drawMath(root) {
    if (!window.katex) return;
    $$('.tex', root).forEach(function (s) { try { window.katex.render(s.textContent, s, { displayMode: s.hasAttribute('data-d'), throwOnError: false, strict: 'ignore' }); s.classList.remove('tex'); } catch (e) {} });
  }
  var T = vi ? {
    code: 'Mã lớp (6 chữ số trên màn chiếu)', name: 'Tên của bạn', go: 'Vào lớp', needCode: 'Bạn nhập đủ 6 chữ số của mã lớp nhé.', needName: 'Bạn nhập tên để thầy cô nhận ra bạn nhé.',
    noRoom: 'Chưa tìm thấy lớp này. Bạn xem lại mã trên màn chiếu nhé.', over: 'Lớp này đã làm bài xong rồi.', err: 'Chưa kết nối được. Bạn kiểm tra mạng rồi thử lại nhé.',
    wait: 'Bạn đã vào lớp! Chờ thầy cô bấm bắt đầu nhé.', hi: 'Chào', q: 'Câu', answered: 'đã làm', submit: 'Nộp bài', edit: 'Xem lại và sửa bài',
    sure: function (k) { return 'Bạn còn ' + k + ' câu chưa làm. Vẫn nộp bài chứ?'; }, sent: 'Bạn đã nộp bài. Chờ thầy cô kết thúc để xem kết quả nhé.', timeUp: 'Hết giờ',
    lost: 'Mất kết nối, đang thử lại… Câu trả lời của bạn vẫn được giữ trên máy.', result: 'Kết quả của bạn', yours: 'Bạn chọn', none: 'chưa trả lời', key: 'Đáp án đúng', closed: 'Thầy cô đã đóng lớp.', review: 'Xem lại từng câu'
  } : {
    code: 'Class code (6 digits on the screen)', name: 'Your name', go: 'Join', needCode: 'Please enter all 6 digits of the class code.', needName: 'Please enter your name so your teacher knows who you are.',
    noRoom: 'This class was not found. Check the code on the screen.', over: 'This class has already finished.', err: 'Could not connect. Check your connection and try again.',
    wait: 'You are in! Wait for your teacher to press start.', hi: 'Hi', q: 'Question', answered: 'answered', submit: 'Hand in', edit: 'Go back and change answers',
    sure: function (k) { return 'You still have ' + k + ' unanswered. Hand in anyway?'; }, sent: 'Handed in. Wait for your teacher to end the test to see your result.', timeUp: 'Time is up',
    lost: 'Connection lost, trying again… Your answers are kept on this device.', result: 'Your result', yours: 'You chose', none: 'no answer', key: 'Correct answer', closed: 'Your teacher has closed the class.', review: 'Go through each question'
  };
  var pin = '', me = null, meta = null, items = null, A = {}, done = false, dirty = false, endAt = 0, state = '', timer = 0, pollT = 0;
  var store = function () { try { localStorage.setItem('lm-live:' + pin, JSON.stringify({ id: me.id, n: me.n, a: A, d: done })); } catch (e) {} };

  app.hidden = false;
  app.innerHTML = '<form id="jn-form" class="jn-form"><label>' + T.code + '<input id="jn-pin" inputmode="numeric" autocomplete="off" maxlength="7" placeholder="123 456"></label>' +
    '<label>' + T.name + '<input id="jn-name" maxlength="30" autocomplete="name"></label><button class="btn" type="submit">' + T.go + '</button><p id="jn-msg" class="tool-msg" aria-live="polite"></p></form><div id="jn-room" hidden></div>';
  var form = $('#jn-form'), box = $('#jn-room'), msg = $('#jn-msg');
  var m0 = /[?&]m=(\d{6})/.exec(location.search); if (m0) $('#jn-pin').value = m0[1];
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var p = $('#jn-pin').value.replace(/\D/g, ''), n = $('#jn-name').value.replace(/\s+/g, ' ').trim().slice(0, 30);
    if (p.length !== 6) { msg.textContent = T.needCode; return; }
    if (!n) { msg.textContent = T.needName; return; }
    msg.textContent = '…';
    fb('GET', p + '/meta').then(function (m) {
      if (!m || !m.ids) { msg.textContent = T.noRoom; return; }
      pin = p;
      var old = null; try { old = JSON.parse(localStorage.getItem('lm-live:' + pin) || 'null'); } catch (e2) {}
      if (m.state === 'end' && !old) { msg.textContent = T.over; return; }
      me = { id: old ? old.id : Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4), n: n };
      if (old) { A = old.a || {}; done = !!old.d; }
      return fb('PATCH', pin + '/p/' + me.id, old ? { n: n } : { n: n, t: { '.sv': 'timestamp' } }).then(function () {
        store(); form.hidden = true; box.hidden = false; msg.textContent = '';
        var b = m.lang === 'en' ? app.getAttribute('data-bank-en') : app.getAttribute('data-bank-vi');
        return fetch(b + m.bank + '.json').then(function (r) { return r.json(); }).then(function (bank) {
          items = [].concat(m.ids).map(function (i) { return bank.items[i]; }).filter(Boolean);
          onMeta(m); poll();
        });
      });
    }).catch(function () { msg.textContent = T.err; });
  });

  function poll() {
    clearTimeout(pollT);
    fb('GET', pin + '/meta').then(function (m) { conn(true); onMeta(m); if (dirty) push(); }, function () { conn(false); })
      .then(function () { if (state !== 'end') pollT = setTimeout(poll, 3000); });
  }
  function conn(ok) { var w = $('#jn-lost'); if (w) w.hidden = ok; }
  function push() {
    dirty = false;
    fb('PATCH', pin + '/p/' + me.id, { n: me.n, a: A, d: done }).catch(function () { dirty = true; conn(false); });
  }
  function onMeta(m) {
    var next = !m ? 'end' : m.state;
    meta = m || meta;
    if (m && m.state === 'run') { var e = Date.now() + (m.left || 0) * 1000; if (Math.abs(e - endAt) > 3000) endAt = e; }
    if (next === state) return;
    state = next;
    clearInterval(timer);
    if (state === 'lobby') lobby();
    else if (state === 'run') { run(); timer = setInterval(clock, 1000); clock(); }
    else result(!m);
  }
  function head(extra) {
    return '<div class="jn-bar"><span class="jn-who">' + esc(me.n) + '</span>' + (extra || '') + '</div><p id="jn-lost" class="jn-lost" hidden>' + T.lost + '</p>';
  }
  function mascot() { var art = $('.foot-mark'), c = el('div', 'jn-art'); if (art) { var x = art.cloneNode(true); x.setAttribute('class', 'fb-mascot'); c.appendChild(x); } return c; }
  function lobby() {
    box.innerHTML = head() + '<div class="jn-wait"><p><b>' + T.hi + ' ' + esc(me.n) + '!</b><br>' + T.wait + '</p></div>';
    $('.jn-wait', box).insertBefore(mascot(), $('.jn-wait', box).firstChild);
  }
  function count() { return items.filter(function (it, i) { return A[i]; }).length; }
  function clock() {
    var s = Math.max(0, Math.round((endAt - Date.now()) / 1000)), c = $('#jn-clock');
    if (c) { c.textContent = s > 0 ? (Math.floor(s / 60) < 10 ? '0' : '') + Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60) : T.timeUp; c.classList.toggle('low', s <= 60); }
  }
  function run() {
    if (done) { sent(); return; }
    box.innerHTML = head('<span id="jn-clock" class="jn-clock"></span><span id="jn-n" class="jn-n"></span>') + items.map(function (it, i) {
      return '<section class="jn-q" data-i="' + i + '"><div class="jn-stem"><b>' + T.q + ' ' + (i + 1) + '.</b> ' + it.q + '</div><div class="jn-opts c' + (it.c || 1) + '">' +
        it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<button type="button" data-a="' + L + '" aria-pressed="' + (A[i] === L) + '"><b>' + L + '.</b> <span>' + o + '</span></button>'; }).join('') + '</div></section>';
    }).join('') + '<p class="jn-end"><button type="button" class="btn" id="jn-submit">' + T.submit + '</button></p>';
    drawMath(box);
    var upd = function () { $('#jn-n').textContent = count() + '/' + items.length + ' ' + T.answered; };
    upd();
    box.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('.jn-opts button') : null;
      if (b && state === 'run' && !done) {
        var q = b.closest('.jn-q'), i = +q.getAttribute('data-i'), L = b.getAttribute('data-a');
        if (A[i] === L) delete A[i]; else A[i] = L;
        $$('button', q).forEach(function (x) { x.setAttribute('aria-pressed', String(A[i] === x.getAttribute('data-a'))); });
        upd(); store(); dirty = true; clearTimeout(run.t); run.t = setTimeout(function () { if (dirty) push(); }, 400);
      }
    };
    $('#jn-submit').addEventListener('click', function () {
      var left = items.length - count();
      if (left && !window.confirm(T.sure(left))) return;
      done = true; store(); push(); sent();
    });
  }
  function sent() {
    box.onclick = null;
    box.innerHTML = head('<span id="jn-clock" class="jn-clock"></span>') + '<div class="jn-wait"><p><b>' + T.sent + '</b></p><p><button type="button" class="btn btn-outline" id="jn-edit">' + T.edit + '</button></p></div>';
    $('.jn-wait', box).insertBefore(mascot(), $('.jn-wait', box).firstChild);
    $('#jn-edit').addEventListener('click', function () { if (state !== 'run') return; done = false; store(); push(); run(); clock(); });
    window.scrollTo(0, 0);
  }
  function result(gone) {
    box.onclick = null; done = true; store(); if (!gone) push();
    var got = 0, st = { n: items.length, blank: 0, wrong: [], tf: { pts: 0, max: 0 }, sa: { n: 0, ok: 0 }, written: [] };
    items.forEach(function (it, i) { if (A[i] === it.k) got++; else st.wrong.push(String(i + 1)); if (!A[i]) st.blank++; });
    box.innerHTML = head() + (gone ? '<p class="jn-lost">' + T.closed + '</p>' : '') + '<h2 id="jn-res">' + T.result + '</h2><h2 class="jn-rev">' + T.review + '</h2>' + items.map(function (it, i) {
      return '<section class="jn-q"><div class="jn-stem"><b>' + T.q + ' ' + (i + 1) + '.</b> ' + it.q + '</div><div class="jn-opts c1">' +
        it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<div class="jn-o' + (L === it.k ? ' ok' : A[i] === L ? ' no' : '') + '"><b>' + L + '.</b> <span>' + o + '</span></div>'; }).join('') + '</div>' +
        '<p class="jn-mine">' + T.yours + ': <b>' + (A[i] || T.none) + '</b> · ' + T.key + ': <b>' + it.k + '</b></p>' + (it.e ? '<div class="jn-expl">' + it.e + '</div>' : '') + '</section>';
    }).join('');
    drawMath(box);
    if (window.lmFeedback) window.lmFeedback.show($('#jn-res'), got, items.length, st, '');
    window.scrollTo(0, 0);
  }
})();
