---
title: Sequences and exponential functions
description: AP Precalculus Unit 2, part 1: arithmetic and geometric sequences, exponential functions and their forms, models from two points or a context, and residuals.
minutes: 45
---

:::goals
- Write formulas for arithmetic and geometric sequences and connect them to linear and exponential functions.
- Describe exponential functions: growth or decay, concavity and end behavior.
- Rewrite exponential expressions in equivalent forms, for example to change the time unit.
- Build an exponential model from two points or from a description, and decide between linear and exponential models.
- Use residuals to judge how well a model fits.
:::

Unit 2 is about a single contrast: adding the same amount at each step (arithmetic, linear) versus multiplying by the same factor (geometric, exponential). Once you can tell the two apart and switch between their forms, most Unit 2 questions become routine. This lesson covers sequences and exponential functions; the next one covers their inverses, the logarithms.

## Arithmetic and geometric sequences

| | Arithmetic | Geometric |
|---|---|---|
| Rule | add $d$ each step | multiply by $r$ each step |
| $n$th term | $a_n=a_1+(n-1)d$ | $g_n=g_1r^{n-1}$ |
| Function version | linear: $f(x)=b+mx$ | exponential: $f(x)=ab^x$ |

An arithmetic sequence is a linear function restricted to whole-number inputs; a geometric sequence is an exponential function restricted in the same way.

:::example A geometric sequence
The first three terms of a geometric sequence are $5$, $15$, $45$. What is the sixth term?
A. $135$
B. $1215$
C. $405$
D. $3645$

**Solution.** The common ratio is $r=\dfrac{15}{5}=3$, so $g_n=5\cdot3^{n-1}$.

The sixth term is $g_6=5\cdot3^5=5\cdot243=1215$.

So the sixth term is $1215$, answer **B**. Option D uses $3^6$ instead of $3^5$.
:::

:::example An arithmetic sequence from two terms
In an arithmetic sequence, $a_3=11$ and $a_9=29$. Find a formula for $a_n$ and the value of $a_{20}$.

**Solution.** Between the third and the ninth term there are $6$ steps, so $6d=29-11=18$ and $d=3$.

Then $a_1=a_3-2d=11-6=5$, and
$$a_n=5+3(n-1)=3n+2.$$

So $a_n=3n+2$ and $a_{20}=3(20)+2=62$.
:::

## Exponential functions and their forms

For $f(x)=ab^x$ with $a>0$: if $b>1$ the function shows **growth**, if $0<b<1$ it shows **decay**. In both cases the graph is concave up, has the horizontal asymptote $y=0$, and the output is multiplied by $b$ whenever the input increases by $1$. Exponent rules let us rewrite a model: $b^{x+k}=b^k\cdot b^x$, and $b^{x/k}=\left(b^{1/k}\right)^x$.

:::example Two points determine the model
An exponential function $f(x)=ab^x$ passes through $(1,6)$ and $(3,24)$. Which is $f(x)$?
A. $f(x)=6\cdot2^x$
B. $f(x)=3\cdot4^x$
C. $f(x)=2\cdot3^x$
D. $f(x)=3\cdot2^x$

**Solution.** Dividing the two equations $ab^3=24$ and $ab=6$ gives $b^2=4$, so $b=2$ (since $b>0$).

Then $a\cdot2=6$, so $a=3$, and $f(x)=3\cdot2^x$. Check: $f(3)=3\cdot8=24$.

So $f(x)=3\cdot2^x$, answer **D**.
:::

:::example Changing the time unit
A population is modeled by $P(t)=500(1.2)^t$, where $t$ is in years. Which expression gives the same population with $t$ still in years, but shows the monthly growth factor?
A. $500\left(1.2^{1/12}\right)^{12t}$
B. $500\left(\dfrac{1.2}{12}\right)^{12t}$
C. $500(1.2)^{12t}$
D. $500\left(1.2^{12}\right)^{t/12}$

**Solution.** In one month, $t$ increases by $\dfrac{1}{12}$, so the population is multiplied by $1.2^{1/12}$. Writing $1.2^t=\left(1.2^{1/12}\right)^{12t}$ shows this factor, which is about $1.0153$, a growth of about $1.53\%$ per month.

So the equivalent expression is $500\left(1.2^{1/12}\right)^{12t}$, answer **A**. Option D is equal to $P(t)$ too, but it shows the factor for $12$ years.
:::

## Linear or exponential, and residuals

Use a linear model when a quantity changes by a **constant amount** per unit, and an exponential model when it changes by a **constant percentage**. To check a model against data, compute **residuals**: residual $=$ actual value $-$ predicted value. Residuals that are small and show no pattern suggest a good fit.

:::example Reading a residual
A model predicts that a plant will be $50.4$ cm tall after $6$ weeks. The actual height is $52$ cm. What is the residual, and what does it mean?
A. $-1.6$; the model overestimates
B. $1.6$; the model underestimates
C. $1.6$; the model overestimates
D. $102.4$; the model fits well

**Solution.** The residual is
$$\text{actual}-\text{predicted}=52-50.4=1.6.$$

A positive residual means the actual value is greater than the prediction.

So the residual is $1.6$ cm and the model underestimates the height, answer **B**.
:::

:::warning Common traps
- **The exponent $n-1$:** the first term has no factor $r$.
- **Constant amount or constant percentage:** "increases by $4\%$" is exponential, "increases by $4$" is linear.
- **Equivalent forms:** check by substituting a value of $t$ into both expressions.
- **Sign of a residual:** actual minus predicted, not the other way.
- **Decay with $a>0$:** the graph is decreasing but still concave up.
:::

:::terms
- arithmetic / geometric sequence | cấp số cộng / cấp số nhân
- common difference / ratio | công sai / công bội
- exponential growth / decay | tăng trưởng / suy giảm theo hàm mũ
- growth factor | hệ số tăng trưởng
- horizontal asymptote | tiệm cận ngang
- equivalent form | dạng tương đương
- residual | phần dư
- model | mô hình
:::

## Similar exercises

:::exercise
A geometric sequence has $g_1=2$ and common ratio $r=-3$. Find $g_5$.

::hint
**What you need:** $g_n=g_1r^{n-1}$; an even power of a negative number is positive.

::solution
The $n$th term of a geometric sequence is $g_n=g_1r^{n-1}$. Using the formula, $g_5=2\cdot(-3)^{5-1}=2\cdot(-3)^4$.

Since $(-3)^4=81$, we get $g_5=2\cdot81=162$.

So the fifth term is $162$.

**Answer.** $162$.
:::

:::exercise
A sequence is defined by $a_n=7-4n$. Show that it is arithmetic, and find its common difference and $a_{10}$.

::hint
**What you need:** compute $a_{n+1}-a_n$.

::solution
We have $a_{n+1}-a_n=\big(7-4(n+1)\big)-(7-4n)=-4$, which does not depend on $n$, so the sequence is arithmetic with $d=-4$.

Then $a_{10}=7-40=-33$.

So the sequence is arithmetic with common difference $-4$, and $a_{10}=-33$.

**Answer.** $d=-4$, $a_{10}=-33$.
:::

:::exercise
Find the exponential function $f(x)=ab^x$ that passes through $(0,5)$ and $(2,45)$.

::hint
**What you need:** $f(0)=a$.

::solution
Since $b^0=1$, $f(0)=a$. The point $(0,5)$ gives $a=5$, so the function is $f(x)=5b^x$.

Then $f(2)=5b^2=45$, so $b^2=9$ and $b=3$ (since $b>0$).

So $f(x)=5\cdot3^x$.

**Answer.** $f(x)=5\cdot3^x$.
:::

:::exercise
Write $2^{3x+1}$ in the form $a\cdot b^x$.

::hint
**What you need:** $2^{3x+1}=2\cdot\left(2^3\right)^x$.

::solution
Split the exponent into a sum and use the exponent rules: $2^{3x+1}=2^1\cdot2^{3x}=2\cdot\left(2^3\right)^x$.

Since $2^3=8$, this is $2\cdot8^x$.

So $2^{3x+1}=2\cdot8^x$, with $a=2$ and $b=8$.

**Answer.** $2\cdot8^x$.
:::

:::exercise
A model predicts a value of $20.5$, and the actual value is $18$. Find the residual and say whether the model overestimates or underestimates.

::hint
**What you need:** residual $=$ actual $-$ predicted.

::solution
The residual is $18-20.5=-2.5$.

The residual is negative, so the actual value is smaller than the prediction.

So the residual is $-2.5$ and the model overestimates.

**Answer.** $-2.5$; overestimates.
:::

## Application exercises

:::exercise
A culture contains $200$ bacteria, and the number triples every $4$ hours.
a) Write a model $N(t)$ for the number of bacteria after $t$ hours.
b) Estimate the number after $10$ hours.

::hint
**What you need:** after $t$ hours there have been $\dfrac t4$ triplings.

::solution
a) The number is multiplied by $3$ every $4$ hours, so after $t$ hours it has been multiplied by $3^{t/4}$:
$$N(t)=200\cdot3^{t/4}.$$

b) After $10$ hours, $N(10)=200\cdot3^{2.5}\approx3117.7$.

So there are about $3118$ bacteria after $10$ hours.

**Answer.** a) $N(t)=200\cdot3^{t/4}$; b) about $3118$.
:::

:::exercise
A car bought for $30{,}000$ dollars loses $15\%$ of its value each year. After how many complete years is it first worth less than half of its original price?

::hint
**What you need:** solve $0.85^t<0.5$ with a table or logarithms.

::solution
The value after $t$ years is $30{,}000(0.85)^t$, and half of the price is $15{,}000$.

After $4$ years the value is $30{,}000(0.85)^4\approx15{,}660$ dollars, still more than half. After $5$ years it is $30{,}000(0.85)^5\approx13{,}311$ dollars.

So the car is first worth less than half of its price after $5$ years.

**Answer.** $5$ years.
:::

:::exercise
Two savings plans start with $100$ dollars. Plan A adds $20$ dollars each month; plan B grows by $10\%$ each month. After how many months is plan B worth more than plan A for the first time?

::hint
**What you need:** $A(n)=100+20n$ and $B(n)=100(1.1)^n$; make a table.

::solution
Plan A is linear, $A(n)=100+20n$, and plan B is exponential, $B(n)=100(1.1)^n$.

A table gives: $n=14$: $A=380$, $B\approx379.7$; $n=15$: $A=400$, $B\approx417.7$.

So plan A is still ahead after $14$ months, and plan B is ahead from month $15$.

So plan B is worth more than plan A for the first time after $15$ months. In the long run the exponential plan always overtakes the linear one.

**Answer.** $15$ months.
:::

:::exercise Challenge
An exponential function $f(x)=ab^x$ satisfies $f(2)=12$ and $f(5)=96$. Find $f(0)$.

::hint
**What you need:** divide $f(5)$ by $f(2)$ to find $b^3$.

::solution
Divide the two values to eliminate $a$: $\dfrac{ab^5}{ab^2}=b^3=\dfrac{96}{12}=8$, so $b=2$.

Then $a\cdot2^2=12$, so $a=3$, and $f(x)=3\cdot2^x$.

So $f(0)=a=3$.

**Answer.** $3$.
:::

:::quiz
::mc
What is the next term of the sequence $2, 6, 18, \dots$?
A. $24$
B. $36$
C. $54$
D. $30$
::key C
The ratio is $3$, so the next term is $18\times3=54$.

::mc
Which formula gives the arithmetic sequence $4, 9, 14, \dots$?
A. $a_n=5n-1$
B. $a_n=4n+5$
C. $a_n=4\cdot5^{n-1}$
D. $a_n=5n+4$
::key A
$a_1=4$ and $d=5$: $4+5(n-1)=5n-1$.

::mc
A quantity is modeled by $Q(t)=80(1.07)^t$. What does $1.07$ tell us?
A. It increases by $1.07$ units each period.
B. It decreases by $7\%$ each period.
C. Its starting value is $1.07$.
D. It increases by $7\%$ each period.
::key D
A growth factor of $1.07$ means an increase of $7\%$ per period.

::mc
Which function shows exponential decay?
A. $f(x)=0.9x+3$
B. $f(x)=3(0.9)^x$
C. $f(x)=3(1.9)^x$
D. $f(x)=-3(1.9)^{-x}$
::key B
For $a>0$, a base between $0$ and $1$ gives decay.

::tf
Let $f(x)=200(0.5)^{x/3}$. Decide whether each statement is true or false.
a) $f(0)=200$.
b) The value is halved every $3$ units of $x$.
c) $f$ is increasing.
d) The graph has the horizontal asymptote $y=0$.
::key T T F T
The base $0.5$ is less than $1$, so $f$ is decreasing towards $0$.

::sa
A geometric sequence has $g_1=3$ and $r=2$. Find $g_5$.
::key 48
$3\cdot2^4=48$.

::sa
An exponential function has $f(0)=10$ and $f(1)=15$. Find $f(2)$.
::key 22.5
The factor is $1.5$, so $f(2)=15\times1.5=22.5$.
:::
