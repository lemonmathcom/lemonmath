---
title: Parallel lines and how to identify them. Euclid's axiom. Properties of parallel lines
description: Alternate and corresponding angles; how to identify parallel lines, Euclid's axiom and the angle properties of parallel lines.
minutes: 25
---

:::goals
- Recognise pairs of alternate, corresponding and co-interior angles.
- Use the test for parallel lines to show that two lines are parallel.
- State Euclid's axiom and use it to explain some conclusions.
- Use the properties of parallel lines to find angle sizes.
:::

Two strings stretched by a bricklayer to build a wall must be in line and always the same distance apart: two parallel lines. He cannot extend the strings to infinity to see whether they ever meet. All he has is a batten laid across them and a protractor.

Just by measuring a few angles in two places, how can he know the lines will never cross? And once we know two lines are parallel, what can we deduce about the other angles? This lesson answers both questions, and it is the groundwork for the proofs in later lessons.

## Alternate and corresponding angles

Two lines $a$, $b$ are called **parallel** if they have no common point, written $a\parallel b$. Two different lines have only two possibilities: they cross at one point, or they are parallel.

Let the line $c$ cross $a$ at $A$ and $b$ at $B$. At each crossing there are four angles. We label the angles at $A$ as $\angle A_1$, $\angle A_2$, $\angle A_3$, $\angle A_4$ and the angles at $B$ as $\angle B_5$, $\angle B_6$, $\angle B_7$, $\angle B_8$, in the order shown (the numbers $1$ to $8$ are written inside the angles).

:::diagram Line $c$ meets $a$ at $A$ and $b$ at $B$
alt: Line c crosses lines a and b at A and B; the eight angles are numbered 1 to 8
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "1"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::definition Alternate, corresponding and co-interior angles
- Two angles are **alternate** if both lie between the lines $a$ and $b$ and on opposite sides of the line $c$. In the figure: $\angle A_3$ and $\angle B_5$; $\angle A_4$ and $\angle B_6$.
- Two angles are **corresponding** if they lie on the same side of $c$, one between $a$ and $b$ and the other outside. In the figure: $\angle A_1$ and $\angle B_5$; $\angle A_2$ and $\angle B_6$; $\angle A_3$ and $\angle B_7$; $\angle A_4$ and $\angle B_8$.
- Two angles are **co-interior** if both lie between $a$ and $b$ and on the same side of $c$. In the figure: $\angle A_3$ and $\angle B_6$; $\angle A_4$ and $\angle B_5$.
:::

:::diagram Line $c$ meets $a$ at $A$ and $b$ at $B$
alt: Line c crosses lines a and b at A and B; the eight angles are numbered 1 to 8
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "1"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::example Naming pairs of angles
The line $c$ crosses $a$ at $A$ and $b$ at $B$ as in the figure above. Name:

a) The pairs of alternate angles.

b) The pairs of corresponding angles.

**Solution.** a) The angles between $a$ and $b$ are $\angle A_3$, $\angle A_4$, $\angle B_5$, $\angle B_6$. Among them, $\angle A_3$ lies to the right of $c$ and $\angle B_5$ lies to the left of $c$, so they are alternate angles; similarly $\angle A_4$ lies to the left of $c$ and $\angle B_6$ lies to the right of $c$.

b) Corresponding angles lie on the same side of $c$ and in the same position relative to $a$ and $b$: the pair at the top left is $\angle A_1$ and $\angle B_5$, at the top right $\angle A_2$ and $\angle B_6$, at the bottom right $\angle A_3$ and $\angle B_7$, at the bottom left $\angle A_4$ and $\angle B_8$.

So a) $\angle A_3$ and $\angle B_5$; $\angle A_4$ and $\angle B_6$. b) $\angle A_1$ and $\angle B_5$; $\angle A_2$ and $\angle B_6$; $\angle A_3$ and $\angle B_7$; $\angle A_4$ and $\angle B_8$.
:::

## How to identify parallel lines

Try this: draw a line $a$, put one edge of a set square against $a$, slide the set square along a straight ruler and draw the line $b$ along that edge. The lines $a$ and $b$ are parallel. Measure the corresponding angles and you get $50^\circ$ and $50^\circ$, then $72^\circ$ and $72^\circ$, then $115^\circ$ and $115^\circ$: always equal. The converse is also true, and it is the tradesman's tool.

:::theorem Test for parallel lines
If a line $c$ crosses two lines $a$, $b$ and one pair of alternate angles is equal (or one pair of corresponding angles is equal) then $a\parallel b$.
:::

At this level the test is accepted without proof, like many early geometric facts: we use it as a reason in our arguments. A useful consequence: two lines perpendicular to the same third line are parallel, because the two corresponding angles are both $90^\circ$.

:::diagram A pair of alternate angles both equal to $65^\circ$
alt: Line c crosses a and b; two alternate angles are both 65 degrees
point A 1.37,2.2 above-left
point B 2.4,0 below-right
point P1 -0.43,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.43,0 ""
point Q2 4.2,0 ""
point C1 0.99,3.02 ""
point C2 2.78,-0.82 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "65°"
angle Q1 B A "65°"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.74,3.12 "c"
:::

:::example Showing that two lines are parallel
The line $c$ crosses $a$, $b$ at $A$, $B$ and $\angle A_3=\angle B_5=65^\circ$ (figure above). Show that $a\parallel b$.

**Solution.** The angles $\angle A_3$ and $\angle B_5$ are alternate angles, and $\angle A_3=65^\circ=\angle B_5$ (given).

Since one pair of alternate angles is equal, by the test for parallel lines, $a\parallel b$.

So $a\parallel b$.
:::

## Euclid's axiom

So how many lines through a point are parallel to a given line? The answer was put into his book the *Elements* by the Greek mathematician Euclid, around the 3rd century BC, as something we accept.

:::theorem Euclid's axiom
Through a point not on a line, there is exactly one line parallel to that line.
:::

From this axiom comes a consequence: **two different lines that are both parallel to a third line are parallel to each other.** Why? Suppose $a\parallel c$ and $b\parallel c$ but $a$ and $b$ meet at $M$. Then through the point $M$, which is not on $c$, there are two lines $a$, $b$ both parallel to $c$, contradicting the axiom. So $a$ and $b$ do not meet, that is $a\parallel b$.

## Properties of parallel lines

:::theorem Properties of parallel lines
If a line crosses two parallel lines then:
- alternate angles are equal;
- corresponding angles are equal.
:::

**Why?** Let $a\parallel b$ and let $c$ cross $a$ at $A$ and $b$ at $B$. Through $B$ draw a line $b'$ so that the pair of alternate angles at $A$ and $B$ are equal. By the test, $b'\parallel a$. So $b$ and $b'$ both pass through $B$ and are both parallel to $a$, and by Euclid's axiom $b'$ is the same line as $b$. Hence the pair of alternate angles at $A$ and $B$ are equal.

Consequence: co-interior angles add up to $180^\circ$, because each co-interior angle is adjacent supplementary to an angle equal to the other, by the alternate pair.

:::diagram $a\parallel b$ and $\angle A_1=70^\circ$
alt: Parallel lines a and b crossed by c; angle A1 is 70 degrees and the others are numbered
point A 1.6,2.2 above-left
point B 2.4,0 below-right
point P1 -0.2,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.2,0 ""
point Q2 4.2,0 ""
point C1 1.29,3.05 ""
point C2 2.71,-0.85 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "70°"
angle C1 A P2 "2"
angle P2 A B "3"
angle B A P1 "4"
angle Q1 B A "5"
angle A B Q2 "6"
angle Q2 B C2 "7"
angle C2 B Q1 "8"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 1.04,3.15 "c"
:::

:::example Finding angles when lines are parallel
$a\parallel b$ and $\angle A_1=70^\circ$ (figure above). Find the other angles at $A$ and at $B$.

**Solution.** At $A$: $\angle A_3=\angle A_1=70^\circ$ because they are vertically opposite. $\angle A_2=180^\circ-70^\circ=110^\circ$ because $\angle A_2$ and $\angle A_1$ are adjacent supplementary. $\angle A_4=\angle A_2=110^\circ$ because they are vertically opposite.

At $B$: since $a\parallel b$, corresponding angles are equal. So $\angle B_5=\angle A_1=70^\circ$, $\angle B_6=\angle A_2=110^\circ$, $\angle B_7=\angle A_3=70^\circ$, $\angle B_8=\angle A_4=110^\circ$.

So the angles equal to $70^\circ$ are $\angle A_1$, $\angle A_3$, $\angle B_5$, $\angle B_7$; the angles equal to $110^\circ$ are $\angle A_2$, $\angle A_4$, $\angle B_6$, $\angle B_8$.
:::

:::diagram Alternate angles $(x+20)^\circ$ and $(2x-10)^\circ$
alt: Parallel lines a and b crossed by c; two alternate angles measure x plus 20 degrees and 2x minus 10 degrees
point A 0.55,2.2 above-left
point B 2.4,0 below-right
point P1 -1.25,2.2 ""
point P2 4.2,2.2 ""
point Q1 -1.25,0 ""
point Q2 4.2,0 ""
point C1 -0.02,2.89 ""
point C2 2.98,-0.69 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "x + 20°"
angle Q1 B A "2x − 10°"
label 4.5,2.2 "a"
label 4.5,0 "b"
label -0.27,2.99 "c"
:::

:::example Finding $x$
$a\parallel b$, and two alternate angles measure $(x+20)^\circ$ and $(2x-10)^\circ$ (figure above). Find $x$ and the size of each angle.

**Solution.** Since $a\parallel b$, the alternate angles are equal:
$$x+20=2x-10\Leftrightarrow x=30.$$

Then each angle is $30+20=50$ (degrees); check: $2\cdot30-10=50$.

So $x=30$ and each angle is $50^\circ$.
:::

:::diagram $a\parallel b$, $\angle A_4=115^\circ$
alt: Parallel lines a and b crossed by c; angle A4 is 115 degrees and angle B5 is unknown
point A 1.37,2.2 above-left
point B 2.4,0 below-right
point P1 -0.43,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.43,0 ""
point Q2 4.2,0 ""
point C1 0.99,3.02 ""
point C2 2.78,-0.82 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle B A P1 "115°"
angle Q1 B A "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.74,3.12 "c"
:::

:::example Co-interior angles
$a\parallel b$ and $\angle A_4=115^\circ$ (figure above). Find $\angle B_5$.

**Solution.** Since $\angle A_3$ and $\angle A_4$ are adjacent supplementary, $\angle A_3=180^\circ-115^\circ=65^\circ$.

Since $a\parallel b$, the alternate angles $\angle A_3$ and $\angle B_5$ are equal, so $\angle B_5=65^\circ$.

So $\angle B_5=65^\circ$.

**Remark.** The co-interior angles $\angle A_4$ and $\angle B_5$ add up to $115^\circ+65^\circ=180^\circ$, so they are supplementary.
:::

The last example is a real situation, in four steps.

:::diagram Highway $c$ crossing roads $a$ and $b$
alt: Line c crosses lines a and b; the first corresponding angle is 72 degrees and the second is to be found
point A 1.69,2.2 above-left
point B 2.4,0 below-right
point P1 -0.11,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.11,0 ""
point Q2 4.2,0 ""
point C1 1.41,3.06 ""
point C2 2.68,-0.86 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P1 A C1 "72°"
angle Q1 B A "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 1.16,3.16 "c"
:::

:::example Are the two roads parallel?
Suppose a stretch of highway $c$ crosses two straight roads $a$ and $b$ (figure above). An engineer measures the corresponding angles at the two junctions. Case one: $72^\circ$ and $72^\circ$. Case two: $72^\circ$ and $78^\circ$. In each case, are the two roads parallel?

**Solution.**

*Understand.* We have two pairs of corresponding angles. We must decide whether $a\parallel b$ in each case.

*Plan.* If the corresponding angles are equal, use the test for parallel lines. If they differ, use the property: parallel lines always have equal corresponding angles, so when the angles differ the lines cannot be parallel.

*Solve.* Case one: the corresponding angles are equal ($72^\circ=72^\circ$), so by the test for parallel lines, $a\parallel b$.

Case two: $72^\circ\ne78^\circ$. If $a\parallel b$ then the corresponding angles would have to be equal by the property, a contradiction. So $a$ and $b$ are not parallel: the two roads meet somewhere if extended.

*Look back.* A protractor usually has an error of a degree or two. In case two the angles differ by $6^\circ$, far too much to blame on error, so the conclusion "not parallel" is reliable.
:::

:::warning Common mistakes
- **Deciding lines are parallel because they have not met in the drawing.** Wrong: "$a$, $b$ do not meet in the picture, so $a\parallel b$". Why it is wrong: the picture shows only a short piece, and parallel means never meeting. Right: check with one pair of alternate or corresponding angles.
- **Using the property before knowing the lines are parallel.** Wrong: "$\angle A_1=\angle B_5$ because they are corresponding". Why it is wrong: corresponding angles are equal only when $a\parallel b$. Right: first establish $a\parallel b$, then conclude.
- **Confusing alternate angles with co-interior angles.** Wrong: "$a\parallel b$, so $\angle A_4=\angle B_5$". Why it is wrong: that pair is co-interior, and they are supplementary. Right: $\angle A_4+\angle B_5=180^\circ$ and $\angle A_3=\angle B_5$.
:::

**Connections.** This lesson reuses adjacent supplementary and vertically opposite angles from the last one, and gives you three new tools: the test for parallel lines, Euclid's axiom, and the properties of parallel lines. In the next lesson we learn to write an argument as a complete proof, and in the lesson on the angle sum of a triangle you will see Euclid's axiom at work. Back to the bricklayer: equal corresponding angles are enough to know the strings are parallel.

## Key terms

:::terms
- parallel lines | hai đường thẳng song song
- intersecting lines | đường thẳng cắt nhau
- alternate angles | góc so le trong
- corresponding angles | góc đồng vị
- co-interior angles | góc trong cùng phía
- test (criterion) | dấu hiệu nhận biết
- axiom | tiên đề
- Euclid's axiom | tiên đề Euclid
- property | tính chất
- transversal | đường thẳng cắt hai đường thẳng
:::

## Summary

- Parallel lines have no common point; we write $a\parallel b$.
- A line crossing two lines makes pairs of alternate, corresponding and co-interior angles.
- Test: one pair of equal alternate angles, or one pair of equal corresponding angles, means the lines are parallel.
- Euclid's axiom: through a point not on a line there is exactly one parallel to it; so two lines parallel to a third line are parallel to each other.
- Property: if two lines are parallel then alternate angles are equal, corresponding angles are equal and co-interior angles add up to $180^\circ$.

## Practice

Each exercise comes with what you need and hints; open the solution after trying. The angles $\angle A_1,\dots,\angle B_8$ are numbered as in the figure in the lesson.

:::exercise
The line $c$ crosses $a$ at $A$ and $b$ at $B$ (numbered as in the figure in the lesson). Fill in the blanks:

a) $\angle A_3$ and $\angle B_5$ are ... angles.

b) $\angle A_2$ and $\angle B_6$ are ... angles.

c) $\angle A_4$ and $\angle B_5$ are ... angles.

::hint
**What you need:** alternate angles are both between the lines, on opposite sides of $c$; corresponding angles are one between and one outside, on the same side of $c$; co-interior angles are both between, on the same side of $c$.

**Steps:**
1. For each pair, decide whether each angle lies between or outside $a$ and $b$.
2. Then decide whether the angles are on the same side or opposite sides of $c$.

::solution
Recall how the pairs of angles formed by the line $c$ crossing $a$ and $b$ are recognised: alternate angles both lie between $a$ and $b$ on opposite sides of $c$; corresponding angles lie on the same side of $c$, one between $a$ and $b$ and the other outside; co-interior angles both lie between $a$ and $b$ on the same side of $c$.

a) The angles $\angle A_3$ and $\angle B_5$ both lie between $a$ and $b$, on opposite sides of $c$.

Hence $\angle A_3$ and $\angle B_5$ are alternate angles.

b) The angle $\angle A_2$ is outside (not between $a$ and $b$), the angle $\angle B_6$ is between $a$ and $b$, and both are to the right of $c$.

Hence $\angle A_2$ and $\angle B_6$ are corresponding angles.

c) The angles $\angle A_4$ and $\angle B_5$ both lie between $a$ and $b$ and both are to the left of $c$.

Hence $\angle A_4$ and $\angle B_5$ are co-interior angles.

So a) alternate angles; b) corresponding angles; c) co-interior angles.

**Answer.** a) alternate; b) corresponding; c) co-interior.
:::

:::exercise
The line $c$ crosses $a$, $b$ at $A$, $B$ and $\angle A_2=\angle B_6=118^\circ$. Show that $a\parallel b$.

::hint
**What you need:** the test for parallel lines using a pair of corresponding angles.

**Steps:**
1. Decide what kind of pair $\angle A_2$ and $\angle B_6$ make.
2. State the test and conclude.

::solution
The angles $\angle A_2$ and $\angle B_6$ are corresponding angles formed when the line $c$ crosses the lines $a$ and $b$.

By the hypothesis, $\angle A_2=\angle B_6=118^\circ$, so the line $c$ crossing $a$ and $b$ makes one pair of equal corresponding angles.

By the test for parallel lines (if a line crossing two lines makes a pair of equal corresponding angles, the two lines are parallel), we get $a\parallel b$.

So $a\parallel b$.

**Answer.** $a\parallel b$.
:::

:::exercise
$a\parallel b$, the line $c$ crosses $a$, $b$ at $A$, $B$ and $\angle B_8=120^\circ$. Find $\angle A_4$, $\angle A_1$, $\angle B_5$.

::hint
**What you need:** since $a\parallel b$ corresponding angles are equal; adjacent supplementary angles add up to $180^\circ$.

**Steps:**
1. Which angle is corresponding to $\angle B_8$?
2. $\angle A_1$ and $\angle B_5$ are adjacent supplementary to $\angle A_4$ and $\angle B_8$.

::solution
Since $a\parallel b$, the corresponding angles $\angle A_4$ and $\angle B_8$ are equal, so $\angle A_4=120^\circ$.

Since $\angle A_1$ and $\angle A_4$ are adjacent supplementary, $\angle A_1=180^\circ-120^\circ=60^\circ$.

Since $\angle B_5$ and $\angle B_8$ are adjacent supplementary, $\angle B_5=180^\circ-120^\circ=60^\circ$.

So $\angle A_4=120^\circ$, $\angle A_1=60^\circ$, $\angle B_5=60^\circ$.

**Answer.** $120^\circ$; $60^\circ$; $60^\circ$.
:::

:::exercise
$a\parallel b$ and a line $c$ crosses $a$, $b$. Find $x$ in each case:

a) The alternate angles are $(3x+10)^\circ$ and $(x+50)^\circ$.

b) The co-interior angles are $(2x+20)^\circ$ and $(x+10)^\circ$.

::hint
**What you need:** alternate angles are equal; co-interior angles are supplementary (sum $180^\circ$).

**Steps:**
1. a) Set the two expressions equal.
2. b) Set the sum of the two expressions equal to $180$.

::solution
Since $a\parallel b$ and the line $c$ crosses $a$ and $b$, alternate angles are equal and co-interior angles are supplementary (their sum is $180^\circ$).

a) The alternate angles are equal, so
$$3x+10=x+50.$$

Moving terms across, we get $2x=40$, so $x=20$.

Check: $3\cdot20+10=70$ and $20+50=70$, so each angle is $70^\circ$.

So $x=20$.

b) The co-interior angles add up to $180^\circ$, so
$$(2x+20)+(x+10)=180.$$

Simplifying, $3x+30=180$, so $3x=150$ and $x=50$.

Check: $2\cdot50+20=120$ and $50+10=60$; the angles are $120^\circ$ and $60^\circ$, and their sum is $180^\circ$.

So $x=50$.

**Answer.** a) $x=20$; b) $x=50$.
:::

:::exercise
A point $M$ is not on the line $d$. Hà draws two different lines through $M$, both parallel to $d$. What can you say about Hà's drawing?

::hint
**What you need:** Euclid's axiom says how many lines through a point outside a line are parallel to it.

**Steps:**
1. Is $M$ outside $d$?
2. Compare with the axiom.

::solution
The point $M$ is not on $d$. By Euclid's axiom, through $M$ there is only one line parallel to $d$. So it is impossible to have two different lines through $M$ both parallel to $d$.

So Hà's drawing is wrong: the two lines she drew must be the same line.

**Answer.** Two different lines cannot be drawn.
:::

:::exercise
$a\parallel c$ and $b\parallel c$, where $a$, $b$, $c$ are different lines. Explain why $a\parallel b$.

::hint
**What you need:** Euclid's axiom; two different lines either cross or are parallel.

**Steps:**
1. Suppose $a$ and $b$ meet at $M$.
2. Find what contradicts the axiom.

::solution
Suppose $a$ and $b$ meet at a point $M$. Since $M\in a$ and $a\parallel c$, $M$ is not on $c$. Then through $M$ there are two different lines $a$, $b$ both parallel to $c$, contradicting Euclid's axiom.

So $a$ and $b$ do not meet, that is $a\parallel b$.

**Answer.** $a\parallel b$.
:::

:::exercise
Suppose the two rails of a straight railway track are crossed by a sleeper $c$ (a crosspiece) that is perpendicular to both rails. Explain why the rails are parallel.

::hint
**What you need:** the test for parallel lines using corresponding angles.

**Steps:**
1. Call the rails $a$ and $b$; what angles does the sleeper make with them?
2. Is there a pair of equal corresponding angles?

::solution
Call the rails $a$, $b$ and let the sleeper $c$ cross them at $A$, $B$. Since $c\perp a$ and $c\perp b$, $\angle A_1=90^\circ$ and $\angle B_5=90^\circ$.

The angles $\angle A_1$ and $\angle B_5$ are corresponding and equal. By the test for parallel lines, $a\parallel b$.

So the rails are parallel.

**Answer.** The rails are parallel.
:::

:::exercise
Suppose a carpenter measures a tabletop: two opposite edges $a$, $b$ are crossed by the edge $c$, and the two co-interior angles measure $110^\circ$ and $70^\circ$. Are the edges $a$, $b$ parallel? Explain.

::hint
**What you need:** adjacent supplementary angles add up to $180^\circ$; the test uses a pair of alternate angles.

**Steps:**
1. Add the two measured angles.
2. Find the angle adjacent supplementary to one of them and compare with the alternate angle.

::solution
Call the $110^\circ$ angle $\angle A_4$ and the $70^\circ$ angle $\angle B_5$ (two co-interior angles). Since $\angle A_4$ and $\angle A_3$ are adjacent supplementary, $\angle A_3=180^\circ-110^\circ=70^\circ$.

Then $\angle A_3=70^\circ=\angle B_5$, and these are alternate angles. By the test for parallel lines, $a\parallel b$.

So the two edges are parallel.

**Answer.** Yes, the edges are parallel.
:::

:::exercise
$a\parallel b$, $c$ crosses $a$, $b$ at $A$, $B$ and $\angle A_1=80^\circ$. Find $\angle B_6$ and the size of each angle when $\angle B_6$ is halved by its bisector. (A reminder about bisectors.)

::hint
**What you need:** corresponding angles are equal when $a\parallel b$; adjacent supplementary angles add up to $180^\circ$; a bisector halves an angle.

**Steps:**
1. Find $\angle A_2$, then use corresponding angles to get $\angle B_6$.
2. Halve it.

::solution
Since $\angle A_1$ and $\angle A_2$ are adjacent supplementary, $\angle A_2=180^\circ-80^\circ=100^\circ$.

Since $a\parallel b$, the corresponding angles $\angle B_6$ and $\angle A_2$ are equal, so $\angle B_6=100^\circ$.

The bisector splits $\angle B_6$ into two angles, each $\dfrac{100^\circ}2=50^\circ$.

So $\angle B_6=100^\circ$ and each half is $50^\circ$.

**Answer.** $100^\circ$; $50^\circ$.
:::

:::exercise Challenge
$a\parallel b$, and $c$ crosses $a$ at $A$ and $b$ at $B$. The ray $Am$ bisects $\angle A_3$ and the ray $Bn$ bisects $\angle B_5$ ($Am$ and $Bn$ lie on opposite sides of $c$). Prove that $Am\parallel Bn$.

::hint
**What you need:** since $a\parallel b$ the alternate angles $\angle A_3$, $\angle B_5$ are equal; halves of equal angles are equal; the test for parallel lines.

**Steps:**
1. Show that $\angle mAB=\angle ABn$.
2. What position do these two angles have with respect to the line $AB$?

::solution
Since $a\parallel b$, the alternate angles $\angle A_3$ and $\angle B_5$ are equal:
$$\angle A_3=\angle B_5.$$

Since $Am$ bisects $\angle A_3$,
$$\angle mAB=\dfrac12\angle A_3.$$

Since $Bn$ bisects $\angle B_5$,
$$\angle ABn=\dfrac12\angle B_5.$$

As $\angle A_3=\angle B_5$, we get $\angle mAB=\angle ABn$.

The rays $Am$ and $Bn$ lie on opposite sides of the line $AB$, so $\angle mAB$ and $\angle ABn$ are alternate angles for the two lines $Am$, $Bn$ and the transversal $AB$.

These alternate angles are equal, so by the test for parallel lines, $Am\parallel Bn$.

So $Am\parallel Bn$.

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc NB
$a\parallel b$ and a line $c$ crosses $a$, $b$. Two alternate angles are
A. supplementary.
B. equal.
C. complementary.
D. unrelated.
::key B
By the property of parallel lines, alternate angles are equal. A describes co-interior angles.

::mc NB
$a\parallel b$ and a line $c$ crosses $a$, $b$. One corresponding angle is $110^\circ$, so the corresponding angle matching it is
A. $70^\circ$.
B. $180^\circ$.
C. $110^\circ$.
D. $250^\circ$.
::key C
Corresponding angles are equal when the lines are parallel. A is the adjacent supplementary angle, D is $360^\circ-110^\circ$.

::mc NB
Through a point not on a line $d$, the number of lines parallel to $d$ is
A. infinitely many.
B. exactly two.
C. none.
D. exactly one.
::key D
This is Euclid's axiom.

::mc TH
Two lines $a$ and $b$ are both perpendicular to a line $c$. Then
A. $a\parallel b$.
B. $a$ is certainly the same line as $b$.
C. $a\perp b$.
D. $a$ crosses $b$.
::key A
The corresponding angles are both $90^\circ$, so $a\parallel b$. C is wrong because $a\perp b$ would need them to cross.

::tf TH TH TH TH
$a\parallel b$; $c$ crosses $a$ at $A$ and $b$ at $B$; $M\in a$ and $N\in b$ lie on opposite sides of $c$; $P\in b$ lies on the same side of $c$ as $M$; $\angle MAB=70^\circ$. Decide whether each statement is true or false.
a) $\angle ABN=70^\circ$.
b) $\angle ABP=70^\circ$.
c) $\angle MAB+\angle ABP=180^\circ$.
d) Through $B$ there are two lines other than $b$ that are parallel to $a$.
::key T F T F
a) True: alternate angles. b) False: $\angle ABP=180^\circ-70^\circ=110^\circ$. c) True: co-interior angles are supplementary. d) False: by Euclid's axiom there is only one line through $B$ parallel to $a$, namely $b$.

::sa VD
$a\parallel b$ and two alternate angles are $(2x+10)^\circ$ and $(x+40)^\circ$. Find $x$.
::key 30
$2x+10=x+40$, so $x=30$.

::sa TH
$a\parallel b$ and one co-interior angle is $115^\circ$. What is the other co-interior angle, in degrees?
::key 65
$180-115=65$.
:::
