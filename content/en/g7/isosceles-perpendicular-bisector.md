---
title: Isosceles triangles. The perpendicular bisector of a line segment
description: Prove the properties and the test for isosceles and equilateral triangles; understand the perpendicular bisector with its theorem and converse.
minutes: 35
---

:::goals
- State the definitions of isosceles and equilateral triangles; state and prove the property (base angles are equal) and the test (two equal angles make the triangle isosceles).
- State the definition of the perpendicular bisector of a segment; state and prove the theorem and its converse.
- Tell a theorem from its converse, and know which one to use and when.
- Apply these ideas to real situations such as an A-frame and the position of a pumping station equidistant from two villages.
:::

In a field, two stakes $A$ and $B$ are $8$ m apart. You want to drive in a third stake $M$ the same distance from both, that is, $MA=MB$. You tie the ends of a $10$ m rope to $A$ and $B$, pull the middle of the rope tight and drive the stake $M$ in at that spot. Once $M$ is in place, triangle $MAB$ has two equal sides. If you pull to a different spot with the rope still tight, is that spot also the same distance from $A$ and $B$? And what kind of line do all the positions equidistant from $A$ and $B$ lie on?

These two questions are two halves of one story: one half about a triangle with two equal sides (an isosceles triangle), the other about the points equidistant from the ends of a segment (the perpendicular bisector). We shall see how tightly they are linked.

## Isosceles triangles

Fold a sheet of paper in half and cut out a triangle so that the fold is a cut through the apex. When you open it out, you get a triangle with two equal sides, and the angles at the ends of the third side look equal too. We now prove that.

:::definition Isosceles triangle
An **isosceles triangle** is a triangle with two equal sides. The equal sides are called the **legs**; the remaining side is the **base**. The vertex shared by the two legs is the **apex**; the two angles next to the base are the **base angles** and the angle at the apex is the **apex angle**.

A triangle $ABC$ with $AB=AC$ is isosceles with apex $A$.
:::

:::diagram An isosceles triangle
alt: Triangle ABC with AB equal to AC and base BC
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
mark A B 1
mark A C 1
:::

:::theorem Property of an isosceles triangle (the theorem)
If triangle $ABC$ is isosceles with $AB=AC$, then the base angles are equal: $\angle B=\angle C$.
:::

:::diagram Proving that the base angles are equal
alt: Isosceles triangle ABC with M the midpoint of BC, the segment AM dashed, and the angles B and C marked equal
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point M 3,0 below
polygon A B C
segment A M dashed
mark A B 1
mark A C 1
mark B M 2
mark M C 2
angle A B C "α"
angle B C A "α"
:::

**Proof.** Let $M$ be the midpoint of $BC$. Consider triangles $ABM$ and $ACM$. We have:

- $AB=AC$ (given);
- $BM=CM$ (because $M$ is the midpoint of $BC$);
- $AM$ is a common side.

Hence $\triangle ABM\equiv\triangle ACM$ (SSS). So $\angle B=\angle C$ (corresponding angles). We also get $\angle AMB=\angle AMC$; these angles are adjacent on a straight line, so each is $90^\circ$ and $AM\perp BC$.

Is the reverse also true? If a triangle has two equal angles, must it be isosceles? This is the **converse**.

:::theorem Test for an isosceles triangle (the converse)
If triangle $ABC$ has $\angle B=\angle C$, then it is isosceles with apex $A$, that is, $AB=AC$.
:::

:::diagram Proving the converse
alt: Triangle ABC with angle B equal to angle C, the bisector AD of angle A meeting BC at D, and the angles BAD and DAC marked equal
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point D 3,0 below
polygon A B C
segment A D dashed
angle A B C "α"
angle B C A "α"
angle B A D "β"
angle D A C "β"
:::

**Proof.** Draw the bisector of the angle $A$, meeting $BC$ at $D$. Consider triangles $ABD$ and $ACD$. We have:

- $\angle BAD=\angle CAD$ (because $AD$ bisects the angle $A$);
- $AD$ is a common side;
- $\angle ADB=\angle ADC$, because $\angle ADB=180^\circ-\angle B-\angle BAD$ and $\angle ADC=180^\circ-\angle C-\angle CAD$, with $\angle B=\angle C$ (given) and $\angle BAD=\angle CAD$.

Hence $\triangle ABD\equiv\triangle ACD$ (ASA). So $AB=AC$ (corresponding sides).

:::note A theorem and its converse
The converse of a theorem swaps its hypothesis and its conclusion. A true theorem has a converse that is **not necessarily true**. For example, "vertically opposite angles are equal" is true, but "equal angles are vertically opposite" is false. So every converse needs its own proof. Here both directions for isosceles triangles are true: the **theorem** says "isosceles means equal base angles"; the **converse** says "equal angles mean isosceles".
:::

**Equilateral triangles.** A triangle with three equal sides is **equilateral**. If $AB=AC=BC$, then triangle $ABC$ is isosceles with apex $A$, so $\angle B=\angle C$, and isosceles with apex $B$, so $\angle A=\angle C$. So all three angles are equal, and since they add up to $180^\circ$, each is $60^\circ$. Conversely, a triangle with three equal angles has three equal sides (by the converse).

:::diagram The triangle of example 1
alt: Isosceles triangle ABC with apex angle A equal to 100 degrees and unknown base angles
point A 3,2.52 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
mark A B 1
mark A C 1
angle B A C "100°"
angle A B C "?"
angle B C A "?"
:::

:::example Angles of isosceles triangles
Triangle $ABC$ is isosceles with apex $A$ and $\angle A=100^\circ$. Find $\angle B$ and $\angle C$. If triangle $DEF$ is isosceles with apex $D$ and $\angle E=50^\circ$, find $\angle D$.

**Solution.** Since triangle $ABC$ is isosceles with apex $A$, $\angle B=\angle C$ (base angles). In triangle $ABC$, $\angle B+\angle C=180^\circ-\angle A=180^\circ-100^\circ=80^\circ$. So $\angle B=\angle C=80^\circ\div2=40^\circ$.

Since triangle $DEF$ is isosceles with apex $D$, $\angle F=\angle E=50^\circ$. So $\angle D=180^\circ-50^\circ-50^\circ=80^\circ$.

So $\angle B=\angle C=40^\circ$ and $\angle D=80^\circ$.
:::

:::diagram An A-frame
alt: An A-frame triangle ABC with both base angles B and C equal to 65 degrees, side AB equal to 2.1 m and side AC unknown
point A 3,6.43 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
angle A B C "65°"
angle B C A "65°"
label 0.7,3.6 "2.1 m"
label 5.4,3.6 "?"
:::

:::example The carpenter's A-frame
An A-frame has legs $AB$ and $AC$ and a crossbar $BC$ on the floor. The carpenter has no long tape, only a protractor: she measures $\angle B=\angle C=65^\circ$ and $AB=2.1$ m. Prove that the two legs have the same length, find $AC$ and find the apex angle $\angle A$.

**Solution.**

*Understand.* We know that the angles $B$ and $C$ are equal and that $AB=2.1$ m. We must find $AC$ and $\angle A$.

*Plan.* Two equal angles give an isosceles triangle, but with which apex? The sides opposite equal angles are equal: $AC$ lies opposite $\angle B$ and $AB$ lies opposite $\angle C$. So we use the converse.

*Solve.* Triangle $ABC$ has $\angle B=\angle C$ ($=65^\circ$), so it is isosceles with apex $A$ (test for an isosceles triangle). So $AC=AB=2.1$ m.

In triangle $ABC$, $\angle A=180^\circ-\angle B-\angle C=180^\circ-65^\circ-65^\circ=50^\circ$.

So $AC=2.1$ m and $\angle A=50^\circ$.

*Look back.* With only a protractor, the carpenter can check that the legs are equal. If she had measured $\angle B=65^\circ$ but $\angle C=64^\circ$, would the legs be equal? Why or why not?
:::

:::diagram Triangle ADE is isosceles
alt: Isosceles triangle ABC with apex A, points D and E on BC with BD equal to CE, and the segments AD and AE drawn
point A 3,4 above
point B 0,0 below-left
point D 2,0 below
point E 4,0 below
point C 6,0 below-right
polygon A B C
segment A D
segment A E
mark A B 1
mark A C 1
mark B D 2
mark C E 2
:::

:::example Two symmetric points on the base
Triangle $ABC$ is isosceles with apex $A$. On the side $BC$ take two points $D$ and $E$ with $BD=CE$ ($D$ between $B$ and $E$). Prove that triangle $ADE$ is isosceles.

**Solution.** Since triangle $ABC$ is isosceles with apex $A$, $AB=AC$ and $\angle ABD=\angle ACE$ (the base angles $\angle B$ and $\angle C$).

Consider triangles $ABD$ and $ACE$. We have:

- $AB=AC$ (given);
- $\angle ABD=\angle ACE$ (shown above);
- $BD=CE$ (given).

Hence $\triangle ABD\equiv\triangle ACE$ (SAS). So $AD=AE$ (corresponding sides).

So triangle $ADE$ is isosceles with apex $A$.
:::

## The perpendicular bisector of a segment

Fold a sheet of paper so that two marked points $A$ and $B$ land on each other. The crease is a straight line. It passes through the midpoint of $AB$ and is perpendicular to $AB$. This is the perpendicular bisector.

:::definition Perpendicular bisector
The **perpendicular bisector** of a segment is the line that is perpendicular to the segment at its midpoint.
:::

:::diagram The perpendicular bisector of AB
alt: A segment AB with midpoint I; the line d perpendicular to AB at I is the perpendicular bisector
point A 0,0 left
point B 6,0 right
point I 3,0 below
point U 3,3 ""
point V 3,-3 ""
segment A B
segment U V
right A I U
mark A I 1
mark I B 1
label 3.3,2.8 "d"
:::

:::theorem Property of the perpendicular bisector (the theorem)
A point on the perpendicular bisector of a segment is equidistant from the two ends of the segment.
:::

:::diagram Proving the theorem
alt: A point M on the perpendicular bisector d of AB, I the midpoint of AB, and the segments MA and MB that we must prove equal
point A 0,0 left
point B 6,0 right
point I 3,0 below
point U 3,3.5 ""
point V 3,-3 ""
point M 3,2.5 above-right
segment A B
segment U V
segment M A dashed
segment M B dashed
right A I M
mark A I 1
mark I B 1
mark M A 2
mark M B 2
label 3.3,3.2 "d"
:::

**Proof.** Let $d$ be the perpendicular bisector of $AB$, meeting $AB$ at its midpoint $I$, and let $M$ be any point on $d$. If $M$ is the point $I$, then $MA=MB$ because $I$ is the midpoint. If $M$ is not $I$, consider triangles $MIA$ and $MIB$. We have:

- $IA=IB$ (because $I$ is the midpoint of $AB$);
- $\angle MIA=\angle MIB$ ($=90^\circ$) (because $d\perp AB$);
- $MI$ is a common side.

Hence $\triangle MIA\equiv\triangle MIB$ (SAS). So $MA=MB$.

:::theorem The reverse (the converse)
A point that is equidistant from the two ends of a segment lies on the perpendicular bisector of the segment.
:::

:::diagram Proving the converse
alt: A point M with MA equal to MB, I the midpoint of AB, the segment MI dashed, and the angles MIA and MIB marked x and y
point A 0,0 left
point B 6,0 right
point I 3,0 below
point M 3,2.5 above
segment A B
segment M A
segment M B
segment M I dashed
mark M A 2
mark M B 2
mark A I 1
mark I B 1
angle M I A "x"
angle M I B "y"
:::

**Proof.** Suppose $MA=MB$. Let $I$ be the midpoint of $AB$. If $M$ is the point $I$, it lies on the perpendicular bisector. If not, consider triangles $MIA$ and $MIB$. We have:

- $MA=MB$ (given);
- $IA=IB$ (because $I$ is the midpoint of $AB$);
- $MI$ is a common side.

Hence $\triangle MIA\equiv\triangle MIB$ (SSS). So $\angle MIA=\angle MIB$. These angles are adjacent on a straight line, so each is $90^\circ$. So $MI\perp AB$ at the midpoint $I$, that is, $M$ lies on the perpendicular bisector of $AB$.

Together the two theorems say: **the perpendicular bisector of $AB$ is exactly the set of all points equidistant from $A$ and $B$.** This answers the opening question: the possible positions of the stake $M$ all lie on one straight line, the perpendicular bisector of $AB$.

:::diagram The pumping station
alt: Villages A and B are 6 km apart, a straight road d, and the perpendicular bisector of AB drawn dashed meeting d at M
point A 0,0 left
point B 6,0 right
point I 3,0 below
point M 3,1.29 above-right
point P 0,3 ""
point Q 7,-1 ""
point U 3,3 ""
point V 3,-2 ""
segment P Q
segment U V dashed
segment A B
segment M A
segment M B
right A I U
mark M A 1
mark M B 1
label 6.2,-0.2 "d"
:::

:::example A pumping station equidistant from two villages
Villages $A$ and $B$ are $6$ km apart. A straight road $d$ passes near both villages and is not perpendicular to $AB$. A pumping station $M$ is to be built on the road $d$ so that $M$ is equidistant from the two villages. Find the position of $M$ and prove that $MA=MB$. Given that $MA=3.3$ km, find $MB$.

**Solution.**

*Understand.* We need a point $M$ on $d$ with $MA=MB$.

*Plan.* The points equidistant from $A$ and $B$ lie on the perpendicular bisector of $AB$. So $M$ must be the point where $d$ meets the perpendicular bisector of $AB$.

*Solve.* Draw the perpendicular bisector of $AB$. Since $d$ is not perpendicular to $AB$, it is not parallel to the perpendicular bisector, so the two lines meet at one point $M$.

Since $M$ lies on the perpendicular bisector of $AB$, $MA=MB$ (the theorem). So $MB=MA=3.3$ km.

The position is unique: if another point $M'$ on $d$ were also equidistant from $A$ and $B$, then by the converse $M'$ would lie on the perpendicular bisector of $AB$, so $M'$ would be the point where $d$ meets the perpendicular bisector, that is, $M'=M$.

So the station goes at the point $M$ where $d$ meets the perpendicular bisector of $AB$, and $MB=3.3$ km.

*Look back.* Here we used both theorems: the theorem to show that $M$ works, the converse to show that there is no other position. What happens if $d$ is perpendicular to $AB$: are there any suitable points, and how many?
:::

:::warning Common mistakes
- **Misreading the sides opposite equal angles.** Wrong: "Triangle $ABC$ has $\angle B=\angle C$, so $AB=BC$." Why it is wrong: the side opposite $\angle B$ is $AC$ and the side opposite $\angle C$ is $AB$; the two equal sides are $AB$ and $AC$. Right: $AB=AC$, and the triangle is isosceles with apex $A$.
- **Thinking that any perpendicular line is the perpendicular bisector.** Wrong: "$d\perp AB$, so every point of $d$ is equidistant from $A$ and $B$." Why it is wrong: the perpendicular bisector must be perpendicular to $AB$ *and* pass through its midpoint. Right: check both conditions.
- **Forgetting the case where $M$ is the point $I$.** Wrong: considering triangles $MIA$ and $MIB$ without saying anything when $M$ coincides with the midpoint $I$. Why it is wrong: when $M=I$ there are no triangles. Right: treat this case separately; then $MA=MB$ because $I$ is the midpoint.
:::

**Connections.** The two theorems on isosceles triangles and the two on perpendicular bisectors are all proved with SSS, SAS and ASA. They will return when you study perpendicular bisectors and concurrent lines in a triangle.

## Key terms

:::terms
- isosceles triangle | tam giác cân
- legs, base | cạnh bên, đáy
- base angle, apex angle | góc ở đáy, góc ở đỉnh
- equilateral triangle | tam giác đều
- perpendicular bisector | đường trung trực
- theorem (the original statement) | định lí thuận
- converse | định lí đảo
- equidistant | cách đều
- midpoint | trung điểm
- adjacent angles on a straight line | kề bù
:::

## Summary

- An isosceles triangle has two equal sides; **theorem:** an isosceles triangle has equal base angles; **converse:** a triangle with two equal angles is isosceles (the sides opposite those angles are equal).
- An equilateral triangle has three equal sides, three equal angles, and each angle is $60^\circ$.
- The perpendicular bisector of a segment is perpendicular to the segment at its midpoint.
- **Theorem:** a point on the perpendicular bisector is equidistant from the ends. **Converse:** a point equidistant from the ends lies on the perpendicular bisector.
- The converse of a true theorem is not necessarily true, so it needs its own proof.

Back to the stakes at the start: every position $M$ equidistant from $A$ and $B$ lies on the perpendicular bisector of $AB$, and every point of that line works.

## Practice

Each exercise has what you need and hints for the steps. Try it yourself first, then open the solution.

:::exercise
a) Triangle $ABC$ is isosceles with apex $A$ and $\angle A=70^\circ$. Find $\angle B$.

b) Triangle $DEF$ is isosceles with apex $D$ and $\angle E=50^\circ$. Find $\angle D$.

::hint
**What you need:** the base angles of an isosceles triangle are equal; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. a) The base angles are $\angle B$ and $\angle C$; find their sum.
2. b) Which angle is equal to the base angle $\angle E$?

::solution
a) Since triangle $ABC$ is isosceles with apex $A$, $\angle B=\angle C$. We have $\angle B+\angle C=180^\circ-70^\circ=110^\circ$, so $\angle B=110^\circ\div2=55^\circ$.

b) Since triangle $DEF$ is isosceles with apex $D$, $\angle F=\angle E=50^\circ$. So $\angle D=180^\circ-50^\circ-50^\circ=80^\circ$.

So $\angle B=55^\circ$ and $\angle D=80^\circ$.

**Answer.** a) $55^\circ$. b) $80^\circ$.
:::

:::exercise
Triangle $ABC$ has $AB=AC$ and $\angle B=60^\circ$. Prove that triangle $ABC$ is equilateral.

::hint
**What you need:** the property of and the test for an isosceles triangle; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. From $AB=AC$, which angle equals $\angle B$?
2. Find $\angle A$, then show that the other sides are equal.

::solution
Since $AB=AC$, triangle $ABC$ is isosceles with apex $A$, so $\angle C=\angle B=60^\circ$. So $\angle A=180^\circ-60^\circ-60^\circ=60^\circ$.

So $\angle A=\angle B=\angle C$. From $\angle A=\angle B$ we get $CA=CB$ (the sides opposite equal angles). Together with $AB=AC$ this gives $AB=BC=CA$.

So triangle $ABC$ is equilateral.

**Answer.** Proved.
:::

:::exercise
The segment $AB$ has length $10$ cm.

a) The point $M$ lies on the perpendicular bisector of $AB$ and $MA=13$ cm. Find $MB$.

b) The point $N$ has $NA=NB=7$ cm. On which line does $N$ lie?

::hint
**What you need:** the theorem and the converse about the perpendicular bisector.

**Steps:**
1. a) Which theorem tells you what follows from "lies on the perpendicular bisector"?
2. b) What follows from "equidistant from the two ends"?

::solution
a) Since $M$ lies on the perpendicular bisector of $AB$, $MA=MB$ (the theorem). So $MB=13$ cm.

b) Since $NA=NB$, $N$ is equidistant from the ends of $AB$, so $N$ lies on the perpendicular bisector of $AB$ (the converse).

So $MB=13$ cm and $N$ lies on the perpendicular bisector of $AB$.

**Answer.** a) $13$ cm. b) The perpendicular bisector of $AB$.
:::

:::exercise
The cross-section of a roof is a triangle $ABC$, isosceles with apex $A$ and apex angle $\angle A=110^\circ$. Find the slope angle $\angle B$ of the roof. Given that the rafter $AB=3$ m, find $AC$.

::hint
**What you need:** an isosceles triangle has equal base angles and equal legs.

**Steps:**
1. Find the sum of the two base angles.
2. Which sides are the legs of a triangle that is isosceles with apex $A$?

::solution
Since triangle $ABC$ is isosceles with apex $A$, $\angle B=\angle C$. We have $\angle B+\angle C=180^\circ-110^\circ=70^\circ$, so $\angle B=70^\circ\div2=35^\circ$.

Also, since the triangle is isosceles with apex $A$, $AC=AB=3$ m.

So the slope angle is $\angle B=35^\circ$ and $AC=3$ m.

**Answer.** $\angle B=35^\circ$; $AC=3$ m.
:::

:::exercise
Triangle $ABC$ is isosceles with apex $A$, $M$ is the midpoint of $BC$ and $D$ is a point of the segment $AM$ ($D\ne A$). Prove that $DB=DC$.

::hint
**What you need:** SSS, SAS; isosceles triangles.

**Steps:**
1. Prove $\angle BAM=\angle CAM$ using triangles $ABM$ and $ACM$.
2. Consider triangles $ABD$ and $ACD$.

::solution
Consider triangles $ABM$ and $ACM$: $AB=AC$ (given), $BM=CM$ (given) and $AM$ is a common side. So $\triangle ABM\equiv\triangle ACM$ (SSS), giving $\angle BAM=\angle CAM$, that is, $\angle BAD=\angle CAD$.

Consider triangles $ABD$ and $ACD$. We have:

- $AB=AC$ (given);
- $\angle BAD=\angle CAD$ (shown above);
- $AD$ is a common side.

Hence $\triangle ABD\equiv\triangle ACD$ (SAS). So $DB=DC$.

So $DB=DC$.

**Answer.** Proved.
:::

:::exercise
Triangle $ABC$ is isosceles with apex $A$. On the extension of $CB$ beyond $B$ take a point $D$, and on the extension of $BC$ beyond $C$ take a point $E$, with $BD=CE$. Prove that triangle $ADE$ is isosceles. (This revisits SAS.)

::hint
**What you need:** isosceles triangles; adjacent angles on a straight line; SAS.

**Steps:**
1. Find $\angle ABD$ and $\angle ACE$ by subtracting the base angles from $180^\circ$.
2. Consider triangles $ABD$ and $ACE$.

::solution
Since triangle $ABC$ is isosceles with apex $A$,
$$AB=AC\quad\text{and}\quad\angle ABC=\angle ACB.$$

Since $D$ lies on the extension of $CB$ beyond $B$, the angles $\angle ABD$ and $\angle ABC$ are adjacent on a straight line. Hence
$$\angle ABD=180^\circ-\angle ABC.$$

Since $E$ lies on the extension of $BC$ beyond $C$, the angles $\angle ACE$ and $\angle ACB$ are adjacent on a straight line. Hence
$$\angle ACE=180^\circ-\angle ACB.$$

As $\angle ABC=\angle ACB$, we get $\angle ABD=\angle ACE$.

Consider triangles $ABD$ and $ACE$. We have:

- $AB=AC$ (shown above);
- $\angle ABD=\angle ACE$ (shown above);
- $BD=CE$ (given).

Hence $\triangle ABD\equiv\triangle ACE$ (SAS).

So $AD=AE$ (corresponding sides), that is, triangle $ADE$ is isosceles with apex $A$.

So triangle $ADE$ is isosceles with apex $A$.

**Answer.** Proved.
:::

:::exercise
Triangle $ABC$ is acute and isosceles with apex $A$. Draw $BE\perp AC$ ($E$ on $AC$) and $CD\perp AB$ ($D$ on $AB$). Prove that $BE=CD$. (This revisits right-angled triangles.)

::hint
**What you need:** the property of an isosceles triangle; hypotenuse and acute angle.

**Steps:**
1. How are the base angles $\angle ABC$ and $\angle ACB$ related?
2. Consider the right-angled triangles $BDC$ and $CEB$, which share the hypotenuse $BC$.

::solution
Since triangle $ABC$ is isosceles with apex $A$, $\angle ABC=\angle ACB$, that is, $\angle DBC=\angle ECB$.

Consider triangle $BDC$, right-angled at $D$, and triangle $CEB$, right-angled at $E$. We have:

- $BC$ is a common hypotenuse;
- $\angle DBC=\angle ECB$ (shown above).

Hence $\triangle BDC\equiv\triangle CEB$ (AAS). So $CD=BE$ (corresponding legs).

So $BE=CD$.

**Answer.** Proved.
:::

:::exercise Challenge
Three villages $A$, $B$, $C$ are not in a line. A well $O$ is to be dug at the same distance from all three. The perpendicular bisector of $AB$ and the perpendicular bisector of $AC$ meet at $O$.

a) Prove that $OA=OB=OC$.

b) Prove that $O$ lies on the perpendicular bisector of $BC$.

c) Given $OA=120$ m, find $OB$ and $OC$.

::hint
**What you need:** the theorem, then the converse, about the perpendicular bisector.

**Steps:**
1. a) What follows from "$O$ lies on the perpendicular bisector of $AB$"? Do the same for $AC$.
2. b) From $OB=OC$ use the converse.

::solution
a) Since $O$ lies on the perpendicular bisector of $AB$, $OA=OB$ (the theorem). Since $O$ lies on the perpendicular bisector of $AC$, $OA=OC$ (the theorem). So $OA=OB=OC$.

b) Since $OB=OC$, $O$ is equidistant from the ends of $BC$, so $O$ lies on the perpendicular bisector of $BC$ (the converse).

c) Since $OA=OB=OC$ and $OA=120$ m, $OB=OC=120$ m.

So the well $O$ is equidistant from the three villages, $120$ m from each.

**Answer.** a) $OA=OB=OC$. b) $O$ lies on the perpendicular bisector of $BC$. c) $OB=OC=120$ m.
:::

## Mini test

:::quiz
::mc TH
Triangle $ABC$ is isosceles with apex $A$ and $\angle A=50^\circ$. The angle $B$ is
A. $65^\circ$.
B. $50^\circ$.
C. $130^\circ$.
D. $80^\circ$.
::key A
$\angle B=\angle C=(180^\circ-50^\circ)\div2=65^\circ$. B is the apex angle, C is the sum of the two base angles, and D comes from a wrong calculation.

::mc NB
The point $M$ is equidistant from the points $A$ and $B$. Which statement is correct?
A. $M$ is the midpoint of $AB$.
B. $M$ lies on the perpendicular bisector of $AB$.
C. $M$ lies on the line $AB$.
D. $MA\perp MB$.
::key B
This is the converse: a point equidistant from the ends lies on the perpendicular bisector. A and C describe special cases or are wrong; D is not true in general.

::mc TH
Triangle $ABC$ has $\angle B=\angle C$. Then
A. $AB=BC$.
B. $AC=BC$.
C. $AB=AC$.
D. triangle $ABC$ is equilateral.
::key C
The sides opposite the equal angles are $AC$ (opposite $\angle B$) and $AB$ (opposite $\angle C$), so $AB=AC$.

::mc NB
The perpendicular bisector of a segment $AB$ is the line that
A. passes through $A$.
B. is perpendicular to $AB$.
C. passes through the midpoint of $AB$.
D. is perpendicular to $AB$ at the midpoint of $AB$.
::key D
Both conditions are needed: perpendicular to $AB$ and through the midpoint of $AB$. B and C each give only one of them.

::tf NB TH TH TH
Triangle $ABC$ is isosceles with apex $A$, and $M$ is the midpoint of $BC$. Decide whether each statement is true or false.
a) $\angle B=\angle C$.
b) $AM\perp BC$.
c) $A$ is equidistant from $B$ and $C$.
d) $M$ is equidistant from $A$ and $B$.
::key T T T F
a) True: base angles. b) True: $\triangle ABM\equiv\triangle ACM$ gives $\angle AMB=\angle AMC=90^\circ$. c) True: $AB=AC$. d) False: $MB=\dfrac{BC}{2}$ while $MA$ is the height, and in general these lengths are not equal.

::sa TH
Triangle $ABC$ is isosceles with apex $A$ and $\angle B=72^\circ$. Find $\angle A$ (in degrees).
::key 36
$\angle C=\angle B=72^\circ$, so $\angle A=180^\circ-72^\circ-72^\circ=36^\circ$.

::sa NB
The point $M$ lies on the perpendicular bisector of the segment $AB$ and $MA=6.5$ cm. Find $MB$ (in cm).
::key 6.5
A point on the perpendicular bisector is equidistant from the ends, so $MB=MA=6.5$ cm.
:::
