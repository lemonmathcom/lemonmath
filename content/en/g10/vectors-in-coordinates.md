---
title: Vectors in the coordinate plane
description: Describe a vector by its coordinates, add and scale vectors with numbers, and find lengths, midpoints, centroids and collinear points from coordinates.
minutes: 18
---

:::goals
- Write a vector as $\vec{a}=(x, y)$ and find the coordinates of $\overrightarrow{AB}$ from the points $A$ and $B$.
- Add, subtract and scale vectors using coordinates.
- Find the length of a vector and the distance between two points.
- Use coordinates for midpoints, centroids, collinearity and a missing vertex of a parallelogram.
:::

A map app tells you "walk 3 blocks east and 2 blocks north". Those two numbers are everything you need to know about the move: how far along the street and how far up the avenue. Placing vectors on a coordinate grid turns this idea into a tool. Instead of drawing arrows we can compute with pairs of numbers, which is faster and also works for problems too complicated to draw.

## Coordinates of a vector

In the plane with axes $Ox$ and $Oy$, let $\vec{i}$ be the vector of length $1$ along $Ox$ and $\vec{j}$ the vector of length $1$ along $Oy$. These are the **unit vectors**.

:::definition Coordinates of a vector
Every vector $\vec{a}$ can be written in exactly one way as
$$\vec{a}=x\vec{i}+y\vec{j}.$$
The pair $(x, y)$ is the **coordinates** of $\vec{a}$, and we write $\vec{a}=(x, y)$.
:::

:::diagram The vector $\vec{a}=3\vec{i}+2\vec{j}$
alt: On a grid, an arrow from the origin O to the point P(3, 2), with dashed segments showing 3 units along the x-axis and 2 units up
point O 0,0 below-left
point X 3,0 below ""
point Y 0,2 left ""
point P 3,2 above-right "(3, 2)"
axes
grid
arrow O P "a"
segment X P dashed
segment Y P dashed
:::

Two vectors are **equal** exactly when their coordinates are equal: $(x, y)=(x', y')$ means $x=x'$ and $y=y'$. The zero vector is $(0, 0)$.

### From points to a vector

If $A(x_A, y_A)$ and $B(x_B, y_B)$, then to go from $A$ to $B$ you move $x_B-x_A$ horizontally and $y_B-y_A$ vertically:
$$\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A).$$

:::example A vector from two points
Find $\overrightarrow{AB}$ for $A(1, 2)$ and $B(4, 6)$.

**Solution.** $\overrightarrow{AB}=(4-1,\ 6-2)=(3, 4)$.
:::

## Operations in coordinates

:::theorem Operations on coordinates
Let $\vec{a}=(x_1, y_1)$, $\vec{b}=(x_2, y_2)$ and $k$ a number. Then
- $\vec{a}+\vec{b}=(x_1+x_2,\ y_1+y_2)$,
- $\vec{a}-\vec{b}=(x_1-x_2,\ y_1-y_2)$,
- $k\vec{a}=(kx_1,\ ky_1)$.
:::

So you add, subtract and scale vectors one coordinate at a time.

:::example Combining vectors
Let $\vec{a}=(2, -1)$ and $\vec{b}=(-3, 4)$. Find $\vec{a}+\vec{b}$, $\vec{a}-\vec{b}$ and $3\vec{a}-2\vec{b}$.

**Solution.**
- $\vec{a}+\vec{b}=(2-3,\ -1+4)=(-1, 3)$.
- $\vec{a}-\vec{b}=(2+3,\ -1-4)=(5, -5)$.
- $3\vec{a}=(6, -3)$ and $2\vec{b}=(-6, 8)$, so $3\vec{a}-2\vec{b}=(6+6,\ -3-8)=(12, -11)$.
:::

## Length of a vector and distance

By Pythagoras, the vector $\vec{a}=(x, y)$ has length
$$|\vec{a}|=\sqrt{x^2+y^2}.$$
Since $AB$ is the length of $\overrightarrow{AB}$, the **distance between two points** is
$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

:::example Length and distance
For $A(1, 2)$ and $B(4, 6)$ we found $\overrightarrow{AB}=(3, 4)$. Then $AB=\sqrt{3^2+4^2}=\sqrt{25}=5$.
:::

## Midpoint and centroid

Using $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ and $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$ with $O$ as the origin, we get coordinates by averaging.

:::theorem Midpoint and centroid
- The midpoint $M$ of $AB$ is $M\left(\dfrac{x_A+x_B}{2},\ \dfrac{y_A+y_B}{2}\right)$.
- The centroid $G$ of triangle $ABC$ is $G\left(\dfrac{x_A+x_B+x_C}{3},\ \dfrac{y_A+y_B+y_C}{3}\right)$.
:::

:::example Midpoint and centroid
a) Find the midpoint of $A(2, -1)$ and $B(6, 5)$.
b) Find the centroid of the triangle with vertices $A(1, 1)$, $B(5, 2)$, $C(0, 6)$.

**Solution.**
a) $M\left(\dfrac{2+6}{2},\ \dfrac{-1+5}{2}\right)=(4, 2)$.
b) $G\left(\dfrac{1+5+0}{3},\ \dfrac{1+2+6}{3}\right)=(2, 3)$.
:::

## Collinear vectors and collinear points

Two vectors $\vec{a}=(x_1, y_1)$ and $\vec{b}=(x_2, y_2)$ are **collinear** when one is a multiple of the other. In coordinates this means
$$x_1y_2-x_2y_1=0.$$
(Write it as a product test instead of a ratio $\frac{x_1}{x_2}=\frac{y_1}{y_2}$, which fails when a coordinate is $0$.) Three points $A$, $B$, $C$ are collinear when $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are collinear.

:::example Collinear points
Show that $A(1, 2)$, $B(3, 6)$ and $C(5, 10)$ are collinear. Then find $m$ so that $\vec{a}=(1, -2)$ and $\vec{b}=(m, 6)$ are collinear.

**Solution.**
- $\overrightarrow{AB}=(2, 4)$ and $\overrightarrow{AC}=(4, 8)$. Test: $2\cdot 8-4\cdot 4=16-16=0$, so the points are collinear (indeed $\overrightarrow{AC}=2\overrightarrow{AB}$).
- For $\vec{a}$ and $\vec{b}$: $1\cdot 6-m\cdot(-2)=6+2m=0$, so $m=-3$.
:::

## A missing vertex of a parallelogram

$ABCD$ is a parallelogram exactly when $\overrightarrow{AB}=\overrightarrow{DC}$, which gives $D=A+C-B$ in coordinates.

:::diagram Parallelogram $ABCD$
alt: A parallelogram with vertices A(1, 1), B(4, 2), C(5, 5) and D(2, 4) drawn on a grid
point A 1,1 below-left "A(1, 1)"
point B 4,2 below-right "B(4, 2)"
point C 5,5 above-right "C(5, 5)"
point D 2,4 above-left "D(2, 4)"
polygon A B C D
grid
:::

:::example Fourth vertex
Three vertices of parallelogram $ABCD$ are $A(1, 1)$, $B(4, 2)$ and $C(5, 5)$. Find $D$.

**Solution.** $\overrightarrow{AB}=\overrightarrow{DC}$, so $(3, 1)=(5-x_D,\ 5-y_D)$. Then $x_D=5-3=2$ and $y_D=5-1=4$. So $D(2, 4)$. Check with the diagonals: the midpoint of $AC$ is $(3, 3)$ and the midpoint of $BD$ is $(3, 3)$. ✓
:::

:::warning Common mistakes
- Subtracting in the wrong order: $\overrightarrow{AB}=B-A$, not $A-B$.
- Forgetting that a vector has no "position": $\overrightarrow{AB}=(3, 4)$ for many different pairs of points.
- Using the ratio test for collinearity when a coordinate is $0$; use $x_1y_2-x_2y_1=0$.
- Writing $|\vec{a}|=x+y$ instead of $\sqrt{x^2+y^2}$.
:::

## Key terms

:::terms
- unit vectors | các vectơ đơn vị
- coordinates of a vector | toạ độ của vectơ
- equal vectors | hai vectơ bằng nhau
- length of a vector | độ dài vectơ
- distance between two points | khoảng cách giữa hai điểm
- midpoint | trung điểm
- centroid | trọng tâm
- collinear | cùng phương
- parallelogram | hình bình hành
:::

## Summary

- $\vec{a}=x\vec{i}+y\vec{j}$ is written $\vec{a}=(x, y)$; $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)$.
- Add, subtract and scale one coordinate at a time.
- $|\vec{a}|=\sqrt{x^2+y^2}$ and $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.
- Midpoint: average of the coordinates; centroid: average of three.
- $\vec{a}$, $\vec{b}$ collinear $\iff x_1y_2-x_2y_1=0$; parallelogram $ABCD$: $D=A+C-B$.

## Practice

:::practice
1. Let $\vec{a}=(3, -2)$ and $\vec{b}=(-1, 5)$. Find $2\vec{a}+\vec{b}$ and $\vec{a}-3\vec{b}$.
2. Find $\overrightarrow{AB}$ and the distance $AB$ for $A(-2, 3)$ and $B(4, -1)$.
3. Find the midpoint of $A(-3, 5)$ and $B(7, 1)$.
4. Find the centroid of the triangle with vertices $A(1, 2)$, $B(4, -1)$, $C(-2, 8)$.
5. Show that $A(1, 1)$, $B(2, 3)$, $C(4, 7)$ are collinear.
6. Find $m$ so that $\vec{a}=(m, 3)$ and $\vec{b}=(4, 6)$ are collinear.
7. $ABCD$ is a parallelogram with $A(-1, 0)$, $B(2, 1)$, $C(3, 4)$. Find $D$.
8. Write $\vec{c}=(5, 1)$ as $x\vec{a}+y\vec{b}$ with $\vec{a}=(1, 1)$ and $\vec{b}=(1, -1)$.
9. Challenge. Find the point $M$ on the $x$-axis that is collinear with $A(1, 2)$ and $B(3, -2)$.
10. Challenge. Show that the triangle with $A(1, 1)$, $B(4, 5)$, $C(7, 1)$ is isosceles and find its perimeter.
:::

:::solution Show solutions
1. $2\vec{a}+\vec{b}=(6-1,\ -4+5)=(5, 1)$. $\vec{a}-3\vec{b}=(3+3,\ -2-15)=(6, -17)$.
2. $\overrightarrow{AB}=(4+2,\ -1-3)=(6, -4)$ and $AB=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}$.
3. $\left(\dfrac{-3+7}{2},\ \dfrac{5+1}{2}\right)=(2, 3)$.
4. $G\left(\dfrac{1+4-2}{3},\ \dfrac{2-1+8}{3}\right)=(1, 3)$.
5. $\overrightarrow{AB}=(1, 2)$ and $\overrightarrow{AC}=(3, 6)$. $1\cdot 6-3\cdot 2=0$, so they are collinear (and $\overrightarrow{AC}=3\overrightarrow{AB}$).
6. $m\cdot 6-4\cdot 3=0$, so $6m=12$ and $m=2$.
7. $D=A+C-B=(-1+3-2,\ 0+4-1)=(0, 3)$.
8. $x+y=5$ and $x-y=1$. Adding gives $2x=6$, $x=3$, then $y=2$. So $\vec{c}=3\vec{a}+2\vec{b}$.
9. $M(t, 0)$. $\overrightarrow{AM}=(t-1, -2)$ and $\overrightarrow{AB}=(2, -4)$. Collinear: $(t-1)(-4)-2\cdot(-2)=0$, so $-4t+4+4=0$ and $t=2$. $M(2, 0)$.
10. $AB=\sqrt{9+16}=5$, $BC=\sqrt{9+16}=5$, $AC=6$. Two equal sides, so it is isosceles. Perimeter $5+5+6=16$.
:::
