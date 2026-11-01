---
title: Equation of a line
description: Describe a line by a point and a direction or normal vector, and convert between parametric, general and slope forms.
minutes: 18
---

:::goals
- Use a direction vector $\vec{u}$ and a normal vector $\vec{n}$ of a line.
- Write parametric, general and slope forms of a line and convert between them.
- Find the equation of a line through two points, and of parallel and perpendicular lines.
- Use intercepts to sketch a line.
:::

A GPS gives you a starting point and a heading. Together they determine a straight road, with no further information. That is exactly how we describe a line in coordinates: a **point** on the line and a **direction**. This lesson turns that idea into equations in three useful forms.

## Direction vector and normal vector

A **direction vector** $\vec{u}=(a, b)\neq\vec{0}$ of a line is a vector parallel to the line. A **normal vector** $\vec{n}=(A, B)\neq\vec{0}$ is perpendicular to the line. Since $\vec{u}\perp\vec{n}$, rotating $\vec{u}=(a, b)$ gives $\vec{n}=(-b, a)$ (or $(b, -a)$). Any non-zero multiple of $\vec{u}$ (or $\vec{n}$) works too.

## Three forms of the equation

:::definition Equations of a line
Let the line pass through $M_0(x_0, y_0)$.
- **Parametric:** with direction vector $\vec{u}=(a, b)$,
$$\begin{cases}x=x_0+at\\ y=y_0+bt\end{cases}\quad(t\in\mathbb{R}).$$
- **General:** with normal vector $\vec{n}=(A, B)$,
$$A(x-x_0)+B(y-y_0)=0,\ \text{ i.e. }\ Ax+By+C=0.$$
- **Slope form:** a non-vertical line is $y=kx+m$, where $k$ is the slope.
:::

In the general form the coefficients $(A, B)$ are a normal vector of the line. If $B\neq 0$, the slope is $k=-\frac{A}{B}$.

:::example From a point and a normal vector
Write the equation of the line through $M(1, 2)$ with normal vector $\vec{n}=(3, -2)$, and give a direction vector.

**Solution.** $3(x-1)-2(y-2)=0$, so $3x-3-2y+4=0$, i.e. $3x-2y+1=0$. A direction vector is $\vec{u}=(2, 3)$ (swap the coordinates of $\vec{n}$ and change one sign). Check: $3\cdot 1-2\cdot 2+1=0$ ✓.
:::

## A line through two points

For $A(x_A, y_A)$ and $B(x_B, y_B)$ take $\overrightarrow{AB}$ as a direction vector, then a normal vector, then the general form.

:::graph The line through $A$ and $B$
alt: A line with positive slope passing through A(1, 3) and B(4, 9)
x: -2..6
y: -2..10
plot: 2x + 1
point: (1, 3) "A" below-right
point: (4, 9) "B" below-right
:::

:::example Two points
Find the equation of the line through $A(1, 3)$ and $B(4, 9)$.

**Solution.** $\overrightarrow{AB}=(3, 6)$, so $\vec{u}=(1, 2)$ works, and $\vec{n}=(2, -1)$. The line: $2(x-1)-(y-3)=0$, i.e. $2x-y+1=0$, or $y=2x+1$ with slope $k=2$. Check $B$: $2\cdot 4-9+1=0$ ✓.
:::

## Converting and sketching

:::example Intercept form
Sketch $2x+3y-6=0$ and find its slope.

**Solution.** For $y=0$: $x=3$. For $x=0$: $y=2$. The line passes through $(3, 0)$ and $(0, 2)$, so in intercept form $\frac{x}{3}+\frac{y}{2}=1$. Solving for $y$: $y=-\frac23x+2$, slope $k=-\frac23$.
:::

:::graph The line $2x+3y-6=0$
alt: A line with negative slope crossing the x-axis at 3 and the y-axis at 2
x: -2..5
y: -2..4
plot: (6 - 2x)/3
point: (3, 0) "(3, 0)" above-right
point: (0, 2) "(0, 2)" above-right
:::

:::example Parametric to general
Convert $\begin{cases}x=1+2t\\ y=-1+3t\end{cases}$ to a general equation.

**Solution.** The direction vector is $\vec{u}=(2, 3)$, so $\vec{n}=(3, -2)$, and the line passes through $(1, -1)$: $3(x-1)-2(y+1)=0$, i.e. $3x-2y-5=0$.
:::

## Parallel and perpendicular lines

A line parallel to $Ax+By+C=0$ is $Ax+By+C'=0$ (same $\vec{n}$). A line perpendicular to it has $\vec{n}'=\vec{u}=(B, -A)$ as its normal vector, i.e. it is $Bx-Ay+C''=0$.

:::example Parallel and perpendicular
Find the line through $P(2, -1)$ (a) parallel and (b) perpendicular to $3x-4y+5=0$.

**Solution.**
- (a) $3x-4y+C'=0$ through $P$: $6+4+C'=0$, so $C'=-10$. The line is $3x-4y-10=0$.
- (b) $4x+3y+C''=0$ through $P$: $8-3+C''=0$, so $C''=-5$. The line is $4x+3y-5=0$.
:::

:::example A perpendicular bisector
Find the perpendicular bisector of $AB$ with $A(1, 1)$ and $B(5, 3)$.

**Solution.** The midpoint is $M(3, 2)$ and $\overrightarrow{AB}=(4, 2)$ is a normal vector of the bisector. So $4(x-3)+2(y-2)=0$, i.e. $2x+y-8=0$.
:::

:::warning Common mistakes
- Mixing up direction and normal vectors: $\vec{n}=(A, B)$ is perpendicular to the line.
- Writing the slope as $\frac{A}{B}$ instead of $-\frac{A}{B}$.
- Dividing by $B$ when $B=0$ (the line is vertical: $x=\text{constant}$).
- Forgetting to check that the given point satisfies the final equation.
:::

## Key terms

:::terms
- direction vector | vectơ chỉ phương
- normal vector | vectơ pháp tuyến
- parametric equation | phương trình tham số
- general equation | phương trình tổng quát
- slope | hệ số góc
- intercept | giao điểm với trục
- parallel | song song
- perpendicular bisector | đường trung trực
:::

## Summary

- A line is fixed by a point and a direction vector $\vec{u}$ or a normal vector $\vec{n}$.
- Parametric: $x=x_0+at$, $y=y_0+bt$. General: $A(x-x_0)+B(y-y_0)=0$ with $\vec{n}=(A, B)$.
- Slope form $y=kx+m$ with $k=-\frac{A}{B}$ for $Ax+By+C=0$ and $B\neq0$.
- Parallel lines share $\vec{n}$; perpendicular lines swap $(A, B)\to(B, -A)$.

## Practice

:::practice
1. Write the equation of the line through $A(2, 1)$ with normal vector $\vec{n}=(1, -3)$.
2. Write the parametric equations and the general equation of the line through $A(1, 1)$ with direction vector $\vec{u}=(2, 1)$.
3. Find the line through $A(-1, 2)$ and $B(3, -2)$.
4. Find the slope and the two intercepts of $4x-2y+8=0$.
5. Convert $\begin{cases}x=2-t\\ y=3+2t\end{cases}$ to a general equation.
6. Find the line through $P(1, -2)$ parallel to $2x-y+3=0$.
7. Find the line through $P(1, -2)$ perpendicular to $2x-y+3=0$.
8. Write the line through $(4, 0)$ and $(0, -3)$ in general form.
9. Challenge. Find the perpendicular bisector of $A(1, 1)$ and $B(5, 3)$ and check that it passes through the midpoint.
10. Challenge. A line through $M(2, 3)$ meets the axes at $A(a, 0)$ and $B(0, b)$ with $M$ the midpoint of $AB$. Find its equation.
:::

:::solution Show solutions
1. $(x-2)-3(y-1)=0$, so $x-3y+1=0$.
2. $\begin{cases}x=1+2t\\ y=1+t\end{cases}$. $\vec{n}=(1, -2)$: $(x-1)-2(y-1)=0$, so $x-2y+1=0$.
3. $\overrightarrow{AB}=(4, -4)$, so $\vec{u}=(1, -1)$ and $\vec{n}=(1, 1)$. $(x+1)+(y-2)=0$, so $x+y-1=0$.
4. $y=2x+4$: slope $2$. For $y=0$, $x=-2$; for $x=0$, $y=4$. Intercepts $(-2, 0)$ and $(0, 4)$.
5. $\vec{u}=(-1, 2)$, $\vec{n}=(2, 1)$, point $(2, 3)$: $2(x-2)+(y-3)=0$, so $2x+y-7=0$.
6. $2x-y+C=0$ through $P$: $2+2+C=0$, so $C=-4$. Line: $2x-y-4=0$.
7. $\vec{n}'=(1, 2)$: $(x-1)+2(y+2)=0$, so $x+2y+3=0$. Check: $1-4+3=0$ ✓.
8. $\frac{x}{4}+\frac{y}{-3}=1$; multiplying by $12$: $3x-4y=12$, so $3x-4y-12=0$.
9. $M(3, 2)$, $\vec{n}=\overrightarrow{AB}=(4, 2)$: $4(x-3)+2(y-2)=0$, so $2x+y-8=0$. Check $M$: $6+2-8=0$ ✓.
10. $M$ is the midpoint: $\frac{a+0}{2}=2$ and $\frac{0+b}{2}=3$, so $a=4$, $b=6$. The line is $\frac{x}{4}+\frac{y}{6}=1$, i.e. $3x+2y-12=0$.
:::
