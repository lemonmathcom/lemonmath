# Lemonmath lesson writing spec

Read this whole file before writing. It is the contract between the lesson files and the website builder.
(Tiếng Việt: file này là "hợp đồng" giữa bài học và công cụ dựng website. Đọc hết trước khi viết.)

## 1. What you are writing

One lesson = **two files with the same lesson id**: an English file and a Vietnamese file.

```
content/en/g<N>/<lesson-id>.md
content/vi/g<N>/<lesson-id>.md
(<N> is the grade number: g10, g11 or g12)
```

Audience: Vietnamese students in grade <N> (age 15–18; grade 10 = 15–16, grade 11 = 16–17, grade 12 = 17–18), and English-speaking learners following the same course.
Curriculum: Vietnam's 2018 general education programme, Mathematics <N> (grade 10, 11 or 12), topics and order as in the *Kết nối tri thức* textbook.
Lesson ids, titles and chapters are fixed by `data/curriculum.json`. Do not rename them.

**The text must be original.** Do not copy sentences, problems or figures from any textbook or website. Teach the same topics in your own words, with your own examples and numbers.

### Teaching style
- Friendly, clear, step by step. Short paragraphs. Talk to the student ("you").
- Order inside a lesson: a picture or a small real-life example → the idea in plain words → the formal definition/rule → worked examples (easy → harder) → common mistakes → practice.
- Every worked example shows **every step** of the solution with a short reason for each step (see section 2b for the exact layout).
- Length: see section 2b (depends on the grade), **at least 3 worked examples** (4–6 preferred), **8 to 10 exercises** in `:::exercise` boxes, each with hints and a full solution.
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
Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Easy problem.

::hint
**What you need:** ...

**Steps:**
1. ...

::solution
Short worked solution ...

**Answer.** ...
:::

(... one :::exercise box per exercise, 8–10 in total ...)

:::exercise Challenge
...
:::
```

Rules for the skeleton:
- `:::goals` first. `:::terms` once per lesson, near the end, **6–12 pairs**. `## Practice` last. `## Summary` just before it.
- In the Vietnamese file use the headings `## Tóm tắt`, `## Luyện tập`, `## Thuật ngữ`. In English: `## Summary`, `## Practice`, `## Key terms`.
- Practice: one `:::exercise` box per exercise, each with `::hint` and `::solution` parts (see section 2b). The old `:::practice` + `:::solution` lists still build but are no longer used for new lessons.
- Box types you may use: `goals`, `definition`, `theorem`, `example`, `note`, `tip`, `warning`, `practice`, `solution`, `exercise`, `terms`, `graph`, `diagram`.
- A box title goes after the type on the opening line: `:::definition Negation of a statement`.
- **Boxes cannot be nested.** Never put a `:::` box inside another box. Close each box with a line that is just `:::`.
- Worked solutions of examples are written **inside** the `:::example` box (visible), after a bold "**Solution.**" / "**Lời giải.**".
- Inside boxes you can use lists, bold and maths normally. Leave a blank line before and after every `:::` line.

### `:::terms`
One pair per line, `first-language term | other-language term`:
- In the English file: `English term | Vietnamese term`
- In the Vietnamese file: `Vietnamese term | English term`
Same terms, same order in both files.

## 2b. Writing standard (decided November 2026, applies to every grade)

Full discussion: the Lemonmath document "Tiêu chuẩn nội dung và cách viết lời giải". The model lesson is `content/*/g10/sign-of-quadratic.md` (its practice section is in the final format).

**Voice.** Explanations use "ta" (we); speak to the reader as "bạn" (you). Grades 1–5 speak to the child as "em". English files use British spelling (factorise, metres). Short sentences, one idea each, at most 3 sentences per paragraph. Never write "dễ thấy", "hiển nhiên", "ta suy ra ngay" / "clearly", "obviously": give the reason instead. No emoji.

**Scope.** Follow the GDPT 2018 programme only. Do not include problem types that left the programme, in particular **problems with a parameter m** ("tìm m để…"). A parametric equation of a line is fine (it is in the programme).

**Lesson order.** goals → opening situation with real numbers ending in a question → a small worked exploration (numbers or a picture) BEFORE the definition box → definition/theorem → "why is it true" in a few lines for the main theorem → 4–6 worked examples, easy to hard, with a one-sentence bridge between them → common mistakes (wrong working, why it is wrong, the right way) → summary written like a notebook page → key terms → practice.

**Worked examples (compact style).**
```
:::example Title
Problem statement.

**Lời giải.** One sentence giving the idea: which tool and why ("Hệ số của x² dương nên tam thức không âm với mọi x khi và chỉ khi Δ ≤ 0:").

$$ the computation, one transformation per line (use aligned for chains) $$

Vậy … (full-sentence conclusion with symbols; units for real-life problems).
:::
```
- Each step that is not routine gets a short lead-in sentence BEFORE the formula, ending with a colon ("Chuyển 15 sang vế trái rồi chia cho −5 (đổi chiều):").
- A rule that is easy to get wrong is explained where it is used (with a small numeric example the first time it appears).
- Add a one-line **Kiểm tra.** / **Check.** only when it teaches something (a boundary value, a sign check, units).
- Only for hard or many-data examples use the four labelled steps *Hiểu đề / Tìm cách giải / Giải / Nhìn lại* (EN *Understand / Plan / Solve / Look back*), 1–2 sentences each.

**Practice: one `:::exercise` box per exercise** (replaces the old `:::practice` + `:::solution` pair). The website numbers them, shows the knowledge and hints, and hides the solution behind a "Xem lời giải" button; the printable sheet takes statements and hints from the same boxes.
```
:::exercise
Giải $x^2-4x+3>0$.

::hint
**Kiến thức:** the fact, formula or rule needed (one or two lines).

**Gợi ý các bước:**
1. first move
2. second move

::solution
Compact solution in the same style as the examples (2–5 lines).

**Đáp số.** $S=(-\infty; 1)\cup(3; +\infty)$.
:::
```
- English labels: `**What you need:**`, `**Steps:**`, `**Answer.**`.
- Write `:::exercise Thử thách` / `:::exercise Challenge` for the hardest ones.
- 8–10 exercises: about 4 basic, 3–4 applied (at least one real-life), 1–2 challenge, and 1–2 that revisit an earlier lesson.
- Grades 10–12: include at least one exercise in each exam style of the graduation exam, written by us: a **true/false** item (a statement followed by four claims a) b) c) d), each judged Đúng/Sai with a reason in the solution) and a **short-answer** item (the answer is a single number, rounded as asked).
- Grade 9: at least one exercise in the style of the grade-10 entrance exam (several linked parts a, b, c).

**Mini test at the end of every lesson (required).** After the practice section, add `## Kiểm tra mini` / `## Mini test` with ONE `:::quiz` box in the format of the current graduation exam (smaller): **4 multiple-choice** questions (`::mc`, options `A.`–`D.` each on its own line), **1 true/false** question (`::tf`, a stem then claims `a)`–`d)`), **2 short-answer** questions (`::sa`, the answer is ONE number that fits in 4 boxes: at most 4 characters including the minus sign and the decimal comma, e.g. `12`, `-3`, `0,25`, `2,5`; say how to round). Each question ends with `::key` and the key on the same line (`::key B`, `::key Đ S Đ S` (EN `::key T F T F`), `::key 2,5` (EN `::key 2.5`)), followed by a 1–2 sentence explanation. Distractors must be the answers of real mistakes (wrong sign, forgot to exclude a value, wrong formula), never random. The website marks it like the exam (0.25 / 0.1–1 / 0.5) and the printed sheet gets answer boxes. Grades 1–5 use the same three parts with easy wording. Example:
```
## Kiểm tra mini

:::quiz
::mc
Tập nghiệm của bất phương trình $x^2+2x+3\le 0$ là
A. $\mathbb{R}$.
B. $\varnothing$.
C. $\{-1\}$.
D. $[-3; 1]$.
::key B
$\Delta'=1-3=-2<0$ và $a=1>0$, nên tam thức luôn dương.

::tf
Cho tam thức $f(x)=-x^2+2x+3$.
a) ...
b) ...
c) ...
d) ...
::key Đ Đ S Đ
a) Đúng: ... b) ... c) ... d) ...

::sa
Có bao nhiêu số nguyên $x$ thoả mãn $x^2-5x-6<0$?
::key 6
Hai nghiệm là $-1$ và $6$ ...
:::
```

**English terminology.** Use the standard British terms in `_templates/GLOSSARY.md` (e.g. "quadratic expression", "the cosine rule", "gradient", "scalar product", "table of variations", "turning point"). Never translate word by word.

**Lengths per language.** Grades 1–5: 600–1,200 words, very short sentences, pictures, few symbols; hints follow "Đề cho biết gì? Hỏi gì? Làm thế nào? Thử lại." Grades 6–9: 1,400–2,200 words. Grades 10–12: 1,800–3,000 words.

**Originality.** Every problem, number, situation and figure is our own. Reference books and exam collections may be read to learn which problem types and difficulty levels matter, never copied or closely paraphrased.

## 2c. Văn phong SGK Kết nối tri thức và văn phong đề thi (decided by the teacher, November 2026, overrides anything above that conflicts)

**Lời giải (examples, exercise solutions, quiz explanations) follow the KNTT textbook voice.**
- Label: `**Lời giải.**` (EN `**Solution.**`). No "Ý tưởng:" label; the first sentence simply says what we do, as KNTT does: "Ta có …", "Theo định lí Pythagore, ta có …", "Áp dụng hệ thức … cho tam giác vuông ABC, ta được …", "Điều kiện xác định: …".
- Linking words as in KNTT: "Ta có", "Do đó", "Suy ra", "Từ (1) và (2) suy ra", "Thay … vào …, ta được", "Ta thấy", "Vì … nên …". One step per line; a reason is given with "vì" / "(do …)", not with a separate paragraph.
- Geometry: "Xét tam giác ABC vuông tại A, ta có …"; state the reason of each statement in brackets ("(hai góc so le trong)", "(tính chất tiếp tuyến)").
- Equations/systems: "Vậy phương trình có hai nghiệm $x=1$, $x=3$." / "Vậy hệ phương trình có nghiệm duy nhất $(x; y) = (2; -1)$." / "Vậy tập nghiệm của bất phương trình là …". Word problems: "Gọi … là … ($x>0$, đơn vị: …). … Vậy …", with "Theo đề bài ta có phương trình …" and a check against the condition ("thoả mãn điều kiện").
- End with "Vậy …" and the answer; no extra commentary after it. Exercise solutions (`::solution`) then add the one-line answer `**Đáp số.** …` / `**Answer.** …` so students can check quickly.
- English mirrors the same structure with standard British phrasing ("We have …", "Hence …", "So …", "Substituting … into …, we get …", "Let $x$ be … ($x>0$)").

**Problem statements follow KNTT and the exam wording.**
- Exercises use the textbook verbs: "Tính …", "Giải phương trình …", "Giải hệ phương trình sau:", "Rút gọn biểu thức …", "Chứng minh rằng …", "Tìm … ", "Cho tam giác ABC vuông tại A, có …. Tính …". Real-life exercises: a short situation in plain sentences, then the question; KNTT-style headings "Luyện tập" / "Vận dụng" may appear in example titles.
- Grades 10–12 quiz items and practice papers copy the style of the Ministry's graduation exam (đề minh hoạ / đề chính thức from 2025):
  - MC: "Cho hàm số $y=f(x)$ có bảng biến thiên như sau: … Hàm số đã cho đồng biến trên khoảng nào dưới đây?", "Trong không gian $Oxyz$, cho mặt phẳng $(P): …$. Vectơ nào dưới đây là một vectơ pháp tuyến của $(P)$?", "Nguyên hàm của hàm số $f(x)=…$ là", "Tập nghiệm của bất phương trình … là".
  - TF: a stem "Cho hàm số …" / a real-life situation, then "Xét tính đúng sai của các mệnh đề sau:" (the website adds the a)–d) claims), each claim a complete statement ("a) Hàm số đã cho đồng biến trên khoảng $(1; +\infty)$.").
  - SA: a context then a precise question ending with the rounding instruction: "(làm tròn kết quả đến hàng phần mười)", "(kết quả làm tròn đến hàng phần trăm)".
  - EN translations keep the same structure in natural exam English ("Which of the following intervals …?", "Decide whether each statement is true or false.", "(give your answer to 1 decimal place)").
- Grade 9: exercises and the entrance-exam items use the style of the provincial grade-10 entrance exams ("Bài 1. (1,5 điểm) a) Giải phương trình … b) Giải hệ phương trình …", "Cho biểu thức $P = …$ với $x\geq 0$, $x\neq 1$. a) Rút gọn $P$. b) Tính giá trị của $P$ khi $x=…$").
- Grades 1–5: the wording of KNTT primary books ("Số?", "Tính nhẩm", "Đặt tính rồi tính", "Bài giải … Đáp số: …"), with "Bài giải" and "Đáp số" in primary word problems.

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

### Extra notation for grades 11 and 12

| Idea | English file | Vietnamese file |
|---|---|---|
| angle units | `60^\circ`, `\dfrac{\pi}{3}` (radians) | the same |
| trigonometric functions | `\sin, \cos, \tan, \cot` | the same (`\tan`, `\cot`; Vietnamese books write cot, not ctg) |
| general solutions | `x=\alpha+k2\pi,\ k\in\mathbb{Z}` | the same |
| sequence, term | `(u_n)`, `u_n` | `(u_n)`, `u_n` |
| arithmetic / geometric progression | common difference `d`, common ratio `q` | công sai `d`, công bội `q` |
| limits and infinity | `\lim_{x\to a}`, `+\infty` | the same |
| derivative | `f'(x)`, `y'`, second derivative `f''(x)` | the same |
| logarithms | `\log_a x`, `\log x` (base 10), `\ln x` | `\log_a x`, `\lg x` (base 10), `\ln x` |
| integrals | `\int_a^b f(x)\,dx`, `\Big[F(x)\Big]_a^b` | the same |
| vector / point in space | `A(1, 2, 3)`, `\vec{a}=(1, 2, 3)` | `A(1; 2; 3)`, `\vec{a}=(1; 2; 3)` |
| grouped data class | `[a, b)` | `[a; b)` |
| median, mode (grouped) | `M_e`, `M_o` as in grade 10 | `M_e`, `M_o` |
| conditional probability | `P(A\mid B)` | `P(A\mid B)` |
| dihedral angle / angle between planes | `\angle`-style words, no special symbol | `\widehat{(\alpha, \beta)}` or words as in the textbook |

Vietnamese terms for grades 11–12 (use these): góc lượng giác, radian, đường tròn lượng giác, hàm số tuần hoàn, phương trình lượng giác cơ bản, dãy số, cấp số cộng, cấp số nhân, công sai, công bội, mẫu số liệu ghép nhóm, nhóm số liệu, tần số, tần số tích luỹ, giá trị đại diện, giới hạn, hàm số liên tục, tiệm cận đứng / ngang / xiên, luỹ thừa, căn bậc n, lôgarit, hàm số mũ, đạo hàm, tiếp tuyến, đạo hàm cấp hai, cực trị, cực đại, cực tiểu, đồng biến, nghịch biến, giá trị lớn nhất, giá trị nhỏ nhất, khảo sát hàm số, đường thẳng chéo nhau, mặt phẳng, hình chóp, hình lăng trụ, hình hộp, phép chiếu song song, phép chiếu vuông góc, góc nhị diện, khoảng cách, thể tích, biến cố hợp, biến cố giao, biến cố độc lập, nguyên hàm, tích phân, vectơ trong không gian, hệ trục toạ độ Oxyz, mặt cầu, xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes.

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

### Shading the area under a curve (`fill`)
In `:::graph` you can shade the region between two curves with
```
fill: x^2 ; 0 ; 0..2        top curve ; bottom curve (0 = the x-axis) ; x-range
```
Typical use: the area under $y=f(x)$ for an integral, or between two curves. Draw the curve itself with a separate `plot:` line and mark the bounds with `vline: 2 ; dashed`.

### Figures in space (grades 11–12)
The site draws only flat pictures, so a solid is drawn in the usual **oblique style** with `:::diagram`: choose 2D coordinates for each vertex (front face as a square or rectangle, back face shifted up and to the right), draw visible edges with `segment`, hidden edges with `segment A B dashed`, and label the vertices. Example of a cube $ABCD.A'B'C'D'$:
```
:::diagram Cube ABCD.A'B'C'D'
alt: A cube drawn in oblique projection with the hidden edges dashed
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
:::
```
(Only edges hidden behind the front face are dashed.) Keep every figure simple: one solid and only the lines needed for the argument.

For graphs of trigonometric functions use `plot: sin(x)` and a range such as `x: -7..7`; mark special points such as $\left(\frac{\pi}{2}, 1\right)$ with `point:` and the label text "π/2". Exponential and logarithmic graphs: `plot: 2^x`, and for $\log_2 x$ use `plot: ln(x)/ln(2) ; 0.05..8`.

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
