---
title: Relative position of two lines. Angles and distances
description: Decide whether two lines intersect, are parallel or coincide, find the angle between them, and compute distances from a point to a line.
minutes: 18
---

:::goals
- Decide the relative position of two lines from their equations.
- Find the angle between two lines and test perpendicularity.
- Compute the distance from a point to a line and between parallel lines.
- Use these tools for heights and areas of triangles.
:::

Two roads on a map either cross, run side by side, or are the same road drawn twice. A surveyor also wants to know at what angle they cross and how far a house is from the road. All of this follows from the **normal vectors** of the lines.

## Relative position of two lines

Let $d_1: a_1x+b_1y+c_1=0$ and $d_2: a_2x+b_2y+c_2=0$ with normal vectors $\vec{n}_1=(a_1, b_1)$ and $\vec{n}_2=(a_2, b_2)$.

:::theorem Position of two lines
- $\vec{n}_1,\vec{n}_2$ **not collinear** ($a_1b_2-a_2b_1\neq 0$): the lines **intersect** at one point. Solve the system to find it.
- $\vec{n}_1,\vec{n}_2$ collinear and the equations are proportional ($\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$): the lines **coincide**.
- $\vec{n}_1,\vec{n}_2$ collinear but not $c_1/c_2$: the lines are **parallel** and distinct.
:::

:::example Three cases
Decide the position of each pair.
a) $x+y-3=0$ and $2x-y=0$. b) $2x-4y+6=0$ and $x-2y-5=0$. c) $2x-4y+6=0$ and $x-2y+3=0$.

**Solution.**
- a) $1\cdot(-1)-2\cdot 1=-3\neq 0$: they intersect. From $y=2x$: $x+2x-3=0$, so $x=1$, $y=2$. The point is $(1, 2)$.
- b) $2\cdot(-2)-1\cdot(-4)=0$, so the normals are collinear. Since $\frac{2}{1}=\frac{-4}{-2}=2\neq\frac{6}{-5}$, the lines are parallel.
- c) $\frac{2}{1}=\frac{-4}{-2}=\frac{6}{3}=2$: the equations are proportional, so the lines coincide.
:::

## Angle between two lines

The angle $\varphi$ between two lines is between $0^\circ$ and $90^\circ$ and
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|}=\frac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.$$
The lines are **perpendicular** exactly when $a_1a_2+b_1b_2=0$.

:::graph Two lines crossing at $45^\circ$
alt: The line x plus y equals 3 and the vertical line x equals 1 crossing at the point (1, 2)
x: -1..5
y: -1..7
plot: -x + 3
vline: 1 ; dashed
point: (1, 2) "(1, 2)" above-right
:::

:::example Angle between lines
Find the angle between $x+y-3=0$ and $x=1$, and between $x+y=0$ and $x+3y-2=0$.

**Solution.**
- $\vec{n}_1=(1, 1)$ and $\vec{n}_2=(1, 0)$: $\cos\varphi=\frac{1}{\sqrt2\cdot 1}=\frac{1}{\sqrt2}$, so $\varphi=45^\circ$.
- $\vec{n}_1=(1, 1)$ and $\vec{n}_2=(1, 3)$: $\cos\varphi=\frac{4}{\sqrt2\sqrt{10}}=\frac{4}{\sqrt{20}}=\frac{2}{\sqrt5}$, so $\varphi\approx 26.57^\circ$.
:::

:::example A perpendicularity condition
Find $m$ so that $mx+y+1=0$ is perpendicular to $2x-3y+5=0$.

**Solution.** $2m+1\cdot(-3)=0$, so $m=\frac32$.
:::

## Distance from a point to a line

:::theorem Distance from a point to a line
The distance from $M_0(x_0, y_0)$ to the line $d: ax+by+c=0$ is
$$d(M_0, d)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.$$
:::

:::example Distance to a line
Find the distance from $M(1, 2)$ to $3x+4y-2=0$.

**Solution.** $\dfrac{|3\cdot 1+4\cdot 2-2|}{\sqrt{9+16}}=\dfrac{9}{5}=1.8$.
:::

For two **parallel** lines, pick any point on one and measure to the other. With $ax+by+c_1=0$ and $ax+by+c_2=0$ the distance is $\frac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

:::example Distance between parallel lines
Find the distance between $3x+4y-2=0$ and $3x+4y+8=0$.

**Solution.** $\dfrac{|-2-8|}{\sqrt{9+16}}=\dfrac{10}{5}=2$.
:::

## Heights and areas of a triangle

:::diagram Triangle $ABC$
alt: Triangle with vertices A(1, 1), B(5, 1) and C(3, 5)
point A 1,1 below-left
point B 5,1 below-right
point C 3,5 above
polygon A B C
segment A B
label 4.3,3.4 "BC"

:::

:::example Height and area
Triangle $ABC$ has $A(1, 1)$, $B(5, 1)$ and $C(3, 5)$. Find the height from $A$ and the area.

**Solution.** $\overrightarrow{BC}=(-2, 4)$, so a normal vector of $BC$ is $(2, 1)$ (or $(4, 2)$). The line $BC$: $2(x-5)+(y-1)=0$, i.e. $2x+y-11=0$. The height from $A$ is
$$h_A=\frac{|2+1-11|}{\sqrt5}=\frac{8}{\sqrt5}.$$
Also $BC=\sqrt{4+16}=2\sqrt5$, so the area is $\frac12\cdot 2\sqrt5\cdot\frac{8}{\sqrt5}=8$. Check with the base $AB=4$ and the height $4$ (the $y$-coordinate of $C$ minus $1$): $\frac12\cdot 4\cdot 4=8$ ✓.
:::

:::warning Common mistakes
- Forgetting the absolute value in the angle and distance formulas.
- Comparing only $a_1/a_2$ and $b_1/b_2$ and forgetting $c_1/c_2$ (that decides between parallel and coincident).
- Using the distance formula between parallel lines when the coefficients $a, b$ are not identical: first make them the same.
- Giving an angle larger than $90^\circ$ between two lines.
:::

## Key terms

:::terms
- relative position | vị trí tương đối
- intersect | cắt nhau
- coincide | trùng nhau
- parallel | song song
- angle between two lines | góc giữa hai đường thẳng
- distance from a point to a line | khoảng cách từ một điểm đến đường thẳng
- height | đường cao
- area | diện tích
:::

## Summary

- Compare $\vec{n}_1,\vec{n}_2$: not collinear means the lines intersect; collinear means parallel or coincident (check $c$).
- $\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$, and perpendicular means $a_1a_2+b_1b_2=0$.
- $d(M_0, d)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.
- Heights and areas of triangles follow from distance and length.

## Practice

:::practice
1. Decide the position of $2x-y+1=0$ and $4x-2y+3=0$.
2. Find the intersection of $3x+2y-6=0$ and $x-y+2=0$.
3. Find the angle between $x+y=0$ and $x+3y-2=0$ (to $0.01^\circ$).
4. Find $m$ so that $(m+1)x+2y-3=0$ is perpendicular to $x-y+4=0$.
5. Find the distance from the origin to $5x+12y-26=0$.
6. Find the distance from $A(2, -1)$ to $3x-4y+5=0$.
7. Find the distance between $2x-y+1=0$ and $2x-y-4=0$.
8. For $A(1, 1)$, $B(5, 4)$, $C(2, 5)$ find the line $AB$, the height from $C$ and the area of $ABC$.
9. Challenge. Find the points of the $x$-axis whose distance to $3x+4y-5=0$ is $3$.
10. Challenge. Find the distance from $A(1, 1)$ to the line through $B(2, -1)$ with direction vector $\vec{u}=(3, 4)$.
:::

:::solution Show solutions
1. $\frac{2}{4}=\frac{-1}{-2}=\frac12\neq\frac13$: parallel (distinct).
2. From $x=y-2$: $3(y-2)+2y-6=0$, so $5y=12$, $y=\frac{12}{5}$ and $x=\frac25$. The point is $\left(\frac25, \frac{12}{5}\right)$.
3. $\cos\varphi=\frac{|1+3|}{\sqrt2\sqrt{10}}=\frac{4}{\sqrt{20}}=\frac{2}{\sqrt5}$, so $\varphi\approx 26.57^\circ$.
4. $(m+1)\cdot 1+2\cdot(-1)=0$, so $m=1$.
5. $\frac{|{-26}|}{\sqrt{25+144}}=\frac{26}{13}=2$.
6. $\frac{|6+4+5|}{\sqrt{9+16}}=\frac{15}{5}=3$.
7. $\frac{|1-(-4)|}{\sqrt{4+1}}=\frac{5}{\sqrt5}=\sqrt5$.
8. $\overrightarrow{AB}=(4, 3)$, $\vec{n}=(3, -4)$: $3(x-1)-4(y-1)=0$, i.e. $3x-4y+1=0$. Height from $C$: $\frac{|6-20+1|}{5}=\frac{13}{5}=2.6$. $AB=5$, so the area is $\frac12\cdot 5\cdot 2.6=6.5$.
9. $M(t, 0)$: $\frac{|3t-5|}{5}=3$, so $3t-5=\pm15$, giving $t=\frac{20}{3}$ or $t=-\frac{10}{3}$. The points are $\left(\frac{20}{3}, 0\right)$ and $\left(-\frac{10}{3}, 0\right)$.
10. $\vec{n}=(4, -3)$: $4(x-2)-3(y+1)=0$, i.e. $4x-3y-11=0$. Distance from $A$: $\frac{|4-3-11|}{5}=\frac{10}{5}=2$.
:::
