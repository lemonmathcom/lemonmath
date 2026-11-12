---
title: Line segments. Length of a line segment. Midpoint of a line segment
description: Recognise line segments and their endpoints, compare segments, add lengths when a point lies between two points, and find the midpoint of a segment.
minutes: 30
---

:::goals
- Recognise a line segment and its two endpoints; name the segments in a figure.
- Compare two line segments by their lengths.
- Use the equality $AM+MB=AB$ (when $M$ lies between $A$ and $B$) to find lengths.
- Recognise the midpoint of a segment and work out the lengths of the related segments.
:::

Minh has a wooden stick and wants to saw it exactly in the middle to make two equal shelf legs. He has no ruler, only a piece of string. Minh lays the string along the stick, cuts it to the same length as the stick, and folds the string in half. Laying the folded string on the stick from one end, he marks where the fold is. That is the middle of the stick.

This clever trick rests on the two ideas of today's lesson: the length of a line segment and the midpoint of a line segment.

## Line segments

Unlike a line, which goes on for ever in both directions, the edge of a table, the side of a notebook and Minh's stick all have two ends. They are pictures of a **line segment**.

:::definition Line segment
**Line segment $AB$** is the figure made of the two points $A$, $B$ and all the points between $A$ and $B$. The points $A$, $B$ are called the two **endpoints** of segment $AB$.
:::

:::diagram Segment $AB$ and a point $M$ between $A$ and $B$
alt: A horizontal segment with endpoints A and B; point M lies on the segment, between A and B
point A 0,0 below
point M 2,0 below
point B 6,0 below
segment A B
:::

Segment $AB$ is also called segment $BA$. To tell them apart: line $AB$ has no start and no end; ray $AB$ has one starting point, $A$; segment $AB$ has two ends, $A$ and $B$.

## Length of a line segment

Every line segment has a **length**, which is a positive number. We measure the length with a ruler marked in units, for example $AB=6$ cm. The length of segment $AB$ is also the **distance** between points $A$ and $B$.

Using lengths, we compare two segments: segments $AB$ and $CD$ are **equal** if $AB=CD$; segment $AB$ is **shorter** than segment $CD$ if $AB<CD$.

:::theorem Adding lengths
If point $M$ lies between points $A$ and $B$, then
$$AM+MB=AB.$$
:::

This is very natural: going from $A$ to $M$ and then from $M$ to $B$ is the same as going the whole of $AB$. From this equality, if we know two of the three lengths, we can find the third.

:::note Two points on the same ray
On ray $Ox$, take two points $A$ and $B$ with $OA<OB$. Then $A$ lies between $O$ and $B$, so $OA+AB=OB$, that is, $AB=OB-OA$.
:::

## Midpoint of a line segment

:::definition Midpoint
Point $M$ is called the **midpoint** of segment $AB$ if $M$ lies between $A$ and $B$ and $MA=MB$.
:::

:::diagram $M$ is the midpoint of segment $AB$
alt: Segment AB with point M exactly in the middle; segments MA and MB carry the same tick mark, showing they are equal in length
point A 0,0 below
point M 3,0 below
point B 6,0 below
segment A B
mark A M 1
mark M B 1
:::

Since $MA+MB=AB$ and $MA=MB$,
$$MA=MB=\dfrac{AB}{2}.$$

The midpoint is the **middle point** of the segment. Every segment has exactly one midpoint. Minh's folded string is one way to find a midpoint: the fold splits the string into two equal parts.

Remember both conditions. A point at the same distance from $A$ and from $B$ but not on segment $AB$ (for example the vertex $C$ of a triangle with $CA=CB$) is not the midpoint of $AB$.

## Examples

We start by naming segments.

:::example Counting segments
Three points $A$, $B$, $C$ are collinear, and $B$ lies between $A$ and $C$. How many segments have two of these points as endpoints? Name them.

**Solution.**

A segment is fixed by its two endpoints. From the three points $A$, $B$, $C$ we can choose three pairs: $A$ and $B$; $B$ and $C$; $A$ and $C$.

So there are $3$ segments: $AB$, $BC$, $AC$.

**Remark.** Unlike lines (three collinear points give only one line), the three segments $AB$, $BC$, $AC$ are three different figures with different lengths.
:::

Using the adding-lengths equality, we find a missing length.

:::example Finding a length
Point $C$ lies between points $A$ and $B$, with $AC=3$ cm and $AB=8$ cm. Find the length of segment $CB$.

**Solution.**

Since $C$ lies between $A$ and $B$,
$$AC+CB=AB.$$

Putting in $AC=3$ cm and $AB=8$ cm gives $3+CB=8$, so
$$CB=8-3=5\ (\text{cm}).$$

So $CB=5$ cm.
:::

To compare segments, use the same unit.

:::example Comparing segments
$AB=4$ cm, $CD=4.5$ cm, $EF=40$ mm. Compare these segments.

**Solution.**

Change $EF=40$ mm $=4$ cm.

We have $AB=4$ cm, $EF=4$ cm and $CD=4.5$ cm. Since $4=4<4.5$,
$$AB=EF<CD.$$

So segment $AB$ is equal to segment $EF$, and both are shorter than segment $CD$.
:::

With midpoints, we work in both directions.

:::example Midpoint of a segment
a) $M$ is the midpoint of segment $AB$, with $AB=7$ cm. Find $MA$ and $MB$.

b) $I$ is the midpoint of segment $PQ$, with $IP=2.5$ cm. Find $PQ$.

**Solution.**

a) Since $M$ is the midpoint of $AB$,
$$MA=MB=\dfrac{AB}{2}=\dfrac{7}{2}=3.5\ (\text{cm}).$$

b) Since $I$ is the midpoint of $PQ$, we have $IQ=IP=2.5$ cm and $I$ lies between $P$ and $Q$. Hence
$$PQ=IP+IQ=2.5+2.5=5\ (\text{cm}).$$

So a) $MA=MB=3.5$ cm; b) $PQ=5$ cm.
:::

Finally, a problem on a straight road.

:::example Placing a health centre
Three villages $A$, $B$, $C$ lie on a straight road, with village $B$ between villages $A$ and $C$. Village $A$ is $1.2$ km from village $B$ and $3$ km from village $C$. A health centre $M$ is built exactly halfway between villages $A$ and $C$. How many kilometres is the health centre from village $B$?

**Solution.**

*Understand.* The four points $A$, $B$, $M$, $C$ lie on one line. The centre $M$ is the midpoint of segment $AC$. We need the length of segment $MB$.

*Plan.* Find $AM$ from $AC$. Compare $AM$ with $AB$ to see whether $B$ lies between $A$ and $M$ or $M$ lies between $A$ and $B$, then subtract.

*Solve.* Since $M$ is the midpoint of $AC$,
$$AM=\dfrac{AC}{2}=\dfrac{3}{2}=1.5\ (\text{km}).$$

Points $B$ and $M$ both lie on ray $AC$, and $AB=1.2<1.5=AM$, so $B$ lies between $A$ and $M$. Hence $AB+BM=AM$, so
$$BM=AM-AB=1.5-1.2=0.3\ (\text{km}).$$

So the health centre is $0.3$ km, that is, $300$ m, from village $B$.

*Look back.* Check: $MC=1.5$ km; from $B$ to $C$ is $3-1.2=1.8$ km, and $BM+MC=0.3+1.5=1.8$ km. The lengths agree.
:::

:::warning Common mistakes
- **Adding lengths before knowing which point is between.** Wrong: $AB=5$ cm, $BC=3$ cm, so $AC=8$ cm. Why it is wrong: that is only true if $B$ lies between $A$ and $C$; if $C$ lies between $A$ and $B$, then $AC=2$ cm. Right: decide which point is between first, then add or subtract (see the Challenge exercise).
- **Thinking any point at equal distances from the ends is the midpoint.** Wrong: $MA=MB$, so $M$ is the midpoint of $AB$. Why it is wrong: $M$ must also lie between $A$ and $B$. Right: a midpoint must satisfy both conditions.
- **Comparing before changing units.** Wrong: $EF=40$ mm is longer than $CD=4.5$ cm because $40>4.5$. Why it is wrong: millimetres and centimetres are different units. Right: $40$ mm $=4$ cm $<4.5$ cm.
- **Mixing up a segment and a line.** Wrong: "segment $AB$ goes on for ever in both directions". Why it is wrong: that is line $AB$. Right: segment $AB$ is just $A$, $B$ and the points between them.
:::

## Key terms

:::terms
- line segment | đoạn thẳng
- endpoint | mút (đầu mút)
- length of a segment | độ dài đoạn thẳng
- distance | khoảng cách
- equal | bằng nhau
- shorter, longer | ngắn hơn, dài hơn
- midpoint | trung điểm
- midpoint (middle point) | điểm chính giữa
:::

## Summary

- Segment $AB$ is made of $A$, $B$ and every point between $A$ and $B$; $A$, $B$ are its endpoints.
- Every segment has a positive length; compare two segments by comparing their lengths (in the same unit).
- If $M$ lies between $A$ and $B$, then $AM+MB=AB$. On ray $Ox$, if $OA<OB$, then $AB=OB-OA$.
- $M$ is the midpoint of $AB$ when $M$ lies between $A$, $B$ and $MA=MB$; then $MA=MB=\dfrac{AB}{2}$.

Minh's folded string finds the midpoint because the fold splits the string into two equal parts, exactly as the definition says. You can try it right now with a strip of paper or a piece of thread. In the next lesson we move on to a new figure made by two rays: [angles and how to measure them](lesson:intro-to-angles). If you need to revise rays and points between points, see [Points and lines](lesson:points-and-lines).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Four points $A$, $B$, $C$, $D$ are collinear, in that order. How many segments have two of these points as endpoints? Name them.

::hint
**What you need:** each pair of points gives one segment.

**Steps:**
1. List the segments with endpoint $A$, then $B$, … without repeats.
2. Count.

::solution
Each pair of points gives one segment. We list them without repeats:

With endpoint $A$: $AB$, $AC$, $AD$.

With endpoint $B$ (leaving out $AB$): $BC$, $BD$.

With endpoint $C$ (leaving out those already listed): $CD$.

So there are $3+2+1=6$ segments: $AB$, $AC$, $AD$, $BC$, $BD$, $CD$.

**Answer.** $6$ segments.
:::

:::exercise
Point $M$ lies between points $A$ and $B$, with $AM=4.5$ cm and $MB=3.5$ cm. Find the length of segment $AB$.

::hint
**What you need:** if $M$ lies between $A$ and $B$, then $AM+MB=AB$.

**Steps:**
1. Write the adding-lengths equality.
2. Put in the numbers and calculate.

::solution
Since $M$ lies between $A$ and $B$,
$$AB=AM+MB=4.5+3.5=8\ (\text{cm}).$$

So $AB=8$ cm.

**Answer.** $8$ cm.
:::

:::exercise
Point $C$ lies between points $A$ and $B$, with $AB=10$ cm and $AC=6$ cm. Find the length of segment $CB$. Compare $AC$ and $CB$.

::hint
**What you need:** $AC+CB=AB$.

**Steps:**
1. Work out $CB=AB-AC$.
2. Compare the two numbers.

::solution
Since $C$ lies between $A$ and $B$, $AC+CB=AB$, so
$$CB=AB-AC=10-6=4\ (\text{cm}).$$

Since $6>4$, $AC>CB$.

So $CB=4$ cm, and segment $AC$ is longer than segment $CB$.

**Answer.** $CB=4$ cm; $AC>CB$.
:::

:::exercise
On ray $Ox$, take two points $A$ and $B$ such that $OA=3$ cm and $OB=7$ cm.

a) Of the three points $O$, $A$, $B$, which one lies between the other two?

b) Find the length of segment $AB$.

c) Is $A$ the midpoint of segment $OB$? Why?

::hint
**What you need:** on ray $Ox$, if $OA<OB$, then $A$ lies between $O$ and $B$.

**Steps:**
1. Compare $OA$ and $OB$.
2. Work out $AB=OB-OA$ and compare it with $OA$.

::solution
a) Points $A$, $B$ both lie on ray $Ox$ and $OA<OB$ ($3<7$), so point $A$ lies between $O$ and $B$.

b) Since $A$ lies between $O$ and $B$, $OA+AB=OB$, so
$$AB=OB-OA=7-3=4\ (\text{cm}).$$

c) We have $OA=3$ cm and $AB=4$ cm, so $OA\ne AB$. Hence $A$ is not the midpoint of $OB$.

So a) point $A$; b) $AB=4$ cm; c) no, because $OA\ne AB$.

**Answer.** a) $A$; b) $4$ cm; c) no.
:::

:::exercise
$I$ is the midpoint of segment $PQ$, with $PQ=9$ cm. Find $IP$ and $IQ$.

::hint
**What you need:** $IP=IQ=\dfrac{PQ}{2}$.

**Steps:**
1. Write the formula.
2. Put in the number.

::solution
Since $I$ is the midpoint of $PQ$,
$$IP=IQ=\dfrac{PQ}{2}=\dfrac{9}{2}=4.5\ (\text{cm}).$$

So $IP=IQ=4.5$ cm.

**Answer.** $IP=IQ=4.5$ cm.
:::

:::exercise
The road from city $A$ to city $B$ is $120$ km long, with a rest stop $M$ exactly halfway. A coach leaves $A$ towards $B$ and has travelled $45$ km. How many more kilometres must it travel to reach the rest stop?

::hint
**What you need:** the rest stop $M$ is the midpoint of segment $AB$.

**Steps:**
1. Find $AM$.
2. Subtract the distance already travelled from $AM$.

::solution
Let $C$ be the coach's present position. Since $M$ is the midpoint of $AB$,
$$AM=\dfrac{AB}{2}=\dfrac{120}{2}=60\ (\text{km}).$$

Points $C$ and $M$ both lie on ray $AB$ and $AC=45<60=AM$, so $C$ lies between $A$ and $M$. Hence
$$CM=AM-AC=60-45=15\ (\text{km}).$$

So the coach must travel another $15$ km to reach the rest stop.

**Answer.** $15$ km.
:::

:::exercise
Lan has an aluminium bar $1.6$ m long but no ruler. She has a long enough piece of string and a pair of scissors. Show Lan how to mark the midpoint of the bar, and say how long each half of the bar is.

::hint
**What you need:** the midpoint splits a segment into two equal parts.

**Steps:**
1. Cut the string to exactly the length of the bar.
2. Fold the string in half; the fold is the midpoint of the string.

::solution
Lan does this:

She lays the string along the bar and cuts it so the string is exactly as long as the bar.

She folds the string in half so that its two ends meet. The fold splits the string into two equal parts.

She lays the folded string along the bar, with one end level with one end of the bar. Wherever the fold is, she makes a mark: that is the midpoint of the bar.

Each half of the bar is
$$\dfrac{1.6}{2}=0.8\ (\text{m}).$$

So she uses the folded string to find the midpoint; each half of the bar is $0.8$ m long.

**Answer.** Fold a string as long as the bar in half; each half is $0.8$ m.
:::

:::exercise
Segment $AB=12$ cm. $M$ is the midpoint of $AB$ and $N$ is the midpoint of $MB$. Find the length of segment $AN$.

::hint
**What you need:** $M$ lies between $A$ and $N$, so $AN=AM+MN$.

**Steps:**
1. Find $AM$ and $MB$.
2. Find $MN$, then $AN$.

::solution
Since $M$ is the midpoint of $AB$,
$$AM=MB=\dfrac{12}{2}=6\ (\text{cm}).$$

Since $N$ is the midpoint of $MB$,
$$MN=\dfrac{MB}{2}=\dfrac{6}{2}=3\ (\text{cm}).$$

Point $N$ lies on segment $MB$, so $M$ lies between $A$ and $N$. Hence
$$AN=AM+MN=6+3=9\ (\text{cm}).$$

So $AN=9$ cm.

**Answer.** $9$ cm.
:::

:::exercise Challenge
Three points $A$, $B$, $C$ are collinear, with $AB=5$ cm and $BC=3$ cm. Find the length of segment $AC$.

::hint
**What you need:** of three collinear points exactly one lies between the other two; we do not know which, so we must check each case.

**Steps:**
1. Check three cases: $B$ between, $C$ between, $A$ between.
2. Rule out the case that cannot happen.

::solution
Of three collinear points, exactly one lies between the other two. We check three cases.

*Case 1:* $B$ lies between $A$ and $C$. Then
$$AC=AB+BC=5+3=8\ (\text{cm}).$$

*Case 2:* $C$ lies between $A$ and $B$. Then $AC+CB=AB$, so
$$AC=AB-BC=5-3=2\ (\text{cm}).$$

*Case 3:* $A$ lies between $B$ and $C$. Then $BA+AC=BC$, that is, $5+AC=3$. This is impossible, since the length $AC$ must be positive. This case is ruled out.

So $AC=8$ cm or $AC=2$ cm.

**Answer.** $AC=8$ cm or $AC=2$ cm.
:::

## Mini test

:::quiz
::mc
Four collinear points are given. The number of segments with two of them as endpoints is
A. $4$.
B. $3$.
C. $6$.
D. $12$.
::key C
There are $3+2+1=6$ pairs of points. A counts the points; B counts only neighbouring segments; D counts each segment twice.

::mc
Point $M$ lies between points $A$ and $B$, with $AM=2$ cm and $AB=7$ cm. The length $MB$ is
A. $9$ cm.
B. $5$ cm.
C. $3.5$ cm.
D. $2$ cm.
::key B
$MB=AB-AM=7-2=5$ cm. A adds instead of subtracting; C treats $M$ as the midpoint; D confuses it with $AM$.

::mc
$M$ is the midpoint of segment $AB$, with $AB=9$ cm. The length $MA$ is
A. $4.5$ cm.
B. $18$ cm.
C. $9$ cm.
D. $3$ cm.
::key A
$MA=\dfrac{AB}{2}=4.5$ cm. B doubles; C confuses it with $AB$; D divides by $3$.

::mc
Point $M$ is the midpoint of segment $AB$ when
A. $MA=MB$.
B. $M$ lies between $A$ and $B$.
C. $M$ lies between $A$ and $B$ and $MA=MB$.
D. $MA+MB=AB$.
::key C
A midpoint must satisfy both conditions. A lacks the "between" condition; B and D lack the condition $MA=MB$.

::tf
On ray $Ox$, take two points $A$ and $B$ such that $OA=2$ cm and $OB=4$ cm. Decide whether each statement is true or false.
a) Point $A$ lies between points $O$ and $B$.
b) $AB=6$ cm.
c) $A$ is the midpoint of segment $OB$.
d) $B$ is the midpoint of segment $OA$.
::key T F T F
a) True: $OA<OB$. b) False: $AB=OB-OA=2$ cm. c) True: $A$ lies between $O$, $B$ and $OA=AB=2$ cm. d) False: $B$ does not lie between $O$ and $A$.

::sa
Segment $AB=10$ cm, $M$ is the midpoint of $AB$ and $N$ is the midpoint of $MB$. Find the length $AN$ in cm.
::key 7.5
$AM=MB=5$ cm, $MN=2.5$ cm, $AN=AM+MN=7.5$ cm.

::sa
On ray $Ox$, take two points $A$, $B$ such that $OA=2.5$ cm and $OB=6$ cm. Find the length $AB$ in cm.
::key 3.5
$OA<OB$, so $A$ lies between $O$ and $B$; $AB=6-2.5=3.5$ cm.
:::
