---
title: Lines and planes in space
description: Meet planes in space, the accepted properties, ways to determine a plane, pyramids and tetrahedra, and how to find intersection lines and points.
minutes: 25
---

:::goals
- Describe a plane and use the notation for a point lying or not lying in a plane.
- State and use the accepted properties of lines and planes in space.
- Determine a plane by three non-collinear points, by a line and a point, or by two intersecting lines.
- Recognise a pyramid and a tetrahedron, and find the line of intersection of two planes and the intersection point of a line and a plane.
:::

A three-legged stool placed on a flat floor always stands firmly, even if the floor is slightly uneven. A four-legged table, on the other hand, sometimes rocks, and we have to slip a piece of paper under one leg.

Why are three legs always steady and four legs not? To answer, we need to know how many points determine a plane, and when four points lie in one plane.

## Planes and the accepted properties

### Explore: three points and a plane

A plane has no thickness and extends without end, like an ideal floor, a flat sheet of paper or still water. We usually denote a plane by a capital letter in brackets, for example $(P)$, $(Q)$, or by a Greek letter $(\alpha)$, $(\beta)$, and draw it as a parallelogram. We write $A\in(P)$ when the point $A$ lies in the plane $(P)$, and $A\notin(P)$ when it does not.

:::diagram A plane $(P)$, a line $d$ lying in $(P)$ and a point $M$ not in $(P)$
alt: A parallelogram representing the plane P, a line d through two points A and B inside the parallelogram, and a point M above the plane joined to it by a dashed segment
point P1 0,0 ""
point P2 6,0 ""
point P3 8,2.2 ""
point P4 2,2.2 ""
point A 2.2,0.8 below
point B 5.2,1.4 below-right
point X 1,0.56 ""
point Y 7,1.76 ""
point M 4.2,3.4 above
point H 4.2,1.3 ""
polygon P1 P2 P3 P4
segment X Y
segment M H dashed
label 0.9,1.9 "(P)"
label 7.0,2.6 "d"
:::

The three legs of the stool touch the ground at three points $A$, $B$, $C$ that are not collinear. We accept that exactly one plane passes through such three points, so the ideal floor containing the three legs is exactly that plane $(ABC)$. The four ends $A$, $B$, $C$, $D$ of the legs of a table may not lie in one plane, and then they cannot all touch one flat floor.

The following properties are not proved; they are accepted from experience of geometry in space.

:::theorem The accepted properties
1. Exactly one line passes through two distinct points.
2. Exactly one plane passes through three non-collinear points.
3. If a line has two distinct points in a plane, then every point of the line lies in that plane.
4. There exist four points that do not lie in one plane (four **non-coplanar** points).
5. If two distinct planes have a common point, then they have exactly one common line through that point. This line is called the **line of intersection** of the two planes.
6. In each plane, the known results of plane geometry hold.
:::

Property 3 gives meaning to "the line $d$ lies in the plane $(P)$", written $d\subset(P)$: it is enough that two points of $d$ lie in $(P)$. Property 5 gives us a way to find a line of intersection: we only need to find two common points of the two planes.

## Ways to determine a plane

From property 2 we get three ways to determine a plane.

:::theorem Three ways to determine a plane
A plane is determined uniquely by
- three non-collinear points $A$, $B$, $C$; written $(ABC)$;
- a line $d$ and a point $A$ not on $d$; written $(A, d)$;
- two intersecting lines $a$, $b$; written $(a, b)$.
:::

Why is this true? For a line $d$ and a point $A\notin d$, take two distinct points $B$, $C$ on $d$: the points $A$, $B$, $C$ are not collinear and, by property 3, $(ABC)$ contains all of $d$. For two lines $a$, $b$ meeting at $O$, take $A\in a$ and $B\in b$ different from $O$: $(OAB)$ contains both $a$ and $b$. Uniqueness follows from property 2.

## Pyramids and tetrahedra

Take a polygon $A_1A_2\dots A_n$ in a plane $(P)$ and a point $S$ not in $(P)$. Join $S$ to the vertices $A_1, \dots, A_n$. The figure made of the polygon $A_1A_2\dots A_n$ and the triangles $SA_1A_2$, $SA_2A_3$, ..., $SA_nA_1$ is called the **pyramid** $S.A_1A_2\dots A_n$. The point $S$ is the **apex**, the polygon $A_1A_2\dots A_n$ is the **base**, the triangles are the **lateral faces**, the segments $SA_i$ are the **lateral edges** and the sides of the base are the **base edges**. A pyramid whose base is a triangle, a quadrilateral, ... is called a triangular pyramid, a quadrilateral pyramid, ... A pyramid whose base has $n$ sides has $n+1$ faces ($n$ lateral faces and $1$ base), $2n$ edges and $n+1$ vertices.

:::diagram The pyramid $S.ABCD$ (dashed lines are hidden edges)
alt: A quadrilateral pyramid S.ABCD with apex S above the base ABCD, with the edges SD, AD and CD drawn dashed because they are hidden
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
:::

Take four non-coplanar points $A$, $B$, $C$, $D$. The figure made of the four triangles $ABC$, $ACD$, $ABD$, $BCD$ is called the **tetrahedron** $ABCD$. It has $4$ vertices, $6$ edges and $4$ faces. A tetrahedron whose four faces are all equilateral triangles is called a regular tetrahedron.

:::note Two basic techniques
**Finding the line of intersection of $(P)$ and $(Q)$:** find two distinct common points; the line through them is the line of intersection. One common point is often a given point (such as the apex $S$); the other is often the intersection of a line in $(P)$ with a line in $(Q)$.

**Finding the intersection of a line $d$ and a plane $(P)$:** choose an auxiliary plane $(Q)\supset d$ and find the line of intersection $\Delta=(P)\cap(Q)$; the point where $d$ meets $\Delta$ is the point we need.
:::

:::example Four non-coplanar points
Take four non-coplanar points $A$, $B$, $C$, $D$. Prove that no three of the four points are collinear. How many planes pass through three of the four points?

**Solution.** Suppose three of the points, say $A$, $B$, $C$, are collinear. Then the line containing them and the point $D$ lie in one plane (the second way to determine a plane), so the four points are coplanar, a contradiction. So no three of the points are collinear.

Each set of three points determines exactly one plane. There are $4$ such sets: $ABC$, $ABD$, $ACD$, $BCD$. These four planes are different, because if two of them coincided, all four points would be coplanar.

So there are exactly $4$ planes, and they are the four faces of the tetrahedron $ABCD$.
:::

:::diagram The pyramid $S.ABCD$ with $AB$ meeting $CD$ at $E$
alt: The pyramid S.ABCD with the lines AB and CD extended to meet at a point E on the right, and the segment SE drawn dashed
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
point E 6,1 right
segment B E dashed
segment C E dashed
segment S E dashed
:::

:::example Finding a line of intersection
Take a pyramid $S.ABCD$ whose base is a quadrilateral $ABCD$ such that $AB$ meets $CD$ at $E$. Find the line of intersection of the planes $(SAB)$ and $(SCD)$.

**Understand.** We need a line common to $(SAB)$ and $(SCD)$. By property 5, it is enough to find two distinct common points.

**Plan.** The point $S$ certainly lies in both planes. We look for a second common point in the plane of the base, using the intersection of the lines $AB$ and $CD$ given in the problem.

**Solve.** The point $S$ lies in both $(SAB)$ and $(SCD)$. Since $E\in AB$ and $AB\subset(SAB)$, we have $E\in(SAB)$. Since $E\in CD$ and $CD\subset(SCD)$, we have $E\in(SCD)$. So $E$ is also a common point, and $E\ne S$ because $E$ lies in the base plane and $S$ does not.

So the line of intersection of $(SAB)$ and $(SCD)$ is the line $SE$.

**Look back.** If $ABCD$ is a parallelogram, then $AB$ is parallel to $CD$ and there is no point $E$. This method then fails, and the line of intersection is the line through $S$ parallel to $AB$; we will prove this in the lesson on parallel lines.
:::

:::diagram The point $M$ on $SC$ and the point $N$ where $SD$ meets the plane $(MAB)$
alt: The pyramid S.ABCD with the point E, the point M on the edge SC, and the line EM extended to meet the edge SD at the point N; the segment BM is solid and the segment NA is dashed
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
point E 6,1 right
point M 2.65,3.125 right
point N 1.53,3.83 left
segment B E dashed
segment C E dashed
segment E N dashed
segment B M
segment N A dashed
:::

:::example Finding the intersection of a line and a plane
In the pyramid above, $M$ is the midpoint of $SC$. Find the point $N$ where the line $SD$ meets the plane $(MAB)$.

**Solution.** The line $SD$ lies in the plane $(SCD)$. We find the line of intersection of $(SCD)$ and $(MAB)$. The point $M\in SC\subset(SCD)$ and $M\in(MAB)$, so $M$ is a common point. The point $E=AB\cap CD$ lies in $AB\subset(MAB)$ and in $CD\subset(SCD)$, so $E$ is also a common point. So the line of intersection is the line $ME$.

In the plane $(SCD)$, the line $ME$ meets $SD$ at a point $N$. Since $N\in ME\subset(MAB)$, the point $N$ lies in $(MAB)$, and $N\in SD$.

So the point where $SD$ meets $(MAB)$ is $N=SD\cap ME$.
:::

Finally we return to the question at the start of the lesson.

:::example A three-legged stool and a four-legged table
Explain why a three-legged stool always stands firmly on a flat floor while a four-legged table can rock.

**Understand.** Treat the floor as a plane and each leg as a segment whose lower end is a point. A leg "touches the floor" when its lower end lies in the plane of the floor.

**Plan.** Use property 2 (three non-collinear points determine a plane) and property 4 (there exist four non-coplanar points).

**Solve.** The stool has three leg ends $A$, $B$, $C$ that are not collinear, so they determine exactly one plane $(ABC)$. We only need to place the stool so that the floor coincides with $(ABC)$; then all three legs touch the floor, and this can always be done. The table has four leg ends $A$, $B$, $C$, $D$ which, by property 4, may be non-coplanar, for example when one leg is slightly shorter. A plane floor contains all four points only if they are coplanar, so when they are not, one leg is off the floor and the table rocks.

**Look back.** This is why camera stands and many surveying instruments have three legs. A piece of paper under the loose leg makes the four leg ends coplanar again, so the table stops rocking.
:::

**Connections.** The three ways to determine a plane and the techniques for finding lines of intersection and intersection points will be used in the following lessons. The next lesson looks at two lines in space, which may meet, be parallel or be skew. In each plane, all the results of plane geometry can still be used (property 6).

:::warning Common mistakes
- **Thinking that any three points determine a plane.** Wrong: three collinear points $A$, $B$, $C$ determine exactly one plane. Why it is wrong: infinitely many planes pass through one line, like the pages of a book opened around its spine. Right: the three points must not be collinear.
- **Thinking that any four points lie in one plane.** Wrong: the four ends of a table's legs always lie in the floor. Why it is wrong: the four vertices of a tetrahedron are not coplanar. Right: only three non-collinear points are certain to determine a plane.
- **Finding a line of intersection from only one common point.** Wrong: the line of intersection of $(SAB)$ and $(SCD)$ is some line through $S$. Why it is wrong: many lines pass through $S$; two distinct common points are needed. Right: find a second point $E=AB\cap CD$, and the line of intersection is $SE$.
- **Thinking that two distinct planes can have exactly one common point.** Wrong: $(P)$ and $(Q)$ have only the point $I$ in common. Why it is wrong: by property 5, one common point means a whole common line. Right: two distinct planes either have no common point or meet along a line.
:::

## Key terms

:::terms
- plane | mặt phẳng
- line | đường thẳng
- postulate (axiom) | tính chất thừa nhận
- line of intersection | giao tuyến
- coplanar | đồng phẳng
- collinear | thẳng hàng
- pyramid | hình chóp
- base | mặt đáy
- lateral face | mặt bên
- lateral edge | cạnh bên
- tetrahedron | hình tứ diện
:::

## Summary

- Exactly one line passes through two distinct points; exactly one plane passes through three non-collinear points.
- A line with two points in a plane lies entirely in that plane.
- Two distinct planes with a common point meet along a line called the line of intersection; to find it, find two common points.
- A plane is determined by: three non-collinear points; a line and a point not on it; two intersecting lines.
- A pyramid whose base has $n$ sides has $n+1$ faces, $2n$ edges and $n+1$ vertices; a tetrahedron has $4$ faces, $6$ edges and $4$ vertices.
- To find where a line $d$ meets a plane $(P)$: choose an auxiliary plane containing $d$, find its line of intersection with $(P)$, then find where $d$ meets that line.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
How many faces, edges and vertices does a pyramid whose base has $7$ sides have?

::hint
**What you need:** a pyramid whose base has $n$ sides has $n+1$ faces, $2n$ edges and $n+1$ vertices.

**Steps:**
1. Substitute $n=7$.

::solution
For $n=7$: $n+1=8$ faces, $2n=14$ edges, $n+1=8$ vertices.

**Answer.** $8$ faces, $14$ edges, $8$ vertices.
:::

:::exercise
Take five points in space, with no three collinear and no four coplanar. How many planes pass through three of the five points?

::hint
**What you need:** each set of three non-collinear points determines exactly one plane; the planes are different because no four points are coplanar.

**Steps:**
1. Count the ways to choose three points from five.
2. Explain why the planes are all different.

::solution
The number of ways to choose three points from five is $\dbinom{5}{3}=10$. Each non-collinear set of three points determines exactly one plane. Two different sets of three give different planes, because if they coincided, at least four points would be coplanar.

**Answer.** $10$ planes.
:::

:::exercise
Take a tetrahedron $ABCD$. Take $M$ on the edge $AB$ and $N$ on the edge $AC$ such that the line $MN$ meets the line $BC$ at $E$. Find the line of intersection of the planes $(DMN)$ and $(BCD)$.

::hint
**What you need:** two distinct common points determine the line of intersection.

**Steps:**
1. $D$ lies in both planes.
2. Show that $E$ lies in both planes.

::solution
The point $D$ lies in both planes. Since $E\in MN\subset(DMN)$ and $E\in BC\subset(BCD)$, $E$ is also a common point. The two common points $D$ and $E$ are distinct (because $E$ lies in the plane $(ABC)$ and $D$ does not), so the line of intersection is $DE$.

**Answer.** The line of intersection is the line $DE$.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a quadrilateral $ABCD$ such that $AB$ meets $CD$ at $E$. Take a point $M$ on the edge $SD$. Find the point where the line $SC$ meets the plane $(MAB)$.

::hint
**What you need:** choose an auxiliary plane containing $SC$, namely $(SCD)$; find the line of intersection of $(SCD)$ and $(MAB)$.

**Steps:**
1. Point out the two common points $M$ and $E$.
2. Find where the line $ME$ meets $SC$ in $(SCD)$.

::solution
The auxiliary plane containing $SC$ is $(SCD)$. The point $M\in SD\subset(SCD)$ and $M\in(MAB)$; the point $E\in CD\subset(SCD)$ and $E\in AB\subset(MAB)$. So the line of intersection of $(SCD)$ and $(MAB)$ is $ME$. In the plane $(SCD)$, $ME$ meets $SC$ at $N$, and $N\in(MAB)$.

**Answer.** The point is $N=SC\cap ME$.
:::

:::exercise
A door is attached to its frame by two hinges (treated as two fixed points) and can still swing about the axis through the two hinges. If a third fixed point, a bolt not on that axis, is added, the door can no longer swing. Explain this using the properties of planes.

::hint
**What you need:** one line passes through two points; exactly one plane passes through three non-collinear points.

**Steps:**
1. The door is part of a plane.
2. Is the plane containing two fixed points determined uniquely?

::solution
Two fixed hinges give only one fixed line. Infinitely many planes contain this line, so the door can swing about it and take different positions. When a third bolt not on the axis is added, the three fixed non-collinear points determine exactly one plane. The door must lie in that one plane, so it cannot swing.

**Answer.** Two points fix only a line; three non-collinear points fix a plane.
:::

:::exercise
Take four non-coplanar points $A$, $B$, $C$, $D$. Decide whether each statement is true or false.

a) The points $A$, $B$, $C$ are not collinear.

b) The lines $AB$ and $CD$ may meet.

c) The planes $(ABC)$ and $(ABD)$ have the line $AB$ as their line of intersection.

d) Exactly $3$ planes pass through three of the four given points.

::hint
**What you need:** if two lines meet, they lie in one plane.

**Steps:**
1. b) If $AB$ meets $CD$, are the four points coplanar?
2. c) $A$, $B$ are two common points.
3. d) Count the sets of three.

::solution
a) **True**: if they were collinear, they would be coplanar with $D$.

b) **False**: if $AB$ and $CD$ meet, they lie in one plane, and the four points are coplanar.

c) **True**: $A$ and $B$ lie in both planes, so the line of intersection is $AB$.

d) **False**: there are $4$ planes $(ABC)$, $(ABD)$, $(ACD)$, $(BCD)$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise Revision
The numbers of edges of pyramids whose bases are a triangle, a quadrilateral, a pentagon, ... (base with $n$ sides, $n=3, 4, 5, \dots$) form a sequence $(u_k)$. Prove that this sequence is an arithmetic progression, find its common difference and general term, and find the number of edges of a pyramid whose base has $20$ sides.

::hint
**What you need:** a pyramid whose base has $n$ sides has $2n$ edges; from the lesson on arithmetic progressions, $u_k=u_1+(k-1)d$.

**Steps:**
1. Write the first few terms: $6, 8, 10, \dots$.
2. Find $u_{k+1}-u_k$ and then $u_k$.

::solution
A pyramid with a triangular base has $6$ edges, so $u_1=6$; a base with $k+2$ sides gives $2(k+2)=2k+4$ edges, that is $u_k=2k+4$. Since $u_{k+1}-u_k=2$ is constant, this is an arithmetic progression with $u_1=6$, $d=2$. A base with $20$ sides corresponds to $k=18$, and $u_{18}=2\cdot18+4=40$.

**Answer.** The arithmetic progression $u_k=2k+4$ (common difference $2$); a pyramid with a $20$-sided base has $40$ edges.
:::

:::exercise Challenge
Take three distinct planes $(P)$, $(Q)$, $(R)$ that meet in pairs along the three lines $a=(P)\cap(Q)$, $b=(Q)\cap(R)$, $c=(R)\cap(P)$. Prove that if $a$ and $b$ meet at $I$, then $I$ also lies on $c$, that is, the three lines are concurrent.

::hint
**What you need:** if a point lies in both $(R)$ and $(P)$, then it lies on their line of intersection $c$.

**Steps:**
1. Find which planes contain $I$.
2. Conclude that $I\in c$.

::solution
Since $I\in a=(P)\cap(Q)$, we have $I\in(P)$ and $I\in(Q)$. Since $I\in b=(Q)\cap(R)$, we have $I\in(Q)$ and $I\in(R)$. So $I$ lies in both $(P)$ and $(R)$, hence on their line of intersection $c=(R)\cap(P)$.

**Answer.** $I\in c$; the three lines $a$, $b$, $c$ are concurrent at $I$.
:::

## Mini test

:::quiz
::mc NB
How many planes pass through three given non-collinear points?
A. Infinitely many.
B. Two.
C. One and only one.
D. None.
::key C
This is the second accepted property. Option A is true for three collinear points.

::mc TH
How many faces does a pyramid whose base is a hexagon have?
A. $6$.
B. $12$.
C. $8$.
D. $7$.
::key D
A pyramid with a hexagonal base has $6$ lateral faces and $1$ base, so $7$ faces. Option A omits the base, and option B is the number of edges.

::mc NB
Two distinct planes have a common point. Which statement is true?
A. The two planes have exactly one common line through that point.
B. The two planes have no other common point.
C. The two planes coincide.
D. The two planes have exactly three common points.
::key A
By the fifth accepted property, two distinct planes with a common point meet along a line (the line of intersection).

::mc TH
Which of the following does not always determine exactly one plane?
A. Three non-collinear points.
B. Any three points.
C. A line and a point not on it.
D. Two intersecting lines.
::key B
Three collinear points lie in infinitely many planes, so any three points need not determine a unique plane. Options A, C and D are the three ways to determine a plane.

::tf TH NB VD TH
Take a pyramid $S.ABCD$ whose base is a convex quadrilateral $ABCD$ with diagonals $AC$ and $BD$ meeting at $O$. Decide whether each statement is true or false.
a) The point $O$ lies in the plane $(SAB)$.
b) The point $O$ lies in the plane $(SBD)$.
c) The line of intersection of $(SAC)$ and $(SBD)$ is the line $AC$.
d) The line $BD$ meets the plane $(SAC)$ at $O$.
::key F T F T
a) False: $O$ lies inside the quadrilateral, not on the line $AB$, so it is not in $(SAB)$. b) True: $O\in BD\subset(SBD)$. c) False: the line of intersection is $SO$. d) True: $O\in AC\subset(SAC)$ and $O\in BD$.

::sa TH
A regular tetrahedron has edges of length $6$ cm. What is the total length of all its edges, in centimetres?
::key 36
A tetrahedron has $6$ edges, each $6$ cm long, so the total is $6\cdot6=36$ cm.

::sa VD
Take seven points in space, with no three collinear and no four coplanar. How many planes pass through three of the seven points?
::key 35
The number of ways to choose three points from seven is $\dbinom{7}{3}=35$, and these planes are all different.
:::
