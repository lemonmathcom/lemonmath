---
title: Linear equations and simultaneous linear equations in two unknowns
description: Recognise a linear equation in two unknowns, check solutions, draw the solution set as a line and understand the solution of simultaneous equations.
minutes: 20
---

:::goals
- Recognise a linear equation in two unknowns $ax+by=c$ and check whether a pair of numbers is a solution.
- Show the solution set of a linear equation in two unknowns as a straight line in the coordinate plane.
- Recognise a pair of simultaneous linear equations and check a solution of them.
:::

Lan has $60$ thousand đồng to spend on school supplies. Each pen costs $5$ thousand đồng, each exercise book costs $8$ thousand đồng, and Lan wants to spend all of it, with nothing left over. How many pens and how many books can she buy? And what if she wants to buy exactly $9$ items?

The problem has two numbers we do not know: the number of pens and the number of books. We need a new kind of equation, one with **two unknowns**.

## Linear equations in two unknowns

### Explore: ways to spend all the money

Let $x$ be the number of pens and $y$ the number of books. The total cost is $5x+8y$ (thousand đồng), so "spending all the money" means $5x+8y=60$. We try a few values of $x$ and compute $y=\dfrac{60-5x}{8}$:

| $x$ | $0$ | $4$ | $8$ | $12$ |
|---|---|---|---|---|
| $y$ | $7.5$ | $5$ | $2.5$ | $0$ |

Each value of $x$ gives one value of $y$, so a great many pairs fit. But the numbers of pens and books must be whole numbers, so there are only two ways to shop: $4$ pens and $5$ books, or $12$ pens.

:::definition Linear equation in two unknowns
A **linear equation in two unknowns** $x$ and $y$ is an equation of the form
$$ax+by=c,$$
where $a$, $b$, $c$ are known numbers and $a\neq 0$ or $b\neq 0$.

If $ax_0+by_0=c$, the pair $(x_0, y_0)$ is a **solution** of the equation.
:::

:::example Checking solutions
Which of the pairs $(1, -1)$, $(3, 2)$, $(-2, -3)$ are solutions of the equation $2x-3y=5$?

**Solution.** Substitute each pair into the left-hand side $2x-3y$ and compare with $5$:

$$\begin{aligned} (1, -1):&\quad 2\cdot1-3\cdot(-1)=2+3=5;\\ (3, 2):&\quad 2\cdot3-3\cdot2=0\neq5;\\ (-2, -3):&\quad 2\cdot(-2)-3\cdot(-3)=-4+9=5. \end{aligned}$$

So $(1, -1)$ and $(-2, -3)$ are solutions, and $(3, 2)$ is not.
:::

## Showing the solution set as a line

A linear equation in two unknowns always has infinitely many solutions. Each solution $(x_0, y_0)$ is a point in the coordinate plane, and all these points lie on one straight line.

- If $b\neq 0$: we write $y=-\dfrac{a}{b}x+\dfrac{c}{b}$. This is the graph of a linear function (or a constant function when $a=0$), which you met in Grade 8.
- If $b=0$ (then $a\neq0$): the equation becomes $x=\dfrac{c}{a}$, a line parallel to the $y$-axis (or the $y$-axis itself when $c=0$).

:::example Drawing the line of solutions
Show the solution set of each equation on the same coordinate plane: a) $x+2y=4$; b) $0x+y=3$; c) $2x+0y=-2$.

**Solution.** We rewrite each equation in the form $y=\dots$ or $x=\dots$:

$$\begin{aligned} \text{a) }& x+2y=4\iff y=-\tfrac12x+2;\\ \text{b) }& 0x+y=3\iff y=3;\\ \text{c) }& 2x+0y=-2\iff x=-1. \end{aligned}$$

So a) is the line through $(0, 2)$ and $(4, 0)$; b) is the line parallel to the $x$-axis that crosses the $y$-axis at $(0, 3)$; c) is the line parallel to the $y$-axis that crosses the $x$-axis at $(-1, 0)$.
:::

:::graph Three lines showing solution sets
alt: A coordinate plane with the line through (0, 2) and (4, 0), the horizontal line y equals 3 and the vertical line x equals −1
x: -3..6
y: -2..5
plot: -x/2 + 2
hline: 3
vline: -1
point: (0, 2) "(0, 2)" above-right
point: (4, 0) "(4, 0)" below
label: (4.5, 3.4) "y = 3"
label: (-1.9, -1.4) "x = −1"
:::

## Simultaneous linear equations

Back to Lan's problem. If she wants to buy exactly $9$ items, then $x$ and $y$ must satisfy two equations **at the same time**: $5x+8y=60$ and $x+y=9$.

:::definition Simultaneous linear equations in two unknowns
A pair of **simultaneous linear equations in two unknowns** has the form
$$\begin{cases} ax+by=c\\ a'x+b'y=c' \end{cases}$$
where each equation is a linear equation in two unknowns. The pair $(x_0, y_0)$ is a **solution of the simultaneous equations** if it is a solution of **both** equations.
:::

Geometrically, the solution gives the coordinates of the point where the two lines meet.

:::example Solutions of simultaneous equations
Which of the pairs $(2, 1)$ and $(3, -1)$ is a solution of the simultaneous equations $\begin{cases} x+y=3\\ 2x-y=3 \end{cases}$?

**Solution.** A pair is a solution when it satisfies both equations, so we check each equation:

$$\begin{aligned} (2, 1):&\quad 2+1=3,\quad 2\cdot2-1=3;\\ (3, -1):&\quad 3+(-1)=2\neq 3. \end{aligned}$$

So $(2, 1)$ is a solution; $(3, -1)$ is not, because it does not satisfy the first equation.
:::

Now we answer the second question from the start.

:::example Forming the equations for the shopping problem
Lan wants to spend exactly $60$ thousand đồng and buy exactly $9$ items. Form the simultaneous equations and show that $(4, 5)$ is a solution.

**Solution.** Let $x$ be the number of pens and $y$ the number of books ($x$ and $y$ are whole numbers). The cost is $5x+8y$ and the number of items is $x+y$, so:

$$\begin{cases} 5x+8y=60\\ x+y=9 \end{cases}\qquad 5\cdot4+8\cdot5=20+40=60,\quad 4+5=9.$$

So Lan buys $4$ pens and $5$ books. The next lesson shows how to find this solution without guessing.
:::

:::warning Common mistakes
- **Swapping the order in a pair.** Wrong: "$(5, 4)$ means $4$ pens and $5$ books". Why it is wrong: the first number is $x$ (the pens). Right: that purchase is $(4, 5)$.
- **Checking only one of the equations.** Wrong: "$(3, -1)$ satisfies $2x-y=7$, so it solves the simultaneous equations $x+y=3$, $2x-y=7$". Why it is wrong: $3+(-1)=2\neq3$. Right: it must satisfy **both** equations.
- **Thinking $0x+3y=6$ is not a linear equation in two unknowns.** Why it is wrong: we only need $a$ or $b$ to be non-zero. Right: it is a linear equation in two unknowns, and its solution set is the line $y=2$.
:::

## Key terms

:::terms
- linear equation in two unknowns | phương trình bậc nhất hai ẩn
- unknown | ẩn
- coefficient | hệ số
- solution | nghiệm
- solution set | tập nghiệm
- simultaneous linear equations in two unknowns | hệ hai phương trình bậc nhất hai ẩn
- solution of the simultaneous equations | nghiệm của hệ
- coordinate plane | mặt phẳng toạ độ
:::

## Summary

- Linear equation in two unknowns: $ax+by=c$ with $a\neq0$ or $b\neq0$.
- $(x_0, y_0)$ is a solution when $ax_0+by_0=c$; the equation has infinitely many solutions.
- The solution set is a straight line: $y=-\dfrac{a}{b}x+\dfrac{c}{b}$ if $b\neq0$; $x=\dfrac{c}{a}$ if $b=0$.
- A solution of two simultaneous equations is a pair that satisfies **both** equations, that is, the point where the two lines meet.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Which of the following equations are linear equations in two unknowns?

a) $3x-y=2$;
b) $0x+5y=-10$;
c) $x+y^2=4$;
d) $0x+0y=7$.

::hint
**What you need:** $ax+by=c$ is a linear equation in two unknowns when $a\neq0$ or $b\neq0$, and $x$, $y$ appear with no power other than $1$.

**Steps:**
1. Read off the coefficients of $x$ and $y$ in each equation.
2. Rule out the equation with $y^2$ and the one where both coefficients are $0$.

::solution
A linear equation in two unknowns has the form $ax+by=c$, where $a$ and $b$ are not both $0$.

a) The equation $3x-y=2$ has the form $ax+by=c$ with $a=3$, $b=-1$, $c=2$. Since $a\neq0$, it is a linear equation in two unknowns.

b) The equation $0x+5y=-10$ has $a=0$, $b=5$, $c=-10$. Since $b\neq0$, it is a linear equation in two unknowns.

c) The equation $x+y^2=4$ contains $y^2$, so it does not have the form $ax+by=c$. It is not a linear equation in two unknowns.

d) The equation $0x+0y=7$ has $a=b=0$, so it is not a linear equation in two unknowns.

So the equations in parts a) and b) are linear equations in two unknowns.

**Answer.** a) and b).
:::

:::exercise
Which of the pairs $(2, 1)$, $(0, 4)$, $(4, -2)$, $(1, 3)$ are solutions of the equation $3x+2y=8$?

::hint
**What you need:** $(x_0, y_0)$ is a solution when $3x_0+2y_0=8$.

**Steps:**
1. Substitute each pair into $3x+2y$.
2. Compare the result with $8$.

::solution
We substitute each pair in turn into the left-hand side of the equation $3x+2y=8$ and compare with the right-hand side:

- For $(2, 1)$: $3\cdot2+2\cdot1=8$. This pair is a solution.
- For $(0, 4)$: $3\cdot0+2\cdot4=8$. This pair is a solution.
- For $(4, -2)$: $3\cdot4+2\cdot(-2)=12-4=8$. This pair is a solution.
- For $(1, 3)$: $3\cdot1+2\cdot3=9\neq8$. This pair is not a solution.

So the pairs $(2, 1)$, $(0, 4)$ and $(4, -2)$ are solutions of the equation.

**Answer.** $(2, 1)$, $(0, 4)$ and $(4, -2)$.
:::

:::exercise
Find $x$ so that $(x, -1)$ is a solution of the equation $4x+3y=9$.

::hint
**What you need:** substituting the known value turns the equation into a linear equation in one unknown.

**Steps:**
1. Substitute $y=-1$.
2. Solve the equation in one unknown that you get.

::solution
The pair $(x, -1)$ is a solution of the equation $4x+3y=9$ when substituting $y=-1$ into the equation gives a true equality:
$$4x+3\cdot(-1)=9.$$

It follows that $4x-3=9$, that is $4x=12$, so $x=3$.

So for $x=3$ the pair $(x, -1)$ is a solution of the equation.

**Answer.** $x=3$.
:::

:::exercise
Represent the solution set of each of the following equations on the coordinate plane:

a) $2x-y=1$;
b) $0x+2y=6$.

::hint
**What you need:** when $b\neq0$, write $y$ in terms of $x$ and draw the line through two points.

**Steps:**
1. Rewrite in the form $y=\dots$.
2. Find two points on the line (for example with $x=0$ and $x=1$).

::solution
a) We have $2x-y=1$, which gives $y=2x-1$.

Taking $x=0$ gives $y=-1$; taking $x=1$ gives $y=1$. Hence the line $y=2x-1$ passes through the two points $(0, -1)$ and $(1, 1)$.

So the solution set of the equation $2x-y=1$ is represented by the line $y=2x-1$, which passes through $(0, -1)$ and $(1, 1)$.

b) We have $0x+2y=6$, which gives $2y=6$, so $y=3$ (for every $x$).

So the solution set of the equation $0x+2y=6$ is represented by the line $y=3$: this line is parallel to the $x$-axis and meets the $y$-axis at the point $(0, 3)$.

**Answer.** a) The line $y=2x-1$; b) the line $y=3$.
:::

:::exercise
A group of $7$ people go to the cinema. A student ticket costs $45$ thousand đồng, an adult ticket costs $70$ thousand đồng, and the group pays $365$ thousand đồng. Let $x$ be the number of students and $y$ the number of adults. Form the simultaneous equations, then say which of $(5, 2)$ and $(4, 3)$ is a solution.

::hint
**What you need:** each condition in the problem gives one equation; a solution satisfies both.

**Steps:**
1. The number of people gives $x+y=7$.
2. The cost gives $45x+70y=365$.
3. Substitute each pair into both equations.

::solution
The group has $7$ people, so we have the equation $x+y=7$.

The student tickets cost $45x$ (thousand đồng) and the adult tickets cost $70y$ (thousand đồng). The group pays $365$ thousand đồng, so we have the equation $45x+70y=365$.

Hence we have the simultaneous equations
$$\begin{cases} x+y=7\\ 45x+70y=365. \end{cases}$$

We test each pair:

- For $(5, 2)$: $5+2=7$ and $45\cdot5+70\cdot2=225+140=365$. This pair satisfies both equations, so it is a solution of the system.
- For $(4, 3)$: $4+3=7$ but $45\cdot4+70\cdot3=180+210=390\neq365$. This pair does not satisfy the second equation, so it is not a solution of the system.

So the pair $(5, 2)$ is the solution of the system: the group has $5$ students and $2$ adults.

**Answer.** $(5, 2)$: the group has $5$ students and $2$ adults.
:::

:::exercise Review
Write the equation $3x+y=5$ in the form $y=ax+b$. What is the gradient of the line of solutions, and where does it cross the $y$-axis?

::hint
**What you need:** the line $y=ax+b$ has gradient $a$ and crosses the $y$-axis at $(0, b)$ (Grade 8).

**Steps:**
1. Move $3x$ to the right-hand side.
2. Read off $a$ and $b$.

::solution
We have $3x+y=5$. Moving $3x$ to the right-hand side, we get
$$y=-3x+5.$$

This is the linear function $y=ax+b$ with $a=-3$ and $b=5$.

Hence the line representing the solution set has gradient $a=-3$. Taking $x=0$ gives $y=5$, so the line meets the $y$-axis at the point $(0, 5)$.

So the equation can be written as $y=-3x+5$; the line representing the solution set has gradient $-3$ and meets the $y$-axis at the point $(0, 5)$.

**Answer.** Gradient $-3$; it meets the $y$-axis at $(0, 5)$.
:::

:::exercise
Consider the equation $x-2y=4$.

a) Find the solution with $x=0$ and the solution with $y=0$.

b) Draw the line showing the solution set of the equation.

c) Of the two solutions $(6, 1)$ and $(2, -1)$ of the equation, which one is also a solution of $2x+y=3$?

::hint
**What you need:** two solutions give two points of the line; a common solution of two equations solves the simultaneous equations.

**Steps:**
1. Put $x=0$, then $y=0$.
2. Draw the line through the two points you found.
3. Substitute each pair into $2x+y$.

::solution
a) Substituting $x=0$ into the equation $x-2y=4$, we get $-2y=4$, which gives $y=-2$. We have the solution $(0, -2)$.

Substituting $y=0$ into the equation, we get $x=4$. We have the solution $(4, 0)$.

So the two solutions are $(0, -2)$ and $(4, 0)$.

b) The solution set of the equation $x-2y=4$ is represented by a line. By part a), this line passes through the two points $(0, -2)$ and $(4, 0)$.

We mark these two points on the coordinate plane and draw the line through them. This line is the graph of the function $y=\dfrac12x-2$.

c) We substitute each solution into the equation $2x+y=3$:

- For $(6, 1)$: $2\cdot6+1=13\neq3$, so $(6, 1)$ is not a solution of the equation $2x+y=3$.
- For $(2, -1)$: $2\cdot2+(-1)=3$, so $(2, -1)$ is a solution of the equation $2x+y=3$.

So the solution $(2, -1)$ is also a solution of the equation $2x+y=3$.

**Answer.** a) $(0, -2)$, $(4, 0)$; b) the line through those two points; c) $(2, -1)$.
:::

:::exercise Challenge
A shop sells stickers at $3$ thousand đồng a sheet and at $5$ thousand đồng a sheet. Hùng wants at least one sheet of each kind and wants to spend exactly $40$ thousand đồng. Find all the ways he can do it.

::hint
**What you need:** a way of buying is a solution $(x, y)$ of $3x+5y=40$ with $x$, $y$ positive whole numbers.

**Steps:**
1. Write $5y=40-3x$; since $40$ and $5y$ are multiples of $5$, so is $3x$.
2. So $x$ is a multiple of $5$; try $x=5, 10, 15$.

::solution
Let $x$ be the number of stickers at $3$ thousand đồng and $y$ the number at $5$ thousand đồng ($x$, $y$ are positive integers).

Hùng spends exactly $40$ thousand đồng, so we have the equation
$$3x+5y=40.$$

It follows that $3x=40-5y=5(8-y)$. The right-hand side is divisible by $5$, so $3x$ is divisible by $5$, and hence $x$ is divisible by $5$.

Also, since $y\ge1$ we have $3x\le35$, so $x<12$. Hence $x=5$ or $x=10$.

- For $x=5$: $5y=40-15=25$, which gives $y=5$.
- For $x=10$: $5y=40-30=10$, which gives $y=2$.

So there are two ways to buy: $5$ stickers at $3$ thousand đồng and $5$ at $5$ thousand đồng; or $10$ stickers at $3$ thousand đồng and $2$ at $5$ thousand đồng.

**Answer.** Two ways: $5$ stickers at $3$ thousand and $5$ at $5$ thousand, or $10$ stickers at $3$ thousand and $2$ at $5$ thousand.
:::

## Mini test

:::quiz
::mc
Which of these is a linear equation in two unknowns?
A. $x^2-y=1$.
B. $0x+0y=2$.
C. $2x+0y=6$.
D. $xy=3$.
::key C
The coefficient of $x$ is not $0$. B has both coefficients equal to $0$; A and D contain terms of degree two.

::mc
Which pair is a solution of the equation $x-3y=2$?
A. $(5, 1)$.
B. $(1, 5)$.
C. $(2, 1)$.
D. $(-1, 1)$.
::key A
$5-3\cdot1=2$. Option B swaps $x$ and $y$; D gives $-1-3=-4$ (a sign slip would give $-1+3=2$).

::mc
The line showing the solution set of the equation $0x+2y=-4$ is
A. the line $x=-2$.
B. the line $y=-2$.
C. the line $y=2x-4$.
D. the line $y=-4$.
::key B
$2y=-4\iff y=-2$. Option A mixes up $x$ and $y$; D forgets to divide by $2$.

::mc
Which pair is a solution of the simultaneous equations $\begin{cases} x+y=5\\ 2x-y=1 \end{cases}$?
A. $(1, 1)$.
B. $(3, 2)$.
C. $(1, 4)$.
D. $(2, 3)$.
::key D
$2+3=5$ and $4-3=1$. Options B and C satisfy only the first equation, and A only the second.

::tf
Consider the equation $2x+y=7$.
a) $(3, 1)$ is a solution of the equation.
b) The equation has exactly one solution.
c) The line showing the solution set passes through the point $(0, 7)$.
d) $(3, 1)$ is also a solution of the simultaneous equations $\begin{cases} 2x+y=7\\ x-y=1 \end{cases}$.
::key T F T F
a) True: $6+1=7$. b) False: a linear equation in two unknowns has infinitely many solutions. c) True: $0+7=7$. d) False: $3-1=2\neq1$.

::sa
Consider the equation $3x-2y=12$. Find $y$ so that $(2, y)$ is a solution.
::key -3
$6-2y=12\iff -2y=6\iff y=-3$.

::sa
How many solutions $(x, y)$ of the equation $x+2y=9$ have both $x$ and $y$ positive whole numbers?
::key 4
$x=9-2y>0$, so $y\in\{1, 2, 3, 4\}$, giving the solutions $(7, 1)$, $(5, 2)$, $(3, 3)$, $(1, 4)$.
:::
