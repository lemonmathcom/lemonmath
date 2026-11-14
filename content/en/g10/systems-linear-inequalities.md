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
$$(2, 1):\ 3\ge 2,\ 1\le 3\ \text{(true)};\quad (0, 0):\ 0\ge 2\ \text{(false)};\quad (5, 1):\ 6\ge 2,\ \text{but } 4\le 3\ \text{(false)}.$$

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
If $(x, y)$ were a solution, then $3\le x+y\le 1$, which is impossible because $3>1$. The boundary lines $x+y=1$ and $x+y=3$ are parallel, and the two half-planes lie on opposite sides without overlapping.

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
The vertices $(1, 0)$, $(4, 0)$, $(4, 3)$, $(1, 3)$ give
$$F=2,\quad 8,\quad 11,\quad 5.$$

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
On the axes: $(0, 0)$, $(6, 0)$, $(0, 4)$. Subtract $x+y=6$ from $x+3y=12$: $2y=6$, $y=3$, $x=3$. The values of $F$:
$$F(0, 0)=0,\quad F(6, 0)=30,\quad F(0, 4)=16,\quad F(3, 3)=27.$$

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
a) **False:** $y=5\le 4$ is false.

b) **True:** the vertices are $(0, 0)$, $(4, 0)$, $(2, 4)$, $(0, 4)$; the vertex $(2, 4)$ comes from putting $y=4$ in $2x+y=8$.

c) **True:** $x+y$ at the four vertices is $0$, $4$, $6$, $4$; the largest is $6$.

d) **False:** $x-y$ at the four vertices is $0$, $4$, $-2$, $-4$; the smallest is $-4$ (at $(0, 4)$), not $-2$.

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
The vertices $(0, 0)$, $(20, 0)$, $(20, 10)$, $(10, 20)$, $(0, 20)$ give
$$F=0,\quad 80,\quad 110,\quad 100,\quad 60.$$
The largest profit comes from $20$ sandwiches and $10$ cups of juice.

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
On the axes: $(0, 0)$, $(6, 0)$, $(0, 8)$. Substitute $y=8-x$ into $5x+3y=30$: $2x+24=30$, $x=3$, $y=5$. The values of $F$:
$$F(0, 0)=0,\quad F(6, 0)=24,\quad F(0, 8)=24,\quad F(3, 5)=12+15=27.$$

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
The two sides on the axes give $x\ge 0$, $y\ge 0$. The line through $(4, 0)$ and $(0, 2)$ is $\dfrac{x}{4}+\dfrac{y}{2}=1$, that is $x+2y=4$; the origin gives $0\le 4$.

**Answer.** $\begin{cases} x\ge 0\\ y\ge 0\\ x+2y\le 4 \end{cases}$
:::

:::exercise Challenge
Over the solution region of the system $x\ge 0$, $y\ge 0$, $x+y\le 6$, $x+3y\le 12$, find the maximum and minimum of $F=x-y$.

::hint
**What you need:** the vertex rule works with negative coefficients too.

**Steps:**
1. Reuse the vertices found in exercise 4.
2. Compute $x-y$ at each vertex.

::solution
The vertices $(0, 0)$, $(6, 0)$, $(3, 3)$, $(0, 4)$ give
$$F=0,\quad 6,\quad 0,\quad -4.$$

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
$$\begin{aligned} A&:\ 2\le 4,\ 0\ge 0 &&\Rightarrow A\in D_1\cap D_2,\\ B&:\ 3\le 4,\ -1\ge 0\ \text{false} &&\Rightarrow B\in D_1\setminus D_2,\\ C&:\ 5\le 4\ \text{false},\ 1\ge 0 &&\Rightarrow C\in D_2\setminus D_1,\\ E&:\ 5\le 4\ \text{false},\ -5\ge 0\ \text{false} &&\Rightarrow E\notin D_1\cup D_2. \end{aligned}$$

**Answer.** $A\in D_1\cap D_2$; $B\in D_1\setminus D_2$; $C\in D_2\setminus D_1$; $E\notin D_1\cup D_2$.
:::

## Mini test

:::quiz
::mc
Which of these is a system of linear inequalities in two variables?
A. $\begin{cases} x+y\ge 1\\ x^2-y<2 \end{cases}$
B. $\begin{cases} 2x-y\le 3\\ x+5y>0 \end{cases}$
C. $\begin{cases} xy\ge 1\\ x-y<0 \end{cases}$
D. $\begin{cases} x+y=2\\ x-y>1 \end{cases}$
::key B
Both inequalities in B have the form $ax+by<c$ (or $\le$, $>$, $\ge$). Option A contains $x^2$, C contains the product $xy$, and D contains an equation, not an inequality.

::mc
Which pair is a solution of the system $\begin{cases} x+y\le 3\\ 2x-y>0 \end{cases}$?
A. $(1, 1)$.
B. $(0, 0)$.
C. $(2, 2)$.
D. $(1, 2)$.
::key A
$(1, 1)$: $2\le 3$ and $1>0$, both true. $(0, 0)$ and $(1, 2)$ give $2x-y=0$, which fails the strict sign "$>$"; $(2, 2)$ gives $x+y=4>3$.

::mc
The solution region of the system $x\ge 0$, $y\ge 0$, $x+y\le 5$, $x\le 3$ is a quadrilateral. Which point is **not** a vertex of it?
A. $(3, 2)$.
B. $(0, 5)$.
C. $(5, 0)$.
D. $(3, 0)$.
::key C
$(5, 0)$ is where $x+y=5$ meets the $x$-axis, but $5\le 3$ is false, so this point lies outside the region. The vertices are $(0, 0)$, $(3, 0)$, $(3, 2)$, $(0, 5)$.

::mc
The solution region of the system $x\ge 0$, $y\ge 0$, $2x+y\le 8$, $x+3y\le 9$ is the quadrilateral with vertices $(0, 0)$, $(4, 0)$, $(3, 2)$, $(0, 3)$. The maximum of $F=x+2y$ over this region is
A. $6$.
B. $7$.
C. $16$.
D. $4$.
::key B
At the four vertices $F$ equals $0$, $4$, $7$, $6$; the largest is $7$, at $(3, 2)$. The value $16$ is $F(0, 8)$, but $(0, 8)$, where $2x+y=8$ meets the $y$-axis, does not satisfy $x+3y\le 9$.

::tf
Let $D$ be the solution region of the system $\begin{cases} x\ge 0,\ y\ge 0\\ x+y\le 4\\ y\le x+2 \end{cases}$
a) The pair $(2, 1)$ is a solution of the system.
b) The point $(1, 3)$ is a vertex of $D$.
c) The maximum of $x+2y$ over $D$ is $8$.
d) The minimum of $y-x$ over $D$ is $-4$.
::key T T F T
The vertices of $D$ are $(0, 0)$, $(4, 0)$, $(1, 3)$, $(0, 2)$. a) True: $3\le 4$ and $1\le 4$. b) True: solving $x+y=4$, $y=x+2$ gives $x=1$, $y=3$. c) False: $x+2y$ at the vertices is $0, 4, 7, 4$, so the maximum is $7$. d) True: $y-x$ at the vertices is $0, -4, 2, 2$.

::sa
How many pairs of integers $(x, y)$ satisfy the system $x\ge 0$, $y\ge 0$, $x+y\le 3$?
::key 10
For $x=0, 1, 2, 3$ the number of possible values of $y$ is $4, 3, 2, 1$. In total $4+3+2+1=10$ pairs.

::sa
A bakery makes $x$ batches of bread and $y$ batches of cake a day. A batch of bread needs $3$ kg of flour and $1$ hour of oven time; a batch of cake needs $2$ kg of flour and $2$ hours of oven time. Each day the bakery has $18$ kg of flour and $10$ hours of oven time. Each batch of bread makes a profit of $500$ thousand dong and each batch of cake $400$ thousand dong. What is the largest profit in one day, in thousand dong?
::key 3200
The system is $3x+2y\le 18$, $x+2y\le 10$, $x, y\ge 0$, with vertices $(0, 0)$, $(6, 0)$, $(4, 3)$, $(0, 5)$. The profit $F=500x+400y$ at the vertices is $0$, $3000$, $3200$, $2000$; the largest is $3200$ thousand dong ($4$ batches of bread and $3$ of cake).
:::
