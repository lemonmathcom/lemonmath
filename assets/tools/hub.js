/* Lemonmath · LemonMath Tools hub (/tools/, vi: /vi/tien-ich/): search, one-category filter, favourites and
 * recently used tools. The cards themselves are written by tools/build.js from data/tools.json; this only shows,
 * hides and copies them. Favourites and the recent list live in this browser (core.js). */
(function () {
  'use strict';
  var L = window.LMT;
  if (!L) return;
  var $ = L.$, $$ = L.$$;
  var all = $('#tl-all'), q = $('#tl-q'), chips = $('.tl-chips'), none = $('#tl-none');
  if (!all) return;
  var cat = '';

  function cards() { return $$('.tl-card', all); }
  function byId(id) { return cards().filter(function (c) { return c.getAttribute('data-id') === id; })[0]; }

  /* favourites and recently used: copies of the cards, in the order the visitor made them */
  function fillCopies(sec, ids) {
    var grid = $('.tl-grid', sec), list = ids.map(byId).filter(Boolean);
    grid.innerHTML = '';
    list.forEach(function (c) { grid.appendChild(c.cloneNode(true)); });
    sec.hidden = !list.length || searching();
  }
  function copies() {
    fillCopies($('#tl-favs'), L.favs());
    var favs = L.favs();
    fillCopies($('#tl-recent'), L.recent().filter(function (id) { return favs.indexOf(id) < 0; }).slice(0, 4));
    L.syncStars();
  }

  function searching() { return !!((q && q.value.trim()) || cat); }
  function apply() {
    var words = L.norm(q ? q.value : '').split(' ').filter(Boolean), shown = 0;
    cards().forEach(function (c) {
      var kw = L.norm(c.getAttribute('data-kw') || '');
      var ok = (!cat || c.getAttribute('data-cat') === cat) && words.every(function (w) { return kw.indexOf(w) >= 0; });
      c.hidden = !ok;
      if (ok) shown++;
    });
    $$('.tl-catsec', all).forEach(function (s) { s.hidden = !$$('.tl-card', s).some(function (c) { return !c.hidden; }); });
    none.hidden = shown > 0;
    $('#tl-favs').hidden = searching() || !$$('.tl-card', $('#tl-favs')).length;
    $('#tl-recent').hidden = searching() || !$$('.tl-card', $('#tl-recent')).length;
  }

  if (q) {
    $('.tl-find').hidden = false;
    q.addEventListener('input', apply);
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { q.value = ''; apply(); }
      if (e.key === 'Enter') { var first = cards().filter(function (c) { return !c.hidden; })[0]; if (first) { e.preventDefault(); $('h3 a', first).click(); } }
    });
  }
  if (chips) {
    chips.hidden = false;
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.tl-chip');
      if (!b) return;
      cat = b.getAttribute('data-cat') || '';
      $$('.tl-chip', chips).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      apply();
    });
  }
  document.addEventListener('lmt-fav', copies);
  copies();
  apply();
})();
