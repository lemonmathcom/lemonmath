---
title: The midsegment of a triangle
description: Learn the midsegment of a triangle, which is parallel to the third side and half as long, then find lengths, prove statements and solve real problems.
minutes: 35
---

:::goals
- Recognise the midsegment of a triangle from its definition.
- State and prove the midsegment property: it is parallel to the third side and half as long.
- Know the test: a line through the midpoint of one side and parallel to a second side passes through the midpoint of the third side.
- Use midsegments to find lengths, to prove statements and to solve real problems.
:::

Suppose two points $A$ and $B$ lie at opposite ends of a pond, so we cannot stretch a tape straight from $A$ to $B$. Someone chooses a point $C$ outside the pond, takes the midpoint $M$ of $CA$ and the midpoint $N$ of $CB$, and measures $MN=18.5$ m.

From the length $MN$, can we find the distance $AB$? The answer lies in the **midsegment of a triangle**, a result that follows directly from the intercept theorem.

## The midsegment of a triangle

:::definition Midsegment of a triangle
A **midsegment** (midline) of a triangle is the segment joining the midpoints of two of its sides.
:::

Every triangle has three midsegments. In triangle $ABC$, if $D$ is the midpoint of $AB$ and $E$ is the midpoint of $AC$, then $DE$ is the midsegment corresponding to the side $BC$.

### Explore: what is special about a midsegment?

Since $D$ and $E$ are the midpoints of $AB$ and $AC$, we have $\dfrac{AD}{AB}=\dfrac12$ and $\dfrac{AE}{AC}=\dfrac12$. The two ratios are equal, and the converse of the intercept theorem gives $DE\parallel BC$. What about the length of $DE$ compared with $BC$? On the drawing, $DE$ looks half as long as $BC$.

:::diagram The midsegment $DE$ of triangle $ABC$
alt: Triangle ABC with D the midpoint of AB and E the midpoint of AC; segment DE is parallel to the base BC, segments AD and DB have one tick and AE and EC have two ticks
point A 0,6 above
point B -4,0 below-left
point C 5,0 below-right
point D -2,3 left
point E 2.5,3 right
polygon A B C
segment D E
mark A D 1
mark D B 1
mark A E 2
mark E C 2
:::

:::theorem Midsegment property
The midsegment of a triangle is parallel to the third side and is half as long as that side.

For triangle $ABC$ with $D$ the midpoint of $AB$ and $E$ the midpoint of $AC$, we have
$$DE\parallel BC\qquad\text{and}\qquad DE=\frac12BC.$$
:::

Why? Since $D$ and $E$ are the midpoints of $AB$ and $AC$, $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac12$. By the converse of the intercept theorem, $DE\parallel BC$.

To find $DE$, draw through $E$ the line parallel to $AB$, meeting $BC$ at $F$. In triangle $ABC$, $EF\parallel AB$, so by the intercept theorem $\dfrac{CF}{CB}=\dfrac{CE}{CA}=\dfrac12$. Hence $F$ is the midpoint of $BC$ and $BF=\dfrac12BC$. Quadrilateral $DEFB$ has $DE\parallel BF$ and $EF\parallel DB$, so it is a parallelogram, and therefore $DE=BF=\dfrac12BC$.

:::theorem A test using midpoints
A line through the midpoint of one side of a triangle and parallel to a second side passes through the midpoint of the third side.
:::

Why? In triangle $ABC$, let $D$ be the midpoint of $AB$, and let the line through $D$ parallel to $BC$ meet $AC$ at $E$. By the intercept theorem, $\dfrac{AE}{AC}=\dfrac{AD}{AB}=\dfrac12$, so $E$ is the midpoint of $AC$.

## Examples

We start with the simplest length calculation.

:::example Finding the length of a midsegment
Triangle $ABC$ has $BC=14$ cm. Let $D$ and $E$ be the midpoints of $AB$ and $AC$. Find $DE$.

**Solution.** $DE$ is a midsegment of triangle $ABC$, so $DE=\dfrac12BC=\dfrac12\cdot14=7$ (cm). Also $DE\parallel BC$.

So $DE=7$ cm.
:::

Next we work backwards from the midsegment.

:::example Finding the third side
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$, and $DE=5$ cm. Find $BC$.

**Solution.** $DE$ is a midsegment, so $DE=\dfrac12BC$. Hence $BC=2DE=2\cdot5=10$ (cm).

So $BC=10$ cm.
:::

Now we use all three midsegments.

:::example Perimeter of the triangle formed by three midpoints
Triangle $ABC$ has $AB=10$ cm, $BC=12$ cm and $CA=8$ cm. Let $D$, $E$, $F$ be the midpoints of $AB$, $BC$, $CA$. Find the perimeter of triangle $DEF$.

**Solution.** The segments $DE$, $EF$, $FD$ are midsegments of triangle $ABC$, so
$$DE=\frac12CA=4,\qquad EF=\frac12AB=5,\qquad FD=\frac12BC=6\ (\text{cm}).$$
The perimeter of triangle $DEF$ is $4+5+6=15$ (cm). The perimeter of triangle $ABC$ is $10+12+8=30$ cm, and $15$ is exactly half of $30$.

So the perimeter of triangle $DEF$ is $15$ cm.
:::

We can also use a midsegment to find an unknown.

:::example Finding $x$
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. Given $DE=(x+1)$ cm and $BC=(3x-1)$ cm, find $x$ and $BC$.

**Solution.** Since $DE$ is a midsegment, $BC=2DE$, that is $3x-1=2(x+1)$. So $3x-1=2x+2$ and $x=3$. Then $BC=3\cdot3-1=8$ (cm) and $DE=3+1=4$ (cm), which is exactly half of $BC$.

So $x=3$ and $BC=8$ cm.
:::

Now we use midsegments to prove a statement.

:::example The midpoints of the sides of a quadrilateral
Let $ABCD$ be a quadrilateral. Let $E$, $F$, $G$, $H$ be the midpoints of $AB$, $BC$, $CD$, $DA$. Prove that $EFGH$ is a parallelogram.

**Solution.** In triangle $ABC$, $EF$ is a midsegment, so $EF\parallel AC$ and $EF=\dfrac12AC$. In triangle $ADC$, $HG$ is a midsegment, so $HG\parallel AC$ and $HG=\dfrac12AC$. Hence $EF\parallel HG$ and $EF=HG$.

Quadrilateral $EFGH$ has one pair of opposite sides that are parallel and equal, so it is a parallelogram.

So $EFGH$ is a parallelogram.
:::

Finally, the pond from the start of the lesson.

:::example Measuring a distance across a pond (Application)
Suppose two points $A$ and $B$ lie at opposite ends of a pond. Choose a point $C$ outside the pond, and let $M$ and $N$ be the midpoints of $CA$ and $CB$. Measuring gives $MN=18.5$ m. Find the distance $AB$.

**Solution.**

*Understand.* We cannot measure $AB$ directly, but we can measure $MN$ on dry land. We need the relation between $MN$ and $AB$.

*Plan.* $M$ and $N$ are the midpoints of two sides $CA$ and $CB$ of triangle $CAB$, so $MN$ is the midsegment corresponding to the side $AB$.

*Carry out.* Since $MN$ is a midsegment of triangle $CAB$, $MN=\dfrac12AB$. So $AB=2MN=2\cdot18.5=37$ (m).

So the distance $AB$ is $37$ m.

*Look back.* Check: half of $37$ m is $18.5$ m, which is $MN$. Also $MN\parallel AB$, so $M$ and $N$ lie on a line parallel to $AB$, and the measurement never has to cross the water.
:::

:::warning Common mistakes
- **Joining any two points on two sides.** Wrong: for any $D\in AB$ and $E\in AC$, $DE\parallel BC$ and $DE=\dfrac12BC$. Why it is wrong: the property holds only when $D$ and $E$ are midpoints. Right: first check that $D$ and $E$ are the midpoints of the two sides.
- **Forgetting the half.** Wrong: $DE=BC$ or $DE=2BC$. Why it is wrong: a midsegment is half the third side, so it is shorter than that side. Right: $DE=\dfrac12BC$, or $BC=2DE$.
- **Confusing a midsegment with a median.** Wrong: the segment joining the vertex $A$ to the midpoint $M$ of $BC$ is a midsegment. Why it is wrong: $AM$ joins a vertex to the midpoint of the opposite side, which is a median, and it is parallel to no side. Right: a midsegment joins the midpoints of two sides.
- **Choosing the wrong parallel side.** Wrong: $DE$ is the midsegment corresponding to $BC$, so $DE\parallel AB$. Why it is wrong: $DE$ is parallel only to the side it does not meet, which is $BC$. Right: $DE\parallel BC$ and $DE=\dfrac12BC$.
:::

**Connection.** The midsegment is a direct consequence of the intercept theorem and its converse from the previous lesson, and its proof also uses a parallelogram. With parallelograms, rectangles and rhombuses, midsegments help us prove many properties of the quadrilateral formed by the midpoints of the sides.

## Key terms

:::terms
- midsegment (midline) | đường trung bình
- midpoint | trung điểm
- parallel | song song
- median | đường trung tuyến
- parallelogram | hình bình hành
- intercept theorem (Thales' theorem) | định lí Thalès
- converse of the intercept theorem | định lí Thalès đảo
- perimeter | chu vi
- third side | cạnh thứ ba
:::

## Summary

- A midsegment of a triangle is the segment joining the midpoints of two sides; every triangle has three midsegments.
- A midsegment is parallel to the third side and half as long: $DE\parallel BC$ and $DE=\dfrac12BC$.
- A line through the midpoint of one side and parallel to a second side passes through the midpoint of the third side.
- The triangle formed by the midpoints of the three sides has half the perimeter of the original triangle.
- A midsegment is not a median: a median joins a vertex to the midpoint of the opposite side.

## Practice

Each exercise has the key facts and a hint on the steps. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ has $BC=18$ cm. Let $D$ and $E$ be the midpoints of $AB$ and $AC$. Find $DE$.

::hint
**What you need:** a midsegment is half the third side.

**Steps:**
1. Recognise that $DE$ is a midsegment.
2. Take half of $BC$.

::solution
$DE$ is a midsegment of triangle $ABC$, so $DE=\dfrac12BC=\dfrac12\cdot18=9$ (cm).

So $DE=9$ cm.

**Answer.** $9$ cm.
:::

:::exercise
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$, and $DE=7.5$ cm. Find $BC$.

::hint
**What you need:** $BC=2DE$.

**Steps:**
1. Recognise that $DE$ is a midsegment.
2. Double $DE$.

::solution
Since $DE$ is a midsegment, $BC=2DE=2\cdot7.5=15$ (cm).

So $BC=15$ cm.

**Answer.** $15$ cm.
:::

:::exercise
Triangle $ABC$ has $AB=10$ cm, $BC=14$ cm and $CA=12$ cm. Let $D$, $E$, $F$ be the midpoints of $AB$, $BC$, $CA$. Find the perimeter of triangle $DEF$.

::hint
**What you need:** $DE$, $EF$, $FD$ are the three midsegments of triangle $ABC$.

**Steps:**
1. Find $DE$, $EF$, $FD$ from the sides of triangle $ABC$.
2. Add the three lengths.

::solution
We have $DE=\dfrac12CA=6$ cm, $EF=\dfrac12AB=5$ cm and $FD=\dfrac12BC=7$ cm. The perimeter of triangle $DEF$ is $6+5+7=18$ (cm).

So the perimeter of triangle $DEF$ is $18$ cm.

**Answer.** $18$ cm.
:::

:::exercise
Triangle $ABC$ has $\angle B=60^\circ$ and $\angle C=75^\circ$. Let $D$ and $E$ be the midpoints of $AB$ and $AC$. Find $\angle ADE$ and $\angle AED$.

::hint
**What you need:** $DE\parallel BC$, so corresponding angles are equal.

**Steps:**
1. Show that $DE\parallel BC$.
2. Use the pairs of corresponding angles.

::solution
Since $DE$ is a midsegment, $DE\parallel BC$. Hence $\angle ADE=\angle B=60^\circ$ and $\angle AED=\angle C=75^\circ$ (pairs of corresponding angles).

So $\angle ADE=60^\circ$ and $\angle AED=75^\circ$.

**Answer.** $\angle ADE=60^\circ$; $\angle AED=75^\circ$.
:::

:::exercise
Let $ABC$ be a triangle and $D$ the midpoint of $AB$. The line through $D$ parallel to $BC$ meets $AC$ at $E$. Prove that $E$ is the midpoint of $AC$.

::hint
**What you need:** the intercept theorem in triangle $ABC$ with $DE\parallel BC$.

**Steps:**
1. Write $\dfrac{AE}{AC}=\dfrac{AD}{AB}$.
2. Use $AD=\dfrac12AB$.

::solution
Since $DE\parallel BC$, the intercept theorem gives $\dfrac{AE}{AC}=\dfrac{AD}{AB}$. Since $D$ is the midpoint of $AB$, $\dfrac{AD}{AB}=\dfrac12$. Hence $\dfrac{AE}{AC}=\dfrac12$, that is $AE=\dfrac12AC$.

So $E$ is the midpoint of $AC$.

**Answer.** $E$ is the midpoint of $AC$.
:::

:::exercise
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. Given $DE=(2x+1)$ cm and $BC=(5x-4)$ cm, find $x$ and $BC$.

::hint
**What you need:** $BC=2DE$.

**Steps:**
1. Form the equation $5x-4=2(2x+1)$.
2. Solve it, then find $BC$.

::solution
Since $DE$ is a midsegment, $BC=2DE$, that is $5x-4=2(2x+1)=4x+2$. So $x=6$. Then $DE=2\cdot6+1=13$ (cm) and $BC=5\cdot6-4=26$ (cm).

So $x=6$ and $BC=26$ cm.

**Answer.** $x=6$; $BC=26$ cm.
:::

:::exercise
Suppose two points $A$ and $B$ lie on opposite banks of a marsh. Choose a point $C$ on dry land, let $M$ and $N$ be the midpoints of $CA$ and $CB$, and measure $MN=23$ m. Find the distance $AB$.

::hint
**What you need:** $MN$ is a midsegment of triangle $CAB$.

**Steps:**
1. Recognise that $MN$ is the midsegment corresponding to $AB$.
2. Double $MN$.

::solution
$MN$ is a midsegment of triangle $CAB$, so $AB=2MN=2\cdot23=46$ (m).

So the distance $AB$ is $46$ m.

**Answer.** $46$ m.
:::

:::exercise
Suppose a triangular roof frame $ABC$ has base $BC=7.2$ m and a side $AB=5$ m. A crossbar $DE$ joins the midpoint $D$ of $AB$ to the midpoint $E$ of $AC$. Find the length of the crossbar $DE$ and of the segment $AD$. Is $DE$ horizontal (parallel to the base)?

::hint
**What you need:** $DE$ is a midsegment of triangle $ABC$.

**Steps:**
1. Find $DE=\dfrac12BC$.
2. Find $AD=\dfrac12AB$ and state the position of $DE$.

::solution
$DE$ is a midsegment, so $DE=\dfrac12BC=\dfrac12\cdot7.2=3.6$ (m) and $DE\parallel BC$; that is, $DE$ is horizontal when the base $BC$ is horizontal. Since $D$ is the midpoint of $AB$, $AD=\dfrac12\cdot5=2.5$ (m).

So $DE=3.6$ m, $AD=2.5$ m and $DE$ is parallel to the base.

**Answer.** $DE=3.6$ m; $AD=2.5$ m; $DE\parallel BC$.
:::

:::exercise
Recall the lesson on rectangles. Rectangle $ABCD$ has $AC=10$ cm. Let $E$, $F$, $G$, $H$ be the midpoints of $AB$, $BC$, $CD$, $DA$. Prove that $EFGH$ is a rhombus and find its perimeter.

::hint
**What you need:** the midsegment of a triangle; the diagonals of a rectangle are equal; a rhombus is a quadrilateral with four equal sides.

**Steps:**
1. Find the sides $EF$, $FG$, $GH$, $HE$ in terms of $AC$ and $BD$.
2. Use $AC=BD$.

::solution
In triangles $ABC$, $BCD$, $CDA$, $DAB$, the segments $EF$, $FG$, $GH$, $HE$ are midsegments, so $EF=GH=\dfrac12AC$ and $FG=HE=\dfrac12BD$. The diagonals of a rectangle are equal, $AC=BD=10$ cm, so $EF=FG=GH=HE=5$ cm. A quadrilateral with four equal sides is a rhombus.

The perimeter of $EFGH$ is $4\cdot5=20$ (cm).

So $EFGH$ is a rhombus with perimeter $20$ cm.

**Answer.** $EFGH$ is a rhombus; perimeter $20$ cm.
:::

:::exercise Challenge
Let $ABCD$ be a quadrilateral. Let $E$ and $F$ be the midpoints of $AB$ and $CD$. Prove that
$$EF\le\frac{AD+BC}{2}.$$

::hint
**What you need:** the midsegment of a triangle; the triangle inequality (or $EF\le EG+GF$ for any three points).

**Steps:**
1. Let $G$ be the midpoint of $AC$.
2. Find $EG$ and $GF$ using midsegments, then apply the triangle inequality to $E$, $G$, $F$.

::solution
Let $G$ be the midpoint of $AC$. In triangle $ABC$, $EG$ is a midsegment, so $EG=\dfrac12BC$. In triangle $ACD$, $GF$ is a midsegment, so $GF=\dfrac12AD$.

For the three points $E$, $G$, $F$, the triangle inequality gives $EF\le EG+GF$ (with equality when $E$, $G$, $F$ are collinear). Hence
$$EF\le\frac12BC+\frac12AD=\frac{AD+BC}{2}.$$

So $EF\le\dfrac{AD+BC}{2}$.

**Answer.** The inequality is proved.
:::

## Mini test

:::quiz
::mc
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$, and $BC=20$ cm. The length $DE$ is
A. $5$ cm.
B. $40$ cm.
C. $10$ cm.
D. $20$ cm.
::key C
$DE$ is a midsegment, so $DE=\dfrac12BC=10$ cm. A is a quarter of $BC$, B is $2BC$ and D is $BC$ itself.

::mc
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$, and $DE=6$ cm. The length $BC$ is
A. $3$ cm.
B. $18$ cm.
C. $6$ cm.
D. $12$ cm.
::key D
$BC=2DE=12$ cm. A is half of $DE$, C is $DE$ itself and B is $3DE$.

::mc
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. Which statement is correct?
A. $DE\parallel BC$ and $DE=\dfrac12BC$.
B. $DE\parallel BC$ and $DE=BC$.
C. $DE\parallel AC$ and $DE=\dfrac12AC$.
D. $DE\parallel AB$ and $DE=\dfrac12AB$.
::key A
The midsegment $DE$ is parallel to the third side $BC$ and half as long. A and C name the wrong parallel side, and B leaves out the half.

::mc
Triangle $ABC$ has perimeter $24$ cm. The triangle formed by the midpoints of the three sides has perimeter
A. $6$ cm.
B. $12$ cm.
C. $24$ cm.
D. $48$ cm.
::key B
Each side of the midpoint triangle is half the corresponding side, so its perimeter is $24:2=12$ cm. B is $24:4$, C is the original perimeter and D is $2\cdot24$.

::tf
Triangle $ABC$ has $BC=16$ cm; $M$ and $N$ are the midpoints of $AB$ and $AC$.
a) $MN\parallel BC$.
b) $MN=16$ cm.
c) $AM=\dfrac12AB$.
d) $MN\parallel AB$.
::key T F T F
a) True: $MN$ is the midsegment corresponding to $BC$. b) False: $MN=\dfrac12BC=8$ cm. c) True: $M$ is the midpoint of $AB$. d) False: $MN$ meets $AB$ at $M$, so it is not parallel to $AB$.

::sa
Triangle $ABC$ has $AB=10$ cm, $AC=14$ cm and $BC=16$ cm. Let $D$, $E$, $F$ be the midpoints of $AB$, $AC$, $BC$. Find the perimeter of triangle $DEF$ (cm).
::key 20
The perimeter of triangle $ABC$ is $10+14+16=40$ cm, so the perimeter of triangle $DEF$ is $40:2=20$ cm.

::sa
In triangle $ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$, and $DE=4.5$ cm. Find $BC$ (cm).
::key 9
$BC=2DE=2\cdot4.5=9$ cm.
:::
