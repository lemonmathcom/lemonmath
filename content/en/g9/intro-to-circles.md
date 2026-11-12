---
title: Introducing circles
description: Learn what a circle is, decide whether a point lies inside, on or outside a circle, and use the symmetry of a circle to solve problems.
minutes: 20
---

:::goals
- State the definition of a circle, its radius and its diameter.
- Decide whether a point lies inside, on or outside a circle.
- Know that a circle has its centre as a centre of symmetry and infinitely many lines of symmetry.
:::

The PE teacher ties a $5$ m rope to the tree in the middle of the schoolyard, ties a piece of chalk to the other end, pulls the rope tight and walks all the way round to draw a line. From the tree, An walks $3$ m east and then $4$ m north; Binh walks $4$ m east, $4$ m north; Chi walks $2$ m west, $4$ m south.

Who is standing exactly on the line, who is inside the ring, and who is outside?

## The circle

### Explore: the points exactly $5$ m from the tree

The chalk always stays exactly $5$ m from the foot of the tree $O$. East and north are perpendicular, so we find each distance by Pythagoras' theorem:

| Student | An | Binh | Chi |
|---|---|---|---|
| Distance to $O$ | $\sqrt{3^2+4^2}=5$ m | $\sqrt{4^2+4^2}=\sqrt{32}$ m | $\sqrt{2^2+4^2}=\sqrt{20}$ m |

An is exactly $5$ m from $O$, so An is on the line. The line is made of every point exactly $5$ m from $O$: it is a circle.

:::definition The circle
The circle with centre $O$ and radius $R$ ($R>0$) is the figure made of all the points at distance $R$ from the point $O$. We write it as $(O, R)$, or $(O)$ when the radius does not need to be stated.
:::

A segment joining the centre to a point of the circle is also called a **radius**; a segment through the centre with both ends on the circle is a **diameter** (of length $2R$). The circle together with the region inside it is a **disc**.

## Position of a point relative to a circle

We compare the distance from the point to the centre with the radius.

:::theorem Position of a point $M$ relative to the circle $(O, R)$
- $M$ lies on the circle if and only if $OM=R$.
- $M$ lies inside the circle if and only if $OM<R$.
- $M$ lies outside the circle if and only if $OM>R$.
:::

:::diagram Three positions of a point relative to the circle $(O, R)$
alt: A circle with centre O, a point M on the circle, a point N inside it and a point P outside it
point O 0,0 below-left
point M 2.3,1.93 above-right
point N 1,-1 below
point P 4.2,-1.5 right
circle O 3
segment O M "R"
segment O N dashed
segment O P dashed
:::

Back to the opening question: $OB=\sqrt{32}\approx5.66>5$ and $OC=\sqrt{20}\approx4.47<5$, so Binh is outside the ring and Chi is inside it.

To prove that several points lie on one circle, we find one point at the same distance from all of them.

:::example The four vertices of a rectangle
The rectangle $ABCD$ has $AB=8$ cm and $BC=6$ cm, and $O$ is the point where its diagonals meet. Prove that $A$, $B$, $C$, $D$ lie on one circle. Find the radius of this circle.

**Solution.** In the triangle $ABC$, right-angled at $B$, we have $AC=\sqrt{8^2+6^2}=10$ (cm) (Pythagoras' theorem).

The diagonals of a rectangle are equal and bisect each other, hence

$$OA=OB=OC=OD=\frac{AC}{2}=5\ \text{(cm)}.$$

So $A$, $B$, $C$, $D$ lie on the circle $(O, 5\text{ cm})$.
:::

A point on the circle is exactly $R$ from the centre.

:::example A line perpendicular to $OM$
Consider the circle $(O, 13\text{ cm})$ and a point $M$ with $OM=5$ cm. The line through $M$ perpendicular to $OM$ cuts the circle at $A$ and $B$. Find $MA$.

**Solution.** We have $OA=13$ cm (because $A$ is on the circle). In the triangle $OMA$, right-angled at $M$, Pythagoras' theorem gives

$$MA=\sqrt{OA^2-OM^2}=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

So $MA=12$ cm.
:::

## The symmetry of a circle

Fold a paper disc in half along a crease through the centre, and the two halves fit exactly.

:::theorem Centre of symmetry and lines of symmetry
- A circle has its centre as a centre of symmetry.
- A circle has infinitely many lines of symmetry: every line through the centre is a line of symmetry.
:::

**Why?** If $A'$ is the reflection of $A$ in $O$, then $OA'=OA=R$. If $A''$ is the reflection of $A$ in a line $d$ through $O$, then $d$ is the perpendicular bisector of $AA''$, so $OA''=OA=R$. So $A'$ and $A''$ both lie on the circle.

:::example Finding the centre of a paper plate
Lan folds a round paper plate in half so that the two halves fit exactly, opens it, and folds it in half a different way. Explain why the point where the two creases cross is the centre of the plate.

**Solution.** Each crease is a line of symmetry, so it passes through the centre. Two different creases have only one point in common.

So the point where the creases cross is the centre of the plate.
:::

:::warning Common mistakes
- **Mixing up radius and diameter.** Wrong: "A circle with diameter $10$ cm has $R=10$ cm". Why it is wrong: the diameter is $2R$. Right: $R=5$ cm.
- **Trusting the picture.** Wrong: "In the picture $M$ touches the circle, so $M$ is on the circle". Why it is wrong: a drawing is not exact. Right: compute $OM$ and compare it with $R$.
:::

## Key terms

:::terms
- circle | đường tròn
- centre | tâm
- radius | bán kính
- diameter | đường kính
- disc | hình tròn
- line of symmetry | trục đối xứng
:::

## Summary

- The circle $(O, R)$ is made of the points exactly $R$ from $O$; a diameter has length $2R$.
- $M$ lies on, inside or outside $(O, R)$ when $OM=R$, $OM<R$ or $OM>R$.
- The centre is a centre of symmetry; every line through the centre is a line of symmetry.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Consider the circle $(O, 4\text{ cm})$ and three points $A$, $B$, $C$ with $OA=3$ cm, $OB=4$ cm and $OC=4.5$ cm. Does each point lie inside, on or outside the circle?

::hint
**What you need:** compare the distance from the centre with $R$.

**Steps:**
1. Compare $OA$, $OB$, $OC$ with $4$.

::solution
We compare the distance from the centre $O$ to each point with the radius $R=4$ cm:

- A point $M$ lies inside the circle when $OM<R$;
- A point $M$ lies on the circle when $OM=R$;
- A point $M$ lies outside the circle when $OM>R$.

Since $OA=3<4$, the point $A$ lies inside the circle.

Since $OB=4=R$, the point $B$ lies on the circle.

Since $OC=4.5>4$, the point $C$ lies outside the circle.

So $A$ lies inside, $B$ on and $C$ outside the circle $(O, 4\text{ cm})$.

**Answer.** $A$ inside, $B$ on, $C$ outside the circle.
:::

:::exercise
The square $ABCD$ has side $4$ cm. Prove that the four vertices of the square lie on one circle. Find the radius of this circle (give your answer to 2 decimal places).

::hint
**What you need:** the diagonals of a square are equal and bisect each other.

**Steps:**
1. Find $AC$ by Pythagoras' theorem.
2. Deduce that $OA=OB=OC=OD$.

::solution
We have $AC=\sqrt{4^2+4^2}=4\sqrt2$ (cm). Let $O$ be the point where the diagonals meet; then $OA=OB=OC=OD=\dfrac{AC}{2}=2\sqrt2\approx2.83$ (cm).

So the four vertices lie on the circle $(O, 2\sqrt2\text{ cm})$, with $R\approx2.83$ cm.

**Answer.** $R=2\sqrt2\approx2.83$ cm.
:::

:::exercise
Consider the circle $(O, 5\text{ cm})$ and a point $A$ on it. Let $A'$ be the reflection of $A$ in the point $O$. Prove that $A'$ lies on the circle and find $AA'$.

::hint
**What you need:** $O$ is the midpoint of $AA'$.

**Steps:**
1. Deduce that $OA'=OA$, then find $AA'$.

::solution
Since $O$ is the midpoint of $AA'$, we have $OA'=OA=5$ cm, so $A'$ lies on the circle. We have $AA'=OA+OA'=10$ cm.

So $A'$ lies on the circle and $AA'=10$ cm.

**Answer.** $AA'=10$ cm.
:::

:::exercise
A loudspeaker at $O$ can be heard clearly within a radius of $30$ m. From $O$, house $H_1$ is $18$ m east and then $24$ m north; house $H_2$: $20$ m east, $25$ m north; house $H_3$: $10$ m east, $27$ m north. Which house hears it clearly, which is exactly on the edge, and which is outside the range?

::hint
**What you need:** Pythagoras' theorem; compare with $R=30$.

**Steps:**
1. Compute $OH_1$, $OH_2$, $OH_3$ and compare them with $30$.

::solution
We have

$$OH_1=\sqrt{18^2+24^2}=30,\quad OH_2=\sqrt{1025}\approx32.0>30,\quad OH_3=\sqrt{829}\approx28.8<30.$$

So $H_3$ hears it clearly, $H_1$ is exactly on the edge and $H_2$ is outside the range.

**Answer.** $H_3$ hears it clearly; $H_1$ is on the edge; $H_2$ is outside the range.
:::

:::exercise
Minh cuts a round pizza of radius $15$ cm along a straight line through the centre. Are the two pieces equal? Find the length of the cut.

::hint
**What you need:** every line through the centre is a line of symmetry.

**Steps:**
1. Use symmetry; the cut is a diameter.

::solution
The cut passes through the centre, so it is a line of symmetry, and the two pieces fit exactly when folded. The cut is a diameter, of length $30$ cm.

So the two pieces are equal and the cut is $30$ cm long.

**Answer.** The two pieces are equal; the cut is $30$ cm long.
:::

:::exercise
Consider the circle $(O, 6\text{ cm})$ and a point $A$ on it. Take a point $M$ such that $\angle AOM=90^\circ$ and $\angle OMA=30^\circ$. Does $M$ lie inside or outside the circle? (Revise [trigonometric ratios of acute angles](lesson:acute-angle-trig-ratios).)

::hint
**What you need:** the tangent of an acute angle is the opposite side divided by the adjacent side.

**Steps:**
1. In the triangle $OMA$, right-angled at $O$, write $\tan\angle OMA$.
2. Find $OM$ and compare it with $6$.

::solution
In the triangle $OMA$, right-angled at $O$, we have $\tan\angle OMA=\dfrac{OA}{OM}$, hence

$$OM=\frac{6}{\tan30^\circ}=6\sqrt3\approx10.39\ \text{(cm)}>6\ \text{cm}.$$

So $M$ lies outside the circle.

**Answer.** $M$ lies outside the circle ($OM=6\sqrt3\approx10.39$ cm).
:::

:::exercise
**(1.5 marks)** The triangle $ABC$ is right-angled at $A$, with $AB=6$ cm and $AC=8$ cm. Let $M$ be the midpoint of $BC$.

a) Find $BC$.

b) Prove that $A$, $B$, $C$ lie on a circle with centre $M$. Find the radius of this circle.

c) Let $D$ be the reflection of $A$ in $M$. Prove that $D$ lies on the circle from part b) and that $ABDC$ is a rectangle.

::hint
**What you need:** the median to the hypotenuse is half the hypotenuse.

**Steps:**
1. Use Pythagoras' theorem, then show that $MA=MB=MC$.
2. Look at the diagonals of $ABDC$.

::solution
a) By Pythagoras' theorem, $BC=\sqrt{6^2+8^2}=10$ (cm).

b) We have $MB=MC=MA=\dfrac{BC}{2}=5$ cm (property of the median to the hypotenuse). Hence $A$, $B$, $C$ lie on the circle $(M, 5\text{ cm})$.

c) We have $MD=MA=5$ cm ($D$ is the reflection of $A$ in $M$), so $D$ lies on $(M, 5\text{ cm})$. The quadrilateral $ABDC$ has diagonals $AD=BC$ that bisect each other, so it is a rectangle.

So $BC=10$ cm, $R=5$ cm and $ABDC$ is a rectangle.

**Answer.** a) $BC=10$ cm; b) $R=5$ cm; c) $D$ lies on $(M, 5\text{ cm})$ and $ABDC$ is a rectangle.
:::

:::exercise Challenge
Consider the circle $(O, 5\text{ cm})$ and a point $M$ with $OM=3$ cm. The point $A$ moves round the circle. Find the greatest and the least value of $MA$.

::hint
**What you need:** the triangle inequality $OA-OM<MA<OA+OM$.

**Steps:**
1. Take $A$ not on the line $OM$.
2. Look at the two points where $OM$ meets the circle.

::solution
If $A$ is not on the line $OM$, the triangle $OMA$ gives $2<MA<8$. The line $OM$ cuts the circle at $A_1$ and $A_2$, with $M$ between $O$ and $A_1$; then $MA_1=2$ cm and $MA_2=8$ cm.

So the greatest value of $MA$ is $8$ cm ($A$ at $A_2$) and the least is $2$ cm ($A$ at $A_1$).

**Answer.** The greatest value of $MA$ is $8$ cm and the least is $2$ cm.
:::

## Mini test

:::quiz
::mc
Consider the circle $(O, 6\text{ cm})$ and a point $M$ with $OM=5$ cm. Which of the following statements is true?
A. $M$ lies outside the circle.
B. $M$ lies on the circle.
C. $M$ lies inside the circle.
D. $M$ is the centre of the circle.
::key C
$OM=5<6=R$. Option A compares the wrong way round.

::mc
The diameter of a circle with radius $3.5$ cm is
A. $3.5$ cm.
B. $7$ cm.
C. $1.75$ cm.
D. $12.25$ cm.
::key B
$d=2R=7$ cm. C halves instead of doubling, and D squares the radius.

::mc
How many lines of symmetry does a circle have?
A. $1$.
B. $2$.
C. $4$.
D. Infinitely many.
::key D
Every line through the centre is a line of symmetry.

::mc
The radius of the circle through the four vertices of a rectangle with sides $5$ cm and $12$ cm is
A. $13$ cm.
B. $6$ cm.
C. $8.5$ cm.
D. $6.5$ cm.
::key D
The radius is half the diagonal $\sqrt{5^2+12^2}=13$. A forgets to halve, and C takes half the sum of the sides.

::tf
Consider the circle $(O, 5\text{ cm})$, a point $A$ with $OA=5$ cm, a point $B$ with $OB=4$ cm and the point $C$, the reflection of $A$ in $O$. Decide whether each statement is true or false.
a) The point $A$ lies on the circle.
b) The point $B$ lies outside the circle.
c) $AC=10$ cm.
d) The point $C$ lies on the circle.
::key T F T T
a) True: $OA=R$. b) False: $OB<5$. c) True: $AC=2R$. d) True: $OC=OA$.

::sa
Find the radius (in cm) of the circle through the four vertices of a square with side $6$ cm (give your answer to 1 decimal place).
::key 4.2
The radius is half the diagonal: $\dfrac{6\sqrt2}{2}=3\sqrt2\approx4.2$ cm.

::sa
Consider the circle $(O, 10\text{ cm})$ and a point $M$ with $OM=6$ cm. The line through $M$ perpendicular to $OM$ cuts the circle at $A$ and $B$. Find $AB$ (in cm).
::key 16
$MA=\sqrt{10^2-6^2}=8$ cm and $MB=MA$ (symmetry in $OM$), so $AB=16$ cm.
:::
