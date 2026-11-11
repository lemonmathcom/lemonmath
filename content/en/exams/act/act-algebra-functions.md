---
title: Algebra and functions
description: ACT Math algebra and functions: linear equations and inequalities, systems, quadratics, absolute value, function notation and composition, exponential models.
minutes: 45
---

:::goals
- Write and solve linear equations and inequalities from word problems.
- Solve systems of two linear equations, and recognize systems with no solution or infinitely many.
- Factor quadratics, find their roots and vertex.
- Solve absolute value equations and inequalities.
- Evaluate and compose functions, and work with exponential growth and logarithms.
:::

Algebra and functions make up a large part of the ACT Math test, and they also appear inside geometry, statistics and modeling questions. The good news for students from the Vietnamese curriculum is that the algebra itself is familiar. The skills to sharpen are translating English sentences into equations quickly, and reading what a question really asks for: often not $x$, but an expression such as $x+y$ or $2x-1$.

## Linear equations and inequalities

Translate a word problem by naming the unknown, writing one equation or inequality, and solving it. When you multiply or divide an inequality by a negative number, reverse the inequality sign.

:::example A budget inequality
A gym charges a $30$-dollar membership fee plus $12$ dollars per class. Lan has $150$ dollars. What is the greatest number of classes she can take?
A. $12$
B. $10$
C. $9$
D. $15$

**Solution.** Let $n$ be the number of classes. The total cost is $30+12n$ dollars, and it must not exceed $150$:
$$30+12n\le150.$$

Subtracting $30$ gives $12n\le120$, so $n\le10$.

So Lan can take at most $10$ classes, answer **B**. Option A forgets the membership fee.
:::

## Systems of linear equations

Solve by substitution or elimination. A system has **no solution** when the lines are parallel (same slope, different intercepts) and **infinitely many** when the equations describe the same line.

:::example Asking for x + y
If $2x+3y=12$ and $x-y=1$, what is the value of $x+y$?
A. $5$
B. $1$
C. $6$
D. $4$

**Solution.** From the second equation, $x=y+1$. Substituting into the first:
$$2(y+1)+3y=12,$$
so $5y=10$ and $y=2$.

Then $x=y+1=3$, and $x+y=3+2=5$.

So $x+y=5$, answer **A**. Read the question to the end: it asks for $x+y$, not for $x$.
:::

## Quadratics

Factor when the numbers are simple, use the quadratic formula otherwise. For $y=ax^2+bx+c$, the vertex is at $x=-\dfrac{b}{2a}$; the sum of the roots is $-\dfrac ba$ and the product is $\dfrac ca$.

:::example Roots of a quadratic
What is the sum of the solutions of $x^2-5x-14=0$?
A. $-5$
B. $9$
C. $-14$
D. $5$

**Solution.** We look for two numbers with product $-14$ and sum $-5$: they are $-7$ and $2$. So
$$x^2-5x-14=(x-7)(x+2)=0.$$

The solutions are $x=7$ and $x=-2$, and their sum is $7+(-2)=5$.

So the sum of the solutions is $5$, answer **D**. This agrees with $-\dfrac ba=5$.
:::

## Absolute value

$|A|<k$ (with $k>0$) means $-k<A<k$; $|A|>k$ means $A<-k$ or $A>k$; $|A|=k$ means $A=k$ or $A=-k$.

:::example Integers satisfying an inequality
How many integers $x$ satisfy $|2x-3|<7$?
A. $5$
B. $7$
C. $6$
D. $4$

**Solution.** The inequality means $-7<2x-3<7$.

Adding $3$ to every part gives $-4<2x<10$, and dividing by $2$ gives $-2<x<5$.

The integers in this interval are $-1,0,1,2,3,4$, which is $6$ integers.

So $6$ integers satisfy the inequality, answer **C**. The endpoints $-2$ and $5$ are not included because the inequality is strict.
:::

## Functions: notation, composition and exponential models

$f(g(x))$ means: apply $g$ first, then $f$. An exponential model has the form $P(t)=P_0\cdot b^{t/k}$; for example, a quantity that doubles every $k$ units of time is $P_0\cdot2^{t/k}$. A logarithm answers the question "which power?": $\log_bx=y$ means $b^y=x$.

:::example Evaluating a composition
Let $f(x)=x^2-1$ and $g(x)=3x+2$. What is $f\big(g(-1)\big)$?
A. $0$
B. $8$
C. $-1$
D. $2$

**Solution.** First we compute the inner function: $g(-1)=3(-1)+2=-1$.

Then we apply $f$: $f(-1)=(-1)^2-1=0$.

So $f\big(g(-1)\big)=0$, answer **A**.
:::

:::example Doubling bacteria
A culture starts with $500$ bacteria, and the number doubles every $3$ hours. How many bacteria are there after $12$ hours?
A. $4000$
B. $2000$
C. $8000$
D. $6000$

**Solution.** The number after $t$ hours is $P(t)=500\cdot2^{t/3}$.

After $12$ hours, $\dfrac{12}{3}=4$ doublings have happened, so
$$P(12)=500\cdot2^4=500\cdot16=8000.$$

So there are $8000$ bacteria after $12$ hours, answer **C**. Option D adds $500$ for each hour instead of doubling.
:::

:::warning Common traps
- **Answering the wrong quantity:** the question asks for $x+y$, $2x$ or "how many more"; underline it.
- **Reversing the inequality** when multiplying by a negative number, or forgetting to.
- **Strict and non-strict inequalities:** $<$ excludes the endpoints.
- **Composition order:** $f(g(x))$ applies $g$ first.
- **Linear instead of exponential:** "doubles every $3$ hours" multiplies; it does not add.
:::

:::terms
- linear equation, inequality | phương trình bậc nhất, bất phương trình
- system of equations | hệ phương trình
- no solution, infinitely many solutions | vô nghiệm, vô số nghiệm
- quadratic, root, vertex | hàm bậc hai, nghiệm, đỉnh
- absolute value | giá trị tuyệt đối
- function notation, composition | kí hiệu hàm số, hàm hợp
- exponential growth | tăng trưởng theo hàm mũ
- logarithm | logarit
:::

## Similar exercises

:::exercise
Solve the inequality $5-2x>11$.

::hint
**What you need:** when you divide by a negative number, reverse the sign.

::solution
Subtracting $5$ from both sides gives $-2x>6$.

Dividing both sides by $-2$, which is negative, reverses the inequality: $x<-3$.

Check with $x=-4$: $5-2(-4)=13>11$, which is true.

So the solution of the inequality is $x<-3$.

**Answer.** $x<-3$.
:::

:::exercise
Solve the system $y=2x-1$ and $3x+y=14$.

::hint
**What you need:** substitute the expression for $y$ into the second equation.

::solution
Substituting $y=2x-1$ into $3x+y=14$ gives $3x+2x-1=14$.

So $5x=15$, and $x=3$.

Then $y=2(3)-1=5$.

So the solution of the system is $x=3$, $y=5$.

**Answer.** $x=3$, $y=5$.
:::

:::exercise
Find the vertex of the parabola $y=x^2-6x+5$.

::hint
**What you need:** the vertex is at $x=-\dfrac{b}{2a}$.

::solution
Here $a=1$ and $b=-6$, so the vertex is at $x=-\dfrac{-6}{2}=3$.

Substituting $x=3$: $y=9-18+5=-4$.

Since $a=1>0$, the parabola opens upward and the vertex is its lowest point.

So the vertex of the parabola is $(3,-4)$.

**Answer.** $(3,-4)$.
:::

:::exercise
Let $f(x)=2x-5$. Find the value of $x$ for which $f(x)=7$.

::hint
**What you need:** solve $2x-5=7$.

::solution
We need $2x-5=7$.

Adding $5$ to both sides gives $2x=12$, so $x=6$.

Check: $f(6)=12-5=7$.

So $f(x)=7$ when $x=6$.

**Answer.** $x=6$.
:::

:::exercise
Solve $\log_2x=6$.

::hint
**What you need:** $\log_bx=y$ means $b^y=x$.

::solution
By the definition of the logarithm, $\log_2x=6$ means $x=2^6$.

Calculating, $2^6=64$. This value is positive, so it satisfies the condition $x>0$ for the logarithm.

So the solution of the equation is $x=64$.

**Answer.** $x=64$.
:::

## Application exercises

:::exercise
A taxi charges $3$ dollars plus $1.50$ dollars per kilometer. A ride costs $21$ dollars. How long was the ride?

::hint
**What you need:** write the cost as $3+1.5d$, where $d$ is the distance in kilometers.

::solution
Let $d$ be the length of the ride in kilometers. The cost is $3+1.5d$ dollars.

So $3+1.5d=21$, which gives $1.5d=18$ and $d=12$.

Check: $3+1.5\times12=3+18=21$ dollars, as given.

So the ride was $12$ km long.

**Answer.** $12$ km.
:::

:::exercise
A ball is thrown upward, and its height in meters after $t$ seconds is $h=-5t^2+20t$. Find the maximum height and the time at which it is reached.

::hint
**What you need:** the vertex of a parabola that opens downward is its highest point.

::solution
The graph of $h$ is a parabola that opens downward, so the maximum is at the vertex, where
$$t=-\frac{20}{2(-5)}=2.$$

At $t=2$, $h=-5(4)+20(2)=-20+40=20$.

So the ball reaches a maximum height of $20$ m after $2$ seconds.

**Answer.** $20$ m at $t=2$ s.
:::

:::exercise
A motorbike worth $20{,}000$ dollars loses $20\%$ of its value each year. What is it worth after $3$ years?

::hint
**What you need:** each year the value is multiplied by $0.8$.

::solution
Each year the value is multiplied by $1-0.2=0.8$, so after $3$ years it is
$$20{,}000\times0.8^3=20{,}000\times0.512=10{,}240.$$

So after $3$ years the motorbike is worth $10{,}240$ dollars.

**Answer.** $10{,}240$ dollars.
:::

:::exercise Challenge
For what value of $k$ does the system $kx+2y=4$ and $3x+6y=12$ have infinitely many solutions?

::hint
**What you need:** the two equations must describe the same line; divide the second equation by $3$.

::solution
Dividing the second equation by $3$ gives $x+2y=4$.

The system has infinitely many solutions exactly when the first equation is the same line, $kx+2y=4$ identical to $x+2y=4$. Comparing coefficients, $k=1$.

For any other value of $k$, the lines have different slopes and meet at exactly one point.

So the system has infinitely many solutions when $k=1$.

**Answer.** $k=1$.
:::

:::quiz
::mc
What is the slope of the line through $(1,2)$ and $(4,11)$?
A. $\dfrac13$
B. $3$
C. $9$
D. $-3$
::key B
$\dfrac{11-2}{4-1}=\dfrac93=3$.

::mc
If $f(x)=3x^2-x$, what is $f(-2)$?
A. $10$
B. $-14$
C. $14$
D. $38$
::key C
$3(4)-(-2)=12+2=14$.

::mc
What is the solution of $3(x-2)=2x+5$?
A. $11$
B. $3$
C. $7$
D. $-1$
::key A
$3x-6=2x+5$, so $x=11$.

::mc
Which expression is equivalent to $(x+3)(x-3)$?
A. $x^2+9$
B. $x^2-6x-9$
C. $x^2+6x-9$
D. $x^2-9$
::key D
A difference of two squares.

::tf
Let $f(x)=x^2-4x+3$. Decide whether each statement is true or false.
a) The roots of $f$ are $1$ and $3$.
b) The vertex of the graph is $(2,-1)$.
c) The $y$-intercept is $3$.
d) The minimum value of $f$ is $-2$.
::key T T T F
$f(x)=(x-1)(x-3)$; the vertex is at $x=2$ with $f(2)=-1$, so the minimum value is $-1$.

::sa
Solve $2^{x+1}=16$.
::key 3
$16=2^4$, so $x+1=4$.

::sa
Find the larger solution of $|x-4|=6$.
::key 10
$x-4=6$ or $x-4=-6$, so $x=10$ or $x=-2$.
:::
