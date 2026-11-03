---
title: The equation of a line in space
description: Direction vectors, parametric and Cartesian equations of a line, two lines, a line and a plane, and the orthogonal projection of a point.
minutes: 26
---

:::goals
- Write parametric and Cartesian equations of a line from a point and a direction vector, or from two points.
- Decide whether two lines are parallel, coincident, intersecting or skew.
- Decide how a line meets a plane; find the point of intersection.
- Find the orthogonal projection of a point on a plane and on a line.
:::

A drone takes off from the point $M_0(1, 2, 0)$ in a school yard (unit: metre). It flies in a straight line, moving by the vector $\vec{u}=(2, 1, 2)$ every second. High above, a checkpoint ring is placed at $N(9, 6, 8)$. Does the drone fly through the ring, and if so, after how many seconds?

As in the plane, a line in space is fixed by **one point** and **one direction**. The only difference is that there are now three coordinates.

## Parametric equations of a line

### Exploring: the drone's positions

After $t$ seconds the drone is at the point $M$ with $\overrightarrow{M_0M}=t\vec{u}$. We record a few positions:

| $t$ (seconds) | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| position | $(1, 2, 0)$ | $(3, 3, 2)$ | $(5, 4, 4)$ | $(7, 5, 6)$ |

The position after $t$ seconds is $(1+2t, 2+t, 2t)$. To reach $N(9, 6, 8)$ we need $1+2t=9$, $2+t=6$, $2t=8$. All three give $t=4$, so the drone passes through the ring after $4$ seconds. The distance flown is $4|\vec{u}|=4\cdot3=12$ m.

:::diagram The line through $M_0$ with direction vector $\vec{u}$
alt: A line d through the point M0, the arrow of the vector u drawn along the line, and another point M on d
point P -1,-0.5 ""
point Q 7,3.5 ""
point M0 0,0 below-right "M_0"
point U 2,1 below-right ""
point M 5,2.5 below-right
segment P Q
arrow M0 U "u"
label 6.6,3.6 "d"
:::

:::definition Direction vector, parametric equations
- A vector $\vec{u}\neq\vec{0}$ is a **direction vector** of the line $\Delta$ if its line is parallel to $\Delta$ or coincides with it. Every vector $k\vec{u}$ ($k\neq0$) is also a direction vector.
- The line $\Delta$ through $M_0(x_0, y_0, z_0)$ with direction vector $\vec{u}=(a, b, c)$ has **parametric equations**
$$\begin{cases}x=x_0+at\\ y=y_0+bt\\ z=z_0+ct\end{cases}\quad(t\in\mathbb{R}).$$
- If $a$, $b$, $c$ are all non-zero, eliminating $t$ gives the **Cartesian (symmetric) equations**
$$\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}.$$
:::

**Why is it true?** A point $M(x, y, z)$ lies on $\Delta$ exactly when $\overrightarrow{M_0M}$ is parallel to $\vec{u}$, that is, when there is a number $t$ with $\overrightarrow{M_0M}=t\vec{u}$. Coordinate by coordinate: $x-x_0=at$, $y-y_0=bt$, $z-z_0=ct$. When $abc\neq0$, all three fractions equal $t$.

:::example A point and a direction vector
The line $\Delta$ passes through $M(1, -2, 3)$ and has direction vector $\vec{u}=(2, 0, -1)$. Write parametric equations of $\Delta$, find the point for $t=2$, and decide whether $A(-3, -2, 5)$ lies on $\Delta$.

**Solution.** Substitute the point and the direction vector into the formula:

$$\Delta: \begin{cases}x=1+2t\\ y=-2\\ z=3-t.\end{cases}$$

For $t=2$ we get the point $(5, -2, 1)$. For $A$, the equation $1+2t=-3$ gives $t=-2$; then $z=3+2=5$ and $y=-2$ both match.

So $A$ lies on $\Delta$ (for $t=-2$). This line has no Cartesian equations, because the second coordinate of $\vec{u}$ is $0$.
:::

Given two points, we take the vector joining them as a direction vector. When a line is perpendicular to a plane, the normal vector of the plane is a direction vector of the line.

:::example Through two points; perpendicular to a plane
a) Write parametric and Cartesian equations of the line $AB$ with $A(1, 2, -1)$, $B(3, -1, 1)$.

b) Write parametric equations of the line $d$ through $M(2, 0, -1)$ perpendicular to $(P): x-2y+2z+3=0$.

**Solution.** a) Take $\vec{u}=\overrightarrow{AB}=(2, -3, 2)$ and the point $A$:

$$AB: \begin{cases}x=1+2t\\ y=2-3t\\ z=-1+2t\end{cases}\qquad\text{and}\qquad \frac{x-1}{2}=\frac{y-2}{-3}=\frac{z+1}{2}.$$

b) Since $d\perp(P)$, the line $d$ has direction vector $\vec{n}_P=(1, -2, 2)$:

$$d: \begin{cases}x=2+t\\ y=-2t\\ z=-1+2t.\end{cases}$$

So the equations are as above.
:::

## Two lines in space

In space, two lines have four possibilities. Unlike in the plane, two lines can fail to meet without being parallel: such lines are called **skew**.

:::theorem Deciding the position of two lines
Let $d_1$ pass through $M_1$ with direction vector $\vec{u}_1$, and $d_2$ through $M_2$ with direction vector $\vec{u}_2$.
- If $\vec{u}_1$, $\vec{u}_2$ are parallel: $d_1$ and $d_2$ coincide when $M_1\in d_2$; $d_1\parallel d_2$ when $M_1\notin d_2$.
- If $\vec{u}_1$, $\vec{u}_2$ are not parallel: solve the three coordinate equations in the two parameters $t$, $s$. If the system has a solution, $d_1$ and $d_2$ intersect; if it has none, they are skew.
:::

:::example Intersecting or skew
Let $d_1: \begin{cases}x=1+t\\ y=2t\\ z=2-t\end{cases}$, $d_2: \begin{cases}x=1+s\\ y=3-s\\ z=-1+2s\end{cases}$ and $d_3: \begin{cases}x=1+s\\ y=3-s\\ z=2s.\end{cases}$ Decide the position of $d_1$ and $d_2$, and of $d_1$ and $d_3$.

**Solution.** The direction vectors $\vec{u}_1=(1, 2, -1)$ and $(1, -1, 2)$ are not parallel (the first coordinates are equal but the second are not). We use two different parameters $t$, $s$ and solve. For $d_1$, $d_2$:

$$\begin{cases}1+t=1+s\\ 2t=3-s\\ 2-t=-1+2s\end{cases}\iff\begin{cases}t=s\\ 3t=3\\ 3=3s\end{cases}\iff t=s=1.$$

The system has a solution, so $d_1$ meets $d_2$ at the point for $t=1$, that is $(2, 2, 1)$.

For $d_1$, $d_3$: the first two equations still give $t=s=1$, but the third needs $2-1=2\cdot1$, that is $1=2$, which is impossible.

So $d_1$ meets $d_2$ at $(2, 2, 1)$, while $d_1$ and $d_3$ are skew.
:::

## A line and a plane

To decide how a line $d$ meets a plane $(P)$, we substitute the parametric equations of $d$ into the equation of $(P)$ and get a linear equation in $t$.

:::theorem A line and a plane
Substitute $x$, $y$, $z$ of $d$ into the equation of $(P)$:
- exactly one solution $t$: $d$ meets $(P)$ at one point;
- no solution: $d\parallel(P)$;
- true for every $t$: $d$ lies in $(P)$.

In particular, $d$ is parallel to $(P)$ or lies in it if and only if $\vec{u}\cdot\vec{n}=0$; and $d\perp(P)$ if and only if $\vec{u}$ is parallel to $\vec{n}$.
:::

:::example One line and three planes
Let $d: \begin{cases}x=1+2t\\ y=-1+t\\ z=2-t.\end{cases}$ Decide the position of $d$ relative to $(P): x+y+z-6=0$, $(Q): x-y+z-4=0$ and $(R): x-y+z+1=0$.

**Solution.** Substitute $d$ into each equation and simplify:

$$\begin{aligned} (P)&: (1+2t)+(-1+t)+(2-t)-6=2t-4=0\iff t=2;\\ (Q)&: (1+2t)-(-1+t)+(2-t)-4=0\ \text{for every}\ t;\\ (R)&: (1+2t)-(-1+t)+(2-t)+1=5=0\ \text{(impossible)}. \end{aligned}$$

So $d$ meets $(P)$ at the point for $t=2$, that is $(5, 1, 0)$; $d$ lies in $(Q)$; and $d\parallel(R)$.
:::

## Orthogonal projection of a point

The projection $H$ of a point $M$ on a plane $(P)$ is where $(P)$ meets the line through $M$ perpendicular to $(P)$. The projection $H$ of $M$ on a line $d$ is the point $H\in d$ with $\overrightarrow{MH}\perp\vec{u}$.

:::diagram The projection $H$ of $M$ on the plane $(P)$
alt: A plane drawn as a parallelogram, the point M above it, and the segment MH perpendicular to the plane at H
point P1 0,0 ""
point P2 5,0 ""
point P3 6.5,2 ""
point P4 1.5,2 ""
point H 3.2,1 below
point M 3.2,4 right
point E 4.6,1 ""
polygon P1 P2 P3 P4
segment M H
right M H E
label 0.6,0.4 "(P)"
:::

:::example The point of the hillside nearest the drone
A hillside is the plane $(P): x+2y+2z-5=0$ (unit: metre), and a drone is at $M(4, 5, 9)$. Find the point $H$ of the hillside nearest the drone and the distance $MH$.

**Solution.** The nearest point is the projection of $M$ on $(P)$. The line through $M$ perpendicular to $(P)$ has direction vector $\vec{n}=(1, 2, 2)$: $x=4+t$, $y=5+2t$, $z=9+2t$. Substitute into $(P)$:

$$(4+t)+2(5+2t)+2(9+2t)-5=27+9t=0\iff t=-3.$$

Then $H(1, -1, 3)$ and $\overrightarrow{HM}=(3, 6, 6)$, so $MH=\sqrt{9+36+36}=9$.

So the point nearest the drone is $H(1, -1, 3)$, $9$ m away.

**Check.** The distance formula: $\dfrac{|4+10+18-5|}{3}=9$.
:::

The last example has more steps, so we follow the four stages.

:::example The shortest rope to a pipe
A straight water pipe lies along the line $d: x=1+t$, $y=-1+2t$, $z=2t$ (unit: metre). A rope as short as possible must run from a hook at $M(0, 0, 4)$ to the pipe. Find the point $H$ of the pipe where the rope is tied and the length of the rope.

**Solution.**

*Understand.* The shortest rope is the perpendicular from $M$ to $d$, so $H$ is the projection of $M$ on $d$.

*Plan.* Write $H$ in terms of $t$, then use the condition $\overrightarrow{MH}\cdot\vec{u}=0$ with $\vec{u}=(1, 2, 2)$.

*Solve.* $H(1+t, -1+2t, 2t)$, so $\overrightarrow{MH}=(1+t, -1+2t, 2t-4)$. Then:

$$\overrightarrow{MH}\cdot\vec{u}=(1+t)+2(-1+2t)+2(2t-4)=9t-9=0\iff t=1.$$

So $H(2, 1, 2)$, $\overrightarrow{MH}=(2, 1, -2)$ and $MH=\sqrt{4+1+4}=3$. The rope is $3$ m long.

*Look back.* A single perpendicularity condition is enough to find $t$. The length $MH$ is the distance from $M$ to the line $d$.
:::

:::warning Common mistakes
- **Using one parameter for both lines.** Wrong: solving for $d_1$, $d_2$ with the system $1+t=1+t$, $2t=3-t$, ... Why it is wrong: each line has its own parameter; a common point may correspond to different values of $t$ and $s$. Right: use $t$ for $d_1$ and $s$ for $d_2$.
- **Concluding "parallel" just because the lines do not meet.** Wrong: $d_1$ and $d_3$ have no common point, so they are parallel. Why it is wrong: in space they can also be skew. Right: parallel lines also need $\vec{u}_1$, $\vec{u}_2$ to be parallel.
- **Writing Cartesian equations when a coordinate is $0$.** Wrong: $\Delta$ from Example 1 written as $\dfrac{x-1}{2}=\dfrac{y+2}{0}=\dfrac{z-3}{-1}$. Why it is wrong: we cannot divide by $0$. Right: use the parametric equations.
- **Using the normal vector as the direction of a line parallel to a plane.** Wrong: a line parallel to $(P)$ has direction vector $\vec{n}_P$. Why it is wrong: $\vec{n}_P$ is perpendicular to $(P)$. Right: $\vec{n}_P$ is a direction vector of a line **perpendicular** to $(P)$.
:::

## Key terms

:::terms
- line | đường thẳng
- direction vector | vectơ chỉ phương
- parametric equations | phương trình tham số
- parameter | tham số
- Cartesian (symmetric) equations | phương trình chính tắc
- intersecting lines | hai đường thẳng cắt nhau
- skew lines | hai đường thẳng chéo nhau
- point of intersection | giao điểm
- orthogonal projection | hình chiếu vuông góc
:::

## Summary

- The line through $M_0(x_0, y_0, z_0)$ with direction vector $\vec{u}=(a, b, c)$: $x=x_0+at$, $y=y_0+bt$, $z=z_0+ct$.
- When $abc\neq0$: $\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}$.
- Through two points $A$, $B$: $\vec{u}=\overrightarrow{AB}$. Perpendicular to $(P)$: $\vec{u}=\vec{n}_P$.
- Two lines: if $\vec{u}_1$, $\vec{u}_2$ are parallel, the lines are parallel or coincide; if not, solve for $t$, $s$: a solution means they intersect, no solution means they are skew.
- A line and a plane: substituting gives an equation in $t$; one solution means they meet, no solution means parallel, every $t$ means the line lies in the plane.
- Projection on $(P)$: where $(P)$ meets the line through $M$ with direction $\vec{n}$. Projection on $d$: $H\in d$ with $\overrightarrow{MH}\cdot\vec{u}=0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Write parametric equations of the line through $A(2, -1, 3)$ with direction vector $\vec{u}=(1, 4, -2)$. Find the point for $t=-1$ and check whether $B(4, 7, -1)$ lies on the line.

::hint
**What you need:** $x=x_0+at$, $y=y_0+bt$, $z=z_0+ct$.

**Steps:**
1. Write the parametric equations.
2. Substitute $t=-1$.
3. Find $t$ from the x-coordinate of $B$, then check the other two coordinates.

::solution
$x=2+t$, $y=-1+4t$, $z=3-2t$. For $t=-1$: $(1, -5, 5)$. For $B$: $2+t=4$ gives $t=2$; then $y=7$ and $z=-1$, which match.

**Answer.** $(1, -5, 5)$; $B$ lies on the line (for $t=2$).
:::

:::exercise
Write parametric and Cartesian equations of the line through $A(1, 0, -2)$ and $B(3, 2, -1)$.

::hint
**What you need:** $\vec{u}=\overrightarrow{AB}$.

**Steps:**
1. Find $\overrightarrow{AB}$.
2. Write both forms using the point $A$.

::solution
$\overrightarrow{AB}=(2, 2, 1)$.
$$\begin{cases}x=1+2t\\ y=2t\\ z=-2+t\end{cases}\qquad\frac{x-1}{2}=\frac{y}{2}=\frac{z+2}{1}.$$

**Answer.** As above.
:::

:::exercise
Write the equation of the line $d$ through $M(1, -1, 2)$ perpendicular to $(P): 2x-y+3z+5=0$. Find the point where $d$ meets $(P)$.

::hint
**What you need:** if $d\perp(P)$ then $\vec{u}_d=\vec{n}_P$; for the intersection, substitute the parametric equations into $(P)$.

**Steps:**
1. Write $d$ with $\vec{u}=(2, -1, 3)$.
2. Substitute into $(P)$ and solve for $t$.

::solution
$d: x=1+2t$, $y=-1-t$, $z=2+3t$. Substituting into $(P)$:
$$2(1+2t)-(-1-t)+3(2+3t)+5=14+14t=0\iff t=-1.$$
The point of intersection is $(-1, 0, -1)$.

**Answer.** $(-1, 0, -1)$.
:::

:::exercise
Write parametric and Cartesian equations of the line through $M(0, 1, -1)$ parallel to $\Delta: \dfrac{x-1}{2}=\dfrac{y+3}{-1}=\dfrac{z}{3}$.

::hint
**What you need:** parallel lines share a direction vector; read $\vec{u}$ from the denominators.

**Steps:**
1. Read off $\vec{u}=(2, -1, 3)$.
2. Write the equations through $M$.

::solution
$$\begin{cases}x=2t\\ y=1-t\\ z=-1+3t\end{cases}\qquad\frac{x}{2}=\frac{y-1}{-1}=\frac{z+1}{3}.$$
$M$ does not lie on $\Delta$ (because $\dfrac{0-1}{2}\neq\dfrac{1+3}{-1}$), so this line is parallel to $\Delta$, not the same line.

**Answer.** As above.
:::

:::exercise
Let $d_1: \begin{cases}x=1+2t\\ y=-t\\ z=3+t\end{cases}$ and $d_2: \dfrac{x-3}{-4}=\dfrac{y+1}{2}=\dfrac{z-4}{-2}$. Is each claim true or false?

a) $\vec{u}_1=(2, -1, 1)$ is a direction vector of $d_1$.

b) The point $M(3, -1, 4)$ lies on $d_1$.

c) $d_1$ is parallel to $d_2$.

d) $d_1$ is perpendicular to the plane $(P): 2x-y+z=0$.

::hint
**What you need:** if the direction vectors are parallel, the lines are parallel or coincide; check one more point.

**Steps:**
1. Read off $\vec{u}_1$, $\vec{u}_2$.
2. Substitute $M$ into $d_1$ (find $t$).
3. Compare $\vec{u}_1$ with $\vec{n}_P$.

::solution
a) **True.** The coefficients of $t$ are $2$, $-1$, $1$.

b) **True.** $t=1$ gives $(3, -1, 4)$.

c) **False.** $\vec{u}_2=(-4, 2, -2)=-2\vec{u}_1$, and $M(3, -1, 4)$ also lies on $d_2$, so the two lines coincide.

d) **True.** $\vec{n}_P=(2, -1, 1)=\vec{u}_1$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
An aeroplane takes off from the point $O(0, 0, 0)$ and flies in a straight line, moving by the vector $\vec{v}=(80, 60, 10)$ every second (unit: metre). When it reaches a height of $1500$ m, how many kilometres from $O$ is the point on the ground directly below it?

::hint
**What you need:** the position after $t$ seconds is $(80t, 60t, 10t)$.

**Steps:**
1. Solve $10t=1500$.
2. The point on the ground is $(80t, 60t, 0)$; find its distance from $O$.

::solution
$t=150$ seconds. The point on the ground is $(12000, 9000, 0)$, at distance $\sqrt{12000^2+9000^2}=15000$ m from $O$.

**Answer.** $15$.
:::

:::exercise
Let $d: x=2+t$, $y=1-t$, $z=3+2t$. Decide the position of $d$ relative to $(P_1): x+y-1=0$, $(P_2): x+3y+z-8=0$, $(P_3): x-y+z-6=0$.

::hint
**What you need:** substitute the parametric equations into the equation of the plane.

**Steps:**
1. Substitute into each plane and simplify in $t$.
2. Count the solutions.

::solution
$(P_1)$: $(2+t)+(1-t)-1=2=0$, impossible, so $d\parallel(P_1)$.
$(P_2)$: $(2+t)+3(1-t)+(3+2t)-8=0$ for every $t$, so $d$ lies in $(P_2)$.
$(P_3)$: $(2+t)-(1-t)+(3+2t)-6=4t-2=0$, $t=\dfrac12$, and the point of intersection is $\left(\dfrac52, \dfrac12, 4\right)$.

**Answer.** Parallel to $(P_1)$; lies in $(P_2)$; meets $(P_3)$ at $\left(\dfrac52, \dfrac12, 4\right)$.
:::

:::exercise
Decide the position of the lines $d_1: x=1+t$, $y=1-t$, $z=2t$ and $d_2: x=1+2s$, $y=-2+s$, $z=5-s$. If they intersect, find the point of intersection.

::hint
**What you need:** if the direction vectors are not parallel, solve the system in $t$, $s$.

**Steps:**
1. Compare $(1, -1, 2)$ and $(2, 1, -1)$.
2. Solve the first two equations, then test the third.

::solution
The vectors are not parallel. From $1+t=1+2s$ and $1-t=-2+s$: $t=2s$, $1-2s=-2+s$, so $s=1$, $t=2$. The third equation: $2\cdot2=5-1$, which holds.

**Answer.** They intersect at $(3, -1, 4)$.
:::

:::exercise
(Revisiting [Operations on vectors in coordinates](lesson:vector-coordinate-operations).) In the previous lesson we proved that $A(1, 2, -1)$, $B(3, 1, 1)$, $C(7, -1, 5)$ are collinear using parallel vectors. Write parametric equations of the line $AB$ and give the value of $t$ for the point $C$.

::hint
**What you need:** $\vec{u}=\overrightarrow{AB}$; $C$ lies on $AB$ when one value of $t$ works for all three coordinates.

**Steps:**
1. $\overrightarrow{AB}=(2, -1, 2)$.
2. Solve $1+2t=7$ and check.

::solution
$AB: x=1+2t$, $y=2-t$, $z=-1+2t$. From $1+2t=7$ we get $t=3$; then $y=-1$ and $z=5$, which match $C$.

**Answer.** $t=3$, which agrees with $\overrightarrow{AC}=3\overrightarrow{AB}$ from the previous lesson.
:::

:::exercise Challenge
A laser beam starts at $A(1, 2, 3)$, reflects off a flat mirror lying in the plane $(P): x+2y+2z-2=0$, and then reaches $B(3, 2, 2)$. Find the point $M$ of the mirror where it reflects. (Hint: the path $A\to M\to B$ is shortest when $M$ lies on the segment $A'B$, where $A'$ is the reflection of $A$ in $(P)$.)

::hint
**What you need:** the projection $H$ of $A$ on $(P)$; $H$ is the midpoint of $AA'$.

**Steps:**
1. Find $H$, then $A'=2H-A$ (in coordinates).
2. Use the line $A'B$ and find where it meets $(P)$.

::solution
The line through $A$ perpendicular to $(P)$: $x=1+t$, $y=2+2t$, $z=3+2t$. Substituting into $(P)$: $9+9t=0$, $t=-1$, so $H(0, 0, 1)$ and $A'(-1, -2, -1)$.
Substituting $A'$ and $B$ into the left-hand side of $(P)$ gives $-9$ and $9$, so $A'$ and $B$ are on opposite sides at equal distances from $(P)$; therefore $M$ is the midpoint of $A'B$:
$$M\left(1, 0, \tfrac12\right),\qquad 1+0+2\cdot\tfrac12-2=0.$$
The beam travels a distance $A'B=\sqrt{16+16+9}=\sqrt{41}\approx6.40$.

**Answer.** $M\left(1, 0, \dfrac12\right)$.
:::

## Mini test

:::quiz
::mc
In the system $Oxyz$, a direction vector of the line $d: \begin{cases}x=1-2t\\ y=3\\ z=-1+t\end{cases}$ is
A. $(1, 3, -1)$.
B. $(-2, 3, 1)$.
C. $(-2, 0, 1)$.
D. $(2, 0, 1)$.
::key C
The direction vector is made of the coefficients of $t$: $-2$, $0$, $1$. Option A is a point, B takes the $3$ that has no $t$, and D has a wrong sign.

::mc
Which point lies on the line $\dfrac{x-1}{2}=\dfrac{y+2}{-1}=\dfrac{z-3}{3}$?
A. $(-1, 2, -3)$.
B. $(2, -1, 3)$.
C. $(3, -1, 6)$.
D. $(1, -2, 3)$.
::key D
With $(1, -2, 3)$ all three fractions are $0$. Option A changes the signs of the point, B takes the direction vector by mistake, and C fails the second fraction: $\dfrac{-1+2}{-1}=-1\neq1$.

::mc
The line through $A(1, 0, 2)$ perpendicular to $(P): 2x-y+z-3=0$ has equations
A. $x=1+2t$, $y=-t$, $z=2+t$.
B. $x=2+t$, $y=-1$, $z=1+2t$.
C. $x=1+2t$, $y=t$, $z=2+t$.
D. $x=1+2t$, $y=-t$, $z=2-3t$.
::key A
The direction vector is $\vec{n}_P=(2, -1, 1)$. Option B swaps the point and the vector, C has the wrong sign in the second coordinate, and D takes the constant term $-3$ by mistake.

::mc
Let $d_1: x=1+t$, $y=2t$, $z=3-t$ and $d_2: x=s$, $y=1+s$, $z=2s$. The lines $d_1$ and $d_2$ are
A. parallel.
B. intersecting.
C. skew.
D. coincident.
::key C
$(1, 2, -1)$ and $(1, 1, 2)$ are not parallel, which rules out A and D. The first two equations give $s=1+t$ and $2t=1+s=2+t$, so $t=2$, $s=3$; the third needs $3-2=2\cdot3$, which is impossible. So the lines are skew; choosing "parallel" forgets that lines in space can be skew.

::tf
Let $d: x=1+t$, $y=2-t$, $z=-1+2t$ and $(P): x+y+z-4=0$.
a) $\vec{u}=(1, -1, 2)$ is a direction vector of $d$.
b) $d$ is parallel to $(P)$.
c) $d$ meets $(P)$ at the point $(2, 1, 1)$.
d) $d$ is perpendicular to the plane $(Q): x-y+2z+7=0$.
::key T F T T
a) True. b) False: $\vec{u}\cdot\vec{n}_P=1-1+2=2\neq0$. c) True: substituting gives $2t-2=0$, $t=1$, the point $(2, 1, 1)$. d) True: $\vec{n}_Q=(1, -1, 2)=\vec{u}$.

::sa
The line $d: x=2+t$, $y=-1+2t$, $z=3-t$ meets the plane $(P): x+y+z-10=0$ at $M(a, b, c)$. Find $a+b+c$.
::key 10
Substituting: $2t-6=0$, $t=3$, so $M(5, 5, 0)$ and $a+b+c=10$. Another way: $M$ lies in $(P)$, so $a+b+c-10=0$.

::sa
Find the distance from $M(2, 3, 1)$ to the line $d: x=1+2t$, $y=-1+t$, $z=1+2t$ (to 2 decimal places).
::key 3.61
$\overrightarrow{MH}=(2t-1, t-4, 2t)$ for $H\in d$; $\overrightarrow{MH}\cdot(2, 1, 2)=9t-6=0$, $t=\dfrac23$. Then $\overrightarrow{MH}=\left(\dfrac13, -\dfrac{10}{3}, \dfrac43\right)$ and $MH=\sqrt{13}\approx3.61$.
:::
