---
title: Perimeter and area of familiar quadrilaterals
description: Find the perimeter and area of squares, rectangles, parallelograms, rhombuses and trapeziums, and see where the formulas come from.
minutes: 25
---

:::goals
- Tell the difference between the perimeter (the length of the boundary) and the area (the surface inside) of a shape.
- Find the perimeter and area of a square, a rectangle, a parallelogram, a rhombus and a trapezium.
- Explain the area formulas by cutting and rearranging into a rectangle.
- Solve real-life problems about fencing a garden, tiling a floor and laying turf.
:::

Hoa's family has a garden. Her father wants to put a wire fence round it to keep the chickens out, and her mother wants to cover the whole garden with grass. Her father asks: "How many metres of fencing do we need to buy?" Her mother asks: "How many square metres of turf do we need to buy?"

Two questions about the same garden, but two completely different measurements. The fence runs along the **boundary**, so her father needs the perimeter. The grass covers the **surface inside**, so her mother needs the area. You have known how to find both for squares and rectangles since primary school. Now we go on to parallelograms, rhombuses and trapeziums, and the nice thing is that every new formula can be worked out from the rectangle.

## Perimeter: once round the shape

The perimeter of a quadrilateral is the total length of its four sides. No special formula is needed: just add the four sides. For shapes with equal sides, that addition can be written more briefly.

:::theorem Perimeter
- Square of side $a$: $C=4a$.
- Rectangle with length $a$ and width $b$: $C=2(a+b)$.
- Parallelogram with adjacent sides $a$ and $b$: $C=2(a+b)$.
- Rhombus of side $a$: $C=4a$.
- Trapezium: add the lengths of the four sides.
:::

A parallelogram shares its formula with the rectangle because it also has two pairs of equal opposite sides. A rhombus shares its formula with the square because it also has four equal sides.

## Area of a square and a rectangle

Area tells us how many unit squares a shape covers. A rectangle $5$ cm long and $3$ cm wide can be split into $3$ rows of $5$ squares of side $1$ cm, making $5\cdot3=15$ squares. So its area is $15\ \text{cm}^2$.

:::theorem Area of a square and a rectangle
- Square of side $a$: $S=a\cdot a=a^2$.
- Rectangle with length $a$ and width $b$: $S=a\cdot b$.
:::

The two measurements must be in the same unit. If the length is in metres and the width in centimetres, you must change them to the same unit before multiplying.

## Area of a parallelogram

A parallelogram cannot be split into neat squares. But we can turn it into a rectangle.

:::diagram Parallelogram $ABCD$ with height $AH$
alt: Parallelogram ABCD with horizontal base DC; the segment AH, perpendicular to DC at H, is the height
point A 1.5,3 above-left
point B 6.5,3 above-right
point C 5,0 below-right
point D 0,0 below-left
point H 1.5,0 below
polygon A B C D
segment A H dashed
right A H C
label 3.2,-0.45 "a"
label 1.8,1.5 "h"
:::

Draw the segment $AH$ perpendicular to the side $DC$. This segment is called the **height** corresponding to the side $DC$. Cut off the triangle $ADH$ on the left and move it to the right, against the side $BC$. The parallelogram becomes a rectangle whose length is the side $a$ and whose width is the height $h$. Cutting and rearranging does not change the area.

:::theorem Area of a parallelogram
A parallelogram with a side of length $a$ and corresponding height $h$ has
$$S=a\cdot h.$$
:::

Take care: multiply a side by the **height**, not by the adjacent side. The slanted side is longer than the height.

## Area of a rhombus

A rhombus has perpendicular diagonals. We draw a rectangle round it, with sides parallel to the two diagonals.

:::diagram A rhombus inside a rectangle
alt: Rhombus ABCD with diagonals AC and BD, inside a dashed rectangle whose length equals AC and whose width equals BD
point A -3,0 left
point B 0,2 above
point C 3,0 right
point D 0,-2 below
point P -3,-2 ""
point Q 3,-2 ""
point R 3,2 ""
point S -3,2 ""
polygon A B C D
segment A C dashed
segment B D dashed
segment P Q dashed
segment Q R dashed
segment R S dashed
segment S P dashed
label 1.5,0.25 "m"
label 0.3,-1 "n"
:::

The two diagonals split the rectangle into four small boxes. In each box, a side of the rhombus cuts the box into two identical triangles: one half inside the rhombus, one half outside. So the rhombus takes up exactly **half** of the rectangle. The rectangle's two measurements are the lengths $m$ and $n$ of the diagonals.

:::theorem Area of a rhombus
A rhombus with diagonals of lengths $m$ and $n$ has
$$S=\dfrac{m\cdot n}{2}.$$
:::

## Area of a trapezium

A trapezium has two parallel bases, of lengths $a$ and $b$. The distance between the bases is the height $h$.

:::diagram Trapezium $ABCD$ with height $AH$
alt: Trapezium ABCD with short base AB on top and long base DC below; the segment AH, perpendicular to DC at H, is the height
point A 2,3 above-left
point B 5,3 above-right
point C 7,0 below-right
point D 0,0 below-left
point H 2,0 below
polygon A B C D
segment A H dashed
right A H C
label 3.5,3.4 "a"
label 4.2,-0.45 "b"
label 2.3,1.5 "h"
:::

Take two identical trapeziums, turn one upside down and fit it against the other along a leg. We get a parallelogram with base $a+b$ and height $h$, whose area is $(a+b)\cdot h$. One trapezium is half of that parallelogram.

:::theorem Area of a trapezium
A trapezium with bases of lengths $a$, $b$ and height $h$ has
$$S=\dfrac{(a+b)\cdot h}{2}.$$
:::

As you can see, all three new formulas go back to the rectangle: cut and rearrange, take half, or double up and then take half. Once you understand this, you can find a formula again even if you have forgotten it.

## Examples

We start with the most familiar shape, to recall the difference between perimeter and area.

:::example A rectangular garden
A rectangular garden is $12$ m long and $8$ m wide. Find the perimeter and the area of the garden.

**Solution.**

The perimeter of the garden is
$$C=2\cdot(12+8)=2\cdot20=40\ (\text{m}).$$

The area of the garden is
$$S=12\cdot8=96\ (\text{m}^2).$$

So the garden has a perimeter of $40$ m and an area of $96\ \text{m}^2$.

**Remark.** Perimeter is measured in metres, area in square metres. The unit tells you which quantity you are talking about.
:::

With a parallelogram, find the right pair: "a side and the height that goes with it".

:::example Perimeter and area of a parallelogram
A parallelogram has adjacent sides of $10$ cm and $6$ cm. The height corresponding to the $10$ cm side is $5$ cm. Find the perimeter and the area of the parallelogram.

**Solution.**

The perimeter of the parallelogram is
$$C=2\cdot(10+6)=2\cdot16=32\ (\text{cm}).$$

The area equals a side times the corresponding height:
$$S=10\cdot5=50\ (\text{cm}^2).$$

So the parallelogram has a perimeter of $32$ cm and an area of $50\ \text{cm}^2$.
:::

A rhombus needs its side for the perimeter, but its two diagonals for the area.

:::example Perimeter and area of a rhombus
A rhombus has sides of $5$ cm and diagonals of $8$ cm and $6$ cm. Find the perimeter and the area of the rhombus.

**Solution.**

A rhombus has four equal sides, so the perimeter is
$$C=4\cdot5=20\ (\text{cm}).$$

The area equals half the product of the diagonals:
$$S=\dfrac{8\cdot6}{2}=\dfrac{48}{2}=24\ (\text{cm}^2).$$

So the rhombus has a perimeter of $20$ cm and an area of $24\ \text{cm}^2$.
:::

For a trapezium, perimeter and area use different measurements.

:::example Perimeter and area of an isosceles trapezium
An isosceles trapezium has bases of $9$ m and $15$ m, legs of $5$ m each and a height of $4$ m. Find the perimeter and the area of the trapezium.

**Solution.**

The perimeter is the total length of the four sides:
$$C=9+15+5+5=34\ (\text{m}).$$

The area equals the sum of the bases times the height, divided by $2$:
$$S=\dfrac{(9+15)\cdot4}{2}=\dfrac{24\cdot4}{2}=48\ (\text{m}^2).$$

So the trapezium has a perimeter of $34$ m and an area of $48\ \text{m}^2$.

**Remark.** The leg ($5$ m) is used only for the perimeter, and the height ($4$ m) only for the area.
:::

The formulas also work backwards: given the area, find a measurement.

:::example Finding the width from the area
A rectangle has an area of $84\ \text{m}^2$ and a length of $12$ m. Find the width and the perimeter of the rectangle.

**Solution.**

The area equals length times width, so the width equals the area divided by the length:
$$84:12=7\ (\text{m}).$$

The perimeter of the rectangle is
$$C=2\cdot(12+7)=2\cdot19=38\ (\text{m}).$$

So the rectangle has a width of $7$ m and a perimeter of $38$ m.
:::

Finally, a job every home meets sooner or later: tiling a floor.

:::example Tiling a room
A rectangular room is $6$ m long and $4$ m wide. The floor is covered completely with square tiles of side $50$ cm. Each tile costs $45$ thousand dong. How many tiles are needed, and how much do they cost? (Ignore the gaps between tiles.)

**Solution.**

*Understand.* The tiles cover the surface of the floor, so this is a problem about area. The room is measured in metres and the tiles in centimetres.

*Plan.* Change to the same unit, find the area of the floor and the area of one tile, then divide.

*Solve.* We change $6\ \text{m}=600\ \text{cm}$ and $4\ \text{m}=400\ \text{cm}$.

The area of the floor is
$$600\cdot400=240\,000\ (\text{cm}^2).$$

The area of one tile is
$$50\cdot50=2500\ (\text{cm}^2).$$

The number of tiles needed is
$$240\,000:2500=96\ (\text{tiles}).$$

The cost of the tiles is
$$96\cdot45=4320\ (\text{thousand dong}).$$

So $96$ tiles are needed, costing $4320$ thousand dong, that is, $4$ million $320$ thousand dong.

*Look back.* Is there another way? Along the length we can fit $600:50=12$ tiles, and along the width $400:50=8$ tiles, making $12\cdot8=96$ tiles. Both ways give the same result.
:::

:::warning Common mistakes
- **Mixing up perimeter and area.** Wrong: "A garden $12$ m long and $8$ m wide needs $96$ m of fencing." Why it is wrong: $96$ is the area ($\text{m}^2$), but a fence runs along the boundary. Right: it needs $2\cdot(12+8)=40$ m of fencing.
- **Finding the area of a parallelogram by multiplying adjacent sides.** Wrong: a parallelogram with sides $10$ cm and $6$ cm has $S=10\cdot6=60\ \text{cm}^2$. Why it is wrong: a side must be multiplied by its corresponding height, which is shorter than the slanted side. Right: with height $5$ cm, $S=10\cdot5=50\ \text{cm}^2$.
- **Forgetting to divide by $2$.** Wrong: a rhombus with diagonals $8$ cm and $6$ cm has $S=48\ \text{cm}^2$. Why it is wrong: $8\cdot6$ is the area of the surrounding rectangle, and the rhombus is only half of it. Right: $S=24\ \text{cm}^2$. The same goes for a trapezium.
- **Combining measurements in different units.** Wrong: the room is $6$ m long, the tile has side $50$ cm, so work out $6:50$. Why it is wrong: metres and centimetres are not the same unit. Right: change $6\ \text{m}=600\ \text{cm}$ first, then calculate.
:::

## Key terms

:::terms
- perimeter | chu vi
- area | diện tích
- length | chiều dài
- width | chiều rộng
- height | chiều cao
- base | đáy
- diagonal | đường chéo
- unit of area | đơn vị diện tích
- square metre | mét vuông
:::

## Summary

- Perimeter is the total length of the sides; area measures the surface inside. The units differ: m and $\text{m}^2$.
- Square of side $a$: $C=4a$, $S=a^2$.
- Rectangle $a$, $b$: $C=2(a+b)$, $S=a\cdot b$.
- Parallelogram with sides $a$, $b$ and height $h$ corresponding to side $a$: $C=2(a+b)$, $S=a\cdot h$.
- Rhombus of side $a$ with diagonals $m$, $n$: $C=4a$, $S=\dfrac{m\cdot n}{2}$.
- Trapezium with bases $a$, $b$ and height $h$: $C$ is the sum of the four sides, $S=\dfrac{(a+b)\cdot h}{2}$.

So Hoa's father and mother both have their answers, as long as each uses the right measurement: her father adds the sides, her mother works out the surface inside. Before you calculate, ask yourself one question: "Am I going round the edge, or covering the inside?" If you need to look back at the properties of the shapes, open the lesson on [familiar flat shapes](lesson:triangles-squares-hexagons).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find the perimeter and the area of a square of side $9$ cm.

::hint
**What you need:** a square of side $a$ has $C=4a$, $S=a^2$.

**Steps:**
1. Multiply the side by $4$ to get the perimeter.
2. Multiply the side by itself to get the area.

::solution
The perimeter of the square is
$$C=4\cdot9=36\ (\text{cm}).$$

The area of the square is
$$S=9\cdot9=81\ (\text{cm}^2).$$

So the square has a perimeter of $36$ cm and an area of $81\ \text{cm}^2$.

**Answer.** $C=36$ cm; $S=81\ \text{cm}^2$.
:::

:::exercise
A rectangular playground is $15$ m long and $8$ m wide. Find the perimeter and the area of the playground.

::hint
**What you need:** a rectangle has $C=2(a+b)$, $S=a\cdot b$.

**Steps:**
1. Add the length and the width, then multiply by $2$.
2. Multiply the length by the width.

::solution
The perimeter of the playground is
$$C=2\cdot(15+8)=2\cdot23=46\ (\text{m}).$$

The area of the playground is
$$S=15\cdot8=120\ (\text{m}^2).$$

So the playground has a perimeter of $46$ m and an area of $120\ \text{m}^2$.

**Answer.** $C=46$ m; $S=120\ \text{m}^2$.
:::

:::exercise
A parallelogram has adjacent sides of $14$ cm and $8$ cm. The height corresponding to the $14$ cm side is $6$ cm. Find the perimeter and the area of the parallelogram.

::hint
**What you need:** a parallelogram has $C=2(a+b)$, $S=a\cdot h$, where $h$ is the height corresponding to side $a$.

**Steps:**
1. Perimeter: use the two adjacent sides.
2. Area: use the $14$ cm side and the $6$ cm height.

::solution
The perimeter of the parallelogram is
$$C=2\cdot(14+8)=2\cdot22=44\ (\text{cm}).$$

The area equals a side times the corresponding height:
$$S=14\cdot6=84\ (\text{cm}^2).$$

So the parallelogram has a perimeter of $44$ cm and an area of $84\ \text{cm}^2$.

**Answer.** $C=44$ cm; $S=84\ \text{cm}^2$.
:::

:::exercise
A rhombus has sides of $10$ cm and diagonals of $16$ cm and $12$ cm. Find the perimeter and the area of the rhombus.

::hint
**What you need:** a rhombus has $C=4a$, $S=\dfrac{m\cdot n}{2}$.

**Steps:**
1. Perimeter: multiply the side by $4$.
2. Area: multiply the diagonals, then divide by $2$.

::solution
A rhombus has four equal sides, so the perimeter is
$$C=4\cdot10=40\ (\text{cm}).$$

The area equals half the product of the diagonals:
$$S=\dfrac{16\cdot12}{2}=\dfrac{192}{2}=96\ (\text{cm}^2).$$

So the rhombus has a perimeter of $40$ cm and an area of $96\ \text{cm}^2$.

**Answer.** $C=40$ cm; $S=96\ \text{cm}^2$.
:::

:::exercise
A trapezium has bases of $7$ m and $13$ m and a height of $5$ m. Find the area of the trapezium.

::hint
**What you need:** $S=\dfrac{(a+b)\cdot h}{2}$.

**Steps:**
1. Add the two bases.
2. Multiply by the height, then divide by $2$.

::solution
The total length of the two bases is $7+13=20$ (m).

The area of the trapezium is
$$S=\dfrac{(7+13)\cdot5}{2}=\dfrac{20\cdot5}{2}=50\ (\text{m}^2).$$

So the trapezium has an area of $50\ \text{m}^2$.

**Answer.** $50\ \text{m}^2$.
:::

:::exercise
A rectangular garden has a perimeter of $70$ m and a length of $20$ m. Find the width and the area of the garden.

::hint
**What you need:** half the perimeter equals the length plus the width.

**Steps:**
1. Work out half the perimeter.
2. Subtract the length from half the perimeter to get the width, then find the area.

::solution
Half the perimeter of the garden is
$$70:2=35\ (\text{m}).$$

Half the perimeter equals the length plus the width, so the width is
$$35-20=15\ (\text{m}).$$

The area of the garden is
$$S=20\cdot15=300\ (\text{m}^2).$$

So the garden has a width of $15$ m and an area of $300\ \text{m}^2$.

**Answer.** Width $15$ m; area $300\ \text{m}^2$.
:::

:::exercise
A rectangular garden is $18$ m long and $12$ m wide. A wire fence is put all the way round it, except for a gate $2$ m wide. Each metre of fencing costs $60$ thousand dong. Find the cost of the fencing.

::hint
**What you need:** the fence runs along the perimeter, minus the gate.

**Steps:**
1. Find the perimeter of the garden.
2. Subtract the width of the gate to get the length of fencing, then multiply by the price.

::solution
The perimeter of the garden is
$$C=2\cdot(18+12)=2\cdot30=60\ (\text{m}).$$

Since a gate $2$ m wide is left open, the length of fencing to buy is
$$60-2=58\ (\text{m}).$$

The cost of the fencing is
$$58\cdot60=3480\ (\text{thousand dong}).$$

So the fencing costs $3480$ thousand dong, that is, $3$ million $480$ thousand dong.

**Answer.** $3480$ thousand dong.
:::

:::exercise
A plot of land is a trapezium with bases of $20$ m and $30$ m and a height of $12$ m. A path in the shape of a parallelogram is made across the plot, with a base of $2$ m lying on a base of the trapezium and a height of $12$ m. The rest is used for grass, and each square metre of turf costs $40$ thousand dong. Find the cost of the turf.

::hint
**What you need:** area of a trapezium $S=\dfrac{(a+b)\cdot h}{2}$; area of a parallelogram $S=a\cdot h$.

**Steps:**
1. Find the area of the whole plot and the area of the path.
2. Subtract to get the area for grass, then multiply by the price.

::solution
The area of the trapezium-shaped plot is
$$\dfrac{(20+30)\cdot12}{2}=\dfrac{50\cdot12}{2}=300\ (\text{m}^2).$$

The area of the parallelogram-shaped path is
$$2\cdot12=24\ (\text{m}^2).$$

The area for grass is
$$300-24=276\ (\text{m}^2).$$

The cost of the turf is
$$276\cdot40=11\,040\ (\text{thousand dong}).$$

So the turf costs $11\,040$ thousand dong, that is, $11$ million $40$ thousand dong.

**Answer.** $11\,040$ thousand dong.
:::

:::exercise Challenge
Nam has a piece of string $40$ cm long. First, Nam bends the string into a rectangle with a length of $12$ cm. Then Nam bends the same string into a square. Which shape has the larger area, and by how much?

::hint
**What you need:** both shapes have the same perimeter, $40$ cm; the same perimeter does not mean the same area.

**Steps:**
1. Find the width of the rectangle from half the perimeter, then its area.
2. Find the side of the square from the perimeter, then its area, and compare.

::solution
Both shapes have a perimeter equal to the length of the string, that is, $40$ cm.

For the rectangle: half the perimeter is $40:2=20$ (cm), so the width is $20-12=8$ (cm). The area of the rectangle is
$$12\cdot8=96\ (\text{cm}^2).$$

For the square: the side is $40:4=10$ (cm). The area of the square is
$$10\cdot10=100\ (\text{cm}^2).$$

We have $100>96$ and $100-96=4$.

So the square has an area $4\ \text{cm}^2$ larger than the rectangle.

**Answer.** The square is larger by $4\ \text{cm}^2$.
:::

## Mini test

:::quiz
::mc
The area of a square of side $6$ cm is
A. $24\ \text{cm}^2$.
B. $36\ \text{cm}^2$.
C. $12\ \text{cm}^2$.
D. $18\ \text{cm}^2$.
::key B
$S=6\cdot6=36\ \text{cm}^2$. A is the perimeter value ($4\cdot6$); C works out $6\cdot2$; D halves without reason.

::mc
A parallelogram has a side of $9$ cm, and the height corresponding to that side is $4$ cm. The area of the parallelogram is
A. $36\ \text{cm}^2$.
B. $26\ \text{cm}^2$.
C. $18\ \text{cm}^2$.
D. $13\ \text{cm}^2$.
::key A
$S=9\cdot4=36\ \text{cm}^2$. B works out $2\cdot(9+4)$ as for a perimeter; C divides by $2$ as for a rhombus; D adds the two numbers.

::mc
A rhombus has diagonals of $10$ cm and $6$ cm. The area of the rhombus is
A. $60\ \text{cm}^2$.
B. $16\ \text{cm}^2$.
C. $32\ \text{cm}^2$.
D. $30\ \text{cm}^2$.
::key D
$S=\dfrac{10\cdot6}{2}=30\ \text{cm}^2$. A forgets to divide by $2$; B adds the diagonals; C works out $2\cdot(10+6)$.

::mc
A trapezium has bases of $4$ m and $8$ m and a height of $5$ m. The area of the trapezium is
A. $60\ \text{m}^2$.
B. $160\ \text{m}^2$.
C. $30\ \text{m}^2$.
D. $17\ \text{m}^2$.
::key C
$S=\dfrac{(4+8)\cdot5}{2}=30\ \text{m}^2$. A forgets to divide by $2$; B multiplies all three numbers; D adds all three numbers.

::tf
A rectangle is $10$ m long and $6$ m wide. Decide whether each statement is true or false.
a) The perimeter of the rectangle is $32$ m.
b) The area of the rectangle is $60\ \text{m}^2$.
c) If both the length and the width are doubled, the area doubles.
d) If both the length and the width are doubled, the perimeter doubles.
::key T T F T
a) True: $2\cdot(10+6)=32$. b) True: $10\cdot6=60$. c) False: the new area is $20\cdot12=240$, which is $4$ times as large. d) True: the new perimeter is $2\cdot(20+12)=64$, which is twice as large.

::sa
A rectangle has an area of $72\ \text{cm}^2$ and a length of $9$ cm. How many centimetres is the width of the rectangle?
::key 8
The width equals the area divided by the length: $72:9=8$ (cm).

::sa
A square garden has a perimeter of $48$ m. How many square metres is the area of the garden?
::key 144
The side of the garden is $48:4=12$ (m), so the area is $12\cdot12=144\ (\text{m}^2)$.
:::
