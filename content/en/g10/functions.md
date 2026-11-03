---
title: Functions
description: Learn what a function is, how to find its domain and range, read its graph, decide where it increases or decreases, and work with piecewise functions.
minutes: 25
---

:::goals
- Explain what a function is and describe it by a formula, a table, a graph or words.
- Find the domain of a function given by a formula, and its range in simple cases.
- Read values, zeros, increasing and decreasing intervals from a graph.
- Work with piecewise functions such as a taxi fare or an electricity bill.
:::

A taxi company charges $15$ thousand dong for the first kilometre (or less) and $12$ thousand dong for each further kilometre. How much does a $3$ km trip cost? And if you know the price, do you always know the distance?

## What is a function?

Let us make a table of the fare $T$ (thousand dong) against the distance $d$ (km). For $d>1$, on top of the $15$ thousand for the first kilometre there are $d-1$ more kilometres at $12$ thousand each:

| $d$ (km) | $0.5$ | $1$ | $2$ | $3$ | $5$ |
|---|---|---|---|---|---|
| $T$ (thousand dong) | $15$ | $15$ | $27$ | $39$ | $63$ |

A $3$ km trip costs $15+12\cdot2=39$ thousand dong. Notice two things:

- Each distance gives **exactly one** fare. So $T$ is a function of $d$.
- The other way round, the fare $15$ thousand belongs to **two** different distances ($0.5$ km and $1$ km). So the price does not always tell you the distance: $d$ is **not** a function of $T$.

:::definition Function
Let $D$ be a non-empty subset of $\mathbb{R}$. A **function** $f$ defined on $D$ is a rule that assigns to **each** number $x\in D$ **exactly one** real number $y$. We write $y=f(x)$.
- $x$ is the **independent variable** (input), $y$ is the **value** of the function at $x$.
- $D$ is the **domain**. The set of all values $f(x)$ with $x\in D$ is the **range**.
- The **graph** of $f$ is the set of points $(x, f(x))$ in the coordinate plane, $x\in D$.
:::

A function can be given by a **formula** ($f(x)=3x-2$), by a **table** of values, by a **graph**, or by **words** ("the price of a trip of $x$ km"). A relation that gives two different outputs for one input is **not** a function. For example, the circle $x^2+y^2=1$ is not the graph of a function, because $x=0$ gives both $y=1$ and $y=-1$. On the graph of a function, no vertical line meets the graph at two points.

The first example practises recognising a function given by a table.

:::example Which table gives a function?
The school car park charges by the number of hours: $1$ hour or $2$ hours both cost $5$ thousand dong, $3$ hours or $4$ hours both cost $10$ thousand dong.

a) Is the fee a function of the number of hours?
b) Is the number of hours a function of the fee?

**Solution.** We check whether each value of the first quantity matches exactly one value of the second.

a) Each number of hours $1$, $2$, $3$, $4$ gives exactly one fee ($5$, $5$, $10$, $10$). Two numbers of hours with the same fee are allowed.

b) The fee $5$ thousand matches two different numbers of hours, $1$ and $2$.

So the fee is a function of the number of hours, but the number of hours is **not** a function of the fee.
:::

When a function is given by a formula without any comment, its domain is the set of all real $x$ for which the formula makes sense. Two things to watch: **the denominator is not $0$**, and **the expression under a square root is not negative**.

:::example Finding a domain
Find the domain of $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ and compute $f(3)$.

**Solution.** The function has a square root and a denominator, so we write both conditions:

$$\begin{cases}x-2\ge0\\x-5\neq0\end{cases}\iff\begin{cases}x\ge2\\x\neq5.\end{cases}$$

So $D=[2, 5)\cup(5, +\infty)$. The number $3$ is in $D$, and
$$f(3)=\frac{\sqrt{3-2}}{3-5}=-\frac12.$$
:::

## Reading a graph

:::graph The graph of $f(x)=x^2-2x-3$
alt: A parabola opening upwards with lowest point (1, -4), crossing the x-axis at -1 and 3 and the y-axis at -3
x: -3..5
y: -5..6
plot: x^2 - 2x - 3
point: (-1, 0) "(-1, 0)" above-left
point: (3, 0) "(3, 0)" above-right
point: (0, -3) "(0, -3)" below-left
point: (1, -4) "(1, -4)" below
:::

From this picture we read, without any calculation:
- $f(0)=-3$, the point where the graph meets the $y$-axis.
- $f(x)=0$ for $x=-1$ and $x=3$ (the **zeros** of $f$).
- The lowest point is $(1, -4)$, so the **range** is $[-4, +\infty)$.
- Going from left to right, the graph goes **down** until $x=1$, then **up**.

:::definition Increasing and decreasing
Let $K$ be an interval inside the domain of $f$.
- $f$ is **increasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)<f(x_2)$ (the graph rises).
- $f$ is **decreasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)>f(x_2)$ (the graph falls).
:::

So $f(x)=x^2-2x-3$ is decreasing on $(-\infty, 1)$ and increasing on $(1, +\infty)$.

Reading a graph gives a guess; to prove it, we compare $f(x_1)$ and $f(x_2)$ by looking at the sign of their difference.

:::example Proving that a function increases or decreases
Prove that $g(x)=x^2$ is increasing on $(0, +\infty)$ and decreasing on $(-\infty, 0)$.

**Solution.** Take $x_1<x_2$ and factorise the difference:

$$g(x_2)-g(x_1)=x_2^2-x_1^2=(x_2-x_1)(x_2+x_1).$$

The factor $x_2-x_1$ is always positive, so the sign of the difference is the sign of $x_2+x_1$:

- On $(0, +\infty)$: $x_2+x_1>0$, so $g(x_1)<g(x_2)$.
- On $(-\infty, 0)$: $x_2+x_1<0$, so $g(x_1)>g(x_2)$.

So $g$ is increasing on $(0, +\infty)$ and decreasing on $(-\infty, 0)$.
:::

## Piecewise functions

Sometimes one formula is not enough: the rule changes with the input. We then write the function in **several lines**, each with its own condition.

:::example A function given by two formulas
Let $f(x)=\begin{cases} x+2 & \text{if } x<0,\\ x^2 & \text{if } x\ge 0.\end{cases}$ Compute $f(-3)$, $f(0)$, $f(2)$ and describe the graph.

**Solution.** For each number, we check which condition it satisfies and use that line:

$$f(-3)=-3+2=-1\ (\text{as } -3<0),\qquad f(0)=0^2=0,\qquad f(2)=2^2=4\ (\text{as } 0, 2\ge0).$$

The graph consists of the line $y=x+2$ for $x<0$ (ending with an open point at $(0, 2)$, because $x=0$ does not use this line) and the parabola $y=x^2$ for $x\ge0$.
:::

:::graph A function given by two formulas
alt: A line coming from the lower left up to an open point at (0, 2), and a parabola starting at the origin on the right
x: -4..3
y: -2..6
plot: x + 2 ; -4..0
plot: x^2 ; 0..2.4
open: (0, 2) "(0, 2)" above-left
point: (0, 0) "O" below-right
:::

### A real-life function: the taxi fare

Back to the taxi company from the start of the lesson. For a trip of $d$ km, the fare in thousand dong is
$$T(d)=\begin{cases}15 & \text{if } 0<d\le 1,\\ 15+12(d-1) & \text{if } d>1.\end{cases}$$

The last example works in both directions: from the distance to the fare, and from the fare to the distance.

:::example Taxi fare
Find the fare for $0.8$ km and for $5$ km. A trip costs $99$ thousand dong: how many kilometres long is it?

**Solution.** For $d=0.8\le1$ we use the first line; for $d=5>1$ we use the second:

$$T(0.8)=15,\qquad T(5)=15+12\cdot4=63.$$

The fare $99>15$, so the trip is longer than $1$ km, and we solve the equation from the second line:

$$15+12(d-1)=99\iff 12(d-1)=84\iff d-1=7\iff d=8.$$

So the first two trips cost $15$ thousand and $63$ thousand dong; the trip costing $99$ thousand dong is $8$ km long.

**Check.** $T(8)=15+12\cdot7=99$.
:::

:::graph Taxi fare $T(d)$
alt: A horizontal segment at height 15 from d=0 to d=1, then a rising line segment reaching 75 at d=6
x: 0..6
y: 0..80
plot: 15 ; 0..1
plot: 12x + 3 ; 1..6
open: (0, 15) "" above
point: (1, 15) "(1, 15)" below-right
:::

:::warning Common mistakes
- **Forgetting a domain condition.** Wrong: the domain of $\dfrac{1}{\sqrt{2-x}}$ is $(-\infty, 2]$. At $x=2$ the denominator is $0$; the right answer is $(-\infty, 2)$.
- **Saying "increasing" for the whole function.** Wrong: "$y=x^2$ is increasing". It is increasing only on $(0, +\infty)$; on $(-\infty, 0)$ it is decreasing.
- **Using the wrong line of a piecewise function.** Wrong: for $f$ above, solving $x+2=9$ gives $x=7$, so "$f(7)=9$". But $7\ge0$, so $f(7)=49$; always check the solution against the condition of the line you used.
:::

## Key terms

:::terms
- function | hàm số
- domain | tập xác định
- range | tập giá trị
- independent variable | biến số (đối số)
- graph of a function | đồ thị hàm số
- increasing | đồng biến
- decreasing | nghịch biến
- piecewise function | hàm số cho bởi nhiều công thức
- zero of a function | không điểm (nghiệm) của hàm số
:::

## Summary

- A function: each $x$ in the domain gives **exactly one** $f(x)$; given by a formula, a table, a graph or words.
- Domain of a formula: denominators $\ne0$, expressions under a square root $\ge0$ (and $>0$ if the root is in a denominator).
- Increasing on $K$: $x_1<x_2\Rightarrow f(x_1)<f(x_2)$; decreasing: $f(x_1)>f(x_2)$. Prove it with the sign of $f(x_2)-f(x_1)$.
- A graph shows values, zeros, the range and where the function increases or decreases.
- Piecewise function: choose the line by its condition, and check solutions against that condition.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Let $f(x)=3x-2$. Compute $f(-1)$ and $f(4)$.

::hint
**What you need:** $f(a)$ is the value of the formula when $x=a$.

**Steps:**
1. Substitute $x=-1$.
2. Substitute $x=4$.

::solution
$f(-1)=3\cdot(-1)-2=-5$ and $f(4)=3\cdot4-2=10$.

**Answer.** $f(-1)=-5$; $f(4)=10$.
:::

:::exercise
Find the domain of: (a) $f(x)=\sqrt{5-x}$; (b) $g(x)=\dfrac{1}{x^2-4}$.

::hint
**What you need:** the expression under a square root must not be negative; a denominator must not be $0$.

**Steps:**
1. For (a), solve $5-x\ge0$.
2. For (b), find the $x$ with $x^2-4=0$ and remove them.

::solution
(a) $5-x\ge0\iff x\le5$. (b) $x^2-4=0\iff x=\pm2$, so we remove these two values.

**Answer.** (a) $D=(-\infty, 5]$; (b) $D=\mathbb{R}\setminus\{-2, 2\}$.
:::

:::exercise
A table gives the pairs $(x, y)$: $(1, 4)$, $(2, 5)$, $(2, 6)$, $(3, 7)$. Does it define $y$ as a function of $x$? Why?

::hint
**What you need:** a function gives each $x$ exactly one value $y$.

**Steps:**
1. Look for a value of $x$ that appears twice.
2. If there is one, compare the two matching values of $y$.

::solution
The input $x=2$ has two different outputs, $5$ and $6$.

**Answer.** It is not a function.
:::

:::exercise
Prove that $h(x)=-2x+5$ is decreasing on $\mathbb{R}$.

::hint
**What you need:** $f$ is decreasing on $K$ if $x_1<x_2$ implies $f(x_1)>f(x_2)$.

**Steps:**
1. Take $x_1<x_2$ and compute $h(x_1)-h(x_2)$.
2. Find the sign of that difference.

::solution
For $x_1<x_2$:
$$h(x_1)-h(x_2)=(-2x_1+5)-(-2x_2+5)=2(x_2-x_1)>0,$$
so $h(x_1)>h(x_2)$.

**Answer.** $h$ is decreasing on $\mathbb{R}$ (proved).
:::

:::exercise
Let $f(x)=\begin{cases} x+2 & \text{if } x<0,\\ x^2 & \text{if } x\ge 0.\end{cases}$ Solve the equations $f(x)=9$ and $f(x)=-1$.

::hint
**What you need:** for a piecewise function, solve under each condition and keep the solutions that satisfy it.

**Steps:**
1. Case $x<0$: solve with the formula $x+2$.
2. Case $x\ge0$: solve with the formula $x^2$.
3. Reject solutions that break the condition.

::solution
$f(x)=9$: for $x<0$, $x+2=9$ gives $x=7$ (rejected, as $7\ge0$); for $x\ge0$, $x^2=9$ gives $x=3$ (and $x=-3$ is rejected). $f(x)=-1$: for $x<0$, $x+2=-1$ gives $x=-3$ (kept); for $x\ge0$, $x^2=-1$ has no solution.

**Answer.** $f(x)=9\iff x=3$; $f(x)=-1\iff x=-3$.
:::

:::exercise
An electricity company charges $2$ thousand dong per kWh for the first $50$ kWh and $2.5$ thousand dong per kWh for every kWh above $50$. A household receives a bill of $300$ thousand dong. How many kWh did it use?

::hint
**What you need:** a function given by two formulas: $B(x)=2x$ for $0\le x\le50$, $B(x)=100+2.5(x-50)$ for $x>50$.

**Steps:**
1. Find the cost of the first $50$ kWh to see which line the bill falls on.
2. Solve the equation from that line.

::solution
The first $50$ kWh cost $2\cdot50=100$ thousand dong $<300$, so $x>50$ and
$$100+2.5(x-50)=300\iff 2.5(x-50)=200\iff x-50=80\iff x=130.$$

**Answer.** $130$.
:::

:::exercise
Using the graph of $f(x)=x^2-2x-3$ in the lesson, is each claim true or false?

a) $f(0)=-3$.
b) The range of $f$ is $[-4, +\infty)$.
c) $f$ is increasing on the interval $(-1, 3)$.
d) $f(x)<0$ if and only if $-1<x<3$.

::hint
**What you need:** reading values, the lowest point and where the graph rises or falls.

**Steps:**
1. Find where the graph meets the $y$-axis and its lowest point.
2. See whether the graph rises or falls on each part.
3. Look at the part of the graph below the $x$-axis.

::solution
a) **True.** The graph meets the $y$-axis at $(0, -3)$.

b) **True.** The lowest point is $(1, -4)$ and the graph rises without end on both sides.

c) **False.** On $(-1, 1)$ the graph falls, for example $f(0)=-3>f(1)=-4$; $f$ is increasing only on $(1, +\infty)$.

d) **True.** The part of the graph below the $x$-axis corresponds to $x$ between the zeros $-1$ and $3$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
(Revisiting sets.) Find the domain $D$ of $f(x)=\sqrt{x+3}+\dfrac{1}{\sqrt{2-x}}$, then find $D\cap\mathbb{Z}$.

::hint
**What you need:** a root in a denominator needs a **positive** expression under it; an intersection contains the elements that belong to both sets.

**Steps:**
1. Write the two conditions $x+3\ge0$ and $2-x>0$.
2. Intersect the two intervals, then list the integers in the result.

::solution
$x+3\ge0\iff x\ge-3$ and $2-x>0\iff x<2$. So $D=[-3, 2)$, and the integers in $D$ are $-3, -2, -1, 0, 1$ (not $2$).

**Answer.** $D=[-3, 2)$; $D\cap\mathbb{Z}=\{-3, -2, -1, 0, 1\}$.
:::

:::exercise Challenge
Find the range of $f(x)=x^2-4x+7$ on $\mathbb{R}$ and on the interval $[0, 3]$.

::hint
**What you need:** $x^2-4x+7=(x-2)^2+3$; a square is never negative.

**Steps:**
1. On $\mathbb{R}$: $(x-2)^2$ takes every non-negative value.
2. On $[0, 3]$: find the values of $x-2$, then of $(x-2)^2$.

::solution
On $\mathbb{R}$, $(x-2)^2$ takes every value in $[0, +\infty)$, so $f(x)$ takes every value in $[3, +\infty)$.

For $0\le x\le3$ we have $-2\le x-2\le1$, so $(x-2)^2$ takes every value in $[0, 4]$ (the value $4$ at $x=0$, the value $0$ at $x=2$). Hence $f(x)$ takes every value in $[3, 7]$.

**Answer.** On $\mathbb{R}$: $[3, +\infty)$; on $[0, 3]$: $[3, 7]$.
:::

:::exercise Challenge
A phone network offers two monthly data plans. Plan A: $50$ thousand dong plus $10$ thousand dong for each GB used. Plan B: $90$ thousand dong for up to $6$ GB, plus $15$ thousand dong for each GB above $6$. For which usage $x$ GB is plan B cheaper than plan A?

::hint
**What you need:** plan B is a function given by two formulas; compare under each condition.

**Steps:**
1. Write $A(x)=50+10x$ and $B(x)$ with the two lines $0\le x\le6$ and $x>6$.
2. Solve $B(x)<A(x)$ under each condition and combine the results.

::solution
For $0\le x\le6$: $90<50+10x\iff x>4$, so $4<x\le6$.

For $x>6$: $B(x)=90+15(x-6)=15x$, and $15x<50+10x\iff x<10$, so $6<x<10$.

Together: $4<x<10$. **Check.** At $x=4$: $A=B=90$; at $x=10$: $A=B=150$.

**Answer.** Plan B is cheaper when $4<x<10$ (GB).
:::

## Mini test

:::quiz
::mc
The domain of $f(x)=\dfrac{\sqrt{x+1}}{x-3}$ is
A. $[-1, +\infty)$.
B. $[-1, 3)\cup(3, +\infty)$.
C. $(-1, 3)\cup(3, +\infty)$.
D. $\mathbb{R}\setminus\{3\}$.
::key B
We need $x+1\ge0$ and $x-3\ne0$, that is $x\ge-1$ and $x\ne3$. Option A forgets that the denominator must not be $0$; C wrongly removes $x=-1$ (where $\sqrt0=0$ is defined); D forgets the condition for the square root.

::mc
Which table defines $y$ as a function of $x$?
A. $(1, 2)$, $(2, 3)$, $(1, 4)$.
B. $(1, 5)$, $(2, 5)$, $(3, 5)$.
C. $(0, 1)$, $(0, -1)$, $(1, 0)$.
D. $(2, 1)$, $(3, 2)$, $(2, 2)$.
::key B
In B each value of $x$ gives exactly one value of $y$; several values of $x$ sharing $y=5$ is allowed. In A, C and D one value of $x$ has two different values of $y$.

::mc
Let $f(x)=\begin{cases}2x-1 & \text{if } x<1,\\ x^2+1 & \text{if } x\ge1.\end{cases}$ The value of $f(1)+f(-2)$ is
A. $-3$.
B. $-4$.
C. $7$.
D. $6$.
::key A
$1\ge1$, so $f(1)=1^2+1=2$; $-2<1$, so $f(-2)=2\cdot(-2)-1=-5$. The sum is $-3$. Option B uses the first line for $f(1)$ by mistake; C uses the second line for $f(-2)$.

::mc
On which interval is $f(x)=-x^2+4x$ increasing?
A. $(-\infty, 2)$.
B. $(2, +\infty)$.
C. $(0, 4)$.
D. $(-\infty, 4)$.
::key A
$f(x)=4-(x-2)^2$: the graph is a parabola opening downwards with vertex $(2, 4)$, so it rises for $x<2$ and falls for $x>2$. Option C is the interval between the zeros $0$ and $4$, where the function both rises and falls.

::tf
Let $f(x)=x^2-4x+3$.
a) $f(0)=3$.
b) The zeros of $f$ are $x=1$ and $x=3$.
c) The range of $f$ is $[-1, +\infty)$.
d) $f$ is decreasing on the interval $(1, 3)$.
::key T T T F
a) True. b) True: $f(1)=f(3)=0$. c) True: $f(x)=(x-2)^2-1\ge-1$, and it takes every value from $-1$ upwards. d) False: $f$ is decreasing only on $(-\infty, 2)$; on $(2, 3)$ it is increasing, for example $f(2)=-1<f(2.5)=-0.75$.

::sa
How many positive integers belong to the domain of $f(x)=\sqrt{12-3x}$?
::key 4
We need $12-3x\ge0\iff x\le4$. The positive integers that qualify are $1, 2, 3, 4$: there are $4$.

::sa
A water company charges $8$ thousand dong per m³ for the first $10$ m³ and $12$ thousand dong per m³ for every m³ above $10$. This month a household pays $176$ thousand dong. How many m³ of water did it use?
::key 18
The first $10$ m³ cost $80$ thousand dong $<176$, so the amount used is $x>10$ and $80+12(x-10)=176\iff 12(x-10)=96\iff x=18$.
:::
