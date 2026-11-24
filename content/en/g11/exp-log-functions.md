---
title: Exponential and logarithmic functions
description: Learn the domain, monotonicity, graphs and asymptotes of exponential and logarithmic functions; compare numbers, find inverses and model decay and growth.
minutes: 25
---

:::goals
- Recognise the exponential function $y=a^x$ and the logarithmic function $y=\log_ax$, and state their domain and range.
- Describe the monotonicity, graph and asymptote of each function according to the base $a$.
- Use monotonicity to compare numbers and use the inverse relationship to pass between the two functions.
- Apply both functions to real-life problems of decay and growth.
:::

Suppose that, each hour, the amount of a drug left in the blood is $85\%$ of the amount an hour earlier (hypothetical figures). If there is $40$ mg at first, then after $t$ hours there is $C(t)=40\cdot0.85^t$ mg. The doctor allows the next dose only when the amount falls below $10$ mg. After how many hours may the next dose be taken?

To answer, we need to understand how $C(t)$ falls as $t$ grows, and we need to "read backwards" from an amount to a time. These two tasks are exactly the study of exponential and logarithmic functions.

## Exploration: two families of graphs

We tabulate $y=2^x$ and $y=\left(\dfrac12\right)^x$:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $2^x$ | $\dfrac14$ | $\dfrac12$ | $1$ | $2$ | $4$ |
| $\left(\dfrac12\right)^x$ | $4$ | $2$ | $1$ | $\dfrac12$ | $\dfrac14$ |

Both functions take only positive values and both pass through $(0, 1)$. The first rises, the second falls. What decides whether the function rises or falls? Whether the base is greater or less than $1$.

## The exponential function

:::definition Exponential function
Let $a>0$, $a\neq1$. The function $y=a^x$ is called the **exponential function to base $a$**.
:::

:::theorem Properties of the exponential function $y=a^x$
- The domain is $\mathbb{R}$ and the range is $(0, +\infty)$.
- If $a>1$ the function is increasing on $\mathbb{R}$; if $0<a<1$ it is decreasing on $\mathbb{R}$.
- The graph always passes through $(0, 1)$ and $(1, a)$, lies entirely above the $x$-axis, and has the $x$-axis ($y=0$) as a horizontal asymptote.
:::

:::graph Graphs of $y=2^x$ (base greater than $1$) and $y=\left(\frac12\right)^x$ (base less than $1$)
alt: Two curves meeting at the point (0, 1); the curve y equals 2 to the power x rises from left to right, the curve y equals one half to the power x falls, and both lie above the x-axis
x: -3..3
y: -1..8
plot: 2^x
plot: 0.5^x
point: (0, 1) "" above-right
point: (1, 2) "" below-right
point: (-1, 2) "" above-left
label: (2.1, 6) "y = 2^x"
label: (-2.9, 6) "y = (1/2)^x"
:::

**Why is this true?** When $a>1$, each time $x$ increases by $1$ the value $a^x$ is multiplied by $a>1$, so it grows. When $0<a<1$, each multiplication by $a<1$ makes the value smaller. The value $a^x$ is never $0$ or negative, but it gets as close to $0$ as we like as $x$ moves in the "shrinking" direction, so the $x$-axis is a horizontal asymptote. The exponential function to base $e$ is $y=e^x$; since $e\approx2.718>1$, $y=e^x$ is increasing.

## The logarithmic function

:::definition Logarithmic function
Let $a>0$, $a\neq1$. The function $y=\log_ax$ is called the **logarithmic function to base $a$**.
:::

:::theorem Properties of the logarithmic function $y=\log_ax$
- The domain is $(0, +\infty)$ and the range is $\mathbb{R}$.
- If $a>1$ the function is increasing on $(0, +\infty)$; if $0<a<1$ it is decreasing on $(0, +\infty)$.
- The graph always passes through $(1, 0)$ and $(a, 1)$, lies entirely to the right of the $y$-axis, and has the $y$-axis ($x=0$) as a vertical asymptote.
- The functions $y=a^x$ and $y=\log_ax$ are inverses of each other; their graphs are symmetric about the line $y=x$.
:::

:::graph Graphs of $y=\log_2x$ (base greater than $1$) and $y=\log_{1/2}x$ (base less than $1$)
alt: Two curves lying to the right of the y-axis and crossing the x-axis at (1, 0); the curve for base 2 rises, the curve for base one half falls, and both get close to the y-axis as x approaches 0
x: -1..8
y: -4..4
plot: ln(x)/ln(2) ; 0.07..8
plot: -ln(x)/ln(2) ; 0.07..8
point: (1, 0) "" above-right
point: (2, 1) "" above-left
point: (2, -1) "" below-right
label: (6, 3) "y = log_2 x"
label: (6, -3) "y = log_(1/2) x"
:::

**Why is this true?** Since $y=\log_ax$ is the inverse of $y=a^x$, the roles of $x$ and $y$ are swapped: the point $(x_0, y_0)$ lies on the graph of $y=a^x$ exactly when $(y_0, x_0)$ lies on the graph of $y=\log_ax$. So the domain of one function is the range of the other, and increasing or decreasing is preserved. The point $(0, 1)$ of the exponential becomes $(1, 0)$, and the horizontal asymptote $y=0$ becomes the vertical asymptote $x=0$.

To compare two numbers with the same base we use monotonicity: for $a>1$, $a^{m}<a^{n}\Leftrightarrow m<n$ and $\log_ap<\log_aq\Leftrightarrow p<q$ ($p$, $q>0$); for $0<a<1$ the direction of the inequality is reversed.

## Examples

We begin with domains.

:::example Finding the domain
Find the domain of each function:

a) $y=\log_3(x-1)$.

b) $y=\log_{1/2}(4-x^2)$.

c) $y=2^{\sqrt{x}}$.

d) $y=\ln\dfrac{x+1}{x-3}$.

**Solution.** a) We need $x-1>0$, that is $x>1$. The domain is $(1, +\infty)$.

b) We need $4-x^2>0$, that is $-2<x<2$. The domain is $(-2, 2)$.

c) An exponential function is defined for every real exponent, so we only need $\sqrt x$ to be defined: $x\ge0$. The domain is $[0, +\infty)$.

d) We need $\dfrac{x+1}{x-3}>0$, that is $x<-1$ or $x>3$. The domain is $(-\infty, -1)\cup(3, +\infty)$.
:::

Next we compare numbers using monotonicity.

:::example Comparing numbers
Compare:

a) $2^{\sqrt2}$ and $2^{1.5}$.

b) $\left(\dfrac12\right)^{-0.3}$ and $\left(\dfrac12\right)^{0.2}$.

c) $\log_35$ and $\log_32$.

d) $\log_23$ and $\log_35$.

**Solution.** a) The base $2>1$, so the function is increasing. Since $\sqrt2\approx1.414<1.5$, $2^{\sqrt2}<2^{1.5}$.

b) The base $\dfrac12<1$, so the function is decreasing. Since $-0.3<0.2$, $\left(\dfrac12\right)^{-0.3}>\left(\dfrac12\right)^{0.2}$.

c) The base $3>1$ and $5>2$, so $\log_35>\log_32$.

d) The two logarithms have different bases, so we compare each with the number $\dfrac32$. Since $2^{1.5}=2\sqrt2\approx2.83<3$, $\log_23>1.5$. Since $3^{1.5}=3\sqrt3\approx5.20>5$, $\log_35<1.5$. Hence $\log_23>\log_35$.
:::

We find the base from a point on the graph.

:::example Finding the base from a graph
a) The graph of $y=a^x$ passes through $(-2, 25)$. Find $a$ and state whether the function increases or decreases.

b) The graph of $y=\log_ax$ passes through $(8, -3)$. Find $a$.

**Solution.** a) From $a^{-2}=25$ we get $\dfrac{1}{a^2}=25$, so $a^2=\dfrac1{25}$ and $a=\dfrac15$ (since $a>0$). The base $\dfrac15<1$, so the function is decreasing.

b) From $\log_a8=-3$ we get $a^{-3}=8$, so $a^3=\dfrac18$ and $a=\dfrac12$.

So a) $a=\dfrac15$, decreasing; b) $a=\dfrac12$.
:::

Now we find an inverse function and an asymptote.

:::example Inverse function and asymptote
Let $f(x)=2^x+1$.

a) Find the horizontal asymptote and the range of the graph of $f$.

b) Find the inverse function $f^{-1}$ and its domain.

**Solution.** a) Since $2^x>0$ and $2^x$ gets close to $0$ when $x$ is very negative, $f(x)>1$ and $f(x)$ gets close to $1$. The horizontal asymptote is $y=1$ and the range is $(1, +\infty)$.

b) Put $y=2^x+1$. Then $2^x=y-1$, so $x=\log_2(y-1)$. Renaming the variable, $f^{-1}(x)=\log_2(x-1)$, with domain $(1, +\infty)$, which equals the range of $f$.

**Check.** $f(3)=9$ and $f^{-1}(9)=\log_28=3$.
:::

Now we return to the drug problem from the start, using all four steps.

:::example Application: when can the next dose be taken?
Suppose the amount of drug in the blood after $t$ hours is $C(t)=40\cdot0.85^t$ mg (hypothetical figures). After at least how many whole hours does the amount fall below $10$ mg?

**Solution.**

*Understand.* We need the smallest whole number $t$ with $40\cdot0.85^t<10$.

*Plan.* The base $0.85<1$, so $C(t)$ is decreasing: the larger $t$ is, the less drug remains. So we only need the solution $t_0$ of $40\cdot0.85^t=10$ and then take the next whole number. That solution is found with a logarithm.

*Solve.* From $40\cdot0.85^{t_0}=10$ we get $0.85^{t_0}=\dfrac14$, so
$$t_0=\log_{0.85}\frac14=\frac{\ln0.25}{\ln0.85}\approx8.53.$$
Since the function is decreasing, $C(t)<10$ when $t>8.53$. The smallest whole number of hours is $9$.

*Look back.* Is the result reasonable? Check: $C(8)\approx10.9>10$ and $C(9)\approx9.26<10$, so $9$ hours is right. What if the initial dose were $80$ mg? Then $80\cdot0.85^t<10$ gives $t>\log_{0.85}\dfrac18\approx12.8$, that is $13$ hours; doubling the dose adds about $4.3$ hours to the wait, whatever the initial dose.
:::

:::warning Common mistakes
- **Mixing up monotonicity.** Wrong: $y=\left(\dfrac12\right)^x$ is increasing because $\dfrac12>0$. Why it is wrong: monotonicity depends on whether the base is greater or less than $1$, not on its sign. Right: the base $\dfrac12<1$, so the function is decreasing.
- **Forgetting to reverse the inequality.** Wrong: $\log_{1/2}3<\log_{1/2}5$ because $3<5$. Why it is wrong: the function $\log_{1/2}x$ is decreasing. Right: $\log_{1/2}3>\log_{1/2}5$.
- **Confusing the asymptotes.** Wrong: the graph of $y=\log_2x$ has the horizontal asymptote $y=0$. Why it is wrong: the asymptote $y=0$ belongs to the exponential function; the logarithm keeps growing without bound rather than levelling off at $0$. Right: the graph of $y=\log_2x$ has the vertical asymptote $x=0$.
- **Domain of a logarithm.** Wrong: $y=\log_2(x-3)$ is defined for $x\ge3$. Why it is wrong: the argument must be positive, and $\log_20$ is meaningless. Right: the domain is $(3, +\infty)$.
:::

**Connections.** These two functions rest on [powers with real exponents](lesson:real-exponents) and [logarithms](lesson:logarithms): the logarithmic function is the inverse of the exponential function. Continuity from the lesson on [continuous functions](lesson:continuity) lets us use their unbroken graphs to locate solutions. The lesson on [exponential and logarithmic equations and inequalities](lesson:exp-log-equations) will solve equations we have so far met only in the form $0.85^t=\dfrac14$. In practice, the exponential function models steady proportional growth and decay, while the logarithmic function tells us how long it takes to reach a given level.

## Key terms

:::terms
- hàm số mũ | exponential function
- hàm số lôgarit | logarithmic function
- cơ số | base
- tập xác định | domain
- tập giá trị | range
- đồng biến | increasing
- nghịch biến | decreasing
- tiệm cận ngang | horizontal asymptote
- tiệm cận đứng | vertical asymptote
- hàm ngược | inverse function
:::

## Summary

- $y=a^x$ ($a>0$, $a\neq1$): domain $\mathbb{R}$, range $(0, +\infty)$, passes through $(0, 1)$, horizontal asymptote $y=0$.
- $y=\log_ax$: domain $(0, +\infty)$, range $\mathbb{R}$, passes through $(1, 0)$, vertical asymptote $x=0$.
- Base $a>1$: increasing; base $0<a<1$: decreasing.
- The two functions are inverses; their graphs are symmetric about the line $y=x$.
- Compare numbers with the same base by monotonicity, reversing the inequality when the base is less than $1$; for different bases, compare with an intermediate number.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find the domain of each function:

a) $y=\log_2(3x+6)$.

b) $y=\log(x^2-5x+6)$.

c) $y=3^{\frac{1}{x-1}}$.

d) $y=\ln(2-|x|)$.

::hint
**What you need:** $\log_au$ needs $u>0$; an exponential function is defined when the exponent is defined.

**Steps:**
1. Write the condition on the argument or exponent.
2. Solve the inequality, or the condition that a denominator is non-zero.

::solution
a) We need $3x+6>0$, that is $x>-2$.

b) We need $x^2-5x+6>0\Leftrightarrow(x-2)(x-3)>0$, that is $x<2$ or $x>3$.

c) We need $x-1\neq0$, that is $x\neq1$.

d) We need $2-|x|>0$, that is $|x|<2$, or $-2<x<2$.

So a) $(-2, +\infty)$; b) $(-\infty, 2)\cup(3, +\infty)$; c) $\mathbb{R}\setminus\{1\}$; d) $(-2, 2)$.

**Answer.** a) $(-2, +\infty)$; b) $(-\infty, 2)\cup(3, +\infty)$; c) $\mathbb{R}\setminus\{1\}$; d) $(-2, 2)$.
:::

:::exercise
Compare:

a) $\left(\dfrac23\right)^{1.2}$ and $\left(\dfrac23\right)^{1.5}$.

b) $\log_{0.2}2$ and $\log_{0.2}3$.

c) $3^{-0.5}$ and $1$.

d) $\log_52$ and $\dfrac12$.

::hint
**What you need:** a function is increasing when the base is greater than $1$ and decreasing when it is less than $1$.

**Steps:**
1. Decide whether the base is greater or less than $1$.
2. In parts c and d, compare with an intermediate number ($1=3^0$ and $\dfrac12=\log_55^{1/2}$).

::solution
a) The base $\dfrac23<1$, so the function is decreasing; $1.2<1.5$, so $\left(\dfrac23\right)^{1.2}>\left(\dfrac23\right)^{1.5}$.

b) The base $0.2<1$, so the function is decreasing; $2<3$, so $\log_{0.2}2>\log_{0.2}3$.

c) We have $1=3^0$ and the base $3>1$; since $-0.5<0$, $3^{-0.5}<1$.

d) We have $\dfrac12=\log_5\sqrt5$ and $\sqrt5\approx2.24>2$; the base $5>1$, so $\log_52<\log_5\sqrt5=\dfrac12$.

So a) $>$; b) $>$; c) $<$; d) $<$.

**Answer.** a) $>$; b) $>$; c) $<$; d) $<$.
:::

:::exercise
Find the range and the asymptote of the graph of each function:

a) $y=3^x+2$.

b) $y=1-\left(\dfrac12\right)^x$.

c) $y=\log_2(x+3)$ (find the domain and the vertical asymptote).

::hint
**What you need:** $a^x>0$ and gets close to $0$ on one side; $\log_au$ has a vertical asymptote where $u=0$.

**Steps:**
1. Find the interval of values of the $a^x$ part.
2. Add or subtract the corresponding constant.

::solution
a) The function $y=3^x+2$ is defined on $\mathbb{R}$. For every $x$ we have $3^x>0$, so $3^x+2>2$, that is $y>2$. Since $3^x$ takes every positive value, $y$ takes every value in $(2, +\infty)$. As $x\to-\infty$, $3^x\to0$, hence $y\to2$. So the range is $(2, +\infty)$ and the graph has the horizontal asymptote $y=2$.

b) The function $y=1-\left(\dfrac12\right)^x$ is defined on $\mathbb{R}$. For every $x$ we have $\left(\dfrac12\right)^x>0$, so $1-\left(\dfrac12\right)^x<1$, that is $y<1$. Since $\left(\dfrac12\right)^x$ takes every positive value, $y$ takes every value in $(-\infty, 1)$. As $x\to+\infty$, $\left(\dfrac12\right)^x\to0$, hence $y\to1$. So the range is $(-\infty, 1)$ and the graph has the horizontal asymptote $y=1$.

c) The function $y=\log_2(x+3)$ is defined when the argument of the logarithm is positive: $x+3>0$, that is $x>-3$. As $x\to(-3)^+$, $x+3\to0^+$, so $y\to-\infty$. So the domain is $(-3, +\infty)$ and the graph has the vertical asymptote $x=-3$.

**Answer.** a) $(2, +\infty)$, $y=2$; b) $(-\infty, 1)$, $y=1$; c) $(-3, +\infty)$, $x=-3$.
:::

:::exercise
Consider the function $y=\log_{1/3}x$. Decide whether each statement is true or false:

a) The function is increasing on $(0, +\infty)$.

b) The graph passes through the point $(1, 0)$.

c) $\log_{1/3}9=-2$.

d) The graph has the horizontal asymptote $y=0$.

::hint
**What you need:** properties of a logarithmic function with base less than $1$.

**Steps:**
1. Decide whether the base is greater or less than $1$.
2. Check each statement against the properties and the definition.

::solution
The function $y=\log_{1/3}x$ has domain $(0, +\infty)$ and its base satisfies $0<\dfrac13<1$.

a) **False.** Since the base $\dfrac13<1$, the function $y=\log_{1/3}x$ is decreasing on $(0, +\infty)$, not increasing.

b) **True.** We have $\log_{1/3}1=0$ (because $\left(\dfrac13\right)^0=1$), so the graph passes through the point $(1, 0)$.

c) **True.** We have $\left(\dfrac13\right)^{-2}=3^2=9$, so $\log_{1/3}9=-2$.

d) **False.** As $x\to0^+$, $y=\log_{1/3}x\to+\infty$, so the graph has the vertical asymptote $x=0$. As $x\to+\infty$, $y\to-\infty$, so the graph has no horizontal asymptote $y=0$.

So statements b), c) are true; statements a), d) are false.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
Suppose a sum of money in a deposit grows by $5\%$ each year, compounded annually (hypothetical figures). After at least how many whole years is the amount at least double the original?

::hint
**What you need:** the amount after $n$ years is $A\cdot1.05^n$; the function $1.05^n$ is increasing.

**Steps:**
1. Set up the condition $1.05^n\ge2$.
2. Calculate $n_0=\log_{1.05}2$, then take the smallest whole number that is large enough.

::solution
Let $A$ be the original amount and $n$ the number of whole years ($n\in\mathbb{N}^*$). Since the amount grows by $5\%$ each year, compounded annually, after $n$ years it is $A\cdot1.05^n$.

The amount is at least double the original when
$$A\cdot1.05^n\ge2A\iff1.05^n\ge2.$$

Since the base $1.05>1$, the function $y=\log_{1.05}t$ is increasing; hence
$$n\ge\log_{1.05}2=\frac{\ln2}{\ln1.05}\approx14.2.$$

Since $n$ is an integer, $n\ge15$, and the smallest value is $n=15$.

Check: $1.05^{14}\approx1.98<2$ and $1.05^{15}\approx2.08\ge2$.

So after at least $15$ years the amount is at least double the original.

**Answer.** $15$ years.
:::

:::exercise
Suppose a radioactive substance has a half-life of $5$ days (hypothetical figures) and an initial mass of $100$ g. After $t$ days the mass remaining is $m(t)=100\cdot\left(\dfrac12\right)^{t/5}$ grams.

a) How many grams remain after $12$ days (to the nearest whole number)?

b) After how many days will $10$ g remain (to one decimal place)?

::hint
**What you need:** $m(t)$ is an exponential function with base $\dfrac12$; $\left(\dfrac12\right)^{u}=c\Leftrightarrow u=\log_{1/2}c$.

**Steps:**
1. a) Substitute $t=12$ and use a calculator.
2. b) Solve $\left(\dfrac12\right)^{t/5}=0.1$, finding $\dfrac t5$ with a logarithm.

::solution
The mass remaining after $t$ days is $m(t)=100\cdot\left(\dfrac12\right)^{t/5}$ (grams).

a) Substituting $t=12$, we get
$$m(12)=100\cdot\left(\frac12\right)^{12/5}=100\cdot2^{-2.4}\approx18.9.$$
To the nearest whole number, $m(12)\approx19$ g. So after $12$ days about $19$ g remain.

b) We need $t$ with $m(t)=10$, that is
$$100\cdot\left(\frac12\right)^{t/5}=10\iff\left(\frac12\right)^{t/5}=0.1.$$
Taking logarithms to base $\dfrac12$ on both sides, we get
$$\frac t5=\log_{1/2}0.1=\log_210,$$
so
$$t=5\log_210\approx5\cdot3.3219\approx16.6.$$
So after about $16.6$ days, $10$ g remain.

**Answer.** a) $19$ g; b) $16.6$ days.
:::

:::exercise
Suppose a city has $500\,000$ people and its population grows by $2\%$ each year (hypothetical figures). After at least how many whole years does the population exceed $600\,000$?

::hint
**What you need:** the population after $n$ years is $500\,000\cdot1.02^n$.

**Steps:**
1. Set up $1.02^n>1.2$.
2. Use a logarithm and monotonicity to find the smallest whole $n$.

::solution
Let $n$ be the number of whole years ($n\in\mathbb{N}^*$). Since the population grows by $2\%$ each year, after $n$ years it is $500\,000\cdot1.02^n$ (people).

The population exceeds $600\,000$ when
$$500\,000\cdot1.02^n>600\,000\iff1.02^n>\frac{600\,000}{500\,000}=1.2.$$

Since the base $1.02>1$, the function $y=\log_{1.02}t$ is increasing; hence
$$n>\log_{1.02}1.2=\frac{\ln1.2}{\ln1.02}\approx9.2.$$

Since $n$ is an integer, $n\ge10$, and the smallest value is $n=10$.

Check: $500\,000\cdot1.02^9\approx597\,500<600\,000$ and $500\,000\cdot1.02^{10}\approx609\,500>600\,000$.

So after at least $10$ years the population exceeds $600\,000$.

**Answer.** $10$ years.
:::

:::exercise
Let $f(x)=\log_5x-1$. Find the inverse function $f^{-1}$ and calculate $f^{-1}(1)$.

::hint
**What you need:** the inverse of $y=\log_ax$ is $y=a^x$.

**Steps:**
1. Put $y=\log_5x-1$ and solve for $x$ in terms of $y$.
2. Rename the variable, then substitute $x=1$.

::solution
The function $f(x)=\log_5x-1$ has domain $(0, +\infty)$ and range $\mathbb{R}$, and it is increasing, so it has an inverse function.

Put $y=\log_5x-1$. Then
$$\log_5x=y+1\iff x=5^{y+1}.$$

Swapping the roles of $x$ and $y$, we get $f^{-1}(x)=5^{x+1}$ for all $x\in\mathbb{R}$.

Hence
$$f^{-1}(1)=5^{1+1}=5^2=25.$$

Check: $f(25)=\log_525-1=2-1=1$.

So $f^{-1}(x)=5^{x+1}$ and $f^{-1}(1)=25$.

**Answer.** $f^{-1}(x)=5^{x+1}$; $f^{-1}(1)=25$.
:::

:::exercise
Revisit continuous functions. Prove that the equation $2^x+x=4$ has at least one solution in the interval $(1, 2)$.

::hint
**What you need:** the function $g(x)=2^x+x-4$ is continuous on $\mathbb{R}$; if $g(1)\,g(2)<0$ there is a solution in $(1, 2)$.

**Steps:**
1. Calculate $g(1)$ and $g(2)$.
2. Apply the intermediate value theorem.

::solution
Consider the function $g(x)=2^x+x-4$. The exponential function $2^x$ and the function $x$ are both continuous on $\mathbb{R}$, so $g$ is a sum of two continuous functions and is continuous on $\mathbb{R}$; in particular, $g$ is continuous on $[1, 2]$.

We have
$$g(1)=2+1-4=-1<0,\qquad g(2)=4+2-4=2>0.$$

Hence $g(1)\cdot g(2)<0$. By the intermediate value theorem, there is $c\in(1, 2)$ with $g(c)=0$, that is $2^c+c=4$.

So the equation $2^x+x=4$ has at least one solution in the interval $(1, 2)$.

**Answer.** The equation has a solution in $(1, 2)$.
:::

:::exercise Challenge
Let $f(x)=\log_2\left(x+\sqrt{x^2+1}\right)$. Prove that $f$ is defined on $\mathbb{R}$ and that $f(-x)=-f(x)$ for all $x$.

::hint
**What you need:** $\sqrt{x^2+1}>|x|$ and $\left(\sqrt{x^2+1}-x\right)\left(\sqrt{x^2+1}+x\right)=1$.

**Steps:**
1. Show that $x+\sqrt{x^2+1}>0$.
2. Calculate $f(-x)$ and use the product equal to $1$.

::solution
Since $\sqrt{x^2+1}>\sqrt{x^2}=|x|\ge-x$, we have $x+\sqrt{x^2+1}>0$ for all $x$. So $f$ is defined on $\mathbb{R}$.

We have $f(-x)=\log_2\left(\sqrt{x^2+1}-x\right)$. Since $\left(\sqrt{x^2+1}-x\right)\left(\sqrt{x^2+1}+x\right)=x^2+1-x^2=1$, we get $\sqrt{x^2+1}-x=\dfrac{1}{x+\sqrt{x^2+1}}$. Therefore
$$f(-x)=\log_2\frac{1}{x+\sqrt{x^2+1}}=-\log_2\left(x+\sqrt{x^2+1}\right)=-f(x).$$

**Answer.** $f$ is defined on $\mathbb{R}$ and $f(-x)=-f(x)$.
:::

## Mini test

:::quiz
::mc TH
The domain of the function $y=\log_{1/2}(2x-4)$ is
A. $[2, +\infty)$.
B. $(-\infty, 2)$.
C. $(0, +\infty)$.
D. $(2, +\infty)$.
::key D
We need $2x-4>0$, that is $x>2$. Option A includes the endpoint $2$, B reverses the inequality, and C forgets the shift caused by $2x-4$.

::mc TH
Which of the following functions is decreasing on $\mathbb{R}$?
A. $y=\left(\dfrac{\sqrt2}{2}\right)^x$.
B. $y=\left(\dfrac{\pi}{3}\right)^x$.
C. $y=\log_{1/2}x$.
D. $y=e^x$.
::key A
The base $\dfrac{\sqrt2}{2}\approx0.71<1$, so the function is decreasing on $\mathbb{R}$. Option B has base $\dfrac\pi3>1$, D has base $e>1$, and C is defined only on $(0, +\infty)$.

::mc TH
Which statement is true?
A. $2^{\sqrt3}<2^{1.7}$.
B. $\log_{1/2}3>\log_{1/2}5$.
C. $\log_32>1$.
D. $0.9^{0.5}>0.9^{0.4}$.
::key B
The base $\dfrac12<1$, so the function is decreasing, and $3<5$ gives $\log_{1/2}3>\log_{1/2}5$. B is false because $\sqrt3\approx1.73>1.7$; C is false because $2<3$; D is false because the base $0.9<1$ and $0.5>0.4$.

::mc TH
The horizontal asymptote of the graph of $y=3^x-5$ is
A. $y=5$.
B. $x=-5$.
C. $y=-5$.
D. $x=0$.
::key C
$3^x>0$ and gets close to $0$ when $x$ is very negative, so $y$ gets close to $-5$ from above. Option A has the wrong sign, and B and D are vertical lines.

::tf TH NB NB TH
Let $f(x)=\log_2(x-1)$. Decide whether each statement is true or false:
a) The domain of $f$ is $(0, +\infty)$.
b) $f(3)=1$.
c) The function $f$ is decreasing on its domain.
d) The graph of $f$ has the vertical asymptote $x=1$.
::key F T F T
a) False: we need $x-1>0$, that is $x>1$. b) True: $\log_22=1$. c) False: the base $2>1$, so the function is increasing. d) True: $x-1=0$ when $x=1$, so the graph gets close to the line $x=1$.

::sa VD
Suppose the mass of a radioactive substance after $t$ days is $m(t)=80\cdot\left(\dfrac12\right)^{t/6}$ grams. After how many days will $10$ g remain?
::key 18
We need $\left(\dfrac12\right)^{t/6}=\dfrac18=\left(\dfrac12\right)^3$, so $\dfrac t6=3$ and $t=18$ (days).

::sa VD
Suppose the value of a machine falls by $10\%$ each year. After at least how many whole years is its value below $10\%$ of the original?
::key 22
We need $0.9^n<0.1$, that is $n>\dfrac{\ln0.1}{\ln0.9}\approx21.9$, so $n=22$. Check: $0.9^{21}\approx0.109>0.1$ and $0.9^{22}\approx0.098<0.1$.
:::
