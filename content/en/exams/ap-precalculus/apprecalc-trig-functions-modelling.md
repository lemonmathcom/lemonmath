---
title: Trigonometric functions and periodic models
description: AP Precalculus Unit 3, part 1: the unit circle, sine and cosine graphs, amplitude, period, midline and phase shift, tangent, and sinusoidal models.
minutes: 50
---

:::goals
- Use the unit circle to find sine and cosine values and coordinates on any circle.
- Read amplitude, period, midline and phase shift from $y=a\sin\big(b(x-h)\big)+k$ or the cosine form, and from a graph.
- Describe the graph of $y=\tan x$: period, asymptotes and zeros.
- Build a sinusoidal model from a description of a periodic situation and use it to answer questions.
:::

Unit 3 is about change that repeats. Its central tool is the sinusoidal function, which describes Ferris wheels, tides, daily temperatures and anything else that rises and falls on a regular cycle. On the exam, FRQ 3 (Modeling Periodic Contexts) is built entirely from this lesson, so it rewards careful practice.

## The unit circle

An angle $\theta$ in standard position meets the unit circle at the point $(\cos\theta,\sin\theta)$. On a circle of radius $r$ centred at the origin the point is $(r\cos\theta,r\sin\theta)$. The values to know by heart:

| $\theta$ | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |

Other angles follow by symmetry, with signs set by the quadrant: in quadrant II sine is positive and cosine negative.

:::example A point on a circle
An angle of $\dfrac{2\pi}{3}$ in standard position meets the circle of radius $4$ centred at the origin at
A. $\left(2,2\sqrt3\right)$
B. $\left(-2\sqrt3,2\right)$
C. $\left(-2,2\sqrt3\right)$
D. $\left(-2,-2\sqrt3\right)$

**Solution.** The angle $\dfrac{2\pi}{3}$ lies in quadrant II with reference angle $\dfrac\pi3$, so $\cos\dfrac{2\pi}{3}=-\dfrac12$ and $\sin\dfrac{2\pi}{3}=\dfrac{\sqrt3}{2}$.

The point is therefore $\left(4\cdot\left(-\tfrac12\right),\,4\cdot\tfrac{\sqrt3}{2}\right)=\left(-2,2\sqrt3\right)$.

So the point is $\left(-2,2\sqrt3\right)$, answer **C**. Option B swaps sine and cosine.
:::

## Sinusoidal graphs

For $y=a\sin\big(b(x-h)\big)+k$ or $y=a\cos\big(b(x-h)\big)+k$ with $b>0$:

| Feature | Value |
|---|---|
| Amplitude | $\lvert a\rvert$ |
| Period | $\dfrac{2\pi}{b}$ |
| Midline | $y=k$ |
| Maximum, minimum | $k+\lvert a\rvert$, $k-\lvert a\rvert$ |
| Phase shift | $h$ units to the right |

:::graph The graph of $y=3\cos\big(2(x-\tfrac\pi4)\big)-1$
alt: A wave between a minimum of -4 and a maximum of 2 around a dashed midline y = -1, with a maximum at x about 0.79 and period about 3.14
x: -1..7
y: -5..3
plot: 3*cos(2*(x-pi/4))-1 ; -1..7
hline: -1 ; dashed
point: (0.785, 2) "max" above
point: (2.356, -4) "min" below
:::

:::example Reading the features
For $y=3\cos\big(2(x-\tfrac\pi4)\big)-1$, which statement is correct?
A. The amplitude is $3$ and the period is $\pi$.
B. The amplitude is $3$ and the period is $4\pi$.
C. The midline is $y=1$ and the maximum is $4$.
D. The minimum is $-3$ and the period is $2\pi$.

**Solution.** Here $a=3$, $b=2$, $h=\dfrac\pi4$ and $k=-1$.

The amplitude is $3$, the period is $\dfrac{2\pi}{2}=\pi$, and the midline is $y=-1$, so the maximum is $-1+3=2$ and the minimum is $-1-3=-4$. A maximum occurs at $x=\dfrac\pi4$, where the cosine argument is $0$.

So statement A is correct, answer **A**. Option B uses $2\pi\cdot2$ instead of $\dfrac{2\pi}{2}$.
:::

## The tangent function

Since $\tan x=\dfrac{\sin x}{\cos x}$, the tangent is undefined where $\cos x=0$, giving vertical asymptotes at $x=\dfrac\pi2+k\pi$. Its zeros are at $x=k\pi$, it increases between asymptotes, and its period is $\pi$ (not $2\pi$). For $y=\tan(bx)$ the period is $\dfrac\pi b$.

## Building sinusoidal models

To model a periodic situation:
1. **Midline** $k=\dfrac{\max+\min}{2}$, **amplitude** $\lvert a\rvert=\dfrac{\max-\min}{2}$.
2. **Period** from the context, then $b=\dfrac{2\pi}{\text{period}}$.
3. **Starting point:** cosine starts at a maximum, $-\cos$ at a minimum, sine on the midline going up. Choose $h$ to match.

:::example A Ferris wheel
A Ferris wheel has radius $14$ m, its centre is $16$ m above the ground, and it turns once every $40$ seconds. A rider boards at the lowest point at $t=0$. Which function gives the rider's height in metres after $t$ seconds?
A. $h(t)=14-16\cos\dfrac{\pi t}{20}$
B. $h(t)=16-14\cos\dfrac{\pi t}{20}$
C. $h(t)=16+14\cos\dfrac{\pi t}{20}$
D. $h(t)=16-14\cos\dfrac{\pi t}{40}$

**Solution.** The midline is the centre height, $16$, and the amplitude is the radius, $14$. The period is $40$, so $b=\dfrac{2\pi}{40}=\dfrac{\pi}{20}$.

At $t=0$ the rider is at the minimum, so the model starts with $-\cos$: $h(t)=16-14\cos\dfrac{\pi t}{20}$. Check: $h(0)=16-14=2$ m, the lowest point.

So the model is $h(t)=16-14\cos\dfrac{\pi t}{20}$, answer **B**. Option C starts at the top, and option D has period $80$ s.
:::

:::example A tide model
At a harbour, high tide of $3.8$ m occurs at $2$ a.m. and the next low tide of $0.6$ m occurs $6.25$ hours later. Write a model for the water depth $D$ in metres, $t$ hours after midnight.

**Solution.** The midline is $\dfrac{3.8+0.6}{2}=2.2$ and the amplitude is $\dfrac{3.8-0.6}{2}=1.6$.

High to low tide is half a cycle, so the period is $2\times6.25=12.5$ hours and $b=\dfrac{2\pi}{12.5}$.

The depth is at a maximum at $t=2$, so a cosine shifted $2$ units right fits:
$$D(t)=2.2+1.6\cos\frac{2\pi(t-2)}{12.5}.$$

So $D(t)=2.2+1.6\cos\dfrac{2\pi(t-2)}{12.5}$. Check: $D(2)=3.8$ and $D(8.25)=2.2-1.6=0.6$.
:::

:::warning Common traps
- **Period:** it is $\dfrac{2\pi}{b}$, not $2\pi b$; for tangent it is $\dfrac{\pi}{b}$.
- **Phase shift:** in $\cos(2x-\pi)$, factor first: $\cos\big(2(x-\tfrac\pi2)\big)$, so the shift is $\dfrac\pi2$, not $\pi$.
- **Radians:** set the calculator to radian mode.
- **Start of the model:** at a minimum use $-\cos$; at a maximum use $\cos$.
- **Half a cycle:** maximum to the next minimum is half the period.
:::

:::terms
- unit circle | đường tròn lượng giác
- reference angle | góc tham chiếu
- amplitude | biên độ
- period | chu kì
- midline | đường trung bình
- phase shift | độ dịch pha
- sinusoidal function | hàm dạng sin
- vertical asymptote | tiệm cận đứng
:::

## Similar exercises

:::exercise
Find the coordinates of the point where an angle of $\dfrac\pi6$ in standard position meets the circle of radius $10$ centred at the origin.

::hint
**What you need:** the point is $(r\cos\theta,r\sin\theta)$.

::solution
The point at angle $\theta$ on a circle of radius $r$ is $(r\cos\theta,r\sin\theta)$. With $r=10$ and $\theta=\dfrac\pi6$, the coordinates are $\left(10\cos\dfrac\pi6,\,10\sin\dfrac\pi6\right)$.

Since $\cos\dfrac\pi6=\dfrac{\sqrt3}{2}$ and $\sin\dfrac\pi6=\dfrac12$, the point is $\left(5\sqrt3,5\right)$.

So the point is $\left(5\sqrt3,5\right)\approx(8.66,5)$.

**Answer.** $\left(5\sqrt3,5\right)$.
:::

:::exercise
State the amplitude, period, midline and range of $y=-2\sin\dfrac{\pi x}{3}+5$.

::hint
**What you need:** amplitude $\lvert a\rvert$, period $\dfrac{2\pi}{b}$, midline $y=k$.

::solution
Here $a=-2$, $b=\dfrac\pi3$ and $k=5$.

The amplitude is $\lvert-2\rvert=2$, the period is $\dfrac{2\pi}{\pi/3}=6$, and the midline is $y=5$.

The values vary between $5-2=3$ and $5+2=7$, so the range is $[3,7]$.

So the amplitude is $2$, the period $6$, the midline $y=5$ and the range $[3,7]$.

**Answer.** $2$; $6$; $y=5$; $[3,7]$.
:::

:::exercise
Find the period and the vertical asymptotes of $y=\tan3x$ for $0<x<\pi$.

::hint
**What you need:** the period of $\tan bx$ is $\dfrac\pi b$; asymptotes where $3x=\dfrac\pi2+k\pi$.

::solution
The period is $\dfrac\pi3$.

Asymptotes occur where $3x=\dfrac\pi2+k\pi$, that is $x=\dfrac\pi6+\dfrac{k\pi}{3}$. In $0<x<\pi$ these are $x=\dfrac\pi6$, $\dfrac\pi2$ and $\dfrac{5\pi}{6}$.

So the period is $\dfrac\pi3$ and the asymptotes are $x=\dfrac\pi6$, $x=\dfrac\pi2$, $x=\dfrac{5\pi}6$.

**Answer.** Period $\dfrac\pi3$; $x=\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6$.
:::

:::exercise
A sinusoidal function has a maximum at $(1,9)$ and the next minimum at $(4,1)$. Write it in the form $y=a\cos\big(b(x-h)\big)+k$.

::hint
**What you need:** maximum to minimum is half a period; a cosine starts at a maximum.

::solution
The midline is $k=\dfrac{9+1}{2}=5$ and the amplitude is $a=\dfrac{9-1}{2}=4$.

Half a period is $4-1=3$, so the period is $6$ and $b=\dfrac{2\pi}{6}=\dfrac\pi3$.

A maximum occurs at $x=1$, so $h=1$ with a positive cosine.

So $y=4\cos\left(\dfrac\pi3(x-1)\right)+5$.

**Answer.** $y=4\cos\left(\dfrac\pi3(x-1)\right)+5$.
:::

:::exercise
Without a calculator, find $\sin\dfrac{7\pi}{6}$ and $\cos\dfrac{7\pi}{6}$.

::hint
**What you need:** $\dfrac{7\pi}{6}$ is in quadrant III with reference angle $\dfrac\pi6$.

::solution
The angle $\dfrac{7\pi}{6}=\pi+\dfrac\pi6$ lies in quadrant III, where sine and cosine are both negative, and its reference angle is $\dfrac\pi6$.

Hence $\sin\dfrac{7\pi}{6}=-\dfrac12$ and $\cos\dfrac{7\pi}{6}=-\dfrac{\sqrt3}{2}$.

So $\sin\dfrac{7\pi}6=-\dfrac12$ and $\cos\dfrac{7\pi}6=-\dfrac{\sqrt3}2$.

**Answer.** $-\dfrac12$ and $-\dfrac{\sqrt3}{2}$.
:::

## Applied exercises

:::exercise
For the Ferris wheel $h(t)=16-14\cos\dfrac{\pi t}{20}$ ($h$ in metres, $t$ in seconds), find the first time the rider reaches a height of $23$ m.

::hint
**What you need:** solve $\cos\dfrac{\pi t}{20}=-\dfrac12$ and take the smallest positive solution.

::solution
Setting $h(t)=23$ gives $-14\cos\dfrac{\pi t}{20}=7$, so $\cos\dfrac{\pi t}{20}=-\dfrac12$.

The smallest positive angle with cosine $-\dfrac12$ is $\dfrac{2\pi}{3}$, so $\dfrac{\pi t}{20}=\dfrac{2\pi}{3}$ and $t=\dfrac{40}{3}\approx13.3$.

So the rider first reaches $23$ m after about $13.3$ seconds.

**Answer.** $t=\dfrac{40}{3}\approx13.3$ s.
:::

:::exercise
In a city the daily temperature peaks at $30^\circ$C at $14{:}00$ and falls to $20^\circ$C at $2{:}00$. Model the temperature $T$, $t$ hours after midnight, with a cosine, and find the temperature at $8{:}00$.

::hint
**What you need:** the period is $24$ hours; the maximum is at $t=14$.

::solution
The midline is $\dfrac{30+20}{2}=25$, the amplitude is $\dfrac{30-20}{2}=5$, and the period is $24$, so $b=\dfrac{2\pi}{24}=\dfrac{\pi}{12}$.

The maximum is at $t=14$, so $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$.

At $t=8$, $T(8)=25+5\cos\left(-\dfrac\pi2\right)=25+0=25$.

So the model is $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$, and at $8{:}00$ the temperature is $25^\circ$C.

**Answer.** $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$; $25^\circ$C.
:::

:::exercise
Using the tide model $D(t)=2.2+1.6\cos\dfrac{2\pi(t-2)}{12.5}$, a boat needs at least $3$ m of water. Find, to one decimal place, the first time after $2$ a.m. when the depth falls to $3$ m.

::hint
**What you need:** solve $\cos\dfrac{2\pi(t-2)}{12.5}=0.5$.

::solution
Setting $D(t)=3$ gives $1.6\cos\dfrac{2\pi(t-2)}{12.5}=0.8$, so $\cos\dfrac{2\pi(t-2)}{12.5}=0.5$.

Just after the maximum, the angle is $\dfrac\pi3$, so $\dfrac{2\pi(t-2)}{12.5}=\dfrac\pi3$ and $t-2=\dfrac{12.5}{6}\approx2.08$.

Hence $t\approx4.08$, that is about $4.1$ hours after midnight.

So the depth falls to $3$ m at about $t\approx4.1$, roughly $4{:}05$ a.m.

**Answer.** $t\approx4.1$ hours.
:::

:::exercise Challenge
A function $f(x)=a\sin(bx)+k$ with $a>0$, $b>0$ has range $[-1,7]$ and its graph crosses the midline going up at $x=0$ and next at $x=8$. Find $a$, $b$ and $k$.

::hint
**What you need:** consecutive upward midline crossings are one full period apart.

::solution
From the range, $k=\dfrac{7+(-1)}{2}=3$ and $a=\dfrac{7-(-1)}{2}=4$.

Upward crossings of the midline are a full period apart, so the period is $8$ and $b=\dfrac{2\pi}{8}=\dfrac\pi4$.

So $a=4$, $b=\dfrac\pi4$ and $k=3$, giving $f(x)=4\sin\dfrac{\pi x}{4}+3$.

**Answer.** $a=4$, $b=\dfrac\pi4$, $k=3$.
:::

:::quiz
::mc
The period of $y=\sin4x$ is
A. $4\pi$
B. $\dfrac\pi4$
C. $\dfrac\pi2$
D. $8\pi$
::key C
$\dfrac{2\pi}{4}=\dfrac\pi2$.

::mc
The amplitude of $y=-5\cos x+1$ is
A. $-5$
B. $1$
C. $6$
D. $5$
::key D
The amplitude is $\lvert-5\rvert=5$.

::mc
The exact value of $\sin\dfrac\pi3$ is
A. $\dfrac{\sqrt3}{2}$
B. $\dfrac12$
C. $\dfrac{\sqrt2}{2}$
D. $\sqrt3$
::key A
From the unit circle.

::mc
The midline of $y=2\sin x+7$ is
A. $y=2$
B. $y=7$
C. $y=9$
D. $y=5$
::key B
The vertical shift $k=7$ gives the midline.

::tf
Consider $y=3\sin2x$. Decide whether each statement is true or false.
a) The amplitude is $3$.
b) The period is $\pi$.
c) The graph passes through the origin.
d) The maximum value is $6$.
::key T T T F
The maximum is $3$.

::sa
Find the period of $y=\sin\dfrac{\pi x}{6}$.
::key 12
$\dfrac{2\pi}{\pi/6}=12$.

::sa
Find the maximum value of $y=2\cos x+3$.
::key 5
$3+2=5$.
:::
