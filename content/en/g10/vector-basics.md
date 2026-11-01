---
title: Vectors, basic ideas
description: Learn what a vector is, how to describe its direction and length, and when two vectors are equal, collinear or opposite.
minutes: 16
---

:::goals
- Explain what a vector is and name its initial point, terminal point, direction and magnitude.
- Recognise the zero vector, collinear vectors, equal vectors and opposite vectors.
- Decide from a figure whether two vectors have the same direction, opposite directions or the same length.
- Use vectors to describe forces, velocities and displacements.
:::

Suppose a friend texts you: "The canteen is 200 m from the gate." Can you find it? Not really: you also need to know **which way** to walk. A number such as 200 m only gives a size. A size together with a direction is the idea behind a **vector**. Forces, velocities and displacements all work this way, which is why vectors are the language of physics, navigation and computer graphics.

## From a segment to a vector

A line segment $AB$ has two endpoints and a length. If we decide which endpoint is the *start* and which is the *end*, the segment gets a direction. We draw an arrow from the start to the end.

:::definition Vector
A **vector** is a line segment with a chosen direction: one endpoint is the **initial point** (the tail) and the other is the **terminal point** (the head). The vector with initial point $A$ and terminal point $B$ is written $\overrightarrow{AB}$. A vector can also be named by one small letter with an arrow, such as $\vec{a}$, $\vec{u}$.
:::

:::diagram The vector $\overrightarrow{AB}$ with its initial point A and terminal point B
alt: An arrow starting at point A at the lower left and ending at point B at the upper right, labelled u.
point A 0,0 below
point B 4,2 above
arrow A B "u"
:::

Two things describe a vector:

- its **direction**, given by the line $AB$ and the arrow;
- its **magnitude** (length) $|\overrightarrow{AB}|$, which is the length of the segment $AB$. So $|\overrightarrow{AB}| = AB$.

A vector with magnitude $1$ is called a **unit vector**.

### The zero vector

If the initial and terminal points are the same point, we get the vector $\overrightarrow{AA}$. It has no length and no particular direction. All such vectors are regarded as one vector, the **zero vector**, written $\vec{0}$. So $|\vec{0}| = 0$, and $\overrightarrow{AA} = \overrightarrow{BB} = \vec{0}$ for any points $A$ and $B$.

## Same direction, opposite direction, collinear

The **line of action** (or support) of a nonzero vector $\overrightarrow{AB}$ is the line $AB$. Two nonzero vectors are **collinear** if their lines of action are parallel or coincide. Collinear vectors point either the same way or in opposite ways.

:::definition Collinear vectors
Two nonzero vectors $\vec{a}$ and $\vec{b}$ are **collinear** if their lines of action are parallel or coincide. Then they have either the **same direction** or **opposite directions**. By convention, the zero vector is collinear with every vector.
:::

:::diagram Same direction and opposite directions
alt: Three arrows. The first two are parallel and point to the upper right, the third is parallel to them but points to the lower left.
point A 0,0 ""
point B 2,1 ""
point C 1,-1 ""
point D 4,0.5 ""
point E 5,2 ""
point F 3,1 ""
arrow A B "a"
arrow C D "b"
arrow E F "c"
:::

In the figure, $\vec{a}$ and $\vec{b}$ have the same direction, while $\vec{c}$ has the opposite direction to both. All three are collinear, even though they do not lie on one line, because their lines of action are parallel.

## Equal vectors and opposite vectors

:::definition Equal vectors and opposite vectors
- Two vectors $\vec{a}$ and $\vec{b}$ are **equal**, written $\vec{a} = \vec{b}$, if they have the **same direction** and the **same magnitude**.
- The **opposite vector** of $\vec{a}$, written $-\vec{a}$, has the same magnitude as $\vec{a}$ but the opposite direction. In particular, $\overrightarrow{BA} = -\overrightarrow{AB}$, and $-\vec{0} = \vec{0}$.
:::

Notice that an equal vector can be drawn *anywhere* in the plane: we may slide a vector without turning it and without changing its length, and it stays the same vector. This is what lets us add forces drawn from different points later on.

:::diagram In the parallelogram $ABCD$, $\overrightarrow{AB} = \overrightarrow{DC}$
alt: A parallelogram ABCD with an arrow from A to B and an equal arrow from D to C, both labelled u.
point A 0,0 below-left
point B 4,0 below-right
point C 5,2 above-right
point D 1,2 above-left
polygon A B C D
arrow A B "u"
arrow D C "u"
:::

A handy fact: for four points $A, B, C, D$ not on one line, $ABCD$ is a parallelogram **if and only if** $\overrightarrow{AB} = \overrightarrow{DC}$.

:::example Vectors in a rectangle
Rectangle $ABCD$ has $AB = 6$ and $AD = 8$. Let $O$ be the intersection of the diagonals.

a) Find $|\overrightarrow{AC}|$.
b) Name a vector equal to $\overrightarrow{AO}$, and one opposite to $\overrightarrow{AB}$.
c) Is $\overrightarrow{AB} = \overrightarrow{CD}$?

**Solution.**
a) $|\overrightarrow{AC}| = AC$. In the right triangle $ABC$ (right angle at $B$, with $BC = AD = 8$), Pythagoras gives $AC = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$. So $|\overrightarrow{AC}| = 10$.

b) The diagonals of a rectangle bisect each other, so $O$ is the midpoint of $AC$. Then $\overrightarrow{AO}$ and $\overrightarrow{OC}$ have the same direction and the same length, so $\overrightarrow{AO} = \overrightarrow{OC}$. The opposite vector of $\overrightarrow{AB}$ is $\overrightarrow{BA}$. Another one is $\overrightarrow{CD}$ (see part c).

c) $\overrightarrow{AB}$ and $\overrightarrow{CD}$ lie on parallel lines and have the same length $6$, but $\overrightarrow{AB}$ points from $A$ to $B$ while $\overrightarrow{CD}$ points the other way (from $C$ to $D$, and $\overrightarrow{DC} = \overrightarrow{AB}$). So they have opposite directions: $\overrightarrow{AB} \neq \overrightarrow{CD}$, and in fact $\overrightarrow{CD} = -\overrightarrow{AB}$.
:::

:::diagram Regular hexagon with centre O
alt: A regular hexagon ABCDEF with centre O. Arrows from A to B and from O to C are drawn and labelled u.
point A 2,0 right
point B 1,1.732 above-right
point C -1,1.732 above-left
point D -2,0 left
point E -1,-1.732 below-left
point F 1,-1.732 below-right
point O 0,0 below
polygon A B C D E F
arrow A B "u"
arrow O C "u"
:::

:::example A regular hexagon
$ABCDEF$ is a regular hexagon with centre $O$ (see the figure). List all vectors equal to $\overrightarrow{AB}$ whose endpoints are among the seven points $A, B, C, D, E, F, O$, other than $\overrightarrow{AB}$ itself.

**Solution.**
A regular hexagon is made of six equilateral triangles meeting at $O$, so $OA = OB = \dots = AB$. We look for segments parallel to $AB$, of the same length, pointing the same way.

- $ABCO$ is a rhombus, so $OC \parallel AB$, $OC = AB$, and both point the same way. Hence $\overrightarrow{OC} = \overrightarrow{AB}$.
- $ABOF$ is a rhombus as well, so $\overrightarrow{FO} = \overrightarrow{AB}$.
- The diagonals $AD$ and $BE$ of the quadrilateral $ABDE$ are diameters, so they bisect each other at $O$ and have equal length. Thus $ABDE$ is a rectangle, with $AB$ and $ED$ as opposite sides, and $\overrightarrow{ED} = \overrightarrow{AB}$.

So the vectors are $\overrightarrow{OC}$, $\overrightarrow{FO}$ and $\overrightarrow{ED}$.
:::

:::example Velocities of two ships
Ship P sails at $12$ km/h towards the north. Ship Q sails at $12$ km/h towards the south. Ship R sails at $12$ km/h towards the east. Compare the velocity vectors.

**Solution.**
A velocity is a vector: it has a magnitude (the speed) and a direction.

- P and Q have the same magnitude $12$, and their directions are opposite. So their velocity vectors are opposite vectors.
- P and R have the same magnitude, but north and east are not parallel. So the vectors are not collinear and not equal, although they have the same magnitude.
- Equal vectors need both the same direction and the same magnitude: none of the three velocities are equal.
:::

:::warning Common mistakes
- **Equal length does not mean equal vectors.** $|\vec{a}| = |\vec{b}|$ says nothing about direction.
- **Collinear does not mean equal.** A vector and its opposite are collinear but different.
- **The order of the letters matters.** $\overrightarrow{AB} \neq \overrightarrow{BA}$ unless $A = B$; but $|\overrightarrow{AB}| = |\overrightarrow{BA}|$.
- The zero vector has **no** direction, yet it is collinear with every vector by convention.
:::

## Key terms

:::terms
- vector | vectơ
- initial point | điểm đầu
- terminal point | điểm cuối
- direction | hướng
- magnitude (length) | độ dài (môđun) của vectơ
- zero vector | vectơ không
- collinear vectors | các vectơ cùng phương
- same direction | cùng hướng
- equal vectors | hai vectơ bằng nhau
- opposite vector | vectơ đối
:::

## Summary

- A vector $\overrightarrow{AB}$ is a segment with a direction from the initial point $A$ to the terminal point $B$; its magnitude is $|\overrightarrow{AB}| = AB$.
- The zero vector $\vec{0}$ has magnitude $0$ and no definite direction.
- Collinear vectors have parallel (or identical) lines of action; they point in the same or in opposite directions.
- $\vec{a} = \vec{b}$ means same direction and same magnitude, so a vector can be moved freely without changing it.
- The opposite vector $-\vec{a}$ has the same magnitude and the opposite direction; $\overrightarrow{BA} = -\overrightarrow{AB}$.
- $ABCD$ is a parallelogram if and only if $\overrightarrow{AB} = \overrightarrow{DC}$.

## Practice

:::practice
1. Which of these are vectors and which are only numbers (scalars)? (a) the mass of a bag, 5 kg; (b) a wind of 30 km/h blowing from the west; (c) the temperature, 25 °C; (d) a force of 20 N pushing downwards; (e) a walk of 3 km due east.
2. $ABCD$ is a square of side $3$. Find $|\overrightarrow{AB}|$ and $|\overrightarrow{AC}|$. Is $\overrightarrow{AB} = \overrightarrow{DC}$? Is $\overrightarrow{AB} = \overrightarrow{BC}$?
3. $ABCD$ is a parallelogram with centre $O$. Name a vector equal to $\overrightarrow{AO}$, a vector equal to $\overrightarrow{BO}$, and two vectors opposite to $\overrightarrow{AB}$.
4. True or false? Explain briefly. (a) Equal vectors are collinear. (b) Collinear vectors are equal. (c) $\vec{0}$ is collinear with every vector. (d) $|\overrightarrow{AB}| = |\overrightarrow{BA}|$. (e) If $|\vec{a}| = |\vec{b}|$ then $\vec{a} = \vec{b}$.
5. Boat M moves at $15$ km/h towards the east and boat N at $15$ km/h towards the west. How are their velocity vectors related?
6. $ABCDEF$ is a regular hexagon with centre $O$. List all vectors equal to $\overrightarrow{OA}$ whose endpoints are among $A, B, C, D, E, F, O$.
7. A parallelogram has vertices $A, B, C, D$. How many nonzero vectors have both endpoints among these four points? How many *different* vectors are these (counting equal vectors once)?
8. Points $A, B, C, D$ are not on one line and $\overrightarrow{AB} = \overrightarrow{CD}$. Show that $ABDC$ is a parallelogram.
9. A point $A$ is marked on the plane and a vector $\vec{u}$ with $|\vec{u}| = 3$ is given. (a) Describe all points $B$ with $|\overrightarrow{AB}| = 3$. (b) How many points $B$ satisfy $\overrightarrow{AB} = \vec{u}$?
:::

:::solution Show solutions
1. A vector needs a magnitude **and** a direction. (b) wind, (d) force, (e) walk are vectors. (a) mass and (c) temperature are scalars.
2. $|\overrightarrow{AB}| = AB = 3$. By Pythagoras $|\overrightarrow{AC}| = \sqrt{3^2+3^2} = 3\sqrt{2}$. $ABCD$ is a parallelogram, so $\overrightarrow{AB} = \overrightarrow{DC}$ (yes). $\overrightarrow{AB}$ and $\overrightarrow{BC}$ have the same length but perpendicular directions, so they are not equal (no).
3. The diagonals bisect each other, so $O$ is the midpoint of $AC$ and of $BD$. Hence $\overrightarrow{AO} = \overrightarrow{OC}$ and $\overrightarrow{BO} = \overrightarrow{OD}$. Opposite to $\overrightarrow{AB}$: $\overrightarrow{BA}$ and $\overrightarrow{CD}$ (because $\overrightarrow{AB} = \overrightarrow{DC}$).
4. (a) True: equal vectors have the same direction, so their lines of action are parallel or identical. (b) False: $\vec{a}$ and $-\vec{a}$ are collinear but not equal. (c) True, by convention. (d) True: both equal the length of segment $AB$. (e) False: the directions may differ.
5. Same magnitude ($15$) and opposite directions, so the two velocity vectors are opposite vectors.
6. $\overrightarrow{OA}$ goes from the centre to vertex $A$. As in the example, the rhombi and parallelograms of the hexagon give three vectors of the same length, parallel to $OA$ and pointing the same way: $\overrightarrow{DO}$ (from $D$ through the centre to $O$), $\overrightarrow{CB}$ and $\overrightarrow{EF}$ (both parallel to the diagonal $AD$, pointing towards the side of $A$). So the vectors are $\overrightarrow{DO}$, $\overrightarrow{CB}$, $\overrightarrow{EF}$.
7. Each ordered pair of distinct points gives a nonzero vector: $4 \cdot 3 = 12$. In parallelogram $ABCD$: $\overrightarrow{AB} = \overrightarrow{DC}$, $\overrightarrow{BA} = \overrightarrow{CD}$, $\overrightarrow{AD} = \overrightarrow{BC}$, $\overrightarrow{DA} = \overrightarrow{CB}$, and $\overrightarrow{AC}$, $\overrightarrow{CA}$, $\overrightarrow{BD}$, $\overrightarrow{DB}$ are all different. So there are $4 + 4 = 8$ different vectors.
8. Since $\overrightarrow{AB} = \overrightarrow{CD}$, the segments $AB$ and $CD$ are parallel and have the same length, and the points are not on one line. Now apply the fact from the lesson to the quadrilateral $ABDC$ (vertices in this order): it says that a quadrilateral $PQRS$ is a parallelogram when $\overrightarrow{PQ} = \overrightarrow{SR}$. With $P = A$, $Q = B$, $R = D$, $S = C$, the condition reads $\overrightarrow{AB} = \overrightarrow{CD}$, which is true. So $ABDC$ is a parallelogram.
9. (a) These points form the circle with centre $A$ and radius $3$. (b) Exactly one: $B$ is the point obtained by drawing a copy of $\vec{u}$ starting at $A$.
:::
