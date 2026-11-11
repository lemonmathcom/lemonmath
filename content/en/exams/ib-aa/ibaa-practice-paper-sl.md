---
title: IB Maths AA SL practice paper
description: A full IB Maths AA SL Paper 1 style practice paper: 90 minutes, no calculator, 80 marks, Section A and Section B, with hints and full worked solutions.
minutes: 90
type: exam
---

This practice paper follows the format of IB Mathematics: Analysis and Approaches SL **Paper 1**: 90 minutes, **no calculator**, 80 marks, with short questions in Section A and longer questions in Section B. All questions are written by Lemonmath; they are not real IB questions, but they follow the syllabus and the style of the papers, including the [n marks] after each part.

| | Section A | Section B |
|---|---|---|
| Questions | 7 short questions | 3 long questions |
| Marks | 42 | 38 |
| Suggested time | about 45 minutes | about 45 minutes |

**Instructions.** Answer all questions. Show your working: a correct answer without working may not receive full marks. Give exact answers, such as fractions, surds or multiples of $\pi$, unless a question says otherwise. Work on paper with a timer. Each question shows a short hint below it: cover it unless you are stuck, and open the solution only after you have finished.

## Section A

:::exercise [6 marks]
In an arithmetic sequence, $u_1=4$ and $u_{10}=31$.

(a) Find the common difference. [2 marks]
(b) Show that $S_n=\dfrac{n(3n+5)}{2}$. [2 marks]
(c) Find the smallest value of $n$ for which $S_n>200$. [2 marks]

::hint
**What you need:** $u_{10}=u_1+9d$; $S_n=\dfrac n2\big(2u_1+(n-1)d\big)$; for (c), test values near the solution of $3n^2+5n=400$.

::solution
(a) $4+9d=31$, so $d=3$.

(b) $S_n=\dfrac n2\big(8+3(n-1)\big)=\dfrac n2(3n+5)$.

(c) $S_{10}=\dfrac{10\cdot35}{2}=175$ and $S_{11}=\dfrac{11\cdot38}{2}=209$. The smallest value is $n=11$.
:::

:::exercise [6 marks]
Let $f(x)=2x+1$ and $g(x)=x^2-3$.

(a) Find $(g\circ f)(x)$, giving your answer in the form $ax^2+bx+c$. [2 marks]
(b) Solve $(g\circ f)(x)=6$. [4 marks]

::hint
**What you need:** $(g\circ f)(x)=g\big(f(x)\big)=(2x+1)^2-3$.

::solution
(a) $(2x+1)^2-3=4x^2+4x-2$.

(b) $4x^2+4x-8=0$, so $x^2+x-2=0$ and $(x+2)(x-1)=0$: $x=1$ or $x=-2$.
:::

:::exercise [6 marks]
Solve $2\ln x-\ln(x+2)=\ln3$, giving your answer in the form $\dfrac{a+\sqrt b}{2}$, where $a,b\in\mathbb{Z}$.

::hint
**What you need:** $2\ln x-\ln(x+2)=\ln\dfrac{x^2}{x+2}$; then reject the root that makes $\ln x$ undefined.

::solution
$\dfrac{x^2}{x+2}=3$, so $x^2-3x-6=0$ and $x=\dfrac{3\pm\sqrt{33}}{2}$. Since $\ln x$ requires $x>0$, and $\sqrt{33}>3$, we reject $\dfrac{3-\sqrt{33}}{2}$. The solution is $x=\dfrac{3+\sqrt{33}}{2}$.
:::

:::exercise [7 marks]
Solve $2\sin^2x=1+\cos x$ for $0\le x\le2\pi$.

::hint
**What you need:** replace $\sin^2x$ by $1-\cos^2x$ to get a quadratic in $\cos x$.

::solution
$2-2\cos^2x=1+\cos x$, so $2\cos^2x+\cos x-1=0$ and $(2\cos x-1)(\cos x+1)=0$.

$\cos x=\dfrac12$ gives $x=\dfrac\pi3$ or $x=\dfrac{5\pi}{3}$. $\cos x=-1$ gives $x=\pi$.

The solutions are $\dfrac\pi3$, $\pi$, $\dfrac{5\pi}{3}$.
:::

:::exercise [5 marks]
Find the coefficient of $x^2$ in the expansion of $\left(x-\dfrac2x\right)^6$.

::hint
**What you need:** the general term is $\dbinom6rx^{6-r}\left(-\dfrac2x\right)^r=\dbinom6r(-2)^rx^{6-2r}$.

::solution
$6-2r=2$ gives $r=2$. The term is $\dbinom62(-2)^2x^2=15\cdot4x^2=60x^2$. The coefficient is $60$.
:::

:::exercise [6 marks]
Events $A$ and $B$ satisfy $P(A)=0.4$, $P(B\mid A)=0.5$ and $P(B\mid A')=0.25$.

(a) Find $P(B)$. [3 marks]
(b) Find $P(A\mid B)$. [3 marks]

::hint
**What you need:** a tree diagram; $P(A\cap B)=P(A)P(B\mid A)$.

::solution
(a) $P(A\cap B)=0.4\times0.5=0.2$ and $P(A'\cap B)=0.6\times0.25=0.15$, so $P(B)=0.35$.

(b) $P(A\mid B)=\dfrac{0.2}{0.35}=\dfrac47$.
:::

:::exercise [6 marks]
A function $f$ satisfies $f'(x)=6x^2-4x$ and $f(1)=3$.

(a) Find $f(x)$. [4 marks]
(b) Find $f(2)$. [2 marks]

::hint
**What you need:** integrate, then use $f(1)=3$ to find the constant.

::solution
(a) $f(x)=2x^3-2x^2+C$. $f(1)=0+C=3$, so $f(x)=2x^3-2x^2+3$.

(b) $f(2)=16-8+3=11$.
:::

## Section B

:::exercise [13 marks]
Let $f(x)=x^3-6x^2+9x+1$.

(a) Find $f'(x)$. [1 mark]
(b) Find the coordinates of the stationary points of the graph of $f$, and determine their nature. [6 marks]
(c) Find the coordinates of the point of inflection. [2 marks]
(d) Find the equation of the tangent to the graph of $f$ at $x=0$. [2 marks]
(e) Find the area of the region bounded by the graph of $f$, the $x$-axis and the lines $x=0$ and $x=3$. [2 marks]

::hint
**What you need:** $f'(x)=3(x-1)(x-3)$; $f''(x)=6x-12$; for (e), check that $f(x)>0$ on $[0,3]$.

::solution
(a) $f'(x)=3x^2-12x+9$.

(b) $f'(x)=3(x-1)(x-3)=0$ at $x=1$ and $x=3$. $f''(x)=6x-12$: $f''(1)=-6<0$, so $(1,5)$ is a maximum; $f''(3)=6>0$, so $(3,1)$ is a minimum.

(c) $f''(x)=0$ at $x=2$, and $f''$ changes sign there: $(2,3)$.

(d) $f(0)=1$ and $f'(0)=9$, so $y=9x+1$.

(e) The minimum value on $[0,3]$ is $1>0$, so the area is $\displaystyle\int_0^3f(x)\,dx=\left[\frac{x^4}{4}-2x^3+\frac{9x^2}{2}+x\right]_0^3=\frac{81}{4}-54+\frac{81}{2}+3=\frac{39}{4}$.
:::

:::exercise [12 marks]
In triangle $ABC$, $AB=5$, $AC=8$ and $\hat{A}=60^\circ$. The point $D$ lies on $AC$ such that $BD$ is perpendicular to $AC$.

(a) Show that $BC=7$. [3 marks]
(b) Find the area of triangle $ABC$. [2 marks]
(c) Find the exact value of $\sin A\hat{B}C$. [3 marks]
(d) Find the exact lengths $AD$ and $BD$. [4 marks]

::hint
**What you need:** the cosine rule, $\dfrac12ab\sin C$, the sine rule, and right-angled trigonometry in triangle $ABD$.

::solution
(a) $BC^2=25+64-2(5)(8)\cos60^\circ=89-40=49$, so $BC=7$.

(b) $\dfrac12(5)(8)\sin60^\circ=20\cdot\dfrac{\sqrt3}{2}=10\sqrt3$.

(c) $\dfrac{\sin B}{8}=\dfrac{\sin60^\circ}{7}$, so $\sin A\hat{B}C=\dfrac{8}{7}\cdot\dfrac{\sqrt3}{2}=\dfrac{4\sqrt3}{7}$.

(d) In the right triangle $ABD$: $AD=5\cos60^\circ=\dfrac52$ and $BD=5\sin60^\circ=\dfrac{5\sqrt3}{2}$. Check: $\dfrac12\cdot8\cdot\dfrac{5\sqrt3}{2}=10\sqrt3$, the area from (b).
:::

:::exercise [13 marks]
In a game, the probability of winning a round is $\dfrac14$, independently of other rounds. Mai plays $3$ rounds. Let $X$ be the number of rounds she wins.

(a) Write down the distribution of $X$. [1 mark]
(b) Find $P(X=0)$. [2 marks]
(c) Find $P(X\ge1)$. [2 marks]
(d) Find $P(X=2)$. [2 marks]
(e) Find $E(X)$. [1 mark]
(f) Mai pays $2$ dollars to play the three rounds and receives $3$ dollars for each round she wins. Determine whether the game is fair. [3 marks]
(g) Find the amount she should receive per win for the game to be fair. [2 marks]

::hint
**What you need:** $X\sim B\left(3,\dfrac14\right)$; $P(X\ge1)=1-P(X=0)$; a game is fair when the expected gain is $0$.

::solution
(a) $X\sim B\left(3,\dfrac14\right)$.

(b) $\left(\dfrac34\right)^3=\dfrac{27}{64}$.

(c) $1-\dfrac{27}{64}=\dfrac{37}{64}$.

(d) $\dbinom32\left(\dfrac14\right)^2\left(\dfrac34\right)=3\cdot\dfrac{1}{16}\cdot\dfrac34=\dfrac{9}{64}$.

(e) $E(X)=3\cdot\dfrac14=\dfrac34$.

(f) Expected gain $=3\cdot\dfrac34-2=\dfrac14$ dollars. This is not $0$, so the game is not fair: it favors Mai.

(g) $k\cdot\dfrac34=2$, so $k=\dfrac83$ dollars per win.
:::

## After the paper

Add up your marks out of 80, part by part, as an examiner would: method marks still count when an answer is wrong. Grade boundaries change from session to session, so use the score to find weak topics rather than to predict a grade. For every lost mark, revise the matching lesson: [Number and algebra](lesson:ibaa-number-algebra) (questions 1, 3, 5), [Functions](lesson:ibaa-functions) (question 2), [Geometry and trigonometry](lesson:ibaa-geometry-trigonometry) (questions 4, 9), [Statistics and probability](lesson:ibaa-statistics-probability) (questions 6, 10), [Calculus](lesson:ibaa-calculus) (questions 7, 8).
