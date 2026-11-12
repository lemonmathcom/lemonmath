---
title: Transformations and vectors
description: "IGCSE Mathematics Extended: describing reflections, rotations, translations and enlargements fully, column vectors, magnitude and vector geometry proofs."
minutes: 45
---

:::goals
- Carry out and fully describe reflections, rotations, translations and enlargements, including fractional and negative scale factors.
- Add, subtract and multiply column vectors by a number, and find the magnitude of a vector.
- Use vectors to express routes in a shape and to show that lines are parallel or that points are collinear.
:::

"Describe fully the single transformation that maps shape $P$ onto shape $Q$." This sentence appears on IGCSE papers again and again, and it is a generous question: two or three marks for something you can usually see in a few seconds. Yet many students write only "rotation" and collect one mark out of three. What is missing is not understanding but detail.

This lesson is about that detail. Each transformation needs a fixed list of facts to be fully described, and once you know the list you will not lose those marks again. The second half moves on to vectors, which are the language of translations and lead to some of the neatest proofs on the paper.

## Describing a transformation fully

| Transformation | What you must state |
|---|---|
| Reflection | the mirror line, as an equation, such as $y=x$ or $x=2$ |
| Rotation | the centre, the angle, and the direction (clockwise or anticlockwise) |
| Translation | the column vector |
| Enlargement | the centre and the scale factor |

Name only **one** transformation; two transformations in a row is not an answer to "the single transformation". To find a centre of rotation, try a likely point and check that each vertex is the same distance from it before and after. For an enlargement, join corresponding vertices: the lines meet at the centre.

:::graph Triangle P is rotated onto triangle Q
alt: Triangle P with vertices (1, 1), (3, 1) and (1, 2), and triangle Q with vertices (-1, 1), (-1, 3) and (-2, 1), on a grid with the origin marked
x: -4..4
y: -1..4
shape: equal
segment: (1, 1) (3, 1)
segment: (3, 1) (1, 2)
segment: (1, 2) (1, 1)
segment: (-1, 1) (-1, 3)
segment: (-1, 3) (-2, 1)
segment: (-2, 1) (-1, 1)
label: (1.7, 1.3) "P"
label: (-1.3, 1.6) "Q"
:::

:::example Describe fully
Triangle $P$ has vertices $(1,\ 1)$, $(3,\ 1)$ and $(1,\ 2)$; triangle $Q$ has vertices $(-1,\ 1)$, $(-1,\ 3)$ and $(-2,\ 1)$. Describe fully the single transformation that maps $P$ onto $Q$.
A. Rotation, $90^\circ$ anticlockwise, centre $(0,\ 0)$
B. Rotation, $90^\circ$ clockwise, centre $(0,\ 0)$
C. Reflection in the $y$-axis
D. Rotation, $180^\circ$, centre $(0,\ 0)$

**Solution.** The shape has turned: the side from $(1,\ 1)$ to $(3,\ 1)$ was horizontal and its image from $(-1,\ 1)$ to $(-1,\ 3)$ is vertical. So it is a rotation, not a reflection.

A rotation of $90^\circ$ anticlockwise about the origin sends $(x,\ y)$ to $(-y,\ x)$. Check: $(1,\ 1)\to(-1,\ 1)$, $(3,\ 1)\to(-1,\ 3)$ and $(1,\ 2)\to(-2,\ 1)$. All three vertices match.

So the transformation is a rotation of $90^\circ$ anticlockwise about $(0,\ 0)$, answer **A**. In a written answer, all three parts (rotation, $90^\circ$ anticlockwise, centre $(0,\ 0)$) earn marks.
:::

## Enlargements

An enlargement with centre $C$ and scale factor $k$ moves every point $X$ so that $\overrightarrow{CX'}=k\,\overrightarrow{CX}$. If $0<k<1$ the image is smaller. If $k$ is negative, the image is on the other side of the centre and upside down. Lengths are multiplied by $|k|$ and areas by $k^2$, as in similar shapes.

:::example A fractional scale factor
A triangle has vertices $(2,\ 2)$, $(4,\ 2)$ and $(2,\ 6)$. It is enlarged with centre $(0,\ 0)$ and scale factor $\tfrac12$. Find the image, and compare the areas.

**Solution.** With centre at the origin, each coordinate is multiplied by $\tfrac12$: the image has vertices $(1,\ 1)$, $(2,\ 1)$ and $(1,\ 3)$.

The original is a right-angled triangle with legs $2$ and $4$, area $4$; the image has legs $1$ and $2$, area $1$. The area has been multiplied by $\left(\tfrac12\right)^2=\tfrac14$.

So the image is $(1,\ 1)$, $(2,\ 1)$, $(1,\ 3)$, and its area is a quarter of the original.
:::

## Column vectors

A vector has a size and a direction. In IGCSE it is written as a column, the top number for the move in $x$ and the bottom for the move in $y$, or as a bold letter $\mathbf{a}$, or as $\overrightarrow{AB}$. Vectors are added and multiplied by a number component by component, and the **magnitude** comes from Pythagoras:

$$\left|\begin{pmatrix}x\\y\end{pmatrix}\right|=\sqrt{x^2+y^2}.$$

:::example Working with column vectors
Given $\mathbf{a}=\begin{pmatrix}3\\-4\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}1\\2\end{pmatrix}$, find $|\mathbf{a}|$ and $2\mathbf{a}-\mathbf{b}$.

**Solution.** $|\mathbf{a}|=\sqrt{3^2+(-4)^2}=\sqrt{25}=5$.

$2\mathbf{a}-\mathbf{b}=\begin{pmatrix}6\\-8\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}5\\-10\end{pmatrix}$.

So $|\mathbf{a}|=5$ and $2\mathbf{a}-\mathbf{b}=\begin{pmatrix}5\\-10\end{pmatrix}$.
:::

## Vector geometry

In a vector geometry question you are given a few vectors, such as $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OB}=\mathbf{b}$, and asked to express other routes in terms of them. The key move is to travel along a path you know: $\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}=-\mathbf{a}+\mathbf{b}$.

Two facts do most of the work:
- If $\overrightarrow{PQ}=k\,\overrightarrow{RS}$, the lines $PQ$ and $RS$ are **parallel**.
- If $\overrightarrow{PQ}=k\,\overrightarrow{PR}$, they share the point $P$, so $P$, $Q$ and $R$ are **collinear** (on one straight line).

:::example A point dividing a line
$\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OB}=\mathbf{b}$. $M$ is the midpoint of $AB$, and $P$ is the point on $AB$ with $AP:PB=1:2$. Find $\overrightarrow{OM}$ and $\overrightarrow{OP}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.

**Solution.** First, $\overrightarrow{AB}=-\mathbf{a}+\mathbf{b}=\mathbf{b}-\mathbf{a}$.

$M$ is halfway along $AB$, so $\overrightarrow{OM}=\overrightarrow{OA}+\tfrac12\overrightarrow{AB}=\mathbf{a}+\tfrac12(\mathbf{b}-\mathbf{a})=\tfrac12\mathbf{a}+\tfrac12\mathbf{b}$.

$P$ is one third of the way along $AB$, because $AP:PB=1:2$ splits $AB$ into $3$ equal parts. So $\overrightarrow{OP}=\mathbf{a}+\tfrac13(\mathbf{b}-\mathbf{a})=\tfrac23\mathbf{a}+\tfrac13\mathbf{b}$.

So $\overrightarrow{OM}=\tfrac12(\mathbf{a}+\mathbf{b})$ and $\overrightarrow{OP}=\tfrac23\mathbf{a}+\tfrac13\mathbf{b}$.
:::

:::warning Common traps
- **Incomplete description:** a rotation needs centre, angle and direction; an enlargement needs centre and scale factor.
- **Two transformations:** "the single transformation" means exactly one.
- **Mirror lines:** write an equation ($y=-x$, $x=3$), not "the diagonal".
- **Direction of a vector:** $\overrightarrow{BA}=-\overrightarrow{AB}$; read the route from the first letter to the second.
- **Ratios:** $AP:PB=1:2$ means $P$ is $\tfrac13$ of the way from $A$, not $\tfrac12$.
:::

:::terms
- reflection / mirror line | phép đối xứng trục / trục đối xứng
- rotation / centre of rotation | phép quay / tâm quay
- clockwise / anticlockwise | cùng chiều / ngược chiều kim đồng hồ
- translation | phép tịnh tiến
- enlargement / scale factor | phép vị tự / tỉ số vị tự
- column vector | véc-tơ cột
- magnitude | độ dài (môđun) của véc-tơ
- collinear | thẳng hàng
:::

## Similar exercises

:::exercise
The point $(-1,\ 4)$ is translated by the vector $\begin{pmatrix}3\\-2\end{pmatrix}$. Find its image.

::hint
**What you need:** add the vector to the coordinates.

::solution
A translation slides every point by the same amount: it adds the top number to $x$ and the bottom number to $y$.

The image is $(-1+3,\ 4-2)=(2,\ 2)$.

So the image is $(2,\ 2)$.

**Answer.** $(2,\ 2)$.
:::

:::exercise
Reflect the point $(5,\ 2)$ in the line $y=x$, and then, separately, in the line $x=1$.

::hint
**What you need:** reflection in $y=x$ swaps the coordinates; reflection in $x=1$ keeps $y$ and the distance to the line.

::solution
Reflection in $y=x$ swaps $x$ and $y$, so $(5,\ 2)$ goes to $(2,\ 5)$.

The point $(5,\ 2)$ is $4$ units to the right of the line $x=1$, so its image is $4$ units to the left: $(1-4,\ 2)=(-3,\ 2)$.

So the images are $(2,\ 5)$ and $(-3,\ 2)$.

**Answer.** $(2,\ 5)$; $(-3,\ 2)$.
:::

:::exercise
Find the magnitude of $\begin{pmatrix}-6\\8\end{pmatrix}$.

::hint
**What you need:** $\sqrt{x^2+y^2}$.

::solution
By Pythagoras, the magnitude is $\sqrt{(-6)^2+8^2}=\sqrt{36+64}=\sqrt{100}$.

The negative sign disappears when we square, so the magnitude is $10$.

So the vector has magnitude $10$.

**Answer.** $10$.
:::

:::exercise
The point $(2,\ 3)$ is enlarged with centre $(1,\ 1)$ and scale factor $3$. Find its image.

::hint
**What you need:** multiply the vector from the centre to the point by $3$.

::solution
The vector from the centre $(1,\ 1)$ to the point $(2,\ 3)$ is $\begin{pmatrix}1\\2\end{pmatrix}$. Multiplying by the scale factor gives $\begin{pmatrix}3\\6\end{pmatrix}$.

Starting from the centre again, the image is $(1+3,\ 1+6)=(4,\ 7)$.

So the image is $(4,\ 7)$.

**Answer.** $(4,\ 7)$.
:::

:::exercise
Given $\mathbf{p}=\begin{pmatrix}2\\5\end{pmatrix}$ and $\mathbf{q}=\begin{pmatrix}-1\\3\end{pmatrix}$, find $3\mathbf{p}-2\mathbf{q}$.

::hint
**What you need:** work component by component.

::solution
Multiply each vector by its number first, then subtract component by component. First, $3\mathbf{p}=\begin{pmatrix}6\\15\end{pmatrix}$ and $2\mathbf{q}=\begin{pmatrix}-2\\6\end{pmatrix}$.

Subtracting, $3\mathbf{p}-2\mathbf{q}=\begin{pmatrix}6-(-2)\\15-6\end{pmatrix}=\begin{pmatrix}8\\9\end{pmatrix}$.

So $3\mathbf{p}-2\mathbf{q}=\begin{pmatrix}8\\9\end{pmatrix}$.

**Answer.** $\begin{pmatrix}8\\9\end{pmatrix}$.
:::

## Applied exercises

:::exercise
The point $(5,\ 3)$ is rotated through $180^\circ$ about the point $(2,\ 1)$. Find its image.

::hint
**What you need:** a half-turn reverses the vector from the centre.

::solution
The vector from the centre $(2,\ 1)$ to the point is $\begin{pmatrix}3\\2\end{pmatrix}$. A rotation of $180^\circ$ reverses it to $\begin{pmatrix}-3\\-2\end{pmatrix}$.

Starting from the centre, the image is $(2-3,\ 1-2)=(-1,\ -1)$.

So the image is $(-1,\ -1)$; the centre $(2,\ 1)$ is the midpoint of the point and its image, as it should be.

**Answer.** $(-1,\ -1)$.
:::

:::exercise
$\overrightarrow{OA}=\mathbf{a}$, $\overrightarrow{OB}=\mathbf{b}$ and $\overrightarrow{OC}=3\mathbf{b}-2\mathbf{a}$. Show that $A$, $B$ and $C$ are collinear, and find the ratio $AB:BC$.

::hint
**What you need:** compare $\overrightarrow{AB}$ and $\overrightarrow{AC}$.

::solution
$\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$ and $\overrightarrow{AC}=\overrightarrow{OC}-\overrightarrow{OA}=3\mathbf{b}-2\mathbf{a}-\mathbf{a}=3\mathbf{b}-3\mathbf{a}=3(\mathbf{b}-\mathbf{a})$.

So $\overrightarrow{AC}=3\overrightarrow{AB}$: the lines are parallel and share the point $A$, so $A$, $B$, $C$ are collinear. $AC$ is three times $AB$, so $BC=2AB$.

So the points are collinear and $AB:BC=1:2$.

**Answer.** Collinear; $AB:BC=1:2$.
:::

:::exercise
A triangle of area $5\text{ cm}^2$ is enlarged with scale factor $-2$. Find the area of the image.

::hint
**What you need:** areas are multiplied by $k^2$.

::solution
A negative scale factor turns the shape upside down on the other side of the centre, but lengths are still multiplied by $|-2|=2$.

So areas are multiplied by $(-2)^2=4$, and the image has area $5\times4=20\text{ cm}^2$.

So the image has area $20\text{ cm}^2$.

**Answer.** $20\text{ cm}^2$.
:::

:::exercise Challenge
$OABC$ is a parallelogram with $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OC}=\mathbf{c}$. $M$ is the midpoint of $AB$, and $N$ is the point on $OB$ with $ON:NB=2:1$. Show that $C$, $N$ and $M$ are collinear.

::hint
**What you need:** $\overrightarrow{AB}=\mathbf{c}$ and $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$; compare $\overrightarrow{CN}$ and $\overrightarrow{CM}$.

::solution
In the parallelogram, $\overrightarrow{AB}=\overrightarrow{OC}=\mathbf{c}$, so $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$, $\overrightarrow{OM}=\mathbf{a}+\tfrac12\mathbf{c}$ and $\overrightarrow{ON}=\tfrac23(\mathbf{a}+\mathbf{c})$.

Then $\overrightarrow{CN}=\overrightarrow{ON}-\overrightarrow{OC}=\tfrac23\mathbf{a}-\tfrac13\mathbf{c}$ and $\overrightarrow{CM}=\overrightarrow{OM}-\overrightarrow{OC}=\mathbf{a}-\tfrac12\mathbf{c}=\tfrac32\left(\tfrac23\mathbf{a}-\tfrac13\mathbf{c}\right)$.

So $\overrightarrow{CM}=\tfrac32\overrightarrow{CN}$: the two vectors are parallel and both start at $C$, so $C$, $N$ and $M$ lie on one straight line.

**Answer.** $\overrightarrow{CM}=\tfrac32\overrightarrow{CN}$, so $C$, $N$, $M$ are collinear.
:::

:::quiz
::mc
The translation that moves $(1,\ 2)$ to $(4,\ 0)$ has vector
A. $\begin{pmatrix}3\\2\end{pmatrix}$
B. $\begin{pmatrix}3\\-2\end{pmatrix}$
C. $\begin{pmatrix}-3\\2\end{pmatrix}$
D. $\begin{pmatrix}5\\2\end{pmatrix}$
::key B
Image minus original: $4-1=3$, $0-2=-2$.

::mc
A shape is enlarged with scale factor $3$. Its area is multiplied by
A. $3$
B. $6$
C. $27$
D. $9$
::key D
$3^2=9$.

::mc
The image of $(2,\ 5)$ after reflection in the $x$-axis is
A. $(2,\ -5)$
B. $(-2,\ 5)$
C. $(5,\ 2)$
D. $(-2,\ -5)$
::key A
The $y$-coordinate changes sign.

::mc
The magnitude of $\begin{pmatrix}5\\12\end{pmatrix}$ is
A. $17$
B. $7$
C. $13$
D. $169$
::key C
$\sqrt{25+144}=13$.

::tf
Let $\mathbf{a}=\begin{pmatrix}2\\1\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}4\\2\end{pmatrix}$. Decide whether each statement is true or false.
a) $\mathbf{b}=2\mathbf{a}$.
b) $\mathbf{a}$ and $\mathbf{b}$ are parallel.
c) $|\mathbf{b}|=2|\mathbf{a}|$.
d) $\mathbf{a}+\mathbf{b}=\begin{pmatrix}6\\4\end{pmatrix}$.
::key T T T F
$\mathbf{a}+\mathbf{b}=\begin{pmatrix}6\\3\end{pmatrix}$.

::sa
A shape is enlarged with scale factor $-2$. By what number is its area multiplied?
::key 4
$(-2)^2=4$.

::sa
Find the magnitude of $\begin{pmatrix}-8\\6\end{pmatrix}$.
::key 10
$\sqrt{64+36}=10$.
:::
