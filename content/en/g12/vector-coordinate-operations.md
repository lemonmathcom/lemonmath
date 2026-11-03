---
title: Operations on vectors in coordinates
description: Add, subtract, scale vectors and take scalar products in Oxyz coordinates; find lengths and angles, test perpendicular and collinear vectors, solve geometry.
minutes: 24
---

:::goals
- Add, subtract and multiply vectors by a number using coordinates in space.
- Compute the scalar product (dot product) $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2$ and the length $|\vec{a}|$.
- Find the angle between two vectors; recognise perpendicular and collinear vectors.
- Use coordinates to find a vertex of a parallelogram, an angle of a triangle, and to prove perpendicularity.
:::

A camping tent has a vertical pole whose top is $3$ m above the ground. Two guy ropes run from the top of the pole down to two pegs in the ground. With the foot of the pole at the origin and the metre as unit, the top of the pole is $T(0, 0, 3)$ and the pegs are $P(2, -1, 0)$ and $Q(-1, 2, 0)$. What angle do the two ropes make with each other?

The previous lesson gave us coordinates of points and vectors. This lesson turns every vector operation, the scalar product included, into arithmetic on numbers, so the question above needs only a few multiplications and additions.

## Addition, subtraction and multiplication by a number

Since $\vec{a}=x_1\vec{i}+y_1\vec{j}+z_1\vec{k}$ and $\vec{b}=x_2\vec{i}+y_2\vec{j}+z_2\vec{k}$, we collect the terms with the same unit vector:
$$\vec{a}+\vec{b}=(x_1+x_2)\vec{i}+(y_1+y_2)\vec{j}+(z_1+z_2)\vec{k}.$$
The difference and the product with a number work the same way.

:::theorem Operations in coordinates
Let $\vec{a}=(x_1, y_1, z_1)$, $\vec{b}=(x_2, y_2, z_2)$ and let $k$ be a number. Then
- $\vec{a}+\vec{b}=(x_1+x_2,\ y_1+y_2,\ z_1+z_2)$, $\vec{a}-\vec{b}=(x_1-x_2,\ y_1-y_2,\ z_1-z_2)$;
- $k\vec{a}=(kx_1,\ ky_1,\ kz_1)$;
- for $\vec{a}\neq\vec{0}$: $\vec{b}$ is collinear with $\vec{a}$ if and only if there is a number $k$ with $\vec{b}=k\vec{a}$, that is $x_2=kx_1$, $y_2=ky_1$, $z_2=kz_1$.
:::

:::example Combining vectors
Let $\vec{a}=(1, -2, 3)$ and $\vec{b}=(2, 0, -1)$. Find $\vec{a}+\vec{b}$ and $2\vec{a}-3\vec{b}$.

**Solution.** We work coordinate by coordinate. For the second expression, multiply first, then subtract:

$$\vec{a}+\vec{b}=(3, -2, 2),\qquad 2\vec{a}=(2, -4, 6),\quad 3\vec{b}=(6, 0, -3),\quad 2\vec{a}-3\vec{b}=(-4, -4, 9).$$

So $\vec{a}+\vec{b}=(3, -2, 2)$ and $2\vec{a}-3\vec{b}=(-4, -4, 9)$.
:::

The collinearity condition gives a test for three points on a line: $A$, $B$, $C$ are collinear if and only if $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are collinear.

:::example Three collinear points and two collinear vectors
a) Prove that $A(1, 2, -1)$, $B(3, 1, 1)$, $C(7, -1, 5)$ are collinear.

b) Find $x$, $y$ such that $\vec{u}=(2, x, -4)$ and $\vec{v}=(-1, 3, y)$ are collinear.

**Solution.** a) We compare $\overrightarrow{AB}$ and $\overrightarrow{AC}$:

$$\overrightarrow{AB}=(2, -1, 2),\qquad \overrightarrow{AC}=(6, -3, 6)=3\overrightarrow{AB}.$$

The two vectors are collinear and share the point $A$, so $A$, $B$, $C$ are collinear.

b) The first coordinate of $\vec{v}$ is known and non-zero, so we find $k$ from it: $\vec{u}=k\vec{v}$ needs $2=k\cdot(-1)$, that is $k=-2$. The other two coordinates must match:

$$x=-2\cdot3=-6,\qquad -4=-2y\iff y=2.$$

So $x=-6$, $y=2$, and $\vec{u}=-2\vec{v}$.
:::

## The scalar product in coordinates

### Exploring: expanding with $\vec{i}$, $\vec{j}$, $\vec{k}$

Let us compute $(\vec{i}+2\vec{j})\cdot(3\vec{i}+\vec{k})$ by expanding. There are four products:
$$3\,\vec{i}\cdot\vec{i}+\vec{i}\cdot\vec{k}+6\,\vec{j}\cdot\vec{i}+2\,\vec{j}\cdot\vec{k}.$$
Since $\vec{i}\cdot\vec{i}=1$ while products of two different unit vectors are $0$, only $3$ is left. That is exactly $1\cdot3+2\cdot0+0\cdot1$: multiply the coordinates in the same position and add.

:::theorem Dot product, length, angle
Let $\vec{a}=(x_1, y_1, z_1)$ and $\vec{b}=(x_2, y_2, z_2)$. Then
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2,\qquad |\vec{a}|=\sqrt{x_1^2+y_1^2+z_1^2}.$$
For non-zero $\vec{a}$, $\vec{b}$:
$$\cos(\vec{a}, \vec{b})=\frac{x_1x_2+y_1y_2+z_1z_2}{\sqrt{x_1^2+y_1^2+z_1^2}\cdot\sqrt{x_2^2+y_2^2+z_2^2}},\qquad \vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2+z_1z_2=0.$$
:::

**Why is it true?** Expanding $\vec{a}\cdot\vec{b}$ as in the exploration gives nine products; the six products of two different unit vectors are $0$, and the remaining three are $x_1x_2$, $y_1y_2$, $z_1z_2$. Taking $\vec{b}=\vec{a}$ gives $|\vec{a}|^2=\vec{a}\cdot\vec{a}=x_1^2+y_1^2+z_1^2$.

:::example Dot product, angle and perpendicularity
Let $\vec{a}=(1, 2, 2)$, $\vec{b}=(2, -1, 2)$, $\vec{c}=(2, 1, -2)$. Find the angle $(\vec{a}, \vec{b})$ and prove that $\vec{a}\perp\vec{c}$.

**Solution.** Compute the scalar product and the two lengths:

$$\vec{a}\cdot\vec{b}=2-2+4=4,\qquad |\vec{a}|=\sqrt{1+4+4}=3,\qquad |\vec{b}|=\sqrt{4+1+4}=3.$$

Substitute into the angle formula:

$$\cos(\vec{a}, \vec{b})=\frac{4}{3\cdot3}=\frac49,\qquad (\vec{a}, \vec{b})\approx63.6^\circ.$$

Also $\vec{a}\cdot\vec{c}=2+2-4=0$, so $\vec{a}\perp\vec{c}$.

So $(\vec{a}, \vec{b})\approx63.6^\circ$ and $\vec{a}\perp\vec{c}$.
:::

Now we answer the tent question. The angle between the ropes is the angle between two vectors starting at the top of the pole.

:::diagram The tent pole and the two guy ropes
alt: The axes Oxyz; the tent pole stands on the axis Oz from O up to the top T, and two arrows go from T down to the pegs P and Q in the plane Oxy, with an angle arc at T
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 4,0 right "y"
point Z 0,4.2 left "z"
point T 0,3 right
point P -2.2,-1.2 below-left
point Q 2.6,0.6 below-right
arrow O X
arrow O Y
arrow O Z
segment O T
arrow T P
arrow T Q
angle P T Q
:::

:::example The angle between the guy ropes
With $T(0, 0, 3)$, $P(2, -1, 0)$, $Q(-1, 2, 0)$ (unit: metre), find the angle $\angle PTQ$ (to one decimal place of a degree) and the length of each rope.

**Solution.** The angle $\angle PTQ$ is the angle between $\overrightarrow{TP}$ and $\overrightarrow{TQ}$, two vectors with the common initial point $T$:

$$\overrightarrow{TP}=(2, -1, -3),\qquad \overrightarrow{TQ}=(-1, 2, -3),\qquad \overrightarrow{TP}\cdot\overrightarrow{TQ}=-2-2+9=5.$$

The two ropes have equal length:

$$TP=TQ=\sqrt{4+1+9}=\sqrt{14}\approx3.74,\qquad \cos\angle PTQ=\frac{5}{\sqrt{14}\cdot\sqrt{14}}=\frac{5}{14}.$$

So the ropes make an angle of about $69.1^\circ$, and each is about $3.74$ m long.

**Check.** $\cos\angle PTQ>0$, so the angle is acute, which fits the picture of two ropes both pointing down to the ground.
:::

## Solving geometry problems with coordinates

Once we have coordinates, many geometric questions become calculations: a parallelogram $ABCD$ needs $\overrightarrow{AD}=\overrightarrow{BC}$, and two perpendicular lines need a zero scalar product.

:::example The fourth vertex of a parallelogram
Let $A(1, 0, 2)$, $B(2, 3, -1)$, $C(0, 4, 1)$. Prove that $A$, $B$, $C$ are not collinear and find $D$ such that $ABCD$ is a parallelogram.

**Solution.** First, $\overrightarrow{AB}=(1, 3, -3)$ and $\overrightarrow{AC}=(-1, 4, -1)$. If $\overrightarrow{AC}=k\overrightarrow{AB}$, the first coordinate gives $k=-1$, but then the second needs $4=-3$, which is impossible. So the three points are not collinear.

Let $D(x, y, z)$. $ABCD$ is a parallelogram when $\overrightarrow{AD}=\overrightarrow{BC}$:

$$(x-1,\ y,\ z-2)=(-2, 1, 2)\iff x=-1,\ y=1,\ z=4.$$

So $D(-1, 1, 4)$.

**Check.** The midpoint of $AC$ is $\left(\frac12, 2, \frac32\right)$, the same as the midpoint of $BD$.
:::

The last example has more steps, so we follow the four stages.

:::example Diagonals of a cube
Let $ABCD.A'B'C'D'$ be a cube with edge $1$. Prove that $A'C\perp BD$ and find the angle between $\overrightarrow{A'C}$ and $\overrightarrow{AB}$.

**Solution.**

*Understand.* We need one scalar product equal to $0$ and one angle between two vectors in a cube.

*Plan.* Place the cube in $Oxyz$ with $A$ at the origin, $B$ on $Ox$, $D$ on $Oy$, $A'$ on $Oz$, and compute with coordinates.

*Solve.* We have $A(0, 0, 0)$, $B(1, 0, 0)$, $C(1, 1, 0)$, $D(0, 1, 0)$, $A'(0, 0, 1)$. Then:

$$\overrightarrow{A'C}=(1, 1, -1),\qquad \overrightarrow{BD}=(-1, 1, 0),\qquad \overrightarrow{A'C}\cdot\overrightarrow{BD}=-1+1+0=0.$$

So $A'C\perp BD$. With $\overrightarrow{AB}=(1, 0, 0)$:

$$\cos(\overrightarrow{A'C}, \overrightarrow{AB})=\frac{1}{\sqrt3\cdot1}=\frac{1}{\sqrt3}\approx0.577,\qquad (\overrightarrow{A'C}, \overrightarrow{AB})\approx54.7^\circ.$$

*Look back.* The coordinate system turns a proof in solid geometry into a three-line calculation. The key step is placing the figure so that many coordinates are $0$.
:::

:::warning Common mistakes
- **Treating the scalar product as a vector.** Wrong: $(1, 2, 2)\cdot(2, -1, 2)=(2, -2, 4)$. Why it is wrong: the scalar product is a number. Right: $2-2+4=4$.
- **Forgetting the square root for a length.** Wrong: $|(1, 2, 2)|=1+4+4=9$. Right: $|(1, 2, 2)|=\sqrt9=3$.
- **Testing collinearity with ratios when a coordinate is $0$.** For $(0, 2, 4)$ and $(0, 1, 2)$ the ratio $\frac00$ is meaningless. Right: find $k$ from a non-zero coordinate: $(0, 2, 4)=2(0, 1, 2)$, so the vectors are collinear.
- **Taking the angle between vectors that do not share a starting point.** Wrong: using $\overrightarrow{PT}$ and $\overrightarrow{TQ}$ to find $\angle PTQ$. Why it is wrong: $\overrightarrow{PT}=-\overrightarrow{TP}$ changes the sign of the cosine and gives $180^\circ-69.1^\circ$. Right: use $\overrightarrow{TP}$ and $\overrightarrow{TQ}$.
:::

## Key terms

:::terms
- component form | biểu thức toạ độ
- scalar product (dot product) | tích vô hướng
- length of a vector | độ dài của vectơ
- angle between two vectors | góc giữa hai vectơ
- perpendicular vectors | hai vectơ vuông góc
- parallel (collinear) vectors | hai vectơ cùng phương
- collinear points | ba điểm thẳng hàng
- parallelogram | hình bình hành
:::

## Summary

- Add, subtract, multiply by a number: work on each coordinate.
- $\vec{b}$ is collinear with $\vec{a}\neq\vec{0}$ $\iff$ $\vec{b}=k\vec{a}$; $A$, $B$, $C$ are collinear $\iff$ $\overrightarrow{AB}$, $\overrightarrow{AC}$ are collinear.
- $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2$ (a number); $|\vec{a}|=\sqrt{x_1^2+y_1^2+z_1^2}$.
- $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$; $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.
- The angle $\angle BAC$ of a triangle is the angle between $\overrightarrow{AB}$ and $\overrightarrow{AC}$.
- Parallelogram $ABCD$: $\overrightarrow{AD}=\overrightarrow{BC}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Let $\vec{u}=(2, -1, 3)$ and $\vec{v}=(-1, 4, 0)$. Find $\vec{u}+\vec{v}$, $3\vec{u}-2\vec{v}$ and $\vec{u}\cdot\vec{v}$.

::hint
**What you need:** add, subtract and multiply by a number coordinate by coordinate; $\vec{u}\cdot\vec{v}=x_1x_2+y_1y_2+z_1z_2$.

**Steps:**
1. Compute $3\vec{u}$ and $2\vec{v}$ first.
2. Multiply coordinates in the same position and add.

::solution
$\vec{u}+\vec{v}=(1, 3, 3)$. $3\vec{u}=(6, -3, 9)$, $2\vec{v}=(-2, 8, 0)$, so $3\vec{u}-2\vec{v}=(8, -11, 9)$. $\vec{u}\cdot\vec{v}=-2-4+0=-6$.

**Answer.** $(1, 3, 3)$; $(8, -11, 9)$; $-6$.
:::

:::exercise
Let $\vec{a}=(2, -3, 6)$. Find $|\vec{a}|$ and the vector $\vec{e}$ with the same direction as $\vec{a}$ and length $1$.

::hint
**What you need:** $|\vec{a}|=\sqrt{x^2+y^2+z^2}$; $\dfrac{1}{|\vec{a}|}\vec{a}$ has the same direction as $\vec{a}$ and length $1$.

**Steps:**
1. Compute $|\vec{a}|$.
2. Divide each coordinate by $|\vec{a}|$.

::solution
$|\vec{a}|=\sqrt{4+9+36}=7$, so $\vec{e}=\dfrac17\vec{a}=\left(\dfrac27, -\dfrac37, \dfrac67\right)$.

**Answer.** $|\vec{a}|=7$; $\vec{e}=\left(\dfrac27, -\dfrac37, \dfrac67\right)$.
:::

:::exercise
Find the angle between the vectors $\vec{a}=(1, 1, 0)$ and $\vec{b}=(0, 1, 1)$.

::hint
**What you need:** $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$.

**Steps:**
1. Compute $\vec{a}\cdot\vec{b}$, $|\vec{a}|$, $|\vec{b}|$.
2. Find the angle with that cosine.

::solution
$$\vec{a}\cdot\vec{b}=0+1+0=1,\qquad |\vec{a}|=|\vec{b}|=\sqrt2,\qquad \cos(\vec{a}, \vec{b})=\frac{1}{2}.$$

**Answer.** $60^\circ$.
:::

:::exercise
Among the three vectors $\vec{u}=(1, 2, -1)$, $\vec{v}=(3, -1, 1)$, $\vec{w}=(1, 1, 3)$, which pairs are perpendicular?

::hint
**What you need:** $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.

**Steps:**
1. Compute the three scalar products $\vec{u}\cdot\vec{v}$, $\vec{u}\cdot\vec{w}$, $\vec{v}\cdot\vec{w}$.
2. Pick those equal to $0$.

::solution
$\vec{u}\cdot\vec{v}=3-2-1=0$, $\vec{u}\cdot\vec{w}=1+2-3=0$, $\vec{v}\cdot\vec{w}=3-1+3=5$.

**Answer.** $\vec{u}\perp\vec{v}$ and $\vec{u}\perp\vec{w}$; $\vec{v}$ and $\vec{w}$ are not perpendicular.
:::

:::exercise
Find $x$, $y$ such that the vectors $\vec{a}=(1, x, 3)$ and $\vec{b}=(-2, 4, y)$ are collinear.

::hint
**What you need:** $\vec{b}$ is collinear with $\vec{a}$ $\iff$ $\vec{b}=k\vec{a}$.

**Steps:**
1. Find $k$ from the x-coordinates: $-2=k\cdot1$.
2. Use $k$ for the other two coordinates.

::solution
$k=-2$. Then $4=-2x$, so $x=-2$, and $y=-2\cdot3=-6$.

**Answer.** $x=-2$, $y=-6$.
:::

:::exercise
Let $A(3, 2, -1)$, $B(1, 1, 1)$, $C(2, 3, 3)$. Prove that triangle $ABC$ has a right angle at $B$ and find its area.

::hint
**What you need:** right angle at $B$ $\iff$ $\overrightarrow{BA}\cdot\overrightarrow{BC}=0$; the area of a right-angled triangle is half the product of the two shorter sides.

**Steps:**
1. Find $\overrightarrow{BA}$, $\overrightarrow{BC}$ and their scalar product.
2. Find $BA$, $BC$.

::solution
$$\overrightarrow{BA}=(2, 1, -2),\quad \overrightarrow{BC}=(1, 2, 2),\quad \overrightarrow{BA}\cdot\overrightarrow{BC}=2+2-4=0.$$
$BA=BC=3$, so $S=\dfrac12\cdot3\cdot3=4.5$.

**Answer.** The triangle is right-angled (and isosceles) at $B$; $S=4.5$.
:::

:::exercise
Let $\vec{a}=(1, -2, 2)$ and $\vec{b}=(2, 2, 1)$. Is each claim true or false?

a) $|\vec{a}|=3$.

b) $\vec{a}\perp\vec{b}$.

c) $\vec{a}-\vec{b}=(-1, -4, 3)$.

d) $|\vec{a}+\vec{b}|=6$.

::hint
**What you need:** the formulas for length, scalar product and subtraction in coordinates.

**Steps:**
1. Compute $|\vec{a}|$ and $\vec{a}\cdot\vec{b}$.
2. Subtract coordinate by coordinate.
3. Compute $\vec{a}+\vec{b}$ and its length.

::solution
a) **True.** $|\vec{a}|=\sqrt{1+4+4}=3$.

b) **True.** $\vec{a}\cdot\vec{b}=2-4+2=0$.

c) **False.** $\vec{a}-\vec{b}=(1-2,\ -2-2,\ 2-1)=(-1, -4, 1)$.

d) **False.** $\vec{a}+\vec{b}=(3, 0, 3)$, so $|\vec{a}+\vec{b}|=\sqrt{18}=3\sqrt2\approx4.24$.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
A person pulls a sledge with the force $\vec{F}=(10, 5, -2)$ (unit: N). The sledge moves along the displacement $\vec{d}=(3, 4, 0)$ (unit: m). Find the angle between the pulling force and the direction of motion (in degrees, rounded to the nearest whole number).

::hint
**What you need:** $\cos(\vec{F}, \vec{d})=\dfrac{\vec{F}\cdot\vec{d}}{|\vec{F}||\vec{d}|}$; in physics, $\vec{F}\cdot\vec{d}$ is the work done by the force (unit: J).

**Steps:**
1. Compute $\vec{F}\cdot\vec{d}$.
2. Compute $|\vec{F}|$, $|\vec{d}|$ and the cosine of the angle.

::solution
$$\vec{F}\cdot\vec{d}=30+20+0=50,\qquad |\vec{F}|=\sqrt{100+25+4}=\sqrt{129},\qquad |\vec{d}|=5.$$
$$\cos(\vec{F}, \vec{d})=\frac{50}{5\sqrt{129}}=\frac{10}{\sqrt{129}}\approx0.880,\qquad (\vec{F}, \vec{d})\approx28.3^\circ.$$
(The work done by the force is $50$ J.)

**Answer.** $28$.
:::

:::exercise
(Revisiting [Vectors and their operations in space](lesson:vectors-in-space).) In the previous lesson, by decomposing vectors, we found that the angle between $\overrightarrow{AC}$ and $\overrightarrow{A'D}$ in the cube $ABCD.A'B'C'D'$ is $60^\circ$. Find it again with coordinates, for the cube with edge $1$, $A$ at the origin, $B(1, 0, 0)$, $D(0, 1, 0)$, $A'(0, 0, 1)$.

::hint
**What you need:** the coordinates of the vertices of the cube; the cosine formula for the angle.

**Steps:**
1. Write $C(1, 1, 0)$ and find $\overrightarrow{AC}$, $\overrightarrow{A'D}$.
2. Compute the cosine.

::solution
$$\overrightarrow{AC}=(1, 1, 0),\qquad \overrightarrow{A'D}=(0, 1, -1),\qquad \cos=\frac{0+1+0}{\sqrt2\cdot\sqrt2}=\frac12.$$

**Answer.** $60^\circ$, the same as in the previous lesson.
:::

:::exercise Challenge
Let $A(2, 1, 1)$ and $B(4, -1, 1)$. Find the points $M$ on the axis $Ox$ such that triangle $MAB$ has a right angle at $M$.

::hint
**What you need:** a point on $Ox$ has the form $M(t, 0, 0)$; right angle at $M$ $\iff$ $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$.

**Steps:**
1. Write $\overrightarrow{MA}$, $\overrightarrow{MB}$ in terms of $t$.
2. Set the scalar product equal to $0$ and solve.

::solution
$\overrightarrow{MA}=(2-t, 1, 1)$, $\overrightarrow{MB}=(4-t, -1, 1)$.
$$(2-t)(4-t)-1+1=0\iff(2-t)(4-t)=0\iff t=2\ \text{or}\ t=4.$$
**Check.** For $M(2, 0, 0)$: $(0, 1, 1)\cdot(2, -1, 1)=0$. For $M(4, 0, 0)$: $(-2, 1, 1)\cdot(0, -1, 1)=0$.

**Answer.** $M(2, 0, 0)$ or $M(4, 0, 0)$.
:::

## Mini test

:::quiz
::mc
In the system $Oxyz$, let $\vec{a}=(2, -1, 3)$ and $\vec{b}=(1, 0, -2)$. The coordinates of $\vec{a}-2\vec{b}$ are
A. $(0, -1, -1)$.
B. $(0, -1, 7)$.
C. $(4, -1, -1)$.
D. $(1, -1, 5)$.
::key B
$2\vec{b}=(2, 0, -4)$, so $\vec{a}-2\vec{b}=(0, -1, 3+4)=(0, -1, 7)$. Option A gets the sign wrong when subtracting $-4$, option C is $\vec{a}+2\vec{b}$, and option D forgets to multiply $\vec{b}$ by $2$.

::mc
Let $\vec{u}=(3, -2, 1)$ and $\vec{v}=(1, 4, -2)$. The scalar product $\vec{u}\cdot\vec{v}$ is
A. $7$.
B. $(3, -8, -2)$.
C. $-7$.
D. $-3$.
::key C
$\vec{u}\cdot\vec{v}=3\cdot1+(-2)\cdot4+1\cdot(-2)=3-8-2=-7$. Option B writes the scalar product as a vector, and option D gets the sign of $1\cdot(-2)$ wrong.

::mc
Which vector is perpendicular to $\vec{a}=(1, 2, -2)$?
A. $(1, 2, 2)$.
B. $(2, -1, 2)$.
C. $(-2, -4, 4)$.
D. $(2, 1, 2)$.
::key D
$(1, 2, -2)\cdot(2, 1, 2)=2+2-4=0$. Option C equals $-2\vec{a}$, which is parallel to $\vec{a}$, not perpendicular; A and B give scalar products $1$ and $-4$.

::mc
The angle between the vectors $\vec{a}=(1, 0, 1)$ and $\vec{b}=(-1, 1, 0)$ is
A. $120^\circ$.
B. $60^\circ$.
C. $45^\circ$.
D. $150^\circ$.
::key A
$\cos(\vec{a}, \vec{b})=\dfrac{-1+0+0}{\sqrt2\cdot\sqrt2}=-\dfrac12$, so the angle is $120^\circ$. Option B ignores the minus sign of the scalar product.

::tf
In the system $Oxyz$, let $A(1, 0, 2)$, $B(3, 1, 0)$, $C(0, 2, 2)$.
a) $\overrightarrow{AB}=(2, 1, -2)$.
b) Triangle $ABC$ has a right angle at $A$.
c) The area of triangle $ABC$ is $3\sqrt5$.
d) The angle $\angle ABC$ is greater than $30^\circ$.
::key T T F T
a) True. b) True: $\overrightarrow{AC}=(-1, 2, 0)$ and $\overrightarrow{AB}\cdot\overrightarrow{AC}=-2+2+0=0$. c) False: $AB=3$ and $AC=\sqrt5$, so the area is $\dfrac12\cdot3\sqrt5=\dfrac{3\sqrt5}{2}$. d) True: $\overrightarrow{BA}=(-2, -1, 2)$, $\overrightarrow{BC}=(-3, 1, 2)$, $\cos\angle ABC=\dfrac{9}{3\sqrt{14}}\approx0.80$, so the angle is about $36.7^\circ$.

::sa
Let $A(1, 2, -1)$, $B(3, 0, 1)$ and $C(x, y, 5)$. Given that $A$, $B$, $C$ are collinear, find $x+y$.
::key 3
$\overrightarrow{AB}=(2, -2, 2)$ and $\overrightarrow{AC}=(x-1, y-2, 6)=k\overrightarrow{AB}$. The z-coordinates give $6=2k$, $k=3$, so $x=7$, $y=-4$ and $x+y=3$.

::sa
A force $\vec{F}=(4, -2, 3)$ (unit: N) moves an object from $M(1, 0, 0)$ to $N(5, 3, 2)$ (unit: m). Find the angle between the force $\vec{F}$ and the direction of motion $\overrightarrow{MN}$, in degrees, to 1 decimal place.
::key 56.5
$\overrightarrow{MN}=(4, 3, 2)$, $\vec{F}\cdot\overrightarrow{MN}=16-6+6=16$, and $|\vec{F}|=|\overrightarrow{MN}|=\sqrt{29}$. So $\cos=\dfrac{16}{29}$ and the angle is about $56.51^\circ$, which rounds to $56.5$.
:::
