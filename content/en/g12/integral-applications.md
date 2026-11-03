---
title: Applications of integrals: area and volume
description: Use integrals to find the area of a plane region, the volume of a solid from its cross-sections and the volume of a solid of revolution about the x-axis.
minutes: 22
---

:::goals
- Find the area of a region bounded by one graph and the $x$-axis, or by two graphs.
- Split the interval where two graphs cross to remove the absolute value.
- Find the volume of a solid from the area of its cross-sections $S(x)$.
- Find the volume of the solid of revolution formed by rotating a region about the $x$-axis.
:::

The front of a school gate is shaped like a parabola: $4$ m wide at the base and $4$ m high at the top. The whole front of the gate must be painted. What area, in square metres, needs paint?

The rectangle around the gate has area $4\cdot4=16$ m², and the triangle inside the gate has area $\dfrac12\cdot4\cdot4=8$ m². So the answer lies between $8$ and $16$. An integral gives the exact number.

## Area of a plane region

### Explore: the parabolic gate

We put the origin at the middle of the base of the gate, with the $y$-axis pointing up. The parabola passes through $(-2, 0)$ and $(2, 0)$ and has vertex $(0, 4)$, so its equation is $y=4-x^2$. The front of the gate is the region under the graph and above the $x$-axis, for $-2\le x\le2$.

:::graph The front of the gate, $y=4-x^2$
alt: A downward parabola with vertex (0, 4), crossing the horizontal axis at -2 and 2; the region between the parabola and the axis is shaded
x: -3..3
y: -1..5
plot: 4 - x^2 ; -2.3..2.3
fill: 4 - x^2 ; 0 ; -2..2
point: (0, 4) "(0, 4)" above-right
point: (-2, 0) "-2" below-left
point: (2, 0) "2" below-right
:::

The function $4-x^2$ is non-negative on $[-2, 2]$, so by the geometric meaning of the integral:

$$S=\int_{-2}^{2}(4-x^2)\,dx=\Big[4x-\frac{x^3}{3}\Big]_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=\frac{32}{3}\approx10.67.$$

It is indeed between $8$ and $16$; it is $\dfrac23$ of the area of the surrounding rectangle.

When part of a graph lies **below** the $x$-axis, the integral over that part is negative, while an area is always positive. That is why the general formula has an absolute value.

:::theorem Area of a plane region
- The region bounded by the graph of a continuous function $y=f(x)$, the $x$-axis and the lines $x=a$, $x=b$ $(a<b)$ has area
$$S=\int_a^b\lvert f(x)\rvert\,dx.$$
- The region bounded by the graphs of continuous functions $y=f(x)$, $y=g(x)$ and the lines $x=a$, $x=b$ has area
$$S=\int_a^b\lvert f(x)-g(x)\rvert\,dx.$$
:::

**Why is it true?** If $f(x)\ge g(x)$ on $[a, b]$, we translate both graphs up by the same amount $k$ so that they lie above the $x$-axis. The region does not change, and its area is the area under $f+k$ minus the area under $g+k$, that is $\displaystyle\int_a^b(f-g)\,dx$. Wherever $f<g$ the two functions swap roles, so we use $\lvert f-g\rvert$.

**Method.** Solve $f(x)-g(x)=0$ to find the crossing points in $(a, b)$. On each piece, $f-g$ keeps one sign, so $\displaystyle\int\lvert f-g\rvert\,dx=\left\lvert\int(f-g)\,dx\right\rvert$. If the lines $x=a$, $x=b$ are not given, the limits are the $x$-coordinates of the intersection points.

:::example A graph that crosses the $x$-axis
Find the area of the region bounded by the graph of $y=x^2-2x$, the $x$-axis and the lines $x=0$, $x=3$.

**Solution.** We find where the graph meets the $x$-axis: $x^2-2x=0\iff x=0$ or $x=2$. On $[0, 2]$ the graph lies below the axis, and on $[2, 3]$ above it. We split at $x=2$:

$$\int_0^2(x^2-2x)\,dx=\Big[\frac{x^3}{3}-x^2\Big]_0^2=-\frac43,\qquad\int_2^3(x^2-2x)\,dx=0-\left(-\frac43\right)=\frac43.$$

So $S=\left\lvert-\dfrac43\right\rvert+\dfrac43=\dfrac83$.

**Look back.** Evaluating $\displaystyle\int_0^3(x^2-2x)\,dx$ in one go gives $0$, because the negative and positive parts cancel.
:::

:::graph The region in the example above
alt: The parabola y equals x squared minus 2x; the part below the horizontal axis from 0 to 2 and the part above it from 2 to 3 are both shaded
x: -1..4
y: -2..4
plot: x^2 - 2x ; -0.6..3.4
fill: 0 ; x^2 - 2x ; 0..2
fill: x^2 - 2x ; 0 ; 2..3
vline: 3 ; dashed
point: (2, 0) "2" above-left
:::

When a region lies between two graphs, the limits are usually the $x$-coordinates of the intersection points.

:::example Between two graphs
Find the area of the region bounded by the parabola $y=x^2$ and the line $y=x+2$.

**Solution.** The intersection points satisfy $x^2=x+2\iff x^2-x-2=0\iff x=-1$ or $x=2$. On $(-1, 2)$ we test $x=0$: the line gives $2$ and the parabola gives $0$, so the line is on top:

$$S=\int_{-1}^{2}(x+2-x^2)\,dx=\Big[\frac{x^2}{2}+2x-\frac{x^3}{3}\Big]_{-1}^{2}=\frac{10}{3}-\left(-\frac76\right)=\frac92.$$

So the area is $\dfrac92$.
:::

:::graph The region between $y=x^2$ and $y=x+2$
alt: The parabola y equals x squared and the line y equals x plus 2 meet at (-1, 1) and (2, 4); the region between them is shaded
x: -2..3
y: -1..5
plot: x^2 ; -2..2.3
plot: x + 2
fill: x + 2 ; x^2 ; -1..2
point: (-1, 1) "(-1, 1)" left
point: (2, 4) "(2, 4)" right
:::

## Volume of a solid

Cut a solid with a plane perpendicular to the $x$-axis at the point with coordinate $x$: we get a **cross-section** of area $S(x)$. A thin slice of thickness $h$ has volume about $S(x)\cdot h$. Adding up all the slices, just as we added small rectangles to get an area, gives the following formula.

:::theorem Volume of a solid
A solid lies between the planes perpendicular to the $x$-axis at $x=a$ and $x=b$. If the cross-section at $x$ $(a\le x\le b)$ has a continuous area $S(x)$, the volume of the solid is
$$V=\int_a^b S(x)\,dx.$$
:::

:::example The volume of a pyramid
A pyramid has a square base of side $3$ and height $6$. Put the apex at the origin $O$ with the $x$-axis perpendicular to the base. The cross-section at $x$ is a square of side $\dfrac{x}{2}$ (the side grows in proportion to the distance from the apex). Find the volume of the pyramid.

**Solution.** The cross-section has area $S(x)=\left(\dfrac x2\right)^2=\dfrac{x^2}{4}$, for $0\le x\le6$:

$$V=\int_0^6\frac{x^2}{4}\,dx=\Big[\frac{x^3}{12}\Big]_0^6=\frac{216}{12}=18.$$

**Check.** The familiar formula $V=\dfrac13\cdot3^2\cdot6=18$ gives the same result.
:::

## Solids of revolution

Rotating the region bounded by $y=f(x)$, the $x$-axis, $x=a$ and $x=b$ about the $x$-axis produces a **solid of revolution**. The cross-section at $x$ is a disc of radius $\lvert f(x)\rvert$, with area $S(x)=\pi f^2(x)$. Putting this into the volume formula:

:::theorem Volume of a solid of revolution
$$V=\pi\int_a^b f^2(x)\,dx.$$
:::

:::example The volume of a sphere
Rotating the half-disc bounded by $y=\sqrt{9-x^2}$ and the $x$-axis about the $x$-axis gives a sphere of radius $3$. Find the volume of the sphere.

**Solution.** Here $f^2(x)=9-x^2$, for $-3\le x\le3$:

$$V=\pi\int_{-3}^{3}(9-x^2)\,dx=\pi\Big[9x-\frac{x^3}{3}\Big]_{-3}^{3}=\pi\big(18-(-18)\big)=36\pi.$$

**Check.** $\dfrac43\pi\cdot3^3=36\pi$, which is the formula for the volume of a sphere.
:::

The formula for solids of revolution also gives the volume of real curved objects.

:::example The capacity of a glass
The inside of a glass is the solid of revolution formed by rotating the region bounded by $y=\sqrt{2x}$, the $x$-axis and $x=8$ about the $x$-axis (units in cm; $x$ is the depth measured from the bottom of the glass). How many millilitres of water does the glass hold?

**Solution.** We have $f^2(x)=2x$ for $0\le x\le8$:

$$V=\pi\int_0^8 2x\,dx=\pi\Big[x^2\Big]_0^8=64\pi\approx201.$$

Since $1$ cm³ $=1$ ml, the glass holds about $201$ ml of water. The rim has radius $\sqrt{16}=4$ cm.
:::

:::warning Common mistakes
- **Forgetting the absolute value.** Wrong: the area bounded by $y=x^2-2x$, the $x$-axis, $x=0$ and $x=3$ is $\displaystyle\int_0^3(x^2-2x)\,dx=0$. Why it is wrong: the part below the axis gives a negative integral. Right: split at $x=2$ to get $\dfrac83$.
- **Subtracting the wrong way round with no absolute value.** Wrong: the area is $\displaystyle\int_{-1}^2\big(x^2-(x+2)\big)\,dx=-\frac92$. Why it is wrong: an area cannot be negative. Right: take the upper function minus the lower one to get $\dfrac92$.
- **Forgetting the square or the $\pi$.** Wrong: the volume of the sphere is $\pi\displaystyle\int_{-3}^3\sqrt{9-x^2}\,dx$. Why it is wrong: each cross-section is a disc of area $\pi r^2=\pi f^2(x)$. Right: $\pi\displaystyle\int_{-3}^3(9-x^2)\,dx=36\pi$.
- **Using the wrong limits.** Wrong: finding the area between $y=x^2$ and $y=x+2$ on $[0, 2]$. Why it is wrong: the region starts at the intersection point $x=-1$. Right: the limits are $-1$ and $2$.
:::

## Key terms

:::terms
- plane region | hình phẳng
- area of a region | diện tích hình phẳng
- $x$-coordinate of an intersection point | hoành độ giao điểm
- cross-section | thiết diện
- solid | vật thể
- solid of revolution | khối tròn xoay
- rotate about the $x$-axis | quay quanh trục $Ox$
- volume | thể tích
:::

## Summary

- Area: $S=\displaystyle\int_a^b\lvert f(x)\rvert\,dx$; between two graphs $S=\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$.
- Find the roots of $f-g$ to split the interval; on each piece take the absolute value of the integral.
- If $x=a$ and $x=b$ are not given, the limits are the $x$-coordinates of the intersection points.
- Volume from cross-sections: $V=\displaystyle\int_a^bS(x)\,dx$.
- Solid of revolution about the $x$-axis: $V=\pi\displaystyle\int_a^bf^2(x)\,dx$ (remember the square and the $\pi$).

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the area of the region bounded by the graph of $y=x^2+1$, the $x$-axis and the lines $x=0$, $x=3$.

::hint
**What you need:** $f(x)=x^2+1>0$, so $S=\displaystyle\int_0^3(x^2+1)\,dx$.

**Steps:**
1. Find the antiderivative $\dfrac{x^3}{3}+x$.
2. Substitute the limits.

::solution
$S=\Big[\dfrac{x^3}{3}+x\Big]_0^3=9+3=12$.

**Answer.** $12$.
:::

:::exercise
Find the area of the region bounded by the graph of $y=x^3$, the $x$-axis and the lines $x=-1$, $x=2$.

::hint
**What you need:** $x^3<0$ when $x<0$, so we must split at $x=0$.

**Steps:**
1. Evaluate $\displaystyle\int_{-1}^0x^3dx$ and $\displaystyle\int_0^2x^3dx$.
2. Take the absolute value of each part and add.

::solution
$\displaystyle\int_{-1}^0x^3dx=-\frac14$ and $\displaystyle\int_0^2x^3dx=4$. So $S=\dfrac14+4=\dfrac{17}{4}$.

**Answer.** $\dfrac{17}{4}$.
:::

:::exercise
Find the area of the region bounded by the parabola $y=x^2$ and the line $y=2x$.

::hint
**What you need:** the limits are the $x$-coordinates of the intersection points; take the upper function minus the lower one.

**Steps:**
1. Solve $x^2=2x$.
2. Test $x=1$ to see which graph is on top.

::solution
$x^2=2x\iff x=0$ or $x=2$. At $x=1$: $2x=2>1=x^2$. $S=\displaystyle\int_0^2(2x-x^2)\,dx=4-\frac83=\frac43$.

**Answer.** $\dfrac43$.
:::

:::exercise
Rotate the region bounded by the line $y=x$, the $x$-axis and the line $x=3$ about the $x$-axis. Find the volume of the solid of revolution and compare it with the formula for the volume of a cone.

::hint
**What you need:** $V=\pi\displaystyle\int_a^bf^2(x)\,dx$; a cone has volume $\dfrac13\pi r^2h$.

**Steps:**
1. Write $V=\pi\displaystyle\int_0^3x^2dx$.
2. The solid is a cone with $r=3$ and $h=3$.

::solution
$V=\pi\Big[\dfrac{x^3}{3}\Big]_0^3=9\pi$. The cone formula gives $\dfrac13\pi\cdot9\cdot3=9\pi$, the same.

**Answer.** $9\pi$.
:::

:::exercise
Let $H$ be the region bounded by the graph of $y=x^2-4$ and the $x$-axis. Is each claim true or false?

a) $H$ lies between the lines $x=-2$ and $x=2$.

b) The area of $H$ is $\displaystyle\int_{-2}^2(x^2-4)\,dx$.

c) The area of $H$ is $\dfrac{32}{3}$.

d) Rotating $H$ about the $x$-axis gives a solid of revolution of volume $\dfrac{512\pi}{15}$.

::hint
**What you need:** $x^2-4\le0$ on $[-2, 2]$; $V=\pi\displaystyle\int f^2dx$.

**Steps:**
1. Find where the graph meets the $x$-axis.
2. Find the area using $4-x^2$, then evaluate $\pi\displaystyle\int_{-2}^2(x^2-4)^2dx$.

::solution
a) **True**: $x^2-4=0\iff x=\pm2$.

b) **False**: that integral equals $-\dfrac{32}{3}<0$, so it cannot be an area.

c) **True**: $\displaystyle\int_{-2}^2(4-x^2)\,dx=\frac{32}{3}$.

d) **True**: $(x^2-4)^2=x^4-8x^2+16$, and $\pi\displaystyle\int_{-2}^2(x^4-8x^2+16)\,dx=\pi\left(\frac{64}{5}-\frac{128}{3}+64\right)=\frac{512\pi}{15}$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
Find the area of the region bounded by the parabola $y=x^2-2x$ and the line $y=x$ (give the result as a decimal).

::hint
**What you need:** the limits are the $x$-coordinates of the intersection points.

**Steps:**
1. Solve $x^2-2x=x$.
2. Evaluate $\displaystyle\int\big(x-(x^2-2x)\big)\,dx$ between the two roots.

::solution
$x^2-3x=0\iff x=0$ or $x=3$. $S=\displaystyle\int_0^3(3x-x^2)\,dx=\frac{27}{2}-9=\frac92$.

**Answer.** $4.5$.
:::

:::exercise
A window has the shape of the region bounded by the parabola $y=1.5-1.5x^2$ and the $x$-axis (units in metres): it is $2$ m wide and $1.5$ m high. The glass costs $800$ thousand đồng per square metre. Find the cost of the glass.

::hint
**What you need:** the area of the window is the integral of a non-negative function between its two crossings of the $x$-axis.

**Steps:**
1. The crossings with the $x$-axis are $x=\pm1$.
2. Evaluate $S=\displaystyle\int_{-1}^1(1.5-1.5x^2)\,dx$, then multiply by the price.

::solution
$S=\Big[1.5x-0.5x^3\Big]_{-1}^{1}=1-(-1)=2$ (m²). The glass costs $2\cdot800=1600$ thousand đồng.

**Answer.** $1\,600$ thousand đồng ($1.6$ million đồng).
:::

:::exercise
A solid lies between the planes $x=0$ and $x=4$. Its cross-section perpendicular to the $x$-axis at $x$ $(0\le x\le4)$ is a rectangle with sides $x$ and $4-x$. Find the volume of the solid.

::hint
**What you need:** $V=\displaystyle\int_a^bS(x)\,dx$.

**Steps:**
1. $S(x)=x(4-x)=4x-x^2$.
2. Evaluate $\displaystyle\int_0^4(4x-x^2)\,dx$.

::solution
$V=\Big[2x^2-\dfrac{x^3}{3}\Big]_0^4=32-\dfrac{64}{3}=\dfrac{32}{3}$.

**Answer.** $\dfrac{32}{3}$.
:::

:::exercise Review
Find the area of the region bounded by the graph of $y=\sin x$, the $x$-axis and the lines $x=0$, $x=\pi$.

::hint
**What you need:** $\sin x\ge0$ on $[0, \pi]$; integrals of trigonometric functions (see [definite integrals](lesson:definite-integrals)).

**Steps:**
1. $S=\displaystyle\int_0^{\pi}\sin x\,dx$.
2. Use the antiderivative $-\cos x$.

::solution
$S=\Big[-\cos x\Big]_0^{\pi}=1-(-1)=2$.

**Answer.** $2$.
:::

:::exercise Challenge
Find the area of the region bounded by the graphs of $y=x^3-x$ and $y=3x$.

::hint
**What you need:** the graphs cross three times, so the upper function changes.

**Steps:**
1. Solve $x^3-x=3x\iff x(x^2-4)=0$.
2. Evaluate $\displaystyle\int\lvert x^3-4x\rvert\,dx$ on $[-2, 0]$ and $[0, 2]$.

::solution
The intersections are $x=-2$, $0$, $2$. $\displaystyle\int_{-2}^0(x^3-4x)\,dx=\Big[\frac{x^4}{4}-2x^2\Big]_{-2}^0=0-(4-8)=4$; $\displaystyle\int_0^2(4x-x^3)\,dx=8-4=4$. So $S=8$.

**Answer.** $8$.
:::

## Mini test

:::quiz
::mc
Let $y=f(x)$ be continuous on $[a, b]$. The area of the region bounded by the graph of $y=f(x)$, the $x$-axis and the lines $x=a$, $x=b$ is
A. $\displaystyle\int_a^b f(x)\,dx$.
B. $\displaystyle\int_a^b\lvert f(x)\rvert\,dx$.
C. $\pi\displaystyle\int_a^b f^2(x)\,dx$.
D. $\pi\displaystyle\int_a^b\lvert f(x)\rvert\,dx$.
::key B
The part of the graph below the $x$-axis gives a negative integral, so we need $\lvert f(x)\rvert$. A is right only when $f\ge0$; C is the volume of a solid of revolution; D mixes the two formulas.

::mc
The area of the region bounded by $y=x^2$ and $y=x$ is
A. $\dfrac56$.
B. $\dfrac12$.
C. $\dfrac16$.
D. $-\dfrac16$.
::key C
The intersections are $x=0$ and $x=1$, and on $(0, 1)$, $x>x^2$: $S=\displaystyle\int_0^1(x-x^2)\,dx=\frac12-\frac13=\frac16$. A adds instead of subtracting, B only evaluates $\displaystyle\int_0^1x\,dx$, and D subtracts the wrong way round.

::mc
The region bounded by $y=\sqrt x$, the $x$-axis, $x=0$ and $x=1$ is rotated about the $x$-axis. The volume of the solid of revolution is
A. $\dfrac{\pi}{2}$.
B. $\dfrac{2\pi}{3}$.
C. $\dfrac12$.
D. $\dfrac{\pi^2}{4}$.
::key A
$V=\pi\displaystyle\int_0^1x\,dx=\frac{\pi}{2}$. B forgets the square ($\pi\displaystyle\int\sqrt x\,dx$), C forgets the $\pi$, and D squares the whole integral $\left(\pi\displaystyle\int_0^1 x\,dx\right)^2$.

::mc
A solid lies between the planes $x=0$ and $x=2$; its cross-section perpendicular to the $x$-axis at $x$ is a square of side $x$. The volume of the solid is
A. $8$.
B. $\dfrac83$.
C. $\dfrac{8\pi}{3}$.
D. $2$.
::key B
$S(x)=x^2$, so $V=\displaystyle\int_0^2x^2dx=\frac83$. A multiplies the largest cross-section by the length, C adds a $\pi$ as for a solid of revolution, and D uses the side instead of the area.

::tf
Let $H$ be the region bounded by the parabola $y=4x-x^2$ and the $x$-axis.
a) The parabola meets the $x$-axis at $x=0$ and $x=4$.
b) The area of $H$ is $\dfrac{32}{3}$.
c) Rotating $H$ about the $x$-axis gives a solid of revolution of volume $\pi\displaystyle\int_0^4(4x-x^2)\,dx$.
d) The line $x=2$ divides $H$ into two parts of equal area.
::key T T F T
a) True: $x(4-x)=0$. b) True: $\displaystyle\int_0^4(4x-x^2)\,dx=32-\frac{64}{3}=\frac{32}{3}$. c) False: the square is missing; the volume is $\pi\displaystyle\int_0^4(4x-x^2)^2dx=\frac{512\pi}{15}$. d) True: $\displaystyle\int_0^2(4x-x^2)\,dx=\frac{16}{3}$, half the area (the parabola is symmetric about $x=2$).

::sa
Find the area of the region bounded by the graphs of $y=x^3$ and $y=x$.
::key 0.5
The intersections are $x=-1$, $0$, $1$. Each part has area $\displaystyle\int_0^1(x-x^3)\,dx=\frac12-\frac14=\frac14$, a total of $\dfrac12=0.5$.

::sa
The region bounded by $y=\dfrac1x$, the $x$-axis, $x=1$ and $x=3$ is rotated about the $x$-axis. Find the volume of the solid of revolution. Give your answer to 2 decimal places.
::key 2.09
$V=\pi\displaystyle\int_1^3\frac{1}{x^2}\,dx=\pi\Big[-\frac1x\Big]_1^3=\pi\left(1-\frac13\right)=\frac{2\pi}{3}\approx2.094$, which rounds to $2.09$.
:::
