---
title: Vectors in the coordinate plane
description: Describe a vector by its coordinates, add and scale vectors with numbers, and find lengths, midpoints, centroids and collinear points from coordinates.
minutes: 25
---

:::goals
- Write a vector as $\vec{a}=(x, y)$ and find the coordinates of $\overrightarrow{AB}$ from the points $A$ and $B$.
- Add, subtract and scale vectors using coordinates.
- Find the length of a vector and the distance between two points.
- Use coordinates for midpoints, centroids, collinearity and a missing vertex of a parallelogram.
:::

On a map of a neighbourhood drawn on a square grid, Lan's house is at the point $(0, 0)$. A map app tells Lan "walk $3$ blocks east, then $2$ blocks north" to reach school. Minh's house is at the point $(1, 4)$, and Minh follows exactly the same two instructions. Where does Minh end up?

## Coordinates of a vector

Let us compute. The move "$3$ to the right, $2$ up" adds $3$ to the $x$-coordinate and $2$ to the $y$-coordinate, wherever you start:

$$\text{Lan: } (0+3,\ 0+2)=(3, 2),\qquad \text{Minh: } (1+3,\ 4+2)=(4, 6).$$

The two friends follow arrows in different places, but the arrows are **equal**, and the pair $(3, 2)$ describes that arrow completely. So Minh ends up at $(4, 6)$. A pair such as $(3, 2)$ is called the coordinates of the vector.

In the plane with axes $Ox$ and $Oy$, let $\vec{i}$ be the vector of length $1$ along $Ox$, pointing the way of the axis, and $\vec{j}$ the same kind of vector along $Oy$. These are the **unit vectors** of the axes.

:::definition Coordinates of a vector
Every vector $\vec{a}$ can be written in exactly one way as
$$\vec{a}=x\vec{i}+y\vec{j}.$$
The pair $(x, y)$ is the **coordinates** of $\vec{a}$, and we write $\vec{a}=(x, y)$.
:::

:::diagram The vector $\vec{a}=3\vec{i}+2\vec{j}$
alt: On a grid, an arrow from the origin O to the point P(3, 2), with dashed segments showing 3 units along the x-axis and 2 units up
point O 0,0 below-left
point X 3,0 below ""
point Y 0,2 left ""
point P 3,2 above-right "(3, 2)"
axes
grid
arrow O P "a"
segment X P dashed
segment Y P dashed
:::

Two vectors are **equal** exactly when their coordinates are equal: $(x, y)=(x', y')$ means $x=x'$ and $y=y'$. The zero vector is $(0, 0)$.

### From points to a vector

If $A(x_A, y_A)$ and $B(x_B, y_B)$, then to go from $A$ to $B$ we move $x_B-x_A$ horizontally and $y_B-y_A$ vertically:
$$\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A).$$
In short: **end point minus start point**.

The first example applies this formula and shows that one vector can "sit" in many places.

:::example A vector from two points
Let $A(1, 2)$, $B(4, 6)$, $C(-2, 0)$, $D(1, 4)$. Find the coordinates of $\overrightarrow{AB}$ and $\overrightarrow{CD}$. Are the two vectors equal?

**Solution.** Subtract the coordinates of the start point from those of the end point:

$$\overrightarrow{AB}=(4-1,\ 6-2)=(3, 4),\qquad \overrightarrow{CD}=(1-(-2),\ 4-0)=(3, 4).$$

The two vectors have the same coordinates, so $\overrightarrow{AB}=\overrightarrow{CD}$, even though the four points are different.
:::

## Operations in coordinates

Since $\vec{a}=x_1\vec{i}+y_1\vec{j}$ and $\vec{b}=x_2\vec{i}+y_2\vec{j}$, the rules from the previous lesson give $\vec{a}+\vec{b}=(x_1+x_2)\vec{i}+(y_1+y_2)\vec{j}$. The same works for differences and for multiples:

:::theorem Operations on coordinates
Let $\vec{a}=(x_1, y_1)$, $\vec{b}=(x_2, y_2)$ and $k$ a number. Then
- $\vec{a}+\vec{b}=(x_1+x_2,\ y_1+y_2)$,
- $\vec{a}-\vec{b}=(x_1-x_2,\ y_1-y_2)$,
- $k\vec{a}=(kx_1,\ ky_1)$.
:::

So we add, subtract and scale vectors **one coordinate at a time**.

:::example Combining vectors
Let $\vec{a}=(2, -1)$ and $\vec{b}=(-3, 4)$. Find $\vec{a}+\vec{b}$, $\vec{a}-\vec{b}$ and $3\vec{a}-2\vec{b}$.

**Solution.** We work on the $x$- and $y$-coordinates separately:

$$\vec{a}+\vec{b}=(2-3,\ -1+4)=(-1, 3),\qquad \vec{a}-\vec{b}=(2+3,\ -1-4)=(5, -5).$$

For the third expression, multiply first and subtract afterwards:

$$3\vec{a}=(6, -3),\quad 2\vec{b}=(-6, 8),\quad 3\vec{a}-2\vec{b}=(6+6,\ -3-8)=(12, -11).$$

So $\vec{a}+\vec{b}=(-1, 3)$, $\vec{a}-\vec{b}=(5, -5)$ and $3\vec{a}-2\vec{b}=(12, -11)$.
:::

## Length of a vector and distance

In the figure above, $\vec{a}=(3, 2)$ is the hypotenuse of a right-angled triangle with legs $3$ and $2$. In general, by Pythagoras' theorem, the vector $\vec{a}=(x, y)$ has length
$$|\vec{a}|=\sqrt{x^2+y^2}.$$
Since $AB$ is the length of $\overrightarrow{AB}$, the **distance between two points** is
$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

With the three side lengths, we can recognise a triangle without drawing it.

:::example A right-angled triangle
Let $A(1, 2)$, $B(4, 6)$, $C(9, -4)$. Prove that triangle $ABC$ is right-angled.

**Solution.** We find the squares of the three sides and use the converse of Pythagoras' theorem:

$$\begin{aligned}
\overrightarrow{AB}&=(3, 4), & AB^2&=9+16=25,\\
\overrightarrow{AC}&=(8, -6), & AC^2&=64+36=100,\\
\overrightarrow{BC}&=(5, -10), & BC^2&=25+100=125.
\end{aligned}$$

Since $AB^2+AC^2=25+100=125=BC^2$, triangle $ABC$ has a right angle at $A$.

**Check.** The longest side $BC$ is the hypotenuse, so the right angle is at the opposite vertex, $A$.
:::

## Midpoint and centroid

Use $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ and $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$ with $O$ the origin. The coordinates of $\overrightarrow{OA}$ are exactly the coordinates of the point $A$, so we get coordinates by averaging.

:::theorem Midpoint and centroid
- The midpoint $M$ of $AB$ is $M\left(\dfrac{x_A+x_B}{2},\ \dfrac{y_A+y_B}{2}\right)$.
- The centroid $G$ of triangle $ABC$ is $G\left(\dfrac{x_A+x_B+x_C}{3},\ \dfrac{y_A+y_B+y_C}{3}\right)$.
:::

:::example Midpoint and centroid
a) Find the midpoint of the segment joining $A(2, -1)$ and $B(6, 5)$.
b) Find the centroid of the triangle with vertices $A(1, 1)$, $B(5, 2)$, $C(0, 6)$.

**Solution.** Average each coordinate:

$$M\left(\frac{2+6}{2},\ \frac{-1+5}{2}\right)=M(4, 2),\qquad G\left(\frac{1+5+0}{3},\ \frac{1+2+6}{3}\right)=G(2, 3).$$

So the midpoint is $M(4, 2)$ and the centroid is $G(2, 3)$.
:::

## Collinear vectors and collinear points

Two non-zero vectors $\vec{a}=(x_1, y_1)$ and $\vec{b}=(x_2, y_2)$ are **collinear** when one is a multiple of the other, for example $(2, 4)$ and $(4, 8)=2(2, 4)$. In coordinates this is equivalent to
$$x_1y_2-x_2y_1=0.$$
We use this product test instead of the ratio $\frac{x_1}{x_2}=\frac{y_1}{y_2}$, because the ratio fails when a coordinate is $0$. Three points $A$, $B$, $C$ are collinear when $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are collinear.

The next example uses the test twice: once to check, and once to find an unknown point.

:::example Three collinear points
Let $A(-1, 1)$, $B(3, 3)$, $C(7, 5)$.

a) Prove that $A$, $B$, $C$ are collinear.
b) The line $AB$ meets the $x$-axis at $M$. Find the coordinates of $M$.

**Solution.** a) We look at $\overrightarrow{AB}$ and $\overrightarrow{AC}$:

$$\overrightarrow{AB}=(4, 2),\quad \overrightarrow{AC}=(8, 4),\quad 4\cdot4-8\cdot2=0.$$

The vectors are collinear (indeed $\overrightarrow{AC}=2\overrightarrow{AB}$), so $A$, $B$, $C$ are collinear.

b) The point $M$ is on the $x$-axis, so $M(t, 0)$. We need $\overrightarrow{AM}=(t+1, -1)$ to be collinear with $\overrightarrow{AB}=(4, 2)$:

$$(t+1)\cdot2-4\cdot(-1)=0\iff 2t+6=0\iff t=-3.$$

So $M(-3, 0)$.
:::

## A missing vertex of a parallelogram

$ABCD$ is a parallelogram exactly when $\overrightarrow{AB}=\overrightarrow{DC}$. Writing this equality in coordinates gives the fourth vertex.

:::diagram Parallelogram $ABCD$
alt: A parallelogram with vertices A(1, 1), B(4, 2), C(5, 5) and D(2, 4) drawn on a grid
point A 1,1 below-left "A(1, 1)"
point B 4,2 below-right "B(4, 2)"
point C 5,5 above-right "C(5, 5)"
point D 2,4 above-left "D(2, 4)"
polygon A B C D
grid
:::

:::example Fourth vertex
Three vertices of parallelogram $ABCD$ are $A(1, 1)$, $B(4, 2)$ and $C(5, 5)$. Find $D$.

**Solution.** Let $D(x, y)$. The parallelogram gives $\overrightarrow{AB}=\overrightarrow{DC}$; we set the coordinates equal:

$$(3, 1)=(5-x,\ 5-y)\iff\begin{cases}5-x=3\\5-y=1\end{cases}\iff\begin{cases}x=2\\y=4.\end{cases}$$

So $D(2, 4)$.

**Check.** The diagonals must bisect each other: the midpoint of $AC$ is $(3, 3)$, and the midpoint of $BD$ is also $(3, 3)$.
:::

:::warning Common mistakes
- **Subtracting in the wrong order.** Wrong: for $A(1, 2)$, $B(4, 6)$, writing $\overrightarrow{AB}=(1-4,\ 2-6)=(-3, -4)$. That is $\overrightarrow{BA}$. Right: end minus start, $\overrightarrow{AB}=(3, 4)$.
- **Adding coordinates instead of finding the length.** Wrong: $|(3, 4)|=3+4=7$. Right: $|(3, 4)|=\sqrt{9+16}=5$.
- **Using the ratio when a coordinate is $0$.** For $(0, 2)$ and $(0, 5)$ the ratio $\frac{0}{0}$ means nothing, but $0\cdot5-0\cdot2=0$ shows the vectors are collinear.
- **The wrong order of vertices.** $ABCD$ being a parallelogram needs $\overrightarrow{AB}=\overrightarrow{DC}$, not $\overrightarrow{AB}=\overrightarrow{CD}$.
:::

## Key terms

:::terms
- unit vectors | các vectơ đơn vị
- coordinates of a vector | toạ độ của vectơ
- equal vectors | hai vectơ bằng nhau
- length of a vector | độ dài vectơ
- distance between two points | khoảng cách giữa hai điểm
- midpoint | trung điểm
- centroid | trọng tâm
- collinear | cùng phương
- parallelogram | hình bình hành
:::

## Summary

- $\vec{a}=x\vec{i}+y\vec{j}$ is written $\vec{a}=(x, y)$; $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)$ (end minus start).
- Add, subtract and scale one coordinate at a time.
- $|\vec{a}|=\sqrt{x^2+y^2}$; $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.
- Midpoint: average of two sets of coordinates; centroid: average of three.
- $\vec{a}$, $\vec{b}$ collinear $\iff x_1y_2-x_2y_1=0$; three points are collinear when $\overrightarrow{AB}$, $\overrightarrow{AC}$ are collinear.
- Fourth vertex of parallelogram $ABCD$: solve $\overrightarrow{AB}=\overrightarrow{DC}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Let $\vec{a}=(3, -2)$ and $\vec{b}=(-1, 5)$. Find the coordinates of $2\vec{a}+\vec{b}$ and $\vec{a}-3\vec{b}$.

::hint
**What you need:** $k\vec{a}=(kx_1,\ ky_1)$; add and subtract one coordinate at a time.

**Steps:**
1. Find $2\vec{a}$ and $3\vec{b}$.
2. Add or subtract coordinate by coordinate.

::solution
For $\vec{u}=(x_1, y_1)$, $\vec{w}=(x_2, y_2)$ and a number $k$, we have $k\vec{u}=(kx_1, ky_1)$ and $\vec{u}\pm\vec{w}=(x_1\pm x_2, y_1\pm y_2)$.

We have $2\vec{a}=(6, -4)$. Hence
$$2\vec{a}+\vec{b}=(6+(-1),\ -4+5)=(5, 1).$$

We have $3\vec{b}=(-3, 15)$. Hence
$$\vec{a}-3\vec{b}=(3-(-3),\ -2-15)=(6, -17).$$

So $2\vec{a}+\vec{b}=(5, 1)$ and $\vec{a}-3\vec{b}=(6, -17)$.

**Answer.** $2\vec{a}+\vec{b}=(5, 1)$; $\vec{a}-3\vec{b}=(6, -17)$.
:::

:::exercise
Find the coordinates of $\overrightarrow{AB}$ and the distance $AB$ for $A(-2, 3)$ and $B(4, -1)$.

::hint
**What you need:** $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)$ and $|\vec{a}|=\sqrt{x^2+y^2}$.

**Steps:**
1. Subtract the coordinates of $A$ from those of $B$.
2. Find the length and simplify the square root.

::solution
For $A(x_A, y_A)$ and $B(x_B, y_B)$, we have $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)$ and $AB=|\overrightarrow{AB}|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.

For $A(-2, 3)$ and $B(4, -1)$:
$$\overrightarrow{AB}=(4-(-2),\ -1-3)=(6, -4).$$

The distance $AB$ is the length of $\overrightarrow{AB}$:
$$AB=\sqrt{6^2+(-4)^2}=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}.$$

So $\overrightarrow{AB}=(6, -4)$ and $AB=2\sqrt{13}$.

**Answer.** $\overrightarrow{AB}=(6, -4)$; $AB=2\sqrt{13}$.
:::

:::exercise
a) Find the midpoint of the segment joining $A(-3, 5)$ and $B(7, 1)$.
b) Find the centroid of the triangle with vertices $A(1, 2)$, $B(4, -1)$, $C(-2, 8)$.

::hint
**What you need:** the coordinates of a midpoint or a centroid are averages of the coordinates of the endpoints or vertices.

**Steps:**
1. Add the $x$-coordinates and divide by $2$ (or $3$).
2. Do the same with the $y$-coordinates.

::solution
a) The midpoint $M$ of the segment $AB$ has coordinates equal to the averages of the corresponding coordinates of $A$ and $B$:
$$M\left(\frac{-3+7}{2},\ \frac{5+1}{2}\right)=M(2, 3).$$
So the midpoint of the segment $AB$ is $M(2, 3)$.

b) The centroid $G$ of triangle $ABC$ has coordinates equal to the averages of the corresponding coordinates of the three vertices:
$$G\left(\frac{1+4+(-2)}{3},\ \frac{2+(-1)+8}{3}\right)=G\left(\frac33,\ \frac93\right)=G(1, 3).$$
So the centroid of triangle $ABC$ is $G(1, 3)$.

**Answer.** a) $M(2, 3)$; b) $G(1, 3)$.
:::

:::exercise
Prove that the three points $A(1, 1)$, $B(2, 3)$, $C(4, 7)$ are collinear.

::hint
**What you need:** three points are collinear when $\overrightarrow{AB}$, $\overrightarrow{AC}$ are collinear, that is $x_1y_2-x_2y_1=0$.

**Steps:**
1. Find the coordinates of $\overrightarrow{AB}$ and $\overrightarrow{AC}$.
2. Compute $x_1y_2-x_2y_1$.

::solution
Three distinct points $A$, $B$, $C$ are collinear if and only if the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are collinear.

We have
$$\overrightarrow{AB}=(2-1,\ 3-1)=(1, 2),\qquad\overrightarrow{AC}=(4-1,\ 7-1)=(3, 6).$$

Two vectors $(x_1, y_1)$ and $(x_2, y_2)$ are collinear when $x_1y_2-x_2y_1=0$. Here
$$1\cdot6-3\cdot2=6-6=0,$$
so $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are collinear. More precisely, $(3, 6)=3\cdot(1, 2)$, that is, $\overrightarrow{AC}=3\overrightarrow{AB}$.

So the three points $A$, $B$, $C$ are collinear.

**Answer.** $A$, $B$, $C$ are collinear, with $\overrightarrow{AC}=3\overrightarrow{AB}$.
:::

:::exercise
$ABCD$ is a parallelogram with $A(-1, 0)$, $B(2, 1)$, $C(3, 4)$. Find the coordinates of the vertex $D$.

::hint
**What you need:** $ABCD$ is a parallelogram $\iff$ $\overrightarrow{AB}=\overrightarrow{DC}$.

**Steps:**
1. Let $D(x, y)$ and write the coordinates of $\overrightarrow{AB}$ and $\overrightarrow{DC}$.
2. Set the matching coordinates equal.

::solution
Let $D(x, y)$. The quadrilateral $ABCD$ is a parallelogram if and only if $\overrightarrow{AB}=\overrightarrow{DC}$.

We have
$$\overrightarrow{AB}=(2-(-1),\ 1-0)=(3, 1),\qquad\overrightarrow{DC}=(3-x,\ 4-y).$$

Two vectors are equal when their corresponding coordinates are equal, so
$$\begin{cases}3-x=3\\4-y=1\end{cases}\iff\begin{cases}x=0\\y=3.\end{cases}$$

Check: the midpoint of $AC$ is $\left(\dfrac{-1+3}{2},\ \dfrac{0+4}{2}\right)=(1, 2)$ and the midpoint of $BD$ is $\left(\dfrac{2+0}{2},\ \dfrac{1+3}{2}\right)=(1, 2)$. The two midpoints coincide, so the diagonals bisect each other, as in a parallelogram.

So the vertex $D$ has coordinates $(0, 3)$.

**Answer.** $D(0, 3)$.
:::

:::exercise
On a sea chart (units: km), the harbour is at the origin $O$. At $8$ o'clock a ship is at the point $A(2, 3)$ and sails in a straight line with constant velocity $\vec{v}=(3, 4)$ (km/h). How many kilometres from the harbour is the ship at $10$ o'clock? (Round to one decimal place.)

::hint
**What you need:** after $t$ hours the ship's displacement is $t\vec{v}$; the distance from the origin to a point $P(x, y)$ is $\sqrt{x^2+y^2}$.

**Steps:**
1. In $2$ hours the ship moves by $2\vec{v}$; add this to the coordinates of $A$.
2. Find $OP$ and round.

::solution
Choose a coordinate system $Oxy$ on the chart (units: km) with the harbour at the origin $O$. From $8$ o'clock to $10$ o'clock is $2$ hours, and the ship sails in a straight line with constant velocity $\vec{v}=(3, 4)$ (km/h), so its displacement in $2$ hours is
$$2\vec{v}=(6, 8)\ \text{(km)}.$$

Let $P$ be the position of the ship at $10$ o'clock. Then $\overrightarrow{AP}=2\vec{v}$, so
$$P(2+6,\ 3+8)=P(8, 11).$$

The distance from the ship to the harbour at $10$ o'clock is
$$OP=\sqrt{8^2+11^2}=\sqrt{64+121}=\sqrt{185}\approx13.6\ \text{(km)}.$$

So at $10$ o'clock the ship is about $13.6$ km from the harbour.

**Answer.** $13.6$.
:::

:::exercise
Triangle $ABC$ has $A(1, 1)$, $B(4, 5)$, $C(7, 1)$. Is each claim true or false?

a) $\overrightarrow{AB}=(3, 4)$.
b) Triangle $ABC$ is isosceles with apex $B$.
c) The centroid of the triangle is $G\left(4, \dfrac73\right)$.
d) The perimeter of triangle $ABC$ is $15$.

::hint
**What you need:** coordinates of a vector, the distance formula, the centroid formula.

**Steps:**
1. Find the coordinates of $\overrightarrow{AB}$, $\overrightarrow{BC}$, $\overrightarrow{AC}$ and the three lengths.
2. Average the coordinates to find $G$.

::solution
We compute the vectors and lengths we need.
$$\overrightarrow{AB}=(4-1,\ 5-1)=(3, 4),\quad\overrightarrow{BC}=(7-4,\ 1-5)=(3, -4),\quad\overrightarrow{AC}=(7-1,\ 1-1)=(6, 0).$$

a) **True.** We have $\overrightarrow{AB}=(4-1,\ 5-1)=(3, 4)$.

b) **True.** We have $AB=\sqrt{3^2+4^2}=5$ and $BC=\sqrt{3^2+(-4)^2}=5$, so $BA=BC$. Hence triangle $ABC$ is isosceles with apex $B$.

c) **True.** The centroid of the triangle is
$$G\left(\frac{1+4+7}{3},\ \frac{1+5+1}{3}\right)=G\left(4, \frac73\right).$$

d) **False.** We have $AC=\sqrt{6^2+0^2}=6$, so the perimeter of triangle $ABC$ is $AB+BC+CA=5+5+6=16$, which is not $15$.

So statements a), b), c) are true; statement d) is false.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise
(Revisiting writing a vector in terms of two non-collinear vectors.) Write $\vec{c}=(5, 1)$ as $x\vec{a}+y\vec{b}$ with $\vec{a}=(1, 1)$ and $\vec{b}=(1, -1)$.

::hint
**What you need:** two vectors are equal when their matching coordinates are equal; $\vec{a}$, $\vec{b}$ are non-collinear, so the decomposition is unique.

**Steps:**
1. Write $x\vec{a}+y\vec{b}=(x+y,\ x-y)$.
2. Set it equal to $(5, 1)$ and solve the system.

::solution
We need to find $x$, $y$ such that $\vec{c}=x\vec{a}+y\vec{b}$. We have
$$x\vec{a}+y\vec{b}=x(1, 1)+y(1, -1)=(x+y,\ x-y).$$

Two vectors are equal when their corresponding coordinates are equal. Since $\vec{c}=(5, 1)$,
$$\begin{cases}x+y=5\\x-y=1.\end{cases}$$

Adding the two equations: $2x=6$, so $x=3$. Substituting into $x+y=5$ gives $y=5-3=2$.

Hence $\begin{cases}x=3\\y=2.\end{cases}$

Check: $3(1, 1)+2(1, -1)=(3+2,\ 3-2)=(5, 1)=\vec{c}$.

So $\vec{c}=3\vec{a}+2\vec{b}$.

**Answer.** $\vec{c}=3\vec{a}+2\vec{b}$.
:::

:::exercise Challenge
Find the point $M$ on the $x$-axis that is equidistant from $A(1, 3)$ and $B(5, 1)$.

::hint
**What you need:** a point on the $x$-axis has the form $M(t, 0)$; $MA=MB\iff MA^2=MB^2$.

**Steps:**
1. Write $MA^2$ and $MB^2$ in terms of $t$.
2. Set them equal; the $t^2$ terms cancel.

::solution
Since $M$ lies on the $x$-axis, $M(t, 0)$ for a real number $t$.

We have
$$MA^2=(t-1)^2+(0-3)^2=(t-1)^2+9,\qquad MB^2=(t-5)^2+(0-1)^2=(t-5)^2+1.$$

The point $M$ is equidistant from $A$ and $B$ if and only if $MA=MB$, that is, $MA^2=MB^2$ (both sides are non-negative). Expanding:
$$\begin{aligned}(t-1)^2+9&=(t-5)^2+1\\t^2-2t+10&=t^2-10t+26\\8t&=16\\t&=2.\end{aligned}$$

Check: for $M(2, 0)$ we have $MA=\sqrt{(2-1)^2+9}=\sqrt{10}$ and $MB=\sqrt{(2-5)^2+1}=\sqrt{10}$, so $MA=MB$.

So the required point is $M(2, 0)$.

**Answer.** $M(2, 0)$.
:::

:::exercise Challenge
Let $A(1, 3)$ and $B(5, 1)$. Find the point $M$ on the $x$-axis for which $|\overrightarrow{MA}+\overrightarrow{MB}|$ is smallest, and find that smallest value.

::hint
**What you need:** the midpoint formula $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$, where $I$ is the midpoint of $AB$.

**Steps:**
1. Find $I$; the problem becomes finding the point $M$ on the $x$-axis closest to $I$.
2. The closest point is the foot of the perpendicular from $I$ to the $x$-axis.

::solution
Let $I$ be the midpoint of $AB$. Then
$$I\left(\frac{1+5}{2},\ \frac{3+1}{2}\right)=I(3, 2).$$

For every point $M$, we have
$$\overrightarrow{MA}+\overrightarrow{MB}=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)+\left(\overrightarrow{MI}+\overrightarrow{IB}\right)=2\overrightarrow{MI}+\left(\overrightarrow{IA}+\overrightarrow{IB}\right)=2\overrightarrow{MI},$$
because $I$ is the midpoint of $AB$, so $\overrightarrow{IA}+\overrightarrow{IB}=\vec{0}$. Hence $\left|\overrightarrow{MA}+\overrightarrow{MB}\right|=2MI$.

So $\left|\overrightarrow{MA}+\overrightarrow{MB}\right|$ is smallest if and only if $MI$ is smallest.

Since $M$ lies on the $x$-axis, $M(t, 0)$. We have
$$MI^2=(t-3)^2+(0-2)^2=(t-3)^2+4\ge4,$$
with equality if and only if $t=3$. It follows that $MI\ge2$, and the smallest value of $MI$ is $2$, attained when $t=3$.

Therefore the smallest value of $\left|\overrightarrow{MA}+\overrightarrow{MB}\right|$ is $2\cdot2=4$, attained at $M(3, 0)$.

So $M(3, 0)$ and the smallest value of $\left|\overrightarrow{MA}+\overrightarrow{MB}\right|$ is $4$.

**Answer.** $M(3, 0)$; the smallest value is $4$.
:::

## Mini test

:::quiz
::mc NB
Let $A(2, -1)$ and $B(-1, 3)$. The coordinates of $\overrightarrow{AB}$ are
A. $(-3, 4)$.
B. $(3, -4)$.
C. $(1, 2)$.
D. $(-3, 2)$.
::key A
End minus start: $\overrightarrow{AB}=(-1-2,\ 3-(-1))=(-3, 4)$. Option B is $\overrightarrow{BA}$ (subtracting in the wrong order); option C adds the coordinates.

::mc NB
The length of the vector $\vec{a}=(-5, 12)$ is
A. $7$.
B. $13$.
C. $17$.
D. $\sqrt{119}$.
::key B
$|\vec{a}|=\sqrt{(-5)^2+12^2}=\sqrt{169}=13$. Options A and C simply add the coordinates; option D uses $144-25$.

::mc NB
The centroid of the triangle with vertices $A(1, 4)$, $B(3, -2)$, $C(5, 7)$ is
A. $G(4.5, 4.5)$.
B. $G(9, 9)$.
C. $G(3, 3)$.
D. $G(2, 1)$.
::key C
$G\left(\dfrac{1+3+5}{3},\ \dfrac{4-2+7}{3}\right)=G(3, 3)$. Option B forgets to divide, A divides by $2$ instead of $3$, and D is the midpoint of $AB$.

::mc TH
Which vector is collinear with $\vec{u}=(2, -3)$?
A. $(3, -2)$.
B. $(4, 6)$.
C. $(-2, -3)$.
D. $(-4, 6)$.
::key D
$(-4, 6)=-2(2, -3)$; check: $2\cdot6-(-4)\cdot(-3)=12-12=0$. Option A swaps the two coordinates; B and C get the sign of one coordinate wrong.

::tf NB TH NB VD
Let $A(0, 2)$, $B(4, 0)$, $C(6, 4)$.
a) $\overrightarrow{AB}=(4, -2)$.
b) $AC=2\sqrt5$.
c) The midpoint of $AC$ is $(3, 3)$.
d) If $ABCD$ is a parallelogram, then $D(10, 2)$.
::key T F T F
a) True: $(4-0,\ 0-2)$. b) False: $\overrightarrow{AC}=(6, 2)$, so $AC=\sqrt{40}=2\sqrt{10}$ ($2\sqrt5$ is $AB$). c) True: $\left(\dfrac{0+6}{2},\ \dfrac{2+4}{2}\right)$. d) False: $\overrightarrow{AB}=\overrightarrow{DC}$ gives $D(2, 6)$; the point $(10, 2)$ gives the parallelogram $ABDC$.

::sa TH
Find the distance between the points $A(-1, 2)$ and $B(5, -6)$.
::key 10
$\overrightarrow{AB}=(6, -8)$, so $AB=\sqrt{36+64}=\sqrt{100}=10$.

::sa VD
Let $A(2, 1)$ and $B(6, 4)$. The line $AB$ meets the $y$-axis at the point $M$. Find the $y$-coordinate of $M$.
::key -0.5
$M(0, t)$. We need $\overrightarrow{AM}=(-2,\ t-1)$ to be collinear with $\overrightarrow{AB}=(4, 3)$: $(-2)\cdot3-4(t-1)=0\iff 4t=-2\iff t=-0.5$.
:::
