---
title: Relative position of two lines, angles and distances
description: Decide whether two lines intersect, are parallel or coincide, find the angle between them, and compute distances from a point to a line.
minutes: 28
---

:::goals
- Determine the relative position of two lines from their equations.
- Find the angle between two lines and test for perpendicularity.
- Compute the distance from a point to a line and between two parallel lines.
- Use these tools to find heights and areas of triangles.
:::

On a map (units: km), a road runs along the line $d_1: x+y-3=0$ and a railway runs along $d_2: 2x-y=0$. A house stands at the point $M(4, 3)$. Where do the road and the railway meet, and at what angle? How far is the house from the road?

All three questions can be answered from the equations of the two lines alone, thanks to their **normal vectors**.

:::graph The road $d_1$, the railway $d_2$ and the house $M$
alt: The lines x plus y equals 3 and y equals 2x meeting at the point (1, 2), with the house at the point M(4, 3)
x: -1..6
y: -1..7
plot: -x + 3
plot: 2x
point: (1, 2) "(1, 2)" right
point: (4, 3) "M" above-right
:::

## Relative position of two lines

### Explore: solve the system to find the position

Take $d: 2x-y+1=0$ and three other lines. We solve the system formed by $d$ and each line:

| line | normal vector | system with $d$ | position |
|---|---|---|---|
| $4x-2y+3=0$ | $(4, -2)$ | no solution | parallel |
| $4x-2y+2=0$ | $(4, -2)$ | infinitely many solutions | coincide |
| $x+y-2=0$ | $(1, 1)$ | one solution $\left(\frac13, \frac53\right)$ | intersect |

The normal vector of $d$ is $(2, -1)$. In the first two rows the normal vector is $(4, -2)=2(2, -1)$, parallel to $(2, -1)$, and the two lines do not meet in exactly one point. In the last row the normal vectors are not parallel and the lines intersect.

Let $d_1: a_1x+b_1y+c_1=0$ and $d_2: a_2x+b_2y+c_2=0$ have normal vectors $\vec{n}_1=(a_1, b_1)$ and $\vec{n}_2=(a_2, b_2)$.

:::theorem Position of two lines
- $\vec{n}_1,\vec{n}_2$ **not parallel** ($a_1b_2-a_2b_1\neq 0$): the lines **intersect** in one point. Solve the system to find it.
- $\vec{n}_1,\vec{n}_2$ parallel and the equations proportional ($\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$): the lines **coincide**.
- $\vec{n}_1,\vec{n}_2$ parallel but $\frac{c_1}{c_2}$ different from that ratio: the lines are **parallel**.
:::

:::example Three cases
Determine the relative position of each pair of lines.
a) $x+y-3=0$ and $2x-y=0$. b) $2x-4y+6=0$ and $x-2y-5=0$. c) $2x-4y+6=0$ and $x-2y+3=0$.

**Solution.** We compare the normal vectors first, and only then look at the constant terms.

a) We have $1\cdot(-1)-2\cdot1=-3\neq 0$, so the lines intersect. Substitute $y=2x$ into the first equation:
$$x+2x-3=0\iff x=1,\ y=2.$$

b) We have $\dfrac{2}{1}=\dfrac{-4}{-2}=2$, but $\dfrac{6}{-5}\neq 2$, so the lines are parallel.

c) We have $\dfrac{2}{1}=\dfrac{-4}{-2}=\dfrac{6}{3}=2$, so the equations are proportional.

So pair a) intersects at $(1, 2)$, pair b) is parallel, and pair c) coincides.
:::

Pair a) is exactly the road and the railway from the start: they meet at $(1, 2)$. The next question is the angle between them.

## The angle between two lines

The angle between two intersecting lines is the smallest of the four angles they form, so $0^\circ\le\varphi\le 90^\circ$. Two parallel or coinciding lines make an angle of $0^\circ$.

:::theorem The angle formula
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|}=\frac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.$$
The lines are **perpendicular** if and only if $a_1a_2+b_1b_2=0$.
:::

The two normal vectors make an angle of $\varphi$ or $180^\circ-\varphi$. These two angles have opposite cosines, so the absolute value makes sure we always get the angle that is not obtuse.

:::example The angle between the road and the railway
a) Find the angle between $d_1: x+y-3=0$ and $d_2: 2x-y=0$.
b) Are the lines $2x-3y+5=0$ and $3x+2y-1=0$ perpendicular?

**Solution.** We use the angle formula with the two normal vectors.

a) $\vec{n}_1=(1, 1)$, $\vec{n}_2=(2, -1)$:
$$\cos\varphi=\frac{|1\cdot2+1\cdot(-1)|}{\sqrt2\cdot\sqrt5}=\frac{1}{\sqrt{10}}\ \Rightarrow\ \varphi\approx 71.57^\circ.$$

b) $\vec{n}_1=(2, -3)$, $\vec{n}_2=(3, 2)$: $2\cdot3+(-3)\cdot2=0$.

So the road and the railway meet at an angle of about $71.57^\circ$, and the lines in part b) are perpendicular.
:::

## Distance from a point to a line

:::theorem Distance from a point to a line
The distance from $M_0(x_0, y_0)$ to the line $\Delta: ax+by+c=0$ is
$$d(M_0, \Delta)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.$$
:::

**Why?** Let $H$ be the foot of the perpendicular from $M_0$ to $\Delta$. The vector $\overrightarrow{HM_0}$ is parallel to $\vec{n}=(a, b)$, so $|\vec{n}\cdot\overrightarrow{HM_0}|=|\vec{n}|\cdot HM_0$. Also $H(x_H, y_H)$ lies on $\Delta$, so $ax_H+by_H=-c$, and therefore $\vec{n}\cdot\overrightarrow{HM_0}=ax_0+by_0+c$. Dividing by $|\vec{n}|=\sqrt{a^2+b^2}$ gives the formula.

Now we answer the last question from the start.

:::example How far is the house from the road?
Find the distance from the house $M(4, 3)$ to the road $d_1: x+y-3=0$ (units: km).

**Solution.** Substitute the coordinates of $M$ into the distance formula with $a=b=1$, $c=-3$:

$$d(M, d_1)=\frac{|4+3-3|}{\sqrt{1^2+1^2}}=\frac{4}{\sqrt2}=2\sqrt2\approx 2.83.$$

So the house is about $2.83$ km from the road.
:::

For two **parallel** lines, the distance between them is the distance from any point of one line to the other. If the two equations have the **same** $a$, $b$: $ax+by+c_1=0$ and $ax+by+c_2=0$, the distance is $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

:::example Distance between two parallel lines
Find the distance between $3x+4y-2=0$ and $6x+8y+16=0$.

**Solution.** The two equations do not yet have the same $a$, $b$. Divide the second equation by $2$ first:

$$6x+8y+16=0\iff 3x+4y+8=0.$$

$$d=\frac{|-2-8|}{\sqrt{3^2+4^2}}=\frac{10}{5}=2.$$

So the distance between the lines is $2$.

**Check.** The point $(2, -1)$ lies on the first line, and its distance to $3x+4y+8=0$ is $\dfrac{|6-4+8|}{5}=2$.
:::

The distance formula also works backwards: given a distance, find a point.

:::example Finding points at a given distance
Find the points on the $x$-axis at distance $2$ from the line $4x-3y+2=0$.

**Solution.** A point on the $x$-axis has the form $M(t, 0)$. Set the distance equal to $2$, then split the absolute value into two cases:

$$\frac{|4t+2|}{5}=2\iff |4t+2|=10\iff 4t+2=10\ \text{ or }\ 4t+2=-10.$$

This gives $t=2$ or $t=-3$.

So there are two such points: $(2, 0)$ and $(-3, 0)$.
:::

## Heights and areas of triangles

A height of a triangle is exactly the distance from a vertex to the line containing the opposite side.

:::diagram Triangle $ABC$ and the altitude $AH$
alt: A triangle with vertices A(1, 1), B(5, 1) and C(3, 5), with a dashed altitude from A perpendicular to BC at H
point A 1,1 below-left
point B 5,1 below-right
point C 3,5 above
point H 4.2,2.6 right
polygon A B C
segment A H dashed
right A H C
:::

:::example Height and area
The triangle $ABC$ has $A(1, 1)$, $B(5, 1)$ and $C(3, 5)$. Find the length of the altitude from $A$ and the area of the triangle.

**Solution.** Write the equation of $BC$, then compute the distance from $A$ to $BC$. We have $\overrightarrow{BC}=(-2, 4)$, so $BC$ has normal vector $(2, 1)$:

$$BC: 2(x-5)+(y-1)=0\iff 2x+y-11=0.$$

$$h_A=\frac{|2\cdot1+1-11|}{\sqrt{2^2+1^2}}=\frac{8}{\sqrt5},\qquad BC=\sqrt{(-2)^2+4^2}=2\sqrt5.$$

$$S=\frac12\cdot BC\cdot h_A=\frac12\cdot 2\sqrt5\cdot\frac{8}{\sqrt5}=8.$$

So the altitude from $A$ has length $\dfrac{8}{\sqrt5}$ and the area of the triangle is $8$.

**Check.** Take the base $AB=4$ (horizontal) and the height from $C$, which is $5-1=4$: $S=\dfrac12\cdot4\cdot4=8$.
:::

:::warning Common mistakes
- **Forgetting the absolute value.** Wrong: $\cos\varphi=\dfrac{\vec{n}_1\cdot\vec{n}_2}{|\vec{n}_1||\vec{n}_2|}$ can be negative, and then the angle is said to be obtuse. Why it is wrong: the angle between two lines is never more than $90^\circ$. Right: use $|\vec{n}_1\cdot\vec{n}_2|$ in the numerator.
- **Ignoring the constant terms.** Wrong: "$2x-4y+6=0$ and $x-2y+3=0$ have parallel normal vectors, so the lines are parallel". Why it is wrong: they might coincide. Right: $\frac{6}{3}=2$ equals the other ratios too, so the lines coincide.
- **Using $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$ before the coefficients match.** Wrong: the distance between $3x+4y-2=0$ and $6x+8y+16=0$ is $\dfrac{|-2-16|}{5}=3.6$. Why it is wrong: both equations must have the same $a$, $b$. Right: divide the second equation by $2$; the distance is $2$.
:::

## Key terms

:::terms
- relative position | vị trí tương đối
- intersect | cắt nhau
- coincide | trùng nhau
- parallel | song song
- angle between two lines | góc giữa hai đường thẳng
- distance from a point to a line | khoảng cách từ một điểm đến đường thẳng
- altitude (height) | đường cao
- area | diện tích
:::

## Summary

- Compare $\vec{n}_1$, $\vec{n}_2$: not parallel means the lines intersect; parallel means the lines are parallel or coincide (look at $c$ too).
- Angle: $\cos\varphi=\dfrac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}$, $0^\circ\le\varphi\le 90^\circ$.
- Perpendicular $\iff a_1a_2+b_1b_2=0$.
- Distance: $d(M_0, \Delta)=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.
- Two parallel lines: make $a$, $b$ the same, then use $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.
- Area of a triangle $=\dfrac12\cdot$ side $\cdot$ distance from the opposite vertex.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Determine the relative position of the lines $x-3y+2=0$ and $-2x+6y-4=0$.

::hint
**What you need:** if $\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$ the lines coincide; if only the first two ratios are equal they are parallel.

**Steps:**
1. Compute the three ratios $\frac{a_1}{a_2}$, $\frac{b_1}{b_2}$, $\frac{c_1}{c_2}$.
2. Compare them and conclude.

::solution
$\dfrac{1}{-2}=\dfrac{-3}{6}=\dfrac{2}{-4}=-\dfrac12$. All three ratios are equal, so the equations are proportional.

**Answer.** The lines coincide.
:::

:::exercise
Find the intersection point of the lines $3x+2y-6=0$ and $x-y+2=0$.

::hint
**What you need:** the intersection point is the solution of the system of the two equations.

**Steps:**
1. From the second equation, write $x=y-2$.
2. Substitute into the first equation.

::solution
Substituting $x=y-2$: $3(y-2)+2y-6=0\iff 5y=12\iff y=\dfrac{12}{5}$, so $x=\dfrac{12}{5}-2=\dfrac25$.

**Answer.** $\left(\dfrac25, \dfrac{12}{5}\right)$.
:::

:::exercise
Find the angle between the lines $x+y=0$ and $x+3y-2=0$ (in degrees, rounded to two decimal places).

::hint
**What you need:** $\cos\varphi=\dfrac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}$.

**Steps:**
1. Read off $\vec{n}_1=(1, 1)$, $\vec{n}_2=(1, 3)$.
2. Compute $\cos\varphi$, then use a calculator to find $\varphi$.

::solution
$\cos\varphi=\dfrac{|1+3|}{\sqrt2\cdot\sqrt{10}}=\dfrac{4}{\sqrt{20}}=\dfrac{2}{\sqrt5}$, so $\varphi\approx 26.57^\circ$.

**Answer.** $26.57$.
:::

:::exercise
Find the distance from the origin to the line $5x+12y-26=0$.

::hint
**What you need:** $d(M_0, \Delta)=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.

**Steps:**
1. Substitute $x_0=y_0=0$.
2. Compute $\sqrt{5^2+12^2}$.

::solution
$d=\dfrac{|0+0-26|}{\sqrt{25+144}}=\dfrac{26}{13}=2$.

**Answer.** $2$.
:::

:::exercise
Find the distance between the parallel lines $2x-y+1=0$ and $2x-y-4=0$.

::hint
**What you need:** for $ax+by+c_1=0$ and $ax+by+c_2=0$, the distance is $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

**Steps:**
1. Check that the equations have the same $a$, $b$.
2. Substitute into the formula.

::solution
Both equations have $a=2$, $b=-1$. $d=\dfrac{|1-(-4)|}{\sqrt{4+1}}=\dfrac{5}{\sqrt5}=\sqrt5$.

**Answer.** $\sqrt5$.
:::

:::exercise
Consider the lines $d_1: 3x-4y+5=0$, $d_2: 4x+3y-10=0$ and the point $A(2, -1)$. Is each claim true or false?

a) $d_1$ is perpendicular to $d_2$.

b) $d_1$ and $d_2$ meet at the point $(1, 2)$.

c) The distance from $A$ to $d_1$ is $2$.

d) The distance from $A$ to $d_2$ is $1$.

::hint
**What you need:** perpendicular when $a_1a_2+b_1b_2=0$; the formula for the distance from a point to a line.

**Steps:**
1. Compute the scalar product (dot product) of the two normal vectors.
2. Substitute $(1, 2)$ into both equations.
3. Compute the two distances from $A$.

::solution
a) **True**: $3\cdot4+(-4)\cdot3=0$.

b) **True**: $3-8+5=0$ and $4+6-10=0$.

c) **False**: $d(A, d_1)=\dfrac{|6+4+5|}{5}=3$.

d) **True**: $d(A, d_2)=\dfrac{|8-3-10|}{5}=1$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
On a plan (units: tens of metres), a triangular plot of land has vertices $A(1, 1)$, $B(5, 4)$, $C(2, 5)$. Write the equation of the line $AB$, find the distance from $C$ to $AB$, and find the real area of the plot (m²).

::hint
**What you need:** $S=\dfrac12\cdot AB\cdot d(C, AB)$; one unit of length on the plan is $10$ m, so one unit of area is $100$ m².

**Steps:**
1. $\overrightarrow{AB}=(4, 3)$; find a normal vector and the equation of $AB$.
2. Compute $d(C, AB)$ and $AB$.
3. Compute the area on the plan, then multiply by $100$.

::solution
$\vec{n}=(3, -4)$: $AB: 3(x-1)-4(y-1)=0\iff 3x-4y+1=0$. $d(C, AB)=\dfrac{|6-20+1|}{5}=2.6$, $AB=\sqrt{16+9}=5$. The area on the plan is $\dfrac12\cdot5\cdot2.6=6.5$, so the real area is $6.5\cdot100=650$ m².

**Answer.** $3x-4y+1=0$; $2.6$; $650$ m².
:::

:::exercise
A lighthouse stands at the point $M(3, 4)$ on a sea chart (units: km), and its light can be seen within a radius of $6$ km. A ship sails along the line $4x+3y-49=0$. Does the ship enter the zone where the light is visible?

::hint
**What you need:** the point of the path closest to the lighthouse is at distance $d(M, \Delta)$ from it.

**Steps:**
1. Compute the distance from $M$ to the path.
2. Compare it with $6$ km.

::solution
$d(M, \Delta)=\dfrac{|12+12-49|}{\sqrt{16+9}}=\dfrac{25}{5}=5$ km. Since $5<6$, the ship enters the zone where the light is visible.

**Answer.** Yes; the closest distance is $5$ km.
:::

:::exercise Challenge
Find the distance from $A(1, 1)$ to the line through $B(2, -1)$ with direction vector $\vec{u}=(3, 4)$.

::hint
**What you need:** [equation of a line](lesson:equation-of-a-line): if $\vec{u}=(a, b)$ then $\vec{n}=(b, -a)$.

**Steps:**
1. Write the general equation of the line.
2. Use the distance formula.

::solution
$\vec{n}=(4, -3)$: $4(x-2)-3(y+1)=0\iff 4x-3y-11=0$. The distance from $A$ is $\dfrac{|4-3-11|}{5}=\dfrac{10}{5}=2$.

**Answer.** $2$.
:::

:::exercise Review
Consider the triangle $ABC$ with $A(0, 0)$, $B(4, 0)$, $C(-2, 3)$.

a) Use [the scalar product](lesson:dot-product) to find the angle $\angle BAC$ (rounded to two decimal places of a degree).

b) Find the angle between the lines $AB$ and $AC$. Why is the result different from part a)?

::hint
**What you need:** $\cos\angle BAC=\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\cdot AC}$ (no absolute value); the angle between two lines is never more than $90^\circ$.

**Steps:**
1. Compute $\overrightarrow{AB}$, $\overrightarrow{AC}$ and their scalar product.
2. The angle between the lines equals $\angle BAC$ if that angle is not obtuse, and $180^\circ-\angle BAC$ if it is obtuse.

::solution
a) $\overrightarrow{AB}=(4, 0)$, $\overrightarrow{AC}=(-2, 3)$, $\cos\angle BAC=\dfrac{-8}{4\sqrt{13}}=-\dfrac{2}{\sqrt{13}}$, so $\angle BAC\approx 123.69^\circ$.

b) The angle $\angle BAC$ is obtuse, so the angle between the lines is $180^\circ-123.69^\circ=56.31^\circ$ (also the angle with $\cos\varphi=\dfrac{2}{\sqrt{13}}$).

**Answer.** a) $\approx 123.69^\circ$; b) $\approx 56.31^\circ$.
:::

## Mini test

:::quiz
::mc
The relative position of the lines $x-2y+1=0$ and $-2x+4y-2=0$ is
A. they intersect.
B. they are parallel.
C. they coincide.
D. they are perpendicular.
::key C
$\dfrac{1}{-2}=\dfrac{-2}{4}=\dfrac{1}{-2}$: all three ratios are equal, so the equations are proportional and the lines coincide. Choosing B means forgetting to compare the constant terms.

::mc
The distance from the point $M(1, -2)$ to the line $3x-4y+4=0$ is
A. $3$.
B. $15$.
C. $\dfrac15$.
D. $\dfrac{11}{5}$.
::key A
$d=\dfrac{|3\cdot1-4\cdot(-2)+4|}{\sqrt{3^2+4^2}}=\dfrac{15}{5}=3$. Option B forgets to divide by $5$; C substitutes $y=2$ by mistake; D leaves out the constant term $4$.

::mc
The angle between the lines $x-2=0$ and $-x+y+3=0$ is
A. $135^\circ$.
B. $45^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key B
$\vec{n}_1=(1, 0)$, $\vec{n}_2=(-1, 1)$: $\cos\varphi=\dfrac{|-1|}{1\cdot\sqrt2}=\dfrac{1}{\sqrt2}$, so $\varphi=45^\circ$. Dropping the absolute value gives $135^\circ$, but the angle between two lines is never more than $90^\circ$.

::mc
Which line is perpendicular to the line $2x+3y-1=0$?
A. $2x+3y+5=0$.
B. $3x+2y=0$.
C. $2x-3y+1=0$.
D. $3x-2y+5=0$.
::key D
Two lines are perpendicular when $a_1a_2+b_1b_2=0$: $2\cdot3+3\cdot(-2)=0$. Option A is parallel; B swaps the coefficients but forgets to change a sign ($6+6\ne0$).

::tf
Consider the lines $d_1: x+2y-4=0$, $d_2: 2x-y-3=0$ and the point $A(3, 4)$.
a) $d_1$ is perpendicular to $d_2$.
b) $d_1$ and $d_2$ meet at the point $(1, 2)$.
c) The distance from $A$ to $d_1$ is $7$.
d) The distance from $A$ to $d_2$ is $\dfrac{\sqrt5}{5}$.
::key T F F T
a) True: $1\cdot2+2\cdot(-1)=0$. b) False: $1+4-4=1\ne0$, so $(1, 2)$ is not on $d_1$ (the intersection point is $(2, 1)$). c) False: $d=\dfrac{|3+8-4|}{\sqrt5}=\dfrac{7}{\sqrt5}$; $7$ is what you get if you forget to divide by $\sqrt5$. d) True: $d=\dfrac{|6-4-3|}{\sqrt5}=\dfrac{1}{\sqrt5}=\dfrac{\sqrt5}{5}$.

::sa
Find the distance between the parallel lines $3x+4y-5=0$ and $6x+8y+15=0$.
::key 2.5
Divide the second equation by $2$: $3x+4y+7.5=0$. Then $d=\dfrac{|-5-7.5|}{\sqrt{3^2+4^2}}=\dfrac{12.5}{5}=2.5$.

::sa
Triangle $ABC$ has $A(1, 2)$, $B(4, -2)$, $C(5, 3)$. Find the area of triangle $ABC$.
::key 9.5
$\overrightarrow{AB}=(3, -4)$, so $AB=5$ and the line $AB$ has normal vector $(4, 3)$: $4x+3y-10=0$. The distance from $C$ to $AB$ is $\dfrac{|20+9-10|}{5}=\dfrac{19}{5}$, so $S=\dfrac12\cdot5\cdot\dfrac{19}{5}=9.5$.
:::
