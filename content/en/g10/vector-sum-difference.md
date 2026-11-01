---
title: Sum and difference of two vectors
description: Add and subtract vectors with the triangle and parallelogram rules, and use the midpoint and centroid identities to solve geometry and force problems.
minutes: 16
---

:::goals
- Add two vectors with the triangle rule and the parallelogram rule.
- Use the properties of vector addition and the opposite vector to simplify expressions.
- Subtract vectors and use the identity $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Use the midpoint and centroid identities, and add forces or velocities.
:::

You walk 300 m east to the school gate and then 400 m north to the library. Where do you end up compared with where you started? Not 700 m away: you are only 500 m from your start, in a direction between east and north. Two displacements combined into one **single** displacement. That is exactly what adding vectors means, and it is how physicists add forces and how pilots plan for the wind.

## Adding vectors

### The triangle rule

Take two vectors $\vec{a}$ and $\vec{b}$. Choose a point $A$, draw $\overrightarrow{AB} = \vec{a}$, and then from $B$ draw $\overrightarrow{BC} = \vec{b}$. The vector from the start to the end, $\overrightarrow{AC}$, is the sum.

:::definition Sum of two vectors (triangle rule)
For any three points $A$, $B$, $C$:
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.$$
The sum $\vec{a} + \vec{b}$ is obtained by placing the tail of $\vec{b}$ at the head of $\vec{a}$.
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

Notice that the rule works for **any** three points, even when they lie on one line, and the point $B$ in the middle cancels: "$B$ followed by $B$" disappears.

### The parallelogram rule

If two vectors start from the same point $O$, say $\overrightarrow{OA} = \vec{a}$ and $\overrightarrow{OD} = \vec{b}$, complete the parallelogram $OACD$. Its diagonal from $O$ is the sum.

:::theorem Parallelogram rule
If $OACD$ is a parallelogram, then
$$\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}.$$
:::

This follows from the triangle rule: in a parallelogram $\overrightarrow{AC} = \overrightarrow{OD}$, so $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OA} + \overrightarrow{AC} = \overrightarrow{OC}$.

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

The commutative law is the parallelogram rule in disguise, since $\overrightarrow{OA} + \overrightarrow{OD}$ and $\overrightarrow{OD} + \overrightarrow{OA}$ are both the diagonal $\overrightarrow{OC}$. Because of associativity we can add many vectors without brackets, for example
$$\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}.$$
The last rule comes from the triangle rule: $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec{0}$.

:::example Closing a loop
For four points $A$, $B$, $C$, $D$, show that $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \vec{0}$, and simplify $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA}$.

**Solution.**
1. By the triangle rule used twice, $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ and then $\overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$.
2. So $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \overrightarrow{AD} + \overrightarrow{DA} = \overrightarrow{AA} = \vec{0}$.
3. In the second sum the order is different. Addition is commutative, so we may reorder the terms: $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \vec{0}$.

A path that returns to its starting point has total displacement $\vec{0}$.
:::

## Subtracting vectors

:::definition Difference of two vectors
The **difference** of $\vec{a}$ and $\vec{b}$ is the sum of $\vec{a}$ and the opposite vector of $\vec{b}$:
$$\vec{a} - \vec{b} = \vec{a} + (-\vec{b}).$$
:::

The most useful form of subtraction is the following. For any three points $O$, $A$, $B$:
$$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}.$$
Indeed, $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{BO} = \overrightarrow{BO} + \overrightarrow{OA} = \overrightarrow{BA}$. In words: *the difference of two vectors with the same tail is the vector joining their heads, pointing to the head of the first one.*

:::diagram The difference $\vec{a} - \vec{b}$
alt: Two arrows a and b from the common point O to points A and B, and an arrow a-b from B to A.
point O 0,0 below-left
point A 4,1 right
point B 1,2.5 above
arrow O A "a"
arrow O B "b"
arrow B A "a−b"
:::

:::example Subtracting in a parallelogram
$ABCD$ is a rectangle with $AB = 6$ and $AD = 8$. Compute $|\overrightarrow{AB} + \overrightarrow{AD}|$ and $|\overrightarrow{AB} - \overrightarrow{AD}|$.

**Solution.**
1. Since $ABCD$ is a parallelogram, the parallelogram rule gives $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$.
2. The difference rule gives $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$.
3. In a rectangle the diagonals are equal, and by Pythagoras $AC = DB = \sqrt{6^2 + 8^2} = 10$.
4. Hence $|\overrightarrow{AB} + \overrightarrow{AD}| = 10$ and $|\overrightarrow{AB} - \overrightarrow{AD}| = 10$.

The two vectors are different (they point in different directions) but have the same length.
:::

## Midpoints and centroids

:::theorem Midpoint and centroid identities
- $M$ is the midpoint of segment $AB$ if and only if $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$.
- $G$ is the centroid of triangle $ABC$ if and only if $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
:::

Why does the first identity hold? If $M$ is the midpoint, then $\overrightarrow{MA}$ and $\overrightarrow{MB}$ have the same length and opposite directions, so they are opposite vectors and their sum is $\vec{0}$. The converse is the same argument read backwards.

:::example Proving the centroid identity
Let $G$ be the centroid of triangle $ABC$ and $M$ the midpoint of $BC$. Prove that $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.

**Solution.**
1. Since $M$ is the midpoint of $BC$, $\overrightarrow{GB} + \overrightarrow{GC} = 2\overrightarrow{GM}$. (Indeed $\overrightarrow{GB} = \overrightarrow{GM} + \overrightarrow{MB}$ and $\overrightarrow{GC} = \overrightarrow{GM} + \overrightarrow{MC}$, and $\overrightarrow{MB} + \overrightarrow{MC} = \vec{0}$.)
2. The centroid lies on the median $AM$ with $GA = 2\,GM$, and $G$ lies between $A$ and $M$. So $\overrightarrow{GA}$ and $\overrightarrow{GM}$ have opposite directions and $|\overrightarrow{GA}| = 2|\overrightarrow{GM}|$. Hence $\overrightarrow{GA} = -2\overrightarrow{GM}$.
3. Therefore $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = -2\overrightarrow{GM} + 2\overrightarrow{GM} = \vec{0}$.
:::

## Forces and velocities

When two forces act on the same object, the single force that has the same effect is their **resultant**: the sum of the two force vectors. The same holds for velocities, for example a boat and a river current.

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

:::example The boat and the current
A boat points straight across a river and moves at $4$ km/h relative to the water. The current flows at $3$ km/h, perpendicular to the direction of the boat. Find the speed of the boat relative to the bank.

**Solution.**
1. Let $\vec{b}$ be the velocity of the boat in still water ($|\vec{b}| = 4$) and $\vec{c}$ the velocity of the current ($|\vec{c}| = 3$). The velocity relative to the bank is $\vec{v} = \vec{b} + \vec{c}$.
2. The parallelogram of $\vec{b}$ and $\vec{c}$ is a rectangle because the vectors are perpendicular. Its diagonal is $\vec{v}$.
3. By Pythagoras, $|\vec{v}| = \sqrt{4^2 + 3^2} = \sqrt{25} = 5$.

The speed relative to the bank is $5$ km/h. This is the same $3$-$4$-$5$ triangle you know from geometry, and it also explains why the walk in the opening was $500$ m.
:::

:::warning Common mistakes
- **Lengths do not simply add.** $|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$, with equality only when the vectors have the same direction. In the boat example $4 + 3 = 7$, but the speed is $5$.
- **Subtraction is not commutative.** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$, but $\overrightarrow{OB} - \overrightarrow{OA} = \overrightarrow{AB}$. The vector points to the head of the **first** one.
- Before using the triangle rule, make sure the head of the first vector is the tail of the second: $\overrightarrow{AB} + \overrightarrow{CB}$ is **not** $\overrightarrow{AC}$.
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

- Triangle rule: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$. Parallelogram rule: if $OACD$ is a parallelogram, then $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}$.
- Addition is commutative and associative, $\vec{a} + \vec{0} = \vec{a}$ and $\vec{a} + (-\vec{a}) = \vec{0}$.
- Difference: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$, and $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- $M$ is the midpoint of $AB$ iff $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$; $G$ is the centroid of $ABC$ iff $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
- Forces and velocities add as vectors, so the resultant is a diagonal of the parallelogram.

## Practice

:::practice
1. Simplify (a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ}$; (b) $\overrightarrow{AB} - \overrightarrow{AC}$; (c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD}$.
2. $ABCD$ is a square of side $4$. Find $|\overrightarrow{AB} + \overrightarrow{AD}|$, $|\overrightarrow{AB} - \overrightarrow{AD}|$ and $|\overrightarrow{AB} + \overrightarrow{CD}|$.
3. For any four points $A$, $B$, $C$, $D$ prove that $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AD} + \overrightarrow{CB}$.
4. $ABCD$ is a parallelogram with centre $O$. Prove that $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ and $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.
5. $I$ is the midpoint of side $AB$ of triangle $ABC$. Prove that $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{CI}$.
6. A boat moves at $6$ km/h in still water, pointing straight across a river whose current flows at $8$ km/h perpendicular to the boat. What is its speed relative to the bank?
7. Two forces of $20$ N act on the same point and make an angle of $120^\circ$. Find the magnitude of their resultant.
8. $ABC$ is an equilateral triangle of side $6$. Find $|\overrightarrow{AB} + \overrightarrow{AC}|$ and $|\overrightarrow{AB} - \overrightarrow{AC}|$.
9. (Challenge) $G$ is the centroid of triangle $ABC$ and $M$ is any point. Prove that $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\overrightarrow{MG}$.
10. (Challenge) $ABCD$ is any quadrilateral, $M$ is the midpoint of $AB$ and $N$ is the midpoint of $CD$. Prove that $\overrightarrow{MN} = \dfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{BC})$.
:::

:::solution Show solutions
1. (a) By the triangle rule, $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ} = \overrightarrow{MP} + \overrightarrow{PQ} = \overrightarrow{MQ}$. (b) $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$ (same tail $A$, the difference joins the heads and points to $B$). (c) $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, and $\overrightarrow{AC} - \overrightarrow{AD} = \overrightarrow{DC}$.
2. $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$, so its length is the diagonal $4\sqrt{2}$. $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$, with length $4\sqrt{2}$ as well. In a square $\overrightarrow{CD} = \overrightarrow{BA}$, so $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AB} + \overrightarrow{BA} = \vec{0}$ and its length is $0$.
3. Insert the point $D$ and the point $B$: $\overrightarrow{AB} + \overrightarrow{CD} = (\overrightarrow{AD} + \overrightarrow{DB}) + (\overrightarrow{CB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + (\overrightarrow{DB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + \vec{0}$.
4. The diagonals of a parallelogram bisect each other, so $O$ is the midpoint of $AC$ and of $BD$. Hence $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ and $\overrightarrow{OB} + \overrightarrow{OD} = \vec{0}$. Adding the two equalities gives the second claim.
5. $\overrightarrow{CA} = \overrightarrow{CI} + \overrightarrow{IA}$ and $\overrightarrow{CB} = \overrightarrow{CI} + \overrightarrow{IB}$. Adding, $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{CI} + (\overrightarrow{IA} + \overrightarrow{IB}) = 2\overrightarrow{CI}$ because $I$ is the midpoint of $AB$.
6. The velocity relative to the bank is the diagonal of a rectangle with sides $6$ and $8$: $\sqrt{6^2 + 8^2} = \sqrt{100} = 10$ km/h.
7. Draw $\overrightarrow{OA}$ and $\overrightarrow{OB}$ with $OA = OB = 20$ and $\widehat{AOB} = 120^\circ$. The parallelogram $OACB$ is a rhombus and the resultant is $\overrightarrow{OC}$. Angle $\widehat{OAC} = 180^\circ - 120^\circ = 60^\circ$ and $AO = AC$, so triangle $OAC$ is equilateral and $OC = 20$. The resultant has magnitude $20$ N.
8. $\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AM}$ where $M$ is the midpoint of $BC$ (exercise 5). The median of an equilateral triangle of side $6$ is $AM = 3\sqrt{3}$, so the length is $6\sqrt{3}$. Next, $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$ has length $BC = 6$.
9. Write $\overrightarrow{MA} = \overrightarrow{MG} + \overrightarrow{GA}$, and similarly for $B$ and $C$. Adding: $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\overrightarrow{MG} + (\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC}) = 3\overrightarrow{MG}$.
10. Going from $M$ to $N$ in two ways: $\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AD} + \overrightarrow{DN}$ and $\overrightarrow{MN} = \overrightarrow{MB} + \overrightarrow{BC} + \overrightarrow{CN}$. Adding, $2\overrightarrow{MN} = (\overrightarrow{MA} + \overrightarrow{MB}) + (\overrightarrow{AD} + \overrightarrow{BC}) + (\overrightarrow{DN} + \overrightarrow{CN})$. The first and third brackets are $\vec{0}$ because $M$ and $N$ are midpoints, so $\overrightarrow{MN} = \dfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{BC})$.
:::
