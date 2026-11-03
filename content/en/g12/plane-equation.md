---
title: The equation of a plane
description: Normal vectors, the Cartesian equation of a plane, the plane through three points, parallel and perpendicular planes, and the distance from a point to a plane.
minutes: 26
---

:::goals
- Recognise a normal vector and a pair of direction vectors of a plane.
- Write the equation of a plane through a point with a given normal vector, through three points, and in intercept form.
- Recognise special planes; decide whether two planes are parallel or perpendicular.
- Find the distance from a point to a plane.
:::

A triangular shade sail is stretched between three points: two pegs in the ground and a hook on a pole in the corner of a yard. With the foot of the pole at the origin and the metre as unit, the corners of the sail are $A(3, 0, 0)$, $B(0, 6, 0)$ and $C(0, 0, 3)$. A filming drone hovers at $M(3, 6, 3)$. How far is the drone from the plane of the sail?

To answer, we need an equation that describes every point of the plane $(ABC)$. This lesson gives us that equation and a distance formula that takes only a few calculations.

:::diagram The shade sail $ABC$
alt: The axes Oxyz; the triangular sail ABC has A on the x-axis, B on the y-axis and C on the z-axis
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 5.2,0 right "y"
point Z 0,3.6 left "z"
point A -1.5,-1.5 left
point B 4.2,0 below
point C 0,2.4 left
arrow O X
arrow O Y
arrow O Z
polygon A B C
:::

## Normal vectors of a plane

### Exploring: a vector perpendicular to the sail

We have $\overrightarrow{AB}=(-3, 6, 0)$ and $\overrightarrow{AC}=(-3, 0, 3)$. Try the vector $\vec{n}=(2, 1, 2)$:
$$\vec{n}\cdot\overrightarrow{AB}=-6+6+0=0,\qquad \vec{n}\cdot\overrightarrow{AC}=-6+0+6=0.$$
So $\vec{n}$ is perpendicular to two non-parallel edges of the sail, hence to the whole sail. A point $P(x, y, z)$ lies in the plane $(ABC)$ exactly when $\overrightarrow{AP}\perp\vec{n}$, that is
$$2(x-3)+1\cdot(y-0)+2(z-0)=0\iff 2x+y+2z-6=0.$$

:::definition Normal vector, pair of direction vectors
- A vector $\vec{n}\neq\vec{0}$ is a **normal vector** of the plane $(P)$ if its line is perpendicular to $(P)$.
- Two **non-parallel** vectors $\vec{u}$, $\vec{v}$ form a **pair of direction vectors** of $(P)$ if their lines are parallel to $(P)$ or lie in it.
- If $\vec{n}$ is a normal vector, then so is $k\vec{n}$ ($k\neq0$).
:::

When we only know a pair of direction vectors, we need a quick way to find a vector perpendicular to both.

:::theorem A normal vector from a pair of direction vectors
If $\vec{u}=(a, b, c)$ and $\vec{v}=(a', b', c')$ are a pair of direction vectors of $(P)$, then
$$\vec{n}=\vec{u}\times\vec{v}=(bc'-b'c,\ ca'-c'a,\ ab'-a'b)$$
is a normal vector of $(P)$. This vector is called the **cross product** (vector product) of $\vec{u}$ and $\vec{v}$.
:::

**Why is it true?** Take the scalar product with $\vec{u}$: $a(bc'-b'c)+b(ca'-c'a)+c(ab'-a'b)=0$, because the terms cancel in pairs. In the same way $\vec{n}\cdot\vec{v}=0$. Since $\vec{u}$, $\vec{v}$ are not parallel, $\vec{n}\neq\vec{0}$.

**How to remember it.** Write the coordinates of $\vec{u}$ on top and $\vec{v}$ below. For the first coordinate, cover the first column and work out the remaining $2\times2$ determinant; for the second, cover the second column and cross-multiply *column 3 with column 1*; for the third, cover the third column.

## The Cartesian equation of a plane

:::theorem Equation of a plane
The plane through $M_0(x_0, y_0, z_0)$ with normal vector $\vec{n}=(A, B, C)$ has equation
$$A(x-x_0)+B(y-y_0)+C(z-z_0)=0.$$
Conversely, every equation $Ax+By+Cz+D=0$ with $A^2+B^2+C^2>0$ is the equation of a plane with normal vector $\vec{n}=(A, B, C)$. This is called the **Cartesian (general) equation** of the plane.
:::

**Why is it true?** A point $M(x, y, z)$ lies in the plane exactly when $\overrightarrow{M_0M}=(x-x_0, y-y_0, z-z_0)$ is perpendicular to $\vec{n}$, that is, when their scalar product is $0$. Expanding gives the form $Ax+By+Cz+D=0$ with $D=-(Ax_0+By_0+Cz_0)$.

:::example A point and a normal vector
Write the equation of the plane $(P)$ through $M(1, -2, 3)$ with normal vector $\vec{n}=(2, -1, 4)$.

**Solution.** Substitute the point and the normal vector into the formula. Note that $y-(-2)=y+2$:

$$2(x-1)-(y+2)+4(z-3)=0\iff 2x-y+4z-16=0.$$

So $(P): 2x-y+4z-16=0$.

**Check.** Substituting $M$: $2+2+12-16=0$.
:::

When we are given three points, we build a pair of direction vectors from them.

:::example The plane through three points
Write the equation of the plane through $A(1, 2, 0)$, $B(2, 0, 1)$, $C(0, 1, 3)$.

**Solution.** The vectors $\overrightarrow{AB}$, $\overrightarrow{AC}$ are a pair of direction vectors; their cross product is a normal vector:

$$\overrightarrow{AB}=(1, -2, 1),\qquad \overrightarrow{AC}=(-1, -1, 3),$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=\big((-2)\cdot3-(-1)\cdot1,\ 1\cdot(-1)-3\cdot1,\ 1\cdot(-1)-(-1)\cdot(-2)\big)=(-5, -4, -3).$$

We choose the neater $\vec{n}=(5, 4, 3)$ and use the point $A$:

$$5(x-1)+4(y-2)+3z=0\iff 5x+4y+3z-13=0.$$

So $(ABC): 5x+4y+3z-13=0$.

**Check.** $B$: $10+0+3-13=0$; $C$: $0+4+9-13=0$.
:::

### Special planes

Consider $(P): Ax+By+Cz+D=0$.
- $D=0$: $(P)$ passes through the origin $O$.
- $A=0$: $\vec{n}=(0, B, C)$ is perpendicular to $\vec{i}$, so $(P)$ is parallel to the axis $Ox$ or contains it. Likewise for $B=0$ (axis $Oy$) and $C=0$ (axis $Oz$).
- $A=B=0$: $(P): z=z_0$ is parallel to the plane $(Oxy)$ or equal to it. The three coordinate planes are $(Oxy): z=0$, $(Oyz): x=0$, $(Ozx): y=0$.
- A plane meeting the three axes at $(a, 0, 0)$, $(0, b, 0)$, $(0, 0, c)$ with $abc\neq0$ has the **intercept form**
$$\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1.$$

For the sail, $a=3$, $b=6$, $c=3$, so $\dfrac{x}{3}+\dfrac{y}{6}+\dfrac{z}{3}=1$; multiplying both sides by $6$ gives $2x+y+2z-6=0$ again.

:::example A plane parallel to $(Oxy)$, a plane containing $Ox$
Let $M(2, -1, 3)$. Write the equation of the plane through $M$ that is a) parallel to $(Oxy)$; b) contains the axis $Ox$.

**Solution.** a) A plane parallel to $(Oxy)$ has the form $z=z_0$. It passes through $M$, so it is $z=3$.

b) A plane containing $Ox$ passes through $O$ and has $A=0$, so it has the form $By+Cz=0$. Substitute $M$:

$$B\cdot(-1)+C\cdot3=0\iff B=3C.$$

Choose $C=1$, $B=3$. So the two planes are $z=3$ and $3y+z=0$.
:::

## Parallel and perpendicular planes

Two parallel planes have parallel normal vectors. Two perpendicular planes have perpendicular normal vectors.

:::theorem Two planes
Let $(P): Ax+By+Cz+D=0$ and $(P'): A'x+B'y+C'z+D'=0$ with normal vectors $\vec{n}$, $\vec{n'}$.
- $(P)\parallel(P')$ if and only if $\vec{n'}=k\vec{n}$ and $D'\neq kD$; if also $D'=kD$, the two planes coincide.
- $(P)\perp(P')$ if and only if $\vec{n}\cdot\vec{n'}=AA'+BB'+CC'=0$.
:::

:::example A parallel plane and a perpendicular plane
a) Write the equation of the plane through $M(1, 2, 3)$ parallel to $(Q): 2x-3y+z+5=0$.

b) Write the equation of the plane $(R)$ through $A(1, 0, 1)$, $B(2, 1, 0)$ perpendicular to $(S): x+y+z-3=0$.

**Solution.** a) A plane parallel to $(Q)$ has the form $2x-3y+z+D=0$. Substitute $M$:

$$2-6+3+D=0\iff D=1.$$

Since $D=1\neq5$, the plane $2x-3y+z+1=0$ does not coincide with $(Q)$.

b) $(R)$ contains the line $AB$ and the direction of $\vec{n}_S$ (because it is perpendicular to $(S)$), so $\overrightarrow{AB}=(1, 1, -1)$ and $\vec{n}_S=(1, 1, 1)$ are a pair of direction vectors:

$$\overrightarrow{AB}\times\vec{n}_S=\big(1\cdot1-1\cdot(-1),\ (-1)\cdot1-1\cdot1,\ 1\cdot1-1\cdot1\big)=(2, -2, 0).$$

Choose $\vec{n}=(1, -1, 0)$ and the point $A$: $(x-1)-y=0$.

So a) $2x-3y+z+1=0$; b) $(R): x-y-1=0$.

**Check.** $B$: $2-1-1=0$; $\vec{n}\cdot\vec{n}_S=1-1+0=0$.
:::

## The distance from a point to a plane

:::theorem Distance formula
The distance from $M_0(x_0, y_0, z_0)$ to $(P): Ax+By+Cz+D=0$ is
$$d(M_0, (P))=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.$$
:::

**Why is it true?** Let $H$ be the orthogonal projection of $M_0$ on $(P)$. Then $\overrightarrow{HM_0}=t\vec{n}$ for some number $t$, and $M_0H=|t|\cdot|\vec{n}|$. Since $H$ lies in $(P)$, substituting $H=M_0-t\vec{n}$ into the equation gives $Ax_0+By_0+Cz_0+D=t(A^2+B^2+C^2)$. Solving for $t$ and multiplying by $|\vec{n}|=\sqrt{A^2+B^2+C^2}$ gives the formula.

:::example The drone and the sail
Find the distance from the drone $M(3, 6, 3)$ to the plane of the sail $(ABC): 2x+y+2z-6=0$ (unit: metre).

**Solution.** Substitute the coordinates of $M$ into the left-hand side, then divide by the length of the normal vector:

$$d(M, (ABC))=\frac{|2\cdot3+6+2\cdot3-6|}{\sqrt{2^2+1^2+2^2}}=\frac{12}{3}=4.$$

So the drone is $4$ m from the plane of the sail.
:::

The last example has more steps, so we follow the four stages.

:::diagram The cube and the plane $(A'BD)$
alt: The cube ABCD.A'B'C'D' in oblique projection with the triangle A'BD shaded and hidden edges dashed
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
polygon A' B D
:::

:::example A distance in a cube
Let $ABCD.A'B'C'D'$ be a cube with edge $2$. Find the distance from $A$ to the plane $(A'BD)$ (to 2 decimal places).

**Solution.**

*Understand.* We need the distance from one vertex to a plane through three other vertices.

*Plan.* Put $A$ at the origin, $B$ on $Ox$, $D$ on $Oy$, $A'$ on $Oz$. The points $B$, $D$, $A'$ lie on the three axes, so we use the intercept form.

*Solve.* $B(2, 0, 0)$, $D(0, 2, 0)$, $A'(0, 0, 2)$, so

$$(A'BD): \frac{x}{2}+\frac{y}{2}+\frac{z}{2}=1\iff x+y+z-2=0,\qquad d(A, (A'BD))=\frac{|0+0+0-2|}{\sqrt{3}}=\frac{2}{\sqrt3}\approx1.15.$$

*Look back.* A clever choice of axes makes the plane meet the three axes exactly at three vertices, so no cross product is needed.
:::

:::warning Common mistakes
- **A wrong sign when substituting the point.** Wrong: the plane through $M(1, -2, 3)$ with $\vec{n}=(2, -1, 4)$ written as $2(x-1)-(y-2)+4(z-3)=0$. Why it is wrong: $y-y_0=y-(-2)=y+2$. Right: $2(x-1)-(y+2)+4(z-3)=0$.
- **Forgetting $D$ or the square root in the distance formula.** Wrong: $d(M, (ABC))=\dfrac{|6+6+6|}{3}=6$ or $\dfrac{12}{9}$. Why it is wrong: the numerator is the whole left-hand side $Ax_0+By_0+Cz_0+D$, and the denominator is $\sqrt{A^2+B^2+C^2}$. Right: $\dfrac{12}{3}=4$.
- **The distance between parallel planes when the coefficients do not match.** Take $(P): 2x-y+2z+1=0$ and $(Q): 4x-2y+4z-10=0$. Wrong: $\dfrac{|1-(-10)|}{3}=\dfrac{11}{3}$. Why it is wrong: the normal vectors $(2, -1, 2)$ and $(4, -2, 4)$ are not equal. Right: take the point $E(0, 0, 2.5)$ of $(Q)$; then $d(E, (P))=\dfrac{|5+1|}{3}=2$.
- **Confusing a plane containing an axis with a coordinate plane.** Wrong: the plane containing $Ox$ is $x=0$. Why it is wrong: $x=0$ is the plane $(Oyz)$, which is perpendicular to $Ox$. Right: a plane containing $Ox$ has the form $By+Cz=0$.
:::

## Key terms

:::terms
- plane | mặt phẳng
- normal vector | vectơ pháp tuyến
- pair of direction vectors | cặp vectơ chỉ phương
- cross product (vector product) | tích có hướng
- Cartesian (general) equation of a plane | phương trình tổng quát của mặt phẳng
- intercept form of a plane | phương trình mặt phẳng theo đoạn chắn
- coordinate plane | mặt phẳng toạ độ
- parallel planes | hai mặt phẳng song song
- perpendicular planes | hai mặt phẳng vuông góc
- distance from a point to a plane | khoảng cách từ điểm đến mặt phẳng
:::

## Summary

- The plane through $M_0(x_0, y_0, z_0)$ with normal vector $\vec{n}=(A, B, C)$: $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.
- $Ax+By+Cz+D=0$ has normal vector $(A, B, C)$.
- Direction vectors $\vec{u}=(a, b, c)$, $\vec{v}=(a', b', c')$ give $\vec{n}=\vec{u}\times\vec{v}=(bc'-b'c,\ ca'-c'a,\ ab'-a'b)$.
- Intercept form: $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$; $(Oxy): z=0$, $(Oyz): x=0$, $(Ozx): y=0$.
- Parallel: $\vec{n'}=k\vec{n}$, $D'\neq kD$. Perpendicular: $\vec{n}\cdot\vec{n'}=0$.
- $d(M_0, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Write the equation of the plane through $M(2, 1, -1)$ with normal vector $\vec{n}=(1, -3, 2)$.

::hint
**What you need:** $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.

**Steps:**
1. Substitute $x_0=2$, $y_0=1$, $z_0=-1$ and $A=1$, $B=-3$, $C=2$.
2. Expand and simplify.

::solution
$$(x-2)-3(y-1)+2(z+1)=0\iff x-3y+2z+3=0.$$
Check with $M$: $2-3-2+3=0$.

**Answer.** $x-3y+2z+3=0$.
:::

:::exercise
Let $A(1, 2, 3)$ and $B(3, 0, 5)$. Write the equation of the perpendicular bisector plane of $AB$ (the plane perpendicular to $AB$ through its midpoint).

::hint
**What you need:** the perpendicular bisector plane passes through the midpoint $I$ of $AB$ and has normal vector $\overrightarrow{AB}$.

**Steps:**
1. Find $I$ and $\overrightarrow{AB}$.
2. Simplify the normal vector and write the equation.

::solution
$I(2, 1, 4)$, $\overrightarrow{AB}=(2, -2, 2)=2(1, -1, 1)$. Choose $\vec{n}=(1, -1, 1)$:
$$(x-2)-(y-1)+(z-4)=0\iff x-y+z-5=0.$$

**Answer.** $x-y+z-5=0$.
:::

:::exercise
Write the equation of the plane through $A(2, 1, -1)$, $B(3, 0, 1)$, $C(1, 3, 0)$.

::hint
**What you need:** $\vec{n}=\overrightarrow{AB}\times\overrightarrow{AC}$ is a normal vector of $(ABC)$.

**Steps:**
1. Find $\overrightarrow{AB}$, $\overrightarrow{AC}$.
2. Compute the cross product, then write the equation through $A$.

::solution
$\overrightarrow{AB}=(1, -1, 2)$, $\overrightarrow{AC}=(-1, 2, 1)$.
$$\overrightarrow{AB}\times\overrightarrow{AC}=\big((-1)\cdot1-2\cdot2,\ 2\cdot(-1)-1\cdot1,\ 1\cdot2-(-1)\cdot(-1)\big)=(-5, -3, 1).$$
Choose $\vec{n}=(5, 3, -1)$: $5(x-2)+3(y-1)-(z+1)=0\iff 5x+3y-z-14=0$.
Check with $C$: $5+9-0-14=0$.

**Answer.** $5x+3y-z-14=0$.
:::

:::exercise
A plane meets the axes $Ox$, $Oy$, $Oz$ at $(2, 0, 0)$, $(0, -3, 0)$, $(0, 0, 6)$ respectively. Write its Cartesian equation.

::hint
**What you need:** the intercept form $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$.

**Steps:**
1. Substitute $a=2$, $b=-3$, $c=6$.
2. Multiply both sides by $6$ to clear the fractions.

::solution
$$\frac{x}{2}+\frac{y}{-3}+\frac{z}{6}=1\iff 3x-2y+z-6=0.$$

**Answer.** $3x-2y+z-6=0$.
:::

:::exercise
Let $(P): 2x-y+2z-3=0$. Is each claim true or false?

a) $\vec{n}=(2, -1, 2)$ is a normal vector of $(P)$.

b) The point $M(1, 2, 1)$ lies in $(P)$.

c) $(P)$ is parallel to the plane $(Q): 4x-2y+4z+1=0$.

d) The distance from $O$ to $(P)$ is $3$.

::hint
**What you need:** the normal vector $(A, B, C)$; the parallel condition $\vec{n'}=k\vec{n}$, $D'\neq kD$; the distance formula.

**Steps:**
1. Read off the normal vector and substitute $M$.
2. Compare the coefficients of $(P)$ and $(Q)$.
3. Compute $d(O, (P))$.

::solution
a) **True.** The coefficients of $x$, $y$, $z$ are $2$, $-1$, $2$.

b) **False.** $2-2+2-3=-1\neq0$.

c) **True.** $(4, -2, 4)=2(2, -1, 2)$ but $1\neq2\cdot(-3)$.

d) **False.** $d(O, (P))=\dfrac{|-3|}{\sqrt{4+1+4}}=1$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
A hillside is modelled by the plane $(P): x+2y+2z-30=0$ (unit: metre). A survey drone is at $M(10, 20, 25)$. Find the distance from the drone to the hillside (in metres, to 1 decimal place).

::hint
**What you need:** $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

**Steps:**
1. Substitute $M$ into the left-hand side and take the absolute value.
2. Divide by $\sqrt{1+4+4}$.

::solution
$$d=\frac{|10+40+50-30|}{\sqrt{1+4+4}}=\frac{70}{3}\approx23.3.$$

**Answer.** $23.3$.
:::

:::exercise
Prove that the planes $(P): 2x-2y+z+4=0$ and $(Q): 2x-2y+z-5=0$ are parallel and find the distance between them.

::hint
**What you need:** the distance between two parallel planes equals the distance from any point of one plane to the other.

**Steps:**
1. Compare the normal vectors and the constant terms.
2. Take an easy point of $(P)$, for example with $x=y=0$.

::solution
The planes have the same normal vector $(2, -2, 1)$ and $4\neq-5$, so $(P)\parallel(Q)$. The point $E(0, 0, -4)$ lies in $(P)$:
$$d((P), (Q))=d(E, (Q))=\frac{|-4-5|}{\sqrt{4+4+1}}=\frac{9}{3}=3.$$

**Answer.** $3$.
:::

:::exercise
Write the equation of the plane that contains the axis $Oz$ and passes through $A(1, 2, 5)$.

::hint
**What you need:** a plane containing $Oz$ passes through $O$ and has $C=0$, so it has the form $Ax+By=0$.

**Steps:**
1. Substitute $A(1, 2, 5)$ into $Ax+By=0$.
2. Choose a pair of numbers $A$, $B$ that works.

::solution
$A\cdot1+B\cdot2=0$; choose $B=-1$, $A=2$. The plane is $2x-y=0$.
Check: $2\cdot1-2=0$, and every point $(0, 0, z)$ satisfies it.

**Answer.** $2x-y=0$.
:::

:::exercise
(Revisiting [Operations on vectors in coordinates](lesson:vector-coordinate-operations).) In the previous lesson, for $A(1, 0, 2)$, $B(2, 3, -1)$, $C(0, 4, 1)$, we found $D(-1, 1, 4)$ such that $ABCD$ is a parallelogram. Write the equation of the plane $(ABC)$ and check that $D$ lies in it.

::hint
**What you need:** $\vec{n}=\overrightarrow{AB}\times\overrightarrow{AC}$; a point lies in a plane when its coordinates satisfy the equation.

**Steps:**
1. $\overrightarrow{AB}=(1, 3, -3)$, $\overrightarrow{AC}=(-1, 4, -1)$; compute the cross product.
2. Write the equation through $A$, then substitute $D$.

::solution
$$\overrightarrow{AB}\times\overrightarrow{AC}=\big(3\cdot(-1)-4\cdot(-3),\ (-3)\cdot(-1)-(-1)\cdot1,\ 1\cdot4-(-1)\cdot3\big)=(9, 4, 7).$$
$(ABC): 9(x-1)+4y+7(z-2)=0\iff 9x+4y+7z-23=0$. Substituting $D$: $-9+4+28-23=0$.

**Answer.** $9x+4y+7z-23=0$; $D$ lies in $(ABC)$, as it must, since a parallelogram is a plane figure.
:::

:::exercise Challenge
Write the equation of the plane $(P)$ that is parallel to $(Q): x+2y+2z+1=0$ and at distance $2$ from the point $A(1, 1, 1)$.

::hint
**What you need:** $(P)$ has the form $x+2y+2z+D=0$ with $D\neq1$; the distance formula.

**Steps:**
1. Set up $\dfrac{|1+2+2+D|}{3}=2$.
2. Solve, then reject any value that makes $(P)$ coincide with $(Q)$.

::solution
$$|5+D|=6\iff D=1\ \text{or}\ D=-11.$$
With $D=1$, $(P)$ coincides with $(Q)$ rather than being parallel to it, so we reject it. That leaves $D=-11$.
**Check.** $d(A, (P))=\dfrac{|5-11|}{3}=2$.

**Answer.** $(P): x+2y+2z-11=0$.
:::

## Mini test

:::quiz
::mc
In the system $Oxyz$, a normal vector of the plane $(P): 3x-z+2=0$ is
A. $(3, -1, 2)$.
B. $(3, 0, -1)$.
C. $(3, -1, 0)$.
D. $(0, 3, -1)$.
::key B
The coefficients of $x$, $y$, $z$ are $3$, $0$, $-1$. Option A includes the constant term, and options C and D put the zero coordinate in the wrong place.

::mc
The plane through $M(1, 2, -1)$ with normal vector $\vec{n}=(2, -1, 3)$ has equation
A. $2x-y+3z-3=0$.
B. $2x-y+3z=0$.
C. $2x-y+3z+3=0$.
D. $x+2y-z+3=0$.
::key C
$2(x-1)-(y-2)+3(z+1)=0\iff 2x-y+3z+3=0$. Option A gets the signs wrong when substituting $M$, option B forgets the constant term, and option D swaps the roles of the point and the vector.

::mc
The distance from $A(1, -2, 3)$ to the plane $(P): 2x-y+2z+1=0$ is
A. $\dfrac{10}{3}$.
B. $\dfrac{11}{3}$.
C. $\dfrac{11}{9}$.
D. $11$.
::key B
$\dfrac{|2+2+6+1|}{\sqrt{9}}=\dfrac{11}{3}$. Option A forgets the constant term, C divides by $A^2+B^2+C^2$ without the square root, and D forgets to divide.

::mc
Which plane is parallel to $(P): x-2y+2z-1=0$?
A. $2x-4y+4z-2=0$.
B. $2x+y=0$.
C. $-x+2y-2z+3=0$.
D. $x+2y+2z-1=0$.
::key C
$(-1, 2, -2)=-1\cdot(1, -2, 2)$ and $3\neq(-1)\cdot(-1)$. Option A coincides with $(P)$, option B is perpendicular to $(P)$ because $2-2+0=0$, and option D has a wrong sign in one coefficient.

::tf
In the system $Oxyz$, let $A(2, 0, 0)$, $B(0, 1, 0)$, $C(0, 0, 2)$.
a) The plane $(ABC)$ has equation $x+2y+z-2=0$.
b) The point $M(1, 0, 1)$ lies in the plane $(ABC)$.
c) The distance from $O$ to $(ABC)$ is $\dfrac13$.
d) The plane $(ABC)$ is perpendicular to the plane $(Q): x-y+z+5=0$.
::key T T F T
a) True: $\dfrac{x}{2}+\dfrac{y}{1}+\dfrac{z}{2}=1\iff x+2y+z-2=0$. b) True: $1+0+1-2=0$. c) False: $d=\dfrac{2}{\sqrt6}\approx0.82$; $\dfrac13$ is what you get if you forget the square root. d) True: $1-2+1=0$.

::sa
The plane through $A(1, 2, -1)$ parallel to $(Q): 2x+y-2z+7=0$ has equation $2x+y-2z+d=0$. Find $d$.
::key -6
Substituting $A$: $2+2+2+d=0$, so $d=-6$ (which differs from $7$, so the planes do not coincide).

::sa
Find the distance between the parallel planes $(P): x+2y-2z+1=0$ and $(Q): 2x+4y-4z-7=0$ (to 1 decimal place).
::key 1.5
Divide the equation of $(Q)$ by $2$: $x+2y-2z-3.5=0$. The distance is $\dfrac{|1-(-3.5)|}{3}=1.5$.
:::
