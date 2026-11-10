---
title: "Revision: antiderivatives and integrals"
description: Revise standard antiderivatives, properties and evaluation of integrals, areas, volumes of revolution and real-life applications, in graduation exam style.
minutes: 40
---

:::goals
- Find antiderivatives using the table of standard results and the properties, including an antiderivative satisfying a given condition.
- Evaluate definite integrals with the Newton–Leibniz formula and use the properties of integrals.
- Find the area of a plane region and the volume of a solid of revolution about the $x$-axis.
- Use integrals in real-life problems: distance from velocity, total change from a rate of change.
:::

Antiderivatives and integrals usually take two or three questions in Part I (standard results, properties), possibly a true/false question in Part II and an area or real-life question in Part III, altogether usually about $1$ to $2$ marks. A scientific calculator can evaluate definite integrals, so this is the easiest part of the paper to check.

The details are in the lessons on [antiderivatives](lesson:antiderivatives), [definite integrals](lesson:definite-integrals) and [applications of integrals](lesson:integral-applications).

## Antiderivatives

:::note Standard antiderivatives ($C$ is a constant)
| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
|---|---|
| $x^\alpha$ ($\alpha\ne-1$) | $\dfrac{x^{\alpha+1}}{\alpha+1}+C$ |
| $\dfrac1x$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ ($0<a\ne1$) | $\dfrac{a^x}{\ln a}+C$ |
| $\cos x$ | $\sin x+C$ |
| $\sin x$ | $-\cos x+C$ |
| $\dfrac{1}{\cos^2x}$ | $\tan x+C$ |
| $\dfrac{1}{\sin^2x}$ | $-\cot x+C$ |

Properties: $\displaystyle\int\left[f(x)\pm g(x)\right]dx=\int f(x)\,dx\pm\int g(x)\,dx$ and $\displaystyle\int kf(x)\,dx=k\int f(x)\,dx$ ($k\ne0$).
:::

The quickest check: differentiate your result; you must get $f(x)$ back.

:::example Multiple choice: an antiderivative with a condition
$F(x)$ is an antiderivative of $f(x)=3x^2+2\sin x$ with $F(0)=1$. Then $F(x)$ is
A. $x^3-2\cos x+3$.
B. $x^3+2\cos x-1$.
C. $x^3-2\cos x+1$.
D. $6x+2\cos x+3$.

**Solution.** We use the standard results, noting that $\displaystyle\int\sin x\,dx=-\cos x+C$:

$$F(x)=x^3-2\cos x+C,\qquad F(0)=0-2\cos0+C=-2+C=1\iff C=3.$$

So $F(x)=x^3-2\cos x+3$: the answer is **A**. Option B has the wrong sign for the antiderivative of $\sin x$; C forgets that $\cos0=1$; D differentiates instead of integrating.
:::

## Definite integrals

:::theorem The Newton–Leibniz formula and properties
If $F$ is an antiderivative of a function $f$ continuous on $[a, b]$, then $\displaystyle\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$. For continuous $f$, $g$ and $c\in[a, b]$:
- $\displaystyle\int_a^b\left[f(x)\pm g(x)\right]dx=\int_a^b f(x)\,dx\pm\int_a^b g(x)\,dx$, $\displaystyle\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx$;
- $\displaystyle\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$;
- $\displaystyle\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx$.
:::

:::example True/false: using the properties of integrals
The function $f$ is continuous on $\mathbb{R}$, with $\displaystyle\int_0^3 f(x)\,dx=5$ and $\displaystyle\int_0^1 f(x)\,dx=2$.
a) $\displaystyle\int_1^3 f(x)\,dx=3$.
b) $\displaystyle\int_0^3\left[2f(x)-1\right]dx=7$.
c) $\displaystyle\int_3^1 f(x)\,dx=3$.
d) $\displaystyle\int_0^1\left[f(x)+x\right]dx=2.5$.

**Solution.** a) **True**: split $[0, 3]$ at $1$: $\displaystyle\int_1^3 f=5-2=3$.

b) **True**: $2\cdot5-\displaystyle\int_0^3 1\,dx=10-3=7$.

c) **False**: swapping the limits changes the sign, so $\displaystyle\int_3^1 f=-3$.

d) **True**: $2+\displaystyle\int_0^1 x\,dx=2+\dfrac12=2.5$.

Key: T T F T.
:::

:::example Short answer: evaluating an integral
Evaluate $\displaystyle\int_1^e\left(2x+\frac1x\right)dx$. Give your answer to 2 decimal places.

**Solution.** An antiderivative of $2x+\dfrac1x$ on $(0, +\infty)$ is $x^2+\ln x$:

$$\int_1^e\left(2x+\frac1x\right)dx=\Big[x^2+\ln x\Big]_1^e=(e^2+1)-(1+0)=e^2\approx7.389.$$

To 2 decimal places, the answer is $7.39$.
:::

## Area and volume

:::theorem Formulae
- The area of the region bounded by $y=f(x)$, $y=g(x)$, $x=a$, $x=b$ is $S=\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$. With $g(x)=0$ this is the area between the graph and the $x$-axis.
- The volume of the solid formed by rotating the region bounded by $y=f(x)$, the $x$-axis, $x=a$, $x=b$ about the $x$-axis is $V=\pi\displaystyle\int_a^b f^2(x)\,dx$.
:::

To remove the modulus, find the roots of $f(x)-g(x)=0$ in $[a, b]$, split the interval at those roots, and on each piece take "upper curve minus lower curve".

:::graph The region between $y=2x$ and $y=x^2$
alt: The parabola y equals x squared and the line y equals 2x meet at the origin and at the point (2, 4); the region between them from x equal 0 to x equal 2 is shaded, with the line on top
x: -1..3
y: -1..5
plot: x^2 ; -1..2.3
plot: 2x ; -0.5..2.5
fill: 2x ; x^2 ; 0..2
point: (0, 0) "O" below-right
point: (2, 4) "(2, 4)" right
:::

:::example Multiple choice: the area between two curves
The area of the region bounded by the parabola $y=x^2$ and the line $y=2x$ is
A. $\dfrac43$.
B. $-\dfrac43$.
C. $\dfrac83$.
D. $4$.

**Solution.** The $x$-coordinates of the intersection points satisfy $x^2=2x$, so $x=0$ or $x=2$. On $[0, 2]$ the line is on top ($2x\ge x^2$):

$$S=\int_0^2(2x-x^2)\,dx=\Big[x^2-\frac{x^3}{3}\Big]_0^2=4-\frac83=\frac43.$$

The answer is **A**. Option B takes "lower minus upper" and forgets that an area cannot be negative; C is $\displaystyle\int_0^2x^2\,dx$; D is $\displaystyle\int_0^2 2x\,dx$.
:::

:::example Short answer: a volume of revolution
Find the volume of the solid formed when the region bounded by $y=\sqrt x$, the $x$-axis and the line $x=4$ is rotated about the $x$-axis. Give your answer to 1 decimal place.

**Solution.** The graph of $y=\sqrt x$ meets the $x$-axis at $x=0$, so we integrate from $0$ to $4$ with $f^2(x)=x$:

$$V=\pi\int_0^4 x\,dx=\pi\Big[\frac{x^2}{2}\Big]_0^4=8\pi\approx25.13.$$

To 1 decimal place, the answer is $25.1$.
:::

## Real-life applications

:::note Remember
- If the velocity $v(t)\ge0$ on $[a, b]$, the distance travelled is $s=\displaystyle\int_a^b v(t)\,dt$.
- If $Q'(t)$ is the rate of change of $Q$, the change from $t=a$ to $t=b$ is $Q(b)-Q(a)=\displaystyle\int_a^b Q'(t)\,dt$.
:::

:::example Short answer: braking distance
A driver brakes; from then on the car slows down uniformly with velocity $v(t)=20-5t$ (m/s), where $t$ is the time in seconds since braking. How many metres does the car travel from the moment of braking until it stops?

**Solution.** The car stops when $v(t)=0$, that is at $t=4$. On $[0, 4]$, $v(t)\ge0$, so:

$$s=\int_0^4(20-5t)\,dt=\Big[20t-\frac{5t^2}{2}\Big]_0^4=80-40=40.$$

So the car travels a further $40$ m.
:::

:::warning Common mistakes
- **Wrong signs with $\sin$ and $\cos$.** $\displaystyle\int\sin x\,dx=-\cos x+C$, while $\displaystyle\int\cos x\,dx=\sin x+C$.
- **Using the power rule for $\dfrac1x$ or $e^x$.** $\dfrac1x=x^{-1}$ is the case $\alpha=-1$, and its antiderivative is $\ln\lvert x\rvert$.
- **Dropping the modulus when finding an area.** Wrong: the area between $y=x^3-x$ and the $x$-axis on $[0, 2]$ is $\displaystyle\int_0^2(x^3-x)\,dx=2$. Right: split at $x=1$ to get $\dfrac14+\dfrac94=\dfrac52$.
- **Forgetting to square, or forgetting $\pi$, in the volume formula.** $V=\pi\displaystyle\int_a^b f^2(x)\,dx$.
- **Forgetting that the integral of a product is not the product of the integrals.**
:::

## Key terms

:::terms
- antiderivative (indefinite integral) | nguyên hàm
- family of antiderivatives | họ nguyên hàm
- definite integral | tích phân
- upper / lower limit | cận trên / cận dưới
- fundamental theorem of calculus (Newton–Leibniz formula) | công thức Newton – Leibniz
- plane region | hình phẳng
- solid of revolution | khối tròn xoay
- distance / velocity | quãng đường / vận tốc
:::

## Exercises

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise Multiple choice
$\displaystyle\int\left(4x^3-\frac{1}{x^2}\right)dx$ equals
A. $x^4+\dfrac1x+C$.
B. $x^4-\dfrac1x+C$.
C. $12x^2+\dfrac{2}{x^3}+C$.
D. $x^4+\dfrac{1}{3x^3}+C$.

::hint
**What you need:** $\dfrac{1}{x^2}=x^{-2}$ and $\displaystyle\int x^{\alpha}\,dx=\dfrac{x^{\alpha+1}}{\alpha+1}+C$.

**Steps:**
1. $\displaystyle\int x^{-2}\,dx=\dfrac{x^{-1}}{-1}=-\dfrac1x$.
2. Watch the minus sign in front.

::solution
$\displaystyle\int4x^3\,dx=x^4$ and $-\displaystyle\int x^{-2}\,dx=-\left(-\dfrac1x\right)=\dfrac1x$. Option B has the wrong sign; C is the derivative; D lowers the power instead of raising it.

**Answer.** A.
:::

:::exercise Multiple choice
$\displaystyle\int_0^{\frac{\pi}{2}}\cos x\,dx$ equals
A. $1$.
B. $0$.
C. $-1$.
D. $\dfrac{\pi}{2}$.

::hint
**What you need:** an antiderivative of $\cos x$ is $\sin x$.

**Steps:**
1. Work out $\sin\dfrac{\pi}{2}-\sin0$.

::solution
$\Big[\sin x\Big]_0^{\frac{\pi}{2}}=1-0=1$. Option C uses the wrong antiderivative $-\sin x$.

**Answer.** A.
:::

:::exercise Short answer
Evaluate $\displaystyle\int_0^2\left(3x^2-2x+1\right)dx$.

::hint
**What you need:** the Newton–Leibniz formula.

**Steps:**
1. An antiderivative is $x^3-x^2+x$.
2. Substitute the limits $2$ and $0$.

::solution
$\Big[x^3-x^2+x\Big]_0^2=8-4+2=6$.

**Answer.** $6$.
:::

:::exercise True/False
Let $f(x)=e^x+2x$.

a) $F(x)=e^x+x^2$ is an antiderivative of $f(x)$.

b) $\displaystyle\int_0^1 f(x)\,dx=e+1$.

c) The antiderivative $F$ of $f$ with $F(0)=3$ is $F(x)=e^x+x^2+3$.

d) $\displaystyle\int_{-1}^1 f(x)\,dx=e-\dfrac1e$.

::hint
**What you need:** check an antiderivative by differentiating; $e^0=1$.

**Steps:**
1. Write $F(x)=e^x+x^2+C$.
2. Evaluate each integral with $\Big[e^x+x^2\Big]$.

::solution
a) **True**: $(e^x+x^2)'=e^x+2x$.

b) **False**: $\Big[e^x+x^2\Big]_0^1=(e+1)-(1+0)=e$.

c) **False**: $F(0)=1+C=3$, so $C=2$ and $F(x)=e^x+x^2+2$.

d) **True**: $(e+1)-\left(\dfrac1e+1\right)=e-\dfrac1e$.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise Short answer
Find the area of the region bounded by the parabola $y=x^2-4$ and the $x$-axis. Give your answer to 1 decimal place.

::hint
**What you need:** $S=\displaystyle\int_a^b\lvert f(x)\rvert\,dx$, where $a$, $b$ are the intersections with the $x$-axis.

**Steps:**
1. Solve $x^2-4=0$.
2. On $[-2, 2]$, $x^2-4\le0$, so $\lvert x^2-4\rvert=4-x^2$.

::solution
$$S=\int_{-2}^2(4-x^2)\,dx=\Big[4x-\frac{x^3}{3}\Big]_{-2}^2=\left(8-\frac83\right)-\left(-8+\frac83\right)=\frac{32}{3}\approx10.67.$$

**Answer.** $10.7$.
:::

:::exercise Written answer
Find the area of the region bounded by the graph of $y=x^3-x$, the $x$-axis and the lines $x=0$, $x=2$.

::hint
**What you need:** split the interval at the roots of $f(x)$ to remove the modulus.

**Steps:**
1. $x^3-x=x(x-1)(x+1)$: negative on $(0, 1)$, positive on $(1, 2)$.
2. Evaluate the two integrals and add.

::solution
$$S=\int_0^1(x-x^3)\,dx+\int_1^2(x^3-x)\,dx=\left(\frac12-\frac14\right)+\left[\left(4-2\right)-\left(\frac14-\frac12\right)\right]=\frac14+\frac94=\frac52.$$

**Answer.** $S=\dfrac52$.
:::

:::exercise Multiple choice
Rotating the region bounded by $y=2x$, the $x$-axis and the line $x=3$ about the $x$-axis gives a cone of volume
A. $36\pi$.
B. $9\pi$.
C. $108\pi$.
D. $18\pi$.

::hint
**What you need:** $V=\pi\displaystyle\int_a^b f^2(x)\,dx$, here with $f^2(x)=4x^2$.

**Steps:**
1. Work out $\pi\displaystyle\int_0^3 4x^2\,dx$.
2. Check with the cone formula $\dfrac13\pi r^2h$.

::solution
$V=\pi\Big[\dfrac{4x^3}{3}\Big]_0^3=36\pi$. Check: the cone has $r=6$, $h=3$, so $V=\dfrac13\pi\cdot36\cdot3=36\pi$. Option B forgets to square; C forgets to divide by $3$; D squares only $x$.

**Answer.** A.
:::

:::exercise Short answer
Water flows into a tank at a rate of $r(t)=0.6t+2$ (litres per minute), with $t$ in minutes. How many litres flow into the tank in the first $10$ minutes?

::hint
**What you need:** the amount of water is $\displaystyle\int_0^{10} r(t)\,dt$.

**Steps:**
1. An antiderivative is $0.3t^2+2t$.
2. Substitute the limits.

::solution
$\Big[0.3t^2+2t\Big]_0^{10}=30+20=50$.

**Answer.** $50$.
:::

:::exercise True/False
A car brakes and slows down uniformly with velocity $v(t)=12-3t$ (m/s), where $t$ is the time in seconds since braking.

a) The car stops after $4$ seconds.

b) The distance travelled $t$ seconds after braking is $s(t)=12t-1.5t^2$ (m), $0\le t\le4$.

c) From braking to stopping, the car travels $24$ m.

d) In the last second before stopping, the car travels $3$ m.

::hint
**What you need:** $s(t)=\displaystyle\int_0^t v(u)\,du$; the distance from $t=a$ to $t=b$ is $s(b)-s(a)$.

**Steps:**
1. Solve $v(t)=0$.
2. Work out $s(4)$ and $s(4)-s(3)$.

::solution
a) **True**: $12-3t=0\iff t=4$.

b) **True**: $s(t)=\Big[12u-1.5u^2\Big]_0^t=12t-1.5t^2$.

c) **True**: $s(4)=48-24=24$.

d) **False**: $s(4)-s(3)=24-22.5=1.5$ m.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise Challenge
A gateway has the shape of a parabola: it is $8$ m wide at ground level and its top is $4$ m above the ground. The whole gateway is filled with glass. Find the area of glass, in m², to 1 decimal place.

::hint
**What you need:** put the origin at the middle of the base with the $y$-axis through the top; the area is $\displaystyle\int_{-4}^4 f(x)\,dx$.

**Steps:**
1. The parabola passes through $(-4, 0)$, $(4, 0)$, $(0, 4)$: $y=4-\dfrac{x^2}{4}$.
2. Evaluate the integral.

::solution
The parabola has the form $y=4-ax^2$ and passes through $(4, 0)$, so $a=\dfrac14$.
$$S=\int_{-4}^4\left(4-\frac{x^2}{4}\right)dx=\Big[4x-\frac{x^3}{12}\Big]_{-4}^4=2\left(16-\frac{16}{3}\right)=\frac{64}{3}\approx21.33.$$

**Answer.** $21.3$.
:::

## Mini test

:::quiz
::mc
The family of antiderivatives of $f(x)=2^x$ is
A. $x\cdot2^{x-1}+C$.
B. $2^x\ln2+C$.
C. $\dfrac{2^{x+1}}{x+1}+C$.
D. $\dfrac{2^x}{\ln2}+C$.
::key D
$\left(\dfrac{2^x}{\ln2}\right)'=\dfrac{2^x\ln2}{\ln2}=2^x$. Option B is the derivative of $2^x$; C and A wrongly use the rule for powers $x^\alpha$.

::mc
$\displaystyle\int_1^2\frac1x\,dx$ equals
A. $\dfrac34$.
B. $\ln2$.
C. $\ln3$.
D. $\dfrac12$.
::key B
$\Big[\ln x\Big]_1^2=\ln2-0=\ln2$. Option A uses $-\dfrac{1}{x^2}$ as the "antiderivative" (it is in fact the derivative); C adds the limits.

::mc
The functions $f$, $g$ are continuous on $[a, b]$. The area of the region bounded by $y=f(x)$, $y=g(x)$, $x=a$, $x=b$ is
A. $\pi\displaystyle\int_a^b\left[f(x)-g(x)\right]^2dx$.
B. $\displaystyle\int_a^b\left[f(x)-g(x)\right]dx$.
C. $\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$.
D. $\left\lvert\displaystyle\int_a^b\left[f(x)-g(x)\right]dx\right\rvert$.
::key C
An area needs the modulus inside the integral. B can be negative; D is wrong when $f-g$ changes sign on $[a, b]$; A looks like a volume formula.

::mc
Given $\displaystyle\int_0^2 f(x)\,dx=3$, the value of $\displaystyle\int_0^2\left[2f(x)+x\right]dx$ is
A. $8$.
B. $7$.
C. $6$.
D. $10$.
::key A
$2\cdot3+\Big[\dfrac{x^2}{2}\Big]_0^2=6+2=8$. Option B takes $\displaystyle\int_0^2x\,dx=1$; C leaves out the term $x$.

::tf
The region $H$ is bounded by $y=x^2$, the $x$-axis and the lines $x=0$, $x=3$.
a) The area of $H$ is $S=\displaystyle\int_0^3x^2\,dx$.
b) $S=9$.
c) The volume of the solid formed by rotating $H$ about the $x$-axis is $V=\pi\displaystyle\int_0^3x^2\,dx$.
d) $V=\dfrac{243\pi}{5}$.
::key T T F T
a) True: $x^2\ge0$. b) True: $\dfrac{27}{3}=9$. c) False: the function must be squared, $V=\pi\displaystyle\int_0^3x^4\,dx$. d) True: $\pi\Big[\dfrac{x^5}{5}\Big]_0^3=\dfrac{243\pi}{5}$.

::sa
An object moves with velocity $v(t)=3t^2+2t$ (m/s). Find the distance it travels from $t=0$ to $t=4$ seconds, in metres.
::key 80
$v(t)\ge0$ on $[0, 4]$, so $s=\Big[t^3+t^2\Big]_0^4=64+16=80$.

::sa
Evaluate $\displaystyle\int_0^1\left(e^x+1\right)dx$. Give your answer to 2 decimal places.
::key 2.72
$\Big[e^x+x\Big]_0^1=(e+1)-1=e\approx2.718$, which rounds to $2.72$.
:::
