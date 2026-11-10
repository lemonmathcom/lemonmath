---
title: Perpendicular planes
description: Learn dihedral angles, the angle between two planes, the test for perpendicular planes, and how to find angles in right prisms and regular pyramids.
minutes: 20
---

:::goals
- Recognise a dihedral angle and find its plane angle.
- Find and calculate the angle between two intersecting planes.
- Prove that two planes are perpendicular and use the properties of perpendicular planes.
- Recognise right prisms, regular prisms, cuboids and regular pyramids, and find the angles between their faces.
:::

A laptop screen turns about its hinge, which is a line $d$ lying in the base. Take a point $H$ on the hinge, a point $A$ on the base and a point $B$ on the screen so that $HA$ and $HB$ are both perpendicular to the hinge and each is $20$ cm long.

When is the screen upright, at a right angle to the base? If we measure $AB=20\sqrt2$ cm, can we draw a conclusion?

To answer, we need a way to measure how far open two planes are.

## Dihedral angles

### Explore: opening a laptop screen

Let $\theta=\angle AHB$ be the opening angle. Since $HA=HB=20$, we compute $AB$ for a few values of $\theta$:

| $\theta$ | $60^\circ$ | $90^\circ$ | $120^\circ$ |
|---|---|---|---|
| $AB$ | $20$ | $20\sqrt2\approx28.28$ | $20\sqrt3\approx34.64$ |

For $\theta=60^\circ$, triangle $AHB$ is equilateral, so $AB=20$. For $\theta=90^\circ$, Pythagoras' theorem gives $AB=\sqrt{20^2+20^2}=20\sqrt2$. For $\theta=120^\circ$, the isosceles triangle $AHB$ gives $AB=2\cdot20\cdot\sin60^\circ=20\sqrt3$.

Conversely, if $AB^2=800=HA^2+HB^2$, then by the converse of Pythagoras' theorem, $\angle AHB=90^\circ$. So $AB=20\sqrt2$ cm tells us the screen is upright. The angle $\angle AHB$ is exactly what we call the plane angle of a dihedral angle.

:::definition Dihedral angle
Two half-planes $(\alpha)$, $(\beta)$ with a common boundary line $d$ form a **dihedral angle**. The line $d$ is its **edge** and the two half-planes are its **faces**.
:::

:::definition Plane angle of a dihedral angle
Take a point $O\in d$. In $(\alpha)$ draw the ray $Ox\perp d$, and in $(\beta)$ draw the ray $Oy\perp d$. The angle $\angle xOy$ is the **plane angle** of the dihedral angle, and the **measure of the dihedral angle** is the measure of $\angle xOy$ (from $0^\circ$ to $180^\circ$).
:::

This measure does not depend on the position of $O$: when we slide $O$ along $d$, the new rays are parallel to the old ones and point the same way, so the two angles are equal.

:::diagram Plane angle of a dihedral angle
alt: Two half-planes with common edge d, rays Ox and Oy both perpendicular to d at O, and the angle xOy marked as the plane angle
point O 0,0 below
point E 0,3 ""
point X -3,-0.8 left
point U -3,2.2 ""
point Y 3.2,-0.6 right
point V 3.2,2.4 ""
polygon O E U X
polygon O E V Y
segment O E
segment O X
segment O Y
right X O E
right Y O E
angle X O Y "φ"
label 0.3,3.3 "d"
label -1.8,1.6 "(α)"
label 1.9,1.6 "(β)"
:::

### The angle between two planes

Two intersecting planes form four dihedral angles. Two neighbouring angles add up to $180^\circ$, so we choose the one that is at most $90^\circ$ to measure the opening.

:::definition Angle between two planes
Suppose $(\alpha)$ and $(\beta)$ intersect and one of their dihedral angles has plane angle $\varphi$. The **angle between** $(\alpha)$ and $(\beta)$ is $\varphi$ if $\varphi\le90^\circ$ and $180^\circ-\varphi$ if $\varphi>90^\circ$. If the planes are parallel or coincide, the angle between them is $0^\circ$.

Two planes are **perpendicular** when the angle between them is $90^\circ$; we write $(\alpha)\perp(\beta)$.
:::

:::note Finding the angle between two intersecting planes
1. Find the line of intersection $d$ of the two planes.
2. In each plane, find a line perpendicular to $d$ at the same point.
3. Find the angle between these two lines; if it is obtuse, take its supplement.
:::

We try this at once in a cube.

:::diagram Plane $(A'BCD')$ meets the base $(ABCD)$ along $BC$
alt: Cube ABCD.A'B'C'D' with hidden edges dashed, the rectangle A'BCD' and the angle ABA' equal to 45 degrees
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
segment A' B
segment C D' dashed
angle A B A' "45°"
:::

:::example The angle between two planes in a cube
In the cube $ABCD.A'B'C'D'$, find the angle between $(A'BCD')$ and $(ABCD)$.

**Solution.** The planes meet along $BC$, so we look for a line perpendicular to $BC$ at $B$ in each plane. In $(ABCD)$ it is $BA$, because $AB\perp BC$. In $(A'BCD')$ it is $BA'$, because $BC\perp(ABB'A')$ gives $BC\perp BA'$.

So the plane angle is $\angle ABA'$. Triangle $ABA'$ is right-angled and isosceles at $A$, since $AA'=AB$ and $AA'\perp AB$:

$$\angle ABA'=45^\circ.$$

So the angle between $(A'BCD')$ and $(ABCD)$ is $45^\circ$.
:::

## Perpendicular planes

How can we know that two planes are perpendicular without measuring an angle? The answer lies in a line perpendicular to a plane.

:::theorem Test for perpendicular planes
If a plane $(\alpha)$ contains a line $a$ that is perpendicular to a plane $(\beta)$, then $(\alpha)\perp(\beta)$.
:::

Here is why. Let $d$ be the line of intersection and $O$ the point where $a$ meets $(\beta)$; then $O\in d$. Since $a\perp(\beta)$, we have $a\perp d$. In $(\beta)$ draw $Oy\perp d$; since $a\perp(\beta)$, also $a\perp Oy$. So $a$ and $Oy$ are both perpendicular to $d$ and perpendicular to each other: the plane angle is $90^\circ$.

The other direction gives the properties we use most in calculations.

:::theorem Properties of perpendicular planes
Let $(\alpha)\perp(\beta)$ with line of intersection $d$.
- If a line $a\subset(\alpha)$ and $a\perp d$, then $a\perp(\beta)$.
- If two intersecting planes are both perpendicular to a third plane, then their line of intersection is perpendicular to the third plane.
:::

For the first property: let $O=a\cap d$ and draw $Oy\perp d$ in $(\beta)$. The plane angle is $90^\circ$, so $a\perp Oy$. The line $a$ is perpendicular to two intersecting lines $d$ and $Oy$ of $(\beta)$, so $a\perp(\beta)$. We use the second property as a ready-made result.

:::diagram Pyramid $S.ABCD$ with $SA\perp(ABCD)$
alt: Pyramid S.ABCD with a parallelogram base drawn in oblique projection, edge SA upright and perpendicular to the base, hidden edges dashed
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
segment S A
segment S B
segment S C
segment A B
segment B C
segment A D dashed
segment D C dashed
segment S D dashed
right S A B
:::

:::example Proving that planes are perpendicular
The pyramid $S.ABCD$ has a square base $ABCD$ of side $4$, $SA\perp(ABCD)$ and $SA=4\sqrt3$. Prove that
a) $(SAB)\perp(ABCD)$; b) $(SBC)\perp(SAB)$; c) $(SBD)\perp(SAC)$.
Then find the angle between $(SBC)$ and $(ABCD)$.

**Solution.** For each part we find a line lying in one plane and perpendicular to the other plane.

a) The plane $(SAB)$ contains $SA$, and $SA\perp(ABCD)$. So $(SAB)\perp(ABCD)$.

b) $BC\perp AB$ (square) and $BC\perp SA$ (because $SA\perp(ABCD)$). So $BC\perp(SAB)$. The plane $(SBC)$ contains $BC$, so $(SBC)\perp(SAB)$.

c) $BD\perp AC$ (diagonals of a square) and $BD\perp SA$. So $BD\perp(SAC)$. The plane $(SBD)$ contains $BD$, so $(SBD)\perp(SAC)$.

For the angle between $(SBC)$ and $(ABCD)$: the line of intersection is $BC$, and $BA\perp BC$ and $BS\perp BC$ (by part b, since $BC\perp(SAB)$). The plane angle is $\angle SBA$, and in triangle $SAB$, right-angled at $A$:

$$\tan\angle SBA=\frac{SA}{AB}=\frac{4\sqrt3}{4}=\sqrt3\Rightarrow\angle SBA=60^\circ.$$

So the angle between $(SBC)$ and $(ABCD)$ is $60^\circ$.
:::

When a face lies in a plane perpendicular to the base, the height of the pyramid lies in that face.

:::example A face perpendicular to the base
The pyramid $S.ABCD$ has a rectangular base with $AB=6$ and $BC=4$. Triangle $SAB$ is equilateral and lies in a plane perpendicular to $(ABCD)$. Find the height $SH$, where $H$ is the midpoint of $AB$, and then the angle between $SC$ and $(ABCD)$ (round to the nearest tenth of a degree).

**Solution.** Triangle $SAB$ is equilateral, so its median $SH$ is also an altitude: $SH\perp AB$. The line $SH$ lies in $(SAB)$ and is perpendicular to the line of intersection $AB$, and $(SAB)\perp(ABCD)$, so $SH\perp(ABCD)$. The height is

$$SH=\frac{6\sqrt3}{2}=3\sqrt3.$$

Since $SH\perp(ABCD)$, the point $H$ is the projection of $S$, and the angle between $SC$ and $(ABCD)$ is $\angle SCH$. Triangle $HBC$ is right-angled at $B$, so $HC=\sqrt{3^2+4^2}=5$; then in triangle $SHC$, right-angled at $H$:

$$\tan\angle SCH=\frac{SH}{HC}=\frac{3\sqrt3}{5}\approx1.039\Rightarrow\angle SCH\approx46.1^\circ.$$

So the height is $3\sqrt3$ and the angle between $SC$ and $(ABCD)$ is about $46.1^\circ$.
:::

## Right prisms and regular pyramids

These solids appear all the time in problems about the angle between two planes.

- A **right prism** has its lateral edges perpendicular to the base. Each lateral face is a rectangle containing a lateral edge, so by the test above, each lateral face is perpendicular to the base.
- A **regular prism** is a right prism whose base is a regular polygon. A right parallelepiped is a right prism whose base is a parallelogram; a **cuboid** has a rectangular base; a **cube** has six square faces.
- A **regular pyramid** has a regular polygon as its base, and the foot of its height is the centre of the base. Its lateral edges are equal, its lateral faces are congruent isosceles triangles, and the altitude of a lateral face from the apex is the **slant height**.
- A **frustum of a regular pyramid** is the part of a regular pyramid between its base and a plane parallel to the base. Its two bases are similar regular polygons, and its lateral faces are congruent isosceles trapezia.

:::example A right prism
The right prism $ABC.A'B'C'$ has base $ABC$ right-angled at $A$, with $AB=3$, $AC=4$ and $AA'=1.8$. Find the angle between $(A'BC)$ and $(ABC)$ (round to the nearest tenth of a degree).

**Solution.** The line of intersection is $BC$. In $(ABC)$ draw $AH\perp BC$ at $H$. Since $AA'\perp(ABC)$, we have $BC\perp AA'$, so $BC\perp(A'AH)$ and therefore $BC\perp A'H$. The plane angle is $\angle A'HA$.

We find $AH$ from the area of the right-angled triangle $ABC$ (with $BC=5$):

$$AH=\frac{AB\cdot AC}{BC}=\frac{3\cdot4}{5}=2.4,\qquad\tan\angle A'HA=\frac{AA'}{AH}=\frac{1.8}{2.4}=0.75.$$

So $\angle A'HA\approx36.9^\circ$. The angle between $(A'BC)$ and $(ABC)$ is about $36.9^\circ$.
:::

In a regular pyramid, a lateral face meets the base along a side of the base, and the midpoint of that side helps us find the plane angle.

:::example A regular square pyramid
The regular square pyramid $S.ABCD$ has base side $6$ and lateral edge $5$. Let $O$ be the centre of the base.
a) Prove that $(SAC)\perp(ABCD)$.
b) Find the angle between $(SBC)$ and $(ABCD)$ (round to the nearest tenth of a degree).

**Solution.** a) Since $S.ABCD$ is a regular pyramid, $SO\perp(ABCD)$. The plane $(SAC)$ contains $SO$, so $(SAC)\perp(ABCD)$.

b) Let $M$ be the midpoint of $BC$. The square gives $OM\perp BC$, and the isosceles triangle $SBC$ gives $SM\perp BC$. So the plane angle is $\angle SMO$. We have $OM=\dfrac{6}{2}=3$ and $SM=\sqrt{SB^2-BM^2}=\sqrt{25-9}=4$. In triangle $SOM$, right-angled at $O$:

$$\cos\angle SMO=\frac{OM}{SM}=\frac34\Rightarrow\angle SMO\approx41.4^\circ.$$

So the angle between $(SBC)$ and $(ABCD)$ is about $41.4^\circ$.

**Check.** The height is $SO=\sqrt{SM^2-OM^2}=\sqrt7$, and $SB^2=SO^2+OB^2=7+18=25$, which matches the lateral edge $5$.
:::

:::warning Common mistakes
- **Taking any two lines.** Wrong: the angle between two planes equals the angle between any two lines, one in each plane. Why it is wrong: those lines may not be perpendicular to the line of intersection. Right: take two lines that are both perpendicular to the line of intersection at one point.
- **Forgetting to change an obtuse angle.** Wrong: the plane angle is $120^\circ$, so the angle between the planes is $120^\circ$. Why it is wrong: the angle between two planes is never more than $90^\circ$. Right: $180^\circ-120^\circ=60^\circ$.
- **Thinking every line in $(\alpha)$ is perpendicular to $(\beta)$.** Wrong: $(\alpha)\perp(\beta)$, so every line of $(\alpha)$ is perpendicular to $(\beta)$. Why it is wrong: only lines perpendicular to the line of intersection are. Right: $a\subset(\alpha)$ and $a\perp d$.
- **Missing the condition of being perpendicular to the line of intersection.** Wrong: $(SAB)\perp(ABCD)$, so $SA\perp(ABCD)$ for any triangle $SAB$. Why it is wrong: we need $SA\perp AB$ (perpendicular to the line of intersection) first. Right: check $SA\perp AB$, then conclude.
:::

## Key terms

:::terms
- dihedral angle | góc nhị diện
- edge of a dihedral angle | cạnh của góc nhị diện
- plane angle of a dihedral angle | góc phẳng nhị diện
- angle between two planes | góc giữa hai mặt phẳng
- perpendicular planes | hai mặt phẳng vuông góc
- line of intersection | giao tuyến
- right prism | lăng trụ đứng
- regular prism | lăng trụ đều
- cuboid | hình hộp chữ nhật
- regular pyramid | hình chóp đều
- slant height | trung đoạn
- frustum of a regular pyramid | hình chóp cụt đều
:::

## Summary

- The plane angle $\angle xOy$: $Ox\subset(\alpha)$ and $Oy\subset(\beta)$ are both perpendicular to the line of intersection $d$ at $O$.
- The angle between two intersecting planes is the non-obtuse dihedral angle: $\varphi$ if $\varphi\le90^\circ$, and $180^\circ-\varphi$ if $\varphi>90^\circ$.
- $(\alpha)\perp(\beta)$ when the angle between them is $90^\circ$; it is enough that $(\alpha)$ contains a line perpendicular to $(\beta)$.
- If $(\alpha)\perp(\beta)$ and $a\subset(\alpha)$ with $a\perp d$, then $a\perp(\beta)$. If two intersecting planes are both perpendicular to a third plane, their line of intersection is perpendicular to it.
- Right prism: the lateral faces are perpendicular to the base. Regular pyramid: the foot of the height is the centre of the base; the angle between a lateral face and the base is $\angle SMO$, where $M$ is the midpoint of a side of the base.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
The planes $(\alpha)$ and $(\beta)$ intersect along a line $d$. One of their dihedral angles has plane angle $135^\circ$. Find the angle between $(\alpha)$ and $(\beta)$.

::hint
**What you need:** the angle between two planes is at most $90^\circ$; if the plane angle $\varphi>90^\circ$, the angle between the planes is $180^\circ-\varphi$.

**Steps:**
1. Compare $135^\circ$ with $90^\circ$.
2. Take the supplement.

::solution
Since $135^\circ>90^\circ$, the angle between the planes is $180^\circ-135^\circ=45^\circ$.

**Answer.** $45^\circ$.
:::

:::exercise
A sheet of card is folded along a crease $d$. Take a point $H$ on the crease, a point $A$ on one half and a point $B$ on the other half so that $HA\perp d$, $HB\perp d$, $HA=12$ cm and $HB=16$ cm. We measure $AB=20$ cm. Are the two halves of the card perpendicular?

::hint
**What you need:** $\angle AHB$ is the plane angle; the converse of Pythagoras' theorem.

**Steps:**
1. Compute $HA^2+HB^2$.
2. Compare it with $AB^2$.

::solution
$HA^2+HB^2=144+256=400=20^2=AB^2$, so $\angle AHB=90^\circ$.

**Answer.** Yes, the two halves are perpendicular.
:::

:::exercise
In the cuboid $ABCD.A'B'C'D'$, prove that $(ABB'A')\perp(ADD'A')$.

::hint
**What you need:** if $(\alpha)$ contains a line perpendicular to $(\beta)$, then $(\alpha)\perp(\beta)$.

**Steps:**
1. Choose the line $AB$ in $(ABB'A')$.
2. Show that $AB$ is perpendicular to two intersecting lines of $(ADD'A')$.

::solution
$AB\perp AD$ (the base is a rectangle) and $AB\perp AA'$ (a lateral face is a rectangle). The lines $AD$ and $AA'$ intersect in $(ADD'A')$, so $AB\perp(ADD'A')$. The plane $(ABB'A')$ contains $AB$.

**Answer.** $(ABB'A')\perp(ADD'A')$.
:::

:::exercise
The pyramid $S.ABC$ has $SA\perp(ABC)$, triangle $ABC$ is right-angled at $B$, and $SA=AB=2$. Find the angle between $(SBC)$ and $(ABC)$.

::hint
**What you need:** the angle between two planes is the angle between two lines perpendicular to the line of intersection $BC$ at $B$.

**Steps:**
1. Prove that $BC\perp(SAB)$.
2. Show that the plane angle is $\angle SBA$ and find its tangent.

::solution
$BC\perp AB$ and $BC\perp SA$, so $BC\perp(SAB)$, which gives $BC\perp SB$. The plane angle is $\angle SBA$ with $\tan\angle SBA=\dfrac{SA}{AB}=\dfrac22=1$.

**Answer.** $45^\circ$.
:::

:::exercise
The pyramid $S.ABCD$ has a rectangular base with $AB=3$ and $AD=4$, $SA\perp(ABCD)$ and $SA=4$. Is each statement true or false?

a) $(SAB)\perp(ABCD)$.

b) $(SCD)\perp(SAD)$.

c) The angle between $(SBC)$ and $(ABCD)$ is $45^\circ$.

d) The angle between $(SCD)$ and $(ABCD)$ is $45^\circ$.

::hint
**What you need:** the test for perpendicular planes; plane angles through the line of intersection.

**Steps:**
1. a) $(SAB)$ contains $SA$.
2. b) Prove that $CD\perp(SAD)$.
3. c), d) Find the angles $\angle SBA$ and $\angle SDA$.

::solution
a) **True**: $(SAB)$ contains $SA\perp(ABCD)$.

b) **True**: $CD\perp AD$ and $CD\perp SA$, so $CD\perp(SAD)$; and $(SCD)$ contains $CD$.

c) **False**: the plane angle is $\angle SBA$ with $\tan\angle SBA=\dfrac{SA}{AB}=\dfrac43\ne1$.

d) **True**: $CD\perp(SAD)$ gives $CD\perp SD$; the plane angle is $\angle SDA$ with $\tan\angle SDA=\dfrac{SA}{AD}=1$, that is $45^\circ$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
A house has two flat roof panels. A vertical cross-section perpendicular to the ridge is an isosceles triangle with a horizontal base $8$ m long and height $3$ m. What angle does each roof panel make with the horizontal plane (round to the nearest degree)?

::hint
**What you need:** the cross-section is perpendicular to the line of intersection (the eaves) of the panel and the horizontal plane, so the base angle of the triangle is the plane angle.

**Steps:**
1. Find half of the base of the isosceles triangle.
2. Find the tangent of the base angle.

::solution
Half of the base is $4$ m and the height is $3$ m, so $\tan\alpha=\dfrac34$, which gives $\alpha\approx36.87^\circ$.

**Answer.** About $37^\circ$.
:::

:::exercise
The regular triangular prism $ABC.A'B'C'$ has base side $6$ and lateral edge $9$. Find the angle between $(A'BC)$ and $(ABC)$.

::hint
**What you need:** a regular prism has its lateral edges perpendicular to the base; let $M$ be the midpoint of $BC$.

**Steps:**
1. Prove that $AM\perp BC$ and $A'M\perp BC$.
2. Find $AM$, then $\tan\angle A'MA$.

::solution
Triangle $ABC$ is equilateral, so $AM\perp BC$ and $AM=\dfrac{6\sqrt3}{2}=3\sqrt3$. Since $AA'\perp(ABC)$, we have $BC\perp(A'AM)$, so $BC\perp A'M$. The plane angle is $\angle A'MA$ with $\tan\angle A'MA=\dfrac{9}{3\sqrt3}=\sqrt3$.

**Answer.** $60^\circ$.
:::

:::exercise Revision
The pyramid $S.ABCD$ has a square base of side $a$, $SA\perp(ABCD)$ and $SC=a\sqrt3$. Find
a) the angle between the line $SC$ and the plane $(ABCD)$ (round to the nearest tenth of a degree);
b) the angle between $(SBC)$ and $(ABCD)$.

::hint
**What you need:** the angle between a line and a plane is the angle between the line and its orthogonal projection on the plane; for part b use the plane angle of the dihedral angle.

**Steps:**
1. The projection of $SC$ on $(ABCD)$ is $AC$; find $AC$ and $SA$.
2. Find $\cos\angle SCA$.
3. Part b: the plane angle is $\angle SBA$.

::solution
a) $AC=a\sqrt2$ and $SA=\sqrt{3a^2-2a^2}=a$. The required angle is $\angle SCA$ with $\cos\angle SCA=\dfrac{AC}{SC}=\sqrt{\dfrac23}$, so $\angle SCA\approx35.3^\circ$.

b) $BC\perp(SAB)$, so the plane angle is $\angle SBA$ with $\tan\angle SBA=\dfrac{SA}{AB}=1$, that is $45^\circ$.

**Answer.** a) $35.3^\circ$; b) $45^\circ$.
:::

:::exercise Challenge
The cube $ABCD.A'B'C'D'$ has edge $a$. Find the angle between $(A'BD)$ and $(C'BD)$ (round to the nearest tenth of a degree).

::hint
**What you need:** the line of intersection is $BD$; let $O$ be the centre of $ABCD$ and find two lines perpendicular to $BD$ at $O$.

**Steps:**
1. $A'B=A'D$ and $C'B=C'D$, so $A'O\perp BD$ and $C'O\perp BD$.
2. Find $A'O$, $C'O$ and $A'C'$.
3. Use the cosine rule in triangle $A'OC'$.

::solution
Triangle $A'BD$ is isosceles at $A'$, so $A'O\perp BD$; similarly $C'O\perp BD$. The plane angle is $\angle A'OC'$. We have $A'O=C'O=\sqrt{a^2+\dfrac{a^2}{2}}=\dfrac{a\sqrt6}{2}$ and $A'C'=a\sqrt2$:

$$\cos\angle A'OC'=\frac{\frac{3a^2}{2}+\frac{3a^2}{2}-2a^2}{2\cdot\frac{3a^2}{2}}=\frac13.$$

This angle is acute, so $\angle A'OC'\approx70.5^\circ$.

**Answer.** $70.5^\circ$.
:::

:::exercise
The pyramid $S.ABC$ has $(SAB)\perp(ABC)$ and $(SAC)\perp(ABC)$. Prove that $SA\perp(ABC)$. Given $AB=3$ and $SB=5$, find $SA$.

::hint
**What you need:** if two intersecting planes are both perpendicular to a third plane, their line of intersection is perpendicular to that plane.

**Steps:**
1. Find the line of intersection of $(SAB)$ and $(SAC)$.
2. Use $SA\perp AB$ in triangle $SAB$.

::solution
The planes $(SAB)$ and $(SAC)$ meet along $SA$ and are both perpendicular to $(ABC)$, so $SA\perp(ABC)$. Then $SA\perp AB$ and $SA=\sqrt{SB^2-AB^2}=\sqrt{25-9}=4$.

**Answer.** $SA=4$.
:::

## Mini test

:::quiz
::mc
Two intersecting planes form a dihedral angle with plane angle $120^\circ$. The angle between the planes is
A. $120^\circ$.
B. $30^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
The angle between two planes is at most $90^\circ$, so we take $180^\circ-120^\circ=60^\circ$. Option A forgets to change the obtuse angle.

::mc
In the cube $ABCD.A'B'C'D'$, which plane is **not** perpendicular to $(ABCD)$?
A. $(ABB'A')$.
B. $(BCC'B')$.
C. $(BDD'B')$.
D. $(A'BCD')$.
::key D
The planes in A, B and C each contain a lateral edge perpendicular to $(ABCD)$. The plane $(A'BCD')$ makes an angle of $45^\circ$ with $(ABCD)$.

::mc
The pyramid $S.ABCD$ has a square base and $SA\perp(ABCD)$. Which plane is perpendicular to $(SAC)$?
A. $(SBD)$.
B. $(SAD)$.
C. $(SAB)$.
D. $(SBC)$.
::key A
$BD\perp AC$ and $BD\perp SA$, so $BD\perp(SAC)$ and therefore $(SBD)\perp(SAC)$. The other planes pass through $SA$ and are not perpendicular to $(SAC)$.

::mc
A regular square pyramid has base side $6$ and height $4$. The tangent of the angle between a lateral face and the base is
A. $\dfrac34$.
B. $\dfrac43$.
C. $\dfrac{2\sqrt2}{3}$.
D. $\dfrac23$.
::key B
The plane angle is $\angle SMO$ with $OM=3$ and $SO=4$, so $\tan=\dfrac{SO}{OM}=\dfrac43$. Option A inverts the ratio, C uses $OB=3\sqrt2$ instead of $OM$, and D uses the whole side $6$.

::tf
The regular square pyramid $S.ABCD$ has base side $4$ and height $SO=2\sqrt3$ ($O$ is the centre of the base and $M$ is the midpoint of $BC$).
a) $(SAC)\perp(ABCD)$.
b) $(SAC)\perp(SBD)$.
c) The angle between $(SBC)$ and $(ABCD)$ is $30^\circ$.
d) $SM=4$.
::key T T F T
a) True: $(SAC)$ contains $SO\perp(ABCD)$. b) True: $BD\perp AC$ and $BD\perp SO$, so $BD\perp(SAC)$. c) False: $\tan\angle SMO=\dfrac{2\sqrt3}{2}=\sqrt3$, so the angle is $60^\circ$. d) True: $SM=\sqrt{12+4}=4$.

::sa
In the cube $ABCD.A'B'C'D'$, find the angle (in degrees) between $(A'BD)$ and $(ABCD)$, rounded to the nearest tenth.
::key 54.7
Let $O$ be the centre of $ABCD$. The plane angle is $\angle A'OA$ with $\tan=\dfrac{AA'}{AO}=\dfrac{a}{a\sqrt2/2}=\sqrt2$, so the angle is about $54.7^\circ$.

::sa
The pyramid $S.ABCD$ has a rectangular base with $AB=4$ and $BC=3$, triangle $SAB$ is equilateral and $(SAB)\perp(ABCD)$. Find the length $SC$.
::key 5
Let $H$ be the midpoint of $AB$. Then $SH\perp(ABCD)$, $SH=2\sqrt3$ and $HC=\sqrt{4+9}=\sqrt{13}$. So $SC=\sqrt{12+13}=5$.
:::
