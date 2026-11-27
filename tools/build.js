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
 *   manifest.webmanifest (per language), sw.js, offline.html (install as an app, read offline)
 *
 * Lessons live in content/en/g<N>/<lesson-id>.md and content/vi/g<N>/<lesson-id>.md.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const crypto = require('crypto');
const zlib = require('zlib');
const katex = require('katex');
const { marked } = require('marked');
const { render, esc, parseQuiz, optCols } = require('./render.js');
const { mascot, icon } = require('./art.js');
const { UI } = require('./ui.js');
const { worksheet, qrSvg, WS_DIR, WS_LABEL } = require('./worksheet.js');
const { libraryDir, libraryText, renderLibrary } = require('./library.js');
const { questionBankDir, questionBankText, writeQuestionBank, renderQuestionBank } = require('./question-bank.js');
const { slim, addScripts } = require('./slim-math.js');

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
  en: { prefix: '', gradeSlug: (n) => 'grade-' + n, about: 'about', privacy: 'privacy', contact: 'contact', paper: 'learn-on-paper', parents: 'parents', week: 'this-week', offline: 'offline', exams: 'exams', teachers: 'teachers', join: 'join', classroom: 'classroom', homework: 'homework', journey: 'my-progress', formulas: 'formulas', arena: 'arena', groups: 'study-groups', levels: { primary: 'primary', middle: 'middle-school', high: 'high-school' }, htmlLang: 'en', locale: 'en-US', name: 'English' },
  vi: { prefix: 'vi', gradeSlug: (n) => 'lop-' + n, about: 'gioi-thieu', privacy: 'bao-mat', contact: 'lien-he', paper: 'hoc-tren-giay', parents: 'phu-huynh', week: 'bai-cua-tuan', offline: 'hoc-offline', exams: 'on-thi', teachers: 'giao-vien', join: 'vao-lop', classroom: 'lop-hoc', homework: 'lam-bai', journey: 'hanh-trinh', formulas: 'cong-thuc', arena: 'dau-truong', groups: 'nhom-hoc', levels: { primary: 'tieu-hoc', middle: 'thcs', high: 'thpt' }, htmlLang: 'vi', locale: 'vi-VN', name: 'Tiếng Việt' }
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
/* Search results show about 60 characters of a title: keep the subject (what people type), drop the brand when there is no room. */
const seoTitle = (t) => (t.length + 3 + site.name.length <= 62 ? t + ' | ' + site.name : t);
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
const privacyDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].privacy);
const contactDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].contact);
const paperDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].paper);
const parentsDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].parents);
const weekDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].week);
const teachersDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].teachers);
const offlineDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].offline);
const levelDir = (lang, lvl) => px.join(LANG[lang].prefix, LANG[lang].levels[lvl]);
/* Offline packs: one per language and grade (or exam track), e.g. "vi-g9", "en-sat". See writePwa(). */
const packKey = (lang, g) => lang + '-' + (g.exam ? g.id : 'g' + g.n);
const isFull = (g) => g.status === 'full' && g.chapters.some((c) => c.lessons.length);
/* The "save for offline" box; assets/site.js fills it in (it stays hidden where the browser cannot save pages). */
function offBox(lang, d, g, ch) {
  return '<div class="off-box" data-pack="' + packKey(lang, g) + '"' + (ch ? ' data-ch="' + ch.id + '"' : '') + ' data-hub="' + relDir(d, offlineDir(lang)) + '" hidden></div>\n';
}
const joinDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].join);
/* Live class test: address of the realtime database (Firebase Realtime Database, used through its REST API). Empty = the tool stays hidden. */
const LIVE_DB = String(process.env.LIVE_DB || (cfg.site.live && cfg.site.live.firebase) || '').replace(/\/+$/, '');
/* My classes and homework with a time window: address of the classroom API (api/, a Cloudflare Worker). Empty = both pages stay out of the site.
 * The two pages sit at the same depth as the teachers' corner, so the question bank's relative links work the same there. */
const API_URL = String(process.env.API_URL || cfg.site.api || '').replace(/\/+$/, '');
const classroomDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].classroom);
const homeworkDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].homework);
const journeyDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].journey);
const formulasDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].formulas);
const arenaDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].arena);
const groupsDir = (lang) => px.join(LANG[lang].prefix, LANG[lang].groups);
const abs = (dir) => site.url + '/' + (dir ? dir + '/' : '');
const other = (lang) => (lang === 'en' ? 'vi' : 'en');

/*
 * How formulas reach the reader (26/11/2026), "site" → "math" in data/curriculum.json:
 *   "mode": "prerender"  every formula drawn at build time (as before)
 *   "mode": "hybrid"     only the first "keep" formulas of each page are drawn at build time; the rest stay as TeX
 *                        and assets/math.js draws them in the browser (tools/slim-math.js). Pages ~6× smaller.
 *   "pilot": [10]        also writes a hybrid copy of those grades at <grade folder>-thu (noindex, not in the
 *                        sitemap), to compare with the normal pages on a real phone before switching.
 */
const MATH = Object.assign({ mode: 'prerender', keep: 25, pilot: [] }, cfg.site.math || {});
const HYBRID = MATH.mode === 'hybrid';
/* Size fuse: GitHub Pages officially takes sites up to 1 GB. Warn from 800 MB; stop at 950 MB (the site online stays as it was). */
const SIZE_WARN_MB = 800, SIZE_STOP_MB = 950;
/*
 * Hosting ("site" → "hosting" in data/curriculum.json, 26/11/2026). The same dist/ goes to GitHub Pages and to
 * Cloudflare Workers (site/wrangler.jsonc). "pages": false once lemonmath.com is served by Cloudflare and GitHub
 * Pages is switched off: the 1 GB fuse above then no longer applies. Cloudflare Workers takes "maxFiles" files per
 * version (20,000 on the free plan, 100,000 on Workers Paid, 5 USD/month) and 25 MiB per file. Stage 3 starts when the
 * build warns at 75% of maxFiles: switch to Workers Paid (set maxFiles to 100000) or build the exam pages from data on
 * request instead of as files.
 */
const HOST = Object.assign({ pages: true, maxFiles: 20000 }, cfg.site.hosting || {});
const FILE_MAX_BYTES = 25 * 1048576;

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

function offlinePage(lang, page) {
  const T = UI[lang], d = offlineDir(lang), alt = offlineDir(other(lang));
  const body = '<article class="lesson about"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(page.meta.title) + '</h1>\n' +
    '<p class="lead">' + esc(page.meta.lead || page.meta.description) + '</p>\n' +
    '<section id="off-hub" class="off-hub" aria-labelledby="off-hub-h"><h2 id="off-hub-h">' + esc(T.offHubH) + '</h2><noscript><p>' + esc(T.offNoJs) + '</p></noscript></section>\n' +
    '<div class="prose">\n' + resolveLinks(page.rendered.html, d, lang, 'offline') + '\n</div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: page.meta.title + ' | ' + site.name, description: page.meta.description, body, math: false,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: page.meta.title, url: abs(d) }])] }), page.modified);
}
/*
 * "Formulas to remember": the bilingual formula cards (data/formulas.json, images in assets/img/formulas/).
 * Formulas are drawn with KaTeX on the page; each card also has its picture (1080x1350) to save, print or share.
 */
const FC_STRANDS = { M: ['Số và nền tảng', 'Number and foundations'], A: ['Đại số', 'Algebra'], B: ['Hình học', 'Geometry'], C: ['Lượng giác', 'Trigonometry'], D: ['Giải tích', 'Calculus'], E: ['Thống kê và xác suất', 'Statistics and probability'] };
function formulasPage(lang) {
  const file = path.join(ROOT, 'data', 'formulas.json');
  if (!fs.existsSync(file)) return;
  const cards = JSON.parse(fs.readFileSync(file, 'utf8'));
  const T = UI[lang], d = formulasDir(lang), alt = formulasDir(other(lang)), L = lang === 'vi' ? 0 : 1;
  const tex = (x) => { try { return katex.renderToString(x, { displayMode: true, throwOnError: true, strict: 'ignore' }); } catch (e) { fail('data/formulas.json: ' + e.message); return ''; } };
  const groups = Object.keys(FC_STRANDS).map((k) => ({ k, name: FC_STRANDS[k][L], cards: cards.filter((c) => c.code[0] === k) })).filter((g) => g.cards.length);
  let body = '<article class="lesson about fc-page"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(T.fcTitle) + '</h1>\n' +
    '<p class="lead">' + esc(T.fcLead) + '</p>\n' + pageActions(lang, d) +
    '<nav class="fc-toc" aria-label="' + esc(T.fcTitle) + '">' + groups.map((g) => '<a href="#fc-' + g.k + '">' + esc(g.name) + ' <span>(' + g.cards.length + ')</span></a>').join('') + '</nav>\n';
  groups.forEach((g) => {
    body += '<section class="fc-strand" id="fc-' + g.k + '"><h2>' + esc(g.name) + '</h2>\n<div class="fc-grid">\n';
    g.cards.forEach((c) => {
      const img = '/assets/img/formulas/' + c.code + '-' + c.slug + '_' + lang.toUpperCase() + '.webp';
      body += '<section class="fc-card" id="' + esc(c.code) + '"><header><span class="fc-code">' + esc(c.code) + '</span> <span class="fc-level">' + esc(c['level_' + lang]) + '</span><h3>' + esc(c['title_' + lang]) + '</h3></header>\n<dl>' +
        c.items.map((it) => { const t = it['tex_' + lang] || it.tex; return '<dt>' + esc(it['label_' + lang]) + '</dt><dd>' + (Array.isArray(t) ? t : [t]).map(tex).join('') + '</dd>'; }).join('') +
        '</dl>\n<p class="fc-tip">🍋 ' + esc(c['tip_' + lang]) + '</p>\n<p class="fc-img"><a href="' + img + '" target="_blank" rel="noopener">🖼 ' + esc(T.fcImage) + '</a></p></section>\n';
    });
    body += '</div></section>\n';
  });
  body += '</article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.fcTitle + ' | ' + site.name, description: T.fcLead, body, math: true,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.fcTitle, url: abs(d) }])] }), isoDay(gitDate('data/formulas.json')));
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

/*
 * Visitor statistics (optional). In data/curriculum.json, under "site":
 *   "analytics": { "cloudflare": "<token>" }   Cloudflare Web Analytics: free, no cookies
 *   "analytics": { "ga4": "G-XXXXXXXXXX" }     Google Analytics 4
 * Nothing is added to the pages while both are empty.
 * Google Search Console (which Google searches bring people in): "verify": { "google": "<code>" }
 * adds the ownership meta tag to the two home pages.
 */
const GVERIFY = (function () {
  const v = (site.verify || {}).google;
  if (!v) return '';
  if (!/^[A-Za-z0-9_-]{20,100}$/.test(v)) { fail('data/curriculum.json: "verify.google" chỉ là đoạn mã trong content="…" của thẻ google-site-verification.'); return ''; }
  return '<meta name="google-site-verification" content="' + v + '">';
})();
const ANALYTICS = (function () {
  const a = site.analytics || {};
  let out = '';
  if (a.cloudflare) {
    if (!/^[a-f0-9]{32}$/.test(a.cloudflare)) fail('data/curriculum.json: "analytics.cloudflare" phải là mã token 32 kí tự (0-9, a-f) của Cloudflare Web Analytics.');
    else out += '<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon=\'{"token": "' + a.cloudflare + '"}\'></script>\n';
  }
  if (a.ga4) {
    if (!/^G-[A-Z0-9]{6,14}$/.test(a.ga4)) fail('data/curriculum.json: "analytics.ga4" phải có dạng "G-XXXXXXXXXX".');
    else out += '<script async src="https://www.googletagmanager.com/gtag/js?id=' + a.ga4 + '"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","' + a.ga4 + '");</script>\n';
  }
  return out;
})();

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
    '<button type="button" class="btn btn-outline print-lesson" onclick="window.lmPrint?lmPrint():print()">' + (o.before ? '📄 ' : '🖨 ') + esc(o.lesson ? T.printLesson : T.printPage) + '</button> ' +
    '<button type="button" class="btn btn-outline share-lesson" data-copied="' + esc(T.copied) + '">🔗 ' + esc(T.share) + '</button>' +
    (o.why ? ' <a class="ws-why" href="' + relDir(d, paperDir(lang)) + '">' + esc(T.paperWhy) + '</a>' : '') + '</p>\n';
}

/* Closing block of every page: an invitation to pass the page on (works without JavaScript through the plain links). */
function spreadHtml(lang, url, title) {
  const T = UI[lang];
  const fb = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
  const mail = 'mailto:?subject=' + encodeURIComponent(T.spreadSubject) + '&body=' + encodeURIComponent(T.spreadBody + '\n' + title + '\n' + url);
  return '<section class="spread" aria-labelledby="spread-h">\n  <div class="spread-in">' + mascot({ cls: 'spread-mark', mood: 'wow' }) + '<div><h2 id="spread-h">' + esc(T.spreadH) + '</h2>\n  <p>' + esc(T.spreadP) + '</p>\n' +
    '  <p class="spread-actions"><button type="button" class="btn share-lesson" data-copied="' + esc(T.copied) + '">🔗 ' + esc(T.spreadShare) + '</button> ' +
    '<a class="btn btn-outline" href="' + esc(fb) + '" target="_blank" rel="noopener nofollow">Facebook</a> ' +
    '<a class="btn btn-outline" href="' + esc(mail) + '">✉ ' + esc(T.spreadMail) + '</a> ' +
    '<button type="button" class="btn btn-outline copy-link" data-copied="' + esc(T.copied) + '" hidden>' + esc(T.spreadCopy) + '</button></p></div></div>\n</section>\n';
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
    API_URL ? '<meta name="lm-api" content="' + esc(API_URL) + '">' : '',
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
    (d === L.prefix ? GVERIFY : ''),
    '<link rel="icon" href="' + FAVICON + '">',
    '<link rel="manifest" href="' + relFile(d, px.join(L.prefix, 'manifest.webmanifest')) + '">',
    '<link rel="apple-touch-icon" href="' + A('assets/icons/apple-touch-icon.png') + '">',
    '<meta name="apple-mobile-web-app-title" content="' + esc(site.name) + '">',
    '<meta name="mobile-web-app-capable" content="yes">',
    '<link rel="preload" as="font" type="font/woff2" crossorigin href="' + A('assets/fonts/nunito-latin-wght-normal.woff2') + '">',
    '<link rel="stylesheet" href="' + A('assets/fonts.css') + '">',
    '<link rel="stylesheet" href="' + A('assets/style.css') + '">',
    ...(o.styles || []).map((file) => '<link rel="stylesheet" href="' + A(file) + '">'),
    o.math ? '<link rel="stylesheet" href="' + A('assets/katex/katex.min.css') + '">' : '',
    o.side ? '<style>@page :right { @bottom-center { content: "Step by step"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } } @page :left { @bottom-center { content: "' + T.motto + '"; font: italic 600 9pt "Nunito Variable", "Nunito", sans-serif; color: #555; } }</style>' : '',
    '<script>(function(){var r=document.documentElement;r.classList.add("js");try{var t=localStorage.getItem("lm-theme");if(t)r.setAttribute("data-theme",t)}catch(e){}})()</script>'
  ].concat((o.jsonld || []).map(ldTag)).filter(Boolean).join('\n');

  const switchLink = '<a class="lang-btn" href="' + relDir(d, o.altDir) + '" hreflang="' + altLang + '" lang="' + altLang + '" data-lang="' + altLang + '" title="' + esc(T.switchTitle) + '">' + icon('globe', 18) + '<span>' + LANG[altLang].name + '</span><b class="lang-short" aria-hidden="true">' + altLang.toUpperCase() + '</b></a>';

  // the top menu shows the main places and keeps the rest under "More"; the drawer (phones, tablets) lists everything
  const NL = (dir, text, extra) => '<a href="' + relDir(d, dir) + (extra || '') + '">' + esc(text) + '</a>';
  const questionBankLink = NL(questionBankDir(lang), questionBankText[lang].title);
  const more = [questionBankLink, NL(paperDir(lang), T.paper), NL(offlineDir(lang), T.offlineNav), API_URL ? NL(groupsDir(lang), T.grNav) : '', NL(formulasDir(lang), T.fcTitle)].filter(Boolean);
  const libraryLink = NL(libraryDir(lang), libraryText[lang].nav);
  const topLinks = NL(homeDir(lang), T.allGrades, '#grades') + libraryLink + NL(examsDir(lang), T.examsNav) + NL(arenaDir(lang), T.arNav) + NL(parentsDir(lang), T.parents) + NL(teachersDir(lang), T.teachers) + NL(journeyDir(lang), T.jrNav) +
    '<details class="nav-more"><summary>' + esc(T.navMore) + '</summary><div class="nav-pop">' + more.join('') + '</div></details>';   // "About" stays in the footer
  const mainLinks = NL(homeDir(lang), T.allGrades, '#grades') + libraryLink + questionBankLink + NL(examsDir(lang), T.examsNav) + NL(arenaDir(lang), T.arNav) + (API_URL ? NL(groupsDir(lang), T.grNav) : '') + NL(paperDir(lang), T.paper) + NL(offlineDir(lang), T.offlineNav) + NL(parentsDir(lang), T.parents) + NL(teachersDir(lang), T.teachers) + NL(journeyDir(lang), T.jrNav);
  // the drawer (phones, tablets held upright): the main menu first, then the lessons of this grade
  const drawerTop = '<div class="side-top"><span>Menu</span><button id="menu-close" class="icon-btn side-close" type="button" aria-label="' + esc(T.closeMenu) + '" hidden>✕</button></div>\n<nav class="side-main" aria-label="' + esc(T.mainNav) + '">' + mainLinks + '</nav>\n';
  const side = (o.side
    ? '<aside id="sidebar" class="sidebar" aria-label="' + esc(T.lessonsLabel) + '">\n' + drawerTop + '<p class="side-title">' + esc(gName(lang, o.side.grade)) + '</p>\n<nav id="nav" aria-label="' + esc(T.chaptersAndLessons) + '">\n' + navHtml(lang, d, o.side.grade, o.side.lesson, o.side.chapter) + '\n</nav>\n</aside>\n'
    : '<aside id="sidebar" class="sidebar nav-only" aria-label="' + esc(T.mainNav) + '">\n' + drawerTop + '</aside>\n') + '<div id="scrim" class="scrim" hidden></div>\n';

  const bodyCls = ['lvl-' + (o.level || 'home'), o.side ? 'has-side' : ''].filter(Boolean).join(' ');
  return '<!doctype html>\n<html lang="' + L.htmlLang + '" data-root="' + esc(rel0(d, L.prefix)) + '">\n<head>\n' + head + '\n</head>\n<body class="' + bodyCls + '">\n' +
    '<a class="skip" href="#main">' + esc(T.skip) + '</a>\n' +
    '<div class="slogan-bar"><p>' + T.slogan.split(/(?<=[.,]) /).map((x) => '<span class="sl-part">' + esc(x) + '</span>').join(' ') + '</p></div>\n' +
    '<header class="topbar">\n' +
    '  <button id="menu-btn" class="icon-btn" type="button" aria-label="' + esc(o.side ? T.menu : T.openMenu) + '" aria-expanded="false" aria-controls="sidebar" hidden>☰</button>\n' +
    '  <a class="brand" href="' + relDir(d, homeDir(lang)) + '">' + mascot({ cls: 'brand-mark' }) + '<span>Lemon<b>math</b></span></a>\n' +
    '  <nav class="topnav" aria-label="' + esc(T.mainNav) + '">' + topLinks + '</nav>\n' +
    '  <div class="spacer"></div>\n' +
    '  <button id="search-btn" class="icon-btn" type="button" aria-label="' + esc(T.search) + '" aria-expanded="false" hidden>' + icon('search', 20) + '</button>\n' +
    '  <div class="searchbox" hidden><label class="sr" for="q">' + esc(T.search) + '</label>' + icon('search', 18) + '<input id="q" type="search" placeholder="' + esc(T.searchPh) + '" autocomplete="off" aria-controls="results"><ul id="results" class="results" hidden></ul></div>\n' +
    '  <button id="search-close" class="icon-btn" type="button" aria-label="' + esc(T.closeSearch) + '" hidden>✕</button>\n' +
    '  ' + switchLink + '\n' +
    '  <button id="theme-btn" class="icon-btn" type="button" aria-label="' + esc(T.theme) + '" hidden>' + THEME_ICON + '</button>\n' +
    '</header>\n' +
    '<div class="layout">\n' + side +
    '  <main id="main" class="main" tabindex="-1">\n    <div class="page' + (o.wide ? ' wide' : '') + '">\n' + o.body + '\n    </div>\n  </main>\n</div>\n' +
    spreadHtml(lang, canonical, o.title) +
    '<footer class="footer">\n  ' + mascot({ cls: 'foot-mark' }) + '\n  <p>© ' + YEAR + ' ' + esc(site.name) + ' · ' + esc(T.footer) + '</p>\n' +
    '  <nav aria-label="' + esc(T.aboutNav) + '"><a href="' + relDir(d, aboutDir(lang)) + '">' + esc(T.about) + '</a> · <a href="' + relDir(d, contactDir(lang)) + '">' + esc(T.contact) + '</a> · <a href="' + relDir(d, privacyDir(lang)) + '">' + esc(T.privacy) + '</a> · <a href="' + relDir(d, formulasDir(lang)) + '">' + esc(T.fcTitle) + '</a> · <a href="https://github.com/lemonmathcom/lemonmath/issues">' + esc(T.report) + '</a> · <button type="button" class="foot-print" onclick="window.lmPrint?lmPrint():print()">🖨 ' + esc(T.printPage) + '</button></nav>\n</footer>\n' +
    '<script src="' + A('assets/site.js') + '" defer></script>\n' + (o.scripts || []).map((f) => '<script src="' + A(f) + '" defer></script>\n').join('') + ANALYTICS + '</body>\n</html>\n';
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

function levelPage(lang, lvl) {
  const T = UI[lang], d = levelDir(lang, lvl), alt = levelDir(other(lang), lvl);
  const gs = grades.filter((g) => g.level === lvl);
  const others = ['primary', 'middle', 'high'].filter((l) => l !== lvl);
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n' +
    '<header class="gradehead"><div><p class="eyebrow">' + esc(T.levels[lvl][1].split(' · ')[0]) + '</p><h1>' + esc(T.levels[lvl][0]) + '</h1>' +
    '<p class="lead">' + esc(T.levelLead[lvl]) + '</p></div>' + mascot({ cls: 'grade-mascot', mood: 'happy' }) + '</header>\n' + pageActions(lang, d) +
    '<div class="gtiles">' + gs.map((g) => gradeTile(lang, d, g)).join('') + '</div>\n' +
    '<nav class="level-jump" aria-label="' + esc(T.pickGrade) + '">' + others.map((l) => '<a class="btn btn-ghost" href="' + relDir(d, levelDir(lang, l)) + '">' + esc(T.levels[l][0]) + '</a>').join('') + '</nav>';
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: T.levels[lvl][0] + ' | ' + site.name, description: T.levelLead[lvl], body, level: lvl, wide: true,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.levels[lvl][0], url: abs(d) }])]
  }), maxDay(gs.flatMap((g) => g.chapters.flatMap((c) => c.lessons.map((l) => l.content[lang].modified)))));
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

function libraryPage(lang) {
  const T = UI[lang], L = libraryText[lang], d = libraryDir(lang), alt = libraryDir(other(lang));
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n' +
    renderLibrary(lang, relDir(d, questionBankDir(lang)), questionBankText[lang].title);
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: seoTitle(L.title), description: L.lead, body, wide: true, level: 'middle',
    scripts: ['assets/library.js'], styles: ['assets/library.css'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: L.nav, url: abs(d) }])]
  }), isoDay(gitDate('data/library.json')));
}

function questionBankPage(lang, bank) {
  const T = UI[lang], Q = questionBankText[lang], d = questionBankDir(lang), alt = questionBankDir(other(lang));
  const library = relDir(d, libraryDir(lang));
  const body = '<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + library + '">' + esc(libraryText[lang].nav) + '</a></nav>\n' +
    renderQuestionBank(lang, bank, relFile(d, 'assets/question-bank-data.json'), library);
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: seoTitle(Q.title), description: Q.lead(Object.keys(bank.papers).length), body, wide: true, level: 'middle', math: true,
    scripts: ['assets/katex/katex.min.js', 'assets/question-bank.js'], styles: ['assets/question-bank.css'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: libraryText[lang].nav, url: abs(libraryDir(lang)) }, { name: Q.title, url: abs(d) }])]
  }), isoDay(gitDate('tools/question-bank-sources.json')));
}

function homePage(lang) {
  const T = UI[lang], d = homeDir(lang), alt = homeDir(other(lang));
  const g10 = grades.find((g) => g.n === 10);
  const levelBlock = (lvl) => {
    const gs = grades.filter((g) => g.level === lvl);
    return '<section class="level lvl-' + lvl + '" id="cap-' + lvl + '" aria-labelledby="lv-' + lvl + '"><div class="level-head"><h3 id="lv-' + lvl + '">' + esc(T.levels[lvl][0]) + '</h3><p>' + esc(T.levels[lvl][1]) + '</p></div>' +
      '<div class="gtiles">' + gs.map((g) => gradeTile(lang, d, g)).join('') + '</div></section>';
  };
  const body = '<section class="hero">\n<div class="hero-text">\n<h1 class="sr">' + esc(T.h1) + '</h1>\n' +
    '<p class="hero-actions"><a class="btn" href="#grades">' + esc(T.pickGrade) + '</a> <a class="btn btn-ghost" href="' + relDir(d, libraryDir(lang)) + '">' + esc(libraryText[lang].nav) + '</a></p>\n<nav class="level-jump" aria-label="' + esc(T.pickGrade) + '">' + ['primary', 'middle', 'high'].map((l) => '<a class="btn btn-ghost" href="' + relDir(d, levelDir(lang, l)) + '">' + esc(T.levels[l][0]) + '</a>').join('') + '</nav>\n</div>\n' +
    '<div class="hero-art" aria-hidden="true">' + mascot({ cls: 'hero-mascot', mood: 'wow' }) + '<span class="float f1">x²</span><span class="float f2">π</span><span class="float f3">∑</span><span class="float f4">√</span></div>\n</section>\n' +
    '<section class="off-promo" aria-labelledby="off-h"><div class="off-promo-text"><p class="eyebrow">' + esc(T.offEyebrow) + '</p><h2 id="off-h">' + esc(T.offH) + '</h2><p>' + esc(T.offLead) + '</p>' +
    '<ul>' + T.offPoints.map((x) => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
    '<p><a class="btn" href="' + relDir(d, offlineDir(lang)) + '">' + esc(T.offCta) + '</a></p></div></section>\n' +
    '<section id="grades" class="grades" aria-labelledby="grades-h"><h2 id="grades-h">' + esc(T.pickGrade) + '</h2>\n' + ['primary', 'middle', 'high'].map(levelBlock).join('\n') + '<p class="lead fc-home">📐 <a href="' + relDir(d, formulasDir(lang)) + '">' + esc(T.fcTitle) + '</a>: ' + esc(T.fcHome) + '</p></section>\n' +
    '<section class="features pillars" aria-labelledby="pillars-h"><h2 id="pillars-h">' + esc(T.pillarsH) + '</h2><div class="feat-grid">' +
    T.pillars.map((f, i) => '<div class="feat"><span class="feat-ico loop-n">' + (i + 1) + '</span><h3>' + esc(f[1]) + '</h3><p>' + esc(f[2]) + '</p></div>').join('') + '</div></section>\n' +
    '<section class="features together" aria-labelledby="tg-h"><h2 id="tg-h">' + esc(T.togetherH) + '</h2><p class="lead">' + esc(T.togetherLead) + '</p><div class="cards tg-cards">' +
    '<a class="card" href="' + relDir(d, arenaDir(lang)) + '"><span class="cicon tg-ico" aria-hidden="true">🏟️</span><h3>' + esc(T.arTitle) + '</h3><p>' + esc(T.togetherAr) + '</p></a>' +
    (API_URL ? '<a class="card" href="' + relDir(d, groupsDir(lang)) + '"><span class="cicon tg-ico" aria-hidden="true">👥</span><h3>' + esc(T.grTitle) + '</h3><p>' + esc(T.togetherGr) + '</p></a>' : '') + '</div></section>\n' +
    '<section id="exams" class="grades" aria-labelledby="exams-h"><h2 id="exams-h">' + esc(T.examsHome) + '</h2>\n<p class="lead">' + esc(T.examsHomeLead) + ' <a href="' + relDir(d, examsDir(lang)) + '">' + esc(T.examsAll) + ' →</a></p>\n<div class="cards">' + exams.map((e) => examCard(lang, d, e)).join('\n') + '</div></section>\n' +
    '<section class="features loop" aria-labelledby="loop-h"><h2 id="loop-h">' + esc(T.loopH) + '</h2><p class="lead">' + esc(T.loopLead) + '</p><ol class="feat-grid loop-grid">' +
    T.loop.map((f, i) => '<li class="feat"><span class="feat-ico loop-n">' + (i + 1) + '</span><h3>' + esc(f[0]) + '</h3><p>' + esc(f[1]) + '</p></li>').join('') + '</ol>' +
    '<p class="loop-teach">' + esc(T.loopParent) + ' <a href="' + relDir(d, parentsDir(lang)) + '">' + esc(T.loopParentLink) + ' →</a></p>' +
    '<p class="loop-teach">' + esc(T.loopTeach) + ' <a href="' + relDir(d, teachersDir(lang)) + '">' + esc(T.teachTitle) + ' →</a></p></section>\n' +
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
    '<p class="lead">' + esc(g.exam ? g.facts[lang] + ' ' + g.summary[lang] : full ? T.gradeFullLead(total, g.chapters.length, lc(g.chapters[0][lang]), lc(g.chapters.filter((c) => c.lessons.length).slice(-1)[0][lang])) : T.gradeRoadmapLead(g.chapters.length)) + '</p></div>' + mascot({ cls: 'grade-mascot', mood: full ? 'happy' : 'wow' }) + '</header>\n' + pageActions(lang, d) + (full ? offBox(lang, d, g) : '') +
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
    '<header class="chaphead"><span class="cicon big">' + icon(ch.icon, 40) + '</span><div><p class="eyebrow">' + esc(T.chapterN(ch.number)) + '</p><h1>' + esc(ch[lang]) + '</h1><p class="lead">' + esc(ch.summary[lang]) + '</p></div></header>\n' + pageActions(lang, d) + offBox(lang, d, g, ch) +
    '<ol class="lesson-list">\n' + items + '\n</ol>';
  const title = seoTitle(g.exam ? ch[lang] + ' | ' + g[lang] : T.chapterTitle(ch.number, ch[lang], g.n));
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
  const body = '<article class="lesson" data-pagefind-body>\n<nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + link(homeDir(lang)) + '">' + esc(T.home) + '</a><span aria-hidden="true">›</span><a href="' + link(gradeDir(lang, g)) + '">' + esc(gName(lang, g)) + '</a><span aria-hidden="true">›</span><a href="' + link(chapterDir(lang, ch)) + '">' + esc(T.chapterN(ch.number) + ': ' + ch[lang]) + '</a></nav>\n' +
    '<h1>' + esc(meta.title) + '</h1>\n<p class="meta">' + metaLine + '</p>\n' + (meta.type === 'paper' ? paperHead(lang, meta) : '') +
    pageActions(lang, d, { lesson: true, why: true, before: ls.ws && ls.ws[lang] ? '<a class="btn btn-outline" href="' + WS_DIR[lang] + '/">🖨 ' + esc(isPaper ? WS_LABEL.paper[lang] : WS_LABEL[lang]) + '</a> ' : '' }) + toc + '\n' +
    '<div class="prose">\n' + resolveLinks(r.html, d, lang, C.rel) + '\n</div>\n' +
    '<div class="lesson-actions"><button id="done-btn" class="btn btn-outline" type="button" aria-pressed="false" data-lesson="' + ls.id + '" data-on="' + esc(T.markedDone) + '" data-off="' + esc(T.markDone) + '" hidden><span class="chk" aria-hidden="true"></span><span class="done-text">' + esc(T.markDone) + '</span></button> <a class="jr-link" href="' + relDir(d, journeyDir(lang)) + '">📈 ' + esc(T.jrNav) + '</a></div>\n' + offBox(lang, d, g, ch) +
    '</article>\n' + pager;
  const learning = {
    '@context': 'https://schema.org', '@type': 'LearningResource', name: meta.title, description: meta.description, url: abs(d),
    inLanguage: LANG[lang].htmlLang, learningResourceType: isPaper ? 'exam paper' : 'lesson', educationalLevel: gName(lang, g),
    isPartOf: { '@type': 'Course', name: ch[lang], url: abs(chapterDir(lang, ch)), provider: { '@type': 'Organization', name: site.name, url: abs(homeDir(lang)) } }
  };
  if (meta.minutes) learning.timeRequired = 'PT' + meta.minutes + 'M';
  if (C.modified) learning.dateModified = C.modified;
  put(lang, d, alt, shell({
    lang, dir: d, altDir: alt, title: seoTitle(meta.title + ' | ' + (g.exam ? g[lang] : (lang === 'vi' ? 'Toán lớp ' + g.n : 'Grade ' + g.n + ' Maths'))), description: meta.description, ogType: 'article', body,
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

/*
 * Contact block for the Contact page: email, phone and messaging icons, from site.contact in data/curriculum.json.
 * Write [[contact]] on its own line in a page. Icons (Simple Icons, CC0) live in data/social-icons.json;
 * a service with an empty link is not shown.
 */
const SOCIAL = fs.existsSync(path.join(ROOT, 'data', 'social-icons.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'social-icons.json'), 'utf8')).icons : {};
function contactBlock(lang) {
  const T = UI[lang], c = site.contact || {};
  let h = '<div class="ct-box">';
  if (c.email) h += '<p class="ct-line"><span class="ct-k">' + esc(T.ctEmail) + '</span><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></p>';
  if (c.phone) h += '<p class="ct-line"><span class="ct-k">' + esc(T.ctPhone) + '</span><a href="tel:' + esc(c.phone) + '">' + esc(c.phoneShow || c.phone) + '</a></p>';
  const links = Object.keys(c.social || {}).filter((k) => c.social[k] && SOCIAL[k]);
  if (links.length) {
    h += '<p class="ct-k ct-k2">' + esc(T.ctChat) + '</p><ul class="ct-social">' + links.map((k) => {
      const i = SOCIAL[k];
      return '<li><a href="' + esc(c.social[k]) + '" target="_blank" rel="noopener" aria-label="' + esc(i.title) + '"><span class="ct-ic"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#' + i.hex + '" d="' + i.path + '"/></svg></span><span class="ct-n">' + esc(i.title) + '</span></a></li>';
    }).join('') + '</ul>';
  }
  return h + '</div>';
}

function aboutPage(lang, page, dirFn) {
  dirFn = dirFn || aboutDir;
  const T = UI[lang], d = dirFn(lang), alt = dirFn(other(lang));
  const body = '<article class="lesson about"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(page.meta.title) + '</h1>\n' + pageActions(lang, d) + '<div class="prose">\n' + resolveLinks(page.rendered.html, d, lang, 'about').replace('<p>[[contact]]</p>', () => contactBlock(lang)) + '\n</div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: page.meta.title + ' | ' + site.name, description: page.meta.description, body, math: false,
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: page.meta.title, url: abs(d) }])] }), page.modified);
}

/*
 * Teachers' corner: a test builder fed by a question bank, and a class score analyser (assets/teacher.js).
 * The bank is every :::quiz question of the lessons (real exam papers are left out: they belong to their schools).
 * Formulas stay as TeX inside <span class="tex"> and are drawn in the browser, which keeps the files small.
 */
const BANK_FIXED = /\b(cả|both|all of|none of|neither|either|above)\b|[A-D]\s*(và|and|hoặc|or|,)\s*[A-D]\b|đáp án|phương án|(ý|câu|khẳng định) trên|option/i;
const BANK_CONTEXT = /câu (hỏi )?(trên|trước|\d)|(ở|nói|kể|nêu) trên|(bảng|hình|mẫu số liệu|dữ liệu|đề bài|bài toán) (ở )?(trên|trước)|previous|preceding|above|earlier|question \d|same (data|table|situation)/i;
function writeBank(lang) {
  const dir = teachersDir(lang);
  const fake = { renderToString: (tex, o) => '<span class="tex"' + (o && o.displayMode ? ' data-d="1"' : '') + '>' + esc(tex) + '</span>' };
  const uid = { n: 9000 };
  const md = (t, where) => resolveLinks(render(t, { marked, katex: fake, lang, uid, warn: () => {} }).html, dir, lang, where + ' (ngân hàng câu hỏi)').trim();
  const one = (t, where) => { const h = md(t, where); return /^<p>[\s\S]*<\/p>$/.test(h) && h.indexOf('<p>', 3) === -1 ? h.slice(3, -4) : h; };
  const index = [];
  tracks.forEach((g) => {
    const out = { name: gName(lang, g), chapters: [], items: [] };
    let li = 0;
    g.chapters.forEach((ch) => {
      const rows = [];
      ch.lessons.forEach((ls) => {
        const C = ls.content[lang];
        if (C.meta.type === 'paper') return;
        const n = { mc: 0, tf: 0, sa: 0 };
        const re = /^:::quiz[ \t]*[^\n]*\n([\s\S]*?)^:::[ \t]*$/gm;
        let m;
        while ((m = re.exec(C.body))) {
          parseQuiz(m[1]).forEach((it) => {
            if (!it.key || !it.q || (it.type !== 'sa' && it.opts.length !== 4)) return;
            if (BANK_CONTEXT.test(it.q)) return; // the question leans on another question of its own test
            try {
              const row = { l: li, y: it.type, q: md(it.q, C.rel), k: it.key, e: it.expl ? md(it.expl, C.rel) : '' };
              if (it.type !== 'sa') row.o = it.opts.map((o) => one(it.type === 'mc' ? o.replace(/\.\s*$/, '') : o, C.rel));
              if (it.type === 'mc') { row.c = optCols(it.opts); if (it.opts.some((o) => BANK_FIXED.test(o))) row.x = 1; }
              if (it.lv.length) row.v = it.type === 'tf' ? it.lv : it.lv[0]; // cognitive level(s): NB, TH, VD, VDC
              out.items.push(row); n[it.type]++;
            } catch (e) { warn(C.rel + ': bỏ qua một câu khi lập ngân hàng câu hỏi (' + e.message + ').'); }
          });
        }
        if (n.mc + n.tf + n.sa) { rows.push({ i: li, t: C.meta.title, n: [n.mc, n.tf, n.sa] }); li++; }
      });
      if (rows.length) out.chapters.push({ t: ch[lang], lessons: rows });
    });
    if (!out.items.length) return;
    const key = g.exam ? g.id : 'g' + g.n;
    fs.mkdirSync(path.join(OUT, dir, 'bank'), { recursive: true });
    const json = JSON.stringify(out);
    fs.writeFileSync(path.join(OUT, dir, 'bank', key + '.json'), json);
    // a teacher's tool downloads the whole file of a grade: past 1 MB it is time to split it by chapter or serve it from D1 (stage 2)
    if (lang === 'vi' && Buffer.byteLength(json) > 1048576) warn('ngân hàng câu hỏi ' + key + '.json nặng ' + (Buffer.byteLength(json) / 1048576).toFixed(1) + ' MB (trên 1 MB): nên chia theo chương hoặc đưa vào D1.');
    index.push({ id: key, name: out.name, n: out.items.length });
  });
  fs.mkdirSync(path.join(OUT, dir, 'bank'), { recursive: true });
  fs.writeFileSync(path.join(OUT, dir, 'bank', 'index.json'), JSON.stringify(index));
  return index.reduce((a, b) => a + b.n, 0);
}

function teachersPage(lang, page) {
  const T = UI[lang], d = teachersDir(lang), alt = teachersDir(other(lang));
  const total = writeBank(lang);
  const body = '<article class="lesson about teach"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a></nav>\n<h1>' + esc(page.meta.title) + '</h1>\n' +
    '<p class="lead">' + esc(page.meta.description) + '</p>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    // two ways: the test builder below needs no account; "My classes" does
    (API_URL ? '<section class="cr-ways2" aria-label="' + esc(T.waysH) + '"><div class="tool cr-way1"><h2>' + esc(T.way1H) + '</h2><p>' + esc(T.way1P) + '</p><p><a class="btn" href="#tq-app">' + esc(T.way1Btn) + '</a></p></div>' +
      '<div class="tool cr-cta"><h2>' + esc(T.crCtaH) + '</h2><p>' + esc(T.crCtaP) + '</p><p><a class="btn btn-outline" href="' + relDir(d, classroomDir(lang)) + '">' + esc(T.crCtaBtn) + '</a></p></div></section>\n' : '') +
    '<section id="tq-app" class="tool" data-bank="bank/" data-total="' + total + '" data-site="' + esc(site.name) + '"' +
    (LIVE_DB ? ' data-live="' + esc(LIVE_DB) + '" data-join="' + esc(abs(joinDir(lang)).replace(/^https?:\/\//, '').replace(/\/$/, '')) + '"' : '') + ' hidden></section>\n' +
    (LIVE_DB ? '<template id="lv-qr">' + qrSvg(abs(joinDir(lang))) + '</template>\n' : '') +
    '<section id="sc-app" class="tool" hidden></section>\n' +
    '<div class="prose">\n' + resolveLinks(page.rendered.html, d, lang, 'teachers') + '\n</div></article>\n<div id="tq-out" hidden></div>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: page.meta.title + ' | ' + site.name, description: page.meta.description, body, math: true, scripts: ['assets/katex/katex.min.js', 'assets/teacher.js'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: page.meta.title, url: abs(d) }])] }), page.modified);
}

/* The page students open on their phones to join a live class test (assets/live.js). */
function joinPage(lang) {
  const T = UI[lang], d = joinDir(lang), alt = joinDir(other(lang));
  const body = '<article class="lesson about join"><h1>' + esc(T.joinTitle) + '</h1>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="jn-app" data-db="' + esc(LIVE_DB) + '" data-arena="' + relDir(d, arenaDir(lang)) + '" data-bank-en="' + relDir(d, teachersDir('en')) + 'bank/" data-bank-vi="' + relDir(d, teachersDir('vi')) + 'bank/" hidden></div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.joinTitle + ' | ' + site.name, description: T.joinDesc, body, math: true, noindex: true, scripts: ['assets/katex/katex.min.js', 'assets/live.js'] }), null, true);
}

/* My classes: teacher accounts, classes, homework with a time window, results (assets/classroom.js). */
function classroomPage(lang) {
  const T = UI[lang], d = classroomDir(lang), alt = classroomDir(other(lang));
  const body = '<article class="lesson about teach"><nav class="crumbs" aria-label="' + esc(T.breadcrumb) + '"><a href="' + relDir(d, homeDir(lang)) + '">' + esc(T.home) + '</a> › <a href="' + relDir(d, teachersDir(lang)) + '">' + esc(T.teachers) + '</a></nav>\n<h1>' + esc(T.crTitle) + '</h1>\n' +
    '<p class="lead">' + esc(T.crDesc) + '</p>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="cr-app" data-api="' + esc(API_URL) + '" data-bank="' + relDir(d, teachersDir(lang)) + 'bank/" data-hw="' + esc(abs(homeworkDir(lang))) + '" data-sc="' + relDir(d, teachersDir(lang)) + '" hidden></div>\n' +
    '<template id="cr-qr">' + qrSvg(abs(homeworkDir(lang))) + '</template></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.crTitle + ' | ' + site.name, description: T.crDesc, body, math: true, scripts: ['assets/katex/katex.min.js', 'assets/classroom.js'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.teachers, url: abs(teachersDir(lang)) }, { name: T.crTitle, url: abs(d) }])] }), null);
}

/* Homework set in My classes, done on the students' phones (assets/hw.js). */
function homeworkPage(lang) {
  const T = UI[lang], d = homeworkDir(lang), alt = homeworkDir(other(lang));
  const body = '<article class="lesson about join"><h1>' + esc(T.hwTitle) + '</h1>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="hw-app" data-api="' + esc(API_URL) + '" data-home="' + relDir(d, homeDir(lang)) + '" hidden></div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.hwTitle + ' | ' + site.name, description: T.hwDesc, body, math: true, noindex: true, scripts: ['assets/katex/katex.min.js', 'assets/hw.js'] }), null, true);
}

/* "My progress": the student's journey, worked out in the browser from what this browser kept (assets/journey.js).
   lessons.json lists every track in order, so the page can say what comes next and how far each chapter is done. */
function journeyPage(lang) {
  const T = UI[lang], d = journeyDir(lang), alt = journeyDir(other(lang));
  const data = { tracks: tracks.filter((g) => g.chapters.some((c) => c.lessons.length)).map((g) => ({
    id: g.exam ? g.id : 'g' + g.n, name: gName(lang, g), exam: !!g.exam, url: relDir(d, gradeDir(lang, g)),
    ch: g.chapters.filter((c) => c.lessons.length).map((c) => ({ id: c.id, n: c.number, t: c[lang], url: relDir(d, chapterDir(lang, c)),
      ls: c.lessons.map((ls) => [ls.id, ls.content[lang].meta.title, relDir(d, lessonDir(lang, ls))]) }))
  })) };
  fs.mkdirSync(path.join(OUT, d), { recursive: true });
  fs.writeFileSync(path.join(OUT, d, 'lessons.json'), JSON.stringify(data));
  const body = '<article class="lesson about journey"><h1>' + esc(T.jrTitle) + '</h1>\n<p class="lead">' + esc(T.jrLead) + '</p>\n<p class="jr-more">🏟️ <a href="' + relDir(d, arenaDir(lang)) + '">' + esc(T.arTitle) + '</a>' + (API_URL ? ' · 👥 <a href="' + relDir(d, groupsDir(lang)) + '">' + esc(T.grTitle) + '</a>' : '') + '</p>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="jr-app" data-api="' + esc(API_URL) + '" data-home="' + relDir(d, homeDir(lang)) + '" data-parents="' + relDir(d, parentsDir(lang)) + '" hidden></div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.jrTitle + ' | ' + site.name, description: T.jrDesc, body, noindex: true, scripts: ['assets/journey.js'] }), null, true);
}

/* Lemon Arena: quick maths games, today's challenge, rooms with friends (assets/arena.js). Rooms use the live-class
   Firebase database (LIVE_DB); without it the page still works on its own. The page sits at the same depth as the
   teachers' corner, so the question bank's relative links work the same here. */
function arenaPage(lang) {
  const T = UI[lang], d = arenaDir(lang), alt = arenaDir(other(lang));
  const body = '<article class="lesson about arena"><h1>' + esc(T.arTitle) + '</h1>\n<p class="lead">' + esc(T.arLead) + '</p>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="ar-app" data-db="' + esc(LIVE_DB) + '" data-api="' + esc(API_URL) + '" data-bank="' + relDir(d, teachersDir(lang)) + 'bank/" data-groups="' + (API_URL ? relDir(d, groupsDir(lang)) : '') + '" data-join="' + (LIVE_DB ? relDir(d, joinDir(lang)) : '') + '" hidden></div>\n' +
    '<template id="ar-qr">' + qrSvg(abs(d)) + '</template></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.arTitle + ' | ' + site.name, description: T.arDesc, body, math: true, scripts: ['assets/katex/katex.min.js', 'assets/arena.js'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.arTitle, url: abs(d) }])] }), null);
}

/* Study groups: a weekly goal for a group of friends, cheers, today's challenge (assets/groups.js, API /v1/groups/*). */
function groupsPage(lang) {
  const T = UI[lang], d = groupsDir(lang), alt = groupsDir(other(lang));
  const body = '<article class="lesson about groups"><h1>' + esc(T.grTitle) + '</h1>\n<p class="lead">' + esc(T.grLead) + '</p>\n<noscript><p class="soon-note">' + esc(T.noJs) + '</p></noscript>\n' +
    '<div id="gr-app" data-arena="' + relDir(d, arenaDir(lang)) + '" data-privacy="' + relDir(d, privacyDir(lang)) + '" data-journey="' + relDir(d, journeyDir(lang)) + '" hidden></div></article>';
  put(lang, d, alt, shell({ lang, dir: d, altDir: alt, title: T.grTitle + ' | ' + site.name, description: T.grDesc, body, scripts: ['assets/groups.js'],
    jsonld: [crumbLD([{ name: T.home, url: abs(homeDir(lang)) }, { name: T.grTitle, url: abs(d) }])] }), null);
}

function searchIndex(lang) {
  const T = UI[lang];
  const rows = [];
  rows.push({ t: T.examsNav, s: T.examsHome, u: examsDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  rows.push({ t: T.teachTitle, s: T.teachers, u: teachersDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  if (API_URL) rows.push({ t: T.crTitle, s: T.teachers, u: classroomDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  rows.push({ t: T.jrTitle, s: T.jrNav, u: journeyDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  rows.push({ t: T.arTitle, s: T.arNav, u: arenaDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
  if (API_URL) rows.push({ t: T.grTitle, s: T.grNav, u: groupsDir(lang).slice(LANG[lang].prefix ? LANG[lang].prefix.length + 1 : 0) });
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
  fs.copyFileSync(path.join(dist, 'katex.min.js'), path.join(dest, 'katex.min.js')); // only the teachers' test builder loads it
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

/* ------------------------------------------------------------------ */
/* Install as an app (PWA): manifest, offline page, service worker     */
/* ------------------------------------------------------------------ */

function offlineHtml() {
  return '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>Không có mạng · Offline | ' + esc(site.name) + '</title>\n<meta name="robots" content="noindex">\n<style>\n' +
    'body{margin:0;min-height:100vh;display:grid;place-items:center;font:18px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#FFFBEA;color:#2B2A33;text-align:center;padding:24px}\n' +
    'a,button{color:#B45309;font:inherit;font-weight:800}button{background:#FFD43B;color:#2B2A33;border:2px solid #2B2A33;border-radius:999px;padding:8px 22px;cursor:pointer;margin:.6em 0}h1{font-size:1.7rem;margin:.2em 0}p{margin:.4em 0}svg{width:120px;height:120px}hr{border:0;border-top:2px dashed #EFE6B8;margin:1.2em auto;width:60%}\n@media (prefers-color-scheme:dark){body{background:#17161C;color:#F4F1E8}a{color:#FDBA74}hr{border-color:#3A3647}}\n</style>\n</head>\n<body>\n<main>\n' +
    mascot({ mood: 'wow' }) + '\n<h1>Bạn đang không có mạng</h1>\n<p>Trang này chưa được lưu trên máy. Những bài bạn đã mở trước đó vẫn đọc lại được.</p>\n<p><a href="/vi/">Về trang chủ Lemonmath</a></p>\n' +
    '<hr>\n<h1 lang="en">You are offline</h1>\n<p lang="en">This page has not been saved on your device yet. Lessons you opened before can still be read.</p>\n<p lang="en"><a href="/">Go to the Lemonmath home page</a></p>\n' +
    '<p><button type="button" onclick="location.reload()">Thử lại · Try again</button></p>\n' +
    '<div id="saved" hidden><hr>\n<h1>Bài đã tải về máy · Saved on this device</h1>\n<p id="saved-list"></p></div>\n' +
    '<script>(function(){try{var m=JSON.parse(localStorage.getItem("lm-off")||"{}"),k=Object.keys(m),h="";k.forEach(function(x){if(m[x]&&m[x].u){var a=document.createElement("a");a.href=m[x].u;a.textContent=m[x].t||x;h+=a.outerHTML+"<br>"}});if(h){document.getElementById("saved-list").innerHTML=h;document.getElementById("saved").hidden=false}}catch(e){}})()</script>\n</main>\n</body>\n</html>\n';
}

const T_ch = (lang, ch) => UI[lang].chapterN(ch.number) + ': ' + ch[lang];
function writePwa() {
  const icons = [
    { src: '/assets/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/assets/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/assets/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ];
  icons.forEach((i) => { if (!fs.existsSync(path.join(OUT, i.src))) fail('thiếu icon ứng dụng: ' + i.src.slice(1)); });
  LANGS.forEach((lang) => {
    const T = UI[lang], home = '/' + (LANG[lang].prefix ? LANG[lang].prefix + '/' : '');
    const m = {
      id: home, name: T.appName, short_name: site.name, description: T.appDesc, lang: LANG[lang].htmlLang, dir: 'ltr',
      start_url: home, scope: '/', display: 'standalone', orientation: 'any',
      background_color: '#FFFBEA', theme_color: '#FFD43B', categories: ['education'], icons,
      shortcuts: [
        { name: T.allGrades, url: home + '#grades' },
        { name: T.examsNav, url: '/' + examsDir(lang) + '/' },
        { name: T.weekNav || T.paper, url: '/' + (T.weekNav ? weekDir(lang) : paperDir(lang)) + '/' }
      ]
    };
    fs.writeFileSync(path.join(OUT, LANG[lang].prefix, 'manifest.webmanifest'), JSON.stringify(m, null, 1));
  });
  fs.writeFileSync(path.join(OUT, 'offline.html'), offlineHtml());

  /*
   * Offline packs. For every language and every grade (or exam track) that has lessons:
   *   /offline-data/<key>.json  { v, base: [urls], c: { <chapter id>: [urls] } }   what to save
   *   /offline-data/packs.json  { <key>: { t, u, v, w, n, c: [{ id, t, w, n }] } } names and download sizes (w = bytes over the wire)
   * A pack holds the grade page, the chapter pages, the lessons and their printable sheets, plus the pictures and maths fonts they use.
   */
  const gz = (file) => zlib.gzipSync(fs.readFileSync(file), { level: 6 }).length;
  const fileOf = (u) => path.join(OUT, u.endsWith('/') ? u + 'index.html' : u);
  const katexFonts = fs.readdirSync(path.join(OUT, 'assets', 'katex', 'fonts')).filter((f) => f.endsWith('.woff2')).map((f) => '/assets/katex/fonts/' + f);
  const index = {};
  fs.mkdirSync(path.join(OUT, 'offline-data'), { recursive: true });
  LANGS.forEach((lang) => {
    tracks.filter(isFull).forEach((g) => {
      const key = packKey(lang, g), h = crypto.createHash('sha1');
      const assets = new Set(HYBRID ? katexFonts.concat(['/assets/katex/katex.min.js', '/assets/math.js']) : katexFonts);
      let wire = 0;
      const take = (dir) => {
        const u = '/' + dir + '/', f = fileOf(u);
        if (!fs.existsSync(f)) return null;
        const html = fs.readFileSync(f, 'utf8');
        h.update(u); h.update(html);
        html.replace(/src="([^"#?]+\.(?:svg|png|jpe?g|webp|gif))"/g, (m, src) => { if (!/^[a-z]+:/.test(src)) assets.add(px.join('/', dir, src)); return m; });
        const w = gz(f); wire += w;
        return { u, w };
      };
      const base = [take(gradeDir(lang, g))].filter(Boolean).map((x) => x.u);
      const c = {}, rows = [];
      g.chapters.filter((ch) => ch.lessons.length).forEach((ch) => {
        const pages = [take(chapterDir(lang, ch))];
        ch.lessons.forEach((ls) => {
          pages.push(take(lessonDir(lang, ls)));
          if (ls.ws && ls.ws[lang]) pages.push(take(px.join(lessonDir(lang, ls), WS_DIR[lang])));
        });
        const ok = pages.filter(Boolean);
        c[ch.id] = ok.map((x) => x.u);
        rows.push({ id: ch.id, t: T_ch(lang, ch), w: ok.reduce((a, x) => a + x.w, 0), n: ch.lessons.length });
      });
      let aw = 0;
      // bytes over the wire: scripts and SVG travel compressed; fonts and photos are already compressed
      [...assets].forEach((a) => { const f = fileOf(a); if (fs.existsSync(f)) aw += /\.(js|svg)$/.test(a) ? gz(f) : fs.statSync(f).size; else assets.delete(a); });
      const v = h.digest('hex').slice(0, 10);
      fs.writeFileSync(path.join(OUT, 'offline-data', key + '.json'), JSON.stringify({ v, base: base.concat([...assets]), c }));
      index[key] = { t: g.exam ? g[lang] : (lang === 'vi' ? 'Toán lớp ' + g.n : 'Grade ' + g.n + ' maths'), u: '/' + gradeDir(lang, g) + '/', v, w: wire + aw, a: aw, n: rows.reduce((a, r) => a + r.n, 0), c: rows };
    });
  });
  fs.writeFileSync(path.join(OUT, 'offline-data', 'packs.json'), JSON.stringify(index));

  // Files saved on the device at install time, so the app opens with no network.
  const core = ['/', '/vi/', '/offline.html', '/' + offlineDir('en') + '/', '/' + offlineDir('vi') + '/', '/' + journeyDir('en') + '/', '/' + journeyDir('vi') + '/', '/' + journeyDir('en') + '/lessons.json', '/' + journeyDir('vi') + '/lessons.json', '/assets/journey.js', '/offline-data/packs.json', '/assets/style.css', '/assets/print.css', '/assets/site.js', '/assets/fonts.css', '/assets/katex/katex.min.css',
    '/assets/fonts/nunito-latin-wght-normal.woff2', '/assets/fonts/nunito-vietnamese-wght-normal.woff2',
    '/assets/fonts/baloo-2-latin-800-normal.woff2', '/assets/fonts/baloo-2-vietnamese-800-normal.woff2',
    '/assets/icons/icon-192.png', '/search-index.json', '/vi/search-index.json'];
  if (HYBRID) core.push('/assets/katex/katex.min.js', '/assets/math.js'); // pages draw part of their formulas in the browser, also offline
  const h = crypto.createHash('sha1');
  const tpl = fs.readFileSync(path.join(__dirname, 'sw.template.js'), 'utf8');
  h.update(tpl);
  core.forEach((u) => {
    const f = path.join(OUT, u.endsWith('/') ? u + 'index.html' : u);
    if (!fs.existsSync(f)) { fail('service worker: không thấy file ' + u); return; }
    h.update(u); h.update(fs.readFileSync(f));
  });
  fs.writeFileSync(path.join(OUT, 'sw.js'), tpl.replace('__VERSION__', h.digest('hex').slice(0, 10)).replace('__CORE__', JSON.stringify(core)));
}

/* ------------------------------------------------------------------ */
/* Lighter pages: formulas drawn in the browser (tools/slim-math.js)   */
/* ------------------------------------------------------------------ */

function htmlFiles(dir) {
  const out = [];
  (function walk(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p); else if (e.name.endsWith('.html')) out.push(p);
    });
  })(dir);
  return out;
}
/* Slims one page in place; returns [bytes before, bytes after, formulas left as TeX]. */
function slimFile(file, noindex) {
  let html = fs.readFileSync(file, 'utf8');
  const before = Buffer.byteLength(html);
  const r = slim(html, MATH.keep);
  html = r.html;
  if (r.left) html = addScripts(html, relDir(px.dirname(path.relative(OUT, file).split(path.sep).join('/')), ''));
  if (noindex && html.indexOf('name="robots"') < 0) html = html.replace('<head>\n', '<head>\n<meta name="robots" content="noindex,follow">\n');
  fs.writeFileSync(file, html);
  return [before, Buffer.byteLength(html), r.left];
}
function slimPages() {
  const sum = (rows) => rows.reduce((a, r) => [a[0] + r[0], a[1] + r[1], a[2] + r[2]], [0, 0, 0]);
  const mb = (b) => (b / 1048576).toFixed(1) + ' MB';
  if (HYBRID) {
    const t = sum(htmlFiles(OUT).map((f) => slimFile(f)));
    console.log('Công thức vẽ trên trình duyệt (math: hybrid): trang HTML ' + mb(t[0]) + ' -> ' + mb(t[1]) + ', ' + t[2] + ' công thức để trình duyệt vẽ.');
    return;
  }
  // pilot: a hybrid copy of some grades next to the normal pages, e.g. /grade-10-thu/ and /vi/lop-10-thu/
  (MATH.pilot || []).forEach((n) => {
    const g = grades.find((x) => x.n === n);
    if (!g || !isFull(g)) { warn('"math" → "pilot": lớp ' + n + ' chưa có bài, bỏ qua.'); return; }
    LANGS.forEach((lang) => {
      const src = path.join(OUT, gradeDir(lang, g)), dst = src + '-thu';
      if (!fs.existsSync(src)) return;
      fs.cpSync(src, dst, { recursive: true });
      const t = sum(htmlFiles(dst).map((f) => slimFile(f, true)));
      console.log('Bản thử ' + path.relative(OUT, dst) + '/: trang HTML ' + mb(t[0]) + ' -> ' + mb(t[1]) + ' (' + t[2] + ' công thức để trình duyệt vẽ).');
    });
  });
}
/*
 * Full-text search (26/11/2026): Pagefind indexes the text of every lesson (the <article data-pagefind-body>
 * of lessonPage) into dist/pagefind/, split into small pieces so a search downloads only a few KB. One index per
 * language (from <html lang>); accents are ignored (đ is handled in assets/site.js). The quick title search
 * (search-index.json) stays: it is instant and works offline; site.js adds "in lesson text" results under it when
 * the network is there. Formulas, buttons and page furniture are left out of the index.
 */
const SEARCH_SKIP = ['.katex', '.lm-m', '.crumbs', '.meta', '.ws-link', '.ws-why', '.toc', '.lesson-actions', '.off-box', '.btn', 'button', '.box-title', '.box-kind'];
async function fullTextSearch() {
  try {
    const pagefind = await import('pagefind');
    const { index, errors: e1 } = await pagefind.createIndex({ excludeSelectors: SEARCH_SKIP });
    if (!index) throw new Error((e1 || []).join('; '));
    const r = await index.addDirectory({ path: OUT });
    if (r.errors && r.errors.length) throw new Error(r.errors.join('; '));
    const w = await index.writeFiles({ outputPath: path.join(OUT, 'pagefind') });
    if (w.errors && w.errors.length) throw new Error(w.errors.join('; '));
    await pagefind.close();
    const frag = path.join(OUT, 'pagefind', 'fragment');
    console.log('Tìm kiếm toàn văn (Pagefind): ' + (fs.existsSync(frag) ? fs.readdirSync(frag).length : 0) + ' trang bài học được đưa vào chỉ mục.');
  } catch (e) {
    warn('không dựng được chỉ mục tìm kiếm toàn văn (Pagefind): ' + e.message + '. Ô tìm kiếm vẫn tìm theo tên bài.');
  }
}

/* Size fuse: returns the size of the built site in MB. */
function sizeFuse() {
  let bytes = 0, files = 0;
  const big = [];
  (function walk(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) return walk(p);
      const n = fs.statSync(p).size;
      bytes += n; files++;
      if (n > FILE_MAX_BYTES) big.push(path.relative(OUT, p) + ' (' + (n / 1048576).toFixed(1) + ' MB)');
    });
  })(OUT);
  const mb = bytes / 1048576;
  const note = (m) => { warn(m); if (process.env.GITHUB_ACTIONS) console.log('::warning::' + m); };
  if (HOST.pages && mb > SIZE_STOP_MB) {
    fail('website nặng ' + mb.toFixed(0) + ' MB, vượt ngưỡng dừng ' + SIZE_STOP_MB + ' MB (GitHub Pages nhận tối đa 1 GB). Bản đang chạy trên mạng được giữ nguyên. Bật "math": { "mode": "hybrid" } hoặc chuyển file lớn ra ngoài trước khi đăng tiếp.');
  } else if (HOST.pages && mb > SIZE_WARN_MB) {
    note('website nặng ' + mb.toFixed(0) + ' MB, đã quá ngưỡng cảnh báo ' + SIZE_WARN_MB + ' MB (GitHub Pages nhận tối đa 1 GB). Cần chuyển hẳn sang Cloudflare ("hosting": { "pages": false }).');
  }
  // Cloudflare Workers: number of files per version, size of one file
  if (big.length) fail('file quá 25 MB (Cloudflare Workers không nhận): ' + big.join(', ') + '. Đưa file lớn lên R2 (tai-lieu.lemonmath.com).');
  if (files > HOST.maxFiles * 0.975) {
    fail('website có ' + files + ' file, sát giới hạn ' + HOST.maxFiles + ' file mỗi phiên bản của Cloudflare Workers. Bản đang chạy được giữ nguyên. Giai đoạn 3: nâng Workers Paid rồi đặt "hosting": { "maxFiles": 100000 }, hoặc sinh trang đề từ dữ liệu.');
  } else if (files > HOST.maxFiles * 0.75) {
    note('website có ' + files + ' file (giới hạn ' + HOST.maxFiles + ' file của Cloudflare Workers): đã đến lúc chuẩn bị giai đoạn 3.');
  }
  return { mb, files };
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

async function main() {
  loadLessons();
  const about = {}, privacy = {}, contact = {};
  const paper = {}, parents = {}, week = {}, teach = {}, offline = {};
  LANGS.forEach((l) => { about[l] = loadPage(l, 'about'); privacy[l] = loadPage(l, 'privacy'); contact[l] = loadPage(l, 'contact'); paper[l] = loadPage(l, 'learn-on-paper'); parents[l] = loadPage(l, 'parents'); week[l] = loadPage(l, 'this-week'); teach[l] = loadPage(l, 'teachers'); offline[l] = loadPage(l, 'offline'); });
  const examsIntro = {};
  LANGS.forEach((l) => { examsIntro[l] = loadPage(l, 'exams'); });
  if (errors.length) report();

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  copyAssets();
  const questionBank = writeQuestionBank(OUT, grades);

  LANGS.forEach((lang) => {
    homePage(lang);
    libraryPage(lang);
    questionBankPage(lang, questionBank);
    examsPage(lang, examsIntro[lang]);
    ['primary', 'middle', 'high'].forEach((l) => levelPage(lang, l));
    tracks.forEach((g) => {
      gradePage(lang, g);
      if (g.status === 'full') g.chapters.filter((c) => c.lessons.length).forEach((c) => chapterPage(lang, c));
    });
    lessons.forEach((ls) => { ls.ws = ls.ws || {}; ls.ws[lang] = worksheetPage(lang, ls); lessonPage(lang, ls); });
    if (about[lang]) aboutPage(lang, about[lang]);
    if (privacy[lang]) aboutPage(lang, privacy[lang], privacyDir);
    if (contact[lang]) aboutPage(lang, contact[lang], contactDir);
    if (paper[lang]) aboutPage(lang, paper[lang], paperDir);
    if (parents[lang]) aboutPage(lang, parents[lang], parentsDir);
    if (week[lang]) aboutPage(lang, week[lang], weekDir);
    if (teach[lang]) teachersPage(lang, teach[lang]);
    if (teach[lang] && LIVE_DB) joinPage(lang);
    if (teach[lang] && API_URL) { classroomPage(lang); homeworkPage(lang); }
    journeyPage(lang);
    arenaPage(lang);
    if (API_URL) groupsPage(lang);
    formulasPage(lang);
    if (offline[lang]) offlinePage(lang, offline[lang]);
    searchIndex(lang);
  });

  fs.writeFileSync(path.join(OUT, '404.html'), notFoundHtml());
  slimPages(); // before writePwa: offline packs measure and hash the pages as they will be served
  await fullTextSearch();
  writePwa();
  writeSitemap();
  const size = sizeFuse();
  report();
  console.log('Dựng xong: ' + lessons.length + ' bài × 2 ngôn ngữ, ' + grades.length + ' lớp, ' + exams.length + ' kì thi -> ' + path.relative(process.cwd(), OUT) + '/ (' + size.mb.toFixed(0) + ' MB, ' + size.files + ' file)');
}

main().catch((e) => { console.error('LỖI: ' + (e && e.stack || e)); process.exit(1); });
