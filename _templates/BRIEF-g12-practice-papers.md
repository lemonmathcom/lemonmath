# Brief: grade 12 graduation practice papers (practice-paper-thpt-1 … 4)

Project root: /home/claude/lemonmath. Files: content/vi/g12/<id>.md and content/en/g12/<id>.md (same numbers, same keys).
Read first: _templates/WRITING-SPEC.md (section 2b), _templates/GLOSSARY.md, the quiz syntax in content/vi/g12/max-min-values.md, and the 8 revision lessons content/vi/g12/review-*.md (the papers must cover the same topics and say which revision lesson to revisit).

## File format
```
---
title: Đề luyện thi tốt nghiệp số N
description: <one sentence>
minutes: 90
type: exam
---

<2–4 sentence intro: 90 minutes, 3 parts, how marks work, do it on the printed sheet first, then enter answers below to be marked out of 10.>

:::quiz exam
::mc
<question>
A. …
B. …
C. …
D. …
::key B
<full but compact solution: idea sentence, calculation lines, conclusion. End with "Ôn lại: [tên bài](lesson:review-…)." / "Revise: [title](lesson:review-…).">
… 12 ::mc, then 4 ::tf (claims a)–d), key like "Đ S Đ Đ" in VI, "T F T T" in EN), then 6 ::sa (key: a number written in at most 4 characters, VI decimal comma, no trailing zero: 1,1 not 1,10)
:::
```
No `:::exercise`, `:::goals`, `:::terms` needed. `node tools/check.js <id>` requires exactly 12-4-6.

## Content (follow the Ministry's 2025 sample structure and difficulty spread)
- Part I (12 MC): mostly recognition/understanding; roughly: monotonicity/extrema/asymptotes/graph reading (3), antiderivative/integral (2), Oxyz (2–3), space geometry (1–2), statistics grouped data (1–2), probability (1), exp/log/trig/sequences (1–2).
- Part II (4 TF, each 4 claims a)–d) getting harder from a) to d)): e.g. one function/derivative context, one real-life integral or motion context, one Oxyz context, one probability (conditional / Bayes) context.
- Part III (6 SA, application level): real-life optimisation, space geometry distance/angle/volume, Oxyz real model (drone, cable, plane), probability, integral area/volume, exp/log growth. Answers fit 4 boxes; say how to round when not exact.
- Each paper different from the others and from examples in the revision lessons; papers 1→4 slightly harder.
- KNTT grade 11–12 scope. NO parameter-m problems. NO integration by substitution or by parts.
- All problems original. Re-solve every item (python/sympy) before finalising. MC distractors come from real typical mistakes.
- No `:::graph`/`:::diagram` inside the quiz (not supported there). Describe figures in words, or give a table of variations / data as a markdown table (tables inside quiz items work: see content/vi/g12/grouped-range-iqr.md).
- Run `node tools/check.js <id>` until clean, then `node tools/check.js --all` and `node tools/build.js`. Only create your own files.
