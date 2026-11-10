'use strict';

/*
 * Printable self-study worksheet (A4) made automatically from a lesson.
 *
 *   lesson.md  ->  /vi/lop-10/<chapter>/<lesson>/phieu-tu-hoc/   (and /grade-10/.../worksheet/)
 *
 * What goes on the sheet (in this order):
 *   1. header: name, date, time spent
 *   2. "how to use this sheet" (why paper helps: retrieval, spacing, writing every step)
 *   3. goals and the summary ("Ghi nhớ") of the lesson
 *   4. every :::exercise statement, with empty space to work in
 *   5. the hints of every exercise, grouped at the end (look only when stuck)
 *   6. self-check and "do it again after 1 / 3 / 7 days"
 *   7. a QR code that opens the worked solutions on the website
 * Only lessons written with :::exercise boxes get a sheet.
 */

const QRCode = require('qrcode');
const { parseQuiz } = require('./render.js');

const T = {
  vi: {
    dir: 'phieu-tu-hoc', kicker: 'Phiếu tự học', grade: (n) => 'Lớp ' + n, lesson: 'Bài',
    name: 'Họ và tên', date: 'Ngày', time: 'Thời gian làm', minutes: 'phút',
    howTitle: 'Cách dùng phiếu này',
    how: [
      'Đọc phần <b>Ghi nhớ</b>, rồi úp phiếu lại và thử tự nói lại ý chính.',
      'Tự làm từng bài vào chỗ trống, viết <b>đủ từng bước</b>. Chỉ xem phần Gợi ý ở cuối phiếu khi thật sự bí.',
      'Quét mã QR để đối chiếu lời giải chi tiết trên Lemonmath.com.',
      'Đánh dấu phần Tự đánh giá và hẹn ngày làm lại những bài chưa đúng.'
    ],
    why: 'Vì sao nên làm trên giấy? Khi tự nhớ lại và tự viết lời giải mà không nhìn đáp án, não phải làm việc thật sự, nên kiến thức được nhớ lâu và hiểu sâu hơn so với chỉ đọc lại. Làm lại sau vài ngày giúp nhớ bền hơn nữa.',
    goals: 'Mục tiêu', summary: 'Ghi nhớ', exercises: 'Bài tập', ex: 'Bài', challenge: 'Thử thách',
    motto: 'Học với lòng hăng say và niềm phấn khởi', examTitle: 'Đề bài', examNote: 'Thời gian làm bài 90 phút, không xem tài liệu. Phần I khoanh một chữ cái; Phần II ghi Đ hoặc S cho từng ý; Phần III ghi đáp số vào ô (dấu trừ và dấu phẩy mỗi thứ chiếm một ô).', examSelf: 'Sau khi làm xong', examSelfText: 'Quét mã QR, nhập đáp án trên trang web để được chấm điểm, rồi đọc lời giải của những câu sai. Ghi lại các chuyên đề còn yếu và ôn lại bài ôn tập tương ứng.', quiz: 'Kiểm tra mini', quizNote: 'Làm trong 15 phút, không xem lại bài. Phần I khoanh một chữ cái; Phần II ghi Đ hoặc S cho từng ý; Phần III ghi đáp số vào ô.', parts: ['Phần I. Trắc nghiệm nhiều phương án lựa chọn', 'Phần II. Trắc nghiệm đúng sai', 'Phần III. Trắc nghiệm trả lời ngắn'], q: 'Câu', score: 'Điểm', TF: 'Đ / S',
    hints: 'Gợi ý (chỉ xem khi bí)', selfTitle: 'Tự đánh giá', selfCols: ['Tự làm được', 'Cần gợi ý', 'Chưa làm được'],
    again: 'Làm lại các bài chưa đúng sau:', days: ['1 ngày', '3 ngày', '7 ngày'],
    qr: 'Quét mã để xem lời giải từng bước', free: 'Được in miễn phí cho học tập. Vui lòng giữ nguyên tên Lemonmath.com.',
    print: 'In phiếu / Lưu PDF', back: 'Quay lại bài học', tip: 'Mẹo: khi in, chọn khổ A4 và tắt "Đầu trang và chân trang" của trình duyệt.',
    title: (t) => 'Phiếu tự học: ' + t
  },
  en: {
    dir: 'worksheet', kicker: 'Self-study sheet', grade: (n) => 'Grade ' + n, lesson: 'Lesson',
    name: 'Name', date: 'Date', time: 'Time spent', minutes: 'min',
    howTitle: 'How to use this sheet',
    how: [
      'Read the <b>Remember</b> box, then turn the sheet over and say the main ideas in your own words.',
      'Do each exercise in the space given and write <b>every step</b>. Look at the hints at the end only when you are really stuck.',
      'Scan the QR code to check the worked solutions on Lemonmath.com.',
      'Fill in the self-check and plan when to redo the exercises you missed.'
    ],
    why: 'Why work on paper? Recalling and writing a solution without looking at the answer makes your brain do the real work, so you remember longer and understand more deeply than by re-reading. Redoing it a few days later makes it stick even better.',
    goals: 'Goals', summary: 'Remember', exercises: 'Exercises', ex: 'Exercise', challenge: 'Challenge',
    motto: 'Study with passion and excitement', examTitle: 'Questions', examNote: '90 minutes, no notes. Part I: circle one letter; Part II: write T or F for each statement; Part III: write the answer in the boxes (a minus sign and a decimal point each take a box).', examSelf: 'When you have finished', examSelfText: 'Scan the QR code, enter your answers on the website to get your mark, then read the solutions to the questions you got wrong. Note the topics that need more work and go back to the matching revision lesson.', quiz: 'Mini test', quizNote: '15 minutes, without looking back at the lesson. Part I: circle one letter; Part II: write T or F for each statement; Part III: write the answer in the box.', parts: ['Part I. Multiple choice', 'Part II. True or false', 'Part III. Short answer'], q: 'Question', score: 'Score', TF: 'T / F',
    hints: 'Hints (only when stuck)', selfTitle: 'Self-check', selfCols: ['Did it alone', 'Needed a hint', 'Not yet'],
    again: 'Redo the ones you missed after:', days: ['1 day', '3 days', '7 days'],
    qr: 'Scan for step-by-step solutions', free: 'Free to print for learning. Please keep the name Lemonmath.com.',
    print: 'Print / Save as PDF', back: 'Back to the lesson', tip: 'Tip: print on A4 and turn off the browser\'s "Headers and footers".',
    title: (t) => 'Self-study sheet: ' + t
  }
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function qrSvg(text) {
  const q = QRCode.create(text, { errorCorrectionLevel: 'M' });
  const n = q.modules.size, d = q.modules.data;
  let p = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (d[y * n + x]) p += 'M' + x + ' ' + y + 'h1v1h-1z';
  return '<svg class="ws-qr" viewBox="-2 -2 ' + (n + 4) + ' ' + (n + 4) + '" role="img" aria-label="QR"><rect x="-2" y="-2" width="' + (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + p + '" fill="#000"/></svg>';
}

/* How many ruled lines a student needs to write this solution by hand.
 * Counts printed lines of the model solution (each row of a display formula is one line,
 * long text wraps at ~75 characters), then allows for handwriting being larger than print. */
function writeLines(sol) {
  if (!sol.trim()) return 5;
  let n = 0;
  sol.replace(/\r/g, '').split(/(\$\$[\s\S]*?\$\$)/).forEach((b) => {
    if (/^\$\$/.test(b)) { n += (b.match(/\\\\/g) || []).length + 1; return; }
    b.split('\n').forEach((line) => {
      const t = line.replace(/\*\*/g, '').replace(/\\[a-zA-Z]+/g, 'x').replace(/[{}$]/g, '').trim();
      if (!t || /^\|?[-:| ]+\|?$/.test(t)) return;
      n += Math.max(1, Math.ceil(t.length / 75));
    });
  });
  return Math.min(16, Math.max(3, Math.ceil(n * 1.3) + 1));
}

/* Pull the pieces of a lesson out of its Markdown body. */
function parts(md, lang) {
  const goals = (/^:::goals[^\n]*\n([\s\S]*?)^:::[ \t]*$/m.exec(md) || [])[1] || '';
  const sumHead = lang === 'vi' ? 'Tóm tắt' : 'Summary';
  const sm = new RegExp('^##\\s+' + sumHead + '\\s*\\n([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))', 'm').exec(md);
  const summary = sm ? sm[1].trim() : '';
  const exercises = [];
  const re = /^:::exercise[ \t]*([^\n]*)\n([\s\S]*?)^:::[ \t]*$/gm;
  let m;
  while ((m = re.exec(md))) {
    const bits = m[2].split(/^::(hint|solution)[ \t]*$/m);
    let hint = '', sol = '';
    for (let k = 1; k < bits.length; k += 2) { if (bits[k] === 'hint') hint = bits[k + 1]; if (bits[k] === 'solution') sol = bits[k + 1]; }
    exercises.push({ title: m[1].trim(), q: bits[0].trim(), hint: hint.trim(), lines: writeLines(sol) });
  }
  const qm = /^:::quiz[^\n]*\n([\s\S]*?)^:::[ \t]*$/m.exec(md);
  const quiz = qm ? parseQuiz(qm[1]) : [];
  return { goals, summary, exercises, quiz };
}

/*
 * o = { lang, md, meta, grade, number, lessonUrl, assets (relative path to /assets/), backHref, renderMd(md) -> html }
 * returns null when the lesson has no :::exercise boxes.
 */
function worksheet(o) {
  const L = T[o.lang];
  const p = parts(o.md, o.lang);
  if (!p.exercises.length && !p.quiz.length) return null;
  const exam = !p.exercises.length;
  const R = (s) => (s ? o.renderMd(s) : '');
  const qrUrl = o.lessonUrl + (exam ? '' : '#ex-1');

  const exHtml = p.exercises.map((e, i) => {
    return '<section class="ws-ex"><h3><span>' + L.ex + ' ' + (i + 1) + '</span>' + (e.title ? ' <em>' + esc(e.title) + '</em>' : '') + '</h3>' +
      '<div class="ws-q">' + R(e.q) + '</div><div class="ws-space" style="height:' + (e.lines * 7.8).toFixed(1) + 'mm" aria-hidden="true"></div></section>';
  }).join('\n');
  let qzHtml = '';
  if (p.quiz.length) {
    const inl = (md) => { const h = R(md).trim(); return /^<p>[\s\S]*<\/p>$/.test(h) && h.indexOf('<p>', 1) === -1 ? h.slice(3, -4) : h; };
    qzHtml = '<section class="ws-quiz"><h2 class="ws-h2">' + (exam ? L.examTitle : L.quiz) + '</h2><p class="ws-qnote">' + (exam ? L.examNote : L.quizNote) + '</p>';
    [['mc', 0], ['tf', 1], ['sa', 2]].forEach(([t, pi]) => {
      const list = p.quiz.filter((it) => it.type === t);
      if (!list.length) return;
      qzHtml += '<h3>' + L.parts[pi] + '</h3>';
      list.forEach((it, j) => {
        qzHtml += '<div class="ws-qi"><div><b>' + L.q + ' ' + (j + 1) + '.</b> ' + inl(it.q) + '</div>';
        if (t === 'mc') qzHtml += '<div class="ws-mc cols-' + require('./render.js').optCols(it.opts) + '">' + it.opts.map((o, i) => '<span><b>' + 'ABCD'[i] + '.</b> ' + inl(o.replace(/\.\s*$/, '')) + '</span>').join('') + '</div>';
        if (t === 'tf') qzHtml += '<table class="ws-tf">' + it.opts.map((o, i) => '<tr><td><b>' + 'abcd'[i] + ')</b> ' + inl(o) + '</td><td class="box">' + L.TF + '</td></tr>').join('') + '</table>';
        if (t === 'sa') qzHtml += '<div class="ws-sa"><span></span><span></span><span></span><span></span></div>';
        qzHtml += '</div>';
      });
    });
    qzHtml += '<p class="ws-score">' + L.score + ': ........ / 10</p></section>';
  }
  const hintHtml = p.exercises.map((e, i) => e.hint ? '<div class="ws-hint"><b>' + L.ex + ' ' + (i + 1) + '.</b>' + R(e.hint) + '</div>' : '').join('\n');
  const selfRows = p.exercises.map((e, i) => '<tr><th>' + (i + 1) + '</th><td>☐</td><td>☐</td><td>☐</td></tr>').join('');

  const body =
    '<div class="ws-bar no-print"><a href="' + esc(o.backHref) + '">← ' + L.back + '</a><button type="button" onclick="window.print()">' + L.print + '</button><small>' + L.tip + '</small></div>\n' +
    '<main class="ws-sheet">\n' +
    '<header class="ws-head"><div class="ws-brand">Lemon<b>math</b><span>' + L.kicker + '</span></div>' +
    '<div class="ws-where">' + esc(o.gradeLabel || L.grade(o.grade)) + ' · ' + L.lesson + ' ' + esc(o.number) + '</div></header>\n' +
    '<h1>' + esc(o.meta.title) + '</h1>\n' +
    '<div class="ws-fields"><span>' + L.name + ': <i></i></span><span>' + L.date + ': <i class="s"></i></span><span>' + L.time + ': <i class="s"></i> ' + L.minutes + '</span></div>\n' +
    '<aside class="ws-how"><h2>' + L.howTitle + '</h2><ol>' + L.how.map((h) => '<li>' + h + '</li>').join('') + '</ol><p class="ws-why">' + esc(L.why) + '</p></aside>\n' +
    (p.goals ? '<section class="ws-box"><h2>' + L.goals + '</h2>' + R(p.goals) + '</section>\n' : '') +
    (p.summary ? '<section class="ws-box ws-sum"><h2>' + L.summary + '</h2>' + R(p.summary) + '</section>\n' : '') +
    (exam ? '' : '<h2 class="ws-h2">' + L.exercises + '</h2>\n' + exHtml + '\n') +
    qzHtml + '\n' +
    (exam ? '' : '<section class="ws-hints"><h2>' + L.hints + '</h2>' + hintHtml + '</section>\n') +
    '<section class="ws-end"><div class="ws-self">' + (exam ? '<h2>' + L.examSelf + '</h2><p>' + L.examSelfText + '</p>' : '<h2>' + L.selfTitle + '</h2><table><thead><tr><th>#</th>' + L.selfCols.map((c) => '<th>' + c + '</th>').join('') + '</tr></thead><tbody>' + selfRows + '</tbody></table>' +
    '<p class="ws-again">' + L.again + ' ' + L.days.map((d) => '☐ ' + d).join('&nbsp;&nbsp; ') + '</p>') + '</div>' +
    '<div class="ws-qrbox">' + qrSvg(qrUrl) + '<p>' + L.qr + '</p></div></section>\n' +
    '<footer class="ws-foot">lemonmath.com · ' + L.free + '</footer>\n' +
    '</main>';

  const html = '<!doctype html>\n<html lang="' + o.lang + '">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + esc(L.title(o.meta.title)) + ' | Lemonmath</title>\n<meta name="robots" content="noindex,follow">\n' +
    '<link rel="canonical" href="' + esc(o.lessonUrl) + '">\n' +
    '<link rel="stylesheet" href="' + o.assets + 'fonts.css">\n<link rel="stylesheet" href="' + o.assets + 'katex/katex.min.css">\n<link rel="stylesheet" href="' + o.assets + 'print.css">\n' +
    // printed footer: odd pages "Step by step", even pages the motto (Chromium page-margin boxes)
    '<style>@page :right { @bottom-center { content: "Step by step"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } }' +
    ' @page :left { @bottom-center { content: "' + L.motto + '"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } }</style>\n' +
    '</head>\n<body>\n' + body + '\n</body>\n</html>\n';
  return { html, dir: L.dir, count: p.exercises.length || p.quiz.length };
}

module.exports = { worksheet, WS_DIR: { vi: T.vi.dir, en: T.en.dir }, WS_LABEL: { vi: 'In phiếu tự học', en: 'Print a self-study sheet' } };
