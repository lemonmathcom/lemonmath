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

Picture a plot of land with a curved edge on each side. How would you measure its area? Unit 8 asks questions of exactly this kind, and it supplies one of the most predictable free-response questions on the exam. You are given a region $R$ bounded by two curves, then asked for its area, for the volume of a solid with $R$ as its base, and for the volume when $R$ is revolved around a line. It usually sits in the calculator part. The calculator does the arithmetic, so the points come from a correct integral with correct limits. That setup is the skill we practise here.

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

Think of cutting the region into thin strips and adding them up. Each strip is as tall as the gap between the top curve and the bottom one. So the area between $y=f(x)$ on top and $y=g(x)$ below, for $a\le x\le b$, is $\displaystyle\int_a^b\big(f(x)-g(x)\big)\,dx$: top minus bottom. Some regions are easier to describe from side to side, with a right curve $x=p(y)$ and a left curve $x=q(y)$. Then we cut horizontal strips and use $\displaystyle\int_c^d\big(p(y)-q(y)\big)\,dy$: right minus left.

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

Think of a loaf of bread cut into thin slices: the volume of the loaf is the total of the volumes of the slices. For our solid, if the cross section perpendicular to the $x$-axis at $x$ has area $A(x)$, then adding up all the slices gives the volume $\displaystyle\int_a^bA(x)\,dx$. The real work is finding $A(x)$. You only need the side of the cross section in terms of $x$, then the area formula for that shape: a square is $s^2$, a semicircle with diameter $s$ is $\dfrac{\pi}{8}s^2$, and an equilateral triangle is $\dfrac{\sqrt3}{4}s^2$.

:::example Square cross sections
The base of a solid is the region under $y=\sqrt x$ for $0\le x\le4$. Cross sections perpendicular to the $x$-axis are squares. Find the volume.

**Solution.** The side is $s=\sqrt x$, so $A(x)=x$ and $V=\displaystyle\int_0^4x\,dx=8$.
:::

## Disks and washers

Revolve a region around a line and slice the solid across the axis: every slice is circular. So we only need the radius of each slice, then we add them up. If the region touches the axis, each slice is solid, a **disk**, and $V=\pi\displaystyle\int_a^bR(x)^2\,dx$. If there is a gap between the region and the axis, each slice has a hole in the middle, a **washer**, and $V=\pi\displaystyle\int_a^b\left(R(x)^2-r(x)^2\right)dx$. Here $R$ and $r$ are the outer and inner radii, both measured from the axis of rotation.

:::example A washer around a line below the region
The region between $y=x$ and $y=x^2$ is revolved around the line $y=-1$. Find the volume.

**Solution.** The distances to $y=-1$ are $R=x+1$ (the line, farther away) and $r=x^2+1$.
$$V=\pi\int_0^1\left[(x+1)^2-\left(x^2+1\right)^2\right]dx=\pi\int_0^1\left(2x-x^2-x^4\right)dx=\pi\left(1-\frac13-\frac15\right)=\frac{7\pi}{15}.$$
Around the $x$-axis instead, $R=x$, $r=x^2$ and $V=\dfrac{2\pi}{15}$.
:::

:::warning Common traps
- **$(R-r)^2$ instead of $R^2-r^2$.** Many students slip here. A washer is a big disk with a small disk cut out, so we subtract the two areas; we do not square the difference of the radii.
- **Radii from the wrong line.** A radius is always measured from the axis. Around $y=-1$, the radius of a curve $y=f(x)$ is $f(x)+1$; around $y=3$ it is $3-f(x)$.
- **Wrong top curve.** Before integrating, check which curve is on top with one test value.
- **Average value without $\dfrac{1}{b-a}$.** Without it you have the integral, not the average.
:::

## Arc length (BC)

To measure the length of a curve, break it into tiny pieces, treat each piece as almost straight, and add them up. The result is that the length of the curve $y=f(x)$ for $a\le x\le b$ is $L=\displaystyle\int_a^b\sqrt{1+\left(f'(x)\right)^2}\,dx$. On the exam it is usually evaluated with a calculator, and the setup is what earns the point.

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
The average value of a function $f$ on $[a, b]$ is $\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx$. For $f(x)=\sin x$ on $[0, \pi]$, we have
$$\frac{1}{\pi-0}\int_0^{\pi}\sin x\,dx=\frac1\pi\Big[-\cos x\Big]_0^{\pi}=\frac1\pi\left(1+1\right)=\frac2\pi.$$

So the answer is **B**.

*Remark.* Option D forgets to divide by the length of the interval: the value $2$ is only $\displaystyle\int_0^\pi\sin x\,dx$.

**Answer.** B.
:::

:::exercise Free response
Find the area of the region bounded by $y=4-x^2$ and the $x$-axis.

::hint
**What you need:** the parabola crosses the axis at $x=\pm2$.

::solution
The intersections of $y=4-x^2$ with the $x$-axis satisfy $4-x^2=0$, so $x=-2$ or $x=2$. On $[-2, 2]$ we have $4-x^2\ge0$, so the graph lies above the $x$-axis.

The required area is
$$S=\int_{-2}^{2}\left(4-x^2\right)dx=\left.\left(4x-\frac{x^3}{3}\right)\right|_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=16-\frac{16}{3}=\frac{32}{3}.$$

So the area of the region bounded by $y=4-x^2$ and the $x$-axis is $\dfrac{32}{3}$.

**Answer.** $\dfrac{32}{3}$.
:::

:::exercise Free response
Find the area of the region between $y=x^2$ and $y=2x$.

::hint
**What you need:** intersections at $x=0$ and $x=2$; the line is on top.

::solution
The intersections of $y=x^2$ and $y=2x$ satisfy $x^2=2x$, that is $x(x-2)=0$, so $x=0$ or $x=2$.

On $[0, 2]$ we have $2x\ge x^2$ (for example at $x=1$: $2>1$), so the line $y=2x$ lies above the parabola $y=x^2$.

The area of the region between the two graphs is
$$S=\int_0^2\left(2x-x^2\right)dx=\left.\left(x^2-\frac{x^3}{3}\right)\right|_0^2=4-\frac83=\frac43.$$

So the area of the region between $y=x^2$ and $y=2x$ is $\dfrac43$.

**Answer.** $\dfrac43$.
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
When the region under $y=x$ for $0\le x\le3$ is revolved around the $x$-axis, each cross section perpendicular to the $x$-axis is a disc of radius $x$. Applying the volume formula for solids of revolution (the disc method), we have
$$V=\pi\int_0^3x^2\,dx=\pi\left.\frac{x^3}{3}\right|_0^3=\pi\cdot\frac{27}{3}=9\pi.$$

So the answer is **D**.

*Remark.* The solid is a cone with radius $3$ and height $3$, so its volume is $\dfrac13\pi\cdot3^2\cdot3=9\pi$, which agrees with the result above.

**Answer.** D.
:::

:::exercise Free response
The base of a solid is the region under $y=e^x$ for $0\le x\le1$. Cross sections perpendicular to the $x$-axis are squares. Find the volume, exactly and to three decimal places.

::hint
**What you need:** $A(x)=\left(e^x\right)^2=e^{2x}$.

::solution
At the point with abscissa $x$ ($0\le x\le1$), the cross section perpendicular to the $x$-axis is a square whose side equals the height of the region, that is $y=e^x$. The area of the cross section is
$$A(x)=\left(e^x\right)^2=e^{2x}.$$

The volume of the solid is
$$V=\int_0^1A(x)\,dx=\int_0^1e^{2x}\,dx=\left.\frac{e^{2x}}{2}\right|_0^1=\frac{e^2-1}{2}.$$

Using $e^2\approx7.3891$, we get $V\approx\dfrac{6.3891}{2}\approx3.195$.

So the volume of the solid is $\dfrac{e^2-1}{2}\approx3.195$.

**Answer.** $\dfrac{e^2-1}{2}\approx3.195$.
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
The region $R$ lies between the $x$-axis and the curve $y=\sqrt x$ for $0\le x\le4$.

a) The area of $R$ is
$$S=\int_0^4\sqrt x\,dx=\left.\frac23x^{3/2}\right|_0^4=\frac23\cdot8=\frac{16}{3}.$$

b) When $R$ is revolved around the line $y=-1$, each cross section perpendicular to the $x$-axis is a washer with outer radius $\sqrt x-(-1)=\sqrt x+1$ and inner radius $0-(-1)=1$. The volume is
$$V=\pi\int_0^4\left[\left(\sqrt x+1\right)^2-1^2\right]dx=\pi\int_0^4\left(x+2\sqrt x\right)dx=\pi\left.\left(\frac{x^2}{2}+\frac43x^{3/2}\right)\right|_0^4=\pi\left(8+\frac{32}{3}\right)=\frac{56\pi}{3}.$$

c) The area of the part of $R$ to the left of the line $x=k$ ($0<k<4$) is $\displaystyle\int_0^k\sqrt x\,dx=\dfrac23k^{3/2}$. The two regions have equal area when this equals half the area of $R$:
$$\frac23k^{3/2}=\frac12\cdot\frac{16}{3}=\frac83\iff k^{3/2}=4\iff k=4^{2/3}\approx2.520.$$
This value satisfies $0<k<4$.

So the area of $R$ is $\dfrac{16}{3}$; the volume of the solid is $\dfrac{56\pi}{3}$; and $k=4^{2/3}\approx2.520$.

**Answer.** a) $\dfrac{16}{3}$; b) $\dfrac{56\pi}{3}$; c) $k=4^{2/3}\approx2.520$.
:::

:::exercise Average temperature
The temperature in a city is modeled by $T(t)=20+6\sin\left(\dfrac{\pi t}{12}\right)$ degrees Celsius, $t$ hours after 6 a.m. Find the average temperature over a full day ($0\le t\le24$) and over the first $12$ hours.

::hint
**What you need:** $\displaystyle\int_0^{12}\sin\left(\frac{\pi t}{12}\right)dt=\frac{24}{\pi}$; over a full period the sine averages to $0$.

::solution
The average temperature on $[0, b]$ is $\dfrac1b\displaystyle\int_0^bT(t)\,dt$. An antiderivative of $T(t)=20+6\sin\left(\dfrac{\pi t}{12}\right)$ is
$$\int T(t)\,dt=20t-\frac{72}{\pi}\cos\frac{\pi t}{12}.$$

Over the full day ($b=24$):
$$\int_0^{24}T\,dt=\left[20t-\frac{72}{\pi}\cos\frac{\pi t}{12}\right]_0^{24}=\left(480-\frac{72}{\pi}\right)-\left(0-\frac{72}{\pi}\right)=480.$$
The average temperature is $\dfrac{480}{24}=20$ degrees Celsius.

Over the first $12$ hours ($b=12$):
$$\int_0^{12}T\,dt=\left[20t-\frac{72}{\pi}\cos\frac{\pi t}{12}\right]_0^{12}=\left(240+\frac{72}{\pi}\right)-\left(0-\frac{72}{\pi}\right)=240+\frac{144}{\pi}.$$
The average temperature is $\dfrac{1}{12}\left(240+\dfrac{144}{\pi}\right)=20+\dfrac{12}{\pi}\approx23.820$ degrees Celsius.

So the average temperature over the full day is $20$ degrees Celsius, and over the first $12$ hours it is $20+\dfrac{12}{\pi}\approx23.820$ degrees Celsius.

**Answer.** Full day: $20$ degrees Celsius; first $12$ hours: $20+\dfrac{12}{\pi}\approx23.820$ degrees Celsius.
:::

:::exercise Choosing the variable
Find the area of the region bounded by $x=y^2$ and the line $x=4$ by integrating in $y$.

::hint
**What you need:** $y$ runs from $-2$ to $2$; right curve $x=4$, left curve $x=y^2$.

::solution
The intersections of $x=y^2$ and $x=4$ satisfy $y^2=4$, so $y=-2$ or $y=2$. On $[-2, 2]$ we have $y^2\le4$, so the line $x=4$ lies to the right of the parabola $x=y^2$.

Integrating in $y$, the area of the region is
$$S=\int_{-2}^{2}\left(4-y^2\right)dy=\left.\left(4y-\frac{y^3}{3}\right)\right|_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=16-\frac{16}{3}=\frac{32}{3}.$$

So the area of the region bounded by $x=y^2$ and the line $x=4$ is $\dfrac{32}{3}$.

*Remark.* The answer is the same as in the exercise on the parabola $y=4-x^2$ above: it is the same shape, turned on its side.

**Answer.** $\dfrac{32}{3}$.
:::

:::exercise BC: arc length with a calculator
Set up and evaluate the length of $y=\ln(\cos x)$ for $0\le x\le\dfrac{\pi}{4}$.

::hint
**What you need:** $f'(x)=-\tan x$, and $1+\tan^2x=\sec^2x$.

::solution
The arc length of the curve $y=f(x)$ for $a\le x\le b$ is $L=\displaystyle\int_a^b\sqrt{1+\left(y'\right)^2}\,dx$.

For $y=\ln(\cos x)$, we have $\cos x>0$ on $\left[0, \dfrac\pi4\right]$, so the function is defined, and
$$y'=\frac{-\sin x}{\cos x}=-\tan x.$$

Therefore
$$L=\int_0^{\pi/4}\sqrt{1+\tan^2x}\,dx=\int_0^{\pi/4}\sqrt{\sec^2x}\,dx=\int_0^{\pi/4}\sec x\,dx,$$
because $1+\tan^2x=\sec^2x$ and $\sec x>0$ on $\left[0, \dfrac\pi4\right]$.

An antiderivative of $\sec x$ is $\ln|\sec x+\tan x|$, so
$$L=\Big[\ln|\sec x+\tan x|\Big]_0^{\pi/4}=\ln\left(\sqrt2+1\right)-\ln1=\ln\left(\sqrt2+1\right)\approx0.881.$$

So the length of the curve is $L=\ln\left(\sqrt2+1\right)\approx0.881$.

*Exam tip.* On the calculator part, the integral $\displaystyle\int_0^{\pi/4}\sqrt{1+\tan^2x}\,dx$ with its limits and the value $0.881$ are enough.

**Answer.** $\ln\left(\sqrt2+1\right)\approx0.881$.
:::

:::quiz
::mc TH
What is the average value of $f(x)=2x+1$ on $[0,4]$?
A. $9$
B. $20$
C. $5$
D. $4$
::key C
$\dfrac14\displaystyle\int_0^4(2x+1)\,dx=\dfrac14\cdot20=5$.

::mc VD
What is the area of the region between $y=x$ and $y=x^3$ for $0\le x\le1$?
A. $\dfrac14$
B. $\dfrac12$
C. $\dfrac34$
D. $\dfrac{1}{12}$
::key A
$\displaystyle\int_0^1\left(x-x^3\right)dx=\frac12-\frac14=\frac14$.

::mc VD
The region under $y=x^2$ for $0\le x\le1$ is revolved around the $x$-axis. What is the volume?
A. $\dfrac{\pi}{3}$
B. $\dfrac{\pi}{2}$
C. $\dfrac15$
D. $\dfrac{\pi}{5}$
::key D
$\pi\displaystyle\int_0^1x^4\,dx=\dfrac{\pi}{5}$. Option C forgets $\pi$.

::mc VD
The base of a solid is the region under $y=2-x$ for $0\le x\le2$. Cross sections perpendicular to the $x$-axis are squares. What is the volume?
A. $2$
B. $\dfrac83$
C. $4$
D. $\dfrac43$
::key B
$\displaystyle\int_0^2(2-x)^2\,dx=\frac83$.

::tf VD VD TH VD
Let $R$ be the region between $y=\sqrt x$ and $y=x$ for $0\le x\le1$.
a) The area of $R$ is $\dfrac16$.
b) Revolving $R$ around the $x$-axis gives a solid of volume $\dfrac{\pi}{6}$.
c) That volume equals $\pi\displaystyle\int_0^1\left(\sqrt x-x\right)^2dx$.
d) The average value of $\sqrt x$ on $[0,1]$ is $\dfrac12$.
::key T T F F
a) True: $\dfrac23-\dfrac12$. b) True: $\pi\displaystyle\int_0^1\left(x-x^2\right)dx=\dfrac{\pi}{6}$. c) False: washers use $R^2-r^2$, not $(R-r)^2$. d) False: it is $\dfrac23$.

::sa VD
Find the area of the region bounded by $y=9-x^2$ and the $x$-axis.
::key 36
$\displaystyle\int_{-3}^3\left(9-x^2\right)dx=54-18=36$.

::sa TH
Find the average value of $f(x)=3x^2$ on $[0,2]$.
::key 4
$\dfrac12\displaystyle\int_0^23x^2\,dx=\dfrac12\cdot8=4$.
:::
