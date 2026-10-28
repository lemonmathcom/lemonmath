# Lemonmath

Clear, step-by-step math lessons in English. Live at https://lemonmath.com

Lessons are Markdown files. A small build script (`tools/build.js`, run by GitHub Actions on every push) turns them into plain, fast HTML pages with the math already drawn by KaTeX, one page per lesson, plus `sitemap.xml` and `robots.txt`. The site is hosted on GitHub Pages.

- Lessons live in `content/`; the course outline is `curriculum.json`.
- To add a lesson, copy `_templates/lesson-template.md` and register it in `curriculum.json`.
- Preview locally (Node.js 20 or newer): `npm ci && npm start`, then open http://localhost:8000
- Hướng dẫn chi tiết bằng tiếng Việt: xem [HUONG-DAN.md](HUONG-DAN.md).
