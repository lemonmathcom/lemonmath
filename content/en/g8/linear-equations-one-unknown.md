---
title: Linear equations in one unknown
description: Recognise and solve linear equations using the rules for moving terms and multiplying, including brackets, fractions, no solution and infinitely many.
minutes: 22
---

:::goals
- Recognise a linear equation in one unknown and its solution.
- Use the rule for moving terms and the multiplication rule to solve $ax+b=0$.
- Solve equations that can be reduced to the form $ax+b=0$ (with brackets or fractions).
- Recognise equations with no solution and equations with infinitely many solutions.
:::

Suppose a phone plan has a fixed fee of $40\,000$ dong a month, and each extra gigabyte (GB) of data costs $6\,000$ dong. This month Lan has to pay $82\,000$ dong. Let $x$ be the number of extra GB Lan used; then the amount to pay is $40\,000+6\,000x$ dong. So we have the equality
$$6\,000x+40\,000=82\,000.$$
How do we find $x$? This is a linear equation in one unknown, and this lesson teaches you to solve it systematically.

## Let's explore

Picture a balance scale. The left pan holds $x$ and $3$ weights of $1$ kg, and the right pan holds $7$ weights of $1$ kg: $x+3=7$. If we remove $3$ weights from **both** pans, the scale stays balanced and we get $x=4$. If the left pan holds two identical parcels and $3$ weights, and the right pan holds $11$ weights ($2x+3=11$), we remove $3$ weights from each pan to get $2x=8$, then halve both sides to get $x=4$.

These two actions (adding or subtracting the same number on both sides, then multiplying or dividing both sides by the same non-zero number) do not unbalance the scale, that is, they do not change the solution. They are the basis of the method for solving equations.

## Linear equations in one unknown

:::definition Linear equation in one unknown
A **linear equation in one unknown** is an equation of the form $ax+b=0$, where $a$ and $b$ are given numbers and $a\neq0$.

A value of $x$ that makes both sides equal is called a **solution** of the equation. To **solve** an equation is to find all its solutions.
:::

**Going deeper.** The condition $a\neq0$ is important: if $a=0$ then $0x+b=0$ no longer contains the unknown and is not a linear equation. For example, $2x-6=0$ has $a=2$, $b=-6$ and the solution $x=3$, since $2\cdot3-6=0$.

:::example Recognising linear equations
Which of these equations are linear equations in one unknown?

a) $3x-5=0$.

b) $0x+2=0$.

c) $x^2-1=0$.

d) $2y+7=0$.

e) $\dfrac1x+1=0$.

**Solution.** We check the form $ax+b=0$ with $a\neq0$.

a) It has the form $ax+b=0$ with $a=3\neq0$: it is a linear equation.

b) Here $a=0$: it is not.

c) The unknown has exponent $2$: it is not.

d) It has the form $ay+b=0$ with $a=2\neq0$ (the unknown is $y$): it is a linear equation.

e) The unknown is in a denominator: it is not.

So a) and d) are linear equations in one unknown.
:::

## Solving linear equations

Two equations with the same solutions are called **equivalent equations**. We change an equation into simpler equivalent equations using two rules:

:::theorem Two rules for transforming equations
- **Rule for moving terms:** in an equation we may move a term from one side to the other, changing its sign.
- **Multiplication rule:** in an equation we may multiply (or divide) both sides by the same non-zero number.
:::

**Why?** Moving a term is adding (or subtracting) the same number on both sides, like removing weights from both pans; multiplying or dividing by a non-zero number keeps the sides equal and can be undone. So the new equations are equivalent to the original.

Applying this to $ax+b=0$: moving $b$ to the right gives $ax=-b$, and dividing both sides by $a$ gives
$$x=-\frac{b}{a}.$$
So a linear equation $ax+b=0$ always has **exactly one solution** $x=-\dfrac ba$.

:::example Solving linear equations
Solve the following equations:

a) $4x-12=0$.

b) $5x+7=0$.

c) $2x+3=11$.

**Solution.** a) Moving $-12$ to the right gives $4x=12$; dividing both sides by $4$ gives $x=3$.

b) Moving $7$ to the right gives $5x=-7$; dividing both sides by $5$ gives $x=-\dfrac75$.

c) Moving $3$ to the right gives $2x=11-3=8$; dividing both sides by $2$ gives $x=4$.

So a) $x=3$; b) $x=-\dfrac75$; c) $x=4$.
:::

## Equations that reduce to the form $ax+b=0$

Many equations are not yet in the form $ax+b=0$, but we can reduce them to it by removing brackets, clearing fractions, moving the terms containing the unknown to one side and the numbers to the other, and collecting terms.

:::example An equation with brackets
Solve the equation $3(x-2)-5=2(x+1)$.

**Solution.** Removing brackets gives $3x-6-5=2x+2$, that is $3x-11=2x+2$. Moving $2x$ to the left and $-11$ to the right gives $3x-2x=2+11$, so $x=13$.

Check: left-hand side $3\cdot11-5=28$, right-hand side $2\cdot14=28$.

So the equation has the solution $x=13$.
:::

:::example An equation with fractions
Solve the equation $\dfrac{x+1}{2}-\dfrac{2x-1}{3}=1$.

**Solution.** The common denominator is $6$. We multiply both sides by $6$ (remembering to multiply the $1$ on the right too) to get
$$3(x+1)-2(2x-1)=6.$$
Removing brackets: $3x+3-4x+2=6$, that is $-x+5=6$, so $-x=1$, and $x=-1$.

Check: $\dfrac{0}{2}-\dfrac{-3}{3}=0+1=1$.

So the equation has the solution $x=-1$.
:::

Not every equation gives exactly one solution. While transforming, we may meet the form $0x=c$.

:::example No solution and infinitely many solutions
Solve the following equations:

a) $2(x+1)=2x+5$.

b) $3(x-1)=3x-3$.

**Solution.** a) Removing brackets gives $2x+2=2x+5$. Moving terms: $2x-2x=5-2$, that is $0x=3$. No value of $x$ satisfies $0x=3$ (the left-hand side is always $0$).

b) Removing brackets gives $3x-3=3x-3$. Moving terms: $3x-3x=-3+3$, that is $0x=0$. This is true for every $x$.

So a) the equation has no solution; b) the equation has infinitely many solutions (every real number is a solution).
:::

We return to the phone plan at the start, using the four steps of solving a problem.

:::example How many extra GB did Lan use?
The fixed fee is $40\,000$ dong and each extra GB costs $6\,000$ dong (an imagined plan). Lan pays $82\,000$ dong. How many extra GB did she use?

**Solution.**

*Understand.* The amount paid equals the fixed fee plus the cost of the extra data; we need the number of extra GB, $x$.

*Plan.* Form the equation $6\,000x+40\,000=82\,000$ and solve it.

*Solve.* Moving $40\,000$ to the right: $6\,000x=82\,000-40\,000=42\,000$. Dividing both sides by $6\,000$ gives $x=7$.

*Look back.* Check: $6\,000\cdot7+40\,000=42\,000+40\,000=82\,000$. The result is reasonable because $x=7$ is a positive number of GB. If the amount paid were below $40\,000$ dong, the solution would be negative, meaning the problem makes no sense.

So Lan used $7$ extra GB.
:::

:::warning Mistakes to watch out for
- **Moving a term without changing its sign.** Wrong: $x+3=7\Rightarrow x=7+3=10$. Why it is wrong: moving $+3$ to the right must turn it into $-3$; check $10+3=13\neq7$. Right: $x=7-3=4$.
- **Not multiplying every term when clearing fractions.** Wrong: $\dfrac{x+1}{2}-\dfrac{2x-1}{3}=1\Rightarrow3(x+1)-2(2x-1)=1$. Why it is wrong: the $1$ on the right must also be multiplied by $6$. Right: $3(x+1)-2(2x-1)=6$.
- **Expanding a bracket after a minus sign wrongly.** Wrong: $-2(2x-1)=-4x-2$. Why it is wrong: the minus sign multiplies both terms. Right: $-2(2x-1)=-4x+2$.
:::

**Connections.** This lesson reuses operations with rational numbers, expanding brackets and common denominators from earlier years. The next lesson, [solving word problems by forming equations](lesson:g8-equation-word-problems), uses this very method to solve problems in words like the phone plan above.

## Key terms

:::terms
- linear equation in one unknown | phương trình bậc nhất một ẩn
- unknown | ẩn
- solution (root) | nghiệm
- solving an equation | giải phương trình
- equivalent equations | phương trình tương đương
- rule for moving a term across | quy tắc chuyển vế
- left-hand side, right-hand side | vế trái, vế phải
- no solution | vô nghiệm
- infinitely many solutions | vô số nghiệm
:::

## Summary

- A linear equation in one unknown has the form $ax+b=0$ with $a\neq0$; it has exactly one solution $x=-\dfrac ba$.
- Rule for moving terms: moving a term to the other side changes its sign. Multiplication rule: multiply or divide both sides by the same non-zero number.
- For equations with brackets or fractions: remove brackets, clear fractions (multiply every term), move terms, collect, then solve.
- If you reach $0x=c$ with $c\neq0$ the equation has no solution; if you reach $0x=0$ it has infinitely many solutions.
- Always check your solution in the original equation.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Which of these equations are linear equations in one unknown?

a) $5x-3=0$.

b) $0x-4=0$.

c) $x^2+2=0$.

d) $7-2t=0$.

::hint
**What you need:** the form $ax+b=0$ with $a\neq0$.

**Steps:**
1. Identify the unknown and its exponent.
2. Check that the coefficient $a$ is not $0$.

::solution
a) $a=5\neq0$: yes. b) $a=0$: no. c) The unknown has exponent $2$: no. d) Written as $-2t+7=0$ with $a=-2\neq0$: yes.

So a) and d) are linear equations in one unknown.

**Answer.** a), d).
:::

:::exercise
Solve the following equations:

a) $2x-10=0$.

b) $3x+8=0$.

c) $7-4x=0$.

::hint
**What you need:** the rule for moving terms and the multiplication rule.

**Steps:**
1. Move the constant term to the right, changing its sign.
2. Divide both sides by the coefficient of $x$.

::solution
a) $2x=10$, so $x=5$.

b) $3x=-8$, so $x=-\dfrac83$.

c) $-4x=-7$, so $x=\dfrac74$.

So a) $x=5$; b) $x=-\dfrac83$; c) $x=\dfrac74$.

**Answer.** a) $5$. b) $-\dfrac83$. c) $\dfrac74$.
:::

:::exercise
Solve the equation $5x-3=2x+9$.

::hint
**What you need:** move the terms containing the unknown to one side and the numbers to the other.

**Steps:**
1. Move $2x$ to the left and $-3$ to the right.
2. Collect terms, then divide both sides.

::solution
We have $5x-2x=9+3$, that is $3x=12$, so $x=4$.

Check: left-hand side $5\cdot4-3=17$, right-hand side $2\cdot4+9=17$.

So the equation has the solution $x=4$.

**Answer.** $x=4$.
:::

:::exercise
Solve the equation $4(x-1)-3=2(x+5)$.

::hint
**What you need:** remove brackets using the distributive property.

**Steps:**
1. Remove the brackets on both sides.
2. Move terms and collect.

::solution
Removing brackets: $4x-4-3=2x+10$, that is $4x-7=2x+10$. Moving terms: $4x-2x=10+7$, that is $2x=17$, so $x=\dfrac{17}{2}=8.5$.

Check: left-hand side $4\cdot7.5-3=27$, right-hand side $2\cdot13.5=27$.

So the equation has the solution $x=8.5$.

**Answer.** $x=\dfrac{17}{2}$.
:::

:::exercise
Solve the equation $\dfrac{2x-1}{3}-\dfrac{x+2}{4}=1$.

::hint
**What you need:** clear the fractions by multiplying both sides by the common denominator.

**Steps:**
1. The common denominator is $12$; multiply every term by $12$.
2. Remove brackets, move terms, collect.

::solution
Multiply both sides by $12$: $4(2x-1)-3(x+2)=12$. Removing brackets: $8x-4-3x-6=12$, that is $5x-10=12$, so $5x=22$ and $x=\dfrac{22}{5}=4.4$.

Check: $\dfrac{8.8-1}{3}-\dfrac{6.4}{4}=2.6-1.6=1$.

So the equation has the solution $x=\dfrac{22}{5}$.

**Answer.** $x=\dfrac{22}{5}$.
:::

:::exercise
Solve the following equations and comment on the number of solutions:

a) $3(x+2)=3x+6$.

b) $2x+5=2(x-1)$.

::hint
**What you need:** reduce to the form $0x=c$.

**Steps:**
1. Remove brackets and move the terms containing $x$ to one side.
2. Decide whether $c$ is $0$ or not.

::solution
a) Removing brackets: $3x+6=3x+6$, that is $0x=0$, true for every $x$: the equation has infinitely many solutions.

b) Removing brackets: $2x+5=2x-2$, so $0x=-7$; no $x$ satisfies this: the equation has no solution.

**Answer.** a) infinitely many solutions. b) no solution.
:::

:::exercise
Suppose a taxi company charges a starting fee of $12\,000$ dong plus $14\,000$ dong per kilometre. A passenger pays $96\,000$ dong. How many kilometres did the passenger travel?

::hint
**What you need:** form an equation from the amount paid.

**Steps:**
1. Let $x$ be the number of kilometres; write $14\,000x+12\,000=96\,000$.
2. Solve the equation.

::solution
The equation is $14\,000x+12\,000=96\,000$. Moving terms: $14\,000x=84\,000$, so $x=6$.

Check: $14\,000\cdot6+12\,000=96\,000$.

So the passenger travelled $6$ km.

**Answer.** $6$ km.
:::

:::exercise
Suppose there are two ways to hire a bicycle. Plan A: $30\,000$ dong plus $5\,000$ dong per hour. Plan B: $10\,000$ dong plus $7\,000$ dong per hour. After how many hours do the two plans cost the same? What is the cost then?

::hint
**What you need:** set the two cost expressions equal.

**Steps:**
1. Let $x$ be the number of hours; write $30\,000+5\,000x=10\,000+7\,000x$.
2. Solve, then work out the cost.

::solution
The equation is $30\,000+5\,000x=10\,000+7\,000x$. Moving terms: $30\,000-10\,000=7\,000x-5\,000x$, that is $20\,000=2\,000x$, so $x=10$. The cost is $30\,000+5\,000\cdot10=80\,000$ (dong).

Check plan B: $10\,000+7\,000\cdot10=80\,000$.

So after $10$ hours the plans cost the same, $80\,000$ dong.

**Answer.** $10$ hours; $80\,000$ dong.
:::

:::exercise
Which of the numbers $-2$, $0$, $2$ is a solution of the equation $3x+7=x+3$?

::hint
**What you need:** a solution is a value that makes both sides equal.

**Steps:**
1. Substitute each number into both sides.
2. Compare the two sides.

::solution
For $x=-2$: left-hand side $3\cdot(-2)+7=1$, right-hand side $-2+3=1$, equal. For $x=0$: $7\neq3$. For $x=2$: $13\neq5$.

So only $x=-2$ is a solution.

**Answer.** $-2$.
:::

:::exercise Challenge
Solve the equation $\dfrac{x-1}{2}-\dfrac{x+1}{3}=\dfrac{x-5}{6}$ and comment.

::hint
**What you need:** clear the fractions, then collect terms.

**Steps:**
1. Multiply both sides by $6$.
2. Collect terms and see which form $0x=c$ you reach.

::solution
Multiply both sides by $6$: $3(x-1)-2(x+1)=x-5$. Removing brackets: $3x-3-2x-2=x-5$, that is $x-5=x-5$. This is true for every $x$.

Check with $x=0$: left-hand side $-\dfrac12-\dfrac13=-\dfrac56$, right-hand side $-\dfrac56$.

So the equation has infinitely many solutions: every real number is a solution.

**Answer.** Infinitely many solutions.
:::

## Mini test

:::quiz
::mc
Which of these is a linear equation in one unknown?
A. $x^2-4=0$.
B. $0x+5=0$.
C. $2x-3=0$.
D. $\dfrac1x=2$.
::key C
$2x-3=0$ has the form $ax+b=0$ with $a=2\neq0$. A has a squared unknown, B has $a=0$, D has the unknown in a denominator.

::mc
The solution of $3x-9=0$ is
A. $-3$.
B. $9$.
C. $\dfrac13$.
D. $3$.
::key D
$3x=9$, so $x=3$. A has the wrong sign, B forgets to divide by $3$, C uses $\dfrac{1}{3}$ instead of $\dfrac{9}{3}$.

::mc
The solution of $5x-2=3x+6$ is
A. $4$.
B. $2$.
C. $8$.
D. $-4$.
::key A
$5x-3x=6+2$, so $2x=8$ and $x=4$. B and C forget to divide by $2$ or divide wrongly, D has the wrong sign.

::mc
The solution of $\dfrac{x+1}{2}=\dfrac{x-1}{3}$ is
A. $5$.
B. $-5$.
C. $\dfrac15$.
D. $-\dfrac15$.
::key B
Multiply both sides by $6$: $3(x+1)=2(x-1)$, that is $3x+3=2x-2$, so $x=-5$. A has the wrong sign; B and D divide incorrectly.

::tf
Consider the equation $2(x+1)=2x+5$. Decide whether each statement is true or false.
a) After removing brackets we get $2x+2=2x+5$.
b) The equation has exactly one solution.
c) The equation has no solution.
d) The equation $3(x-1)=3x-3$ has infinitely many solutions.
::key T F T T
a) True. b) False: collecting terms gives $0x=3$, so there is no solution. c) True: $0x=3$ has no solution. d) True: collecting terms gives $0x=0$, true for every $x$.

::sa
What is the solution of $4x-1=1$?
::key 0.5
$4x=2$, so $x=0.5$.

::sa
A taxi charges a starting fee of $12\,000$ dong plus $14\,000$ dong per kilometre. A passenger pays $96\,000$ dong. How many kilometres did the passenger travel?
::key 6
$14\,000x+12\,000=96\,000$, so $x=6$.
:::
