---
title: Coordinate geometry
description: IGCSE Mathematics Extended: gradient, length and midpoint, equations of straight lines, parallel and perpendicular lines, and perpendicular bisectors.
minutes: 45
---

:::goals
- Find the gradient, length and midpoint of a line segment from the coordinates of its ends.
- Find the equation of a straight line in the forms $y=mx+c$ and $ax+by=c$.
- Use the gradients of parallel and perpendicular lines.
- Find the equation of a perpendicular bisector and the point where two lines meet.
:::

Two friends live at $A(1,\ 2)$ and $B(7,\ 10)$ on a town map, with units in kilometres. They want to meet halfway. Where should they meet, how far apart do they live, and which points are exactly the same distance from both homes? A sketch helps, but three short formulas answer all three questions exactly.

Coordinate geometry turns pictures into numbers. Once a point has coordinates and a line has an equation, questions about distance, direction and meeting points become calculations. The ideas are few, and they come back in almost every other part of the course, so it pays to make them second nature.

## Gradient, length and midpoint

For points $A(x_1,\ y_1)$ and $B(x_2,\ y_2)$:
$$\text{gradient}=\frac{y_2-y_1}{x_2-x_1},\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2},\qquad \text{midpoint}=\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right).$$
The gradient tells you how steep the line is: it is the change in $y$ for each $1$ unit increase in $x$. The length formula is Pythagoras' theorem applied to the horizontal and vertical steps between the points, and the midpoint is simply the average of the coordinates.

:::example The two friends
How far apart do the friends at $A(1,\ 2)$ and $B(7,\ 10)$ live?
A. $14$ km
B. $10$ km
C. $\sqrt{28}$ km
D. $8$ km

**Solution.** The horizontal step is $7-1=6$ and the vertical step is $10-2=8$.

By Pythagoras, $AB=\sqrt{6^2+8^2}=\sqrt{100}=10$ km. The midpoint, where they could meet, is $\left(\dfrac{1+7}{2},\ \dfrac{2+10}{2}\right)=(4,\ 6)$.

So they live $10$ km apart, answer **B**. Option A adds the two steps, as if walking along a grid.
:::

## Equations of straight lines

A line with gradient $m$ and $y$-intercept $c$ has equation $y=mx+c$. Through a point $(x_1,\ y_1)$ with gradient $m$, the line is $y-y_1=m(x-x_1)$. A line can also be written as $ax+by=c$; to find its gradient, rearrange to make $y$ the subject.

**Parallel** lines have equal gradients. **Perpendicular** lines have gradients that multiply to $-1$: if one gradient is $m$, the other is $-\dfrac1m$. Why? Turning a line through $90^\circ$ swaps its horizontal and vertical steps and changes one sign, so $\dfrac{\text{rise}}{\text{run}}$ becomes $-\dfrac{\text{run}}{\text{rise}}$.

:::example A parallel line
Find the equation of the line through $(2,\ 7)$ that is parallel to $y=3x-1$.

**Solution.** Parallel lines have the same gradient, so the new line has gradient $3$.

Using $y-y_1=m(x-x_1)$: $y-7=3(x-2)$, so $y=3x+1$.

So the line is $y=3x+1$. Check: when $x=2$, $y=7$.
:::

## Perpendicular bisectors and intersections

The **perpendicular bisector** of $AB$ passes through the midpoint of $AB$ and is perpendicular to it. Every point on it is the same distance from $A$ and from $B$, so it answers the friends' third question.

:::graph The segment $AB$ and its perpendicular bisector
alt: The points A(1, 2) and B(7, 10) joined by a line segment, with midpoint M(4, 6) and a dashed line through M perpendicular to AB
x: 0..12
y: 0..12
shape: equal
segment: (1, 2) (7, 10)
plot: (36-3*x)/4 ; 0..12 ; dashed
point: (1, 2) "A" right
point: (7, 10) "B" right
point: (4, 6) "M" above-right
:::

:::example The points equally far from both friends
Find the equation of the perpendicular bisector of $A(1,\ 2)$ and $B(7,\ 10)$, in the form $ax+by=c$.

**Solution.** The midpoint is $(4,\ 6)$ and the gradient of $AB$ is $\dfrac{10-2}{7-1}=\dfrac43$, so the perpendicular gradient is $-\dfrac34$.

Through $(4,\ 6)$: $y-6=-\dfrac34(x-4)$. Multiplying by $4$, $4y-24=-3x+12$, so $3x+4y=36$.

So the perpendicular bisector is $3x+4y=36$; every point on it is the same distance from both homes.
:::

To find where two lines meet, solve their equations simultaneously.

:::example Where two lines meet
The lines $y=2x+1$ and $x+y=7$ meet at
A. $(3,\ 4)$
B. $(2,\ 5)$
C. $(1,\ 3)$
D. $(5,\ 2)$

**Solution.** Substituting $y=2x+1$ into $x+y=7$ gives $3x+1=7$, so $x=2$ and $y=5$.

Check in both equations: $5=2(2)+1$ and $2+5=7$.

So the lines meet at $(2,\ 5)$, answer **B**. Option D swaps the coordinates.
:::

Now look back at the two friends. They live $10$ km apart, they can meet at $(4,\ 6)$, and any café on the line $3x+4y=36$ is exactly as far from one home as from the other. Three formulas and one idea, perpendicular gradients, answered everything. When a coordinate question looks long, it is usually these same few tools used one after another, so start by asking which of them the question needs: a gradient, a length, a midpoint or an equation.

A sketch is still worth the few seconds it takes. It does not need to be accurate; it only needs to show roughly where the points are. Then, if your midpoint lands far from both points, or a line that should go uphill has a negative gradient, the sketch tells you at once that something has gone wrong.

:::warning Common traps
- **Gradient upside down:** it is change in $y$ over change in $x$.
- **Signs with negative coordinates:** use brackets, $(-1)-(5)=-6$.
- **Perpendicular gradient:** take the negative reciprocal; $-\dfrac34$ is perpendicular to $\dfrac43$, not $-\dfrac43$.
- **Gradient from $ax+by=c$:** rearrange to $y=\dots$ first.
- **Length:** square the differences before adding, and remember the square root.
:::

:::terms
- gradient | hệ số góc
- $y$-intercept | tung độ gốc (giao với trục tung)
- midpoint | trung điểm
- line segment | đoạn thẳng
- parallel / perpendicular | song song / vuông góc
- negative reciprocal | nghịch đảo đổi dấu
- perpendicular bisector | đường trung trực
- simultaneous equations | hệ phương trình
:::

## Similar exercises

:::exercise
Find the gradient of the line through $(-2,\ 5)$ and $(4,\ -1)$.

::hint
**What you need:** $m=\dfrac{y_2-y_1}{x_2-x_1}$.

::solution
The change in $y$ is $-1-5=-6$ and the change in $x$ is $4-(-2)=6$.

So the gradient is $\dfrac{-6}{6}=-1$: the line goes down $1$ unit for every $1$ unit to the right.

**Answer.** $-1$.
:::

:::exercise
Find the equation of the line through $(3,\ -1)$ and $(5,\ 7)$.

::hint
**What you need:** find the gradient, then use one of the points.

::solution
The gradient is $\dfrac{7-(-1)}{5-3}=\dfrac82=4$.

Through $(3,\ -1)$: $y-(-1)=4(x-3)$, so $y+1=4x-12$ and $y=4x-13$. Check with $(5,\ 7)$: $4(5)-13=7$.

So the line is $y=4x-13$.

**Answer.** $y=4x-13$.
:::

:::exercise
Find the gradient of a line perpendicular to $2x-5y=10$.

::hint
**What you need:** rearrange to $y=\dots$ to find the gradient.

::solution
Rearranging, $5y=2x-10$, so $y=\dfrac25x-2$ and the gradient is $\dfrac25$.

A perpendicular line has gradient equal to the negative reciprocal, $-\dfrac52$.

So the perpendicular gradient is $-\dfrac52$.

**Answer.** $-\dfrac52$.
:::

:::exercise
Find the midpoint and the length of the segment joining $(-3,\ 4)$ and $(5,\ -2)$.

::hint
**What you need:** average the coordinates; use Pythagoras for the length.

::solution
The midpoint is $\left(\dfrac{-3+5}{2},\ \dfrac{4+(-2)}{2}\right)=(1,\ 1)$.

The steps are $5-(-3)=8$ and $-2-4=-6$, so the length is $\sqrt{8^2+6^2}=\sqrt{100}=10$.

So the midpoint is $(1,\ 1)$ and the length is $10$ units.

**Answer.** $(1,\ 1)$; $10$.
:::

:::exercise
Are the lines $y=-2x+3$ and $4x+2y=7$ parallel? Explain.

::hint
**What you need:** compare the gradients.

::solution
The first line has gradient $-2$. Rearranging the second, $2y=-4x+7$, so $y=-2x+3.5$, which also has gradient $-2$.

The gradients are equal and the intercepts are different, so the lines are parallel and distinct.

So yes, the lines are parallel.

**Answer.** Yes; both have gradient $-2$.
:::

## Applied exercises

:::exercise
The triangle $PQR$ has vertices $P(0,\ 0)$, $Q(6,\ 2)$ and $R(2,\ 6)$.
a) Show that the triangle is isosceles.
b) Find its area.

::hint
**What you need:** compare $PQ$ and $PR$; the line from $P$ to the midpoint of $QR$ is a height.

::solution
a) $PQ=\sqrt{36+4}=\sqrt{40}$ and $PR=\sqrt{4+36}=\sqrt{40}$, so $PQ=PR$ and the triangle is isosceles.

b) The midpoint of $QR$ is $M(4,\ 4)$. In an isosceles triangle, $PM$ is perpendicular to $QR$, so it is the height. $QR=\sqrt{16+16}=\sqrt{32}$ and $PM=\sqrt{16+16}=\sqrt{32}$, so the area is $\tfrac12\times\sqrt{32}\times\sqrt{32}=16$.

So the triangle is isosceles with area $16$ square units.

**Answer.** a) $PQ=PR=\sqrt{40}$; b) $16$.
:::

:::exercise
The line through $(1,\ k)$ and $(4,\ 10)$ has gradient $2$. Find $k$.

::hint
**What you need:** $\dfrac{10-k}{4-1}=2$.

::solution
The gradient is $\dfrac{10-k}{3}$, so $\dfrac{10-k}{3}=2$.

Then $10-k=6$, so $k=4$. Check: from $(1,\ 4)$ to $(4,\ 10)$ the rise is $6$ over a run of $3$.

So $k=4$.

**Answer.** $k=4$.
:::

:::exercise
The line $3x+4y=36$ meets the axes at $P$ and $Q$. Find the area of the triangle $OPQ$, where $O$ is the origin.

::hint
**What you need:** set $y=0$, then $x=0$.

::solution
When $y=0$, $3x=36$, so $P=(12,\ 0)$. When $x=0$, $4y=36$, so $Q=(0,\ 9)$.

The triangle $OPQ$ has a right angle at $O$, with legs $12$ and $9$, so its area is $\tfrac12\times12\times9=54$.

So the area is $54$ square units.

**Answer.** $54$.
:::

:::exercise Challenge
Find the point that is the same distance from $(0,\ 0)$, $(6,\ 0)$ and $(0,\ 8)$.

::hint
**What you need:** the point lies on two perpendicular bisectors.

::solution
The perpendicular bisector of $(0,\ 0)$ and $(6,\ 0)$ is the vertical line $x=3$, and that of $(0,\ 0)$ and $(0,\ 8)$ is the horizontal line $y=4$.

They meet at $(3,\ 4)$, which is $\sqrt{9+16}=5$ from $(0,\ 0)$, and also $\sqrt{9+16}=5$ from $(6,\ 0)$ and from $(0,\ 8)$.

So the point is $(3,\ 4)$, the centre of the circle through all three points.

**Answer.** $(3,\ 4)$.
:::

:::quiz
::mc
The gradient of $y=-3x+2$ is
A. $2$
B. $-3$
C. $3$
D. $-\dfrac13$
::key B
In $y=mx+c$, $m$ is the gradient.

::mc
A line has gradient $\dfrac23$. A perpendicular line has gradient
A. $-\dfrac32$
B. $\dfrac32$
C. $-\dfrac23$
D. $\dfrac23$
::key A
The negative reciprocal.

::mc
The midpoint of $(2,\ 8)$ and $(6,\ 0)$ is
A. $(8,\ 8)$
B. $(2,\ 4)$
C. $(4,\ 4)$
D. $(4,\ 8)$
::key C
$\left(\dfrac{2+6}{2},\ \dfrac{8+0}{2}\right)$.

::mc
The $y$-intercept of $2x+y=5$ is
A. $2$
B. $-2$
C. $2.5$
D. $5$
::key D
$y=-2x+5$.

::tf
Consider the line $y=2x-4$. Decide whether each statement is true or false.
a) Its gradient is $2$.
b) It passes through $(2,\ 0)$.
c) Its $y$-intercept is $-4$.
d) It is parallel to $y=-2x$.
::key T T T F
Parallel lines need equal gradients.

::sa
Find the distance from $(0,\ 0)$ to $(6,\ 8)$.
::key 10
$\sqrt{36+64}=10$.

::sa
Find the gradient of the line through $(1,\ 3)$ and $(3,\ 11)$.
::key 4
$\dfrac{11-3}{3-1}=4$.
:::
