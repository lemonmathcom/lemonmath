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

A cup of tea is hot when it is poured, then it cools. But how fast is it cooling, right now? That is a question about a derivative, and Unit 4 is where calculus meets the real world. It is also one of the most visible units on the free-response section: almost every year at least one question asks you to explain what a derivative means in a context, to decide whether a particle is speeding up, or to estimate a value with a tangent line. The mathematics is light; the points are won or lost on clear language and correct units.

## The derivative as a rate of change

The derivative answers one question: how fast is something changing right now? If $Q(t)$ measures a quantity at time $t$, then $Q'(a)$ is the instantaneous rate of change of $Q$ at $t=a$. Its units are "units of $Q$ per unit of $t$". A complete interpretation answers three questions: what is changing, at what moment, and how fast (with the direction: increasing or decreasing).

:::example Interpreting a derivative
The temperature of a cup of tea is $W(t)$ degrees Celsius, $t$ minutes after it is poured. Which statement is the best interpretation of $W'(10)=-2.5$?
A. The temperature of the tea is $-2.5$ degrees Celsius after $10$ minutes.
B. The tea cools by $2.5$ degrees Celsius during the first $10$ minutes.
C. At $10$ minutes, the temperature of the tea is decreasing at a rate of $2.5$ degrees Celsius per minute.
D. The tea needs $2.5$ more minutes to cool by $10$ degrees Celsius.

**Solution.** $W'(10)$ is an instantaneous rate at the moment $t=10$, with units degrees Celsius per minute, and its sign is negative, so the temperature is decreasing: answer **C**. Option A describes $W(10)$; option B describes an average change over an interval.
:::

## Straight-line motion

Now let a particle run along a line. If we know its position $x(t)$, we know everything about the motion: velocity is how the position changes, $v(t)=x'(t)$; acceleration is how the velocity changes, $a(t)=v'(t)=x''(t)$; and speed is the size of the velocity, $|v(t)|$.

- The particle moves right when $v>0$, left when $v<0$, and changes direction where $v$ changes sign. To find where it turns round, look for where the velocity is zero and changes sign.
- It is **speeding up** when $v$ and $a$ have the same sign, and **slowing down** when they have opposite signs. Acceleration in the direction of motion pushes the particle faster; against it, the acceleration slows the particle down.
- The total distance adds up the distance on each leg between turning points, because at a turning point the particle comes back the way it went.

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

When a balloon swells, its volume and its radius both grow, but not at the same speed. A formula ties them together, so the rate of one drags the rate of the other along. When two quantities are linked by an equation and both change with time, differentiate the equation with respect to $t$. A reliable routine: draw and label a picture, write the equation that holds at every moment, differentiate with respect to $t$, and only then substitute the values at the moment asked. Why substitute last? Because if you substitute early, a quantity that is changing turns into a constant, and its derivative disappears.

:::example A balloon
Air is pumped into a spherical balloon at $100$ cubic centimeters per second. How fast is the radius increasing when the radius is $5$ centimeters?

**Solution.** $V=\dfrac43\pi r^3$, so $\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}$. Substitute: $100=4\pi(25)\dfrac{dr}{dt}$, which gives $\dfrac{dr}{dt}=\dfrac1\pi\approx0.318$ centimeters per second.
:::

:::example A sliding ladder
A ladder $5$ meters long leans against a wall. The bottom slides away from the wall at $0.6$ meters per second. How fast is the top sliding down when the bottom is $3$ meters from the wall?

**Solution.** With $x$ the distance from the wall to the bottom and $y$ the height of the top, $x^2+y^2=25$, so $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$. When $x=3$, $y=4$: $3(0.6)+4\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=-0.45$. The top slides down at $0.45$ meters per second. The negative sign means $y$ is decreasing; say so in words.
:::

## Local linearization and L'Hôpital's rule

Look very closely at one point of a graph and the curve looks almost straight. So near $x=a$ we can replace the curve by its tangent line: $f(x)\approx f(a)+f'(a)(x-a)$. Which side the estimate errs on depends on the concavity. If $f$ is concave up near $a$, the tangent lies below the graph and the estimate is an **underestimate**; if concave down, it is an **overestimate**.

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
- **Missing units or time.** Many students lose marks here. "The rate is $-3$" earns nothing; "at $t=5$ minutes, the volume is decreasing at $3$ litres per minute" earns the point.
- **Speeding up means $a>0$.** Wrong: compare the signs of $v$ and $a$. A particle can be slowing down with positive acceleration if its velocity is negative.
- **Substituting too early** in related rates. Differentiate first; plug in values only after, because early substitution turns a changing quantity into a constant.
- **Displacement is not distance.** $x(4)-x(0)=4$ in the motion example, but the particle travelled $12$. Displacement only compares the start with the end; distance counts the trip out and the trip back.
- **L'Hôpital is not the quotient rule.** Differentiate the top and the bottom separately, not the whole fraction.
:::

:::tip The sentence template
When you meet an "interpret" question, you do not need to invent the wording from scratch. Fill in: "At $t=$ ___ (units), the ___ is increasing/decreasing at a rate of ___ (units) per (units)." Readers of the AP exam look for exactly these pieces, so filling them in earns the marks. Practise it a few times and it will fit almost any context.
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
The particle moves left when its velocity $v(t)<0$.

Factorise the velocity: $v(t)=t^2-4t+3=(t-1)(t-3)$, which has roots $t=1$ and $t=3$.

Since the coefficient of $t^2$ is positive, $v(t)<0$ when $t$ lies between the roots, that is $1<t<3$; and $v(t)>0$ when $0\le t<1$ or $t>3$.

So the particle moves left on the interval $1<t<3$. So the answer is **B**.

**Answer.** B.
:::

:::exercise Free response
The radius of a circular oil spill grows at $2$ centimeters per second. How fast is the area growing when the radius is $10$ centimeters?

::hint
**What you need:** $A=\pi r^2$ differentiated with respect to $t$.

**Steps:**
1. $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$.
2. Substitute $r=10$ and $\dfrac{dr}{dt}=2$.

::solution
Let $r$ (centimeters) be the radius and $A$ (square centimeters) the area of the spill at time $t$ (seconds). Then $A=\pi r^2$ and $\dfrac{dr}{dt}=2$ centimeters per second.

Differentiating both sides with respect to $t$ (chain rule):
$$\frac{dA}{dt}=2\pi r\,\frac{dr}{dt}.$$

Substituting $r=10$ and $\dfrac{dr}{dt}=2$, we get
$$\frac{dA}{dt}=2\pi(10)(2)=40\pi\approx125.7.$$

So when the radius is $10$ centimeters, the area is growing at a rate of $40\pi\approx125.7$ square centimeters per second.

**Answer.** $40\pi\approx125.7$ square centimeters per second.
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
As $x\to0$, the numerator $e^x-1-x\to e^0-1-0=0$ and the denominator $x^2\to0$, so the limit has the form $\dfrac00$. We apply L'Hôpital's rule.

First application:
$$\lim_{x\to0}\frac{e^x-1-x}{x^2}=\lim_{x\to0}\frac{e^x-1}{2x}.$$

The new limit is still of the form $\dfrac00$ (numerator $\to e^0-1=0$, denominator $\to0$), so we apply L'Hôpital's rule a second time:
$$\lim_{x\to0}\frac{e^x-1}{2x}=\lim_{x\to0}\frac{e^x}{2}=\frac{e^0}{2}=\frac12.$$

So the limit equals $\dfrac12$, and the answer is **D**.

**Answer.** D.
:::

:::exercise Free response
A differentiable function has $f(3)=2$ and $f'(3)=4$. Use the tangent line at $x=3$ to estimate $f(2.9)$.

::hint
**What you need:** $f(x)\approx f(3)+f'(3)(x-3)$.

**Steps:**
1. $x-3=-0.1$.

::solution
The tangent line to the graph of $f$ at $x=3$ is
$$L(x)=f(3)+f'(3)(x-3)=2+4(x-3).$$

Since $2.9$ is close to $3$, we use $f(2.9)\approx L(2.9)$, where $2.9-3=-0.1$:
$$f(2.9)\approx2+4(-0.1)=2-0.4=1.6.$$

So $f(2.9)\approx1.6$.

**Answer.** $1.6$.
:::

:::exercise Free response
A bacteria colony has $P(t)$ thousand bacteria $t$ hours after an experiment starts. Interpret $P'(4)=1.5$ in context.

::hint
**What you need:** the template: moment, quantity, direction, rate with units.

::solution
The function $P(t)$ gives the number of bacteria (in thousands) after $t$ hours, so the derivative $P'(t)$ gives the instantaneous rate of change of the number of bacteria with respect to time, in thousand bacteria per hour.

Since $P'(4)=1.5>0$, the number of bacteria is increasing at time $t=4$ hours.

So at $t=4$ hours, the number of bacteria is increasing at a rate of $1.5$ thousand bacteria per hour.

**Answer.** At $t=4$ hours, the number of bacteria is increasing at a rate of $1.5$ thousand bacteria per hour.
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
Let $h$ (meters) be the depth of the water, $r$ (meters) the radius of the water surface and $V$ (cubic meters) the volume of water in the tank at time $t$ (minutes). Then $\dfrac{dV}{dt}=2$ cubic meters per minute.

The water forms a cone similar to the tank (vertex at the bottom), so
$$\frac{r}{h}=\frac{3}{6}\ \Rightarrow\ r=\frac h2.$$

The volume of the water is
$$V=\frac13\pi r^2h=\frac13\pi\left(\frac h2\right)^2h=\frac{\pi h^3}{12}.$$

Differentiating both sides with respect to $t$ (chain rule):
$$\frac{dV}{dt}=\frac{\pi h^2}{4}\,\frac{dh}{dt}.$$

Substituting $\dfrac{dV}{dt}=2$ and $h=4$, we get
$$2=\frac{\pi(16)}{4}\,\frac{dh}{dt}=4\pi\,\frac{dh}{dt}\ \Rightarrow\ \frac{dh}{dt}=\frac{1}{2\pi}\approx0.159.$$

So when the water is $4$ meters deep, the water level is rising at $\dfrac{1}{2\pi}\approx0.159$ meters per minute.

**Answer.** $\dfrac{1}{2\pi}\approx0.159$ meters per minute.
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
The velocity of the particle is $v(t)=x'(t)=6t^2-18t+12=6(t-1)(t-2)$, and the acceleration is $a(t)=v'(t)=12t-18$.

a) The particle moves left when $v(t)<0$. Since $v(t)=6(t-1)(t-2)$ has a positive coefficient of $t^2$, $v(t)<0$ when $t$ lies between the roots $1$ and $2$. So the particle moves left for $1<t<2$.

b) At $t=1.2$:
$$v(1.2)=6(0.2)(-0.8)=-0.96,\qquad a(1.2)=12(1.2)-18=-3.6.$$
Since $v(1.2)$ and $a(1.2)$ have the same sign (both negative), the speed $|v|$ is increasing. So at $t=1.2$ the particle is speeding up.

c) The particle changes direction at $t=1$ and $t=2$ (where $v$ changes sign), so we compute the position at $t=0,1,2,3$:
$$x(0)=0,\quad x(1)=2-9+12=5,\quad x(2)=16-36+24=4,\quad x(3)=54-81+36=9.$$
The total distance is the sum of the displacements on each interval where the particle moves in one direction:
$$|x(1)-x(0)|+|x(2)-x(1)|+|x(3)-x(2)|=5+1+5=11.$$

So the particle moves left for $1<t<2$; at $t=1.2$ it is speeding up; the total distance traveled on $0\le t\le3$ is $11$.

**Answer.** a) $1<t<2$; b) speeding up; c) $11$.
:::

:::exercise Two cars
Car A drives north from an intersection at $60$ kilometers per hour and car B drives east from the same intersection at $80$ kilometers per hour, both starting at the same time. How fast is the distance between them increasing after half an hour?

::hint
**What you need:** $z^2=x^2+y^2$, differentiated with respect to $t$.

**Steps:**
1. After $0.5$ hours: $y=30$, $x=40$, $z=50$.
2. $z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}$.

::solution
Let $y$ (kilometers) be the distance car A has driven north, $x$ (kilometers) the distance car B has driven east, and $z$ (kilometers) the distance between the cars at time $t$ (hours). Then $\dfrac{dy}{dt}=60$ and $\dfrac{dx}{dt}=80$.

The cars travel in perpendicular directions, so by the Pythagorean theorem,
$$z^2=x^2+y^2.$$

Differentiating both sides with respect to $t$:
$$2z\,\frac{dz}{dt}=2x\,\frac{dx}{dt}+2y\,\frac{dy}{dt}\ \Rightarrow\ z\,\frac{dz}{dt}=x\,\frac{dx}{dt}+y\,\frac{dy}{dt}.$$

After half an hour ($t=0.5$): $x=80\cdot0.5=40$, $y=60\cdot0.5=30$ and $z=\sqrt{40^2+30^2}=50$.

Substituting, we get
$$50\,\frac{dz}{dt}=40(80)+30(60)=5000\ \Rightarrow\ \frac{dz}{dt}=100.$$

Check: $z=\sqrt{(80t)^2+(60t)^2}=100t$, so $\dfrac{dz}{dt}=100$.

So after half an hour, the distance between the cars is increasing at $100$ kilometers per hour.

**Answer.** $100$ kilometers per hour.
:::

:::exercise Challenge
A twice-differentiable function has $f(1)=3$, $f'(1)=2$ and $f''(x)>0$ for all $x$. Estimate $f(1.2)$ with the tangent line at $x=1$, and decide whether the estimate is too large or too small.

::hint
**What you need:** the tangent line and the meaning of concavity.

**Steps:**
1. $f(1.2)\approx3+2(0.2)$.
2. Concave up: where is the tangent relative to the graph?

::solution
The tangent line to the graph of $f$ at $x=1$ is
$$L(x)=f(1)+f'(1)(x-1)=3+2(x-1).$$

Estimating with the tangent line, where $1.2-1=0.2$:
$$f(1.2)\approx L(1.2)=3+2(0.2)=3.4.$$

Since $f''(x)>0$ for all $x$, the graph of $f$ is concave up everywhere, and therefore lies above each of its tangent lines. In particular, at $x=1.2$ we have $f(1.2)>L(1.2)=3.4$.

So the estimate $3.4$ is smaller than the true value of $f(1.2)$.

**Answer.** $f(1.2)\approx3.4$; the estimate is an underestimate.
:::

:::quiz
::mc TH
A particle has position $s(t)=t^2-6t$. What is its velocity at $t=4$?
A. $2$
B. $-8$
C. $4$
D. $-2$
::key A
$v(t)=2t-6$, so $v(4)=2$. Option B is the position $s(4)$.

::mc TH
At $t=2$, a particle has $v(2)=-3$ and $a(2)=-1$. At this moment the particle is
A. moving right and speeding up
B. moving left and slowing down
C. moving left and speeding up
D. moving right and slowing down
::key C
$v<0$ means moving left; $v$ and $a$ have the same sign, so it is speeding up.

::mc TH
What is $\displaystyle\lim_{x\to0}\frac{\tan 2x}{x}$?
A. $0$
B. $\dfrac12$
C. $1$
D. $2$
::key D
L'Hôpital: $\dfrac{2\sec^2 2x}{1}\to2$.

::mc VD
Using the tangent line to $y=\sqrt[3]{x}$ at $x=8$, the estimate of $\sqrt[3]{8.3}$ is
A. $2.1$
B. $2.025$
C. $2.0125$
D. $2.25$
::key B
$y'=\dfrac{1}{3x^{2/3}}=\dfrac1{12}$ at $x=8$, so $\sqrt[3]{8.3}\approx2+\dfrac{0.3}{12}=2.025$.

::tf VD TH TH TH
The side of a square increases at $3$ centimeters per second.
a) When the side is $5$ centimeters, the area increases at $30$ square centimeters per second.
b) The perimeter increases at $3$ centimeters per second.
c) The area increases at a constant rate.
d) When the side doubles, the rate of increase of the area doubles.
::key T F F T
a) True: $\dfrac{dA}{dt}=2s\dfrac{ds}{dt}=30$. b) False: $P=4s$, so $12$ centimeters per second. c) False: $\dfrac{dA}{dt}=6s$ depends on $s$. d) True.

::sa VD
The radius of a sphere grows at $0.5$ centimeters per second. How fast is its volume growing when the radius is $3$ centimeters? Round to one decimal place.
::key 56.5
$\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}=4\pi(9)(0.5)=18\pi\approx56.5$ cubic centimeters per second.

::sa VD
A particle has position $x(t)=t^2-4t$ for $0\le t\le5$. Find the total distance traveled.
::key 13
It turns at $t=2$: $x(0)=0$, $x(2)=-4$, $x(5)=5$. Distance $=4+9=13$.
:::
