---
title: "Revision: derivatives and graphs of functions"
description: Revise monotonicity, turning points, maximum and minimum values, asymptotes, tables of variations and graph reading, in graduation exam style.
minutes: 40
---

:::goals
- Find where a function increases or decreases and find its turning points from $f(x)$, from $f'(x)$ or from a table of variations.
- Find the maximum and minimum values of a function on a closed interval and on an open interval.
- Find the vertical, horizontal and oblique asymptotes of the graph of a rational function.
- Read tables of variations and graphs; count the roots of $f(x)=k$; identify a function from its graph.
:::

This topic usually appears in all three parts of the paper: a few short questions in Part I (reading a table of variations, finding asymptotes), usually a true/false question about one function in Part II, and one or two maximum/minimum questions in Part III, altogether usually worth about $1.5$ to $2.5$ marks.

For the details, look back at the lessons on [turning points](lesson:monotonicity-extrema), [maximum and minimum values](lesson:max-min-values), [asymptotes](lesson:asymptotes) and [curve sketching](lesson:graphing-functions).

## Monotonicity and turning points

:::note Remember
- If $f'(x)\ge0$ for every $x$ in an interval $K$, with $f'(x)=0$ at only finitely many points, then $f$ is **increasing** on $K$; if $f'(x)\le0$ with the same condition, $f$ is **decreasing** on $K$.
- $f$ has a **turning point** at $x_0$ when $f'$ **changes sign** as $x$ passes $x_0$: from $+$ to $-$ gives a local maximum, from $-$ to $+$ a local minimum.
- A repeated root of even multiplicity of $f'$ (such as $(x-2)^2$) makes $f'=0$ but with **no change of sign**, so it is not a turning point.
:::

Typical questions: given $f'(x)$ as a product, find where $f$ increases or decreases, or how many turning points it has; given a cubic or quartic, find the local maximum or minimum value.

:::example Multiple choice: reading the sign of the derivative
The function $y=f(x)$ has derivative $f'(x)=(x+1)(x-2)^2$ for all $x\in\mathbb{R}$. On which interval is the function decreasing?
A. $(-\infty, -1)$.
B. $(-1, 2)$.
C. $(2, +\infty)$.
D. $(-1, +\infty)$.

**Solution.** Since $(x-2)^2\ge0$, the sign of $f'(x)$ is the sign of $x+1$ (except at $x=2$, where $f'=0$):

$$f'(x)<0\iff x<-1,\qquad f'(x)\ge0\ \text{for}\ x\ge-1.$$

So the function is decreasing on $(-\infty, -1)$: the answer is **A**. The function has only one turning point, $x=-1$; at $x=2$ the derivative does not change sign.
:::

In a true/false question, we compute the derivative and the turning values once for all four statements.

:::example True/false: a cubic
Let $f(x)=-x^3+3x^2+9x-2$.
a) The function is increasing on $(-1, 3)$.
b) The function has a local maximum at $x=-1$.
c) The local maximum value of the function is $25$.
d) The line through the two turning points of the graph has gradient $8$.

**Solution.** We compute the derivative and the values at its roots:

$$f'(x)=-3x^2+6x+9=-3(x+1)(x-3);\qquad f(-1)=-7,\quad f(3)=25.$$

The coefficient $-3<0$, so $f'>0$ between the roots and $f'<0$ outside.

a) **True**: $f'(x)>0$ for $-1<x<3$.

b) **False**: $f'$ changes from $-$ to $+$ at $x=-1$, so this is a local minimum.

c) **True**: the local maximum is at $x=3$, with value $f(3)=-27+27+27-2=25$.

d) **True**: the turning points are $(-1, -7)$ and $(3, 25)$, and the gradient is $\dfrac{25-(-7)}{3-(-1)}=\dfrac{32}{4}=8$.

Key: T F T T.
:::

## Maximum and minimum values

:::note Method on a closed interval $[a, b]$
1. Find the points in the **open interval** $(a, b)$ where $f'(x)=0$ or $f'(x)$ is undefined.
2. Compute $f$ at those points and at $a$, $b$.
3. The largest value is $\max\limits_{[a, b]}f$, the smallest is $\min\limits_{[a, b]}f$.

On an **open interval**, draw the table of variations.
:::

:::example Short answer: the sum of the maximum and minimum
Let $M$ and $m$ be the maximum and minimum values of $f(x)=x^3-3x^2-9x+5$ on $[-2, 4]$. Find $M+m$.

**Solution.** We solve $f'(x)=0$ and keep the roots in $(-2, 4)$:

$$f'(x)=3x^2-6x-9=3(x+1)(x-3)=0\iff x=-1\ \text{or}\ x=3.$$

We compare four values:

$$f(-2)=3,\qquad f(-1)=10,\qquad f(3)=-22,\qquad f(4)=-15.$$

So $M=10$, $m=-22$ and $M+m=-12$. On the answer sheet: $-12$.
:::

## Asymptotes

:::note Remember
- $x=x_0$ is a **vertical asymptote** if $\lim\limits_{x\to x_0^+}f(x)$ or $\lim\limits_{x\to x_0^-}f(x)$ is $\pm\infty$.
- $y=b$ is a **horizontal asymptote** if $\lim\limits_{x\to+\infty}f(x)=b$ or $\lim\limits_{x\to-\infty}f(x)=b$.
- $y=ax+b$ ($a\ne0$) is an **oblique asymptote** if $\lim\limits_{x\to\pm\infty}\left[f(x)-(ax+b)\right]=0$. For $y=\dfrac{x^2+x+1}{x-1}=x+2+\dfrac{3}{x-1}$, the oblique asymptote is $y=x+2$.
- For $y=\dfrac{ax+b}{cx+d}$ ($c\ne0$, $ad-bc\ne0$): vertical asymptote $x=-\dfrac dc$, horizontal asymptote $y=\dfrac ac$.
:::

A common trap: the denominator is $0$ at $x_0$ but so is the numerator; after cancelling, $x_0$ may no longer be a vertical asymptote.

:::example Multiple choice: counting asymptotes
How many vertical and horizontal asymptotes does the graph of $y=\dfrac{x^2-1}{x^2-3x+2}$ have altogether?
A. $2$.
B. $3$.
C. $1$.
D. $4$.

**Solution.** We factorise the numerator and denominator and cancel for $x\ne1$:

$$y=\frac{(x-1)(x+1)}{(x-1)(x-2)}=\frac{x+1}{x-2}\quad(x\ne1).$$

As $x\to1$, $y\to-2$ (finite), so $x=1$ is not a vertical asymptote. As $x\to2^+$, $y\to+\infty$, so $x=2$ is a vertical asymptote. As $x\to\pm\infty$, $y\to1$, so $y=1$ is a horizontal asymptote.

So there are $2$ asymptotes: the answer is **A**. Option B wrongly counts $x=1$.
:::

## Tables of variations and graph reading

From a table of variations or a graph we can read where the function increases or decreases, its turning points, its maximum and minimum, and the **number of roots** of $f(x)=k$: the number of points where the graph meets the horizontal line $y=k$.

:::example True/false: reading a table of variations
The function $y=f(x)$ is continuous on $\mathbb{R}$ and has this table of variations:

| $x$ | $-\infty$ | | $-1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-2$ | $\nearrow$ | $+\infty$ |

a) The local maximum value of the function is $3$.
b) The function is increasing on $(-1, +\infty)$.
c) The equation $f(x)=1$ has three distinct roots.
d) The equation $f(x)=3$ has three distinct roots.

**Solution.** a) **True**: $f'$ changes from $+$ to $-$ at $x=-1$ and the local maximum value is $3$.

b) **False**: on $(-1, 2)$ the function is decreasing.

c) **True**: since $-2<1<3$, the line $y=1$ meets the graph once on each of $(-\infty, -1)$, $(-1, 2)$, $(2, +\infty)$.

d) **False**: the line $y=3$ only touches the graph at the local maximum $x=-1$ and crosses it once more on $(2, +\infty)$, giving $2$ roots.

Key: T F T F.
:::

To identify a cubic $y=ax^3+bx^2+cx+d$ from its graph, check in turn: if the right-hand branch rises, $a>0$; the graph meets the $y$-axis at $(0, d)$; the $x$-coordinates of the turning points are the roots of $y'$.

:::graph The graph of a cubic
alt: A cubic graph rising to a local maximum at (1, 3), falling to a local minimum at (3, -1) and then rising, crossing the y-axis at (0, -1)
x: -1..5
y: -3..5
plot: x^3 - 6x^2 + 9x - 1 ; -0.3..4.3
point: (1, 3) "(1, 3)" above
point: (3, -1) "(3, -1)" below
point: (0, -1) "(0, -1)" left
:::

:::example Multiple choice: identifying a graph
The curve in the figure above is the graph of which function?
A. $y=x^3-6x^2+9x-1$.
B. $y=-x^3+6x^2-9x+1$.
C. $y=x^3-6x^2+9x+1$.
D. $y=x^3+6x^2+9x-1$.

**Solution.** We eliminate options using features read from the figure. The right-hand branch rises, so $a>0$: rule out B. The graph meets the $y$-axis at $(0, -1)$, so $d=-1$: rule out C. For D, $y'=3(x+1)(x+3)$ has negative roots, which contradicts the figure (turning points at $x=1$ and $x=3$): rule out D.

Check A: $y'=3(x-1)(x-3)$, $y(1)=3$, $y(3)=-1$, matching the figure. The answer is **A**.
:::

:::warning Common mistakes
- **Treating every root of $f'$ as a turning point.** Wrong: "$f'=(x+1)(x-2)^2$, so there are $2$ turning points". Right: at $x=2$, $f'$ does not change sign; there is only $1$ turning point.
- **Confusing the turning point with the turning value.** The local maximum point is $x_0$, the local maximum value is $f(x_0)$, and the point on the graph is $(x_0, f(x_0))$. Read carefully which one is asked.
- **Forgetting the endpoints.** The maximum on a closed interval may be at an endpoint, not necessarily at a local maximum.
- **Not cancelling before looking for vertical asymptotes.** A common root of the numerator and denominator may not give an asymptote.
:::

## Key terms

:::terms
- increasing / decreasing | đồng biến / nghịch biến
- local maximum / local minimum point | điểm cực đại / cực tiểu
- turning value (local extreme value) | giá trị cực trị
- maximum / minimum value | giá trị lớn nhất / nhỏ nhất
- vertical / horizontal / oblique asymptote | tiệm cận đứng / ngang / xiên
- table of variations | bảng biến thiên
- repeated root of even multiplicity | nghiệm bội chẵn
- gradient | hệ số góc
- closed interval / open interval | đoạn / khoảng
:::

## Exercises

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise Multiple choice
How many turning points does $y=x^4-2x^2+1$ have?
A. $3$.
B. $1$.
C. $2$.
D. $0$.

::hint
**What you need:** a turning point is a root of $y'$ where $y'$ changes sign.

**Steps:**
1. Factorise $y'=4x^3-4x$.
2. Check the sign change at each root.

::solution
$y'=4x(x-1)(x+1)$ has three simple roots $-1$, $0$, $1$, and $y'$ changes sign at each of them.

**Answer.** A.
:::

:::exercise Multiple choice
The vertical and horizontal asymptotes of the graph of $y=\dfrac{3x-1}{x-2}$ are
A. $x=2$ and $y=3$.
B. $x=-2$ and $y=3$.
C. $x=2$ and $y=\dfrac12$.
D. $x=3$ and $y=2$.

::hint
**What you need:** $y=\dfrac{ax+b}{cx+d}$ has vertical asymptote $x=-\dfrac dc$ and horizontal asymptote $y=\dfrac ac$.

**Steps:**
1. Find the root of the denominator and check that the numerator is not $0$ there.
2. Take the ratio of the coefficients of $x$.

::solution
The denominator is $0$ at $x=2$ and the numerator is $5\ne0$ there, so $x=2$ is a vertical asymptote. $\lim\limits_{x\to\pm\infty}y=3$. Option C takes the ratio of the constant terms $\dfrac{-1}{-2}$.

**Answer.** A.
:::

:::exercise Short answer
Let $M$, $m$ be the maximum and minimum values of $y=x+\dfrac4x$ on $[1, 5]$. Find $M+m$.

::hint
**What you need:** compare the values at the roots of $y'$ in $(1, 5)$ and at the two endpoints.

**Steps:**
1. Solve $y'=1-\dfrac{4}{x^2}=0$.
2. Compute $y(1)$, $y(2)$, $y(5)$.

::solution
$y'=0\iff x=2$ (reject $x=-2$). $y(1)=5$, $y(2)=4$, $y(5)=5+0.8=5.8$. So $M=5.8$ and $m=4$.

**Answer.** $9.8$.
:::

:::exercise Written answer
Find the asymptotes of the graph of $y=\dfrac{x^2+x+1}{x-1}$.

::hint
**What you need:** divide the numerator by the denominator to write $y=ax+b+\dfrac{r}{x-1}$.

**Steps:**
1. Carry out the polynomial division.
2. Look at the limits as $x\to1^\pm$ and at $y-(ax+b)$ as $x\to\pm\infty$.

::solution
The division gives $x^2+x+1=(x-1)(x+2)+3$, so $y=x+2+\dfrac{3}{x-1}$. As $x\to1^+$, $y\to+\infty$, so $x=1$ is a vertical asymptote. As $x\to\pm\infty$, $y-(x+2)=\dfrac{3}{x-1}\to0$, so $y=x+2$ is an oblique asymptote. There is no horizontal asymptote, because $y\to\pm\infty$.

**Answer.** Vertical asymptote $x=1$, oblique asymptote $y=x+2$.
:::

:::exercise True/False
The function $y=f(x)$ has derivative $f'(x)=x(x-1)^2(x+2)$ for all $x\in\mathbb{R}$.

a) The function has three turning points.

b) The function has a local minimum at $x=0$.

c) The function is increasing on $(0, +\infty)$.

d) $f(-1)>f(0)$.

::hint
**What you need:** a repeated root of even multiplicity does not make $f'$ change sign.

**Steps:**
1. Make a sign table for $f'$ with roots $-2$, $0$, $1$.
2. Judge each statement.

::solution
The sign of $f'$: positive on $(-\infty, -2)$, negative on $(-2, 0)$, positive on $(0, 1)$ and on $(1, +\infty)$.

a) **False**: there is no sign change at $x=1$; there are only two turning points, $x=-2$ and $x=0$.

b) **True**: $f'$ changes from $-$ to $+$ at $x=0$.

c) **True**: $f'\ge0$ on $(0, +\infty)$ and is $0$ only at $x=1$.

d) **True**: $f$ is decreasing on $(-2, 0)$ and $-1<0$.

**Answer.** a) False; b) True; c) True; d) True.
:::

:::exercise Short answer
The concentration of a drug in the blood $t$ hours after it is taken is $C(t)=\dfrac{5t}{t^2+4}$ (mg/l), $t\ge0$. What is the highest concentration, in mg/l?

::hint
**What you need:** the quotient rule $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$; the maximum on $[0, +\infty)$.

**Steps:**
1. Compute $C'(t)$ and find its positive root.
2. Find the sign of $C'$, noting that $C(0)=0$ and $C(t)\to0$ as $t\to+\infty$.

::solution
$$C'(t)=\frac{5(t^2+4)-5t\cdot2t}{(t^2+4)^2}=\frac{5(4-t^2)}{(t^2+4)^2}.$$
For $t\ge0$, $C'>0$ when $t<2$ and $C'<0$ when $t>2$. The highest concentration is $C(2)=\dfrac{10}{8}=1.25$ mg/l, after $2$ hours.

**Answer.** $1.25$.
:::

:::exercise Multiple choice
The function $y=f(x)$ is continuous on $\mathbb{R}$ with this table of variations:

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $1$ | $\searrow$ | $-3$ | $\nearrow$ | $+\infty$ |

The number of roots of $2f(x)+6=0$ is
A. $1$.
B. $2$.
C. $3$.
D. $0$.

::hint
**What you need:** the number of roots of $f(x)=k$ is the number of points where the graph meets the line $y=k$.

**Steps:**
1. Rewrite as $f(x)=-3$.
2. Read the table: $-3$ is the local minimum value.

::solution
$2f(x)+6=0\iff f(x)=-3$. The line $y=-3$ touches the graph at the local minimum $x=2$ and crosses the left branch once on $(-\infty, 0)$ (since $f$ rises from $-\infty$ to $1$). It does not meet the graph on $(2, +\infty)$, where $f>-3$.

**Answer.** B.
:::

:::exercise True/False
Let $y=\dfrac{x+1}{x-1}$.

a) The domain of the function is $\mathbb{R}\setminus\{1\}$.

b) The function is decreasing on $\mathbb{R}\setminus\{1\}$.

c) The asymptotes of the graph meet at $I(1, 1)$.

d) The maximum value of the function on $[2, 4]$ is $3$.

::hint
**What you need:** $y=\dfrac{ax+b}{cx+d}$ has $y'=\dfrac{ad-bc}{(cx+d)^2}$; monotonicity is stated on each interval separately.

**Steps:**
1. Compute $y'$.
2. Find the two asymptotes and compare $y(2)$, $y(4)$.

::solution
$y'=\dfrac{-1-1}{(x-1)^2}=\dfrac{-2}{(x-1)^2}<0$ for every $x\ne1$.

a) **True**: the denominator is $0$ only at $x=1$.

b) **False**: the function is decreasing on each of $(-\infty, 1)$ and $(1, +\infty)$, but $y(0)=-1<y(2)=3$, so it is not decreasing on the whole union.

c) **True**: vertical asymptote $x=1$, horizontal asymptote $y=1$.

d) **True**: the function is decreasing on $[2, 4]$, so the maximum is $y(2)=3$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise Short answer
Find the minimum value of $y=(x^2-3)e^x$ on $[0, 2]$. Give your answer to 1 decimal place.

::hint
**What you need:** $(uv)'=u'v+uv'$ and $(e^x)'=e^x$.

**Steps:**
1. Compute $y'=(x^2+2x-3)e^x$ and solve $y'=0$ on $(0, 2)$.
2. Compare with $y(0)$, $y(2)$.

::solution
$y'=2xe^x+(x^2-3)e^x=(x-1)(x+3)e^x=0\iff x=1$ (reject $x=-3$). $y(0)=-3$, $y(1)=-2e\approx-5.44$, $y(2)=e^2\approx7.39$. The minimum value is $-2e\approx-5.4$.

**Answer.** $-5.4$.
:::

:::exercise Challenge
The graph of $y=ax^3+bx^2+cx+d$ has a local maximum at $(0, 2)$ and a local minimum at $(2, -2)$. Find $a$, $b$, $c$, $d$.

::hint
**What you need:** at a turning point $x_0$, $y'(x_0)=0$; turning points lie on the graph.

**Steps:**
1. Write four equations: $y(0)=2$, $y'(0)=0$, $y(2)=-2$, $y'(2)=0$.
2. Solve, then check the type of each turning point.

::solution
$y'=3ax^2+2bx+c$. From $y(0)=2$ and $y'(0)=0$: $d=2$, $c=0$. From $y'(2)=0$: $12a+4b=0$, so $b=-3a$. From $y(2)=-2$: $8a+4b+2=-2$, so $8a-12a=-4$, giving $a=1$, $b=-3$.

**Check.** $y=x^3-3x^2+2$, $y'=3x(x-2)$ changes from $+$ to $-$ at $0$ and from $-$ to $+$ at $2$; $y(0)=2$, $y(2)=-2$.

**Answer.** $a=1$, $b=-3$, $c=0$, $d=2$.
:::

## Mini test

:::quiz
::mc
The function $y=f(x)$ has derivative $f'(x)=(x-1)(x+3)$. On which interval is it increasing?
A. $(1, +\infty)$.
B. $(-3, 1)$.
C. $(-\infty, 1)$.
D. $(-3, +\infty)$.
::key A
$f'(x)>0\iff x<-3$ or $x>1$. Option B is where the function decreases; C and D contain part of $(-3, 1)$, where $f'<0$.

::mc
How many vertical asymptotes does the graph of $y=\dfrac{x+2}{x^2-4}$ have?
A. $1$.
B. $2$.
C. $0$.
D. $3$.
::key A
For $x\ne-2$, $y=\dfrac{1}{x-2}$; as $x\to-2$, $y\to-\dfrac14$, so $x=-2$ is not a vertical asymptote. Only $x=2$ remains. Option B forgets to cancel.

::mc
The maximum value of $y=-x^3+3x+1$ on $[0, 2]$ is
A. $3$.
B. $1$.
C. $-1$.
D. $2$.
::key A
$y'=-3x^2+3=0\iff x=1$ (reject $-1$). $y(0)=1$, $y(1)=3$, $y(2)=-1$. Option B is $y(0)$; option C is the minimum value.

::mc
The function $y=f(x)$ has this table of variations:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $4$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

The local minimum value of the function is
A. $0$.
B. $1$.
C. $4$.
D. $-1$.
::key A
$f'$ changes from $-$ to $+$ at $x=1$, so the local minimum value is $f(1)=0$. Option B is the local minimum point, C the local maximum value, D the local maximum point.

::tf
Let $f(x)=x^4-2x^2+3$.
a) $f'(x)=4x^3-4x$.
b) The function has three turning points.
c) The local maximum value of the function is $2$.
d) The minimum value of the function on $\mathbb{R}$ is $2$.
::key T T F T
a) True. b) True: $f'=4x(x-1)(x+1)$ changes sign at all three roots. c) False: the local maximum is at $x=0$ with value $3$; $2$ is the local minimum value. d) True: $f(\pm1)=2$ and $f(x)-2=(x^2-1)^2\ge0$.

::sa
The two asymptotes of the graph of $y=\dfrac{2x+1}{x-3}$ meet at $I(a, b)$. Find $a+b$.
::key 5
The vertical asymptote is $x=3$ and the horizontal asymptote is $y=2$, so $I(3, 2)$ and $a+b=5$.

::sa
Let $M$, $m$ be the maximum and minimum values of $y=x+\dfrac1x$ on $\left[\dfrac12, 3\right]$. Find $M+m$, to 1 decimal place.
::key 5.3
$y'=1-\dfrac{1}{x^2}=0\iff x=1$. $y\left(\dfrac12\right)=2.5$, $y(1)=2$, $y(3)=\dfrac{10}{3}$. So $M+m=\dfrac{10}{3}+2=\dfrac{16}{3}\approx5.3$.
:::
