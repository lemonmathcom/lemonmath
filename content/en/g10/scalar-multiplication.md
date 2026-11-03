---
title: Multiplying a vector by a number
description: Stretch, shrink and reverse vectors with a number, test collinearity, and use midpoint and centroid formulas to solve geometry problems.
minutes: 25
---

:::goals
- Define $k\vec{a}$ and find its direction and length.
- Use the properties of multiplication by a number to simplify vector expressions.
- Use the criteria for collinear vectors and for three collinear points.
- Use $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ and $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$, and write a vector in terms of two non-collinear vectors.
:::

Three friends cycle away from the school gate. The first rides $3$ km east; call her displacement $\vec{a}$. The second rides $6$ km east and the third rides $3$ km west. Can we write the displacements of the other two using only $\vec{a}$ and a number?

## The product of a number and a vector

Let us try with the addition we already know. The second friend rides the first friend's leg twice, head to tail:

$$\vec{a}+\vec{a}:\quad\text{direction east, length } 3+3=6 \text{ km}.$$

In the same way $\vec{a}+\vec{a}+\vec{a}$ points east and is $9$ km long. The third friend rides exactly the opposite vector $-\vec{a}$: $3$ km long, the other way. So a number in front of a vector tells us **how many times longer** the vector becomes and whether it is **reversed**. We write $\vec{a}+\vec{a}=2\vec{a}$, and extend this idea to every real number.

:::definition Product of a number and a vector
Let $k\neq0$ be a real number and $\vec{a}\neq\vec{0}$ a vector. The product $k\vec{a}$ is the vector that:
- has the **same direction** as $\vec{a}$ if $k > 0$, and the **opposite direction** if $k < 0$;
- has length $|k\vec{a}| = |k|\,|\vec{a}|$.

We also set $0\vec{a} = \vec{0}$ and $k\vec{0} = \vec{0}$.
:::

:::diagram The vectors $\vec{a}$, $2\vec{a}$ and $-\frac{1}{2}\vec{a}$
alt: Three parallel arrows. The arrow a points right. The arrow 2a points right and is twice as long. The arrow -a/2 points left and is half as long.
point P 0,0 ""
point Q 2,0 ""
point R 0,-1 ""
point S 4,-1 ""
point T 4,-2 ""
point U 3,-2 ""
arrow P Q "a"
arrow R S "2a"
arrow T U "-a/2"
:::

In particular $1\vec{a} = \vec{a}$ and $(-1)\vec{a} = -\vec{a}$, the opposite vector. In the opening problem, the second friend's displacement is $2\vec{a}$ and the third friend's is $-\vec{a}$.

### Properties

For all vectors $\vec{a}$, $\vec{b}$ and numbers $k$, $l$:

| Property | Formula |
|---|---|
| Distributes over vector sums | $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ |
| Distributes over number sums | $(k + l)\vec{a} = k\vec{a} + l\vec{a}$ |
| Associative | $k(l\vec{a}) = (kl)\vec{a}$ |
| Multiplying by $1$ and $-1$ | $1\vec{a} = \vec{a}$, $(-1)\vec{a} = -\vec{a}$ |

These are the same rules you use with letters in algebra, so we expand and collect terms in the usual way. Also $k\vec{a} = \vec{0}$ only when $k = 0$ or $\vec{a} = \vec{0}$.

The first example practises two basic skills: finding lengths and simplifying.

:::example Lengths and simplification
a) Suppose $|\vec{a}| = 5$. Find $|3\vec{a}|$ and $|-2\vec{a}|$, and compare their directions with $\vec{a}$.
b) Simplify $2(\vec{a} - 3\vec{b}) + 3(\vec{a} + \vec{b})$.

**Solution.** a) The length is multiplied by $|k|$, and the direction depends on the sign of $k$:

$$|3\vec{a}| = 3\cdot5 = 15,\qquad |-2\vec{a}| = |-2|\cdot5 = 10.$$

So $3\vec{a}$ has length $15$ and the direction of $\vec{a}$; $-2\vec{a}$ has length $10$ and the opposite direction.

b) Expand each bracket, then collect the terms with the same vector:

$$2\vec{a} - 6\vec{b} + 3\vec{a} + 3\vec{b} = (2 + 3)\vec{a} + (-6 + 3)\vec{b} = 5\vec{a} - 3\vec{b}.$$

So the expression equals $5\vec{a} - 3\vec{b}$.
:::

## Collinear vectors

If $\vec{b} = k\vec{a}$, then $\vec{b}$ is a stretched or reversed copy of $\vec{a}$, so the two are collinear. The converse is also true.

:::theorem Criterion for collinear vectors
Let $\vec{a} \neq \vec{0}$. A vector $\vec{b}$ is collinear with $\vec{a}$ **if and only if** there is a number $k$ such that $\vec{b} = k\vec{a}$. Then $k > 0$ if they have the same direction, $k < 0$ if opposite, and $|k| = \dfrac{|\vec{b}|}{|\vec{a}|}$.
:::

**Why does the converse hold?** If $\vec{b}$ has the direction of $\vec{a}$, take $k=\dfrac{|\vec{b}|}{|\vec{a}|}$; then $k\vec{a}$ has the same direction and the same length as $\vec{b}$, so $k\vec{a}=\vec{b}$. If the directions are opposite, take $k=-\dfrac{|\vec{b}|}{|\vec{a}|}$.

Applying this to the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ with common tail $A$ gives a test for three points on one line.

:::theorem Three collinear points
Three distinct points $A$, $B$, $C$ are collinear **if and only if** there is a number $k$ such that $\overrightarrow{AC} = k\overrightarrow{AB}$.
:::

The next example uses this test when the vectors are given through two "base" vectors $\vec{u}$, $\vec{v}$.

:::example Are the points collinear?
Let $\vec{u}$ and $\vec{v}$ be two non-collinear vectors. Points $A$, $B$, $C$ satisfy $\overrightarrow{AB} = \vec{u} + 2\vec{v}$ and $\overrightarrow{AC} = 3\vec{u} + 6\vec{v}$. Prove that $A$, $B$, $C$ are collinear, and say which point lies between the other two.

**Solution.** We look for a number $k$ with $\overrightarrow{AC} = k\overrightarrow{AB}$ by taking out a common factor:

$$\overrightarrow{AC} = 3\vec{u} + 6\vec{v} = 3(\vec{u} + 2\vec{v}) = 3\overrightarrow{AB}.$$

Since $k=3>0$, the points $B$ and $C$ are on the same side of $A$, and $AC=3AB$, so $B$ lies between $A$ and $C$. Hence $A$, $B$, $C$ are collinear, with $B$ between $A$ and $C$.
:::

## Midpoint and centroid formulas

In the previous lesson we had $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$ for the midpoint $M$ of $AB$. Insert an arbitrary point $O$: $\overrightarrow{MA} = \overrightarrow{MO} + \overrightarrow{OA}$ and $\overrightarrow{MB} = \overrightarrow{MO} + \overrightarrow{OB}$. Adding:

$$\vec{0}=2\overrightarrow{MO}+\overrightarrow{OA} + \overrightarrow{OB},\quad\text{so}\quad \overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}.$$

The same trick with the centroid identity gives $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$.

:::theorem Midpoint and centroid with any point
For **any** point $O$:
- if $M$ is the midpoint of $AB$, then $\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}$, that is $\overrightarrow{OM} = \dfrac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$;
- if $G$ is the centroid of triangle $ABC$, then $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$.
:::

The midpoint formula lets us combine two vectors with a common tail into one, as in the next example.

:::example An identity with midpoints
In triangle $ABC$, $M$ is the midpoint of $BC$ and $I$ is the midpoint of $AM$. Prove that $2\overrightarrow{IA} + \overrightarrow{IB} + \overrightarrow{IC} = \vec{0}$.

**Solution.** We combine $\overrightarrow{IB} + \overrightarrow{IC}$ with the midpoint formula (taking $O=I$), then use that $I$ is the midpoint of $AM$.

$M$ is the midpoint of $BC$, so $\overrightarrow{IB} + \overrightarrow{IC} = 2\overrightarrow{IM}$. $I$ is the midpoint of $AM$, so $\overrightarrow{IM}=-\overrightarrow{IA}$. Hence:

$$2\overrightarrow{IA} + \overrightarrow{IB} + \overrightarrow{IC} = 2\overrightarrow{IA} + 2\overrightarrow{IM} = 2\overrightarrow{IA} - 2\overrightarrow{IA} = \vec{0}.$$

This proves the identity.
:::

## Writing a vector in terms of two non-collinear vectors

If $\vec{a}$ and $\vec{b}$ are **not** collinear, every vector $\vec{w}$ in the plane can be written in **exactly one** way as
$$\vec{w} = x\vec{a} + y\vec{b}.$$
Think of moving $x$ times the vector $\vec{a}$ and then $y$ times the vector $\vec{b}$. The figure shows the case $x=2$, $y=1$.

:::diagram $\vec{w} = 2\vec{a} + \vec{b}$
alt: Arrows a and b from the point O, a dashed copy of b starting at the end of 2a, and the arrow w from O to the far corner.
point O 0,0 below-left
point A 2,0 below
point B 1,2 above-left
point D 4,0 ""
point P 5,2 above-right
segment A D dashed
segment D P dashed
arrow O A "a"
arrow O B "b"
arrow O P "w"
:::

In a triangle, the two sides from one vertex are the most natural pair of non-collinear vectors.

:::example Decomposing along two sides of a triangle
In triangle $ABC$ let $\vec{b} = \overrightarrow{AB}$ and $\vec{c} = \overrightarrow{AC}$. Let $M$ be the midpoint of $BC$ and $G$ the centroid. Express $\overrightarrow{AM}$, $\overrightarrow{AG}$ and $\overrightarrow{BG}$ in terms of $\vec{b}$ and $\vec{c}$.

**Solution.** We take $A$ as the point $O$ in the midpoint and centroid formulas, and then insert a point for $\overrightarrow{BG}$.

$$\overrightarrow{AM} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}) = \frac{1}{2}\vec{b} + \frac{1}{2}\vec{c}.$$

With $O=A$, the centroid formula gives $\overrightarrow{AA} + \overrightarrow{AB} + \overrightarrow{AC} = 3\overrightarrow{AG}$, and $\overrightarrow{AA}=\vec{0}$:

$$\overrightarrow{AG} = \frac{1}{3}\vec{b} + \frac{1}{3}\vec{c}.$$

Insert the point $A$:

$$\overrightarrow{BG} = \overrightarrow{BA} + \overrightarrow{AG} = -\vec{b} + \frac{1}{3}\vec{b} + \frac{1}{3}\vec{c} = -\frac{2}{3}\vec{b} + \frac{1}{3}\vec{c}.$$

**Check.** $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$, which is the familiar property: the centroid lies on the median, two thirds of the way from the vertex.
:::

## Solving geometry problems with vectors

The method is always the same:

1. Choose two non-collinear vectors as a "base", usually two sides from one vertex.
2. Write every vector in the problem as $x\vec{a} + y\vec{b}$, using the triangle rule, midpoints and the given ratios.
3. Compare coefficients, or look for a relation $\overrightarrow{AC} = k\overrightarrow{AB}$.

:::diagram Parallelogram $ABCD$ with $M$ on $BC$ and $N$ on $AC$
alt: A parallelogram ABCD with the diagonal AC, the midpoint M of BC, the point N on AC, and a dashed line from D through N to M.
point A 0,0 below-left
point B 4,0 below-right
point C 6,3 above-right
point D 2,3 above-left
point M 5,1.5 right
point N 4,2 below
polygon A B C D
segment A C
segment D M dashed
:::

The last example applies all three steps to prove that three points lie on one line.

:::example Three points on a line
$ABCD$ is a parallelogram, $M$ is the midpoint of $BC$, and $N$ is the point of the diagonal $AC$ with $\overrightarrow{AN} = \dfrac{2}{3}\overrightarrow{AC}$. Prove that $D$, $N$, $M$ are collinear.

**Solution.** Let $\vec{b} = \overrightarrow{AB}$, $\vec{d} = \overrightarrow{AD}$ (non-collinear), write $\overrightarrow{DM}$ and $\overrightarrow{DN}$ in terms of $\vec{b}$, $\vec{d}$, and compare.

In the parallelogram, $\overrightarrow{DC} = \vec{b}$, $\overrightarrow{BC}=\vec{d}$ and $\overrightarrow{AC} = \vec{b} + \vec{d}$. Since $M$ is the midpoint of $BC$, $\overrightarrow{CM} = -\dfrac{1}{2}\vec{d}$:

$$\overrightarrow{DM} = \overrightarrow{DC} + \overrightarrow{CM} = \vec{b} - \frac{1}{2}\vec{d}.$$

Use the subtraction rule with tail $A$:

$$\overrightarrow{DN} = \overrightarrow{AN} - \overrightarrow{AD} = \frac{2}{3}(\vec{b} + \vec{d}) - \vec{d} = \frac{2}{3}\vec{b} - \frac{1}{3}\vec{d} = \frac{2}{3}\left(\vec{b} - \frac{1}{2}\vec{d}\right).$$

So $\overrightarrow{DN} = \dfrac{2}{3}\overrightarrow{DM}$: the points $D$, $N$, $M$ are collinear, and $N$ lies on the segment $DM$, two thirds of the way from $D$.
:::

:::warning Common mistakes
- **Multiplying or dividing vectors by each other.** Wrong: "$\overrightarrow{AC}=3\overrightarrow{AB}$, so $\dfrac{\overrightarrow{AC}}{\overrightarrow{AB}}=3$". Dividing vectors means nothing; write $\overrightarrow{AC}=3\overrightarrow{AB}$, or $AC=3AB$ for lengths.
- **Forgetting the absolute value.** Wrong: "$|-2\vec{a}|=-2|\vec{a}|$". A length is never negative; the right form is $|-2\vec{a}|=2|\vec{a}|$.
- **Comparing coefficients without the condition.** From $x\vec{a} + y\vec{b} = x'\vec{a} + y'\vec{b}$ you may conclude $x=x'$, $y=y'$ only when $\vec{a}$, $\vec{b}$ are **non-collinear**.
:::

## Key terms

:::terms
- product of a vector and a number | tích của một vectơ với một số
- scalar | số thực (vô hướng)
- collinear vectors | các vectơ cùng phương
- three collinear points | ba điểm thẳng hàng
- midpoint | trung điểm
- centroid | trọng tâm
- decomposition of a vector | phân tích một vectơ
- non-collinear vectors | các vectơ không cùng phương
:::

## Summary

- $k\vec{a}$: length $|k|\,|\vec{a}|$; direction of $\vec{a}$ if $k > 0$, opposite if $k < 0$.
- Compute as in algebra: $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$, $(k + l)\vec{a} = k\vec{a} + l\vec{a}$, $k(l\vec{a}) = (kl)\vec{a}$.
- $\vec{a} \neq \vec{0}$: $\vec{b}$ collinear with $\vec{a}$ $\iff$ $\vec{b} = k\vec{a}$. Points $A$, $B$, $C$ collinear $\iff$ $\overrightarrow{AC} = k\overrightarrow{AB}$.
- For any $O$: $\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}$ ($M$ midpoint of $AB$); $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$ ($G$ centroid).
- $\vec{a}$, $\vec{b}$ non-collinear: every $\vec{w}$ is uniquely $x\vec{a} + y\vec{b}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Suppose $|\vec{a}| = 6$. Find $|2\vec{a}|$, $\left|-\dfrac{1}{2}\vec{a}\right|$ and $|0\vec{a}|$. Which of the two vectors $2\vec{a}$ and $-\dfrac{1}{2}\vec{a}$ has the same direction as $\vec{a}$?

::hint
**What you need:** $|k\vec{a}| = |k|\,|\vec{a}|$; $k\vec{a}$ has the direction of $\vec{a}$ when $k>0$.

**Steps:**
1. Multiply $6$ by the absolute value of each number.
2. Look at the sign of each number to decide the direction.

::solution
$|2\vec{a}| = 2\cdot6 = 12$, $\left|-\dfrac{1}{2}\vec{a}\right| = \dfrac{1}{2}\cdot6 = 3$, $|0\vec{a}| = |\vec{0}| = 0$. Since $2>0$, $2\vec{a}$ has the direction of $\vec{a}$; since $-\dfrac12<0$, $-\dfrac{1}{2}\vec{a}$ points the opposite way.

**Answer.** $12$; $3$; $0$; only $2\vec{a}$ has the direction of $\vec{a}$.
:::

:::exercise
Simplify $3(\vec{a} - 2\vec{b}) - 2(\vec{a} - \vec{b})$.

::hint
**What you need:** $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ and $(k + l)\vec{a} = k\vec{a} + l\vec{a}$.

**Steps:**
1. Expand both brackets, watching the minus sign before the second one.
2. Collect the terms in $\vec{a}$, then the terms in $\vec{b}$.

::solution
$$3\vec{a} - 6\vec{b} - 2\vec{a} + 2\vec{b} = (3-2)\vec{a} + (-6+2)\vec{b} = \vec{a} - 4\vec{b}.$$

**Answer.** $\vec{a} - 4\vec{b}$.
:::

:::exercise
In triangle $ABC$ let $M$, $N$ be the midpoints of $AB$, $AC$. Prove that $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$.

::hint
**What you need:** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$; if $M$ is the midpoint of $AB$, then $\overrightarrow{AM}=\dfrac12\overrightarrow{AB}$.

**Steps:**
1. Write $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}$.
2. Substitute $\overrightarrow{AM}$, $\overrightarrow{AN}$ and take out the factor $\dfrac12$.

::solution
$$\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM} = \frac{1}{2}\overrightarrow{AC} - \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{1}{2}\overrightarrow{BC}.$$

**Answer.** $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$ (proved): the midsegment is parallel to the third side and half as long.
:::

:::exercise
Let $\vec{u}$, $\vec{v}$ be non-collinear, $\overrightarrow{AB} = 2\vec{u} - \vec{v}$ and $\overrightarrow{AC} = -6\vec{u} + 3\vec{v}$. Show that $A$, $B$, $C$ are collinear, and find $k$ with $\overrightarrow{AC} = k\overrightarrow{AB}$.

::hint
**What you need:** $A$, $B$, $C$ are collinear $\iff$ $\overrightarrow{AC} = k\overrightarrow{AB}$.

**Steps:**
1. Take out a common factor in $\overrightarrow{AC}$ to reveal $2\vec{u} - \vec{v}$.
2. Read off $k$ and its sign.

::solution
$$\overrightarrow{AC} = -6\vec{u} + 3\vec{v} = -3(2\vec{u} - \vec{v}) = -3\overrightarrow{AB}.$$
So the points are collinear with $k=-3$; since $k<0$, the points $B$ and $C$ are on opposite sides of $A$.

**Answer.** $k=-3$.
:::

:::exercise
On a straight east–west road, a car drives at $40$ km/h towards the east; call its velocity $\vec{v}$. A lorry drives at $60$ km/h towards the west and a bicycle at $15$ km/h towards the east. Express the velocities of the lorry and the bicycle in terms of $\vec{v}$.

::hint
**What you need:** if $\vec{b}$ is collinear with $\vec{a}\neq\vec0$, then $\vec{b}=k\vec{a}$ with $|k|=\dfrac{|\vec{b}|}{|\vec{a}|}$, and the sign of $k$ follows the direction.

**Steps:**
1. Divide each speed by $40$.
2. Add a minus sign if the vehicle goes the opposite way to the car.

::solution
Lorry: $\dfrac{60}{40}=\dfrac32$, opposite direction, so its velocity is $-\dfrac32\vec{v}$. Bicycle: $\dfrac{15}{40}=\dfrac38$, same direction, so its velocity is $\dfrac38\vec{v}$.

**Answer.** Lorry $-\dfrac{3}{2}\vec{v}$; bicycle $\dfrac{3}{8}\vec{v}$.
:::

:::exercise
Triangle $ABC$ has centroid $G$, and $M$ is the midpoint of $BC$. Is each claim true or false?

a) $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$.
b) $\overrightarrow{GA} = 2\overrightarrow{GM}$.
c) $\overrightarrow{GB} + \overrightarrow{GC} = 2\overrightarrow{GM}$.
d) $\overrightarrow{AB} + \overrightarrow{AC} = 3\overrightarrow{AG}$.

::hint
**What you need:** $G$ lies on the median $AM$ with $AG=\dfrac23AM$; the midpoint formula $\overrightarrow{OB} + \overrightarrow{OC} = 2\overrightarrow{OM}$.

**Steps:**
1. For a) and b), compare directions and lengths of the vectors on the median.
2. For c) and d), use the midpoint formula with a suitable point $O$.

::solution
a) **True.** $\overrightarrow{AG}$ and $\overrightarrow{AM}$ have the same direction and $AG=\dfrac23AM$.

b) **False.** $GA=2GM$, but $\overrightarrow{GA}$ and $\overrightarrow{GM}$ point opposite ways ($G$ lies between $A$ and $M$), so $\overrightarrow{GA} = -2\overrightarrow{GM}$.

c) **True.** The midpoint formula with $O=G$.

d) **True.** With $O=A$: $\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AM} = 2\cdot\dfrac{3}{2}\overrightarrow{AG} = 3\overrightarrow{AG}$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
In triangle $ABC$ the point $D$ lies on side $BC$ with $BD = \dfrac{1}{4}BC$. Express $\overrightarrow{AD}$ in terms of $\overrightarrow{AB}$ and $\overrightarrow{AC}$.

::hint
**What you need:** the triangle rule and $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$.

**Steps:**
1. Write $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD}$ with $\overrightarrow{BD} = \dfrac14\overrightarrow{BC}$.
2. Substitute $\overrightarrow{BC}$ and collect coefficients.

::solution
$$\overrightarrow{AD} = \overrightarrow{AB} + \frac{1}{4}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{3}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC}.$$

**Answer.** $\overrightarrow{AD} = \dfrac{3}{4}\overrightarrow{AB} + \dfrac{1}{4}\overrightarrow{AC}$.
:::

:::exercise
(Revisiting the cosine rule.) Triangle $ABC$ has $AB=3$, $AC=5$, $\angle BAC=60^\circ$, and $M$ is the midpoint of $BC$. Find the length of the median $AM$.

::hint
**What you need:** $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$; the cosine rule; in a parallelogram, the two angles next to one side add up to $180^\circ$.

**Steps:**
1. Complete the parallelogram $ABDC$: $\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}$, so $AM=\dfrac{AD}{2}$.
2. In triangle $ABD$: $AB=3$, $BD=AC=5$, $\angle ABD=120^\circ$. Find $AD$.

::solution
Complete the parallelogram $ABDC$. Then $\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}=2\overrightarrow{AM}$, and in triangle $ABD$ we have $AB=3$, $BD=5$, $\angle ABD=120^\circ$:
$$AD^2=3^2+5^2-2\cdot3\cdot5\cos120^\circ=9+25+15=49,$$
so $AD=7$ and $AM=\dfrac72=3.5$.

**Answer.** $3.5$.
:::

:::exercise Challenge
In triangle $ABC$, $D$ is the point of $BC$ with $\overrightarrow{BD} = 2\overrightarrow{DC}$, $E$ is the midpoint of $AD$, and $F$ is the point of $AC$ with $\overrightarrow{AF} = \dfrac{2}{5}\overrightarrow{AC}$. Prove that $B$, $E$, $F$ are collinear.

::hint
**What you need:** the vector method: choose $\vec{b} = \overrightarrow{AB}$, $\vec{c} = \overrightarrow{AC}$; three points are collinear when two vectors with a common tail are proportional.

**Steps:**
1. From $\overrightarrow{BD} = 2\overrightarrow{DC}$ get $\overrightarrow{BD}=\dfrac23\overrightarrow{BC}$; write $\overrightarrow{AD}$, then $\overrightarrow{AE}$.
2. Write $\overrightarrow{BE}$ and $\overrightarrow{BF}$ in terms of $\vec{b}$, $\vec{c}$ and find $k$.

::solution
$\overrightarrow{AD} = \vec{b} + \dfrac{2}{3}(\vec{c} - \vec{b}) = \dfrac{1}{3}\vec{b} + \dfrac{2}{3}\vec{c}$, so $\overrightarrow{AE} = \dfrac{1}{6}\vec{b} + \dfrac{1}{3}\vec{c}$. Then:
$$\overrightarrow{BE} = \overrightarrow{AE} - \vec{b} = -\frac{5}{6}\vec{b} + \frac{1}{3}\vec{c},\qquad \overrightarrow{BF} = \overrightarrow{AF} - \vec{b} = -\vec{b} + \frac{2}{5}\vec{c} = \frac{6}{5}\overrightarrow{BE}.$$

**Answer.** $\overrightarrow{BF} = \dfrac{6}{5}\overrightarrow{BE}$, so $B$, $E$, $F$ are collinear.
:::

:::exercise Challenge
Let $\vec{a}$, $\vec{b}$ be non-collinear, $\vec{u} = \vec{a} + 2\vec{b}$, $\vec{v} = \vec{a} - \vec{b}$ and $\vec{w} = 5\vec{a} + \vec{b}$. Find numbers $x$, $y$ with $\vec{w} = x\vec{u} + y\vec{v}$.

::hint
**What you need:** when $\vec{a}$, $\vec{b}$ are non-collinear, two equal expressions $x\vec{a} + y\vec{b}$ have equal coefficients.

**Steps:**
1. Expand $x\vec{u} + y\vec{v}$ in terms of $\vec{a}$, $\vec{b}$.
2. Compare coefficients with $5\vec{a} + \vec{b}$ and solve the system.

::solution
$x\vec{u} + y\vec{v} = (x + y)\vec{a} + (2x - y)\vec{b}$. Comparing coefficients:
$$\begin{cases} x + y = 5\\ 2x - y = 1\end{cases}\iff\begin{cases} x = 2\\ y = 3.\end{cases}$$
**Check.** $2(\vec{a} + 2\vec{b}) + 3(\vec{a} - \vec{b}) = 5\vec{a} + \vec{b}$.

**Answer.** $x=2$, $y=3$.
:::

## Mini test

:::quiz
::mc
Suppose $|\vec{a}|=4$. The length of the vector $-3\vec{a}$ is
A. $12$.
B. $-12$.
C. $7$.
D. $1$.
::key A
$|-3\vec{a}|=|-3|\cdot|\vec{a}|=3\cdot4=12$. A length is never negative, so option B (forgetting the absolute value) is wrong.

::mc
Simplifying $2(\vec{a}+\vec{b})-3(\vec{a}-\vec{b})$ gives
A. $-\vec{a}-\vec{b}$.
B. $-\vec{a}+5\vec{b}$.
C. $5\vec{a}-\vec{b}$.
D. $-\vec{a}+\vec{b}$.
::key B
$2\vec{a}+2\vec{b}-3\vec{a}+3\vec{b}=-\vec{a}+5\vec{b}$. Option A forgets to change the sign: $-3\cdot(-\vec{b})=+3\vec{b}$.

::mc
Let $\vec{a}$, $\vec{b}$ be non-collinear. Which vector is collinear with $\vec{u}=2\vec{a}-3\vec{b}$?
A. $4\vec{a}+6\vec{b}$.
B. $2\vec{a}+3\vec{b}$.
C. $-4\vec{a}+6\vec{b}$.
D. $-2\vec{a}-6\vec{b}$.
::key C
$-4\vec{a}+6\vec{b}=-2(2\vec{a}-3\vec{b})=-2\vec{u}$. The other options cannot be written as $k\vec{u}$: their coefficients are not in the same ratio (A and B get one sign wrong, D multiplies the two coefficients by different numbers).

::mc
In triangle $ABC$, $M$ is the midpoint of $BC$. Which claim is true?
A. $\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$.
B. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AB}-\overrightarrow{AC})$.
C. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AC}-\overrightarrow{AB})$.
D. $\overrightarrow{AM}=\dfrac12(\overrightarrow{AB}+\overrightarrow{AC})$.
::key D
The midpoint formula with $O=A$: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$. Option A forgets to divide by $2$; option C actually equals $\dfrac12\overrightarrow{BC}$.

::tf
In triangle $ABC$, the point $D$ lies on side $BC$ with $\overrightarrow{BD}=3\overrightarrow{DC}$.
a) $\overrightarrow{BD}=\dfrac34\overrightarrow{BC}$.
b) $\overrightarrow{AD}=\dfrac34\overrightarrow{AB}+\dfrac14\overrightarrow{AC}$.
c) $\overrightarrow{DB}=-3\overrightarrow{DC}$.
d) $BD=3DC$.
::key T F T T
a) True: $BC=BD+DC=4DC$, so $BD=\dfrac34BC$, in the same direction. b) False: $\overrightarrow{AD}=\overrightarrow{AB}+\dfrac34(\overrightarrow{AC}-\overrightarrow{AB})=\dfrac14\overrightarrow{AB}+\dfrac34\overrightarrow{AC}$ (the two coefficients are swapped). c) True: $\overrightarrow{DB}=-\overrightarrow{BD}=-3\overrightarrow{DC}$. d) True: take the lengths of both sides.

::sa
Let $\vec{a}$, $\vec{b}$ be non-collinear, $\vec{u}=3\vec{a}-2\vec{b}$ and $\vec{v}=k\vec{a}+4\vec{b}$. Find the number $k$ for which $\vec{u}$ and $\vec{v}$ are collinear.
::key -6
We need $\vec{v}=t\vec{u}$: comparing the coefficients of $\vec{b}$ gives $-2t=4$, so $t=-2$. Then $k=3t=-6$.

::sa
Triangle $ABC$ has $AB=4$, $AC=6$, $\angle BAC=60^\circ$ and centroid $G$. Find $AG$ (rounded to one decimal place).
::key 2.9
With $M$ the midpoint of $BC$: $\overrightarrow{AG}=\dfrac23\overrightarrow{AM}=\dfrac13(\overrightarrow{AB}+\overrightarrow{AC})$. Completing the parallelogram $ABDC$ gives $AD^2=4^2+6^2-2\cdot4\cdot6\cos120^\circ=76$, so $AG=\dfrac{AD}{3}=\dfrac{\sqrt{76}}{3}\approx2.91$, which rounds to $2.9$.
:::
