---
title: Events and the classical definition of probability
description: Describe random experiments with sample spaces and events, then compute probabilities when all outcomes are equally likely.
minutes: 16
---

:::goals
- Describe a random experiment by its outcomes and its sample space $\Omega$.
- Write events as subsets of $\Omega$, including certain, impossible and complementary events.
- Compute $P(A)=\dfrac{n(A)}{n(\Omega)}$ for equally likely outcomes.
- Use the properties $0\le P(A)\le 1$ and $P(\bar A)=1-P(A)$.
:::

Toss a coin. You cannot say whether it will land heads, but you can say that heads and tails are equally likely. Probability turns this feeling into a number between $0$ and $1$. The first step is to list carefully **what can happen**.

## Experiments, outcomes and events

A **random experiment** is a process whose result cannot be predicted with certainty, although all possible results are known (tossing a coin, rolling a die). Each possible result is an **outcome**. The set of all outcomes is the **sample space** $\Omega$.

:::definition Event
An **event** $A$ is a subset of $\Omega$: the set of outcomes in which $A$ "occurs".
- The **certain event** is $\Omega$ itself; the **impossible event** is $\varnothing$.
- The **complement** $\bar A$ consists of the outcomes not in $A$.
- $n(A)$ denotes the number of outcomes in $A$.
:::

:::example Tossing a coin twice
List $\Omega$ and the event $A$: "exactly one head".

**Solution.** $\Omega=\{HH, HT, TH, TT\}$, so $n(\Omega)=4$. $A=\{HT, TH\}$ and $n(A)=2$. The complement is $\bar A=\{HH, TT\}$.
:::

## Classical probability

When the outcomes of an experiment are **equally likely**, the probability of an event is the fraction of outcomes that favour it.

:::definition Classical definition
If $\Omega$ is finite and all outcomes are equally likely, then
$$P(A)=\frac{n(A)}{n(\Omega)}.$$
:::

:::theorem Properties
- $0\le P(A)\le 1$, with $P(\Omega)=1$ and $P(\varnothing)=0$.
- $P(\bar A)=1-P(A)$.
:::

:::example Tossing a coin twice, continued
For the event $A$ above, $P(A)=\frac24=\frac12$, and $P(\bar A)=1-\frac12=\frac12$.
:::

:::example Rolling a die
A fair die is rolled. Find the probability of (a) an even number, (b) a number at least $5$.

**Solution.** $\Omega=\{1, 2, 3, 4, 5, 6\}$, $n(\Omega)=6$.
- (a) $A=\{2, 4, 6\}$: $P(A)=\frac36=\frac12$. The complement (an odd number) has probability $\frac12$.
- (b) $B=\{5, 6\}$: $P(B)=\frac26=\frac13$.
:::

## Two dice

For two dice, an outcome is an ordered pair, so $n(\Omega)=6\cdot6=36$. The table shows the sum of the two dice for each pair.

| 1st \ 2nd | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

:::example The sum of two dice
Two fair dice are rolled. Find $P(\text{sum}=7)$ and $P(\text{sum}\ge10)$.

**Solution.**
- The sum $7$ occurs $6$ times in the table: $P=\frac6{36}=\frac16$.
- Sums $10$ (3 times), $11$ (2 times) and $12$ (once) give $6$ outcomes: $P=\frac6{36}=\frac16$.
:::

## Cards and balls

:::example A card from a deck
A card is drawn from a standard deck of $52$. Find the probability of (a) an ace, (b) a heart.

**Solution.** $n(\Omega)=52$. (a) There are $4$ aces: $\frac4{52}=\frac1{13}$. (b) There are $13$ hearts: $\frac{13}{52}=\frac14$.
:::

:::example The complement trick
A coin is tossed $3$ times. Find the probability of at least one head.

**Solution.** $n(\Omega)=2^3=8$. The complement "no head" is $\{TTT\}$, with probability $\frac18$. So $P=1-\frac18=\frac78$.
:::

:::warning Common mistakes
- Using the classical formula when outcomes are **not** equally likely.
- Treating the two dice as unordered, which gives $21$ outcomes that are not equally likely; use ordered pairs ($36$).
- Forgetting that $P(A)$ must lie between $0$ and $1$.
- Listing an incomplete $\Omega$.
:::

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- outcome | kết quả
- sample space | không gian mẫu
- event | biến cố
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
- complement of an event | biến cố đối
- probability | xác suất
:::

## Summary

- $\Omega$ is the set of all outcomes; an event is a subset of $\Omega$.
- For equally likely outcomes, $P(A)=\frac{n(A)}{n(\Omega)}$.
- $0\le P(A)\le 1$, $P(\Omega)=1$, $P(\varnothing)=0$, $P(\bar A)=1-P(A)$.
- "At least one" problems are often easiest through the complement.

## Practice

:::practice
1. A die is rolled. Find the probability of a prime number.
2. A coin is tossed twice. Find the probability of at least one tail.
3. Two dice are rolled. Find the probability that the sum is $8$.
4. Two dice are rolled. Find the probability of a double (both numbers equal).
5. One card is drawn from $52$. Find the probability that it is a king or a queen.
6. An urn has $4$ red and $6$ white balls. One ball is drawn. Find the probability that it is white.
7. A coin is tossed $3$ times. Find the probability of exactly two heads.
8. Two dice are rolled. Find the probability that the sum is **not** $7$.
9. Challenge. A $3$-digit number with different digits is formed from $1, 2, 3, 4, 5$. Find the probability that it is even.
10. Challenge. A ball is drawn from balls numbered $1$ to $10$. Find the probability that its number is divisible by $2$ or by $3$.
:::

:::solution Show solutions
1. Primes: $\{2, 3, 5\}$, so $\frac36=\frac12$.
2. $n(\Omega)=4$. The complement "no tail" is $\{HH\}$. $P=1-\frac14=\frac34$.
3. Sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$ gives $5$ outcomes. $P=\frac5{36}$.
4. Doubles $(1,1), \dots, (6,6)$: $6$ outcomes. $P=\frac6{36}=\frac16$.
5. $4$ kings and $4$ queens give $8$ cards: $\frac8{52}=\frac2{13}$.
6. $\frac6{10}=\frac35$.
7. Outcomes $HHT, HTH, THH$: $\frac38$.
8. $P(\text{sum}=7)=\frac16$, so the answer is $1-\frac16=\frac56$.
9. $n(\Omega)=5\cdot4\cdot3=60$. For an even number the last digit is $2$ or $4$ ($2$ choices), then $4$ and $3$ choices for the others: $2\cdot4\cdot3=24$. $P=\frac{24}{60}=\frac25$.
10. Divisible by $2$: $2, 4, 6, 8, 10$ (5 numbers). Divisible by $3$: $3, 6, 9$ (3 numbers). Together, without counting $6$ twice: $\{2, 3, 4, 6, 8, 9, 10\}$ has $7$ numbers. $P=\frac7{10}$.
:::
