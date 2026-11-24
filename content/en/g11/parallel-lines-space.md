---
title: Parallel lines in space
description: Tell apart the positions of two lines in space, learn the properties of parallel lines and the theorem on three intersection lines, and use them.
minutes: 25
---

:::goals
- Tell apart the three positions of two distinct lines in space: intersecting, parallel and skew.
- State and use the properties of parallel lines in space.
- Use the theorem on three lines of intersection to see that they are concurrent or pairwise parallel.
- Use parallel lines to find the line of intersection of two planes and to explain real situations.
:::

A roof has two flat slopes that meet along the ridge. The lower edges (eaves) of the two slopes are parallel to each other, and the ridge also runs parallel to them, so seen from the front of the house all these lines look to be going in the same direction.

Why is the ridge always parallel to the two eaves, rather than slanting off in another direction? To answer, we need to know when two lines in space are parallel and what this tells us about the line of intersection of two planes.

## Positions of two lines

### Explore: the edges of a cuboid

In a plane, two distinct lines either meet or are parallel. In space there is one more possibility. We look at the edges of the cuboid $ABCD.A'B'C'D'$.

:::diagram The cuboid $ABCD.A'B'C'D'$ (dashed lines are hidden edges)
alt: A cuboid with the base ABCD at the bottom and the top face A'B'C'D' above, with the edges AD, DC and DD' drawn dashed because they are hidden
point A 0,0 below-left
point B 4,0 below-right
point C 5.5,1.5 right
point D 1.5,1.5 left
point A1 0,3 left "A′"
point B1 4,3 above-left "B′"
point C1 5.5,4.5 above-right "C′"
point D1 1.5,4.5 above "D′"
segment A B
segment B C
segment A1 B1
segment B1 C1
segment C1 D1
segment D1 A1
segment A A1
segment B B1
segment C C1
segment C D dashed
segment D A dashed
segment D D1 dashed
:::

Take the line $AB$. It meets $AD$ at $A$ and meets $BB'$ at $B$. It lies in one plane with $CD$ and has no common point with $CD$: these two lines are parallel. But $AB$ and $CC'$ have no common point and also do not lie in one plane: no plane contains both lines.

:::definition Positions of two lines
Two distinct lines $a$, $b$ in space are in exactly one of three positions:
- **intersecting**: exactly one common point (then they are coplanar);
- **parallel**: coplanar with no common point, written $a\parallel b$;
- **skew**: not in any one plane (then they have no common point).
:::

Two lines with no common point may be parallel or skew; the difference is whether they are coplanar. Two skew lines never meet, however far they are extended.

:::example Pairs of edges of a cuboid
In the cuboid $ABCD.A'B'C'D'$, decide the position of the line $AB$ relative to each of the other $11$ edges.

**Solution.** The edges parallel to $AB$ are $CD$, $A'B'$, $C'D'$: $3$ edges. The edges meeting $AB$ are $AD$, $AA'$ (at $A$) and $BC$, $BB'$ (at $B$): $4$ edges. The remaining edges are $CC'$, $DD'$, $B'C'$, $A'D'$: they are not in one plane with $AB$ and have no common point, so they are skew to $AB$: $4$ edges.

Check: $3+4+4=11$. So $AB$ is parallel to $3$ edges, meets $4$ edges and is skew to $4$ edges.
:::

:::example Opposite edges of a tetrahedron
Take a tetrahedron $ABCD$. Prove that the lines $AB$ and $CD$ are skew.

**Solution.** Suppose $AB$ and $CD$ are not skew, that is they are coplanar, lying in one plane $(P)$. Then all four points $A$, $B$, $C$, $D$ lie in $(P)$, that is they are coplanar. This contradicts the fact that the four vertices of the tetrahedron $ABCD$ are not coplanar.

So $AB$ and $CD$ are skew.
:::

## Properties of parallel lines

:::theorem Properties of parallel lines
1. Through a point not on a given line there is exactly one line parallel to the given line.
2. Two distinct lines that are both parallel to a third line are parallel to each other.
3. (**The theorem on three lines of intersection**) If three distinct planes meet in pairs along three distinct lines of intersection, then those three lines are either concurrent or pairwise parallel.
4. If two distinct planes contain two parallel lines respectively, then their line of intersection (if there is one) is parallel to these two lines or coincides with one of them.
:::

Why is property 3 true? Call the three planes $(P)$, $(Q)$, $(R)$ with $a=(P)\cap(Q)$, $b=(Q)\cap(R)$, $c=(R)\cap(P)$. If $a$ and $b$ meet at $I$, then $I$ lies in all three planes, so $I\in c$: the three lines are concurrent. If $a$ and $b$ do not meet, then, since both lie in $(Q)$, they are parallel. Then $a$ and $c$ do not meet either: if they met at $J$, then $J\in(Q)$ and $J\in(R)$, so $J\in b$, a contradiction. The lines $a$ and $c$ both lie in $(P)$, so they are parallel, and hence $b\parallel c$. So the three lines are pairwise parallel.

Why is property 4 true? Let the two parallel lines be $a\subset(P)$, $b\subset(Q)$ and let $c=(P)\cap(Q)$. The parallel lines $a$, $b$ lie in a plane $(R)$ and $a=(P)\cap(R)$, $b=(Q)\cap(R)$. Apply property 3 to $(P)$, $(Q)$, $(R)$: if $c$ differs from $a$ and $b$, the three lines $a$, $b$, $c$ are not concurrent (because $a\parallel b$), so they are pairwise parallel, that is $c\parallel a\parallel b$.

:::example A parallelogram from midpoints of edges
Take a tetrahedron $ABCD$. Let $M$, $N$ be the midpoints of $AB$, $AC$ and let $P$, $Q$ be the midpoints of $DC$, $DB$. Prove that $M$, $N$, $P$, $Q$ are coplanar and that $MNPQ$ is a parallelogram.

**Understand.** We must show that four points lie in one plane and that the quadrilateral they form has two opposite sides that are parallel and equal.

**Plan.** Use midsegments in the triangles $ABC$ and $DBC$ (plane geometry, property 6 of the previous lesson), then use the transitivity of parallel lines.

**Solve.** In triangle $ABC$, $MN$ is a midsegment, so $MN\parallel BC$ and $MN=\dfrac{BC}{2}$. In triangle $DBC$, $QP$ is a midsegment, so $QP\parallel BC$ and $QP=\dfrac{BC}{2}$. Hence $MN\parallel QP$ (both are parallel to $BC$) and $MN=QP$.

The two parallel lines $MN$ and $QP$ lie in one plane, so $M$, $N$, $P$, $Q$ are coplanar. The quadrilateral $MNPQ$ has two opposite sides $MN$ and $QP$ that are parallel and equal, so it is a parallelogram.

**Look back.** The argument only needs $MN$ and $QP$ to be parallel to a third line, $BC$. That is property 2.
:::

:::diagram The pyramid $S.ABCD$ with a trapezium base $ABCD$ where $AB\parallel CD$; the line $d$ through $S$ parallel to $AB$
alt: A pyramid S.ABCD whose base is a trapezium with AB parallel to CD, and a dashed horizontal line through the apex S parallel to AB
point A 0,0 below-left
point B 4,0 below-right
point C 3.5,1.6 right
point D 1,1.6 left
point S 1.9,4.2 above
point X 0,4.2 left
point Y 4.2,4.2 right
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
segment X Y dashed
:::

:::example The line of intersection when the base has two parallel sides
Take a pyramid $S.ABCD$ whose base is a trapezium $ABCD$ with $AB\parallel CD$. Find the line of intersection of $(SAB)$ and $(SCD)$.

**Solution.** The point $S$ lies in both planes. The plane $(SAB)$ contains $AB$ and the plane $(SCD)$ contains $CD$, and $AB\parallel CD$. By property 4, the line of intersection of the two planes is parallel to $AB$ and $CD$ (or coincides with one of them). Since the line of intersection passes through $S$ and $S$ is not on $AB$ or $CD$, it coincides with neither.

So the line of intersection is the line $d$ through $S$ parallel to $AB$ (and $CD$).
:::

This is also what we promised to prove in the previous lesson, when the base is a parallelogram and there is no point $E=AB\cap CD$.

:::example A roof
A house has two flat roof slopes $(P)$ and $(Q)$ that meet along the ridge $c$. The lower edge of the slope $(P)$ is a line $a$ and the lower edge of the slope $(Q)$ is a line $b$, with $a\parallel b$. Explain why the ridge $c$ is parallel to the two eaves.

**Understand.** The planes $(P)$ and $(Q)$ meet along $c$, where $a\subset(P)$, $b\subset(Q)$ and $a\parallel b$. We must prove that $c\parallel a$.

**Plan.** This is exactly the situation of property 4: two planes containing two parallel lines respectively.

**Solve.** By property 4, the line of intersection $c$ of $(P)$ and $(Q)$ is parallel to $a$ and $b$ or coincides with one of them. The ridge does not coincide with an eave (the ridge is higher than the eaves), so $c$ is parallel to $a$ and $b$.

So the ridge is parallel to the two eaves.

**Look back.** If the two eaves $a$ and $b$ are not parallel but meet (as at the corner of an L-shaped house or on a pyramid roof), then by property 3 the three lines $a$, $b$, $c$ are concurrent: the ridge runs to the very point where the two eaves meet.
:::

**Connections.** Parallel lines give us a tool for finding lines of intersection, complementing the use of intersection points in the previous lesson. The next lesson looks at a line parallel to a plane, based on the properties of this lesson.

:::warning Common mistakes
- **Thinking that two lines with no common point are parallel.** Wrong: $AB$ and $CC'$ of the cuboid have no common point, so they are parallel. Why it is wrong: they are not coplanar, so they are skew. Right: being parallel also requires being coplanar.
- **Thinking that two lines perpendicular to a third line are parallel.** Wrong: $AB$ and $AD$ are both perpendicular to $AA'$, so $AB\parallel AD$. Why it is wrong: $AB$ and $AD$ meet at $A$. Right: in space, two lines perpendicular to a third line may meet, be parallel or be skew.
- **Thinking that skew lines meet if extended.** Wrong: extending $AB$ and $CC'$ gives a point of intersection. Why it is wrong: they are not coplanar, so they never meet however far they are extended. Right: skew means no common point and not coplanar.
- **Thinking that three lines of intersection are always concurrent.** Wrong: three planes that meet in pairs have three lines of intersection that meet at one point. Why it is wrong: two roof slopes and the ground, with parallel eaves, give three pairwise parallel lines of intersection. Right: the three lines are concurrent or pairwise parallel.
:::

## Key terms

:::terms
- parallel lines | hai đường thẳng song song
- intersecting lines | hai đường thẳng cắt nhau
- skew lines | hai đường thẳng chéo nhau
- coplanar | đồng phẳng
- line of intersection | giao tuyến
- concurrent | đồng quy
- midsegment | đường trung bình
- cuboid | hình hộp chữ nhật
- tetrahedron | tứ diện
:::

## Summary

- Two distinct lines in space either meet (one common point), or are parallel (coplanar, no common point), or are skew (not coplanar).
- Through a point not on a line $d$ there is exactly one line parallel to $d$.
- Two distinct lines parallel to a third line are parallel to each other.
- If three distinct planes meet in pairs along three distinct lines, the three lines are concurrent or pairwise parallel.
- If two planes contain two parallel lines, their line of intersection (if any) is parallel to those lines or coincides with one of them.
- In a cuboid, each edge is parallel to $3$ edges, meets $4$ edges and is skew to $4$ edges.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
In the cube $ABCD.A'B'C'D'$, how many other edges is the line $AA'$ parallel to, how many does it meet, and how many are skew to it?

::hint
**What you need:** work as in the first example, with the other $11$ edges.

**Steps:**
1. Find the edges parallel to $AA'$.
2. Find the edges meeting $AA'$ at $A$ or $A'$.
3. The remaining edges are skew.

::solution
The cube $ABCD.A'B'C'D'$ has $12$ edges; besides $AA'$ there are $11$ other edges. We examine the position of $AA'$ relative to each of them.

Edges parallel to $AA'$. These are the edges in the same direction as $AA'$: $BB'$, $CC'$, $DD'$. There are $3$ edges.

Edges meeting $AA'$. These are the edges sharing an endpoint with $AA'$: $AB$, $AD$ (meeting at $A$) and $A'B'$, $A'D'$ (meeting at $A'$). There are $4$ edges.

Edges skew to $AA'$. These are the remaining $11-3-4=4$ edges: $BC$, $CD$, $B'C'$, $C'D'$. They have no common point with $AA'$ and are not parallel to $AA'$, so they are skew to $AA'$.

So $AA'$ is parallel to $3$ edges, meets $4$ edges and is skew to $4$ edges.

**Answer.** Parallel to $3$ edges, meets $4$ edges, skew to $4$ edges.
:::

:::exercise
Take a tetrahedron $ABCD$. Prove that the lines $AC$ and $BD$ are skew.

::hint
**What you need:** if two lines are coplanar, all their points are coplanar.

**Steps:**
1. Suppose $AC$ and $BD$ are coplanar and find a contradiction.

::solution
Suppose $AC$ and $BD$ lie in one plane. Then the four points $A$, $B$, $C$, $D$ are coplanar, which contradicts $ABCD$ being a tetrahedron. So $AC$ and $BD$ are skew.

**Answer.** $AC$ and $BD$ are skew.
:::

:::exercise
Take a tetrahedron $ABCD$. Let $M$, $N$, $P$, $Q$ be the midpoints of $AB$, $BC$, $CD$, $DA$. Prove that $MNPQ$ is a parallelogram.

::hint
**What you need:** midsegments of a triangle; two lines parallel to a third line are parallel.

**Steps:**
1. Show that $MN\parallel AC$ and $QP\parallel AC$.
2. Compare the lengths $MN$ and $QP$.

::solution
To prove that $MNPQ$ is a parallelogram, we show that the opposite sides $MN$ and $QP$ are parallel and equal.

In triangle $ABC$, $M$ and $N$ are the midpoints of $AB$ and $BC$, so $MN$ is a midsegment. Hence
$$MN\parallel AC\quad\text{and}\quad MN=\frac{AC}{2}.$$

In triangle $ADC$, $Q$ and $P$ are the midpoints of $AD$ and $CD$, so $QP$ is a midsegment. Hence
$$QP\parallel AC\quad\text{and}\quad QP=\frac{AC}{2}.$$

Since $MN\parallel AC$ and $QP\parallel AC$, we get $MN\parallel QP$. Two parallel lines are coplanar, so $M$, $N$, $P$, $Q$ lie in one plane. Moreover $MN=QP=\dfrac{AC}{2}$.

The plane quadrilateral $MNPQ$ has two opposite sides $MN$ and $QP$ that are parallel and equal.

So $MNPQ$ is a parallelogram.

**Answer.** $MNPQ$ is a parallelogram.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Find the line of intersection of $(SAD)$ and $(SBC)$.

::hint
**What you need:** if two planes contain two parallel lines respectively, their line of intersection is parallel to them.

**Steps:**
1. Show that $AD\parallel BC$.
2. $S$ is a common point; the line of intersection passes through $S$.

::solution
We use property 4: if two distinct planes contain two parallel lines respectively and have a common point, then their line of intersection is the line through that common point parallel to the two given lines.

Since $ABCD$ is a parallelogram, $AD\parallel BC$.

The plane $(SAD)$ contains $AD$ and the plane $(SBC)$ contains $BC$. These two planes are distinct and have the common point $S$.

By property 4, the line of intersection of $(SAD)$ and $(SBC)$ is the line $d$ through $S$ parallel to $AD$ (and parallel to $BC$).

So the line of intersection of $(SAD)$ and $(SBC)$ is the line through $S$ parallel to $AD$ and $BC$.

**Answer.** The line through $S$ parallel to $AD$ and $BC$.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a trapezium $ABCD$ with $AD\parallel BC$ and $AB$ meeting $CD$ at $E$. Find the line of intersection of $(SAB)$ and $(SCD)$, and the line of intersection of $(SAD)$ and $(SBC)$.

::hint
**What you need:** if two base sides meet, use their intersection point; if they are parallel, use the line through $S$ parallel to them.

**Steps:**
1. For $(SAB)\cap(SCD)$: use $S$ and $E$.
2. For $(SAD)\cap(SBC)$: use $AD\parallel BC$.

::solution
The intersection of $(SAB)$ and $(SCD)$. The point $S$ is a first common point. Since $E=AB\cap CD$, we have $E\in AB\subset(SAB)$ and $E\in CD\subset(SCD)$, so $E$ is a second common point. Two distinct planes with two distinct common points $S$ and $E$ ($E$ lies in the base, so $E\neq S$) meet along the line $SE$.

The intersection of $(SAD)$ and $(SBC)$. The plane $(SAD)$ contains $AD$, the plane $(SBC)$ contains $BC$, with $AD\parallel BC$, and the two planes have the common point $S$. By property 4 (the line of intersection of two planes containing two parallel lines is parallel to those lines), the line of intersection is the line through $S$ parallel to $AD$ (and $BC$).

So $(SAB)\cap(SCD)=SE$; and $(SAD)\cap(SBC)$ is the line through $S$ parallel to $AD$.

**Answer.** $(SAB)\cap(SCD)=SE$; $(SAD)\cap(SBC)$ is the line through $S$ parallel to $AD$.
:::

:::exercise
A flyover crosses above a road: the route on the flyover and the route on the road below (treated as two lines) do not meet and are not parallel. Do these two lines lie in one plane? How would the flyover have to run for the two routes to be parallel?

::hint
**What you need:** two lines with no common point are either parallel or skew; being parallel requires being coplanar.

**Steps:**
1. Place the two routes in one of the three positions.
2. Think about when they would be coplanar.

::solution
Let $a$ be the line representing the route on the flyover and $b$ the line representing the route on the road below.

By the statement, $a$ and $b$ have no common point (they do not meet) and are not parallel. Two lines in space that have no common point and are not parallel are skew. Two skew lines do not lie in one plane, because if they lay in one plane they would either meet or be parallel.

Two parallel lines are coplanar and have no common point. Therefore, for the two routes to be parallel, the flyover must run in the same direction as the road below (and the two routes must not coincide).

So the two routes are skew and do not lie in one plane; they are parallel when the flyover runs in the same direction as the road below.

**Answer.** Skew, not in one plane; they are parallel when the flyover runs in the same direction as the road below.
:::

:::exercise
Take a cube $ABCD.A'B'C'D'$. Decide whether each statement is true or false.

a) $AB\parallel C'D'$.

b) $AB$ and $CC'$ are skew.

c) $AA'$ and $CC'$ are skew.

d) $BD$ and $A'C'$ meet.

::hint
**What you need:** two lines with no common point are parallel or skew.

**Steps:**
1. a) $AB\parallel CD$ and $CD\parallel C'D'$.
2. c) $AA'$ and $CC'$ are both parallel to $BB'$.
3. d) $BD\parallel B'D'$.

::solution
a) **True.** In the square $ABCD$ we have $AB\parallel CD$. In the square $CDD'C'$ we have $CD\parallel C'D'$. Two lines parallel to a third line are parallel to each other, so $AB\parallel C'D'$.

b) **True.** The line $AB$ lies in the base $(ABCD)$ while $CC'$ meets the base at $C$, and $C\notin AB$. Hence $AB$ and $CC'$ have no common point. They are also not parallel (since $CC'\parallel AA'$ and $AA'$ meets $AB$ at $A$). So $AB$ and $CC'$ are skew, that is, not coplanar.

c) **False.** We have $AA'\parallel BB'$ and $CC'\parallel BB'$. Two lines parallel to a third line are parallel to each other, so $AA'\parallel CC'$. Thus $AA'$ and $CC'$ are parallel, not skew.

d) **False.** $BD$ lies in the base and $A'C'$ lies in the top face; these faces are parallel, so $BD$ and $A'C'$ have no common point. They are also not parallel, since $BD\parallel B'D'$ and $B'D'$ meets $A'C'$ at the centre of the top face. So $BD$ and $A'C'$ are skew; they do not meet.

So statements a), b) are true; statements c), d) are false.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
How many pairs of skew edges does a cuboid have?

::hint
**What you need:** each edge is skew to $4$ other edges; each pair is counted twice.

**Steps:**
1. Multiply the number of edges by the number of edges skew to each.
2. Divide by $2$.

::solution
A cuboid has $12$ edges. Take any edge, for instance $AA'$. Counting as in a similar box (such as the cube $ABCD.A'B'C'D'$): there are $3$ edges parallel to $AA'$, $4$ edges meeting $AA'$, and $11-3-4=4$ edges skew to $AA'$ (namely $BC$, $CD$, $B'C'$, $C'D'$). These relative positions depend only on how the edges are arranged, so the same holds for every edge of a cuboid: each edge is skew to exactly $4$ other edges.

Counting edge by edge gives $12\cdot4=48$ counts. Each pair of skew edges $\{e, f\}$ is counted twice (once from $e$ and once from $f$). Therefore the number of pairs of skew edges is
$$\frac{12\cdot4}{2}=\frac{48}{2}=24.$$

So a cuboid has $24$ pairs of skew edges.

**Answer.** $24$ pairs.
:::

:::exercise Revision
Prove that two distinct parallel lines $a$, $b$ determine exactly one plane.

::hint
**What you need:** from the previous lesson, a line and a point not on it determine exactly one plane.

**Steps:**
1. Since $a\parallel b$, the lines $a$, $b$ are coplanar.
2. Take $A\in b$ and use $(A, a)$.

::solution
Let $a$ and $b$ be two distinct parallel lines. We must show that exactly one plane contains both $a$ and $b$, that is, we prove existence and uniqueness.

Existence. By definition, two parallel lines lie in one plane and have no common point. Since $a\parallel b$, there is a plane containing both $a$ and $b$.

Uniqueness. Take a point $A\in b$. Since $a$ and $b$ have no common point, $A\notin a$. Every plane containing $a$ and $b$ contains the line $a$ and the point $A$. By the axiom, through a line and a point not on it there passes exactly one plane, denoted $(A, a)$. Therefore every plane containing $a$ and $b$ coincides with $(A, a)$, so such a plane is unique.

So two distinct parallel lines $a$, $b$ determine exactly one plane.

**Answer.** Exactly one plane contains $a$ and $b$.
:::

:::exercise Challenge
Take a tetrahedron $ABCD$. Prove that the three segments joining the midpoints of the pairs of opposite edges $(AB, CD)$, $(AC, BD)$, $(AD, BC)$ pass through one point and are bisected by it.

::hint
**What you need:** the diagonals of a parallelogram bisect each other; use the parallelogram formed by midpoints of edges.

**Steps:**
1. Let $M$, $N$, $P$, $Q$ be the midpoints of $AB$, $BC$, $CD$, $DA$; $MNPQ$ is a parallelogram.
2. Use also the midpoint $R$ of $AC$ and $T$ of $BD$.

::solution
Let $M$, $N$, $P$, $Q$ be the midpoints of $AB$, $BC$, $CD$, $DA$. $MNPQ$ is a parallelogram, so its diagonals $MP$ and $NQ$ meet at the midpoint $O$ of each. $MP$ joins the midpoints of the pair $(AB, CD)$ and $NQ$ joins the midpoints of the pair $(BC, AD)$. Let $R$, $T$ be the midpoints of $AC$, $BD$. In triangle $ABC$, $MR\parallel BC$ and $MR=\dfrac{BC}{2}$; in triangle $DBC$, $TP\parallel BC$ and $TP=\dfrac{BC}{2}$. So $MRPT$ is a parallelogram, and its diagonals $MP$ and $RT$ meet at the midpoint of $MP$, which is $O$. Hence the three segments $MP$, $NQ$, $RT$ all pass through $O$ and are bisected by it.

**Answer.** The three segments are concurrent at $O$, the midpoint of each.
:::

## Mini test

:::quiz
::mc TH
Two lines $a$, $b$ in space have no common point. Which statement is true?
A. $a$ and $b$ are parallel.
B. $a$ and $b$ are skew.
C. $a$ and $b$ coincide.
D. $a$ and $b$ are parallel or skew.
::key D
Two lines with no common point are parallel if they are coplanar and skew if they are not coplanar. Options A and B are true in only one of the two cases.

::mc TH
In the cube $ABCD.A'B'C'D'$, which pair of lines is skew?
A. $AB$ and $CC'$.
B. $AB$ and $AD$.
C. $AB$ and $CD$.
D. $AB$ and $A'B'$.
::key A
$AB$ and $CC'$ are not coplanar and have no common point. Options C and D are parallel, and option B meets at $A$.

::mc NB
Three distinct planes meet in pairs along three distinct lines. Which statement is true?
A. The three lines are always concurrent.
B. The three lines are concurrent or pairwise parallel.
C. The three lines are always pairwise parallel.
D. The three lines are always skew.
::key B
This is the theorem on three lines of intersection.

::mc TH
Take a tetrahedron $ABCD$; $M$, $N$ are the midpoints of $AB$, $AC$. The line $MN$ is parallel to which of the following lines?
A. $BD$.
B. $CD$.
C. $BC$.
D. $AD$.
::key C
$MN$ is a midsegment of triangle $ABC$, so $MN\parallel BC$.

::tf TH VD TH TH
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Decide whether each statement is true or false.
a) The line of intersection of $(SAB)$ and $(SCD)$ is parallel to $AB$.
b) The line of intersection of $(SAD)$ and $(SBC)$ meets the line $AD$ at a point.
c) $AB$ and $SC$ are skew.
d) $SB$ and $AD$ are skew.
::key T F T T
a) True: $AB\parallel CD$, so the line of intersection passes through $S$ and is parallel to $AB$. b) False: the line of intersection is parallel to $AD$, so it does not meet $AD$. c) True: $AB$ and $SC$ are not coplanar. d) True: $SB$ and $AD$ are not coplanar and have no common point.

::sa VD
In a cuboid, how many other edges is each edge skew to?
::key 4
Each edge is skew to $4$ edges (for example $AB$ is skew to $CC'$, $DD'$, $B'C'$, $A'D'$).

::sa TH
How many pairs of skew edges does the tetrahedron $ABCD$ have?
::key 3
The pairs of opposite edges are skew: $(AB, CD)$, $(AC, BD)$, $(AD, BC)$, so there are $3$ pairs.
:::
