---
title: Quadrilaterals
description: Recognise quadrilaterals, convex quadrilaterals and diagonals; prove that the angles of a quadrilateral add up to 360° and use it to find angles.
minutes: 30
---

:::goals
- Recognise a quadrilateral, its vertices, sides, angles, diagonals, adjacent sides, opposite sides, and a convex quadrilateral.
- State and prove the theorem on the sum of the angles of a quadrilateral.
- Find the angles of a quadrilateral when the other angles, or relations between the angles, are known.
- Use the angle sum of a quadrilateral to solve real problems.
:::

Suppose the owner of a garden shaped like a quadrilateral measures the angles at three corners of the garden: $80^\circ$, $95^\circ$ and $110^\circ$. The fourth angle is hidden behind a clump of trees and cannot be measured. Can we still work it out?

For a triangle, we know the three angles always add up to $180^\circ$. This lesson shows that a quadrilateral also has a fixed angle sum, and with it we can find the fourth angle without measuring.

## Quadrilaterals

### Explore: built from two triangles

We draw a quadrilateral $ABCD$ and join the two vertices $A$ and $C$. The segment $AC$ cuts the quadrilateral into two triangles, $ABC$ and $ACD$. Each triangle has angle sum $180^\circ$. Put together, the two triangles give $2\cdot180^\circ=360^\circ$. We shall see whether this is the sum of the four angles of the quadrilateral.

:::definition Quadrilateral
A **quadrilateral** $ABCD$ is a figure made of four segments $AB$, $BC$, $CD$, $DA$, in which no two segments lie on the same line and the segments meet only at their endpoints.

The four points $A$, $B$, $C$, $D$ are the **vertices**; the four segments are the **sides**. Two vertices on the same side are **adjacent**; two vertices that are not adjacent are **opposite**. A segment joining two opposite vertices is a **diagonal**.
:::

Two sides with a common vertex are **adjacent sides**; two sides with no common vertex are **opposite sides**. The quadrilateral $ABCD$ has four angles $\angle A$, $\angle B$, $\angle C$, $\angle D$.

:::diagram Convex quadrilateral $ABCD$ with diagonals $AC$ and $BD$
alt: Quadrilateral ABCD with the two diagonals AC and BD crossing inside the quadrilateral
point A 0,0 below-left
point B 6,0 below-right
point C 5,4 above-right
point D 1,3 above-left
polygon A B C D
segment A C
segment B D
:::

In the figure, $AB$ and $BC$ are adjacent sides; $AB$ and $CD$ are opposite sides. The vertices $A$ and $C$ are opposite, and so are $B$ and $D$. The two diagonals are $AC$ and $BD$.

:::definition Convex quadrilateral
A **convex quadrilateral** is a quadrilateral that always lies on one side of the line containing any of its sides.
:::

:::diagram Non-convex quadrilateral $MNPQ$
alt: Quadrilateral MNPQ whose vertex P is pushed in towards the inside, so it is not convex
point M 0,0 below-left
point N 6,0 below-right
point P 3,1.5 below
point Q 1,4 above
polygon M N P Q
:::

The quadrilateral $MNPQ$ in the second figure is not convex, because the vertex $P$ is pushed inwards. From now on, "quadrilateral" means a convex quadrilateral.

## The sum of the angles of a quadrilateral

:::theorem Angle sum of a quadrilateral
The angles of a quadrilateral add up to $360^\circ$:
$$\angle A+\angle B+\angle C+\angle D=360^\circ.$$
:::

Why? We draw the diagonal $AC$ to cut the quadrilateral into the triangles $ABC$ and $ACD$. Since the quadrilateral is convex, the ray $AC$ lies inside the angle $\angle A$ and the ray $CA$ lies inside the angle $\angle C$, so $\angle A=\angle A_1+\angle A_2$ and $\angle C=\angle C_1+\angle C_2$.

:::diagram The diagonal $AC$ cuts the quadrilateral into two triangles
alt: Quadrilateral ABCD with the diagonal AC; the angle at A is split into angles 1 and 2, and the angle at C is split into angles 3 and 4
point A 0,0 below-left
point B 6,0 below-right
point C 5,4 above-right
point D 1,3 above-left
polygon A B C D
segment A C
angle B A C "1"
angle C A D "2"
angle A C B "3"
angle D C A "4"
:::

The angle sum of triangle $ABC$ is $\angle A_1+\angle B+\angle C_1=180^\circ$ and that of triangle $ACD$ is $\angle A_2+\angle D+\angle C_2=180^\circ$. Adding the two equalities, we get
$$(\angle A_1+\angle A_2)+\angle B+(\angle C_1+\angle C_2)+\angle D=360^\circ,$$
that is, $\angle A+\angle B+\angle C+\angle D=360^\circ$.

## Examples

We begin by naming the parts of a quadrilateral.

:::example Naming parts
Let $ABCD$ be a quadrilateral. State:

a) the sides adjacent to the side $AB$.

b) the side opposite to the side $AB$.

c) the vertex opposite to the vertex $B$.

d) the diagonals.

**Solution.** a) The sides sharing a vertex with $AB$ are $BC$ (common vertex $B$) and $DA$ (common vertex $A$).

b) The side with no vertex in common with $AB$ is $CD$.

c) The vertex that is not adjacent to $B$ is $D$.

d) The diagonals join opposite vertices: $AC$ and $BD$.

So a) $BC$ and $DA$; b) $CD$; c) $D$; d) $AC$ and $BD$.
:::

Next we use the angle sum to find an angle.

:::example Finding the remaining angle
The quadrilateral $ABCD$ has $\angle A=100^\circ$, $\angle B=80^\circ$, $\angle C=90^\circ$. Find $\angle D$.

**Solution.** We have $\angle A+\angle B+\angle C+\angle D=360^\circ$. Hence
$$\angle D=360^\circ-(100^\circ+80^\circ+90^\circ)=360^\circ-270^\circ=90^\circ.$$
So $\angle D=90^\circ$.
:::

Now the angles are given in a ratio.

:::example Angles in a ratio
The four angles of a quadrilateral are in the ratio $1:2:3:4$. Find each angle.

**Solution.** Let the angles be $k$, $2k$, $3k$, $4k$ (in degrees). The four angles add up to $360^\circ$, so
$$k+2k+3k+4k=360^\circ,\quad\text{that is}\quad 10k=360^\circ.$$
It follows that $k=36^\circ$. Hence the angles are $36^\circ$, $72^\circ$, $108^\circ$, $144^\circ$.

So the four angles are $36^\circ$, $72^\circ$, $108^\circ$ and $144^\circ$.

**Remark.** Check: $36+72+108+144=360$.
:::

Next, a problem with an unknown.

:::example Angles containing an unknown
The quadrilateral $ABCD$ has $\angle A=x$, $\angle B=x+30^\circ$, $\angle C=x+60^\circ$, $\angle D=x+90^\circ$. Find $x$ and the four angles.

**Solution.** The four angles add up to $360^\circ$, so
$$x+(x+30^\circ)+(x+60^\circ)+(x+90^\circ)=360^\circ,\quad\text{that is}\quad 4x+180^\circ=360^\circ.$$
It follows that $4x=180^\circ$, so $x=45^\circ$. Hence $\angle A=45^\circ$, $\angle B=75^\circ$, $\angle C=105^\circ$, $\angle D=135^\circ$.

So $x=45^\circ$ and the four angles are $45^\circ$, $75^\circ$, $105^\circ$, $135^\circ$.
:::

Finally, a short proof.

:::example Opposite angles that add to $180^\circ$
The quadrilateral $ABCD$ has $\angle A=\angle C=90^\circ$. Prove that $\angle B+\angle D=180^\circ$.

**Solution.** We have $\angle A+\angle B+\angle C+\angle D=360^\circ$. Substituting $\angle A=\angle C=90^\circ$:
$$90^\circ+\angle B+90^\circ+\angle D=360^\circ,$$
so $\angle B+\angle D=360^\circ-180^\circ=180^\circ$.

So $\angle B+\angle D=180^\circ$.
:::

Now we return to the garden from the start.

:::example The garden with a hidden corner (Application)
Suppose a garden is a quadrilateral $ABCD$ with $\angle A=80^\circ$, $\angle B=95^\circ$, $\angle C=110^\circ$. Find $\angle D$, then check the result by measuring more angles at the diagonal $AC$.

**Solution.**

*Understand the problem.* Three angles of the quadrilateral are known, and we need the fourth.

*Plan.* Use the fact that the four angles add up to $360^\circ$. To check, we split the quadrilateral into two triangles with the diagonal $AC$.

*Carry out the plan.* We have
$$\angle D=360^\circ-(80^\circ+95^\circ+110^\circ)=360^\circ-285^\circ=75^\circ.$$
So $\angle D=75^\circ$.

*Look back.* Suppose we also measure $\angle BAC=45^\circ$ and $\angle BCA=40^\circ$. In triangle $ABC$: $45^\circ+95^\circ+40^\circ=180^\circ$, which is consistent. Then $\angle CAD=80^\circ-45^\circ=35^\circ$ and $\angle ACD=110^\circ-40^\circ=70^\circ$. In triangle $ACD$ we get $\angle D=180^\circ-35^\circ-70^\circ=75^\circ$, the same as before.
:::

:::warning Common mistakes
- **Confusing the angle sum of a quadrilateral with that of a triangle.** Wrong: $\angle A+\angle B+\angle C+\angle D=180^\circ$. Why it is wrong: a quadrilateral is made of two triangles, so the sum is doubled. Right: $\angle A+\angle B+\angle C+\angle D=360^\circ$.
- **Naming a quadrilateral without following the order of the vertices.** Wrong: calling the quadrilateral with sides $AB$, $BC$, $CD$, $DA$ by the name $ACBD$. Why it is wrong: the name must list consecutive vertices along the sides. Right: quadrilateral $ABCD$ (or $BCDA$, $DCBA$, ...).
- **Treating a side as a diagonal.** Wrong: $AB$ is a diagonal of the quadrilateral $ABCD$. Why it is wrong: $A$ and $B$ are adjacent vertices. Right: a diagonal joins opposite vertices, so the diagonals are $AC$ and $BD$.
- **Dividing $360^\circ$ by the number of angles when the angles are in a ratio.** Wrong: the angles are in the ratio $1:2:3:4$, so each part is $360^\circ\div4=90^\circ$. Why it is wrong: we must divide by the sum of the parts, $1+2+3+4=10$. Right: each part is $360^\circ\div10=36^\circ$.
:::

**Connections.** Quadrilaterals continue the triangles you have already studied: their angle sum comes from the angle sum of two triangles. In the next lessons we study special quadrilaterals such as isosceles trapeziums, parallelograms, rectangles, rhombuses and squares, and the sum $360^\circ$ is always the starting point for finding angles.

## Key terms

:::terms
- quadrilateral | tứ giác
- vertex | đỉnh
- side | cạnh
- adjacent sides | cạnh kề
- opposite sides | cạnh đối
- opposite vertices | đỉnh đối
- diagonal | đường chéo
- convex quadrilateral | tứ giác lồi
- angle sum | tổng các góc
:::

## Summary

- A quadrilateral $ABCD$ has four vertices, four sides, four angles and two diagonals $AC$, $BD$.
- Sides with a common vertex are adjacent; sides with no common vertex are opposite. A diagonal joins opposite vertices.
- A convex quadrilateral always lies on one side of the line containing any of its sides.
- The angles of a quadrilateral add up to $360^\circ$ (it splits into two triangles along a diagonal).
- When the angles are in the ratio $a:b:c:d$, divide $360^\circ$ by the sum $a+b+c+d$.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Let $MNPQ$ be a quadrilateral. State:

a) the vertices adjacent to the vertex $M$.

b) the vertex opposite to the vertex $M$.

c) the sides adjacent to and the side opposite to the side $MN$.

d) the diagonals.

::hint
**What you need:** adjacent vertices lie on the same side; a diagonal joins opposite vertices.

**Steps:**
1. List the sides $MN$, $NP$, $PQ$, $QM$.
2. Find the adjacent and opposite vertices, then the sides.

::solution
a) The vertices adjacent to $M$ are $N$ and $Q$.

b) The vertex opposite to $M$ is $P$.

c) The sides adjacent to $MN$ are $NP$ and $QM$; the side opposite to $MN$ is $PQ$.

d) The diagonals are $MP$ and $NQ$.

So a) $N$, $Q$; b) $P$; c) adjacent: $NP$, $QM$, opposite: $PQ$; d) $MP$, $NQ$.

**Answer.** a) $N$, $Q$. b) $P$. c) $NP$, $QM$; $PQ$. d) $MP$, $NQ$.
:::

:::exercise
Find the remaining angle of each quadrilateral:

a) The quadrilateral $ABCD$ has $\angle A=70^\circ$, $\angle B=110^\circ$, $\angle C=95^\circ$. Find $\angle D$.

b) The quadrilateral $MNPQ$ has $\angle M=\angle N=120^\circ$, $\angle P=50^\circ$. Find $\angle Q$.

::hint
**What you need:** the four angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Add the three known angles.
2. Subtract that sum from $360^\circ$.

::solution
a) $\angle D=360^\circ-(70^\circ+110^\circ+95^\circ)=360^\circ-275^\circ=85^\circ$.

b) $\angle Q=360^\circ-(120^\circ+120^\circ+50^\circ)=360^\circ-290^\circ=70^\circ$.

So a) $\angle D=85^\circ$; b) $\angle Q=70^\circ$.

**Answer.** a) $85^\circ$. b) $70^\circ$.
:::

:::exercise
The four angles of a quadrilateral are in the ratio $2:3:3:4$. Find each angle.

::hint
**What you need:** call the angles $2k$, $3k$, $3k$, $4k$; they add up to $360^\circ$.

**Steps:**
1. Write the equation $2k+3k+3k+4k=360^\circ$.
2. Find $k$, then each angle.

::solution
We have $2k+3k+3k+4k=12k=360^\circ$, so $k=30^\circ$. The angles are $60^\circ$, $90^\circ$, $90^\circ$, $120^\circ$.

So the four angles are $60^\circ$, $90^\circ$, $90^\circ$, $120^\circ$.

**Answer.** $60^\circ$; $90^\circ$; $90^\circ$; $120^\circ$.
:::

:::exercise
The quadrilateral $ABCD$ has $\angle A=2x$, $\angle B=3x-10^\circ$, $\angle C=x+40^\circ$, $\angle D=x-20^\circ$. Find $x$ and the four angles.

::hint
**What you need:** the four angles add up to $360^\circ$.

**Steps:**
1. Add the four expressions and set the sum equal to $360^\circ$.
2. Solve the equation for $x$.

::solution
We have $2x+(3x-10^\circ)+(x+40^\circ)+(x-20^\circ)=360^\circ$, that is, $7x+10^\circ=360^\circ$. It follows that $7x=350^\circ$ and $x=50^\circ$.

Hence $\angle A=100^\circ$, $\angle B=140^\circ$, $\angle C=90^\circ$, $\angle D=30^\circ$. (Check: $100+140+90+30=360$.)

So $x=50^\circ$ and the four angles are $100^\circ$, $140^\circ$, $90^\circ$, $30^\circ$.

**Answer.** $x=50^\circ$; $100^\circ$, $140^\circ$, $90^\circ$, $30^\circ$.
:::

:::exercise
The quadrilateral $ABCD$ has $\angle C=60^\circ$, $\angle D=90^\circ$ and $\angle A=\angle B$. Find $\angle A$ and $\angle B$.

::hint
**What you need:** $\angle A+\angle B=360^\circ-\angle C-\angle D$.

**Steps:**
1. Find $\angle A+\angle B$.
2. Halve it, since $\angle A=\angle B$.

::solution
We have $\angle A+\angle B=360^\circ-60^\circ-90^\circ=210^\circ$. Since $\angle A=\angle B$, each angle equals $210^\circ\div2=105^\circ$.

So $\angle A=\angle B=105^\circ$.

**Answer.** $\angle A=\angle B=105^\circ$.
:::

:::exercise
At each vertex of the quadrilateral $ABCD$ we take one exterior angle (the angle that forms a straight line with the angle of the quadrilateral). Prove that the four exterior angles add up to $360^\circ$.

::hint
**What you need:** the exterior angle at a vertex equals $180^\circ$ minus the interior angle at that vertex.

**Steps:**
1. Write the four exterior angles in terms of the four interior angles.
2. Add them and use the sum of the four interior angles.

::solution
The exterior angles at $A$, $B$, $C$, $D$ are $180^\circ-\angle A$, $180^\circ-\angle B$, $180^\circ-\angle C$, $180^\circ-\angle D$. Their sum is
$$4\cdot180^\circ-(\angle A+\angle B+\angle C+\angle D)=720^\circ-360^\circ=360^\circ.$$
So the four exterior angles of a quadrilateral add up to $360^\circ$.

**Answer.** The sum of the four exterior angles is $360^\circ$.
:::

:::exercise
Suppose a yard is a quadrilateral $ABCD$ with $\angle A=90^\circ$, $\angle B=90^\circ$ and $\angle C=105^\circ$ (from the plan). Find the angle $\angle D$ of the yard.

::hint
**What you need:** the four angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Add the three given angles.
2. Subtract that sum from $360^\circ$.

::solution
We have $\angle D=360^\circ-(90^\circ+90^\circ+105^\circ)=360^\circ-285^\circ=75^\circ$.

So $\angle D=75^\circ$.

**Answer.** $75^\circ$.
:::

:::exercise
Suppose a kite is a quadrilateral whose two side angles are both $105^\circ$ and whose top angle is $60^\circ$. Find the angle at the bottom.

::hint
**What you need:** the four angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Add the three known angles ($105^\circ$, $105^\circ$, $60^\circ$).
2. Subtract that sum from $360^\circ$.

::solution
The three known angles add up to $105^\circ+105^\circ+60^\circ=270^\circ$. The angle at the bottom is $360^\circ-270^\circ=90^\circ$.

So the angle at the bottom is $90^\circ$.

**Answer.** $90^\circ$.
:::

:::exercise
Recall the triangle inequality. Suppose the quadrilateral $ABCD$ has $AB=5$ cm, $BC=6$ cm, $CD=7$ cm, $DA=4$ cm. Prove that the diagonal $AC$ is shorter than $11$ cm.

::hint
**What you need:** in a triangle, each side is shorter than the sum of the other two.

**Steps:**
1. Apply the triangle inequality to $\triangle ABC$ and $\triangle ACD$.
2. Add the two inequalities, and note the perimeter.

::solution
In triangle $ABC$: $AC<AB+BC=5+6=11$. In triangle $ACD$: $AC<CD+DA=7+4=11$. The perimeter of the quadrilateral is $5+6+7+4=22$ cm, and $11$ is half of it.

So $AC<11$ cm. (Adding the two inequalities: $2AC<22$, which also gives $AC<11$.)

**Answer.** $AC<11$ cm.
:::

:::exercise Challenge
Let $ABCD$ be a convex quadrilateral whose diagonals $AC$ and $BD$ meet at $O$. Prove that the sum of the two diagonals is greater than half the perimeter of the quadrilateral:
$$AC+BD>\dfrac{AB+BC+CD+DA}{2}.$$

::hint
**What you need:** the triangle inequality for the four triangles $OAB$, $OBC$, $OCD$, $ODA$; $AC=OA+OC$ and $BD=OB+OD$.

**Steps:**
1. Write the triangle inequality for each triangle.
2. Add the four inequalities and compare with $AC+BD$.

::solution
Since the quadrilateral is convex, $O$ lies between $A$ and $C$, and between $B$ and $D$, so $AC=OA+OC$ and $BD=OB+OD$. By the triangle inequality:
$$OA+OB>AB,\quad OB+OC>BC,\quad OC+OD>CD,\quad OD+OA>DA.$$
Adding the four inequalities gives $2(OA+OB+OC+OD)>AB+BC+CD+DA$. Since $OA+OB+OC+OD=AC+BD$, we get
$$2(AC+BD)>AB+BC+CD+DA.$$
So $AC+BD>\dfrac{AB+BC+CD+DA}{2}$.

**Answer.** The inequality is proved.
:::

## Mini test

:::quiz
::mc
The four angles of a quadrilateral add up to
A. $180^\circ$.
B. $360^\circ$.
C. $270^\circ$.
D. $540^\circ$.
::key B
A diagonal cuts a quadrilateral into two triangles, so the sum is $2\cdot180^\circ=360^\circ$. A is the angle sum of a triangle, D is the angle sum of a pentagon.

::mc
The quadrilateral $ABCD$ has $\angle A=80^\circ$, $\angle B=100^\circ$, $\angle C=120^\circ$. The angle $\angle D$ equals
A. $40^\circ$.
B. $50^\circ$.
C. $60^\circ$.
D. $80^\circ$.
::key C
$\angle D=360^\circ-(80^\circ+100^\circ+120^\circ)=360^\circ-300^\circ=60^\circ$. A, B and D do not give a total of $360^\circ$.

::mc
The four angles of a quadrilateral are in the ratio $1:2:4:5$. The largest angle equals
A. $180^\circ$.
B. $120^\circ$.
C. $90^\circ$.
D. $150^\circ$.
::key D
The parts add up to $12$, so each part is $360^\circ\div12=30^\circ$ and the largest angle is $5\cdot30^\circ=150^\circ$. B is the third angle, C comes from dividing by $4$ by mistake.

::mc
The two diagonals of the quadrilateral $ABCD$ are
A. $AC$ and $BD$.
B. $BC$ and $DA$.
C. $AB$ and $CD$.
D. $AB$ and $BC$.
::key A
A diagonal joins opposite vertices, so they are $AC$ and $BD$. A and B are pairs of opposite sides, D is a pair of adjacent sides.

::tf
The quadrilateral $ABCD$ has $\angle A=90^\circ$, $\angle B=100^\circ$, $\angle C=70^\circ$.
a) $\angle D=100^\circ$.
b) $\angle B+\angle D=200^\circ$.
c) $\angle A+\angle C=180^\circ$.
d) $AC$ is a side of the quadrilateral.
::key T T F F
a) True: $360-(90+100+70)=100$. b) True: $100+100=200$. c) False: $90+70=160$. d) False: $AC$ is a diagonal, because $A$ and $C$ are opposite vertices.

::sa
The quadrilateral $ABCD$ has $\angle A=85^\circ$, $\angle B=95^\circ$, $\angle C=100^\circ$. Find $\angle D$ (in degrees).
::key 80
$\angle D=360^\circ-(85^\circ+95^\circ+100^\circ)=360^\circ-280^\circ=80^\circ$.

::sa
The four angles of a quadrilateral are in the ratio $1:3:4:4$. Find the smallest angle (in degrees).
::key 30
The parts add up to $12$, so each part is $30^\circ$, and the smallest angle is $1\cdot30^\circ=30^\circ$.
:::
