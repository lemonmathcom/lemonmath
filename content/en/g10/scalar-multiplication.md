---
title: Multiplying a vector by a number
description: Stretch, shrink and reverse vectors with a number, test collinearity, and use midpoint and centroid formulas to solve geometry problems.
minutes: 16
---

:::goals
- Define $k\vec{a}$ and find its direction and length.
- Use the properties of multiplication by a number to simplify vector expressions.
- Use the criteria for collinear vectors and for three collinear points.
- Use $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ and $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$, and write a vector along two given directions.
:::

A cyclist rides $3$ km east. A second cyclist rides *twice as far in the same direction*. A third rides the same distance as the first but *back to the west*. All three journeys are made from the **same** displacement $\vec{a}$: the second is $2\vec{a}$ and the third is $-\vec{a}$. Multiplying a vector by a number stretches it, shrinks it or turns it around. It is the second basic operation on vectors, and it gives us a clean way to say "these points lie on one line" and "this point is one third of the way along".

## The product of a number and a vector

:::definition Product of a number and a vector
Let $k$ be a real number and $\vec{a}$ a vector. The vector $k\vec{a}$ is defined by:
- if $k > 0$, $k\vec{a}$ has the **same direction** as $\vec{a}$; if $k < 0$, it has the **opposite direction**;
- its length is $|k\vec{a}| = |k|\,|\vec{a}|$.

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

In particular $1\vec{a} = \vec{a}$ and $(-1)\vec{a} = -\vec{a}$, the opposite vector.

### Properties

For all vectors $\vec{a}$, $\vec{b}$ and numbers $k$, $l$:

| Property | Formula |
|---|---|
| Distributes over vector sums | $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ |
| Distributes over number sums | $(k + l)\vec{a} = k\vec{a} + l\vec{a}$ |
| Associative | $k(l\vec{a}) = (kl)\vec{a}$ |
| Identity | $1\vec{a} = \vec{a}$, $(-1)\vec{a} = -\vec{a}$ |

These are the same rules you use with letters in algebra, so you may expand and collect terms in the usual way, treating vectors like letters. Also $k\vec{a} = \vec{0}$ only when $k = 0$ or $\vec{a} = \vec{0}$.

:::example Lengths and simplification
a) Suppose $|\vec{a}| = 5$. Find $|3\vec{a}|$ and $|-2\vec{a}|$, and compare their directions with $\vec{a}$.
b) Simplify $2(\vec{a} - 3\vec{b}) + 3(\vec{a} + \vec{b})$.

**Solution.**
a) $|3\vec{a}| = |3| \cdot 5 = 15$, and $3 > 0$, so $3\vec{a}$ has the same direction as $\vec{a}$. $|-2\vec{a}| = |-2| \cdot 5 = 10$, and $-2 < 0$, so $-2\vec{a}$ has the opposite direction to $\vec{a}$.

b) Expand each bracket: $2\vec{a} - 6\vec{b} + 3\vec{a} + 3\vec{b}$. Collect like terms: $(2 + 3)\vec{a} + (-6 + 3)\vec{b} = 5\vec{a} - 3\vec{b}$.
:::

## Collinear vectors

If $\vec{b} = k\vec{a}$, then $\vec{b}$ is a stretched or reversed copy of $\vec{a}$, so the two are collinear. The converse is also true.

:::theorem Criterion for collinear vectors
Let $\vec{a} \neq \vec{0}$. A vector $\vec{b}$ is collinear with $\vec{a}$ **if and only if** there is a number $k$ such that $\vec{b} = k\vec{a}$. Moreover $k > 0$ if they have the same direction, $k < 0$ if opposite, and $|k| = \dfrac{|\vec{b}|}{|\vec{a}|}$.
:::

Applying this to the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ gives a test for points on one line.

:::theorem Three collinear points
Three distinct points $A$, $B$, $C$ are collinear **if and only if** there is a number $k$ such that $\overrightarrow{AB} = k\overrightarrow{AC}$.
:::

:::example Are the points collinear?
Let $\vec{u}$ and $\vec{v}$ be two non-collinear vectors. Points $A$, $B$, $C$ satisfy $\overrightarrow{AB} = \vec{u} + 2\vec{v}$ and $\overrightarrow{AC} = 3\vec{u} + m\vec{v}$.

a) For $m = 6$, show that $A$, $B$, $C$ are collinear.
b) Find all $m$ for which they are collinear.

**Solution.**
a) For $m = 6$, $\overrightarrow{AC} = 3\vec{u} + 6\vec{v} = 3(\vec{u} + 2\vec{v}) = 3\overrightarrow{AB}$. So $\overrightarrow{AC} = 3\overrightarrow{AB}$ and the points are collinear.

b) The points are collinear if and only if $\overrightarrow{AC} = k\overrightarrow{AB}$ for some $k$, that is $3\vec{u} + m\vec{v} = k\vec{u} + 2k\vec{v}$. Since $\vec{u}$ and $\vec{v}$ are not collinear, the coefficients must match: $k = 3$ and $m = 2k = 6$. So $m = 6$ is the only value.
:::

## Midpoint and centroid formulas

In the previous lesson we met $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$ for the midpoint $M$ of $AB$. Insert an arbitrary point $O$: $\overrightarrow{MA} = \overrightarrow{MO} + \overrightarrow{OA}$ and $\overrightarrow{MB} = \overrightarrow{MO} + \overrightarrow{OB}$, so
$$\overrightarrow{OA} + \overrightarrow{OB} = 2\overrightarrow{OM}.$$
The same trick with the centroid gives $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = 3\overrightarrow{OG}$. Dividing by $2$ and $3$:

:::theorem Midpoint and centroid with a reference point
For **any** point $O$:
- if $M$ is the midpoint of $AB$, then $\overrightarrow{OM} = \dfrac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$;
- if $G$ is the centroid of triangle $ABC$, then $\overrightarrow{OG} = \dfrac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$.
:::

## Writing a vector along two directions

If $\vec{a}$ and $\vec{b}$ are **not** collinear, every vector $\vec{w}$ in the plane can be written in exactly one way as
$$\vec{w} = x\vec{a} + y\vec{b}.$$
Think of walking $x$ steps in direction $\vec{a}$ and then $y$ steps in direction $\vec{b}$.

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

:::example Decomposing along two sides of a triangle
In triangle $ABC$ let $\vec{b} = \overrightarrow{AB}$ and $\vec{c} = \overrightarrow{AC}$. Let $M$ be the midpoint of $BC$ and $G$ the centroid. Express $\overrightarrow{AM}$, $\overrightarrow{AG}$ and $\overrightarrow{BG}$ in terms of $\vec{b}$ and $\vec{c}$.

**Solution.**
1. Take $A$ as the reference point in the midpoint formula: $\overrightarrow{AM} = \dfrac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}) = \dfrac{1}{2}(\vec{b} + \vec{c})$.
2. The centroid formula with $O = A$: $\overrightarrow{AG} = \dfrac{1}{3}(\overrightarrow{AA} + \overrightarrow{AB} + \overrightarrow{AC}) = \dfrac{1}{3}(\vec{b} + \vec{c})$.
3. By the triangle rule, $\overrightarrow{BG} = \overrightarrow{BA} + \overrightarrow{AG} = -\vec{b} + \dfrac{1}{3}(\vec{b} + \vec{c}) = -\dfrac{2}{3}\vec{b} + \dfrac{1}{3}\vec{c}$.

As a check, $\overrightarrow{AG} = \dfrac{2}{3}\overrightarrow{AM}$, which is the known property of the centroid.
:::

## Solving geometry problems with vectors

The method is always the same:

1. Choose two non-collinear vectors as a **basis**, usually two sides from one vertex.
2. Write every vector in the problem as $x\vec{a} + y\vec{b}$, using the triangle rule, midpoints and the given ratios.
3. Compare coefficients, or look for a relation $\overrightarrow{AB} = k\overrightarrow{AC}$.

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

:::example Three points on a line
$ABCD$ is a parallelogram, $M$ is the midpoint of $BC$, and $N$ is the point of the diagonal $AC$ with $\overrightarrow{AN} = \dfrac{2}{3}\overrightarrow{AC}$. Prove that $D$, $N$, $M$ are collinear.

**Solution.**
1. Let $\vec{b} = \overrightarrow{AB}$ and $\vec{d} = \overrightarrow{AD}$. These are not collinear. In the parallelogram, $\overrightarrow{AC} = \vec{b} + \vec{d}$ and $\overrightarrow{DC} = \vec{b}$.
2. $\overrightarrow{DM} = \overrightarrow{DC} + \overrightarrow{CM} = \vec{b} - \dfrac{1}{2}\vec{d}$ (because $\overrightarrow{CM} = -\dfrac{1}{2}\overrightarrow{BC} = -\dfrac{1}{2}\vec{d}$).
3. $\overrightarrow{DN} = \overrightarrow{AN} - \overrightarrow{AD} = \dfrac{2}{3}(\vec{b} + \vec{d}) - \vec{d} = \dfrac{2}{3}\vec{b} - \dfrac{1}{3}\vec{d}$.
4. Compare: $\overrightarrow{DN} = \dfrac{2}{3}\left(\vec{b} - \dfrac{1}{2}\vec{d}\right) = \dfrac{2}{3}\overrightarrow{DM}$. So the three points are collinear, and $N$ is two thirds of the way from $D$ to $M$.
:::

:::warning Common mistakes
- **Vectors cannot be multiplied or divided by each other** like numbers. $\dfrac{\vec{a}}{\vec{b}}$ means nothing, and $\vec{b} = k\vec{a}$ must be written with a number $k$.
- **Do not forget that $|k\vec{a}| = |k|\,|\vec{a}|$ uses $|k|$.** For $k = -2$, the length is multiplied by $2$, not by $-2$.
- **The criterion needs $\vec{a} \neq \vec{0}$**, and to compare coefficients in $x\vec{a} + y\vec{b} = x'\vec{a} + y'\vec{b}$ the vectors $\vec{a}$, $\vec{b}$ must be non-collinear.
:::

## Key terms

:::terms
- product of a number and a vector | tích của một số với một vectơ
- scalar | số thực (vô hướng)
- collinear vectors | các vectơ cùng phương
- three collinear points | ba điểm thẳng hàng
- midpoint | trung điểm
- centroid | trọng tâm
- decomposition of a vector | phân tích một vectơ
- non-collinear vectors | các vectơ không cùng phương
:::

## Summary

- $k\vec{a}$ has length $|k||\vec{a}|$, the direction of $\vec{a}$ if $k > 0$ and the opposite direction if $k < 0$.
- The usual algebra rules hold: $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$, $(k + l)\vec{a} = k\vec{a} + l\vec{a}$, $k(l\vec{a}) = (kl)\vec{a}$.
- For $\vec{a} \neq \vec{0}$: $\vec{b}$ is collinear with $\vec{a}$ iff $\vec{b} = k\vec{a}$. Points $A$, $B$, $C$ are collinear iff $\overrightarrow{AB} = k\overrightarrow{AC}$.
- For any point $O$: $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ for a midpoint and $\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$ for a centroid.
- Every vector can be written uniquely as $x\vec{a} + y\vec{b}$ when $\vec{a}$, $\vec{b}$ are non-collinear.

## Practice

:::practice
1. Suppose $|\vec{a}| = 6$. Find $|2\vec{a}|$, $\left|-\dfrac{1}{2}\vec{a}\right|$ and $|0\vec{a}|$, and say which of $2\vec{a}$, $-\frac{1}{2}\vec{a}$ point in the same direction as $\vec{a}$.
2. Simplify $3(\vec{a} - 2\vec{b}) - 2(\vec{a} - \vec{b})$.
3. In triangle $ABC$ let $M$, $N$ be the midpoints of $AB$, $AC$. Prove that $\overrightarrow{MN} = \dfrac{1}{2}\overrightarrow{BC}$.
4. Vectors $\vec{u}$, $\vec{v}$ are non-collinear, $\overrightarrow{AB} = 2\vec{u} - \vec{v}$ and $\overrightarrow{AC} = -6\vec{u} + 3\vec{v}$. Show that $A$, $B$, $C$ are collinear, and find $k$ with $\overrightarrow{AC} = k\overrightarrow{AB}$.
5. Let $\overrightarrow{AB} = \vec{u} - 2\vec{v}$ and $\overrightarrow{AC} = 3\vec{u} + m\vec{v}$, with $\vec{u}$, $\vec{v}$ non-collinear. Find $m$ so that $A$, $B$, $C$ are collinear.
6. $ABCD$ is a parallelogram and $O$ is any point. Prove that $\overrightarrow{OA} + \overrightarrow{OC} = \overrightarrow{OB} + \overrightarrow{OD}$.
7. In triangle $ABC$ the point $D$ lies on $BC$ with $BD = \dfrac{1}{4}BC$. Express $\overrightarrow{AD}$ in terms of $\overrightarrow{AB}$ and $\overrightarrow{AC}$.
8. $G$ is the centroid of triangle $ABC$, $\vec{b} = \overrightarrow{AB}$ and $\vec{c} = \overrightarrow{AC}$. Express $\overrightarrow{CG}$ in terms of $\vec{b}$ and $\vec{c}$.
9. (Challenge) In triangle $ABC$ let $D$ be on $BC$ with $\overrightarrow{BD} = 2\overrightarrow{DC}$, $E$ the midpoint of $AD$, and $F$ the point of $AC$ with $\overrightarrow{AF} = \dfrac{2}{5}\overrightarrow{AC}$. Prove that $B$, $E$, $F$ are collinear.
10. (Challenge) Let $\vec{a}$, $\vec{b}$ be non-collinear, $\vec{u} = \vec{a} + 2\vec{b}$, $\vec{v} = \vec{a} - \vec{b}$ and $\vec{w} = 5\vec{a} + \vec{b}$. Find $x$, $y$ with $\vec{w} = x\vec{u} + y\vec{v}$.
:::

:::solution Show solutions
1. $|2\vec{a}| = 2 \cdot 6 = 12$, $\left|-\frac{1}{2}\vec{a}\right| = \frac{1}{2} \cdot 6 = 3$ and $|0\vec{a}| = 0$. Only $2\vec{a}$ has the same direction as $\vec{a}$ ($2 > 0$); $-\frac{1}{2}\vec{a}$ is opposite.
2. $3\vec{a} - 6\vec{b} - 2\vec{a} + 2\vec{b} = \vec{a} - 4\vec{b}$.
3. Take $A$ as the reference point: $\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}$ and $\overrightarrow{AN} = \frac{1}{2}\overrightarrow{AC}$. Then $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM} = \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB}) = \frac{1}{2}\overrightarrow{BC}$.
4. $\overrightarrow{AC} = -6\vec{u} + 3\vec{v} = -3(2\vec{u} - \vec{v}) = -3\overrightarrow{AB}$. So $\overrightarrow{AC} = k\overrightarrow{AB}$ with $k = -3$, and the points are collinear ($C$ is on the other side of $A$ from $B$).
5. We need $\overrightarrow{AC} = k\overrightarrow{AB}$: $3\vec{u} + m\vec{v} = k\vec{u} - 2k\vec{v}$. Then $k = 3$ and $m = -2k = -6$.
6. Let $I$ be the centre of the parallelogram, the midpoint of both $AC$ and $BD$. Then $\overrightarrow{OA} + \overrightarrow{OC} = 2\overrightarrow{OI}$ and $\overrightarrow{OB} + \overrightarrow{OD} = 2\overrightarrow{OI}$, so they are equal.
7. $\overrightarrow{BD} = \frac{1}{4}\overrightarrow{BC} = \frac{1}{4}(\overrightarrow{AC} - \overrightarrow{AB})$. So $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} = \overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC} - \frac{1}{4}\overrightarrow{AB} = \frac{3}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC}$.
8. $\overrightarrow{CG} = \overrightarrow{CA} + \overrightarrow{AG} = -\vec{c} + \frac{1}{3}(\vec{b} + \vec{c}) = \frac{1}{3}\vec{b} - \frac{2}{3}\vec{c}$.
9. Let $\vec{b} = \overrightarrow{AB}$, $\vec{c} = \overrightarrow{AC}$. Since $BD = \frac{2}{3}BC$, $\overrightarrow{AD} = \vec{b} + \frac{2}{3}(\vec{c} - \vec{b}) = \frac{1}{3}\vec{b} + \frac{2}{3}\vec{c}$, and $\overrightarrow{AE} = \frac{1}{2}\overrightarrow{AD} = \frac{1}{6}\vec{b} + \frac{1}{3}\vec{c}$. Then $\overrightarrow{BE} = \overrightarrow{AE} - \vec{b} = -\frac{5}{6}\vec{b} + \frac{1}{3}\vec{c}$ and $\overrightarrow{BF} = \overrightarrow{AF} - \vec{b} = -\vec{b} + \frac{2}{5}\vec{c}$. Now $\frac{6}{5}\overrightarrow{BE} = -\vec{b} + \frac{2}{5}\vec{c} = \overrightarrow{BF}$, so $B$, $E$, $F$ are collinear.
10. $x\vec{u} + y\vec{v} = (x + y)\vec{a} + (2x - y)\vec{b}$. Comparing with $5\vec{a} + \vec{b}$ (the vectors $\vec{a}$, $\vec{b}$ are non-collinear): $x + y = 5$ and $2x - y = 1$. Adding gives $3x = 6$, so $x = 2$ and $y = 3$. Check: $2(\vec{a} + 2\vec{b}) + 3(\vec{a} - \vec{b}) = 5\vec{a} + \vec{b}$.
:::
