---
title: Equations reducible to linear equations in one unknown
description: Solve equations in factorised form (ax+b)(cx+d)=0 and equations with the unknown in the denominator by reducing them to linear equations.
minutes: 20
---

:::goals
- Solve equations in factorised form $(ax+b)(cx+d)=0$, and get an equation into this form by factorising.
- Find the values of the unknown for which an equation with the unknown in the denominator is defined.
- Solve equations with the unknown in the denominator and reject any value that makes a denominator zero.
:::

An solves the equation $x^2=3x$ like this: "Divide both sides by $x$, so $x=3$." Bình says: "You have lost a solution." Substituting $x=0$ gives $0^2=3\cdot0$, so $0$ really is a solution too. Where did An go wrong, and how can we make sure no solution is lost?

The equation $x^2=3x$ is not linear, but we can **reduce** it to linear equations. This lesson covers two kinds of equation like this.

## Equations in factorised form

### Explore: when is a product equal to $0$?

We have $5\cdot0=0$ and $0\cdot(-7)=0$, but $2\cdot3=6\neq0$. A product is $0$ only when at least one of its factors is $0$. This is the key to solving an equation whose left-hand side is a product of factors and whose right-hand side is $0$ (Vietnamese textbooks call it a *product equation*).

:::theorem Solving an equation in factorised form
$$(ax+b)(cx+d)=0\iff ax+b=0\ \text{ or }\ cx+d=0.$$
Solve the two linear equations and keep **all** the solutions found.
:::

:::example An equation in factorised form
Solve the equation $(2x-6)(x+4)=0$.

**Solution.** The product is $0$ when one of the two factors is $0$:

$$2x-6=0\iff x=3;\qquad x+4=0\iff x=-4.$$

So the equation has two solutions, $x=3$ and $x=-4$.
:::

When the equation is not yet in factorised form, we move every term to the left-hand side and factorise (as in Grade 8).

:::example Answering An and Bình
Solve the equation $x^2=3x$.

**Solution.** Move $3x$ to the left-hand side and take out the common factor $x$:

$$x^2-3x=0\iff x(x-3)=0\iff x=0\ \text{ or }\ x=3.$$

So the equation has two solutions, $x=0$ and $x=3$. An lost the solution $x=0$, because you must not divide both sides by $x$ when $x$ could be $0$.
:::

:::example A common factor on both sides
Solve the equation $(x-1)(2x+1)=(x-1)(x+4)$.

**Solution.** Move the right-hand side to the left and take out the common factor $x-1$:

$$\begin{aligned} (x-1)(2x+1)-(x-1)(x+4)&=0\\ (x-1)(2x+1-x-4)&=0\\ (x-1)(x-3)&=0. \end{aligned}$$

So the equation has two solutions, $x=1$ and $x=3$.
:::

## Equations with the unknown in the denominator

Hoà and Bình set off on their bikes at the same time. In the same length of time Hoà rides $12$ km and Bình rides $18$ km, and Bình is $4$ km/h faster than Hoà. If Hoà's speed is $x$ (km/h), equal times give the equation
$$\frac{12}{x}=\frac{18}{x+4}.$$
The unknown is in the **denominator**. A fraction only makes sense when its denominator is not $0$, so first we must find which values of the unknown are allowed.

:::definition Values for which the equation is defined
An equation with the unknown in the denominator is **defined** only for the values of the unknown that make **every** denominator non-zero. A value that makes a denominator zero is an **excluded value**: it can never be a solution.
:::

:::note Steps for solving an equation with the unknown in the denominator
1. Find the values for which the equation is defined (no denominator may be zero).
2. Write both sides over a common denominator, then clear the fractions.
3. Solve the equation you get.
4. Reject any excluded value, then state the solutions.
:::

:::example The cycling problem
Solve the equation $\dfrac{12}{x}=\dfrac{18}{x+4}$ and answer the problem.

**Solution.** The equation is defined for $x\neq0$ and $x\neq-4$. Multiply both sides by the common denominator $x(x+4)$:

$$12(x+4)=18x\iff 12x+48=18x\iff 6x=48\iff x=8.$$

The value $x=8$ is not excluded. So Hoà rides at $8$ km/h and Bình at $12$ km/h.
:::

Checking for excluded values is not a formality: sometimes the equation obtained after clearing fractions gives a value that makes a denominator $0$.

:::example A value that must be rejected
Solve the equation $\dfrac{x}{x-2}-\dfrac{1}{x}=\dfrac{2}{x(x-2)}$.

**Solution.** The equation is defined for $x\neq0$ and $x\neq2$. Multiply both sides by the common denominator $x(x-2)$:

$$x^2-(x-2)=2\iff x^2-x=0\iff x(x-1)=0\iff x=0\ \text{ or }\ x=1.$$

The value $x=0$ is excluded (it makes a denominator zero), so it is rejected. So the equation has one solution, $x=1$.

**Check.** For $x=1$: the left-hand side is $\dfrac{1}{-1}-1=-2$ and the right-hand side is $\dfrac{2}{1\cdot(-1)}=-2$.
:::

:::graph Excluded values and the solution on a number line
alt: A number line with hollow points at the excluded values 0 and 2, and a filled point at the solution 1
x: -2..4
y: -1..1
segment: (-2, 0) (4, 0)
open: (0, 0) "0" below
open: (2, 0) "2" below
point: (1, 0) "1" above
:::

:::warning Common mistakes
- **Dividing both sides by an expression containing the unknown.** Wrong: dividing $(x-1)(2x+1)=(x-1)(x+4)$ by $x-1$ gives $x=3$. Why it is wrong: the solution $x=1$ is lost. Right: move everything to one side and take out the common factor.
- **Forgetting to reject excluded values.** Wrong: saying the equation in the last example has the solution $x=0$. Why it is wrong: at $x=0$ a denominator is $0$. Right: reject $x=0$.
- **Clearing fractions but not multiplying a term without a denominator.** Wrong: from $\dfrac{x+1}{x-3}=2+\dfrac{4}{x-3}$ writing $x+1=2+4$. Why it is wrong: the $2$ must also be multiplied by $x-3$. Right: $x+1=2(x-3)+4$.
:::

## Key terms

:::terms
- equation in factorised form, A·B = 0 (product equation) | phương trình tích
- factor | thừa số
- factorise | phân tích thành nhân tử
- common factor | nhân tử chung
- equation with the unknown in the denominator | phương trình chứa ẩn ở mẫu
- values for which the equation is defined (excluded values) | điều kiện xác định
- common denominator | mẫu chung
- clear the fractions | khử mẫu
:::

## Summary

- $A\cdot B=0\iff A=0$ or $B=0$. To get a product: move everything to one side and factorise.
- Never divide both sides by an expression containing the unknown.
- Unknown in the denominator: find the excluded values, use a common denominator and clear the fractions, solve, then **reject any excluded value**.
- An equation may have no solution if every value found is rejected.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Solve the equation $(x-5)(3x+6)=0$.

::hint
**What you need:** $A\cdot B=0\iff A=0$ or $B=0$.

**Steps:**
1. Set $x-5=0$.
2. Set $3x+6=0$.

::solution
$x-5=0\iff x=5$; $3x+6=0\iff x=-2$.

**Answer.** $x=5$ or $x=-2$.
:::

:::exercise
Solve the equation $2x^2+7x=0$.

::hint
**What you need:** take out a common factor to get an equation in factorised form.

**Steps:**
1. Write $2x^2+7x=x(2x+7)$.
2. Solve each linear equation.

::solution
$x(2x+7)=0\iff x=0$ or $2x+7=0\iff x=-\dfrac72$.

**Answer.** $x=0$ or $x=-\dfrac72$.
:::

:::exercise
Solve the equation $(2x-1)^2-(x+4)^2=0$.

::hint
**What you need:** the identity $A^2-B^2=(A-B)(A+B)$.

**Steps:**
1. Factorise the left-hand side as the product of $(2x-1)-(x+4)$ and $(2x-1)+(x+4)$.
2. Simplify each factor and solve.

::solution
$(2x-1-x-4)(2x-1+x+4)=0\iff(x-5)(3x+3)=0\iff x=5$ or $x=-1$.

**Answer.** $x=5$ or $x=-1$.
:::

:::exercise
Solve the equation $\dfrac{3}{x-2}=\dfrac{5}{x+2}$.

::hint
**What you need:** the steps for an equation with the unknown in the denominator.

**Steps:**
1. The equation is defined for $x\neq2$, $x\neq-2$.
2. Multiply both sides by $(x-2)(x+2)$.
3. Solve and check against the excluded values.

::solution
$3(x+2)=5(x-2)\iff 3x+6=5x-10\iff 2x=16\iff x=8$ (not an excluded value).

**Answer.** $x=8$.
:::

:::exercise
Solve the equation $\dfrac{x+1}{x-3}=2+\dfrac{4}{x-3}$.

::hint
**What you need:** when clearing fractions, multiply **every** term by the common denominator.

**Steps:**
1. The equation is defined for $x\neq3$.
2. Multiply both sides by $x-3$.
3. Check against the excluded value.

::solution
$x+1=2(x-3)+4\iff x+1=2x-2\iff x=3$. This is the excluded value $x=3$, so it is rejected.

**Answer.** The equation has no solution.
:::

:::exercise
Solve the equation $\dfrac{2}{x+1}-\dfrac{1}{x-1}=\dfrac{3x-11}{x^2-1}$.

::hint
**What you need:** $x^2-1=(x-1)(x+1)$ is the common denominator.

**Steps:**
1. The equation is defined for $x\neq1$, $x\neq-1$.
2. Multiply both sides by $(x-1)(x+1)$.
3. Solve and check against the excluded values.

::solution
$2(x-1)-(x+1)=3x-11\iff x-3=3x-11\iff 2x=8\iff x=4$ (not an excluded value).

**Answer.** $x=4$.
:::

:::exercise
With $120$ thousand đồng, Linh can buy as many type I exercise books as she can buy type II books with $90$ thousand đồng. A type I book costs $2$ thousand đồng more than a type II book. Find the price of a type II book.

::hint
**What you need:** number of books $=$ money $\div$ price of one book.

**Steps:**
1. Let the price of a type II book be $x$ thousand đồng ($x>0$), so type I costs $x+2$.
2. Form the equation $\dfrac{120}{x+2}=\dfrac{90}{x}$ and solve it.

::solution
A price is positive, so $x>0$. $120x=90(x+2)\iff 30x=180\iff x=6$. Check: $120\div8=15$ and $90\div6=15$.

**Answer.** $6$ thousand đồng.
:::

:::exercise
Consider the expression $A=\dfrac{x}{x+3}+\dfrac{2}{x-3}-\dfrac{12}{x^2-9}$.

a) Find the values of $x$ for which $A$ is defined.

b) Simplify $A$.

c) Find $x$ such that $A=\dfrac12$.

::hint
**What you need:** $x^2-9=(x-3)(x+3)$; factorise $x^2-x-6$ by splitting $-x=-3x+2x$.

**Steps:**
1. a) Every denominator is non-zero.
2. b) Use the common denominator $(x-3)(x+3)$ and simplify.
3. c) Solve $\dfrac{x+2}{x+3}=\dfrac12$ and check against the excluded values.

::solution
a) $x\neq3$ and $x\neq-3$.

b) $A=\dfrac{x(x-3)+2(x+3)-12}{(x-3)(x+3)}=\dfrac{x^2-x-6}{(x-3)(x+3)}=\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\dfrac{x+2}{x+3}$.

c) $2(x+2)=x+3\iff x=-1$ (not an excluded value).

**Answer.** a) $x\neq\pm3$; b) $A=\dfrac{x+2}{x+3}$; c) $x=-1$.
:::

:::exercise Challenge
Solve the equation $x^3+2x^2-x-2=0$.

::hint
**What you need:** group terms to find a common factor; an equation in factorised form can have three factors.

**Steps:**
1. Group as $(x^3+2x^2)-(x+2)$.
2. Take out the common factor $x+2$, then use $x^2-1=(x-1)(x+1)$.

::solution
$x^2(x+2)-(x+2)=0\iff(x+2)(x^2-1)=0\iff(x+2)(x-1)(x+1)=0$.

**Answer.** $x=-2$, $x=1$ or $x=-1$.
:::

## Mini test

:::quiz
::mc
The solution set of the equation $(x-2)(3x+9)=0$ is
A. $S=\{2, -3\}$.
B. $S=\{-2, 3\}$.
C. $S=\{2, 3\}$.
D. $S=\{2, -9\}$.
::key A
$x-2=0\iff x=2$; $3x+9=0\iff x=-3$. B has both signs wrong; D forgets to divide by $3$.

::mc
The equation $\dfrac{x}{x+1}+\dfrac{3}{x-4}=2$ is defined when
A. $x\neq-1$ and $x\neq4$.
B. $x\neq1$ and $x\neq-4$.
C. $x\neq-1$.
D. $x\neq4$.
::key A
Both denominators $x+1$ and $x-4$ must be non-zero. B has the wrong signs; C and D look at only one denominator.

::mc
The solution set of the equation $x^2=5x$ is
A. $S=\{5\}$.
B. $S=\{0, 5\}$.
C. $S=\{0\}$.
D. $S=\{0, -5\}$.
::key B
$x(x-5)=0$. Option A is what you get by dividing both sides by $x$ and losing the solution $0$.

::mc
The equation $\dfrac{x+1}{x-2}=\dfrac{3}{x-2}$
A. has the solution $x=2$.
B. has the solution $x=-2$.
C. has no solution.
D. has the solution $x=4$.
::key C
Clearing fractions gives $x+1=3$, $x=2$, but $x=2$ makes the denominator $0$, so it is rejected. Option A forgets to reject the excluded value; D moves the $1$ across without changing its sign ($x=3+1$).

::tf
Consider the equation $\dfrac{4}{x+1}=\dfrac{3}{x-2}$.
a) The equation is defined for $x\neq-1$ and $x\neq2$.
b) Clearing fractions gives $4(x-2)=3(x+1)$.
c) The equation has the solution $x=-11$.
d) The equation has two solutions.
::key T T F F
a) True. b) True. c) False: $4x-8=3x+3\iff x=11$. d) False: there is only one solution, $x=11$.

::sa
Find the sum of the solutions of the equation $(2x-8)(x+7)=0$.
::key -3
The two solutions are $4$ and $-7$, and their sum is $-3$.

::sa
Solve the equation $\dfrac{5}{x+2}=\dfrac{3}{x-2}$.
::key 8
Defined for $x\neq\pm2$. $5(x-2)=3(x+2)\iff 2x=16\iff x=8$ (not an excluded value).
:::
