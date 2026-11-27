'use strict';

(() => {
  const filters = document.querySelector('[data-library-filters]');
  if (!filters) return;
  const grade = filters.elements.lop;
  const type = filters.elements.loai;
  const clear = filters.querySelector('[data-library-clear]');
  const cards = document.querySelectorAll('[data-library-grade]');
  const count = document.querySelector('[data-library-count]');
  const empty = document.querySelector('[data-library-empty]');

  function render() {
    let shown = 0;
    for (const card of cards) {
      const visible = (!grade.value || card.dataset.libraryGrade === grade.value) &&
        (!type.value || card.dataset.libraryType === type.value);
      card.hidden = !visible;
      if (visible) shown += 1;
    }
    count.textContent = count.dataset.libraryCount.replace('{shown}', shown);
    empty.hidden = shown > 0;
    clear.disabled = !grade.value && !type.value;
  }

  function readFilters() {
    const search = new URLSearchParams(location.search);
    for (const select of [grade, type]) {
      select.value = search.get(select.name) || '';
      if (select.selectedIndex === -1) select.value = '';
    }
    render();
  }

  function updateFilters() {
    const url = new URL(location.href);
    for (const select of [grade, type]) {
      if (select.value) url.searchParams.set(select.name, select.value);
      else url.searchParams.delete(select.name);
    }
    history.replaceState(history.state, '', url);
    render();
  }

  filters.addEventListener('change', updateFilters);
  clear.addEventListener('click', () => {
    grade.value = type.value = '';
    updateFilters();
    grade.focus();
  });
  window.addEventListener('popstate', readFilters);
  readFilters();
  filters.hidden = false;
})();
