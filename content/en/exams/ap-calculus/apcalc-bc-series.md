---
title: Infinite series, Taylor and power series
description: AP Calculus BC Unit 10: convergence tests, absolute and conditional convergence, Taylor polynomials, error bounds and intervals of convergence.
minutes: 50
---

:::goals
- Choose a suitable test and decide whether a series converges or diverges, stating the conditions of the test.
- Tell absolute from conditional convergence.
- Build Taylor polynomials and use them to approximate values.
- Bound the error with the alternating series error bound or the Lagrange error bound.
- Find the radius and interval of convergence of a power series, including the endpoints.
:::

Unit 10 is the largest BC-only unit, roughly a sixth of the BC score, and almost every BC exam has a free-response question on it: build a Taylor polynomial, bound the error, find an interval of convergence. The points go to students who name the test they use and check its conditions in writing. "It converges by the ratio test" with the limit shown earns credit; "it converges" alone does not.

## Convergence: the basic toolkit

:::note Series you must recognize
- **Geometric:** $\displaystyle\sum_{n=0}^\infty ar^n$ converges to $\dfrac{a}{1-r}$ when $|r|<1$, and diverges when $|r|\ge1$.
- **$p$-series:** $\displaystyle\sum_{n=1}^\infty\frac{1}{n^p}$ converges when $p>1$ and diverges when $p\le1$. The **harmonic series** ($p=1$) diverges.
- **$n$th term test:** if $\displaystyle\lim_{n\to\infty}a_n\ne0$, the series diverges. If the limit is $0$, this test says nothing.
:::

:::example A geometric sum
Find $\displaystyle\sum_{n=0}^\infty3\left(\frac25\right)^n$.

**Solution.** Geometric with $a=3$ and $r=\dfrac25$, and $|r|<1$: the sum is $\dfrac{3}{1-2/5}=5$.
:::

:::example Which one converges?
Which series converges?
A. $\displaystyle\sum_{n=1}^\infty\frac{n}{n+1}$
B. $\displaystyle\sum_{n=1}^\infty\frac{1}{\sqrt n}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{3/2}}$
D. $\displaystyle\sum_{n=1}^\infty\left(\frac54\right)^n$

**Solution.** A: the terms tend to $1$, so it diverges by the $n$th term test. B: $p=\dfrac12\le1$, diverges. C: $p=\dfrac32>1$, converges. D: geometric with $r=\dfrac54>1$, diverges. Answer **C**.
:::

## More tests, and absolute versus conditional

- **Integral test:** if $f$ is positive, continuous and decreasing with $f(n)=a_n$, then $\displaystyle\sum a_n$ and $\displaystyle\int_1^\infty f(x)\,dx$ both converge or both diverge.
- **Comparison and limit comparison:** compare with a geometric or $p$-series whose behavior you know.
- **Ratio test:** if $\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=L$, the series converges absolutely when $L<1$ and diverges when $L>1$; $L=1$ gives no conclusion.
- **Alternating series test:** $\displaystyle\sum(-1)^nb_n$ with $b_n>0$ decreasing and $b_n\to0$ converges.

A series **converges absolutely** if $\displaystyle\sum|a_n|$ converges; it **converges conditionally** if it converges but $\displaystyle\sum|a_n|$ diverges.

:::example The ratio test
Show that $\displaystyle\sum_{n=1}^\infty\frac{n^2}{3^n}$ converges.

**Solution.** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{(n+1)^2}{3^{n+1}}\cdot\dfrac{3^n}{n^2}=\dfrac13\left(\dfrac{n+1}{n}\right)^2\to\dfrac13$. Since $\dfrac13<1$, the series converges by the ratio test.
:::

:::example Absolute or conditional?
Classify $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}$ and $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$.

**Solution.** The first converges by the alternating series test ($\dfrac1n$ decreases to $0$), but the series of absolute values is the harmonic series, which diverges: **conditional** convergence. The second has absolute values $\dfrac{1}{n^2}$, a convergent $p$-series: **absolute** convergence.
:::

## Taylor polynomials and error bounds

The Taylor polynomial of degree $n$ for $f$ about $x=a$ is
$$P_n(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots+\frac{f^{(n)}(a)}{n!}(x-a)^n.$$

:::note Maclaurin series to know by heart
$$e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\qquad\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad\cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!},$$
$$\frac{1}{1-x}=\sum_{n=0}^\infty x^n\quad(|x|<1).$$
New series come from these by substituting, multiplying by a power of $x$, differentiating or integrating term by term.
:::

:::example A Taylor polynomial from given derivatives
A function $f$ has $f(0)=2$, $f'(0)=-1$, $f''(0)=4$ and $f'''(0)=-6$. Write the third-degree Taylor polynomial for $f$ about $x=0$ and use it to approximate $f(0.1)$.

**Solution.** $P_3(x)=2-x+\dfrac{4}{2}x^2+\dfrac{-6}{6}x^3=2-x+2x^2-x^3$. So $f(0.1)\approx2-0.1+0.02-0.001=1.919$. Remember to divide by the factorials: this is the most common lost point.
:::

:::theorem Two error bounds
**Alternating series error bound.** If a series satisfies the alternating series test, the error after stopping at a term is at most the absolute value of the first omitted term.

**Lagrange error bound.** If $\left|f^{(n+1)}(x)\right|\le M$ between $a$ and $x$, then $\left|f(x)-P_n(x)\right|\le\dfrac{M}{(n+1)!}|x-a|^{n+1}$.
:::

:::example How good is the approximation?
Approximate $\cos0.5$ with $1-\dfrac{x^2}{2}$ and bound the error.

**Solution.** $1-\dfrac{0.25}{2}=0.875$. The series for $\cos0.5$ alternates with decreasing terms, so the error is at most the next term: $\dfrac{0.5^4}{24}\approx0.0026$. (The true value is about $0.8776$, an error of about $0.0026$.)
:::

## Power series and intervals of convergence

A power series $\displaystyle\sum c_n(x-a)^n$ converges on an interval centered at $a$. Use the ratio test to find the radius, then **test each endpoint separately**: the ratio test gives no information there.

:::example An interval with one endpoint
Find the interval of convergence of $\displaystyle\sum_{n=1}^\infty\frac{(x-2)^n}{n\cdot3^n}$.

**Solution.** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x-2|}{3}\cdot\dfrac{n}{n+1}\to\dfrac{|x-2|}{3}$. This is less than $1$ when $|x-2|<3$, that is $-1<x<5$.

At $x=5$: $\displaystyle\sum\frac1n$, the harmonic series, diverges. At $x=-1$: $\displaystyle\sum\frac{(-1)^n}{n}$ converges by the alternating series test. The interval is $[-1,5)$.
:::

:::warning Common traps
- **Using the $n$th term test to prove convergence.** $a_n\to0$ alone proves nothing: the harmonic series is the counterexample.
- **Skipping the endpoints**, or testing them with the ratio test.
- **Forgetting the factorials** in a Taylor polynomial.
- **Not naming the test.** Write the test, check its conditions, state the conclusion.
- **Mixing up the two error bounds.** The alternating bound needs an alternating series with decreasing terms; Lagrange needs a bound $M$ on the next derivative.
:::

:::terms
- series, partial sum | chuỗi, tổng riêng
- converge / diverge | hội tụ / phân kì
- geometric series, harmonic series | chuỗi hình học, chuỗi điều hoà
- ratio test, alternating series test | tiêu chuẩn tỉ số, tiêu chuẩn chuỗi đan dấu
- absolute / conditional convergence | hội tụ tuyệt đối / có điều kiện
- Taylor polynomial, Maclaurin series | đa thức Taylor, chuỗi Maclaurin
- error bound | cận sai số
- radius / interval of convergence | bán kính / khoảng hội tụ
:::

## Similar exercises

:::exercise Multiple choice
Which series diverges?
A. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$
B. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{0.9}}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{2^n}$
D. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$

::hint
**What you need:** $p$-series with $p\le1$ diverge.

::solution
$p=0.9\le1$: answer **B**. D converges conditionally.
:::

:::exercise Free response
Find the sum of $\displaystyle\sum_{n=0}^\infty(-1)^n\left(\frac12\right)^n$.

::hint
**What you need:** it is geometric with $r=-\dfrac12$.

::solution
$\dfrac{1}{1-(-1/2)}=\dfrac{1}{3/2}=\dfrac23$.
:::

:::exercise Free response
Use the ratio test on $\displaystyle\sum_{n=1}^\infty\frac{2^n}{n!}$. Then find its sum using the series for $e^x$.

::hint
**What you need:** $\dfrac{a_{n+1}}{a_n}=\dfrac{2}{n+1}$; $e^2=\displaystyle\sum_{n=0}^\infty\frac{2^n}{n!}$.

::solution
$\dfrac{2}{n+1}\to0<1$, so the series converges. Starting from $n=1$ leaves out the term $1$: the sum is $e^2-1$.
:::

:::exercise Multiple choice
What is the Maclaurin series for $\dfrac{1}{1+x^2}$?
A. $1+x^2+x^4+x^6+\dots$
B. $1-x+x^2-x^3+\dots$
C. $1-x^2+x^4-x^6+\dots$
D. $x-\dfrac{x^3}{3}+\dfrac{x^5}{5}-\dots$

::hint
**What you need:** substitute $-x^2$ for $x$ in $\dfrac{1}{1-x}$.

::solution
$\displaystyle\sum\left(-x^2\right)^n$: answer **C**. Option D is the series for $\arctan x$, its integral.
:::

:::exercise Free response
Find the second-degree Taylor polynomial for $\ln x$ about $x=1$ and use it to approximate $\ln1.2$.

::hint
**What you need:** $f(1)=0$, $f'(1)=1$, $f''(1)=-1$.

::solution
$P_2(x)=(x-1)-\dfrac{(x-1)^2}{2}$, so $\ln1.2\approx0.2-0.02=0.18$. (The true value is about $0.1823$.)
:::

## Application exercises

:::exercise A full Taylor question
A function $f$ has $f(1)=3$, $f'(1)=-2$, $f''(1)=5$ and $f'''(1)=12$.
a) Write the third-degree Taylor polynomial for $f$ about $x=1$.
b) Use it to approximate $f(1.2)$.
c) If $\left|f^{(4)}(x)\right|\le24$ for $1\le x\le1.2$, show that the approximation differs from $f(1.2)$ by less than $0.002$.

::hint
**What you need:** coefficients $\dfrac{5}{2}$ and $\dfrac{12}{6}$; Lagrange bound with $n=3$.

**Steps:**
1. $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$.
2. Bound: $\dfrac{24}{4!}(0.2)^4$.

::solution
a) $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$.

b) $3-0.4+0.1+0.016=2.716$.

c) $\left|f(1.2)-P_3(1.2)\right|\le\dfrac{24}{24}(0.2)^4=0.0016<0.002$.
:::

:::exercise Both endpoints
Find the interval of convergence of $\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{n^2}$.

::hint
**What you need:** radius from the ratio test; at the endpoints you get a $p$-series with $p=2$.

::solution
The ratio tends to $|x+1|$, so $-2<x<0$. At $x=0$: $\displaystyle\sum\frac{1}{n^2}$ converges. At $x=-2$: $\displaystyle\sum\frac{(-1)^n}{n^2}$ converges absolutely. The interval is $[-2,0]$.
:::

:::exercise Integrating a series
Use the series for $e^x$ to write a series for $\displaystyle\int_0^xe^{-t^2}\,dt$. Use the first three nonzero terms to approximate $\displaystyle\int_0^{0.5}e^{-t^2}\,dt$, and bound the error.

::hint
**What you need:** $e^{-t^2}=1-t^2+\dfrac{t^4}{2}-\dfrac{t^6}{6}+\dots$; integrate term by term.

**Steps:**
1. $\displaystyle\int_0^xe^{-t^2}\,dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\dots$
2. Put $x=0.5$.

::solution
$0.5-\dfrac{0.125}{3}+\dfrac{0.03125}{10}\approx0.4615$. The series alternates with decreasing terms, so the error is at most $\dfrac{0.5^7}{42}\approx0.0002$.
:::

:::exercise Challenge
Differentiate the geometric series $\displaystyle\sum_{n=0}^\infty x^n=\frac{1}{1-x}$ to find the sum of $\displaystyle\sum_{n=1}^\infty\frac{n}{2^n}$.

::hint
**What you need:** $\displaystyle\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}$ for $|x|<1$; multiply by $x$.

::solution
$\displaystyle\sum_{n=1}^\infty nx^n=\frac{x}{(1-x)^2}$. At $x=\dfrac12$: $\dfrac{1/2}{1/4}=2$.
:::

:::quiz
::mc
What is $\displaystyle\sum_{n=0}^\infty\left(\frac34\right)^n$?
A. $\dfrac34$
B. $3$
C. $\dfrac74$
D. $4$
::key D
$\dfrac{1}{1-3/4}=4$.

::mc
Which series converges conditionally?
A. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$
B. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n}$
D. $\displaystyle\sum_{n=1}^\infty(-1)^n$
::key A
A converges by the alternating series test, but its absolute values form the harmonic series. B converges absolutely; C and D diverge.

::mc
What is the coefficient of $x^3$ in the Maclaurin series for $\sin(2x)$?
A. $-\dfrac16$
B. $-\dfrac43$
C. $\dfrac43$
D. $-8$
::key B
$-\dfrac{(2x)^3}{3!}=-\dfrac{8}{6}x^3=-\dfrac43x^3$.

::mc
What is the radius of convergence of $\displaystyle\sum_{n=0}^\infty\frac{x^n}{2^n}$?
A. $\dfrac12$
B. $1$
C. $2$
D. $\infty$
::key C
Geometric with ratio $\dfrac x2$: it converges when $|x|<2$.

::tf
Consider $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{\sqrt n}$.
a) The series converges.
b) The series converges absolutely.
c) Its terms tend to $0$.
d) The partial sum $S_1=1$ differs from the sum of the series by at most $\dfrac{1}{\sqrt2}$.
::key T F T T
a) True: alternating series test. b) False: $\displaystyle\sum\frac{1}{\sqrt n}$ is a $p$-series with $p=\dfrac12$. c) True. d) True: alternating series error bound, first omitted term $\dfrac{1}{\sqrt2}$.

::sa
Find $\displaystyle\sum_{n=1}^\infty\frac{3}{2^n}$.
::key 3
Geometric with first term $\dfrac32$ and ratio $\dfrac12$: $\dfrac{3/2}{1/2}=3$.

::sa
Evaluate the second-degree Maclaurin polynomial of $e^x$ at $x=1$.
::key 2.5
$1+1+\dfrac12=2.5$.
:::
