---
title: Angle formulas in space
description: Find the angle between two lines, between a line and a plane, and between two planes with coordinates; apply it to cubes, pyramids and real problems.
minutes: 22
---

:::goals
- Find the angle between two lines: $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.
- Find the angle between a line and a plane: $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.
- Find the angle between two planes: $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.
- Place a cube or a pyramid in $Oxyz$ to compute angles.
:::

A $10$ m radio mast is held by a cable running from the top of the mast to an anchor in the ground. With the foot of the mast at the origin and the metre as unit, the top of the mast is $T(0, 0, 10)$ and the anchor is $A(6, 8, 0)$. What angle does the cable make with the ground?

In the lesson [Operations on vectors in coordinates](lesson:vector-coordinate-operations) we found the angle between two vectors. This lesson uses that formula, with an absolute value added, to find angles between lines and planes.

:::diagram The mast and the cable
alt: The axes Oxyz; the mast OT on the axis Oz, the cable TA joining the top to the point A on the ground, the dashed segment OA as the projection of the cable, and an angle arc at A
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 4.4,0 right "y"
point Z 0,4 left "z"
point T 0,3 right
point A 2.2,-1.8 below-right
arrow O X
arrow O Y
arrow O Z
segment T A
segment O A dashed
right T O A
angle O A T "φ"
:::

## The angle between a line and a plane

### Exploring: two ways to find the angle of the cable

**Method 1: a right-angled triangle.** The projection of the cable $TA$ on the ground is $OA$, with $OA=\sqrt{36+64}=10$. Triangle $TOA$ has a right angle at $O$ and $OT=OA=10$, so $\angle OAT=45^\circ$.

**Method 2: vectors.** Take $\vec{u}=\overrightarrow{TA}=(6, 8, -10)$ and the normal vector of the ground $\vec{k}=(0, 0, 1)$. We have
$$\cos(\vec{u}, \vec{k})=\frac{-10}{\sqrt{200}\cdot1}=-\frac{\sqrt2}{2},\qquad (\vec{u}, \vec{k})=135^\circ.$$
The angle between the line of $\vec{u}$ and the vertical is $180^\circ-135^\circ=45^\circ$. The angle we want makes $90^\circ$ together with that angle: $90^\circ-45^\circ=45^\circ$. Since $\sin\varphi=\cos(90^\circ-\varphi)$, we can go straight to $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{k}|}{|\vec{u}||\vec{k}|}=\dfrac{\sqrt2}{2}$.

:::theorem The angle between a line and a plane
Let the line $\Delta$ have direction vector $\vec{u}$ and the plane $(P)$ have normal vector $\vec{n}$. The angle $\varphi$ between $\Delta$ and $(P)$ ($0^\circ\le\varphi\le90^\circ$) satisfies
$$\sin\varphi=\frac{|\vec{u}\cdot\vec{n}|}{|\vec{u}|\cdot|\vec{n}|}.$$
:::

**Why is it true?** The angle between $\Delta$ and $(P)$ is the angle between $\Delta$ and its projection on $(P)$. This angle and the angle between $\Delta$ and the normal to $(P)$ add up to $90^\circ$. The angle between the line $\Delta$ and the line of $\vec{n}$ has cosine $\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$, and the cosine of $90^\circ-\varphi$ is exactly $\sin\varphi$.

## The angle between two lines and between two planes

The angle between two lines is always between $0^\circ$ and $90^\circ$, but the angle between their direction vectors can be obtuse. That is why we take the absolute value of the scalar product. The angle between two planes equals the angle between two lines perpendicular to them, so we use the two normal vectors.

:::theorem Two angle formulas
- Two lines $\Delta_1$, $\Delta_2$ with direction vectors $\vec{u}_1$, $\vec{u}_2$ make an angle $\varphi$ ($0^\circ\le\varphi\le90^\circ$) with
$$\cos\varphi=\frac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1|\cdot|\vec{u}_2|}.$$
- Two planes $(P_1)$, $(P_2)$ with normal vectors $\vec{n}_1$, $\vec{n}_2$ make an angle $\varphi$ ($0^\circ\le\varphi\le90^\circ$) with
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\cdot|\vec{n}_2|}.$$
:::

:::example The angle between two lines
Find the angle between $d_1: \begin{cases}x=1+t\\ y=2-t\\ z=3\end{cases}$ and $d_2: \begin{cases}x=2\\ y=s\\ z=1-s.\end{cases}$

**Solution.** Read the direction vectors from the coefficients of the parameters: $\vec{u}_1=(1, -1, 0)$, $\vec{u}_2=(0, 1, -1)$. Then:

$$\vec{u}_1\cdot\vec{u}_2=0-1+0=-1,\qquad \cos\varphi=\frac{|-1|}{\sqrt2\cdot\sqrt2}=\frac12.$$

So the angle between $d_1$ and $d_2$ is $60^\circ$.

**Check.** The angle between the *vectors* $\vec{u}_1$, $\vec{u}_2$ is $120^\circ$ (cosine $-\dfrac12$); the angle between the *lines* is $180^\circ-120^\circ=60^\circ$.
:::

In solid geometry, we place the figure in the axes so that many coordinates are $0$, then use the formulas above.

:::example Two face diagonals of a cube
Let $ABCD.A'B'C'D'$ be a cube with edge $1$. Find the angle between the lines $AB'$ and $BC'$.

**Solution.** Put $A(0, 0, 0)$, $B(1, 0, 0)$, $D(0, 1, 0)$, $A'(0, 0, 1)$. Then $B'(1, 0, 1)$, $C'(1, 1, 1)$ and

$$\overrightarrow{AB'}=(1, 0, 1),\qquad \overrightarrow{BC'}=(0, 1, 1),\qquad \cos\varphi=\frac{|0+0+1|}{\sqrt2\cdot\sqrt2}=\frac12.$$

So the angle between $AB'$ and $BC'$ is $60^\circ$.
:::

A pyramid with one lateral edge perpendicular to the base also fits the axes very neatly.

:::diagram The pyramid $S.ABCD$ with $SA$ perpendicular to the base
alt: The pyramid S.ABCD with a square base and the apex S directly above A; the hidden edges AD, DC, SD and the diagonal AC are dashed
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point S 0,3.2 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A C dashed
segment S A
segment S B
segment S C
segment S D dashed
right S A B
:::

:::example The angle between a lateral edge and a plane in a pyramid
The pyramid $S.ABCD$ has a square base with side $2$, $SA$ perpendicular to the base and $SA=2$. Find the angle between $SC$ and the base, and the angle between $SB$ and the plane $(SAC)$ (to one decimal place of a degree).

**Solution.** Put $A(0, 0, 0)$, $B(2, 0, 0)$, $D(0, 2, 0)$, $S(0, 0, 2)$, so $C(2, 2, 0)$. The base is $(Oxy)$, with normal vector $(0, 0, 1)$:

$$\overrightarrow{SC}=(2, 2, -2),\qquad \sin\varphi_1=\frac{|-2|}{\sqrt{12}\cdot1}=\frac{1}{\sqrt3},\qquad \varphi_1\approx35.3^\circ.$$

The plane $(SAC)$ contains $Oz$ and the point $C(2, 2, 0)$, so its equation is $x-y=0$, with $\vec{n}=(1, -1, 0)$. With $\overrightarrow{SB}=(2, 0, -2)$:

$$\sin\varphi_2=\frac{|2-0+0|}{\sqrt8\cdot\sqrt2}=\frac{2}{4}=\frac12,\qquad \varphi_2=30^\circ.$$

So $SC$ makes an angle of about $35.3^\circ$ with the base, and $SB$ makes an angle of $30^\circ$ with $(SAC)$.
:::

For two planes we only need the two normal vectors.

:::example The angle between two planes
a) Find the angle between $(P): x+2y-2z+1=0$ and $(Q): 2x-y+2z-3=0$ (to one decimal place of a degree).

b) In the pyramid of the previous example, find the angle between the lateral face $(SBC)$ and the base.

**Solution.** a) $\vec{n}_P=(1, 2, -2)$ and $\vec{n}_Q=(2, -1, 2)$ both have length $3$:

$$\cos\varphi=\frac{|2-2-4|}{3\cdot3}=\frac49,\qquad \varphi\approx63.6^\circ.$$

b) The plane $(SBC)$ passes through $B(2, 0, 0)$, $C(2, 2, 0)$, $S(0, 0, 2)$. It contains the line $BC$, which is parallel to $Oy$, so it has the form $Ax+Cz+D=0$; substituting $B$ and $S$ gives $(SBC): x+z-2=0$, with $\vec{n}=(1, 0, 1)$:

$$\cos\varphi=\frac{|0+0+1|}{\sqrt2\cdot1}=\frac{\sqrt2}{2},\qquad \varphi=45^\circ.$$

So a) the angle is about $63.6^\circ$; b) the angle is $45^\circ$.
:::

The last example is a real problem with several steps, so we follow the four stages.

:::example A pyramid tent
A tent is a regular square pyramid: its base is a square with side $4$ m and its apex is $3$ m above the centre of the base. Find the angle between one face of the roof and the ground, and the angle between one roof edge and the ground (to one decimal place of a degree).

**Solution.**

*Understand.* We need one angle between two planes and one angle between a line and a plane.

*Plan.* Put the centre of the base at the origin: $B(2, -2, 0)$, $C(2, 2, 0)$, apex $S(0, 0, 3)$; the ground is $(Oxy)$ with normal vector $\vec{k}=(0, 0, 1)$.

*Solve.* The face $(SBC)$ contains $BC$, which is parallel to $Oy$, so it has the form $Ax+Cz+D=0$. Substituting $B$ and $S$: $(SBC): 3x+2z-6=0$. Then:

$$\cos\varphi_1=\frac{|2|}{\sqrt{9+4}\cdot1}=\frac{2}{\sqrt{13}},\qquad \varphi_1\approx56.3^\circ.$$

For the edge $SC$, $\overrightarrow{SC}=(2, 2, -3)$:

$$\sin\varphi_2=\frac{|-3|}{\sqrt{17}\cdot1}=\frac{3}{\sqrt{17}},\qquad \varphi_2\approx46.7^\circ.$$

So the roof faces slope at about $56.3^\circ$ and the roof edges at about $46.7^\circ$ to the ground.

*Look back.* The edge is less steep than the face ($46.7^\circ<56.3^\circ$), which makes sense: the edge covers a longer horizontal distance ($2\sqrt2$ m instead of $2$ m) to rise the same $3$ m.
:::

:::warning Common mistakes
- **Forgetting the absolute value.** Wrong: the angle between $d_1$, $d_2$ in Example 1 is $120^\circ$. Why it is wrong: the angle between two lines is never more than $90^\circ$. Right: $\cos\varphi=\dfrac{|-1|}{2}$, $\varphi=60^\circ$.
- **Using cosine for the angle between a line and a plane.** Wrong: $\cos\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$ for $SB$ and $(SAC)$, giving $60^\circ$. Why it is wrong: that expression is the cosine of the angle between $SB$ and the normal to the plane. Right: use $\sin\varphi$, which gives $30^\circ$.
- **Using a direction vector instead of the normal vector of a plane.** Wrong: taking $\overrightarrow{BC}$ as "the vector of the plane $(SBC)$". Why it is wrong: $\overrightarrow{BC}$ lies in the plane; it is not perpendicular to it. Right: find the equation of the plane and read off its normal vector.
- **Mixing up degrees and radians on the calculator.** Wrong: $\arccos\dfrac49\approx1.11$, written as $1.11^\circ$. Right: switch the calculator to degrees to get $63.6^\circ$.
:::

## Key terms

:::terms
- angle between two lines | góc giữa hai đường thẳng
- angle between a line and a plane | góc giữa đường thẳng và mặt phẳng
- angle between two planes | góc giữa hai mặt phẳng
- direction vector | vectơ chỉ phương
- normal vector | vectơ pháp tuyến
- orthogonal projection | hình chiếu vuông góc
- regular square pyramid | hình chóp tứ giác đều
- dihedral angle | góc nhị diện
:::

## Summary

- Two lines: $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.
- A line and a plane: $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$ (sine, because the angle with the normal is $90^\circ-\varphi$).
- Two planes: $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.
- Every one of these angles lies in $[0^\circ, 90^\circ]$, thanks to the absolute value.
- The ground or a base: $(Oxy)$ with $\vec{k}=(0, 0, 1)$.
- Cubes and pyramids: put the origin at a vertex or at the centre of the base so that many coordinates are $0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the angle between $d_1: x=1+t$, $y=2t$, $z=-t$ and $d_2: \dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{1}$ (to one decimal place of a degree).

::hint
**What you need:** $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.

**Steps:**
1. Read off $\vec{u}_1=(1, 2, -1)$, $\vec{u}_2=(2, -1, 1)$.
2. Compute the scalar product and the two lengths.

::solution
$$\vec{u}_1\cdot\vec{u}_2=2-2-1=-1,\qquad \cos\varphi=\frac{1}{\sqrt6\cdot\sqrt6}=\frac16,\qquad \varphi\approx80.4^\circ.$$

**Answer.** About $80.4^\circ$.
:::

:::exercise
Find the angle between the line $d: x=1+t$, $y=t$, $z=2$ and the plane $(P): x+z-5=0$.

::hint
**What you need:** $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.

**Steps:**
1. $\vec{u}=(1, 1, 0)$, $\vec{n}=(1, 0, 1)$.
2. Compute $\sin\varphi$.

::solution
$$\sin\varphi=\frac{|1+0+0|}{\sqrt2\cdot\sqrt2}=\frac12,\qquad\varphi=30^\circ.$$

**Answer.** $30^\circ$.
:::

:::exercise
Find the angle between the planes $(P): 2x-y+z-1=0$ and $(Q): x+y+2z+3=0$.

::hint
**What you need:** $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.

**Steps:**
1. $\vec{n}_1=(2, -1, 1)$, $\vec{n}_2=(1, 1, 2)$.
2. Compute the cosine.

::solution
$$\cos\varphi=\frac{|2-1+2|}{\sqrt6\cdot\sqrt6}=\frac36=\frac12,\qquad\varphi=60^\circ.$$

**Answer.** $60^\circ$.
:::

:::exercise
Find the angle between the line $\Delta: \dfrac{x-1}{2}=\dfrac{y+1}{-2}=\dfrac{z}{1}$ and the plane $(Oxy)$ (to one decimal place of a degree).

::hint
**What you need:** $(Oxy)$ has normal vector $\vec{k}=(0, 0, 1)$.

**Steps:**
1. $\vec{u}=(2, -2, 1)$, $|\vec{u}|=3$.
2. Compute $\sin\varphi$.

::solution
$$\sin\varphi=\frac{|1|}{3\cdot1}=\frac13,\qquad\varphi\approx19.5^\circ.$$

**Answer.** About $19.5^\circ$.
:::

:::exercise
Let $ABCD.A'B'C'D'$ be a cube with edge $1$, with $A(0, 0, 0)$, $B(1, 0, 0)$, $D(0, 1, 0)$, $A'(0, 0, 1)$. Is each claim true or false?

a) The angle between the lines $AC$ and $B'D'$ is $90^\circ$.

b) The angle between the line $A'C$ and the plane $(ABCD)$ is $45^\circ$.

c) The angle $\varphi$ between the planes $(A'BD)$ and $(ABCD)$ satisfies $\cos\varphi=\dfrac{1}{\sqrt3}$.

d) The angle between the lines $AC'$ and $BD$ is $60^\circ$.

::hint
**What you need:** the three angle formulas; $(A'BD): x+y+z-1=0$ (intercept form).

**Steps:**
1. Write the vectors $\overrightarrow{AC}$, $\overrightarrow{B'D'}$, $\overrightarrow{A'C}$, $\overrightarrow{AC'}$, $\overrightarrow{BD}$ in coordinates.
2. Use the right formula for each kind of angle.

::solution
a) **True.** $\overrightarrow{AC}=(1, 1, 0)$, $\overrightarrow{B'D'}=(-1, 1, 0)$, and their scalar product is $0$.

b) **False.** $\overrightarrow{A'C}=(1, 1, -1)$, $\sin\varphi=\dfrac{1}{\sqrt3}$, so $\varphi\approx35.3^\circ$.

c) **True.** $\vec{n}=(1, 1, 1)$ and $\vec{k}=(0, 0, 1)$: $\cos\varphi=\dfrac{1}{\sqrt3}$.

d) **False.** $\overrightarrow{AC'}=(1, 1, 1)$, $\overrightarrow{BD}=(-1, 1, 0)$, and their scalar product is $0$, so the angle is $90^\circ$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
A wheelchair ramp is an inclined plane: for every $12$ m along the ground it rises $1$ m. Take the ramp as the plane $(P): x-12z=0$ (unit: metre). Find the angle between the ramp and the ground (in degrees, to 1 decimal place).

::hint
**What you need:** the angle between two planes; the ground is $(Oxy)$.

**Steps:**
1. $\vec{n}_P=(1, 0, -12)$, $\vec{k}=(0, 0, 1)$.
2. Compute the cosine, then the angle.

::solution
$$\cos\varphi=\frac{|-12|}{\sqrt{1+144}\cdot1}=\frac{12}{\sqrt{145}}\approx0.9965,\qquad\varphi\approx4.8^\circ.$$
(Check with a right-angled triangle: $\tan\varphi=\dfrac{1}{12}$.)

**Answer.** $4.8$.
:::

:::exercise
The pyramid $S.ABCD$ has a rectangular base with $AB=3$, $AD=4$, $SA$ perpendicular to the base and $SA=5$. Find the angle between $SC$ and the base, and the angle between $SC$ and the plane $(SAB)$ (to one decimal place of a degree).

::hint
**What you need:** put $A$ at the origin; $(ABCD)$ is $(Oxy)$ and $(SAB)$ is $(Ozx): y=0$.

**Steps:**
1. $B(3, 0, 0)$, $D(0, 4, 0)$, $S(0, 0, 5)$, $C(3, 4, 0)$.
2. $\overrightarrow{SC}=(3, 4, -5)$; use $\sin\varphi$ with $(0, 0, 1)$ and $(0, 1, 0)$.

::solution
$|\overrightarrow{SC}|=\sqrt{50}=5\sqrt2$.
$$\sin\varphi_1=\frac{5}{5\sqrt2}=\frac{\sqrt2}{2},\ \varphi_1=45^\circ;\qquad \sin\varphi_2=\frac{4}{5\sqrt2}\approx0.566,\ \varphi_2\approx34.4^\circ.$$

**Answer.** $45^\circ$ and about $34.4^\circ$.
:::

:::exercise
(Revisiting [The equation of a plane](lesson:plane-equation).) What angle does the plane through $A(2, 0, 0)$, $B(0, 1, 0)$, $C(0, 0, 2)$ make with the plane $(Oxy)$ (to one decimal place of a degree)?

::hint
**What you need:** the intercept form; the angle between two planes.

**Steps:**
1. $(ABC): \dfrac{x}{2}+y+\dfrac{z}{2}=1\iff x+2y+z-2=0$.
2. Use $\vec{n}=(1, 2, 1)$ and $\vec{k}=(0, 0, 1)$.

::solution
$$\cos\varphi=\frac{1}{\sqrt6}\approx0.408,\qquad\varphi\approx65.9^\circ.$$

**Answer.** About $65.9^\circ$.
:::

:::exercise
(Revisiting [The equation of a line in space](lesson:line-equation-space).) Let $A(1, 2, -1)$, $B(3, -1, 1)$ and $(P): x-2y+2z+3=0$. Find the angle between the line $AB$ and $(P)$ (to one decimal place of a degree).

::hint
**What you need:** the line $AB$ has direction vector $\overrightarrow{AB}$; $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.

**Steps:**
1. $\overrightarrow{AB}=(2, -3, 2)$.
2. Compute $\sin\varphi$ with $\vec{n}=(1, -2, 2)$.

::solution
$$\sin\varphi=\frac{|2+6+4|}{\sqrt{17}\cdot3}=\frac{4}{\sqrt{17}}\approx0.970,\qquad\varphi\approx76.0^\circ.$$

**Answer.** About $76.0^\circ$.
:::

:::exercise Challenge
Let $ABCD.A'B'C'D'$ be a cube with edge $1$. Find the angle between the diagonal $BD'$ and the plane $(A'BD)$ (to one decimal place of a degree).

::hint
**What you need:** use the axes of exercise 5; $(A'BD): x+y+z-1=0$.

**Steps:**
1. $B(1, 0, 0)$, $D'(0, 1, 1)$, so $\overrightarrow{BD'}=(-1, 1, 1)$.
2. Compute $\sin\varphi$ with $\vec{n}=(1, 1, 1)$.

::solution
$$\sin\varphi=\frac{|-1+1+1|}{\sqrt3\cdot\sqrt3}=\frac13,\qquad\varphi\approx19.5^\circ.$$
**Check.** $\sin\varphi$ is small, so $BD'$ stays close to the plane, which fits: $B$ lies in $(A'BD)$ and $D'$ is only $\dfrac{1}{\sqrt3}$ from it.

**Answer.** About $19.5^\circ$.
:::

## Mini test

:::quiz
::mc
The angle between two lines with direction vectors $\vec{u}_1=(1, 0, 1)$ and $\vec{u}_2=(0, -1, -1)$ is
A. $60^\circ$.
B. $120^\circ$.
C. $30^\circ$.
D. $45^\circ$.
::key A
$\cos\varphi=\dfrac{|-1|}{\sqrt2\cdot\sqrt2}=\dfrac12$, so $\varphi=60^\circ$. Option B forgets the absolute value, and option C uses sine by mistake.

::mc
The angle between a line with direction vector $\vec{u}=(1, 1, 0)$ and a plane with normal vector $\vec{n}=(0, 1, 1)$ is
A. $60^\circ$.
B. $45^\circ$.
C. $30^\circ$.
D. $90^\circ$.
::key C
$\sin\varphi=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12$, so $\varphi=30^\circ$. Option A uses cosine instead of sine.

::mc
Let $\varphi$ be the angle between the plane $(P): x-2y+2z=0$ and the plane $(Oxy)$. Then
A. $\sin\varphi=\dfrac23$.
B. $\cos\varphi=\dfrac23$.
C. $\cos\varphi=\dfrac29$.
D. $\cos\varphi=-\dfrac23$.
::key B
$\cos\varphi=\dfrac{|2|}{3\cdot1}=\dfrac23$. Option A uses the line-and-plane formula, C forgets the square root in the denominator, and D forgets the absolute value.

::mc
In the cube $ABCD.A'B'C'D'$, the angle between the lines $A'C'$ and $B'C$ is
A. $45^\circ$.
B. $90^\circ$.
C. $60^\circ$.
D. $120^\circ$.
::key C
With edge $1$ and the axes used in the lesson: $\overrightarrow{A'C'}=(1, 1, 0)$, $\overrightarrow{B'C}=(0, 1, -1)$, $\cos\varphi=\dfrac{1}{2}$. (Geometrically: $B'C\parallel A'D$, and triangle $A'C'D$ is equilateral because its three sides are face diagonals.) Option D is the angle between two vectors pointing the wrong way.

::tf
Let $(P): 2x+y-2z+1=0$ and the line $d: x=1+t$, $y=-2t$, $z=3$.
a) The angle between $d$ and $(P)$ is $0^\circ$.
b) $(P)$ is perpendicular to the plane $(Q): x+z-4=0$.
c) The angle between $(P)$ and $(Oxy)$ is about $41.8^\circ$.
d) $d$ is perpendicular to the plane $(Oxy)$.
::key T T F F
a) True: $\vec{u}\cdot\vec{n}=2-2+0=0$, so $\sin\varphi=0$. b) True: $2+0-2=0$. c) False: $\cos\varphi=\dfrac23$, so the angle is about $48.2^\circ$; $41.8^\circ$ comes from using sine by mistake. d) False: $\vec{u}=(1, -2, 0)$ is not parallel to $(0, 0, 1)$; in fact $d$ is parallel to $(Oxy)$.

::sa
Find the angle between the planes $(P): x+2y+2z-1=0$ and $(Q): 2x+y-z+5=0$, in degrees, to 1 decimal place.
::key 74.2
$\cos\varphi=\dfrac{|2+2-2|}{3\sqrt6}=\dfrac{2}{3\sqrt6}\approx0.272$, so $\varphi\approx74.2^\circ$.

::sa
A filming drone at $D(0, 0, 40)$ points its camera at a target $T(30, 40, 0)$ on the ground (unit: metre). Find the angle between the line of sight $DT$ and the ground, in degrees, to 1 decimal place.
::key 38.7
$\overrightarrow{DT}=(30, 40, -40)$ and $|\overrightarrow{DT}|=\sqrt{4100}$. $\sin\varphi=\dfrac{40}{\sqrt{4100}}\approx0.625$, so $\varphi\approx38.7^\circ$.
:::
