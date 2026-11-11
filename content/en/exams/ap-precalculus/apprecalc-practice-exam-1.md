---
title: AP Precalculus practice exam 1
description: A full AP Precalculus practice exam in the 2027 format: 42 multiple-choice questions marked instantly and 4 free-response questions with scoring notes.
minutes: 175
type: test
---

This practice exam follows the AP Precalculus format from May 2027. All questions are written by Lemonmath; they are not real AP questions, but they cover Units 1–3 in the official proportions and question styles.

## How to take this exam

| | Section I, Part A | Section I, Part B | Section II, Part A | Section II, Part B |
|---|---|---|---|---|
| Questions | 29 multiple choice | 13 multiple choice | FRQ 1 and 2 | FRQ 3 and 4 |
| Time | 65 minutes | 40 minutes | 35 minutes | 35 minutes |
| Calculator | not allowed | graphing calculator | graphing calculator | not allowed |

1. Do each part with a timer and without looking at the solutions. Submit each multiple-choice part to see your score.
2. In calculator parts, use radian mode and give decimals accurate to three places after the decimal point.
3. Write the free-response answers on paper, then compare with the solutions point by point, using the guide [The four free-response types and how to score](lesson:apprecalc-frq-strategies).

## Section I, Part A: no calculator

:::quiz test
::mc
What is the average rate of change of $f(x)=x^3-2x$ on the interval $[-1,2]$?
A. $3$
B. $-1$
C. $1$
D. $2$
::key C
$f(2)=4$ and $f(-1)=1$, so the average rate of change is $\dfrac{4-1}{2-(-1)}=1$. Option A forgets to divide by the length $3$.

::mc
Which statement describes the end behavior of $p(x)=-2x^4+x^3+5$?
A. $\lim\limits_{x\to\infty}p(x)=-\infty$ and $\lim\limits_{x\to-\infty}p(x)=-\infty$
B. $\lim\limits_{x\to\infty}p(x)=\infty$ and $\lim\limits_{x\to-\infty}p(x)=\infty$
C. $\lim\limits_{x\to\infty}p(x)=-\infty$ and $\lim\limits_{x\to-\infty}p(x)=\infty$
D. $\lim\limits_{x\to\infty}p(x)=\infty$ and $\lim\limits_{x\to-\infty}p(x)=-\infty$
::key A
The leading term $-2x^4$ has even degree and a negative coefficient, so $p(x)\to-\infty$ at both ends.

::mc
The polynomial $p(x)=(x-2)^2(x+1)(x+3)$ is graphed in the $xy$-plane. What happens at $x=2$?
A. The graph crosses the $x$-axis.
B. The graph has a vertical asymptote.
C. The graph has a hole.
D. The graph touches the $x$-axis but does not cross it.
::key D
The zero $x=2$ has even multiplicity $2$, so $p(x)$ does not change sign there: the graph touches the axis and turns back.

::mc
The table gives values of a polynomial $p$: $p(0)=1$, $p(1)=2$, $p(2)=9$, $p(3)=28$, $p(4)=65$. What is the least possible degree of $p$?
A. $2$
B. $3$
C. $4$
D. $1$
::key B
First differences $1,7,19,37$; second differences $6,12,18$; third differences $6,6$ are constant, so the degree is $3$.

::mc
A function $f$ has $f(0)=2$, $f(1)=7$, $f(2)=10$ and $f(3)=11$. Based on these values, on $[0,3]$ the function $f$ is
A. increasing and concave up
B. decreasing and concave down
C. decreasing and concave up
D. increasing and concave down
::key D
The values rise, and the rates over successive intervals $5,3,1$ decrease: $f$ increases at a decreasing rate, so it is concave down.

::mc
A polynomial with real coefficients has zeros $3$ and $2+i$. What is the least possible degree of the polynomial?
A. $3$
B. $2$
C. $4$
D. $1$
::key A
Non-real zeros of a real polynomial come in conjugate pairs, so $2-i$ is also a zero: at least $3$ zeros.

::mc
What is the equation of the vertical asymptote of $r(x)=\dfrac{x^2-9}{x^2+x-6}$?
A. $x=-3$
B. $x=3$
C. $x=2$
D. $x=-2$
::key C
$r(x)=\dfrac{(x-3)(x+3)}{(x+3)(x-2)}$. The factor $x+3$ cancels, giving a hole at $x=-3$; the asymptote is $x=2$.

::mc
What is the horizontal asymptote of $r(x)=\dfrac{6x^2+1}{3x^2-x}$?
A. $y=6$
B. $y=2$
C. $y=0$
D. There is no horizontal asymptote.
::key B
The degrees are equal, so the asymptote is the ratio of leading coefficients, $\dfrac63=2$.

::mc
How is the graph of $g(x)=-f(x)+3$ obtained from the graph of $f$?
A. Reflect over the $x$-axis, then shift up $3$ units
B. Reflect over the $y$-axis, then shift up $3$ units
C. Shift up $3$ units, then reflect over the $x$-axis
D. Reflect over the $x$-axis, then shift right $3$ units
::key A
$-f(x)$ reflects the graph over the $x$-axis, and adding $3$ afterwards moves it up. Option C would give $-f(x)-3$.

::mc
What is the solution set of $\dfrac{x-1}{x+3}\le0$?
A. $-3\le x\le1$
B. $x<-3$ or $x\ge1$
C. $x\le1$
D. $-3<x\le1$
::key D
The sign changes at $x=-3$ and $x=1$; the quotient is negative between them, zero at $x=1$, and undefined at $x=-3$.

::mc
An arithmetic sequence has $a_1=7$ and common difference $-3$. What is $a_{10}$?
A. $-23$
B. $-20$
C. $-17$
D. $37$
::key B
$a_{10}=7+9(-3)=-20$. Option A uses $10$ steps instead of $9$.

::mc
A geometric sequence has $g_2=6$ and $g_5=162$. What is $g_1$?
A. $3$
B. $18$
C. $2$
D. $1$
::key C
$r^3=\dfrac{162}{6}=27$, so $r=3$ and $g_1=\dfrac{6}{3}=2$.

::mc
An exponential function $f(x)=ab^x$ passes through $(0,4)$ and $(2,36)$. What is $f(3)$?
A. $108$
B. $72$
C. $81$
D. $144$
::key A
$a=4$ and $4b^2=36$, so $b=3$ and $f(3)=4\cdot27=108$.

::mc
Which expression is equivalent to $5\cdot4^{x/2}$?
A. $5\cdot8^x$
B. $10\cdot4^x$
C. $5\cdot16^x$
D. $5\cdot2^x$
::key D
$4^{x/2}=\left(4^{1/2}\right)^x=2^x$.

::mc
A quantity is modelled by $Q(t)=300(0.92)^t$. Which statement is true?
A. $Q$ decreases by $92\%$ per unit of $t$.
B. $Q$ decreases by $0.92$ per unit of $t$.
C. $Q$ decreases by $8\%$ per unit of $t$.
D. $Q$ increases by $8\%$ per unit of $t$.
::key C
The factor $0.92=1-0.08$ keeps $92\%$ each period, a decrease of $8\%$.

::mc
What is the value of $\log_2 48-\log_2 3$?
A. $4$
B. $16$
C. $\log_2 45$
D. $8$
::key A
$\log_2\dfrac{48}{3}=\log_2 16=4$. Option A is the argument, not the logarithm.

::mc
What is the solution of $3^{2x}=81$?
A. $x=4$
B. $x=2$
C. $x=3$
D. $x=1$
::key B
$81=3^4$, so $2x=4$ and $x=2$.

::mc
If $f(x)=e^x+2$, what is $f^{-1}(x)$?
A. $\ln x-2$
B. $\ln(x+2)$
C. $e^{x-2}$
D. $\ln(x-2)$
::key D
Swap: $x=e^y+2$, so $e^y=x-2$ and $y=\ln(x-2)$.

::mc
On a semi-log plot, data lie on the line $\log y=2-0.5x$. The exponential model $y=ab^x$ for the data has $a$ equal to
A. $100$
B. $2$
C. $10$
D. $-0.5$
::key A
$y=10^{2-0.5x}=10^2\cdot\left(10^{-0.5}\right)^x$, so $a=100$.

::mc
What is the period of $y=4\sin\dfrac{\pi x}{5}+1$?
A. $5$
B. $\dfrac{2\pi}{5}$
C. $10$
D. $\dfrac{\pi}{5}$
::key C
The period is $\dfrac{2\pi}{\pi/5}=10$.

::mc
What is the value of $\cos\dfrac{4\pi}{3}$?
A. $\dfrac12$
B. $-\dfrac12$
C. $-\dfrac{\sqrt3}{2}$
D. $\dfrac{\sqrt3}{2}$
::key B
$\dfrac{4\pi}{3}$ is in quadrant III with reference angle $\dfrac\pi3$, where cosine is negative: $-\dfrac12$.

::mc
A sinusoidal function has maximum value $9$, minimum value $3$ and period $4$. Which could be the function?
A. $y=6\sin\dfrac{\pi x}{2}+3$
B. $y=3\sin4x+6$
C. $y=3\sin\dfrac{\pi x}{4}+6$
D. $y=3\sin\dfrac{\pi x}{2}+6$
::key D
Midline $\dfrac{9+3}{2}=6$, amplitude $\dfrac{9-3}{2}=3$, and $b=\dfrac{2\pi}{4}=\dfrac\pi2$.

::mc
Which of the following is a vertical asymptote of $y=\tan\dfrac{x}{2}$?
A. $x=\dfrac\pi2$
B. $x=\pi$
C. $x=2\pi$
D. $x=\dfrac\pi4$
::key B
Asymptotes occur where $\dfrac x2=\dfrac\pi2+k\pi$, that is $x=\pi+2k\pi$. At $x=2\pi$ the function is $0$.

::mc
An angle $\theta$ is in quadrant II and $\sin\theta=\dfrac35$. What is $\cos\theta$?
A. $-\dfrac45$
B. $\dfrac45$
C. $-\dfrac35$
D. $\dfrac34$
::key A
$\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}$, and cosine is negative in quadrant II.

::mc
If $\sin\theta=\dfrac35$ and $\cos\theta=-\dfrac45$, what is $\sin2\theta$?
A. $\dfrac{24}{25}$
B. $\dfrac{7}{25}$
C. $-\dfrac{24}{25}$
D. $-\dfrac65$
::key C
$\sin2\theta=2\sin\theta\cos\theta=2\cdot\dfrac35\cdot\left(-\dfrac45\right)=-\dfrac{24}{25}$. Option C is $\cos2\theta$.

::mc
What is the value of $\arctan(-1)$?
A. $\dfrac{3\pi}{4}$
B. $\dfrac{7\pi}{4}$
C. $\dfrac\pi4$
D. $-\dfrac\pi4$
::key D
The range of $\arctan$ is $\left(-\dfrac\pi2,\dfrac\pi2\right)$, and $\tan\left(-\dfrac\pi4\right)=-1$.

::mc
What are all solutions of $\sin x=-\dfrac{\sqrt3}{2}$ on $[0,2\pi)$?
A. $\dfrac{\pi}{3}$ and $\dfrac{2\pi}{3}$
B. $\dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6}$
C. $\dfrac{4\pi}{3}$ and $\dfrac{5\pi}{3}$
D. $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$
::key C
The reference angle is $\dfrac\pi3$ and sine is negative in quadrants III and IV: $\pi+\dfrac\pi3$ and $2\pi-\dfrac\pi3$.

::mc
For $\sin x\ne0$, the expression $\dfrac{1-\cos^2x}{\sin x}$ is equal to
A. $\cos x$
B. $\sin x$
C. $1$
D. $\tan x$
::key B
$1-\cos^2x=\sin^2x$, and $\dfrac{\sin^2x}{\sin x}=\sin x$.

::mc
Which polar coordinates describe the rectangular point $(-3,-3)$?
A. $\left(3\sqrt2,\dfrac{\pi}{4}\right)$
B. $\left(3\sqrt2,\dfrac{3\pi}{4}\right)$
C. $\left(18,\dfrac{5\pi}{4}\right)$
D. $\left(3\sqrt2,\dfrac{5\pi}{4}\right)$
::key D
$r=\sqrt{9+9}=3\sqrt2$, and the point is in quadrant III, so $\theta=\dfrac{5\pi}{4}$. Option A has the same tangent but the wrong quadrant.
:::

## Section I, Part B: graphing calculator

:::quiz test
::mc
What is the greatest real zero of $f(x)=x^3-4x+1$?
A. $1.861$
B. $0.254$
C. $2.115$
D. $1.732$
::key A
Graphing gives three zeros, about $-2.115$, $0.254$ and $1.861$.

::mc
What is the average rate of change of $f(x)=2^x+x$ on $[1,4]$?
A. $17$
B. $6.667$
C. $5.667$
D. $4.250$
::key C
$f(4)=20$ and $f(1)=3$, so $\dfrac{20-3}{3}\approx5.667$.

::mc
What is the positive solution of $\dfrac{2x+1}{x-3}=x$?
A. $-0.193$
B. $5.193$
C. $2.596$
D. $6.193$
::key B
Multiplying gives $x^2-5x-1=0$, so $x=\dfrac{5\pm\sqrt{29}}{2}$; the positive value is about $5.193$.

::mc
What is the minimum value of $r(x)=\dfrac{x^2+4}{x}$ for $x>0$?
A. $2$
B. $5$
C. $8$
D. $4$
::key D
The graph has a minimum at $x=2$, where $r(2)=\dfrac{8}{2}=4$. Option A is the $x$-value, not the minimum value.

::mc
A town's population is $1200$ at $t=0$ and $2000$ at $t=6$ years. For the model $P(t)=ab^t$, what is $b$?
A. $1.089$
B. $1.667$
C. $1.111$
D. $0.918$
::key A
$b^6=\dfrac{2000}{1200}=\dfrac53$, so $b=\left(\dfrac53\right)^{1/6}\approx1.089$.

::mc
An account starts at $5000$ dollars and grows by $3.5\%$ per year. What value of $t$ satisfies $5000(1.035)^t=8000$?
A. $17.143$
B. $13.662$
C. $8.548$
D. $1.600$
::key B
$t=\dfrac{\ln1.6}{\ln1.035}\approx13.662$. Option A adds $3.5\%$ of $5000$ each year, a linear model.

::mc
What is the solution of $\ln(x+1)=2.5$?
A. $12.182$
B. $1.500$
C. $11.182$
D. $0.916$
::key C
$x+1=e^{2.5}\approx12.182$, so $x\approx11.182$.

::mc
What is the solution of $\log_3x=1.7$?
A. $6.473$
B. $5.100$
C. $4.913$
D. $0.483$
::key A
$x=3^{1.7}\approx6.473$. Option A multiplies instead of raising to a power.

::mc
On a semi-log plot (base $10$), data lie on a line with slope $0.12$. By what factor does $y$ change when $x$ increases by $1$?
A. $0.120$
B. $1.127$
C. $1.120$
D. $1.318$
::key D
The slope is $\log b$, so $b=10^{0.12}\approx1.318$. Option C uses base $e$.

::mc
The height of a point on a wheel is $h(t)=10+8\sin\dfrac{\pi t}{6}$. What is the first time $t>0$ when $h(t)=15$?
A. $0.675$
B. $4.711$
C. $1.289$
D. $1.194$
::key C
$\sin\dfrac{\pi t}{6}=0.625$, so $\dfrac{\pi t}{6}=\arcsin0.625\approx0.6751$ and $t\approx1.289$. Option A is the angle, not the time.

::mc
A temperature model is $T(t)=18+7\cos\dfrac{\pi(t-15)}{12}$, with $t$ in hours after midnight. What is $T(10)$?
A. $24.761$
B. $19.812$
C. $16.188$
D. $25.000$
::key B
$T(10)=18+7\cos\left(-\dfrac{5\pi}{12}\right)\approx18+7(0.2588)\approx19.812$, in radian mode.

::mc
What is the solution of $3\cos x=1$ on $[0,\pi]$?
A. $0.340$
B. $1.911$
C. $0.333$
D. $1.231$
::key D
$x=\arccos\dfrac13\approx1.231$, which lies in $[0,\pi]$.

::mc
For the polar function $r=2+3\cos\theta$, what is the average rate of change of $r$ on $\left[0,\dfrac\pi3\right]$?
A. $-1.432$
B. $-1.500$
C. $1.432$
D. $-0.716$
::key A
$r(0)=5$ and $r\left(\dfrac\pi3\right)=3.5$, so $\dfrac{3.5-5}{\pi/3}\approx-1.432$. Option A forgets to divide by $\dfrac\pi3$.
:::

## Section II: free response

Write your answers on paper. Each question is worth $6$ points: $1$ point for each of (A)(i), (A)(ii), (B)(i), (B)(ii), (C)(i) and (C)(ii). Give decimal answers accurate to three places after the decimal point.

### Part A: graphing calculator (35 minutes)

:::exercise Question 1 (6 points): Function concepts
The function $f$ is given by $f(x)=0.5x^3-2x+1$. The increasing function $g$ is defined for all real numbers, and selected values are given in the table.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $g(x)$ | $-7$ | $-2$ | $1$ | $4$ | $9$ | $16$ |

(A) (i) Find the value of $f\big(g(0)\big)$. (ii) Find the value of $g^{-1}(4)$.

(B) (i) Find all values of $x$ for which $f(x)=2$. (ii) Find the average rate of change of $f$ on the interval $[1,3]$.

(C) (i) Describe the end behavior of $f$ using limit notation. (ii) Is $f$ invertible on its whole domain? Give a reason for your answer.

::hint
**What you need:** read $g(0)$ and $g^{-1}(4)$ from the table; solve $f(x)=2$ by graphing; compare two inputs with the same output for (C)(ii).

::solution
(A) (i) From the table, $g(0)=1$, so $f\big(g(0)\big)=f(1)=0.5-2+1=-0.5$.

(ii) Since $g(1)=4$ and $g$ is increasing, the only input with output $4$ is $1$, so $g^{-1}(4)=1$.

(B) (i) Graphing $y=0.5x^3-2x+1$ and $y=2$, or solving $0.5x^3-2x-1=0$, gives three intersections: $x\approx-1.675$, $x\approx-0.539$ and $x\approx2.214$. All three are needed for the point.

(ii) We have $f(3)=13.5-6+1=8.5$ and $f(1)=-0.5$, so the average rate of change is $\dfrac{f(3)-f(1)}{3-1}=\dfrac{8.5-(-0.5)}{2}=4.5$.

(C) (i) The leading term $0.5x^3$ has odd degree and a positive coefficient, so $\displaystyle\lim_{x\to-\infty}f(x)=-\infty$ and $\displaystyle\lim_{x\to\infty}f(x)=\infty$.

(ii) No. For example $f(0)=1$ and $f(2)=4-4+1=1$: two different inputs give the same output, so $f$ is not one-to-one and has no inverse on its whole domain.

So the answers are $-0.5$ and $1$; $x\approx-1.675,\ -0.539,\ 2.214$ and $4.5$; the two limits above, and "not invertible".

**Answer.** (A) $-0.5$; $1$. (B) $-1.675$, $-0.539$, $2.214$; $4.5$. (C) $-\infty$ and $\infty$; no, since $f(0)=f(2)$.
:::

:::exercise Question 2 (6 points): Modeling a non-periodic context
A new app had $12$ thousand users at launch ($t=0$) and $30$ thousand users $4$ months later. The number of users, in thousands, $t$ months after launch is modelled by an exponential function $U(t)=ab^t$.

(A) (i) Find the values of $a$ and $b$. (ii) A linear model $L(t)$ is also proposed through the same two data points. Write an expression for $L(t)$.

(B) (i) At $t=10$ the app actually had $140$ thousand users. Find the residual for the exponential model at $t=10$, and state which of the two models is closer to the actual value. (ii) Use the exponential model to find the time when the app reaches $200$ thousand users.

(C) (i) Interpret the meaning of $b$ in context. (ii) Give one reason why the exponential model may not be appropriate for large values of $t$.

::hint
**What you need:** $a=U(0)$; $b^4=\dfrac{30}{12}$; residual $=$ actual $-$ predicted.

::solution
(A) (i) At $t=0$, $U(0)=a=12$. At $t=4$, $12b^4=30$, so $b^4=2.5$ and $b=2.5^{1/4}\approx1.257$.

(ii) The slope through $(0,12)$ and $(4,30)$ is $\dfrac{30-12}{4}=4.5$, so $L(t)=12+4.5t$.

(B) (i) The exponential model predicts $U(10)=12\cdot2.5^{2.5}\approx118.585$, so the residual is $140-118.585=21.415$ thousand users. The linear model predicts $L(10)=57$, which is much farther from $140$, so the exponential model is closer.

(ii) Solving $12b^t=200$ gives $b^t=\dfrac{50}{3}$ and $t=\dfrac{\ln(50/3)}{\ln b}\approx12.282$ months.

(C) (i) Since $b\approx1.257$, the number of users is multiplied by about $1.257$ each month: it increases by about $25.7\%$ per month.

(ii) The model grows without bound, but the number of users cannot exceed the number of possible customers, so growth must slow down; the model will overestimate the users for large $t$.

So $U(t)=12(1.257)^t$, $L(t)=12+4.5t$, the residual is $21.415$, and $200$ thousand users are reached after about $12.282$ months.

**Answer.** (A) $a=12$, $b\approx1.257$; $L(t)=12+4.5t$. (B) $21.415$, exponential; $t\approx12.282$. (C) about $25.7\%$ growth per month; unbounded growth is not realistic.
:::

### Part B: no calculator (35 minutes)

:::exercise Question 3 (6 points): Modeling a periodic context
The depth of water at a pier varies sinusoidally. The depth is at its lowest, $2$ metres, at $t=1$ hour, and the next highest depth, $10$ metres, occurs at $t=7$ hours.

(A) (i) Find the period, amplitude and midline of the depth function. (ii) Write an expression for the depth $D(t)$, in metres, $t$ hours after midnight.

(B) (i) Find the depth at $t=3$. (ii) On the interval $1<t<4$, is the depth increasing or decreasing, and is its rate of change increasing or decreasing? Give a reason.

(C) (i) Find all times $t$ in $[0,12]$ when the depth is $8$ metres. (ii) A boat needs a depth of at least $8$ metres. For how long during $[0,12]$ can it use the pier?

::hint
**What you need:** lowest to next highest is half a period; at a minimum use $-\cos$.

::solution
(A) (i) From the minimum at $t=1$ to the next maximum at $t=7$ is half a period, so the period is $12$ hours. The amplitude is $\dfrac{10-2}{2}=4$ and the midline is $y=\dfrac{10+2}{2}=6$.

(ii) The function starts at a minimum at $t=1$, so a negative cosine shifted $1$ unit right fits, with $b=\dfrac{2\pi}{12}=\dfrac\pi6$:
$$D(t)=6-4\cos\frac{\pi(t-1)}{6}.$$

(B) (i) $D(3)=6-4\cos\dfrac{\pi}{3}=6-4\cdot\dfrac12=4$ metres.

(ii) On $(1,4)$ the depth rises from the minimum at $t=1$ to the midline at $t=4$, a quarter period later, so it is increasing. In this quarter the graph is concave up, so the depth increases at an increasing rate.

(C) (i) $D(t)=8$ gives $-4\cos\dfrac{\pi(t-1)}{6}=2$, that is $\cos\dfrac{\pi(t-1)}{6}=-\dfrac12$. For $t$ in $[0,12]$, the angle $\dfrac{\pi(t-1)}{6}$ is in $\left[-\dfrac\pi6,\dfrac{11\pi}{6}\right]$, so it equals $\dfrac{2\pi}{3}$ or $\dfrac{4\pi}{3}$, giving $t-1=4$ or $t-1=8$, that is $t=5$ or $t=9$.

(ii) The depth is at least $8$ m between these times, around the maximum at $t=7$, so from $t=5$ to $t=9$: $4$ hours.

So $D(t)=6-4\cos\dfrac{\pi(t-1)}{6}$, $D(3)=4$ m, and the boat can use the pier for $4$ hours.

**Answer.** (A) $12$, $4$, $y=6$; $D(t)=6-4\cos\dfrac{\pi(t-1)}{6}$. (B) $4$ m; increasing at an increasing rate. (C) $t=5$, $t=9$; $4$ hours.
:::

:::exercise Question 4 (6 points): Symbolic manipulations
(A) (i) Solve $\log_2(x+3)+\log_2(x-1)=5$. (ii) Rewrite $e^{2x+\ln3}$ in the form $a\cdot b^x$, where $a$ and $b$ are constants.

(B) (i) Solve $2\sin^2\theta-3\sin\theta+1=0$ for $0\le\theta<2\pi$. (ii) Rewrite $\dfrac{\sin2x}{1+\cos2x}$ as a single trigonometric function of $x$, where defined.

(C) (i) Find the domain of $h(x)=\ln\left(x^2-4x\right)$. (ii) For $x>0$, rewrite $\log\left(1000x^2\right)-\log(10x)$ in the form $c+\log x$.

::hint
**What you need:** product and quotient rules for logs; $e^{\ln3}=3$; factor the quadratic in $\sin\theta$; $\sin2x=2\sin x\cos x$ and $1+\cos2x=2\cos^2x$.

::solution
(A) (i) By the product rule, $\log_2\big[(x+3)(x-1)\big]=5$, so $(x+3)(x-1)=32$, that is $x^2+2x-35=0$ and $(x+7)(x-5)=0$. The value $x=-7$ makes both arguments negative, so it is rejected; $x=5$ gives arguments $8$ and $4$. The solution is $x=5$.

(ii) By the exponent rules, $e^{2x+\ln3}=e^{\ln3}\cdot e^{2x}=3\left(e^2\right)^x$, so $a=3$ and $b=e^2$.

(B) (i) Factoring as a quadratic in $\sin\theta$ gives $(2\sin\theta-1)(\sin\theta-1)=0$. If $\sin\theta=\dfrac12$, then $\theta=\dfrac\pi6$ or $\dfrac{5\pi}{6}$; if $\sin\theta=1$, then $\theta=\dfrac\pi2$.

(ii) Using the double-angle identities, $\dfrac{\sin2x}{1+\cos2x}=\dfrac{2\sin x\cos x}{2\cos^2x}=\dfrac{\sin x}{\cos x}=\tan x$.

(C) (i) The argument must be positive: $x^2-4x=x(x-4)>0$, which holds when $x<0$ or $x>4$.

(ii) By the quotient rule, $\log\left(1000x^2\right)-\log(10x)=\log\dfrac{1000x^2}{10x}=\log(100x)=\log100+\log x=2+\log x$.

So the answers are $x=5$; $3\left(e^2\right)^x$; $\dfrac\pi6,\dfrac\pi2,\dfrac{5\pi}6$; $\tan x$; $x<0$ or $x>4$; $2+\log x$.

**Answer.** (A) $x=5$; $3\left(e^2\right)^x$. (B) $\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6$; $\tan x$. (C) $x<0$ or $x>4$; $2+\log x$.
:::

## After the exam

Section I is marked out of 42 and Section II out of 24. On the real exam the multiple-choice section is $62.5\%$ of the score and the free-response section $37.5\%$; College Board converts the composite to the 1–5 scale, so this practice exam does not give an AP score. Use the table to find which lesson to revise for each multiple-choice question you missed.

| Question | Lesson |
|---|---|
| 1 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 2 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 3 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 4 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 5 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 6 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 7 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 8 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 9 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 10 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 11 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 12 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 13 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 14 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 15 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 16 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 17 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 18 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 19 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 20 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 21 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 22 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 23 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 24 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 25 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 26 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 27 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 28 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 29 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 30 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 31 | [Rates of change and polynomial functions](lesson:apprecalc-rates-polynomials) |
| 32 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 33 | [Rational functions, transformations and modelling](lesson:apprecalc-rational-transformations) |
| 34 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 35 | [Sequences and exponential functions](lesson:apprecalc-sequences-exponentials) |
| 36 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 37 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 38 | [Logarithms, inverses and semi-log models](lesson:apprecalc-logarithms-semilog) |
| 39 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 40 | [Trigonometric functions and periodic models](lesson:apprecalc-trig-functions-modelling) |
| 41 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
| 42 | [Trigonometric equations and polar functions](lesson:apprecalc-trig-equations-polar) |
