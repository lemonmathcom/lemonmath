#!/usr/bin/env node
'use strict';

/*
 * Lemonmath site builder (bilingual).
 *
 * Reads data/curriculum.json and the Markdown lessons in content/, and writes a
 * ready-to-publish website into dist/:
 *
 *   English  (root)        /   /grade-10/   /grade-10/<chapter>/   /grade-10/<chapter>/<lesson>/
 *   Vietnamese (/vi/)      /vi/   /vi/lop-10/   /vi/lop-10/<chapter>/   /vi/lop-10/<chapter>/<lesson>/
 *   sitemap.xml, robots.txt, 404.html, search-index.json (per language), assets/
 *
 * Lessons live in content/en/g<N>/<lesson-id>.md and content/vi/g<N>/<lesson-id>.md.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const katex = require('katex');
const { marked } = require('marked');
const { render, esc } = require('./render.js');
const { mascot, icon } = require('./art.js');
const { UI } = require('./ui.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, process.env.OUT_DIR || 'dist');
const STRICT = process.env.LM_STRICT === '1'; // normally a lesson that has no files yet is simply skipped
const px = path.posix;

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const relDir = (from, to) => {
  const r = px.relative(from || '.', to || '.');
  return r ? r + '/' : './';
};
const relFile = (from, file) => px.relative(from || '.', file);
const rel0 = (from, to) => px.relative(from || '.', to || '.') || '.';

function clip(s, n) {
  n = n || 155;
  if (s.length <= n) return s;
  return s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
}

function gitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    return out || null;
  } catch (e) { return null; }
}
const isoDay = (iso) => { if (!iso) return ''; const t = new Date(iso); return isNaN(t) ? '' : t.toISOString().slice(0, 10); };
const maxDay = (days) => days.filter(Boolean).sort().pop() || '';
const ldTag = (obj) => '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';
const crumbLD = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }))
});

function parseFront(md, file) {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(md.replace(/\r\n?/g, '\n'));
  const meta = {};
  let body = md.replace(/\r\n?/g, '\n');
  if (m) {
    body = body.slice(m[0].length);
    m[1].split('\n').forEach((line) => {
      const kv = /^([a-z]+):\s*(.*)$/.exec(line.trim());
      if (kv) meta[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
    });
  } else fail(file + ': thiếu phần đầu "---" (title, description, minutes). Xem _templates/lesson-template.md');
  return { meta, body };
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

let cfg;
try {
  cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'curriculum.json'), 'utf8'));
} catch (e) {
  console.error('LỖI: không đọc được data/curriculum.json: ' + e.message);
  process.exit(1);
}
const site = Object.assign({ name: 'Lemonmath', url: '' }, cfg.site);
site.url = String(site.url || '').replace(/\/+$/, '');
if (!/^https:\/\/[^\s/]+$/.test(site.url)) fail('data/curriculum.json: "url" phải có dạng "https://lemonmath.com".');

const LANGS = ['en', 'vi'];
const LANG = {
  en: { prefix: '', gradeSlug: (n) => 'grade-' + n, about: 'about', htmlLang: 'en', locale: 'en-US', name: 'English' },
  vi: { prefix: 'vi', gradeSlug: (n) => 'lop-' + n, about: 'gioi-thieu', htmlLang: 'vi', locale: 'vi-VN', name: 'Tiếng Việt' }
};
const LEVEL = (n) => (n <= 5 ? 'primary' : n <= 9 ? 'middle' : 'high');
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const grades = cfg.grades || [];
const lessons = []; // only lessons that have content in both languages
const byId = {};

grades.forEach((g) => {
  g.level = LEVEL(g.n);
  g.chapters.forEach((ch, ci) => {
    if (!ID_RE.test(ch.id)) fail('chương "' + ch.id + '": id không hợp lệ.');
    ch.number = ci + 1;
    ch.grade = g;
    ch.lessons = ch.lessons || [];
    ch.lessons.forEach((ls, li) => {
      if (!ID_RE.test(ls.id)) fail('bài "' + ls.id + '": id không hợp lệ.');
      if (byId[ls.id]) fail('trùng id bài "' + ls.id + '".');
      ls.number = (ci + 1) + '.' + (li + 1);
      ls.chapter = ch;
      ls.grade = g;
      byId[ls.id] = ls;
    });
  });
});

const homeDir = (lang) => LANG[lang].prefix;
const gradeDir = (lang, g) => px.join(LANG[lang].prefix, LANG[lang].gradeSlug(g.n));
const chapterDir = (lang, ch) => px.join(gradeDir(lang, ch.grade), ch.id);
const lessonDir = (lang, ls) => px.join(chapterDir(lang, ls.chapter), ls.id);
const aboutDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].about);
const abs = (dir) => site.url + '/' + (dir ? dir + '/' : '');
const other = (lang) => (lang === 'en' ? 'vi' : 'en');

const missing = [];
function loadLessons() {
  grades.forEach((g) => {
    g.chapters.forEach((ch) => {
      ch.lessons = ch.lessons.filter((ls) => {
        ls.content = {};
        let ok = true;
        LANGS.forEach((lang) => {
          const rel = 'content/' + lang + '/g' + g.n + '/' + ls.id + '.md';
          const file = path.join(ROOT, rel);
          if (!fs.existsSync(file)) {
            ok = false;
            if (STRICT) fail('thiếu file ' + rel); else missing.push(rel);
            return;
          }
          const { meta, body } = parseFront(fs.readFileSync(file, 'utf8'), rel);
          if (!meta.title) fail(rel + ': thiếu "title" ở phần đầu.');
          if (!meta.description) fail(rel + ': thiếu "description" ở phần đầu.');
          else if (meta.description.length > 160) warn(rel + ': "description" dài ' + meta.description.length + ' ký tự (nên ≤ 160).');
          if (/!\[\s*\]\(/.test(body)) warn(rel + ': có hình ảnh chưa có mô tả.');
          let rendered;
          try {
            rendered = render(body, { marked, katex, lang, warn: (m) => warn(rel + ': ' + m) });
          } catch (e) { fail(rel + ': ' + e.message); return; }
          ls.content[lang] = { meta, rendered, rel, modified: isoDay(gitDate(rel)), words: body.length };
        });
        return ok && ls.content.en && ls.content.vi;
      });
      ch.lessons.forEach((ls) => lessons.push(ls));
    });
  });
  if (missing.length) console.log('Chưa có file cho ' + Math.ceil(missing.length / 2) + ' bài (bỏ qua, sẽ hiện "sắp ra mắt"): các bài còn thiếu sẽ tự xuất hiện khi bạn tải file lên.');
  // parity: the two languages must teach the same thing
  lessons.forEach((ls) => {
    const a = ls.content.en.rendered, b = ls.content.vi.rendered;
    if (a.headings.length !== b.headings.length) warn('bài "' + ls.id + '": số mục ## khác nhau giữa EN (' + a.headings.length + ') và VI (' + b.headings.length + ').');
    const ratio = Math.abs(a.math - b.math) / Math.max(a.math, b.math, 1);
    if (ratio > 0.25) warn('bài "' + ls.id + '": số công thức khác nhau nhiều giữa EN (' + a.math + ') và VI (' + b.math + ').');
  });
}

function loadPage(lang, name) {
  const rel = 'content/' + lang + '/' + name + '.md';
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { fail('thiếu file ' + rel); return null; }
  const { meta, body } = parseFront(fs.readFileSync(file, 'utf8'), rel);
  try {
    return { meta, rendered: render(body, { marked, katex, lang, warn: (m) => warn(rel + ': ' + m) }), modified: isoDay(gitDate(rel)) };
  } catch (e) { fail(rel + ': ' + e.message); return null; }
}

/* ------------------------------------------------------------------ */
/* Page frame                                                          */
/* ------------------------------------------------------------------ */

const YEAR = new Date().getUTCFullYear();
const THEME_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>';
const FAVICON = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path d="M6 62Q14 56 20 46C30 30 45 22 60 22 75 22 90 30 100 46Q106 56 114 62 106 68 100 78 90 94 75 102 60 102 45 102 30 94 20 78 14 68 6 62Z" fill="#FFD93B" stroke="#B8860B" stroke-width="6"/><path d="M60 23C58 10 68 3 84 5 85 17 76 25 60 23Z" fill="#4CAF50"/></svg>');

function resolveLinks(html, dir, lang, where) {
  const assetsPrefix = px.relative(dir || '.', 'assets') + '/';
  html = html.replace(/(src|href)="\/?assets\//g, (m, attr) => attr + '="' + assetsPrefix);
  return html.replace(/href="(lesson|grade):([^"]*)"/g, (m, kind, id) => {
    let target;
    if (kind === 'lesson' && byId[id] && lessons.indexOf(byId[id]) !== -1) target = lessonDir(lang, byId[id]);
    if (kind === 'grade') { const g = grades.find((x) => String(x.n) === id); if (g) target = gradeDir(lang, g); }
    if (target === undefined) {
      fail(where + ': liên kết "' + kind + ':' + id + '" trỏ tới trang không tồn tại.');
      return 'href="#"';
    }
    return 'href="' + relDir(dir, target) + '"';
  });
}

function navHtml(lang, d, g, currentLesson, currentChapter) {
  const T = UI[lang];
  return g.chapters.map((ch) => {
    const open = ch.id === currentChapter;
    const items = ch.lessons.map((ls) => {
      const cur = ls.id === currentLesson ? ' aria-current="page"' : '';
      return '<li><a href="' + relDir(d, lessonDir(lang, ls)) + '" data-lesson="' + ls.id + '"' + cur + '>' +
        '<span class="tick" aria-hidden="true"></span><span class="nav-title">' + esc(ls.content[lang].meta.title) + '</span>' +
        '<span class="sr" data-done-label hidden> ' + T.completed + '</span></a></li>';
    }).join('');
    return '<details class="nav-ch"' + (open ? ' open' : '') + '><summary><span class="nav-num">' + ch.number + '</span>' + esc(ch[lang]) + '</summary><ul>' + items + '</ul></details>';
  }).join('\n');
}

const urls = []; // for the sitemap: {dir, alt:{en,vi}, lastmod}

/*
 * o: { lang, dir, title, description, body, altDir (same page in the other language), grade, level,
 *      side: {grade, lesson, chapter} | null, math, noindex, ogType, jsonld }
 */
function shell(o) {
  const lang = o.lang, d = o.dir, T = UI[lang], L = LANG[lang];
  const A = (f) => relFile(d, f);
  const canonical = abs(d);
  const ogImage = site.url + '/assets/og-image.png';
  const altLang = other(lang);
  const alternates = o.noindex ? '' : (lang === 'en'
    ? [['en', d], ['vi', o.altDir], ['x-default', d]]
    : [['en', o.altDir], ['vi', d], ['x-default', o.altDir]]
  ).map((a) => '<link rel="alternate" hreflang="' + a[0] + '" href="' + esc(abs(a[1])) + '">').join('\n');

  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<title>' + esc(o.title) + '</title>',
    '<meta name="description" content="' + esc(o.description) + '">',
    o.noindex ? '<meta name="robots" content="noindex,follow">' : '',
    '<link rel="canonical" href="' + esc(canonical) + '">',
    alternates,
    '<meta name="theme-color" content="#FFD43B">',
    '<meta property="og:site_name" content="' + esc(site.name) + '">',
    '<meta property="og:type" content="' + (o.ogType || 'website') + '">',
    '<meta property="og:locale" content="' + (lang === 'vi' ? 'vi_VN' : 'en_US') + '">',
    '<meta property="og:title" content="' + esc(o.title) + '">',
    '<meta property="og:description" content="' + esc(o.description) + '">',
    '<meta property="og:url" content="' + esc(canonical) + '">',
    '<meta property="og:image" content="' + esc(ogImage) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<link rel="icon" href="' + FAVICON + '">',
    '<link rel="preload" as="font" type="font/woff2" crossorigin href="' + A('assets/fonts/nunito-latin-wght-normal.woff2') + '">',
    '<link rel="stylesheet" href="' + A('assets/fonts.css') + '">',
    '<link rel="stylesheet" href="' + A('assets/style.css') + '">',
    o.math ? '<link rel="stylesheet" href="' + A('assets/katex/katex.min.css') + '">' : '',
    '<script>(function(){var r=document.documentElement;r.classList.add("js");try{var t=localStorage.getItem("lm-theme");if(t)r.setAttribute("data-theme",t)}catch(e){}})()</script>'
  ].concat((o.jsonld || []).map(ldTag)).filter(Boolean).join('\n');

  const switchLink = '<a class="lang-btn" href="' + relDir(d, o.altDir) + '" hreflang="' + altLang + '" lang="' + altLang + '" data-lang="' + altLang + '" title="' + esc(T.switchTitle) + '">' + icon('globe', 18) + '<span>' + LANG[altLang].name + '</span></a>';

  const side = o.side
    ? '<aside id="sidebar" class="sidebar" aria-label="' + esc(T.lessonsLabel) + '">\n<p class="side-title">' + esc(T.grade(o.side.grade.n)) + '</p>\n<nav id="nav" aria-label="' + esc(T.chaptersAndLessons) + '">\n' + navHtml(lang, d, o.side.grade, o.side.lesson, o.side.chapter) + '\n</nav>\n</aside>\n<div id="scrim" class="scrim" hidden></div>\n'
    : '';

  const bodyCls = ['lvl-' + (o.level || 'home'), o.side ? 'has-side' : ''].filter(Boolean).join(' ');
  return '<!doctype html>\n<html lang="' + L.htmlLang + '" data-root="' + esc(rel0(d, L.prefix)) + '">\n<head>\n' + head + '\n</head>\n<body class="' + bodyCls + '">\n' +
    '<a class="skip" href="#main">' + esc(T.skip) + '</a>\n' +
    '<header class="topbar">\n' +
    (o.side ? '  <button id="menu-btn" class="icon-btn" type="button" aria-label="' + esc(T.menu) + '" aria-expanded="false" aria-controls="sidebar" hidden>☰</button>\n' : '') +
    '  <a class="brand" href="' + relDir(d, homeDir(lang)) + '">' + mascot({ cls: 'brand-mark' }) + '<span>Lemon<b>math</b></span></a>\n' +
    '  <nav class="topnav" aria-label="' + esc(T.mainNav) + '"><a href="' + relDir(d, homeDir(lang)) + '#grades">' + esc(T.allGrades) + '</a><a href="' + relDir(d, aboutDir(lang)) + '">' + esc(T.about) + '</a></nav>\n' +
    '  <div class="spacer"></div>\n' +
    '  <div class="searchbox" hidden><label class="sr" for="q">' + esc(T.search) + '</label>' + icon('search', 18) + '<input id="q" type="search" placeholder="' + esc(T.searchPh) + '" autocomplete="off" aria-controls="results"><ul id="results" class="results" hidden></ul></div>\n' +
    '  ' + switchLink + '\n' +
    '  <button id="theme-btn" class="icon-btn" type="button" aria-label="' + esc(T.theme) + '" hidden>' + THEME_ICON + '</button>\n' +
    '</header>\n' +
    '<div class="layout">\n' + side +
    '  <main id="main" class="main" tabindex="-1">\n    <div class="page' + (o.wide ? ' wide' : '') + '">\n' + o.body + '\n    </div>\n  </main>\n</div>\n' +
    '<footer class="footer">\n  ' + mascot({ cls: 'foot-mark' }) + '\n  <p>© ' + YEAR + ' ' + esc(site.name) + ' · ' + esc(T.footer) + '</p>\n' +
    '  <nav aria-label="' + esc(T.aboutNav) + '"><a href="' + relDir(d, aboutDir(lang)) + '">' + esc(T.about) + '</a> · <a href="https://github.com/lemonmathcom/lemonmath/issues">' + esc(T.report) + '</a></nav>\n</footer>\n' +
    '<script src="' + A('assets/site.js') + '" defer></script>\n</body>\n</html>\n';
}

function put(lang, dir, altDir, html, lastmod, noindex) {
  const file = path.join(OUT, dir ? dir + '/index.html' : 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (!noindex) urls.push({ lang, dir, altDir, lastmod: lastmod || '' });
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

function gradeTile(lang, d, g) {
  const T = UI[lang];
  const full = g.status === 'full' && g.chapters.some((c) => c.lessons.length);
  const ids = [].concat(...g.chapters.map((c) => c.lessons.map((l) => l.id)));
  return '<a class="gtile lvl-' + g.level + (full ? ' full' : '') + '" href="' + relDir(d, gradeDir(lang, g)) + '" data-lessons="' + ids.join(',') + '">' +
    '<span class="gnum">' + g.n + '</span><span class="glabel">' + esc(T.gradeWord) + '</span>' +
    '<span class="gbadge">' + esc(full ? T.fullBadge : T.roadmapBadge) + '</span></a>';
}

function chapterCard(lang, d, ch, linkTo) {
  const T = UI[lang];
  const n = ch.lessons.length;
  const tag = linkTo ? 'a' : 'div';
  const ids = ch.lessons.map((l) => l.id);
  return '<' + tag + ' class="card ccard"' + (linkTo ? ' href="' + relDir(d, chapterDir(lang, ch)) + '" data-lessons="' + ids.join(',') + '"' : '') + '>' +
    '<span class="cicon">' + icon(ch.icon, 28) + '</span>' +
    '<span class="card-num">' + esc(T.chapterN(ch.number)) + '</span>' +
    '<h3>' + esc(ch[lang]) + '</h3>' +
    (ch.summary ? '<p>' + esc(ch.summary[lang]) + '</p>' : '') +
    (n ? '<div class="bar" hidden><i></i></div><span class="card-meta" data-base="' + esc(T.lessonCount(n)) + '" data-complete="' + esc(T.pctComplete) + '">' + esc(T.lessonCount(n)) + '</span>' : '<span class="card-meta soon">' + esc(T.soon) + '</span>') +
    '</' + tag + '>';
}

function homePage(lang) {
  const T = UI[lang], d = homeDir(lang), alt = homeDir(other(lang));
  const g10 = grades.find((g) => g.n === 10);
  const levelBlock = (lvl) => {
    const gs = grades.filter((g) => g.level === lvl);
    return '<section class="level lvl-' + lvl + '" aria-labelledby="lv-' + lvl + '"><div class="level-head"><h3 id="lv-' + lvl + '">' + esc(T.levels[lvl][0]) + '</h3><p>' + esc(T.levels[lvl][1]) + '</p></div>' +
      '<div class="gtiles">' + gs.map((g) => gradeTile(lang, d, g)).join('') + '</div></section>';
  };
  const body = '<section class="hero">\n<div class="hero-text">\n<p class="eyebrow">' + esc(T.eyebrow) + '</p>\n<h1>' + esc(T.h1) + '</h1>\n<p class="lead">' + esc(T.lead) + '</p>\n' +
    '<p class="hero-actions"><a class="btn" id="start-btn" href="' + relDir(d, gradeDir(lang, g10)) + '">' + esc(T.startG10) + '</a> <a class="btn btn-ghost" href="#grades">' + esc(T.browse) + '</a></p>\n</div>\n' +
    '<div class="hero-art" aria-hidden="true">' + mascot({ cls: 'hero-mascot', mood: 'wow' }) + '<span class="float f1">x²</span><span class="float f2">π</span><span class="float f3">∑</span><span class="float f4">√</span></div>\n</section>\n' +
    '<section id="grades" class="grades" aria-labelledby="grades-h"><h2 id="grades-h">' + esc(T.pickGrade) + '</h2>\n' + ['primary', 'middle', 'high'].map(levelBlock).join('\n') + '</section>\n' +
    '<section class="features" aria-labelledby="why-h"><h2 id="why-h">' + esc(T.why) + '</h2><div class="feat-grid">' +
    T.features.map((f) => '<div class="feat"><span class="feat-ico">' + icon(f[0], 28) + '</span><h3>' + esc(f[1]) + '</h3><p>' + esc(f[2]) + '</p></div>').join('') + '</div></section>\n' +
    '<section class="featured" aria-labelledby="g10-h"><h2 id="g10-h">' + esc(T.featuredG10) + '</h2><div class="cards">' + g10.chapters.map((ch) => chapterCard(lang, d, ch, true)).join('\n') + '</div></section>';
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: T.homeTitle, description: T.homeDesc, body, wide: true,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs(d), inLanguage: LANG[lang].htmlLang }]
  }), maxDay(lessons.map((l) => l.content[lang].modified)));
}

function gradePage(lang, g) {
  const T = UI[lang], d = gradeDir(lang, g), alt = gradeDir(other(lang), g);
  const full = g.status === 'full' && g.chapters.some((c) => c.lessons.length);
  const prev = grades.find((x) => x.n === g.n - 1), next = grades.find((x) => x.n === g.n + 1);
  const total = [].concat(...g.chapters.map((c) => c.lessons)).length;
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n' +
    '<header class="gradehead"><div><p class="eyebrow">' + esc(T.levels[g.level][0]) + '</p><h1>' + esc(T.grade(g.n)) + '</h1>' +
    '<p class="lead">' + esc(full ? T.gradeFullLead(total, g.chapters.length) : T.gradeRoadmapLead(g.chapters.length)) + '</p></div>' + mascot({ cls: 'grade-mascot', mood: full ? 'happy' : 'wow' }) + '</header>\n' +
    (full ? '' : '<p class="soon-note">' + esc(T.soonNote) + ' <a href="' + relDir(d, gradeDir(lang, grades.find((x) => x.status === 'full'))) + '">' + esc(T.tryG10) + '</a></p>\n') +
    '<div class="cards">' + g.chapters.map((ch) => chapterCard(lang, d, ch, full)).join('\n') + '</div>\n' +
    '<nav class="pager" aria-label="' + esc(T.gradeNav) + '">' +
    (prev ? '<a class="pager-prev" href="' + relDir(d, gradeDir(lang, prev)) + '"><small>← ' + esc(T.prev) + '</small><span>' + esc(T.grade(prev.n)) + '</span></a>' : '<span></span>') +
    (next ? '<a class="pager-next" href="' + relDir(d, gradeDir(lang, next)) + '"><small>' + esc(T.next) + ' →</small><span>' + esc(T.grade(next.n)) + '</span></a>' : '<span></span>') + '</nav>';
  const title = T.gradeTitle(g.n) + ' | ' + site.name;
  const desc = full ? T.gradeFullDesc(g.n, total, g.chapters.length) : T.gradeRoadmapDesc(g.n, g.chapters.length);
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title, description: desc, body, level: g.level, noindex: !full,
    side: full ? { grade: g } : null,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.grade(g.n), url: abs(d) }])].concat(full ? [{
      '@context': 'https://schema.org', '@type': 'Course', name: T.gradeTitle(g.n), description: desc, url: abs(d), inLanguage: LANG[lang].htmlLang,
      provider: { '@type': 'Organization', name: site.name, url: abs(homeDir(lang)) }
    }] : [])
  }), maxDay([].concat(...g.chapters.map((c) => c.lessons.map((l) => l.content[lang].modified)))), !full);
}

function chapterPage(lang, ch) {
  const T = UI[lang], d = chapterDir(lang, ch), alt = chapterDir(other(lang), ch), g = ch.grade;
  const items = ch.lessons.map((l) =>
    '<li><a href="' + relDir(d, lessonDir(lang, l)) + '" data-lesson="' + l.id + '"><span class="tick" aria-hidden="true"></span>' +
    '<span class="ll-title"><b>' + l.number + '</b> ' + esc(l.content[lang].meta.title) + '</span>' +
    '<span class="ll-meta">' + (l.content[lang].meta.minutes ? l.content[lang].meta.minutes + ' ' + T.min : '') + '</span>' +
    '<span class="sr" data-done-label hidden> ' + T.completed + '</span></a></li>').join('\n');
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + relDir(d, gradeDir(lang, g)) + '">' + esc(T.grade(g.n)) + '</a></nav>\n' +
    '<header class="chaphead"><span class="cicon big">' + icon(ch.icon, 40) + '</span><div><p class="eyebrow">' + esc(T.chapterN(ch.number)) + '</p><h1>' + esc(ch[lang]) + '</h1><p class="lead">' + esc(ch.summary[lang]) + '</p></div></header>\n' +
    '<ol class="lesson-list">\n' + items + '\n</ol>';
  const title = T.chapterTitle(ch.number, ch[lang], g.n) + ' | ' + site.name;
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title, description: clip(ch.summary[lang] + ' ' + T.chapterDescTail(g.n), 160), body, level: g.level,
    side: { grade: g, chapter: ch.id },
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.grade(g.n), url: abs(gradeDir(lang, g)) }, { name: ch[lang], url: abs(d) }])]
  }), maxDay(ch.lessons.map((l) => l.content[lang].modified)));
}

function lessonPage(lang, ls) {
  const T = UI[lang], d = lessonDir(lang, ls), alt = lessonDir(other(lang), ls), ch = ls.chapter, g = ls.grade;
  const C = ls.content[lang], r = C.rendered, meta = C.meta;
  const inGrade = lessons.filter((x) => x.grade === g);
  const idx = inGrade.indexOf(ls);
  const prev = inGrade[idx - 1], next = inGrade[idx + 1];
  const link = (to) => relDir(d, to);

  const toc = r.headings.length >= 3
    ? '<nav class="toc" aria-label="' + esc(T.onThisPage) + '"><p class="toc-title">' + esc(T.onThisPage) + '</p><ol>' + r.headings.map((h) => '<li><a href="#' + h.id + '">' + h.html + '</a></li>').join('') + '</ol></nav>'
    : '';
  const metaLine = esc(T.lesson) + ' ' + ls.number + (meta.minutes ? ' · ' + meta.minutes + ' ' + T.minRead : '') +
    (C.modified ? ' · ' + esc(T.updated) + ' <time datetime="' + C.modified + '">' + new Date(C.modified + 'T00:00:00Z').toLocaleDateString(LANG[lang].locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) + '</time>' : '');
  const pager = '<nav class="pager" aria-label="' + esc(T.lessonNav) + '">\n' +
    (prev ? '<a class="pager-prev" href="' + link(lessonDir(lang, prev)) + '"><small>← ' + esc(T.prev) + '</small><span>' + esc(prev.content[lang].meta.title) + '</span></a>' : '<span></span>') + '\n' +
    (next ? '<a class="pager-next" href="' + link(lessonDir(lang, next)) + '"><small>' + esc(T.next) + ' →</small><span>' + esc(next.content[lang].meta.title) + '</span></a>'
      : '<a class="pager-next" href="' + link(gradeDir(lang, g)) + '"><small>' + esc(T.end) + '</small><span>' + esc(T.backToGrade) + '</span></a>') + '\n</nav>';
  const body = '<article class="lesson">\n<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + link(homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + link(gradeDir(lang, g)) + '">' + esc(T.grade(g.n)) + '</a><span aria-hidden="true">›</span><a href="' + link(chapterDir(lang, ch)) + '">' + esc(T.chapterN(ch.number) + ': ' + ch[lang]) + '</a></nav>\n' +
    '<h1>' + esc(meta.title) + '</h1>\n<p class="meta">' + metaLine + '</p>\n' + toc + '\n' +
    '<div class="prose">\n' + resolveLinks(r.html, d, lang, C.rel) + '\n</div>\n' +
    '<div class="lesson-actions"><button id="done-btn" class="btn btn-outline" type="button" aria-pressed="false" data-lesson="' + ls.id + '" data-on="' + esc(T.markedDone) + '" data-off="' + esc(T.markDone) + '" hidden><span class="chk" aria-hidden="true"></span><span class="done-text">' + esc(T.markDone) + '</span></button></div>\n' +
    '</article>\n' + pager;
  const learning = {
    '@context': 'https://schema.org', '@type': 'LearningResource', name: meta.title, description: meta.description, url: abs(d),
    inLanguage: LANG[lang].htmlLang, learningResourceType: 'lesson', educationalLevel: T.grade(g.n),
    isPartOf: { '@type': 'Course', name: ch[lang], url: abs(chapterDir(lang, ch)), provider: { '@type': 'Organization', name: site.name, url: abs(homeDir(lang)) } }
  };
  if (meta.minutes) learning.timeRequired = 'PT' + meta.minutes + 'M';
  if (C.modified) learning.dateModified = C.modified;
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: meta.title + ' | ' + T.grade(g.n) + ' | ' + site.name, description: meta.description, ogType: 'article', body,
    math: r.math > 0, level: g.level, side: { grade: g, lesson: ls.id, chapter: ch.id },
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.grade(g.n), url: abs(gradeDir(lang, g)) }, { name: ch[lang], url: abs(chapterDir(lang, ch)) }, { name: meta.title, url: abs(d) }]), learning]
  }), C.modified);
}

function aboutPage(lang, page) {
  const T = UI[lang], d = aboutDir(lang), alt = aboutDir(other(lang));
  const body = '<article class="lesson about"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(page.meta.title) + '</h1>\n<div class="prose">\n' + resolveLinks(page.rendered.html, d, lang, 'about') + '\n</div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: page.meta.title + ' | ' + site.name, description: page.meta.description, body, math: false,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: page.meta.title, url: abs(d) }])] }), page.modified);
}

function searchIndex(lang) {
  const T = UI[lang];
  const rows = [];
  grades.forEach((g) => {
    const full = g.status === 'full' && g.chapters.some((c) => c.lessons.length);
    rows.push({ t: T.grade(g.n), s: T.levels[g.level][0], u: gradeDir(lang, g).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
    g.chapters.forEach((ch) => {
      const base = LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0;
      rows.push({ t: ch[lang], s: T.grade(g.n) + ' · ' + T.chapterN(ch.number), u: (full ? chapterDir(lang, ch) : gradeDir(lang, g)).slice(base) });
      ch.lessons.forEach((ls) => rows.push({ t: ls.content[lang].meta.title, s: T.grade(g.n) + ' · ' + ch[lang], u: lessonDir(lang, ls).slice(base) }));
    });
  });
  fs.mkdirSync(path.join(OUT, LANG[lang].prefix), { recursive: true });
  fs.writeFileSync(path.join(OUT, LANG[lang].prefix, 'search-index.json'), JSON.stringify(rows));
}

function notFoundHtml() {
  return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>Page not found · Không tìm thấy trang | ' + esc(site.name) + '</title>\n<meta name="robots" content="noindex">\n<style>\n' +
    'body{margin:0;min-height:100vh;display:grid;place-items:center;font:18px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#FFFBEA;color:#2B2A33;text-align:center;padding:24px}\n' +
    'a{color:#B45309;font-weight:800}h1{font-size:2rem;margin:.2em 0}p{margin:.4em 0}svg{width:120px;height:120px}\n@media (prefers-color-scheme:dark){body{background:#17161C;color:#F4F1E8}a{color:#FDBA74}}\n</style>\n</head>\n<body>\n<main>\n' +
    mascot({ mood: 'wow' }) + '\n<h1>Oops! Page not found</h1>\n<p>Sorry, we could not find that page. <a href="/">Go to the Lemonmath home page</a>.</p>\n' +
    '<h1>Ôi! Không tìm thấy trang</h1>\n<p>Rất tiếc, trang này không tồn tại. <a href="/vi/">Về trang chủ Lemonmath</a>.</p>\n</main>\n</body>\n</html>\n';
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
  if (!fs.existsSync(cssFile) || !fs.existsSync(fontsDir)) { fail('không tìm thấy file CSS/font của KaTeX trong node_modules (chạy "npm ci" trước).'); return; }
  const dest = path.join(OUT, 'assets', 'katex');
  fs.mkdirSync(path.join(dest, 'fonts'), { recursive: true });
  const css = fs.readFileSync(cssFile, 'utf8').replace(/,url\(fonts\/[^)]*\.(?:woff|ttf)\) format\("[a-z]+"\)/g, '');
  fs.writeFileSync(path.join(dest, 'katex.min.css'), css);
  fs.readdirSync(fontsDir).filter((f) => f.endsWith('.woff2')).forEach((f) => fs.copyFileSync(path.join(fontsDir, f), path.join(dest, 'fonts', f)));
  const lic = path.join(dist, '..', 'LICENSE');
  if (fs.existsSync(lic)) fs.copyFileSync(lic, path.join(dest, 'LICENSE.txt'));

  // Site fonts (Nunito for text, Baloo 2 for headings): Latin + Vietnamese only, self-hosted.
  const fdest = path.join(OUT, 'assets', 'fonts');
  fs.mkdirSync(fdest, { recursive: true });
  let fontCss = '';
  const take = (pkg, cssName, keep) => {
    const base = path.join(ROOT, 'node_modules', pkg);
    if (!fs.existsSync(base)) { fail('thiếu font ' + pkg + ' (chạy "npm ci" trước).'); return; }
    const text = fs.readFileSync(path.join(base, cssName), 'utf8');
    (text.match(/\/\* [^*]+ \*\/\s*@font-face \{[\s\S]*?\}/g) || []).forEach((block) => {
      const name = /\/\* ([^ ]+) \*\//.exec(block)[1];
      if (!keep.test(name)) return;
      const file = /url\(\.\/files\/([^)]+\.woff2)\)/.exec(block)[1];
      fs.copyFileSync(path.join(base, 'files', file), path.join(fdest, file));
      fontCss += block.replace(/\/\* [^*]+ \*\/\s*/, '').replace(/url\(\.\/files\//, 'url(fonts/') + '\n';
    });
  };
  take('@fontsource-variable/nunito', 'wght.css', /^nunito-(latin|latin-ext|vietnamese)-wght-normal$/);
  take('@fontsource/baloo-2', '700.css', /^baloo-2-(latin|latin-ext|vietnamese)-700-normal$/);
  take('@fontsource/baloo-2', '800.css', /^baloo-2-(latin|latin-ext|vietnamese)-800-normal$/);
  fs.writeFileSync(path.join(OUT, 'assets', 'fonts.css'), fontCss);
}

function writeSitemap() {
  const byKey = {};
  urls.forEach((u) => { byKey[u.lang + ':' + u.dir] = u; });
  const rows = urls.map((u) => {
    const en = u.lang === 'en' ? u.dir : u.altDir, vi = u.lang === 'vi' ? u.dir : u.altDir;
    return '  <url><loc>' + esc(abs(u.dir)) + '</loc>' + (u.lastmod ? '<lastmod>' + u.lastmod + '</lastmod>' : '') +
      '<xhtml:link rel="alternate" hreflang="en" href="' + esc(abs(en)) + '"/><xhtml:link rel="alternate" hreflang="vi" href="' + esc(abs(vi)) + '"/>' +
      '<xhtml:link rel="alternate" hreflang="x-default" href="' + esc(abs(en)) + '"/></url>';
  }).join('\n');
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + rows + '\n</urlset>\n');
  fs.writeFileSync(path.join(OUT, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + site.url + '/sitemap.xml\n');
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
  loadLessons();
  const about = {};
  LANGS.forEach((l) => { about[l] = loadPage(l, 'about'); });
  if (errors.length) report();

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  copyAssets();

  LANGS.forEach((lang) => {
    homePage(lang);
    grades.forEach((g) => {
      gradePage(lang, g);
      if (g.status === 'full') g.chapters.filter((c) => c.lessons.length).forEach((c) => chapterPage(lang, c));
    });
    lessons.forEach((ls) => lessonPage(lang, ls));
    if (about[lang]) aboutPage(lang, about[lang]);
    searchIndex(lang);
  });

  fs.writeFileSync(path.join(OUT, '404.html'), notFoundHtml());
  writeSitemap();
  report();
  console.log('Dựng xong: ' + lessons.length + ' bài × 2 ngôn ngữ, ' + grades.length + ' lớp -> ' + path.relative(process.cwd(), OUT) + '/');
}

main();
