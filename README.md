# Lemonmath

Free, step-by-step math lessons for Vietnam's grade 1–12 curriculum, in English (https://lemonmath.com) and Vietnamese (https://lemonmath.com/vi/).

Lessons are Markdown files in `content/en/g10/` and `content/vi/g10/` (one pair per lesson). A small build script (`tools/build.js`, run by GitHub Actions on every push) turns them into plain, fast HTML pages with the math drawn by KaTeX, graphs and geometry diagrams drawn as SVG, a sitemap with hreflang, and a search index.

- Course outline and chapter titles: `data/curriculum.json`
- How to write a lesson: `_templates/WRITING-SPEC.md` and `_templates/lesson-template.md`
- Check lessons: `node tools/check.js <lesson-id>` or `node tools/check.js --all`
- Preview locally (Node.js 20 or newer): `npm ci && npm start`, then open http://localhost:8000
- Hướng dẫn tiếng Việt: [HUONG-DAN.md](HUONG-DAN.md)
