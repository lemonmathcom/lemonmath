---
title: The function y = ax² (a ≠ 0)
description: Recognise the function y = ax², find its values, make a table of values, draw its parabola and use it in real-life problems.
minutes: 20
---

:::goals
- Recognise the function $y=ax^2$ ($a\neq0$) and find its value at a given point.
- Make a table of values and draw the graph (a parabola) of $y=ax^2$.
- State the symmetry of the graph and its position depending on the sign of $a$.
- Solve some real-life problems involving the function $y=ax^2$.
:::

Between about 1602 and 1604, in Padua (Italy), Galileo Galilei rolled balls down sloping channels to slow down falling motion so that he could measure it. He found a surprising law: the distance travelled is not proportional to the time, but to the **square** of the time (MacTutor, University of St Andrews). In grade 10 physics, the law of free fall is written as $s=\dfrac12gt^2$ with $g\approx9.8$ m/s²; rounding to $g\approx10$ gives $s\approx5t^2$ (metres).

Suppose you drop a marble from the roof of a building $45$ m high (about $15$ storeys) and ignore air resistance. How long does it take the marble to reach the ground? And why does it fall so much further in the third second than in the first?

## The function $y=ax^2$ ($a\neq0$)

### Explore: distance fallen over time

We work out $s=5t^2$ at a few times:

| $t$ (seconds) | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $s$ (metres) | $0$ | $5$ | $20$ | $45$ |

When the time doubles (from $1$ to $2$ seconds), the distance becomes four times as large (from $5$ to $20$ m); three times the time gives nine times the distance. In each second the marble falls $5$ m, then $15$ m, then $25$ m: it keeps speeding up. Each value of $t$ gives exactly one value of $s$, so $s$ is a function of $t$.

:::definition The function $y=ax^2$
A function of the form $y=ax^2$, where $a$ is a real number other than $0$, is defined for every real number $x$. The number $a$ is called the **coefficient** of the function.
:::

**Going deeper.** For the linear function $y=ax$ (grade 8), doubling $x$ doubles $y$. For $y=ax^2$, multiplying $x$ by $k$ multiplies $y$ by $k^2$, because $a(kx)^2=k^2\cdot ax^2$. That is why the area of a square with side $x$ is $S=x^2$ ($a=1$) and the area of a circle with radius $R$ is $S=\pi R^2$ ($a=\pi$): enlarge a shape by a factor of $2$ and its area becomes four times as large.

Functions such as $y=x^2+1$ or $y=(x-1)^2$ do **not** have the form $y=ax^2$: their graphs do not pass through $O$ (for $y=x^2+1$) or do not have the $y$-axis as axis of symmetry (for $y=(x-1)^2$). In grade 10 you will study general quadratic functions like these.

:::example Finding values of the function
Consider the function $y=-2x^2$. Find the value of $y$ when $x=-3$, $x=\dfrac12$ and $x=\sqrt2$.

**Solution.** We substitute each value of $x$ into the formula. Note that we square first and multiply by $-2$ afterwards:

$$\begin{aligned} x=-3:&\quad y=-2\cdot(-3)^2=-2\cdot9=-18;\\ x=\tfrac12:&\quad y=-2\cdot\tfrac14=-\tfrac12;\\ x=\sqrt2:&\quad y=-2\cdot(\sqrt2)^2=-2\cdot2=-4. \end{aligned}$$

So the corresponding values of $y$ are $-18$, $-\dfrac12$ and $-4$.
:::

## The graph of $y=ax^2$

### Explore: the functions $y=x^2$ and $y=-x^2$

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y=x^2$ | $4$ | $1$ | $0$ | $1$ | $4$ |
| $y=-x^2$ | $-4$ | $-1$ | $0$ | $-1$ | $-4$ |

Two opposite values of $x$ give the same value of $y$, because $(-x)^2=x^2$. Plotting the points $(x, y)$ on a coordinate grid and joining them with a smooth curve, we get the picture below.

:::graph The graphs of $y=x^2$ and $y=-x^2$
alt: Two parabolas with their vertex at the origin O; y equals x squared opens upwards and y equals minus x squared opens downwards, each the reflection of the other in the x-axis
x: -3..3
y: -5..5
plot: x^2
plot: -x^2 ; dashed
point: (0, 0) "O" right
point: (-2, 4) "A" left
point: (2, 4) "A'" right
point: (-1, 1)
point: (1, 1)
point: (-2, -4) "B" left
point: (2, -4) "B'" right
point: (-1, -1)
point: (1, -1)
:::

:::theorem The graph of $y=ax^2$ ($a\neq0$)
The graph of $y=ax^2$ is a curve through the origin $O$ with the $y$-axis as its axis of symmetry. This curve is called a **parabola** with **vertex** $O$.
- If $a>0$, the graph lies above the $x$-axis and $O$ is its lowest point.
- If $a<0$, the graph lies below the $x$-axis and $O$ is its highest point.
:::

**Why is it symmetrical about the $y$-axis?** If the point $(x_0, y_0)$ is on the graph, then $y_0=ax_0^2=a(-x_0)^2$, so the point $(-x_0, y_0)$ is on the graph too. These two points are reflections of each other in the $y$-axis. Also $x^2\geq0$, so $y=ax^2$ has the same sign as $a$ when $x\neq0$.

:::example Drawing a graph
Draw the graph of $y=\dfrac12x^2$.

**Solution.** We make a table of values (choosing even $x$ so that $y$ is a whole number):

| $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|---|
| $y=\frac12x^2$ | $8$ | $2$ | $0$ | $2$ | $8$ |

We plot the points $(-4, 8)$, $(-2, 2)$, $(0, 0)$, $(2, 2)$, $(4, 8)$ and join them with a smooth curve.

So the graph is a parabola with vertex $O$, lying above the $x$-axis, with the $y$-axis as its axis of symmetry (see the figure below).
:::

:::graph The graph of $y=\frac12x^2$
alt: A parabola opening upwards with its vertex at the origin, through the points (-4, 8), (-2, 2), (2, 2) and (4, 8)
x: -5..5
y: -1..9
plot: 0.5x^2
point: (0, 0) "O" below-right
point: (-2, 2) "(-2, 2)" left
point: (2, 2) "(2, 2)" right
point: (-4, 8) "(-4, 8)" left
point: (4, 8) "(4, 8)" right
:::

## Points on the graph and real-life problems

The point $M(x_0, y_0)$ lies on the graph of $y=ax^2$ exactly when $y_0=ax_0^2$. So if we know one point of the graph, we can find the coefficient $a$.

:::example Finding the coefficient $a$
The graph of $y=ax^2$ passes through the point $A(2, -12)$.

a) Find $a$.

b) Do the points $B(-1, -3)$ and $C(3, 27)$ lie on the graph?

**Solution.** a) Substituting $x=2$, $y=-12$ into $y=ax^2$, we get

$$-12=a\cdot2^2\Leftrightarrow 4a=-12\Leftrightarrow a=-3.$$

b) With $y=-3x^2$, we have $-3\cdot(-1)^2=-3$, so $B$ lies on the graph; $-3\cdot3^2=-27\neq27$, so $C$ does not.

So $a=-3$; the point $B$ lies on the graph and the point $C$ does not.
:::

Conversely, if we know the $y$-coordinate, we find the $x$-coordinate by solving $ax^2=y_0$. Because of the symmetry, there are usually two opposite values of $x$.

:::example Answering the opening question
The marble falls from a height of $45$ m, and the distance fallen is $s=5t^2$ (m). How long does it take to reach the ground? After $2$ seconds, how far above the ground is it?

**Solution.**

*Understand.* We need the time $t$ when the marble reaches the ground, and the height left when $t=2$.

*Plan.* The marble reaches the ground when the distance fallen equals the height, that is $s=45$. The height left is $45-s$.

*Solve.* We have

$$5t^2=45\Leftrightarrow t^2=9\Leftrightarrow t=3\ \text{ or }\ t=-3.$$

Since $t>0$, $t=3$. After $2$ seconds the marble has fallen $s=5\cdot2^2=20$ (m), so it is $45-20=25$ (m) above the ground.

So the marble reaches the ground after $3$ seconds; after $2$ seconds it is $25$ m above the ground.

*Look back.* Is the result sensible? After $2$ seconds (two thirds of the time) the marble has fallen less than half the height, because it keeps speeding up. If the building were four times as high ($180$ m), the fall would take only twice as long ($t^2=36$, $t=6$ seconds), not four times as long.
:::

**Connections.** This lesson builds on functions, graphs (grade 8) and square roots. Solving $ax^2=k$ is the simplest case of a [quadratic equation in one unknown](lesson:quadratic-equations). A parabola is also the path of a ball thrown at an angle (ignoring air resistance) and the graph of the quadratic functions of grade 10.

:::warning Common mistakes
- **Squaring the coefficient as well.** Wrong: for $y=-2x^2$ at $x=-3$, working out $y=(-2\cdot(-3))^2=36$. Why it is wrong: only $x$ is squared. Right: $y=-2\cdot(-3)^2=-18$.
- **Missing one value of $x$.** Wrong: "$x^2=9$, so $x=3$". Why it is wrong: $(-3)^2=9$ as well. Right: $x=3$ or $x=-3$, then check the condition of the problem (such as $t>0$).
- **Joining the points with straight lines.** The graph is a smooth curve; near the vertex $O$ it is "rounded", with no sharp corner.
:::

## Key terms

:::terms
- the function $y=ax^2$ | hàm số $y=ax^2$
- coefficient | hệ số
- table of values | bảng giá trị
- graph | đồ thị
- parabola | parabol
- vertex | đỉnh
- axis of symmetry | trục đối xứng
- lowest / highest point | điểm thấp nhất / cao nhất
:::

## Summary

- The function $y=ax^2$ ($a\neq0$) is defined for all $x\in\mathbb{R}$; $x$ and $-x$ give the same value of $y$.
- Its graph is a parabola with vertex $O$ and axis of symmetry the $y$-axis.
- $a>0$: the graph is above the $x$-axis and $O$ is lowest; $a<0$: the graph is below the $x$-axis and $O$ is highest.
- $M(x_0, y_0)$ is on the graph $\Leftrightarrow y_0=ax_0^2$; use this to find $a$ or to find points.
- To draw the graph: make a table of values with opposite pairs of $x$ and join with a smooth curve.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Consider the function $y=3x^2$. Find the value of $y$ when $x=-2$, $x=0$, $x=\dfrac13$ and $x=\sqrt3$.

::hint
**What you need:** substitute the value of $x$ into the formula, square first, then multiply by $3$.

**Steps:**
1. Work out $x^2$ for each value.
2. Multiply the result by $3$.

::solution
We have $3\cdot(-2)^2=12$, $3\cdot0^2=0$, $3\cdot\left(\dfrac13\right)^2=\dfrac13$ and $3\cdot(\sqrt3)^2=9$.

So the values of $y$ are $12$, $0$, $\dfrac13$ and $9$ respectively.

**Answer.** $12$; $0$; $\dfrac13$; $9$.
:::

:::exercise
Make a table of values and draw the graph of $y=-\dfrac12x^2$ for $x\in\{-4, -2, 0, 2, 4\}$. Describe the position of the graph.

::hint
**What you need:** if $a<0$, the parabola lies below the $x$-axis and $O$ is its highest point.

**Steps:**
1. Work out $y$ at each value of $x$.
2. Plot the points and join them with a smooth curve.

::solution
We have the table of values:

| $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|---|
| $y$ | $-8$ | $-2$ | $0$ | $-2$ | $-8$ |

So the graph is a parabola with vertex $O$ through these points, lying below the $x$-axis with the $y$-axis as its axis of symmetry; $O$ is its highest point.

**Answer.** A parabola with vertex $O$ through the points in the table, lying below the $x$-axis.
:::

:::exercise
Which of the points $A(1, 2)$, $B(-2, 8)$, $C(3, 18)$, $D(-1, -2)$ lie on the graph of $y=2x^2$?

::hint
**What you need:** $M(x_0, y_0)$ lies on the graph exactly when $y_0=2x_0^2$.

**Steps:**
1. Work out $2x_0^2$ for each point and compare it with $y_0$.

::solution
We have $2\cdot1^2=2$, $2\cdot(-2)^2=8$, $2\cdot3^2=18$ and $2\cdot(-1)^2=2\neq-2$.

So the points $A$, $B$, $C$ lie on the graph and the point $D$ does not.

**Answer.** $A$, $B$, $C$.
:::

:::exercise
The graph of $y=ax^2$ passes through the point $M(-3, 6)$.

a) Find $a$.

b) Find the points on the graph whose $y$-coordinate is $24$.

::hint
**What you need:** substitute the coordinates into $y=ax^2$; the equation $x^2=k$ ($k>0$) has two solutions $\pm\sqrt k$.

**Steps:**
1. Solve $9a=6$.
2. Solve $ax^2=24$.

::solution
a) Substituting $x=-3$, $y=6$, we get $9a=6$, so $a=\dfrac23$.

b) We have $\dfrac23x^2=24\Leftrightarrow x^2=36\Leftrightarrow x=6$ or $x=-6$.

So $a=\dfrac23$, and the required points are $(6, 24)$ and $(-6, 24)$.

**Answer.** a) $a=\dfrac23$; b) $(6, 24)$, $(-6, 24)$.
:::

:::exercise
An object is dropped from a height of $125$ m. The distance it has fallen after $t$ seconds is $s=5t^2$ (m).

a) After $3$ seconds, how far above the ground is the object?

b) How long does it take to reach the ground?

::hint
**What you need:** the height above the ground is $125-s$; the object reaches the ground when $s=125$.

**Steps:**
1. Work out $s$ when $t=3$.
2. Solve $5t^2=125$ with $t>0$.

::solution
a) When $t=3$, we have $s=5\cdot3^2=45$ (m). Hence the object is $125-45=80$ (m) above the ground.

b) We have $5t^2=125\Leftrightarrow t^2=25$. Since $t>0$, $t=5$.

So after $3$ seconds the object is $80$ m above the ground, and it reaches the ground after $5$ seconds.

**Answer.** a) $80$ m; b) $5$ seconds.
:::

:::exercise
In grade 9 science (the lesson on kinetic and potential energy), the kinetic energy of an object of mass $m$ (kg) moving at speed $v$ (m/s) is $W=\dfrac12mv^2$ (J). Suppose a ball has mass $0.4$ kg; then $W=0.2v^2$.

a) Find the kinetic energy of the ball when $v=10$ m/s.

b) The ball has kinetic energy $45$ J. What is its speed?

::hint
**What you need:** $W=0.2v^2$ is a function of the form $y=ax^2$ with $a=0.2$; the speed $v>0$.

**Steps:**
1. Substitute $v=10$.
2. Solve $0.2v^2=45$.

::solution
a) We have $W=0.2\cdot10^2=20$ (J).

b) We have $0.2v^2=45\Leftrightarrow v^2=225$. Since $v>0$, $v=15$.

So the kinetic energy is $20$ J, and the required speed is $15$ m/s.

**Remark.** Multiplying the speed by $1.5$ multiplies the kinetic energy by $1.5^2=2.25$; a vehicle going twice as fast has four times the kinetic energy.

**Answer.** a) $20$ J; b) $15$ m/s.
:::

:::exercise
Consider the function $y=3x^2$. (Revise [square-root expressions](lesson:simplifying-root-expressions).)

a) Find the $x$-coordinates of the points on the graph whose $y$-coordinate is $6$.

b) Find the value of $y$ when $x=1-\sqrt2$.

::hint
**What you need:** $x^2=2\Leftrightarrow x=\pm\sqrt2$; the identity $(a-b)^2=a^2-2ab+b^2$.

**Steps:**
1. Solve $3x^2=6$.
2. Expand $(1-\sqrt2)^2$, then multiply by $3$.

::solution
a) We have $3x^2=6\Leftrightarrow x^2=2\Leftrightarrow x=\sqrt2$ or $x=-\sqrt2$.

b) We have $(1-\sqrt2)^2=1-2\sqrt2+2=3-2\sqrt2$, so $y=3(3-2\sqrt2)=9-6\sqrt2$.

So a) $x=\pm\sqrt2$; b) $y=9-6\sqrt2$.

**Answer.** a) $x=\sqrt2$, $x=-\sqrt2$; b) $9-6\sqrt2$.
:::

:::exercise
**(2.0 marks)** The graph $(P)$ of the function $y=ax^2$ passes through the point $A(2, 2)$.

a) Find $a$.

b) Draw $(P)$.

c) Find the points on $(P)$ whose $y$-coordinate is twice their $x$-coordinate.

::hint
**What you need:** points on a graph; a product equation $A\cdot B=0$ (lesson [equations reducible to linear equations](lesson:equations-reducible-to-linear)).

**Steps:**
1. Solve $4a=2$.
2. Make a table of values with $x\in\{-4, -2, 0, 2, 4\}$.
3. The required points have the form $(x, 2x)$: solve $\dfrac12x^2=2x$.

::solution
a) Substituting $x=2$, $y=2$, we get $4a=2$, so $a=\dfrac12$.

b) $(P)$ is the parabola $y=\dfrac12x^2$ drawn in the example "Drawing a graph".

c) The required points have the form $(x, 2x)$. Substituting into $(P)$, we have

$$\frac12x^2=2x\Leftrightarrow x^2-4x=0\Leftrightarrow x(x-4)=0\Leftrightarrow x=0\ \text{ or }\ x=4.$$

So $a=\dfrac12$, and the required points are $(0, 0)$ and $(4, 8)$.

**Answer.** a) $a=\dfrac12$; c) $(0, 0)$ and $(4, 8)$.
:::

:::exercise Challenge
Suppose an entrance arch has the shape of a parabola. It is $8$ m wide at the base and its top is $6$ m above the ground. Choose axes with the origin $O$ at the top of the arch and the $y$-axis pointing upwards; then the arch is part of the graph of $y=ax^2$. A lorry $3$ m wide and $5$ m high drives through the middle of the arch. Can the lorry get through?

::hint
**What you need:** the feet of the arch are the points $(-4, -6)$ and $(4, -6)$.

**Steps:**
1. Find $a$ from the point $(4, -6)$.
2. The sides of the lorry are $1.5$ m from the centre line: find $y$ at $x=1.5$.
3. The height of the arch there is $6+y$; compare it with $5$.

::solution
The foot $(4, -6)$ is on the graph, so $16a=-6$, hence $a=-\dfrac38$.

At $x=1.5$, we have $y=-\dfrac38\cdot1.5^2=-\dfrac{27}{32}\approx-0.84$. Hence the height of the arch above the sides of the lorry is $6-0.84375=5.15625$ (m) $>5$ m.

So the lorry can get through the arch.

**Answer.** Yes (the arch is about $5.16$ m high above the sides of the lorry).
:::

## Mini test

:::quiz
::mc
Which of the following functions has the form $y=ax^2$ with $a\neq0$?
A. $y=3x$.
B. $y=-\dfrac12x^2$.
C. $y=x^2+2$.
D. $y=0x^2$.
::key B
$a=-\dfrac12\neq0$. A is a linear function, C has an extra term $2$, and D has $a=0$.

::mc
Consider the function $y=-2x^2$. The value of $y$ when $x=-3$ is
A. $18$.
B. $-18$.
C. $36$.
D. $6$.
::key B
$y=-2\cdot9=-18$. A has the wrong sign, C squares the $-2$ as well, and D forgets to square.

::mc
The graph of $y=ax^2$ passes through the point $(-2, 8)$. The value of $a$ is
A. $2$.
B. $-2$.
C. $4$.
D. $-4$.
::key A
$4a=8$, so $a=2$. B takes $(-2)^2=-4$, C takes $8\div2$, and D takes $8\div(-2)$.

::mc
Which of the following points does not lie on the graph of $y=-x^2$?
A. $(1, -1)$.
B. $(-2, -4)$.
C. $(3, 9)$.
D. $(0, 0)$.
::key C
At $x=3$, $y=-9\neq9$.

::tf
The function $y=\dfrac13x^2$ has graph $(P)$. Decide whether each statement is true or false.
a) $O(0, 0)$ is the lowest point of $(P)$.
b) $(P)$ passes through the point $(3, 3)$.
c) $(P)$ passes through the point $(-3, -3)$.
d) The points of $(P)$ with $y$-coordinate $12$ have $x$-coordinates $6$ and $-6$.
::key T T F T
a) True: $a>0$. b) True: $\dfrac13\cdot9=3$. c) False: at $x=-3$, $y=3$. d) True: $x^2=36$.

::sa
An object falls from a height of $80$ m, and the distance fallen after $t$ seconds is $s=5t^2$ (m). After how many seconds does it reach the ground?
::key 4
$5t^2=80\Leftrightarrow t^2=16$, and $t>0$, so $t=4$.

::sa
The graph of $y=ax^2$ passes through the point $A(4, 4)$. Find $a$ (give your answer as a decimal).
::key 0.25
$16a=4$, so $a=0.25$.
:::
