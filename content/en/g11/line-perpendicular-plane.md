---
title: A line perpendicular to a plane
description: Understand a line perpendicular to a plane, the two-intersecting-lines condition and links with parallelism; apply them to proofs and lengths.
minutes: 25
---

:::goals
- Understand the definition of a line perpendicular to a plane.
- Know and use the condition: perpendicular to two intersecting lines in the plane.
- Use the link between parallelism and perpendicularity to prove perpendicular relations.
- Apply this to pyramids, cubes, tetrahedra and real-life problems.
:::

Suppose a builder sets up a $6$ m pole on a flat yard (assumed figures). Infinitely many lines on the yard pass through the foot of the pole, yet to check that the pole is upright the builder only presses a set square against its foot in two different directions. If both give a right angle, the pole is upright. Why is it enough to check two directions instead of infinitely many?

## Exploration: one line perpendicular to many lines

Consider the cuboid $ABCD.A'B'C'D'$ with $AB=4$, $AD=3$, $AA'=5$. The edge $AA'$ is perpendicular to $AB$ and $AD$. We use the converse of Pythagoras' theorem to test whether $AA'$ is also perpendicular to other lines of the base through $A$.

| Line $AX$ in the base | $AX^2$ | $A'X^2$ | $AA'^2+AX^2$ | Conclusion |
|---|---|---|---|---|
| $AB$ | $16$ | $41$ | $25+16=41$ | $AA'\perp AB$ |
| $AD$ | $9$ | $34$ | $25+9=34$ | $AA'\perp AD$ |
| $AC$ | $25$ | $50$ | $25+25=50$ | $AA'\perp AC$ |

Knowing only $AA'\perp AB$ and $AA'\perp AD$, we already see that $AA'\perp AC$. This hints at the condition in the next section.

## Definition and condition

:::definition A line perpendicular to a plane
A line $d$ is **perpendicular to a plane** $(P)$ if $d$ is perpendicular to every line lying in $(P)$. We write $d\perp(P)$.
:::

:::theorem Condition for a line to be perpendicular to a plane
If a line $d$ is perpendicular to two **intersecting** lines $a$, $b$ that both lie in $(P)$, then $d\perp(P)$.
:::

**Why?** We may assume $d$ passes through the intersection point $O$ of $a$ and $b$ (otherwise shift $d$ parallel so that it passes through $O$). Take $A$, $B$ on $d$ so that $O$ is the midpoint of $AB$. Since $a\perp AB$ at $O$, every point of $a$ is equidistant from $A$ and $B$; the same holds for $b$. Take any line $c$ of $(P)$ through $O$, and a line of $(P)$ not through $O$ meeting $a$, $b$, $c$ at $M$, $N$, $P$ respectively (with $P$ on segment $MN$ or on line $MN$). Triangles $AMN$ and $BMN$ are congruent (SSS), so $\angle AMN=\angle BMN$; hence triangles $AMP$ and $BMP$ are congruent (SAS), giving $PA=PB$. Triangle $PAB$ is isosceles at $P$ with median $PO$, so $PO\perp AB$, that is $c\perp d$. So $d$ is perpendicular to every line of $(P)$ through $O$, and therefore to every line of $(P)$.

:::theorem Properties
- Through a given point there is exactly one plane perpendicular to a given line, and exactly one line perpendicular to a given plane.
- If $a\parallel b$ and $a\perp(P)$ then $b\perp(P)$.
- Two lines perpendicular to the same plane are parallel.
- If $d\perp(P)$ then $d$ is perpendicular to every line lying in $(P)$.
:::

The plane through the midpoint of segment $AB$ and perpendicular to $AB$ is called the **perpendicular bisector plane** of $AB$. Every point $M$ of this plane satisfies $MA=MB$.

:::diagram Pyramid $S.ABCD$ with $SA\perp(ABCD)$
alt: Pyramid S.ABCD drawn in oblique projection with edge SA vertical, right angles at A between SA and AB and between SA and AD, and the two diagonals AC and BD of the base dashed
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
segment B D dashed
right S A B
right S A D
:::

## Examples

We begin with a proof of perpendicularity using the condition.

:::example Proving a line is perpendicular to a plane
The pyramid $S.ABCD$ has a square base $ABCD$, with $SA\perp AB$ and $SA\perp AD$. Prove that $SA\perp(ABCD)$ and $BD\perp(SAC)$, and deduce that $BD\perp SC$.

**Solution.** Since $SA\perp AB$, $SA\perp AD$, and $AB$, $AD$ intersect at $A$ in $(ABCD)$, we get $SA\perp(ABCD)$.

Since $SA\perp(ABCD)$ and $BD\subset(ABCD)$, we have $SA\perp BD$. Since $ABCD$ is a square, $AC\perp BD$. The lines $SA$, $AC$ intersect at $A$ in $(SAC)$, so $BD\perp(SAC)$.

Since $SC\subset(SAC)$, $BD\perp SC$.

So $SA\perp(ABCD)$, $BD\perp(SAC)$ and $BD\perp SC$.
:::

Next we use parallelism.

:::example Using the parallel property
In the cube $ABCD.A'B'C'D'$, prove that $BD\perp(ACC'A')$ and $BD\perp AC'$.

**Solution.** Since $ABCD$ is a square, $BD\perp AC$. Since $AA'\perp(ABCD)$ (because $AA'\perp AB$ and $AA'\perp AD$), we have $AA'\perp BD$. The lines $AC$, $AA'$ intersect at $A$ in $(ACC'A')$, so $BD\perp(ACC'A')$.

Since $AC'\subset(ACC'A')$, $BD\perp AC'$.

So $BD\perp(ACC'A')$ and $BD\perp AC'$.
:::

Now we compute a length using a right angle.

:::example A tetrahedron with three mutually perpendicular edges
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and $OA=OB=OC=a$. Prove that $OA\perp BC$ and find $AM$, where $M$ is the midpoint of $BC$.

**Solution.** Since $OA\perp OB$, $OA\perp OC$, and $OB$, $OC$ intersect at $O$, we get $OA\perp(OBC)$. Hence $OA\perp BC$ and $OA\perp OM$.

Triangle $OBC$ is right isosceles at $O$, so $BC=a\sqrt2$ and $OM=\dfrac{BC}2=\dfrac{a\sqrt2}{2}$. In triangle $OAM$, right-angled at $O$ (since $OA\perp OM$),
$$AM^2=OA^2+OM^2=a^2+\frac{a^2}{2}=\frac{3a^2}{2}\Rightarrow AM=\frac{a\sqrt6}{2}.$$

So $OA\perp BC$ and $AM=\dfrac{a\sqrt6}{2}$.
:::

One proof needs an extra midpoint.

:::example The height of a pyramid with equal lateral edges
The pyramid $S.ABC$ has $SA=SB=SC$. Let $I$ be the circumcentre of triangle $ABC$. Prove that $SI\perp(ABC)$.

**Solution.** Let $M$ be the midpoint of $AB$. Since $IA=IB$, $IM\perp AB$. Since $SA=SB$, triangle $SAB$ is isosceles at $S$, so $SM\perp AB$. The lines $IM$, $SM$ intersect at $M$ in $(SIM)$, so $AB\perp(SIM)$, hence $AB\perp SI$.

Similarly, with $N$ the midpoint of $BC$, we get $BC\perp SI$. The lines $AB$, $BC$ intersect at $B$ in $(ABC)$, so $SI\perp(ABC)$.

So $SI\perp(ABC)$.
:::

Now we return to the pole from the start, in four steps.

:::example Application: is the pole perpendicular to the yard?
Suppose a pole $SO$ has its foot $O$ on a flat yard. Two points $B$, $C$ on the yard are such that $O$, $B$, $C$ are not collinear. The measurements are $SO=6$ m, $OB=OC=8$ m and $SB=SC=10$ m (assumed figures). Is the pole perpendicular to the yard?

**Solution.**

*Understand.* We must decide whether $SO\perp(\text{yard})$ from the measured lengths.

*Plan.* Use the condition: if $SO$ is perpendicular to two intersecting lines $OB$, $OC$ of the yard, then $SO$ is perpendicular to the yard. Check each right angle with the converse of Pythagoras' theorem.

*Solve.* In triangle $SOB$, $SO^2+OB^2=36+64=100=SB^2$, so $SO\perp OB$. Likewise $SO^2+OC^2=100=SC^2$, so $SO\perp OC$. Since $OB$, $OC$ intersect at $O$ (because $O$, $B$, $C$ are not collinear), $SO\perp(\text{yard})$.

So the pole is perpendicular to the yard.

*Look back.* Is the result reasonable? The numbers $6$, $8$, $10$ form a Pythagorean triple, so the right angles are correct. Which condition is essential? The lines $OB$, $OC$ must intersect. If $O$, $B$, $C$ were collinear we would only know $SO\perp BC$, and the pole could still lean sideways, perpendicular to line $BC$. That is why the builder checks two different directions, not two points in the same direction.
:::

:::warning Common mistakes
- **Being perpendicular to one line is enough.** Wrong: $d\perp a$ and $a\subset(P)$, so $d\perp(P)$. Why it is wrong: a line perpendicular to $a$ can lean in infinitely many ways around it. Right: we need $d$ perpendicular to two intersecting lines of $(P)$.
- **Two parallel lines in $(P)$ will do.** Wrong: $d\perp a$, $d\perp b$ with $a\parallel b$ in $(P)$, so $d\perp(P)$. Why it is wrong: $a$ and $b$ have the same direction, so they give only one direction. Right: $a$ and $b$ must intersect.
- **Confusing the plane with space.** Wrong: through a point $O$ there is only one line perpendicular to a given line $d$. Why it is wrong: that holds only within one plane; in space there are infinitely many such lines, all lying in the plane through $O$ perpendicular to $d$. Right: through $O$ there is exactly one plane perpendicular to $d$.
- **Perpendicular means meeting.** Wrong: $d\perp(P)$, so $d$ meets every line of $(P)$. Why it is wrong: $d$ meets only the lines through the common point; the other lines are still perpendicular to it but skew. Right: $d$ is perpendicular to every line in $(P)$, including those skew to $d$.
:::

**Connections.** This lesson uses [perpendicular lines in space](lesson:perpendicular-lines-space) and parallelism: to prove $d\perp(P)$ we prove $d$ is perpendicular to two intersecting lines, and then deduce that $d$ is perpendicular to every line of $(P)$. The lesson on [orthogonal projection and the angle between a line and a plane](lesson:orthogonal-projection-angle) uses perpendicular planes to project a point onto a plane, and the lesson on [distances in space](lesson:distances-space) uses perpendicular lines to measure distances. In practice, builders use a set square and a plumb line to set up upright poles.

## Terms

:::terms
- đường thẳng vuông góc với mặt phẳng | line perpendicular to a plane
- mặt phẳng trung trực | perpendicular bisector plane
- hai đường thẳng cắt nhau | intersecting lines
- hai đường thẳng chéo nhau | skew lines
- hình chóp | pyramid
- tứ diện | tetrahedron
- tâm đường tròn ngoại tiếp | circumcentre
- định lí Pythagore đảo | converse of Pythagoras' theorem
- đường cao | height
- tam giác cân | isosceles triangle
:::

## Summary

- $d\perp(P)$ if $d$ is perpendicular to every line of $(P)$.
- Condition: if $d$ is perpendicular to two intersecting lines lying in $(P)$, then $d\perp(P)$.
- If $a\parallel b$ and $a\perp(P)$ then $b\perp(P)$; two lines perpendicular to the same plane are parallel.
- Through a point there is exactly one plane perpendicular to a given line and exactly one line perpendicular to a given plane.
- If $d\perp(P)$ then $d$ is perpendicular to every line in $(P)$; this creates right triangles for computing lengths.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
In the cube $ABCD.A'B'C'D'$, prove that:

a) $AA'\perp(ABCD)$.

b) $BD\perp(ACC'A')$.

c) $A'C'\perp(BDD'B')$.

::hint
**Knowledge:** the condition for perpendicularity to two intersecting lines; if $a\parallel b$ and $a\perp(P)$ then $b\perp(P)$.

**Hints on the steps:**
1. Find two intersecting lines in the plane that are perpendicular to the given line.
2. For part c, shift $A'C'$ to $AC$.

::solution
a) $AA'\perp AB$ and $AA'\perp AD$ (the side faces are squares), and $AB$, $AD$ intersect at $A$ in $(ABCD)$, so $AA'\perp(ABCD)$.

b) $BD\perp AC$ (diagonals of a square) and $BD\perp AA'$ (since $AA'\perp(ABCD)$). $AC$, $AA'$ intersect in $(ACC'A')$, so $BD\perp(ACC'A')$.

c) Similarly, $AC\perp BD$ and $AC\perp BB'$, so $AC\perp(BDD'B')$. Since $A'C'\parallel AC$, $A'C'\perp(BDD'B')$.

**Answer.** All three statements are true.
:::

:::exercise
The pyramid $S.ABCD$ has a rectangular base $ABCD$ and $SA\perp(ABCD)$. Prove that $BC\perp(SAB)$ and $CD\perp(SAD)$.

::hint
**Knowledge:** $SA\perp(ABCD)$, so $SA$ is perpendicular to every line in the base.

**Hints on the steps:**
1. Show that $BC$ is perpendicular to two intersecting lines in $(SAB)$.
2. Do the same for $CD$ and $(SAD)$.

::solution
$BC\perp AB$ (rectangle) and $BC\perp SA$ (since $SA\perp(ABCD)$). $AB$, $SA$ intersect at $A$ in $(SAB)$, so $BC\perp(SAB)$.

$CD\perp AD$ (rectangle) and $CD\perp SA$. $AD$, $SA$ intersect at $A$ in $(SAD)$, so $CD\perp(SAD)$.

**Answer.** Both statements are proved.
:::

:::exercise
The pyramid $S.ABC$ has $SA\perp(ABC)$, triangle $ABC$ right-angled at $B$, $SA=3$, $AB=4$, $BC=5$. Prove that $BC\perp(SAB)$, then find $SB$ and $SC$.

::hint
**Knowledge:** $BC\perp(SAB)$ gives $BC\perp SB$; Pythagoras' theorem.

**Hints on the steps:**
1. Use $BC\perp AB$ and $BC\perp SA$.
2. Find $SB$ from triangle $SAB$, then $SC$ from triangle $SBC$.

::solution
$BC\perp AB$ and $BC\perp SA$, so $BC\perp(SAB)$, hence $BC\perp SB$.

Triangle $SAB$ is right-angled at $A$, so $SB^2=9+16=25$, $SB=5$. Triangle $SBC$ is right-angled at $B$, so $SC^2=SB^2+BC^2=25+25=50$, $SC=5\sqrt2$.

**Answer.** $SB=5$; $SC=5\sqrt2$.
:::

:::exercise
Decide whether each statement is true or false. The pyramid $S.ABCD$ has a square base $ABCD$ and $SA\perp(ABCD)$.

a) $AC\perp(SBD)$.

b) $BD\perp(SAC)$.

c) $AD\perp(SCD)$.

d) $BC\perp(SAB)$.

::hint
**Knowledge:** the condition for perpendicularity to two intersecting lines; the diagonals of a square are perpendicular.

**Hints on the steps:**
1. For each part, find two intersecting lines in the plane in question.
2. Check whether each is perpendicular to the given line.

::solution
a) **False**: $AC\perp BD$ but $AC$ is not perpendicular to $SD$ (or $SB$).

b) **True**: $BD\perp AC$ and $BD\perp SA$.

c) **False**: $AD\perp CD$ but $AD$ is not perpendicular to $SD$ (since $SA\perp AD$ and $SA\neq0$, angle $SDA$ is not right).

d) **True**: $BC\perp AB$ and $BC\perp SA$.

**Answer.** a) False; b) True; c) False; d) True.
:::

:::exercise
Suppose a pole $SO$ has its foot $O$ on a flat yard, and $B$, $C$ are points of the yard with $O$, $B$, $C$ not collinear. The measurements are $SO=9$ m, $OB=12$ m, $SB=15$ m, $OC=40$ m, $SC=41$ m (assumed figures). Is the pole perpendicular to the yard? Explain.

::hint
**Knowledge:** the converse of Pythagoras' theorem; the condition for perpendicularity to two intersecting lines.

**Hints on the steps:**
1. Check $SO^2+OB^2=SB^2$ and $SO^2+OC^2=SC^2$.
2. Note whether $OB$, $OC$ intersect.

::solution
$SO^2+OB^2=81+144=225=SB^2$, so $SO\perp OB$. $SO^2+OC^2=81+1600=1681=SC^2$, so $SO\perp OC$. $OB$, $OC$ intersect at $O$, so $SO\perp(\text{yard})$.

**Answer.** Yes, the pole is perpendicular to the yard.
:::

:::exercise
Suppose a room is a cuboid $ABCD.A'B'C'D'$ whose floor $ABCD$ has $AB=6$ m, $AD=4$ m, and whose height is $AA'=3$ m (assumed figures). A cable is stretched from the ceiling corner $A'$ to the floor corner $C$. Find the length of the cable (to the nearest tenth of a metre).

::hint
**Knowledge:** $AA'\perp(ABCD)$, so $AA'\perp AC$.

**Hints on the steps:**
1. Find $AC$ in the rectangular floor.
2. Use Pythagoras' theorem in triangle $A'AC$, right-angled at $A$.

::solution
$AC^2=6^2+4^2=52$. Since $AA'\perp(ABCD)$, $AA'\perp AC$, triangle $A'AC$ is right-angled at $A$ and
$$A'C^2=AA'^2+AC^2=9+52=61\Rightarrow A'C=\sqrt{61}\approx7.8.$$

**Answer.** About $7.8$ m.
:::

:::exercise
Suppose a roof is shaped like a pyramid $S.ABCD$ whose base $ABCD$ is a square of side $6$ m and whose lateral edges are $SA=SB=SC=SD=5$ m (assumed figures). Let $O$ be the centre of the square. Prove that $SO\perp(ABCD)$ and find the height $SO$ (to the nearest tenth of a metre).

::hint
**Knowledge:** in an isosceles triangle the median is also the altitude.

**Hints on the steps:**
1. Show that $SO\perp AC$ and $SO\perp BD$.
2. Find $OA$, then $SO$ in triangle $SOA$ right-angled at $O$.

::solution
Triangle $SAC$ is isosceles at $S$ and $SO$ is a median ($O$ is the midpoint of $AC$), so $SO\perp AC$. Similarly $SO\perp BD$. $AC$, $BD$ intersect at $O$, so $SO\perp(ABCD)$.

$AC=6\sqrt2$, so $OA=3\sqrt2$ and $OA^2=18$. Triangle $SOA$ is right-angled at $O$, so $SO^2=SA^2-OA^2=25-18=7$, $SO=\sqrt7\approx2.6$.

**Answer.** $SO\perp(ABCD)$; $SO\approx2.6$ m.
:::

:::exercise
Revisit the angle between two lines. The pyramid $S.ABCD$ has a square base $ABCD$ and $SA\perp(ABCD)$. Find the angle between the lines $SC$ and $BD$.

::hint
**Knowledge:** if $BD\perp(SAC)$ then $BD$ is perpendicular to every line in $(SAC)$.

**Hints on the steps:**
1. Prove that $BD\perp(SAC)$.
2. Conclude about $SC$.

::solution
$BD\perp AC$ and $BD\perp SA$, so $BD\perp(SAC)$. Since $SC\subset(SAC)$, $BD\perp SC$, that is the angle between $SC$ and $BD$ is $90^\circ$.

**Answer.** $90^\circ$.
:::

:::exercise Challenge
The tetrahedron $ABCD$ has $AB=AC$ and $DB=DC$. Prove that $AD\perp BC$.

::hint
**Knowledge:** let $M$ be the midpoint of $BC$; in an isosceles triangle the median is also the altitude.

**Hints on the steps:**
1. Prove that $BC\perp AM$ and $BC\perp DM$.
2. Deduce that $BC\perp(ADM)$.

::solution
Let $M$ be the midpoint of $BC$. Triangle $ABC$ is isosceles at $A$, so $AM\perp BC$. Triangle $DBC$ is isosceles at $D$, so $DM\perp BC$. $AM$, $DM$ intersect at $M$ in $(ADM)$, so $BC\perp(ADM)$. Since $AD\subset(ADM)$, $BC\perp AD$.

**Answer.** $AD\perp BC$.
:::

## Mini test

:::quiz
::mc
A line $d$ is perpendicular to a plane $(P)$ when
A. $d$ is perpendicular to one line lying in $(P)$.
B. $d$ is perpendicular to two intersecting lines lying in $(P)$.
C. $d$ is perpendicular to two parallel lines lying in $(P)$.
D. $d$ meets $(P)$ at one point.
::key B
This is the condition for perpendicularity to a plane. Options A and C give too few directions, and D says only that the line meets the plane.

::mc
In the cube $ABCD.A'B'C'D'$, the line $BD$ is perpendicular to which plane?
A. $(A'B'C'D')$.
B. $(ABB'A')$.
C. $(ACC'A')$.
D. $(BCC'B')$.
::key C
$BD\perp AC$ and $BD\perp AA'$. Options B and D contain $BD$ or are not perpendicular, and A is parallel to $(ABCD)$ so $BD$ is not perpendicular to it.

::mc
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and $OA=OB=OC=a$. Let $M$ be the midpoint of $BC$. The length $AM$ is
A. $\dfrac{a\sqrt2}{2}$.
B. $\dfrac{a\sqrt3}{2}$.
C. $a$.
D. $\dfrac{a\sqrt6}{2}$.
::key D
$OA\perp(OBC)$, so $AM^2=OA^2+OM^2=a^2+\dfrac{a^2}{2}=\dfrac{3a^2}{2}$. Option A is $OM$, B confuses this with an equilateral triangle, and C ignores $OM$.

::mc
The pyramid $S.ABCD$ has a rectangular base $ABCD$ and $SA\perp(ABCD)$. Which line is perpendicular to $(SAB)$?
A. $BC$.
B. $CD$.
C. $BD$.
D. $AC$.
::key A
$BC\perp AB$ and $BC\perp SA$. Option B is parallel to $AB$, and C and D are not perpendicular to $AB$ or $SA$.

::tf
The pyramid $S.ABCD$ has a square base $ABCD$ and $SA\perp(ABCD)$. Decide whether each statement is true or false:
a) $AC\perp(SBD)$.
b) $BD\perp(SAC)$.
c) $AD\perp(SCD)$.
d) $BC\perp(SAB)$.
::key F T F T
a) False: $AC\perp BD$ but $AC$ is not perpendicular to $SD$. b) True: $BD\perp AC$ and $BD\perp SA$. c) False: $AD$ is not perpendicular to $SD$. d) True: $BC\perp AB$ and $BC\perp SA$.

::sa
Suppose a roof is a pyramid $S.ABCD$ whose base is a square of side $8$ m and whose lateral edges are all $7$ m. Find the height of the roof (to the nearest tenth of a metre).
::key 4.1
The foot of the height is the centre $O$ of the base, so $OA^2=32$, $SO^2=49-32=17$ and $SO\approx4.1$.

::sa
Suppose a room is a cuboid with a floor $5$ m $\times4$ m and a height of $2.5$ m. Find the distance from a ceiling corner to the opposite floor corner along the space diagonal (to the nearest tenth of a metre).
::key 6.9
The diagonal is $\sqrt{25+16+6.25}=\sqrt{47.25}\approx6.9$.
:::
