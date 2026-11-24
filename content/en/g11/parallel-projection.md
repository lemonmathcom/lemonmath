---
title: Parallel projection
description: Understand parallel projection and its properties of keeping parallelism and ratios, drawings of solids, and apply it to shadows and measuring heights.
minutes: 25
---

:::goals
- State the definition of parallel projection and find the image of a point or a segment.
- State and use the properties of parallel projection: it preserves collinearity, parallelism and ratios.
- Understand the representation of a solid on a plane and the rules for drawing it.
- Use parallel projection to find heights from shadows and to explain the drawings in space geometry.
:::

On an afternoon, the rays of the sun fall on the ground almost parallel to one another. A flagpole standing vertically on level ground casts a shadow $8$ m long. At the same moment, a bamboo stake $1.5$ m tall standing vertically nearby casts a shadow $1.2$ m long.

How tall is the flagpole? We cannot climb up to measure it, but the shadows give us a way to calculate. This lesson explains why the ratio of height to shadow stays the same, and it also explains why solids drawn on paper, such as parallelepipeds and pyramids, are "correct".

## Parallel projection

:::definition Parallel projection
Take a plane $(P)$ and a line $l$ that meets $(P)$. For every point $M$ in space, the line through $M$ parallel or equal to $l$ meets $(P)$ at exactly one point $M'$. The point $M'$ is called the **parallel projection** of $M$ onto $(P)$ in the direction $l$. The plane $(P)$ is the **plane of projection** and the line $l$ is the **direction of projection**. The projection of a figure $\mathcal{H}$ is the set of the projections of all points of $\mathcal{H}$.
:::

Sunlight is almost parallel, so the shadow of an object on the ground is the parallel projection of the object onto the ground in the direction of the rays.

:::diagram The parallel projection of the triangle $ABC$ onto the plane $(P)$ in the direction $l$
alt: A triangle ABC above the plane P and its image A'B'C' on the plane, with the segments AA', BB', CC' drawn dashed and parallel to one another
point P1 0,0 ""
point P2 8,0 ""
point P3 10,2 ""
point P4 2,2 ""
polygon P1 P2 P3 P4
point A 2.5,4 above-left
point B 6,4.4 above-right
point C 4.4,4.6 above
point A2 2,1 below "A′"
point B2 5.5,1.4 below "B′"
point C2 3.9,1.6 below "C′"
segment A B
segment B C
segment C A
segment A2 B2
segment B2 C2
segment C2 A2
segment A A2 dashed
segment B B2 dashed
segment C C2 dashed
label 9.2,0.5 "(P)"
label 1.6,2.6 "l"
:::

## Properties of parallel projection

:::theorem Properties of parallel projection
Consider parallel projection onto the plane $(P)$ in the direction $l$.
1. The projection of a line not parallel to $l$ is a line; the projection of a line parallel to $l$ is a point. The projection of a segment is a segment (or a point).
2. The projections of two parallel lines (not parallel to $l$) are two parallel lines or the same line.
3. If $A$, $B$, $C$ are three collinear points, their projections $A'$, $B'$, $C'$ are also collinear and $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$. Likewise, the ratio of the lengths of two segments lying on one line, or on two parallel lines, is preserved.
:::

Why is property 3 true (for three collinear points)? The lines $AA'$, $BB'$, $CC'$ are all parallel to $l$, so they are parallel to each other and lie in the plane determined by the line $d$ through $A$, $B$, $C$ and the direction $l$. This plane meets $(P)$ along a line containing $A'$, $B'$, $C'$, so these three points are collinear. In that plane, three parallel lines are cut by the two transversals $d$ and $A'B'C'$, so by the intercept theorem $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$.

Consequence: the projection of the midpoint of a segment is the midpoint of the projection of the segment.

:::example Measuring the flagpole from its shadow
At the same moment, a vertical flagpole casts a shadow $8$ m long and a vertical bamboo stake $1.5$ m tall casts a shadow $1.2$ m long. Find the height of the flagpole.

**Understand.** The rays of the sun are parallel, so a shadow is the parallel projection onto the ground in the direction of the rays. The flagpole $AB$ has its foot $B$ on the ground and its shadow is $BB'$ ($B'$ is the projection of the top); the stake $CD$ has the shadow $DD'$.

**Plan.** The vertical segments $AB$ and $CD$ are parallel; their shadows lie on the ground. Parallel projection preserves the ratio of two segments on two parallel lines, so $\dfrac{AB}{CD}=\dfrac{BB'}{DD'}$, that is $\dfrac{\text{height}}{\text{shadow}}$ is the same for both objects.

**Solve.** Let $h$ be the height of the flagpole. Then $\dfrac{h}{8}=\dfrac{1.5}{1.2}$, so $h=\dfrac{8\cdot1.5}{1.2}=10$.

So the flagpole is $10$ m tall.

**Look back.** The stake is $1.5$ m tall with a $1.2$ m shadow, so its ratio of height to shadow is $\dfrac{1.5}{1.2}=1.25$. The flagpole has the ratio $\dfrac{10}{8}=1.25$, exactly equal. The method works only when both objects are vertical, the shadows are measured on the same horizontal plane, and the measurements are made at the same moment.
:::

:::example The centroid and parallel projection
Take a triangle $ABC$ with centroid $G$. A parallel projection onto a plane $(P)$ (the direction of projection is not parallel to the plane $(ABC)$) maps $A$, $B$, $C$ to $A'$, $B'$, $C'$. Prove that the projection $G'$ of $G$ is the centroid of triangle $A'B'C'$.

**Solution.** Let $M$ be the midpoint of $BC$. The projection $M'$ of $M$ is the midpoint of $B'C'$ (consequence). Since $A$, $G$, $M$ are collinear with $AG=2GM$, property 3 gives that $A'$, $G'$, $M'$ are collinear and $A'G'=2G'M'$. So $G'$ lies on the median $A'M'$ of triangle $A'B'C'$ at a distance $\dfrac23A'M'$ from $A'$, hence $G'$ is the centroid of triangle $A'B'C'$.

So the projection of the centroid is the centroid of the projection.
:::

## Drawings of solids

To draw a solid on paper, we draw its parallel projection onto the plane of the paper. This projection is called a **drawing** (representation) of the solid. By the properties above, the drawing keeps:
- collinearity and the order of points;
- parallelism of lines;
- the ratio of segments lying on one line or on parallel lines.

Note that lengths, angles and the shape of the figure may change. For example, any triangle can be the drawing of an equilateral triangle; a parallelogram can be the drawing of a square, a rectangle or a rhombus. Hidden edges are drawn dashed; these are the drawings we have used in the earlier lessons.

:::example The drawing of an equilateral triangle
An equilateral triangle $ABC$ has an altitude $AH$. Its drawing is a triangle $A'B'C'$ (no longer equilateral). How is the altitude $AH$ shown?

**Solution.** Since $ABC$ is equilateral, $H$ is the midpoint of $BC$. Parallel projection preserves midpoints, so $H'$ is the midpoint of $B'C'$. So $A'H'$ is a median of triangle $A'B'C'$.

In the drawing, the altitude $AH$ becomes the median $A'H'$ (which is no longer perpendicular to $B'C'$).
:::

:::example Ratios on a line
Four collinear points $A$, $B$, $C$, $D$, in that order, satisfy $AB:BC:CD=1:2:3$. Their parallel projections are $A'$, $B'$, $C'$, $D'$ with $A'D'=18$. Find $A'B'$, $B'C'$, $C'D'$.

**Solution.** Parallel projection preserves the ratio of segments on one line, so $A'B':B'C':C'D'=1:2:3$. The total number of parts is $1+2+3=6$ and $A'D'=18$, so each part is $\dfrac{18}{6}=3$ long.

So $A'B'=3$, $B'C'=6$, $C'D'=9$.
:::

:::example The drawing of a trapezium
A trapezium $ABCD$ has $AB\parallel CD$ and $AB=2CD$. What properties does its drawing have?

**Solution.** Parallel projection preserves parallelism, so $A'B'\parallel C'D'$. It preserves the ratio of segments on two parallel lines, so $\dfrac{A'B'}{C'D'}=\dfrac{AB}{CD}=2$.

So the drawing is a trapezium $A'B'C'D'$ with $A'B'\parallel C'D'$ and $A'B'=2C'D'$.
:::

**Connections.** Parallel projection gives the geometric explanation of the drawings in this whole chapter: the planes, pyramids and parallelepipeds we draw are all drawings of this kind. In the previous lesson, the intercept theorem in space used parallel planes; here we use exactly three parallel lines for projecting. The next two lessons move to a new topic, limits, but the idea of "a constant ratio" remains a common tool.

:::warning Common mistakes
- **Thinking the projection preserves lengths and angles.** Wrong: the projection of an equilateral triangle is an equilateral triangle. Why it is wrong: parallel projection only preserves ratios on one line, not lengths or angles. Right: the projection of an equilateral triangle is an arbitrary triangle.
- **Thinking the projections of two parallel lines are always parallel.** Wrong: the projections of two parallel lines are always two parallel lines. Why it is wrong: if the two lines lie in a plane parallel to the direction of projection, their projections coincide. Right: parallel or the same line.
- **Comparing the ratio of two segments that are not in the same direction.** Wrong: $AB$ and $CD$ are not parallel, so $\dfrac{A'B'}{C'D'}=\dfrac{AB}{CD}$. Why it is wrong: the ratio is preserved only for segments on one line or on two parallel lines. Right: compare only segments in the same direction.
- **Using shadows when objects are not vertical or the ground is sloping.** Wrong: a leaning pole and a vertical stake have the same ratio of height to shadow. Why it is wrong: the two objects must be parallel for the ratio to be preserved. Right: both objects vertical, shadows on one plane, measured at the same moment.
:::

## Key terms

:::terms
- parallel projection | phép chiếu song song
- projection (image) | hình chiếu
- plane of projection | mặt phẳng chiếu
- direction of projection | phương chiếu
- representation (drawing) of a solid | hình biểu diễn
- midpoint | trung điểm
- centroid | trọng tâm
- ratio | tỉ số
:::

## Summary

- Parallel projection onto $(P)$ in the direction $l$ maps each point $M$ to the point $M'$ where $(P)$ meets the line through $M$ parallel to $l$.
- The projection of a line (not parallel to $l$) is a line; of a segment, a segment.
- The projections of two parallel lines are two parallel lines or the same line.
- Three collinear points have collinear projections and $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$; midpoints and centroids are preserved.
- The drawing of a solid is its parallel projection; it keeps parallelism and ratios, but not lengths and angles.
- Shadows: at the same moment, the heights of vertical objects are proportional to the lengths of their shadows.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
At the same moment, a vertical tree casts a shadow $12$ m long and a vertical stake $2$ m tall casts a shadow $1.6$ m long. Find the height of the tree.

::hint
**What you need:** $\dfrac{\text{height}}{\text{shadow}}$ is the same for every vertical object.

**Steps:**
1. Write the proportion $\dfrac{h}{12}=\dfrac{2}{1.6}$.

::solution
At the same moment the sun's rays are parallel, so the shadows of vertical objects on level ground are their parallel projections. Parallel projection preserves ratios of lengths, so the height and the shadow length of the two objects are proportional.

Let $h$ (m) be the height of the tree ($h>0$). We have
$$\frac{h}{12}=\frac{2}{1.6}.$$

Hence
$$h=\frac{12\cdot2}{1.6}=15.$$

So the tree is $15$ m tall.

**Answer.** The tree is $15$ m tall.
:::

:::exercise
Take a triangle $ABC$ and a point $M$ on $BC$ with $BM=2MC$. A parallel projection maps $A$, $B$, $C$, $M$ to $A'$, $B'$, $C'$, $M'$. Given $B'C'=9$, find $B'M'$ and $M'C'$.

::hint
**What you need:** parallel projection preserves the ratio of segments lying on one line.

**Steps:**
1. $B'M':M'C'=BM:MC=2:1$.
2. Divide $B'C'=9$ in the ratio $2:1$.

::solution
Parallel projection preserves the ratio of lengths of segments lying on the same line. Since $M$ lies on $BC$,
$$\frac{B'M'}{M'C'}=\frac{BM}{MC}=2.$$

Hence $B'M'=2M'C'$. Since $M'$ lies between $B'$ and $C'$, we have $B'M'+M'C'=B'C'=9$.

Substituting, $2M'C'+M'C'=9$, that is $3M'C'=9$, so $M'C'=3$ and $B'M'=2\cdot3=6$.

So $B'M'=6$ and $M'C'=3$.

**Answer.** $B'M'=6$, $M'C'=3$.
:::

:::exercise
A parallelogram $ABCD$ has a drawing $A'B'C'D'$. What kind of figure is the drawing?

::hint
**What you need:** parallel projection preserves parallelism.

**Steps:**
1. $AB\parallel CD$ and $AD\parallel BC$.
2. Deduce the pairs of opposite sides of $A'B'C'D'$.

::solution
Parallel projection maps two parallel lines to two parallel lines (or to the same line).

Since $AB\parallel CD$ (opposite sides of the parallelogram $ABCD$), we get $A'B'\parallel C'D'$.

Since $AD\parallel BC$ (opposite sides of the parallelogram $ABCD$), we get $A'D'\parallel B'C'$.

The quadrilateral $A'B'C'D'$ has two pairs of parallel opposite sides.

So the drawing $A'B'C'D'$ is a parallelogram.

**Answer.** A parallelogram.
:::

:::exercise
Four collinear points $A$, $B$, $C$, $D$, in that order, satisfy $AB:BC:CD=2:3:5$. Their parallel projections have $A'D'=30$. Find $A'B'$, $B'C'$, $C'D'$.

::hint
**What you need:** the ratio of segments on one line is preserved.

**Steps:**
1. The total number of parts is $2+3+5=10$.
2. Each part is $\dfrac{30}{10}=3$ long.

::solution
Parallel projection preserves the ratio of lengths of segments on the same line, so $A'B':B'C':C'D'=2:3:5$.

Since $A'$, $B'$, $C'$, $D'$ are collinear in that order, $A'D'=A'B'+B'C'+C'D'$. Let $k$ be the length of one part ($k>0$). Then $A'B'=2k$, $B'C'=3k$, $C'D'=5k$ and
$$A'D'=2k+3k+5k=10k=30\ \Rightarrow\ k=3.$$

Hence $A'B'=2\cdot3=6$, $B'C'=3\cdot3=9$, $C'D'=5\cdot3=15$.

So $A'B'=6$, $B'C'=9$, $C'D'=15$.

**Answer.** $A'B'=6$, $B'C'=9$, $C'D'=15$.
:::

:::exercise
At one moment, a person $1.7$ m tall standing upright casts a shadow $1.2$ m long on level ground, and the shadow of a building on the same ground is $24$ m long. Find the height of the building (treat it as vertical).

::hint
**What you need:** the ratio of height to shadow is the same for all vertical objects at the same moment.

**Steps:**
1. Find the ratio $\dfrac{1.7}{1.2}$.
2. Multiply by $24$.

::solution
At the same moment the sun's rays are parallel, so the height of a vertical object is proportional to the length of its shadow on level ground.

Let $h$ (m) be the height of the building ($h>0$). We have
$$\frac{h}{24}=\frac{1.7}{1.2}.$$

Hence
$$h=\frac{24\cdot1.7}{1.2}=34.$$

So the building is $34$ m tall.

**Answer.** $34$ m.
:::

:::exercise
Decide whether each statement about parallel projection onto a plane $(P)$ in the direction $l$ is true or false:

a) The projections of two parallel lines are always two parallel lines.

b) The projection of the midpoint of a segment is the midpoint of the projection of the segment.

c) The projections of two intersecting lines may be two parallel lines.

d) The projection of a triangle may be a segment.

::hint
**What you need:** the properties of parallel projection; consider the case where the plane of the figure is parallel to $l$.

**Steps:**
1. a), c) Consider lines lying in a plane parallel to $l$.
2. d) The plane of the triangle is parallel to $l$.

::solution
a) **False.** If two parallel lines lie in a plane parallel to the direction $l$, their projections coincide (they are the same line), not two parallel lines. So the projections of two parallel lines are not always two parallel lines.

b) **True.** Parallel projection preserves the ratio of lengths of segments on the same line. If $M$ is the midpoint of $AB$, then $\dfrac{AM}{MB}=1$, so $\dfrac{A'M'}{M'B'}=1$, that is $M'$ is the midpoint of $A'B'$.

c) **False.** Two lines meeting at $O$ have projections that both pass through $O'$ (the projection of $O$). Hence their projections intersect or coincide, and cannot be parallel.

d) **True.** When the plane of the triangle is parallel to the direction $l$, the projections of all points of the triangle lie on one line, so the projection of the triangle is a segment.

So statements b), d) are true; statements a), c) are false.

**Answer.** a) False; b) True; c) False; d) True.
:::

:::exercise Revision
Two planes $(P)$ and $(Q)$ are parallel. A parallel projection onto $(Q)$ in the direction $l$ maps a triangle $ABC$ in $(P)$ to a triangle $A'B'C'$. Prove that $A'B'C'$ is congruent to $ABC$.

::hint
**What you need:** from the previous lesson, a third plane cutting two parallel planes meets them along two parallel lines.

**Steps:**
1. $AA'\parallel BB'$ (both parallel to $l$).
2. Prove that $ABB'A'$ is a parallelogram.

::solution
The parallel projection onto $(Q)$ in the direction $l$ maps $A$, $B$, $C$ to $A'$, $B'$, $C'$, so $AA'$, $BB'$, $CC'$ are all parallel to $l$ (or lie along the line through that point parallel to $l$).

Consider the side $AB$. The lines $AA'$ and $BB'$ are both parallel to $l$, so they are parallel to each other, and $A$, $A'$, $B'$, $B$ lie in one plane $(AA'B'B)$. This plane cuts the parallel planes $(P)$ and $(Q)$ along $AB$ and $A'B'$, so $AB\parallel A'B'$.

The quadrilateral $ABB'A'$ has $AA'\parallel BB'$ and $AB\parallel A'B'$, so it is a parallelogram. Hence $A'B'=AB$.

The same argument for the other sides gives $B'C'=BC$ and $C'A'=CA$.

The triangles $A'B'C'$ and $ABC$ have three pairs of equal corresponding sides, so they are congruent (SSS).

So triangle $A'B'C'$ is congruent to triangle $ABC$.

**Answer.** Triangle $A'B'C'$ is congruent to triangle $ABC$.
:::

:::exercise Challenge
Take a square $ABCD$ and let $M$ be the midpoint of $CD$. Let $N$ be the intersection of $AM$ and $BD$. Prove that $BN=2ND$. Hence describe how to find the point $N'$ on the drawing $A'B'C'D'$ of the square.

::hint
**What you need:** similar triangles ($AB\parallel DM$); parallel projection preserves ratios on a line and midpoints.

**Steps:**
1. The triangles $NAB$ and $NMD$ are similar with ratio $\dfrac{AB}{DM}=2$.
2. On $B'D'$ take the point dividing it in the same ratio.

::solution
Proof that $BN=2ND$.

Since $ABCD$ is a square, $AB\parallel CD$, so $AB\parallel DM$ (with $M\in CD$). Consider triangles $NBA$ and $NDM$: $N$ is the intersection of $AM$ and $BD$, so $\angle BNA=\angle DNM$ (vertically opposite) and $\angle NBA=\angle NDM$ (alternate angles). Hence triangle $NBA$ is similar to triangle $NDM$, and
$$\frac{BN}{ND}=\frac{AB}{DM}.$$

Since $M$ is the midpoint of $CD$, $DM=\dfrac{CD}{2}=\dfrac{AB}{2}$, so $\dfrac{AB}{DM}=2$. Therefore $\dfrac{BN}{ND}=2$, that is $BN=2ND$.

How to find $N'$ on the drawing.

Parallel projection preserves collinearity, intersections and ratios of lengths of segments on the same line. Since $M$ is the midpoint of $CD$, $M'$ is the midpoint of $C'D'$. Since $N$ is the intersection of $AM$ and $BD$, $N'$ is the intersection of $A'M'$ and $B'D'$. Since $\dfrac{BN}{ND}=2$, we get $\dfrac{B'N'}{N'D'}=2$, that is $B'N'=2N'D'$.

So $BN=2ND$; on the drawing, take $M'$ as the midpoint of $C'D'$ and then $N'$ as the intersection of $A'M'$ with $B'D'$, and then $B'N'=2N'D'$.

**Answer.** $BN=2ND$; $N'=A'M'\cap B'D'$ where $M'$ is the midpoint of $C'D'$, and $B'N'=2N'D'$.
:::

## Mini test

:::quiz
::mc NB
Parallel projection maps three collinear points to
A. three coincident points.
B. three non-collinear points.
C. three collinear points in the same order.
D. two points.
::key C
Collinearity and the order of points are preserved (property 3).

::mc TH
Take a triangle $ABC$ with centroid $G$. The parallel projection of $G$ is
A. the circumcentre of triangle $A'B'C'$.
B. the orthocentre of triangle $A'B'C'$.
C. the midpoint of a side.
D. the centroid of triangle $A'B'C'$.
::key D
Parallel projection preserves midpoints and ratios, so it preserves the centroid. The circumcentre and orthocentre are not preserved because they depend on right angles and lengths.

::mc TH
Three collinear points $A$, $B$, $C$ satisfy $AB=2BC$. Their parallel projection has $A'B'=8$. Then $B'C'$ equals
A. $4$.
B. $16$.
C. $2$.
D. $6$.
::key A
$\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}=2$, so $B'C'=4$. Option B writes the ratio the wrong way round.

::mc TH
Which of the following cannot be the drawing of a square?
A. A parallelogram.
B. A trapezium that is not a parallelogram.
C. A square.
D. A rectangle.
::key B
A square has two pairs of parallel opposite sides, so its drawing also has two pairs of parallel opposite sides, that is a parallelogram (including rectangles, rhombuses and squares).

::tf VD VD TH TH
At the same moment, a vertical pole $6$ m tall casts a shadow $4.5$ m long. Decide whether each statement is true or false.
a) A person $1.6$ m tall standing upright casts a shadow $1.5$ m long.
b) A vertical tree with a shadow $9$ m long is $12$ m tall.
c) The ratio of height to shadow depends on the particular object.
d) A vertical object twice as tall has a shadow twice as long.
::key F T F T
The ratio of height to shadow is $\dfrac{6}{4.5}=\dfrac43$. a) False: a person $1.6$ m tall has a shadow $\dfrac{1.6\cdot4.5}{6}=1.2$ m long. b) True: $9\cdot\dfrac43=12$. c) False: the ratio is the same for every vertical object. d) True.

::sa VD
At the same moment, a stake $2$ m tall casts a shadow $1.5$ m long. A vertical tree casts a shadow $9$ m long. How tall is the tree, in metres?
::key 12
$h=\dfrac{9\cdot2}{1.5}=12$ m.

::sa TH
Three collinear points $A$, $B$, $C$ satisfy $AB=3BC$. Their parallel projection has $A'B'=9$. Find $B'C'$.
::key 3
$\dfrac{A'B'}{B'C'}=3$, so $B'C'=\dfrac93=3$.
:::
