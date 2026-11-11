---
title: Linear inequalities in one unknown
description: Recognise linear inequalities in one unknown, solve them by moving terms and multiplying (reversing for negative numbers), and use them in real problems.
minutes: 20
---

:::goals
- Recognise a linear inequality in one unknown and check whether a number is a solution.
- Solve linear inequalities in one unknown by moving terms and by multiplying both sides.
- Reduce inequalities to linear form and solve real-life problems.
:::

Minh has $200$ thousand đồng. He buys a box of pens for $50$ thousand đồng and wants to buy some exercise books at $12$ thousand đồng each. What is the **greatest** number of books he can buy?

Let $x$ be the number of books. He pays $50+12x$, which must not exceed $200$, so $50+12x\le200$. This is not an equation but an **inequality**.

## Linear inequalities in one unknown

### Explore: trying a few values

| $x$ | $10$ | $12$ | $13$ |
|---|---|---|---|
| $50+12x$ | $170$ | $194$ | $206$ |
| $\le200$? | yes | yes | no |

With $12$ books he has enough money; with $13$ he does not. But trying numbers one by one is slow; we need a method like the one for solving equations.

:::definition Linear inequality in one unknown
A **linear inequality in one unknown** $x$ is an inequality of the form
$$ax+b<0,\quad ax+b>0,\quad ax+b\le0\quad\text{or}\quad ax+b\ge0,$$
where $a$, $b$ are known numbers and $a\neq0$.

A number $x_0$ is a **solution** if putting $x=x_0$ gives a true statement.
:::

:::example Recognising and checking
a) Which are linear inequalities in one unknown: $2x-3>0$; $0x+5\le0$; $x^2>1$; $-x+4\ge0$?

b) Is $x=2$ a solution of $3x-7<0$?

**Solution.** a) We check whether the coefficient of $x$ is non-zero and whether $x$ has a power other than $1$. Only $2x-3>0$ and $-x+4\ge0$ have the right form ($0x+5\le0$ has $a=0$; $x^2>1$ contains $x^2$).

b) Substitute $x=2$:

$$3\cdot2-7=-1<0.$$

So $x=2$ is a solution of $3x-7<0$.
:::

## How to solve

We transform an inequality using the properties of inequalities from the last lesson.

:::theorem Two rules for transforming
- **Moving a term:** move a term from one side to the other and **change its sign**.
- **Multiplying:** multiply (or divide) both sides by the same non-zero number; keep the direction if the number is **positive**, **reverse** the sign if it is **negative**.
:::

These rules work because adding the same number to both sides keeps the direction, while multiplying by a negative number reverses it (for example $2<3$ but $-2>-3$).

:::example An inequality with a positive coefficient
Solve the inequality $3x-6>0$.

**Solution.** Move $-6$ to the right-hand side, then divide both sides by $3>0$ (keep the direction):

$$3x-6>0\iff 3x>6\iff x>2.$$

So the solution of the inequality is $x>2$.
:::

When the coefficient of $x$ is negative, the division step needs the most care.

:::example An inequality with a negative coefficient
Solve the inequality $-4x+12\ge0$.

**Solution.** Move $12$ to the right-hand side, then divide both sides by $-4<0$, so **reverse** the sign:

$$-4x+12\ge0\iff -4x\ge-12\iff x\le3.$$

So the solution of the inequality is $x\le3$.

**Check.** $x=3$: $-12+12=0\ge0$, true; $x=4$: $-16+12=-4<0$, so $4$ is not a solution.
:::

:::graph The solutions $x>2$ (top) and $x\le3$ (bottom) on number lines
alt: Two number lines; the top one has a hollow point at 2 with the part to the right shaded, the bottom one has a filled point at 3 with the part to the left shaded
x: -2..7
y: -2..2
segment: (2, 1) (7, 1)
open: (2, 1) "2" above
segment: (-2, -1) (3, -1)
point: (3, -1) "3" below
label: (6.3, 1.5) "x > 2"
label: (-1.2, -1.5) "x ≤ 3"
:::

A hollow point means that number is **not** a solution (sign $>$ or $<$); a filled point means it is a solution (sign $\ge$ or $\le$).

## Inequalities that reduce to linear form

Many inequalities have brackets or fractions. We expand the brackets, clear the fractions, move the terms in $x$ to one side and the numbers to the other.

:::example With brackets
Solve the inequality $5(x-1)-2\le3x+1$.

**Solution.** Expand, move $3x$ to the left and $-7$ to the right, then divide by $2>0$:

$$5x-7\le3x+1\iff 2x\le8\iff x\le4.$$

So the solution of the inequality is $x\le4$.
:::

:::example With fractions
Solve the inequality $\dfrac{x+1}{2}-\dfrac{x-2}{3}<1$.

**Solution.** Multiply both sides by $6>0$ (keep the direction); remember to multiply the $1$ on the right as well, and mind the minus sign in front of the second fraction:

$$3(x+1)-2(x-2)<6\iff 3x+3-2x+4<6\iff x+7<6\iff x<-1.$$

So the solution of the inequality is $x<-1$.
:::

Now we answer Minh's question.

:::example How many books?
Solve $50+12x\le200$ where $x$ is a whole number, then answer the question at the start.

**Solution.** Move $50$ to the right-hand side, then divide by $12>0$:

$$12x\le150\iff x\le12.5.$$

The number of books is a whole number not exceeding $12.5$, so the greatest is $12$. So Minh can buy at most $12$ books.
:::

:::warning Common mistakes
- **Forgetting to reverse when dividing by a negative number.** Wrong: $-4x\ge-12\iff x\ge3$. Why it is wrong: dividing by $-4<0$ reverses the sign. Right: $x\le3$.
- **Sign errors when expanding brackets.** Wrong: $-2(x-2)=-2x-4$. Why it is wrong: $(-2)\cdot(-2)=4$. Right: $-2x+4$.
- **Rounding the wrong way in real problems.** Wrong: $x\le12.5$, so he can buy $13$ books. Why it is wrong: $13>12.5$. Right: take the greatest whole number not exceeding $12.5$, which is $12$.
:::

## Key terms

:::terms
- inequality (to be solved) | bất phương trình
- linear inequality in one unknown | bất phương trình bậc nhất một ẩn
- solution of the inequality | nghiệm của bất phương trình
- rule for moving a term to the other side | quy tắc chuyển vế
- rule for multiplying both sides | quy tắc nhân
- reverse the inequality sign | đổi chiều
- number line | trục số
- solve an inequality | giải bất phương trình
:::

## Summary

- Linear inequality in one unknown: $ax+b<0$ (or $>$, $\le$, $\ge$), $a\neq0$.
- Moving a term to the other side changes its sign.
- Multiplying or dividing by a positive number: keep the direction; by a negative number: **reverse** it.
- Brackets or fractions: expand, multiply by a positive common denominator, reach $ax<c$, then divide by $a$.
- Real problems: check the conditions (whole numbers…) before choosing the answer.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Which of the numbers $-1$, $0$, $3$ are solutions of the inequality $2x+1>0$?

::hint
**What you need:** $x_0$ is a solution if substituting it gives a true statement.

**Steps:**
1. Substitute each number into $2x+1$.
2. Compare with $0$.

::solution
We substitute each number in turn into the inequality $2x+1>0$:

- For $x=-1$, we have $2\cdot(-1)+1=-1$. Since $-1>0$ is false, $x=-1$ is not a solution.
- For $x=0$, we have $2\cdot0+1=1$. Since $1>0$ is true, $x=0$ is a solution.
- For $x=3$, we have $2\cdot3+1=7$. Since $7>0$ is true, $x=3$ is a solution.

So among the three numbers, $0$ and $3$ are solutions of the inequality.

**Answer.** $0$ and $3$.
:::

:::exercise
Solve the inequality $4x-8<0$.

::hint
**What you need:** move a term, then divide by a positive number (keep the direction).

**Steps:**
1. Move $-8$ to the right-hand side.
2. Divide by $4$.

::solution
We have
$$\begin{aligned}
4x-8&<0\\
4x&<8 &&\text{(adding $8$ to both sides)}\\
x&<2 &&\text{(dividing both sides by $4>0$, same direction)}.
\end{aligned}$$

So the solution of the inequality is $x<2$.

**Answer.** $x<2$.
:::

:::exercise
Solve the inequality $-3x+9\le0$.

::hint
**What you need:** dividing by a negative number reverses the sign.

**Steps:**
1. Move $9$ to the right-hand side.
2. Divide both sides by $-3$ and reverse the sign.

::solution
We have
$$\begin{aligned}
-3x+9&\le0\\
-3x&\le-9 &&\text{(adding $-9$ to both sides)}\\
x&\ge3 &&\text{(dividing both sides by $-3<0$, direction reversed)}.
\end{aligned}$$

So the solution of the inequality is $x\ge3$.

**Answer.** $x\ge3$.
:::

:::exercise
Solve the inequality $2(x+3)>5x-6$.

::hint
**What you need:** expand, move terms, and watch the sign of the coefficient of $x$.

**Steps:**
1. Expand: $2x+6>5x-6$.
2. Moving terms gives $-3x>-12$.
3. Divide by $-3$ and reverse the sign.

::solution
We have
$$\begin{aligned}
2(x+3)&>5x-6\\
2x+6&>5x-6 &&\text{(expanding the brackets)}\\
2x-5x&>-6-6 &&\text{(moving terms across and changing signs)}\\
-3x&>-12\\
x&<4 &&\text{(dividing both sides by $-3<0$, direction reversed)}.
\end{aligned}$$

So the solution of the inequality is $x<4$.

**Answer.** $x<4$.
:::

:::exercise
Solve the inequality $\dfrac{2x-1}{3}\ge\dfrac{x+2}{4}$.

::hint
**What you need:** multiply both sides by the positive common denominator $12$; the direction stays the same.

**Steps:**
1. Multiply both sides by $12$.
2. Expand, move terms, divide by the coefficient of $x$.

::solution
Multiplying both sides by $12$ (the common denominator of $3$ and $4$; since $12>0$ the direction stays the same), we get
$$4(2x-1)\ge3(x+2).$$

It follows that
$$\begin{aligned}
8x-4&\ge3x+6\\
8x-3x&\ge6+4\\
5x&\ge10\\
x&\ge2.
\end{aligned}$$

So the solution of the inequality is $x\ge2$.

**Answer.** $x\ge2$.
:::

:::exercise
A taxi firm charges a starting fee of $10$ thousand đồng plus $14$ thousand đồng per kilometre. With $150$ thousand đồng, what is the greatest distance you can travel (in whole kilometres)?

::hint
**What you need:** the fare must not exceed the money you have.

**Steps:**
1. Let $x$ be the number of kilometres; form $10+14x\le150$.
2. Solve and choose the greatest whole number.

::solution
Let $x$ (km) be the distance travelled ($x>0$).

The fare is $10+14x$ (thousand đồng).

There are only $150$ thousand đồng, so we have the inequality
$$10+14x\le150.$$

It follows that $14x\le140$, so $x\le10$.

So with $150$ thousand đồng you can travel at most $10$ km.

**Answer.** At most $10$ km.
:::

:::exercise
Nam has scored $7$, $8$ and $6$ in three tests. What is the lowest mark he needs in the fourth test so that his mean for the four tests is not below $7.5$?

::hint
**What you need:** "not below" is $\ge$; mean $=$ total $\div$ number of tests.

**Steps:**
1. Let $x$ be the fourth mark ($0\le x\le10$).
2. Form $\dfrac{7+8+6+x}{4}\ge7.5$ and multiply both sides by $4$.

::solution
Let $x$ be Nam's mark in the fourth test ($0\le x\le10$).

The mean of the four tests is $\dfrac{7+8+6+x}{4}=\dfrac{21+x}{4}$.

The mean must be at least $7.5$, so we have the inequality
$$\frac{21+x}{4}\ge7.5.$$

Multiplying both sides by $4$, we get $21+x\ge30$, so $x\ge9$.

Combining with the condition, we get $9\le x\le10$.

So Nam needs at least $9$ marks in the fourth test.

**Answer.** At least $9$ marks.
:::

:::exercise Review
Find the solutions of the equation $(x-4)(2x+1)=0$ that satisfy the inequality $3x-2>0$.

::hint
**What you need:** equations in factorised form (lesson 4) and checking solutions of an inequality.

**Steps:**
1. Solve the equation in factorised form.
2. Substitute each solution into $3x-2$.

::solution
First we solve the equation $(x-4)(2x+1)=0$:

- $x-4=0$, which gives $x=4$;
- $2x+1=0$, which gives $x=-\dfrac12$.

Next we substitute each solution into the inequality $3x-2>0$:

- For $x=4$, we have $3\cdot4-2=10>0$ (true), so $x=4$ satisfies it.
- For $x=-\dfrac12$, we have $3\cdot\left(-\dfrac12\right)-2=-\dfrac72<0$, so $x=-\dfrac12$ does not satisfy it.

So the solution of the equation that satisfies the given inequality is $x=4$.

**Answer.** $x=4$.
:::

:::exercise
Consider the expressions $A=3(x-1)$ and $B=x+5$.

a) Find $x$ such that $A=B$.

b) Find $x$ such that $A>B$.

c) Find the least integer $x$ such that $A>B$.

::hint
**What you need:** solving linear equations and linear inequalities in one unknown.

**Steps:**
1. a) Solve $3x-3=x+5$.
2. b) Solve $3x-3>x+5$.
3. c) Choose the least integer that satisfies part b).

::solution
a) We have $A=B$ when $3(x-1)=x+5$.

It follows that $3x-3=x+5$, that is $2x=8$, so $x=4$.

So $A=B$ when $x=4$.

b) We have $A>B$ when $3(x-1)>x+5$.

It follows that $3x-3>x+5$, that is $2x>8$, so $x>4$ (dividing both sides by $2>0$, same direction).

So $A>B$ when $x>4$.

c) By part b), $A>B$ when $x>4$. The smallest integer greater than $4$ is $5$.

So the smallest integer $x$ for which $A>B$ is $x=5$.

**Answer.** a) $x=4$; b) $x>4$; c) $x=5$.
:::

:::exercise Challenge
Phone plan A charges $3$ thousand đồng per minute of calls. Plan B charges $45$ thousand đồng a month plus $1$ thousand đồng per minute. In a month, what is the least number of whole minutes of calls for which plan B is cheaper than plan A?

::hint
**What you need:** "B is cheaper than A" means the cost of plan B $<$ the cost of plan A.

**Steps:**
1. Let $x$ be the number of minutes; plan A costs $3x$ and plan B costs $45+x$.
2. Solve $45+x<3x$.
3. Choose the least whole number.

::solution
Let $x$ be the number of minutes of calls in a month ($x$ is a positive integer).

The cost with plan A is $3x$ (thousand đồng); with plan B it is $45+x$ (thousand đồng).

Plan B is cheaper than plan A when
$$45+x<3x.$$

It follows that $-2x<-45$, so $x>22.5$ (dividing both sides by $-2<0$, direction reversed).

Since $x$ is an integer, the smallest value of $x$ is $23$.

Check: for $23$ minutes, plan A costs $3\cdot23=69$ (thousand đồng) and plan B costs $45+23=68$ (thousand đồng).

So you must call for at least $23$ minutes in a month for plan B to be cheaper than plan A.

**Answer.** At least $23$ minutes.
:::

## Mini test

:::quiz
::mc
Which is a linear inequality in one unknown?
A. $0x+3>0$.
B. $x^2-1<0$.
C. $2x-5\le0$.
D. $\dfrac1x+2>0$.
::key C
C has the form $ax+b\le0$ with $a=2\neq0$. A has $a=0$; B contains $x^2$; D has the unknown in a denominator.

::mc
The solution of the inequality $-2x+6>0$ is
A. $x>3$.
B. $x<3$.
C. $x>-3$.
D. $x<-3$.
::key B
$-2x>-6\iff x<3$ (dividing by $-2$ reverses the sign). A forgets to reverse; C and D get the sign wrong when moving the $6$.

::mc
The solution of the inequality $3(x-2)\le x+4$ is
A. $x\le5$.
B. $x\ge5$.
C. $x\le3$.
D. $x\le-1$.
::key A
$3x-6\le x+4\iff 2x\le10\iff x\le5$. C expands the bracket as $3x-2$; D moves $-6$ to the right without changing its sign.

::mc
The greatest integer satisfying $5x-12<0$ is
A. $2$.
B. $3$.
C. $1$.
D. $-2$.
::key A
$x<2.4$, so the greatest integer is $2$. B comes from rounding up.

::tf
Consider the inequality $4-2x\ge x-5$.
a) $x=3$ is a solution.
b) Moving terms gives $-3x\ge-9$.
c) The solution of the inequality is $x\ge3$.
d) Exactly $4$ non-negative integers satisfy the inequality.
::key T T F T
a) True: $-2\ge-2$. b) True. c) False: dividing by $-3$ reverses the sign, so $x\le3$. d) True: $0$, $1$, $2$, $3$.

::sa
Find the least integer satisfying $2(x+1)>9-x$.
::key 3
$2x+2>9-x\iff 3x>7\iff x>\dfrac73\approx2.33$, so the least integer is $3$.

::sa
A taxi firm charges a starting fee of $12$ thousand đồng plus $15$ thousand đồng per kilometre. With $200$ thousand đồng, what is the greatest whole number of kilometres you can travel?
::key 12
$12+15x\le200\iff x\le\dfrac{188}{15}\approx12.5$, so at most $12$ km.
:::
