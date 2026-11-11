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

Vectors usually fill one long Section B question in HL Paper 1 or Paper 2: a few points in space, a line through two of them, a plane through three, then an intersection, an angle and a distance. Every step uses the same few tools, so the marks go to students who organize their work: label each vector, write each equation in full, and check a point by substituting it back.

## Scalar product and vector product

For $\boldsymbol a=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$:

- **Scalar product:** $\boldsymbol a\cdot\boldsymbol b=a_1b_1+a_2b_2+a_3b_3=|\boldsymbol a||\boldsymbol b|\cos\theta$. It is $0$ exactly when the vectors are perpendicular.
- **Vector product:** $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ is perpendicular to both, and $|\boldsymbol a\times\boldsymbol b|=|\boldsymbol a||\boldsymbol b|\sin\theta$ is the area of the parallelogram they span.

:::example The angle between two vectors
Find the angle between $\boldsymbol a=\begin{pmatrix}2\\1\\-2\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}1\\3\\2\end{pmatrix}$. [4 marks]

**Solution.** $\boldsymbol a\cdot\boldsymbol b=2+3-4=1$, $|\boldsymbol a|=3$, $|\boldsymbol b|=\sqrt{14}$. So $\cos\theta=\dfrac{1}{3\sqrt{14}}$ and $\theta\approx84.9^\circ$.
:::

:::example Area of a triangle
Find the area of the triangle with vertices $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$. [5 marks]

**Solution.** $\overrightarrow{AB}=\begin{pmatrix}-1\\2\\0\end{pmatrix}$, $\overrightarrow{AC}=\begin{pmatrix}-1\\0\\3\end{pmatrix}$ and $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}6\\3\\2\end{pmatrix}$, with length $\sqrt{36+9+4}=7$. The area is $\dfrac72=3.5$.
:::

## Lines in space

A line through the point with position vector $\boldsymbol a$, with direction $\boldsymbol b$, has vector equation $\boldsymbol r=\boldsymbol a+\lambda\boldsymbol b$. Two lines in space are **parallel** (directions are multiples), **intersecting** (one common point), or **skew** (neither).

:::example Intersecting or skew?
$L_1:\boldsymbol r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\0\end{pmatrix}$ and $L_2:\boldsymbol r=\begin{pmatrix}2\\3\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. Show that the lines are skew. [5 marks]

**Solution.** The directions are not multiples of each other, so the lines are not parallel. Equate components:
$x$: $1+\lambda=2$, so $\lambda=1$. $y$: $\lambda=3+\mu$, so $\mu=-2$. $z$: $2=1+\mu$, so $\mu=1$.
The values of $\mu$ disagree, so there is no common point. Not parallel and not intersecting: the lines are skew.
:::

## Planes

A plane with normal vector $\boldsymbol n$ through the point $\boldsymbol a$ has equation $\boldsymbol r\cdot\boldsymbol n=\boldsymbol a\cdot\boldsymbol n$, or in Cartesian form $n_1x+n_2y+n_3z=d$. The normal is often found with a vector product of two directions in the plane.

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
- **Using the same parameter for two lines.** Use $\lambda$ for one and $\mu$ for the other.
- **Checking only two components** when testing for intersection; the third decides.
- **Angle between a line and a plane** with cosine instead of sine.
- **Obtuse angles.** Take the absolute value of the scalar product when the question asks for the acute angle.
- **Order in the vector product.** $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$; for a normal either sign works, but compute carefully.
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
$3k+2k-4=0$, so $k=\dfrac45$.
:::

:::exercise A line through two points
Write a vector equation of the line through $A(2,-1,3)$ and $B(4,1,0)$. [2 marks]

::hint
**What you need:** direction $\overrightarrow{AB}$.

::solution
$\boldsymbol r=\begin{pmatrix}2\\-1\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-3\end{pmatrix}$.
:::

:::exercise Two intersecting lines
Find the point of intersection of $L_1:\boldsymbol r=\begin{pmatrix}0\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\1\end{pmatrix}$ and $L_2:\boldsymbol r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. [5 marks]

::hint
**What you need:** solve two components, then check the third.

::solution
$x$: $\lambda=1$. $y$: $1=2+\mu$, so $\mu=-1$. Check $z$: $1+\lambda=2$ and $3+\mu=2$, which agree. The lines meet at $(1,1,2)$.
:::

:::exercise A vector product
Find $\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\1\\4\end{pmatrix}$. [2 marks]

::hint
**What you need:** the component formula.

::solution
$\begin{pmatrix}2\cdot4-3\cdot1\\3\cdot0-1\cdot4\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}5\\-4\\1\end{pmatrix}$.
:::

:::exercise A plane from a point and a normal
Find the Cartesian equation of the plane through $(1,2,3)$ with normal $\begin{pmatrix}2\\-1\\1\end{pmatrix}$. [2 marks]

::hint
**What you need:** $2x-y+z=d$, and substitute the point.

::solution
$d=2-2+3=3$, so $2x-y+z=3$.
:::

## Application exercises

:::exercise A drone
A drone moves so that its position, in km, $t$ hours after take-off is $\boldsymbol r=\begin{pmatrix}2\\1\\0\end{pmatrix}+t\begin{pmatrix}3\\4\\12\end{pmatrix}$, where the third component is height.
(a) Find its speed. [2 marks]
(b) Find its position when it reaches a height of $6$ km. [2 marks]

::hint
**What you need:** speed is the length of the direction vector per hour.

::solution
(a) $\sqrt{9+16+144}=13$ km per hour.

(b) $12t=6$, so $t=0.5$ and the position is $(3.5,3,6)$.
:::

:::exercise Distance from a point to a plane
Find the distance from $P(3,1,2)$ to the plane $2x-y+2z=1$. [4 marks]

::hint
**What you need:** the distance is $\dfrac{|2x_0-y_0+2z_0-1|}{|\boldsymbol n|}$, or find where the normal line through $P$ meets the plane.

::solution
$\dfrac{|6-1+4-1|}{\sqrt{4+1+4}}=\dfrac83$.
:::

:::exercise The angle between two planes
Find the angle between the planes $x+y+z=1$ and $x-y=0$. [3 marks]

::hint
**What you need:** the angle between the planes equals the angle between their normals.

::solution
$\begin{pmatrix}1\\1\\1\end{pmatrix}\cdot\begin{pmatrix}1\\-1\\0\end{pmatrix}=0$, so the planes are perpendicular: $90^\circ$.
:::

:::exercise Challenge: the foot of a perpendicular
Find the point on the line $\boldsymbol r=t\begin{pmatrix}1\\1\\1\end{pmatrix}$ closest to $P(1,2,3)$, and the shortest distance from $P$ to the line. [6 marks]

::hint
**What you need:** the vector from the point $(t,t,t)$ to $P$ is perpendicular to the direction.

::solution
$\begin{pmatrix}1-t\\2-t\\3-t\end{pmatrix}\cdot\begin{pmatrix}1\\1\\1\end{pmatrix}=6-3t=0$, so $t=2$ and the closest point is $(2,2,2)$. The distance is $\sqrt{1+0+1}=\sqrt2$.
:::

:::quiz
::mc
What is the magnitude of $\begin{pmatrix}2\\-1\\2\end{pmatrix}$?
A. $\sqrt5$
B. $9$
C. $3$
D. $5$
::key C
$\sqrt{4+1+4}=3$.

::mc
What is $\begin{pmatrix}1\\2\\3\end{pmatrix}\cdot\begin{pmatrix}4\\-1\\0\end{pmatrix}$?
A. $2$
B. $6$
C. $-2$
D. $4$
::key A
$4-2+0=2$.

::mc
Which is a direction vector of the line through $(1,1,1)$ and $(3,0,5)$?
A. $\begin{pmatrix}4\\1\\6\end{pmatrix}$
B. $\begin{pmatrix}3\\0\\5\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}2\\-1\\4\end{pmatrix}$
::key D
Subtract the position vectors.

::mc
What is a normal vector of the plane $3x-2y+z=7$?
A. $\begin{pmatrix}3\\-2\\7\end{pmatrix}$
B. $\begin{pmatrix}3\\-2\\1\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}7\\0\\0\end{pmatrix}$
::key B
The coefficients of $x$, $y$, $z$.

::tf
Let $\boldsymbol a=\begin{pmatrix}1\\0\\0\end{pmatrix}$ and $\boldsymbol b=\begin{pmatrix}0\\1\\0\end{pmatrix}$.
a) $\boldsymbol a\cdot\boldsymbol b=0$.
b) $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
c) $|\boldsymbol a\times\boldsymbol b|=1$.
d) $\boldsymbol b\times\boldsymbol a=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
::key T T T F
a) True. b) True. c) True. d) False: $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$.

::sa
Find the area of the parallelogram spanned by $\begin{pmatrix}3\\0\\0\end{pmatrix}$ and $\begin{pmatrix}0\\4\\0\end{pmatrix}$.
::key 12
The vectors are perpendicular, so the area is $3\cdot4$.

::sa
Find $k$ such that $\begin{pmatrix}2\\k\\1\end{pmatrix}$ is perpendicular to $\begin{pmatrix}1\\1\\-4\end{pmatrix}$.
::key 2
$2+k-4=0$.
:::
