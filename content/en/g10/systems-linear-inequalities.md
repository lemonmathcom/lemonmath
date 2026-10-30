---
title: Systems of linear inequalities in two variables
description: Find the solution region of a system as an intersection of half-planes, locate its vertices, and use them to maximise or minimise a quantity.
minutes: 25
---

:::goals
- Decide whether an ordered pair is a solution of a system of linear inequalities.
- Draw the solution region of a system as the intersection of half-planes and find the vertices of a polygon region.
- Maximise or minimise $ax+by$ over a polygon region by comparing its values at the vertices.
- Solve a simple production or diet problem with two unknowns.
:::

A school club wants to sell as much as possible, but it has limited time, limited ingredients and limited stalls. Every limit is one inequality, and all the limits must hold *at the same time*. Together they form a **system**. In this lesson we draw what the system allows and then pick the best choice.

## Systems and their solution region

:::definition System of linear inequalities
A **system of linear inequalities in two variables** is a set of two or more inequalities of the form $ax+by\le c$ (or $<,\ge,>$) in the same unknowns $x, y$.

A **solution** of the system is an ordered pair $(x_0, y_0)$ that satisfies **every** inequality. The set of all solutions, drawn in the plane, is the **solution region** of the system.
:::

Each inequality gives a half-plane (see [Linear inequalities in two variables](lesson:linear-inequality-two-variables)). A pair solves the system only if it lies in all the half-planes, so:

> the solution region of a system is the **intersection** of the solution regions of its inequalities.

The region is often a polygon. Its corners are called **vertices**; each vertex is where two boundary lines meet.

:::example Drawing a region and testing points
Consider the system
$$\begin{cases} x\ge 0\\ y\ge 0\\ x+y\le 4\\ x\le 3 \end{cases}$$
(a) Draw its solution region and find the vertices. (b) Are $(1, 2)$, $(3, 2)$, $(-1, 1)$ solutions?

**Solution.**
- (a) $x\ge 0$ is the half-plane to the right of the $y$-axis, $y\ge 0$ the one above the $x$-axis, $x+y\le 4$ the one below the line $x+y=4$ (test point $(0, 0)$), and $x\le 3$ the one to the left of the line $x=3$. The region is where all four overlap.
- Vertices: $(0, 0)$ (the two axes); $(3, 0)$ ($y=0$ and $x=3$); $(3, 1)$ ($x=3$ and $x+y=4$ give $y=1$); $(0, 4)$ ($x=0$ and $x+y=4$).
- (b) $(1, 2)$: $1\ge 0$, $2\ge 0$, $1+2=3\le 4$, $1\le 3$, all true, so it is a solution. $(3, 2)$: $3+2=5\le 4$ is false, so it is not. $(-1, 1)$: $-1\ge 0$ is false, so it is not.
:::

:::graph The region of the system
alt: A four-sided polygon with vertices (0, 0), (3, 0), (3, 1) and (0, 4), shaded
x: -1..6
y: -1..6
region: x >= 0
region: y >= 0
region: x + y <= 4
region: x <= 3
point: (0, 0) "(0, 0)" below-left
point: (3, 0) "(3, 0)" below-right
point: (3, 1) "(3, 1)" right
point: (0, 4) "(0, 4)" left
:::

:::warning Common mistakes
- Shading each inequality separately and then taking the *union*. A system needs the *intersection*: only the part shaded by all inequalities.
- Forgetting an inequality such as $x\ge 0$, $y\ge 0$ that comes from the real situation (you cannot make a negative number of items).
- Taking a "vertex" that does not satisfy all the inequalities. Always check that a corner point lies in the region.
:::

## Optimising over a polygon region

Suppose we want the largest (or smallest) value of $F=ax+by$ over a polygon region. For each number $k$, the points with $F=k$ form a line, and all these lines are parallel. Sliding the line across the polygon, the last point where it touches the polygon is a corner.

:::theorem Vertex rule
If the solution region of a system is a bounded polygon, then $F=ax+by$ reaches its largest value and its smallest value at **vertices** of the polygon.
:::

So we only need to: (1) find the vertices, (2) compute $F$ at each, (3) compare.

:::example Which products to make
A workshop makes bracelets ($x$ per day) and necklaces ($y$ per day). A bracelet needs $2$ units of beads, a necklace needs $1$ unit, and there are $10$ units of beads per day. A bracelet needs $1$ hour of work, a necklace needs $2$ hours, and there are $8$ hours per day. Profit is $30$ per bracelet and $40$ per necklace (in thousands). (a) Write the system. (b) Find the vertices of the region. (c) Find the daily plan with the largest profit.

**Solution.**
- (a) Beads: $2x+y\le 10$. Time: $x+2y\le 8$. Also $x\ge 0$, $y\ge 0$. The profit is $F=30x+40y$.
- (b) The region is bounded by the axes and the two lines. Vertices:
  - $(0, 0)$ the origin;
  - $(5, 0)$: $y=0$ in $2x+y=10$;
  - $(0, 4)$: $x=0$ in $x+2y=8$;
  - the meeting of $2x+y=10$ and $x+2y=8$: from the first $y=10-2x$; substituting, $x+20-4x=8$, so $x=4$, $y=2$. This gives $(4, 2)$.
- (c) Compute $F$: $F(0, 0)=0$, $F(5, 0)=150$, $F(0, 4)=160$, $F(4, 2)=120+80=200$.
- The largest value is $200$ at $(4, 2)$: make $4$ bracelets and $2$ necklaces per day for a profit of $200$ thousand.
:::

:::graph The production region
alt: A four-sided polygon with vertices (0, 0), (5, 0), (4, 2) and (0, 4), shaded
x: -1..7
y: -1..6
region: 2x + y <= 10
region: x + 2y <= 8
region: x >= 0
region: y >= 0
point: (0, 0) "(0, 0)" below-left
point: (5, 0) "(5, 0)" below
point: (4, 2) "(4, 2)" above-right
point: (0, 4) "(0, 4)" left
:::

:::example A diet at the lowest cost
A meal plan uses $x$ servings of dish A and $y$ servings of dish B. The meal needs at least $6$ units of protein: $2x+y\ge 6$, and at least $6$ units of fibre: $x+2y\ge 6$. Each dish may be used at most $5$ times: $x\le 5$, $y\le 5$. A serving of A costs $3$ and a serving of B costs $4$ (in thousands). Find the cheapest plan.

**Solution.**
- Cost: $F=3x+4y$. The region is bounded by the four lines $2x+y=6$, $x+2y=6$, $x=5$, $y=5$ (with $x,y\ge 0$ automatically true here).
- Vertices:
  - $2x+y=6$ and $x+2y=6$: subtracting gives $x-y=0$, so $x=y=2$. Vertex $(2, 2)$.
  - $2x+y=6$ and $y=5$: $x=0.5$. Vertex $(0.5, 5)$.
  - $x+2y=6$ and $x=5$: $y=0.5$. Vertex $(5, 0.5)$.
  - $x=5$ and $y=5$: vertex $(5, 5)$.
- Costs: $F(2, 2)=14$, $F(0.5, 5)=1.5+20=21.5$, $F(5, 0.5)=15+2=17$, $F(5, 5)=35$.
- The smallest cost is $14$ thousand at $(2, 2)$: two servings of each dish.
:::

:::graph The diet region
alt: A four-sided polygon with vertices (2, 2), (0.5, 5), (5, 5) and (5, 0.5), shaded
x: -1..7
y: -1..7
region: 2x + y >= 6
region: x + 2y >= 6
region: x <= 5
region: y <= 5
point: (2, 2) "(2, 2)" below-left
point: (0.5, 5) "(0.5, 5)" above-left
point: (5, 5) "(5, 5)" above-right
point: (5, 0.5) "(5, 0.5)" below-right
:::

## Key terms

:::terms
- system of inequalities | hệ bất phương trình
- solution of a system | nghiệm của hệ
- solution region | miền nghiệm
- intersection of half-planes | giao của các nửa mặt phẳng
- polygon region | miền đa giác
- vertex | đỉnh
- objective (to maximise) | biểu thức cần tối ưu
- maximum / minimum | giá trị lớn nhất / nhỏ nhất
:::

## Summary

- A solution of a system satisfies all the inequalities; the solution region is the intersection of the half-planes.
- To test a pair, substitute it into every inequality; one failure is enough to reject it.
- The vertices of the region are the intersections of pairs of boundary lines that satisfy all the other inequalities.
- Over a bounded polygon, $ax+by$ attains its maximum and minimum at vertices: compute it at each vertex and compare.
- In real problems add the natural conditions ($x\ge 0$, $y\ge 0$) and read the answer in context.

## Practice

:::practice
1. Which of $(2, 1)$, $(0, 0)$, $(5, 1)$ are solutions of the system $x+y\ge 2,\ x-y\le 3$?
2. Which of $(1, 1)$, $(2, 0)$, $(0, 2)$ are solutions of $2x+y<4,\ x-y>-1$?
3. Describe the region of $x\ge 0,\ y\ge 0,\ x+y\le 3$: name the shape, give its vertices, and find the largest value of $2x+y$ on it.
4. The region of $1\le x\le 4,\ 0\le y\le 3$ is a rectangle. Give its vertices and find the largest and smallest values of $2x+y$ on it.
5. Find the vertices of the region $x\ge 0,\ y\ge 0,\ x+y\le 6,\ x+3y\le 12$, and the largest value of $5x+4y$ on it.
6. Does the system $x+y\le 1,\ x+y\ge 3$ have a solution? Explain.
7. How many pairs of whole numbers $(x, y)$ satisfy $x\ge 0,\ y\ge 0,\ x+y\le 4$?
8. A club sells $x$ sandwiches and $y$ drinks per day. Making them takes at most $30$ units of time in total ($x+y\le 30$), and it can prepare at most $20$ sandwiches and at most $20$ drinks. The profit is $4$ per sandwich and $3$ per drink (in thousands). Find the vertices of the region and the plan with the largest profit.
9. Challenge. Write a system of inequalities whose solution region is the triangle with vertices $(0, 0)$, $(4, 0)$, $(0, 2)$.
10. Challenge. On the region of exercise 5, find the largest and smallest values of $F=x-y$.
:::

:::solution Show solutions
1. $(2, 1)$: $3\ge 2$ and $1\le 3$, both true: a solution. $(0, 0)$: $0\ge 2$ is false: not a solution. $(5, 1)$: $6\ge 2$ is true but $4\le 3$ is false: not a solution.
2. $(1, 1)$: $3<4$ and $0>-1$ are true: a solution. $(2, 0)$: $4<4$ is false. $(0, 2)$: $2<4$ is true but $-2>-1$ is false. Only $(1, 1)$.
3. A triangle with vertices $(0, 0)$, $(3, 0)$, $(0, 3)$. Values of $2x+y$: $0$, $6$, $3$. The largest value is $6$, at $(3, 0)$.
4. The vertices are $(1, 0)$, $(4, 0)$, $(4, 3)$, $(1, 3)$. Values of $2x+y$: $2$, $8$, $11$, $5$. The largest is $11$ at $(4, 3)$ and the smallest is $2$ at $(1, 0)$.
5. Vertices: $(0, 0)$; $(6, 0)$; $(0, 4)$ (from $x+3y=12$); and the meeting of $x+y=6$ and $x+3y=12$: subtracting, $2y=6$, $y=3$, $x=3$, so $(3, 3)$. Values of $5x+4y$: $0$, $30$, $16$, $27$. The largest is $30$ at $(6, 0)$.
6. No. A pair would need $x+y\le 1$ and $x+y\ge 3$, so $3\le x+y\le 1$, which is impossible. The two half-planes do not overlap; the region is empty.
7. Count by the value of $x$: $x=0$ gives $y=0,\dots,4$ ($5$ pairs); $x=1$: $4$; $x=2$: $3$; $x=3$: $2$; $x=4$: $1$. Total $5+4+3+2+1=15$.
8. The system is $x\ge 0,\ y\ge 0,\ x+y\le 30,\ x\le 20,\ y\le 20$. Vertices: $(0, 0)$, $(20, 0)$, $(20, 10)$ ($x=20$ in $x+y=30$), $(10, 20)$ ($y=20$ in $x+y=30$), $(0, 20)$. Profit $F=4x+3y$: $0$, $80$, $110$, $100$, $60$. The largest profit is $110$ thousand with $20$ sandwiches and $10$ drinks.
9. The triangle lies in the first quadrant: $x\ge 0$, $y\ge 0$. The side from $(4, 0)$ to $(0, 2)$ lies on $x+2y=4$, and the origin satisfies $x+2y\le 4$. So the system is $x\ge 0,\ y\ge 0,\ x+2y\le 4$. (Check: $(4, 0)$ and $(0, 2)$ both give $4\le 4$.)
10. The vertices are $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$ and $F=x-y$ takes the values $0$, $6$, $0$, $-4$. The largest value is $6$ at $(6, 0)$ and the smallest is $-4$ at $(0, 4)$.
:::
