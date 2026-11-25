---
title: Linear functions and their graphs
description: Recognise linear functions, calculate values, draw their graphs from two points, and use them in real situations.
minutes: 20
---

:::goals
- Recognise a linear function $y=ax+b$, where $a\ne0$, and identify the coefficients $a$ and $b$.
- Calculate function values and check whether a point lies on a graph.
- Draw the graph of a linear function from two distinct points.
- Use linear functions and their graphs to solve real-life problems.
:::

Imagine you hire a bicycle. The shop charges 20 thousand dong to unlock it and 15 thousand dong per hour. Hiring for $x$ hours costs $y=15x+20$ thousand dong. What is the cost after $3$ hours? And if we plot the points $(x, y)$, what shape do they make?

## Linear functions

### Explore: the cost of hiring a bicycle

To find out, we substitute a few values of $x$ into $y=15x+20$:

| $x$ (hours) | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| $y$ (thousand dong) | $20$ | $35$ | $50$ | $65$ |

Look at the table. Each extra hour adds 15 thousand dong. The number $20$ is the initial cost, which is there before any time has been counted. So the formula has the form $y=ax+b$, with $a=15$ and $b=20$. Formulas like this, a fixed amount plus an amount that grows steadily, turn up everywhere, so we give them a name.

:::definition Linear function
A linear function is a function given by
$$y=ax+b,$$
where $a$ and $b$ are fixed numbers and $a\ne0$.
:::

There are two points to notice. If $a=0$, then $y=b$ does not change with $x$: this is a constant function, not a linear function. The number $b$, however, may equal $0$; the formula is then $y=ax$.

:::example Recognising linear functions
Which of the following are linear functions? Give $a$ and $b$ for each linear function.

a) $y=3x-5$; b) $y=-x$; c) $y=7$; d) $y=x^2+1$.

**Solution.** Compare each formula with $y=ax+b$, where $a\ne0$:

- a) $a=3$, $b=-5$: linear.
- b) $y=(-1)x+0$ has $a=-1$, $b=0$: linear.
- c) $y=0x+7$ has $a=0$: not linear.
- d) It contains $x^2$: not of the form $y=ax+b$.

Therefore the functions in a) and b) are linear.
:::

With a formula in hand, calculating a function value means substituting the value of $x$ and working it out. The next example does that, and also checks whether given points lie on the graph.

:::example Calculating values and checking points
Consider the function $y=-2x+7$.

a) Find $y$ when $x=3$ and when $x=-1$.

b) Do the points $A(4, -1)$ and $B(2, 4)$ lie on the graph?

**Solution.** We substitute the x-coordinate into the formula and compare the result with the y-coordinate:

$$\begin{aligned}
x=3&\Rightarrow y=-2\cdot3+7=1;\\
x=-1&\Rightarrow y=-2\cdot(-1)+7=9.
\end{aligned}$$

For $A$, $-2\cdot4+7=-1$, so $A$ lies on the graph. For $B$, $-2\cdot2+7=3\ne4$, so $B$ does not.
:::

## Graphs of linear functions

### Explore: are the points collinear?

Take $y=2x+1$. It gives the points $A(-1, -1)$, $B(0, 1)$, $C(1, 3)$ and $D(2, 5)$. When we plot them on the coordinate plane, all four lie on one straight line. Is that a coincidence?

:::graph Points on the graph of $y=2x+1$
alt: Four points A, B, C and D on the straight line representing y equals 2x plus 1
x: -2..3
y: -2..6
plot: 2x + 1
point: (-1, -1) "A" below-left
point: (0, 1) "B" above-left
point: (1, 3) "C" above-left
point: (2, 5) "D" above-left
:::

:::theorem The graph of a linear function
The graph of a linear function $y=ax+b$, where $a\ne0$, is a straight line. It is called the line $y=ax+b$.

To draw the graph, find two distinct points on it, then draw the straight line through them.
:::

Why does this happen? The graph of $y=ax$ is a straight line through the origin. In $y=ax+b$, every y-coordinate changes by $b$. All points move vertically by the same amount, so they still form a straight line.

Two points are enough, so we pick the two that are easiest to find. Two convenient ways to choose them are:

- If $b\ne0$, set $x=0$ to obtain $P(0, b)$ on the y-axis; set $y=0$ to obtain $Q\left(-\dfrac ba, 0\right)$ on the x-axis.
- If $b=0$, the graph passes through $O(0, 0)$, so only one more point is needed. Choose one more value of $x$, for example $x=1$, to obtain $(1, a)$.

:::example Drawing a graph when $b\ne0$
Draw the graph of $y=2x-4$.

**Solution.** We choose the two intercepts because they have integer coordinates:

$$\begin{aligned}
x=0&\Rightarrow y=-4 &&\Rightarrow P(0, -4);\\
y=0&\Rightarrow 2x-4=0\Rightarrow x=2 &&\Rightarrow Q(2, 0).
\end{aligned}$$

Plot $P$ and $Q$, then draw the straight line $PQ$. This is the required graph.
:::

:::graph The graph of $y=2x-4$
alt: The straight line y equals 2x minus 4 through P on the y-axis and Q on the x-axis
x: -1..4
y: -5..4
plot: 2x - 4
point: (0, -4) "P" below-left
point: (2, 0) "Q" above-right
:::

When $b=0$ it is even easier, because one of the two points is already known: the origin.

:::example Drawing a graph when $b=0$
Draw the graph of $y=-3x$.

**Solution.** Set $x=0$ and $x=1$ to find two points:

$$x=0\Rightarrow y=0\Rightarrow O(0, 0),\qquad x=1\Rightarrow y=-3\Rightarrow M(1, -3).$$

Draw the straight line $OM$. This is the graph of $y=-3x$.
:::

:::graph The graph of $y=-3x$
alt: The straight line y equals negative 3x through the origin O and the point M with coordinates 1, negative 3
x: -2..2
y: -5..5
plot: -3x
point: (0, 0) "O" above-left
point: (1, -3) "M" below-right
:::

In real life, quantities have limits: time cannot be negative, and neither can the water left in a tank. So sometimes we use only part of the straight line. The next example shows this.

:::example A water tank being emptied
A tank contains $90$ litres of water. Water is released at a steady rate of $6$ litres per minute. Let $t$ be the time and $V$ the volume of water left.

a) Write $V$ in terms of $t$.

b) Find the volume after $8$ minutes and the time when the tank becomes empty. Describe the graph for this situation.

**Solution.** The volume falls by $6$ litres each minute from an initial volume of $90$ litres, so

$$V=90-6t=-6t+90.$$

After $8$ minutes:

$$V=90-6\cdot8=42\text{ litres}.$$

The tank is empty when $V=0$:

$$90-6t=0\Rightarrow t=15\text{ minutes}.$$

The formula has linear form. However, only $0\le t\le15$ makes sense here, so the graph is the line segment joining $(0, 90)$ and $(15, 0)$, not the whole straight line.
:::

:::warning Common mistakes
- **Forgetting the condition $a\ne0$.** Wrong: “$y=5$ is linear with $a=0$.” Correct: it is a constant function, because the value never changes.
- **Losing a sign when substituting a negative number.** Many people slip here. For $y=-2x+1$ and $x=-3$, write $y=-2\cdot(-3)+1=7$, not $-5$.
- **Plotting only one point before drawing.** Many straight lines pass through one point, so we cannot tell which one is meant. We need two distinct points.
- **Finding the x-intercept with the wrong sign.** For $y=2x+6$, setting $y=0$ gives $2x+6=0$, so $x=-3$, not $3$.
- **Ignoring a real-life restriction.** Time and quantities are often non-negative, so the relevant graph may be only a line segment or a ray. Read the restrictions on the variable before you draw.
:::

## Key terms

:::terms
- linear function | hàm số bậc nhất
- coefficient | hệ số
- graph | đồ thị
- straight line | đường thẳng
- coordinate plane | mặt phẳng toạ độ
- x-axis | trục hoành
- y-axis | trục tung
- x-intercept | giao điểm với trục hoành
- y-intercept | giao điểm với trục tung
:::

## Summary

- A linear function has the form $y=ax+b$, where $a\ne0$.
- A point $M(x_0, y_0)$ lies on the graph exactly when $y_0=ax_0+b$.
- The graph of a linear function is a straight line. Two distinct points determine this line.
- When $b\ne0$, convenient points are $P(0, b)$ and $Q\left(-\dfrac ba, 0\right)$.
- When $b=0$, the graph passes through $O(0, 0)$; choose one more point before drawing it.
- In a real situation, check the restrictions on the variable before choosing the relevant part of the graph.
Back to the bicycle: the hire cost by the hour is a linear function, so its points lie on a straight line, and two points are enough to draw it. Remember just that: two distinct points are enough. A few practice questions will help it stay with you.

## Practice

Try each exercise before opening the solution. A mistake made here teaches you more than a solution read too soon.

:::exercise
Which of the following formulas give a linear function? For each linear function, state $a$ and $b$.

a) $y=4x+1$; b) $y=-3x$; c) $y=6$; d) $y=x^2-4$.

::hint
**What you need:** a linear function has the form $y=ax+b$, where $a\ne0$.

**Steps:**
1. Write each formula as $y=ax+b$ if possible.
2. Exclude the case $a=0$ and the formula containing $x^2$.

::solution
A linear function has the form $y=ax+b$, where $a$ and $b$ are given numbers and $a\neq0$. We examine each formula.

a) The formula $y=4x+1$ has the form $y=ax+b$ with $a=4\neq0$, $b=1$. It is a linear function.

b) The formula $y=-3x$ can be written as $y=-3x+0$ with $a=-3\neq0$, $b=0$. It is a linear function.

c) The formula $y=6$ can be written as $y=0x+6$, which has $a=0$. It is not a linear function.

d) The formula $y=x^2-4$ contains $x^2$ and does not have the form $y=ax+b$. It is not a linear function.

So formulas a) and b) give linear functions, with a) $a=4$, $b=1$ and b) $a=-3$, $b=0$.

**Answer.** a) and b) are linear functions.
:::

:::exercise
For the function $y=-2x+5$, find $y$ when $x=-1$, $x=0$ and $x=3$.

::hint
**What you need:** substitute each value of $x$ into the formula.

**Steps:**
1. Keep brackets around a negative value when substituting it.
2. Multiply before adding.

::solution
We substitute the given values of $x$ into the formula $y=-2x+5$.

For $x=-1$: $y=-2\cdot(-1)+5=2+5=7$.

For $x=0$: $y=-2\cdot0+5=5$.

For $x=3$: $y=-2\cdot3+5=-6+5=-1$.

So $y=7$ when $x=-1$; $y=5$ when $x=0$; $y=-1$ when $x=3$.

**Answer.** $7$, $5$, $-1$.
:::

:::exercise Review
Which of the points $A(0, -2)$, $B(1, 1)$, $C(-1, -5)$ and $D(2, 5)$ lie on the graph $y=3x-2$?

::hint
**What you need:** a point lies on the graph when its coordinates satisfy the function formula.

**Steps:**
1. Substitute the x-coordinate of each point into $3x-2$.
2. Compare the result with the point's y-coordinate.

::solution
A point lies on the graph $y=3x-2$ when its y-coordinate equals the value of $3x-2$ computed at its x-coordinate.

For $A(0, -2)$: $3\cdot0-2=-2$, which equals the y-coordinate, so $A$ lies on the graph.

For $B(1, 1)$: $3\cdot1-2=1$, which equals the y-coordinate, so $B$ lies on the graph.

For $C(-1, -5)$: $3\cdot(-1)-2=-5$, which equals the y-coordinate, so $C$ lies on the graph.

For $D(2, 5)$: $3\cdot2-2=4\neq5$, so $D$ does not lie on the graph.

So $A$, $B$, $C$ lie on the graph $y=3x-2$.

**Answer.** $A$, $B$, $C$.
:::

:::exercise
Draw the graph of $y=2x+6$ using its two intercepts.

::hint
**What you need:** set $x=0$ to find the point on the y-axis; set $y=0$ to find the point on the x-axis.

**Steps:**
1. Find the two points $P$ and $Q$.
2. Draw the straight line $PQ$.

::solution
The graph of a linear function is a straight line, so it is enough to find two distinct points on it. We choose its two intercepts with the coordinate axes.

Intercept with the y-axis: setting $x=0$, we get $y=2\cdot0+6=6$. The point is $P(0, 6)$.

Intercept with the x-axis: setting $y=0$, we get $2x+6=0$, so $2x=-6$ and $x=-3$. The point is $Q(-3, 0)$.

To draw it: in the coordinate plane $Oxy$, plot the points $P(0, 6)$ and $Q(-3, 0)$, then draw the straight line through them.

So the graph of $y=2x+6$ is the straight line $PQ$ through $P(0, 6)$ and $Q(-3, 0)$.

**Answer.** The straight line through $(0, 6)$ and $(-3, 0)$.
:::

:::exercise
Draw the graph of $y=-4x$.

::hint
**What you need:** when $b=0$, the graph passes through the origin.

**Steps:**
1. Choose $x=0$ and $x=1$.
2. Draw the straight line through the two points found.

::solution
The function $y=-4x$ has the form $y=ax$ with $a=-4\neq0$, so its graph is a straight line through the origin $O$. We need one more point.

Setting $x=0$, we get $y=-4\cdot0=0$. The point is $O(0, 0)$.

Setting $x=1$, we get $y=-4\cdot1=-4$. The point is $M(1, -4)$.

To draw it: in the coordinate plane $Oxy$, plot the point $M(1, -4)$, then draw the straight line through $O$ and $M$.

So the graph of $y=-4x$ is the straight line $OM$ through $O(0, 0)$ and $M(1, -4)$.

**Answer.** The straight line through $(0, 0)$ and $(1, -4)$.
:::

:::exercise
Without drawing, find where the graph of $y=-\dfrac12x+3$ meets each coordinate axis.

::hint
**What you need:** on the y-axis, $x=0$; on the x-axis, $y=0$.

**Steps:**
1. Set $x=0$.
2. Solve $-\dfrac12x+3=0$.

::solution
The intersection with the y-axis has x-coordinate $x=0$; the intersection with the x-axis has y-coordinate $y=0$.

Intersection with the y-axis: setting $x=0$, we get $y=-\dfrac12\cdot0+3=3$. The point is $(0, 3)$.

Intersection with the x-axis: setting $y=0$, we get the equation
$$-\frac12x+3=0.$$
Hence $-\dfrac12x=-3$; multiplying both sides by $-2$, we get $x=6$. The point is $(6, 0)$.

So the graph meets the y-axis at $(0, 3)$ and the x-axis at $(6, 0)$.

**Answer.** $(0, 3)$ and $(6, 0)$.
:::

:::exercise
A car park charges an entry fee of 12 thousand dong and a further 4 thousand dong for each hour. Let $t$ be the number of hours and $C$ the cost in thousands of dong, where $0\le t\le8$.

a) Write $C$ in terms of $t$. b) Find the cost for $5$ hours. c) Give the two endpoints of the part of the graph that fits the situation.

::hint
**What you need:** total cost equals the initial fee plus the time-based charge.

**Steps:**
1. Form a rule of the form $C=at+b$.
2. Substitute $t=5$, then substitute the boundary values $t=0$ and $t=8$.

::solution
Let $t$ (hours) be the parking time and $C$ (thousands of dong) the cost, where $0\le t\le8$.

a) The cost consists of the entry fee of $12$ thousand dong and $4t$ thousand dong for $t$ hours. Hence
$$C=4t+12.$$

b) For $t=5$, we have $C=4\cdot5+12=20+12=32$ (thousand dong).

c) On $0\le t\le8$ the graph of $C=4t+12$ is a line segment. Its two endpoints correspond to $t=0$ and $t=8$.

When $t=0$: $C=4\cdot0+12=12$, giving the point $(0, 12)$.

When $t=8$: $C=4\cdot8+12=44$, giving the point $(8, 44)$.

So a) $C=4t+12$; b) the cost for $5$ hours is $32$ thousand dong; c) the endpoints of the part of the graph are $(0, 12)$ and $(8, 44)$.

**Answer.** a) $C=4t+12$; b) 32 thousand dong; c) $(0, 12)$ and $(8, 44)$.
:::

:::exercise
A tank contains $72$ litres of water and is being emptied at a steady rate of $8$ litres per minute. Let $t$ be the number of minutes and $V$ the number of litres left.

a) Write $V$ in terms of $t$. b) Find $V$ after $6$ minutes. c) When is the tank empty, and what are the endpoints of the relevant part of the graph?

::hint
**What you need:** volume left equals initial volume minus volume released.

**Steps:**
1. Write $V=72-8t$.
2. Substitute $t=6$ and solve $V=0$.

::solution
Let $t$ (minutes) be the time the tank has been emptying and $V$ (litres) the amount of water left, where $t\ge0$.

a) After $t$ minutes, $8t$ litres have been let out, so the amount left is
$$V=72-8t.$$

b) For $t=6$, we have $V=72-8\cdot6=72-48=24$ (litres).

c) The tank is empty when $V=0$, that is
$$72-8t=0.$$
Hence $8t=72$, so $t=9$ (minutes).

Therefore the part of the graph that fits the situation corresponds to $0\le t\le9$. When $t=0$, $V=72$, giving the point $(0, 72)$; when $t=9$, $V=0$, giving the point $(9, 0)$.

So a) $V=72-8t$; b) after $6$ minutes $24$ litres are left; c) the tank is empty after $9$ minutes and the endpoints of the part of the graph are $(0, 72)$ and $(9, 0)$.

**Answer.** a) $V=72-8t$; b) $24$ litres; c) $9$ minutes, with endpoints $(0, 72)$ and $(9, 0)$.
:::

:::exercise Challenge
The lines $y=2x-3$ and $y=-x+6$ meet at $M$. Without drawing the graphs, find the coordinates of $M$ and check your result.

::hint
**What you need:** at the intersection, the same x-coordinate gives the same y-coordinate.

**Steps:**
1. Solve $2x-3=-x+6$.
2. Substitute the value of $x$ into either formula.
3. Check it in the other formula.

::solution
The coordinates of the intersection $M$ satisfy both line equations, so the x-coordinate of $M$ is a solution of the equation
$$2x-3=-x+6.$$

Moving the terms containing $x$ to the left and the numbers to the right, we get $3x=9$. Hence $x=3$.

Substituting $x=3$ into $y=2x-3$, we get $y=2\cdot3-3=3$.

Check: substituting $x=3$ into $y=-x+6$, we get $y=-3+6=3$, which agrees with the result above.

So the two lines meet at $M(3, 3)$.

**Answer.** $M(3, 3)$.
:::

## Mini test

:::quiz
::mc NB
Which of the following is a linear function?
A. $y=x^2-2$.
B. $y=5$.
C. $y=4x-7$.
D. $y=\dfrac3x$.
::key C
A has the form $y=ax+b$ with $a=4\ne0$. B has $a=0$, while C and D are not of linear form.

::mc TH
Which point lies on the graph of $y=-2x+4$?
A. $(0, -4)$.
B. $(-1, 2)$.
C. $(2, 4)$.
D. $(1, 2)$.
::key D
For $x=1$, we get $y=-2+4=2$. The other answers result from a sign error or from not substituting the x-coordinate into the formula.

::mc TH
Which pair of points is convenient for drawing $y=3x+6$ using its two intercepts?
A. $(0, 6)$ and $(-2, 0)$.
B. $(0, 6)$ and $(2, 0)$.
C. $(0, -6)$ and $(2, 0)$.
D. $(6, 0)$ and $(0, -2)$.
::key A
Setting $x=0$ gives $(0, 6)$; setting $y=0$ gives $3x+6=0\Rightarrow x=-2$. A and B contain sign errors.

::mc TH
Where does the graph of $y=-x+3$ meet the x-axis?
A. $(0, 3)$.
B. $(3, 0)$.
C. $(-3, 0)$.
D. $(0, -3)$.
::key B
On the x-axis, $y=0$, so $-x+3=0\Rightarrow x=3$. A is the y-intercept.

::tf NB TH TH TH
Consider the function $y=2x-4$.
a) It is a linear function with $a=2$ and $b=-4$.
b) Its graph passes through the origin $O$.
c) The point $A(2, 0)$ lies on the graph.
d) The graph meets the y-axis at $(0, 4)$.
::key T F T F
a) True by the definition. b) False because $x=0$ gives $y=-4$. c) True because $2\cdot2-4=0$. d) False: the y-intercept is $(0, -4)$.

::sa TH
For $y=-3x+7$, find $y$ when $x=2$.
::key 1
Substitution gives $y=-3\cdot2+7=1$.

::sa VD
A delivery has cost $C=8x+12$ thousand dong, where $x$ is the distance in kilometres. If the cost is 60 thousand dong, how many kilometres is the distance?
::key 6
Solving $8x+12=60$ gives $8x=48$, so $x=6$ km.
:::
