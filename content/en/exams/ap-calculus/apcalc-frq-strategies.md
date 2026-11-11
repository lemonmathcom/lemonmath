---
title: AP Calculus free-response types and how to write them
description: How AP Calculus free-response questions are scored, the recurring question types, justification sentences that earn points, and a worked 9-point example.
minutes: 35
type: guide
---

:::goals
- Know how the six free-response questions are organized, timed and scored.
- Recognize the recurring question types and what each one usually asks.
- Write justifications in the form graders accept.
- Avoid the presentation errors that cost points even when the mathematics is right.
:::

The free-response section is half of your AP Calculus score: six questions of nine points each. Unlike the multiple-choice section, every point is tied to something you write down. Students who understand the calculus but lose points on presentation are very common, and the remedy is concrete: learn what graders look for, and practise writing it. Everything in this guide comes from the published instructions and scoring guidelines on AP Central, which you should read for at least a few recent questions yourself.

## How the section works

- **Part A:** 2 questions in 30 minutes, graphing calculator required. Keep the calculator in **radian mode**.
- **Part B:** 4 questions in 60 minutes, no calculator.
- Each question is worth $9$ points, and the parts are scored independently: a wrong answer in part (a) does not stop you from earning points in part (b). If you cannot do part (a), assume a sensible value and carry on.
- Answers **do not need to be simplified**: $\dfrac{3}{2}\left(2^4-1\right)$ is as good as $22.5$.
- **Decimal answers** must be accurate to **three places after the decimal point**, rounded or truncated. Within one question, at most one point is lost for bad rounding, so keep full precision in intermediate steps and round only at the end.
- Work must be written in **standard mathematical notation**, not calculator syntax. $\displaystyle\int_1^5x^2\,dx$ is acceptable; "fnInt(X², X, 1, 5)" is not.

:::tip What the calculator may do without written steps
On Part A you may use the calculator to graph a function, solve an equation, find a derivative at a point and evaluate a definite integral, and you only write the setup and the result. For anything else, show the mathematics that leads to the answer.
:::

## The recurring question types

The exact mix changes every year, but these types return again and again. Knowing them means that on exam day you recognize the question instead of meeting it.

| Type | What is usually given | What is usually asked |
|---|---|---|
| Rates in context | A table or a formula for a rate in and a rate out | A Riemann or trapezoidal sum with units, a total amount, a time of maximum, the meaning of a derivative |
| Particle motion | Velocity as a formula, graph or table | When the particle moves left or right, speeding up or slowing down, position, total distance |
| Graph of $f'$ or of $f$ | A graph made of segments and arcs | Extrema and inflection points with justification, values of $g(x)=\displaystyle\int_a^xf(t)\,dt$ |
| Differential equation | $\dfrac{dy}{dx}$ in terms of $x$ and $y$ | Slope field sketch, tangent line approximation, solution by separation of variables |
| Area and volume | Two curves bounding a region | Area, volume with known cross sections, volume of revolution |
| Function analysis | A function defined implicitly, by a table, or as a composition | Derivatives with the chain rule, the mean value theorem or intermediate value theorem, a limit |
| BC only | Parametric or polar curves; a Taylor polynomial or power series | Speed, distance, polar area; Taylor polynomial, error bound, interval of convergence |

## Justification sentences that earn points

Graders award a justification point only when the reason is about the right function, is mathematically correct, and actually supports the conclusion. Name the function: scoring guidelines regularly refuse vague phrases like "the function" or "the graph" when it is not clear which one is meant.

| To conclude | Write this |
|---|---|
| Relative maximum of $f$ at $x=a$ | "$f'$ changes from positive to negative at $x=a$." |
| Relative minimum of $f$ at $x=a$ | "$f'$ changes from negative to positive at $x=a$." |
| Absolute extremum on $[a,b]$ | Candidates test: list $f$ at the endpoints and at the critical points, then pick the largest or smallest. |
| Inflection point at $x=a$ | "$f''$ changes sign at $x=a$", or "$f'$ changes from increasing to decreasing at $x=a$." |
| Speeding up at $t=c$ | "$v(c)$ and $a(c)$ have the same sign." |
| Particle changes direction at $t=c$ | "$v$ changes sign at $t=c$." |
| A value exists (IVT) | "$f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$, so ..." |
| A derivative value exists (MVT) | "$f$ is differentiable, hence continuous, on $[a,b]$, and $\dfrac{f(b)-f(a)}{b-a}=m$, so ..." |
| Over- or underestimate | Tie it to monotonicity (left and right sums) or concavity (tangent lines, trapezoids). |

Two habits help. First, state the **hypotheses** of a theorem before using it: continuity for the intermediate value theorem, differentiability for the mean value theorem. Second, interpret answers **in context, with units**: "At time $t=3$ hours, the amount of water in the tank is decreasing at a rate of $2.5$ liters per hour."

## A worked example with an illustrative scoring

The question below is original, written in the style of a no-calculator particle question. The point breakdown imitates the way published scoring guidelines split the $9$ points.

:::example A particle question, scored
A particle moves along the $x$-axis with velocity $v(t)=t^2-6t+8$ for $0\le t\le5$. At $t=0$ it is at $x=2$.

(a) On what open intervals is the particle moving to the left? Give a reason.
(b) Is the speed of the particle increasing or decreasing at $t=1$? Give a reason.
(c) Find the position of the particle at $t=3$.
(d) Find the total distance the particle travels from $t=0$ to $t=5$.

**Solution and points.**

(a) $v(t)=(t-2)(t-4)<0$ for $2<t<4$. The particle moves left on $(2,4)$ because $v(t)<0$ there. **2 points:** one for the interval, one for the reason.

(b) $v(1)=3>0$ and $a(t)=2t-6$, so $a(1)=-4<0$. Velocity and acceleration have opposite signs, so the speed is decreasing. **2 points:** one for $a(1)$, one for the conclusion with its reason.

(c) $x(3)=2+\displaystyle\int_0^3\left(t^2-6t+8\right)dt=2+\left[\frac{t^3}{3}-3t^2+8t\right]_0^3=2+6=8$. **2 points:** one for the integral with the initial position, one for the answer.

(d) Split where $v$ changes sign: $\displaystyle\int_0^2v\,dt=\frac{20}{3}$, $\displaystyle\int_2^4v\,dt=-\frac43$ and $\displaystyle\int_4^5v\,dt=\frac43$. The total distance is $\dfrac{20}{3}+\dfrac43+\dfrac43=\dfrac{28}{3}$. **3 points:** one for using $|v|$ or splitting at the sign changes, one for the antiderivative, one for the answer.
:::

Notice where points can disappear even with correct mathematics: an interval with no reason in (a), "slowing down" with no mention of $v$ and $a$ in (b), a position without the starting value $2$ in (c), and the net displacement $\dfrac{20}{3}$ instead of the distance in (d).

## Presentation habits that protect your score

:::warning Errors that cost points with correct mathematics
- **Bald answers.** On no-calculator questions, a number with no supporting work usually earns little.
- **Linkage errors.** Writing $\displaystyle\int_0^3v(t)\,dt=x(3)$ when you mean $x(3)-x(0)$: an equals sign between unequal things can cost the point.
- **Rounding too early.** Keep the full calculator value in memory; round only the reported answer.
- **Degree mode** on the calculator part.
- **Answering a different question.** "When is $f$ increasing?" needs intervals of $x$; "what is the maximum value?" needs a value of $f$, not $x$.
- **Missing units** when the question asks for them.
:::

:::tip How to practise in the last six weeks
1. Each week, do two released free-response questions under time: $15$ minutes each.
2. Grade yourself with the official scoring guideline, point by point, as strictly as a grader would.
3. Copy every justification you missed into your error log in the exact form the guideline uses.
4. Read the scoring commentary for one question a week: it shows real student responses and why each point was or was not earned.
:::

Released questions with scoring guidelines and sample responses for many past years are free on AP Central, on the AP Calculus AB and AP Calculus BC exam pages. They are the best practice material that exists, because they show not only the questions but also how real answers are marked.
