---
title: Monotonicity and extrema
description: Use the sign of the derivative to find where a function increases or decreases and its local maxima and minima, for polynomial, rational and trig functions.
minutes: 24
---

:::goals
- Find the intervals where a function is increasing or decreasing from the sign of its derivative.
- Draw a table of variations and find local maxima and minima from the change of sign of $f'$.
- Use the second derivative to recognise an extremum when that is easier.
- Apply these to cubics, quartics, rational functions and a real-life problem.
:::

A drone flies for $7$ minutes. Its height after $t$ minutes is $h(t)=t^3-12t^2+36t+10$ (metres). It takes off from a rooftop at a height of $10$ m, after $2$ minutes it is at $42$ m, after $6$ minutes it is back down at $10$ m, and it reaches $17$ m when time is up. So during which time intervals is the drone climbing, during which is it descending, and at which moments does it "turn round"?

To answer exactly, we do not need the height at lots of moments. We only need the sign of the derivative $h'(t)$.

The question "going up or going down?" appears everywhere: is the river level rising or falling, has a patient's temperature started to drop, is a price going up or down? In grade 11 we saw that $h'(t)$ is the instantaneous velocity, the rate at which the height changes at the moment $t$. This lesson turns the simple remark "positive velocity means going up" into a precise tool.

## Monotonicity

### Explore: when does the graph go up?

We compute the height at whole minutes, and the derivative $h'(t)=3t^2-24t+36=3(t-2)(t-6)$:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|---|
| $h(t)$ | $10$ | $35$ | $42$ | $37$ | $26$ | $15$ | $10$ | $17$ |
| $h'(t)$ | $36$ | $15$ | $0$ | $-9$ | $-12$ | $-9$ | $0$ | $15$ |

From $t=0$ to $t=2$ the height increases and $h'>0$. From $t=2$ to $t=6$ the height decreases and $h'<0$. After $t=6$ the height increases again and $h'>0$. This makes sense: $h'(t)$ is the gradient of the tangent, and a positive gradient means the graph is going up.

:::graph Height of the drone $h(t)=t^3-12t^2+36t+10$
alt: A cubic graph on the interval from 0 to 7, rising to a high point at t equal 2 with height 42, falling to a low point at t equal 6 with height 10, then rising again
x: 0..7
y: 0..45
plot: x^3 - 12x^2 + 36x + 10 ; 0..7
point: (2, 42) "(2, 42)" above
point: (6, 10) "(6, 10)" below
:::

:::definition Increasing and decreasing functions
Let $y=f(x)$ be defined on an interval $K$.
- $f$ is **increasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)<f(x_2)$.
- $f$ is **decreasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)>f(x_2)$.

A function that is increasing or decreasing on $K$ is called **monotonic** on $K$.
:::

:::theorem Sign of the derivative and monotonicity
Let $f$ be differentiable on an interval $K$.
- If $f'(x)>0$ for every $x\in K$, then $f$ is increasing on $K$.
- If $f'(x)<0$ for every $x\in K$, then $f$ is decreasing on $K$.
- If $f'(x)\ge 0$ (or $f'(x)\le 0$) for every $x\in K$ and $f'(x)=0$ only at finitely many points, then $f$ is still increasing (decreasing) on $K$.
:::

Why is it true? The derivative $f'(x)$ is the limit of the ratio $\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$. If the graph has an upward-sloping tangent at **every** point of $K$, it cannot go down anywhere in $K$. A few points with a horizontal tangent (like $y=x^3$ at $x=0$) do not make the graph turn round.

**A closer look.** The theorem takes information *at each point* (the gradient) to a conclusion *on a whole interval*. This works only on an unbroken interval. The function $y=-\dfrac1x$ has $y'=\dfrac{1}{x^2}>0$ at every point of its domain, yet $y(-1)=1>y(1)=-1$. Because the domain is "broken" at $x=0$, we can only conclude that the function is increasing on each interval $(-\infty, 0)$ and $(0, +\infty)$.

**Connections.** This lesson uses the derivative (grade 11) and the sign of a quadratic expression (grade 10). Intervals of monotonicity and extrema are the raw material for the next lessons: maximum and minimum values, curve sketching, and optimisation problems in real life.

To study monotonicity, we work in this order:

1. Find the domain.
2. Compute $f'(x)$ and find the points where $f'(x)=0$ (the stationary points) or $f'(x)$ is undefined.
3. Draw the table of variations: find the sign of $f'$ on each interval.
4. State the intervals where $f$ increases and decreases.

:::example A cubic function
Find the intervals on which $y=x^3-6x^2+9x+1$ is increasing or decreasing.

**Solution.** The domain of the function is $\mathbb{R}$. We have

$$y'=3x^2-12x+9=3(x-1)(x-3),\qquad y'=0\iff x=1\ \text{or}\ x=3.$$

Since the quadratic $y'$ has $a=3>0$, $y'$ is positive outside the roots and negative between them. We have $y(1)=5$, $y(3)=1$. The table of variations:

| $x$ | $-\infty$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $5$ | $\searrow$ | $1$ | $\nearrow$ | $+\infty$ |

So the function is increasing on the intervals $(-\infty, 1)$ and $(3, +\infty)$, and decreasing on the interval $(1, 3)$.
:::

The next example shows that $f'(x_0)=0$ does not always make the function turn round.

:::example The derivative is zero at one point
Prove that $y=x^3-3x^2+3x+5$ is increasing on $\mathbb{R}$.

**Solution.** We have

$$y'=3x^2-6x+3=3(x-1)^2\ge 0\quad\text{for every } x,\ \text{and } y'=0 \iff x=1.$$

Since $y'$ is non-negative and is zero only at $x=1$ (where the tangent is horizontal), by the third part of the theorem the function is increasing on $\mathbb{R}$.

So the function is increasing on $\mathbb{R}$.
:::

## Extrema of a function

In the drone problem, the moment $t=2$ gives a height greater than at all **nearby** moments, although it is not necessarily the highest of the whole flight. We say that $h$ has a local maximum at $t=2$.

:::definition Local maximum and local minimum
Let $f$ be defined on a set $D$ and $x_0\in D$.
- $f$ has a **local maximum** at $x_0$ (and $x_0$ is a **local maximum point** of $f$) if there is an interval $(a, b)\subset D$ containing $x_0$ such that $f(x)<f(x_0)$ for every $x\in(a, b)$, $x\neq x_0$. Then $f(x_0)$ is the **local maximum value**, written $y_{\text{max}}$.
- $f$ has a **local minimum** at $x_0$ ($x_0$ is a **local minimum point**) if "$<$" is replaced by "$>$". Then $f(x_0)$ is the **local minimum value**, written $y_{\text{min}}$.
- The point $M(x_0, f(x_0))$ on the graph is a **turning point** (a local maximum or local minimum of the graph). Local maxima and minima together are called **extrema**.
:::

:::theorem First-derivative test
Let $f$ be continuous on an interval $(a, b)$ containing $x_0$ and differentiable on $(a, b)$, except possibly at $x_0$.
- If $f'$ **changes sign from $+$ to $-$** as $x$ passes through $x_0$, then $f$ has a local maximum at $x_0$.
- If $f'$ **changes sign from $-$ to $+$** as $x$ passes through $x_0$, then $f$ has a local minimum at $x_0$.
:::

The reason: a change from $+$ to $-$ means the graph goes up just before $x_0$ and down just after it, so $f(x_0)$ is greater than the nearby values. In Example 1, $y'$ changes sign from $+$ to $-$ at $x=1$, so $f$ has a local maximum at $x=1$ with $y_{\text{max}}=5$; likewise $f$ has a local minimum at $x=3$ with $y_{\text{min}}=1$.

:::example A quartic with three extrema
Find the extrema of $y=x^4-2x^2+3$.

**Solution.** The domain of the function is $\mathbb{R}$. We have

$$y'=4x^3-4x=4x(x-1)(x+1),\qquad y'=0\iff x\in\{-1, 0, 1\}.$$

Substituting these values into the function, we get $y(-1)=2$, $y(0)=3$, $y(1)=2$. The table of variations:

| $x$ | $-\infty$ | | $-1$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $+\infty$ | $\searrow$ | $2$ | $\nearrow$ | $3$ | $\searrow$ | $2$ | $\nearrow$ | $+\infty$ |

So the function has a local minimum at $x=\pm1$ with $y_{\text{min}}=2$, and a local maximum at $x=0$ with $y_{\text{max}}=3$.
:::

:::graph The graph of $y=x^4-2x^2+3$
alt: A W-shaped graph with two local minimum points at x equal minus 1 and 1 with height 2, and a local maximum point at x equal 0 with height 3
x: -2.5..2.5
y: 0..6
plot: x^4 - 2x^2 + 3
point: (-1, 2) "(-1, 2)" below
point: (0, 3) "(0, 3)" above
point: (1, 2) "(1, 2)" below
:::

For a rational function, a value that makes the denominator zero is not in the domain, but it must still be written in the table of variations to split the intervals.

:::example A rational function
Find the intervals on which $y=\dfrac{x^2+3}{x-1}$ is increasing or decreasing, and its extrema.

**Solution.** The domain is $D=\mathbb{R}\setminus\{1\}$. By the quotient rule, we have

$$y'=\frac{2x(x-1)-(x^2+3)}{(x-1)^2}=\frac{x^2-2x-3}{(x-1)^2}=\frac{(x+1)(x-3)}{(x-1)^2}.$$

Since the denominator is positive on $D$, $y'$ has the same sign as $(x+1)(x-3)$. We have $y(-1)=-2$, $y(3)=6$. The table of variations:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-2$ | $\searrow$ | $\Vert$ | $\searrow$ | $6$ | $\nearrow$ | $+\infty$ |

We see that $y_{\text{max}}<y_{\text{min}}$. There is no contradiction, because a local maximum value is only greater than the values **near** it.

So the function is increasing on the intervals $(-\infty, -1)$ and $(3, +\infty)$, and decreasing on the intervals $(-1, 1)$ and $(1, 3)$; its local maximum value is $y_{\text{max}}=y(-1)=-2$ and its local minimum value is $y_{\text{min}}=y(3)=6$.
:::

:::graph The graph of $y=\dfrac{x^2+3}{x-1}$
alt: A graph with two branches separated by the dashed vertical line x equal 1; the left branch has a local maximum point at (-1, -2) and the right branch a local minimum point at (3, 6)
x: -7..9
y: -12..16
plot: (x^2 + 3)/(x - 1)
vline: 1 ; dashed
point: (-1, -2) "(-1, -2)" above-left
point: (3, 6) "(3, 6)" below-right
:::

### Using the second derivative

When the sign of $f'$ is hard to find (often with trigonometric functions), we can use the second derivative (grade 11).

:::note Second-derivative test
Suppose $f'(x_0)=0$ and $f$ has a second derivative at $x_0$.
- If $f''(x_0)<0$, then $f$ has a local maximum at $x_0$.
- If $f''(x_0)>0$, then $f$ has a local minimum at $x_0$.
- If $f''(x_0)=0$, this test gives no conclusion; go back to the sign of $f'$.
:::

:::example A trigonometric function
Find the extrema of $f(x)=x-2\sin x$ on the interval $(0, 2\pi)$.

**Solution.** On the interval $(0, 2\pi)$, we have

$$f'(x)=1-2\cos x=0\iff \cos x=\frac12\iff x=\frac{\pi}{3}\ \text{or}\ x=\frac{5\pi}{3}.$$

We have $f''(x)=2\sin x$. Hence

$$f''\left(\frac{\pi}{3}\right)=\sqrt3>0,\qquad f''\left(\frac{5\pi}{3}\right)=-\sqrt3<0.$$

So $f$ has a local minimum at $x=\dfrac{\pi}{3}$ with $f_{\text{min}}=\dfrac{\pi}{3}-\sqrt3$, and a local maximum at $x=\dfrac{5\pi}{3}$ with $f_{\text{max}}=\dfrac{5\pi}{3}+\sqrt3$.
:::

Finally, we answer the question about the drone from the start of the lesson.

:::example The drone goes up and down
The height of the drone is $h(t)=t^3-12t^2+36t+10$ (metres), $0\le t\le 7$ (minutes). Find the time intervals during which the drone is climbing, the time intervals during which it is descending, and the extrema of its height.

**Solution.** We have $h'(t)=3(t-2)(t-6)$. On the interval $(0, 7)$, since the quadratic has $a=3>0$, it is negative between the roots $2$ and $6$ and positive outside them. Hence

$$h'(t)>0 \text{ for } t\in(0, 2)\cup(6, 7),\qquad h'(t)<0 \text{ for } t\in(2, 6).$$

It follows that $h'$ changes sign from $+$ to $-$ at $t=2$ and from $-$ to $+$ at $t=6$.

So the drone climbs during the first $2$ minutes and during the last minute (from minute $6$ to minute $7$), and descends from minute $2$ to minute $6$. It has a local maximum of $42$ m at $t=2$ and a local minimum of $10$ m at $t=6$.

**Look back.** Is the local maximum of $42$ m the greatest height of the whole flight? On $[0, 7]$, compared with the endpoints $h(0)=10$ and $h(7)=17$, it is. But if the drone flew until minute $9$, then $h(9)=91>42$. A local maximum is only "highest nearby"; the next lesson answers the question "highest on the whole interval" in full.
:::

:::warning Common mistakes
- **Joining two intervals with a union.** Wrong: "$y=\dfrac{x+2}{x-1}$ is decreasing on $(-\infty, 1)\cup(1, +\infty)$". Why it is wrong: $y(0)=-2<y(2)=4$ although $0<2$. Right: the function is decreasing on **each** interval $(-\infty, 1)$ and $(1, +\infty)$.
- **Thinking $f'(x_0)=0$ means an extremum.** Wrong: "$y=x^3-3x^2+3x+5$ has $y'(1)=0$, so it has an extremum at $x=1$". Why it is wrong: $y'=3(x-1)^2$ does not change sign at $x=1$. Right: the function has no extremum.
- **Mixing up the point and the value.** Wrong: "the local maximum point of $y=x^4-2x^2+3$ is $3$". Why it is wrong: the local maximum point is a value of $x$. Right: local maximum point $x=0$, local maximum value $y_{\text{max}}=3$, turning point of the graph $(0, 3)$.
- **Forgetting the domain.** Wrong: drawing the table of variations of $y=\dfrac{x^2+3}{x-1}$ without $x=1$. Why it is wrong: the sign of $y'$ may change at $x=1$, and the function is undefined there. Right: always write the excluded points in the table.
:::

## Key terms

:::terms
- increasing | đồng biến
- decreasing | nghịch biến
- monotonicity | tính đơn điệu
- table of variations | bảng biến thiên
- local maximum point | điểm cực đại
- local minimum point | điểm cực tiểu
- local maximum value | giá trị cực đại
- local minimum value | giá trị cực tiểu
- extremum (turning point) | cực trị
- second derivative | đạo hàm cấp hai
:::

## Summary

- $f'>0$ on $K$ means $f$ is increasing on $K$; $f'<0$ means decreasing. If $f'\ge0$ and it is zero at only finitely many points, $f$ is still increasing.
- Steps: domain → $f'$ and its roots → table of variations → conclusion for **each interval**.
- $f'$ changes sign $+\to-$ at $x_0$: local maximum; $-\to+$: local minimum. No sign change: no extremum.
- Second-derivative test: $f'(x_0)=0$ and $f''(x_0)<0$ gives a local maximum, $f''(x_0)>0$ a local minimum.
- Distinguish the point $x_0$ where the extremum occurs, the extreme value $f(x_0)$, and the turning point of the graph $(x_0, f(x_0))$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the intervals on which $y=-x^3+3x^2+1$ is increasing or decreasing.

::hint
**What you need:** if $y'>0$ on an interval, the function is increasing there; if $y'<0$, it is decreasing.

**Steps:**
1. Compute $y'$ and factorise it.
2. Find the sign of $y'$ (mind the negative coefficient).

::solution
We have $y'=-3x^2+6x=-3x(x-2)$, with two roots $0$ and $2$. Since the quadratic has $a=-3<0$, $y'$ is positive between the roots and negative outside them.

So the function is increasing on the interval between the roots and decreasing on the other two intervals.

**Answer.** Increasing on $(0, 2)$; decreasing on $(-\infty, 0)$ and $(2, +\infty)$.
:::

:::exercise
Find the extrema of $y=x^4-8x^2+1$.

::hint
**What you need:** $y'$ changes sign from $-$ to $+$ at a local minimum and from $+$ to $-$ at a local maximum.

**Steps:**
1. Compute $y'=4x^3-16x$ and find its three roots.
2. Draw the table of variations.
3. Compute $y$ at these points.

::solution
We have $y'=4x(x-2)(x+2)$, with three roots $-2$, $0$, $2$. The signs of $y'$ on the four intervals are $-, +, -, +$ in turn. So the function has a local minimum at $x=\pm2$ with $y=16-32+1=-15$, and a local maximum at $x=0$ with $y=1$.

**Answer.** $y_{\text{min}}=-15$ at $x=\pm2$; $y_{\text{max}}=1$ at $x=0$.
:::

:::exercise
Determine where $y=\dfrac{x+2}{x-1}$ is increasing or decreasing.

::hint
**What you need:** $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$.

**Steps:**
1. Find the domain.
2. Compute $y'$ and look at the sign of the numerator.

::solution
The domain is $D=\mathbb{R}\setminus\{1\}$. We have $y'=\dfrac{1\cdot(-1)-2\cdot1}{(x-1)^2}=\dfrac{-3}{(x-1)^2}<0$ for every $x\in D$.

So the function is decreasing on each interval of its domain.

**Answer.** The function is decreasing on each interval $(-\infty, 1)$ and $(1, +\infty)$, and has no extremum.
:::

:::exercise
Find the extrema of $y=x+\dfrac{4}{x}$.

::hint
**What you need:** write $y'$ as one fraction to find its sign; remember $x=0$ is not in the domain.

**Steps:**
1. Compute $y'=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}$.
2. Draw the table of variations with the values $-2$, $0$, $2$ marked.

::solution
We have $y'=\dfrac{(x-2)(x+2)}{x^2}$. Since $x^2>0$ for every $x\neq 0$, $y'$ has the same sign as $(x-2)(x+2)$: positive when $|x|>2$, negative when $0<|x|<2$. It follows that $y'$ changes sign $+\to-$ at $x=-2$ and $-\to+$ at $x=2$.

So the function has a local maximum at $x=-2$ and a local minimum at $x=2$.

**Answer.** $y_{\text{max}}=y(-2)=-4$; $y_{\text{min}}=y(2)=4$.
:::

:::exercise
A function $y=f(x)$ has derivative $f'(x)=x(x-1)^2(x+2)$ for every $x\in\mathbb{R}$. Decide whether each statement is true or false.

a) The function $f$ is increasing on the interval $(0, +\infty)$.

b) The function $f$ has three turning points.

c) The function $f$ has a local maximum at $x=-2$.

d) The function $f$ is decreasing on the interval $(-2, 1)$.

::hint
**What you need:** the factor $(x-1)^2$ is non-negative, so it does not make $f'$ change sign; extrema occur only where $f'$ changes sign.

**Steps:**
1. Make a sign table of $f'$ with the values $-2$, $0$, $1$ marked.
2. Read off where $f$ increases or decreases and where $f'$ changes sign.

::solution
Since $(x-1)^2\ge0$, $f'$ has the same sign as $x(x+2)$ (except at $x=1$, where $f'=0$). Hence $f'$ is positive on $(-\infty, -2)$, negative on $(-2, 0)$, positive on $(0, 1)$ and $(1, +\infty)$.

a) **True**. Since $f'\ge 0$ on $(0, +\infty)$ and it is zero only at $x=1$, the function is increasing on this interval.

b) **False**. Since $f'$ changes sign only at $x=-2$ and $x=0$, the function has two turning points.

c) **True**. Since $f'$ changes sign from $+$ to $-$ at $x=-2$, the function has a local maximum there.

d) **False**. On $(0, 1)$ we have $f'>0$, so the function is increasing on this interval.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
The function $y=x^3-3x^2-9x+4$ has a local maximum value $y_{\text{max}}$ and a local minimum value $y_{\text{min}}$. Compute $y_{\text{max}}-y_{\text{min}}$.

::hint
**What you need:** for a cubic with two extrema and $a>0$, the local maximum occurs at the smaller root of $y'$.

**Steps:**
1. Solve $y'=3x^2-6x-9=0$.
2. Compute $y$ at the two roots.

::solution
We have $y'=3(x+1)(x-3)$. Since $a=3>0$, $y'$ changes sign $+\to-$ at $x=-1$ and $-\to+$ at $x=3$. Hence $y_{\text{max}}=y(-1)=-1-3+9+4=9$ and $y_{\text{min}}=y(3)=27-27-27+4=-23$.

So $y_{\text{max}}-y_{\text{min}}=9-(-23)=32$.

**Answer.** $32$.
:::

:::exercise
Suppose the concentration of a medicine in the blood $t$ hours after an injection is $C(t)=\dfrac{30t}{t^2+9}$ (mg/l), $t>0$. Find the time intervals during which the concentration increases and decreases. At what time does the concentration reach its local maximum, and what is the local maximum value?

::hint
**What you need:** the quotient rule $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$.

**Steps:**
1. Compute $C'(t)$ and simplify the numerator.
2. Find the sign of $C'(t)$ for $t>0$.

::solution
We have $C'(t)=\dfrac{30(t^2+9)-30t\cdot 2t}{(t^2+9)^2}=\dfrac{30(9-t^2)}{(t^2+9)^2}$. For $t>0$, we have $C'>0$ when $0<t<3$ and $C'<0$ when $t>3$.

So the concentration has a local maximum at $t=3$, and $C(3)=\dfrac{90}{18}=5$.

**Answer.** It increases during the first $3$ hours and decreases afterwards; the local maximum is $5$ mg/l at $t=3$ hours.
:::

:::exercise Review
Find the extrema of $y=x+2\cos x$ on the interval $(0, \pi)$.

::hint
**What you need:** the equation $\sin x=\dfrac12$ (basic trigonometric equations, grade 11) and the second-derivative test.

**Steps:**
1. Solve $y'=1-2\sin x=0$ on $(0, \pi)$.
2. Compute $y''=-2\cos x$ at each root.

::solution
On the interval $(0, \pi)$, we have $y'=0\iff\sin x=\dfrac12\iff x=\dfrac{\pi}{6}$ or $x=\dfrac{5\pi}{6}$. Since $y''\left(\dfrac{\pi}{6}\right)=-\sqrt3<0$, the function has a local maximum at $x=\dfrac{\pi}{6}$; since $y''\left(\dfrac{5\pi}{6}\right)=\sqrt3>0$, it has a local minimum at $x=\dfrac{5\pi}{6}$.

So the function has one local maximum and one local minimum on the interval $(0, \pi)$.

**Answer.** $y_{\text{max}}=\dfrac{\pi}{6}+\sqrt3$ at $x=\dfrac{\pi}{6}$; $y_{\text{min}}=\dfrac{5\pi}{6}-\sqrt3$ at $x=\dfrac{5\pi}{6}$.
:::

:::exercise Review
Prove that $y=x^3+x^2+x+1$ is increasing on $\mathbb{R}$.

::hint
**What you need:** a quadratic expression with $\Delta<0$ always has the sign of $a$ (see [the sign of a quadratic expression](lesson:sign-of-quadratic)).

**Steps:**
1. Compute $y'$.
2. Compute the discriminant of $y'$ and look at the sign of $a$.

::solution
We have $y'=3x^2+2x+1$. Since $\Delta=4-12=-8<0$ and $a=3>0$, $y'>0$ for every $x$.

So the function is increasing on $\mathbb{R}$.

**Answer.** $y'>0$ for every $x\in\mathbb{R}$, so the function is increasing on $\mathbb{R}$.
:::

:::exercise Challenge
Find the intervals on which $y=x\sqrt{4-x^2}$ is increasing or decreasing, and its extrema.

::hint
**What you need:** $\left(\sqrt{u}\right)'=\dfrac{u'}{2\sqrt{u}}$; a square root is defined only when the expression under it is non-negative.

**Steps:**
1. Find the domain.
2. Compute $y'$ and write it as a single fraction.
3. Find the sign of the numerator on $(-2, 2)$.

::solution
The domain is $D=[-2, 2]$. On the interval $(-2, 2)$, we have
$$y'=\sqrt{4-x^2}-\frac{x^2}{\sqrt{4-x^2}}=\frac{4-2x^2}{\sqrt{4-x^2}},$$
and $y'$ is zero when $x=\pm\sqrt2$. Since the denominator is positive, $y'$ has the sign of the numerator: positive when $|x|<\sqrt2$ and negative when $\sqrt2<|x|<2$. We have $y(\sqrt2)=\sqrt2\cdot\sqrt2=2$, $y(-\sqrt2)=-2$.

So the function has a local minimum at $x=-\sqrt2$ and a local maximum at $x=\sqrt2$.

**Answer.** Increasing on $(-\sqrt2, \sqrt2)$, decreasing on $(-2, -\sqrt2)$ and $(\sqrt2, 2)$; $y_{\text{min}}=-2$ at $x=-\sqrt2$, $y_{\text{max}}=2$ at $x=\sqrt2$.
:::

## Mini test

:::quiz
::mc
On which of the following intervals is the function $y=x^3-3x^2+2$ decreasing?
A. $(-\infty, 0)$.
B. $(2, +\infty)$.
C. $(0, 2)$.
D. $(-2, 0)$.
::key C
We have $y'=3x^2-6x=3x(x-2)$. Since $a=3>0$, $y'<0$ between the roots $0$ and $2$. Option D comes from solving $y'=0$ wrongly as $x=0$, $x=-2$.

::mc
The function $y=-x^3+3x+1$ has a local maximum at
A. $x=-1$.
B. $x=1$.
C. $x=3$.
D. $x=0$.
::key B
We have $y'=-3(x-1)(x+1)$, which changes sign from $+$ to $-$ as $x$ passes through $x=1$, so $x=1$ is a local maximum point. Option C is the local maximum value $y(1)=3$, not where it occurs; $x=0$ is the root of $y''$.

::mc
The function $y=f(x)$ has a second derivative on $\mathbb{R}$ and satisfies $f'(2)=0$ and $f''(2)=-3$. Which of the following statements is correct?
A. $f$ has a local minimum at $x=2$.
B. $f$ has a local maximum at $x=-3$.
C. $f$ has no extremum at $x=2$.
D. $f$ has a local maximum at $x=2$.
::key D
Since $f'(2)=0$ and $f''(2)<0$, $f$ has a local maximum at $x=2$ (second-derivative test). The number $-3$ is the value of $f''(2)$, not a point.

::mc
Which of the following functions is increasing on $\mathbb{R}$?
A. $y=x^3+3x-1$.
B. $y=x^3-3x$.
C. $y=\dfrac{2x+1}{x+3}$.
D. $y=x^4+2x^2$.
::key A
Function A has $y'=3x^2+3>0$ for every $x$, so it is increasing on $\mathbb{R}$. Function C is undefined at $x=-3$, so it is increasing only on each interval $(-\infty, -3)$ and $(-3, +\infty)$; function D has $y'=4x(x^2+1)$, which is negative for $x<0$.

::tf
Consider the function $f(x)=2x^3-3x^2-12x+1$. Decide whether each statement is true or false.
a) $f'(x)=6x^2-6x-12$.
b) $f$ is increasing on the interval $(-1, 2)$.
c) The local maximum value of $f$ is $8$.
d) The line through the two turning points of the graph has gradient $9$.
::key T F T F
a) True: differentiating term by term gives this result. b) False: we have $f'(x)=6(x+1)(x-2)<0$ on $(-1, 2)$, so $f$ is decreasing on this interval. c) True: since $f'$ changes sign from $+$ to $-$ at $x=-1$, the local maximum value is $f(-1)=8$. d) False: the turning points are $(-1, 8)$ and $(2, -19)$, hence the gradient is $\dfrac{-19-8}{2-(-1)}=-9$.

::sa
Find the sum of the local maximum value and the local minimum value of $y=-x^4+8x^2-3$.
::key 10
We have $y'=-4x(x-2)(x+2)$. The function has a local maximum at $x=\pm2$ with $y_{\text{max}}=13$ and a local minimum at $x=0$ with $y_{\text{min}}=-3$. So the required sum is $13+(-3)=10$ (the local maximum value is counted once).

::sa
The water level in a reservoir after $t$ hours is modelled by $h(t)=t^3-15t^2+60t+100$ (cm), $0\le t\le 12$. For how many hours does the water level fall (give your answer to 1 decimal place)?
::key 4.5
We have $h'(t)=3(t^2-10t+20)<0$ when $5-\sqrt5<t<5+\sqrt5$, and this interval lies in $[0, 12]$. Hence the water level falls for $2\sqrt5\approx 4.47$ hours. So the answer, rounded, is $4.5$ hours.
:::
