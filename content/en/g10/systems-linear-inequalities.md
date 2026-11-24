---
title: Systems of linear inequalities in two variables
description: Find the solution region of a system as an intersection of half-planes, locate its vertices, and use them to maximise or minimise a quantity.
minutes: 30
---

:::goals
- Decide whether an ordered pair is a solution of a system of linear inequalities.
- Draw the solution region of a system as the intersection of half-planes and find the vertices of a polygonal region.
- Maximise or minimise $ax+by$ over a polygonal region by comparing its values at the vertices.
- Solve a simple production or diet problem with two unknowns.
:::

The school craft club makes bracelets and necklaces to raise money. Each day the club has $10$ units of beads and $8$ hours of work. A bracelet needs $2$ units of beads and $1$ hour; a necklace needs $1$ unit of beads and $2$ hours. Each bracelet makes a profit of $30$ thousand dong and each necklace $40$ thousand dong. How many of each should the club make to earn the most?

Worrying only about beads would be easy, and so would worrying only about hours. The hard part is that **both** limits must hold **at the same time**: more bracelets use up beads, more necklaces use up hours. When several conditions must all be true together, we have a system of inequalities. By the end of this lesson you will find the most profitable plan without guessing.

## Systems and their solution region

### Trying a few plans

Before any rule, let us simply try things, the way someone in the club would. Let $x$ be the number of bracelets and $y$ the number of necklaces made in one day. The beads used are $2x+y$ units and the work time is $x+2y$ hours. Here are a few plans:

| Plan $(x, y)$ | Beads $2x+y\le 10$? | Hours $x+2y\le 8$? | Possible? |
|---|---|---|---|
| $(4, 2)$ | $10$: yes | $8$: yes | yes |
| $(5, 1)$ | $11$: no | $7$: yes | no |
| $(2, 3)$ | $7$: yes | $8$: yes | yes |
| $(3, 3)$ | $9$: yes | $9$: no | no |

Look at the two plans that fail: $(5, 1)$ has enough hours but not enough beads, and $(3, 3)$ is the other way round. Missing just one condition is enough to sink a plan. To work, it must satisfy **all** the conditions. That is exactly what the word "system" means.

:::definition System of linear inequalities in two variables
A **system of linear inequalities in two variables** consists of two or more linear inequalities in the same unknowns $x, y$.

A **solution** of the system is a pair $(x_0, y_0)$ that satisfies **every** inequality of the system. The set of points whose coordinates are solutions is the **solution region** of the system.
:::

You already know that each inequality gives a half-plane (look back at [Linear inequalities in two variables](lesson:linear-inequality-two-variables) if you need to). A point is in the solution region of the system when it lies in **every** one of those half-planes, with none left out. Put briefly: the solution region of the system is the **intersection** of the solution regions of the separate inequalities.

That common part is often a polygon. Its corners are called **vertices**; each vertex is where two boundary lines cross. We will soon see why the vertices matter so much. For now, we start with the smallest job: checking whether a pair is a solution.

:::example Testing solutions of a system
Which of $(2, 1)$, $(4, 1)$, $(0, 5)$, $(2, 3)$ are solutions of the system
$$\begin{cases} x-y\le 2\\ x+2y\le 8 \end{cases}?$$

**Solution.** We substitute each pair into both inequalities; a single false inequality rules the pair out:

$$\begin{aligned} (2, 1)&:\ 2-1=1\le 2,\quad 2+2=4\le 8 &&\text{(both true)},\\ (4, 1)&:\ 4-1=3\le 2 &&\text{(false)},\\ (0, 5)&:\ 0-5=-5\le 2,\quad 0+10=10\le 8 &&\text{(second one false)},\\ (2, 3)&:\ 2-3=-1\le 2,\quad 2+6=8\le 8 &&\text{(both true)}. \end{aligned}$$

So $(2, 1)$ and $(2, 3)$ are solutions of the system; $(4, 1)$ and $(0, 5)$ are not.
:::

Checking points one at a time works, but the region has infinitely many points. To see all of them, we draw it. The next example has four inequalities, and we deal with them one by one.

:::example Drawing the region and finding the vertices
Draw the solution region of the system
$$\begin{cases} x\ge 0\\ y\ge 0\\ x+y\le 4\\ x\le 3 \end{cases}$$
and find its vertices.

**Solution.** We find each half-plane and then take the common part.
- $x\ge 0$: right of the $y$-axis; $y\ge 0$: above the $x$-axis.
- $x+y\le 4$: testing $O$ gives $0\le 4$, true, so we take the side of the line $x+y=4$ containing $O$.
- $x\le 3$: left of the vertical line $x=3$.

The vertices are the intersections of neighbouring boundary lines:

$$\begin{aligned} x=0,\ y=0 &\Rightarrow (0, 0),\\ y=0,\ x=3 &\Rightarrow (3, 0),\\ x=3,\ x+y=4 &\Rightarrow y=1,\ \text{giving } (3, 1),\\ x=0,\ x+y=4 &\Rightarrow y=4,\ \text{giving } (0, 4). \end{aligned}$$

So the solution region is the quadrilateral with vertices $(0, 0)$, $(3, 0)$, $(3, 1)$, $(0, 4)$, sides included.
:::

:::graph Solution region of the system in Example 2
alt: A shaded quadrilateral with vertices (0, 0), (3, 0), (3, 1) and (0, 4)
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

In that example the vertices could almost be read off the picture, because several boundary lines were vertical or horizontal. When both boundary lines are slanted, the picture is hard to read exactly, so we solve a system of two equations to be sure.

:::example A vertex from a system of two equations
Find the vertices of the solution region of the system
$$\begin{cases} x+y\le 5\\ x-y\ge -1\\ y\ge 1 \end{cases}$$

**Solution.** The region is a triangle, and each vertex is where two of the three boundary lines meet. Substitute $y=1$ into the other two lines:

$$x+1=5\Rightarrow x=4,\qquad x-1=-1\Rightarrow x=0.$$

This gives the vertices $(4, 1)$ and $(0, 1)$. The third vertex is where $x+y=5$ meets $x-y=-1$. Add the two equations:

$$2x=4\Rightarrow x=2,\qquad y=5-2=3.$$

So the solution region is the triangle with vertices $(0, 1)$, $(4, 1)$, $(2, 3)$.

**Check.** The vertex $(2, 3)$ satisfies the remaining inequality: $y=3\ge 1$, true.
:::

:::graph Solution region of the system in Example 3
alt: A shaded triangle with vertices (0, 1), (4, 1) and (2, 3)
x: -2..6
y: -1..5
region: x + y <= 5
region: x - y >= -1
region: y >= 1
point: (0, 1) "(0, 1)" below-left
point: (4, 1) "(4, 1)" below-right
point: (2, 3) "(2, 3)" above
:::

:::warning Common mistakes
These three slips catch many students, especially in a hurry.
- **Wrong:** shading each inequality separately and keeping every shaded spot. **Why it is wrong:** that gives the *union*, not the intersection; the point $(0, 5)$ in Example 1 satisfies the first inequality but is not a solution of the system. **Right:** keep only the common part (the *intersection*) of all the half-planes.
- **Wrong:** forgetting $x\ge 0$, $y\ge 0$ in real problems. **Why it is wrong:** nobody can make $-2$ bracelets. **Right:** always add the natural conditions on the unknowns, even when the problem does not write them.
- **Wrong:** treating every intersection of two boundary lines as a vertex. **Why it is wrong:** in Example 2, the line $x+y=4$ meets the $x$-axis at $(4, 0)$, but $4\le 3$ is false, so $(4, 0)$ is outside the region. **Right:** once you have an intersection, test it in all the other inequalities.
:::

## Optimising over a polygonal region

Now back to the craft club. The profit is $F=30x+40y$ (thousand dong). At $(2, 3)$ the profit is $180$, at $(4, 2)$ it is $200$. But the region has infinitely many points, and we cannot try them all. So how do we know which one makes $F$ largest?

**Why is it enough to look at the vertices?** Picture it like this. For each number $k$, the points with $30x+40y=k$ lie on a line, and as $k$ changes these lines always stay parallel. Increasing $k$ is like pushing a ruler steadily in one direction. Keep pushing, and the last place where the ruler still touches the polygon is a vertex (or a whole side; then both end vertices of that side give the same value). So instead of infinitely many points, we only need to try a few vertices.

:::theorem The vertex rule
If the solution region of a system of linear inequalities in two variables is a polygon, then the expression $F=ax+by$ reaches its maximum and its minimum over the region at **vertices** of the polygon.
:::

That makes the method tidy: (1) find the vertices, (2) compute $F$ at each vertex, (3) compare. The craft club problem has quite a lot of data, so we go slowly in four steps and miss nothing.

:::example How many of each should the club make?
Solve the craft club problem from the start of the lesson.

**Solution.**

*Understand.* The unknowns are the number of bracelets $x$ and of necklaces $y$ per day. Limits: $10$ units of beads and $8$ hours of work. We want the largest profit $F=30x+40y$.

*Plan.* Write the system, find the vertices of its region, then compute $F$ at each vertex.

*Solve.* The system is
$$\begin{cases} 2x+y\le 10\\ x+2y\le 8\\ x\ge 0,\ y\ge 0. \end{cases}$$
Three vertices lie on the axes: $(0, 0)$, $(5, 0)$ (put $y=0$ in $2x+y=10$), $(0, 4)$ (put $x=0$ in $x+2y=8$). The fourth vertex is where the two slanted lines meet. From $2x+y=10$ we get $y=10-2x$; substitute into the other equation:
$$x+2(10-2x)=8\iff -3x=-12\iff x=4,\qquad y=10-8=2.$$
The values of $F$ at the vertices:
$$F(0, 0)=0,\quad F(5, 0)=150,\quad F(0, 4)=160,\quad F(4, 2)=120+80=200.$$

*Look back.* The vertex $(4, 2)$ uses up all the beads ($8+2=10$) and all the hours ($4+4=8$), which is reasonable for a best plan.

So the club should make $4$ bracelets and $2$ necklaces a day, for the largest profit of $200$ thousand dong.
:::

:::graph Solution region of the craft club problem
alt: A shaded quadrilateral with vertices (0, 0), (5, 0), (4, 2) and (0, 4)
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

The vertex rule does more than find the biggest profit. When we want a **minimum**, such as the lowest cost, we do exactly the same, and simply pick the vertex with the smallest value.

:::example The cheapest meal
A meal uses $x$ portions of dish A and $y$ portions of dish B. It needs at least $6$ units of protein ($2x+y\ge 6$) and at least $6$ units of fibre ($x+2y\ge 6$); at most $5$ portions of each dish are used. A portion of A costs $3$ thousand dong and a portion of B costs $4$ thousand dong. Find the cheapest meal.

**Solution.** The cost is $F=3x+4y$, and we want its minimum over the region of the system $2x+y\ge 6$, $x+2y\ge 6$, $x\le 5$, $y\le 5$. We find the four vertices; for the first one, subtract the two equations:

$$\begin{aligned} 2x+y=6,\ x+2y=6 &\Rightarrow x-y=0\Rightarrow (2, 2),\\ 2x+y=6,\ y=5 &\Rightarrow x=0.5\Rightarrow (0.5, 5),\\ x+2y=6,\ x=5 &\Rightarrow y=0.5\Rightarrow (5, 0.5),\\ x=5,\ y=5 &\Rightarrow (5, 5). \end{aligned}$$

The values of $F$:

$$F(2, 2)=14,\quad F(0.5, 5)=21.5,\quad F(5, 0.5)=17,\quad F(5, 5)=35.$$

So the lowest cost is $14$ thousand dong, with $2$ portions of A and $2$ portions of B.
:::

:::graph Solution region of the diet problem
alt: A shaded quadrilateral with vertices (2, 2), (0.5, 5), (5, 5) and (5, 0.5)
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
- system of linear inequalities in two variables | hệ bất phương trình bậc nhất hai ẩn
- solution of a system | nghiệm của hệ
- solution region | miền nghiệm
- intersection of half-planes | giao của các nửa mặt phẳng
- polygonal region | miền đa giác
- vertex | đỉnh
- objective function | biểu thức cần tối ưu
- maximum / minimum | giá trị lớn nhất / nhỏ nhất
:::

## Summary

- A solution of a system satisfies **every** inequality; the solution region is the **intersection** of the half-planes.
- Testing a pair: substitute into each inequality; one false inequality rules it out.
- Vertex = intersection of two boundary lines that satisfies all the other inequalities. Two slanted lines: solve a system of two equations.
- Over a polygonal region, $F=ax+by$ has its maximum and minimum at vertices: compute $F$ at each vertex and compare.
- Real problems: name the unknowns, add $x\ge 0$, $y\ge 0$, and answer with a sentence and units.

The opening question looked as if it needed endless trial and error, yet comparing four vertices was enough: $4$ bracelets and $2$ necklaces give the most profit. Remember just one thing: the region is the common part, and the answer sits at a vertex.

## Practice

Each exercise reminds you what you need and gives some steps to start. Have a go yourself first; whenever there is a region, sketch it on paper, and the picture will show you which vertices to find. Then open the solution and compare.

:::exercise
Which of $(2, 1)$, $(0, 0)$, $(5, 1)$ are solutions of the system $\begin{cases} x+y\ge 2\\ x-y\le 3 \end{cases}$?

::hint
**What you need:** a solution of a system satisfies every inequality of the system.

**Steps:**
1. Compute $x+y$ and $x-y$ for each pair.
2. Rule out any pair that makes at least one inequality false.

::solution
A pair $(x, y)$ is a solution of the system when it satisfies both inequalities at the same time. We substitute the coordinates of each pair into $x+y\ge2$ and $x-y\le3$.

For $(2, 1)$: $x+y=3\ge2$ (true) and $x-y=1\le3$ (true). Both inequalities hold.

For $(0, 0)$: $x+y=0\ge2$ is false. This pair fails the first inequality.

For $(5, 1)$: $x+y=6\ge2$ (true) but $x-y=4\le3$ is false. This pair fails the second inequality.

So among the three given pairs, only $(2, 1)$ is a solution of the system.

**Answer.** Only $(2, 1)$.
:::

:::exercise
Does the system $\begin{cases} x+y\le 1\\ x+y\ge 3 \end{cases}$ have a solution? Explain.

::hint
**What you need:** the solution region of a system is the intersection of half-planes, and an intersection can be empty.

**Steps:**
1. Suppose $(x, y)$ is a solution and write the condition on the sum $x+y$.
2. Ask whether that condition can happen.

::solution
Suppose the system has a solution $(x, y)$. Then $(x, y)$ satisfies both $x+y\le1$ and $x+y\ge3$, that is,
$$3\le x+y\le1.$$

This is impossible because $3>1$. Hence there is no pair $(x, y)$ satisfying both inequalities.

Geometrically, the boundary lines $x+y=1$ and $x+y=3$ are parallel; the half-plane $x+y\le1$ and the half-plane $x+y\ge3$ lie on opposite sides of these lines, so they have no point in common.

So the system has no solution (the solution region is empty).

**Answer.** The system has no solution (the region is empty).
:::

:::exercise
The solution region of the system $1\le x\le 4$, $0\le y\le 3$ is a rectangle. Give its vertices and find the maximum and minimum of $F=2x+y$ over it.

::hint
**What you need:** the vertex rule.

**Steps:**
1. The vertices have $x$-coordinate $1$ or $4$ and $y$-coordinate $0$ or $3$.
2. Compute $F$ at the four vertices.

::solution
The solution region of $1\le x\le4$, $0\le y\le3$ is the rectangle bounded by the lines $x=1$, $x=4$, $y=0$, $y=3$. Its four vertices are $(1, 0)$, $(4, 0)$, $(4, 3)$, $(1, 3)$.

A linear function $F=2x+y$ attains its maximum and minimum over a polygonal region at the vertices of the region. We evaluate $F$ at each vertex:
$$\begin{aligned} F(1, 0)&=2\cdot1+0=2,\\ F(4, 0)&=2\cdot4+0=8,\\ F(4, 3)&=2\cdot4+3=11,\\ F(1, 3)&=2\cdot1+3=5. \end{aligned}$$

Comparing the four values $2$, $8$, $11$, $5$, the largest is $11$ and the smallest is $2$.

So $F$ has maximum $11$ at $(4, 3)$ and minimum $2$ at $(1, 0)$.

**Answer.** Maximum $11$ at $(4, 3)$; minimum $2$ at $(1, 0)$.
:::

:::exercise
Find the vertices of the solution region of the system $x\ge 0$, $y\ge 0$, $x+y\le 6$, $x+3y\le 12$, then find the maximum of $F=5x+4y$ over it.

::hint
**What you need:** a vertex is an intersection of two boundary lines that satisfies all the other inequalities.

**Steps:**
1. Find the vertices on the two axes.
2. Solve $x+y=6$, $x+3y=12$ for the fourth vertex.
3. Compute $F$ at the vertices.

::solution
The solution region of $x\ge0$, $y\ge0$, $x+y\le6$, $x+3y\le12$ is a polygon; we find its vertices.

On the $x$-axis ($y=0$): the inequalities give $x\le6$ and $x\le12$, so $x\le6$. We get the vertices $(0, 0)$ and $(6, 0)$.

On the $y$-axis ($x=0$): the inequalities give $y\le6$ and $3y\le12$, that is $y\le4$, so $y\le4$. We get the vertex $(0, 4)$.

The intersection of the lines $x+y=6$ and $x+3y=12$: subtracting the first equation from the second gives $2y=6$, so $y=3$ and then $x=6-3=3$. The point $(3, 3)$ has $x\ge0$, $y\ge0$, so it is a vertex of the region.

So the region is the quadrilateral with vertices $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$.

The function $F=5x+4y$ attains its maximum at a vertex. We compute:
$$F(0, 0)=0,\quad F(6, 0)=30,\quad F(0, 4)=16,\quad F(3, 3)=15+12=27.$$

The largest of $0$, $30$, $16$, $27$ is $30$.

So the vertices are $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$, and the maximum of $F$ is $30$, attained at $(6, 0)$.

**Answer.** The vertices are $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$; the maximum of $F$ is $30$, at $(6, 0)$.
:::

:::exercise
The system $\begin{cases} x\ge 0,\ y\ge 0\\ 2x+y\le 8\\ y\le 4 \end{cases}$ has solution region $D$. Is each claim true or false?

a) The pair $(1, 5)$ is a solution of the system.

b) $D$ is a quadrilateral, and $(2, 4)$ is one of its vertices.

c) The maximum of $x+y$ over $D$ is $6$.

d) The minimum of $x-y$ over $D$ is $-2$.

::hint
**What you need:** a solution satisfies every inequality; the vertex rule.

**Steps:**
1. Substitute $(1, 5)$ into each inequality.
2. Find the vertices: two on the axes, where $y=4$ meets the $y$-axis, and where $y=4$ meets $2x+y=8$.
3. Compute $x+y$ and $x-y$ at every vertex.

::solution
First we find the vertices of the solution region $D$ of $x\ge0$, $y\ge0$, $2x+y\le8$, $y\le4$.

On the $x$-axis ($y=0$): $2x\le8$, so $x\le4$; we get the vertices $(0, 0)$ and $(4, 0)$. The line $y=4$ meets $2x+y=8$ where $2x+4=8$, that is $x=2$; we get the vertex $(2, 4)$. The line $y=4$ meets the $y$-axis at $(0, 4)$ (which satisfies $2\cdot0+4=4\le8$), the remaining vertex. So $D$ has four vertices $(0, 0)$, $(4, 0)$, $(2, 4)$, $(0, 4)$.

a) **False.** For the pair $(1, 5)$, the inequality $y\le4$ becomes $5\le4$, which is false. So $(1, 5)$ is not a solution of the system.

b) **True.** As shown above, $D$ has four vertices $(0, 0)$, $(4, 0)$, $(2, 4)$, $(0, 4)$, so it is a quadrilateral; the vertex $(2, 4)$ comes from putting $y=4$ in $2x+y=8$.

c) **True.** The maximum of $x+y$ is attained at a vertex. At the four vertices, $x+y$ equals $0$, $4$, $6$, $4$; the largest is $6$.

d) **False.** The minimum of $x-y$ is also attained at a vertex. At the four vertices, $x-y$ equals $0$, $4$, $-2$, $-4$; the smallest is $-4$ (at $(0, 4)$), not $-2$.

So statements b), c) are true; statements a), d) are false.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
The club's food stall sells $x$ sandwiches and $y$ cups of juice per day. Preparation time allows at most $30$ items in total ($x+y\le 30$), and the stall can prepare at most $20$ sandwiches and at most $20$ cups of juice. Each sandwich makes $4$ thousand dong profit and each cup $3$ thousand dong. What is the largest profit in one day, in thousand dong?

::hint
**What you need:** the vertex rule; here the region is a pentagon.

**Steps:**
1. Write the system: $x\ge 0$, $y\ge 0$, $x+y\le 30$, $x\le 20$, $y\le 20$.
2. Find the five vertices (put $x=20$, then $y=20$, into $x+y=30$).
3. Compute $F=4x+3y$ at each vertex.

::solution
Let $x$ be the number of sandwiches and $y$ the number of cups of juice sold in a day. The constraints are
$$x\ge0,\quad y\ge0,\quad x\le20,\quad y\le20,\quad x+y\le30.$$

The daily profit (in thousand dong) is $F=4x+3y$. We need the maximum of $F$ over the solution region of this system.

The region is the pentagon with vertices $(0, 0)$, $(20, 0)$, $(20, 10)$, $(10, 20)$, $(0, 20)$. Here $(20, 10)$ is the intersection of $x=20$ with $x+y=30$, and $(10, 20)$ is the intersection of $y=20$ with $x+y=30$.

The values of $F$ at the vertices:
$$\begin{aligned} F(0, 0)&=0,\\ F(20, 0)&=4\cdot20=80,\\ F(20, 10)&=4\cdot20+3\cdot10=110,\\ F(10, 20)&=4\cdot10+3\cdot20=100,\\ F(0, 20)&=3\cdot20=60. \end{aligned}$$

The largest value is $110$, attained at $(20, 10)$. These coordinates are whole numbers, so this plan is achievable.

So the largest daily profit is $110$ thousand dong, obtained by selling $20$ sandwiches and $10$ cups of juice.

**Answer.** $110$.
:::

:::exercise
Mr Hung has $8$ hectares of land for maize and beans, and $30$ million dong to spend on seed and fertiliser. Each hectare of maize costs $5$ million dong and makes $4$ million dong profit; each hectare of beans costs $3$ million dong and makes $3$ million dong profit. How many hectares of each should he plant to make the most profit?

::hint
**What you need:** write a system from the limits (land, money), then use the vertex rule.

**Steps:**
1. Let $x$ be the hectares of maize and $y$ of beans; write $x+y\le 8$, $5x+3y\le 30$, $x, y\ge 0$.
2. Find the vertices, including where $x+y=8$ meets $5x+3y=30$.
3. Compute the profit $F=4x+3y$ at each vertex.

::solution
Let $x$ (ha) be the area planted with maize and $y$ (ha) the area planted with beans. The constraints are
$$x\ge0,\quad y\ge0,\quad x+y\le8\ \text{(land)},\quad 5x+3y\le30\ \text{(money, million dong)}.$$

The profit (in million dong) is $F=4x+3y$. We need the maximum of $F$ over the solution region.

We find the vertices of the region. On the $x$-axis ($y=0$): $x\le8$ and $5x\le30$, so $x\le6$; we get the vertices $(0, 0)$ and $(6, 0)$. On the $y$-axis ($x=0$): $y\le8$ and $3y\le30$, so $y\le8$; we get the vertex $(0, 8)$. The intersection of $x+y=8$ and $5x+3y=30$: substituting $y=8-x$ into the second equation gives $5x+3(8-x)=30$, that is $2x+24=30$, so $x=3$ and $y=5$. Hence the region is the quadrilateral with vertices $(0, 0)$, $(6, 0)$, $(3, 5)$, $(0, 8)$.

The values of $F$ at the vertices:
$$F(0, 0)=0,\quad F(6, 0)=24,\quad F(0, 8)=24,\quad F(3, 5)=12+15=27.$$

The largest value is $27$, attained at $(3, 5)$.

So Mr Hung should plant $3$ hectares of maize and $5$ hectares of beans, and the largest profit is $27$ million dong.

**Answer.** Plant $3$ hectares of maize and $5$ hectares of beans, for the largest profit of $27$ million dong.
:::

:::exercise Challenge
Write a system of linear inequalities in two variables whose solution region is the triangle (sides included) with vertices $(0, 0)$, $(4, 0)$, $(0, 2)$.

::hint
**What you need:** each side of the triangle lies on a boundary line; choose the direction with a point inside the triangle.

**Steps:**
1. Two sides lie on the coordinate axes.
2. Write the equation of the line through $(4, 0)$ and $(0, 2)$.
3. Test the origin to choose the sign.

::solution
The required solution region is the triangle $OAB$ with $O(0, 0)$, $A(4, 0)$, $B(0, 2)$, sides included. We write the inequality for each side.

Side $OA$ lies on the $x$-axis ($y=0$) and side $OB$ lies on the $y$-axis ($x=0$). The triangle lies on the side where $x$ and $y$ are non-negative, so we have $x\ge0$ and $y\ge0$.

Side $AB$ lies on the line through $A(4, 0)$ and $B(0, 2)$. In intercept form its equation is $\dfrac{x}{4}+\dfrac{y}{2}=1$, that is $x+2y=4$.

The origin $O(0, 0)$ lies in the triangle and satisfies $0+2\cdot0=0\le4$, so the half-plane containing the triangle is $x+2y\le4$.

So the required system is $\begin{cases} x\ge0\\ y\ge0\\ x+2y\le4. \end{cases}$

**Answer.** $\begin{cases} x\ge0\\ y\ge0\\ x+2y\le4 \end{cases}$
:::

:::exercise Challenge
Over the solution region of the system $x\ge 0$, $y\ge 0$, $x+y\le 6$, $x+3y\le 12$, find the maximum and minimum of $F=x-y$.

::hint
**What you need:** the vertex rule works with negative coefficients too.

**Steps:**
1. Reuse the vertices found in exercise 4.
2. Compute $x-y$ at each vertex.

::solution
The solution region of $x\ge0$, $y\ge0$, $x+y\le6$, $x+3y\le12$ is the quadrilateral with vertices $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$. (The vertices $(6, 0)$ and $(0, 4)$ lie on the axes; the vertex $(3, 3)$ is the intersection of $x+y=6$ and $x+3y=12$.)

The linear function $F=x-y$ attains its maximum and minimum over this region at the vertices. We compute:
$$F(0, 0)=0,\quad F(6, 0)=6,\quad F(3, 3)=0,\quad F(0, 4)=-4.$$

Comparing $0$, $6$, $0$, $-4$, the largest value is $6$ and the smallest is $-4$.

So $F$ has maximum $6$ at $(6, 0)$ and minimum $-4$ at $(0, 4)$.

**Answer.** Maximum $6$ at $(6, 0)$; minimum $-4$ at $(0, 4)$.
:::

:::exercise
(Revisiting [Sets and set operations](lesson:sets-and-set-operations).) Let $D_1$ be the solution region of $x+y\le 4$ and $D_2$ that of $x-y\ge 0$. For each of the points $A(1, 1)$, $B(1, 2)$, $C(3, 2)$, $E(0, 5)$, say whether it belongs to $D_1\cap D_2$, $D_1\setminus D_2$, $D_2\setminus D_1$, or lies outside $D_1\cup D_2$.

::hint
**What you need:** $D_1\cap D_2$ is the solution region of the system; $D_1\setminus D_2$ consists of the points in $D_1$ but not in $D_2$.

**Steps:**
1. For each point, test $x+y\le 4$ and $x-y\ge 0$ separately.
2. Combine the two results to choose the set.

::solution
A point belongs to $D_1$ when its coordinates satisfy $x+y\le4$, and to $D_2$ when they satisfy $x-y\ge0$. We substitute the coordinates of each point into both inequalities.

For $A(1, 1)$: $x+y=2\le4$ (true) and $x-y=0\ge0$ (true). So $A\in D_1$ and $A\in D_2$, that is $A\in D_1\cap D_2$.

For $B(1, 2)$: $x+y=3\le4$ (true) and $x-y=-1\ge0$ (false). So $B\in D_1$ but $B\notin D_2$, that is $B\in D_1\setminus D_2$.

For $C(3, 2)$: $x+y=5\le4$ (false) and $x-y=1\ge0$ (true). So $C\in D_2$ but $C\notin D_1$, that is $C\in D_2\setminus D_1$.

For $E(0, 5)$: $x+y=5\le4$ (false) and $x-y=-5\ge0$ (false). So $E$ lies in neither $D_1$ nor $D_2$, that is $E\notin D_1\cup D_2$.

So $A\in D_1\cap D_2$; $B\in D_1\setminus D_2$; $C\in D_2\setminus D_1$; $E\notin D_1\cup D_2$.

**Answer.** $A\in D_1\cap D_2$; $B\in D_1\setminus D_2$; $C\in D_2\setminus D_1$; $E\notin D_1\cup D_2$.
:::

## Mini test

:::quiz
::mc NB
Which of these is a system of linear inequalities in two variables?
A. $\begin{cases} x+y\ge 1\\ x^2-y<2 \end{cases}$
B. $\begin{cases} 2x-y\le 3\\ x+5y>0 \end{cases}$
C. $\begin{cases} xy\ge 1\\ x-y<0 \end{cases}$
D. $\begin{cases} x+y=2\\ x-y>1 \end{cases}$
::key B
Both inequalities in B have the form $ax+by<c$ (or $\le$, $>$, $\ge$). Option A contains $x^2$, C contains the product $xy$, and D contains an equation, not an inequality.

::mc TH
Which pair is a solution of the system $\begin{cases} x+y\le 3\\ 2x-y>0 \end{cases}$?
A. $(1, 1)$.
B. $(0, 0)$.
C. $(2, 2)$.
D. $(1, 2)$.
::key A
$(1, 1)$: $2\le 3$ and $1>0$, both true. $(0, 0)$ and $(1, 2)$ give $2x-y=0$, which fails the strict sign "$>$"; $(2, 2)$ gives $x+y=4>3$.

::mc VD
The solution region of the system $x\ge 0$, $y\ge 0$, $x+y\le 5$, $x\le 3$ is a quadrilateral. Which point is **not** a vertex of it?
A. $(3, 2)$.
B. $(0, 5)$.
C. $(5, 0)$.
D. $(3, 0)$.
::key C
$(5, 0)$ is where $x+y=5$ meets the $x$-axis, but $5\le 3$ is false, so this point lies outside the region. The vertices are $(0, 0)$, $(3, 0)$, $(3, 2)$, $(0, 5)$.

::mc TH
The solution region of the system $x\ge 0$, $y\ge 0$, $2x+y\le 8$, $x+3y\le 9$ is the quadrilateral with vertices $(0, 0)$, $(4, 0)$, $(3, 2)$, $(0, 3)$. The maximum of $F=x+2y$ over this region is
A. $6$.
B. $7$.
C. $16$.
D. $4$.
::key B
At the four vertices $F$ equals $0$, $4$, $7$, $6$; the largest is $7$, at $(3, 2)$. The value $16$ is $F(0, 8)$, but $(0, 8)$, where $2x+y=8$ meets the $y$-axis, does not satisfy $x+3y\le 9$.

::tf TH TH VD VD
Let $D$ be the solution region of the system $\begin{cases} x\ge 0,\ y\ge 0\\ x+y\le 4\\ y\le x+2 \end{cases}$
a) The pair $(2, 1)$ is a solution of the system.
b) The point $(1, 3)$ is a vertex of $D$.
c) The maximum of $x+2y$ over $D$ is $8$.
d) The minimum of $y-x$ over $D$ is $-4$.
::key T T F T
The vertices of $D$ are $(0, 0)$, $(4, 0)$, $(1, 3)$, $(0, 2)$. a) True: $3\le 4$ and $1\le 4$. b) True: solving $x+y=4$, $y=x+2$ gives $x=1$, $y=3$. c) False: $x+2y$ at the vertices is $0, 4, 7, 4$, so the maximum is $7$. d) True: $y-x$ at the vertices is $0, -4, 2, 2$.

::sa VD
How many pairs of integers $(x, y)$ satisfy the system $x\ge 0$, $y\ge 0$, $x+y\le 3$?
::key 10
For $x=0, 1, 2, 3$ the number of possible values of $y$ is $4, 3, 2, 1$. In total $4+3+2+1=10$ pairs.

::sa VDC
A bakery makes $x$ batches of bread and $y$ batches of cake a day. A batch of bread needs $3$ kg of flour and $1$ hour of oven time; a batch of cake needs $2$ kg of flour and $2$ hours of oven time. Each day the bakery has $18$ kg of flour and $10$ hours of oven time. Each batch of bread makes a profit of $500$ thousand dong and each batch of cake $400$ thousand dong. What is the largest profit in one day, in thousand dong?
::key 3200
The system is $3x+2y\le 18$, $x+2y\le 10$, $x, y\ge 0$, with vertices $(0, 0)$, $(6, 0)$, $(4, 3)$, $(0, 5)$. The profit $F=500x+400y$ at the vertices is $0$, $3000$, $3200$, $2000$; the largest is $3200$ thousand dong ($4$ batches of bread and $3$ of cake).
:::
