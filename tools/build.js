#!/usr/bin/env node
'use strict';

/*
 * Lemonmath site builder.
 *
 * Reads curriculum.json and the Markdown lessons in content/, and writes a
 * ready-to-publish website into dist/:
 *
 *   /                    home page
 *   /chapters/<id>/      chapter pages
 *   /lessons/<id>/       lesson pages (formulas already drawn: readable without JavaScript)
 *   /<page-id>/          optional extra pages (about, ...), listed in "pages"
 *   sitemap.xml, robots.txt, 404.html, assets/
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const katex = require('katex');
const { marked } = require('marked');
const { render, esc } = require('./render.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, process.env.OUT_DIR || 'dist');
const px = path.posix;

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

// Page-to-page and page-to-file links are RELATIVE, so the site works at any
// address (the temporary github.io address and lemonmath.com alike).
const relDir = (from, to) => {
  const r = px.relative(from || '.', to || '.');
  return r ? r + '/' : './';
};
const relFile = (from, file) => px.relative(from || '.', file);

function clip(s, n) {
  n = n || 155;
  if (s.length <= n) return s;
  return s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
}

function firstParagraph(md) {
  const parts = md.replace(/<!--[\s\S]*?-->/g, '').split(/\n{2,}/);
  for (const part of parts) {
    const t = part.trim();
    if (!t || /^(#|:::|\||```|~~~|[-*]\s|\d+\.\s)/.test(t)) continue;
    return t
      .replace(/\$([^$]+)\$/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ');
  }
  return '';
}

// Date of the last Git commit that touched a file (null when Git history is not available).
function gitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore']
    }).toString().trim();
    return out || null;
  } catch (e) {
    return null;
  }
}

function isoDay(iso) {
  if (!iso) return '';
  const t = new Date(iso);
  return isNaN(t) ? '' : t.toISOString().slice(0, 10);
}

function humanDay(day) {
  return new Date(day + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });
}

const maxDay = (days) => days.filter(Boolean).sort().pop() || '';

const ldTag = (obj) =>
  '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';

const crumbLD = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name, item: it.url
  }))
});

/* ------------------------------------------------------------------ */
/* Read and check curriculum.json                                      */
/* ------------------------------------------------------------------ */

function readConfig() {
  const file = path.join(ROOT, 'curriculum.json');
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.error('LỖI: không đọc được curriculum.json: ' + e.message);
    console.error('Thường do thiếu hoặc thừa dấu phẩy, hoặc thiếu ngoặc trong file.');
    process.exit(1);
  }
}

const cfg = readConfig();
const site = Object.assign(
  { name: 'Lemonmath', url: '', lang: 'en', headline: '', tagline: '', description: '', image: '' },
  cfg.site || {}
);
site.url = String(site.url || '').replace(/\/+$/, '');
if (!/^https:\/\/[^\s/]+$/.test(site.url)) {
  fail('curriculum.json: "url" trong mục "site" phải có dạng "https://lemonmath.com" (không có dấu / ở cuối).');
}
if (!site.description) site.description = site.tagline;

const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RESERVED = ['assets', 'lessons', 'chapters', '404', 'sitemap', 'robots', 'index'];

const chapters = Array.isArray(cfg.chapters) ? cfg.chapters : [];
const pages = Array.isArray(cfg.pages) ? cfg.pages : [];
const lessons = [];
const byLesson = {};
const byChapter = {};
const byPage = {};

const lessonDir = (ls) => 'lessons/' + ls.id;
const chapterDir = (ch) => 'chapters/' + ch.id;
const pageDir = (p) => p.id;
const abs = (dir) => site.url + '/' + (dir ? dir + '/' : '');

function indexConfig() {
  chapters.forEach((ch, ci) => {
    if (!ch || !ch.id || !ID_RE.test(ch.id)) {
      fail('chương số ' + (ci + 1) + ': "id" phải gồm chữ thường không dấu, số và dấu gạch ngang (ví dụ "quadratics").');
      return;
    }
    if (byChapter[ch.id]) fail('trùng id chương "' + ch.id + '".');
    if (!ch.title) fail('chương "' + ch.id + '" thiếu "title".');
    if (!ch.summary) warn('chương "' + ch.id + '" chưa có "summary" (dùng làm mô tả cho Google).');
    else if (ch.summary.length > 160) warn('chương "' + ch.id + '": "summary" dài ' + ch.summary.length + ' ký tự (nên ≤ 160).');
    ch.number = ci + 1;
    ch.lessons = Array.isArray(ch.lessons) ? ch.lessons : [];
    byChapter[ch.id] = ch;
    ch.lessons.forEach((ls, li) => {
      if (!ls || !ls.id || !ID_RE.test(ls.id)) {
        fail('chương "' + ch.id + '", bài số ' + (li + 1) + ': "id" phải gồm chữ thường không dấu, số và dấu gạch ngang (ví dụ "law-of-sines").');
        return;
      }
      if (byLesson[ls.id]) fail('trùng id bài "' + ls.id + '".');
      if (!ls.title) fail('bài "' + ls.id + '" thiếu "title".');
      ls.number = (ci + 1) + '.' + (li + 1);
      ls.chapter = ch;
      byLesson[ls.id] = ls;
      lessons.push(ls);
    });
  });

  pages.forEach((p, i) => {
    if (!p || !p.id || !ID_RE.test(p.id)) { fail('"pages", mục số ' + (i + 1) + ': "id" không hợp lệ.'); return; }
    if (RESERVED.indexOf(p.id) !== -1) fail('"pages": id "' + p.id + '" là tên dành riêng, hãy đặt tên khác.');
    if (byPage[p.id]) fail('trùng id trang "' + p.id + '".');
    if (!p.title) fail('trang "' + p.id + '" thiếu "title".');
    byPage[p.id] = p;
  });

  if (!lessons.length) fail('chưa có bài học nào trong curriculum.json.');
}

function loadContent(item, label) {
  const rel = item.file || '';
  const file = path.join(ROOT, rel);
  if (!rel || !fs.existsSync(file)) {
    fail(label + ': không tìm thấy file "' + rel + '" (kiểm tra đường dẫn và chữ hoa/chữ thường).');
    return;
  }
  const md = fs.readFileSync(file, 'utf8');
  if (/\]\(#\//.test(md)) warn(rel + ': có liên kết kiểu "#/…". Hãy dùng [chữ](lesson:id-bai) để trỏ tới bài khác.');
  if (/!\[\s*\]\(/.test(md)) warn(rel + ': có hình ảnh chưa có mô tả. Hãy viết ![mô tả hình](assets/ten-hinh.png) để người khiếm thị và Google hiểu hình.');
  try {
    item.rendered = render(md, { marked, katex, warn: (m) => warn(rel + ': ' + m) });
  } catch (e) {
    fail(rel + ': ' + e.message);
    return;
  }
  if (!item.description) {
    item.description = clip(firstParagraph(md));
    warn(label + ': chưa có "description" trong curriculum.json, tạm dùng đoạn đầu của bài.');
  } else if (item.description.length > 160) {
    warn(label + ': "description" dài ' + item.description.length + ' ký tự (nên ≤ 160).');
  }
  item.modified = isoDay(gitDate(rel));
}

/* ------------------------------------------------------------------ */
/* Page building blocks                                                */
/* ------------------------------------------------------------------ */

const YEAR = new Date().getUTCFullYear();
const THEME_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
  '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>' +
  '<path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>';
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%8D%8B%3C/text%3E%3C/svg%3E";

function resolveLinks(html, dir, where) {
  // Images and files in assets/ are written as "assets/name.png" in lessons;
  // lessons live in sub-folders, so point them back to the site's assets folder.
  const assetsPrefix = px.relative(dir || '.', 'assets') + '/';
  html = html.replace(/(src|href)="\/?assets\//g, (m, attr) => attr + '="' + assetsPrefix);
  return html.replace(/href="(lesson|chapter|page):([^"]*)"/g, (m, kind, id) => {
    let target;
    if (kind === 'lesson' && byLesson[id]) target = lessonDir(byLesson[id]);
    if (kind === 'chapter' && byChapter[id]) target = chapterDir(byChapter[id]);
    if (kind === 'page' && byPage[id]) target = pageDir(byPage[id]);
    if (target === undefined) {
      fail(where + ': liên kết "' + kind + ':' + id + '" trỏ tới ' + (kind === 'lesson' ? 'bài' : kind === 'chapter' ? 'chương' : 'trang') + ' không tồn tại.');
      return 'href="#"';
    }
    return 'href="' + relDir(dir, target) + '"';
  });
}

function navHtml(d, currentLesson, currentChapter, openAll) {
  return chapters.map((ch) => {
    const open = openAll || ch.id === currentChapter;
    const items = ch.lessons.map((ls) => {
      const cur = ls.id === currentLesson ? ' aria-current="page"' : '';
      return '<li><a href="' + relDir(d, lessonDir(ls)) + '" data-lesson="' + ls.id + '"' + cur + '>' +
        '<span class="tick" aria-hidden="true"></span>' +
        '<span class="nav-title">' + esc(ls.title) + '</span>' +
        '<span class="sr" data-done-label hidden> (completed)</span></a></li>';
    }).join('');
    return '<details class="nav-ch"' + (open ? ' open' : '') + '><summary><span class="nav-num">' +
      ch.number + '</span>' + esc(ch.title) + '</summary><ul>' + items + '</ul></details>';
  }).join('\n');
}

function shell(o) {
  const d = o.dir;
  const A = (f) => relFile(d, f);
  const canonical = abs(d);
  const ogImage = site.image
    ? (/^https?:\/\//.test(site.image) ? site.image : site.url + '/' + site.image.replace(/^\/+/, ''))
    : '';

  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<title>' + esc(o.title) + '</title>',
    '<meta name="description" content="' + esc(o.description) + '">',
    '<link rel="canonical" href="' + esc(canonical) + '">',
    '<meta name="theme-color" content="#f5c518">',
    '<meta property="og:site_name" content="' + esc(site.name) + '">',
    '<meta property="og:type" content="' + (o.ogType || 'website') + '">',
    '<meta property="og:title" content="' + esc(o.title) + '">',
    '<meta property="og:description" content="' + esc(o.description) + '">',
    '<meta property="og:url" content="' + esc(canonical) + '">',
    ogImage ? '<meta property="og:image" content="' + esc(ogImage) + '">' : '',
    '<meta name="twitter:card" content="' + (ogImage ? 'summary_large_image' : 'summary') + '">',
    '<link rel="icon" href="' + FAVICON + '">',
    '<link rel="stylesheet" href="' + A('assets/style.css') + '">',
    o.math ? '<link rel="stylesheet" href="' + A('assets/katex/katex.min.css') + '">' : '',
    o.math ? '<link rel="preload" as="font" type="font/woff2" crossorigin href="' + A('assets/katex/fonts/KaTeX_Main-Regular.woff2') + '">' : '',
    o.math ? '<link rel="preload" as="font" type="font/woff2" crossorigin href="' + A('assets/katex/fonts/KaTeX_Math-Italic.woff2') + '">' : '',
    '<script>(function(){var r=document.documentElement;r.classList.add("js");try{var t=localStorage.getItem("lm-theme");if(t)r.setAttribute("data-theme",t)}catch(e){}})()</script>'
  ].concat((o.jsonld || []).map(ldTag)).filter(Boolean).join('\n');

  const footerLinks = pages.length
    ? '<nav aria-label="About this site">' +
      pages.map((p) => '<a href="' + relDir(d, pageDir(p)) + '">' + esc(p.title) + '</a>').join(' · ') + '</nav>'
    : '';

  return '<!doctype html>\n' +
    '<html lang="' + esc(site.lang) + '">\n<head>\n' + head + '\n</head>\n<body>\n' +
    '<a class="skip" href="#main">Skip to content</a>\n' +
    '<header class="topbar">\n' +
    '  <button id="menu-btn" class="icon-btn" type="button" aria-label="Open lesson menu" aria-expanded="false" aria-controls="sidebar" hidden>☰</button>\n' +
    '  <a class="brand" href="' + relDir(d, '') + '"><span class="brand-mark" aria-hidden="true">🍋</span><span>Lemon<b>math</b></span></a>\n' +
    '  <div class="spacer"></div>\n' +
    '  <button id="theme-btn" class="icon-btn" type="button" aria-label="Switch between light and dark mode" hidden>' + THEME_ICON + '</button>\n' +
    '</header>\n' +
    '<div class="layout">\n' +
    '  <aside id="sidebar" class="sidebar" aria-label="Lessons">\n' +
    '    <label class="search" hidden><span class="sr">Search lessons</span><input id="search" type="search" placeholder="Search lessons…" autocomplete="off"></label>\n' +
    '    <nav id="nav" aria-label="Chapters and lessons">\n' + navHtml(d, o.currentLesson, o.currentChapter, o.openAll) + '\n    </nav>\n' +
    '    <p id="nav-empty" class="empty" hidden>No lessons found.</p>\n' +
    '  </aside>\n' +
    '  <div id="scrim" class="scrim" hidden></div>\n' +
    '  <main id="main" class="main" tabindex="-1">\n' +
    '    <div class="page' + (o.wide ? ' wide' : '') + '">\n' + o.body + '\n    </div>\n' +
    '  </main>\n' +
    '</div>\n' +
    '<footer class="footer">\n' +
    '  <p>© ' + YEAR + ' ' + esc(site.name) + ' · Learn math, step by step.</p>\n' +
    (footerLinks ? '  ' + footerLinks + '\n' : '') +
    '</footer>\n' +
    '<script src="' + A('assets/site.js') + '" defer></script>\n' +
    '</body>\n</html>\n';
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

const urls = [];

function put(dir, html, lastmod) {
  const rel = dir ? dir + '/index.html' : 'index.html';
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  urls.push({ loc: abs(dir), lastmod: lastmod || '' });
}

function homePage() {
  const d = '';
  const first = lessons[0];
  const cards = chapters.map((ch) => {
    const n = ch.lessons.length;
    const count = n + ' lesson' + (n === 1 ? '' : 's');
    return '<a class="card" href="' + relDir(d, chapterDir(ch)) + '" data-lessons="' + ch.lessons.map((l) => l.id).join(',') + '">\n' +
      '  <span class="card-num">Chapter ' + ch.number + '</span>\n' +
      '  <h2>' + esc(ch.title) + '</h2>\n' +
      '  <p>' + esc(ch.summary || '') + '</p>\n' +
      '  <div class="bar" hidden><i></i></div>\n' +
      '  <span class="card-meta" data-base="' + count + '">' + count + '</span>\n' +
      '</a>';
  }).join('\n');

  const body = '<section class="hero">\n' +
    '<p class="eyebrow">Free math lessons</p>\n' +
    '<h1>' + esc(site.headline) + '</h1>\n' +
    '<p class="lead">' + esc(site.tagline) + '</p>\n' +
    (first ? '<p><a class="btn" id="start-btn" href="' + relDir(d, lessonDir(first)) + '">Start learning</a></p>\n' : '') +
    '</section>\n' +
    '<section class="cards" aria-label="Chapters">\n' + cards + '\n</section>';

  const lastmod = maxDay(lessons.map((l) => l.modified));
  put(d, shell({
    dir: d,
    title: site.title || (site.name + ': ' + site.headline),
    description: site.description,
    body,
    wide: true,
    openAll: true,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs(''), inLanguage: site.lang }]
  }), lastmod);
}

function chapterPage(ch) {
  const d = chapterDir(ch);
  const items = ch.lessons.map((l) =>
    '<li><a href="' + relDir(d, lessonDir(l)) + '" data-lesson="' + l.id + '">' +
    '<span class="tick" aria-hidden="true"></span>' +
    '<span class="ll-title">' + esc(l.number + '  ' + l.title) + '</span>' +
    '<span class="ll-meta">' + (l.minutes ? l.minutes + ' min' : '') + '</span>' +
    '<span class="sr" data-done-label hidden> (completed)</span></a></li>'
  ).join('\n');

  const body = '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + relDir(d, '') + '">Home</a></nav>\n' +
    '<h1>Chapter ' + ch.number + ': ' + esc(ch.title) + '</h1>\n' +
    '<p class="meta">' + esc(ch.summary || '') + '</p>\n' +
    '<ol class="lesson-list">\n' + items + '\n</ol>';

  put(d, shell({
    dir: d,
    title: 'Chapter ' + ch.number + ': ' + ch.title + ' | ' + site.name,
    description: ch.summary || site.description,
    body,
    currentChapter: ch.id,
    jsonld: [crumbLD([
      { name: 'Home', url: abs('') },
      { name: 'Chapter ' + ch.number + ': ' + ch.title, url: abs(d) }
    ])]
  }), maxDay(ch.lessons.map((l) => l.modified)));
}

function lessonPage(ls) {
  const d = lessonDir(ls);
  const ch = ls.chapter;
  const idx = lessons.indexOf(ls);
  const prev = lessons[idx - 1];
  const next = lessons[idx + 1];
  const r = ls.rendered;
  const link = (to) => relDir(d, to);

  const toc = r.headings.length >= 3
    ? '<nav class="toc" aria-label="On this page"><p class="toc-title">On this page</p><ol>' +
      r.headings.map((h) => '<li><a href="#' + h.id + '">' + h.html + '</a></li>').join('') + '</ol></nav>'
    : '';

  const meta = 'Lesson ' + ls.number +
    (ls.minutes ? ' · ' + ls.minutes + ' min read' : '') +
    (ls.modified ? ' · Updated <time datetime="' + ls.modified + '">' + humanDay(ls.modified) + '</time>' : '');

  const pager = '<nav class="pager" aria-label="Lesson navigation">\n' +
    (prev
      ? '<a class="pager-prev" href="' + link(lessonDir(prev)) + '"><small>← Previous</small><span>' + esc(prev.title) + '</span></a>'
      : '<span></span>') + '\n' +
    (next
      ? '<a class="pager-next" href="' + link(lessonDir(next)) + '"><small>Next →</small><span>' + esc(next.title) + '</span></a>'
      : '<a class="pager-next" href="' + link('') + '"><small>You reached the end</small><span>Back to all chapters</span></a>') +
    '\n</nav>';

  const body = '<article class="lesson">\n' +
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + link('') + '">Home</a><span aria-hidden="true">›</span>' +
    '<a href="' + link(chapterDir(ch)) + '">Chapter ' + ch.number + ': ' + esc(ch.title) + '</a></nav>\n' +
    '<h1>' + esc(ls.title) + '</h1>\n' +
    '<p class="meta">' + meta + '</p>\n' +
    toc + '\n' +
    '<div class="prose">\n' + resolveLinks(r.html, d, ls.file) + '\n</div>\n' +
    '<div class="lesson-actions"><button id="done-btn" class="btn btn-outline" type="button" aria-pressed="false" data-lesson="' + ls.id + '" hidden>' +
    '<span class="chk" aria-hidden="true"></span>Mark as complete</button></div>\n' +
    '</article>\n' + pager;

  const learning = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: ls.title,
    description: ls.description,
    url: abs(d),
    inLanguage: site.lang,
    learningResourceType: 'lesson',
    isPartOf: {
      '@type': 'Course',
      name: ch.title,
      url: abs(chapterDir(ch)),
      provider: { '@type': 'Organization', name: site.name, url: abs('') }
    }
  };
  if (ls.minutes) learning.timeRequired = 'PT' + ls.minutes + 'M';
  if (ls.modified) learning.dateModified = ls.modified;

  put(d, shell({
    dir: d,
    title: ls.title + ' | ' + site.name,
    description: ls.description,
    ogType: 'article',
    body,
    math: r.math > 0,
    currentLesson: ls.id,
    currentChapter: ch.id,
    jsonld: [
      crumbLD([
        { name: 'Home', url: abs('') },
        { name: 'Chapter ' + ch.number + ': ' + ch.title, url: abs(chapterDir(ch)) },
        { name: ls.title, url: abs(d) }
      ]),
      learning
    ]
  }), ls.modified);
}

function extraPage(p) {
  const d = pageDir(p);
  const body = '<article class="lesson">\n' +
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + relDir(d, '') + '">Home</a></nav>\n' +
    '<h1>' + esc(p.title) + '</h1>\n' +
    '<div class="prose">\n' + resolveLinks(p.rendered.html, d, p.file) + '\n</div>\n</article>';
  put(d, shell({
    dir: d,
    title: p.title + ' | ' + site.name,
    description: p.description || site.description,
    body,
    math: p.rendered.math > 0,
    openAll: true,
    jsonld: [crumbLD([{ name: 'Home', url: abs('') }, { name: p.title, url: abs(d) }])]
  }), p.modified);
}

function notFoundHtml() {
  return '<!doctype html>\n<html lang="' + esc(site.lang) + '">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>Page not found | ' + esc(site.name) + '</title>\n<meta name="robots" content="noindex">\n' +
    '<style>\n' +
    'body{margin:0;min-height:100vh;display:grid;place-items:center;font:18px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#fffdf6;color:#1d2330;text-align:center;padding:24px}\n' +
    'a{color:#0a6b5c;font-weight:700}\nh1{font-size:2rem;margin:.2em 0}\n' +
    '@media (prefers-color-scheme:dark){body{background:#14161b;color:#eceff4}a{color:#6fd3c0}}\n' +
    '</style>\n</head>\n<body>\n<main>\n<div style="font-size:3rem" aria-hidden="true">🍋</div>\n' +
    '<h1>Page not found</h1>\n<p>Sorry, we could not find that page. <a href="/">Go to the ' + esc(site.name) + ' home page</a>.</p>\n' +
    '</main>\n</body>\n</html>\n';
}

/* ------------------------------------------------------------------ */
/* Static files                                                        */
/* ------------------------------------------------------------------ */

function copyAssets() {
  const src = path.join(ROOT, 'assets');
  if (fs.existsSync(src)) fs.cpSync(src, path.join(OUT, 'assets'), { recursive: true });

  // KaTeX styles and fonts are served from this site, not from a third-party CDN.
  const dist = path.dirname(require.resolve('katex'));
  const cssFile = path.join(dist, 'katex.min.css');
  const fontsDir = path.join(dist, 'fonts');
  if (!fs.existsSync(cssFile) || !fs.existsSync(fontsDir)) {
    fail('không tìm thấy file CSS/font của KaTeX trong node_modules (chạy "npm ci" trước).');
    return;
  }
  const dest = path.join(OUT, 'assets', 'katex');
  fs.mkdirSync(path.join(dest, 'fonts'), { recursive: true });
  // Keep only the modern woff2 fonts; drop the old woff/ttf fallbacks from the CSS.
  const css = fs.readFileSync(cssFile, 'utf8').replace(/,url\(fonts\/[^)]*\.(?:woff|ttf)\) format\("[a-z]+"\)/g, '');
  fs.writeFileSync(path.join(dest, 'katex.min.css'), css);
  fs.readdirSync(fontsDir).filter((f) => f.endsWith('.woff2')).forEach((f) => {
    fs.copyFileSync(path.join(fontsDir, f), path.join(dest, 'fonts', f));
  });
  const lic = path.join(dist, '..', 'LICENSE');
  if (fs.existsSync(lic)) fs.copyFileSync(lic, path.join(dest, 'LICENSE.txt'));
}

function writeSitemap() {
  const rows = urls.map((u) =>
    '  <url><loc>' + esc(u.loc) + '</loc>' + (u.lastmod ? '<lastmod>' + u.lastmod + '</lastmod>' : '') + '</url>'
  ).join('\n');
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + rows + '\n</urlset>\n');
  fs.writeFileSync(path.join(OUT, 'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: ' + site.url + '/sitemap.xml\n');
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

function report() {
  warnings.forEach((w) => console.warn('CẢNH BÁO: ' + w));
  if (errors.length) {
    errors.forEach((e) => console.error('LỖI: ' + e));
    console.error('\nDựng website thất bại (build failed): ' + errors.length + ' lỗi. Sửa các lỗi ở trên rồi Commit lại.');
    process.exit(1);
  }
}

function main() {
  indexConfig();
  lessons.forEach((ls) => loadContent(ls, 'bài "' + ls.id + '"'));
  pages.forEach((p) => loadContent(p, 'trang "' + p.id + '"'));
  if (errors.length) report();

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  copyAssets();

  homePage();
  chapters.forEach(chapterPage);
  lessons.forEach(lessonPage);
  pages.forEach(extraPage);

  fs.writeFileSync(path.join(OUT, '404.html'), notFoundHtml());
  writeSitemap();
  report();

  console.log('Dựng xong: ' + lessons.length + ' bài, ' + chapters.length + ' chương, ' + pages.length + ' trang phụ -> ' + path.relative(process.cwd(), OUT) + '/');
}

main();
