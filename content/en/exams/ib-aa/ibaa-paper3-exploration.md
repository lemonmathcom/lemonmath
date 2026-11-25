---
title: Paper 3 and the mathematical exploration (IA)
description: How HL Paper 3 extended problems work, with a worked example, and how to plan, write and self-assess the IB Maths AA exploration against its five criteria.
minutes: 35
type: guide
---

:::goals
- Know what HL Paper 3 looks like and how its long questions are built.
- Work through a Paper 3 style problem: simple cases, a pattern, a conjecture, a proof.
- Understand the five criteria of the mathematical exploration and what earns marks in each.
- Plan the exploration from topic choice to final check.
:::

You are used to exam questions that give you a problem and ask for an answer. IB Maths AA has two components that work differently, and they can feel strange the first time. **Paper 3**, for HL students only, gives two long problems that build step by step towards a general result. The **mathematical exploration**, the internal assessment (IA) for both SL and HL, is a piece of independent writing on a topic you choose. Each is worth 20% of the final grade, so both deserve deliberate preparation. We will look at how the long questions of Paper 3 are built, and then at how an exploration is marked.

## What Paper 3 looks like

HL Paper 3 has two extended problem-solving questions, a graphing calculator is required, and it is worth 55 marks and 20% of the HL grade. From the 2025 exams it lasts 1 hour 15 minutes (older documents say 1 hour). The questions are long, but do not let that worry you: they are strongly guided. The first parts are easy and concrete, and each part prepares the next. Together they often follow the same arc as mathematical research:

1. **Explore** small cases, by hand or on the GDC, to get a feel for the situation.
2. **Spot a pattern** in the results and write it as a conjecture.
3. **Prove** the conjecture, often with algebra, induction or calculus, so that you know it holds in every case.
4. **Extend** the result to a new situation.

The topic may be unfamiliar, but the tools are always from the syllabus, so there is no need to panic. Read the whole question first: later parts often reveal what an earlier part is aiming for.

## A worked Paper 3 style problem

:::example Polygons inside a circle
A regular $n$-sided polygon is inscribed in a circle of radius $1$.

(a) Show that its area is $A_n=\dfrac n2\sin\left(\dfrac{2\pi}{n}\right)$. [3 marks]
(b) Find the exact values of $A_4$ and $A_6$. [3 marks]
(c) Use your GDC to find $A_{100}$, and make a conjecture about $A_n$ as $n\to\infty$. [3 marks]
(d) Prove your conjecture. [4 marks]

**Solution.** (a) Join the center to the vertices: this makes $n$ congruent triangles with two sides of length $1$ and an included angle $\dfrac{2\pi}{n}$. Each has area $\dfrac12\sin\dfrac{2\pi}{n}$, so $A_n=\dfrac n2\sin\dfrac{2\pi}{n}$.

(b) $A_4=2\sin\dfrac\pi2=2$ and $A_6=3\sin\dfrac\pi3=\dfrac{3\sqrt3}{2}$.

(c) $A_{100}\approx3.1395$. Conjecture: $A_n\to\pi$, the area of the circle.

(d) Let $x=\dfrac{2\pi}{n}$, so $x\to0^+$ as $n\to\infty$. Then $A_n=\dfrac{\pi}{x}\sin x=\pi\cdot\dfrac{\sin x}{x}\to\pi\cdot1=\pi$, using $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ (or L'Hôpital's rule).
:::

This pattern is a typical one. We start from concrete values, try a numerical experiment, and state a conjecture in words and symbols. We finish with a short proof that uses a standard result. When you meet a new problem, look for these same steps.

:::tip Habits for Paper 3
- Do not skip the easy first parts: they carry marks, and they give you the idea for what follows.
- When a part says "conjecture", state a precise mathematical statement, not a vague description.
- If you cannot prove a part, assume its result and use it in later parts. You will not be stuck.
- Keep an eye on the clock: two questions in 75 minutes means roughly 35 minutes each, plus checking.
:::

## The mathematical exploration: the five criteria

The exploration is different because the question is yours. It is a written report, recommended at about 12 to 20 pages, on a mathematical question you choose. Your teacher marks it, and the IB may moderate the marks. It is marked out of 20, with five criteria:

| Criterion | Marks | What it rewards |
|---|---|---|
| A. Presentation | 4 | A coherent, well-organized and concise report with a clear aim |
| B. Mathematical communication | 4 | Correct, consistent notation and terminology; suitable graphs, tables and diagrams |
| C. Personal engagement | 3 | Your own thinking: choices, questions and ideas that are clearly yours |
| D. Reflection | 3 | Critical evaluation of results, methods, limitations and significance |
| E. Use of mathematics | 6 | Mathematics that is relevant, correct and at the level of your course, and that you understand |

Criterion E carries the most marks, but it depends on the others. Mathematics that is not clearly communicated, or not connected to your aim, cannot show that you understand it. So do not put all your effort into the calculations and forget the writing.

## Choosing a topic and writing the report

A good topic is **personal**, **focused** and **mathematical**. Compare two ways of setting one. "The mathematics of music" is too broad, and it is hard to know where to start. "Modelling the frequencies of a guitar's frets with a geometric sequence and measuring the error" is focused, has real mathematics, and connects to something you do.

:::note A structure that works
1. **Introduction and aim:** why the topic interests you and the precise question you will answer.
2. **Background:** only the definitions and results you need, in your own words.
3. **Body:** the mathematics, step by step, with every symbol defined and every graph labelled.
4. **Reflection along the way:** comment on what each result means as soon as you have it, not only at the end.
5. **Conclusion:** answer the aim you set, and discuss limitations and possible extensions.
6. **Bibliography:** every source you used.
:::

:::warning Common traps
- **A textbook summary.** Repeating known theory without your own question earns few marks in C and E.
- **Mathematics below the course level.** For AA, a project that uses only percentages and bar charts cannot score well in E.
- **Mathematics above your understanding.** Copying advanced methods that you cannot explain also loses marks in E.
- **Reflection only in the last paragraph.** Criterion D rewards critical comments throughout.
- **Notation drift:** $=$ where $\approx$ is meant, undefined variables, or mixing degrees and radians. Many students slip here, so read it through carefully before you submit.
:::

## A timeline for the exploration

1. **Topic and aim:** brainstorm three ideas, check each for real AA mathematics, and agree one with your teacher.
2. **First draft:** write the mathematics first, then the introduction and conclusion.
3. **Feedback:** your teacher can comment on one draft; read the comments carefully and act on them.
4. **Self-assessment:** mark your draft against the five criteria, as strictly as a moderator would.
5. **Final version:** check every symbol, label, reference and page.

Both Paper 3 and the exploration reward the same habit: thinking like a mathematician, not just answering questions. The two components look unfamiliar, but they ask for one way of thinking, and practice builds it. When it starts to feel familiar, try the [SL practice paper](lesson:ibaa-practice-paper-sl).
