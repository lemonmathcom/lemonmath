---
title: Vectors, lines and planes
description: IB Maths AA HL: scalar and vector products, angles, vector equations of lines, intersecting and skew lines, equations of planes, distances and angles.
minutes: 45
---

:::goals
- Use the scalar product to find angles and test for perpendicular vectors.
- Use the vector product to find normals and areas.
- Write vector equations of lines and decide whether two lines are parallel, intersecting or skew.
- Write equations of planes, and find intersections, angles and distances involving lines and planes.
:::

A long Section B question on HL Paper 1 or Paper 2 often looks like this. You are given a few points in space, then asked for a line through two of them, a plane through three, and after that an intersection, an angle and a distance. How do you get through the whole chain without getting lost? The good news is that every step uses the same few tools. So the marks go to the student who organises their work: label each vector, write each equation in full, and check a point by substituting it back.

## Scalar product and vector product

Take two vectors in space, $\boldsymbol a=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$. There are two ways to multiply them, and they give very different results:

- **Scalar product:** $\boldsymbol a\cdot\boldsymbol b=a_1b_1+a_2b_2+a_3b_3=|\boldsymbol a||\boldsymbol b|\cos\theta$. The result is a number, and it is $0$ exactly when the vectors are perpendicular.
- **Vector product:** $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ gives a new vector, perpendicular to both of the originals. Its length, $|\boldsymbol a\times\boldsymbol b|=|\boldsymbol a||\boldsymbol b|\sin\theta$, is the area of the parallelogram they span.

A way to remember: the scalar product gives a number and measures angles; the vector product gives a vector and finds a direction perpendicular to both.

:::example The angle between two vectors
Find the angle between $\boldsymbol a=\begin{pmatrix}2\\1\\-2\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}1\\3\\2\end{pmatrix}$. [4 marks]

**Solution.** $\boldsymbol a\cdot\boldsymbol b=2+3-4=1$, $|\boldsymbol a|=3$, $|\boldsymbol b|=\sqrt{14}$. So $\cos\theta=\dfrac{1}{3\sqrt{14}}$ and $\theta\approx84.9^\circ$.
:::

:::example Area of a triangle
Find the area of the triangle with vertices $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$. [5 marks]

**Solution.** $\overrightarrow{AB}=\begin{pmatrix}-1\\2\\0\end{pmatrix}$, $\overrightarrow{AC}=\begin{pmatrix}-1\\0\\3\end{pmatrix}$ and $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}6\\3\\2\end{pmatrix}$, with length $\sqrt{36+9+4}=7$. The area is $\dfrac72=3.5$.
:::

## Lines in space

To pin down a line in space, we only need to know where it passes through and which way it goes. A line through the point with position vector $\boldsymbol a$, with direction $\boldsymbol b$, has vector equation $\boldsymbol r=\boldsymbol a+\lambda\boldsymbol b$. In a plane, two lines that are not parallel must meet. In space they need not, so there are three possibilities: two lines are **parallel** (directions are multiples), **intersecting** (one common point), or **skew** (neither).

:::example Intersecting or skew?
$L_1:\boldsymbol r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\0\end{pmatrix}$ and $L_2:\boldsymbol r=\begin{pmatrix}2\\3\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. Show that the lines are skew. [5 marks]

**Solution.** The directions are not multiples of each other, so the lines are not parallel. Equate components:
$x$: $1+\lambda=2$, so $\lambda=1$. $y$: $\lambda=3+\mu$, so $\mu=-2$. $z$: $2=1+\mu$, so $\mu=1$.
The values of $\mu$ disagree, so there is no common point. Not parallel and not intersecting: the lines are skew.
:::

## Planes

A plane is fixed by one point it passes through and one vector perpendicular to it, called the normal vector. A plane with normal vector $\boldsymbol n$ through the point $\boldsymbol a$ has equation $\boldsymbol r\cdot\boldsymbol n=\boldsymbol a\cdot\boldsymbol n$, or in Cartesian form $n_1x+n_2y+n_3z=d$. Why the vector product? Because the vector product of two directions in the plane is perpendicular to both, so it is a normal.

:::example A plane through three points
Find the Cartesian equation of the plane through $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$. [3 marks]

**Solution.** From the previous example, $\boldsymbol n=\begin{pmatrix}6\\3\\2\end{pmatrix}$. Then $6x+3y+2z=6(1)+0+0=6$. Check $B$: $3(2)=6$, and $C$: $2(3)=6$.
:::

:::example A line meets the plane
The line $\boldsymbol r=t\begin{pmatrix}1\\1\\1\end{pmatrix}$ meets the plane $6x+3y+2z=6$ at $P$.
(a) Find the coordinates of $P$. [3 marks]
(b) Find the acute angle between the line and the plane. [4 marks]

**Solution.** (a) Substitute $x=y=z=t$: $11t=6$, so $t=\dfrac{6}{11}$ and $P=\left(\dfrac{6}{11},\dfrac{6}{11},\dfrac{6}{11}\right)$.

(b) With $\boldsymbol d=\begin{pmatrix}1\\1\\1\end{pmatrix}$: $\sin\varphi=\dfrac{|\boldsymbol n\cdot\boldsymbol d|}{|\boldsymbol n||\boldsymbol d|}=\dfrac{11}{7\sqrt3}$, so $\varphi\approx65.1^\circ$. The angle with a plane uses sine, because $\boldsymbol n$ is perpendicular to the plane.
:::

:::warning Common traps
- **Using the same parameter for two lines.** Give each line its own letter: $\lambda$ for one and $\mu$ for the other.
- **Checking only two components** when testing for intersection. The third is where the decision is made.
- **Angle between a line and a plane** with cosine instead of sine. Many students slip here.
- **Obtuse angles.** When the question asks for the acute angle, take the absolute value of the scalar product.
- **Order in the vector product.** $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$. For a normal either sign works, but compute carefully.

Before you move on, try substituting one point back into your equation. A sign slip often shows up at this step.
:::

:::terms
- position vector, direction vector | véc-tơ vị trí, véc-tơ chỉ phương
- scalar (dot) product | tích vô hướng
- vector (cross) product | tích có hướng
- normal vector | véc-tơ pháp tuyến
- parallel, intersecting, skew lines | đường thẳng song song, cắt nhau, chéo nhau
- vector equation, Cartesian equation | phương trình véc-tơ, phương trình toạ độ
- plane | mặt phẳng
- perpendicular distance | khoảng cách (theo đường vuông góc)
:::

## Similar exercises

:::exercise Perpendicular vectors
Find $k$ such that $\begin{pmatrix}k\\2\\-1\end{pmatrix}$ and $\begin{pmatrix}3\\k\\4\end{pmatrix}$ are perpendicular. [3 marks]

::hint
**What you need:** the scalar product is $0$.

::solution
Two vectors are perpendicular if and only if their scalar product is $0$. We have
$$\begin{pmatrix}k\\2\\-1\end{pmatrix}\cdot\begin{pmatrix}3\\k\\4\end{pmatrix}=3k+2k-4=5k-4.$$

Setting the scalar product equal to $0$: $5k-4=0$, so $5k=4$, that is $k=\dfrac45$.

Check: for $k=\dfrac45$, the scalar product is $\dfrac{12}{5}+\dfrac{8}{5}-4=0$.

So $k=\dfrac45$.

**Answer.** $k=\dfrac45$.
:::

:::exercise A line through two points
Write a vector equation of the line through $A(2,-1,3)$ and $B(4,1,0)$. [2 marks]

::hint
**What you need:** direction $\overrightarrow{AB}$.

::solution
The line through $A$ and $B$ has direction vector $\overrightarrow{AB}$. We have
$$\overrightarrow{AB}=\begin{pmatrix}4-2\\1-(-1)\\0-3\end{pmatrix}=\begin{pmatrix}2\\2\\-3\end{pmatrix}.$$

The line passes through $A(2, -1, 3)$, so its vector equation has the form $\boldsymbol r=\overrightarrow{OA}+\lambda\overrightarrow{AB}$, that is
$$\boldsymbol r=\begin{pmatrix}2\\-1\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-3\end{pmatrix},\quad\lambda\in\mathbb R.$$

Check: for $\lambda=1$ we get $\begin{pmatrix}4\\1\\0\end{pmatrix}$, which is the point $B$.

So a vector equation of the line $AB$ is $\boldsymbol r=\begin{pmatrix}2\\-1\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-3\end{pmatrix}$.

**Answer.** $\boldsymbol r=\begin{pmatrix}2\\-1\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-3\end{pmatrix}$.
:::

:::exercise Two intersecting lines
Find the point of intersection of $L_1:\boldsymbol r=\begin{pmatrix}0\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\1\end{pmatrix}$ and $L_2:\boldsymbol r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. [5 marks]

::hint
**What you need:** solve two components, then check the third.

::solution
Write the general point of each line:
$$L_1:\ (\lambda;\ 1;\ 1+\lambda),\qquad L_2:\ (1;\ 2+\mu;\ 3+\mu).$$

The lines meet when there exist $\lambda$, $\mu$ making the two points coincide, that is, when the following system has a solution:
$$\begin{cases}\lambda=1&(x)\\1=2+\mu&(y)\\1+\lambda=3+\mu&(z)\end{cases}$$

From the $x$ equation: $\lambda=1$. From the $y$ equation: $\mu=1-2=-1$.

Check the $z$ equation: the left-hand side is $1+\lambda=2$ and the right-hand side is $3+\mu=2$; they agree, so the system has the solution $\lambda=1$, $\mu=-1$.

Substituting $\lambda=1$ into $L_1$ gives the point $(1, 1, 2)$. Substituting $\mu=-1$ into $L_2$ gives $(1, 1, 2)$ as well.

So the lines meet at the point $(1, 1, 2)$.

**Answer.** $(1, 1, 2)$.
:::

:::exercise A vector product
Find $\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\1\\4\end{pmatrix}$. [2 marks]

::hint
**What you need:** the component formula.

::solution
We apply the formula for the vector product
$$\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}\times\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$$
with $(a_1, a_2, a_3)=(1, 2, 3)$ and $(b_1, b_2, b_3)=(0, 1, 4)$.

Substituting, we get
$$\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\1\\4\end{pmatrix}=\begin{pmatrix}2\cdot4-3\cdot1\\3\cdot0-1\cdot4\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}5\\-4\\1\end{pmatrix}.$$

Check: the scalar product of the result with $\begin{pmatrix}1\\2\\3\end{pmatrix}$ is $5-8+3=0$, and with $\begin{pmatrix}0\\1\\4\end{pmatrix}$ it is $0-4+4=0$.

So $\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\1\\4\end{pmatrix}=\begin{pmatrix}5\\-4\\1\end{pmatrix}$.

**Answer.** $\begin{pmatrix}5\\-4\\1\end{pmatrix}$.
:::

:::exercise A plane from a point and a normal
Find the Cartesian equation of the plane through $(1,2,3)$ with normal $\begin{pmatrix}2\\-1\\1\end{pmatrix}$. [2 marks]

::hint
**What you need:** $2x-y+z=d$, and substitute the point.

::solution
The plane has normal vector $\begin{pmatrix}2\\-1\\1\end{pmatrix}$, so its equation has the form
$$2x-y+z=d.$$

The plane passes through the point $(1, 2, 3)$, so substituting $x=1$, $y=2$, $z=3$:
$$d=2\cdot1-2+3=3.$$

Hence the equation of the plane is $2x-y+z=3$.

So the Cartesian equation of the plane is $2x-y+z=3$.

**Answer.** $2x-y+z=3$.
:::

## Application exercises

:::exercise A drone
A drone moves so that its position, in km, $t$ hours after take-off is $\boldsymbol r=\begin{pmatrix}2\\1\\0\end{pmatrix}+t\begin{pmatrix}3\\4\\12\end{pmatrix}$, where the third component is height.
(a) Find its speed. [2 marks]
(b) Find its position when it reaches a height of $6$ km. [2 marks]

::hint
**What you need:** speed is the length of the direction vector per hour.

::solution
a) The velocity of the drone is the derivative of its position with respect to $t$:
$$\boldsymbol v=\frac{d\boldsymbol r}{dt}=\begin{pmatrix}3\\4\\12\end{pmatrix}\ \text{(km/h)}.$$

The speed is the magnitude of the velocity vector:
$$|\boldsymbol v|=\sqrt{3^2+4^2+12^2}=\sqrt{9+16+144}=\sqrt{169}=13.$$

So the speed of the drone is $13$ km per hour.

b) The height is the third component of $\boldsymbol r$, which is $0+12t=12t$ (km). The drone reaches a height of $6$ km when $12t=6$, so $t=0.5$ (hours).

Substituting $t=0.5$ into $\boldsymbol r$:
$$\boldsymbol r=\begin{pmatrix}2+0.5\cdot3\\1+0.5\cdot4\\0+0.5\cdot12\end{pmatrix}=\begin{pmatrix}3.5\\3\\6\end{pmatrix}.$$

So when it reaches a height of $6$ km, the drone is at the position $(3.5, 3, 6)$.

**Answer.** a) $13$ km/h; b) $(3.5, 3, 6)$.
:::

:::exercise Distance from a point to a plane
Find the distance from $P(3,1,2)$ to the plane $2x-y+2z=1$. [4 marks]

::hint
**What you need:** the distance is $\dfrac{|2x_0-y_0+2z_0-1|}{|\boldsymbol n|}$, or find where the normal line through $P$ meets the plane.

::solution
The distance from the point $P\left(x_0, y_0, z_0\right)$ to the plane $ax+by+cz=d$ is
$$\frac{\left|ax_0+by_0+cz_0-d\right|}{\sqrt{a^2+b^2+c^2}}.$$

Here the plane is $2x-y+2z=1$, so $a=2$, $b=-1$, $c=2$, $d=1$; the point is $P(3, 1, 2)$.

Substituting:
$$\text{Distance}=\frac{|2\cdot3-1\cdot1+2\cdot2-1|}{\sqrt{4+1+4}}=\frac{|6-1+4-1|}{\sqrt9}=\frac{8}{3}.$$

So the distance from $P$ to the plane is $\dfrac83$.

**Answer.** $\dfrac83$.
:::

:::exercise The angle between two planes
Find the angle between the planes $x+y+z=1$ and $x-y=0$. [3 marks]

::hint
**What you need:** the angle between the planes equals the angle between their normals.

::solution
The angle between two planes equals the angle between their normal vectors. The plane $x+y+z=1$ has normal $\boldsymbol n_1=\begin{pmatrix}1\\1\\1\end{pmatrix}$; the plane $x-y=0$ has normal $\boldsymbol n_2=\begin{pmatrix}1\\-1\\0\end{pmatrix}$.

We have
$$\boldsymbol n_1\cdot\boldsymbol n_2=1\cdot1+1\cdot(-1)+1\cdot0=0.$$

Let $\theta$ be the angle between the planes. Then
$$\cos\theta=\frac{\left|\boldsymbol n_1\cdot\boldsymbol n_2\right|}{|\boldsymbol n_1|\,|\boldsymbol n_2|}=\frac{0}{\sqrt3\cdot\sqrt2}=0,$$
so $\theta=90^\circ$.

So the planes are perpendicular, and the angle between them is $90^\circ$.

**Answer.** $90^\circ$.
:::

:::exercise Challenge: the foot of a perpendicular
Find the point on the line $\boldsymbol r=t\begin{pmatrix}1\\1\\1\end{pmatrix}$ closest to $P(1,2,3)$, and the shortest distance from $P$ to the line. [6 marks]

::hint
**What you need:** the vector from the point $(t,t,t)$ to $P$ is perpendicular to the direction.

::solution
Let $Q$ be a point on the line, with coordinates $Q(t, t, t)$. Then
$$\overrightarrow{QP}=\begin{pmatrix}1-t\\2-t\\3-t\end{pmatrix}.$$

The point $Q$ is closest to $P$ when $\overrightarrow{QP}$ is perpendicular to the direction vector $\begin{pmatrix}1\\1\\1\end{pmatrix}$ of the line, that is, when the scalar product is $0$:
$$\begin{pmatrix}1-t\\2-t\\3-t\end{pmatrix}\cdot\begin{pmatrix}1\\1\\1\end{pmatrix}=(1-t)+(2-t)+(3-t)=6-3t=0.$$

It follows that $t=2$, and the closest point is $Q(2, 2, 2)$.

Then $\overrightarrow{QP}=\begin{pmatrix}-1\\0\\1\end{pmatrix}$, so the shortest distance from $P$ to the line is
$$PQ=\sqrt{(-1)^2+0^2+1^2}=\sqrt{1+0+1}=\sqrt2.$$

So the point on the line closest to $P$ is $(2, 2, 2)$, and the shortest distance from $P$ to the line is $\sqrt2$.

**Answer.** The closest point is $(2, 2, 2)$; the shortest distance is $\sqrt2$.
:::

:::quiz
::mc TH
What is the magnitude of $\begin{pmatrix}2\\-1\\2\end{pmatrix}$?
A. $\sqrt5$
B. $9$
C. $3$
D. $5$
::key C
$\sqrt{4+1+4}=3$.

::mc TH
What is $\begin{pmatrix}1\\2\\3\end{pmatrix}\cdot\begin{pmatrix}4\\-1\\0\end{pmatrix}$?
A. $2$
B. $6$
C. $-2$
D. $4$
::key A
$4-2+0=2$.

::mc TH
Which is a direction vector of the line through $(1,1,1)$ and $(3,0,5)$?
A. $\begin{pmatrix}4\\1\\6\end{pmatrix}$
B. $\begin{pmatrix}3\\0\\5\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}2\\-1\\4\end{pmatrix}$
::key D
Subtract the position vectors.

::mc NB
What is a normal vector of the plane $3x-2y+z=7$?
A. $\begin{pmatrix}3\\-2\\7\end{pmatrix}$
B. $\begin{pmatrix}3\\-2\\1\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}7\\0\\0\end{pmatrix}$
::key B
The coefficients of $x$, $y$, $z$.

::tf TH TH TH TH
Let $\boldsymbol a=\begin{pmatrix}1\\0\\0\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}0\\1\\0\end{pmatrix}$.
a) $\boldsymbol a\cdot\boldsymbol b=0$.
b) $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
c) $|\boldsymbol a\times\boldsymbol b|=1$.
d) $\boldsymbol b\times\boldsymbol a=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
::key T T T F
a) True. b) True. c) True. d) False: $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$.

::sa TH
Find the area of the parallelogram spanned by $\begin{pmatrix}3\\0\\0\end{pmatrix}$ and $\begin{pmatrix}0\\4\\0\end{pmatrix}$.
::key 12
The vectors are perpendicular, so the area is $3\cdot4$.

::sa TH
Find $k$ such that $\begin{pmatrix}2\\k\\1\end{pmatrix}$ is perpendicular to $\begin{pmatrix}1\\1\\-4\end{pmatrix}$.
::key 2
$2+k-4=0$.
:::
