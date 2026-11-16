---
title: A line parallel to a plane
description: Learn the positions of a line and a plane, the condition and properties of a line parallel to a plane, and use them in proofs and to find intersections.
minutes: 25
---

:::goals
- Tell apart the three positions of a line and a plane: lying in it, meeting it, parallel to it.
- State the condition for a line to be parallel to a plane and use it in proofs.
- Use the property: if a line is parallel to a plane, the line of intersection of a plane containing it with that plane is parallel to it.
- Explain real situations using a line parallel to a plane.
:::

A football goal has two vertical posts set in the flat pitch and a crossbar joining the tops of the posts. The two posts are equally tall. However far we extend the crossbar in both directions, it never touches the pitch.

Why is the crossbar always parallel to the pitch? To answer, we need to know when a line is parallel to a plane, and how to check this without extending the line to infinity.

## Positions of a line and a plane

Take a line $d$ and a plane $(P)$. By property 3 at the start of the chapter, if $d$ has two common points with $(P)$, then $d$ lies entirely in $(P)$. So the number of common points of $d$ and $(P)$ can only be infinitely many, exactly one, or none.

:::definition Positions of a line and a plane
- $d$ **lies in** $(P)$ (written $d\subset(P)$): $d$ and $(P)$ have infinitely many common points.
- $d$ **meets** $(P)$ at the point $A$: $d$ and $(P)$ have exactly one common point $A$.
- $d$ is **parallel** to $(P)$ (written $d\parallel(P)$): $d$ and $(P)$ have no common point.
:::

## The condition for a line to be parallel to a plane

To prove $d\parallel(P)$ from the definition, we would have to check infinitely many points of $d$. The following theorem gives a much simpler check.

:::theorem The condition for a line to be parallel to a plane
If a line $d$ does not lie in a plane $(P)$ and is parallel to a line $a$ lying in $(P)$, then $d\parallel(P)$.
:::

Why is this true? The parallel lines $d$ and $a$ determine a plane $(Q)$, and $(Q)\cap(P)=a$ (because $d\not\subset(P)$). Suppose $d$ has a common point $I$ with $(P)$. Then $I$ lies in both $(Q)$ and $(P)$, so $I\in a$. So $d$ and $a$ have the common point $I$, which contradicts $d\parallel a$. So $d$ and $(P)$ have no common point.

## Properties of a line parallel to a plane

:::theorem Properties
1. If a line $d$ is parallel to a plane $(P)$, then every plane $(Q)$ containing $d$ and meeting $(P)$ meets $(P)$ along a line $a$ parallel to $d$.
2. If two planes that meet are both parallel to a line, then their line of intersection is parallel to that line.
:::

Why is property 1 true? The lines $d$ and $a$ both lie in $(Q)$. They have no common point, because $a\subset(P)$ while $d$ has no common point with $(P)$. Two coplanar lines with no common point are parallel, so $a\parallel d$. Property 2 follows by taking an auxiliary plane containing the line and passing through a point of the line of intersection, and applying property 1 twice.

Note that the two statements differ. The condition lets us *conclude* $d\parallel(P)$ when we know a parallel line in $(P)$; the property lets us *deduce* a parallel line once we know $d\parallel(P)$.

:::example The crossbar of a goal
The posts $AA'$ and $BB'$ of a goal are vertical and equally tall, with the feet $A$, $B$ on the flat pitch $(P)$. Explain why the crossbar $A'B'$ is parallel to the pitch.

**Understand.** We must prove $A'B'\parallel(P)$, knowing that $AA'$ and $BB'$ are both vertical (so parallel) and $AA'=BB'$.

**Plan.** Use the condition above: find a line in $(P)$ parallel to $A'B'$; it should be $AB$.

**Solve.** The posts $AA'$ and $BB'$ are parallel and equal, so $AA'B'B$ is a parallelogram (plane geometry in the plane of the two posts). Hence $A'B'\parallel AB$. The line $AB$ lies in $(P)$, while $A'B'$ does not lie in $(P)$ (because $A'\notin(P)$).

By the condition, $A'B'\parallel(P)$. So the crossbar is parallel to the pitch.

**Look back.** If the two posts were unequal (say $3$ m and $3.2$ m), then $A'B'$ would not be parallel to $AB$ and would meet $(P)$ when extended: the crossbar would be tilted. The condition that the posts are equal is necessary.
:::

:::example A midsegment and a plane
Take a tetrahedron $ABCD$. Let $M$, $N$ be the midpoints of $AB$, $AC$. Prove that $MN\parallel(BCD)$.

**Solution.** In triangle $ABC$, $MN$ is a midsegment, so $MN\parallel BC$. The line $BC$ lies in $(BCD)$. The line $MN$ does not lie in $(BCD)$: if it did, then $M\in(BCD)$ and so would $A\in AB$, so $A$, $B$, $C$, $D$ would be coplanar, which is absurd.

By the condition, $MN\parallel(BCD)$.
:::

:::diagram The pyramid $S.ABCD$ with a parallelogram base, $O=AC\cap BD$ and $M$ the midpoint of $SA$
alt: The pyramid S.ABCD with a parallelogram base, the diagonals AC and BD meeting at O, the point M the midpoint of SA, and the segments MO, MD, MB
point A 0,0 below-left
point B 4,0 below-right
point C 5.5,1.5 right
point D 1.5,1.5 left
point S 2.7,4 above
point O 2.75,0.75 below
point M 1.35,2 left
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
segment A C dashed
segment B D dashed
segment M O dashed
segment M D dashed
segment M B
:::

:::example A line parallel to a plane through a midsegment
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$, with centre $O$ the intersection of $AC$ and $BD$. Let $M$ be the midpoint of $SA$. Prove that $SC\parallel(MBD)$.

**Solution.** Since $ABCD$ is a parallelogram, $O$ is the midpoint of $AC$. In triangle $SAC$, $MO$ is a midsegment ($M$ and $O$ are the midpoints of $SA$ and $AC$), so $MO\parallel SC$.

The line $MO$ lies in $(MBD)$, because $O\in BD$ and $M\in(MBD)$. The line $SC$ does not lie in $(MBD)$ (if it did, $S$ and $M$ would both lie in this plane, so would $A\in SM$, and $A$, $B$, $D$, $S$ would be coplanar, which is absurd).

By the condition, $SC\parallel(MBD)$.
:::

:::example Proving that two lines are parallel
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Let $M$ be a point on the edge $SA$ and $N$ the point where $SD$ meets $(MBC)$. Prove that $MN\parallel BC$.

**Solution.** Since $ABCD$ is a parallelogram, $BC\parallel AD$, with $AD\subset(SAD)$ and $BC\not\subset(SAD)$. By the condition, $BC\parallel(SAD)$.

The plane $(MBC)$ contains $BC$ and meets $(SAD)$ along $MN$ (because $M$ and $N$ lie in both planes). By property 1, $MN\parallel BC$.

So $MN\parallel BC$ (and hence $MN\parallel AD$).
:::

:::example A line of intersection parallel to the base
Take a pyramid $S.ABCD$ whose base is a parallelogram. Prove that the line of intersection $d$ of $(SAB)$ and $(SCD)$ is parallel to the plane $(ABCD)$.

**Solution.** From the lesson on parallel lines, $d$ passes through $S$ and is parallel to $AB$. The line $AB$ lies in $(ABCD)$, while $d$ does not lie in $(ABCD)$ because $S\notin(ABCD)$.

By the condition, $d\parallel(ABCD)$.
:::

**Connections.** A line parallel to a plane joins two ideas from earlier lessons: parallel lines and planes. The condition and property in this lesson are the main tools for proving parallelism and finding lines of intersection in the lesson on parallel planes, where we need two intersecting lines both parallel to a plane.

:::warning Common mistakes
- **Forgetting the condition $d\not\subset(P)$.** Wrong: $d\parallel a$ and $a\subset(P)$, so $d\parallel(P)$. Why it is wrong: $d$ may lie in $(P)$. Right: we also need $d\not\subset(P)$.
- **Thinking a line parallel to a plane is parallel to every line in that plane.** Wrong: $d\parallel(P)$, so $d\parallel b$ for every $b\subset(P)$. Why it is wrong: $d$ may be skew to $b$. Right: $d$ is parallel to the lines in $(P)$ that have its direction and skew to the others.
- **Using property 1 with a plane that does not contain $d$.** Wrong: $d\parallel(P)$, so the line of intersection of $(P)$ with any plane $(Q)$ is parallel to $d$. Why it is wrong: if $(Q)\not\supset d$, the line of intersection need not be parallel to $d$. Right: $(Q)$ must contain $d$.
- **Thinking two planes parallel to the same line are parallel.** Wrong: $d\parallel(P)$ and $d\parallel(Q)$, so $(P)\parallel(Q)$. Why it is wrong: two roof slopes that meet are both parallel to the eaves of the yard, but are not parallel to each other. Right: their line of intersection is parallel to $d$ (property 2).
:::

## Key terms

:::terms
- line parallel to a plane | đường thẳng song song với mặt phẳng
- lying in a plane | nằm trong mặt phẳng
- meeting a plane | cắt mặt phẳng
- line of intersection | giao tuyến
- midsegment | đường trung bình
- parallelogram | hình bình hành
- base | mặt đáy
- tetrahedron | tứ diện
:::

## Summary

- A line $d$ and a plane $(P)$ have three positions: $d\subset(P)$, $d$ meets $(P)$ at one point, or $d\parallel(P)$ (no common point).
- If $d\not\subset(P)$ and $d\parallel a$ with $a\subset(P)$, then $d\parallel(P)$.
- If $d\parallel(P)$, every plane containing $d$ meets $(P)$ along a line parallel to $d$.
- If two planes that meet are both parallel to $d$, their line of intersection is parallel to $d$.
- To prove $d\parallel(P)$: find $a\subset(P)$ parallel to $d$ (often a midsegment or a side of a parallelogram) and check $d\not\subset(P)$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Take a parallelepiped $ABCD.A'B'C'D'$. Prove that $AB\parallel(CDD'C')$ and $AC\parallel(A'B'C'D')$.

::hint
**What you need:** the faces of a parallelepiped are parallelograms; $d\parallel a\subset(P)$ and $d\not\subset(P)$ give $d\parallel(P)$.

**Steps:**
1. $AB\parallel CD$ and $CD\subset(CDD'C')$.
2. $AC\parallel A'C'$ and $A'C'\subset(A'B'C'D')$.

::solution
$ABCD$ is a parallelogram, so $AB\parallel CD$, with $CD\subset(CDD'C')$ and $AB\not\subset(CDD'C')$, so $AB\parallel(CDD'C')$. Similarly $AA'C'C$ is a parallelogram, so $AC\parallel A'C'\subset(A'B'C'D')$, and $AC\not\subset(A'B'C'D')$, so $AC\parallel(A'B'C'D')$.

**Answer.** $AB\parallel(CDD'C')$; $AC\parallel(A'B'C'D')$.
:::

:::exercise
Take a tetrahedron $ABCD$. Let $M$, $N$, $P$ be the midpoints of $AB$, $BC$, $CD$. Prove that $MN\parallel(ACD)$ and $NP\parallel(ABD)$.

::hint
**What you need:** a midsegment of a triangle is parallel to the third side.

**Steps:**
1. $MN\parallel AC$ and $AC\subset(ACD)$.
2. $NP\parallel BD$ and $BD\subset(ABD)$.

::solution
In triangle $ABC$, $MN\parallel AC$, with $AC\subset(ACD)$ and $MN\not\subset(ACD)$, so $MN\parallel(ACD)$. In triangle $BCD$, $NP\parallel BD$, with $BD\subset(ABD)$ and $NP\not\subset(ABD)$, so $NP\parallel(ABD)$.

**Answer.** $MN\parallel(ACD)$; $NP\parallel(ABD)$.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$ with centre $O$. Let $N$ be the midpoint of $SB$. Prove that $SD\parallel(NAC)$.

::hint
**What you need:** $ON$ is a midsegment of triangle $SBD$.

**Steps:**
1. Prove that $ON\parallel SD$.
2. $ON\subset(NAC)$.

::solution
$O$ is the midpoint of $BD$ and $N$ is the midpoint of $SB$, so $ON$ is a midsegment of triangle $SBD$ and $ON\parallel SD$. The line $ON$ lies in $(NAC)$ (since $O\in AC$), while $SD\not\subset(NAC)$, so $SD\parallel(NAC)$.

**Answer.** $SD\parallel(NAC)$.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Let $M$ be the midpoint of $SC$ and $N$ the point where $SB$ meets $(ADM)$. Prove that $MN\parallel BC$ and that $N$ is the midpoint of $SB$.

::hint
**What you need:** $BC\parallel AD$ so $BC\parallel(ADM)$; $(SBC)\cap(ADM)=MN$.

**Steps:**
1. Prove $BC\parallel(ADM)$.
2. Apply property 1 with the plane $(SBC)$.

::solution
Since $BC\parallel AD\subset(ADM)$ and $BC\not\subset(ADM)$, $BC\parallel(ADM)$. The plane $(SBC)$ contains $BC$ and meets $(ADM)$ along $MN$, so $MN\parallel BC$. In triangle $SBC$, $M$ is the midpoint of $SC$ and $MN\parallel BC$, so $N$ is the midpoint of $SB$.

**Answer.** $MN\parallel BC$ and $N$ is the midpoint of $SB$.
:::

:::exercise
According to the FIFA Laws of the Game, a standard football goal has two posts $7.32$ m apart (the distance between the feet of the posts) and $2.44$ m tall. The posts are vertical, with their feet on the flat pitch. Prove that the crossbar is parallel to the pitch and find the length of the crossbar between the tops of the posts.

::hint
**What you need:** the two posts are parallel and equal, so the feet and tops of the posts form a parallelogram.

**Steps:**
1. Prove that the crossbar is parallel to the segment joining the feet of the posts.
2. Use the properties of a parallelogram to compare lengths.

::solution
Let the feet of the posts be $A$, $B$ and the tops $A'$, $B'$. $AA'$ and $BB'$ are parallel and equal ($2.44$ m), so $AA'B'B$ is a parallelogram, hence $A'B'\parallel AB$ and $A'B'=AB=7.32$ m. $AB$ lies in the pitch and $A'B'$ does not, so $A'B'$ is parallel to the pitch.

**Answer.** The crossbar is parallel to the pitch and is $7.32$ m long.
:::

:::exercise
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Decide whether each statement is true or false.

a) $AD\parallel(SBC)$.

b) $SA\parallel(ABCD)$.

c) $BC\parallel(SAD)$.

d) $AB\parallel(SAD)$.

::hint
**What you need:** the condition $d\parallel a\subset(P)$, $d\not\subset(P)$.

**Steps:**
1. a), c) Use $AD\parallel BC$.
2. b), d) Look for a common point of the line and the plane.

::solution
a) **True**: $AD\parallel BC\subset(SBC)$ and $AD\not\subset(SBC)$.

b) **False**: $SA$ meets $(ABCD)$ at $A$.

c) **True**: $BC\parallel AD\subset(SAD)$ and $BC\not\subset(SAD)$.

d) **False**: $AB$ meets $(SAD)$ at $A$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise Revision
Prove that if two distinct lines $a$, $b$ are parallel and $a\parallel(P)$, then $b\parallel(P)$ or $b\subset(P)$.

::hint
**What you need:** from the lesson on parallel lines, two distinct lines parallel to a third line are parallel; and property 1 of this lesson.

**Steps:**
1. Find a line $a'\subset(P)$ parallel to $a$.
2. Compare $b$ with $a'$.

::solution
Take a point $A\in(P)$ and the plane $(Q)$ containing $a$ and $A$. Since $a\parallel(P)$, $(Q)$ meets $(P)$ along a line $a'$ through $A$ with $a'\parallel a$. If $b=a'$ then $b\subset(P)$. If $b\ne a'$ then $b\parallel a'$ (both are parallel to $a$), with $a'\subset(P)$; when $b\not\subset(P)$, the condition gives $b\parallel(P)$.

**Answer.** $b\parallel(P)$ or $b\subset(P)$.
:::

:::exercise Challenge
Take a tetrahedron $ABCD$. Take a point $M$ on the edge $AB$. A plane $(\alpha)$ through $M$ parallel to $AC$ and $BD$ meets the edges $BC$, $CD$, $DA$ at $N$, $P$, $Q$ respectively. Prove that $MNPQ$ is a parallelogram.

::hint
**What you need:** if $d\parallel(\alpha)$, a plane containing $d$ meets $(\alpha)$ along a line parallel to $d$.

**Steps:**
1. $MN=(\alpha)\cap(ABC)$ and $PQ=(\alpha)\cap(ACD)$ are both parallel to $AC$.
2. $MQ=(\alpha)\cap(ABD)$ and $NP=(\alpha)\cap(BCD)$ are both parallel to $BD$.

::solution
Since $AC\parallel(\alpha)$, the plane $(ABC)$ containing $AC$ meets $(\alpha)$ along $MN$, so $MN\parallel AC$; the plane $(ACD)$ containing $AC$ meets $(\alpha)$ along $PQ$, so $PQ\parallel AC$. Hence $MN\parallel PQ$. Similarly, since $BD\parallel(\alpha)$, $MQ=(\alpha)\cap(ABD)\parallel BD$ and $NP=(\alpha)\cap(BCD)\parallel BD$, so $MQ\parallel NP$. The quadrilateral $MNPQ$ has both pairs of opposite sides parallel, so it is a parallelogram.

**Answer.** $MNPQ$ is a parallelogram.
:::

## Mini test

:::quiz
::mc
The number of common points of a line and a plane cannot be
A. $2$.
B. $0$.
C. $1$.
D. infinitely many.
::key A
If a line has two common points with a plane, it lies in the plane, so it has infinitely many common points. So the number of common points is $0$, $1$ or infinitely many, never $2$.

::mc
Two lines $a\parallel b$ with $b\subset(P)$ and $a\not\subset(P)$. Then
A. $a$ meets $(P)$.
B. $a\parallel(P)$.
C. $a\subset(P)$.
D. $a$ is skew to $(P)$.
::key B
This is the condition for a line to be parallel to a plane. Option C contradicts the hypothesis $a\not\subset(P)$.

::mc
Take a tetrahedron $ABCD$; $M$, $N$ are the midpoints of $AB$, $AC$. The line $MN$ is parallel to which plane?
A. $(ABC)$.
B. $(ABD)$.
C. $(BCD)$.
D. $(ACD)$.
::key C
$MN\parallel BC\subset(BCD)$ and $MN\not\subset(BCD)$. Option A contains $MN$, and options B and D meet $MN$ at $M$ and $N$ respectively.

::mc
Take $d\parallel(P)$ and a plane $(Q)$ containing $d$ that meets $(P)$ along $a$. Which statement is true?
A. $a$ meets $d$.
B. $a$ and $d$ are skew.
C. $a$ coincides with $d$.
D. $a\parallel d$.
::key D
This is property 1: $a$ and $d$ both lie in $(Q)$ and have no common point, so they are parallel.

::tf
Take a pyramid $S.ABCD$ whose base is a parallelogram $ABCD$. Decide whether each statement is true or false.
a) $AD\parallel(SBC)$.
b) $SA\parallel(ABCD)$.
c) $BC\parallel(SAD)$.
d) $AB\parallel(SAD)$.
::key T F T F
a) True: $AD\parallel BC\subset(SBC)$. b) False: $SA$ meets $(ABCD)$ at $A$. c) True: $BC\parallel AD\subset(SAD)$. d) False: $AB$ meets $(SAD)$ at $A$.

::sa
Each edge of a cube is parallel to how many of its faces?
::key 2
The edge $AB$ is parallel to the two faces $(CDD'C')$ and $(A'B'C'D')$; it lies in two faces and meets the other two.

::sa
How many edges of the parallelepiped $ABCD.A'B'C'D'$ are parallel to the plane $(ABCD)$?
::key 4
These are the four edges of the top face $A'B'C'D'$; the four base edges lie in $(ABCD)$ and the four lateral edges meet $(ABCD)$.
:::
