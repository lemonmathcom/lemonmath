'use strict';

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { esc, LEVELS, parseQuiz, render } = require('./render.js');
const { mascot } = require('./art.js');
const library = require('../data/library.json');
const sources = require('./question-bank-sources.json');

const sections = { mc: 'I', tf: 'II', sa: 'III' };
const roman = { I: '1', II: '2', III: '3', IV: '4', V: '5' };
const questionBankDir = (lang) => lang === 'vi' ? 'vi/ngan-hang-cau-hoi' : 'question-bank';
const questionBankText = {
  vi: {
    title: 'Ngân hàng câu hỏi', lead: (count) => `Câu hỏi từ ${count} đề thi Toán cuối học kì 1 lớp 6–12, năm học 2025–2026.`,
    grade: 'Lớp', lesson: 'Bài học', type: 'Dạng câu', level: 'Mức độ', all: 'Tất cả',
    types: { mc: 'Trắc nghiệm', tf: 'Đúng/sai', sa: 'Trả lời ngắn', tl: 'Tự luận' },
    levels: { NB: 'Nhận biết', TH: 'Thông hiểu', VD: 'Vận dụng', VDC: 'Vận dụng cao' },
    clear: 'Xóa bộ lọc', loading: 'Đang tải câu hỏi…', error: 'Chưa tải được câu hỏi. Hãy thử lại.', retry: 'Thử lại',
    count: '{count} câu/bài', empty: 'Không có câu phù hợp với bộ lọc.', more: 'Xem thêm câu',
    source: 'Xem đề gốc', reveal: 'Xem đáp án và lời giải', answer: 'Đáp án', solution: 'Lời giải',
    noScript: 'Bật JavaScript để dùng bộ lọc câu hỏi.', library: 'Mở đề thi trong Thư viện'
  },
  en: {
    title: 'Question bank', lead: (count) => `Vietnamese questions from ${count} end-of-term maths papers for grades 6–12, 2025–2026.`,
    grade: 'Grade', lesson: 'Lesson', type: 'Question type', level: 'Difficulty', all: 'All',
    types: { mc: 'Multiple choice', tf: 'True or false', sa: 'Short answer', tl: 'Written response' },
    levels: { NB: 'Recall', TH: 'Understanding', VD: 'Application', VDC: 'Advanced application' },
    clear: 'Clear filters', loading: 'Loading questions…', error: 'The questions could not load. Try again.', retry: 'Try again',
    count: '{count} questions', empty: 'No questions match these filters.', more: 'Show more questions',
    source: 'Original paper', reveal: 'Show answer and solution', answer: 'Answer', solution: 'Solution',
    noScript: 'Enable JavaScript to filter questions.', library: 'Browse the exam papers in the library'
  }
};

function essayNumber(label) {
  const match = /^(?:Bài|Câu)\s+(\d+|[IVX]+)(?:\.(\d+))?/.exec(label);
  if (!match) return '';
  return [roman[match[1]] || match[1], match[2]].filter(Boolean).join('.');
}

const tex = { renderToString: (value, options) => '<span class="tex"' + (options.displayMode ? ' data-d="1"' : '') + '>' + esc(value) + '</span>' };

function markup(value, code) {
  const html = render(value, { marked, katex: tex, lang: 'vi', paper: true,
    warn: (message) => { throw new Error(code + ' ' + message); }
  }).html.replace(/src="hinh\/([^"]+)"/g, (_, file) => {
    if (!/^[a-zA-Z0-9-]+\.(png|jpe?g|webp)$/.test(file)) throw new Error(`Tên hình không hợp lệ ${code}/${file}`);
    return `src="/d/assets/hinh/${code}/${file}"`;
  });
  if (/<(?:script|style|iframe|object|embed|link|meta|form|base)\b|<[^>]*\son[a-z]+\s*=|(?:href|src)\s*=\s*["']\s*(?:javascript|data):/i.test(html)) {
    throw new Error('Nội dung HTML cần kiểm tra trong ' + code);
  }
  return html;
}

function parseLabels(source) {
  const labels = new Map();
  for (const line of source.labels.trim().split('\n')) {
    const [marker, lesson, skill, rawLevels, extra] = line.split(' | ');
    const levels = rawLevels?.split(/\s+/);
    if (extra !== undefined || !marker || !lesson || !skill || !levels?.every((level) => LEVELS.includes(level)) || labels.has(marker)) {
      throw new Error(`Nhãn câu hỏi không hợp lệ ${source.code}/${line}`);
    }
    labels.set(marker, { marker, lesson, skill, levels });
  }
  return labels;
}

function paperQuestions(source, paper) {
  const { code } = source;
  const labels = parseLabels(source);
  const blocks = [...source.body.matchAll(/^:::(quiz|exercise)[ \t]*([^\n]*)\n([\s\S]*?)^:::[ \t]*$/gm)];
  const quiz = blocks.filter((block) => block[1] === 'quiz').flatMap((block) => parseQuiz(block[3]));
  const essays = blocks.filter((block) => block[1] === 'exercise');
  const questions = [];
  for (const [type, section] of Object.entries(sections)) {
    const items = quiz.filter((item) => item.type === type);
    const numbers = source.numbering?.[type] || items.map((_, index) => index + 1);
    if (numbers.length !== items.length) throw new Error(`Sai số câu in ${code}/${section}`);
    const printedMarkers = numbers.map((number) => `${section}.${number}`);
    const usesPrintedNumbers = printedMarkers.every((marker) => labels.has(marker));
    for (const [index, item] of items.entries()) {
      const marker = usesPrintedNumbers ? printedMarkers[index] : `${section}.${index + 1}`;
      const label = labels.get(marker);
      const number = numbers[index];
      if (!label || !item.q || !item.key || !item.expl || (type !== 'sa' && item.opts.length !== 4) ||
          !/^\d+[a-z]?$/.test(number) || (type === 'mc' && !/^[A-D]$/.test(item.key)) ||
          (type === 'tf' && !/^[TF]{4}$/.test(item.key))) {
        throw new Error(`Thiếu nội dung hoặc nhãn ${code}/${marker}`);
      }
      const answer = type === 'tf' ? [...item.key].map((value, i) => 'abcd'[i] + ') ' + (value === 'T' ? 'Đúng' : 'Sai')).join(' · ') : item.key;
      questions.push({ code, grade: paper.lop, type, title: `Câu ${number} · Phần ${section}`,
        anchor: `cau-${section.toLowerCase()}-${number}`, tags: [label], prompt: markup(item.q, code),
        options: item.opts.map((option) => markup(option, code)), answers: [answer], explanation: markup(item.expl, code) });
      labels.delete(marker);
    }
  }

  const groups = new Map(essays.map((block) => [essayNumber(block[2].trim()), { tags: [], answers: [] }]));
  if (groups.has('') || groups.size !== essays.length) throw new Error('Trùng hoặc thiếu tên bài tự luận trong ' + code);
  const findGroup = (marker) => {
    const key = essayNumber(marker);
    const group = groups.get(key) || groups.get(key.split('.')[0]);
    if (!group) throw new Error(`Không tìm thấy bài tự luận ${code}/${marker}`);
    return group;
  };
  for (const label of labels.values()) findGroup(label.marker).tags.push(label);
  for (const value of (source.writtenAnswers || '').split('\n').map((line) => line.trim()).filter(Boolean)) {
    findGroup(value).answers.push(value);
  }
  for (const [index, block] of essays.entries()) {
    const title = block[2].trim();
    const { tags, answers } = findGroup(title);
    const pieces = block[3].split(/^::(hint|solution)[ \t]*$/m);
    const solution = pieces.indexOf('solution');
    if (!tags.length || !answers.length || !pieces[0].trim() || solution < 0 || !pieces[solution + 1]?.trim()) {
      throw new Error(`Thiếu đề bài, đáp số hoặc lời giải ${code}/${title}`);
    }
    questions.push({ code, grade: paper.lop, type: 'tl', title, anchor: `tu-luan-${index + 1}`, tags,
      prompt: markup(pieces[0], code), options: [], answers, explanation: markup(pieces[solution + 1], code) });
  }
  return questions;
}

function buildQuestionBank(grades) {
  const papers = Object.fromEntries(library.filter((row) => row.loai === 'de-thi').map((paper) => [paper.ma, paper]));
  const codes = new Set(sources.map((source) => source.code));
  if (sources.length !== codes.size || codes.size !== Object.keys(papers).length ||
      [...codes].some((code) => !/^[a-z2-7]{6}$/.test(code) || !Object.hasOwn(papers, code))) {
    throw new Error('Các đề trong Ngân hàng câu hỏi chưa khớp Thư viện');
  }
  const publishedLessons = new Map();
  for (const grade of grades) {
    for (const chapter of grade.chapters) {
      for (const lesson of chapter.lessons) {
        publishedLessons.set(`g${grade.n}/${lesson.id}`, { title: { vi: lesson.vi, en: lesson.en },
          links: { vi: `/vi/lop-${grade.n}/${chapter.id}/${lesson.id}/`, en: `/grade-${grade.n}/${chapter.id}/${lesson.id}/` } });
      }
    }
  }
  const questions = sources.flatMap((source) => paperQuestions(source, papers[source.code]));
  const lessons = {};
  for (const question of questions) {
    for (const tag of question.tags) {
      const lesson = publishedLessons.get(tag.lesson);
      if (!lesson) throw new Error(`Mã bài học chưa xuất bản ${question.code}/${tag.lesson}`);
      lessons[tag.lesson] = lesson;
    }
  }
  return { papers: Object.fromEntries(Object.entries(papers).map(([code, paper]) => [code, paper.tieu_de])), questions, lessons };
}

function writeQuestionBank(out, grades) {
  const bank = buildQuestionBank(grades);
  const assets = path.join(out, 'assets');
  fs.writeFileSync(path.join(assets, 'question-bank-data.json'), JSON.stringify(bank));
  fs.copyFileSync(path.join(__dirname, 'question-bank-client.js'), path.join(assets, 'question-bank.js'));
  fs.copyFileSync(path.join(__dirname, 'question-bank.css'), path.join(assets, 'question-bank.css'));
  return bank;
}

function renderQuestionBank(lang, bank, dataUrl, libraryUrl) {
  const T = questionBankText[lang];
  const grades = [...new Set(bank.questions.map((row) => row.grade))].sort((a, b) => a - b);
  const option = (value, title) => `<option value="${esc(value)}">${esc(title)}</option>`;
  const options = (values) => option('', T.all) + values.map(([value, text]) => option(value, text)).join('');
  return `<header class="gradehead"><div><h1>${esc(T.title)}</h1><p class="lead">${esc(T.lead(Object.keys(bank.papers).length))}</p></div>
  ${mascot({ cls: 'grade-mascot', mood: 'happy' })}</header>
  <noscript><p class="soon-note">${esc(T.noScript)} <a href="${esc(libraryUrl)}">${esc(T.library)}</a></p></noscript>
  <section class="qb" data-question-bank="${esc(dataUrl)}" data-text="${esc(JSON.stringify(T))}">
    <form class="qb-filters tool" hidden>
      <label>${esc(T.grade)} <select name="lop" aria-controls="qb-results">${options(grades.map((n) => [n, `${T.grade} ${n}`]))}</select></label>
      <label class="qb-lesson">${esc(T.lesson)} <select name="bai" aria-controls="qb-results">${option('', T.all)}</select></label>
      <label>${esc(T.type)} <select name="dang" aria-controls="qb-results">${options(Object.entries(T.types))}</select></label>
      <label>${esc(T.level)} <select name="muc" aria-controls="qb-results">${options(Object.entries(T.levels))}</select></label>
      <button class="btn btn-ghost" type="button" data-qb-clear>${esc(T.clear)}</button>
    </form>
    <p class="qb-status" role="status" data-qb-status hidden></p>
    <button class="btn btn-ghost" type="button" data-qb-retry hidden>${esc(T.retry)}</button>
    <div id="qb-results"></div>
    <button class="btn btn-ghost qb-more" type="button" data-qb-more aria-controls="qb-results" hidden>${esc(T.more)}</button>
  </section>`;
}

module.exports = { questionBankDir, questionBankText, buildQuestionBank, writeQuestionBank, renderQuestionBank };
