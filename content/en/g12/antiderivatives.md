---
title: Antiderivatives
description: See antiderivatives as differentiation in reverse, use the table of standard antiderivatives, meet a given condition and find distance from velocity.
minutes: 20
---

:::goals
- Understand an antiderivative of a function and the family $F(x)+C$.
- Use the table of standard antiderivatives and the two linearity rules to find $\displaystyle\int f(x)\,dx$.
- Find the antiderivative that meets a given condition, and check the result by differentiating.
- Find the distance travelled from the velocity in a motion problem.
:::

A car is travelling at $20$ m/s when the driver brakes. From that moment, its velocity after $t$ seconds is $v(t)=20-5t$ (m/s), and the car comes to a stop after $4$ seconds. How many metres does it travel in those $4$ seconds?

You might think: $20\cdot 4=80$ m. But the car keeps slowing down, so the distance must be less. To answer, we need to run differentiation backwards.

A car's speedometer shows the velocity at each moment, while its odometer shows how far the car has gone. Differentiation goes from distance to velocity; this lesson studies the reverse journey, from velocity back to distance. The same reverse step finds the amount of water in a tank from its rate of flow, or a population from its rate of growth.

## What is an antiderivative?

### Explore: which functions have derivative $2x$?

In grade 11 we learnt to differentiate. Now we ask the reverse question: if the derivative is $2x$, what was the function?

| Function $F(x)$ | $x^2$ | $x^2+1$ | $x^2-5$ | $x^2+\sqrt3$ |
|---|---|---|---|---|
| Derivative $F'(x)$ | $2x$ | $2x$ | $2x$ | $2x$ |

There are many answers, but they differ only by a constant, because the derivative of a constant is $0$. In the car problem, the velocity is the derivative of the distance, so we need a function $s(t)$ with $s'(t)=20-5t$.

:::definition Antiderivative
Let $f(x)$ be defined on an interval $K$ (open, closed or half-open). A function $F(x)$ is an **antiderivative** of $f(x)$ on $K$ if
$$F'(x)=f(x)\quad\text{for every } x\in K.$$
:::

:::theorem The family of antiderivatives
If $F(x)$ is an antiderivative of $f(x)$ on $K$, then every antiderivative of $f(x)$ on $K$ has the form $F(x)+C$, where $C$ is a constant. We write
$$\int f(x)\,dx=F(x)+C.$$
:::

**Why is it true?** If $G(x)$ is another antiderivative, then $\big(G(x)-F(x)\big)'=f(x)-f(x)=0$ on $K$. A function whose derivative is $0$ on a whole interval neither increases nor decreases, so it is a constant: $G(x)-F(x)=C$.

**A closer look.** The constant $C$ is not a spare detail. If we know a car's velocity at every moment, we know how much *further* it goes, but not *where* it is: that also depends on where it started. The constant $C$ is exactly this missing piece of information, and a condition such as $s(0)=0$ fixes it.

**Connections.** This lesson reads the differentiation formulas (grade 11) backwards. Antiderivatives are the tool for computing definite integrals in the next lesson, and then areas and volumes in the lesson on applications of integrals.

The symbol $\displaystyle\int f(x)\,dx$ is read "the indefinite integral of $f$"; it stands for the whole family of antiderivatives. Every function that is continuous on $K$ has an antiderivative on $K$. The definition also gives $\displaystyle\int f'(x)\,dx=f(x)+C$.

## The table and the rules

Each row of this table is a derivative formula read backwards. You can check every row by differentiating the right-hand side.

| Function $f(x)$ | Indefinite integral $\displaystyle\int f(x)\,dx$ |
|---|---|
| $0$ | $C$ |
| $1$ | $x+C$ |
| $x^{\alpha}$ $(\alpha\neq-1)$ | $\dfrac{x^{\alpha+1}}{\alpha+1}+C$ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ $(0<a\neq1)$ | $\dfrac{a^x}{\ln a}+C$ |
| $\cos x$ | $\sin x+C$ |
| $\sin x$ | $-\cos x+C$ |
| $\dfrac{1}{\cos^2x}$ | $\tan x+C$ |
| $\dfrac{1}{\sin^2x}$ | $-\cot x+C$ |

Notice the minus sign in the $\sin x$ row: since $(\cos x)'=-\sin x$, to get $\sin x$ we must take $-\cos x$.

:::theorem Rules for antiderivatives
If $f$ and $g$ have antiderivatives on $K$ and $k$ is a non-zero constant, then
$$\int k f(x)\,dx=k\int f(x)\,dx,\qquad \int\big(f(x)\pm g(x)\big)\,dx=\int f(x)\,dx\pm\int g(x)\,dx.$$
:::

Both rules hold because differentiation follows the same rules. With them, we find the antiderivative of a sum one term at a time.

:::example The antiderivative of a polynomial
Find $\displaystyle\int(3x^2-4x+5)\,dx$.

**Solution.** Applying the formula for the antiderivative of $x^{\alpha}$ to each term, we have

$$\int(3x^2-4x+5)\,dx=3\cdot\frac{x^3}{3}-4\cdot\frac{x^2}{2}+5x+C=x^3-2x^2+5x+C.$$

**Check.** $(x^3-2x^2+5x)'=3x^2-4x+5$, which is the original function.

So $\displaystyle\int(3x^2-4x+5)\,dx=x^3-2x^2+5x+C$.
:::

With roots and fractions, we rewrite them as powers before using the table.

:::example Roots and fractions
Find $\displaystyle\int\left(2\sqrt x-\frac3x+\frac1{x^2}\right)dx$ on $(0, +\infty)$.

**Solution.** We have $\sqrt x=x^{\frac12}$ and $\dfrac{1}{x^2}=x^{-2}$. Since $\dfrac3x$ has exponent $-1$, we use the $\ln\lvert x\rvert$ formula. Hence

$$\begin{aligned}
\int\left(2x^{\frac12}-\frac3x+x^{-2}\right)dx&=2\cdot\frac{x^{\frac32}}{\frac32}-3\ln\lvert x\rvert+\frac{x^{-1}}{-1}+C\\
&=\frac43x\sqrt x-3\ln x-\frac1x+C.
\end{aligned}$$

Since $\lvert x\rvert=x$ on $(0, +\infty)$, we may write $\ln x$.

So the required family of antiderivatives is $\dfrac43x\sqrt x-3\ln x-\dfrac1x+C$.
:::

Next come exponential and trigonometric functions. Watch every sign.

:::example Exponential and trigonometric functions
Find $\displaystyle\int\left(4\cos x-2\sin x+3^x\right)dx$.

**Solution.** Applying the formulas for the antiderivatives of $\cos x$, $\sin x$ and $a^x$, we have

$$\int\left(4\cos x-2\sin x+3^x\right)dx=4\sin x-2(-\cos x)+\frac{3^x}{\ln 3}+C=4\sin x+2\cos x+\frac{3^x}{\ln3}+C.$$
:::

Many functions are not in the table, but a small rearrangement puts them there.

:::example Rearranging first
Find a) $\displaystyle\int\frac{(x+1)^2}{x}\,dx$ on $(0, +\infty)$; b) $\displaystyle\int\tan^2x\,dx$ on $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$.

**Solution.** a) Expanding the numerator and dividing each term by $x$, we have

$$\int\frac{x^2+2x+1}{x}\,dx=\int\left(x+2+\frac1x\right)dx=\frac{x^2}{2}+2x+\ln x+C.$$

b) Since $1+\tan^2x=\dfrac{1}{\cos^2x}$, we have $\tan^2x=\dfrac{1}{\cos^2x}-1$. Hence

$$\int\tan^2x\,dx=\int\left(\frac{1}{\cos^2x}-1\right)dx=\tan x-x+C.$$
:::

## The antiderivative that meets a condition

A family of antiderivatives has infinitely many members. When we are given one more value, such as $F(0)=5$, we substitute it to find exactly one constant $C$.

:::example An antiderivative through a point
Find the antiderivative $F(x)$ of the function $f(x)=e^x+4x$ that satisfies $F(0)=5$.

**Solution.** We have

$$F(x)=\int(e^x+4x)\,dx=e^x+2x^2+C.$$

Substituting $x=0$, we get (note that $e^0=1$, not $0$)

$$F(0)=1+0+C=5\iff C=4.$$

So $F(x)=e^x+2x^2+4$.
:::

Graphically, each constant $C$ gives one graph, and these graphs are vertical translations of one another. The condition $F(x_0)=y_0$ picks out the one graph through the point $(x_0, y_0)$.

:::graph Three antiderivatives of $f(x)=2x$
alt: Three identical parabolas y equals x squared minus 2, x squared and x squared plus 2, stacked vertically one above another
x: -3..3
y: -3..7
plot: x^2 - 2
plot: x^2
plot: x^2 + 2
point: (0, 2) "C = 2" right
point: (0, 0) "C = 0" right
point: (0, -2) "C = -2" right
:::

## From velocity to distance

If $s(t)$ is the distance an object has travelled after $t$ seconds, its velocity is $v(t)=s'(t)$. So $s(t)$ is an antiderivative of $v(t)$. In the same way, the velocity is an antiderivative of the acceleration. Now we can answer the question about the car.

:::example Braking distance
After braking, the car has velocity $v(t)=20-5t$ (m/s). Find the distance it travels from the moment of braking until it stops.

**Solution.** The car stops when $v(t)=0$, that is $20-5t=0\iff t=4$. Let $s(t)$ (m) be the distance travelled $t$ seconds after braking. We have $s(0)=0$ and

$$s(t)=\int(20-5t)\,dt=20t-\frac{5t^2}{2}+C,\qquad s(0)=C=0.$$

Hence the distance until it stops is

$$s(4)=20\cdot4-\frac{5\cdot16}{2}=80-40=40.$$

So the car travels $40$ m more, only half of the $80$ m guessed at the start.

**Look back.** What if the car were going at only $10$ m/s and braked with the same deceleration, so that $v(t)=10-5t$? It stops after $2$ seconds and travels $s(2)=20-10=10$ m. Halving the speed cuts the braking distance to a quarter: with the same deceleration, the braking distance is proportional to the square of the speed. This is why every extra km/h above the speed limit makes the braking distance noticeably longer.
:::

:::warning Common mistakes
- **Using the power rule for $\dfrac1x$.** Wrong: $\displaystyle\int x^{-1}dx=\frac{x^0}{0}+C$. Why it is wrong: the formula $\dfrac{x^{\alpha+1}}{\alpha+1}$ only works when $\alpha\neq-1$. Right: $\displaystyle\int\frac1x\,dx=\ln\lvert x\rvert+C$.
- **The wrong sign with $\sin x$.** Wrong: $\displaystyle\int\sin x\,dx=\cos x+C$. Why it is wrong: $(\cos x)'=-\sin x$. Right: $\displaystyle\int\sin x\,dx=-\cos x+C$.
- **Splitting the antiderivative of a product.** Wrong: $\displaystyle\int x\cdot x\,dx=\frac{x^2}{2}\cdot\frac{x^2}{2}+C$. Why it is wrong: there is no rule "the antiderivative of a product is the product of the antiderivatives"; differentiating the right-hand side gives $x^3\neq x^2$. Right: $\displaystyle\int x^2\,dx=\frac{x^3}{3}+C$.
- **Taking $e^0=0$ when finding $C$.** Wrong: $F(x)=e^x+2x^2+C$ and $F(0)=5$, so $C=5$. Why it is wrong: $e^0=1$. Right: $1+C=5$, so $C=4$.
:::

## Key terms

:::terms
- antiderivative | nguyên hàm
- family of antiderivatives | họ nguyên hàm
- indefinite integral | tích phân bất định
- arbitrary constant $C$ | hằng số tuỳ ý $C$
- table of standard antiderivatives | bảng nguyên hàm cơ bản
- velocity | vận tốc
- acceleration | gia tốc
- distance travelled | quãng đường
:::

## Summary

- $F$ is an antiderivative of $f$ on $K$ when $F'(x)=f(x)$ for every $x\in K$.
- Every antiderivative has the form $F(x)+C$; we write $\displaystyle\int f(x)\,dx=F(x)+C$.
- The table to remember: $x^\alpha\to\dfrac{x^{\alpha+1}}{\alpha+1}$ ($\alpha\neq-1$), $\dfrac1x\to\ln\lvert x\rvert$, $e^x\to e^x$, $a^x\to\dfrac{a^x}{\ln a}$, $\cos x\to\sin x$, $\sin x\to-\cos x$, $\dfrac1{\cos^2x}\to\tan x$, $\dfrac1{\sin^2x}\to-\cot x$.
- Constant factors, sums and differences split apart; products do **not**.
- Given $F(x_0)=y_0$, substitute it to find $C$.
- Distance is an antiderivative of velocity; always check by differentiating.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find $\displaystyle\int(4x^3-6x+7)\,dx$.

::hint
**What you need:** $\displaystyle\int x^\alpha dx=\frac{x^{\alpha+1}}{\alpha+1}+C$ and the rule for sums.

**Steps:**
1. Find the antiderivative of each term.
2. Add a constant $C$ and check by differentiating.

::solution
We have $\displaystyle\int(4x^3-6x+7)\,dx=4\cdot\frac{x^4}{4}-6\cdot\frac{x^2}{2}+7x+C=x^4-3x^2+7x+C$.

So the required family is $x^4-3x^2+7x+C$.

**Answer.** $x^4-3x^2+7x+C$.
:::

:::exercise
Find $\displaystyle\int\left(3\sqrt x+\frac1{x^2}\right)dx$ on $(0, +\infty)$.

::hint
**What you need:** write $\sqrt x=x^{\frac12}$ and $\dfrac{1}{x^2}=x^{-2}$, then use the power formula.

**Steps:**
1. Rewrite as powers.
2. Apply the formula to each term.

::solution
We have $\displaystyle\int\left(3x^{\frac12}+x^{-2}\right)dx=3\cdot\frac{x^{\frac32}}{\frac32}+\frac{x^{-1}}{-1}+C=2x\sqrt x-\frac1x+C$.

So the required family is $2x\sqrt x-\dfrac1x+C$.

**Answer.** $2x\sqrt x-\dfrac1x+C$.
:::

:::exercise
Find $\displaystyle\int\left(5e^x-2\sin x+\frac{1}{\sin^2x}\right)dx$.

::hint
**What you need:** the $e^x$, $\sin x$ and $\dfrac{1}{\sin^2x}$ rows of the table.

**Steps:**
1. Write the antiderivative of each term, watching the two minus signs.
2. Put them together and add $C$.

::solution
We have $\displaystyle\int\left(5e^x-2\sin x+\frac{1}{\sin^2x}\right)dx=5e^x-2(-\cos x)+(-\cot x)+C=5e^x+2\cos x-\cot x+C$.

So the required family is $5e^x+2\cos x-\cot x+C$.

**Answer.** $5e^x+2\cos x-\cot x+C$.
:::

:::exercise
Find $\displaystyle\int(2x-1)^2\,dx$.

::hint
**What you need:** do not find the antiderivative of a square by "squaring the antiderivative"; expand first.

**Steps:**
1. Expand $(2x-1)^2=4x^2-4x+1$.
2. Find the antiderivative of the polynomial.

::solution
We have $(2x-1)^2=4x^2-4x+1$. Hence $\displaystyle\int(4x^2-4x+1)\,dx=\frac{4x^3}{3}-2x^2+x+C$.

So the required family is $\dfrac43x^3-2x^2+x+C$.

**Answer.** $\dfrac43x^3-2x^2+x+C$.
:::

:::exercise
Consider the function $f(x)=3x^2+2\cos x$. Decide whether each statement is true or false.

a) $F(x)=x^3+2\sin x$ is an antiderivative of $f(x)$.

b) $F(x)=x^3-2\sin x+5$ is an antiderivative of $f(x)$.

c) The antiderivative $G(x)$ of $f(x)$ with $G(0)=1$ is $G(x)=x^3+2\sin x+1$.

d) For $G(x)$ in c), $G\left(\dfrac{\pi}{2}\right)=\dfrac{\pi^3}{8}+2$.

::hint
**What you need:** $F$ is an antiderivative of $f$ when $F'=f$; the condition $G(0)=1$ fixes the constant $C$.

**Steps:**
1. Differentiate the functions in a) and b).
2. Find $C$ in c), then substitute $x=\dfrac{\pi}{2}$ for d).

::solution
a) **True**. We have $(x^3+2\sin x)'=3x^2+2\cos x=f(x)$.

b) **False**. We have $(x^3-2\sin x+5)'=3x^2-2\cos x\neq f(x)$.

c) **True**. We have $G(x)=x^3+2\sin x+C$ and $G(0)=C=1$.

d) **False**. We have $G\left(\dfrac{\pi}{2}\right)=\dfrac{\pi^3}{8}+2\cdot1+1=\dfrac{\pi^3}{8}+3$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Let $F(x)$ be the antiderivative of $f(x)=4x^3-2x$ that satisfies $F(1)=3$. Find $F(2)$.

::hint
**What you need:** find the family of antiderivatives, then use $F(1)=3$ to find $C$.

**Steps:**
1. $F(x)=x^4-x^2+C$.
2. Substitute $x=1$ to find $C$, then compute $F(2)$.

::solution
We have $F(x)=x^4-x^2+C$. Since $F(1)=1-1+C=3$, $C=3$.

So $F(2)=16-4+3=15$.

**Answer.** $15$.
:::

:::exercise
A tank already holds $200$ litres of water. A pump is switched on, and $t$ minutes later the volume of water is changing at the rate $V'(t)=6t+20$ (litres per minute). How many litres are in the tank after $10$ minutes?

::hint
**What you need:** the volume $V(t)$ is an antiderivative of $V'(t)$; at the start, $V(0)=200$.

**Steps:**
1. Find $V(t)=3t^2+20t+C$.
2. Use $V(0)=200$ to find $C$, then compute $V(10)$.

::solution
Let $V(t)$ (litres) be the volume of water in the tank after $t$ minutes. We have $V(t)=\displaystyle\int(6t+20)\,dt=3t^2+20t+C$. Since $V(0)=C=200$, $V(t)=3t^2+20t+200$.

So after $10$ minutes the tank holds $V(10)=300+200+200=700$ litres.

**Answer.** $700$ litres.
:::

:::exercise Review
An object moves in a straight line with velocity $v(t)=12t-3t^2$ (m/s), $0\le t\le 4$. Find its greatest velocity and the distance it travels in the first $4$ seconds.

::hint
**What you need:** how to find a maximum on a closed interval (see [maximum and minimum values](lesson:max-min-values)); distance is an antiderivative of velocity.

**Steps:**
1. Solve $v'(t)=0$ and compare $v(0)$, $v(2)$, $v(4)$.
2. Find $s(t)$ with $s(0)=0$, then compute $s(4)$.

::solution
We have $v'(t)=12-6t=0\iff t=2$, and $v(0)=0$, $v(2)=12$, $v(4)=0$. Since $v(t)\ge0$ on $[0, 4]$, the object never turns back. We have $s(t)=6t^2-t^3$ (because $s(0)=0$), so $s(4)=96-64=32$.

So the greatest velocity is $12$ m/s and the distance is $32$ m.

**Answer.** Greatest velocity $12$ m/s (at $t=2$); distance $32$ m.
:::

:::exercise Challenge
Find the function $f(x)$ with $f''(x)=6x+2$, $f'(0)=1$ and $f(0)=-1$.

::hint
**What you need:** $f'$ is an antiderivative of $f''$, and $f$ is an antiderivative of $f'$ (second derivatives were met in grade 11).

**Steps:**
1. Find $f'(x)$ and use $f'(0)=1$ to find the first constant.
2. Find $f(x)$ and use $f(0)=-1$ to find the second constant.

::solution
We have $f'(x)=\displaystyle\int(6x+2)\,dx=3x^2+2x+C_1$. Since $f'(0)=C_1=1$, $f'(x)=3x^2+2x+1$. It follows that $f(x)=x^3+x^2+x+C_2$. Since $f(0)=C_2=-1$, $f(x)=x^3+x^2+x-1$ (check: $f''(x)=6x+2$).

So $f(x)=x^3+x^2+x-1$.

**Answer.** $f(x)=x^3+x^2+x-1$.
:::

:::exercise Challenge
Find $\displaystyle\int\sin^2\frac{x}{2}\,dx$.

::hint
**What you need:** the double-angle formula (grade 11): $\cos x=1-2\sin^2\dfrac x2$, so $\sin^2\dfrac x2=\dfrac{1-\cos x}{2}$.

**Steps:**
1. Replace $\sin^2\dfrac x2$ by $\dfrac12-\dfrac12\cos x$.
2. Find the antiderivative term by term.

::solution
We have $\sin^2\dfrac x2=\dfrac{1-\cos x}{2}$ (the half-angle formula). Hence $\displaystyle\int\left(\frac12-\frac12\cos x\right)dx=\frac x2-\frac12\sin x+C$. Check: $\left(\dfrac x2-\dfrac12\sin x\right)'=\dfrac{1-\cos x}{2}=\sin^2\dfrac x2$.

**Answer.** $\dfrac x2-\dfrac{\sin x}{2}+C$.
:::

## Mini test

:::quiz
::mc
The family of antiderivatives of the function $f(x)=3x^2-\sin x$ is
A. $x^3+\cos x+C$.
B. $x^3-\cos x+C$.
C. $6x-\cos x+C$.
D. $3x^3+\cos x+C$.
::key A
We have $\displaystyle\int 3x^2dx=x^3$ and $\displaystyle\int(-\sin x)\,dx=\cos x$ (plus a constant). Option B has the wrong sign, C differentiates $3x^2$ instead of integrating it, and D forgets to divide by $3$.

::mc
The family of antiderivatives of the function $f(x)=2^x$ is
A. $2^x\ln 2+C$.
B. $\dfrac{2^x}{\ln 2}+C$.
C. $\dfrac{2^{x+1}}{x+1}+C$.
D. $x\cdot 2^{x-1}+C$.
::key B
Since $\left(\dfrac{2^x}{\ln2}\right)'=\dfrac{2^x\ln2}{\ln2}=2^x$, the answer is B. Option A is the derivative of $2^x$; C and D wrongly use the $x^\alpha$ formula for an exponential.

::mc
Let $F(x)$ be the antiderivative of the function $f(x)=2x+1$ that satisfies $F(1)=5$. The value of $F(2)$ is
A. $6$.
B. $11$.
C. $9$.
D. $5$.
::key C
We have $F(x)=x^2+x+C$. Since $F(1)=2+C=5$, $C=3$, so $F(2)=4+2+3=9$. Option A forgets to find $C$, B takes $C=5$, and D is $f(2)$.

::mc
A car brakes with velocity $v(t)=15-3t$ (m/s) until it stops. The distance it travels from braking until it stops is
A. $75$ m.
B. $37.5$ m.
C. $112.5$ m.
D. $0$ m.
::key B
The car stops when $v(t)=0\iff t=5$. We have $s(t)=15t-\dfrac{3t^2}{2}$, so $s(5)=75-37.5=37.5$. Option A treats the velocity as constant, C has the wrong sign on the second term, and D forgets to divide $t^2$ by $2$.

::tf
Consider the function $f(x)=e^x-2x$. Decide whether each statement is true or false.
a) $F(x)=e^x-x^2$ is an antiderivative of $f(x)$.
b) $\displaystyle\int f(x)\,dx=e^x-2+C$.
c) The antiderivative $F(x)$ of $f(x)$ with $F(0)=3$ is $F(x)=e^x-x^2+2$.
d) For $F(x)$ in c), $F(1)=e+1$.
::key T F T T
a) True: we have $(e^x-x^2)'=e^x-2x$. b) False: $e^x-2$ is the derivative of $f$, not an antiderivative. c) True: since $F(0)=1+C=3$, $C=2$. d) True: substituting $x=1$, we get $F(1)=e-1+2=e+1$.

::sa
Let $F(x)$ be the antiderivative of the function $f(x)=6x^2-4x+3$ that satisfies $F(0)=-2$. Find $F(2)$.
::key 12
We have $F(x)=2x^3-2x^2+3x+C$ and $F(0)=C=-2$. So $F(2)=16-8+6-2=12$.

::sa
Let $F(x)$ be the antiderivative of the function $f(x)=e^x+\dfrac1x$ on $(0, +\infty)$ that satisfies $F(1)=e$. Find $F(2)$ (give your answer to 1 decimal place).
::key 8.1
We have $F(x)=e^x+\ln x+C$. Since $F(1)=e+C=e$, $C=0$. So $F(2)=e^2+\ln2\approx7.389+0.693\approx8.1$.
:::
