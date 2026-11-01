---
title: Permutations, arrangements and combinations
description: Count orderings with factorials, count ordered selections with P(n,k) and unordered selections with binomial coefficients, and decide which to use.
minutes: 18
---

:::goals
- Use factorials to count the orderings (permutations) of $n$ objects.
- Count arrangements $P(n, k)$ (order matters) and combinations $\binom nk$ (order does not matter).
- Decide which formula fits a problem by asking "does order matter?".
- Solve problems with committees, handshakes, lines and conditions such as "two people together".
:::

Five friends line up for a photo. How many different photos are possible? Now pick two of the five to carry the banner: how many choices? The first question cares about **order**, the second does not. This lesson gives you the formulas for both, and a simple test to know which one to use.

## Permutations and factorials

:::definition Permutation
A **permutation** of $n$ distinct objects is an ordering of all of them. The number of permutations is
$$n!=n\cdot(n-1)\cdots 2\cdot 1,\qquad 0!=1.$$
:::

There are $n$ choices for the first place, $n-1$ for the second, and so on: this is the multiplication rule from [the counting rules](lesson:counting-rules).

:::example Books on a shelf
In how many ways can $5$ different books be put in a row?

**Solution.** $5!=5\cdot4\cdot3\cdot2\cdot1=120$.
:::

## Arrangements

:::definition Arrangement
An **arrangement** of $k$ objects chosen from $n$ is an **ordered** list of $k$ of them. Their number is
$$P(n, k)=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$
:::

:::example President, vice-president, secretary
A club of $8$ people elects a president, a vice-president and a secretary (different people). How many outcomes?

**Solution.** The offices are different, so order matters: $P(8, 3)=8\cdot7\cdot6=336$.
:::

## Combinations

:::definition Combination
A **combination** of $k$ objects from $n$ is an **unordered** selection (a subset). Their number is
$$\binom nk=\frac{n!}{k!\,(n-k)!}=\frac{P(n, k)}{k!}.$$
:::

Each subset of $k$ objects can be ordered in $k!$ ways, so dividing the arrangements by $k!$ removes the order.

:::example Choosing a team
In how many ways can $3$ people be chosen from $8$ for a team?

**Solution.** Order does not matter: $\binom{8}{3}=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$.
:::

Two useful rules:
- **Symmetry:** $\binom nk=\binom n{n-k}$ (choosing who is in is the same as choosing who is out).
- **Pascal's rule:** $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$. For example $\binom{5}{2}+\binom{5}{3}=10+10=20=\binom{6}{3}$.

:::tip Which one do I use?
Ask: **if I swap two chosen objects, do I get a different outcome?** Yes (president and secretary, places on a podium): arrangement. No (a committee, a handful of cards): combination. If you use all $n$ objects: permutation.
:::

## Problems with several groups

:::example A committee
A class has $6$ girls and $5$ boys. In how many ways can a committee of $2$ girls and $3$ boys be chosen?

**Solution.** Choose the girls and the boys independently and multiply: $\binom{6}{2}\cdot\binom{5}{3}=15\cdot10=150$.
:::

:::example Handshakes and lines
(a) At a party of $10$ people everyone shakes hands once with everyone else. How many handshakes? (b) How many diagonals does a hexagon have?

**Solution.**
- (a) A handshake is a pair of people: $\binom{10}{2}=45$.
- (b) Pairs of vertices: $\binom{6}{2}=15$. Of these, $6$ are sides, so there are $15-6=9$ diagonals.
:::

## Conditions: together and apart

:::example Two people together or apart
Five people stand in a row. How many ways are there if A and B (a) stand next to each other, (b) do not stand next to each other?

**Solution.**
- (a) Glue A and B into one block: $4$ objects can be ordered in $4!=24$ ways, and inside the block A, B can swap: $2$ ways. Total $2\cdot24=48$.
- (b) Total minus (a): $5!-48=120-48=72$.
:::

:::warning Common mistakes
- Using arrangements when order does not matter (you count every group $k!$ times).
- Forgetting to divide by $k!$ and $(n-k)!$ in $\binom nk$.
- Counting "A and B apart" directly and missing cases; the complement is easier.
- Writing $n!$ for $n$ objects when only $k$ of them are placed.
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

- $n!$ counts the orderings of $n$ objects.
- $P(n, k)=\frac{n!}{(n-k)!}$ counts ordered choices; $\binom nk=\frac{n!}{k!(n-k)!}$ counts unordered choices.
- $\binom nk=\binom n{n-k}$ and $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.
- Test: does swapping two chosen objects change the outcome?

## Practice

:::practice
1. Compute $6!$.
2. Compute $P(7, 2)$.
3. Compute $\binom{10}{3}$.
4. Find $n$ if $\binom n2=28$.
5. From $7$ boys and $5$ girls, choose a team of $3$ boys and $2$ girls. How many ways?
6. How many $3$-digit numbers can be made from the digits $1, 2, \dots, 7$ with all digits different?
7. Six people stand in a row. How many ways if A and B are not next to each other?
8. How many words (not necessarily meaningful) can be made from the letters of MATH? How many start with M?
9. Challenge. How many diagonals does a decagon (10 sides) have?
10. Challenge. Eight points are marked on a circle. How many triangles and how many quadrilaterals have their vertices among them?
:::

:::solution Show solutions
1. $6!=720$.
2. $7\cdot6=42$.
3. $\frac{10\cdot9\cdot8}{3\cdot2\cdot1}=120$.
4. $\frac{n(n-1)}{2}=28$, so $n^2-n-56=0$ and $n=8$ (the negative root is rejected).
5. $\binom{7}{3}\binom{5}{2}=35\cdot10=350$.
6. Order matters: $P(7, 3)=7\cdot6\cdot5=210$.
7. Total $6!=720$. A and B together: $2\cdot5!=240$. Not together: $720-240=480$.
8. $4!=24$ words. With M first, the other $3$ letters can be ordered in $3!=6$ ways.
9. Pairs of vertices $\binom{10}2=45$ minus $10$ sides: $35$.
10. Triangles $\binom{8}{3}=56$; quadrilaterals $\binom{8}{4}=70$ (any $4$ points on a circle form a quadrilateral).
:::
