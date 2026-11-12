---
title: Rhombuses and squares
description: Recognise rhombuses and squares, learn their properties and tests for sides, angles and diagonals, then find lengths and angles and solve real problems.
minutes: 35
---

:::goals
- Recognise a rhombus and a square from their definitions.
- Know and prove the properties of the diagonals of a rhombus and of a square.
- Know the tests for a rhombus and for a square.
- Use the properties and tests to find lengths and angles, to prove statements and to solve real problems.
:::

Suppose a garden has a shape with four equal sides. Two straight paths join opposite corners of the garden and cross in the middle; they are $24$ m and $18$ m long. The owner wants to fence all the way round the garden.

How many metres of fence are needed? At what angle do the two paths cross? This garden is a **rhombus**, and this lesson gives us the properties to answer both questions. We also meet the **square**, which is both a rhombus and a rectangle.

## Rhombuses

### Explore: a quadrilateral with four equal sides

Take a quadrilateral $ABCD$ with four equal sides: $AB=BC=CD=DA$. Both pairs of opposite sides are equal, so $ABCD$ is a parallelogram. It is a parallelogram with the extra condition that two adjacent sides are equal. We give this shape a name.

:::definition Rhombus
A **rhombus** is a quadrilateral with four equal sides.
:::

:::diagram Rhombus $ABCD$
alt: Rhombus ABCD with four equal sides, each marked with one tick, and the two diagonals lying horizontally and vertically
point A -4,0 left
point B 0,3 above
point C 4,0 right
point D 0,-3 below
polygon A B C D
mark A B 1
mark B C 1
mark C D 1
mark D A 1
:::

A rhombus is a parallelogram (its opposite sides are equal), so it has every property of a parallelogram: opposite sides are parallel, opposite angles are equal, and the two diagonals bisect each other. A rhombus also has an extra property about its diagonals.

:::theorem Diagonals of a rhombus
In a rhombus:
1. The two diagonals are perpendicular.
2. Each diagonal bisects the angles at the two vertices it passes through.
:::

Why? Let $ABCD$ be a rhombus whose diagonals meet at $O$. Since $ABCD$ is a parallelogram, $O$ is the midpoint of $BD$. Triangle $ABD$ has $AB=AD$, so it is isosceles at $A$, and $AO$ is the median to the base $BD$. In an isosceles triangle the median to the base is also the altitude and the angle bisector. Hence $AO\perp BD$ and $AO$ bisects $\angle BAD$; that is, $AC\perp BD$ and $AC$ bisects $\angle A$. The same argument works at the other vertices.

:::diagram The diagonals of a rhombus are perpendicular and bisect the angles
alt: Rhombus ABCD with diagonals AC and BD meeting at right angles at O; angles BAC and CAD are equal, labelled alpha
point A -4,0 left
point B 0,3 above
point C 4,0 right
point D 0,-3 below
point O 0,0 below-left
polygon A B C D
segment A C
segment B D
right A O B
angle B A C "α"
angle C A D "α"
:::

:::theorem Tests for a rhombus
A quadrilateral is a rhombus if it satisfies one of the following:
1. It has four equal sides.
2. It is a parallelogram with two equal adjacent sides.
3. It is a parallelogram whose diagonals are perpendicular.
4. It is a parallelogram in which one diagonal bisects an angle.
:::

Test 1 is the definition. Test 2 holds because a parallelogram has equal opposite sides, so two equal adjacent sides make all four sides equal. Test 3 is proved in an example below and test 4 in the practice exercises.

## Squares

:::definition Square
A **square** is a quadrilateral with four right angles and four equal sides.
:::

A square has four right angles, so it is a rectangle; it has four equal sides, so it is a rhombus. Hence a square has every property of a rectangle and of a rhombus.

:::theorem Diagonals of a square
In a square, the diagonals are equal, perpendicular and bisect each other, and each diagonal bisects the angles at the two vertices it passes through. Each diagonal makes an angle of $45^\circ$ with the sides.
:::

:::diagram Square $ABCD$ and its diagonals
alt: Square ABCD with diagonals AC and BD meeting at right angles at O; diagonal AC makes 45 degree angles with sides AB and AD
point A 0,0 below-left
point B 5,0 below-right
point C 5,5 above-right
point D 0,5 above-left
point O 2.5,2.5 below
polygon A B C D
segment A C
segment B D
right A O B
angle B A C "45°"
angle C A D "45°"
:::

Why does each diagonal make an angle of $45^\circ$ with the sides? The diagonal $AC$ bisects the right angle $\angle A$, so $\angle BAC=\angle CAD=\dfrac{90^\circ}{2}=45^\circ$.

:::theorem Tests for a square
A quadrilateral is a square if it satisfies one of the following:
1. It is a rectangle with two equal adjacent sides.
2. It is a rectangle whose diagonals are perpendicular.
3. It is a rhombus with one right angle.
4. It is a rhombus whose diagonals are equal.
:::

## Examples

We start with the sides and angles of a rhombus.

:::example Sides, angles and perimeter of a rhombus
Rhombus $ABCD$ has side $7$ cm and $\angle A=70^\circ$. Find the perimeter and the other angles.

**Solution.** A rhombus has four equal sides, so the perimeter is $4\cdot7=28$ (cm). Opposite angles are equal, so $\angle C=\angle A=70^\circ$. Adjacent angles are supplementary, so $\angle B=180^\circ-70^\circ=110^\circ$ and $\angle D=\angle B=110^\circ$.

So the perimeter is $28$ cm, $\angle C=70^\circ$ and $\angle B=\angle D=110^\circ$.
:::

Next we find a side from the two diagonals.

:::example Finding a side from the diagonals
Rhombus $ABCD$ has $AC=8$ cm and $BD=6$ cm. Find the side $AB$ and the perimeter.

**Solution.** The diagonals meet at the midpoint $O$ of each and are perpendicular, so $OA=\dfrac{8}{2}=4$ cm, $OB=\dfrac{6}{2}=3$ cm and triangle $OAB$ has a right angle at $O$. By Pythagoras' theorem,
$$AB^2=OA^2+OB^2=16+9=25,\quad\text{so}\quad AB=5\ (\text{cm}).$$
The perimeter is $4\cdot5=20$ (cm).

So $AB=5$ cm and the perimeter is $20$ cm.
:::

Now we use an angle of $60^\circ$.

:::example A rhombus with a $60^\circ$ angle
Rhombus $ABCD$ has side $6$ cm and $\angle A=60^\circ$. Find $BD$ and $AC$.

**Solution.** Triangle $ABD$ has $AB=AD$ and $\angle A=60^\circ$, so it is equilateral. Hence $BD=AB=6$ cm. Let $O$ be the intersection of the diagonals. Then $OB=3$ cm and triangle $OAB$ has a right angle at $O$, so
$$OA^2=AB^2-OB^2=36-9=27,\quad\text{hence}\quad OA=\sqrt{27}=3\sqrt3.$$
Therefore $AC=2OA=6\sqrt3\approx10.39$ (cm).

So $BD=6$ cm and $AC=6\sqrt3\approx10.39$ cm.
:::

We also use the test about diagonals.

:::example Recognising a rhombus
Parallelogram $ABCD$ has perpendicular diagonals $AC$ and $BD$. Prove that $ABCD$ is a rhombus.

**Solution.** Let $O$ be the intersection of the diagonals. Since $ABCD$ is a parallelogram, $O$ is the midpoint of $BD$. In triangle $ABD$, $AO$ is both a median and an altitude (because $AC\perp BD$), so triangle $ABD$ is isosceles at $A$; that is, $AB=AD$.

Parallelogram $ABCD$ has equal adjacent sides $AB$ and $AD$, so it is a rhombus.

So $ABCD$ is a rhombus.
:::

Now some calculations in a square.

:::example A square
Square $ABCD$ has side $6$ cm. Find the diagonal $AC$ and the angle $\angle OAB$ (where $O$ is the intersection of the diagonals).

**Solution.** Triangle $ABC$ has a right angle at $B$, so by Pythagoras' theorem,
$$AC^2=AB^2+BC^2=36+36=72,\quad\text{hence}\quad AC=\sqrt{72}=6\sqrt2\approx8.49\ (\text{cm}).$$
The diagonal $AC$ bisects the right angle $\angle A$, so $\angle OAB=45^\circ$.

So $AC=6\sqrt2\approx8.49$ cm and $\angle OAB=45^\circ$.
:::

Finally, the garden from the start of the lesson.

:::example Fencing a rhombus-shaped garden (Application)
Suppose a garden is a rhombus $ABCD$ whose diagonals are $AC=24$ m and $BD=18$ m. Find the length of fence needed round the garden. If posts are placed $3$ m apart along the fence (including one at each of the four corners), how many posts are needed?

**Solution.**

*Understand.* The fence runs along the four sides of the rhombus. We need the length of one side, then the perimeter and the number of posts.

*Plan.* The diagonals of a rhombus are perpendicular and bisect each other, so triangle $OAB$ has a right angle at $O$. Use Pythagoras' theorem to find the side.

*Carry out.* Let $O$ be the intersection of the diagonals. Then $OA=\dfrac{24}{2}=12$ m, $OB=\dfrac{18}{2}=9$ m and $\angle AOB=90^\circ$. By Pythagoras' theorem,
$$AB^2=OA^2+OB^2=144+81=225,\quad\text{so}\quad AB=15\ (\text{m}).$$
A rhombus has four equal sides, so the perimeter is $4\cdot15=60$ (m).

Each side is $15$ m long, which is $15:3=5$ gaps of $3$ m, so there are $4\cdot5=20$ gaps round the garden. The fence is a closed loop, so the number of posts equals the number of gaps: $20$ posts.

So the fence is $60$ m long and $20$ posts are needed.

*Look back.* The triple $(9;12;15)$ is a Pythagorean triple ($3$, $4$, $5$ multiplied by $3$), so the side is a whole number. Check: $20$ posts $3$ m apart cover $20\cdot3=60$ m, which equals the perimeter.
:::

:::warning Common mistakes
- **Two equal adjacent sides are enough.** Wrong: a quadrilateral with two equal adjacent sides is a rhombus. Why it is wrong: a kite has two pairs of equal adjacent sides, but its four sides are not all equal. Right: we need four equal sides, or a parallelogram with two equal adjacent sides.
- **The diagonal test works for every quadrilateral.** Wrong: a quadrilateral with perpendicular diagonals is a rhombus. Why it is wrong: a kite has perpendicular diagonals but is not a rhombus. Right: it must be a parallelogram with perpendicular diagonals.
- **The diagonals of a rhombus are equal.** Wrong: the diagonals of a rhombus are equal. Why it is wrong: they are equal only when the rhombus has a right angle, that is, when it is a square. Right: the diagonals of a rhombus are perpendicular and in general not equal.
- **Mixing up rhombus and square.** Wrong: a quadrilateral with four equal sides is a square. Why it is wrong: a rhombus has four equal sides, but its angles need not be right angles. Right: a square needs four equal sides and four right angles.
:::

**Connection.** The rhombus uses the parallelogram, the isosceles triangle and Pythagoras' theorem, and the square is both a rectangle and a rhombus. All these shapes have diagonals that meet at their midpoints, a property that connects to the midline of a triangle in the next lessons.

## Key terms

:::terms
- rhombus | hình thoi
- square | hình vuông
- diagonal | đường chéo
- perpendicular | vuông góc
- angle bisector | tia phân giác
- parallelogram | hình bình hành
- rectangle | hình chữ nhật
- adjacent sides | cạnh kề
- test | dấu hiệu nhận biết
:::

## Summary

- A rhombus is a quadrilateral with four equal sides; it is a parallelogram.
- In a rhombus the diagonals are perpendicular and bisect the angles.
- Tests for a rhombus: four equal sides; a parallelogram with two equal adjacent sides; a parallelogram with perpendicular diagonals; a parallelogram in which a diagonal bisects an angle.
- A square is a quadrilateral with four right angles and four equal sides; it is both a rectangle and a rhombus.
- In a square the diagonals are equal, perpendicular and bisect each other, and they make angles of $45^\circ$ with the sides.

## Practice

Each exercise has the key facts and a hint on the steps. Try it yourself first, then open the solution.

:::exercise
Rhombus $ABCD$ has perimeter $36$ cm and $\angle A=110^\circ$. Find the side $AB$ and the other angles.

::hint
**What you need:** a rhombus has four equal sides; opposite angles are equal and adjacent angles are supplementary.

**Steps:**
1. Divide the perimeter by $4$.
2. Find $\angle C$, $\angle B$ and $\angle D$.

::solution
We have $AB=36:4=9$ cm. Opposite angles are equal, so $\angle C=\angle A=110^\circ$. Adjacent angles are supplementary, so $\angle B=180^\circ-110^\circ=70^\circ$ and $\angle D=\angle B=70^\circ$.

So $AB=9$ cm, $\angle C=110^\circ$ and $\angle B=\angle D=70^\circ$.

**Answer.** $AB=9$ cm; $\angle C=110^\circ$; $\angle B=\angle D=70^\circ$.
:::

:::exercise
Rhombus $ABCD$ has $AC=16$ cm and $BD=12$ cm. Find the side $AB$ and the perimeter.

::hint
**What you need:** the diagonals of a rhombus are perpendicular and bisect each other; Pythagoras' theorem.

**Steps:**
1. Find $OA$ and $OB$.
2. Find $AB$ in the right-angled triangle $OAB$, then the perimeter.

::solution
We have $OA=8$ cm and $OB=6$ cm. By Pythagoras' theorem, $AB^2=8^2+6^2=100$, so $AB=10$ cm. The perimeter is $4\cdot10=40$ cm.

So $AB=10$ cm and the perimeter is $40$ cm.

**Answer.** $AB=10$ cm; perimeter $40$ cm.
:::

:::exercise
Rhombus $ABCD$ has side $13$ cm and diagonal $BD=10$ cm. Find the diagonal $AC$.

::hint
**What you need:** $OB=\dfrac{BD}{2}$; triangle $OAB$ has a right angle at $O$.

**Steps:**
1. Find $OB$.
2. Find $OA$ by Pythagoras' theorem, then $AC=2OA$.

::solution
We have $OB=5$ cm. In the right-angled triangle $OAB$: $OA^2=AB^2-OB^2=169-25=144$, so $OA=12$ cm. Hence $AC=2\cdot12=24$ cm.

So $AC=24$ cm.

**Answer.** $24$ cm.
:::

:::exercise
Rhombus $ABCD$ has $\angle A=80^\circ$. Find $\angle ABD$ and $\angle BAC$.

::hint
**What you need:** triangle $ABD$ is isosceles at $A$; $AC$ bisects $\angle A$.

**Steps:**
1. Find $\angle ABD$ in the isosceles triangle $ABD$.
2. Find $\angle BAC$ as half of $\angle A$.

::solution
Triangle $ABD$ is isosceles at $A$, so $\angle ABD=\dfrac{180^\circ-80^\circ}{2}=50^\circ$. The diagonal $AC$ bisects $\angle A$, so $\angle BAC=\dfrac{80^\circ}{2}=40^\circ$. (Check in triangle $OAB$: $40^\circ+50^\circ+90^\circ=180^\circ$.)

So $\angle ABD=50^\circ$ and $\angle BAC=40^\circ$.

**Answer.** $\angle ABD=50^\circ$; $\angle BAC=40^\circ$.
:::

:::exercise
In parallelogram $ABCD$ the diagonal $AC$ bisects $\angle A$. Prove that $ABCD$ is a rhombus.

::hint
**What you need:** $AD\parallel BC$, so alternate angles are equal; a triangle with two equal angles is isosceles.

**Steps:**
1. Prove that $\angle BAC=\angle ACB$.
2. Deduce that $BA=BC$.

::solution
Since $AC$ bisects $\angle A$, we have $\angle BAC=\angle CAD$. Since $AD\parallel BC$, we have $\angle CAD=\angle ACB$ (alternate angles). Hence $\angle BAC=\angle ACB$, so triangle $ABC$ is isosceles at $B$; that is, $BA=BC$.

Parallelogram $ABCD$ has equal adjacent sides $BA$ and $BC$, so it is a rhombus.

**Answer.** $ABCD$ is a rhombus.
:::

:::exercise
Square $ABCD$ has side $8$ cm. Find the diagonal $AC$ (round to two decimal places).

::hint
**What you need:** Pythagoras' theorem in the right-angled triangle $ABC$.

**Steps:**
1. Find $AC^2$.
2. Take the square root and round.

::solution
We have $AC^2=8^2+8^2=128$, so $AC=\sqrt{128}=8\sqrt2\approx11.31$ (cm).

So $AC\approx11.31$ cm.

**Answer.** $8\sqrt2\approx11.31$ cm.
:::

:::exercise
Suppose a plot of land is a rhombus whose diagonals are $30$ m and $40$ m long. Find the perimeter of the plot.

::hint
**What you need:** the diagonals of a rhombus are perpendicular and bisect each other; Pythagoras' theorem.

**Steps:**
1. Find half of each diagonal.
2. Find the side, then the perimeter.

::solution
Half of the diagonals are $15$ m and $20$ m. The side of the rhombus is $\sqrt{15^2+20^2}=\sqrt{625}=25$ (m). The perimeter is $4\cdot25=100$ (m).

So the perimeter of the plot is $100$ m.

**Answer.** $100$ m.
:::

:::exercise
Suppose a rectangular room $4.8$ m long and $3.2$ m wide is tiled with square tiles of side $40$ cm, laid edge to edge with no tile cut.

a) How many tiles are needed?

b) About how long is the diagonal of one tile, in centimetres?

::hint
**What you need:** convert the units to centimetres; the diagonal of a square of side $a$ is $a\sqrt2$.

**Steps:**
1. Find how many tiles fit along the length and along the width.
2. Find the diagonal by Pythagoras' theorem.

::solution
a) We have $4.8$ m $=480$ cm and $3.2$ m $=320$ cm. Along the length there are $480:40=12$ tiles and along the width $320:40=8$ tiles. The number of tiles is $12\cdot8=96$.

b) The diagonal of a tile is $40\sqrt2\approx56.6$ (cm).

So $96$ tiles are needed, and each tile has a diagonal of about $56.6$ cm.

**Answer.** a) $96$ tiles. b) about $56.6$ cm.
:::

:::exercise
Recall the lesson on rectangles. Prove that a rectangle whose diagonals are perpendicular is a square.

::hint
**What you need:** a rectangle is a parallelogram; a parallelogram with perpendicular diagonals is a rhombus; a square has four right angles and four equal sides.

**Steps:**
1. Use the test for a rhombus.
2. Combine it with the four right angles of the rectangle.

::solution
Rectangle $ABCD$ is a parallelogram. This parallelogram has perpendicular diagonals, so it is a rhombus, and its four sides are equal. A rectangle has four right angles. So $ABCD$ has four right angles and four equal sides.

So $ABCD$ is a square.

**Answer.** $ABCD$ is a square.
:::

:::exercise Challenge
Let $ABCD$ be a square. Points $E$ and $F$ lie on the sides $BC$ and $CD$ so that $BE=CF$. Prove that $AE=BF$ and $AE\perp BF$.

::hint
**What you need:** congruent triangles (side-angle-side); corresponding angles are equal; the two acute angles of a right-angled triangle add up to $90^\circ$.

**Steps:**
1. Prove that $\triangle ABE=\triangle BCF$.
2. Let $G$ be the intersection of $AE$ and $BF$, then consider triangle $BGE$.

::solution
Consider $\triangle ABE$ and $\triangle BCF$: $AB=BC$ (sides of the square), $\angle ABE=\angle BCF=90^\circ$ and $BE=CF$ (given). Hence $\triangle ABE=\triangle BCF$ (side-angle-side), so $AE=BF$ and $\angle BAE=\angle CBF$.

Let $G$ be the intersection of $AE$ and $BF$. In the right-angled triangle $ABE$ (right angle at $B$) we have $\angle BAE+\angle AEB=90^\circ$. Since $\angle BAE=\angle CBF$, we get $\angle GBE+\angle GEB=90^\circ$. In triangle $BGE$, $\angle BGE=180^\circ-90^\circ=90^\circ$, so $AE\perp BF$.

So $AE=BF$ and $AE\perp BF$.

**Answer.** $AE=BF$; $AE\perp BF$.
:::

## Mini test

:::quiz
::mc
A rhombus has side $6$ cm. Its perimeter is
A. $12$ cm.
B. $24$ cm.
C. $36$ cm.
D. $18$ cm.
::key B
A rhombus has four equal sides, so the perimeter is $4\cdot6=24$ cm. A is $2\cdot6$, C is $6^2$ and D is $3\cdot6$.

::mc
A rhombus has diagonals of $6$ cm and $8$ cm. Its side is
A. $10$ cm.
B. $7$ cm.
C. $5$ cm.
D. $14$ cm.
::key C
Half of the diagonals are $3$ cm and $4$ cm, so the side is $\sqrt{3^2+4^2}=5$ cm. B adds the diagonals and halves the sum, A is the length of one diagonal plus $2$, and D adds the diagonals.

::mc
Which quadrilateral is certainly a rhombus?
A. A quadrilateral with perpendicular diagonals.
B. A quadrilateral with two equal adjacent sides.
C. A parallelogram with equal diagonals.
D. A parallelogram with perpendicular diagonals.
::key D
A parallelogram with perpendicular diagonals is a rhombus. A and B can be true of a kite, and C is the test for a rectangle.

::mc
Each diagonal of a square makes an angle with the sides equal to
A. $45^\circ$.
B. $60^\circ$.
C. $30^\circ$.
D. $90^\circ$.
::key A
A diagonal bisects a right angle, so each angle is $90^\circ:2=45^\circ$. D is the angle at each vertex of the square.

::tf
Rhombus $ABCD$ has side $6$ cm and $\angle A=60^\circ$.
a) $BD=6$ cm.
b) $\angle B=120^\circ$.
c) $AC=BD$.
d) $AC\perp BD$.
::key T T F T
a) True: triangle $ABD$ is equilateral. b) True: $180^\circ-60^\circ=120^\circ$. c) False: $AC=6\sqrt3\ne6$. d) True: the diagonals of a rhombus are perpendicular.

::sa
A rhombus has diagonals of $24$ cm and $10$ cm. Find its side (cm).
::key 13
Half of the diagonals are $12$ cm and $5$ cm, so the side is $\sqrt{144+25}=13$ cm.

::sa
A square has perimeter $36$ cm. Find its side (cm).
::key 9
The side of the square is $36:4=9$ cm.
:::
