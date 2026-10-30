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
        out += figures[type](raw, { cls: 'fig-' + type, uid: uid.n++, caption: !!title, captionHtml: parse(title).replace(/^<p>|<\/p>\s*$/g, '') });
      } catch (e) {
        throw new Error(':::' + type + ': ' + e.message);
      }
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

module.exports = { render, esc, slugify };
