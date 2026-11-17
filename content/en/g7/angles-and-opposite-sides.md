---
title: Angles and opposite sides in a triangle. The perpendicular and oblique lines from a point
description: Compare the angles and sides of a triangle, then see why the perpendicular is the shortest line to a line and compare oblique lines by their projections.
minutes: 25
---

:::goals
- Compare the sides of a triangle when its angles are known, and the other way round.
- Know that in a right-angled or obtuse triangle, the side opposite the right angle or obtuse angle is the longest.
- Recognise the perpendicular, oblique lines, projections, and the distance from a point to a line.
- Compare oblique lines by their projections and use this in real problems.
:::

Suppose a triangular plot $ABC$ is used as a playground and three friends stand at the three corners. A surveyor measures the angle at $A$ as $100^\circ$, the angle at $B$ as $50^\circ$ and the angle at $C$ as $30^\circ$. Which two friends are the furthest apart?

On the same playground, the friend at $A$ wants to run to a straight fence $d$ outside the plot as quickly as possible. Which way should they run? This lesson answers both questions, and the two answers are more closely connected than you might think.

## Angles and opposite sides in a triangle

Let us draw triangle $ABC$ with $\angle A=100^\circ$, $\angle B=50^\circ$, $\angle C=30^\circ$ and $BC=6$ cm. Measuring with a ruler, we get $AC\approx4.7$ cm and $AB\approx3$ cm.

:::diagram Triangle ABC with angles 100°, 50°, 30°
alt: Triangle ABC with angle A equal to 100 degrees, angle B equal to 50 degrees and angle C equal to 30 degrees
point A 1.96,2.33 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "100°"
angle A B C "50°"
angle A C B "30°"
:::

The side $BC$ opposite the largest angle ($100^\circ$) is the longest ($6$ cm). The side $AB$ opposite the smallest angle ($30^\circ$) is the shortest ($3$ cm). This is not just true of the triangle we drew.

:::theorem Angles and opposite sides
In any triangle:
- the angle opposite the longer side is the larger angle: if $AC>AB$ then $\angle B>\angle C$;
- the side opposite the larger angle is the longer side: if $\angle B>\angle C$ then $AC>AB$.

In short: the larger angle faces the longer side, and the smaller angle faces the shorter side.
:::

**Why?** We prove the two statements. For the first, suppose $AC>AB$; then there is a point $D$ on side $AC$ with $AD=AB$ (see the figure below).

:::diagram Take D on AC with AD = AB
alt: Triangle ABC with a point D on side AC such that AD equals AB, and B joined to D
point A 1.2,3.4 above-left
point B 0,0 below-left
point C 6,0 below-right
point D 4.14,1.32 above-right
polygon A B C
segment B D
mark A B 1
mark A D 1
:::

Triangle $ABD$ is isosceles at $A$, so $\angle ABD=\angle ADB$. The ray $BD$ lies between the rays $BA$ and $BC$, so $\angle ABC>\angle ABD$. Also $\angle ADB$ is an exterior angle of triangle $BDC$ at $D$, so $\angle ADB>\angle C$. Hence $\angle ABC>\angle ABD=\angle ADB>\angle C$, that is, $\angle B>\angle C$.

For the second statement, suppose $\angle B>\angle C$ but $AC$ is not longer than $AB$. If $AC=AB$ then triangle $ABC$ is isosceles at $A$, so $\angle B=\angle C$, contrary to what we assumed. If $AC<AB$ then by the first statement $\angle C>\angle B$, again contrary to what we assumed. So $AC>AB$.

:::diagram Triangle ABC with angle A = 75° and angle B = 60°
alt: Triangle ABC with angle A equal to 75 degrees and angle B equal to 60 degrees
point A 2.2,3.8 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "75°"
angle A B C "60°"
:::

:::example Comparing sides when two angles are known
Triangle $ABC$ has $\angle A=75^\circ$, $\angle B=60^\circ$ (figure above). Compare the three sides of the triangle.

**Solution.** First we find the remaining angle. In triangle $ABC$ the three angles add up to $180^\circ$, so $\angle C=180^\circ-75^\circ-60^\circ=45^\circ$.

We have $\angle A=75^\circ>\angle B=60^\circ>\angle C=45^\circ$. By the theorem on angles and opposite sides, the side opposite the larger angle is longer. The side opposite $\angle A$ is $BC$, opposite $\angle B$ is $AC$, opposite $\angle C$ is $AB$.

Hence $BC>AC>AB$.

So $BC>AC>AB$.
:::

:::diagram Triangle DEF with DE = 5 cm, DF = 6 cm, EF = 7 cm
alt: Triangle DEF with sides DE equal to 5 cm, DF equal to 6 cm and EF equal to 7 cm
point D 2.71,4.2 above
point E 0,0 below-left
point F 7,0 below-right
polygon D E F
label 0.86,2.3 "5 cm"
label 5.36,2.3 "6 cm"
label 3.5,-0.6 "7 cm"
:::

:::example Comparing angles when three sides are known
Triangle $DEF$ has $DE=5$ cm, $DF=6$ cm, $EF=7$ cm (figure above). Compare the three angles of the triangle.

**Solution.** We pair each angle with its opposite side. The angle $\angle D$ is opposite $EF$, the angle $\angle E$ is opposite $DF$, and the angle $\angle F$ is opposite $DE$.

In triangle $DEF$ we have $EF=7>DF=6>DE=5$. By the theorem on angles and opposite sides, the angle opposite the longer side is larger. Hence $\angle D>\angle E>\angle F$.

So $\angle D>\angle E>\angle F$.
:::

:::diagram Triangle ABC right-angled at A
alt: Triangle ABC with a right-angle mark at vertex A
point A 0,0 below-left
point B 0,3 above-left
point C 4,0 below-right
polygon A B C
right B A C
:::

:::example The hypotenuse is the longest side
Prove that in a right-angled triangle the hypotenuse is the longest side.

**Solution.** Take triangle $ABC$ right-angled at $A$ (figure above); the hypotenuse is $BC$. We must prove $BC>AB$ and $BC>AC$.

The three angles of a triangle add up to $180^\circ$ and $\angle A=90^\circ$, so $\angle B+\angle C=90^\circ$. Since each of $\angle B$ and $\angle C$ is positive, each is less than $90^\circ$.

So $\angle A=90^\circ>\angle B$ and $\angle A>\angle C$. By the theorem on angles and opposite sides, the side opposite $\angle A$, which is $BC$, is longer than the side opposite $\angle B$, which is $AC$, and longer than the side opposite $\angle C$, which is $AB$.

Hence $BC>AC$ and $BC>AB$: the hypotenuse is the longest side.
:::

:::note A useful consequence
In a triangle with a right angle or an obtuse angle, the other two angles are acute, so **the side opposite the right angle or the obtuse angle is the longest side**.
:::

:::diagram Triangle ABC where AD bisects angle A
alt: Triangle ABC with angle B equal to 70 degrees, angle C equal to 50 degrees, D on BC and AD splitting angle A into two angles of 30 degrees
point A 1.82,4.99 above
point B 0,0 below-left
point C 6.0,0 below-right
point D 2.69,0 below
polygon A B C
segment A D
angle A B C "70°"
angle A C B "50°"
angle B A D "30°"
angle D A C "30°"
:::

:::example Comparing three segments in one figure
Triangle $ABC$ has $\angle B=70^\circ$, $\angle C=50^\circ$. The bisector of angle $A$ meets $BC$ at $D$ (figure above). Compare $AD$, $AB$ and $AC$.

**Solution.** In triangle $ABC$ we have $\angle A=180^\circ-70^\circ-50^\circ=60^\circ$. Since $AD$ is the bisector, $\angle BAD=\angle DAC=60^\circ\div2=30^\circ$.

Comparing $AB$ and $AC$: in triangle $ABC$, $\angle C=50^\circ<\angle B=70^\circ$. The side opposite $\angle C$ is $AB$ and the side opposite $\angle B$ is $AC$, so $AB<AC$.

Comparing $AD$ and $AB$: in triangle $ABD$, $\angle ADB=180^\circ-70^\circ-30^\circ=80^\circ$. Then $\angle B=70^\circ<\angle ADB=80^\circ$. The side opposite $\angle B$ is $AD$ and the side opposite $\angle ADB$ is $AB$, so $AD<AB$.

So $AD<AB<AC$.
:::

## The perpendicular and oblique lines

Back to the friend at $A$ who wants to reach the fence $d$. There are infinitely many points on $d$ to run to, but which route is the shortest? First we need a few names.

:::diagram Perpendicular AH and oblique line AB from A to d
alt: A line d, a point A not on d, the segment AH perpendicular to d at H, and the segment AB joining A to a point B on d
point A 0,3 above
point H 0,0 below-left
point B 3,0 below-right
point P -2.5,0 left ""
point Q 4.5,0 right ""
segment P Q
segment A H
segment A B
right A H B
label 4.2,0.45 "d"
:::

:::definition Perpendicular, oblique line, projection
Let $d$ be a line and $A$ a point not on $d$. Draw $AH\perp d$ at $H$.
- The segment $AH$ is the **perpendicular** from $A$ to $d$; the point $H$ is the **projection** of $A$ on $d$.
- For a point $B$ on $d$ ($B\ne H$), the segment $AB$ is an **oblique line** from $A$ to $d$; the segment $HB$ is the **projection** of the oblique line $AB$ on $d$.
- The length $AH$ is called the **distance** from the point $A$ to the line $d$.
:::

:::theorem The perpendicular is the shortest line
Among the perpendicular and the oblique lines drawn from a point outside a line to that line, the perpendicular is the shortest.
:::

**Why?** Let $AH\perp d$ and $B\in d$, $B\ne H$, and look at triangle $AHB$ right-angled at $H$. The hypotenuse $AB$ is opposite the right angle $\angle H$, the largest angle of the triangle, so $AB$ is the longest side; that is, $AB>AH$.

:::theorem Oblique lines and projections
Let $AH\perp d$ at $H$, and let $B$ and $C$ be two points on $d$ other than $H$. Then:
- if $HB<HC$ then $AB<AC$;
- if $HB=HC$ then $AB=AC$;
- conversely, if $AB<AC$ then $HB<HC$.

In short: the oblique line with the longer projection is longer, and conversely.
:::

**Why?** We prove the first two statements; the last one is proved in the final example of this lesson.

*If $HB<HC$.* Case $B$ and $C$ on the same side of $H$: since $HB<HC$, the point $B$ lies between $H$ and $C$. In triangle $AHB$, right-angled at $H$, the angle $\angle ABH$ is acute, so $\angle ABC=180^\circ-\angle ABH>90^\circ$ (angles on a straight line). In triangle $ABC$ the obtuse angle $\angle B$ is the largest, so the opposite side $AC$ is longer than $AB$. Case $B$ and $C$ on opposite sides of $H$: take $B'$ on the ray $HC$ with $HB'=HB$. The right-angled triangles $AHB$ and $AHB'$ have $AH$ in common and $HB=HB'$, so they are congruent (SAS), giving $AB'=AB$. Since $HB'<HC$, the first case gives $AB'<AC$, hence $AB<AC$.

*If $HB=HC$.* The right-angled triangles $AHB$ and $AHC$ have $AH$ in common and $HB=HC$, so they are congruent (SAS), giving $AB=AC$.

:::diagram A boat at A and landing points B, C, D on the shore d
alt: A straight shore d, a point A away from the shore, AH perpendicular to the shore at H, and landing points B, C, D on the same side of H, 20 m, 40 m and 70 m from H
point A 0,3 above
point H 0,0 below-left
point B 2,0 below
point C 4,0 below
point D 7,0 below-right
point P -1.5,0 left ""
point Q 8,0 right ""
segment P Q
segment A H
segment A B
segment A C
segment A D
right A H B
label 7.8,0.5 "d"
:::

:::example Choosing a landing point for a boat
Suppose a boat is at a point $A$ on a lake and the shore is a straight line $d$. Draw $AH\perp d$ at $H$. Three landing points $B$, $C$, $D$ lie on the shore, on the same side of $H$, with $HB=20$ m, $HC=40$ m, $HD=70$ m (figure above). Arrange the distances $AH$, $AB$, $AC$, $AD$ from shortest to longest. Where should the boat land to travel the shortest distance?

**Solution.**

*Understand.* We have a point $A$ outside the line $d$, a perpendicular $AH$ and three oblique lines $AB$, $AC$, $AD$ with known projections. We must order the lengths and pick the shortest segment.

*Plan.* Compare the perpendicular with the oblique lines using "the perpendicular is the shortest line", and compare the oblique lines with each other using their projections.

*Solve.* Since $AH$ is the perpendicular and $AB$, $AC$, $AD$ are oblique lines, $AH<AB$, $AH<AC$, $AH<AD$. The oblique lines have projections $HB=20$ m $<HC=40$ m $<HD=70$ m, so by the theorem on oblique lines and projections, $AB<AC<AD$.

So $AH<AB<AC<AD$. The boat should land at $H$.

*Look back.* We never needed the length of $AH$ to order the distances. If we add a landing point $E$ on the other side of $H$, $40$ m from $H$, then $HE=HC$, so $AE=AC$: oblique lines with equal projections are equal in length.
:::

:::diagram Triangle ABC with altitude AH and AB < AC
alt: Triangle ABC with AH perpendicular to BC at H, H lying between B and C
point A 1.5,3.5 above
point B 0,0 below-left
point C 5,0 below-right
point H 1.5,0 below
polygon A B C
segment A H
right A H B
:::

:::example Proving a projection is smaller
Triangle $ABC$ has $AB<AC$. Draw $AH\perp BC$ at $H$ (figure above). Prove that $HB<HC$.

**Solution.** We assume the opposite and look for a contradiction. Suppose $HB$ is not less than $HC$, that is, $HB=HC$ or $HB>HC$.

If $HB=HC$, then by the theorem on oblique lines and projections $AB=AC$, contrary to the given $AB<AC$.

If $HB>HC$, then by the same theorem $AB>AC$ (the longer projection gives the longer oblique line), again contrary to the given $AB<AC$.

Both cases are impossible, so $HB<HC$.

So $HB<HC$.
:::

:::warning Common mistakes
- **Pairing a side with the wrong angle.** Wrong: $\angle A$ is the largest, so $AB$ is the longest side. Why it is wrong: $AB$ is not opposite the vertex $A$; it just passes through $A$. Right: the side opposite $\angle A$ is $BC$, so $BC$ is the longest.
- **Using the theorem across two different triangles.** Wrong: $AD$ is the bisector, so $\angle BAD=\angle DAC$, hence $DB=DC$. Why it is wrong: these two equal angles belong to two different triangles ($ABD$ and $ADC$), so we cannot conclude that the opposite sides are equal. Right: compare angles and sides only within one triangle.
- **Calling any joining segment "the distance".** Wrong: the distance from $A$ to $d$ is $AB$, where $B$ is any point of $d$. Why it is wrong: $AB$ is an oblique line and is usually longer than the perpendicular. Right: the distance from $A$ to $d$ is the length $AH$, where $AH\perp d$.
:::

**Connection.** The isosceles triangle, which you already know, is a special case of this lesson: two equal sides mean two equal opposite angles. Today's results will help us compare the three sides of a triangle in the next lesson.

## Key terms

:::terms
- opposite angle | góc đối diện
- opposite side | cạnh đối diện
- hypotenuse | cạnh huyền
- obtuse angle | góc tù
- exterior angle | góc ngoài
- perpendicular | đường vuông góc
- oblique line | đường xiên
- orthogonal projection | hình chiếu
- distance from a point to a line | khoảng cách từ điểm đến đường thẳng
:::

## Summary

- In a triangle, the angle opposite the longer side is larger, and the side opposite the larger angle is longer.
- The hypotenuse of a right-angled triangle, and the side opposite an obtuse angle, is the longest side of the triangle.
- Among the segments from a point outside a line to that line, the perpendicular is the shortest; its length is the distance from the point to the line.
- For oblique lines: a longer projection gives a longer oblique line; equal projections give equal oblique lines.
- Compare angles and sides only within one triangle.

## Practice

Each exercise gives what you need and hints for the steps. Try it yourself first, then open the solution.

:::diagram Triangle ABC with angle A = 65° and angle B = 55°
alt: Triangle ABC with angle A equal to 65 degrees and angle B equal to 55 degrees
point A 3.29,4.7 above
point B 0,0 below-left
point C 6.0,0 below-right
polygon A B C
angle B A C "65°"
angle A B C "55°"
:::

:::exercise
Triangle $ABC$ has $\angle A=65^\circ$, $\angle B=55^\circ$ (figure above). Find $\angle C$ and arrange the three sides of the triangle in increasing order.

::hint
**What you need:** the three angles add up to $180^\circ$; the side opposite the larger angle is longer.

**Steps:**
1. Work out $\angle C=180^\circ-65^\circ-55^\circ$.
2. Order the three angles $65^\circ$, $55^\circ$ and $\angle C$.
3. Pair each angle with its opposite side: $\angle A$ with $BC$, $\angle B$ with $AC$, $\angle C$ with $AB$.

::solution
In triangle $ABC$ the three angles add up to $180^\circ$, so $\angle C=180^\circ-65^\circ-55^\circ=60^\circ$.

We have $\angle B=55^\circ<\angle C=60^\circ<\angle A=65^\circ$. The side opposite $\angle B$ is $AC$, opposite $\angle C$ is $AB$, opposite $\angle A$ is $BC$. By the theorem on angles and opposite sides, $AC<AB<BC$.

**Answer.** $\angle C=60^\circ$; $AC<AB<BC$.
:::

:::diagram Triangle ABC with AB = 9 cm, BC = 6 cm, CA = 7 cm
alt: Triangle ABC with sides AB equal to 9 cm, BC equal to 6 cm and CA equal to 7 cm
point A 5.67,6.99 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
label 1.93,3.6 "9 cm"
label 6.73,3.6 "7 cm"
label 3,-0.6 "6 cm"
:::

:::exercise
Triangle $ABC$ has $AB=9$ cm, $BC=6$ cm, $CA=7$ cm (figure above). Arrange the three angles of the triangle in increasing order.

::hint
**What you need:** the angle opposite the longer side is larger.

**Steps:**
1. Find the angle opposite each side: $AB$ is opposite $\angle C$, $BC$ is opposite $\angle A$, $CA$ is opposite $\angle B$.
2. Order the three sides $9$, $6$, $7$ and then pass to the angles.

::solution
The angle opposite $AB$ is $\angle C$, opposite $BC$ is $\angle A$, opposite $CA$ is $\angle B$.

In triangle $ABC$ we have $BC=6<CA=7<AB=9$. By the theorem on angles and opposite sides, the angle opposite the longer side is larger, so $\angle A<\angle B<\angle C$.

**Answer.** $\angle A<\angle B<\angle C$.
:::

:::diagram Triangle MNP with angle M = 105° and angle N = 40°
alt: Triangle MNP with angle M equal to 105 degrees and angle N equal to 40 degrees
point M 2.73,2.29 above
point N 0,0 below-left
point P 6.0,0 below-right
polygon M N P
angle N M P "105°"
angle M N P "40°"
:::

:::exercise
Triangle $MNP$ has $\angle M=105^\circ$, $\angle N=40^\circ$ (figure above). Which side is the longest? Arrange the three sides in increasing order.

::hint
**What you need:** the side opposite an obtuse angle is the longest; the side opposite the larger angle is longer.

**Steps:**
1. Work out $\angle P$.
2. The side opposite $\angle M$ is $NP$, opposite $\angle N$ is $MP$, opposite $\angle P$ is $MN$.
3. Compare $\angle N$ and $\angle P$.

::solution
In triangle $MNP$ we have $\angle P=180^\circ-105^\circ-40^\circ=35^\circ$.

So $\angle P=35^\circ<\angle N=40^\circ<\angle M=105^\circ$. The side opposite $\angle P$ is $MN$, opposite $\angle N$ is $MP$, opposite $\angle M$ is $NP$. By the theorem on angles and opposite sides, $MN<MP<NP$.

So the longest side is $NP$ (opposite the obtuse angle $\angle M$).

**Answer.** $NP$ is the longest; $MN<MP<NP$.
:::

:::exercise
Triangle $ABC$ has $\angle B>90^\circ$. Prove that $AC$ is the longest side of the triangle.

::hint
**What you need:** the three angles add up to $180^\circ$; the side opposite the larger angle is longer.

**Steps:**
1. From $\angle B>90^\circ$, deduce that $\angle A+\angle C<90^\circ$.
2. Then compare $\angle A$ and $\angle C$ with $\angle B$.
3. The side opposite $\angle B$ is $AC$.

::solution
In triangle $ABC$ we have $\angle A+\angle B+\angle C=180^\circ$ and $\angle B>90^\circ$, so $\angle A+\angle C<90^\circ$. Hence $\angle A<90^\circ<\angle B$ and $\angle C<90^\circ<\angle B$.

So $\angle B$ is the largest angle. By the theorem on angles and opposite sides, the side opposite $\angle B$, which is $AC$, is longer than the side opposite $\angle A$, which is $BC$, and longer than the side opposite $\angle C$, which is $AB$.

Hence $AC$ is the longest side.

**Answer.** $AC>BC$ and $AC>AB$.
:::

:::exercise
Suppose three friends Lan, Mai and Hà stand at three points $L$, $M$, $H$ on a playground, forming triangle $LMH$. A surveyor finds $\angle L=50^\circ$, $\angle M=75^\circ$, $\angle H=55^\circ$. Which two friends stand furthest apart? Which two stand closest together?

::hint
**What you need:** the distance between two friends is the length of the side joining their corners; the side opposite the largest angle is the longest.

**Steps:**
1. Find the largest and the smallest of the three angles.
2. The side opposite $\angle M$ is $LH$, and the side opposite $\angle L$ is $MH$.
3. Which friends does each side join?

::solution
In triangle $LMH$ we have $50^\circ+75^\circ+55^\circ=180^\circ$. We see that $\angle L=50^\circ<\angle H=55^\circ<\angle M=75^\circ$.

By the theorem on angles and opposite sides, the side opposite $\angle M$, which is $LH$, is the longest, and the side opposite $\angle L$, which is $MH$, is the shortest.

So Lan and Hà stand furthest apart, and Mai and Hà stand closest together.

**Answer.** Furthest apart: Lan and Hà; closest: Mai and Hà.
:::

:::diagram Perpendicular AH and oblique lines AB, AC, AD
alt: A line d, a point A away from d, AH perpendicular to d at H, points B and C on opposite sides of H and D on the same side as C
point A 0,4 above
point H 0,0 below
point B -3,0 below-left
point C 5,0 below-right
point D 2,0 below
point P -4,0 left ""
point Q 6.2,0 right ""
segment P Q
segment A H
segment A B
segment A C
segment A D
right A H D
label 6.2,0.5 "d"
:::

:::exercise
Let $AH\perp d$ at $H$ (figure above). The points $B$, $C$, $D$ lie on $d$ with $HB=3$ cm, $HC=5$ cm, $HD=2$ cm; $B$ and $C$ are on opposite sides of $H$, and $D$ is on the same side as $C$. Arrange $AH$, $AB$, $AC$, $AD$ in increasing order.

::hint
**What you need:** the perpendicular is shorter than every oblique line; an oblique line with a longer projection is longer (even when the two points are on opposite sides of $H$).

**Steps:**
1. Identify $AH$ as the perpendicular.
2. Order the projections $HB=3$, $HC=5$, $HD=2$.
3. Turn the order of the projections into the order of the oblique lines.

::solution
Since $AH$ is the perpendicular, $AH$ is shorter than every oblique line $AB$, $AC$, $AD$.

The projections satisfy $HD=2$ cm $<HB=3$ cm $<HC=5$ cm. By the theorem on oblique lines and projections (valid even when the two points are on opposite sides of $H$), $AD<AB<AC$.

So $AH<AD<AB<AC$.

**Answer.** $AH<AD<AB<AC$.
:::

:::exercise
A house at $A$ stands near a straight canal $d$: $AH\perp d$ at $H$ and $AH=15$ m.

a) A water pipe is to join $A$ to the canal using the shortest possible pipe. How long is it, and where does it meet the canal?

b) Someone says a straight pipe $14$ m long could join $A$ to some point $B$ on the canal. Is that possible? Why?

::hint
**What you need:** the perpendicular is the shortest of all the segments joining $A$ to points of $d$.

**Steps:**
1. In a), the shortest pipe is the perpendicular itself.
2. In b), if $B\ne H$ then $AB$ is an oblique line; compare $AB$ with $AH$.

::solution
a) Of all the segments joining $A$ to points of the canal, the perpendicular is the shortest. So the shortest pipe is $AH$, which is $15$ m long, meeting the canal at $H$.

b) If $B\ne H$ then $AB$ is an oblique line, so $AB>AH=15$ m. If $B=H$ then the pipe is $15$ m long. In both cases the pipe is at least $15$ m, so no pipe is $14$ m long.

So that is impossible.

**Answer.** a) $15$ m, meeting the canal at $H$. b) Not possible.
:::

:::diagram Isosceles triangle ABC at A with M on side BC
alt: Triangle ABC isosceles at A, with a point M on side BC and A joined to M
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point M 4.2,0 below
polygon A B C
segment A M
mark A B 1
mark A C 1
:::

:::exercise
Triangle $ABC$ is isosceles at $A$, and $M$ is a point of side $BC$ ($M$ different from $B$ and $C$), as in the figure above. Prove that $AM<AB$.

::hint
**What you need:** in a triangle isosceles at $A$, the altitude $AH$ meets $BC$ at its midpoint $H$ (the right-angled triangles $AHB$ and $AHC$ are congruent); compare oblique lines by their projections.

**Steps:**
1. Draw $AH\perp BC$ at $H$ and show that $HB=HC$.
2. Consider $M$ on the segment $HB$ or on the segment $HC$ (or equal to $H$), and compare $HM$ with $HB$.
3. Use the theorem on oblique lines and projections.

::solution
Draw $AH\perp BC$ at $H$. The right-angled triangles $AHB$ and $AHC$ have $AB=AC$ and $\angle B=\angle C$ (triangle isosceles at $A$), so they are congruent (hypotenuse and acute angle), giving $HB=HC$.

If $M\equiv H$ then $AM=AH<AB$, since the perpendicular is shorter than an oblique line.

If $M\ne H$: the point $M$ lies on segment $BC$ and differs from $B$ and $C$, so it lies between $H$ and $B$ or between $H$ and $C$. In the first case $HM<HB$. In the second case $HM<HC=HB$. Both give $HM<HB$.

Since $HM<HB$, the theorem on oblique lines and projections gives $AM<AB$.

So $AM<AB$.

**Answer.** $AM<AB$ is proved.
:::

:::diagram Triangle ABC right-angled at A and a point D on AC
alt: Triangle ABC right-angled at A, with a point D between A and C and B joined to D
point A 0,0 below-left
point B 0,3 above-left
point C 5,0 below-right
point D 2.4,0 below
polygon A B C
segment B D
right B A C
:::

:::exercise Challenge
Triangle $ABC$ is right-angled at $A$, and $D$ lies between $A$ and $C$ (figure above). Prove that $AB<BD<BC$.

::hint
**What you need:** treat $B$ as a point outside the line $AC$; since $BA\perp AC$, $BA$ is the perpendicular from $B$ to $AC$, while $BD$ and $BC$ are oblique lines.

**Steps:**
1. Use "the perpendicular is the shortest line" to compare $AB$ with $BD$.
2. Compare the projections $AD$ and $AC$ to compare $BD$ with $BC$.

::solution
Since $\angle A=90^\circ$, we have $BA\perp AC$, so $BA$ is the perpendicular from $B$ to the line $AC$, and $BD$, $BC$ are oblique lines whose projections are $AD$ and $AC$.

Since $BD$ is an oblique line, $BD>BA$, that is, $AB<BD$.

Since $D$ lies between $A$ and $C$, we have $AD<AC$. The oblique lines $BD$ and $BC$ have projections $AD<AC$, so by the theorem on oblique lines and projections, $BD<BC$.

So $AB<BD<BC$.

**Answer.** $AB<BD<BC$ is proved.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has $\angle A=50^\circ$, $\angle B=70^\circ$, $\angle C=60^\circ$. The longest side of the triangle is
A. All three sides are equal.
B. $BC$.
C. $AB$.
D. $AC$.
::key D
The largest angle is $\angle B=70^\circ$, and the side opposite it is $AC$. $BC$ is opposite the smallest angle $\angle A$, and $AB$ is opposite $\angle C$.

::mc
Triangle $DEF$ has $DE=4$ cm, $EF=6$ cm, $DF=5$ cm. The smallest angle of the triangle is
A. $\angle F$.
B. $\angle E$.
C. $\angle D$.
D. All three angles are equal.
::key A
The shortest side is $DE=4$ cm, opposite $\angle F$. $\angle D$ is opposite the longest side $EF$, and $\angle E$ is opposite $DF$.

::mc
From a point $A$ outside a line $d$, draw $AH\perp d$ and the oblique lines $AB$, $AC$ with $B$, $C$ on $d$, on the same side of $H$, $HB=3$ cm, $HC=5$ cm. The correct statement is
A. $AH>AC$.
B. $AH<AB<AC$.
C. $AB=AC$.
D. $AB>AC$.
::key B
$AH$ is the perpendicular so it is the shortest, and $HB<HC$ gives $AB<AC$. A and D point the wrong way, and C is wrong because the projections differ.

::mc
Triangle $ABC$ is right-angled at $A$. Which statement is correct?
A. $AB$ is the longest side.
B. $AC$ is the longest side.
C. $BC$ is the longest side.
D. All three sides are equal.
::key C
The hypotenuse $BC$ is opposite the right angle, the largest angle, so $BC$ is the longest side. A and B are the two shorter sides.

::tf
Triangle $MNP$ has $\angle M=100^\circ$, $\angle N=50^\circ$, $\angle P=30^\circ$. Decide whether each statement is true or false.
a) $NP$ is the longest side.
b) $MP<MN$.
c) $\angle P$ is the largest angle.
d) $MN$ is the shortest side.
::key T F F T
a) True: $NP$ is opposite the largest angle $\angle M=100^\circ$. b) False: $MP$ is opposite $\angle N=50^\circ$, larger than $\angle P=30^\circ$ opposite $MN$, so $MP>MN$. c) False: $\angle P=30^\circ$ is the smallest angle. d) True: $MN$ is opposite the smallest angle.

::sa
Triangle $ABC$ has $\angle B=65^\circ$, $\angle C=40^\circ$. What is the size, in degrees, of the largest angle of the triangle?
::key 75
$\angle A=180^\circ-65^\circ-40^\circ=75^\circ$, which is larger than $65^\circ$ and $40^\circ$.

::sa
A house at $A$ is $15$ m from a straight canal $d$ (the distance from $A$ to $d$). How many metres long is the shortest pipe joining $A$ to the canal?
::key 15
The shortest pipe is the perpendicular from $A$ to $d$, whose length is the distance, $15$ m.
:::
