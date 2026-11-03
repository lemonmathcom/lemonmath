---
title: Asymptotes
description: Find the vertical, horizontal and oblique asymptotes of a graph with limits, for the usual rational functions, and draw them.
minutes: 20
---

:::goals
- Understand and find the horizontal and vertical asymptotes of a graph with limits.
- Find an oblique asymptote by polynomial division or with the limit formulas.
- Find the asymptotes of $y=\dfrac{ax+b}{cx+d}$ and $y=\dfrac{ax^2+bx+c}{mx+n}$, and count the asymptotes of a graph.
- Explain what an asymptote means in a real-life problem.
:::

A small workshop bottles mineral water. Each month it pays $2000$ thousand đồng in fixed costs (rent, electricity), and each bottle costs another $5$ thousand đồng. If it makes $x$ bottles, the average cost per bottle is
$$A(x)=\frac{5x+2000}{x}\ \ (\text{thousand đồng}).$$
The more bottles it makes, the lower the average cost. Can it ever drop below $5$ thousand đồng?

## Horizontal asymptotes

### Explore: when $x$ is very large

We compute $A(x)$ for a few large values of $x$:

| $x$ | $100$ | $1000$ | $10\,000$ | $100\,000$ |
|---|---|---|---|---|
| $A(x)$ | $25$ | $7$ | $5.2$ | $5.02$ |

The values get closer and closer to $5$ but stay above $5$, because $A(x)=5+\dfrac{2000}{x}$. On the graph, as $x$ grows, the curve gets closer and closer to the line $y=5$ without touching it. Such a line is called an asymptote.

:::definition Horizontal asymptote
The line $y=y_0$ is a **horizontal asymptote** of the graph of $y=f(x)$ if
$$\lim_{x\to+\infty} f(x)=y_0\quad\text{or}\quad \lim_{x\to-\infty} f(x)=y_0.$$
:::

So to find horizontal asymptotes, we compute the two limits of $f$ at $+\infty$ and at $-\infty$ (see limits of functions in grade 11).

## Vertical asymptotes

For $y=\dfrac{1}{x-2}$, when $x$ is close to $2$ the denominator is very small, so $y$ is very large in absolute value: $y(2.01)=100$, $y(1.99)=-100$. The graph "shoots" up or down along the line $x=2$.

:::definition Vertical asymptote
The line $x=x_0$ is a **vertical asymptote** of the graph of $y=f(x)$ if at least one of the following limits holds:
$$\lim_{x\to x_0^+} f(x)=+\infty,\quad \lim_{x\to x_0^+} f(x)=-\infty,\quad \lim_{x\to x_0^-} f(x)=+\infty,\quad \lim_{x\to x_0^-} f(x)=-\infty.$$
:::

For a rational function, we find the values that make the denominator zero, then **check the limit** at each of them: there is a vertical asymptote only when the limit is infinite.

:::example Linear over linear
Find the asymptotes of the graph of $y=\dfrac{2x-1}{x+1}$.

**Solution.** We compute the limits at infinity by dividing the numerator and the denominator by $x$:

$$\lim_{x\to\pm\infty}\frac{2x-1}{x+1}=\lim_{x\to\pm\infty}\frac{2-\frac1x}{1+\frac1x}=2.$$

The denominator is zero at $x=-1$, and the numerator there is $-3\neq 0$. As $x\to-1^+$, the denominator is positive and very small:

$$\lim_{x\to-1^+}\frac{2x-1}{x+1}=-\infty,\qquad \lim_{x\to-1^-}\frac{2x-1}{x+1}=+\infty.$$

So the graph has the horizontal asymptote $y=2$ and the vertical asymptote $x=-1$.
:::

:::graph The graph of $y=\dfrac{2x-1}{x+1}$ and its two asymptotes
alt: A two-branch graph of a rational function; the right branch rises towards the dashed horizontal line y equal 2, and both branches hug the dashed vertical line x equal minus 1
x: -8..6
y: -6..10
plot: (2x - 1)/(x + 1)
vline: -1 ; dashed
hline: 2 ; dashed
point: (0.5, 0) "(0.5, 0)" below-right
point: (0, -1) "(0, -1)" right
:::

In general, the graph of $y=\dfrac{ax+b}{cx+d}$ (with $c\neq0$, $ad-bc\neq0$) has the vertical asymptote $x=-\dfrac{d}{c}$ and the horizontal asymptote $y=\dfrac{a}{c}$. The next example shows why we must check the limit and not just look at the denominator.

:::example A zero denominator but no asymptote
Find the asymptotes of the graph of $y=\dfrac{x+1}{x^2-1}$.

**Solution.** The denominator is zero at $x=1$ and $x=-1$. For $x\neq\pm1$, we can simplify:

$$y=\frac{x+1}{(x-1)(x+1)}=\frac{1}{x-1}.$$

At these two values, the limits give different results:

$$\lim_{x\to1^+}\frac{1}{x-1}=+\infty,\qquad \lim_{x\to-1}\frac{1}{x-1}=-\frac12\ (\text{finite}).$$

At infinity: $\lim\limits_{x\to\pm\infty}\dfrac{1}{x-1}=0$.

So the graph has exactly two asymptotes: the vertical asymptote $x=1$ and the horizontal asymptote $y=0$; the line $x=-1$ is **not** an asymptote.
:::

## Oblique asymptotes

Some graphs do not approach a horizontal line but a **slanted** line as $x\to\pm\infty$.

:::definition Oblique asymptote
The line $y=ax+b$ ($a\neq0$) is an **oblique asymptote** (slant asymptote) of the graph of $y=f(x)$ if
$$\lim_{x\to+\infty}\big[f(x)-(ax+b)\big]=0\quad\text{or}\quad \lim_{x\to-\infty}\big[f(x)-(ax+b)\big]=0.$$
Then $a=\lim\dfrac{f(x)}{x}$ and $b=\lim\big[f(x)-ax\big]$ (both as $x\to+\infty$, or both as $x\to-\infty$).
:::

For $y=\dfrac{ax^2+bx+c}{mx+n}$, the quickest way is polynomial division, writing $y=px+q+\dfrac{r}{mx+n}$. The part $\dfrac{r}{mx+n}$ tends to $0$ as $x\to\pm\infty$, so the oblique asymptote is $y=px+q$.

:::example Division to find an oblique asymptote
Find the asymptotes of the graph of $y=\dfrac{x^2-x+2}{x-1}$.

**Solution.** Dividing $x^2-x+2$ by $x-1$ gives quotient $x$ and remainder $2$:

$$y=x+\frac{2}{x-1},\qquad y-x=\frac{2}{x-1}\to0\ \text{as}\ x\to\pm\infty.$$

At $x=1$, the numerator is $2\neq0$ and the denominator is $0$, so $\lim\limits_{x\to1^+}y=+\infty$.

So the graph has the oblique asymptote $y=x$ and the vertical asymptote $x=1$ (there is no horizontal asymptote since $y\to\pm\infty$ as $x\to\pm\infty$).
:::

:::graph The graph of $y=\dfrac{x^2-x+2}{x-1}$ with the oblique asymptote $y=x$
alt: A two-branch graph; each branch approaches the dashed diagonal line y equal x far from the origin, and hugs the dashed vertical line x equal 1
x: -6..8
y: -8..12
plot: (x^2 - x + 2)/(x - 1)
plot: x ; dashed
vline: 1 ; dashed
:::

When division is awkward, we use the limit formulas from the definition. We try them on another function to see that both methods agree.

:::example Using the limit formulas
Find the oblique asymptote of the graph of $y=\dfrac{2x^2+3x-1}{x+2}$.

**Solution.** We compute $a$ and then $b$ as $x\to+\infty$ (as $x\to-\infty$ the result is exactly the same):

$$a=\lim_{x\to+\infty}\frac{2x^2+3x-1}{x(x+2)}=2,\qquad b=\lim_{x\to+\infty}\left(\frac{2x^2+3x-1}{x+2}-2x\right)=\lim_{x\to+\infty}\frac{-x-1}{x+2}=-1.$$

**Check.** Division gives $2x^2+3x-1=(x+2)(2x-1)+1$, that is $y=2x-1+\dfrac{1}{x+2}$.

So the graph has the oblique asymptote $y=2x-1$.
:::

A graph can have **two** different horizontal asymptotes on its two sides, as in the next example.

:::example Two horizontal asymptotes
Find the horizontal asymptotes of the graph of $y=\dfrac{3x}{\sqrt{x^2+4}}$.

**Solution.** Take $x^2$ out of the square root: $\sqrt{x^2+4}=|x|\sqrt{1+\frac{4}{x^2}}$. The sign of $|x|$ differs on the two sides:

$$\lim_{x\to+\infty}\frac{3x}{x\sqrt{1+\frac4{x^2}}}=3,\qquad \lim_{x\to-\infty}\frac{3x}{-x\sqrt{1+\frac4{x^2}}}=-3.$$

The function is defined and continuous on $\mathbb{R}$, so there is no vertical asymptote.

So the graph has two horizontal asymptotes: $y=3$ (as $x\to+\infty$) and $y=-3$ (as $x\to-\infty$).
:::

:::graph The graph of $y=\dfrac{3x}{\sqrt{x^2+4}}$
alt: An S-shaped curve through the origin, approaching the dashed horizontal line y equal 3 on the right and y equal minus 3 on the left
x: -12..12
y: -4..4
plot: 3x/sqrt(x^2 + 4)
hline: 3 ; dashed
hline: -3 ; dashed
:::

## What asymptotes mean in real life

We return to the bottling question from the start.

:::example Average cost
For $A(x)=\dfrac{5x+2000}{x}$ (thousand đồng per bottle), $x>0$, find the horizontal asymptote of the graph and explain what it means. Can the average cost be less than $5$ thousand đồng?

**Solution.** We split the fraction to see the part that tends to $0$:

$$A(x)=5+\frac{2000}{x},\qquad \lim_{x\to+\infty}A(x)=5.$$

The line $y=5$ is a horizontal asymptote. Since $\dfrac{2000}{x}>0$ for every $x>0$, we always have $A(x)>5$.

So the more bottles are made, the closer the average cost gets to $5$ thousand đồng (exactly the cost of one bottle on its own), but it is never less than $5$ thousand đồng.
:::

:::warning Common mistakes
- **A zero denominator always gives a vertical asymptote.** Wrong: "$y=\dfrac{x+1}{x^2-1}$ has two vertical asymptotes $x=\pm1$". Why it is wrong: at $x=-1$ the limit is $-\dfrac12$, which is finite. Right: only $x=1$.
- **Writing a vertical asymptote as $y=\dots$.** Wrong: the vertical asymptote is $y=-1$. Why it is wrong: a vertical line has the form $x=x_0$. Right: vertical asymptote $x=-1$, horizontal asymptote $y=2$.
- **Losing the remainder or a sign in the division.** Wrong: "$y=\dfrac{x^2-3x+4}{x-2}$ has the oblique asymptote $y=x+1$". Why it is wrong: $x^2-3x+4=(x-2)(x-1)+2$. Right: the oblique asymptote is $y=x-1$.
- **Ignoring the sign of $|x|$.** Wrong: "$\sqrt{x^2+4}\approx x$, so $y=\dfrac{3x}{\sqrt{x^2+4}}$ only has the horizontal asymptote $y=3$". Why it is wrong: when $x<0$, $\sqrt{x^2}=-x$. Right: there is also $y=-3$ as $x\to-\infty$.
:::

## Key terms

:::terms
- asymptote | đường tiệm cận
- vertical asymptote | tiệm cận đứng
- horizontal asymptote | tiệm cận ngang
- oblique (slant) asymptote | tiệm cận xiên
- one-sided limit | giới hạn một bên
- limit at infinity | giới hạn tại vô cực
- polynomial division | phép chia đa thức
- average cost | chi phí trung bình
:::

## Summary

- Horizontal asymptote $y=y_0$: $\lim\limits_{x\to+\infty}f=y_0$ or $\lim\limits_{x\to-\infty}f=y_0$. Compute **both** sides.
- Vertical asymptote $x=x_0$: a one-sided limit at $x_0$ is $\pm\infty$. For a rational function: find the roots of the denominator, then check the limit.
- Oblique asymptote $y=ax+b$: $a=\lim\dfrac{f(x)}{x}$, $b=\lim[f(x)-ax]$; for $\dfrac{ax^2+bx+c}{mx+n}$, divide and drop the remainder.
- $y=\dfrac{ax+b}{cx+d}$: vertical asymptote $x=-\dfrac dc$, horizontal asymptote $y=\dfrac ac$.
- In a figure, asymptotes are dashed lines; the graph gets close to them but need not cross or touch them.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the asymptotes of the graph of $y=\dfrac{3x+2}{x-4}$.

::hint
**What you need:** $y=\dfrac{ax+b}{cx+d}$ has the vertical asymptote $x=-\dfrac dc$ and the horizontal asymptote $y=\dfrac ac$.

**Steps:**
1. Compute the limits as $x\to\pm\infty$.
2. Find the root of the denominator and check that the numerator is not $0$ there.

::solution
$\lim\limits_{x\to\pm\infty}y=3$. The denominator is $0$ at $x=4$, where the numerator is $14\neq0$, so $\lim\limits_{x\to4^+}y=+\infty$.

**Answer.** Vertical asymptote $x=4$, horizontal asymptote $y=3$.
:::

:::exercise
Find the asymptotes of the graph of $y=\dfrac{1-2x}{x+3}$.

::hint
**What you need:** the coefficient of $x$ in the numerator is $-2$; watch the order of the terms.

**Steps:**
1. Write the numerator as $-2x+1$ to read off $a=-2$.
2. Find the root of the denominator.

::solution
$\lim\limits_{x\to\pm\infty}y=\dfrac{-2}{1}=-2$. At $x=-3$ the numerator is $7\neq0$, so $\lim\limits_{x\to-3^+}y=+\infty$.

**Answer.** Vertical asymptote $x=-3$, horizontal asymptote $y=-2$.
:::

:::exercise
Find the asymptotes of the graph of $y=\dfrac{x^2+2x+3}{x+1}$.

::hint
**What you need:** polynomial division: if $y=px+q+\dfrac{r}{x+1}$, the oblique asymptote is $y=px+q$.

**Steps:**
1. Divide $x^2+2x+3$ by $x+1$.
2. Find the vertical asymptote from the denominator.

::solution
$x^2+2x+3=(x+1)(x+1)+2$, so $y=x+1+\dfrac{2}{x+1}$. The part $\dfrac{2}{x+1}\to0$ as $x\to\pm\infty$. At $x=-1$ the numerator is $2\neq0$.

**Answer.** Vertical asymptote $x=-1$, oblique asymptote $y=x+1$.
:::

:::exercise
How many asymptotes does the graph of $y=\dfrac{x^2-4}{x^2-3x+2}$ have? Which lines are they?

::hint
**What you need:** if a root of the denominator is also a root of the numerator, the fraction can be simplified, and there may be no vertical asymptote there.

**Steps:**
1. Factorise the numerator and the denominator, and simplify.
2. Check the limit at each root of the denominator and at infinity.

::solution
$y=\dfrac{(x-2)(x+2)}{(x-1)(x-2)}=\dfrac{x+2}{x-1}$ for $x\neq2$. At $x=2$: $\lim\limits_{x\to2}y=4$, which is finite. At $x=1$: $\lim\limits_{x\to1^+}y=+\infty$. At infinity: $\lim\limits_{x\to\pm\infty}y=1$.

**Answer.** Two asymptotes: the vertical asymptote $x=1$ and the horizontal asymptote $y=1$.
:::

:::exercise
Consider $y=\dfrac{x^2-3x+4}{x-2}$. Is each claim true or false?

a) The line $x=2$ is a vertical asymptote of the graph.

b) The graph has no horizontal asymptote.

c) The line $y=x+1$ is an oblique asymptote of the graph.

d) The graph has exactly two asymptotes.

::hint
**What you need:** divide to write $y=px+q+\dfrac{r}{x-2}$.

**Steps:**
1. Divide $x^2-3x+4$ by $x-2$.
2. Check each claim.

::solution
$x^2-3x+4=(x-2)(x-1)+2$, so $y=x-1+\dfrac{2}{x-2}$.

a) **True**: the numerator is $2\neq0$ at $x=2$, so $\lim\limits_{x\to2^+}y=+\infty$.

b) **True**: $y\to+\infty$ as $x\to+\infty$ and $y\to-\infty$ as $x\to-\infty$.

c) **False**: the oblique asymptote is $y=x-1$.

d) **True**: the vertical asymptote $x=2$ and the oblique asymptote $y=x-1$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
Find the total number of vertical and horizontal asymptotes of the graph of $y=\dfrac{2x+1}{x^2-4}$.

::hint
**What you need:** if the degree of the numerator is less than the degree of the denominator, the limit at infinity is $0$.

**Steps:**
1. Find the roots of the denominator and check the numerator there.
2. Compute the limits at $\pm\infty$.

::solution
The denominator is $0$ at $x=\pm2$; the numerator there is $5$ and $-3$, both non-zero, so there are two vertical asymptotes $x=2$, $x=-2$. $\lim\limits_{x\to\pm\infty}y=0$, so there is the horizontal asymptote $y=0$.

**Answer.** $3$.
:::

:::exercise
A tank holds $200$ litres of clean water. Salt water with a concentration of $30$ grams per litre is pumped in at $10$ litres per minute. After $t$ minutes, the salt concentration in the tank is $C(t)=\dfrac{30t}{20+t}$ (grams per litre). Find the horizontal asymptote of the graph of $C(t)$ and explain what it means.

::hint
**What you need:** the amount of salt is $30\cdot10t=300t$ grams and the volume is $200+10t$ litres; the horizontal asymptote is the limit as $t\to+\infty$.

**Steps:**
1. Check the formula: $\dfrac{300t}{200+10t}=\dfrac{30t}{20+t}$.
2. Compute $\lim\limits_{t\to+\infty}C(t)$.

::solution
$\dfrac{300t}{200+10t}=\dfrac{30t}{20+t}$ (divide the numerator and the denominator by $10$). $\lim\limits_{t\to+\infty}\dfrac{30t}{20+t}=30$. For example $C(10)=10$, $C(60)=22.5$, $C(180)=27$.

**Answer.** Horizontal asymptote $C=30$: over time the salt concentration in the tank gets close to $30$ grams per litre (the concentration of the incoming water) but never exceeds it.
:::

:::exercise Review
Compute $\lim\limits_{x\to+\infty}\left(\sqrt{x^2+2x}-x\right)$, and deduce a horizontal asymptote of the graph of $y=\sqrt{x^2+2x}-x$.

::hint
**What you need:** multiply and divide by the conjugate $\sqrt{x^2+2x}+x$ to remove the form $\infty-\infty$ (limits of functions, grade 11).

**Steps:**
1. Write $\sqrt{x^2+2x}-x=\dfrac{2x}{\sqrt{x^2+2x}+x}$.
2. Divide the numerator and the denominator by $x$ (with $x>0$).

::solution
$\sqrt{x^2+2x}-x=\dfrac{x^2+2x-x^2}{\sqrt{x^2+2x}+x}=\dfrac{2x}{\sqrt{x^2+2x}+x}=\dfrac{2}{\sqrt{1+\frac2x}+1}\to\dfrac{2}{2}=1$.

**Answer.** The limit is $1$; the line $y=1$ is a horizontal asymptote (as $x\to+\infty$).
:::

:::exercise Review
Prove that the graph of $y=\dfrac{2x^2-1}{x^2-2x+3}$ has no vertical asymptote, then find its horizontal asymptote.

::hint
**What you need:** a quadratic expression with $\Delta<0$ has no roots (see [the sign of a quadratic expression](lesson:sign-of-quadratic)).

**Steps:**
1. Compute the discriminant of the denominator.
2. Divide the numerator and the denominator by $x^2$ to find the limit at infinity.

::solution
The denominator $x^2-2x+3$ has $\Delta=4-12=-8<0$, so it is always positive: the function is defined and continuous on $\mathbb{R}$ and has no vertical asymptote. $\lim\limits_{x\to\pm\infty}y=\dfrac{2}{1}=2$.

**Answer.** No vertical asymptote; horizontal asymptote $y=2$.
:::

:::exercise Challenge
Find the oblique asymptotes of the graph of $y=\sqrt{x^2+4x}$.

::hint
**What you need:** $a=\lim\dfrac{f(x)}{x}$, $b=\lim[f(x)-ax]$, computed separately as $x\to+\infty$ and as $x\to-\infty$; when $x<0$, $\sqrt{x^2}=-x$.

**Steps:**
1. Find the domain.
2. Compute $a$ and $b$ as $x\to+\infty$ (use the conjugate).
3. Repeat as $x\to-\infty$.

::solution
The domain is $(-\infty, -4]\cup[0, +\infty)$. As $x\to+\infty$: $a=\lim\sqrt{1+\frac4x}=1$, $b=\lim\left(\sqrt{x^2+4x}-x\right)=\lim\dfrac{4x}{\sqrt{x^2+4x}+x}=2$. As $x\to-\infty$: $\sqrt{x^2+4x}=-x\sqrt{1+\frac4x}$, so $a=-1$ and $b=\lim\left(\sqrt{x^2+4x}+x\right)=\lim\dfrac{4x}{\sqrt{x^2+4x}-x}=\lim\dfrac{4}{-\sqrt{1+\frac4x}-1}=-2$.

**Answer.** Two oblique asymptotes: $y=x+2$ (as $x\to+\infty$) and $y=-x-2$ (as $x\to-\infty$).
:::

## Mini test

:::quiz
::mc
The vertical asymptote of the graph of $y=\dfrac{3x-1}{x-2}$ is the line
A. $x=-2$.
B. $x=2$.
C. $y=3$.
D. $x=\dfrac13$.
::key B
The denominator is $0$ at $x=2$ and the numerator there is $5\neq0$, so $\lim\limits_{x\to2^+}y=+\infty$. Option C is the horizontal asymptote and option D is the root of the numerator.

::mc
The horizontal asymptote of the graph of $y=\dfrac{1+6x}{3-2x}$ is the line
A. $x=\dfrac32$.
B. $y=3$.
C. $y=\dfrac13$.
D. $y=-3$.
::key D
$\lim\limits_{x\to\pm\infty}\dfrac{6x+1}{-2x+3}=\dfrac{6}{-2}=-3$. Option B forgets the sign of the coefficient $-2$, and option C divides the two constant terms.

::mc
The oblique asymptote of the graph of $y=\dfrac{x^2+3x-2}{x+1}$ is the line
A. $y=x+2$.
B. $y=x+3$.
C. $y=x-2$.
D. $y=x$.
::key A
Polynomial division gives $x^2+3x-2=(x+1)(x+2)-4$, so $y=x+2-\dfrac{4}{x+1}$ and $y-(x+2)\to0$ as $x\to\pm\infty$.

::mc
A function $y=f(x)$ has $\lim\limits_{x\to+\infty}f(x)=2$ and $\lim\limits_{x\to-\infty}f(x)=-2$. Which statement is correct?
A. The graph has exactly one horizontal asymptote.
B. The graph has two vertical asymptotes, $x=2$ and $x=-2$.
C. The graph has two horizontal asymptotes, $y=2$ and $y=-2$.
D. The graph has no horizontal asymptote.
::key C
Each finite limit at $+\infty$ or at $-\infty$ gives a horizontal asymptote; the two limits are different, so there are two lines. A vertical asymptote has the form $x=x_0$ and needs an infinite limit, so B is wrong.

::tf
Let $y=\dfrac{2x^2-3x+1}{x-2}$.
a) The line $x=2$ is a vertical asymptote of the graph.
b) The line $y=2$ is a horizontal asymptote of the graph.
c) The line $y=2x+1$ is an oblique asymptote of the graph.
d) The oblique asymptote and the two coordinate axes form a triangle of area $\dfrac14$.
::key T F T T
a) True: the numerator is $3\neq0$ at $x=2$. b) False: $y\to\pm\infty$ as $x\to\pm\infty$, so there is no horizontal asymptote. c) True: $2x^2-3x+1=(x-2)(2x+1)+3$. d) True: $y=2x+1$ meets the axes at $\left(-\dfrac12, 0\right)$ and $(0, 1)$, so the area is $\dfrac12\cdot\dfrac12\cdot1=\dfrac14$.

::sa
How many vertical and horizontal asymptotes does the graph of $y=\dfrac{\sqrt{x+3}-2}{x^2-1}$ have in total?
::key 2
At $x=1$ the numerator is also $0$ and $y=\dfrac{1}{(x+1)(\sqrt{x+3}+2)}\to\dfrac18$ (finite), so $x=1$ is not an asymptote. That leaves the vertical asymptote $x=-1$ and the horizontal asymptote $y=0$ (since $\lim\limits_{x\to+\infty}y=0$): $2$ lines.

::sa
The concentration of a substance in a water tank after $t$ minutes is $C(t)=\dfrac{25t}{3t+8}$ (mg/l). The graph of $C(t)$ has the horizontal asymptote $C=c$. Find $c$, giving your answer to 1 decimal place.
::key 8.3
$\lim\limits_{t\to+\infty}\dfrac{25t}{3t+8}=\dfrac{25}{3}\approx8.33$, which rounds to $8.3$: over time the concentration gets close to $8.3$ mg/l.
:::
