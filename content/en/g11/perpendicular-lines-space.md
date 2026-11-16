---
title: Perpendicular lines in space
description: Understand the angle between two lines in space and perpendicular lines; shift lines to a common point to calculate angles and prove perpendicularity.
minutes: 25
---

:::goals
- Understand the definition of the angle between two lines in space, including skew lines.
- Recognise perpendicular lines and use parallelism to prove perpendicularity.
- Calculate the angle between two lines by reducing it to an angle of a triangle (the cosine rule, right-angled triangles).
- Apply this to cubes, cuboids, pyramids, tetrahedra and real-life problems.
:::

Suppose a steel stand is the frame of a cube $ABCD.A'B'C'D'$ with edge $60$ cm (hypothetical figures). The welder adds two diagonal bars: bar $AB'$ on the front face and bar $BC'$ on the right-hand face. The two bars do not meet and are not parallel. We need the angle between them to cut the joints correctly. What is the angle between two skew bars, and how do we measure it?

## Exploration: shifting a line to a point

Two skew lines have no common point, so we cannot yet speak of the angle "formed" by them. The idea is to shift one line, keeping its direction, until it meets the other. In the cube we try three pairs:

| Pair of lines | Parallel line shifted to | Angle formed |
|---|---|---|
| $AB$ and $B'C'$ | $B'C'\parallel BC$, meeting $AB$ at $B$ | $\angle ABC=90^\circ$ |
| $AC$ and $A'C'$ | $A'C'\parallel AC$ | $0^\circ$ (parallel) |
| $AC$ and $A'B$ | $A'B\parallel D'C$, meeting $AC$ at $C$ | $\angle ACD'=60^\circ$ |

In the last row, triangle $ACD'$ has three sides that are diagonals of square faces, so it is equilateral. Whichever line we shift, we always obtain the same measure. This is the basis of the definition below.

## The angle between two lines

:::definition Angle between two lines in space
Let $a$, $b$ be two lines in space. Take any point $O$ and draw $a'\parallel a$ and $b'\parallel b$ through $O$. The **angle between** $a$ and $b$, written $\angle(a, b)$, is the angle between $a'$ and $b'$ (a measure from $0^\circ$ to $90^\circ$). If $a\parallel b$ or $a\equiv b$ then $\angle(a, b)=0^\circ$.

Two lines $a$, $b$ are called **perpendicular** if $\angle(a, b)=90^\circ$; we write $a\perp b$.
:::

**Why does the measure not depend on the point $O$?** If we choose another point $O_1$, the lines through $O_1$ parallel to $a$, $b$ are also parallel to $a'$, $b'$. Two angles whose sides are pairwise parallel are equal or supplementary, and we take only the angle not exceeding $90^\circ$, so the measure is unchanged.

Perpendicular lines **need not meet**. For example, in the cube, $AB\perp B'C'$ but these two lines are skew. From the definition we get the following property:

:::theorem Perpendicular and parallel
If $a\parallel b$ and $c\perp a$ then $c\perp b$.
:::

Indeed, $\angle(c, b)=\angle(c, a)=90^\circ$ because $b$ and $a$ have the same direction. So to find the angle between two skew lines we take three steps: shift one line (or both) until they meet, identify the angle formed in a triangle, then calculate it with a right-angled triangle or the cosine rule. If the measure found is greater than $90^\circ$, we take the supplementary angle.

:::diagram Cube $ABCD.A'B'C'D'$ and the equilateral triangle $BDC'$
alt: A cube drawn in oblique projection with hidden edges dashed, with extra bars AB' and BC' and the triangle BDC' with a 60 degree angle at C'
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
segment A B'
segment B C'
segment D C' dashed
segment B D dashed
angle D C' B "60°"
:::

## Examples

We begin with the problem from the start, using all four steps.

:::example Application: the angle between two diagonal bars of the stand
Suppose the steel frame is a cube $ABCD.A'B'C'D'$ with edge $60$ cm (hypothetical figures). Find the angle between the bars $AB'$ and $BC'$.

**Solution.**

*Understand.* The bars $AB'$ and $BC'$ are skew. We need $\angle(AB', BC')$.

*Plan.* Shift $AB'$ until it meets $BC'$. Since $AD\parallel B'C'$ and $AD=B'C'$, $AB'C'D$ is a parallelogram, so $AB'\parallel DC'$. The line $DC'$ meets $BC'$ at $C'$.

*Solve.* Since $AB'\parallel DC'$, $\angle(AB', BC')=\angle(DC', BC')=\angle DC'B$. In triangle $BDC'$ the sides $BD$, $BC'$, $DC'$ are all diagonals of a square face of side $60$ cm, so each equals $60\sqrt2$ cm. Triangle $BDC'$ is equilateral, hence $\angle DC'B=60^\circ$.

So the angle between the two bars is $60^\circ$.

*Look back.* Is there another way? We can shift $BC'$ to $AD'$ (since $BC'\parallel AD'$) and look at triangle $AB'D'$, which is also equilateral, giving the same $60^\circ$. Is the result reasonable? The angle between two lines never exceeds $90^\circ$, and the bars lie on two perpendicular faces, so a tilt of about this size is plausible. What if the frame edge were $80$ cm? The three sides of the triangle would still be equal, so the angle is still $60^\circ$: it does not depend on the size.
:::

Next we prove perpendicularity using parallel lines.

:::example Proving perpendicularity from parallelism
The pyramid $S.ABCD$ has a square base $ABCD$ of side $2$, $SA\perp AB$, $SA\perp AD$ and $SA=2\sqrt3$. Prove that $SA\perp BC$ and $SA\perp CD$, then find the angle between $SB$ and $CD$.

**Solution.** We use $BC\parallel AD$ and $CD\parallel AB$ to transfer the two given perpendicularities.

Since $BC\parallel AD$ and $SA\perp AD$, $SA\perp BC$.

Since $CD\parallel AB$ and $SA\perp AB$, $SA\perp CD$.

Since $CD\parallel AB$, $\angle(SB, CD)=\angle(SB, AB)=\angle SBA$. In triangle $SAB$, right-angled at $A$ (because $SA\perp AB$), we have
$$\tan\angle SBA=\frac{SA}{AB}=\frac{2\sqrt3}{2}=\sqrt3\Rightarrow\angle SBA=60^\circ.$$

So $SA\perp BC$, $SA\perp CD$ and the angle between $SB$ and $CD$ is $60^\circ$.
:::

When two skew lines lie along edges of a cuboid, we need the cosine rule.

:::example The angle between two diagonals of a cuboid
The cuboid $ABCD.A'B'C'D'$ has $AB=2$, $AD=3$, $AA'=4$. Find the angle between $AC$ and $B'D'$ (to one decimal place of a degree).

**Solution.** The lines $AC$ and $B'D'$ are skew. We shift $B'D'$ to the base.

Since $B'D'\parallel BD$, $\angle(AC, B'D')=\angle(AC, BD)$. Let $O$ be the intersection of $AC$ and $BD$. In rectangle $ABCD$, $AC=BD=\sqrt{2^2+3^2}=\sqrt{13}$, so $OA=OB=\dfrac{\sqrt{13}}2$.

Applying the cosine rule to triangle $OAB$, we get
$$\cos\angle AOB=\frac{OA^2+OB^2-AB^2}{2\cdot OA\cdot OB}=\frac{\frac{13}{4}+\frac{13}{4}-4}{2\cdot\frac{13}{4}}=\frac{5}{13}.$$

Since $\cos\angle AOB>0$, $\angle AOB$ is acute and $\angle AOB\approx67.4^\circ$.

So the angle between $AC$ and $B'D'$ is about $67.4^\circ$.
:::

Finally, a proof that needs auxiliary points.

:::example Opposite edges of a regular tetrahedron are perpendicular
Let $ABCD$ be a regular tetrahedron with edge $a$. Prove that $AD\perp BC$.

**Solution.** We look for two intersecting lines, parallel to $AD$ and $BC$ respectively, by taking midpoints of edges.

Let $N$, $K$, $L$ be the midpoints of $AB$, $BD$, $CD$ respectively. In triangle $ABD$, $NK$ is a midsegment, so $NK\parallel AD$ and $NK=\dfrac a2$. In triangle $BCD$, $KL$ is a midsegment, so $KL\parallel BC$ and $KL=\dfrac a2$. Hence $\angle(AD, BC)=\angle NKL$.

Triangles $ABC$ and $ABD$ are equilateral, so $CN=DN=\dfrac{a\sqrt3}2$. Triangle $CND$ is isosceles at $N$ and $L$ is the midpoint of $CD$, so $NL\perp CD$. Applying Pythagoras' theorem to triangle $NLC$, right-angled at $L$:
$$NL^2=NC^2-CL^2=\frac{3a^2}{4}-\frac{a^2}{4}=\frac{a^2}{2}.$$

We have $NK^2+KL^2=\dfrac{a^2}{4}+\dfrac{a^2}{4}=\dfrac{a^2}{2}=NL^2$. By the converse of Pythagoras' theorem, triangle $NKL$ is right-angled at $K$, that is $\angle NKL=90^\circ$.

So $AD\perp BC$.
:::

:::warning Common mistakes
- **Two lines perpendicular to a third line are parallel.** Wrong: $AB\perp AA'$ and $AD\perp AA'$, so $AB\parallel AD$. Why it is wrong: this holds only within one plane; in space the two lines may meet or be skew. Right: $AB$ and $AD$ meet and are perpendicular to each other.
- **Perpendicular lines must meet.** Wrong: $AB$ and $B'C'$ are perpendicular, so they meet. Why it is wrong: perpendicularity concerns only the angle between directions; the lines may still be skew. Right: $AB\perp B'C'$ and these two lines are skew.
- **Taking an obtuse angle as the angle between two lines.** Wrong: the triangle gives $\angle O=120^\circ$, so the angle between the lines is $120^\circ$. Why it is wrong: the angle between two lines is always from $0^\circ$ to $90^\circ$. Right: take the supplementary angle, $180^\circ-120^\circ=60^\circ$.
- **Believing skew lines have no angle.** Wrong: $AB'$ and $BC'$ are skew, so there is no angle between them. Why it is wrong: the angle is defined through parallel lines, so skew lines still have an angle. Right: $\angle(AB', BC')=60^\circ$.
:::

**Connections.** This lesson uses parallelism in space and the cosine rule from earlier lessons to turn a problem in space into a problem in one triangle. The lesson on [a line perpendicular to a plane](lesson:line-perpendicular-plane) will give a faster way to prove perpendicularity, and the lesson on [orthogonal projection and the angle between a line and a plane](lesson:orthogonal-projection-angle) extends the idea of measuring angles. In practice, engineers use the angle between diagonal bars to cut and weld frames and scaffolding.

## Terms

:::terms
- góc giữa hai đường thẳng | angle between two lines
- hai đường thẳng vuông góc | perpendicular lines
- hai đường thẳng chéo nhau | skew lines
- hai đường thẳng song song | parallel lines
- hình lập phương | cube
- hình hộp chữ nhật | cuboid
- tứ diện đều | regular tetrahedron
- hình chóp | pyramid
- đường trung bình | midsegment
- định lí côsin | the cosine rule
:::

## Summary

- Angle between $a$ and $b$: through a point draw $a'\parallel a$, $b'\parallel b$; the angle between $a'$ and $b'$, from $0^\circ$ to $90^\circ$.
- $a\perp b$ when the angle between them is $90^\circ$; perpendicular lines may be skew.
- If $a\parallel b$ and $c\perp a$ then $c\perp b$.
- Calculating the angle: shift lines until they meet, look at a triangle, use a right-angled triangle or the cosine rule; if the angle is obtuse, take the supplement.
- In a cube, the three face diagonals from one vertex form an equilateral triangle, so many angles between lines equal $60^\circ$.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
Let $ABCD.A'B'C'D'$ be a cube. Find the angle between:

a) $AB$ and $A'D'$.

b) $AC$ and $B'D'$.

c) $AB'$ and $A'D$.

::hint
**Knowledge:** shift one line to meet the other; the diagonals of square faces are equal.

**Hints on the steps:**
1. Find a line parallel to the given line through a point of the other line.
2. Look at the triangle formed.

::solution
a) $A'D'\parallel AD$, so $\angle(AB, A'D')=\angle(AB, AD)=\angle BAD=90^\circ$.

b) $B'D'\parallel BD$ and $AC\perp BD$ (the diagonals of a square), so $AC\perp B'D'$, that is the angle is $90^\circ$.

c) $A'D\parallel B'C$, so $\angle(AB', A'D)=\angle(AB', B'C)=\angle AB'C$. Triangle $AB'C$ has three sides that are face diagonals, so it is equilateral, hence $\angle AB'C=60^\circ$.

**Answer.** a) $90^\circ$; b) $90^\circ$; c) $60^\circ$.
:::

:::exercise
Let $ABCD.A'B'C'D'$ be a cuboid. Prove that $AA'\perp B'C'$ and $BB'\perp CD$.

::hint
**Knowledge:** if $a\parallel b$ and $c\perp a$ then $c\perp b$; the side faces of a cuboid are rectangles.

**Hints on the steps:**
1. Find a line parallel to the given line lying in the same face as the other line.
2. Use the right angle of the rectangle.

::solution
Since $B'C'\parallel A'D'$ and $AA'\perp A'D'$ (face $ADD'A'$ is a rectangle), $AA'\perp B'C'$.

Since $CD\parallel AB$ and $BB'\perp AB$ (face $ABB'A'$ is a rectangle), $BB'\perp CD$.

**Answer.** Both are perpendicular.
:::

:::exercise
Suppose a room is a cuboid with floor the rectangle $ABCD$, $AB=6$ m, $BC=4$ m, and height $3$ m (hypothetical figures). One water pipe runs along the floor edge $AB$, and another runs diagonally across the ceiling along $A'C'$. Find the angle between the two pipes (to one decimal place of a degree).

::hint
**Knowledge:** $A'C'\parallel AC$; the angle between two skew lines equals the angle between two intersecting lines parallel to them.

**Hints on the steps:**
1. Shift $A'C'$ to $AC$.
2. Find $\angle BAC$ in the right-angled triangle $ABC$.

::solution
$A'C'\parallel AC$, so $\angle(AB, A'C')=\angle(AB, AC)=\angle BAC$. In triangle $ABC$, right-angled at $B$, we have $\tan\angle BAC=\dfrac{BC}{AB}=\dfrac46=\dfrac23$, so $\angle BAC\approx33.7^\circ$.

**Answer.** About $33.7^\circ$.
:::

:::exercise
Suppose the frame of a bookcase is a cuboid $ABCD.A'B'C'D'$ with $AB=40$ cm, $AD=90$ cm, $AA'=30$ cm (hypothetical figures). What angle do the diagonal bars $AC$ (on the base) and $B'D'$ (on the top face) make with each other (to one decimal place of a degree)?

::hint
**Knowledge:** $B'D'\parallel BD$; the cosine rule for triangle $OAB$, where $O$ is the centre of the rectangle.

**Hints on the steps:**
1. Find $AC$ and $OA$, $OB$.
2. Find $\cos\angle AOB$ and take the acute angle.

::solution
$B'D'\parallel BD$, so $\angle(AC, B'D')=\angle(AC, BD)$. We have $AC=BD=\sqrt{40^2+90^2}=\sqrt{9700}$, so $OA=OB=\dfrac{\sqrt{9700}}{2}$ and $OA^2=2425$. Hence
$$\cos\angle AOB=\frac{2\cdot2425-40^2}{2\cdot2425}=\frac{3250}{4850}\approx0.6701,$$
so $\angle AOB\approx47.9^\circ$ (acute).

**Answer.** About $47.9^\circ$.
:::

:::exercise
Decide whether each statement is true or false:

a) Two skew lines have no angle between them.

b) If $a\parallel b$ and $a\perp c$ then $b\perp c$.

c) Two lines perpendicular to a third line are parallel to each other.

d) The angle between two lines always measures from $0^\circ$ to $90^\circ$.

::hint
**Knowledge:** the definition of the angle between two lines; the properties of perpendicular and parallel lines.

**Hints on the steps:**
1. Remember that the angle is defined through intersecting parallel lines.
2. Look for a counterexample in the cube if needed.

::solution
a) **False**: the angle between skew lines is defined through parallel lines.

b) **True**: the property we have learned.

c) **False**: in a cube, $AB$ and $AD$ are both perpendicular to $AA'$ but are not parallel.

d) **True**: by definition.

**Answer.** a) False; b) True; c) False; d) True.
:::

:::exercise
Revisit the cosine rule. The cuboid $ABCD.A'B'C'D'$ has $AB=1$, $AD=2$, $AA'=2$. Find the angle between $AC$ and $A'D$ (to one decimal place of a degree).

::hint
**Knowledge:** $A'D\parallel B'C$; the cosine rule $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

**Hints on the steps:**
1. Shift $A'D$ to $B'C$ and look at triangle $ACB'$.
2. Find the three sides, then use the cosine rule.

::solution
$A'D\parallel B'C$, so $\angle(AC, A'D)=\angle ACB'$. We have $AC=\sqrt{1+4}=\sqrt5$, $AB'=\sqrt{1+4}=\sqrt5$ and $B'C=\sqrt{4+4}=2\sqrt2$. Hence
$$\cos\angle ACB'=\frac{AC^2+B'C^2-AB'^2}{2\cdot AC\cdot B'C}=\frac{5+8-5}{2\sqrt5\cdot2\sqrt2}=\frac{2}{\sqrt{10}}\approx0.6325,$$
so $\angle ACB'\approx50.8^\circ$.

**Answer.** $50.8^\circ$.
:::

:::exercise
Suppose a roof frame is a regular triangular prism $ABC.A'B'C'$ with all edges $3$ m (hypothetical figures). Find the angle between the bar $AB'$ and the bar $A'C'$ (to one decimal place of a degree).

::hint
**Knowledge:** $A'C'\parallel AC$; the side faces are squares, so $AB'=B'C=3\sqrt2$.

**Hints on the steps:**
1. Shift $A'C'$ to $AC$ and look at triangle $AB'C$.
2. Use the cosine rule.

::solution
$A'C'\parallel AC$, so $\angle(AB', A'C')=\angle B'AC$. Face $ABB'A'$ is a square of side $3$, so $AB'=3\sqrt2$; face $BCC'B'$ is a square, so $B'C=3\sqrt2$; $AC=3$. Hence
$$\cos\angle B'AC=\frac{AB'^2+AC^2-B'C^2}{2\cdot AB'\cdot AC}=\frac{18+9-18}{2\cdot3\sqrt2\cdot3}=\frac{\sqrt2}{4}\approx0.3536,$$
so $\angle B'AC\approx69.3^\circ$.

**Answer.** $69.3^\circ$.
:::

:::exercise Challenge
The cuboid $ABCD.A'B'C'D'$ has $AB=a$, $AD=b$, $AA'=c$. Let $\varphi$ be the angle between $AC$ and $B'D'$. Prove that $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$, independent of $c$.

::hint
**Knowledge:** $B'D'\parallel BD$; the cosine rule for triangle $OAB$, where $O$ is the centre of rectangle $ABCD$.

**Hints on the steps:**
1. Put $d=AC$ and find $OA=OB=\dfrac d2$.
2. Find $\cos\angle AOB$, then consider the acute and obtuse cases.

::solution
$B'D'\parallel BD$, so $\varphi$ is the acute angle between $AC$ and $BD$. With $d^2=a^2+b^2$ and $OA=OB=\dfrac d2$:
$$\cos\angle AOB=\frac{\frac{d^2}{4}+\frac{d^2}{4}-a^2}{2\cdot\frac{d^2}{4}}=\frac{d^2-2a^2}{d^2}=\frac{b^2-a^2}{a^2+b^2}.$$
If $b\ge a$ then $\angle AOB$ is acute and $\cos\varphi=\dfrac{b^2-a^2}{a^2+b^2}$. If $b<a$ then $\angle AOB$ is obtuse, the angle between the lines is the supplement and $\cos\varphi=-\cos\angle AOB=\dfrac{a^2-b^2}{a^2+b^2}$. Both cases give $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$, which does not contain $c$.

**Answer.** $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$.
:::

## Mini test

:::quiz
::mc
Let $ABCD.A'B'C'D'$ be a cube. The angle between the lines $AC$ and $A'D'$ is
A. $90^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $30^\circ$.
::key B
$A'D'\parallel AD$, so the required angle is $\angle CAD=45^\circ$ (the diagonal of a square). Option A takes the angle between $AB$ and $AD$, and C confuses it with an equilateral triangle.

::mc
Which statement is true?
A. Perpendicular lines must meet.
B. Two lines perpendicular to a third line are parallel.
C. If $a\parallel b$ and $c\perp a$ then $c\perp b$.
D. The angle between two lines can be $120^\circ$.
::key C
This is the property of perpendicular and parallel lines. B and A are false in space (for example $AB$, $AD$ and $AB$, $B'C'$); D is false because the angle between two lines never exceeds $90^\circ$.

::mc
Let $ABCD$ be a regular tetrahedron of edge $a$. The angle between the lines $AB$ and $CD$ is
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key D
Opposite edges of a regular tetrahedron are perpendicular (as in the example above). Option C confuses it with the angle of an equilateral triangle.

::mc
The pyramid $S.ABCD$ has a square base $ABCD$ of side $a$, $SA\perp AB$, $SA\perp AD$ and $SA=a$. The angle between $SB$ and $CD$ is
A. $45^\circ$.
B. $60^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key A
$CD\parallel AB$, so the required angle is $\angle SBA$ with $\tan\angle SBA=\dfrac{SA}{AB}=1$, giving $45^\circ$. Option C is the angle between $SA$ and $CD$.

::tf
The cuboid $ABCD.A'B'C'D'$ has $AB=3$, $AD=4$, $AA'=5$. Decide whether each statement is true or false:
a) The angle between $AB$ and $A'D'$ is $0^\circ$.
b) $AA'\perp BC$.
c) $AC\perp B'D'$.
d) The angle between $AC$ and $A'C'$ is $90^\circ$.
::key F T F F
a) False: $A'D'\parallel AD$, so the angle between $AB$ and $A'D'$ is $90^\circ$. b) True: $BC\parallel AD$ and $AA'\perp AD$. c) False: $\cos\angle(AC, BD)=\dfrac{7}{25}$, so the lines are not perpendicular (the rectangle is not a square). d) False: $A'C'\parallel AC$, so the angle is $0^\circ$.

::sa
The cuboid $ABCD.A'B'C'D'$ has $AB=3$, $AD=4$, $AA'=5$. Find the angle between $AC$ and $B'D'$ (in degrees, to one decimal place).
::key 73.7
$B'D'\parallel BD$ and $OA=OB=2.5$, so $\cos\angle AOB=\dfrac{2\cdot6.25-9}{2\cdot6.25}=0.28$, giving $\angle AOB\approx73.7^\circ$ (acute).

::sa
Let $ABCD$ be a regular tetrahedron of edge $a$ and $M$ the midpoint of $BC$. Find the cosine of the angle between $AB$ and $DM$ (to two decimal places).
::key 0.29
Let $N$ be the midpoint of $AC$; then $MN\parallel AB$ and $MN=\dfrac a2$, while $DM=DN=\dfrac{a\sqrt3}{2}$. In triangle $DMN$, isosceles at $D$: $\cos\angle DMN=\dfrac{MN}{2DM}=\dfrac{\sqrt3}{6}\approx0.29$.
:::
