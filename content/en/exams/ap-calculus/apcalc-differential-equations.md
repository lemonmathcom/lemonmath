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

Think of a bath filling, or bacteria multiplying. You rarely know the formula for the amount at first. What you can often say is how fast it is changing. So can we get back to the amount itself? A differential equation answers exactly that question. Unit 7 appears on the free-response section almost every year, usually as a full question: sketch a slope field at a few points, find a tangent line approximation, then solve the equation by separating variables. The separation part is worth several points, and graders are strict about each step. The good news is that the steps are always the same, so once you know them you can use them again and again.

## Solutions and slope fields

Let us start with three names. A **differential equation** is an equation about an unknown function, written using its derivatives. Put a function into the equation: if both sides agree, that function is a **solution**. But how can we see the solutions without solving anything? That is what a **slope field** is for. At each point $(x,y)$ the equation gives the slope $\dfrac{dy}{dx}$, and we draw a short segment with exactly that slope. A solution curve simply follows the segments it passes through.

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
1. **Separate:** put all the $y$ terms on one side with $dy$, and all the $x$ terms on the other with $dx$.
2. **Integrate both sides**, and remember the constant $C$.
3. **Use the initial condition** to find $C$ right away, not at the end.
4. **Solve for $y$.** Do this once you know $C$.
Graders read your work in this order, so it helps to write it in this order too.

This is a spot where many students slip: the constant of integration. Without it the whole question usually loses marks, however good the later steps are. So write $+C$ the moment you integrate, and do not plan to add it later.
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

Some quantities grow faster the larger they are, like bacteria multiplying. Others shrink faster the larger they are, like a radioactive substance decaying. When the rate of change is proportional to the quantity itself, we write $\dfrac{dy}{dt}=ky$, and the solution is $y=y_0e^{kt}$. Growth when $k>0$, decay when $k<0$, so the sign of the constant of proportionality tells you the direction.

:::example Doubling time
A bacteria population grows at a rate proportional to its size. It has $500$ bacteria at $t=0$ and $1000$ at $t=3$ hours. Find the population at $t=6$, and the constant $k$.

**Solution.** It doubles every $3$ hours, so $P(6)=2000$. From $1000=500e^{3k}$: $k=\dfrac{\ln2}{3}\approx0.231$ per hour.
:::

## Euler's method and logistic growth (BC)

Not every equation can be solved with a neat formula. We can still walk along the slope field in small steps, like a walker who reads the signpost where they stand and then takes the next step. That is the idea of **Euler's method**: straight steps of size $h$, each one using the slope at the point where we stand. The formula is $y_{\text{new}}=y_{\text{old}}+h\cdot\dfrac{dy}{dx}\Big|_{(x_{\text{old}},\,y_{\text{old}})}$.

:::example Two Euler steps
For $\dfrac{dy}{dx}=x+y$ with $y(0)=1$, use Euler's method with two steps of size $0.5$ to approximate $y(1)$.

**Solution.** At $(0,1)$ the slope is $1$: $y(0.5)\approx1+0.5\cdot1=1.5$. At $(0.5,1.5)$ the slope is $2$: $y(1)\approx1.5+0.5\cdot2=2.5$. The exact solution $y=2e^x-x-1$ gives $y(1)\approx3.437$; the solution curves are concave up here, so Euler's method underestimates.
:::

:::example Logistic growth
A population satisfies $\dfrac{dP}{dt}=0.2P\left(1-\dfrac{P}{1000}\right)$ with $P(0)=100$. Find $\displaystyle\lim_{t\to\infty}P(t)$, and the population when it grows fastest.

**Solution.** The carrying capacity is $1000$, so the limit is $1000$. The rate $0.2P\left(1-\dfrac{P}{1000}\right)$ is a downward parabola in $P$ with zeros $0$ and $1000$; its maximum is at $P=500$, half the carrying capacity.
:::

:::warning Common traps
- **No constant, or a late constant.** Write $+C$ the moment you integrate, and find it before solving for $y$.
- **Wrong branch.** Once you have $y^2=\dots$, do not rush to take the positive root: the initial condition decides the sign of the root.
- **Dividing by zero.** To separate $\dfrac{dy}{dx}=xy$ we must divide by $y$, so the constant solution $y=0$ is lost. This is fine when $y(0)\ne0$.
- **Domain.** A solution such as $y=\dfrac{1}{1-x}$ through $(0,1)$ only lives on $x<1$, so remember that it is valid only on an interval.
From start to finish the aim is the same: from a rate of change, find the quantity itself. Keep to the steps above and practise with the exercises below until they feel natural.
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
This is a separable equation. From $\dfrac{dy}{dx}=2xe^{-y}$, multiply both sides by $e^y\,dx$:
$$e^y\,dy=2x\,dx.$$

Integrating both sides:
$$e^y=x^2+C.$$

The condition $y(0)=0$ gives $e^0=0^2+C$, so $C=1$. Therefore
$$e^y=x^2+1\ \Rightarrow\ y=\ln\left(x^2+1\right)$$
(valid because $x^2+1>0$ for every $x$).

So the answer is **B**.

*Remark.* Option A is wrong because $y=x^2$ has $y'=2x\ne2xe^{-x^2}$. Option C satisfies $y(0)=0$ but not the differential equation (since $y'=2xe^{x^2}$ while $2xe^{-y}=2xe^{1-e^{x^2}}$). Option D is undefined at $x=0$ because $\ln\left(0^2\right)$ does not exist.

**Answer.** B.
:::

:::exercise Free response
Show that $y=Ce^{-x}+x-1$ is a solution of $\dfrac{dy}{dx}=x-y$ for every constant $C$.

::hint
**What you need:** compute both sides separately.

::solution
Let $y=Ce^{-x}+x-1$ with $C$ any constant. We show that both sides of $\dfrac{dy}{dx}=x-y$ are equal.

Left side: differentiating with respect to $x$,
$$y'=-Ce^{-x}+1.$$

Right side: substituting $y$,
$$x-y=x-\left(Ce^{-x}+x-1\right)=x-Ce^{-x}-x+1=1-Ce^{-x}.$$

Both sides equal $1-Ce^{-x}$ for every $x$ and every $C$.

So $y=Ce^{-x}+x-1$ is a solution of $\dfrac{dy}{dx}=x-y$ for every constant $C$. (For example, when $C=0$ the solution is the line $y=x-1$.)

**Answer.** Both sides equal $1-Ce^{-x}$, so $y=Ce^{-x}+x-1$ is a solution for every constant $C$.
:::

:::exercise Free response
Solve $\dfrac{dy}{dx}=y^2$ with $y(0)=1$, and state where the solution exists.

::hint
**What you need:** $\dfrac{dy}{y^2}=dx$ integrates to $-\dfrac1y=x+C$.

**Steps:**
1. At $(0,1)$: $C=-1$.
2. Solve for $y$.

::solution
This is a separable equation. Since $y(0)=1\ne0$, we divide both sides by $y^2$ (for $y\ne0$):
$$\frac{dy}{y^2}=dx.$$

Integrating both sides:
$$-\frac1y=x+C.$$

The condition $y(0)=1$ gives $-1=0+C$, so $C=-1$. Therefore
$$-\frac1y=x-1\ \Rightarrow\ y=\frac{1}{1-x}.$$

This solution is undefined at $x=1$, and $y\to+\infty$ as $x\to1^-$. The solution we want must be defined and continuous on an interval containing $x=0$ (the point of the initial condition), so that interval is $x<1$.

So the solution is $y=\dfrac{1}{1-x}$, and it exists for $x<1$.

**Answer.** $y=\dfrac{1}{1-x}$, which exists for $x<1$.
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
The half-life is the time it takes for the amount of substance to fall to half. Every $10$ years, the amount of radioactive substance remaining is $\dfrac12$ of the previous amount.

A period of $30$ years consists of $\dfrac{30}{10}=3$ half-lives, so the fraction remaining is
$$\left(\frac12\right)^3=\frac18.$$

So $\dfrac18$ of the original substance remains after $30$ years, and the answer is **C**.

**Answer.** C.
:::

:::exercise Free response
For $\dfrac{dy}{dx}=x^2-y$, find the slope of the solution curve through $(2,1)$ and the equation of its tangent line there. Use it to approximate $y(2.1)$.

::hint
**What you need:** slope $=2^2-1$; tangent line $y=1+m(x-2)$.

::solution
The slope of the solution curve at a point $(x, y)$ equals $\dfrac{dy}{dx}$ at that point.

At the point $(2, 1)$:
$$\frac{dy}{dx}=x^2-y=2^2-1=3.$$

The tangent line passes through $(2, 1)$ with slope $3$, so its equation is
$$y-1=3(x-2)\ \Rightarrow\ y=1+3(x-2).$$

Using the tangent line to approximate $y(2.1)$, where $2.1-2=0.1$:
$$y(2.1)\approx1+3(0.1)=1.3.$$

So the slope is $3$, the tangent line is $y=1+3(x-2)$, and $y(2.1)\approx1.3$.

**Answer.** Slope $3$; tangent line $y=1+3(x-2)$; $y(2.1)\approx1.3$.
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
Let $D=T-20$ be the temperature difference between the tea and the room. From $\dfrac{dT}{dt}=-k(T-20)$ we get $\dfrac{dD}{dt}=-kD$, so
$$D(t)=D(0)e^{-kt}.$$

At $t=0$: $D(0)=90-20=70$. At $t=10$: $D(10)=T(10)-20=55-20=35$. Hence
$$35=70e^{-10k}\ \Rightarrow\ e^{-10k}=\frac12.$$

So the temperature difference halves every $10$ minutes. At $t=20$:
$$D(20)=70e^{-20k}=70\left(e^{-10k}\right)^2=70\cdot\frac14=17.5.$$

Therefore $T(20)=20+D(20)=20+17.5=37.5$.

So after $20$ minutes the temperature of the tea is $37.5$ degrees Celsius.

**Answer.** $37.5$ degrees Celsius.
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
a) From $\dfrac{dy}{dx}=x(y-1)$, differentiate with respect to $x$ (product rule, with $y$ a function of $x$):
$$\frac{d^2y}{dx^2}=(y-1)+x\,\frac{dy}{dx}.$$

Substituting $\dfrac{dy}{dx}=x(y-1)$, we get
$$\frac{d^2y}{dx^2}=(y-1)+x\cdot x(y-1)=(y-1)\left(1+x^2\right).$$

At $(0, 3)$:
$$\frac{d^2y}{dx^2}=(3-1)\left(1+0^2\right)=2>0,$$
so the graph of $f$ is concave up at that point.

b) The equation is separable. Since $f(0)=3\ne1$, we have $y\ne1$ near $x=0$, and we write
$$\frac{dy}{y-1}=x\,dx.$$

Integrating both sides:
$$\ln|y-1|=\frac{x^2}{2}+C_1\ \Rightarrow\ y-1=Ae^{x^2/2}\quad(A\ne0).$$

The condition $f(0)=3$ gives $3-1=Ae^0$, so $A=2$. Therefore
$$y-1=2e^{x^2/2}\ \Rightarrow\ f(x)=1+2e^{x^2/2}.$$

So $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, equal to $2$ at $(0, 3)$, and $f(x)=1+2e^{x^2/2}$.

**Answer.** a) $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, equal to $2$ at $(0, 3)$ (concave up); b) $f(x)=1+2e^{x^2/2}$.
:::

:::exercise BC: Euler's method
For $\dfrac{dy}{dx}=2y$ with $y(0)=1$, use two Euler steps of size $0.25$ to approximate $y(0.5)$. Compare with the exact value.

::hint
**What you need:** slope at each point is $2y$.

**Steps:**
1. $y(0.25)\approx1+0.25\cdot2$.
2. $y(0.5)\approx1.5+0.25\cdot3$.

::solution
Euler's method with step size $h=0.25$ gives $y_{n+1}=y_n+h\,f(x_n,y_n)$, where here $f(x,y)=2y$. The initial condition is $x_0=0$, $y_0=1$.

Step 1: $y_1=y_0+0.25\cdot2y_0=1+0.25\cdot2\cdot1=1.5$, that is $y(0.25)\approx1.5$.

Step 2: $y_2=y_1+0.25\cdot2y_1=1.5+0.25\cdot2\cdot1.5=1.5+0.75=2.25$, that is $y(0.5)\approx2.25$.

Exact value: the equation $\dfrac{dy}{dx}=2y$ has general solution $y=Ce^{2x}$; the condition $y(0)=1$ gives $C=1$, so $y=e^{2x}$ and
$$y(0.5)=e^{1}=e\approx2.718.$$

Comparison: $2.25<2.718$, so Euler's method underestimates. The reason is that the solution is concave up ($y''=4y>0$), so the graph lies above the tangent lines that Euler's method uses at each step.

So $y(0.5)\approx2.25$ by Euler's method, while the exact value is $e\approx2.718$.

**Answer.** $y(0.5)\approx2.25$ (Euler); exact value $e\approx2.718$; Euler's method underestimates.
:::

:::exercise BC: logistic model
A rumor spreads in a school of $600$ students according to $\dfrac{dP}{dt}=0.3P\left(1-\dfrac{P}{600}\right)$, where $P$ is the number who have heard it after $t$ days, and $P(0)=100$.
a) Find $\displaystyle\lim_{t\to\infty}P(t)$.
b) For what value of $P$ is the rumor spreading fastest?
c) Is the graph of $P$ concave up or concave down at $t=0$?

::hint
**What you need:** carrying capacity; maximum of a quadratic in $P$; the sign of $\dfrac{d^2P}{dt^2}$ changes at half the carrying capacity.

::solution
We have $\dfrac{dP}{dt}=0.3P\left(1-\dfrac{P}{600}\right)$ (a logistic model) with $P(0)=100$.

a) We have $\dfrac{dP}{dt}=0$ when $P=0$ or $P=600$; these are constant solutions. Since $0<P(0)=100<600$, $P$ always stays between $0$ and $600$, where $\dfrac{dP}{dt}>0$; that is, $P$ is increasing and bounded above by $600$. Hence $P(t)$ has a limit, and that limit must be a constant solution greater than $100$, namely $600$. So $\displaystyle\lim_{t\to\infty}P(t)=600$.

b) The rate of spread is $\dfrac{dP}{dt}=0.3P-\dfrac{P^2}{2000}$, a quadratic function of $P$ with negative coefficient of $P^2$, so it is largest at its vertex. Its derivative with respect to $P$ is $0.3-\dfrac{P}{1000}=0$ when $P=300$. So the rumor spreads fastest when $P=300$ (half of $600$).

c) Differentiating $\dfrac{dP}{dt}=0.3P-\dfrac{P^2}{2000}$ with respect to $t$ (chain rule):
$$\frac{d^2P}{dt^2}=\left(0.3-\frac{P}{1000}\right)\frac{dP}{dt}.$$
At $t=0$: $P=100$ and $\dfrac{dP}{dt}=0.3\cdot100\left(1-\dfrac{100}{600}\right)=25>0$. Therefore
$$\frac{d^2P}{dt^2}=(0.3-0.1)\cdot25=5>0.$$
So the graph of $P$ is concave up at $t=0$. (Reason: $P(0)=100<300$, so $\dfrac{dP}{dt}$ is still increasing.)

So a) the limit is $600$; b) the rumor spreads fastest when $P=300$; c) the graph of $P$ is concave up at $t=0$.

**Answer.** a) $600$; b) $P=300$; c) concave up.
:::

:::quiz
::mc TH
Which function is a solution of $\dfrac{dy}{dx}=-2y$?
A. $y=e^{-2x}+1$
B. $y=-2e^{x}$
C. $y=5e^{-2x}$
D. $y=e^{2x}$
::key C
$y'=-10e^{-2x}=-2\left(5e^{-2x}\right)$.

::mc NB
What is the slope of the solution curve of $\dfrac{dy}{dx}=x^2-y$ at the point $(2,1)$?
A. $1$
B. $3$
C. $5$
D. $4$
::key B
$2^2-1=3$.

::mc VD
If $\dfrac{dy}{dt}=ky$, $y(0)=40$ and $y(2)=10$, then $k$ equals
A. $\ln2$
B. $-\dfrac12$
C. $\dfrac{\ln4}{4}$
D. $-\ln2$
::key D
$10=40e^{2k}$, so $e^{2k}=\dfrac14$ and $k=\dfrac{\ln(1/4)}{2}=-\ln2$.

::mc VD
What is the solution of $\dfrac{dy}{dx}=y\cos x$ with $y(0)=2$?
A. $y=2e^{\sin x}$
B. $y=2+\sin x$
C. $y=e^{\sin x}+1$
D. $y=2e^{\cos x}$
::key A
$\ln|y|=\sin x+C$; at $(0,2)$, $C=\ln2$.

::tf TH TH TH VD
(BC) A population satisfies $\dfrac{dP}{dt}=0.5P\left(1-\dfrac{P}{200}\right)$ with $P(0)=50$.
a) $\displaystyle\lim_{t\to\infty}P(t)=200$.
b) $P$ is increasing for all $t\ge0$.
c) $P$ grows fastest when $P=100$.
d) The graph of $P$ is concave down when $P=50$.
::key T T T F
a) True: carrying capacity. b) True: $0<P<200$ makes $\dfrac{dP}{dt}>0$. c) True: half the carrying capacity. d) False: below $100$, $\dfrac{dP}{dt}$ is still increasing, so the graph is concave up.

::sa VD
If $\dfrac{dy}{dx}=6x^2$ and $y(1)=5$, find $y(2)$.
::key 19
$y=2x^3+C$, $C=3$, so $y(2)=16+3=19$.

::sa TH
A population of $200$ doubles every $5$ hours. What is the population after $15$ hours?
::key 1600
Three doublings: $200\cdot2^3=1600$.
:::
