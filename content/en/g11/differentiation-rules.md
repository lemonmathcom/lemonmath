---
title: Rules of differentiation
description: Learn the derivatives of common functions and the sum, product, quotient and chain rules to differentiate quickly and write equations of tangents.
minutes: 25
---

:::goals
- Recall the derivatives of constants, powers, roots, exponential functions and logarithmic functions.
- Use the sum, difference, product, quotient and chain rules to differentiate.
- Write the equation of a tangent and find points with a horizontal tangent using the rules.
- Apply the derivative to problems on motion, growth and profit.
:::

Suppose an object moves along a straight line and after $t$ seconds is $s(t)=t^3-6t^2+9t$ metres from the origin (hypothetical figures). We have $s(1)=4$, $s(2)=2$, $s(3)=0$, $s(4)=4$. The object moves forward, then back, then forward again. Finding the velocity at each moment from the definition means setting up a long limit every time. Is there a quick way to find the velocity at every instant, and to tell when the object is momentarily at rest?

## Exploration: finding the pattern

Using the definition, we find $(x^n)'$ for a few values of $n$: simplify the quotient $\dfrac{x^n-x_0^n}{x-x_0}$, then let $x\to x_0$.

| Function | $x^2$ | $x^3$ | $x^4$ |
|---|---|---|---|
| Quotient $\dfrac{x^n-x_0^n}{x-x_0}$ | $x+x_0$ | $x^2+xx_0+x_0^2$ | $x^3+x^2x_0+xx_0^2+x_0^3$ |
| Derivative at $x_0$ | $2x_0$ | $3x_0^2$ | $4x_0^3$ |

The pattern is clear: the derivative of $x^n$ is $nx^{n-1}$. We now gather this pattern and other rules into a set of formulas.

## Derivatives of common functions

:::theorem Table of derivatives
For constants $c$, $a$ ($a>0$, $a\neq1$):
- $(c)'=0$, $(x)'=1$.
- $(x^n)'=nx^{n-1}$ ($n\in\mathbb{N}^*$).
- $(\sqrt x)'=\dfrac1{2\sqrt x}$ ($x>0$), $\left(\dfrac1x\right)'=-\dfrac1{x^2}$ ($x\neq0$).
- $(e^x)'=e^x$, $(a^x)'=a^x\ln a$.
- $(\ln x)'=\dfrac1x$, $(\log_ax)'=\dfrac1{x\ln a}$ ($x>0$).
:::

## Rules of differentiation

:::theorem Sum, difference, product and quotient rules
Suppose $u=u(x)$ and $v=v(x)$ are differentiable. Then
- $(u\pm v)'=u'\pm v'$ and $(ku)'=ku'$ ($k$ a constant).
- $(uv)'=u'v+uv'$.
- $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$ (for $v\neq0$).
:::

:::theorem Chain rule
If $y=f(u)$ and $u=g(x)$ are both differentiable, then $y'_x=f'(u)\cdot g'(x)$. In particular:
$$\left(u^n\right)'=nu^{n-1}u',\qquad\left(e^u\right)'=u'e^u,\qquad(\ln u)'=\frac{u'}{u}.$$
:::

**Why is this true?** For the product rule, write
$$\frac{u(x+h)v(x+h)-u(x)v(x)}{h}=u(x+h)\cdot\frac{v(x+h)-v(x)}{h}+v(x)\cdot\frac{u(x+h)-u(x)}{h}.$$
As $h\to0$, $u(x+h)\to u(x)$ (since $u$ is continuous, being differentiable), and the two quotients tend to $v'(x)$ and $u'(x)$. So the right side tends to $uv'+vu'$. For $(x^n)'$, use $\dfrac{x^n-x_0^n}{x-x_0}=x^{n-1}+x^{n-2}x_0+\dots+x_0^{n-1}$, which has $n$ terms, each tending to $x_0^{n-1}$, so the sum tends to $nx_0^{n-1}$. The chain rule says "the rate of change of $y$ with respect to $x$ equals the rate of $y$ with respect to $u$ times the rate of $u$ with respect to $x$".

## Examples

We begin with the table of derivatives and the sum rule.

:::example Basic differentiation
Differentiate:

a) $f(x)=3x^4-2x^2+5x-7$, then find $f'(1)$.

b) $g(x)=\sqrt x+\dfrac1x$.

**Solution.** a) $f'(x)=3\cdot4x^3-2\cdot2x+5=12x^3-4x+5$. Hence $f'(1)=12-4+5=13$.

b) $g'(x)=\dfrac1{2\sqrt x}-\dfrac1{x^2}$.

So a) $f'(x)=12x^3-4x+5$, $f'(1)=13$; b) $g'(x)=\dfrac1{2\sqrt x}-\dfrac1{x^2}$.
:::

Next we use the product and quotient rules.

:::example Product and quotient rules
Differentiate:

a) $y=(x^2+1)(x^3-x)$.

b) $y=\dfrac{2x+1}{x+3}$.

**Solution.** a) Let $u=x^2+1$, $v=x^3-x$. Then $y'=2x(x^3-x)+(x^2+1)(3x^2-1)=2x^4-2x^2+3x^4+2x^2-1=5x^4-1$.

**Check.** Expanding gives $y=x^5-x$, so $y'=5x^4-1$ ✓.

b) Let $u=2x+1$, $v=x+3$. Then $y'=\dfrac{2(x+3)-(2x+1)\cdot1}{(x+3)^2}=\dfrac{5}{(x+3)^2}$.

So a) $y'=5x^4-1$; b) $y'=\dfrac{5}{(x+3)^2}$.
:::

Composite, exponential and logarithmic functions need the chain rule.

:::example Composite functions
Differentiate:

a) $y=(3x-1)^5$.

b) $y=e^{2x-1}$.

c) $y=\ln(x^2+1)$.

d) $y=x\,e^x$.

**Solution.** a) $y'=5(3x-1)^4\cdot3=15(3x-1)^4$.

b) $y'=(2x-1)'e^{2x-1}=2e^{2x-1}$.

c) $y'=\dfrac{(x^2+1)'}{x^2+1}=\dfrac{2x}{x^2+1}$.

d) Product rule: $y'=1\cdot e^x+x\cdot e^x=(x+1)e^x$.

So a) $15(3x-1)^4$; b) $2e^{2x-1}$; c) $\dfrac{2x}{x^2+1}$; d) $(x+1)e^x$.
:::

The derivative gives the gradient, and from it we can write a tangent.

:::example Tangents using the rules
Let $f(x)=x^3-3x+1$.

a) Write the equation of the tangent at the point with $x$-coordinate $2$.

b) Find the points on the graph where the tangent is horizontal.

**Solution.** a) $f'(x)=3x^2-3$, so $f'(2)=9$ and $f(2)=8-6+1=3$. The tangent is $y=9(x-2)+3=9x-15$.

b) The tangent is horizontal when $f'(x)=0$, that is $3x^2-3=0$, so $x=\pm1$. We have $f(1)=-1$ and $f(-1)=3$.

So a) $y=9x-15$; b) the points $(1, -1)$ and $(-1, 3)$.
:::

Now we return to the motion problem from the start, using all four steps.

:::example Application: when is the object momentarily at rest?
Suppose an object has $s(t)=t^3-6t^2+9t$ metres after $t$ seconds (hypothetical figures), $t\ge0$. Find the times when the velocity is $0$ and the positions then.

**Solution.**

*Understand.* The velocity is $v(t)=s'(t)$. We must solve $v(t)=0$ and then find $s$ at the solutions.

*Plan.* Use the table of derivatives and the sum rule to get $v(t)$, then solve a quadratic equation.

*Solve.* $v(t)=3t^2-12t+9=3(t-1)(t-3)$. So $v(t)=0$ when $t=1$ or $t=3$. We have $s(1)=4$ and $s(3)=0$.

*Look back.* Is the result reasonable? From the 1st to the 3rd second, $v<0$ (since $(t-1)(t-3)<0$), so the object moves back from $4$ to $0$: this agrees with $s(1)=4$, $s(2)=2$, $s(3)=0$. If the object is momentarily at rest, does it reverse direction? At $t=1$ and $t=3$ the sign of $v$ changes, so it does. If the sign did not change (for example $v=3t^2$ at $t=0$), the object would only pause briefly and then continue in the same direction.
:::

:::graph Graph of position $s(t)=t^3-6t^2+9t$ with horizontal tangents at $t=1$ and $t=3$
alt: A cubic curve rising to the point (1, 4), falling to the point (3, 0), then rising again; the tangent is horizontal at these two points
x: 0..4.2
y: -1..6.2
plot: x^3-6*x^2+9*x
point: (1, 4) "" above
point: (3, 0) "" below
label: (0.2, 5.5) "s(t)"
:::

:::warning Common mistakes
- **The derivative of a product is the product of the derivatives.** Wrong: $(x\cdot x^2)'=1\cdot2x=2x$. Why it is wrong: the product rule has two terms, $u'v+uv'$. Right: $(x^3)'=3x^2$, and $1\cdot x^2+x\cdot2x=3x^2$.
- **Losing the minus sign or the order in the quotient rule.** Wrong: $\left(\dfrac uv\right)'=\dfrac{uv'-u'v}{v^2}$. Why it is wrong: reversing the order gives the opposite sign. Right: $\dfrac{u'v-uv'}{v^2}$; for example $\left(\dfrac1x\right)'=\dfrac{0\cdot x-1\cdot1}{x^2}=-\dfrac1{x^2}$.
- **Forgetting to multiply by the derivative of the inner function.** Wrong: $\left(e^{2x}\right)'=e^{2x}$. Why it is wrong: the chain rule requires the extra factor $(2x)'=2$. Right: $\left(e^{2x}\right)'=2e^{2x}$.
- **Confusing the derivative of an exponential with that of a power.** Wrong: $\left(2^x\right)'=x\cdot2^{x-1}$. Why it is wrong: $2^x$ has a fixed base and a variable exponent; it is not a power of $x$. Right: $\left(2^x\right)'=2^x\ln2$.
:::

**Connections.** These rules rest on the [definition of the derivative](lesson:derivative-definition) and apply at once to [exponential and logarithmic functions](lesson:exp-log-functions). The lesson on the [second derivative](lesson:second-derivative) will differentiate the derivative itself, as acceleration is the derivative of velocity. In practice, these rules give the rate of change of distance, of a bacteria count or of profit without setting up a limit each time.

## Key terms

:::terms
- quy tắc tổng | sum rule
- quy tắc tích | product rule
- quy tắc thương | quotient rule
- hàm hợp | composite function
- quy tắc hàm hợp | chain rule
- hàm hằng | constant function
- tiếp tuyến nằm ngang | horizontal tangent
- tốc độ tăng trưởng | growth rate
- vận tốc | velocity
- bảng đạo hàm | table of derivatives
:::

## Summary

- $(c)'=0$; $(x^n)'=nx^{n-1}$; $(\sqrt x)'=\dfrac1{2\sqrt x}$; $\left(\dfrac1x\right)'=-\dfrac1{x^2}$.
- $(e^x)'=e^x$; $(a^x)'=a^x\ln a$; $(\ln x)'=\dfrac1x$; $(\log_ax)'=\dfrac1{x\ln a}$.
- $(u\pm v)'=u'\pm v'$; $(uv)'=u'v+uv'$; $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.
- Chain rule: $y'_x=f'(u)\,g'(x)$; $\left(u^n\right)'=nu^{n-1}u'$, $\left(e^u\right)'=u'e^u$, $(\ln u)'=\dfrac{u'}{u}$.
- Tangent: $y=f'(x_0)(x-x_0)+f(x_0)$; the tangent is horizontal when $f'(x_0)=0$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Differentiate:

a) $y=x^5-4x^3+2x-9$.

b) $y=3\sqrt x-\dfrac2x$.

c) $y=\sqrt x-\dfrac{x^2}2+7$.

d) $y=\pi$.

::hint
**What you need:** the table of derivatives, $(u\pm v)'=u'\pm v'$, $(ku)'=ku'$.

**Steps:**
1. Differentiate term by term.
2. Add the results, remembering that a constant has derivative $0$.

::solution
a) $y'=5x^4-12x^2+2$.

b) $y'=\dfrac{3}{2\sqrt x}+\dfrac{2}{x^2}$.

c) $y'=\dfrac1{2\sqrt x}-x$.

d) $y'=0$ because $\pi$ is a constant.

**Answer.** a) $5x^4-12x^2+2$; b) $\dfrac3{2\sqrt x}+\dfrac2{x^2}$; c) $\dfrac1{2\sqrt x}-x$; d) $0$.
:::

:::exercise
Differentiate:

a) $y=(2x-1)(x^2+3)$.

b) $y=x^2e^x$.

c) $y=\dfrac{2x+3}{x-1}$.

d) $y=\dfrac{\ln x}{x}$.

::hint
**What you need:** $(uv)'=u'v+uv'$ and $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.

**Steps:**
1. Identify $u$ and $v$, and find $u'$ and $v'$.
2. Substitute into the formula and simplify.

::solution
a) $y'=2(x^2+3)+(2x-1)\cdot2x=6x^2-2x+6$.

b) $y'=2xe^x+x^2e^x=x(x+2)e^x$.

c) $y'=\dfrac{2(x-1)-(2x+3)}{(x-1)^2}=\dfrac{-5}{(x-1)^2}$.

d) $y'=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$.

**Answer.** a) $6x^2-2x+6$; b) $x(x+2)e^x$; c) $-\dfrac5{(x-1)^2}$; d) $\dfrac{1-\ln x}{x^2}$.
:::

:::exercise
Differentiate:

a) $y=(2x+1)^6$.

b) $y=\sqrt{x^2+1}$.

c) $y=e^{x^2}$.

d) $y=\ln(3x-2)$.

::hint
**What you need:** the chain rule; $\left(\sqrt u\right)'=\dfrac{u'}{2\sqrt u}$.

**Steps:**
1. Identify the inner function $u$ and find $u'$.
2. Multiply the derivative of the outer function (with respect to $u$) by $u'$.

::solution
a) $y'=6(2x+1)^5\cdot2=12(2x+1)^5$.

b) $y'=\dfrac{(x^2+1)'}{2\sqrt{x^2+1}}=\dfrac{x}{\sqrt{x^2+1}}$.

c) $y'=2xe^{x^2}$.

d) $y'=\dfrac{3}{3x-2}$.

**Answer.** a) $12(2x+1)^5$; b) $\dfrac{x}{\sqrt{x^2+1}}$; c) $2xe^{x^2}$; d) $\dfrac3{3x-2}$.
:::

:::exercise
Write the equation of the tangent to the graph:

a) $y=x^3-3x+1$ at the point with $x$-coordinate $0$.

b) $y=\ln x$ at the point with $x$-coordinate $1$.

c) $y=e^{2x}$ at the point with $x$-coordinate $0$.

::hint
**What you need:** $y=f'(x_0)(x-x_0)+f(x_0)$.

**Steps:**
1. Find $f(x_0)$ and $f'(x_0)$ using the rules.
2. Substitute into the formula.

::solution
a) $f'(x)=3x^2-3$, $f'(0)=-3$, $f(0)=1$. The tangent is $y=-3x+1$.

b) $f'(x)=\dfrac1x$, $f'(1)=1$, $f(1)=0$. The tangent is $y=x-1$.

c) $f'(x)=2e^{2x}$, $f'(0)=2$, $f(0)=1$. The tangent is $y=2x+1$.

**Answer.** a) $y=-3x+1$; b) $y=x-1$; c) $y=2x+1$.
:::

:::exercise
Decide whether each statement is true or false:

a) $\left(\sqrt x\right)'=\dfrac1{\sqrt x}$.

b) $(uv)'=u'v+uv'$.

c) $\left(e^{2x}\right)'=2e^{2x}$.

d) $\left(2^x\right)'=2^x$.

::hint
**What you need:** the table of derivatives and the chain rule.

**Steps:**
1. Compare each statement with the formulas.
2. Watch the coefficients and the factor $\ln a$.

::solution
a) **False**: $\left(\sqrt x\right)'=\dfrac1{2\sqrt x}$.

b) **True**: the product rule.

c) **True**: the chain rule with $(2x)'=2$.

d) **False**: $\left(2^x\right)'=2^x\ln2$.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
Suppose the number of bacteria in a culture after $t$ hours is $N(t)=1000e^{0.3t}$ (hypothetical figures).

a) Find $N'(t)$.

b) Find the rate of growth at $t=2$ (to the nearest whole number, in bacteria per hour).

c) Calculate $\dfrac{N'(t)}{N(t)}$ and state its meaning.

::hint
**What you need:** $\left(e^{kt}\right)'=ke^{kt}$.

**Steps:**
1. a) Use the chain rule.
2. c) Divide $N'$ by $N$ and simplify.

::solution
a) $N'(t)=1000\cdot0.3e^{0.3t}=300e^{0.3t}$.

b) $N'(2)=300e^{0.6}\approx300\cdot1.8221\approx547$ (bacteria per hour).

c) $\dfrac{N'(t)}{N(t)}=\dfrac{300e^{0.3t}}{1000e^{0.3t}}=0.3$: the bacteria count grows by $30\%$ per hour at every moment.

**Answer.** a) $300e^{0.3t}$; b) $547$ bacteria per hour; c) $0.3$.
:::

:::exercise
Suppose the profit from selling $q$ items is $P(q)=-0.5q^2+40q-100$ (million dong) (hypothetical figures).

a) Find $P'(q)$.

b) Find $q$ such that $P'(q)=0$ and calculate the profit there.

c) Explain why this is the greatest profit.

::hint
**What you need:** $P(q)$ is a quadratic whose $q^2$ coefficient is negative; $P'(q)=0$ means a horizontal tangent.

**Steps:**
1. Differentiate term by term.
2. Solve $P'(q)=0$ and substitute into $P$.

::solution
a) $P'(q)=-q+40$.

b) $P'(q)=0$ when $q=40$, and $P(40)=-0.5\cdot1600+1600-100=700$ (million dong).

c) The parabola $P(q)$ has coefficient $-0.5<0$, so it opens downwards, and its vertex (horizontal tangent) is the highest point. So the greatest profit is $700$ million dong when $q=40$.

**Answer.** a) $-q+40$; b) $q=40$, $P=700$ million dong; c) the vertex of a downward-opening parabola.
:::

:::exercise
Suppose the temperature of a cup of water after $t$ minutes is $T(t)=20+60e^{-0.1t}$ ($^\circ$C) (hypothetical figures). Find $T'(10)$ (to one decimal place) and state its meaning.

::hint
**What you need:** $\left(e^{kt}\right)'=ke^{kt}$, $e^{-1}=\dfrac1e\approx0.3679$.

**Steps:**
1. Find $T'(t)$ using the chain rule.
2. Substitute $t=10$.

::solution
$T'(t)=60\cdot(-0.1)e^{-0.1t}=-6e^{-0.1t}$, so $T'(10)=-6e^{-1}\approx-2.2$.

So at the 10th minute the temperature is falling by about $2.2\,^\circ$C per minute.

**Answer.** $T'(10)\approx-2.2$ ($^\circ$C per minute), meaning the temperature is falling.
:::

:::exercise
Revisit logarithms. Using $a^x=e^{x\ln a}$ and the change of base formula $\log_ax=\dfrac{\ln x}{\ln a}$, differentiate:

a) $y=3^x$.

b) $y=\log_2x$.

::hint
**What you need:** $(e^u)'=u'e^u$ and $(\ln x)'=\dfrac1x$.

**Steps:**
1. Rewrite the function using $e$ or $\ln$.
2. Differentiate, remembering that $\ln a$ is a constant.

::solution
a) $3^x=e^{x\ln3}$, so $y'=\ln3\cdot e^{x\ln3}=3^x\ln3$.

b) $y=\dfrac{\ln x}{\ln2}$, so $y'=\dfrac{1}{x\ln2}$.

**Answer.** a) $3^x\ln3$; b) $\dfrac1{x\ln2}$.
:::

:::exercise Challenge
Let $f(x)=(x-1)(x-2)(x-3)$. Find $f'(1)+f'(2)+f'(3)$.

::hint
**What you need:** the product rule for three factors: $(uvw)'=u'vw+uv'w+uvw'$.

**Steps:**
1. Find $f'(x)$ using the product rule.
2. Substitute $x=1,2,3$: two of the three terms vanish each time.

::solution
$f'(x)=(x-2)(x-3)+(x-1)(x-3)+(x-1)(x-2)$. At $x=1$ only the first term remains: $f'(1)=(-1)(-2)=2$. At $x=2$: $f'(2)=(1)(-1)=-1$. At $x=3$: $f'(3)=(2)(1)=2$.

The sum is $2-1+2=3$.

**Answer.** $3$.
:::

## Mini test

:::quiz
::mc TH
Let $f(x)=x^3-3x^2+2x$. The value of $f'(2)$ is
A. $0$.
B. $4$.
C. $2$.
D. $6$.
::key C
$f'(x)=3x^2-6x+2$, so $f'(2)=12-12+2=2$. Option A drops the term $2$, and B and D come from calculation slips.

::mc TH
The derivative of $y=xe^x$ is
A. $(x+e)e^x$.
B. $e^x$.
C. $xe^x$.
D. $(x+1)e^x$.
::key D
$y'=1\cdot e^x+x\cdot e^x=(x+1)e^x$. Option B forgets the term $xe^x$, C forgets the term $e^x$, and A mistakes $1$ for $e$.

::mc TH
The derivative of $y=\dfrac{2x+1}{x+3}$ is
A. $\dfrac{5}{(x+3)^2}$.
B. $2$.
C. $-\dfrac{5}{(x+3)^2}$.
D. $\dfrac{4x+7}{(x+3)^2}$.
::key A
$y'=\dfrac{2(x+3)-(2x+1)}{(x+3)^2}=\dfrac5{(x+3)^2}$. Option B divides the derivatives, C reverses the sign of the numerator, and D adds instead of subtracting.

::mc VD
The derivative of $y=\ln(x^2+1)$ at $x=1$ is
A. $0$.
B. $1$.
C. $\dfrac12$.
D. $2$.
::key B
$y'=\dfrac{2x}{x^2+1}$, so $y'(1)=\dfrac22=1$. Option D forgets the denominator, C divides by $4$, and A confuses it with $\ln1$.

::tf NB TH TH TH
Let $f(x)=x^3-3x+1$. Decide whether each statement is true or false:
a) $f'(x)=3x^2-3$.
b) The gradient of the tangent at $x=0$ is $3$.
c) The tangent at $x=1$ is parallel to the $x$-axis.
d) The equation $f'(x)=0$ has two solutions, $x=\pm1$.
::key T F T T
a) True. b) False: $f'(0)=-3$. c) True: $f'(1)=0$. d) True: $3x^2-3=0\Leftrightarrow x=\pm1$.

::sa VD
Suppose the number of bacteria after $t$ hours is $N(t)=1000e^{0.3t}$. Find the rate of growth at $t=2$ (to the nearest whole number, in bacteria per hour).
::key 547
$N'(t)=300e^{0.3t}$, so $N'(2)=300e^{0.6}\approx300\cdot1.8221\approx547$.

::sa VD
Find the gradient of the tangent to the graph of $y=\dfrac{x^2+1}{x}$ at the point with $x$-coordinate $2$.
::key 0.75
$y'=\dfrac{2x\cdot x-(x^2+1)}{x^2}=\dfrac{x^2-1}{x^2}$, so $y'(2)=\dfrac34=0.75$.
:::
