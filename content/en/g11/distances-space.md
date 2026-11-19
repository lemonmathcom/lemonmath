---
title: Distances in space
description: Find the distance from a point to a line and to a plane, between a line and a parallel plane, between parallel planes, and between two skew lines.
minutes: 30
---

:::goals
- Understand the distance from a point to a line and to a plane.
- Know the distance between a line and a parallel plane, and between two parallel planes.
- Find the distance between two skew lines by reducing it to a distance to a plane.
- Apply this to pyramids, cubes, cuboids and real-life problems.
:::

Suppose that in a cuboid-shaped room a pipe runs vertically along one corner, while a cable is stretched along a diagonal of the floor (assumed figures). The two never meet and are not parallel. What is the shortest distance between them? To answer, we need the idea of distance in space.

## Exploration: which point of a line is nearest?

In a plane, let $\Delta$ be the horizontal axis and $M(0, 3)$ a point. For a point $X(t, 0)$ on $\Delta$, the length is $MX=\sqrt{9+t^2}$.

| $t$ | $0$ | $1$ | $2$ | $4$ |
|---|---|---|---|---|
| $MX$ | $3$ | $\sqrt{10}\approx3.16$ | $\sqrt{13}\approx3.61$ | $5$ |

The length $MX$ is smallest, equal to $3$, when $X$ is the foot $H$ of the perpendicular from $M$ to $\Delta$. The same is true in space: the shortest distance is measured in the perpendicular direction.

## Distance from a point

:::definition Distance from a point to a line and to a plane
- The **distance from a point $M$ to a line $\Delta$** is the length of segment $MH$, where $H$ is the orthogonal projection of $M$ onto $\Delta$. We write $d(M,\Delta)$.
- The **distance from a point $M$ to a plane $(P)$** is the length of segment $MH$, where $H$ is the orthogonal projection of $M$ onto $(P)$. We write $d(M,(P))$.
:::

**Why is $MH$ the shortest?** For any point $X$ of $(P)$ other than $H$, triangle $MHX$ is right-angled at $H$, so $MX^2=MH^2+HX^2>MH^2$, hence $MX>MH$. The argument for a line is the same.

If $M$ lies on the line or plane, the distance is $0$.

## Distances between figures

:::theorem Distance between a line and a parallel plane, and between two parallel planes
- If $\Delta\parallel(P)$, every point of $\Delta$ is at the same distance from $(P)$. This is the **distance between $\Delta$ and $(P)$**: $d(\Delta,(P))=d(M,(P))$ for any point $M$ of $\Delta$.
- If $(P)\parallel(Q)$, every point of $(P)$ is at the same distance from $(Q)$, called the **distance between the two planes**: $d((P),(Q))=d(M,(Q))$ for $M\in(P)$.
:::

:::definition Distance between two skew lines
Let $a$ and $b$ be skew lines. Let $(Q)$ be the plane containing $b$ and parallel to $a$. The **distance between $a$ and $b$** equals the distance between $a$ and $(Q)$, written $d(a,b)$.
:::

The distance between two skew lines also equals the length of their common perpendicular segment, and it is the smallest distance between a point of $a$ and a point of $b$.

:::diagram The distance from $A$ to the plane $(SBC)$
alt: Pyramid S.ABCD with SA perpendicular to the base; point H lies on SB with AH perpendicular to SB, and segment AH is the distance from A to the plane SBC
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
point H 2.1,2.0 above
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment A H dashed
right S A B
right A H S
:::

## Examples

First, the distance from a point to a line.

:::example Distance from a point to a line
The pyramid $S.ABCD$ has a square base $ABCD$ of side $a$, $SA\perp(ABCD)$ and $SA=a$. Find the distance from $A$ to the line $SC$.

**Solution.** Since $SA\perp(ABCD)$, $SA\perp AC$. We have $AC=a\sqrt2$ and $SC=\sqrt{SA^2+AC^2}=a\sqrt3$.

Let $K$ be the foot of the perpendicular from $A$ to $SC$. In triangle $SAC$, right-angled at $A$, compute the area in two ways: $\dfrac12 AK\cdot SC=\dfrac12SA\cdot AC$. Hence
$$AK=\frac{SA\cdot AC}{SC}=\frac{a\cdot a\sqrt2}{a\sqrt3}=\frac{a\sqrt6}{3}.$$

So $d(A,SC)=\dfrac{a\sqrt6}{3}$.
:::

Next, the distance from a point to a plane.

:::example Distance from the vertex of a right tetrahedron
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and $OA=OB=OC=a$. Find $d(O,(ABC))$.

**Solution.** Let $M$ be the midpoint of $BC$. Since $OA\perp(OBC)$, $OA\perp BC$; triangle $OBC$ is right isosceles at $O$, so $OM\perp BC$. The lines $OA$, $OM$ intersect at $O$ in $(OAM)$, so $BC\perp(OAM)$.

In the plane $(OAM)$ draw $OH\perp AM$. Since $BC\perp(OAM)$, $BC\perp OH$. The lines $AM$, $BC$ intersect at $M$ in $(ABC)$, so $OH\perp(ABC)$, that is $OH=d(O,(ABC))$.

Triangle $OAM$ is right-angled at $O$ with $OA=a$ and $OM=\dfrac{a\sqrt2}{2}$, so
$$\frac1{OH^2}=\frac1{OA^2}+\frac1{OM^2}=\frac1{a^2}+\frac2{a^2}=\frac3{a^2}\Rightarrow OH=\frac{a}{\sqrt3}=\frac{a\sqrt3}{3}.$$

So $d(O,(ABC))=\dfrac{a\sqrt3}{3}$.
:::

Now the distance to a lateral face of a pyramid.

:::example Distance from the foot of the height to a lateral face
The pyramid $S.ABCD$ has a square base $ABCD$ of side $a$, $SA\perp(ABCD)$ and $SA=a$. Find $d(A,(SBC))$.

**Solution.** We have $BC\perp AB$ and $BC\perp SA$, so $BC\perp(SAB)$. In $(SAB)$ draw $AH\perp SB$ at $H$. Since $BC\perp(SAB)$, $BC\perp AH$. The lines $SB$, $BC$ intersect at $B$ in $(SBC)$, so $AH\perp(SBC)$, hence $AH=d(A,(SBC))$.

Triangle $SAB$ is right-angled at $A$ with $SA=AB=a$, so $SB=a\sqrt2$ and
$$AH=\frac{SA\cdot AB}{SB}=\frac{a\cdot a}{a\sqrt2}=\frac{a\sqrt2}{2}.$$

So $d(A,(SBC))=\dfrac{a\sqrt2}{2}$.
:::

Finally, the distance between two skew lines.

:::example Distance between two skew lines in a cube
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance between the lines $AA'$ and $BD$.

**Solution.** The lines $AA'$ and $BD$ are skew. The plane $(BDD'B')$ contains $BD$ and is parallel to $AA'$ (since $AA'\parallel BB'$ and $BB'\subset(BDD'B')$). Therefore
$$d(AA',BD)=d(AA',(BDD'B'))=d(A,(BDD'B')).$$

Let $O$ be the centre of the base $ABCD$. We have $AO\perp BD$ and $AO\perp BB'$ (since $BB'\perp(ABCD)$). The lines $BD$, $BB'$ intersect in $(BDD'B')$, so $AO\perp(BDD'B')$. Thus $d(A,(BDD'B'))=AO=\dfrac{a\sqrt2}{2}$.

So $d(AA',BD)=\dfrac{a\sqrt2}{2}$.
:::

Now we return to the pipe and cable from the start, in four steps.

:::example Application: the distance between a pipe and a cable
Suppose a room is a cuboid $ABCD.A'B'C'D'$ whose floor $ABCD$ has $AB=6$ m and $AD=4$ m, and whose height is $AA'=3$ m (assumed figures). A pipe runs along the vertical edge $AA'$ and a cable is stretched along the floor diagonal $BD$. Find the shortest distance between the pipe and the cable, to the nearest tenth of a metre.

**Solution.**

*Understand.* We need $d(AA',BD)$ for two skew lines.

*Plan.* As in the cube, the plane $(BDD'B')$ contains $BD$ and is parallel to $AA'$, so $d(AA',BD)=d(A,(BDD'B'))$. The foot of the perpendicular from $A$ lies on $BD$ in the floor, so this distance equals $d(A,BD)$.

*Solve.* In triangle $ABD$, right-angled at $A$, with $AB=6$ and $AD=4$, we get $BD=\sqrt{36+16}=\sqrt{52}$. Draw $AK\perp BD$; then
$$AK=\frac{AB\cdot AD}{BD}=\frac{24}{\sqrt{52}}\approx3.3.$$

So the shortest distance between the pipe and the cable is about $3.3$ m.

*Look back.* Is the result reasonable? The distance must be less than both $AB=6$ and $AD=4$, because $AK$ is the altitude to the hypotenuse and is shorter than both legs; $3.3<4$ is reasonable. The height of the room, $AA'=3$ m, does not affect the result, because the pipe is vertical and the cable horizontal, so the distance is measured in the floor.
:::

:::warning Common mistakes
- **Taking the distance to any point of the line.** Wrong: $d(M,\Delta)=MX$ for an arbitrary point $X$ of $\Delta$. Why it is wrong: only the foot of the perpendicular gives the shortest length. Right: $d(M,\Delta)=MH$ with $MH\perp\Delta$.
- **Forgetting to prove the segment is perpendicular to the plane.** Wrong: draw $AH\perp SB$ and conclude at once that $AH=d(A,(SBC))$. Why it is wrong: $AH$ must be perpendicular to the whole plane $(SBC)$, that is, to two intersecting lines of it. Right: also show $AH\perp BC$.
- **Measuring the distance between skew lines by a segment joining arbitrary points.** Wrong: take $AB'$, or any segment joining two points, as the distance. Why it is wrong: such a segment is usually longer than the shortest distance. Right: reduce to the distance from a point to the plane containing one line and parallel to the other.
- **Thinking a line parallel to a plane is at distance $0$.** Wrong: $\Delta\parallel(P)$, so $d(\Delta,(P))=0$. Why it is wrong: a parallel line has no point in common with the plane. Right: the distance equals the distance from any point of $\Delta$ to $(P)$, and is greater than $0$.
:::

**Connections.** This lesson uses [a line perpendicular to a plane](lesson:line-perpendicular-plane) to construct feet of perpendiculars, and [orthogonal projection](lesson:orthogonal-projection-angle) to reduce problems to right triangles. The lesson on [volumes](lesson:volumes) uses the height, which is the distance from the apex to the base. In practice, builders and engineers use the shortest distance between pipes and cables to lay out services so they do not collide.

## Terms

:::terms
- khoảng cách từ điểm đến đường thẳng | distance from a point to a line
- khoảng cách từ điểm đến mặt phẳng | distance from a point to a plane
- khoảng cách giữa hai mặt phẳng song song | distance between two parallel planes
- khoảng cách giữa hai đường thẳng chéo nhau | distance between two skew lines
- đoạn vuông góc chung | common perpendicular
- chân đường vuông góc | foot of the perpendicular
- đường cao | height
- hình hộp chữ nhật | cuboid
- hình chóp | pyramid
- song song | parallel
:::

## Summary

- $d(M,\Delta)=MH$ and $d(M,(P))=MH$, where $H$ is the orthogonal projection of $M$ onto $\Delta$ or $(P)$; this is the shortest distance.
- $d(\Delta,(P))=d(M,(P))$ for $M\in\Delta$ when $\Delta\parallel(P)$; $d((P),(Q))=d(M,(Q))$ for $M\in(P)$ when $(P)\parallel(Q)$.
- For skew lines $a$, $b$: $d(a,b)=d(a,(Q))$ where $(Q)\supset b$ and $(Q)\parallel a$.
- To find $d(A,(P))$, construct $AH\perp(P)$ by showing $AH$ is perpendicular to two intersecting lines of $(P)$, then compute in a right triangle.
- A useful formula in a right triangle: the altitude to the hypotenuse is $h=\dfrac{xy}{\sqrt{x^2+y^2}}$ for legs $x$, $y$.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
The pyramid $S.ABC$ has $SA\perp(ABC)$, triangle $ABC$ right-angled at $A$, $AB=15$, $AC=20$ and $SA=16$ (any unit). Find $d(A,BC)$ and $d(A,(SBC))$.

::hint
**Knowledge:** the altitude in a right triangle; draw $AH\perp SK$ where $K$ is the foot of the altitude from $A$ in triangle $ABC$.

**Hints on the steps:**
1. Find $BC$, then $AK$.
2. Show $BC\perp(SAK)$, draw $AH\perp SK$ and find $AH$.

::solution
$BC=\sqrt{225+400}=25$ and $AK=\dfrac{15\cdot20}{25}=12$. So $d(A,BC)=12$.

$BC\perp AK$ and $BC\perp SA$, so $BC\perp(SAK)$. Draw $AH\perp SK$; then $AH\perp BC$, so $AH\perp(SBC)$. Triangle $SAK$ is right-angled at $A$ with $SK=\sqrt{256+144}=20$, so $AH=\dfrac{16\cdot12}{20}=9.6$.

**Answer.** $d(A,BC)=12$; $d(A,(SBC))=9.6$.
:::

:::exercise
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance from $B$ to the plane $(ACC'A')$.

::hint
**Knowledge:** $BD\perp(ACC'A')$.

**Hints on the steps:**
1. Let $O$ be the centre of $ABCD$.
2. Show $BO\perp(ACC'A')$.

::solution
$BD\perp AC$ and $BD\perp AA'$, so $BD\perp(ACC'A')$, hence $BO\perp(ACC'A')$ where $O=AC\cap BD$. Therefore $d(B,(ACC'A'))=BO=\dfrac{a\sqrt2}{2}$.

**Answer.** $\dfrac{a\sqrt2}{2}$.
:::

:::exercise
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance between the line $BB'$ and the plane $(ACC'A')$.

::hint
**Knowledge:** $BB'\parallel CC'$, so $BB'\parallel(ACC'A')$.

**Hints on the steps:**
1. Choose the point $B$ on $BB'$.
2. Use the result of the previous exercise.

::solution
$BB'\parallel CC'\subset(ACC'A')$, so $BB'\parallel(ACC'A')$. Therefore $d(BB',(ACC'A'))=d(B,(ACC'A'))=\dfrac{a\sqrt2}{2}$.

**Answer.** $\dfrac{a\sqrt2}{2}$.
:::

:::exercise
Decide whether each statement is true or false.

a) The distance from a point $M$ to a plane $(P)$ is the length of the perpendicular segment from $M$ to $(P)$.

b) If $\Delta\parallel(P)$ then $d(\Delta,(P))=0$.

c) The distance between two parallel planes equals the distance from any point of one plane to the other.

d) The distance between two skew lines $a$, $b$ equals the distance between $a$ and any plane containing $b$.

::hint
**Knowledge:** the definitions of distance.

**Hints on the steps:**
1. Compare each statement with the definition.
2. For part d, note the plane must be parallel to $a$.

::solution
a) **True** by definition.

b) **False**: $\Delta$ is parallel to $(P)$, so they have no common point, and the distance is greater than $0$.

c) **True** by the theorem.

d) **False**: the plane must contain $b$ and be parallel to $a$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Suppose a room is a cuboid $ABCD.A'B'C'D'$ whose floor $ABCD$ has $AB=8$ m and $AD=6$ m, and whose height is $AA'=3$ m (assumed figures). A pipe runs along the vertical edge $AA'$ and a cable is stretched along the floor diagonal $BD$. Find the shortest distance between the pipe and the cable.

::hint
**Knowledge:** $d(AA',BD)=d(A,BD)$.

**Hints on the steps:**
1. Find $BD$.
2. Find the altitude to the hypotenuse in triangle $ABD$.

::solution
$BD=\sqrt{64+36}=10$. $d(AA',BD)=d(A,BD)=\dfrac{8\cdot6}{10}=4.8$.

**Answer.** $4.8$ m.
:::

:::exercise
Suppose a roof is shaped like a pyramid $S.ABCD$ whose base $ABCD$ is a square of side $6$ m and whose lateral edges are all $5$ m (assumed figures). Let $O$ be the centre of the base. Find the distance from $S$ to the plane $(ABCD)$ and the distance from $S$ to the line $BC$.

::hint
**Knowledge:** $SO\perp(ABCD)$; if $M$ is the midpoint of $BC$ then $SM\perp BC$.

**Hints on the steps:**
1. Find $SO$ in triangle $SOA$.
2. Find $SM$ in triangle $SOM$, right-angled at $O$, with $OM=3$.

::solution
$OA=3\sqrt2$, so $SO=\sqrt{25-18}=\sqrt7\approx2.6$. So $d(S,(ABCD))\approx2.6$ m.

Triangle $SBC$ is isosceles at $S$, so $SM\perp BC$, that is $d(S,BC)=SM$. We have $OM=3$ and $SM=\sqrt{SO^2+OM^2}=\sqrt{7+9}=4$.

**Answer.** $d(S,(ABCD))\approx2.6$ m; $d(S,BC)=4$ m.
:::

:::exercise
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance from $A'$ to the plane $(AB'D')$.

::hint
**Knowledge:** the tetrahedron $A'.AB'D'$ has three edges from $A'$ that are mutually perpendicular and equal to $a$.

**Hints on the steps:**
1. Recognise the right tetrahedron from the examples.
2. Apply the result.

::solution
The tetrahedron $A'.AB'D'$ has $A'A$, $A'B'$, $A'D'$ mutually perpendicular and equal to $a$, like the tetrahedron $OABC$ in the example. So $d(A',(AB'D'))=\dfrac{a\sqrt3}{3}$.

**Answer.** $\dfrac{a\sqrt3}{3}$.
:::

:::exercise
Revisit Pythagoras' theorem. In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance from $A$ to the line $CC'$ and to the line $BC'$.

::hint
**Knowledge:** $AC\perp CC'$ and $AB\perp BC'$.

**Hints on the steps:**
1. Find the foot of the perpendicular from $A$ to each line.
2. Find the lengths by Pythagoras' theorem.

::solution
$CC'\perp(ABCD)$, so $CC'\perp AC$, hence $d(A,CC')=AC=a\sqrt2$.

$AB\perp(BCC'B')$, so $AB\perp BC'$, hence $d(A,BC')=AB=a$.

**Answer.** $a\sqrt2$ and $a$.
:::

:::exercise Challenge
In the cube $ABCD.A'B'C'D'$ of edge $a$, find the distance between the skew lines $AB'$ and $BC'$.

::hint
**Knowledge:** $AB'\parallel DC'$, so $AB'\parallel(BDC')$. The tetrahedron $C.BDC'$ has three edges from $C$ that are mutually perpendicular.

**Hints on the steps:**
1. Reduce to $d(A,(BDC'))$.
2. Use the midpoint $O$ of $AC$ to pass to $d(C,(BDC'))$.

::solution
$AB'\parallel DC'$ and $DC'\subset(BDC')$, so $AB'\parallel(BDC')$, while $BC'\subset(BDC')$. Therefore $d(AB',BC')=d(AB',(BDC'))=d(A,(BDC'))$.

Let $O$ be the midpoint of $AC$; $O$ lies on $BD$, so it lies in $(BDC')$. Since $O$ is the midpoint of $AC$, $d(A,(BDC'))=d(C,(BDC'))$. The tetrahedron $C.BDC'$ has $CB$, $CD$, $CC'$ mutually perpendicular and equal to $a$, so $d(C,(BDC'))=\dfrac{a\sqrt3}{3}$.

**Answer.** $\dfrac{a\sqrt3}{3}$.
:::

## Mini test

:::quiz
::mc NB
The distance from a point $M$ to a plane $(P)$ equals
A. the length $MN$ for any point $N$ of $(P)$.
B. the greatest length of a segment joining $M$ to a point of $(P)$.
C. the length $MH$, where $H$ is the orthogonal projection of $M$ onto $(P)$.
D. the length of a segment joining $M$ to a point of $(P)$ in the same plane.
::key C
This is the definition, and $MH$ is the shortest length. Options A and D depend on the point chosen, and B is wrong because there is no greatest length.

::mc VD
The pyramid $S.ABCD$ has a square base of side $a$, $SA\perp(ABCD)$ and $SA=a$. The distance from $A$ to $(SBC)$ is
A. $a$.
B. $\dfrac{a\sqrt3}{3}$.
C. $a\sqrt2$.
D. $\dfrac{a\sqrt2}{2}$.
::key D
$AH=\dfrac{SA\cdot AB}{SB}=\dfrac{a^2}{a\sqrt2}=\dfrac{a\sqrt2}{2}$. Option A is $SA$, B is the distance for a different right tetrahedron, and C is the diagonal of the base.

::mc VD
In the cube $ABCD.A'B'C'D'$ of edge $a$, the distance between $AA'$ and the plane $(BDD'B')$ is
A. $\dfrac{a\sqrt2}{2}$.
B. $a$.
C. $\dfrac{a}{2}$.
D. $a\sqrt2$.
::key A
$d(AA',(BDD'B'))=d(A,(BDD'B'))=AO=\dfrac{a\sqrt2}{2}$. Option B is the edge, C is half the edge, and D is the diagonal of a face.

::mc VD
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and equal to $a$. The distance from $O$ to $(ABC)$ is
A. $\dfrac{a\sqrt2}{2}$.
B. $\dfrac{a\sqrt3}{3}$.
C. $\dfrac{a}{2}$.
D. $a$.
::key B
$\dfrac1{OH^2}=\dfrac3{a^2}$, so $OH=\dfrac{a}{\sqrt3}=\dfrac{a\sqrt3}{3}$. Option A is $OM$, and C and D do not satisfy the relation.

::tf NB TH TH NB
Decide whether each statement is true or false:
a) The distance from a point $M$ to a line $\Delta$ is the length of the perpendicular segment from $M$ to $\Delta$.
b) If $(P)\parallel(Q)$, every point of $(P)$ is at the same distance from $(Q)$.
c) If $\Delta\parallel(P)$ then $d(\Delta,(P))=0$.
d) The distance between skew lines $a$, $b$ is the distance between $a$ and the plane containing $b$ and parallel to $a$.
::key T T F T
a) True by definition. b) True by the theorem. c) False: $\Delta$ has no common point with $(P)$, so the distance is greater than $0$. d) True by definition.

::sa VDC
Suppose a room is a cuboid with a floor $8$ m $\times6$ m and a height of $3$ m. A pipe runs vertically along one corner and a cable is stretched along the floor diagonal that does not pass through that corner. Find the shortest distance between the pipe and the cable, in metres.
::key 4.8
The distance is the altitude to the hypotenuse of the right triangle with legs $8$ and $6$: $\dfrac{8\cdot6}{10}=4.8$.

::sa VD
The tetrahedron $OABC$ has $OA$, $OB$, $OC$ mutually perpendicular and all equal to $6$. Find the distance from $O$ to $(ABC)$, to the nearest tenth.
::key 3.5
$d=\dfrac{6}{\sqrt3}=2\sqrt3\approx3.5$.
:::
