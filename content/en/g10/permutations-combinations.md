---
title: Permutations, arrangements and combinations
description: Count orderings with factorials, count ordered selections with P(n,k) and unordered selections with binomial coefficients, and decide which to use.
minutes: 22
---

:::goals
- Use factorials to count the permutations of $n$ objects.
- Count arrangements $P(n, k)$ (order matters) and combinations $\binom{n}{k}$ (order does not matter).
- Decide which formula fits a problem by asking "does order matter?".
- Solve problems about choosing groups, handshakes, diagonals and conditions such as "two people together".
:::

The school maths club has $6$ members. At the end of the year the club must do three things: line up all $6$ members for a photo; elect $3$ members as president, vice-president and treasurer; and send $3$ members to a competition. Can the three tasks be done in the same number of ways?

At first glance the three tasks look alike: each one picks some members and puts them somewhere. But think a little more carefully. In the photo, who stands at the front of the row makes a difference. In the election, who is president and who is treasurer also makes a difference. When we send a team to the competition, though, three people simply go together, and nobody comes before anybody else. The difference is **order**. Once you can see whether order matters, you can pick the right formula and count quickly without listing everything.

## Ordered or unordered?

Let us start with an experiment small enough to list in full: there are $4$ students $A, B, C, D$, and we choose $2$ of them.

- If we choose **a class monitor and a deputy**, then "$A$ monitor, $B$ deputy" differs from "$B$ monitor, $A$ deputy". Listing: $AB, BA, AC, CA, AD, DA, BC, CB, BD, DB, CD, DC$, that is $4\cdot3=12$ ways.
- If we only choose **two students to clean the classroom**, then $AB$ and $BA$ are the same. Each pair appears twice in the list above, so only $12\div2=6$ ways are left: $\{A, B\}$, $\{A, C\}$, $\{A, D\}$, $\{B, C\}$, $\{B, D\}$, $\{C, D\}$.

Both times we choose $2$ out of $4$, yet one count gives $12$ and the other gives $6$. The only reason is that order means something the first time and nothing the second time. These two kinds of counting turn up all the time, so we give each one a name.

## Permutations

:::definition Permutation
Each way of putting $n$ distinct objects in an order is called a **permutation** of the $n$ objects. The number of permutations is
$$n!=n\cdot(n-1)\cdots 2\cdot 1,\qquad\text{with the convention } 0!=1.$$
:::

**Why $n!$?** Imagine filling the places one at a time. The first place has $n$ objects to choose from. Once one is placed, the second place has only $n-1$ choices left, and so on, until the last place has exactly $1$. By the multiplication rule from [Counting rules](lesson:counting-rules), we get $n\cdot(n-1)\cdots1=n!$.

:::example Books on a shelf
In how many ways can $6$ different books be put in a row on a shelf?

**Solution.** Each arrangement is a permutation of the $6$ books:

$$6!=6\cdot5\cdot4\cdot3\cdot2\cdot1=720.$$

So there are $720$ ways. This is also the number of ways to line up the $6$ club members for the photo.
:::

## Arrangements

Often we do not arrange all $n$ objects but only fill $k$ places, such as three positions for six members. The thinking is exactly the same as before; we simply stop multiplying once the $k$ places are filled.

:::definition Arrangement
Each way of taking $k$ of $n$ objects ($1\le k\le n$) and putting them in an order is called an **arrangement of $k$ out of $n$**. The number of arrangements is
$$P(n, k)=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$
:::

Back to the experiment: choosing a monitor and a deputy from $4$ students gives $P(4, 2)=4\cdot3=12$ ways, the same as our list. A race with three prizes is the same kind of situation.

:::example First, second and third
$10$ runners take part in a $100$ m final. How many results are possible for first, second and third place (no two runners finish together)?

**Solution.** The three prizes are different, so swapping two winners gives a different result: order matters, and we use arrangements of $3$ out of $10$:

$$P(10, 3)=10\cdot9\cdot8=720.$$

So there are $720$ possible results. In the same way, the club can elect a president, a vice-president and a treasurer in $P(6, 3)=6\cdot5\cdot4=120$ ways.
:::

## Combinations

:::definition Combination
Each subset of $k$ elements of a set with $n$ elements ($0\le k\le n$) is called a **combination of $k$ out of $n$**. The number of combinations is
$$\binom{n}{k}=\frac{n!}{k!\,(n-k)!}=\frac{P(n, k)}{k!}.$$
:::

**Why divide by $k!$?** Think back to the experiment: the pair $\{A, B\}$ appears twice in the ordered list, once as $AB$ and once as $BA$. More generally, each group of $k$ objects can be put in $k!$ orders, so in $P(n, k)$ every group is counted exactly $k!$ times. Dividing by $k!$ removes that repeated counting. In the experiment: $\binom{4}{2}=\dfrac{12}{2!}=6$.

:::example Sending students to a competition
(a) The $6$-member club sends $3$ members to a competition. In how many ways? (b) A class has $9$ volunteers and needs $4$ of them to plant trees. In how many ways?

**Solution.** The chosen students all play the same role, and swapping them does not make a new group, so we use combinations:

$$\binom{6}{3}=\frac{6\cdot5\cdot4}{3\cdot2\cdot1}=20,\qquad \binom{9}{4}=\frac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1}=126.$$

So there are $20$ ways to choose the competition team and $126$ ways to choose the tree-planting group. To answer the opening question: the three tasks have $720$, $120$ and $20$ ways, all different.
:::

Two properties will come up again and again, and both have a very everyday reason behind them:
- **Symmetry:** $\binom{n}{k}=\binom{n}{n-k}$, because choosing $k$ people to go is the same as choosing $n-k$ people to stay.
- **Pascal's rule:** $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}$. For example $\binom{5}{2}+\binom{5}{3}=10+10=20=\binom{6}{3}$.

:::tip Which formula?
Whenever you are unsure, ask yourself one question: **does swapping two chosen objects give a different result?** If yes (positions, prizes, digits of a number), use arrangements. If no (a group, a team, a subset), use combinations. And if all $n$ objects are put in a row, that is a permutation.
:::

## Combining with the counting rules

Real problems rarely involve just one choice. Usually we choose several times in a row: these people first, then those. We count each choice with a combination or an arrangement, then multiply the results, just as the multiplication rule says.

:::example Choosing a group of girls and boys
A class has $7$ girls and $6$ boys. In how many ways can a group of $2$ girls and $3$ boys be chosen?

**Solution.** Choose $2$ of the $7$ girls, **then** $3$ of the $6$ boys; neither choice is ordered, so we multiply two combinations:

$$\binom{7}{2}\cdot\binom{6}{3}=21\cdot20=420.$$

So there are $420$ ways.
:::

Combinations do not only count people. A segment joining two points depends only on that pair of points: segment $AB$ and segment $BA$ are the same. So combinations can count things in geometry too.

:::example Handshakes and diagonals
(a) $12$ people meet and each shakes hands exactly once with every other person. How many handshakes are there? (b) How many diagonals does a convex octagon have?

**Solution.** Each handshake is a pair of people, and each segment joining two vertices is a pair of vertices:

$$\text{(a) } \binom{12}{2}=\frac{12\cdot11}{2}=66;\qquad \text{(b) } \binom{8}{2}-8=28-8=20.$$

In (b) we subtract $8$ because $8$ of the $28$ segments joining two vertices are sides. So there are $66$ handshakes and the octagon has $20$ diagonals.
:::

The last example has a condition you will meet often: two people must stand next to each other. The trick is easy to remember: tie the two of them together and treat them as one "block".

:::example Together or apart
Six students, including An and Binh, stand in a row. In how many ways can they stand if (a) An and Binh are next to each other; (b) An and Binh are not next to each other?

**Solution.**

*Understand.* There are $6!=720$ ways to arrange everyone; we must count separately the ways with An and Binh side by side.

*Plan.* Tie An and Binh into one block, count the arrangements of the blocks, then the arrangements inside the block. Part (b) is the complement of part (a).

*Solve.* The block $(\text{An, Binh})$ and the $4$ other students make $5$ "objects", and inside the block there are $2$ orders:

$$\text{(a) } 2\cdot5!=2\cdot120=240;\qquad \text{(b) } 6!-240=720-240=480.$$

*Look back.* Counting (b) directly easily misses cases; the complement is quicker and safer.

So there are $240$ ways with An and Binh next to each other and $480$ ways with them apart.
:::

:::warning Common mistakes
- **Using arrangements when order does not matter.** Counting the ways to send $3$ of $6$ students to a competition as $P(6, 3)=120$. Wrong, because each group is counted $3!=6$ times. Right: $\binom{6}{3}=20$.
- **Using combinations when there are positions.** Counting president, vice-president and treasurer as $\binom{6}{3}=20$. Wrong, because swapping two people's positions gives a different result. Right: $P(6, 3)=120$.
- **Forgetting the order inside the block.** Counting "An and Binh together" as $5!=120$. Wrong, because the order Binh–An is left out. Right: $2\cdot5!=240$.
- **Adding instead of multiplying.** Counting $2$ girls and $3$ boys as $\binom{7}{2}+\binom{6}{3}=41$. Wrong, because these are two successive steps. Right: $\binom{7}{2}\cdot\binom{6}{3}=420$.
:::

## Key terms

:::terms
- factorial | giai thừa
- permutation | hoán vị
- arrangement | chỉnh hợp
- combination | tổ hợp
- binomial coefficient | hệ số nhị thức
- ordered / unordered | có thứ tự / không có thứ tự
- committee | ban (nhóm) đại diện
- complement | phần bù
:::

## Summary

- **Permutations**: arranging all $n$ objects, $n!$ ways (with $0!=1$).
- **Arrangements**: choosing $k$ of $n$ **in order**, $P(n, k)=\dfrac{n!}{(n-k)!}$.
- **Combinations**: choosing $k$ of $n$ **without order**, $\binom{n}{k}=\dfrac{n!}{k!(n-k)!}=\dfrac{P(n, k)}{k!}$.
- $\binom{n}{k}=\binom{n}{n-k}$ and $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}$.
- Test: does swapping two chosen objects change the result? Yes: arrangements; no: combinations.
- "Together": tie into a block and multiply by the orders inside the block; "apart": count the complement.

Back to the $6$-member club from the start: the photo can be taken in $720$ ways, the election can go $120$ ways, and the competition team can be chosen in only $20$ ways. Same six people, yet the numbers are far apart, only because of whether order matters. Before every counting problem, stop and ask that question before you write a formula.

## Practice

Each exercise comes with what you need and some steps to start. Have a go yourself first, even if you are not sure. For each choice, remember to ask "does order matter?", then open the solution to compare.

:::exercise
Compute $7!$, $P(8, 3)$ and $\binom{9}{2}$.

::hint
**What you need:** $n!=n(n-1)\cdots1$, $P(n, k)=n(n-1)\cdots(n-k+1)$, $\binom{n}{k}=\dfrac{P(n, k)}{k!}$.

**Steps:**
1. Multiply consecutive numbers.
2. For $\binom{9}{2}$, compute $P(9, 2)$ and divide by $2!$.

::solution
$7!=5040$; $P(8, 3)=8\cdot7\cdot6=336$; $\binom{9}{2}=\dfrac{9\cdot8}{2}=36$.

**Answer.** $5040$; $336$; $36$.
:::

:::exercise
Find the natural number $n\ge2$ such that $P(n, 2)=56$.

::hint
**What you need:** $P(n, 2)=n(n-1)$.

**Steps:**
1. Write the equation $n(n-1)=56$.
2. Solve the quadratic equation and keep the natural-number root.

::solution
$n(n-1)=56\iff n^2-n-56=0\iff(n-8)(n+7)=0$. Since $n\ge2$, $n=8$.

**Answer.** $n=8$.
:::

:::exercise
How many four-digit numbers with distinct digits can be made from the digits $1, 2, 3, 4, 5, 6$?

::hint
**What you need:** swapping two digits gives a different number, so use arrangements.

**Steps:**
1. Identify $n$ and $k$.
2. Compute $P(n, k)$.

::solution
Each number is an arrangement of $4$ out of the $6$ digits (there is no $0$, so the first digit is never a problem): $P(6, 4)=6\cdot5\cdot4\cdot3=360$.

**Answer.** $360$.
:::

:::exercise
A group has $5$ boys and $4$ girls. In how many ways can $3$ of them be chosen to attend a conference so that at least one girl is chosen?

::hint
**What you need:** complementary counting: "at least one girl" $=$ all $-$ "no girl".

**Steps:**
1. Count all ways to choose $3$ of the $9$.
2. Count the all-boy choices.
3. Subtract.

::solution
All: $\binom{9}{3}=84$. All boys: $\binom{5}{3}=10$. So there are $84-10=74$ ways.

**Answer.** $74$.
:::

:::exercise
A football tournament has $8$ teams in a round-robin format (every two teams meet exactly once). How many matches are played?

::hint
**What you need:** each match corresponds to an unordered pair of teams.

**Steps:**
1. Recognise this as choosing $2$ of $8$ without order.
2. Compute $\binom{8}{2}$.

::solution
Each match is a combination of $2$ of the $8$ teams: $\binom{8}{2}=\dfrac{8\cdot7}{2}=28$.

**Answer.** $28$.
:::

:::exercise
A group has $10$ students, including An. Is each claim true or false?

a) There are $720$ ways to choose $3$ students as leader, deputy and secretary.
b) There are $720$ ways to choose $3$ students for cleaning duty.
c) $\binom{10}{3}=\binom{10}{7}$.
d) There are $45$ ways to choose $3$ students for cleaning duty that include An.

::hint
**What you need:** positions call for arrangements, no positions for combinations; $\binom{n}{k}=\binom{n}{n-k}$.

**Steps:**
1. Compute $P(10, 3)$ and $\binom{10}{3}$.
2. For d), An is already chosen, so only $2$ more are needed.

::solution
a) **True.** Three different positions: $P(10, 3)=10\cdot9\cdot8=720$.

b) **False.** Cleaning duty has no order: $\binom{10}{3}=120$.

c) **True.** By symmetry both equal $120$.

d) **False.** Choose $2$ more from the other $9$: $\binom{9}{2}=36$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
$3$ boys and $3$ girls sit in a row of $6$ chairs so that boys and girls alternate. In how many ways can they sit?

::hint
**What you need:** the multiplication rule and permutations.

**Steps:**
1. There are two alternating patterns: a boy in the first chair or a girl in the first chair.
2. For each pattern, arrange the $3$ boys in the boys' chairs and the $3$ girls in the girls' chairs.

::solution
Choose the pattern: $2$ ways. Arrange the boys: $3!=6$ ways, the girls: $3!=6$ ways. Total: $2\cdot6\cdot6=72$.

**Answer.** $72$.
:::

:::exercise
There are $9$ distinct points on a circle. How many triangles and how many quadrilaterals have their vertices among these points?

::hint
**What you need:** no three points on a circle are collinear; each triangle (quadrilateral) corresponds to a set of $3$ (or $4$) points.

**Steps:**
1. Count the sets of $3$ points.
2. Count the sets of $4$ points.

::solution
Triangles: $\binom{9}{3}=84$. Quadrilaterals: $\binom{9}{4}=126$ (four points on a circle, joined in their order around the circle, give exactly one convex quadrilateral).

**Answer.** $84$ triangles; $126$ quadrilaterals.
:::

:::exercise
(Review of [Counting rules](lesson:counting-rules)) A code is $2$ different letters chosen from $A, B, C, D, E$ followed by $3$ different digits. How many such codes are there?

::hint
**What you need:** the multiplication rule; each part of the code is an arrangement.

**Steps:**
1. Count the letter part: $P(5, 2)$.
2. Count the digit part: $P(10, 3)$.
3. Multiply.

::solution
Letter part: $P(5, 2)=20$. Digit part: $P(10, 3)=720$. By the multiplication rule: $20\cdot720=14\,400$.

**Answer.** $14\,400$ codes.
:::

:::exercise Challenge
Using the digits $0, 1, 2, 3, 4, 5$, how many four-digit numbers with distinct digits are divisible by $5$?

::hint
**What you need:** a number divisible by $5$ ends in $0$ or $5$; the first digit is not $0$.

**Steps:**
1. Ending in $0$: the first three digits are an arrangement of $3$ of the other $5$ digits.
2. Ending in $5$: the first digit has $4$ choices (not $0$, not $5$), then choose the two middle digits.
3. Add the two cases.

::solution
Ending in $0$: $P(5, 3)=60$. Ending in $5$: first digit $4$ ways, the two middle digits $P(4, 2)=12$ ways, giving $48$. Total: $60+48=108$.

**Answer.** $108$.
:::

## Mini test

:::quiz
::mc
In how many ways can $2$ of $7$ students be chosen for cleaning duty?
A. $21$.
B. $42$.
C. $14$.
D. $49$.
::key A
The two students on cleaning duty have the same role, so we use combinations: $\binom{7}{2}=\dfrac{7\cdot6}{2}=21$. Option B is $P(7, 2)$ (counting order), which counts each pair twice.

::mc
$8$ runners take part in a race. How many results are possible for first, second and third place (no two runners finish together)?
A. $56$.
B. $336$.
C. $512$.
D. $6$.
::key B
The three prizes are different, so order matters: $P(8, 3)=8\cdot7\cdot6=336$. Option A is $\binom{8}{3}$ (ignoring order); option C is $8^3$ (allowing one runner to win several places).

::mc
Which number equals $\binom{10}{3}$?
A. $P(10, 7)$.
B. $\binom{7}{3}$.
C. $\binom{10}{7}$.
D. $\dfrac{10!}{3!}$.
::key C
The symmetry property $\binom{n}{k}=\binom{n}{n-k}$: choosing $3$ people to go is the same as choosing $7$ people to stay. Option D forgets to divide by $7!$.

::mc
A convex polygon has $10$ vertices. The number of its diagonals is
A. $45$.
B. $35$.
C. $90$.
D. $80$.
::key B
Each segment joining two vertices is a combination of $2$ of the $10$ vertices: $\binom{10}{2}=45$, and $10$ of them are sides. So there are $45-10=35$ diagonals. Option A forgets to subtract the sides.

::tf
A group has $4$ boys and $3$ girls.
a) There are $5040$ ways to line up all $7$ of them in a row.
b) There are $12$ ways to choose $3$ of them with exactly one girl.
c) There are $120$ ways to line up the $7$ of them in a row with the $3$ girls next to each other.
d) There are $15$ ways to choose $2$ of them with at least one girl.
::key T F F T
a) True: $7!=5040$. b) False: choose $1$ girl and $2$ boys: $\binom{3}{1}\cdot\binom{4}{2}=3\cdot6=18$. c) False: tie the $3$ girls into one block; there are $5!$ ways to arrange the $5$ "objects" and $3!$ orders inside the block: $720$. d) True: $\binom{7}{2}-\binom{4}{2}=21-6=15$.

::sa
Find the natural number $n\ge 2$ such that $\binom{n}{2}=45$.
::key 10
$\binom{n}{2}=\dfrac{n(n-1)}{2}=45\iff n^2-n-90=0\iff(n-10)(n+9)=0$. Since $n\ge2$, $n=10$.

::sa
Using the digits $0, 1, 2, 3, 4, 5$, how many even three-digit numbers with distinct digits can be made?
::key 52
Ending in $0$: the first two digits are an arrangement of $2$ of the other $5$ digits, $P(5, 2)=20$ numbers. Ending in $2$ or $4$: the first digit has $4$ choices (not $0$ and not the last digit) and the middle digit has $4$ choices, giving $2\cdot4\cdot4=32$ numbers. In total $20+32=52$.
:::
