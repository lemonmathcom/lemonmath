---
title: Vectors and their operations in space
description: Vectors in space: sum, difference, the parallelepiped rule, scalar multiples and the scalar product, used for lengths and angles in cuboids and tetrahedra.
minutes: 25
---

:::goals
- Recognise vectors in space, equal vectors and opposite vectors.
- Add and subtract vectors with the triangle rule, the parallelogram rule and the parallelepiped rule.
- Multiply a vector by a number and use the midpoint and centroid properties.
- Find the angle and the scalar product (dot product) of two vectors, and use them to find lengths and angles and to prove perpendicularity.
:::

A classroom is a cuboid $5$ m long, $4$ m wide and $3$ m high. We want to stretch a straight decorative string from one floor corner to the opposite, farthest ceiling corner. In which direction does the string run, and how many metres long must it be?

In the plane we described "in which direction, how far" with vectors. This lesson takes vectors into three dimensions, and by the end we will find the length of the string using vector operations alone.

The world around us has three dimensions: a drone flies east, then north, then up; three cables pull a heavy load in three different directions; a rafter slopes inside a roof frame. To describe and compute such movements and forces, we need one language for "direction" and "size" in space. Vectors are that language.

## Vectors in space

### Exploring: three journeys instead of one

Call the classroom the cuboid $ABCD.A'B'C'D'$ with $AB=5$, $AD=4$, $AA'=3$ (metres). An ant walks from $A$ to $C'$ along the edges: $5$ m along $AB$, then $4$ m along $BC$, then $3$ m up $CC'$. The string goes straight from $A$ to $C'$.

The two routes have the same start and the same end, so they give **the same displacement**. If we describe each piece of the route by an arrow, the arrow $AC'$ must be the "sum" of the three arrows $AB$, $BC$, $CC'$. To say this precisely, we need vectors in space.

:::diagram The cuboid $ABCD.A'B'C'D'$ and the diagonal $AC'$
alt: A cuboid drawn in oblique projection with the hidden edges dashed and an arrow from vertex A to vertex C'
point A 0,0 below-left
point B 5,0 below-right
point C 6.6,1.3 right
point D 1.6,1.3 above-left
point A' 0,3 left
point B' 5,3 above-left
point C' 6.6,4.3 above-right
point D' 1.6,4.3 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
arrow A C'
:::

:::definition Vectors in space
- A **vector** in space is a directed line segment. The vector $\overrightarrow{AB}$ has initial point $A$, terminal point $B$ and **length** $|\overrightarrow{AB}|=AB$.
- Two vectors are **collinear** (parallel) if their lines are parallel or the same; they then have the same direction or opposite directions.
- Two vectors are **equal** if they have the same direction and the same length. Two vectors are **opposite** if they have opposite directions and the same length.
- The **zero vector** $\vec{0}$ has its initial point equal to its terminal point, for example $\overrightarrow{AA}$.
:::

Every idea is exactly as in the plane; the only difference is that the vectors may now lie in different planes.

**A closer look.** A vector is not "stuck" to its position: $\overrightarrow{AA'}$ and $\overrightarrow{CC'}$ are the same vector, because they describe the same movement "up $3$ m". That is why we may "slide" a vector to a convenient place and join it head to tail with others, just as the ant joined three stretches of its route into one. What is new compared with the plane: any two vectors can always be placed in one plane, but three vectors may not be (we then say that the three vectors are not coplanar).

**Connections.** This lesson extends the vectors and scalar product of grade 10 into space, and uses the cuboids and tetrahedra of grade 11. In the next lesson we attach vectors to the coordinate system $Oxyz$, so that every operation becomes arithmetic on numbers.

:::example Spotting equal vectors in a parallelepiped
Let $ABCD.A'B'C'D'$ be a parallelepiped. Name the vectors other than $\overrightarrow{AA'}$ that are equal to $\overrightarrow{AA'}$ and whose endpoints are vertices of the parallelepiped. Do the same for the vectors opposite to $\overrightarrow{AB}$.

**Solution.** The four lateral edges $AA'$, $BB'$, $CC'$, $DD'$ are parallel and equal. Taking them from the bottom face to the top face, so that they point the same way as $\overrightarrow{AA'}$, we have

$$\overrightarrow{AA'}=\overrightarrow{BB'}=\overrightarrow{CC'}=\overrightarrow{DD'}.$$

The edges parallel to $AB$ are $DC$, $A'B'$, $D'C'$. Since an opposite vector of $\overrightarrow{AB}$ has the opposite direction and the same length, the opposite vectors are

$$\overrightarrow{BA},\quad \overrightarrow{CD},\quad \overrightarrow{B'A'},\quad \overrightarrow{C'D'}.$$

So there are $3$ other vectors equal to $\overrightarrow{AA'}$ and $4$ vectors opposite to $\overrightarrow{AB}$.
:::

## Sum and difference of two vectors

The sum of two vectors is defined as in the plane: place them tip to tail and join the first initial point to the last terminal point. Two vectors drawn from a common point always lie in one plane, so all the old rules still hold.

:::theorem Rules for adding vectors
- **Triangle rule:** for any points $A$, $B$, $C$: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ and $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$.
- **Parallelogram rule:** if $ABCD$ is a parallelogram then $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
- **Parallelepiped rule:** if $ABCD.A'B'C'D'$ is a parallelepiped then
$$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}.$$
:::

**Why is the parallelepiped rule true?** The face $ABCD$ is a parallelogram, so $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. The section $ACC'A'$ is also a parallelogram, so $\overrightarrow{AC}+\overrightarrow{AA'}=\overrightarrow{AC'}$. Putting the two together finishes the proof. This is exactly the ant's route: $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}$, because $\overrightarrow{BC}=\overrightarrow{AD}$ and $\overrightarrow{CC'}=\overrightarrow{AA'}$.

The next example shows how to "replace a vector by an equal one" so that vectors join tip to tail.

:::example Simplifying a vector sum
Let $ABCD.A'B'C'D'$ be a parallelepiped. Simplify

a) $\overrightarrow{AB}+\overrightarrow{B'C'}+\overrightarrow{DD'}$; b) $\overrightarrow{AD'}-\overrightarrow{AB}$.

**Solution.** a) We have $\overrightarrow{B'C'}=\overrightarrow{BC}$ and $\overrightarrow{DD'}=\overrightarrow{CC'}$ (parallel edges with the same direction and length). Hence

$$\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}=\overrightarrow{AC'}.$$

b) Since the two vectors share the initial point $A$, by the subtraction rule we have

$$\overrightarrow{AD'}-\overrightarrow{AB}=\overrightarrow{BD'}.$$

So a) equals $\overrightarrow{AC'}$ and b) equals $\overrightarrow{BD'}$.
:::

## Multiplying a vector by a number

For a number $k\neq0$ and a vector $\vec{a}\neq\vec{0}$, the vector $k\vec{a}$ has the same direction as $\vec{a}$ if $k>0$, the opposite direction if $k<0$, and length $|k|\cdot|\vec{a}|$. The familiar properties still hold; the two used most often are:

- If $I$ is the midpoint of $AB$ then for every point $M$: $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.
- If $G$ is the centroid of triangle $ABC$ then $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}$, and for every $M$: $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.

In space the points need not lie in one plane, so we often "take a detour" through points we know.

:::example The segment joining midpoints of opposite edges
Let $ABCD$ be a tetrahedron and let $M$, $N$ be the midpoints of $AB$ and $CD$. Prove that
$$\overrightarrow{MN}=\frac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right).$$

**Solution.** By the triangle rule, we have

$$\begin{aligned}
\overrightarrow{MN}&=\overrightarrow{MA}+\overrightarrow{AD}+\overrightarrow{DN},\\
\overrightarrow{MN}&=\overrightarrow{MB}+\overrightarrow{BC}+\overrightarrow{CN}.
\end{aligned}$$

Adding the two equations, and noting that $\overrightarrow{MA}+\overrightarrow{MB}=\vec{0}$ (since $M$ is the midpoint of $AB$) and $\overrightarrow{DN}+\overrightarrow{CN}=\vec{0}$ (since $N$ is the midpoint of $CD$), we get

$$2\overrightarrow{MN}=\overrightarrow{AD}+\overrightarrow{BC}.$$

So $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right)$.
:::

:::diagram The tetrahedron $ABCD$ and the segment $MN$
alt: A tetrahedron ABCD with the hidden edge BD dashed; M is the midpoint of AB, N is the midpoint of CD, and an arrow goes from M to N
point A 1.6,3.4 above
point B 0,0 left
point C 2.4,-0.9 below
point D 4.2,0.5 right
point M 0.8,1.7 left
point N 3.3,-0.2 below-right
segment A B
segment A C
segment A D
segment B C
segment C D
segment B D dashed
arrow M N
:::

:::note Three non-coplanar vectors
Three vectors are **coplanar** if their lines are all parallel to one plane. The three vectors $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$ of a parallelepiped are **not** coplanar. Every vector in space can be written in exactly one way as $x\overrightarrow{AB}+y\overrightarrow{AD}+z\overrightarrow{AA'}$. This is the idea that leads to coordinates in space in the next lesson.
:::

## The scalar product of two vectors

### The angle between two vectors

To measure the angle between $\vec{a}$ and $\vec{b}$ (both non-zero), take any point $O$ and draw $\overrightarrow{OA}=\vec{a}$, $\overrightarrow{OB}=\vec{b}$. Then $(\vec{a}, \vec{b})=\angle AOB$, an angle from $0^\circ$ to $180^\circ$. The key point is that **the two vectors must start at the same point**. For instance in a parallelepiped, $\overrightarrow{A'C'}=\overrightarrow{AC}$, so $(\overrightarrow{AB}, \overrightarrow{A'C'})=(\overrightarrow{AB}, \overrightarrow{AC})=\angle BAC$.

:::definition The scalar product
The scalar product (also called the dot product) of two non-zero vectors $\vec{a}$, $\vec{b}$ is the **number**
$$\vec{a}\cdot\vec{b}=|\vec{a}|\cdot|\vec{b}|\cdot\cos(\vec{a}, \vec{b}).$$
If one of the vectors is $\vec{0}$ then $\vec{a}\cdot\vec{b}=0$.
:::

The scalar product has the same properties as in the plane: it is commutative, distributes over addition, and
$$\vec{a}^2=|\vec{a}|^2,\qquad \vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0,\qquad \cos(\vec{a}, \vec{b})=\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|\cdot|\vec{b}|}.$$

Now we answer the opening question. The edges $AB$, $AD$, $AA'$ of a cuboid are pairwise perpendicular, so the scalar product of any two different edges is $0$.

:::example The length of the decorative string
The cuboid $ABCD.A'B'C'D'$ has $AB=5$, $AD=4$, $AA'=3$ (metres). Find the length $AC'$.

**Solution.** By the parallelepiped rule, we have $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$. Squaring both sides (scalar square), we get

$$AC'^2=AB^2+AD^2+AA'^2+2\left(\overrightarrow{AB}\cdot\overrightarrow{AD}+\overrightarrow{AD}\cdot\overrightarrow{AA'}+\overrightarrow{AA'}\cdot\overrightarrow{AB}\right).$$

Since the three edges are pairwise perpendicular, the three scalar products in the bracket are all $0$. Hence

$$AC'^2=25+16+9=50,\qquad AC'=\sqrt{50}=5\sqrt2\approx7.07.$$

So the string is about $7.07$ m long.

**Look back.** If the room were twice as high ($6$ m), would the string be twice as long? Then $AC'^2=25+16+36=77$ and $AC'\approx8.77$ m, less than $2$ m longer. The length of the diagonal is not proportional to each dimension. The solution also shows that $AC'^2=AB^2+AD^2+AA'^2$ holds only because the three edges are perpendicular: for a slanted parallelepiped the three scalar products in the bracket are not $0$ and must be added.
:::

This method works even when the edges are not perpendicular, as long as we know the scalar products. The last example uses it to find an angle in a cube.

:::example The angle between two face diagonals
Let $ABCD.A'B'C'D'$ be a cube with edge $a$. Find the angle $(\overrightarrow{AC}, \overrightarrow{A'D})$.

**Solution.** The three vectors $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$ are pairwise perpendicular and each has length $a$. We have

$$\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD},\qquad \overrightarrow{A'D}=\overrightarrow{AD}-\overrightarrow{AA'}.$$

Since the scalar product of two different edges is $0$,

$$\overrightarrow{AC}\cdot\overrightarrow{A'D}=\overrightarrow{AB}\cdot\overrightarrow{AD}-\overrightarrow{AB}\cdot\overrightarrow{AA'}+\overrightarrow{AD}^2-\overrightarrow{AD}\cdot\overrightarrow{AA'}=a^2.$$

Since $AC$ and $A'D$ are diagonals of squares of side $a$, $AC=A'D=a\sqrt2$. Hence

$$\cos(\overrightarrow{AC}, \overrightarrow{A'D})=\frac{a^2}{a\sqrt2\cdot a\sqrt2}=\frac12.$$

So $(\overrightarrow{AC}, \overrightarrow{A'D})=60^\circ$.

**Look back.** Is there another way to check the result? Since $\overrightarrow{AC}=\overrightarrow{A'C'}$, the angle is $\angle C'A'D$. Triangle $A'C'D$ has three sides that are face diagonals of length $a\sqrt2$, so it is equilateral and that angle is $60^\circ$.
:::

:::warning Common mistakes
- **Adding lengths instead of vectors.** Wrong: $|\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}|=5+4+3=12$. Why it is wrong: that is the distance the ant walks, not the displacement. Right: $|\overrightarrow{AC'}|=\sqrt{50}\approx7.07$.
- **Measuring an angle before the vectors share a starting point.** Wrong: in a square $ABCD$, writing $(\overrightarrow{AB}, \overrightarrow{BD})=\angle ABD=45^\circ$. Why it is wrong: $\angle ABD$ is the angle between $\overrightarrow{BA}$ and $\overrightarrow{BD}$, and $\overrightarrow{BA}=-\overrightarrow{AB}$. Right: $(\overrightarrow{AB}, \overrightarrow{BD})=180^\circ-45^\circ=135^\circ$.
- **One edge in the wrong direction in the parallelepiped rule.** Wrong: $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{A'A}=\overrightarrow{AC'}$. Why it is wrong: $\overrightarrow{A'A}=-\overrightarrow{AA'}$ points down, not up. Right: $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{A'A}=\overrightarrow{AC}-\overrightarrow{AA'}=\overrightarrow{A'C}$.
- **Treating the scalar product as a vector.** $\vec{a}\cdot\vec{b}$ is a **number**; writing $\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AC}$ is wrong.
:::

## Key terms

:::terms
- vector in space | vectơ trong không gian
- equal vectors | hai vectơ bằng nhau
- opposite vectors | hai vectơ đối nhau
- zero vector | vectơ-không
- parallelepiped rule | quy tắc hình hộp
- tetrahedron | tứ diện
- coplanar vectors | ba vectơ đồng phẳng
- angle between two vectors | góc giữa hai vectơ
- scalar product (dot product) | tích vô hướng
:::

## Summary

- Vectors, length, equal and opposite vectors in space are defined as in the plane.
- The triangle and parallelogram rules still hold; add the parallelepiped rule $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.
- Midpoint $I$ of $AB$: $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$; centroid $G$: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}$.
- Angle between two vectors: draw them from a common point; the angle is from $0^\circ$ to $180^\circ$.
- $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$; $\vec{a}^2=|\vec{a}|^2$; $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.
- To find a length: write the vector in terms of known edges, then square it.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Let $ABCD.A'B'C'D'$ be a parallelepiped. Simplify

a) $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD'}$; b) $\overrightarrow{AB}+\overrightarrow{A'D'}+\overrightarrow{CC'}$.

::hint
**What you need:** the triangle rule; the parallelepiped rule; parallel edges in the same direction give equal vectors.

**Steps:**
1. a) The vectors already join tip to tail.
2. b) Replace $\overrightarrow{A'D'}=\overrightarrow{AD}$ and $\overrightarrow{CC'}=\overrightarrow{AA'}$.

::solution
a) By the triangle rule, $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD'}=\overrightarrow{AC}+\overrightarrow{CD'}=\overrightarrow{AD'}$.

b) Since $\overrightarrow{A'D'}=\overrightarrow{AD}$ and $\overrightarrow{CC'}=\overrightarrow{AA'}$, the sum is $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$ (the parallelepiped rule).

So a) equals $\overrightarrow{AD'}$ and b) equals $\overrightarrow{AC'}$.

**Answer.** a) $\overrightarrow{AD'}$; b) $\overrightarrow{AC'}$.
:::

:::exercise
Let $ABCD$ be a tetrahedron. Simplify $\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{DC}-\overrightarrow{DB}$.

::hint
**What you need:** the subtraction rule $\overrightarrow{OX}-\overrightarrow{OY}=\overrightarrow{YX}$.

**Steps:**
1. Combine $\overrightarrow{AB}-\overrightarrow{AC}$.
2. Combine $\overrightarrow{DC}-\overrightarrow{DB}$.

::solution
By the subtraction rule, $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$ and $\overrightarrow{DC}-\overrightarrow{DB}=\overrightarrow{BC}$. Since these two vectors are opposite, their sum is $\vec{0}$.

So the expression equals $\vec{0}$.

**Answer.** $\vec{0}$.
:::

:::exercise
Let $ABCD.A'B'C'D'$ be a cube with edge $3$. Find $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $\overrightarrow{AB}\cdot\overrightarrow{A'C'}$ and $\overrightarrow{AA'}\cdot\overrightarrow{BD}$.

::hint
**What you need:** $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$; draw both vectors from a common point before measuring the angle.

**Steps:**
1. $AC=3\sqrt2$ and $\angle BAC=45^\circ$.
2. $\overrightarrow{A'C'}=\overrightarrow{AC}$.
3. $AA'$ is perpendicular to the base, so it is perpendicular to $BD$.

::solution
$$\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot3\sqrt2\cdot\cos45^\circ=3\cdot3\sqrt2\cdot\frac{\sqrt2}{2}=9.$$
Since $\overrightarrow{A'C'}=\overrightarrow{AC}$, the second product is also $9$. Since $AA'\perp BD$, the third product is $0$.

So the three scalar products are $9$; $9$; $0$.

**Answer.** $9$; $9$; $0$.
:::

:::exercise
Let $ABCD$ be a regular tetrahedron with edge $2$ (all edges equal $2$, all faces are equilateral triangles). Find $\overrightarrow{AB}\cdot\overrightarrow{AC}$ and prove that $AB\perp CD$.

::hint
**What you need:** the angles of an equilateral triangle are $60^\circ$; $\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}$.

**Steps:**
1. Find $\overrightarrow{AB}\cdot\overrightarrow{AC}$ and $\overrightarrow{AB}\cdot\overrightarrow{AD}$.
2. Find $\overrightarrow{AB}\cdot\overrightarrow{CD}$ by replacing $\overrightarrow{CD}$.

::solution
We have $\overrightarrow{AB}\cdot\overrightarrow{AC}=2\cdot2\cdot\cos60^\circ=2$, and likewise $\overrightarrow{AB}\cdot\overrightarrow{AD}=2$. Hence
$$\overrightarrow{AB}\cdot\overrightarrow{CD}=\overrightarrow{AB}\cdot\left(\overrightarrow{AD}-\overrightarrow{AC}\right)=2-2=0,$$
So $AB\perp CD$.

**Answer.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=2$; $\overrightarrow{AB}\cdot\overrightarrow{CD}=0$, so $AB\perp CD$.
:::

:::exercise
Three people pull a crate standing in the corner of a warehouse. The three pulling forces are pairwise perpendicular (along the two walls and straight up), with magnitudes $30$ N, $40$ N and $120$ N. Find the magnitude of the resultant force on the crate.

::hint
**What you need:** the resultant is the sum of the three force vectors; for three pairwise perpendicular vectors, $|\vec{a}+\vec{b}+\vec{c}|^2=|\vec{a}|^2+|\vec{b}|^2+|\vec{c}|^2$.

**Steps:**
1. Square the sum of the three forces.
2. The scalar products of different forces are $0$.

::solution
The resultant force is $\vec{F}=\vec{F_1}+\vec{F_2}+\vec{F_3}$. Since the three forces are pairwise perpendicular,
$$|\vec{F}|^2=30^2+40^2+120^2=900+1600+14400=16900,\qquad |\vec{F}|=130.$$
So the resultant force has magnitude $130$ N.

**Answer.** $130$ N.
:::

:::exercise
Let $ABCD.A'B'C'D'$ be a cube with edge $1$. Decide whether each statement is true or false.

a) $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.

b) $AC'=\sqrt3$.

c) $\overrightarrow{AB}\cdot\overrightarrow{CD'}=1$.

d) The angle between the vectors $\overrightarrow{AC}$ and $\overrightarrow{B'D'}$ is $90^\circ$.

::hint
**What you need:** the parallelepiped rule; the three edges at $A$ are pairwise perpendicular with length $1$; write every vector in terms of $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AA'}$.

**Steps:**
1. b) Square $\overrightarrow{AC'}$.
2. c) $\overrightarrow{CD'}=\overrightarrow{CD}+\overrightarrow{DD'}=-\overrightarrow{AB}+\overrightarrow{AA'}$.
3. d) $\overrightarrow{B'D'}=\overrightarrow{BD}$; the diagonals of a square are perpendicular.

::solution
a) **True.** This is the parallelepiped rule.

b) **True.** We have $AC'^2=1+1+1=3$.

c) **False.** Since $\overrightarrow{CD'}=-\overrightarrow{AB}+\overrightarrow{AA'}$, we have $\overrightarrow{AB}\cdot\overrightarrow{CD'}=\overrightarrow{AB}\cdot\left(-\overrightarrow{AB}+\overrightarrow{AA'}\right)=-1+0=-1$.

d) **True.** We have $\overrightarrow{B'D'}=\overrightarrow{BD}$ and $AC\perp BD$ (the diagonals of the square $ABCD$).

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
A storeroom is a cuboid $ABCD.A'B'C'D'$ with $AB=4$ m, $AD=3$ m, $AA'=4$ m. Find the angle between the vectors $\overrightarrow{AC'}$ and $\overrightarrow{AC}$ (give your answer to the nearest degree).

::hint
**What you need:** $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$; the parallelepiped rule.

**Steps:**
1. Write $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}$ and $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$.
2. Find the scalar product and the two lengths.

::solution
We have $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$ and $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}$. Since the scalar products of different edges are $0$,
$$\overrightarrow{AC'}\cdot\overrightarrow{AC}=AB^2+AD^2=16+9=25,\qquad AC=5,\qquad AC'=\sqrt{16+9+16}=\sqrt{41}.$$
$$\cos(\overrightarrow{AC'}, \overrightarrow{AC})=\frac{25}{5\sqrt{41}}=\frac{5}{\sqrt{41}}\approx0.781,\quad\text{angle}\approx38.7^\circ.$$
So the required angle is about $39^\circ$.

**Answer.** $39$.
:::

:::exercise
(Revisiting [Multiplying a vector by a number](lesson:scalar-multiplication).) Let $ABCD$ be a tetrahedron and $G$ the centroid of triangle $BCD$. Prove that $\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=3\overrightarrow{AG}$.

::hint
**What you need:** $G$ is the centroid of triangle $BCD$ $\iff$ $\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}$ (grade 10).

**Steps:**
1. Insert the point $G$: $\overrightarrow{AB}=\overrightarrow{AG}+\overrightarrow{GB}$, and so on.
2. Add the three equalities.

::solution
By the triangle rule, $\overrightarrow{AB}=\overrightarrow{AG}+\overrightarrow{GB}$, $\overrightarrow{AC}=\overrightarrow{AG}+\overrightarrow{GC}$, $\overrightarrow{AD}=\overrightarrow{AG}+\overrightarrow{GD}$. Since $G$ is the centroid of triangle $BCD$, $\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}$. Adding the three equations, we get
$$\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=3\overrightarrow{AG}+\left(\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}\right)=3\overrightarrow{AG}+\vec{0}=3\overrightarrow{AG}.$$

**Answer.** The identity is proved.
:::

:::exercise Challenge
a) Prove that for any four points $A$, $B$, $C$, $D$:
$$\overrightarrow{AB}\cdot\overrightarrow{CD}+\overrightarrow{AC}\cdot\overrightarrow{DB}+\overrightarrow{AD}\cdot\overrightarrow{BC}=0.$$
b) The tetrahedron $ABCD$ has $AB\perp CD$ and $AC\perp BD$. Prove that $AD\perp BC$.

::hint
**What you need:** insert the point $A$: $\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}$; the scalar product distributes over addition.

**Steps:**
1. Put $\vec{b}=\overrightarrow{AB}$, $\vec{c}=\overrightarrow{AC}$, $\vec{d}=\overrightarrow{AD}$ and write every vector in terms of them.
2. Expand; the terms cancel in pairs.
3. b) The first two products are $0$.

::solution
a) Let $\vec{b}=\overrightarrow{AB}$, $\vec{c}=\overrightarrow{AC}$, $\vec{d}=\overrightarrow{AD}$. We have $\overrightarrow{CD}=\vec{d}-\vec{c}$, $\overrightarrow{DB}=\vec{b}-\vec{d}$, $\overrightarrow{BC}=\vec{c}-\vec{b}$:
$$\vec{b}\cdot(\vec{d}-\vec{c})+\vec{c}\cdot(\vec{b}-\vec{d})+\vec{d}\cdot(\vec{c}-\vec{b})=\vec{b}\cdot\vec{d}-\vec{b}\cdot\vec{c}+\vec{c}\cdot\vec{b}-\vec{c}\cdot\vec{d}+\vec{d}\cdot\vec{c}-\vec{d}\cdot\vec{b}=0.$$
b) By hypothesis, the first two scalar products are $0$. From a) it follows that $\overrightarrow{AD}\cdot\overrightarrow{BC}=0$.

So $AD\perp BC$.

**Answer.** a) The identity holds for any four points; b) $AD\perp BC$.
:::

## Mini test

:::quiz
::mc
Let $ABCD.A'B'C'D'$ be a parallelepiped. The vector $\overrightarrow{AB}+\overrightarrow{AD}-\overrightarrow{CC'}$ equals
A. $\overrightarrow{AC}$.
B. $\overrightarrow{AC'}$.
C. $\overrightarrow{CA'}$.
D. $\overrightarrow{A'C}$.
::key D
We have $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$ and $\overrightarrow{CC'}=\overrightarrow{AA'}$, so the expression equals $\overrightarrow{AC}-\overrightarrow{AA'}=\overrightarrow{A'C}$. Option B treats the minus sign as a plus, and option C writes the difference the wrong way round.

::mc
Let $ABCD$ be a tetrahedron, and $M$, $N$ the midpoints of $AB$ and $CD$. Then $\overrightarrow{AC}+\overrightarrow{BD}$ equals
A. $2\overrightarrow{MN}$.
B. $\dfrac12\overrightarrow{MN}$.
C. $\overrightarrow{MN}$.
D. $-2\overrightarrow{MN}$.
::key A
We have $\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AC}+\overrightarrow{CN}$ and $\overrightarrow{MN}=\overrightarrow{MB}+\overrightarrow{BD}+\overrightarrow{DN}$. Adding them, the opposite vectors cancel, so $2\overrightarrow{MN}=\overrightarrow{AC}+\overrightarrow{BD}$. Option B turns the identity $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AC}+\overrightarrow{BD}\right)$ the wrong way round.

::mc
Let $ABCD.A'B'C'D'$ be a cube. The angle between the vectors $\overrightarrow{AB}$ and $\overrightarrow{C'A'}$ is
A. $45^\circ$.
B. $135^\circ$.
C. $90^\circ$.
D. $60^\circ$.
::key B
We have $\overrightarrow{C'A'}=\overrightarrow{CA}=-\overrightarrow{AC}$ and $(\overrightarrow{AB}, \overrightarrow{AC})=45^\circ$, so the angle is $180^\circ-45^\circ=135^\circ$. Option A forgets that the two vectors must start at the same point.

::mc
Let $ABCD$ be a regular tetrahedron with edge $a$. The scalar product $\overrightarrow{AB}\cdot\overrightarrow{BC}$ is
A. $\dfrac{a^2\sqrt3}{2}$.
B. $\dfrac{a^2}{2}$.
C. $-\dfrac{a^2}{2}$.
D. $0$.
::key C
Moving the vectors to the common initial point $B$, we have $\overrightarrow{AB}\cdot\overrightarrow{BC}=-\overrightarrow{BA}\cdot\overrightarrow{BC}=-a\cdot a\cos60^\circ=-\dfrac{a^2}{2}$. Option B takes the angle $60^\circ$ without reversing $\overrightarrow{AB}$, and option A uses $\sin$ instead of $\cos$.

::tf
The cuboid $ABCD.A'B'C'D'$ has $AB=2$, $AD=3$, $AA'=6$. Decide whether each statement is true or false.
a) $\overrightarrow{AB}\cdot\overrightarrow{AA'}=0$.
b) $AC'=7$.
c) $\overrightarrow{AC'}\cdot\overrightarrow{AB}=2$.
d) The angle between the vectors $\overrightarrow{AC'}$ and $\overrightarrow{AA'}$ is greater than $35^\circ$.
::key T T F F
a) True: since $AB\perp AA'$. b) True: we have $AC'^2=4+9+36=49$. c) False: we have $\overrightarrow{AC'}\cdot\overrightarrow{AB}=\left(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}\right)\cdot\overrightarrow{AB}=AB^2=4$. d) False: we have $\overrightarrow{AC'}\cdot\overrightarrow{AA'}=AA'^2=36$, so $\cos=\dfrac{36}{7\cdot6}=\dfrac67$ and the angle is about $31^\circ$.

::sa
Let $ABCD.A'B'C'D'$ be a cube with edge $2$. Find $\overrightarrow{AC'}\cdot\overrightarrow{BD'}$.
::key 4
Let $\vec{b}=\overrightarrow{AB}$, $\vec{d}=\overrightarrow{AD}$, $\vec{c}=\overrightarrow{AA'}$. We have $\overrightarrow{AC'}=\vec{b}+\vec{d}+\vec{c}$ and $\overrightarrow{BD'}=-\vec{b}+\vec{d}+\vec{c}$. Since the scalar product of two different edges is $0$, $\overrightarrow{AC'}\cdot\overrightarrow{BD'}=-4+4+4=4$.

::sa
A drone takes off from a point $A$, flies $30$ m east, then $40$ m north, then straight up $20$ m. How far is the drone's final position from $A$, in metres (give your answer to 1 decimal place)?
::key 53.9
Since the three displacement vectors are pairwise perpendicular, the square of the length of their sum is $30^2+40^2+20^2=2900$. So the distance is $\sqrt{2900}\approx53.85$, which rounds to $53.9$ m.
:::
