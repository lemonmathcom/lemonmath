---
title: Coordinate system in space
description: Meet the Oxyz system: coordinates of points and vectors, projections onto axes and coordinate planes, distance, midpoint and centroid.
minutes: 22
---

:::goals
- Describe the coordinate system $Oxyz$, its axes, its coordinate planes and the unit vectors $\vec{i}$, $\vec{j}$, $\vec{k}$.
- Read and write the coordinates of a point and of a vector; find the coordinates of $\overrightarrow{AB}$.
- Find the projection of a point onto the axes and the coordinate planes.
- Find the distance between two points and the coordinates of a midpoint and a centroid.
:::

A classroom is $8$ m long, $6$ m wide and $3$ m high. A lamp hangs $2$ m from the front wall, $3$ m from the left wall and $2.5$ m above the floor. A humidity sensor sits in the opposite floor corner, $8$ m and $6$ m from those two walls. How far is the lamp from the sensor?

In the plane, two numbers are enough to fix the position of a point. In space we need three, and those three numbers let us find distances without drawing anything.

The idea of using numbers to fix positions, and so turning geometry problems into algebra, was set out by René Descartes in *La Géométrie* (1637) for points in the plane (MacTutor History of Mathematics). Extended to three dimensions, the same idea underlies technical drawings, 3D design software and the control of a drone: every position is described by three numbers.

## The coordinate system $Oxyz$

### Exploring: three numbers for one position

Take the floor corner between the front wall and the left wall as the origin $O$. From $O$, the three lines where the floor and the two walls meet give three pairwise perpendicular directions: along the left wall, along the front wall, and straight up. To reach the lamp we go $2$ m in the first direction, $3$ m in the second, then $2.5$ m up. The triple $(2, 3, 2.5)$ fixes exactly one position in the room, and the sensor corresponds to $(8, 6, 0)$.

If $\vec{i}$, $\vec{j}$, $\vec{k}$ are the vectors of length $1$ m in those three directions, then by the parallelepiped rule (previous lesson) the vector from $O$ to the lamp is $2\vec{i}+3\vec{j}+2.5\vec{k}$.

:::definition The coordinate system $Oxyz$
The (Cartesian) coordinate system $Oxyz$ consists of three pairwise perpendicular axes $Ox$, $Oy$, $Oz$ meeting at the origin $O$, with unit vectors $\vec{i}$, $\vec{j}$, $\vec{k}$:
- $Ox$ is the **x-axis**, $Oy$ the **y-axis**, $Oz$ the **z-axis**;
- the planes $(Oxy)$, $(Oyz)$, $(Ozx)$ are the **coordinate planes**;
- $|\vec{i}|=|\vec{j}|=|\vec{k}|=1$ and $\vec{i}\cdot\vec{j}=\vec{j}\cdot\vec{k}=\vec{k}\cdot\vec{i}=0$.
:::

## Coordinates of a point and of a vector

:::definition Coordinates of a point, of a vector
- The point $M$ has coordinates $(x, y, z)$, written $M(x, y, z)$, if $\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}$. The three numbers are the x-, y- and z-coordinates of $M$.
- The vector $\vec{a}$ has coordinates $(x, y, z)$, written $\vec{a}=(x, y, z)$, if $\vec{a}=x\vec{i}+y\vec{j}+z\vec{k}$.
:::

So the coordinates of the point $M$ are exactly the coordinates of the vector $\overrightarrow{OM}$. In particular $\vec{i}=(1, 0, 0)$, $\vec{j}=(0, 1, 0)$, $\vec{k}=(0, 0, 1)$ and $\vec{0}=(0, 0, 0)$.

**A closer look.** Each coordinate answers its own question: how far in the direction of $\vec{i}$, of $\vec{j}$, of $\vec{k}$. Because the three directions are pairwise perpendicular, changing one coordinate does not affect the other two; that is why vector operations become operations on each coordinate. Coordinates depend on the choice of axes: for the same lamp, putting the origin in another corner of the room gives three different numbers, but the distance between two points does not change.

**Connections.** This lesson joins vectors in space (previous lesson) with coordinates in the plane (grade 10). From now on, the equations of planes, lines and spheres in space are all written with the three coordinates $x$, $y$, $z$.

:::diagram The cuboid $OABC.O'A'B'C'$ in the system $Oxyz$
alt: The axes Oxyz with Ox pointing down to the left, Oy to the right and Oz up; a cuboid with vertex O at the origin, A on Ox, C on Oy and O' on Oz; the three edges from O lie on the axes
point O 0,0 above-left
point X -2.7,-2.7 left "x"
point Y 5.6,0 right "y"
point Z 0,3.4 above "z"
point A -1.8,-1.8 left
point B 2.2,-1.8 below-right
point C 4,0 below-right
point O' 0,2 left
point A' -1.8,0.2 left
point B' 2.2,0.2 right
point C' 4,2 above-right
arrow O X
arrow O Y
arrow O Z
segment A B
segment B C
segment A A'
segment B B'
segment C C'
segment O' A'
segment A' B'
segment B' C'
segment C' O'
:::

The first example reads coordinates from the cuboid above, whose edges run along the three axes.

:::example Coordinates of the vertices of a cuboid
The cuboid $OABC.O'A'B'C'$ has $A$ on the ray $Ox$, $C$ on the ray $Oy$, $O'$ on the ray $Oz$, with $OA=3$, $OC=4$, $OO'=2$. Find the coordinates of the vertices and of $\overrightarrow{OB'}$.

**Solution.** We have $\overrightarrow{OB}=\overrightarrow{OA}+\overrightarrow{OC}=3\vec{i}+4\vec{j}$; the primed vertices are on the top face, so their z-coordinate is $OO'=2$. Hence

$$\begin{aligned}
&O(0, 0, 0),\quad A(3, 0, 0),\quad B(3, 4, 0),\quad C(0, 4, 0),\\
&O'(0, 0, 2),\quad A'(3, 0, 2),\quad B'(3, 4, 2),\quad C'(0, 4, 2).
\end{aligned}$$

Since the coordinates of $\overrightarrow{OB'}$ are those of the point $B'$, $\overrightarrow{OB'}=3\vec{i}+4\vec{j}+2\vec{k}=(3, 4, 2)$.

So the vertices have the coordinates above and $\overrightarrow{OB'}=(3, 4, 2)$.
:::

### Points on the axes and the coordinate planes

From the definition, we can read the position of a point from the coordinates that are $0$:

| Position of $M$ | Condition |
|---|---|
| on the axis $Ox$ / $Oy$ / $Oz$ | $y=z=0$ / $z=x=0$ / $x=y=0$ |
| in the plane $(Oxy)$ / $(Oyz)$ / $(Ozx)$ | $z=0$ / $x=0$ / $y=0$ |

The orthogonal projection of $M(x, y, z)$ onto a coordinate plane is found by **setting the remaining coordinate to $0$**; onto an axis, keep only that axis's coordinate. The distance from $M$ to the plane $(Oxy)$ is $|z|$, because $M$ is exactly $|z|$ away from its projection $(x, y, 0)$.

:::example Projections and distances to coordinate planes
Let $M(2, -3, 5)$. Find the projections of $M$ onto $(Oxy)$, $(Oyz)$, $(Ozx)$ and onto the axis $Oz$. Find the distance from $M$ to the plane $(Oxy)$ and to the axis $Oz$.

**Solution.** The projection onto each coordinate plane has the "missing" coordinate equal to $0$; the projection onto the axis $Oz$ keeps only the z-coordinate. Hence the projections are

$$(Oxy):\ (2, -3, 0),\qquad (Oyz):\ (0, -3, 5),\qquad (Ozx):\ (2, 0, 5),\qquad Oz:\ (0, 0, 5).$$

The distance from $M$ to $(Oxy)$ is $|5|=5$. Let $H(0, 0, 5)$ be the projection of $M$ onto $Oz$; then $\overrightarrow{HM}=(2, -3, 0)$. Hence

$$MH=\sqrt{2^2+(-3)^2}=\sqrt{13}.$$

So $M$ is $5$ from $(Oxy)$ and $\sqrt{13}\approx3.61$ from the axis $Oz$.
:::

## Coordinates of the vector $\overrightarrow{AB}$

Since $\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}$, we subtract component by component along $\vec{i}$, $\vec{j}$, $\vec{k}$. For $A(x_A, y_A, z_A)$ and $B(x_B, y_B, z_B)$:

$$\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A).$$

The familiar rule again: **end point minus start point**. Two vectors are equal if and only if their three corresponding coordinates are equal.

:::example Two equal vectors
Let $A(1, 2, -1)$, $B(3, -1, 2)$, $C(-2, 0, 4)$, $D(0, -3, 7)$. Prove that $\overrightarrow{AB}=\overrightarrow{CD}$. Which parallelogram has the four points $A$, $B$, $C$, $D$ as its vertices?

**Solution.** We have

$$\overrightarrow{AB}=(3-1,\ -1-2,\ 2+1)=(2, -3, 3),\qquad \overrightarrow{CD}=(0+2,\ -3-0,\ 7-4)=(2, -3, 3).$$

Since the corresponding coordinates are equal, $\overrightarrow{AB}=\overrightarrow{CD}$. We have $\overrightarrow{AC}=(-3, -2, 5)$, which is not parallel to $\overrightarrow{AB}$ (since $\frac{-3}{2}\neq\frac{-2}{-3}$), so $C$ is not on the line $AB$.

So the quadrilateral $ABDC$ is a parallelogram (note the order of the vertices: $\overrightarrow{AB}=\overrightarrow{CD}$ makes $AB$ and $CD$ opposite sides pointing the same way).
:::

## Distance, midpoint and centroid

Write $\overrightarrow{AB}=a\vec{i}+b\vec{j}+c\vec{k}$ with $a=x_B-x_A$, $b=y_B-y_A$, $c=z_B-z_A$. When we square, the scalar products $\vec{i}\cdot\vec{j}$, $\vec{j}\cdot\vec{k}$, $\vec{k}\cdot\vec{i}$ are $0$, so $AB^2=a^2+b^2+c^2$. This is also the diagonal of a cuboid with edges $|a|$, $|b|$, $|c|$.

:::theorem Distance, midpoint, centroid
Let $A(x_A, y_A, z_A)$, $B(x_B, y_B, z_B)$, $C(x_C, y_C, z_C)$.
- Distance: $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
- Midpoint $M$ of $AB$: $M\left(\dfrac{x_A+x_B}{2},\ \dfrac{y_A+y_B}{2},\ \dfrac{z_A+z_B}{2}\right)$.
- Centroid $G$ of triangle $ABC$: $G\left(\dfrac{x_A+x_B+x_C}{3},\ \dfrac{y_A+y_B+y_C}{3},\ \dfrac{z_A+z_B+z_C}{3}\right)$.
:::

The last two formulas come from $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ and $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$: we take the mean of each coordinate, just as in the plane.

:::example Midpoint, length, centroid
Let $A(1, 0, 2)$, $B(3, 4, -2)$, $C(-1, 2, 3)$. Find the midpoint $M$ of $AB$, the length $AB$ and the centroid $G$ of triangle $ABC$.

**Solution.** By the formulas for the midpoint and the centroid, we have

$$M\left(\frac{1+3}{2},\ \frac{0+4}{2},\ \frac{2-2}{2}\right)=M(2, 2, 0),\qquad G\left(\frac{1+3-1}{3},\ \frac{0+4+2}{3},\ \frac{2-2+3}{3}\right)=G(1, 2, 1).$$

We have $\overrightarrow{AB}=(2, 4, -4)$. Hence

$$AB=\sqrt{4+16+16}=\sqrt{36}=6.$$

So $M(2, 2, 0)$, $AB=6$ and $G(1, 2, 1)$.
:::

Now we answer the opening question.

:::example How far is the lamp from the sensor?
In the coordinate system chosen in the exploration (unit: metre), the lamp is at $L(2, 3, 2.5)$ and the sensor at $S(8, 6, 0)$. Find the distance $LS$ (give your answer to 2 decimal places).

**Solution.** We have

$$\overrightarrow{LS}=(6, 3, -2.5),\qquad LS=\sqrt{36+9+6.25}=\sqrt{51.25}\approx7.16.$$

We see that the third coordinate $-2.5$ of $\overrightarrow{LS}$ says the sensor is $2.5$ m lower than the lamp; after squaring, the minus sign makes no difference.

So the lamp is about $7.16$ m from the sensor.

**Look back.** If we put the origin at the floor corner with the sensor, with the axes pointing into the room, does the answer change? Then $S(0, 0, 0)$ and $L(6, 3, 2.5)$: all the coordinates are different, but $LS=\sqrt{36+9+6.25}$ is the same. Coordinates depend on the choice of axes, whereas distance is a geometric quantity that does not. That is why we may choose the axes that make the calculation simplest.
:::

:::warning Common mistakes
- **Wrong coordinates in a projection.** Wrong: the projection of $M(2, -3, 5)$ onto $(Oxy)$ is $(0, 0, 5)$. Why it is wrong: that is the projection onto the axis $Oz$. Right: onto $(Oxy)$, keep $x$, $y$ and set $z=0$: $(2, -3, 0)$.
- **Distance to an axis confused with distance to a plane.** Wrong: the distance from $M(2, -3, 5)$ to the axis $Oz$ is $5$. Right: $5$ is the distance to $(Oxy)$; the distance to the axis $Oz$ is $\sqrt{2^2+3^2}=\sqrt{13}$.
- **Subtracting the wrong way round.** Wrong: $\overrightarrow{AB}=(x_A-x_B,\ \dots)$. Right: end point minus start point.
- **Forgetting a coordinate in a distance.** Wrong: $AB=\sqrt{2^2+4^2}$ for $\overrightarrow{AB}=(2, 4, -4)$. Right: add all three squares, $AB=6$.
:::

## Key terms

:::terms
- Oxyz coordinate system | hệ trục toạ độ Oxyz
- origin | gốc toạ độ
- x-axis, y-axis, z-axis | trục hoành, trục tung, trục cao
- coordinate plane | mặt phẳng toạ độ
- unit vector | vectơ đơn vị
- coordinates of a point | toạ độ của điểm
- x-, y- and z-coordinate | hoành độ, tung độ, cao độ
- orthogonal projection | hình chiếu vuông góc
- midpoint | trung điểm
- centroid | trọng tâm
:::

## Summary

- $Oxyz$: three pairwise perpendicular axes with unit vectors $\vec{i}$, $\vec{j}$, $\vec{k}$ of length $1$, pairwise perpendicular.
- $M(x, y, z)\iff\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}$; $\vec{a}=(x, y, z)\iff\vec{a}=x\vec{i}+y\vec{j}+z\vec{k}$.
- In $(Oxy)$: $z=0$; on $Ox$: $y=z=0$. The projection of $(x, y, z)$ onto $(Oxy)$ is $(x, y, 0)$.
- $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)$; $AB$ is the square root of the sum of three squares.
- Midpoint, centroid: the mean of each coordinate.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
a) Find the coordinates of the point $M$ given $\overrightarrow{OM}=2\vec{i}-3\vec{j}+\vec{k}$.

b) Find the coordinates of the vector $\vec{a}=-\vec{i}+4\vec{k}$.

::hint
**What you need:** $\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}\iff M(x, y, z)$; a missing component has coefficient $0$.

**Steps:**
1. Read off the coefficients of $\vec{i}$, $\vec{j}$, $\vec{k}$ in turn.
2. b) The coefficient of $\vec{j}$ is $0$.

::solution
a) Since $\overrightarrow{OM}=2\vec{i}+(-3)\vec{j}+1\cdot\vec{k}$, $M(2, -3, 1)$.

b) Since $\vec{a}=-1\cdot\vec{i}+0\cdot\vec{j}+4\vec{k}$, $\vec{a}=(-1, 0, 4)$.

So $M(2, -3, 1)$ and $\vec{a}=(-1, 0, 4)$.

**Answer.** a) $M(2, -3, 1)$; b) $\vec{a}=(-1, 0, 4)$.
:::

:::exercise
Let $N(4, -1, 3)$. Find the projections of $N$ onto the planes $(Oxy)$, $(Oyz)$, $(Ozx)$ and onto the axis $Oy$. Find the distance from $N$ to the plane $(Ozx)$.

::hint
**What you need:** projection onto a coordinate plane: set the remaining coordinate to $0$; the plane $(Ozx)$ is $y=0$.

**Steps:**
1. Write the three projections onto the three planes.
2. Onto the axis $Oy$: keep only the y-coordinate.
3. The distance to $(Ozx)$ is $|y|$.

::solution
The projections of $N$ onto $(Oxy)$, $(Oyz)$, $(Ozx)$ and the axis $Oy$ are $(4, -1, 0)$, $(0, -1, 3)$, $(4, 0, 3)$ and $(0, -1, 0)$ respectively.

So the distance from $N$ to $(Ozx)$ is $|-1|=1$.

**Answer.** $(4, -1, 0)$, $(0, -1, 3)$, $(4, 0, 3)$, $(0, -1, 0)$; the distance is $1$.
:::

:::exercise
Let $A(2, -1, 3)$ and $B(-1, 3, 3)$. Find the coordinates of $\overrightarrow{AB}$ and the length $AB$.

::hint
**What you need:** $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)$; $AB=\sqrt{a^2+b^2+c^2}$.

**Steps:**
1. Subtract coordinate by coordinate.
2. Add the three squares and take the square root.

::solution
We have
$$\overrightarrow{AB}=(-3, 4, 0),\qquad AB=\sqrt{9+16+0}=5.$$
So $\overrightarrow{AB}=(-3, 4, 0)$ and $AB=5$.

**Answer.** $\overrightarrow{AB}=(-3, 4, 0)$; $AB=5$.
:::

:::exercise
Let $A(2, 1, -3)$, $B(0, 5, 1)$, $C(4, -3, 5)$. Find the midpoint $M$ of $AB$ and the centroid $G$ of triangle $ABC$.

::hint
**What you need:** midpoint and centroid: the mean of each coordinate.

**Steps:**
1. Add each coordinate of $A$ and $B$, then divide by $2$.
2. Add each coordinate of $A$, $B$, $C$, then divide by $3$.

::solution
By the formulas for the midpoint and the centroid, we have
$$M\left(\frac{2+0}{2},\ \frac{1+5}{2},\ \frac{-3+1}{2}\right)=M(1, 3, -1),\qquad G\left(\frac{6}{3},\ \frac{3}{3},\ \frac{3}{3}\right)=G(2, 1, 1).$$

**Answer.** $M(1, 3, -1)$; $G(2, 1, 1)$.
:::

:::exercise
Let $A(1, -2, 3)$ and $M(2, 0, 1)$. Find the point $N$ such that $M$ is the midpoint of $AN$.

::hint
**What you need:** $M$ is the midpoint of $AN$ $\iff$ $x_M=\dfrac{x_A+x_N}{2}$ (and likewise), that is $x_N=2x_M-x_A$.

**Steps:**
1. Double the coordinates of $M$.
2. Subtract the coordinates of $A$.

::solution
Since $M$ is the midpoint of $AN$, $x_N=2x_M-x_A$, and likewise for $y_N$, $z_N$. Hence
$$N(2\cdot2-1,\ 2\cdot0+2,\ 2\cdot1-3)=N(3, 2, -1).$$
**Check.** The midpoint of $A(1, -2, 3)$ and $N(3, 2, -1)$ is $(2, 0, 1)=M$.

So $N(3, 2, -1)$.

**Answer.** $N(3, 2, -1)$.
:::

:::exercise
A control station is at the origin $O$ of a system $Oxyz$ (unit: metre; $Ox$ points east, $Oy$ north, $Oz$ up). A drone is flying at the point $P(120, -50, 60)$. How many metres is the drone from the station (give your answer to the nearest whole number)?

::hint
**What you need:** $OP=\sqrt{x^2+y^2+z^2}$.

**Steps:**
1. Square the three coordinates and add them.
2. Take the square root and round.

::solution
$$OP=\sqrt{120^2+(-50)^2+60^2}=\sqrt{14400+2500+3600}=\sqrt{20500}\approx143.18.$$
So the drone is about $143$ m from the station.

**Answer.** $143$.
:::

:::exercise
In the system $Oxyz$, let $M(3, -4, 12)$. Decide whether each statement is true or false.

a) The projection of $M$ onto the plane $(Oxy)$ is $(3, -4, 0)$.

b) The distance from $M$ to the plane $(Oyz)$ is $4$.

c) $OM=13$.

d) The distance from $M$ to the axis $Ox$ is $4$.

::hint
**What you need:** the distance to $(Oyz)$ is $|x|$; the distance to the axis $Ox$ is $\sqrt{y^2+z^2}$.

**Steps:**
1. Write the projection onto $(Oxy)$.
2. Find $OM$ from the three coordinates.
3. Decide which coordinates each distance uses.

::solution
a) **True.** The projection onto $(Oxy)$ keeps $x$, $y$ and has $z=0$.

b) **False.** The distance to $(Oyz)$ is $|x|=3$.

c) **True.** We have $OM=\sqrt{9+16+144}=\sqrt{169}=13$.

d) **False.** The projection of $M$ onto $Ox$ is $H(3, 0, 0)$, so $MH=\sqrt{16+144}=\sqrt{160}=4\sqrt{10}$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
The cube $ABCD.A'B'C'D'$ with edge $4$ is placed in $Oxyz$ so that $A$ is at $O$, $B(4, 0, 0)$, $D(0, 4, 0)$, $A'(0, 0, 4)$. Find the coordinates of $C'$, of the centre $I$ of the face $A'B'C'D'$, and the length $IB$.

::hint
**What you need:** the parallelepiped rule $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$; the centre of a square is the midpoint of a diagonal.

**Steps:**
1. Add the three edge vectors to get $C'$.
2. $I$ is the midpoint of $A'C'$.
3. Find $IB$ with the distance formula.

::solution
By the parallelepiped rule, $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=(4, 0, 0)+(0, 4, 0)+(0, 0, 4)=(4, 4, 4)$, so $C'(4, 4, 4)$. The centre $I$ is the midpoint of $A'(0, 0, 4)$ and $C'$, so $I(2, 2, 4)$. Hence
$$IB=\sqrt{(4-2)^2+(0-2)^2+(0-4)^2}=\sqrt{24}=2\sqrt6.$$

**Answer.** $C'(4, 4, 4)$, $I(2, 2, 4)$, $IB=2\sqrt6\approx4.90$.
:::

:::exercise
(Revisiting [Vectors in the coordinate plane](lesson:vectors-in-coordinates).) In the plane $Oxy$, let $A(1, 2)$ and $B(4, 6)$.

a) Find $AB$ with the grade-10 formula.

b) Regard $A$, $B$ as the points $A(1, 2, 0)$, $B(4, 6, 0)$ of the plane $(Oxy)$ in space. Lift $B$ straight up to $B'(4, 6, 12)$. Find $AB'$.

::hint
**What you need:** $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ in the plane; in space there is an extra $(z_B-z_A)^2$.

**Steps:**
1. a) Find the two coordinate differences.
2. b) Add the height difference $12$ and notice that $ABB'$ has a right angle at $B$.

::solution
a) We have $\overrightarrow{AB}=(3, 4)$, so $AB=\sqrt{3^2+4^2}=5$.

b) We have $\overrightarrow{AB'}=(3, 4, 12)$, so $AB'=\sqrt{9+16+144}=13$. This is exactly Pythagoras' theorem in triangle $ABB'$ with the right angle at $B$: $5^2+12^2=13^2$.

**Answer.** a) $AB=5$; b) $AB'=13$.
:::

:::exercise Challenge
Find the point $M$ on the axis $Oz$ that is equidistant from $A(1, 2, 3)$ and $B(-1, 0, 5)$.

::hint
**What you need:** a point on $Oz$ has the form $M(0, 0, t)$; $MA=MB\iff MA^2=MB^2$.

**Steps:**
1. Write $MA^2$ and $MB^2$ in terms of $t$.
2. Set them equal; the $t^2$ terms cancel.

::solution
Since $M$ lies on the axis $Oz$, $M(0, 0, t)$. We have
$$MA^2=1+4+(t-3)^2=t^2-6t+14,\qquad MB^2=1+0+(t-5)^2=t^2-10t+26.$$
Since $MA=MB$,
$$t^2-6t+14=t^2-10t+26\iff 4t=12\iff t=3.$$
**Check.** $MA=\sqrt{1+4+0}=\sqrt5$ and $MB=\sqrt{1+0+4}=\sqrt5$.

So $M(0, 0, 3)$.

**Answer.** $M(0, 0, 3)$.
:::

## Mini test

:::quiz
::mc
In the system $Oxyz$, the point $M$ satisfies $\overrightarrow{OM}=3\vec{i}-\vec{k}$. The coordinates of $M$ are
A. $(0, 3, -1)$.
B. $(3, -1, 0)$.
C. $(3, 0, -1)$.
D. $(3, 0, 1)$.
::key C
Since the coefficients of $\vec{i}$, $\vec{j}$, $\vec{k}$ are $3$, $0$, $-1$, $M(3, 0, -1)$. Option B forgets that a missing $\vec{j}$ means the y-coordinate is $0$.

::mc
The orthogonal projection of the point $A(2, -5, 4)$ onto the plane $(Oyz)$ is
A. $(2, 0, 0)$.
B. $(0, -5, 4)$.
C. $(2, -5, 0)$.
D. $(2, 0, 4)$.
::key B
Since the plane $(Oyz)$ has equation $x=0$, the projection keeps $y$, $z$ and has $x=0$. Option A is the projection onto the axis $Ox$, and option C is the projection onto $(Oxy)$.

::mc
Let $A(1, -2, 3)$ and $B(3, 0, -1)$. The midpoint $I$ of the segment $AB$ is
A. $I(2, 2, -4)$.
B. $I(1, 1, -2)$.
C. $I(4, -2, 2)$.
D. $I(2, -1, 1)$.
::key D
By the midpoint formula, we have $I\left(\dfrac{1+3}{2}, \dfrac{-2+0}{2}, \dfrac{3-1}{2}\right)$. Option B is $\dfrac12\overrightarrow{AB}$, option C forgets to divide by $2$, and option A is $\overrightarrow{AB}$.

::mc
The distance from the point $M(3, -4, 6)$ to the axis $Oz$ is
A. $5$.
B. $6$.
C. $\sqrt{61}$.
D. $\sqrt{52}$.
::key A
The projection of $M$ onto $Oz$ is $H(0, 0, 6)$, so $MH=\sqrt{3^2+4^2}=5$. Option B is the distance to $(Oxy)$, option C is $OM$, and option D is the distance to the axis $Ox$.

::tf
In the system $Oxyz$, let $A(1, 2, -1)$, $B(3, -2, 3)$, $C(-1, 3, 1)$. Decide whether each statement is true or false.
a) $\overrightarrow{AB}=(2, -4, 4)$.
b) $AB=6$.
c) The centroid of triangle $ABC$ is $G(3, 3, 3)$.
d) The point $D$ that makes $ABCD$ a parallelogram is $D(-3, 7, -3)$.
::key T T F T
a) True: subtracting the coordinates of the start point from those of the end point gives this result. b) True: we have $AB=\sqrt{4+16+16}=6$. c) False: the centroid is $G(1, 1, 1)$; $(3, 3, 3)$ is the sum of the coordinates before dividing by $3$. d) True: since $ABCD$ is a parallelogram if and only if $\overrightarrow{AB}=\overrightarrow{DC}$, $D=(-1-2, 3+4, 1-4)=(-3, 7, -3)$.

::sa
In the system $Oxyz$, let $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 2)$. Find the perimeter of triangle $ABC$ (give your answer to 1 decimal place).
::key 7.3
We have $AB=\sqrt{1+4}=\sqrt5$, $AC=\sqrt{1+4}=\sqrt5$, $BC=\sqrt{4+4}=2\sqrt2$. So the perimeter is $2\sqrt5+2\sqrt2\approx7.30$, which rounds to $7.3$.

::sa
In a system $Oxyz$ attached to a training ground (unit: metre), two drones are at the points $P(10, 20, 15)$ and $Q(40, -20, 45)$. How far apart are the drones, in metres (give your answer to 1 decimal place)?
::key 58.3
We have $\overrightarrow{PQ}=(30, -40, 30)$, so $PQ=\sqrt{900+1600+900}=\sqrt{3400}\approx58.31$, which rounds to $58.3$ m.
:::
