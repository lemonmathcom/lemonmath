---
title: Limits and continuity
description: AP Calculus Unit 1: one-sided limits, algebraic techniques, sin x / x, limits at infinity, types of discontinuity and the intermediate value theorem.
minutes: 40
---

:::goals
- Find limits from graphs, tables and formulas, including one-sided limits.
- Evaluate limits algebraically by factoring, rationalizing and using $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$.
- Find limits at infinity and the horizontal and vertical asymptotes of a graph.
- Decide whether a function is continuous, classify discontinuities, and justify a conclusion with the intermediate value theorem.
:::

Unit 1 is the foundation of AP Calculus: derivatives and integrals are both defined by limits. On the exam, limits appear mostly in the no-calculator multiple-choice part, and continuity appears in free-response questions that ask you to **justify** a conclusion. Vietnamese students meet these ideas in grade 11; the AP style adds precise vocabulary and one-sided limits read from graphs.

## Limits and one-sided limits

$\displaystyle\lim_{x\to a}f(x)=L$ means that $f(x)$ gets as close as we like to $L$ when $x$ is close enough to $a$, **whatever happens at $x=a$ itself**. The limit exists exactly when both one-sided limits exist and are equal:

$$\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.$$

:::graph $y=\dfrac{x^2-9}{x-3}$ is the line $y=x+3$ with a hole at $(3, 6)$
alt: A straight rising line with an open circle at the point (3, 6), showing the function is undefined there although the limit is 6
x: -1..6
y: -1..10
plot: x + 3
open: (3, 6) "(3, 6)" left
:::

:::example Factoring
What is $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$?
A. $0$
B. $3$
C. $6$
D. The limit does not exist.

**Solution.** Substituting gives $\dfrac00$, an indeterminate form, so simplify first: for $x\ne3$, $\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. The answer is **C**. The graph has a hole at $(3, 6)$: the function is undefined there, but the limit exists.
:::

## Algebraic techniques

:::note When substitution gives $\dfrac00$
- **Factor** and cancel the common factor.
- **Rationalize**: multiply by the conjugate of a square-root expression.
- **Use the special limit** $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$, and its variant $\displaystyle\lim_{x\to0}\frac{\sin(kx)}{x}=k$.
:::

:::example Rationalizing
What is $\displaystyle\lim_{x\to4}\frac{\sqrt x-2}{x-4}$?

**Solution.** Multiply numerator and denominator by $\sqrt x+2$:

$$\frac{\sqrt x-2}{x-4}\cdot\frac{\sqrt x+2}{\sqrt x+2}=\frac{x-4}{(x-4)(\sqrt x+2)}=\frac{1}{\sqrt x+2}\to\frac14.$$

The limit is $\dfrac14$. (Alternatively, $x-4=(\sqrt x-2)(\sqrt x+2)$.)
:::

:::example The special trigonometric limit
What is $\displaystyle\lim_{x\to0}\frac{\sin(3x)}{x}$?
A. $0$
B. $\dfrac13$
C. $1$
D. $3$

**Solution.** $\dfrac{\sin(3x)}{x}=3\cdot\dfrac{\sin(3x)}{3x}\to3\cdot1=3$. The answer is **D**.
:::

## Limits at infinity and asymptotes

For a rational function, compare the degrees of the numerator and the denominator as $x\to\pm\infty$:

| Degrees | $\displaystyle\lim_{x\to\infty}$ | Horizontal asymptote |
|---|---|---|
| top < bottom | $0$ | $y=0$ |
| top = bottom | ratio of the leading coefficients | $y=\dfrac{a}{b}$ |
| top > bottom | $\pm\infty$ | none |

A **vertical asymptote** $x=a$ appears where the denominator is $0$ and the numerator is not (after cancelling common factors).

:::example A horizontal asymptote
What is $\displaystyle\lim_{x\to\infty}\frac{3x^2-5x}{2x^2+7}$?

**Solution.** The degrees are equal, so the limit is the ratio of the leading coefficients, $\dfrac32$. The graph has the horizontal asymptote $y=\dfrac32$.
:::

## Continuity and the intermediate value theorem

:::theorem Continuity at a point
$f$ is continuous at $x=a$ when three conditions hold: $f(a)$ is defined, $\displaystyle\lim_{x\to a}f(x)$ exists, and $\displaystyle\lim_{x\to a}f(x)=f(a)$.

Discontinuities are **removable** (a hole: the limit exists), **jump** (the one-sided limits differ) or **infinite** (a vertical asymptote).
:::

:::example Making a piecewise function continuous
$$f(x)=\begin{cases}kx+1, & x<2\\ x^2-1, & x\ge2\end{cases}$$
For what value of $k$ is $f$ continuous at $x=2$?

**Solution.** The left-hand limit is $2k+1$; the right-hand limit and $f(2)$ equal $3$. Continuity requires $2k+1=3$, so $k=1$.
:::

:::theorem Intermediate value theorem (IVT)
If $f$ is continuous on $[a, b]$ and $N$ is any number between $f(a)$ and $f(b)$, then there is at least one $c$ in $(a, b)$ with $f(c)=N$.
:::

:::example Using the IVT
The function $f$ is continuous on $[1, 4]$, with $f(1)=-2$ and $f(4)=5$. Which statement must be true?
A. $f(c)=0$ for some $c$ in $(1, 4)$.
B. $f$ is increasing on $[1, 4]$.
C. $f(c)=6$ for some $c$ in $(1, 4)$.
D. $f'(c)=\dfrac73$ for some $c$ in $(1, 4)$.

**Solution.** $0$ is between $-2$ and $5$, and $f$ is continuous, so the IVT gives **A**. Option D would need the mean value theorem, which requires $f$ to be differentiable; that is not given. In a free-response answer, write: "Because $f$ is continuous on $[1, 4]$ and $f(1)<0<f(4)$, by the IVT there is $c$ in $(1, 4)$ with $f(c)=0$."
:::

:::warning Common traps
- **"Undefined" is not "no limit".** A hole at $x=a$ still has a limit.
- **Using the IVT without continuity.** Always state that $f$ is continuous on the closed interval.
- **Forgetting to cancel before finding vertical asymptotes.** $\dfrac{x+1}{x^2-1}$ has a hole at $x=-1$, not an asymptote.
- **$\dfrac{\sin(kx)}{x}$ is not $1$.** It tends to $k$.
:::

:::tip Checking limits with the calculator
In the calculator part, a table of values with $x$ approaching $a$ from both sides (for example $2.99$, $2.999$ and $3.01$, $3.001$) is a quick check. In the no-calculator part, rely on algebra.
:::

:::terms
- limit | giới hạn
- one-sided limit | giới hạn một bên
- indeterminate form | dạng vô định
- conjugate | biểu thức liên hợp
- horizontal / vertical asymptote | tiệm cận ngang / tiệm cận đứng
- continuous | liên tục
- removable / jump / infinite discontinuity | gián đoạn khử được / gián đoạn bước nhảy / gián đoạn vô cực
- intermediate value theorem | định lí giá trị trung gian
:::

## Similar exercises

:::exercise Multiple choice
What is $\displaystyle\lim_{x\to4}\frac{x^2-4x}{x^2-16}$?
A. $0$
B. $\dfrac12$
C. $1$
D. The limit does not exist.

::hint
**What you need:** factor numerator and denominator.

**Steps:**
1. $x^2-4x=x(x-4)$ and $x^2-16=(x-4)(x+4)$.
2. Cancel and substitute.

::solution
$\dfrac{x}{x+4}\to\dfrac48=\dfrac12$: answer **B**.
:::

:::exercise Free response
$$g(x)=\begin{cases}x+k, & x\le1\\ 2x^2, & x>1\end{cases}$$
Find $k$ so that $g$ is continuous at $x=1$, and justify.

::hint
**What you need:** the three conditions for continuity.

**Steps:**
1. $g(1)=1+k$ and the left-hand limit is $1+k$.
2. The right-hand limit is $2$.

::solution
$g$ is continuous at $1$ when $\displaystyle\lim_{x\to1^-}g(x)=\lim_{x\to1^+}g(x)=g(1)$, that is $1+k=2$, so $k=1$.
:::

:::exercise Multiple choice
What is $\displaystyle\lim_{x\to0}\frac{\sin(5x)}{2x}$?
A. $\dfrac25$
B. $1$
C. $\dfrac52$
D. $5$

::hint
**What you need:** $\dfrac{\sin(5x)}{2x}=\dfrac52\cdot\dfrac{\sin(5x)}{5x}$.

**Steps:**
1. Rewrite and use the special limit.

::solution
$\dfrac52\cdot1=\dfrac52$: answer **C**.
:::

:::exercise Free response
Evaluate $\displaystyle\lim_{x\to9}\frac{x-9}{\sqrt x-3}$.

::hint
**What you need:** $x-9=(\sqrt x-3)(\sqrt x+3)$.

**Steps:**
1. Factor the numerator as a difference of squares.
2. Cancel and substitute.

::solution
$\dfrac{(\sqrt x-3)(\sqrt x+3)}{\sqrt x-3}=\sqrt x+3\to6$.
:::

:::exercise Multiple choice
What is $\displaystyle\lim_{x\to\infty}\frac{4x^3+1}{2x^3-x}$?
A. $0$
B. $2$
C. $4$
D. $\infty$

::hint
**What you need:** equal degrees: ratio of leading coefficients.

**Steps:**
1. Compare $4x^3$ and $2x^3$.

::solution
$\dfrac42=2$: answer **B**.
:::

## Application exercises

:::exercise Asymptotes and holes
Find all vertical asymptotes and holes of the graph of $y=\dfrac{x+1}{x^2-1}$.

::hint
**What you need:** factor the denominator and cancel common factors first.

**Steps:**
1. $x^2-1=(x-1)(x+1)$.
2. Decide which zero of the denominator remains after cancelling.

::solution
For $x\ne\pm1$, $y=\dfrac{1}{x-1}$. So $x=1$ is a vertical asymptote, and at $x=-1$ there is a hole at $\left(-1, -\dfrac12\right)$.
:::

:::exercise A root by the IVT
Show that the equation $x^3+x-1=0$ has a solution between $0$ and $1$.

::hint
**What you need:** the IVT for the continuous function $f(x)=x^3+x-1$.

**Steps:**
1. Compute $f(0)$ and $f(1)$.
2. State the theorem with its condition.

::solution
$f$ is a polynomial, so it is continuous on $[0, 1]$. $f(0)=-1<0$ and $f(1)=1>0$. By the IVT there is $c$ in $(0, 1)$ with $f(c)=0$. (A calculator gives $c\approx0.682$.)
:::

:::exercise A jump
Does $\displaystyle\lim_{x\to0}\frac{|x|}{x}$ exist? Explain using one-sided limits.

::hint
**What you need:** $|x|=x$ for $x>0$ and $|x|=-x$ for $x<0$.

**Steps:**
1. Compute both one-sided limits.

::solution
For $x>0$ the expression equals $1$; for $x<0$ it equals $-1$. The one-sided limits are $1$ and $-1$, which are different, so the limit does not exist: the graph has a jump at $0$.
:::

:::exercise Challenge
$$f(x)=\begin{cases}x^2, & x<1\\ ax+b, & 1\le x\le3\\ 12-x, & x>3\end{cases}$$
Find $a$ and $b$ so that $f$ is continuous for all real numbers.

::hint
**What you need:** continuity at $x=1$ and at $x=3$ gives two equations.

**Steps:**
1. At $x=1$: $1=a+b$.
2. At $x=3$: $3a+b=9$.

::solution
Subtracting: $2a=8$, so $a=4$ and $b=-3$. Check: at $x=1$ both sides give $1$; at $x=3$ both give $9$.
:::

:::quiz
::mc
What is $\displaystyle\lim_{x\to2}\left(x^2+3x\right)$?
A. $4$
B. $6$
C. $10$
D. $12$
::key C
The function is continuous, so substitute: $4+6=10$.

::mc
What is $\displaystyle\lim_{x\to0}\frac{\sin x}{4x}$?
A. $\dfrac14$
B. $1$
C. $4$
D. $0$
::key A
$\dfrac14\cdot\dfrac{\sin x}{x}\to\dfrac14$.

::mc
What is the horizontal asymptote of the graph of $y=\dfrac{5x-1}{x+2}$?
A. $y=-\dfrac12$
B. $y=5$
C. $y=-2$
D. $y=0$
::key B
Equal degrees: $\dfrac51=5$. Option C is the vertical asymptote $x=-2$ written as $y$.

::mc
At $x=1$, the function $f(x)=\dfrac{x^2-1}{x-1}$ has
A. a vertical asymptote.
B. a jump discontinuity.
C. no discontinuity.
D. a removable discontinuity.
::key D
$f(1)$ is undefined, but $\displaystyle\lim_{x\to1}f(x)=2$ exists: a hole.

::tf
Let $f(x)=\dfrac{x^2-x-6}{x-3}$.
a) $\displaystyle\lim_{x\to3}f(x)=5$.
b) $f(3)$ is defined.
c) $f$ has a removable discontinuity at $x=3$.
d) The line $x=3$ is a vertical asymptote of the graph.
::key T F T F
a) True: $f(x)=x+2$ for $x\ne3$. b) False: the denominator is $0$. c) True. d) False: the limit is finite, so there is a hole, not an asymptote.

::sa
Evaluate $\displaystyle\lim_{x\to-1}\frac{x^3+1}{x+1}$.
::key 3
$x^3+1=(x+1)(x^2-x+1)$, so the limit is $1+1+1=3$.

::sa
$f(x)=kx^2$ for $x\le2$ and $f(x)=x+6$ for $x>2$. For what value of $k$ is $f$ continuous at $x=2$?
::key 2
$4k=8$, so $k=2$.
:::
