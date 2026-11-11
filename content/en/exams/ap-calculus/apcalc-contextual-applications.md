---
title: Derivatives in context, motion and related rates
description: AP Calculus Unit 4: rates of change with units, straight-line motion, related rates, local linearization and L'Hôpital's rule.
minutes: 45
---

:::goals
- Interpret a derivative in context, with correct units and the words "at time t".
- Analyze straight-line motion: velocity, acceleration, speeding up and slowing down, total distance.
- Solve related-rates problems by differentiating an equation with respect to time.
- Estimate values with a tangent line and evaluate $\dfrac00$ and $\dfrac{\infty}{\infty}$ limits with L'Hôpital's rule.
:::

Unit 4 is where calculus meets the real world, and it is one of the most visible units on the free-response section: almost every year at least one question asks you to explain what a derivative means in a context, to decide whether a particle is speeding up, or to estimate a value with a tangent line. The mathematics is light; the points are won or lost on clear language and correct units.

## The derivative as a rate of change

If $Q(t)$ measures a quantity at time $t$, then $Q'(a)$ is the instantaneous rate of change of $Q$ at $t=a$. Its units are "units of $Q$ per unit of $t$". A complete interpretation answers three questions: what is changing, at what moment, and how fast (with the direction: increasing or decreasing).

:::example Interpreting a derivative
The temperature of a cup of tea is $W(t)$ degrees Celsius, $t$ minutes after it is poured. Which statement is the best interpretation of $W'(10)=-2.5$?
A. The temperature of the tea is $-2.5$ degrees Celsius after $10$ minutes.
B. The tea cools by $2.5$ degrees Celsius during the first $10$ minutes.
C. At $10$ minutes, the temperature of the tea is decreasing at a rate of $2.5$ degrees Celsius per minute.
D. The tea needs $2.5$ more minutes to cool by $10$ degrees Celsius.

**Solution.** $W'(10)$ is an instantaneous rate at the moment $t=10$, with units degrees Celsius per minute, and its sign is negative, so the temperature is decreasing: answer **C**. Option A describes $W(10)$; option B describes an average change over an interval.
:::

## Straight-line motion

For a particle moving along a line with position $x(t)$: velocity $v(t)=x'(t)$, acceleration $a(t)=v'(t)=x''(t)$, and speed $|v(t)|$.

- The particle moves right when $v>0$, left when $v<0$, and changes direction where $v$ changes sign.
- It is **speeding up** when $v$ and $a$ have the same sign, and **slowing down** when they have opposite signs.
- Total distance traveled adds the distances of each leg between turning points.

:::example Reading the motion
A particle moves along the $x$-axis with position $x(t)=t^3-6t^2+9t$ for $t\ge0$.

a) When is the particle moving left?
b) Is the particle speeding up or slowing down at $t=2.5$?
c) Find the total distance traveled from $t=0$ to $t=4$.

**Solution.** a) $v(t)=3t^2-12t+9=3(t-1)(t-3)$, which is negative for $1<t<3$: the particle moves left on this interval.

b) $v(2.5)=3(1.5)(-0.5)=-2.25$ and $a(t)=6t-12$, so $a(2.5)=3$. Velocity and acceleration have opposite signs: the particle is **slowing down**.

c) It turns at $t=1$ and $t=3$. Positions: $x(0)=0$, $x(1)=4$, $x(3)=0$, $x(4)=4$. Distance $=4+4+4=12$.
:::

## Related rates

When two quantities are linked by an equation and both change with time, differentiate the equation with respect to $t$. A reliable routine: draw and label a picture, write the equation that holds at every moment, differentiate with respect to $t$, and only then substitute the values at the moment asked.

:::example A balloon
Air is pumped into a spherical balloon at $100$ cubic centimeters per second. How fast is the radius increasing when the radius is $5$ centimeters?

**Solution.** $V=\dfrac43\pi r^3$, so $\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}$. Substitute: $100=4\pi(25)\dfrac{dr}{dt}$, which gives $\dfrac{dr}{dt}=\dfrac1\pi\approx0.318$ centimeters per second.
:::

:::example A sliding ladder
A ladder $5$ meters long leans against a wall. The bottom slides away from the wall at $0.6$ meters per second. How fast is the top sliding down when the bottom is $3$ meters from the wall?

**Solution.** With $x$ the distance from the wall to the bottom and $y$ the height of the top, $x^2+y^2=25$, so $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$. When $x=3$, $y=4$: $3(0.6)+4\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=-0.45$. The top slides down at $0.45$ meters per second. The negative sign means $y$ is decreasing; say so in words.
:::

## Local linearization and L'Hôpital's rule

Near $x=a$, the tangent line gives the approximation $f(x)\approx f(a)+f'(a)(x-a)$. If $f$ is concave up near $a$, the tangent lies below the graph and the estimate is an **underestimate**; if concave down, it is an **overestimate**.

:::example Estimating a square root
Using the tangent line to $f(x)=\sqrt x$ at $x=4$, the approximation of $\sqrt{4.1}$ is
A. $2.05$
B. $2.0025$
C. $2.025$
D. $2.25$

**Solution.** $f(4)=2$ and $f'(x)=\dfrac{1}{2\sqrt x}$, so $f'(4)=\dfrac14$. Then $\sqrt{4.1}\approx2+\dfrac14(0.1)=2.025$: answer **C**. Since $\sqrt x$ is concave down, this is a slight overestimate.
:::

:::theorem L'Hôpital's rule
If $\lim f(x)$ and $\lim g(x)$ are both $0$, or both $\pm\infty$, and $\lim\dfrac{f'(x)}{g'(x)}$ exists, then $\lim\dfrac{f(x)}{g(x)}=\lim\dfrac{f'(x)}{g'(x)}$. On the free-response section, show that the limit has the form $\dfrac00$ (or $\dfrac\infty\infty$) before using the rule.
:::

:::example Using the rule twice
What is $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$?
A. $0$
B. $\dfrac12$
C. $1$
D. The limit does not exist.

**Solution.** The form is $\dfrac00$. L'Hôpital gives $\displaystyle\lim_{x\to0}\frac{\sin x}{2x}$, still $\dfrac00$; once more gives $\displaystyle\lim_{x\to0}\frac{\cos x}{2}=\frac12$: answer **B**.
:::

:::warning Common traps
- **Missing units or time.** "The rate is $-3$" earns nothing; "at $t=5$ minutes, the volume is decreasing at $3$ liters per minute" earns the point.
- **Speeding up means $a>0$.** Wrong: compare the signs of $v$ and $a$.
- **Substituting too early** in related rates. Differentiate first; plug in values only after.
- **Displacement is not distance.** $x(4)-x(0)=4$ in the motion example, but the particle traveled $12$.
- **L'Hôpital is not the quotient rule.** Differentiate the top and the bottom separately.
:::

:::tip The sentence template
For any "interpret" question, fill in: "At $t=$ ___ (units), the ___ is increasing/decreasing at a rate of ___ (units) per (units)." Readers of the AP exam look for exactly these pieces.
:::

:::terms
- rate of change | tốc độ thay đổi
- velocity | vận tốc
- acceleration | gia tốc
- speed | tốc độ (độ lớn vận tốc)
- total distance traveled | tổng quãng đường đi được
- related rates | tốc độ liên quan
- local linearization | xấp xỉ tuyến tính địa phương
- L'Hôpital's rule | quy tắc L'Hôpital
:::

## Similar exercises

:::exercise Multiple choice
A particle moves along a line with velocity $v(t)=t^2-4t+3$ for $t\ge0$. On which interval is the particle moving left?
A. $0<t<1$
B. $1<t<3$
C. $t>3$
D. $0<t<2$

::hint
**What you need:** the particle moves left where $v(t)<0$.

**Steps:**
1. Factor: $v(t)=(t-1)(t-3)$.
2. Make a sign chart.

::solution
$v(t)<0$ between the roots, so the particle moves left for $1<t<3$: answer **B**.
:::

:::exercise Free response
The radius of a circular oil spill grows at $2$ centimeters per second. How fast is the area growing when the radius is $10$ centimeters?

::hint
**What you need:** $A=\pi r^2$ differentiated with respect to $t$.

**Steps:**
1. $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$.
2. Substitute $r=10$ and $\dfrac{dr}{dt}=2$.

::solution
$\dfrac{dA}{dt}=2\pi(10)(2)=40\pi\approx125.7$ square centimeters per second.
:::

:::exercise Multiple choice
What is $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$?
A. $0$
B. $1$
C. $2$
D. $\dfrac12$

::hint
**What you need:** L'Hôpital's rule, applied while the form is $\dfrac00$.

**Steps:**
1. First application: $\dfrac{e^x-1}{2x}$, still $\dfrac00$.
2. Apply again.

::solution
The second application gives $\dfrac{e^x}{2}\to\dfrac12$: answer **D**.
:::

:::exercise Free response
A differentiable function has $f(3)=2$ and $f'(3)=4$. Use the tangent line at $x=3$ to estimate $f(2.9)$.

::hint
**What you need:** $f(x)\approx f(3)+f'(3)(x-3)$.

**Steps:**
1. $x-3=-0.1$.

::solution
$f(2.9)\approx2+4(-0.1)=1.6$.
:::

:::exercise Free response
A bacteria colony has $P(t)$ thousand bacteria $t$ hours after an experiment starts. Interpret $P'(4)=1.5$ in context.

::hint
**What you need:** the template: moment, quantity, direction, rate with units.

::solution
At $t=4$ hours, the number of bacteria is increasing at a rate of $1.5$ thousand bacteria per hour.
:::

## Application exercises

:::exercise Filling a cone
Water is poured at $2$ cubic meters per minute into a tank shaped like an inverted cone with radius $3$ meters and height $6$ meters. How fast is the water level rising when the water is $4$ meters deep?

::hint
**What you need:** similar triangles to remove $r$: $\dfrac rh=\dfrac36$, so $r=\dfrac h2$.

**Steps:**
1. $V=\dfrac13\pi r^2h=\dfrac{\pi h^3}{12}$.
2. $\dfrac{dV}{dt}=\dfrac{\pi h^2}{4}\dfrac{dh}{dt}$; substitute $h=4$.

::solution
$2=\dfrac{\pi(16)}{4}\dfrac{dh}{dt}=4\pi\dfrac{dh}{dt}$, so $\dfrac{dh}{dt}=\dfrac{1}{2\pi}\approx0.159$ meters per minute.
:::

:::exercise A full motion question
A particle moves along the $x$-axis with $x(t)=2t^3-9t^2+12t$ for $0\le t\le3$.
a) When is the particle moving left?
b) Is it speeding up or slowing down at $t=1.2$?
c) Find the total distance traveled on $0\le t\le3$.

::hint
**What you need:** $v=6t^2-18t+12=6(t-1)(t-2)$ and $a=12t-18$.

**Steps:**
1. Sign chart of $v$.
2. Compare the signs of $v(1.2)$ and $a(1.2)$.
3. Positions at $t=0, 1, 2, 3$.

::solution
a) $v<0$ for $1<t<2$.

b) $v(1.2)=6(0.2)(-0.8)=-0.96$ and $a(1.2)=-3.6$: same sign, so it is speeding up.

c) $x(0)=0$, $x(1)=5$, $x(2)=4$, $x(3)=9$. Distance $=5+1+5=11$.
:::

:::exercise Two cars
Car A drives north from an intersection at $60$ kilometers per hour and car B drives east from the same intersection at $80$ kilometers per hour, both starting at the same time. How fast is the distance between them increasing after half an hour?

::hint
**What you need:** $z^2=x^2+y^2$, differentiated with respect to $t$.

**Steps:**
1. After $0.5$ hours: $y=30$, $x=40$, $z=50$.
2. $z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}$.

::solution
$50\dfrac{dz}{dt}=40(80)+30(60)=5000$, so $\dfrac{dz}{dt}=100$ kilometers per hour.
:::

:::exercise Challenge
A twice-differentiable function has $f(1)=3$, $f'(1)=2$ and $f''(x)>0$ for all $x$. Estimate $f(1.2)$ with the tangent line at $x=1$, and decide whether the estimate is too large or too small.

::hint
**What you need:** the tangent line and the meaning of concavity.

**Steps:**
1. $f(1.2)\approx3+2(0.2)$.
2. Concave up: where is the tangent relative to the graph?

::solution
$f(1.2)\approx3.4$. Because $f''>0$, the graph is concave up and lies above its tangent line, so $3.4$ is an underestimate.
:::

:::quiz
::mc
A particle has position $s(t)=t^2-6t$. What is its velocity at $t=4$?
A. $2$
B. $-8$
C. $4$
D. $-2$
::key A
$v(t)=2t-6$, so $v(4)=2$. Option B is the position $s(4)$.

::mc
At $t=2$, a particle has $v(2)=-3$ and $a(2)=-1$. At this moment the particle is
A. moving right and speeding up
B. moving left and slowing down
C. moving left and speeding up
D. moving right and slowing down
::key C
$v<0$ means moving left; $v$ and $a$ have the same sign, so it is speeding up.

::mc
What is $\displaystyle\lim_{x\to0}\frac{\tan 2x}{x}$?
A. $0$
B. $\dfrac12$
C. $1$
D. $2$
::key D
L'Hôpital: $\dfrac{2\sec^2 2x}{1}\to2$.

::mc
Using the tangent line to $y=\sqrt[3]{x}$ at $x=8$, the estimate of $\sqrt[3]{8.3}$ is
A. $2.1$
B. $2.025$
C. $2.0125$
D. $2.25$
::key B
$y'=\dfrac{1}{3x^{2/3}}=\dfrac1{12}$ at $x=8$, so $\sqrt[3]{8.3}\approx2+\dfrac{0.3}{12}=2.025$.

::tf
The side of a square increases at $3$ centimeters per second.
a) When the side is $5$ centimeters, the area increases at $30$ square centimeters per second.
b) The perimeter increases at $3$ centimeters per second.
c) The area increases at a constant rate.
d) When the side doubles, the rate of increase of the area doubles.
::key T F F T
a) True: $\dfrac{dA}{dt}=2s\dfrac{ds}{dt}=30$. b) False: $P=4s$, so $12$ centimeters per second. c) False: $\dfrac{dA}{dt}=6s$ depends on $s$. d) True.

::sa
The radius of a sphere grows at $0.5$ centimeters per second. How fast is its volume growing when the radius is $3$ centimeters? Round to one decimal place.
::key 56.5
$\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}=4\pi(9)(0.5)=18\pi\approx56.5$ cubic centimeters per second.

::sa
A particle has position $x(t)=t^2-4t$ for $0\le t\le5$. Find the total distance traveled.
::key 13
It turns at $t=2$: $x(0)=0$, $x(2)=-4$, $x(5)=5$. Distance $=4+9=13$.
:::
