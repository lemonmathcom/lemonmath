---
title: The circumcircle and incircle of a triangle
description: Find the centre and radius of the circumcircle and incircle of a triangle, for right-angled and equilateral triangles and in real-life problems.
minutes: 20
---

:::goals
- Recognise the circumcircle and the incircle of a triangle and explain why their centres are where the perpendicular bisectors, and the angle bisectors, meet.
- Find the circumradius of a right-angled triangle and both radii of an equilateral triangle.
- Apply these ideas to real-life problems.
:::

Suppose three mountain villages $A$, $B$, $C$ want to share one phone mast placed at the **same distance** from all three villages, so that no village is "worse off". Where should the mast go?

Another problem: from a triangular wooden board, a carpenter wants to cut the **largest** round tabletop. Its edge must touch all three sides of the board, because if one side is not touched, the circle can still be enlarged. Two problems, two special circles of a triangle.

## The circumcircle of a triangle

### Explore: a point equidistant from three vertices

A point equidistant from $A$ and $B$ lies on the perpendicular bisector of $AB$; a point equidistant from $B$ and $C$ lies on the perpendicular bisector of $BC$. The point $O$ where these two lines meet has $OA=OB=OC$, so $O$ also lies on the perpendicular bisector of $AC$. The circle with centre $O$ and radius $OA$ passes through all three vertices.

:::definition Circumcircle of a triangle
The circle through the three vertices of a triangle is the **circumcircle** of the triangle; the triangle is **inscribed in** the circle. Its centre (the circumcentre) is the point where the three perpendicular bisectors of the triangle meet.
:::

Every triangle has exactly one circumcircle. The centre $O$ lies inside the triangle if the triangle is acute, outside if it is obtuse, and on the hypotenuse if it is right-angled.

:::diagram The circumcircle of the triangle $ABC$
alt: The triangle ABC inscribed in a circle with centre O; from O, perpendicular segments go to the midpoints of the three sides
point O 0,0 right
point A -2.598,-1.5 below-left
point B 2.598,-1.5 below-right
point C -0.521,2.954 above
point M 0,-1.5 below
point N 1.039,0.727 right
point P -1.56,0.727 left
polygon A B C
circle O 3
segment O M dashed
segment O N dashed
segment O P dashed
right O M B
right O N C
right O P A
:::

### Right-angled triangles

If the triangle $ABC$ is right-angled at $A$, then $\angle BAC=90^\circ$ is an inscribed angle, so it stands on a semicircle (lesson [Inscribed angles](lesson:inscribed-angles)). Hence:

:::theorem Circumcircle of a right-angled triangle
The circumcentre of a right-angled triangle is the midpoint of the hypotenuse; the circumradius is half the hypotenuse.
:::

:::example Application: placing a phone mast
Suppose three villages $A$, $B$, $C$ have $AB=6$ km, $AC=8$ km and $\angle BAC=90^\circ$. Find where to put a mast at the same distance from the three villages, and find that distance.

**Solution.**

*Understand.* We need a point equidistant from the three vertices, that is, the circumcentre of the triangle $ABC$.

*Plan.* The triangle is right-angled at $A$, so the centre is the midpoint of the hypotenuse $BC$.

*Solve.* In the triangle $ABC$, right-angled at $A$, Pythagoras' theorem gives

$$BC=\sqrt{6^2+8^2}=10\ \text{(km)}.$$

Let $O$ be the midpoint of $BC$; then $OA=OB=OC=\dfrac{BC}{2}=5$ km.

So the mast goes at the midpoint of $BC$, $5$ km from each village.

*Look back.* If the angle at $A$ were obtuse, the centre would lie **outside** the triangle: the mast would be further from all three villages than necessary. Then another criterion could be chosen (for instance, a mast at the midpoint of the longest side that still covers all three villages). Mathematics answers exactly the question we ask, so we must ask the right question.
:::

## The incircle of a triangle

A point on the bisector of an angle is equidistant from the two arms of the angle (grade 7). The point $I$ where the internal bisectors at $B$ and $C$ meet is equidistant from all three sides, so $I$ also lies on the bisector of the angle at $A$.

:::definition Incircle of a triangle
The circle that touches the three sides of a triangle is the **incircle** of the triangle; the triangle is **circumscribed about** the circle. Its centre (the incentre) is the point where the three internal angle bisectors meet, and it always lies inside the triangle.
:::

The radius $r$ is the distance from $I$ to each side. The sides are tangents, so the two tangent segments from each vertex are equal (lesson [Relative positions of a line and a circle](lesson:line-circle-positions)).

:::diagram The incircle of the right-angled triangle $ABC$ with sides $3$, $4$, $5$
alt: The triangle ABC right-angled at A with AB equal to 4 and AC equal to 3; a circle with centre I and radius 1 touches the three sides at D, E, F
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
point I 1,1 right
point D 1,0 below
point E 1.6,1.8 above-right
point F 0,1 left
polygon A B C
circle I 1
segment I D dashed
segment I F dashed
segment I E dashed
right A D I
right A F I
right B A C
:::

:::example The inradius of a right-angled triangle
The triangle $ABC$ is right-angled at $A$, with $AB=4$ cm and $AC=3$ cm. Find the radius $r$ of its incircle.

**Solution.** We have $BC=\sqrt{4^2+3^2}=5$ (cm). Let $D$, $E$, $F$ be the points of contact on $AB$, $BC$, $CA$. The quadrilateral $ADIF$ has three right angles and $ID=IF=r$, so it is a square, hence $AD=AF=r$. By the property of two tangents from a point, $BD=BE$ and $CE=CF$. Hence

$$AB+AC-BC=(r+BD)+(r+CF)-(BE+CE)=2r.$$

So $r=\dfrac{4+3-5}{2}=1$ (cm).

So the radius of the incircle is $1$ cm.

**Remark.** The formula $r=\dfrac{b+c-a}{2}$ holds for every right-angled triangle with shorter sides $b$, $c$ and hypotenuse $a$.
:::

:::example Application: the largest round tabletop
From a wooden board in the shape of a right-angled triangle with sides $30$ cm, $40$ cm and $50$ cm, a carpenter cuts the largest round tabletop. Find the radius of the tabletop and the area of wood wasted (give your answer to the nearest cm²).

**Solution.** The largest tabletop is the disc inside the incircle of the triangle. We have $30^2+40^2=50^2$, so the triangle is right-angled with hypotenuse $50$ cm. Hence

$$r=\frac{30+40-50}{2}=10\ \text{(cm)}.$$

The wasted area is the area of the triangle minus the area of the disc:

$$\frac12\cdot30\cdot40-\pi\cdot10^2=600-100\pi\approx286\ \text{(cm}^2).$$

So the tabletop has radius $10$ cm and about $286$ cm² of wood is wasted.
:::

## Equilateral triangles

In an equilateral triangle, each perpendicular bisector is also an angle bisector, a median and an altitude. So the circumcentre and the incentre **coincide** at the centroid $G$. The centroid lies on each median, two thirds of the way from the vertex (grade 7).

:::theorem Equilateral triangle with side $a$
The altitude (also a median) has length $h=\dfrac{a\sqrt3}{2}$, so
$$R=\frac23h=\frac{a\sqrt3}{3},\qquad r=\frac13h=\frac{a\sqrt3}{6},\qquad R=2r.$$
:::

:::example An equilateral triangle with side $6$ cm
Find the radii of the circumcircle and the incircle of an equilateral triangle with side $6$ cm.

**Solution.** The altitude of the triangle is $h=\dfrac{6\sqrt3}{2}=3\sqrt3$ (cm). Both centres are at the centroid $G$, hence

$$R=\frac23\cdot3\sqrt3=2\sqrt3\approx3.46\ \text{(cm)},\qquad r=\frac13\cdot3\sqrt3=\sqrt3\approx1.73\ \text{(cm)}.$$

So $R=2\sqrt3$ cm and $r=\sqrt3$ cm.
:::

:::warning Common mistakes
- **Mixing up the two centres.** The circumcentre is where the **perpendicular bisectors** meet (equidistant from the vertices); the incentre is where the **angle bisectors** meet (equidistant from the sides).
- **Taking $R$ equal to the hypotenuse.** Wrong: the hypotenuse is $10$ cm, so $R=10$ cm. Right: $R=5$ cm (half the hypotenuse).
- **Swapping $\dfrac23$ and $\dfrac13$ in an equilateral triangle.** $R$ goes from the centre to a vertex (longer), $r$ from the centre to a side: $R=2r$.
:::

**Connections.** This lesson pulls together earlier ideas: perpendicular bisectors and angle bisectors (grade 7), the angle in a semicircle, and two tangents from a point. The question "a circle through three points" grows into "do four points lie on one circle?" in [Cyclic quadrilaterals](lesson:cyclic-quadrilaterals), and the equilateral triangle is the first case of a [regular polygon](lesson:regular-polygons).

## Key terms

:::terms
- circumcircle (circumscribed circle) | đường tròn ngoại tiếp
- incircle (inscribed circle) | đường tròn nội tiếp
- circumcentre | tâm đường tròn ngoại tiếp
- incentre | tâm đường tròn nội tiếp
- perpendicular bisector | đường trung trực
- angle bisector | đường phân giác
- centroid | trọng tâm
:::

## Summary

- Circumcentre $O$: where the three perpendicular bisectors meet, $OA=OB=OC=R$.
- Incentre $I$: where the three angle bisectors meet, at distance $r$ from each side.
- Right-angled triangle: $O$ is the midpoint of the hypotenuse, $R=\dfrac a2$; $r=\dfrac{b+c-a}{2}$.
- Equilateral triangle with side $a$: $R=\dfrac{a\sqrt3}{3}$, $r=\dfrac{a\sqrt3}{6}$, and the two centres coincide.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The triangle $ABC$ is right-angled at $A$, with $AB=5$ cm and $AC=12$ cm. Find the centre and the radius of its circumcircle.

::hint
**What you need:** the centre is the midpoint of the hypotenuse, and $R$ is half the hypotenuse.

**Steps:**
1. Find $BC$ by Pythagoras' theorem, then halve it.

::solution
We have $BC=\sqrt{5^2+12^2}=13$ (cm). The centre $O$ is the midpoint of $BC$ and $R=\dfrac{13}{2}=6.5$ (cm).

So the centre is the midpoint of $BC$ and $R=6.5$ cm.

**Answer.** The midpoint of $BC$; $R=6.5$ cm.
:::

:::exercise
Find the radii of the circumcircle and the incircle of an equilateral triangle with side $9$ cm.

::hint
**What you need:** $R=\dfrac{a\sqrt3}{3}$, $r=\dfrac{a\sqrt3}{6}$.

**Steps:**
1. Substitute $a=9$ into both formulae.

::solution
We have $R=\dfrac{9\sqrt3}{3}=3\sqrt3$ (cm) and $r=\dfrac{9\sqrt3}{6}=\dfrac{3\sqrt3}{2}$ (cm).

So $R=3\sqrt3\approx5.2$ cm and $r=\dfrac{3\sqrt3}{2}\approx2.6$ cm.

**Answer.** $R=3\sqrt3$ cm; $r=\dfrac{3\sqrt3}{2}$ cm.
:::

:::exercise
An equilateral triangle is inscribed in a circle of radius $4$ cm. Find the side of the triangle.

::hint
**What you need:** $R=\dfrac{a\sqrt3}{3}$.

**Steps:**
1. Solve $\dfrac{a\sqrt3}{3}=4$ for $a$.

::solution
We have $\dfrac{a\sqrt3}{3}=4$, so $a=\dfrac{12}{\sqrt3}=4\sqrt3$ (cm).

So the side of the triangle is $4\sqrt3\approx6.93$ cm.

**Answer.** $4\sqrt3$ cm.
:::

:::exercise
The triangle $ABC$ is right-angled at $A$, with $AB=6$ cm and $AC=8$ cm. Find the circumradius $R$ and the inradius $r$.

::hint
**What you need:** $R=\dfrac a2$, $r=\dfrac{b+c-a}{2}$.

**Steps:**
1. Find the hypotenuse $BC$.
2. Substitute into both formulae.

::solution
We have $BC=\sqrt{6^2+8^2}=10$ (cm). Hence $R=5$ cm and $r=\dfrac{6+8-10}{2}=2$ (cm).

So $R=5$ cm and $r=2$ cm.

**Answer.** $R=5$ cm; $r=2$ cm.
:::

:::exercise
Suppose a flower bed is an equilateral triangle with side $30$ m. A rotating sprinkler is placed at the point equidistant from the three vertices.

a) What is the smallest spraying radius that reaches all three corners of the bed?

b) What is the largest spraying radius that keeps the water inside the bed?

(Give your answers to 1 decimal place.)

::hint
**What you need:** the sprinkler is at the common centre of the two circles; reaching the corners needs $R$, staying inside needs at most $r$.

**Steps:**
1. Compute $R=\dfrac{a\sqrt3}{3}$ and $r=\dfrac{a\sqrt3}{6}$ with $a=30$.

::solution
a) The spraying radius must be at least $R=\dfrac{30\sqrt3}{3}=10\sqrt3\approx17.3$ (m).

b) The spraying radius must be at most $r=\dfrac{30\sqrt3}{6}=5\sqrt3\approx8.7$ (m).

So a) about $17.3$ m; b) about $8.7$ m. No radius meets both requirements.

**Answer.** a) $10\sqrt3\approx17.3$ m; b) $5\sqrt3\approx8.7$ m.
:::

:::exercise
A piece of card is a right-angled triangle with shorter sides $9$ cm and $12$ cm. Lan wants to cut the largest possible disc from it. Find the radius of the disc and the percentage of the card that is used (give your answer to the nearest whole number).

::hint
**What you need:** the largest disc is bounded by the incircle; $r=\dfrac{b+c-a}{2}$.

**Steps:**
1. Find the hypotenuse and $r$.
2. Divide the area of the disc by the area of the triangle.

::solution
The hypotenuse is $\sqrt{9^2+12^2}=15$ (cm), so $r=\dfrac{9+12-15}{2}=3$ (cm). The area of the triangle is $\dfrac12\cdot9\cdot12=54$ (cm²) and the area of the disc is $9\pi$ cm². Hence the fraction used is

$$\frac{9\pi}{54}=\frac{\pi}{6}\approx52\%.$$

So the disc has radius $3$ cm and uses about $52\%$ of the card.

**Answer.** $r=3$ cm; about $52\%$.
:::

:::exercise
**(2.0 marks)** The triangle $ABC$ is right-angled at $A$, with $AB=9$ cm and $AC=12$ cm.

a) Find $BC$ and the radius $R$ of the circumcircle of the triangle $ABC$.

b) Find the radius $r$ of the incircle of the triangle $ABC$.

c) Find the area of the part of the circumscribed disc that lies outside the triangle $ABC$ (give your answer to 2 decimal places).

::hint
**What you need:** $R=\dfrac{BC}{2}$; $r=\dfrac{AB+AC-BC}{2}$; the area of a disc is $\pi R^2$.

**Steps:**
1. Use Pythagoras' theorem.
2. Subtract the area of the triangle from the area of the disc.

::solution
a) We have $BC=\sqrt{9^2+12^2}=15$ (cm), so $R=7.5$ cm.

b) We have $r=\dfrac{9+12-15}{2}=3$ (cm).

c) The required area is $\pi\cdot7.5^2-\dfrac12\cdot9\cdot12=56.25\pi-54\approx122.71$ (cm²).

So a) $BC=15$ cm, $R=7.5$ cm; b) $r=3$ cm; c) about $122.71$ cm².

**Answer.** a) $15$ cm, $7.5$ cm; b) $3$ cm; c) $\approx122.71$ cm².
:::

:::exercise Challenge
Let $I$ and $r$ be the centre and radius of the incircle of the triangle $ABC$. Prove that the area of $ABC$ is $\dfrac12r\,(AB+BC+CA)$. Application: the triangle $ABC$ has $AB=13$ cm, $BC=14$ cm, $CA=15$ cm and altitude $AH=12$ cm; find $r$.

::hint
**What you need:** the distance from $I$ to each side is $r$.

**Steps:**
1. Split the triangle $ABC$ into the three triangles $IAB$, $IBC$, $ICA$.
2. Compute the area $\dfrac12\cdot BC\cdot AH$, then deduce $r$.

::solution
The three triangles $IAB$, $IBC$, $ICA$ all have height $r$ from $I$, hence

$$\text{area of } ABC=\frac12r\cdot AB+\frac12r\cdot BC+\frac12r\cdot CA=\frac12r\,(AB+BC+CA).$$

Application: the area is $\dfrac12\cdot14\cdot12=84$ (cm²), so $r=\dfrac{2\cdot84}{13+14+15}=\dfrac{168}{42}=4$ (cm).

So $r=4$ cm.

**Answer.** $r=4$ cm.
:::

## Mini test

:::quiz
::mc
The circumcentre of a triangle is the point where the three lines of which kind meet?
A. Perpendicular bisectors.
B. Angle bisectors.
C. Medians.
D. Altitudes.
::key A
The centre is equidistant from the three vertices, so it lies on the perpendicular bisectors. B gives the incentre, C the centroid and D the orthocentre; in general none of these is equidistant from the vertices.

::mc
A right-angled triangle has hypotenuse $10$ cm. The radius of its circumcircle is
A. $10$ cm.
B. $5$ cm.
C. $2.5$ cm.
D. $20$ cm.
::key B
The radius is half the hypotenuse. A takes the whole hypotenuse, C halves twice, and D doubles instead of halving.

::mc
The radius of the incircle of an equilateral triangle with side $6$ cm is
A. $2\sqrt3$ cm.
B. $3\sqrt3$ cm.
C. $3$ cm.
D. $\sqrt3$ cm.
::key D
$r=\dfrac{6\sqrt3}{6}=\sqrt3$. A is $R$, B is the altitude, and C is half the side.

::mc
A right-angled triangle has shorter sides $5$ cm and $12$ cm. The radius of its incircle is
A. $4$ cm.
B. $6.5$ cm.
C. $2$ cm.
D. $8.5$ cm.
::key C
The hypotenuse is $13$ cm, so $r=\dfrac{5+12-13}{2}=2$. A forgets to halve, B is $R$, and D forgets to subtract the hypotenuse.

::tf
The triangle $ABC$ is equilateral with side $12$ cm. Decide whether each statement is true or false.
a) The radius of the circumcircle is $4\sqrt3$ cm.
b) The radius of the incircle is $2\sqrt3$ cm.
c) The circumradius is twice the inradius.
d) The circumcentre and the incentre are two different points.
::key T T T F
a) True: $\dfrac{12\sqrt3}{3}$. b) True: $\dfrac{12\sqrt3}{6}$. c) True: $R=2r$. d) False: both centres are at the centroid.

::sa
A right-angled triangle has shorter sides $8$ cm and $15$ cm. Find the radius (in cm) of its circumcircle (as a decimal).
::key 8.5
The hypotenuse is $\sqrt{64+225}=17$ cm, so $R=8.5$ cm.

::sa
A triangle has area $24$ cm² and perimeter $24$ cm. Find the radius (in cm) of its incircle.
::key 2
Area $=\dfrac12r\cdot(\text{perimeter})$, so $r=\dfrac{2\cdot24}{24}=2$ cm.
:::
