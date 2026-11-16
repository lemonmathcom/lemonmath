---
title: Basic trigonometric equations
description: Solve sin x = m, cos x = m, tan x = m and cot x = m using solution formulas, graphs and a calculator, then apply them to real situations.
minutes: 25
---

:::goals
- Explain why $\sin x=m$ and $\cos x=m$ have two families of solutions when $|m|\le1$ and no solution when $|m|>1$.
- Write the solution formulas for the four basic trigonometric equations and for equations of the form $\sin u=\sin v$ and $\cos u=\cos v$.
- Solve basic trigonometric equations by formula, by graph and with a scientific calculator, and pick out the solutions in a given interval.
- Use trigonometric equations to find when a periodic quantity reaches a given value.
:::

A giant Ferris wheel has its centre $22$ m above the ground and a radius of $20$ m, and turns steadily, one revolution in $8$ minutes. Suppose the height of a cabin $t$ minutes after it is at the lowest point is $h(t)=22-20\cos\dfrac{\pi t}{4}$ (metres).

During the first revolution, at what times is the cabin exactly $32$ m high? In the previous lesson we saw that $\cos$ repeats every $2\pi$, so we expect more than one such time. This lesson shows how to find all of them.

## The equations $\sin x=m$ and $\cos x=m$

### Explore: solving $\sin x=\dfrac12$

From the table of special values we know $\sin\dfrac{\pi}{6}=\dfrac12$. Are there other solutions? Look at the graph of $y=\sin x$: the line $y=\dfrac12$ meets it infinitely often.

:::graph The line $y=\dfrac12$ meets the graph of $y=\sin x$
alt: The sine graph and the horizontal line y = 1/2; the first intersections have x-coordinates π/6 and 5π/6, and the pattern repeats every 2π
x: -4..8
y: -1.6..1.6
plot: sin(x)
hline: 0.5
point: (0.5236, 0.5) "π/6" above-left
point: (2.618, 0.5) "5π/6" above-right
point: (6.8068, 0.5) "13π/6" above
:::

In one period $[0, 2\pi]$ there are two intersections: $x=\dfrac{\pi}{6}$ and $x=\pi-\dfrac{\pi}{6}=\dfrac{5\pi}{6}$ (because $\sin(\pi-x)=\sin x$). Every further period has two more intersections like these, spaced $2\pi$ apart. So the solutions are $x=\dfrac{\pi}{6}+k2\pi$ or $x=\dfrac{5\pi}{6}+k2\pi$, $k\in\mathbb{Z}$. This method works in general.

:::theorem The equation $\sin x=m$
- If $|m|>1$, the equation has no solution.
- If $|m|\le1$, let $\alpha$ be an angle with $\sin\alpha=m$ (a scientific calculator gives $\alpha=\arcsin m\in\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$). Then
$$\sin x=m\Leftrightarrow\left[\begin{aligned}x&=\alpha+k2\pi\\ x&=\pi-\alpha+k2\pi\end{aligned}\right.\quad(k\in\mathbb{Z}).$$
- Special cases: $\sin x=1\Leftrightarrow x=\dfrac{\pi}{2}+k2\pi$; $\sin x=-1\Leftrightarrow x=-\dfrac{\pi}{2}+k2\pi$; $\sin x=0\Leftrightarrow x=k\pi$.
:::

:::theorem The equation $\cos x=m$
- If $|m|>1$, the equation has no solution.
- If $|m|\le1$, let $\alpha$ be an angle with $\cos\alpha=m$ (the calculator gives $\alpha=\arccos m\in[0, \pi]$). Then
$$\cos x=m\Leftrightarrow x=\pm\alpha+k2\pi\quad(k\in\mathbb{Z}).$$
- Special cases: $\cos x=1\Leftrightarrow x=k2\pi$; $\cos x=-1\Leftrightarrow x=\pi+k2\pi$; $\cos x=0\Leftrightarrow x=\dfrac{\pi}{2}+k\pi$.
:::

### Why are the formulas true?

The point $M$ that corresponds to the angle $x$ on the unit circle has ordinate $\sin x$ and abscissa $\cos x$. The equation $\sin x=m$ says that $M$ lies on the horizontal line $y=m$. This line meets the circle in at most two points, and only if $|m|\le1$. The two points are symmetric about the $y$-axis, so if one corresponds to the angle $\alpha$, the other corresponds to $\pi-\alpha$. Each point corresponds to angles that differ by multiples of $2\pi$, which gives two families of solutions.

For $\cos x=m$, the point $M$ lies on the vertical line $x=m$; the two intersections are symmetric about the $x$-axis, so they correspond to the angles $\alpha$ and $-\alpha$, which gives the family $x=\pm\alpha+k2\pi$.

When we work in degrees, we replace $2\pi$ by $360^\circ$ and $\pi$ by $180^\circ$. For example $\sin x=\sin30^\circ\Leftrightarrow x=30^\circ+k360^\circ$ or $x=150^\circ+k360^\circ$.

:::example Solving $\sin x=m$
Solve a) $2\sin x-\sqrt3=0$; b) $\sin x=\dfrac32$.

**Solution.** a) The equation is equivalent to $\sin x=\dfrac{\sqrt3}{2}=\sin\dfrac{\pi}{3}$. Hence
$$x=\dfrac{\pi}{3}+k2\pi\quad\text{or}\quad x=\pi-\dfrac{\pi}{3}+k2\pi=\dfrac{2\pi}{3}+k2\pi\quad(k\in\mathbb{Z}).$$
So the solutions are $x=\dfrac{\pi}{3}+k2\pi$ and $x=\dfrac{2\pi}{3}+k2\pi$.

b) Since $\dfrac32>1$ and $-1\le\sin x\le1$, the equation has no solution.
:::

When the angle has the form $ax+b$, we solve in the same way, treating the whole expression as the "angle".

:::example Solving $\cos(ax+b)=m$
Solve $\cos\left(2x-\dfrac{\pi}{3}\right)=-\dfrac12$.

**Solution.** We have $-\dfrac12=\cos\dfrac{2\pi}{3}$, so
$$2x-\dfrac{\pi}{3}=\pm\dfrac{2\pi}{3}+k2\pi.$$
With the sign $+$: $2x=\dfrac{2\pi}{3}+\dfrac{\pi}{3}+k2\pi=\pi+k2\pi$, so $x=\dfrac{\pi}{2}+k\pi$.

With the sign $-$: $2x=-\dfrac{2\pi}{3}+\dfrac{\pi}{3}+k2\pi=-\dfrac{\pi}{3}+k2\pi$, so $x=-\dfrac{\pi}{6}+k\pi$.

So the solutions are $x=\dfrac{\pi}{2}+k\pi$ and $x=-\dfrac{\pi}{6}+k\pi$ $(k\in\mathbb{Z})$.

**Check.** For $x=\dfrac{\pi}{2}$: $\cos\left(\pi-\dfrac{\pi}{3}\right)=\cos\dfrac{2\pi}{3}=-\dfrac12$. Correct.
:::

## The equations $\tan x=m$ and $\cot x=m$

For $\tan$, every real value $m$ is allowed, because the range of $\tan$ is $\mathbb{R}$. Two points on the unit circle with the same value of $\tan$ are symmetric about the centre $O$, so their angles differ by $\pi$. So there is only one family of solutions, with period $\pi$.

:::theorem The equations $\tan x=m$ and $\cot x=m$
For every real number $m$:
- $\tan x=m\Leftrightarrow x=\alpha+k\pi$ $(k\in\mathbb{Z})$, where $\alpha=\arctan m\in\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ is the angle with $\tan\alpha=m$.
- $\cot x=m\Leftrightarrow x=\alpha+k\pi$ $(k\in\mathbb{Z})$, where $\alpha$ is an angle with $\cot\alpha=m$ (for example $\alpha=\operatorname{arccot}m\in(0, \pi)$).
:::

:::example Solving $\tan x=m$ and picking solutions in an interval
Solve $\tan3x=1$, then find the solutions in the interval $[0, \pi]$.

**Solution.** The condition for the equation to be defined is $\cos3x\ne0$. We have $1=\tan\dfrac{\pi}{4}$, so
$$3x=\dfrac{\pi}{4}+k\pi\Leftrightarrow x=\dfrac{\pi}{12}+\dfrac{k\pi}{3}\quad(k\in\mathbb{Z}).$$
These values satisfy the condition because $\tan3x=1$ implies $\cos3x\ne0$.

To pick the solutions in $[0, \pi]$ we try values of $k$ in turn: $k=0$ gives $x=\dfrac{\pi}{12}$; $k=1$ gives $x=\dfrac{5\pi}{12}$; $k=2$ gives $x=\dfrac{3\pi}{4}$; $k=3$ gives $x=\dfrac{13\pi}{12}>\pi$ (rejected), and $k=-1$ gives $x<0$ (rejected).

So the solutions are $x=\dfrac{\pi}{12}+\dfrac{k\pi}{3}$, and in $[0, \pi]$ there are three of them: $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$ and $\dfrac{3\pi}{4}$.
:::

The angle is not always a special one. Then we use a scientific calculator.

:::example Using a scientific calculator
Solve $\sin x=0.3$. Give the solutions in radians, to 2 decimal places, and find those in $[0, 2\pi)$.

**Solution.** With the calculator in radian mode, pressing $\sin^{-1}0.3$ gives $\alpha=\arcsin0.3\approx0.3047$. Hence
$$x\approx0.30+k2\pi\quad\text{or}\quad x=\pi-\alpha+k2\pi\approx2.84+k2\pi\quad(k\in\mathbb{Z}).$$
In $[0, 2\pi)$ we take $k=0$, which gives the two solutions $x\approx0.30$ and $x\approx2.84$ (the solutions with $k=1$ exceed $2\pi$).

So the solutions in $[0, 2\pi)$ are about $0.30$ and $2.84$. In degrees these are $17.5^\circ$ and $162.5^\circ$.
:::

Now we return to the question at the start.

:::example The Ferris wheel
For $h(t)=22-20\cos\dfrac{\pi t}{4}$ (metres, $t$ in minutes), find the times in the first revolution $(0\le t<8)$ at which the cabin is $32$ m high.

**Understand.** We need $t\in[0, 8)$ with $h(t)=32$.

**Plan.** Reduce the equation to the form $\cos u=m$ with $u=\dfrac{\pi t}{4}$, then use the solution formula.

**Solve.** We have $22-20\cos\dfrac{\pi t}{4}=32\Leftrightarrow\cos\dfrac{\pi t}{4}=-\dfrac12=\cos\dfrac{2\pi}{3}$. Hence
$$\dfrac{\pi t}{4}=\pm\dfrac{2\pi}{3}+k2\pi\Leftrightarrow t=\pm\dfrac{8}{3}+8k\quad(k\in\mathbb{Z}).$$
For $0\le t<8$: the sign $+$ with $k=0$ gives $t=\dfrac83$; the sign $-$ with $k=1$ gives $t=-\dfrac83+8=\dfrac{16}{3}$.

So the cabin is $32$ m high at $\dfrac83$ minutes ($2$ min $40$ s) and at $\dfrac{16}{3}$ minutes ($5$ min $20$ s).

**Look back.** The two times are symmetric about $t=4$, when the cabin is at its highest point, $42$ m, as we expect. What if we ask how long the cabin is at least $32$ m high in each revolution? We need $\cos\dfrac{\pi t}{4}\le-\dfrac12$, that is $\dfrac{\pi t}{4}\in\left[\dfrac{2\pi}{3}, \dfrac{4\pi}{3}\right]$, or $t\in\left[\dfrac83, \dfrac{16}{3}\right]$. That lasts $\dfrac83$ minutes, one third of a revolution.
:::

Both sides of an equation may be sines, or both cosines. Then we use the formulas directly: $\sin u=\sin v\Leftrightarrow u=v+k2\pi$ or $u=\pi-v+k2\pi$, and $\cos u=\cos v\Leftrightarrow u=\pm v+k2\pi$.

:::example Equations of the form $\sin u=\sin v$
Solve $\sin2x=\sin\left(x+\dfrac{\pi}{3}\right)$.

**Solution.** We have
$$2x=x+\dfrac{\pi}{3}+k2\pi\quad\text{or}\quad2x=\pi-\left(x+\dfrac{\pi}{3}\right)+k2\pi.$$
From the first equation $x=\dfrac{\pi}{3}+k2\pi$. From the second, $3x=\dfrac{2\pi}{3}+k2\pi$, so $x=\dfrac{2\pi}{9}+\dfrac{k2\pi}{3}$.

So the solutions are $x=\dfrac{\pi}{3}+k2\pi$ and $x=\dfrac{2\pi}{9}+\dfrac{k2\pi}{3}$ $(k\in\mathbb{Z})$.

**Check.** For $x=\dfrac{2\pi}{9}$: $\sin\dfrac{4\pi}{9}=\sin80^\circ$ and $\sin\left(\dfrac{2\pi}{9}+\dfrac{\pi}{3}\right)=\sin\dfrac{5\pi}{9}=\sin100^\circ=\sin80^\circ$. Correct.
:::

**Connections.** Trigonometric equations rest on the graphs and periods of the previous lesson: the solutions are the $x$-coordinates of the intersections of a graph with a horizontal line, and the period tells us that the intersections repeat. A family of solutions such as $x=\alpha+k2\pi$ is a list of numbers with a constant difference between consecutive terms, which is exactly the idea of an arithmetic progression in the next lesson.

:::warning Common mistakes
- **Writing only one family of solutions of $\sin x=m$.** Wrong: $\sin x=\dfrac12\Leftrightarrow x=\dfrac{\pi}{6}+k2\pi$. Why it is wrong: $x=\dfrac{5\pi}{6}$ also has $\sin x=\dfrac12$ but does not belong to this family. Right: add the family $x=\pi-\dfrac{\pi}{6}+k2\pi$.
- **Forgetting the sign $\pm$ in $\cos x=m$.** Wrong: $\cos x=\dfrac12\Leftrightarrow x=\dfrac{\pi}{3}+k2\pi$. Why it is wrong: $\cos\left(-\dfrac{\pi}{3}\right)=\dfrac12$, so $x=-\dfrac{\pi}{3}$ is also a solution. Right: $x=\pm\dfrac{\pi}{3}+k2\pi$.
- **Mixing degrees and radians.** Wrong: $x=30^\circ+k2\pi$. Why it is wrong: $2\pi$ radians is $360^\circ$, and we cannot add it to an angle in degrees. Right: $x=30^\circ+k360^\circ$ or $x=\dfrac{\pi}{6}+k2\pi$.
- **Using the wrong period.** Wrong: $\tan x=1\Leftrightarrow x=\dfrac{\pi}{4}+k2\pi$. Why it is wrong: $\tan\dfrac{5\pi}{4}=1$ but $\dfrac{5\pi}{4}$ is not in this family. Right: $x=\dfrac{\pi}{4}+k\pi$.
:::

## Key terms

:::terms
- basic trigonometric equation | phương trình lượng giác cơ bản
- solution | nghiệm
- family of solutions | họ nghiệm
- solution formula | công thức nghiệm
- no solution | vô nghiệm
- unit circle | đường tròn lượng giác
- scientific calculator | máy tính cầm tay
- inverse trigonometric function | hàm số lượng giác ngược
- radian mode | chế độ radian
- solution set | tập nghiệm
:::

## Summary

- $\sin x=m$ and $\cos x=m$ have no solution when $|m|>1$; when $|m|\le1$, let $\alpha$ satisfy $\sin\alpha=m$ (or $\cos\alpha=m$).
- $\sin x=m\Leftrightarrow x=\alpha+k2\pi$ or $x=\pi-\alpha+k2\pi$; $\cos x=m\Leftrightarrow x=\pm\alpha+k2\pi$.
- $\tan x=m\Leftrightarrow x=\alpha+k\pi$; $\cot x=m\Leftrightarrow x=\alpha+k\pi$, for every $m\in\mathbb{R}$.
- Special cases: $\sin x=0\Leftrightarrow x=k\pi$; $\sin x=1\Leftrightarrow x=\dfrac{\pi}{2}+k2\pi$; $\cos x=0\Leftrightarrow x=\dfrac{\pi}{2}+k\pi$; $\cos x=1\Leftrightarrow x=k2\pi$.
- $\sin u=\sin v\Leftrightarrow u=v+k2\pi$ or $u=\pi-v+k2\pi$; $\cos u=\cos v\Leftrightarrow u=\pm v+k2\pi$.
- In degrees, replace $2\pi$ by $360^\circ$ and $\pi$ by $180^\circ$; never mix the two units.
- To pick solutions in an interval, try values of $k$ in turn and check.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Solve $\sin x=-\dfrac12$.

::hint
**What you need:** $\sin\left(-\dfrac{\pi}{6}\right)=-\dfrac12$; the solution formula for $\sin x=\sin\alpha$.

**Steps:**
1. Write $-\dfrac12=\sin\left(-\dfrac{\pi}{6}\right)$.
2. Write the two families $x=\alpha+k2\pi$ and $x=\pi-\alpha+k2\pi$.

::solution
We have $\sin x=\sin\left(-\dfrac{\pi}{6}\right)$, so $x=-\dfrac{\pi}{6}+k2\pi$ or $x=\pi+\dfrac{\pi}{6}+k2\pi=\dfrac{7\pi}{6}+k2\pi$.

**Answer.** $x=-\dfrac{\pi}{6}+k2\pi$ or $x=\dfrac{7\pi}{6}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Solve $2\cos x+1=0$.

::hint
**What you need:** $\cos x=\cos\alpha\Leftrightarrow x=\pm\alpha+k2\pi$.

**Steps:**
1. Rewrite as $\cos x=-\dfrac12$.
2. Write $-\dfrac12=\cos\dfrac{2\pi}{3}$.

::solution
We have $\cos x=-\dfrac12=\cos\dfrac{2\pi}{3}$, so $x=\pm\dfrac{2\pi}{3}+k2\pi$.

**Answer.** $x=\pm\dfrac{2\pi}{3}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Solve $\tan\left(x-\dfrac{\pi}{4}\right)=\sqrt3$.

::hint
**What you need:** $\tan x=\tan\alpha\Leftrightarrow x=\alpha+k\pi$; $\tan\dfrac{\pi}{3}=\sqrt3$.

**Steps:**
1. Write $\sqrt3=\tan\dfrac{\pi}{3}$.
2. Solve $x-\dfrac{\pi}{4}=\dfrac{\pi}{3}+k\pi$.

::solution
We have $x-\dfrac{\pi}{4}=\dfrac{\pi}{3}+k\pi$, so $x=\dfrac{7\pi}{12}+k\pi$.

**Answer.** $x=\dfrac{7\pi}{12}+k\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Solve $\cos x=0.25$ with a scientific calculator. Give the solutions in radians, to 2 decimal places.

::hint
**What you need:** $\cos x=m\Leftrightarrow x=\pm\arccos m+k2\pi$; set the calculator to radian mode.

**Steps:**
1. Press $\cos^{-1}0.25$ to get $\alpha$.
2. Write the solutions $x=\pm\alpha+k2\pi$.

::solution
The calculator gives $\alpha=\arccos0.25\approx1.3181$. Hence $x\approx\pm1.32+k2\pi$.

**Answer.** $x\approx1.32+k2\pi$ or $x\approx-1.32+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Solve $\sin2x=\dfrac{\sqrt3}{2}$ and find the solutions in the interval $[0, \pi]$.

::hint
**What you need:** $\sin2x=\sin\dfrac{\pi}{3}$ gives two families of solutions for $2x$.

**Steps:**
1. Write the two families for $2x$, then divide by $2$.
2. Try values of $k$ to pick the solutions in $[0, \pi]$.

::solution
We have $2x=\dfrac{\pi}{3}+k2\pi$ or $2x=\dfrac{2\pi}{3}+k2\pi$, so $x=\dfrac{\pi}{6}+k\pi$ or $x=\dfrac{\pi}{3}+k\pi$. In $[0, \pi]$ only $k=0$ gives solutions ($k=1$ gives $x>\pi$ and $k=-1$ gives $x<0$): $x=\dfrac{\pi}{6}$ and $x=\dfrac{\pi}{3}$.

**Answer.** $x=\dfrac{\pi}{6}+k\pi$, $x=\dfrac{\pi}{3}+k\pi$; in $[0, \pi]$: $\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$.
:::

:::exercise
Suppose the outdoor temperature (in degrees Celsius) in a city is modelled by $T(t)=28+5\sin\dfrac{\pi(t-9)}{12}$, where $t$ is the number of hours after midnight ($0\le t<24$). At what times is the temperature $30.5^\circ$C?

::hint
**What you need:** $\sin u=\dfrac12\Leftrightarrow u=\dfrac{\pi}{6}+k2\pi$ or $u=\dfrac{5\pi}{6}+k2\pi$.

**Steps:**
1. Reduce to $\sin\dfrac{\pi(t-9)}{12}=\dfrac12$.
2. Solve the two families and pick $t$ in $[0, 24)$.

::solution
We have $28+5\sin\dfrac{\pi(t-9)}{12}=30.5\Leftrightarrow\sin\dfrac{\pi(t-9)}{12}=\dfrac12$. Hence $\dfrac{\pi(t-9)}{12}=\dfrac{\pi}{6}+k2\pi$, which gives $t=11+24k$; or $\dfrac{\pi(t-9)}{12}=\dfrac{5\pi}{6}+k2\pi$, which gives $t=19+24k$. For $0\le t<24$ we take $k=0$.

**Answer.** At $11$ o'clock and $19$ o'clock.
:::

:::exercise
Consider the equation $\cos x=\dfrac12$. Decide whether each statement is true or false.

a) $x=\dfrac{\pi}{3}$ is a solution of the equation.

b) Every number $x=\dfrac{\pi}{3}+k\pi$ $(k\in\mathbb{Z})$ is a solution of the equation.

c) In the interval $[0, 2\pi]$ the equation has exactly two solutions.

d) The sum of the solutions in the interval $[0, 2\pi]$ is $\pi$.

::hint
**What you need:** $\cos x=\dfrac12\Leftrightarrow x=\pm\dfrac{\pi}{3}+k2\pi$.

**Steps:**
1. b) Try $k=1$.
2. c), d) List the solutions in $[0, 2\pi]$.

::solution
a) **True**: $\cos\dfrac{\pi}{3}=\dfrac12$.

b) **False**: for $k=1$, $x=\dfrac{4\pi}{3}$ has $\cos\dfrac{4\pi}{3}=-\dfrac12\ne\dfrac12$.

c) **True**: the solutions in $[0, 2\pi]$ are $\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$.

d) **False**: $\dfrac{\pi}{3}+\dfrac{5\pi}{3}=2\pi\ne\pi$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
The height (in m) of a Ferris wheel cabin above the ground after $t$ minutes is $h(t)=22-20\cos\dfrac{\pi t}{4}$. Find the first time $t>0$ at which the cabin is $12$ m high, to 1 decimal place (in minutes).

::hint
**What you need:** $\cos u=\dfrac12\Leftrightarrow u=\pm\dfrac{\pi}{3}+k2\pi$.

**Steps:**
1. Solve $22-20\cos\dfrac{\pi t}{4}=12$.
2. Choose the smallest positive solution.

::solution
We have $\cos\dfrac{\pi t}{4}=\dfrac12$, so $\dfrac{\pi t}{4}=\pm\dfrac{\pi}{3}+k2\pi$, that is $t=\pm\dfrac43+8k$. The smallest positive solution is $t=\dfrac43\approx1.3$.

**Answer.** $1.3$ minutes.
:::

:::exercise Revision
Solve $\sin x+\cos x=1$.

::hint
**What you need:** from the previous lesson, $\sin x+\cos x=\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)$.

**Steps:**
1. Reduce to $\sin\left(x+\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}$.
2. Solve the two families for $x+\dfrac{\pi}{4}$.

::solution
We have $\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)=1$, that is $\sin\left(x+\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}=\sin\dfrac{\pi}{4}$. Hence $x+\dfrac{\pi}{4}=\dfrac{\pi}{4}+k2\pi$, so $x=k2\pi$; or $x+\dfrac{\pi}{4}=\dfrac{3\pi}{4}+k2\pi$, so $x=\dfrac{\pi}{2}+k2\pi$.

**Answer.** $x=k2\pi$ or $x=\dfrac{\pi}{2}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise Challenge
Solve $\sin3x=\cos2x$.

::hint
**What you need:** $\cos2x=\sin\left(\dfrac{\pi}{2}-2x\right)$; the solution formula for $\sin u=\sin v$.

**Steps:**
1. Rewrite as $\sin3x=\sin\left(\dfrac{\pi}{2}-2x\right)$.
2. Write the two families and simplify.

::solution
We have $\sin3x=\sin\left(\dfrac{\pi}{2}-2x\right)$. Hence $3x=\dfrac{\pi}{2}-2x+k2\pi$, so $x=\dfrac{\pi}{10}+\dfrac{k2\pi}{5}$; or $3x=\pi-\left(\dfrac{\pi}{2}-2x\right)+k2\pi=\dfrac{\pi}{2}+2x+k2\pi$, so $x=\dfrac{\pi}{2}+k2\pi$.

**Answer.** $x=\dfrac{\pi}{10}+\dfrac{k2\pi}{5}$ or $x=\dfrac{\pi}{2}+k2\pi$ $(k\in\mathbb{Z})$.
:::

## Mini test

:::quiz
::mc
The solutions of $\cos x=-1$ are
A. $x=\dfrac{\pi}{2}+k\pi$.
B. $x=k2\pi$.
C. $x=\pi+k2\pi$.
D. $x=\pi+k\pi$.
::key C
$\cos x=-1$ corresponds only to the point $(-1, 0)$ on the unit circle, so $x=\pi+k2\pi$. Option D also includes the angles with $\cos x=1$.

::mc
The solutions of $\tan x=-\sqrt3$ are
A. $x=\dfrac{\pi}{3}+k\pi$.
B. $x=-\dfrac{\pi}{3}+k2\pi$.
C. $x=\pm\dfrac{\pi}{3}+k\pi$.
D. $x=-\dfrac{\pi}{3}+k\pi$.
::key D
$\tan\left(-\dfrac{\pi}{3}\right)=-\sqrt3$ and $\tan$ has period $\pi$. Option A has the wrong sign, B uses period $2\pi$, and C adds the solutions of $\tan x=\sqrt3$.

::mc
Which of the following equations has no solution?
A. $\sin x=\dfrac{\pi}{3}$.
B. $\cos x=-0.9$.
C. $\sin x=\dfrac{\sqrt3}{2}$.
D. $\tan x=100$.
::key A
$\dfrac{\pi}{3}\approx1.047>1$, so $\sin x=\dfrac{\pi}{3}$ has no solution. The equation $\tan x=m$ has solutions for every $m$, and $|-0.9|<1$ and $\left|\dfrac{\sqrt3}{2}\right|<1$.

::mc
The solutions of $\sin\left(x-\dfrac{\pi}{6}\right)=\dfrac12$ are
A. $x=\dfrac{\pi}{6}+k2\pi$ or $x=\dfrac{5\pi}{6}+k2\pi$.
B. $x=\dfrac{\pi}{3}+k2\pi$ or $x=\pi+k2\pi$.
C. $x=\dfrac{\pi}{3}+k2\pi$ or $x=\dfrac{2\pi}{3}+k2\pi$.
D. $x=-\dfrac{\pi}{3}+k2\pi$ or $x=\pi+k2\pi$.
::key B
$x-\dfrac{\pi}{6}=\dfrac{\pi}{6}+k2\pi$ gives $x=\dfrac{\pi}{3}+k2\pi$; $x-\dfrac{\pi}{6}=\dfrac{5\pi}{6}+k2\pi$ gives $x=\pi+k2\pi$. Option A forgets to add $\dfrac{\pi}{6}$.

::tf
Consider the equation $2\cos2x=\sqrt3$. Decide whether each statement is true or false.
a) $x=\dfrac{\pi}{6}$ is a solution of the equation.
b) $x=\dfrac{\pi}{12}$ is a solution of the equation.
c) Every number $x=-\dfrac{\pi}{12}+k\pi$ $(k\in\mathbb{Z})$ is a solution of the equation.
d) In the interval $[0, \pi]$ the equation has exactly three solutions.
::key F T T F
The equation is equivalent to $\cos2x=\dfrac{\sqrt3}{2}$, so $2x=\pm\dfrac{\pi}{6}+k2\pi$, that is $x=\pm\dfrac{\pi}{12}+k\pi$. a) False: $\cos\dfrac{\pi}{3}=\dfrac12\ne\dfrac{\sqrt3}{2}$. b) True. c) True. d) False: in $[0, \pi]$ there are only $\dfrac{\pi}{12}$ and $\dfrac{11\pi}{12}$.

::sa
How many solutions of $\tan x=1$ lie in the interval $[0, 3\pi]$?
::key 3
$x=\dfrac{\pi}{4}+k\pi$ gives the solutions $\dfrac{\pi}{4}$, $\dfrac{5\pi}{4}$ and $\dfrac{9\pi}{4}$; the next one, $\dfrac{13\pi}{4}$, is greater than $3\pi$.

::sa
What is the smallest positive solution, in degrees, of $\sin x=0.3$? (give your answer to 1 decimal place)
::key 17.5
The calculator gives $x=\arcsin0.3\approx17.5^\circ$, and the other solution $162.5^\circ$ is larger.
:::
