---
title: Equation of a line
description: Describe a line by a point and a direction or normal vector, and convert between parametric, general and gradient forms.
minutes: 28
---

:::goals
- Use a direction vector $\vec{u}$ and a normal vector $\vec{n}$ of a line.
- Write the parametric, general and gradient forms of a line, and convert between them.
- Write the equation of the line through two points, and of parallel and perpendicular lines.
- Use the intercepts with the axes to draw a line.
:::

A robot vacuum cleaner starts at the point $M(1, 2)$ on a floor (units: metres). Every second it moves by the vector $\vec{u}=(2, 3)$, that is $2$ m to the right and $3$ m up. Does the robot pass through the point $N(9, 14)$, and if so, after how many seconds?

The robot needs only a **starting point** and a **direction** to trace a whole straight line. This lesson turns that idea into equations.

## Direction and normal vectors

### Explore: the robot's positions

After $t$ seconds the robot is at the point $M+t\vec{u}$. We record a few positions:

| $t$ (seconds) | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| position | $(1, 2)$ | $(3, 5)$ | $(5, 8)$ | $(7, 11)$ |

These points are collinear, and the position after $t$ seconds is $(1+2t, 2+3t)$. To reach $N(9, 14)$ we need $1+2t=9$ and $2+3t=14$. Both give $t=4$, so the robot passes through $N$ after $4$ seconds.

:::graph The robot's path
alt: A straight line through the robot's positions at t equal 0, 1, 2 and the point N(9, 14)
x: -1..10
y: -1..15
plot: (3x + 1)/2
point: (1, 2) "t=0" right
point: (3, 5) "t=1" right
point: (5, 8) "t=2" right
point: (9, 14) "N" right
:::

The vector $\vec{u}=(2, 3)$ gives the **direction** of the line. The vector $\vec{n}=(3, -2)$ is perpendicular to it, because $\vec{u}\cdot\vec{n}=2\cdot3+3\cdot(-2)=0$.

:::definition Direction vector and normal vector
- A **direction vector** of a line $\Delta$ is a vector $\vec{u}\neq\vec{0}$ that is parallel to $\Delta$ (or lies along it).
- A **normal vector** of $\Delta$ is a vector $\vec{n}\neq\vec{0}$ that is perpendicular to $\Delta$.
- If $\vec{u}=(a, b)$, then $\vec{n}=(-b, a)$ (or $(b, -a)$) is a normal vector. Any non-zero multiple of $\vec{u}$ (or $\vec{n}$) works too.
:::

## Three forms of the equation

:::definition Equation of a line
Let a line pass through $M_0(x_0, y_0)$.
- **Parametric:** with direction vector $\vec{u}=(a, b)$,
$$\begin{cases}x=x_0+at\\ y=y_0+bt\end{cases}\quad(t\in\mathbb{R}).$$
- **General (Cartesian):** with normal vector $\vec{n}=(A, B)$,
$$A(x-x_0)+B(y-y_0)=0,\ \text{ that is }\ Ax+By+C=0.$$
- **Gradient form:** a line not parallel to the $y$-axis has the form $y=kx+m$, where $k$ is the **gradient** (slope).
:::

### Why is the general equation true?

A point $M(x, y)$ lies on the line exactly when $\overrightarrow{M_0M}=(x-x_0, y-y_0)$ is perpendicular to $\vec{n}$. Two vectors are perpendicular when their scalar product is $0$:
$$\vec{n}\cdot\overrightarrow{M_0M}=A(x-x_0)+B(y-y_0)=0.$$
Conversely, in the equation $Ax+By+C=0$ the pair $(A, B)$ is a normal vector. If $B\neq 0$, solving for $y$ gives $y=-\dfrac{A}{B}x-\dfrac{C}{B}$, so the gradient is $k=-\dfrac{A}{B}$.

For the robot at the start, we can now write both forms at once.

:::example From a point and a normal vector
Write the general and the parametric equations of the line through $M(1, 2)$ with normal vector $\vec{n}=(3, -2)$.

**Solution.** Substitute the point and the normal vector into $A(x-x_0)+B(y-y_0)=0$:

$$3(x-1)-2(y-2)=0\iff 3x-2y+1=0.$$

Swapping the two coordinates of $\vec{n}$ and changing the sign of one gives the direction vector $\vec{u}=(2, 3)$.

So the line has general equation $3x-2y+1=0$ and parametric equations $\begin{cases}x=1+2t\\ y=2+3t.\end{cases}$

**Check.** The point $N(9, 14)$ from the start: $3\cdot9-2\cdot14+1=0$, which matches $t=4$.
:::

## The line through two points

When we only know two points, we make the direction ourselves: the vector joining them is a direction vector.

:::graph The line through $A$ and $B$
alt: A line with positive gradient through A(1, 3) and B(4, 9)
x: -2..6
y: -2..10
plot: 2x + 1
point: (1, 3) "A" below-right
point: (4, 9) "B" below-right
:::

:::example Two points
Write the equation of the line through $A(1, 3)$ and $B(4, 9)$.

**Solution.** Take $\overrightarrow{AB}$ as the direction vector, then find a normal vector:

$$\overrightarrow{AB}=(3, 6)=3(1, 2)\ \Rightarrow\ \vec{u}=(1, 2),\ \vec{n}=(2, -1).$$

$$2(x-1)-(y-3)=0\iff 2x-y+1=0\iff y=2x+1.$$

So the line $AB$ is $2x-y+1=0$, with gradient $k=2$.

**Check.** The point $B$: $2\cdot4-9+1=0$.
:::

## Converting and drawing lines

To draw a line given in general form, the quickest way is to find where it meets the two axes.

:::example Intercepts with the axes
Draw the line $2x+3y-6=0$ and find its gradient.

**Solution.** Put $y=0$, then $x=0$:

$$y=0\Rightarrow x=3,\qquad x=0\Rightarrow y=2.$$

The line passes through $(3, 0)$ and $(0, 2)$, so its intercept form is $\dfrac{x}{3}+\dfrac{y}{2}=1$. Solving for $y$: $y=-\dfrac23x+2$.

So the gradient is $k=-\dfrac23$.
:::

:::graph The line $2x+3y-6=0$
alt: A line with negative gradient meeting the x-axis at 3 and the y-axis at 2
x: -2..5
y: -2..4
plot: (6 - 2x)/3
point: (3, 0) "(3, 0)" above-right
point: (0, 2) "(0, 2)" above-right
:::

The opposite direction is common too: from parametric equations we read off a point and a direction vector.

:::example From parametric to general
Convert $\begin{cases}x=1+2t\\ y=-1+3t\end{cases}$ to a general equation.

**Solution.** The value $t=0$ gives the point $(1, -1)$; the coefficients of $t$ give the direction vector $\vec{u}=(2, 3)$, so $\vec{n}=(3, -2)$:

$$3(x-1)-2(y+1)=0\iff 3x-2y-5=0.$$

So the general equation is $3x-2y-5=0$.
:::

## Parallel and perpendicular lines

A line parallel to $Ax+By+C=0$ has the same normal vector, so it has the form $Ax+By+C'=0$ with $C'\neq C$. A line perpendicular to it takes the old direction vector $(B, -A)$ as its normal vector, so it has the form $Bx-Ay+C''=0$.

:::example Parallel and perpendicular
Write the equation of the line through $P(2, -1)$ that is a) parallel, b) perpendicular to $3x-4y+5=0$.

**Solution.** We write the general shape, then substitute $P$ to find the constant term:

$$\begin{aligned} \text{a) }& 3x-4y+C'=0,\ \ 3\cdot2-4\cdot(-1)+C'=0\Rightarrow C'=-10;\\ \text{b) }& 4x+3y+C''=0,\ \ 4\cdot2+3\cdot(-1)+C''=0\Rightarrow C''=-5. \end{aligned}$$

So the parallel line is $3x-4y-10=0$ and the perpendicular line is $4x+3y-5=0$.
:::

The last example uses a perpendicular line in a real situation: finding a place at the same distance from two points.

:::example A pumping station equidistant from two villages
On a map (units: km), two villages are at $A(1, 1)$ and $B(5, 3)$, and a canal runs along the $x$-axis. A pumping station must be built on the canal at the same distance from both villages. Find its position.

**Solution.** The points equidistant from $A$ and $B$ lie on the perpendicular bisector of $AB$. It passes through the midpoint $I(3, 2)$ and has normal vector $\overrightarrow{AB}=(4, 2)$:

$$4(x-3)+2(y-2)=0\iff 2x+y-8=0.$$

The station is on the canal, so $y=0$, which gives $2x-8=0$, that is $x=4$.

So the pumping station is at the point $(4, 0)$.

**Check.** The distances to the villages: $\sqrt{3^2+1^2}=\sqrt{10}$ and $\sqrt{1^2+3^2}=\sqrt{10}$ (km), which are equal.
:::

:::warning Common mistakes
- **Mixing up the normal and direction vectors.** Wrong: the line through $M(1, 2)$ with $\vec{u}=(2, 3)$ written as $2(x-1)+3(y-2)=0$. Why it is wrong: the coefficients of $x$ and $y$ in the general form are the coordinates of a **normal** vector. Right: use $\vec{n}=(3, -2)$ to get $3x-2y+1=0$.
- **The wrong sign of the gradient.** Wrong: $2x+3y-6=0$ has $k=\dfrac23$. Why it is wrong: solving for $y$ gives $y=-\dfrac23x+2$. Right: $k=-\dfrac{A}{B}=-\dfrac23$.
- **Dividing by $B=0$.** The line $x-4=0$ has $B=0$; it is parallel to the $y$-axis and has no gradient. Do not try to write it as $y=kx+m$.
:::

## Key terms

:::terms
- direction vector | vectơ chỉ phương
- normal vector | vectơ pháp tuyến
- parametric equations | phương trình tham số
- general (Cartesian) equation | phương trình tổng quát
- gradient | hệ số góc
- intercept | giao điểm với trục
- parallel | song song
- perpendicular bisector | đường trung trực
:::

## Summary

- A line is fixed by a point $M_0(x_0, y_0)$ and a direction vector $\vec{u}=(a, b)$ or a normal vector $\vec{n}=(A, B)$; if $\vec{u}=(a, b)$ then $\vec{n}=(-b, a)$.
- Parametric: $x=x_0+at$, $y=y_0+bt$.
- General: $A(x-x_0)+B(y-y_0)=0$, that is $Ax+By+C=0$.
- Gradient $k=-\dfrac{A}{B}$ (when $B\neq 0$). Quick drawing: find the intercepts with both axes.
- Parallel: keep $(A, B)$. Perpendicular: change $(A, B)$ to $(B, -A)$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Write the general equation of the line through $A(2, 1)$ with normal vector $\vec{n}=(1, -3)$.

::hint
**What you need:** the line through $M_0(x_0, y_0)$ with normal vector $(A, B)$ is $A(x-x_0)+B(y-y_0)=0$.

**Steps:**
1. Substitute $A=1$, $B=-3$, $x_0=2$, $y_0=1$.
2. Expand and simplify.

::solution
$1\cdot(x-2)-3(y-1)=0\iff x-3y+1=0$. Check $A$: $2-3+1=0$.

**Answer.** $x-3y+1=0$.
:::

:::exercise
Write the parametric and the general equations of the line through $A(1, 1)$ with direction vector $\vec{u}=(2, 1)$.

::hint
**What you need:** if $\vec{u}=(a, b)$ then $\vec{n}=(-b, a)$ or $(b, -a)$.

**Steps:**
1. Write the parametric form from the point and $\vec{u}$.
2. Take $\vec{n}=(1, -2)$ and write the general form.

::solution
Parametric: $x=1+2t$, $y=1+t$. With $\vec{n}=(1, -2)$: $(x-1)-2(y-1)=0\iff x-2y+1=0$.

**Answer.** $\begin{cases}x=1+2t\\ y=1+t\end{cases}$ and $x-2y+1=0$.
:::

:::exercise
Write the general equation of the line through $A(-1, 2)$ and $B(3, -2)$.

::hint
**What you need:** $\overrightarrow{AB}$ is a direction vector of the line $AB$.

**Steps:**
1. Compute $\overrightarrow{AB}$ and simplify it to a smaller vector.
2. Find a normal vector and write the equation through $A$.

::solution
$\overrightarrow{AB}=(4, -4)=4(1, -1)$, so $\vec{u}=(1, -1)$ and $\vec{n}=(1, 1)$. Then $(x+1)+(y-2)=0\iff x+y-1=0$. Check $B$: $3-2-1=0$.

**Answer.** $x+y-1=0$.
:::

:::exercise
Find the gradient and the intercepts with both axes of the line $4x-2y+8=0$.

::hint
**What you need:** solve for $y$ to read the gradient; put $x=0$ or $y=0$ to find the intercepts.

**Steps:**
1. Write $y$ in terms of $x$.
2. Put $y=0$, then $x=0$.

::solution
$4x-2y+8=0\iff y=2x+4$, so $k=2$. For $y=0$: $x=-2$. For $x=0$: $y=4$.

**Answer.** $k=2$; intercepts $(-2, 0)$ and $(0, 4)$.
:::

:::exercise
Convert the parametric equations $\begin{cases}x=2-t\\ y=3+2t\end{cases}$ to a general equation.

::hint
**What you need:** in parametric form, $t=0$ gives a point and the coefficients of $t$ give a direction vector.

**Steps:**
1. Read off the point $(2, 3)$ and $\vec{u}=(-1, 2)$.
2. Take $\vec{n}=(2, 1)$ and write the general form.

::solution
$\vec{u}=(-1, 2)$, $\vec{n}=(2, 1)$, point $(2, 3)$: $2(x-2)+(y-3)=0\iff 2x+y-7=0$.

**Answer.** $2x+y-7=0$.
:::

:::exercise
Consider the line $d: x-2y+4=0$. Is each claim true or false?

a) $\vec{n}=(1, -2)$ is a normal vector of $d$.

b) $\vec{u}=(2, 1)$ is a direction vector of $d$.

c) The point $M(2, 1)$ lies on $d$.

d) The line through the origin perpendicular to $d$ has equation $2x+y=0$.

::hint
**What you need:** $Ax+By+C=0$ has $\vec{n}=(A, B)$ and $\vec{u}=(B, -A)$; a point lies on a line when its coordinates satisfy the equation.

**Steps:**
1. Read off $\vec{n}$ and check that $\vec{u}\cdot\vec{n}=0$.
2. Substitute $M$ into the equation.
3. The perpendicular line takes the direction vector of $d$ as its normal vector.

::solution
a) **True**: the coefficients of $x$ and $y$ are $1$ and $-2$.

b) **True**: $\vec{u}\cdot\vec{n}=2\cdot1+1\cdot(-2)=0$, so $\vec{u}$ is parallel to $d$.

c) **False**: $2-2\cdot1+4=4\neq 0$.

d) **True**: the perpendicular line has normal vector $(2, 1)$ and passes through $O(0, 0)$: $2x+y=0$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
The line $\Delta$ passes through $P(1, -2)$ and is parallel to the line $2x-y+3=0$. Find the $y$-coordinate of the point where $\Delta$ meets the $y$-axis.

::hint
**What you need:** a line parallel to $Ax+By+C=0$ has the form $Ax+By+C'=0$.

**Steps:**
1. Write $2x-y+C'=0$ and substitute $P$ to find $C'$.
2. Put $x=0$ to find the intercept with the $y$-axis.

::solution
$2x-y+C'=0$ through $P$: $2+2+C'=0$, so $C'=-4$ and $\Delta: 2x-y-4=0$. For $x=0$: $y=-4$.

**Answer.** $-4$.
:::

:::exercise
On a sea chart (units: km), a ship leaves $A(2, 1)$ and every hour covers a displacement given by the vector $\vec{v}=(3, 4)$.

a) Write parametric equations of the ship's path, with $t$ the number of hours.

b) After how many hours does the ship reach the port $B(11, 13)$?

c) Write the general equation of the path.

::hint
**What you need:** the position after $t$ hours is $A+t\vec{v}$; if $\vec{v}=(3, 4)$ then $\vec{n}=(4, -3)$.

**Steps:**
1. Write $x=2+3t$, $y=1+4t$.
2. Solve $2+3t=11$ and check $1+4t=13$.
3. Use $\vec{n}$ and the point $A$ to write the general form.

::solution
a) $x=2+3t$, $y=1+4t$ ($t\ge 0$).

b) $2+3t=11\Rightarrow t=3$, and $1+4\cdot3=13$ also holds, so the ship reaches $B$ after $3$ hours.

c) $4(x-2)-3(y-1)=0\iff 4x-3y-5=0$. Check $B$: $44-39-5=0$.

**Answer.** a) $x=2+3t$, $y=1+4t$; b) $3$ hours; c) $4x-3y-5=0$.
:::

:::exercise Challenge
A line through $M(2, 3)$ meets the $x$-axis at $A(a, 0)$ and the $y$-axis at $B(0, b)$ so that $M$ is the midpoint of $AB$. Write the equation of this line.

::hint
**What you need:** the midpoint of $AB$ is $\left(\dfrac{x_A+x_B}{2}, \dfrac{y_A+y_B}{2}\right)$; the intercept form is $\dfrac{x}{a}+\dfrac{y}{b}=1$.

**Steps:**
1. Use the midpoint condition to find $a$ and $b$.
2. Write the intercept form and convert it to general form.

::solution
$\dfrac{a+0}{2}=2$ and $\dfrac{0+b}{2}=3$, so $a=4$, $b=6$. The line is $\dfrac{x}{4}+\dfrac{y}{6}=1$; multiplying both sides by $12$: $3x+2y-12=0$. Check $M$: $6+6-12=0$.

**Answer.** $3x+2y-12=0$.
:::

:::exercise Review
Consider the triangle $ABC$ with $A(1, 2)$, $B(5, 4)$, $C(-1, 6)$.

a) Use [the scalar product](lesson:dot-product) to prove that the triangle is right-angled at $A$.

b) Write the equation of the altitude $AH$ of the triangle.

c) Find the coordinates of the foot $H$ of the altitude.

::hint
**What you need:** $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$; the altitude from $A$ is perpendicular to $BC$, so $\overrightarrow{BC}$ is a normal vector of it.

**Steps:**
1. Compute $\overrightarrow{AB}\cdot\overrightarrow{AC}$.
2. Compute $\overrightarrow{BC}$ and write the altitude through $A$.
3. Write the equation of $BC$ and solve the system of two equations.

::solution
a) $\overrightarrow{AB}=(4, 2)$, $\overrightarrow{AC}=(-2, 4)$, $\overrightarrow{AB}\cdot\overrightarrow{AC}=-8+8=0$, so $\angle BAC=90^\circ$.

b) $\overrightarrow{BC}=(-6, 2)=-2(3, -1)$, so the altitude $AH$ is $3(x-1)-(y-2)=0\iff 3x-y-1=0$.

c) $BC$ has direction vector $(3, -1)$ and normal vector $(1, 3)$: $(x-5)+3(y-4)=0\iff x+3y-17=0$. Substituting $y=3x-1$: $x+9x-3-17=0$, so $x=2$, $y=5$.

**Answer.** b) $3x-y-1=0$; c) $H(2, 5)$.
:::

## Mini test

:::quiz
::mc
A normal vector of the line $2x-5y+3=0$ is
A. $(2, 5)$.
B. $(5, 2)$.
C. $(2, -5)$.
D. $(-5, 3)$.
::key C
In $Ax+By+C=0$ the pair of coefficients $(A, B)=(2, -5)$ is a normal vector. Option B is a direction vector; A has the wrong sign.

::mc
Parametric equations of the line through $A(1, -2)$ with direction vector $\vec u=(3, 1)$ are
A. $\begin{cases}x=3+t\\ y=1-2t\end{cases}$.
B. $\begin{cases}x=1+t\\ y=-2+3t\end{cases}$.
C. $\begin{cases}x=1+3t\\ y=2+t\end{cases}$.
D. $\begin{cases}x=1+3t\\ y=-2+t\end{cases}$.
::key D
$x=x_0+at$, $y=y_0+bt$ with $(x_0, y_0)=(1, -2)$ and $(a, b)=(3, 1)$. Option A swaps the roles of the point and the vector, B swaps the two coordinates of $\vec u$, and C has the wrong sign of $y_0$.

::mc
The gradient of the line $3x+4y-8=0$ is
A. $\dfrac34$.
B. $-\dfrac34$.
C. $-\dfrac43$.
D. $2$.
::key B
Solving for $y$: $y=-\dfrac34x+2$, so $k=-\dfrac AB=-\dfrac34$. Option A loses the minus sign; D is the $y$-intercept.

::mc
The line through $M(1, 2)$ perpendicular to the line $x-3y+5=0$ is
A. $x-3y+5=0$.
B. $3x+y+5=0$.
C. $3x+y-5=0$.
D. $3x-y-1=0$.
::key C
The perpendicular line has normal vector $(3, 1)$: $3(x-1)+(y-2)=0\iff 3x+y-5=0$. Option A is parallel to (in fact the same as) the given line; D passes through $M$ but has normal vector $(3, -1)$, so it is not perpendicular.

::tf
Consider the line $d: \begin{cases}x=2+t\\ y=-1+2t\end{cases}$.
a) $d$ passes through the point $A(2, -1)$.
b) $\vec n=(2, 1)$ is a normal vector of $d$.
c) The general equation of $d$ is $2x-y-5=0$.
d) $d$ meets the $y$-axis at the point with $y$-coordinate $5$.
::key T F T F
a) True: take $t=0$. b) False: $\vec u=(1, 2)$ and $\vec u\cdot\vec n=4\ne0$; a normal vector is $(2, -1)$. c) True: $2(x-2)-(y+1)=0\iff 2x-y-5=0$. d) False: $x=0$ gives $y=-5$.

::sa
The line through $A(-1, 3)$ and $B(2, 9)$ meets the $y$-axis at a point. What is the $y$-coordinate of that point?
::key 5
$\overrightarrow{AB}=(3, 6)=3(1, 2)$, so $\vec n=(2, -1)$: $2(x+1)-(y-3)=0\iff y=2x+5$. Putting $x=0$ gives $y=5$.

::sa
On a sea chart (units: km), a ship leaves the point $A(1, 2)$ and every hour covers a displacement given by the vector $\vec v=(3, -1)$. The coastline is the line $x+y-15=0$. After how many hours does the ship reach the coast?
::key 6
After $t$ hours the ship is at $(1+3t, 2-t)$. Substituting into the equation of the coast: $1+3t+2-t-15=0\iff 2t=12\iff t=6$.
:::
