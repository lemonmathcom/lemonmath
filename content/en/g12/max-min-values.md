---
title: Maximum and minimum values
description: Find the maximum and minimum of a function on a closed interval by comparing critical points and endpoints, and on an open interval with a table of variations.
minutes: 22
---

:::goals
- Understand the maximum and minimum value of a function on a set, and tell them apart from local maxima and minima.
- Find the maximum and minimum on a closed interval $[a, b]$ by comparing a few values.
- Find the maximum and minimum on an open interval with a table of variations.
- Apply this to polynomial, rational, square-root and trigonometric functions and to real-life problems.
:::

The temperature in a laboratory is monitored for $5$ hours. After $t$ hours, it is $T(t)=t^3-6t^2+9t+20$ (°C), $0\le t\le 5$. At the start the room is at $20$ °C, after $1$ hour it is $24$ °C, and after $3$ hours it is back at $20$ °C. Over those $5$ hours, what are the highest and the lowest temperatures?

You might think straight away of the local maximum $24$ °C at $t=1$. But the answer is not $24$.

"Greatest or least" is the question behind many decisions: choosing a size that uses the least material, a price that gives the most profit, a speed that uses the least fuel. In grade 10 we found the maximum of a quadratic from the vertex of the parabola. The derivative gives one method for every function that is continuous on a closed interval.

## Maximum and minimum values

### Explore: is a local maximum the highest value?

We compute the temperature at whole hours:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $T(t)$ | $20$ | $24$ | $22$ | $20$ | $24$ | $40$ |

The derivative $T'(t)=3t^2-12t+9=3(t-1)(t-3)$ tells us that $T$ has a local maximum of $24$ at $t=1$ and a local minimum of $20$ at $t=3$. Yet by the end of the session, $T(5)=40$, far above the local maximum. A local maximum is compared only with the moments **near** it; "the highest" must be compared with **every** moment.

:::graph Laboratory temperature $T(t)=t^3-6t^2+9t+20$
alt: A graph on the interval from 0 to 5 with a local maximum at t equal 1 with value 24, a local minimum at t equal 3 with value 20, and the highest value 40 at the endpoint t equal 5
x: 0..5
y: 0..45
plot: x^3 - 6x^2 + 9x + 20 ; 0..5
point: (0, 20) "(0, 20)" left
point: (1, 24) "(1, 24)" above
point: (3, 20) "(3, 20)" below
point: (5, 40) "(5, 40)" left
:::

:::definition Maximum value and minimum value
Let $y=f(x)$ be defined on a set $D$.
- A number $M$ is the **maximum value** (greatest value) of $f$ on $D$ if $f(x)\le M$ for every $x\in D$ **and** there is $x_0\in D$ with $f(x_0)=M$. We write $M=\max\limits_{D} f(x)$.
- A number $m$ is the **minimum value** (least value) of $f$ on $D$ if $f(x)\ge m$ for every $x\in D$ **and** there is $x_0\in D$ with $f(x_0)=m$. We write $m=\min\limits_{D} f(x)$.
:::

The condition "there is $x_0$" matters. For example, $f(x)=x^2\le 4$ for every $x\in(0, 2)$, but no $x$ in that interval gives $f(x)=4$; so $4$ is **not** the maximum value of $f$ on $(0, 2)$, and in fact $f$ has no maximum value on this interval.

## On a closed interval

:::theorem A continuous function on a closed interval
Every function that is continuous on a closed interval $[a, b]$ has a maximum value and a minimum value on that interval.
:::

The maximum can only be reached in two places: at an endpoint, or at an interior point where the graph "turns round", that is, where $f'=0$ or $f'$ is undefined. At any other interior point, $f'$ is not zero, so the function is still increasing or decreasing and there is a larger value nearby. So we only need to compare a few values.

**A closer look.** Why do we need both conditions, "continuous" and "closed interval"? Without the endpoints, $f(x)=x$ on the open interval $(0, 1)$ gets close to $1$ but never equals $1$, so it has no maximum value. Without continuity, the function with $f(x)=\dfrac1x$ for $x\neq0$ and $f(0)=0$ is defined on the whole of $[-1, 1]$, but takes arbitrarily large values as $x$ tends to $0$ from the right.

**Connections.** This lesson builds on the extrema of the previous lesson, and it is the key step in the real-life optimisation problems at the end of the chapter. The method is:

1. Find the points $x_1, x_2, \dots$ in the **open interval** $(a, b)$ where $f'(x)=0$ or $f'(x)$ is undefined.
2. Compute $f(a)$, $f(x_1)$, $f(x_2)$, …, $f(b)$.
3. The largest of these numbers is $\max\limits_{[a, b]} f(x)$, and the smallest is $\min\limits_{[a, b]} f(x)$.

:::example A cubic on a closed interval
Find the maximum and minimum values of $f(x)=x^3-3x+1$ on $[0, 2]$.

**Solution.** The function is continuous on $[0, 2]$. On the interval $(0, 2)$, we have

$$f'(x)=3x^2-3=0\iff x=1\ \text{or}\ x=-1\ (\text{rejected since } -1\notin(0, 2)).$$

We have

$$f(0)=1,\qquad f(1)=-1,\qquad f(2)=8-6+1=3.$$

So $\max\limits_{[0, 2]} f(x)=3$ (at $x=2$) and $\min\limits_{[0, 2]} f(x)=-1$ (at $x=1$).
:::

Rejecting a root outside the interval is an easy step to forget. The next example has one rejected root and one irrational root.

:::example A quartic
Find the maximum and minimum values of $f(x)=x^4-4x^2+5$ on $[-1, 3]$.

**Solution.** The function is continuous on $[-1, 3]$. We have

$$f'(x)=4x^3-8x=4x(x^2-2)=0\iff x\in\{0, \sqrt2, -\sqrt2\},\quad -\sqrt2\notin(-1, 3).$$

For $x=\sqrt2$ we have $x^2=2$ and $x^4=4$. Hence

$$f(-1)=1-4+5=2,\quad f(0)=5,\quad f(\sqrt2)=4-8+5=1,\quad f(3)=81-36+5=50.$$

So $\max\limits_{[-1, 3]} f(x)=50$ at $x=3$ and $\min\limits_{[-1, 3]} f(x)=1$ at $x=\sqrt2$.
:::

With a square root, we solve $f'(x)=0$ carefully, with a condition before squaring.

:::example A function with a square root
Find the maximum and minimum values of $f(x)=x+\sqrt{4-x^2}$.

**Solution.** The domain is $[-2, 2]$, and the function is continuous on it. On the interval $(-2, 2)$, we have

$$f'(x)=1-\frac{x}{\sqrt{4-x^2}}=0\iff \sqrt{4-x^2}=x.$$

Condition: $x\ge 0$. Squaring both sides, we get

$$4-x^2=x^2\iff x^2=2\iff x=\sqrt2\quad(\text{since } x\ge 0).$$

We have $f(-2)=-2$, $f(\sqrt2)=\sqrt2+\sqrt2=2\sqrt2$, $f(2)=2$.

So the maximum value is $2\sqrt2$ (at $x=\sqrt2$) and the minimum value is $-2$ (at $x=-2$).
:::

With a trigonometric function, a substitution often turns the problem into a polynomial on a closed interval.

:::example A trigonometric function and a substitution
Find the maximum and minimum values of $f(x)=2\sin x+\cos 2x$ on $[0, \pi]$.

**Solution.** By the double-angle formula, $\cos 2x=1-2\sin^2x$. Letting $t=\sin x$, we have

$$f(x)=2\sin x+1-2\sin^2 x=g(t)=-2t^2+2t+1.$$

Since $x\in[0, \pi]$, $t=\sin x\in[0, 1]$ (because $\sin x\ge 0$ on $[0, \pi]$), not $[-1, 1]$. Considering $g$ on $[0, 1]$, we have

$$g'(t)=-4t+2=0\iff t=\frac12;\qquad g(0)=1,\quad g\left(\frac12\right)=\frac32,\quad g(1)=1.$$

So $\max\limits_{[0, \pi]} f(x)=\dfrac32$ (when $\sin x=\dfrac12$, that is $x=\dfrac{\pi}{6}$ or $x=\dfrac{5\pi}{6}$) and $\min\limits_{[0, \pi]} f(x)=1$ (when $x\in\left\{0, \dfrac{\pi}{2}, \pi\right\}$).

**Look back.** What changes on the interval $[0, 2\pi]$? Then $t=\sin x$ runs over the whole of $[-1, 1]$: the maximum value is still $\dfrac32$, but the minimum value becomes $g(-1)=-3$ (at $x=\dfrac{3\pi}{2}$). The range of the new variable decides the answer.
:::

## On an open interval

On an open interval (with no endpoints), a function may have **no** maximum or no minimum value. Then we draw the table of variations and read the result from it.

:::example A minimum on an open interval
Find the minimum value of $f(x)=x+\dfrac{9}{x}$ on $(0, +\infty)$.

**Solution.** We have

$$f'(x)=1-\frac{9}{x^2}=\frac{(x-3)(x+3)}{x^2},\qquad f'(x)=0\iff x=3\ \ (x>0).$$

Since $x>0$, $f'$ has the same sign as $x-3$. We have $f(x)\to+\infty$ as $x\to0^+$ and as $x\to+\infty$. The table of variations:

| $x$ | $0$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $6$ | $\nearrow$ | $+\infty$ |

So $\min\limits_{(0, +\infty)} f(x)=f(3)=6$, and $f$ has no maximum value on $(0, +\infty)$.
:::

:::graph The graph of $y=x+\dfrac{9}{x}$ for $x>0$
alt: A graph for positive x, falling from very high near the y-axis to its lowest point (3, 6) and then rising for ever
x: 0..12
y: 0..16
plot: x + 9/x ; 0.5..12
point: (3, 6) "(3, 6)" below
:::

## Real-life problems

Now we answer the temperature question from the start. In real-life problems the endpoints are often the start and the end of a period, so they must not be ignored.

:::example Highest and lowest temperature
The room temperature is $T(t)=t^3-6t^2+9t+20$ (°C), $0\le t\le 5$ (hours). Find the highest and lowest temperatures over the $5$ hours.

**Solution.** The function $T$ is continuous on $[0, 5]$. On the interval $(0, 5)$, we have

$$T'(t)=3(t-1)(t-3)=0\iff t=1\ \text{or}\ t=3;\qquad T(0)=20,\ T(1)=24,\ T(3)=20,\ T(5)=40.$$

So the highest temperature is $40$ °C (at the end, $t=5$) and the lowest is $20$ °C (at the start and at $t=3$ hours).
:::

:::warning Common mistakes
- **Taking a local maximum as the maximum.** Wrong: "$T$ has a local maximum of $24$, so the highest temperature is $24$ °C". Why it is wrong: the endpoints were not compared, and $T(5)=40$. Right: always compute $f(a)$ and $f(b)$ as well.
- **Keeping a root outside the interval.** Wrong: finding the minimum of $x^3-3x+1$ on $[0, 2]$ and including $f(-1)=3$. Why it is wrong: $-1$ is not in the interval. Right: only use roots in $(a, b)$.
- **The wrong range for a substitution.** Wrong: putting $t=\sin x$ for $x\in[0, \pi]$ and then using $t\in[-1, 1]$, giving the minimum $g(-1)=-3$. Why it is wrong: on $[0, \pi]$, $\sin x\ge 0$. Right: $t\in[0, 1]$ and the minimum is $1$.
- **Claiming a maximum that is never reached.** Wrong: "$x+\dfrac9x$ has maximum value $+\infty$". Why it is wrong: $+\infty$ is not a number and no $x$ gives it. Right: the function has no maximum value on $(0, +\infty)$.
:::

## Key terms

:::terms
- maximum (greatest) value | giá trị lớn nhất
- minimum (least) value | giá trị nhỏ nhất
- closed interval | đoạn
- open interval | khoảng
- endpoint | đầu mút
- critical point | điểm tới hạn
- continuous function | hàm số liên tục
- substitution (new variable) | ẩn phụ
:::

## Summary

- $M=\max\limits_D f$ when $f(x)\le M$ for every $x\in D$ **and** $M$ is reached at some point of $D$. Likewise for $\min$.
- A function continuous on $[a, b]$ always has a maximum and a minimum value there.
- On a closed interval: roots of $f'$ (and points where $f'$ is undefined) **inside** $(a, b)$ → compute $f$ there and at $a$, $b$ → compare.
- On an open interval: draw the table of variations; there may be no maximum or no minimum.
- After a substitution, find the correct range of the new variable.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the maximum and minimum values of $y=x^3-3x^2$ on $[-1, 3]$.

::hint
**What you need:** on a closed interval, compare the values at the roots of $y'$ in $(-1, 3)$ and at the two endpoints.

**Steps:**
1. Solve $y'=3x^2-6x=0$.
2. Compute $y$ at the roots and at $-1$, $3$.

::solution
We have $y'=3x(x-2)=0\iff x=0$ or $x=2$, both in $(-1, 3)$. We have $y(-1)=-4$, $y(0)=0$, $y(2)=8-12=-4$, $y(3)=27-27=0$.

So the maximum value of the function is $0$ and the minimum value is $-4$.

**Answer.** Maximum value $0$ (at $x=0$ and $x=3$); minimum value $-4$ (at $x=-1$ and $x=2$).
:::

:::exercise
Find the maximum and minimum values of $y=\dfrac{x-1}{x+2}$ on $[0, 3]$.

::hint
**What you need:** if a function is monotonic on a closed interval, its maximum and minimum are at the endpoints.

**Steps:**
1. Compute $y'$ and look at its sign.
2. Compute $y(0)$ and $y(3)$.

::solution
We have $y'=\dfrac{1\cdot2-(-1)\cdot1}{(x+2)^2}=\dfrac{3}{(x+2)^2}>0$, so the function is increasing on $[0, 3]$.

So the maximum value is $y(3)=\dfrac25$ and the minimum value is $y(0)=-\dfrac12$.

**Answer.** Maximum value $\dfrac25$; minimum value $-\dfrac12$.
:::

:::exercise
Find the maximum and minimum values of $y=x^4-2x^2+3$ on $[0, 2]$.

::hint
**What you need:** keep only the roots of $y'$ in the open interval $(0, 2)$.

**Steps:**
1. Solve $y'=4x^3-4x=0$.
2. Reject the roots not in $(0, 2)$, then compare the values.

::solution
We have $y'=4x(x-1)(x+1)$; on the interval $(0, 2)$, $y'=0$ only at $x=1$. We have $y(0)=3$, $y(1)=2$, $y(2)=16-8+3=11$.

So the maximum value is $11$ and the minimum value is $2$.

**Answer.** Maximum value $11$ (at $x=2$); minimum value $2$ (at $x=1$).
:::

:::exercise
Find the minimum value of $y=x^2+\dfrac{16}{x}$ on $(0, +\infty)$.

::hint
**What you need:** on an open interval, draw the table of variations to read off the minimum.

**Steps:**
1. Compute $y'=2x-\dfrac{16}{x^2}=\dfrac{2(x^3-8)}{x^2}$.
2. Find the positive root of $y'$ and the sign on each side.

::solution
We have $y'=0\iff x^3=8\iff x=2$. Since $y'<0$ for $0<x<2$ and $y'>0$ for $x>2$, the function reaches its minimum value at $x=2$.

So the minimum value is $y(2)=4+8=12$.

**Answer.** $\min\limits_{(0, +\infty)} y=12$ at $x=2$.
:::

:::exercise
Consider the function $f(x)=-x^3+3x^2+2$ on $[-1, 3]$. Decide whether each statement is true or false.

a) The equation $f'(x)=0$ has two roots in $[-1, 3]$.

b) The maximum value of $f$ on $[-1, 3]$ is $6$.

c) The function $f$ reaches its maximum value only at $x=2$.

d) The minimum value of $f$ on $[-1, 3]$ is $2$.

::hint
**What you need:** compare the values at the roots of $f'$ and at the two endpoints; a maximum can be reached at several points.

**Steps:**
1. Solve $f'(x)=-3x^2+6x=0$.
2. Compute $f(-1)$, $f(0)$, $f(2)$, $f(3)$.

::solution
We have $f'(x)=-3x(x-2)=0\iff x=0$ or $x=2$. We have $f(-1)=1+3+2=6$, $f(0)=2$, $f(2)=-8+12+2=6$, $f(3)=-27+27+2=2$.

a) **True**. The two roots $0$ and $2$ are both in $[-1, 3]$.

b) **True**. The largest of the values above is $6$.

c) **False**. Since $f(-1)=6$, the maximum is reached at both $x=-1$ and $x=2$.

d) **True**. The smallest of the values above is $2$, reached at $x=0$ and $x=3$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
Find the maximum value of $y=x\sqrt{9-x^2}$ on $[0, 3]$ (give the result as a decimal).

::hint
**What you need:** $\left(\sqrt{u}\right)'=\dfrac{u'}{2\sqrt u}$ and comparing values on a closed interval.

**Steps:**
1. Compute $y'$ and write it as one fraction: the numerator is $9-2x^2$.
2. Find the root in $(0, 3)$ and compare with $y(0)$, $y(3)$.

::solution
On the interval $(0, 3)$, we have $y'=\sqrt{9-x^2}-\dfrac{x^2}{\sqrt{9-x^2}}=\dfrac{9-2x^2}{\sqrt{9-x^2}}=0\iff x^2=\dfrac92$, that is $x=\dfrac{3}{\sqrt2}$. Then $y=\dfrac{3}{\sqrt2}\cdot\sqrt{\dfrac92}=\dfrac92$. Also $y(0)=y(3)=0$.

So the maximum value of the function is $\dfrac92$.

**Answer.** $4.5$.
:::

:::exercise
A workshop makes $x$ chairs a week ($10\le x\le 100$) at a total cost of $C(x)=x^2+100x+2500$ (thousand đồng). The average cost per chair is $A(x)=\dfrac{C(x)}{x}$. How many chairs a week should the workshop make so that the average cost is lowest? Find this lowest average cost.

::hint
**What you need:** find the minimum of $A(x)=x+100+\dfrac{2500}{x}$ on $[10, 100]$.

**Steps:**
1. Compute $A'(x)$ and solve $A'(x)=0$.
2. Compare the values at the root and at $10$, $100$.

::solution
We have $A'(x)=1-\dfrac{2500}{x^2}=0\iff x=50$ (since $x>0$). We have $A(10)=10+100+250=360$, $A(50)=50+100+50=200$, $A(100)=100+100+25=225$.

So the workshop should make $50$ chairs a week; the lowest average cost is then $200$ thousand đồng per chair.

**Answer.** $50$ chairs a week; the lowest average cost is $200$ thousand đồng per chair.
:::

:::exercise Review
Find the maximum and minimum values of $y=\cos 2x+2\cos x$ on $[0, \pi]$.

::hint
**What you need:** the double-angle formula $\cos 2x=2\cos^2x-1$ (grade 11); for $x\in[0, \pi]$, $\cos x\in[-1, 1]$.

**Steps:**
1. Put $t=\cos x$ and write $y=g(t)$.
2. Find the maximum and minimum of $g$ on $[-1, 1]$.

::solution
Letting $t=\cos x$, we have $y=2t^2+2t-1=g(t)$ with $t\in[-1, 1]$. We have $g'(t)=4t+2=0\iff t=-\dfrac12$, and $g(-1)=-1$, $g\left(-\dfrac12\right)=\dfrac12-1-1=-\dfrac32$, $g(1)=3$.

So the maximum value is $3$ and the minimum value is $-\dfrac32$.

**Answer.** Maximum value $3$ (at $x=0$); minimum value $-\dfrac32$ (at $x=\dfrac{2\pi}{3}$).
:::

:::exercise Review
Find the maximum and minimum values of $y=-x^2+4x+1$ on $[0, 5]$ in two ways: with the vertex of the parabola (grade 10) and with the derivative.

::hint
**What you need:** the parabola $y=ax^2+bx+c$ with $a<0$ has its highest point at the vertex $x=-\dfrac{b}{2a}$ (see [the quadratic function](lesson:quadratic-function)).

**Steps:**
1. Method 1: find the vertex, check that it is in $[0, 5]$, then compare with the two endpoints.
2. Method 2: solve $y'=0$ and compare as usual.

::solution
Method 1. The vertex of the parabola has $x$-coordinate $x=-\dfrac{4}{2\cdot(-1)}=2\in[0, 5]$, and $y(2)=5$. Method 2. We have $y'=-2x+4=0\iff x=2$. In both methods we compare $y(0)=1$, $y(2)=5$, $y(5)=-25+20+1=-4$.

So the maximum value is $5$ and the minimum value is $-4$.

**Answer.** Maximum value $5$ (at $x=2$); minimum value $-4$ (at $x=5$).
:::

:::exercise Challenge
Find the maximum and minimum values of $y=x+\sqrt2\cos x$ on $\left[0, \dfrac{\pi}{2}\right]$.

::hint
**What you need:** comparing values on a closed interval; to compare irrational numbers, use approximations.

**Steps:**
1. Solve $y'=1-\sqrt2\sin x=0$ on $\left(0, \dfrac{\pi}{2}\right)$.
2. Compute $y$ at the root and at both endpoints, then compare using approximations.

::solution
On the interval $\left(0, \dfrac{\pi}{2}\right)$, we have $y'=0\iff\sin x=\dfrac{1}{\sqrt2}\iff x=\dfrac{\pi}{4}$. We have $y(0)=\sqrt2\approx1.414$; $y\left(\dfrac{\pi}{4}\right)=\dfrac{\pi}{4}+1\approx1.785$; $y\left(\dfrac{\pi}{2}\right)=\dfrac{\pi}{2}\approx1.571$.

So the maximum value is $\dfrac{\pi}{4}+1$ and the minimum value is $\sqrt2$.

**Answer.** Maximum value $\dfrac{\pi}{4}+1$ (at $x=\dfrac{\pi}{4}$); minimum value $\sqrt2$ (at $x=0$).
:::

## Mini test

:::quiz
::mc
The maximum value of the function $f(x)=x^3-12x+1$ on $[-1, 3]$ is
A. $17$.
B. $-15$.
C. $-8$.
D. $12$.
::key D
We have $f'(x)=3x^2-12=0\iff x=\pm2$, and only $x=2$ lies in $(-1, 3)$. We have $f(-1)=12$, $f(2)=-15$, $f(3)=-8$, so the maximum value is $12$. Option A is $f(-2)=17$, the value at a root outside the interval.

::mc
The minimum value of $y=\dfrac{2x-1}{x+1}$ on $[0, 2]$ is
A. $-1$.
B. $1$.
C. $2$.
D. $0$.
::key A
We have $y'=\dfrac{3}{(x+1)^2}>0$, so the function is increasing on $[0, 2]$. Hence the minimum value is $y(0)=-1$. Option B is the maximum value $y(2)$; the number $2$ is only the limit as $x\to+\infty$.

::mc
The minimum value of $y=x+\dfrac{4}{x-1}$ on $(1, +\infty)$ is
A. $4$.
B. $3$.
C. $5$.
D. $-3$.
::key C
We have $y'=1-\dfrac{4}{(x-1)^2}=0\iff x=3$ (reject $x=-1$). Since $y'$ changes sign from $-$ to $+$ at $x=3$, the minimum value is $y(3)=5$. Option B is the point $x=3$, option A forgets the $+1$ in $y=(x-1)+\dfrac{4}{x-1}+1$, and option D is $y(-1)$.

::mc
The function $y=f(x)$ is continuous on $[-2, 4]$ and $f'(x)>0$ for every $x\in(-2, 4)$. Which of the following statements is correct?
A. $\max\limits_{[-2, 4]} f(x)=f(-2)$.
B. $\max\limits_{[-2, 4]} f(x)=f(4)$.
C. $\min\limits_{[-2, 4]} f(x)=f(4)$.
D. $f$ has no maximum value on $[-2, 4]$.
::key B
Since the function is increasing on $[-2, 4]$, the maximum is at the right endpoint $x=4$. Option D is wrong because a function continuous on a closed interval always has a maximum value.

::tf
Consider the function $f(x)=x^4-8x^2+3$ on $[-1, 3]$. Decide whether each statement is true or false.
a) The equation $f'(x)=0$ has three roots in $[-1, 3]$.
b) $f(2)=-13$.
c) The maximum value of $f(x)$ on $[-1, 3]$ is $3$.
d) The sum of the maximum and minimum values of $f(x)$ on $[-1, 3]$ is $-1$.
::key F T F T
a) False: we have $f'(x)=4x(x^2-4)$, with roots $0$, $2$, $-2$, but $-2\notin[-1, 3]$. b) True: substituting, we get $16-32+3=-13$. c) False: we have $f(-1)=-4$, $f(0)=3$, $f(2)=-13$, $f(3)=12$, so the maximum value is $12$ (at an endpoint). d) True: the required sum is $12+(-13)=-1$.

::sa
A workshop produces $x$ tonnes of goods a month ($0\le x\le 20$) and makes a profit of $P(x)=-x^3+18x^2+135x$ (million đồng). What is the workshop's greatest monthly profit, in million đồng?
::key 2700
We have $P'(x)=-3(x-15)(x+3)=0\iff x=15$ (reject $x=-3$). We have $P(0)=0$, $P(15)=2700$, $P(20)=1900$. So the greatest profit is $2700$ million đồng.

::sa
Find the maximum value of the function $y=\sqrt{x}\,(6-x)$ on $[0, 6]$ (give your answer to 1 decimal place).
::key 5.7
We have $y=6\sqrt x-x\sqrt x$, so $y'=\dfrac{3}{\sqrt x}-\dfrac32\sqrt x=0\iff x=2$. We have $y(0)=y(6)=0$ and $y(2)=4\sqrt2\approx5.66$. So the maximum value, to 1 decimal place, is $5.7$.
:::
