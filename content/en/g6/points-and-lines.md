---
title: Points and lines. A point between two points. Rays
description: Points on and off a line, collinear points, intersecting and parallel lines; a point between two points, rays and opposite rays.
minutes: 35
---

:::goals
- Use the symbols $\in$ and $\notin$ to say that a point lies on, or does not lie on, a line.
- Recognise three collinear points, three non-collinear points and a point between two points.
- Recognise intersecting, parallel and coinciding lines.
- Recognise rays, opposite rays and coinciding rays; count lines and rays in simple situations.
:::

To plant a perfectly straight row of trees in the school yard, the caretaker only pushes two bamboo stakes into the ground at the two ends, stretches a string between them, and plants the trees along the string. Why are two stakes enough, rather than three or four?

The answer lies in a very simple property of points and lines, the first two "bricks" of geometry. This lesson introduces them, together with rays, which you see every day in the beam of a torch.

## Points and lines

A small dot on a page, a star seen from far away, are pictures of a **point**. We name points with capital letters: point $A$, point $B$, …

A tightly stretched thread, the edge of a ruler, are pictures of a **line**. A line goes on without end in both directions. We name lines with small letters: line $d$, line $a$, …

:::diagram Points $A$, $B$ lie on line $d$; point $C$ does not
alt: A horizontal line named d, with two points A and B on it and a point C above it, off the line
point L1 -0.5,0 ""
point L2 6.5,0 ""
point A 1,0 below
point B 4,0 below
point C 2.5,1.6 above
segment L1 L2
label 6.3,0.35 "d"
:::

In the picture, point $A$ **lies on** line $d$ (or line $d$ passes through point $A$), written $A\in d$. Point $C$ **does not lie on** line $d$, written $C\notin d$.

:::theorem Property
There is one and only one line through two distinct points $A$ and $B$. It is called line $AB$ (or $BA$).
:::

This is the answer for the caretaker: two stakes already fix one single line, so a third stake is not needed.

## Three collinear points

:::definition Collinear points
Three points that lie on the same line are called **collinear points**. Three points that do not all lie on any one line are called **non-collinear points**.
:::

:::diagram Points $A$, $B$, $C$ are collinear; points $M$, $N$, $P$ are not
alt: On the left, three points A, B, C lie on the same sloping line; on the right, three points M, N, P do not lie on any one line
point E1 -0.5,-0.2 ""
point E2 5.5,2.2 ""
point A 0,0 below
point B 2,0.8 below
point C 4.5,1.8 below
point M 7,0 below
point N 8.5,1.8 above
point P 10,0.3 below
segment E1 E2
:::

Of the three collinear points $A$, $B$, $C$ in the picture, point $B$ **lies between** points $A$ and $C$. Points $A$ and $C$ are on **opposite sides** of $B$; points $B$ and $C$ are on the **same side** of $A$.

:::theorem Property
Of three collinear points, one and only one lies between the other two.
:::

To check whether three points are collinear, lay the edge of a ruler through two of them and see whether the third point is on the edge.

## Intersecting lines and parallel lines

Two different lines can have one point in common, or no point in common at all.

:::diagram Lines $a$, $b$ intersect at $O$; lines $m$, $n$ are parallel
alt: On the left, two lines a and b cross at point O; on the right, two horizontal lines m and n are parallel, with no point in common
point A1 -1,-1 ""
point A2 3,2 ""
point B1 -1,2 ""
point B2 3,-1 ""
point O 1,0.5 below
point M1 5,0 ""
point M2 10,0 ""
point N1 5,1.5 ""
point N2 10,1.5 ""
segment A1 A2
segment B1 B2
segment M1 M2
segment N1 N2
label 3.2,2.1 "a"
label 3.2,-0.9 "b"
label 10.3,0.1 "m"
label 10.3,1.6 "n"
:::

:::definition Positions of two lines
- Two lines with exactly one point in common are **intersecting lines**; the common point is called the **point of intersection**.
- Two lines (in the same plane) with no point in common are **parallel lines**.
- Two lines with two or more points in common **coincide**: they are really just one line.
:::

The two rails of a railway track and the two opposite edges of a page are pictures of parallel lines.

## Rays

Switch on a torch at night: the beam starts at the bulb and goes on and on in one direction. That is a picture of a **ray**.

:::definition Ray
The figure made of a point $O$ and one of the two parts into which $O$ splits a line is called a **ray with endpoint $O$**.
:::

On the line $xy$, the point $O$ splits the line into two rays: ray $Ox$ and ray $Oy$. When reading or writing the name of a ray, always put **the endpoint first**.

:::diagram Opposite rays $Ox$ and $Oy$
alt: A horizontal line xy; the point O in the middle splits it into ray Ox going left and ray Oy going right
point X -4,0 ""
point Y 4,0 ""
point O 0,0 below
segment X Y
label -4.2,0.35 "x"
label 4.2,0.35 "y"
:::

:::definition Opposite rays, coinciding rays
- Two rays with the same endpoint that together make a line are called **opposite rays**. Example: $Ox$ and $Oy$ in the picture.
- If $B$ lies between $A$ and $C$, then rays $BA$ and $BC$ are opposite; while rays $AB$ and $AC$ **coincide** (they share the endpoint $A$ and go in the same direction).
:::

Remember that every point on a line is the common endpoint of exactly two opposite rays.

## Examples

We start by reading a picture and writing symbols.

:::example Reading a picture with symbols
Look at the picture "Points $A$, $B$ lie on line $d$; point $C$ does not" above.

a) Use the symbols $\in$, $\notin$ to describe how the points $A$, $B$, $C$ are related to line $d$.

b) Are the points $A$, $B$, $C$ collinear? Why?

**Solution.**

a) Points $A$ and $B$ lie on line $d$, so $A\in d$ and $B\in d$. Point $C$ is off line $d$, so $C\notin d$.

b) By the property, there is only one line through $A$ and $B$, namely line $d$. Since $C\notin d$, no line passes through all three points $A$, $B$, $C$.

So the points $A$, $B$, $C$ are not collinear.
:::

Next, we count lines.

:::example Counting lines through four points
Four points $A$, $B$, $C$, $D$ are given, no three of which are collinear. Draw the lines through any two of the four points. How many lines are there? Name them.

**Solution.**

Since no three points are collinear, each pair of points gives a different line. We list them point by point, without repeats:

Through $A$: lines $AB$, $AC$, $AD$.

Through $B$ (leaving out $AB$, already listed): $BC$, $BD$.

Through $C$ (leaving out the ones already listed): $CD$.

So there are $3+2+1=6$ lines in all: $AB$, $AC$, $AD$, $BC$, $BD$, $CD$.
:::

With three collinear points, we practise recognising rays.

:::example Opposite rays, coinciding rays
Three points $A$, $B$, $C$ are collinear, and $B$ lies between $A$ and $C$.

a) Name the two rays with endpoint $B$. How are they related?

b) Which ray coincides with ray $AB$? Which ray coincides with ray $CB$?

**Solution.**

a) The two rays with endpoint $B$ are $BA$ and $BC$. Since $B$ lies between $A$ and $C$, these rays share the endpoint $B$ and together make line $AC$, so they are opposite rays.

b) Points $B$ and $C$ are on the same side of $A$, so ray $AB$ coincides with ray $AC$.

Points $A$ and $B$ are on the same side of $C$, so ray $CB$ coincides with ray $CA$.

So a) $BA$ and $BC$ are opposite rays; b) ray $AB$ coincides with ray $AC$, and ray $CB$ coincides with ray $CA$.
:::

How many points can two lines have in common?

:::example Points in common of two lines
Look at the picture "Lines $a$, $b$ intersect at $O$; lines $m$, $n$ are parallel" above.

a) How many points do lines $a$ and $b$ have in common? Which point is it?

b) Do lines $m$ and $n$ have a point in common?

**Solution.**

a) Lines $a$ and $b$ have exactly one point in common, $O$. So $a$ and $b$ intersect, and their point of intersection is $O$.

b) Lines $m$ and $n$ have no point in common. So $m$ and $n$ are parallel.

So a) one point in common, $O$; b) no point in common.
:::

Finally, a counting problem with a way of thinking worth remembering.

:::example Five points, how many lines?
Five points are given, no three of which are collinear. Draw the lines through any two of the five points. How many lines are there in all?

**Solution.**

*Understand.* No three points are collinear, so each pair of points gives exactly one line, and different pairs give different lines. So counting lines is the same as counting pairs of points.

*Plan.* Instead of listing, we count: how many lines start from each point, and how many times is each line counted?

*Solve.* From each point, joining it to the $4$ other points gives $4$ lines. There are $5$ points, so we count $5\cdot4=20$ lines.

But each line, for example the line through $A$ and $B$, has been counted twice: once from $A$ and once from $B$. So the number of lines is
$$\dfrac{5\cdot4}{2}=10.$$

So there are $10$ lines in all.

*Look back.* Try this method with four points: $\dfrac{4\cdot3}{2}=6$, which agrees with Example 2. In general, with $n$ points, no three of which are collinear, there are $\dfrac{n(n-1)}{2}$ lines.
:::

:::warning Common mistakes
- **Not writing the endpoint first in the name of a ray.** Wrong: calling the ray from $O$ towards $x$ "ray $xO$". Why it is wrong: a ray's name always begins with its endpoint. Right: ray $Ox$.
- **Thinking any two rays with the same endpoint are opposite.** Wrong: $B$ lies between $A$ and $C$, so $AB$ and $AC$ are opposite rays. Why it is wrong: $AB$ and $AC$ share an endpoint but go the same way, so they coincide. Right: the opposite rays are $BA$ and $BC$.
- **Counting lines twice.** Wrong: five points, no three collinear, give $5\cdot4=20$ lines. Why it is wrong: each line is counted twice, once from each end. Right: $20:2=10$ lines.
- **Thinking two lines that do not meet on the page are parallel.** Wrong: the two drawn pieces do not touch, so the lines are parallel. Why it is wrong: lines go on for ever; they may cross off the edge of the page. Right: lines are parallel only if they have no point in common, however far they are extended.
:::

## Key terms

:::terms
- point | điểm
- line | đường thẳng
- lies on, does not lie on | thuộc, không thuộc
- three collinear points | ba điểm thẳng hàng
- point between | điểm nằm giữa
- intersecting lines | hai đường thẳng cắt nhau
- point of intersection | giao điểm
- parallel lines | hai đường thẳng song song
- ray | tia
- endpoint (origin) of a ray | gốc của tia
- opposite rays | hai tia đối nhau
:::

## Summary

- Points are named with capital letters, lines with small letters; $A\in d$: $A$ lies on $d$; $C\notin d$: $C$ does not lie on $d$.
- There is one and only one line through two distinct points.
- Three points on one line are collinear; of three collinear points, exactly one lies between the other two.
- Two different lines: with one point in common they intersect; with no point in common they are parallel.
- A point $O$ on line $xy$ splits it into two opposite rays $Ox$, $Oy$; a ray's name starts with its endpoint.

The caretaker in the opening needs only two stakes, because two points fix one and only one line. These facts that seem obvious are the foundation for every more complicated figure later, so practise using the symbols and the names precisely right from the start. In the next lesson we study [line segments and their lengths](lesson:line-segments).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Draw a line $a$. Mark two points $M$, $N$ on line $a$ and two points $P$, $Q$ not on line $a$. Write these facts using symbols.

::hint
**What you need:** $\in$ means "lies on", $\notin$ means "does not lie on".

**Steps:**
1. Draw the line and mark the points.
2. Write the four statements in symbols.

::solution
Points $M$, $N$ lie on line $a$, so $M\in a$ and $N\in a$.

Points $P$, $Q$ are off line $a$, so $P\notin a$ and $Q\notin a$.

So $M\in a$; $N\in a$; $P\notin a$; $Q\notin a$.

**Answer.** $M\in a$; $N\in a$; $P\notin a$; $Q\notin a$.
:::

:::exercise
Four points $A$, $B$, $C$, $D$ are given: $A$, $B$, $C$ are collinear and $D$ is not on line $AB$.

a) Name the sets of three collinear points.

b) Name the sets of three non-collinear points.

::hint
**What you need:** three collinear points lie on one line.

**Steps:**
1. List all the sets of three points (there are $4$).
2. Check each set: any set containing $D$ is not collinear.

::solution
From four points we can form four sets of three: $(A, B, C)$, $(A, B, D)$, $(A, C, D)$, $(B, C, D)$.

a) $A$, $B$, $C$ are collinear, as given.

b) Each of the other sets contains $D$ and two points on line $AB$. Since $D$ is not on line $AB$, the three points in each of those sets are not collinear.

So a) $A$, $B$, $C$; b) $A$, $B$, $D$; $A$, $C$, $D$; $B$, $C$, $D$.

**Answer.** a) $A$, $B$, $C$. b) $A$, $B$, $D$; $A$, $C$, $D$; $B$, $C$, $D$.
:::

:::exercise
Three points $M$, $N$, $P$ are collinear, and $N$ lies between $M$ and $P$.

a) Name the two opposite rays with endpoint $N$.

b) Which ray coincides with ray $MN$?

c) Which ray coincides with ray $PN$?

::hint
**What you need:** if $N$ lies between $M$ and $P$, then $NM$, $NP$ are opposite and $MN$ coincides with $MP$.

**Steps:**
1. Draw the three points on a line, with $N$ in the middle.
2. For each part, look at the endpoint of the ray and its direction.

::solution
a) Since $N$ lies between $M$ and $P$, rays $NM$ and $NP$ share the endpoint $N$ and together make line $MP$. So $NM$ and $NP$ are opposite rays.

b) Points $N$ and $P$ are on the same side of $M$, so ray $MN$ coincides with ray $MP$.

c) Points $N$ and $M$ are on the same side of $P$, so ray $PN$ coincides with ray $PM$.

So a) $NM$ and $NP$; b) ray $MP$; c) ray $PM$.

**Answer.** a) $NM$, $NP$; b) $MP$; c) $PM$.
:::

:::exercise
How many points can two different lines have in common? What are the lines called in each case? And what about two lines with two points in common?

::hint
**What you need:** intersecting, parallel, coinciding.

**Steps:**
1. Recall the definitions of the positions of two lines.
2. Use the property "there is exactly one line through two distinct points".

::solution
Two different lines can have exactly one point in common; then they intersect.

Two different lines can also have no point in common; then they are parallel.

If two lines have two distinct points in common, both pass through those two points. Since there is only one line through two distinct points, the two lines coincide, so they are not two different lines.

So two different lines have $1$ point in common (intersecting) or $0$ points in common (parallel); with two points in common they coincide.

**Answer.** $1$ point: intersecting; $0$ points: parallel; two points: coinciding.
:::

:::exercise
Six points are given, no three of which are collinear. Draw the lines through any two of the six points. How many lines are there in all?

::hint
**What you need:** with $n$ points, no three collinear, the number of lines is $\dfrac{n(n-1)}{2}$.

**Steps:**
1. Each point is joined to the $5$ other points.
2. Each line is counted twice.

::solution
From each point, joining it to the $5$ other points gives $5$ lines. There are $6$ points, so we count $6\cdot5=30$ lines.

Each line is counted twice, so the number of lines is
$$\dfrac{6\cdot5}{2}=15.$$

So there are $15$ lines in all.

**Answer.** $15$ lines.
:::

:::exercise
On line $xy$, mark three points $A$, $B$, $C$ in that order. How many rays have one of the points $A$, $B$, $C$ as their endpoint? Name them.

::hint
**What you need:** every point on a line is the endpoint of exactly two opposite rays.

**Steps:**
1. For each point, name the two rays with that endpoint.
2. Count the rays.

::solution
Every point on line $xy$ is the endpoint of exactly two opposite rays.

Endpoint $A$: rays $Ax$ and $Ay$.

Endpoint $B$: rays $Bx$ and $By$.

Endpoint $C$: rays $Cx$ and $Cy$.

These rays have different endpoints or different directions, so no two of them coincide. There are $3\cdot2=6$ rays in all.

So there are $6$ rays: $Ax$, $Ay$, $Bx$, $By$, $Cx$, $Cy$.

**Answer.** $6$ rays.
:::

:::exercise
To plant a straight row of trees, people often push two stakes into the ground at the ends, stretch a string between them and plant the trees along the string. Explain why the trees then end up in a straight line.

::hint
**What you need:** there is one and only one line through two distinct points.

**Steps:**
1. Treat each stake as a point and the stretched string as part of a line.
2. Which line do the bases of the trees lie on?

::solution
Treat the two stakes as two distinct points $A$ and $B$. By the property, there is one and only one line through $A$ and $B$, namely line $AB$. The string stretched between the stakes lies on line $AB$.

The trees are planted along the string, so the base of every tree lies on line $AB$.

So all the trees lie on the same line, that is, they are collinear.

**Answer.** Because the two stakes fix exactly one line, and every tree lies on that line.
:::

:::exercise
On a straight road there are three bus stops $A$, $B$, $C$, with stop $B$ between stops $A$ and $C$. A bus leaves stop $A$ and travels in the direction of ray $AB$. Does it pass stop $C$? Another bus leaves stop $B$ and travels in the direction of ray $BA$. Does this bus pass stop $C$?

::hint
**What you need:** if $B$ lies between $A$ and $C$, then ray $AB$ coincides with ray $AC$, and rays $BA$, $BC$ are opposite.

**Steps:**
1. Decide whether ray $AB$ contains point $C$.
2. Decide whether ray $BA$ contains point $C$.

::solution
Since $B$ lies between $A$ and $C$, points $B$ and $C$ are on the same side of $A$. So ray $AB$ coincides with ray $AC$, and ray $AB$ contains point $C$. The first bus passes stop $C$.

Rays $BA$ and $BC$ are opposite, so point $C$ does not lie on ray $BA$ (apart from the endpoint $B$, but $C\ne B$). The second bus travels away from stop $C$ and does not pass it.

So the first bus passes stop $C$; the second bus does not.

**Answer.** The first bus does; the second bus does not.
:::

:::exercise Challenge
$10$ points are given, exactly three of which are collinear (apart from those three, no three points are collinear). Draw the lines through any two of the $10$ points. How many lines are there in all?

::hint
**What you need:** with no three points collinear there are $\dfrac{n(n-1)}{2}$ lines; three collinear points give only one line.

**Steps:**
1. Count as if no three points were collinear.
2. How many lines would the three collinear points give, and how many do they really give? Adjust.

::solution
If no three points were collinear, the number of lines would be
$$\dfrac{10\cdot9}{2}=45.$$

In that count, the three collinear points (call them $A$, $B$, $C$) were counted as three lines $AB$, $BC$, $CA$. But since $A$, $B$, $C$ are collinear, these three lines coincide and are really one line. We have counted $3-1=2$ lines too many.

So the number of lines is
$$45-2=43.$$

So there are $43$ lines in all.

**Answer.** $43$ lines.
:::

## Mini test

:::quiz
::mc
How many lines pass through two distinct points?
A. $0$.
B. $1$.
C. $2$.
D. Infinitely many.
::key B
There is one and only one line through two distinct points. D is the number of lines through a single point.

::mc
Three points $A$, $B$, $C$ are collinear, with $B$ between $A$ and $C$. Two opposite rays are
A. $BA$ and $BC$.
B. $AB$ and $AC$.
C. $CA$ and $CB$.
D. $AB$ and $BA$.
::key A
$BA$ and $BC$ share the endpoint $B$ and together make a line. B and C are pairs of coinciding rays; D do not share an endpoint.

::mc
Five points are given, no three of which are collinear. The number of lines through any two of them is
A. $5$.
B. $20$.
C. $25$.
D. $10$.
::key D
$\dfrac{5\cdot4}{2}=10$. B forgets to divide by $2$; C works out $5\cdot5$; A just counts the points.

::mc
How many points do two parallel lines have in common?
A. $1$.
B. $2$.
C. $0$.
D. Infinitely many.
::key C
Two parallel lines have no point in common. A is the case of intersecting lines; D is the case of coinciding lines.

::tf
Line $xy$ is given, and point $O$ lies on $xy$. Decide whether each statement is true or false.
a) $Ox$ and $Oy$ are opposite rays.
b) The endpoint of ray $Ox$ is $x$.
c) Point $O$ lies on both rays $Ox$ and $Oy$.
d) Rays $Ox$ and $Oy$ together make line $xy$.
::key T F T T
a) True: they share the endpoint $O$ and together make line $xy$. b) False: the endpoint of ray $Ox$ is $O$. c) True: the endpoint lies on the ray. d) True: by the definition of opposite rays.

::sa
Seven points are given, no three of which are collinear. How many lines pass through any two of them?
::key 21
$\dfrac{7\cdot6}{2}=21$.

::sa
Four different points are marked on a line. How many rays have one of these points as their endpoint?
::key 8
Each point is the endpoint of two opposite rays: $4\cdot2=8$ rays.
:::
