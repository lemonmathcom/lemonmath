---
title: Continuous functions
description: Understand continuity at a point and on an interval, test piecewise functions with one-sided limits, and use the intermediate value theorem to find roots.
minutes: 25
---

:::goals
- State and understand the definition of a function that is continuous at a point, on an interval and on a closed interval.
- Test the continuity of a piecewise function using one-sided limits.
- Recognise that polynomials, rational functions and trigonometric functions are continuous on their domains, and use the rules for combining continuous functions.
- Use the intermediate value theorem to show that an equation has a root and to locate it.
- Explain real situations by the continuity or discontinuity of a function.
:::

Suppose a courier company charges for a parcel according to its mass $x$ (kg): $20$ thousand dong if $0<x\le1$, $30$ thousand dong if $1<x\le2$ and $40$ thousand dong if $2<x\le3$. The graph of the fee is broken into separate pieces. By contrast, the temperature of a room changes all day long, and we draw its graph in one unbroken stroke.

Is the difference between "broken" and "unbroken" only a matter of drawing? Or can we say it in the language of limits that you have just learnt? The answer gives us a powerful tool: if an unbroken graph changes sign, it must cross the horizontal axis.

:::graph The courier fee (thousand dong) against the mass $x$ (kg)
alt: A graph made of three horizontal segments at heights 20, 30 and 40 over the intervals from 0 to 1, from 1 to 2 and from 2 to 3; the left end of each segment is a hollow point and the right end is a solid point, so the graph is broken at x = 1 and x = 2
x: 0..4
y: 0..50
segment: (0, 20) (1, 20)
segment: (1, 30) (2, 30)
segment: (2, 40) (3, 40)
open: (0, 20) "" left
open: (1, 30) "" above
open: (2, 40) "" above
point: (1, 20) "20" below
point: (2, 30) "30" below
point: (3, 40) "40" below
:::

## Explore: "unbroken" and "broken" seen through limits

Let $f(x)$ be the fee function above and let $g(x)=x^2$. We compare the values of the two functions as $x$ approaches $1$ from both sides.

| $x$ | $0.9$ | $0.99$ | $1$ | $1.01$ | $1.1$ |
|---|---|---|---|---|---|
| $f(x)$ | $20$ | $20$ | $20$ | $30$ | $30$ |
| $g(x)=x^2$ | $0.81$ | $0.9801$ | $1$ | $1.0201$ | $1.21$ |

For $f$, the values to the left of $x=1$ are always $20$ and the values to the right are always $30$. We have $\lim_{x\to1^-}f(x)=20$ and $\lim_{x\to1^+}f(x)=30$. These limits are different, so $f$ has no limit as $x\to1$. The graph is broken exactly at $x=1$.

For $g$, the values on both sides close in on $1$, and $1$ is exactly $g(1)$. We have $\lim_{x\to1}g(x)=1=g(1)$. The graph passes through $x=1$ without a break.

So "the graph is unbroken at $x_0$" means: as $x$ approaches $x_0$, the value $f(x)$ approaches exactly $f(x_0)$.

## Continuity at a point

:::definition Continuity at a point
Let $y=f(x)$ be a function defined on an open interval $K$ and let $x_0\in K$. The function $f$ is **continuous at** $x_0$ if
$$\lim_{x\to x_0}f(x)=f(x_0).$$
If $f$ is not continuous at $x_0$, we say that $f$ is **discontinuous** at $x_0$.
:::

**Going deeper.** The equality in the definition contains three conditions at once: $f(x_0)$ is defined; the limit $\lim_{x\to x_0}f(x)$ exists, that is, the left-hand and right-hand limits are equal; and these two numbers are equal. If any one condition fails, the function is discontinuous. In the courier example the second condition fails at $x=1$. In the next example a function has a limit but is still discontinuous, because the third condition fails.

:::definition Continuity on an interval and on a closed interval
- A function $f$ is **continuous on the open interval** $(a, b)$ if it is continuous at every point of that interval.
- A function $f$ is **continuous on the closed interval** $[a, b]$ if it is continuous on $(a, b)$ and $\lim_{x\to a^+}f(x)=f(a)$, $\lim_{x\to b^-}f(x)=f(b)$.
:::

The two conditions at the endpoints use one-sided limits only, because inside $[a, b]$ we cannot approach $a$ from the left of $a$. The graph of a function that is continuous on an interval is one unbroken curve over that interval.

We start with a function whose graph has a "hole".

:::example A function with a limit that is still discontinuous
Consider the function $f(x)=\dfrac{x^2-4}{x-2}$ for $x\neq2$. Test the continuity of $f$ at $x=2$ in two cases:

a) $f(2)=3$.

b) $f(2)=4$.

**Solution.** For $x\neq2$, we simplify the fraction and then find the limit:

$$\lim_{x\to2}\frac{x^2-4}{x-2}=\lim_{x\to2}\frac{(x-2)(x+2)}{x-2}=\lim_{x\to2}(x+2)=4.$$

a) We have $f(2)=3\neq4=\lim_{x\to2}f(x)$. So $f$ is discontinuous at $x=2$.

b) We have $f(2)=4=\lim_{x\to2}f(x)$. So $f$ is continuous at $x=2$.
:::

:::graph The graph of $f$ when $f(2)=3$
alt: The line y = x + 2 with a hole at the hollow point (2, 4), and one separate solid point (2, 3)
x: -1..5
y: -1..7
plot: x+2
open: (2, 4) "" above-left
point: (2, 3) "f(2) = 3" below-right
:::

Case a) shows that the graph can break even though the limit exists: changing the value at a single point destroys continuity. Now we test a function given by two formulas, where one-sided limits are the main tool.

:::example A function given by two formulas
Test the continuity of the function
$$f(x)=\begin{cases}x^2+1&\text{if }x\le1,\\3x+1&\text{if }x>1\end{cases}$$
at $x=1$.

**Solution.** We have $f(1)=1^2+1=2$. We work out the two one-sided limits:

$$\lim_{x\to1^-}f(x)=\lim_{x\to1^-}(x^2+1)=2,\qquad\lim_{x\to1^+}f(x)=\lim_{x\to1^+}(3x+1)=4.$$

The two limits are different, so $\lim_{x\to1}f(x)$ does not exist.

So $f$ is discontinuous at $x=1$.
:::

## Common continuous functions

Checking the definition at every point would take very long. Fortunately, the familiar functions are continuous on their domains.

:::theorem Continuity of common functions
- Polynomial functions are continuous on $\mathbb{R}$.
- Rational functions and the trigonometric functions $y=\sin x$, $y=\cos x$, $y=\tan x$, $y=\cot x$ are continuous on each interval of their domains.
- If $f$ and $g$ are continuous at $x_0$, then $f+g$, $f-g$ and $f\cdot g$ are continuous at $x_0$; and $\dfrac{f}{g}$ is continuous at $x_0$ if $g(x_0)\neq0$.
:::

**Why?** For a polynomial $P(x)$, the rules for limits give $\lim_{x\to x_0}x^k=x_0^k$, and then the limits of sums and products give $\lim_{x\to x_0}P(x)=P(x_0)$. A rational function $\dfrac{P(x)}{Q(x)}$ is a quotient of two continuous polynomials, so it is continuous at every point where $Q(x_0)\neq0$, that is, at every point of its domain.

Notice that "continuous on its domain" does not mean the graph is unbroken over the whole line: the domain may consist of several separate intervals.

:::example Continuous on the intervals of the domain
On which intervals is the function $f(x)=\dfrac{x+1}{x^2-5x+6}$ continuous?

**Solution.** We have $x^2-5x+6=(x-2)(x-3)$. The function is defined when $x\neq2$ and $x\neq3$.

The domain is $\mathbb{R}\setminus\{2, 3\}$. A rational function is continuous on each interval of its domain.

So $f$ is continuous on the intervals $(-\infty, 2)$, $(2, 3)$ and $(3, +\infty)$.
:::

Another kind of function that appears every day is a bill with price tiers. The next problem also uses all four steps of problem solving.

:::example Application: an electricity bill with tiers
Suppose an electricity company (made-up numbers, not the real EVN tariff) charges as follows: $2$ thousand dong for each kWh in the first $50$ kWh, $2.5$ thousand dong for each kWh from the $51$st to the $100$th kWh, and $3$ thousand dong for each kWh from the $101$st kWh onwards. Let $T(x)$ (thousand dong) be the bill for $x$ kWh.

a) Write down a formula for $T(x)$.

b) Test the continuity of $T$ at $x=50$ and $x=100$.

c) Work out the bill for $80$ kWh.

**Solution.**

*Understand.* Each tier applies only to the electricity inside that tier. We need a formula for each range of $x$, and then we check whether the pieces "fit" together.

*Plan.* The amount at the end of each tier is the amount already paid for the earlier tiers, plus the part in the current tier. At the join between two tiers we compare the left-hand limit, the right-hand limit and the value of the function.

*Solve.* a) For $0\le x\le50$: $T(x)=2x$, and $T(50)=100$.

For $50<x\le100$: $T(x)=100+2.5(x-50)=2.5x-25$, and $T(100)=225$.

For $x>100$: $T(x)=225+3(x-100)=3x-75$.

b) At $x=50$: $T(50)=100$, $\lim_{x\to50^-}2x=100$ and $\lim_{x\to50^+}(2.5x-25)=100$. These three values are equal, so $T$ is continuous at $x=50$.

At $x=100$: $T(100)=225$, $\lim_{x\to100^-}(2.5x-25)=225$ and $\lim_{x\to100^+}(3x-75)=225$. So $T$ is continuous at $x=100$.

c) Since $50<80\le100$, we have $T(80)=2.5\cdot80-25=175$.

So $T$ is continuous at $x=50$ and $x=100$, and a customer using $80$ kWh pays $175$ thousand dong.

*Look back.* Suppose the company charged $2.5$ thousand dong for **all** the electricity once the customer passes $50$ kWh. The bill would then be $2.5x$ for $x>50$. Using $50$ kWh would cost $100$ thousand dong, but $51$ kWh would cost $127.5$ thousand dong: one extra kWh adds $27.5$ thousand dong, and the function is discontinuous at $x=50$. Charging by tiers makes the bill rise smoothly: a small increase in use gives a small increase in the bill.
:::

## The intermediate value theorem

A room starts at $18\,^\circ\text{C}$ and later reaches $30\,^\circ\text{C}$, and the temperature changes continuously. Then at some moment the temperature is exactly $25\,^\circ\text{C}$. This observation is true for every continuous function.

:::theorem The intermediate value theorem
If the function $y=f(x)$ is continuous on the closed interval $[a, b]$ and $f(a)\cdot f(b)<0$, then the equation $f(x)=0$ has at least one root in the interval $(a, b)$.
:::

**Why?** The condition $f(a)f(b)<0$ means that the two end points of the graph lie on opposite sides of the horizontal axis. The graph of a continuous function is one unbroken curve, drawn without lifting the pen, so a curve that goes from one side to the other must cross the axis at least once.

**Going deeper.** The word "continuous" cannot be dropped. The function $f(x)=-1$ for $x<0$ and $f(x)=1$ for $x\ge0$ has $f(-1)f(1)=-1<0$, but $f(x)=0$ has no root, because $f$ is discontinuous at $0$. Also, the theorem tells us only that a root **exists**, not **how many** roots there are.

:::example Showing that an equation has roots
Show that the equation $x^3-3x+1=0$ has three distinct roots.

**Solution.** Let $f(x)=x^3-3x+1$. The function $f$ is a polynomial, so it is continuous on $\mathbb{R}$. We work out some values:

$$f(-2)=-1,\quad f(-1)=3,\quad f(0)=1,\quad f(1)=-1,\quad f(2)=3.$$

We have $f(-2)f(-1)=-3<0$, so the equation has a root in $(-2, -1)$.

We have $f(0)f(1)=-1<0$, so the equation has a root in $(0, 1)$.

We have $f(1)f(2)=-3<0$, so the equation has a root in $(1, 2)$.

These three intervals do not overlap, so the roots are distinct.

So the equation $x^3-3x+1=0$ has at least three distinct roots. A cubic equation has at most three roots, so it has exactly three.
:::

From the interval $(0, 1)$ we can narrow down to an approximate root: $f(0.3)=0.127>0$ and $f(0.4)=-0.136<0$, so the root lies in $(0.3, 0.4)$. Halving the interval again and again gives the root to any accuracy we like.

:::warning Common mistakes
- **"If the limit exists, the function is continuous."** Wrong: $\lim_{x\to2}\dfrac{x^2-4}{x-2}=4$, so the function is continuous at $2$ (even though $f(2)=3$). Why it is wrong: we need $\lim_{x\to2}f(x)=f(2)$, that is $4=3$, which is false. Right: $f$ is discontinuous at $2$.
- **Forgetting one-sided limits where two formulas meet.** Wrong: the function has two polynomial formulas, so it is always continuous. Why it is wrong: at the join, the two formulas may give different values. Right: compare $\lim_{x\to x_0^-}f(x)$, $\lim_{x\to x_0^+}f(x)$ and $f(x_0)$.
- **Using the intermediate value theorem when $f(a)f(b)>0$.** Wrong: $f(1)f(2)>0$, so the equation has no root in $(1, 2)$. Why it is wrong: the theorem gives a sufficient condition only; the same sign does not tell us anything. Right: no conclusion, so try other points.
:::

**Connections.** Continuity builds on the limits of functions that you have already met, and it is needed for the lessons that follow: a function that has a derivative at a point must be continuous at that point (see [the derivative](lesson:derivative-definition)), and the exponential and logarithmic functions in [exponential and logarithmic functions](lesson:exp-log-functions) are continuous on their domains. In real life, a "continuous" function describes quantities that change smoothly (temperature, distance), while a "discontinuous" function describes quantities that change in steps (a delivery fee by mass).

## Key terms

:::terms
- continuous at a point | hàm số liên tục tại một điểm
- continuous on an interval | hàm số liên tục trên một khoảng
- discontinuous | gián đoạn
- left-hand limit | giới hạn bên trái
- right-hand limit | giới hạn bên phải
- domain | tập xác định
- polynomial | đa thức
- rational function | hàm số phân thức hữu tỉ
- intermediate value theorem | tính chất giá trị trung gian
- root of an equation | nghiệm của phương trình
:::

## Summary

- $f$ is continuous at $x_0$ when $\lim_{x\to x_0}f(x)=f(x_0)$: $f(x_0)$ is defined, the limit exists and the two values are equal.
- For a piecewise function, at the join we compare the left-hand limit, the right-hand limit and the value of the function.
- Polynomials are continuous on $\mathbb{R}$; rational and trigonometric functions are continuous on each interval of their domains; sums, differences and products are continuous, and quotients are continuous where the denominator is not $0$.
- If $f$ is continuous on $[a, b]$ and $f(a)f(b)<0$, then $f(x)=0$ has at least one root in $(a, b)$.
- Charging by tiers makes a bill continuous; charging in steps makes a fee discontinuous.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Let $f(x)=x^2-3x+5$. Show that $f$ is continuous at $x=2$.

::hint
**What you need:** $f$ is continuous at $x_0$ when $\lim_{x\to x_0}f(x)=f(x_0)$.

**Steps:**
1. Work out $f(2)$.
2. Work out $\lim_{x\to2}f(x)$ and compare.

::solution
We have $f(2)=4-6+5=3$ and $\lim_{x\to2}(x^2-3x+5)=4-6+5=3$. Hence $\lim_{x\to2}f(x)=f(2)$.

So $f$ is continuous at $x=2$.

**Answer.** $f$ is continuous at $x=2$.
:::

:::exercise
Test the continuity of the function
$$f(x)=\begin{cases}\dfrac{x^2-x-6}{x-3}&\text{if }x\neq3,\\4&\text{if }x=3\end{cases}$$
at $x=3$.

::hint
**What you need:** factorise the numerator to simplify; compare the limit with $f(3)$.

**Steps:**
1. Factorise $x^2-x-6$.
2. Find $\lim_{x\to3}f(x)$ and compare it with $f(3)$.

::solution
For $x\neq3$ we have $\dfrac{x^2-x-6}{x-3}=\dfrac{(x-3)(x+2)}{x-3}=x+2$. Hence $\lim_{x\to3}f(x)=5$.

We have $f(3)=4\neq5$.

So $f$ is discontinuous at $x=3$.

**Answer.** $f$ is discontinuous at $x=3$.
:::

:::exercise
On which intervals is the function $f(x)=\dfrac{2x-1}{x^2-4}$ continuous?

::hint
**What you need:** a rational function is continuous on each interval of its domain.

**Steps:**
1. Find the values that make the denominator $0$.
2. Write the domain as a union of intervals.

::solution
We have $x^2-4=0\Leftrightarrow x=2$ or $x=-2$. The domain is $\mathbb{R}\setminus\{-2, 2\}$.

So $f$ is continuous on the intervals $(-\infty, -2)$, $(-2, 2)$ and $(2, +\infty)$.

**Answer.** $(-\infty, -2)$, $(-2, 2)$, $(2, +\infty)$.
:::

:::exercise
Test the continuity of the function
$$f(x)=\begin{cases}x^2-1&\text{if }x<2,\\2x-1&\text{if }x\ge2\end{cases}$$
at $x=2$.

::hint
**What you need:** compare the left-hand limit, the right-hand limit and $f(2)$.

**Steps:**
1. Work out $f(2)$ using the second formula.
2. Work out the two one-sided limits.

::solution
We have $f(2)=2\cdot2-1=3$, $\lim_{x\to2^-}(x^2-1)=3$ and $\lim_{x\to2^+}(2x-1)=3$.

These three values are equal.

So $f$ is continuous at $x=2$.

**Answer.** $f$ is continuous at $x=2$.
:::

:::exercise
Suppose a water company (made-up numbers) charges, in thousand dong, according to the volume $x$ (m³) of water used: $W(x)=8x$ if $0\le x\le10$ and $W(x)=12x$ if $x>10$ (a price of $12$ thousand dong for **all** the water once the customer uses more than $10$ m³). Is $W$ continuous at $x=10$? Work out the bill for $10$ m³ and for $10.1$ m³ and comment.

::hint
**What you need:** compare the left-hand limit, the right-hand limit and $W(10)$.

**Steps:**
1. Work out $W(10)$, $\lim_{x\to10^-}W(x)$ and $\lim_{x\to10^+}W(x)$.
2. Work out $W(10.1)$.

::solution
We have $W(10)=80$, $\lim_{x\to10^-}8x=80$ and $\lim_{x\to10^+}12x=120$. The two limits are different, so $W$ is discontinuous at $x=10$.

We have $W(10)=80$ and $W(10.1)=12\cdot10.1=121.2$. An extra $0.1$ m³ raises the bill by $41.2$ thousand dong, which is unreasonable.

So $W$ is discontinuous at $x=10$, and this way of charging makes the bill jump suddenly.

**Answer.** $W$ is discontinuous at $x=10$; $80$ thousand dong and $121.2$ thousand dong.
:::

:::exercise
The temperature $T(t)$ ($^\circ\text{C}$) in a laboratory is recorded continuously: it is $18\,^\circ\text{C}$ at $6$ a.m. and $30\,^\circ\text{C}$ at $2$ p.m. Show that at some moment between $6$ a.m. and $2$ p.m. the temperature is exactly $25\,^\circ\text{C}$.

::hint
**What you need:** the intermediate value theorem for a function that is continuous on a closed interval.

**Steps:**
1. Let $g(t)=T(t)-25$.
2. Work out $g(6)$ and $g(14)$.

::solution
Let $g(t)=T(t)-25$. Since $T$ is continuous on $[6, 14]$, so is $g$.

We have $g(6)=18-25=-7$ and $g(14)=30-25=5$, so $g(6)g(14)<0$. Hence there is $t_0\in(6, 14)$ with $g(t_0)=0$, that is $T(t_0)=25$.

So at some moment the temperature is exactly $25\,^\circ\text{C}$.

**Answer.** There is a moment $t_0\in(6, 14)$ with $T(t_0)=25$.
:::

:::exercise
Consider the function
$$f(x)=\begin{cases}\dfrac{x^2-1}{x-1}&\text{if }x\neq1,\\3&\text{if }x=1.\end{cases}$$
Decide whether each statement is true or false.

a) $f(1)=3$.

b) $\lim_{x\to1}f(x)=3$.

c) The function $f$ is not continuous at $x=1$.

d) The function $f$ is continuous on the interval $(1, +\infty)$.

::hint
**What you need:** simplify the fraction for $x\neq1$; compare the limit with $f(1)$.

**Steps:**
1. Simplify $\dfrac{x^2-1}{x-1}$.
2. Check each statement.

::solution
a) **True**: by the definition of $f$, $f(1)=3$.

b) **False**: for $x\neq1$, $f(x)=x+1$, so $\lim_{x\to1}f(x)=2$, not $3$.

c) **True**: $\lim_{x\to1}f(x)=2\neq3=f(1)$.

d) **True**: for $x>1$ we have $f(x)=x+1$, a polynomial, which is continuous on $(1, +\infty)$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
The equation $x^3+2x-5=0$ has a root in the interval $(1, 2)$. Find this root, rounded to 2 decimal places.

::hint
**What you need:** halve the interval that contains the root, using the intermediate value theorem.

**Steps:**
1. Check that $f(1)f(2)<0$ for $f(x)=x^3+2x-5$.
2. Narrow down the interval with a scientific calculator, then round.

::solution
We have $f(1)=-2$ and $f(2)=7$, so the root lies in $(1, 2)$. We have $f(1.3)=-0.203<0$ and $f(1.4)=0.544>0$, so the root lies in $(1.3, 1.4)$. Narrowing down further, we get the approximate root $1.328\ldots$

So the root is approximately $1.33$.

**Answer.** $1.33$.
:::

:::exercise
Revision of one-sided limits. Let $f(x)=\dfrac{1}{x-1}$. On which intervals is $f$ continuous? Work out $\lim_{x\to1^-}f(x)$ and $\lim_{x\to1^+}f(x)$, and describe the shape of the graph of $f$ near $x=1$.

::hint
**What you need:** the sign of $x-1$ as $x$ approaches $1$ from each side.

**Steps:**
1. Find the domain.
2. If $x<1$ then $x-1<0$; if $x>1$ then $x-1>0$.

::solution
The domain is $\mathbb{R}\setminus\{1\}$, so $f$ is continuous on $(-\infty, 1)$ and $(1, +\infty)$.

As $x\to1^-$, the denominator tends to $0$ through negative values, so $\lim_{x\to1^-}f(x)=-\infty$. As $x\to1^+$, the denominator tends to $0$ through positive values, so $\lim_{x\to1^+}f(x)=+\infty$.

So the graph has two separate branches, with the line $x=1$ as a vertical asymptote.

**Answer.** Continuous on $(-\infty, 1)$ and $(1, +\infty)$; $-\infty$ and $+\infty$.
:::

:::exercise Challenge
Show that the equation $\cos x=x$ has a root in the interval $(0, 1)$ (with $x$ in radians).

::hint
**What you need:** the difference of two continuous functions is continuous; the intermediate value theorem.

**Steps:**
1. Let $f(x)=\cos x-x$ and show that $f$ is continuous on $[0, 1]$.
2. Work out $f(0)$ and $f(1)$ (use a calculator in radian mode).

::solution
Let $f(x)=\cos x-x$. The functions $\cos x$ and the polynomial $x$ are both continuous on $\mathbb{R}$, so $f$ is continuous on $[0, 1]$.

We have $f(0)=1>0$ and $f(1)=\cos1-1\approx-0.46<0$, so $f(0)f(1)<0$.

Hence the equation $f(x)=0$ has at least one root in $(0, 1)$.

So the equation $\cos x=x$ has a root in the interval $(0, 1)$.

**Answer.** There is a root in $(0, 1)$.
:::

## Mini test

:::quiz
::mc TH
Which of the following functions is continuous on $\mathbb{R}$?
A. $y=\dfrac{1}{x-1}$.
B. $y=\dfrac{x}{x^2-4}$.
C. $y=\sqrt{x}$.
D. $y=x^3-2x+5$.
::key D
A polynomial is continuous on $\mathbb{R}$. The functions in A and B are undefined at some points, and the function in D is defined only for $x\ge0$.

::mc VD
Let $f(x)=\begin{cases}\dfrac{x^2-x-2}{x-2}&\text{if }x\neq2,\\3&\text{if }x=2.\end{cases}$ Which statement is correct?
A. The function is continuous at $x=2$.
B. The function is not continuous at $x=2$ because it is not defined at $2$.
C. The function is not continuous at $x=2$ because $\lim_{x\to2}f(x)=0$.
D. The function is not continuous at $x=2$ because $\lim_{x\to2}f(x)$ does not exist.
::key A
For $x\neq2$, $f(x)=\dfrac{(x-2)(x+1)}{x-2}=x+1$, so $\lim_{x\to2}f(x)=3=f(2)$. Option B forgets that $f(2)=3$, C works out the limit wrongly, and D confuses the form $\dfrac{0}{0}$ with a limit that does not exist.

::mc VD
Which of the following equations has a root in the interval $(1, 2)$?
A. $x^3+x-1=0$.
B. $x^3-3x-1=0$.
C. $x^2-4x+5=0$.
D. $2x^2-5x+4=0$.
::key B
For $f(x)=x^3-3x-1$ we have $f(1)=-3$ and $f(2)=1$, so $f(1)f(2)<0$. In A, D and C the values $f(1)$ and $f(2)$ have the same sign, and these equations have no root in $(1, 2)$.

::mc TH
Let $f(x)=\begin{cases}x^2+1&\text{if }x<1,\\3&\text{if }x=1,\\2x&\text{if }x>1.\end{cases}$ Which statement is correct?
A. The function is continuous at $x=1$ because the one-sided limits exist.
B. The function is not continuous at $x=1$ because the left-hand limit differs from the right-hand limit.
C. The function is not continuous at $x=1$ because $\lim_{x\to1}f(x)=2$ is different from $f(1)=3$.
D. The function is continuous at $x=1$ because $f(1)$ is defined.
::key C
The left-hand and right-hand limits are both $2$, so $\lim_{x\to1}f(x)=2\neq f(1)=3$. Option B is wrong because the one-sided limits are equal; A and D leave out the condition $\lim f=f(x_0)$.

::tf VD TH NB NB
Suppose a mobile phone plan charges (in thousand dong) according to the amount of data $x$ (GB) used: $C(x)=50$ if $0\le x\le5$ and $C(x)=50+20(x-5)$ if $x>5$. Decide whether each statement is true or false.
a) The function $C$ is not continuous at $x=5$ because it is given by two formulas.
b) $\lim_{x\to5^+}C(x)=50$.
c) $C(8)=110$.
d) $C(7)=100$.
::key F T T F
a) False: $C(5)=50$, $\lim_{x\to5^-}C(x)=50$ and $\lim_{x\to5^+}C(x)=50$, so $C$ is continuous at $5$ even though it has two formulas. b) True: $50+20\cdot0=50$. c) True: $50+20\cdot3=110$. d) False: $C(7)=50+20\cdot2=90$.

::sa VD
The equation $x^3+x-1=0$ has a root in the interval $(0, 1)$. Find this root (give your answer to 2 decimal places).
::key 0.68
For $f(x)=x^3+x-1$ we have $f(0)=-1<0$ and $f(1)=1>0$, so there is a root in $(0, 1)$. Narrowing down the interval with a calculator, we get the approximate root $0.682\ldots\approx0.68$.

::sa TH
For the tiered electricity tariff in this lesson, the bill (in thousand dong) for $x>100$ kWh is $T(x)=3x-75$. Work out the bill (in thousand dong) for $120$ kWh.
::key 285
$T(120)=3\cdot120-75=285$ (thousand dong).
:::
