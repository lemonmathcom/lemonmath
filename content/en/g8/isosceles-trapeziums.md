---
title: Isosceles trapeziums
description: Recognise trapeziums and isosceles trapeziums, learn their properties and tests, then find angles, lengths and heights and solve real problems.
minutes: 35
---

:::goals
- Recognise a trapezium, its bases, legs, height, and an isosceles trapezium.
- Know and prove the properties: the two legs are equal and the two diagonals are equal.
- Know the test for an isosceles trapezium.
- Find angles, side lengths and heights of isosceles trapeziums, and apply them to real problems.
:::

Suppose the cross-section of a water channel is a shape whose top and bottom sides are parallel: the channel is $8$ m wide at the top, $4$ m wide at the bottom, and $3$ m deep. The two banks slope in the same way on both sides.

How long is each bank of the channel? Are the two banks equally long? This cross-section is an **isosceles trapezium**, and this lesson gives us the properties we need to answer.

## Trapeziums and isosceles trapeziums

### Explore: a trapezium and its co-interior angles

We draw a quadrilateral $ABCD$ with $AB\parallel CD$. Then the side $AD$ is a transversal cutting the two parallel lines $AB$ and $CD$, so the two co-interior angles $\angle A$ and $\angle D$ add up to $180^\circ$: $\angle A+\angle D=180^\circ$. In the same way $\angle B+\angle C=180^\circ$.

:::definition Trapezium
A **trapezium** is a quadrilateral with two opposite sides parallel. The two parallel sides are the **bases**; the other two sides are the **legs**. The **height** is the distance between the two bases, that is, the length of the perpendicular segment from a point of one base to the line containing the other base.
:::

In a trapezium $ABCD$ with $AB\parallel CD$, we have
$$\angle A+\angle D=180^\circ,\qquad \angle B+\angle C=180^\circ.$$
A trapezium with a right angle is called a **right trapezium**.

:::definition Isosceles trapezium
An **isosceles trapezium** is a trapezium whose two base angles at one base are equal.
:::

:::diagram Isosceles trapezium $ABCD$ with $AB\parallel CD$
alt: Isosceles trapezium ABCD with a short top base AB and a long bottom base CD; the legs AD and BC carry one equal tick mark
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
polygon A B C D
mark A D 1
mark B C 1
angle A D C "x"
angle B C D "x"
:::

In the figure, the isosceles trapezium $ABCD$ has bases $AB$ and $CD$, and the two base angles at the base $CD$ are equal: $\angle C=\angle D$. Then $\angle A=\angle B$, because $\angle A=180^\circ-\angle D$ and $\angle B=180^\circ-\angle C$.

## Properties of an isosceles trapezium

:::theorem The two legs are equal
In an isosceles trapezium, the two legs are equal.
:::

Why? Let $ABCD$ be an isosceles trapezium with $AB\parallel CD$ and $\angle C=\angle D$, both acute (the usual picture). We draw $AH\perp CD$ and $BK\perp CD$.

:::diagram The two heights $AH$ and $BK$ of the isosceles trapezium
alt: Isosceles trapezium ABCD with the two heights AH and BK drawn from A and B down to the base CD, forming two right triangles AHD and BKC
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
point H 3,0 below
point K 7,0 below
polygon A B C D
segment A H dashed
segment B K dashed
right A H D
right B K C
:::

Since $AB\parallel CD$, the distances from $A$ and from $B$ to $CD$ are equal, that is, $AH=BK$. The two right triangles $AHD$ and $BKC$ have $\angle AHD=\angle BKC=90^\circ$, $AH=BK$ and $\angle DAH=90^\circ-\angle D=90^\circ-\angle C=\angle CBK$. Hence $\triangle AHD=\triangle BKC$ (angle - side - angle), so $AD=BC$.

:::theorem The two diagonals are equal
In an isosceles trapezium, the two diagonals are equal.
:::

Why? Consider $\triangle ADC$ and $\triangle BCD$. We have $AD=BC$ (just proved), $\angle ADC=\angle BCD$ (the base angles) and $DC$ is a common side. Hence $\triangle ADC=\triangle BCD$ (side - angle - side), so $AC=BD$.

:::diagram The two diagonals $AC$ and $BD$ are equal
alt: Isosceles trapezium ABCD with the two diagonals AC and BD carrying two equal tick marks
point A 3,4 above
point B 7,4 above
point C 10,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C
segment B D
mark A C 2
mark B D 2
:::

:::theorem Tests for an isosceles trapezium
- A trapezium whose two base angles at one base are equal is an isosceles trapezium (by the definition).
- A trapezium whose two diagonals are equal is an isosceles trapezium. (We accept this test without proof.)
:::

## Examples

We begin with the angles of a trapezium.

:::example Angles of a trapezium
The trapezium $ABCD$ ($AB\parallel CD$) has $\angle A=115^\circ$ and $\angle C=80^\circ$. Find $\angle D$ and $\angle B$.

**Solution.** Since $AB\parallel CD$, we have $\angle A+\angle D=180^\circ$ and $\angle B+\angle C=180^\circ$. Hence
$$\angle D=180^\circ-115^\circ=65^\circ,\qquad \angle B=180^\circ-80^\circ=100^\circ.$$
So $\angle D=65^\circ$ and $\angle B=100^\circ$.

**Remark.** Check with the angle sum of a quadrilateral: $115^\circ+100^\circ+80^\circ+65^\circ=360^\circ$.
:::

Next, the angles of an isosceles trapezium.

:::example Angles of an isosceles trapezium
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $\angle D=70^\circ$. Find the other angles.

**Solution.** The two base angles at the base $CD$ are equal, so $\angle C=\angle D=70^\circ$. Since $AB\parallel CD$, we have $\angle A=180^\circ-\angle D=110^\circ$ and $\angle B=180^\circ-\angle C=110^\circ$.

So $\angle C=70^\circ$ and $\angle A=\angle B=110^\circ$.
:::

Now we use the properties of the sides and diagonals.

:::example Sides, diagonals and perimeter
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $AB=4$ cm, $CD=14$ cm, $AD=13$ cm and $BD=15$ cm. Find $BC$, $AC$ and the perimeter.

**Solution.** In an isosceles trapezium the two legs are equal, so $BC=AD=13$ cm, and the two diagonals are equal, so $AC=BD=15$ cm. The perimeter is
$$AB+BC+CD+DA=4+13+14+13=44\ (\text{cm}).$$
So $BC=13$ cm, $AC=15$ cm and the perimeter is $44$ cm.
:::

We can also find a height with Pythagoras' theorem.

:::example Finding the height
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $AB=4$ cm, $CD=10$ cm and $AD=5$ cm. Find the height.

**Solution.** Draw $AH\perp CD$ and $BK\perp CD$. The two right triangles $AHD$ and $BKC$ are equal, so $DH=CK$. We also have $HK=AB=4$ cm (we accept this; the lesson on parallelograms will explain it). Hence
$$DH=\dfrac{CD-HK}{2}=\dfrac{10-4}{2}=3\ (\text{cm}).$$
In the right triangle $AHD$, by Pythagoras' theorem, $AH^2=AD^2-DH^2=25-9=16$, so $AH=4$ cm.

So the height of the trapezium is $4$ cm.
:::

Now a proof that uses a test for an isosceles trapezium.

:::example Proving that a quadrilateral is an isosceles trapezium
Let $ABC$ be a triangle with $AB=AC$. On the sides $AB$, $AC$ take points $M$, $N$ with $AM=AN$. Prove that $MNCB$ is an isosceles trapezium.

**Solution.** Triangle $ABC$ is isosceles at $A$, so $\angle B=\angle C=\dfrac{180^\circ-\angle A}{2}$. Triangle $AMN$ is isosceles at $A$ (since $AM=AN$), so $\angle AMN=\dfrac{180^\circ-\angle A}{2}$. Hence $\angle AMN=\angle B$.

The angles $\angle AMN$ and $\angle B$ are corresponding angles and are equal, so $MN\parallel BC$. Thus $MNCB$ is a trapezium with bases $MN$ and $BC$. It has $\angle B=\angle C$, the two base angles at the base $BC$ are equal.

So $MNCB$ is an isosceles trapezium.
:::

Finally, the channel from the start.

:::example Cross-section of a channel (Application)
Suppose the cross-section of a channel is an isosceles trapezium $ABCD$ ($AB\parallel CD$) with short base $AB=4$ m (the channel floor), long base $CD=8$ m (the top of the channel) and height $3$ m. Find the length of each bank. If the channel is $50$ m long, what is the total area of the two banks to be lined?

**Solution.**

*Understand the problem.* The two banks are the two legs $AD$ and $BC$. We need the length of one leg, then we multiply by the length of the channel.

*Plan.* Draw the two heights $AH$, $BK$ down to the base $CD$, then use Pythagoras' theorem in the right triangle $AHD$.

*Carry out the plan.* The two legs are equal (isosceles trapezium) and $DH=CK=\dfrac{8-4}{2}=2$ (m). In the right triangle $AHD$:
$$AD^2=AH^2+DH^2=3^2+2^2=13,\quad\text{so}\quad AD=\sqrt{13}\approx3.61\ (\text{m}).$$
Each bank is about $3.61$ m long. Each bank is a rectangle $50$ m long and $\sqrt{13}$ m wide, so the total area of the two banks is
$$2\cdot50\cdot\sqrt{13}=100\sqrt{13}\approx361\ (\text{m}^2).$$
So each bank is about $3.61$ m long (the two banks are equal) and about $361$ m² must be lined.

*Look back.* The bank has length $\sqrt{13}\approx3.61$ m, more than the depth $3$ m, as it should be because the bank slopes. Check: $3.61^2\approx13.03$, close to $3^2+2^2=13$.
:::

:::warning Common mistakes
- **Thinking that equal legs make a trapezium isosceles.** Wrong: a trapezium with equal legs is an isosceles trapezium. Why it is wrong: a parallelogram (not a rectangle) has equal legs but its base angles are not equal. Right: use equal base angles at one base, or equal diagonals.
- **Choosing the wrong pair of equal angles.** Wrong: in the isosceles trapezium $ABCD$ ($AB\parallel CD$), $\angle A=\angle D$. Why it is wrong: $\angle A$ and $\angle D$ are co-interior angles, so they add up to $180^\circ$. Right: $\angle A=\angle B$, $\angle C=\angle D$ and $\angle A+\angle D=180^\circ$.
- **Taking the leg as the height.** Wrong: the height of an isosceles trapezium equals its leg. Why it is wrong: the height is perpendicular to the bases, while the leg slopes and so is longer. Right: draw the height and use Pythagoras' theorem.
- **Using the diagonal test on any quadrilateral.** Wrong: a quadrilateral with equal diagonals is an isosceles trapezium. Why it is wrong: we use this test only when the quadrilateral is already a trapezium. Right: first check that two opposite sides are parallel.
:::

**Connections.** Isosceles trapeziums use isosceles triangles, congruent triangles and Pythagoras' theorem, which you already know. An isosceles trapezium also has an axis of symmetry: the line through the midpoints of the two bases. In the next lessons we study parallelograms, rectangles, rhombuses and squares, all quadrilaterals with pairs of opposite sides parallel.

## Key terms

:::terms
- trapezium | hình thang
- base | đáy
- leg | cạnh bên
- height | chiều cao
- isosceles trapezium | hình thang cân
- base angles | hai góc kề một đáy
- right trapezium | hình thang vuông
- diagonal | đường chéo
- parallel | song song
:::

## Summary

- A trapezium is a quadrilateral with two opposite sides parallel (the bases); in a trapezium $ABCD$ ($AB\parallel CD$), $\angle A+\angle D=\angle B+\angle C=180^\circ$.
- An isosceles trapezium is a trapezium whose two base angles at one base are equal.
- In an isosceles trapezium the two legs are equal and the two diagonals are equal.
- A trapezium with equal diagonals is an isosceles trapezium.
- To find a height, draw the two heights and use Pythagoras' theorem.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
The trapezium $ABCD$ ($AB\parallel CD$) has $\angle A=120^\circ$ and $\angle B=100^\circ$. Find $\angle D$ and $\angle C$.

::hint
**What you need:** in a trapezium $ABCD$ ($AB\parallel CD$): $\angle A+\angle D=180^\circ$ and $\angle B+\angle C=180^\circ$.

**Steps:**
1. Find $\angle D$ from $\angle A$.
2. Find $\angle C$ from $\angle B$.

::solution
We have $\angle D=180^\circ-120^\circ=60^\circ$ and $\angle C=180^\circ-100^\circ=80^\circ$. (Check: $120+100+80+60=360$.)

So $\angle D=60^\circ$ and $\angle C=80^\circ$.

**Answer.** $\angle D=60^\circ$; $\angle C=80^\circ$.
:::

:::exercise
The isosceles trapezium $MNPQ$ ($MN\parallel PQ$) has $\angle Q=65^\circ$. Find the other angles.

::hint
**What you need:** the base angles of an isosceles trapezium at one base are equal; co-interior angles add up to $180^\circ$.

**Steps:**
1. Find $\angle P$.
2. Find $\angle M$ and $\angle N$.

::solution
The two base angles at the base $PQ$ are equal, so $\angle P=\angle Q=65^\circ$. Since $MN\parallel PQ$, we have $\angle M=180^\circ-\angle Q=115^\circ$ and $\angle N=180^\circ-\angle P=115^\circ$.

So $\angle P=65^\circ$ and $\angle M=\angle N=115^\circ$.

**Answer.** $\angle P=65^\circ$; $\angle M=\angle N=115^\circ$.
:::

:::exercise
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $AB=8$ cm, $CD=14$ cm and $AD=5$ cm. Find the perimeter.

::hint
**What you need:** the two legs of an isosceles trapezium are equal.

**Steps:**
1. Find $BC$.
2. Add the four sides.

::solution
Since $ABCD$ is an isosceles trapezium, $BC=AD=5$ cm. The perimeter is $8+5+14+5=32$ (cm).

So the perimeter is $32$ cm.

**Answer.** $32$ cm.
:::

:::exercise
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $AB=6$ cm, $CD=14$ cm and $AD=5$ cm. Find the height.

::hint
**What you need:** draw the two heights $AH$, $BK$; $DH=CK=\dfrac{CD-AB}{2}$; use Pythagoras' theorem.

**Steps:**
1. Find $DH$.
2. Find $AH$ in the right triangle $AHD$.

::solution
We have $DH=\dfrac{14-6}{2}=4$ (cm). In the right triangle $AHD$: $AH^2=AD^2-DH^2=25-16=9$, so $AH=3$ cm.

So the height is $3$ cm.

**Answer.** $3$ cm.
:::

:::exercise
The trapezium $ABCD$ ($AB\parallel CD$) has $\angle A=\angle B$. Prove that $ABCD$ is an isosceles trapezium.

::hint
**What you need:** $\angle A+\angle D=180^\circ$, $\angle B+\angle C=180^\circ$; an isosceles trapezium has equal base angles at one base.

**Steps:**
1. Write $\angle D$ and $\angle C$ in terms of $\angle A$ and $\angle B$.
2. Compare $\angle C$ and $\angle D$.

::solution
Since $AB\parallel CD$, we have $\angle D=180^\circ-\angle A$ and $\angle C=180^\circ-\angle B$. Since $\angle A=\angle B$, we get $\angle C=\angle D$. The trapezium $ABCD$ has equal base angles at the base $CD$.

So $ABCD$ is an isosceles trapezium.

**Answer.** $ABCD$ is an isosceles trapezium.
:::

:::exercise
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $\angle A=3\angle C$. Find the angles of the trapezium.

::hint
**What you need:** $\angle C=\angle D$ and $\angle A+\angle D=180^\circ$.

**Steps:**
1. Write $\angle A+\angle C=180^\circ$ and substitute $\angle A=3\angle C$.
2. Find $\angle C$, then the other angles.

::solution
Since $\angle D=\angle C$, we have $\angle A+\angle C=\angle A+\angle D=180^\circ$. Substituting $\angle A=3\angle C$: $4\angle C=180^\circ$, so $\angle C=45^\circ$. Hence $\angle D=45^\circ$ and $\angle A=\angle B=135^\circ$.

So $\angle C=\angle D=45^\circ$ and $\angle A=\angle B=135^\circ$.

**Answer.** $\angle C=\angle D=45^\circ$; $\angle A=\angle B=135^\circ$.
:::

:::exercise
Suppose the cross-section of an embankment is an isosceles trapezium with long base $12$ m, short base $4$ m and height $3$ m. Find the length of each sloping side (leg).

::hint
**What you need:** draw the two heights; $DH=\dfrac{CD-AB}{2}$; Pythagoras' theorem.

**Steps:**
1. Find how far the long base sticks out on each side.
2. Use Pythagoras' theorem to find the leg.

::solution
The long base sticks out $\dfrac{12-4}{2}=4$ (m) on each side. The leg is the hypotenuse of a right triangle with legs $3$ m and $4$ m, so it equals $\sqrt{3^2+4^2}=\sqrt{25}=5$ (m).

So each sloping side is $5$ m long.

**Answer.** $5$ m.
:::

:::exercise
Suppose a wooden board is an isosceles trapezium with bases $10$ cm and $16$ cm and perimeter $40$ cm. Find the length of each leg.

::hint
**What you need:** the two legs of an isosceles trapezium are equal; the perimeter is the sum of the four sides.

**Steps:**
1. Find the sum of the two legs.
2. Halve it.

::solution
The sum of the two legs is $40-(10+16)=14$ (cm). Since the two legs are equal, each leg is $14\div2=7$ (cm).

So each leg is $7$ cm long.

**Answer.** $7$ cm.
:::

:::exercise
Recall the angle sum of a quadrilateral. An isosceles trapezium has base angles at the short base that are $40^\circ$ larger than the base angles at the long base. Find the four angles, then check with the angle sum of a quadrilateral.

::hint
**What you need:** co-interior angles add up to $180^\circ$; the four angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Let the angle at the long base be $x$ and the angle at the short base be $x+40^\circ$.
2. Write the equation $x+(x+40^\circ)=180^\circ$.

::solution
Let the angle at the long base be $x$, so the angle at the short base is $x+40^\circ$. These two angles are co-interior, so $x+(x+40^\circ)=180^\circ$, which gives $2x=140^\circ$ and $x=70^\circ$. The two angles at the long base are $70^\circ$ and the two angles at the short base are $110^\circ$.

Check: $70^\circ+70^\circ+110^\circ+110^\circ=360^\circ$.

So the four angles are $70^\circ$, $70^\circ$, $110^\circ$, $110^\circ$.

**Answer.** $70^\circ$, $70^\circ$, $110^\circ$, $110^\circ$.
:::

:::exercise Challenge
The diagonals $AC$ and $BD$ of the isosceles trapezium $ABCD$ ($AB\parallel CD$) meet at $O$. Prove that $OC=OD$ and $OA=OB$.

::hint
**What you need:** $\triangle ADC=\triangle BCD$ (shown in the lesson), so $\angle ACD=\angle BDC$; a triangle with two equal angles is isosceles.

**Steps:**
1. Prove that $\triangle OCD$ is isosceles at $O$.
2. Use $AC=BD$ to deduce $OA=OB$.

::solution
Since $\triangle ADC=\triangle BCD$, we have $\angle ACD=\angle BDC$, that is, $\angle OCD=\angle ODC$. Triangle $OCD$ has two equal base angles, so it is isosceles at $O$, and $OC=OD$.

The two diagonals are equal, so $AC=BD$. Hence $OA=AC-OC=BD-OD=OB$.

So $OC=OD$ and $OA=OB$.

**Answer.** $OC=OD$; $OA=OB$.
:::

## Mini test

:::quiz
::mc
The isosceles trapezium $ABCD$ ($AB\parallel CD$) has $\angle D=65^\circ$. The angle $\angle A$ equals
A. $65^\circ$.
B. $25^\circ$.
C. $115^\circ$.
D. $130^\circ$.
::key C
$\angle A$ and $\angle D$ are co-interior, so $\angle A=180^\circ-65^\circ=115^\circ$. A assumes $\angle A=\angle D$, B takes $90^\circ-65^\circ$, D takes $2\cdot65^\circ$.

::mc
Which statement is true for every isosceles trapezium?
A. The two bases are equal.
B. The two legs are parallel.
C. All four angles are equal.
D. The two diagonals are equal.
::key D
In an isosceles trapezium the two diagonals are equal. A is false because the bases are not equal, B is false because the legs are not parallel to each other, C is true only for a rectangle.

::mc
An isosceles trapezium has bases $4$ cm and $10$ cm and legs $5$ cm. Its height equals
A. $4$ cm.
B. $3$ cm.
C. $5$ cm.
D. $6$ cm.
::key A
Each side sticks out $\dfrac{10-4}{2}=3$ cm, so the height is $\sqrt{5^2-3^2}=4$ cm. B is the overhang, C is the leg.

::mc
An isosceles trapezium has bases $6$ cm and $12$ cm and legs $5$ cm. Its perimeter equals
A. $23$ cm.
B. $28$ cm.
C. $25$ cm.
D. $34$ cm.
::key B
The perimeter is $6+12+5+5=28$ cm. A leaves out one leg, C and D add wrongly.

::tf
The trapezium $ABCD$ ($AB\parallel CD$) has $\angle A=110^\circ$ and $\angle C=80^\circ$.
a) $\angle D=70^\circ$.
b) $\angle B=80^\circ$.
c) $ABCD$ is an isosceles trapezium.
d) $\angle A+\angle B+\angle C+\angle D=360^\circ$.
::key T F F T
a) True: $180-110=70$. b) False: $\angle B=180^\circ-80^\circ=100^\circ$. c) False: $\angle C=80^\circ\ne\angle D=70^\circ$. d) True: the angle sum of a quadrilateral.

::sa
An isosceles trapezium has bases $7$ cm and $13$ cm and legs $5$ cm. Find the perimeter (cm).
::key 30
The perimeter is $7+13+5+5=30$ cm.

::sa
An isosceles trapezium has bases $6$ cm and $14$ cm and legs $5$ cm. Find the height (cm).
::key 3
Each side sticks out $\dfrac{14-6}{2}=4$ cm, so the height is $\sqrt{25-16}=3$ cm.
:::
