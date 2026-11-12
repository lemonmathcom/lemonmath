---
title: Rectangles
description: Recognise rectangles, learn the properties of their diagonals, the tests for a rectangle and the median of a right triangle, then apply them.
minutes: 35
---

:::goals
- Recognise a rectangle and know that it is a special parallelogram and a special isosceles trapezium.
- Know and prove the property of the diagonals of a rectangle.
- Know the tests for a rectangle.
- Use the median to the hypotenuse of a right triangle, find lengths and solve real problems.
:::

Suppose a carpenter builds a window frame $90$ cm wide and $120$ cm high. He has cut two horizontal bars $90$ cm long and two vertical bars $120$ cm long, but has no set square at hand. Once joined, the frame may lean over into a parallelogram.

How can he check that the frame has four right angles using only a tape measure? The answer lies in the two diagonals of a **rectangle**, and this lesson gives us the facts we need.

## Rectangles

### Explore: from a parallelogram to four right angles

We know that in a parallelogram $ABCD$, opposite angles are equal and adjacent angles add up to $180^\circ$. If one angle, say $\angle A$, equals $90^\circ$, then $\angle C=90^\circ$ and $\angle B=\angle D=180^\circ-90^\circ=90^\circ$. Then all four angles are right angles. We give a name to a quadrilateral with four right angles.

:::definition Rectangle
A **rectangle** is a quadrilateral with four right angles.
:::

:::diagram Rectangle $ABCD$
alt: Rectangle ABCD with four right angles at A, B, C, D, side AB horizontal and longer than side BC
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point D 0,6 above-left
polygon A B C D
right D A B
right A B C
right B C D
right C D A
:::

A rectangle has equal opposite angles (all $90^\circ$), so it is a parallelogram. A rectangle is also an isosceles trapezium, because it has two parallel opposite sides and equal base angles. So every property of a parallelogram and of an isosceles trapezium holds for a rectangle.

## Properties of a rectangle

:::theorem Property of the diagonals of a rectangle
In a rectangle, the two diagonals are equal and bisect each other.
:::

Why? A rectangle is a parallelogram, so its diagonals bisect each other at a point $O$. A rectangle is also an isosceles trapezium, so its diagonals are equal. We can also prove it directly: the two right triangles $ABC$ and $DCB$ have $AB=DC$, the common side $BC$, and $\angle ABC=\angle DCB=90^\circ$, so $AC=DB$.

:::diagram The two diagonals of a rectangle are equal and meet at $O$
alt: Rectangle ABCD with the diagonals AC and BD meeting at O; the four segments OA, OB, OC, OD carry the same number of tick marks, so they are equal
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point D 0,6 above-left
point O 4,3 below
polygon A B C D
segment A C
segment B D
mark A O 1
mark B O 1
mark C O 1
mark D O 1
:::

Since the diagonals are equal and bisect each other, $OA=OB=OC=OD$, and each segment is half of a diagonal.

From the rectangle we get a very useful property of right triangles. The triangle $ABC$ with a right angle at $B$ is half of the rectangle $ABCD$ (cut along the diagonal $AC$), and $BO$ joins $B$ to the midpoint $O$ of the hypotenuse $AC$.

:::theorem Median to the hypotenuse
In a right triangle, the median to the hypotenuse equals half of the hypotenuse.
:::

:::diagram The median $BO$ to the hypotenuse $AC$
alt: Right triangle ABC with the right angle at B and the midpoint O of the hypotenuse AC; the segment BO equals OA and OC
point A 0,0 below-left
point B 8,0 below-right
point C 8,6 above-right
point O 4,3 above-left
polygon A B C
segment B O
right A B C
mark A O 1
mark O C 1
mark B O 1
:::

Why? We complete the triangle $ABC$, right-angled at $B$, to the rectangle $ABCD$ (with $D$ the reflection of $B$ in $O$). The diagonals $AC$ and $BD$ are equal and bisect each other at $O$, so $BO=\dfrac{BD}{2}=\dfrac{AC}{2}$.

## Tests for a rectangle

:::theorem Tests for a rectangle
A quadrilateral is a rectangle if it has one of the following:
1. Three right angles.
2. A parallelogram with one right angle.
3. A parallelogram with equal diagonals.
:::

Test 1 holds because the angles of a quadrilateral add up to $360^\circ$, so the fourth angle equals $360^\circ-3\cdot90^\circ=90^\circ$. Test 2 was explained in the exploration. Test 3 is proved in the practice section.

## Examples

We begin with the test of three right angles.

:::example A quadrilateral with three right angles
The quadrilateral $ABCD$ has $\angle A=\angle B=\angle C=90^\circ$. Prove that $ABCD$ is a rectangle.

**Solution.** The four angles of a quadrilateral add up to $360^\circ$, so
$$\angle D=360^\circ-(90^\circ+90^\circ+90^\circ)=90^\circ.$$
The quadrilateral $ABCD$ has four right angles.

So $ABCD$ is a rectangle.
:::

Next we find a diagonal with Pythagoras' theorem.

:::example Diagonal, perimeter and area
The rectangle $ABCD$ has $AB=8$ cm and $BC=6$ cm. Find $AC$, $BD$, $OA$ (where $O$ is the intersection of the diagonals), the perimeter and the area.

**Solution.** Triangle $ABC$ is right-angled at $B$, so by Pythagoras' theorem:
$$AC^2=AB^2+BC^2=8^2+6^2=100,\quad\text{so}\quad AC=10\ (\text{cm}).$$
The diagonals are equal, so $BD=AC=10$ cm, and $OA=\dfrac{AC}{2}=5$ cm. The perimeter is $2(8+6)=28$ cm and the area is $8\cdot6=48$ cm².

So $AC=BD=10$ cm, $OA=5$ cm, the perimeter is $28$ cm and the area is $48$ cm².
:::

Now the angle between the two diagonals.

:::example The angle at the intersection of the diagonals
The rectangle $ABCD$ has diagonals meeting at $O$ and $\angle CAB=35^\circ$. Find $\angle AOB$ and $\angle BOC$.

**Solution.** Since $OA=OB$, triangle $OAB$ is isosceles at $O$, so $\angle OBA=\angle OAB=35^\circ$. Hence
$$\angle AOB=180^\circ-2\cdot35^\circ=110^\circ.$$
The angles $\angle AOB$ and $\angle BOC$ are supplementary, so $\angle BOC=180^\circ-110^\circ=70^\circ$.

So $\angle AOB=110^\circ$ and $\angle BOC=70^\circ$.
:::

We also use the test for a parallelogram.

:::example Recognising a rectangle from a parallelogram
The parallelogram $ABCD$ has $AB=6$ cm, $BC=8$ cm and $AC=10$ cm. Prove that $ABCD$ is a rectangle.

**Solution.** In triangle $ABC$ we have $AB^2+BC^2=6^2+8^2=100=10^2=AC^2$. By the converse of Pythagoras' theorem, triangle $ABC$ has a right angle at $B$, that is, $\angle ABC=90^\circ$.

The parallelogram $ABCD$ has a right angle, so by the test, $ABCD$ is a rectangle.

So $ABCD$ is a rectangle.
:::

Now we use the median of a right triangle.

:::example Median of a right triangle
The triangle $ABC$ has a right angle at $A$, with $AB=9$ cm and $AC=12$ cm. Let $M$ be the midpoint of $BC$. Find $AM$.

**Solution.** By Pythagoras' theorem, $BC^2=AB^2+AC^2=81+144=225$, so $BC=15$ cm. Since $AM$ is the median to the hypotenuse $BC$,
$$AM=\dfrac{BC}{2}=\dfrac{15}{2}=7.5\ (\text{cm}).$$
So $AM=7.5$ cm.
:::

Finally, the window frame from the start.

:::example Checking a window frame (Application)
Suppose a window frame $ABCD$ is made from two bars $AB=CD=90$ cm and two bars $BC=DA=120$ cm. How long must the two diagonals be for the frame to be a rectangle? If we measure $AC=152$ cm and $BD=146$ cm, is the frame a rectangle?

**Solution.**

*Understand the problem.* The two pairs of opposite bars are equal, so the frame is a parallelogram. We need to know when it has four right angles.

*Plan.* A parallelogram with equal diagonals is a rectangle. If the frame is a rectangle, its diagonal can be found with Pythagoras' theorem.

*Carry out the plan.* If $ABCD$ is a rectangle, then triangle $ABC$ is right-angled at $B$ and
$$AC^2=AB^2+BC^2=90^2+120^2=8100+14400=22\,500,$$
so $AC=150$ cm, and $BD=AC=150$ cm. So both diagonals must be $150$ cm.

With $AC=152$ cm and $BD=146$ cm the diagonals are not equal. If the frame were a rectangle, its diagonals would be equal, so the frame is not a rectangle.

So both diagonals must be $150$ cm, and a frame measuring $152$ cm and $146$ cm is not a rectangle.

*Look back.* When $AC=150$ cm we have $AB^2+BC^2=AC^2$, so by the converse of Pythagoras' theorem the angle $\angle ABC$ is a right angle. This lets the carpenter check a right angle with only a tape measure: measure the two diagonals and compare them.
:::

:::warning Common mistakes
- **Two right angles are enough.** Wrong: a quadrilateral with two right angles is a rectangle. Why it is wrong: a right trapezium has two right angles but not four. Right: we need three right angles, or a parallelogram with one right angle.
- **Using the diagonal test for any quadrilateral.** Wrong: a quadrilateral with equal diagonals is a rectangle. Why it is wrong: an isosceles trapezium has equal diagonals but is not a rectangle. Right: it must be a parallelogram with equal diagonals.
- **Saying that the diagonals are perpendicular.** Wrong: the diagonals of a rectangle are perpendicular. Why it is wrong: in a rectangle with unequal sides the diagonals are equal and bisect each other, but they are not perpendicular. Right: they are perpendicular only when the two adjacent sides of the rectangle are equal.
- **Mixing up which side the median is half of.** Wrong: in triangle $ABC$ right-angled at $A$, $AM=\dfrac{AB}{2}$ ($M$ the midpoint of $BC$). Why it is wrong: this median equals half of the hypotenuse. Right: $AM=\dfrac{BC}{2}$.
:::

**Connections.** Rectangles use the properties of parallelograms, isosceles trapeziums and Pythagoras' theorem. The property of the median of a right triangle links the geometry of quadrilaterals with that of triangles. In the next lesson we study rhombuses and squares, other special parallelograms.

## Key terms

:::terms
- rectangle | hình chữ nhật
- right angle | góc vuông
- diagonal | đường chéo
- parallelogram | hình bình hành
- isosceles trapezium | hình thang cân
- median | trung tuyến
- hypotenuse | cạnh huyền
- midpoint | trung điểm
- test | dấu hiệu nhận biết
:::

## Summary

- A rectangle is a quadrilateral with four right angles; it is a parallelogram and an isosceles trapezium.
- In a rectangle the two diagonals are equal and bisect each other.
- Tests: a quadrilateral with three right angles; a parallelogram with one right angle; a parallelogram with equal diagonals.
- In a right triangle, the median to the hypotenuse equals half of the hypotenuse.
- The diagonal of a rectangle is found with Pythagoras' theorem: $d^2=a^2+b^2$.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
The rectangle $ABCD$ has $AB=15$ cm and $BC=8$ cm. Find $AC$, $OA$ (where $O$ is the intersection of the diagonals) and the perimeter.

::hint
**What you need:** Pythagoras' theorem; the diagonals are equal and bisect each other.

**Steps:**
1. Find $AC$ in the right triangle $ABC$.
2. Find $OA$ as half of $AC$, then the perimeter.

::solution
We have $AC^2=15^2+8^2=225+64=289$, so $AC=17$ cm. Then $OA=\dfrac{17}{2}=8.5$ cm. The perimeter is $2(15+8)=46$ cm.

So $AC=17$ cm, $OA=8.5$ cm and the perimeter is $46$ cm.

**Answer.** $AC=17$ cm; $OA=8.5$ cm; perimeter $46$ cm.
:::

:::exercise
The rectangle $ABCD$ has diagonals meeting at $O$ and $\angle OAB=40^\circ$. Find $\angle AOB$ and $\angle BOC$.

::hint
**What you need:** $OA=OB$, so triangle $OAB$ is isosceles at $O$; supplementary angles add up to $180^\circ$.

**Steps:**
1. Find $\angle OBA$, then $\angle AOB$.
2. Find $\angle BOC$.

::solution
Triangle $OAB$ is isosceles at $O$, so $\angle OBA=\angle OAB=40^\circ$. Hence $\angle AOB=180^\circ-2\cdot40^\circ=100^\circ$. The angles $\angle AOB$ and $\angle BOC$ are supplementary, so $\angle BOC=80^\circ$.

So $\angle AOB=100^\circ$ and $\angle BOC=80^\circ$.

**Answer.** $\angle AOB=100^\circ$; $\angle BOC=80^\circ$.
:::

:::exercise
A rectangle has perimeter $34$ cm and its length is $7$ cm more than its width. Find the two sides and the diagonal of the rectangle.

::hint
**What you need:** half the perimeter equals length plus width; Pythagoras' theorem.

**Steps:**
1. Write two equations for the length and the width.
2. Find the diagonal.

::solution
Half the perimeter is $34\div2=17$ cm, so length $+$ width $=17$ cm. The length is $7$ cm more than the width, so the length is $\dfrac{17+7}{2}=12$ cm and the width is $\dfrac{17-7}{2}=5$ cm. The diagonal is $\sqrt{12^2+5^2}=\sqrt{169}=13$ cm.

So the two sides are $12$ cm and $5$ cm, and the diagonal is $13$ cm.

**Answer.** $12$ cm; $5$ cm; diagonal $13$ cm.
:::

:::exercise
The parallelogram $ABCD$ has $\angle A=90^\circ$. Prove that $ABCD$ is a rectangle.

::hint
**What you need:** in a parallelogram, opposite angles are equal and adjacent angles add up to $180^\circ$.

**Steps:**
1. Find $\angle C$ from $\angle A$.
2. Find $\angle B$ and $\angle D$.

::solution
Since $ABCD$ is a parallelogram, $\angle C=\angle A=90^\circ$. The angles $\angle A$ and $\angle B$ are supplementary, so $\angle B=180^\circ-90^\circ=90^\circ$, and $\angle D=\angle B=90^\circ$. The quadrilateral $ABCD$ has four right angles.

So $ABCD$ is a rectangle.

**Answer.** $ABCD$ is a rectangle.
:::

:::exercise
The parallelogram $ABCD$ has equal diagonals, $AC=BD$. Prove that $ABCD$ is a rectangle.

::hint
**What you need:** $AB\parallel CD$, so $\angle ABC+\angle DCB=180^\circ$ (co-interior angles); congruent triangles have equal corresponding angles.

**Steps:**
1. Prove that $\triangle ABC=\triangle DCB$.
2. Deduce that $\angle ABC=\angle DCB$, then calculate.

::solution
Consider the triangles $ABC$ and $DCB$. We have $AB=DC$ (opposite sides of a parallelogram), $BC$ is common and $AC=DB$ (given). Hence $\triangle ABC=\triangle DCB$ (side - side - side), so $\angle ABC=\angle DCB$.

Since $AB\parallel CD$, we have $\angle ABC+\angle DCB=180^\circ$. Together with $\angle ABC=\angle DCB$ this gives $\angle ABC=90^\circ$.

The parallelogram $ABCD$ has a right angle, so it is a rectangle.

**Answer.** $ABCD$ is a rectangle.
:::

:::exercise
The triangle $ABC$ has a right angle at $A$, with $BC=26$ cm and $AB=10$ cm. Let $M$ be the midpoint of $BC$. Find $AM$ and $AC$.

::hint
**What you need:** the median to the hypotenuse equals half of the hypotenuse; Pythagoras' theorem.

**Steps:**
1. Find $AM$ as half of $BC$.
2. Find $AC$ with Pythagoras' theorem.

::solution
Since $AM$ is the median to the hypotenuse $BC$, $AM=\dfrac{26}{2}=13$ cm. By Pythagoras' theorem, $AC^2=BC^2-AB^2=676-100=576$, so $AC=24$ cm.

So $AM=13$ cm and $AC=24$ cm.

**Answer.** $AM=13$ cm; $AC=24$ cm.
:::

:::exercise
Suppose a plot of land is a rectangle $40$ m long and $30$ m wide. A person walks from corner $A$ to the opposite corner $C$ along the diagonal path instead of along the two sides. How many metres shorter is the walk?

::hint
**What you need:** Pythagoras' theorem for the diagonal; walking along the two sides is $40+30$ m.

**Steps:**
1. Find the length of the diagonal.
2. Subtract it from $40+30$.

::solution
The diagonal is $\sqrt{40^2+30^2}=\sqrt{2500}=50$ (m). Along the two sides the person walks $40+30=70$ (m). The diagonal is shorter by $70-50=20$ (m).

So the walk is $20$ m shorter.

**Answer.** $20$ m.
:::

:::exercise
Suppose a screen is a rectangle $80$ cm wide and $60$ cm high. Find the length of its diagonal, then convert it to inches (given $1$ inch $=2.54$ cm, rounded to one decimal place).

::hint
**What you need:** the diagonal of a rectangle: $d=\sqrt{a^2+b^2}$.

**Steps:**
1. Find the diagonal in cm.
2. Divide by $2.54$.

::solution
The diagonal is $\sqrt{80^2+60^2}=\sqrt{10\,000}=100$ (cm). In inches: $100\div2.54\approx39.4$ (inches).

So the diagonal of the screen is $100$ cm, about $39.4$ inches.

**Answer.** $100$ cm; about $39.4$ inches.
:::

:::exercise
Recall the properties of a parallelogram. The parallelogram $ABCD$ has $\angle A=\angle B$. Prove that $ABCD$ is a rectangle.

::hint
**What you need:** in a parallelogram, $\angle A+\angle B=180^\circ$ and opposite angles are equal.

**Steps:**
1. Find $\angle A$ and $\angle B$.
2. Use opposite angles to find $\angle C$ and $\angle D$.

::solution
Since $\angle A+\angle B=180^\circ$ and $\angle A=\angle B$, we get $\angle A=\angle B=90^\circ$. Opposite angles are equal, so $\angle C=\angle A=90^\circ$ and $\angle D=\angle B=90^\circ$. The quadrilateral $ABCD$ has four right angles.

So $ABCD$ is a rectangle.

**Answer.** $ABCD$ is a rectangle.
:::

:::exercise Challenge
In triangle $ABC$, $M$ is the midpoint of $BC$ and $AM=\dfrac{BC}{2}$. Prove that triangle $ABC$ has a right angle at $A$.

::hint
**What you need:** $MA=MB=MC$, so there are two isosceles triangles; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Prove that $\angle B=\angle BAM$ and $\angle C=\angle CAM$.
2. Use the angle sum of triangle $ABC$.

::solution
Since $M$ is the midpoint of $BC$, $MB=MC=\dfrac{BC}{2}=AM$. Triangle $MAB$ is isosceles at $M$, so $\angle B=\angle BAM$. Triangle $MAC$ is isosceles at $M$, so $\angle C=\angle CAM$.

Hence $\angle BAC=\angle BAM+\angle CAM=\angle B+\angle C$. In triangle $ABC$ we have $\angle BAC+\angle B+\angle C=180^\circ$, that is, $2\angle BAC=180^\circ$, so $\angle BAC=90^\circ$.

So triangle $ABC$ has a right angle at $A$.

**Answer.** $\angle BAC=90^\circ$.
:::

## Mini test

:::quiz
::mc
A rectangle has sides $6$ cm and $8$ cm. Its diagonal is
A. $10$ cm.
B. $14$ cm.
C. $12$ cm.
D. $100$ cm.
::key A
$d=\sqrt{6^2+8^2}=\sqrt{100}=10$ cm. A adds the two sides, C is a wrong value, D forgets to take the square root.

::mc
Which quadrilateral is certainly a rectangle?
A. A quadrilateral with two right angles.
B. A quadrilateral with three right angles.
C. A quadrilateral with perpendicular diagonals.
D. A quadrilateral with equal diagonals.
::key B
A quadrilateral with three right angles has a fourth right angle, so it is a rectangle. A holds for a right trapezium, D holds for an isosceles trapezium, C holds for a rhombus.

::mc
The triangle $ABC$ has a right angle at $A$ and $BC=20$ cm; $M$ is the midpoint of $BC$. The length $AM$ equals
A. $40$ cm.
B. $20$ cm.
C. $10$ cm.
D. $5$ cm.
::key C
The median to the hypotenuse is half the hypotenuse: $AM=20\div2=10$ cm. B is the hypotenuse, A is twice the hypotenuse, D divides by $4$ by mistake.

::mc
Which statement is true for every rectangle?
A. The diagonals are perpendicular.
B. The diagonals are not equal.
C. All four sides are equal.
D. The diagonals are equal and bisect each other.
::key D
The diagonals of a rectangle are equal and bisect each other. A and C hold only for a square, and B contradicts the property of the diagonals.

::tf
The rectangle $ABCD$ has $AB=12$ cm and $BC=5$ cm, with diagonals meeting at $O$.
a) $AC=BD=13$ cm.
b) $OA=6$ cm.
c) $\angle AOB=90^\circ$.
d) The perimeter is $34$ cm.
::key T F F T
a) True: $\sqrt{144+25}=13$. b) False: $OA=13\div2=6.5$ cm. c) False: the diagonals are not perpendicular because the adjacent sides are different. d) True: $2(12+5)=34$.

::sa
A rectangle has sides $9$ cm and $12$ cm. Find the length of the diagonal (cm).
::key 15
$d=\sqrt{81+144}=\sqrt{225}=15$ cm.

::sa
A right triangle has a hypotenuse of $14$ cm. Find the length of the median to the hypotenuse (cm).
::key 7
The median to the hypotenuse is half the hypotenuse: $14\div2=7$ cm.
:::
