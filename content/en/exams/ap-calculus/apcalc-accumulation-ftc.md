---
title: Riemann sums, accumulation and the fundamental theorem
description: AP Calculus Unit 6, part 1: Riemann and trapezoidal sums from tables, the definite integral as accumulation, and both parts of the fundamental theorem.
minutes: 50
---

:::goals
- Approximate a definite integral with left, right, midpoint and trapezoidal sums, including from tables with unequal intervals.
- Decide whether an approximation is an overestimate or an underestimate.
- Interpret $\displaystyle\int_a^b r(t)\,dt$ as the net change of a quantity, with units.
- Use the fundamental theorem of calculus to evaluate integrals and to differentiate accumulation functions.
- Analyze $g(x)=\displaystyle\int_a^x f(t)\,dt$ from the graph of $f$.
:::

Unit 6 turns the questions of the derivative around: instead of "how fast is it changing?", it asks "how much has accumulated?". On the AP exam this idea is everywhere. Almost every free-response section opens with a rate given in a table or by a formula, and asks for a Riemann sum, a total change or an amount at a later time. This lesson covers the core of the unit; the next one, on integration techniques, covers substitution and the other antidifferentiation methods.

## Riemann sums from a table

To approximate $\displaystyle\int_a^b f(x)\,dx$, split $[a,b]$ into subintervals and add up (width) × (height). The height comes from the left endpoint, the right endpoint or the midpoint; the **trapezoidal sum** averages the left and right heights. The subintervals do not need to be equal: AP tables often use uneven times.

:::example Water flowing into a tank
Water flows into a tank at a rate of $R(t)$ liters per minute. Selected values are shown.

| $t$ (minutes) | $0$ | $2$ | $5$ | $7$ | $10$ |
|---|---|---|---|---|---|
| $R(t)$ (liters per minute) | $4$ | $7$ | $9$ | $6$ | $5$ |

Use a trapezoidal sum with the four subintervals in the table to approximate $\displaystyle\int_0^{10}R(t)\,dt$, and explain its meaning.

**Solution.** The widths are $2$, $3$, $2$, $3$.
$$2\cdot\frac{4+7}{2}+3\cdot\frac{7+9}{2}+2\cdot\frac{9+6}{2}+3\cdot\frac{6+5}{2}=11+24+15+16.5=66.5.$$
About $66.5$ liters of water flow into the tank during the first $10$ minutes. For comparison, the left sum is $65$ and the right sum is $68$.
:::

:::example Over or under?
A function $f$ is increasing on $[0,4]$. Let $L$ and $R$ be the left and right Riemann sums with four equal subintervals. Which statement must be true?
A. $L<\displaystyle\int_0^4 f(x)\,dx<R$
B. $R<\displaystyle\int_0^4 f(x)\,dx<L$
C. Both sums overestimate the integral.
D. Both sums underestimate the integral.

**Solution.** On each subinterval of an increasing function, the left height is the smallest value and the right height is the largest: answer **A**. For trapezoids, concavity decides: if $f$ is concave up, each chord lies above the graph and the trapezoidal sum overestimates; concave down, it underestimates.
:::

## The fundamental theorem of calculus

:::theorem Fundamental theorem of calculus
**Part 1.** If $f$ is continuous, then $\dfrac{d}{dx}\displaystyle\int_a^x f(t)\,dt=f(x)$. With the chain rule: $\dfrac{d}{dx}\displaystyle\int_a^{u(x)}f(t)\,dt=f\big(u(x)\big)\cdot u'(x)$.

**Part 2.** If $F'=f$ and $f$ is continuous on $[a,b]$, then $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.
:::

:::note Antiderivatives to know by heart
$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\quad\int\frac1x\,dx=\ln|x|+C,$$
$$\int e^x\,dx=e^x+C,\quad\int\cos x\,dx=\sin x+C,\quad\int\sin x\,dx=-\cos x+C,$$
$$\int\sec^2x\,dx=\tan x+C,\quad\int\frac{dx}{1+x^2}=\arctan x+C.$$
:::

:::example Evaluating with Part 2
What is $\displaystyle\int_1^3\left(3x^2-2x\right)dx$?
A. $16$
B. $20$
C. $18$
D. $26$

**Solution.** An antiderivative is $x^3-x^2$. So the integral is $(27-9)-(1-1)=18$: answer **C**.
:::

:::example Differentiating with Part 1
Let $g(x)=\displaystyle\int_0^{x^2}\sin t\,dt$. Find $g'(x)$.

**Solution.** The upper limit is $u=x^2$, so $g'(x)=\sin\left(x^2\right)\cdot2x=2x\sin\left(x^2\right)$. There is no need to evaluate the integral first.
:::

## Accumulation functions from a graph

:::graph The graph of $f$ on $[0,6]$, made of three line segments
alt: A horizontal segment at height 2 from x = 0 to 2, then a segment falling to -2 at x = 4, crossing the x-axis at 3, then a segment rising back to 0 at x = 6
x: -0.5..6.5
y: -2.5..2.5
plot: 2 ; 0..2
plot: 6 - 2x ; 2..4
plot: x - 6 ; 4..6
fill: 2 ; 0 ; 0..2
fill: 6 - 2x ; 0 ; 2..4
fill: x - 6 ; 0 ; 4..6
point: (3, 0) "3" above-right
:::

:::example Reading areas as values of g
The graph of $f$ is shown above. Let $g(x)=\displaystyle\int_0^x f(t)\,dt$.

a) Find $g(2)$, $g(3)$, $g(4)$ and $g(6)$.
b) At which $x$ in $[0,6]$ does $g$ have its absolute maximum? Justify.

**Solution.** a) Areas above the axis count positive, below negative. $g(2)=4$ (rectangle). $g(3)=4+1=5$ (triangle of area $1$). $g(4)=5-1=4$. $g(6)=4-2=2$.

b) $g'(x)=f(x)$, which changes from positive to negative only at $x=3$. Candidates: $g(0)=0$, $g(3)=5$, $g(6)=2$. The absolute maximum is $5$, at $x=3$.
:::

## Net change and total distance

If $r$ is the rate of change of a quantity $Q$, then $\displaystyle\int_a^b r(t)\,dt=Q(b)-Q(a)$, the **net change**, and $Q(b)=Q(a)+\displaystyle\int_a^b r(t)\,dt$. For a particle with velocity $v$: $\displaystyle\int_a^b v(t)\,dt$ is the displacement and $\displaystyle\int_a^b|v(t)|\,dt$ is the total distance.

:::example Displacement versus distance
A particle has velocity $v(t)=t-2$ meters per second for $0\le t\le5$. Find its displacement and the total distance traveled.

**Solution.** Displacement: $\displaystyle\int_0^5(t-2)\,dt=\left[\frac{t^2}{2}-2t\right]_0^5=12.5-10=2.5$ meters.

Distance: $v<0$ on $(0,2)$ and $v>0$ on $(2,5)$, so the distance is $\left|\displaystyle\int_0^2(t-2)\,dt\right|+\displaystyle\int_2^5(t-2)\,dt=2+4.5=6.5$ meters.
:::

:::warning Common traps
- **Equal widths assumed.** In a table with $t=0, 2, 5, 7, 10$, the widths are $2, 3, 2, 3$.
- **Forgetting the starting amount.** "How much water is in the tank at $t=10$?" means initial amount plus the integral.
- **Areas below the axis.** They count negative in $\displaystyle\int f$, but positive in total distance.
- **FTC Part 1 without the chain rule.** $\dfrac{d}{dx}\displaystyle\int_0^{x^2}f(t)\,dt=f\left(x^2\right)\cdot2x$, not $f\left(x^2\right)$.
- **Units.** If $R$ is in liters per minute and $t$ in minutes, $\displaystyle\int R\,dt$ is in liters.
:::

:::tip On the calculator section
When a rate is given by a formula on a calculator part, write the integral with its limits first, for example $\displaystyle\int_0^{10}R(t)\,dt$, then the value correct to three decimal places. The written setup earns a point on its own.
:::

:::terms
- Riemann sum | tổng Riemann
- left / right / midpoint sum | tổng trái / phải / điểm giữa
- trapezoidal sum | tổng hình thang
- definite integral | tích phân xác định
- accumulation function | hàm tích luỹ
- fundamental theorem of calculus | định lí cơ bản của giải tích
- net change | biến thiên toàn phần (lượng thay đổi ròng)
- antiderivative | nguyên hàm
:::

## Similar exercises

:::exercise Free response
For $f(x)=x^2$ on $[0,3]$, compute the left and right Riemann sums with three equal subintervals, and compare them with the exact value of $\displaystyle\int_0^3x^2\,dx$.

::hint
**What you need:** width $1$; heights at $0, 1, 2$ (left) or $1, 2, 3$ (right).

**Steps:**
1. Left: $0+1+4$. Right: $1+4+9$.
2. Exact: $\left[\dfrac{x^3}{3}\right]_0^3$.

::solution
Left sum $5$, right sum $14$, exact value $9$. As expected for an increasing function, $5<9<14$.
:::

:::exercise Multiple choice
What is $\displaystyle\int_0^{\pi}\sin x\,dx$?
A. $0$
B. $-2$
C. $1$
D. $2$

::hint
**What you need:** an antiderivative of $\sin x$ is $-\cos x$.

**Steps:**
1. $-\cos\pi-(-\cos0)$.

::solution
$-(-1)+1=2$: answer **D**.
:::

:::exercise Free response
Let $F(x)=\displaystyle\int_1^x\left(t^3+1\right)dt$. Find $F'(2)$ and $F(1)$.

::hint
**What you need:** FTC Part 1, and an integral from $1$ to $1$.

::solution
$F'(x)=x^3+1$, so $F'(2)=9$. $F(1)=0$ because the interval has zero width.
:::

:::exercise Multiple choice
If $\displaystyle\int_0^5f(x)\,dx=7$ and $\displaystyle\int_0^2f(x)\,dx=3$, then $\displaystyle\int_2^5\big(2f(x)+1\big)\,dx$ equals
A. $8$
B. $11$
C. $9$
D. $14$

::hint
**What you need:** additivity over intervals and linearity.

**Steps:**
1. $\displaystyle\int_2^5f=7-3=4$.
2. $\displaystyle\int_2^51\,dx=3$.

::solution
$2(4)+3=11$: answer **B**. Option A forgets the $+1$ term.
:::

:::exercise Free response
Approximate $\displaystyle\int_0^4x^2\,dx$ with a midpoint sum using two equal subintervals. Is the estimate too large or too small?

::hint
**What you need:** midpoints $1$ and $3$, width $2$.

**Steps:**
1. $2\left(1^2+3^2\right)$.
2. Exact value: $\dfrac{64}{3}$.

::solution
The midpoint sum is $2(1+9)=20$, and the exact value is $\dfrac{64}{3}\approx21.33$, so it is too small. For a concave-up function, the midpoint sum always underestimates.
:::

## Application exercises

:::exercise A tank that fills and drains
A tank holds $50$ liters at $t=0$. Water flows in at $E(t)=4t$ liters per minute and drains out at a constant $10$ liters per minute, for $0\le t\le8$.
a) How much water is in the tank at $t=8$?
b) At what time is the amount of water smallest, and what is that amount? Justify.

::hint
**What you need:** amount $=50+\displaystyle\int_0^t(4s-10)\,ds$; the minimum is where the net rate changes from negative to positive.

**Steps:**
1. $\displaystyle\int_0^8(4t-10)\,dt=\left[2t^2-10t\right]_0^8$.
2. $4t-10=0$ at $t=2.5$.

::solution
a) $50+(128-80)=98$ liters.

b) The net rate $4t-10$ changes from negative to positive at $t=2.5$. Candidates: $50$ at $t=0$, $50+(12.5-25)=37.5$ at $t=2.5$, and $98$ at $t=8$. The smallest amount is $37.5$ liters, at $t=2.5$ minutes.
:::

:::exercise Position from velocity
A particle has velocity $v(t)=3t^2-12t$ meters per second for $0\le t\le5$, and $x(0)=4$.
a) Find $x(5)$.
b) Find the total distance traveled.

::hint
**What you need:** $x(5)=x(0)+\displaystyle\int_0^5v(t)\,dt$; $v<0$ on $(0,4)$.

**Steps:**
1. Antiderivative: $t^3-6t^2$.
2. Split the distance at $t=4$.

::solution
a) $\displaystyle\int_0^5v\,dt=125-150=-25$, so $x(5)=4-25=-21$.

b) $\displaystyle\int_0^4v\,dt=64-96=-32$ and $\displaystyle\int_4^5v\,dt=-25-(-32)=7$. Distance $=32+7=39$ meters.
:::

:::exercise Two variable limits
Let $F(x)=\displaystyle\int_x^{2x}t^2\,dt$. Find $F'(x)$ in two ways: with the fundamental theorem, and by evaluating the integral first.

::hint
**What you need:** $\displaystyle\int_x^{2x}=\int_0^{2x}-\int_0^x$.

**Steps:**
1. FTC: $(2x)^2\cdot2-x^2$.
2. Directly: $F(x)=\dfrac{(2x)^3-x^3}{3}$.

::solution
FTC: $F'(x)=8x^2-x^2=7x^2$. Directly: $F(x)=\dfrac{7x^3}{3}$, so $F'(x)=7x^2$. Both agree.
:::

:::exercise Challenge
A car's velocity, in meters per second, is recorded every $10$ seconds.

| $t$ (seconds) | $0$ | $10$ | $20$ | $30$ | $40$ |
|---|---|---|---|---|---|
| $v(t)$ (meters per second) | $0$ | $8$ | $14$ | $18$ | $20$ |

Use a trapezoidal sum to estimate the distance traveled in $40$ seconds. If the graph of $v$ is concave down, is the estimate too large or too small?

::hint
**What you need:** four trapezoids of width $10$; how chords sit relative to a concave-down graph.

::solution
$10\cdot\dfrac{0+8}{2}+10\cdot\dfrac{8+14}{2}+10\cdot\dfrac{14+18}{2}+10\cdot\dfrac{18+20}{2}=40+110+160+190=500$ meters. For a concave-down graph, each chord lies below the graph, so $500$ meters is an underestimate.
:::

:::quiz
::mc
What is $\displaystyle\int_1^4\frac{1}{\sqrt x}\,dx$?
A. $1$
B. $2$
C. $4$
D. $\dfrac32$
::key B
An antiderivative is $2\sqrt x$: $2(2)-2(1)=2$.

::mc
What is $\dfrac{d}{dx}\displaystyle\int_0^{3x}e^{t^2}\,dt$?
A. $e^{9x^2}$
B. $3e^{3x^2}$
C. $3e^{9x^2}$
D. $6xe^{9x^2}$
::key C
FTC Part 1 with the chain rule: $e^{(3x)^2}\cdot3$.

::mc
If $f$ is decreasing on $[a,b]$, a right Riemann sum for $\displaystyle\int_a^bf(x)\,dx$
A. equals the integral
B. overestimates the integral
C. may be either too large or too small
D. underestimates the integral
::key D
For a decreasing function, the right endpoint gives the smallest height on each subinterval.

::mc
What is $\displaystyle\int_{-2}^{2}\left(x^3+1\right)dx$?
A. $4$
B. $0$
C. $8$
D. $2$
::key A
$x^3$ is odd, so its integral over $[-2,2]$ is $0$; the integral of $1$ is $4$.

::tf
Let $g(x)=\displaystyle\int_1^x(t-2)\,dt$.
a) $g(1)=0$.
b) $g'(3)=1$.
c) $g$ has a relative minimum at $x=2$.
d) $g(3)=2$.
::key T T T F
a) True: zero width. b) True: $g'(x)=x-2$. c) True: $g'$ changes from negative to positive at $x=2$. d) False: $g(3)=\left[\dfrac{t^2}{2}-2t\right]_1^3=-1.5-(-1.5)=0$.

::sa
Evaluate $\displaystyle\int_0^2\left(3x^2+1\right)dx$.
::key 10
$\left[x^3+x\right]_0^2=8+2=10$.

::sa
A function has $f(0)=1$, $f(1)=3$ and $f(2)=7$. Find the trapezoidal sum for $\displaystyle\int_0^2f(x)\,dx$ with two subintervals.
::key 7
$1\cdot\dfrac{1+3}{2}+1\cdot\dfrac{3+7}{2}=2+5=7$.
:::
