---
title: Similar triangles
description: Understand similar triangles and the scale factor, the theorem on a line parallel to a side, and use them to find lengths in real situations.
minutes: 25
---

:::goals
- State the definition of similar triangles and the scale factor.
- Write the similarity notation correctly and identify corresponding angles and sides.
- Use the theorem: a line parallel to one side of a triangle, cutting the other two sides, makes a triangle similar to the original.
- Find lengths in real problems such as measuring height with shadows and reading maps.
:::

Suppose you want to know the height of a tall tree that you cannot climb to measure. You stand upright, $1.6$ m tall, and your shadow on the ground is $2$ m long. At the same moment, the tree's shadow is $7.5$ m long. How tall is the tree?

The two triangles (the tree with its shadow, and you with your shadow) have the same "shape" but different sizes, like a photograph and its enlargement. Mathematics calls such triangles similar. This lesson teaches the definition, and how to use it to solve the problem above.

## Let's explore

When a photograph is enlarged $2$ times, every length doubles while the angles stay the same, so the picture looks "identical" but larger. Let us try this with triangles. Triangle $ABC$ has $AB=4$, $BC=5$, $CA=6$. Triangle $A'B'C'$ has $A'B'=8$, $B'C'=10$, $C'A'=12$ and $\angle A'=\angle A$, $\angle B'=\angle B$, $\angle C'=\angle C$. We work out the ratios:
$$\frac{A'B'}{AB}=\frac84=2,\qquad\frac{B'C'}{BC}=\frac{10}{5}=2,\qquad\frac{C'A'}{CA}=\frac{12}{6}=2.$$
The three ratios are equal and the corresponding angles are equal. Two triangles with these properties are called similar.

## Similar triangles

:::definition Similar triangles
Triangle $A'B'C'$ is **similar** to triangle $ABC$ if
$$\angle A'=\angle A,\quad\angle B'=\angle B,\quad\angle C'=\angle C\quad\text{and}\quad\frac{A'B'}{AB}=\frac{B'C'}{BC}=\frac{C'A'}{CA}=k.$$
We write $\triangle A'B'C'\sim\triangle ABC$. The number $k$ is called the **scale factor** of $\triangle A'B'C'$ to $\triangle ABC$.
:::

**A note on order.** The notation $\triangle A'B'C'\sim\triangle ABC$ tells us that $A'$ corresponds to $A$, $B'$ to $B$ and $C'$ to $C$. Two corresponding sides are the sides opposite two equal angles. So the order of the vertices matters.

Properties of similarity:
- Every triangle is similar to itself, with scale factor $1$.
- If $\triangle A'B'C'\sim\triangle ABC$ with scale factor $k$, then $\triangle ABC\sim\triangle A'B'C'$ with scale factor $\dfrac1k$.
- If $\triangle A''B''C''\sim\triangle A'B'C'$ with scale factor $k_1$ and $\triangle A'B'C'\sim\triangle ABC$ with scale factor $k_2$, then $\triangle A''B''C''\sim\triangle ABC$ with scale factor $k_1k_2$.
- Two congruent triangles are similar with scale factor $1$.

The perimeters of two similar triangles are also in the ratio $k$: adding the three sides $A'B'=k\cdot AB$, $B'C'=k\cdot BC$, $C'A'=k\cdot CA$ gives perimeter of $\triangle A'B'C'=k\cdot{}$perimeter of $\triangle ABC$.

:::example Recognising similar triangles
Let $\triangle ABC$ have $AB=4$, $BC=5$, $CA=6$ and let $\triangle A'B'C'$ have $A'B'=8$, $B'C'=10$, $C'A'=12$ with equal corresponding angles. Show that the two triangles are similar and find the scale factor in both directions.

**Solution.** The corresponding angles are equal. The ratios of the sides are $\dfrac{8}{4}=\dfrac{10}{5}=\dfrac{12}{6}=2$. By the definition, $\triangle A'B'C'\sim\triangle ABC$ with scale factor $k=2$.

In the opposite direction, $\triangle ABC\sim\triangle A'B'C'$ with scale factor $\dfrac12$.

So the triangles are similar; the scale factor is $2$ (from $\triangle ABC$ to $\triangle A'B'C'$) and $\dfrac12$ (the other way).
:::

:::example Finding side lengths
Let $\triangle ABC\sim\triangle MNP$ with $AB=6$, $BC=9$, $CA=12$ and $MN=4$. Find $NP$ and $PM$.

**Solution.** Since $A$, $B$, $C$ correspond to $M$, $N$, $P$, the scale factor of $\triangle MNP$ to $\triangle ABC$ is $k=\dfrac{MN}{AB}=\dfrac46=\dfrac23$. We have
$$NP=k\cdot BC=\dfrac23\cdot9=6,\qquad PM=k\cdot CA=\dfrac23\cdot12=8.$$

Check: $\dfrac{4}{6}=\dfrac{6}{9}=\dfrac{8}{12}=\dfrac23$.

So $NP=6$ and $PM=8$.
:::

:::example Perimeters of similar triangles
For the two triangles in the previous example, find the perimeter of $\triangle MNP$ given that the perimeter of $\triangle ABC$ is $27$.

**Solution.** The ratio of the perimeters equals the scale factor $k=\dfrac23$. Hence the perimeter of $\triangle MNP$ is $27\cdot\dfrac23=18$.

Check: $MN+NP+PM=4+6+8=18$.

So the perimeter of $\triangle MNP$ is $18$.
:::

## The theorem on a line parallel to a side

In real situations we often meet a small triangle sitting inside a large one. The following theorem tells us when they are similar.

:::theorem A parallel line and similar triangles
If a line cuts two sides of a triangle and is parallel to the third side, it forms a new triangle similar to the given triangle.

Precisely, in $\triangle ABC$ with $M\in AB$, $N\in AC$ and $MN\parallel BC$, we have $\triangle AMN\sim\triangle ABC$, that is
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$
:::

:::diagram The line $MN$ parallel to $BC$
alt: Triangle ABC with the segment MN parallel to side BC, M on AB and N on AC, forming a small triangle AMN inside triangle ABC
point B 0,0 below-left
point C 8,0 below-right
point A 3,5 above
point M 1.2,2 left
point N 6,2 right
polygon A B C
segment M N
:::

**Why?** Since $MN\parallel BC$, we have $\angle AMN=\angle ABC$ and $\angle ANM=\angle ACB$ (corresponding angles), and the two triangles share the angle $A$. By the intercept theorem (a line parallel to a side cuts the other two sides proportionally), $\dfrac{AM}{AB}=\dfrac{AN}{AC}$. Through $N$ draw the line parallel to $AB$, meeting $BC$ at $P$; then $BMNP$ is a parallelogram, so $MN=BP$, and by the intercept theorem $\dfrac{BP}{BC}=\dfrac{AN}{AC}$. Hence $\dfrac{MN}{BC}=\dfrac{AN}{AC}$, and the three ratios are equal.

:::example Using the theorem
In $\triangle ABC$, $AB=10$, $AC=15$, $BC=20$. The point $M$ lies on $AB$ with $AM=4$; the line through $M$ parallel to $BC$ meets $AC$ at $N$. Find $AN$ and $MN$.

**Solution.** Since $MN\parallel BC$, $\triangle AMN\sim\triangle ABC$ with scale factor $k=\dfrac{AM}{AB}=\dfrac{4}{10}=\dfrac25$. Hence
$$AN=\dfrac25\cdot AC=\dfrac25\cdot15=6,\qquad MN=\dfrac25\cdot BC=\dfrac25\cdot20=8.$$

Check: $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{4}{10}=\dfrac{6}{15}=\dfrac25$.

So $AN=6$ and $MN=8$.
:::

We return to the problem of measuring the tree, using the four steps of solving a problem.

:::example Measuring a tree with shadows
You are $1.6$ m tall and your shadow is $2$ m long; at the same moment the tree's shadow is $7.5$ m long (an imagined case; the sun's rays are parallel, and the tree and the person stand upright). Find the height of the tree.

**Solution.**

*Understand.* Let $BT$ be the tree, $B$ its base and $S$ the tip of its shadow ($BS=7.5$ m). Put the person at a point $P$ on $BS$ so that the person's head $H$ lies on the ray $TS$; then $PH=1.6$ m and the shadow is $PS=2$ m.

*Plan.* The person and the tree are both perpendicular to the ground, so $PH\parallel BT$; apply the theorem on a parallel line in $\triangle STB$.

*Solve.* Since $PH\parallel BT$, $\triangle SPH\sim\triangle SBT$ with ratio $\dfrac{SP}{SB}=\dfrac{2}{7.5}$. Hence $\dfrac{PH}{BT}=\dfrac{SP}{SB}$, that is
$$\frac{1.6}{BT}=\frac{2}{7.5}\ \Rightarrow\ BT=\frac{1.6\cdot7.5}{2}=6\ \text{(m)}.$$

*Look back.* The tree is $\dfrac{6}{1.6}=3.75$ times as tall as the person and its shadow is $\dfrac{7.5}{2}=3.75$ times as long, matching the scale factor. The result is reasonable because the tree is taller than the person.

So the tree is $6$ m tall.
:::

:::diagram A person and a tree with shadows on the ground
alt: A large triangle formed by an upright tree, its shadow on the ground and a ray of sunlight; inside it a small triangle formed by an upright person, the person's shadow and the same ray
point B 0,0 below-left
point T 0,6 above
point S 7.5,0 below-right
point P 5.5,0 below
point H 5.5,1.6 right
polygon T B S
segment P H
label 0.4,3 "tree"
label 6.2,0.8 "person"
:::

:::example Reading a map
On a map with scale $1:50\,000$, three towns form a triangle with sides $4$ cm, $6$ cm, $8$ cm (an imagined case). Find the real distances between the towns and the perimeter of the real triangle.

**Solution.** The real triangle is similar to the triangle on the map with scale factor $50\,000$. So $4$ cm on the map stands for $4\cdot50\,000=200\,000$ cm $=2$ km. Similarly $6$ cm stands for $3$ km and $8$ cm stands for $4$ km. The real perimeter is $2+3+4=9$ km.

Check: the perimeter on the map is $18$ cm and $18\cdot50\,000$ cm $=900\,000$ cm $=9$ km.

So the real distances are $2$ km, $3$ km, $4$ km and the perimeter is $9$ km.
:::

:::warning Mistakes to watch out for
- **Writing the vertices in the wrong order.** Wrong: from $\triangle ABC\sim\triangle MNP$ deduce $\dfrac{AB}{NM}=\dfrac{BC}{MP}$. Why it is wrong: the order of vertices says $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, so $AB$ corresponds to $MN$ and $BC$ to $NP$. Right: $\dfrac{AB}{MN}=\dfrac{BC}{NP}=\dfrac{CA}{PM}$.
- **Inverting the scale factor.** Wrong: $\triangle A'B'C'\sim\triangle ABC$ with $A'B'=8$, $AB=4$ has $k=\dfrac{AB}{A'B'}=\dfrac12$. Why it is wrong: the scale factor of $\triangle A'B'C'$ to $\triangle ABC$ is $\dfrac{A'B'}{AB}$. Right: $k=\dfrac84=2$.
- **Matching the wrong sides.** Wrong: when $MN\parallel BC$, writing $\dfrac{MN}{AB}=\dfrac{AM}{AC}$. Why it is wrong: $MN$ is opposite the angle $A$, so it corresponds to $BC$, not to $AB$. Right: $\dfrac{MN}{BC}=\dfrac{AM}{AB}$.
:::

**Connections.** This lesson relies on the intercept theorem (a line parallel to a side cuts the other two sides proportionally) and on corresponding angles. The next lesson, [the three similarity conditions for triangles](lesson:triangle-similarity-conditions), gives quicker ways to show that two triangles are similar without checking all six conditions of the definition.

## Key terms

:::terms
- similar triangles | tam giác đồng dạng
- scale factor (ratio of similarity) | tỉ số đồng dạng
- corresponding angles | góc tương ứng
- corresponding sides | cạnh tương ứng
- intercept theorem | định lí Thalès
- parallel line | đường thẳng song song
- perimeter | chu vi
- map scale | tỉ lệ bản đồ
:::

## Summary

- $\triangle A'B'C'\sim\triangle ABC$ if corresponding angles are equal and corresponding sides are proportional: $\dfrac{A'B'}{AB}=\dfrac{B'C'}{BC}=\dfrac{C'A'}{CA}=k$.
- The order of the vertices shows the corresponding angles and sides; the scale factor becomes $\dfrac1k$ when the direction is reversed.
- The perimeters of two similar triangles are in the same ratio $k$.
- If $MN\parallel BC$ ($M\in AB$, $N\in AC$) then $\triangle AMN\sim\triangle ABC$ and $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}$.
- Applications: measuring height with shadows, reading maps, enlarging and reducing figures.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Let $\triangle DEF\sim\triangle ABC$ with scale factor $k=3$ and $AB=2$, $BC=4$, $CA=5$. Find $DE$, $EF$, $FD$.

::hint
**What you need:** $\dfrac{DE}{AB}=\dfrac{EF}{BC}=\dfrac{FD}{CA}=k$.

**Steps:**
1. Identify the corresponding sides.
2. Multiply each side by $k$.

::solution
Since $D$, $E$, $F$ correspond to $A$, $B$, $C$, we have $DE=3\cdot2=6$, $EF=3\cdot4=12$, $FD=3\cdot5=15$.

So $DE=6$, $EF=12$, $FD=15$.

**Answer.** $6$; $12$; $15$.
:::

:::exercise
Let $\triangle ABC\sim\triangle A'B'C'$ with $AB=5$, $BC=8$, $CA=10$ and $A'B'=15$. Find the scale factor of $\triangle A'B'C'$ to $\triangle ABC$, the other sides of $\triangle A'B'C'$ and the ratio of the perimeters.

::hint
**What you need:** $k=\dfrac{A'B'}{AB}$.

**Steps:**
1. Work out $k$.
2. Multiply $BC$ and $CA$ by $k$.

::solution
We have $k=\dfrac{15}{5}=3$. Hence $B'C'=3\cdot8=24$ and $C'A'=3\cdot10=30$. The ratio of the perimeters is $k=3$: the perimeter of $\triangle ABC$ is $23$ and that of $\triangle A'B'C'$ is $15+24+30=69=3\cdot23$.

**Answer.** $k=3$; $24$; $30$; perimeter ratio $3$.
:::

:::exercise
Let $\triangle ABC$ have $AB=4$, $BC=6$, $CA=8$ and let $\triangle A'B'C'$ have $A'B'=6$, $B'C'=9$, $C'A'=12$, with equal corresponding angles. Are the triangles similar? If so, state the scale factor and compare the perimeters.

::hint
**What you need:** corresponding sides must have the same ratio.

**Steps:**
1. Work out $\dfrac{A'B'}{AB}$, $\dfrac{B'C'}{BC}$, $\dfrac{C'A'}{CA}$.
2. Work out the two perimeters.

::solution
We have $\dfrac{6}{4}=\dfrac{9}{6}=\dfrac{12}{8}=\dfrac32$ and the corresponding angles are equal, so $\triangle A'B'C'\sim\triangle ABC$ with scale factor $\dfrac32$. The perimeter of $\triangle ABC$ is $18$ and that of $\triangle A'B'C'$ is $27=\dfrac32\cdot18$.

**Answer.** Similar, scale factor $\dfrac32$; perimeters $18$ and $27$.
:::

:::exercise
In $\triangle ABC$, $M\in AB$ and $N\in AC$ with $MN\parallel BC$. Given $AM=6$, $MB=4$, $AN=9$ and $BC=20$, find $NC$, $AC$ and $MN$.

::hint
**What you need:** $\triangle AMN\sim\triangle ABC$ with scale factor $\dfrac{AM}{AB}$.

**Steps:**
1. Work out $AB$ and the scale factor $k$.
2. Use $k$ to find $AC$, then $NC$ and $MN$.

::solution
We have $AB=6+4=10$, so $k=\dfrac{6}{10}=\dfrac35$. Since $\dfrac{AN}{AC}=\dfrac35$, $AC=\dfrac{9}{3/5}=15$, so $NC=15-9=6$. We have $MN=\dfrac35\cdot20=12$.

Check: $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}=\dfrac35$.

**Answer.** $NC=6$; $AC=15$; $MN=12$.
:::

:::exercise
A flagpole casts a shadow $12$ m long on the ground. At the same moment an upright metre rule casts a shadow $0.8$ m long. Find the height of the flagpole.

::hint
**What you need:** the triangles formed by an object, its shadow and the sun's ray are similar.

**Steps:**
1. Write $\dfrac{\text{height of pole}}{\text{height of rule}}=\dfrac{\text{shadow of pole}}{\text{shadow of rule}}$.
2. Solve for the height.

::solution
Let $h$ be the height of the flagpole (m). We have $\dfrac{h}{1}=\dfrac{12}{0.8}$, so $h=15$.

Check: $\dfrac{15}{12}=\dfrac{1}{0.8}=1.25$.

So the flagpole is $15$ m tall.

**Answer.** $15$ m.
:::

:::exercise
On a map with scale $1:100\,000$, three places form a triangle with sides $3$ cm, $4$ cm, $5$ cm (an imagined case). Find the real distances and the perimeter of the real triangle.

::hint
**What you need:** the real triangle is similar to the triangle on the map with scale factor $100\,000$.

**Steps:**
1. Convert $1$ cm on the map to kilometres.
2. Multiply each side.

::solution
$1$ cm on the map stands for $100\,000$ cm $=1$ km. So the real sides are $3$ km, $4$ km, $5$ km, and the perimeter is $12$ km.

**Answer.** $3$ km; $4$ km; $5$ km; perimeter $12$ km.
:::

:::exercise
In $\triangle ABC$, right-angled at $A$, $AB=6$ and $AC=8$. The point $M\in AB$ has $AM=3$; the line through $M$ parallel to $BC$ meets $AC$ at $N$. Find $AN$ and $MN$. (Revise [Pythagoras' theorem](lesson:pythagoras-theorem).)

::hint
**What you need:** find $BC$ by Pythagoras' theorem, then use the scale factor.

**Steps:**
1. Work out $BC$.
2. Find $k=\dfrac{AM}{AB}$, then $AN$ and $MN$.

::solution
By Pythagoras' theorem, $BC=\sqrt{6^2+8^2}=10$. Since $MN\parallel BC$, $\triangle AMN\sim\triangle ABC$ with $k=\dfrac{3}{6}=\dfrac12$. Hence $AN=\dfrac12\cdot8=4$ and $MN=\dfrac12\cdot10=5$.

**Answer.** $AN=4$; $MN=5$.
:::

:::exercise
$\triangle A'B'C'\sim\triangle ABC$ with scale factor $2$ and $\triangle A''B''C''\sim\triangle A'B'C'$ with scale factor $3$. Find the scale factor of $\triangle A''B''C''$ to $\triangle ABC$. If $AB=5$, what is $A''B''$?

::hint
**What you need:** the transitive property: the scale factors multiply.

**Steps:**
1. Multiply the two scale factors.
2. Use it to find $A''B''$.

::solution
The scale factor of $\triangle A''B''C''$ to $\triangle ABC$ is $2\cdot3=6$. When $AB=5$, $A''B''=6\cdot5=30$.

Check step by step: $A'B'=2\cdot5=10$ and $A''B''=3\cdot10=30$.

**Answer.** $6$; $A''B''=30$.
:::

:::exercise
A triangular photograph with sides $6$ cm, $8$ cm, $10$ cm is enlarged to a poster so that the shortest side is $15$ cm long. Find the sides of the poster and the ratio of the perimeters.

::hint
**What you need:** enlarging keeps the shape, that is, the figures are similar.

**Steps:**
1. Find the enlargement factor from the shortest side.
2. Multiply the other sides.

::solution
The enlargement factor is $k=\dfrac{15}{6}=2.5$. The sides of the poster are $15$ cm, $2.5\cdot8=20$ cm, $2.5\cdot10=25$ cm. The perimeter of the photograph is $24$ cm, that of the poster is $60$ cm and $60\div24=2.5$.

**Answer.** $15$ cm, $20$ cm, $25$ cm; perimeter ratio $2.5$.
:::

:::exercise Challenge
In $\triangle ABC$, $M$ is the midpoint of $AB$ and $N$ is the midpoint of $AC$. Prove that $MN\parallel BC$ and $MN=\dfrac12BC$.

::hint
**What you need:** the converse of the intercept theorem and the theorem on a line parallel to a side.

**Steps:**
1. Work out $\dfrac{AM}{AB}$ and $\dfrac{AN}{AC}$.
2. Use the scale factor to find $MN$.

::solution
Since $M$ and $N$ are midpoints, $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac12$. By the converse of the intercept theorem, $MN\parallel BC$. Then $\triangle AMN\sim\triangle ABC$ with scale factor $\dfrac12$, so $\dfrac{MN}{BC}=\dfrac12$, that is $MN=\dfrac12BC$.

So $MN\parallel BC$ and $MN=\dfrac12BC$ (the segment $MN$ is called the midsegment of the triangle).

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
Let $\triangle ABC\sim\triangle MNP$ with $AB=6$ and $MN=4$. The scale factor of $\triangle MNP$ to $\triangle ABC$ is
A. $\dfrac32$.
B. $\dfrac23$.
C. $2$.
D. $\dfrac12$.
::key B
$k=\dfrac{MN}{AB}=\dfrac46=\dfrac23$. A inverts the ratio; C and D do not come from the corresponding sides.

::mc
Two similar triangles with scale factor $3$ have a ratio of perimeters equal to
A. $9$.
B. $\dfrac13$.
C. $3$.
D. $6$.
::key C
The perimeters are also in the scale factor $k=3$. A squares $k$ (that is the ratio of areas), B inverts it, D adds $3+3$.

::mc
In $\triangle ABC$, $AB=10$ and $BC=20$; $M\in AB$ with $AM=4$ and $MN\parallel BC$ ($N\in AC$). The length $MN$ is
A. $2$.
B. $5$.
C. $10$.
D. $8$.
::key D
$k=\dfrac{4}{10}=\dfrac25$, so $MN=\dfrac25\cdot20=8$. B, C and A do not use the ratio $\dfrac25$ of the two triangles.

::mc
Let $\triangle ABC\sim\triangle DEF$. A pair of equal angles is
A. $\angle C=\angle F$.
B. $\angle B=\angle D$.
C. $\angle A=\angle E$.
D. $\angle A=\angle F$.
::key A
The order of vertices gives $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$, so $\angle C=\angle F$. The other options match the wrong vertices.

::tf
Let $\triangle ABC$ have $AB=3$, $BC=4$, $CA=5$ and let $\triangle A'B'C'\sim\triangle ABC$ with $A'B'=6$, $B'C'=8$. Decide whether each statement is true or false.
a) The scale factor of $\triangle A'B'C'$ to $\triangle ABC$ is $2$.
b) $C'A'=12$.
c) The perimeter of $\triangle A'B'C'$ is $24$.
d) $\triangle ABC\sim\triangle A'B'C'$ with scale factor $2$.
::key T F T F
a) True: $\dfrac63=2$. b) False: $C'A'=2\cdot5=10$. c) True: $6+8+10=24$. d) False: in the opposite direction the scale factor is $\dfrac12$.

::sa
Let $\triangle ABC\sim\triangle MNP$ with $AB=6$, $BC=9$, $MN=4$. Find $NP$.
::key 6
$k=\dfrac46=\dfrac23$, so $NP=\dfrac23\cdot9=6$.

::sa
You are $1.6$ m tall and your shadow is $2$ m long; a tree's shadow is $7.5$ m long. How many metres tall is the tree?
::key 6
$\dfrac{1.6}{h}=\dfrac{2}{7.5}$, so $h=6$.
:::
