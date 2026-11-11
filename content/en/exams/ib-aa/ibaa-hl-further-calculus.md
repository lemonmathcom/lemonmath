---
title: Further calculus: Maclaurin series and differential equations
description: IB Maths AA HL: Maclaurin series, limits with series and L'Hôpital, separable, homogeneous and integrating-factor differential equations, Euler's method.
minutes: 50
---

:::goals
- Find Maclaurin series by differentiation and by combining known series.
- Use series and L'Hôpital's rule to evaluate limits.
- Solve separable and homogeneous differential equations, and linear ones with an integrating factor.
- Approximate solutions of differential equations with Euler's method.
:::

These HL calculus topics are favorites for the last Section B question of Paper 1 or Paper 2: build a Maclaurin series, use it to find a limit or an approximation, or solve a differential equation step by step and interpret the solution in context. As with all HL algebra, every line must follow from the previous one, so write the method in full.

## Maclaurin series

$$f(x)=f(0)+xf'(0)+\frac{x^2}{2!}f''(0)+\frac{x^3}{3!}f'''(0)+\dots$$
The formula booklet gives the series for $e^x$, $\ln(1+x)$, $\sin x$, $\cos x$, $\arctan x$ and $(1+x)^p$. New series are built by substitution, multiplication, differentiation or integration.

:::example Multiplying two series
Find the Maclaurin series of $e^x\sin x$ up to the term in $x^3$. [4 marks]

**Solution.** $\left(1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dots\right)\left(x-\dfrac{x^3}{6}+\dots\right)=x+x^2+\dfrac{x^3}{2}-\dfrac{x^3}{6}+\dots=x+x^2+\dfrac{x^3}{3}+\dots$
:::

:::example Substitution
Use the series for $\ln(1+x)$ to find the first three nonzero terms of the series for $\ln(1+2x)$, and state the values of $x$ for which it is valid. [4 marks]

**Solution.** $\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\dots$ for $-1<x\le1$. Replace $x$ by $2x$: $2x-2x^2+\dfrac{8x^3}{3}-\dots$, valid for $-1<2x\le1$, that is $-\dfrac12<x\le\dfrac12$.
:::

## Limits with series and L'Hôpital's rule

For a limit of the form $\dfrac00$ or $\dfrac\infty\infty$, either replace the functions by their series, or use **L'Hôpital's rule**: $\displaystyle\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$, repeated if necessary.

:::example A limit two ways
Find $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$. [4 marks]

**Solution.** With series: $\dfrac{\frac{x^2}{2}+\frac{x^3}{6}+\dots}{x^2}=\dfrac12+\dfrac x6+\dots\to\dfrac12$.

With L'Hôpital (twice, since both stages are $\dfrac00$): $\displaystyle\lim_{x\to0}\frac{e^x-1}{2x}=\lim_{x\to0}\frac{e^x}{2}=\frac12$.
:::

## Differential equations

:::note Three types and their methods
- **Separable:** $\dfrac{dy}{dx}=f(x)g(y)$. Separate and integrate: $\displaystyle\int\frac{dy}{g(y)}=\int f(x)\,dx$.
- **Homogeneous:** $\dfrac{dy}{dx}=f\left(\dfrac yx\right)$. Substitute $y=vx$, so $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$, and separate.
- **Linear:** $\dfrac{dy}{dx}+P(x)y=Q(x)$. Multiply by the **integrating factor** $e^{\int P(x)\,dx}$; the left side becomes the derivative of (integrating factor $\times\ y$).
:::

:::example Separable
Solve $\dfrac{dy}{dx}=xy^2$, given that $y=1$ when $x=0$. [5 marks]

**Solution.** $\displaystyle\int y^{-2}\,dy=\int x\,dx$ gives $-\dfrac1y=\dfrac{x^2}{2}+C$. At $(0,1)$: $C=-1$. So $\dfrac1y=1-\dfrac{x^2}{2}$ and $y=\dfrac{2}{2-x^2}$.
:::

:::example Integrating factor
Solve $\dfrac{dy}{dx}+\dfrac{2y}{x}=x^2$ for $x>0$, given that $y=1$ when $x=1$. [6 marks]

**Solution.** The integrating factor is $e^{\int2/x\,dx}=e^{2\ln x}=x^2$. Then $\dfrac{d}{dx}\left(x^2y\right)=x^4$, so $x^2y=\dfrac{x^5}{5}+C$. At $(1,1)$: $C=\dfrac45$. Hence $y=\dfrac{x^3}{5}+\dfrac{4}{5x^2}$.
:::

:::example Homogeneous
Find the general solution of $\dfrac{dy}{dx}=\dfrac{x+y}{x}$, $x>0$. [5 marks]

**Solution.** $\dfrac{dy}{dx}=1+\dfrac yx$. With $y=vx$: $v+x\dfrac{dv}{dx}=1+v$, so $\dfrac{dv}{dx}=\dfrac1x$ and $v=\ln x+C$. Hence $y=x\ln x+Cx$.
:::

## Euler's method

Starting from $(x_0,y_0)$ with step $h$: $x_{n+1}=x_n+h$ and $y_{n+1}=y_n+h\,f(x_n,y_n)$, where $\dfrac{dy}{dx}=f(x,y)$. A GDC table or a spreadsheet makes the arithmetic quick on Paper 2.

:::example Two Euler steps
For $\dfrac{dy}{dx}=x+y$ with $y(0)=1$, use Euler's method with $h=0.1$ to estimate $y(0.2)$. [3 marks]

**Solution.** $y_1=1+0.1(0+1)=1.1$. $y_2=1.1+0.1(0.1+1.1)=1.22$. So $y(0.2)\approx1.22$.
:::

:::warning Common traps
- **The constant of integration** added too late, or forgotten on one side only.
- **Wrong integrating factor:** it is $e^{\int P\,dx}$ for the equation written as $y'+Py=Q$; rearrange first.
- **Interval of validity** of a series after substitution.
- **L'Hôpital on a limit that is not $\dfrac00$ or $\dfrac\infty\infty$.** Check the form at each stage.
- **Euler's method:** using the new $x$ with the old $y$ in the slope.
:::

:::terms
- Maclaurin series | chuỗi Maclaurin
- L'Hôpital's rule | quy tắc L'Hôpital
- differential equation | phương trình vi phân
- separable, homogeneous | tách biến, đẳng cấp
- linear, integrating factor | tuyến tính, thừa số tích phân
- general solution, particular solution | nghiệm tổng quát, nghiệm riêng
- Euler's method, step length | phương pháp Euler, bước nhảy
:::

## Similar exercises

:::exercise A cosine series
Find the Maclaurin series of $\cos2x$ up to the term in $x^4$. [3 marks]

::hint
**What you need:** substitute $2x$ into $\cos x=1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\dots$

::solution
$1-\dfrac{(2x)^2}{2}+\dfrac{(2x)^4}{24}=1-2x^2+\dfrac{2x^4}{3}$.
:::

:::exercise An exponential series
Find the first four terms of the Maclaurin series of $e^{x^2}$. [3 marks]

::hint
**What you need:** substitute $x^2$ into $e^x$.

::solution
$1+x^2+\dfrac{x^4}{2}+\dfrac{x^6}{6}$.
:::

:::exercise A limit
Find $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$. [4 marks]

::hint
**What you need:** $\sin x=x-\dfrac{x^3}{6}+\dots$

::solution
$\dfrac{\frac{x^3}{6}-\dots}{x^3}\to\dfrac16$.
:::

:::exercise Separable with arctan
Solve $\dfrac{dy}{dx}=2x\left(1+y^2\right)$, given that $y=0$ when $x=0$. [5 marks]

::hint
**What you need:** $\displaystyle\int\frac{dy}{1+y^2}=\arctan y$.

::solution
$\arctan y=x^2+C$, and $C=0$, so $y=\tan\left(x^2\right)$.
:::

:::exercise Integrating factor
Solve $\dfrac{dy}{dx}-y=e^{2x}$, given that $y=0$ when $x=0$. [5 marks]

::hint
**What you need:** the integrating factor is $e^{-x}$.

::solution
$\dfrac{d}{dx}\left(ye^{-x}\right)=e^x$, so $ye^{-x}=e^x+C$; $C=-1$. Hence $y=e^{2x}-e^x$.
:::

## Application exercises

:::exercise A mixing tank
A tank contains $Q$ kg of salt at time $t$ minutes. Brine flows in and the mixture flows out so that $\dfrac{dQ}{dt}=2-\dfrac{Q}{50}$, and $Q=0$ when $t=0$.
(a) Solve the differential equation. [5 marks]
(b) Describe the amount of salt in the long run. [1 mark]

::hint
**What you need:** write $\dfrac{dQ}{dt}+\dfrac{Q}{50}=2$; the integrating factor is $e^{t/50}$.

::solution
(a) $\dfrac{d}{dt}\left(Qe^{t/50}\right)=2e^{t/50}$, so $Qe^{t/50}=100e^{t/50}+C$ and $C=-100$. Hence $Q=100\left(1-e^{-t/50}\right)$.

(b) $Q\to100$ kg.
:::

:::exercise An integral from a series
Use the first two nonzero terms of the Maclaurin series of $\sin\left(x^2\right)$ to estimate $\displaystyle\int_0^1\sin\left(x^2\right)dx$. [4 marks]

::hint
**What you need:** $\sin\left(x^2\right)=x^2-\dfrac{x^6}{6}+\dots$; integrate term by term.

::solution
$\displaystyle\int_0^1\left(x^2-\frac{x^6}{6}\right)dx=\frac13-\frac{1}{42}=\frac{13}{42}\approx0.310$. (A GDC gives $0.310$ as well.)
:::

:::exercise Euler with a GDC table
For $\dfrac{dy}{dx}=\sin x+y$ with $y(0)=1$, use Euler's method with $h=0.2$ to estimate $y(0.4)$. [4 marks]

::hint
**What you need:** two steps; radian mode.

::solution
$y_1=1+0.2(\sin0+1)=1.2$. $y_2=1.2+0.2(\sin0.2+1.2)\approx1.48$.
:::

:::exercise Challenge: a series by differentiation
Find the Maclaurin series of $\tan x$ up to the term in $x^3$ by differentiating. [5 marks]

::hint
**What you need:** $f'=\sec^2x$ and $f''=2\sec^2x\tan x$, $f'''=2\sec^4x+4\sec^2x\tan^2x$.

::solution
$f(0)=0$, $f'(0)=1$, $f''(0)=0$, $f'''(0)=2$. So $\tan x=x+\dfrac{2}{3!}x^3+\dots=x+\dfrac{x^3}{3}+\dots$
:::

:::quiz
::mc
What is the coefficient of $x^2$ in the Maclaurin series of $e^{3x}$?
A. $3$
B. $\dfrac92$
C. $9$
D. $\dfrac32$
::key B
$\dfrac{(3x)^2}{2!}=\dfrac92x^2$.

::mc
What is the integrating factor for $\dfrac{dy}{dx}+3y=x$?
A. $e^{3x}$
B. $e^{x}$
C. $3x$
D. $e^{-3x}$
::key A
$e^{\int3\,dx}=e^{3x}$.

::mc
What is $\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{x}$?
A. $1$
B. $0$
C. $e^2$
D. $2$
::key D
L'Hôpital: $\displaystyle\lim_{x\to0}2e^{2x}=2$.

::mc
For $\dfrac{dy}{dx}=2x$ with $y(0)=1$, one Euler step with $h=0.5$ gives which estimate of $y(0.5)$?
A. $1.25$
B. $2$
C. $1$
D. $1.5$
::key C
The slope at $x=0$ is $0$, so $y(0.5)\approx1+0.5\cdot0=1$. (The exact value is $1.25$.)

::tf
Consider $\dfrac{dy}{dx}=\dfrac yx$, $x>0$.
a) The equation is separable.
b) The general solution is $y=Cx$.
c) The solution with $y(1)=2$ is $y=2x$.
d) The solution with $y(1)=3$ passes through $(2,5)$.
::key T T T F
a) True. b) True: $\ln|y|=\ln x+c$. c) True. d) False: $y=3x$ gives $6$ at $x=2$.

::sa
Find the coefficient of $x^2$ in the Maclaurin series of $\ln(1+x)$.
::key -0.5
$\ln(1+x)=x-\dfrac{x^2}{2}+\dots$

::sa
For $\dfrac{dy}{dx}=x+y$ with $y(0)=1$, Euler's method with $h=0.1$ gives $y(0.2)\approx$ ?
::key 1.22
$1\to1.1\to1.22$, as in the example above.
:::
