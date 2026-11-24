---
title: Parametric, vector-valued and polar functions
description: AP Calculus BC Unit 9: derivatives of parametric curves, motion with vectors, speed and distance, polar slope and polar area.
minutes: 45
---

:::goals
- Find $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$ for a parametric curve, and locate horizontal and vertical tangents.
- Describe motion in the plane with position, velocity and acceleration vectors; find speed and distance traveled.
- Find the slope of a polar curve and interpret $\dfrac{dr}{d\theta}$.
- Find the area of a region bounded by one or two polar curves.
:::

Unit 9 is for BC only and carries about a tenth of the BC score. Its free-response question is usually a particle moving in the plane, or a region bounded by a polar curve, and both are built from a handful of formulas. The difficulty is not the calculus; it is keeping track of which variable you are differentiating with respect to.

## Parametric curves

A curve given by $x=x(t)$, $y=y(t)$ has slope
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\quad\text{when }\frac{dx}{dt}\ne0.$$
The tangent is horizontal where $\dfrac{dy}{dt}=0$ and $\dfrac{dx}{dt}\ne0$, vertical where $\dfrac{dx}{dt}=0$ and $\dfrac{dy}{dt}\ne0$.

:::example Slope and tangents
For $x=t^2$, $y=t^3-3t$:

a) Find $\dfrac{dy}{dx}$ at $t=2$.
b) Where are the tangents horizontal and vertical?

**Solution.** a) $\dfrac{dy}{dx}=\dfrac{3t^2-3}{2t}$, so at $t=2$ the slope is $\dfrac{9}{4}$.

b) Horizontal where $3t^2-3=0$, at $t=\pm1$ (there $2t\ne0$): the points $(1,-2)$ and $(1,2)$. Vertical where $2t=0$, at $t=0$ (there $3t^2-3=-3\ne0$): the point $(0,0)$.
:::

:::note The second derivative
$\dfrac{d^2y}{dx^2}$ is **not** $\dfrac{d^2y/dt^2}{d^2x/dt^2}$. Differentiate $\dfrac{dy}{dx}$ with respect to $t$, then divide by $\dfrac{dx}{dt}$:
$$\frac{d^2y}{dx^2}=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}.$$
:::

:::example Concavity of a parametric curve
For the same curve $x=t^2$, $y=t^3-3t$, what is $\dfrac{d^2y}{dx^2}$ at $t=1$?
A. $3$
B. $\dfrac32$
C. $\dfrac34$
D. $6$

**Solution.** $\dfrac{dy}{dx}=\dfrac32\left(t-\dfrac1t\right)$, so $\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)=\dfrac32\left(1+\dfrac{1}{t^2}\right)$. Dividing by $2t$: $\dfrac{d^2y}{dx^2}=\dfrac{3\left(t^2+1\right)}{4t^3}$, which equals $\dfrac32$ at $t=1$. Answer **B**. Option C forgets the factor $1+\dfrac{1}{t^2}$, using only $\dfrac32$ divided by $2t$.
:::

## Motion with vectors

A particle at position $\langle x(t),y(t)\rangle$ has velocity $\langle x'(t),y'(t)\rangle$ and acceleration $\langle x''(t),y''(t)\rangle$.

- **Speed** is the length of the velocity vector: $\sqrt{x'(t)^2+y'(t)^2}$.
- **Distance traveled** from $t=a$ to $t=b$ is $\displaystyle\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt$; the same integral gives the arc length of the path.
- **Position later:** $x(b)=x(a)+\displaystyle\int_a^bx'(t)\,dt$, and likewise for $y$.

:::example A particle in the plane
A particle has velocity $v(t)=\left\langle2t,\ t^2-1\right\rangle$ and is at $(1,2)$ at $t=0$.

a) Find its speed and acceleration at $t=2$.
b) Find its position at $t=3$.
c) Find the distance traveled from $t=0$ to $t=3$.

**Solution.** a) $v(2)=\langle4,3\rangle$, speed $\sqrt{16+9}=5$. $a(t)=\langle2,2t\rangle$, so $a(2)=\langle2,4\rangle$.

b) $x(3)=1+\displaystyle\int_0^32t\,dt=1+9=10$ and $y(3)=2+\displaystyle\int_0^3\left(t^2-1\right)dt=2+(9-3)=8$. The particle is at $(10,8)$.

c) $4t^2+\left(t^2-1\right)^2=t^4+2t^2+1=\left(t^2+1\right)^2$, so the distance is $\displaystyle\int_0^3\left(t^2+1\right)dt=9+3=12$. On the exam this integral is usually done with a calculator; here it simplifies exactly.
:::

## Polar curves: slope and the meaning of dr/dθ

A polar curve $r=f(\theta)$ is the parametric curve $x=r\cos\theta$, $y=r\sin\theta$ with parameter $\theta$. So its slope is
$$\frac{dy}{dx}=\frac{dy/d\theta}{dx/d\theta}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}.$$
The sign of $\dfrac{dr}{d\theta}$ tells you about distance from the origin: when $r>0$ and $\dfrac{dr}{d\theta}>0$, the point moves away from the origin; when $\dfrac{dr}{d\theta}<0$, toward it.

:::example Slope of a cardioid
Find the slope of $r=1+\cos\theta$ at $\theta=\dfrac{\pi}{2}$.

**Solution.** At $\theta=\dfrac\pi2$: $r=1$ and $r'=-\sin\theta=-1$.
$\dfrac{dy}{d\theta}=(-1)(1)+(1)(0)=-1$ and $\dfrac{dx}{d\theta}=(-1)(0)-(1)(1)=-1$, so $\dfrac{dy}{dx}=1$.
:::

## Polar area

:::theorem Area in polar coordinates
The area of the region bounded by $r=f(\theta)$ and the rays $\theta=\alpha$, $\theta=\beta$ is
$$A=\frac12\int_\alpha^\beta r^2\,d\theta.$$
Between two curves, with $r_{\text{out}}$ farther from the origin: $A=\dfrac12\displaystyle\int_\alpha^\beta\left(r_{\text{out}}^2-r_{\text{in}}^2\right)d\theta$.
:::

:::example Area inside a cardioid
What is the area enclosed by $r=1+\cos\theta$?
A. $\pi$
B. $3\pi$
C. $\dfrac{3\pi}{2}$
D. $2\pi$

**Solution.** $\dfrac12\displaystyle\int_0^{2\pi}\left(1+2\cos\theta+\cos^2\theta\right)d\theta=\dfrac12\left(2\pi+0+\pi\right)=\dfrac{3\pi}{2}$. Answer **C**. Option B forgets the $\dfrac12$.
:::

:::warning Common traps
- **Dividing second derivatives.** $\dfrac{d^2y}{dx^2}\ne\dfrac{y''(t)}{x''(t)}$.
- **Speed is not velocity.** Speed is a number; velocity is a vector.
- **Polar area without the $\dfrac12$, or with $r$ instead of $r^2$.**
- **Washer-style mistake in polar.** Between two curves, use $r_{\text{out}}^2-r_{\text{in}}^2$, not $\left(r_{\text{out}}-r_{\text{in}}\right)^2$.
- **Wrong limits.** Find where the curves meet by solving $f(\theta)=g(\theta)$, and check the region on a sketch or a graphing calculator.
:::

:::terms
- parametric equations | phương trình tham số
- parameter | tham số
- vector-valued function | hàm véc-tơ
- velocity / acceleration vector | véc-tơ vận tốc / gia tốc
- speed | tốc độ (độ lớn vận tốc)
- arc length | độ dài cung
- polar coordinates | toạ độ cực
- cardioid | đường hình tim
:::

## Similar exercises

:::exercise Multiple choice
For $x=2t+1$, $y=t^2$, what is $\dfrac{dy}{dx}$ at $t=3$?
A. $6$
B. $\dfrac32$
C. $9$
D. $3$

::hint
**What you need:** $\dfrac{dy}{dx}=\dfrac{2t}{2}$.

::solution
For a curve given by two parametric functions, when $\dfrac{dx}{dt}\neq0$ we have
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.$$

From $x=2t+1$ and $y=t^2$, we have $\dfrac{dx}{dt}=2\neq0$ and $\dfrac{dy}{dt}=2t$. Hence
$$\frac{dy}{dx}=\frac{2t}{2}=t.$$

At $t=3$, we get $\dfrac{dy}{dx}=3$.

So the answer is **D**.

**Answer.** D.
:::

:::exercise Free response
Find the equation of the tangent line to $x=e^t$, $y=t^2+1$ at $t=1$.

::hint
**What you need:** the point $(e,2)$ and the slope $\dfrac{2t}{e^t}$.

::solution
At $t=1$, we have $x=e^1=e$ and $y=1^2+1=2$, so the point of tangency is $(e, 2)$.

We have $\dfrac{dx}{dt}=e^t$ and $\dfrac{dy}{dt}=2t$. At $t=1$: $\dfrac{dx}{dt}=e\neq0$ and $\dfrac{dy}{dt}=2$. Hence the slope of the tangent line is
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac2e.$$

The tangent line through $(e, 2)$ with slope $\dfrac2e$ is
$$y=2+\frac2e(x-e)=2+\frac2ex-2=\frac2ex.$$

So the tangent line to the curve at $t=1$ is $y=\dfrac2ex$.

**Answer.** $y=\dfrac2ex$.
:::

:::exercise Free response
Find the length of the path $x=t^2$, $y=\dfrac23t^3$ for $0\le t\le1$.

::hint
**What you need:** speed $\sqrt{4t^2+4t^4}=2t\sqrt{1+t^2}$.

**Steps:**
1. Substitute $u=1+t^2$.

::solution
The length of the path $x=x(t)$, $y=y(t)$ for $a\le t\le b$ is $L=\displaystyle\int_a^b\sqrt{\left(\dfrac{dx}{dt}\right)^2+\left(\dfrac{dy}{dt}\right)^2}\,dt$.

From $x=t^2$ and $y=\dfrac23t^3$, we have $\dfrac{dx}{dt}=2t$ and $\dfrac{dy}{dt}=2t^2$. Hence
$$\sqrt{(2t)^2+\left(2t^2\right)^2}=\sqrt{4t^2\left(1+t^2\right)}=2t\sqrt{1+t^2}\quad(\text{since }t\ge0).$$

So $L=\displaystyle\int_0^12t\sqrt{1+t^2}\,dt$.

Let $u=1+t^2$, so $du=2t\,dt$. When $t=0$ we have $u=1$; when $t=1$ we have $u=2$. We get
$$L=\int_1^2\sqrt u\,du=\left.\frac23u^{3/2}\right|_1^2=\frac23\left(2\sqrt2-1\right)\approx1.219.$$

So the length of the path is $\dfrac23\left(2\sqrt2-1\right)\approx1.219$.

**Answer.** $\dfrac23\left(2\sqrt2-1\right)\approx1.219$.
:::

:::exercise Multiple choice
What is the area enclosed by $r=4\sin\theta$ for $0\le\theta\le\pi$?
A. $4\pi$
B. $8\pi$
C. $16\pi$
D. $2\pi$

::hint
**What you need:** $\dfrac12\displaystyle\int_0^\pi16\sin^2\theta\,d\theta$, or notice that the curve is a circle of radius $2$.

::solution
The area enclosed by the polar curve $r=r(\theta)$ for $\alpha\le\theta\le\beta$ is $A=\dfrac12\displaystyle\int_\alpha^\beta r^2\,d\theta$. For $r=4\sin\theta$ we have $r\ge0$ on $[0, \pi]$, so
$$A=\frac12\int_0^\pi16\sin^2\theta\,d\theta=8\int_0^\pi\sin^2\theta\,d\theta.$$

Since $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$, we have
$$\int_0^\pi\sin^2\theta\,d\theta=\left.\left(\frac\theta2-\frac{\sin2\theta}{4}\right)\right|_0^\pi=\frac\pi2.$$

Hence $A=8\cdot\dfrac\pi2=4\pi$.

So the answer is **A**.

*Remark.* The curve is the circle of radius $2$ centered at $(0, 2)$ (because $r=4\sin\theta\iff x^2+y^2=4y\iff x^2+(y-2)^2=4$), so its area is $\pi\cdot2^2=4\pi$, which agrees with the result above.

**Answer.** A.
:::

:::exercise Free response
For the spiral $r=\theta$, $0\le\theta\le\pi$: is the point moving toward or away from the origin as $\theta$ increases? Find the area swept out by the segment from the origin.

::hint
**What you need:** the sign of $\dfrac{dr}{d\theta}$; $\dfrac12\displaystyle\int_0^\pi\theta^2\,d\theta$.

::solution
For $r=\theta$ we have $\dfrac{dr}{d\theta}=1>0$ and $r=\theta>0$ when $\theta>0$. Since $r$ is the distance from the point to the origin and $r$ increases as $\theta$ increases, the point moves away from the origin.

The area swept out by the segment from the origin to the point as $\theta$ goes from $0$ to $\pi$ is
$$A=\frac12\int_0^\pi r^2\,d\theta=\frac12\int_0^\pi\theta^2\,d\theta=\frac12\left.\frac{\theta^3}{3}\right|_0^\pi=\frac12\cdot\frac{\pi^3}{3}=\frac{\pi^3}{6}\approx5.168.$$

So as $\theta$ increases, the point moves away from the origin; the area swept out is $\dfrac{\pi^3}{6}\approx5.168$.

**Answer.** Away from the origin; area $\dfrac{\pi^3}{6}\approx5.168$.
:::

## Application exercises

:::exercise A particle question in AP style
A particle moves with $\dfrac{dx}{dt}=3t^2-6t$ and $\dfrac{dy}{dt}=4t$, and is at $(1,0)$ at $t=0$.
a) At what time $t>0$ is the particle moving vertically?
b) Find the position of the particle at that time.
c) Find the slope of the path at $t=1$.

::hint
**What you need:** moving vertically means $\dfrac{dx}{dt}=0$ while $\dfrac{dy}{dt}\ne0$.

**Steps:**
1. $3t(t-2)=0$.
2. $x(2)=1+\displaystyle\int_0^2\left(3t^2-6t\right)dt$, $y(2)=\displaystyle\int_0^24t\,dt$.

::solution
We have $\dfrac{dx}{dt}=3t^2-6t=3t(t-2)$ and $\dfrac{dy}{dt}=4t$.

a) The particle moves vertically when $\dfrac{dx}{dt}=0$ and $\dfrac{dy}{dt}\neq0$. Solving $3t(t-2)=0$ gives $t=0$ or $t=2$. At $t=0$ both components are $0$: the particle is at rest, so we reject it. At $t=2$ we have $\dfrac{dy}{dt}=8\neq0$. So for $t>0$, the particle moves vertically at $t=2$.

b) Since the particle is at $(1, 0)$ at $t=0$,
$$x(t)=1+\int_0^t\left(3s^2-6s\right)ds=1+t^3-3t^2,\qquad y(t)=0+\int_0^t4s\,ds=2t^2.$$
At $t=2$: $x(2)=1+8-12=-3$ and $y(2)=2\cdot4=8$. So the position of the particle is $(-3, 8)$.

c) At $t=1$ we have $\dfrac{dx}{dt}=3-6=-3\neq0$ and $\dfrac{dy}{dt}=4$. Hence the slope of the path is
$$\frac{dy}{dx}=\frac{4}{3-6}=-\frac43.$$

So the particle moves vertically at $t=2$, at the position $(-3, 8)$, and the slope of the path at $t=1$ is $-\dfrac43$.

**Answer.** a) $t=2$; b) $(-3, 8)$; c) $-\dfrac43$.
:::

:::exercise Inside a cardioid
Let $r=2+2\sin\theta$.
a) Find the area enclosed by the curve.
b) Find $\dfrac{dr}{d\theta}$ at $\theta=\pi$ and explain what it says about the curve.

::hint
**What you need:** $\displaystyle\int_0^{2\pi}\sin\theta\,d\theta=0$ and $\displaystyle\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$.

::solution
For $r=2+2\sin\theta$ we have $r\ge0$ for all $\theta$, and the curve is traced exactly once as $\theta$ goes from $0$ to $2\pi$.

a) The area enclosed by the curve is
$$A=\frac12\int_0^{2\pi}(2+2\sin\theta)^2\,d\theta=\frac12\int_0^{2\pi}\left(4+8\sin\theta+4\sin^2\theta\right)d\theta.$$
We compute each term: $\displaystyle\int_0^{2\pi}4\,d\theta=8\pi$; $\displaystyle\int_0^{2\pi}8\sin\theta\,d\theta=0$; and since $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$, $\displaystyle\int_0^{2\pi}4\sin^2\theta\,d\theta=4\pi$. Hence
$$A=\frac12(8\pi+0+4\pi)=6\pi.$$

b) We have $\dfrac{dr}{d\theta}=2\cos\theta$. At $\theta=\pi$: $\dfrac{dr}{d\theta}=2\cos\pi=-2$, and $r=2+2\sin\pi=2>0$. Since $r>0$ and $\dfrac{dr}{d\theta}<0$, $r$ decreases as $\theta$ increases; that is, there the curve is getting closer to the origin.

So the area enclosed by the curve is $6\pi$; at $\theta=\pi$ we have $\dfrac{dr}{d\theta}=-2$ and the curve is getting closer to the origin.

**Answer.** a) $6\pi$; b) $\dfrac{dr}{d\theta}=-2$, the curve is getting closer to the origin.
:::

:::exercise Between two polar curves
Find the area of the region inside $r=3\cos\theta$ and outside $r=1+\cos\theta$.

::hint
**What you need:** the curves meet where $3\cos\theta=1+\cos\theta$, so $\cos\theta=\dfrac12$, $\theta=\pm\dfrac\pi3$.

**Steps:**
1. $A=\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left(9\cos^2\theta-(1+\cos\theta)^2\right)d\theta$.

::solution
Find the intersections of the two curves: $3\cos\theta=1+\cos\theta\iff\cos\theta=\dfrac12\iff\theta=\pm\dfrac\pi3$.

The circle $r=3\cos\theta$ is traced once for $-\dfrac\pi2\le\theta\le\dfrac\pi2$. For $-\dfrac\pi3\le\theta\le\dfrac\pi3$ we have $\cos\theta\ge\dfrac12$, so $3\cos\theta\ge1+\cos\theta$: the circle lies outside the curve $r=1+\cos\theta$. For $\dfrac\pi3<|\theta|\le\dfrac\pi2$ we have $3\cos\theta<1+\cos\theta$, so the circle lies inside the other curve. Hence the region inside $r=3\cos\theta$ and outside $r=1+\cos\theta$ corresponds to $-\dfrac\pi3\le\theta\le\dfrac\pi3$.

By symmetry about the $x$-axis, the area is
$$A=\frac12\int_{-\pi/3}^{\pi/3}\left[(3\cos\theta)^2-(1+\cos\theta)^2\right]d\theta=\int_0^{\pi/3}\left(8\cos^2\theta-2\cos\theta-1\right)d\theta.$$

Since $8\cos^2\theta=4+4\cos2\theta$,
$$A=\int_0^{\pi/3}\left(3+4\cos2\theta-2\cos\theta\right)d\theta=\Big[3\theta+2\sin2\theta-2\sin\theta\Big]_0^{\pi/3}=\pi+\sqrt3-\sqrt3=\pi.$$

So the required area is $\pi\approx3.142$.

*Exam tip.* On the calculator part with a graphing calculator, it is enough to write the integral $\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left[(3\cos\theta)^2-(1+\cos\theta)^2\right]d\theta$ and the value $3.142$.

**Answer.** $\pi\approx3.142$.
:::

:::exercise Challenge
Find the point on $r=1+\cos\theta$, $0<\theta<\pi$, where the tangent line is horizontal.

::hint
**What you need:** $\dfrac{dy}{d\theta}=0$ with $y=(1+\cos\theta)\sin\theta$.

**Steps:**
1. $\dfrac{dy}{d\theta}=-\sin^2\theta+\cos\theta+\cos^2\theta=2\cos^2\theta+\cos\theta-1$.
2. Factor: $(2\cos\theta-1)(\cos\theta+1)=0$.

::solution
The Cartesian coordinates of a point on the curve are
$$x=r\cos\theta=(1+\cos\theta)\cos\theta,\qquad y=r\sin\theta=(1+\cos\theta)\sin\theta.$$

Differentiating with respect to $\theta$:
$$\frac{dy}{d\theta}=-\sin^2\theta+(1+\cos\theta)\cos\theta=2\cos^2\theta+\cos\theta-1=(2\cos\theta-1)(\cos\theta+1),$$
$$\frac{dx}{d\theta}=-\sin\theta\cos\theta-(1+\cos\theta)\sin\theta=-\sin\theta(1+2\cos\theta).$$

The tangent line is horizontal when $\dfrac{dy}{d\theta}=0$ and $\dfrac{dx}{d\theta}\neq0$. Solving $\dfrac{dy}{d\theta}=0$: $\cos\theta=\dfrac12$ or $\cos\theta=-1$.

For $0<\theta<\pi$: $\cos\theta=\dfrac12$ gives $\theta=\dfrac\pi3$; and $\cos\theta=-1$ gives $\theta=\pi$, which lies outside the interval, so we reject it.

Check: at $\theta=\dfrac\pi3$ we have $\dfrac{dx}{d\theta}=-\dfrac{\sqrt3}{2}(1+1)=-\sqrt3\neq0$.

Then $r=1+\dfrac12=\dfrac32$, so
$$x=\frac32\cdot\frac12=\frac34,\qquad y=\frac32\cdot\frac{\sqrt3}{2}=\frac{3\sqrt3}{4}.$$

So the point on the curve where the tangent line is horizontal is $\left(\dfrac34, \dfrac{3\sqrt3}{4}\right)$.

**Answer.** $\left(\dfrac34, \dfrac{3\sqrt3}{4}\right)$.
:::

:::quiz
::mc TH
For $x=t^3$, $y=t^2+1$, what is $\dfrac{dy}{dx}$ at $t=1$?
A. $\dfrac32$
B. $\dfrac23$
C. $2$
D. $3$
::key B
$\dfrac{2t}{3t^2}=\dfrac23$ at $t=1$.

::mc TH
A particle has position $\left\langle t^2,3t\right\rangle$. What is its speed at $t=2$?
A. $7$
B. $\sqrt7$
C. $5$
D. $25$
::key C
$v(2)=\langle4,3\rangle$, speed $5$.

::mc TH
For $x=\cos t$, $y=\sin t$, what is $\dfrac{dy}{dx}$ at $t=\dfrac\pi4$?
A. $-1$
B. $1$
C. $0$
D. $\sqrt2$
::key A
$\dfrac{\cos t}{-\sin t}=-1$ at $t=\dfrac\pi4$.

::mc NB
Which integral gives the area bounded by $r=f(\theta)$ for $\alpha\le\theta\le\beta$?
A. $\displaystyle\int_\alpha^\beta f(\theta)\,d\theta$
B. $\pi\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
C. $\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
D. $\dfrac12\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
::key D
The polar area formula has the factor $\dfrac12$ and $r^2$.

::tf TH TH VD TH
A particle has velocity $v(t)=\left\langle2t,3t^2\right\rangle$ and is at the origin at $t=0$.
a) Its speed at $t=1$ is $\sqrt{13}$.
b) Its acceleration at $t=1$ is $\langle2,6\rangle$.
c) Its position at $t=2$ is $\langle4,6\rangle$.
d) The distance traveled from $t=0$ to $t=1$ is $\displaystyle\int_0^1\sqrt{4t^2+9t^4}\,dt$.
::key T T F T
a) True: $\sqrt{4+9}$. b) True: $a(t)=\langle2,6t\rangle$. c) False: the position is $\left\langle t^2,t^3\right\rangle$, so $\langle4,8\rangle$. d) True: the integral of the speed.

::sa VD
Find the length of the path $x=3t$, $y=4t$ for $0\le t\le2$.
::key 10
Speed $\sqrt{9+16}=5$, so the length is $5\cdot2=10$.

::sa TH
For $x=t^2$, $y=t^3$, find $\dfrac{dy}{dx}$ at $t=4$.
::key 6
$\dfrac{3t^2}{2t}=\dfrac{3t}{2}=6$.
:::
