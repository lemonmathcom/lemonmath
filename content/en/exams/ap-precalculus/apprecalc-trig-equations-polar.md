---
title: Trigonometric equations and polar functions
description: AP Precalculus Unit 3, part 2: inverse trig functions, solving trig equations and inequalities, identities, and polar coordinates and graphs.
minutes: 50
---

:::goals
- Evaluate inverse trigonometric functions and know their restricted ranges.
- Solve trigonometric equations and inequalities on a given interval, finding every solution.
- Use the Pythagorean, sum and double-angle identities to rewrite expressions and solve equations.
- Convert between polar and rectangular coordinates.
- Read a polar graph $r=f(\theta)$: where $r$ increases or decreases, and what that means for the distance from the origin.
:::

The second half of Unit 3 turns the periodic functions of the previous lesson into tools: inverse functions to undo them, identities to rewrite them, and equations to solve with them. It ends with polar coordinates, where a function describes distance from the origin as the angle turns. FRQ 4 (Symbolic Manipulations) often draws on the identities and equations here.

## Inverse trigonometric functions

A periodic function is not one-to-one, so to define an inverse we restrict the domain:

| Function | Input | Output (range) |
|---|---|---|
| $\arcsin x=\sin^{-1}x$ | $-1\le x\le1$ | $-\dfrac\pi2\le y\le\dfrac\pi2$ |
| $\arccos x=\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $\arctan x=\tan^{-1}x$ | all real $x$ | $-\dfrac\pi2<y<\dfrac\pi2$ |

The calculator returns only this one value; the other solutions of an equation come from symmetry and periodicity. The reciprocal functions are $\sec x=\dfrac{1}{\cos x}$, $\csc x=\dfrac{1}{\sin x}$ and $\cot x=\dfrac{1}{\tan x}$.

:::example Inverse values
The value of $\arccos\left(-\dfrac12\right)$ is
A. $-\dfrac\pi3$
B. $\dfrac{4\pi}{3}$
C. $\dfrac{\pi}{3}$
D. $\dfrac{2\pi}{3}$

**Solution.** We need the angle in $[0,\pi]$ whose cosine is $-\dfrac12$.

Since $\cos\dfrac\pi3=\dfrac12$ and cosine is negative in quadrant II, the angle is $\pi-\dfrac\pi3=\dfrac{2\pi}{3}$.

So $\arccos\left(-\dfrac12\right)=\dfrac{2\pi}{3}$, answer **D**. Option B also has cosine $-\dfrac12$, but it is outside the range $[0,\pi]$.
:::

## Solving trigonometric equations

1. Isolate the trigonometric function, or factor; a quadratic in $\sin x$ or $\cos x$ factors like any quadratic.
2. Find the reference angle, then every angle in the interval with the right sign.
3. If the argument is $bx$, solve for $bx$ over the stretched interval first.

For an **inequality**, solve the matching equation and test the intervals between solutions, or read them from the graph or unit circle.

:::example A quadratic in cosine
How many solutions does $2\cos^2x-\cos x-1=0$ have on $[0,2\pi)$?
A. $2$
B. $3$
C. $4$
D. $1$

**Solution.** Treat the equation as a quadratic in $\cos x$ and factor: $(2\cos x+1)(\cos x-1)=0$.

Hence $\cos x=-\dfrac12$, giving $x=\dfrac{2\pi}{3}$ or $x=\dfrac{4\pi}{3}$, or $\cos x=1$, giving $x=0$.

So there are $3$ solutions, $0$, $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$, answer **B**.
:::

## Identities

| Identity | Formula |
|---|---|
| Pythagorean | $\sin^2x+\cos^2x=1$, $\ 1+\tan^2x=\sec^2x$ |
| Sum | $\sin(a+b)=\sin a\cos b+\cos a\sin b$ |
| | $\cos(a+b)=\cos a\cos b-\sin a\sin b$ |
| Double angle | $\sin2x=2\sin x\cos x$, $\ \cos2x=\cos^2x-\sin^2x=2\cos^2x-1$ |

:::example Using a double-angle identity
Solve $\sin2x=\sin x$ on $[0,2\pi)$.

**Solution.** Using $\sin2x=2\sin x\cos x$, the equation becomes $2\sin x\cos x-\sin x=0$, that is $\sin x\,(2\cos x-1)=0$.

If $\sin x=0$, then $x=0$ or $x=\pi$. If $\cos x=\dfrac12$, then $x=\dfrac\pi3$ or $x=\dfrac{5\pi}{3}$.

Do not divide both sides by $\sin x$: that would lose the solutions $0$ and $\pi$.

So the solutions are $x=0$, $\dfrac\pi3$, $\pi$ and $\dfrac{5\pi}{3}$.
:::

## Polar coordinates and polar graphs

A point with polar coordinates $(r,\theta)$ has rectangular coordinates
$$x=r\cos\theta,\qquad y=r\sin\theta,$$
and conversely $r^2=x^2+y^2$ and $\tan\theta=\dfrac yx$, with $\theta$ chosen in the correct quadrant.

The graph of $r=f(\theta)$ shows how the distance from the origin changes as the angle turns. When $r>0$ and $r$ is increasing, the points move **away** from the origin; when $r>0$ and $r$ is decreasing, they move **toward** it. The average rate of change of $r$ on $[\alpha,\beta]$ is $\dfrac{f(\beta)-f(\alpha)}{\beta-\alpha}$.

:::graph The polar graph $r=2+2\cos\theta$
alt: A heart-shaped curve, a cardioid, that touches the origin on the left and reaches farthest right at the point (4, 0); it passes through (0, 2) and (0, -2)
x: -1..5
y: -3..3
shape: equal
segment: (4.0, 0.0) (3.967, 0.417)
segment: (3.967, 0.417) (3.87, 0.823)
segment: (3.87, 0.823) (3.711, 1.206)
segment: (3.711, 1.206) (3.496, 1.557)
segment: (3.496, 1.557) (3.232, 1.866)
segment: (3.232, 1.866) (2.927, 2.127)
segment: (2.927, 2.127) (2.591, 2.333)
segment: (2.591, 2.333) (2.234, 2.481)
segment: (2.234, 2.481) (1.867, 2.569)
segment: (1.867, 2.569) (1.5, 2.598)
segment: (1.5, 2.598) (1.144, 2.57)
segment: (1.144, 2.57) (0.809, 2.49)
segment: (0.809, 2.49) (0.502, 2.363)
segment: (0.502, 2.363) (0.231, 2.197)
segment: (0.231, 2.197) (0.0, 2.0)
segment: (0.0, 2.0) (-0.187, 1.781)
segment: (-0.187, 1.781) (-0.329, 1.55)
segment: (-0.329, 1.55) (-0.427, 1.314)
segment: (-0.427, 1.314) (-0.483, 1.084)
segment: (-0.483, 1.084) (-0.5, 0.866)
segment: (-0.5, 0.866) (-0.485, 0.667)
segment: (-0.485, 0.667) (-0.443, 0.492)
segment: (-0.443, 0.492) (-0.382, 0.344)
segment: (-0.382, 0.344) (-0.309, 0.225)
segment: (-0.309, 0.225) (-0.232, 0.134)
segment: (-0.232, 0.134) (-0.158, 0.07)
segment: (-0.158, 0.07) (-0.093, 0.03)
segment: (-0.093, 0.03) (-0.043, 0.009)
segment: (-0.043, 0.009) (-0.011, 0.001)
segment: (-0.011, 0.001) (-0.0, 0.0)
segment: (-0.0, 0.0) (-0.011, -0.001)
segment: (-0.011, -0.001) (-0.043, -0.009)
segment: (-0.043, -0.009) (-0.093, -0.03)
segment: (-0.093, -0.03) (-0.158, -0.07)
segment: (-0.158, -0.07) (-0.232, -0.134)
segment: (-0.232, -0.134) (-0.309, -0.225)
segment: (-0.309, -0.225) (-0.382, -0.344)
segment: (-0.382, -0.344) (-0.443, -0.492)
segment: (-0.443, -0.492) (-0.485, -0.667)
segment: (-0.485, -0.667) (-0.5, -0.866)
segment: (-0.5, -0.866) (-0.483, -1.084)
segment: (-0.483, -1.084) (-0.427, -1.314)
segment: (-0.427, -1.314) (-0.329, -1.55)
segment: (-0.329, -1.55) (-0.187, -1.781)
segment: (-0.187, -1.781) (-0.0, -2.0)
segment: (-0.0, -2.0) (0.231, -2.197)
segment: (0.231, -2.197) (0.502, -2.363)
segment: (0.502, -2.363) (0.809, -2.49)
segment: (0.809, -2.49) (1.144, -2.57)
segment: (1.144, -2.57) (1.5, -2.598)
segment: (1.5, -2.598) (1.867, -2.569)
segment: (1.867, -2.569) (2.234, -2.481)
segment: (2.234, -2.481) (2.591, -2.333)
segment: (2.591, -2.333) (2.927, -2.127)
segment: (2.927, -2.127) (3.232, -1.866)
segment: (3.232, -1.866) (3.496, -1.557)
segment: (3.496, -1.557) (3.711, -1.206)
segment: (3.711, -1.206) (3.87, -0.823)
segment: (3.87, -0.823) (3.967, -0.417)
segment: (3.967, -0.417) (4.0, -0.0)
point: (4, 0) "(4, 0)" below-right
point: (0, 2) "(0, 2)" above-right
point: (0, -2) "(0, -2)" below-right
:::

:::example Converting coordinates
The point with polar coordinates $\left(4,\dfrac{5\pi}{6}\right)$ has rectangular coordinates
A. $\left(-2\sqrt3,2\right)$
B. $\left(2,-2\sqrt3\right)$
C. $\left(2\sqrt3,-2\right)$
D. $\left(-2,2\sqrt3\right)$

**Solution.** By the conversion formulas, $x=4\cos\dfrac{5\pi}{6}=4\cdot\left(-\dfrac{\sqrt3}{2}\right)=-2\sqrt3$ and $y=4\sin\dfrac{5\pi}{6}=4\cdot\dfrac12=2$.

So the point is $\left(-2\sqrt3,2\right)$, answer **A**. Option D uses the angle $\dfrac{2\pi}3$ instead.
:::

:::example Reading a polar graph
For $r=2+2\cos\theta$, which statement describes the points on the graph for $0<\theta<\dfrac\pi2$?
A. $r$ is increasing, so the points move away from the origin.
B. $r$ is negative, so the points are in quadrant III.
C. $r$ is decreasing and positive, so the points move toward the origin.
D. $r$ is constant, so the points lie on a circle.

**Solution.** On $\left(0,\dfrac\pi2\right)$, $\cos\theta$ decreases from $1$ to $0$, so $r$ decreases from $4$ to $2$ and stays positive.

A positive, decreasing $r$ means the distance from the origin is shrinking. The average rate of change on $\left[0,\dfrac\pi2\right]$ is $\dfrac{2-4}{\pi/2}=-\dfrac4\pi$.

So the points move toward the origin, answer **C**.
:::

:::warning Common traps
- **Missing solutions:** the calculator gives one angle; find every solution in the interval by symmetry.
- **Dividing by a trigonometric function:** factor instead, or solutions disappear.
- **Stretched arguments:** for $\sin3x=\dfrac12$ on $[0,2\pi)$, solve for $3x$ on $[0,6\pi)$ first: six solutions, not two.
- **Inverse ranges:** $\arccos$ gives values in $[0,\pi]$, $\arcsin$ in $\left[-\dfrac\pi2,\dfrac\pi2\right]$.
- **Polar quadrant:** $\tan\theta=\dfrac yx$ alone cannot tell $(1,1)$ from $(-1,-1)$.
:::

:::terms
- inverse trigonometric function | hàm lượng giác ngược
- restricted domain | tập xác định bị hạn chế
- identity | đồng nhất thức
- double-angle formula | công thức nhân đôi
- secant / cosecant / cotangent | sec / cosec / cot
- polar coordinates | toạ độ cực
- polar graph | đồ thị trong toạ độ cực
- distance from the origin | khoảng cách đến gốc toạ độ
:::

## Similar exercises

:::exercise
Find the exact values of $\arcsin\left(-\dfrac{\sqrt2}{2}\right)$ and $\arctan\sqrt3$.

::hint
**What you need:** the ranges $\left[-\dfrac\pi2,\dfrac\pi2\right]$ for $\arcsin$ and $\left(-\dfrac\pi2,\dfrac\pi2\right)$ for $\arctan$.

::solution
We need the angle in $\left[-\dfrac\pi2,\dfrac\pi2\right]$ with sine $-\dfrac{\sqrt2}{2}$. Since $\sin\dfrac\pi4=\dfrac{\sqrt2}2$ and sine is odd, the angle is $-\dfrac\pi4$.

For $\arctan\sqrt3$ we need the angle in $\left(-\dfrac\pi2,\dfrac\pi2\right)$ with tangent $\sqrt3$, which is $\dfrac\pi3$.

So $\arcsin\left(-\dfrac{\sqrt2}{2}\right)=-\dfrac\pi4$ and $\arctan\sqrt3=\dfrac\pi3$.

**Answer.** $-\dfrac\pi4$ and $\dfrac\pi3$.
:::

:::exercise
Solve $2\cos x+\sqrt3=0$ on $[0,2\pi)$.

::hint
**What you need:** $\cos x=-\dfrac{\sqrt3}{2}$, with cosine negative in quadrants II and III.

::solution
Isolating the cosine gives $\cos x=-\dfrac{\sqrt3}{2}$. The reference angle is $\dfrac\pi6$, because $\cos\dfrac\pi6=\dfrac{\sqrt3}{2}$.

Cosine is negative in quadrants II and III, so $x=\pi-\dfrac\pi6=\dfrac{5\pi}{6}$ or $x=\pi+\dfrac\pi6=\dfrac{7\pi}{6}$.

So the solutions are $x=\dfrac{5\pi}6$ and $x=\dfrac{7\pi}6$.

**Answer.** $\dfrac{5\pi}6$, $\dfrac{7\pi}6$.
:::

:::exercise
Solve $2\sin^2x=\sin x$ on $[0,2\pi)$.

::hint
**What you need:** move everything to one side and factor out $\sin x$.

::solution
Moving everything to one side and factoring gives $\sin x\,(2\sin x-1)=0$.

If $\sin x=0$, then $x=0$ or $x=\pi$. If $\sin x=\dfrac12$, then $x=\dfrac\pi6$ or $x=\dfrac{5\pi}{6}$.

So the solutions are $x=0$, $\dfrac\pi6$, $\dfrac{5\pi}6$ and $\pi$.

**Answer.** $0,\ \dfrac\pi6,\ \dfrac{5\pi}6,\ \pi$.
:::

:::exercise
Use a sum identity to find the exact value of $\sin\dfrac{5\pi}{12}$.

::hint
**What you need:** $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$.

::solution
Since $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$, the sum identity gives
$$\sin\frac{5\pi}{12}=\sin\frac\pi4\cos\frac\pi6+\cos\frac\pi4\sin\frac\pi6=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\cdot\frac12.$$

Adding the fractions gives $\dfrac{\sqrt6+\sqrt2}{4}\approx0.966$.

So $\sin\dfrac{5\pi}{12}=\dfrac{\sqrt6+\sqrt2}{4}$.

**Answer.** $\dfrac{\sqrt6+\sqrt2}{4}$.
:::

:::exercise
Convert the rectangular point $\left(-1,\sqrt3\right)$ to polar coordinates with $r>0$ and $0\le\theta<2\pi$.

::hint
**What you need:** $r=\sqrt{x^2+y^2}$; the point is in quadrant II.

::solution
The distance from the origin is $r=\sqrt{(-1)^2+\left(\sqrt3\right)^2}=\sqrt4=2$.

Then $\cos\theta=-\dfrac12$ and $\sin\theta=\dfrac{\sqrt3}{2}$, so $\theta$ is in quadrant II and $\theta=\dfrac{2\pi}{3}$.

So the polar coordinates are $\left(2,\dfrac{2\pi}{3}\right)$.

**Answer.** $\left(2,\dfrac{2\pi}3\right)$.
:::

## Applied exercises

:::exercise
A Ferris wheel rider's height is $h(t)=16-14\cos\dfrac{\pi t}{20}$ metres after $t$ seconds. During the first turn, $0\le t\le40$, for how long is the rider higher than $23$ m?

::hint
**What you need:** solve the inequality $\cos\dfrac{\pi t}{20}<-\dfrac12$ on one period.

::solution
The condition $h(t)>23$ means $-14\cos\dfrac{\pi t}{20}>7$, that is $\cos\dfrac{\pi t}{20}<-\dfrac12$.

On one turn the angle $\dfrac{\pi t}{20}$ runs from $0$ to $2\pi$, and cosine is less than $-\dfrac12$ exactly when $\dfrac{2\pi}{3}<\dfrac{\pi t}{20}<\dfrac{4\pi}{3}$, so $\dfrac{40}{3}<t<\dfrac{80}{3}$.

The length of this interval is $\dfrac{80}{3}-\dfrac{40}{3}=\dfrac{40}{3}\approx13.3$.

So the rider is above $23$ m for about $13.3$ seconds of each turn.

**Answer.** $\dfrac{40}{3}\approx13.3$ seconds.
:::

:::exercise
Use a calculator to find all solutions of $\tan x=3$ on $[0,2\pi)$, to three decimal places.

::hint
**What you need:** the period of tangent is $\pi$.

::solution
The calculator gives $\arctan3\approx1.249$, which lies in $[0,2\pi)$.

Tangent has period $\pi$, so the other solution is $1.249+\pi\approx4.391$; adding $\pi$ again leaves the interval.

So the solutions are $x\approx1.249$ and $x\approx4.391$.

**Answer.** $x\approx1.249$, $x\approx4.391$.
:::

:::exercise
For the polar function $r=3+2\sin\theta$, find the greatest and least distances from the origin, and state whether the points move toward or away from the origin for $\dfrac\pi2<\theta<\pi$.

::hint
**What you need:** $r$ is largest when $\sin\theta=1$ and smallest when $\sin\theta=-1$.

::solution
Since $-1\le\sin\theta\le1$, the distance $r$ is between $3-2=1$ and $3+2=5$: the greatest distance $5$ occurs at $\theta=\dfrac\pi2$ and the least distance $1$ at $\theta=\dfrac{3\pi}{2}$.

On $\left(\dfrac\pi2,\pi\right)$, $\sin\theta$ decreases from $1$ to $0$, so $r$ decreases from $5$ to $3$ and stays positive.

So the greatest distance is $5$, the least is $1$, and on that interval the points move toward the origin.

**Answer.** $5$ and $1$; toward the origin.
:::

:::exercise Challenge
Solve $\cos2x+\cos x=0$ on $[0,2\pi)$.

::hint
**What you need:** replace $\cos2x$ by $2\cos^2x-1$ to get a quadratic in $\cos x$.

::solution
Using $\cos2x=2\cos^2x-1$, the equation becomes $2\cos^2x+\cos x-1=0$, which factors as $(2\cos x-1)(\cos x+1)=0$.

If $\cos x=\dfrac12$, then $x=\dfrac\pi3$ or $x=\dfrac{5\pi}{3}$. If $\cos x=-1$, then $x=\pi$.

So the solutions are $x=\dfrac\pi3$, $\pi$ and $\dfrac{5\pi}{3}$.

**Answer.** $\dfrac\pi3,\ \pi,\ \dfrac{5\pi}3$.
:::

:::quiz
::mc
The value of $\arcsin\dfrac12$ is
A. $\dfrac\pi3$
B. $\dfrac{5\pi}{6}$
C. $\dfrac\pi6$
D. $\dfrac\pi4$
::key C
$\sin\dfrac\pi6=\dfrac12$ and $\dfrac\pi6$ is in the range of $\arcsin$.

::mc
How many solutions does $\sin x=0.3$ have on $[0,2\pi)$?
A. $2$
B. $1$
C. $0$
D. $4$
::key A
One in quadrant I and one in quadrant II.

::mc
The value of $\sec\dfrac\pi3$ is
A. $\dfrac12$
B. $\dfrac{2}{\sqrt3}$
C. $\sqrt3$
D. $2$
::key D
$\sec\dfrac\pi3=\dfrac{1}{\cos(\pi/3)}=2$.

::mc
The polar point $(2,\pi)$ has rectangular coordinates
A. $(2,0)$
B. $(-2,0)$
C. $(0,2)$
D. $(0,-2)$
::key B
$x=2\cos\pi=-2$ and $y=2\sin\pi=0$.

::tf
Consider the polar function $r=2\cos\theta$. Decide whether each statement is true or false.
a) $r=2$ when $\theta=0$.
b) $r=0$ when $\theta=\dfrac\pi2$.
c) $r$ is increasing on $0<\theta<\dfrac\pi2$.
d) The graph passes through the origin.
::key T T F T
On $\left(0,\dfrac\pi2\right)$, $\cos\theta$ decreases, so $r$ decreases.

::sa
How many solutions does $2\cos x=1$ have on $[0,2\pi)$?
::key 2
$x=\dfrac\pi3$ and $x=\dfrac{5\pi}3$.

::sa
Find $r>0$ for the rectangular point $(3,4)$.
::key 5
$r=\sqrt{9+16}=5$.
:::
