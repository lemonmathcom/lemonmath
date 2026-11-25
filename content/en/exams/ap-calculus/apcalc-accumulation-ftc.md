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

A tank is filling and you know only how fast the water flows at each moment. How much water is in it at the end? That question is the derivative turned round, and it is what Unit 6 is about: instead of "how fast is it changing?", it asks "how much has accumulated?". On the AP exam this idea is everywhere. Almost every free-response section opens with a rate given in a table or by a formula, and asks for a Riemann sum, a total change or an amount at a later time. This lesson covers the core of the unit; the next one, on integration techniques, covers substitution and the other antidifferentiation methods.

## Riemann sums from a table

How do we find the water that has flowed in when we only have a few measurements? We cut the time into short intervals, treat the rate as nearly constant on each, and add up. That is a Riemann sum. To approximate $\displaystyle\int_a^b f(x)\,dx$, split $[a,b]$ into subintervals and add up (width) × (height). The height comes from the left endpoint, the right endpoint or the midpoint; the **trapezoidal sum** averages the left and right heights. The subintervals do not need to be equal, and this is where many students slip: AP tables often use uneven times.

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

This is the heart of the unit: the integral of a rate tells us how much a quantity has changed. If $r$ is the rate of change of a quantity $Q$, then $\displaystyle\int_a^b r(t)\,dt=Q(b)-Q(a)$, the **net change**, and so $Q(b)=Q(a)+\displaystyle\int_a^b r(t)\,dt$: the amount at the end is the amount at the start plus what was added. For a particle with velocity $v$ we must tell two things apart: $\displaystyle\int_a^b v(t)\,dt$ is the displacement and $\displaystyle\int_a^b|v(t)|\,dt$ is the total distance. Why do they differ? When the particle moves backwards, negative velocity reduces the displacement, but the distance still grows.

:::example Displacement versus distance
A particle has velocity $v(t)=t-2$ meters per second for $0\le t\le5$. Find its displacement and the total distance traveled.

**Solution.** Displacement: $\displaystyle\int_0^5(t-2)\,dt=\left[\frac{t^2}{2}-2t\right]_0^5=12.5-10=2.5$ meters.

Distance: $v<0$ on $(0,2)$ and $v>0$ on $(2,5)$, so the distance is $\left|\displaystyle\int_0^2(t-2)\,dt\right|+\displaystyle\int_2^5(t-2)\,dt=2+4.5=6.5$ meters.
:::

:::warning Common traps
- **Equal widths assumed.** In a table with $t=0, 2, 5, 7, 10$, the widths are $2, 3, 2, 3$, so subtract each pair of neighbouring times rather than share the total evenly.
- **Forgetting the starting amount.** "How much water is in the tank at $t=10$?" means initial amount plus the integral, because the tank may already have held some water.
- **Areas below the axis.** They count negative in $\displaystyle\int f$, but positive in total distance.
- **FTC Part 1 without the chain rule.** $\dfrac{d}{dx}\displaystyle\int_0^{x^2}f(t)\,dt=f\left(x^2\right)\cdot2x$, not $f\left(x^2\right)$. The upper limit is an expression, not the variable itself, so we must multiply by its derivative.
- **Units.** If $R$ is in liters per minute and $t$ in minutes, $\displaystyle\int R\,dt$ is in liters.
:::

:::tip On the calculator section
When a rate is given by a formula on a calculator part, write the integral with its limits first, for example $\displaystyle\int_0^{10}R(t)\,dt$, then the value correct to three decimal places. The written setup earns a point on its own. Back to the opening question: how much has accumulated? The answer is always the integral of the rate, with the right units. Practise below until writing the limits and units comes without thinking.
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
Divide $[0, 3]$ into three equal subintervals, each of width $\Delta x=\dfrac{3-0}{3}=1$, namely $[0, 1]$, $[1, 2]$, $[2, 3]$.

The left Riemann sum uses the values of $f$ at the left endpoints $x=0$, $1$, $2$ of the subintervals:
$$L_3=1\cdot\left[f(0)+f(1)+f(2)\right]=0+1+4=5.$$

The right Riemann sum uses the values of $f$ at the right endpoints $x=1$, $2$, $3$:
$$R_3=1\cdot\left[f(1)+f(2)+f(3)\right]=1+4+9=14.$$

The exact value of the integral is
$$\int_0^3x^2\,dx=\left.\frac{x^3}{3}\right|_0^3=\frac{27}{3}-0=9.$$

The function $f(x)=x^2$ is increasing on $[0, 3]$, so on each subinterval the value at the left endpoint is the smallest and the value at the right endpoint is the largest. Hence the left sum is smaller than the exact value and the right sum is larger, and indeed $5<9<14$.

So the left Riemann sum is $5$, the right Riemann sum is $14$ and the exact value is $9$; the result $5<9<14$ is what we expect for an increasing function.

**Answer.** Left sum $5$; right sum $14$; exact value $9$.
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
An antiderivative of $\sin x$ is $-\cos x$. By the Fundamental Theorem of Calculus, we have
$$\int_0^{\pi}\sin x\,dx=\Big[-\cos x\Big]_0^{\pi}=-\cos\pi-(-\cos0)=-(-1)+1=2.$$

So the answer is **D**.

**Answer.** D.
:::

:::exercise Free response
Let $F(x)=\displaystyle\int_1^x\left(t^3+1\right)dt$. Find $F'(2)$ and $F(1)$.

::hint
**What you need:** FTC Part 1, and an integral from $1$ to $1$.

::solution
The function $t^3+1$ is continuous on $\mathbb{R}$, so by the Fundamental Theorem of Calculus, $F(x)=\displaystyle\int_1^x\left(t^3+1\right)dt$ has derivative
$$F'(x)=x^3+1.$$

Substituting $x=2$, we get $F'(2)=2^3+1=9$.

For $x=1$, the two limits of the integral coincide, so the interval of integration has zero width:
$$F(1)=\int_1^1\left(t^3+1\right)dt=0.$$

So $F'(2)=9$ and $F(1)=0$.

**Answer.** $F'(2)=9$; $F(1)=0$.
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
By the additivity of the integral, $\displaystyle\int_0^5f(x)\,dx=\int_0^2f(x)\,dx+\int_2^5f(x)\,dx$. Hence
$$\int_2^5f(x)\,dx=7-3=4.$$

By the linearity of the integral, we have
$$\int_2^5\big(2f(x)+1\big)\,dx=2\int_2^5f(x)\,dx+\int_2^5 1\,dx=2\cdot4+(5-2)=8+3=11.$$

So the answer is **B**.

*Remark.* Option A forgets the $+1$ term (this term contributes $\displaystyle\int_2^51\,dx=3$ to the result).

**Answer.** B.
:::

:::exercise Free response
Approximate $\displaystyle\int_0^4x^2\,dx$ with a midpoint sum using two equal subintervals. Is the estimate too large or too small?

::hint
**What you need:** midpoints $1$ and $3$, width $2$.

**Steps:**
1. $2\left(1^2+3^2\right)$.
2. Exact value: $\dfrac{64}{3}$.

::solution
Divide $[0, 4]$ into two equal subintervals $[0, 2]$ and $[2, 4]$, each of width $\Delta x=2$. The midpoints of the two subintervals are $x=1$ and $x=3$.

The midpoint sum is
$$M=2\left[f(1)+f(3)\right]=2\left(1^2+3^2\right)=2(1+9)=20.$$

The exact value of the integral is
$$\int_0^4x^2\,dx=\left.\frac{x^3}{3}\right|_0^4=\frac{64}{3}\approx21.33.$$

Since $20<\dfrac{64}{3}$, the estimate is too small.

Explanation: the function $f(x)=x^2$ is concave up (because $f''(x)=2>0$). On each subinterval, the tangent line at the midpoint lies below the graph, and the area of the trapezoid under that tangent line equals the area of the midpoint rectangle. So for a concave-up function, the midpoint sum always underestimates.

So the estimate is $20$, and it is smaller than the exact value $\dfrac{64}{3}$.

**Answer.** $20$; too small.
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
Let $A(t)$ (liters) be the amount of water in the tank at time $t$ (minutes), $0\le t\le8$. The net rate of change of the amount of water is
$$A'(t)=E(t)-10=4t-10\ \text{(liters per minute)},\quad A(0)=50.$$

a) We have
$$A(8)=A(0)+\int_0^8(4t-10)\,dt=50+\Big[2t^2-10t\Big]_0^8=50+(128-80)=98.$$
So at $t=8$ the tank holds $98$ liters.

b) Solving $A'(t)=0$: $4t-10=0$, so $t=2.5$ (which lies in $[0, 8]$). We have $A'(t)<0$ for $0\le t<2.5$ and $A'(t)>0$ for $2.5<t\le8$, so $A'$ changes from negative to positive at $t=2.5$.

The smallest value of $A$ on $[0, 8]$ occurs at a critical point or at an endpoint. We compare:
- $A(0)=50$;
- $A(2.5)=50+\Big[2t^2-10t\Big]_0^{2.5}=50+(12.5-25)=37.5$;
- $A(8)=98$.

Since $37.5<50<98$, the smallest amount of water is $37.5$ liters, reached at $t=2.5$ minutes.

So at $t=8$ the tank holds $98$ liters; the smallest amount of water is $37.5$ liters, at $t=2.5$ minutes.

**Answer.** a) $98$ liters; b) $37.5$ liters at $t=2.5$ minutes.
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
The position of the particle satisfies $x'(t)=v(t)$ and $x(0)=4$.

a) We have
$$x(5)=x(0)+\int_0^5v(t)\,dt=4+\int_0^5\left(3t^2-12t\right)dt=4+\Big[t^3-6t^2\Big]_0^5=4+(125-150)=4-25=-21.$$
So $x(5)=-21$ (meters).

b) The total distance traveled is $\displaystyle\int_0^5|v(t)|\,dt$. We examine the sign of $v(t)=3t(t-4)$: $v(t)=0$ when $t=0$ or $t=4$; $v(t)<0$ for $0<t<4$ and $v(t)>0$ for $4<t\le5$. Hence the particle moves in the negative direction during the first $4$ seconds and then turns around.

We compute
$$\int_0^4v\,dt=\Big[t^3-6t^2\Big]_0^4=64-96=-32,\qquad\int_4^5v\,dt=\int_0^5v\,dt-\int_0^4v\,dt=-25-(-32)=7.$$

The distance is
$$\int_0^5|v|\,dt=-\int_0^4v\,dt+\int_4^5v\,dt=32+7=39\ \text{(meters)}.$$

So $x(5)=-21$ meters and the total distance traveled by the particle is $39$ meters.

**Answer.** a) $-21$ meters; b) $39$ meters.
:::

:::exercise Two variable limits
Let $F(x)=\displaystyle\int_x^{2x}t^2\,dt$. Find $F'(x)$ in two ways: with the fundamental theorem, and by evaluating the integral first.

::hint
**What you need:** $\displaystyle\int_x^{2x}=\int_0^{2x}-\int_0^x$.

**Steps:**
1. FTC: $(2x)^2\cdot2-x^2$.
2. Directly: $F(x)=\dfrac{(2x)^3-x^3}{3}$.

::solution
Method 1: use the Fundamental Theorem of Calculus. Let $G(u)=\displaystyle\int_0^ut^2\,dt$. Since $t^2$ is continuous, $G'(u)=u^2$. We have
$$F(x)=\int_x^{2x}t^2\,dt=G(2x)-G(x).$$

Differentiating, and applying the chain rule to $G(2x)$, we get
$$F'(x)=2G'(2x)-G'(x)=2(2x)^2-x^2=8x^2-x^2=7x^2.$$

Method 2: evaluate the integral first. We have
$$F(x)=\left.\frac{t^3}{3}\right|_x^{2x}=\frac{(2x)^3}{3}-\frac{x^3}{3}=\frac{8x^3-x^3}{3}=\frac{7x^3}{3}.$$

Hence $F'(x)=\dfrac{7\cdot3x^2}{3}=7x^2$.

So both methods give the same result $F'(x)=7x^2$.

**Answer.** $F'(x)=7x^2$.
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
The values of $v(t)$ are recorded every $10$ seconds, so each trapezoid has width $\Delta t=10$. The distance traveled is $\displaystyle\int_0^{40}v(t)\,dt$. The trapezoidal sum estimates it by the sum of the areas of four trapezoids:
$$\begin{aligned}T&=10\cdot\frac{0+8}{2}+10\cdot\frac{8+14}{2}+10\cdot\frac{14+18}{2}+10\cdot\frac{18+20}{2}\\&=40+110+160+190=500.\end{aligned}$$

So the estimated distance is $500$ meters.

If the graph of $v$ is concave down, then on each subinterval the chord joining the two recorded points lies below the graph. Hence each trapezoid has area smaller than the corresponding area under the graph.

So the estimate of $500$ meters is too small.

**Answer.** $500$ meters; too small.
:::

:::quiz
::mc TH
What is $\displaystyle\int_1^4\frac{1}{\sqrt x}\,dx$?
A. $1$
B. $2$
C. $4$
D. $\dfrac32$
::key B
An antiderivative is $2\sqrt x$: $2(2)-2(1)=2$.

::mc TH
What is $\dfrac{d}{dx}\displaystyle\int_0^{3x}e^{t^2}\,dt$?
A. $e^{9x^2}$
B. $3e^{3x^2}$
C. $3e^{9x^2}$
D. $6xe^{9x^2}$
::key C
FTC Part 1 with the chain rule: $e^{(3x)^2}\cdot3$.

::mc TH
If $f$ is decreasing on $[a,b]$, a right Riemann sum for $\displaystyle\int_a^bf(x)\,dx$
A. equals the integral
B. overestimates the integral
C. may be either too large or too small
D. underestimates the integral
::key D
For a decreasing function, the right endpoint gives the smallest height on each subinterval.

::mc TH
What is $\displaystyle\int_{-2}^{2}\left(x^3+1\right)dx$?
A. $4$
B. $0$
C. $8$
D. $2$
::key A
$x^3$ is odd, so its integral over $[-2,2]$ is $0$; the integral of $1$ is $4$.

::tf NB TH TH VD
Let $g(x)=\displaystyle\int_1^x(t-2)\,dt$.
a) $g(1)=0$.
b) $g'(3)=1$.
c) $g$ has a relative minimum at $x=2$.
d) $g(3)=2$.
::key T T T F
a) True: zero width. b) True: $g'(x)=x-2$. c) True: $g'$ changes from negative to positive at $x=2$. d) False: $g(3)=\left[\dfrac{t^2}{2}-2t\right]_1^3=-1.5-(-1.5)=0$.

::sa TH
Evaluate $\displaystyle\int_0^2\left(3x^2+1\right)dx$.
::key 10
$\left[x^3+x\right]_0^2=8+2=10$.

::sa TH
A function has $f(0)=1$, $f(1)=3$ and $f(2)=7$. Find the trapezoidal sum for $\displaystyle\int_0^2f(x)\,dx$ with two subintervals.
::key 7
$1\cdot\dfrac{1+3}{2}+1\cdot\dfrac{3+7}{2}=2+5=7$.
:::
