---
title: Linear inequalities in two variables
description: Learn to test ordered pairs, draw the solution region of ax+by≤c with a solid or dashed line, and model budget problems with two unknowns.
minutes: 20
---

:::goals
- Recognise a linear inequality in two variables and say whether an ordered pair is a solution.
- Draw the solution region of $ax+by\le c$ (or $<,\ \ge,\ >$) using the boundary line and a test point.
- Decide when the boundary line is solid and when it is dashed.
- Turn a real-life limit (a budget, a ticket price) into an inequality and read answers from the region.
:::

You have $300$ units of pocket money for the cinema. A ticket for an adult costs $60$ and a ticket for a child costs $30$. How many tickets of each kind can you buy? There are many answers, and each answer is a *pair* of numbers. A single inequality with two unknowns describes all these pairs at once, and a picture on the coordinate plane shows them nicely.

## What is a linear inequality in two variables?

:::definition Linear inequality in two variables
A **linear inequality in two variables** $x$ and $y$ is an inequality of one of the forms
$$ax+by\le c,\qquad ax+by<c,\qquad ax+by\ge c,\qquad ax+by>c,$$
where $a,b,c$ are given numbers and $a,b$ are not both $0$.

A **solution** is an ordered pair $(x_0, y_0)$ such that the inequality becomes a true numerical statement when $x=x_0$ and $y=y_0$.
:::

"Ordered" means that the order matters: $(1, 2)$ and $(2, 1)$ are different pairs.

:::example Testing pairs
Which of the pairs $(1, 2)$, $(3, 1)$, $(0, 0)$, $(2, 1)$ are solutions of $2x+y\le 5$?

**Solution.** Substitute each pair into $2x+y$ and compare with $5$.
- $(1, 2)$: $2\cdot 1+2=4\le 5$, true. It is a solution.
- $(3, 1)$: $2\cdot 3+1=7\le 5$, false. Not a solution.
- $(0, 0)$: $0\le 5$, true. It is a solution.
- $(2, 1)$: $2\cdot 2+1=5\le 5$, true (equality is allowed with $\le$). It is a solution.
:::

There are infinitely many solutions, so we cannot list them. We draw them.

## The solution region

Take the inequality $x+y\le 3$. The equation $x+y=3$ is a straight line. It cuts the plane into two **half-planes**. On one side we always have $x+y<3$, on the other side $x+y>3$. So the solutions of $x+y\le 3$ form one half-plane together with the line.

:::graph The region $x+y\le 3$
alt: A coordinate plane with the line x+y=3 and the half-plane below it shaded, containing the origin
x: -2..6
y: -2..6
region: x + y <= 3
point: (0, 0) "O" below-left
point: (3, 0) "(3, 0)" below
point: (0, 3) "(0, 3)" left
:::

### How to draw it: the test-point method

:::definition Method
To find the solution region of $ax+by\le c$ (or $<,\ge,>$):
1. Draw the **boundary line** $ax+by=c$ through two of its points. Make it **solid** if the inequality is $\le$ or $\ge$ (the line is included), and **dashed** if it is $<$ or $>$ (the line is not included).
2. Choose a **test point** not on the line. The origin $(0, 0)$ is the easiest, unless the line passes through it.
3. Substitute the test point. If the inequality is true, shade the side containing the test point; if false, shade the other side.
:::

:::example A dashed boundary
Show the solution region of $x+2y<4$.

**Solution.**
- Boundary: $x+2y=4$. For $y=0$ we get $x=4$; for $x=0$ we get $y=2$. The line passes through $(4, 0)$ and $(0, 2)$.
- The sign is $<$, so the line is **dashed**.
- Test point $(0, 0)$: $0+0<4$ is true, so we shade the side containing the origin.

:::

:::graph The region $x+2y<4$
alt: The dashed line through (4,0) and (0,2) with the half-plane containing the origin shaded
x: -3..7
y: -3..5
region: x + 2y < 4
open: (4, 0) "(4, 0)" below
open: (0, 2) "(0, 2)" left
:::

:::example A solid boundary, and the origin is not a solution
Show the solution region of $3x-y\ge 3$.

**Solution.**
- Boundary: $3x-y=3$. For $x=0$ we get $y=-3$; for $y=0$ we get $x=1$. The line passes through $(0, -3)$ and $(1, 0)$.
- The sign is $\ge$, so the line is **solid**.
- Test point $(0, 0)$: $3\cdot 0-0\ge 3$ means $0\ge 3$, which is false. So we shade the side that does **not** contain the origin, which is the side below and to the right of the line.
:::

:::graph The region $3x-y\ge 3$
alt: The solid line through (0,-3) and (1,0) with the half-plane not containing the origin shaded
x: -2..4
y: -5..3
region: 3x - y >= 3
point: (0, -3) "(0, -3)" left
point: (1, 0) "(1, 0)" above-left
:::

:::warning Common mistakes
- Using a solid line for $<$ or $>$ (or a dashed line for $\le,\ge$). Points on a dashed line are *not* solutions.
- Using the origin as the test point when the line passes through the origin. Then the substitution gives $0$ and tells you nothing; pick another point, for example $(1, 0)$.
- Shading the side without testing. Never guess; one substitution decides it.
:::

## Modelling real situations

:::example Cinema tickets
Tickets cost $60$ units for an adult and $30$ units for a child. We have at most $300$ units. Let $x$ be the number of adult tickets and $y$ the number of child tickets. (a) Write an inequality. (b) Can we buy $3$ adult and $4$ child tickets? And $4$ adult and $3$ child?

**Solution.**
- (a) The total cost is $60x+30y$, which must be at most $300$: $60x+30y\le 300$. Dividing by $30$ gives $2x+y\le 10$. Also $x\ge 0$, $y\ge 0$ are whole numbers.
- (b) For $(3, 4)$: $2\cdot 3+4=10\le 10$ is true, so we can buy them (the cost is exactly $300$).
- For $(4, 3)$: $2\cdot 4+3=11\le 10$ is false, so we cannot (the cost would be $330$).
:::

:::graph Possible ticket numbers
alt: The triangle bounded by the axes and the line 2x+y=10, shaded; the pair (3,4) lies inside or on the boundary and (4,3) lies outside
x: -1..7
y: -1..12
region: 2x + y <= 10
region: x >= 0
region: y >= 0
point: (3, 4) "(3, 4)" above-right
open: (4, 3) "(4, 3)" right
:::

The real solutions are only the points of the region with whole-number coordinates, because we cannot buy half a ticket.

## Key terms

:::terms
- linear inequality in two variables | bất phương trình bậc nhất hai ẩn
- solution (ordered pair) | nghiệm (cặp số)
- boundary line | đường thẳng biên (bờ)
- half-plane | nửa mặt phẳng
- solution region | miền nghiệm
- test point | điểm kiểm tra
- solid line | nét liền
- dashed line | nét đứt
:::

## Summary

- A solution of $ax+by\le c$ is an ordered pair $(x_0, y_0)$ that makes it true; there are infinitely many.
- The line $ax+by=c$ splits the plane into two half-planes; the solution region is one of them (plus the line when the sign is $\le$ or $\ge$).
- Use a solid line for $\le,\ge$ and a dashed line for $<,>$.
- Test a point not on the line (usually the origin) to choose the side to shade.
- In real problems, translate the limit into an inequality and keep only the points that make sense (whole numbers, not negative).

## Practice

:::practice
1. Which of $(2, -1)$, $(0, 3)$, $(6, 1)$ are solutions of $x-2y\ge 4$?
2. Which of the following are linear inequalities in two variables? (a) $2x-y<1$, (b) $x^2+y\ge 0$, (c) $3x>5$, (d) $x+y+z\le 1$.
3. For each inequality, say whether the boundary line is solid or dashed: (a) $y>2x-1$, (b) $x+y\le 3$, (c) $2x-3y\ge 6$, (d) $x<-1$.
4. Describe the solution region of $2x-y\le 4$: give two points of the boundary line, its type, the test point and the side to shade.
5. Describe the solution region of $x-y\ge 0$. (The line passes through the origin, so choose another test point.)
6. Which of the points $A(1, 1)$, $B(-2, 3)$, $C(4, -1)$ satisfy $3x+2y>5$?
7. A phone plan costs $2000$ per minute of calls and $500$ per text message. Mai has at most $40000$. Let $x$ be the minutes and $y$ the messages. Write an inequality, then decide whether she can use $15$ minutes and $20$ messages, and whether $18$ minutes and $10$ messages.
8. For which values of $m$ is the pair $(1, m)$ a solution of $2x-y>3$?
9. Challenge. Student tickets cost $20$ units and adult tickets cost $50$ units. A group has at most $200$ units and must buy at least $2$ adult tickets. Write the inequalities, and find the largest total number of people in the group.
10. Challenge. Find an inequality of the form $ax+by\le c$ whose boundary line passes through $(0, 2)$ and $(3, 0)$ and whose solution region contains the origin.
:::

:::solution Show solutions
1. Compute $x-2y$. $(2, -1)$: $2+2=4\ge 4$, yes. $(0, 3)$: $0-6=-6\ge 4$, no. $(6, 1)$: $6-2=4\ge 4$, yes.
2. (a) Yes. (b) No, $x^2$ is not linear. (c) Yes, it has the form $ax+by>c$ with $a=3$, $b=0$. (d) No, it has three variables.
3. (a) Dashed ($>$). (b) Solid ($\le$). (c) Solid ($\ge$). (d) Dashed ($<$); the line is the vertical line $x=-1$.
4. Boundary $2x-y=4$ passes through $(2, 0)$ and $(0, -4)$. The sign is $\le$, so it is solid. Test $(0, 0)$: $0\le 4$ is true, so shade the side containing the origin.
5. Boundary $x-y=0$ (the line $y=x$), solid. Test point $(1, 0)$: $1-0=1\ge 0$ is true. Shade the side containing $(1, 0)$, that is, the half-plane below the line $y=x$.
6. $A$: $3+2=5>5$ false. $B$: $-6+6=0>5$ false. $C$: $12-2=10>5$ true. Only $C$.
7. The cost is $2000x+500y\le 40000$; dividing by $500$: $4x+y\le 80$. For $(15, 20)$: $60+20=80\le 80$, true, so she can. For $(18, 10)$: $72+10=82\le 80$, false, so she cannot.
8. Substitute: $2\cdot 1-m>3$, so $-m>1$, so $m<-1$.
9. Let $x$ be the student tickets and $y$ the adult tickets. Then $20x+50y\le 200$, that is $2x+5y\le 20$, with $y\ge 2$ and $x\ge 0$ whole numbers. For $y=2$: $2x\le 10$, so $x\le 5$ and the total is at most $7$. For $y=3$: $2x\le 5$, so $x\le 2$, total $5$. For $y=4$: $x=0$, total $4$. The largest total is $7$ people ($5$ students, $2$ adults).
10. The line through $(0, 2)$ and $(3, 0)$ is $\dfrac{x}{3}+\dfrac{y}{2}=1$, that is $2x+3y=6$. At the origin $2\cdot 0+3\cdot 0=0\le 6$, so the origin lies on the "$\le$" side. The inequality is $2x+3y\le 6$.
:::
