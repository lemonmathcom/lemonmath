---
title: Triangles. Area of a triangle. Trapeziums. Area of a trapezium
description: Learn about triangles and trapeziums, base and height, then find the area of a triangle and a trapezium in real-life problems.
minutes: 25
---

:::goals
- Recognise a triangle (acute, right-angled, obtuse), and its base and perpendicular height.
- Find the area of a triangle.
- Recognise a trapezium, its two parallel sides, its other two sides and its height.
- Find the area of a trapezium and solve word problems.
:::

Mr Hung has a triangular plot of land with base $12$ m and height $8$ m, and a trapezium-shaped field whose longer parallel side is $30$ m, shorter parallel side is $20$ m and height is $15$ m.

What are the areas of Mr Hung's plot and field in square metres? This lesson teaches you to find the area of both shapes.

## Triangles

### Let's explore

Triangle $ABC$ has three vertices $A$, $B$, $C$, three sides $AB$, $BC$, $CA$ and three angles. We choose one side as the **base**, say side $BC$. From the opposite vertex $A$ we draw the segment $AH$ perpendicular to the base $BC$. The segment $AH$ is the **perpendicular height**, and its length is the **height** for the base $BC$.

:::diagram Triangle ABC with base BC and perpendicular height AH
alt: Triangle ABC with the perpendicular height AH drawn from A down to the base BC at H
point A 2,3 above
point B 0,0 below-left
point C 5,0 below-right
point H 2,0 below
polygon A B C
segment A H dashed
right A H C
label 2.3,1.5 "h"
:::

By their angles, triangles are of three kinds: an **acute triangle** has three acute angles, a **right-angled triangle** has one right angle, and an **obtuse triangle** has one obtuse angle.

### Examples

:::example Classifying triangles
Which triangle is acute, right-angled or obtuse? a) Three angles $40^\circ$, $65^\circ$, $75^\circ$. b) Three angles $90^\circ$, $35^\circ$, $55^\circ$. c) Three angles $20^\circ$, $30^\circ$, $130^\circ$.

**Solution.** a) All three angles are less than $90^\circ$, so it is an acute triangle.

b) There is one angle of $90^\circ$, so it is a right-angled triangle.

c) There is one angle of $130^\circ$, which is greater than $90^\circ$, so it is an obtuse triangle.

So a) acute; b) right-angled; c) obtuse.

**Remark.** In a right-angled triangle, the two sides next to the right angle are perpendicular, so each is the height for the other taken as the base.
:::

## Area of a triangle

### Let's explore

Rectangle $ABCD$ with length $6$ cm and width $4$ cm has area $6\times4=24\ \text{cm}^2$. The diagonal $AC$ cuts the rectangle into two equal right-angled triangles.

:::diagram The diagonal AC divides the rectangle into two equal triangles
alt: Rectangle ABCD with the dashed diagonal AC dividing it into two equal right-angled triangles
point A 0,0 below-left
point B 6,0 below-right
point C 6,4 above-right
point D 0,4 above-left
polygon A B C D
segment A C dashed
label 3,-0.7 "6 cm"
label 6.9,2 "4 cm"
:::

Each triangle has area $24\div2=12\ \text{cm}^2$, which is $6\times4\div2$, with $6$ cm as the base and $4$ cm as the height.

:::theorem Area of a triangle
The area of a triangle is the length of the base times the height (in the same unit), divided by $2$:
$$S=\dfrac{a\times h}{2}\quad\text{or}\quad S=a\times h\div2.$$
:::

Why does this work? For a right-angled triangle, two equal triangles fit together to make a rectangle with sides $a$ and $h$, so each triangle has half the area $a\times h$. For any triangle, the height splits it into two right-angled triangles, each half of the matching rectangle, and together they make half of the rectangle with sides $a$ and $h$.

**Connection.** Thinking "half a rectangle" helps you remember the formula and notice when you have forgotten to divide by $2$.

### Examples

:::example Finding the area
a) A triangle with base $12$ cm and height $5$ cm. b) A right-angled triangle whose two shorter sides are $6$ cm and $8$ cm.

**Solution.** a) The area of the triangle is:
$$12\times5\div2=30\ \text{(cm}^2\text{)}.$$

b) The two sides next to the right angle are the base and the height, so the area is:
$$6\times8\div2=24\ \text{(cm}^2\text{)}.$$

So a) $30\ \text{cm}^2$; b) $24\ \text{cm}^2$.
:::

Now back to Mr Hung's plot.

:::example A triangular plot
Mr Hung's triangular plot has base $12$ m and height $8$ m. Find the area of the plot.

**Solution.** The area of the plot is:
$$12\times8\div2=48\ \text{(m}^2\text{)}.$$
So the area is $48\ \text{m}^2$.
:::

If you know the area, you can find the base or the height.

:::example Finding the height
A triangle has area $36\ \text{cm}^2$ and base $9$ cm. Find the height for that base.

**Solution.** From $S=a\times h\div2$ we get $a\times h=S\times2=36\times2=72$. So the height is:
$$h=72\div9=8\ \text{(cm)}.$$
So the height is $8$ cm.
:::

:::warning Mistakes to watch out for
- **Forgetting to divide by $2$.** Wrong: a triangle with base $12$ cm and height $5$ cm has $S=12\times5=60\ \text{cm}^2$. Why it is wrong: $12\times5$ is the area of a rectangle, and the triangle is only half of it. Right: $12\times5\div2=30\ \text{cm}^2$.
- **Using a sloping side as the height.** Wrong: a triangle with base $10$ cm, sloping side $6$ cm and height $5$ cm has $S=10\times6\div2=30\ \text{cm}^2$. Why it is wrong: the sloping side is not perpendicular to the base, and the height must be perpendicular to the base. Right: $10\times5\div2=25\ \text{cm}^2$.
:::

## Trapeziums

### Let's explore

Trapezium $ABCD$ has two opposite sides $AB$ and $DC$ that are parallel. These two parallel sides are the **bases**: $DC$ is the **longer base** and $AB$ is the **shorter base**. The other two sides are the **legs**. The segment $AH$ perpendicular to the longer base is the **perpendicular height**, and its length $AH$ is the **height** of the trapezium.

:::diagram Trapezium ABCD with parallel sides AB and DC and perpendicular height AH
alt: Trapezium ABCD with parallel sides AB and DC and the perpendicular height AH drawn from A down to DC at H
point A 1,3 above-left
point B 4,3 above-right
point C 6,0 below-right
point D 0,0 below-left
point H 1,0 below
polygon A B C D
segment A H dashed
right A H C
label 2.5,3.5 "shorter base"
label 3.2,-0.6 "longer base"
label 1.3,1.5 "h"
:::

A trapezium with one leg perpendicular to both bases is called a **right-angled trapezium**; that leg is the height.

### Examples

:::example A right-angled trapezium
The right-angled trapezium $ABCD$ has $AB\parallel CD$, $AD\perp AB$, $AB=4$ cm, $CD=7$ cm and $AD=5$ cm. Name the two bases and the height of the trapezium.

**Solution.** The two parallel sides are $AB=4$ cm (the shorter base) and $CD=7$ cm (the longer base). The leg $AD$ is perpendicular to both bases, so $AD=5$ cm is the height.

So the shorter base is $4$ cm, the longer base is $7$ cm and the height is $5$ cm.
:::

## Area of a trapezium

### Let's explore

Cut trapezium $ABCD$ along the diagonal $AC$ into two triangles: triangle $ADC$ with base $DC=a$ and triangle $ABC$ with base $AB=b$. Both triangles have height $h$, because $AB\parallel DC$.

:::diagram The diagonal AC divides the trapezium into two triangles
alt: Trapezium ABCD with the dashed diagonal AC dividing it into two triangles ADC and ABC with the same height
point A 1,3 above-left
point B 4,3 above-right
point C 6,0 below-right
point D 0,0 below-left
polygon A B C D
segment A C dashed
label 3,-0.6 "a"
label 2.5,3.5 "b"
:::

The areas of the two triangles are $\dfrac{a\times h}{2}$ and $\dfrac{b\times h}{2}$. Adding, the area of the trapezium is $\dfrac{a\times h}{2}+\dfrac{b\times h}{2}=\dfrac{(a+b)\times h}{2}$.

:::theorem Area of a trapezium
The area of a trapezium is the sum of the lengths of the two bases times the height (in the same unit), divided by $2$:
$$S=\dfrac{(a+b)\times h}{2}\quad\text{or}\quad S=(a+b)\times h\div2.$$
:::

**Remark.** If the shorter base is $b=0$, the trapezium becomes a triangle and the formula turns back into $S=a\times h\div2$, the formula for the area of a triangle.

### Examples

:::example Finding the area
a) A trapezium with bases $8$ cm and $12$ cm and height $5$ cm. b) A trapezium with bases $3.5$ dm and $2.5$ dm and height $4$ dm.

**Solution.** a) The area of the trapezium is:
$$(8+12)\times5\div2=50\ \text{(cm}^2\text{)}.$$

b) The area of the trapezium is:
$$(3.5+2.5)\times4\div2=6\times4\div2=12\ \text{(dm}^2\text{)}.$$

So a) $50\ \text{cm}^2$; b) $12\ \text{dm}^2$.
:::

Now back to Mr Hung's field, solved in four steps.

:::example A trapezium-shaped field
Mr Hung's trapezium-shaped field has longer base $30$ m, shorter base $20$ m and height $15$ m. Find the area of the field.

**Understand.** We know the two bases and the height. We need the area.

**Plan.** Use the formula for the area of a trapezium, $S=(a+b)\times h\div2$.

**Solve.** The area of the field is:
$$(30+20)\times15\div2=375\ \text{(m}^2\text{)}.$$
So the area is $375\ \text{m}^2$.

**Look back.** Is the answer reasonable? Yes: a rectangle $30\times15=450\ \text{m}^2$ would be larger, and a rectangle $20\times15=300\ \text{m}^2$ would be smaller, and $300<375<450$. Is there another way? Yes: take the mean of the two bases $(30+20)\div2=25$, then multiply by the height $25\times15=375$.
:::

If you know the area, you can find the height of a trapezium.

:::example Finding the height
A trapezium has area $90\ \text{m}^2$ and its bases are $12$ m and $18$ m long. Find the height of the trapezium.

**Solution.** From $S=(a+b)\times h\div2$ we get $(a+b)\times h=S\times2=90\times2=180$. The sum of the bases is $12+18=30$ m, so the height is:
$$h=180\div30=6\ \text{(m)}.$$
So the height is $6$ m.
:::

:::warning Mistakes to watch out for
- **Doing the operations in the wrong order.** Wrong: a trapezium with bases $8$ cm and $12$ cm and height $5$ cm has $S=8+12\times5\div2=38\ \text{cm}^2$. Why it is wrong: you must add the two bases first, then multiply by the height. Right: $(8+12)\times5\div2=50\ \text{cm}^2$.
:::

## Key terms

:::terms
- triangle | hình tam giác
- vertex | đỉnh
- base | đáy
- perpendicular height | đường cao, chiều cao
- acute triangle | tam giác nhọn
- right-angled triangle | tam giác vuông
- obtuse triangle | tam giác tù
- trapezium | hình thang
- longer parallel side, shorter parallel side | đáy lớn, đáy bé
- right-angled trapezium | hình thang vuông
- area | diện tích
:::

## Summary

- The height of a triangle is the perpendicular segment from a vertex to the base; by angles there are acute, right-angled and obtuse triangles.
- Area of a triangle: $S=a\times h\div2$ (base times height, then divide by $2$).
- A trapezium has two parallel bases; the height is perpendicular to both bases.
- Area of a trapezium: $S=(a+b)\times h\div2$ (add the bases first, multiply by the height, then divide by $2$).
- To find a base or a height when you know the area, multiply the area by $2$ then divide by the other known number.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Classify these triangles by their angles: a) $50^\circ$, $60^\circ$, $70^\circ$; b) $90^\circ$, $40^\circ$, $50^\circ$; c) $25^\circ$, $35^\circ$, $120^\circ$.

::hint
**What you need:** acute means three acute angles; right-angled means one angle of $90^\circ$; obtuse means one angle greater than $90^\circ$.

**Steps:**
1. Compare each angle with $90^\circ$.
2. Decide the kind of triangle.

::solution
a) All three angles are less than $90^\circ$: acute triangle.

b) There is an angle of $90^\circ$: right-angled triangle.

c) There is an angle $120^\circ>90^\circ$: obtuse triangle.

**Answer.** a) acute; b) right-angled; c) obtuse.
:::

:::exercise
Find the area of the triangle with: a) base $15$ cm and height $8$ cm; b) base $7$ dm and height $4$ dm; c) two shorter sides $9$ cm and $12$ cm (right-angled).

::hint
**What you need:** $S=a\times h\div2$, with base and height in the same unit.

**Steps:**
1. Find the base and the height (part c: the two sides next to the right angle).
2. Multiply, divide by $2$, and write the unit of area.

::solution
a) $15\times8\div2=60\ \text{cm}^2$.

b) $7\times4\div2=14\ \text{dm}^2$.

c) $9\times12\div2=54\ \text{cm}^2$.

**Answer.** a) $60\ \text{cm}^2$; b) $14\ \text{dm}^2$; c) $54\ \text{cm}^2$.
:::

:::exercise
Find: a) the height of a triangle with area $40\ \text{cm}^2$ and base $10$ cm; b) the base of a triangle with area $63\ \text{m}^2$ and height $9$ m.

::hint
**What you need:** $a\times h=S\times2$.

**Steps:**
1. Work out $S\times2$.
2. Divide by the base (or the height) that you know.

::solution
a) $40\times2=80$ and $80\div10=8$, so the height is $8$ cm.

b) $63\times2=126$ and $126\div9=14$, so the base is $14$ m.

**Answer.** a) $8$ cm; b) $14$ m.
:::

:::exercise
Suppose a triangular sail has base $3.2$ m and height $2.5$ m. Find the area of the sail.

::hint
**What you need:** $S=a\times h\div2$; multiply the decimals, then divide by $2$.

**Steps:**
1. What do we know? What is asked?
2. Work out $3.2\times2.5$ then divide by $2$. Remember the unit.

::solution
The area of the sail is:
$$3.2\times2.5\div2=8\div2=4\ \text{(m}^2\text{)}.$$

**Answer.** $4\ \text{m}^2$.
:::

:::exercise
Find the area of: a) a trapezium with bases $9$ cm and $15$ cm and height $6$ cm; b) a right-angled trapezium $ABCD$ with $AB=4$ cm, $CD=10$ cm and $AD=7$ cm ($AD\perp AB$).

::hint
**What you need:** $S=(a+b)\times h\div2$; in a right-angled trapezium the height is the leg perpendicular to both bases.

**Steps:**
1. Identify the two bases and the height.
2. Add the bases, multiply by the height, then divide by $2$.

::solution
a) $(9+15)\times6\div2=72\ \text{cm}^2$.

b) The height is $AD=7$ cm, so $S=(4+10)\times7\div2=49\ \text{cm}^2$.

**Answer.** a) $72\ \text{cm}^2$; b) $49\ \text{cm}^2$.
:::

:::exercise
Suppose a trapezium-shaped field has bases $25$ m and $35$ m and height $20$ m. Find the area of the field.

::hint
**What you need:** the two bases and the height are already in metres.

**Steps:**
1. What do we know? What is asked?
2. Use the formula for the area of a trapezium. Check: the result lies between the rectangles $25\times20$ and $35\times20$.

::solution
The area of the field is:
$$(25+35)\times20\div2=600\ \text{(m}^2\text{)}.$$

**Check.** $25\times20=500$ and $35\times20=700$, and $500<600<700$.

**Answer.** $600\ \text{m}^2$.
:::

:::exercise
Remember the lesson on hectares. A plot of land is a trapezium with bases $150$ m and $250$ m and height $100$ m. Find the area of the plot in hectares.

::hint
**What you need:** $1$ ha $=10\,000\ \text{m}^2$.

**Steps:**
1. Work out the area in square metres.
2. Change the result into hectares.

::solution
The area of the plot is $(150+250)\times100\div2=20\,000\ \text{m}^2$.

Change to hectares: $20\,000\div10\,000=2$ ha.

**Answer.** $2$ ha.
:::

:::exercise
Suppose a triangular garden has base $18$ m and height $12$ m. $\dfrac{1}{3}$ of the garden's area is used to grow vegetables. How many square metres are used for vegetables?

::hint
**What you need:** to find one third of a number, divide it by $3$.

**Steps:**
1. Work out the area of the whole garden.
2. Divide that area by $3$.

::solution
The area of the garden is $18\times12\div2=108\ \text{m}^2$.

The area for vegetables is $108\div3=36\ \text{m}^2$.

**Answer.** $36\ \text{m}^2$.
:::

:::exercise
A trapezium has area $120\ \text{cm}^2$ and its bases are $14$ cm and $16$ cm long. Find the height of the trapezium.

::hint
**What you need:** $(a+b)\times h=S\times2$.

**Steps:**
1. Work out $S\times2$ and the sum of the bases.
2. Divide to find the height.

::solution
$S\times2=120\times2=240$ and the sum of the bases is $14+16=30$ cm, so the height is $240\div30=8$ cm.

**Answer.** $8$ cm.
:::

:::exercise Challenge
A trapezium has its longer base twice its shorter base, height $6$ cm and area $54\ \text{cm}^2$. Find the lengths of the two bases.

::hint
**What you need:** from $S$ and $h$ find the sum of the bases; the longer base being twice the shorter means the sum is $3$ parts.

**Steps:**
1. Work out the sum of the bases as $S\times2\div h$.
2. Share that sum into $3$ equal parts to find the shorter base.

::solution
The sum of the bases is $54\times2\div6=18$ cm. Take the shorter base as $1$ part, so the longer base is $2$ parts and the sum is $3$ parts. The shorter base is $18\div3=6$ cm and the longer base is $6\times2=12$ cm.

**Check.** $(6+12)\times6\div2=54$. Correct.

**Answer.** Shorter base $6$ cm; longer base $12$ cm.
:::

## Mini test

:::quiz
::mc
A triangle with angles $30^\circ$, $40^\circ$, $110^\circ$ is
A. an acute triangle.
B. an obtuse triangle.
C. a right-angled triangle.
D. a triangle with three equal angles.
::key B
There is an angle $110^\circ>90^\circ$, so it is an obtuse triangle. Option A needs three acute angles; B needs one angle of $90^\circ$; D is wrong because the three angles are different.

::mc
The area of a triangle with base $14$ cm and height $6$ cm is
A. $84\ \text{cm}^2$.
B. $20\ \text{cm}^2$.
C. $42\ \text{cm}^2$.
D. $168\ \text{cm}^2$.
::key C
$14\times6\div2=42\ \text{cm}^2$. Option A forgets to divide by $2$; C adds instead of multiplying; D multiplies by an extra $2$.

::mc
The area of a trapezium with bases $8$ cm and $12$ cm and height $5$ cm is
A. $25\ \text{cm}^2$.
B. $100\ \text{cm}^2$.
C. $38\ \text{cm}^2$.
D. $50\ \text{cm}^2$.
::key D
$(8+12)\times5\div2=50\ \text{cm}^2$. Option B forgets to divide by $2$; C does the operations in the wrong order; D divides by $2$ twice.

::mc
A triangular garden has base $18$ m and height $12$ m. $\dfrac{1}{3}$ of its area is used for vegetables, so the area for vegetables is
A. $36\ \text{m}^2$.
B. $108\ \text{m}^2$.
C. $72\ \text{m}^2$.
D. $216\ \text{m}^2$.
::key A
The area of the garden is $18\times12\div2=108\ \text{m}^2$, and one third of it is $108\div3=36\ \text{m}^2$. Option D forgets to divide by $2$; B is the area of the whole garden; C is the rest of the garden, which is $\dfrac{2}{3}$ of the area.

::tf
Triangle $ABC$ has base $BC=10$ cm, sloping side $AB=6$ cm and perpendicular height $AH=5$ cm ($AH\perp BC$).
a) The area of the triangle is $10\times5\div2=25\ \text{cm}^2$.
b) The area of the triangle is $10\times6\div2=30\ \text{cm}^2$.
c) $AH$ is the height for the base $BC$.
d) The area of the triangle is half the area of the rectangle $10$ cm $\times$ $5$ cm.
::key T F T T
a) True. b) False: $AB$ is not perpendicular to the base, so it is not the height. c) True: $AH$ is perpendicular to $BC$. d) True: that rectangle has area $50\ \text{cm}^2$, and $25$ is half of $50$.

::sa
A right-angled triangle has its two shorter sides $6$ cm and $5$ cm long. What is the area of the triangle in square centimetres?
::key 15
The two sides next to the right angle are the base and the height: $6\times5\div2=15\ \text{cm}^2$.

::sa
A trapezium has bases $6$ cm and $10$ cm and area $48\ \text{cm}^2$. What is the height of the trapezium in centimetres?
::key 6
$48\times2=96$ and $96\div(6+10)=6$ cm.
:::
