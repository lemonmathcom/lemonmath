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
