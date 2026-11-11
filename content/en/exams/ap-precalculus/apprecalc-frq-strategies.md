---
title: The four free-response types and how to score
description: How the four AP Precalculus free-response questions are organized and scored, what each type asks, the sentences that earn points, and a worked example.
minutes: 35
type: guide
---

:::goals
- Know how the free-response section is timed and scored.
- Recognize what each of the four question types usually asks.
- Write answers in the form the scoring guidelines reward: accurate decimals, supporting work, limit notation and interpretations in context.
- Practise on a worked question scored point by point.
:::

The free-response section is $37.5\%$ of your AP Precalculus score: four questions of $6$ points each. Every point is tied to something you write, so knowing what the graders look for is worth as much as knowing the mathematics. The advice here is based on the published scoring guidelines, student samples and chief reader reports on AP Central; reading two or three recent questions there yourself is the best preparation of all.

## How the section works

From the May 2027 exam, Section II lasts 1 hour 10 minutes and is written by hand.

| Part | Time | Calculator | Questions |
|---|---|---|---|
| A | 35 minutes | graphing calculator required | FRQ 1 Function Concepts, FRQ 2 Modeling a Non-Periodic Context |
| B | 35 minutes | not allowed | FRQ 3 Modeling a Periodic Context, FRQ 4 Symbolic Manipulations |

Each question is worth $6$ points. In recent scoring guidelines, the points are labelled by part (for example A1, A2, B1, B2, C1, C2), and each point is decided on its own. A mistake in one part does not stop you earning points in the next, so never leave a later part blank because an earlier one went wrong.

:::tip Three rules that cost points every year
- **Decimals:** unless a question says otherwise, decimal answers must be accurate to **three places after the decimal point**, rounded or truncated. Do not round in intermediate steps: store values in the calculator.
- **Supporting work:** when a point requires supporting work, an answer alone earns nothing. Write the expression you evaluate, such as $g\big(f(1)\big)$, before the number.
- **Exact values are fine:** a correct exact answer, such as $\ln5$ or $\dfrac{\sqrt3}{2}$, is acceptable where a decimal is requested.
:::

## The four question types

**FRQ 1, Function Concepts (calculator).** Functions are given by a graph, a table or a formula, often several at once, without a real-world context. Typical tasks: evaluate a composition or an inverse, solve an equation with the calculator and report every solution, decide where a function is increasing, decreasing, concave up or down, and describe end behavior or asymptotes. End behavior must be written with **limit notation**, such as $\displaystyle\lim_{x\to\infty}f(x)=0$.

**FRQ 2, Modeling a Non-Periodic Context (calculator).** A situation with data, for example a population or a price. Typical tasks: write equations from data points to find parameters, use the model to estimate a value, interpret a rate of change or a parameter in context, and judge whether the model fits or where it stops being reasonable. Interpretations need **units and the context**.

**FRQ 3, Modeling a Periodic Context (no calculator).** A situation that repeats, such as a wheel, a tide or a temperature, often with a graph. Typical tasks: find the period, amplitude, midline and phase shift, write the sinusoidal function, and describe where the function is increasing or decreasing and how its rate of change behaves.

**FRQ 4, Symbolic Manipulations (no calculator).** Rewrite and solve: use exponent, logarithm and trigonometric identities to write an expression in a required form, solve equations on an interval, and find domains. Every step should show which rule is used.

## Sentences that earn points

| To show | Write |
|---|---|
| End behavior | "$\displaystyle\lim_{x\to\infty}f(x)=3$" rather than "approaches $3$" |
| Increasing and concave down | "As $x$ increases, $f(x)$ increases at a decreasing rate" |
| Meaning of a parameter | "The population increases by $4\%$ each year" |
| Meaning of an average rate | "From 2020 to 2025, the price increased by $1.20$ dollars per year on average" |
| A model's limitation | Name a feature of the context the model cannot match, such as negative values or unbounded growth |
| All solutions | List every value in the interval, not only the one the calculator shows first |

## A worked question

:::example A non-periodic model (FRQ 2 style, calculator)
A cup of coffee cools in a room. Its temperature, in degrees Celsius, is modelled by $T(t)=20+ab^t$, where $t$ is the time in minutes. The temperature is $80^\circ$C at $t=0$ and $56^\circ$C at $t=5$.

(A) Find $a$ and $b$. **(2 points)**

(B) Use the model to find the temperature at $t=12$, and the time when the temperature is $40^\circ$C. **(2 points)**

(C) Find $\lim\limits_{t\to\infty}T(t)$ and explain its meaning in context. **(2 points)**

**Model answer.** (A) At $t=0$, $T(0)=20+a=80$, so $a=60$. *[A1: an equation using the data]*

At $t=5$, $20+60b^5=56$, so $b^5=0.6$ and $b=0.6^{1/5}\approx0.902880$. *[A2: correct value, three decimals or more]*

(B) Using the stored value of $b$, $T(12)=20+60b^{12}\approx20+60\cdot0.293470\approx37.608^\circ$C. *[B1]*

Solving $20+60b^t=40$ gives $b^t=\dfrac13$ and $t=\dfrac{\ln(1/3)}{\ln b}\approx10.753$ minutes. *[B2: expression shown, then the value]*

(C) Since $0<b<1$, $b^t\to0$, so $\lim\limits_{t\to\infty}T(t)=20$. *[C1: limit notation]*

In context, the coffee's temperature gets closer and closer to $20^\circ$C, the temperature of the room, as time goes on. *[C2: meaning with units and context]*

So $a=60$, $b\approx0.903$, $T(12)\approx37.608^\circ$C, the coffee reaches $40^\circ$C after about $10.753$ minutes, and the limit is $20^\circ$C.
:::

Notice where points would be lost: writing $b\approx0.9$ (not accurate to three places), rounding $b$ before computing $T(12)$, giving $10.753$ without the equation, or writing "it levels off" without limit notation and without the room temperature.

:::warning Common reasons for lost points
- **Too few decimals** or rounding early.
- **Missing a solution** when the calculator shows several intersections.
- **Vague interpretations** with no units or no reference to the context.
- **Calculator syntax** in place of mathematical notation in written work.
- **Using the wrong mode:** Part B has no calculator, but on Part A keep the calculator in radian mode for trigonometric models.
:::

## A plan for the 70 minutes

1. **Part A (35 minutes):** about $17$ minutes per question. Start each question by writing what is given: the data points, the domain, the units.
2. **Part B (35 minutes):** read both questions first; the symbolic question often has quick parts worth doing early.
3. **Check:** reread each part's verb. "Find" needs a value, "explain" needs a sentence, "justify" needs a reason tied to the function.

:::terms
- free-response question (FRQ) | câu tự luận
- scoring guidelines | hướng dẫn chấm
- supporting work | phần trình bày dẫn đến đáp số
- limit notation | kí hiệu giới hạn
- end behavior | dáng điệu ở vô cực
- interpret in context | giải thích theo tình huống
- truncate | cắt bớt chữ số
:::
