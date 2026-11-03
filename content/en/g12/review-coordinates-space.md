---
title: "Revision: coordinates in space"
description: Revise vectors in Oxyz, equations of planes, lines and spheres, angle and distance formulas, and real-life coordinate models, in graduation exam style.
minutes: 40
---

:::goals
- Calculate vector components, lengths, scalar products and the angle between two vectors quickly.
- Write equations of planes, lines and spheres and read their features from an equation.
- Use the angle and distance formulas in multiple-choice, true/false and short-answer questions.
- Set up a coordinate system for a real-life situation (a room, an aircraft, a radar station).
:::

Coordinates in space is one of the "easy marks" topics of grade 12. Part I usually has two to four questions that are read straight from an equation: a normal vector, the centre and radius of a sphere, a distance. Part II or Part III usually has one mixed question, often set in a real-life context. Altogether this topic is usually worth about $1$ to $1.5$ marks.

The secret is to know the formulas thoroughly and to watch the signs. This revision lesson covers four areas: vectors, planes, lines, and spheres with real-life models.

:::diagram The coordinate system $Oxyz$ and the point $M(2, 3, 2)$
alt: Three mutually perpendicular axes Ox, Oy, Oz in parallel projection; the point M lies above the plane Oxy, and its projection M' on the plane Oxy is joined to points on the x- and y-axes by dashed lines
point O 0,0 below-left
point X -2.4,-2.4 below "x"
point Y 5,0 right "y"
point Z 0,4 left "z"
point P -1.2,-1.2 left "2"
point Q 3,0 above "3"
point M' 1.8,-1.2 below "M'"
point M 1.8,0.8 above
arrow O X
arrow O Y
arrow O Z
segment P M' dashed
segment Q M' dashed
segment M' M dashed
segment O M
:::

## Vectors and coordinates

:::theorem Formulas for $\vec a=(a_1, a_2, a_3)$, $\vec b=(b_1, b_2, b_3)$
- $\overrightarrow{AB}=(x_B-x_A, y_B-y_A, z_B-z_A)$ and $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
- The midpoint $I$ of $AB$: the mean of the coordinates of $A$ and $B$; the centroid $G$ of a triangle: the mean of the coordinates of the three vertices.
- Scalar product $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$; $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.
- $\cos(\vec a, \vec b)=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}$, where $|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$.
- The vector product $[\vec a, \vec b]=(a_2b_3-a_3b_2, a_3b_1-a_1b_3, a_1b_2-a_2b_1)$ is perpendicular to both $\vec a$ and $\vec b$.
:::

:::example Multiple choice: the cosine of the angle between two vectors
In $Oxyz$, let $\vec a=(1, -2, 2)$ and $\vec b=(2, 1, -2)$. The value of $\cos(\vec a, \vec b)$ is

**A.** $\dfrac49$.

**B.** $-\dfrac49$.

**C.** $-\dfrac43$.

**D.** $0$.

**Solution.** We compute the scalar product and the two lengths, then use the formula:

$$\vec a\cdot\vec b=2-2-4=-4,\qquad |\vec a|=\sqrt{1+4+4}=3,\qquad |\vec b|=\sqrt{4+1+4}=3.$$

So $\cos(\vec a, \vec b)=\dfrac{-4}{3\cdot3}=-\dfrac49$. The answer is **B**.

**Look back.** The angle between two **vectors** can be obtuse, so the cosine may be negative. Option A is the cosine of the angle between two **lines** (with an absolute value); option D has a sign error in the second term.
:::

## Equations of planes

:::theorem Planes
- The plane through $M(x_0, y_0, z_0)$ with normal vector $\vec n=(A, B, C)$: $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.
- The plane $Ax+By+Cz+D=0$ has normal vector $\vec n=(A, B, C)$.
- The plane through three points $A$, $B$, $C$: use $\vec n=[\overrightarrow{AB}, \overrightarrow{AC}]$. The plane through the intercepts $(a, 0, 0)$, $(0, b, 0)$, $(0, 0, c)$: $\dfrac xa+\dfrac yb+\dfrac zc=1$.
- Distance: $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.
- $(P)\perp(Q)\iff\vec n_P\cdot\vec n_Q=0$; $(P)\parallel(Q)$ when the normal vectors are parallel and the planes do not coincide.
:::

:::example True/false: the intercept form of a plane
In $Oxyz$, consider the points $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$.

a) The plane $(ABC)$ has normal vector $\vec n=(6, 3, 2)$.

b) The origin $O$ lies in the plane $(ABC)$.

c) The distance from $O$ to the plane $(ABC)$ is $\dfrac67$.

d) The plane $(ABC)$ is perpendicular to the plane $(Oxy)$.

**Solution.** The three points lie on the three axes, so we use the intercept form and multiply through by the common denominator $6$:

$$\frac x1+\frac y2+\frac z3=1\iff 6x+3y+2z-6=0.$$

a) **True.** The coefficients of $x$, $y$, $z$ are $6$, $3$, $2$.

b) **False.** Substituting $O$: $0+0+0-6=-6\neq0$.

c) **True.** $d(O, (ABC))=\dfrac{|-6|}{\sqrt{36+9+4}}=\dfrac67$.

d) **False.** The plane $(Oxy)$ has normal vector $\vec k=(0, 0, 1)$ and $\vec n\cdot\vec k=2\neq0$.

So the answers are a) True, b) False, c) True, d) False.
:::

## Equations of lines and angle formulas

:::theorem Lines and angles
- The line through $M(x_0, y_0, z_0)$ with direction vector $\vec u=(a, b, c)$: parametric equations $x=x_0+at$, $y=y_0+bt$, $z=z_0+ct$; if $abc\neq0$, Cartesian equations $\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}$.
- The angle between two lines: $\cos\varphi=\dfrac{|\vec u\cdot\vec u'|}{|\vec u|\cdot|\vec u'|}$.
- The angle between a line and a plane: $\sin\varphi=\dfrac{|\vec u\cdot\vec n|}{|\vec u|\cdot|\vec n|}$.
- The angle between two planes: $\cos\varphi=\dfrac{|\vec n\cdot\vec n'|}{|\vec n|\cdot|\vec n'|}$.
:::

A line perpendicular to a plane takes the plane's normal vector as its direction vector. This idea is behind many multiple-choice questions.

:::example Multiple choice: a line perpendicular to a plane
The line through $A(1, 2, -1)$ perpendicular to the plane $(P)\colon 2x-y+3z-5=0$ has parametric equations

**A.** $x=1+2t$, $y=2-t$, $z=-1+3t$.

**B.** $x=2+t$, $y=-1+2t$, $z=3-t$.

**C.** $x=1+2t$, $y=2+t$, $z=-1+3t$.

**D.** $x=1+2t$, $y=2-t$, $z=1+3t$.

**Solution.** The line is perpendicular to $(P)$, so its direction vector is $\vec u=\vec n_P=(2, -1, 3)$; it passes through $A(1, 2, -1)$:

$$x=1+2t,\qquad y=2-t,\qquad z=-1+3t.$$

The answer is **A**. Option B swaps the point and the vector, option C has the wrong sign for the coefficient of $y$, and option D has the wrong sign for the $z$-coordinate of $A$.
:::

:::example Short answer: the angle between a line and a plane
Find the angle between the line $d\colon\dfrac{x-1}{1}=\dfrac{y}{2}=\dfrac{z+1}{2}$ and the plane $(P)\colon 2x-y+2z+3=0$ (in degrees, to the nearest whole number).

**Solution.** The angle between a line and a plane uses **sine**, with $\vec u=(1, 2, 2)$ and $\vec n=(2, -1, 2)$:

$$\sin\varphi=\frac{|2-2+4|}{\sqrt{1+4+4}\cdot\sqrt{4+1+4}}=\frac49\ \Rightarrow\ \varphi\approx26.39^\circ.$$

So the angle is about $26^\circ$ (write $26$).
:::

:::warning Common traps
- **Using $\cos$ instead of $\sin$** for the angle between a line and a plane. In the example above, $\cos$ would give about $64^\circ$, the complement of the correct answer.
- **Forgetting the absolute value** for the angle between two lines or two planes: this angle is never more than $90^\circ$.
- **Misreading coordinates from the Cartesian equations.** From $\dfrac{z+1}{2}$ we get $z_0=-1$, not $1$.
:::

## Spheres and real-life coordinate models

:::theorem Spheres
- The sphere with centre $I(a, b, c)$ and radius $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.
- The equation $x^2+y^2+z^2-2ax-2by-2cz+d=0$ is a sphere when $a^2+b^2+c^2-d>0$; its centre is $I(a, b, c)$ and $R=\sqrt{a^2+b^2+c^2-d}$.
- With $h=d(I, (P))$: if $h>R$ the plane $(P)$ misses the sphere; if $h=R$ it is tangent; if $h<R$ it cuts the sphere in a circle of radius $r=\sqrt{R^2-h^2}$.
:::

In a real-life problem we put the origin in a convenient place (a corner of a room, the foot of a tower, a radar station), choose a unit (m or km), and then translate the question into one about points, lines, planes or spheres.

:::example Short answer: an aircraft crossing radar coverage
Choose axes $Oxyz$ (unit: km) with a radar station at the origin $O$. The radar detects every object within $5$ km of it. An aircraft flies in a straight line with position $M(1+2t, 2-t, 2)$. Find the length of the part of the flight path inside the radar's range (in km).

**Solution.** *Understand.* The detection zone is the solid sphere with centre $O$ and radius $5$; the required distance is the chord of the flight path inside the sphere.

*Plan.* Solve the condition $OM\le5$ for $t$, or use the distance from $O$ to the flight path.

*Solve.* Squaring the condition $OM\le5$:

$$(1+2t)^2+(2-t)^2+4\le25\iff 5t^2+9\le25\iff t^2\le\frac{16}{5}.$$

So $t$ runs from $-\dfrac{4}{\sqrt5}$ to $\dfrac{4}{\sqrt5}$. The direction vector $\vec u=(2, -1, 0)$ has length $\sqrt5$, so the distance is

$$\sqrt5\cdot\frac{8}{\sqrt5}=8\ \text{(km)}.$$

*Look back.* The point closest to $O$ is at $t=0$, namely $H(1, 2, 2)$ with $OH=3$; by Pythagoras' theorem the chord is $2\sqrt{25-9}=8$ long, which agrees.
:::

## Key terms

:::terms
- Oxyz coordinate system | hệ trục toạ độ Oxyz
- scalar product | tích vô hướng
- vector product (cross product) | tích có hướng
- normal vector | vectơ pháp tuyến
- direction vector | vectơ chỉ phương
- parametric equations | phương trình tham số
- Cartesian equations (of a line) | phương trình chính tắc
- sphere | mặt cầu
- tangent | tiếp xúc
- distance from a point to a plane | khoảng cách từ điểm đến mặt phẳng
:::

## Exercises

The exercises go from easy to hard, and each one states its exam format.

:::exercise Multiple choice
The plane through $M(1, -2, 3)$ with normal vector $\vec n=(2, -1, 1)$ has equation

**A.** $2x-y+z-7=0$. **B.** $2x-y+z+7=0$. **C.** $x-2y+3z-7=0$. **D.** $2x-y+z-3=0$.

::hint
**What you need:** $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.

**Steps:**
1. Substitute $\vec n$ and the coordinates of $M$ into the formula.
2. Expand and simplify.

::solution
$2(x-1)-(y+2)+(z-3)=0\iff 2x-y+z-7=0$. Option C swaps the point and the normal vector.

**Answer.** A.
:::

:::exercise Multiple choice
The distance from $M(1, 2, 3)$ to the plane $(P)\colon 2x-2y+z+3=0$ is

**A.** $4$. **B.** $\dfrac49$. **C.** $\dfrac43$. **D.** $\dfrac23$.

::hint
**What you need:** $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

**Steps:**
1. Compute the numerator $|2-4+3+3|$.
2. Compute the denominator $\sqrt{4+4+1}$.

::solution
$d=\dfrac{|2-4+3+3|}{3}=\dfrac43$. Option B forgets the square root in the denominator.

**Answer.** C.
:::

:::exercise Multiple choice
The sphere $(S)\colon x^2+y^2+z^2-2x+4y-6z-2=0$ has centre $I$ and radius $R$ given by

**A.** $I(1, -2, 3)$, $R=4$. **B.** $I(-1, 2, -3)$, $R=4$. **C.** $I(1, -2, 3)$, $R=2\sqrt3$. **D.** $I(2, -4, 6)$, $R=4$.

::hint
**What you need:** $-2a=-2$, $-2b=4$, $-2c=-6$; $R=\sqrt{a^2+b^2+c^2-d}$.

**Steps:**
1. Find $a$, $b$, $c$.
2. Compute $R$ with $d=-2$.

::solution
$a=1$, $b=-2$, $c=3$ and $R=\sqrt{1+4+9+2}=4$. Option C takes $R^2=14-2$ by mistake; option B has the wrong signs for the centre.

**Answer.** A.
:::

:::exercise True/false
Consider the line $d\colon x=1+t$, $y=2-t$, $z=2t$ and the plane $(P)\colon x+y+z-3=0$.

a) $d$ has direction vector $\vec u=(1, -1, 2)$.

b) The point $A(2, 1, 2)$ lies on $d$.

c) $d$ is parallel to $(P)$.

d) $d$ meets $(P)$ at the point $(1, 2, 0)$.

::hint
**What you need:** if $d\parallel(P)$ then $\vec u\cdot\vec n=0$; the intersection is found by substituting $x$, $y$, $z$ in terms of $t$ into $(P)$.

**Steps:**
1. Read the direction vector from the coefficients of $t$.
2. Compute $\vec u\cdot\vec n$ and solve the equation in $t$.

::solution
a) **True.** The coefficients of $t$ are $1$, $-1$, $2$.

b) **True.** With $t=1$ we get $(2, 1, 2)$.

c) **False.** $\vec u\cdot\vec n=1-1+2=2\neq0$.

d) **True.** $(1+t)+(2-t)+2t-3=0\iff 2t=0\iff t=0$, which gives the point $(1, 2, 0)$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise Short answer
Find the angle between the lines $d_1\colon x=t$, $y=1+t$, $z=2$ and $d_2\colon x=1$, $y=2+s$, $z=-s$ (in degrees).

::hint
**What you need:** $\cos\varphi=\dfrac{|\vec u_1\cdot\vec u_2|}{|\vec u_1|\cdot|\vec u_2|}$.

**Steps:**
1. $\vec u_1=(1, 1, 0)$ and $\vec u_2=(0, 1, -1)$.
2. Substitute into the formula.

::solution
$\cos\varphi=\dfrac{|0+1+0|}{\sqrt2\cdot\sqrt2}=\dfrac12$, so $\varphi=60^\circ$.

**Answer.** $60$.
:::

:::exercise Short answer
Let $A(1, 0, 1)$, $B(2, 1, 0)$, $C(0, 2, 3)$. Find the distance from the origin $O$ to the plane $(ABC)$ (to 2 decimal places).

::hint
**What you need:** the normal vector $\vec n=[\overrightarrow{AB}, \overrightarrow{AC}]$.

**Steps:**
1. $\overrightarrow{AB}=(1, 1, -1)$ and $\overrightarrow{AC}=(-1, 2, 2)$; compute the vector product.
2. Write the equation of $(ABC)$, then find the distance.

::solution
$[\overrightarrow{AB}, \overrightarrow{AC}]=(1\cdot2-(-1)\cdot2,\ (-1)(-1)-1\cdot2,\ 1\cdot2-1\cdot(-1))=(4, -1, 3)$. The plane $(ABC)$ is $4(x-1)-y+3(z-1)=0\iff 4x-y+3z-7=0$. Then $d(O, (ABC))=\dfrac{7}{\sqrt{26}}\approx1.37$.

**Answer.** $1.37$.
:::

:::exercise Short answer
A room is a cuboid $6$ m long, $4$ m wide and $3$ m high. Choose axes $Oxyz$ with the origin at a corner of the floor and the axes along three edges, in metres. A straight wire is stretched from the point $A(0, 0, 3)$ in a corner of the ceiling to the point $B(6, 4, 0)$ in the opposite corner of the floor. Find the length of the wire (in m, to 2 decimal places).

::hint
**What you need:** $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.

**Steps:**
1. Find $\overrightarrow{AB}$.
2. Find its length.

::solution
$\overrightarrow{AB}=(6, 4, -3)$, so $AB=\sqrt{36+16+9}=\sqrt{61}\approx7.81$ m.

**Answer.** $7.81$.
:::

:::exercise Short answer
A drone starts at the origin $O$ and flies in a straight line; after $t$ seconds it is at $M(2t, 2t, t)$ (in metres). The no-fly zone is the region of space where $x+2y+2z\ge30$. After how many seconds does the drone start to enter the no-fly zone?

::hint
**What you need:** the drone reaches the boundary of the zone when the coordinates of $M$ satisfy $x+2y+2z=30$.

**Steps:**
1. Substitute the coordinates of $M$ into $x+2y+2z$.
2. Solve the equation for $t$.

::solution
$2t+4t+2t=8t=30\iff t=3.75$. For $t<3.75$ we have $8t<30$, so before that moment the drone is outside the zone.

**Answer.** $3.75$.
:::

:::exercise Written answer
Let $A(3, 1, -2)$ and the plane $(P)\colon x+2y-2z=0$. Write the equations of the line $d$ through $A$ perpendicular to $(P)$, find the orthogonal projection $H$ of $A$ on $(P)$, and find $d(A, (P))$.

::hint
**What you need:** $d$ takes $\vec n_P$ as its direction vector; $H=d\cap(P)$.

**Steps:**
1. Write $d\colon x=3+t$, $y=1+2t$, $z=-2-2t$.
2. Substitute into $(P)$ to find $t$, hence $H$; then find $AH$.

::solution
Substituting into $(P)$: $(3+t)+2(1+2t)-2(-2-2t)=0\iff 9+9t=0\iff t=-1$, so $H(2, -1, 0)$. Then $AH=\sqrt{1+4+4}=3$, which agrees with $d(A, (P))=\dfrac{|3+2+4|}{3}=3$.

**Answer.** $d\colon x=3+t$, $y=1+2t$, $z=-2-2t$; $H(2, -1, 0)$; $d(A, (P))=3$.
:::

:::exercise Short answer (challenge)
The sphere $(S)$ has centre $I(1, 2, -1)$ and touches the plane $(P)\colon 2x-y+2z+11=0$ at the point $H(a, b, c)$. Find $a+b+c$.

::hint
**What you need:** the radius is $R=d(I, (P))$; the point of contact is the orthogonal projection of $I$ on $(P)$.

**Steps:**
1. Find $R$.
2. Write the line through $I$ perpendicular to $(P)$ and find where it meets $(P)$.

::solution
$R=\dfrac{|2-2-2+11|}{3}=3$. The line $x=1+2s$, $y=2-s$, $z=-1+2s$ meets $(P)$ when $2(1+2s)-(2-s)+2(-1+2s)+11=0\iff 9s+9=0\iff s=-1$, so $H(-1, 3, -3)$ and $a+b+c=-1$.

**Answer.** $-1$.
:::

## Mini test

:::quiz
::mc
In $Oxyz$, let $A(1, 2, 3)$ and $B(3, 0, 4)$. The length of $AB$ is
A. $9$.
B. $3$.
C. $2\sqrt2$.
D. $5$.
::key B
$\overrightarrow{AB}=(2, -2, 1)$ and $AB=\sqrt{4+4+1}=3$. Option A forgets the square root, option C drops the $z$-coordinate, and option D adds the absolute values.

::mc
A normal vector of the plane $(P)\colon 2x-3z+1=0$ is
A. $(2, -3, 1)$.
B. $(2, 0, -3)$.
C. $(2, -3, 0)$.
D. $(0, 2, -3)$.
::key B
The coefficients of $x$, $y$, $z$ are $2$, $0$, $-3$. The other options ignore the missing $y$ or use the constant term by mistake.

::mc
The line through $A(1, -1, 2)$ with direction vector $\vec u=(2, 1, -1)$ has parametric equations
A. $x=1+2t$, $y=-1+t$, $z=2-t$.
B. $x=2+t$, $y=1-t$, $z=-1+2t$.
C. $x=1+2t$, $y=1+t$, $z=2-t$.
D. $x=-1+2t$, $y=1+t$, $z=-2-t$.
::key A
The coordinates of the point stand alone and the components of the direction vector go with $t$. Option B swaps the point and the vector; C and D have wrong signs for the coordinates of $A$.

::mc
The angle between the planes $(P)\colon x-z=0$ and $(Q)\colon y-z=0$ is
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
$\vec n_P=(1, 0, -1)$, $\vec n_Q=(0, 1, -1)$ and $\cos\varphi=\dfrac{|1|}{\sqrt2\cdot\sqrt2}=\dfrac12$, so $\varphi=60^\circ$.

::tf
Consider the sphere $(S)\colon(x-1)^2+(y+2)^2+z^2=9$ and the plane $(P)\colon 2x+y-2z+3=0$.
a) $(S)$ has centre $I(1, -2, 0)$.
b) $(S)$ has radius $9$.
c) The distance from the centre $I$ to $(P)$ is $1$.
d) $(P)$ cuts $(S)$ in a circle of radius $2\sqrt2$.
::key T F T T
a) True. b) False: $R=\sqrt9=3$. c) True: $\dfrac{|2-2-0+3|}{3}=1$. d) True: $r=\sqrt{9-1}=2\sqrt2$.

::sa
Find the distance between the parallel planes $(P)\colon 2x-y+2z+1=0$ and $(Q)\colon 2x-y+2z-8=0$.
::key 3
Take $M(0, 1, 0)\in(P)$; $d(M, (Q))=\dfrac{|0-1+0-8|}{3}=3$.

::sa
In a room, choose axes $Oxyz$ (unit: m) with the origin $O$ at a corner of the floor. A light bulb hangs at the point $L(2, 3, 4)$. Find the distance from the bulb to the corner $O$ (in m, to 2 decimal places).
::key 5.39
$OL=\sqrt{4+9+16}=\sqrt{29}\approx5.385$, which rounds to $5.39$.
:::
