#!/usr/bin/env node
'use strict';
/*
 * Check lesson files without building the whole site:
 *   node tools/check.js statements            (both languages of one lesson id)
 *   node tools/check.js content/en/g10/x.md   (one file)
 *   node tools/check.js --all
 * Reports math errors, unknown boxes, bad figures, and English/Vietnamese mismatches.
 */
const fs = require('fs');
const path = require('path');
const katex = require('katex');
const { marked } = require('marked');
const { render } = require('./render.js');
const ROOT = path.resolve(__dirname, '..');

let args = process.argv.slice(2);
if (args.includes('--all')) {
  const dir = path.join(ROOT, 'content', 'en');
  args = [];
  fs.readdirSync(dir).filter((d) => /^g\d+$/.test(d)).forEach((g) => fs.readdirSync(path.join(dir, g)).forEach((f) => args.push(f.replace(/\.md$/, ''))));
}
let bad = 0;
const say = (m) => { console.log(m); };
const problem = (m) => { bad++; console.log('  ✗ ' + m); };

function stats(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n');
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  if (!m) { problem(file + ': thiếu phần đầu --- title/description/minutes ---'); return null; }
  const meta = {};
  m[1].split('\n').forEach((l) => { const kv = /^([a-z]+):\s*(.*)$/.exec(l.trim()); if (kv) meta[kv[1]] = kv[2]; });
  const body = raw.slice(m[0].length);
  const lang = file.includes(path.sep + 'vi' + path.sep) ? 'vi' : 'en';
  if (!meta.title) problem(file + ': thiếu title');
  if (!meta.description) problem(file + ': thiếu description'); else if (meta.description.length > 160) problem(file + ': description dài ' + meta.description.length + ' (> 160)');
  if (!meta.minutes) problem(file + ': thiếu minutes');
  const warns = [];
  let r;
  try { r = render(body, { marked, katex, lang, warn: (w) => warns.push(w) }); } catch (e) { problem(file + ': ' + e.message); return null; }
  warns.forEach((w) => problem(file + ': ' + w));
  const count = (re) => (body.match(re) || []).length;
  const practice = /^:::practice[^\n]*\n([\s\S]*?)^:::/m.exec(body);
  const solution = /^:::solution[^\n]*\n([\s\S]*?)^:::/m.exec(body.slice(practice ? body.indexOf(practice[0]) : 0));
  const nEx = practice ? (practice[1].match(/^\d+\.\s/gm) || []).length : 0;
  const nSol = solution ? (solution[1].match(/^\d+\.\s/gm) || []).length : 0;
  const s = {
    lang, file, meta, sections: r.headings.length, math: r.math, words: body.split(/\s+/).length,
    examples: count(/^:::example/gm), figures: count(/^:::(graph|diagram)/gm), exercises: nEx, solutions: nSol,
    goals: count(/^:::goals/gm), terms: count(/^:::terms/gm), definitions: count(/^:::(definition|theorem)/gm)
  };
  if (!s.goals) problem(file + ': thiếu hộp :::goals');
  if (!s.terms) problem(file + ': thiếu hộp :::terms');
  if (s.examples < 3) problem(file + ': chỉ có ' + s.examples + ' ví dụ (cần ≥ 3)');
  if (nEx < 6) problem(file + ': chỉ có ' + nEx + ' bài tập đánh số trong :::practice (cần ≥ 6)');
  if (nSol !== nEx) problem(file + ': số lời giải (' + nSol + ') khác số bài tập (' + nEx + ')');
  if (s.sections < 4) problem(file + ': chỉ có ' + s.sections + ' mục ## (cần ≥ 4)');
  return s;
}

const seen = {};
args.forEach((a) => {
  const files = a.endsWith('.md') ? [path.resolve(a)] : ['en', 'vi'].map((l) => path.join(ROOT, 'content', l, 'g10', a + '.md'));
  const found = [];
  files.forEach((f) => {
    if (!fs.existsSync(f)) { problem('không thấy file ' + path.relative(ROOT, f)); return; }
    const s = stats(f);
    if (s) found.push(s);
  });
  say(a + ': ' + found.map((s) => s.lang + ' ' + s.words + ' từ, ' + s.sections + ' mục, ' + s.examples + ' ví dụ, ' + s.exercises + ' bài tập, ' + s.figures + ' hình, ' + s.math + ' công thức').join(' | '));
  if (found.length === 2) {
    const [e, v] = found;
    ['sections', 'examples', 'exercises', 'figures', 'definitions'].forEach((k) => { if (e[k] !== v[k]) problem(a + ': ' + k + ' khác nhau (EN ' + e[k] + ', VI ' + v[k] + ')'); });
    if (Math.abs(e.math - v.math) / Math.max(e.math, v.math, 1) > 0.2) problem(a + ': số công thức lệch nhiều (EN ' + e.math + ', VI ' + v.math + ')');
    // every number in the English file should appear in the Vietnamese file and vice versa (catches changed data)
    const nums = (file) => (fs.readFileSync(file, 'utf8').replace(/^---[\s\S]*?---/, '').replace(/\{,\}/g, '.').match(/\d+(?:[.,]\d+)?/g) || []).map((x) => x.replace(',', '.'));
    const cnt = (arr) => arr.reduce((o, x) => { o[x] = (o[x] || 0) + 1; return o; }, {});
    const ce = cnt(nums(e.file)), cv = cnt(nums(v.file));
    const diff = [];
    Object.keys(Object.assign({}, ce, cv)).forEach((n) => { if ((ce[n] || 0) !== (cv[n] || 0) && Math.abs((ce[n] || 0) - (cv[n] || 0)) >= 2) diff.push(n + '(EN' + (ce[n] || 0) + '/VI' + (cv[n] || 0) + ')'); });
    if (diff.length > 6) problem(a + ': nhiều số xuất hiện khác nhau giữa hai bản: ' + diff.slice(0, 12).join(' '));
  }
});
console.log(bad ? '\n' + bad + ' vấn đề cần sửa.' : '\nTất cả đều ổn.');
process.exit(bad ? 1 : 0);
