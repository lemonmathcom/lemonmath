'use strict';

(() => {
  const root = document.querySelector('[data-question-bank]');
  if (!root) return;
  const T = JSON.parse(root.dataset.text);
  const lang = document.documentElement.lang === 'vi' ? 'vi' : 'en';
  const form = root.querySelector('.qb-filters');
  const grade = form.elements.lop;
  const lesson = form.elements.bai;
  const type = form.elements.dang;
  const level = form.elements.muc;
  const fields = [grade, lesson, type, level];
  const clear = root.querySelector('[data-qb-clear]');
  const status = root.querySelector('[data-qb-status]');
  const results = root.querySelector('#qb-results');
  const more = root.querySelector('[data-qb-more]');
  const retry = root.querySelector('[data-qb-retry]');
  const pageSize = 20;
  let bank, matching, shown;

  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function drawMath(scope) {
    if (!window.katex) return;
    for (const tex of scope.querySelectorAll('.tex')) {
      if (tex.closest('details:not([open])')) continue;
      window.katex.render(tex.textContent, tex, { displayMode: tex.hasAttribute('data-d'), throwOnError: false, strict: 'ignore', trust: false });
      tex.classList.remove('tex');
    }
  }

  function card(question, tags) {
    const { code, grade, type, title, anchor, prompt, options, answers, answerHtml, explanation, sourceHref, sourceKind } = question;
    const headingId = `${code}-${anchor}`;
    const choiceLabels = type === 'tf' ? ['a)', 'b)', 'c)', 'd)'] : ['A.', 'B.', 'C.', 'D.'];
    const optionList = options.map((option, i) => `<li><b>${choiceLabels[i]}</b><div>${option}</div></li>`).join('');
    const classification = tags.map(({ marker, lesson, skill, levels }) => {
      const item = bank.lessons[lesson];
      const labels = [...new Set(levels)].map((key) => `<abbr title="${esc(T.levels[key])}">${key}</abbr>`).join(' ');
      return `<li><a href="${esc(item.links[lang])}">${esc(item.title[lang])}</a> ${labels}
        <span lang="vi">${esc(marker)} · ${esc(skill)}</span></li>`;
    }).join('');
    const sourceUrl = sourceHref || `/d/${code}#${anchor}`;
    const sourceLabel = sourceKind === 'worksheet' && T.sourceWorksheet
      ? T.sourceWorksheet
      : (sourceHref && T.sourceDocument) || T.source;
    const answer = answerHtml || (answers.length > 1
      ? `<ul lang="vi">${answers.map((value) => `<li>${esc(value)}</li>`).join('')}</ul>`
      : `<p lang="vi">${esc(answers[0])}</p>`);
    const article = document.createElement('article');
    article.className = 'card qb-card';
    article.setAttribute('aria-labelledby', headingId);
    article.dataset.question = headingId;
    article.innerHTML = `<div class="qb-meta"><span>${esc(T.grade)} ${grade}</span><span>${esc(T.types[type])}</span></div>
      <h2 id="${headingId}" lang="vi">${esc(title)}</h2>
      <div class="qb-prompt prose" lang="vi">${prompt}${optionList ? `<ul class="qb-options">${optionList}</ul>` : ''}</div>
      <ul class="qb-tags" aria-label="${esc(T.lesson)}">${classification}</ul>
      <details class="qb-solution"><summary>${esc(T.reveal)}</summary>
        <div class="qb-worked prose"><h3>${esc(T.answer)}</h3>
          <div lang="vi">${answer}</div>
          <h3>${esc(T.solution)}</h3><div lang="vi">${explanation}</div></div>
      </details>
      <p class="qb-source"><a href="${esc(sourceUrl)}">${esc(sourceLabel)}</a><span lang="vi">${esc(bank.papers[code])}</span></p>`;
    return article;
  }

  function addPage() {
    const page = document.createDocumentFragment();
    for (const { question, tags } of matching.slice(shown, shown + pageSize)) page.append(card(question, tags));
    shown += page.childElementCount;
    drawMath(page);
    results.append(page);
    more.hidden = shown >= matching.length;
  }

  function listQuestions() {
    matching = [];
    for (const question of bank.questions) {
      if ((grade.value && String(question.grade) !== grade.value) || (type.value && question.type !== type.value)) continue;
      const tags = question.tags.filter((tag) => (!lesson.value || tag.lesson === lesson.value) &&
        (!level.value || tag.levels.includes(level.value)));
      if (tags.length) matching.push({ question, tags });
    }
    shown = 0;
    results.replaceChildren();
    status.textContent = matching.length ? T.count.replace('{count}', matching.length) : T.empty;
    clear.disabled = !fields.some((field) => field.value);
    addPage();
  }

  function selectValue(field, value) {
    field.value = value || '';
    if (field.selectedIndex < 0) field.value = '';
  }

  function setLessonOptions(value) {
    const keys = new Set();
    for (const question of bank.questions) {
      if (!grade.value || String(question.grade) === grade.value) {
        for (const tag of question.tags) keys.add(tag.lesson);
      }
    }
    const items = [...keys].map((key) => [key, bank.lessons[key].title[lang]]);
    items.sort((a, b) => a[1].localeCompare(b[1], lang));
    lesson.replaceChildren(new Option(T.all, ''), ...items.map(([key, title]) => new Option(title, key)));
    selectValue(lesson, value);
  }

  function readFilters() {
    const query = new URLSearchParams(location.search);
    for (const field of [grade, type, level]) selectValue(field, query.get(field.name));
    setLessonOptions(query.get(lesson.name));
    listQuestions();
  }

  function updateFilters() {
    const url = new URL(location.href);
    for (const field of fields) {
      if (field.value) url.searchParams.set(field.name, field.value);
      else url.searchParams.delete(field.name);
    }
    history.replaceState(history.state, '', url);
    listQuestions();
  }

  async function loadBank() {
    retry.hidden = true;
    status.hidden = false;
    status.textContent = T.loading;
    try {
      const response = await fetch(root.dataset.questionBank);
      if (!response.ok) throw new Error(response.status);
      bank = await response.json();
    } catch {
      status.textContent = T.error;
      retry.hidden = false;
      return;
    }
    readFilters();
    form.hidden = false;
  }

  form.addEventListener('change', (event) => {
    if (event.target === grade) setLessonOptions(lesson.value);
    updateFilters();
  });
  clear.addEventListener('click', () => {
    form.reset();
    setLessonOptions('');
    updateFilters();
    grade.focus();
  });
  more.addEventListener('click', addPage);
  retry.addEventListener('click', loadBank);
  window.addEventListener('popstate', () => { if (bank) readFilters(); });
  results.addEventListener('toggle', (event) => {
    if (event.target.open && event.target.classList.contains('qb-solution')) drawMath(event.target);
  }, true);
  loadBank();
})();
