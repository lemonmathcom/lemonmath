# Brief: grade 12 chapter "Ôn thi tốt nghiệp THPT" / "Graduation exam revision"

Project root: /home/claude/lemonmath. Files go to content/vi/g12/<id>.md and content/en/g12/<id>.md (same id, same structure, same numbers).

## Read first (mandatory)
- _templates/WRITING-SPEC.md, especially section 2b (decided standard): compact Pólya-style solutions (one idea sentence, calculation lines, conclusion), voice "bạn"/"ta", NO parameter-m problems, `:::exercise` boxes with `::hint` (Kiến thức / Gợi ý các bước) and `::solution`, mandatory `:::quiz` mini test at the end (≥4 `::mc`, ≥1 `::tf`, ≥2 `::sa`; sa keys are numbers of at most 4 characters, VI uses decimal comma).
- _templates/GLOSSARY.md: English must use standard British textbook terms, never word-by-word translation.
- One model lesson in both languages: content/vi/g12/max-min-values.md and content/en/g12/max-min-values.md (copy its box syntax exactly). Look at content/vi/g12/grouped-range-iqr.md for a quiz with a table.
- Front matter: title, description, minutes (from data/curriculum.json).

## What a revision lesson ("review-*") is
A revision lesson revisits a whole topic of grades 11–12 the way the graduation exam (THPT, 12 MC + 4 TF + 6 SA, 90 min) tests it. Structure:
1. `:::goals` — what the student can do after revising.
2. Short intro: which exam parts this topic usually appears in, and how many points it is typically worth (say "thường" / "usually"; do not invent official statistics).
3. 3–4 `##` sections, one per sub-topic. Each: a compact summary (formulas in a `:::theorem` or `:::note` box, or a small table), the typical exam question types, and 1–2 `:::example` items written exactly like exam items (one MC example, one TF example with four claims a)–d) solved claim by claim, one SA example whose answer fits 4 boxes). Common traps in a `:::warning` box.
4. `:::terms` box (key terms VI–EN).
5. `## Bài tập` / `## Exercises`: 10 `:::exercise` boxes mixing exam formats (state the format in the title, e.g. "Trắc nghiệm", "Đúng/Sai", "Trả lời ngắn", "Tự luận"), graded easy → hard, including at least 2 real-life contexts. Each with `::hint` and `::solution`.
6. `:::quiz` mini test (4 mc, 1 tf, 2 sa), all with explanations.
Length: 1,800–3,000 words per language. At least 1 figure (`:::graph` or `:::diagram`) where it helps; reuse syntax from existing g12 lessons.

## "exam-format-strategy" (Cấu trúc đề thi và cách làm bài)
Explain the 2025+ format: Part I 12 MC × 0.25; Part II 4 TF questions, each with 4 claims, scoring 0.1/0.25/0.5/1 for 1/2/3/4 correct claims; Part III 6 SA × 0.5, answers written in 4 boxes (sign and decimal comma take a box). 90 minutes, total 10. Strategy: time plan, order of work, how to treat TF claims independently, rounding rules for SA (round as the question says; fill boxes left to right), checking with a calculator, common mistakes. Worked examples: one of each type. Still needs goals, terms, ≥3 examples, ≥4 `##`, 6–10 exercises, mini test. Be factual; where unsure, phrase generally ("theo cấu trúc đề minh hoạ của Bộ GD&ĐT từ năm 2025").

## Quality rules
- All problems original (do not copy from any book or website). Every number must work out: re-solve every exercise, example and quiz item yourself and check with `node -e` arithmetic when useful.
- TF keys: four letters T/F (VI may write Đ/S), each claim independently checkable.
- MC: exactly four options A.–D., one correct, plausible distractors from typical mistakes.
- Stay within the KNTT grade 11–12 programme; no parameter m.
- After writing each pair, run `node tools/check.js <id>` from the project root and fix until clean. At the end run `node tools/check.js --all` and `node tools/build.js` (must finish without errors).
- Do NOT edit tools/, assets/, data/ or other lessons.
