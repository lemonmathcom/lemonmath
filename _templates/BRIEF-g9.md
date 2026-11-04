# Brief: grade 9 lessons (KNTT order, GDPT 2018)

Project root: /home/claude/lemonmath. Files: content/vi/g9/<id>.md and content/en/g9/<id>.md (same id, same structure, same numbers). Lesson ids, titles (VI/EN), chapter order and minutes are in data/curriculum.json (grade n = 9). Use the curriculum titles exactly as `title:` in the front matter.

## Read first (mandatory)
- _templates/WRITING-SPEC.md, all of it, especially the required skeleton (section 2) and section 2b (decided standard). Grade 6–9 length: 1,400–2,200 words per language.
- _templates/GLOSSARY.md: standard British school terms (GCSE level), never word-by-word. E.g. "simultaneous equations", "unknown", "surd"/"square-root expression", "Pythagoras' theorem", "cyclic quadrilateral", "angle at the circumference", "inscribed angle".
- Model lesson in both languages: content/vi/g10/circles.md and content/en/g10/circles.md (copy the box syntax and the compact example style exactly; grade 9 is simpler and more concrete).

## Style (teacher's decision, most important)
Follow WRITING-SPEC section 2c exactly: solutions in the KNTT textbook voice ("**Lời giải.** Ta có …", "Do đó", "Suy ra", "Vậy …"), problem statements with KNTT verbs and the provincial grade-10 entrance-exam style. Where 2c conflicts with 2b, 2c wins.

Also follow section 2d (the spirit of all content: reasoning, problem solving, systems thinking; warm and insightful openings and concept explanations; meaningful real-life problems; only verified facts with sources, otherwise clearly hypothetical scenarios).

## Grade 9 specifics
- Voice: "bạn" for the reader, "ta" in explanations. Friendly, concrete, many real-life contexts familiar to Vietnamese 14–15-year-olds.
- Stay inside the KNTT grade 9 programme and do not teach ahead (check the previous and next lesson in curriculum.json). NO parameter-m problems (no "tìm m để…"); use concrete numbers instead.
- Notation: VI decimal comma `{,}` inside maths; division ":" only if needed in VI and "÷" in EN; VI uses "Viète" (định lí Viète), EN "Viète's theorem".
- Every lesson: :::goals, motivating question, 3–4 `##` sections, ≥3 :::example (compact: one idea sentence, calculation lines, conclusion), a figure where it helps (:::graph or :::diagram; geometry lessons must have at least one), :::terms, ## Tóm tắt / ## Summary, ## Luyện tập / ## Practice with 8–10 :::exercise boxes (each with ::hint giving Kiến thức + Gợi ý các bước, and ::solution), and the :::quiz mini test at the end (≥4 ::mc, ≥1 ::tf, ≥2 ::sa; SA keys numbers ≤4 characters, no trailing zeros). Graded easy → hard, last exercise labelled "Thử thách" / "Challenge".
- All problems original. Re-solve every example, exercise and quiz item (python/sympy or node) before moving on.
- After each pair: `node tools/check.js <id>` until clean. At the end: `node tools/check.js --all` and `node tools/build.js`. Look at one built page's figure in dist (SVG present, no overflow warnings in the build output).
- Only create your own files. Do NOT edit tools/, assets/, data/ or other lessons. Other agents work in parallel; ignore check problems in files that are not yours.
