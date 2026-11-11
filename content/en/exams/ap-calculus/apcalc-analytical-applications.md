---
title: Analyzing functions with derivatives
description: AP Calculus Unit 5: the Mean Value Theorem, extrema, increasing and decreasing, concavity, reading the graph of f', optimization and justifications.
minutes: 50
---

:::goals
- Apply the Mean Value Theorem and the Extreme Value Theorem, checking their conditions.
- Find intervals of increase and decrease and classify relative extrema with the first and second derivative tests.
- Find absolute extrema on a closed interval with the candidates test.
- Determine concavity and points of inflection, including from the graph of $f'$.
- Solve optimization problems and write justifications that earn full credit.
:::

Unit 5 is one of the most heavily weighted units of AB, and its ideas return in almost every free-response question that shows a graph or a table of $f'$. The calculations are short; what the exam really tests is reasoning. "Because $f'$ changes from negative to positive at $x=2$" earns a point; "because $f'(2)=0$" does not. This lesson trains both the mathematics and the sentences.

## Two existence theorems

:::theorem Mean Value Theorem (MVT)
If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there is at least one $c$ in $(a,b)$ with
$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$
Somewhere, the instantaneous rate equals the average rate.
:::

:::theorem Extreme Value Theorem (EVT)
If $f$ is continuous on a closed interval $[a,b]$, then $f$ has both an absolute maximum and an absolute minimum on $[a,b]$.
:::

:::example The value promised by the MVT
For $f(x)=x^3-x$ on $[0,2]$, which value of $c$ satisfies the conclusion of the Mean Value Theorem?
A. $1$
B. $\dfrac{\sqrt3}{2}$
C. $1.5$
D. $\dfrac{2}{\sqrt3}$

**Solution.** $f$ is a polynomial, so the conditions hold. The average rate is $\dfrac{f(2)-f(0)}{2}=\dfrac{6-0}{2}=3$. Solve $f'(c)=3c^2-1=3$: $c^2=\dfrac43$, so $c=\dfrac{2}{\sqrt3}\approx1.155$, which lies in $(0,2)$: answer **D**.
:::

## Increasing, decreasing and relative extrema

$f$ is increasing where $f'>0$ and decreasing where $f'<0$. A **critical point** is an interior $x$ where $f'(x)=0$ or $f'(x)$ does not exist.

- **First derivative test.** If $f'$ changes from positive to negative at a critical point, $f$ has a relative maximum there; from negative to positive, a relative minimum; no sign change, no extremum.
- **Second derivative test.** If $f'(c)=0$ and $f''(c)<0$, relative maximum; if $f''(c)>0$, relative minimum; if $f''(c)=0$, the test says nothing.

:::example A cubic
Let $f(x)=x^3-3x^2-9x+5$. Find where $f$ is increasing and its relative extrema.

**Solution.** $f'(x)=3x^2-6x-9=3(x-3)(x+1)$. Sign chart: $f'>0$ for $x<-1$, $f'<0$ for $-1<x<3$, $f'>0$ for $x>3$. So $f$ is increasing on $(-\infty,-1)$ and $(3,\infty)$.

$f'$ changes from positive to negative at $x=-1$: relative maximum $f(-1)=10$. It changes from negative to positive at $x=3$: relative minimum $f(3)=-22$.
:::

## Absolute extrema: the candidates test

On a closed interval, evaluate $f$ at every critical point and at both endpoints; the largest value is the absolute maximum, the smallest the absolute minimum.

:::example Candidates on a closed interval
Find the absolute extrema of $g(x)=x^3-3x^2$ on $[-1,4]$.

**Solution.** $g'(x)=3x^2-6x=3x(x-2)$, so the critical points are $x=0$ and $x=2$.

| $x$ | $-1$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|
| $g(x)$ | $-4$ | $0$ | $-4$ | $16$ |

Absolute maximum $16$ at $x=4$; absolute minimum $-4$, reached at both $x=-1$ and $x=2$.
:::

## Concavity and points of inflection

$f$ is concave up where $f''>0$ (equivalently, where $f'$ is increasing) and concave down where $f''<0$. A **point of inflection** is a point where the graph changes concavity, that is, where $f''$ changes sign.

:::example When the second derivative test fails
Let $h(x)=x^4-4x^3$. Find the points of inflection and classify the critical points.

**Solution.** $h'(x)=4x^3-12x^2=4x^2(x-3)$ and $h''(x)=12x^2-24x=12x(x-2)$.

$h''$ changes sign at $x=0$ and $x=2$: both are points of inflection.

Critical points: $x=0$ and $x=3$. $h''(3)=36>0$, so a relative minimum at $x=3$. At $x=0$, $h''(0)=0$ and the second derivative test is inconclusive; the first derivative test shows $h'\le0$ on both sides of $0$, so there is no extremum there.
:::

:::graph The graph of $f'(x)=x^2-x-2$ (the derivative, not $f$)
alt: An upward parabola crossing the x-axis at -1 and 2, with its lowest point at x = 0.5
x: -2.5..3.5
y: -3..5
plot: x^2 - x - 2
point: (-1, 0) "-1" above-left
point: (2, 0) "2" above-right
:::

:::example Reading the graph of the derivative
The graph above shows $f'$, the derivative of a function $f$. At which value of $x$ does $f$ have a relative minimum?
A. $-1$
B. $0.5$
C. $2$
D. $-2$

**Solution.** $f'$ changes from negative to positive at $x=2$, so $f$ has a relative minimum there: answer **C**. At $x=-1$ the sign changes from positive to negative (relative maximum). At $x=0.5$, $f'$ has its lowest point, so $f'$ changes from decreasing to increasing: that is a point of inflection of $f$, a common trap.
:::

## Optimization

Write the quantity to optimize as a function of one variable, state the domain, find the critical points, and justify the maximum or minimum with the candidates test, a sign chart or the second derivative.

:::example A fence along a river
A farmer has $600$ meters of fence to enclose a rectangular field along a straight river; no fence is needed along the river. What is the largest possible area?

**Solution.** Let $y$ be each side perpendicular to the river; the side parallel to the river is $600-2y$. Area $A(y)=y(600-2y)=600y-2y^2$ for $0<y<300$. $A'(y)=600-4y=0$ gives $y=150$. Since $A''(y)=-4<0$, this is a maximum, and the only critical point on the interval, so it is the absolute maximum: $A(150)=150\cdot300=45{,}000$ square meters.
:::

:::warning Common traps
- **"$f'(c)=0$, so there is an extremum."** Not enough: $f'$ must change sign (or use $f''$).
- **"$f''(c)=0$, so there is an inflection point."** Not enough: $f''$ must change sign.
- **Forgetting the endpoints** in the candidates test.
- **Reading the graph of $f'$ as if it were $f$.** On a graph of $f'$, extrema of $f$ are at the $x$-intercepts where the sign changes; inflection points of $f$ are at the peaks and valleys of $f'$.
- **Dropping the MVT conditions.** On the free-response section, state "continuous on $[a,b]$ and differentiable on $(a,b)$".
:::

:::tip Justification phrases that earn points
- "$f$ has a relative maximum at $x=-1$ because $f'$ changes from positive to negative there."
- "The graph of $f$ is concave up on $(0,2)$ because $f'$ is increasing there" (or "because $f''>0$").
- Always refer to the function you are given: if the graph is of $f'$, talk about $f'$, never about "the graph" vaguely.
:::

:::terms
- Mean Value Theorem | định lí giá trị trung bình (định lí Lagrange)
- Extreme Value Theorem | định lí giá trị cực biên (tồn tại GTLN, GTNN)
- critical point | điểm tới hạn
- relative (local) extremum | cực trị (địa phương)
- absolute extremum | giá trị lớn nhất, nhỏ nhất (cực trị toàn cục)
- concave up / concave down | lõm lên / lõm xuống
- point of inflection | điểm uốn
- optimization | bài toán tối ưu
:::

## Similar exercises

:::exercise Multiple choice
For $f(x)=x^2$ on $[1,3]$, the value of $c$ guaranteed by the Mean Value Theorem is
A. $1.5$
B. $2$
C. $2.5$
D. $4$

::hint
**What you need:** solve $f'(c)=$ the average rate of change.

**Steps:**
1. Average rate: $\dfrac{9-1}{2}=4$.
2. $2c=4$.

::solution
$c=2$: answer **B**.
:::

:::exercise Free response
Find the intervals on which $f(x)=xe^{-x}$ is increasing or decreasing, and its relative extrema.

::hint
**What you need:** the product rule and the sign of $f'$.

**Steps:**
1. $f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)$.
2. $e^{-x}>0$ always, so the sign of $f'$ is the sign of $1-x$.

::solution
$f$ is increasing on $(-\infty,1)$ and decreasing on $(1,\infty)$. Relative maximum at $x=1$, with value $f(1)=\dfrac1e$, because $f'$ changes from positive to negative there.
:::

:::exercise Multiple choice
The point of inflection of $f(x)=x^3-6x^2+1$ is at
A. $x=0$
B. $x=4$
C. $x=2$
D. $x=-2$

::hint
**What you need:** where $f''$ changes sign.

**Steps:**
1. $f''(x)=6x-12$.

::solution
$f''$ changes sign at $x=2$: answer **C**. Option B is a critical point ($f'(4)=0$), not an inflection point.
:::

:::exercise Free response
Find the absolute maximum and minimum of $f(x)=2x^3-3x^2-12x+1$ on $[-2,3]$.

::hint
**What you need:** the candidates test.

**Steps:**
1. $f'(x)=6x^2-6x-12=6(x-2)(x+1)$.
2. Evaluate $f$ at $-2$, $-1$, $2$, $3$.

::solution
$f(-2)=-3$, $f(-1)=8$, $f(2)=-19$, $f(3)=-8$. Absolute maximum $8$ at $x=-1$; absolute minimum $-19$ at $x=2$.
:::

:::exercise Free response
A function has derivative $f'(x)=(x-1)^2(x+2)$. Find and classify all relative extrema of $f$.

::hint
**What you need:** the first derivative test; a squared factor does not change sign.

**Steps:**
1. Critical points: $x=-2$ and $x=1$.
2. Sign of $f'$ on each side of each critical point.

::solution
$f'<0$ for $x<-2$ and $f'>0$ for $-2<x<1$ and for $x>1$. So $f$ has a relative minimum at $x=-2$, and no extremum at $x=1$ because $f'$ does not change sign there.
:::

## Application exercises

:::exercise An open box
Equal squares of side $x$ centimeters are cut from the corners of a $30$ by $30$ centimeter sheet, and the sides are folded up to make an open box. Find $x$ that gives the largest volume, and that volume.

::hint
**What you need:** $V(x)=x(30-2x)^2$ for $0<x<15$.

**Steps:**
1. $V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)$.
2. Critical point inside the domain: $x=5$.

::solution
$V'>0$ for $0<x<5$ and $V'<0$ for $5<x<15$, so $x=5$ gives the maximum: $V(5)=5\cdot20^2=2000$ cubic centimeters.
:::

:::exercise Writing justifications
A function $f$ has $f'(x)=x^2-4$.
a) Does $f$ have a relative maximum at $x=-2$? Justify.
b) Is the graph of $f$ concave up or concave down at $x=1$? Justify.

::hint
**What you need:** the sign of $f'$ around $-2$, and the sign of $f''(1)$.

**Steps:**
1. $f'(x)=(x-2)(x+2)$.
2. $f''(x)=2x$.

::solution
a) Yes: $f'$ changes from positive (for $x<-2$) to negative (for $-2<x<2$) at $x=-2$, so $f$ has a relative maximum there.

b) $f''(1)=2>0$, so the graph of $f$ is concave up at $x=1$.
:::

:::exercise The closest point
Find the point on the curve $y=\sqrt x$ closest to the point $(3, 0)$.

::hint
**What you need:** minimize the square of the distance, which is easier and has the same minimizer.

**Steps:**
1. $D(x)=(x-3)^2+\left(\sqrt x\right)^2=x^2-5x+9$.
2. $D'(x)=2x-5$.

::solution
$D'(x)=0$ at $x=2.5$, and $D''=2>0$, so this is the minimum. The point is $\left(2.5, \sqrt{2.5}\right)\approx(2.5, 1.58)$, at distance $\sqrt{2.75}\approx1.66$.
:::

:::exercise Challenge
A closed cylindrical can must hold $500$ cubic centimeters. Find the radius that uses the least material, and show that the best can has height equal to its diameter.

::hint
**What you need:** $\pi r^2h=500$ to eliminate $h$.

**Steps:**
1. Surface area $S=2\pi r^2+2\pi rh=2\pi r^2+\dfrac{1000}{r}$.
2. $S'(r)=4\pi r-\dfrac{1000}{r^2}$.

::solution
$S'(r)=0$ gives $r^3=\dfrac{250}{\pi}$, so $r\approx4.30$ centimeters. $S''(r)=4\pi+\dfrac{2000}{r^3}>0$, so this is a minimum. Then $h=\dfrac{500}{\pi r^2}=\dfrac{2\cdot250}{\pi r^2}=\dfrac{2\pi r^3}{\pi r^2}=2r$, so $h\approx8.60$ centimeters, equal to the diameter.
:::

:::quiz
::mc
If $f'(x)=x(x-4)$, then $f$ is decreasing on
A. $x<0$ or $x>4$
B. $x>4$
C. $0<x<4$
D. $x<0$
::key C
$f'<0$ between the roots $0$ and $4$.

::mc
For $f(x)=\sqrt x$ on $[0,4]$, the value of $c$ guaranteed by the Mean Value Theorem is
A. $1$
B. $2$
C. $\dfrac12$
D. $4$
::key A
The average rate is $\dfrac{2-0}{4}=\dfrac12$, and $\dfrac{1}{2\sqrt c}=\dfrac12$ gives $c=1$.

::mc
If $f''(x)=(x+1)(x-3)^2$, the graph of $f$ has a point of inflection at
A. $x=3$ only
B. $x=-1$ and $x=3$
C. no value of $x$
D. $x=-1$ only
::key D
$f''$ changes sign only at $x=-1$; the squared factor keeps the sign at $x=3$.

::mc
The absolute maximum of $f(x)=x^2-2x$ on $[0,3]$ is
A. $0$
B. $3$
C. $-1$
D. $9$
::key B
Candidates: $f(0)=0$, $f(1)=-1$, $f(3)=3$.

::tf
Let $f(x)=x^3-3x$.
a) The critical points of $f$ are $x=-1$ and $x=1$.
b) $f$ has a relative maximum at $x=1$.
c) The graph of $f$ is concave down for $x<0$.
d) The absolute maximum of $f$ on $[0,2]$ is $2$.
::key T F T T
a) True: $f'=3x^2-3$. b) False: $f''(1)=6>0$, a relative minimum. c) True: $f''=6x<0$. d) True: $f(0)=0$, $f(1)=-2$, $f(2)=2$.

::sa
Two positive numbers have sum $20$. What is the largest possible value of their product?
::key 100
$P=x(20-x)$ is largest at $x=10$: $P=100$.

::sa
At which value of $x$ does $f(x)=x^3-6x^2+9x+1$ have a relative minimum?
::key 3
$f'=3(x-1)(x-3)$ changes from negative to positive at $x=3$.
:::
