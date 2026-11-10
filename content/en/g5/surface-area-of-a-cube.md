---
title: Lateral and total surface area of a cube
description: Learn to find the lateral surface area (4 side faces) and total surface area (6 faces) of a cube: multiply the area of one face by 4 or by 6.
minutes: 15
---

:::goals
- Know that a cube has $6$ faces, all equal squares.
- Find the lateral surface area and the total surface area of a cube.
- Solve real-life problems: wrapping paper, painting a box.
:::

Nam has a gift box in the shape of a cube. Its edge is $10$ cm long. Nam wants to cover the whole box with coloured paper. How many square centimetres of paper does he need?

You do not need to measure every face. If you know what is special about a cube, a few multiplications are enough.

## Let's explore

Nam cuts the box along some edges and lays it flat. He gets $6$ equal squares, each with a side of $10$ cm.

:::diagram The net of the gift box: 4 side faces and 2 bases
alt: A net made of 6 equal squares: a row of 4 squares for the side faces, and two more squares for the bases, one above and one below the second square
point p01 0,1 ""
point p11 1,1 ""
point p21 2,1 ""
point p31 3,1 ""
point p41 4,1 ""
point p02 0,2 ""
point p12 1,2 ""
point p22 2,2 ""
point p32 3,2 ""
point p42 4,2 ""
point p13 1,3 ""
point p23 2,3 ""
point p10 1,0 ""
point p20 2,0 ""
polygon p01 p11 p12 p02
polygon p11 p21 p22 p12
polygon p21 p31 p32 p22
polygon p31 p41 p42 p32
polygon p12 p22 p23 p13
polygon p10 p20 p21 p11
label 0.5,1.5 "side"
label 1.5,1.5 "side"
label 2.5,1.5 "side"
label 3.5,1.5 "side"
label 1.5,2.5 "base"
label 1.5,0.5 "base"
:::

- Area of one face: $10\times10=100\ (\text{cm}^2)$.
- The four side faces around the box: $100\times4=400\ (\text{cm}^2)$.
- All six faces: $100\times6=600\ (\text{cm}^2)$.

So Nam needs $600\ \text{cm}^2$ of paper to cover the box. The $400\ \text{cm}^2$ is the area of the $4$ side faces: this is the **lateral surface area**.

:::theorem Surface area of a cube with edge $a$
A cube has $6$ faces, all equal squares. Each face has area $a\times a$.

- The **lateral surface area** is the area of the $4$ side faces: $S_{\text{lat}}=a\times a\times4$.
- The **total surface area** is the area of all $6$ faces: $S_{\text{total}}=a\times a\times6$.
:::

:::diagram A cube with edge $a$: each face is an $a\times a$ square
alt: A cube drawn in oblique projection, with the hidden edges dashed; the front face is marked a × a
point A 0,0 ""
point B 3,0 ""
point C 4.2,1.4 ""
point D 1.2,1.4 ""
point A' 0,3 ""
point B' 3,3 ""
point C' 4.2,4.4 ""
point D' 1.2,4.4 ""
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
label 1.5,1.5 "a × a"
:::

The rules work because all faces are equal: we multiply the area of one face by the number of faces. The total surface area is bigger than the lateral surface area by exactly the $2$ bases, so $S_{\text{total}}=S_{\text{lat}}+a\times a\times2$.

## Examples

We start with a cube whose edge is a whole number.

:::example Find both areas
A cube has an edge of $5$ cm. Find its lateral surface area and its total surface area.

**Solution.** We find the area of one face, then multiply by $4$ or by $6$. The area of one face is $5\times5=25\ (\text{cm}^2)$, so:
$$S_{\text{lat}}=25\times4=100\ (\text{cm}^2),\qquad S_{\text{total}}=25\times6=150\ (\text{cm}^2).$$
So the lateral surface area is $100\ \text{cm}^2$ and the total surface area is $150\ \text{cm}^2$.
:::

When the edge is a decimal, you multiply two decimals to find the area of one face.

:::example A decimal edge
A cube has an edge of $1.5$ m. Find its lateral surface area and its total surface area.

**Solution.** First we find the area of one face:
$$1.5\times1.5=2.25\ (\text{m}^2).$$
Then we multiply by $4$ and by $6$:
$$S_{\text{lat}}=2.25\times4=9\ (\text{m}^2),\qquad S_{\text{total}}=2.25\times6=13.5\ (\text{m}^2).$$
So the lateral surface area is $9\ \text{m}^2$ and the total surface area is $13.5\ \text{m}^2$.
:::

In real life, many objects do not have all $6$ faces. You must count how many faces to include.

:::example A bin with no lid
Mr Hai makes a metal bin in the shape of a cube with no lid. Its edge is $3$ dm. He paints the whole outside of the bin. How many square decimetres does he paint?

**Solution.** The bin has no lid, so only $5$ faces are left: $4$ sides and $1$ base. The area of one face is $3\times3=9\ (\text{dm}^2)$, so:
$$9\times5=45\ (\text{dm}^2).$$
So he paints $45\ \text{dm}^2$.

**Check.** The total surface area is $9\times6=54\ (\text{dm}^2)$. Taking away the lid, $9\ \text{dm}^2$, leaves $54-9=45\ (\text{dm}^2)$. The results agree.
:::

Finally, we work backwards: we know the area and want the edge.

:::example Find the edge
The total surface area of a cube is $96\ \text{cm}^2$. Find the length of its edge.

**Solution.** A cube has $6$ equal faces, so we divide $96$ by $6$ to get the area of one face:
$$96\div6=16\ (\text{cm}^2).$$
We need a number that gives $16$ when multiplied by itself. Since $4\times4=16$, the edge is $4$ cm.

**Check.** $4\times4\times6=96$. Correct.
:::

If you are given the lateral surface area instead, divide by $4$ (not $6$) to get the area of one face.

:::warning Mistakes to watch out for
- **Forgetting to multiply the edge by itself.** Wrong: a cube with edge $3$ cm has $S_{\text{total}}=3\times6=18\ \text{cm}^2$. Why it is wrong: $3\times6$ is not an area; one face has area $3\times3=9$. Right: $S_{\text{total}}=3\times3\times6=54\ \text{cm}^2$.
- **Using the wrong number of faces.** Wrong: finding the lateral surface area as $a\times a\times6$. Why it is wrong: the lateral surface area has only the $4$ side faces, not the two bases. Right: $a\times a\times4$.
- **Wrong unit.** Wrong: "Answer: $54\ \text{cm}$". Right: "Answer: $54\ \text{cm}^2$", because area is measured in square centimetres.
:::

## Key terms

:::terms
- cube | hình lập phương
- edge | cạnh
- face | mặt
- side face (lateral face) | mặt bên
- base | mặt đáy
- square | hình vuông
- net | hình khai triển
- lateral surface area | diện tích xung quanh
- total surface area | diện tích toàn phần
- square centimetre | xăng-ti-mét vuông
:::

## Summary

- A cube has $6$ faces, all equal squares.
- Lateral surface area ($4$ side faces): $S_{\text{lat}}=a\times a\times4$.
- Total surface area (all $6$ faces): $S_{\text{total}}=a\times a\times6$.
- An object with no lid has only $5$ faces: multiply the area of one face by $5$.
- Given an area, to find the edge: divide to get the area of one face, then find the number that multiplies by itself to give it.
- Always write the area with a square unit, for example $\text{cm}^2$.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find the lateral surface area of a cube with edge $4$ cm.

::hint
**What you need:** $S_{\text{lat}}=a\times a\times4$.

**Steps:**
1. Find the area of one face: $4\times4$.
2. Multiply the result by $4$.

::solution
The area of one face is $4\times4=16\ (\text{cm}^2)$. The lateral surface area is:
$$16\times4=64\ (\text{cm}^2).$$

**Answer.** $64\ \text{cm}^2$.
:::

:::exercise
Find the total surface area of a cube with edge $7$ cm.

::hint
**What you need:** $S_{\text{total}}=a\times a\times6$.

**Steps:**
1. Find the area of one face: $7\times7$.
2. Multiply the result by $6$.

::solution
The area of one face is $7\times7=49\ (\text{cm}^2)$. The total surface area is:
$$49\times6=294\ (\text{cm}^2).$$

**Answer.** $294\ \text{cm}^2$.
:::

:::exercise
A cube has an edge of $0.5$ m. Find:

a) the lateral surface area;

b) the total surface area.

::hint
**What you need:** one face has area $a\times a$; multiply by $4$ for the lateral surface area and by $6$ for the total surface area.

**Steps:**
1. Work out $0.5\times0.5$.
2. Multiply by $4$ in part a) and by $6$ in part b).

::solution
The area of one face is $0.5\times0.5=0.25\ (\text{m}^2)$.

a) $S_{\text{lat}}=0.25\times4=1\ (\text{m}^2)$.

b) $S_{\text{total}}=0.25\times6=1.5\ (\text{m}^2)$.

**Answer.** a) $1\ \text{m}^2$; b) $1.5\ \text{m}^2$.
:::

:::exercise
Each face of a cube-shaped dice has an area of $9\ \text{cm}^2$. Find the total surface area of the dice.

::hint
**What you need:** a cube has $6$ equal faces.

**Steps:**
1. What do we know? What is asked? One face is $9\ \text{cm}^2$; we want the area of all $6$ faces.
2. Multiply the area of one face by $6$, then check.

::solution
The dice has $6$ equal faces, so:
$$S_{\text{total}}=9\times6=54\ (\text{cm}^2).$$

**Answer.** $54\ \text{cm}^2$.
:::

:::exercise
Lan covers the whole of a cube-shaped gift box with paper (ignoring any overlap). The edge of the box is $12$ cm. How many square centimetres of paper does she need?

::hint
**What you need:** covering the whole box means covering all $6$ faces: use the total surface area.

**Steps:**
1. What do we know? What is asked? The edge is $12$ cm; we want the area of paper.
2. Work out $12\times12$, then multiply by $6$.

::solution
The area of one face is $12\times12=144\ (\text{cm}^2)$. The paper needed is:
$$144\times6=864\ (\text{cm}^2).$$

**Answer.** $864\ \text{cm}^2$.
:::

:::exercise
Lan paints the $4$ side faces of a cube-shaped block of wood with edge $15$ cm; the two bases are not painted. How many square centimetres are painted?

::hint
**What you need:** the $4$ side faces make the lateral surface area: $S_{\text{lat}}=a\times a\times4$.

**Steps:**
1. What do we know? What is asked? The edge is $15$ cm; we want the area of the $4$ side faces.
2. Work out $15\times15$, then multiply by $4$.

::solution
The area of one face is $15\times15=225\ (\text{cm}^2)$. The painted area is:
$$225\times4=900\ (\text{cm}^2).$$

**Answer.** $900\ \text{cm}^2$.
:::

:::exercise
Remember the last lesson. Cuboid $A$ is $8$ cm long, $5$ cm wide and $4$ cm high. Cube $B$ has an edge of $6$ cm. Which one has the larger total surface area, and by how many square centimetres?

::hint
**What you need:** for a cuboid, $S_{\text{lat}}=$ perimeter of the base $\times$ height, and $S_{\text{total}}=S_{\text{lat}}+2\times$ area of the base.

**Steps:**
1. Find $S_{\text{total}}$ of $A$: the perimeter of the base is $(8+5)\times2$.
2. Find $S_{\text{total}}$ of $B$: $6\times6\times6$.
3. Compare the two results, then subtract.

::solution
Cuboid $A$: the perimeter of the base is $(8+5)\times2=26\ (\text{cm})$, so $S_{\text{lat}}=26\times4=104\ (\text{cm}^2)$. One base has area $8\times5=40\ (\text{cm}^2)$, so $S_{\text{total}}=104+40\times2=184\ (\text{cm}^2)$.

Cube $B$: $S_{\text{total}}=6\times6\times6=216\ (\text{cm}^2)$.

Since $216>184$, cube $B$ is larger, and $216-184=32\ (\text{cm}^2)$.

**Answer.** Cube $B$ is larger, by $32\ \text{cm}^2$.
:::

:::exercise Challenge
Cube $A$ has an edge of $3$ cm. Cube $B$ has an edge of $6$ cm, twice the edge of $A$. How many times as large as the total surface area of $A$ is the total surface area of $B$?

::hint
**What you need:** $S_{\text{total}}=a\times a\times6$; to compare, find each area separately, then divide.

**Steps:**
1. Find $S_{\text{total}}$ of $A$.
2. Find $S_{\text{total}}$ of $B$.
3. Divide the area of $B$ by the area of $A$.

::solution
Cube $A$: $S_{\text{total}}=3\times3\times6=54\ (\text{cm}^2)$.

Cube $B$: $S_{\text{total}}=6\times6\times6=216\ (\text{cm}^2)$.

We have $216\div54=4$. The edge is doubled but the area is $4$ times as large, because the area of each face is the edge times the edge.

**Answer.** $4$ times as large.
:::

## Mini test

:::quiz
::mc
A cube has an edge of $6$ cm. Its lateral surface area is
A. $144\ \text{cm}^2$.
B. $36\ \text{cm}^2$.
C. $24\ \text{cm}^2$.
D. $216\ \text{cm}^2$.
::key A
$S_{\text{lat}}=6\times6\times4=144\ (\text{cm}^2)$. Option C is the mistake of not multiplying the edge by itself ($6\times4$); option D is the total surface area.

::mc
A cube has an edge of $8$ cm. Its total surface area is
A. $48\ \text{cm}^2$.
B. $384\ \text{cm}^2$.
C. $256\ \text{cm}^2$.
D. $64\ \text{cm}^2$.
::key B
$S_{\text{total}}=8\times8\times6=384\ (\text{cm}^2)$. Option C is the lateral surface area; option D is only the area of one face.

::mc
A cube-shaped box has no lid and an edge of $5$ dm. The area of metal needed to make it (ignoring joins) is
A. $100\ \text{dm}^2$.
B. $150\ \text{dm}^2$.
C. $125\ \text{dm}^2$.
D. $25\ \text{dm}^2$.
::key C
The box has $5$ faces, each $5\times5=25\ (\text{dm}^2)$, so we need $25\times5=125\ (\text{dm}^2)$. Option A forgets the base; option B counts the lid as well.

::mc
The total surface area of a cube is $24\ \text{dm}^2$. The edge of the cube is
A. $144$ dm.
B. $4$ dm.
C. $6$ dm.
D. $2$ dm.
::key D
One face has area $24\div6=4\ (\text{dm}^2)$, and $2\times2=4$, so the edge is $2$ dm. Option B stops at the area of one face; option C divides by $4$ instead of $6$.

::tf
A cube has an edge of $3$ cm.
a) Each face has area $9\ \text{cm}^2$.
b) The lateral surface area is $12\ \text{cm}^2$.
c) The total surface area is $54\ \text{cm}^2$.
d) The total surface area is $18\ \text{cm}^2$ more than the lateral surface area.
::key T F T T
a) True: $3\times3=9$. b) False: $S_{\text{lat}}=3\times3\times4=36$, not $3\times4=12$. c) True: $9\times6=54$. d) True: $54-36=18$, which is the area of the two bases, $9\times2$.

::sa
A cube has an edge of $2.5$ dm. Find its total surface area (in $\text{dm}^2$, as a decimal).
::key 37.5
One face: $2.5\times2.5=6.25$. So $S_{\text{total}}=6.25\times6=37.5\ (\text{dm}^2)$.

::sa
The lateral surface area of a cube is $196\ \text{cm}^2$. How many centimetres long is its edge?
::key 7
One face: $196\div4=49\ (\text{cm}^2)$. Since $7\times7=49$, the edge is $7$ cm.
:::
