---
title: Sum and difference of two vectors
description: Add and subtract vectors with the triangle and parallelogram rules, and use the midpoint and centroid identities to solve geometry and force problems.
minutes: 25
---

:::goals
- Add two vectors with the triangle rule and the parallelogram rule.
- Use the properties of vector addition and the opposite vector to simplify expressions.
- Subtract vectors and use the identity $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Use the midpoint and centroid identities, and add forces or velocities.
:::

From home you walk $300$ m east to the school gate, and then $400$ m north to the library. You have walked $700$ m in total. So how far is the library from your home, and in which direction?

## Adding vectors

### The triangle rule

Let us draw it. Call home $A$, the school gate $B$ and the library $C$. The first leg is the vector $\overrightarrow{AB}$ of length $300$ m, the second leg is $\overrightarrow{BC}$ of length $400$ m, and the two legs are perpendicular. The overall result of the trip depends only on the start $A$ and the end $C$:

$$AC=\sqrt{300^2+400^2}=\sqrt{250\,000}=500\ \text{(m)}.$$

So the library is $500$ m from home, in a direction between east and north, not $700$ m. The two displacements $\overrightarrow{AB}$ and $\overrightarrow{BC}$ combine into **one** displacement $\overrightarrow{AC}$. That is what adding vectors means.

:::definition Sum of two vectors (triangle rule)
Take two vectors $\vec{a}$ and $\vec{b}$. Choose any point $A$, draw $\overrightarrow{AB} = \vec{a}$ and then $\overrightarrow{BC} = \vec{b}$. The vector $\overrightarrow{AC}$ is the **sum** of $\vec{a}$ and $\vec{b}$, written $\vec{a}+\vec{b}$. So, for any three points $A$, $B$, $C$:
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.$$
:::

:::diagram The triangle rule: $\vec{a} + \vec{b}$
alt: A triangle ABC. An arrow a goes from A to B, an arrow b goes from B to C, and an arrow a+b goes from A to C.
point A 0,0 below-left
point B 3,2 above
point C 5,0 below-right
arrow A B "a"
arrow B C "b"
arrow A C "a+b"
:::

The rule works for **any** three points, even when they lie on one line. The point $B$ in the middle "cancels": the head of the first vector must be the tail of the second.

### The parallelogram rule

If two vectors start from the same point $O$, say $\overrightarrow{OA} = \vec{a}$ and $\overrightarrow{OD} = \vec{b}$, complete the parallelogram $OACD$. Its diagonal from $O$ is the sum.

:::theorem Parallelogram rule
If $OACD$ is a parallelogram, then
$$\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}.$$
:::

**Why?** In the parallelogram $OACD$ we have $\overrightarrow{AC} = \overrightarrow{OD}$. Substitute and use the triangle rule: $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OA} + \overrightarrow{AC} = \overrightarrow{OC}$.

:::diagram The parallelogram rule
alt: A parallelogram with vertices O, A, C, D. Arrows a from O to A and b from O to D start at O, and the diagonal arrow a+b goes from O to C.
point O 0,0 below-left
point A 4,0 below-right
point D 1.5,2 above-left
point C 5.5,2 above-right
segment A C dashed
segment D C dashed
arrow O A "a"
arrow O D "b"
arrow O C "a+b"
:::

### Properties of addition

For all vectors $\vec{a}$, $\vec{b}$, $\vec{c}$:

| Property | Formula |
|---|---|
| Commutative | $\vec{a} + \vec{b} = \vec{b} + \vec{a}$ |
| Associative | $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$ |
| Zero vector | $\vec{a} + \vec{0} = \vec{0} + \vec{a} = \vec{a}$ |
| Opposite vector | $\vec{a} + (-\vec{a}) = \vec{0}$ |

The commutative law is the parallelogram rule in disguise: $\overrightarrow{OA} + \overrightarrow{OD}$ and $\overrightarrow{OD} + \overrightarrow{OA}$ are both the diagonal $\overrightarrow{OC}$. Because of associativity we can add many vectors without brackets. The last rule comes from the triangle rule: $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec{0}$.

The first example uses only the triangle rule, several times in a row.

:::example Closing a loop
For any four points $A$, $B$, $C$, $D$, simplify $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA}$.

**Solution.** The terms are not yet "head to tail", so we use commutativity to reorder them so that each head is the next tail:

$$\begin{aligned}
\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA} &= \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA}\\
&= \overrightarrow{AC} + \overrightarrow{CD} + \overrightarrow{DA}\\
&= \overrightarrow{AD} + \overrightarrow{DA} = \overrightarrow{AA}=\vec{0}.
\end{aligned}$$

So the sum is $\vec{0}$: a path that returns to its starting point has total displacement $\vec{0}$.
:::

To find the **length** of a sum, we first turn the sum into a single vector and then measure that segment.

:::example The length of a sum in a rhombus
Rhombus $ABCD$ has side $4$ and $\angle BAD=60^\circ$. Find $|\overrightarrow{AB}+\overrightarrow{AD}|$.

**Solution.** The two vectors share the tail $A$ and $ABCD$ is a parallelogram, so by the parallelogram rule $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.

Triangle $ABD$ has $AB=AD=4$ and an included angle of $60^\circ$, so it is equilateral. The diagonal $AC$ is twice the height $AO$ of the equilateral triangle $ABD$ ($O$ is the centre of the rhombus):

$$AC=2\cdot AO=2\cdot\frac{4\sqrt3}{2}=4\sqrt3.$$

So $|\overrightarrow{AB}+\overrightarrow{AD}|=4\sqrt3$.

**Check.** $4\sqrt3\approx6.93$, which is less than $|\overrightarrow{AB}|+|\overrightarrow{AD}|=8$: lengths do not simply add.
:::

## Subtracting vectors

If adding means "carry on", subtracting means "carry on the other way". We define subtraction through the opposite vector.

:::definition Difference of two vectors
The **difference** of $\vec{a}$ and $\vec{b}$ is the sum of $\vec{a}$ and the opposite vector of $\vec{b}$:
$$\vec{a} - \vec{b} = \vec{a} + (-\vec{b}).$$
:::

The most useful form of subtraction is the following. For any three points $O$, $A$, $B$:
$$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}.$$
**Why?** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{BO} = \overrightarrow{BO} + \overrightarrow{OA} = \overrightarrow{BA}$. In words: *the difference of two vectors with the same tail is the vector joining their heads, pointing to the head of the first one.*

:::diagram The difference $\vec{a} - \vec{b}$
alt: Two arrows a and b from the common point O to points A and B, and an arrow a-b from B to A.
point O 0,0 below-left
point A 4,1 right
point B 1,2.5 above
arrow O A "a"
arrow O B "b"
arrow B A "a−b"
:::

The next example puts a sum and a difference side by side in one figure.

:::example Sum and difference in a rectangle
$ABCD$ is a rectangle with $AB = 6$ and $AD = 8$. Find $|\overrightarrow{AB} + \overrightarrow{AD}|$ and $|\overrightarrow{AB} - \overrightarrow{AD}|$.

**Solution.** The sum uses the parallelogram rule, and the difference uses the subtraction rule (both vectors have tail $A$):

$$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC},\qquad \overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}.$$

The diagonals of a rectangle are equal, and by Pythagoras' theorem:

$$AC = DB = \sqrt{6^2 + 8^2} = 10.$$

So $|\overrightarrow{AB} + \overrightarrow{AD}| = |\overrightarrow{AB} - \overrightarrow{AD}| = 10$. The vectors $\overrightarrow{AC}$ and $\overrightarrow{DB}$ are different (they point different ways) but have the same length.
:::

Subtraction also helps us prove vector identities: we transform one side, inserting points with the triangle rule.

:::example Proving an identity
Prove that for any four points $A$, $B$, $C$, $D$: $\overrightarrow{AB} - \overrightarrow{CD} = \overrightarrow{AC} + \overrightarrow{DB}$.

**Solution.** We transform the right-hand side. Insert the point $B$ into $\overrightarrow{AC}$ and the point $C$ into $\overrightarrow{DB}$:

$$\begin{aligned}
\overrightarrow{AC} + \overrightarrow{DB} &= (\overrightarrow{AB} + \overrightarrow{BC}) + (\overrightarrow{DC} + \overrightarrow{CB})\\
&= \overrightarrow{AB} + \overrightarrow{DC} + (\overrightarrow{BC} + \overrightarrow{CB})\\
&= \overrightarrow{AB} + \overrightarrow{DC}.
\end{aligned}$$

Since $\overrightarrow{DC}=-\overrightarrow{CD}$, we have $\overrightarrow{AB} + \overrightarrow{DC}=\overrightarrow{AB} - \overrightarrow{CD}$. This proves the identity.
:::

## Midpoints and centroids

:::theorem Midpoint and centroid identities
- $M$ is the midpoint of segment $AB$ if and only if $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$.
- $G$ is the centroid of triangle $ABC$ if and only if $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
:::

**Why does the first identity hold?** If $M$ is the midpoint, then $\overrightarrow{MA}$ and $\overrightarrow{MB}$ have the same length and opposite directions, so they are opposite vectors and their sum is $\vec{0}$. Conversely, a zero sum means $\overrightarrow{MB}=-\overrightarrow{MA}$, so $M$ lies between $A$ and $B$ with $MA=MB$.

The centroid identity is harder; we prove it with the parallelogram rule.

:::example Proving the centroid identity
Let $G$ be the centroid of triangle $ABC$ and $M$ the midpoint of $BC$. Prove that $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.

**Solution.** We combine $\overrightarrow{GB} + \overrightarrow{GC}$ into one vector with the parallelogram rule, and then compare it with $\overrightarrow{GA}$.

Take the point $D$ such that $M$ is the midpoint of $GD$. The quadrilateral $GBDC$ has diagonals $GD$, $BC$ that bisect each other at $M$, so it is a parallelogram. Hence:

$$\overrightarrow{GB} + \overrightarrow{GC} = \overrightarrow{GD}.$$

The centroid lies on the median $AM$ with $GA = 2GM = GD$, and $A$, $D$ are on opposite sides of $G$. So $\overrightarrow{GD}=-\overrightarrow{GA}$, and:

$$\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \overrightarrow{GA} + \overrightarrow{GD} = \vec{0}.$$
:::

## Forces and velocities

When two forces act on the same object, the single force that has the same effect is their **resultant**: the sum of the two force vectors. Velocities add in the same way, for example the velocity of a boat and that of a river current.

:::diagram A boat crossing a river
alt: A rectangle with corner O. The arrow b goes up from O (the boat) and the arrow c goes right from O (the current). The diagonal arrow v goes from O to the opposite corner. A right-angle mark is at O.
point O 0,0 below-left
point A 3,0 below-right
point B 0,4 above-left
point C 3,4 above-right
segment A C dashed
segment B C dashed
arrow O B "b"
arrow O A "c"
arrow O C "v"
right A O B
:::

The last example is a real-life problem: the true velocity of the boat is the sum of two velocities.

:::example The boat and the current
A boat points straight across a river and moves at $4$ km/h relative to the water. The current flows at $3$ km/h, perpendicular to the direction of the boat. Find the speed of the boat relative to the bank.

**Solution.** Let $\vec{b}$ be the velocity of the boat relative to the water ($|\vec{b}| = 4$) and $\vec{c}$ the velocity of the current ($|\vec{c}| = 3$). The velocity relative to the bank is $\vec{v} = \vec{b} + \vec{c}$, the diagonal of the parallelogram on $\vec{b}$ and $\vec{c}$.

The vectors are perpendicular, so this parallelogram is a rectangle, and by Pythagoras' theorem:

$$|\vec{v}| = \sqrt{4^2 + 3^2} = \sqrt{25} = 5.$$

So the speed of the boat relative to the bank is $5$ km/h. This is the same $3$-$4$-$5$ triangle as the walk at the start of the lesson.
:::

:::warning Common mistakes
- **Adding lengths directly.** Wrong: "$|\vec{b}+\vec{c}|=4+3=7$". Right: $|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$, with equality only when the vectors have the same direction; in the boat example the speed is $5$.
- **Swapping the order when subtracting.** Wrong: "$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{AB}$". Right: $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$; the difference points to the head of the **first** vector.
- **Using the triangle rule when the vectors are not head to tail.** Wrong: "$\overrightarrow{AB} + \overrightarrow{CB}=\overrightarrow{AC}$". Right: $\overrightarrow{AB} + \overrightarrow{CB}=\overrightarrow{AB} - \overrightarrow{BC}$, which needs more work; the triangle rule needs the head of the first vector to be the tail of the second.
:::

## Key terms

:::terms
- sum of vectors | tổng của hai vectơ
- triangle rule | quy tắc ba điểm
- parallelogram rule | quy tắc hình bình hành
- commutative property | tính chất giao hoán
- associative property | tính chất kết hợp
- opposite vector | vectơ đối
- difference of vectors | hiệu của hai vectơ
- midpoint | trung điểm
- centroid | trọng tâm
- resultant force | hợp lực
:::

## Summary

- Triangle rule: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ (head to tail).
- Parallelogram rule: if $OACD$ is a parallelogram, $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}$ (common tail, take the diagonal).
- Addition is commutative and associative; $\vec{a} + \vec{0} = \vec{a}$, $\vec{a} + (-\vec{a}) = \vec{0}$.
- Difference: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$; $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Midpoint: $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$. Centroid: $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
- A resultant force or a true velocity is a vector sum; find its length with Pythagoras' theorem or the cosine rule.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Simplify: (a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ}$; (b) $\overrightarrow{AB} - \overrightarrow{AC}$; (c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD}$.

::hint
**What you need:** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ and $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.

**Steps:**
1. For a sum, chain the vectors head to tail from left to right.
2. For a difference, look at two vectors with a common tail and join their heads.

::solution
(a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ} = \overrightarrow{MP} + \overrightarrow{PQ} = \overrightarrow{MQ}$.
(b) Both vectors have tail $A$: $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$.
(c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD} = \overrightarrow{AC} - \overrightarrow{AD} = \overrightarrow{DC}$.

**Answer.** (a) $\overrightarrow{MQ}$; (b) $\overrightarrow{CB}$; (c) $\overrightarrow{DC}$.
:::

:::exercise
$ABCD$ is a square of side $4$. Find $|\overrightarrow{AB} + \overrightarrow{AD}|$, $|\overrightarrow{AB} - \overrightarrow{AD}|$ and $|\overrightarrow{AB} + \overrightarrow{CD}|$.

::hint
**What you need:** the parallelogram rule, the subtraction rule, and $\overrightarrow{CD}=\overrightarrow{BA}$ in a square.

**Steps:**
1. Turn each expression into a single vector.
2. Find its length by Pythagoras' theorem.

::solution
$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$ and $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$, both diagonals of length $\sqrt{4^2+4^2}=4\sqrt2$. Since $\overrightarrow{CD}=\overrightarrow{BA}$, $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AB} + \overrightarrow{BA}=\vec{0}$.

**Answer.** $4\sqrt2$; $4\sqrt2$; $0$.
:::

:::exercise
$ABCD$ is a parallelogram with centre $O$. Prove that $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ and $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.

::hint
**What you need:** the diagonals of a parallelogram bisect each other; the midpoint identity.

**Steps:**
1. $O$ is the midpoint of $AC$ and of $BD$.
2. Write two midpoint identities and add them.

::solution
$O$ is the midpoint of $AC$, so $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$; $O$ is the midpoint of $BD$, so $\overrightarrow{OB} + \overrightarrow{OD} = \vec{0}$. Adding the two gives $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.

**Answer.** Both identities hold (proved).
:::

:::exercise
Prove that for any four points $A$, $B$, $C$, $D$: $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AD} + \overrightarrow{CB}$.

::hint
**What you need:** inserting a point with the triangle rule: $\overrightarrow{AB}=\overrightarrow{AD}+\overrightarrow{DB}$.

**Steps:**
1. Insert the point $D$ into $\overrightarrow{AB}$ and the point $B$ into $\overrightarrow{CD}$.
2. Group the two opposite vectors.

::solution
$$\overrightarrow{AB} + \overrightarrow{CD} = (\overrightarrow{AD} + \overrightarrow{DB}) + (\overrightarrow{CB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + (\overrightarrow{DB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB}.$$

**Answer.** The identity holds (proved).
:::

:::exercise
A boat moves at $6$ km/h relative to the water, pointing straight across a river whose current flows at $8$ km/h, perpendicular to the direction of the boat.

a) What is its speed relative to the bank?
b) By how many degrees does the boat's true path differ from the direction it points (rounded to the nearest degree)?

::hint
**What you need:** the true velocity is the sum of the two velocity vectors; in a right-angled triangle, the tangent of an acute angle is opposite over adjacent.

**Steps:**
1. Draw the rectangle on the two velocity vectors; the true velocity is its diagonal.
2. The angle $\alpha$ lies between the boat's heading and the diagonal, with $\tan\alpha=\dfrac{8}{6}$.

::solution
a) $|\vec{v}|=\sqrt{6^2+8^2}=\sqrt{100}=10$ (km/h).

b) The side adjacent to the angle is $6$ (the heading) and the opposite side is $8$ (the current): $\tan\alpha=\dfrac86\approx1.333$, so $\alpha\approx53^\circ$.

**Answer.** a) $10$ km/h; b) about $53^\circ$.
:::

:::exercise
Two forces, each of magnitude $20$ N, act on the same point and make an angle of $120^\circ$. Find the magnitude of their resultant.

::hint
**What you need:** the resultant is the diagonal of the parallelogram on the two forces; a parallelogram with two equal adjacent sides is a rhombus.

**Steps:**
1. Draw $\overrightarrow{OA}$, $\overrightarrow{OB}$ of length $20$ with $\angle AOB=120^\circ$, and complete the rhombus $OACB$.
2. In triangle $OAC$, find the angle at $A$ and recognise the triangle.

::solution
Draw $\overrightarrow{OA}$, $\overrightarrow{OB}$ for the two forces and complete the rhombus $OACB$. The resultant is $\overrightarrow{OC}$. In the rhombus, $\angle OAC=180^\circ-120^\circ=60^\circ$ and $AO=AC=20$, so triangle $OAC$ is equilateral and $OC=20$.

**Answer.** $20$ N.
:::

:::exercise
$ABC$ is an equilateral triangle of side $6$ and $M$ is the midpoint of $BC$. Is each claim true or false?

a) $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{BC}$.
b) $|\overrightarrow{AB} - \overrightarrow{AC}| = 6$.
c) $\overrightarrow{MB} + \overrightarrow{MC} = \vec{0}$.
d) $|\overrightarrow{AB} + \overrightarrow{AC}| = 6\sqrt3$.

::hint
**What you need:** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$; the parallelogram rule; the midpoint identity; the height of an equilateral triangle of side $a$ is $\dfrac{a\sqrt3}{2}$.

**Steps:**
1. Turn each expression into a single vector.
2. For d), complete the rhombus $ABDC$; the diagonal $AD$ is twice $AM$.

::solution
a) **False.** $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$, which points the opposite way to $\overrightarrow{BC}$.

b) **True.** $|\overrightarrow{CB}|=BC=6$.

c) **True.** $M$ is the midpoint of $BC$.

d) **True.** With the rhombus $ABDC$, $\overrightarrow{AB} + \overrightarrow{AC}=\overrightarrow{AD}$ and $AD=2AM=2\cdot\dfrac{6\sqrt3}{2}=6\sqrt3$.

**Answer.** a) False; b) True; c) True; d) True.
:::

:::exercise
(Revisiting the cosine rule.) Two forces $\vec{F_1}$, $\vec{F_2}$ of magnitudes $50$ N and $80$ N act on the same point and make an angle of $60^\circ$. Find the magnitude of the resultant in newtons, rounded to the nearest whole number.

::hint
**What you need:** the cosine rule; in a parallelogram, two angles next to the same side add up to $180^\circ$.

**Steps:**
1. Draw $\overrightarrow{OA}=\vec{F_1}$, $\overrightarrow{OB}=\vec{F_2}$ and complete the parallelogram $OACB$; the resultant is $\overrightarrow{OC}$.
2. In triangle $OAC$: $OA=50$, $AC=80$, $\angle OAC=120^\circ$. Use the cosine rule.

::solution
Draw $\overrightarrow{OA}=\vec{F_1}$, $\overrightarrow{OB}=\vec{F_2}$ and complete the parallelogram $OACB$; the resultant is $\overrightarrow{OC}$. In triangle $OAC$: $OA=50$, $AC=80$, $\angle OAC=120^\circ$, so
$$OC^2=50^2+80^2-2\cdot50\cdot80\cos120^\circ=2500+6400+4000=12\,900.$$
So $OC=\sqrt{12\,900}\approx113.6$.

**Answer.** $114$.
:::

:::exercise Challenge
$ABCD$ and $ABEF$ are two parallelograms, and $C$, $D$, $E$, $F$ are not on one line. Prove that $DCEF$ is a parallelogram.

::hint
**What you need:** a quadrilateral $PQRS$ is a parallelogram if and only if $\overrightarrow{PQ}=\overrightarrow{SR}$.

**Steps:**
1. Write $\overrightarrow{AB}$ as a vector in each parallelogram.
2. Compare those two vectors and apply the theorem to the quadrilateral $DCEF$.

::solution
From the parallelogram $ABCD$: $\overrightarrow{AB}=\overrightarrow{DC}$. From the parallelogram $ABEF$: $\overrightarrow{AB}=\overrightarrow{FE}$. So $\overrightarrow{DC}=\overrightarrow{FE}$. With $P=D$, $Q=C$, $R=E$, $S=F$, this is exactly the condition $\overrightarrow{PQ}=\overrightarrow{SR}$, so $DCEF$ is a parallelogram.

**Answer.** $DCEF$ is a parallelogram (proved).
:::

:::exercise Challenge
Prove that for any six points $A, B, C, D, E, F$:
$$\overrightarrow{AD} + \overrightarrow{BE} + \overrightarrow{CF} = \overrightarrow{AE} + \overrightarrow{BF} + \overrightarrow{CD}.$$

::hint
**What you need:** $\vec{x}=\vec{y}\iff\vec{x}-\vec{y}=\vec{0}$; $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.

**Steps:**
1. Subtract the right-hand side from the left-hand side, pairing vectors with a common tail.
2. Simplify the three differences with the triangle rule.

::solution
$$\begin{aligned}
&(\overrightarrow{AD}-\overrightarrow{AE}) + (\overrightarrow{BE}-\overrightarrow{BF}) + (\overrightarrow{CF}-\overrightarrow{CD})\\
&= \overrightarrow{ED} + \overrightarrow{FE} + \overrightarrow{DF} = \overrightarrow{FE} + \overrightarrow{ED} + \overrightarrow{DF} = \overrightarrow{FF}=\vec{0}.
\end{aligned}$$
The difference of the two sides is $\vec{0}$, so the two sides are equal.

**Answer.** The identity holds (proved).
:::

## Mini test

:::quiz
::mc
For any three points $A$, $B$, $C$, the vector $\overrightarrow{AB}+\overrightarrow{CA}$ equals
A. $\vec{0}$.
B. $\overrightarrow{BC}$.
C. $\overrightarrow{AC}$.
D. $\overrightarrow{CB}$.
::key D
Reorder so that the head of the first vector is the tail of the second: $\overrightarrow{CA}+\overrightarrow{AB}=\overrightarrow{CB}$. Option B has the opposite direction.

::mc
For two points $A$, $B$ and any point $M$, $\overrightarrow{MA}-\overrightarrow{MB}$ equals
A. $\overrightarrow{BA}$.
B. $\overrightarrow{AB}$.
C. $\vec{0}$.
D. $2\overrightarrow{MA}$.
::key A
The difference of two vectors with the same tail is the vector joining their heads, pointing to the head of the first one: $\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}$. Option B swaps the order.

::mc
$ABCD$ is a square of side $3$. The magnitude of $\overrightarrow{AB}+\overrightarrow{AD}$ is
A. $6$.
B. $3$.
C. $3\sqrt2$.
D. $0$.
::key C
By the parallelogram rule, $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, and $AC=\sqrt{3^2+3^2}=3\sqrt2$. Option A simply adds the two lengths.

::mc
$M$ is the midpoint of the segment $AB$. Which claim is true?
A. $\overrightarrow{MA}=\overrightarrow{MB}$.
B. $\overrightarrow{MA}+\overrightarrow{MB}=\vec{0}$.
C. $\overrightarrow{AM}+\overrightarrow{BM}=\overrightarrow{AB}$.
D. $\overrightarrow{MA}-\overrightarrow{MB}=\vec{0}$.
::key B
$\overrightarrow{MA}$ and $\overrightarrow{MB}$ have the same length and opposite directions, so they are opposite vectors and their sum is $\vec{0}$. Options A and D treat opposite vectors as equal; in C, in fact $\overrightarrow{AM}+\overrightarrow{BM}=\vec{0}$.

::tf
$ABCD$ is a rectangle with $AB=3$, $AD=4$ and centre $O$.
a) $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
b) $|\overrightarrow{AB}-\overrightarrow{AD}|=1$.
c) $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\vec{0}$.
d) $|\overrightarrow{AB}+\overrightarrow{CD}|=6$.
::key T F T F
a) True: the parallelogram rule. b) False: $\overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB}$, which has length $5$, not $4-3$. c) True: $O$ is the midpoint of $AC$ and of $BD$. d) False: $\overrightarrow{CD}=-\overrightarrow{AB}$, so the sum is $\vec{0}$, of length $0$.

::sa
$ABCD$ is a square of side $6$. Find $|\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AC}|$ (rounded to the nearest whole number).
::key 17
$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, so the sum is $\overrightarrow{AC}+\overrightarrow{AC}$, a vector in the direction of $\overrightarrow{AC}$ and twice as long: $2\cdot6\sqrt2=12\sqrt2\approx16.97$, which rounds to $17$.

::sa
Two forces of magnitudes $30$ N and $40$ N act on the same point at an angle of $60^\circ$ to each other. Find the magnitude of the resultant in newtons (rounded to the nearest whole number).
::key 61
The resultant is the diagonal of the parallelogram on the two forces; in the triangle formed by the sides $30$, $40$ and this diagonal, the included angle is $180^\circ-60^\circ=120^\circ$. By the cosine rule, $F^2=900+1600-2\cdot30\cdot40\cos120^\circ=3700$, so $F\approx60.8$, which rounds to $61$ N.
:::
