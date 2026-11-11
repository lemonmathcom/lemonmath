'use strict';

/*
 * Lemonmath lesson renderer (runs at build time, in Node).
 *
 * Turns a Markdown lesson into HTML, with:
 *   - $inline$ and $$display$$ math drawn by KaTeX
 *   - ::: boxes (definition, theorem, example, note, tip, warning, practice, solution)
 *   - ids on ## and ### headings, plus a list of the ## headings for a table of contents
 *
 * Order matters:
 *   1. Hide code, then math, behind placeholders so Markdown cannot mangle _ * \ | in formulas.
 *   2. Split out ::: boxes and run Markdown on each part.
 *   3. Add heading ids, then put the formulas back, drawn by KaTeX.
 */

const OPEN = '⟦';        // ⟦
const CLOSE = '⟧';       // ⟧
const CODE_OPEN = '⟪';   // ⟪
const CODE_CLOSE = '⟫';  // ⟫

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const figures = require('./figures.js');

const KINDS = {
  en: { definition: 'Definition', theorem: 'Theorem', example: 'Example', note: 'Note', tip: 'Tip', warning: 'Watch out', practice: 'Practice', goals: 'Learning goals', terms: 'Key terms' },
  vi: { definition: 'Định nghĩa', theorem: 'Định lí', example: 'Ví dụ', note: 'Ghi chú', tip: 'Mẹo', warning: 'Chú ý', practice: 'Luyện tập', goals: 'Mục tiêu bài học', terms: 'Thuật ngữ' }
};
const SOLUTION = { en: 'Show solution', vi: 'Xem lời giải' };
const APPENDIX = { en: 'Solutions and answers', vi: 'Lời giải và đáp án', note: { en: 'Try each exercise on your own first, then check here.', vi: 'Hãy tự làm từng bài trước, rồi mới đối chiếu ở đây.' }, quiz: { en: 'Mini test: answers', vi: 'Kiểm tra mini: đáp án' } };
const EXERCISE = { en: 'Exercise', vi: 'Bài' };
const HINTS = { en: 'What you need and how to start', vi: 'Kiến thức và gợi ý cách làm' };
const QZ = {
  vi: { kind: 'Kiểm tra mini', examKind: 'Đề luyện thi', parts: ['Phần I. Trắc nghiệm nhiều phương án lựa chọn', 'Phần II. Trắc nghiệm đúng sai', 'Phần III. Trắc nghiệm trả lời ngắn'],
    q: 'Câu', T: 'Đúng', F: 'Sai', claim: 'Ý', answer: 'Đáp án', submit: 'Nộp bài và chấm điểm', retry: 'Làm lại', keys: 'Xem đáp án và giải thích',
    saPh: 'Nhập đáp số', noteTest: 'Mỗi câu đúng được 1 điểm, câu sai không bị trừ điểm. Hãy bấm giờ như thi thật rồi mới nộp bài.', note: 'Chấm như đề thi tốt nghiệp THPT: Phần I mỗi câu 0,25 điểm; Phần II mỗi câu tối đa 1 điểm (đúng 1, 2, 3, 4 ý được 0,1; 0,25; 0,5; 1 điểm); Phần III mỗi câu 0,5 điểm.' },
  en: { kind: 'Mini test', examKind: 'Practice paper', parts: ['Part I. Multiple choice', 'Part II. True or false', 'Part III. Short answer'],
    q: 'Question', T: 'True', F: 'False', claim: 'Statement', answer: 'Answer', submit: 'Submit and mark', retry: 'Try again', keys: 'Show answers and explanations',
    saPh: 'Type your answer', noteTest: 'One mark per correct answer and no penalty for wrong answers. Time yourself as in the real exam before you submit.', note: 'Marked like the Vietnamese graduation exam: Part I 0.25 points per question; Part II up to 1 point per question (1, 2, 3, 4 correct statements give 0.1, 0.25, 0.5, 1 point); Part III 0.5 points per question.' }
};

/* Marking note for a real paper: only the parts it actually has. */
function paperNote(L, items) {
  const has = (t) => items.some((i) => i.type === t);
  const vi = L.q === 'Câu';
  const bits = [];
  if (has('mc')) bits.push(vi ? 'Phần I mỗi câu 0,25 điểm' : 'Part I 0.25 points per question');
  if (has('tf')) bits.push(vi ? 'Phần II mỗi câu tối đa 1 điểm (đúng 1, 2, 3, 4 ý được 0,1; 0,25; 0,5; 1 điểm)' : 'Part II up to 1 point per question (1, 2, 3, 4 correct statements give 0.1, 0.25, 0.5, 1 point)');
  if (has('sa')) bits.push(vi ? 'Phần III mỗi câu 0,5 điểm' : 'Part III 0.5 points per question');
  return (vi ? 'Cách chấm phần trắc nghiệm: ' : 'How the objective part is marked: ') + bits.join('; ') + '.';
}

/* :::quiz body -> [{type: 'mc'|'tf'|'sa', q, opts: [], key, expl}] */
function parseQuiz(body) {
  const items = [];
  const parts = body.split(/^::(mc|tf|sa)[ \t]*$/m);
  for (let k = 1; k < parts.length; k += 2) {
    const type = parts[k];
    const km = /^::key[ \t]+(.+)$/m.exec(parts[k + 1]);
    const main = km ? parts[k + 1].slice(0, km.index) : parts[k + 1];
    const expl = km ? parts[k + 1].slice(km.index + km[0].length).trim() : '';
    const optRe = type === 'mc' ? /^([A-D])\.[ \t]+(.*)$/ : type === 'tf' ? /^([a-d])\)[ \t]+(.*)$/ : null;
    const q = [], opts = [];
    main.split('\n').forEach((line) => { const m = optRe && optRe.exec(line.trim()); if (m) opts.push(m[2]); else if (!opts.length) q.push(line); else opts[opts.length - 1] += ' ' + line.trim(); });
    let key = km ? km[1].trim() : '';
    if (type === 'tf') key = key.toUpperCase().replace(/Đ/g, 'T').replace(/S/g, 'F').replace(/[^TF]/g, '');
    if (type === 'mc') key = key.toUpperCase().replace(/[^A-D]/g, '');
    items.push({ type, q: q.join('\n').trim(), opts, key, expl });
  }
  return items;
}
/*
 * Multiple-choice layout like the Vietnamese national exam paper (đề THPT):
 * short options on one row (4 columns), medium options 2 per row, long options one per line.
 * Width is estimated from the raw text: $math$ or ⟦Mn⟧ placeholders count by their visible size.
 */
let MATH_STORE = [];
let PAPER = false; // true while rendering a real exam paper (type: paper)
function texWidth(tex) {
  let t = String(tex);
  for (let k = 0; k < 3; k++) t = t.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m, a, b) => (a.length > b.length ? a : b));
  return t.replace(/\\(left|right|displaystyle|,|;|!|quad)/g, '')
    .replace(/\\(sin|cos|tan|cot|log|ln|lim|sqrt|max|min)\b/g, (m, w) => w)
    .replace(/\\[a-zA-Z]+/g, 'x').replace(/[+\-=<>]|\\le|\\ge/g, '##').replace(/[{}\s^_]/g, '').length;
}
function optWidth(o) {
  return String(o)
    .replace(/⟦M(\d+)⟧/g, (m, i) => 'x'.repeat(texWidth((MATH_STORE[+i] || {}).tex || 'xx')))
    .replace(/\$([^$]+)\$/g, (m, t) => 'x'.repeat(texWidth(t)))
    .replace(/[*_`]/g, '').trim().length;
}
function optCols(opts) {
  const w = Math.max(0, ...opts.map(optWidth));
  return w <= 15 ? 4 : w <= 34 ? 2 : 1;
}

const TERMS_HEAD = { en: ['English', 'Tiếng Việt'], vi: ['Tiếng Việt', 'English'] };

const CODE_RE = /(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)/g;

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Math: $$ ... $$ may span lines. $ ... $ stays on one line, must not start or
// end with a space, and a closing $ followed by a digit is treated as money.
function hideMath(text, store) {
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, tex) => {
    store.push({ tex: tex.trim(), display: true });
    return OPEN + 'M' + (store.length - 1) + CLOSE;
  });
  text = text.replace(/(^|[^\\$])\$([^\s$](?:[^$\n]*[^\s$])?)\$(?!\d)/g, (m, pre, tex) => {
    store.push({ tex, display: false });
    return pre + OPEN + 'M' + (store.length - 1) + CLOSE;
  });
  return text;
}

function blocks(text, parse, restoreCode, warn, lang, uid) {
  const re = /^:::([a-z]+)[ \t]*([^\n]*)\n([\s\S]*?)^:::[ \t]*$/gm;
  let out = '';
  let last = 0;
  let m;
  let exNo = 0, qzNo = 0, apx = '';
  while ((m = re.exec(text))) {
    out += parse(text.slice(last, m.index));
    let type = m[1];
    const title = restoreCode(m[2].trim());
    const body = m[3];
    if (type === 'solution') {
      out += '<details class="box box-solution"><summary>' + esc(title || SOLUTION[lang]) +
        '</summary><div class="box-body">' + parse(body) + '</div></details>';
    } else if (type === 'graph' || type === 'diagram') {
      const raw = restoreCode(body);
      try {
        out += figures[type](raw, { cls: 'fig-' + type, uid: uid.n++, lang, caption: !!title, captionHtml: parse(title).replace(/^<p>|<\/p>\s*$/g, '') });
      } catch (e) {
        throw new Error(':::' + type + ': ' + e.message);
      }
    } else if (type === 'quiz') {
      qzNo++;
      const L = QZ[lang], items = parseQuiz(body);
      const inl = (md) => { const h = parse(md).trim(); return /^<p>[\s\S]*<\/p>$/.test(h) && h.indexOf('<p>', 1) === -1 ? h.slice(3, -4) : h; };
      let n = 0, html = '', keys = '';
      // international practice tests (":::quiz test") keep the questions in the order written, numbered 1, 2, 3 …
      const groups = title === 'test' ? [['all', -1]] : [['mc', 0], ['tf', 1], ['sa', 2]];
      groups.forEach(([g, pi]) => {
        const list = g === 'all' ? items : items.filter((it) => it.type === g);
        if (!list.length) return;
        html += '<div class="qz-part">' + (pi >= 0 ? '<h3>' + L.parts[pi] + '</h3>' : '');
        list.forEach((it, j) => {
          const t = it.type;
          n++;
          const name = 'qz' + qzNo + '-' + n;
          html += '<div class="qz-item" data-type="' + t + '" data-key="' + esc(t === 'sa' ? it.key.replace(',', '.') : it.key) + '"><div class="qz-q"><b>' + L.q + ' ' + (j + 1) + '.</b> ' + inl(it.q) + '</div>';
          if (t === 'mc') html += '<ul class="qz-opts cols-' + optCols(it.opts) + '">' + it.opts.map((o, i) => { const c = 'ABCD'[i]; return '<li><label><input type="radio" name="' + name + '" value="' + c + '"> <b>' + c + '.</b> ' + inl(o.replace(/\.\s*$/, '')) + '</label></li>'; }).join('') + '</ul>';
          if (t === 'tf') html += '<table class="qz-tf"><tbody>' + it.opts.map((o, i) => { const c = 'abcd'[i]; return '<tr><td><b>' + c + ')</b> ' + inl(o) + '</td><td><label><input type="radio" name="' + name + c + '" value="T"> ' + L.T + '</label></td><td><label><input type="radio" name="' + name + c + '" value="F"> ' + L.F + '</label></td></tr>'; }).join('') + '</tbody></table>';
          if (t === 'sa') html += '<p class="qz-sa"><input type="text" inputmode="decimal" autocomplete="off" maxlength="8" placeholder="' + L.saPh + '" aria-label="' + L.answer + '"><span class="qz-boxes" aria-hidden="true"><i></i><i></i><i></i><i></i></span></p>';
          html += '<div class="qz-expl" hidden><b>' + L.answer + ': ' + esc(t === 'tf' ? it.key.split('').map((x, i) => 'abcd'[i] + ') ' + (x === 'T' ? L.T : L.F)).join('; ') : it.key) + '.</b> ' + parse(it.expl) + '</div></div>';
          keys += '<li><b>' + (pi >= 0 ? L.parts[pi].split('.')[0] + ', ' + L.q.toLowerCase() : L.q) + ' ' + (j + 1) + ':</b> ' + esc(t === 'tf' ? it.key.split('').map((x, i) => 'abcd'[i] + ') ' + (x === 'T' ? L.T : L.F)).join('; ') : it.key) + '. ' + inl(it.expl) + '</li>';
        });
        html += '</div>';
      });
      out += '<section class="box box-quiz" data-quiz' + (title === 'test' ? ' data-count' : '') + (PAPER ? ' data-paper' : '') + '><div class="box-title"><span class="box-kind">' + (title === 'exam' || title === 'test' ? L.examKind : L.kind) + '</span>' + (title && title !== 'exam' && title !== 'test' ? ' ' + esc(title) : '') + '</div><div class="box-body">' +
        '<p class="qz-note">' + (title === 'test' ? L.noteTest : PAPER ? paperNote(L, items) : L.note) + '</p>' + html +
        '<p class="qz-actions"><button type="button" class="btn qz-submit" hidden>' + L.submit + '</button> <button type="button" class="btn btn-outline qz-retry" hidden>' + L.retry + '</button> <span class="qz-score" aria-live="polite"></span></p>' +
        '<details class="qz-keys"><summary>' + L.keys + '</summary><ol>' + keys + '</ol></details></div></section>';
      apx += '<h3>' + (title === 'exam' || title === 'test' ? L.keys : APPENDIX.quiz[lang]) + '</h3><ol class="pa-keys">' + keys + '</ol>';
    } else if (type === 'exercise') {
      // :::exercise [title]  statement  ::hint  knowledge + steps  ::solution  worked solution  :::
      exNo++;
      const parts = body.split(/^::(hint|solution)[ \t]*$/m);
      let q = parts[0], hint = '', sol = '';
      for (let k = 1; k < parts.length; k += 2) { if (parts[k] === 'hint') hint = parts[k + 1]; else sol = parts[k + 1]; }
      if (!sol.trim()) warn('bài tập số ' + exNo + ' (:::exercise) thiếu phần ::solution');
      if (!hint.trim() && !PAPER) warn('bài tập số ' + exNo + ' (:::exercise) thiếu phần ::hint (kiến thức và gợi ý các bước)');
      const pm = /\(\s*(\d+(?:[.,]\d+)?)\s*(?:điểm|points?|marks?)\s*\)/i.exec(title);
      const pts = pm ? pm[1].replace(',', '.') : '';
      out += '<section class="box box-exercise' + (PAPER ? ' paper-q' : '') + '" id="ex-' + exNo + '"' + (pts ? ' data-pts="' + pts + '"' : '') + '><div class="box-title">' + (PAPER && title ? '<span class="box-kind">' + esc(title) + '</span>' : '<span class="box-kind">' + EXERCISE[lang] + ' ' + exNo + '</span>' + (title ? ' ' + esc(title) : '')) +
        '</div><div class="box-body"><div class="ex-q">' + parse(q) + '</div>' +
        (hint.trim() ? '<div class="ex-hint"><div class="ex-hint-t">' + HINTS[lang] + '</div>' + parse(hint) + '</div>' : '') +
        (sol.trim() ? '<details class="ex-sol"><summary>' + SOLUTION[lang] + '</summary><div class="ex-sol-b">' + parse(sol) + '</div></details>' : '') +
        '<div class="ex-write" aria-hidden="true"></div></div></section>';
      if (sol.trim()) apx += '<div class="pa-item"><b>' + (PAPER && title ? esc(title) : EXERCISE[lang] + ' ' + exNo) + '.</b>' + parse(sol) + '</div>';
    } else if (type === 'terms') {
      const rows = body.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
        const parts = l.replace(/^[-*]\s*/, '').split(/\s+\|\s+/);
        if (parts.length < 2) throw new Error('dòng trong :::terms phải có dạng "thuật ngữ | term": "' + l + '"');
        return '<tr><th scope="row">' + parse(parts[0]).replace(/^<p>|<\/p>\s*$/g, '').trim() + '</th><td>' + parse(parts[1]).replace(/^<p>|<\/p>\s*$/g, '').trim() + '</td>' +
          (parts[2] ? '<td>' + parse(parts.slice(2).join(' | ')).replace(/^<p>|<\/p>\s*$/g, '').trim() + '</td>' : '') + '</tr>';
      });
      const three = rows.some((r) => /<td>.*<td>/.test(r));
      out += '<aside class="box box-terms"><div class="box-title"><span class="box-kind">' + KINDS[lang].terms + '</span>' + (title ? ' ' + esc(title) : '') +
        '</div><div class="box-body"><table class="terms"><thead><tr><th scope="col">' + TERMS_HEAD[lang][0] + '</th><th scope="col">' + TERMS_HEAD[lang][1] + '</th>' + (three ? '<th scope="col"></th>' : '') + '</tr></thead><tbody>' + rows.join('') + '</tbody></table></div></aside>';
    } else {
      if (!KINDS[lang][type]) {
        warn('hộp ":::' + type + '" không có trong danh sách, sẽ hiển thị như hộp note');
        type = 'note';
      }
      out += '<aside class="box box-' + type + '"><div class="box-title"><span class="box-kind">' +
        KINDS[lang][type] + '</span>' + (title ? ' ' + esc(title) : '') +
        '</div><div class="box-body">' + parse(body) + '</div></aside>';
    }
    last = re.lastIndex;
  }
  out += parse(text.slice(last));
  // printed lessons: all solutions and answer keys gathered at the end (hidden on screen)
  if (apx) out += '<section class="print-answers" aria-hidden="true"><h2 class="pa-title">' + APPENDIX[lang] + '</h2><p class="pa-note">' + APPENDIX.note[lang] + '</p>' + apx + '</section>';
  return out;
}

function addHeadingIds(html, store, list) {
  const seen = {};
  return html.replace(/<h([23])(?:\s[^>]*)?>([\s\S]*?)<\/h\1>/g, (m, level, inner) => {
    const plain = inner
      .replace(/⟦M(\d+)⟧/g, (x, i) => ' ' + store[+i].tex.replace(/[\\{}^_$]/g, '') + ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/&[a-z]+;/g, ' ');
    const base = slugify(plain) || 'section';
    seen[base] = (seen[base] || 0) + 1;
    const id = seen[base] > 1 ? base + '-' + seen[base] : base;
    if (level === '2') list.push({ id, html: inner });
    return '<h' + level + ' id="' + id + '">' + inner + '</h' + level + '>';
  });
}

function render(md, opts) {
  const marked = opts.marked;
  const katex = opts.katex;
  const warn = opts.warn || function () {};

  const store = [];
  const codes = [];
  let text = String(md).replace(/\r\n?/g, '\n');

  text = text.replace(CODE_RE, (m) => {
    codes.push(m);
    return CODE_OPEN + 'C' + (codes.length - 1) + CODE_CLOSE;
  });

  const opened = (text.match(/^:::[a-z]+/gm) || []).length;
  const closed = (text.match(/^:::[ \t]*$/gm) || []).length;
  if (opened !== closed) {
    throw new Error('số dòng mở hộp ":::loại" (' + opened + ') khác số dòng đóng ":::" (' + closed + ')');
  }

  text = hideMath(text, store);
  MATH_STORE = store;
  PAPER = !!opts.paper;

  const restoreCode = (s) => s.replace(/⟪C(\d+)⟫/g, (m, i) => codes[+i]);
  // a line starting "a) ", "b) " … (parts of an exercise) always starts a new paragraph, even without a blank line
  const parts = (s) => s.replace(/([^\n])\n(?=\(?[a-h]\) )/g, '$1\n\n');
  const optStore = [];
  const mcOpts = (s) => s.replace(/(^|\n)A\.[ \t]+([^\n]*?)[ \t]*\nB\.[ \t]+([^\n]*?)[ \t]*\nC\.[ \t]+([^\n]*?)[ \t]*\nD\.[ \t]+([^\n]*?)[ \t]*(?=\n|$)/g, (m, pre, a, b, c, d) => {
    optStore.push([a, b, c, d]);
    return pre + '\n' + OPEN + 'O' + (optStore.length - 1) + CLOSE + '\n';
  });
  const inline = (md) => marked.parseInline(md, { gfm: true });
  const drawOpts = (html) => html.replace(/(?:<p>)?⟦O(\d+)⟧(?:<\/p>)?/g, (m, i) => {
    const o = optStore[+i];
    return '<div class="mc-opts cols-' + optCols(o) + '">' + o.map((x, k) => '<span><b>' + 'ABCD'[k] + '.</b> ' + inline(x.replace(/\.\s*$/, '')) + '</span>').join('') + '</div>';
  });
  const parse = (s) => drawOpts(marked.parse(mcOpts(parts(restoreCode(s))).replace(/[ \t]+\n(?=⟦O)/g, '\n'), { gfm: true, breaks: false, async: false }));

  const lang = opts.lang === 'vi' ? 'vi' : 'en';
  let html = blocks(text, parse, restoreCode, warn, lang, opts.uid || { n: 1 });

  const headings = [];
  html = addHeadingIds(html, store, headings);

  const drawMath = (s) => s.replace(/⟦M(\d+)⟧/g, (m, i) => {
    const item = store[+i];
    try {
      return katex.renderToString(item.tex, {
        displayMode: item.display,
        throwOnError: true,
        strict: 'ignore',
        trust: false,
        output: 'htmlAndMathml'
      });
    } catch (e) {
      throw new Error('công thức LaTeX bị lỗi: ' + item.tex.slice(0, 80) + ' (' + e.message + ')');
    }
  });

  html = drawMath(html);
  headings.forEach((h) => { h.html = drawMath(h.html); });
  html = html.replace(/<img /g, '<img loading="lazy" decoding="async" ');

  return { html, headings, math: store.length };
}

module.exports = { parseQuiz, render, esc, slugify, optCols };
