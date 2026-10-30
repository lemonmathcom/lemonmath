# Lemonmath lesson writing spec

Read this whole file before writing. It is the contract between the lesson files and the website builder.
(Tiếng Việt: file này là "hợp đồng" giữa bài học và công cụ dựng website. Đọc hết trước khi viết.)

## 1. What you are writing

One lesson = **two files with the same lesson id**: an English file and a Vietnamese file.

```
content/en/g10/<lesson-id>.md
content/vi/g10/<lesson-id>.md
```

Audience: Vietnamese students in grade 10 (age 15–16), and English-speaking learners following the same course.
Curriculum: Vietnam's 2018 general education programme, Mathematics 10, topics and order as in the *Kết nối tri thức* textbook.
Lesson ids, titles and chapters are fixed by `data/curriculum.json`. Do not rename them.

**The text must be original.** Do not copy sentences, problems or figures from any textbook or website. Teach the same topics in your own words, with your own examples and numbers.

### Teaching style
- Friendly, clear, step by step. Short paragraphs. Talk to the student ("you").
- Order inside a lesson: a picture or a small real-life example → the idea in plain words → the formal definition/rule → worked examples (easy → harder) → common mistakes → practice.
- Every worked example shows **every step** of the solution with a short reason for each step.
- Length: about 1000–1800 words of prose per language, **at least 3 worked examples**, **8 to 10 practice exercises** (easy, medium, a few challenging), with full solutions.
- Use real contexts when natural (phone plans, football scores, school canteen), but keep the maths primary.

## 2. File format

```
---
title: Short lesson title in this file's language
description: One sentence, at most 155 characters, saying what the student learns.
minutes: 15
---
```
`minutes` = estimated reading + working time. The title must be the lesson title from `data/curriculum.json` for that language (you may improve the wording slightly but keep the meaning).

Then Markdown. **Do not write `# Title`** (the page adds it). Use `##` for main sections (4–7 of them) and `###` for sub-sections. Standard Markdown: **bold**, *italic*, lists, tables. Never use raw HTML.

### Required skeleton (same in both languages)

```
:::goals
- Goal 1 ...
- Goal 2 ...
- Goal 3 ...
:::

Opening paragraph(s): a hook, why this matters.

## First idea
...
:::definition Name of the definition
...
:::

:::example Title of the example
Problem statement.

**Solution.**
Step 1 ...
:::

:::warning Common mistake
...
:::

## Key terms
:::terms
- statement | mệnh đề
:::

## Summary
- bullet recap (3–6 bullets)

## Practice
:::practice
1. Easy problem.
2. ...
10. Challenge.
:::

:::solution Show solutions
1. Full worked solution ...
2. ...
:::
```

Rules for the skeleton:
- `:::goals` first. `:::terms` once per lesson, near the end, **6–12 pairs**. `## Practice` last. `## Summary` just before it.
- In the Vietnamese file use the headings `## Tóm tắt`, `## Luyện tập`, `## Thuật ngữ`. In English: `## Summary`, `## Practice`, `## Key terms`.
- Practice: ONE `:::practice` box holding a numbered list (`1.` `2.` ...), then ONE `:::solution` box holding the **same numbering** with complete solutions (steps, not just answers).
- Box types you may use: `goals`, `definition`, `theorem`, `example`, `note`, `tip`, `warning`, `practice`, `solution`, `terms`, `graph`, `diagram`.
- A box title goes after the type on the opening line: `:::definition Negation of a statement`.
- **Boxes cannot be nested.** Never put a `:::` box inside another box. Close each box with a line that is just `:::`.
- Worked solutions of examples are written **inside** the `:::example` box (visible), after a bold "**Solution.**" / "**Lời giải.**".
- Inside boxes you can use lists, bold and maths normally. Leave a blank line before and after every `:::` line.

### `:::terms`
One pair per line, `first-language term | other-language term`:
- In the English file: `English term | Vietnamese term`
- In the Vietnamese file: `Vietnamese term | English term`
Same terms, same order in both files.

## 3. Mathematics (KaTeX)

- Inline: `$x^2+1$`. Display: `$$ ... $$` on its own lines. Only KaTeX-supported LaTeX (`\dfrac`, `\sqrt`, `\vec{u}`, `\overrightarrow{AB}`, `\widehat{ABC}`, `\begin{cases}`, `\begin{aligned}`, `\mathbb{R}`, `\in`, `\subset`, `\cup`, `\cap`, `\Rightarrow`, `\Leftrightarrow`, `\forall`, `\exists`, `\neq`, `\leq`, `\geq`, `\approx`, `\pm`, `^\circ` ...).
- Words inside formulas go in `\text{...}`.
- Do not use `$` for money. Write the currency in words ("50 000 đồng", "5 dollars").
- In a table cell, avoid the `|` character in maths (use `\mid`).
- **Every number, equation, answer and figure must be mathematically correct.** Verify with Python (`sympy`, `fractions`, `numpy`) before you write it down: run the computation for each worked example and each exercise. If a problem has a unique answer, state it. Avoid ambiguous problems.
- The English and Vietnamese files must contain **exactly the same problems with the same numbers and the same answers**, in the same order. Only the language (and the notation conventions below) differs.

### Notation: follow the convention of each language

| Idea | English file | Vietnamese file |
|---|---|---|
| decimal numbers | `2.5` | `2{,}5` inside maths, `2,5` in prose |
| intervals / segments | `(a, b)`, `[a, b]` | `(a; b)`, `[a; b]` |
| coordinates | `A(1, 2)` | `A(1; 2)` |
| vectors | `\overrightarrow{AB}`, `\vec{u}` | `\overrightarrow{AB}`, `\vec{u}` |
| angle | `\angle ABC` | `\widehat{ABC}` |
| arrangements / combinations | `P(n,k)` and `\binom{n}{k}` | `A_n^k` and `C_n^k` |
| permutations | `n!` | `P_n = n!` |
| solution set | `S = \{...\}` | `S = \{...\}` |
| "such that" in sets | `\{x \mid x>2\}` | `\{x \mid x>2\}` |
| mean, median, mode | `\bar{x}`, `M`, mode | `\bar{x}`, `M_e`, `M_o` |
| variance, st. deviation | `s^2`, `s` | `s^2`, `s` (and `\sigma` only if the textbook concept does) |
| open/closed interval word | open interval | khoảng, đoạn, nửa khoảng |
| angle of triangle | A, B, C; sides a, b, c | A, B, C; sides a, b, c |

Vietnamese terminology must be that of the Vietnamese school textbooks (e.g. mệnh đề, mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương, điều kiện cần/đủ, tập hợp con, giao, hợp, hiệu, phần bù, bất phương trình, miền nghiệm, định lí côsin, định lí sin, vectơ, tích vô hướng, số trung bình cộng, trung vị, tứ phân vị, phương sai, độ lệch chuẩn, tam thức bậc hai, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton, biến cố, không gian mẫu). The Vietnamese must read naturally, as written by a good Vietnamese maths teacher, not as a translation. The English must read naturally too.

## 4. Figures

Figures are written as text and drawn by the site. Every figure **needs an `alt:` line** (a sentence describing the picture, in that file's language). A title after the box type becomes the caption (maths allowed). Use figures where a picture really helps: graphs of functions, shaded regions, triangles, vectors, circles, conics (use `graph` with `plot`), for Venn diagrams and number-line intervals see the recipes below. The `graph`/`diagram` lines (numbers, coordinates) must be **identical in both languages**; only `alt:`, captions and quoted labels may differ.

### `:::graph Optional caption`
Lines (one per line, any order):
```
alt: Description of the picture                      (required)
x: -4..6                                             (required: visible x range)
y: -3..8                                             (required: visible y range)
plot: x^2 - 2x - 3                                   function of x; add "; dashed" to dash it
plot: sqrt(x) ; 0..9                                 optional domain after a semicolon
point: (1, -4) "V" below                             filled point, optional label, optional position
open: (3, 0) "B" above                               hollow point
vline: 1 ; dashed          hline: 3                  vertical / horizontal line
segment: (0, 0) (3, 4)                               line segment
region: x + y <= 3                                   shade a half-plane; boundary line drawn (dashed if < or >)
region: y >= 0                                       several region lines shade their INTERSECTION (a system)
label: (2, 1) "text"                                 free text
```
Expressions: `+ - * / ^`, parentheses, `x`, `y`, numbers, `pi`, `e`, `sqrt() abs() sin() cos() tan() ln() log()`; `2x` means 2*x. Label positions: above, below, left, right, above-left, above-right, below-left, below-right. Labels in quotes are plain text (use `A_1` for a subscript). Use graphs to draw lines too (`plot: 2x + 1`) and circles/conics are drawn with `plot` using two branches, e.g. `plot: sqrt(9 - x^2)` and `plot: -sqrt(9 - x^2)`; for a circle also add `x: -4..4` and `y: -4..4` so the aspect ratio is square. An ellipse `x^2/25 + y^2/9 = 1` is `plot: 3*sqrt(1 - x^2/25)` and `plot: -3*sqrt(1 - x^2/25)`; a hyperbola branch is `plot: 3*sqrt(x^2/16 - 1) ; 4..8` (and the three other branches likewise); a parabola `y^2 = 4x` is `plot: 2*sqrt(x)` and `plot: -2*sqrt(x)`.
Keep x/y ranges proportional to what you want to see (the picture keeps its true aspect ratio up to a maximum height).

### `:::diagram Optional caption`
```
alt: Description of the picture                      (required)
point A 0,0                                          declare points first: name, x,y (math units, y up)
point B 4,0 below                                    optional label position
point C 1,3 above-left "C'"                          optional quoted label text (default: the name)
segment A B            segment A B dashed            line segment
arrow A B "u"          arrow A B                     vector (arrow head at B), optional label
polygon A B C                                        draws and lightly fills the polygon
circle O 2                                           circle with centre = a declared point, radius in math units
angle A B C "α"                                      angle arc at vertex B between BA and BC, optional label
right A B C                                          right-angle mark at B
mark A B 1                                           1, 2 or 3 tick marks on segment AB (equal lengths)
label 2,1 "text"                                     free text at math coordinates
axes                                                 draw x and y axes through the origin
grid                                                 light unit grid
```
Point names may contain letters, digits, and `'` (e.g. `A'`). Points that must not show a dot/label can get an empty quoted label: `point M 2,2 "" `.
Scale is automatic and equal on both axes; choose coordinates so the picture looks right (a triangle with sides 3-4-5 as (0,0),(4,0),(4,3), etc.).

### Recipes
**Venn diagram** (two or three sets): a `diagram` with unlabeled centre points and overlapping circles, plus free labels, e.g.
```
:::diagram Two overlapping sets
alt: Two overlapping circles labelled A and B
point P 0,0 ""
point Q 1.5,0 ""
circle P 1.2
circle Q 1.2
label -0.6,0 "A"
label 2.1,0 "B"
label 0.75,0 "A∩B"
:::
```
Use `label` for the elements too (e.g. `label -0.6,0.4 "1, 2"`). Use `point` + `circle` for a universal-set rectangle only if needed (`polygon` of four points works as the rectangle).

**Number line / interval**: a `graph` with a flat y range, the segment, and filled (closed end) or open (open end) points:
```
:::graph The interval $[-1; 3)$
alt: Number line with a segment from -1 to 3, closed at -1 and open at 3
x: -3..5
y: -1..1
segment: (-1, 0) (3, 0)
point: (-1, 0) "-1" below
open: (3, 0) "3" below
:::
```

## 5. Links
Link to another lesson: `[Law of cosines](lesson:triangle-relations)`. Use ids from `data/curriculum.json`. Do not link outside the site. No images (use figures).

## 6. Check your work (mandatory)

From the project folder run:

```
node tools/check.js <lesson-id>
```

It builds both files, checks every formula and figure, and compares English with Vietnamese (sections, examples, exercises, figures, number of formulas). Fix everything it reports. It must end with "Tất cả đều ổn." (all fine).
Also re-read your Vietnamese and English text once, as a student would.
