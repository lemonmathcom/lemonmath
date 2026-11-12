---
title: Regular triangular pyramids. Regular square-based pyramids
description: Recognise regular triangular and square-based pyramids, find slant height, surface area and volume, and use them for tents, roofs and funnels.
minutes: 25
---

:::goals
- Recognise regular triangular and regular square-based pyramids and name their parts: apex, base, lateral face, lateral edge, height, slant height.
- Find the lateral surface area and total surface area with $S_{\text{lat}}=p\cdot d$.
- Find the volume with $V=\dfrac13S_{\text{base}}\cdot h$.
- Use Pythagoras' theorem to find the slant height, height and lateral edge, and solve real-life problems.
:::

A tent is shaped like a regular square-based pyramid with base side $4$ m and height $1.5$ m (these are made-up figures). How many square metres of fabric are needed to cover the four sloping sides? How many cubic metres of air does the tent hold?

These two questions, one about the outside and one about the inside, are what we ask about every solid: the surface area tells us how much material we need, and the volume tells us how much the solid holds. This lesson answers them for the two most common pyramids, starting with the regular triangular pyramid.

## Regular triangular pyramids

### Explore: folding a piece of card

Imagine a piece of card made of an equilateral triangle of side $6$ cm as the base, with three equal isosceles triangles attached to its sides. Fold the three isosceles triangles up until their tips meet, and we get a pyramid. Suppose the altitude of each isosceles triangle (drawn from the apex) is $2$ cm.

Each lateral face has area $\dfrac12\cdot6\cdot2=6$ cm². The three faces together have area $3\cdot6=18$ cm². Notice that $18=\dfrac12\cdot(3\cdot6)\cdot2$, which is **half the perimeter of the base times the altitude of a lateral face**. This is true for every regular pyramid; why? Let us name the parts and then explain.

:::definition Regular triangular pyramid
A pyramid whose base is an equilateral triangle and whose lateral faces are equal isosceles triangles is a **regular triangular pyramid**. The foot of its height is the **centre of the base**, the point where the three medians of the base meet.
:::

In a regular triangular pyramid $S.ABC$: $S$ is the **apex**, triangle $ABC$ is the **base**, $SA$, $SB$, $SC$ are the **lateral edges**, and the segment $SO$ perpendicular to the base ($O$ is the centre of the base) is the **height**, of length $h=SO$. Let $M$ be the midpoint of $BC$. The segment $SM$ is the altitude of the lateral face $SBC$ and is called the **slant height** of the pyramid, of length $d=SM$.

:::diagram A regular triangular pyramid $S.ABC$
alt: Regular triangular pyramid S.ABC in oblique projection; the height SO is a dashed vertical segment, M is the midpoint of BC, SM is the slant height, and the dashed line AM passes through O
point A 0,0 below-left
point B 4,0 below-right
point C 1.6,1.5 above
point O 1.87,0.5 below
point M 2.8,0.75 right
point S 1.87,4 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment C A dashed
segment S O dashed
segment S M
segment A M dashed
:::

A regular triangular pyramid is not necessarily a regular tetrahedron. A regular tetrahedron has all six edges equal, but a regular triangular pyramid only needs an equilateral base and equal lateral edges; the lateral edges may differ from the base edges.

:::theorem Area and volume of a regular pyramid
A regular pyramid has base perimeter $2p$, slant height $d$, base area $S_{\text{base}}$ and height $h$. Then
- lateral surface area: $S_{\text{lat}}=p\cdot d$;
- total surface area: $S_{\text{total}}=S_{\text{lat}}+S_{\text{base}}$;
- volume: $V=\dfrac13S_{\text{base}}\cdot h$.
:::

**Why?** The lateral faces are equal triangles, each with a base equal to a side $a$ of the base polygon and an altitude $d$. With $n$ lateral faces, $S_{\text{lat}}=n\cdot\dfrac12ad=\dfrac12(na)d=p\cdot d$, because $na$ is the perimeter of the base. We accept the volume formula; you can test it with an experiment: a pyramid and a prism with the same base and the same height, and it takes three pyramids full of water to fill the prism.

To find $d$, $h$ or a lateral edge when it is not given, we use the triangle $SOM$ (right-angled at $O$ because $SO$ is perpendicular to the base):
$$SM^2=SO^2+OM^2\quad\text{that is}\quad d^2=h^2+OM^2,$$
and similarly $SA^2=h^2+OA^2$. In an equilateral triangle of side $a$, the median is $AM=\dfrac{a\sqrt3}2$ (by Pythagoras' theorem) and the centre $O$ divides the median in the ratio $2:1$, so
$$OM=\frac13AM=\frac{a\sqrt3}6,\qquad OA=\frac23AM=\frac{a\sqrt3}3.$$

:::example Surface area and volume
The regular triangular pyramid $S.ABC$ has base side $6$ cm and slant height $2$ cm. Find the lateral surface area, the height and the volume (round the volume to 1 decimal place).

**Solution.** Half the perimeter of the base is $p=\dfrac{3\cdot6}2=9$ cm. The lateral surface area is
$$S_{\text{lat}}=p\cdot d=9\cdot2=18\ (\text{cm}^2).$$

Let $M$ be the midpoint of $BC$ and $O$ the centre of the base. We have $AM=\sqrt{6^2-3^2}=3\sqrt3$ and $OM=\dfrac13AM=\sqrt3$. In triangle $SOM$, right-angled at $O$, we have
$$h=SO=\sqrt{SM^2-OM^2}=\sqrt{4-3}=1\ (\text{cm}).$$

The base area is $S_{\text{base}}=\dfrac12\cdot6\cdot3\sqrt3=9\sqrt3$ cm². The volume is
$$V=\frac13\cdot9\sqrt3\cdot1=3\sqrt3\approx5.2\ (\text{cm}^3).$$

So $S_{\text{lat}}=18$ cm², the height is $1$ cm and $V\approx5.2$ cm³.
:::

Now we look at a real object, where the height is given instead of the slant height.

:::example A decorative glass block
A decorative glass block is a regular triangular pyramid with base side $12$ cm and height $5.5$ cm. Find the slant height, the lateral surface area and the volume of the block (round the volume to 1 decimal place).

**Solution.** Let $M$ be the midpoint of a side of the base and $O$ the centre of the base. We have $OM=\dfrac{12\sqrt3}6=2\sqrt3$, so $OM^2=12$. In triangle $SOM$, right-angled at $O$, we have
$$d=SM=\sqrt{5.5^2+12}=\sqrt{42.25}=6.5\ (\text{cm}).$$

Half the perimeter of the base is $p=\dfrac{3\cdot12}2=18$ cm, so $S_{\text{lat}}=18\cdot6.5=117$ cm². The base area is $\dfrac{12^2\sqrt3}4=36\sqrt3$ cm², so
$$V=\frac13\cdot36\sqrt3\cdot5.5=66\sqrt3\approx114.3\ (\text{cm}^3).$$

So the slant height is $6.5$ cm, $S_{\text{lat}}=117$ cm² and $V\approx114.3$ cm³.
:::

## Regular square-based pyramids

:::definition Regular square-based pyramid
A pyramid whose base is a square and whose lateral faces are equal isosceles triangles is a **regular square-based pyramid**. The foot of its height is the **centre of the base**, the point where the two diagonals of the square meet.
:::

The parts are named as in the regular triangular pyramid. In a regular square-based pyramid $S.ABCD$ with base side $a$, centre $O$ and $M$ the midpoint of $BC$, we have $OM=\dfrac a2$ and $OB=\dfrac{a\sqrt2}2$. Hence
$$d^2=h^2+\frac{a^2}4,\qquad SB^2=h^2+\frac{a^2}2.$$
The formulas of the previous section still hold, with $p=2a$ and $S_{\text{base}}=a^2$.

:::diagram A regular square-based pyramid $S.ABCD$
alt: Regular square-based pyramid S.ABCD in oblique projection; the height SO is a dashed vertical segment from the apex S to the centre O of the base, M is the midpoint of BC, SM is the slant height, and hidden edges are dashed
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point O 2.6,0.75 below
point M 4.6,0.75 right
point S 2.6,4.5 above
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment C D dashed
segment D A dashed
segment S O dashed
segment O M dashed
segment S M
:::

We return to the tent from the start, going through all four steps of solving a problem.

:::example The pyramid tent
A tent is a regular square-based pyramid with base side $4$ m and height $1.5$ m. Find the area of fabric needed to cover the four sloping sides and the volume of air in the tent.

**Solution.**

*Understand.* We know the base side $a=4$ m and the height $h=1.5$ m; we need $S_{\text{lat}}$ (the fabric for the four sides) and $V$. We treat the tent as a regular pyramid and ignore the fabric used for joins.

*Plan.* The formula $S_{\text{lat}}=p\cdot d$ needs the slant height $d$. We find $d$ from the right-angled triangle $SOM$ with $OM=\dfrac a2=2$ m and $SO=h=1.5$ m.

*Solve.* We have $d=SM=\sqrt{1.5^2+2^2}=\sqrt{6.25}=2.5$ (m). Half the perimeter of the base is $p=\dfrac{4\cdot4}2=8$ m, so
$$S_{\text{lat}}=8\cdot2.5=20\ (\text{m}^2),\qquad V=\frac13\cdot4^2\cdot1.5=8\ (\text{m}^3).$$

So $20$ m² of fabric is needed and the tent holds $8$ m³ of air.

*Look back.* Is there another method? Each lateral face has area $\dfrac12\cdot4\cdot2.5=5$ m², and four faces give $20$ m², the same result. Is the result reasonable? A box with the same base and height would hold $4^2\cdot1.5=24$ m³; the pyramid holds only $\dfrac13$ of that, which is $8$ m³. If $10\%$ of the fabric is lost in cutting and joining, we need $20\cdot1.1=22$ m².
:::

When the lateral edge is given instead of the height, we find the slant height first.

:::example Given the lateral edge
The regular square-based pyramid $S.ABCD$ has base side $10$ cm and lateral edge $13$ cm. Find the lateral surface area and the total surface area.

**Solution.** Let $M$ be the midpoint of $BC$. Triangle $SBC$ is isosceles at $S$, so $SM\perp BC$. In triangle $SBM$, right-angled at $M$, with $BM=5$ and $SB=13$, we have
$$d=SM=\sqrt{13^2-5^2}=12\ (\text{cm}).$$

Half the perimeter of the base is $p=\dfrac{4\cdot10}2=20$ cm, so $S_{\text{lat}}=20\cdot12=240$ cm². The base area is $10^2=100$ cm², so $S_{\text{total}}=240+100=340$ cm².

So $S_{\text{lat}}=240$ cm² and $S_{\text{total}}=340$ cm².

**Remark.** The height can be found too: $h=\sqrt{12^2-5^2}=\sqrt{119}\approx10.9$ cm.
:::

:::warning Common mistakes
- **Using the height instead of the slant height.** Wrong: for the tent ($a=4$, $h=1.5$), working out $S_{\text{lat}}=8\cdot1.5=12$ m². Why it is wrong: the formula uses the altitude $SM$ of a lateral face, not the height $SO$ of the pyramid. Right: $d=2.5$, so $S_{\text{lat}}=8\cdot2.5=20$ m².
- **Forgetting the factor $\dfrac13$ in the volume.** Wrong: $V=4^2\cdot1.5=24$ m³. Why it is wrong: that is the volume of a box with the same base and height. Right: $V=\dfrac13\cdot24=8$ m³.
- **Thinking the lateral faces are equilateral.** Wrong: a regular triangular pyramid has three equilateral lateral faces. Why it is wrong: the lateral faces are only isosceles; in the first example the lateral edge is $\sqrt{13}\approx3.6$ cm, not the base side $6$ cm. Right: the lateral faces are equal isosceles triangles.
- **Mixing up the distance $OM$.** Wrong: in a regular triangular pyramid with base side $a$, taking $OM=\dfrac a2$. Why it is wrong: $\dfrac a2$ is $BM$; $O$ is the centroid, so $OM=\dfrac13AM=\dfrac{a\sqrt3}6$. Right: only for a square is $OM=\dfrac a2$.
:::

**Connections.** This lesson uses Pythagoras' theorem (in the right-angled triangles $SOM$ and $SBM$), the centroid of a triangle, and the areas of a triangle and a square. It prepares for solids in grade 9 (cone and sphere), where we meet the same ideas of "lateral area" and "volume is one third of base times height".

## Key terms

:::terms
- regular triangular pyramid | hình chóp tam giác đều
- regular square-based pyramid | hình chóp tứ giác đều
- apex | đỉnh
- base | đáy
- lateral face | mặt bên
- lateral edge | cạnh bên
- height (perpendicular height) | đường cao
- slant height | trung đoạn
- lateral surface area | diện tích xung quanh
- total surface area | diện tích toàn phần
- volume | thể tích
:::

## Summary

- Regular pyramid: the base is a regular polygon, the lateral faces are equal isosceles triangles, and the foot of the height is the centre of the base.
- $S_{\text{lat}}=p\cdot d$ ($p$ is half the perimeter of the base, $d$ the slant height), $S_{\text{total}}=S_{\text{lat}}+S_{\text{base}}$, $V=\dfrac13S_{\text{base}}\cdot h$.
- $d^2=h^2+OM^2$ and $SA^2=h^2+OA^2$. Equilateral triangle of side $a$: $OM=\dfrac{a\sqrt3}6$, $OA=\dfrac{a\sqrt3}3$. Square of side $a$: $OM=\dfrac a2$, $OB=\dfrac{a\sqrt2}2$.
- The slant height is not the height: the slant height lies in a lateral face, the height is perpendicular to the base.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Is each statement true or false?

a) A regular triangular pyramid has three equilateral lateral faces.

b) The foot of the height of a regular triangular pyramid is the centroid of the base triangle.

c) The lateral edges of a regular square-based pyramid are all equal.

d) A regular tetrahedron is a regular triangular pyramid.

::hint
**What you need:** the definitions of a regular pyramid and a regular tetrahedron.

**Steps:**
1. Recall what kind of triangles the lateral faces of a regular pyramid are.
2. For d), check the base and the foot of the height of a regular tetrahedron.

::solution
a) **False**: the lateral faces are isosceles triangles, not necessarily equilateral.

b) **True**: the foot of the height is the centre of the base, which is the centroid of the equilateral triangle.

c) **True**: the lateral faces are equal isosceles triangles, so the lateral edges are equal.

d) **True**: a regular tetrahedron has an equilateral base and equal lateral edges (equal to the base edge), so the foot of its height is the centre of the base.

**Answer.** a) False; b) True; c) True; d) True.
:::

:::exercise
A regular triangular pyramid has base side $8$ cm and slant height $3$ cm. Find the lateral surface area.

::hint
**What you need:** $S_{\text{lat}}=p\cdot d$ where $p$ is half the perimeter of the base.

**Steps:**
1. Find half the perimeter of the base.
2. Multiply by the slant height.

::solution
Half the perimeter of the base is $p=\dfrac{3\cdot8}2=12$ cm. The lateral surface area is $S_{\text{lat}}=12\cdot3=36$ cm².

**Answer.** $36$ cm².
:::

:::exercise
A regular square-based pyramid has base side $8$ cm and slant height $5$ cm. Find the lateral surface area, the total surface area, the height and the volume.

::hint
**What you need:** $S_{\text{lat}}=p\cdot d$; $d^2=h^2+\left(\dfrac a2\right)^2$; $V=\dfrac13a^2h$.

**Steps:**
1. Find $S_{\text{lat}}$ and $S_{\text{total}}$.
2. Find $h$ from the right-angled triangle $SOM$ with $OM=4$, then find $V$.

::solution
Half the perimeter of the base is $p=\dfrac{4\cdot8}2=16$ cm, so $S_{\text{lat}}=16\cdot5=80$ cm² and $S_{\text{total}}=80+8^2=144$ cm². In triangle $SOM$, right-angled at $O$, with $OM=4$ and $SM=5$, we have $h=\sqrt{5^2-4^2}=3$ cm. The volume is $V=\dfrac13\cdot64\cdot3=64$ cm³.

**Answer.** $S_{\text{lat}}=80$ cm²; $S_{\text{total}}=144$ cm²; $h=3$ cm; $V=64$ cm³.
:::

:::exercise
The regular triangular pyramid $S.ABC$ has base side $6$ cm and height $1$ cm. Find the length of the lateral edge $SA$ (round to 1 decimal place).

::hint
**What you need:** $SA^2=h^2+OA^2$ with $OA=\dfrac{a\sqrt3}3$.

**Steps:**
1. Find $OA$.
2. Look at triangle $SOA$, right-angled at $O$.

::solution
We have $OA=\dfrac{6\sqrt3}3=2\sqrt3$. In triangle $SOA$, right-angled at $O$, we have $SA=\sqrt{1^2+(2\sqrt3)^2}=\sqrt{13}\approx3.6$ (cm).

**Answer.** $SA\approx3.6$ cm.
:::

:::exercise
Remember Pythagoras' theorem. A regular square-based pyramid has base side $10$ cm and height $12$ cm. Find the slant height, the lateral surface area and the volume.

::hint
**What you need:** $d^2=h^2+OM^2$ with $OM=\dfrac a2$.

**Steps:**
1. Find $d$ from the right-angled triangle $SOM$.
2. Use the formulas for $S_{\text{lat}}$ and $V$.

::solution
In triangle $SOM$, right-angled at $O$, with $OM=5$ and $SO=12$, we have $d=\sqrt{12^2+5^2}=13$ cm. Half the perimeter of the base is $20$ cm, so $S_{\text{lat}}=20\cdot13=260$ cm². The volume is $V=\dfrac13\cdot10^2\cdot12=400$ cm³.

**Answer.** $d=13$ cm; $S_{\text{lat}}=260$ cm²; $V=400$ cm³.
:::

:::exercise
A glass block is a regular triangular pyramid with base side $12$ cm and height $5.5$ cm. Coloured paper is stuck on the three sloping faces. Find the area of paper needed and the volume of the block (round the volume to 1 decimal place).

::hint
**What you need:** find the slant height from $d^2=h^2+OM^2$ with $OM=\dfrac{a\sqrt3}6$.

**Steps:**
1. Find $OM$, then $d$.
2. Find $S_{\text{lat}}$ and $V$.

::solution
We have $OM=\dfrac{12\sqrt3}6=2\sqrt3$, so $d=\sqrt{5.5^2+12}=6.5$ cm. Half the perimeter of the base is $18$ cm, so $S_{\text{lat}}=18\cdot6.5=117$ cm². The base area is $36\sqrt3$ cm², so $V=\dfrac13\cdot36\sqrt3\cdot5.5=66\sqrt3\approx114.3$ cm³.

**Answer.** $117$ cm²; $\approx114.3$ cm³.
:::

:::exercise
The roof of a pavilion is a regular square-based pyramid with base side $6$ m and height $4$ m. Suppose tiling costs $180\,000$ dong for each square metre of roof. Find the cost of tiling the four sloping faces.

::hint
**What you need:** the area of the roof is the lateral surface area; find the slant height first.

**Steps:**
1. Find $d$ from triangle $SOM$ with $OM=3$.
2. Find $S_{\text{lat}}$, then multiply by the price.

::solution
In triangle $SOM$, right-angled at $O$, with $OM=3$ and $SO=4$, we have $d=\sqrt{4^2+3^2}=5$ m. Half the perimeter of the base is $12$ m, so $S_{\text{lat}}=12\cdot5=60$ m². The cost is $60\cdot180\,000=10\,800\,000$ (dong).

**Answer.** $10\,800\,000$ dong.
:::

:::exercise
A funnel is a regular square-based pyramid with its apex pointing down. The top of the funnel is a square of side $30$ cm and the funnel is $40$ cm deep. How many litres of water can the funnel hold? ($1$ litre $=1000$ cm³.)

::hint
**What you need:** $V=\dfrac13S_{\text{base}}\cdot h$; change cm³ to litres.

**Steps:**
1. Find the area of the top of the funnel.
2. Find $V$, then change the unit.

::solution
The area of the top is $30^2=900$ cm². The volume is $V=\dfrac13\cdot900\cdot40=12\,000$ cm³ $=12$ litres.

**Answer.** $12$ litres.
:::

:::exercise Challenge
The regular tetrahedron $ABCD$ has edge $6$. Find the height from the vertex $D$ to the plane $(ABC)$ and the volume of the tetrahedron (round to 1 decimal place).

::hint
**What you need:** a regular tetrahedron is a regular triangular pyramid whose lateral edges equal the base edges; $DO^2=DA^2-OA^2$ with $OA=\dfrac{a\sqrt3}3$.

**Steps:**
1. Find $OA$ for the base $ABC$ of side $6$.
2. Find $h=DO$, then $V$.

::solution
Let $O$ be the centre of the equilateral triangle $ABC$. We have $OA=\dfrac{6\sqrt3}3=2\sqrt3$. In triangle $DOA$, right-angled at $O$, we have $h=DO=\sqrt{6^2-12}=\sqrt{24}=2\sqrt6\approx4.9$. The base area is $9\sqrt3$, so $V=\dfrac13\cdot9\sqrt3\cdot2\sqrt6=18\sqrt2\approx25.5$.

**Answer.** $h=2\sqrt6\approx4.9$; $V=18\sqrt2\approx25.5$.
:::

## Mini test

:::quiz
::mc
The regular square-based pyramid $S.ABCD$ has base side $16$ and height $6$. The slant height is
A. $14$.
B. $2\sqrt{41}$.
C. $2\sqrt{73}$.
D. $10$.
::key D
$OM=8$, so $d=\sqrt{6^2+8^2}=10$. Option A adds $h$ and $OM$, B uses $OB=8\sqrt2$ instead of $OM$, and C uses the whole side $16$.

::mc
A regular triangular pyramid has base side $6$ cm and slant height $5$ cm. The lateral surface area is
A. $45$ cm².
B. $90$ cm².
C. $15$ cm².
D. $30$ cm².
::key A
$p=9$, so $S_{\text{lat}}=9\cdot5=45$. Option B forgets the $\dfrac12$ (uses the perimeter), C is the area of one lateral face, and D is $6\cdot5$.

::mc
A regular square-based pyramid has base side $6$ cm and height $5$ cm. The volume is
A. $180$ cm³.
B. $60$ cm³.
C. $30$ cm³.
D. $40$ cm³.
::key B
$V=\dfrac13\cdot36\cdot5=60$. Option A forgets the $\dfrac13$, C uses $\dfrac12$, and D uses the base perimeter $24$ instead of the base area.

::mc
A regular triangular pyramid has base side $6$ and height $1$. The distance $OM$ from the centre of the base to a side of the base is
A. $3$.
B. $2\sqrt3$.
C. $\sqrt3$.
D. $3\sqrt3$.
::key C
$OM=\dfrac{a\sqrt3}6=\sqrt3$. Option A is $\dfrac a2$, B is $OA$, and D is the median $AM$.

::tf
The regular square-based pyramid $S.ABCD$ has base side $12$ and height $8$ ($O$ is the centre of the base and $M$ is the midpoint of $BC$). Decide whether each statement is true or false.
a) $SM=10$.
b) The lateral surface area is $480$.
c) The lateral edge $SB=8$.
d) The volume is $384$.
::key T F F T
a) True: $SM=\sqrt{8^2+6^2}=10$. b) False: $S_{\text{lat}}=24\cdot10=240$; $480$ comes from forgetting the $\dfrac12$. c) False: $SB=\sqrt{8^2+(6\sqrt2)^2}=\sqrt{136}$, and $8$ is the height. d) True: $V=\dfrac13\cdot144\cdot8=384$.

::sa
A regular triangular pyramid has base side $6$ cm and height $2$ cm. Find its volume (in cm³, give your answer to 1 decimal place).
::key 10.4
$S_{\text{base}}=9\sqrt3$, so $V=\dfrac13\cdot9\sqrt3\cdot2=6\sqrt3\approx10.4$.

::sa
A regular square-based pyramid has base side $6$ dm and slant height $7$ dm. Find its total surface area (in dm²).
::key 120
$S_{\text{lat}}=12\cdot7=84$ and $S_{\text{base}}=36$, so $S_{\text{total}}=84+36=120$.
:::
