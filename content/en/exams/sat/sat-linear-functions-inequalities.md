---
title: Linear functions and inequalities
description: SAT Algebra: slope and intercepts, parallel and perpendicular lines, linear models in context, and linear inequalities in one and two variables.
minutes: 35
---

:::goals
- Find the slope and the equation of a line from two points, a graph or a table.
- Interpret the slope and the intercept of a linear model in context.
- Use the slope rules for parallel and perpendicular lines.
- Solve linear inequalities and check points against a system of inequalities.
:::

A tank draining, savings growing steadily week after week: in both we want to know how fast the quantity changes and where it starts. A line answers both questions. So after equations and systems, the rest of the SAT Algebra domain is about lines: their equations, what their numbers mean in a real situation, and inequalities. In Vietnam you write a line as $y=ax+b$; the SAT writes $y=mx+b$ and calls $m$ the **slope**. Many questions here need no calculation at all, only the right reading of $m$ and $b$.

## Slope and the equation $y=mx+b$

:::theorem Slope and intercepts
The slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$, with $x_1\ne x_2$, is
$$m=\frac{y_2-y_1}{x_2-x_1}.$$
In $y=mx+b$, $m$ is the slope and $b$ is the $y$-intercept: the line crosses the $y$-axis at $(0, b)$. The $x$-intercept is the value of $x$ when $y=0$.
:::

The slope tells you how steep a line is. A positive slope means the line rises from left to right; a negative slope means it falls. The number itself measures the steepness: a slope of $2$ means each time $x$ increases by $1$, $y$ increases by $2$.

:::example A line through two points
Line $\ell$ passes through the points $(1, 3)$ and $(4, 9)$. Which equation defines line $\ell$?
A. $y=2x+1$
B. $y=2x+3$
C. $y=\dfrac12x+\dfrac52$
D. $y=3x$

**Solution.** First the slope, then the intercept.

$$m=\frac{9-3}{4-1}=2,\qquad 3=2\cdot1+b\iff b=1.$$

The equation is $y=2x+1$: answer **A**. Option C inverts the slope formula; option D fits $(1, 3)$ but not $(4, 9)$.
:::

:::graph The line $y=2x+1$ through $(1, 3)$ and $(4, 9)$
alt: A rising straight line crossing the y-axis at 1 and passing through the points (1, 3) and (4, 9)
x: -2..6
y: -2..11
plot: 2x + 1
point: (1, 3) "(1, 3)" right
point: (4, 9) "(4, 9)" right
point: (0, 1) "b = 1" left
:::

## Linear models in context

A linear function $f(x)=mx+b$ models a quantity that changes at a constant rate. In word problems, the SAT asks what the numbers mean:

- $b$ is the **starting value**, the value at the start, when $x=0$;
- $m$ is the **rate of change**, the change in the quantity for each increase of $1$ in $x$.

:::example Interpreting a model
The height of a plant, in centimeters, $t$ weeks after it was planted is modeled by $h(t)=12+3t$. What is the best interpretation of the number $3$ in this context?
A. The height of the plant, in centimeters, when it was planted
B. The number of weeks the plant has been growing
C. The increase in the height of the plant, in centimeters, each week
D. The height of the plant, in centimeters, after 3 weeks

**Solution.** $3$ multiplies $t$, so it is the rate of change: the plant grows $3$ centimeters each week. The answer is **C**. Option A describes $12$, the value at $t=0$.
:::

Here is something useful: when a function is known to be linear, two values are enough to find any other. Two values give the slope, and once you have the slope you can travel from any point to any other.

:::example A linear function from two values
The function $f$ is linear, with $f(2)=7$ and $f(5)=16$. What is the value of $f(10)$?

**Solution.** The slope is $\dfrac{16-7}{5-2}=3$. From $x=5$ to $x=10$ the input increases by $5$, so the output increases by $5\cdot3=15$: $f(10)=16+15=31$. You type **31**. (The rule is $f(x)=3x+1$.)
:::

## Parallel and perpendicular lines

:::theorem Slope rules
Two non-vertical lines with slopes $m_1$ and $m_2$ are
- **parallel** when $m_1=m_2$ (and the intercepts differ);
- **perpendicular** when $m_1\cdot m_2=-1$, that is, $m_2=-\dfrac{1}{m_1}$.
:::

:::example A perpendicular line
Line $k$ is perpendicular to the line $y=2x-5$ and passes through the point $(4, 1)$. What is the $y$-intercept of line $k$?

**Solution.** The slope of $k$ is the negative reciprocal of $2$, which is $-\dfrac12$. Using the point $(4, 1)$:

$$1=-\frac12\cdot4+b\iff b=3.$$

The $y$-intercept is $3$. You type **3**.
:::

## Linear inequalities

Solve an inequality like an equation, with one extra rule. Why is it needed? Multiplying by a negative number reverses the order of the numbers on the number line, so a smaller number becomes a larger one. That is why: **when you multiply or divide both sides by a negative number, reverse the inequality sign.**

:::example Reversing the sign
Which of the following describes all solutions of $-3x+7\le22$?
A. $x\le-5$
B. $x\ge-5$
C. $x\le5$
D. $x\ge5$

**Solution.** Subtract $7$: $-3x\le15$. Divide by $-3$ and reverse the sign: $x\ge-5$. The answer is **B**. Option A forgets to reverse the sign. Quick check with $x=0$: $7\le22$ is true, and $0\ge-5$.
:::

In two variables, each inequality cuts the plane into two halves. Its solutions form a half-plane, and the solutions of a system of inequalities form the region where the half-planes overlap. To test whether a point is a solution, substitute it into **every** inequality. One false inequality is enough to rule the point out.

:::example A system of inequalities in context
Notebooks cost 4 dollars each and pens cost 2 dollars each. Minh can spend at most 40 dollars and wants at least 12 items in total. If $n$ is the number of notebooks and $p$ the number of pens, which pair $(n, p)$ satisfies both conditions?
A. $(10, 1)$
B. $(3, 8)$
C. $(9, 3)$
D. $(6, 8)$

**Solution.** The conditions are $4n+2p\le40$ and $n+p\ge12$. Test each option.

| $(n, p)$ | $4n+2p$ | $n+p$ | Both true? |
|---|---|---|---|
| $(10, 1)$ | $42$ | $11$ | no |
| $(3, 8)$ | $28$ | $11$ | no |
| $(9, 3)$ | $42$ | $12$ | no |
| $(6, 8)$ | $40$ | $14$ | yes |

The answer is **D**. The phrases *at most* and *at least* include equality, so $40\le40$ is acceptable.
:::

:::graph The region $4n+2p\le40$, $n+p\ge12$ (horizontal axis $n$, vertical axis $p$)
alt: A shaded region between two falling lines in the first quadrant, containing the point (6, 8)
x: -1..14
y: -1..22
region: 4x + 2y <= 40
region: x + y >= 12
region: x >= 0
point: (6, 8) "(6, 8)" above-right
:::

:::warning Common traps
- **Slope upside down.** Remember: slope is change in $y$ over change in $x$, never the reverse.
- **Mixing up $m$ and $b$ in context.** The number multiplied by the variable is the rate; the number standing alone is the starting value.
- **Perpendicular is not just "negative".** The slope perpendicular to $2$ is $-\dfrac12$, not $-2$. Take the reciprocal first, then change the sign.
- **Forgetting to reverse the sign** when dividing by a negative number. This one is easy to miss when you work in a hurry.
- **Words for inequalities.** *At least* means $\ge$; *at most* and *no more than* mean $\le$; *more than* means $>$; *fewer than* means $<$.
:::

:::tip Desmos for lines and inequalities
Desmos can draw the solution region for you. Type an inequality such as `4x+2y<=40` and Desmos shades its half-plane. Type a second one and the overlap is the solution region. To test answer options, type each point, for example `(6,8)`, and see whether it lies in the overlap.
:::

:::terms
- slope | hệ số góc
- y-intercept | tung độ gốc
- x-intercept | hoành độ giao điểm với trục hoành
- rate of change | tốc độ thay đổi
- linear function | hàm số bậc nhất
- parallel | song song
- perpendicular | vuông góc
- inequality | bất phương trình
- at least / at most | ít nhất / nhiều nhất
:::

## Similar exercises

:::exercise Student-produced response
Line $\ell$ passes through the points $(2, 1)$ and $(6, 13)$. What is the $y$-intercept of line $\ell$?

::hint
**What you need:** the slope formula, then $y=mx+b$.

**Steps:**
1. Compute $m=\dfrac{13-1}{6-2}$.
2. Substitute the point $(2, 1)$ to find $b$.

::solution
Line $\ell$ passes through $(2, 1)$ and $(6, 13)$, so its slope is
$$m=\frac{13-1}{6-2}=\frac{12}{4}=3.$$

The equation of $\ell$ has the form $y=3x+b$. Since $\ell$ passes through $(2, 1)$,
$$1=3\cdot2+b\iff b=-5.$$

Check with the point $(6, 13)$: $3\cdot6-5=13$.

So the $y$-intercept of line $\ell$ is $-5$.

**Answer.** $-5$.
:::

:::exercise Multiple choice
The cost, in dollars, of renting a boat for $n$ hours is $C(n)=50+15n$. What is the best interpretation of the number $15$?
A. The cost of renting the boat for one hour in total
B. The increase in cost for each additional hour
C. The fixed fee paid before any hours are counted
D. The number of hours the boat is rented

::hint
**What you need:** in $mx+b$, the number multiplied by the variable is the rate of change.

**Steps:**
1. Find which number multiplies $n$.
2. Describe it as "per hour".

::solution
The function $C(n)=50+15n$ is linear of the form $C(n)=an+b$ with $a=15$ and $b=50$.

When $n$ increases by $1$ hour, the cost changes by
$$C(n+1)-C(n)=\left[50+15(n+1)\right]-\left[50+15n\right]=15\ \text{(dollars)}.$$

Hence the number $15$ is the increase in cost for each additional hour, that is, the slope of the function.

So the answer is **B**.

*Remark.* Option A is false because the cost of renting for one hour is $C(1)=65$ dollars. Option C describes the number $50$ (the fixed fee, corresponding to $C(0)=50$).

**Answer.** B.
:::

:::exercise Student-produced response
Line $p$ is parallel to the line $y=-3x+2$ and passes through the point $(1, 4)$. The equation of line $p$ is $y=-3x+b$. What is the value of $b$?

::hint
**What you need:** parallel lines have equal slopes.

**Steps:**
1. Keep the slope $-3$.
2. Substitute $(1, 4)$.

::solution
Line $p$ has equation $y=-3x+b$ and passes through the point $(1, 4)$, so the coordinates of this point satisfy the equation:
$$4=-3\cdot1+b.$$

Hence $b=4+3=7$.

Check: the line $y=-3x+7$ has the same slope $-3$ as $y=-3x+2$, so it is parallel to it, and at $x=1$ we have $y=-3+7=4$.

So $b=7$.

**Answer.** $7$.
:::

:::exercise Student-produced response
The function $g$ is linear, with $g(1)=4$ and $g(4)=13$. What is the value of $g(7)$?

::hint
**What you need:** a linear function changes by the same amount over equal steps.

**Steps:**
1. Find the slope from the two given values.
2. Go from $x=4$ to $x=7$.

::solution
Since $g$ is linear, $g(x)=mx+n$ with slope
$$m=\frac{g(4)-g(1)}{4-1}=\frac{13-4}{3}=3.$$

From $g(1)=4$ we get $3\cdot1+n=4$, so $n=1$. Thus $g(x)=3x+1$.

Therefore $g(7)=3\cdot7+1=22$.

Check in another way: going from $x=4$ to $x=7$ is $3$ more units, so $g(7)=g(4)+3\cdot3=13+9=22$.

So $g(7)=22$.

**Answer.** $22$.
:::

:::exercise Multiple choice
Which of the following describes all solutions of $5-2x>11$?
A. $x>-3$
B. $x<3$
C. $x<-3$
D. $x>3$

::hint
**What you need:** reverse the sign when dividing by a negative number.

**Steps:**
1. Subtract $5$ from both sides.
2. Divide by $-2$.

::solution
We solve the inequality $5-2x>11$. Subtracting $5$ from both sides:
$$-2x>6.$$

Dividing both sides by $-2<0$ reverses the inequality:
$$x<-3.$$

Check with $x=-4$: $5-2\cdot(-4)=5+8=13>11$, which holds.

So all the solutions are $x<-3$, and the answer is **C**.

*Remark.* Option A forgets to reverse the inequality when dividing by a negative number.

**Answer.** C.
:::

## Application exercises

:::exercise A draining tank
A tank holds 500 liters of water and is drained at a constant rate of 20 liters per minute. Write a function $V(t)$ for the volume of water, in liters, after $t$ minutes. After how many minutes are 140 liters left?

::hint
**What you need:** starting value and rate of change; the rate is negative because the volume decreases.

**Steps:**
1. $V(t)=500-20t$.
2. Solve $V(t)=140$.

::solution
Let $V(t)$ (liters) be the volume of water in the tank after $t$ minutes ($t\ge0$). The tank starts with $500$ liters and loses $20$ liters each minute, so
$$V(t)=500-20t.$$

(The tank is empty when $500-20t=0$, that is $t=25$; so $0\le t\le25$.)

There are $140$ liters left when
$$500-20t=140\iff20t=360\iff t=18.$$

The value $t=18$ lies in $[0, 25]$, so it is acceptable. Check: $500-20\cdot18=140$.

So $V(t)=500-20t$, and after $18$ minutes there are $140$ liters left in the tank.

**Answer.** $V(t)=500-20t$; $18$ minutes.
:::

:::exercise Intercepts and area
In the $xy$-plane, the line $3x-4y=24$ crosses the $x$-axis at point $A$ and the $y$-axis at point $B$. What is the area of triangle $OAB$, where $O$ is the origin?

::hint
**What you need:** for the $x$-intercept set $y=0$; for the $y$-intercept set $x=0$.

**Steps:**
1. Find $A$ and $B$.
2. The triangle is right-angled at $O$: area $=\dfrac12\cdot OA\cdot OB$.

::solution
Point $A$ is where the line $3x-4y=24$ crosses the $x$-axis, so $y=0$:
$$3x=24\iff x=8,\ \text{so}\ A(8, 0).$$

Point $B$ is where it crosses the $y$-axis, so $x=0$:
$$-4y=24\iff y=-6,\ \text{so}\ B(0, -6).$$

Since $A$ lies on the $x$-axis and $B$ lies on the $y$-axis, triangle $OAB$ has a right angle at $O$, with legs $OA=8$ and $OB=|-6|=6$.

The area of triangle $OAB$ is
$$S=\frac12\cdot OA\cdot OB=\frac12\cdot8\cdot6=24.$$

So the area of triangle $OAB$ is $24$ (square units).

**Answer.** $24$.
:::

:::exercise Saving money
Hoa has 120 dollars and saves 15 dollars each week. She wants to have at least 300 dollars. What is the least number of weeks she must save?

::hint
**What you need:** *at least* means $\ge$.

**Steps:**
1. Write $120+15w\ge300$.
2. Solve for $w$.

::solution
Let $w$ be the number of weeks Hoa saves ($w$ a positive whole number). After $w$ weeks, Hoa has $120+15w$ (dollars).

She wants to have at least $300$ dollars, so
$$120+15w\ge300\iff15w\ge180\iff w\ge12.$$

Since $w$ is a whole number, the least value of $w$ is $12$.

Check: after $12$ weeks she has exactly $120+15\cdot12=300$ dollars, which satisfies "at least $300$ dollars"; after $11$ weeks she has only $120+165=285<300$ dollars.

So Hoa must save for at least $12$ weeks.

**Answer.** $12$ weeks.
:::

:::exercise Multiple choice
$$y>2x-1$$
$$y\le-x+5$$
Which point $(x, y)$ is a solution to the system of inequalities?
A. $(2, 3)$
B. $(0, 6)$
C. $(1, 3)$
D. $(3, 1)$

::hint
**What you need:** a solution must make both inequalities true.

**Steps:**
1. Substitute each point into the first inequality.
2. Substitute the remaining points into the second.

::solution
A point is a solution of the system when its coordinates satisfy both inequalities $y>2x-1$ and $y\le-x+5$. We test each option.

Option A, $(2, 3)$: $3>2\cdot2-1=3$ is false (the inequality is strict), so it is rejected.

Option B, $(0, 6)$: $6\le-0+5=5$ is false, so it is rejected.

Option D, $(3, 1)$: $1>2\cdot3-1=5$ is false, so it is rejected.

Option C, $(1, 3)$: $3>2\cdot1-1=1$ is true and $3\le-1+5=4$ is true, so $(1, 3)$ satisfies both inequalities.

So the answer is **C**.

*Remark.* The sign $>$ is strict, so the point $(2, 3)$, which lies on the line $y=2x-1$, is ruled out.

**Answer.** C.
:::

:::exercise Challenge
Line $k$ passes through $(0, 2)$ and $(3, 8)$. Line $m$ is perpendicular to line $k$ and passes through $(6, 4)$. The lines intersect at the point $(x, y)$. What is the value of $x+y$?

::hint
**What you need:** the equations of both lines, then a system.

**Steps:**
1. Line $k$: slope $2$, intercept $2$.
2. Line $m$: slope $-\dfrac12$, through $(6, 4)$.
3. Set the two expressions for $y$ equal.

::solution
Line $k$ passes through $(0, 2)$ and $(3, 8)$, so its slope is
$$m_k=\frac{8-2}{3-0}=2.$$

Line $k$ crosses the $y$-axis at $(0, 2)$, so $k:\ y=2x+2$.

Line $m$ is perpendicular to $k$, so the slope of $m$ is $-\dfrac1{m_k}=-\dfrac12$, and $m:\ y=-\dfrac12x+b$. Since $m$ passes through $(6, 4)$,
$$4=-\frac12\cdot6+b\iff4=-3+b\iff b=7.$$

So $m:\ y=-\dfrac12x+7$.

The $x$-coordinate of the intersection of $k$ and $m$ satisfies
$$2x+2=-\frac12x+7\iff\frac52x=5\iff x=2.$$

Substituting $x=2$ into $y=2x+2$ gives $y=6$. Check with $m$: $-\dfrac12\cdot2+7=6$. The intersection is $(2, 6)$.

So $x+y=2+6=8$.

**Answer.** $8$.
:::

:::quiz
::mc TH
What is the slope of the line through the points $(-1, 2)$ and $(3, 10)$?
A. $\dfrac12$
B. $2$
C. $3$
D. $8$
::key B
$\dfrac{10-2}{3-(-1)}=\dfrac84=2$. Option A is the reciprocal; option D is only the change in $y$.

::mc TH
A line is perpendicular to the line $y=-4x+9$. What is its slope?
A. $-4$
B. $4$
C. $\dfrac14$
D. $-\dfrac14$
::key C
The negative reciprocal of $-4$ is $\dfrac14$, since $-4\cdot\dfrac14=-1$.

::mc TH
Which of the following describes all solutions of $-2x\ge8$?
A. $x\le-4$
B. $x\ge-4$
C. $x\le4$
D. $x\ge-16$
::key A
Dividing by $-2$ reverses the sign: $x\le-4$.

::mc TH
The cost, in dollars, of renting a bike for $d$ days is $F=30+8d$. By how many dollars does the cost increase for each additional day?
A. $30$
B. $38$
C. $240$
D. $8$
::key D
The rate of change is the number multiplied by $d$, which is $8$. Option A is the fixed fee; option B is the cost of one day.

::tf NB TH TH NB
The function $f$ is defined by $f(x)=-2x+6$.
a) The graph of $f$ crosses the $y$-axis at $(0, 6)$.
b) The $x$-intercept of the graph is $3$.
c) The value of $f(x)$ increases as $x$ increases.
d) $f(5)=-4$.
::key T T F T
a) True: $b=6$. b) True: $-2x+6=0$ gives $x=3$. c) False: the slope is negative. d) True: $-10+6=-4$.

::sa VD
The function $f$ is linear, with $f(0)=5$ and $f(3)=17$. What is the value of $f(6)$?
::key 29
The slope is $\dfrac{17-5}{3}=4$, so $f(6)=17+3\cdot4=29$.

::sa TH
What is the least integer $x$ that satisfies $4x-7>21$?
::key 8
$4x>28\iff x>7$, and the least integer greater than $7$ is $8$.
:::
