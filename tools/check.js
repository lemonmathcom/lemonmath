#!/usr/bin/env node
'use strict';
/*
 * Check lesson files without building the whole site:
 *   node tools/check.js statements            (both languages of one lesson id, in any grade folder)
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
  const ex = path.join(dir, 'exams');
  if (fs.existsSync(ex)) fs.readdirSync(ex).forEach((e) => fs.readdirSync(path.join(ex, e)).forEach((f) => args.push(f.replace(/\.md$/, ''))));
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
  try { r = render(body, { marked, katex, lang, paper: meta.type === 'paper', warn: (w) => warns.push(w) }); } catch (e) { problem(file + ': ' + e.message); return null; }
  warns.forEach((w) => problem(file + ': ' + w));
  const count = (re) => (body.match(re) || []).length;
  const practice = /^:::practice[^\n]*\n([\s\S]*?)^:::/m.exec(body);
  const solution = /^:::solution[^\n]*\n([\s\S]*?)^:::/m.exec(body.slice(practice ? body.indexOf(practice[0]) : 0));
  // two formats: old (:::practice list + :::solution list) or new (one :::exercise box per exercise)
  const exBoxes = body.match(/^:::exercise[^\n]*\n[\s\S]*?^:::[ \t]*$/gm) || [];
  const nEx = exBoxes.length ? exBoxes.length : practice ? (practice[1].match(/^\d+\.\s/gm) || []).length : 0;
  const nSol = exBoxes.length ? exBoxes.filter((b) => /^::solution[ \t]*$/m.test(b)).length : solution ? (solution[1].match(/^\d+\.\s/gm) || []).length : 0;
  exBoxes.forEach((b, k) => { if (meta.type !== 'paper' && !/^::hint[ \t]*$/m.test(b)) problem(file + ': bài tập ' + (k + 1) + ' thiếu phần ::hint (kiến thức và gợi ý các bước)'); });
  const s = {
    lang, file, meta, sections: r.headings.length, math: r.math, words: body.split(/\s+/).length,
    examples: count(/^:::example/gm), figures: count(/^:::(graph|diagram)/gm), exercises: nEx, solutions: nSol,
    goals: count(/^:::goals/gm), terms: count(/^:::terms/gm), definitions: count(/^:::(definition|theorem)/gm)
  };
  if (meta.type === 'guide') { // exam overview / study-skills article: prose, no exercises or mini test required
    if (!s.goals) problem(file + ': thiếu hộp :::goals');
    if (s.sections < 4) problem(file + ': chỉ có ' + s.sections + ' mục ## (cần ≥ 4)');
    if (s.words < 700) problem(file + ': bài hướng dẫn quá ngắn (' + s.words + ' từ, cần ≥ 700)');
    return s;
  }
  if (meta.type === 'test') { // international practice paper (SAT, ACT, AP ...): :::quiz test, one mark per question
    const qx = /^:::quiz[ \t]+test[ \t]*\n([\s\S]*?)^:::[ \t]*$/m.exec(body);
    if (!qx) { problem(file + ': đề luyện quốc tế cần một hộp ":::quiz test"'); return s; }
    const it = require('./render.js').parseQuiz(qx[1]);
    const c = (t) => it.filter((i) => i.type === t).length;
    s.quiz = c('mc') + '-' + c('tf') + '-' + c('sa');
    if (it.length < 15) problem(file + ': đề luyện chỉ có ' + it.length + ' câu (cần ≥ 15)');
    const cnt = {}; it.filter((i) => i.type === 'mc').forEach((i) => { cnt[i.key] = (cnt[i.key] || 0) + 1; });
    if (c('mc') >= 8 && Math.max(0, ...Object.values(cnt)) > Math.ceil(c('mc') * 0.4)) problem(file + ': đáp án trắc nghiệm dồn vào một chữ cái (' + JSON.stringify(cnt) + ')');
    it.forEach((i, k) => {
      if (i.type === 'mc' && (i.opts.length !== 4 || !/^[A-D]$/.test(i.key))) problem(file + ': câu thứ ' + (k + 1) + ' cần 4 phương án và ::key A–D');
      if (i.type === 'tf') problem(file + ': câu thứ ' + (k + 1) + ': đề quốc tế không dùng câu đúng/sai (::tf)');
      if (i.type === 'sa' && (!/^-?\d+([.,]\d+)?$/.test(i.key) || i.key.length > 6)) problem(file + ': câu thứ ' + (k + 1) + ' (tự điền) có ::key "' + i.key + '" không hợp lệ (số, tối đa 6 kí tự)');
      if (!i.expl) problem(file + ': câu thứ ' + (k + 1) + ' thiếu lời giải sau ::key');
    });
    return s;
  }
  if (meta.type === 'paper') { // real exam paper (Kho đề thi): source + link, objective part and/or written problems, every item solved
    if (!meta.source) problem(file + ': đề thật cần "source:" (tên Sở/Phòng/trường/tác giả ra đề)');
    if (!meta.link || !/^https?:\/\//.test(meta.link)) problem(file + ': đề thật cần "link:" là đường dẫn trang đăng đề gốc');
    const qx = /^:::quiz[^\n]*\n([\s\S]*?)^:::[ \t]*$/m.exec(body);
    const it = qx ? require('./render.js').parseQuiz(qx[1]) : [];
    const c = (t) => it.filter((i) => i.type === t).length;
    s.quiz = c('mc') + '-' + c('tf') + '-' + c('sa');
    it.forEach((i, k) => {
      if (i.type === 'mc' && (i.opts.length !== 4 || !/^[A-D]$/.test(i.key))) problem(file + ': câu thứ ' + (k + 1) + ' (nhiều lựa chọn) cần 4 phương án và ::key A–D');
      if (i.type === 'tf' && (i.opts.length !== 4 || !/^[TF]{4}$/.test(i.key))) problem(file + ': câu thứ ' + (k + 1) + ' (đúng/sai) cần 4 ý và ::key dạng Đ S Đ S');
      if (i.type === 'sa' && (!/^-?\d+([.,]\d+)?$/.test(i.key) || i.key.length > 4)) problem(file + ': câu thứ ' + (k + 1) + ' (trả lời ngắn) có ::key "' + i.key + '" không viết được trong 4 ô');
      if (!i.expl) problem(file + ': câu thứ ' + (k + 1) + ' thiếu lời giải sau ::key');
    });
    if (!it.length && !nEx) problem(file + ': đề thật cần hộp :::quiz exam và/hoặc các hộp :::exercise');
    if (nSol !== nEx) problem(file + ': số lời giải (' + nSol + ') khác số bài tự luận (' + nEx + ')');
    exBoxes.forEach((b, k) => { if (!/^:::exercise[ \t]+\S[^\n]*\((\d+(?:[.,]\d+)?)\s*(điểm|points?)\)/.test(b)) problem(file + ': bài tự luận ' + (k + 1) + ' cần tiêu đề có số điểm, ví dụ ":::exercise Bài 1 (1,5 điểm)" / ":::exercise Problem 1 (1.5 points)"'); });
    return s;
  }
  if (meta.type === 'exam') { // practice paper: a full 12-4-6 :::quiz exam (or ≥ 10 exercises)
    const qx = /^:::quiz[^\n]*\n([\s\S]*?)^:::[ \t]*$/m.exec(body);
    if (qx) {
      const it = require('./render.js').parseQuiz(qx[1]);
      const c = (t) => it.filter((i) => i.type === t).length;
      s.quiz = c('mc') + '-' + c('tf') + '-' + c('sa');
      { const cnt = {}; it.filter((i) => i.type === 'mc').forEach((i) => { cnt[i.key] = (cnt[i.key] || 0) + 1; });
        if (Math.max(0, ...Object.values(cnt)) > 5) problem(file + ': đáp án Phần I dồn vào một chữ cái (' + JSON.stringify(cnt) + ')'); }
      if (s.quiz !== '12-4-6') problem(file + ': đề luyện cần đúng 12 câu ::mc, 4 câu ::tf, 6 câu ::sa (đang có ' + s.quiz + ')');
      it.forEach((i, k) => {
        if (i.type === 'mc' && (i.opts.length !== 4 || !/^[A-D]$/.test(i.key))) problem(file + ': câu thứ ' + (k + 1) + ' (nhiều lựa chọn) cần 4 phương án và ::key A–D');
        if (i.type === 'tf' && (i.opts.length !== 4 || !/^[TF]{4}$/.test(i.key))) problem(file + ': câu thứ ' + (k + 1) + ' (đúng/sai) cần 4 ý và ::key dạng Đ S Đ S');
        if (i.type === 'sa' && (!/^-?\d+([.,]\d+)?$/.test(i.key) || i.key.length > 4)) problem(file + ': câu thứ ' + (k + 1) + ' (trả lời ngắn) có ::key "' + i.key + '" không viết được trong 4 ô');
        if (!i.expl) problem(file + ': câu thứ ' + (k + 1) + ' thiếu lời giải sau ::key');
      });
      return s;
    }
    if (nEx < 10) problem(file + ': đề luyện chỉ có ' + nEx + ' câu (cần ≥ 10)');
    if (nSol !== nEx) problem(file + ': số lời giải (' + nSol + ') khác số câu (' + nEx + ')');
    return s;
  }
  // mini test: 3 parts like the graduation exam
  const qm = /^:::quiz[^\n]*\n([\s\S]*?)^:::[ \t]*$/m.exec(body);
  if (!qm) problem(file + ': thiếu bài kiểm tra mini (:::quiz) ở cuối bài');
  else {
    const items = require('./render.js').parseQuiz(qm[1]);
    const mc = items.filter((i) => i.type === 'mc'), tf = items.filter((i) => i.type === 'tf'), sa = items.filter((i) => i.type === 'sa');
    s.quiz = mc.length + '-' + tf.length + '-' + sa.length;
    { // the site does not shuffle options: the correct letters must vary
      const cnt = {}; mc.forEach((i) => { cnt[i.key] = (cnt[i.key] || 0) + 1; });
      const top = Math.max(0, ...Object.values(cnt));
      if (mc.length >= 4 && top > Math.ceil(mc.length / 2)) problem(file + ': đáp án trắc nghiệm dồn vào một chữ cái (' + JSON.stringify(cnt) + '); hãy đổi thứ tự phương án để đáp án đúng rải đều A–D');
    }
    if (mc.length < 4 || tf.length < 1 || sa.length < 2) problem(file + ': kiểm tra mini cần ≥ 4 câu ::mc, ≥ 1 câu ::tf, ≥ 2 câu ::sa (đang có ' + s.quiz + ')');
    mc.forEach((i, k) => { if (i.opts.length !== 4 || !/^[A-D]$/.test(i.key)) problem(file + ': kiểm tra mini, Phần I câu ' + (k + 1) + ' cần đúng 4 phương án A.–D. và ::key là một chữ A–D'); });
    tf.forEach((i, k) => { if (i.opts.length !== 4 || !/^[TF]{4}$/.test(i.key)) problem(file + ': kiểm tra mini, Phần II câu ' + (k + 1) + ' cần 4 ý a)–d) và ::key dạng "Đ S Đ S" (hoặc "T F T F")'); });
    sa.forEach((i, k) => { if (!/^-?\d+([.,]\d+)?$/.test(i.key) || i.key.length > 4) problem(file + ': kiểm tra mini, Phần III câu ' + (k + 1) + ': ::key phải là một số viết được trong 4 ô (ví dụ 12, -3, 0,25, 2,5), đang là "' + i.key + '"'); });
    items.forEach((i, k) => { if (!i.expl) problem(file + ': kiểm tra mini, câu thứ ' + (k + 1) + ' thiếu lời giải thích sau ::key'); });
  }
  if (!s.goals) problem(file + ': thiếu hộp :::goals');
  if (!s.terms) problem(file + ': thiếu hộp :::terms');
  if (s.examples < 3) problem(file + ': chỉ có ' + s.examples + ' ví dụ (cần ≥ 3)');
  if (nEx < 6) problem(file + ': chỉ có ' + nEx + ' bài tập (cần ≥ 6)');
  if (nSol !== nEx) problem(file + ': số lời giải (' + nSol + ') khác số bài tập (' + nEx + ')');
  if (s.sections < 4) problem(file + ': chỉ có ' + s.sections + ' mục ## (cần ≥ 4)');
  return s;
}

const seen = {};
args.forEach((a) => {
  // a lesson id may live in any grade folder (g10, g11, g12 ...); find it in either language
  const gradeOf = (id) => {
    for (const l of ['en', 'vi']) {
      const base = path.join(ROOT, 'content', l);
      if (!fs.existsSync(base)) continue;
      for (const g of fs.readdirSync(base).filter((d) => /^g\d+$/.test(d))) if (fs.existsSync(path.join(base, g, id + '.md'))) return g;
      const ex = path.join(base, 'exams');
      if (fs.existsSync(ex)) for (const e of fs.readdirSync(ex)) if (fs.existsSync(path.join(ex, e, id + '.md'))) return 'exams/' + e;
    }
    return 'g10';
  };
  const files = a.endsWith('.md') ? [path.resolve(a)] : ['en', 'vi'].map((l) => path.join(ROOT, 'content', l, gradeOf(a), a + '.md'));
  const found = [];
  files.forEach((f) => {
    if (!fs.existsSync(f)) { problem('không thấy file ' + path.relative(ROOT, f)); return; }
    const s = stats(f);
    if (s) found.push(s);
  });
  say(a + ': ' + found.map((s) => s.lang + ' ' + s.words + ' từ, ' + s.sections + ' mục, ' + s.examples + ' ví dụ, ' + s.exercises + ' bài tập, ' + s.figures + ' hình, ' + s.math + ' công thức').join(' | '));
  if (found.length === 2) {
    const [e, v] = found;
    ['sections', 'examples', 'exercises', 'figures', 'definitions', 'quiz'].forEach((k) => { if (e[k] !== v[k]) problem(a + ': ' + k + ' khác nhau (EN ' + e[k] + ', VI ' + v[k] + ')'); });
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
