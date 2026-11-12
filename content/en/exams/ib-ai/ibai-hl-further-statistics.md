---
title: Further statistics and differential equations
description: IB Maths AI HL: linear combinations of random variables, the Poisson distribution, confidence intervals for a mean, and differential equations with Euler.
minutes: 55
---

:::goals
- Find the mean and variance of linear combinations of independent random variables.
- Use the Poisson distribution for counts of random events, including sums of Poisson variables.
- Construct and interpret a confidence interval for a mean with the GDC.
- Set up and solve simple differential equations, including by separating variables, and approximate solutions with Euler's method.
:::

A bakery sells bags of six rolls. Each roll's weight varies a little, and so does the bag's. How likely is a full bag to be underweight? A call centre receives about three calls an hour, at random. How likely is a quiet hour with no calls at all? A cup of coffee cools faster when it is hotter. How hot will it be in ten minutes? These are the kinds of questions HL students of Maths AI answer with the ideas in this lesson.

They share one theme: describing change and variation with a model, then using the model to make a prediction you can trust. The statistics here builds on the normal and binomial distributions you already know, and the differential equations build on derivatives. None of it is a big leap; each step is small and sensible.

## Linear combinations of random variables

For random variables $X$ and $Y$ and constants $a$, $b$:
$$E(aX+bY)=aE(X)+bE(Y).$$
If $X$ and $Y$ are **independent**,
$$\operatorname{Var}(aX\pm bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$
Notice the plus sign for both sum and difference: subtracting a random quantity adds uncertainty, it does not remove it. Also notice that $X_1+X_2$ (two separate items) is different from $2X$ (one item doubled): $\operatorname{Var}(X_1+X_2)=2\operatorname{Var}(X)$, but $\operatorname{Var}(2X)=4\operatorname{Var}(X)$. If $X$ and $Y$ are normal, so is any linear combination.

:::example Two parcels
Parcel A has mass $X$ with mean $50$ kg and standard deviation $4$ kg; parcel B has mass $Y$ with mean $30$ kg and standard deviation $3$ kg, independently. What are the mean and standard deviation of the total mass?
A. Mean $80$ kg, standard deviation $7$ kg
B. Mean $80$ kg, standard deviation $5$ kg
C. Mean $80$ kg, standard deviation $25$ kg
D. Mean $20$ kg, standard deviation $5$ kg

**Solution.** The mean is $E(X+Y)=50+30=80$ kg.

Because the masses are independent, the variances add: $\operatorname{Var}(X+Y)=4^2+3^2=25$, so the standard deviation is $\sqrt{25}=5$ kg.

So the total has mean $80$ kg and standard deviation $5$ kg, answer **B**. Option A adds the standard deviations, which is never correct; option C gives the variance.
:::

## The Poisson distribution

The **Poisson distribution** $X\sim\text{Po}(m)$ models the number of events in a fixed interval of time or space when events happen **singly**, **independently** and at a **constant mean rate**:
$$P(X=k)=\frac{m^ke^{-m}}{k!},\qquad E(X)=\operatorname{Var}(X)=m.$$
If $X\sim\text{Po}(m)$ and $Y\sim\text{Po}(n)$ are independent, then $X+Y\sim\text{Po}(m+n)$. A quick check that a Poisson model is sensible: the mean and variance of the data should be roughly equal.

:::example A call centre
Calls arrive at random at a mean rate of $3$ per hour.
a) Find the probability of exactly $2$ calls in an hour.
b) Find the probability of at least one call in an hour.
c) Find the probability of at most $2$ calls in two hours.

**Solution.** a) With $X\sim\text{Po}(3)$, $P(X=2)=\dfrac{3^2e^{-3}}{2!}\approx0.224$.

b) $P(X\ge1)=1-P(X=0)=1-e^{-3}\approx0.950$.

c) Over two hours the mean is $6$, so $Y\sim\text{Po}(6)$ and the GDC gives $P(Y\le2)\approx0.0620$.

So the probabilities are about $0.224$, $0.950$ and $0.0620$.
:::

## Confidence intervals for a mean

When the population standard deviation is unknown, a **confidence interval** for the mean $\mu$ uses the $t$ distribution with $n-1$ degrees of freedom:
$$\bar x\pm t^*\frac{s_{n-1}}{\sqrt n}.$$
The GDC computes it from data or summary statistics. A $95\%$ interval means that the method captures the true mean in about $95\%$ of samples; it does not mean that $\mu$ moves around.

:::example An interval for a mean
A random sample of $10$ batteries has mean life $12.3$ hours and sample standard deviation $1.5$ hours. Find a $95\%$ confidence interval for the mean life of all the batteries, assuming lifetimes are normal.

**Solution.** With $9$ degrees of freedom, $t^*\approx2.262$, and the margin of error is $2.262\times\dfrac{1.5}{\sqrt{10}}\approx1.073$.

So the interval is $12.3\pm1.073$, that is $(11.2,\ 13.4)$ hours, to three significant figures.

So we are $95\%$ confident that the mean life of all the batteries is between about $11.2$ and $13.4$ hours.
:::

## Differential equations

A **differential equation** links a function with its derivative. Two models appear again and again:

- **Growth or decay proportional to size:** $\dfrac{dy}{dt}=ky$ has solution $y=y_0e^{kt}$.
- **Cooling towards a surrounding temperature $T_s$:** $\dfrac{dT}{dt}=-k(T-T_s)$ has solution $T=T_s+(T_0-T_s)e^{-kt}$.

Many equations of the form $\dfrac{dy}{dx}=f(x)g(y)$ can be solved by **separating variables**: rewrite as $\dfrac{1}{g(y)}\,dy=f(x)\,dx$, integrate both sides, and use the initial condition to find the constant.

When an equation cannot be solved exactly, **Euler's method** builds an approximate solution step by step with step size $h$:
$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h\times\frac{dy}{dx}\Big|_{(x_n,y_n)}.$$
Each step follows the tangent for a short distance; smaller steps usually give better approximations.

:::example A growing population
A population grows at a rate proportional to its size: $\dfrac{dP}{dt}=0.05P$, with $P=200$ when $t=0$ (years). Find $P$ after $10$ years and the time for the population to double.

**Solution.** Separating variables, $\dfrac{1}{P}\,dP=0.05\,dt$, so $\ln P=0.05t+c$, which gives $P=Ae^{0.05t}$. The initial condition gives $A=200$, so $P=200e^{0.05t}$.

After $10$ years, $P=200e^{0.5}\approx330$. The population doubles when $e^{0.05t}=2$, that is $t=\dfrac{\ln2}{0.05}\approx13.9$ years.

So the population is about $330$ after $10$ years and doubles in about $13.9$ years.
:::

:::example Euler's method
For $\dfrac{dy}{dx}=x+y$ with $y=1$ when $x=0$, use Euler's method with $h=0.1$ to estimate $y$ when $x=0.3$.
A. $1.300$
B. $1.400$
C. $1.362$
D. $1.220$

**Solution.** Each step adds $h\times(x_n+y_n)$:

$y_1=1+0.1(0+1)=1.1$; $y_2=1.1+0.1(0.1+1.1)=1.22$; $y_3=1.22+0.1(0.2+1.22)=1.362$.

So the estimate is $y\approx1.362$, answer **C**. Option D stops after two steps. The exact value is about $1.400$: Euler's method underestimates here because the curve bends upwards away from each tangent.
:::

:::warning Common traps
- **Variances add, standard deviations do not:** find the variance first, then take the square root.
- **$X_1+X_2$ versus $2X$:** two separate items versus one item doubled.
- **Poisson rate:** scale the mean to the interval in the question.
- **Euler's method:** use the gradient at the **start** of each step, and count the steps carefully.
- **Initial conditions:** do not forget the constant of integration.
:::

:::terms
- linear combination | tổ hợp tuyến tính
- independent random variables | các biến ngẫu nhiên độc lập
- Poisson distribution | phân phối Poisson
- mean rate | tốc độ trung bình
- confidence interval | khoảng tin cậy
- differential equation | phương trình vi phân
- separation of variables | tách biến
- initial condition | điều kiện ban đầu
- Euler's method | phương pháp Euler
- step size | bước nhảy
:::

## Similar exercises

:::exercise
Independent random variables $X$ and $Y$ have $E(X)=50$, $\operatorname{Var}(X)=16$, $E(Y)=30$ and $\operatorname{Var}(Y)=9$. Find $E(2X-Y)$ and $\operatorname{Var}(2X-Y)$.

::hint
**What you need:** $\operatorname{Var}(aX-bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)$.

::solution
The mean is $E(2X-Y)=2(50)-30=70$.

Because $X$ and $Y$ are independent, $\operatorname{Var}(2X-Y)=2^2(16)+(-1)^2(9)=64+9=73$; the variances add even though we subtract.

So $E(2X-Y)=70$ and $\operatorname{Var}(2X-Y)=73$.

**Answer.** $70$ and $73$.
:::

:::exercise
For $X\sim\text{Po}(2.5)$, find $P(X=0)$ and $P(X=4)$.

::hint
**What you need:** $P(X=k)=\dfrac{m^ke^{-m}}{k!}$.

::solution
The number of events in a fixed interval with mean $2.5$ follows a Poisson distribution, so we substitute $m=2.5$ into the Poisson formula $P(X=k)=\dfrac{m^ke^{-m}}{k!}$. For $k=0$, since $2.5^0=1$ and $0!=1$, $P(X=0)=e^{-2.5}\approx0.0821$.

Similarly $P(X=4)=\dfrac{2.5^4e^{-2.5}}{4!}=\dfrac{39.0625\times0.08209}{24}\approx0.134$.

So $P(X=0)\approx0.0821$ and $P(X=4)\approx0.134$.

**Answer.** $0.0821$; $0.134$.
:::

:::exercise
State three conditions under which a Poisson distribution is a suitable model for the number of cars passing a point in a minute.

::hint
**What you need:** single, independent events at a constant mean rate.

::solution
The cars must pass one at a time (singly), the passing of one car must not affect when the next passes (independently), and the mean number of cars per minute must stay the same during the period considered (constant rate).

So the model is suitable at a steady time of day, but not, for example, when cars arrive in groups after a traffic light.

**Answer.** Singly, independently, constant mean rate.
:::

:::exercise
Solve $\dfrac{dy}{dx}=3y$ with $y=4$ when $x=0$.

::hint
**What you need:** $\dfrac{dy}{dx}=ky$ gives $y=y_0e^{kx}$.

::solution
The rate of change is proportional to $y$, so we separate variables: $\dfrac1y\,dy=3\,dx$. Integrating both sides gives $\ln y=3x+c$, so $y=Ae^{3x}$.

The condition $y=4$ when $x=0$ gives $A=4$.

So $y=4e^{3x}$.

**Answer.** $y=4e^{3x}$.
:::

:::exercise
Solve $\dfrac{dy}{dx}=\dfrac{2x}{y}$ with $y=3$ when $x=0$, for $y>0$.

::hint
**What you need:** separate to $y\,dy=2x\,dx$.

::solution
Separating variables gives $y\,dy=2x\,dx$, and integrating both sides gives $\dfrac{y^2}{2}=x^2+c$.

Do not forget the constant: it is what the initial condition fixes. The condition $y=3$ when $x=0$ gives $c=\dfrac92$, so $y^2=2x^2+9$.

So, since $y>0$, $y=\sqrt{2x^2+9}$.

**Answer.** $y=\sqrt{2x^2+9}$.
:::

## Applied exercises

:::exercise
Customers arrive at a small shop at random at a mean rate of $4$ every $10$ minutes. Find the probability that more than $3$ customers arrive in a $10$-minute period.

::hint
**What you need:** $P(X>3)=1-P(X\le3)$ with $X\sim\text{Po}(4)$.

::solution
The number of customers in $10$ minutes is $X\sim\text{Po}(4)$, since they arrive singly, independently and at a constant mean rate.

Then $P(X>3)=1-P(X\le3)\approx1-0.4335=0.567$, using the GDC for the cumulative probability.

So the probability of more than $3$ customers is about $0.567$.

**Answer.** About $0.567$.
:::

:::exercise
A cup of coffee at $90^\circ$C cools in a room at $20^\circ$C according to $\dfrac{dT}{dt}=-0.1(T-20)$, with $t$ in minutes. Find the temperature after $10$ minutes.

::hint
**What you need:** $T=T_s+(T_0-T_s)e^{-kt}$.

::solution
This is the cooling model with $T_s=20$, $T_0=90$ and $k=0.1$, so $T=20+70e^{-0.1t}$.

After $10$ minutes, $T=20+70e^{-1}\approx45.8^\circ$C.

So the coffee is about $45.8^\circ$C after $10$ minutes.

**Answer.** About $45.8^\circ$C.
:::

:::exercise
For $\dfrac{dy}{dx}=0.2y$ with $y=2$ when $x=0$, use Euler's method with $h=0.5$ to estimate $y$ when $x=1$, and compare with the exact value.

::hint
**What you need:** two steps, each multiplying $y$ by $1+0.5(0.2)=1.1$.

::solution
Each step gives $y_{n+1}=y_n+0.5(0.2y_n)=1.1y_n$, so $y_1=2.2$ and $y_2=2.42$.

The exact solution is $y=2e^{0.2x}$, so at $x=1$ it is $2e^{0.2}\approx2.443$.

So Euler's method gives $2.42$, slightly below the exact value $2.443$.

**Answer.** $2.42$; exact $2.443$.
:::

:::exercise Challenge
A box holds $6$ apples, each with mass normally distributed with mean $150$ g and standard deviation $10$ g, independently. The empty box has mass with mean $200$ g and standard deviation $5$ g. Find the probability that a full box weighs more than $1150$ g.

::hint
**What you need:** the total is $X_1+\dots+X_6+B$, not $6X+B$.

::solution
The total mass $W=X_1+X_2+\dots+X_6+B$ has mean $6(150)+200=1100$ g.

Since the six apples and the box are independent, $\operatorname{Var}(W)=6(10^2)+5^2=625$, so the standard deviation is $25$ g, and $W$ is normal.

Then $P(W>1150)=P\left(Z>\dfrac{1150-1100}{25}\right)=P(Z>2)\approx0.0228$.

So about $2.28\%$ of full boxes weigh more than $1150$ g.

**Answer.** About $0.0228$.
:::

:::quiz
::mc
Independent $X$ and $Y$ have standard deviations $6$ and $8$. The standard deviation of $X+Y$ is
A. $14$
B. $100$
C. $10$
D. $2$
::key C
$\sqrt{36+64}=10$.

::mc
For $X\sim\text{Po}(4)$, $\operatorname{Var}(X)$ is
A. $4$
B. $2$
C. $16$
D. $0.25$
::key A
For a Poisson distribution the variance equals the mean.

::mc
The solution of $\dfrac{dy}{dt}=0.3y$ with $y(0)=5$ is
A. $y=0.3e^{5t}$
B. $y=5+0.3t$
C. $y=5t^{0.3}$
D. $y=5e^{0.3t}$
::key D
Growth proportional to size is exponential.

::mc
Euler's method with step $h$ uses
A. the gradient at the end of each step
B. the gradient at the start of each step
C. the exact solution
D. the area under the curve
::key B
$y_{n+1}=y_n+h\times\text{gradient at }(x_n,y_n)$.

::tf
Calls arrive as $\text{Po}(2)$ per minute. Decide whether each statement is true or false.
a) The mean number per minute is $2$.
b) The number in $3$ minutes is $\text{Po}(6)$.
c) $P(X=0)=e^{-2}$ for one minute.
d) The variance per minute is $4$.
::key T T T F
The variance equals the mean, $2$.

::sa
Find $\operatorname{Var}(3X)$ if $\operatorname{Var}(X)=2$.
::key 18
$3^2\times2=18$.

::sa
Using Euler's method on $\dfrac{dy}{dx}=2$ with $y(0)=1$ and $h=0.5$, find $y$ at $x=1$.
::key 3
Two steps of $0.5\times2=1$.
:::
