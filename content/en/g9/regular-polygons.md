---
title: Regular polygons
description: Recognise regular polygons, find each interior angle, the radii of the circumcircle and incircle, and the rotations that map a regular polygon onto itself.
minutes: 20
---

:::goals
- Recognise a regular polygon and find the size of each of its angles.
- Find the centre and the radii of the circumcircle and incircle of an equilateral triangle, a square and a regular hexagon.
- Recognise the rotations that map a regular polygon onto itself.
- Apply these ideas to real-life problems (floor tiles, nuts, observation wheels).
:::

More than two thousand years ago, Archimedes (287–212 BC) wanted to know how many times longer a circle is than its diameter. He could not measure it directly, so he "trapped" the circle between two **regular polygons** with $96$ sides, one inscribed and one circumscribed, and computed their perimeters. The result: $3\frac{10}{71}<\pi<3\frac17$ (according to MacTutor, University of St Andrews).

Why *regular* polygons? Because a regular polygon is completely determined by its number of sides and the radius of its circumcircle, so every one of its measurements can be calculated. This lesson gives you Archimedes' first tools.

## Regular polygons and their angles

:::definition Regular polygon
A **regular polygon** is a convex polygon whose sides are all equal and whose angles are all equal.
:::

The equilateral triangle and the square are familiar regular polygons. A rhombus (equal sides but unequal angles) or a non-square rectangle (equal angles but unequal sides) is **not** a regular polygon: both conditions are needed.

### Explore: the sum of the angles

From one vertex of a convex polygon with $n$ sides, draw the diagonals: they split the polygon into $n-2$ triangles. Each triangle has angles adding up to $180^\circ$, so the angles of the polygon add up to $(n-2)\cdot180^\circ$. A regular polygon has $n$ equal angles, hence:

:::theorem Each angle of a regular polygon with $n$ sides
$$\alpha=\frac{(n-2)\cdot180^\circ}{n}.$$
:::

:::example Angles of a regular pentagon, hexagon and octagon
Find each angle of a regular pentagon, a regular hexagon and a regular octagon.

**Solution.** Using the formula with $n=5$, $n=6$ and $n=8$, we have

$$\frac{3\cdot180^\circ}{5}=108^\circ,\qquad \frac{4\cdot180^\circ}{6}=120^\circ,\qquad \frac{6\cdot180^\circ}{8}=135^\circ.$$

So each angle of a regular pentagon, hexagon and octagon is $108^\circ$, $120^\circ$ and $135^\circ$ respectively.
:::

The size of the angle settles a very practical question: covering a floor with identical tiles.

:::example Application: floor tiles
We want to cover a floor with tiles that are all the same regular polygon, so that at each shared vertex the tiles fit exactly, without overlapping. Can regular hexagonal tiles be used? What about regular pentagonal tiles?

**Solution.**

*Understand.* At a shared vertex, the angles of the tiles around it must fill exactly $360^\circ$.

*Plan.* Divide $360^\circ$ by each angle; the result must be a whole number.

*Solve.* A regular hexagon has angles of $120^\circ$ and $360^\circ\div120^\circ=3$, so three tiles fit exactly at each vertex. A regular pentagon has angles of $108^\circ$ and $360^\circ\div108^\circ\approx3.33$ is not a whole number: three tiles leave a gap of $360^\circ-324^\circ=36^\circ$, and four tiles overlap.

So hexagonal tiles can be used and pentagonal tiles cannot.

*Look back.* Which regular polygons work? We need $\alpha$ to divide $360^\circ$, with $60^\circ\leq\alpha<180^\circ$. Only $\alpha=60^\circ$, $90^\circ$, $120^\circ$ work: the equilateral triangle, the square and the regular hexagon. That is why floors are usually tiled with squares or hexagons.
:::

## The circumcircle and incircle of a regular polygon

:::theorem Theorem
Every regular polygon has exactly one circumcircle and exactly one incircle; these two circles have the same centre, called the **centre of the regular polygon**.
:::

Joining the centre $O$ to the vertices splits a regular polygon with $n$ sides into $n$ congruent isosceles triangles; each has an angle of $\dfrac{360^\circ}{n}$ at $O$. The circumradius $R$ is the equal side, and the inradius $r$ is the height of these isosceles triangles.

:::diagram The regular hexagon $ABCDEF$ inscribed in the circle $(O, R)$
alt: The regular hexagon ABCDEF inscribed in a circle with centre O; the radii OA, OB and the segment OH perpendicular to AB at its midpoint H
point O 0,0 left
point A 3,0 right
point B 1.5,2.598 above-right
point C -1.5,2.598 above-left
point D -3,0 left
point E -1.5,-2.598 below-left
point F 1.5,-2.598 below-right
point H 2.25,1.299 right
polygon A B C D E F
circle O 3
segment O A
segment O B
segment O H dashed
right O H A
:::

For a regular hexagon, each isosceles triangle $OAB$ has an angle of $\dfrac{360^\circ}{6}=60^\circ$ at $O$, so it is **equilateral**. Hence the side of a regular hexagon equals its circumradius: $a=R$.

| Regular polygon with side $a$ | $R$ | $r$ |
|---|---|---|
| Equilateral triangle | $\dfrac{a\sqrt3}{3}$ | $\dfrac{a\sqrt3}{6}$ |
| Square | $\dfrac{a\sqrt2}{2}$ | $\dfrac a2$ |
| Regular hexagon | $a$ | $\dfrac{a\sqrt3}{2}$ |

:::example A regular hexagon with side $4$ cm
The regular hexagon $ABCDEF$ has side $4$ cm. Find $R$, $r$ and the area of the hexagon.

**Solution.** We have $R=a=4$ cm (the triangle $OAB$ is equilateral). Let $H$ be the midpoint of $AB$; then $OH\perp AB$ (the triangle $OAB$ is equilateral), so

$$r=OH=\frac{4\sqrt3}{2}=2\sqrt3\ \text{(cm)}.$$

The hexagon consists of $6$ equilateral triangles with side $4$ cm, hence its area is

$$S=6\cdot\frac12\cdot AB\cdot OH=6\cdot\frac12\cdot4\cdot2\sqrt3=24\sqrt3\approx41.57\ \text{(cm}^2).$$

So $R=4$ cm, $r=2\sqrt3$ cm and $S=24\sqrt3\approx41.57$ cm².
:::

## Rotations that keep a regular polygon

:::definition Rotation
The **rotation** about $O$ through $\alpha^\circ$ ($0^\circ<\alpha^\circ<360^\circ$) maps $O$ to itself and maps each point $M\neq O$ to the point $M'$ such that $OM'=OM$ and the angle turned from $OM$ to $OM'$ is $\alpha^\circ$ in the chosen direction (clockwise or anticlockwise).
:::

Picture a plate shaped like a regular hexagon turning about its centre: after every $60^\circ$ it fits exactly into its "old place" again. In general, the rotations about $O$ through $\dfrac{360^\circ}{n}$, $2\cdot\dfrac{360^\circ}{n}$, ..., $(n-1)\cdot\dfrac{360^\circ}{n}$ (all in the same direction) map a regular polygon with $n$ sides and centre $O$ onto itself.

:::example Rotations that map a square onto itself
The square $ABCD$ has centre $O$ (its vertices go anticlockwise). List the anticlockwise rotations about $O$ that map the square onto itself, and find the image of the vertex $A$ under each one.

**Solution.** We have $n=4$, so the angles are $\dfrac{360^\circ}{4}=90^\circ$, $180^\circ$ and $270^\circ$. We have $\angle AOB=\angle BOC=\angle COD=90^\circ$ (the diagonals of a square are perpendicular) and $OA=OB=OC=OD$. Hence

$$\text{rotation through } 90^\circ:\ A\mapsto B,\qquad 180^\circ:\ A\mapsto C,\qquad 270^\circ:\ A\mapsto D.$$

So there are three rotations, through $90^\circ$, $180^\circ$ and $270^\circ$, mapping $A$ to $B$, $C$ and $D$ respectively.
:::

:::warning Common mistakes
- **Checking only one condition.** Wrong: "a rhombus has equal sides, so it is a regular polygon". Right: the angles must be equal too.
- **Confusing the angle of the polygon with the angle at the centre.** A regular hexagon has angles of $120^\circ$, while the angle at the centre $\angle AOB$ is $60^\circ$.
- **Confusing $R$ and $r$.** $R$ goes from the centre to a **vertex**, $r$ from the centre to the **midpoint of a side**; always $r<R$.
:::

**Connections.** This lesson builds on the angle sum of a triangle, equilateral triangles and [the circumcircle and incircle of a triangle](lesson:circumcircle-incircle). The perimeter of the inscribed regular hexagon is $6R$, less than the circumference $2\pi R$, so $\pi>3$: that is Archimedes' first step. Increasing the number of sides to $12$, $24$, $48$, $96$ brings the perimeter closer and closer to the circumference. Rotations also explain the patterns and logos with rotational symmetry all around us.

## Key terms

:::terms
- regular polygon | đa giác đều
- regular pentagon | ngũ giác đều
- regular hexagon | lục giác đều
- regular octagon | bát giác đều
- centre of a regular polygon | tâm của đa giác đều
- rotation | phép quay
- anticlockwise | ngược chiều kim đồng hồ
- tessellation | lát kín mặt phẳng
:::

## Summary

- Regular polygon: convex, all sides equal and all angles equal.
- Each angle: $\dfrac{(n-2)\cdot180^\circ}{n}$; the angle at the centre on one side: $\dfrac{360^\circ}{n}$.
- The circumcircle and incircle share a centre; a regular hexagon has $R=a$, $r=\dfrac{a\sqrt3}{2}$; a square has $R=\dfrac{a\sqrt2}{2}$, $r=\dfrac a2$.
- The rotations about $O$ through $k\cdot\dfrac{360^\circ}{n}$ ($k=1,\dots,n-1$) map a regular $n$-sided polygon onto itself.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find each angle of a regular decagon ($10$ sides) and of a regular polygon with $12$ sides.

::hint
**What you need:** $\alpha=\dfrac{(n-2)\cdot180^\circ}{n}$.

**Steps:**
1. Substitute $n=10$ and $n=12$.

::solution
We have $\dfrac{8\cdot180^\circ}{10}=144^\circ$ and $\dfrac{10\cdot180^\circ}{12}=150^\circ$.

So each angle is $144^\circ$ and $150^\circ$ respectively.

**Answer.** $144^\circ$; $150^\circ$.
:::

:::exercise
Each angle of a regular polygon is $140^\circ$. How many sides does it have?

::hint
**What you need:** $\dfrac{(n-2)\cdot180^\circ}{n}=140^\circ$.

**Steps:**
1. Multiply both sides by $n$ and solve the linear equation.

::solution
We have $(n-2)\cdot180=140n$, so $180n-360=140n$, $40n=360$ and $n=9$.

So the polygon has $9$ sides.

**Answer.** $9$ sides.
:::

:::exercise
a) Find the side of a square inscribed in a circle of radius $5$ cm.

b) Find the side of a square circumscribed about a circle of radius $5$ cm.

::hint
**What you need:** a square with side $a$ has $R=\dfrac{a\sqrt2}{2}$ and $r=\dfrac a2$.

**Steps:**
1. a) Solve $\dfrac{a\sqrt2}{2}=5$. b) Solve $\dfrac a2=5$.

::solution
a) We have $\dfrac{a\sqrt2}{2}=5$, so $a=\dfrac{10}{\sqrt2}=5\sqrt2\approx7.07$ (cm).

b) We have $\dfrac a2=5$, so $a=10$ cm.

So a) $5\sqrt2$ cm; b) $10$ cm.

**Answer.** a) $5\sqrt2$ cm; b) $10$ cm.
:::

:::exercise
The equilateral triangle $ABC$ has centre $O$ (its vertices go anticlockwise). List the anticlockwise rotations about $O$ that map the triangle onto itself. Does the rotation about $O$ through $90^\circ$ map the triangle onto itself?

::hint
**What you need:** the angles $k\cdot\dfrac{360^\circ}{n}$.

**Steps:**
1. With $n=3$, find the angles of rotation.
2. Check whether $90^\circ$ is a multiple of $120^\circ$.

::solution
We have $\dfrac{360^\circ}{3}=120^\circ$, so the rotations are through $120^\circ$ (mapping $A$ to $B$) and $240^\circ$ (mapping $A$ to $C$). The rotation through $90^\circ$ maps $A$ to a point $A'$ with $\angle AOA'=90^\circ$, but $\angle AOB=\angle AOC=120^\circ$, so $A'$ is not a vertex of the triangle.

So there are two rotations, through $120^\circ$ and $240^\circ$; the rotation through $90^\circ$ does not keep the triangle.

**Answer.** $120^\circ$ and $240^\circ$; no.
:::

:::exercise
Suppose a nut has a face that is a regular hexagon with side $10$ mm. The size of spanner that fits the nut is the distance between two opposite sides of the hexagon. Find the spanner size (give your answer to 1 decimal place) and the distance between two opposite vertices.

::hint
**What you need:** the distance between opposite sides is $2r$; between opposite vertices it is $2R$.

**Steps:**
1. Compute $r=\dfrac{a\sqrt3}{2}$ and $R=a$.

::solution
We have $r=\dfrac{10\sqrt3}{2}=5\sqrt3$ (mm), so the distance between opposite sides is $2r=10\sqrt3\approx17.3$ (mm). The distance between opposite vertices is $2R=2\cdot10=20$ (mm).

So a spanner of about $17.3$ mm is needed; opposite vertices are $20$ mm apart.

**Answer.** About $17.3$ mm; $20$ mm.
:::

:::exercise
Suppose an observation wheel has $12$ cabins equally spaced on a circle of radius $20$ m, numbered $1$ to $12$ in the direction of rotation.

a) Through what angle must the wheel turn for cabin $1$ to reach the old position of cabin $5$?

b) Find the distance between two neighbouring cabins (give your answer to 2 decimal places). (Revise [trigonometric ratios](lesson:acute-angle-trig-ratios).)

::hint
**What you need:** the $12$ cabins are the $12$ vertices of a regular polygon; the angle at the centre between neighbouring cabins is $30^\circ$.

**Steps:**
1. From cabin $1$ to the position of cabin $5$ there are $4$ gaps.
2. Draw the height of the isosceles triangle $OAB$ and use $\sin15^\circ$.

::solution
a) Neighbouring cabins are $\dfrac{360^\circ}{12}=30^\circ$ apart at the centre, so the wheel must turn through $4\cdot30^\circ=120^\circ$.

b) Let $A$, $B$ be neighbouring cabins and $H$ the midpoint of $AB$. The triangle $OAB$ is isosceles at $O$ with $\angle AOB=30^\circ$, so $\angle AOH=15^\circ$ and

$$AB=2AH=2\cdot20\cdot\sin15^\circ\approx10.35\ \text{(m)}.$$

So a) $120^\circ$; b) about $10.35$ m.

**Answer.** a) $120^\circ$; b) about $10.35$ m.
:::

:::exercise
**(2.0 marks)** The regular hexagon $ABCDEF$ is inscribed in the circle $(O, 6\text{ cm})$.

a) Find the length of the side $AB$ and the angle $\angle AOB$.

b) Prove that the triangle $ACE$ is equilateral and find $AC$.

c) Find the area of the part of the disc outside the hexagon (give your answer to 2 decimal places).

::hint
**What you need:** the side of a regular hexagon equals $R$; an equilateral triangle with side $a$ is inscribed in a circle of radius $R=\dfrac{a\sqrt3}{3}$.

**Steps:**
1. b) Show $AC=CE=EA$ (equal arcs), then solve $\dfrac{AC\sqrt3}{3}=6$.
2. c) Subtract the area of $6$ equilateral triangles with side $6$ cm from $\pi R^2$.

::solution
a) We have $AB=R=6$ cm and $\angle AOB=\dfrac{360^\circ}{6}=60^\circ$.

b) Each of the arcs $AC$, $CE$, $EA$ is made of two equal arcs of $60^\circ$, so it measures $120^\circ$. Three equal arcs have three equal chords, hence $AC=CE=EA$ and the triangle $ACE$ is equilateral. It is inscribed in $(O, 6\text{ cm})$, so $\dfrac{AC\sqrt3}{3}=6$, hence $AC=6\sqrt3$ cm.

c) The area of the hexagon is $6\cdot\dfrac{6^2\sqrt3}{4}=54\sqrt3$ (cm²). The required area is $36\pi-54\sqrt3\approx19.57$ (cm²).

So a) $AB=6$ cm, $\angle AOB=60^\circ$; b) $AC=6\sqrt3$ cm; c) about $19.57$ cm².

**Answer.** a) $6$ cm, $60^\circ$; b) $6\sqrt3$ cm; c) $\approx19.57$ cm².
:::

:::exercise Challenge
From a square piece of card with side $10$ cm, four equal isosceles right-angled triangles are cut off at the corners to leave a regular octagon. Find the side of the octagon (in the form $a+b\sqrt2$, then to 2 decimal places). (Revise [rationalising the denominator](lesson:simplifying-root-expressions).)

::hint
**What you need:** an isosceles right-angled triangle with hypotenuse $x$ has shorter sides $\dfrac{x}{\sqrt2}$.

**Steps:**
1. Let $x$ be the side of the octagon; each side of the square is one side of the octagon plus two shorter sides of the triangles.
2. Solve the equation and rationalise the denominator.

::solution
Let $x$ (cm) be the side of the regular octagon ($0<x<10$). Each triangle cut off has hypotenuse $x$ and shorter sides $\dfrac{x}{\sqrt2}$. Along one side of the square we get the equation

$$x+2\cdot\frac{x}{\sqrt2}=10\ \Leftrightarrow\ x\left(1+\sqrt2\right)=10\ \Leftrightarrow\ x=\frac{10}{\sqrt2+1}=10\left(\sqrt2-1\right).$$

We have $x=-10+10\sqrt2\approx4.14$ (this satisfies the condition).

So the side of the regular octagon is $10\sqrt2-10\approx4.14$ cm.

**Answer.** $-10+10\sqrt2\approx4.14$ cm.
:::

## Mini test

:::quiz
::mc
Each angle of a regular hexagon is
A. $120^\circ$.
B. $60^\circ$.
C. $720^\circ$.
D. $108^\circ$.
::key A
$\dfrac{4\cdot180^\circ}{6}=120^\circ$. B is the angle at the centre, C is the sum of the angles, and D is the angle of a regular pentagon.

::mc
A regular hexagon inscribed in a circle of radius $5$ cm has side
A. $10$ cm.
B. $5\sqrt3$ cm.
C. $5$ cm.
D. $2.5$ cm.
::key C
The triangles $OAB$ are equilateral, so the side equals $R$. A is the distance between opposite vertices ($2R$), B the distance between opposite sides ($2r$), and D is $\dfrac R2$.

::mc
The smallest positive angle of a rotation about $O$ that maps a regular pentagon with centre $O$ onto itself is
A. $108^\circ$.
B. $36^\circ$.
C. $60^\circ$.
D. $72^\circ$.
::key D
$\dfrac{360^\circ}{5}=72^\circ$. A is the angle of a regular pentagon, B is half the angle at the centre, and C is the angle for a regular hexagon.

::mc
Each angle of a regular polygon is $150^\circ$. The number of sides is
A. $6$.
B. $12$.
C. $5$.
D. $24$.
::key B
$180n-360=150n$, so $n=12$. A takes $180^\circ\div30^\circ$ instead of $360^\circ\div30^\circ$, C takes $150^\circ\div30^\circ$, and D takes $360^\circ\div15^\circ$ (halving the $30^\circ$ by mistake).

::tf
The square $ABCD$ is inscribed in the circle $(O, 4\text{ cm})$. Decide whether each statement is true or false.
a) $AB=4\sqrt2$ cm.
b) $\angle AOB=90^\circ$.
c) The radius of the incircle of the square is $2\sqrt2$ cm.
d) The rotation about $O$ through $45^\circ$ maps the square onto itself.
::key T T T F
a) True: $\dfrac{a\sqrt2}{2}=4$. b) True: $\dfrac{360^\circ}{4}$. c) True: $r=\dfrac a2=2\sqrt2$. d) False: the angle must be a multiple of $90^\circ$.

::sa
Find the sum (in degrees) of the angles of a regular octagon.
::key 1080
$(8-2)\cdot180^\circ=1080^\circ$.

::sa
Find the area (in cm²) of a regular hexagon with side $2$ cm (give your answer to 1 decimal place).
::key 10.4
The hexagon consists of $6$ equilateral triangles with side $2$ cm, with area $6\cdot\dfrac{4\sqrt3}{4}=6\sqrt3\approx10.4$ cm².
:::
