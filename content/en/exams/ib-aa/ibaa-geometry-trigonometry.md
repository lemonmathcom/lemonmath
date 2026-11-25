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

Topic 3 has two faces. Paper 1 asks for exact work: exact trigonometric values, identities and equations solved in an interval, with answers in terms of $\pi$. Paper 2 asks you to model: triangles in real contexts, bearings, heights, and periodic functions such as tides or a Ferris wheel. How do you prepare for both? Start with one habit: a quick sketch before you write anything else. Strong candidates rarely skip it.

## Solids: volume and surface area

The formula booklet already gives the volume and surface area of a pyramid, a cone and a sphere. So the hard part is usually a missing length. Look for a right triangle hidden inside the solid, then use Pythagoras to find that length. The example below does exactly this with a cone.

:::example A cone
A cone has base radius $6$ cm and slant height $10$ cm. Find, in terms of $\pi$:
(a) the volume; [3 marks]
(b) the curved surface area. [2 marks]

**Solution.** (a) The height is $\sqrt{10^2-6^2}=8$ cm, so $V=\dfrac13\pi(6^2)(8)=96\pi$ cm³.

(b) $\pi rl=\pi(6)(10)=60\pi$ cm².
:::

## Triangles: sine rule, cosine rule, area

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad c^2=a^2+b^2-2ab\cos C,\qquad\text{Area}=\frac12ab\sin C.$$
When you meet a triangle, ask first: what do I know? If you know two sides and the angle between them (or all three sides), use the cosine rule. If you know a side and the angle opposite it, use the sine rule. The reason is simple: the sine rule needs a side and its opposite angle to compare, and the cosine rule does not.

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

You already know degrees, but arc length and sector area are tidier in radians. The two are linked by one line: $\pi$ radians $=180^\circ$. For a sector with radius $r$ and angle $\theta$ in radians, the arc length is $l=r\theta$ and the area is $A=\dfrac12r^2\theta$.

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

A Ferris wheel or the tides repeat again and again, and we describe them with $y=a\sin\big(b(x-c)\big)+d$ (or with cosine). Each letter in the formula tells you one thing about the graph. The **amplitude** is $|a|$: how far the graph swings from the middle. The **period** is $\dfrac{2\pi}{b}$: how long before the graph repeats. The **principal axis** is $y=d$, the line running through the middle of the graph. From these, the maximum is $d+|a|$ and the minimum is $d-|a|$.

:::example A Ferris wheel
The height, in meters, of a seat on a Ferris wheel $t$ seconds after it passes the lowest point is $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$.
(a) Write down the maximum and minimum heights. [2 marks]
(b) Find the time for one full turn. [2 marks]

**Solution.** (a) Maximum $12+10=22$ meters, minimum $12-10=2$ meters.

(b) The period is $\dfrac{2\pi}{\pi/15}=30$ seconds.
:::

:::warning Common traps
- **Degree or radian mode.** Triangle questions are usually in degrees; calculus and periodic models are in radians. Before you press a key, check which mode your calculator is in.
- **The ambiguous case.** When the sine rule gives you an angle, ask yourself whether $180^\circ$ minus that angle also works.
- **Losing solutions.** Find every solution in the interval: sketch the graph or use the symmetry of the unit circle so that none slips away.
- **Dividing by $\sin x$** in an equation such as $\sin2x=\sin x$ loses the solutions where $\sin x=0$. Factor instead of dividing.
- **Sector formulas with degrees.** $l=r\theta$ and $A=\dfrac12r^2\theta$ work only when $\theta$ is in radians.

Many students slip on these, so it is worth pausing to check before you hand in your work. When you practise, run through this list once at the end.
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
Let $r$ (cm) be the radius of the sphere, $r>0$. Using the volume formula $V=\dfrac43\pi r^3$, we have
$$\frac43\pi r^3=36\pi.$$

Dividing both sides by $\pi$ and multiplying by $\dfrac34$, we get $r^3=36\cdot\dfrac34=27$, so $r=3$ (cm).

Using the surface area formula $S=4\pi r^2$, we have
$$S=4\pi\cdot3^2=36\pi\ \text{cm}^2.$$

So the sphere has radius $3$ cm and surface area $36\pi$ cm².

**Answer.** $r=3$ cm; $S=36\pi$ cm².
:::

:::exercise An angle from three sides
A triangle has sides $5$, $7$ and $8$. Find the angle opposite the side of length $7$. [3 marks]

::hint
**What you need:** the cosine rule rearranged: $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

::solution
Consider triangle $ABC$ with $a=BC=5$, $b=CA=8$ and $c=AB=7$. The angle opposite the side of length $7$ is angle $C$.

Using the cosine rule $c^2=a^2+b^2-2ab\cos C$, we have
$$\cos C=\frac{a^2+b^2-c^2}{2ab}=\frac{25+64-49}{2\cdot5\cdot8}=\frac{40}{80}=\frac12.$$

Since $0^\circ<C<180^\circ$ and $\cos C=\dfrac12$, we get $C=60^\circ$.

So the angle opposite the side of length $7$ is $60^\circ$.

**Answer.** $60^\circ$.
:::

:::exercise Perimeter of a sector
A sector has radius $6$ cm and angle $\dfrac\pi3$. Find its exact perimeter. [3 marks]

::hint
**What you need:** perimeter $=2r+r\theta$.

::solution
The perimeter of a sector consists of two radii and the arc length.

With angle $\theta=\dfrac\pi3$ (radians) and radius $r=6$ cm, the arc length is
$$l=r\theta=6\cdot\frac\pi3=2\pi\ \text{cm}.$$

The perimeter of the sector is
$$P=2r+l=2\cdot6+2\pi=12+2\pi\ \text{cm}.$$

So the exact perimeter of the sector is $12+2\pi$ cm.

**Answer.** $12+2\pi$ cm.
:::

:::exercise Third quadrant
Given $\cos\theta=-\dfrac{5}{13}$ and $\pi<\theta<\dfrac{3\pi}{2}$, find the exact values of $\sin\theta$ and $\tan\theta$. [4 marks]

::hint
**What you need:** in the third quadrant sine is negative and tangent is positive.

::solution
Using the identity $\sin^2\theta+\cos^2\theta=1$, we have
$$\sin^2\theta=1-\cos^2\theta=1-\frac{25}{169}=\frac{144}{169}.$$

Hence $\sin\theta=\pm\dfrac{12}{13}$.

Since $\pi<\theta<\dfrac{3\pi}{2}$, the angle $\theta$ lies in the third quadrant, where $\sin\theta<0$. Therefore
$$\sin\theta=-\sqrt{1-\frac{25}{169}}=-\frac{12}{13}.$$

We have
$$\tan\theta=\frac{\sin\theta}{\cos\theta}=\frac{-12/13}{-5/13}=\frac{12}{5}.$$

The value $\tan\theta>0$ is consistent with the third quadrant.

So $\sin\theta=-\dfrac{12}{13}$ and $\tan\theta=\dfrac{12}{5}$.

**Answer.** $\sin\theta=-\dfrac{12}{13}$; $\tan\theta=\dfrac{12}{5}$.
:::

:::exercise Factor, do not divide
Solve $\sin2x=\sin x$ for $0\le x\le\pi$. [5 marks]

::hint
**What you need:** $2\sin x\cos x-\sin x=\sin x(2\cos x-1)$.

::solution
Using the double-angle formula $\sin2x=2\sin x\cos x$, the equation becomes
$$2\sin x\cos x=\sin x.$$

Rearranging and factorising (we do not divide both sides by $\sin x$, so that no solution is lost):
$$\sin x(2\cos x-1)=0.$$

Hence $\sin x=0$ or $\cos x=\dfrac12$.

Case $\sin x=0$ with $0\le x\le\pi$: $x=0$ or $x=\pi$.

Case $\cos x=\dfrac12$ with $0\le x\le\pi$: $x=\dfrac\pi3$ (on $[0, \pi]$ the function $\cos x$ decreases from $1$ to $-1$, so there is only one solution).

So the equation has three solutions $x=0$, $x=\dfrac\pi3$, $x=\pi$ in the interval $[0, \pi]$.

**Answer.** $0$, $\dfrac\pi3$, $\pi$.
:::

## Application exercises

:::exercise Back on the Ferris wheel
For the Ferris wheel above, $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$. Find the first time at which the seat is $17$ meters above the ground. [4 marks]

::hint
**What you need:** $\cos\left(\dfrac{\pi t}{15}\right)=-\dfrac12$, and the smallest positive solution.

::solution
The seat is $17$ meters above the ground when $h(t)=17$, that is
$$12-10\cos\left(\frac{\pi t}{15}\right)=17.$$

Hence $-10\cos\left(\dfrac{\pi t}{15}\right)=5$, that is $\cos\left(\dfrac{\pi t}{15}\right)=-\dfrac12$.

Let $u=\dfrac{\pi t}{15}$. Since $t\ge0$, we have $u\ge0$. On $[0, \pi]$ the function $\cos u$ decreases from $1$ to $-1$, so exactly one value of $u$ satisfies $\cos u=-\dfrac12$, namely $u=\dfrac{2\pi}{3}$. This is the smallest $u\ge0$ that works, which corresponds to the first time.

From $\dfrac{\pi t}{15}=\dfrac{2\pi}{3}$ we get
$$t=\frac{2\pi}{3}\cdot\frac{15}{\pi}=10.$$

So the seat is first $17$ meters above the ground after $10$ seconds.

**Answer.** $t=10$ seconds.
:::

:::exercise Bearings
A ship sails $12$ km on a bearing of $060^\circ$, then $8$ km on a bearing of $150^\circ$. Find its distance from the starting point. [4 marks]

::hint
**What you need:** a sketch shows that the two legs meet at a right angle ($150^\circ-60^\circ=90^\circ$).

::solution
Let $O$ be the starting point, $A$ the position after sailing $12$ km on a bearing of $060^\circ$, and $B$ the position after sailing a further $8$ km on a bearing of $150^\circ$. We have $OA=12$ km and $AB=8$ km.

Bearings are measured clockwise from north. The direction from $A$ back to $O$ has bearing $060^\circ+180^\circ=240^\circ$, while the direction from $A$ to $B$ has bearing $150^\circ$. Hence
$$\widehat{OAB}=240^\circ-150^\circ=90^\circ.$$

Triangle $OAB$ is right-angled at $A$. By Pythagoras' theorem:
$$OB^2=OA^2+AB^2=12^2+8^2=144+64=208.$$

So $OB=\sqrt{208}\approx14.4$ km.

So the distance of the ship from the starting point is about $14.4$ km.

**Answer.** $\sqrt{208}\approx14.4$ km.
:::

:::exercise Height of a tower
From a point $50$ m from the foot of a tower, on level ground, the angle of elevation of the top is $32^\circ$. Find the height of the tower. [2 marks]

::hint
**What you need:** $\tan32^\circ=\dfrac{h}{50}$.

::solution
Let $h$ (m) be the height of the tower. The ground is level, so the tower is perpendicular to the ground; the triangle formed by the top of the tower, its foot and the observation point is right-angled, with the side adjacent to the angle of elevation equal to $50$ m and the opposite side equal to $h$.

Using the trigonometric ratio in a right-angled triangle:
$$\tan32^\circ=\frac{h}{50}.$$

Hence $h=50\tan32^\circ\approx31.2$ (m).

So the height of the tower is about $31.2$ m.

**Answer.** $h\approx31.2$ m.
:::

:::exercise Challenge: an identity
Show that $\dfrac{1-\cos2x}{\sin2x}=\tan x$ for $\sin2x\ne0$. [4 marks]

::hint
**What you need:** $\cos2x=1-2\sin^2x$ and $\sin2x=2\sin x\cos x$.

::solution
Condition: $\sin2x\ne0$. Since $\sin2x=2\sin x\cos x$, this condition is equivalent to $\sin x\ne0$ and $\cos x\ne0$; then $\tan x$ is also defined.

Consider the left-hand side (LHS). Using the double-angle formula $\cos2x=1-2\sin^2x$, we have $1-\cos2x=1-\left(1-2\sin^2x\right)=2\sin^2x$. Using $\sin2x=2\sin x\cos x$, we get
$$\text{LHS}=\frac{1-\left(1-2\sin^2x\right)}{2\sin x\cos x}=\frac{2\sin^2x}{2\sin x\cos x}.$$

Since $2\sin x\ne0$, we can cancel:
$$\text{LHS}=\frac{\sin x}{\cos x}=\tan x=\text{RHS}.$$

So $\dfrac{1-\cos2x}{\sin2x}=\tan x$ for $\sin2x\ne0$.

**Answer.** $\dfrac{1-\cos2x}{\sin2x}=\tan x$.
:::

:::quiz
::mc TH
What is $150^\circ$ in radians?
A. $\dfrac{3\pi}{4}$
B. $\dfrac{2\pi}{3}$
C. $\dfrac{5\pi}{6}$
D. $\dfrac{5\pi}{3}$
::key C
$150\cdot\dfrac{\pi}{180}=\dfrac{5\pi}{6}$.

::mc TH
What is the period of $y=3\sin(4x)$?
A. $\dfrac\pi2$
B. $4\pi$
C. $\dfrac{3\pi}{2}$
D. $8\pi$
::key A
$\dfrac{2\pi}{4}=\dfrac\pi2$. The $3$ is the amplitude.

::mc TH
What is the exact value of $\cos\dfrac{4\pi}{3}$?
A. $\dfrac12$
B. $-\dfrac{\sqrt3}{2}$
C. $\dfrac{\sqrt3}{2}$
D. $-\dfrac12$
::key D
$\dfrac{4\pi}{3}$ is in the third quadrant, with reference angle $\dfrac\pi3$; cosine is negative there.

::mc TH
A triangle has two sides of lengths $8$ and $5$ with an included angle of $30^\circ$. What is its area?
A. $20$
B. $10$
C. $10\sqrt3$
D. $40$
::key B
$\dfrac12(8)(5)\sin30^\circ=10$.

::tf NB TH TH VD
Consider $y=2\cos x+1$.
a) The amplitude is $2$.
b) The minimum value is $1$.
c) The period is $\pi$.
d) The range is $-1\le y\le3$.
::key T F F T
a) True. b) False: it is $1-2=-1$. c) False: it is $2\pi$. d) True.

::sa TH
A sector has radius $4$ and angle $0.5$ radians. Find its area.
::key 4
$\dfrac12(16)(0.5)=4$.

::sa TH
Given $\sin\theta=0.6$ and $\cos\theta>0$, find $\cos\theta$.
::key 0.8
$\sqrt{1-0.36}=0.8$.
:::
