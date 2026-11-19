---
title: Limits of sequences
description: Understand finite and infinite limits of sequences, the rules for limits, the sum of an infinite geometric series, and a bouncing-ball application.
minutes: 25
---

:::goals
- Understand the meaning of a finite limit of a sequence and find from which term on a sequence is within a given error of its limit.
- Find limits of sequences using the basic limits and the rules for sums, differences, products and quotients.
- Find the sum of an infinite geometric series and apply it to real problems.
- Recognise and find infinite limits of sequences.
:::

A ball is dropped from a height of $2$ m onto a hard floor. After each bounce, it rises to $60\%$ of the height it fell from. The ball rises, falls, rises less high, falls again, and so on without end.

The ball bounces infinitely often, yet we can ask: what is the total distance it travels before it finally comes to rest, in metres? Can a sum of infinitely many terms be a finite number? The answer needs the idea of the limit of a sequence.

## Finite limits of sequences

### Explore: a sequence approaching a number

Take the sequence $u_n=\dfrac{n+1}{n}$. Its terms are $2$; $1.5$; $1.333\dots$; $1.25$; $1.2$; ... For $n=10$ we have $u_{10}=1.1$; for $n=100$ we have $u_{100}=1.01$; for $n=1000$ we have $u_{1000}=1.001$. As $n$ grows, $u_n$ gets closer to $1$, and the distance $|u_n-1|=\dfrac1n$ gets smaller.

:::graph The terms $u_n=\dfrac{n+1}{n}$ approach the line $y=1$
alt: Points representing u_n going steadily down and approaching the horizontal line y = 1 as n goes from 1 to 8
x: 0..9
y: 0..2.4
hline: 1
point: (1, 2) "2" above
point: (2, 1.5) "1.5" above
point: (3, 1.3333) "1.33" above
point: (4, 1.25) "1.25" above
point: (5, 1.2) "1.2" above
point: (6, 1.1667) "1.17" above
point: (7, 1.1429) "1.14" above
point: (8, 1.125) "1.13" above
:::

:::definition Finite limit of a sequence
A sequence $(u_n)$ has the **limit** $L$ (a real number) as $n$ tends to infinity, written $\lim u_n=L$ (or $u_n\to L$), if $|u_n-L|$ is smaller than any given small positive number from some term on. A sequence with a finite limit is called **convergent**.
:::

For example $\lim\dfrac{n+1}{n}=1$. The limit is the number that the terms approach, and need not be a term of the sequence: there is no $n$ with $\dfrac{n+1}{n}=1$.

:::theorem Basic limits and rules
1. $\lim c=c$ for a constant $c$; $\lim\dfrac{1}{n^k}=0$ for $k>0$; $\lim q^n=0$ for $|q|<1$.
2. If $\lim u_n=L$ and $\lim v_n=M$ then
$$\lim(u_n\pm v_n)=L\pm M,\qquad\lim(u_nv_n)=LM,\qquad\lim\dfrac{u_n}{v_n}=\dfrac LM\ (M\ne0).$$
If $u_n\ge0$ for all $n$, then $L\ge0$ and $\lim\sqrt{u_n}=\sqrt L$.
:::

To find the limit of a fraction in $n$, we divide the numerator and the denominator by the highest power of $n$ (or of the largest base) and then apply the basic limits.

:::example From which term on is the sequence close to its limit
Take $u_n=\dfrac{3n+1}{n+2}$. Show that $\lim u_n=3$ and find the least $n$ such that $|u_n-3|<0.01$ for every term from that one on.

**Understand.** We need the error $|u_n-3|$ and the $n$ for which it is less than $0.01$.

**Plan.** Write $u_n-3$ as a simple fraction and solve the inequality.

**Solve.** We have $u_n-3=\dfrac{3n+1-3(n+2)}{n+2}=\dfrac{-5}{n+2}$, so $|u_n-3|=\dfrac{5}{n+2}$. This decreases as $n$ grows and tends to $0$, so $\lim u_n=3$. Solving $\dfrac{5}{n+2}<0.01$ gives $n+2>500$, that is $n>498$, so $n\ge499$.

So $\lim u_n=3$ and from the $499$th term on we have $|u_n-3|<0.01$.

**Look back.** For $n=499$ we have $|u_n-3|=\dfrac{5}{501}\approx0.00998<0.01$; for $n=498$ we have $\dfrac{5}{500}=0.01$, exactly equal, not yet smaller. To make the error smaller than $0.0001$ we need a much larger $n$, but we can always find one: that is exactly the meaning of a limit.
:::

:::example The limit of a fraction
Find $\lim\dfrac{4n^2-3n+1}{2n^2+5}$.

**Solution.** Divide the numerator and the denominator by $n^2$:
$$\lim\dfrac{4n^2-3n+1}{2n^2+5}=\lim\dfrac{4-\dfrac3n+\dfrac1{n^2}}{2+\dfrac5{n^2}}=\dfrac{4-0+0}{2+0}=2.$$
So the limit is $2$.
:::

:::example A limit with exponents
Find $\lim\dfrac{3^n+2^n}{3^{n+1}}$.

**Solution.** Divide the numerator and the denominator by $3^n$:
$$\lim\dfrac{3^n+2^n}{3^{n+1}}=\lim\dfrac{1+\left(\dfrac23\right)^n}{3}=\dfrac{1+0}{3}=\dfrac13,$$
because $\left(\dfrac23\right)^n\to0$ ($|q|=\dfrac23<1$).

So the limit is $\dfrac13$.
:::

## The sum of an infinite geometric series

A geometric progression with common ratio $q$ where $|q|<1$ is called an **infinite geometric series** (convergent). In the lesson on geometric progressions, the sum of the first $n$ terms is $S_n=\dfrac{u_1(1-q^n)}{1-q}$. When $|q|<1$ we have $q^n\to0$, so $S_n$ tends to a limit.

:::theorem The sum of an infinite geometric series
A geometric progression $(u_n)$ with $|q|<1$ has the sum
$$S=u_1+u_2+u_3+\dots=\lim S_n=\dfrac{u_1}{1-q}.$$
:::

:::example Infinite sums and recurring decimals
a) Find $1+\dfrac12+\dfrac14+\dfrac18+\dots$. b) Write the recurring decimals $0.\dot3=0.333\dots$ and $0.\dot9=0.999\dots$ as fractions.

**Solution.** a) This is an infinite geometric series with $u_1=1$ and $q=\dfrac12$, so $S=\dfrac{1}{1-\frac12}=2$.

b) We have $0.\dot3=0.3+0.03+0.003+\dots$, a geometric progression with $u_1=0.3$ and $q=0.1$, so $0.\dot3=\dfrac{0.3}{1-0.1}=\dfrac13$. Similarly $0.\dot9=\dfrac{0.9}{1-0.1}=1$.

So the sum in part a is $2$, $0.\dot3=\dfrac13$ and $0.\dot9=1$.

**Remark.** The result $0.\dot9=1$ looks strange but is correct: the two ways of writing $0.999\dots$ and $1$ are the same number.
:::

:::example The total distance of a bouncing ball
A ball is dropped from $2$ m, and each bounce reaches $60\%$ of the height it fell from. Find the total distance the ball travels until it comes to rest.

**Solution.** The first fall covers $2$ m. After the first impact, the ball rises $1.2$ m and falls $1.2$ m, a distance of $2\cdot1.2$ m. The later bounce heights are $0.72$ m, $0.432$ m, ..., a geometric progression with $u_1=1.2$ and $q=0.6$. The sum of the bounce heights is $\dfrac{1.2}{1-0.6}=3$ m, and each height is travelled twice (up and down).

The total distance is $2+2\cdot3=8$ m.

So the ball travels $8$ m in total even though it bounces infinitely often.
:::

## Infinite limits

Some sequences do not approach any number but grow without bound.

:::definition Infinite limit
A sequence $(u_n)$ has the limit $+\infty$, written $\lim u_n=+\infty$, if $u_n$ is greater than any given large positive number from some term on. Similarly, $\lim u_n=-\infty$ if $\lim(-u_n)=+\infty$.
:::

The basic limits: $\lim n^k=+\infty$ for $k>0$; $\lim q^n=+\infty$ for $q>1$. If $\lim u_n=+\infty$ or $-\infty$, then $\lim\dfrac{1}{u_n}=0$. If $\lim u_n=+\infty$ and $\lim v_n=+\infty$, then $\lim(u_n+v_n)=+\infty$ and $\lim(u_nv_n)=+\infty$. If $\lim u_n=L>0$ and $\lim v_n=+\infty$, then $\lim(u_nv_n)=+\infty$.

:::example Infinite limits
Find a) $\lim(2n^3-n)$; b) $\lim\dfrac{n^2-3n+1}{n+2}$.

**Solution.** a) Take $n^3$ out as a common factor: $2n^3-n=n^3\left(2-\dfrac1{n^2}\right)$. Since $n^3\to+\infty$ and $2-\dfrac{1}{n^2}\to2>0$, the limit is $+\infty$.

b) Divide the numerator and the denominator by $n$: $\dfrac{n^2-3n+1}{n+2}=\dfrac{n-3+\dfrac1n}{1+\dfrac2n}$. The numerator $n-3+\dfrac1n\to+\infty$ while the denominator $1+\dfrac2n\to1>0$, so the limit is $+\infty$.

So both limits are $+\infty$.
:::

**Connections.** The limit of a sequence gives us the language to speak about infinite processes: infinite sums (recurring decimals), approaching a value (the bouncing ball), or growing without bound. In the next lesson this idea is extended from sequences to functions: the limit of $f(x)$ as $x$ tends to a number or to infinity, which is the foundation of the derivative.

:::warning Common mistakes
- **Thinking that the limit is a term of the sequence.** Wrong: $\lim\dfrac1n=0$, so some term has $\dfrac1n=0$. Why it is wrong: $\dfrac1n>0$ for every $n$. Right: the limit is the value the sequence approaches; the sequence need not reach it.
- **Treating the difference of two sequences that both tend to infinity as $0$.** Wrong: $\lim(n^2-n)=\lim n^2-\lim n=\infty-\infty=0$. Why it is wrong: $\infty-\infty$ cannot be determined. Right: $n^2-n=n^2\left(1-\dfrac1n\right)\to+\infty$.
- **Taking the leading coefficient of the numerator and forgetting the degree.** Wrong: $\lim\dfrac{2n+1}{n^2+3}=2$. Why it is wrong: the denominator has a higher degree than the numerator. Right: dividing by $n^2$ gives $\lim\dfrac{\frac2n+\frac1{n^2}}{1+\frac3{n^2}}=0$.
- **Thinking that $q^n$ has an infinite limit when $q<-1$.** Wrong: $\lim(-2)^n=-\infty$. Why it is wrong: $(-2)^n$ alternates in sign and grows in size, so it tends to neither $+\infty$ nor $-\infty$. Right: this sequence has no limit.
:::

## Key terms

:::terms
- limit of a sequence | giới hạn của dãy số
- convergent sequence | dãy số hội tụ
- infinite limit | giới hạn vô cực
- infinite geometric series with |q| < 1 | cấp số nhân lùi vô hạn
- infinite sum | tổng vô hạn
- recurring decimal | số thập phân tuần hoàn
- error | sai số
- power | luỹ thừa
:::

## Summary

- $\lim u_n=L$ means that $|u_n-L|$ is as small as we like when $n$ is large enough.
- $\lim\dfrac1{n^k}=0$ ($k>0$); $\lim q^n=0$ when $|q|<1$; $\lim c=c$.
- The limit of a sum, difference, product or quotient is the sum, difference, product or quotient of the limits (for a quotient the denominator's limit must be non-zero).
- For a fraction in $n$, divide the numerator and the denominator by the highest power.
- An infinite geometric series ($|q|<1$) has the sum $S=\dfrac{u_1}{1-q}$.
- $\lim n^k=+\infty$ ($k>0$); $\lim q^n=+\infty$ ($q>1$); $\lim\dfrac1{u_n}=0$ if $u_n\to\pm\infty$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find a) $\lim\dfrac{2n+1}{n}$; b) $\lim\left(1-\dfrac3n\right)$; c) $\lim\dfrac{n+5}{2n-1}$.

::hint
**What you need:** $\lim\dfrac1n=0$; divide the numerator and the denominator by $n$.

**Steps:**
1. Divide each term by the highest power of $n$.
2. Replace $\dfrac1n\to0$.

::solution
a) $\dfrac{2n+1}{n}=2+\dfrac1n\to2$. b) $1-\dfrac3n\to1$. c) $\dfrac{n+5}{2n-1}=\dfrac{1+\frac5n}{2-\frac1n}\to\dfrac12$.

**Answer.** a) $2$; b) $1$; c) $\dfrac12$.
:::

:::exercise
Find $\lim\dfrac{5n^2-2n}{3n^2+1}$.

::hint
**What you need:** divide the numerator and the denominator by $n^2$.

**Steps:**
1. Rewrite as $\dfrac{5-\frac2n}{3+\frac1{n^2}}$.

::solution
$\dfrac{5n^2-2n}{3n^2+1}=\dfrac{5-\frac2n}{3+\frac1{n^2}}\to\dfrac53$.

**Answer.** $\dfrac53$.
:::

:::exercise
Find $\lim\dfrac{2^n+5^n}{5^n+1}$.

::hint
**What you need:** divide the numerator and the denominator by $5^n$; $\lim q^n=0$ when $|q|<1$.

**Steps:**
1. Divide by $5^n$ and use $\left(\dfrac25\right)^n\to0$ and $\dfrac1{5^n}\to0$.

::solution
$\dfrac{2^n+5^n}{5^n+1}=\dfrac{\left(\frac25\right)^n+1}{1+\frac1{5^n}}\to\dfrac{0+1}{1+0}=1$.

**Answer.** $1$.
:::

:::exercise
Take $u_n=\dfrac{2n-1}{n}$. Show that $\lim u_n=2$ and find the least $n$ such that $|u_n-2|<0.001$ for every term from that one on.

::hint
**What you need:** $|u_n-2|=\dfrac1n$.

**Steps:**
1. Write $u_n-2$.
2. Solve $\dfrac1n<0.001$.

::solution
$u_n-2=\dfrac{2n-1-2n}{n}=-\dfrac1n$, so $|u_n-2|=\dfrac1n\to0$, hence $\lim u_n=2$. Solving $\dfrac1n<0.001$ gives $n>1000$, that is $n\ge1001$.

**Answer.** $\lim u_n=2$; from the $1001$st term on.
:::

:::exercise
Find a) $1+\dfrac13+\dfrac19+\dfrac1{27}+\dots$; b) write $0.\dot6=0.666\dots$ as a fraction.

::hint
**What you need:** $S=\dfrac{u_1}{1-q}$ with $|q|<1$.

**Steps:**
1. Identify $u_1$ and $q$.
2. For part b, write $0.6+0.06+\dots$.

::solution
a) $u_1=1$, $q=\dfrac13$, so $S=\dfrac{1}{1-\frac13}=\dfrac32$. b) $0.\dot6=0.6+0.06+\dots$ has $u_1=0.6$, $q=0.1$, so it equals $\dfrac{0.6}{0.9}=\dfrac23$.

**Answer.** a) $\dfrac32$; b) $\dfrac23$.
:::

:::exercise
A ball is dropped from $5$ m; each time it hits the ground it rises to $80\%$ of the height it fell from. Find the total distance the ball travels until it comes to rest.

::hint
**What you need:** the bounce heights form an infinite geometric series; each height is travelled twice.

**Steps:**
1. The first bounce height is $4$ m, with common ratio $0.8$.
2. The total distance is $5+2\cdot S$.

::solution
The bounce heights $4$; $3.2$; ... have $u_1=4$, $q=0.8$ and sum $S=\dfrac{4}{1-0.8}=20$ m. The total distance is $5+2\cdot20=45$ m.

**Answer.** $45$ m.
:::

:::exercise
Take the sequence $u_n=\dfrac{n+2}{n}$. Decide whether each statement is true or false:

a) $\lim u_n=1$.

b) There is a positive integer $n$ with $u_n=1$.

c) $\lim u_n^2=1$.

d) $\lim n(u_n-1)=0$.

::hint
**What you need:** $u_n=1+\dfrac2n$; the rules for limits.

**Steps:**
1. a), c) Use $\dfrac2n\to0$.
2. b) Solve $\dfrac{n+2}{n}=1$.
3. d) Find $n(u_n-1)$.

::solution
a) **True**: $1+\dfrac2n\to1$.

b) **False**: $\dfrac{n+2}{n}=1$ has no solution because $u_n=1+\dfrac2n>1$.

c) **True**: $\lim u_n^2=(\lim u_n)^2=1$.

d) **False**: $n(u_n-1)=n\cdot\dfrac2n=2$, so the limit is $2$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Find $\lim\dfrac{6n^2+n}{2n^2-3}$.

::hint
**What you need:** divide the numerator and the denominator by $n^2$.

**Steps:**
1. Write $\dfrac{6+\frac1n}{2-\frac3{n^2}}$.

::solution
$\dfrac{6n^2+n}{2n^2-3}=\dfrac{6+\frac1n}{2-\frac3{n^2}}\to\dfrac62=3$.

**Answer.** $3$.
:::

:::exercise Revision
A geometric progression $(u_n)$ has $u_1=4$ and $q=\dfrac12$. Using the sum formula from the lesson on geometric progressions, find $S_5$. Find the sum $S=\lim S_n$ and the least $n$ such that $|S-S_n|<0.01$.

::hint
**What you need:** $S_n=\dfrac{u_1(1-q^n)}{1-q}$; $S=\dfrac{u_1}{1-q}$.

**Steps:**
1. Find $S_5$ and $S$.
2. $S-S_n=\dfrac{u_1q^n}{1-q}$.

::solution
$S_5=\dfrac{4\left(1-\frac1{32}\right)}{\frac12}=7.75$ and $S=\dfrac{4}{\frac12}=8$. We have $S-S_n=8\cdot\left(\dfrac12\right)^n=\dfrac{8}{2^n}$. Solving $\dfrac8{2^n}<0.01$ gives $2^n>800$; since $2^9=512<800<1024=2^{10}$, we get $n=10$.

**Answer.** $S_5=7.75$; $S=8$; $n=10$.
:::

:::exercise Challenge
Find $\lim\left(\sqrt{n^2+n}-n\right)$.

::hint
**What you need:** multiply and divide by the conjugate expression $\sqrt{n^2+n}+n$.

**Steps:**
1. Use $(a-b)(a+b)=a^2-b^2$.
2. Divide the numerator and the denominator by $n$.

::solution
$\sqrt{n^2+n}-n=\dfrac{(n^2+n)-n^2}{\sqrt{n^2+n}+n}=\dfrac{n}{\sqrt{n^2+n}+n}=\dfrac{1}{\sqrt{1+\frac1n}+1}\to\dfrac{1}{1+1}=\dfrac12$.

**Answer.** $\dfrac12$.
:::

## Mini test

:::quiz
::mc TH
$\lim\dfrac{3n+2}{n+1}$ equals
A. $2$.
B. $1$.
C. $3$.
D. $+\infty$.
::key C
Divide the numerator and the denominator by $n$: $\dfrac{3+\frac2n}{1+\frac1n}\to3$. Option A takes only the ratio $\dfrac21$ of the constants.

::mc TH
$\lim\dfrac{2^n}{3^n}$ equals
A. $1$.
B. $+\infty$.
C. $\dfrac23$.
D. $0$.
::key D
$\dfrac{2^n}{3^n}=\left(\dfrac23\right)^n$ with $|q|=\dfrac23<1$, so the limit is $0$.

::mc TH
$\lim(n^2-n)$ equals
A. $+\infty$.
B. $-\infty$.
C. $0$.
D. $1$.
::key A
$n^2-n=n^2\left(1-\dfrac1n\right)$ with $n^2\to+\infty$ and $1-\dfrac1n\to1>0$. Option C treats the difference $\infty-\infty$ as $0$.

::mc TH
The sum $1+\dfrac13+\dfrac19+\dfrac1{27}+\dots$ equals
A. $2$.
B. $\dfrac32$.
C. $1$.
D. $3$.
::key B
An infinite geometric series with $u_1=1$, $q=\dfrac13$ has $S=\dfrac{1}{1-\frac13}=\dfrac32$.

::tf TH TH VD VD
Take the sequence $u_n=\dfrac{2n-3}{n+1}$. Decide whether each statement is true or false.
a) $\lim u_n=-3$.
b) $\lim u_n=2$.
c) There is a positive integer $n$ with $u_n=2$.
d) $u_n<2$ for all $n$.
::key F T F T
a) False: $u_n=\dfrac{2-\frac3n}{1+\frac1n}\to2$. b) True. c) False: $u_n=2-\dfrac{5}{n+1}<2$. d) True.

::sa TH
Find $\lim\dfrac{4n^2+1}{2n^2+n}$.
::key 2
Divide by $n^2$: $\dfrac{4+\frac1{n^2}}{2+\frac1n}\to\dfrac42=2$.

::sa TH
Find the sum $6+3+\dfrac32+\dfrac34+\dots$.
::key 12
An infinite geometric series with $u_1=6$, $q=\dfrac12$ has $S=\dfrac{6}{1-\frac12}=12$.
:::
