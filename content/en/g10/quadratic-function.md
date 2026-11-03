---
title: The quadratic function
description: Learn the function y=ax²+bx+c, its parabola, vertex and axis of symmetry, table of variations, maximum and minimum, translations and real-life uses.
minutes: 30
---

:::goals
- Recognise a quadratic function, and find the vertex, the axis of symmetry and which way the parabola opens.
- Sketch the graph and draw the table of variations.
- Find a maximum or a minimum, and find the formula of a function from given data.
- Use the form $y=a(x-p)^2+q$ and solve problems about thrown objects, areas and profit.
:::

A farmer has $40$ m of netting and wants to fence a rectangular chicken run against a straight wall (the side along the wall needs no netting). Which dimensions give the largest area?

## The function $y=ax^2+bx+c$

Let us try some numbers. Let the two sides perpendicular to the wall be $x$ m long; the side parallel to the wall is $40-2x$ m long, and the area is $S=x(40-2x)$:

| $x$ (m) | $5$ | $8$ | $10$ | $12$ | $15$ |
|---|---|---|---|---|---|
| $S$ (m²) | $150$ | $192$ | $200$ | $192$ | $150$ |

The area rises and then falls, and the values are **symmetric** about $x=10$: $S(8)=S(12)$, $S(5)=S(15)$. It looks as if $x=10$ gives the largest area. Expanding, $S=-2x^2+40x$: a quadratic expression in $x$. To be sure, we need to understand the graphs of such functions.

:::definition Quadratic function
A **quadratic function** is a function of the form
$$y=ax^2+bx+c,\qquad a\ne0.$$
Its domain is $\mathbb{R}$ and its graph is a **parabola**. Let $\Delta=b^2-4ac$.
- The **vertex** is $I\left(-\dfrac{b}{2a},\ -\dfrac{\Delta}{4a}\right)$.
- The **axis of symmetry** is the vertical line $x=-\dfrac{b}{2a}$.
- If $a>0$, the parabola **opens upwards** and the vertex is its lowest point. If $a<0$, it **opens downwards** and the vertex is its highest point.
:::

**Why is the vertex there?** Complete the square:
$$ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a}.$$
The square $\left(x+\frac{b}{2a}\right)^2$ is never negative and is $0$ only when $x=-\frac{b}{2a}$. If $a>0$, then $y\ge-\frac{\Delta}{4a}$, with equality at $x=-\frac{b}{2a}$; if $a<0$, then $y\le-\frac{\Delta}{4a}$. Two values of $x$ at the same distance from $-\frac{b}{2a}$ give the same $y$, so the graph is symmetric about the line $x=-\frac{b}{2a}$.

The value of $|a|$ decides whether the parabola is "narrow" or "wide".

:::graph Parabolas $y=x^2$, $y=-x^2$ and $y=\frac12x^2$
alt: Three parabolas through the origin: y=x^2 opening upwards, y=-x^2 opening downwards and the wider y=0.5x^2 opening upwards
x: -4..4
y: -5..5
plot: x^2
plot: -x^2
plot: 0.5*x^2
:::

## Sketching a parabola

To sketch $y=ax^2+bx+c$: (1) find the vertex; (2) draw the axis of symmetry; (3) find where the graph meets the axes ($x=0$ gives $y=c$; $y=0$ gives the roots, if any); (4) use the symmetry about the axis.

The first example carries out all four steps for a parabola that opens upwards.

:::example A parabola opening upwards
Find the vertex, the axis of symmetry and the points on the axes, and sketch $y=x^2-4x+3$.

**Solution.** Here $a=1>0$, so the parabola opens upwards. Find $\Delta$ and then the vertex:

$$\Delta=16-12=4,\qquad x_I=-\frac{-4}{2\cdot1}=2,\qquad y_I=-\frac{4}{4\cdot1}=-1.$$

On the $y$-axis: $x=0$ gives $y=3$. On the $x$-axis: $x^2-4x+3=(x-1)(x-3)=0$ gives $x=1$ or $x=3$.

So the vertex is $I(2, -1)$, the axis is $x=2$, and the graph meets the $y$-axis at $(0, 3)$ and the $x$-axis at $(1, 0)$, $(3, 0)$. The function has minimum value $-1$ at $x=2$.

**Check.** The two roots $1$ and $3$ are at the same distance from the axis $x=2$, as symmetry requires.
:::

:::graph $y=x^2-4x+3$
alt: A parabola opening upwards with vertex (2, -1), crossing the x-axis at 1 and 3 and the y-axis at 3, with the dashed axis of symmetry x=2
x: -1..5
y: -2..6
plot: x^2 - 4x + 3
vline: 2 ; dashed
point: (2, -1) "I(2, -1)" below
point: (1, 0) "1" above-left
point: (3, 0) "3" above-right
point: (0, 3) "3" left
:::

### Table of variations

The table of variations shows where the function goes up and where it goes down. For $y=x^2-4x+3$ ($a>0$):

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $+\infty$ | decreasing | $-1$ | increasing | $+\infty$ |

For $a>0$: decreasing on $\left(-\infty, -\frac{b}{2a}\right)$, increasing on $\left(-\frac{b}{2a}, +\infty\right)$, minimum $-\frac{\Delta}{4a}$. For $a<0$ it is the other way round and $-\frac{\Delta}{4a}$ is the maximum.

When $a<0$ everything turns upside down: the vertex becomes the highest point.

:::example A parabola opening downwards
Find the vertex, where the function increases and decreases, and the maximum of $y=-x^2+2x+3$.

**Solution.** Here $a=-1<0$, so the parabola opens downwards and the vertex is its highest point:

$$\Delta=4+12=16,\qquad x_I=-\frac{2}{2\cdot(-1)}=1,\qquad y_I=-\frac{16}{4\cdot(-1)}=4.$$

The graph meets the $y$-axis at $(0, 3)$; solving $-x^2+2x+3=0$ gives $x=-1$ or $x=3$.

So the vertex is $I(1, 4)$; the function is increasing on $(-\infty, 1)$, decreasing on $(1, +\infty)$, and has maximum value $4$ at $x=1$.
:::

:::graph $y=-x^2+2x+3$
alt: A parabola opening downwards with vertex (1, 4), crossing the x-axis at -1 and 3 and the y-axis at 3
x: -2..4
y: -2..6
plot: -x^2 + 2x + 3
vline: 1 ; dashed
point: (1, 4) "I(1, 4)" above
point: (-1, 0) "-1" below-left
point: (3, 0) "3" below-right
point: (0, 3) "3" left
:::

## Finding the formula

The other way round: if we know three points on the parabola, we find $a$, $b$, $c$ by solving a system of equations.

:::example A parabola through three points
Find the quadratic function whose graph passes through $A(0, 5)$, $B(1, 2)$ and $C(3, 2)$.

**Solution.** Let $y=ax^2+bx+c$ and substitute each point. The point $A$ gives $c=5$ at once; the other two give:

$$\begin{cases}a+b+5=2\\9a+3b+5=2\end{cases}\iff\begin{cases}a+b=-3\\3a+b=-1.\end{cases}$$

Subtracting: $2a=2$, so $a=1$ and $b=-4$. The function is $y=x^2-4x+5$.

**Check.** $B$ and $C$ have the same $y$-coordinate $2$, so the axis of symmetry is $x=\frac{1+3}{2}=2$; indeed $-\frac{b}{2a}=\frac{4}{2}=2$.
:::

## Translations: $y=a(x-p)^2+q$

Completing the square above gives $ax^2+bx+c=a(x-p)^2+q$ with $p=-\frac{b}{2a}$ and $q=-\frac{\Delta}{4a}$. So **the vertex is $(p, q)$**. The graph is the parabola $y=ax^2$ moved $p$ units to the right and $q$ units up (left or down if the number is negative).

:::graph $y=2x^2$ moved to $y=2(x-1)^2+3$
alt: The parabola y=2x^2 drawn dashed, and the same parabola moved one unit right and three units up, with vertex (1, 3)
x: -3..4
y: -1..9
plot: 2x^2 ; dashed
plot: 2(x - 1)^2 + 3
point: (1, 3) "(1, 3)" below-right
:::

Expanding, $2(x-1)^2+3=2x^2-4x+5$, and the vertex formula gives $x_I=\frac{4}{4}=1$, $y_I=2-4+5=3$: indeed $(1, 3)$.

## Applications

The vertex of a parabola answers questions about "highest", "largest" and "smallest". The first example is a thrown object.

:::example A thrown ball
A ball is thrown upwards. Its height in metres after $t$ seconds is $h(t)=-5t^2+20t+1.5$. Find the greatest height, and when the ball reaches the ground (to $0.01$ of a second).

**Solution.** The coefficient $a=-5<0$, so $h$ is largest at the vertex:

$$t_I=-\frac{20}{2\cdot(-5)}=2,\qquad h(2)=-20+40+1.5=21.5.$$

The ball reaches the ground when $h=0$, that is $5t^2-20t-1.5=0$:

$$t=\frac{20\pm\sqrt{400+30}}{10}=\frac{20\pm\sqrt{430}}{10}.$$

Time must be positive, so we keep $t=\frac{20+\sqrt{430}}{10}\approx4.07$. So the ball is highest, at $21.5$ m, after $2$ seconds and reaches the ground after about $4.07$ seconds.
:::

:::graph Height of the ball
alt: A downward parabola starting at height 1.5 at t=0, reaching 21.5 at t=2 and coming back to 0 near t=4.07
x: 0..5
y: -2..24
plot: -5x^2 + 20x + 1.5 ; 0..4.07
point: (2, 21.5) "(2, 21.5)" above
:::

Finally, we answer the question about the chicken run from the start of the lesson.

:::example Largest area
The farmer has $40$ m of netting to fence a rectangular run against a wall. Find the dimensions that give the largest area.

**Solution.** Let the two sides perpendicular to the wall be $x$ m; the remaining side is $40-2x>0$, so $0<x<20$. The area is a quadratic function with $a=-2<0$:

$$S(x)=x(40-2x)=-2x^2+40x,\qquad x_I=-\frac{40}{2\cdot(-2)}=10,\qquad S(10)=200.$$

The value $x=10$ lies in $(0, 20)$, so it can be used. The run should be $10$ m wide (the two sides perpendicular to the wall) and $20$ m long (the side parallel to the wall); the largest area is $200$ m².

**Check.** This agrees with the table at the start: $S(10)=200$ is more than $S(8)=S(12)=192$.
:::

:::warning Common mistakes
- **Dropping the minus sign in the vertex.** Wrong: for $y=x^2-4x+3$, $x_I=\frac{b}{2a}=-2$. Right: $x_I=-\frac{b}{2a}=2$.
- **Saying "minimum" when $a<0$.** For $y=-x^2+2x+3$ the vertex gives the **maximum** $4$; the function has no minimum. Check the sign of $a$ first.
- **Forgetting the condition on the variable in a real-life problem.** For the chicken run we need $0<x<20$; if the vertex were outside that interval, it could not be used.
- **Reading the translated form with the wrong sign.** Wrong: $y=2(x-1)^2+3$ has vertex $(-1, 3)$. Right: the vertex is $(1, 3)$, because $(x-1)^2=0$ when $x=1$.
:::

## Key terms

:::terms
- quadratic function | hàm số bậc hai
- parabola | parabol
- vertex | đỉnh
- axis of symmetry | trục đối xứng
- discriminant | biệt thức $\Delta$ (delta)
- table of variations | bảng biến thiên
- minimum value | giá trị nhỏ nhất
- maximum value | giá trị lớn nhất
- translation | phép tịnh tiến
:::

## Summary

- $y=ax^2+bx+c$ ($a\ne0$): the graph is a parabola with vertex $\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$ and axis $x=-\frac{b}{2a}$.
- $a>0$: opens upwards, minimum at the vertex. $a<0$: opens downwards, maximum at the vertex.
- Sketch: vertex, axis, points on the two axes, symmetry; summarise with a table of variations.
- Three known points: substitute and solve a system for $a$, $b$, $c$.
- $y=a(x-p)^2+q$ has vertex $(p, q)$: a translation of $y=ax^2$.
- Real-life problems: build the function, find the vertex, check the condition on the variable.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the vertex, the axis of symmetry and the points where the parabola $y=x^2-6x+5$ meets the $x$-axis.

::hint
**What you need:** the vertex has $x$-coordinate $-\dfrac{b}{2a}$; the points on the $x$-axis are the roots of $y=0$.

**Steps:**
1. Find $x_I$, then substitute to get $y_I$.
2. Solve $x^2-6x+5=0$.

::solution
$x_I=\dfrac{6}{2}=3$, $y_I=9-18+5=-4$. The equation $x^2-6x+5=(x-1)(x-5)=0$ gives $x=1$ or $x=5$.

**Answer.** Vertex $(3, -4)$; axis $x=3$; meets the $x$-axis at $(1, 0)$ and $(5, 0)$.
:::

:::exercise
Find the minimum value of $y=3x^2-12x+7$ and the value of $x$ where it occurs.

::hint
**What you need:** when $a>0$, the minimum is at the vertex.

**Steps:**
1. Check the sign of $a$.
2. Find the $x$-coordinate of the vertex and the value there.

::solution
$a=3>0$, $x_I=\dfrac{12}{6}=2$ and $y(2)=12-24+7=-5$.

**Answer.** The minimum is $-5$, at $x=2$.
:::

:::exercise
Draw the table of variations of $y=-x^2+4x$ and give its maximum.

::hint
**What you need:** when $a<0$, the function increases to the left of the vertex and decreases to the right.

**Steps:**
1. Find the vertex.
2. Fill in the table: $-\infty$ at both ends, the vertex value in the middle.

::solution
$a=-1<0$, $x_I=2$, $y_I=-4+8=4$.

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $-\infty$ | increasing | $4$ | decreasing | $-\infty$ |

**Answer.** Increasing on $(-\infty, 2)$, decreasing on $(2, +\infty)$; the maximum is $4$ at $x=2$.
:::

:::exercise
Find the quadratic function whose graph passes through $A(0, 1)$, $B(1, 0)$ and $C(2, 3)$.

::hint
**What you need:** a point $(x_0, y_0)$ is on the graph when $y_0=ax_0^2+bx_0+c$.

**Steps:**
1. Use $A$ to find $c$.
2. Substitute $B$, $C$ to get a system of two equations in $a$, $b$.

::solution
$A$ gives $c=1$. $B$ gives $a+b+1=0$, and $C$ gives $4a+2b+1=3$, that is $2a+b=1$. Subtracting: $a=2$, so $b=-3$. Check $C$: $8-6+1=3$.

**Answer.** $y=2x^2-3x+1$.
:::

:::exercise
Consider the function $y=-2x^2+4x+1$. Is each claim true or false?

a) The parabola opens downwards.
b) The vertex of the parabola is $(1, 3)$.
c) The function is increasing on $(1, +\infty)$.
d) The graph meets the $y$-axis at $(0, 1)$.

::hint
**What you need:** the sign of $a$ tells which way the parabola opens; when $a<0$, the function decreases to the right of the vertex.

**Steps:**
1. Look at the sign of $a$ and find the vertex.
2. Substitute $x=0$ to find the point on the $y$-axis.

::solution
a) **True.** $a=-2<0$.

b) **True.** $x_I=-\dfrac{4}{2\cdot(-2)}=1$ and $y_I=-2+4+1=3$.

c) **False.** Since $a<0$, the function is **decreasing** on $(1, +\infty)$.

d) **True.** $x=0$ gives $y=1$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
A ball is kicked up from the ground; its height after $t$ seconds is $h(t)=-5t^2+10t$ (metres). Find the greatest height and when the ball comes back to the ground.

::hint
**What you need:** $a<0$, so the maximum is at the vertex; the ball is on the ground when $h(t)=0$ with $t>0$.

**Steps:**
1. Find $t_I$ and $h(t_I)$.
2. Factorise $h(t)$ to solve $h(t)=0$.

::solution
$t_I=-\dfrac{10}{2\cdot(-5)}=1$ and $h(1)=-5+10=5$. The equation $-5t(t-2)=0$ gives $t=0$ (the kick) or $t=2$.

**Answer.** Greatest height $5$ m (at $t=1$ second); back on the ground at $t=2$ seconds.
:::

:::exercise
A shop buys shirts at $50$ thousand dong each. If it sells them at $x$ thousand dong each ($50\le x\le150$), it sells $300-2x$ shirts a month. At what price, in thousand dong, should the shop sell a shirt to make the largest monthly profit?

::hint
**What you need:** profit = (selling price − cost price) × number sold; a quadratic function with $a<0$ is largest at the vertex.

**Steps:**
1. Write $P(x)=(x-50)(300-2x)$ and expand.
2. Find the $x$-coordinate of the vertex and check that it lies in $[50, 150]$.

::solution
$$P(x)=(x-50)(300-2x)=-2x^2+400x-15\,000,\qquad x_I=-\frac{400}{2\cdot(-2)}=100.$$
The value $100$ lies in $[50, 150]$. The shop then sells $100$ shirts with a profit of $50$ thousand each, so $P(100)=5000$ thousand dong.

**Answer.** $100$.
:::

:::exercise
(Revisiting the scalar product.) The parabola $y=x^2-4x+3$ meets the $x$-axis at $A(1, 0)$, $B(3, 0)$ and has vertex $I$. Prove that triangle $IAB$ is a right-angled isosceles triangle with the right angle at $I$.

::hint
**What you need:** two vectors are perpendicular when their scalar product (dot product) is $0$; the length of $(x, y)$ is $\sqrt{x^2+y^2}$.

**Steps:**
1. Find the vertex $I$.
2. Compute $\overrightarrow{IA}\cdot\overrightarrow{IB}$, $IA$ and $IB$.

::solution
$I(2, -1)$, $\overrightarrow{IA}=(-1, 1)$, $\overrightarrow{IB}=(1, 1)$. Then $\overrightarrow{IA}\cdot\overrightarrow{IB}=-1+1=0$ and $IA=IB=\sqrt2$.

**Answer.** Triangle $IAB$ has a right angle at $I$ and $IA=IB=\sqrt2$, so it is right-angled and isosceles at $I$.
:::

:::exercise Challenge
A gate has the shape of a parabola, $8$ m wide at the ground and $6$ m high at the top. A lorry $3$ m wide drives through the middle of the gate. What is the greatest height of the lorry's cargo box that can pass? (Round to $0.01$ m.)

::hint
**What you need:** choose axes with the $y$-axis as the axis of symmetry of the gate and the $x$-axis on the ground; the parabola is $y=ax^2+6$.

**Steps:**
1. The feet of the gate are $(\pm4, 0)$; substitute to find $a$.
2. The lorry is in the middle, so the edges of its cargo box are at $x=\pm1.5$; find $y$ there.

::solution
From $0=16a+6$ we get $a=-\dfrac38$. At $x=1.5$:
$$y=-\frac38\cdot2.25+6=6-0.84375=5.15625.$$
The cargo box must be lower than the gate at its two edges, that is lower than $5.15625$ m. Because this is an upper limit, we round **down**: at most about $5.15$ m.

**Answer.** Lower than $5.15625$ m, so at most about $5.15$ m.
:::

:::exercise Challenge
Find $a$ and $b$ given that the parabola $y=ax^2+bx+2$ has vertex $I(2, -2)$.

::hint
**What you need:** the vertex has $x$-coordinate $-\dfrac{b}{2a}$; the vertex lies on the graph.

**Steps:**
1. From $-\dfrac{b}{2a}=2$ get $b=-4a$.
2. Substitute $x=2$, $y=-2$ into the function and solve.

::solution
$b=-4a$. The vertex lies on the graph: $4a+2b+2=-2$, that is $4a-8a=-4$, so $a=1$ and $b=-4$.

**Check.** $y=x^2-4x+2=(x-2)^2-2$ has vertex $(2, -2)$.

**Answer.** $a=1$, $b=-4$.
:::

## Mini test

:::quiz
::mc
The vertex of the parabola $y=2x^2-8x+5$ is
A. $(2, -3)$.
B. $(-2, 29)$.
C. $(4, 5)$.
D. $(2, 3)$.
::key A
$x_I=-\dfrac{b}{2a}=\dfrac{8}{4}=2$ and $y_I=8-16+5=-3$. Forgetting the minus sign in $-\dfrac{b}{2a}$ gives $x=-2$ (option B).

::mc
On which interval is the function $y=-x^2+6x-1$ increasing?
A. $(3, +\infty)$.
B. $(-\infty, 3)$.
C. $(-\infty, -3)$.
D. $(-3, +\infty)$.
::key B
$a=-1<0$ and $x_I=3$, so the function increases to the left of the vertex, that is on $(-\infty, 3)$. Option A is where it decreases; it would be correct for $a>0$.

::mc
Which parabola has vertex $(-1, 4)$?
A. $y=2(x-1)^2+4$.
B. $y=2(x+1)^2+4$.
C. $y=2(x+1)^2-4$.
D. $y=2(x-4)^2-1$.
::key B
$y=a(x-p)^2+q$ has vertex $(p, q)$. With $p=-1$, $q=4$ we get $y=2(x+1)^2+4$; option A reads the sign of $p$ the wrong way.

::mc
The maximum value of the function $y=-2x^2+4x+3$ is
A. $5$.
B. $3$.
C. $1$.
D. $-5$.
::key A
$a<0$, so the maximum is at the vertex $x=1$: $y(1)=-2+4+3=5$. Option C is the $x$-coordinate of the vertex, and option D gets the sign wrong in $-\dfrac{\Delta}{4a}$.

::tf
Consider the function $y=x^2-2x-3$.
a) The parabola opens upwards.
b) The axis of symmetry of the parabola is the line $x=-1$.
c) The graph meets the $y$-axis at the point $(0, 3)$.
d) The minimum value of the function is $-4$, at $x=1$.
::key T F F T
a) True: $a=1>0$. b) False: $x=-\dfrac{b}{2a}=1$. c) False: $x=0$ gives $y=-3$, so the point is $(0, -3)$. d) True: $y(1)=1-2-3=-4$.

::sa
The parabola $y=x^2+bx+c$ has vertex $I(3, -2)$. Find $c$.
::key 7
From $-\dfrac{b}{2}=3$ we get $b=-6$. The vertex lies on the graph: $9-18+c=-2$, so $c=7$.

::sa
A café that sells drinks at $p$ thousand dong a cup ($10\le p\le 50$) sells $120-2p$ cups a day. What is the largest daily revenue, in thousand dong?
::key 1800
The revenue $R(p)=p(120-2p)=-2p^2+120p$ has $a<0$, so it is largest at $p=\dfrac{120}{4}=30$ (which lies in $[10, 50]$). Then $R(30)=30\cdot60=1800$ thousand dong.
:::
