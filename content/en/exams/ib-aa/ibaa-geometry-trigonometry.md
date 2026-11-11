---
title: Geometry and trigonometry
description: IB Maths AA topic 3: volume and surface area, sine and cosine rules, radians, arcs and sectors, identities, trigonometric equations and models.
minutes: 45
---

:::goals
- Find volumes and surface areas of 3D solids, using Pythagoras where a length is missing.
- Use the sine rule, the cosine rule and the area formula, including the ambiguous case.
- Work in radians with arc length and sector area.
- Use the unit circle, exact values and identities to find trigonometric values and solve equations in a given interval.
- Model periodic situations with $y=a\sin\big(b(x-c)\big)+d$.
:::

Topic 3 mixes two kinds of questions. Paper 1 tests exact work: exact trigonometric values, identities and equations solved in an interval, with answers in terms of $\pi$. Paper 2 tests modeling: triangles in real contexts, bearings, heights, and periodic functions such as tides or a Ferris wheel. In both, a quick sketch is the first step that strong candidates never skip.

## Solids: volume and surface area

The formula booklet gives the volume and surface area of a pyramid, a cone and a sphere. The usual difficulty is a missing length, found with Pythagoras in a right triangle inside the solid.

:::example A cone
A cone has base radius $6$ cm and slant height $10$ cm. Find, in terms of $\pi$:
(a) the volume; [3 marks]
(b) the curved surface area. [2 marks]

**Solution.** (a) The height is $\sqrt{10^2-6^2}=8$ cm, so $V=\dfrac13\pi(6^2)(8)=96\pi$ cm³.

(b) $\pi rl=\pi(6)(10)=60\pi$ cm².
:::

## Triangles: sine rule, cosine rule, area

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad c^2=a^2+b^2-2ab\cos C,\qquad\text{Area}=\frac12ab\sin C.$$
Use the cosine rule when you know two sides and the angle between them (or all three sides); use the sine rule when you know a side and its opposite angle.

:::example Cosine rule and area, exactly
In triangle $ABC$, $AB=7$, $AC=9$ and $\hat A=60^\circ$.
(a) Find $BC$. [3 marks]
(b) Find the area of the triangle. [2 marks]

**Solution.** (a) $BC^2=49+81-2(7)(9)\cos60^\circ=130-63=67$, so $BC=\sqrt{67}$.

(b) $\dfrac12(7)(9)\sin60^\circ=\dfrac{63\sqrt3}{4}$.
:::

:::example The ambiguous case
In triangle $ABC$, $a=8$, $b=10$ and $\hat A=40^\circ$. Find the two possible values of $\hat B$. [4 marks]

**Solution.** $\sin B=\dfrac{10\sin40^\circ}{8}\approx0.8035$. One solution is $\hat B\approx53.5^\circ$. Since $\sin(180^\circ-B)=\sin B$, the other is $\hat B\approx126.5^\circ$, which is possible because $40^\circ+126.5^\circ<180^\circ$. Two different triangles fit the data.
:::

## Radians, arcs and sectors

$\pi$ radians $=180^\circ$. For a sector with radius $r$ and angle $\theta$ in radians: arc length $l=r\theta$ and area $A=\dfrac12r^2\theta$.

:::example A sector
A sector has radius $5$ cm and angle $1.2$ radians. Find its arc length, area and perimeter. [4 marks]

**Solution.** $l=5(1.2)=6$ cm, $A=\dfrac12(25)(1.2)=15$ cm², and the perimeter is $6+2(5)=16$ cm.
:::

## Exact values, identities and equations

:::note Identities in the formula booklet
$$\cos^2\theta+\sin^2\theta=1,\qquad\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad\sin2\theta=2\sin\theta\cos\theta,$$
$$\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta.$$
:::

:::example Using the quadrant
Given $\sin\theta=\dfrac35$ and $\dfrac\pi2<\theta<\pi$, find the exact values of $\cos\theta$ and $\sin2\theta$. [5 marks]

**Solution.** $\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}$. In the second quadrant cosine is negative, so $\cos\theta=-\dfrac45$. Then $\sin2\theta=2\left(\dfrac35\right)\left(-\dfrac45\right)=-\dfrac{24}{25}$.
:::

:::example A quadratic in cosine
Solve $2\cos^2x-\cos x-1=0$ for $0\le x\le2\pi$. [6 marks]

**Solution.** Factor: $(2\cos x+1)(\cos x-1)=0$.

$\cos x=1$ gives $x=0$ or $x=2\pi$. $\cos x=-\dfrac12$ gives $x=\dfrac{2\pi}{3}$ or $x=\dfrac{4\pi}{3}$.

All four solutions: $0$, $\dfrac{2\pi}{3}$, $\dfrac{4\pi}{3}$, $2\pi$. Check the interval at the end: the endpoints count here because the inequalities are $\le$.
:::

## Trigonometric models

For $y=a\sin\big(b(x-c)\big)+d$ (or with cosine): the **amplitude** is $|a|$, the **period** is $\dfrac{2\pi}{b}$, the **principal axis** is $y=d$, the maximum is $d+|a|$ and the minimum is $d-|a|$.

:::example A Ferris wheel
The height, in meters, of a seat on a Ferris wheel $t$ seconds after it passes the lowest point is $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$.
(a) Write down the maximum and minimum heights. [2 marks]
(b) Find the time for one full turn. [2 marks]

**Solution.** (a) Maximum $12+10=22$ meters, minimum $12-10=2$ meters.

(b) The period is $\dfrac{2\pi}{\pi/15}=30$ seconds.
:::

:::warning Common traps
- **Degree or radian mode.** Triangle questions are usually in degrees; calculus and periodic models in radians.
- **The ambiguous case.** When the sine rule gives an angle, check whether $180^\circ$ minus it is also possible.
- **Losing solutions.** Find every solution in the interval: sketch the graph or use the symmetry of the unit circle.
- **Dividing by $\sin x$** in an equation such as $\sin2x=\sin x$ loses the solutions where $\sin x=0$. Factor instead.
- **Sector formulas with degrees.** $l=r\theta$ and $A=\dfrac12r^2\theta$ need $\theta$ in radians.
:::

:::terms
- slant height, curved surface area | đường sinh, diện tích xung quanh
- sine rule, cosine rule | định lí sin, định lí cosin
- ambiguous case | trường hợp hai nghiệm
- radian, arc length, sector | radian, độ dài cung, hình quạt
- unit circle, quadrant | đường tròn đơn vị, góc phần tư
- double angle identity | công thức nhân đôi
- amplitude, period, principal axis | biên độ, chu kì, trục chính
- angle of elevation, bearing | góc nâng, phương vị
:::

## Similar exercises

:::exercise A sphere
A sphere has volume $36\pi$ cm³. Find its radius and its surface area. [4 marks]

::hint
**What you need:** $V=\dfrac43\pi r^3$ and $S=4\pi r^2$.

::solution
$\dfrac43r^3=36$, so $r^3=27$ and $r=3$ cm. $S=4\pi(9)=36\pi$ cm².
:::

:::exercise An angle from three sides
A triangle has sides $5$, $7$ and $8$. Find the angle opposite the side of length $7$. [3 marks]

::hint
**What you need:** the cosine rule rearranged: $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

::solution
$\cos C=\dfrac{25+64-49}{2(5)(8)}=\dfrac{40}{80}=\dfrac12$, so the angle is $60^\circ$.
:::

:::exercise Perimeter of a sector
A sector has radius $6$ cm and angle $\dfrac\pi3$. Find its exact perimeter. [3 marks]

::hint
**What you need:** perimeter $=2r+r\theta$.

::solution
$l=6\cdot\dfrac\pi3=2\pi$, so the perimeter is $12+2\pi$ cm.
:::

:::exercise Third quadrant
Given $\cos\theta=-\dfrac{5}{13}$ and $\pi<\theta<\dfrac{3\pi}{2}$, find the exact values of $\sin\theta$ and $\tan\theta$. [4 marks]

::hint
**What you need:** in the third quadrant sine is negative and tangent is positive.

::solution
$\sin\theta=-\sqrt{1-\dfrac{25}{169}}=-\dfrac{12}{13}$, and $\tan\theta=\dfrac{-12/13}{-5/13}=\dfrac{12}{5}$.
:::

:::exercise Factor, do not divide
Solve $\sin2x=\sin x$ for $0\le x\le\pi$. [5 marks]

::hint
**What you need:** $2\sin x\cos x-\sin x=\sin x(2\cos x-1)$.

::solution
$\sin x=0$ gives $x=0$ or $x=\pi$; $\cos x=\dfrac12$ gives $x=\dfrac\pi3$. The solutions are $0$, $\dfrac\pi3$, $\pi$.
:::

## Application exercises

:::exercise Back on the Ferris wheel
For the Ferris wheel above, $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$. Find the first time at which the seat is $17$ meters above the ground. [4 marks]

::hint
**What you need:** $\cos\left(\dfrac{\pi t}{15}\right)=-\dfrac12$, and the smallest positive solution.

::solution
$\dfrac{\pi t}{15}=\dfrac{2\pi}{3}$, so $t=10$ seconds.
:::

:::exercise Bearings
A ship sails $12$ km on a bearing of $060^\circ$, then $8$ km on a bearing of $150^\circ$. Find its distance from the starting point. [4 marks]

::hint
**What you need:** a sketch shows that the two legs meet at a right angle ($150^\circ-60^\circ=90^\circ$).

::solution
$\sqrt{12^2+8^2}=\sqrt{208}\approx14.4$ km.
:::

:::exercise Height of a tower
From a point $50$ m from the foot of a tower, on level ground, the angle of elevation of the top is $32^\circ$. Find the height of the tower. [2 marks]

::hint
**What you need:** $\tan32^\circ=\dfrac{h}{50}$.

::solution
$h=50\tan32^\circ\approx31.2$ m.
:::

:::exercise Challenge: an identity
Show that $\dfrac{1-\cos2x}{\sin2x}=\tan x$ for $\sin2x\ne0$. [4 marks]

::hint
**What you need:** $\cos2x=1-2\sin^2x$ and $\sin2x=2\sin x\cos x$.

::solution
LHS $=\dfrac{1-\left(1-2\sin^2x\right)}{2\sin x\cos x}=\dfrac{2\sin^2x}{2\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x=$ RHS.
:::

:::quiz
::mc
What is $150^\circ$ in radians?
A. $\dfrac{3\pi}{4}$
B. $\dfrac{2\pi}{3}$
C. $\dfrac{5\pi}{6}$
D. $\dfrac{5\pi}{3}$
::key C
$150\cdot\dfrac{\pi}{180}=\dfrac{5\pi}{6}$.

::mc
What is the period of $y=3\sin(4x)$?
A. $\dfrac\pi2$
B. $4\pi$
C. $\dfrac{3\pi}{2}$
D. $8\pi$
::key A
$\dfrac{2\pi}{4}=\dfrac\pi2$. The $3$ is the amplitude.

::mc
What is the exact value of $\cos\dfrac{4\pi}{3}$?
A. $\dfrac12$
B. $-\dfrac{\sqrt3}{2}$
C. $\dfrac{\sqrt3}{2}$
D. $-\dfrac12$
::key D
$\dfrac{4\pi}{3}$ is in the third quadrant, with reference angle $\dfrac\pi3$; cosine is negative there.

::mc
A triangle has two sides of lengths $8$ and $5$ with an included angle of $30^\circ$. What is its area?
A. $20$
B. $10$
C. $10\sqrt3$
D. $40$
::key B
$\dfrac12(8)(5)\sin30^\circ=10$.

::tf
Consider $y=2\cos x+1$.
a) The amplitude is $2$.
b) The minimum value is $1$.
c) The period is $\pi$.
d) The range is $-1\le y\le3$.
::key T F F T
a) True. b) False: it is $1-2=-1$. c) False: it is $2\pi$. d) True.

::sa
A sector has radius $4$ and angle $0.5$ radians. Find its area.
::key 4
$\dfrac12(16)(0.5)=4$.

::sa
Given $\sin\theta=0.6$ and $\cos\theta>0$, find $\cos\theta$.
::key 0.8
$\sqrt{1-0.36}=0.8$.
:::
