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
const { worksheet, WS_DIR, WS_LABEL } = require('./worksheet.js');

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
  en: { prefix: '', gradeSlug: (n) => 'grade-' + n, about: 'about', paper: 'learn-on-paper', parents: 'parents', week: 'this-week', exams: 'exams', htmlLang: 'en', locale: 'en-US', name: 'English' },
  vi: { prefix: 'vi', gradeSlug: (n) => 'lop-' + n, about: 'gioi-thieu', paper: 'hoc-tren-giay', parents: 'phu-huynh', week: 'bai-cua-tuan', exams: 'on-thi', htmlLang: 'vi', locale: 'vi-VN', name: 'Tiếng Việt' }
};
const LEVEL = (n) => (n <= 5 ? 'primary' : n <= 9 ? 'middle' : 'high');
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const grades = cfg.grades || [];
// Exam tracks (SAT, AP, IB ...) behave like extra "grades" that live under /exams/<id>/ (vi: /vi/on-thi/<id>/).
// An exam with "link" only points at a chapter that already exists inside a grade (grade 10 entrance, THPT).
const exams = cfg.exams || [];
const examTracks = exams.filter((e) => !e.link);
examTracks.forEach((e) => { e.exam = true; e.n = e.id; if (!ID_RE.test(e.id)) fail('kì thi "' + e.id + '": id không hợp lệ.'); });
const tracks = grades.concat(examTracks);
const gName = (lang, g) => (g.exam ? g[lang] : UI[lang].grade(g.n));
const gFolder = (g) => (g.exam ? 'exams/' + g.id : 'g' + g.n);
const lessons = []; // only lessons that have content in both languages
const byId = {};

tracks.forEach((g) => {
  g.level = g.exam ? 'exam' : LEVEL(g.n);
  g.chapters.forEach((ch, ci) => {
    if (!ID_RE.test(ch.id)) fail('chương "' + ch.id + '": id không hợp lệ.');
    ch.number = ci + 1;
    ch.grade = g;
    ch.lessons = ch.lessons || [];
    ch.planned = ch.lessons.slice();
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
const examsDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].exams);
const gradeDir = (lang, g) => (g.exam ? px.join(examsDir(lang), g.id) : px.join(LANG[lang].prefix, LANG[lang].gradeSlug(g.n)));
const chapterDir = (lang, ch) => px.join(gradeDir(lang, ch.grade), ch.id);
const lessonDir = (lang, ls) => px.join(chapterDir(lang, ls.chapter), ls.id);
const aboutDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].about);
const paperDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].paper);
const parentsDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].parents);
const weekDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].week);
const abs = (dir) => site.url + '/' + (dir ? dir + '/' : '');
const other = (lang) => (lang === 'en' ? 'vi' : 'en');

const missing = [];
function loadLessons() {
  tracks.forEach((g) => {
    g.chapters.forEach((ch) => {
      ch.lessons = ch.lessons.filter((ls) => {
        ls.content = {};
        let ok = true;
        LANGS.forEach((lang) => {
          const rel = 'content/' + lang + '/' + gFolder(g) + '/' + ls.id + '.md';
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
            rendered = render(body, { marked, katex, lang, paper: meta.type === 'paper', warn: (m) => warn(rel + ': ' + m) });
          } catch (e) { fail(rel + ': ' + e.message); return; }
          ls.content[lang] = { meta, rendered, rel, body, modified: isoDay(gitDate(rel)), words: body.length };
        });
        return ok && ls.content.en && ls.content.vi;
      });
      ch.lessons.forEach((ls) => lessons.push(ls));
    });
    if (g.exam) g.status = g.chapters.some((c) => c.lessons.length) ? 'full' : 'roadmap';
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
  return html.replace(/href="(lesson|grade|exam):([^"]*)"/g, (m, kind, id) => {
    let target;
    if (kind === 'lesson' && byId[id] && lessons.indexOf(byId[id]) !== -1) target = lessonDir(lang, byId[id]);
    if (kind === 'grade') { const g = grades.find((x) => String(x.n) === id); if (g) target = gradeDir(lang, g); }
    if (kind === 'exam') { const e = exams.find((x) => x.id === id); if (id === '') target = examsDir(lang); else if (e) target = examTarget(lang, e); }
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
/* Print and share buttons shown near the top of every page (lessons also get the worksheet link). */
function pageActions(lang, d, o) {
  const T = UI[lang]; o = o || {};
  return '<p class="ws-link">' + (o.before || '') +
    '<button type="button" class="btn btn-outline print-lesson" onclick="window.print()">' + (o.before ? '📄 ' : '🖨 ') + esc(o.lesson ? T.printLesson : T.printPage) + '</button> ' +
    '<button type="button" class="btn btn-outline share-lesson" data-copied="' + esc(T.copied) + '">🔗 ' + esc(T.share) + '</button>' +
    (o.why ? ' <a class="ws-why" href="' + relDir(d, paperDir(lang)) + '">' + esc(T.paperWhy) + '</a>' : '') + '</p>\n';
}

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
    o.side ? '<style>@page :right { @bottom-center { content: "Step by step"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } } @page :left { @bottom-center { content: "' + T.motto + '"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } }</style>' : '',
    '<script>(function(){var r=document.documentElement;r.classList.add("js");try{var t=localStorage.getItem("lm-theme");if(t)r.setAttribute("data-theme",t)}catch(e){}})()</script>'
  ].concat((o.jsonld || []).map(ldTag)).filter(Boolean).join('\n');

  const switchLink = '<a class="lang-btn" href="' + relDir(d, o.altDir) + '" hreflang="' + altLang + '" lang="' + altLang + '" data-lang="' + altLang + '" title="' + esc(T.switchTitle) + '">' + icon('globe', 18) + '<span>' + LANG[altLang].name + '</span><b class="lang-short" aria-hidden="true">' + altLang.toUpperCase() + '</b></a>';

  const mainLinks = '<a href="' + relDir(d, homeDir(lang)) + '#grades">' + esc(T.allGrades) + '</a><a href="' + relDir(d, examsDir(lang)) + '">' + esc(T.examsNav) + '</a><a href="' + relDir(d, paperDir(lang)) + '">' + esc(T.paper) + '</a><a href="' + relDir(d, parentsDir(lang)) + '">' + esc(T.parents) + '</a><a href="' + relDir(d, aboutDir(lang)) + '">' + esc(T.about) + '</a>';
  // the drawer (phones, tablets held upright): the main menu first, then the lessons of this grade
  const drawerTop = '<div class="side-top"><span>Menu</span><button id="menu-close" class="icon-btn side-close" type="button" aria-label="' + esc(T.closeMenu) + '" hidden>✕</button></div>\n<nav class="side-main" aria-label="' + esc(T.mainNav) + '">' + mainLinks + '</nav>\n';
  const side = (o.side
    ? '<aside id="sidebar" class="sidebar" aria-label="' + esc(T.lessonsLabel) + '">\n' + drawerTop + '<p class="side-title">' + esc(gName(lang, o.side.grade)) + '</p>\n<nav id="nav" aria-label="' + esc(T.chaptersAndLessons) + '">\n' + navHtml(lang, d, o.side.grade, o.side.lesson, o.side.chapter) + '\n</nav>\n</aside>\n'
    : '<aside id="sidebar" class="sidebar nav-only" aria-label="' + esc(T.mainNav) + '">\n' + drawerTop + '</aside>\n') + '<div id="scrim" class="scrim" hidden></div>\n';

  const bodyCls = ['lvl-' + (o.level || 'home'), o.side ? 'has-side' : ''].filter(Boolean).join(' ');
  return '<!doctype html>\n<html lang="' + L.htmlLang + '" data-root="' + esc(rel0(d, L.prefix)) + '">\n<head>\n' + head + '\n</head>\n<body class="' + bodyCls + '">\n' +
    '<a class="skip" href="#main">' + esc(T.skip) + '</a>\n' +
    '<header class="topbar">\n' +
    '  <button id="menu-btn" class="icon-btn" type="button" aria-label="' + esc(o.side ? T.menu : T.openMenu) + '" aria-expanded="false" aria-controls="sidebar" hidden>☰</button>\n' +
    '  <a class="brand" href="' + relDir(d, homeDir(lang)) + '">' + mascot({ cls: 'brand-mark' }) + '<span>Lemon<b>math</b></span></a>\n' +
    '  <nav class="topnav" aria-label="' + esc(T.mainNav) + '">' + mainLinks + '</nav>\n' +
    '  <div class="spacer"></div>\n' +
    '  <button id="search-btn" class="icon-btn" type="button" aria-label="' + esc(T.search) + '" aria-expanded="false" hidden>' + icon('search', 20) + '</button>\n' +
    '  <div class="searchbox" hidden><label class="sr" for="q">' + esc(T.search) + '</label>' + icon('search', 18) + '<input id="q" type="search" placeholder="' + esc(T.searchPh) + '" autocomplete="off" aria-controls="results"><ul id="results" class="results" hidden></ul></div>\n' +
    '  <button id="search-close" class="icon-btn" type="button" aria-label="' + esc(T.closeSearch) + '" hidden>✕</button>\n' +
    '  ' + switchLink + '\n' +
    '  <button id="theme-btn" class="icon-btn" type="button" aria-label="' + esc(T.theme) + '" hidden>' + THEME_ICON + '</button>\n' +
    '</header>\n' +
    '<div class="layout">\n' + side +
    '  <main id="main" class="main" tabindex="-1">\n    <div class="page' + (o.wide ? ' wide' : '') + '">\n' + o.body + '\n    </div>\n  </main>\n</div>\n' +
    '<footer class="footer">\n  ' + mascot({ cls: 'foot-mark' }) + '\n  <p>© ' + YEAR + ' ' + esc(site.name) + ' · ' + esc(T.footer) + '</p>\n' +
    '  <nav aria-label="' + esc(T.aboutNav) + '"><a href="' + relDir(d, aboutDir(lang)) + '">' + esc(T.about) + '</a> · <a href="https://github.com/lemonmathcom/lemonmath/issues">' + esc(T.report) + '</a> · <button type="button" class="foot-print" onclick="window.print()">🖨 ' + esc(T.printPage) + '</button></nav>\n</footer>\n' +
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
    (ch.grade.exam && !n ? '<ul class="planned">' + ch.planned.map((l) => '<li>' + esc(l[lang]) + '</li>').join('') + '</ul>' : '') +
    (n ? '<div class="bar" hidden><i></i></div><span class="card-meta" data-base="' + esc(T.lessonCount(n)) + '" data-complete="' + esc(T.pctComplete) + '">' + esc(T.lessonCount(n)) + '</span>' : '<span class="card-meta soon">' + esc(T.soon) + '</span>') +
    '</' + tag + '>';
}

const linkedCh = (e) => grades.find((g) => g.n === e.link.grade).chapters.find((c) => c.id === e.link.chapter);
const examTarget = (lang, e) => (e.link ? (linkedCh(e).lessons.length && linkedCh(e).grade.status === 'full' ? chapterDir(lang, linkedCh(e)) : gradeDir(lang, linkedCh(e).grade)) : gradeDir(lang, e));
const examLessons = (e) => (e.link ? linkedCh(e).lessons : [].concat(...e.chapters.map((c) => c.lessons)));
function examCard(lang, d, e) {
  const T = UI[lang];
  const ls = examLessons(e), n = ls.length;
  return '<a class="card ccard ecard" href="' + relDir(d, examTarget(lang, e)) + '" data-lessons="' + ls.map((l) => l.id).join(',') + '">' +
    '<span class="cicon">' + icon(e.icon, 28) + '</span>' +
    '<h3>' + esc(e[lang]) + '</h3><p class="efacts">' + esc(e.facts[lang]) + '</p><p>' + esc(e.summary[lang]) + '</p>' +
    (n ? '<div class="bar" hidden><i></i></div><span class="card-meta" data-base="' + esc(T.lessonCount(n)) + '" data-complete="' + esc(T.pctComplete) + '">' + esc(T.lessonCount(n)) + '</span>' : '<span class="card-meta soon">' + esc(T.examRoadmap) + '</span>') +
    '</a>';
}

function examsPage(lang, intro) {
  const T = UI[lang], d = examsDir(lang), alt = examsDir(other(lang));
  const block = (key) => {
    const list = exams.filter((e) => e.group === key);
    return '<section class="level lvl-exam" aria-labelledby="eg-' + key + '"><div class="level-head"><h2 id="eg-' + key + '">' + esc(T.examGroups[key][0]) + '</h2><p>' + esc(T.examGroups[key][1]) + '</p></div>' +
      '<div class="cards">' + list.map((e) => examCard(lang, d, e)).join('\n') + '</div></section>';
  };
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n' +
    '<header class="gradehead"><div><p class="eyebrow">' + esc(T.examsEyebrow) + '</p><h1>' + esc(intro.meta.title) + '</h1><p class="lead">' + esc(intro.meta.description) + '</p></div>' + mascot({ cls: 'grade-mascot', mood: 'wow' }) + '</header>\n' + pageActions(lang, d) +
    ['bank', 'vn', 'intl', 'skills'].map(block).join('\n') +
    '\n<div class="prose">\n' + resolveLinks(intro.rendered.html, d, lang, 'exams') + '\n</div>';
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: intro.meta.title + ' | ' + site.name, description: intro.meta.description, body, wide: true, level: 'exam',
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.examsNav, url: abs(d) }])]
  }), intro.modified);
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
    '<section id="exams" class="grades" aria-labelledby="exams-h"><h2 id="exams-h">' + esc(T.examsHome) + '</h2>\n<p class="lead">' + esc(T.examsHomeLead) + ' <a href="' + relDir(d, examsDir(lang)) + '">' + esc(T.examsAll) + ' →</a></p>\n<div class="cards">' + exams.map((e) => examCard(lang, d, e)).join('\n') + '</div></section>\n' +
    '<section class="features" aria-labelledby="why-h"><h2 id="why-h">' + esc(T.why) + '</h2><div class="feat-grid">' +
    T.features.map((f) => '<div class="feat"><span class="feat-ico">' + icon(f[0], 28) + '</span><h3>' + esc(f[1]) + '</h3><p>' + esc(f[2]) + '</p></div>').join('') + '</div></section>\n' +
    '<section class="featured" aria-labelledby="g10-h"><h2 id="g10-h">' + esc(T.featuredG10) + '</h2><div class="cards">' + g10.chapters.map((ch) => chapterCard(lang, d, ch, true)).join('\n') + '</div></section>';
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: T.homeTitle, description: T.homeDesc, body, wide: true,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs(d), inLanguage: LANG[lang].htmlLang }]
  }), maxDay(lessons.map((l) => l.content[lang].modified)));
}

const lc = (t) => (/^\p{Lu}\p{Ll}/u.test(t) && !/^(Oxyz|Bayes|Viète|Pythag)/.test(t) ? t.charAt(0).toLocaleLowerCase('vi') + t.slice(1) : t);
function gradePage(lang, g) {
  const T = UI[lang], d = gradeDir(lang, g), alt = gradeDir(other(lang), g);
  const full = g.status === 'full' && g.chapters.some((c) => c.lessons.length);
  const ix = examTracks.indexOf(g);
  const prev = g.exam ? examTracks[ix - 1] : grades.find((x) => x.n === g.n - 1), next = g.exam ? examTracks[ix + 1] : grades.find((x) => x.n === g.n + 1);
  const total = [].concat(...g.chapters.map((c) => c.lessons)).length;
  const upCrumb = g.exam ? '<span aria-hidden="true">›</span><a href="' + relDir(d, examsDir(lang)) + '">' + esc(T.examsNav) + '</a>' : '';
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a>' + upCrumb + '</nav>\n' +
    '<header class="gradehead"><div><p class="eyebrow">' + esc(T.levels[g.level][0]) + '</p><h1>' + esc(gName(lang, g)) + '</h1>' +
    '<p class="lead">' + esc(g.exam ? g.facts[lang] + ' ' + g.summary[lang] : full ? T.gradeFullLead(total, g.chapters.length, lc(g.chapters[0][lang]), lc(g.chapters.filter((c) => c.lessons.length).slice(-1)[0][lang])) : T.gradeRoadmapLead(g.chapters.length)) + '</p></div>' + mascot({ cls: 'grade-mascot', mood: full ? 'happy' : 'wow' }) + '</header>\n' + pageActions(lang, d) +
    (full ? '' : g.exam ? '<p class="soon-note">' + esc(T.examSoonNote) + '</p>\n' : '<p class="soon-note">' + esc(T.soonNote) + ' <a href="' + relDir(d, gradeDir(lang, grades.find((x) => x.status === 'full'))) + '">' + esc(T.tryG10) + '</a></p>\n') +
    '<div class="cards">' + g.chapters.map((ch) => chapterCard(lang, d, ch, full && ch.lessons.length > 0)).join('\n') + '</div>\n' +
    '<nav class="pager" aria-label="' + esc(T.gradeNav) + '">' +
    (prev ? '<a class="pager-prev" href="' + relDir(d, gradeDir(lang, prev)) + '"><small>← ' + esc(T.prev) + '</small><span>' + esc(gName(lang, prev)) + '</span></a>' : '<span></span>') +
    (next ? '<a class="pager-next" href="' + relDir(d, gradeDir(lang, next)) + '"><small>' + esc(T.next) + ' →</small><span>' + esc(gName(lang, next)) + '</span></a>' : '<span></span>') + '</nav>';
  const gTitle = g.exam ? T.examTitle(g[lang]) : T.gradeTitle(g.n);
  const title = gTitle + ' | ' + site.name;
  const desc = g.exam ? clip(g.facts[lang] + ' ' + g.summary[lang], 160) : full ? T.gradeFullDesc(g.n, total, g.chapters.length) : T.gradeRoadmapDesc(g.n, g.chapters.length);
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title, description: desc, body, level: g.level, noindex: !full,
    side: full ? { grade: g } : null,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: gName(lang, g), url: abs(d) }])].concat(full ? [{
      '@context': 'https://schema.org', '@type': 'Course', name: gTitle, description: desc, url: abs(d), inLanguage: LANG[lang].htmlLang,
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
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + relDir(d, gradeDir(lang, g)) + '">' + esc(gName(lang, g)) + '</a></nav>\n' +
    '<header class="chaphead"><span class="cicon big">' + icon(ch.icon, 40) + '</span><div><p class="eyebrow">' + esc(T.chapterN(ch.number)) + '</p><h1>' + esc(ch[lang]) + '</h1><p class="lead">' + esc(ch.summary[lang]) + '</p></div></header>\n' + pageActions(lang, d) +
    '<ol class="lesson-list">\n' + items + '\n</ol>';
  const title = (g.exam ? ch[lang] + ' | ' + g[lang] : T.chapterTitle(ch.number, ch[lang], g.n)) + ' | ' + site.name;
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title, description: clip(ch.summary[lang] + ' ' + (g.exam ? g[lang] + '.' : T.chapterDescTail(g.n)), 160), body, level: g.level,
    side: { grade: g, chapter: ch.id },
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: gName(lang, g), url: abs(gradeDir(lang, g)) }, { name: ch[lang], url: abs(d) }])]
  }), maxDay(ch.lessons.map((l) => l.content[lang].modified)));
}

/* Real exam paper (type: paper): where it comes from, how long it takes, and a timer to sit it like the real exam. */
const PAPER_UI = {
  vi: { src: 'Nguồn đề', via: 'Đề gốc đăng trên', time: 'Thời gian làm bài', min: 'phút', start: 'Bắt đầu làm bài và bấm giờ', left: 'Còn lại', stop: 'Nộp bài', up: 'Hết giờ! Bài trắc nghiệm đã được tự động nộp. Hãy dừng bút và tự chấm phần tự luận theo lời giải.',
    how: 'Cách làm: bấm nút bắt đầu, làm bài trên giấy (phần trắc nghiệm chọn ngay trên trang). Khi hết giờ hoặc bấm Nộp bài, bạn sẽ thấy điểm trắc nghiệm, đáp án và lời giải; phần tự luận hãy tự chấm theo hướng dẫn rồi nhập điểm vào ô ở mỗi bài.',
    rights: 'Đề thi thuộc về đơn vị ra đề; Lemonmath trình bày lại để học sinh luyện tập, kèm lời giải và hướng dẫn chấm. Nếu bạn là tác giả và muốn gỡ đề, hãy liên hệ Lemonmath.', total: 'Tổng điểm tự chấm', of: 'trên' },
  en: { src: 'Source', via: 'Original paper posted on', time: 'Time allowed', min: 'minutes', start: 'Start the paper and the timer', left: 'Time left', stop: 'Hand in', up: 'Time is up! The objective part has been handed in automatically. Put your pen down and mark the written part using the solutions.',
    how: 'How it works: press start and work on paper (choose the objective answers on this page). When time runs out or you hand in, you see your objective score, the answers and the worked solutions; mark the written problems yourself with the marking guide and type your points into the box under each problem.',
    rights: 'The paper belongs to the body that set it; Lemonmath presents it for practice, with worked solutions and a marking guide. If you are the author and want it removed, please contact Lemonmath.', total: 'Your total (self-marked)', of: 'out of' }
};
function paperHead(lang, meta) {
  const P = PAPER_UI[lang];
  let host = '';
  try { host = meta.link ? new URL(meta.link).hostname.replace(/^www\./, '') : ''; } catch (e) { warn('link nguồn không hợp lệ: ' + meta.link); }
  return '<aside class="paper-head" data-min="' + esc(meta.minutes || '') + '" data-up="' + esc(P.up) + '" data-left="' + esc(P.left) + '" data-total="' + esc(P.total) + '" data-of="' + esc(P.of) + '">' +
    '<p class="paper-src"><b>' + P.src + ':</b> ' + esc(meta.source || '') + (meta.year ? ' (' + esc(meta.year) + ')' : '') +
    (meta.link ? ' · ' + P.via + ' <a href="' + esc(meta.link) + '" rel="nofollow noopener" target="_blank">' + esc(host) + '</a>' : '') + '</p>' +
    '<p class="paper-time"><b>' + P.time + ':</b> ' + esc(meta.minutes || '') + ' ' + P.min + '</p>' +
    '<p class="paper-how">' + P.how + '</p>' +
    '<p class="paper-actions"><button type="button" class="btn paper-start" hidden>⏱ ' + P.start + '</button></p>' +
    '<div class="paper-timer" hidden role="timer" aria-live="off"><span class="pt-label">' + P.left + '</span> <b class="pt-clock">--:--</b> <button type="button" class="btn btn-outline paper-stop">' + P.stop + '</button></div>' +
    '<p class="paper-rights">' + P.rights + '</p></aside>\n';
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
  const isPaper = meta.type === 'paper';
  const metaLine = esc(isPaper ? (lang === 'vi' ? 'Đề' : 'Paper') : T.lesson) + ' ' + ls.number + (meta.minutes && !isPaper ? ' · ' + meta.minutes + ' ' + T.minRead : '') +
    (C.modified ? ' · ' + esc(T.updated) + ' <time datetime="' + C.modified + '">' + new Date(C.modified + 'T00:00:00Z').toLocaleDateString(LANG[lang].locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) + '</time>' : '');
  const pager = '<nav class="pager" aria-label="' + esc(T.lessonNav) + '">\n' +
    (prev ? '<a class="pager-prev" href="' + link(lessonDir(lang, prev)) + '"><small>← ' + esc(T.prev) + '</small><span>' + esc(prev.content[lang].meta.title) + '</span></a>' : '<span></span>') + '\n' +
    (next ? '<a class="pager-next" href="' + link(lessonDir(lang, next)) + '"><small>' + esc(T.next) + ' →</small><span>' + esc(next.content[lang].meta.title) + '</span></a>'
      : '<a class="pager-next" href="' + link(gradeDir(lang, g)) + '"><small>' + esc(T.end) + '</small><span>' + esc(T.backToGrade) + '</span></a>') + '\n</nav>';
  const body = '<article class="lesson">\n<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + link(homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + link(gradeDir(lang, g)) + '">' + esc(gName(lang, g)) + '</a><span aria-hidden="true">›</span><a href="' + link(chapterDir(lang, ch)) + '">' + esc(T.chapterN(ch.number) + ': ' + ch[lang]) + '</a></nav>\n' +
    '<h1>' + esc(meta.title) + '</h1>\n<p class="meta">' + metaLine + '</p>\n' + (meta.type === 'paper' ? paperHead(lang, meta) : '') +
    pageActions(lang, d, { lesson: true, why: true, before: ls.ws && ls.ws[lang] ? '<a class="btn btn-outline" href="' + WS_DIR[lang] + '/">🖨 ' + esc(isPaper ? WS_LABEL.paper[lang] : WS_LABEL[lang]) + '</a> ' : '' }) + toc + '\n' +
    '<div class="prose">\n' + resolveLinks(r.html, d, lang, C.rel) + '\n</div>\n' +
    '<div class="lesson-actions"><button id="done-btn" class="btn btn-outline" type="button" aria-pressed="false" data-lesson="' + ls.id + '" data-on="' + esc(T.markedDone) + '" data-off="' + esc(T.markDone) + '" hidden><span class="chk" aria-hidden="true"></span><span class="done-text">' + esc(T.markDone) + '</span></button></div>\n' +
    '</article>\n' + pager;
  const learning = {
    '@context': 'https://schema.org', '@type': 'LearningResource', name: meta.title, description: meta.description, url: abs(d),
    inLanguage: LANG[lang].htmlLang, learningResourceType: isPaper ? 'exam paper' : 'lesson', educationalLevel: gName(lang, g),
    isPartOf: { '@type': 'Course', name: ch[lang], url: abs(chapterDir(lang, ch)), provider: { '@type': 'Organization', name: site.name, url: abs(homeDir(lang)) } }
  };
  if (meta.minutes) learning.timeRequired = 'PT' + meta.minutes + 'M';
  if (C.modified) learning.dateModified = C.modified;
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: meta.title + ' | ' + gName(lang, g) + ' | ' + site.name, description: meta.description, ogType: 'article', body,
    math: r.math > 0, level: g.level, side: { grade: g, lesson: ls.id, chapter: ch.id },
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: gName(lang, g), url: abs(gradeDir(lang, g)) }, { name: ch[lang], url: abs(chapterDir(lang, ch)) }, { name: meta.title, url: abs(d) }]), learning]
  }), C.modified);
}

function worksheetPage(lang, ls) {
  const C = ls.content[lang], d = lessonDir(lang, ls);
  const r = worksheet({
    lang, md: C.body, meta: C.meta, grade: ls.grade.n, gradeLabel: gName(lang, ls.grade), number: ls.number, lessonUrl: abs(d), backHref: '../',
    assets: relFile(px.join(d, WS_DIR[lang]), 'assets') + '/',
    renderMd: (md) => resolveLinks(render(md, { marked, katex, lang, paper: C.meta.type === 'paper', warn: (m) => warn(C.rel + ' (phiếu in): ' + m) }).html, px.join(d, WS_DIR[lang]), lang, C.rel + ' (phiếu in)')
  });
  if (!r) return false;
  const file = path.join(OUT, d, r.dir, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, r.html);
  return true;
}

function aboutPage(lang, page, dirFn) {
  dirFn = dirFn || aboutDir;
  const T = UI[lang], d = dirFn(lang), alt = dirFn(other(lang));
  const body = '<article class="lesson about"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(page.meta.title) + '</h1>\n' + pageActions(lang, d) + '<div class="prose">\n' + resolveLinks(page.rendered.html, d, lang, 'about') + '\n</div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: page.meta.title + ' | ' + site.name, description: page.meta.description, body, math: false,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: page.meta.title, url: abs(d) }])] }), page.modified);
}

function searchIndex(lang) {
  const T = UI[lang];
  const rows = [];
  rows.push({ t: T.examsNav, s: T.examsHome, u: examsDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  tracks.forEach((g) => {
    const full = g.status === 'full' && g.chapters.some((c) => c.lessons.length);
    rows.push({ t: gName(lang, g), s: T.levels[g.level][0], u: gradeDir(lang, g).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
    g.chapters.forEach((ch) => {
      const base = LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0;
      rows.push({ t: ch[lang], s: gName(lang, g) + ' · ' + T.chapterN(ch.number), u: (full && ch.lessons.length ? chapterDir(lang, ch) : gradeDir(lang, g)).slice(base) });
      ch.lessons.forEach((ls) => rows.push({ t: ls.content[lang].meta.title, s: gName(lang, g) + ' · ' + ch[lang], u: lessonDir(lang, ls).slice(base) }));
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
  const paper = {}, parents = {}, week = {};
  LANGS.forEach((l) => { about[l] = loadPage(l, 'about'); paper[l] = loadPage(l, 'learn-on-paper'); parents[l] = loadPage(l, 'parents'); week[l] = loadPage(l, 'this-week'); });
  const examsIntro = {};
  LANGS.forEach((l) => { examsIntro[l] = loadPage(l, 'exams'); });
  if (errors.length) report();

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  copyAssets();

  LANGS.forEach((lang) => {
    homePage(lang);
    examsPage(lang, examsIntro[lang]);
    tracks.forEach((g) => {
      gradePage(lang, g);
      if (g.status === 'full') g.chapters.filter((c) => c.lessons.length).forEach((c) => chapterPage(lang, c));
    });
    lessons.forEach((ls) => { ls.ws = ls.ws || {}; ls.ws[lang] = worksheetPage(lang, ls); lessonPage(lang, ls); });
    if (about[lang]) aboutPage(lang, about[lang]);
    if (paper[lang]) aboutPage(lang, paper[lang], paperDir);
    if (parents[lang]) aboutPage(lang, parents[lang], parentsDir);
    if (week[lang]) aboutPage(lang, week[lang], weekDir);
    searchIndex(lang);
  });

  fs.writeFileSync(path.join(OUT, '404.html'), notFoundHtml());
  writeSitemap();
  report();
  console.log('Dựng xong: ' + lessons.length + ' bài × 2 ngôn ngữ, ' + grades.length + ' lớp, ' + exams.length + ' kì thi -> ' + path.relative(process.cwd(), OUT) + '/');
}

main();
