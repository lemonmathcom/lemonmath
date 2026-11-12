---
title: "Topic: the parabola y = ax² and straight lines"
description: Revise the graph of y = ax², and find where a parabola meets a line using the equation for the x-coordinates, in grade 10 entrance-exam style.
minutes: 25
---

:::goals
- Recognise the properties of, and draw, the parabola $y=ax^2$ ($a\neq0$).
- Draw the line $y=kx+b$ and find the equation of a line from two of its points.
- Find the intersection points of a parabola and a line using the equation for the $x$-coordinates, and know how the number of intersections depends on the sign of $\Delta$.
- Apply these ideas to the usual entrance-exam questions and to real-life problems.
:::

Suppose the cross-section of a satellite dish is the parabola $y=\dfrac{x^2}8$ (units: dm), with its vertex at the origin and the opening facing upwards. If the diameter of the opening is $8$ dm, how deep is the dish? And if we want a dish with a diameter of $12$ dm, how deep must it be?

Both questions come down to **reading the coordinates of a point on a parabola**. In the grade 10 entrance paper, a parabola usually comes with a line, and the familiar question is to find where they meet. This lesson revises the tools you need.

## The graph of $y=ax^2$

### Explore: a table of values for $y=x^2$

We make a table of values for the function $y=x^2$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $y$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

Opposite values of $x$ give the same value of $y$, so the points $(-2,4)$ and $(2,4)$ are symmetric about the $y$-axis. Joining these points gives a curve called a **parabola**.

:::graph The graph of $y=x^2$
alt: The parabola y equals x squared with its vertex at the origin, opening upwards, passing through the points (-2, 4), (-1, 1), (1, 1) and (2, 4)
x: -3..3
y: -1..6
plot: x^2
point: (0, 0) "O" below-right
point: (-2, 4) "(-2, 4)" above-left
point: (-1, 1) "(-1, 1)" left
point: (1, 1) "(1, 1)" right
point: (2, 4) "(2, 4)" above-right
:::

:::theorem Properties of the graph of $y=ax^2$
The graph of $y=ax^2$ ($a\neq0$) is a **parabola** with vertex $O$ and the $y$-axis as its axis of symmetry.
- If $a>0$: the parabola lies above the $x$-axis and opens upwards; $y\geq0$ and $y=0$ only when $x=0$ (the minimum value of $y$).
- If $a<0$: the parabola lies below the $x$-axis and opens downwards; $y\leq0$ and $y=0$ only when $x=0$ (the maximum value of $y$).
:::

**Why is this so?** Since $x^2\geq0$, the sign of $y=ax^2$ is the sign of $a$, and $y=0$ only when $x=0$. Also $(-x)^2=x^2$, so two points with opposite $x$-coordinates have the same $y$-coordinate, which gives the symmetry about the $y$-axis. To draw it, we only need a few pairs of symmetric points, joined by a smooth curve.

:::example Points on a parabola, finding $a$
a) The parabola $(P)\colon y=ax^2$ passes through the point $A(2,-2)$. Find $a$ and say whether the points $B(-4,-8)$ and $C(2,2)$ lie on $(P)$.

b) Find the points of $(P)$ whose $y$-coordinate is $-18$.

**Solution.**

a) Since $A(2,-2)$ lies on $(P)$, we have $-2=a\cdot2^2$, so $a=-\dfrac12$. Hence $(P)\colon y=-\dfrac12x^2$. For $x=-4$ we get $y=-\dfrac12\cdot16=-8$, so $B(-4,-8)$ lies on $(P)$. For $x=2$ we get $y=-2\neq2$, so $C(2,2)$ does not lie on $(P)$.

b) From $-\dfrac12x^2=-18$ we get $x^2=36$, so $x=6$ or $x=-6$. The two points are $(6,-18)$ and $(-6,-18)$.

**Answer.** a) $a=-\dfrac12$; $B$ lies on $(P)$, $C$ does not; b) $(6,-18)$ and $(-6,-18)$.
:::

:::example The satellite dish
Suppose the cross-section of a satellite dish is the parabola $y=\dfrac{x^2}8$ (units: dm). a) Find the depth of the dish if the diameter of its opening is $8$ dm. b) If the dish is $4.5$ dm deep, what is the diameter of its opening?

**Solution.**

a) The diameter of the opening is $8$ dm, so the edge of the dish has $x=4$ (and $x=-4$). For $x=4$ we get $y=\dfrac{16}{8}=2$. So the dish is $2$ dm deep.

b) For $y=4.5$ we have $\dfrac{x^2}8=4.5$, so $x^2=36$ and $x=\pm6$. The diameter of the opening is $6-(-6)=12$ (dm).

So the dish is $2$ dm deep when the diameter is $8$ dm, and the diameter is $12$ dm when the dish is $4.5$ dm deep.
:::

## Lines and their intersections with a parabola

The line $(d)\colon y=kx+b$ meets the $y$-axis at $(0,b)$ and has **gradient** $k$. To draw $(d)$ we only need two points, usually where it meets the two axes. When $(d)$ passes through two given points $A(x_A,y_A)$ and $B(x_B,y_B)$, we form a system of equations in $k$ and $b$.

:::theorem Intersections of a parabola and a line
Let $(P)\colon y=ax^2$ be a parabola and $(d)\colon y=kx+b$ a line. The $x$-coordinates of the intersection points of $(P)$ and $(d)$ are the roots of the **equation for the $x$-coordinates of the intersection points**
$$ax^2=kx+b\iff ax^2-kx-b=0.$$
- If $\Delta>0$ (or $\Delta'>0$): $(d)$ meets $(P)$ at two distinct points.
- If $\Delta=0$: $(d)$ is tangent to $(P)$ (they have one point in common).
- If $\Delta<0$: $(d)$ and $(P)$ have no point in common.

Once we have an $x$-coordinate $x_0$, we find the $y$-coordinate by substituting $x_0$ into $y=kx+b$ or into $y=ax^2$.
:::

**Why is this so?** A point $(x_0,y_0)$ lies on both $(P)$ and $(d)$ exactly when $y_0=ax_0^2$ and $y_0=kx_0+b$. Substituting $y_0$ from the second equation into the first gives $ax_0^2=kx_0+b$. So each root of the equation for the $x$-coordinates gives exactly one intersection point, and the number of intersection points equals the number of roots.

:::example Finding intersection points
Given the parabola $(P)\colon y=x^2$ and the line $(d)\colon y=2x+3$. Find the coordinates of the intersection points of $(P)$ and $(d)$.

**Solution.** The equation for the $x$-coordinates is $x^2=2x+3$, that is $x^2-2x-3=0$. We have $a-b+c=1+2-3=0$, so $x_1=-1$ and $x_2=-\dfrac ca=3$. Substituting into $y=x^2$: for $x=-1$ we get $y=1$, and for $x=3$ we get $y=9$.

So $(P)$ and $(d)$ meet at two points, $(-1,1)$ and $(3,9)$.
:::

:::graph The parabola $y=x^2$ and the line $y=2x+3$
alt: The parabola y equals x squared and the line y equals 2x plus 3 meet at two points, (-1, 1) and (3, 9)
x: -3..4
y: -1..10
plot: x^2
plot: 2x + 3
point: (-1, 1) "(-1, 1)" above-left
point: (3, 9) "(3, 9)" above-left
point: (0, 0) "O" below-right
:::

:::example Three possible positions
Let $(P)\colon y=x^2$ be a parabola. Decide how $(P)$ meets each of the lines

a) $(d_1)\colon y=2x-1$;

b) $(d_2)\colon y=2x-3$.

**Solution.**

a) The equation for the $x$-coordinates is $x^2=2x-1$, that is $x^2-2x+1=0$, or $(x-1)^2=0$. It has the repeated root $x=1$, so $(d_1)$ is tangent to $(P)$ at the point $(1,1)$.

b) The equation for the $x$-coordinates is $x^2=2x-3$, that is $x^2-2x+3=0$. We have $\Delta'=1-3=-2<0$, so $(d_2)$ and $(P)$ have no point in common.

**Answer.** a) Tangent at $(1,1)$; b) they do not meet.
:::

:::example An exam-style question
**Question 3.** ($2.5$ marks) Given the parabola $(P)\colon y=\dfrac12x^2$ and the line $(d)\colon y=x+4$. a) Find the coordinates of the intersection points $A$ and $B$ of $(P)$ and $(d)$. b) Find the area of triangle $OAB$.

**Solution.**

*Understand.* We must solve the equation for the $x$-coordinates to get the two points $A$ and $B$, then find the area of triangle $OAB$, where $O$ is the origin.

*Plan.* Once we have $A$ and $B$, we find the point $C$ where $(d)$ meets the $y$-axis. $OC$ is a common base that splits triangle $OAB$ into two triangles whose heights are the $x$-coordinates of $A$ and $B$.

*Solve.*

a) The equation for the $x$-coordinates: $\dfrac12x^2=x+4$, so $x^2-2x-8=0$. We have $\Delta'=1+8=9>0$, so $x=1+3=4$ or $x=1-3=-2$. For $x=4$ we get $y=4+4=8$; for $x=-2$ we get $y=-2+4=2$. So $A(4,8)$ and $B(-2,2)$.

b) The line $(d)$ meets the $y$-axis at $C(0,4)$, so $OC=4$. The point $C$ lies between $A$ and $B$ in terms of $x$-coordinates, and $O$, $C$ both lie on the $y$-axis. So
$$S_{OAB}=S_{OCA}+S_{OCB}=\tfrac12\cdot OC\cdot4+\tfrac12\cdot OC\cdot2=\tfrac12\cdot4\cdot(4+2)=12.$$

So $A(4,8)$, $B(-2,2)$ and the area of triangle $OAB$ is $12$ (square units).

*Look back.* Using the coordinate formula: $S=\dfrac12|x_Ay_B-x_By_A|=\dfrac12|4\cdot2-(-2)\cdot8|=\dfrac12\cdot24=12$, which agrees with the result above.
:::

:::graph The parabola $y=\dfrac12x^2$ and the line $y=x+4$
alt: The parabola y equals one half x squared and the line y equals x plus 4 meet at A (4, 8) and B (-2, 2); the line meets the y-axis at C (0, 4)
x: -4..6
y: -1..10
plot: x^2/2
plot: x + 4
point: (4, 8) "A" above-left
point: (-2, 2) "B" above-left
point: (0, 4) "C" above-left
point: (0, 0) "O" below-right
:::

:::warning Common mistakes
- **Forgetting $a\neq0$ or getting the direction wrong.** Wrong: saying $y=-x^2$ opens upwards. Why it is wrong: when $a<0$, $y\leq0$ for every $x$. Right: if $a<0$ the parabola opens downwards.
- **Forming the equation for the $x$-coordinates wrongly.** Wrong: for $y=x^2$ and $y=2x+3$, writing $x^2-2x+3=0$. Why it is wrong: moving $2x+3$ to the left side changes the sign of both terms. Right: $x^2-2x-3=0$.
- **Finding only the $x$-coordinate and not the $y$-coordinate.** Wrong: concluding that the intersections are $x=-1$ and $x=3$. Why it is wrong: an intersection point has two coordinates. Right: substitute into the function to get $(-1,1)$ and $(3,9)$.
- **Confusing "tangent" with "no intersection".** Wrong: $\Delta=0$ means $(d)$ and $(P)$ have no point in common. Why it is wrong: a repeated root gives exactly one common point. Right: $\Delta=0$ means $(d)$ is tangent to $(P)$; only $\Delta<0$ means no common point.
- **Getting the sign of $y$ wrong.** Wrong: for $y=-\dfrac12x^2$ and $x=-4$, writing $y=\dfrac12\cdot(-4)^2=8$. Why it is wrong: the sign of the coefficient $a$ was dropped. Right: $y=-\dfrac12\cdot16=-8$.
:::

**Connections.** This lesson uses quadratic equations and Viète's theorem to find the $x$-coordinates of intersection points, systems of equations to find a line, and the formula for the area of a triangle. The graph gives a picture of those very equations: the number of roots of the equation is the number of intersection points.

## Key terms

:::terms
- parabola | parabol
- vertex | đỉnh
- axis of symmetry | trục đối xứng
- graph | đồ thị
- gradient | hệ số góc
- point of intersection | giao điểm
- equation for the x-coordinates of the intersection points | phương trình hoành độ giao điểm
- tangent to (touching at one point) | tiếp xúc
- x-coordinate, y-coordinate | hoành độ, tung độ
- maximum value, minimum value | giá trị lớn nhất, giá trị nhỏ nhất
:::

## Summary

- The graph of $y=ax^2$ ($a\neq0$) is a parabola with vertex $O$ and axis of symmetry $Oy$; $a>0$ opens upwards (minimum value $0$), $a<0$ opens downwards (maximum value $0$).
- The line $y=kx+b$ meets the $y$-axis at $(0,b)$; find a line through two points with a system of equations in $k$ and $b$.
- Intersections of $(P)\colon y=ax^2$ and $(d)\colon y=kx+b$: solve $ax^2=kx+b$. $\Delta>0$ two points, $\Delta=0$ tangent, $\Delta<0$ no intersection.
- After finding the $x$-coordinates, substitute into the function to find the $y$-coordinates and write the points.
- The area of triangle $OAB$ can be found by splitting along the $y$-axis or with the coordinate formula.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Given the parabola $(P)\colon y=-\dfrac12x^2$. Which of the points $A(2,-2)$, $B(-4,-8)$, $C(2,2)$, $D(6,-18)$ lie on $(P)$?

::hint
**What you need:** a point lies on a graph when its coordinates satisfy the equation.

**Steps:**
1. Substitute the $x$-coordinate into the function to find $y$.
2. Compare with the given $y$-coordinate.

::solution
For $x=2$: $y=-\dfrac12\cdot4=-2$, so $A(2,-2)$ lies on $(P)$ and $C(2,2)$ does not. For $x=-4$: $y=-\dfrac12\cdot16=-8$, so $B$ lies on $(P)$. For $x=6$: $y=-\dfrac12\cdot36=-18$, so $D$ lies on $(P)$.

**Answer.** $A$, $B$, $D$ lie on $(P)$; $C$ does not.
:::

:::exercise
The parabola $(P)\colon y=ax^2$ passes through the point $M(-3,6)$. Find $a$ and the points of $(P)$ whose $y$-coordinate is $24$.

::hint
**What you need:** substitute the coordinates of the point into the equation to find $a$.

**Steps:**
1. Substitute $x=-3$, $y=6$ into $y=ax^2$.
2. Solve $ax^2=24$.

::solution
We have $6=a\cdot9$, so $a=\dfrac23$. For $y=24$: $\dfrac23x^2=24$, so $x^2=36$ and $x=\pm6$. The two points are $(6,24)$ and $(-6,24)$.

**Answer.** $a=\dfrac23$; $(6,24)$ and $(-6,24)$.
:::

:::exercise
The line $(d)\colon y=kx+b$ passes through the points $A(1,3)$ and $B(3,7)$. Find $k$, $b$ and the coordinates of the points where $(d)$ meets the two axes.

::hint
**What you need:** substitute the coordinates of the two points into the equation of the line to get a system.

**Steps:**
1. Form a system of equations in $k$ and $b$.
2. Meeting $Ox$: $y=0$; meeting $Oy$: $x=0$.

::solution
We have $\begin{cases}k+b=3\\3k+b=7.\end{cases}$ Subtracting the equations gives $2k=4$, so $k=2$ and $b=1$. So $(d)\colon y=2x+1$. It meets $Oy$ at $(0,1)$. It meets $Ox$ where $2x+1=0$, so $x=-\dfrac12$, that is at $\left(-\dfrac12,0\right)$.

**Answer.** $y=2x+1$; $(0,1)$ and $\left(-\dfrac12,0\right)$.
:::

:::exercise
Find the coordinates of the intersection points of the parabola $(P)\colon y=x^2$ and the line $(d)\colon y=x+2$.

::hint
**What you need:** the equation for the $x$-coordinates of the intersection points.

**Steps:**
1. Solve $x^2=x+2$.
2. Find the $y$-coordinates from $y=x+2$.

::solution
We have $x^2-x-2=0$. Since $a-b+c=1+1-2=0$, we have $x_1=-1$ and $x_2=2$. For $x=-1$, $y=1$; for $x=2$, $y=4$.

**Answer.** $(-1,1)$ and $(2,4)$.
:::

:::exercise
**Question 3.** ($2.0$ marks) Given the parabola $(P)\colon y=\dfrac14x^2$ and the line $(d)\colon y=\dfrac12x+2$. a) Find the coordinates of the intersection points $A$ and $B$ of $(P)$ and $(d)$. b) Find the length of the segment $AB$.

::hint
**What you need:** the equation for the $x$-coordinates; $AB=\sqrt{(x_A-x_B)^2+(y_A-y_B)^2}$.

**Steps:**
1. Solve $\dfrac14x^2=\dfrac12x+2$ (multiply both sides by $4$).
2. Find the $y$-coordinates of $A$ and $B$, then find $AB$.

::solution
a) We have $\dfrac14x^2=\dfrac12x+2$, so $x^2-2x-8=0$. We have $\Delta'=1+8=9$, so $x=4$ or $x=-2$. For $x=4$: $y=\dfrac12\cdot4+2=4$; for $x=-2$: $y=\dfrac12\cdot(-2)+2=1$. So $A(4,4)$ and $B(-2,1)$.

b) $AB=\sqrt{(4+2)^2+(4-1)^2}=\sqrt{36+9}=\sqrt{45}=3\sqrt5$.

**Answer.** a) $A(4,4)$, $B(-2,1)$; b) $AB=3\sqrt5$.
:::

:::exercise
Given the parabola $(P)\colon y=x^2$. How many points does each of the following lines have in common with $(P)$?

a) $(d_1)\colon y=4x-4$;

b) $(d_2)\colon y=2x-2$;

c) $(d_3)\colon y=3x$.

::hint
**What you need:** the number of roots of the equation for the $x$-coordinates.

**Steps:**
1. Form the equation for the $x$-coordinates for each line.
2. Decide the sign of $\Delta$ (or $\Delta'$).

::solution
a) $x^2=4x-4\iff x^2-4x+4=0\iff(x-2)^2=0$: a repeated root $x=2$, one common point $(2,4)$ (tangent).

b) $x^2=2x-2\iff x^2-2x+2=0$, with $\Delta'=1-2=-1<0$: no common point.

c) $x^2=3x\iff x(x-3)=0$: $x=0$ or $x=3$, two common points $(0,0)$ and $(3,9)$.

**Answer.** a) $1$ point; b) $0$ points; c) $2$ points.
:::

:::exercise
Suppose the cross-section of a dish is the parabola $y=\dfrac{x^2}4$ (units: dm). a) If the diameter of the opening is $10$ dm, how deep is the dish? b) At a depth of $4$ dm, what is the diameter of the dish?

::hint
**What you need:** the edge of the dish has an $x$-coordinate equal to half the diameter.

**Steps:**
1. In part a), substitute $x=5$.
2. In part b), solve $\dfrac{x^2}4=4$.

::solution
a) The edge has $x=5$, so $y=\dfrac{25}{4}=6.25$. The dish is $6.25$ dm deep.

b) For $y=4$: $\dfrac{x^2}4=4$, so $x^2=16$ and $x=\pm4$. The diameter at a depth of $4$ dm is $8$ dm.

**Answer.** a) $6.25$ dm; b) $8$ dm.
:::

:::exercise
Given the function $y=-2x^2$. a) Find the value of the function at $x=-3$. b) Find $x$ such that $y=-8$. c) Does the function have a maximum or a minimum value? What is it?

::hint
**What you need:** for $a<0$ we have $y\leq0$ and $y=0$ only when $x=0$.

**Steps:**
1. Substitute $x=-3$ to find $y$.
2. Solve $-2x^2=-8$.

::solution
a) At $x=-3$: $y=-2\cdot9=-18$.

b) $-2x^2=-8$ gives $x^2=4$, so $x=2$ or $x=-2$.

c) Since $a=-2<0$, we have $y=-2x^2\leq0$ for every $x$, and $y=0$ when $x=0$. The function has a maximum value of $0$ (at $x=0$) and no minimum value.

**Answer.** a) $-18$; b) $x=\pm2$; c) the maximum value is $0$.
:::

:::exercise Challenge
The parabola $(P)\colon y=x^2$ and the line $(d)\colon y=x+2$ meet at two points $A$ and $B$. Find the area of triangle $OAB$.

::hint
**What you need:** find $A$, $B$ and the point $C$ where $(d)$ meets the $y$-axis.

**Steps:**
1. Find the coordinates of $A$ and $B$ from the equation for the $x$-coordinates.
2. Split triangle $OAB$ into two triangles with the common base $OC$.

::solution
The equation for the $x$-coordinates, $x^2-x-2=0$, has roots $x=2$ and $x=-1$, so $A(2,4)$ and $B(-1,1)$. The line $(d)$ meets $Oy$ at $C(0,2)$, so $OC=2$. The area is $S_{OAB}=\dfrac12\cdot OC\cdot(|x_A|+|x_B|)=\dfrac12\cdot2\cdot(2+1)=3$. Check with the coordinate formula: $\dfrac12|2\cdot1-(-1)\cdot4|=\dfrac12\cdot6=3$.

**Answer.** $3$ (square units).
:::

## Mini test

:::quiz
::mc
Which of the following points lies on the graph of $y=-3x^2$?
A. $(1,3)$.
B. $(2,6)$.
C. $(-1,-3)$.
D. $(-2,12)$.
::key C
$y(-1)=-3\cdot1=-3$. Option A drops the sign of $a$, B uses $3\cdot2$, and D drops the sign of $a$ and uses $3\cdot4$.

::mc
The parabola $y=ax^2$ passes through the point $(-3,-18)$. The value of $a$ is
A. $2$.
B. $-6$.
C. $6$.
D. $-2$.
::key D
$-18=a\cdot9$, so $a=-2$. Option A drops the sign, and B and C divide $-18$ by $\pm3$ instead of by $x^2=9$.

::mc
The number of intersection points of the parabola $y=x^2$ and the line $y=2x-1$ is
A. $1$.
B. $2$.
C. $0$.
D. $3$.
::key A
$x^2-2x+1=0\iff(x-1)^2=0$ has the repeated root $x=1$, so the line is tangent and there is only one common point. Option C confuses this with $\Delta<0$, B with $\Delta>0$, and D is impossible (a quadratic equation has at most two roots).

::mc
The $x$-coordinates of the intersection points of the parabola $y=x^2$ and the line $y=x+6$ are
A. $x=-3$ and $x=2$.
B. $x=3$ and $x=-2$.
C. $x=3$ and $x=6$.
D. $x=-3$ and $x=-2$.
::key B
$x^2-x-6=0\iff(x-3)(x+2)=0$. Option A changes the sign of both roots, and C and D use wrong roots.

::tf
Given the parabola $(P)\colon y=-x^2$ and the line $(d)\colon y=-2x-3$. Decide whether each statement is true or false.
a) The parabola $(P)$ lies below the $x$-axis, except for the point $O$.
b) The point $(-1,-1)$ lies on $(P)$.
c) $(P)$ and $(d)$ meet at two distinct points.
d) One intersection point of $(P)$ and $(d)$ is $(3,9)$.
::key T T T F
a) True: $a=-1<0$, so $y\leq0$. b) True: $y(-1)=-1$. c) True: $-x^2=-2x-3\iff x^2-2x-3=0$ has roots $x=3$ and $x=-1$. d) False: the intersection points are $(3,-9)$ and $(-1,-1)$.

::sa
The parabola $y=x^2$ and the line $y=x+2$ meet at two points. Find the sum of the two $x$-coordinates of the intersection points.
::key 1
$x^2-x-2=0$, so by Viète's formulas $x_1+x_2=1$ (the roots are $-1$ and $2$).

::sa
The cross-section of a dish is the parabola $y=\dfrac{x^2}8$ (units: dm). The diameter of the opening is $12$ dm. Find the depth of the dish (in dm).
::key 4.5
The edge has $x=6$, so $y=\dfrac{36}8=4.5$.
:::
