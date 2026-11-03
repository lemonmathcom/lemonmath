---
title: The equation of a sphere
description: Write the equation of a sphere, find its centre and radius from the expanded form, decide how points and planes meet a sphere, and find tangent planes.
minutes: 22
---

:::goals
- Write the equation $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ of a sphere with a given centre and radius.
- Recognise when $x^2+y^2+z^2-2ax-2by-2cz+d=0$ is a sphere and find its centre and radius.
- Write the equation of a sphere with a given diameter, through given points, or tangent to a plane.
- Decide where a point or a plane lies relative to a sphere; write the equation of a tangent plane.
:::

A Wi-Fi router is placed at $I(2, 3, 1)$ in a hall (unit: metre). The signal is strong enough within $10$ m of the router. Does a phone at $M(8, 10, 3)$ get the signal? What about a speaker hanging from the ceiling at $N(2, 3, 12)$?

The set of points exactly $10$ m from $I$ is a **sphere**. This lesson turns a sphere into an equation, so that every "inside or outside" question becomes a calculation.

## The equation of a sphere

### Exploring: distances from the router

We find the distances from the router to the two points:
$$IM=\sqrt{6^2+7^2+2^2}=\sqrt{89}\approx9.43<10,\qquad IN=\sqrt{0^2+0^2+11^2}=11>10.$$
So the phone gets the signal, but the speaker is outside the coverage area. A point $P(x, y, z)$ lies **exactly** on the edge of the coverage area when $IP=10$, that is
$$(x-2)^2+(y-3)^2+(z-1)^2=100.$$

:::diagram The sphere with centre $I$ and radius $R$
alt: A circle with centre I, and the segment IM as the radius R joining the centre to a point M on the sphere
point I 0,0 below
point M 1.8,1.2 above-right
circle I 2.16
segment I M
label 0.7,0.9 "R"
:::

:::definition Sphere
The sphere with centre $I$ and radius $R>0$ is the set of points $M$ in space with $IM=R$. A point $M$ is **inside** the sphere if $IM<R$ and **outside** the sphere if $IM>R$.
:::

:::theorem Equation of a sphere
- The sphere with centre $I(a, b, c)$ and radius $R$ has equation
$$(x-a)^2+(y-b)^2+(z-c)^2=R^2.$$
- The equation $x^2+y^2+z^2-2ax-2by-2cz+d=0$ is the equation of a sphere if and only if $a^2+b^2+c^2-d>0$. The sphere then has centre $I(a, b, c)$ and radius $R=\sqrt{a^2+b^2+c^2-d}$.
:::

**Why is it true?** $M(x, y, z)$ lies on the sphere exactly when $IM^2=R^2$, and $IM^2=(x-a)^2+(y-b)^2+(z-c)^2$. For the second form, complete the squares: the equation becomes $(x-a)^2+(y-b)^2+(z-c)^2=a^2+b^2+c^2-d$. The right-hand side must be positive to be $R^2$.

:::example Given the centre and radius; given a diameter
a) Write the equation of the sphere with centre $I(1, -2, 3)$ and radius $4$, and check that $A(1, 2, 3)$ lies on it.

b) Write the equation of the sphere with diameter $AB$, where $A(1, 3, -1)$, $B(3, -1, 5)$.

**Solution.** a) Substitute the centre and the radius into the formula. Note that $y-(-2)=y+2$:

$$(x-1)^2+(y+2)^2+(z-3)^2=16.$$

Substituting $A$: $0^2+4^2+0^2=16$, so $A$ lies on the sphere.

b) The centre is the midpoint $I$ of $AB$ and the radius is half of $AB$:

$$I(2, 1, 2),\qquad AB=\sqrt{2^2+(-4)^2+6^2}=\sqrt{56},\qquad R=\frac{\sqrt{56}}{2}=\sqrt{14}.$$

So a) $(x-1)^2+(y+2)^2+(z-3)^2=16$; b) $(x-2)^2+(y-1)^2+(z-2)^2=14$.
:::

When the equation is expanded, we read off $a$, $b$, $c$ by dividing the coefficients of $x$, $y$, $z$ by $-2$.

:::example From the expanded form
Is each equation the equation of a sphere? If so, find its centre and radius.

a) $x^2+y^2+z^2-4x+2y-6z-2=0$. b) $x^2+y^2+z^2-2x+4y+6=0$.

**Solution.** a) Divide the coefficients $-4$, $2$, $-6$ by $-2$: $a=2$, $b=-1$, $c=3$; and $d=-2$. Check the condition:

$$a^2+b^2+c^2-d=4+1+9+2=16>0,\qquad R=4.$$

b) $a=1$, $b=-2$, $c=0$, $d=6$:

$$a^2+b^2+c^2-d=1+4+0-6=-1<0.$$

So a) is a sphere with centre $I(2, -1, 3)$ and radius $4$; b) is not the equation of a sphere (no point satisfies it).
:::

Given four points on a sphere, the expanded form gives four linear equations in the four unknowns $a$, $b$, $c$, $d$.

:::example The sphere through four points
Write the equation of the sphere through $O(0, 0, 0)$, $A(2, 0, 0)$, $B(0, 4, 0)$, $C(0, 0, 6)$.

**Solution.** Let the sphere be $x^2+y^2+z^2-2ax-2by-2cz+d=0$. Substitute the four points in turn:

$$\begin{aligned} O&: d=0;\\ A&: 4-4a+d=0\Rightarrow a=1;\\ B&: 16-8b+d=0\Rightarrow b=2;\\ C&: 36-12c+d=0\Rightarrow c=3. \end{aligned}$$

Then $R^2=1+4+9-0=14$. So the sphere is $x^2+y^2+z^2-2x-4y-6z=0$, with centre $I(1, 2, 3)$ and radius $\sqrt{14}$.
:::

## Planes and spheres

We compare the distance $h$ from the centre $I$ to the plane with the radius $R$, just as we compare the distance from the centre to a line in plane geometry.

:::theorem A plane and a sphere
Let $(S)$ be a sphere with centre $I$ and radius $R$, let $(P)$ be a plane, and let $h=d(I, (P))$.
- $h>R$: $(P)$ and $(S)$ have no common point.
- $h=R$: $(P)$ **touches** $(S)$ at one point $H$ (the projection of $I$ on $(P)$); $(P)$ is a **tangent plane**.
- $h<R$: $(P)$ cuts $(S)$ in a circle with centre $H$ and radius $r=\sqrt{R^2-h^2}$.

The tangent plane to $(S)$ at a point $M\in(S)$ is the plane through $M$ perpendicular to $IM$, that is, with normal vector $\overrightarrow{IM}$.
:::

:::example Three planes and a sphere
Let $(S): (x-1)^2+(y+1)^2+(z-2)^2=9$. Decide how $(S)$ meets $(P): 2x-y+2z+2=0$, $(Q): x+2y+2z-6=0$, $(R): 2x+2y-z+15=0$. If a plane touches the sphere, find the point of contact; if it cuts the sphere, find the radius of the circle of intersection.

**Solution.** The centre is $I(1, -1, 2)$ and $R=3$. All three normal vectors have length $3$, so:

$$d(I, (P))=\frac{|2+1+4+2|}{3}=3,\qquad d(I, (Q))=\frac{|1-2+4-6|}{3}=1,\qquad d(I, (R))=\frac{|2-2-2+15|}{3}=\frac{13}{3}.$$

$(P)$ touches $(S)$. The point of contact $H$ is the projection of $I$: the line $x=1+2t$, $y=-1-t$, $z=2+2t$ meets $(P)$ when $9+9t=0$, that is $t=-1$, so $H(-1, 0, 0)$.

$(Q)$ cuts $(S)$ in a circle of radius $r=\sqrt{9-1}=2\sqrt2$. Since $\dfrac{13}{3}>3$, $(R)$ does not meet $(S)$.

So $(P)$ touches $(S)$ at $H(-1, 0, 0)$, $(Q)$ cuts $(S)$ in a circle of radius $2\sqrt2$, and $(R)$ has no common point with $(S)$.
:::

:::example The tangent plane at a point
Let $(S): (x-1)^2+(y-2)^2+(z+1)^2=9$ and $M(3, 3, 1)$. Prove that $M\in(S)$ and write the equation of the tangent plane to $(S)$ at $M$.

**Solution.** Substituting $M$: $2^2+1^2+2^2=9$, so $M\in(S)$. The tangent plane has normal vector $\overrightarrow{IM}=(2, 1, 2)$:

$$2(x-3)+(y-3)+2(z-1)=0\iff 2x+y+2z-11=0.$$

So the tangent plane is $2x+y+2z-11=0$.

**Check.** $d(I, (P))=\dfrac{|2+2-2-11|}{3}=3=R$.
:::

The last example is a real problem with several steps, so we follow the four stages.

:::graph A vertical cross-section of the radar zone (unit: $10$ km)
alt: A circle of radius 5 centred at the origin, a horizontal line at height 3 cutting the circle, a segment from the centre up to height 3 and a horizontal segment of length 4
x: -6..6
y: -6..6
plot: sqrt(25 - x^2)
plot: -sqrt(25 - x^2)
hline: 3 ; dashed
segment: (0, 0) (0, 3)
segment: (0, 3) (4, 3)
point: (0, 0) "O" below
point: (4, 3) "M" above-right
label: (2, 3.5) "r"
:::

:::example The radar zone
A radar station at $O(0, 0, 0)$ detects aircraft within $50$ km. An aeroplane flies in a straight line at a height of $30$ km along the line $x=-60+t$, $y=20$, $z=30$ (unit: km). How many kilometres does the aeroplane fly inside the zone the radar can detect (to 1 decimal place)?

**Solution.**

*Understand.* The detection zone is the solid sphere $x^2+y^2+z^2\le2500$. We need the length of the part of the flight path inside it.

*Plan.* The flight path lies in the plane $z=30$. This plane is at distance $h=30<50$ from $O$, so it cuts the sphere in a circle of radius $r=\sqrt{50^2-30^2}=40$ with centre $(0, 0, 30)$.

*Solve.* At height $30$, the aeroplane is inside the radar zone when $x^2+y^2\le1600$. With $y=20$:

$$x^2\le1600-400=1200\iff -20\sqrt3\le x\le20\sqrt3.$$

This stretch has length $40\sqrt3\approx69.3$ km (each unit of $t$ is $1$ km along the $x$-axis).

So the aeroplane flies about $69.3$ km inside the radar zone.

*Look back.* We turned a problem in space into a circle in the plane $z=30$, thanks to the formula $r=\sqrt{R^2-h^2}$.
:::

:::warning Common mistakes
- **The wrong sign for the centre.** Wrong: $(x+1)^2+(y-2)^2+z^2=9$ has centre $(1, -2, 0)$. Why it is wrong: $x+1=x-(-1)$. Right: the centre is $I(-1, 2, 0)$.
- **Confusing $R$ with $R^2$.** Wrong: the sphere with centre $I(1, -2, 3)$ and radius $4$ is $(x-1)^2+(y+2)^2+(z-3)^2=4$. Right: the right-hand side is $R^2=16$.
- **Reading off the centre when the coefficient of $x^2$ is not $1$.** For $2x^2+2y^2+2z^2-4x+8y-2=0$, wrong: $a=2$, $b=-4$. Why it is wrong: the formula needs the coefficients of $x^2$, $y^2$, $z^2$ to be $1$. Right: divide by $2$ to get $x^2+y^2+z^2-2x+4y-1=0$, so $a=1$, $b=-2$, $c=0$ and $R=\sqrt{1+4+0+1}=\sqrt6$.
- **Forgetting to check $a^2+b^2+c^2-d>0$.** Wrong: $x^2+y^2+z^2-2x+4y+6=0$ has $R=\sqrt{-1}$, "undefined but still a sphere". Right: the condition fails, so the equation describes no sphere at all.
:::

## Key terms

:::terms
- sphere | mặt cầu
- centre | tâm
- radius | bán kính
- diameter | đường kính
- solid sphere (ball) | khối cầu
- tangent plane | mặt phẳng tiếp diện
- point of contact | tiếp điểm
- circle of intersection | đường tròn giao tuyến
:::

## Summary

- Centre $I(a, b, c)$, radius $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.
- $x^2+y^2+z^2-2ax-2by-2cz+d=0$ is a sphere $\iff a^2+b^2+c^2-d>0$; then $R=\sqrt{a^2+b^2+c^2-d}$.
- Diameter $AB$: the centre is the midpoint of $AB$ and $R=\dfrac{AB}{2}$.
- A point $M$: $IM<R$ inside, $IM=R$ on, $IM>R$ outside the sphere.
- A plane: $h=d(I, (P))$; $h>R$ no common point, $h=R$ tangent, $h<R$ a circle of radius $\sqrt{R^2-h^2}$.
- The tangent plane at $M$: through $M$ with normal vector $\overrightarrow{IM}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Write the equation of the sphere with centre $I(-1, 2, 0)$ and radius $3$. Is the point $A(1, 3, 2)$ inside, on or outside the sphere?

::hint
**What you need:** $(x-a)^2+(y-b)^2+(z-c)^2=R^2$; compare $IA$ with $R$.

**Steps:**
1. Substitute $a=-1$, $b=2$, $c=0$, $R=3$.
2. Compute $IA^2$.

::solution
$(x+1)^2+(y-2)^2+z^2=9$. $IA^2=2^2+1^2+2^2=9=R^2$.

**Answer.** $(x+1)^2+(y-2)^2+z^2=9$; $A$ lies on the sphere.
:::

:::exercise
Find the centre and radius of the sphere $x^2+y^2+z^2+4x-6y+2z-11=0$.

::hint
**What you need:** $a$, $b$, $c$ are the coefficients of $x$, $y$, $z$ divided by $-2$; $R=\sqrt{a^2+b^2+c^2-d}$.

**Steps:**
1. Read off $a$, $b$, $c$, $d$.
2. Compute $R$.

::solution
$a=-2$, $b=3$, $c=-1$, $d=-11$. $R^2=4+9+1+11=25$.

**Answer.** $I(-2, 3, -1)$, $R=5$.
:::

:::exercise
Which of these are equations of spheres? Find the centre and radius of each sphere.

a) $x^2+y^2+z^2-2x+4z+1=0$. b) $x^2+y^2+z^2+2y+5=0$. c) $2x^2+2y^2+2z^2-4x+8y-2=0$.

::hint
**What you need:** the condition $a^2+b^2+c^2-d>0$, with the coefficients of $x^2$, $y^2$, $z^2$ equal to $1$.

**Steps:**
1. In part c), divide both sides by $2$ first.
2. Check the condition for each equation.

::solution
a) $a=1$, $b=0$, $c=-2$, $d=1$: $1+0+4-1=4>0$, centre $(1, 0, -2)$, $R=2$.
b) $a=0$, $b=-1$, $c=0$, $d=5$: $1-5=-4<0$, not a sphere.
c) $x^2+y^2+z^2-2x+4y-1=0$: $1+4+0+1=6>0$, centre $(1, -2, 0)$, $R=\sqrt6$.

**Answer.** a) and c) are spheres; b) is not.
:::

:::exercise
Write the equation of the sphere with diameter $AB$, where $A(2, -1, 3)$ and $B(0, 3, -1)$.

::hint
**What you need:** the centre is the midpoint of $AB$ and $R=\dfrac{AB}{2}$.

**Steps:**
1. Find the midpoint $I$.
2. Find $AB$, then $R$.

::solution
$I(1, 1, 1)$, $AB=\sqrt{4+16+16}=6$, $R=3$.

**Answer.** $(x-1)^2+(y-1)^2+(z-1)^2=9$.
:::

:::exercise
(Revisiting [The equation of a plane](lesson:plane-equation).) Write the equation of the sphere with centre $I(1, 2, -1)$ that touches the plane $(P): 2x-2y+z+9=0$.

::hint
**What you need:** the sphere touches $(P)$ when $R=d(I, (P))$.

**Steps:**
1. Find $d(I, (P))$ with the distance formula.
2. Write the equation with this $R$.

::solution
$$R=d(I, (P))=\frac{|2-4-1+9|}{\sqrt{4+4+1}}=\frac63=2.$$

**Answer.** $(x-1)^2+(y-2)^2+(z+1)^2=4$.
:::

:::exercise
Let $(S): (x-2)^2+(y+1)^2+z^2=9$. Is each claim true or false?

a) $(S)$ has centre $I(2, -1, 0)$.

b) $(S)$ has radius $9$.

c) The point $M(4, 1, 1)$ lies on $(S)$.

d) The plane $z=4$ cuts $(S)$ in a circle.

::hint
**What you need:** read off the centre and radius; compare the distance from the centre to the plane with $R$.

**Steps:**
1. Read off $I$ and $R$.
2. Substitute $M$ into the left-hand side.
3. Find the distance from $I$ to the plane $z=4$.

::solution
a) **True.** $x-2$, $y+1=y-(-1)$, $z-0$.

b) **False.** $R^2=9$, so $R=3$.

c) **True.** $2^2+2^2+1^2=9$.

d) **False.** The distance from $I$ to the plane $z=4$ is $|0-4|=4>3$, so they have no common point.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
A Bluetooth speaker hangs at $I(2, 3, 4)$ in a room (unit: metre), and the floor is the plane $z=0$. The speaker can be heard clearly within $6$ m of it. Find the area of the part of the floor where the speaker is heard clearly (in m², to 1 decimal place).

::hint
**What you need:** a plane at distance $h<R$ from the centre cuts the sphere in a circle of radius $r=\sqrt{R^2-h^2}$.

**Steps:**
1. $h=4$, $R=6$; find $r$.
2. The area of a disc is $\pi r^2$.

::solution
$r^2=36-16=20$, so the area is $20\pi\approx62.8$ m².

**Answer.** $62.8$.
:::

:::exercise
Write the equation of the sphere whose centre lies on the axis $Ox$ and which passes through $A(1, 2, 3)$ and $B(3, 0, 1)$.

::hint
**What you need:** a centre on $Ox$ has the form $I(t, 0, 0)$; the condition $IA=IB$.

**Steps:**
1. Write $IA^2=IB^2$ in terms of $t$.
2. Solve for $t$, then find $R^2=IA^2$.

::solution
$$(1-t)^2+4+9=(3-t)^2+0+1\iff 14-2t=10-6t\iff t=-1.$$
$I(-1, 0, 0)$, $R^2=4+4+9=17$.

**Answer.** $(x+1)^2+y^2+z^2=17$.
:::

:::exercise
(Revisiting [The equation of a line in space](lesson:line-equation-space).) Find where the line $d: x=1+t$, $y=2$, $z=2-3t$ meets the sphere $(S): x^2+y^2+z^2=9$, and find the length of the chord.

::hint
**What you need:** substituting the parametric equations into the equation of the sphere gives a quadratic equation in $t$.

**Steps:**
1. Substitute $x$, $y$, $z$ into $(S)$ and simplify.
2. Solve for $t$, find the two points, then the distance between them.

::solution
$$(1+t)^2+4+(2-3t)^2=9\iff 10t^2-10t=0\iff t=0\ \text{or}\ t=1.$$
The two points are $(1, 2, 2)$ and $(2, 2, -1)$. The chord has length $\sqrt{1^2+0^2+3^2}=\sqrt{10}$.

**Answer.** $(1, 2, 2)$, $(2, 2, -1)$; the chord is $\sqrt{10}\approx3.16$ long.
:::

:::exercise Challenge
Model the Earth as a sphere with centre $O$ and radius $6400$ km. With one thousand km as the unit: $(S): x^2+y^2+z^2=40.96$. A satellite is at $V(0, 0, 8)$. The points $M$ on the ground that see the satellite on the horizon are those for which $VM$ is tangent to the sphere, that is $\overrightarrow{OM}\perp\overrightarrow{MV}$. Prove that these points lie in one plane and find the radius of the circle bounding the coverage area (in km).

::hint
**What you need:** $\overrightarrow{OM}\cdot\overrightarrow{MV}=0$; $OM^2=40.96$; $r=\sqrt{R^2-h^2}$.

**Steps:**
1. Write $\overrightarrow{MV}=\overrightarrow{OV}-\overrightarrow{OM}$ and expand $\overrightarrow{OM}\cdot\overrightarrow{MV}=0$.
2. Deduce $8z=40.96$, then find $r$.

::solution
$\overrightarrow{OM}\cdot(\overrightarrow{OV}-\overrightarrow{OM})=0\iff\overrightarrow{OM}\cdot\overrightarrow{OV}=OM^2\iff 8z=40.96\iff z=5.12.$
So these points lie in the plane $z=5.12$, at distance $h=5.12$ from $O$:
$$r=\sqrt{40.96-5.12^2}=\sqrt{14.7456}=3.84.$$

**Answer.** The plane $z=5.12$; the boundary circle has radius $3840$ km.
:::

## Mini test

:::quiz
::mc
In the system $Oxyz$, the sphere $(x+1)^2+(y-2)^2+z^2=4$ has centre and radius
A. $I(1, -2, 0)$, $R=2$.
B. $I(-1, 2, 0)$, $R=2$.
C. $I(-1, 2, 0)$, $R=4$.
D. $I(1, -2, 0)$, $R=4$.
::key B
$x+1=x-(-1)$, so $a=-1$; $R^2=4$, so $R=2$. Option A has the wrong signs for the centre, and C and D take $R$ to be $R^2$.

::mc
The radius of the sphere $x^2+y^2+z^2-2x+4y-6z+5=0$ is
A. $9$.
B. $\sqrt{19}$.
C. $3$.
D. $\sqrt{14}$.
::key C
$a=1$, $b=-2$, $c=3$, $d=5$: $R^2=1+4+9-5=9$, $R=3$. Option A forgets the square root, B adds $d$ instead of subtracting it, and D forgets $d$.

::mc
Which of these is the equation of a sphere?
A. $x^2+y^2+z^2-2x+4y+6=0$.
B. $x^2+y^2+z^2-4x+2z+1=0$.
C. $x^2+2y^2+z^2-2=0$.
D. $x^2+y^2-z^2+2x=0$.
::key B
B has $a^2+b^2+c^2-d=4+0+1-1=4>0$. A has $1+4-6<0$; in C and D the coefficients of $x^2$, $y^2$, $z^2$ are not equal.

::mc
The sphere with centre $I(1, 0, -2)$ that touches the plane $(P): 2x-y+2z+8=0$ has equation
A. $(x-1)^2+y^2+(z+2)^2=4$.
B. $(x-1)^2+y^2+(z+2)^2=2$.
C. $(x+1)^2+y^2+(z-2)^2=4$.
D. $(x-1)^2+y^2+(z+2)^2=36$.
::key A
$R=d(I, (P))=\dfrac{|2-0-4+8|}{3}=2$, so $R^2=4$. Option B forgets to square, C has the wrong signs for the centre, and D forgets to divide by $3$.

::tf
Let $(S): x^2+y^2+z^2-2x-4y+4z=0$.
a) $(S)$ has centre $I(1, 2, -2)$.
b) $(S)$ has radius $9$.
c) The origin $O$ lies on $(S)$.
d) The plane $(P): x+2y-2z-18=0$ touches $(S)$.
::key T F T T
a) True: $a=1$, $b=2$, $c=-2$. b) False: $R^2=1+4+4-0=9$, $R=3$. c) True: $d=0$, so $O$ satisfies the equation. d) True: $d(I, (P))=\dfrac{|1+4+4-18|}{3}=3=R$.

::sa
What is the radius of the sphere with diameter $AB$, where $A(1, 2, 3)$ and $B(3, -2, -1)$?
::key 3
$AB=\sqrt{4+16+16}=6$, so $R=3$. A common slip is to take $R=AB=6$.

::sa
The plane $z=1$ cuts the sphere $(x-1)^2+(y+2)^2+(z-4)^2=25$ in a circle. Find the area of the disc bounded by that circle (to 1 decimal place).
::key 50.3
$h=|1-4|=3$, $r=\sqrt{25-9}=4$, and the area is $16\pi\approx50.27$, which rounds to $50.3$.
:::
