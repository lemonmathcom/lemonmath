---
title: The idea of a function and its graph
description: Understand what a function is, how to give one by a table or formula, evaluate it, find its domain and draw its graph on the coordinate plane.
minutes: 25
---

:::goals
- Understand the idea of a function and recognise whether one quantity is a function of another.
- Evaluate a function and find a simple domain.
- Find the coordinates of points on the coordinate plane $Oxy$.
- Draw and read the graph of a function.
:::

A cyclist rides at a constant $12$ km/h. After $t$ hours the cyclist has gone $s=12t$ (km). For each time $t$ we can work out exactly one distance $s$. So the distance depends on the time by a clear rule, and we want a name for such a rule.

But not every relationship between two quantities is like this. For example, knowing that you spent $50\,000$ dong today does not tell you how many items you bought. This lesson helps you tell the two situations apart and draw them on the coordinate plane.

## Let's explore

The table shows the temperature $T$ (°C) measured at times $t$ (hours) during a day (an imagined case):

| $t$ (hours) | $6$ | $9$ | $12$ | $15$ | $18$ |
|---|---|---|---|---|---|
| $T$ (°C) | $24$ | $27$ | $31$ | $33$ | $29$ |

Each value of $t$ has exactly one value of $T$. Compare this with the relation between $x$ and $y$ given by $y^2=x$: for $x=4$ we have both $y=2$ and $y=-2$. One value of $x$ gives **two** values of $y$, so we cannot say that "$y$ is determined by $x$".

The difference between the two cases is this: in the temperature table each $t$ gives only one $T$; in the relation $y^2=x$ one $x$ gives two $y$. We use the idea of a function to describe the first case.

## The idea of a function

:::definition Function
If a quantity $y$ depends on a changing quantity $x$ in such a way that for **each** value of $x$ we can find **exactly one** corresponding value of $y$, then $y$ is called a **function** of $x$, and $x$ is called the **variable**.

We write $y=f(x)$. The value of the function $f$ at $x=a$ is written $f(a)$.
:::

**Going deeper.** A function does not require different values of $x$ to give different values of $y$. The table with $x:1,2,3$ and $y:5,5,6$ is still a function, because each $x$ has only one $y$. It fails to be a function only when one $x$ gives two or more values of $y$.

A function can be given by a **table**, by a **formula** (such as $y=2x+3$), by a **description in words** or by a **graph**. When it is given by a formula, the set of values of $x$ for which the expression makes sense is called the **domain** of the function.

:::example Recognising a function from a table
In each table, is $y$ a function of $x$?

a) Table 1:

| $x$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $y$ | $5$ | $5$ | $6$ | $7$ |

b) Table 2:

| $x$ | $1$ | $2$ | $2$ | $3$ |
|---|---|---|---|---|
| $y$ | $3$ | $4$ | $5$ | $6$ |

**Solution.** a) Each value of $x$ ($1$, $2$, $3$, $4$) has exactly one value of $y$. The values $x=1$ and $x=2$ both give $y=5$, but this does not break the definition. So $y$ is a function of $x$.

b) The value $x=2$ has two values $y=4$ and $y=5$. So $y$ is not a function of $x$.
:::

:::example Domain
Find the domain of each function:

a) $y=5x-1$.

b) $y=\dfrac{3}{x-2}$.

c) $y=\dfrac{x+1}{x^2-4}$.

**Solution.** a) The expression $5x-1$ makes sense for every real number $x$. The domain is $\mathbb R$.

b) A fraction makes sense when the denominator is not $0$, that is $x-2\neq0$, so $x\neq2$.

c) The denominator must not be $0$: $x^2-4\neq0$, that is $(x-2)(x+2)\neq0$, so $x\neq2$ and $x\neq-2$.

So a) $\mathbb R$; b) every $x\neq2$; c) every $x\neq\pm2$.
:::

:::example Evaluating a function
Let $f(x)=-2x+5$. Find $f(0)$, $f(3)$, $f(-2)$ and find $x$ such that $f(x)=7$.

**Solution.** We substitute the value of $x$ into the formula:
$$f(0)=-2\cdot0+5=5,\quad f(3)=-2\cdot3+5=-1,\quad f(-2)=-2\cdot(-2)+5=9.$$
For $f(x)=7$ we solve $-2x+5=7$, so $-2x=2$ and $x=-1$.

So $f(0)=5$, $f(3)=-1$, $f(-2)=9$ and $f(x)=7$ when $x=-1$.
:::

## The graph of a function

To draw a function we use the **coordinate plane $Oxy$**, made of a horizontal axis $Ox$ (the $x$-axis) and a vertical axis $Oy$ (the $y$-axis) meeting at the origin $O$. Each point $M$ has coordinates $(x_0, y_0)$: the **$x$-coordinate** $x_0$ (read along the $x$-axis) and the **$y$-coordinate** $y_0$ (read along the $y$-axis).

:::definition Graph of a function
The **graph of a function** $y=f(x)$ is the set of all points $M(x, f(x))$ on the coordinate plane, for $x$ in the domain.
:::

A point $M(a, b)$ lies on the graph of $y=f(x)$ exactly when $b=f(a)$. To draw a graph we make a table of values, mark the points and join them.

:::example Drawing a graph
Let $y=2x-1$. Make a table of values for $x=-1,0,1,2$, draw the graph and check whether the point $A(3, 5)$ lies on it.

**Solution.** We make the table of values:

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y=2x-1$ | $-3$ | $-1$ | $1$ | $3$ |

The points $(-1, -3)$, $(0, -1)$, $(1, 1)$, $(2, 3)$ lie on a straight line, which is the graph of the function.

For the point $A(3, 5)$: $2\cdot3-1=5$, exactly the $y$-coordinate of $A$.

So the graph is the straight line through these points, and $A(3, 5)$ lies on it.
:::

:::graph Graph of the function $y=2x-1$
alt: A straight line through the points (-1, -3), (0, -1), (1, 1), (2, 3), rising to the right
x: -3..4
y: -5..6
plot: 2x - 1
point: (-1, -3) "(-1, -3)" below
point: (0, -1) "(0, -1)" below-right
point: (1, 1) "(1, 1)" above-left
point: (2, 3) "(2, 3)" above-left
:::

We return to the cyclist at the start, using the four steps of solving a problem.

:::example The cyclist's distance
A cyclist rides at $12$ km/h, so the distance after $t$ hours is $s=12t$ (km). Show that $s$ is a function of $t$, find the distance after $2.5$ hours and find the time to ride $48$ km.

**Solution.**

*Understand.* The distance is given by the formula $s=12t$ with $t\geq0$; we need $s$ when $t=2.5$ and $t$ when $s=48$.

*Plan.* Each $t$ gives exactly one $s$, so $s$ is a function of $t$; substitute, and solve a linear equation for the last part.

*Solve.* Since each value $t\geq0$ gives exactly one value $s=12t$, $s$ is a function of $t$. When $t=2.5$: $s=12\cdot2.5=30$ (km). When $s=48$: $12t=48$, so $t=4$ (hours).

*Look back.* Check: $12\cdot4=48$. The graph is a ray starting at the origin (since $t\geq0$) rising steadily: doubling the time doubles the distance.

So after $2.5$ hours the cyclist has gone $30$ km, and $48$ km takes $4$ hours.
:::

:::graph Distance $s=12t$ against time $t$
alt: A ray starting at the origin and rising to the right through the points (2.5, 30) and (4, 48)
x: -1..6
y: -5..75
plot: 12x ; 0..6
point: (2.5, 30) "(2.5, 30)" below-right
point: (4, 48) "(4, 48)" below-right
:::

:::warning Mistakes to watch out for
- **Confusing a function with a one-to-one relation.** Wrong: "the table $x:1,2$ with $y:5,5$ is not a function because the two $y$ values are equal". Why it is wrong: the definition requires only that each $x$ has exactly one $y$. Right: it is still a function; a relation fails only when one $x$ gives two different $y$.
- **Evaluating at a point outside the domain.** Wrong: $f(2)=\dfrac{3}{2-2}=\dfrac30=0$ for $f(x)=\dfrac{3}{x-2}$. Why it is wrong: we cannot divide by $0$, so $f(2)$ is not defined. Right: check the domain before substituting.
- **Swapping the $x$- and $y$-coordinates.** Wrong: plotting the point $(3, 1)$ at the position $(1, 3)$. Why it is wrong: coordinates are written with the $x$-coordinate first and the $y$-coordinate second. Right: $(3, 1)$ is at $3$ along the $x$-axis and $1$ up.
:::

**Connections.** This lesson uses linear equations from [linear equations in one unknown](lesson:linear-equations-one-unknown) to find $x$ when $f(x)$ is known, and the coordinate plane from earlier years. It prepares the lesson on [the gradient of a straight line](lesson:gradient-of-a-line), where we study graphs of the form $y=ax+b$ like the line we have just drawn.

## Key terms

:::terms
- function | hàm số
- variable | biến số
- value of a function | giá trị của hàm số
- domain | tập xác định
- coordinate plane | mặt phẳng toạ độ
- $x$-axis, $y$-axis | trục hoành, trục tung
- $x$-coordinate, $y$-coordinate | hoành độ, tung độ
- origin | gốc toạ độ
- graph of a function | đồ thị của hàm số
:::

## Summary

- $y$ is a function of $x$ if each value of $x$ gives exactly one value of $y$; we write $y=f(x)$.
- A function can be given by a table, a formula, words or a graph; the domain consists of the values of $x$ for which the expression makes sense.
- The value $f(a)$ is found by substituting $x=a$ into the formula.
- The graph of $y=f(x)$ is the set of points $(x, f(x))$; a point $(a, b)$ lies on the graph when $b=f(a)$.
- Coordinates are written in the order ($x$-coordinate, $y$-coordinate).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
In each table, is $y$ a function of $x$?

a) $x:0,1,2,3$ and $y:1,3,5,7$.

b) $x:1,1,2$ and $y:2,3,4$.

::hint
**What you need:** each value of $x$ must have exactly one value of $y$.

**Steps:**
1. See whether any value of $x$ is repeated.
2. If so, compare the corresponding values of $y$.

::solution
a) All the values of $x$ are different, and each has one $y$: it is a function.

b) The value $x=1$ has two values $y=2$ and $y=3$: it is not a function.

**Answer.** a) a function. b) not a function.
:::

:::exercise
In each relation, is $y$ a function of $x$?

a) $y^2=x$.

b) $y=3-x$.

c) $y=\dfrac1x$.

::hint
**What you need:** for each $x$, count the values of $y$.

**Steps:**
1. Try a few specific values of $x$.
2. For c), notice the value of $x$ that makes the denominator $0$.

::solution
a) For $x=4$ we have $y=2$ or $y=-2$: one $x$ gives two $y$, so it is not a function.

b) Each $x$ gives exactly one $y=3-x$: it is a function.

c) Each $x\neq0$ gives exactly one $y=\dfrac1x$: it is a function with domain $x\neq0$.

**Answer.** a) no. b) yes. c) yes (for $x\neq0$).
:::

:::exercise
Let $f(x)=3x-4$. Find $f(0)$, $f(2)$, $f(-1)$ and find $x$ such that $f(x)=11$.

::hint
**What you need:** $f(a)$ is the value of the expression when $x=a$.

**Steps:**
1. Substitute $x=0$, $2$, $-1$ in turn.
2. Solve the equation $3x-4=11$.

::solution
We have $f(0)=-4$; $f(2)=6-4=2$; $f(-1)=-3-4=-7$. The equation $3x-4=11$ gives $3x=15$ and $x=5$.

So $f(0)=-4$, $f(2)=2$, $f(-1)=-7$ and $f(x)=11$ when $x=5$.

**Answer.** $-4$; $2$; $-7$; $x=5$.
:::

:::exercise
Find the domain of each function:

a) $y=\dfrac{2}{x+3}$.

b) $y=\dfrac{x-1}{2x-6}$.

c) $y=x^2+1$.

::hint
**What you need:** the denominator must not be $0$.

**Steps:**
1. Set the denominator equal to $0$ and solve to find the value to exclude.
2. In c) there is no denominator.

::solution
a) $x+3\neq0$, so $x\neq-3$.

b) $2x-6\neq0$, so $x\neq3$.

c) The expression makes sense for every $x$, so the domain is $\mathbb R$.

**Answer.** a) $x\neq-3$. b) $x\neq3$. c) $\mathbb R$.
:::

:::exercise
Which of the points $A(1, 2)$, $B(2, 2)$, $C(0, 3)$, $D(-1, 4)$ lie on the graph of $y=-x+3$?

::hint
**What you need:** a point $(a, b)$ lies on the graph when $b=f(a)$.

**Steps:**
1. Work out $-a+3$ for each point.
2. Compare with the $y$-coordinate.

::solution
For $A$: $-1+3=2$, correct. For $B$: $-2+3=1\neq2$, wrong. For $C$: $-0+3=3$, correct. For $D$: $-(-1)+3=4$, correct.

So $A$, $C$, $D$ lie on the graph.

**Answer.** $A$, $C$, $D$.
:::

:::exercise
Make a table of values of $y=x+1$ for $x=-2,-1,0,1,2$ and describe the shape of the graph.

::hint
**What you need:** the graph is the set of points $(x, y)$.

**Steps:**
1. Work out $y$ for each value of $x$.
2. Mark the points and observe them.

::solution
We get the table:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

The points $(-2, -1)$, $(-1, 0)$, $(0, 1)$, $(1, 2)$, $(2, 3)$ lie on a straight line rising to the right.

So the graph of $y=x+1$ is a straight line.

**Answer.** A straight line through the points in the table.
:::

:::exercise
Suppose a taxi company charges $y=14\,000x+12\,000$ (dong) for a journey of $x$ kilometres ($x\geq0$). Find the fare for $5$ km and for $10$ km. How many kilometres give a fare of $96\,000$ dong?

::hint
**What you need:** substitute the value of $x$ into the formula; solve an equation when $y$ is known.

**Steps:**
1. Work out $y$ when $x=5$ and $x=10$.
2. Solve $14\,000x+12\,000=96\,000$.

::solution
When $x=5$: $y=14\,000\cdot5+12\,000=82\,000$ (dong). When $x=10$: $y=140\,000+12\,000=152\,000$ (dong). When $y=96\,000$: $14\,000x=84\,000$, so $x=6$.

So the fares are $82\,000$ dong and $152\,000$ dong; a fare of $96\,000$ dong is for $6$ km.

**Answer.** $82\,000$ dong; $152\,000$ dong; $6$ km.
:::

:::exercise
In the temperature table of the exploration, $f(6)=24$, $f(9)=27$, $f(12)=31$, $f(15)=33$, $f(18)=29$ (temperature $T$ in °C at time $t$ in hours). Find $f(12)$, say at what time the highest temperature occurs, and say whether the function tells us the temperature at $10$ o'clock.

::hint
**What you need:** a function given by a table is defined only at the values in the table.

**Steps:**
1. Read $f(12)$ from the table.
2. Find the greatest value of $T$.

::solution
We have $f(12)=31$ (°C). The greatest temperature in the table is $33^\circ$C, at $15$ hours. The value $t=10$ is not in the table, so this function does not tell us the temperature at $10$ o'clock.

So $f(12)=31^\circ$C, the highest value is at $15$ hours, and the temperature at $10$ o'clock is unknown.

**Answer.** $31^\circ$C; $15$ hours; not defined.
:::

:::exercise
Let $f(x)=2x-5$. Find $x$ such that $f(x)=0$ and find $x$ such that $f(x)=x$. (Revise [linear equations](lesson:linear-equations-one-unknown).)

::hint
**What you need:** reduce to a linear equation in one unknown.

**Steps:**
1. Solve $2x-5=0$.
2. Solve $2x-5=x$.

::solution
For $f(x)=0$: $2x-5=0$, so $x=\dfrac52=2.5$. For $f(x)=x$: $2x-5=x$, so $x=5$.

Check: $f(2.5)=0$ and $f(5)=5$.

So $x=2.5$ when $f(x)=0$ and $x=5$ when $f(x)=x$.

**Answer.** $2.5$; $5$.
:::

:::exercise Challenge
Let $f(x)=ax+b$ with $f(1)=3$ and $f(2)=5$. Find $a$ and $b$, then find $f(10)$.

::hint
**What you need:** $f(1)=a+b$ and $f(2)=2a+b$.

**Steps:**
1. Write two equalities from the two given values.
2. Subtract them to find $a$, then find $b$.

::solution
We have $a+b=3$ and $2a+b=5$. Subtracting the two equalities gives $a=2$. From $a+b=3$ we get $b=1$. So $f(x)=2x+1$ and $f(10)=21$.

Check: $f(1)=3$ and $f(2)=5$.

So $a=2$, $b=1$ and $f(10)=21$.

**Answer.** $a=2$; $b=1$; $f(10)=21$.
:::

## Mini test

:::quiz
::mc
A quantity $y$ is a function of $x$ when
A. each value of $y$ gives exactly one value of $x$.
B. each value of $x$ gives exactly one value of $y$.
C. two different values of $x$ always give two different values of $y$.
D. $y$ is always greater than $x$.
::key B
This is the definition of a function. B and C are extra conditions (a function can still give the same $y$ for two different $x$), D is unrelated.

::mc
Let $f(x)=2x-3$. The value $f(4)$ is
A. $11$.
B. $1$.
C. $5$.
D. $-5$.
::key C
$f(4)=2\cdot4-3=5$. A uses $2\cdot4+3$, B uses $4-3$, D has the wrong sign.

::mc
The domain of the function $y=\dfrac{5}{x-1}$ is
A. $x\neq0$.
B. $x\neq-1$.
C. all real numbers.
D. $x\neq1$.
::key D
The denominator must not be $0$: $x-1\neq0$, so $x\neq1$. A and B exclude the wrong value, C ignores the denominator.

::mc
Which of the following points lies on the graph of $y=2x-1$?
A. $(2, 3)$.
B. $(1, 2)$.
C. $(0, 1)$.
D. $(3, 4)$.
::key A
$2\cdot2-1=3$, so $(2, 3)$ lies on the graph. For B: $2\cdot1-1=1\neq2$; C: $-1\neq1$; D: $5\neq4$.

::tf
Let $y=-x+4$. Decide whether each statement is true or false.
a) The value of the function at $x=0$ is $4$.
b) The value of the function at $x=2$ is $2$.
c) The point $(4, 0)$ lies on the graph of the function.
d) The point $(1, 5)$ lies on the graph of the function.
::key T T T F
a) True: $-0+4=4$. b) True: $-2+4=2$. c) True: $-4+4=0$. d) False: $-1+4=3\neq5$.

::sa
Let $f(x)=3x-4$. Find $f(5)$.
::key 11
$f(5)=3\cdot5-4=11$.

::sa
A cyclist rides at $12$ km/h. After how many hours has the cyclist gone $30$ km?
::key 2.5
$12t=30$, so $t=2.5$.
:::
