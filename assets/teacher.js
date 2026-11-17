/*
 * Lemonmath, teachers' corner (loaded on that page only):
 *   1. test builder: pick lessons, how many questions of each kind and how many versions; print the test and its answer key;
 *   2. class scores: paste a list of names and scores; get the statistics and a short comment for every student.
 * Everything runs in the browser. Nothing is sent anywhere.
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi';
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function el(tag, cls, html) { var e = d.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(x, n) { var t = (Math.round(x * Math.pow(10, n == null ? 2 : n)) / Math.pow(10, n == null ? 2 : n)).toString(); return vi ? t.replace('.', ',') : t; }
  function drawMath(root) {
    if (!window.katex) return;
    $$('.tex', root).forEach(function (s) {
      try { window.katex.render(s.textContent, s, { displayMode: s.hasAttribute('data-d'), throwOnError: false, strict: 'ignore' }); s.classList.remove('tex'); } catch (e) {}
    });
  }
  var T = vi ? {
    tqH: 'Tạo đề kiểm tra từ ngân hàng câu hỏi', tqLead: function (n) { return 'Ngân hàng hiện có ' + n + ' câu hỏi lấy từ các bài kiểm tra mini của Lemonmath, câu nào cũng có đáp án và lời giải thích. Thầy cô chọn bài, chọn số câu, rồi in.'; },
    grade: 'Lớp hoặc kì thi', pick: 'Chọn…', lessons: 'Chọn bài học', all: 'Chọn tất cả', none: 'Bỏ chọn', count: 'Số câu hỏi', mc: 'Phần I. Nhiều lựa chọn', tf: 'Phần II. Đúng sai', sa: 'Phần III. Trả lời ngắn',
    have: 'có', codes: 'Số mã đề', shuf: 'Trộn thứ tự các phương án A, B, C, D ở mỗi mã đề', expl: 'In kèm lời giải thích trong phần đáp án (khi đó không trộn phương án, vì lời giải thích có nhắc tới các chữ A, B, C, D)',
    title: 'Tên bài kiểm tra', titleV: 'ĐỀ KIỂM TRA', sub: 'Dòng phụ (môn, lớp, thời gian)', subV: function (g) { return 'Môn Toán · ' + g + ' · Thời gian làm bài: 45 phút'; },
    make: 'Tạo đề', again: 'Đổi câu khác', print: '🖨 In đề và đáp án', printQ: '🖨 Chỉ in đề', needLesson: 'Thầy cô hãy chọn ít nhất một bài học.', needCount: 'Hãy nhập số câu cho ít nhất một phần.', loading: 'Đang tải câu hỏi…', loadErr: 'Chưa tải được ngân hàng câu hỏi. Thầy cô kiểm tra mạng rồi thử lại.',
    short: function (k, w, h) { return k + ': chỉ có ' + h + ' câu trong các bài đã chọn (cần ' + w + '), đề sẽ dùng cả ' + h + ' câu.'; },
    code: 'Mã đề', name: 'Họ và tên', cls: 'Lớp', q: 'Câu', T: 'Đúng', F: 'Sai', ans: 'Đáp số', key: 'ĐÁP ÁN', keyOf: 'Đáp án mã đề', from: 'Nguồn câu hỏi', parts: ['PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn', 'PHẦN II. Câu trắc nghiệm đúng sai', 'PHẦN III. Câu trắc nghiệm trả lời ngắn'],
    partNote: ['Mỗi câu hỏi chỉ chọn một phương án.', 'Trong mỗi ý a), b), c), d) ở mỗi câu, chọn đúng hoặc sai.', 'Viết đáp số vào chỗ trống.'], foot: 'tự học toán từng bước', ready: function (n, c) { return 'Đã tạo ' + c + ' mã đề, mỗi mã ' + n + ' câu. Xem trước ở dưới, rồi bấm in.'; },
    scH: 'Phân tích điểm của lớp', scLead: 'Dán danh sách điểm vào ô dưới đây, mỗi học sinh một dòng (tên rồi đến điểm, hoặc chỉ điểm). Điểm chỉ được tính ngay trên máy của thầy cô.',
    scPh: 'Nguyễn Văn An 7,5\nTrần Thị Bình 4\nLê Minh Châu 9,25', max: 'Thang điểm', run: 'Phân tích', none2: 'Chưa đọc được điểm nào. Mỗi dòng cần kết thúc bằng một con số.',
    n: 'Sĩ số', mean: 'Điểm trung bình', med: 'Trung vị', hi: 'Cao nhất', lo: 'Thấp nhất', pass: 'Từ 5 trở lên', good: 'Từ 8 trở lên', dist: 'Phân bố theo mức', notes: 'Gợi ý cho thầy cô', each: 'Nhận xét gửi phụ huynh từng học sinh', copy: 'Sao chép tất cả nhận xét', copied: 'Đã sao chép', student: 'Học sinh', pts: 'điểm', outOf: 'quy ra thang 10',
    bad: function (l) { return 'Bỏ qua ' + l + ' dòng không đọc được điểm hoặc điểm vượt thang.'; }
  } : {
    tqH: 'Build a test from the question bank', tqLead: function (n) { return 'The bank holds ' + n + ' questions from Lemonmath’s mini tests, each with its answer and an explanation. Choose lessons, choose how many questions, then print.'; },
    grade: 'Grade or exam', pick: 'Choose…', lessons: 'Choose lessons', all: 'Select all', none: 'Clear', count: 'Number of questions', mc: 'Part I. Multiple choice', tf: 'Part II. True or false', sa: 'Part III. Short answer',
    have: 'available', codes: 'Versions', shuf: 'Shuffle options A, B, C, D in each version', expl: 'Print explanations with the answer key (options are then not shuffled, because explanations refer to the letters A, B, C, D)',
    title: 'Test title', titleV: 'MATHS TEST', sub: 'Subtitle (subject, class, time)', subV: function (g) { return 'Mathematics · ' + g + ' · Time allowed: 45 minutes'; },
    make: 'Build the test', again: 'Pick different questions', print: '🖨 Print test and answer key', printQ: '🖨 Print the test only', needLesson: 'Please choose at least one lesson.', needCount: 'Enter a number of questions for at least one part.', loading: 'Loading questions…', loadErr: 'The question bank could not be loaded. Check your connection and try again.',
    short: function (k, w, h) { return k + ': only ' + h + ' questions in the chosen lessons (you asked for ' + w + '), so all ' + h + ' are used.'; },
    code: 'Version', name: 'Name', cls: 'Class', q: 'Question', T: 'True', F: 'False', ans: 'Answer', key: 'ANSWER KEY', keyOf: 'Answers, version', from: 'Questions from', parts: ['PART I. Multiple choice', 'PART II. True or false', 'PART III. Short answer'],
    partNote: ['Choose one option for each question.', 'For each statement a), b), c), d), decide whether it is true or false.', 'Write your answer in the space.'], foot: 'teach yourself maths, step by step', ready: function (n, c) { return c + (c === 1 ? ' version' : ' versions') + ' built, ' + n + ' questions each. Preview below, then print.'; },
    scH: 'Analyse class scores', scLead: 'Paste the scores below, one student per line (name then score, or just the score). The scores are processed on your device only.',
    scPh: 'Anna Nguyen 7.5\nBinh Tran 4\nChau Le 9.25', max: 'Maximum score', run: 'Analyse', none2: 'No scores could be read. Each line should end with a number.',
    n: 'Students', mean: 'Mean', med: 'Median', hi: 'Highest', lo: 'Lowest', pass: '5 or above', good: '8 or above', dist: 'Distribution by level', notes: 'Suggestions for the teacher', each: 'A note to each student’s parents', copy: 'Copy all comments', copied: 'Copied', student: 'Student', pts: 'points', outOf: 'on the 10-point scale',
    bad: function (l) { return l + (l === 1 ? ' line was' : ' lines were') + ' skipped: no score found, or the score is above the maximum.'; }
  };

  /* ================= 1. test builder ================= */
  var app = $('#tq-app'), out = $('#tq-out');
  if (app && out) (function () {
    var bankUrl = app.getAttribute('data-bank'), siteName = app.getAttribute('data-site') || 'Lemonmath', bank = null, cache = {};
    app.hidden = false;
    app.innerHTML = '<h2>' + T.tqH + '</h2><p>' + T.tqLead(app.getAttribute('data-total')) + '</p>' +
      '<div class="tool-row"><label>' + T.grade + ' <select id="tq-grade"><option value="">' + T.pick + '</option></select></label></div>' +
      '<fieldset id="tq-lessons" class="tool-set" hidden><legend>' + T.lessons + '</legend><p class="tool-mini"><button type="button" class="tool-link" id="tq-all">' + T.all + '</button> · <button type="button" class="tool-link" id="tq-none">' + T.none + '</button></p><div id="tq-tree"></div></fieldset>' +
      '<fieldset id="tq-opts" class="tool-set" hidden><legend>' + T.count + '</legend><div class="tool-row">' +
      ['mc', 'tf', 'sa'].map(function (k, i) { return '<label>' + T[k] + ' <input type="number" id="tq-n-' + k + '" min="0" max="60" value="' + [10, 0, 0][i] + '" inputmode="numeric"> <small id="tq-h-' + k + '"></small></label>'; }).join('') + '</div>' +
      '<div class="tool-row"><label>' + T.codes + ' <select id="tq-codes"><option>1</option><option>2</option><option>3</option><option>4</option></select></label></div>' +
      '<p><label class="tool-check"><input type="checkbox" id="tq-shuf" checked> ' + T.shuf + '</label><br><label class="tool-check"><input type="checkbox" id="tq-expl"> ' + T.expl + '</label></p>' +
      '<div class="tool-row"><label class="grow">' + T.title + ' <input type="text" id="tq-title" maxlength="80" value="' + T.titleV + '"></label><label class="grow">' + T.sub + ' <input type="text" id="tq-sub" maxlength="120"></label></div>' +
      '<p class="tool-actions"><button type="button" class="btn" id="tq-make">' + T.make + '</button> <button type="button" class="btn btn-outline" id="tq-print" hidden>' + T.print + '</button> <button type="button" class="btn btn-outline" id="tq-printq" hidden>' + T.printQ + '</button></p>' +
      '<p id="tq-msg" class="tool-msg" aria-live="polite"></p></fieldset>';
    var gradeSel = $('#tq-grade'), tree = $('#tq-tree'), msg = $('#tq-msg');
    fetch(bankUrl + 'index.json').then(function (r) { return r.json(); }).then(function (list) {
      list.forEach(function (g) { var o = el('option', '', esc(g.name) + ' (' + g.n + ')'); o.value = g.id; gradeSel.appendChild(o); });
    }).catch(function () { app.appendChild(el('p', 'tool-msg', T.loadErr)); });

    function chosen() { return $$('input[data-l]:checked', tree).map(function (i) { return +i.getAttribute('data-l'); }); }
    function avail() {
      var ids = chosen(), n = { mc: 0, tf: 0, sa: 0 };
      if (bank) bank.items.forEach(function (it) { if (ids.indexOf(it.l) !== -1) n[it.y]++; });
      ['mc', 'tf', 'sa'].forEach(function (k) { $('#tq-h-' + k).textContent = '(' + T.have + ' ' + n[k] + ')'; });
      return n;
    }
    function drawTree() {
      tree.innerHTML = '';
      bank.chapters.forEach(function (ch, ci) {
        var det = el('details', 'tq-ch'), sum = el('summary', '', '<label class="tool-check"><input type="checkbox" data-ch="' + ci + '"> <b>' + esc(ch.t) + '</b></label>');
        det.appendChild(sum);
        var ul = el('ul');
        ch.lessons.forEach(function (ls) { ul.appendChild(el('li', '', '<label class="tool-check"><input type="checkbox" data-l="' + ls.i + '" data-c="' + ci + '"> ' + esc(ls.t) + ' <small>(' + (ls.n[0] + ls.n[1] + ls.n[2]) + ')</small></label>')); });
        det.appendChild(ul); tree.appendChild(det);
      });
      if (bank.chapters.length === 1) $('details', tree).open = true;
    }
    tree.addEventListener('change', function (e) {
      var t = e.target, ci;
      if (t.hasAttribute('data-ch')) { ci = t.getAttribute('data-ch'); $$('input[data-c="' + ci + '"]', tree).forEach(function (i) { i.checked = t.checked; }); }
      else if (t.hasAttribute('data-c')) { ci = t.getAttribute('data-c'); var all = $$('input[data-c="' + ci + '"]', tree); $('input[data-ch="' + ci + '"]', tree).checked = all.every(function (i) { return i.checked; }); }
      avail();
    });
    var setAll = function (on) { $$('input[type=checkbox]', tree).forEach(function (i) { i.checked = on; }); avail(); };
    $('#tq-all').addEventListener('click', function () { setAll(true); });
    $('#tq-none').addEventListener('click', function () { setAll(false); });
    gradeSel.addEventListener('change', function () {
      var id = gradeSel.value; bank = null; out.hidden = true; out.innerHTML = ''; $('#tq-print').hidden = true; $('#tq-printq').hidden = true; msg.textContent = '';
      $('#tq-lessons').hidden = $('#tq-opts').hidden = !id;
      if (!id) return;
      tree.textContent = T.loading;
      var use = function (b) { bank = b; drawTree(); avail(); $('#tq-sub').value = T.subV(b.name); };
      if (cache[id]) return use(cache[id]);
      fetch(bankUrl + id + '.json').then(function (r) { return r.json(); }).then(function (b) { cache[id] = b; if (gradeSel.value === id) use(b); }).catch(function () { tree.textContent = T.loadErr; });
    });

    /* take n questions of one kind, spread as evenly as possible over the chosen lessons */
    function take(kind, n, ids) {
      var by = {}, order = [], res = [];
      bank.items.forEach(function (it) { if (it.y === kind && ids.indexOf(it.l) !== -1) { if (!by[it.l]) { by[it.l] = []; order.push(it.l); } by[it.l].push(it); } });
      order.forEach(function (l) { by[l] = shuffle(by[l]); });
      order = shuffle(order);
      while (res.length < n) {
        var took = false;
        for (var i = 0; i < order.length && res.length < n; i++) { var x = by[order[i]].pop(); if (x) { res.push(x); took = true; } }
        if (!took) break;
      }
      return res.sort(function (a, b) { return a.l - b.l; });
    }
    function lessonTitle(i) { var t = ''; bank.chapters.forEach(function (c) { c.lessons.forEach(function (l) { if (l.i === i) t = l.t; }); }); return t; }

    function build() {
      var ids = chosen(), want = {}, picked = {}, notes = [], total = 0;
      if (!bank || !ids.length) { msg.textContent = T.needLesson; return; }
      ['mc', 'tf', 'sa'].forEach(function (k) {
        want[k] = Math.max(0, Math.min(60, parseInt($('#tq-n-' + k).value, 10) || 0));
        picked[k] = want[k] ? take(k, want[k], ids) : [];
        if (picked[k].length < want[k]) notes.push(T.short(T[k], want[k], picked[k].length));
        total += picked[k].length;
      });
      if (!total) { msg.textContent = notes.length ? notes.join(' ') : T.needCount; return; }
      var codes = +$('#tq-codes').value, withExpl = $('#tq-expl').checked, shuf = $('#tq-shuf').checked && !withExpl;
      var title = $('#tq-title').value.trim() || T.titleV, sub = $('#tq-sub').value.trim();
      out.innerHTML = '';
      var keys = [];
      for (var c = 0; c < codes; c++) {
        var code = codes > 1 ? String(101 + c) : '', sheet = el('section', 'tq-sheet'), key = { code: code, parts: [] };
        sheet.appendChild(el('header', 'tq-head', '<h2>' + esc(title) + '</h2>' + (sub ? '<p>' + esc(sub) + '</p>' : '') +
          '<p class="tq-fields"><span>' + T.name + ': <i></i></span><span>' + T.cls + ': <i class="s"></i></span>' + (code ? '<b class="tq-code">' + T.code + ' ' + code + '</b>' : '') + '</p>'));
        ['mc', 'tf', 'sa'].forEach(function (k, pi) {
          var list = picked[k]; if (!list.length) return;
          if (c > 0) list = shuffle(list);
          sheet.appendChild(el('h3', 'tq-part', T.parts[pi] + ' <small>' + T.partNote[pi] + '</small>'));
          var kp = { title: T.parts[pi], rows: [] };
          list.forEach(function (it, qi) {
            var box = el('div', 'tq-q'), body = '<div class="tq-stem"><b>' + T.q + ' ' + (qi + 1) + '.</b> ' + it.q + '</div>', ans = it.k;
            if (k === 'mc') {
              var idx = [0, 1, 2, 3];
              if (shuf && !it.x && (c > 0 || codes === 1)) idx = shuffle(idx);
              ans = 'ABCD'[idx.indexOf('ABCD'.indexOf(it.k))];
              body += '<div class="tq-opts c' + (it.c || 1) + '">' + idx.map(function (o, n) { return '<span><b>' + 'ABCD'[n] + '.</b> ' + it.o[o] + '</span>'; }).join('') + '</div>';
            } else if (k === 'tf') {
              body += '<table class="tq-tf"><thead><tr><th></th><th>' + T.T + '</th><th>' + T.F + '</th></tr></thead><tbody>' + it.o.map(function (o, n) { return '<tr><td><b>' + 'abcd'[n] + ')</b> ' + o + '</td><td><i></i></td><td><i></i></td></tr>'; }).join('') + '</tbody></table>';
              ans = it.k.split('').map(function (x, n) { return 'abcd'[n] + ') ' + (x === 'T' ? T.T : T.F); }).join('; ');
            } else body += '<p class="tq-ans">' + T.ans + ': <i></i></p>';
            box.innerHTML = body; sheet.appendChild(box);
            kp.rows.push({ n: qi + 1, a: ans, e: it.e, from: lessonTitle(it.l), wide: k !== 'mc' });
          });
          key.parts.push(kp);
        });
        sheet.appendChild(el('p', 'tq-foot', siteName + '.com · ' + T.foot));
        out.appendChild(sheet); keys.push(key);
      }
      var ks = el('section', 'tq-sheet tq-keys');
      ks.appendChild(el('header', 'tq-head', '<h2>' + T.key + '</h2><p>' + esc(title) + (sub ? ' · ' + esc(sub) : '') + '</p>'));
      keys.forEach(function (key) {
        if (key.code) ks.appendChild(el('h3', 'tq-part', T.keyOf + ' ' + key.code));
        key.parts.forEach(function (kp) {
          ks.appendChild(el('p', 'tq-kt', '<b>' + kp.title + '</b>'));
          if (withExpl) ks.appendChild(el('ol', 'tq-kx', kp.rows.map(function (r) { return '<li><b>' + r.a + '.</b> ' + (r.e || '') + '</li>'; }).join('')));
          else ks.appendChild(el('div', 'tq-kg' + (kp.rows[0].wide ? ' wide' : ''), kp.rows.map(function (r) { return '<span><b>' + r.n + '.</b> ' + r.a + '</span>'; }).join('')));
        });
      });
      var src = [];
      keys[0].parts.forEach(function (kp) { kp.rows.forEach(function (r) { if (src.indexOf(r.from) === -1) src.push(r.from); }); });
      ks.appendChild(el('p', 'tq-src', '<b>' + T.from + ':</b> ' + src.map(esc).join('; ') + '.'));
      ks.appendChild(el('p', 'tq-foot', siteName + '.com · ' + T.foot));
      out.appendChild(ks);
      drawMath(out);
      out.hidden = false;
      $('#tq-print').hidden = false; $('#tq-printq').hidden = false; $('#tq-make').textContent = T.again;
      msg.textContent = (notes.length ? notes.join(' ') + ' ' : '') + T.ready(total, codes);
      out.scrollIntoView({ block: 'start' });
    }
    $('#tq-make').addEventListener('click', build);
    var doPrint = function (onlyTest) {
      var r = d.documentElement;
      r.classList.add('print-test'); r.classList.toggle('print-nokey', onlyTest);
      var done = function () { r.classList.remove('print-test', 'print-nokey'); window.removeEventListener('afterprint', done); };
      window.addEventListener('afterprint', done);
      window.print();
    };
    $('#tq-print').addEventListener('click', function () { doPrint(false); });
    $('#tq-printq').addEventListener('click', function () { doPrint(true); });

    /* ---------- live class test: the whole class answers on their phones, this screen (on the projector) fills in as they go ----------
     * Data lives for the length of the lesson in a small realtime database (Firebase REST API):
     *   live/<pin>/meta = { state: lobby|run|end, bank, lang, ids: [index in the bank], min, left (seconds), title }
     *   live/<pin>/p/<student id> = { n: name, a: { <question index>: 'A'..'D' }, d: handed in?, t: joined at }
     * Closing the class deletes it. */
    var DB = app.getAttribute('data-live');
    if (DB) (function () {
      var L = vi ? {
        go: '📺 Cho cả lớp làm trực tiếp', back: '📺 Mở lại màn hình lớp', noMc: 'Thầy cô nhập số câu cho ít nhất một phần, và chọn bài có câu hỏi của phần đó nhé.', err: 'Chưa kết nối được máy chủ lớp học. Thầy cô kiểm tra mạng rồi thử lại.',
        hint: 'Làm trực tiếp dùng đúng số câu của ba phần ở trên (tối đa 30 câu nhiều lựa chọn, 10 câu đúng sai, 12 câu trả lời ngắn). Điểm tính như đề thi tốt nghiệp rồi quy về thang 10.', parts: ['nhiều lựa chọn', 'đúng sai', 'trả lời ngắn'], stT: 'Đúng', stF: 'Sai', keyIs: 'Đáp số đúng',
        at: 'Vào', pin: 'Mã lớp', scan: 'Quét mã hoặc mở địa chỉ trên, rồi nhập mã lớp', joined: 'đã vào lớp', nobody: 'Chưa có ai vào. Học sinh mở địa chỉ trên bằng điện thoại.', min: 'Thời gian (phút)', start: '▶ Bắt đầu', end: '■ Kết thúc', close: 'Đóng lớp', full: '⛶ Toàn màn hình',
        show: 'Hiện đúng sai', hide: 'Ẩn đúng sai', anon: 'Ẩn tên', named: 'Hiện tên', done: 'đã nộp', name: 'Học sinh', score: 'Điểm', right: '% đúng', q: 'Câu', stu: 'HS',
        sureEnd: 'Kết thúc bài làm của cả lớp ngay bây giờ?', sureClose: 'Đóng lớp sẽ xoá toàn bộ bài làm của lớp này. Thầy cô đã chép điểm chưa?', leave: 'Lớp đang mở.',
        ended: 'Đã kết thúc', n: 'Số bài', mean: 'Trung bình', med: 'Trung vị', pass: 'Từ 5 trở lên', hard: 'Câu sai nhiều nhất', tap: 'Bấm vào số câu để chiếu câu hỏi và xem lớp chọn gì.',
        copy: 'Chép bảng điểm', copied: 'Đã chép', toSc: 'Viết nhận xét gửi phụ huynh', toScDone: 'Đã đưa điểm xuống mục Phân tích điểm ở dưới.', chose: 'lượt chọn', blank: 'Chưa trả lời', x: 'Đóng', expl: 'Giải thích'
      } : {
        go: '📺 Run it live for the class', back: '📺 Back to the class screen', noMc: 'Enter a number of questions for at least one part, and choose lessons that have questions of that kind.', err: 'Could not reach the class server. Check your connection and try again.',
        hint: 'The live test uses the numbers of questions set for the three parts above (up to 30 multiple choice, 10 true/false, 12 short answer). Marks follow the graduation exam and are scaled to 10.', parts: ['multiple choice', 'true/false', 'short answer'], stT: 'True', stF: 'False', keyIs: 'Correct answer',
        at: 'Go to', pin: 'Class code', scan: 'Scan the code or open the address above, then enter the class code', joined: 'joined', nobody: 'Nobody yet. Students open the address above on their phones.', min: 'Time (minutes)', start: '▶ Start', end: '■ End', close: 'Close class', full: '⛶ Full screen',
        show: 'Show right/wrong', hide: 'Hide right/wrong', anon: 'Hide names', named: 'Show names', done: 'handed in', name: 'Student', score: 'Score', right: '% right', q: 'Q', stu: 'S',
        sureEnd: 'End the test for the whole class now?', sureClose: 'Closing the class deletes all of its answers. Have you copied the scores?', leave: 'The class is still open.',
        ended: 'Finished', n: 'Papers', mean: 'Mean', med: 'Median', pass: '5 or above', hard: 'Most missed', tap: 'Click a question number to show the question and what the class chose.',
        copy: 'Copy the scores', copied: 'Copied', toSc: 'Write notes to parents', toScDone: 'The scores are now in “Analyse class scores” below.', chose: 'chose', blank: 'No answer', x: 'Close', expl: 'Explanation'
      };
      var room = null, ov = null, es = null, pollT = 0, tickT = 0, lastSync = 0, queued = false, KEY = 'lm-live-host';
      var btn = el('button', 'btn btn-outline'); btn.type = 'button'; btn.id = 'tq-live'; btn.textContent = L.go;
      $('.tool-actions', app).appendChild(btn);
      $('.tool-actions', app).parentNode.insertBefore(el('p', 'tool-mini', L.hint), $('#tq-msg'));
      function fb(method, path, body) {
        return fetch(DB + '/live/' + path + '.json', { method: method, body: body === undefined ? undefined : JSON.stringify(body) }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
      }
      function fail() { msg.textContent = L.err; }
      function newPin(k) { var pin = String(Math.floor(100000 + Math.random() * 900000)); return fb('GET', pin + '/meta').then(function (m) { return m && k < 5 ? newPin(k + 1) : pin; }); }
      function create() {
        var ids = chosen();
        if (!bank || !ids.length) { msg.textContent = T.needLesson; return; }
        var caps = { mc: 30, tf: 10, sa: 12 }, list = [];
        ['mc', 'tf', 'sa'].forEach(function (k) { var n = Math.max(0, Math.min(caps[k], parseInt($('#tq-n-' + k).value, 10) || 0)); if (n) list = list.concat(take(k, n, ids)); });
        if (!list.length) { msg.textContent = L.noMc; return; }
        var bankId = gradeSel.value, title = ($('#tq-title').value || '').trim().slice(0, 80);
        btn.disabled = true;
        newPin(0).then(function (pin) {
          return fb('PUT', pin + '/meta', { state: 'lobby', bank: bankId, lang: vi ? 'vi' : 'en', ids: list.map(function (it) { return bank.items.indexOf(it); }), min: 15, left: 0, title: title, t: { '.sv': 'timestamp' } })
            .then(function () { open({ pin: pin, bankId: bankId, items: list, min: 15, state: 'lobby', left: 0, title: title }); });
        }).catch(fail).then(function () { btn.disabled = false; });
      }
      btn.addEventListener('click', function () { if (room) { ov.hidden = false; d.documentElement.classList.add('lv-open'); } else create(); });

      function open(r) {
        room = r; room.P = {}; room.reveal = false; room.anon = false;
        try { sessionStorage.setItem(KEY, JSON.stringify({ pin: r.pin, bankId: r.bankId })); } catch (e) {}
        ov = el('div', 'lv'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
        d.body.appendChild(ov); d.documentElement.classList.add('lv-open');
        btn.textContent = L.back; msg.textContent = '';
        window.addEventListener('beforeunload', warn);
        listen(); frame();
        if (room.state === 'run') { room.endAt = Date.now() + room.left * 1000; tickT = setInterval(tick, 1000); tick(); }
      }
      function warn(e) { e.preventDefault(); e.returnValue = L.leave; return L.leave; }
      function setDeep(o, ks, v) {
        for (var i = 0; i < ks.length - 1; i++) { if (o[ks[i]] == null || typeof o[ks[i]] !== 'object') o[ks[i]] = {}; o = o[ks[i]]; }
        if (v === null) delete o[ks[ks.length - 1]]; else o[ks[ks.length - 1]] = v;
      }
      function listen() {
        var seq = 0;   // a poll answer that was already on its way when a newer stream event arrived is stale: drop it
        var poll = function () { if (!room) return; var at = seq; fb('GET', room.pin + '/p').then(function (p) { if (room && at === seq) { room.P = p || {}; draw(); } }, function () {}); };
        if (window.EventSource) {
          try {
            es = new EventSource(DB + '/live/' + room.pin + '/p.json');
            var on = function (patch) {
              return function (e) {
                if (!room) return;
                seq++;
                var m = JSON.parse(e.data), ks = m.path.split('/').filter(Boolean);
                if (!ks.length && !patch) room.P = m.data || {};
                else if (patch && m.data && typeof m.data === 'object') Object.keys(m.data).forEach(function (k) { setDeep(room.P, ks.concat(k.split('/')), m.data[k]); });
                else setDeep(room.P, ks, m.data);
                draw();
              };
            };
            es.addEventListener('put', on(false)); es.addEventListener('patch', on(true));
          } catch (e) { es = null; }
        }
        pollT = setInterval(poll, es ? 6000 : 3000); poll();   // the stream is the fast path; this keeps the board right if it stalls
      }
      function players() { return Object.keys(room.P).map(function (id) { var p = room.P[id] || {}; p.id = id; return p; }).filter(function (p) { return typeof p.n === 'string'; }).sort(function (a, b) { return (a.t || 0) - (b.t || 0); }); }
      /* marks as in the graduation exam: 0.25 per multiple choice, up to 1 per true/false question (0.1, 0.25, 0.5, 1 for 1 to 4 right statements), 0.5 per short answer */
      var MAXP = { mc: 0.25, tf: 1, sa: 0.5 };
      function num(s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' ? NaN : Number(s); }
      function ans(p, i) { return p.a && p.a[i] != null ? String(p.a[i]) : ''; }
      function has(it, a) { return it.y === 'tf' ? /[TF]/.test(a) : a.trim() !== ''; }
      function tfRight(it, a) { var c = 0; for (var j = 0; j < 4; j++) if (a.charAt(j) === it.k.charAt(j)) c++; return c; }
      function pts(it, a) {
        if (!has(it, a)) return 0;
        if (it.y === 'mc') return a === it.k ? 0.25 : 0;
        if (it.y === 'tf') return [0, 0.1, 0.25, 0.5, 1][tfRight(it, a)];
        var v = num(a), w = num(it.k); return !isNaN(v) && Math.abs(v - w) < 1e-9 ? 0.5 : 0;
      }
      function total(p) { var c = 0; room.items.forEach(function (it, i) { c += pts(it, ans(p, i)); }); return c; }
      function s10(p) { return total(p) / room.items.reduce(function (s, it) { return s + MAXP[it.y]; }, 0) * 10; }
      function legend() {
        var out = [], from = 0;
        ['mc', 'tf', 'sa'].forEach(function (k, j) { var c = room.items.filter(function (it) { return it.y === k; }).length; if (c) { out.push(L.q + ' ' + (from + 1) + (c > 1 ? '–' + (from + c) : '') + ': ' + L.parts[j]); from += c; } });
        return out.length > 1 ? out.join(' · ') + '. ' : '';
      }
      function pinText() { return room.pin.slice(0, 3) + ' ' + room.pin.slice(3); }
      function clock() { var s = Math.max(0, room.left | 0), m = Math.floor(s / 60); return (m < 10 ? '0' : '') + m + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); }

      /* the frame is rebuilt when the stage changes (lobby, running, finished); the board inside it on every answer */
      function frame() {
        var st = room.state, qr = $('#lv-qr');
        var b = function (id, label, cls) { return '<button type="button" class="btn ' + (cls || 'btn-outline') + '" id="' + id + '">' + label + '</button>'; };
        ov.innerHTML = '<header class="lv-top"><div class="lv-join">' + L.at + ' <b>' + esc(app.getAttribute('data-join')) + '</b> · ' + L.pin + ' <b class="lv-pin">' + pinText() + '</b></div>' +
          '<div class="lv-clock" id="lv-clock">' + (st === 'run' ? clock() : st === 'end' ? L.ended : '') + '</div><div class="lv-btns">' +
          (st === 'lobby' ? b('lv-start', L.start, ' ') : '') + (st === 'run' ? b('lv-reveal', room.reveal ? L.hide : L.show) : '') + (st !== 'lobby' ? b('lv-anon', room.anon ? L.named : L.anon) : '') +
          (st === 'run' ? b('lv-end', L.end, ' ') : '') + (st === 'end' ? b('lv-copy', L.copy) + b('lv-tosc', L.toSc, ' ') : '') + (d.documentElement.requestFullscreen ? b('lv-full', L.full) : '') + (st !== 'run' ? b('lv-close', L.close) : '') +
          '</div></header><main class="lv-main">' +
          (st === 'lobby' ? '<div class="lv-lobby"><div class="lv-qr">' + (qr ? qr.innerHTML : '') + '</div><div><p class="lv-big">' + esc(app.getAttribute('data-join')) + '</p><p class="lv-code">' + pinText() + '</p><p>' + L.scan + '</p>' +
            '<p><label>' + L.min + ' <input type="number" id="lv-min" min="1" max="120" value="' + room.min + '" inputmode="numeric"></label> · ' + room.items.length + ' ' + L.q.toLowerCase() + '</p></div></div><p class="lv-count" id="lv-count"></p><div class="lv-names" id="lv-names"></div>'
            : '<p class="lv-count" id="lv-count"></p><div id="lv-stats"></div><div class="lv-scroll"><table class="lv-board" id="lv-board"></table></div><p class="lv-tip">' + legend() + L.tap + '</p>') +
          '</main>';
        var on = function (id, fn) { var x = $('#' + id, ov); if (x) x.addEventListener('click', fn); };
        on('lv-start', begin); on('lv-end', function () { if (window.confirm(L.sureEnd)) finish(); });
        on('lv-reveal', function () { room.reveal = !room.reveal; frame(); }); on('lv-anon', function () { room.anon = !room.anon; frame(); });
        on('lv-full', function () { if (d.fullscreenElement) d.exitFullscreen(); else d.documentElement.requestFullscreen().catch(function () {}); });
        on('lv-close', close); on('lv-copy', copy); on('lv-tosc', toScores);
        draw();
      }
      function draw() { if (queued || !room) return; queued = true; setTimeout(function () { queued = false; if (room) paint(); }, 150); }
      function paint() {
        var ps = players(), st = room.state, n = room.items.length, cnt = $('#lv-count', ov);
        var who = function (p, i) { return room.anon ? L.stu + ' ' + (i + 1) : esc(p.n); };
        if (st === 'lobby') {
          cnt.textContent = ps.length ? ps.length + ' ' + L.joined : L.nobody;
          $('#lv-names', ov).innerHTML = ps.map(function (p) { return '<span>' + esc(p.n) + '</span>'; }).join('');
          return;
        }
        var show = room.reveal || st === 'end', done = ps.filter(function (p) { return p.d; }).length;
        cnt.textContent = ps.length + ' ' + L.joined + ' · ' + done + ' ' + L.done;
        ps.forEach(function (p, i) { p.i = i; });
        if (show) ps = ps.slice().sort(function (a, b) { return total(b) - total(a) || a.i - b.i; });
        var okBy = room.items.map(function (it, i) { return ps.reduce(function (s, p) { return s + pts(it, ans(p, i)) / MAXP[it.y]; }, 0); });
        $('#lv-board', ov).innerHTML = '<thead><tr><th>#</th><th class="l">' + L.name + '</th>' + room.items.map(function (it, i) { return '<th><button type="button" class="k-' + it.y + '" data-q="' + i + '">' + (i + 1) + '</button></th>'; }).join('') + (show ? '<th>' + L.score + '</th>' : '') + '</tr></thead><tbody>' +
          ps.map(function (p, r) {
            return '<tr><td>' + (r + 1) + '</td><td class="l">' + who(p, p.i) + (p.d ? ' <span class="lv-done" title="' + L.done + '">✓</span>' : '') + '</td>' + room.items.map(function (it, i) {
              var a = ans(p, i), on = has(it, a), g = on ? pts(it, a) / MAXP[it.y] : 0;
              return '<td class="' + (!on ? '' : !show ? 'on' : g === 1 ? 'ok' : g === 0 ? 'no' : 'half') + '">' + (show && on ? (it.y === 'mc' ? a : it.y === 'tf' ? tfRight(it, a) + '/4' : g ? '✓' : '✗') : '') + '</td>';
            }).join('') + (show ? '<td class="s">' + fmt(s10(p), 1) + '</td>' : '') + '</tr>';
          }).join('') + '</tbody>' + (show && ps.length ? '<tfoot><tr><td></td><td class="l">' + L.right + '</td>' + okBy.map(function (c) { var pc = Math.round(100 * c / ps.length); return '<td class="' + (pc < 50 ? 'lo' : '') + '">' + pc + '</td>'; }).join('') + '<td></td></tr></tfoot>' : '');
        var stats = $('#lv-stats', ov);
        if (st === 'end' && ps.length) {
          var xs = ps.map(s10).sort(function (a, b) { return a - b; }), m = xs.length, mean = xs.reduce(function (a, b) { return a + b; }, 0) / m, med = m % 2 ? xs[(m - 1) / 2] : (xs[m / 2 - 1] + xs[m / 2]) / 2;
          var hard = okBy.map(function (c, i) { return { i: i, c: c }; }).sort(function (a, b) { return a.c - b.c; }).slice(0, 3).filter(function (h) { return h.c < ps.length - 1e-9; }).map(function (h) { return L.q + ' ' + (h.i + 1) + ' (' + Math.round(100 * h.c / ps.length) + '%)'; }).join(', ');
          var box = function (l, v) { return '<div class="sc-stat"><b>' + v + '</b><span>' + l + '</span></div>'; };
          stats.innerHTML = '<div class="sc-stats">' + box(L.n, m) + box(L.mean, fmt(mean)) + box(L.med, fmt(med)) + box(L.pass, Math.round(100 * xs.filter(function (x) { return x >= 5; }).length / m) + '%') + '</div>' + (hard ? '<p class="lv-hard"><b>' + L.hard + ':</b> ' + hard + '</p>' : '');
        } else stats.innerHTML = '';
      }
      ov = null;
      d.addEventListener('click', function (e) {
        if (!room || !ov) return;
        var t = e.target.closest ? e.target.closest('.lv-board button[data-q], .lv-qbox [data-x]') : null;
        if (!t) return;
        if (t.hasAttribute('data-x')) { $('.lv-qwrap', ov).remove(); return; }
        var i = +t.getAttribute('data-q'), it = room.items[i], ps = players(), show = room.reveal || room.state === 'end';
        var wrap = el('div', 'lv-qwrap'), none = ps.filter(function (p) { return !has(it, ans(p, i)); }).length, body;
        var bar = function (c) { return '<span class="lv-bar" style="width:' + (ps.length ? 100 * c / ps.length : 0) + '%"></span>'; };
        if (it.y === 'mc') body = it.o.map(function (o, k) {
          var c = ps.filter(function (p) { return ans(p, i) === 'ABCD'[k]; }).length;
          return '<li class="' + (show && 'ABCD'[k] === it.k ? 'ok' : '') + '">' + bar(c) + '<b>' + 'ABCD'[k] + '.</b> <span>' + o + '</span><i>' + c + '</i></li>';
        }).join('');
        else if (it.y === 'tf') body = it.o.map(function (o, k) {
          var t = ps.filter(function (p) { return ans(p, i).charAt(k) === 'T'; }).length, f = ps.filter(function (p) { return ans(p, i).charAt(k) === 'F'; }).length;
          return '<li>' + bar(it.k.charAt(k) === 'T' ? t : f) + '<b>' + 'abcd'[k] + ')</b> <span>' + o + '</span><i>' + (show ? '<u>' + (it.k.charAt(k) === 'T' ? L.stT : L.stF) + '</u> · ' : '') + L.stT + ' ' + t + ' · ' + L.stF + ' ' + f + '</i></li>';
        }).join('');
        else {
          var tally = {}; ps.forEach(function (p) { var a = ans(p, i).trim(); if (a) tally[a] = (tally[a] || 0) + 1; });
          body = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; }).slice(0, 8).map(function (a) {
            return '<li class="' + (show && pts(it, a) ? 'ok' : '') + '">' + bar(tally[a]) + '<span>' + esc(a) + '</span><i>' + tally[a] + '</i></li>';
          }).join('') + (show ? '<li class="ok"><b>' + L.keyIs + ':</b> <span>' + esc(it.k) + '</span></li>' : '');
        }
        wrap.innerHTML = '<div class="lv-qbox"><button type="button" class="btn btn-outline lv-x" data-x="1">' + L.x + '</button><div class="lv-qtext"><b>' + T.q + ' ' + (i + 1) + '.</b> ' + it.q + '</div><ol class="lv-opts">' + body + '</ol><p class="lv-none">' + L.blank + ': ' + none + '</p>' + (room.state === 'end' && it.e ? '<div class="lv-expl"><b>' + L.expl + ':</b> ' + it.e + '</div>' : '') + '</div>';
        var old = $('.lv-qwrap', ov); if (old) old.remove();
        ov.appendChild(wrap); drawMath(wrap);
      });
      function begin() {
        room.min = Math.max(1, Math.min(120, parseInt($('#lv-min', ov).value, 10) || 15));
        room.state = 'run'; room.left = room.min * 60; room.endAt = Date.now() + room.left * 1000; lastSync = Date.now();
        fb('PATCH', room.pin + '/meta', { state: 'run', min: room.min, left: room.left }).catch(function () {});
        frame(); tickT = setInterval(tick, 1000);
      }
      function tick() {
        if (!room || room.state !== 'run') return;
        room.left = Math.max(0, Math.round((room.endAt - Date.now()) / 1000));
        var c = $('#lv-clock', ov); if (c) { c.textContent = clock(); c.classList.toggle('low', room.left <= 60); }
        if (room.left <= 0) return finish();
        if (Date.now() - lastSync >= 5000) { lastSync = Date.now(); fb('PATCH', room.pin + '/meta', { state: 'run', left: room.left }).catch(function () {}); }
      }
      function finish() {
        clearInterval(tickT); room.state = 'end'; room.left = 0;
        var put = function (k) { fb('PATCH', room.pin + '/meta', { state: 'end', left: 0 }).catch(function () { if (k < 5 && room) setTimeout(function () { put(k + 1); }, 2000); }); };
        put(0); frame();
      }
      function rows() { return players().map(function (p) { return p.n.replace(/\s+/g, ' ').trim() + '\t' + fmt(s10(p)); }); }
      function copy() { var c = $('#lv-copy', ov); if (navigator.clipboard) navigator.clipboard.writeText(rows().join('\n')).then(function () { c.textContent = '✓ ' + L.copied; }, function () {}); }
      function toScores() {
        var box = $('#sc-in'); if (!box) return;
        box.value = rows().map(function (r) { return r.replace('\t', ' '); }).join('\n'); $('#sc-max').value = 10; $('#sc-run').click();
        ov.hidden = true; d.documentElement.classList.remove('lv-open'); if (d.fullscreenElement) d.exitFullscreen();
        msg.textContent = L.toScDone; $('#sc-app').scrollIntoView({ block: 'start' });
        var back = el('button', 'btn lv-back'); back.type = 'button'; back.textContent = L.back;   // the class is still open: one tap brings its screen back
        back.addEventListener('click', function () { back.remove(); if (ov) { ov.hidden = false; d.documentElement.classList.add('lv-open'); } });
        d.body.appendChild(back);
      }
      function close() {
        if (!window.confirm(L.sureClose)) return;
        clearInterval(pollT); clearInterval(tickT); if (es) es.close(); es = null;
        fb('DELETE', room.pin).catch(function () {});
        try { sessionStorage.removeItem(KEY); } catch (e) {}
        window.removeEventListener('beforeunload', warn);
        var bk = $('.lv-back'); if (bk) bk.remove();
        ov.remove(); ov = null; room = null; d.documentElement.classList.remove('lv-open'); if (d.fullscreenElement) d.exitFullscreen();
        btn.textContent = L.go;
      }
      /* the page was reloaded by mistake in the middle of a lesson: pick the class up again */
      try {
        var saved = JSON.parse(sessionStorage.getItem(KEY) || 'null');
        if (saved && saved.pin) Promise.all([fb('GET', saved.pin + '/meta'), fetch(bankUrl + saved.bankId + '.json').then(function (r) { return r.json(); })]).then(function (v) {
          var m = v[0], b = v[1];
          if (!m || !m.ids) { sessionStorage.removeItem(KEY); return; }
          cache[saved.bankId] = b;
          open({ pin: saved.pin, bankId: saved.bankId, items: [].concat(m.ids).map(function (i) { return b.items[i]; }).filter(Boolean), min: m.min || 15, state: m.state, left: m.left || 0, title: m.title || '' });
        }).catch(function () {});
      } catch (e) {}
    })();
  })();

  /* ================= 2. class scores ================= */
  var sc = $('#sc-app');
  if (sc) (function () {
    var F = window.lmFeedback, names = F ? F.bands.map(function (b) { return b[1]; }) : [];
    /* one comment per student, written to the parents: what the score says, then how to walk beside the child */
    var C = vi ? [
      'Bài này còn khó với con, con chưa nắm được phần cơ bản. Con rất cần bố mẹ ở bên lúc này: mỗi tối bố mẹ ngồi cùng con 15 phút, cùng xem lại một ví dụ mẫu và động viên con làm lại từng bài nhỏ. Thầy cô sẽ kèm thêm cho con ở lớp.',
      'Con đã làm được một phần, chỉ còn thiếu một chút nữa là đạt. Bố mẹ hãy ghi nhận sự cố gắng của con, cùng con xem lại những câu sai và hỏi con chỗ nào còn thấy khó. Có bố mẹ đồng hành, con sẽ sớm vượt mức 5.',
      'Con đã nắm được kiến thức cơ bản. Bố mẹ hãy khen con vì điều đó, rồi khuyến khích con luyện đều mỗi ngày một ít để làm bài chắc tay hơn. Thỉnh thoảng bố mẹ nhờ con giảng lại một bài, con sẽ nhớ rất lâu.',
      'Con hiểu bài khá tốt, đây là kết quả đáng mừng. Bố mẹ hãy chia vui với con và hỏi con câu nào con thấy tiếc nhất. Thêm một chút cẩn thận khi soát bài, con hoàn toàn có thể lên mức Giỏi.',
      'Con nắm bài chắc và làm bài cẩn thận. Bố mẹ hãy nói cho con biết bố mẹ tự hào về sự chăm chỉ của con, và khuyến khích con thử sức với những bài khó hơn một chút.',
      'Con làm bài xuất sắc và hiểu sâu kiến thức. Bố mẹ hãy cùng con mừng thành quả này, hỏi con đã học như thế nào, và động viên con giúp đỡ các bạn trong lớp.',
      'Con đạt điểm tuyệt đối, một kết quả rất đáng tự hào. Bố mẹ hãy dành cho con một lời khen thật ấm áp vì sự nỗ lực, không chỉ vì điểm số, để con giữ được niềm vui học toán lâu dài.'
    ] : [
      'This unit is still hard for {N}, and the basics are not in place yet. {N} needs you close by right now: sit together for 15 minutes each evening, look at one worked example and encourage one small exercise at a time. We will give extra help in class too.',
      '{N} can do part of the work and is only a little short of a pass. Please notice the effort, go through the wrong answers together and ask which parts still feel hard. With you alongside, {N} will soon be above 5.',
      '{N} has the basics in place. Please praise that, then encourage a little practice every day so the work becomes secure. Now and then, ask {N} to explain a lesson to you: it will stick for a long time.',
      '{N} understands the unit well, which is good news. Share the joy, and ask which question {N} most regrets. With a little more care when checking, a very good result is well within reach.',
      '{N} knows the unit securely and works carefully. Tell {N} you are proud of the hard work, and encourage trying problems that are a little harder.',
      '{N} did excellently and shows deep understanding. Celebrate it together, ask how {N} studied, and encourage helping classmates.',
      '{N} achieved full marks, something to be really proud of. A warm word of praise for the effort, not only the score, will help {N} keep enjoying maths for a long time.'
    ];
    sc.hidden = false;
    sc.innerHTML = '<h2>' + T.scH + '</h2><p>' + T.scLead + '</p>' +
      '<label class="sr" for="sc-in">' + T.scH + '</label><textarea id="sc-in" rows="7" spellcheck="false" placeholder="' + esc(T.scPh) + '"></textarea>' +
      '<div class="tool-row"><label>' + T.max + ' <input type="number" id="sc-max" min="1" max="1000" value="10" inputmode="decimal"></label></div>' +
      '<p class="tool-actions"><button type="button" class="btn" id="sc-run">' + T.run + '</button></p><div id="sc-out" aria-live="polite"></div>';
    $('#sc-run').addEventListener('click', function () {
      var max = parseFloat(String($('#sc-max').value).replace(',', '.')) || 10, rows = [], bad = 0, res = $('#sc-out');
      $('#sc-in').value.split('\n').forEach(function (line) {
        line = line.trim(); if (!line) return;
        var m = /^(.*?)[\s,;:\t|-]*(\d+(?:[.,]\d+)?)\s*$/.exec(line);
        var v = m ? parseFloat(m[2].replace(',', '.')) : NaN;
        if (isNaN(v) || v > max) { bad++; return; }
        rows.push({ name: m[1].replace(/^[\d.)\s]+(?=\D)/, '').trim(), raw: v, s: v / max * 10 });
      });
      if (!rows.length) { res.innerHTML = '<p class="tool-msg">' + T.none2 + '</p>'; return; }
      var xs = rows.map(function (r) { return r.s; }).sort(function (a, b) { return a - b; }), n = xs.length;
      var mean = xs.reduce(function (a, b) { return a + b; }, 0) / n, med = n % 2 ? xs[(n - 1) / 2] : (xs[n / 2 - 1] + xs[n / 2]) / 2;
      var pass = xs.filter(function (x) { return x >= 5; }).length, good = xs.filter(function (x) { return x >= 8; }).length;
      var cnt = names.map(function () { return 0; });
      rows.forEach(function (r) { r.k = F.bandOf(r.s); cnt[r.k]++; });
      var pct = function (k) { return Math.round(100 * k / n); };
      var stat = function (l, v) { return '<div class="sc-stat"><b>' + v + '</b><span>' + l + '</span></div>'; };
      var notes = [], low = n - pass;
      if (vi) {
        if (low / n >= 0.4) notes.push('Có ' + pct(low) + '% học sinh dưới 5 điểm. Nên dành một tiết dạy lại phần trọng tâm trước khi sang bài mới, bắt đầu từ các ví dụ cơ bản.');
        else if (low) notes.push(low + ' học sinh dưới 5 điểm cần được kèm riêng: giao lại bài học tương ứng trên Lemonmath và hẹn các em làm lại bài kiểm tra mini sau vài ngày.');
        if (good / n >= 0.5) notes.push('Hơn nửa lớp đạt từ 8 trở lên: bài kiểm tra có thể hơi dễ, hoặc lớp đã sẵn sàng cho bài vận dụng cao hơn.');
        if (xs[n - 1] - xs[0] >= 6 && n >= 5) notes.push('Điểm phân hoá mạnh (chênh ' + fmt(xs[n - 1] - xs[0], 1) + ' điểm giữa cao nhất và thấp nhất). Nên chia nhóm: nhóm ôn nền tảng và nhóm làm bài nâng cao.');
        if (Math.abs(mean - med) >= 1) notes.push('Trung bình và trung vị lệch nhau ' + fmt(Math.abs(mean - med), 1) + ' điểm: có một vài điểm rất ' + (mean > med ? 'cao' : 'thấp') + ' kéo lệch trung bình, nên nhìn trung vị để đánh giá mặt bằng lớp.');
        if (!notes.length) notes.push('Lớp nắm bài khá đồng đều. Thầy cô có thể chuyển sang bài mới và giao thêm bài luyện tập để củng cố.');
      } else {
        if (low / n >= 0.4) notes.push(pct(low) + '% of the class scored under 5. Consider re-teaching the core of the unit before moving on, starting from the basic examples.');
        else if (low) notes.push(low + (low === 1 ? ' student' : ' students') + ' under 5 need individual support: set the matching Lemonmath lesson again and have them retake the mini test in a few days.');
        if (good / n >= 0.5) notes.push('More than half the class scored 8 or above: the test may have been easy, or the class is ready for harder application problems.');
        if (xs[n - 1] - xs[0] >= 6 && n >= 5) notes.push('The scores are widely spread (' + fmt(xs[n - 1] - xs[0], 1) + ' between highest and lowest). Consider two groups: one consolidating the basics, one on extension work.');
        if (Math.abs(mean - med) >= 1) notes.push('Mean and median differ by ' + fmt(Math.abs(mean - med), 1) + ': a few very ' + (mean > med ? 'high' : 'low') + ' scores pull the mean, so the median describes the class better.');
        if (!notes.length) notes.push('The class is fairly even. You can move on and set extra practice to consolidate.');
      }
      var lines = rows.map(function (r, i) {
        var who = r.name || (T.student + ' ' + (i + 1));
        return who + ' (' + fmt(r.raw) + (max !== 10 ? '/' + fmt(max) : '') + ' ' + T.pts + ', ' + names[r.k] + '): ' + C[r.k].replace(/\{N\}/g, who.split(' ')[0]);
      });
      var top = Math.max.apply(null, cnt);
      res.innerHTML = '<div class="sc-stats">' + stat(T.n, n) + stat(T.mean, fmt(mean)) + stat(T.med, fmt(med)) + stat(T.hi, fmt(xs[n - 1])) + stat(T.lo, fmt(xs[0])) + stat(T.pass, pct(pass) + '%') + stat(T.good, pct(good) + '%') + '</div>' +
        (max !== 10 ? '<p class="tool-mini">(' + T.outOf + ')</p>' : '') + (bad ? '<p class="tool-msg">' + T.bad(bad) + '</p>' : '') +
        '<h3>' + T.dist + '</h3><table class="sc-dist"><tbody>' + names.map(function (nm, k) { return '<tr><th scope="row">' + nm + '</th><td><span class="sc-bar' + (k < 2 ? ' low' : '') + '" style="width:' + (top ? Math.max(cnt[k] ? 3 : 0, 100 * cnt[k] / top) : 0) + '%"></span></td><td>' + cnt[k] + '</td><td>' + pct(cnt[k]) + '%</td></tr>'; }).reverse().join('') + '</tbody></table>' +
        '<h3>' + T.notes + '</h3><ul>' + notes.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
        '<h3>' + T.each + '</h3><p class="tool-actions"><button type="button" class="btn btn-outline" id="sc-copy">' + T.copy + '</button></p><ol class="sc-list">' + lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ol>';
      var cp = $('#sc-copy');
      if (!navigator.clipboard) cp.hidden = true;
      else cp.addEventListener('click', function () { navigator.clipboard.writeText(lines.join('\n')).then(function () { cp.textContent = '✓ ' + T.copied; }, function () {}); });
    });
  })();
})();
