---
title: Exponential and logarithmic equations and inequalities
description: Solve exponential and logarithmic equations and inequalities by common bases, logarithms, substitution and condition checks; apply them to savings.
minutes: 25
---

:::goals
- Solve basic exponential and logarithmic equations and the forms that reduce to them.
- Solve exponential and logarithmic inequalities, paying attention to the direction of the inequality according to the base.
- Choose a method: common base, taking logarithms of both sides, substitution, and always checking the domain condition.
- Apply these methods to real-life problems on compound interest, falling value and sound level.
:::

Suppose Lan invests $200$ million dong at $7\%$ a year, compounded annually (hypothetical figures). After $t$ years the amount is $200\cdot1.07^t$ million dong. She wants at least $300$ million dong to buy a motorbike. What is the smallest whole number of years she must invest?

This is a problem with the unknown in the exponent. With what we know about exponential and logarithmic functions, we can solve it as an exponential inequality. This lesson gathers the methods for problems of this kind.

## Exploration: from $a^x=b$ to $x=\log_ab$

Let us solve three equations:

| Equation | $2^x=8$ | $2^x=\dfrac14$ | $2^x=5$ |
|---|---|---|---|
| Solution | $x=3$ | $x=-2$ | $x=\,?$ |

The first two equations have whole-number solutions because the right side is a power of $2$. For $2^x=5$ we cannot write $5$ as $2^{\text{a nice number}}$, but by the definition of the logarithm, $x=\log_25\approx2.32$ is the exponent we need. The graph shows this: the curve $y=2^x$ meets the line $y=5$ at exactly one point.

:::graph The solution of $2^x=5$ is the $x$-coordinate of the intersection of $y=2^x$ and $y=5$
alt: The curve y equals 2 to the power x crosses the horizontal line y equals 5 at exactly one point whose x-coordinate is about 2.32
x: -2..4
y: -1..9
plot: 2^x
plot: 5 ; dashed
point: (2.3219, 5) "x = log_2 5" below-right
label: (-1.8, 8) "y = 2^x"
:::

## Basic exponential and logarithmic equations

:::theorem Basic equations
For $a>0$, $a\neq1$:
- **Exponential equation.** $a^x=b$: if $b>0$ there is exactly one solution $x=\log_ab$; if $b\le0$ there is no solution. Also, $a^{f(x)}=a^{g(x)}\Leftrightarrow f(x)=g(x)$.
- **Logarithmic equation.** $\log_ax=b$ has exactly one solution $x=a^b$ for every real number $b$. Also, $\log_af(x)=\log_ag(x)\Leftrightarrow f(x)=g(x)>0$.
:::

:::theorem Basic inequalities
For $a>0$, $a\neq1$ (stated for the sign $>$; the other signs are similar):
- $a^{f(x)}>a^{g(x)}\Leftrightarrow f(x)>g(x)$ if $a>1$; $\Leftrightarrow f(x)<g(x)$ if $0<a<1$.
- $\log_af(x)>\log_ag(x)\Leftrightarrow f(x)>g(x)>0$ if $a>1$; $\Leftrightarrow0<f(x)<g(x)$ if $0<a<1$.
:::

**Why is this true?** Exponential and logarithmic functions are monotonic, so each takes every value only once: if $a^m=a^n$ then $m=n$, and if $\log_ap=\log_aq$ then $p=q$. When $a>1$ the function is increasing and the inequality keeps its direction; when $0<a<1$ the function is decreasing and the inequality reverses. For logarithms the condition that the argument is positive must always accompany the inequality, which is why we write $0<f(x)<g(x)$ (or $f(x)>g(x)>0$) and not just $f<g$.

Four methods are used often:
- **Common base:** write both sides as $a^{\ldots}$ and drop the base.
- **Taking logarithms:** if a common base is not possible, write the solution with $\log$ and use a calculator for a number.
- **Substitution:** for example $t=2^x$ ($t>0$) to turn the equation into a quadratic.
- **For logarithms:** combine the logarithms into one, then **check the domain condition** at the end.

## Examples

We begin with a common base.

:::example Reducing to a common base
Solve:

a) $2^{x^2-3x}=16$.

b) $\left(\dfrac13\right)^{2x-1}=9$.

**Solution.** a) Since $16=2^4$, the equation becomes $2^{x^2-3x}=2^4$, so $x^2-3x=4$, that is $x^2-3x-4=0$. The equation has two solutions, $x=-1$ and $x=4$.

b) Since $9=\left(\dfrac13\right)^{-2}$, we get $2x-1=-2$, so $x=-\dfrac12$.

**Check.** For $x=4$: $x^2-3x=16-12=4$ ✓. For $x=-1$: $1+3=4$ ✓.

So a) $x\in\{-1, 4\}$; b) $x=-\dfrac12$.
:::

When a common base is not possible, we take logarithms.

:::example Using logarithms
Solve (to two decimal places):

a) $5^x=7$.

b) $3^{2x-1}=10$.

**Solution.** a) $x=\log_57=\dfrac{\ln7}{\ln5}\approx1.21$.

b) $2x-1=\log_310=\dfrac{\ln10}{\ln3}\approx2.096$, so $x=\dfrac{1+2.096}{2}\approx1.55$.

So a) $x\approx1.21$; b) $x\approx1.55$.
:::

An exponential equation can turn into a quadratic.

:::example Substitution
Solve $4^x-5\cdot2^x+4=0$.

**Solution.** Since $4^x=\left(2^x\right)^2$, put $t=2^x$ with $t>0$. The equation becomes $t^2-5t+4=0$, that is $(t-1)(t-4)=0$. Both solutions $t=1$ and $t=4$ are positive.

For $t=1$: $2^x=1$, so $x=0$. For $t=4$: $2^x=4$, so $x=2$.

So $x\in\{0, 2\}$.
:::

A logarithmic equation always needs a condition check.

:::example A logarithmic equation
Solve $\log_2(x+1)+\log_2(x-1)=3$.

**Solution.** Condition: $x+1>0$ and $x-1>0$, that is $x>1$.

Combine: $\log_2\left[(x+1)(x-1)\right]=3$, so $x^2-1=2^3=8$, that is $x^2=9$ and $x=\pm3$.

Compare with the condition $x>1$: reject $x=-3$, accept $x=3$.

**Check.** $\log_24+\log_22=2+1=3$ ✓.

So $x=3$.
:::

For inequalities, we watch the direction of the inequality.

:::example Inequalities
Solve:

a) $3^{x-1}<27$.

b) $\left(\dfrac13\right)^{2x-1}\ge\dfrac19$.

c) $\log_2(x-1)>3$.

d) $\log_{1/2}(2x+1)\ge-2$.

**Solution.** a) $27=3^3$ and the base $3>1$, so $x-1<3$, that is $x<4$.

b) $\dfrac19=\left(\dfrac13\right)^2$ and the base $\dfrac13<1$, so we reverse: $2x-1\le2$, that is $x\le\dfrac32$.

c) The base $2>1$: $x-1>2^3=8$, that is $x>9$ (which already satisfies $x-1>0$).

d) The base $\dfrac12<1$ and $-2=\log_{1/2}4$, so $0<2x+1\le4$, that is $-\dfrac12<x\le\dfrac32$.

So a) $(-\infty, 4)$; b) $\left(-\infty, \dfrac32\right]$; c) $(9, +\infty)$; d) $\left(-\dfrac12, \dfrac32\right]$.
:::

Now we return to the savings problem from the start, using all four steps.

:::example Application: how long to reach $300$ million dong?
Suppose Lan invests $200$ million dong at $7\%$ a year, compounded annually (hypothetical figures). After at least how many whole years does the amount reach $300$ million dong?

**Solution.**

*Understand.* We need the smallest whole number $t$ with $200\cdot1.07^t\ge300$.

*Plan.* Dividing both sides by $200$ gives $1.07^t\ge1.5$. The base $1.07>1$, so the function is increasing and the inequality keeps its direction. The boundary solution is $t_0=\log_{1.07}1.5$.

*Solve.* We have
$$t_0=\frac{\ln1.5}{\ln1.07}\approx\frac{0.4055}{0.0677}\approx5.99.$$
So $t\ge5.99$ and the smallest whole number of years is $6$.

*Look back.* Is the result reasonable? Check: $200\cdot1.07^5\approx280.5<300$ and $200\cdot1.07^6\approx300.1\ge300$. The amount only just passes $300$ in year $6$, so the answer is a close call. What if Lan wanted $400$ million? Then $1.07^t\ge2$, giving $t\ge\dfrac{\ln2}{\ln1.07}\approx10.2$, that is $11$ years.
:::

:::warning Common mistakes
- **Ignoring the domain condition of a logarithm.** Wrong: solving $\log_2(x+1)+\log_2(x-1)=3$ gives $x=\pm3$, and both are accepted. Why it is wrong: for $x=-3$ we get $x+1=-2<0$, so the logarithm is meaningless. Right: reject $x=-3$; the solution is $x=3$.
- **Forgetting to reverse.** Wrong: $\left(\dfrac13\right)^{x}>9\Leftrightarrow x>-2$. Why it is wrong: the base $\dfrac13<1$, so the function is decreasing. Right: $\left(\dfrac13\right)^{x}>\left(\dfrac13\right)^{-2}\Leftrightarrow x<-2$.
- **Substituting and forgetting the condition.** Wrong: $4^x-3\cdot2^x-4=0$ gives $t^2-3t-4=0$, $t\in\{-1, 4\}$, so there are two solutions for $x$. Why it is wrong: $t=2^x>0$, so $t=-1$ gives no solution. Right: only $t=4$ is accepted, giving $x=2$.
- **Splitting a sum into a sum of logarithms.** Wrong: $\log_2(x+4)=\log_2x+\log_24$. Why it is wrong: the rule turns a sum of logarithms into the logarithm of a product, not a sum of arguments into a sum of logarithms. Right: $\log_2x+\log_24=\log_2(4x)$.
:::

**Connections.** This lesson uses the definition and rules of [logarithms](lesson:logarithms) and the monotonicity of [exponential and logarithmic functions](lesson:exp-log-functions). Continuity from the lesson on [continuous functions](lesson:continuity) guarantees an unbroken graph, so when two sides differ in sign an equation has a solution. In practice these equations answer the question "how long until we reach a given level?", as in the savings problem above.

## Key terms

:::terms
- phương trình mũ | exponential equation
- phương trình lôgarit | logarithmic equation
- bất phương trình mũ | exponential inequality
- bất phương trình lôgarit | logarithmic inequality
- điều kiện xác định | domain condition
- đưa về cùng cơ số | reduce to the same base
- đặt ẩn phụ | substitution
- nghiệm ngoại lai | extraneous solution
- tập nghiệm | solution set
- nghiệm | solution
:::

## Summary

- $a^x=b$ ($b>0$) has the solution $x=\log_ab$; $\log_ax=b$ has the solution $x=a^b$.
- $a^{f}=a^{g}\Leftrightarrow f=g$; $\log_af=\log_ag\Leftrightarrow f=g>0$.
- Inequalities: the direction is kept when $a>1$ and reversed when $0<a<1$; for logarithms we need $f>0$ and $g>0$.
- Methods: common base, taking logarithms, substitution $t=a^x>0$; check the domain condition to reject extraneous solutions.
- Real life: solve $a^t\ge b$ by $t\ge\log_ab$, then take the suitable whole number.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Solve:

a) $3^{2x-1}=27$.

b) $\left(\dfrac12\right)^{x+1}=8$.

c) $2^x=-3$.

d) $4^x=9$ (to two decimal places).

::hint
**What you need:** $a^{f}=a^{g}\Leftrightarrow f=g$; $a^x=b$ ($b>0$) has the solution $x=\log_ab$; $a^x>0$ for all $x$.

**Steps:**
1. Write the right side as a power of the base (parts a and b).
2. Part c: look at the sign of the right side; part d: use $\log_4$.

::solution
a) $27=3^3$, so $2x-1=3$ and $x=2$.

b) $8=\left(\dfrac12\right)^{-3}$, so $x+1=-3$ and $x=-4$.

c) $2^x>0$ for all $x$, so the equation has no solution.

d) $x=\log_49=\dfrac{\ln9}{\ln4}\approx1.58$.

So a) $x=2$; b) $x=-4$; c) no solution; d) $x\approx1.58$.

**Answer.** a) $2$; b) $-4$; c) no solution; d) $1.58$.
:::

:::exercise
Solve by substitution:

a) $9^x-4\cdot3^x+3=0$.

b) $2^{2x+1}-5\cdot2^x+2=0$.

::hint
**What you need:** $9^x=\left(3^x\right)^2$ and $2^{2x+1}=2\cdot\left(2^x\right)^2$; substitute $t=a^x>0$.

**Steps:**
1. Put $t$ and obtain a quadratic equation in $t$.
2. Reject values $t\le0$, then find $x$.

::solution
a) Put $t=3^x>0$: $t^2-4t+3=0$, so $t=1$ or $t=3$. Thus $3^x=1$ or $3^x=3$, that is $x=0$ or $x=1$.

b) Put $t=2^x>0$: $2t^2-5t+2=0$, so $t=2$ or $t=\dfrac12$ (both positive). Thus $2^x=2$ or $2^x=\dfrac12$, that is $x=1$ or $x=-1$.

**Answer.** a) $x\in\{0, 1\}$; b) $x\in\{-1, 1\}$.
:::

:::exercise
Solve the logarithmic equations:

a) $\log_3(2x-1)=2$.

b) $\log_2x+\log_2(x-2)=3$.

c) $\ln(x^2-1)=\ln3$.

d) $\log(x+3)-\log(x-1)=1$.

::hint
**What you need:** $\log_ax=b\Leftrightarrow x=a^b$; the rules for logarithms; the argument must be positive.

**Steps:**
1. Find the domain condition.
2. Combine the logarithms, solve, then compare with the condition.

::solution
a) From $2x-1=3^2=9$ we get $x=5$ (which satisfies $2x-1>0$).

b) The condition is $x>2$. We have $\log_2\left[x(x-2)\right]=3$, so $x^2-2x=8$, that is $x^2-2x-8=0$ and $x=4$ or $x=-2$. Only $x=4$ satisfies $x>2$.

c) The condition is $x^2-1>0$. From $x^2-1=3$ we get $x=\pm2$; both give $x^2-1=3>0$, so both are accepted.

d) The condition is $x>1$. We have $\log\dfrac{x+3}{x-1}=1$, so $\dfrac{x+3}{x-1}=10$, giving $x+3=10x-10$ and $x=\dfrac{13}{9}$ (which satisfies $x>1$).

So a) $x=5$; b) $x=4$; c) $x=\pm2$; d) $x=\dfrac{13}{9}$.

**Answer.** a) $5$; b) $4$; c) $\pm2$; d) $\dfrac{13}{9}$.
:::

:::exercise
Solve the inequalities:

a) $\left(\dfrac13\right)^{x}<9$.

b) $2^{x^2-2x}<8$.

c) $\log_3(x-2)<2$.

d) $\log_{1/2}(x+1)>-1$.

::hint
**What you need:** keep the direction when the base is greater than $1$, reverse it when the base is less than $1$; for logarithms the argument must be positive.

**Steps:**
1. Reduce both sides to the same base.
2. Look at the base, then solve; for logarithms also write the condition that the argument is positive.

::solution
a) $9=\left(\dfrac13\right)^{-2}$ and the base $\dfrac13<1$, so $x>-2$.

b) $8=2^3$ and the base $2>1$, so $x^2-2x<3$, that is $x^2-2x-3<0$, giving $-1<x<3$.

c) The base $3>1$: $0<x-2<3^2=9$, giving $2<x<11$.

d) $-1=\log_{1/2}2$ and the base $\dfrac12<1$, so $0<x+1<2$, giving $-1<x<1$.

**Answer.** a) $(-2, +\infty)$; b) $(-1, 3)$; c) $(2, 11)$; d) $(-1, 1)$.
:::

:::exercise
Decide whether each statement is true or false:

a) The equation $5^x=0$ has no solution.

b) $x=2$ is a solution of the equation $2^x+3^x=5$.

c) The solution set of the inequality $\log_{1/2}x>1$ is $\left(\dfrac12, +\infty\right)$.

d) The equation $\log_3(x^2)=4$ has two solutions.

::hint
**What you need:** $a^x>0$; monotonicity; $\log_3(x^2)=4\Leftrightarrow x^2=3^4$.

**Steps:**
1. Substitute the value directly (part b).
2. Part c: reverse when the base is less than $1$; part d: solve $x^2=81$.

::solution
a) **True**: $5^x>0$ for all $x$.

b) **False**: $2^2+3^2=13\neq5$.

c) **False**: $\log_{1/2}x>1\Leftrightarrow0<x<\dfrac12$.

d) **True**: $x^2=81$ gives $x=\pm9$, and both satisfy $x^2>0$.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise
Suppose a motorbike costs $600$ million dong and its value falls by $12\%$ each year (hypothetical figures), so after $t$ years its value is $V(t)=600\cdot0.88^t$ million dong. After at least how many whole years is its value below $300$ million dong?

::hint
**What you need:** $0.88^t<0.5$; with a base less than $1$ the inequality reverses when we take logarithms.

**Steps:**
1. Set up $600\cdot0.88^t<300$ and simplify.
2. Calculate $\log_{0.88}0.5$, reverse the inequality, then take the suitable whole number.

::solution
We need $0.88^t<0.5$. Since the base $0.88<1$, $t>\log_{0.88}0.5=\dfrac{\ln0.5}{\ln0.88}\approx5.42$. The smallest whole number of years is $6$.

Check: $600\cdot0.88^5\approx316.6>300$ and $600\cdot0.88^6\approx278.6<300$.

**Answer.** $6$ years.
:::

:::exercise
The sound level is $L=10\log\dfrac{I}{I_0}$ (dB), with $I_0=10^{-12}$ W/m² (by the definition in school physics). Suppose a regulation sets a maximum sound level of $80$ dB (hypothetical figure). Find the largest sound intensity $I$ allowed.

::hint
**What you need:** $\log u\le8\Leftrightarrow u\le10^8$ because the base $10>1$.

**Steps:**
1. Set up the inequality $10\log\dfrac{I}{I_0}\le80$.
2. Solve, then multiply by $I_0$.

::solution
We need $10\log\dfrac{I}{I_0}\le80$, that is $\log\dfrac{I}{I_0}\le8$, so $\dfrac{I}{I_0}\le10^8$ and $I\le10^8\cdot10^{-12}=10^{-4}$.

So the largest intensity is $10^{-4}$ W/m².

**Answer.** $10^{-4}$ W/m².
:::

:::exercise
The pH is given by $\mathrm{pH}=-\log[\mathrm{H}^+]$ ($[\mathrm{H}^+]$ in mol/litre). A hypothetical solution has pH between $4$ and $6$, that is $4\le\mathrm{pH}\le6$.

a) Find the interval of values of $[\mathrm{H}^+]$.

b) A solution with $\mathrm{pH}<3.5$ has $[\mathrm{H}^+]$ greater than which value (in the form $c\cdot10^{-4}$, with $c$ to one decimal place)?

::hint
**What you need:** $[\mathrm{H}^+]=10^{-\mathrm{pH}}$, and the function $10^{-u}$ is decreasing.

**Steps:**
1. Convert pH to $[\mathrm{H}^+]$.
2. Reverse the inequality because the function is decreasing.

::solution
a) From $4\le\mathrm{pH}\le6$ and $[\mathrm{H}^+]=10^{-\mathrm{pH}}$ (decreasing) we get $10^{-6}\le[\mathrm{H}^+]\le10^{-4}$.

b) From $\mathrm{pH}<3.5$ we get $[\mathrm{H}^+]>10^{-3.5}\approx3.2\cdot10^{-4}$.

**Answer.** a) $10^{-6}\le[\mathrm{H}^+]\le10^{-4}$; b) $[\mathrm{H}^+]>3.2\cdot10^{-4}$ mol/litre.
:::

:::exercise
Revisit continuous functions. Prove that the equation $\ln x=2-x$ has at least one solution in the interval $(1, 2)$.

::hint
**What you need:** $g(x)=\ln x+x-2$ is continuous on $(0, +\infty)$; if $g(1)\,g(2)<0$ there is a solution in $(1, 2)$.

**Steps:**
1. Calculate $g(1)$ and $g(2)$.
2. Apply the intermediate value theorem.

::solution
The function $g(x)=\ln x+x-2$ is continuous on $(0, +\infty)$. We have $g(1)=0+1-2=-1<0$ and $g(2)=\ln2+2-2=\ln2>0$. By the intermediate value theorem there is $c\in(1, 2)$ with $g(c)=0$, that is $\ln c=2-c$.

**Answer.** The equation has a solution in $(1, 2)$.
:::

:::exercise Challenge
Solve $2^x+3^x=5^x$.

::hint
**What you need:** divide both sides by $5^x$ to get a sum of two decreasing functions; a monotonic function takes each value exactly once.

**Steps:**
1. Guess a solution by trying small whole numbers.
2. Divide by $5^x$ and prove that solution is unique.

::solution
Try $x=1$: $2+3=5$, so $x=1$ is a solution.

Divide both sides by $5^x>0$: $\left(\dfrac25\right)^x+\left(\dfrac35\right)^x=1$. The left side is a sum of two decreasing functions (the bases $\dfrac25$ and $\dfrac35$ are both less than $1$), so it is decreasing on $\mathbb{R}$ and takes the value $1$ exactly once. Hence $x=1$ is the only solution.

**Answer.** $x=1$.
:::

## Mini test

:::quiz
::mc
The solution set of the equation $2^{x^2-1}=8$ is
A. $\{2\}$.
B. $\{-\sqrt2, \sqrt2\}$.
C. $\{-2, 2\}$.
D. $\{4\}$.
::key C
$8=2^3$, so $x^2-1=3$, giving $x^2=4$ and $x=\pm2$. Option A drops the negative solution, B solves $x^2=2$, and D mistakes $x^2=4$ for $x=4$.

::mc
The solution set of the inequality $\left(\dfrac12\right)^x>8$ is
A. $(-3, +\infty)$.
B. $(3, +\infty)$.
C. $(-\infty, 3)$.
D. $(-\infty, -3)$.
::key D
$8=\left(\dfrac12\right)^{-3}$ and the base $\dfrac12<1$, so we reverse: $x<-3$. Option A forgets to reverse, and B and C get the sign of the exponent $-3$ wrong.

::mc
The solution of the equation $\log_2x+\log_2(x-3)=2$ is
A. $x=4$.
B. $x=-1$ or $x=4$.
C. $x=-1$.
D. the equation has no solution.
::key A
The condition is $x>3$. We have $x(x-3)=4$, so $x^2-3x-4=0$ and $x=-1$ or $x=4$. Only $x=4$ satisfies $x>3$. Option B forgets to reject the extraneous solution $x=-1$.

::mc
The solution set of the inequality $\log_3(2x-1)\le2$ is
A. $\left[\dfrac12, 5\right]$.
B. $\left(\dfrac12, 5\right]$.
C. $(-\infty, 5]$.
D. $(5, +\infty)$.
::key B
We need $0<2x-1\le9$, that is $\dfrac12<x\le5$. Option A includes the endpoint $\dfrac12$, C forgets the condition $2x-1>0$, and D reverses the inequality.

::tf
Consider the equation $4^x-3\cdot2^x-4=0$. Decide whether each statement is true or false:
a) Putting $t=2^x$, the equation becomes $t^2-3t-4=0$.
b) The value $t=-1$ gives a solution of the equation.
c) The equation has exactly one solution.
d) The solution of the equation is $x=4$.
::key T F T F
a) True: $4^x=\left(2^x\right)^2$. b) False: $t=2^x>0$, so $t=-1$ is rejected. c) True: only $t=4$, that is $x=2$. d) False: $2^x=4$ gives $x=2$, not $x=4$.

::sa
Suppose an amount grows by $8\%$ each year, compounded annually. After at least how many whole years is it three times the original amount?
::key 15
We need $1.08^t\ge3$, that is $t\ge\dfrac{\ln3}{\ln1.08}\approx14.3$, so $t=15$. Check: $1.08^{14}\approx2.94<3$ and $1.08^{15}\approx3.17\ge3$.

::sa
What is the solution of the equation $5^{2x-1}=40$ (to one decimal place)?
::key 1.6
$2x-1=\log_540\approx2.292$, so $x\approx\dfrac{3.292}{2}\approx1.6$.
:::
