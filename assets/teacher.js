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
    n: 'Sĩ số', mean: 'Điểm trung bình', med: 'Trung vị', hi: 'Cao nhất', lo: 'Thấp nhất', pass: 'Từ 5 trở lên', good: 'Từ 8 trở lên', dist: 'Phân bố theo mức', notes: 'Gợi ý cho thầy cô', each: 'Nhận xét cho từng học sinh', copy: 'Sao chép tất cả nhận xét', copied: 'Đã sao chép', student: 'Học sinh', pts: 'điểm', outOf: 'quy ra thang 10',
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
    n: 'Students', mean: 'Mean', med: 'Median', hi: 'Highest', lo: 'Lowest', pass: '5 or above', good: '8 or above', dist: 'Distribution by level', notes: 'Suggestions for the teacher', each: 'A comment for each student', copy: 'Copy all comments', copied: 'Copied', student: 'Student', pts: 'points', outOf: 'on the 10-point scale',
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
  })();

  /* ================= 2. class scores ================= */
  var sc = $('#sc-app');
  if (sc) (function () {
    var F = window.lmFeedback, names = F ? F.bands.map(function (b) { return b[1]; }) : [];
    var C = vi ? [
      '{N} chưa nắm được kiến thức cơ bản của bài. Em cần ôn lại lí thuyết và làm lại các ví dụ mẫu, mỗi ngày một ít; thầy cô và gia đình cùng kèm thêm cho em.',
      '{N} đã làm được một phần nhưng còn hổng một số kiến thức cơ bản. Em nên sửa lại các câu sai và luyện thêm dạng bài cơ bản để vượt mức 5.',
      '{N} nắm được kiến thức cơ bản. Em cần luyện tập đều hơn để làm bài chắc tay và bớt lỗi tính toán.',
      '{N} hiểu bài khá tốt. Em nên làm thêm bài vận dụng và soát lại bài trước khi nộp để lên mức Giỏi.',
      '{N} nắm bài chắc và làm bài cẩn thận. Em có thể thử sức với các bài nâng cao.',
      '{N} làm bài xuất sắc, hiểu sâu kiến thức. Em hãy tiếp tục phát huy và giúp đỡ các bạn trong lớp.',
      '{N} đạt điểm tuyệt đối, rất đáng khen. Em hãy giữ vững phong độ và thử sức với những bài khó hơn.'
    ] : [
      '{N} has not yet grasped the basics of this unit and needs to go back over the theory and worked examples, a little every day, with support from teacher and family.',
      '{N} can do part of the work but has gaps in the basics. Correcting the wrong answers and practising standard questions should lift the score above 5.',
      '{N} has the basics in place and needs more regular practice to work securely and avoid calculation slips.',
      '{N} understands the unit well. More application problems and checking the paper before handing in would lead to a very good result.',
      '{N} knows the unit securely and works carefully, and is ready to try more demanding problems.',
      '{N} did excellently and shows deep understanding. Keep it up, and help classmates where possible.',
      '{N} achieved full marks, which deserves real praise. Keep this standard and try harder problems.'
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
        return who + ' (' + fmt(r.raw) + (max !== 10 ? '/' + fmt(max) : '') + ' ' + T.pts + ', ' + names[r.k] + '): ' + C[r.k].replace('{N}', vi ? 'Em' : who.split(' ')[0]);
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
