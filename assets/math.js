/*
 * Lemonmath: draws the formulas the build left as TeX (26/11/2026, see tools/slim-math.js).
 *
 * The first formulas of a page come already drawn; the rest arrive as <span class="lm-m">TeX</span>
 * (display formulas: "lm-m lm-d"). This script, loaded after katex.min.js, replaces each one with
 * exactly what the build would have drawn (same KaTeX version, same options, same HTML):
 *   1. formulas near the screen first (IntersectionObserver, 1500 px ahead), so reading never waits;
 *   2. then all the others in the background, in short slices when the browser is idle;
 *   3. everything at once before printing (print buttons call lmPrint() -> lmMathAll(); Ctrl+P -> 'beforeprint'),
 *      and everything above a target before jumping to an anchor (table of contents, #links).
 * Drawing a formula above the screen changes the height of the page, so the page is scrolled back by the same
 * amount: what the reader is looking at never moves.
 */
(function () {
  'use strict';
  var d = document;
  var todo = [].slice.call(d.querySelectorAll('.lm-m'));
  if (!todo.length || !window.katex) return;

  var io = null, fitT = 0;

  function fitLater() { // the site's layout pass for wide formulas and answer options (assets/site.js), at most once a second
    if (!window.lmFitMath || fitT) return;
    fitT = setTimeout(function () { fitT = 0; steady(null, window.lmFitMath); }, 1000);
  }
  /* the same call and options as the build (tools/render.js), so the page ends up with exactly the HTML it would have had */
  function draw(el) {
    if (!el.parentNode) return false; // already drawn
    if (io) io.unobserve(el);
    var html;
    try {
      html = window.katex.renderToString(el.textContent, { displayMode: el.classList.contains('lm-d'), throwOnError: false, strict: 'ignore', trust: false, output: 'htmlAndMathml' });
    } catch (e) { return false; }
    el.outerHTML = html;
    return true;
  }
  /* Runs fn (which draws some of `list`, or changes anything when list is null) and keeps what is on screen still. */
  function steady(list, fn) {
    var ref = d.elementFromPoint(Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
    var own = ref && ref.closest && ref.closest('.lm-m');
    if (own) ref = own.parentNode; // the placeholder itself is about to be replaced
    // only formulas that come before the reference point in the page can push it down
    if (!ref || (list && !list.some(function (el) { return el.parentNode && (el.compareDocumentPosition(ref) & 4); }))) { fn(); return; }
    var y0 = ref.getBoundingClientRect().top;
    fn();
    if (!ref.isConnected) return;
    var dy = ref.getBoundingClientRect().top - y0;
    if (Math.abs(dy) > 0.5) { // jump, not glide: the site scrolls smoothly (style.css), which would lag behind
      var st = d.documentElement.style, sb = st.scrollBehavior;
      st.scrollBehavior = 'auto';
      window.scrollBy(0, dy);
      st.scrollBehavior = sb;
    }
  }

  /* everything (printing) */
  function all() {
    var n = 0;
    todo.forEach(function (el) { if (draw(el)) n++; });
    todo = [];
    if (io) io.disconnect();
    if (n && window.lmFitMath) window.lmFitMath();
  }
  window.lmMathAll = all;
  window.addEventListener('beforeprint', all);
  // a formula drawn now may use a KaTeX font the page had not needed yet: lay out again once it has loaded
  if (d.fonts && d.fonts.addEventListener) d.fonts.addEventListener('loadingdone', fitLater);

  /* everything before an element, so a jump lands in the right place */
  function upTo(target) {
    if (!target) return;
    var n = 0;
    todo.forEach(function (el) {
      if (el.parentNode && (el.compareDocumentPosition(target) & 4) && draw(el)) n++; // 4 = target comes after el
    });
    if (n) fitLater();
  }
  function targetOf(hash) {
    if (!hash || hash.length < 2) return null;
    try { return d.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) { return null; }
  }
  d.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) upTo(targetOf(a.getAttribute('href')));
  }, true);
  window.addEventListener('hashchange', function () {
    var t = targetOf(location.hash);
    if (t) { upTo(t); t.scrollIntoView(); }
  });
  if (location.hash) {
    var t0 = targetOf(location.hash);
    if (t0) { upTo(t0); t0.scrollIntoView(); }
  }

  /* 1. near the screen */
  if (!('IntersectionObserver' in window)) { all(); return; }
  io = new IntersectionObserver(function (entries) {
    var near = entries.filter(function (x) { return x.isIntersecting; }).map(function (x) { return x.target; });
    if (!near.length) return;
    var n = 0;
    steady(near, function () { near.forEach(function (el) { if (draw(el)) n++; }); });
    if (n) fitLater();
  }, { rootMargin: '1500px 0px' });
  todo.forEach(function (el) { io.observe(el); });

  /* 2. the rest, in slices of about 40 ms when the browser is idle; the layout pass runs once at the end */
  var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 30); }; // Safari has no requestIdleCallback
  function slice() {
    var t = Date.now();
    while (todo.length && !todo[0].parentNode) todo.shift();
    steady(todo.slice(0, 80), function () {
      var n = 0;
      while (todo.length && n < 80 && Date.now() - t < 40) { draw(todo.shift()); n++; }
    });
    if (todo.length) { idle(slice, { timeout: 200 }); return; }
    if (io) io.disconnect();
    if (window.lmFitMath) steady(null, window.lmFitMath);
  }
  window.addEventListener('load', function () { idle(slice, { timeout: 200 }); });
})();
