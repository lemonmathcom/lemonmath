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
$\dfrac{dy}{dx}=t=3$: answer **D**.
:::

:::exercise Free response
Find the equation of the tangent line to $x=e^t$, $y=t^2+1$ at $t=1$.

::hint
**What you need:** the point $(e,2)$ and the slope $\dfrac{2t}{e^t}$.

::solution
The slope is $\dfrac2e$, so the tangent line is $y=2+\dfrac2e(x-e)$, that is $y=\dfrac2ex$.
:::

:::exercise Free response
Find the length of the path $x=t^2$, $y=\dfrac23t^3$ for $0\le t\le1$.

::hint
**What you need:** speed $\sqrt{4t^2+4t^4}=2t\sqrt{1+t^2}$.

**Steps:**
1. Substitute $u=1+t^2$.

::solution
$\displaystyle\int_0^12t\sqrt{1+t^2}\,dt=\left[\frac23\left(1+t^2\right)^{3/2}\right]_0^1=\frac23\left(2\sqrt2-1\right)\approx1.219$.
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
$8\displaystyle\int_0^\pi\sin^2\theta\,d\theta=8\cdot\frac\pi2=4\pi$: answer **A**. The curve is the circle of radius $2$ centered at $(0,2)$.
:::

:::exercise Free response
For the spiral $r=\theta$, $0\le\theta\le\pi$: is the point moving toward or away from the origin as $\theta$ increases? Find the area swept out by the segment from the origin.

::hint
**What you need:** the sign of $\dfrac{dr}{d\theta}$; $\dfrac12\displaystyle\int_0^\pi\theta^2\,d\theta$.

::solution
$\dfrac{dr}{d\theta}=1>0$ and $r>0$, so it moves away from the origin. Area $=\dfrac12\cdot\dfrac{\pi^3}{3}=\dfrac{\pi^3}{6}\approx5.168$.
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
a) $t=2$ (at $t=0$ both components are $0$: the particle is at rest).

b) $x(2)=1+(8-12)=-3$ and $y(2)=8$: the point $(-3,8)$.

c) $\dfrac{dy}{dx}=\dfrac{4}{3-6}=-\dfrac43$.
:::

:::exercise Inside a cardioid
Let $r=2+2\sin\theta$.
a) Find the area enclosed by the curve.
b) Find $\dfrac{dr}{d\theta}$ at $\theta=\pi$ and explain what it says about the curve.

::hint
**What you need:** $\displaystyle\int_0^{2\pi}\sin\theta\,d\theta=0$ and $\displaystyle\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$.

::solution
a) $\dfrac12\displaystyle\int_0^{2\pi}\left(4+8\sin\theta+4\sin^2\theta\right)d\theta=\dfrac12(8\pi+4\pi)=6\pi$.

b) $\dfrac{dr}{d\theta}=2\cos\theta=-2$ at $\theta=\pi$. Since $r=2>0$ there, the curve is getting closer to the origin as $\theta$ increases.
:::

:::exercise Between two polar curves
Find the area of the region inside $r=3\cos\theta$ and outside $r=1+\cos\theta$.

::hint
**What you need:** the curves meet where $3\cos\theta=1+\cos\theta$, so $\cos\theta=\dfrac12$, $\theta=\pm\dfrac\pi3$.

**Steps:**
1. $A=\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left(9\cos^2\theta-(1+\cos\theta)^2\right)d\theta$.

::solution
The integral equals $\pi$. With a graphing calculator on the calculator part, the setup and the value $3.142$ are enough.
:::

:::exercise Challenge
Find the point on $r=1+\cos\theta$, $0<\theta<\pi$, where the tangent line is horizontal.

::hint
**What you need:** $\dfrac{dy}{d\theta}=0$ with $y=(1+\cos\theta)\sin\theta$.

**Steps:**
1. $\dfrac{dy}{d\theta}=-\sin^2\theta+\cos\theta+\cos^2\theta=2\cos^2\theta+\cos\theta-1$.
2. Factor: $(2\cos\theta-1)(\cos\theta+1)=0$.

::solution
$\cos\theta=\dfrac12$, so $\theta=\dfrac\pi3$ (the root $\cos\theta=-1$ gives $\theta=\pi$, outside the interval). There $r=\dfrac32$, and the point is $\left(\dfrac34,\dfrac{3\sqrt3}{4}\right)$. Check: $\dfrac{dx}{d\theta}\ne0$ there.
:::

:::quiz
::mc
For $x=t^3$, $y=t^2+1$, what is $\dfrac{dy}{dx}$ at $t=1$?
A. $\dfrac32$
B. $\dfrac23$
C. $2$
D. $3$
::key B
$\dfrac{2t}{3t^2}=\dfrac23$ at $t=1$.

::mc
A particle has position $\left\langle t^2,3t\right\rangle$. What is its speed at $t=2$?
A. $7$
B. $\sqrt7$
C. $5$
D. $25$
::key C
$v(2)=\langle4,3\rangle$, speed $5$.

::mc
For $x=\cos t$, $y=\sin t$, what is $\dfrac{dy}{dx}$ at $t=\dfrac\pi4$?
A. $-1$
B. $1$
C. $0$
D. $\sqrt2$
::key A
$\dfrac{\cos t}{-\sin t}=-1$ at $t=\dfrac\pi4$.

::mc
Which integral gives the area bounded by $r=f(\theta)$ for $\alpha\le\theta\le\beta$?
A. $\displaystyle\int_\alpha^\beta f(\theta)\,d\theta$
B. $\pi\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
C. $\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
D. $\dfrac12\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
::key D
The polar area formula has the factor $\dfrac12$ and $r^2$.

::tf
A particle has velocity $v(t)=\left\langle2t,3t^2\right\rangle$ and is at the origin at $t=0$.
a) Its speed at $t=1$ is $\sqrt{13}$.
b) Its acceleration at $t=1$ is $\langle2,6\rangle$.
c) Its position at $t=2$ is $\langle4,6\rangle$.
d) The distance traveled from $t=0$ to $t=1$ is $\displaystyle\int_0^1\sqrt{4t^2+9t^4}\,dt$.
::key T T F T
a) True: $\sqrt{4+9}$. b) True: $a(t)=\langle2,6t\rangle$. c) False: the position is $\left\langle t^2,t^3\right\rangle$, so $\langle4,8\rangle$. d) True: the integral of the speed.

::sa
Find the length of the path $x=3t$, $y=4t$ for $0\le t\le2$.
::key 10
Speed $\sqrt{9+16}=5$, so the length is $5\cdot2=10$.

::sa
For $x=t^2$, $y=t^3$, find $\dfrac{dy}{dx}$ at $t=4$.
::key 6
$\dfrac{3t^2}{2t}=\dfrac{3t}{2}=6$.
:::
