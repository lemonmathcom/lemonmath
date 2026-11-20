/*
 * Lemonmath, homework set by a teacher (students' phones): /vi/lam-bai/?m=<code> and /homework/?m=<code>.
 * The teacher creates the assignment in "My classes" (assets/classroom.js); it opens and closes at the times the teacher
 * chose, and the server (api/, Cloudflare Worker) decides the time, not the phone's clock.
 * The student picks their name from the class list and types the 4-digit personal code the teacher gave them.
 * Every answer is kept on the phone at once (localStorage) and sent to the server every few seconds, so a lost
 * connection costs nothing: when time runs out the phone locks the answers and sends them as soon as it can
 * (the server accepts them for 15 minutes after the deadline and marks them late).
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi', app = d.getElementById('hw-app');
  if (!app) return;
  var API = (app.getAttribute('data-api') || '').replace(/\/+$/, ''), LS = 'lm-hw:';
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function el(tag, cls, html) { var e = d.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function drawMath(root) {
    if (!window.katex) return;
    $$('.tex', root).forEach(function (s) { try { window.katex.render(s.textContent, s, { displayMode: s.hasAttribute('data-d'), throwOnError: false, strict: 'ignore' }); s.classList.remove('tex'); } catch (e) {} });
  }
  /* Questions come from the site's question bank, but through the teacher's account: keep only harmless markup. */
  var OK_TAGS = /^(p|span|b|strong|i|em|u|s|sub|sup|br|hr|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|caption|div|small|code|figure|figcaption|img|svg|g|path|line|circle|ellipse|rect|polygon|polyline|text|tspan|defs|marker|title|desc|lineargradient|stop|clippath|use)$/;
  function safe(html) {
    var t = d.createElement('template'); t.innerHTML = String(html == null ? '' : html);
    (function walk(node) {
      Array.prototype.slice.call(node.children || node.childNodes).forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (!OK_TAGS.test(n.localName.toLowerCase())) { n.remove(); return; }
        Array.prototype.slice.call(n.attributes).forEach(function (a) {
          var k = a.name.toLowerCase(), v = a.value.replace(/\s+/g, '').toLowerCase();
          if (/^on/.test(k) || ((k === 'href' || k === 'src' || k === 'xlink:href') && /^(javascript|vbscript|data:text)/.test(v)) || (k === 'style' && /url\(|expression|@import/.test(v))) n.removeAttribute(a.name);
        });
        walk(n);
      });
    })(t.content);
    return t.innerHTML;
  }

  var T = vi ? {
    code: 'Mã bài (6 kí tự thầy cô gửi)', open: 'Mở bài', needCode: 'Bạn nhập đủ 6 kí tự của mã bài nhé.', noHw: 'Chưa tìm thấy bài này. Bạn xem lại mã thầy cô gửi nhé.',
    err: 'Chưa kết nối được. Bạn kiểm tra mạng rồi thử lại nhé.', retry: 'Thử lại',
    by: function (t, c) { return 'Lớp ' + c + ' · ' + t; },
    fStart: function (a, b) { return 'Bắt đầu ' + a + ' · vào muộn nhất ' + b; }, fDur: function (m) { return m + ' phút, tính từ lúc bấm Bắt đầu, không dừng khi thoát ra'; },
    fAway: 'Rời khỏi trang khi đang làm sẽ được ghi lại cho thầy cô', fDue: function (t) { return 'Hạn nộp ' + t; }, fMax: function (m) { return 'Mỗi bạn làm tối đa ' + m + ' phút'; }, opens: 'Mở lúc', closes: 'Đóng lúc', dur: function (m) { return 'Thời gian làm: ' + m + ' phút kể từ lúc bấm bắt đầu'; },
    nq: function (n, p) { var a = []; if (p.mc) a.push(p.mc + ' câu nhiều lựa chọn'); if (p.tf) a.push(p.tf + ' câu đúng sai'); if (p.sa) a.push(p.sa + ' câu trả lời ngắn'); return n + ' câu: ' + a.join(', '); },
    modes: { home: 'Bài tập về nhà', test: 'Bài kiểm tra', class2: 'Bài luyện tập buổi 2', free: 'Luyện tập tự nguyện cùng bố mẹ' },
    tStarts: 'Bắt đầu lúc', tLast: 'Vào muộn nhất lúc', tDur: function (m) { return 'Thời gian làm bài: ' + m + ' phút. Đồng hồ chạy từ lúc bấm bắt đầu và không dừng lại khi thoát ra.'; },
    tStart: 'Bắt đầu làm bài kiểm tra', tSure: function (m) { return 'Bắt đầu bài kiểm tra? Bạn có ' + m + ' phút, đồng hồ chạy liên tục kể từ bây giờ.'; },
    lateStart: function (t) { return 'Đã quá giờ vào làm bài kiểm tra (muộn nhất lúc ' + t + '). Bạn báo thầy cô nhé.'; },
    who: 'Bạn là ai?', pick: 'Chọn số thứ tự và tên của bạn…', pin: 'Mã cá nhân (4 chữ số thầy cô phát)', start: 'Bắt đầu làm bài', cont: 'Làm tiếp',
    needWho: 'Bạn chọn tên của mình trong danh sách nhé.', needPin: 'Bạn nhập đủ 4 chữ số của mã cá nhân nhé.',
    badPin: function (n) { return 'Mã cá nhân chưa đúng. Bạn còn ' + n + ' lần thử.'; }, pinLocked: 'Bạn đã nhập sai mã nhiều lần nên tên này tạm khóa. Bạn nhờ thầy cô mở lại nhé.',
    taken: 'Tên này đã có người bắt đầu làm trên một máy khác. Nếu đó không phải bạn, hãy báo thầy cô.', noStudent: 'Không tìm thấy tên này trong lớp. Bạn báo thầy cô nhé.',
    notOpen: 'Bài chưa mở.', opensIn: 'Bài mở sau', closed: 'Bài đã đóng lúc', closedNo: 'Bạn chưa làm bài này, và bài đã đóng. Bạn báo thầy cô nếu cần làm bù nhé.',
    other: 'Bài của bạn vừa được mở trên một máy khác, nên máy này tạm dừng. Muốn làm tiếp ở máy này, bạn nhập lại mã cá nhân.',
    hi: 'Chào', left: 'Còn', due: 'Hạn nộp', q: 'Câu', answered: 'đã làm', parts: ['Phần I. Chọn một phương án', 'Phần II. Mỗi ý chọn Đúng hoặc Sai', 'Phần III. Viết đáp số'], stT: 'Đúng', stF: 'Sai', ph: 'Đáp số',
    note: 'Ghi lời giải từng câu vào vở trước khi chọn đáp án nhé. Câu trả lời được lưu ngay trên máy, mất mạng vẫn làm tiếp được.',
    submit: 'Nộp bài', sure: function (k) { return 'Bạn còn ' + k + ' câu chưa làm. Vẫn nộp bài chứ?'; }, sure0: 'Nộp bài bây giờ? Nộp rồi thì không sửa được nữa.',
    lost: 'Đang mất mạng. Câu trả lời vẫn được giữ trên máy và sẽ tự gửi khi có mạng lại.', saved: 'Đã lưu', saving: 'Đang lưu…',
    timeUp: 'Hết giờ', locked: function (t) { return 'Bài đã khóa lúc ' + t + '. Máy đang chờ mạng để gửi bài.'; },
    keepOpen: 'Bạn đừng xóa dữ liệu trình duyệt. Khi có mạng, mở lại trang này là bài tự gửi (trong vòng 15 phút sau giờ đóng). Bài gửi muộn vì mạng sẽ được đánh dấu để thầy cô xem xét.',
    tooLate: 'Bài đã đóng trước khi máy gửi được những câu cuối. Những câu đã lưu trước giờ đóng vẫn được chấm; kết quả sẽ hiện ở đây sau ít phút. Nếu cần, bạn báo thầy cô nhé.',
    result: 'Kết quả của bạn', auto: 'Hết giờ nên bài được tự nộp với những câu bạn đã làm.', late: 'Bài đến muộn vì mất mạng, đã được đánh dấu để thầy cô xem xét.',
    keyAt: function (t) { return 'Đáp án và lời giải sẽ hiện ở đây sau khi bài đóng (' + t + '), để các bạn làm sau không thấy trước. Giữ trang này mở, hoặc quay lại sau giờ đó.'; }, showKey: 'Xem đáp án và lời giải', keyReady: 'Bài đã đóng: đáp án và lời giải đã có.', notYet: 'Chưa tới giờ xem đáp án.',
    tNote: 'Bài kiểm tra: làm nháp ra giấy, bài chỉ nộp một lần. Đáp án và lời giải hiện sau khi bài đóng. Câu trả lời được lưu ngay trên máy, mất mạng vẫn làm tiếp được.',
    tAway: 'Trong lúc làm, mỗi lần bạn rời khỏi trang (mở ứng dụng khác, chuyển thẻ, tải lại trang) đều được ghi lại để thầy cô biết.',
    awayNow: function (n) { return 'Bạn vừa rời trang (lần ' + n + '). Thầy cô sẽ thấy số lần này.'; },
    hwNext: 'Bài tập về nhà để luyện tập: điểm lần nộp đầu được ghi cho thầy cô. Đọc kĩ lời giải những câu sai, rồi luyện lại cho chắc.',
    tNext: 'Đây là bài kiểm tra: điểm được ghi lại, không làm lại được.',
    again: 'Luyện lại (không tính điểm)', pNote: 'Luyện lại: làm lại các câu, bấm Kiểm tra để xem đúng sai. Lần này không gửi đi và không tính điểm.', pCheck: 'Kiểm tra', pBack: 'Về kết quả',
    pScore: function (g, n) { return 'Lần luyện này đúng ' + g + '/' + n + ' câu.'; },
    review: 'Xem lại từng câu', yours: 'Bạn chọn', none: 'chưa trả lời', key: 'Đáp án đúng', switchMe: 'Không phải bạn? Đổi tên khác', home: 'Về trang chủ Lemonmath',
    now: 'đang mở', soon: 'sắp mở', over: 'đã đóng'
  } : {
    code: 'Assignment code (6 characters from your teacher)', open: 'Open', needCode: 'Please enter all 6 characters of the code.', noHw: 'This assignment was not found. Check the code your teacher sent.',
    err: 'Could not connect. Check your connection and try again.', retry: 'Try again',
    by: function (t, c) { return 'Class ' + c + ' · ' + t; },
    fStart: function (a, b) { return 'Starts ' + a + ' · start by ' + b; }, fDur: function (m) { return m + ' minutes from when you press Start; the clock does not stop if you leave'; },
    fAway: 'Leaving the page while you work is recorded for your teacher', fDue: function (t) { return 'Due ' + t; }, fMax: function (m) { return 'Up to ' + m + ' minutes each'; }, opens: 'Opens', closes: 'Closes', dur: function (m) { return 'Time allowed: ' + m + ' minutes from when you press start'; },
    nq: function (n, p) { var a = []; if (p.mc) a.push(p.mc + ' multiple choice'); if (p.tf) a.push(p.tf + ' true/false'); if (p.sa) a.push(p.sa + ' short answer'); return n + ' questions: ' + a.join(', '); },
    modes: { home: 'Homework', test: 'Test', class2: 'Practice in class', free: 'Optional practice with your parents' },
    tStarts: 'Starts at', tLast: 'Start by', tDur: function (m) { return 'Time allowed: ' + m + ' minutes. The clock runs from when you press Start and does not stop if you leave the page.'; },
    tStart: 'Start the test', tSure: function (m) { return 'Start the test? You have ' + m + ' minutes, and the clock runs from now.'; },
    lateStart: function (t) { return 'It is too late to start this test (the last start was ' + t + '). Please tell your teacher.'; },
    who: 'Who are you?', pick: 'Choose your number and name…', pin: 'Personal code (the 4 digits your teacher gave you)', start: 'Start', cont: 'Carry on',
    needWho: 'Please choose your name from the list.', needPin: 'Please enter all 4 digits of your personal code.',
    badPin: function (n) { return 'That personal code is not right. ' + n + (n === 1 ? ' try' : ' tries') + ' left.'; }, pinLocked: 'Too many wrong codes, so this name is locked for now. Ask your teacher to unlock it.',
    taken: 'Someone has already started with this name on another device. If that was not you, tell your teacher.', noStudent: 'This name is not in the class. Tell your teacher.',
    notOpen: 'Not open yet.', opensIn: 'Opens in', closed: 'Closed at', closedNo: 'You have not done this one and it has closed. Ask your teacher if you need to catch up.',
    other: 'Your work was just opened on another device, so this one has stopped. To carry on here, enter your personal code again.',
    hi: 'Hi', left: 'Left', due: 'Due', q: 'Question', answered: 'answered', parts: ['Part I. Choose one option', 'Part II. Mark each statement true or false', 'Part III. Write your answer'], stT: 'True', stF: 'False', ph: 'Answer',
    note: 'Write your working for each question in your exercise book before you choose. Answers are kept on this device at once, so you can carry on without a connection.',
    submit: 'Hand in', sure: function (k) { return 'You still have ' + k + ' unanswered. Hand in anyway?'; }, sure0: 'Hand in now? You cannot change anything after that.',
    lost: 'No connection. Your answers are kept on this device and will be sent when the connection is back.', saved: 'Saved', saving: 'Saving…',
    timeUp: 'Time is up', locked: function (t) { return 'Your answers were locked at ' + t + '. Waiting for a connection to send them.'; },
    keepOpen: 'Do not clear your browser data. When you are back online, open this page again and it sends itself (within 15 minutes of the closing time). Work sent late because of the connection is marked for your teacher.',
    tooLate: 'The assignment closed before this device could send your last answers. Everything saved before the closing time is still marked; your result will appear here in a few minutes. Tell your teacher if you need to.',
    result: 'Your result', auto: 'Time ran out, so your work was handed in with the questions you had answered.', late: 'Your work arrived late because of the connection and is marked for your teacher.',
    keyAt: function (t) { return 'The answers and explanations appear here after it closes (' + t + '), so classmates who work later cannot see them first. Keep this page open, or come back after that time.'; }, showKey: 'See answers and explanations', keyReady: 'It has closed: the answers and explanations are ready.', notYet: 'Not time for the answers yet.',
    tNote: 'This is a test: work on scrap paper, you can hand in only once. Answers and explanations appear after it closes. Your answers are saved on this device, so you can carry on without a connection.',
    tAway: 'While you work, each time you leave the page (another app, another tab, reloading) is recorded for your teacher.',
    awayNow: function (n) { return 'You left the page (time ' + n + '). Your teacher will see this count.'; },
    hwNext: 'Homework is for practice: the score of your first hand-in goes to your teacher. Read the explanations for the ones you missed, then practise again.',
    tNext: 'This is a test: the score is recorded and it cannot be taken again.',
    again: 'Practise again (not scored)', pNote: 'Practice: answer again, press Check to see what is right. Nothing is sent and nothing is scored.', pCheck: 'Check', pBack: 'Back to the result',
    pScore: function (g, n) { return 'This time: ' + g + '/' + n + ' right.'; },
    review: 'Go through each question', yours: 'You chose', none: 'no answer', key: 'Correct answer', switchMe: 'Not you? Choose another name', home: 'Lemonmath home page',
    now: 'open', soon: 'opens soon', over: 'closed'
  };

  var code = '', info = null, st = null, skew = 0, items = null, A = {}, deadline = 0, tickT = 0, syncT = 0, retryT = 0, syncing = false, view = '';
  function now() { return Date.now() + skew; }
  function load(c) { try { return JSON.parse(localStorage.getItem(LS + c) || 'null'); } catch (e) { return null; } }
  function keep() { try { localStorage.setItem(LS + code, JSON.stringify(st)); } catch (e) {} }
  function api(method, path, body) {
    return fetch(API + path, { method: method, headers: body ? { 'Content-Type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (j && j.now) skew = j.now - Date.now(); j.status = r.status; return j; }); },
        function () { return { status: 0, error: 'offline' }; });
  }
  var fmtDT = function (t, withDay) {
    try { return new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', withDay ? { hour: '2-digit', minute: '2-digit', weekday: 'long', day: 'numeric', month: 'numeric' } : { hour: '2-digit', minute: '2-digit' }).format(new Date(t)); } catch (e) { return new Date(t).toLocaleString(); }
  };
  function span(ms) {
    var s = Math.max(0, Math.round(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    if (h >= 24) return Math.floor(h / 24) + (vi ? ' ngày ' : (Math.floor(h / 24) === 1 ? ' day ' : ' days ')) + (h % 24) + (vi ? ' giờ' : ' h');
    return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (x < 10 ? '0' : '') + x;
  }

  /* ------------------------------------------------------------ 1. the code */
  app.hidden = false;
  var m0 = /[?&]m=([0-9a-z]{6})/i.exec(location.search) || /^#([0-9a-z]{6})$/i.exec(location.hash);
  if (m0) open(m0[1].toUpperCase()); else codeForm('');

  function codeForm(msg) {
    view = 'code'; stopAll();
    app.innerHTML = '<form class="jn-form" id="hw-code"><label>' + T.code + '<input id="hw-c" maxlength="7" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="A2B3C4"></label><button class="btn" type="submit">' + T.open + '</button><p class="tool-msg" id="hw-msg" aria-live="polite">' + esc(msg) + '</p></form>';
    $('#hw-code').addEventListener('submit', function (e) {
      e.preventDefault();
      var c = $('#hw-c').value.toUpperCase().replace(/[^0-9A-Z]/g, '');
      if (c.length !== 6) { $('#hw-msg').textContent = T.needCode; return; }
      try { history.replaceState(null, '', '?m=' + c); } catch (e2) {}
      open(c);
    });
  }

  function open(c) {
    code = c; st = load(c) || { code: c };
    app.innerHTML = '<p class="tool-msg">…</p>';
    api('GET', '/v1/hw/' + c).then(function (r) {
      if (r.status === 404) { if (st.items) { st.gone = true; keep(); } codeForm(T.noHw); return; }
      if (r.status !== 200) {
        if (st.info) info = st.info;
        if (st.token && st.items) { resume(); return; }        // no connection: carry on with what this phone already has
        app.innerHTML = '<p class="jn-lost">' + T.err + '</p><p><button class="btn" type="button" id="hw-retry">' + T.retry + '</button></p>';
        $('#hw-retry').addEventListener('click', function () { open(c); });
        return;
      }
      info = r; st.info = r; keep();
      if (st.token) start({ token: st.token }); else who('');
    });
  }

  /* ------------------------------------------------------------ 2. who are you */
  function headHtml() {
    var p = info.parts || {}, t = now(), state = t < info.open_at ? T.soon : t < info.close_at ? T.now : T.over, test = isTest(), f = [];
    if (test) {
      f.push(['🕗', T.fStart(fmtDT(info.open_at, true), fmtDT(lastStart()))]);
      f.push(['⏱', T.fDur(info.duration_min)]);
      f.push(['👀', T.fAway]);
    } else {
      if (t < info.open_at) f.push(['🔓', T.opens + ' ' + fmtDT(info.open_at, true)]);
      f.push(['📅', T.fDue(fmtDT(info.close_at, true))]);
      if (info.duration_min) f.push(['⏱', T.fMax(info.duration_min)]);
    }
    f.push(['📝', T.nq(info.n, p)]);
    return '<div class="hw-head"><p class="hw-mode"><span class="hw-kind k-' + esc(info.mode) + '">' + esc(T.modes[info.mode] || '') + '</span> <b>' + esc(state) + '</b></p><h2>' + esc(info.title) + '</h2>' +
      '<p class="hw-meta">' + esc(T.by(info.teacher, info.class_name)) + '</p><ul class="hw-facts">' + f.map(function (x) { return '<li><span aria-hidden="true">' + x[0] + '</span> ' + esc(x[1]) + '</li>'; }).join('') + '</ul></div>';
  }
  function isTest() { return info && info.mode === 'test' && info.duration_min > 0; }
  function lastStart() { return info.close_at - info.duration_min * 60e3; }
  function who(msg) {
    view = 'who'; stopAll();
    var closed = now() >= info.close_at;
    app.innerHTML = headHtml() + '<form class="jn-form hw-who" id="hw-who"><h3>' + T.who + '</h3><label class="sr" for="hw-sid">' + T.pick + '</label><select id="hw-sid"><option value="">' + T.pick + '</option>' +
      info.roster.map(function (s) { return '<option value="' + esc(s.id) + '"' + (st.sid === s.id ? ' selected' : '') + '>' + s.no + '. ' + esc(s.nick) + '</option>'; }).join('') + '</select>' +
      (info.require_pin ? '<label>' + T.pin + '<input id="hw-pin" inputmode="numeric" autocomplete="off" maxlength="4" pattern="[0-9]*"></label>' : '') +
      '<button class="btn" type="submit" id="hw-go">' + (isTest() ? T.tStart : T.start) + '</button><p class="tool-msg" id="hw-msg" aria-live="polite">' + esc(msg) + '</p><p class="hw-wait" id="hw-wait"></p></form>';
    var go = $('#hw-go'), wait = $('#hw-wait');
    var gate = function () {
      var t = now();
      if (t < info.open_at) { go.disabled = true; wait.textContent = T.opensIn + ' ' + span(info.open_at - t); }
      else { go.disabled = false; wait.textContent = closed ? T.closed + ' ' + fmtDT(info.close_at, true) : ''; clearInterval(tickT); }
    };
    gate(); if (now() < info.open_at) tickT = setInterval(gate, 1000);
    $('#hw-who').addEventListener('submit', function (e) {
      e.preventDefault();
      var sid = $('#hw-sid').value, pin = info.require_pin ? $('#hw-pin').value.replace(/\D/g, '') : '';
      if (!sid) { $('#hw-msg').textContent = T.needWho; return; }
      if (info.require_pin && pin.length !== 4) { $('#hw-msg').textContent = T.needPin; return; }
      if (isTest() && !st.started && !window.confirm(T.tSure(info.duration_min))) return;
      st.sid = sid; keep(); go.disabled = true; $('#hw-msg').textContent = '…';
      start({ sid: sid, pin: pin });
    });
  }

  function start(body) {
    api('POST', '/v1/hw/' + code + '/start', body).then(function (r) {
      if (r.status === 200) {
        st.token = r.token || st.token; st.name = r.name; st.items = r.items; st.deadline = r.deadline; st.started = true; st.close_at = r.close_at; st.started_at = r.started_at; st.duration_min = r.duration_min;
        // answers typed on this phone but not yet sent win over the copy on the server
        if (!st.dirty || !st.answers) st.answers = r.answers || {};
        if (r.submitted) { st.submitted = true; st.result = r.result; st.dirty = false; st.pending = false; }
        keep(); resume(); return;
      }
      var e = r.error;
      if (r.status === 0) { if (st.token && st.items) resume(); else who(T.err); return; }
      if (e === 'token') { st.token = null; keep(); who(T.other); return; }
      if (e === 'bad_pin') { who(T.badPin(r.left)); return; }
      if (e === 'pin_locked') { who(T.pinLocked); return; }
      if (e === 'taken') { who(T.taken); return; }
      if (e === 'no_student') { st.sid = null; keep(); who(T.noStudent); return; }
      if (e === 'not_open') { info.open_at = r.open_at || info.open_at; who(T.notOpen); return; }
      if (e === 'closed') { who(T.closedNo); return; }
      if (e === 'late_start') { who(T.lateStart(fmtDT(r.last_start || lastStart()))); return; }
      who(T.err);
    });
  }

  /* ------------------------------------------------------------ 3. the work */
  function resume() {
    items = st.items; A = st.answers || {}; deadline = st.deadline || (info && info.close_at) || 0;
    if (st.submitted && st.result) { result(); return; }
    if (st.pending || now() >= deadline) { lockAndSend(); return; }
    work();
  }
  function stopAll() { clearInterval(tickT); clearTimeout(tickT); clearTimeout(syncT); clearTimeout(retryT); clearTimeout(beatT); app.onclick = null; app.oninput = null; }
  function has(it, a) { a = a == null ? '' : String(a); return it.y === 'tf' ? /[TF]/.test(a) : a.trim() !== ''; }
  function count() { return items.filter(function (it, i) { return has(it, A[i]); }).length; }
  function partHead(i) { var j = ['mc', 'tf', 'sa'].indexOf(items[i].y), mixed = items.some(function (it) { return it.y !== items[0].y; }); return mixed && (i === 0 || items[i - 1].y !== items[i].y) ? '<h2 class="jn-part">' + T.parts[j] + '</h2>' : ''; }
  function bar(extra) { return '<div class="jn-bar"><span class="jn-who">' + esc(st.name || '') + '</span>' + (extra || '') + '</div><p id="hw-lost" class="jn-lost" hidden>' + T.lost + '</p>'; }
  function clock() {
    var c = $('#jn-clock'), left = deadline - now();
    if (c) {
      c.textContent = left > 0 ? (left > 2 * 3600e3 ? T.due + ' ' + fmtDT(deadline, false) : span(left)) : T.timeUp;
      c.classList.toggle('low', left <= 5 * 60e3);
    }
    if (left <= 0 && view === 'work') lockAndSend();
  }
  function work() {
    view = 'work'; stopAll();
    app.innerHTML = bar('<span id="jn-clock" class="jn-clock"></span><span id="jn-n" class="jn-n"></span><span id="hw-sv" class="hw-sv"></span>') +
      '<p class="hw-note">' + (isTest() ? T.tNote : T.note) + '</p>' + items.map(function (it, i) { return qHtml(it, i, A); }).join('') + '<p class="jn-end"><button type="button" class="btn" id="hw-submit">' + T.submit + '</button></p>';
    drawMath(app);
    var upd = function () { $('#jn-n').textContent = count() + '/' + items.length + ' ' + T.answered; };
    upd();
    bindAnswers(function () { upd(); st.answers = A; st.dirty = true; keep(); sv(''); clearTimeout(syncT); syncT = setTimeout(sync, 4000); });
    $('#hw-submit').addEventListener('click', function () {
      var left = items.length - count();
      if (!window.confirm(left ? T.sure(left) : T.sure0)) return;
      lockAndSend();
    });
    clock(); if (view === 'work') tickT = setInterval(clock, 1000);
    if (st.dirty) sync();
    beat();
  }
  function qHtml(it, i, ans) {
        var a = ans[i] == null ? '' : String(ans[i]), inner;
        if (it.y === 'mc') inner = '<div class="jn-opts c' + (it.c || 1) + '">' + it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<button type="button" data-a="' + L + '" aria-pressed="' + (a === L) + '"><b>' + L + '.</b> <span>' + safe(o) + '</span></button>'; }).join('') + '</div>';
        else if (it.y === 'tf') inner = '<div class="jn-tf">' + it.o.map(function (o, k) {
          return '<div class="jn-st" data-k="' + k + '"><div class="jn-stx"><b>' + 'abcd'[k] + ')</b> ' + safe(o) + '</div><div class="jn-stb"><button type="button" data-t="T" aria-pressed="' + (a.charAt(k) === 'T') + '">' + T.stT + '</button><button type="button" data-t="F" aria-pressed="' + (a.charAt(k) === 'F') + '">' + T.stF + '</button></div></div>';
        }).join('') + '</div>';
        else inner = '<p class="jn-sa"><input type="text" inputmode="decimal" maxlength="20" autocomplete="off" placeholder="' + T.ph + '" value="' + esc(a) + '"></p>';
        return partHead(i) + '<section class="jn-q" data-i="' + i + '"><div class="jn-stem"><b>' + T.q + ' ' + (i + 1) + '.</b> ' + safe(it.q) + '</div>' + inner + '</section>';
  }
  /* taps and typing on the questions; A is the answers object of the view (work, or practice after a homework) */
  function bindAnswers(changed) {
    app.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('.jn-opts button, .jn-st button') : null;
      if (!b || (view !== 'work' && view !== 'practice')) return;
      var q = b.closest('.jn-q'), i = +q.getAttribute('data-i');
      if (b.hasAttribute('data-a')) {
        var L = b.getAttribute('data-a');
        if (A[i] === L) delete A[i]; else A[i] = L;
        $$('button', q).forEach(function (x) { x.setAttribute('aria-pressed', String(A[i] === x.getAttribute('data-a'))); });
      } else {
        var row = b.closest('.jn-st'), k = +row.getAttribute('data-k'), cur = (A[i] ? String(A[i]) : '----').split(''), v = b.getAttribute('data-t');
        cur[k] = cur[k] === v ? '-' : v;
        if (/[TF]/.test(cur.join(''))) A[i] = cur.join(''); else delete A[i];
        $$('button', row).forEach(function (x) { x.setAttribute('aria-pressed', String(cur[k] === x.getAttribute('data-t'))); });
      }
      changed();
    };
    app.oninput = function (e) {
      var inp = e.target; if (!inp.closest || !inp.closest('.jn-sa') || (view !== 'work' && view !== 'practice')) return;
      var i = +inp.closest('.jn-q').getAttribute('data-i'), v = inp.value.trim().slice(0, 20);
      if (v) A[i] = v; else delete A[i];
      changed();
    };
  }
  /* every minute while working: the teacher may have extended or closed the assignment */
  var beatT = 0;
  function beat() {
    clearTimeout(beatT);
    beatT = setTimeout(function () {
      if (view !== 'work') return;
      api('GET', '/v1/hw/' + code).then(function (r) {
        if (view !== 'work') return;
        if (r.status === 200) {
          lost(false); info = r; st.info = r;
          var dl = r.close_at; if (r.duration_min && st.started_at) dl = Math.min(dl, st.started_at + r.duration_min * 60e3);
          if (dl !== deadline) { deadline = st.deadline = dl; clock(); }
          keep();
        } else if (r.status === 0) lost(true);
        if (st.dirty) sync();
        beat();
      });
    }, 60000);
  }
  function sv(t) { var x = $('#hw-sv'); if (x) x.textContent = t; }
  function lost(on) { var w = $('#hw-lost'); if (w) w.hidden = !on; }
  function sync() {
    clearTimeout(syncT);
    if (!st.dirty || syncing || view !== 'work') return;
    syncing = true; sv(T.saving);
    var sent = JSON.stringify(A);
    api('PUT', '/v1/hw/' + code + '/save', { token: st.token, answers: A, away: st.away || 0 }).then(function (r) {
      syncing = false;
      if (r.status === 200) { lost(false); if (JSON.stringify(A) === sent) { st.dirty = false; keep(); sv('✓ ' + T.saved); } else syncT = setTimeout(sync, 2000); if (r.deadline) { deadline = st.deadline = r.deadline; keep(); } return; }
      if (r.error === 'token') { st.token = null; keep(); who(T.other); return; }
      if (r.error === 'submitted') { fetchResult(); return; }
      if (r.error === 'closed') { if (r.deadline) { deadline = st.deadline = r.deadline; keep(); } lockAndSend(); return; }
      lost(true); sv(''); syncT = setTimeout(sync, 15000);
    });
  }
  /* closing the tab or switching apps: send what is there (no answer needed) */
  function beacon() {
    if (view !== 'work' || !st || !st.dirty || !navigator.sendBeacon) return;
    try { navigator.sendBeacon(API + '/v1/hw/' + code + '/save', new Blob([JSON.stringify({ token: st.token, answers: A, away: st.away || 0 })], { type: 'text/plain' })); } catch (e) {}
  }
  d.addEventListener('visibilitychange', function () {
    if (d.visibilityState === 'hidden') {
      if (view === 'work' && isTest() && st.token) { st.away = (st.away || 0) + 1; st.dirty = true; keep(); }
      beacon();
    } else if (view === 'work') { clock(); sync(); if (isTest() && st.away) sv(T.awayNow(st.away)); }
  });
  window.addEventListener('pagehide', beacon);
  window.addEventListener('online', function () { if (view === 'work') sync(); else if (view === 'pending') lockAndSend(); });

  /* ------------------------------------------------------------ 4. hand in (by the student, or when time runs out) */
  function lockAndSend() {
    stopAll();
    if (!st.pending) { st.pending = true; st.locked_at = Math.min(now(), deadline || now()); st.answers = A; keep(); }
    view = 'pending';
    app.innerHTML = bar('<span class="jn-clock">' + (now() >= deadline ? T.timeUp : '') + '</span>') + '<div class="jn-wait"><p><b>' + esc(T.locked(fmtDT(st.locked_at, false))) + '</b></p><p class="hw-small">' + T.keepOpen + '</p></div>';
    api('POST', '/v1/hw/' + code + '/submit', { token: st.token, answers: st.answers || {}, locked_at: st.locked_at, away: st.away || 0 }).then(function (r) {
      if (view !== 'pending') return;
      if (r.status === 200 && r.result) { done(r.result); return; }
      if (r.error === 'submitted') { fetchResult(); return; }
      if (r.error === 'token') { st.pending = false; st.token = null; keep(); who(T.other); return; }
      if (r.error === 'closed') {
        // too late even for the grace period: the server may still have marked the saved draft
        fetchResult(T.tooLate); return;
      }
      lost(true); retryT = setTimeout(lockAndSend, 10000);
    });
  }
  function fetchResult(fallback) {
    api('POST', '/v1/hw/' + code + '/result', { token: st.token }).then(function (r) {
      if (r.status === 200 && r.result) { done(r.result); return; }
      if (r.status === 200 && !r.result) { retryT = setTimeout(fetchResult, 30000); if (fallback) app.insertBefore(el('p', 'jn-lost', esc(fallback)), app.firstChild); return; }
      if (fallback) { app.innerHTML = bar() + '<p class="jn-lost">' + esc(fallback) + '</p>'; return; }
      lost(true); retryT = setTimeout(fetchResult, 15000);
    });
  }
  function done(res) { st.submitted = true; st.pending = false; st.dirty = false; st.result = res; keep(); result(); }

  /* ------------------------------------------------------------ 5. the result */
  function result() {
    view = 'result'; stopAll();
    var r = st.result, tfw = function (c) { return c === 'T' ? T.stT : c === 'F' ? T.stF : T.none; };
    var test = isTest(), canPractise = !test && r.review && r.review.length, keyLater = !r.review && r.key_at, keyReady = keyLater && now() >= r.key_at;
    app.innerHTML = bar() + (r.auto ? '<p class="hw-flag">' + T.auto + '</p>' : '') + (r.late ? '<p class="hw-flag">' + T.late + '</p>' : '') + '<h2 id="hw-res">' + T.result + '</h2>' +
      '<p class="hw-next" id="hw-next">' + (test ? T.tNext : T.hwNext) + '</p>' + (canPractise ? '<p class="tool-actions"><button type="button" class="btn" id="hw-again">' + T.again + '</button></p>' : '') +
      (r.review ? '<h2 class="jn-rev">' + T.review + '</h2>' + r.review.map(function (it, i) {
        var a = it.mine == null ? '' : String(it.mine), inner, mine, key;
        if (it.y === 'mc') { inner = it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<div class="jn-o' + (L === it.k ? ' ok' : a === L ? ' no' : '') + '"><b>' + L + '.</b> <span>' + safe(o) + '</span></div>'; }).join(''); mine = a || T.none; key = it.k; }
        else if (it.y === 'tf') { var c = 0; inner = it.o.map(function (o, k) { var x = a.charAt(k); if (x === it.k.charAt(k)) c++; return '<div class="jn-o' + (x === it.k.charAt(k) ? ' ok' : ' no') + '"><b>' + 'abcd'[k] + ')</b> <span>' + safe(o) + ' <i>(' + tfw(x) + ' → ' + tfw(it.k.charAt(k)) + ')</i></span></div>'; }).join(''); mine = has(it, a) ? c + '/4' : T.none; key = it.k.split('').map(tfw).join(', '); }
        else { inner = ''; mine = a ? esc(a) : T.none; key = esc(it.k); }
        return partHead(i) + '<section class="jn-q"><div class="jn-stem"><b>' + T.q + ' ' + (i + 1) + '.</b> ' + safe(it.q) + '</div><div class="jn-opts c1">' + inner + '</div>' +
          '<p class="jn-mine">' + T.yours + ': <b>' + mine + '</b> · ' + T.key + ': <b>' + key + '</b></p>' + (it.e ? '<div class="jn-expl">' + safe(it.e) + '</div>' : '') + '</section>';
      }).join('') : '<div class="hw-keyat"><p>' + esc(keyReady ? T.keyReady : T.keyAt(fmtDT(r.key_at, true))) + '</p>' + (keyReady ? '<p><button type="button" class="btn" id="hw-key">' + T.showKey + '</button></p>' : '') + '<p class="tool-msg" id="hw-msg"></p></div>') +
      '<p class="hw-small"><button type="button" class="tool-link" id="hw-switch">' + T.switchMe + '</button> · <a href="' + esc(app.getAttribute('data-home') || '/') + '">' + T.home + '</a></p>';
    drawMath(app);
    if (window.lmFeedback) window.lmFeedback.show($('#hw-next'), r.got, r.max, r.stats, '', { mode: info.mode, later: keyLater && !keyReady ? fmtDT(r.key_at, true) : '' });
    var ag = $('#hw-again'); if (ag) ag.addEventListener('click', practice);
    var getKey = function () {
      api('POST', '/v1/hw/' + code + '/result', { token: st.token }).then(function (x) {
        if (x.status === 200 && x.result && x.result.review) { st.result = x.result; keep(); result(); }
        else if ($('#hw-msg')) $('#hw-msg').textContent = x.status === 0 ? T.err : T.notYet;
      });
    };
    var k = $('#hw-key'); if (k) k.addEventListener('click', getKey);
    // still on this page when the assignment closes: the explanations appear by themselves
    if (keyLater && !keyReady && r.key_at - now() < 6 * 3600e3) tickT = setTimeout(getKey, Math.max(1000, r.key_at - now() + 3000));
    window.scrollTo(0, 0);
  }

  /* Homework only: answer the same questions again on this device, checked here, never sent or scored. */
  function practice() {
    view = 'practice'; stopAll();
    var rv = st.result.review; items = rv; A = {};
    app.innerHTML = bar('<span id="jn-n" class="jn-n"></span>') + '<p class="hw-note">' + T.pNote + '</p>' + rv.map(function (it, i) { return qHtml(it, i, A); }).join('') +
      '<p class="jn-end"><button type="button" class="btn" id="hw-pcheck">' + T.pCheck + '</button> <button type="button" class="btn btn-outline" id="hw-pback">' + T.pBack + '</button></p><p class="hw-pscore" id="hw-pscore" aria-live="polite"></p>';
    drawMath(app);
    var upd = function () { $('#jn-n').textContent = count() + '/' + rv.length + ' ' + T.answered; };
    upd(); bindAnswers(upd);
    $('#hw-pcheck').addEventListener('click', function () {
      var right = 0;
      $$('.jn-q', app).forEach(function (q) {
        var i = +q.getAttribute('data-i'), it = rv[i], p = full(it, A[i]);
        if (p) right++;
        q.classList.remove('pr-ok', 'pr-no'); q.classList.add(p ? 'pr-ok' : 'pr-no');
        var ex = q.querySelector('.jn-expl');
        if (!p && !ex && it.e) { ex = d.createElement('div'); ex.className = 'jn-expl'; ex.innerHTML = safe(it.e); q.appendChild(ex); drawMath(ex); }
      });
      $('#hw-pscore').textContent = T.pScore(right, rv.length);
      $('#hw-pscore').scrollIntoView({ block: 'center' });
    });
    $('#hw-pback').addEventListener('click', function () { items = st.items; A = st.answers || {}; result(); });
    window.scrollTo(0, 0);
  }
  function numVal(x) { x = String(x).replace(/\s/g, '').replace(',', '.'); return x === '' || !/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(x) ? NaN : Number(x); }
  function full(it, a) {          // the whole question right (same rules as the server's marking)
    if (!has(it, a)) return false; a = String(a);
    if (it.y === 'mc') return a === it.k;
    if (it.y === 'tf') return a === it.k;
    var v = numVal(a), w = numVal(it.k);
    if (!isNaN(v) && !isNaN(w)) return Math.abs(v - w) < 1e-9;
    return a.toLowerCase().replace(/\s/g, '').replace(/,/g, '.') === String(it.k).toLowerCase().replace(/\s/g, '').replace(/,/g, '.');
  }

  /* "Not you?" on a shared phone */
  app.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('#hw-switch') : null;
    if (!b) return;
    st = { code: code, info: info }; keep(); who('');
  });
})();
