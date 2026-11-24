---
title: Congruence conditions for right-angled triangles
description: Use the four congruence conditions for right-angled triangles (LL, LA, HA and HL) and see why the hypotenuse–leg case works.
minutes: 30
---

:::goals
- Name the hypotenuse, the legs and the acute angles of a right-angled triangle, and match them with the corresponding parts of another triangle.
- State the four congruence conditions for right-angled triangles: LL, LA, HA and the new one, HL (hypotenuse–leg).
- Write a proof that two right-angled triangles are congruent, remembering to say "right-angled at …".
- Apply the conditions to real situations such as guy wires and ladders.
:::

A television aerial $OT$ stands $4$ m high, perfectly upright on level ground. Two guy wires $TA$ and $TB$, each $5$ m long, run from the top $T$ to two points $A$ and $B$ on the ground. You measure $OA=3$ m. Without picking up the tape again, can you say what $OB$ is? And why can you be certain?

So far we have needed three equal parts to show that two triangles are congruent. A right-angled triangle already has one angle we know for free, the $90^\circ$, so two more parts should be enough. This lesson collects the short conditions that come from that idea.

## From the conditions we already know

In a right-angled triangle, the side opposite the right angle is the **hypotenuse**; the other two sides are the **legs**. The two acute angles add up to $90^\circ$, because the three angles of a triangle add up to $180^\circ$.

Take triangle $ABC$ right-angled at $A$ and triangle $DEF$ right-angled at $D$. Three conditions follow directly from SAS and ASA:

- **LL (leg–leg).** If $AB=DE$ and $AC=DF$, then the right angle $\angle A=\angle D$ lies between the equal sides, so the triangles are congruent (SAS).
- **LA (leg–acute angle).** If $AB=DE$ and $\angle B=\angle E$, then $AB$ lies between the right angle and the acute angle $B$. We have one equal side and the two angles next to it, so the triangles are congruent (ASA).
- **HA (hypotenuse–acute angle).** If $BC=EF$ and $\angle B=\angle E$, the other acute angles are equal too: $\angle C=90^\circ-\angle B=90^\circ-\angle E=\angle F$. The hypotenuse $BC$ lies between $\angle B$ and $\angle C$, and $EF$ lies between $\angle E$ and $\angle F$, so the triangles are congruent (ASA).

## The hypotenuse–leg condition

One situation is left: we know the hypotenuse and one leg. Try to construct triangle $ABC$ with $AB=3$ cm, $BC=5$ cm and the right angle at $A$. Draw $AB=3$ cm, draw the ray $Ax$ perpendicular to $AB$ at $A$, then draw an arc with centre $B$ and radius $5$ cm to meet $Ax$ at $C$. The arc meets the line $Ax$ in only two points, one on each side of $AB$, and these are mirror images in $AB$. So everyone who draws it gets the same triangle (you may have to turn your paper over). This is the reason behind the last condition.

:::theorem Congruence conditions for right-angled triangles
Two right-angled triangles are congruent if they have:

- two legs equal (LL, which is SAS);
- one leg and an acute angle adjacent to it equal (LA, which is ASA);
- the hypotenuse and an acute angle equal (HA);
- the hypotenuse and one leg equal (HL).
:::

:::diagram The hypotenuse–leg condition
alt: Two right-angled triangles ABC (right angle at A) and DEF (right angle at D) with hypotenuse BC equal to EF (one tick) and leg AC equal to DF (two ticks)
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 14,0 below-right
point E 11,0 below-left
point F 14,4 above
polygon A B C
polygon D E F
right B A C
right E D F
mark B C 1
mark A C 2
mark E F 1
mark D F 2
:::

We accept the fourth condition without proof, and you will use it very often. The point to remember is that hypotenuse is matched with hypotenuse, and leg with leg.

:::diagram The two triangles of example 1
alt: Two right-angled triangles ABC and DEF with AB equal to DE and AC equal to DF
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 6,0 below-left
point E 9,0 below-right
point F 6,4 above
polygon A B C
polygon D E F
right B A C
right E D F
mark A B 1
mark A C 2
mark D E 1
mark D F 2
:::

:::example Two legs equal
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $AB=DE=3$ cm and $AC=DF=4$ cm. Prove that $\triangle ABC\equiv\triangle DEF$, and deduce that $BC=EF$.

**Solution.** Consider triangles $ABC$ and $DEF$. We have:

- $AB=DE$ ($=3$ cm) (given);
- $\angle BAC=\angle EDF$ ($=90^\circ$) (given);
- $AC=DF$ ($=4$ cm) (given).

Hence $\triangle ABC\equiv\triangle DEF$ (LL).

So $BC=EF$ (corresponding hypotenuses).
:::

:::diagram The two triangles of example 2
alt: Two right-angled triangles ABC and DEF with AB equal to DE and angle B equal to angle E
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above
point D 7,0 below-left
point E 11,0 below-right
point F 7,3 above
polygon A B C
polygon D E F
right B A C
right E D F
mark A B 1
mark D E 1
angle A B C "β"
angle D E F "β"
:::

:::example Leg and adjacent acute angle
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $AB=DE$ and $\angle B=\angle E$. Prove that $\triangle ABC\equiv\triangle DEF$, and deduce that $AC=DF$ and $BC=EF$.

**Solution.** Consider triangles $ABC$ and $DEF$. We have:

- $\angle BAC=\angle EDF$ ($=90^\circ$) (given);
- $AB=DE$ (given);
- $\angle B=\angle E$ (given).

The side $AB$ lies between $\angle A$ and $\angle B$, and the side $DE$ lies between $\angle D$ and $\angle E$. Hence $\triangle ABC\equiv\triangle DEF$ (LA).

So $AC=DF$ and $BC=EF$ (corresponding sides).
:::

:::diagram A point on an angle bisector
alt: An angle xOy with bisector OM, MA perpendicular to Ox at A, MB perpendicular to Oy at B, and angles AOM and MOB equal
point O 0,0 below-left
point A 4.33,0 below-right
point B 2.165,3.75 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
right O A M
right O B M
angle A O M "α"
angle M O B "α"
:::

:::example Hypotenuse and acute angle
The point $M$ lies on the bisector $Oz$ of the angle $xOy$. Draw $MA\perp Ox$ at $A$ and $MB\perp Oy$ at $B$. Prove that $MA=MB$.

**Solution.** Consider triangle $OAM$, right-angled at $A$, and triangle $OBM$, right-angled at $B$. We have:

- $OM$ is a common hypotenuse;
- $\angle AOM=\angle BOM$ (because $Oz$ bisects the angle $xOy$).

The two right-angled triangles have equal hypotenuses and an equal acute angle, so $\triangle OAM\equiv\triangle OBM$ (HA).

So $MA=MB$ (corresponding sides).

**Remark.** This says that every point on the bisector of an angle is the same distance from both arms of the angle.
:::

:::diagram A point equidistant from the arms of an angle
alt: An angle xOy and a point M inside it with MA perpendicular to Ox, MB perpendicular to Oy and MA equal to MB
point O 0,0 below-left
point A 4.33,0 below-right
point B 2.165,3.75 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
right O A M
right O B M
mark M A 1
mark M B 1
:::

:::example Hypotenuse and leg
The point $M$ lies inside the angle $xOy$. Draw $MA\perp Ox$ at $A$ and $MB\perp Oy$ at $B$ so that $MA=MB$. Prove that $OM$ is the bisector of the angle $xOy$.

**Solution.** Consider triangle $OAM$, right-angled at $A$, and triangle $OBM$, right-angled at $B$. We have:

- $OM$ is a common hypotenuse;
- $MA=MB$ (given), and these are legs.

Hence $\triangle OAM\equiv\triangle OBM$ (HL). So $\angle AOM=\angle BOM$ (corresponding angles).

Since $M$ lies inside the angle $xOy$, the ray $OM$ lies between $Ox$ and $Oy$. So $OM$ is the bisector of the angle $xOy$.
:::

Now we can answer the question about the aerial, this time with all four steps.

:::diagram The aerial and its two guy wires
alt: A vertical mast OT standing on the ground line AB, with two guy wires TA and TB of equal length
point O 0,0 below
point T 0,4 above
point A -3,0 below-left
point B 3,0 below-right
segment O T
segment T A
segment T B
segment A B
right A O T
mark T A 1
mark T B 1
label -1.5,-0.5 "3 m"
label -0.5,2 "4 m"
:::

:::example The two guy wires of an aerial
An aerial $OT$ is $4$ m high and stands upright on level ground. Two guy wires $TA$ and $TB$, each $5$ m long, run to points $A$ and $B$ on the ground, and $OA=3$ m. Prove that $OB=3$ m.

**Solution.**

*Understand.* We know $TA=TB=5$ m, and $OT$ is perpendicular to the ground. We must show that $OB=OA$.

*Plan.* $OA$ and $OB$ are legs of the right-angled triangles $OAT$ and $OBT$ (right angle at $O$). These triangles have equal hypotenuses ($TA=TB$) and share the leg $OT$, so we use HL.

*Solve.* Consider triangle $OAT$, right-angled at $O$, and triangle $OBT$, right-angled at $O$. We have:

- $TA=TB$ ($=5$ m), the two hypotenuses (given);
- $OT$ is a common leg.

Hence $\triangle OAT\equiv\triangle OBT$ (HL). So $OB=OA=3$ m, and the two wires slope at the same angle to the ground: $\angle TAO=\angle TBO$.

So $OB=3$ m.

*Look back.* The mast being upright is what gives the right angle at $O$. If it leaned, there would be no right-angled triangles and the result would fail. And if the wires were different lengths, say $TA=5$ m and $TB=6$ m, would $OB$ still equal $OA$?
:::

:::warning Common mistakes
- **Forgetting to say the triangles are right-angled.** Wrong: "In $\triangle OAM$ and $\triangle OBM$, $OM$ is common and $MA=MB$, so they are congruent." Why it is wrong: two equal sides are not enough on their own; we need the right angle to use HL. Right: write "triangle $OAM$ right-angled at $A$ and triangle $OBM$ right-angled at $B$", and only then list the equal sides.
- **Matching a hypotenuse with a leg.** Wrong: "$BC=MN$, so the triangles are congruent", where $BC$ is a hypotenuse and $MN$ is a leg. Why it is wrong: the hypotenuse of one triangle must equal the hypotenuse of the other. Right: match hypotenuse with hypotenuse and leg with leg.
- **Using only the two acute angles.** Wrong: "Both right-angled triangles have acute angles $30^\circ$ and $60^\circ$, so they are congruent." Why it is wrong: a triangle with hypotenuse $4$ cm and one with hypotenuse $6$ cm can both have angles $30^\circ$ and $60^\circ$, yet one is bigger. Right: we also need one pair of equal sides.
:::

**Connections.** There is little in this lesson that is completely new: the first three conditions come straight from SAS and ASA, and only HL is accepted without proof. In the next lesson we use congruent triangles to study isosceles triangles and perpendicular bisectors.

## Key terms

:::terms
- right-angled triangle | tam giác vuông
- hypotenuse | cạnh huyền
- leg | cạnh góc vuông
- acute angle | góc nhọn
- LL condition (leg–leg) | trường hợp hai cạnh góc vuông
- LA condition (leg–acute angle) | trường hợp cạnh góc vuông – góc nhọn kề
- HA condition (hypotenuse–acute angle) | trường hợp cạnh huyền – góc nhọn
- HL condition (hypotenuse–leg) | trường hợp cạnh huyền – cạnh góc vuông
- accepted without proof | thừa nhận
- equidistant | cách đều
- angle bisector | tia phân giác
- perpendicular | vuông góc
:::

## Summary

- A right-angled triangle has a hypotenuse (opposite the right angle) and two legs; its two acute angles add up to $90^\circ$.
- Two right-angled triangles are congruent if they have two legs equal, or a leg and an adjacent acute angle equal, or the hypotenuse and an acute angle equal, or the hypotenuse and a leg equal.
- In a proof, always write "triangle … right-angled at …" before you use a condition.
- Two equal acute angles are not enough to make right-angled triangles congruent.
- A point on the bisector of an angle is equidistant from the arms of the angle, and the converse is also true.

So the person measuring the aerial can relax: $OB=3$ m, without measuring it.

## Practice

Each exercise has what you need and hints for the steps. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ is right-angled at $A$ and triangle $MNP$ is right-angled at $M$, with $AB=MN=6$ cm and $AC=MP=8$ cm.

a) Prove that $\triangle ABC\equiv\triangle MNP$.

b) Given that $BC=10$ cm, find $NP$.

::hint
**What you need:** two equal legs make two right-angled triangles congruent; corresponding hypotenuses are equal.

**Steps:**
1. Identify the two legs of each triangle.
2. Which side of triangle $ABC$ corresponds to $NP$?

::solution
a) Consider triangles $ABC$ and $MNP$. We have:

- $AB=MN$ ($=6$ cm) (given);
- $\angle BAC=\angle NMP$ ($=90^\circ$) (given);
- $AC=MP$ ($=8$ cm) (given).

Hence $\triangle ABC\equiv\triangle MNP$ (LL).

b) So $NP=BC=10$ cm (corresponding hypotenuses).

So $\triangle ABC\equiv\triangle MNP$ and $NP=10$ cm.

**Answer.** $NP=10$ cm.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $AC=DF=5$ cm and $\angle C=\angle F=35^\circ$. Prove that $\triangle ABC\equiv\triangle DEF$ and find $\angle E$.

::hint
**What you need:** a leg and an adjacent acute angle equal make two right-angled triangles congruent; the acute angles of a right-angled triangle add up to $90^\circ$.

**Steps:**
1. Which angle of triangle $ABC$ is adjacent to the leg $AC$?
2. The angle $E$ corresponds to $B$, so find $\angle B$.

::solution
Consider triangles $ABC$ and $DEF$. We have:

- $\angle BAC=\angle EDF$ ($=90^\circ$) (given);
- $AC=DF$ ($=5$ cm) (given);
- $\angle C=\angle F$ ($=35^\circ$) (given).

Hence $\triangle ABC\equiv\triangle DEF$ (LA).

So $\angle E=\angle B$ (corresponding angles). In triangle $ABC$, right-angled at $A$, we have $\angle B=90^\circ-\angle C=90^\circ-35^\circ=55^\circ$. So $\angle E=55^\circ$.

**Answer.** $\angle E=55^\circ$.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ and triangle $MNP$ is right-angled at $M$. For each condition below, say whether the triangles are congruent, by which condition, and write the congruence with the vertices in the correct order.

a) $AB=MN$ and $\angle B=\angle N$.

b) $BC=NP$ and $\angle C=\angle P$.

c) $\angle B=\angle N$ and $\angle C=\angle P$.

d) $BC=NP$ and $AC=MN$.

::hint
**What you need:** the four conditions for right-angled triangles; corresponding vertices come from the equal sides or angles.

**Steps:**
1. For each condition, decide whether each side is a hypotenuse or a leg.
2. In part d), $AC=MN$ tells you that $C$ corresponds to $N$.

::solution
The triangles $ABC$ (right-angled at $A$) and $MNP$ (right-angled at $M$) already have one pair of equal right angles: $\angle A=\angle M=90^\circ$. We examine each condition.

a) $AB$ and $MN$ are legs adjacent to the acute angles $\angle B$ and $\angle N$. We have $AB=MN$ and $\angle B=\angle N$. By the leg–acute angle condition (LA), the triangles are congruent. The corresponding vertices are $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, so $\triangle ABC\equiv\triangle MNP$.

b) $BC$ and $NP$ are the hypotenuses and $\angle C=\angle P$ are corresponding acute angles. By the hypotenuse–acute angle condition (HA), the triangles are congruent. The corresponding vertices are $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, so $\triangle ABC\equiv\triangle MNP$.

c) Only two pairs of acute angles are equal and no pair of sides is known to be equal. Right-angled triangles with the same angles can have different sizes, so this is not enough to conclude that the triangles are congruent.

d) $BC$ and $NP$ are the hypotenuses and $AC$ and $MN$ are legs. By the hypotenuse–leg condition (HL), the triangles are congruent. Since $AC=MN$, the vertex $C$ corresponds to $N$; since $A$ corresponds to $M$, the vertex $B$ corresponds to $P$. Hence $\triangle ABC\equiv\triangle MPN$.

So in a) and b) the triangles are congruent with $\triangle ABC\equiv\triangle MNP$; in c) the condition is not enough; in d) the triangles are congruent with $\triangle ABC\equiv\triangle MPN$.

**Answer.** a) LA, $\triangle ABC\equiv\triangle MNP$. b) HA, $\triangle ABC\equiv\triangle MNP$. c) Not enough. d) HL, $\triangle ABC\equiv\triangle MPN$.
:::

:::exercise
The point $M$ lies inside the angle $xOy$. Draw $MA\perp Ox$ at $A$ and $MB\perp Oy$ at $B$ so that $MA=MB$. Prove that $OA=OB$.

::hint
**What you need:** HL.

**Steps:**
1. Look at the right-angled triangles $OAM$ and $OBM$.
2. Which side is the common hypotenuse?

::solution
Consider triangle $OAM$, right-angled at $A$, and triangle $OBM$, right-angled at $B$. We have:

- $OM$ is a common hypotenuse;
- $MA=MB$ (given).

Hence $\triangle OAM\equiv\triangle OBM$ (HL). So $OA=OB$ (corresponding sides).

So $OA=OB$.

**Answer.** Proved.
:::

:::exercise
Two ladders, each $4$ m long, lean against two vertical walls on level ground. The foot of each ladder is $1.5$ m from its wall. Prove that the two ladders reach the same height up their walls and slope at the same angle to the ground.

::hint
**What you need:** HL; a vertical wall makes a right angle with the ground.

**Steps:**
1. Let $H$, $A$, $T$ be the foot of the wall, the foot of the ladder and the top of the ladder for the first ladder, and name the second ladder's points in the same way.
2. The ladder is the hypotenuse; the distance from the foot of the ladder to the wall is a leg.

::solution
Let $H$, $A$ and $T$ be the foot of the wall, the foot of the ladder and the top of the ladder for the first ladder, and $H'$, $A'$, $T'$ the corresponding points for the second. Triangle $HAT$ is right-angled at $H$, and triangle $H'A'T'$ is right-angled at $H'$.

Consider these two triangles. We have:

- $AT=A'T'$ ($=4$ m), the two hypotenuses (given);
- $HA=H'A'$ ($=1.5$ m), the two legs (given).

Hence $\triangle HAT\equiv\triangle H'A'T'$ (HL). So $HT=H'T'$ and $\angle HAT=\angle H'A'T'$.

So the two ladders reach the same height and slope at the same angle.

**Answer.** $HT=H'T'$ and $\angle HAT=\angle H'A'T'$.
:::

:::exercise
Triangle $ABC$ has $AB=AC$. Draw $AH\perp BC$ ($H$ on $BC$). Prove that $HB=HC$ and $\angle BAH=\angle CAH$.

::hint
**What you need:** HL.

**Steps:**
1. Look at triangles $AHB$ and $AHC$. Where are they right-angled?
2. Which hypotenuses are equal, and which leg is common?

::solution
Consider triangle $AHB$, right-angled at $H$, and triangle $AHC$, right-angled at $H$. We have:

- $AB=AC$ (given), the two hypotenuses;
- $AH$ is a common leg.

Hence $\triangle AHB\equiv\triangle AHC$ (HL). So $HB=HC$ and $\angle BAH=\angle CAH$ (corresponding sides and angles).

So $HB=HC$ and $\angle BAH=\angle CAH$.

**Answer.** $HB=HC$; $\angle BAH=\angle CAH$.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$. On the ray opposite to the ray $AB$, take a point $D$ with $AD=AB$. Prove that $\triangle ABC\equiv\triangle ADC$ and that $CB=CD$.

::hint
**What you need:** two legs equal; adjacent angles on a straight line add up to $180^\circ$.

**Steps:**
1. Why is $\angle CAD=90^\circ$?
2. Find the two pairs of equal legs in triangles $ABC$ and $ADC$.

::solution
Since $B$, $A$, $D$ lie on a straight line with $A$ between $B$ and $D$, we have $\angle CAD+\angle CAB=180^\circ$ (adjacent angles on a straight line). Since $\angle CAB=90^\circ$, we get $\angle CAD=90^\circ$.

Consider triangle $ABC$, right-angled at $A$, and triangle $ADC$, right-angled at $A$. We have:

- $AB=AD$ (given);
- $AC$ is a common leg.

Hence $\triangle ABC\equiv\triangle ADC$ (LL). So $CB=CD$ (corresponding hypotenuses).

So $\triangle ABC\equiv\triangle ADC$ and $CB=CD$.

**Answer.** $\triangle ABC\equiv\triangle ADC$; $CB=CD$.
:::

:::exercise Challenge
Triangle $ABC$ is acute with $AB=AC$. Draw $BE\perp AC$ ($E$ on the side $AC$) and $CD\perp AB$ ($D$ on the side $AB$).

a) Prove that $BE=CD$ and $AD=AE$.

b) Prove that $\triangle BDC\equiv\triangle CEB$.

c) Deduce that $\angle ABC=\angle ACB$.

::hint
**What you need:** HA and HL.

**Steps:**
1. a) Which acute angle do the right-angled triangles $ABE$ and $ACD$ share?
2. b) Find $BD$ and $CE$ by subtracting: $AB-AD$ and $AC-AE$.
3. c) Read off the corresponding pair of angles from the congruent triangles in b).

::solution
a) Consider triangle $ABE$, right-angled at $E$, and triangle $ACD$, right-angled at $D$. We have:

- $AB=AC$ (given), the two hypotenuses;
- $\angle A$ is a common acute angle.

Hence $\triangle ABE\equiv\triangle ACD$ (HA). So $BE=CD$ and $AE=AD$ (corresponding sides).

b) Since triangle $ABC$ is acute, $D$ lies on the side $AB$ and $E$ lies on the side $AC$. So $BD=AB-AD=AC-AE=CE$.

Consider triangle $BDC$, right-angled at $D$, and triangle $CEB$, right-angled at $E$. We have:

- $BC$ is a common hypotenuse;
- $BD=CE$ (shown above).

Hence $\triangle BDC\equiv\triangle CEB$ (HL).

c) From b), $\angle DBC=\angle ECB$ (corresponding angles), that is, $\angle ABC=\angle ACB$.

So a), b) and c) are proved.

**Answer.** a) $BE=CD$, $AD=AE$. b) $\triangle BDC\equiv\triangle CEB$. c) $\angle ABC=\angle ACB$.
:::

## Mini test

:::quiz
::mc NB
Two right-angled triangles are congruent if they have
A. two corresponding acute angles equal.
B. equal hypotenuses.
C. an equal hypotenuse and an equal leg.
D. equal perimeters.
::key C
This is the HL condition. A gives similar shape only; B and D do not give enough information.

::mc TH
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $AB=DE$ and $AC=DF$. The triangles are congruent by
A. LL (two legs).
B. HA (hypotenuse–acute angle).
C. HL (hypotenuse–leg).
D. nothing: there is not enough information.
::key A
$AB$, $AC$ and $DE$, $DF$ are all legs, and the right angle between them is equal (SAS).

::mc TH
Triangle $ABC$ is right-angled at $A$ and triangle $MNP$ is right-angled at $M$, with $BC=NP$ and $\angle C=\angle P$. Which statement is correct?
A. $\triangle ABC\equiv\triangle MPN$.
B. $\triangle ABC\equiv\triangle NMP$.
C. There is not enough information to conclude.
D. $\triangle ABC\equiv\triangle MNP$.
::key D
Since $\angle C=\angle P$, $C$ corresponds to $P$, so $B$ corresponds to $N$ and $A$ to $M$; the triangles are congruent by HA.

::mc TH
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $\angle B=\angle E$ and $\angle C=\angle F$. Which statement is correct?
A. $\triangle ABC\equiv\triangle DEF$ (LA).
B. There is not enough information to conclude that the triangles are congruent.
C. $\triangle ABC\equiv\triangle DEF$ (HA).
D. $AB=DE$.
::key B
Two pairs of equal acute angles only tell us the triangles have the same shape; we still need one pair of equal sides.

::tf TH VD TH TH
Triangle $ABC$ is right-angled at $A$ with $AB=6$ cm and $BC=10$ cm. Triangle $MNP$ is right-angled at $M$ with $MN=6$ cm and $NP=10$ cm. Also $AC=8$ cm. Decide whether each statement is true or false.
a) The triangles are congruent by the HL condition.
b) $MP=6$ cm.
c) $\angle B=\angle N$.
d) $\angle C=90^\circ$.
::key T F T F
a) True: $BC=NP$ (hypotenuses) and $AB=MN$ (legs). b) False: $MP=AC=8$ cm. c) True: corresponding angles. d) False: the right angle is at $A$, so $\angle C$ is acute.

::sa VD
In the aerial problem, change the measurement to $OA=2.4$ m. Find $OB$ (in metres).
::key 2.4
$\triangle OAT\equiv\triangle OBT$ (HL), so $OB=OA=2.4$ m.

::sa VD
Triangle $ABC$ is right-angled at $A$ and triangle $DEF$ is right-angled at $D$, with $BC=EF=10$ cm and $\angle B=\angle E$. Given that $AC=6$ cm, find $DF$ (in cm).
::key 6
$\triangle ABC\equiv\triangle DEF$ (HA), so $DF=AC=6$ cm.
:::
