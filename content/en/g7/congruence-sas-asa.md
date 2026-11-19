---
title: The second and third congruence conditions (SAS and ASA)
description: Learn the SAS and ASA congruence conditions, and use them to prove triangles congruent and to find distances that cannot be measured directly.
minutes: 30
---

:::goals
- State the SAS condition and recognise the correct "included angle".
- State the ASA condition and recognise the side that lies between the two angles.
- Write a proof that two triangles are congruent (giving reasons such as given, vertically opposite, alternate), then deduce equal sides and angles.
- Apply these conditions to distances that cannot be measured directly, such as the width of a pond or of a river.
:::

Two points $A$ and $B$ lie at opposite ends of a pond, with water in between, so you cannot stretch a tape from $A$ to $B$. You stand on the bank at a point $O$ from which you can see both, and you measure $OA=12$ m and $OB=15$ m. How can you find $AB$ without swimming across?

The idea is to build, entirely on dry land, a triangle congruent to triangle $OAB$, and then measure the side that matches $AB$. For that we need ways to recognise congruent triangles without checking all six parts. The last lesson gave us the three-sides condition; today we learn two more, and they involve angles.

## The second condition: side – angle – side

Try drawing triangle $ABC$ with $BA=3$ cm, $BC=4$ cm and $\angle B=60^\circ$: draw an angle of $60^\circ$, mark $BA=3$ cm and $BC=4$ cm on its two arms, then join $A$ to $C$. Everyone gets the same triangle. Two sides and the angle *between* them are enough to fix the shape.

:::theorem The SAS condition (side – angle – side)
If two sides and the included angle of one triangle are equal to two sides and the included angle of another triangle, then the triangles are congruent.

If $AB=A'B'$, $\angle B=\angle B'$ and $BC=B'C'$, then $\triangle ABC\equiv\triangle A'B'C'$ (SAS).
:::

:::diagram The SAS condition
alt: Two triangles ABC and A'B'C' with AB equal to A'B' (one tick), BC equal to B'C' (two ticks) and angle B equal to angle B' (same mark α)
point A 0,0 below-left
point B 5,0 below-right
point C 3,3 above
point A' 8,0 below-left
point B' 13,0 below-right
point C' 11,3 above
polygon A B C
polygon A' B' C'
mark A B 1
mark B C 2
mark A' B' 1
mark B' C' 2
angle A B C "α"
angle A' B' C' "α"
:::

**Why is it true?** Place triangle $A'B'C'$ on triangle $ABC$ so that $B'$ lies on $B$ and the ray $B'A'$ lies along the ray $BA$. Because $\angle B'=\angle B$, the ray $B'C'$ lies along the ray $BC$. Because $B'A'=BA$ and $B'C'=BC$, the point $A'$ lands on $A$ and $C'$ lands on $C$. The triangles fit exactly.

The word "included" matters: the angle must lie between the two given sides, that is, its vertex is the common point of those two sides.

:::diagram The two triangles of example 1
alt: Two triangles ABC and MNP with AB equal to MN, BC equal to NP and angle B equal to angle N equal to 50 degrees
point A 0,0 below-left
point B 4,0 below-right
point C 0.14,4.6 above
point M 8,0 below-left
point N 12,0 below-right
point P 8.14,4.6 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark M N 1
mark N P 2
angle A B C "50°"
angle M N P "50°"
:::

:::example Using the SAS condition
Triangles $ABC$ and $MNP$ have $AB=MN=4$ cm, $\angle B=\angle N=50^\circ$ and $BC=NP=6$ cm. Prove that $\triangle ABC\equiv\triangle MNP$, and deduce that $AC=MP$ and $\angle A=\angle M$.

**Solution.** Consider triangles $ABC$ and $MNP$. We have:

- $AB=MN$ ($=4$ cm) (given);
- $\angle B=\angle N$ ($=50^\circ$) (given), the angle between $AB$, $BC$ and between $MN$, $NP$;
- $BC=NP$ ($=6$ cm) (given).

Hence $\triangle ABC\equiv\triangle MNP$ (SAS).

So $AC=MP$ and $\angle A=\angle M$ (corresponding sides and angles).
:::

:::diagram A point on an angle bisector
alt: An angle xOy with points A and B on its arms so that OA equals OB, and a point M on the bisector Oz, with angles AOM and MOB equal
point O 0,0 below-left
point A 4,0 below-right
point B 2,3.46 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
mark O A 1
mark O B 1
angle A O M "α"
angle M O B "α"
:::

:::example Two equal distances
The angle $xOy$ has bisector $Oz$. Take a point $A$ on $Ox$ and a point $B$ on $Oy$ with $OA=OB$. Let $M$ be any point on $Oz$. Prove that $MA=MB$.

**Solution.** Consider triangles $OAM$ and $OBM$. We have:

- $OA=OB$ (given);
- $\angle AOM=\angle BOM$ (because $Oz$ bisects the angle $xOy$);
- $OM$ is a common side.

Hence $\triangle OAM\equiv\triangle OBM$ (SAS). So $MA=MB$ (corresponding sides).

So $MA=MB$.
:::

Now back to the pond. This time we go through all four steps.

:::diagram Measuring a distance across a pond
alt: Points A and B at opposite ends of a pond and a point O on the bank; A' and B' lie on the extensions of AO and BO beyond O with OA' equal to OA and OB' equal to OB, so triangle OA'B' is entirely on dry land
point O 0,0 left
point A -3.46,2 left
point B 1.93,4.61 above
point A' 3.46,-2 right
point B' -1.93,-4.61 below
segment A B dashed
segment A A'
segment B B'
segment A' B'
mark O A 1
mark O A' 1
mark O B 2
mark O B' 2
angle A O B "α"
angle A' O B' "α"
label -0.8,3.9 "pond"
:::

:::example Finding the distance $AB$ across a pond
From a point $O$ on the bank, a surveyor measures $OA=12$ m and $OB=15$ m. She extends $AO$ beyond $O$ to a point $A'$ with $OA'=OA$, and extends $BO$ beyond $O$ to a point $B'$ with $OB'=OB$. She measures $A'B'=18$ m. Find the distance $AB$.

**Solution.**

*Understand.* We cannot measure $AB$ because of the pond, but we can measure $A'B'$ on land. We must show that $AB$ and $A'B'$ are corresponding sides of congruent triangles.

*Plan.* Triangles $OAB$ and $OA'B'$ have $OA=OA'$ and $OB=OB'$. The angles between these pairs of sides are $\angle AOB$ and $\angle A'OB'$, which are vertically opposite and so equal. So we use SAS.

*Solve.* Consider triangles $OAB$ and $OA'B'$. We have:

- $OA=OA'$ ($=12$ m) (construction);
- $\angle AOB=\angle A'OB'$ (vertically opposite angles);
- $OB=OB'$ ($=15$ m) (construction).

Hence $\triangle OAB\equiv\triangle OA'B'$ (SAS). So $AB=A'B'=18$ m.

So the distance $AB$ is $18$ m.

*Look back.* The values $12$ m and $15$ m did not affect the result; only $OA'=OA$ and $OB'=OB$ mattered. So any $O$ will do, as long as the rays $AO$ and $BO$ can be extended on land. What if $O$ lies on the line $AB$: is there still a triangle $OAB$ to compare? Try drawing it.
:::

## The third condition: angle – side – angle

Now we swap roles: we are given one side and two angles. Draw a segment $BC=5$ cm, then draw an angle of $50^\circ$ at $B$ and an angle of $70^\circ$ at $C$ on the same side of $BC$. The two rays meet at exactly one point $A$, so everyone gets the same triangle. Here $BC$ is the side *adjacent* to both given angles.

:::theorem The ASA condition (angle – side – angle)
If one side and the two angles adjacent to it in one triangle are equal to one side and the two angles adjacent to it in another triangle, then the triangles are congruent.

If $\angle B=\angle B'$, $BC=B'C'$ and $\angle C=\angle C'$, then $\triangle ABC\equiv\triangle A'B'C'$ (ASA).
:::

:::diagram The ASA condition
alt: Two triangles ABC and A'B'C' with BC equal to B'C' (one tick), angle B equal to angle B' (mark α) and angle C equal to angle C' (mark β)
point B 0,0 below-left
point C 6,0 below-right
point A 2,3 above
point B' 9,0 below-left
point C' 15,0 below-right
point A' 11,3 above
polygon A B C
polygon A' B' C'
mark B C 1
mark B' C' 1
angle A B C "α"
angle B C A "β"
angle A' B' C' "α"
angle B' C' A' "β"
:::

:::note When the equal side is not between the two given angles
The angles of a triangle add up to $180^\circ$, so if two angles are known, the third can be calculated. If a side and two angles are equal but the side is not between those two angles, calculate the third angle to reduce the case to ASA.
:::

:::diagram Two parallel rays
alt: A segment AB with midpoint O, two parallel rays Ax and By on opposite sides of AB, and a line through O meeting the rays at C and D
point A 0,0 left
point B 6,0 right
point C 1.5,3 above-left
point D 4.5,-3 below-right
point O 3,0 above-right
segment A B
segment A C
segment B D
segment C D
mark A O 1
mark O B 1
angle C A O "α"
angle D B O "α"
angle A O C "β"
angle B O D "β"
:::

:::example Using alternate and vertically opposite angles
The segment $AB$ has midpoint $O$. Draw two parallel rays $Ax$ and $By$ on opposite sides of $AB$. A line through $O$ meets $Ax$ at $C$ and $By$ at $D$. Prove that $OC=OD$.

**Solution.** Consider triangles $AOC$ and $BOD$. We have:

- $\angle CAO=\angle DBO$ (alternate angles, because $Ax\parallel By$);
- $AO=BO$ (because $O$ is the midpoint of $AB$);
- $\angle AOC=\angle BOD$ (vertically opposite angles).

Hence $\triangle AOC\equiv\triangle BOD$ (ASA). So $OC=OD$ (corresponding sides).

So $OC=OD$.
:::

The last example is a real measuring problem: the width of a river.

:::diagram Measuring the width of a river
alt: Point A on the near bank and a tree T on the far bank with AT perpendicular to the bank; B and C on the near bank with AB equal to BC; D beyond C with CD perpendicular to the bank and D, B, T in a line
point P1 -1,7 ""
point P2 9,7 ""
point P3 -1,0 ""
point P4 9,0 ""
point T 0,7 above-left
point A 0,0 below-left
point B 4,0 above-right
point C 8,0 above-right
point D 8,-7 below-right
segment P1 P2
segment P3 P4
segment T A
segment C D
segment T D
right T A B
right D C B
mark A B 1
mark B C 1
angle T B A "α"
angle D B C "α"
label 4,3.5 "river"
:::

:::example The width of a river
A stretch of river has parallel banks. You stand at a point $A$ on the near bank and sight a tree $T$ on the opposite bank so that $AT$ is perpendicular to the bank. You walk $20$ m along the bank to $B$, then another $20$ m to $C$. From $C$ you walk at right angles to the bank, away from the river, to a point $D$ where $D$, $B$ and $T$ are in a straight line. You measure $CD=35$ m. Find the width $AT$ of the river.

**Solution.**

*Understand.* We need $AT$ but cannot cross the river. We can measure $CD$, and we know $AB=BC=20$ m.

*Plan.* If $\triangle ABT\equiv\triangle CBD$, then $AT=CD$. The triangles have $AB=CB$ and the two angles adjacent to that side: the right angles at $A$ and $C$ on one hand, and the vertically opposite angles at $B$ on the other. So we use ASA.

*Solve.* Consider triangles $ABT$ and $CBD$. We have:

- $\angle BAT=\angle BCD$ ($=90^\circ$) (given);
- $AB=CB$ ($=20$ m) (given);
- $\angle ABT=\angle CBD$ (vertically opposite angles).

Hence $\triangle ABT\equiv\triangle CBD$ (ASA). So $AT=CD=35$ m.

So the river is $35$ m wide.

*Look back.* The key is the pair of right angles at $A$ and $C$; if you drift away from the perpendicular, the triangles are no longer congruent. If $AB=BC=20$ m were changed to $AB=BC=10$ m, would the measurement $CD$ change? Why or why not?
:::

:::warning Common mistakes
- **The angle is not the included angle.** Wrong: "$AB=DE$, $AC=DF$ and $\angle B=\angle E$, so the triangles are congruent (SAS)". Why it is wrong: the angle $B$ is not between $AB$ and $AC$. For example, draw $\angle xBy=30^\circ$ and take $A$ on $Bx$ with $BA=5$ cm; the circle with centre $A$ and radius $3$ cm meets the ray $By$ at two different points $C$, giving two non-congruent triangles that all have $AB=5$ cm, $AC=3$ cm and $\angle B=30^\circ$. Right: the angle must be between the two sides.
- **Stating equal angles without a reason.** Wrong: writing "$\angle AOB=\angle A'OB'$" and concluding at once. Why it is wrong: the reader needs to know why the angles are equal. Right: add "(vertically opposite angles)", "(alternate angles)" or "(given)".
- **Using ASA when the side is not between the two angles.** Wrong: $\angle A=\angle D$, $\angle C=\angle F$ and $AB=DE$, so ASA. Why it is wrong: the side between $\angle A$ and $\angle C$ is $AC$, not $AB$. Right: first find $\angle B=\angle E$; then $AB$ lies between $\angle A$ and $\angle B$, and ASA applies.
:::

**Connections.** The last lesson gave us SSS; this one adds SAS and ASA. All three say that exactly three parts are needed and they must be arranged in the right way. The next lesson looks at right-angled triangles, where the extra right angle means fewer data are needed.

## Key terms

:::terms
- SAS condition | trường hợp cạnh – góc – cạnh (c.g.c)
- ASA condition | trường hợp góc – cạnh – góc (g.c.g)
- included angle | góc xen giữa
- adjacent side | cạnh kề
- vertically opposite angles | hai góc đối đỉnh
- alternate angles | hai góc so le trong
- angle bisector | tia phân giác
- midpoint | trung điểm
- construction | cách dựng
- corresponding sides, angles | cạnh, góc tương ứng
:::

## Summary

- SAS: two sides and the **included** angle equal means the triangles are congruent.
- ASA: one side and the two angles **adjacent** to it equal means the triangles are congruent.
- Each time you state an equal pair, give the reason: (given), (vertically opposite), (alternate), (common side), (midpoint), (angle bisector).
- Two sides and an angle that is not between them do not guarantee congruence.
- Congruent triangles give us distances, angles and parallel lines that we cannot measure directly.

The person standing at the pond at the start can now conclude: $AB=A'B'$, by measuring only the segment on land.

## Practice

Each exercise has what you need and hints for the steps. Try it yourself first, then open the solution.

:::exercise
Triangles $ABC$ and $MNP$ have $AB=MN$ and $BC=NP$. For each extra condition below, say whether we can conclude $\triangle ABC\equiv\triangle MNP$, and if so by which condition.

a) $\angle B=\angle N$.

b) $\angle A=\angle M$.

c) $AC=MP$.

::hint
**What you need:** SSS, SAS; the angle between $AB$ and $BC$ is $\angle B$.

**Steps:**
1. Find the angle that lies between $AB$ and $BC$.
2. For each condition, check whether the three parts of one of the conditions are all there.

::solution
a) The angle $B$ lies between $AB$ and $BC$, and the angle $N$ lies between $MN$ and $NP$. With $AB=MN$, $\angle B=\angle N$ and $BC=NP$ we get $\triangle ABC\equiv\triangle MNP$ (SAS).

b) The angle $A$ lies between $AB$ and $AC$, not between $AB$ and $BC$. So the data are not enough.

c) With $AB=MN$, $BC=NP$ and $AC=MP$ we get $\triangle ABC\equiv\triangle MNP$ (SSS).

So a) yes (SAS); b) not enough; c) yes (SSS).

**Answer.** a) SAS. b) Not enough. c) SSS.
:::

:::exercise
Triangles $ABC$ and $DEF$ have $\angle B=\angle E=60^\circ$, $BC=EF=5$ cm and $\angle C=\angle F=80^\circ$.

a) Prove that $\triangle ABC\equiv\triangle DEF$.

b) Find $\angle D$.

::hint
**What you need:** ASA; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Does the side $BC$ lie between the angles $B$ and $C$?
2. The angle $D$ corresponds to the angle $A$; find $\angle A$.

::solution
a) Consider triangles $ABC$ and $DEF$. We have:

- $\angle B=\angle E$ ($=60^\circ$) (given);
- $BC=EF$ ($=5$ cm) (given);
- $\angle C=\angle F$ ($=80^\circ$) (given).

Hence $\triangle ABC\equiv\triangle DEF$ (ASA).

b) In triangle $ABC$ we have $\angle A=180^\circ-60^\circ-80^\circ=40^\circ$ (angle sum). Since $\angle D=\angle A$ (corresponding angles), $\angle D=40^\circ$.

So $\angle D=40^\circ$.

**Answer.** $\angle D=40^\circ$.
:::

:::exercise
In triangle $ABC$, $M$ is the midpoint of $BC$. On the extension of $MA$ beyond $M$, take a point $D$ with $MD=MA$.

a) Prove that $\triangle MAB\equiv\triangle MDC$.

b) Prove that $AB\parallel CD$.

::hint
**What you need:** SAS; vertically opposite angles; equal alternate angles give parallel lines.

**Steps:**
1. a) Find two pairs of equal sides and the angle between them.
2. b) From a), choose the pair of alternate angles for $AB$ and $CD$ cut by $AD$.

::solution
a) Consider triangles $MAB$ and $MDC$. We have:

- $MA=MD$ (construction);
- $\angle AMB=\angle DMC$ (vertically opposite angles);
- $MB=MC$ (because $M$ is the midpoint of $BC$).

Hence $\triangle MAB\equiv\triangle MDC$ (SAS).

b) From a), $\angle MAB=\angle MDC$ (corresponding angles). These are alternate angles for the lines $AB$ and $CD$ cut by $AD$. Hence $AB\parallel CD$.

So $\triangle MAB\equiv\triangle MDC$ and $AB\parallel CD$.

**Answer.** a) SAS. b) $AB\parallel CD$.
:::

:::exercise
In triangle $ABC$ the bisector of the angle $A$ meets $BC$ at $D$, and $AD\perp BC$. Prove that $AB=AC$.

::hint
**What you need:** ASA; $AD\perp BC$ means $\angle ADB=\angle ADC=90^\circ$.

**Steps:**
1. Consider triangles $ABD$ and $ACD$.
2. Between which two angles does the common side $AD$ lie in each triangle?

::solution
Consider triangles $ABD$ and $ACD$. We have:

- $\angle BAD=\angle CAD$ (because $AD$ bisects the angle $A$);
- $AD$ is a common side;
- $\angle ADB=\angle ADC$ ($=90^\circ$) (because $AD\perp BC$).

Hence $\triangle ABD\equiv\triangle ACD$ (ASA). So $AB=AC$ (corresponding sides).

So $AB=AC$.

**Answer.** Proved.
:::

:::exercise
A flagpole $OC$ stands vertically on level ground. Two ropes $CA$ and $CB$ run from the top $C$ to points $A$ and $B$ on the ground with $OA=OB=4$ m. Prove that the two ropes have the same length. Given that $CA=9.8$ m, find $CB$.

::hint
**What you need:** SAS; the pole is vertical, so $OC$ is perpendicular to the ground.

**Steps:**
1. Consider triangles $COA$ and $COB$.
2. Which angle lies between $OC$ and $OA$, and between $OC$ and $OB$?

::solution
Consider triangles $COA$ and $COB$. We have:

- $OA=OB$ ($=4$ m) (given);
- $\angle COA=\angle COB$ ($=90^\circ$) (because the pole is vertical);
- $OC$ is a common side.

Hence $\triangle COA\equiv\triangle COB$ (SAS). So $CA=CB$, and since $CA=9.8$ m, $CB=9.8$ m.

So the ropes have the same length and $CB=9.8$ m.

**Answer.** $CB=9.8$ m.
:::

:::exercise
A stepladder in the shape of the letter A has legs $AB=AC=2$ m. Two braces $BE$ and $CD$ are fitted, with $D$ on $AB$, $E$ on $AC$ and $AD=AE=1.5$ m. Prove that the braces $BE$ and $CD$ have the same length.

::hint
**What you need:** SAS; the angle $A$ is common to both triangles.

**Steps:**
1. Consider triangles $ABE$ and $ACD$.
2. Find two pairs of equal sides and the angle between them.

::solution
Consider triangles $ABE$ and $ACD$. We have:

- $AB=AC$ ($=2$ m) (given);
- $\angle BAE=\angle CAD$ (both are the angle $A$);
- $AE=AD$ ($=1.5$ m) (given).

Hence $\triangle ABE\equiv\triangle ACD$ (SAS). So $BE=CD$ (corresponding sides).

So the two braces have the same length.

**Answer.** $BE=CD$.
:::

:::exercise
In quadrilateral $ABCD$ we have $AB\parallel CD$ and $AB=CD$, and $B$ and $D$ lie on opposite sides of the line $AC$. Prove that $AD=BC$ and $AD\parallel BC$. (This revisits the previous lesson on SSS.)

::hint
**What you need:** SAS; if two lines are parallel, alternate angles are equal, and conversely.

**Steps:**
1. From $AB\parallel CD$, find the pair of equal alternate angles formed with $AC$.
2. Consider $\triangle ABC$ and $\triangle CDA$ and use SAS.

::solution
Since $AB\parallel CD$, $\angle BAC=\angle DCA$ (alternate angles).

Consider triangles $ABC$ and $CDA$. We have:

- $AB=CD$ (given);
- $\angle BAC=\angle DCA$ (shown above);
- $AC$ is a common side.

Hence $\triangle ABC\equiv\triangle CDA$ (SAS). So $BC=DA$ and $\angle BCA=\angle DAC$ (corresponding sides and angles).

The angles $\angle BCA$ and $\angle DAC$ are alternate angles for $BC$ and $AD$ cut by $AC$. Hence $AD\parallel BC$.

So $AD=BC$ and $AD\parallel BC$.

**Answer.** $AD=BC$; $AD\parallel BC$.
:::

:::exercise Challenge
In triangle $ABC$ the angle $A$ is acute. Outside the triangle, draw the triangles $ABD$ and $ACE$ that are right-angled and isosceles at $A$, that is, $AB=AD$, $\angle BAD=90^\circ$ and $AC=AE$, $\angle CAE=90^\circ$. Prove that $BE=CD$.

::hint
**What you need:** SAS; adding angles: $\angle DAC=\angle DAB+\angle BAC$.

**Steps:**
1. Express $\angle DAC$ and $\angle BAE$ in terms of $\angle BAC$.
2. Consider triangles $ADC$ and $ABE$.

::solution
Since $\angle A$ is acute, $\angle DAB+\angle BAC=90^\circ+\angle BAC<180^\circ$, so $\angle DAC=\angle DAB+\angle BAC=90^\circ+\angle BAC$. In the same way, $\angle BAE=\angle BAC+\angle CAE=\angle BAC+90^\circ$.

So $\angle DAC=\angle BAE$.

Consider triangles $ADC$ and $ABE$. We have:

- $AD=AB$ (given);
- $\angle DAC=\angle BAE$ (shown above);
- $AC=AE$ (given).

Hence $\triangle ADC\equiv\triangle ABE$ (SAS). So $DC=BE$ (corresponding sides).

So $BE=CD$.

**Answer.** $BE=CD$.
:::

## Mini test

:::quiz
::mc NB
Triangles $ABC$ and $DEF$ have $AB=DE$ and $BC=EF$. To make them congruent by SAS, we also need
A. $\angle B=\angle E$.
B. $\angle A=\angle D$.
C. $\angle C=\angle F$.
D. $AC=DF$.
::key A
The angle between $AB$ and $BC$ is $\angle B$, so we need $\angle B=\angle E$. A and C are angles that are not included; D would give SSS.

::mc NB
Triangles $ABC$ and $MNP$ have $\angle A=\angle M$ and $\angle B=\angle N$. To make them congruent by ASA, we also need
A. $AC=MP$.
B. $AB=MN$.
C. $BC=NP$.
D. $\angle C=\angle P$.
::key B
The side adjacent to both $\angle A$ and $\angle B$ is $AB$, so we need $AB=MN$. A and C are sides that are not between the two angles; D adds only another angle.

::mc TH
The segments $AB$ and $CD$ meet at $O$ with $OA=OB$ and $OC=OD$. Which triangle is congruent to triangle $OAC$?
A. $\triangle OBC$.
B. $\triangle ODB$.
C. $\triangle OBD$.
D. $\triangle OAD$.
::key C
$OA=OB$, $\angle AOC=\angle BOD$ (vertically opposite) and $OC=OD$, so $\triangle OAC\equiv\triangle OBD$ (SAS). B lists the vertices in the wrong order; C and D lack the conditions.

::mc TH
Triangles $ABC$ and $DEF$ have $AB=DE$, $AC=DF$ and $\angle B=\angle E$. Which statement is correct?
A. The triangles are congruent by SAS.
B. The triangles are congruent by ASA.
C. The triangles are congruent by SSS.
D. There is not enough information to conclude that the triangles are congruent.
::key D
The angle $B$ is not between $AB$ and $AC$, so SAS cannot be used, and the other two conditions lack data.

::tf TH NB TH VD
In triangle $ABC$, $M$ is the midpoint of $BC$. On the extension of $MA$ beyond $M$, take $D$ with $MD=MA$. Decide whether each statement is true or false.
a) Triangles $MAB$ and $MDC$ are congruent by SSS.
b) $\angle AMB=\angle DMC$.
c) $AB=CD$.
d) $AB\parallel CD$.
::key F T T T
a) False: at the start we do not know that $AB=CD$; the triangles are congruent by SAS. b) True: vertically opposite angles. c) True: corresponding sides. d) True: $\angle MAB=\angle MDC$ are alternate angles.

::sa VD
In the river problem, change the measurements to $AB=BC=15$ m and $CD=28$ m. Find the width $AT$ of the river (in metres).
::key 28
$\triangle ABT\equiv\triangle CBD$ (ASA), so $AT=CD=28$ m.

::sa VD
In quadrilateral $ABCD$ we have $AB\parallel CD$, $AB=CD=5$ cm and $BC=7$ cm, with $B$ and $D$ on opposite sides of $AC$. Find $AD$ (in cm).
::key 7
$\triangle ABC\equiv\triangle CDA$ (SAS), so $AD=BC=7$ cm.
:::
