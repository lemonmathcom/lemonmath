---
title: Concurrency of the three medians and the three angle bisectors of a triangle
description: Meet the centroid of a triangle with the property AG = 2/3 AM, and the meeting point of the three angle bisectors, the point equidistant from the three sides.
minutes: 20
---

:::goals
- Recognise the medians and the angle bisectors of a triangle.
- Know that the three medians meet at the centroid and use the property $AG=\dfrac23AM$.
- Know that the three angle bisectors meet at a point that is equidistant from the three sides.
- Solve problems about lengths and angle sizes using these properties.
:::

Hoa cuts out a triangle of card and wants to hold it up on one fingertip so that it stays level without tipping. Where in the triangle is that point?

Another question: Mr Nam wants to put a lamp post on a triangular plot of land so that the post is the same distance from all three sides of the plot. Where should the post go? These two questions have two different answers, and we will find both in this lesson.

## Medians and the centroid

### Explore: three segments that meet at one point

You know from earlier lessons that a triangle has three sides and each side has a midpoint. Joining each vertex to the midpoint of the opposite side gives a segment called a **median**.

On a square grid, triangle $ABC$ has $A(0; 0)$, $B(9; 0)$, $C(3; 6)$. Let $M$, $N$, $P$ be the midpoints of $BC$, $CA$, $AB$ respectively. We draw the three medians $AM$, $BN$, $CP$.

:::diagram The three medians of triangle $ABC$
alt: Triangle ABC on a square grid with the three medians AM, BN, CP meeting at the point G
grid
point A 0,0 below-left
point B 9,0 below-right
point C 3,6 above
point M 6,3 right
point N 1.5,3 left
point P 4.5,0 below
point G 4,2 below
polygon A B C
segment A M
segment B N
segment C P
:::

The three medians meet at the same point $G$. We count squares to compare the parts of the same median:

| Segment | Across | Up or down |
|---|---|---|
| $AG$ (from $A$ to $G$) | $4$ squares | $2$ squares |
| $GM$ (from $G$ to $M$) | $2$ squares | $1$ square |
| $BG$ (from $B$ to $G$) | $5$ squares | $2$ squares |
| $GN$ (from $G$ to $N$) | $2.5$ squares | $1$ square |

The segment $AG$ covers twice as many squares as $GM$, so $AG=2GM$. The segment $BG$ also covers twice as many squares as $GN$, so $BG=2GN$.

:::definition Median and centroid
A **median** of a triangle is the segment joining a vertex to the midpoint of the opposite side.

The three medians of a triangle pass through one point. That point is called the **centroid** of the triangle.
:::

:::theorem Property of the three medians
Let triangle $ABC$ have centroid $G$ and median $AM$. Then
$$AG=\frac23AM,\qquad GM=\frac13AM,\qquad AG=2GM.$$
The same holds for the other two medians.
:::

We accept this property without proof. The grid example shows it is reasonable: the part from the vertex to $G$ is twice as long as the part from $G$ to the midpoint.

So the centroid is the point Hoa is looking for. With her fingertip exactly at $G$, the card balances.

## Angle bisectors and the point equidistant from the three sides

You know that the bisector of an angle splits the angle into two equal angles. In triangle $ABC$, if the bisector of angle $A$ meets side $BC$ at $D$, the segment $AD$ is called the **angle bisector** from vertex $A$.

A point on the bisector of an angle is equidistant from the two arms of the angle. "Equidistant" means the two distances are equal, and the distance from a point to a line is the length of the perpendicular from the point to the line.

:::theorem Property of the three angle bisectors
The three angle bisectors of a triangle pass through one point $I$. The point $I$ lies inside the triangle and is equidistant from the three sides of the triangle.
:::

Here is why $I$ is equidistant from the three sides. Let $IP$, $IQ$, $IR$ be the distances from $I$ to $AB$, $AC$, $BC$. Since $I$ lies on the bisector of angle $A$, $IP=IQ$. Since $I$ lies on the bisector of angle $B$, $IP=IR$. Therefore $IP=IQ=IR$.

:::diagram The three angle bisectors of triangle $ABC$ with a right angle at $A$
alt: Triangle ABC with a right angle at A; the three angle bisectors meet at I, and the three perpendiculars from I to the sides have equal lengths
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
point D 1.7143,1.7143 right
point E 0,1.3333 left
point F 1.5,0 below
point I 1,1 above-right
point P 1,0 ""
point Q 0,1 ""
point R 1.6,1.8 ""
polygon A B C
segment A D
segment B E
segment C F
segment I P dashed
segment I Q dashed
segment I R dashed
mark I P 1
mark I Q 1
mark I R 1
right I P B
right I Q C
right I R C
:::

The figure shows that the three perpendiculars from $I$ have the same length. So Mr Nam's lamp post should go at $I$, where the three angle bisectors meet.

## Examples

We start with a simple length calculation.

:::example Find $AG$ and $GM$
Triangle $ABC$ has centroid $G$ and median $AM=12$ cm. Find $AG$ and $GM$.

**Solution.** Use $AG=\dfrac23AM$ and $GM=\dfrac13AM$:

$$AG=\frac23\cdot12=8\ \text{(cm)},\qquad GM=\frac13\cdot12=4\ \text{(cm)}.$$

So $AG=8$ cm and $GM=4$ cm.

**Check.** $AG+GM=8+4=12$ and $AG=2GM$.
:::

Now the question gives the short part and asks for the long part.

:::example Find $BG$ and $BN$
Triangle $ABC$ has centroid $G$ and median $BN$. Given $GN=5$ cm, find $BG$ and $BN$.

**Solution.** Since $G$ is the centroid, $BG=2GN$:

$$BG=2\cdot5=10\ \text{(cm)},\qquad BN=BG+GN=10+5=15\ \text{(cm)}.$$

So $BG=10$ cm and $BN=15$ cm.
:::

We use this property to answer Hoa's question.

:::example Where to put the fingertip
Hoa's card is an isosceles triangle $ABC$ with $AB=AC$ and base $BC=10$ cm. Let $M$ be the midpoint of $BC$; Hoa measures the median $AM=12$ cm. Her fingertip must go at the centroid $G$. How many centimetres is $G$ from the side $BC$?

**Solution.** From the lesson on isosceles triangles, you know that the median to the base is also perpendicular to the base, that is $AM\perp BC$. The centroid $G$ lies on $AM$ with $GM=\dfrac13AM$:

$$GM=\frac13\cdot12=4\ \text{(cm)}.$$

Since $AM\perp BC$, $GM$ is the distance from $G$ to $BC$. So $G$ is $4$ cm from $BC$.
:::

Turning to angle bisectors, we look at distances.

:::example Distances to the three sides
In triangle $ABC$, the three angle bisectors meet at $I$. Draw $IH\perp AB$, $IK\perp BC$, $IL\perp CA$. Given $IH=3$ cm, find $IK$ and $IL$.

**Solution.** $I$ is where the three angle bisectors meet, so $I$ is equidistant from the three sides:

$$IH=IK=IL=3\ \text{(cm)}.$$

So $IK=3$ cm and $IL=3$ cm.
:::

Last, we find an angle at the point $I$.

:::example Find the angle $\widehat{BIC}$
Triangle $ABC$ has $\widehat{A}=70^\circ$ and $\widehat{B}=50^\circ$. The bisectors of angles $B$ and $C$ meet at $I$. Find $\widehat{BIC}$.

**Solution.** First find angle $C$ from the angle sum of the triangle:

$$\widehat{C}=180^\circ-70^\circ-50^\circ=60^\circ.$$

$BI$ and $CI$ are bisectors, so the angles at $B$ and $C$ are halved:

$$\widehat{IBC}=\frac{50^\circ}{2}=25^\circ,\qquad \widehat{ICB}=\frac{60^\circ}{2}=30^\circ.$$

In triangle $IBC$, the three angles add up to $180^\circ$:

$$\widehat{BIC}=180^\circ-25^\circ-30^\circ=125^\circ.$$

So $\widehat{BIC}=125^\circ$.
:::

:::warning Common mistakes
- **Mixing up $\dfrac13$ and $\dfrac23$.** Wrong: $G$ is the centroid and $AM=18$ cm, so $AG=\dfrac13\cdot18=6$ cm. Why it is wrong: $AG$ is the longer part, from the vertex to $G$. Right: $AG=\dfrac23\cdot18=12$ cm and $GM=6$ cm.
- **Confusing the centroid with the point equidistant from the sides.** Wrong: "The centroid is equidistant from the three sides of the triangle". Why it is wrong: the point equidistant from the three sides is where the three angle bisectors meet. Right: the centroid is where the three medians meet.
- **Halving a side versus halving an angle.** Wrong: a median halves the angle at the vertex. Why it is wrong: a median halves the opposite side. Right: it is the angle bisector that halves the angle.
- **Forgetting to subtract from $180^\circ$.** Wrong: $\widehat{BIC}=\dfrac{\widehat B}{2}+\dfrac{\widehat C}{2}$. Why it is wrong: that is only the sum of two angles of triangle $IBC$. Right: $\widehat{BIC}=180^\circ-\dfrac{\widehat B}{2}-\dfrac{\widehat C}{2}$.
:::

## Key terms

:::terms
- median | đường trung tuyến
- centroid | trọng tâm
- midpoint | trung điểm
- angle bisector | đường phân giác
- concurrent (meeting at one point) | đồng quy
- equidistant | cách đều
- perpendicular distance from a point to a line | khoảng cách từ điểm đến đường thẳng
- bisector (ray) | tia phân giác
:::

## Summary

- A median joins a vertex to the midpoint of the opposite side. The three medians meet at the centroid $G$.
- For the median $AM$: $AG=\dfrac23AM$, $GM=\dfrac13AM$, $AG=2GM$.
- The three angle bisectors meet at $I$, a point equidistant from the three sides of the triangle.
- The point $I$ lies inside the triangle and $\widehat{BIC}=180^\circ-\dfrac{\widehat B}{2}-\dfrac{\widehat C}{2}$.
- The centroid gives balance; the meeting point of the three bisectors gives equal distances to the three sides.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ has centroid $G$ and median $AM=15$ cm.

a) Write the ratio $\dfrac{AG}{AM}$.

b) Find $AG$ and $GM$.

::hint
**What you need:** $AG=\dfrac23AM$ and $GM=\dfrac13AM$.

**Steps:**
1. Write the ratio using the property of the three medians.
2. Multiply $15$ by $\dfrac23$, then by $\dfrac13$.

::solution
a) $\dfrac{AG}{AM}=\dfrac23$.

b) $AG=\dfrac23\cdot15=10$ (cm), $GM=\dfrac13\cdot15=5$ (cm).

**Answer.** a) $\dfrac23$; b) $AG=10$ cm, $GM=5$ cm.
:::

:::exercise
Triangle $ABC$ has centroid $G$ and median $BN$. Given $BG=14$ cm, find $GN$ and $BN$.

::hint
**What you need:** $BG=2GN$ and $BN=BG+GN$.

**Steps:**
1. Find $GN$ from $BG$.
2. Add $BG$ and $GN$.

::solution
$GN=BG\div2=14\div2=7$ (cm). $BN=14+7=21$ (cm).

**Check.** $BG=\dfrac23\cdot21=14$.

**Answer.** $GN=7$ cm, $BN=21$ cm.
:::

:::exercise
In triangle $ABC$, the three angle bisectors meet at $I$. The distance from $I$ to side $AB$ is $4$ cm.

a) What is the distance from $I$ to side $BC$?

b) What is the distance from $I$ to side $CA$?

::hint
**What you need:** the meeting point of the three angle bisectors is equidistant from the three sides of the triangle.

**Steps:**
1. Name the three distances from $I$ to the three sides.
2. Compare the three distances.

::solution
Since $I$ is where the three angle bisectors meet, $I$ is equidistant from the three sides. So the distances from $I$ to $BC$ and to $CA$ are both $4$ cm.

**Answer.** a) $4$ cm; b) $4$ cm.
:::

:::exercise
Triangle $ABC$ has $\widehat B=64^\circ$ and $\widehat C=56^\circ$. The bisectors of angles $B$ and $C$ meet at $I$.

a) Find $\widehat A$.

b) Find $\widehat{IBC}$ and $\widehat{ICB}$.

c) Find $\widehat{BIC}$.

::hint
**What you need:** the three angles of a triangle add up to $180^\circ$; a bisector halves an angle.

**Steps:**
1. Find $\widehat A$ from the angle sum.
2. Halve $\widehat B$ and $\widehat C$.
3. Use the angle sum of triangle $IBC$.

::solution
a) $\widehat A=180^\circ-64^\circ-56^\circ=60^\circ$.

b) $\widehat{IBC}=64^\circ\div2=32^\circ$, $\widehat{ICB}=56^\circ\div2=28^\circ$.

c) $\widehat{BIC}=180^\circ-32^\circ-28^\circ=120^\circ$.

**Answer.** a) $60^\circ$; b) $32^\circ$ and $28^\circ$; c) $120^\circ$.
:::

:::exercise
For each task below, do you need the medians or the angle bisectors? Why?

a) Placing a well on a triangular plot of land so that the well is equidistant from the three sides of the plot.

b) Finding the point where one fingertip can hold a triangle of card level.

::hint
**What you need:** the three bisectors meet at the point equidistant from the three sides; the three medians meet at the centroid.

**Steps:**
1. Which task needs "equidistant from the three sides"?
2. Which task needs the centroid?

::solution
a) Use the three angle bisectors. Their meeting point $I$ is equidistant from the three sides of the plot.

b) Use the three medians. They meet at the centroid, where the card balances.

**Answer.** a) the angle bisectors; b) the medians.
:::

:::exercise
Find the mistake in the solution and correct it.

Question: triangle $ABC$ has centroid $G$ and median $AM=18$ cm. Find $AG$.

Binh's solution: "$AG=\dfrac13AM=\dfrac13\cdot18=6$ cm."

::hint
**What you need:** $AG$ is the longer part, from the vertex to the centroid: $AG=2GM$.

**Steps:**
1. Which segment did Binh actually find?
2. Redo it with the correct fraction.

::solution
Binh used $\dfrac13$ by mistake. The $6$ cm he found is really $GM$, the part from $G$ to the midpoint $M$. Done correctly: $AG=\dfrac23\cdot18=12$ (cm).

**Check.** $AG=2GM=2\cdot6=12$.

**Answer.** $AG=12$ cm.
:::

:::exercise
Hoa cuts out an isosceles triangle of card $ABC$ with $AB=AC$ and base $BC=16$ cm. Let $M$ be the midpoint of $BC$; Hoa measures $AM=15$ cm. She holds the card up at the centroid $G$.

a) Find $AG$ and $GM$.

b) Find the distance from $G$ to $BC$.

::hint
**What you need:** $AG=\dfrac23AM$, $GM=\dfrac13AM$; in an isosceles triangle, the median to the base is perpendicular to the base.

**Steps:**
1. Find $AG$ and $GM$ from $AM=15$ cm.
2. Explain why $GM$ is the distance from $G$ to $BC$.

::solution
a) $AG=\dfrac23\cdot15=10$ (cm), $GM=\dfrac13\cdot15=5$ (cm).

b) Triangle $ABC$ is isosceles with apex $A$, so the median $AM$ is perpendicular to $BC$. Therefore the distance from $G$ to $BC$ is $GM=5$ cm.

**Answer.** a) $AG=10$ cm, $GM=5$ cm; b) $5$ cm.
:::

:::exercise
Revise the last lesson (the relationship between the three sides of a triangle). Which of these sets of three lengths can be the sides of a triangle?

a) $5$ cm, $7$ cm, $11$ cm.

b) $4$ cm, $9$ cm, $13$ cm.

c) $8$ cm, $8$ cm, $15$ cm.

::hint
**What you need:** in a triangle, the sum of any two sides is greater than the third side.

**Steps:**
1. Add the two shortest sides.
2. Compare with the longest side.

::solution
a) $5+7=12>11$: yes.

b) $4+9=13$, which is not greater than $13$: no.

c) $8+8=16>15$: yes.

**Answer.** a) yes; b) no; c) yes.
:::

:::exercise Challenge
In triangle $ABC$, the two medians $BN$ and $CP$ meet at $G$. Given $BN=18$ cm and $CP=12$ cm:

a) Find $BG$ and $CG$.

b) Use the triangle inequality in triangle $GBC$ to find the range of possible values of $BC$.

c) Can $BC$ be $3$ cm?

::hint
**What you need:** $BG=\dfrac23BN$, $CG=\dfrac23CP$; in triangle $GBC$: $|BG-CG|<BC<BG+CG$.

**Steps:**
1. Find $BG$ and $CG$.
2. Work out $BG+CG$ and $BG-CG$.
3. Compare $3$ with the range you found.

::solution
a) $BG=\dfrac23\cdot18=12$ (cm), $CG=\dfrac23\cdot12=8$ (cm).

b) $BG+CG=20$ and $BG-CG=4$, so $4<BC<20$.

c) No, because $3<4$.

**Answer.** a) $BG=12$ cm, $CG=8$ cm; b) $4$ cm $<BC<20$ cm; c) no.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has centroid $G$ and median $AM=21$ cm. The length $AG$ is
A. $7$ cm.
B. $10.5$ cm.
C. $14$ cm.
D. $42$ cm.
::key C
$AG=\dfrac23\cdot21=14$ cm. Option A is $\dfrac13AM$, B is $\dfrac12AM$.

::mc
Triangle $ABC$ has centroid $G$ and median $BN$. Given $GN=6$ cm, the length $BN$ is
A. $12$ cm.
B. $18$ cm.
C. $9$ cm.
D. $24$ cm.
::key B
$BG=2GN=12$ cm, so $BN=12+6=18$ cm. Option A is only $BG$, without adding $GN$.

::mc
The three angle bisectors of triangle $ABC$ meet at $I$. Which statement is true?
A. $I$ is always the midpoint of each angle bisector.
B. $I$ is equidistant from the three sides of the triangle.
C. $I$ divides each angle bisector in the ratio $2:1$ from the vertex.
D. $I$ can lie outside the triangle.
::key B
The point $I$ lies inside the triangle and is equidistant from the three sides. Option C is a property of the centroid, not of the meeting point of the bisectors.

::mc
Triangle $ABC$ has $\widehat A=80^\circ$. The bisectors of angles $B$ and $C$ meet at $I$. The size of $\widehat{BIC}$ is
A. $50^\circ$.
B. $100^\circ$.
C. $130^\circ$.
D. $140^\circ$.
::key C
$\widehat B+\widehat C=100^\circ$, so $\widehat{IBC}+\widehat{ICB}=50^\circ$ and $\widehat{BIC}=180^\circ-50^\circ=130^\circ$. Option A forgets to subtract from $180^\circ$.

::tf
Triangle $ABC$ has centroid $G$ and median $AM=9$ cm.
a) The point $G$ lies inside triangle $ABC$.
b) $AG=6$ cm.
c) $GM=4.5$ cm.
d) $AG=2GM$.
::key T T F T
a) True: the three medians meet inside the triangle. b) True: $\dfrac23\cdot9=6$. c) False: $GM=\dfrac13\cdot9=3$ cm. d) True: $6=2\cdot3$.

::sa
Triangle $ABC$ has centroid $G$ and median $CP=24$ cm. Find $CG$ (in cm).
::key 16
$CG=\dfrac23\cdot24=16$ cm.

::sa
Triangle $ABC$ has $\widehat B=70^\circ$ and $\widehat C=40^\circ$. The bisectors of angles $B$ and $C$ meet at $I$. Find the size of $\widehat{BIC}$ (in degrees).
::key 125
$\widehat{IBC}=35^\circ$, $\widehat{ICB}=20^\circ$, so $\widehat{BIC}=180^\circ-35^\circ-20^\circ=125^\circ$.
:::
