---
title: Shapes with a line of symmetry. Shapes with a centre of symmetry
description: Recognise lines of symmetry and centres of symmetry, count the lines of symmetry and find the centre of symmetry of familiar flat shapes.
minutes: 35
---

:::goals
- Recognise a shape with a line of symmetry and point out its lines of symmetry.
- Recognise a shape with a centre of symmetry and point out the centre.
- Know the number of lines of symmetry and the centre of symmetry of: equilateral triangle, square, regular hexagon, rectangle, rhombus, parallelogram, isosceles trapezium, circle.
- Use symmetry to find lengths and areas and to explain things in everyday life.
:::

Have you ever cut a heart out of paper? People do not draw a whole heart and then cut it out. They fold the paper in half, cut only **half** a heart against the fold, and open it up. The two halves match like a mirror image, and the heart is far more even than one drawn by hand.

A playing card has a different odd feature: whether you hold it the right way up or upside down, the picture looks exactly the same. There is no fold here at all. The card is "balanced" in another way: turn it half a turn and it lands on itself.

These two kinds of balance have their own names in mathematics: line symmetry and point symmetry. Once you understand them, you will see why so many things around us, from a butterfly to a pinwheel, are beautiful in such a regular way.

## Shapes with a line of symmetry

Back to the paper heart. The fold is a straight line that splits the shape into two parts. When we fold along that line, the two parts **coincide exactly**.

:::definition Line of symmetry
A line $d$ splits a shape into two parts so that, if we fold the shape along $d$, the two parts coincide exactly. Then we say the shape is a **shape with a line of symmetry**, and $d$ is a **line of symmetry** of the shape.
:::

A shape can have one line of symmetry, several, or none. The simplest test: cut the shape out of paper and find how many ways it can be folded in half so that the two halves match.

Try it with a rectangle. Fold along the line joining the midpoints of the two long sides: the halves match. Fold along the line joining the midpoints of the two short sides: they match again. So a rectangle has two lines of symmetry.

:::diagram The two lines of symmetry $m$ and $n$ of a rectangle
alt: Rectangle ABCD with two dashed lines through the midpoints of opposite sides: a vertical line m and a horizontal line n
point A 0,3 above-left
point B 5,3 above-right
point C 5,0 below-right
point D 0,0 below-left
point P 2.5,3.7 ""
point Q 2.5,-0.7 ""
point R -0.7,1.5 ""
point S 5.7,1.5 ""
polygon A B C D
segment P Q dashed
segment R S dashed
label 2.8,3.6 "m"
label 5.8,1.8 "n"
:::

What about folding along a diagonal? Try it and you will see that the two halves do **not** match: a corner sticks out. A diagonal splits the rectangle into two equal parts, but it is not a line of symmetry. Halving is not enough; the halves must land on each other when folded.

For an equilateral triangle, each line through a vertex and the midpoint of the opposite side is a line of symmetry. There are three vertices, so there are three lines.

:::diagram The three lines of symmetry of an equilateral triangle
alt: Equilateral triangle ABC with three dashed lines, each through a vertex and the midpoint of the opposite side
point A 2,3.46 above
point B 0,0 below-left
point C 4,0 below-right
point P 2,-0.6 ""
point Q 3.6,2.08 ""
point R 0.4,2.08 ""
polygon A B C
segment A P dashed
segment B Q dashed
segment C R dashed
:::

## Number of lines of symmetry of familiar shapes

By folding paper in this way, we can draw up the following table.

| Shape | Number of lines of symmetry | The lines of symmetry |
|---|---|---|
| Equilateral triangle | $3$ | the three lines through a vertex and the midpoint of the opposite side |
| Square | $4$ | the two diagonals; the two lines joining midpoints of opposite sides |
| Regular hexagon | $6$ | the three main diagonals; the three lines joining midpoints of opposite sides |
| Rectangle | $2$ | the two lines joining midpoints of opposite sides |
| Rhombus | $2$ | the two diagonals |
| Isosceles trapezium | $1$ | the line joining the midpoints of the two bases |
| Parallelogram | $0$ | none |
| Circle | infinitely many | every line through the centre |

The table shows something interesting. A square is both a rectangle and a rhombus, so it has the two lines of a rectangle as well as the two lines of a rhombus: $2+2=4$. The more "regular" a shape is, the more lines of symmetry it has, and the circle, the most regular shape of all, has infinitely many.

## Shapes with a centre of symmetry

A parallelogram has no line of symmetry. Yet when we look at it, it still seems balanced. Why?

Put the tip of a pencil on the point $O$ where the diagonals meet and turn the parallelogram **half a turn** about $O$. The vertex $A$ moves to where $C$ was, the vertex $B$ moves to where $D$ was, and the whole shape lands exactly on its old position.

:::diagram A parallelogram with centre of symmetry $O$
alt: Parallelogram ABCD whose diagonals meet at O; the point M on side AB and the point M' on side CD are in line with O and at the same distance from O
point A 1,2.5 above-left
point B 6,2.5 above-right
point C 5,0 below-right
point D 0,0 below-left
point O 3,1.25 right
point M 2,2.5 above
point M' 4,0 below
polygon A B C D
segment A C dashed
segment B D dashed
segment M M' dashed
:::

:::definition Centre of symmetry
If there is a point $O$ such that, when the shape is turned half a turn about $O$, the result coincides exactly with the shape in its original position, we say the shape is a **shape with a centre of symmetry**, and $O$ is its **centre of symmetry**.
:::

There is another way to recognise this, without turning. Take any point $M$ of the shape, join $M$ to $O$ and extend the line by a length equal to $OM$ to get the point $M'$. If $O$ is a centre of symmetry, then $M'$ also belongs to the shape. In other words, the points of the shape pair up, and $O$ is the **midpoint** of the segment joining each pair. In the picture above, $O$ is the midpoint of $AC$, of $BD$ and of $MM'$.

:::note Centres of symmetry of familiar shapes
- Parallelogram, rectangle, rhombus, square: the centre of symmetry is the point where the diagonals meet.
- Regular hexagon: the centre of symmetry is the point where the three main diagonals meet.
- Circle: the centre of symmetry is the centre of the circle.
- Line segment: the centre of symmetry is its midpoint.
- An equilateral triangle and an isosceles trapezium have **no** centre of symmetry.
:::

## Two kinds of symmetry: do not mix them up

A line of symmetry goes with **folding**. A centre of symmetry goes with **turning half a turn**. The two properties are independent:

- An equilateral triangle has three lines of symmetry but no centre of symmetry. After half a turn, the top vertex points downwards.
- A parallelogram has a centre of symmetry but no line of symmetry.
- A rectangle, a rhombus, a square, a regular hexagon and a circle have both.

Symmetry is not just for looking at. A builder making a gate with a line of symmetry only needs to measure one half. An engineer designs a fan with a centre of symmetry so that it does not wobble as it spins. And in mathematics, symmetry tells us a lot without measuring: two parts that are symmetric to each other are equal.

## Examples

We start by counting lines of symmetry, with reasons.

:::example Counting lines of symmetry
How many lines of symmetry does each shape have? Point them out.

a) A square;

b) An isosceles trapezium;

c) A parallelogram (that is not a rectangle and not a rhombus).

**Solution.**

a) Fold a square along each diagonal, and the two halves coincide. Fold it along each line joining the midpoints of opposite sides, and the halves coincide again. A square has $4$ lines of symmetry: the two diagonals and the two lines joining midpoints of opposite sides.

b) Fold an isosceles trapezium along the line joining the midpoints of the two bases: the two legs land on each other, so the halves coincide. There is no other way to fold it. An isosceles trapezium has $1$ line of symmetry.

c) Fold a parallelogram along a diagonal or along a line joining the midpoints of opposite sides, and the halves never coincide, because adjacent angles are not equal. A parallelogram has no line of symmetry.

So a square has $4$ lines of symmetry, an isosceles trapezium has $1$ and a parallelogram has $0$.
:::

Capital letters are a very good place to train your eye.

:::example Symmetry of letters
Consider the capital letters, written with plain straight strokes: A, H, N, T, Z.

a) Which letters have a line of symmetry?

b) Which letters have a centre of symmetry?

**Solution.**

a) The letters A and T have one line of symmetry, the vertical line through the middle of the letter: fold along it and the left half lands on the right half.

The letter H has two lines of symmetry: a vertical line and a horizontal line through the middle of the letter.

The letters N and Z have no line of symmetry: whichever line you fold along, the slanting strokes do not match.

b) Turned half a turn about their middle point, the letters H, N and Z land on themselves, so these three letters have a centre of symmetry.

The letters A and T come out upside down after half a turn, so they have no centre of symmetry.

So a) the letters A, T, H have a line of symmetry; b) the letters H, N, Z have a centre of symmetry.

**Remark.** H has both kinds of symmetry; N and Z have only a centre; A and T have only a line.
:::

A centre of symmetry is the midpoint of every segment joining two symmetric points. That gives us lengths.

:::example The centre of symmetry of a parallelogram
A parallelogram $ABCD$ has centre of symmetry $O$, with $AC=10$ cm and $BD=6$ cm.

a) Which point is symmetric to $A$ about $O$? Which point is symmetric to $B$ about $O$?

b) Find $OA$ and $OB$.

**Solution.**

a) The centre of symmetry of a parallelogram is the point where the diagonals meet. After half a turn about $O$, the vertex $A$ is where $C$ was and the vertex $B$ is where $D$ was.

Hence the point symmetric to $A$ about $O$ is $C$, and the point symmetric to $B$ about $O$ is $D$.

b) Since $A$ and $C$ are symmetric about $O$, the point $O$ is the midpoint of $AC$. So
$$OA=AC:2=10:2=5\ (\text{cm}).$$

In the same way, $O$ is the midpoint of $BD$, so
$$OB=BD:2=6:2=3\ (\text{cm}).$$

So $OA=5$ cm and $OB=3$ cm.
:::

Of the polygons we have met, the regular hexagon has the most symmetry.

:::example Symmetry of a regular hexagon
A regular hexagon $ABCDEF$ has three main diagonals meeting at $O$.

a) How many lines of symmetry does a regular hexagon have?

b) Does a regular hexagon have a centre of symmetry? Which point is symmetric to the vertex $B$ about that centre?

**Solution.**

a) Each main diagonal $AD$, $BE$, $CF$ is a line of symmetry: that makes $3$ lines.

Each line joining the midpoints of two opposite sides is also a line of symmetry. The hexagon has $3$ pairs of opposite sides, so there are $3$ more lines.

Hence a regular hexagon has $3+3=6$ lines of symmetry.

b) Turn the regular hexagon half a turn about $O$: each vertex moves to the position of the opposite vertex, so the shape lands on itself. The regular hexagon has centre of symmetry $O$.

The vertex opposite $B$ is $E$ (because $BE$ is a main diagonal), so the point symmetric to $B$ about $O$ is $E$.

So a regular hexagon has $6$ lines of symmetry and centre of symmetry $O$, and $E$ is symmetric to $B$ about $O$.
:::

Finally, we go back to the paper-folding trick from the opening.

:::example Folding and cutting paper
Mai folds a sheet of paper in half and cuts a right-angled trapezium against the fold: the side on the fold is $5$ cm long and perpendicular to the two bases; the bases are $3$ cm and $7$ cm long. When Mai opens the paper, what shape does she get? Find the area of that shape.

**Solution.**

*Understand.* The cut-out shape is made of two identical halves, symmetric about the fold. Each half is a right-angled trapezium with bases $3$ cm and $7$ cm and height $5$ cm.

*Plan.* The fold is a line of symmetry. When the paper is opened, each base is doubled and the height stays the same.

*Solve.* When the paper is opened, the two bases of the shape are
$$3\cdot2=6\ (\text{cm})\quad\text{and}\quad 7\cdot2=14\ (\text{cm}).$$

The two legs are the two cut edges; they are symmetric about the fold, so they are equal. Hence the shape is an isosceles trapezium with bases $6$ cm and $14$ cm and height $5$ cm.

The area of this isosceles trapezium is
$$S=\dfrac{(6+14)\cdot5}{2}=\dfrac{20\cdot5}{2}=50\ (\text{cm}^2).$$

So Mai gets an isosceles trapezium with an area of $50\ \text{cm}^2$.

*Look back.* Is there another way? The area of one half is $\dfrac{(3+7)\cdot5}{2}=25\ (\text{cm}^2)$. Two symmetric halves are equal, so the whole shape has area $25\cdot2=50\ (\text{cm}^2)$. The results agree.
:::

:::warning Common mistakes
- **Taking a diagonal of a rectangle as a line of symmetry.** Wrong: "A diagonal splits the rectangle into two equal halves, so it is a line of symmetry." Why it is wrong: folded along a diagonal, the two halves do not coincide. Right: a rectangle has only $2$ lines of symmetry, the two lines joining midpoints of opposite sides.
- **Thinking a parallelogram has a line of symmetry.** Wrong: "A parallelogram looks balanced, so it has a line of symmetry." Why it is wrong: its balance comes from a half-turn, not from folding. Right: a parallelogram has a centre of symmetry but no line of symmetry.
- **Thinking every shape with a line of symmetry has a centre of symmetry.** Wrong: "An equilateral triangle has $3$ lines of symmetry, so it has a centre of symmetry." Why it is wrong: an equilateral triangle turned half a turn comes out upside down. Right: an equilateral triangle has no centre of symmetry.
- **Turning less than half a turn.** Wrong: "A square turned a quarter turn lands on itself, so that point is a centre of symmetry." Why it is wrong: a centre of symmetry is defined by a **half** turn. Right: a square has a centre of symmetry because it also lands on itself after half a turn.
:::

## Key terms

:::terms
- symmetry | đối xứng
- line of symmetry | trục đối xứng
- shape with a line of symmetry | hình có trục đối xứng
- centre of symmetry | tâm đối xứng
- shape with a centre of symmetry | hình có tâm đối xứng
- to coincide exactly | chồng khít
- half-turn | quay nửa vòng
- midpoint | trung điểm
- circle | hình tròn
:::

## Summary

- Line of symmetry: fold the shape along the line and the two parts coincide exactly.
- Centre of symmetry: turn the shape half a turn about the point and it lands on itself; the centre is the midpoint of the segment joining two symmetric points.
- Number of lines of symmetry: equilateral triangle $3$; square $4$; regular hexagon $6$; rectangle $2$; rhombus $2$; isosceles trapezium $1$; parallelogram $0$; circle infinitely many.
- With a centre of symmetry: parallelogram, rectangle, rhombus, square (where the diagonals meet), regular hexagon, circle. Without: equilateral triangle, isosceles trapezium.
- Two parts that are symmetric to each other are equal: this gives lengths and areas without measuring.

The paper heart is even because the fold is its line of symmetry. The playing card looks the same upside down because it has a centre of symmetry. From now on, when you see a shape that is beautiful in a regular way, try asking: is it beautiful because it folds, or because it turns? To revise the sides, angles and diagonals of the shapes in this lesson, see [familiar flat shapes](lesson:triangles-squares-hexagons).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
State the number of lines of symmetry of each shape: equilateral triangle, rhombus, parallelogram, regular hexagon, circle.

::hint
**What you need:** the table of lines of symmetry of familiar shapes.

**Steps:**
1. For each shape, think how many ways it can be folded in half so that the halves coincide.
2. Write down the number of ways.

::solution
An equilateral triangle has $3$ lines of symmetry, each through a vertex and the midpoint of the opposite side.

A rhombus has $2$ lines of symmetry, its two diagonals.

A parallelogram has no line of symmetry.

A regular hexagon has $6$ lines of symmetry: the three main diagonals and the three lines joining midpoints of opposite sides.

A circle has infinitely many lines of symmetry: every line through the centre.

So the numbers of lines of symmetry are $3$; $2$; $0$; $6$; infinitely many.

**Answer.** $3$; $2$; $0$; $6$; infinitely many.
:::

:::exercise
Which of these shapes have a centre of symmetry: equilateral triangle, square, isosceles trapezium, rectangle, circle? For each shape that has one, say where the centre is.

::hint
**What you need:** a shape has a centre of symmetry if a half-turn about the centre lands it on itself.

**Steps:**
1. Imagine turning each shape half a turn about its middle point.
2. A shape that lands on its old position has a centre of symmetry.

::solution
A square and a rectangle have a centre of symmetry, the point where the diagonals meet.

A circle has a centre of symmetry, its own centre.

An equilateral triangle has no centre of symmetry: after half a turn, the top vertex points downwards.

An isosceles trapezium has no centre of symmetry: after half a turn, the long base and the short base swap places.

So the shapes with a centre of symmetry are the square, the rectangle and the circle.

**Answer.** Square, rectangle (where the diagonals meet); circle (the centre of the circle).
:::

:::exercise
Consider the capital letters, written with plain strokes: M, O, S, E, X.

a) Which letters have a line of symmetry?

b) Which letters have a centre of symmetry?

::hint
**What you need:** a line of symmetry goes with folding, a centre of symmetry with a half-turn.

**Steps:**
1. For each letter, try folding vertically and horizontally.
2. Try turning the letter half a turn (turn the paper upside down).

::solution
a) The letter M has one vertical line of symmetry.

The letter E has one horizontal line of symmetry.

The letters O and X have two lines of symmetry: one vertical, one horizontal.

The letter S has no line of symmetry.

b) After half a turn, the letters O, S, X land on themselves, so they have a centre of symmetry.

The letter M becomes the shape of a W after half a turn, and the letter E ends up facing left, so these two letters have no centre of symmetry.

So a) M, O, E, X have a line of symmetry; b) O, S, X have a centre of symmetry.

**Answer.** a) M, O, E, X. b) O, S, X.
:::

:::exercise
A rectangle $ABCD$ has centre of symmetry $O$ and diagonal $AC=26$ cm.

a) Which point is symmetric to $B$ about $O$?

b) Find $OA$ and $OB$.

::hint
**What you need:** the centre of symmetry of a rectangle is the point where the diagonals meet; the diagonals of a rectangle are equal.

**Steps:**
1. $O$ is the midpoint of $AC$ and of $BD$.
2. Use $BD=AC$.

::solution
a) The centre of symmetry $O$ is the point where the diagonals $AC$ and $BD$ meet. After half a turn about $O$, the vertex $B$ is where $D$ was.

Hence the point symmetric to $B$ about $O$ is $D$.

b) Since $O$ is the midpoint of $AC$,
$$OA=AC:2=26:2=13\ (\text{cm}).$$

A rectangle has equal diagonals, so $BD=AC=26$ cm. Since $O$ is the midpoint of $BD$,
$$OB=BD:2=26:2=13\ (\text{cm}).$$

So $D$ is symmetric to $B$ about $O$; $OA=OB=13$ cm.

**Answer.** a) The point $D$. b) $OA=13$ cm; $OB=13$ cm.
:::

:::exercise
A rhombus $ABCD$ has diagonals $AC=12$ cm and $BD=16$ cm meeting at $O$.

a) State the lines of symmetry and the centre of symmetry of the rhombus.

b) Find $OA$ and $OB$.

c) Find the area of the rhombus.

::hint
**What you need:** a rhombus has two lines of symmetry, its diagonals, and its centre of symmetry is where they meet; $S=\dfrac{m\cdot n}{2}$.

**Steps:**
1. $O$ is the centre of symmetry, so it is the midpoint of each diagonal.
2. The area is half the product of the diagonals.

::solution
a) The rhombus $ABCD$ has two lines of symmetry, the lines $AC$ and $BD$. Its centre of symmetry is the point $O$ where the diagonals meet.

b) Since $O$ is the centre of symmetry, $O$ is the midpoint of $AC$ and of $BD$. Hence
$$OA=12:2=6\ (\text{cm}),\qquad OB=16:2=8\ (\text{cm}).$$

c) The area of the rhombus is
$$S=\dfrac{12\cdot16}{2}=\dfrac{192}{2}=96\ (\text{cm}^2).$$

So the rhombus has lines of symmetry $AC$, $BD$ and centre of symmetry $O$; $OA=6$ cm, $OB=8$ cm; its area is $96\ \text{cm}^2$.

**Answer.** a) Lines $AC$, $BD$; centre $O$. b) $OA=6$ cm; $OB=8$ cm. c) $96\ \text{cm}^2$.
:::

:::exercise
A sign is a red circle with a white horizontal rectangular bar in the middle. The centre of the rectangle is the centre of the circle.

a) How many lines of symmetry does the sign have?

b) Does the sign have a centre of symmetry?

::hint
**What you need:** a line is a line of symmetry of the whole sign when it is a line of symmetry of both the circle and the rectangular bar.

**Steps:**
1. The circle has infinitely many lines, but the rectangular bar has only $2$.
2. Check whether the circle and the bar both land on themselves after half a turn about the centre.

::solution
a) Every line through the centre is a line of symmetry of the circle. The rectangular bar has only $2$ lines of symmetry: the horizontal line and the vertical line through its centre. These two lines also pass through the centre of the circle.

Hence the sign has $2$ lines of symmetry: a horizontal line and a vertical line through the centre.

b) After half a turn about the centre, the circle lands on itself and so does the rectangular bar. Hence the sign has a centre of symmetry, the centre of the circle.

So the sign has $2$ lines of symmetry and a centre of symmetry.

**Answer.** a) $2$ lines. b) Yes, the centre of the circle.
:::

:::exercise
Lan folds a sheet of paper in half and cuts a right-angled triangle against the fold: the side on the fold is $6$ cm long, and the other side of the right angle is $4$ cm long. When Lan opens the paper, she gets a triangle. Find the length of its base (the side perpendicular to the fold) and its area.

::hint
**What you need:** the fold is a line of symmetry; two symmetric halves are equal. The area of a right-angled triangle is half the product of the two sides of the right angle.

**Steps:**
1. The base is made of two $4$ cm pieces, one on each side of the fold.
2. Find the area of one half, then double it.

::solution
The fold is a line of symmetry of the shape. The shape is made of two identical right-angled triangles, symmetric about the fold.

The base of the triangle is made of two pieces of $4$ cm, one on each side of the fold, so its length is
$$4\cdot2=8\ (\text{cm}).$$

The area of each right-angled triangle is
$$\dfrac{6\cdot4}{2}=12\ (\text{cm}^2).$$

The area of the whole triangle is
$$12\cdot2=24\ (\text{cm}^2).$$

So the triangle has a base of $8$ cm and an area of $24\ \text{cm}^2$.

**Answer.** Base $8$ cm; area $24\ \text{cm}^2$.
:::

:::exercise Challenge
A rectangular piece of card $8$ cm long and $4$ cm wide has centre of symmetry $O$. Nam cuts the card along any straight line through $O$ and gets two pieces. Show that the two pieces have equal areas, and find the area of each piece.

::hint
**What you need:** a half-turn about the centre of symmetry lands the shape on itself; a line through $O$ also lands on itself after a half-turn about $O$.

**Steps:**
1. Think about where the first piece goes when the whole card is turned half a turn about $O$.
2. Two pieces that coincide exactly have equal areas.

::solution
Turn the card half a turn about $O$. Since $O$ is the centre of symmetry, the card lands on itself.

The cut is a straight line through $O$, so after a half-turn about $O$ the cut also lands on itself, while its two sides swap places.

Hence the first piece, after the turn, lies exactly on the position of the second piece. So the two pieces have equal areas.

The area of the whole card is
$$8\cdot4=32\ (\text{cm}^2).$$

The area of each piece is
$$32:2=16\ (\text{cm}^2).$$

So the two pieces have equal areas, $16\ \text{cm}^2$ each.

**Answer.** $16\ \text{cm}^2$ each.
:::

## Mini test

:::quiz
::mc
Which of these shapes has no line of symmetry?
A. An isosceles trapezium.
B. A parallelogram.
C. A rhombus.
D. An equilateral triangle.
::key B
A parallelogram has only a centre of symmetry and no line of symmetry. An isosceles trapezium has $1$ line, a rhombus has $2$ and an equilateral triangle has $3$.

::mc
How many lines of symmetry does a square have?
A. $1$.
B. $2$.
C. $4$.
D. $8$.
::key C
The two diagonals and the two lines joining midpoints of opposite sides, $4$ lines in all. B counts only one kind; D counts each line twice.

::mc
Which of these shapes has a centre of symmetry?
A. An equilateral triangle.
B. An isosceles trapezium.
C. A semicircle.
D. A parallelogram.
::key D
A parallelogram has a centre of symmetry where its diagonals meet. The other three shapes come out upside down after half a turn.

::mc
The centre of symmetry of a rectangle is
A. the point where the two diagonals meet.
B. a vertex of the rectangle.
C. the midpoint of a side.
D. any point on a diagonal.
::key A
After half a turn about the point where the diagonals meet, the rectangle lands on itself. Turning about the points in B, C, D moves the shape off its old position.

::tf
Decide whether each statement is true or false.
a) A circle has infinitely many lines of symmetry.
b) Every shape with a line of symmetry also has a centre of symmetry.
c) A rhombus has four lines of symmetry.
d) A regular hexagon has both lines of symmetry and a centre of symmetry.
::key T F F T
a) True: every line through the centre is a line of symmetry. b) False: an equilateral triangle has $3$ lines of symmetry but no centre of symmetry. c) False: a rhombus has only $2$ lines, its diagonals. d) True: it has $6$ lines, and its centre of symmetry is where the three main diagonals meet.

::sa
How many lines of symmetry does a regular hexagon have?
::key 6
The three main diagonals and the three lines joining midpoints of opposite sides: $3+3=6$.

::sa
A parallelogram $ABCD$ has centre of symmetry $O$ and $AC=18$ cm. How many centimetres long is $OA$?
::key 9
$O$ is the midpoint of $AC$, so $OA=18:2=9$ (cm).
:::
