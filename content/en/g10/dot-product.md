---
title: The scalar product of two vectors
description: Define the scalar product with the angle between vectors, compute it in coordinates, and use it to test perpendicularity, find angles and lengths.
minutes: 25
---

:::goals
- Find the angle between two vectors and define the scalar product $\vec{a}\cdot\vec{b}$.
- Use the properties of the scalar product to expand expressions and find lengths.
- Compute $\vec{a}\cdot\vec{b}$ from coordinates and use $\vec{a}\cdot\vec{b}=0$ to test perpendicularity.
- Find the angle between two vectors and the angles of a triangle from coordinates.
:::

You pull a trolley across a playground with a rope, using a force of $10$ N. The rope makes an angle of $60^\circ$ with the ground, and the trolley moves $5$ m. How much work does the pull do? If the rope were horizontal, the answer would be $10\cdot5=50$ J. But the rope slopes upwards, so is it still $50$ J?

Your instinct probably says no: when you pull at a slant, some of your effort seems to go into lifting the trolley rather than moving it along. The question is how much. Answering it leads us to a new operation between two vectors, and this operation turns out to be useful in many places: testing whether lines are perpendicular, finding angles, finding lengths.

## The angle between two vectors

We do what physicists do: split the pull into two perpendicular parts, one along the ground and one straight up. The force, the part along the ground and the vertical part form a right-angled triangle with an angle of $60^\circ$, so:

$$\text{part along the ground}=10\cos60^\circ=10\cdot\frac12=5\ \text{(N)}.$$

Only this part moves the trolley; the vertical part just lifts it slightly. So the work is $5\cdot5=25$ J, that is $10\cdot5\cdot\cos60^\circ$, only half of what a horizontal rope would give. Notice that this number is built from three things: the **lengths of two vectors** (force, displacement) and **the angle between them**. This way of combining them is so useful that it gets its own name: the **scalar product** (also called the dot product).

Before that, we must say exactly which angle "the angle between two vectors" is, because two vectors may sit in different places on the plane. Place two non-zero vectors $\vec{a}$ and $\vec{b}$ so that they start at the same point $O$: $\overrightarrow{OA}=\vec{a}$, $\overrightarrow{OB}=\vec{b}$. The **angle between** them, written $(\vec{a}, \vec{b})$, is the angle $\angle AOB$, with $0^\circ\le(\vec{a}, \vec{b})\le 180^\circ$.

:::diagram The angle $\theta$ between $\vec{a}$ and $\vec{b}$
alt: Two arrows a and b leaving the origin O, with an arc marking the angle theta between them
point O 0,0 below-left
point A 4,0 below ""
point B 2,3 above ""
arrow O A "a"
arrow O B "b"
angle A O B "θ"
:::

Three special cases are worth remembering: if the angle is $0^\circ$ the vectors point the same way; if it is $180^\circ$ they point opposite ways; if it is $90^\circ$ they are perpendicular, written $\vec{a}\perp\vec{b}$.

## Definition of the scalar product

:::definition Scalar product (dot product)
For non-zero vectors $\vec{a}$ and $\vec{b}$,
$$\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b}).$$
If $\vec{a}=\vec{0}$ or $\vec{b}=\vec{0}$, then $\vec{a}\cdot\vec{b}=0$.
:::

Many students slip up here, so let us say it straight away: the result is a **number**, not a vector. That is where the name "scalar" comes from. Its sign is the sign of the cosine: positive for an acute angle, negative for an obtuse angle, $0$ for a right angle. In particular $\vec{a}\cdot\vec{a}=|\vec{a}|^2$, because the angle is $0^\circ$ and $\cos 0^\circ=1$. In the opening problem, the work is exactly the scalar product of the force vector and the displacement vector: $25$ J.

Keep the lengths of the two vectors fixed and just turn the angle between them; let us see how the scalar product changes.

:::example Three angles
Let $|\vec{a}|=3$ and $|\vec{b}|=4$. Find $\vec{a}\cdot\vec{b}$ when the angle between the vectors is $60^\circ$, $120^\circ$ and $90^\circ$.

**Solution.** We substitute into the definition; only the cosine changes:

$$\begin{aligned}
60^\circ&: & 3\cdot 4\cdot\cos 60^\circ&=12\cdot\tfrac12=6,\\
120^\circ&: & 3\cdot 4\cdot\cos 120^\circ&=12\cdot\left(-\tfrac12\right)=-6,\\
90^\circ&: & 3\cdot 4\cdot\cos 90^\circ&=0.
\end{aligned}$$

So the scalar products are $6$, $-6$ and $0$: an obtuse angle gives a negative number and a right angle gives $0$.
:::

In geometry, two vectors often do not share a tail. Then do not read the angle off the picture straight away; move one vector so that the tails coincide, and only then look at the angle.

:::example In an equilateral triangle
Equilateral triangle $ABC$ has side $4$. Find $\overrightarrow{AB}\cdot\overrightarrow{AC}$ and $\overrightarrow{AB}\cdot\overrightarrow{BC}$.

**Solution.** The vectors $\overrightarrow{AB}$, $\overrightarrow{AC}$ share the tail $A$, so the angle between them is $\angle BAC=60^\circ$:

$$\overrightarrow{AB}\cdot\overrightarrow{AC}=4\cdot4\cdot\cos60^\circ=8.$$

The vectors $\overrightarrow{AB}$, $\overrightarrow{BC}$ are head to tail. Move $\overrightarrow{AB}$ to the tail $B$: we get a vector $\overrightarrow{BD}$ on the extension of $AB$ beyond $B$. The angle between $\overrightarrow{BD}$ and $\overrightarrow{BC}$ is the exterior angle at $B$, which is $180^\circ-60^\circ=120^\circ$:

$$\overrightarrow{AB}\cdot\overrightarrow{BC}=4\cdot4\cdot\cos120^\circ=-8.$$

So $\overrightarrow{AB}\cdot\overrightarrow{AC}=8$ and $\overrightarrow{AB}\cdot\overrightarrow{BC}=-8$.
:::

## Properties

:::theorem Properties of the scalar product
For any vectors $\vec{a}, \vec{b}, \vec{c}$ and number $k$:
- $\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$ (commutative),
- $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$ (distributive),
- $(k\vec{a})\cdot\vec{b}=k(\vec{a}\cdot\vec{b})=\vec{a}\cdot(k\vec{b})$,
- $\vec{a}\cdot\vec{a}=|\vec{a}|^2\ge 0$.
:::

These properties are exactly like those of multiplying numbers, so we may expand just as with the familiar algebraic identities:
$$|\vec{a}+\vec{b}|^2=(\vec{a}+\vec{b})\cdot(\vec{a}+\vec{b})=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2,$$
$$|\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2.$$

The nice thing is that these identities let us find the length of a sum without drawing anything, knowing only two lengths and the angle between them.

:::example Length of a sum and a difference
Let $|\vec{a}|=2$, $|\vec{b}|=3$ and $(\vec{a}, \vec{b})=60^\circ$. Find $|\vec{a}+\vec{b}|$ and $|\vec{a}-\vec{b}|$.

**Solution.** We find $\vec{a}\cdot\vec{b}$ first and then use the two identities:

$$\vec{a}\cdot\vec{b}=2\cdot3\cdot\cos60^\circ=3.$$

$$|\vec{a}+\vec{b}|^2=4+2\cdot3+9=19,\qquad |\vec{a}-\vec{b}|^2=4-2\cdot3+9=7.$$

So $|\vec{a}+\vec{b}|=\sqrt{19}$ and $|\vec{a}-\vec{b}|=\sqrt{7}$.

**Check.** $\sqrt{19}\approx4.36<2+3=5$: the length of a sum is at most the sum of the lengths.
:::

## The scalar product in coordinates

The definition with the angle has a clear meaning, but when we only have coordinates we do not know the angle. Luckily there is a much quicker way.

:::theorem Coordinate formula
If $\vec{a}=(x_1, y_1)$ and $\vec{b}=(x_2, y_2)$, then
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2.$$
:::

**Why does this formula work?** Write $\vec{a}=x_1\vec{i}+y_1\vec{j}$, $\vec{b}=x_2\vec{i}+y_2\vec{j}$ and expand. Since $\vec{i}\cdot\vec{i}=\vec{j}\cdot\vec{j}=1$ (length $1$) and $\vec{i}\cdot\vec{j}=0$ (perpendicular), only $x_1x_2+y_1y_2$ is left.

This short formula brings two consequences that we use all the time:
- $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$ (for non-zero vectors).
- $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

With the second consequence we can find even angles that are not special ones; a calculator is only needed at the very last step.

:::example Scalar product and angle
For $\vec{a}=(2, 3)$ and $\vec{b}=(4, -1)$, find $\vec{a}\cdot\vec{b}$ and the angle between the vectors (to $0.1$ of a degree).

**Solution.** Find the scalar product and the two lengths, then divide:

$$\vec{a}\cdot\vec{b}=2\cdot 4+3\cdot(-1)=5,\qquad |\vec{a}|=\sqrt{13},\quad |\vec{b}|=\sqrt{17}.$$

$$\cos(\vec{a}, \vec{b})=\frac{5}{\sqrt{13}\cdot\sqrt{17}}=\frac{5}{\sqrt{221}}\approx 0.336.$$

So $\vec{a}\cdot\vec{b}=5$ and the angle between the vectors is about $70.3^\circ$.
:::

## Angles in a triangle

Now let us take the new tool into a triangle. One small rule saves you from sign errors: to find the angle at a vertex, use the two vectors that **leave that vertex**.

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

**Solution.** At $A$ we use $\overrightarrow{AB}=(2, -1)$ and $\overrightarrow{AC}=(1, 2)$:

$$\overrightarrow{AB}\cdot\overrightarrow{AC}=2\cdot1+(-1)\cdot2=0,\quad\text{so}\quad\angle A=90^\circ.$$

At $B$ we use $\overrightarrow{BA}=(-2, 1)$ and $\overrightarrow{BC}=(-1, 3)$:

$$\cos B=\frac{(-2)(-1)+1\cdot3}{\sqrt5\cdot\sqrt{10}}=\frac{5}{\sqrt{50}}=\frac{1}{\sqrt2},\quad\text{so}\quad\angle B=45^\circ.$$

The angles add up to $180^\circ$, so $\angle C=45^\circ$. Hence triangle $ABC$ is a right-angled isosceles triangle with the right angle at $A$.
:::

The perpendicularity test is not only for checking; it also gives us an equation for finding an unknown point.

:::example Finding a point for a right angle
Let $A(1, 2)$ and $B(3, 1)$. Find the point $C$ on the $x$-axis such that triangle $ABC$ has a right angle at $A$.

**Solution.** Let $C(t, 0)$. The angle at $A$ is right when $\overrightarrow{AB}\perp\overrightarrow{AC}$, with $\overrightarrow{AB}=(2, -1)$ and $\overrightarrow{AC}=(t-1, -2)$:

$$2(t-1)+(-1)(-2)=0\iff 2t=0\iff t=0.$$

So $C(0, 0)$.

**Check.** $\overrightarrow{AC}=(-1, -2)$ and $2\cdot(-1)+(-1)(-2)=0$.
:::

:::warning Common mistakes
- **Treating the scalar product as a vector.** Wrong: "$\vec{a}\cdot\vec{b}=(8, -3)$" for $\vec{a}=(2, 3)$, $\vec{b}=(4, -1)$. Right: $\vec{a}\cdot\vec{b}=8-3=5$, a number.
- **Reading the angle when the vectors do not share a tail.** Wrong: "$(\overrightarrow{AB}, \overrightarrow{BC})=\angle ABC$". Move a vector so the tails coincide; in an equilateral triangle that angle is $120^\circ$, not $60^\circ$.
- **Forgetting the middle term.** Wrong: $|\vec{a}+\vec{b}|^2=|\vec{a}|^2+|\vec{b}|^2$. Right: $|\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\vec{a}\cdot\vec{b}+|\vec{b}|^2$; the two agree only when $\vec{a}\perp\vec{b}$.
- **Concluding $\vec{a}=\vec{0}$ or $\vec{b}=\vec{0}$ from $\vec{a}\cdot\vec{b}=0$.** The habit from multiplying numbers makes this mistake easy. Two non-zero perpendicular vectors also give $0$.
:::

## Key terms

:::terms
- angle between two vectors | góc giữa hai vectơ
- scalar product (dot product) | tích vô hướng
- perpendicular | vuông góc
- acute angle | góc nhọn
- obtuse angle | góc tù
- work (physics) | công (vật lí)
- commutative | giao hoán
- distributive | phân phối
:::

## Summary

- Angle $(\vec{a}, \vec{b})$: put the vectors tail to tail; $0^\circ\le(\vec{a}, \vec{b})\le180^\circ$.
- $\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b})$ is a number; $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.
- Commutative, distributive; $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.
- Coordinates: $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$; $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$.
- $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|\,|\vec{b}|}$; for the angle at a vertex of a triangle use the two vectors leaving that vertex.

The trolley at the start has its answer: pulling at $60^\circ$, the work is only $25$ J, because only the part of the force along the ground does the job. The scalar product is a short way of writing exactly that idea: it measures how much two vectors "go the same way".

## Practice

Each exercise comes with the ideas you need and a few steps to get going. Have a go on your own first, and do not worry about mistakes; comparing with the solution afterwards shows you how much you have understood.

:::exercise
Find $\vec{a}\cdot\vec{b}$ in two cases: (a) $|\vec{a}|=5$, $|\vec{b}|=2$, $(\vec{a}, \vec{b})=60^\circ$; (b) $|\vec{a}|=4$, $|\vec{b}|=3$, $(\vec{a}, \vec{b})=150^\circ$.

::hint
**What you need:** $\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b})$; $\cos150^\circ=-\dfrac{\sqrt3}{2}$.

**Steps:**
1. Multiply the two lengths.
2. Multiply by the cosine of the angle, watching the sign for an obtuse angle.

::solution
By definition, the scalar product of two vectors is $\vec{a}\cdot\vec{b}=|\vec{a}|\cdot|\vec{b}|\cdot\cos(\vec{a}, \vec{b})$.

a) With $|\vec{a}|=5$, $|\vec{b}|=2$, $(\vec{a}, \vec{b})=60^\circ$, we have
$$\vec{a}\cdot\vec{b}=5\cdot2\cdot\cos60^\circ=10\cdot\frac12=5.$$

b) With $|\vec{a}|=4$, $|\vec{b}|=3$, $(\vec{a}, \vec{b})=150^\circ$, we have $\cos150^\circ=-\cos30^\circ=-\dfrac{\sqrt3}{2}$, so
$$\vec{a}\cdot\vec{b}=4\cdot3\cdot\cos150^\circ=12\cdot\left(-\frac{\sqrt3}{2}\right)=-6\sqrt3.$$
The scalar product is negative because the angle between the vectors is obtuse.

So a) $\vec{a}\cdot\vec{b}=5$; b) $\vec{a}\cdot\vec{b}=-6\sqrt3$.

**Answer.** (a) $5$; (b) $-6\sqrt3$.
:::

:::exercise
Compute $\vec{a}\cdot\vec{b}$ for $\vec{a}=(1, -3)$, $\vec{b}=(2, 5)$. Are the vectors $\vec{u}=(2, 1)$ and $\vec{v}=(-1, 2)$ perpendicular?

::hint
**What you need:** $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$; $\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0$.

**Steps:**
1. Multiply $x$ by $x$ and $y$ by $y$, then add.
2. Check whether the scalar product of $\vec{u}$, $\vec{v}$ is $0$.

::solution
For $\vec{a}=(x_1, y_1)$ and $\vec{b}=(x_2, y_2)$, the scalar product in coordinates is $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$; two non-zero vectors are perpendicular exactly when their scalar product is $0$.

For $\vec{a}=(1, -3)$, $\vec{b}=(2, 5)$:
$$\vec{a}\cdot\vec{b}=1\cdot2+(-3)\cdot5=2-15=-13.$$

For $\vec{u}=(2, 1)$, $\vec{v}=(-1, 2)$ (both non-zero):
$$\vec{u}\cdot\vec{v}=2\cdot(-1)+1\cdot2=-2+2=0.$$
Hence $\vec{u}\perp\vec{v}$.

So $\vec{a}\cdot\vec{b}=-13$, and the vectors $\vec{u}$, $\vec{v}$ are perpendicular.

**Answer.** $\vec{a}\cdot\vec{b}=-13$; $\vec{u}\perp\vec{v}$.
:::

:::exercise
Find the angle between the vectors $\vec{a}=(1, 2)$ and $\vec{b}=(3, 1)$.

::hint
**What you need:** $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

**Steps:**
1. Find the scalar product and the two lengths.
2. Find the cosine and recognise the special angle.

::solution
We use the formula $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|\cdot|\vec{b}|}$.

We have
$$\vec{a}\cdot\vec{b}=1\cdot3+2\cdot1=5,\qquad|\vec{a}|=\sqrt{1^2+2^2}=\sqrt5,\qquad|\vec{b}|=\sqrt{3^2+1^2}=\sqrt{10}.$$

Hence
$$\cos(\vec{a}, \vec{b})=\frac{5}{\sqrt5\cdot\sqrt{10}}=\frac{5}{\sqrt{50}}=\frac{5}{5\sqrt2}=\frac{1}{\sqrt2}=\frac{\sqrt2}{2}.$$

Since $0^\circ\le(\vec{a}, \vec{b})\le180^\circ$ and $\cos45^\circ=\dfrac{\sqrt2}{2}$, we get $(\vec{a}, \vec{b})=45^\circ$.

So the angle between $\vec{a}$ and $\vec{b}$ is $45^\circ$.

**Answer.** $(\vec{a}, \vec{b})=45^\circ$.
:::

:::exercise
Find $\angle A$ of the triangle with $A(-1, 0)$, $B(2, 0)$, $C(2, 3)$.

::hint
**What you need:** the angle at $A$ is the angle between $\overrightarrow{AB}$ and $\overrightarrow{AC}$.

**Steps:**
1. Find the coordinates of $\overrightarrow{AB}$, $\overrightarrow{AC}$.
2. Find $\cos A$ with the coordinate formula.

::solution
Angle $A$ of the triangle is the angle between the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$, so $\cos A=\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\cdot AC}$.

We have
$$\overrightarrow{AB}=(2-(-1), 0-0)=(3, 0),\qquad\overrightarrow{AC}=(2-(-1), 3-0)=(3, 3).$$

Hence
$$\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot3+0\cdot3=9,\qquad AB=\sqrt{3^2+0^2}=3,\qquad AC=\sqrt{3^2+3^2}=3\sqrt2.$$

So
$$\cos A=\frac{9}{3\cdot3\sqrt2}=\frac{1}{\sqrt2}=\frac{\sqrt2}{2},$$
and $\angle A=45^\circ$.

Check: $\overrightarrow{BC}=(0, 3)$ is perpendicular to $\overrightarrow{AB}=(3, 0)$, so the triangle has a right angle at $B$ with $AB=BC=3$, an isosceles right triangle; hence $\angle A=45^\circ$.

So $\angle A=45^\circ$.

**Answer.** $\angle A=45^\circ$.
:::

:::exercise
Let $|\vec{a}|=2$, $|\vec{b}|=3$ and $\vec{a}\cdot\vec{b}=-3$. Find $|\vec{a}+\vec{b}|$ and $|\vec{a}-\vec{b}|$.

::hint
**What you need:** $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.

**Steps:**
1. Substitute into both identities, remembering that $\vec{a}\cdot\vec{b}$ is negative.
2. Take square roots.

::solution
We use $|\vec{u}|^2=\vec{u}^{\,2}=\vec{u}\cdot\vec{u}$ and the distributive property of the scalar product.

We have
$$|\vec{a}+\vec{b}|^2=(\vec{a}+\vec{b})^2=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2=4+2\cdot(-3)+9=7.$$
Hence $|\vec{a}+\vec{b}|=\sqrt7$.

Similarly,
$$|\vec{a}-\vec{b}|^2=(\vec{a}-\vec{b})^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2=4-2\cdot(-3)+9=19.$$
Hence $|\vec{a}-\vec{b}|=\sqrt{19}$.

So $|\vec{a}+\vec{b}|=\sqrt7$ and $|\vec{a}-\vec{b}|=\sqrt{19}$.

**Answer.** $|\vec{a}+\vec{b}|=\sqrt7$; $|\vec{a}-\vec{b}|=\sqrt{19}$.
:::

:::exercise
A parent pushes a pram with a force of $20$ N along the handle, which makes an angle of $30^\circ$ with the direction of motion. The pram moves $3$ m in a straight line. Find the work done by the push in joules, rounded to the nearest whole number.

::hint
**What you need:** work $W=\vec{F}\cdot\vec{d}=|\vec{F}|\,|\vec{d}|\cos(\vec{F}, \vec{d})$; $\cos30^\circ=\dfrac{\sqrt3}{2}$.

**Steps:**
1. Substitute the force, the distance and the angle.
2. Find the approximate value and round.

::solution
Let $\vec{F}$ be the pushing force and $\vec{d}$ the displacement of the pram. The work done by the force is the scalar product $A=\vec{F}\cdot\vec{d}=|\vec{F}|\cdot|\vec{d}|\cdot\cos(\vec{F}, \vec{d})$.

We are given $|\vec{F}|=20$ N, $|\vec{d}|=3$ m and $(\vec{F}, \vec{d})=30^\circ$. Hence
$$A=20\cdot3\cdot\cos30^\circ=60\cdot\frac{\sqrt3}{2}=30\sqrt3\approx51.96\ \text{(J)}.$$

Rounded to the nearest whole number, $A\approx52$ J.

So the work done by the push is about $52$ J.

**Answer.** $52$.
:::

:::exercise
Let $\vec{a}=(3, 4)$, $\vec{b}=(4, -3)$ and $\vec{c}=(6, 8)$. Is each claim true or false?

a) $\vec{a}\perp\vec{b}$.
b) $|\vec{b}|=5$.
c) $(\vec{a}, \vec{c})=180^\circ$.
d) $\vec{a}\cdot(\vec{b}+\vec{c})=25$.

::hint
**What you need:** the coordinate formulas for the scalar product and the length; the distributive property.

**Steps:**
1. Find $\vec{a}\cdot\vec{b}$ and $|\vec{b}|$.
2. Compare $\vec{c}$ with $\vec{a}$; find $\vec{a}\cdot\vec{c}$.

::solution
a) **True.** We have $\vec{a}\cdot\vec{b}=3\cdot4+4\cdot(-3)=12-12=0$, and both vectors are non-zero, so $\vec{a}\perp\vec{b}$.

b) **True.** $|\vec{b}|=\sqrt{4^2+(-3)^2}=\sqrt{16+9}=\sqrt{25}=5$.

c) **False.** We have $\vec{c}=(6, 8)=2(3, 4)=2\vec{a}$ with $2>0$, so $\vec{c}$ points the same way as $\vec{a}$. Hence $(\vec{a}, \vec{c})=0^\circ$, not $180^\circ$.

d) **False.** By the distributive property,
$$\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}=0+(3\cdot6+4\cdot8)=0+50=50,$$
not $25$. (Direct check: $\vec{b}+\vec{c}=(10, 5)$ and $3\cdot10+4\cdot5=50$.)

So claims a), b) are true; claims c), d) are false.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
(Revisiting the cosine rule.) Triangle $ABC$ has $AB=5$, $AC=8$, $\angle BAC=60^\circ$. Find $\overrightarrow{AB}\cdot\overrightarrow{AC}$, then use $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ to find $BC$.

::hint
**What you need:** the definition of the scalar product; $|\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.

**Steps:**
1. $\overrightarrow{AB}\cdot\overrightarrow{AC}=5\cdot8\cdot\cos60^\circ$.
2. Square $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$.

::solution
The angle between $\overrightarrow{AB}$ and $\overrightarrow{AC}$ is $\angle BAC=60^\circ$, so
$$\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\cdot AC\cdot\cos60^\circ=5\cdot8\cdot\frac12=20.$$

By the subtraction rule, $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$. Squaring both sides (scalar square):
$$\begin{aligned}BC^2&=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2\\&=64-2\cdot20+25=49.\end{aligned}$$
Since $BC>0$, $BC=7$.

This equality is exactly the cosine rule $BC^2=AB^2+AC^2-2\,AB\cdot AC\cos A$, because $\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\cdot AC\cos A$.

So $\overrightarrow{AB}\cdot\overrightarrow{AC}=20$ and $BC=7$.

**Answer.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=20$; $BC=7$.
:::

:::exercise Challenge
Find a vector $\vec{b}$ perpendicular to $\vec{a}=(3, 4)$ with $|\vec{b}|=10$.

::hint
**What you need:** $\vec{b}=(x, y)\perp\vec{a}\iff 3x+4y=0$; every such vector has the form $t(4, -3)$.

**Steps:**
1. Write $\vec{b}=t(4, -3)$ and express $|\vec{b}|$ in terms of $t$.
2. Solve $|\vec{b}|=10$.

::solution
Let $\vec{b}=(x, y)$. The condition $\vec{b}\perp\vec{a}$ gives
$$3x+4y=0.$$
Every pair $(x, y)=(4t, -3t)$ with $t\in\mathbb{R}$ satisfies it, since $3\cdot4t+4\cdot(-3t)=0$; conversely, from $3x=-4y$ we put $t=\dfrac{x}{4}$, and then $y=-3t$. So $\vec{b}=(4t, -3t)$.

The condition $|\vec{b}|=10$ gives
$$\sqrt{(4t)^2+(-3t)^2}=10\iff\sqrt{25t^2}=10\iff5|t|=10\iff t=\pm2.$$

For $t=2$: $\vec{b}=(8, -6)$. For $t=-2$: $\vec{b}=(-8, 6)$.

Check: $3\cdot8+4\cdot(-6)=0$ and $\sqrt{64+36}=10$.

So $\vec{b}=(8, -6)$ or $\vec{b}=(-8, 6)$.

**Answer.** $\vec{b}=(8, -6)$ or $\vec{b}=(-8, 6)$.
:::

:::exercise Challenge
Prove that if $|\vec{a}|=|\vec{b}|$ then $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$. Check it for $\vec{a}=(3, 4)$ and $\vec{b}=(5, 0)$, and explain the result with a rhombus.

::hint
**What you need:** the distributive property and $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.

**Steps:**
1. Expand $(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})$ like a difference of two squares.
2. Substitute the numbers to check.

::solution
Proof. Using the distributive and commutative properties of the scalar product,
$$\begin{aligned}(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})&=\vec{a}\cdot\vec{a}-\vec{a}\cdot\vec{b}+\vec{b}\cdot\vec{a}-\vec{b}\cdot\vec{b}\\&=|\vec{a}|^2-|\vec{b}|^2.\end{aligned}$$
If $|\vec{a}|=|\vec{b}|$, this expression is $0$, hence $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$ (when these two vectors are non-zero).

Check with $\vec{a}=(3, 4)$, $\vec{b}=(5, 0)$: we have $|\vec{a}|=\sqrt{9+16}=5=|\vec{b}|$. Then $\vec{a}+\vec{b}=(8, 4)$, $\vec{a}-\vec{b}=(-2, 4)$ and
$$(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})=8\cdot(-2)+4\cdot4=-16+16=0.$$

Explanation with a rhombus: put $\overrightarrow{OA}=\vec{a}$, $\overrightarrow{OB}=\vec{b}$ and complete the parallelogram $OACB$. By the parallelogram rule, $\overrightarrow{OC}=\vec{a}+\vec{b}$, while $\overrightarrow{BA}=\vec{a}-\vec{b}$; these are the two diagonals. Since $OA=OB$, the parallelogram has two equal adjacent sides, so it is a rhombus, and the diagonals of a rhombus are perpendicular.

So if $|\vec{a}|=|\vec{b}|$ then $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$; this is exactly the fact that the diagonals of a rhombus are perpendicular.

**Answer.** Proved: the diagonals of a rhombus are perpendicular.
:::

## Mini test

:::quiz
::mc NB
Let $|\vec a|=4$, $|\vec b|=5$ and $(\vec a, \vec b)=120^\circ$. The scalar product $\vec a\cdot\vec b$ is
A. $10$.
B. $-10$.
C. $20$.
D. $-10\sqrt3$.
::key B
$\vec a\cdot\vec b=4\cdot5\cdot\cos120^\circ=20\cdot\left(-\dfrac12\right)=-10$. Option A loses the minus sign of $\cos120^\circ$; C forgets to multiply by the cosine.

::mc NB
Let $\vec a=(2, -3)$ and $\vec b=(4, 1)$. Then $\vec a\cdot\vec b$ equals
A. $5$.
B. $(8, -3)$.
C. $11$.
D. $-5$.
::key A
$\vec a\cdot\vec b=2\cdot4+(-3)\cdot1=8-3=5$. The scalar product is a number, not a vector (option B).

::mc TH
Which vector is perpendicular to $\vec a=(3, -2)$?
A. $(2, 3)$.
B. $(3, 2)$.
C. $(-3, 2)$.
D. $(2, -3)$.
::key A
$3\cdot2+(-2)\cdot3=0$. For B, C and D the scalar products are $5$, $-13$ and $12$, none of them $0$; the vector in C points the opposite way to $\vec a$.

::mc TH
Triangle $ABC$ is equilateral with side $2$. The scalar product $\overrightarrow{AB}\cdot\overrightarrow{BC}$ is
A. $2$.
B. $-2$.
C. $4$.
D. $2\sqrt3$.
::key B
The vectors do not share a tail; moving $\overrightarrow{AB}$ to the tail $B$ gives an angle of $180^\circ-60^\circ=120^\circ$. So the product is $2\cdot2\cdot\cos120^\circ=-2$. Option A wrongly uses the angle $\angle ABC=60^\circ$.

::tf NB TH VD TH
In the coordinate plane, let $A(1, 1)$, $B(4, 2)$ and $C(2, 4)$.
a) $\overrightarrow{AB}\cdot\overrightarrow{AC}=6$.
b) Triangle $ABC$ is isosceles with apex $A$.
c) $\angle BAC=60^\circ$.
d) The angle $\angle ABC$ is obtuse.
::key T T F F
$\overrightarrow{AB}=(3, 1)$ and $\overrightarrow{AC}=(1, 3)$. a) True: $3+3=6$. b) True: $AB=AC=\sqrt{10}$. c) False: $\cos A=\dfrac{6}{10}=0.6\ne\dfrac12$ (the angle is about $53.1^\circ$). d) False: $\overrightarrow{BA}\cdot\overrightarrow{BC}=(-3)(-2)+(-1)\cdot2=4>0$, so angle $B$ is acute.

::sa VD
Let $|\vec a|=3$, $|\vec b|=4$ and $(\vec a, \vec b)=60^\circ$. Find $|\vec a+\vec b|$ (rounded to two decimal places).
::key 6.08
$\vec a\cdot\vec b=3\cdot4\cdot\dfrac12=6$, so $|\vec a+\vec b|^2=9+2\cdot6+16=37$ and $|\vec a+\vec b|=\sqrt{37}\approx6.08$.

::sa TH
A worker drags a crate across the floor with a rope, using a force of $50$ N; the rope makes an angle of $40^\circ$ with the direction of motion. The crate moves $10$ m. Find the work done by the pull, in joules, rounded to the nearest whole number.
::key 383
$W=\vec F\cdot\vec d=50\cdot10\cdot\cos40^\circ\approx383$ J.
:::
