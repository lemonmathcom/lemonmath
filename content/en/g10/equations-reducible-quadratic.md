---
title: Equations reducible to quadratics
description: Solve equations with square roots by squaring both sides, then check the solutions to remove extraneous roots, and apply the method to a ladder problem.
minutes: 25
---

:::goals
- Solve $\sqrt{f(x)}=\sqrt{g(x)}$ by squaring and then checking.
- Solve $\sqrt{f(x)}=g(x)$ and explain why $g(x)\ge 0$ is needed.
- Recognise and remove extraneous solutions.
- Set up and solve real-life problems that lead to an equation with a square root.
:::

A $10$ m ladder leans against a wall. Let $d$ be the distance from the foot of the ladder to the wall. By Pythagoras' theorem, the top of the ladder is at height $\sqrt{100-d^2}$ metres. The builder wants the top to be exactly $2$ m higher than $d$. How far from the wall should the foot of the ladder stand?

Written as an equation, we need to solve $\sqrt{100-d^2}=d+2$. The unknown sits under a square root, and that is the awkward part. The most natural idea is to **square** both sides to get rid of the root, then solve a familiar quadratic. That idea points the right way, but there is a small trap hidden in the squaring. This lesson helps you see the trap and step around it.

## Why squaring needs a check

### Explore: squaring adds a solution

Let us try a small equation, $\sqrt{x+6}=x$, and simply follow the natural idea of squaring both sides:

$$x+6=x^2\iff x^2-x-6=0\iff x=3\ \text{ or }\ x=-2.$$

Two values, and they look fine. But to be careful, we substitute them back into the original equation:

| $x$ | left side $\sqrt{x+6}$ | right side $x$ | result |
|---|---|---|---|
| $3$ | $\sqrt9=3$ | $3$ | true |
| $-2$ | $\sqrt4=2$ | $-2$ | false |

Surprising: the value $x=-2$ satisfies the squared equation but not the original one. It slipped in somewhere along the way. We call it an **extraneous solution**.

### The reason

The trouble is that squaring "forgets the sign". If $A=B$ then $A^2=B^2$; that is true. But the converse is false: $A^2=B^2$ only tells us that $A=B$ **or** $A=-B$. For $x=-2$ above, $A=2$ and $B=-2$: two opposite numbers with the same square $4$.

So how can we square without worry? If we also know that $A\ge 0$ and $B\ge 0$, then $A=-B$ can happen only when $A=B=0$. In that case squaring is an equivalent step and adds no solution. That is the idea behind the two methods below.

:::theorem Solving the two types of equation with a square root
$$\sqrt{f(x)}=\sqrt{g(x)}\iff\begin{cases}f(x)\ge 0\\ f(x)=g(x)\end{cases}\qquad\qquad \sqrt{f(x)}=g(x)\iff\begin{cases}g(x)\ge 0\\ f(x)=[g(x)]^2\end{cases}$$
In practice we solve the squared equation, then **check** each value in the original equation (or in the condition).
:::

You may wonder why each type has only one condition. In the first type we only need $f(x)\ge 0$, because when $f(x)=g(x)$, $g(x)\ge 0$ holds too. In the second type we need not write $f(x)\ge 0$, because $f(x)=[g(x)]^2$ is already non-negative.

## Equations $\sqrt{f(x)}=\sqrt{g(x)}$

We start with the gentlest case: after squaring, only a linear equation is left.

:::example Two linear expressions under roots
Solve $\sqrt{2x-3}=\sqrt{x+1}$.

**Solution.** Both sides are square roots, so we square and then check the condition $x+1\ge 0$:

$$2x-3=x+1\iff x=4.$$

For $x=4$: $x+1=5\ge 0$, and both sides equal $\sqrt5$.

So the equation has solution set $S=\{4\}$.
:::

When one side contains $x^2$, squaring gives a quadratic, so there are often two values. Do not accept both straight away; each one has to pass the check.

:::example Checking both values
Solve $\sqrt{x^2-x-2}=\sqrt{x+1}$.

**Solution.** Square both sides, solve the quadratic, then check the condition $x+1\ge 0$:

$$x^2-x-2=x+1\iff x^2-2x-3=0\iff x=3\ \text{ or }\ x=-1.$$

For $x=3$: $x+1=4\ge 0$. For $x=-1$: $x+1=0\ge 0$, and both sides equal $\sqrt0=0$. Both values are accepted.

So $S=\{-1, 3\}$.

**Check.** The boundary value $x=-1$ makes the expression under the root equal to $0$. The condition is "$\ge 0$", so this value is still accepted.
:::

## Equations $\sqrt{f(x)}=g(x)$

This is the type where extraneous solutions turn up most often. The reason is simple: a square root is never negative, so the right-hand side $g(x)$ must be non-negative too. This small condition is exactly what removed $x=-2$ in the exploration, because there the right-hand side was $x$ and $-2<0$.

:::example One value rejected
Solve $\sqrt{2x+1}=x-1$.

**Solution.** We require the right-hand side to be non-negative, then square. Note that $(x-1)^2=x^2-2x+1$:

$$\begin{aligned} \sqrt{2x+1}=x-1 &\iff \begin{cases}x-1\ge 0\\ 2x+1=x^2-2x+1\end{cases}\\ &\iff \begin{cases}x\ge 1\\ x^2-4x=0\end{cases}\\ &\iff \begin{cases}x\ge 1\\ x=0\ \text{or}\ x=4.\end{cases} \end{aligned}$$

Only $x=4$ satisfies $x\ge 1$. Check: $\sqrt9=3=4-1$.

So $S=\{4\}$.
:::

Sometimes, after squaring, the quadratic has no solution at all. Then the original equation has none either, because any solution of it would have to be a solution of the squared equation.

:::example An equation with no solution
Solve $\sqrt{x-1}=x+1$.

**Solution.** With the condition $x+1\ge 0$, we square both sides:

$$x-1=x^2+2x+1\iff x^2+x+2=0.$$

This quadratic has $\Delta=1^2-4\cdot1\cdot2=-7<0$, so it has no real solution.

So the given equation has no solution, $S=\varnothing$.
:::

## The ladder problem

With these tools in hand, we go back to the builder and the ladder from the start of the lesson.

:::diagram The ladder
alt: A right-angled triangle with the wall as the vertical side, the ground as the horizontal side and the 10 metre ladder as the hypotenuse
point O 0,0 below-left "O"
point F 6,0 below "foot"
point T 0,8 left "top"
polygon O F T
right F O T
label 3.4,4.6 "10 m"
label 3,-0.8 "d"
label -0.6,4 "h"
:::

:::example The ladder
A $10$ m ladder leans against a wall. The top of the ladder is $2$ m higher than the distance $d$ from its foot to the wall. Find $d$ and the height $h$ of the top.

**Solution.** By Pythagoras' theorem $h=\sqrt{100-d^2}$, and we are told $h=d+2$. We solve the equation with the square root, with the condition $d+2\ge 0$:

$$\begin{aligned} \sqrt{100-d^2}=d+2 &\Rightarrow 100-d^2=d^2+4d+4\\ &\iff 2d^2+4d-96=0\\ &\iff d^2+2d-48=0\\ &\iff d=6\ \text{ or }\ d=-8. \end{aligned}$$

A distance must be positive, so we reject $d=-8$ and keep $d=6$.

So the foot of the ladder is $6$ m from the wall and the top is at height $h=8$ m.

**Check.** $6^2+8^2=36+64=100=10^2$, which matches a $10$ m ladder.
:::

:::warning Common mistakes
- **Not checking.** This is the most common mistake in this lesson. Wrong: "$\sqrt{x+6}=x\Rightarrow x^2-x-6=0$, so $S=\{-2, 3\}$". Why it is wrong: squaring can add solutions; $x=-2$ gives $\sqrt4=2\neq-2$. Right: $S=\{3\}$.
- **Squaring a binomial wrongly.** Wrong: $(x-1)^2=x^2-1$. Why it is wrong: the term $-2x$ is missing. Right: $(x-1)^2=x^2-2x+1$.
- **Forgetting the condition on the right-hand side.** Wrong: checking only $2x+1\ge 0$ and accepting $x=0$ for $\sqrt{2x+1}=x-1$. Why it is wrong: the left side is non-negative, so the right side must be too, but $0-1<0$. Right: require $x-1\ge 0$ and keep only $x=4$.
:::

## Key terms

:::terms
- square root | căn bậc hai
- equation involving square roots | phương trình chứa căn
- squaring both sides | bình phương hai vế
- extraneous solution | nghiệm ngoại lai
- condition | điều kiện
- check | thử lại
- Pythagoras' theorem | định lí Pythagore
- ladder | cái thang
:::

## Summary

- Squaring both sides can add **extraneous solutions**, because $A^2=B^2$ only gives $A=\pm B$.
- $\sqrt{f}=\sqrt{g}$: solve $f=g$, keep the solutions with $f\ge 0$ (or $g\ge 0$).
- $\sqrt{f}=g$: require $g\ge 0$, solve $f=g^2$.
- Always check every value you find in the original equation.
- Real-life problems: set up the equation, solve it, then keep only the answers that make sense (positive lengths).

In the ladder problem, squaring gave two values, $6$ and $-8$, but only $d=6$ is a real distance. Squaring is a handy way to remove a root; just keep one habit: whatever value you find, check it.

## Practice

Each exercise comes with the ideas you need and a few steps to get going. Have a go on your own first, and do not worry about mistakes; comparing with the solution afterwards shows you how much you have understood.

:::exercise
Solve $\sqrt{x+5}=\sqrt{3x-1}$.

::hint
**What you need:** $\sqrt{f(x)}=\sqrt{g(x)}\iff f(x)=g(x)$ and $f(x)\ge 0$.

**Steps:**
1. Square both sides and solve the linear equation.
2. Check the condition under the roots.

::solution
Squaring: $x+5=3x-1\iff x=3$. For $x=3$: $x+5=8\ge 0$, and both sides equal $\sqrt8$.

**Answer.** $S=\{3\}$.
:::

:::exercise
Solve $\sqrt{x^2-4}=\sqrt{3x}$.

::hint
**What you need:** after squaring, check the condition $3x\ge 0$.

**Steps:**
1. Square, reduce to a quadratic equation and solve it.
2. Reject any value with $3x<0$.

::solution
Squaring: $x^2-4=3x\iff x^2-3x-4=0\iff x=4$ or $x=-1$. For $x=-1$, $3x=-3<0$, so it is rejected. For $x=4$ both sides equal $\sqrt{12}$.

**Answer.** $S=\{4\}$.
:::

:::exercise
Solve $\sqrt{x+2}=x$.

::hint
**What you need:** $\sqrt{f(x)}=g(x)$ requires $g(x)\ge 0$ and $f(x)=[g(x)]^2$.

**Steps:**
1. Write the condition $x\ge 0$.
2. Square, solve the quadratic, keep the values that meet the condition.

::solution
We need $x\ge 0$. Squaring: $x+2=x^2\iff x^2-x-2=0\iff x=2$ or $x=-1$. Only $x=2$ meets the condition. Check: $\sqrt4=2$.

**Answer.** $S=\{2\}$.
:::

:::exercise
Solve $\sqrt{x+3}=x-3$.

::hint
**What you need:** $(x-3)^2=x^2-6x+9$; the right-hand side must be non-negative.

**Steps:**
1. Write the condition $x\ge 3$.
2. Square, solve, choose the solution.

::solution
We need $x\ge 3$. Squaring: $x+3=x^2-6x+9\iff x^2-7x+6=0\iff x=1$ or $x=6$. Only $x=6$ meets the condition. Check: $\sqrt9=3=6-3$.

**Answer.** $S=\{6\}$.
:::

:::exercise
Solve $\sqrt{x^2-2x}=\sqrt{x+4}$.

::hint
**What you need:** type $\sqrt{f}=\sqrt{g}$: solve $f=g$, then check $g\ge 0$.

**Steps:**
1. Square and solve the quadratic equation.
2. Check each value.

::solution
Squaring: $x^2-2x=x+4\iff x^2-3x-4=0\iff x=4$ or $x=-1$. For $x=4$: $x+4=8\ge 0$. For $x=-1$: $x+4=3\ge 0$. Both are accepted.

**Answer.** $S=\{-1, 4\}$.
:::

:::exercise
Consider the equation $\sqrt{x+7}=x+1$. Is each claim true or false?

a) The condition for the right-hand side to be non-negative is $x\ge -1$.

b) Squaring both sides gives $x^2+x-6=0$.

c) The given equation has two solutions, $x=2$ and $x=-3$.

d) The sum of the solutions of the given equation is $2$.

::hint
**What you need:** $\sqrt{f(x)}=g(x)\iff g(x)\ge 0$ and $f(x)=[g(x)]^2$.

**Steps:**
1. Write the condition, square and solve the quadratic.
2. Check each solution, then judge each claim.

::solution
Squaring: $x+7=x^2+2x+1\iff x^2+x-6=0\iff x=2$ or $x=-3$. The condition $x+1\ge 0\iff x\ge -1$ rejects $x=-3$.

a) **True**: $x+1\ge 0\iff x\ge -1$.

b) **True**: $x+7=x^2+2x+1\iff x^2+x-6=0$.

c) **False**: for $x=-3$ the left side is $\sqrt4=2$ and the right side is $-2$.

d) **True**: the equation has only one solution, $x=2$, so the sum of the solutions is $2$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
A $13$ m ladder leans against a wall. The top of the ladder is $7$ m higher than the distance $d$ from its foot to the wall. How high, in metres, is the top of the ladder?

::hint
**What you need:** Pythagoras' theorem: the height is $h=\sqrt{13^2-d^2}$.

**Steps:**
1. Set up $\sqrt{169-d^2}=d+7$.
2. Square, solve, keep the positive solution.
3. Compute $h=d+7$.

::solution
Squaring: $169-d^2=d^2+14d+49\iff d^2+7d-60=0\iff d=5$ or $d=-12$. A distance is positive, so $d=5$ and $h=5+7=12$. Check: $\sqrt{169-25}=\sqrt{144}=12$.

**Answer.** $12$.
:::

:::exercise
A $12$ m antenna mast stands vertically. A guy wire joins the top of the mast to a point on the ground $x$ m from the foot of the mast, and the wire is exactly $8$ m longer than $x$. Find $x$ and the length of the wire.

::hint
**What you need:** the wire is the hypotenuse of a right-angled triangle with legs $12$ and $x$.

**Steps:**
1. Write the length of the wire in two ways: $\sqrt{x^2+144}$ and $x+8$.
2. Square; the $x^2$ terms cancel.

::solution
We have $\sqrt{x^2+144}=x+8$ with $x>0$. Squaring: $x^2+144=x^2+16x+64\iff 16x=80\iff x=5$. The wire is $5+8=13$ m long. Check: $\sqrt{25+144}=\sqrt{169}=13$.

**Answer.** $x=5$ m, and the wire is $13$ m long.
:::

:::exercise Challenge
Solve $\sqrt{2x^2-3x-5}=x-1$.

::hint
**What you need:** type $\sqrt{f}=g$: require $g\ge 0$, then $f=g^2$.

**Steps:**
1. Write the condition $x\ge 1$.
2. Square, move all terms to one side, solve the quadratic.
3. Choose the solution and check it.

::solution
We need $x\ge 1$. Squaring: $2x^2-3x-5=x^2-2x+1\iff x^2-x-6=0\iff x=3$ or $x=-2$. Only $x=3$ meets the condition. Check: $\sqrt{18-9-5}=\sqrt4=2=3-1$.

**Answer.** $S=\{3\}$.
:::

:::exercise Review
Consider the equation $\sqrt{x^2-3x}=\sqrt{2x-4}$.

a) Using [the sign of a quadratic expression](lesson:sign-of-quadratic), find the set of $x$ for which both square roots are defined.

b) Solve the equation.

::hint
**What you need:** $\sqrt{A}$ is defined when $A\ge 0$; the quadratic $x^2-3x$ has roots $0$ and $3$, with $a>0$.

**Steps:**
1. Solve $x^2-3x\ge 0$ and $2x-4\ge 0$, and take the common part.
2. Square, solve, keep the solutions in that set.

::solution
a) $x^2-3x\ge 0\iff x\le 0$ or $x\ge 3$ (outside the roots, since $a=1>0$). $2x-4\ge 0\iff x\ge 2$. The common part is $x\ge 3$.

b) Squaring: $x^2-3x=2x-4\iff x^2-5x+4=0\iff x=1$ or $x=4$. Only $x=4$ satisfies $x\ge 3$; then both sides equal $\sqrt4=2$.

**Answer.** a) $[3, +\infty)$; b) $S=\{4\}$.
:::

## Mini test

:::quiz
::mc
The solution set of $\sqrt{3x-2}=\sqrt{x+4}$ is
A. $S=\{3\}$.
B. $S=\{-3\}$.
C. $S=\{1\}$.
D. $S=\varnothing$.
::key A
Squaring: $3x-2=x+4\iff 2x=6\iff x=3$. Check: $x+4=7\ge0$ and both sides equal $\sqrt7$. Option B comes from a sign error when moving terms.

::mc
The solution set of $\sqrt{x+1}=x-1$ is
A. $S=\{0, 3\}$.
B. $S=\{3\}$.
C. $S=\{0\}$.
D. $S=\{2\}$.
::key B
We need $x\ge1$. Squaring: $x+1=x^2-2x+1\iff x^2-3x=0\iff x=0$ or $x=3$; only $x=3$ meets the condition. Option A forgets to check; D comes from writing $(x-1)^2=x^2-1$.

::mc
When $\sqrt{2x+3}=x$ is solved by squaring both sides, which value is an extraneous solution?
A. $x=3$.
B. $x=-1$.
C. $x=-3$.
D. $x=1$.
::key B
Squaring: $x^2-2x-3=0\iff x=3$ or $x=-1$. For $x=-1$ the left side is $\sqrt1=1$ and the right side is $-1$, so $x=-1$ is extraneous.

::mc
The sum of the solutions of $\sqrt{x^2+2x+4}=\sqrt{2x+13}$ is
A. $0$.
B. $3$.
C. $-3$.
D. $6$.
::key A
Squaring: $x^2+2x+4=2x+13\iff x^2=9\iff x=\pm3$. Both satisfy $2x+13\ge0$ (giving $19$ and $7$), so the sum is $0$. Option B wrongly rejects $x=-3$ just because it is negative.

::tf
Consider the equation $\sqrt{x+10}=x-2$.
a) The condition for the right-hand side to be non-negative is $x\ge2$.
b) Squaring both sides gives $x^2-3x-6=0$.
c) $x=-1$ is a solution of the equation.
d) The equation has exactly one solution, and it is greater than $5$.
::key T F F T
a) True. b) False: $x+10=x^2-4x+4\iff x^2-5x-6=0$. c) False: for $x=-1$ the left side is $3$ and the right side is $-3$. d) True: $x^2-5x-6=0$ gives $x=6$ or $x=-1$, and only $x=6$ is kept.

::sa
Solve $\sqrt{2x+7}=x+2$.
::key 1
We need $x\ge-2$. Squaring: $2x+7=x^2+4x+4\iff x^2+2x-3=0\iff x=1$ or $x=-3$. Only $x=1$ meets the condition; check: $\sqrt9=3=1+2$.

::sa
A boat is pulled towards the bank by a rope tied to a point $5$ m above the water. When the boat is $x$ m from the foot of the bank, the rope from the boat to that point is exactly $1$ m longer than $x$. Find $x$.
::key 12
The rope is the hypotenuse: $\sqrt{x^2+25}=x+1$ with $x>0$. Squaring: $x^2+25=x^2+2x+1\iff 2x=24\iff x=12$. Check: $\sqrt{169}=13=12+1$.
:::
