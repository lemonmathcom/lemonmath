---
title: Area, volume and average value
description: AP Calculus Unit 8: average value, area between curves in x and in y, volumes by cross sections, disks and washers; for BC, arc length.
minutes: 45
---

:::goals
- Find the average value of a function on an interval and interpret it.
- Find the area between two curves, integrating in $x$ or in $y$, whichever is simpler.
- Find volumes of solids with known cross sections.
- Find volumes of revolution with disks and washers, including around lines other than the axes.
- (BC) Find the length of a curve.
:::

Unit 8 supplies one of the most predictable free-response questions on the exam: a region $R$ bounded by two curves, then its area, the volume of a solid with $R$ as its base, and the volume when $R$ is revolved around a line. Usually it sits in the calculator part, so the points come from a correct integral with correct limits; the calculator does the arithmetic. This lesson trains the setups.

## Average value

:::theorem Average value of a function
The average value of a continuous function $f$ on $[a,b]$ is
$$f_{\text{avg}}=\frac{1}{b-a}\int_a^bf(x)\,dx.$$
By the mean value theorem for integrals, $f$ takes this value at some $c$ in $[a,b]$.
:::

:::example Average of a square
Find the average value of $f(x)=x^2$ on $[0,3]$, and a point where $f$ takes that value.

**Solution.** $f_{\text{avg}}=\dfrac13\displaystyle\int_0^3x^2\,dx=\dfrac13\cdot9=3$. Since $c^2=3$, $c=\sqrt3$, which lies in $[0,3]$.

Do not confuse this with the average rate of change $\dfrac{f(3)-f(0)}{3-0}=3$. Here the two numbers happen to be equal; usually they are not.
:::

## Area between curves

The area between $y=f(x)$ on top and $y=g(x)$ below, for $a\le x\le b$, is $\displaystyle\int_a^b\big(f(x)-g(x)\big)\,dx$: top minus bottom. When the region is easier to describe with right and left curves $x=p(y)$ and $x=q(y)$, use $\displaystyle\int_c^d\big(p(y)-q(y)\big)\,dy$: right minus left.

:::graph The region between $y=x$ and $y=x^2$
alt: The line y = x and the parabola y = x squared meet at (0, 0) and (1, 1); the region between them is shaded, with the line on top
x: -0.3..1.4
y: -0.3..1.4
plot: x
plot: x^2
fill: x ; x^2 ; 0..1
point: (1, 1) "(1, 1)" right
:::

:::example Top minus bottom
What is the area of the region between $y=x$ and $y=x^2$?
A. $\dfrac12$
B. $\dfrac13$
C. $\dfrac16$
D. $\dfrac56$

**Solution.** The curves meet where $x=x^2$, at $x=0$ and $x=1$. On $(0,1)$ the line is on top: $\displaystyle\int_0^1\left(x-x^2\right)dx=\frac12-\frac13=\frac16$. Answer **C**.
:::

:::example Integrating in y
Find the area of the region between $x=y^2$ and $x=y+2$.

**Solution.** In $x$, the region would need two integrals. In $y$: the curves meet where $y^2=y+2$, at $y=-1$ and $y=2$, and the line $x=y+2$ is on the right.
$$\int_{-1}^2\left(y+2-y^2\right)dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^2=\frac{10}{3}+\frac76=\frac92.$$
:::

## Volumes with known cross sections

If the cross section perpendicular to the $x$-axis at $x$ has area $A(x)$, the volume is $\displaystyle\int_a^bA(x)\,dx$. You only need the side of the cross section in terms of $x$, then the area formula: square $s^2$, semicircle with diameter $s$: $\dfrac{\pi}{8}s^2$, equilateral triangle $\dfrac{\sqrt3}{4}s^2$.

:::example Square cross sections
The base of a solid is the region under $y=\sqrt x$ for $0\le x\le4$. Cross sections perpendicular to the $x$-axis are squares. Find the volume.

**Solution.** The side is $s=\sqrt x$, so $A(x)=x$ and $V=\displaystyle\int_0^4x\,dx=8$.
:::

## Disks and washers

Revolving a region around a line gives circular slices. If the region touches the axis, slices are **disks**: $V=\pi\displaystyle\int_a^bR(x)^2\,dx$. If there is a gap, slices are **washers**: $V=\pi\displaystyle\int_a^b\left(R(x)^2-r(x)^2\right)dx$, where $R$ and $r$ are the outer and inner radii, measured from the axis of rotation.

:::example A washer around a line below the region
The region between $y=x$ and $y=x^2$ is revolved around the line $y=-1$. Find the volume.

**Solution.** The distances to $y=-1$ are $R=x+1$ (the line, farther away) and $r=x^2+1$.
$$V=\pi\int_0^1\left[(x+1)^2-\left(x^2+1\right)^2\right]dx=\pi\int_0^1\left(2x-x^2-x^4\right)dx=\pi\left(1-\frac13-\frac15\right)=\frac{7\pi}{15}.$$
Around the $x$-axis instead, $R=x$, $r=x^2$ and $V=\dfrac{2\pi}{15}$.
:::

:::warning Common traps
- **$(R-r)^2$ instead of $R^2-r^2$.** A washer is a big disk minus a small disk.
- **Radii from the wrong line.** Around $y=-1$, the radius of a curve $y=f(x)$ is $f(x)+1$; around $y=3$ it is $3-f(x)$.
- **Wrong top curve.** Check which curve is on top with one test value before integrating.
- **Average value without $\dfrac{1}{b-a}$.** Without it you have the integral, not the average.
:::

## Arc length (BC)

The length of the curve $y=f(x)$ for $a\le x\le b$ is $L=\displaystyle\int_a^b\sqrt{1+\left(f'(x)\right)^2}\,dx$. On the exam it is usually evaluated with a calculator; the setup earns the point.

:::example A length that can be found exactly
Find the length of $y=\dfrac23x^{3/2}$ for $0\le x\le3$.

**Solution.** $f'(x)=\sqrt x$, so $L=\displaystyle\int_0^3\sqrt{1+x}\,dx=\left[\frac23(1+x)^{3/2}\right]_0^3=\frac23(8-1)=\frac{14}{3}$.
:::

:::terms
- average value | giá trị trung bình
- area between curves | diện tích giữa hai đường cong
- cross section | thiết diện
- solid of revolution | khối tròn xoay
- disk method / washer method | phương pháp đĩa / vành khuyên
- axis of rotation | trục quay
- outer / inner radius | bán kính ngoài / trong
- arc length | độ dài cung
:::

## Similar exercises

:::exercise Multiple choice
What is the average value of $\sin x$ on $[0,\pi]$?
A. $\dfrac{1}{\pi}$
B. $\dfrac{2}{\pi}$
C. $\dfrac12$
D. $2$

::hint
**What you need:** $\displaystyle\int_0^\pi\sin x\,dx=2$.

::solution
$\dfrac{1}{\pi}\cdot2=\dfrac2\pi$: answer **B**. Option D forgets to divide by the length of the interval.
:::

:::exercise Free response
Find the area of the region bounded by $y=4-x^2$ and the $x$-axis.

::hint
**What you need:** the parabola crosses the axis at $x=\pm2$.

::solution
$\displaystyle\int_{-2}^2\left(4-x^2\right)dx=16-\frac{16}{3}=\frac{32}{3}$.
:::

:::exercise Free response
Find the area of the region between $y=x^2$ and $y=2x$.

::hint
**What you need:** intersections at $x=0$ and $x=2$; the line is on top.

::solution
$\displaystyle\int_0^2\left(2x-x^2\right)dx=4-\frac83=\frac43$.
:::

:::exercise Multiple choice
The region under $y=x$ for $0\le x\le3$ is revolved around the $x$-axis. What is the volume?
A. $3\pi$
B. $\dfrac{9\pi}{2}$
C. $27\pi$
D. $9\pi$

::hint
**What you need:** disks with radius $x$.

::solution
$\pi\displaystyle\int_0^3x^2\,dx=9\pi$: answer **D**. This is a cone with radius $3$ and height $3$: $\dfrac13\pi\cdot9\cdot3=9\pi$.
:::

:::exercise Free response
The base of a solid is the region under $y=e^x$ for $0\le x\le1$. Cross sections perpendicular to the $x$-axis are squares. Find the volume, exactly and to three decimal places.

::hint
**What you need:** $A(x)=\left(e^x\right)^2=e^{2x}$.

::solution
$\displaystyle\int_0^1e^{2x}\,dx=\frac{e^2-1}{2}\approx3.195$.
:::

## Application exercises

:::exercise A full AP-style region question
Let $R$ be the region bounded by $y=\sqrt x$, the $x$-axis and the line $x=4$.
a) Find the area of $R$.
b) Find the volume of the solid formed when $R$ is revolved around the line $y=-1$.
c) The vertical line $x=k$ divides $R$ into two regions of equal area. Find $k$.

::hint
**What you need:** washers with $R=\sqrt x+1$ and $r=1$; for c), set the area from $0$ to $k$ equal to half of the total.

**Steps:**
1. Area $=\displaystyle\int_0^4\sqrt x\,dx$.
2. $(\sqrt x+1)^2-1=x+2\sqrt x$.
3. $\dfrac23k^{3/2}=\dfrac83$.

::solution
a) $\dfrac23\cdot8=\dfrac{16}{3}$.

b) $\pi\displaystyle\int_0^4\left(x+2\sqrt x\right)dx=\pi\left(8+\frac{32}{3}\right)=\frac{56\pi}{3}$.

c) $k^{3/2}=4$, so $k=4^{2/3}\approx2.520$.
:::

:::exercise Average temperature
The temperature in a city is modeled by $T(t)=20+6\sin\left(\dfrac{\pi t}{12}\right)$ degrees Celsius, $t$ hours after 6 a.m. Find the average temperature over a full day ($0\le t\le24$) and over the first $12$ hours.

::hint
**What you need:** $\displaystyle\int_0^{12}\sin\left(\frac{\pi t}{12}\right)dt=\frac{24}{\pi}$; over a full period the sine averages to $0$.

::solution
Over $24$ hours the average is $20$ degrees Celsius. Over the first $12$ hours it is $20+\dfrac{6}{12}\cdot\dfrac{24}{\pi}=20+\dfrac{12}{\pi}\approx23.820$ degrees Celsius.
:::

:::exercise Choosing the variable
Find the area of the region bounded by $x=y^2$ and the line $x=4$ by integrating in $y$.

::hint
**What you need:** $y$ runs from $-2$ to $2$; right curve $x=4$, left curve $x=y^2$.

::solution
$\displaystyle\int_{-2}^2\left(4-y^2\right)dy=16-\frac{16}{3}=\frac{32}{3}$. The same answer as the parabola exercise above: it is the same shape, turned on its side.
:::

:::exercise BC: arc length with a calculator
Set up and evaluate the length of $y=\ln(\cos x)$ for $0\le x\le\dfrac{\pi}{4}$.

::hint
**What you need:** $f'(x)=-\tan x$, and $1+\tan^2x=\sec^2x$.

::solution
$L=\displaystyle\int_0^{\pi/4}\sqrt{1+\tan^2x}\,dx=\int_0^{\pi/4}\sec x\,dx=\ln\left(\sqrt2+1\right)\approx0.881$. On the calculator part, the integral with its limits and the value $0.881$ are enough.
:::

:::quiz
::mc
What is the average value of $f(x)=2x+1$ on $[0,4]$?
A. $9$
B. $20$
C. $5$
D. $4$
::key C
$\dfrac14\displaystyle\int_0^4(2x+1)\,dx=\dfrac14\cdot20=5$.

::mc
What is the area of the region between $y=x$ and $y=x^3$ for $0\le x\le1$?
A. $\dfrac14$
B. $\dfrac12$
C. $\dfrac34$
D. $\dfrac{1}{12}$
::key A
$\displaystyle\int_0^1\left(x-x^3\right)dx=\frac12-\frac14=\frac14$.

::mc
The region under $y=x^2$ for $0\le x\le1$ is revolved around the $x$-axis. What is the volume?
A. $\dfrac{\pi}{3}$
B. $\dfrac{\pi}{2}$
C. $\dfrac15$
D. $\dfrac{\pi}{5}$
::key D
$\pi\displaystyle\int_0^1x^4\,dx=\dfrac{\pi}{5}$. Option C forgets $\pi$.

::mc
The base of a solid is the region under $y=2-x$ for $0\le x\le2$. Cross sections perpendicular to the $x$-axis are squares. What is the volume?
A. $2$
B. $\dfrac83$
C. $4$
D. $\dfrac43$
::key B
$\displaystyle\int_0^2(2-x)^2\,dx=\frac83$.

::tf
Let $R$ be the region between $y=\sqrt x$ and $y=x$ for $0\le x\le1$.
a) The area of $R$ is $\dfrac16$.
b) Revolving $R$ around the $x$-axis gives a solid of volume $\dfrac{\pi}{6}$.
c) That volume equals $\pi\displaystyle\int_0^1\left(\sqrt x-x\right)^2dx$.
d) The average value of $\sqrt x$ on $[0,1]$ is $\dfrac12$.
::key T T F F
a) True: $\dfrac23-\dfrac12$. b) True: $\pi\displaystyle\int_0^1\left(x-x^2\right)dx=\dfrac{\pi}{6}$. c) False: washers use $R^2-r^2$, not $(R-r)^2$. d) False: it is $\dfrac23$.

::sa
Find the area of the region bounded by $y=9-x^2$ and the $x$-axis.
::key 36
$\displaystyle\int_{-3}^3\left(9-x^2\right)dx=54-18=36$.

::sa
Find the average value of $f(x)=3x^2$ on $[0,2]$.
::key 4
$\dfrac12\displaystyle\int_0^23x^2\,dx=\dfrac12\cdot8=4$.
:::
