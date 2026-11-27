'use strict';

const { esc } = require('./render.js');
const { mascot } = require('./art.js');
const documents = require('../data/library.json');

const PDF_ORIGIN = 'https://tai-lieu.lemonmath.com';
const libraryDir = (lang) => lang === 'vi' ? 'vi/tai-lieu' : 'resources';
const lookupUrl = (code) => '/d/' + code;
const libraryText = {
  en: {
    nav: 'Library', title: 'Maths resource library',
    lead: 'Vietnamese exam papers, revision guides and practice worksheets for grades 6–12.',
    filters: 'Filter the library', grade: 'Grade', gradeName: (n) => 'Grade ' + n,
    allGrades: 'All grades', type: 'Resource type', allTypes: 'All types', clear: 'Clear filters',
    count: (shown, total) => `${shown} of ${total} resources`,
    empty: 'No resources match these filters.', pdf: 'Download PDF', solutions: 'Answers and solutions',
    practiceSolutions: 'Solutions for the related worksheet',
    types: { 'de-thi': 'Exam papers', 'de-cuong': 'Revision guides', 'phieu-on-tap': 'Worksheets' }
  },
  vi: {
    nav: 'Thư viện', title: 'Thư viện tài liệu Toán',
    lead: 'Đề thi, đề cương và phiếu ôn tập cuối học kì 1 cho lớp 6–12.',
    filters: 'Lọc tài liệu', grade: 'Lớp', gradeName: (n) => 'Lớp ' + n,
    allGrades: 'Tất cả', type: 'Loại tài liệu', allTypes: 'Tất cả', clear: 'Xóa bộ lọc',
    count: (shown, total) => `${shown} trên ${total} tài liệu`,
    empty: 'Không có tài liệu phù hợp với bộ lọc.', pdf: 'Tải PDF', solutions: 'Xem đáp án và lời giải',
    practiceSolutions: 'Xem lời giải phiếu ôn tập',
    types: { 'de-thi': 'Đề thi', 'de-cuong': 'Đề cương', 'phieu-on-tap': 'Phiếu ôn tập' }
  }
};

const grades = [...new Set(documents.map((row) => row.lop))].sort((a, b) => a - b);
const types = [...new Set(documents.map((row) => row.loai))];
const documentsByCode = new Map(documents.map((row) => [row.ma, row]));

if (documentsByCode.size !== documents.length) throw new Error('data/library.json contains duplicate document codes');
for (const row of documents) {
  if (!/^[a-z2-7]{6}$/.test(row.ma) || !Object.hasOwn(libraryText.vi.types, row.loai) ||
      !/^(kho-de-thi|tai-lieu)\/[A-Za-z0-9_/-]+\.pdf$/.test(row.tep_pdf)) {
    throw new Error('Invalid library entry in data/library.json: ' + row.ma);
  }
  if (row.loai === 'de-cuong') {
    const related = documentsByCode.get(row.phieu_on_cung_lop);
    if (related?.loai !== 'phieu-on-tap' || related.lop !== row.lop) {
      throw new Error('Revision guide has no matching worksheet: ' + row.ma);
    }
  }
}

function libraryCard(row, lang) {
  const T = libraryText[lang];
  const titleId = 'library-' + row.ma;
  const lookup = lookupUrl(row.ma);
  const related = row.loai === 'de-cuong';
  const solutions = related ? lookupUrl(row.phieu_on_cung_lop) + '#loi-giai' : lookup;
  const pdf = PDF_ORIGIN + '/' + row.tep_pdf + '?download=1';

  return `<article class="card library-card" data-library-grade="${esc(row.lop)}" data-library-type="${esc(row.loai)}" aria-labelledby="${titleId}">
    <p class="library-meta"><span>${esc(T.gradeName(row.lop))}</span><span>${esc(T.types[row.loai])}</span></p>
    <h2 id="${titleId}" lang="vi"><a href="${lookup}">${esc(row.tieu_de)}</a></h2>
    <div class="library-actions">
      <a class="btn" href="${esc(pdf)}" download aria-describedby="${titleId}">${esc(T.pdf)}</a>
      <a class="btn btn-ghost" href="${solutions}" aria-describedby="${titleId}">${esc(related ? T.practiceSolutions : T.solutions)}</a>
    </div>
  </article>`;
}

const option = (value, label) => `<option value="${esc(value)}">${esc(label)}</option>`;

function renderLibrary(lang, bankUrl, bankTitle) {
  const T = libraryText[lang];
  return `<header class="gradehead library-head"><div><h1>${esc(T.title)}</h1><p class="lead">${esc(T.lead)}</p>
    <p class="hero-actions"><a class="btn btn-ghost" href="${esc(bankUrl)}">${esc(bankTitle)}</a></p></div>
    ${mascot({ cls: 'grade-mascot', mood: 'happy' })}</header>
  <form class="library-filters" aria-label="${esc(T.filters)}" data-library-filters hidden>
    <label>${esc(T.grade)} <select name="lop" aria-controls="library-results">
      ${option('', T.allGrades)}${grades.map((n) => option(n, T.gradeName(n))).join('')}
    </select></label>
    <label>${esc(T.type)} <select name="loai" aria-controls="library-results">
      ${option('', T.allTypes)}${types.map((type) => option(type, T.types[type])).join('')}
    </select></label>
    <button class="btn btn-ghost" type="button" data-library-clear>${esc(T.clear)}</button>
  </form>
  <p class="library-count" role="status" data-library-count="${esc(T.count('{shown}', documents.length))}">${esc(T.count(documents.length, documents.length))}</p>
  <p class="library-empty" data-library-empty hidden>${esc(T.empty)}</p>
  <div class="cards library-grid" id="library-results">
    ${documents.map((row) => libraryCard(row, lang)).join('\n')}
  </div>`;
}

module.exports = { libraryDir, libraryText, renderLibrary };
