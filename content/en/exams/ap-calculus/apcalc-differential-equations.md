---
title: Differential equations and slope fields
description: AP Calculus Unit 7: verifying solutions, slope fields, separation of variables, exponential models; for BC, Euler's method and logistic growth.
minutes: 45
---

:::goals
- Check whether a function is a solution of a differential equation.
- Sketch and read a slope field, and match it to its equation.
- Solve a separable differential equation with an initial condition, step by step as graders expect.
- Model growth and decay with $\dfrac{dy}{dt}=ky$.
- (BC) Approximate a solution with Euler's method and analyze logistic growth.
:::

Unit 7 appears on the free-response section almost every year, usually as a full question: sketch a slope field at a few points, find a tangent line approximation, then solve the equation by separating variables. The separation question is worth several points, and the scoring is strict about each step. The good news is that the steps are always the same.

## Solutions and slope fields

A **differential equation** relates an unknown function to its derivatives. A function is a **solution** if substituting it makes the equation true. A **slope field** draws, at each point $(x,y)$, a short segment with slope $\dfrac{dy}{dx}$ given by the equation; solution curves follow the segments.

:::example Checking a solution
Which function satisfies $\dfrac{dy}{dx}=2y$?
A. $y=x^2$
B. $y=e^{x^2}$
C. $y=2e^{x}$
D. $y=3e^{2x}$

**Solution.** For $y=3e^{2x}$: $y'=6e^{2x}=2\left(3e^{2x}\right)=2y$. Answer **D**. For C, $y'=2e^x=y$, not $2y$.
:::

:::graph Slope field of $\dfrac{dy}{dx}=x-y$, with the solution $y=x-1$
alt: Short segments at the integer points from -2 to 2 in both directions; segments are horizontal along the line y = x and steeper further below it; the line y = x - 1 is drawn through the field
x: -2.5..2.5
y: -2.5..2.5
plot: x - 1
segment: (-2.32, -2.00) (-1.68, -2.00)
segment: (-2.23, -0.77) (-1.77, -1.23)
segment: (-2.14, 0.29) (-1.86, -0.29)
segment: (-2.10, 1.30) (-1.90, 0.70)
segment: (-2.08, 2.31) (-1.92, 1.69)
segment: (-1.23, -2.23) (-0.77, -1.77)
segment: (-1.32, -1.00) (-0.68, -1.00)
segment: (-1.23, 0.23) (-0.77, -0.23)
segment: (-1.14, 1.29) (-0.86, 0.71)
segment: (-1.10, 2.30) (-0.90, 1.70)
segment: (-0.14, -2.29) (0.14, -1.71)
segment: (-0.23, -1.23) (0.23, -0.77)
segment: (-0.32, 0.00) (0.32, 0.00)
segment: (-0.23, 1.23) (0.23, 0.77)
segment: (-0.14, 2.29) (0.14, 1.71)
segment: (0.90, -2.30) (1.10, -1.70)
segment: (0.86, -1.29) (1.14, -0.71)
segment: (0.77, -0.23) (1.23, 0.23)
segment: (0.68, 1.00) (1.32, 1.00)
segment: (0.77, 2.23) (1.23, 1.77)
segment: (1.92, -2.31) (2.08, -1.69)
segment: (1.90, -1.30) (2.10, -0.70)
segment: (1.86, -0.29) (2.14, 0.29)
segment: (1.77, 0.77) (2.23, 1.23)
segment: (1.68, 2.00) (2.32, 2.00)
:::

:::example Reading the slope field
For $\dfrac{dy}{dx}=x-y$, shown above:

a) Where are the segments horizontal?
b) Show that $y=x-1$ is a solution.
c) Where are solution curves concave up?

**Solution.** a) Where $x-y=0$, on the line $y=x$.

b) $y'=1$ and $x-y=x-(x-1)=1$. Both sides agree.

c) $\dfrac{d^2y}{dx^2}=1-\dfrac{dy}{dx}=1-(x-y)=1-x+y$. Concave up where $y>x-1$, above that line.
:::

## Separation of variables

:::note The steps graders check
1. **Separate:** all $y$ on one side with $dy$, all $x$ on the other with $dx$.
2. **Integrate both sides**, with a constant $C$.
3. **Use the initial condition** to find $C$ right away.
4. **Solve for $y$.**

A missing constant of integration usually caps the score of the whole question, so write $+C$ the moment you integrate.
:::

:::example A classic separable equation
Find the solution of $\dfrac{dy}{dx}=xy$ with $y(0)=3$.

**Solution.** $\dfrac{dy}{y}=x\,dx$, so $\ln|y|=\dfrac{x^2}{2}+C$. With $x=0$, $y=3$: $C=\ln3$. Since $y>0$ near the initial point, $y=e^{x^2/2+\ln3}=3e^{x^2/2}$.
:::

:::example Choosing the right sign
Solve $\dfrac{dy}{dx}=\dfrac{2x}{y}$ with $y(0)=-2$.

**Solution.** $y\,dy=2x\,dx$, so $\dfrac{y^2}{2}=x^2+C$. With $(0,-2)$: $C=2$, so $y^2=2x^2+4$. The initial value is negative, so $y=-\sqrt{2x^2+4}$. Taking the positive root would lose the point.
:::

## Exponential growth and decay

If a quantity changes at a rate proportional to its size, $\dfrac{dy}{dt}=ky$, then $y=y_0e^{kt}$. Growth when $k>0$, decay when $k<0$.

:::example Doubling time
A bacteria population grows at a rate proportional to its size. It has $500$ bacteria at $t=0$ and $1000$ at $t=3$ hours. Find the population at $t=6$, and the constant $k$.

**Solution.** It doubles every $3$ hours, so $P(6)=2000$. From $1000=500e^{3k}$: $k=\dfrac{\ln2}{3}\approx0.231$ per hour.
:::

## Euler's method and logistic growth (BC)

**Euler's method** follows the slope field with straight steps of size $h$: $y_{\text{new}}=y_{\text{old}}+h\cdot\dfrac{dy}{dx}\Big|_{(x_{\text{old}},\,y_{\text{old}})}$.

:::example Two Euler steps
For $\dfrac{dy}{dx}=x+y$ with $y(0)=1$, use Euler's method with two steps of size $0.5$ to approximate $y(1)$.

**Solution.** At $(0,1)$ the slope is $1$: $y(0.5)\approx1+0.5\cdot1=1.5$. At $(0.5,1.5)$ the slope is $2$: $y(1)\approx1.5+0.5\cdot2=2.5$. The exact solution $y=2e^x-x-1$ gives $y(1)\approx3.437$; the solution curves are concave up here, so Euler's method underestimates.
:::

:::example Logistic growth
A population satisfies $\dfrac{dP}{dt}=0.2P\left(1-\dfrac{P}{1000}\right)$ with $P(0)=100$. Find $\displaystyle\lim_{t\to\infty}P(t)$, and the population when it grows fastest.

**Solution.** The carrying capacity is $1000$, so the limit is $1000$. The rate $0.2P\left(1-\dfrac{P}{1000}\right)$ is a downward parabola in $P$ with zeros $0$ and $1000$; its maximum is at $P=500$, half the carrying capacity.
:::

:::warning Common traps
- **No constant, or a late constant.** Write $+C$ when you integrate and find it before solving for $y$.
- **Wrong branch.** After $y^2=\dots$, the initial condition decides the sign of the root.
- **Dividing by zero.** Separating $\dfrac{dy}{dx}=xy$ divides by $y$; the constant solution $y=0$ is lost, which is fine when $y(0)\ne0$.
- **Domain.** A solution such as $y=\dfrac{1}{1-x}$ through $(0,1)$ only lives on $x<1$.
:::

:::terms
- differential equation | phương trình vi phân
- solution curve | đường cong nghiệm
- slope field | trường hướng (trường độ dốc)
- separation of variables | tách biến
- initial condition | điều kiện ban đầu
- exponential growth / decay | tăng trưởng / suy giảm theo hàm mũ
- Euler's method | phương pháp Euler
- logistic growth, carrying capacity | tăng trưởng logistic, sức chứa
:::

## Similar exercises

:::exercise Multiple choice
Which is the solution of $\dfrac{dy}{dx}=2xe^{-y}$ with $y(0)=0$?
A. $y=x^2$
B. $y=\ln\left(x^2+1\right)$
C. $y=e^{x^2}-1$
D. $y=\ln\left(x^2\right)+1$

::hint
**What you need:** separate as $e^y\,dy=2x\,dx$.

**Steps:**
1. $e^y=x^2+C$; at $(0,0)$, $C=1$.

::solution
$e^y=x^2+1$, so $y=\ln\left(x^2+1\right)$: answer **B**.
:::

:::exercise Free response
Show that $y=Ce^{-x}+x-1$ is a solution of $\dfrac{dy}{dx}=x-y$ for every constant $C$.

::hint
**What you need:** compute both sides separately.

::solution
Left side: $y'=-Ce^{-x}+1$. Right side: $x-\left(Ce^{-x}+x-1\right)=1-Ce^{-x}$. They are equal for every $C$. With $C=0$ this is the line in the slope field above.
:::

:::exercise Free response
Solve $\dfrac{dy}{dx}=y^2$ with $y(0)=1$, and state where the solution exists.

::hint
**What you need:** $\dfrac{dy}{y^2}=dx$ integrates to $-\dfrac1y=x+C$.

**Steps:**
1. At $(0,1)$: $C=-1$.
2. Solve for $y$.

::solution
$-\dfrac1y=x-1$, so $y=\dfrac{1}{1-x}$. The curve through $(0,1)$ blows up at $x=1$, so the solution exists for $x<1$.
:::

:::exercise Multiple choice
A radioactive substance has a half-life of $10$ years. What fraction of it remains after $30$ years?
A. $\dfrac13$
B. $\dfrac16$
C. $\dfrac18$
D. $\dfrac{1}{30}$

::hint
**What you need:** $30$ years is three half-lives.

::solution
$\left(\dfrac12\right)^3=\dfrac18$: answer **C**.
:::

:::exercise Free response
For $\dfrac{dy}{dx}=x^2-y$, find the slope of the solution curve through $(2,1)$ and the equation of its tangent line there. Use it to approximate $y(2.1)$.

::hint
**What you need:** slope $=2^2-1$; tangent line $y=1+m(x-2)$.

::solution
The slope is $3$, the tangent line is $y=1+3(x-2)$, and $y(2.1)\approx1+3(0.1)=1.3$.
:::

## Application exercises

:::exercise Cooling cup of tea
A cup of tea at $90$ degrees Celsius is placed in a room at $20$ degrees Celsius. Its temperature satisfies $\dfrac{dT}{dt}=-k(T-20)$, with $t$ in minutes, and $T(10)=55$. Find $T(20)$.

::hint
**What you need:** $T-20=70e^{-kt}$.

**Steps:**
1. $35=70e^{-10k}$, so $e^{-10k}=\dfrac12$.
2. $T(20)-20=70\left(e^{-10k}\right)^2$.

::solution
The temperature difference halves every $10$ minutes: $T(20)=20+70\cdot\dfrac14=37.5$ degrees Celsius.
:::

:::exercise An AP-style question
Consider $\dfrac{dy}{dx}=x(y-1)$, and let $y=f(x)$ be the solution with $f(0)=3$.
a) Find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$, and evaluate it at $(0,3)$.
b) Find $f(x)$ by separation of variables.

::hint
**What you need:** product rule for a), and $\dfrac{dy}{y-1}=x\,dx$ for b).

**Steps:**
1. $\dfrac{d^2y}{dx^2}=(y-1)+x\dfrac{dy}{dx}=(y-1)+x^2(y-1)$.
2. $\ln|y-1|=\dfrac{x^2}{2}+C$; at $(0,3)$, $C=\ln2$.

::solution
a) $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, equal to $2$ at $(0,3)$: the graph is concave up there.

b) $y-1=2e^{x^2/2}$, so $f(x)=1+2e^{x^2/2}$.
:::

:::exercise BC: Euler's method
For $\dfrac{dy}{dx}=2y$ with $y(0)=1$, use two Euler steps of size $0.25$ to approximate $y(0.5)$. Compare with the exact value.

::hint
**What you need:** slope at each point is $2y$.

**Steps:**
1. $y(0.25)\approx1+0.25\cdot2$.
2. $y(0.5)\approx1.5+0.25\cdot3$.

::solution
$y(0.25)\approx1.5$ and $y(0.5)\approx2.25$. The exact solution is $y=e^{2x}$, so $y(0.5)=e\approx2.718$: Euler's method underestimates because the solution is concave up.
:::

:::exercise BC: logistic model
A rumor spreads in a school of $600$ students according to $\dfrac{dP}{dt}=0.3P\left(1-\dfrac{P}{600}\right)$, where $P$ is the number who have heard it after $t$ days, and $P(0)=100$.
a) Find $\displaystyle\lim_{t\to\infty}P(t)$.
b) For what value of $P$ is the rumor spreading fastest?
c) Is the graph of $P$ concave up or concave down at $t=0$?

::hint
**What you need:** carrying capacity; maximum of a quadratic in $P$; the sign of $\dfrac{d^2P}{dt^2}$ changes at half the carrying capacity.

::solution
a) $600$. b) $P=300$. c) Concave up: $P(0)=100<300$, so $\dfrac{dP}{dt}$ is still increasing.
:::

:::quiz
::mc
Which function is a solution of $\dfrac{dy}{dx}=-2y$?
A. $y=e^{-2x}+1$
B. $y=-2e^{x}$
C. $y=5e^{-2x}$
D. $y=e^{2x}$
::key C
$y'=-10e^{-2x}=-2\left(5e^{-2x}\right)$.

::mc
What is the slope of the solution curve of $\dfrac{dy}{dx}=x^2-y$ at the point $(2,1)$?
A. $1$
B. $3$
C. $5$
D. $4$
::key B
$2^2-1=3$.

::mc
If $\dfrac{dy}{dt}=ky$, $y(0)=40$ and $y(2)=10$, then $k$ equals
A. $\ln2$
B. $-\dfrac12$
C. $\dfrac{\ln4}{4}$
D. $-\ln2$
::key D
$10=40e^{2k}$, so $e^{2k}=\dfrac14$ and $k=\dfrac{\ln(1/4)}{2}=-\ln2$.

::mc
What is the solution of $\dfrac{dy}{dx}=y\cos x$ with $y(0)=2$?
A. $y=2e^{\sin x}$
B. $y=2+\sin x$
C. $y=e^{\sin x}+1$
D. $y=2e^{\cos x}$
::key A
$\ln|y|=\sin x+C$; at $(0,2)$, $C=\ln2$.

::tf
(BC) A population satisfies $\dfrac{dP}{dt}=0.5P\left(1-\dfrac{P}{200}\right)$ with $P(0)=50$.
a) $\displaystyle\lim_{t\to\infty}P(t)=200$.
b) $P$ is increasing for all $t\ge0$.
c) $P$ grows fastest when $P=100$.
d) The graph of $P$ is concave down when $P=50$.
::key T T T F
a) True: carrying capacity. b) True: $0<P<200$ makes $\dfrac{dP}{dt}>0$. c) True: half the carrying capacity. d) False: below $100$, $\dfrac{dP}{dt}$ is still increasing, so the graph is concave up.

::sa
If $\dfrac{dy}{dx}=6x^2$ and $y(1)=5$, find $y(2)$.
::key 19
$y=2x^3+C$, $C=3$, so $y(2)=16+3=19$.

::sa
A population of $200$ doubles every $5$ hours. What is the population after $15$ hours?
::key 1600
Three doublings: $200\cdot2^3=1600$.
:::
