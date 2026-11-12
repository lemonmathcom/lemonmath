---
title: Cuboids and cubes. Right triangular prisms and right quadrilateral prisms
description: Work out the volume, lateral surface area and total surface area of cuboids, cubes and right prisms, and solve real-life problems with tanks and rooms.
minutes: 30
---

:::goals
- Recognise the parts of a cuboid and a cube, and find their volume, lateral surface area and total surface area.
- Recognise right triangular prisms and right quadrilateral prisms and their parts.
- Find the volume, lateral surface area and total surface area of a right prism.
- Solve real-life problems about tanks, rooms and swimming pools with these formulas.
:::

A glass fish tank is $60$ cm long, $30$ cm wide and $40$ cm high. How many litres of water does it hold when full? How many square centimetres of glass are needed to make it (with no lid)? Questions like these come up when we buy a tank, build a water store or paint a room.

This lesson has two parts. The first is about cuboids and cubes. The second extends to right prisms, solids with two equal bases, like a triangular chocolate bar or the roof of a house.

## Cuboids and cubes

### Explore: packing small cubes

Pack cubes of edge $1$ cm into a box whose base is $4$ cm by $3$ cm and whose height is $2$ cm. Each layer holds $4\cdot3=12$ cubes, and there are $2$ layers, so the box holds $12\cdot2=24$ cubes. The volume of the box is $24\ \text{cm}^3$.

The number of cubes in a layer equals the area of the base, and the number of layers equals the height. This gives a formula for every box.

:::definition Cuboid and cube
A **cuboid** has $6$ faces that are rectangles, $8$ vertices and $12$ edges. Opposite faces are equal, and parallel edges are equal. Its three dimensions are the length $a$, the width $b$ and the height $c$.

A **cube** is a cuboid whose $6$ faces are all squares, that is, $a=b=c$.
:::

:::theorem Formulas for a cuboid and a cube
A cuboid with dimensions $a$, $b$, $c$ has
$$V=abc,\qquad S_{lat}=2(a+b)c,\qquad S_{tot}=2(ab+bc+ca).$$
A cube of edge $a$ has
$$V=a^3,\qquad S_{lat}=4a^2,\qquad S_{tot}=6a^2.$$
:::

**Why?** Volume: the base $a\times b$ holds $ab$ small cubes in each layer and there are $c$ layers, so $V=abc$. The lateral surface area is the area of the four side faces. Cut along one vertical edge and unroll: we get a rectangle whose width is the perimeter of the base $2(a+b)$ and whose height is $c$, so $S_{lat}=2(a+b)c$. The total surface area is $S_{lat}$ plus the two bases $2ab$, which is $2(ab+bc+ca)$. For a cube, put $a=b=c$.

:::diagram Cuboid $ABCD.A'B'C'D'$ with dimensions $a$, $b$, $c$
alt: A cuboid drawn in oblique projection with hidden edges dashed, and the three dimensions a, b and c labelled
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,2.5 left
point B' 4,2.5 above
point C' 5.2,3.9 above-right
point D' 1.2,3.9 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 2,-0.4 "a"
label 5.1,0.5 "b"
label -0.3,1.2 "c"
:::

When you use the formulas, watch the units: $1$ litre is $1\ \text{dm}^3=1000\ \text{cm}^3$.

## Right triangular prisms and right quadrilateral prisms

Cutting a cuboid by a slanting plane gives us two new solids.

### Explore: cutting a cuboid in half

Take a cuboid with a base $5$ cm by $4$ cm and height $3$ cm. Cut it by the plane through a diagonal of the base, perpendicular to the base. We get two equal solids. Each has a right-angled triangle as base, with legs $5$ cm and $4$ cm, and height $3$ cm.

The volume of the cuboid is $5\cdot4\cdot3=60\ \text{cm}^3$, so each half has volume $30\ \text{cm}^3$. We see that $30=\dfrac12\cdot5\cdot4\cdot3$: the area of the triangular base times the height. This rule works for every right prism.

:::definition Right prism
A **right prism** has two equal polygons as bases, lying in two parallel planes. Its lateral edges are parallel, equal and perpendicular to the bases, and its lateral faces are all rectangles. The length of a lateral edge is the **height** $h$ of the prism.

A prism whose base is a triangle is a **right triangular prism**. A prism whose base is a quadrilateral is a **right quadrilateral prism**. A cuboid and a cube are special right quadrilateral prisms.
:::

:::diagram Right triangular prism $ABC.A'B'C'$ with height $h$
alt: A right triangular prism ABC.A'B'C' drawn in oblique projection with hidden edges dashed, and the height h labelled
point A 0,0 below-left
point B 4,0 below-right
point C 1.2,1.4 above
point A' 0,3 left
point B' 4,3 above-right
point C' 1.2,4.4 above
segment A B
segment A C dashed
segment B C dashed
segment A' B'
segment B' C'
segment C' A'
segment A A'
segment B B'
segment C C' dashed
label -0.4,1.5 "h"
:::

:::theorem Formulas for a right prism
A right prism with base perimeter $P$, base area $B$ and height $h$ has
$$S_{lat}=P\cdot h,\qquad S_{tot}=S_{lat}+2B,\qquad V=B\cdot h.$$
:::

**Why?** The lateral faces are rectangles of height $h$ whose widths are the sides of the base. Adding their areas, we get $h$ times the sum of the sides, that is, $P\cdot h$. Volume works as for a cuboid: the prism is made of thin layers stacked on top of each other, each of area $B$ and with total height $h$.

## Examples

We start with a cuboid.

:::example A cuboid
A cuboid has length $8$ cm, width $5$ cm and height $3$ cm. Find its volume and total surface area.

**Solution.** Using the formulas with $a=8$, $b=5$, $c=3$, we have
$$V=8\cdot5\cdot3=120\ (\text{cm}^3),$$
$$S_{tot}=2(8\cdot5+5\cdot3+3\cdot8)=2(40+15+24)=158\ (\text{cm}^2).$$
So the volume is $120\ \text{cm}^3$ and the total surface area is $158\ \text{cm}^2$.
:::

With a cube, we often go from the area back to the edge.

:::example A cube
A cube has total surface area $150\ \text{cm}^2$. Find its edge and its volume.

**Solution.** Let the edge be $a$ ($a>0$, unit: cm). We have $S_{tot}=6a^2$, so
$$6a^2=150\ \Rightarrow\ a^2=25\ \Rightarrow\ a=5.$$
The volume is $V=5^3=125\ (\text{cm}^3)$.

So the edge is $5$ cm long and the volume is $125\ \text{cm}^3$.
:::

Now we answer the fish tank question from the start.

:::example The fish tank (Application)
A glass fish tank is a cuboid with no lid, $60$ cm long, $30$ cm wide and $40$ cm high. Water is poured in up to a height of $30$ cm.

a) How many litres of water are in the tank? How many more litres are needed to fill it?

b) How many square centimetres of glass are needed to make the tank?

**Solution.** a) The volume of water is $60\cdot30\cdot30=54\,000\ \text{cm}^3=54$ litres (since $1$ litre $=1000\ \text{cm}^3$). The volume of the whole tank is $60\cdot30\cdot40=72\,000\ \text{cm}^3=72$ litres. The number of litres still needed is $72-54=18$ litres.

b) The tank has no lid, so the glass consists of one base and four side faces:
$$30\cdot60+2(60+30)\cdot40=1800+7200=9000\ (\text{cm}^2).$$

So the tank holds $54$ litres, $18$ more litres are needed, and $9000\ \text{cm}^2$ of glass is required.
:::

Now a right triangular prism.

:::example A right triangular prism
A right prism has a right-angled triangle as base, with legs $3$ cm and $4$ cm and hypotenuse $5$ cm, and its height is $10$ cm. Find its volume, lateral surface area and total surface area.

**Solution.** The base area is $B=\dfrac12\cdot3\cdot4=6\ (\text{cm}^2)$ and the base perimeter is $P=3+4+5=12$ (cm). We have
$$V=6\cdot10=60\ (\text{cm}^3),\qquad S_{lat}=12\cdot10=120\ (\text{cm}^2),$$
$$S_{tot}=120+2\cdot6=132\ (\text{cm}^2).$$
So $V=60\ \text{cm}^3$, $S_{lat}=120\ \text{cm}^2$ and $S_{tot}=132\ \text{cm}^2$.
:::

For a right quadrilateral prism, the base can be a trapezium.

:::example A right quadrilateral prism
A right prism has a right-angled trapezium as base: the two parallel sides are $5$ cm and $8$ cm, the height of the trapezium is $4$ cm and the slanting side is $5$ cm. The prism is $7$ cm high. Find its volume and total surface area.

**Solution.** The base area is $B=\dfrac{(5+8)\cdot4}{2}=26\ (\text{cm}^2)$. The base perimeter is $P=5+8+4+5=22$ (cm). We have
$$V=26\cdot7=182\ (\text{cm}^3),\qquad S_{lat}=22\cdot7=154\ (\text{cm}^2),$$
$$S_{tot}=154+2\cdot26=206\ (\text{cm}^2).$$
So $V=182\ \text{cm}^3$ and $S_{tot}=206\ \text{cm}^2$.
:::

The last example has several pieces of data, so we go through all four steps.

:::example A swimming pool with a sloping floor
Suppose a swimming pool is $25$ m long and $10$ m wide. The depth at the shallow end is $1$ m and increases steadily to $2$ m at the deep end. The pool is filled by a pump delivering $25\ \text{m}^3$ per hour. Find the volume of water in the pool (in litres) and the time needed to fill it.

**Solution.**

*Understand.* The side view of the pool is a trapezium, so the pool is a right quadrilateral prism lying on its side, with that trapezium as base. We need the volume, then we divide by the pump rate.

*Plan.* The two parallel sides of the trapezium are the depths $1$ m and $2$ m, and the height of the trapezium is the length of the pool, $25$ m. The "height" of the prism is the width of the pool, $10$ m.

*Solve.* The base area is $B=\dfrac{(1+2)\cdot25}{2}=37.5\ (\text{m}^2)$. The volume is
$$V=37.5\cdot10=375\ (\text{m}^3)=375\,000\text{ litres}.$$
The filling time is $375\div25=15$ (hours).

So the pool holds $375\,000$ litres and takes $15$ hours to fill.

*Look back.* Is there another way? The average depth is $\dfrac{1+2}{2}=1.5$ m, and $25\cdot10\cdot1.5=375\ \text{m}^3$, which agrees. If the pool had a flat floor $2$ m deep, the volume would be $500\ \text{m}^3$, more than $375\ \text{m}^3$, so our answer is reasonable because the real pool is shallower.
:::

:::warning Mistakes to watch out for
- **Forgetting to convert units.** Wrong: the tank has volume $60\cdot30\cdot40=72000$, so it holds $72000$ litres. Why it is wrong: $72000$ is in $\text{cm}^3$, and $1$ litre $=1000\ \text{cm}^3$. Right: $72000\ \text{cm}^3=72$ litres.
- **Confusing lateral and total surface area.** Wrong: using $S_{lat}$ as the amount of glass for a tank with a base. Why it is wrong: $S_{lat}$ includes only the side faces. Right: $S_{tot}=S_{lat}+2B$, and for a tank with no lid we add only one base.
- **Forgetting $\dfrac12$ when the base is a triangle.** Wrong: a base with legs $3$, $4$ and a height of $10$ gives $V=3\cdot4\cdot10=120$. Why it is wrong: $3\cdot4$ is the area of a rectangle, twice the area of the triangle. Right: $V=\dfrac12\cdot3\cdot4\cdot10=60$.
- **Mixing up the two "heights".** Wrong: using the height of the triangular base as the height of the prism. Why it is wrong: the height of the prism is the length of a lateral edge. Right: the height of the base is used for $B$, and the height $h$ of the prism is what we multiply $B$ by.
:::

**Connections.** The two formulas $V=B\cdot h$ and $S_{lat}=P\cdot h$ bring every cuboid and right prism under one rule. They rely on the areas of rectangles, trapezia and triangles that you already know, and they prepare for pyramids and cylinders in later years.

## Key terms

:::terms
- cuboid | hình hộp chữ nhật
- cube | hình lập phương
- right triangular prism | hình lăng trụ đứng tam giác
- right quadrilateral prism | hình lăng trụ đứng tứ giác
- base | mặt đáy
- lateral face | mặt bên
- lateral edge | cạnh bên
- height | chiều cao
- volume | thể tích
- lateral surface area | diện tích xung quanh
- total surface area | diện tích toàn phần
:::

## Summary

- Cuboid $a$, $b$, $c$: $V=abc$, $S_{lat}=2(a+b)c$, $S_{tot}=2(ab+bc+ca)$.
- Cube of edge $a$: $V=a^3$, $S_{tot}=6a^2$.
- Right prism: $V=B\cdot h$, $S_{lat}=P\cdot h$, $S_{tot}=S_{lat}+2B$.
- For a triangular base remember $\dfrac12$; for a trapezium base remember $\dfrac{(a+b)\cdot h}{2}$.
- $1$ litre $=1\ \text{dm}^3=1000\ \text{cm}^3$ and $1\ \text{m}^3=1000$ litres.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find the volume and total surface area of a cuboid with length $9$ cm, width $6$ cm and height $4$ cm.

::hint
**What you need:** $V=abc$ and $S_{tot}=2(ab+bc+ca)$.

**Steps:**
1. Multiply the three dimensions.
2. Work out the three areas $ab$, $bc$, $ca$ and double their sum.

::solution
We have $V=9\cdot6\cdot4=216\ (\text{cm}^3)$ and $S_{tot}=2(54+24+36)=228\ (\text{cm}^2)$.

So $V=216\ \text{cm}^3$ and $S_{tot}=228\ \text{cm}^2$.

**Answer.** $216\ \text{cm}^3$; $228\ \text{cm}^2$.
:::

:::exercise
Find the volume and total surface area of a cube of edge $7$ cm.

::hint
**What you need:** $V=a^3$ and $S_{tot}=6a^2$.

**Steps:**
1. Work out $7^3$.
2. Work out $6\cdot7^2$.

::solution
We have $V=7^3=343\ (\text{cm}^3)$ and $S_{tot}=6\cdot49=294\ (\text{cm}^2)$.

So $V=343\ \text{cm}^3$ and $S_{tot}=294\ \text{cm}^2$.

**Answer.** $343\ \text{cm}^3$; $294\ \text{cm}^2$.
:::

:::exercise
A cuboid has volume $210\ \text{cm}^3$ and a rectangular base $7$ cm long and $5$ cm wide. Find the height of the cuboid.

::hint
**What you need:** $V=B\cdot h$.

**Steps:**
1. Find the base area.
2. Divide the volume by the base area.

::solution
The base area is $7\cdot5=35\ (\text{cm}^2)$. The height is $h=\dfrac{210}{35}=6$ (cm).

So the height is $6$ cm.

**Answer.** $6$ cm.
:::

:::exercise
A water tank with no lid is a cuboid $80$ cm long, $50$ cm wide and $60$ cm high. How many litres does it hold when full? How many litres are in it when the water is $45$ cm deep?

::hint
**What you need:** $V=abc$ and $1$ litre $=1000\ \text{cm}^3$.

**Steps:**
1. Find the volume of the whole tank and change it to litres.
2. Find the volume of the water of depth $45$ cm.

::solution
The volume of the tank is $80\cdot50\cdot60=240\,000\ \text{cm}^3=240$ litres. The volume of water of depth $45$ cm is $80\cdot50\cdot45=180\,000\ \text{cm}^3=180$ litres.

So the tank holds $240$ litres when full and $180$ litres when the water is $45$ cm deep.

**Answer.** $240$ litres; $180$ litres.
:::

:::exercise
A cuboid-shaped room is $6$ m long, $4$ m wide and $3$ m high. The doors and windows take up $6\ \text{m}^2$ of wall in total. The four walls are painted with two coats; suppose one litre of paint covers $9\ \text{m}^2$ for one coat. How many litres of paint are needed (the doors and windows are not painted)?

::hint
**What you need:** the area of the four walls is $S_{lat}=2(a+b)c$.

**Steps:**
1. Work out $S_{lat}$ and subtract the area of the doors and windows.
2. Multiply by $2$ coats and divide by $9$.

::solution
The area of the four walls is $2(6+4)\cdot3=60\ (\text{m}^2)$. The area to paint is $60-6=54\ (\text{m}^2)$. Two coats cover $54\cdot2=108\ (\text{m}^2)$, so the paint needed is $108\div9=12$ (litres).

So $12$ litres of paint are needed.

**Answer.** $12$ litres.
:::

:::exercise
A right prism has a right-angled triangle as base, with legs $6$ cm and $8$ cm and hypotenuse $10$ cm, and its height is $9$ cm. Find its volume and total surface area.

::hint
**What you need:** $V=B\cdot h$ and $S_{tot}=P\cdot h+2B$.

**Steps:**
1. Find $B$ and $P$.
2. Apply the formulas.

::solution
The base area is $\dfrac12\cdot6\cdot8=24\ (\text{cm}^2)$ and the base perimeter is $6+8+10=24$ (cm). We have $V=24\cdot9=216\ (\text{cm}^3)$ and $S_{tot}=24\cdot9+2\cdot24=264\ (\text{cm}^2)$.

So $V=216\ \text{cm}^3$ and $S_{tot}=264\ \text{cm}^2$.

**Answer.** $216\ \text{cm}^3$; $264\ \text{cm}^2$.
:::

:::exercise
A right quadrilateral prism has a parallelogram as base, with sides $8$ cm and $6$ cm, and the height of the parallelogram on the $8$ cm side is $5$ cm. The prism is $10$ cm high. Find its volume and lateral surface area.

::hint
**What you need:** the area of a parallelogram is a side times the corresponding height.

**Steps:**
1. Find the base area and the base perimeter.
2. Apply $V=B\cdot h$ and $S_{lat}=P\cdot h$.

::solution
The base area is $8\cdot5=40\ (\text{cm}^2)$ and the base perimeter is $2(8+6)=28$ (cm). We have $V=40\cdot10=400\ (\text{cm}^3)$ and $S_{lat}=28\cdot10=280\ (\text{cm}^2)$.

So $V=400\ \text{cm}^3$ and $S_{lat}=280\ \text{cm}^2$.

**Answer.** $400\ \text{cm}^3$; $280\ \text{cm}^2$.
:::

:::exercise
Remember the lesson on the triangle inequality. A right prism has a triangle as base, with two sides $5$ cm and $9$ cm and the third side a whole number of centimetres. The height is $10$ cm. Find the smallest and the largest possible lateral surface area.

::hint
**What you need:** $S_{lat}=P\cdot h$; the third side $c$ satisfies $|9-5|<c<9+5$.

**Steps:**
1. Find the range of $c$.
2. Find the smallest and largest perimeter, then multiply by $10$.

::solution
We have $9-5<c<9+5$, that is $4<c<14$. Since $c$ is a whole number, $5\le c\le13$.

The base perimeter is $14+c$, with smallest value $19$ (when $c=5$) and largest value $27$ (when $c=13$). Hence the smallest $S_{lat}$ is $19\cdot10=190\ (\text{cm}^2)$ and the largest is $27\cdot10=270\ (\text{cm}^2)$.

So the smallest lateral surface area is $190\ \text{cm}^2$ and the largest is $270\ \text{cm}^2$.

**Answer.** $190\ \text{cm}^2$; $270\ \text{cm}^2$.
:::

:::exercise
A cube-shaped water tank is replaced by a tank whose edge is twice as long. By what factor do the volume and the total surface area of the new tank exceed those of the old one?

::hint
**What you need:** $V=a^3$ and $S_{tot}=6a^2$.

**Steps:**
1. Let the old edge be $a$ and the new edge $2a$.
2. Compare $V$ and $S_{tot}$ of the two tanks.

::solution
The old tank has $V=a^3$ and $S_{tot}=6a^2$. The new tank has edge $2a$, so $V'=(2a)^3=8a^3$ and $S_{tot}'=6(2a)^2=24a^2$.

Hence $V'=8V$ and $S_{tot}'=4S_{tot}$.

So the volume is $8$ times as large and the total surface area is $4$ times as large.

**Answer.** $8$ times; $4$ times.
:::

:::exercise Challenge
A cuboid has length twice its width, height $5$ cm and volume $360\ \text{cm}^3$. Find its total surface area.

::hint
**What you need:** let the width be $x$, so the length is $2x$.

**Steps:**
1. Form the equation $2x\cdot x\cdot5=360$ to find $x$.
2. Work out $S_{tot}$.

::solution
Let the width be $x$ ($x>0$, unit: cm), so the length is $2x$. From the problem we have $2x\cdot x\cdot5=360$, so $x^2=36$ and $x=6$ (since $x>0$). The length is $12$ cm.

The total surface area is $2(12\cdot6+6\cdot5+5\cdot12)=2(72+30+60)=324\ (\text{cm}^2)$.

So the total surface area is $324\ \text{cm}^2$.

**Answer.** $324\ \text{cm}^2$.
:::

## Mini test

:::quiz
::mc
The volume of a cuboid with dimensions $5$ cm, $4$ cm, $3$ cm is
A. $12\ \text{cm}^3$.
B. $60\ \text{cm}^3$.
C. $47\ \text{cm}^3$.
D. $94\ \text{cm}^3$.
::key B
$V=5\cdot4\cdot3=60\ \text{cm}^3$. A is the sum of the dimensions, C is $ab+bc+ca$, and D is the total surface area $2\cdot47$.

::mc
A cube has total surface area $54\ \text{cm}^2$. Its volume is
A. $18\ \text{cm}^3$.
B. $9\ \text{cm}^3$.
C. $27\ \text{cm}^3$.
D. $54\ \text{cm}^3$.
::key C
$6a^2=54$ gives $a=3$ and $V=27\ \text{cm}^3$. B is $a^2$, A is $54\div3$, and D is $S_{tot}$ itself.

::mc
A right prism has a right-angled triangle with sides $3$ cm, $4$ cm, $5$ cm as base, and its height is $8$ cm. Its volume is
A. $96\ \text{cm}^3$.
B. $60\ \text{cm}^3$.
C. $12\ \text{cm}^3$.
D. $48\ \text{cm}^3$.
::key D
$V=\dfrac12\cdot3\cdot4\cdot8=48\ \text{cm}^3$. A forgets $\dfrac12$, B multiplies all three base sides $3\cdot4\cdot5$, and C is the base perimeter.

::mc
A right quadrilateral prism has base perimeter $22$ cm and height $7$ cm. Its lateral surface area is
A. $154\ \text{cm}^2$.
B. $22\ \text{cm}^2$.
C. $29\ \text{cm}^2$.
D. $308\ \text{cm}^2$.
::key A
$S_{lat}=22\cdot7=154\ \text{cm}^2$. A is the base perimeter, C is $22+7$, and D wrongly doubles the answer.

::tf
A cuboid has length $6$ cm, width $4$ cm and height $3$ cm. Decide whether each statement is true or false.
a) The volume of the cuboid is $72\ \text{cm}^3$.
b) The lateral surface area is $60\ \text{cm}^2$.
c) The total surface area is $84\ \text{cm}^2$.
d) If all three dimensions are doubled, the volume doubles.
::key T T F F
a) True: $6\cdot4\cdot3=72$. b) True: $2(6+4)\cdot3=60$. c) False: $60+2\cdot24=108$. d) False: the volume becomes $2^3=8$ times as large.

::sa
A cuboid-shaped tank measures $120$ cm, $50$ cm and $80$ cm. How many litres of water does it hold when full?
::key 480
$V=120\cdot50\cdot80=480\,000\ \text{cm}^3=480$ litres.

::sa
A right prism has a right-angled triangle as base, with legs $5$ cm and $12$ cm (hypotenuse $13$ cm), and its height is $4$ cm. Find the total surface area (in $\text{cm}^2$).
::key 180
$B=\dfrac12\cdot5\cdot12=30$ and $P=5+12+13=30$. $S_{tot}=30\cdot4+2\cdot30=180\ (\text{cm}^2)$.
:::
