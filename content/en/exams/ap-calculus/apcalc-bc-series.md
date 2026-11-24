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
We test each series for convergence.

Series A: $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$ is a $p$-series with $p=2>1$, so it converges.

Series B: $\displaystyle\sum_{n=1}^\infty\frac{1}{n^{0.9}}$ is a $p$-series with $p=0.9\le1$, so it diverges.

Series C: $\displaystyle\sum_{n=1}^\infty\frac{1}{2^n}=\sum_{n=1}^\infty\left(\frac12\right)^n$ is a geometric series with ratio $q=\dfrac12$, $|q|<1$, so it converges.

Series D: $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$ is an alternating series in which $\dfrac1n$ decreases and tends to $0$ as $n\to\infty$; by the alternating series test, it converges.

Of the four series, only B diverges. So the answer is **B**.

*Remark.* Series D converges conditionally: it converges itself, but the series of absolute values $\displaystyle\sum\frac1n$ (the harmonic series) diverges; since D converges, D is not the answer.

**Answer.** B.
:::

:::exercise Free response
Find the sum of $\displaystyle\sum_{n=0}^\infty(-1)^n\left(\frac12\right)^n$.

::hint
**What you need:** it is geometric with $r=-\dfrac12$.

::solution
Rewrite the series: $\displaystyle\sum_{n=0}^\infty(-1)^n\left(\frac12\right)^n=\sum_{n=0}^\infty\left(-\frac12\right)^n$.

This is a geometric series with first term $u_0=1$ and ratio $q=-\dfrac12$. Since $|q|=\dfrac12<1$, the series converges and its sum is $\dfrac{1}{1-q}$.

Substituting $q=-\dfrac12$, we get
$$S=\frac{1}{1-\left(-\frac12\right)}=\frac{1}{\frac32}=\frac23.$$

So the sum of the series is $\dfrac23$.

**Answer.** $\dfrac23$.
:::

:::exercise Free response
Use the ratio test on $\displaystyle\sum_{n=1}^\infty\frac{2^n}{n!}$. Then find its sum using the series for $e^x$.

::hint
**What you need:** $\dfrac{a_{n+1}}{a_n}=\dfrac{2}{n+1}$; $e^2=\displaystyle\sum_{n=0}^\infty\frac{2^n}{n!}$.

::solution
Let $a_n=\dfrac{2^n}{n!}$. To apply the ratio test, we compute
$$\frac{a_{n+1}}{a_n}=\frac{2^{n+1}}{(n+1)!}\cdot\frac{n!}{2^n}=\frac{2}{n+1}.$$

As $n\to\infty$, $\dfrac{2}{n+1}\to0<1$. Hence, by the ratio test, the series $\displaystyle\sum_{n=1}^\infty\frac{2^n}{n!}$ converges.

To find the sum, we use the series $e^x=\displaystyle\sum_{n=0}^\infty\frac{x^n}{n!}$. Substituting $x=2$, we get
$$e^2=\sum_{n=0}^\infty\frac{2^n}{n!}=1+\sum_{n=1}^\infty\frac{2^n}{n!}.$$

The given series starts at $n=1$, so it leaves out the term for $n=0$, which equals $\dfrac{2^0}{0!}=1$. Therefore
$$\sum_{n=1}^\infty\frac{2^n}{n!}=e^2-1.$$

So the series converges and its sum is $e^2-1$.

**Answer.** The series converges (ratio test); its sum is $e^2-1$.
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
We use the geometric series $\dfrac{1}{1-u}=\displaystyle\sum_{n=0}^\infty u^n$ for $|u|<1$.

Substituting $u=-x^2$, we get
$$\frac{1}{1+x^2}=\sum_{n=0}^\infty\left(-x^2\right)^n=\sum_{n=0}^\infty(-1)^nx^{2n}=1-x^2+x^4-x^6+\dots$$

So the answer is **C**.

*Remark.* Option A is the series for $\dfrac{1}{1-x^2}$ (it lacks the alternating signs); option B is the series for $\dfrac{1}{1+x}$; option D is the series for $\arctan x$, the integral of $\dfrac{1}{1+x^2}$ rather than the function itself.

**Answer.** C.
:::

:::exercise Free response
Find the second-degree Taylor polynomial for $\ln x$ about $x=1$ and use it to approximate $\ln1.2$.

::hint
**What you need:** $f(1)=0$, $f'(1)=1$, $f''(1)=-1$.

::solution
The second-degree Taylor polynomial of $f$ about $x=1$ is
$$P_2(x)=f(1)+f'(1)(x-1)+\frac{f''(1)}{2!}(x-1)^2.$$

For $f(x)=\ln x$, we have $f'(x)=\dfrac1x$ and $f''(x)=-\dfrac{1}{x^2}$. Hence
$$f(1)=\ln1=0,\quad f'(1)=1,\quad f''(1)=-1.$$

Substituting into the formula, we get
$$P_2(x)=(x-1)-\frac{(x-1)^2}{2}.$$

To approximate $\ln1.2$, we substitute $x=1.2$, so $x-1=0.2$:
$$\ln1.2\approx P_2(1.2)=0.2-\frac{0.2^2}{2}=0.2-0.02=0.18.$$

So $P_2(x)=(x-1)-\dfrac{(x-1)^2}{2}$ and $\ln1.2\approx0.18$. (The true value is about $0.1823$.)

**Answer.** $P_2(x)=(x-1)-\dfrac{(x-1)^2}{2}$; $\ln1.2\approx0.18$.
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
The third-degree Taylor polynomial of $f$ about $x=1$ has the form
$$P_3(x)=f(1)+f'(1)(x-1)+\frac{f''(1)}{2!}(x-1)^2+\frac{f'''(1)}{3!}(x-1)^3.$$

a) Substituting $f(1)=3$, $f'(1)=-2$, $f''(1)=5$, $f'''(1)=12$, we get
$$P_3(x)=3-2(x-1)+\frac52(x-1)^2+\frac{12}{6}(x-1)^3=3-2(x-1)+\frac52(x-1)^2+2(x-1)^3.$$

b) For $x=1.2$ we have $x-1=0.2$, so
$$f(1.2)\approx P_3(1.2)=3-2(0.2)+\frac52(0.2)^2+2(0.2)^3=3-0.4+0.1+0.016=2.716.$$

c) By the Lagrange error bound, if $\left|f^{(4)}(x)\right|\le M$ on $[1, 1.2]$, then
$$\left|f(1.2)-P_3(1.2)\right|\le\frac{M}{4!}\left|1.2-1\right|^4.$$

With $M=24$, we have
$$\left|f(1.2)-P_3(1.2)\right|\le\frac{24}{24}(0.2)^4=0.0016<0.002.$$

So $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$, $f(1.2)\approx2.716$, and this approximation differs from $f(1.2)$ by at most $0.0016$, which is less than $0.002$.

**Answer.** a) $P_3(x)=3-2(x-1)+\dfrac52(x-1)^2+2(x-1)^3$; b) $2.716$; c) error $\le0.0016<0.002$.
:::

:::exercise Both endpoints
Find the interval of convergence of $\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{n^2}$.

::hint
**What you need:** radius from the ratio test; at the endpoints you get a $p$-series with $p=2$.

::solution
Let $a_n=\dfrac{(x+1)^n}{n^2}$. Applying the ratio test, we have
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x+1|^{n+1}}{(n+1)^2}\cdot\frac{n^2}{|x+1|^n}=|x+1|\cdot\frac{n^2}{(n+1)^2}\to|x+1|\quad(n\to\infty).$$

The series converges when $|x+1|<1$, that is $-1<x+1<1$, or $-2<x<0$. The radius of convergence is $1$.

We check the two endpoints.

At $x=0$: the series becomes $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$, a $p$-series with $p=2>1$, so it converges.

At $x=-2$: the series becomes $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$. The series of absolute values $\displaystyle\sum\frac{1}{n^2}$ converges, so this series converges absolutely, and hence converges.

So the interval of convergence is $[-2, 0]$.

**Answer.** $[-2, 0]$.
:::

:::exercise Integrating a series
Use the series for $e^x$ to write a series for $\displaystyle\int_0^xe^{-t^2}\,dt$. Use the first three nonzero terms to approximate $\displaystyle\int_0^{0.5}e^{-t^2}\,dt$, and bound the error.

::hint
**What you need:** $e^{-t^2}=1-t^2+\dfrac{t^4}{2}-\dfrac{t^6}{6}+\dots$; integrate term by term.

**Steps:**
1. $\displaystyle\int_0^xe^{-t^2}\,dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\dots$
2. Put $x=0.5$.

::solution
We have the series $e^u=\displaystyle\sum_{n=0}^\infty\frac{u^n}{n!}$. Substituting $u=-t^2$, we get
$$e^{-t^2}=\sum_{n=0}^\infty\frac{(-1)^nt^{2n}}{n!}=1-t^2+\frac{t^4}{2}-\frac{t^6}{6}+\dots$$

Integrating term by term from $0$ to $x$:
$$\int_0^xe^{-t^2}\,dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\dots=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)\,n!}.$$

Using the first three nonzero terms with $x=0.5$:
$$\int_0^{0.5}e^{-t^2}\,dt\approx0.5-\frac{0.5^3}{3}+\frac{0.5^5}{10}=0.5-\frac{0.125}{3}+\frac{0.03125}{10}\approx0.4615.$$

At $x=0.5$, this is an alternating series whose terms decrease in absolute value to $0$ (about $0.5$, $0.0417$, $0.0031$, $0.0002$, …). By the alternating series error bound, the error is at most the absolute value of the first omitted term:
$$\left|\text{error}\right|\le\frac{0.5^7}{42}\approx0.0002.$$

So $\displaystyle\int_0^xe^{-t^2}\,dt=x-\dfrac{x^3}{3}+\dfrac{x^5}{10}-\dfrac{x^7}{42}+\dots$, and the approximation of $\displaystyle\int_0^{0.5}e^{-t^2}\,dt$ is $0.4615$, with error at most about $0.0002$.

**Answer.** $\displaystyle\int_0^{0.5}e^{-t^2}\,dt\approx0.4615$; the error is at most about $0.0002$.
:::

:::exercise Challenge
Differentiate the geometric series $\displaystyle\sum_{n=0}^\infty x^n=\frac{1}{1-x}$ to find the sum of $\displaystyle\sum_{n=1}^\infty\frac{n}{2^n}$.

::hint
**What you need:** $\displaystyle\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}$ for $|x|<1$; multiply by $x$.

::solution
The geometric series $\displaystyle\sum_{n=0}^\infty x^n=\frac{1}{1-x}$ converges for $|x|<1$.

Differentiating both sides with respect to $x$ (a power series may be differentiated term by term inside its interval of convergence):
$$\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}.$$

Multiplying both sides by $x$, we get
$$\sum_{n=1}^\infty nx^n=\frac{x}{(1-x)^2},\quad|x|<1.$$

Substituting $x=\dfrac12$ (which satisfies $|x|<1$), we have $\displaystyle\sum_{n=1}^\infty n\left(\frac12\right)^n=\sum_{n=1}^\infty\frac{n}{2^n}$ and
$$\sum_{n=1}^\infty\frac{n}{2^n}=\frac{\frac12}{\left(1-\frac12\right)^2}=\frac{\frac12}{\frac14}=2.$$

So the sum of the series is $2$.

**Answer.** $2$.
:::

:::quiz
::mc TH
What is $\displaystyle\sum_{n=0}^\infty\left(\frac34\right)^n$?
A. $\dfrac34$
B. $3$
C. $\dfrac74$
D. $4$
::key D
$\dfrac{1}{1-3/4}=4$.

::mc TH
Which series converges conditionally?
A. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$
B. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^2}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n}$
D. $\displaystyle\sum_{n=1}^\infty(-1)^n$
::key A
A converges by the alternating series test, but its absolute values form the harmonic series. B converges absolutely; C and D diverge.

::mc VD
What is the coefficient of $x^3$ in the Maclaurin series for $\sin(2x)$?
A. $-\dfrac16$
B. $-\dfrac43$
C. $\dfrac43$
D. $-8$
::key B
$-\dfrac{(2x)^3}{3!}=-\dfrac{8}{6}x^3=-\dfrac43x^3$.

::mc TH
What is the radius of convergence of $\displaystyle\sum_{n=0}^\infty\frac{x^n}{2^n}$?
A. $\dfrac12$
B. $1$
C. $2$
D. $\infty$
::key C
Geometric with ratio $\dfrac x2$: it converges when $|x|<2$.

::tf TH TH TH VD
Consider $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{\sqrt n}$.
a) The series converges.
b) The series converges absolutely.
c) Its terms tend to $0$.
d) The partial sum $S_1=1$ differs from the sum of the series by at most $\dfrac{1}{\sqrt2}$.
::key T F T T
a) True: alternating series test. b) False: $\displaystyle\sum\frac{1}{\sqrt n}$ is a $p$-series with $p=\dfrac12$. c) True. d) True: alternating series error bound, first omitted term $\dfrac{1}{\sqrt2}$.

::sa VD
Find $\displaystyle\sum_{n=1}^\infty\frac{3}{2^n}$.
::key 3
Geometric with first term $\dfrac32$ and ratio $\dfrac12$: $\dfrac{3/2}{1/2}=3$.

::sa TH
Evaluate the second-degree Maclaurin polynomial of $e^x$ at $x=1$.
::key 2.5
$1+1+\dfrac12=2.5$.
:::
