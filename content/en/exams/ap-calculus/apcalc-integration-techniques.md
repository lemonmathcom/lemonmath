---
title: Integration techniques
description: AP Calculus Unit 6, part 2: substitution, long division and completing the square; for BC, integration by parts, partial fractions and improper integrals.
minutes: 45
---

:::goals
- Find antiderivatives by substitution, and change the limits of a definite integral correctly.
- Rewrite an integrand by long division or by completing the square before integrating.
- (BC) Integrate by parts and by partial fractions.
- (BC) Decide whether an improper integral converges, and find its value when it does.
:::

The fundamental theorem turns every definite integral into an antiderivative problem, so the speed and accuracy of your antidifferentiation decide many points on the exam. On the multiple-choice part without a calculator, almost a third of the integral questions need a substitution. In the free-response part, a correct setup earns points, but the final answer point needs the right antiderivative. AB students need the first two sections; BC students need all four.

## Substitution

Substitution is the chain rule read backwards. Look for a function $u=g(x)$ whose derivative $g'(x)$ also appears (up to a constant factor) in the integrand. Then $du=g'(x)\,dx$ and
$$\int f\big(g(x)\big)g'(x)\,dx=\int f(u)\,du.$$

:::example An inside function and its derivative
Find $\displaystyle\int 2x\cos\left(x^2\right)dx$.

**Solution.** Let $u=x^2$, so $du=2x\,dx$. The integral becomes $\displaystyle\int\cos u\,du=\sin u+C=\sin\left(x^2\right)+C$. Check by differentiating: $\cos\left(x^2\right)\cdot2x$.
:::

:::example Changing the limits
What is $\displaystyle\int_0^1 x\left(x^2+1\right)^3dx$?
A. $\dfrac{15}{4}$
B. $\dfrac{15}{8}$
C. $2$
D. $4$

**Solution.** Let $u=x^2+1$, so $du=2x\,dx$ and $x\,dx=\dfrac12du$. When $x=0$, $u=1$; when $x=1$, $u=2$.
$$\frac12\int_1^2u^3\,du=\frac12\left[\frac{u^4}{4}\right]_1^2=\frac12\cdot\frac{16-1}{4}=\frac{15}{8}.$$
Answer **B**. Option A forgets the factor $\dfrac12$.
:::

:::warning Keep the limits consistent
After the substitution, either change the limits to values of $u$, or go back to $x$ before using the old limits. Writing $\displaystyle\int_0^1u^3\,du$ with the old limits is one of the most common errors graders see.
:::

## Long division and completing the square

When the integrand is a fraction whose numerator has degree at least that of the denominator, divide first. When the denominator is a quadratic with no real roots, complete the square and aim for $\displaystyle\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua+C$.

:::example Two rewrites
Find a) $\displaystyle\int\frac{x^2+1}{x+1}\,dx$ and b) $\displaystyle\int\frac{dx}{x^2+2x+5}$.

**Solution.** a) Long division gives $\dfrac{x^2+1}{x+1}=x-1+\dfrac{2}{x+1}$, so the integral is $\dfrac{x^2}{2}-x+2\ln|x+1|+C$.

b) $x^2+2x+5=(x+1)^2+4$. With $u=x+1$ and $a=2$: $\dfrac12\arctan\dfrac{x+1}{2}+C$.
:::

## Integration by parts and partial fractions (BC)

:::theorem Integration by parts
$$\int u\,dv=uv-\int v\,du.$$
Choose $u$ to be the factor that gets simpler when differentiated (a polynomial or $\ln x$), and $dv$ the factor you can integrate.
:::

:::example Two classic products
Find a) $\displaystyle\int xe^x\,dx$ and b) $\displaystyle\int x\ln x\,dx$.

**Solution.** a) $u=x$, $dv=e^x\,dx$: $xe^x-\displaystyle\int e^x\,dx=xe^x-e^x+C$.

b) Here $u=\ln x$ (we cannot easily integrate $\ln x$ as $dv$) and $dv=x\,dx$: $\dfrac{x^2}{2}\ln x-\displaystyle\int\frac{x^2}{2}\cdot\frac1x\,dx=\dfrac{x^2}{2}\ln x-\dfrac{x^2}{4}+C$.
:::

:::example Partial fractions
Evaluate $\displaystyle\int_1^2\frac{dx}{x(x+1)}$.

**Solution.** $\dfrac{1}{x(x+1)}=\dfrac1x-\dfrac{1}{x+1}$. So the integral is $\Big[\ln x-\ln(x+1)\Big]_1^2=(\ln2-\ln3)-(0-\ln2)=\ln\dfrac43$.

AP BC only uses non-repeated linear factors in the denominator, like this one.
:::

## Improper integrals (BC)

An integral with an infinite limit, or with an integrand that blows up inside the interval, is defined as a limit:
$$\int_1^{\infty}f(x)\,dx=\lim_{b\to\infty}\int_1^b f(x)\,dx.$$
If the limit is a finite number, the integral **converges**; otherwise it **diverges**. Write the limit explicitly: graders look for it.

:::example One converges, one diverges
Evaluate $\displaystyle\int_1^{\infty}\frac{dx}{x^2}$ and $\displaystyle\int_1^{\infty}\frac{dx}{x}$.

**Solution.** $\displaystyle\lim_{b\to\infty}\left[-\frac1x\right]_1^b=\lim_{b\to\infty}\left(1-\frac1b\right)=1$: converges to $1$.

$\displaystyle\lim_{b\to\infty}\Big[\ln x\Big]_1^b=\lim_{b\to\infty}\ln b=\infty$: diverges. In general $\displaystyle\int_1^\infty\frac{dx}{x^p}$ converges exactly when $p>1$.
:::

:::tip Check by differentiating
On the no-calculator part, spend ten seconds differentiating your antiderivative. It catches a missing $\dfrac12$ or a wrong sign, which is exactly where the wrong options in multiple-choice questions come from.
:::

:::terms
- substitution (u-substitution) | phép đổi biến
- antiderivative | nguyên hàm
- long division | phép chia đa thức
- completing the square | đưa về bình phương đủ
- integration by parts | tích phân từng phần
- partial fractions | phân tích thành phân thức đơn giản
- improper integral | tích phân suy rộng
- converge / diverge | hội tụ / phân kì
:::

## Similar exercises

:::exercise Multiple choice
What is $\displaystyle\int e^{3x}\,dx$?
A. $3e^{3x}+C$
B. $e^{3x}+C$
C. $\dfrac{e^{3x}}{3}+C$
D. $\dfrac{e^{3x+1}}{3x+1}+C$

::hint
**What you need:** $u=3x$, $du=3\,dx$.

::solution
$\dfrac13\displaystyle\int e^u\,du=\dfrac{e^{3x}}{3}+C$: answer **C**. Option D treats $e^{3x}$ like a power of $x$.
:::

:::exercise Free response
Find $\displaystyle\int\frac{\ln x}{x}\,dx$.

::hint
**What you need:** the derivative of $\ln x$ is $\dfrac1x$.

**Steps:**
1. Let $u=\ln x$, $du=\dfrac1x\,dx$.

::solution
$\displaystyle\int u\,du=\dfrac{u^2}{2}+C=\dfrac{(\ln x)^2}{2}+C$.
:::

:::exercise Free response
Evaluate $\displaystyle\int_0^{\pi/2}\cos x\,e^{\sin x}\,dx$.

::hint
**What you need:** $u=\sin x$; the limits become $0$ and $1$.

::solution
$\displaystyle\int_0^1e^u\,du=e-1$.
:::

:::exercise Multiple choice
What is $\displaystyle\int_0^2\frac{x}{x^2+1}\,dx$?
A. $\dfrac{\ln5}{2}$
B. $\ln5$
C. $2\ln5$
D. $\dfrac{\ln3}{2}$

::hint
**What you need:** $u=x^2+1$, $x\,dx=\dfrac12du$, limits $1$ and $5$.

::solution
$\dfrac12\Big[\ln u\Big]_1^5=\dfrac{\ln5}{2}$: answer **A**.
:::

:::exercise BC: free response
Find $\displaystyle\int x\cos x\,dx$.

::hint
**What you need:** parts with $u=x$, $dv=\cos x\,dx$.

**Steps:**
1. $v=\sin x$.
2. $x\sin x-\displaystyle\int\sin x\,dx$.

::solution
$x\sin x+\cos x+C$. Check: the derivative is $\sin x+x\cos x-\sin x=x\cos x$.
:::

## Application exercises

:::exercise Filling a tank
Water flows into a tank at a rate of $r(t)=\dfrac{20t}{t^2+1}$ liters per minute. How much water enters the tank from $t=0$ to $t=3$ minutes? Give an exact value and a decimal.

::hint
**What you need:** amount $=\displaystyle\int_0^3r(t)\,dt$; $u=t^2+1$.

**Steps:**
1. $20t\,dt=10\,du$; limits $1$ and $10$.

::solution
$10\displaystyle\int_1^{10}\frac{du}{u}=10\ln10\approx23.026$ liters.
:::

:::exercise Completing the square
Find $\displaystyle\int\frac{dx}{x^2-4x+13}$.

::hint
**What you need:** $x^2-4x+13=(x-2)^2+9$.

::solution
With $u=x-2$ and $a=3$: $\dfrac13\arctan\dfrac{x-2}{3}+C$.
:::

:::exercise BC: parts and an improper integral
Evaluate $\displaystyle\int_0^{\infty}xe^{-x}\,dx$.

::hint
**What you need:** an antiderivative by parts, then a limit as $b\to\infty$; $\displaystyle\lim_{b\to\infty}\frac{b}{e^b}=0$.

**Steps:**
1. $\displaystyle\int xe^{-x}\,dx=-xe^{-x}-e^{-x}+C$.
2. Evaluate from $0$ to $b$ and let $b\to\infty$.

::solution
$\displaystyle\lim_{b\to\infty}\left[-xe^{-x}-e^{-x}\right]_0^b=\lim_{b\to\infty}\left(-\frac{b}{e^b}-\frac{1}{e^b}+1\right)=1$. The integral converges to $1$.
:::

:::exercise Challenge
Given $\displaystyle\int_0^4f(x)\,dx=10$, find $\displaystyle\int_0^2f(2x)\,dx$ and $\displaystyle\int_1^3f(2x-2)\,dx$.

::hint
**What you need:** substitution with an unknown function works the same way.

**Steps:**
1. $u=2x$: limits $0$ to $4$, $dx=\dfrac12du$.
2. $u=2x-2$: limits $0$ to $4$ again.

::solution
Both integrals equal $\dfrac12\displaystyle\int_0^4f(u)\,du=\dfrac12\cdot10=5$.
:::

:::quiz
::mc
What is $\displaystyle\int\cos(5x)\,dx$?
A. $5\sin(5x)+C$
B. $-\dfrac{\sin(5x)}{5}+C$
C. $\dfrac{\sin(5x)}{5}+C$
D. $\sin(5x)+C$
::key C
With $u=5x$: $\dfrac15\sin u+C$.

::mc
What is $\displaystyle\int_0^1 2xe^{x^2}\,dx$?
A. $e$
B. $e-1$
C. $2e-2$
D. $\dfrac{e-1}{2}$
::key B
$u=x^2$, limits $0$ and $1$: $\Big[e^u\Big]_0^1=e-1$.

::mc
Which substitution turns $\displaystyle\int x^2\sqrt{x^3+1}\,dx$ into a basic integral?
A. $u=x^2$
B. $u=\sqrt x$
C. $u=x^3$
D. $u=x^3+1$
::key D
Then $du=3x^2\,dx$, and the integral becomes $\dfrac13\displaystyle\int\sqrt u\,du$.

::mc
What is $\displaystyle\int\frac{dx}{x^2+9}$?
A. $\dfrac13\arctan\dfrac x3+C$
B. $\arctan\dfrac x3+C$
C. $3\arctan\dfrac x3+C$
D. $\dfrac19\arctan x+C$
::key A
Use $\displaystyle\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua+C$ with $a=3$.

::tf
Decide whether each statement is true or false.
a) $\displaystyle\int\frac{2x}{x^2+1}\,dx=\ln\left(x^2+1\right)+C$.
b) With $u=x^2+1$, $\displaystyle\int_0^2x\left(x^2+1\right)^2dx=\dfrac12\displaystyle\int_0^2u^2\,du$.
c) (BC) $\displaystyle\int_1^\infty\frac{dx}{x^3}=\frac12$.
d) (BC) $\displaystyle\int_1^\infty\frac{dx}{\sqrt x}$ converges.
::key T F T F
a) True: $u=x^2+1$. b) False: the limits must become $1$ and $5$. c) True: $\displaystyle\lim_{b\to\infty}\left[-\frac{1}{2x^2}\right]_1^b=\frac12$. d) False: $p=\dfrac12\le1$.

::sa
Evaluate $\displaystyle\int_0^2 2x\left(x^2+1\right)dx$.
::key 12
$u=x^2+1$, limits $1$ and $5$: $\Big[\dfrac{u^2}{2}\Big]_1^5=\dfrac{25-1}{2}=12$.

::sa
Evaluate $\displaystyle\int_0^1 6x\left(x^2+1\right)^2dx$.
::key 7
$u=x^2+1$, $6x\,dx=3\,du$: $3\Big[\dfrac{u^3}{3}\Big]_1^2=8-1=7$.
:::
