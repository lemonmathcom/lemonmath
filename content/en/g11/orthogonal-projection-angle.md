---
title: Orthogonal projection and the angle between a line and a plane
description: Understand orthogonal projection onto a plane and the angle between a line and a plane; use projections to find angles in pyramids, cubes and real cases.
minutes: 25
---

:::goals
- Understand the orthogonal projection of a point and of a line onto a plane.
- Find the orthogonal projection of a line onto a plane.
- Define and calculate the angle between a line and a plane.
- Apply this to pyramids, cubes and real-life problems (ladders, poles, anchor cables).
:::

Suppose a $4$ m ladder leans against a vertical wall with its foot $1.5$ m from the wall (assumed figures). How steeply does the ladder lean relative to the ground? To answer, we need a way to measure the angle between a line and a plane.

## Exploration: the shadow of a line

When sunlight falls straight down onto a flat yard, the shadow of a stick on the yard is a segment. This shadow is the orthogonal projection of the stick onto the yard. The closer the stick stands to vertical, the shorter its shadow.

Take a stick $SA$ of length $5$ with its foot $A$ on the yard and its tip $S$ at height $h$ above the yard (any unit). The shadow is the segment $AH$, where $H$ is the projection of $S$ onto the yard, and $AH=\sqrt{25-h^2}$.

| $h$ | $AH$ | $\cos$ of the angle between stick and yard $=AH/5$ |
|---|---|---|
| $3$ | $4$ | $0.8$ |
| $4$ | $3$ | $0.6$ |
| $5$ | $0$ | $0$ |

A stick lying flat on the yard has a shadow as long as itself (angle $0^\circ$); a vertical stick has a shadow shrunk to a point (angle $90^\circ$). The angle between the stick and its shadow measures how much it leans.

## Orthogonal projection

:::definition Orthogonal projection of a point
Let $(P)$ be a plane and $M$ a point. The line through $M$ perpendicular to $(P)$ meets $(P)$ at $H$. The point $H$ is the **orthogonal projection** (or simply the **projection**) of $M$ onto $(P)$. If $M\in(P)$, its projection is $M$ itself.
:::

The projection of a figure $\mathcal H$ onto $(P)$ is the set of projections of all points of $\mathcal H$. For a line $d$ not perpendicular to $(P)$, the projection of $d$ onto $(P)$ is a line $d'$. If $d\perp(P)$, the projection of $d$ is a single point.

:::theorem The three perpendiculars theorem
Let $b$ be a line in $(P)$ and $a$ a line not perpendicular to $(P)$, with projection $a'$ onto $(P)$. Then $b\perp a$ if and only if $b\perp a'$.
:::

**Why?** Let $A\in a$ and let $H$ be the projection of $A$ onto $(P)$, so $AH\perp(P)$ and $AH\perp b$. If $b\perp a'$, then $b$ is perpendicular to the two intersecting lines $AH$ and $a'$ of the plane $(a, a')$, so $b\perp(a, a')$ and therefore $b\perp a$. The converse is proved in the same way.

## The angle between a line and a plane

:::definition The angle between a line and a plane
Let $d$ be a line and $(P)$ a plane.
- If $d\perp(P)$, the angle between $d$ and $(P)$ is $90^\circ$.
- If $d$ is not perpendicular to $(P)$, the angle between $d$ and $(P)$ is the angle between $d$ and its projection $d'$ onto $(P)$. We write $\angle(d, (P))$.
- If $d\parallel(P)$ or $d\subset(P)$, the angle is defined to be $0^\circ$.
:::

The angle between a line and a plane always lies between $0^\circ$ and $90^\circ$.

**How to find it.** To find the angle between a line $d$ meeting $(P)$ at $A$, take a point $S$ on $d$ and drop the perpendicular to get the projection $H$ of $S$ onto $(P)$. The required angle is $\angle SAH$ in triangle $SAH$, right-angled at $H$, and
$$\sin\angle SAH=\frac{SH}{SA},\qquad \cos\angle SAH=\frac{AH}{SA}.$$

:::diagram The angle between $SC$ and the base $(ABCD)$
alt: Pyramid S.ABCD with SA perpendicular to the base; the projection of SC onto the base is AC, and the angle between SC and the base is angle SCA in triangle SAC, right-angled at A
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment A C dashed
right S A B
right S A D
:::

## Examples

First, a pyramid with a lateral edge perpendicular to the base.

:::example The angle between a lateral edge and the base
The pyramid $S.ABCD$ has a square base $ABCD$ of side $a$, $SA\perp(ABCD)$ and $SA=a$. Find the angle between $SC$ and the plane $(ABCD)$, to the nearest tenth of a degree.

**Solution.** Since $SA\perp(ABCD)$, $AC$ is the projection of $SC$ onto $(ABCD)$. So $\angle(SC, (ABCD))=\angle SCA$.

The diagonal of the square is $AC=a\sqrt2$. Triangle $SAC$ is right-angled at $A$, so
$$\tan\angle SCA=\frac{SA}{AC}=\frac{a}{a\sqrt2}=\frac1{\sqrt2}\Rightarrow\angle SCA\approx35.3^\circ.$$

So the angle between $SC$ and $(ABCD)$ is about $35.3^\circ$.
:::

Next, another lateral edge of the same pyramid.

:::example A special angle
For the pyramid in the previous example, find the angle between $SB$ and $(ABCD)$.

**Solution.** Since $SA\perp(ABCD)$, $AB$ is the projection of $SB$ onto $(ABCD)$. So $\angle(SB, (ABCD))=\angle SBA$.

Triangle $SAB$ is right-angled at $A$ with $SA=AB=a$, so it is isosceles and $\angle SBA=45^\circ$.

So the angle between $SB$ and $(ABCD)$ is $45^\circ$.
:::

Now the diagonal of a cube.

:::example The diagonal of a cube
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the angle between $AC'$ and $(ABCD)$.

**Solution.** Since $CC'\perp(ABCD)$, $AC$ is the projection of $AC'$ onto $(ABCD)$. So $\angle(AC', (ABCD))=\angle C'AC$.

We have $AC=a\sqrt2$ and $CC'=a$. Triangle $C'CA$ is right-angled at $C$, so
$$\tan\angle C'AC=\frac{CC'}{AC}=\frac1{\sqrt2}\Rightarrow\angle C'AC\approx35.3^\circ.$$

So the angle between $AC'$ and $(ABCD)$ is about $35.3^\circ$.
:::

Finally we return to the ladder from the start, in four steps.

:::example Application: how steeply does the ladder lean?
Suppose a $4$ m ladder leans against a vertical wall, with its foot $1.5$ m from the wall on level ground (assumed figures). Find the angle between the ladder and the ground, to the nearest tenth of a degree.

**Solution.**

*Understand.* The ladder is a segment $SA$ with $A$ on the ground and $S$ on the wall. We need the angle between $SA$ and the ground.

*Plan.* Let $H$ be the foot of the perpendicular from $S$ to the ground, that is, the foot of the wall. Then $AH$ is the projection of $SA$ onto the ground, and the required angle is $\angle SAH$ in triangle $SAH$, right-angled at $H$.

*Solve.* We have $SA=4$ and $AH=1.5$, so
$$\cos\angle SAH=\frac{AH}{SA}=\frac{1.5}{4}=0.375\Rightarrow\angle SAH\approx68.0^\circ.$$

So the ladder leans at about $68.0^\circ$ to the ground.

*Look back.* Is the result reasonable? The foot is less than half the ladder's length from the wall, so the ladder is fairly steep and an angle above $60^\circ$ makes sense (if the foot were exactly $2$ m away, half the length, then $\cos=0.5$ and the angle would be $60^\circ$). We can also check the height of the top: $SH=\sqrt{16-2.25}=\sqrt{13.75}\approx3.7$ m, and $\sin\angle SAH=\dfrac{3.7}{4}\approx0.93$, which matches an angle of $68^\circ$.
:::

:::warning Common mistakes
- **The angle between a line and a plane is the angle with any line of the plane.** Wrong: take any line in $(P)$ meeting $d$ and measure the angle. Why it is wrong: each line of $(P)$ gives a different angle. Right: use the projection $d'$, because that gives the smallest angle.
- **Forgetting to drop the perpendicular.** Wrong: take any point $H$ of the plane as the projection of $S$. Why it is wrong: the projection must satisfy $SH\perp(P)$. Right: $H$ is the foot of the perpendicular from $S$ to $(P)$.
- **Mixing up sine and cosine.** Wrong: $\angle SAH$ has $SH$ as its adjacent side. Why it is wrong: $SH$ is the height perpendicular to the plane, the side opposite $\angle SAH$. Right: $\sin\angle SAH=\dfrac{SH}{SA}$ and $\cos\angle SAH=\dfrac{AH}{SA}$.
- **Thinking a line parallel to a plane has no angle.** Wrong: $d\parallel(P)$, so there is no angle. Why it is wrong: the projection of $d$ is parallel to $d$, so the angle between them is $0^\circ$. Right: the angle is defined to be $0^\circ$.
:::

**Connections.** This lesson uses [a line perpendicular to a plane](lesson:line-perpendicular-plane) to construct projections, and right triangles to calculate angles. The lesson on [distances in space](lesson:distances-space) uses the same perpendiculars to measure lengths, and the lesson on [volumes](lesson:volumes) uses the height dropped perpendicular to the base. In practice, the slope of a roof, a ladder or an anchor cable is measured as the angle between a line and a horizontal plane.

## Terms

:::terms
- phép chiếu vuông góc | orthogonal projection
- hình chiếu vuông góc | orthogonal projection (of a point or figure)
- góc giữa đường thẳng và mặt phẳng | angle between a line and a plane
- định lí ba đường vuông góc | three perpendiculars theorem
- mặt phẳng nằm ngang | horizontal plane
- đường chéo | diagonal
- cạnh bên | lateral edge
- mặt đáy | base
- tam giác vuông | right-angled triangle
- độ dốc | slope
:::

## Summary

- The orthogonal projection of $M$ onto $(P)$ is the foot $H$ of the line through $M$ perpendicular to $(P)$.
- The projection of a line not perpendicular to $(P)$ is a line $d'$ lying in $(P)$.
- The angle between $d$ and $(P)$ is the angle between $d$ and its projection $d'$; it is $90^\circ$ if $d\perp(P)$ and $0^\circ$ if $d\parallel(P)$ or $d\subset(P)$.
- To find the angle, drop $SH\perp(P)$ and use the right triangle $SAH$: $\sin\angle SAH=\dfrac{SH}{SA}$, $\cos\angle SAH=\dfrac{AH}{SA}$.
- The three perpendiculars theorem: for $b\subset(P)$, $b\perp a\iff b\perp a'$.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
The pyramid $S.ABCD$ has a rectangular base $ABCD$ with $AB=3$, $AD=4$, $SA\perp(ABCD)$ and $SA=5$. Find the angle between $SC$ and $(ABCD)$, to the nearest tenth of a degree.

::hint
**Knowledge:** the projection of $SC$ onto the base is $AC$; triangle $SAC$ is right-angled at $A$.

**Hints on the steps:**
1. Find $AC$ by Pythagoras' theorem.
2. Find $\tan\angle SCA=\dfrac{SA}{AC}$.

::solution
The base $ABCD$ is a rectangle, so triangle $ABC$ is right-angled at $B$. By Pythagoras' theorem,
$$AC=\sqrt{AB^2+BC^2}=\sqrt{3^2+4^2}=\sqrt{25}=5.$$

Since $SA\perp(ABCD)$, the point $A$ is the projection of $S$ onto $(ABCD)$, and $C$ lies in $(ABCD)$. Hence $AC$ is the projection of $SC$ onto $(ABCD)$, and
$$\angle(SC,(ABCD))=\angle SCA.$$

Triangle $SAC$ is right-angled at $A$ (since $SA\perp AC$), so
$$\tan\angle SCA=\frac{SA}{AC}=\frac55=1.$$
Hence $\angle SCA=45^\circ$.

So the angle between $SC$ and $(ABCD)$ is $45^\circ$ (that is, $45.0^\circ$ to the nearest tenth of a degree).

**Answer.** $45^\circ$.
:::

:::exercise
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the angle between $A'C$ and the plane $(ABCD)$, to the nearest tenth of a degree.

::hint
**Knowledge:** the projection of $A'$ onto $(ABCD)$ is $A$.

**Hints on the steps:**
1. Identify the projection of $A'C$ as $AC$.
2. Find $\tan\angle A'CA$.

::solution
Since $AA'\perp(ABCD)$, the point $A$ is the projection of $A'$ onto $(ABCD)$, and $C$ lies in $(ABCD)$. Hence $AC$ is the projection of $A'C$ onto $(ABCD)$, and the required angle is $\angle A'CA$.

$ABCD$ is a square of side $a$, so $AC=a\sqrt2$. Also $AA'=a$.

Triangle $A'AC$ is right-angled at $A$, so
$$\tan\angle A'CA=\frac{AA'}{AC}=\frac{a}{a\sqrt2}=\frac1{\sqrt2}.$$
Using a calculator, $\angle A'CA\approx35.26^\circ\approx35.3^\circ$ (to the nearest tenth of a degree).

So the angle between $A'C$ and $(ABCD)$ is about $35.3^\circ$.

**Answer.** About $35.3^\circ$.
:::

:::exercise
The pyramid $S.ABC$ has $SA\perp(ABC)$, triangle $ABC$ right-angled at $B$, $AB=a$, $BC=a$ and $SA=a\sqrt2$. Find the angle between $SB$ and $(ABC)$, and the angle between $SC$ and $(ABC)$.

::hint
**Knowledge:** the projections of $SB$ and $SC$ onto $(ABC)$ are $AB$ and $AC$ respectively.

**Hints on the steps:**
1. Find $\tan\angle SBA$.
2. Find $AC$, then $\tan\angle SCA$.

::solution
Since $SA\perp(ABC)$, the point $A$ is the projection of $S$ onto $(ABC)$. Hence $AB$ is the projection of $SB$ and $AC$ is the projection of $SC$ onto $(ABC)$. Therefore
$$\angle(SB,(ABC))=\angle SBA,\qquad \angle(SC,(ABC))=\angle SCA.$$

The angle between $SB$ and $(ABC)$. Triangle $SAB$ is right-angled at $A$, so
$$\tan\angle SBA=\frac{SA}{AB}=\frac{a\sqrt2}{a}=\sqrt2.$$
Using a calculator, $\angle SBA\approx54.7^\circ$.

The angle between $SC$ and $(ABC)$. Triangle $ABC$ is right-angled at $B$, so
$$AC=\sqrt{AB^2+BC^2}=\sqrt{a^2+a^2}=a\sqrt2.$$
Triangle $SAC$ is right-angled at $A$, so
$$\tan\angle SCA=\frac{SA}{AC}=\frac{a\sqrt2}{a\sqrt2}=1,$$
hence $\angle SCA=45^\circ$.

So the angle between $SB$ and $(ABC)$ is about $54.7^\circ$, and the angle between $SC$ and $(ABC)$ is $45^\circ$.

**Answer.** $\approx54.7^\circ$ and $45^\circ$.
:::

:::exercise
Decide whether each statement is true or false. Let $d$ be a line and $(P)$ a plane.

a) If $d\perp(P)$, the angle between $d$ and $(P)$ is $90^\circ$.

b) If $d\parallel(P)$, the angle between $d$ and $(P)$ is $90^\circ$.

c) The angle between $d$ and $(P)$ can equal $120^\circ$.

d) If $d$ meets $(P)$ without being perpendicular to it, the angle between $d$ and $(P)$ is the angle between $d$ and its projection onto $(P)$.

::hint
**Knowledge:** the definition of the angle between a line and a plane; the angle lies between $0^\circ$ and $90^\circ$.

**Hints on the steps:**
1. Consider each case: perpendicular, parallel, intersecting.
2. Remember the range of the angle.

::solution
The angle between a line $d$ and a plane $(P)$ is defined as follows: if $d\perp(P)$ the angle is $90^\circ$; if $d\parallel(P)$ or $d\subset(P)$ the angle is $0^\circ$; if $d$ meets $(P)$ without being perpendicular to it, the angle is the angle between $d$ and the projection of $d$ onto $(P)$.

a) **True.** By definition, when $d\perp(P)$ the angle between $d$ and $(P)$ is $90^\circ$.

b) **False.** When $d\parallel(P)$ the angle between $d$ and $(P)$ is $0^\circ$, not $90^\circ$.

c) **False.** The angle between a line and a plane always lies in $[0^\circ, 90^\circ]$, so it cannot equal $120^\circ$.

d) **True.** By definition, if $d$ meets $(P)$ without being perpendicular to it, the angle between $d$ and $(P)$ is the angle between $d$ and its projection onto $(P)$.

So statements a), d) are true; statements b), c) are false.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise
Suppose a $5$ m ladder leans against a vertical wall with its foot $2$ m from the wall on level ground (assumed figures). Find the angle between the ladder and the ground, to the nearest tenth of a degree.

::hint
**Knowledge:** the projection of the ladder onto the ground is the segment from the foot of the ladder to the foot of the wall.

**Hints on the steps:**
1. Form a right triangle with the ladder as hypotenuse.
2. Use the cosine of the required angle.

::solution
Let $A$ be the point on the wall where the top of the ladder rests, $B$ the foot of the ladder on level ground, and $H$ the foot of the wall directly below $A$. Then $AH$ is perpendicular to the ground, $AB=5$ m and $BH=2$ m.

Since $AH$ is perpendicular to the ground, $BH$ is the projection of the ladder $AB$ onto the ground. Hence the angle between the ladder and the ground is $\varphi=\angle ABH$.

Triangle $ABH$ is right-angled at $H$, so
$$\cos\varphi=\frac{BH}{AB}=\frac25=0.4.$$
Using a calculator, $\varphi\approx66.42^\circ\approx66.4^\circ$ (to the nearest tenth of a degree).

So the angle between the ladder and the ground is about $66.4^\circ$.

**Answer.** About $66.4^\circ$.
:::

:::exercise
Suppose a $6$ m pole $SO$ stands perpendicular to flat ground. An anchor cable $SB$ joins the top of the pole to a point $B$ on the ground $8$ m from the foot of the pole (assumed figures). Find the length of the cable and the angle between the cable and the ground, to the nearest tenth of a degree.

::hint
**Knowledge:** $SO\perp(\text{ground})$, so $OB$ is the projection of $SB$.

**Hints on the steps:**
1. Use Pythagoras' theorem in triangle $SOB$.
2. Find $\sin\angle SBO=\dfrac{SO}{SB}$.

::solution
The pole $SO$ is perpendicular to the ground, so triangle $SOB$ is right-angled at $O$, with $SO=6$ m and $OB=8$ m.

By Pythagoras' theorem, the length of the cable is
$$SB=\sqrt{SO^2+OB^2}=\sqrt{36+64}=\sqrt{100}=10\ \text{m}.$$

Since $SO\perp$ the ground, $OB$ is the projection of $SB$ onto the ground. Hence the angle between the cable and the ground is $\angle SBO$. In triangle $SOB$, right-angled at $O$,
$$\sin\angle SBO=\frac{SO}{SB}=\frac6{10}=0.6.$$
Using a calculator, $\angle SBO\approx36.87^\circ\approx36.9^\circ$ (to the nearest tenth of a degree).

So the cable is $10$ m long and makes an angle of about $36.9^\circ$ with the ground.

**Answer.** The cable is $10$ m long, at about $36.9^\circ$.
:::

:::exercise
The regular square pyramid $S.ABCD$ has base edge $a$ and lateral edge $a$. Let $O$ be the centre of the base. Find the angle between $SA$ and $(ABCD)$.

::hint
**Knowledge:** in a regular pyramid, $SO\perp(ABCD)$.

**Hints on the steps:**
1. Find $OA$.
2. Find $\cos\angle SAO=\dfrac{OA}{SA}$.

::solution
$S.ABCD$ is a regular square pyramid and $O$ is the centre of the base, so $SO\perp(ABCD)$. Hence $O$ is the projection of $S$ onto $(ABCD)$, and $OA$ is the projection of $SA$ onto $(ABCD)$. Therefore
$$\angle(SA,(ABCD))=\angle SAO.$$

The base $ABCD$ is a square of side $a$, so $AC=a\sqrt2$. Since $O$ is the midpoint of $AC$, $OA=\dfrac{a\sqrt2}{2}$.

Triangle $SOA$ is right-angled at $O$ and $SA=a$, so
$$\cos\angle SAO=\frac{OA}{SA}=\frac{a\sqrt2}{2}\cdot\frac1a=\frac{\sqrt2}{2}.$$
Hence $\angle SAO=45^\circ$.

So the angle between $SA$ and $(ABCD)$ is $45^\circ$.

**Answer.** $45^\circ$.
:::

:::exercise
Revisit Pythagoras' theorem. Suppose a flat slope makes an angle of $30^\circ$ with the horizontal plane. A person walks $12$ m up the slope along the line of steepest ascent (assumed figures). How many metres has the person risen?

::hint
**Knowledge:** the sine of the angle of slope equals the height gained divided by the distance walked.

**Hints on the steps:**
1. Form a right triangle with the distance walked as hypotenuse.
2. Use $\sin30^\circ=\dfrac12$.

::solution
Let $A$ be the starting point (at the foot of the slope), $B$ the person's position after walking $12$ m along the line of steepest ascent, and $H$ the projection of $B$ onto the horizontal plane through $A$. Then $AB=12$ m and the height gained is $BH$.

Since $B$ lies on the line of steepest ascent, the angle between $AB$ and the horizontal plane is $\angle BAH=30^\circ$, and $AH$ is the projection of $AB$ onto the horizontal plane.

Triangle $ABH$ is right-angled at $H$, so
$$BH=AB\cdot\sin\angle BAH=12\cdot\sin30^\circ=12\cdot\frac12=6\ \text{m}.$$

So the person has risen $6$ m.

**Answer.** $6$ m.
:::

:::exercise Challenge
The pyramid $S.ABCD$ has a square base $ABCD$ of side $a$, $SA\perp(ABCD)$ and $SA=a\sqrt2$. Find the angle between $SC$ and $(SAB)$.

::hint
**Knowledge:** $BC\perp(SAB)$, so the projection of $C$ onto $(SAB)$ is $B$.

**Hints on the steps:**
1. Identify the projection of $SC$ onto $(SAB)$.
2. Find $\sin\angle CSB=\dfrac{CB}{SC}$.

::solution
The base $ABCD$ is a square, so $BC\perp AB$. Since $SA\perp(ABCD)$ and $BC\subset(ABCD)$, we have $BC\perp SA$. The plane $(SAB)$ contains the two intersecting lines $AB$ and $SA$, both perpendicular to $BC$, so $BC\perp(SAB)$.

Hence $B$ is the projection of $C$ onto $(SAB)$, and $S$ lies in $(SAB)$. Therefore $SB$ is the projection of $SC$ onto $(SAB)$, and the required angle is $\angle CSB$.

We compute the lengths. Triangle $SAB$ is right-angled at $A$, so
$$SB=\sqrt{SA^2+AB^2}=\sqrt{2a^2+a^2}=a\sqrt3.$$
We have $AC=a\sqrt2$, so triangle $SAC$, right-angled at $A$, gives
$$SC=\sqrt{SA^2+AC^2}=\sqrt{2a^2+2a^2}=2a.$$

Triangle $CBS$ is right-angled at $B$ (since $BC\perp(SAB)$ gives $BC\perp SB$), so
$$\sin\angle CSB=\frac{BC}{SC}=\frac{a}{2a}=\frac12.$$
Hence $\angle CSB=30^\circ$.

So the angle between $SC$ and $(SAB)$ is $30^\circ$.

**Answer.** $30^\circ$.
:::

## Mini test

:::quiz
::mc NB
The orthogonal projection of a point $M$ onto a plane $(P)$ is
A. any point of $(P)$.
B. the intersection of $(P)$ with the line through $M$ parallel to $(P)$.
C. the intersection of $(P)$ with the line through $M$ perpendicular to $(P)$.
D. the midpoint of a segment in $(P)$.
::key C
This is the definition of orthogonal projection. The other options do not give a single point by the definition.

::mc TH
The pyramid $S.ABCD$ has $SA\perp(ABCD)$. The angle between $SD$ and $(ABCD)$ is
A. $\angle ASD$.
B. $\angle SAD$.
C. $\angle SDC$.
D. $\angle SDA$.
::key D
The projection of $SD$ onto the base is $AD$, so the required angle is $\angle SDA$. Option B is a right angle, and C and A are not angles with the projection.

::mc VD
In the cube $ABCD.A'B'C'D'$, the angle between $BD'$ and $(ABCD)$ has a tangent equal to
A. $\dfrac1{\sqrt2}$.
B. $\sqrt2$.
C. $1$.
D. $\dfrac{1}{\sqrt3}$.
::key A
The projection of $BD'$ is $BD=a\sqrt2$ and $DD'=a$, so $\tan=\dfrac{a}{a\sqrt2}=\dfrac1{\sqrt2}$. Option C matches $45^\circ$, B is the reciprocal, and D is a different value.

::mc TH
A $10$ m anchor cable joins the top of a vertical $6$ m pole to a point on flat ground. The angle between the cable and the ground has a sine equal to
A. $0.8$.
B. $0.6$.
C. $0.75$.
D. $1.67$.
::key B
$\sin=\dfrac{\text{height}}{\text{cable}}=\dfrac6{10}=0.6$. Option A is the cosine, C is the tangent, and D exceeds $1$ so it cannot be a sine.

::tf NB TH TH TH
Let $d$ be a line and $(P)$ a plane. Decide whether each statement is true or false:
a) If $d\perp(P)$, the angle between $d$ and $(P)$ is $90^\circ$.
b) If $d\parallel(P)$, the angle between $d$ and $(P)$ is $90^\circ$.
c) The angle between $d$ and $(P)$ never exceeds $90^\circ$.
d) The angle between $d$ and $(P)$ is the angle between $d$ and any line of $(P)$.
::key T F T F
a) True by definition. b) False: the angle is $0^\circ$. c) True: the angle lies between $0^\circ$ and $90^\circ$. d) False: we must use the projection of $d$ onto $(P)$.

::sa TH
Suppose a $6$ m ladder leans against a vertical wall with its foot $3$ m from the wall. Find the angle between the ladder and the ground, in degrees.
::key 60
$\cos\varphi=\dfrac36=0.5$, so $\varphi=60^\circ$.

::sa VD
The pyramid $S.ABCD$ has a square base of side $4$, $SA\perp(ABCD)$ and $SA=4$. Find the tangent of the angle between $SC$ and $(ABCD)$, to two decimal places.
::key 0.71
$AC=4\sqrt2$, so $\tan=\dfrac4{4\sqrt2}=\dfrac1{\sqrt2}\approx0.71$.
:::
