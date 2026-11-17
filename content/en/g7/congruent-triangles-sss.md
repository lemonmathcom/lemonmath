---
title: Congruent triangles. The first congruence condition (SSS)
description: Understand congruent triangles and corresponding parts; use the SSS condition to prove two triangles congruent and to deduce equal angles.
minutes: 25
---

:::goals
- State the definition of congruent triangles and write the congruence statement with the vertices in matching order.
- State the first congruence condition, side–side–side (SSS).
- Write a proof that two triangles are congruent, then deduce equal corresponding sides and angles.
- Apply SSS in real situations such as placing a support beam or copying an angle with compasses.
:::

A carpenter needs two identical roof trusses for a porch. Each truss is a triangular frame made from three timber pieces of length $3$ m, $3$ m and $4.8$ m. He has a tape measure but no protractor. He cuts all six pieces, nails together two frames and wonders: will the two frames fit exactly on top of each other, even in the slope of the roof?

The answer is yes. Comparing the three sides is enough to know that two triangles are identical, with no angle measured at all, and so we can prove that two angles are equal without any measuring instrument. It is also why a triangular frame cannot be pushed out of shape, while a four-sided frame can.

## Congruent triangles

Fold a sheet of paper in half, draw a triangle on the top layer and cut through both layers. The two pieces fit exactly on top of each other: vertex on vertex, side on side, angle on angle. The vertices, sides and angles that land on each other are called **corresponding**.

:::definition Congruent triangles
Two triangles are **congruent** if their corresponding sides are equal and their corresponding angles are equal.

If the vertices $A$, $B$, $C$ correspond to the vertices $M$, $N$, $P$ in that order, we write $\triangle ABC\equiv\triangle MNP$. Then
$$AB=MN,\quad BC=NP,\quad CA=PM,\qquad \angle A=\angle M,\quad \angle B=\angle N,\quad \angle C=\angle P.$$
:::

:::diagram Congruent triangles
alt: Two identical triangles ABC and MNP; corresponding sides carry the same number of ticks and corresponding angles carry the same marks α, β, γ
point A 0,0 below-left
point B 5,0 below-right
point C 1.5,3 above
point M 8,0 below-left
point N 13,0 below-right
point P 9.5,3 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark C A 3
mark M N 1
mark N P 2
mark P M 3
angle B A C "α"
angle A B C "β"
angle B C A "γ"
angle N M P "α"
angle M N P "β"
angle N P M "γ"
:::

**Going deeper.** In $\triangle ABC\equiv\triangle MNP$ the order of the letters carries information: letters in the same position are corresponding vertices. Writing $\triangle ABC\equiv\triangle NMP$ would say that $A$ corresponds to $N$, which is something quite different. Congruent triangles may also be mirror images of each other, as when you turn the paper piece over.

:::diagram The two triangles of example 1
alt: Triangle ABC with AB equal to 5 cm, BC equal to 7 cm, CA equal to 8 cm and angle A equal to 60 degrees, and a congruent triangle MNP whose measurements are marked with question marks
point A 0,0 below-left
point B 5,0 below-right
point C 4,6.93 above
point M 8,0 below-left
point N 13,0 below-right
point P 12,6.93 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark C A 3
mark M N 1
mark N P 2
mark P M 3
angle B A C "60°"
angle N M P "?"
label 2.5,-0.7 "5 cm"
label 5.6,3.5 "7 cm"
label 0.9,3.6 "8 cm"
label 10.5,-0.7 "?"
label 13.6,3.5 "?"
label 8.9,3.6 "?"
:::

:::example Reading a congruence statement
Given $\triangle ABC\equiv\triangle MNP$ with $AB=5$ cm, $BC=7$ cm, $CA=8$ cm and $\angle A=60^\circ$, find the sides $MN$, $NP$, $PM$, the angle $M$ and the perimeter of triangle $MNP$.

**Solution.** Since $\triangle ABC\equiv\triangle MNP$, the vertices $A$, $B$, $C$ correspond to $M$, $N$, $P$ in that order.

Corresponding sides are equal, so $MN=AB=5$ cm, $NP=BC=7$ cm and $PM=CA=8$ cm.

Corresponding angles are equal, so $\angle M=\angle A=60^\circ$.

The perimeter of triangle $MNP$ is $5+7+8=20$ (cm).

So $MN=5$ cm, $NP=7$ cm, $PM=8$ cm, $\angle M=60^\circ$ and the perimeter is $20$ cm.
:::

## The first condition: side – side – side

By the definition, to show that two triangles are congruent we would have to check six things: three sides and three angles. Is there a shorter way? Try drawing triangle $ABC$ with $BC=5$ cm, $AB=3$ cm and $AC=4$ cm using a ruler and compasses: draw the segment $BC$; draw an arc with centre $B$ and radius $3$ cm; draw an arc with centre $C$ and radius $4$ cm; the arcs meet at $A$.

The arcs meet at only two points, which are mirror images of each other in $BC$. So two people following these steps get two triangles that fit exactly, at worst after turning the paper over. Three sides lock the shape of a triangle.

:::theorem The SSS condition (side – side – side)
If the three sides of one triangle are equal to the three sides of another triangle, then the two triangles are congruent.

If $AB=A'B'$, $BC=B'C'$ and $CA=C'A'$, then $\triangle ABC\equiv\triangle A'B'C'$ (SSS).
:::

:::diagram The SSS condition
alt: Two triangles ABC and A'B'C' whose corresponding sides are marked with one, two and three ticks
point A 0,0 below-left
point B 6,0 below-right
point C 4,3 above
point A' 9,0 below-left
point B' 15,0 below-right
point C' 13,3 above
polygon A B C
polygon A' B' C'
mark A B 1
mark B C 2
mark C A 3
mark A' B' 1
mark B' C' 2
mark C' A' 3
:::

**Why is it true?** It is the compass construction above: once the three lengths are known, the vertex $A$ has only two possible positions, mirror images in $BC$, so the triangle has only one shape. Once two triangles are known to be congruent, we get three pairs of equal angles without measuring.

:::tip How to set out a proof
Step 1: write "Consider triangles … and …". Step 2: list each pair of equal sides with its reason (given, common side, …). Step 3: conclude "Hence … (SSS)". Step 4: deduce the angle or side that the question asks for.
:::

:::diagram The two triangles of example 2
alt: Two triangles ABC and DEF, where DEF is a mirror image of ABC, with corresponding sides carrying the same number of ticks
point A 0,0 below-left
point B 6,0 below-right
point C 2.25,3.31 above
point D 14,0 below-right
point E 8,0 below-left
point F 11.75,3.31 above
polygon A B C
polygon D E F
mark A B 1
mark A C 2
mark B C 3
mark D E 1
mark D F 2
mark E F 3
:::

:::example Using the SSS condition
Triangles $ABC$ and $DEF$ have $AB=DE=6$ cm, $AC=DF=4$ cm and $BC=EF=5$ cm.

a) Prove that $\triangle ABC\equiv\triangle DEF$.

b) State the pairs of corresponding angles that are equal.

**Solution.** a) Consider triangles $ABC$ and $DEF$. We have:

- $AB=DE$ ($=6$ cm) (given);
- $AC=DF$ ($=4$ cm) (given);
- $BC=EF$ ($=5$ cm) (given).

Hence $\triangle ABC\equiv\triangle DEF$ (SSS).

b) From $\triangle ABC\equiv\triangle DEF$, the corresponding angles are equal: $\angle A=\angle D$, $\angle B=\angle E$, $\angle C=\angle F$. Each pair of angles lies opposite a pair of equal sides: $\angle A$ and $\angle D$ both lie opposite $BC=EF$.

So $\triangle ABC\equiv\triangle DEF$, and $\angle A=\angle D$, $\angle B=\angle E$, $\angle C=\angle F$.
:::

Now back to the carpenter. He wants a support beam $AM$ from the apex of the roof down to the middle of the horizontal piece, and he needs to know whether the beam stands upright.

:::diagram A roof truss
alt: Triangle ABC with AB equal to AC, M the midpoint of BC, and the support beam AM splitting the triangle into triangles ABM and ACM
point B 0,0 below-left
point C 4.8,0 below-right
point M 2.4,0 below
point A 2.4,1.8 above
polygon A B C
segment A M
mark A B 1
mark A C 1
mark B M 2
mark M C 2
angle B M A "x"
angle A M C "y"
:::

:::example The carpenter's truss
A truss is a triangle $ABC$ with $AB=AC=3$ m and $BC=4.8$ m. The carpenter marks a point $M$ on $BC$ with $BM=MC=2.4$ m and fits a support beam $AM$. Prove that $AM\perp BC$, that is, the beam stands upright when $BC$ is horizontal.

**Solution.**

*Understand.* We know $AB=AC$ and $M$ splits $BC$ into two equal parts. We must prove that the angle at $M$ is a right angle.

*Plan.* The angles $\angle AMB$ and $\angle AMC$ are adjacent angles on a straight line, so they add up to $180^\circ$. If they are equal, each is $90^\circ$. They lie in triangles $ABM$ and $ACM$, so we try to prove that these two triangles are congruent.

*Solve.* Consider triangles $ABM$ and $ACM$. We have:

- $AB=AC$ ($=3$ m) (given);
- $BM=CM$ ($=2.4$ m) (given);
- $AM$ is a common side.

Hence $\triangle ABM\equiv\triangle ACM$ (SSS). So $\angle AMB=\angle AMC$ (corresponding angles).

Since $\angle AMB+\angle AMC=180^\circ$ (adjacent angles on a straight line), we get $\angle AMB=\angle AMC=90^\circ$.

So $AM\perp BC$.

*Look back.* The congruent triangles also give $\angle BAM=\angle CAM$: the beam bisects the angle at the apex. If $AB=3$ m but $AC=3.2$ m, the triangles are no longer congruent and $AM$ is no longer perpendicular to $BC$. So how much does the condition $AB=AC$ matter? The lesson on isosceles triangles will say more.
:::

:::diagram Opposite sides equal
alt: Quadrilateral ABCD with the diagonal AC dashed, AB equal to CD, BC equal to DA, and the angles BAC and DCA marked as equal
point A 0,0 below-left
point B 2,3 above-left
point C 7,3 above-right
point D 5,0 below-right
polygon A B C D
segment A C dashed
mark A B 1
mark C D 1
mark B C 2
mark D A 2
angle B A C "α"
angle D C A "α"
:::

:::example Proving that two lines are parallel
In quadrilateral $ABCD$ we have $AB=CD$ and $BC=DA$, and $B$ and $D$ lie on opposite sides of the line $AC$. Prove that $AB\parallel CD$.

**Solution.** Draw the diagonal $AC$. Consider triangles $ABC$ and $CDA$. We have:

- $AB=CD$ (given);
- $BC=DA$ (given);
- $AC$ is a common side.

Hence $\triangle ABC\equiv\triangle CDA$ (SSS). So $\angle BAC=\angle DCA$ (corresponding angles).

The angles $\angle BAC$ and $\angle DCA$ are alternate angles formed by the line $AC$ crossing the lines $AB$ and $CD$ (because $B$ and $D$ lie on opposite sides of $AC$).

So $AB\parallel CD$.
:::

:::diagram Bisecting an angle with compasses
alt: An angle xOy with points A and B on its arms so that OA equals OB, a point C inside the angle with CA equal to CB, and the ray OC dividing the angle into two equal angles
point O 0,0 below-left
point A 4,0 below-right
point B 1.37,3.76 above-left
point C 4.92,3.44 above-right
segment O A
segment O B
segment O C
segment A C
segment B C
mark O A 1
mark O B 1
mark A C 2
mark B C 2
angle A O C "α"
angle C O B "α"
:::

:::example Why the compass method for the angle bisector works
Given an angle $xOy$, draw an arc with centre $O$ meeting $Ox$ at $A$ and $Oy$ at $B$. Then draw two arcs of the same radius, with centres $A$ and $B$, meeting at a point $C$ inside the angle $xOy$. Prove that $OC$ is the bisector of the angle $xOy$.

**Solution.** Consider triangles $OAC$ and $OBC$. We have:

- $OA=OB$ (both are radii of the arc with centre $O$);
- $AC=BC$ (both are radii of the two arcs with centres $A$ and $B$);
- $OC$ is a common side.

Hence $\triangle OAC\equiv\triangle OBC$ (SSS). So $\angle AOC=\angle BOC$ (corresponding angles).

Since $C$ lies inside the angle $xOy$, the ray $OC$ lies between the rays $Ox$ and $Oy$. So $OC$ is the bisector of the angle $xOy$.
:::

:::warning Common mistakes
- **Writing the vertices in the wrong order.** Wrong: we have $AB=MN$ and $BC=NP$, yet we write $\triangle ABC\equiv\triangle NMP$. Why it is wrong: that says $A$ corresponds to $N$, but $A$ corresponds to $M$. Right: $\triangle ABC\equiv\triangle MNP$.
- **Thinking that equal angles are enough.** Wrong: "Two equilateral triangles both have three angles of $60^\circ$, so they are congruent." Why it is wrong: an equilateral triangle of side $3$ cm and one of side $5$ cm have the same angles but do not fit on each other. Right: we need three pairs of equal *sides* (SSS).
- **Forgetting the common side.** Wrong: writing only $OA=OB$ and $AC=BC$ and then concluding SSS. Why it is wrong: SSS needs three pairs of sides, and the common side $OC$ is one of them. Right: add "$OC$ is a common side".
:::

**Connections.** This lesson reuses the angle sum of a triangle, adjacent angles on a straight line and parallel lines as tools for proof; the next two lessons add the congruence conditions that involve angles.

## Key terms

:::terms
- congruent triangles | hai tam giác bằng nhau
- corresponding vertices | đỉnh tương ứng
- corresponding sides | cạnh tương ứng
- corresponding angles | góc tương ứng
- SSS condition | trường hợp cạnh – cạnh – cạnh (c.c.c)
- common side | cạnh chung
- given (hypothesis) | giả thiết (gt)
- adjacent angles on a straight line | hai góc kề bù
- alternate angles | hai góc so le trong
- angle bisector | tia phân giác
:::

## Summary

- Congruent triangles have equal corresponding sides and equal corresponding angles; write $\triangle ABC\equiv\triangle MNP$ with the vertices in matching order.
- SSS: if the three sides of one triangle equal the three sides of another, the triangles are congruent.
- Three equal angles are not enough to conclude that two triangles are congruent.
- A proof has four parts: consider the two triangles, list three pairs of sides with reasons, conclude (SSS), then deduce the angle or side that is asked for.
- Congruent triangles let us prove equal angles, parallel lines and angle bisectors.

The carpenter from the opening can relax: three timber pieces of the same lengths give two identical trusses.

## Practice

Each exercise has what you need and hints for the steps. Try it yourself first, then open the solution.

:::exercise
Given $\triangle ABC\equiv\triangle DEF$ with $AB=4$ cm, $\angle A=50^\circ$ and $\angle B=70^\circ$, find $DE$ and $\angle F$.

::hint
**What you need:** the vertices $A$, $B$, $C$ correspond to $D$, $E$, $F$; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. The side $DE$ corresponds to the side $AB$.
2. The angle $F$ corresponds to the angle $C$; find $\angle C$ in triangle $ABC$.

::solution
Since $\triangle ABC\equiv\triangle DEF$, the vertices $A$, $B$, $C$ correspond to $D$, $E$, $F$ in that order.

We have $DE=AB=4$ cm (corresponding sides).

In triangle $ABC$ we have $\angle C=180^\circ-\angle A-\angle B=180^\circ-50^\circ-70^\circ=60^\circ$ (angle sum of a triangle).

Since $\angle F=\angle C$ (corresponding angles), $\angle F=60^\circ$.

So $DE=4$ cm and $\angle F=60^\circ$.

**Answer.** $DE=4$ cm; $\angle F=60^\circ$.
:::

:::exercise
Triangle $ABC$ has $AB=3$ cm, $BC=4$ cm and $CA=5$ cm. Triangle $MNP$ has $MN=5$ cm, $NP=3$ cm and $PM=4$ cm. Prove that the triangles are congruent and write the congruence statement with the vertices in the correct order.

::hint
**What you need:** the SSS condition; corresponding vertices are the common vertices of the pairs of equal sides.

**Steps:**
1. Pair the $3$ cm side of one triangle with the $3$ cm side of the other, and do the same for $4$ cm and $5$ cm.
2. The vertex $B$ is the common vertex of $AB$ and $BC$; find the common vertex of the two corresponding sides in triangle $MNP$.

::solution
We have $AB=NP$ ($=3$ cm), $BC=PM$ ($=4$ cm) and $CA=MN$ ($=5$ cm).

Consider triangles $ABC$ and $NPM$. We have $AB=NP$, $BC=PM$ and $CA=MN$ (given). Hence $\triangle ABC\equiv\triangle NPM$ (SSS).

The vertex $B$ is the common vertex of $AB$ and $BC$, and in the other triangle the common vertex of $NP$ and $PM$ is $P$, so $B$ corresponds to $P$. In the same way, $A$ corresponds to $N$ and $C$ corresponds to $M$.

So $\triangle ABC\equiv\triangle NPM$.

**Answer.** $\triangle ABC\equiv\triangle NPM$ (SSS).
:::

:::exercise
Triangles $ACB$ and $ADB$ have $AC=AD$ and $BC=BD$. Prove that $\angle CAB=\angle DAB$.

::hint
**What you need:** the SSS condition; corresponding angles of congruent triangles are equal.

**Steps:**
1. Triangles $ACB$ and $ADB$ already have two pairs of equal sides; find the third pair.
2. Do the angles $CAB$ and $DAB$ correspond to each other? Both are at the vertex $A$.

::solution
Consider triangles $ACB$ and $ADB$. We have:

- $AC=AD$ (given);
- $BC=BD$ (given);
- $AB$ is a common side.

Hence $\triangle ACB\equiv\triangle ADB$ (SSS). So $\angle CAB=\angle DAB$ (corresponding angles).

So $\angle CAB=\angle DAB$.

**Answer.** The two angles are equal, by SSS.
:::

:::exercise
A flying kite $ABCD$ has $AB=AD=40$ cm and $CB=CD=65$ cm. Prove that $\angle ABC=\angle ADC$ and that the spar $AC$ is the bisector of the angle $BAD$.

::hint
**What you need:** SSS; a bisector splits an angle into two equal angles.

**Steps:**
1. Choose the two triangles that share the side $AC$.
2. From the congruent triangles, read off the pair of angles at $B$ and $D$ and the pair of angles at $A$.

::solution
Consider triangles $ABC$ and $ADC$. We have:

- $AB=AD$ ($=40$ cm) (given);
- $CB=CD$ ($=65$ cm) (given);
- $AC$ is a common side.

Hence $\triangle ABC\equiv\triangle ADC$ (SSS). So $\angle ABC=\angle ADC$ and $\angle BAC=\angle DAC$ (corresponding angles).

Since the ray $AC$ lies inside the angle $BAD$ and $\angle BAC=\angle DAC$, $AC$ is the bisector of the angle $BAD$.

So $\angle ABC=\angle ADC$ and $AC$ bisects the angle $BAD$.

**Answer.** Proved.
:::

:::exercise
Hà copies an angle $xOy$ with compasses as follows:

- Draw an arc with centre $O$ and radius $r$, meeting $Ox$ at $A$ and $Oy$ at $B$.
- Draw a ray $O'x'$, then an arc with centre $O'$ and radius $r$, meeting $O'x'$ at $A'$.
- Draw an arc with centre $A'$ and radius $AB$, meeting the arc with centre $O'$ at $B'$; draw the ray $O'B'$ and call it $O'y'$.

Prove that $\angle A'O'B'=\angle AOB$.

::hint
**What you need:** SSS; segments that are radii of the same arc are equal.

**Steps:**
1. Consider triangles $OAB$ and $O'A'B'$.
2. Find three pairs of equal sides, each pair being the radius of an arc.

::solution
Consider triangles $OAB$ and $O'A'B'$. We have:

- $OA=O'A'$ ($=r$);
- $OB=O'B'$ ($=r$);
- $AB=A'B'$ (both are the radius of the arc with centre $A'$).

Hence $\triangle OAB\equiv\triangle O'A'B'$ (SSS). So $\angle AOB=\angle A'O'B'$ (corresponding angles).

So $\angle A'O'B'=\angle AOB$.

**Answer.** Proved.
:::

:::exercise
Given $\triangle MNP\equiv\triangle HIK$. The perimeter of triangle $MNP$ is $24$ cm; also $HI=7$ cm and $IK=8$ cm. Find the sides of triangle $MNP$.

::hint
**What you need:** congruent triangles have equal perimeters and equal corresponding sides.

**Steps:**
1. What is the perimeter of triangle $HIK$?
2. Find $KH$, then read off $MN$, $NP$ and $PM$.

::solution
Since $\triangle MNP\equiv\triangle HIK$, the perimeter of triangle $HIK$ is also $24$ cm.

We have $KH=24-7-8=9$ (cm).

Corresponding sides are equal, so $MN=HI=7$ cm, $NP=IK=8$ cm and $PM=KH=9$ cm.

So triangle $MNP$ has $MN=7$ cm, $NP=8$ cm and $PM=9$ cm.

**Answer.** $MN=7$ cm; $NP=8$ cm; $PM=9$ cm.
:::

:::exercise
In quadrilateral $ABCD$ we have $AB=CD$ and $BC=DA$, and $B$ and $D$ lie on opposite sides of the line $AC$.

a) Prove that $AD\parallel BC$.

b) Given $\angle ABC=110^\circ$, find $\angle BAD$.

::hint
**What you need:** SSS; equal alternate angles give parallel lines; if two lines are parallel, co-interior angles add up to $180^\circ$.

**Steps:**
1. a) Consider $\triangle ABC$ and $\triangle CDA$ and find the pair of alternate angles for $AD$ and $BC$ cut by $AC$.
2. b) The angles $\angle BAD$ and $\angle ABC$ are co-interior angles of $AD$ and $BC$ cut by $AB$.

::solution
a) Consider triangles $ABC$ and $CDA$. We have $AB=CD$ (given), $BC=DA$ (given) and $AC$ is a common side. Hence $\triangle ABC\equiv\triangle CDA$ (SSS).

So $\angle ACB=\angle CAD$ (corresponding angles). These are alternate angles for the lines $BC$ and $AD$ cut by $AC$ (because $B$ and $D$ lie on opposite sides of $AC$). Hence $AD\parallel BC$.

b) Since $AD\parallel BC$, we have $\angle BAD+\angle ABC=180^\circ$ (co-interior angles). So $\angle BAD=180^\circ-110^\circ=70^\circ$.

So a) $AD\parallel BC$; b) $\angle BAD=70^\circ$.

**Answer.** a) $AD\parallel BC$. b) $70^\circ$.
:::

:::exercise Challenge
A window frame is a rhombus $ABCD$ with $AB=BC=CD=DA=50$ cm and $\angle BAD=70^\circ$.

a) Prove that $\triangle ABC\equiv\triangle ADC$ and deduce that $AC$ bisects the angle $BAD$.

b) Prove that $\triangle ABC\equiv\triangle CDA$ and deduce that $AB\parallel CD$.

c) Prove that $\angle BCD=70^\circ$.

::hint
**What you need:** SSS; the same two triangles, matched in two different ways, give two different conclusions.

**Steps:**
1. a) Match $A\to A$, $B\to D$, $C\to C$ (common side $AC$).
2. b) Match $A\to C$, $B\to D$, $C\to A$; look for the pair of alternate angles.
3. c) Consider the two triangles that share the side $BD$.

::solution
a) Consider triangles $ABC$ and $ADC$. We have $AB=AD$ (given), $CB=CD$ (given) and $AC$ is a common side. Hence $\triangle ABC\equiv\triangle ADC$ (SSS). So $\angle BAC=\angle DAC$ (corresponding angles). Since the ray $AC$ lies inside the angle $BAD$, $AC$ bisects the angle $BAD$.

b) Consider triangles $ABC$ and $CDA$. We have $AB=CD$ (given), $BC=DA$ (given) and $CA=AC$ (common side). Hence $\triangle ABC\equiv\triangle CDA$ (SSS). So $\angle BAC=\angle DCA$ (corresponding angles). These are alternate angles for $AB$ and $CD$ cut by $AC$ (because $B$ and $D$ lie on opposite sides of $AC$), so $AB\parallel CD$.

c) Consider triangles $ABD$ and $CBD$. We have $AB=CB$ (given), $AD=CD$ (given) and $BD$ is a common side. Hence $\triangle ABD\equiv\triangle CBD$ (SSS). So $\angle BAD=\angle BCD$, that is, $\angle BCD=70^\circ$.

So parts a), b) and c) are proved and $\angle BCD=70^\circ$.

**Answer.** a) $AC$ bisects $\angle BAD$. b) $AB\parallel CD$. c) $\angle BCD=70^\circ$.
:::

## Mini test

:::quiz
::mc
Given $\triangle ABC\equiv\triangle MNP$, which statement is correct?
A. $BC=NP$.
B. $AB=MP$.
C. $AC=MN$.
D. $\angle A=\angle N$.
::key A
$A$, $B$, $C$ correspond to $M$, $N$, $P$ in that order, so $BC$ corresponds to $NP$. A and C match the wrong sides; D matches the wrong angle ($\angle A=\angle M$).

::mc
Given $\triangle ABC\equiv\triangle DEF$ with $AB=3$ cm, $BC=5$ cm and $CA=6$ cm, the perimeter of triangle $DEF$ is
A. $8$ cm.
B. $14$ cm.
C. $30$ cm.
D. $11$ cm.
::key B
The perimeter of $DEF$ equals that of $ABC$: $3+5+6=14$ (cm). A and D leave out one side; C is the product of the three numbers.

::mc
Triangles $ABC$ and $DEF$ are congruent by the SSS condition when
A. $\angle A=\angle D$, $\angle B=\angle E$, $\angle C=\angle F$.
B. $AB=DE$, $BC=EF$ and $\angle A=\angle D$.
C. $AB=DE$, $BC=EF$, $CA=FD$.
D. $AB=DE$ and the two triangles have the same perimeter.
::key C
SSS needs three pairs of equal sides. B has only two sides and an angle that is not between them, A has only angles, and D is missing two pairs of sides.

::mc
Triangles $OAC$ and $OBC$ have $OA=OB$ and $AC=BC$. To prove $\triangle OAC\equiv\triangle OBC$ by SSS, we also need
A. $\angle OAC=\angle OBC$.
B. $OC=AB$.
C. $\angle AOB=90^\circ$.
D. $OC$ is a common side.
::key D
The third pair of sides is $OC=OC$. A and C are angles, which SSS does not use; B compares two segments that do not correspond.

::tf
Given $\triangle ABC\equiv\triangle MNP$ with $AB=4$ cm, $\angle A=50^\circ$ and $\angle B=70^\circ$. Decide whether each statement is true or false.
a) $\angle N=50^\circ$.
b) $MN=4$ cm.
c) $\angle P=60^\circ$.
d) We may write $\triangle ABC\equiv\triangle NMP$.
::key F T T F
a) False: $N$ corresponds to $B$, so $\angle N=70^\circ$. b) True: $MN=AB$. c) True: $\angle P=\angle C=180^\circ-50^\circ-70^\circ=60^\circ$. d) False: $A$ corresponds to $M$, not $N$.

::sa
Given $\triangle ABC\equiv\triangle DEF$ with $\angle A=48^\circ$ and $\angle B=67^\circ$, find the angle $F$ (in degrees).
::key 65
$\angle F=\angle C=180^\circ-48^\circ-67^\circ=65^\circ$.

::sa
In quadrilateral $ABCD$ we have $AB=AD$, $CB=CD$ and $\angle BAC=32^\circ$, and the ray $AC$ lies inside the angle $BAD$. Find the angle $BAD$ (in degrees).
::key 64
$\triangle ABC\equiv\triangle ADC$ (SSS), so $\angle DAC=\angle BAC=32^\circ$, hence $\angle BAD=32^\circ+32^\circ=64^\circ$.
:::
