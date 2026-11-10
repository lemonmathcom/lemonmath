---
title: Solving simultaneous linear equations
description: Solve simultaneous linear equations by substitution and by elimination, and recognise when there is no solution or infinitely many.
minutes: 20
---

:::goals
- Solve simultaneous linear equations by the substitution method.
- Solve them by the elimination method, including when you first multiply both sides by a number.
- Recognise equations with no solution or infinitely many solutions, and check answers on a calculator.
:::

At the school canteen, Mai buys $2$ cups of milk tea and $1$ cake for $65$ thousand đồng. Tú buys $1$ cup of milk tea and $1$ cake for $40$ thousand đồng. How much is a cup of milk tea, and how much is a cake?

Let the price of milk tea be $x$ and the price of a cake be $y$ (thousand đồng). Then $2x+y=65$ and $x+y=40$. In the last lesson we could only **check** a solution; in this lesson we learn how to **find** it.

## The idea: get rid of one unknown

### Explore: comparing the two bills

The two bills differ by exactly $1$ cup of milk tea, and by $65-40=25$ thousand đồng. So a cup of milk tea costs $25$ thousand đồng, and a cake costs $40-25=15$ thousand đồng.

We removed the unknown $y$ by subtracting the equations, which left an equation in one unknown. Every method for simultaneous equations follows this idea: **transform the equations until one of them has only one unknown**. There are two ways to do it: the substitution method and the elimination method.

## The substitution method

:::definition The substitution method
1. From one equation, write one unknown in terms of the other (for example $x$ in terms of $y$).
2. Substitute this expression into the other equation to get an equation in one unknown. Solve it.
3. Put the value found into the expression from step 1 to find the other unknown, then state the solution.
:::

:::example Solving by substitution
Solve $\begin{cases} x-2y=1\\ 3x+y=10 \end{cases}$

**Solution.** In the first equation $x$ has coefficient $1$, so we make $x$ the subject there and substitute into the second equation:

$$\begin{aligned} x&=1+2y;\\ 3(1+2y)+y&=10\iff 3+7y=10\iff y=1;\\ x&=1+2\cdot1=3. \end{aligned}$$

So the equations have the unique solution $(x, y)=(3, 1)$.
:::

:::graph Two lines meeting at $(3, 1)$
alt: The line x minus 2y equals 1 and the line 3x plus y equals 10 crossing at the point (3, 1)
x: -1..6
y: -2..5
plot: (x - 1)/2
plot: 10 - 3x
point: (3, 1) "(3, 1)" right
:::

Not every pair of equations has exactly one solution. When we substitute, both unknowns may disappear.

:::example No solution and infinitely many solutions
Solve: a) $\begin{cases} x+y=2\\ 2x+2y=5 \end{cases}$ b) $\begin{cases} x-y=1\\ 3x-3y=3 \end{cases}$

**Solution.** Make $y$ the subject of the first equation and substitute into the second:

$$\begin{aligned} \text{a) }& y=2-x:\quad 2x+2(2-x)=5\iff 0x=1;\\ \text{b) }& y=x-1:\quad 3x-3(x-1)=3\iff 0x=0. \end{aligned}$$

So a) has no solution, because no $x$ gives $0x=1$. And b) has infinitely many solutions, because every $x$ satisfies $0x=0$; the solutions are $(x, x-1)$ for any $x$.
:::

Geometrically: in a) the lines $y=2-x$ and $y=2.5-x$ are parallel; in b) both equations describe the same line.

## The elimination method

When the coefficients of the same unknown in the two equations are **equal** or **opposite**, we subtract or add the equations so that this unknown disappears.

:::definition The elimination method
1. Multiply both sides of each equation by a suitable number (if needed) so that the coefficients of one unknown are equal or opposite.
2. Add the equations (if the coefficients are opposite) or subtract them (if they are equal) to get an equation in one unknown. Solve it.
3. Substitute into one of the equations to find the other unknown, then state the solution.
:::

:::example Opposite coefficients
Solve $\begin{cases} 3x+2y=12\\ 5x-2y=4 \end{cases}$

**Solution.** The coefficients of $y$ are $2$ and $-2$, which are opposite, so we add the equations:

$$\begin{aligned} 8x&=16\iff x=2;\\ 3\cdot2+2y&=12\iff 2y=6\iff y=3. \end{aligned}$$

So the solution is $(2, 3)$.
:::

If the coefficients are not yet equal or opposite, we multiply first. Remember to multiply **both sides**, including the right-hand side.

:::example Multiply, then add
Solve $\begin{cases} 2x+3y=8\\ 3x-2y=-1 \end{cases}$

**Solution.** Multiply the first equation by $2$ and the second by $3$ so that the coefficients of $y$ are $6$ and $-6$, then add:

$$\begin{cases} 4x+6y=16\\ 9x-6y=-3 \end{cases}\Rightarrow 13x=13\iff x=1;\qquad 2\cdot1+3y=8\iff y=2.$$

So the solution is $(1, 2)$.

**Check.** $3\cdot1-2\cdot2=-1$, which fits the second equation.
:::

Now we solve the canteen problem with the method we have just learnt.

:::example Milk tea and cakes
Solve $\begin{cases} 2x+y=65\\ x+y=40 \end{cases}$ where $x$ and $y$ are the prices of milk tea and of a cake (thousand đồng).

**Solution.** The coefficients of $y$ are equal, so we subtract the second equation from the first:

$$x=25;\qquad 25+y=40\iff y=15.$$

So a cup of milk tea costs $25$ thousand đồng and a cake costs $15$ thousand đồng.
:::

:::tip Checking on a calculator
Many scientific calculators have a mode for solving two simultaneous linear equations: choose that mode, enter $a$, $b$, $c$ of each equation $ax+by=c$ in turn, and the calculator gives $x$ and $y$. Use it to **check**, but still write out the solution by hand.
:::

:::warning Common mistakes
- **Forgetting to multiply the right-hand side.** Wrong: multiplying $2x+3y=8$ by $2$ gives $4x+6y=8$. Why it is wrong: both sides must be multiplied. Right: $4x+6y=16$.
- **Sign errors when subtracting.** Wrong: $(5x-2y)-(3x+2y)=2x$. Why it is wrong: $-2y-2y=-4y$. Right: $2x-4y$; when the coefficients are opposite you should **add**.
- **The wrong conclusion from $0x=1$.** Wrong: "$0x=1$, so $x=0$". Why it is wrong: $0\cdot0=0\neq1$. Right: $0x=1$ has no solution, so the simultaneous equations have no solution.
:::

## Key terms

:::terms
- substitution method | phương pháp thế
- elimination method | phương pháp cộng đại số
- eliminate an unknown | khử một ẩn
- unique solution | nghiệm duy nhất
- equations with no solution (inconsistent) | hệ vô nghiệm
- equations with infinitely many solutions | hệ có vô số nghiệm
- opposite coefficients | hệ số đối nhau
- calculator | máy tính cầm tay
:::

## Summary

- The common idea: transform until you have an equation in one unknown.
- Substitution: write one unknown in terms of the other and substitute into the other equation.
- Elimination: make the coefficients of one unknown equal (then subtract) or opposite (then add); multiply both sides when needed.
- If you reach $0x=c$ with $c\neq0$: no solution. If you reach $0x=0$: infinitely many solutions.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Solve $\begin{cases} x=2y\\ x+y=9 \end{cases}$ by substitution.

::hint
**What you need:** the substitution method.

**Steps:**
1. Substitute $x=2y$ into the second equation.
2. Find $y$, then $x$.

::solution
$2y+y=9\iff y=3$, so $x=6$.

**Answer.** $(6, 3)$.
:::

:::exercise
Solve $\begin{cases} 2x-y=3\\ x+2y=4 \end{cases}$ by substitution.

::hint
**What you need:** it is easiest to make an unknown with coefficient $1$ or $-1$ the subject.

**Steps:**
1. From the first equation: $y=2x-3$.
2. Substitute into the second equation and solve.

::solution
$x+2(2x-3)=4\iff 5x=10\iff x=2$, so $y=2\cdot2-3=1$.

**Answer.** $(2, 1)$.
:::

:::exercise
Solve $\begin{cases} x+y=7\\ x-y=1 \end{cases}$ by elimination.

::hint
**What you need:** the coefficients of $y$ are opposite, so add the equations.

**Steps:**
1. Add to find $x$.
2. Substitute into $x+y=7$ to find $y$.

::solution
$2x=8\iff x=4$; $4+y=7\iff y=3$.

**Answer.** $(4, 3)$.
:::

:::exercise
Solve $\begin{cases} 3x+4y=5\\ 2x-3y=-8 \end{cases}$

::hint
**What you need:** multiply both sides so that the coefficients of one unknown are equal.

**Steps:**
1. Multiply the first equation by $2$ and the second by $3$.
2. Subtract to remove $x$.

::solution
$6x+8y=10$ and $6x-9y=-24$. Subtracting: $17y=34\iff y=2$. Then $3x+8=5\iff x=-1$.

**Answer.** $(-1, 2)$.
:::

:::exercise
How many solutions does each pair of equations have? a) $\begin{cases} 2x-4y=6\\ x-2y=3 \end{cases}$ b) $\begin{cases} x-2y=1\\ -2x+4y=5 \end{cases}$

::hint
**What you need:** after substituting, $0x=0$ means infinitely many solutions and $0x=c$ ($c\neq0$) means no solution.

**Steps:**
1. Write $x=2y+\dots$ from the equation in which $x$ has coefficient $1$.
2. Substitute into the other equation.

::solution
a) $x=3+2y$: $2(3+2y)-4y=6\iff 0y=0$. b) $x=1+2y$: $-2(1+2y)+4y=5\iff 0y=7$.

**Answer.** a) Infinitely many; b) none.
:::

:::exercise
Let $x$ and $y$ (thousand đồng) be the price of an exercise book and of a pen. $3$ books and $2$ pens cost $34$ thousand đồng; $2$ books and $3$ pens cost $31$ thousand đồng. Solve $\begin{cases} 3x+2y=34\\ 2x+3y=31 \end{cases}$ to find each price.

::hint
**What you need:** the elimination method (or a trick: add the equations, then subtract them).

**Steps:**
1. Add: $5x+5y=65$, so $x+y=13$.
2. Subtract: $x-y=3$.
3. Solve the new pair.

::solution
$x+y=13$ and $x-y=3$, so $2x=16$, $x=8$, $y=5$.

**Answer.** A book costs $8$ thousand đồng and a pen $5$ thousand đồng.
:::

:::exercise Review
Find $a$ and $b$ so that the graph of $y=ax+b$ passes through the points $A(1, 3)$ and $B(2, 5)$.

::hint
**What you need:** the point $(x_0, y_0)$ is on the graph when $y_0=ax_0+b$ (Grade 8). Each point gives one equation in the unknowns $a$, $b$.

**Steps:**
1. Substitute the coordinates of $A$ and $B$ to get two equations.
2. Subtract them to find $a$.

::solution
$a+b=3$ and $2a+b=5$. Subtracting: $a=2$, so $b=1$.

**Answer.** $a=2$, $b=1$, that is $y=2x+1$.
:::

:::exercise
Consider $\begin{cases} x+2y=5\\ 3x-y=1 \end{cases}$

a) Solve the equations by substitution.

b) Solve them by elimination and compare the results.

c) Show that the line $y=x+1$ passes through the point where the lines $x+2y=5$ and $3x-y=1$ meet.

::hint
**What you need:** the solution of the simultaneous equations gives the coordinates of the point where the two lines meet.

**Steps:**
1. a) Write $x=5-2y$.
2. b) Multiply the second equation by $2$ and add.
3. c) Substitute the coordinates of that point into $y=x+1$.

::solution
a) $3(5-2y)-y=1\iff 15-7y=1\iff y=2$, $x=1$.

b) $x+2y=5$ and $6x-2y=2$; adding: $7x=7$, $x=1$, $y=2$. Both methods give the same result.

c) The lines meet at $(1, 2)$, and $2=1+1$.

**Answer.** a), b) $(1, 2)$; c) $(1, 2)$ lies on $y=x+1$.
:::

:::exercise Challenge
Solve $\begin{cases} 2(x+y)+3(x-y)=13\\ 3(x+y)-2(x-y)=13 \end{cases}$

::hint
**What you need:** you can put $u=x+y$, $v=x-y$ to get simpler equations, or expand the brackets and simplify.

**Steps:**
1. Solve $2u+3v=13$, $3u-2v=13$.
2. From $x+y=u$, $x-y=v$ find $x$ and $y$.

::solution
Multiply the first equation by $2$ and the second by $3$, then add: $13u=65$, $u=5$; then $3v=3$, $v=1$. From $x+y=5$, $x-y=1$: $x=3$, $y=2$. (Expanding gives $5x-y=13$, $x+5y=13$, with the same solution.)

**Answer.** $(3, 2)$.
:::

## Mini test

:::quiz
::mc
The solution of $\begin{cases} x+y=5\\ x-y=3 \end{cases}$ is
A. $(4, 1)$.
B. $(1, 4)$.
C. $(3, 2)$.
D. $(8, -3)$.
::key A
Adding: $2x=8$, $x=4$, $y=1$. B swaps the order; C fits only the first equation; D forgets to divide $2x=8$ by $2$ (giving $x=8$, then $y=5-8=-3$).

::mc
To eliminate $y$ from $\begin{cases} 2x+3y=7\\ 5x-2y=8 \end{cases}$, you should
A. multiply the first equation by $2$ and the second by $3$, then subtract.
B. multiply the first equation by $3$ and the second by $2$, then add.
C. multiply the first equation by $2$ and the second by $3$, then add.
D. multiply the first equation by $5$ and the second by $2$, then subtract.
::key C
This gives $6y$ and $-6y$, which are opposite, so add: $19x=38$. A subtracts, so $y$ remains; D eliminates $x$, not $y$.

::mc
The simultaneous equations $\begin{cases} x-2y=3\\ -2x+4y=1 \end{cases}$
A. have exactly one solution.
B. have no solution.
C. have infinitely many solutions.
D. have the solution $(3, 0)$.
::key B
Substitute $x=3+2y$: $-6-4y+4y=1\iff 0y=7$, no solution. $(3, 0)$ fits only the first equation.

::mc
$2$ bánh mì (Vietnamese baguettes) and $1$ carton of milk cost $31$ thousand đồng; $1$ bánh mì and $2$ cartons of milk cost $26$ thousand đồng. The price of one bánh mì is
A. $5$ thousand đồng.
B. $7$ thousand đồng.
C. $19$ thousand đồng.
D. $12$ thousand đồng.
::key D
Adding: $3(x+y)=57$, $x+y=19$; subtracting: $x-y=5$; so $x=12$, $y=7$. B is the price of milk, C the sum, A the difference.

::tf
Consider $\begin{cases} 3x+y=7\\ x-y=1 \end{cases}$
a) Adding the two equations gives $4x=8$.
b) The solution is $(2, 1)$.
c) From the second equation, $y=x+1$.
d) The solution satisfies $x+y=3$.
::key T T F T
a) True. b) True: $6+1=7$, $2-1=1$. c) False: $y=x-1$. d) True: $2+1=3$.

::sa
Solve $\begin{cases} 2x+y=1\\ 3x-y=9 \end{cases}$ and find $x+y$.
::key -1
Adding: $5x=10$, $x=2$, $y=1-4=-3$, so $x+y=-1$.

::sa
The graph of $y=ax+b$ passes through $(1, 4)$ and $(3, 0)$. Find $b$.
::key 6
$a+b=4$, $3a+b=0$; subtracting: $2a=-4$, $a=-2$, $b=6$.
:::
