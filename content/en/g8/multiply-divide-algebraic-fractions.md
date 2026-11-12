---
title: Multiplying and dividing algebraic fractions
description: Multiply and divide algebraic fractions, find reciprocals, simplify results and apply them to real problems such as speed ratios and areas.
minutes: 22
---

:::goals
- Multiply two algebraic fractions and simplify the result.
- Find the reciprocal of a non-zero algebraic fraction.
- Divide one algebraic fraction by another non-zero fraction.
- Work out expressions with several operations and solve real-life problems.
:::

Suppose two cars each travel $120$ km. Car A takes $x$ hours and car B takes $x+2$ hours. The speed of car A is $\dfrac{120}{x}$ km/h and the speed of car B is $\dfrac{120}{x+2}$ km/h.

How many times as fast as car B is car A? To find out we must divide $\dfrac{120}{x}$ by $\dfrac{120}{x+2}$, that is, divide one algebraic fraction by another. When $x=4$, how many times as fast is car A? This lesson teaches you to multiply and divide algebraic fractions.

## Let's explore

With numerical fractions we multiply $\dfrac23\cdot\dfrac9{10}=\dfrac{2\cdot9}{3\cdot10}=\dfrac{18}{30}=\dfrac35$: numerator times numerator, denominator times denominator. We divide $\dfrac23\div\dfrac49=\dfrac23\cdot\dfrac94=\dfrac{18}{12}=\dfrac32$: multiply by the **reciprocal** of the divisor, that is, turn the divisor upside down. These two rules do not depend on whether the numerators and denominators are numbers or expressions with letters, so they work for algebraic fractions.

## Multiplying algebraic fractions

:::theorem Multiplying two algebraic fractions
To multiply two algebraic fractions, we multiply the numerators together and multiply the denominators together:
$$\frac{A}{B}\cdot\frac{C}{D}=\frac{A\cdot C}{B\cdot D}.$$
:::

**Why?** The rule follows from the rule for numerical fractions, because each algebraic fraction takes a numerical value for every value of the variable that keeps the denominator non-zero. Multiplication of algebraic fractions is commutative, associative and distributive over addition, just like multiplication of numbers.

**Tip.** Factorise numerators and denominators **before** multiplying, so that you can cancel common factors at once and avoid expanding long expressions.

:::example Monomial fractions
Work out $\dfrac{4x^2}{9y}\cdot\dfrac{3y^2}{8x}$.

**Solution.** We multiply numerators, multiply denominators, then simplify:
$$\frac{4x^2}{9y}\cdot\frac{3y^2}{8x}=\frac{12x^2y^2}{72xy}=\frac{xy}{6}.$$

So the result is $\dfrac{xy}{6}$.
:::

:::example Multiplying and cancelling common factors
Work out $\dfrac{x^2-4}{2x}\cdot\dfrac{x^2}{x+2}$.

**Solution.** We have $x^2-4=(x-2)(x+2)$. Hence
$$\frac{x^2-4}{2x}\cdot\frac{x^2}{x+2}=\frac{(x-2)(x+2)\cdot x^2}{2x\cdot(x+2)}=\frac{x(x-2)}{2}.$$

So the result is $\dfrac{x(x-2)}{2}$.
:::

## Reciprocals and division

Two fractions whose product is $1$ are called **reciprocals** of each other. If $\dfrac{A}{B}$ is not $0$ (that is, $A\neq0$), its reciprocal is $\dfrac{B}{A}$, because $\dfrac AB\cdot\dfrac BA=1$. The zero fraction has no reciprocal.

:::example Reciprocals
Find the reciprocal of:

a) $\dfrac{x-1}{x+2}$.

b) $x+3$.

c) $\dfrac{3x}{x^2+1}$.

**Solution.** We swap the numerator and the denominator.

a) The reciprocal is $\dfrac{x+2}{x-1}$ (for $x\neq1$).

b) We write $x+3=\dfrac{x+3}{1}$, so the reciprocal is $\dfrac{1}{x+3}$ (for $x\neq-3$).

c) The reciprocal is $\dfrac{x^2+1}{3x}$ (for $x\neq0$).

So the reciprocals are $\dfrac{x+2}{x-1}$; $\dfrac{1}{x+3}$; $\dfrac{x^2+1}{3x}$.
:::

:::theorem Dividing two algebraic fractions
To divide the fraction $\dfrac AB$ by a non-zero fraction $\dfrac CD$, we multiply $\dfrac AB$ by the reciprocal of $\dfrac CD$:
$$\frac AB\div\frac CD=\frac AB\cdot\frac DC\qquad(C\neq0).$$
:::

:::example Dividing fractions
Work out $\dfrac{6x^2}{x+1}\div\dfrac{3x}{x^2-1}$.

**Solution.** We multiply by the reciprocal and factorise $x^2-1=(x-1)(x+1)$:
$$\frac{6x^2}{x+1}\div\frac{3x}{x^2-1}=\frac{6x^2}{x+1}\cdot\frac{x^2-1}{3x}=\frac{6x^2(x-1)(x+1)}{3x(x+1)}=2x(x-1).$$

So the result is $2x(x-1)$.
:::

When factors differ only in sign, we change signs to cancel.

:::example Dividing with a change of sign
Work out $\dfrac{x^2-4}{x-3}\div\dfrac{2-x}{x^2-9}$.

**Solution.** We have $x^2-4=(x-2)(x+2)$, $x^2-9=(x-3)(x+3)$ and $2-x=-(x-2)$. Hence
$$\frac{x^2-4}{x-3}\div\frac{2-x}{x^2-9}=\frac{(x-2)(x+2)}{x-3}\cdot\frac{(x-3)(x+3)}{-(x-2)}=-(x+2)(x+3).$$

So the result is $-(x+2)(x+3)$.
:::

We can combine the addition from the previous lesson with multiplication.

:::example An expression with several operations
Simplify $\left(\dfrac1x+\dfrac1y\right)\cdot\dfrac{xy}{x+y}$.

**Solution.** We do the addition in the brackets first:
$$\frac1x+\frac1y=\frac{y+x}{xy}.$$
Hence
$$\left(\frac1x+\frac1y\right)\cdot\frac{xy}{x+y}=\frac{x+y}{xy}\cdot\frac{xy}{x+y}=1.$$

So the expression always equals $1$ (for $x,y\neq0$ and $x+y\neq0$).
:::

We return to the two cars at the start, using the four steps of solving a problem.

:::example Comparing the speeds of two cars
Car A travels $120$ km in $x$ hours, and car B travels $120$ km in $x+2$ hours (an imagined case). Find the ratio of the speed of car A to that of car B, and evaluate it when $x=4$.

**Solution.**

*Understand.* The speed of car A is $\dfrac{120}{x}$ and that of car B is $\dfrac{120}{x+2}$; the ratio is the quotient of the two speeds.

*Plan.* Divide the fractions, that is, multiply by the reciprocal and simplify.

*Solve.* We have
$$\frac{120}{x}\div\frac{120}{x+2}=\frac{120}{x}\cdot\frac{x+2}{120}=\frac{x+2}{x}.$$
For $x=4$: $\dfrac{4+2}{4}=\dfrac32=1.5$.

*Look back.* Check: when $x=4$, car A travels at $120\div4=30$ km/h, car B at $120\div6=20$ km/h, and $30\div20=1.5$. The result is reasonable because car A takes less time, so it is faster ($\dfrac{x+2}{x}>1$); if $x$ is very large the ratio gets close to $1$, meaning the two speeds are nearly equal.

So car A is $\dfrac{x+2}{x}$ times as fast as car B, which is $1.5$ times when $x=4$.
:::

:::warning Mistakes to watch out for
- **Dividing without turning the divisor upside down.** Wrong: $\dfrac12\div\dfrac14=\dfrac12\cdot\dfrac14=\dfrac18$. Why it is wrong: $\dfrac12$ contains $\dfrac14$ twice, not $\dfrac18$. Right: $\dfrac12\cdot\dfrac41=2$.
- **Not multiplying the denominators.** Wrong: $\dfrac2x\cdot\dfrac3x=\dfrac6x$. Why it is wrong: for $x=2$ the left side is $1\cdot1.5=1.5$ and the right side is $3$. Right: $\dfrac2x\cdot\dfrac3x=\dfrac{6}{x^2}$.
- **Forgetting the conditions when dividing.** Wrong: requiring only that the denominators $B$ and $D$ are non-zero when working out $\dfrac AB\div\dfrac CD$. Why it is wrong: we also need $C\neq0$, because we cannot divide by the zero fraction. Right: $\dfrac{x-1}{x+2}\div\dfrac{x-3}{x+5}$ needs $x\neq-2$, $x\neq-5$ and $x\neq3$.
:::

**Connections.** This lesson reuses the rules for multiplying and dividing numerical fractions, factorising polynomials and simplifying fractions from [algebraic fractions](lesson:intro-algebraic-fractions); the addition in mixed expressions relies on [adding and subtracting algebraic fractions](lesson:add-subtract-algebraic-fractions). These skills help you solve equations with the unknown in a denominator in later years.

## Key terms

:::terms
- multiplication of algebraic fractions | phép nhân phân thức
- division of algebraic fractions | phép chia phân thức
- reciprocal of a fraction | phân thức nghịch đảo
- numerator | tử thức
- denominator | mẫu thức
- common factor | nhân tử chung
- simplify | rút gọn
- ratio | tỉ số
:::

## Summary

- Multiplying: $\dfrac AB\cdot\dfrac CD=\dfrac{AC}{BD}$; factorise first to cancel.
- The reciprocal of $\dfrac AB$ ($A\neq0$) is $\dfrac BA$.
- Dividing: $\dfrac AB\div\dfrac CD=\dfrac AB\cdot\dfrac DC$ with $C\neq0$.
- In an expression with several operations: brackets first, then multiplication and division from left to right, and finally addition and subtraction.
- Always remember the conditions that keep every denominator and divisor non-zero.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Work out:

a) $\dfrac{3x^2}{5y}\cdot\dfrac{10y^2}{9x}$.

b) $\dfrac{x^2-1}{x}\cdot\dfrac{x^2}{x+1}$.

::hint
**What you need:** numerator times numerator, denominator times denominator, then simplify.

**Steps:**
1. a) Multiply, then cancel the powers.
2. b) Factorise $x^2-1=(x-1)(x+1)$.

::solution
a) $\dfrac{3x^2}{5y}\cdot\dfrac{10y^2}{9x}=\dfrac{30x^2y^2}{45xy}=\dfrac{2xy}{3}$.

b) $\dfrac{x^2-1}{x}\cdot\dfrac{x^2}{x+1}=\dfrac{(x-1)(x+1)x^2}{x(x+1)}=x(x-1)$.

So a) $\dfrac{2xy}{3}$; b) $x(x-1)$.

**Answer.** a) $\dfrac{2xy}{3}$. b) $x(x-1)$.
:::

:::exercise
Work out $\dfrac{x^2-9}{2x+6}\cdot\dfrac{4x}{x-3}$.

::hint
**What you need:** factorise before multiplying.

**Steps:**
1. Write $x^2-9=(x-3)(x+3)$ and $2x+6=2(x+3)$.
2. Multiply, then cancel the common factors.

::solution
We have
$$\frac{(x-3)(x+3)}{2(x+3)}\cdot\frac{4x}{x-3}=\frac{4x(x-3)(x+3)}{2(x+3)(x-3)}=2x.$$

So the result is $2x$.

**Answer.** $2x$.
:::

:::exercise
Find the reciprocal of each fraction and state the conditions:

a) $\dfrac{5}{x-1}$.

b) $x^2+1$.

c) $\dfrac{x-2}{x+3}$.

::hint
**What you need:** the reciprocal of $\dfrac AB$ ($A\neq0$) is $\dfrac BA$.

**Steps:**
1. Swap numerator and denominator.
2. State when the original fraction is non-zero.

::solution
a) $\dfrac{x-1}{5}$ (condition $x\neq1$ so that the original fraction is defined).

b) $\dfrac{1}{x^2+1}$; $x^2+1>0$ for every $x$, so no condition is needed.

c) $\dfrac{x+3}{x-2}$ (condition $x\neq2$ so that the original fraction is non-zero, and $x\neq-3$ so that it is defined).

**Answer.** a) $\dfrac{x-1}{5}$. b) $\dfrac{1}{x^2+1}$. c) $\dfrac{x+3}{x-2}$.
:::

:::exercise
Work out $\dfrac{x^2-4}{3x}\div\dfrac{x+2}{6x^2}$.

::hint
**What you need:** dividing is multiplying by the reciprocal.

**Steps:**
1. Rewrite as a multiplication.
2. Factorise $x^2-4$, then simplify.

::solution
We have
$$\frac{x^2-4}{3x}\div\frac{x+2}{6x^2}=\frac{(x-2)(x+2)}{3x}\cdot\frac{6x^2}{x+2}=\frac{6x^2(x-2)(x+2)}{3x(x+2)}=2x(x-2).$$

So the result is $2x(x-2)$.

**Answer.** $2x(x-2)$.
:::

:::exercise
Work out $\dfrac{x^2-1}{x-2}\div\dfrac{1-x}{x^2-4}$.

::hint
**What you need:** $1-x=-(x-1)$.

**Steps:**
1. Multiply by the reciprocal.
2. Change signs, then simplify.

::solution
We have
$$\frac{(x-1)(x+1)}{x-2}\cdot\frac{(x-2)(x+2)}{-(x-1)}=-(x+1)(x+2).$$

So the result is $-(x+1)(x+2)$.

**Answer.** $-(x+1)(x+2)$.
:::

:::exercise
Suppose a rectangular piece of cloth has length $\dfrac{x^2-4}{x}$ metres and width $\dfrac{x}{x+2}$ metres ($x>2$). Write an expression for its area and simplify it. Find the area when $x=5$.

::hint
**What you need:** area equals length times width.

**Steps:**
1. Write the product $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$.
2. Simplify, then substitute $x=5$.

::solution
The area is
$$\frac{x^2-4}{x}\cdot\frac{x}{x+2}=\frac{(x-2)(x+2)x}{x(x+2)}=x-2\ \text{(m}^2\text{)}.$$
For $x=5$: the area is $5-2=3$ (m²).

Check: the length is $\dfrac{21}{5}=4.2$ m, the width is $\dfrac57$ m and $4.2\cdot\dfrac57=3$.

So the area is $(x-2)$ m², which is $3$ m² when $x=5$.

**Answer.** $x-2$ (m²); $3$ m².
:::

:::exercise
Suppose a walker moves at $\dfrac{6x}{x+1}$ km/h for $\dfrac{x+1}{3x}$ hours. Find the distance walked. Does the distance depend on $x$?

::hint
**What you need:** distance equals speed times time.

**Steps:**
1. Write the product $\dfrac{6x}{x+1}\cdot\dfrac{x+1}{3x}$.
2. Simplify and comment.

::solution
The distance is
$$\frac{6x}{x+1}\cdot\frac{x+1}{3x}=\frac{6x(x+1)}{3x(x+1)}=2\ \text{(km)}.$$
The result does not contain $x$, so the distance does not depend on $x$.

So the walker covers $2$ km, whatever the value of $x$.

**Answer.** $2$ km; independent of $x$.
:::

:::exercise
Simplify $\left(\dfrac{1}{x-1}-\dfrac{1}{x+1}\right)\cdot\dfrac{x^2-1}{2}$. (Revise [subtracting fractions](lesson:add-subtract-algebraic-fractions).)

::hint
**What you need:** do the subtraction in the brackets first.

**Steps:**
1. Write over a common denominator and subtract inside the brackets.
2. Multiply by $\dfrac{x^2-1}{2}$ and simplify.

::solution
Condition: $x\neq\pm1$. We have $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$. Hence
$$\left(\frac{1}{x-1}-\frac{1}{x+1}\right)\cdot\frac{x^2-1}{2}=\frac{2}{x^2-1}\cdot\frac{x^2-1}{2}=1.$$

So the expression always equals $1$.

**Answer.** $1$.
:::

:::exercise
Find the fraction $P$ such that $P\cdot\dfrac{x+1}{x-2}=\dfrac{x^2-1}{x^2-4}$.

::hint
**What you need:** if $P\cdot Q=R$ then $P=R\div Q$.

**Steps:**
1. Write $P=\dfrac{x^2-1}{x^2-4}\div\dfrac{x+1}{x-2}$.
2. Multiply by the reciprocal and simplify.

::solution
We have
$$P=\frac{(x-1)(x+1)}{(x-2)(x+2)}\cdot\frac{x-2}{x+1}=\frac{x-1}{x+2}.$$

So $P=\dfrac{x-1}{x+2}$.

**Answer.** $\dfrac{x-1}{x+2}$.
:::

:::exercise Challenge
Simplify $\left(\dfrac{x+1}{x-1}-\dfrac{x-1}{x+1}\right)\div\dfrac{4}{x^2-1}$ and find its value when $x=7$.

::hint
**What you need:** do the subtraction in the brackets, then divide.

**Steps:**
1. Use the common denominator $x^2-1$: the numerator is $(x+1)^2-(x-1)^2$.
2. Divide by $\dfrac{4}{x^2-1}$, that is, multiply by its reciprocal.

::solution
Condition: $x\neq\pm1$. We have
$$\frac{x+1}{x-1}-\frac{x-1}{x+1}=\frac{(x+1)^2-(x-1)^2}{x^2-1}=\frac{4x}{x^2-1}.$$
Hence
$$\frac{4x}{x^2-1}\div\frac{4}{x^2-1}=\frac{4x}{x^2-1}\cdot\frac{x^2-1}{4}=x.$$
For $x=7$ the value is $7$.

So the expression equals $x$, and equals $7$ when $x=7$.

**Answer.** $x$; $7$.
:::

## Mini test

:::quiz
::mc
The result of $\dfrac{4x^2}{9y}\cdot\dfrac{3y^2}{8x}$ is
A. $\dfrac{xy}{6}$.
B. $\dfrac{x}{6y}$.
C. $\dfrac{6}{xy}$.
D. $\dfrac{x^2y}{6}$.
::key A
$\dfrac{12x^2y^2}{72xy}=\dfrac{xy}{6}$. A does not cancel all of $x$; B and C get the power of $y$ or the position of numerator and denominator wrong.

::mc
The reciprocal of $\dfrac{x+1}{x-3}$ ($x\neq-1$) is
A. $-\dfrac{x+1}{x-3}$.
B. $\dfrac{x-3}{x+1}$.
C. $\dfrac{x+1}{3-x}$.
D. $\dfrac{x-3}{x-1}$.
::key B
The reciprocal swaps numerator and denominator. B is the opposite fraction, C changes the sign of the denominator without swapping, D has the wrong numerator.

::mc
The result of $\dfrac{x}{x+1}\div\dfrac{x^2}{x^2-1}$ is
A. $\dfrac{x^3}{(x+1)(x^2-1)}$.
B. $\dfrac{x}{x-1}$.
C. $\dfrac{x-1}{x}$.
D. $\dfrac{x+1}{x}$.
::key C
$\dfrac{x}{x+1}\cdot\dfrac{(x-1)(x+1)}{x^2}=\dfrac{x-1}{x}$. A multiplies without turning the divisor upside down; B and D mix up the factors.

::mc
For $x>2$, the product $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$ equals
A. $x+2$.
B. $x^2-4$.
C. $\dfrac{x-2}{x}$.
D. $x-2$.
::key D
$\dfrac{(x-2)(x+2)x}{x(x+2)}=x-2$. A and C simplify wrongly, B is not simplified.

::tf
Let $P=\dfrac{x^2-1}{x}\cdot\dfrac{x}{x+1}$ with $x\neq0$ and $x\neq-1$. Decide whether each statement is true or false.
a) $P=x-1$.
b) The value of $P$ at $x=3$ is $4$.
c) $P\div(x-1)=1$ for $x\neq1$.
d) $P$ is defined for every $x$.
::key T F T F
a) True: $\dfrac{(x-1)(x+1)x}{x(x+1)}=x-1$. b) False: $P=3-1=2$. c) True: $(x-1)\div(x-1)=1$. d) False: $P$ is not defined at $x=0$ and $x=-1$.

::sa
Find the value of $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$ at $x=5$.
::key 3
The product equals $x-2=5-2=3$.

::sa
Car A travels $120$ km in $x$ hours and car B travels $120$ km in $x+2$ hours. When $x=4$, how many times as fast as car B is car A?
::key 1.5
$\dfrac{x+2}{x}=\dfrac64=1.5$.
:::
