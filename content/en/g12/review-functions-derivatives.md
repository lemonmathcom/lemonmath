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
The function is defined and differentiable on $\mathbb{R}$. We have
$$y'=4x^3-4x=4x\left(x^2-1\right)=4x(x-1)(x+1).$$

Hence $y'=0\iff x=-1$, $x=0$ or $x=1$. These are three simple roots (odd multiplicity), so $y'$ changes sign at each of them. The sign table is:

| $x$ | $-\infty$ | | $-1$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

Therefore the function has exactly three turning points: $x=-1$ and $x=1$ are local minima, and $x=0$ is a local maximum.

So the answer is **A**.

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
The function is defined on $\mathbb{R}\setminus\{2\}$.

Vertical asymptote: as $x\to2$, the denominator $x-2\to0$ while the numerator $3x-1\to3\cdot2-1=5\neq0$, so $\lim\limits_{x\to2^{\pm}}y=\pm\infty$. Hence the line $x=2$ is a vertical asymptote.

Horizontal asymptote: we have
$$\lim_{x\to\pm\infty}\frac{3x-1}{x-2}=\lim_{x\to\pm\infty}\frac{3-\dfrac1x}{1-\dfrac2x}=3.$$
Hence the line $y=3$ is a horizontal asymptote.

So the answer is **A**.

*Remark.* Option C wrongly takes the ratio of the constant terms $\dfrac{-1}{-2}$ as the horizontal asymptote; the horizontal asymptote must be found from the limit as $x\to\pm\infty$.

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
The function $y=x+\dfrac4x$ is defined and continuous on $[1, 5]$ (since $x\neq0$). We have
$$y'=1-\frac{4}{x^2}=\frac{x^2-4}{x^2}.$$

Hence $y'=0\iff x=2$ or $x=-2$. Only $x=2$ lies in $[1, 5]$; we reject $x=-2$.

We evaluate the function at the endpoints and at the critical point:
$$y(1)=1+4=5,\qquad y(2)=2+2=4,\qquad y(5)=5+\frac45=5+0.8=5.8.$$

Comparing the three values, we get $M=5.8$ and $m=4$.

So $M+m=5.8+4=9.8$.

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
The function is defined on $\mathbb{R}\setminus\{1\}$.

Performing the division, we have $x^2+x+1=(x-1)(x+2)+3$, so
$$y=\frac{x^2+x+1}{x-1}=x+2+\frac{3}{x-1}.$$

Vertical asymptote: as $x\to1^+$, the numerator $x^2+x+1\to3>0$ and the denominator $x-1\to0^+$, so $y\to+\infty$. Hence the line $x=1$ is a vertical asymptote.

Oblique asymptote: as $x\to\pm\infty$, we have
$$y-(x+2)=\frac{3}{x-1}\to0.$$
Hence the line $y=x+2$ is an oblique asymptote.

Horizontal asymptote: as $x\to\pm\infty$, $y\to\pm\infty$ (the limit is not finite), so the graph has no horizontal asymptote.

So the graph has the vertical asymptote $x=1$, the oblique asymptote $y=x+2$, and no horizontal asymptote.

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
Since $(x-1)^2\ge0$ and it equals $0$ only when $x=1$, for $x\neq1$ the sign of $f'(x)=x(x-1)^2(x+2)$ is the sign of $x(x+2)$. The sign table of $f'$ is:

| $x$ | $-\infty$ | | $-2$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | $0$ | $+$ | |

That is, $f'$ is positive on $(-\infty, -2)$, negative on $(-2, 0)$, positive on $(0, 1)$ and on $(1, +\infty)$.

a) **False.** At $x=1$ we have $f'=0$ but $f'$ does not change sign, so $x=1$ is not a turning point. The function has only two turning points, $x=-2$ and $x=0$.

b) **True.** As $x$ passes through $0$, $f'$ changes from $-$ to $+$, so the function has a local minimum at $x=0$.

c) **True.** On $(0, +\infty)$ we have $f'\ge0$ and $f'$ is $0$ only at $x=1$, so the function is increasing on $(0, +\infty)$.

d) **True.** The function is decreasing on $(-2, 0)$ (since $f'<0$ there) and continuous on $[-2, 0]$. Because $-2<-1<0$, we get $f(-1)>f(0)$.

So statements b), c), d) are true; statement a) is false.

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
Let $C(t)$ (mg/l) be the concentration of the drug after $t$ hours, $t\ge0$. Using the quotient rule, we have
$$C'(t)=\frac{5\left(t^2+4\right)-5t\cdot2t}{\left(t^2+4\right)^2}=\frac{5\left(4-t^2\right)}{\left(t^2+4\right)^2}.$$

Since $5>0$ and $\left(t^2+4\right)^2>0$, the sign of $C'(t)$ is the sign of $4-t^2$. For $t\ge0$: $C'(t)>0$ when $0\le t<2$ and $C'(t)<0$ when $t>2$; $C'(t)=0\iff t=2$.

Hence $C$ is increasing on $[0, 2]$ and decreasing on $[2, +\infty)$, so $C$ attains its greatest value at $t=2$:
$$C(2)=\frac{5\cdot2}{2^2+4}=\frac{10}{8}=1.25.$$

So the highest concentration is $1.25$ mg/l, reached after $2$ hours.

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
The equation $2f(x)+6=0$ is equivalent to $f(x)=-3$. Its number of roots equals the number of intersection points of the graph $y=f(x)$ with the line $y=-3$. We examine each interval using the table of variations.

On $(-\infty, 0)$: $f$ is continuous and increasing, going from $-\infty$ up to $1$. Since $-3$ lies between $-\infty$ and $1$, the equation $f(x)=-3$ has exactly one root on this interval.

On $[0, 2]$: $f$ is decreasing from $1$ down to $-3$. Hence $f(x)>-3$ for $0\le x<2$ and $f(2)=-3$, so the equation has exactly one root, $x=2$ (the line $y=-3$ touches the graph at the local minimum).

On $(2, +\infty)$: $f$ is increasing from $-3$ up to $+\infty$, so $f(x)>-3$ and the equation has no root.

In total the equation has $1+1+0=2$ roots.

So the answer is **B**.

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
The function $y=\dfrac{x+1}{x-1}$ has derivative
$$y'=\frac{1\cdot(x-1)-(x+1)\cdot1}{(x-1)^2}=\frac{-2}{(x-1)^2}<0\quad\text{for every}\ x\neq1.$$

a) **True.** The function is defined when the denominator $x-1\neq0$, that is, $x\neq1$. So the domain is $\mathbb{R}\setminus\{1\}$.

b) **False.** Since $y'<0$, the function is decreasing on each of the intervals $(-\infty, 1)$ and $(1, +\infty)$. However $0<2$ but $y(0)=-1<y(2)=3$, so the function is not decreasing on the whole set $\mathbb{R}\setminus\{1\}$ (the union of the two intervals).

c) **True.** As $x\to1$, the numerator $x+1\to2\neq0$ and the denominator $\to0$, so $x=1$ is a vertical asymptote. We have $\lim\limits_{x\to\pm\infty}y=\lim\limits_{x\to\pm\infty}\dfrac{1+\frac1x}{1-\frac1x}=1$, so $y=1$ is a horizontal asymptote. The asymptotes meet at $I(1, 1)$.

d) **True.** The interval $[2, 4]$ lies inside $(1, +\infty)$, so the function is decreasing on $[2, 4]$. Hence its maximum on this interval is $y(2)=\dfrac{2+1}{2-1}=3$.

So statements a), c), d) are true; statement b) is false.

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
The function $y=\left(x^2-3\right)e^x$ is continuous on $[0, 2]$. Using the product rule, we have
$$y'=2xe^x+\left(x^2-3\right)e^x=\left(x^2+2x-3\right)e^x=(x-1)(x+3)e^x.$$

Since $e^x>0$, we get $y'=0\iff x=1$ or $x=-3$. Only $x=1$ lies in $[0, 2]$; we reject $x=-3$.

We evaluate the function at the endpoints and at the critical point:
$$y(0)=-3,\qquad y(1)=(1-3)e=-2e\approx-5.44,\qquad y(2)=(4-3)e^2=e^2\approx7.39.$$

Comparing the three values, the minimum value is $y(1)=-2e\approx-5.4$ (to 1 decimal place).

So the minimum value of the function on $[0, 2]$ is approximately $-5.4$.

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
The function $y=ax^3+bx^2+cx+d$ has derivative $y'=3ax^2+2bx+c$.

The graph has a local maximum at $(0, 2)$, so $y(0)=2$ and $y'(0)=0$. Hence $d=2$ and $c=0$.

The graph has a local minimum at $(2, -2)$, so $y'(2)=0$ and $y(2)=-2$.

From $y'(2)=0$: $12a+4b+c=0$, and since $c=0$ we get $12a+4b=0$, that is, $b=-3a$.

From $y(2)=-2$: $8a+4b+2c+d=-2$, and since $c=0$, $d=2$ we get $8a+4b+2=-2$, that is, $8a+4b=-4$. Substituting $b=-3a$ gives $8a-12a=-4$, so $a=1$ and $b=-3$.

Check: with $a=1$, $b=-3$, $c=0$, $d=2$ we have $y=x^3-3x^2+2$ and $y'=3x^2-6x=3x(x-2)$. The derivative $y'$ changes from $+$ to $-$ at $x=0$ and from $-$ to $+$ at $x=2$; also $y(0)=2$, $y(2)=8-12+2=-2$ (satisfied).

So $a=1$, $b=-3$, $c=0$, $d=2$.

**Answer.** $a=1$, $b=-3$, $c=0$, $d=2$.
:::

## Mini test

:::quiz
::mc TH
The function $y=f(x)$ has derivative $f'(x)=(x-1)(x+3)$. On which interval is it increasing?
A. $(-3, 1)$.
B. $(1, +\infty)$.
C. $(-\infty, 1)$.
D. $(-3, +\infty)$.
::key B
$f'(x)>0\iff x<-3$ or $x>1$. Option A is where the function decreases; C and D contain part of $(-3, 1)$, where $f'<0$.

::mc TH
How many vertical asymptotes does the graph of $y=\dfrac{x+2}{x^2-4}$ have?
A. $2$.
B. $3$.
C. $0$.
D. $1$.
::key D
For $x\ne-2$, $y=\dfrac{1}{x-2}$; as $x\to-2$, $y\to-\dfrac14$, so $x=-2$ is not a vertical asymptote. Only $x=2$ remains. Option A forgets to cancel.

::mc VD
The maximum value of $y=-x^3+3x+1$ on $[0, 2]$ is
A. $3$.
B. $1$.
C. $-1$.
D. $2$.
::key A
$y'=-3x^2+3=0\iff x=1$ (reject $-1$). $y(0)=1$, $y(1)=3$, $y(2)=-1$. Option B is $y(0)$; option C is the minimum value.

::mc NB
The function $y=f(x)$ has this table of variations:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $4$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

The local minimum value of the function is
A. $-1$.
B. $1$.
C. $0$.
D. $4$.
::key C
$f'$ changes from $-$ to $+$ at $x=1$, so the local minimum value is $f(1)=0$. Option B is the local minimum point, D the local maximum value, A the local maximum point.

::tf NB TH TH VD
Let $f(x)=x^4-2x^2+3$.
a) $f'(x)=4x^3-4x$.
b) The function has three turning points.
c) The local maximum value of the function is $2$.
d) The minimum value of the function on $\mathbb{R}$ is $2$.
::key T T F T
a) True. b) True: $f'=4x(x-1)(x+1)$ changes sign at all three roots. c) False: the local maximum is at $x=0$ with value $3$; $2$ is the local minimum value. d) True: $f(\pm1)=2$ and $f(x)-2=(x^2-1)^2\ge0$.

::sa TH
The two asymptotes of the graph of $y=\dfrac{2x+1}{x-3}$ meet at $I(a, b)$. Find $a+b$.
::key 5
The vertical asymptote is $x=3$ and the horizontal asymptote is $y=2$, so $I(3, 2)$ and $a+b=5$.

::sa VD
Let $M$, $m$ be the maximum and minimum values of $y=x+\dfrac1x$ on $\left[\dfrac12, 3\right]$. Find $M+m$, to 1 decimal place.
::key 5.3
$y'=1-\dfrac{1}{x^2}=0\iff x=1$. $y\left(\dfrac12\right)=2.5$, $y(1)=2$, $y(3)=\dfrac{10}{3}$. So $M+m=\dfrac{10}{3}+2=\dfrac{16}{3}\approx5.3$.
:::
