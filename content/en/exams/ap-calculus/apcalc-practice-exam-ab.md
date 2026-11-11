---
title: AP Calculus AB practice exam: multiple choice
description: A full AP Calculus AB multiple-choice section in the 2027 format: 42 questions, 29 without and 13 with a calculator, marked instantly with solutions.
minutes: 100
type: test
---

This is a full multiple-choice section in the format of the AP Calculus AB exam from May 2027. All questions are written by Lemonmath; they are not real AP questions, but they follow the official units and question styles. The multiple-choice section is half of the AP score; for the other half, practise with released free-response questions and the guide [AP Calculus free-response types and how to write them](lesson:apcalc-frq-strategies).

## How to take this exam

| | Part A | Part B |
|---|---|---|
| Questions | 29 | 13 |
| Time | 62 minutes | 38 minutes |
| Calculator | not allowed | graphing calculator (Desmos or your own) |

1. Set a timer for 62 minutes and do Part A without a calculator. Submit it to see your score.
2. Then do Part B in 38 minutes with a graphing calculator, in radian mode.
3. Answers in Part B are given to three decimal places, as on the real exam.
4. Afterwards, read the solution of every question you missed and add it to your error log.

## Part A: no calculator

:::quiz test
::mc
What is $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$?
A. $0$
B. $3$
C. $6$
D. nonexistent
::key C
$\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. Option D treats $\dfrac00$ as undefined instead of simplifying.

::mc
What is $\displaystyle\lim_{x\to\infty}\frac{3x^2-x}{5-2x^2}$?
A. $\dfrac35$
B. $-\dfrac32$
C. $0$
D. $\dfrac32$
::key B
Equal degrees: the ratio of the leading coefficients is $\dfrac{3}{-2}$.

::mc
Let $f(x)=x^2+1$ for $x<2$ and $f(x)=kx-1$ for $x\ge2$. For what value of $k$ is $f$ continuous at $x=2$?
A. $2$
B. $\dfrac52$
C. $4$
D. $3$
::key D
The left limit is $5$, so $2k-1=5$ and $k=3$. Option B solves $2k=5$.

::mc
What is $\displaystyle\lim_{h\to0}\frac{\sin\left(\frac\pi3+h\right)-\sin\frac\pi3}{h}$?
A. $\dfrac12$
B. $\dfrac{\sqrt3}{2}$
C. $0$
D. $-\dfrac12$
::key A
It is the derivative of $\sin x$ at $\dfrac\pi3$: $\cos\dfrac\pi3=\dfrac12$.

::mc
If $f(x)=x^3e^{2x}$, then $f'(x)=$
A. $6x^2e^{2x}$
B. $3x^2e^{2x}$
C. $x^2e^{2x}(3+2x)$
D. $x^2e^{2x}(3+x)$
::key C
Product rule: $3x^2e^{2x}+x^3\cdot2e^{2x}=x^2e^{2x}(3+2x)$. Option A multiplies the two derivatives.

::mc
If $f(x)=\ln\left(x^2+1\right)$, what is $f'(1)$?
A. $\dfrac12$
B. $1$
C. $2$
D. $\ln2$
::key B
$f'(x)=\dfrac{2x}{x^2+1}$, so $f'(1)=1$.

::mc
If $y=\tan(3x)$, what is $\dfrac{dy}{dx}$ at $x=0$?
A. $0$
B. $1$
C. $9$
D. $3$
::key D
$\dfrac{dy}{dx}=3\sec^2(3x)$, which is $3$ at $x=0$.

::mc
Functions $f$ and $g$ satisfy $g(2)=5$, $g'(2)=4$, $f'(2)=-1$ and $f'(5)=2$. If $h(x)=f(g(x))$, what is $h'(2)$?
A. $8$
B. $-4$
C. $6$
D. $2$
::key A
$h'(2)=f'(g(2))\cdot g'(2)=f'(5)\cdot4=8$. Option B uses $f'(2)$ instead of $f'(5)$.

::mc
What is the slope of the curve $x^2+xy+y^2=7$ at the point $(1,2)$?
A. $-\dfrac54$
B. $-\dfrac45$
C. $\dfrac45$
D. $-4$
::key B
$2x+y+xy'+2yy'=0$. At $(1,2)$: $4+5y'=0$, so $y'=-\dfrac45$.

::mc
Let $f(x)=x^3+x$ and let $g$ be the inverse function of $f$. What is $g'(2)$?
A. $\dfrac{1}{13}$
B. $4$
C. $\dfrac14$
D. $\dfrac12$
::key C
$f(1)=2$ and $f'(1)=4$, so $g'(2)=\dfrac{1}{f'(1)}=\dfrac14$. Option A uses $f'(2)=13$.

::mc
$\dfrac{d}{dx}\arctan(2x)=$
A. $\dfrac{1}{1+4x^2}$
B. $\dfrac{2}{1+2x^2}$
C. $\dfrac{2}{\sqrt{1-4x^2}}$
D. $\dfrac{2}{1+4x^2}$
::key D
$\dfrac{1}{1+(2x)^2}\cdot2$. Option A forgets the chain rule; option C is the derivative of $\arcsin(2x)$.

::mc
A particle moves along the $x$-axis with position $x(t)=t^3-6t^2+9t$. At which times is the particle at rest?
A. $t=1$ only
B. $t=2$ only
C. $t=1$ and $t=3$
D. $t=0$ and $t=3$
::key C
$v(t)=3t^2-12t+9=3(t-1)(t-3)=0$. Option B is where the acceleration is $0$; option D is where the position is $0$.

::mc
The radius of a circle increases at $2$ centimeters per second. How fast is the area increasing when the radius is $5$ centimeters, in square centimeters per second?
A. $20\pi$
B. $10\pi$
C. $25\pi$
D. $4\pi$
::key A
$\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}=2\pi(5)(2)=20\pi$.

::mc
Using the line tangent to $y=\sqrt x$ at $x=9$, the approximation of $\sqrt{9.3}$ is
A. $3.1$
B. $3.03$
C. $3.5$
D. $3.05$
::key D
$3+\dfrac{1}{6}(0.3)=3.05$.

::mc
What is $\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{x}$?
A. $1$
B. $3$
C. $0$
D. $e^3$
::key B
Form $\dfrac00$; L'Hôpital's rule gives $\displaystyle\lim_{x\to0}3e^{3x}=3$.

::mc
For $f(x)=x^2$ on $[1,3]$, what value $c$ satisfies the conclusion of the mean value theorem?
A. $2$
B. $\sqrt5$
C. $4$
D. $\sqrt3$
::key A
$\dfrac{9-1}{3-1}=4=2c$, so $c=2$. Option C is the slope, not $c$.

::mc
The derivative of $f$ is $f'(x)=(x-2)^2(x+1)$. At which values of $x$ does $f$ have a relative minimum?
A. $x=2$ only
B. $x=-1$ and $x=2$
C. none
D. $x=-1$ only
::key D
$f'$ changes from negative to positive at $x=-1$; at $x=2$ it does not change sign.

::mc
At what value of $x$ does the graph of $f(x)=x^3-6x^2+5$ have a point of inflection?
A. $0$
B. $4$
C. $2$
D. $-2$
::key C
$f''(x)=6x-12$ changes sign at $x=2$. Option B is a critical point.

::mc
What is the absolute maximum value of $f(x)=x^3-3x$ on $[0,2]$?
A. $0$
B. $2$
C. $-2$
D. $1$
::key B
Candidates: $f(0)=0$, $f(1)=-2$, $f(2)=2$.

::mc
A twice-differentiable function $f$ has $f'(3)=0$ and $f''(3)=-2$. Which statement must be true?
A. $f$ has a relative maximum at $x=3$.
B. $f$ has a relative minimum at $x=3$.
C. $f$ has a point of inflection at $x=3$.
D. $f$ is decreasing at $x=3$.
::key A
Second derivative test: $f'(3)=0$ and $f''(3)<0$.

::mc
What is $\displaystyle\int_0^2\left(3x^2-4x\right)dx$?
A. $4$
B. $-4$
C. $8$
D. $0$
::key D
$\left[x^3-2x^2\right]_0^2=8-8=0$.

::mc
What is $\displaystyle\int_0^{\sqrt5}x\sqrt{x^2+4}\,dx$?
A. $\dfrac{38}{3}$
B. $\dfrac{19}{3}$
C. $\dfrac{19}{6}$
D. $\dfrac{26}{3}$
::key B
$u=x^2+4$ from $4$ to $9$: $\dfrac12\cdot\dfrac23\left(27-8\right)=\dfrac{19}{3}$. Option A forgets the $\dfrac12$.

::mc
$\dfrac{d}{dx}\displaystyle\int_1^{x^3}\cos t\,dt=$
A. $\cos\left(x^3\right)$
B. $3x^2\cos\left(x^3\right)-\cos1$
C. $3x^2\cos\left(x^3\right)$
D. $\sin\left(x^3\right)-\sin1$
::key C
FTC with the chain rule: $\cos\left(x^3\right)\cdot3x^2$. The constant lower limit contributes nothing.

::mc
A function $f$ has $f(0)=4$, $f(2)=1$, $f(5)=3$ and $f(6)=2$. What is the left Riemann sum for $\displaystyle\int_0^6f(x)\,dx$ using the three subintervals $[0,2]$, $[2,5]$, $[5,6]$?
A. $13$
B. $13.5$
C. $11$
D. $14$
::key D
$2\cdot4+3\cdot1+1\cdot3=14$. Option A is the right sum, option B the trapezoidal sum, option C assumes equal widths.

::mc
What is $\displaystyle\int_1^e\frac{\ln x}{x}\,dx$?
A. $\dfrac12$
B. $1$
C. $e$
D. $\dfrac{e^2}{2}$
::key A
$u=\ln x$ from $0$ to $1$: $\left[\dfrac{u^2}{2}\right]_0^1=\dfrac12$.

::mc
If $\dfrac{dy}{dx}=3y$ and $y(0)=2$, what is $y(1)$?
A. $2e^3$
B. $e^6$
C. $6e$
D. $2+e^3$
::key A
$y=2e^{3x}$, so $y(1)=2e^3$.

::mc
Which function is the solution of $\dfrac{dy}{dx}=\dfrac xy$ with $y(0)=3$?
A. $y=\sqrt{x^2+3}$
B. $y=x+3$
C. $y=\sqrt{x^2+9}$
D. $y=3e^{x^2/2}$
::key C
$y\,dy=x\,dx$ gives $y^2=x^2+C$; $C=9$ and $y>0$. Option A forgets to square $3$.

::mc
What is the area of the region bounded by $y=x^2$ and $y=4$?
A. $\dfrac{16}{3}$
B. $\dfrac{32}{3}$
C. $16$
D. $\dfrac83$
::key B
$\displaystyle\int_{-2}^2\left(4-x^2\right)dx=16-\frac{16}{3}=\frac{32}{3}$. Option A uses only $0\le x\le2$.

::mc
What is the average value of $\cos x$ on $\left[0,\dfrac\pi2\right]$?
A. $1$
B. $\dfrac1\pi$
C. $\dfrac\pi2$
D. $\dfrac2\pi$
::key D
$\dfrac{1}{\pi/2}\displaystyle\int_0^{\pi/2}\cos x\,dx=\dfrac2\pi\cdot1$. Option A forgets to divide by the length.
:::

## Part B: graphing calculator

:::quiz test
::mc
Water flows into a tank at a rate of $R(t)=10+5\sin\left(\dfrac t2\right)$ liters per minute. How many liters flow in from $t=0$ to $t=10$?
A. $97.603$
B. $107.163$
C. $110.000$
D. $5.205$
::key B
$\displaystyle\int_0^{10}R(t)\,dt\approx107.163$. Option D is $R(10)$, a rate, not an amount.

::mc
At what value of $x$ does the graph of $f(x)=x^3-2x-5$ cross the $x$-axis?
A. $2.095$
B. $1.710$
C. $-5.000$
D. $2.000$
::key A
Solve $f(x)=0$ on the calculator: $x\approx2.095$, the only real root.

::mc
A particle moves along a line with velocity $v(t)=\cos\left(t^2\right)$ for $0\le t\le2$. What is the total distance traveled?
A. $0.461$
B. $1.253$
C. $1.493$
D. $0.977$
::key C
$\displaystyle\int_0^2\left|\cos\left(t^2\right)\right|dt\approx1.493$. Option A is the displacement $\displaystyle\int_0^2v(t)\,dt$.

::mc
A function $f$ has $f(0)=1$ and $f'(x)=\sqrt{1+x^3}$. What is $f(2)$?
A. $3.000$
B. $3.241$
C. $5.241$
D. $4.241$
::key D
$f(2)=1+\displaystyle\int_0^2\sqrt{1+x^3}\,dx\approx1+3.241$. Option B forgets $f(0)$.

::mc
Let $g(x)=\ln\left(1+x^2\right)\cos x$. What is $g'(2)$?
A. $-1.796$
B. $-0.670$
C. $1.461$
D. $-0.333$
::key A
Numerical derivative at $x=2$: $g'(2)\approx-1.796$. Option B is $g(2)$.

::mc
The region under $y=e^{-x}$ for $0\le x\le2$ is revolved around the $x$-axis. What is the volume?
A. $0.865$
B. $2.716$
C. $1.542$
D. $0.491$
::key C
$\pi\displaystyle\int_0^2e^{-2x}\,dx\approx1.542$. Option B uses $\pi\displaystyle\int_0^2e^{-x}\,dx$ (radius not squared).

::mc
What is the area of the region enclosed by $y=\cos x$ and $y=x^2$?
A. $0.824$
B. $1.095$
C. $0.547$
D. $1.648$
::key B
The curves meet at $x=\pm0.824$; $\displaystyle\int_{-0.824}^{0.824}\left(\cos x-x^2\right)dx\approx1.095$. Option C is half of the region.

::mc
What is the average value of $f(x)=\ln(x+1)$ on $[0,3]$?
A. $2.545$
B. $1.386$
C. $0.462$
D. $0.848$
::key D
$\dfrac13\displaystyle\int_0^3\ln(x+1)\,dx\approx0.848$. Option A is the integral; option C is the average rate of change.

::mc
Let $f(x)=\arctan x+x^2$. Using the line tangent to the graph of $f$ at $x=1$, what is the approximation of $f(1.1)$?
A. $2.035$
B. $2.043$
C. $1.785$
D. $2.500$
::key A
$f(1)\approx1.785$ and $f'(1)=\dfrac12+2=2.5$, so $f(1.1)\approx1.785+0.25=2.035$. Option B is the exact value.

::mc
For $f(x)=\sqrt x$ on $[1,4]$, what value $c$ satisfies the conclusion of the mean value theorem?
A. $2.5$
B. $2.25$
C. $2$
D. $1.5$
::key B
$\dfrac{2-1}{4-1}=\dfrac13=\dfrac{1}{2\sqrt c}$, so $\sqrt c=1.5$ and $c=2.25$. Option D is $\sqrt c$.

::mc
The population of a town changes at a rate of $P'(t)=50-4te^{0.1t}$ people per year for $0\le t\le10$. At what time is the population greatest?
A. $t=0$
B. $t=10$
C. $t=3.162$
D. $t=6.515$
::key D
$P'$ changes from positive to negative only at $t\approx6.515$, so this is where the population is greatest.

::mc
A particle moves along a line with velocity $v(t)=2\sin t+\cos(2t)$. What is the total distance traveled from $t=0$ to $t=4$?
A. $3.802$
B. $1.659$
C. $4.602$
D. $3.516$
::key C
$v$ changes sign at $t\approx3.516$; $\displaystyle\int_0^4|v(t)|\,dt\approx4.602$. Option A is the displacement.

::mc
A particle has velocity $v(t)=\ln\left(t^2+1\right)-1$. At $t=1.5$, which statement is true?
A. The particle is moving left and slowing down.
B. The particle is moving right and slowing down.
C. The particle is moving left and speeding up.
D. The particle is moving right and speeding up.
::key D
$v(1.5)\approx0.179>0$ and $a(1.5)=\dfrac{3}{3.25}\approx0.923>0$: same signs, so it moves right and speeds up.
:::

## After the exam

Part A is marked out of 29 and Part B out of 13. The table shows which lesson to revise for each question you missed. As a rough guide, 30 or more correct out of 42 means your multiple-choice section is in good shape; below 20, go back to the lessons before taking another full exam.

| Question | Lesson |
|---|---|
| 1 | [Limits and continuity](lesson:apcalc-limits-continuity) |
| 2 | [Limits and continuity](lesson:apcalc-limits-continuity) |
| 3 | [Limits and continuity](lesson:apcalc-limits-continuity) |
| 4 | [The derivative and differentiation rules](lesson:apcalc-differentiation-rules) |
| 5 | [The derivative and differentiation rules](lesson:apcalc-differentiation-rules) |
| 6 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 7 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 8 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 9 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 10 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 11 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 12 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 13 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 14 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 15 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 16 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 17 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 18 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 19 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 20 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 21 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 22 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 23 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 24 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 25 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 26 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 27 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 28 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 29 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 30 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 31 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 32 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 33 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 34 | [The derivative and differentiation rules](lesson:apcalc-differentiation-rules) |
| 35 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 36 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 37 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 38 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 39 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 40 | [Mean value theorem, extrema and curve analysis](lesson:apcalc-analytical-applications) |
| 41 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 42 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |

Review with the methods in [Revision that works](lesson:evidence-based-revision) before your next full exam.
