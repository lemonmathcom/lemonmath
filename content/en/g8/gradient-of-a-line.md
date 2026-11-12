---
title: The gradient of a straight line
description: Understand the gradient of the line y = ax + b, find it from two points, tell parallel from intersecting lines and write equations of lines.
minutes: 25
---

:::goals
- Recognise a linear function $y=ax+b$ and the gradient $a$ of its line.
- Tell whether a line rises or falls, and how steep it is, from its gradient.
- Find the gradient of the line through two points and write the equation of a line.
- Recognise parallel, coincident and intersecting lines.
:::

Suppose a stretch of road climbs $3$ m while a walker moves $40$ m horizontally. To say whether the road is steep or gentle, we compare the height gained with the horizontal distance: $\dfrac{3}{40}=0.075$. This number tells us that for every metre travelled horizontally the road rises $0.075$ m, a steepness of $7.5\%$.

In mathematics, the number that describes the steepness of a straight line is called its gradient. It tells us whether the line rises or falls, and how steep it is. What about two lines with the same steepness? This lesson answers such questions.

## Let's explore

We draw three lines $y=2x$, $y=0.5x$ and $y=-x$ on the same coordinate plane. For each line, see how much $y$ changes when $x$ increases by $1$.

:::graph Three lines with different steepness
alt: Three lines through the origin: y = 2x rises steeply, y = 0.5x rises gently, y = -x falls
x: -3..3
y: -4..4
plot: 2x
plot: 0.5x
plot: -x
label: (1.6, 3.5) "y = 2x"
label: (2.6, 1.7) "y = 0.5x"
label: (-2.4, 3) "y = -x"
:::

When $x$ increases by $1$: for $y=2x$, $y$ increases by $2$; for $y=0.5x$, $y$ increases by $0.5$; for $y=-x$, $y$ decreases by $1$. The numbers $2$; $0.5$; $-1$ are exactly the coefficients of $x$ in the formulas. Their sign tells us whether the line rises or falls, and their size tells us how steep it is.

## The gradient

:::definition Linear function and gradient
A **linear function** is a function given by a formula $y=ax+b$, where $a$ and $b$ are given numbers and $a\neq0$. Its graph is a **straight line**.

The number $a$ is called the **gradient** of the line $y=ax+b$.
:::

**Why is $a$ the steepness?** When $x$ increases by $1$, the value $y=ax+b$ becomes $a(x+1)+b=ax+b+a$, so $y$ increases by exactly $a$. So $a$ tells us how much $y$ changes each time $x$ increases by $1$.

From this we get the following remarks:
- $a>0$: the line rises from left to right; $a<0$: the line falls.
- The larger $|a|$ is, the steeper the line.
- The constant $b$ is the $y$-coordinate where the line meets the $y$-axis, because $x=0$ gives $y=b$.

:::example Finding the gradient
Find the gradient of each line and say whether it rises or falls:

a) $y=3x-2$.

b) $y=-\dfrac12x+1$.

c) $y=4-2x$.

**Solution.** We write each formula in the form $y=ax+b$ and read off $a$.

a) $a=3>0$, so the line rises.

b) $a=-\dfrac12<0$, so the line falls.

c) Writing $y=-2x+4$, we have $a=-2<0$ and the line falls.

So the gradients are $3$; $-\dfrac12$; $-2$.
:::

If we know two points on the line, we can find the gradient from the idea "how much does $y$ change when $x$ increases by $1$".

:::theorem Gradient from two points
The line through the points $A(x_1, y_1)$ and $B(x_2, y_2)$ with $x_1\neq x_2$ has gradient
$$a=\frac{y_2-y_1}{x_2-x_1}.$$
:::

**Why?** Since $A$ and $B$ lie on the line $y=ax+b$, we have $y_1=ax_1+b$ and $y_2=ax_2+b$. Subtracting the two equalities gives $y_2-y_1=a(x_2-x_1)$. Dividing both sides by $x_2-x_1\neq0$ gives the formula.

:::example A line through two points
Write the equation of the line through $A(1, 2)$ and $B(3, 8)$.

**Solution.** The gradient is $a=\dfrac{8-2}{3-1}=3$. The line has the form $y=3x+b$. Since $A(1, 2)$ lies on the line, $2=3\cdot1+b$, so $b=-1$.

Check with $B$: $3\cdot3-1=8$, correct.

So the equation of the line is $y=3x-1$.
:::

We draw a line by finding two of its points and joining them.

:::example Drawing a linear graph
Draw the graph of the function $y=-2x+3$.

**Solution.** The gradient $a=-2<0$, so the line falls. For $x=0$ we get $y=3$, giving the point $(0, 3)$. For $x=2$ we get $y=-1$, giving the point $(2, -1)$. We join the two points and check one more point $(1, 1)$: $-2\cdot1+3=1$, correct.

So the graph is the line through $(0, 3)$ and $(2, -1)$.
:::

:::graph Graph of the function $y=-2x+3$
alt: A line falling from left to right through the points (0, 3), (1, 1), (2, -1)
x: -2..4
y: -3..6
plot: -2x + 3
point: (0, 3) "(0, 3)" above-right
point: (1, 1) "(1, 1)" above-right
point: (2, -1) "(2, -1)" above-right
:::

## Parallel and intersecting lines

:::theorem Position of two lines
Let $d: y=ax+b$ and $d': y=a'x+b'$ be two lines.
- $d\parallel d'$ (parallel) when $a=a'$ and $b\neq b'$.
- $d\equiv d'$ (coincident) when $a=a'$ and $b=b'$.
- $d$ and $d'$ intersect when $a\neq a'$.
:::

**Why?** If $a=a'$ the two lines are equally steep, and one is the other shifted up or down by $b'-b$ units: parallel if $b\neq b'$, coincident if $b=b'$. If $a\neq a'$, the equation $ax+b=a'x+b'$ has exactly one solution $x=\dfrac{b'-b}{a-a'}$, so the lines have exactly one common point.

:::example Position of three lines
Consider three lines $d_1: y=2x+1$, $d_2: y=2x-3$, $d_3: y=-x+4$. Which two are parallel? Find the point where $d_1$ and $d_3$ meet.

**Solution.** The lines $d_1$ and $d_2$ have the same gradient $2$ and $1\neq-3$, so $d_1\parallel d_2$. The gradient of $d_3$ is $-1$, which differs from $2$, so $d_3$ intersects both $d_1$ and $d_2$.

At the intersection of $d_1$ and $d_3$ the $x$-coordinate satisfies $2x+1=-x+4$, so $3x=3$ and $x=1$. Then $y=2\cdot1+1=3$.

So $d_1\parallel d_2$ and $d_1$ meets $d_3$ at $(1, 3)$.
:::

:::graph The lines $d_1$, $d_2$, $d_3$
alt: Two parallel rising lines and one falling line crossing them; the falling line meets the line y = 2x + 1 at (1, 3)
x: -3..4
y: -6..8
plot: 2x + 1
plot: 2x - 3
plot: -x + 4
point: (1, 3) "(1, 3)" above-right
:::

:::example Writing the equation of a line
Write the equation of the line:

a) with gradient $2$ passing through $M(1, 5)$;

b) parallel to $y=-3x+1$ and passing through $N(2, -1)$.

**Solution.** a) The line has the form $y=2x+b$. Since $M(1, 5)$ lies on it, $5=2\cdot1+b$, so $b=3$.

b) Parallel lines have the same gradient $-3$, so the line has the form $y=-3x+b$. Since $N(2, -1)$ lies on it, $-1=-3\cdot2+b$, so $b=5$.

So a) $y=2x+3$; b) $y=-3x+5$.
:::

We return to the road at the start, using the four steps of solving a problem.

:::example The steepness of a road
Suppose a road climbs $3$ m while moving $40$ m horizontally. Find its steepness (gradient), and say how much the road rises when it moves $100$ m horizontally.

**Solution.**

*Understand.* The height $h$ rises steadily with the horizontal distance $x$; we need the gradient and $h$ when $x=100$.

*Plan.* A road of constant steepness is the line $h=ax$ through the origin, whose gradient $a$ is the height gained divided by the horizontal distance.

*Solve.* The gradient is $a=\dfrac{3}{40}=0.075$, a steepness of $7.5\%$. The function is $h=0.075x$. When $x=100$: $h=0.075\cdot100=7.5$ (m).

*Look back.* Check: $0.075\cdot40=3$ m, as the problem says. The result is reasonable because a horizontal distance more than twice as long gives a height more than twice as large.

So the steepness is $0.075$ ($7.5\%$), and after $100$ m horizontally the road has risen $7.5$ m.
:::

:::warning Mistakes to watch out for
- **Using the constant term as the gradient.** Wrong: the gradient of $y=3x-2$ is $-2$. Why it is wrong: the gradient is the coefficient of $x$, while $-2$ is the $y$-coordinate where the line meets the $y$-axis. Right: the gradient of $y=3x-2$ is $3$.
- **Reversing the order when finding the gradient.** Wrong: $a=\dfrac{y_2-y_1}{x_1-x_2}$. Why it is wrong: the differences in numerator and denominator must use the points in the same order, otherwise the sign flips; for $A(1, 2)$, $B(3, 8)$ we would get $-3$ though the line rises. Right: $a=\dfrac{y_2-y_1}{x_2-x_1}$.
- **Thinking the same gradient means parallel.** Wrong: $y=2x+1$ and $y=2x+1$ are parallel. Why it is wrong: the lines coincide when $b$ is also equal. Right: parallel needs $a=a'$ and $b\neq b'$.
:::

**Connections.** This lesson uses functions, graphs and the coordinate plane from [the idea of a function and its graph](lesson:intro-functions-graphs), and linear equations to find intersection points. In real life the gradient is a "rate of change": the steepness of a road, the price per gigabyte of a phone plan, the speed of uniform motion.

## Key terms

:::terms
- linear function | hàm số bậc nhất
- gradient | hệ số góc
- straight line | đường thẳng
- parallel | song song
- coincident | trùng nhau
- intersecting | cắt nhau
- point of intersection | giao điểm
- $y$-intercept | tung độ gốc
- steepness | độ dốc
:::

## Summary

- A linear function $y=ax+b$ ($a\neq0$) has a straight line as its graph; $a$ is the gradient and $b$ is the $y$-coordinate where the line meets the $y$-axis.
- $a>0$: the line rises; $a<0$: the line falls; the larger $|a|$, the steeper.
- The line through $A(x_1, y_1)$ and $B(x_2, y_2)$ has gradient $a=\dfrac{y_2-y_1}{x_2-x_1}$.
- Parallel: $a=a'$, $b\neq b'$; coincident: $a=a'$, $b=b'$; intersecting: $a\neq a'$.
- To draw a line you only need two points.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find the gradient $a$ and the constant $b$ of each function:

a) $y=-3x+5$.

b) $y=\dfrac{x}{4}-1$.

c) $y=4-2x$.

d) $y=7x$.

::hint
**What you need:** write each one in the form $y=ax+b$.

**Steps:**
1. Put the term containing $x$ first.
2. Read off $a$ and $b$.

::solution
a) $a=-3$, $b=5$.

b) $y=\dfrac14x-1$, so $a=\dfrac14$, $b=-1$.

c) $y=-2x+4$, so $a=-2$, $b=4$.

d) $y=7x+0$, so $a=7$, $b=0$.

**Answer.** a) $(-3, 5)$. b) $\left(\dfrac14, -1\right)$. c) $(-2, 4)$. d) $(7, 0)$.
:::

:::exercise
Which functions rise and which fall?

a) $y=0.5x+2$.

b) $y=-4x+1$.

c) $y=1-3x$.

::hint
**What you need:** the sign of the gradient tells us whether the line rises ($a>0$) or falls ($a<0$).

**Steps:**
1. Find the gradient of each function.
2. Look at its sign.

::solution
a) $a=0.5>0$: rises. b) $a=-4<0$: falls. c) $y=-3x+1$, so $a=-3<0$: falls.

So a) rises; b) and c) fall.

**Answer.** a) rises. b) falls. c) falls.
:::

:::exercise
Write the equation of the line through:

a) $A(-1, -3)$ and $B(2, 3)$.

b) $A(0, 5)$ and $B(4, 1)$.

::hint
**What you need:** $a=\dfrac{y_2-y_1}{x_2-x_1}$, then find $b$.

**Steps:**
1. Work out the gradient $a$.
2. Substitute the coordinates of one point to find $b$.

::solution
a) $a=\dfrac{3-(-3)}{2-(-1)}=\dfrac63=2$. From $A$: $-3=2\cdot(-1)+b$, so $b=-1$. Equation: $y=2x-1$. Check with $B$: $2\cdot2-1=3$, correct.

b) $a=\dfrac{1-5}{4-0}=-1$. The line meets the $y$-axis at $(0, 5)$, so $b=5$. Equation: $y=-x+5$. Check with $B$: $-4+5=1$, correct.

**Answer.** a) $y=2x-1$. b) $y=-x+5$.
:::

:::exercise
Draw the graph of $y=\dfrac{x}{2}+1$.

::hint
**What you need:** drawing a line needs only two points.

**Steps:**
1. Choose two easy values of $x$, for example $0$ and $2$.
2. Work out $y$ and join the two points.

::solution
For $x=0$, $y=1$, giving $(0, 1)$. For $x=2$, $y=2$, giving $(2, 2)$. Joining the two points gives a line that rises (since $a=\dfrac12>0$) and also passes through $(-2, 0)$.

**Answer.** The line through $(0, 1)$ and $(2, 2)$.
:::

:::exercise
Consider the four lines $d_1: y=2x+3$, $d_2: y=2x-5$, $d_3: y=-2x+3$, $d_4: y=2x+3$. Find the position of $d_1$ relative to each of the others.

::hint
**What you need:** compare the gradients and the constants $b$.

**Steps:**
1. Compare the gradient $a$ of $d_1$ with each of the others.
2. If the gradients are equal, compare $b$.

::solution
With $d_2$: same $a=2$, different $b$ ($3\neq-5$): parallel. With $d_3$: $a=-2\neq2$: intersecting, and at the intersection $2x+3=-2x+3$, so $x=0$ and $y=3$, that is $(0, 3)$. With $d_4$: same $a=2$ and same $b=3$: coincident.

**Answer.** $d_1\parallel d_2$; $d_1$ meets $d_3$ at $(0, 3)$; $d_1\equiv d_4$.
:::

:::exercise
Write the equation of the line through $(0, 4)$ that is parallel to the line $y=3x-1$.

::hint
**What you need:** parallel lines have the same gradient.

**Steps:**
1. The gradient we need is $3$.
2. The line meets the $y$-axis at $(0, 4)$, so $b=4$.

::solution
The line is parallel to $y=3x-1$, so it has the form $y=3x+b$ with $b\neq-1$. Since it passes through $(0, 4)$, $4=3\cdot0+b$, so $b=4\neq-1$.

So the equation of the line is $y=3x+4$.

**Answer.** $y=3x+4$.
:::

:::exercise
Suppose two phone plans cost (in dong) $A: y=6\,000x+40\,000$ and $B: y=4\,000x+60\,000$ for $x$ extra GB. Say what the gradient means for each plan. For how many GB do the two plans cost the same? Beyond that, which plan is cheaper?

::hint
**What you need:** the gradient is the extra cost per GB; find the intersection by setting the two expressions equal.

**Steps:**
1. Solve $6\,000x+40\,000=4\,000x+60\,000$.
2. Try a value of $x$ larger than the solution.

::solution
The gradients $6\,000$ and $4\,000$ are the price per extra GB of plan A and plan B. The equation $6\,000x+40\,000=4\,000x+60\,000$ gives $2\,000x=20\,000$, so $x=10$; both plans then cost $100\,000$ dong. For $x=11$: plan A costs $106\,000$ and plan B costs $104\,000$, so beyond that plan B is cheaper (smaller gradient).

So at $10$ GB the plans cost the same; above $10$ GB plan B is cheaper.

**Answer.** $10$ GB; plan B is cheaper above $10$ GB.
:::

:::exercise
Suppose road A climbs $6$ m while moving $80$ m horizontally, and road B climbs $5$ m while moving $60$ m horizontally. Which road is steeper?

::hint
**What you need:** steepness is the height gained divided by the horizontal distance.

**Steps:**
1. Work out the gradient of each road.
2. Compare the two numbers.

::solution
Road A has gradient $\dfrac{6}{80}=0.075$. Road B has gradient $\dfrac{5}{60}\approx0.0833$. Since $0.0833>0.075$, road B is steeper.

So road B is steeper than road A.

**Answer.** Road B.
:::

:::exercise
Find the point of intersection of the lines $y=2x-1$ and $y=-x+5$. (Revise [linear equations](lesson:linear-equations-one-unknown).)

::hint
**What you need:** at the intersection the two values of $y$ are equal.

**Steps:**
1. Solve $2x-1=-x+5$.
2. Substitute $x$ into one function to find $y$.

::solution
We have $2x-1=-x+5$, so $3x=6$ and $x=2$. Then $y=2\cdot2-1=3$.

Check: $-2+5=3$.

So the point of intersection is $(2, 3)$.

**Answer.** $(2, 3)$.
:::

:::exercise Challenge
Prove that the three points $A(1, 3)$, $B(2, 5)$, $C(4, 9)$ are collinear (lie on one straight line).

::hint
**What you need:** three points are collinear when the gradients of $AB$ and $AC$ are equal.

**Steps:**
1. Find the gradient of line $AB$.
2. Find the gradient of line $AC$ and compare.

::solution
The gradient of $AB$ is $\dfrac{5-3}{2-1}=2$. The gradient of $AC$ is $\dfrac{9-3}{4-1}=\dfrac63=2$. The two gradients are equal and the lines $AB$ and $AC$ both pass through $A$, so they coincide.

So $A$, $B$, $C$ are collinear (all lie on the line $y=2x+1$).

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
The gradient of the line $y=4-2x$ is
A. $4$.
B. $2$.
C. $-4$.
D. $-2$.
::key D
Writing $y=-2x+4$ gives $a=-2$. A takes the constant term, B drops the sign, C gets both sign and value wrong.

::mc
The line through $A(1, 2)$ and $B(3, 8)$ has gradient
A. $3$.
B. $6$.
C. $\dfrac13$.
D. $2$.
::key A
$a=\dfrac{8-2}{3-1}=3$. B forgets to divide, C inverts the ratio, D confuses it with $3-1$.

::mc
Which pair of lines is parallel?
A. $y=2x+1$ and $y=-2x+1$.
B. $y=2x+1$ and $y=2x-4$.
C. $y=x+1$ and $y=2x+1$.
D. $y=2x+1$ and $y=2x+1$.
::key B
Both lines have $a=2$ and different $b$. A and C intersect (different gradients), D coincide.

::mc
The line with gradient $-2$ passing through $(0, 3)$ has equation
A. $y=3x-2$.
B. $y=-2x-3$.
C. $y=-2x+3$.
D. $y=2x+3$.
::key C
The gradient is $a=-2$ and the $y$-coordinate where it meets the $y$-axis is $b=3$. A swaps the two coefficients, B gets the sign of $b$ wrong, D gets the sign of $a$ wrong.

::tf
Let $d: y=-3x+6$. Decide whether each statement is true or false.
a) The gradient of $d$ is $-3$.
b) $d$ rises from left to right.
c) $d$ meets the $y$-axis at the point $(0, 6)$.
d) $d$ is parallel to the line $y=-3x+2$.
::key T F T T
a) True. b) False: $a=-3<0$, so $d$ falls. c) True: $x=0$ gives $y=6$. d) True: same $a=-3$ and $6\neq2$.

::sa
What is the gradient of the line through $A(2, 1)$ and $B(6, 9)$?
::key 2
$a=\dfrac{9-1}{6-2}=2$.

::sa
A road climbs $2$ m while moving $25$ m horizontally. What is its gradient (steepness) as a decimal?
::key 0.08
$\dfrac{2}{25}=0.08$.
:::
