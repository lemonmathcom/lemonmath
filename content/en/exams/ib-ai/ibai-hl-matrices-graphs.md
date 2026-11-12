---
title: Matrices and graph theory
description: IB Maths AI HL: matrix operations and inverses, solving systems, transition matrices and steady states, graphs, adjacency matrices, trees and route problems.
minutes: 55
---

:::goals
- Multiply matrices, find $2\times2$ determinants and inverses, and solve systems of equations with matrices.
- Use transition matrices to predict future states and find a steady state.
- Describe graphs with vertices, edges, degrees and adjacency matrices, and count walks.
- Use Kruskal's algorithm for a minimum spanning tree, solve the route inspection (Chinese postman) problem, and find bounds for the travelling salesman problem.
:::

A delivery driver wants to visit every shop in town and get back to the depot by the shortest route. A council wants to connect five villages with cable using as little cable as possible. A weather forecaster knows that a sunny day is usually followed by another sunny day. These problems sound very different, but HL students of Maths AI solve all of them with two tools: **matrices**, which store many numbers at once, and **graphs**, which are just dots joined by lines.

Neither tool needs advanced theory. What makes them powerful is that a calculator can handle large matrices in a second, and a few clear algorithms turn messy route problems into step-by-step procedures. Our job is to set the problem up correctly and to read the answer in context.

## Matrices

A product $AB$ is defined when the number of columns of $A$ equals the number of rows of $B$; each entry is a row of $A$ times a column of $B$. Order matters: usually $AB\ne BA$.

For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the **determinant** is $\det A=ad-bc$ and, if $\det A\ne0$,
$$A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$
A system of linear equations can be written $AX=B$, so $X=A^{-1}B$. For $3\times3$ systems the GDC finds $A^{-1}$ or solves directly.

:::example Solving a system with an inverse
Solve $2x+y=7$ and $5x+3y=18$ using a matrix inverse.

**Solution.** In matrix form, $\begin{pmatrix}2&1\\5&3\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\18\end{pmatrix}$. The determinant is $2(3)-1(5)=1$, so the inverse is $\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$.

Then $\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}\begin{pmatrix}7\\18\end{pmatrix}=\begin{pmatrix}21-18\\-35+36\end{pmatrix}=\begin{pmatrix}3\\1\end{pmatrix}$.

So $x=3$ and $y=1$. Check: $2(3)+1=7$ and $5(3)+3(1)=18$.
:::

## Transition matrices

When a system moves between states with fixed probabilities, a **transition matrix** $T$ holds those probabilities, with each **column** adding to $1$ (column $j$ lists where state $j$ goes next). If $s_0$ is the initial state vector, then after $n$ steps $s_n=T^ns_0$. In the long run many systems settle to a **steady state** $s$ with $Ts=s$.

:::example Sunny or rainy?
In a town, a sunny day is followed by a sunny day with probability $0.8$, and a rainy day is followed by a sunny day with probability $0.4$. Today is sunny. What is the probability that it is sunny in two days' time, and what proportion of days are sunny in the long run?
A. $0.72$; $\dfrac23$
B. $0.64$; $\dfrac23$
C. $0.72$; $0.6$
D. $0.8$; $0.5$

**Solution.** With states (sunny, rainy), $T=\begin{pmatrix}0.8&0.4\\0.2&0.6\end{pmatrix}$ and $s_0=\begin{pmatrix}1\\0\end{pmatrix}$. Then $T^2=\begin{pmatrix}0.72&0.56\\0.28&0.44\end{pmatrix}$, so $s_2=\begin{pmatrix}0.72\\0.28\end{pmatrix}$.

For the steady state $\begin{pmatrix}p\\1-p\end{pmatrix}$, the first row of $Ts=s$ gives $0.8p+0.4(1-p)=p$, so $0.4=0.6p$ and $p=\dfrac23$.

So the probability of sun in two days is $0.72$, and in the long run $\dfrac23$ of days are sunny, answer **A**. Option B uses $0.8^2$, forgetting the route through a rainy day.
:::

## Graphs

A **graph** has **vertices** joined by **edges**; a **weighted** graph has a number (distance, cost, time) on each edge. The **degree** of a vertex is the number of edges at it, and the sum of all degrees is twice the number of edges. The **adjacency matrix** $M$ has entry $m_{ij}$ equal to the number of edges from vertex $i$ to vertex $j$; the entries of $M^k$ count the **walks** of length $k$.

- An **Eulerian circuit** (using every edge once and returning to the start) exists when every vertex has even degree; an **Eulerian trail** exists when exactly two vertices have odd degree, and it runs between them.
- A **Hamiltonian cycle** visits every vertex exactly once and returns to the start.
- A **tree** is a connected graph with no cycles; a **minimum spanning tree** connects all vertices with the least total weight.

:::diagram A weighted graph with five vertices
alt: Five vertices A, B, C, D and E; the edges are AB 4, AC 2, BC 5, BD 10, CD 3, CE 8 and DE 6
point A 0,2 left
point B 3,4 above
point C 3,0 below
point D 6,3 right
point E 6,-1 right
segment A B "4"
segment A C "2"
segment B C "5"
segment B D "10"
segment C D "3"
segment C E "8"
segment D E "6"
:::

**Kruskal's algorithm:** list the edges in order of weight; add each one unless it makes a cycle; stop when every vertex is connected.

:::example A minimum spanning tree
Use Kruskal's algorithm to find a minimum spanning tree of the graph above, and its total weight.
A. $15$
B. $14$
C. $17$
D. $38$

**Solution.** In order of weight the edges are $AC\ (2)$, $CD\ (3)$, $AB\ (4)$, $BC\ (5)$, $DE\ (6)$, $CE\ (8)$, $BD\ (10)$.

Add $AC$, $CD$ and $AB$. Skip $BC$, because $B$ and $C$ are already connected through $A$. Add $DE$; now all five vertices are connected, so stop.

So the tree is $AC$, $CD$, $AB$, $DE$ with total weight $2+3+4+6=15$, answer **A**. Option D is the total weight of all the edges.
:::

**Route inspection (Chinese postman):** to travel along every edge and return to the start, find the vertices of odd degree. If there are two, repeat the shortest path between them; the least route length is the total edge weight plus that path.

**Travelling salesman:** to visit every vertex and return, the **nearest neighbour** algorithm gives an **upper bound**; removing one vertex, finding a minimum spanning tree of the rest and adding the two shortest edges from the removed vertex gives a **lower bound**.

:::warning Common traps
- **Matrix order:** $AB$ and $BA$ are usually different; $X=A^{-1}B$, not $BA^{-1}$.
- **Columns of a transition matrix:** check which way your matrix is written; here each column adds to $1$.
- **Kruskal:** reject any edge that would make a cycle, even if it is short.
- **Route inspection:** add the **shortest path** between the odd vertices, which may not be the direct edge.
- **Bounds:** nearest neighbour gives an upper bound, not necessarily the best route.
:::

:::terms
- matrix / determinant / inverse | ma trận / định thức / ma trận nghịch đảo
- transition matrix | ma trận chuyển
- steady state | trạng thái dừng
- vertex / edge / degree | đỉnh / cạnh / bậc
- adjacency matrix | ma trận kề
- walk / trail / cycle | hành trình / đường đi / chu trình
- Eulerian / Hamiltonian | Euler / Hamilton
- minimum spanning tree | cây khung nhỏ nhất
- route inspection problem | bài toán người đưa thư Trung Hoa
- travelling salesman problem | bài toán người bán hàng
:::

## Similar exercises

:::exercise
Find $AB$ for $A=\begin{pmatrix}1&2\\3&0\end{pmatrix}$ and $B=\begin{pmatrix}4&1\\-1&2\end{pmatrix}$.

::hint
**What you need:** entry $(i,j)$ is row $i$ of $A$ times column $j$ of $B$.

::solution
Row $1$ of $A$ times the columns of $B$: $1(4)+2(-1)=2$ and $1(1)+2(2)=5$. Row $2$: $3(4)+0(-1)=12$ and $3(1)+0(2)=3$.

So $AB=\begin{pmatrix}2&5\\12&3\end{pmatrix}$.

**Answer.** $\begin{pmatrix}2&5\\12&3\end{pmatrix}$.
:::

:::exercise
Find the inverse of $C=\begin{pmatrix}4&2\\3&2\end{pmatrix}$.

::hint
**What you need:** $\det C=4(2)-2(3)$.

::solution
The determinant is $\det C=8-6=2\ne0$, so the inverse exists.

Swapping the diagonal entries and changing the signs of the others, then dividing by $2$, gives $C^{-1}=\dfrac12\begin{pmatrix}2&-2\\-3&4\end{pmatrix}=\begin{pmatrix}1&-1\\-1.5&2\end{pmatrix}$.

So $C^{-1}=\begin{pmatrix}1&-1\\-1.5&2\end{pmatrix}$.

**Answer.** $\begin{pmatrix}1&-1\\-1.5&2\end{pmatrix}$.
:::

:::exercise
A graph has five vertices with degrees $3,\ 3,\ 2,\ 2,\ 2$. How many edges does it have, and does it have an Eulerian circuit or an Eulerian trail?

::hint
**What you need:** the sum of the degrees is twice the number of edges.

::solution
The sum of the degrees is $3+3+2+2+2=12$, so the graph has $\dfrac{12}{2}=6$ edges.

Exactly two vertices have odd degree, so there is no Eulerian circuit, but there is an Eulerian trail starting at one odd vertex and ending at the other.

So the graph has $6$ edges and an Eulerian trail, but no Eulerian circuit.

**Answer.** $6$ edges; an Eulerian trail only.
:::

:::exercise
For the graph with edges $AB$, $AC$, $BC$ and $CD$, write the adjacency matrix and find the number of walks of length $2$ from $A$ to $D$.

::hint
**What you need:** a walk of length $2$ from $A$ to $D$ goes $A\to X\to D$.

::solution
With vertices in the order $A,B,C,D$, the adjacency matrix is $M=\begin{pmatrix}0&1&1&0\\1&0&1&0\\1&1&0&1\\0&0&1&0\end{pmatrix}$.

A walk of length $2$ from $A$ to $D$ must go through a vertex joined to both; only $C$ is, so there is one walk, $A\to C\to D$. This is the entry in row $A$, column $D$ of $M^2$.

So there is $1$ walk of length $2$ from $A$ to $D$.

**Answer.** $1$.
:::

:::exercise
For $T=\begin{pmatrix}0.9&0.3\\0.1&0.7\end{pmatrix}$, find the steady-state vector.

::hint
**What you need:** solve $0.9p+0.3(1-p)=p$.

::solution
Let the steady state be $\begin{pmatrix}p\\1-p\end{pmatrix}$. The first row of $Ts=s$ gives $0.9p+0.3(1-p)=p$, so $0.3=0.4p$ and $p=0.75$.

So the steady-state vector is $\begin{pmatrix}0.75\\0.25\end{pmatrix}$.

**Answer.** $\begin{pmatrix}0.75\\0.25\end{pmatrix}$.
:::

## Applied exercises

:::exercise
A museum sold $100$ tickets for $880$ dollars. Adult tickets cost $12$ dollars, child tickets $6$ dollars and senior tickets $8$ dollars, and twice as many child tickets as senior tickets were sold. How many of each were sold?

::hint
**What you need:** three equations in $a$, $c$, $s$; solve with matrices on the GDC.

::solution
Let $a$, $c$ and $s$ be the numbers of adult, child and senior tickets. Then $a+c+s=100$, $12a+6c+8s=880$ and $c-2s=0$.

In matrix form $\begin{pmatrix}1&1&1\\12&6&8\\0&1&-2\end{pmatrix}\begin{pmatrix}a\\c\\s\end{pmatrix}=\begin{pmatrix}100\\880\\0\end{pmatrix}$, and the GDC gives $a=40$, $c=40$, $s=20$. Check: $480+240+160=880$.

So the museum sold $40$ adult, $40$ child and $20$ senior tickets.

**Answer.** $40$ adult, $40$ child, $20$ senior.
:::

:::exercise
For the weighted graph in the lesson, find the length of the shortest route that travels along every edge at least once and returns to its start.

::hint
**What you need:** the odd vertices are $B$ and $D$.

::solution
The degrees are $A:2$, $B:3$, $C:4$, $D:3$, $E:2$, so the odd vertices are $B$ and $D$. The total weight of all edges is $4+2+5+10+3+8+6=38$.

The shortest path from $B$ to $D$ is $B\to C\to D$ with length $5+3=8$ (shorter than the direct edge $10$, or $B\to A\to C\to D$ with length $9$).

So the shortest route has length $38+8=46$.

**Answer.** $46$.
:::

:::exercise
Four towns have the following distances (km): $AB=5$, $AC=8$, $AD=6$, $BC=4$, $BD=7$, $CD=3$. Find an upper bound for the travelling salesman problem with the nearest neighbour algorithm from $A$, and a lower bound by deleting $A$. What can you conclude?

::hint
**What you need:** the minimum spanning tree of $B,C,D$ uses $BC$ and $CD$.

::solution
Nearest neighbour from $A$: the nearest town is $B$ ($5$), then $C$ ($4$), then $D$ ($3$), then back to $A$ ($6$), giving $5+4+3+6=18$ km. This is an upper bound.

Deleting $A$, the minimum spanning tree of $B$, $C$, $D$ uses $BC$ and $CD$, weight $7$. Adding the two shortest edges from $A$, $5$ and $6$, gives a lower bound of $7+11=18$ km.

So the upper and lower bounds are both $18$ km, and the route $A\to B\to C\to D\to A$ is optimal.

**Answer.** Both bounds are $18$ km; the route $ABCDA$ is optimal.
:::

:::exercise Challenge
Two phone companies share a market. Each year, $70\%$ of company X's customers stay and $30\%$ move to Y, while $80\%$ of Y's customers stay and $20\%$ move to X. Each company has half the market now. Find the market shares after $2$ years and in the long run.

::hint
**What you need:** $T=\begin{pmatrix}0.7&0.2\\0.3&0.8\end{pmatrix}$, $s_0=\begin{pmatrix}0.5\\0.5\end{pmatrix}$.

::solution
After one year, $s_1=Ts_0=\begin{pmatrix}0.35+0.10\\0.15+0.40\end{pmatrix}=\begin{pmatrix}0.45\\0.55\end{pmatrix}$, and after two years $s_2=Ts_1=\begin{pmatrix}0.315+0.11\\0.135+0.44\end{pmatrix}=\begin{pmatrix}0.425\\0.575\end{pmatrix}$.

For the steady state, $0.7p+0.2(1-p)=p$ gives $0.2=0.5p$, so $p=0.4$.

So after two years X has $42.5\%$ and Y $57.5\%$ of the market, and in the long run X has $40\%$ and Y $60\%$.

**Answer.** $42.5\%$ and $57.5\%$; long run $40\%$ and $60\%$.
:::

:::quiz
::mc
If $\det A=0$, then
A. $A^{-1}$ exists
B. $A$ is the identity matrix
C. $A$ has no inverse
D. $A=0$
::key C
The inverse formula divides by $\det A$.

::mc
In a transition matrix as used here, each column adds to
A. $1$
B. $0$
C. the number of states
D. $100$
::key A
Each column lists all the places one state can go next.

::mc
A graph has an Eulerian circuit when
A. it has exactly two vertices of odd degree
B. every vertex has even degree
C. it has no cycles
D. every vertex has degree $1$
::key B
Each visit to a vertex uses one edge in and one out.

::mc
The nearest neighbour algorithm for the travelling salesman problem gives
A. the exact best route
B. a lower bound
C. a minimum spanning tree
D. an upper bound
::key D
It gives a real route, which may not be the shortest.

::tf
A graph has $6$ vertices and is a tree. Decide whether each statement is true or false.
a) It is connected.
b) It has no cycles.
c) It has $5$ edges.
d) It must have an Eulerian circuit.
::key T T T F
A tree has vertices of degree $1$, so it has no Eulerian circuit.

::sa
Find $\det\begin{pmatrix}5&2\\3&4\end{pmatrix}$.
::key 14
$20-6=14$.

::sa
A graph has degrees $4,\ 3,\ 3,\ 2$. How many edges does it have?
::key 6
$\dfrac{12}{2}=6$.
:::
