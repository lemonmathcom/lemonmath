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
const EXERCISE = { en: 'Exercise', vi: 'Bài' };
const HINTS = { en: 'What you need and how to start', vi: 'Kiến thức và gợi ý cách làm' };
const QZ = {
  vi: { kind: 'Kiểm tra mini', parts: ['Phần I. Trắc nghiệm nhiều phương án lựa chọn', 'Phần II. Trắc nghiệm đúng sai', 'Phần III. Trắc nghiệm trả lời ngắn'],
    q: 'Câu', T: 'Đúng', F: 'Sai', claim: 'Ý', answer: 'Đáp án', submit: 'Nộp bài và chấm điểm', retry: 'Làm lại', keys: 'Xem đáp án và giải thích',
    saPh: 'Nhập đáp số', note: 'Chấm như đề thi tốt nghiệp THPT: Phần I mỗi câu 0,25 điểm; Phần II mỗi câu tối đa 1 điểm (đúng 1, 2, 3, 4 ý được 0,1; 0,25; 0,5; 1 điểm); Phần III mỗi câu 0,5 điểm.' },
  en: { kind: 'Mini test', parts: ['Part I. Multiple choice', 'Part II. True or false', 'Part III. Short answer'],
    q: 'Question', T: 'True', F: 'False', claim: 'Statement', answer: 'Answer', submit: 'Submit and mark', retry: 'Try again', keys: 'Show answers and explanations',
    saPh: 'Type your answer', note: 'Marked like the Vietnamese graduation exam: Part I 0.25 points per question; Part II up to 1 point per question (1, 2, 3, 4 correct statements give 0.1, 0.25, 0.5, 1 point); Part III 0.5 points per question.' }
};

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
  let exNo = 0, qzNo = 0;
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
      [['mc', 0], ['tf', 1], ['sa', 2]].forEach(([t, pi]) => {
        const list = items.filter((it) => it.type === t);
        if (!list.length) return;
        html += '<div class="qz-part"><h3>' + L.parts[pi] + '</h3>';
        list.forEach((it, j) => {
          n++;
          const name = 'qz' + qzNo + '-' + n;
          html += '<div class="qz-item" data-type="' + t + '" data-key="' + esc(t === 'sa' ? it.key.replace(',', '.') : it.key) + '"><div class="qz-q"><b>' + L.q + ' ' + (j + 1) + '.</b> ' + inl(it.q) + '</div>';
          if (t === 'mc') html += '<ul class="qz-opts">' + it.opts.map((o, i) => { const c = 'ABCD'[i]; return '<li><label><input type="radio" name="' + name + '" value="' + c + '"> <b>' + c + '.</b> ' + inl(o) + '</label></li>'; }).join('') + '</ul>';
          if (t === 'tf') html += '<table class="qz-tf"><tbody>' + it.opts.map((o, i) => { const c = 'abcd'[i]; return '<tr><td><b>' + c + ')</b> ' + inl(o) + '</td><td><label><input type="radio" name="' + name + c + '" value="T"> ' + L.T + '</label></td><td><label><input type="radio" name="' + name + c + '" value="F"> ' + L.F + '</label></td></tr>'; }).join('') + '</tbody></table>';
          if (t === 'sa') html += '<p class="qz-sa"><input type="text" inputmode="decimal" autocomplete="off" maxlength="8" placeholder="' + L.saPh + '" aria-label="' + L.answer + '"></p>';
          html += '<div class="qz-expl" hidden><b>' + L.answer + ': ' + esc(t === 'tf' ? it.key.split('').map((x, i) => 'abcd'[i] + ') ' + (x === 'T' ? L.T : L.F)).join('; ') : it.key) + '.</b> ' + parse(it.expl) + '</div></div>';
          keys += '<li><b>' + L.parts[pi].split('.')[0] + ', ' + L.q.toLowerCase() + ' ' + (j + 1) + ':</b> ' + esc(t === 'tf' ? it.key.split('').map((x, i) => 'abcd'[i] + ') ' + (x === 'T' ? L.T : L.F)).join('; ') : it.key) + '. ' + inl(it.expl) + '</li>';
        });
        html += '</div>';
      });
      out += '<section class="box box-quiz" data-quiz><div class="box-title"><span class="box-kind">' + L.kind + '</span>' + (title ? ' ' + esc(title) : '') + '</div><div class="box-body">' +
        '<p class="qz-note">' + L.note + '</p>' + html +
        '<p class="qz-actions"><button type="button" class="btn qz-submit" hidden>' + L.submit + '</button> <button type="button" class="btn btn-outline qz-retry" hidden>' + L.retry + '</button> <span class="qz-score" aria-live="polite"></span></p>' +
        '<details class="qz-keys"><summary>' + L.keys + '</summary><ol>' + keys + '</ol></details></div></section>';
    } else if (type === 'exercise') {
      // :::exercise [title]  statement  ::hint  knowledge + steps  ::solution  worked solution  :::
      exNo++;
      const parts = body.split(/^::(hint|solution)[ \t]*$/m);
      let q = parts[0], hint = '', sol = '';
      for (let k = 1; k < parts.length; k += 2) { if (parts[k] === 'hint') hint = parts[k + 1]; else sol = parts[k + 1]; }
      if (!sol.trim()) warn('bài tập số ' + exNo + ' (:::exercise) thiếu phần ::solution');
      if (!hint.trim()) warn('bài tập số ' + exNo + ' (:::exercise) thiếu phần ::hint (kiến thức và gợi ý các bước)');
      out += '<section class="box box-exercise" id="ex-' + exNo + '"><div class="box-title"><span class="box-kind">' + EXERCISE[lang] + ' ' + exNo + '</span>' + (title ? ' ' + esc(title) : '') +
        '</div><div class="box-body"><div class="ex-q">' + parse(q) + '</div>' +
        (hint.trim() ? '<div class="ex-hint"><div class="ex-hint-t">' + HINTS[lang] + '</div>' + parse(hint) + '</div>' : '') +
        (sol.trim() ? '<details class="ex-sol"><summary>' + SOLUTION[lang] + '</summary><div class="ex-sol-b">' + parse(sol) + '</div></details>' : '') +
        '</div></section>';
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

  const restoreCode = (s) => s.replace(/⟪C(\d+)⟫/g, (m, i) => codes[+i]);
  const parse = (s) => marked.parse(restoreCode(s), { gfm: true, breaks: false, async: false });

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

module.exports = { parseQuiz, render, esc, slugify };
