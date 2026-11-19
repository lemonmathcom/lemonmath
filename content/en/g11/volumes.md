---
title: Volumes of solids
description: Find the volume of a cuboid, prism, pyramid and frustum of a regular pyramid using the formulas, and apply them to real problems such as tanks and roofs.
minutes: 30
---

:::goals
- Recall and use the volume formulas for a cuboid, a cube and a prism.
- Recall and use the volume formula for a pyramid.
- Know the volume formula for a frustum of a regular pyramid and how it arises.
- Apply this to real problems: tanks, roofs, containers.
:::

Suppose a water container is shaped like a frustum of a regular pyramid: the top is a square of side $1.2$ m, the bottom is a square of side $0.8$ m, and the container is $0.9$ m tall (assumed figures). How many litres of water does it hold? To answer, we need the volume formula for a frustum, and to get it we start from simpler solids.

## Exploration: from a cube to a pyramid

A cuboid $a\times b\times c$ is made of $a\cdot b\cdot c$ unit cubes. For example, a $5\times4\times3$ block contains $60$ unit cubes.

Now take a cube of edge $a$ and choose one vertex. The cube can be cut into $3$ equal pyramids, each with the chosen vertex as apex and one of the three faces not containing that vertex as base. Each pyramid has base area $a^2$ and height $a$.

| Edge $a$ | Volume of the cube $a^3$ | Volume of each pyramid $\dfrac{a^3}{3}$ |
|---|---|---|
| $1$ | $1$ | $\dfrac13$ |
| $2$ | $8$ | $\dfrac83$ |
| $3$ | $27$ | $9$ |

Each pyramid has volume $\dfrac13\cdot a^2\cdot a$, one third of the product of the base area and the height. This hints at the volume formula of a pyramid.

## Volume formulas

:::theorem Volume of a cuboid and of a prism
- A cuboid with dimensions $a$, $b$, $c$ has $V=abc$. A cube of edge $a$ has $V=a^3$.
- A prism with base area $B$ and height $h$ has $V=B\cdot h$.
:::

The height of a prism is the distance between the planes containing its two bases. For a right prism, the height equals the length of a lateral edge.

:::theorem Volume of a pyramid
A pyramid with base area $B$ and height $h$ has volume
$$V=\frac13Bh.$$
:::

The height of a pyramid is the distance from the apex to the plane of the base. For a regular pyramid, the foot of the height is the centre of the base.

:::theorem Volume of a frustum of a regular pyramid
A frustum of a regular pyramid with base areas $B$ and $B'$ and height $h$ has volume
$$V=\frac13h\left(B+\sqrt{BB'}+B'\right).$$
:::

**Why?** A frustum is a large pyramid with the small pyramid on top removed. Let $t=\sqrt B$ and $s=\sqrt{B'}$ (the similarity ratio of the two bases is $\dfrac st$). Let $x$ be the height of the small pyramid. The two pyramids are similar, so $\dfrac{x}{x+h}=\dfrac st$, giving $x=\dfrac{hs}{t-s}$. Then
$$V=\frac13B(h+x)-\frac13B'x=\frac13\cdot\frac{h(t^3-s^3)}{t-s}=\frac13h(t^2+ts+s^2),$$
which is the formula above because $t^2=B$, $ts=\sqrt{BB'}$ and $s^2=B'$.

:::diagram A pyramid $S.ABCD$ with height $SH$
alt: Pyramid S.ABCD drawn in oblique projection with a parallelogram base ABCD and the height SH dashed from the apex S down to the point H, the centre of the base
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 2.6,4.2 above
point H 2.6,0.75 below
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment S H dashed
:::

## Examples

First, a cuboid.

:::example Volume of a cuboid
A cuboid has dimensions $5$, $4$, $3$. Find its volume.

**Solution.** Using $V=abc$:
$$V=5\cdot4\cdot3=60.$$

So the volume is $60$ (cubic units).
:::

Next, a prism.

:::example Volume of a regular triangular prism
A right prism has a base that is an equilateral triangle of side $2$ and has height $3$. Find its volume.

**Solution.** The area of an equilateral triangle of side $2$ is $B=\dfrac{\sqrt3}{4}\cdot2^2=\sqrt3$. Using $V=Bh$:
$$V=\sqrt3\cdot3=3\sqrt3\approx5.2.$$

So the volume is $3\sqrt3$.
:::

Now a pyramid.

:::example Volume of a pyramid with a lateral edge perpendicular to the base
The pyramid $S.ABCD$ has a square base $ABCD$ of side $3$, with the edge $SA$ perpendicular to the base and $SA=4$. Find its volume.

**Solution.** Since $SA\perp(ABCD)$, $SA$ is the height, $h=4$. The base area is $B=3^2=9$. Using $V=\dfrac13Bh$:
$$V=\frac13\cdot9\cdot4=12.$$

So the volume is $12$.
:::

Then a frustum.

:::example Volume of a frustum of a regular pyramid
A frustum of a regular pyramid has square bases of sides $6$ and $3$ and height $4$. Find its volume.

**Solution.** The base areas are $B=36$ and $B'=9$, so $\sqrt{BB'}=\sqrt{324}=18$. Using the formula:
$$V=\frac13\cdot4\cdot(36+18+9)=\frac13\cdot4\cdot63=84.$$

So the volume is $84$.
:::

Finally, we return to the container from the start, in four steps.

:::example Application: a container shaped like a frustum
Suppose a container is a frustum of a regular pyramid whose top is a square of side $1.2$ m, whose bottom is a square of side $0.8$ m, and whose height is $0.9$ m (assumed figures). How many litres of water does it hold when full?

**Solution.**

*Understand.* We need the volume in cubic metres, then convert to litres, with $1$ m$^3=1000$ litres.

*Plan.* The container is a frustum of a regular pyramid, so use $V=\dfrac13h(B+\sqrt{BB'}+B')$ with the two base areas and the height.

*Solve.* The base areas are $B=1.2^2=1.44$ and $B'=0.8^2=0.64$ (m$^2$). We have $\sqrt{BB'}=1.2\cdot0.8=0.96$. So
$$V=\frac13\cdot0.9\cdot(1.44+0.96+0.64)=0.3\cdot3.04=0.912\text{ m}^3.$$

Converting to litres: $0.912\cdot1000=912$ litres. So the container holds $912$ litres.

*Look back.* Is the result reasonable? The volume must lie between the volumes of the cuboids with the smaller and the larger base and the same height: $0.64\cdot0.9=0.576$ m$^3$ and $1.44\cdot0.9=1.296$ m$^3$. The value $0.912$ lies between them, so it is reasonable. It is also close to the cuboid whose base is the average area: $\dfrac{1.44+0.64}{2}\cdot0.9=0.936$ m$^3$, but slightly smaller, as the frustum formula gives.
:::

:::warning Common mistakes
- **Forgetting the factor $\dfrac13$ for a pyramid.** Wrong: $V=Bh$ for a pyramid. Why it is wrong: a pyramid fills only one third of a prism with the same base and height. Right: $V=\dfrac13Bh$.
- **Using the length of a lateral edge as the height.** Wrong: take the lateral edge $SA$ of a regular pyramid as $h$. Why it is wrong: the height is the perpendicular distance from the apex to the base. Right: find $h=SO$ by Pythagoras' theorem, where $O$ is the centre of the base.
- **Using only the average of the two bases for a frustum.** Wrong: $V=\dfrac{B+B'}{2}\cdot h$. Why it is wrong: this is not correct for a frustum, since the parallel cross-sections shrink with the square of the length. Right: $V=\dfrac13h(B+\sqrt{BB'}+B')$.
- **Mixing up units.** Wrong: convert $0.912$ m$^3$ to $91.2$ litres. Why it is wrong: $1$ m$^3=1000$ litres, not $100$. Right: $0.912$ m$^3=912$ litres.
:::

**Connections.** This lesson uses [distances in space](lesson:distances-space), because the height of a pyramid is the distance from the apex to the base, and [a line perpendicular to a plane](lesson:line-perpendicular-plane) to locate the foot of the height. From these formulas we can find the volumes of everyday objects such as tanks, roofs and containers. In construction and manufacturing, volumes tell us how much concrete to pour or how much a tank holds.

## Terms

:::terms
- thể tích | volume
- khối hộp chữ nhật | cuboid
- khối lập phương | cube
- khối lăng trụ | prism
- khối chóp | pyramid (solid)
- khối chóp cụt đều | frustum of a regular pyramid
- diện tích đáy | base area
- chiều cao | height
- lít | litre
- mét khối | cubic metre
:::

## Summary

- Cuboid: $V=abc$; cube: $V=a^3$.
- Prism: $V=Bh$, where $B$ is the base area and $h$ the height.
- Pyramid: $V=\dfrac13Bh$.
- Frustum of a regular pyramid: $V=\dfrac13h\left(B+\sqrt{BB'}+B'\right)$.
- Units: $1$ m$^3=1000$ litres; the height is a perpendicular distance, not a lateral edge.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
A cube has edge $4$. Find its volume. A cuboid has dimensions $3$, $4$, $12$: find the length of its space diagonal and its volume.

::hint
**Knowledge:** $V=a^3$; $V=abc$; the diagonal is $\sqrt{a^2+b^2+c^2}$.

**Hints on the steps:**
1. Find the volume of the cube.
2. Find the diagonal, then the volume of the cuboid.

::solution
Cube: $V=4^3=64$.

Cuboid: the diagonal is $\sqrt{9+16+144}=\sqrt{169}=13$ and $V=3\cdot4\cdot12=144$.

**Answer.** $64$; diagonal $13$ and volume $144$.
:::

:::exercise
A right prism has a base that is a right triangle with legs $3$ and $4$, and height $10$. Find its volume.

::hint
**Knowledge:** $V=Bh$.

**Hints on the steps:**
1. Find the area of the right triangle.
2. Multiply by the height.

::solution
$B=\dfrac12\cdot3\cdot4=6$ and $V=6\cdot10=60$.

**Answer.** $60$.
:::

:::exercise
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and equal to $6$. Find its volume.

::hint
**Knowledge:** $OA\perp(OBC)$, so $OA$ is the height for the base $OBC$.

**Hints on the steps:**
1. Find the area of triangle $OBC$.
2. Use $V=\dfrac13Bh$ with $h=OA$.

::solution
$B=\dfrac12\cdot6\cdot6=18$ and $h=OA=6$, so $V=\dfrac13\cdot18\cdot6=36$.

**Answer.** $36$.
:::

:::exercise
Decide whether each statement is true or false.

a) The volume of a cuboid with dimensions $a$, $b$, $c$ is $abc$.

b) The volume of a pyramid with base area $B$ and height $h$ is $Bh$.

c) If the edge of a cube is doubled, the volume becomes $8$ times as large.

d) The volume of a frustum of a regular pyramid is $\dfrac13h(B+B')$.

::hint
**Knowledge:** the volume formulas.

**Hints on the steps:**
1. Compare each statement with the formula.
2. For part c, compute $(2a)^3$.

::solution
a) **True**.

b) **False**: the factor $\dfrac13$ is missing.

c) **True**: $(2a)^3=8a^3$.

d) **False**: the term $\sqrt{BB'}$ is missing.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Suppose a water tank is a cuboid with a base of $2$ m $\times1.5$ m and a height of $1.2$ m (assumed figures). How many cubic metres of water does it hold? A pump fills it at $0.6$ m$^3$ per minute; how many minutes does it take?

::hint
**Knowledge:** $V=abc$; time equals volume divided by rate.

**Hints on the steps:**
1. Find the volume of the tank.
2. Divide by the pump rate.

::solution
$V=2\cdot1.5\cdot1.2=3.6$ m$^3$. The time is $\dfrac{3.6}{0.6}=6$ minutes.

**Answer.** $3.6$ m$^3$; $6$ minutes.
:::

:::exercise
Suppose a roof is shaped like a regular pyramid $S.ABCD$ whose base is a square of side $6$ m and whose lateral edges are $5$ m (assumed figures). Find the volume of the space inside the roof, to the nearest tenth of a cubic metre.

::hint
**Knowledge:** the foot of the height is the centre $O$ of the base; $SO=\sqrt{SA^2-OA^2}$.

**Hints on the steps:**
1. Find $OA$, then $SO$.
2. Use $V=\dfrac13Bh$.

::solution
$OA=3\sqrt2$, so $SO=\sqrt{25-18}=\sqrt7$. The base area is $B=36$. So $V=\dfrac13\cdot36\cdot\sqrt7=12\sqrt7\approx31.7$ m$^3$.

**Answer.** About $31.7$ m$^3$.
:::

:::exercise
A frustum of a regular pyramid has square bases of sides $10$ and $4$ and height $6$. Find its volume.

::hint
**Knowledge:** $V=\dfrac13h(B+\sqrt{BB'}+B')$.

**Hints on the steps:**
1. Find $B$, $B'$ and $\sqrt{BB'}$.
2. Substitute into the formula.

::solution
$B=100$, $B'=16$, $\sqrt{BB'}=40$. $V=\dfrac13\cdot6\cdot(100+40+16)=2\cdot156=312$.

**Answer.** $312$.
:::

:::exercise
Revisit percentages. The edge of a cube is increased by $10\%$. By what percentage does its volume increase?

::hint
**Knowledge:** the new edge is $1.1$ times the old edge.

**Hints on the steps:**
1. Find the volume ratio $(1.1)^3$.
2. Convert to a percentage increase.

::solution
The volume ratio is $1.1^3=1.331$, an increase of $33.1\%$.

**Answer.** It increases by $33.1\%$.
:::

:::exercise Challenge
The pyramid $S.ABCD$ has a rectangular base $ABCD$ with $AB=3$, $AD=4$, $SA\perp(ABCD)$, and the angle between $SC$ and the plane $(ABCD)$ is $45^\circ$. Find its volume.

::hint
**Knowledge:** the angle between $SC$ and the base is $\angle SCA$; triangle $SAC$ is right-angled at $A$.

**Hints on the steps:**
1. Find $AC$, then $SA$ from the $45^\circ$ angle.
2. Use $V=\dfrac13Bh$.

::solution
$AC=\sqrt{9+16}=5$. Since $\angle SCA=45^\circ$, triangle $SAC$ is right isosceles at $A$ and $SA=AC=5$. The base area is $B=3\cdot4=12$. So $V=\dfrac13\cdot12\cdot5=20$.

**Answer.** $20$.
:::

## Mini test

:::quiz
::mc NB
The volume of a prism with base area $B$ and height $h$ is
A. $\dfrac13Bh$.
B. $Bh$.
C. $\dfrac12Bh$.
D. $B+h$.
::key B
This is the prism formula. Option A is the pyramid, and C and D are not volume formulas.

::mc NB
A cuboid has dimensions $7$, $3$, $2$. Its volume is
A. $12$.
B. $21$.
C. $42$.
D. $84$.
::key C
$V=7\cdot3\cdot2=42$. Option A is the sum, B omits one dimension, and D is a doubled product.

::mc NB
A pyramid has base area $12$ and height $5$. Its volume is
A. $60$.
B. $30$.
C. $17$.
D. $20$.
::key D
$V=\dfrac13\cdot12\cdot5=20$. Option A omits the factor $\dfrac13$, B is half the product, and C is the sum.

::mc TH
A right prism has a base that is an equilateral triangle of side $4$ and has height $5$. Its volume is
A. $20\sqrt3$.
B. $10\sqrt3$.
C. $20$.
D. $40\sqrt3$.
::key A
$B=\dfrac{\sqrt3}{4}\cdot16=4\sqrt3$ and $V=4\sqrt3\cdot5=20\sqrt3$. Option C ignores the base area, and B and D have the wrong factor.

::tf NB NB TH TH
Decide whether each statement is true or false:
a) The volume of a cube of edge $a$ is $a^3$.
b) The volume of a pyramid is $Bh$.
c) The volume of a pyramid is one third of the volume of a prism with the same base and height.
d) $1$ m$^3$ equals $100$ litres.
::key T F T F
a) True. b) False: the factor $\dfrac13$ is needed. c) True. d) False: $1$ m$^3=1000$ litres.

::sa TH
A cube has edge $2.5$. Find its volume, to the nearest tenth.
::key 15.6
$V=2.5^3=15.625\approx15.6$.

::sa VD
Suppose a container is a frustum of a regular pyramid with a bottom that is a square of side $2$ m, a top that is a square of side $1$ m, and a height of $0.9$ m. Find its volume in cubic metres.
::key 2.1
$V=\dfrac13\cdot0.9\cdot(4+2+1)=0.3\cdot7=2.1$.
:::
