---
title: The dot product of two vectors
description: Define the dot product with the angle between vectors, compute it in coordinates, and use it to test perpendicularity, find angles and lengths.
minutes: 18
---

:::goals
- Find the angle between two vectors and define the dot product $\vec{a}\cdot\vec{b}$.
- Use the properties of the dot product to expand expressions.
- Compute $\vec{a}\cdot\vec{b}$ from coordinates and use $\vec{a}\cdot\vec{b}=0$ to test perpendicularity.
- Find the angle between two vectors and the angles of a triangle from coordinates.
:::

You pull a sled along the snow with a rope. Only the part of your pull that points **along the ground** moves the sled; the part that lifts it up is wasted. Physicists capture this with a single number: force times distance times the cosine of the angle between them. Mathematicians turned the same idea into a product of two vectors whose result is a **number**: the dot product.

## The angle between two vectors

Place two nonzero vectors $\vec{a}$ and $\vec{b}$ so that they start at the same point $O$. The **angle between** them, written $(\vec{a}, \vec{b})$, is the angle $\theta$ of the figure, with $0^\circ\le\theta\le 180^\circ$.

:::diagram The angle $\theta$ between $\vec{a}$ and $\vec{b}$
alt: Two arrows a and b leaving the origin O, with an arc marking the angle theta between them
point O 0,0 below-left
point A 4,0 below ""
point B 2,3 above ""
arrow O A "a"
arrow O B "b"
angle A O B "θ"
:::

If $\theta=0^\circ$ the vectors point the same way; if $\theta=180^\circ$ they point opposite ways; if $\theta=90^\circ$ they are perpendicular, written $\vec{a}\perp\vec{b}$.

## Definition of the dot product

:::definition Dot product
For nonzero vectors $\vec{a}$ and $\vec{b}$,
$$\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b}).$$
If $\vec{a}=\vec{0}$ or $\vec{b}=\vec{0}$, then $\vec{a}\cdot\vec{b}=0$.
:::

The result is a number, not a vector. It is positive for an acute angle, negative for an obtuse angle and $0$ for a right angle. In particular $\vec{a}\cdot\vec{a}=|\vec{a}|^2$ (the angle is $0^\circ$ and $\cos 0^\circ=1$).

:::example Three angles
Let $|\vec{a}|=3$ and $|\vec{b}|=4$. Find $\vec{a}\cdot\vec{b}$ when the angle between the vectors is $60^\circ$, $120^\circ$ and $90^\circ$.

**Solution.**
- $60^\circ$: $3\cdot 4\cdot\cos 60^\circ=12\cdot\frac12=6$.
- $120^\circ$: $3\cdot 4\cdot\cos 120^\circ=12\cdot\left(-\frac12\right)=-6$.
- $90^\circ$: $3\cdot 4\cdot\cos 90^\circ=0$.
:::

:::example Work done by a force
You pull a sled with a force of $10$ N along a rope that makes $60^\circ$ with the ground. The sled moves $5$ m along the ground. Find the work done.

**Solution.** Work is the dot product of the force vector and the displacement vector: $W=10\cdot 5\cdot\cos 60^\circ=50\cdot\frac12=25$ joules.
:::

## Properties

:::theorem Properties of the dot product
For any vectors $\vec{a}, \vec{b}, \vec{c}$ and number $k$:
- $\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$ (commutative),
- $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$ (distributive),
- $(k\vec{a})\cdot\vec{b}=k(\vec{a}\cdot\vec{b})=\vec{a}\cdot(k\vec{b})$,
- $\vec{a}\cdot\vec{a}=|\vec{a}|^2\ge 0$.
:::

From these we get the identities
$$|\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2,\qquad |\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2.$$

:::example Length of a sum
Let $|\vec{a}|=2$, $|\vec{b}|=3$ and $\vec{a}\cdot\vec{b}=1$. Find $|\vec{a}+\vec{b}|$ and $|\vec{a}-\vec{b}|$.

**Solution.**
- $|\vec{a}+\vec{b}|^2=4+2\cdot 1+9=15$, so $|\vec{a}+\vec{b}|=\sqrt{15}$.
- $|\vec{a}-\vec{b}|^2=4-2\cdot 1+9=11$, so $|\vec{a}-\vec{b}|=\sqrt{11}$.
:::

## The dot product in coordinates

:::theorem Coordinate formula
If $\vec{a}=(x_1, y_1)$ and $\vec{b}=(x_2, y_2)$, then
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2.$$
:::

Two consequences follow at once:
- $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$ (for nonzero vectors).
- $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

:::example Dot product and angle
For $\vec{a}=(2, 3)$ and $\vec{b}=(4, -1)$, find $\vec{a}\cdot\vec{b}$ and the angle between the vectors.

**Solution.** $\vec{a}\cdot\vec{b}=2\cdot 4+3\cdot(-1)=5$. Also $|\vec{a}|=\sqrt{13}$ and $|\vec{b}|=\sqrt{17}$, so
$$\cos(\vec{a}, \vec{b})=\frac{5}{\sqrt{13}\sqrt{17}}=\frac{5}{\sqrt{221}}\approx 0.336.$$
The angle is about $70.3^\circ$.
:::

:::example A perpendicular condition
Find $m$ so that $\vec{a}=(2, m)$ and $\vec{b}=(3, -1)$ are perpendicular.

**Solution.** $\vec{a}\cdot\vec{b}=6-m=0$, so $m=6$.
:::

## Angles in a triangle

To find the angle at a vertex, use the two vectors that leave that vertex.

:::diagram Triangle $ABC$
alt: A triangle with vertices A(1, 2), B(3, 1) and C(2, 4) and a right-angle mark at A
point A 1,2 left
point B 3,1 below-right
point C 2,4 above
polygon A B C
right B A C
grid
:::

:::example Angles of a triangle
Find the angles of the triangle with $A(1, 2)$, $B(3, 1)$ and $C(2, 4)$.

**Solution.** $\overrightarrow{AB}=(2, -1)$ and $\overrightarrow{AC}=(1, 2)$.
- At $A$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-2=0$, so $\angle A=90^\circ$.
- At $B$: $\overrightarrow{BA}=(-2, 1)$ and $\overrightarrow{BC}=(-1, 3)$. The dot product is $2+3=5$, and $|\overrightarrow{BA}|=\sqrt5$, $|\overrightarrow{BC}|=\sqrt{10}$. So $\cos B=\frac{5}{\sqrt{50}}=\frac{1}{\sqrt2}$ and $\angle B=45^\circ$.
- Angles add to $180^\circ$, so $\angle C=45^\circ$.
:::

:::warning Common mistakes
- Writing $\vec{a}\cdot\vec{b}$ as a vector: it is a **number**.
- Using the angle of the figure when the two vectors do not start at the same point. Move one vector first.
- Concluding $\vec{a}=\vec{0}$ or $\vec{b}=\vec{0}$ from $\vec{a}\cdot\vec{b}=0$. Perpendicular vectors also give $0$.
- Forgetting the cross term: $|\vec{a}+\vec{b}|^2\neq|\vec{a}|^2+|\vec{b}|^2$ unless $\vec{a}\cdot\vec{b}=0$.
:::

## Key terms

:::terms
- angle between two vectors | góc giữa hai vectơ
- dot product | tích vô hướng
- perpendicular | vuông góc
- acute angle | góc nhọn
- obtuse angle | góc tù
- work (physics) | công
- commutative | giao hoán
- distributive | phân phối
:::

## Summary

- $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$ is a number; $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.
- It is commutative and distributive, and $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.
- In coordinates, $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$.
- $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$, and the formula for $\cos$ gives angles.

## Practice

:::practice
1. Find $\vec{a}\cdot\vec{b}$ if $|\vec{a}|=5$, $|\vec{b}|=2$ and the angle between them is $60^\circ$.
2. Find $\vec{a}\cdot\vec{b}$ if $|\vec{a}|=4$, $|\vec{b}|=3$ and the angle is $150^\circ$.
3. Compute $\vec{a}\cdot\vec{b}$ for $\vec{a}=(1, -3)$ and $\vec{b}=(2, 5)$.
4. Find $m$ so that $\vec{a}=(m, 4)$ and $\vec{b}=(2, -1)$ are perpendicular.
5. Find the angle between $\vec{a}=(1, 2)$ and $\vec{b}=(3, 1)$.
6. Find $\angle A$ in the triangle with $A(-1, 0)$, $B(2, 0)$, $C(2, 3)$.
7. Let $|\vec{a}|=2$, $|\vec{b}|=3$ and $\vec{a}\cdot\vec{b}=-3$. Find $|\vec{a}+\vec{b}|$ and $|\vec{a}-\vec{b}|$.
8. A force of $20$ N moves an object $3$ m along a line, the force making an angle of $30^\circ$ with the motion. Find the work (exact value, then to $0.01$ J).
9. Challenge. Find a vector $\vec{b}$ perpendicular to $\vec{a}=(3, 4)$ with $|\vec{b}|=10$.
10. Challenge. Show that if $|\vec{a}|=|\vec{b}|$ then $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$. Check it for $\vec{a}=(3, 4)$ and $\vec{b}=(5, 0)$.
:::

:::solution Show solutions
1. $5\cdot 2\cdot\cos 60^\circ=10\cdot\frac12=5$.
2. $4\cdot 3\cdot\cos 150^\circ=12\cdot\left(-\frac{\sqrt3}{2}\right)=-6\sqrt3$.
3. $1\cdot 2+(-3)\cdot 5=2-15=-13$.
4. $2m-4=0$, so $m=2$.
5. $\vec{a}\cdot\vec{b}=3+2=5$, $|\vec{a}|=\sqrt5$, $|\vec{b}|=\sqrt{10}$. $\cos=\frac{5}{\sqrt{50}}=\frac1{\sqrt2}$, so the angle is $45^\circ$.
6. $\overrightarrow{AB}=(3, 0)$ and $\overrightarrow{AC}=(3, 3)$. Dot product $9$; lengths $3$ and $3\sqrt2$. $\cos A=\frac{9}{9\sqrt2}=\frac1{\sqrt2}$, so $\angle A=45^\circ$.
7. $|\vec{a}+\vec{b}|^2=4-6+9=7$, so $\sqrt7$. $|\vec{a}-\vec{b}|^2=4+6+9=19$, so $\sqrt{19}$.
8. $W=20\cdot 3\cdot\cos 30^\circ=60\cdot\frac{\sqrt3}{2}=30\sqrt3\approx 51.96$ J.
9. Let $\vec{b}=(x, y)$. Then $3x+4y=0$, so $\vec{b}=t(4, -3)$. $|\vec{b}|=5|t|=10$ gives $t=\pm2$. So $\vec{b}=(8, -6)$ or $\vec{b}=(-8, 6)$.
10. $(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})=|\vec{a}|^2-|\vec{b}|^2=0$. Check: $\vec{a}+\vec{b}=(8, 4)$, $\vec{a}-\vec{b}=(-2, 4)$ and $-16+16=0$. ✓ (This says the diagonals of a rhombus are perpendicular.)
:::
