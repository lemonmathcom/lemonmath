---
title: AP Calculus BC practice exam: multiple choice
description: A full AP Calculus BC multiple-choice section in the 2027 format: 42 questions, 29 without and 13 with a calculator, marked instantly with solutions.
minutes: 100
type: test
---

This is a full multiple-choice section in the format of the AP Calculus BC exam from May 2027. On the real exam about 60% of the score comes from AB topics; this practice exam leans on the BC-only units (27 of the 42 questions: Euler and logistic models, further integration, parametric, vector and polar functions, series), because the AB topics are already covered in the [AB practice exam](lesson:apcalc-practice-exam-ab). All questions are written by Lemonmath; they are not real AP questions, but they follow the official units and question styles. The multiple-choice section is half of the AP score; for the other half, practise with released free-response questions and the guide [AP Calculus free-response types and how to write them](lesson:apcalc-frq-strategies).

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
What is $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$?
A. $0$
B. $\dfrac12$
C. $1$
D. nonexistent
::key B
L'Hôpital twice: $\dfrac{\sin x}{2x}\to\dfrac12$. Or use $\cos x=1-\dfrac{x^2}{2}+\dots$

::mc
What is $\displaystyle\lim_{x\to\infty}xe^{-x}$?
A. $0$
B. $1$
C. $e$
D. $\infty$
::key A
$\dfrac{x}{e^x}$ is $\dfrac\infty\infty$; L'Hôpital gives $\dfrac{1}{e^x}\to0$.

::mc
$\dfrac{d}{dx}\sin^2(3x)=$
A. $2\sin(3x)$
B. $3\sin(6x)$
C. $6\cos(3x)$
D. $2\sin(3x)\cos(3x)$
::key B
$2\sin(3x)\cdot\cos(3x)\cdot3=3\sin(6x)$. Option D forgets the factor $3$ from the inner function.

::mc
If $e^y+xy=e$, what is $\dfrac{dy}{dx}$ at the point $(0,1)$?
A. $-e$
B. $\dfrac1e$
C. $0$
D. $-\dfrac1e$
::key D
$e^yy'+y+xy'=0$. At $(0,1)$: $ey'+1=0$.

::mc
If $f(x)=x^x$ for $x>0$, what is $f'(1)$?
A. $0$
B. $e$
C. $1$
D. $\ln2$
::key C
$\ln f=x\ln x$, so $f'=x^x(\ln x+1)$ and $f'(1)=1$.

::mc
For $\dfrac{dy}{dx}=x-y$ with $y(0)=1$, Euler's method with two steps of size $0.5$ gives which approximation of $y(1)$?
A. $0.5$
B. $0$
C. $0.75$
D. $1$
::key A
$y(0.5)\approx1+0.5(0-1)=0.5$; $y(1)\approx0.5+0.5(0.5-0.5)=0.5$.

::mc
A population satisfies $\dfrac{dP}{dt}=0.4P\left(1-\dfrac{P}{800}\right)$. For what value of $P$ is the population growing fastest?
A. $800$
B. $320$
C. $200$
D. $400$
::key D
Logistic growth is fastest at half the carrying capacity.

::mc
$\displaystyle\int xe^{2x}\,dx=$
A. $\dfrac{x^2}{2}e^{2x}+C$
B. $\left(\dfrac x2-\dfrac14\right)e^{2x}+C$
C. $\left(\dfrac x2+\dfrac14\right)e^{2x}+C$
D. $(2x-1)e^{2x}+C$
::key B
Parts with $u=x$, $dv=e^{2x}dx$: $\dfrac x2e^{2x}-\displaystyle\int\frac12e^{2x}\,dx$.

::mc
What is $\displaystyle\int_2^3\frac{dx}{x^2-1}$?
A. $\dfrac12\ln\dfrac32$
B. $\ln\dfrac32$
C. $\dfrac12\ln\dfrac43$
D. $\ln2$
::key A
$\dfrac{1}{x^2-1}=\dfrac12\left(\dfrac{1}{x-1}-\dfrac{1}{x+1}\right)$, so the integral is $\dfrac12\left[\ln\dfrac{x-1}{x+1}\right]_2^3=\dfrac12\left(\ln\dfrac12-\ln\dfrac13\right)$.

::mc
What is $\displaystyle\int_0^\infty e^{-2x}\,dx$?
A. $\dfrac12$
B. $2$
C. $1$
D. divergent
::key A
$\displaystyle\lim_{b\to\infty}\left[-\frac12e^{-2x}\right]_0^b=\frac12$.

::mc
Which improper integral converges?
A. $\displaystyle\int_1^\infty\frac{dx}{\sqrt x}$
B. $\displaystyle\int_1^\infty\frac{dx}{x}$
C. $\displaystyle\int_0^1\frac{dx}{x^2}$
D. $\displaystyle\int_0^1\frac{dx}{\sqrt x}$
::key D
$\displaystyle\int_0^1x^{-1/2}\,dx=\lim_{a\to0^+}\left[2\sqrt x\right]_a^1=2$. The others diverge.

::mc
For $x=t^2+1$, $y=2t^3$, what is $\dfrac{dy}{dx}$ at $t=1$?
A. $6$
B. $2$
C. $3$
D. $\dfrac13$
::key C
$\dfrac{6t^2}{2t}=3t=3$.

::mc
For $x=e^t$, $y=t^2$, what is $\dfrac{d^2y}{dx^2}$ at $t=0$?
A. $0$
B. $1$
C. $-2$
D. $2$
::key D
$\dfrac{dy}{dx}=2te^{-t}$; $\dfrac{d}{dt}\left(2te^{-t}\right)=(2-2t)e^{-t}$; divide by $e^t$: $(2-2t)e^{-2t}=2$ at $t=0$.

::mc
What is the area of the region enclosed by one petal of $r=\sin(2\theta)$, $0\le\theta\le\dfrac\pi2$?
A. $\dfrac\pi4$
B. $\dfrac\pi8$
C. $\dfrac12$
D. $\dfrac\pi2$
::key B
$\dfrac12\displaystyle\int_0^{\pi/2}\sin^2(2\theta)\,d\theta=\dfrac12\cdot\dfrac\pi4$. Option A forgets the $\dfrac12$.

::mc
A particle has position $\left\langle t^3,t^2\right\rangle$. What is its speed at $t=1$?
A. $5$
B. $\sqrt{13}$
C. $\sqrt2$
D. $\sqrt5$
::key B
$v(1)=\langle3,2\rangle$, speed $\sqrt{9+4}$. Option C uses the position.

::mc
What is $\displaystyle\sum_{n=1}^\infty\left(\frac23\right)^n$?
A. $3$
B. $\dfrac23$
C. $2$
D. $\dfrac32$
::key C
First term $\dfrac23$, ratio $\dfrac23$: $\dfrac{2/3}{1/3}=2$. Option A starts at $n=0$.

::mc
Which series converges conditionally?
A. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{\sqrt n}$
B. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^nn}{n+1}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$
D. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^3}$
::key A
A converges by the alternating series test, but $\displaystyle\sum\frac{1}{\sqrt n}$ diverges. B diverges ($n$th term); C and D converge absolutely.

::mc
What is the radius of convergence of $\displaystyle\sum_{n=1}^\infty\frac{nx^n}{3^n}$?
A. $1$
B. $\dfrac13$
C. $\infty$
D. $3$
::key D
Ratio test: $\dfrac{n+1}{n}\cdot\dfrac{|x|}{3}\to\dfrac{|x|}{3}<1$.

::mc
What is the interval of convergence of $\displaystyle\sum_{n=1}^\infty\frac{(x-1)^n}{n}$?
A. $(0,2)$
B. $[0,2]$
C. $[0,2)$
D. $(0,2]$
::key C
Radius $1$. At $x=0$: alternating harmonic, converges. At $x=2$: harmonic, diverges.

::mc
What is the coefficient of $x^3$ in the Maclaurin series for $e^{2x}$?
A. $\dfrac43$
B. $\dfrac16$
C. $8$
D. $\dfrac23$
::key A
$\dfrac{(2x)^3}{3!}=\dfrac86x^3$. Option C forgets the factorial.

::mc
A function $f$ has $f(2)=1$, $f'(2)=-3$ and $f''(2)=4$. What is the second-degree Taylor polynomial for $f$ about $x=2$?
A. $1-3x+2x^2$
B. $1-3(x-2)+4(x-2)^2$
C. $1-3(x-2)+2(x-2)^2$
D. $1+3(x-2)+2(x-2)^2$
::key C
The coefficient of $(x-2)^2$ is $\dfrac{f''(2)}{2!}=2$. Option B forgets the factorial; option A is centered at $0$.

::mc
What is the coefficient of $x^6$ in the Maclaurin series for $x^2\cos x$?
A. $-\dfrac12$
B. $\dfrac{1}{24}$
C. $-\dfrac{1}{720}$
D. $\dfrac{1}{720}$
::key B
$x^2\left(1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\dots\right)$: the $x^6$ term comes from $\dfrac{x^4}{24}$.

::mc
The sum of $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n^2}$ is approximated by its first three terms. What is the best bound for the error given by the alternating series error bound?
A. $\dfrac19$
B. $\dfrac14$
C. $\dfrac{1}{25}$
D. $\dfrac{1}{16}$
::key D
The first omitted term is the fourth: $\dfrac{1}{4^2}$. Option A is the last term used.

::mc
What is $\displaystyle\lim_{x\to0}\frac{\sin x-x}{x^3}$?
A. $0$
B. $-\dfrac16$
C. $\dfrac16$
D. $-\infty$
::key B
$\sin x-x=-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\dots$, so the quotient tends to $-\dfrac16$.

::mc
What is $\displaystyle\int_0^{\pi/4}\sec^2x\,dx$?
A. $2$
B. $\dfrac\pi4$
C. $\sqrt2$
D. $1$
::key D
$\left[\tan x\right]_0^{\pi/4}=1$.

::mc
Let $F(x)=\displaystyle\int_0^x\left(t^2-4\right)dt$. At what value of $x$ does $F$ have a relative maximum?
A. $2$
B. $0$
C. $-2$
D. $4$
::key C
$F'(x)=x^2-4$ changes from positive to negative at $x=-2$. At $x=2$ it changes from negative to positive: a minimum.

::mc
What is the area of the region in the first quadrant bounded by $y=x$ and $y=x^3$?
A. $\dfrac14$
B. $\dfrac12$
C. $\dfrac34$
D. $\dfrac{1}{12}$
::key A
$\displaystyle\int_0^1\left(x-x^3\right)dx=\frac12-\frac14$.

::mc
A function $f$ has $f(0)=2$, $f(1)=4$ and $f(3)=8$. What is the trapezoidal sum for $\displaystyle\int_0^3f(x)\,dx$ with the subintervals $[0,1]$ and $[1,3]$?
A. $14$
B. $18$
C. $15$
D. $9$
::key C
$1\cdot\dfrac{2+4}{2}+2\cdot\dfrac{4+8}{2}=3+12=15$. Option D assumes both widths are $1$.

::mc
What is the average value of $e^x$ on $[0,\ln3]$?
A. $2$
B. $\dfrac{3}{\ln3}$
C. $\dfrac{2}{\ln3}$
D. $\dfrac{1}{\ln3}$
::key C
$\dfrac{1}{\ln3}\displaystyle\int_0^{\ln3}e^x\,dx=\dfrac{3-1}{\ln3}$. Option A forgets to divide by $\ln3$.
:::

## Part B: graphing calculator

:::quiz test
::mc
What is the area of the region enclosed by the polar curve $r=2+\sin(3\theta)$?
A. $12.566$
B. $28.274$
C. $14.137$
D. $7.069$
::key C
$\dfrac12\displaystyle\int_0^{2\pi}\left(2+\sin3\theta\right)^2d\theta\approx14.137$. Option B forgets the $\dfrac12$.

::mc
What is the length of the path $x=t+\cos t$, $y=\sin t$ for $0\le t\le\pi$?
A. $2.343$
B. $5.657$
C. $3.142$
D. $4.000$
::key A
Speed $\sqrt{(1-\sin t)^2+\cos^2t}=\sqrt{2-2\sin t}$; $\displaystyle\int_0^\pi\sqrt{2-2\sin t}\,dt\approx2.343$. Option B uses $1+\sin t$.

::mc
A particle has velocity $v(t)=\left\langle e^{0.2t},\cos t\right\rangle$ and is at $(1,0)$ at $t=0$. What is the $x$-coordinate of its position at $t=3$?
A. $4.111$
B. $5.111$
C. $1.822$
D. $2.822$
::key B
$x(3)=1+\displaystyle\int_0^3e^{0.2t}\,dt\approx1+4.111$. Option A forgets the starting position; option C is $e^{0.6}$.

::mc
For $\dfrac{dy}{dx}=\sin(xy)$ with $y(0)=1$, Euler's method with two steps of size $0.5$ gives which approximation of $y(1)$?
A. $1.000$
B. $1.479$
C. $1.421$
D. $1.240$
::key D
First step: slope $\sin0=0$, so $y(0.5)\approx1$. Second step: slope $\sin0.5\approx0.479$, so $y(1)\approx1+0.5(0.479)\approx1.240$.

::mc
The region under $y=\sqrt x\,e^{-x}$ for $0\le x\le2$ is revolved around the $x$-axis. What is the volume?
A. $0.713$
B. $0.227$
C. $2.056$
D. $1.427$
::key A
$\pi\displaystyle\int_0^2xe^{-2x}\,dx\approx0.713$. Option B forgets $\pi$; option C does not square the radius.

::mc
What is $\displaystyle\int_0^1e^{-x^2}\,dx$?
A. $0.632$
B. $0.368$
C. $0.747$
D. $0.843$
::key C
Numerical integration gives $0.747$. Option A is $\displaystyle\int_0^1e^{-x}\,dx$.

::mc
What is the slope of the polar curve $r=1+2\sin\theta$ at $\theta=\dfrac\pi6$?
A. $1.732$
B. $0.577$
C. $-5.196$
D. $5.196$
::key D
$r=2$, $r'=2\cos\dfrac\pi6\approx1.732$; $\dfrac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}\approx5.196$. Option A is $\dfrac{dr}{d\theta}$.

::mc
A particle moves with $\dfrac{dx}{dt}=\cos\left(t^2\right)$ and $\dfrac{dy}{dt}=t$ for $0<t<2$. At what time is the particle moving vertically?
A. $1.571$
B. $1.253$
C. $0.785$
D. $1.000$
::key B
$\cos\left(t^2\right)=0$ when $t^2=\dfrac\pi2$, so $t\approx1.253$, where $\dfrac{dy}{dt}\ne0$. Option A is $t^2$.

::mc
A quantity satisfies $\dfrac{dy}{dt}=0.3y$ with $y(0)=50$. At what time does $y$ reach $200$?
A. $4.621$
B. $2.310$
C. $10.000$
D. $13.333$
::key A
$50e^{0.3t}=200$, so $t=\dfrac{\ln4}{0.3}\approx4.621$. Option B uses $\ln2$.

::mc
What is the average value of $f(x)=x\sin x$ on $[0,\pi]$?
A. $3.142$
B. $0.500$
C. $1.820$
D. $1.000$
::key D
$\dfrac1\pi\displaystyle\int_0^\pi x\sin x\,dx=\dfrac\pi\pi=1$. Option A is the integral.

::mc
What is the area of the region inside $r=3\sin\theta$ and outside $r=1+\sin\theta$?
A. $6.283$
B. $3.142$
C. $1.571$
D. $4.712$
::key B
The curves meet where $\sin\theta=\dfrac12$: $\dfrac12\displaystyle\int_{\pi/6}^{5\pi/6}\left(9\sin^2\theta-(1+\sin\theta)^2\right)d\theta\approx3.142$.

::mc
A function $f$ has $f(0)=2$ and $f'(x)=\dfrac{e^x}{1+x^2}$. What is $f(1)$?
A. $1.271$
B. $3.359$
C. $3.271$
D. $2.000$
::key C
$f(1)=2+\displaystyle\int_0^1\frac{e^x}{1+x^2}\,dx\approx2+1.271$. Option A forgets $f(0)$.

::mc
The partial sum $S_{10}=\displaystyle\sum_{n=1}^{10}\frac{1}{n^2}$ is used to approximate $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$. What is $S_{10}$?
A. $1.645$
B. $2.929$
C. $1.540$
D. $1.550$
::key D
Adding the ten terms gives $1.550$. Option A is the full sum $\dfrac{\pi^2}{6}$; option B is $\displaystyle\sum_{n=1}^{10}\frac1n$.
:::

## After the exam

Part A is marked out of 29 and Part B out of 13. The table shows which lesson to revise for each question you missed. As a rough guide, 30 or more correct out of 42 means your multiple-choice section is in good shape; below 20, go back to the lessons before taking another full exam.

| Question | Lesson |
|---|---|
| 1 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 2 | [Related rates, motion and linear approximation](lesson:apcalc-contextual-applications) |
| 3 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 4 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 5 | [Chain rule, implicit and inverse functions](lesson:apcalc-implicit-inverse) |
| 6 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 7 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 8 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 9 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 10 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 11 | [Integration techniques](lesson:apcalc-integration-techniques) |
| 12 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 13 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 14 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 15 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 16 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 17 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 18 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 19 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 20 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 21 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 22 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 23 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 24 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |
| 25 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 26 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 27 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 28 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 29 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 30 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 31 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 32 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 33 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 34 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 35 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 36 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 37 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 38 | [Differential equations and slope fields](lesson:apcalc-differential-equations) |
| 39 | [Area, volume and average value](lesson:apcalc-area-volume) |
| 40 | [Parametric, vector-valued and polar functions](lesson:apcalc-bc-parametric-polar) |
| 41 | [Riemann sums, accumulation and the fundamental theorem](lesson:apcalc-accumulation-ftc) |
| 42 | [Infinite series, Taylor and power series](lesson:apcalc-bc-series) |

Review with the methods in [Revision that works](lesson:evidence-based-revision) before your next full exam.
