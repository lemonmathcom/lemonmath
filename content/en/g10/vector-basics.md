---
title: Vectors: basic ideas
description: Learn what a vector is, how to describe its direction and length, and when two vectors are equal, collinear or opposite.
minutes: 25
---

:::goals
- Explain what a vector is and name its initial point, terminal point, direction and magnitude.
- Recognise the zero vector, collinear vectors, equal vectors and opposite vectors.
- Decide from a figure whether two vectors have the same direction, opposite directions or the same length.
- Use vectors to describe forces, velocities and displacements.
:::

From the school gate, Lan walks $200$ m straight towards the north, while Minh walks $200$ m straight towards the east. They cover the same distance. Are they standing in the same place?

Certainly not. They walked the same distance but in different **directions**, so they end up quite far apart. The number $200$ m tells only half the story: how far. The other half is where to. Wrap the size and the direction into one object and you have a **vector**. A push, a velocity, a displacement in real life all need both pieces of information, which is why vectors are a language that physics, navigation maps and computer graphics use every day.

## From a segment to a vector

Let us experiment on squared paper. An ant crawls in a straight line from a point $A$ to a point $B$, $4$ squares to the right and $3$ squares up. By Pythagoras' theorem, it crawls $\sqrt{4^2+3^2}=5$ squares.

Now the ant crawls back from $B$ to $A$. The distance is still $5$ squares, but the motion is different: it goes the other way. A plain segment $AB$ cannot tell these two trips apart. To describe the motion fully we must give the **start**, the **end** and the **length**. An arrow does exactly that: one look tells you where it starts, where it ends and how long it is.

:::definition Vector
A **vector** is a line segment with a chosen direction: one endpoint is the **initial point** (the tail) and the other is the **terminal point** (the head). The vector with initial point $A$ and terminal point $B$ is written $\overrightarrow{AB}$. A vector can also be named by one small letter with an arrow, such as $\vec{a}$, $\vec{u}$.
:::

:::diagram The vector $\overrightarrow{AB}$ with its initial point A and terminal point B
alt: An arrow starting at point A at the lower left and ending at point B at the upper right, labelled u.
point A 0,0 below
point B 4,2 above
arrow A B "u"
:::

So to know a vector, you need two things:

- its **direction**, given by the line $AB$ and the arrow;
- its **magnitude** (length) $|\overrightarrow{AB}|$, which is the length of the segment $AB$. So $|\overrightarrow{AB}| = AB$.

A vector with magnitude $1$ is called a **unit vector**.

### The zero vector

If the initial and terminal points are the same point, we get the vector $\overrightarrow{AA}$. Its length is $0$ and it has no particular direction. It sounds a little odd, like "going nowhere", but it is very useful in calculations later, just as the number $0$ is useful in addition. All such vectors are regarded as one vector, the **zero vector**, written $\vec{0}$. So $|\vec{0}| = 0$, and $\overrightarrow{AA} = \overrightarrow{BB} = \vec{0}$ for any points $A$ and $B$.

The first example needs only the definition and Pythagoras' theorem, but it shows something important: the same length does not mean the same vector.

:::example The length of a vector
Triangle $ABC$ has a right angle at $A$, with $AB=5$ and $AC=12$. Find $|\overrightarrow{BC}|$ and $|\overrightarrow{CB}|$. Are the two vectors equal?

**Solution.** The length of a vector is the length of the segment joining its endpoints, so we find $BC$ by Pythagoras' theorem:

$$|\overrightarrow{BC}|=BC=\sqrt{AB^2+AC^2}=\sqrt{25+144}=\sqrt{169}=13.$$

The segment $CB$ is the same segment as $BC$, so $|\overrightarrow{CB}|=13$. The two vectors have the same length but opposite directions, so $|\overrightarrow{BC}|=|\overrightarrow{CB}|=13$ while $\overrightarrow{BC}\neq\overrightarrow{CB}$.
:::

## Same direction, opposite direction, collinear

Think of trains on one railway line: whether they go up the line or down, they travel along the same track. Vectors are similar: before asking "which way does it point?", we ask "along which line does it lie?". The **line of action** of a non-zero vector $\overrightarrow{AB}$ is the line $AB$ that contains it. Two non-zero vectors are **collinear** if their lines of action are parallel or coincide. Collinear vectors point either the same way or in opposite ways.

:::definition Collinear vectors
Two non-zero vectors $\vec{a}$ and $\vec{b}$ are **collinear** if their lines of action are parallel or coincide. Then they have either the **same direction** or **opposite directions**. By convention, the zero vector is collinear with every vector.
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

The words "collinear", "same direction" and "opposite direction" are easy to mix up at first. We practise them with velocity, a very familiar quantity with a direction.

:::example Velocities of three ships
Ship P sails at $18$ km/h towards the north, ship Q at $18$ km/h towards the south and ship R at $25$ km/h towards the north. Among the three velocity vectors, which pairs are collinear and which have the same direction?

**Solution.** North and south lie on the same line (north–south), so we only need to compare the way each ship points:

- P and R both sail north: their vectors have the **same direction**.
- P and Q, and also Q and R, sail opposite ways: their vectors have **opposite directions**.

So all three velocity vectors are collinear; only the pair P, R has the same direction, and the other two pairs have opposite directions.
:::

## Equal vectors and opposite vectors

:::definition Equal vectors and opposite vectors
- Two vectors $\vec{a}$ and $\vec{b}$ are **equal**, written $\vec{a} = \vec{b}$, if they have the **same direction** and the **same magnitude**.
- The **opposite vector** of $\vec{a}$, written $-\vec{a}$, has the same magnitude as $\vec{a}$ but the opposite direction. In particular, $\overrightarrow{BA} = -\overrightarrow{AB}$, and $-\vec{0} = \vec{0}$.
:::

Back to the three ships: P and R point the same way but their speeds differ ($18$ and $25$), so their velocity vectors are **not** equal. P and Q have the same magnitude $18$ and opposite directions, so the velocity of Q is the opposite vector of the velocity of P.

Here is something that may sound strange at first: a vector cares only about its direction and its length, not about where it is drawn. So a vector can be drawn **anywhere** in the plane. We may slide a vector without turning it and without changing its length, and it stays the same vector, just as the instruction "walk $200$ m north" makes sense wherever you are standing. This is what lets us add forces drawn from different points later on.

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

:::theorem Parallelograms and equal vectors
For four points $A, B, C, D$ not on one line, $ABCD$ is a parallelogram **if and only if** $\overrightarrow{AB} = \overrightarrow{DC}$.
:::

**Why?** If $ABCD$ is a parallelogram, then $AB\parallel DC$ and $AB=DC$; the arrows $A\to B$ and $D\to C$ point the same way, so the vectors are equal. Conversely, if $\overrightarrow{AB}=\overrightarrow{DC}$, the quadrilateral $ABCD$ has a pair of opposite sides $AB$, $DC$ that are parallel and equal, so it is a parallelogram.

A rectangle is a parallelogram too, so we use this fact straight away to find equal vectors in a rectangle.

:::example Vectors in a rectangle
Rectangle $ABCD$ has $AB = 6$ and $AD = 8$. Let $O$ be the intersection of the diagonals.

a) Find $|\overrightarrow{AC}|$.
b) Name a vector equal to $\overrightarrow{AO}$, and two vectors opposite to $\overrightarrow{AB}$.
c) Is $\overrightarrow{AB} = \overrightarrow{CD}$?

**Solution.** a) Triangle $ABC$ has a right angle at $B$ and $BC=AD=8$, so:

$$|\overrightarrow{AC}|=AC=\sqrt{6^2+8^2}=\sqrt{100}=10.$$

b) The diagonals bisect each other, so $O$ is the midpoint of $AC$. The vectors $\overrightarrow{AO}$, $\overrightarrow{OC}$ have the same direction and the same length $5$, so $\overrightarrow{AO}=\overrightarrow{OC}$. The opposite vector of $\overrightarrow{AB}$ is $\overrightarrow{BA}$, and also $\overrightarrow{CD}$, because $\overrightarrow{CD}=-\overrightarrow{DC}=-\overrightarrow{AB}$.

c) $ABCD$ is a parallelogram, so $\overrightarrow{AB}=\overrightarrow{DC}$, and $\overrightarrow{CD}$ points the opposite way to $\overrightarrow{DC}$.

So $|\overrightarrow{AC}|=10$, $\overrightarrow{AO}=\overrightarrow{OC}$, and the claim in c) is false: $\overrightarrow{CD}=-\overrightarrow{AB}$.
:::

When a figure has many points, looking at random means missing some. It is better to search in order: first find segments that are **parallel**, among them pick those **equal in length**, and only then check the **direction**.

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

**Solution.** A regular hexagon is made of six equilateral triangles meeting at $O$, so every side and every segment from $O$ to a vertex equals $AB$. We look for parallelograms with $AB$ as a side:

- $ABCO$ is a rhombus, so $\overrightarrow{AB}=\overrightarrow{OC}$.
- $ABOF$ is a rhombus, so $\overrightarrow{AB}=\overrightarrow{FO}$.
- $ABDE$ has equal diagonals $AD$, $BE$ that bisect each other at $O$, so it is a rectangle; hence $\overrightarrow{AB}=\overrightarrow{ED}$.

So three vectors equal $\overrightarrow{AB}$: $\overrightarrow{OC}$, $\overrightarrow{FO}$ and $\overrightarrow{ED}$.

**Check.** $\overrightarrow{DE}$ also lies on a line parallel to $AB$ and has the same length, but it points the other way, so it is an opposite vector, not an equal one.
:::

The last example goes the other way: from two equal vectors we prove that a quadrilateral is a parallelogram.

:::example Midpoints in a parallelogram
Let $ABCD$ be a parallelogram, and let $M$, $N$ be the midpoints of $AB$ and $CD$. Prove that $\overrightarrow{AM}=\overrightarrow{NC}$, and deduce that $AMCN$ is a parallelogram.

**Solution.** We compare the direction and the length of the two vectors, then use the parallelogram theorem.

Since $ABCD$ is a parallelogram, $\overrightarrow{AB}=\overrightarrow{DC}$. The point $M$ lies between $A$ and $B$, so $\overrightarrow{AM}$ has the direction of $\overrightarrow{AB}$; the point $N$ lies between $D$ and $C$, so $\overrightarrow{NC}$ has the direction of $\overrightarrow{DC}$. Hence $\overrightarrow{AM}$ and $\overrightarrow{NC}$ have the same direction.

For the lengths:

$$AM=\frac{AB}{2}=\frac{DC}{2}=NC.$$

So $\overrightarrow{AM}=\overrightarrow{NC}$. The points $A, M, C, N$ are not on one line, so by the theorem (applied to the quadrilateral $AMCN$), $AMCN$ is a parallelogram.
:::

:::warning Common mistakes
When you first meet vectors, it is easy to trip over the points below. Each time you conclude that two vectors are equal, ask yourself again: same direction? same length?
- **Equal length does not mean equal vectors.** Wrong: "$|\vec{a}|=|\vec{b}|$, so $\vec{a}=\vec{b}$". Length says nothing about direction; you also need the same direction.
- **Collinear does not mean equal.** A vector and its opposite are collinear but different.
- **The order of the letters matters.** Wrong: "$\overrightarrow{AB}=\overrightarrow{CD}$ because $ABCD$ is a parallelogram". Right: $\overrightarrow{AB}=\overrightarrow{DC}$, while $\overrightarrow{CD}=-\overrightarrow{AB}$.
- The zero vector has **no** definite direction, yet it is collinear with every vector by convention.
:::

## Key terms

:::terms
- vector | vectơ
- initial point | điểm đầu
- terminal point | điểm cuối
- direction | hướng
- magnitude (length) | độ dài (môđun) của vectơ
- zero vector | vectơ-không
- collinear vectors | các vectơ cùng phương
- same direction | cùng hướng
- equal vectors | hai vectơ bằng nhau
- opposite vector | vectơ đối
:::

## Summary

- Vector $\overrightarrow{AB}$: a segment with a direction, initial point $A$, terminal point $B$; magnitude $|\overrightarrow{AB}| = AB$.
- Zero vector $\vec{0}$: length $0$, no definite direction, collinear with every vector.
- Collinear: lines of action parallel or identical; then same or opposite direction.
- $\vec{a} = \vec{b}$: same direction **and** same magnitude. A vector can be moved without changing it.
- Opposite vector $-\vec{a}$: same magnitude, opposite direction; $\overrightarrow{BA} = -\overrightarrow{AB}$.
- $ABCD$ is a parallelogram $\iff\overrightarrow{AB} = \overrightarrow{DC}$ (watch the order of the letters).

Lan and Minh each walked $200$ m and still did not meet, because their displacement vectors have the same length but different directions. That is the heart of the whole lesson: a vector is fully known only when we know both its length and its direction.

## Practice

Each exercise reminds you what you need and gives some steps to start. Have a go yourself first; when there is a figure, draw the arrows on paper, and their directions will stop you mixing up the order of the letters. Then open the solution and compare.

:::exercise
Which of these are vectors and which are only numbers (scalars)? (a) the mass of a bag of rice, $5$ kg; (b) a wind of $30$ km/h blowing from the west; (c) the temperature, $25$ °C; (d) a force of $20$ N pushing downwards; (e) a displacement of $3$ km due east.

::hint
**What you need:** a vector has both a magnitude **and** a direction.

**Steps:**
1. For each quantity, ask: does it mention a direction?
2. With a direction it is a vector; without one it is a scalar.

::solution
The wind, the force and the displacement all come with a direction (from the west, downwards, due east). Mass and temperature have only a size.

**Answer.** (b), (d), (e) are vectors; (a), (c) are scalars.
:::

:::exercise
$ABCD$ is a square of side $3$. Find $|\overrightarrow{AB}|$ and $|\overrightarrow{AC}|$. Is $\overrightarrow{AB} = \overrightarrow{DC}$? Is $\overrightarrow{AB} = \overrightarrow{BC}$?

::hint
**What you need:** $|\overrightarrow{AB}|=AB$; equal vectors have the same direction and the same length.

**Steps:**
1. Find the diagonal $AC$ by Pythagoras' theorem.
2. Compare the directions in each pair of vectors.

::solution
$|\overrightarrow{AB}|=3$ and $|\overrightarrow{AC}|=\sqrt{3^2+3^2}=3\sqrt2$. A square is a parallelogram, so $\overrightarrow{AB}=\overrightarrow{DC}$. The vectors $\overrightarrow{AB}$ and $\overrightarrow{BC}$ have the same length but perpendicular lines of action, so they are not equal.

**Answer.** $|\overrightarrow{AB}|=3$, $|\overrightarrow{AC}|=3\sqrt2$; $\overrightarrow{AB}=\overrightarrow{DC}$ is true; $\overrightarrow{AB}=\overrightarrow{BC}$ is false.
:::

:::exercise
$ABCD$ is a parallelogram with centre $O$. Name a vector equal to $\overrightarrow{AO}$, a vector equal to $\overrightarrow{BO}$, and two vectors opposite to $\overrightarrow{AB}$.

::hint
**What you need:** the diagonals of a parallelogram bisect each other; $\overrightarrow{AB}=\overrightarrow{DC}$.

**Steps:**
1. $O$ is the midpoint of $AC$ and of $BD$.
2. Look for vectors with the length of $\overrightarrow{AB}$ that point the other way.

::solution
$O$ is the midpoint of $AC$, so $\overrightarrow{AO}=\overrightarrow{OC}$; $O$ is the midpoint of $BD$, so $\overrightarrow{BO}=\overrightarrow{OD}$. Since $\overrightarrow{AB}=\overrightarrow{DC}$, we get $\overrightarrow{CD}=-\overrightarrow{AB}$.

**Answer.** $\overrightarrow{OC}$; $\overrightarrow{OD}$; $\overrightarrow{BA}$ and $\overrightarrow{CD}$.
:::

:::exercise
Rectangle $ABCD$ has $AB=3$, $BC=4$, and $O$ is the intersection of its diagonals. Is each claim true or false?

a) $|\overrightarrow{BD}|=5$.
b) $\overrightarrow{OA}=\overrightarrow{OC}$.
c) $\overrightarrow{AD}=\overrightarrow{BC}$.
d) $\overrightarrow{AB}$ and $\overrightarrow{CD}$ have the same direction.

::hint
**What you need:** a rectangle is a parallelogram; its diagonals are equal and bisect each other.

**Steps:**
1. Find a diagonal by Pythagoras' theorem.
2. For each pair of vectors, compare direction and length.

::solution
a) **True.** $BD=AC=\sqrt{3^2+4^2}=5$.

b) **False.** $O$ is the midpoint of $AC$, so $\overrightarrow{OA}$ and $\overrightarrow{OC}$ both have length $2.5$ but opposite directions: $\overrightarrow{OA}=-\overrightarrow{OC}$.

c) **True.** $ABCD$ is a parallelogram, so $\overrightarrow{AD}=\overrightarrow{BC}$.

d) **False.** $\overrightarrow{AB}=\overrightarrow{DC}$, so $\overrightarrow{CD}$ points the opposite way to $\overrightarrow{AB}$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Three people pull a crate across the floor with three horizontal ropes: the first pulls with a force of $30$ N to the right, the second $30$ N to the left, the third $45$ N to the right. Let $\vec{F_1}$, $\vec{F_2}$, $\vec{F_3}$ be the three force vectors. Which pair has the same direction? Which pair are opposite vectors? Are any two of them equal?

::hint
**What you need:** opposite vectors have the same length and opposite directions; equal vectors need the same direction and the same length.

**Steps:**
1. All three forces are collinear (horizontal). Compare the way each pair points.
2. Compare the magnitudes of the pairs that matter.

::solution
$\vec{F_1}$ and $\vec{F_3}$ both point right but have different magnitudes ($30$ and $45$), so they are not equal. $\vec{F_1}$ and $\vec{F_2}$ have the same magnitude $30$ and opposite directions, so they are opposite. $\vec{F_2}$ and $\vec{F_3}$ point opposite ways and differ in size.

**Answer.** $\vec{F_1}$, $\vec{F_3}$ have the same direction; $\vec{F_2}=-\vec{F_1}$; no two of them are equal.
:::

:::exercise
$ABCDEF$ is a regular hexagon with centre $O$. List all vectors equal to $\overrightarrow{OA}$ (other than itself) whose endpoints are among $A, B, C, D, E, F, O$.

::hint
**What you need:** a regular hexagon is made of six equilateral triangles meeting at $O$; $ABCD$ is a parallelogram if and only if $\overrightarrow{AB}=\overrightarrow{DC}$.

**Steps:**
1. Find segments parallel to $OA$ with the same length as $OA$.
2. Keep only the vectors that point the same way as $O\to A$.

::solution
$D$, $O$, $A$ lie on one line and $DO=OA$, so $\overrightarrow{DO}=\overrightarrow{OA}$. $OABC$ is a rhombus, so $\overrightarrow{OA}=\overrightarrow{CB}$. $OAFE$ is a rhombus, so $\overrightarrow{OA}=\overrightarrow{EF}$.

**Answer.** $\overrightarrow{DO}$, $\overrightarrow{CB}$, $\overrightarrow{EF}$.
:::

:::exercise
In triangle $ABC$, let $M$, $N$, $P$ be the midpoints of $BC$, $CA$, $AB$. How many vectors with endpoints among the six points $A, B, C, M, N, P$ are equal to $\overrightarrow{PN}$ (counting $\overrightarrow{PN}$ itself)?

::hint
**What you need:** the midsegment $PN$ is parallel to $BC$ and half as long.

**Steps:**
1. Find the segments on $BC$ whose length is $\dfrac{BC}{2}$.
2. Check the direction: $P\to N$ goes from side $AB$ to side $AC$, the same way as $B\to C$.

::solution
$PN\parallel BC$ and $PN=\dfrac{BC}{2}=BM=MC$. The direction $P\to N$ is the direction $B\to C$, so $\overrightarrow{PN}=\overrightarrow{BM}=\overrightarrow{MC}$. No other segment is parallel to $BC$ with length $\dfrac{BC}{2}$.

**Answer.** $3$.
:::

:::exercise
(Revisiting the cosine rule.) Triangle $ABC$ has $AB=5$, $AC=8$ and $\angle BAC=60^\circ$. Find $|\overrightarrow{BC}|$.

::hint
**What you need:** the cosine rule $a^2=b^2+c^2-2bc\cos A$; $|\overrightarrow{BC}|=BC$.

**Steps:**
1. Write $BC^2$ by the cosine rule, with $\cos 60^\circ=\dfrac12$.
2. Take the square root.

::solution
$$BC^2=8^2+5^2-2\cdot8\cdot5\cdot\frac12=64+25-40=49.$$
So $BC=7$.

**Answer.** $|\overrightarrow{BC}|=7$.
:::

:::exercise Challenge
Points $A, B, C, D$ are not on one line and $\overrightarrow{AB} = \overrightarrow{CD}$. Show that $ABDC$ is a parallelogram.

::hint
**What you need:** a quadrilateral $PQRS$ (vertices in this order) is a parallelogram if and only if $\overrightarrow{PQ}=\overrightarrow{SR}$.

**Steps:**
1. Write the quadrilateral $ABDC$ as $PQRS$: $P=A$, $Q=B$, $R=D$, $S=C$.
2. Write the condition $\overrightarrow{PQ}=\overrightarrow{SR}$ in the letters $A, B, C, D$.

::solution
With $P=A$, $Q=B$, $R=D$, $S=C$, the condition $\overrightarrow{PQ}=\overrightarrow{SR}$ reads $\overrightarrow{AB}=\overrightarrow{CD}$, which is given. The four points are not on one line, so the quadrilateral $ABDC$ is a parallelogram.

**Answer.** $ABDC$ is a parallelogram (note: usually **not** $ABCD$).
:::

:::exercise Challenge
A parallelogram has vertices $A, B, C, D$. How many non-zero vectors have both endpoints among these four points? How many *different* vectors are these (counting equal vectors once)?

::hint
**What you need:** each ordered pair of distinct points gives a non-zero vector; $\overrightarrow{AB}=\overrightarrow{DC}$ and $\overrightarrow{AD}=\overrightarrow{BC}$.

**Steps:**
1. Count ordered pairs: choose the initial point, then the terminal point.
2. Group equal vectors together.

::solution
There are $4$ choices for the initial point and $3$ for the terminal point: $4\cdot3=12$ vectors. The sides give four equal pairs: $\overrightarrow{AB}=\overrightarrow{DC}$, $\overrightarrow{BA}=\overrightarrow{CD}$, $\overrightarrow{AD}=\overrightarrow{BC}$, $\overrightarrow{DA}=\overrightarrow{CB}$, that is $4$ different vectors. The four diagonal vectors $\overrightarrow{AC}$, $\overrightarrow{CA}$, $\overrightarrow{BD}$, $\overrightarrow{DB}$ are all different from each other and from the side vectors.

**Answer.** $12$ vectors, of which $4+4=8$ are different.
:::

## Mini test

:::quiz
::mc
Given three distinct points $A$, $B$, $C$, how many non-zero vectors have their initial and terminal points among these three points?
A. $3$.
B. $6$.
C. $9$.
D. $12$.
::key B
There are $3$ choices for the initial point and $2$ for a different terminal point: $3\cdot2=6$ vectors. Option A counts only segments (forgetting that $\overrightarrow{AB}\ne\overrightarrow{BA}$); option C also counts $\overrightarrow{AA}$, $\overrightarrow{BB}$, $\overrightarrow{CC}$.

::mc
$ABCD$ is a parallelogram. Which equality is true?
A. $\overrightarrow{AB}=\overrightarrow{CD}$.
B. $\overrightarrow{AB}=\overrightarrow{DC}$.
C. $\overrightarrow{AD}=\overrightarrow{CB}$.
D. $\overrightarrow{AC}=\overrightarrow{BD}$.
::key B
$\overrightarrow{AB}$ and $\overrightarrow{DC}$ have the same direction and the same length. Options A and C put the letters in the wrong order and give opposite vectors; the two diagonals in D are not collinear.

::mc
Triangle $ABC$ is equilateral with side $2$, and $M$ is the midpoint of $BC$. The magnitude of $\overrightarrow{AM}$ is
A. $\sqrt3$.
B. $2$.
C. $1$.
D. $\sqrt5$.
::key A
$AM$ is an altitude: $AM=\sqrt{AB^2-BM^2}=\sqrt{4-1}=\sqrt3$. Option C is $|\overrightarrow{BM}|$; option D adds $4+1$ in Pythagoras' theorem by mistake.

::mc
Which claim is true?
A. Two vectors with equal lengths are equal.
B. Two collinear vectors have the same direction.
C. The zero vector is collinear with every vector.
D. If $\overrightarrow{AB}$ and $\overrightarrow{CD}$ are collinear, then the four points $A$, $B$, $C$, $D$ lie on one line.
::key C
This is the convention. A is false because the same direction is also needed; B is false because collinear vectors may have opposite directions; D is false because the two lines of action may be parallel rather than the same line.

::tf
$ABCDEF$ is a regular hexagon with centre $O$.
a) $\overrightarrow{OA}=\overrightarrow{DO}$.
b) $\overrightarrow{FE}=\overrightarrow{OB}$.
c) $\overrightarrow{OB}$ and $\overrightarrow{OE}$ are opposite vectors.
d) $|\overrightarrow{AD}|=2|\overrightarrow{AB}|$.
::key T F T T
a) True: $D$, $O$, $A$ lie on one line in this order and $DO=OA$. b) False: $FE\parallel AD$ while $OB$ lies on the line $BE$, so the vectors are not collinear. c) True: $O$ is the midpoint of $BE$. d) True: $AD=2\cdot OA=2\cdot AB$.

::sa
$ABCD$ is a parallelogram, and $M$, $N$ are the midpoints of $AB$ and $CD$. How many vectors with endpoints in the set $\{A, B, C, D, M, N\}$ are equal to $\overrightarrow{AM}$ (counting $\overrightarrow{AM}$ itself)?
::key 4
The segments parallel to $AB$ with length $\dfrac{AB}{2}$ are $AM$, $MB$, $DN$, $NC$. Taking each one in the direction of $\overrightarrow{AB}$ gives $\overrightarrow{AM}$, $\overrightarrow{MB}$, $\overrightarrow{DN}$, $\overrightarrow{NC}$: $4$ vectors.

::sa
Rhombus $ABCD$ has side $5$ and $\angle BAD=60^\circ$. Find $|\overrightarrow{AC}|$ (rounded to one decimal place).
::key 8.7
The diagonal $AC$ bisects the angle $A$ and is perpendicular to $BD$, so $AC=2\cdot5\cos30^\circ=5\sqrt3\approx8.66$, which rounds to $8.7$.
:::
