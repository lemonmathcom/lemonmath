---
title: Parallel planes
description: Learn the condition and properties of parallel planes, the intercept theorem in space, prisms and parallelepipeds, with proofs and calculations.
minutes: 25
---

:::goals
- State the definition of parallel planes and the condition for two planes to be parallel.
- Use the properties of parallel planes, especially: a third plane cutting two parallel planes meets them along two parallel lines.
- Use the intercept theorem in space to find lengths of segments.
- Recognise prisms and parallelepipeds and their properties.
:::

A bookshelf has three horizontal boards that are parallel to each other: the top board $(P)$, the middle board $(Q)$ and the bottom board $(R)$. Two straight sticks are propped up at a slant, each crossing all three boards. The middle board divides the first stick into two parts of length $36$ cm (above) and $24$ cm (below).

The second stick is propped at a different slant. If its upper part is $45$ cm long, how long is its lower part? The answer does not depend on how we prop the stick, and it gives us a beautiful theorem of space geometry.

## Parallel planes

:::definition Parallel planes
Two planes $(P)$ and $(Q)$ are called **parallel** (written $(P)\parallel(Q)$) if they have no common point.
:::

Two distinct planes either meet along a line (property 5 at the start of the chapter) or are parallel. How can we tell that two planes are parallel without checking every point? We use a line parallel to a plane from the previous lesson.

:::theorem The condition for two planes to be parallel
If a plane $(P)$ contains two intersecting lines $a$, $b$ that are both parallel to a plane $(Q)$, then $(P)\parallel(Q)$.
:::

Why is this true? Suppose $(P)$ and $(Q)$ meet along a line $c$. Since $a\subset(P)$ and $a\parallel(Q)$, the property from the previous lesson gives $a\parallel c$. Similarly $b\parallel c$. Then $a$ and $b$ are both parallel to $c$, so $a\parallel b$ (or they coincide), which contradicts the fact that $a$ and $b$ intersect. So $(P)$ and $(Q)$ do not meet, that is they are parallel.

:::theorem Properties of parallel planes
1. Through a point not on a given plane there is exactly one plane parallel to the given plane.
2. If $(P)\parallel(Q)$, then every line lying in $(P)$ is parallel to $(Q)$.
3. If two parallel planes are cut by a third plane, then the two lines of intersection are parallel to each other.
:::

Why is property 3 true? Let $(R)$ meet $(P)$ along $a$ and $(Q)$ along $b$. The lines $a$ and $b$ both lie in $(R)$ and have no common point (because $a\subset(P)$ and $b\subset(Q)$, while $(P)$ and $(Q)$ have no common point). Two coplanar lines with no common point are parallel.

## The intercept theorem in space

:::diagram Three parallel planes $(P)$, $(Q)$, $(R)$ cut off proportional segments on two transversals
alt: Three horizontal parallelograms stacked one above the other representing three parallel planes, and two slanting lines crossing all three planes at the points A, B, C and A', B', C'
point R1 0,0 ""
point R2 6,0 ""
point R3 8,1.5 ""
point R4 2,1.5 ""
polygon R1 R2 R3 R4
point Q1 0,2 ""
point Q2 6,2 ""
point Q3 8,3.5 ""
point Q4 2,3.5 ""
polygon Q1 Q2 Q3 Q4
point T1 0,5 ""
point T2 6,5 ""
point T3 8,6.5 ""
point T4 2,6.5 ""
polygon T1 T2 T3 T4
point A 3,5.6 above
point B 3.6,2.6 above-right
point C 4,0.6 below
point A2 5.5,5.9 above "A′"
point B2 5.98,2.9 above-right "B′"
point C2 6.3,0.9 below "C′"
segment A C
segment A2 C2
label -0.4,5.9 "(P)"
label -0.4,2.9 "(Q)"
label -0.4,0.9 "(R)"
:::

:::theorem The intercept theorem in space
Three pairwise parallel planes cut off proportional corresponding segments on any two transversals. That is, if two lines $d$, $d'$ meet three parallel planes $(P)$, $(Q)$, $(R)$ at $A$, $B$, $C$ and $A'$, $B'$, $C'$ respectively, then
$$\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}\quad\text{and}\quad\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}.$$
:::

Why is this true? Through $A$ draw the line $d''$ parallel to $d'$, meeting $(Q)$ and $(R)$ at $B''$, $C''$. The plane containing $d$ and $d''$ cuts the parallel planes $(Q)$, $(R)$ along $BB''$ and $CC''$, so $BB''\parallel CC''$ (property 3). In that plane, by the intercept theorem of plane geometry, $\dfrac{AB}{BC}=\dfrac{AB''}{B''C''}$. The plane containing $d'$ and $d''$ cuts $(P)$, $(Q)$, $(R)$ along $AA'$, $B''B'$, $C''C'$, which are parallel to each other, so $AA'B'B''$ and $B''B'C'C''$ are parallelograms, hence $AB''=A'B'$ and $B''C''=B'C'$. Putting this together, $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.

:::example The bookshelf
Three parallel boards divide a stick into two parts $AB=36$ cm and $BC=24$ cm. A second stick is divided by the same three boards into $A'B'=45$ cm and $B'C'$. Find $B'C'$.

**Understand.** The two sticks are two transversals of three parallel planes. We know $AB$, $BC$ and $A'B'$, and we want $B'C'$.

**Plan.** Use the intercept theorem in space: $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.

**Solve.** From $\dfrac{36}{24}=\dfrac{45}{B'C'}$ we get $B'C'=\dfrac{45\cdot24}{36}=30$ cm.

So the lower part of the second stick is $30$ cm long.

**Look back.** The ratios $AB:BC=36:24=3:2$ and $A'B':B'C'=45:30=3:2$ are equal, as the theorem says. The two sticks have different lengths ($60$ cm and $75$ cm), but the ratio of the division is the same.
:::

:::example Proving that two planes are parallel
Take a parallelepiped $ABCD.A'B'C'D'$. Prove that $(A'BD)\parallel(B'D'C)$.

**Solution.** The faces of a parallelepiped are parallelograms. The quadrilateral $A'BCD'$ is a parallelogram, so $A'B\parallel D'C$, with $D'C\subset(B'D'C)$ and $A'B\not\subset(B'D'C)$, so $A'B\parallel(B'D'C)$. The quadrilateral $BB'D'D$ is a parallelogram, so $BD\parallel B'D'$, with $B'D'\subset(B'D'C)$ and $BD\not\subset(B'D'C)$, so $BD\parallel(B'D'C)$.

The plane $(A'BD)$ contains the two lines $A'B$ and $BD$ meeting at $B$, both parallel to $(B'D'C)$. By the condition, $(A'BD)\parallel(B'D'C)$.
:::

## Prisms and parallelepipeds

Take two parallel planes $(P)$ and $(Q)$, a polygon $A_1\dots A_n$ in $(P)$, and parallel lines $A_iA_i'$ meeting $(Q)$ at $A_i'$. The figure made of the two polygons $A_1\dots A_n$, $A_1'\dots A_n'$ and the parallelograms $A_iA_{i+1}A_{i+1}'A_i'$ is called the **prism** $A_1\dots A_n.A_1'\dots A_n'$. The two polygons are the **two bases** (equal, lying in two parallel planes), the parallelograms are the **lateral faces** and the segments $A_iA_i'$ are the **lateral edges** (parallel and equal). A prism whose base has $n$ sides has $2n$ vertices, $3n$ edges and $n+2$ faces. A **parallelepiped** is a prism whose base is a parallelogram; it has $8$ vertices, $12$ edges, $6$ faces, and opposite faces are parallel.

:::example A plane parallel to the base of a prism
Take a triangular prism $ABC.A'B'C'$. A plane $(\alpha)$ parallel to $(ABC)$ meets the lateral edges $AA'$, $BB'$, $CC'$ at $M$, $N$, $P$ respectively. Prove that triangle $MNP$ is congruent to triangle $ABC$.

**Solution.** The plane $(AA'B'B)$ cuts the two parallel planes $(\alpha)$ and $(ABC)$ along $MN$ and $AB$, so $MN\parallel AB$. Also $AM\parallel BN$ (they lie on parallel lateral edges). The quadrilateral $ABNM$ has both pairs of opposite sides parallel, so it is a parallelogram, and $MN=AB$. Similarly $NP=BC$ and $PM=CA$.

So triangle $MNP$ has its three sides equal to the three sides of triangle $ABC$, hence it is congruent to triangle $ABC$.
:::

:::example Counting the parts of a prism
How many vertices, edges and faces does a prism with a pentagonal base have? How many pairs of parallel faces does a parallelepiped have?

**Solution.** For $n=5$: $2n=10$ vertices, $3n=15$ edges, $n+2=7$ faces ($5$ lateral faces and $2$ bases). A parallelepiped has $6$ faces forming pairs of parallel opposite faces: $\dfrac62=3$ pairs.

So a pentagonal prism has $10$ vertices, $15$ edges, $7$ faces; a parallelepiped has $3$ pairs of parallel faces.
:::

**Connections.** This lesson combines parallel lines and a line parallel to a plane to talk about parallel planes. The intercept theorem in space is the three-dimensional version of the familiar intercept theorem in a plane. The next lesson looks at parallel projection, where the ratio of segments on one line is preserved, which also relies on parallel planes.

:::warning Common mistakes
- **Thinking that two lines parallel to $(Q)$ are enough.** Wrong: $(P)$ contains two lines $a\parallel b$ both parallel to $(Q)$, so $(P)\parallel(Q)$. Why it is wrong: two planes that meet along a line $c$ can contain two parallel lines $a$, $b$ both parallel to $c$. Right: the two lines must intersect.
- **Writing the ratio the wrong way round in the intercept theorem.** Wrong: $\dfrac{AB}{BC}=\dfrac{B'C'}{A'B'}$. Why it is wrong: for $AB=36$, $BC=24$, $A'B'=45$, $B'C'=30$ we have $\dfrac{36}{24}\ne\dfrac{30}{45}$. Right: corresponding segments in the same order, $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.
- **Thinking that many planes through a point outside a plane are parallel to it.** Wrong: through $A\notin(Q)$ there are infinitely many planes parallel to $(Q)$. Why it is wrong: there is exactly one such plane (property 1). Right: only one.
- **Thinking that the lines of intersection of a third plane with two parallel planes can be skew.** Wrong: $a=(R)\cap(P)$ and $b=(R)\cap(Q)$ are skew. Why it is wrong: $a$ and $b$ both lie in $(R)$, so they are coplanar. Right: $a\parallel b$.
:::

## Key terms

:::terms
- parallel planes | hai mặt phẳng song song
- transversal | cát tuyến
- intercept theorem (in Vietnam: Thales' theorem) | định lí Thalès
- prism | hình lăng trụ
- parallelepiped | hình hộp
- base | mặt đáy
- lateral face | mặt bên
- lateral edge | cạnh bên
- line parallel to a plane | đường thẳng song song với mặt phẳng
:::

## Summary

- $(P)\parallel(Q)$ if and only if they have no common point.
- Condition: if $(P)$ contains two intersecting lines both parallel to $(Q)$, then $(P)\parallel(Q)$.
- Through a point not on a plane there is exactly one plane parallel to it; every line in $(P)$ is parallel to $(Q)$.
- A third plane cutting two parallel planes meets them along two parallel lines.
- Intercept theorem in space: three parallel planes cut off proportional segments on two transversals: $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.
- A prism whose base has $n$ sides has $2n$ vertices, $3n$ edges, $n+2$ faces; a parallelepiped has $8$ vertices, $12$ edges, $6$ faces.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Take a parallelepiped $ABCD.A'B'C'D'$. Prove that $(ABB'A')\parallel(CDD'C')$.

::hint
**What you need:** the condition for two planes to be parallel; the faces of a parallelepiped are parallelograms.

**Steps:**
1. Prove $AB\parallel(CDD'C')$ and $AA'\parallel(CDD'C')$.
2. $AB$ and $AA'$ meet at $A$.

::solution
$AB\parallel CD\subset(CDD'C')$, so $AB\parallel(CDD'C')$. $AA'\parallel DD'\subset(CDD'C')$, so $AA'\parallel(CDD'C')$. The plane $(ABB'A')$ contains the two intersecting lines $AB$, $AA'$ both parallel to $(CDD'C')$, so $(ABB'A')\parallel(CDD'C')$.

**Answer.** $(ABB'A')\parallel(CDD'C')$.
:::

:::exercise
Take a parallelepiped $ABCD.A'B'C'D'$. Prove that $(AB'D')\parallel(C'BD)$.

::hint
**What you need:** find two intersecting lines in $(AB'D')$ parallel to two lines in $(C'BD)$.

**Steps:**
1. $AB'\parallel DC'$ and $AD'\parallel BC'$.
2. Apply the condition.

::solution
$AB'C'D$ is a parallelogram, so $AB'\parallel DC'$, with $DC'\subset(C'BD)$, so $AB'\parallel(C'BD)$. $AD'C'B$ is a parallelogram, so $AD'\parallel BC'$, with $BC'\subset(C'BD)$, so $AD'\parallel(C'BD)$. The plane $(AB'D')$ contains $AB'$ and $AD'$ meeting at $A$, both parallel to $(C'BD)$.

**Answer.** $(AB'D')\parallel(C'BD)$.
:::

:::exercise
Three parallel planes meet two transversals $d$, $d'$ at $A$, $B$, $C$ and $A'$, $B'$, $C'$. Given $AB=3$, $BC=5$ and $A'C'=24$, find $A'B'$ and $B'C'$.

::hint
**What you need:** $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$ with $AC=AB+BC$.

**Steps:**
1. Find $AC$.
2. Find $A'B'$, then $B'C'=A'C'-A'B'$.

::solution
$AC=3+5=8$. From $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$ we get $A'B'=\dfrac{3}{8}\cdot24=9$, so $B'C'=24-9=15$.

**Answer.** $A'B'=9$, $B'C'=15$.
:::

:::exercise
How many vertices, edges and faces does a prism whose base has $12$ sides have?

::hint
**What you need:** a prism with an $n$-sided base has $2n$ vertices, $3n$ edges, $n+2$ faces.

**Steps:**
1. Substitute $n=12$.

::solution
For $n=12$: $2n=24$ vertices, $3n=36$ edges, $n+2=14$ faces.

**Answer.** $24$ vertices, $36$ edges, $14$ faces.
:::

:::exercise
Suppose three parallel boards of a bookshelf divide a stick $1.2$ m long into two parts in the ratio $3:5$. Another stick $2.4$ m long is also cut by the same three boards. Find the parts of both sticks.

::hint
**What you need:** by the intercept theorem in space, both sticks are divided in the same ratio.

**Steps:**
1. Divide $1.2$ m in the ratio $3:5$.
2. Divide $2.4$ m in the same ratio.

::solution
The total number of parts is $3+5=8$. The $1.2$ m stick: upper part $\dfrac38\cdot1.2=0.45$ m and lower part $0.75$ m. The $2.4$ m stick: upper part $\dfrac38\cdot2.4=0.9$ m and lower part $1.5$ m.

**Answer.** The $1.2$ m stick: $0.45$ m and $0.75$ m; the $2.4$ m stick: $0.9$ m and $1.5$ m.
:::

:::exercise
Take a cuboid $ABCD.A'B'C'D'$. Decide whether each statement is true or false.

a) $(ABCD)\parallel(A'B'C'D')$.

b) Each face of the cuboid meets exactly $4$ of the other faces.

c) The cuboid has $8$ edges.

d) $AA'\parallel(CDD'C')$.

::hint
**What you need:** opposite faces of a cuboid are parallel; each face is parallel to one face and meets four faces.

**Steps:**
1. Count the edges of the cuboid.
2. d) $AA'\parallel DD'\subset(CDD'C')$.

::solution
a) **True**: opposite faces are parallel.

b) **True**: each face is parallel to its opposite face and meets the $4$ adjacent faces.

c) **False**: a cuboid has $12$ edges.

d) **True**: $AA'\parallel DD'\subset(CDD'C')$ and $AA'\not\subset(CDD'C')$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise Revision
Using the definition of a line parallel to a plane from the previous lesson, prove that if $(P)\parallel(Q)$ and $d\subset(P)$, then $d\parallel(Q)$.

::hint
**What you need:** $d\parallel(Q)$ means that $d$ and $(Q)$ have no common point.

**Steps:**
1. Every point of $d$ lies in $(P)$.
2. $(P)$ and $(Q)$ have no common point.

::solution
Every point of $d$ lies in $(P)$, and $(P)$ and $(Q)$ have no common point, so no point of $d$ lies in $(Q)$. So $d$ and $(Q)$ have no common point, that is $d\parallel(Q)$.

**Answer.** $d\parallel(Q)$.
:::

:::exercise Challenge
Take a pyramid $S.ABC$. A plane $(\alpha)$ parallel to $(ABC)$ meets $SA$, $SB$, $SC$ at $A_1$, $B_1$, $C_1$ respectively. Prove that $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}=\dfrac{A_1B_1}{AB}$.

::hint
**What you need:** a third plane cutting two parallel planes meets them along two parallel lines; the intercept theorem in a plane.

**Steps:**
1. $(SAB)\cap(\alpha)=A_1B_1$ is parallel to $AB$.
2. Do the same with $(SBC)$ and $(SAC)$.

::solution
The plane $(SAB)$ cuts the parallel planes $(\alpha)$ and $(ABC)$ along $A_1B_1$ and $AB$, so $A_1B_1\parallel AB$. By the intercept theorem in triangle $SAB$, $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{A_1B_1}{AB}$. Similarly, with the plane $(SBC)$ we have $B_1C_1\parallel BC$ and $\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}$. Combining these equalities gives the result.

**Answer.** $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}=\dfrac{A_1B_1}{AB}$.
:::

## Mini test

:::quiz
::mc
Two distinct planes are parallel when
A. they have exactly one common point.
B. they have a common line.
C. they have two common points.
D. they have no common point.
::key D
This is the definition. Option B describes two planes that meet.

::mc
How many planes parallel to $(P)$ pass through a point not on $(P)$?
A. Exactly one.
B. Two.
C. Infinitely many.
D. None.
::key A
This is the first property of parallel planes.

::mc
Three parallel planes cut off the segments $AB=3$, $BC=6$ on a transversal $d$ and $A'B'=4$ on a transversal $d'$. Then $B'C'$ equals
A. $2$.
B. $8$.
C. $12$.
D. $4.5$.
::key B
$\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$, so $B'C'=\dfrac{4\cdot6}{3}=8$. Option A writes the ratio the wrong way round.

::mc
How many faces does a prism with a pentagonal base have?
A. $5$.
B. $10$.
C. $7$.
D. $15$.
::key C
A prism with an $n$-sided base has $n+2=7$ faces. Option B is the number of vertices and option D is the number of edges.

::tf
Take a cuboid $ABCD.A'B'C'D'$. Decide whether each statement is true or false.
a) $(ABCD)\parallel(A'B'C'D')$.
b) Each face of the cuboid meets exactly $4$ other faces.
c) The cuboid has $8$ edges.
d) $AA'\parallel(CDD'C')$.
::key T T F T
a) True. b) True: each face is parallel to one face and meets the other $4$. c) False: a cuboid has $12$ edges. d) True: $AA'\parallel DD'\subset(CDD'C')$.

::sa
How many edges does a prism whose base has $8$ sides have?
::key 24
A prism with an $n$-sided base has $3n$ edges; for $n=8$ that is $24$.

::sa
Three parallel planes cut off $AB=4$, $AC=10$ on a transversal $d$ and $A'B'=6$ on a transversal $d'$. Find $A'C'$.
::key 15
$\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$, so $A'C'=\dfrac{6\cdot10}{4}=15$.
:::
