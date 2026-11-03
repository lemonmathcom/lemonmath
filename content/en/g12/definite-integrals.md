---
title: Definite integrals
description: Understand the definite integral as the area under a graph, evaluate it with F(b) − F(a), use its properties and handle absolute values.
minutes: 22
---

:::goals
- Understand the meaning of a definite integral as the area under a graph and as a distance travelled.
- Evaluate integrals with the formula $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.
- Use the properties: constant factors, sums, swapping the limits and joining two adjacent intervals.
- Evaluate integrals with an absolute value and integrals of functions of the form $f(ax+b)$.
:::

A motorbike accelerates for $3$ seconds. Its velocity after $t$ seconds is $v(t)=t^2+2$ (m/s): $2$ m/s at the start, $3$ m/s after $1$ second, $6$ m/s after $2$ seconds and $11$ m/s after $3$ seconds. How many metres does it travel in those $3$ seconds?

A quick guess is to average the first and last velocities: $\dfrac{2+11}{2}\cdot3=19.5$ m. That only works when the velocity rises steadily, but here it rises faster and faster. Let us find the right answer.

## The area under a graph

### Explore: cutting time into small pieces

If the velocity is constant, the distance is velocity times time, which is the area of a rectangle. When the velocity changes, we cut $[0, 3]$ into small pieces and treat the velocity as almost constant on each one.

With pieces $1$ second long, taking the velocity at the start of each piece gives an underestimate, and taking it at the end gives an overestimate:

$$1\cdot(2+3+6)=11,\qquad 1\cdot(3+6+11)=20.$$

| Length of each piece | $1$ | $0.5$ | $0.1$ |
|---|---|---|---|
| Underestimate | $11$ | $12.875$ | $14.555$ |
| Overestimate | $20$ | $17.375$ | $15.455$ |

The two estimates close in on one number, $15$. This number is the **area of the region** under the graph of $v(t)$ from $t=0$ to $t=3$.

:::graph Distance as the area under $v(t)=t^2+2$
alt: The parabola v equals t squared plus 2 on the interval from 0 to 3, with the region under the graph and above the horizontal axis shaded
x: -0.5..4
y: -1..12
plot: x^2 + 2 ; -0.5..3.3
fill: x^2 + 2 ; 0 ; 0..3
vline: 3 ; dashed
point: (3, 11) "(3, 11)" left
:::

Here is the surprise: if $S(t)=\dfrac{t^3}{3}+2t$ is an antiderivative of $v(t)$, then $S(3)-S(0)=9+6-0=15$, exactly the same number. This is no coincidence.

## The definition of the integral

:::definition Definite integral
Let $f(x)$ be continuous on $[a, b]$ and let $F(x)$ be an antiderivative of $f(x)$ there. The difference $F(b)-F(a)$ is called the **definite integral** of $f(x)$ from $a$ to $b$, written
$$\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a).$$
The number $a$ is the **lower limit** and $b$ the **upper limit**. By convention $\displaystyle\int_a^a f(x)\,dx=0$ and $\displaystyle\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx$.
:::

The result does not depend on which antiderivative we choose: replacing $F$ by $F+C$ gives $(F(b)+C)-(F(a)+C)=F(b)-F(a)$. Nor does it depend on the name of the variable: $\displaystyle\int_a^b f(x)\,dx=\int_a^b f(t)\,dt$.

:::theorem Geometric meaning
If $f$ is continuous and non-negative on $[a, b]$, then $\displaystyle\int_a^b f(x)\,dx$ is the area of the region bounded by the graph $y=f(x)$, the $x$-axis and the lines $x=a$ and $x=b$.
:::

**Why is it true?** Let $S(x)$ be the area under the graph from $a$ to $x$. When $x$ grows by a small amount $h$, the area grows by a thin strip that is almost a rectangle, so $S(x+h)-S(x)\approx f(x)\cdot h$. Dividing by $h$ and letting $h\to0$ gives $S'(x)=f(x)$, so $S$ is an antiderivative of $f$ with $S(a)=0$. The area we want is therefore $S(b)=S(b)-S(a)=F(b)-F(a)$.

:::example The integral of a polynomial
Evaluate $\displaystyle\int_1^2(3x^2-2x+1)\,dx$.

**Solution.** An antiderivative is $x^3-x^2+x$. We substitute the upper limit and subtract the value at the lower limit:

$$\int_1^2(3x^2-2x+1)\,dx=\Big[x^3-x^2+x\Big]_1^2=(8-4+2)-(1-1+1)=6-1=5.$$

So the integral equals $5$.
:::

The value at the lower limit is not always $0$, especially for trigonometric functions.

:::example A trigonometric function
Evaluate $\displaystyle\int_0^{\frac{\pi}{2}}(2\cos x-\sin x)\,dx$.

**Solution.** An antiderivative of $2\cos x-\sin x$ is $2\sin x+\cos x$. At $x=0$ we have $\cos0=1$, so the value at the lower limit is not $0$:

$$\Big[2\sin x+\cos x\Big]_0^{\frac{\pi}{2}}=(2\cdot1+0)-(0+1)=1.$$

So the integral equals $1$.
:::

## Properties of the integral

:::theorem Properties
Let $f$ and $g$ be continuous on an interval containing $a$, $b$, $c$, and let $k$ be a constant. Then
- $\displaystyle\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx$;
- $\displaystyle\int_a^b\big(f(x)\pm g(x)\big)\,dx=\int_a^b f(x)\,dx\pm\int_a^b g(x)\,dx$;
- $\displaystyle\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$.
:::

The first two come from the rules for antiderivatives. The third holds because $\big(F(c)-F(a)\big)+\big(F(b)-F(c)\big)=F(b)-F(a)$; geometrically, we cut a region into two pieces.

:::example Using the properties without knowing the function
Given $\displaystyle\int_0^2 f(x)\,dx=3$, $\displaystyle\int_2^5 f(x)\,dx=-1$ and $\displaystyle\int_0^5 g(x)\,dx=4$, find $\displaystyle\int_0^5\big(2f(x)-3g(x)\big)\,dx$ and $\displaystyle\int_5^0 f(x)\,dx$.

**Solution.** We join the adjacent intervals $[0, 2]$ and $[2, 5]$:

$$\int_0^5 f(x)\,dx=3+(-1)=2.$$

We split the sum and take the constants outside:

$$\int_0^5\big(2f(x)-3g(x)\big)\,dx=2\cdot2-3\cdot4=-8.$$

Swapping the limits changes the sign: $\displaystyle\int_5^0 f(x)\,dx=-2$.
:::

With an absolute value, we find where the expression changes sign and split the interval using the third property.

:::example An integral with an absolute value
Evaluate $\displaystyle\int_0^2\lvert x^2-1\rvert\,dx$.

**Solution.** On $[0, 2]$, $x^2-1$ changes sign at $x=1$: it is negative on $[0, 1)$ and positive on $(1, 2]$. We remove the absolute value on each piece:

$$\begin{aligned}
\int_0^2\lvert x^2-1\rvert\,dx&=\int_0^1(1-x^2)\,dx+\int_1^2(x^2-1)\,dx\\
&=\Big[x-\frac{x^3}{3}\Big]_0^1+\Big[\frac{x^3}{3}-x\Big]_1^2=\frac23+\left(\frac23+\frac23\right)=2.
\end{aligned}$$

So the integral equals $2$, the total area of the two shaded parts in the figure below.
:::

:::graph The graph of $y=\lvert x^2-1\rvert$ on $[0, 2]$
alt: The graph of y equals the absolute value of x squared minus 1, touching the horizontal axis at x equals 1; the two parts under the graph from 0 to 1 and from 1 to 2 are shaded
x: -0.5..2.5
y: -0.5..3.5
plot: abs(x^2 - 1) ; -0.5..2.2
fill: abs(x^2 - 1) ; 0 ; 0..2
vline: 2 ; dashed
point: (1, 0) "1" below
:::

## Functions of the form $f(ax+b)$

If $F$ is an antiderivative of $f$, the chain rule (grade 11) gives $\big(F(ax+b)\big)'=a\,f(ax+b)$. Dividing by $a$ gives the rule:

$$\int f(ax+b)\,dx=\frac1a F(ax+b)+C\qquad(a\neq0).$$

For example, $\displaystyle\int\cos 2x\,dx=\frac12\sin2x+C$ and $\displaystyle\int e^{3x}dx=\frac13e^{3x}+C$. This is the simplest case of integration by substitution, with $u=ax+b$.

:::example The substitution $u=ax+b$
Evaluate $\displaystyle\int_0^1(2x+1)^3\,dx$.

**Solution.** With $u=2x+1$, an antiderivative of $u^3$ is $\dfrac{u^4}{4}$; the rule above adds a factor $\dfrac12$:

$$\int_0^1(2x+1)^3\,dx=\Big[\frac{(2x+1)^4}{8}\Big]_0^1=\frac{81}{8}-\frac18=10.$$

**Check.** Expanding, $(2x+1)^3=8x^3+12x^2+6x+1$, with antiderivative $2x^4+4x^3+3x^2+x$; the limits give $2+4+3+1=10$.
:::

## Back to the motorbike

:::example The motorbike's distance
The motorbike has velocity $v(t)=t^2+2$ (m/s). Find the distance it travels in the first $3$ seconds.

**Solution.** The velocity is always positive, so the distance is the integral of the velocity over $[0, 3]$:

$$\int_0^3(t^2+2)\,dt=\Big[\frac{t^3}{3}+2t\Big]_0^3=9+6=15.$$

So the motorbike travels $15$ m, not the $19.5$ m from the averaging guess.
:::

:::warning Common mistakes
- **Subtracting the wrong way round.** Wrong: $\displaystyle\int_1^2(3x^2-2x+1)\,dx=F(1)-F(2)=-5$. Why it is wrong: the definition is $F(\text{upper limit})-F(\text{lower limit})$. Right: $F(2)-F(1)=5$.
- **Taking the value at the lower limit as $0$.** Wrong: $\displaystyle\int_0^{\frac{\pi}{2}}\sin x\,dx=-\cos\frac{\pi}{2}=0$. Why it is wrong: $-\cos0=-1\neq0$. Right: $\Big[-\cos x\Big]_0^{\frac{\pi}{2}}=0-(-1)=1$.
- **Moving the absolute value outside.** Wrong: $\displaystyle\int_0^2\lvert x^2-1\rvert\,dx=\left\lvert\int_0^2(x^2-1)\,dx\right\rvert=\frac23$. Why it is wrong: the negative and positive parts cancel inside the inner integral. Right: split at $x=1$ to get $2$.
- **Forgetting the factor $\dfrac1a$.** Wrong: $\displaystyle\int_0^1(2x+1)^3dx=\Big[\frac{(2x+1)^4}{4}\Big]_0^1=20$. Why it is wrong: the derivative of $\dfrac{(2x+1)^4}{4}$ is $2(2x+1)^3$. Right: divide by $2$ as well to get $10$.
:::

## Key terms

:::terms
- definite integral | tích phân
- lower limit, upper limit | cận dưới, cận trên
- fundamental theorem of calculus | công thức Newton – Leibniz
- integrand | hàm dưới dấu tích phân
- area under the graph | diện tích dưới đồ thị
- approximating sum (Riemann sum) | tổng xấp xỉ diện tích
- substitution | đổi biến
- absolute value | giá trị tuyệt đối
:::

## Summary

- $\displaystyle\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$, where $F$ is any antiderivative of $f$.
- If $f\ge0$, the integral is the area under the graph; if the velocity is positive, the integral is the distance travelled.
- $\displaystyle\int_a^a=0$, $\displaystyle\int_b^a=-\int_a^b$, $\displaystyle\int_a^b=\int_a^c+\int_c^b$; constant factors and sums split apart.
- With an absolute value: find where the sign changes, split the interval, remove the bars on each piece.
- $\displaystyle\int f(ax+b)\,dx=\frac1aF(ax+b)+C$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Evaluate $\displaystyle\int_0^2(x^3-2x+3)\,dx$.

::hint
**What you need:** $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.

**Steps:**
1. Find an antiderivative $F(x)=\dfrac{x^4}{4}-x^2+3x$.
2. Compute $F(2)-F(0)$.

::solution
$\Big[\dfrac{x^4}{4}-x^2+3x\Big]_0^2=(4-4+6)-0=6$.

**Answer.** $6$.
:::

:::exercise
Evaluate $\displaystyle\int_1^4\left(\sqrt x-\frac{1}{x^2}\right)dx$.

::hint
**What you need:** $\sqrt x=x^{\frac12}$ has antiderivative $\dfrac23x\sqrt x$; $x^{-2}$ has antiderivative $-\dfrac1x$.

**Steps:**
1. Write an antiderivative $F(x)=\dfrac23x\sqrt x+\dfrac1x$.
2. Compute $F(4)-F(1)$, taking care with the fractions.

::solution
$F(4)=\dfrac{16}{3}+\dfrac14$ and $F(1)=\dfrac23+1$. The difference is $\dfrac{14}{3}-\dfrac34=\dfrac{56-9}{12}=\dfrac{47}{12}$.

**Answer.** $\dfrac{47}{12}$.
:::

:::exercise
Evaluate $\displaystyle\int_0^{\pi}(\sin x+2)\,dx$.

::hint
**What you need:** the antiderivative of $\sin x$ is $-\cos x$; $\cos\pi=-1$ and $\cos0=1$.

**Steps:**
1. Write $F(x)=-\cos x+2x$.
2. Compute $F(\pi)-F(0)$.

::solution
$F(\pi)=1+2\pi$ and $F(0)=-1$. So the integral equals $1+2\pi-(-1)=2+2\pi$.

**Answer.** $2+2\pi$.
:::

:::exercise
Given $\displaystyle\int_1^3 f(x)\,dx=5$ and $\displaystyle\int_1^3 g(x)\,dx=-2$, find $\displaystyle\int_1^3\big(3f(x)-2g(x)+x\big)\,dx$.

::hint
**What you need:** split the sum and take constants outside the integral.

**Steps:**
1. Write it as $3\cdot5-2\cdot(-2)+\displaystyle\int_1^3x\,dx$.
2. Evaluate $\displaystyle\int_1^3x\,dx$.

::solution
$\displaystyle\int_1^3x\,dx=\Big[\frac{x^2}{2}\Big]_1^3=\frac92-\frac12=4$. The total is $15+4+4=23$.

**Answer.** $23$.
:::

:::exercise
Consider the integral $I=\displaystyle\int_0^3\lvert x-2\rvert\,dx$. Is each claim true or false?

a) On $[0, 2]$, $\lvert x-2\rvert=2-x$.

b) $I=\left\lvert\displaystyle\int_0^3(x-2)\,dx\right\rvert=\dfrac32$.

c) $I=\dfrac52$.

d) $\displaystyle\int_3^0\lvert x-2\rvert\,dx=\dfrac52$.

::hint
**What you need:** split the interval where $x-2$ changes sign; swapping the limits changes the sign.

**Steps:**
1. Find the sign of $x-2$ on $[0, 2]$ and on $[2, 3]$.
2. Evaluate the two smaller integrals and add.

::solution
a) **True**: for $x\le2$, $x-2\le0$.

b) **False**: the absolute value cannot be moved outside; $I$ is not $\dfrac32$ (see c).

c) **True**: $\displaystyle\int_0^2(2-x)\,dx=2$ and $\displaystyle\int_2^3(x-2)\,dx=\frac12$, so $I=\dfrac52$.

d) **False**: swapping the limits changes the sign, so that integral equals $-\dfrac52$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Evaluate $\displaystyle\int_0^1(3x+1)^2\,dx$.

::hint
**What you need:** $\displaystyle\int f(ax+b)\,dx=\frac1aF(ax+b)+C$, here with $a=3$.

**Steps:**
1. An antiderivative is $\dfrac{(3x+1)^3}{9}$.
2. Substitute the limits $1$ and $0$.

::solution
$\Big[\dfrac{(3x+1)^3}{9}\Big]_0^1=\dfrac{64}{9}-\dfrac19=7$.

**Answer.** $7$.
:::

:::exercise
Water flows into a tank at the rate $r(t)=40-2t$ (litres per minute), $0\le t\le10$. How much water flows into the tank in the first $10$ minutes?

::hint
**What you need:** the amount that flows in from $t=a$ to $t=b$ is $\displaystyle\int_a^b r(t)\,dt$ (the rate is non-negative).

**Steps:**
1. Write $\displaystyle\int_0^{10}(40-2t)\,dt$.
2. Evaluate it with the antiderivative $40t-t^2$.

::solution
$\Big[40t-t^2\Big]_0^{10}=400-100=300$.

**Answer.** $300$ litres.
:::

:::exercise Review
$F(x)$ is an antiderivative of $f(x)$ on $\mathbb{R}$ with $F(1)=2$ and $F(4)=7$. Find $\displaystyle\int_1^4 f(x)\,dx$ and $\displaystyle\int_1^4\big(2f(x)+1\big)\,dx$.

::hint
**What you need:** the definition of the integral through an antiderivative (see [antiderivatives](lesson:antiderivatives)).

**Steps:**
1. $\displaystyle\int_1^4f(x)\,dx=F(4)-F(1)$.
2. Split the sum; $\displaystyle\int_1^41\,dx=3$.

::solution
$\displaystyle\int_1^4f(x)\,dx=7-2=5$. Then $\displaystyle\int_1^4\big(2f(x)+1\big)\,dx=2\cdot5+3=13$.

**Answer.** $5$ and $13$.
:::

:::exercise Review
Evaluate $\displaystyle\int_0^{\ln3}e^x\,dx$ and $\displaystyle\int_1^2 2^x\,dx$ (give the second one to 2 decimal places).

::hint
**What you need:** $e^{\ln a}=a$ (logarithms, grade 11); the antiderivative of $2^x$ is $\dfrac{2^x}{\ln2}$.

**Steps:**
1. $\Big[e^x\Big]_0^{\ln3}=e^{\ln3}-e^0$.
2. $\Big[\dfrac{2^x}{\ln2}\Big]_1^2=\dfrac{4-2}{\ln2}$.

::solution
$\displaystyle\int_0^{\ln3}e^x\,dx=3-1=2$. $\displaystyle\int_1^22^x\,dx=\frac{2}{\ln2}\approx2.885$.

**Answer.** $2$ and $\dfrac{2}{\ln2}\approx2.89$.
:::

:::exercise Challenge
Evaluate $\displaystyle\int_{-1}^2\lvert x^2-x\rvert\,dx$.

::hint
**What you need:** $x^2-x=x(x-1)$ changes sign at $0$ and $1$; it is positive outside the roots and negative between them.

**Steps:**
1. Split into the three intervals $[-1, 0]$, $[0, 1]$, $[1, 2]$.
2. Use the antiderivative $G(x)=\dfrac{x^3}{3}-\dfrac{x^2}{2}$ on each piece, changing the sign on the middle one.

::solution
$G(-1)=-\dfrac56$, $G(0)=0$, $G(1)=-\dfrac16$, $G(2)=\dfrac23$. The three parts: $G(0)-G(-1)=\dfrac56$; $-(G(1)-G(0))=\dfrac16$; $G(2)-G(1)=\dfrac56$. The total is $\dfrac56+\dfrac16+\dfrac56=\dfrac{11}{6}$.

**Answer.** $\dfrac{11}{6}$.
:::

## Mini test

:::quiz
::mc
The integral $\displaystyle\int_1^2(2x+1)\,dx$ equals
A. $6$.
B. $-4$.
C. $4$.
D. $2$.
::key C
$\Big[x^2+x\Big]_1^2=6-2=4$. A forgets to subtract the value at the lower limit, B subtracts the wrong way round, and D computes $f(2)-f(1)$ instead of using an antiderivative.

::mc
Given $\displaystyle\int_0^5 f(x)\,dx=7$ and $\displaystyle\int_0^2 f(x)\,dx=3$, the value of $\displaystyle\int_2^5 f(x)\,dx$ is
A. $10$.
B. $4$.
C. $-4$.
D. $-10$.
::key B
$\displaystyle\int_0^5=\int_0^2+\int_2^5$, so $\displaystyle\int_2^5 f(x)\,dx=7-3=4$. A adds instead of subtracting; C and D have the wrong sign.

::mc
The integral $\displaystyle\int_0^{\pi}\sin x\,dx$ equals
A. $-2$.
B. $1$.
C. $2$.
D. $0$.
::key C
$\Big[-\cos x\Big]_0^{\pi}=-(-1)-(-1)=2$. A uses the wrong antiderivative $\cos x$, B takes the value at the lower limit as $0$, and D is the result for $\cos x$ on $[0, \pi]$.

::mc
The integral $\displaystyle\int_0^1 e^{2x}\,dx$ equals
A. $e^2-1$.
B. $\dfrac{e^2-1}{2}$.
C. $2(e^2-1)$.
D. $\dfrac{e^2}{2}$.
::key B
The antiderivative is $\dfrac{e^{2x}}{2}$, so the integral is $\dfrac{e^2-e^0}{2}=\dfrac{e^2-1}{2}$. A forgets the factor $\dfrac12$, C multiplies instead of dividing, and D takes $e^0=0$.

::tf
Consider $f(x)=x^2-4x+3$.
a) $\displaystyle\int_0^3 f(x)\,dx=0$.
b) $f(x)\le0$ for every $x\in[1, 3]$.
c) $\displaystyle\int_0^3\lvert f(x)\rvert\,dx=0$.
d) $\displaystyle\int_0^3\lvert f(x)\rvert\,dx=\dfrac83$.
::key T T F T
a) True: $\Big[\dfrac{x^3}{3}-2x^2+3x\Big]_0^3=9-18+9=0$. b) True: $f$ has roots $1$ and $3$ and leading coefficient $a>0$. c) False: the integral of a non-negative function that is not identically $0$ is positive. d) True: $\displaystyle\int_0^1 f=\frac43$ and $\displaystyle\int_1^3(-f)=\frac43$, a total of $\dfrac83$.

::sa
Evaluate $\displaystyle\int_0^2(x^3+3x^2)\,dx$.
::key 12
$\Big[\dfrac{x^4}{4}+x^3\Big]_0^2=4+8=12$.

::sa
Evaluate $\displaystyle\int_1^e\left(2x+\frac1x\right)dx$. Give your answer to 1 decimal place.
::key 7.4
$\Big[x^2+\ln x\Big]_1^e=(e^2+1)-(1+0)=e^2\approx7.389$, which rounds to $7.4$.
:::
