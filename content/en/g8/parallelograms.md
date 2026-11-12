---
title: Parallelograms
description: Recognise parallelograms, learn their properties for sides, angles and diagonals and the tests for them, then find lengths and angles.
minutes: 35
---

:::goals
- Recognise a parallelogram from its definition.
- Know and prove the properties of opposite sides, opposite angles and diagonals of a parallelogram.
- Know the tests for a parallelogram.
- Use the properties and tests to find lengths and angles, to prove statements and to solve real problems.
:::

Suppose a wooden frame is made of four bars joined by screws at the corners: two bars $60$ cm long and two bars $40$ cm long, with the bars of equal length opposite each other. Standing straight, the frame is a rectangle. If we push the frame sideways until one angle is $65^\circ$, the shape of the frame changes.

After pushing, are the bars still parallel in pairs? What are the angles of the frame, and does the perimeter change? A frame pushed sideways is a **parallelogram**, and this lesson gives us the properties to answer.

## Parallelograms

### Explore: joining two congruent triangles

We draw a quadrilateral $ABCD$ with $AB\parallel CD$ and $AD\parallel BC$, then draw the diagonal $AC$. The diagonal $AC$ cuts the quadrilateral into two triangles, $ABC$ and $CDA$. These two triangles share the side $AC$. Because the opposite sides are parallel, the pairs of alternate angles in the two triangles are equal. We shall see that the two triangles are congruent, and read off the properties from this.

:::definition Parallelogram
A **parallelogram** is a quadrilateral whose opposite sides are parallel.
:::

:::diagram Parallelogram $ABCD$ with $AB\parallel CD$ and $AD\parallel BC$
alt: Parallelogram ABCD with side AB horizontal at the bottom and side CD above it, parallel and equal to AB; pairs of opposite sides carry the same number of tick marks
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
polygon A B C D
mark A B 1
mark D C 1
mark A D 2
mark B C 2
:::

In the parallelogram $ABCD$, the opposite sides $AB$ and $CD$ are parallel, and the opposite sides $AD$ and $BC$ are also parallel. A trapezium is a quadrilateral with one pair of opposite sides parallel, so a parallelogram is a trapezium with a second pair of opposite sides parallel as well.

## Properties of a parallelogram

:::theorem Properties of a parallelogram
In a parallelogram:
1. Opposite sides are equal.
2. Opposite angles are equal.
3. The two diagonals bisect each other, meeting at the midpoint of each.
:::

Why? Let $ABCD$ be a parallelogram and draw the diagonal $AC$.

:::diagram The diagonal $AC$ cuts the parallelogram into two congruent triangles
alt: Parallelogram ABCD with the diagonal AC; angle BAC equals angle DCA marked alpha, and angle CAD equals angle ACB marked beta
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
polygon A B C D
segment A C
angle B A C "α"
angle D C A "α"
angle C A D "β"
angle A C B "β"
:::

Since $AB\parallel CD$, we have $\angle BAC=\angle DCA$ (alternate angles). Since $AD\parallel BC$, we have $\angle CAD=\angle ACB$ (alternate angles). The two triangles $ABC$ and $CDA$ share $AC$, so $\triangle ABC=\triangle CDA$ (angle - side - angle).

Hence $AB=CD$, $BC=DA$ and $\angle B=\angle D$. Also $\angle A=\angle BAC+\angle CAD=\angle DCA+\angle ACB=\angle C$. These are properties 1 and 2.

Let $O$ be the intersection of $AC$ and $BD$. The two triangles $OAB$ and $OCD$ have $AB=CD$, $\angle OAB=\angle OCD$ (alternate angles, since $AB\parallel CD$) and $\angle OBA=\angle ODC$ (alternate angles). So $\triangle OAB=\triangle OCD$ (angle - side - angle), which gives $OA=OC$ and $OB=OD$. This is property 3.

:::diagram The two diagonals meet at the midpoint $O$
alt: Parallelogram ABCD with the diagonals AC and BD meeting at O; OA equals OC and OB equals OD, with equal segments carrying the same number of tick marks
point A 0,0 below-left
point B 6,0 below-right
point C 8,3 above-right
point D 2,3 above-left
point O 4,1.5 below
polygon A B C D
segment A C
segment B D
mark A O 1
mark O C 1
mark B O 2
mark O D 2
:::

## Tests for a parallelogram

:::theorem Tests for a parallelogram
A quadrilateral is a parallelogram if it has one of the following:
1. Opposite sides parallel (the definition).
2. Opposite sides equal.
3. Two opposite sides that are both parallel and equal.
4. Opposite angles equal.
5. Diagonals that bisect each other.
:::

We prove test 2. The quadrilateral $ABCD$ has $AB=CD$ and $AD=BC$. The two triangles $ABC$ and $CDA$ have $AB=CD$, $BC=DA$ and the common side $AC$, so $\triangle ABC=\triangle CDA$ (side - side - side). It follows that $\angle BAC=\angle DCA$, so $AB\parallel CD$, and $\angle BCA=\angle DAC$, so $AD\parallel BC$. Hence $ABCD$ is a parallelogram. The other tests are proved in the practice section.

## Examples

We begin with the sides and angles of a parallelogram.

:::example Sides, angles and perimeter
The parallelogram $ABCD$ has $AB=7$ cm, $BC=4$ cm and $\angle A=75^\circ$. Find $CD$, $DA$, the perimeter and the other angles.

**Solution.** Opposite sides are equal, so $CD=AB=7$ cm and $DA=BC=4$ cm. The perimeter is
$$2(AB+BC)=2(7+4)=22\ (\text{cm}).$$
Opposite angles are equal, so $\angle C=\angle A=75^\circ$. The angles $\angle A$ and $\angle B$ are co-interior angles of the parallel lines $AD$, $BC$, so $\angle A+\angle B=180^\circ$, which gives $\angle B=105^\circ$ and $\angle D=\angle B=105^\circ$.

So $CD=7$ cm, $DA=4$ cm, the perimeter is $22$ cm, $\angle C=75^\circ$ and $\angle B=\angle D=105^\circ$.
:::

Next we use the property of the diagonals.

:::example Diagonals
The parallelogram $ABCD$ has diagonals meeting at $O$, with $AC=10$ cm, $BD=8$ cm and $AB=6$ cm. Find the perimeter of triangle $OAB$.

**Solution.** The diagonals bisect each other, so
$$OA=\dfrac{AC}{2}=5\ (\text{cm}),\qquad OB=\dfrac{BD}{2}=4\ (\text{cm}).$$
The perimeter of triangle $OAB$ is $OA+OB+AB=5+4+6=15$ (cm).

So the perimeter of triangle $OAB$ is $15$ cm.
:::

Now lengths and angles with an unknown.

:::example Finding $x$
a) The parallelogram $ABCD$ has $AB=2x+3$ and $CD=x+8$. Find $x$ and $AB$.

b) The parallelogram $MNPQ$ has $\angle M=3x+10^\circ$ and $\angle P=2x+30^\circ$. Find $x$ and $\angle M$.

**Solution.** a) Opposite sides are equal, so $AB=CD$, that is, $2x+3=x+8$. It follows that $x=5$ and $AB=2\cdot5+3=13$.

b) Opposite angles are equal, so $\angle M=\angle P$, that is, $3x+10^\circ=2x+30^\circ$. It follows that $x=20^\circ$ and $\angle M=3\cdot20^\circ+10^\circ=70^\circ$.

So a) $x=5$, $AB=13$; b) $x=20^\circ$, $\angle M=70^\circ$.

**Remark.** Check: in a) $CD=5+8=13=AB$; in b) $\angle P=2\cdot20^\circ+30^\circ=70^\circ=\angle M$.
:::

Next, a proof using congruent triangles.

:::example Two equal segments through the centre
Let $ABCD$ be a parallelogram whose diagonals meet at $O$. A line through $O$ meets $AB$ at $M$ and $CD$ at $N$. Prove that $OM=ON$.

**Solution.** Consider the triangles $OAM$ and $OCN$. We have:
- $OA=OC$ (the diagonals bisect each other);
- $\angle OAM=\angle OCN$ (alternate angles, since $AB\parallel CD$);
- $\angle AOM=\angle CON$ (vertically opposite angles).

Hence $\triangle OAM=\triangle OCN$ (angle - side - angle), so $OM=ON$.

So $OM=ON$.
:::

We also use the tests to recognise a parallelogram.

:::example Proving that a quadrilateral is a parallelogram
The quadrilateral $ABCD$ has $AB=CD=6$ cm and $AD=BC=4$ cm. Prove that $ABCD$ is a parallelogram.

**Solution.** The quadrilateral $ABCD$ has equal opposite sides: $AB=CD$ and $AD=BC$. By the second test, $ABCD$ is a parallelogram.

So $ABCD$ is a parallelogram.

**Remark.** We did not need to know beforehand that $AB\parallel CD$: equal opposite sides already imply it.
:::

Finally, the wooden frame from the start.

:::example A wooden frame pushed sideways (Application)
Suppose a wooden frame is made of two bars $60$ cm long and two bars $40$ cm long, with bars of equal length opposite each other. When the frame is pushed sideways, one angle becomes $65^\circ$. Find the angles and the perimeter of the frame.

**Solution.**

*Understand the problem.* Each bar has a fixed length, while the angles change when we push. The frame is still a quadrilateral whose opposite sides are equal in pairs.

*Plan.* Equal opposite sides make the frame a parallelogram. Use the angle properties of a parallelogram to find the four angles, and add the lengths of the four bars for the perimeter.

*Carry out the plan.* Call the frame $ABCD$ with $AB=CD=60$ cm, $AD=BC=40$ cm and $\angle A=65^\circ$. Opposite sides are equal, so $ABCD$ is a parallelogram. Hence $\angle C=\angle A=65^\circ$. Since $AD\parallel BC$, we have $\angle A+\angle B=180^\circ$, so $\angle B=115^\circ$ and $\angle D=\angle B=115^\circ$.

The perimeter is $2(60+40)=200$ cm.

So the angles of the frame are $65^\circ$, $115^\circ$, $65^\circ$, $115^\circ$ and the perimeter is $200$ cm.

*Look back.* The four angles add up to $65+115+65+115=360$, in agreement with the angle sum of a quadrilateral. The perimeter does not change because the lengths of the bars do not change, however far we push the frame.
:::

:::warning Common mistakes
- **One pair of equal opposite sides is enough.** Wrong: a quadrilateral with two equal opposite sides is a parallelogram. Why it is wrong: an isosceles trapezium has equal legs but is not a parallelogram. Right: the two opposite sides must be both parallel and equal.
- **Confusing adjacent angles with opposite angles.** Wrong: two adjacent angles of a parallelogram are equal. Why it is wrong: adjacent angles are co-interior angles of parallel lines, so they add up to $180^\circ$. Right: $\angle A+\angle B=180^\circ$ and $\angle A=\angle C$.
- **Saying that the diagonals are equal.** Wrong: in a parallelogram the two diagonals are equal. Why it is wrong: the diagonals only bisect each other; they are equal when the parallelogram is a rectangle. Right: $OA=OC$ and $OB=OD$.
- **The diagonal test is not complete.** Wrong: a quadrilateral whose diagonals meet is a parallelogram. Why it is wrong: the diagonals of every convex quadrilateral meet. Right: they must meet at the midpoint of each.
:::

**Connections.** Parallelograms use parallel lines and congruent triangles from Year 7. They are the basis for rectangles, rhombuses and squares in the next lessons, which are all special parallelograms. The property that the diagonals bisect each other also appears when we study the midline of a triangle.

## Key terms

:::terms
- parallelogram | hình bình hành
- opposite sides | cạnh đối
- opposite angles | góc đối
- diagonal | đường chéo
- midpoint | trung điểm
- parallel | song song
- point of intersection | giao điểm
- test | dấu hiệu nhận biết
- congruent triangles | tam giác bằng nhau
:::

## Summary

- A parallelogram is a quadrilateral whose opposite sides are parallel.
- In a parallelogram: opposite sides are equal, opposite angles are equal, and the diagonals bisect each other.
- Two adjacent angles of a parallelogram add up to $180^\circ$.
- Tests: opposite sides parallel; opposite sides equal; two opposite sides parallel and equal; opposite angles equal; diagonals that bisect each other.
- The perimeter of a parallelogram is $2$ times the sum of two adjacent sides.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
The parallelogram $ABCD$ has $AB=9$ cm and $AD=5$ cm. Find $CD$, $BC$ and the perimeter.

::hint
**What you need:** opposite sides of a parallelogram are equal.

**Steps:**
1. Find $CD$ and $BC$.
2. Add the four sides.

::solution
Opposite sides are equal, so $CD=AB=9$ cm and $BC=AD=5$ cm. The perimeter is $2(9+5)=28$ (cm).

So $CD=9$ cm, $BC=5$ cm and the perimeter is $28$ cm.

**Answer.** $CD=9$ cm; $BC=5$ cm; perimeter $28$ cm.
:::

:::exercise
The parallelogram $ABCD$ has $\angle A=65^\circ$. Find the other angles.

::hint
**What you need:** opposite angles are equal; two adjacent angles add up to $180^\circ$.

**Steps:**
1. Find $\angle C$.
2. Find $\angle B$, then $\angle D$.

::solution
We have $\angle C=\angle A=65^\circ$. Since $\angle A+\angle B=180^\circ$, we get $\angle B=115^\circ$, and $\angle D=\angle B=115^\circ$.

So $\angle C=65^\circ$ and $\angle B=\angle D=115^\circ$.

**Answer.** $\angle C=65^\circ$; $\angle B=\angle D=115^\circ$.
:::

:::exercise
The diagonals of the parallelogram $ABCD$ meet at $O$, with $AC=12$ cm, $BD=16$ cm and $AB=10$ cm. Find $OA$, $OB$ and the perimeter of triangle $OAB$.

::hint
**What you need:** the diagonals of a parallelogram bisect each other.

**Steps:**
1. Find $OA$ and $OB$ as half of the diagonals.
2. Add the three sides of triangle $OAB$.

::solution
We have $OA=\dfrac{12}{2}=6$ (cm) and $OB=\dfrac{16}{2}=8$ (cm). The perimeter of triangle $OAB$ is $6+8+10=24$ (cm).

So $OA=6$ cm, $OB=8$ cm and the perimeter of triangle $OAB$ is $24$ cm.

**Answer.** $OA=6$ cm; $OB=8$ cm; perimeter $24$ cm.
:::

:::exercise
The parallelogram $ABCD$ has $AB=3x-2$ and $CD=2x+5$ (cm). Find $x$ and $AB$.

::hint
**What you need:** opposite sides of a parallelogram are equal.

**Steps:**
1. Write the equation $3x-2=2x+5$.
2. Solve it, then find $AB$.

::solution
Since $AB=CD$, we have $3x-2=2x+5$, so $x=7$. Then $AB=3\cdot7-2=19$ (cm). (Check: $CD=2\cdot7+5=19$.)

So $x=7$ and $AB=19$ cm.

**Answer.** $x=7$; $AB=19$ cm.
:::

:::exercise
The parallelogram $ABCD$ has $\angle A=4x-10^\circ$ and $\angle C=2x+30^\circ$. Find $x$, then find $\angle A$ and $\angle B$.

::hint
**What you need:** opposite angles are equal; two adjacent angles add up to $180^\circ$.

**Steps:**
1. Write the equation $4x-10^\circ=2x+30^\circ$.
2. Find $\angle A$, then $\angle B=180^\circ-\angle A$.

::solution
Since $\angle A=\angle C$, we have $4x-10^\circ=2x+30^\circ$, so $2x=40^\circ$ and $x=20^\circ$. Hence $\angle A=4\cdot20^\circ-10^\circ=70^\circ$ and $\angle B=180^\circ-70^\circ=110^\circ$.

So $x=20^\circ$, $\angle A=70^\circ$ and $\angle B=110^\circ$.

**Answer.** $x=20^\circ$; $\angle A=70^\circ$; $\angle B=110^\circ$.
:::

:::exercise
The quadrilateral $ABCD$ has $\angle A=\angle C=110^\circ$ and $\angle B=\angle D=70^\circ$. Prove that $ABCD$ is a parallelogram.

::hint
**What you need:** if two co-interior angles add up to $180^\circ$, the two lines are parallel.

**Steps:**
1. Find $\angle A+\angle B$ and $\angle A+\angle D$.
2. Deduce the pairs of parallel sides.

::solution
We have $\angle A+\angle B=110^\circ+70^\circ=180^\circ$. These are co-interior angles of the lines $AD$, $BC$ with transversal $AB$, so $AD\parallel BC$. Also $\angle A+\angle D=180^\circ$, so $AB\parallel CD$.

The quadrilateral $ABCD$ has opposite sides parallel, so it is a parallelogram.

**Answer.** $ABCD$ is a parallelogram.
:::

:::exercise
Suppose a plot of land is a parallelogram $ABCD$ with $AB=45$ m, $BC=30$ m and $\angle A=60^\circ$. Find the perimeter and the other angles of the plot.

::hint
**What you need:** the perimeter of a parallelogram is $2$ times the sum of two adjacent sides; opposite angles are equal and adjacent angles add up to $180^\circ$.

**Steps:**
1. Find the perimeter.
2. Find $\angle C$, $\angle B$ and $\angle D$.

::solution
The perimeter is $2(45+30)=150$ (m). We have $\angle C=\angle A=60^\circ$, $\angle B=180^\circ-60^\circ=120^\circ$ and $\angle D=\angle B=120^\circ$.

So the perimeter is $150$ m, $\angle C=60^\circ$ and $\angle B=\angle D=120^\circ$.

**Answer.** $150$ m; $\angle C=60^\circ$; $\angle B=\angle D=120^\circ$.
:::

:::exercise
Suppose two wooden bars, $AC$ of length $80$ cm and $BD$ of length $60$ cm, are perpendicular and cross at the midpoint $O$ of each bar. The four ends $A$, $B$, $C$, $D$ are joined to make a frame $ABCD$. Prove that $ABCD$ is a parallelogram and find the perimeter of the frame.

::hint
**What you need:** a quadrilateral whose diagonals bisect each other is a parallelogram; Pythagoras' theorem.

**Steps:**
1. Use the test about the diagonals.
2. Find $AB$ in the right triangle $OAB$ ($OA=40$ cm, $OB=30$ cm), and all four sides.

::solution
The diagonals $AC$ and $BD$ meet at the midpoint $O$ of each, so $ABCD$ is a parallelogram.

We have $OA=40$ cm, $OB=30$ cm and $\angle AOB=90^\circ$. By Pythagoras' theorem, $AB^2=40^2+30^2=2500$, so $AB=50$ cm. In the same way, each of $BC$, $CD$, $DA$ is the hypotenuse of a right triangle with legs $40$ cm and $30$ cm, so it equals $50$ cm. The perimeter is $4\cdot50=200$ (cm).

So $ABCD$ is a parallelogram and the perimeter of the frame is $200$ cm.

**Answer.** $200$ cm.
:::

:::exercise
Recall the lesson on quadrilaterals. In the parallelogram $ABCD$, the angle $\angle A$ is $50^\circ$ larger than the angle $\angle B$. Find the four angles of the parallelogram, then check with the angle sum of a quadrilateral.

::hint
**What you need:** $\angle A+\angle B=180^\circ$; the four angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Write $\angle A+\angle B=180^\circ$ and $\angle A-\angle B=50^\circ$.
2. Find $\angle A$, $\angle B$, then the opposite angles.

::solution
Adding $\angle A+\angle B=180^\circ$ and $\angle A-\angle B=50^\circ$ gives $2\angle A=230^\circ$, so $\angle A=115^\circ$ and $\angle B=65^\circ$. Hence $\angle C=\angle A=115^\circ$ and $\angle D=\angle B=65^\circ$.

Check: $115^\circ+65^\circ+115^\circ+65^\circ=360^\circ$.

So the four angles are $115^\circ$, $65^\circ$, $115^\circ$, $65^\circ$.

**Answer.** $115^\circ$, $65^\circ$, $115^\circ$, $65^\circ$.
:::

:::exercise Challenge
The parallelogram $ABCD$ has $AD=5$ cm and $AB=8$ cm. The bisector of the angle $\angle A$ meets the side $CD$ at $E$. Prove that triangle $ADE$ is isosceles, then find $EC$.

::hint
**What you need:** $AB\parallel CD$, so alternate angles are equal; a triangle with two equal angles is isosceles.

**Steps:**
1. Prove that $\angle DEA=\angle DAE$.
2. Use $DE=DA$ and $CD=AB$ to find $EC$.

::solution
Since $AE$ bisects $\angle A$, we have $\angle DAE=\angle EAB$. Since $AB\parallel CD$, we have $\angle DEA=\angle EAB$ (alternate angles). Hence $\angle DEA=\angle DAE$, so triangle $ADE$ is isosceles at $D$, and $DE=DA=5$ cm.

Since $CD=AB=8$ cm, we get $EC=CD-DE=8-5=3$ (cm).

So triangle $ADE$ is isosceles at $D$ and $EC=3$ cm.

**Answer.** $EC=3$ cm.
:::

## Mini test

:::quiz
::mc
The parallelogram $ABCD$ has $AB=7$ cm and $AD=4$ cm. Its perimeter equals
A. $11$ cm.
B. $28$ cm.
C. $22$ cm.
D. $14$ cm.
::key C
The perimeter is $2(7+4)=22$ cm. A adds only two adjacent sides, B multiplies wrongly, D is $2\cdot7$.

::mc
Which property holds for every parallelogram?
A. The two diagonals are equal.
B. The two diagonals are perpendicular.
C. Two adjacent angles are equal.
D. The two diagonals bisect each other.
::key D
The diagonals of a parallelogram bisect each other. A holds for a rectangle, B holds for a rhombus, C is false because adjacent angles add up to $180^\circ$.

::mc
The parallelogram $ABCD$ has $\angle A=70^\circ$. The angle $\angle C$ equals
A. $70^\circ$.
B. $110^\circ$.
C. $20^\circ$.
D. $140^\circ$.
::key A
Opposite angles are equal, so $\angle C=\angle A=70^\circ$. B is the angle $\angle B$, C takes $90^\circ-70^\circ$, D takes $2\cdot70^\circ$.

::mc
Which quadrilateral is certainly a parallelogram?
A. A quadrilateral with two equal opposite sides.
B. A quadrilateral with two opposite sides that are parallel and equal.
C. A quadrilateral whose diagonals meet.
D. A quadrilateral with equal diagonals.
::key B
Two opposite sides that are both parallel and equal is a test for a parallelogram. A and D also hold for an isosceles trapezium, C holds for every convex quadrilateral.

::tf
The parallelogram $ABCD$ has diagonals meeting at $O$, with $AC=10$ cm and $BD=6$ cm.
a) $OA=5$ cm.
b) $OB=3$ cm.
c) $\angle A+\angle B=180^\circ$.
d) $AB=BC$.
::key T T T F
a) True: $OA=AC\div2=5$. b) True: $OB=BD\div2=3$. c) True: adjacent angles add up to $180^\circ$. d) False: adjacent sides of a parallelogram are not necessarily equal.

::sa
A parallelogram has adjacent sides $12$ cm and $9$ cm. Find the perimeter (cm).
::key 42
The perimeter is $2(12+9)=42$ cm.

::sa
The parallelogram $ABCD$ has $AC=14$ cm and $BD=10$ cm, and its diagonals meet at $O$. Find $OA+OB$ (cm).
::key 12
$OA=7$ cm and $OB=5$ cm, so $OA+OB=12$ cm.
:::
