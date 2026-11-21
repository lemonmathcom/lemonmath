/* Lemonmath · My progress (Hành trình học).
 * Everything here is worked out in the browser from the journal site.js keeps (window.lmJournal):
 * the lessons ticked as done and every test handed in (score, date, right answers by level NB/TH/VD/VDC).
 * lessons.json (next to this page) lists the tracks in order, so the page can say what comes next.
 *
 * Shown: what to do today (review that is due, the next lesson, the kind of question to practise), this week's goal
 * and streak, scores over time, results by level, the review schedule and how far each grade is done.
 * Learning code (Bậc 2): save the journey on the server under a 12-character code, use it on another device, or let a
 * parent follow it read-only. No name, e-mail or password; the server keeps only what the page needs.
 */
(function () {
  'use strict';
  var d = document, app = d.getElementById('jr-app');
  if (!app) return;
  var vi = d.documentElement.lang === 'vi', API = (app.getAttribute('data-api') || '').replace(/\/+$/, ''), J = window.lmJournal;
  var DAY = 864e5, PASS = 5, WEAK = 6.5, GOOD = 8;

  var T = vi ? {
    loading: 'Đang tải…', today: 'Hôm nay nên làm gì?', week: 'Tuần này', scores: 'Điểm qua từng lần làm', levels: 'Theo mức độ câu hỏi', reviews: 'Lịch ôn tập', tracks: 'Tiến độ theo lớp',
    review: 'Ôn lại', next: 'Học tiếp', practise: 'Luyện thêm', start: 'Bắt đầu',
    whyReview: function (s, when) { return 'Lần trước ' + s + ' điểm · ' + when; }, dueNow: 'đến hạn ôn hôm nay', dueOn: function (x) { return 'đến hạn ôn ' + x; },
    whyNext: function (tr, ch) { return 'Bài kế tiếp · ' + tr + ' · ' + ch; }, whyFirst: function (tr) { return 'Bài đầu tiên của ' + tr; },
    lvTip: { VD: 'Luyện câu Vận dụng', VDC: 'Luyện câu Vận dụng cao', TH: 'Củng cố phần hiểu bài', NB: 'Ôn lại kiến thức cơ bản' },
    whyLv: function (L, p, title) { return 'Bạn đúng ' + p + '% câu ' + LVN[L] + ' gần đây. Làm lại bài test của “' + title + '”, đọc kĩ lời giải các câu sai.'; },
    allDone: function (tr) { return 'Bạn đã học hết các bài đang có của ' + tr + '. Tuyệt vời! Ôn lại những bài dưới ' + fmt(GOOD) + ' điểm cho thật vững.'; },
    empty: 'Chưa có gì ở đây: trang sẽ tự gợi ý sau khi bạn học vài bài.', emptyHow: 'Học xong bài nào, bấm “Đánh dấu đã học xong”, rồi làm bài test cuối bài. Trang này sẽ cho biết nên học gì tiếp, bài nào cần ôn và bạn tiến bộ ra sao.', pickGrade: 'Bạn đang học lớp mấy?',
    goal: 'Mục tiêu', lessonsWk: function (n, g) { return n + '/' + g + ' bài'; }, goalSel: 'Mục tiêu mỗi tuần', perWeek: function (n) { return n + ' bài một tuần'; },
    streak: function (n) { return n ? n + ' ngày học liên tiếp' : 'Chưa có chuỗi ngày học'; }, streakTip: 'Mỗi ngày học một chút, dù chỉ một bài test, là chuỗi ngày dài thêm.',
    goalMet: 'Đạt mục tiêu tuần rồi! 🎉', daysWk: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    lastN: function (n) { return n + ' lần làm gần nhất (thang 10)'; }, best: 'Tiến bộ rõ nhất', noScores: 'Chưa có bài test nào. Làm bài test cuối mỗi bài học để thấy điểm ở đây.',
    lvNote: 'Tính trên các câu đã gắn mức độ trong 60 ngày qua.', lvNone: 'Chưa đủ câu hỏi có gắn mức độ để tính. Làm thêm vài bài test nhé.', right: 'đúng', qs: 'câu',
    dueList: 'Đến hạn ôn', soonList: 'Sắp đến hạn', noReview: 'Không có bài nào cần ôn. Bài nào dưới ' + fmt(WEAK) + ' điểm sẽ được nhắc ôn sau 1, 3 rồi 7 ngày.',
    learned: function (a, b) { return a + '/' + b + ' bài'; }, chapter: 'Chương', doneMark: 'đã học',
    save: 'Dùng ở máy khác, cho bố mẹ cùng xem', saveLead: 'Lưu hành trình bằng một mã học tập 12 kí tự. Nhập mã trên máy khác là có lại toàn bộ; bố mẹ nhập mã để xem con học đến đâu. Không cần email, họ tên hay mật khẩu.',
    ways: { make: 'Lưu bằng mã mới', have: 'Tôi đã có mã', parent: 'Bố mẹ xem tiến độ của con' },
    nick: 'Tên gọi', nickHint: 'Không bắt buộc. Để bố mẹ biết là của ai, ví dụ: An lớp 6. Đừng ghi họ tên đầy đủ.',
    consent: 'Mình đã hỏi và bố mẹ (người giám hộ) đồng ý lưu tiến độ học bằng mã này.', needConsent: 'Bạn đánh dấu ô bố mẹ đồng ý trước nhé.',
    make: 'Tạo mã học tập', code: 'Mã học tập', codePh: 'XXXX-XXXX-XXXX', use: 'Dùng mã này trên máy này', useNote: 'Tiến độ trên máy này và tiến độ đã lưu bằng mã sẽ được gộp lại, không mất gì.',
    view: 'Xem tiến độ', remember: 'Nhớ mã trên máy này để lần sau mở là thấy ngay',
    privacy: 'Máy chủ chỉ lưu: bài đã học, điểm, ngày làm và tên gọi. Ai có mã đều xem được, nên chỉ đưa mã cho bố mẹ. Không dùng trong 12 tháng thì tự xoá.',
    yourCode: 'Mã học tập của bạn', keepCode: 'Ghi mã vào vở hoặc chụp màn hình. Nhập mã này trên máy khác để học tiếp; đưa cho bố mẹ để bố mẹ cùng xem.',
    linked: 'Hành trình đang được lưu bằng mã', synced: function (t) { return 'Đồng bộ lần cuối: ' + t; }, never: 'chưa đồng bộ',
    syncNow: 'Đồng bộ ngay', copy: 'Chép mã', copied: 'Đã chép ✓', more: 'Ngừng hoặc xoá',
    unlink: 'Ngừng dùng mã trên máy này', unlinkNote: 'Tiến độ vẫn ở trên máy này và mã vẫn dùng được ở máy khác.', sureUnlink: 'Ngừng dùng mã trên máy này?',
    del: 'Xoá hành trình đã lưu trên máy chủ', delNote: 'Mã sẽ không dùng được nữa ở mọi máy. Tiến độ trên máy này vẫn giữ.', sureDel: 'Xoá hẳn hành trình đã lưu bằng mã này? Không lấy lại được.', deleted: 'Đã xoá trên máy chủ.',
    parentBar: function (n, t) { return 'Đang xem hành trình của ' + (n || 'con') + ' · cập nhật ' + t; }, exitView: 'Thoát', forget: 'Quên mã này trên máy',
    errs: { bad_code: 'Mã chưa đúng. Kiểm tra lại đủ 12 kí tự.', no_journey: 'Không tìm thấy hành trình với mã này. Kiểm tra lại, hoặc mã đã bị xoá.', too_many: 'Hôm nay mạng này đã tạo quá nhiều mã. Bạn thử lại ngày mai nhé.', net: 'Chưa kết nối được. Kiểm tra mạng rồi thử lại.' }
  } : {
    loading: 'Loading…', today: 'What to do today', week: 'This week', scores: 'Scores over time', levels: 'By kind of question', reviews: 'Review schedule', tracks: 'Progress by grade',
    review: 'Review', next: 'Learn next', practise: 'Practise', start: 'Start',
    whyReview: function (s, when) { return 'Last time ' + s + ' points · ' + when; }, dueNow: 'due today', dueOn: function (x) { return 'due ' + x; },
    whyNext: function (tr, ch) { return 'Next lesson · ' + tr + ' · ' + ch; }, whyFirst: function (tr) { return 'First lesson of ' + tr; },
    lvTip: { VD: 'Practise application questions', VDC: 'Practise harder application questions', TH: 'Strengthen understanding', NB: 'Go over the basics again' },
    whyLv: function (L, p, title) { return 'You got ' + p + '% of recent ' + LVN[L] + ' questions right. Retake the test of “' + title + '” and read the explanations for the ones you miss.'; },
    allDone: function (tr) { return 'You have finished every lesson available in ' + tr + '. Brilliant! Review any lesson under ' + fmt(GOOD) + ' points until it is solid.'; },
    empty: 'Nothing here yet: suggestions appear once you have done a few lessons.', emptyHow: 'When you finish a lesson, press “Mark as complete”, then take the test at the end. This page will then tell you what to learn next, what to review and how you are improving.', pickGrade: 'Which grade are you in?',
    goal: 'Goal', lessonsWk: function (n, g) { return n + '/' + g + ' lessons'; }, goalSel: 'Weekly goal', perWeek: function (n) { return n + ' lessons a week'; },
    streak: function (n) { return n ? n + '-day streak' : 'No streak yet'; }, streakTip: 'A little every day, even one test, makes the streak grow.',
    goalMet: 'Weekly goal reached! 🎉', daysWk: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    lastN: function (n) { return 'Last ' + n + ' attempts (out of 10)'; }, best: 'Biggest improvements', noScores: 'No tests yet. Take the test at the end of each lesson to see your scores here.',
    lvNote: 'From questions tagged with a level in the last 60 days.', lvNone: 'Not enough tagged questions yet. Take a few more tests.', right: 'right', qs: 'questions',
    dueList: 'Due now', soonList: 'Coming up', noReview: 'Nothing to review. Any lesson under ' + fmt(WEAK) + ' points comes back after 1, 3 and then 7 days.',
    learned: function (a, b) { return a + '/' + b + ' lessons'; }, chapter: 'Chapter', doneMark: 'done',
    save: 'Use it on another device, or with your parents', saveLead: 'Save your journey with a 12-character learning code. Type the code on another device to get everything back; parents type it to see how you are doing. No e-mail, name or password.',
    ways: { make: 'Save with a new code', have: 'I have a code', parent: 'Parents: follow my child' },
    nick: 'Nickname', nickHint: 'Optional. So your parents know whose it is, e.g. An, grade 6. Do not use your full name.',
    consent: 'I have asked, and my parent or guardian agrees to saving my progress with this code.', needConsent: 'Please tick the box to say your parent agrees.',
    make: 'Make my learning code', code: 'Learning code', codePh: 'XXXX-XXXX-XXXX', use: 'Use this code on this device', useNote: 'Progress on this device and progress saved with the code are merged; nothing is lost.',
    view: 'See progress', remember: 'Remember the code on this device so it opens straight away next time',
    privacy: 'The server keeps only the lessons done, the scores, the dates and the nickname. Anyone with the code can see it, so give it only to your parents. Deleted after 12 months without use.',
    yourCode: 'Your learning code', keepCode: 'Write it in your book or take a screenshot. Type it on another device to carry on; give it to your parents so they can follow along.',
    linked: 'Your journey is saved with the code', synced: function (t) { return 'Last synced: ' + t; }, never: 'not yet',
    syncNow: 'Sync now', copy: 'Copy the code', copied: 'Copied ✓', more: 'Stop or delete',
    unlink: 'Stop using the code on this device', unlinkNote: 'Your progress stays on this device and the code still works elsewhere.', sureUnlink: 'Stop using the code on this device?',
    del: 'Delete the saved journey from the server', delNote: 'The code will stop working everywhere. Progress on this device is kept.', sureDel: 'Delete the journey saved with this code for good? It cannot be undone.', deleted: 'Deleted from the server.',
    parentBar: function (n, t) { return 'Viewing ' + (n || 'your child') + '’s journey · updated ' + t; }, exitView: 'Leave', forget: 'Forget this code here',
    errs: { bad_code: 'That code is not right. Check all 12 characters.', no_journey: 'No journey with this code. Check it, or it may have been deleted.', too_many: 'Too many codes were made from this network today. Please try again tomorrow.', net: 'Could not connect. Check the connection and try again.' }
  };
  var LVN = vi ? { NB: 'Nhận biết', TH: 'Thông hiểu', VD: 'Vận dụng', VDC: 'Vận dụng cao' } : { NB: 'recall', TH: 'understanding', VD: 'application', VDC: 'harder application' };
  var LVS = ['NB', 'TH', 'VD', 'VDC'];

  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(x) { var t = (Math.round(x * 10) / 10).toString(); return vi ? t.replace('.', ',') : t; }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  var fDay = function (t) { try { return new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'numeric' }).format(new Date(t)); } catch (e) { return new Date(t).toDateString(); } };
  var fWhen = function (t) { try { return new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'numeric' }).format(new Date(t)); } catch (e) { return new Date(t).toLocaleString(); } };
  var fDM = function (t) { var x = new Date(t); return x.getDate() + '/' + (x.getMonth() + 1); };
  function dayKey(t) { var x = new Date(t); return x.getFullYear() + '-' + (x.getMonth() + 1) + '-' + x.getDate(); }
  function midnight(t) { var x = new Date(t); x.setHours(0, 0, 0, 0); return x.getTime(); }
  function weekStart(t) { var x = new Date(midnight(t)); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x.getTime(); }
  function band(s) { return s < PASS ? 'b0' : s < WEAK ? 'b1' : s < GOOD ? 'b2' : 'b3'; }

  var DATA = null, IDX = {}, viewing = null;     // viewing: { doc, at } when a parent looks at a child's journey

  function indexLessons() {
    DATA.tracks.forEach(function (tr, ti) {
      tr.order = ti;
      tr.ch.forEach(function (ch) {
        ch.ls.forEach(function (x, li) { IDX[x[0]] = { id: x[0], title: x[1], url: x[2], ch: ch, tr: tr, i: li }; });
      });
    });
  }

  /* ------------------------------------------------------------ the numbers */
  function analyse(doc) {
    var now = Date.now(), A = { per: {}, log: [], days: {}, last: null };
    (doc.log || []).forEach(function (e) {
      if (!e.m) return;
      var s = e.g / e.m * 10, r = { t: e.t, s: s, l: e.l, k: e.k, v: e.v };
      A.log.push(r); A.days[dayKey(e.t)] = 1;
      if (e.l && IDX[e.l]) { (A.per[e.l] = A.per[e.l] || []).push(r); if (!A.last || e.t > A.last.t) A.last = { t: e.t, l: e.l }; }
    });
    A.log.sort(function (a, b) { return a.t - b.t; });
    Object.keys(A.per).forEach(function (k) { A.per[k].sort(function (a, b) { return a.t - b.t; }); });
    var dn = doc.done || {};
    Object.keys(dn).forEach(function (id) {
      var t = dn[id];
      if (t > 1) { A.days[dayKey(t)] = 1; if (IDX[id] && (!A.last || t > A.last.t)) A.last = { t: t, l: id }; }
    });
    A.isDone = function (id) { var b = best(id); return dn[id] > 0 || (b != null && b >= PASS); };
    function best(id) { var p = A.per[id]; return p ? Math.max.apply(null, p.map(function (x) { return x.s; })) : null; }
    A.best = best;
    // reviews: the latest score of a lesson decides; under 6.5 comes back after 1, 3, then 7 days; 6.5 to 8 after 7 days
    A.reviews = [];
    Object.keys(A.per).forEach(function (id) {
      var p = A.per[id], last = p[p.length - 1];
      if (last.s >= GOOD) return;
      var low = 0; for (var i = p.length - 1; i >= 0 && p[i].s < WEAK; i--) low++;
      var gap = last.s >= WEAK ? 7 : low <= 1 ? 1 : low === 2 ? 3 : 7;
      A.reviews.push({ id: id, s: last.s, due: midnight(last.t) + gap * DAY, light: last.s >= WEAK });
    });
    A.reviews.sort(function (a, b) { return a.due - b.due || a.s - b.s; });
    A.due = A.reviews.filter(function (r) { return r.due <= now; });
    A.soon = A.reviews.filter(function (r) { return r.due > now; });
    // streak: days in a row with something done, up to today (or yesterday, if today has not started yet)
    var n = 0, t = midnight(now);
    if (!A.days[dayKey(t)]) t -= DAY;
    while (A.days[dayKey(t)]) { n++; t -= DAY; }
    A.streak = n;
    // this week: different lessons touched (a test handed in or ticked as done)
    var ws = weekStart(now), wk = {};
    A.log.forEach(function (r) { if (r.t >= ws) wk[r.l || r.t] = 1; });
    Object.keys(dn).forEach(function (id) { if (dn[id] >= ws) wk[id] = 1; });
    A.week = Object.keys(wk).length;
    A.weekDays = [0, 1, 2, 3, 4, 5, 6].map(function (i) { return !!A.days[dayKey(ws + i * DAY + 3600e3 * 12)]; });
    // levels, last 60 days
    A.lv = {}; var since = now - 60 * DAY, lvLesson = {};
    A.log.forEach(function (r) {
      if (r.t < since || !r.v) return;
      LVS.forEach(function (L) {
        var x = r.v[L]; if (!x) return;
        A.lv[L] = A.lv[L] || [0, 0]; A.lv[L][0] += x[0]; A.lv[L][1] += x[1];
        if (r.l && x[1] > x[0]) { lvLesson[L] = lvLesson[L] || {}; lvLesson[L][r.l] = (lvLesson[L][r.l] || 0) + x[1] - x[0]; }
      });
    });
    A.lvLesson = function (L) { var m = lvLesson[L] || {}, k = Object.keys(m).sort(function (a, b) { return m[b] - m[a]; }); return k[0]; };
    // improvement: first and latest score of lessons taken more than once
    A.gains = Object.keys(A.per).map(function (id) { var p = A.per[id]; return { id: id, a: p[0].s, b: p[p.length - 1].s }; })
      .filter(function (g) { return A.per[g.id].length > 1 && g.b - g.a >= 1; }).sort(function (x, y) { return (y.b - y.a) - (x.b - x.a); }).slice(0, 3);
    return A;
  }

  function nextLesson(A, skip) {
    if (!A.last) return null;
    var cur = IDX[A.last.l], tr = cur.tr, flat = [];
    tr.ch.forEach(function (ch) { ch.ls.forEach(function (x) { flat.push(IDX[x[0]]); }); });
    var pos = flat.indexOf(cur);
    var free = function (x) { return !A.isDone(x.id) && !skip[x.id]; };     // not a lesson already suggested for review
    for (var i = pos + 1; i < flat.length; i++) if (free(flat[i])) return flat[i];
    for (i = 0; i < pos; i++) if (free(flat[i])) return flat[i];
    for (i = 0; i < flat.length; i++) if (!A.isDone(flat[i].id)) return null;
    return { allDone: tr };
  }
  function lvAdvice(A) {
    // the weakest level with enough questions, when it is clearly behind the level below it
    var pc = {}; LVS.forEach(function (L) { var x = A.lv[L]; if (x && x[1] >= 4) pc[L] = Math.round(100 * x[0] / x[1]); });
    var order = ['NB', 'TH', 'VD', 'VDC'];
    for (var i = 0; i < order.length; i++) {
      var L = order[i]; if (pc[L] == null || pc[L] >= 50) continue;
      var id = A.lvLesson(L); if (!id || !IDX[id]) continue;
      return { L: L, p: pc[L], ls: IDX[id] };
    }
    return null;
  }

  /* ------------------------------------------------------------ drawing */
  function card(icon, label, title, why, url) {
    return '<a class="jr-step" href="' + esc(url) + '"><span class="jr-ico" aria-hidden="true">' + icon + '</span><span class="jr-st"><small>' + esc(label) + '</small><b>' + esc(title) + '</b><span>' + esc(why) + '</span></span><span class="jr-go" aria-hidden="true">→</span></a>';
  }
  function render() {
    var doc = viewing ? viewing.doc : J.doc(), A = analyse(doc), now = Date.now(), out = '';
    if (viewing) out += '<p class="jr-viewbar"><span>' + esc(T.parentBar(doc.nick, fWhen(viewing.at))) + '</span> <button type="button" class="tool-link" id="jr-exit">' + T.exitView + '</button></p>';
    var any = A.log.length || Object.keys(doc.done || {}).some(function (k) { return doc.done[k] > 0; });

    // 1. today
    // at most three steps, never the same lesson twice: a review that is due, the next lesson, the kind of question to practise
    var steps = [], used = {}, la = lvAdvice(A);
    var rev = function (r) {
      var x = IDX[r.id]; used[r.id] = 1;
      steps.push(card('🔁', T.review, x.title, T.whyReview(fmt(r.s), T.dueNow) + (la && la.ls.id === r.id ? ' · ' + T.lvTip[la.L] : ''), x.url));
    };
    if (A.due.length) rev(A.due[0]);
    var nx = nextLesson(A, used);
    if (nx && nx.allDone) steps.push('<p class="jr-done">🏆 ' + esc(T.allDone(nx.allDone.name)) + '</p>');
    else if (nx) { used[nx.id] = 1; steps.push(card('📘', T.next, nx.title, T.whyNext(nx.tr.name, T.chapter + ' ' + nx.ch.n + '. ' + nx.ch.t), nx.url)); }
    if (la && !used[la.ls.id]) { used[la.ls.id] = 1; steps.push(card('🎯', T.practise, T.lvTip[la.L], T.whyLv(la.L, la.p, la.ls.title), la.ls.url)); }
    if (A.due.length > 1 && steps.length < 3 && !used[A.due[1].id]) rev(A.due[1]);
    out += '<section class="jr-sec jr-today"><h2>' + T.today + '</h2>';
    if (steps.length) out += '<div class="jr-steps">' + steps.join('') + '</div>';
    else out += '<p>' + T.empty + '</p><p class="tool-mini">' + T.emptyHow + '</p><p class="jr-sub">' + T.pickGrade + '</p><p class="jr-grades">' +
      DATA.tracks.filter(function (t) { return !t.exam; }).map(function (t) { return '<a class="cr-chip" href="' + esc(t.url) + '">' + esc(t.name) + '</a>'; }).join('') + '</p>';
    out += '</section>';

    if (any) {
      // 2. this week
      var goal = doc.goal || 3, wn = Math.min(A.week, goal);
      out += '<section class="jr-sec"><h2>' + T.week + '</h2><div class="jr-week"><div><p class="jr-big">' + esc(T.lessonsWk(A.week, goal)) + '</p><p class="jr-bar"><i style="width:' + Math.round(100 * wn / goal) + '%"></i></p>' +
        (A.week >= goal ? '<p class="jr-ok">' + T.goalMet + '</p>' : '') +
        (viewing ? '' : '<label class="jr-goal">' + T.goalSel + ' <select id="jr-goal">' + [1, 2, 3, 4, 5, 6, 7, 10, 14].map(function (n) { return '<option value="' + n + '"' + (n === goal ? ' selected' : '') + '>' + esc(T.perWeek(n)) + '</option>'; }).join('') + '</select></label>') + '</div>' +
        '<div><p class="jr-big">🔥 ' + esc(T.streak(A.streak)) + '</p><ol class="jr-days">' + T.daysWk.map(function (w, i) { return '<li class="' + (A.weekDays[i] ? 'on' : '') + '"><span>' + w + '</span></li>'; }).join('') + '</ol><p class="tool-mini">' + T.streakTip + '</p></div></div></section>';

      // 3. scores over time
      var last = A.log.slice(-12);
      out += '<section class="jr-sec"><h2>' + T.scores + '</h2>';
      if (last.length) {
        out += '<p class="tool-mini">' + T.lastN(last.length) + '</p><ol class="jr-chart">' + last.map(function (r) {
          var x = IDX[r.l], name = x ? x.title : '';
          return '<li title="' + esc((name ? name + ' · ' : '') + fDay(r.t) + ' · ' + fmt(r.s)) + '"><b>' + fmt(r.s) + '</b><i class="' + band(r.s) + '" style="height:' + Math.max(4, Math.round(r.s * 10)) + '%"></i><span>' + fDM(r.t) + '</span></li>';
        }).join('') + '</ol>';
        if (A.gains.length) out += '<h3>' + T.best + '</h3><ul class="jr-gains">' + A.gains.map(function (g) { var x = IDX[g.id]; return '<li><a href="' + esc(x.url) + '">' + esc(x.title) + '</a> <span>' + fmt(g.a) + ' → <b>' + fmt(g.b) + '</b></span></li>'; }).join('') + '</ul>';
      } else out += '<p>' + T.noScores + '</p>';
      out += '</section>';

      // 4. levels
      var lvRows = LVS.filter(function (L) { return A.lv[L] && A.lv[L][1]; });
      out += '<section class="jr-sec"><h2>' + T.levels + '</h2>';
      if (lvRows.reduce(function (s, L) { return s + A.lv[L][1]; }, 0) >= 4) {
        out += '<div class="jr-lv">' + lvRows.map(function (L) {
          var x = A.lv[L], p = Math.round(100 * x[0] / x[1]);
          return '<div class="jr-lvrow"><span>' + LVN[L] + '</span><p class="jr-bar"><i class="' + (p < 50 ? 'b0' : p < 65 ? 'b1' : p < 80 ? 'b2' : 'b3') + '" style="width:' + p + '%"></i></p><b>' + p + '%</b><small>' + x[0] + '/' + x[1] + ' ' + T.qs + '</small></div>';
        }).join('') + '</div><p class="tool-mini">' + T.lvNote + '</p>';
      } else out += '<p>' + T.lvNone + '</p>';
      out += '</section>';

      // 5. review schedule
      out += '<section class="jr-sec"><h2>' + T.reviews + '</h2>';
      if (A.reviews.length) {
        var row = function (r) { var x = IDX[r.id]; return '<li><a href="' + esc(x.url) + '">' + esc(x.title) + '</a> <span class="jr-sc ' + band(r.s) + '">' + fmt(r.s) + '</span> <small>' + esc(r.due <= now ? T.dueNow : T.dueOn(fDay(r.due))) + '</small></li>'; };
        if (A.due.length) out += '<h3>' + T.dueList + '</h3><ul class="jr-list">' + A.due.slice(0, 8).map(row).join('') + '</ul>';
        if (A.soon.length) out += '<h3>' + T.soonList + '</h3><ul class="jr-list">' + A.soon.slice(0, 5).map(row).join('') + '</ul>';
      } else out += '<p>' + T.noReview + '</p>';
      out += '</section>';

      // 6. progress by grade (only grades the student has touched)
      var touched = {};
      Object.keys(A.per).forEach(function (id) { touched[IDX[id].tr.id] = 1; });
      Object.keys(doc.done || {}).forEach(function (id) { if (doc.done[id] > 0 && IDX[id]) touched[IDX[id].tr.id] = 1; });
      var trs = DATA.tracks.filter(function (t) { return touched[t.id]; });
      if (trs.length) {
        out += '<section class="jr-sec"><h2>' + T.tracks + '</h2>' + trs.map(function (tr) {
          var all = 0, dn = 0;
          var chs = tr.ch.map(function (ch) {
            var k = ch.ls.filter(function (x) { return A.isDone(x[0]); }).length; all += ch.ls.length; dn += k;
            return '<li><div class="jr-chh"><span>' + T.chapter + ' ' + ch.n + '. ' + esc(ch.t) + '</span><b>' + k + '/' + ch.ls.length + '</b></div><ul>' + ch.ls.map(function (x) {
              var b = A.best(x[0]), dd = A.isDone(x[0]);
              return '<li class="' + (dd ? 'ok' : '') + '"><a href="' + esc(x[2]) + '">' + (dd ? '✓ ' : '') + esc(x[1]) + '</a>' + (b != null ? ' <span class="jr-sc ' + band(b) + '">' + fmt(b) + '</span>' : '') + '</li>';
            }).join('') + '</ul></li>';
          }).join('');
          return '<details class="jr-track"><summary><span>' + esc(tr.name) + '</span><span class="jr-bar"><i style="width:' + Math.round(100 * dn / all) + '%"></i></span><b>' + esc(T.learned(dn, all)) + '</b></summary><ol class="jr-chs">' + chs + '</ol></details>';
        }).join('') + '</section>';
      }
    }

    // 7. learning code
    if (API && !viewing) out += '<section class="jr-sec jr-save" id="jr-save">' + saveHtml() + '</section>';
    else if (API && viewing) out += '<p class="jr-forget"><button type="button" class="tool-link" id="jr-forget">' + T.forget + '</button></p>';
    app.innerHTML = out;
    bind();
  }

  /* ------------------------------------------------------------ learning code */
  var way = 'make', fresh = '';
  function saveHtml() {
    var code = ls('lm-code');
    if (code) {
      var at = +(ls('lm-synced') || 0);
      return '<h2>' + T.save + '</h2>' + (fresh ? '<div class="jr-fresh"><p>' + T.yourCode + '</p><p class="jr-code">' + esc(fresh) + '</p><p>' + T.keepCode + '</p></div>' : '') +
        '<p>' + T.linked + ' <b class="jr-codei">' + esc(code) + '</b></p><p class="tool-mini" id="jr-syncat">' + esc(T.synced(at ? fWhen(at) : T.never)) + '</p>' +
        '<p class="tool-actions"><button type="button" class="btn" id="jr-sync">' + T.syncNow + '</button><button type="button" class="btn btn-outline" id="jr-copy">' + T.copy + '</button></p>' +
        '<p class="tool-msg" id="jr-msg" aria-live="polite"></p>' +
        '<details class="cr-dz"><summary>' + T.more + '</summary><p><button type="button" class="btn btn-outline" id="jr-unlink">' + T.unlink + '</button></p><p class="tool-mini">' + T.unlinkNote + '</p>' +
        '<p><button type="button" class="btn btn-outline cr-danger" id="jr-del">' + T.del + '</button></p><p class="tool-mini">' + T.delNote + '</p></details>';
    }
    var f = '';
    if (way === 'make') f = '<label class="cr-field">' + T.nick + '<small class="cr-hint">' + T.nickHint + '</small><input type="text" id="jr-nick" maxlength="30" value="' + esc(ls('lm-nick') || '') + '"></label>' +
      '<label class="tool-check jr-consent"><input type="checkbox" id="jr-ok"> <span>' + T.consent + '</span></label><p class="tool-actions"><button type="button" class="btn" id="jr-make">' + T.make + '</button></p>';
    else f = '<label class="cr-field">' + T.code + '<input type="text" id="jr-code" maxlength="16" placeholder="' + T.codePh + '" autocomplete="off" autocapitalize="characters" spellcheck="false"></label>' +
      (way === 'have' ? '<p class="tool-mini">' + T.useNote + '</p><p class="tool-actions"><button type="button" class="btn" id="jr-use">' + T.use + '</button></p>'
        : '<label class="tool-check jr-consent"><input type="checkbox" id="jr-rem" checked> <span>' + T.remember + '</span></label><p class="tool-actions"><button type="button" class="btn" id="jr-view">' + T.view + '</button></p>');
    return '<h2>' + T.save + '</h2><p>' + T.saveLead + '</p><p class="cr-ways">' + ['make', 'have', 'parent'].map(function (w) { return '<button type="button" class="cr-way' + (w === way ? ' on' : '') + '" data-w="' + w + '" aria-pressed="' + (w === way) + '">' + T.ways[w] + '</button>'; }).join('') + '</p>' +
      '<div class="jr-form">' + f + '<p class="tool-msg" id="jr-msg" aria-live="polite"></p></div><p class="tool-mini">' + T.privacy + '</p>';
  }
  function post(path, body) {
    return fetch(API + path, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { j.status = r.status; return j; }, function () { return { status: r.status }; }); }, function () { return { status: 0, error: 'net' }; });
  }
  function err(r) { return T.errs[r.error] || T.errs.net; }
  function msg(t) { var m = $('#jr-msg'); if (m) m.textContent = t; }
  function busy(b, on) { if (b) { b.disabled = on; b.classList.toggle('busy', on); } }
  function codeIn() { var c = ($('#jr-code').value || '').toUpperCase().replace(/[^0-9A-Z]/g, ''); return c.length === 12 ? c.match(/.{4}/g).join('-') : ''; }

  function bind() {
    var on = function (id, f) { var e = $('#' + id); if (e) e.addEventListener('click', f); };
    var g = $('#jr-goal');
    if (g) g.addEventListener('change', function () { ls('lm-goal', g.value); ls('lm-goal-t', String(Date.now())); J.sync(); render(); });
    on('jr-exit', function () { viewing = null; render(); });
    on('jr-forget', function () { ls('lm-view-code', null); viewing = null; render(); });
    $$('.cr-way', app).forEach(function (b) { b.addEventListener('click', function () { way = b.getAttribute('data-w'); $('#jr-save').innerHTML = saveHtml(); bind(); }); });
    on('jr-make', function () {
      var b = this;
      if (!$('#jr-ok').checked) { msg(T.needConsent); return; }
      var nick = $('#jr-nick').value.trim();
      if (nick !== (ls('lm-nick') || '')) { ls('lm-nick', nick); ls('lm-nick-t', String(Date.now())); }
      busy(b, true); msg(T.loading);
      post('/v1/journey/new', { data: J.doc() }).then(function (r) {
        busy(b, false);
        if (r.status !== 200) { msg(err(r)); return; }
        J.apply(r.data); ls('lm-code', r.code); ls('lm-synced', String(r.at)); fresh = r.code; render();
        var s = $('#jr-save'); if (s) s.scrollIntoView({ block: 'start' });
      });
    });
    on('jr-use', function () {
      var b = this, c = codeIn(); if (!c) { msg(T.errs.bad_code); return; }
      busy(b, true); msg(T.loading);
      post('/v1/journey/sync', { code: c, data: J.doc() }).then(function (r) {
        busy(b, false);
        if (r.status !== 200) { msg(err(r)); return; }
        J.apply(r.data); ls('lm-code', c); ls('lm-synced', String(r.at)); render();
      });
    });
    on('jr-view', function () {
      var b = this, c = codeIn(); if (!c) { msg(T.errs.bad_code); return; }
      busy(b, true); msg(T.loading);
      post('/v1/journey/view', { code: c }).then(function (r) {
        busy(b, false);
        if (r.status !== 200) { msg(err(r)); return; }
        if ($('#jr-rem').checked) ls('lm-view-code', c);
        viewing = { doc: r.data, at: r.at }; render(); window.scrollTo(0, 0);
      });
    });
    on('jr-sync', function () {
      var b = this; busy(b, true); msg(T.loading);
      J.sync(true).then(function (r) {
        busy(b, false);
        if (!r) { msg(ls('lm-code') ? T.errs.net : T.errs.no_journey); if (!ls('lm-code')) render(); return; }
        fresh = ''; render();
      });
    });
    on('jr-copy', function () {
      var b = this, c = ls('lm-code') || '';
      var done = function () { b.textContent = T.copied; setTimeout(function () { b.textContent = T.copy; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(c).then(done, function () { window.prompt(T.code, c); });
      else window.prompt(T.code, c);
    });
    on('jr-unlink', function () { if (!window.confirm(T.sureUnlink)) return; ls('lm-code', null); ls('lm-synced', null); fresh = ''; render(); });
    on('jr-del', function () {
      if (!window.confirm(T.sureDel)) return;
      var b = this; busy(b, true);
      post('/v1/journey/delete', { code: ls('lm-code') }).then(function (r) {
        busy(b, false);
        if (r.status !== 200 && r.status !== 404) { msg(err(r)); return; }
        ls('lm-code', null); ls('lm-synced', null); fresh = ''; render(); msg(T.deleted);
      });
    });
  }

  /* ------------------------------------------------------------ start */
  app.hidden = false;
  app.innerHTML = '<p>' + T.loading + '</p>';
  if (!J) return;
  fetch('lessons.json').then(function (r) { return r.json(); }).then(function (j) {
    DATA = j; indexLessons();
    var vc = API && ls('lm-view-code');
    if (vc) return post('/v1/journey/view', { code: vc }).then(function (r) { if (r.status === 200) viewing = { doc: r.data, at: r.at }; else if (r.status === 404) ls('lm-view-code', null); render(); });
    render();
    // a linked device: fetch what was done elsewhere, then draw again
    if (ls('lm-code')) J.sync(true).then(function (r) { if (r && !viewing) render(); });
  }).catch(function () { app.innerHTML = '<p class="tool-msg">' + T.errs.net + '</p>'; });
})();
