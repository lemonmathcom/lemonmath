---
title: Calculus: differentiation, integration, kinematics
description: IB Maths AA topic 5: derivatives, tangents and normals, stationary points, optimization, integration, area and kinematics, in Paper 1 and Paper 2 style.
minutes: 50
---

:::goals
- Differentiate with the chain, product and quotient rules.
- Find equations of tangents and normals.
- Find and classify stationary points, and solve optimization problems.
- Integrate standard functions, evaluate definite integrals and find areas.
- Solve kinematics problems: displacement, velocity, acceleration and distance.
:::

Calculus carries the largest share of marks in IB Maths AA, and it is the usual subject of the long Section B questions. A typical question starts with a function, asks for its derivative and stationary points, then an area or a volume, and often ends with a context such as motion or optimization. The rules are in the formula booklet; what earns marks is accurate algebra on Paper 1 and clearly stated setups on Paper 2.

## Differentiation rules

$$\frac{d}{dx}\big(f(g(x))\big)=f'(g(x))g'(x),\qquad(uv)'=u'v+uv',\qquad\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}.$$
Standard derivatives: $\left(x^n\right)'=nx^{n-1}$, $\left(e^x\right)'=e^x$, $(\ln x)'=\dfrac1x$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $(\tan x)'=\dfrac{1}{\cos^2x}$.

:::example Quotient rule
Let $g(x)=\dfrac{\ln x}{x}$, $x>0$.
(a) Show that $g'(x)=\dfrac{1-\ln x}{x^2}$. [3 marks]
(b) Hence find the coordinates of the maximum point of $g$. [3 marks]

**Solution.** (a) $g'(x)=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$.

(b) $g'(x)=0$ when $\ln x=1$, so $x=e$, and $g(e)=\dfrac1e$. The maximum point is $\left(e,\dfrac1e\right)$; $g'$ changes from positive to negative at $x=e$.
:::

## Tangents and normals

At $x=a$, the tangent has gradient $f'(a)$, and the **normal** is perpendicular to it, with gradient $-\dfrac{1}{f'(a)}$. Both pass through $\big(a,f(a)\big)$.

:::example Tangent and normal
Find the equations of the tangent and the normal to $y=x^3-2x$ at $x=1$. [5 marks]

**Solution.** At $x=1$: $y=-1$ and $\dfrac{dy}{dx}=3x^2-2=1$.

Tangent: $y+1=1(x-1)$, so $y=x-2$. Normal: gradient $-1$, so $y+1=-(x-1)$, that is $y=-x$.
:::

## Stationary points and optimization

Stationary points satisfy $f'(x)=0$. Classify them with the sign of $f'$ on each side, or with the second derivative: $f''(a)>0$ gives a minimum, $f''(a)<0$ a maximum. A **point of inflection** is where the concavity changes, that is where $f''$ changes sign.

:::example Stationary points of a cubic
Let $f(x)=x^3-3x^2-9x+2$. Find the coordinates of the stationary points and determine their nature. [6 marks]

**Solution.** $f'(x)=3x^2-6x-9=3(x-3)(x+1)=0$ at $x=-1$ and $x=3$. $f''(x)=6x-6$.

$f''(-1)=-12<0$: maximum at $(-1,7)$. $f''(3)=12>0$: minimum at $(3,-25)$.
:::

:::example An open box
Squares of side $x$ cm are cut from the corners of a $12$ cm by $12$ cm sheet, and the sides are folded up to make an open box.
(a) Show that the volume is $V=x(12-2x)^2$. [2 marks]
(b) Find the value of $x$ that maximizes $V$, and the maximum volume. [5 marks]

**Solution.** (a) The base is $(12-2x)$ by $(12-2x)$ and the height is $x$.

(b) $V'=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)(12-6x)$. In the domain $0<x<6$, $V'=0$ at $x=2$. $V'$ changes from positive to negative there, so the maximum volume is $V(2)=2\cdot8^2=128$ cm³.
:::

## Integration and area

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\quad\int\frac1x\,dx=\ln|x|+C,\quad\int e^x\,dx=e^x+C,$$
$$\int\cos x\,dx=\sin x+C,\quad\int\sin x\,dx=-\cos x+C.$$
The area between a curve and the $x$-axis is $\displaystyle\int_a^b|y|\,dx$; between two curves, integrate (top $-$ bottom).

:::example Area under a parabola
Find the area enclosed by $y=4x-x^2$ and the $x$-axis. [4 marks]

**Solution.** The curve meets the axis at $x=0$ and $x=4$.
$$\int_0^4\left(4x-x^2\right)dx=\left[2x^2-\frac{x^3}{3}\right]_0^4=32-\frac{64}{3}=\frac{32}{3}.$$
:::

## Kinematics

For a particle moving in a straight line: $v=\dfrac{ds}{dt}$ and $a=\dfrac{dv}{dt}$. The displacement from $t_1$ to $t_2$ is $\displaystyle\int_{t_1}^{t_2}v\,dt$, and the **distance traveled** is $\displaystyle\int_{t_1}^{t_2}|v|\,dt$; on Paper 2, the GDC evaluates the integral of $|v|$ directly.

:::example Displacement and distance
A particle moves with velocity $v(t)=6t-3t^2$ m s⁻¹ for $0\le t\le3$.
(a) Find the acceleration at $t=1$. [2 marks]
(b) Find the displacement from $t=0$ to $t=3$. [2 marks]
(c) Find the distance traveled from $t=0$ to $t=3$. [3 marks]

**Solution.** (a) $a(t)=6-6t$, so $a(1)=0$ m s⁻².

(b) $\displaystyle\int_0^3\left(6t-3t^2\right)dt=\left[3t^2-t^3\right]_0^3=27-27=0$ m: the particle ends where it started.

(c) $v$ changes sign at $t=2$. $\displaystyle\int_0^2v\,dt=12-8=4$ and $\displaystyle\int_2^3v\,dt=0-4=-4$, so the distance is $4+4=8$ m.
:::

:::warning Common traps
- **Missing the chain rule**, for example $\dfrac{d}{dx}e^{3x}=3e^{3x}$.
- **Normal gradient.** It is $-\dfrac{1}{m}$, not $-m$ or $\dfrac1m$.
- **Forgetting the domain** in optimization: discard solutions such as $x=6$ that give a box of volume $0$.
- **Negative area.** An integral is negative where the curve is below the axis; split the integral for area or distance.
- **Not justifying the nature** of a stationary point when the question asks you to "determine" or "justify".
- **Radian mode** on the GDC for trigonometric calculus.
:::

:::terms
- chain rule, product rule, quotient rule | quy tắc hàm hợp, quy tắc tích, quy tắc thương
- gradient, tangent, normal | hệ số góc, tiếp tuyến, pháp tuyến
- stationary point, point of inflection | điểm dừng, điểm uốn
- second derivative test | dấu hiệu đạo hàm cấp hai
- optimization | bài toán tối ưu
- definite integral, area | tích phân xác định, diện tích
- displacement, velocity, acceleration | độ dời, vận tốc, gia tốc
- distance traveled | quãng đường đi được
:::

## Similar exercises

:::exercise Quotient rule
Let $f(x)=\dfrac{e^x}{x+1}$, $x\ne-1$. Show that $f'(x)=\dfrac{xe^x}{(x+1)^2}$. [3 marks]

::hint
**What you need:** $u=e^x$, $v=x+1$.

::solution
$f'(x)=\dfrac{e^x(x+1)-e^x\cdot1}{(x+1)^2}=\dfrac{xe^x}{(x+1)^2}$.
:::

:::exercise Tangent to a logarithm
Find the equation of the tangent to $y=\ln(2x)$ at $x=\dfrac12$. [4 marks]

::hint
**What you need:** $\dfrac{d}{dx}\ln(2x)=\dfrac{2}{2x}=\dfrac1x$, and the point $\left(\dfrac12,0\right)$.

::solution
The gradient is $2$, so $y=2\left(x-\dfrac12\right)=2x-1$.
:::

:::exercise A stationary point that is not an extremum
Let $f(x)=x^4-4x^3$. Find the stationary points and determine their nature. [6 marks]

::hint
**What you need:** $f'(x)=4x^2(x-3)$; check the sign of $f'$ on both sides of each point.

::solution
$f'(x)=0$ at $x=0$ and $x=3$. Around $x=0$, $f'$ is negative on both sides: a stationary point of inflection at $(0,0)$. Around $x=3$, $f'$ changes from negative to positive: a minimum at $(3,-27)$.
:::

:::exercise A definite integral
Evaluate $\displaystyle\int_1^4\left(3\sqrt x-1\right)dx$. [4 marks]

::hint
**What you need:** $\displaystyle\int3x^{1/2}\,dx=2x^{3/2}$.

::solution
$\left[2x^{3/2}-x\right]_1^4=(16-4)-(2-1)=11$.
:::

:::exercise From acceleration to velocity
A particle has acceleration $a(t)=6t$ m s⁻² and initial velocity $-3$ m s⁻¹. Find when it is at rest. [4 marks]

::hint
**What you need:** $v(t)=\displaystyle\int6t\,dt=3t^2+C$ with $v(0)=-3$.

::solution
$v(t)=3t^2-3=0$ at $t=1$ s ($t\ge0$).
:::

## Application exercises

:::exercise A field against a wall
A farmer has $40$ m of fencing to make a rectangular enclosure against a long straight wall, which forms one side. Find the maximum area. [5 marks]

::hint
**What you need:** if the sides perpendicular to the wall are $x$, then $A=x(40-2x)$.

::solution
$A'=40-4x=0$ at $x=10$, and $A''=-4<0$. The maximum area is $10\cdot20=200$ m².
:::

:::exercise A can with least material
A closed cylindrical can has volume $500$ cm³. Find the radius that minimizes its surface area, and the minimum area. [6 marks]

::hint
**What you need:** $\pi r^2h=500$ gives $h=\dfrac{500}{\pi r^2}$, so $S=2\pi r^2+\dfrac{1000}{r}$.

**Steps:**
1. $S'=4\pi r-\dfrac{1000}{r^2}=0$.
2. On Paper 2, check the minimum on the graph of $S$.

::solution
$r^3=\dfrac{250}{\pi}$, so $r\approx4.30$ cm, and $S\approx349$ cm².
:::

:::exercise Between sine and cosine
Find the area enclosed by $y=\sin x$ and $y=\cos x$ for $\dfrac\pi4\le x\le\dfrac{5\pi}{4}$. [5 marks]

::hint
**What you need:** on this interval $\sin x\ge\cos x$; the curves meet at the endpoints.

::solution
$\displaystyle\int_{\pi/4}^{5\pi/4}(\sin x-\cos x)\,dx=\Big[-\cos x-\sin x\Big]_{\pi/4}^{5\pi/4}=\sqrt2-\left(-\sqrt2\right)=2\sqrt2$.
:::

:::exercise Paper 2 kinematics
A particle has velocity $v(t)=e^{0.5t}\cos t$ m s⁻¹ for $0\le t\le4$. Find its displacement and the distance traveled. [4 marks]

::hint
**What you need:** $\displaystyle\int_0^4v\,dt$ and $\displaystyle\int_0^4|v|\,dt$ on the GDC.

::solution
Displacement $\approx-6.81$ m; distance $\approx9.51$ m. The particle changes direction at $t=\dfrac\pi2$.
:::

:::quiz
::mc
What is the gradient of $y=e^{2x}$ at $x=0$?
A. $1$
B. $e^2$
C. $2$
D. $0$
::key C
$\dfrac{dy}{dx}=2e^{2x}$, which is $2$ at $x=0$.

::mc
What is $\displaystyle\int_0^13x^2\,dx$?
A. $1$
B. $3$
C. $6$
D. $\dfrac13$
::key A
$\left[x^3\right]_0^1=1$.

::mc
What is the gradient of the normal to $y=x^2$ at $x=1$?
A. $2$
B. $-2$
C. $\dfrac12$
D. $-\dfrac12$
::key D
The tangent has gradient $2$, so the normal has gradient $-\dfrac12$.

::mc
If $f'(x)=2x-4$, on which interval is $f$ decreasing?
A. $x>2$
B. $x<2$
C. $x<-2$
D. $x>4$
::key B
$f'(x)<0$ when $x<2$.

::tf
Let $f(x)=x^3-3x$.
a) $f'(1)=0$.
b) $f$ has a local minimum at $x=1$.
c) $f''(x)=6x$.
d) $f$ is increasing on $-1<x<1$.
::key T T T F
a) True: $f'(x)=3x^2-3$. b) True: $f''(1)=6>0$. c) True. d) False: $f'(x)<0$ there.

::sa
Evaluate $\displaystyle\int_1^32x\,dx$.
::key 8
$\left[x^2\right]_1^3=9-1$.

::sa
Find the maximum value of $f(x)=6x-x^2$.
::key 9
$f'(x)=6-2x=0$ at $x=3$, and $f(3)=9$.
:::
