---
title: Probability of events in an experiment
description: Recognise events and favourable outcomes, find probabilities by counting when outcomes are equally likely, and use them to judge games.
minutes: 20
---

:::goals
- Recognise events connected with an experiment and the outcomes favourable to an event.
- Find the probability of an event with the formula $P(A)=\dfrac kn$ when the outcomes are equally likely.
- Use probability to judge whether a game is fair and to solve real-life problems.
:::

Suppose that in a board game you may "bring out a piece" when you roll two dice and get at least one six. Nam argues: "Each dice has a $\dfrac16$ chance of a six, so two dice give $\dfrac16+\dfrac16=\dfrac13$." It sounds reasonable. But by the same argument, six dice would give $1$, meaning a six is *certain*, whereas six dice can still all miss the six. So where did Nam go wrong, and what is the correct probability? This lesson gives a reliable tool: list the sample space and count.

## Events and favourable outcomes

In the lesson on [sample spaces](lesson:random-experiments-sample-space), we listed all the possible outcomes. Now we look at *events* connected with an experiment, such as "the total score is 7".

:::definition Events and favourable outcomes
- An **event** connected with an experiment is something that happens or does not happen depending on the outcome of the experiment.
- An outcome of the experiment that makes the event $A$ happen is called an outcome **favourable** to $A$.
:::

:::example Listing favourable outcomes
Toss two coins. Consider the events $A$: "The two coins land the same way up" and $B$: "At least one coin shows heads". List the outcomes favourable to $A$ and to $B$.

**Solution.** The sample space is $\Omega=\{(T, T),\ (T, H),\ (H, T),\ (H, H)\}$.

The outcomes favourable to $A$ are $(T, T)$ and $(H, H)$.

The outcomes favourable to $B$ are $(T, H)$, $(H, T)$ and $(H, H)$.

So $A$ has $2$ and $B$ has $3$ favourable outcomes.
:::

## Finding the probability of an event

When two fair coins are tossed, there is no reason for one outcome to happen more easily than another: the four outcomes are **equally likely**, each with a $\dfrac14$ share of the chances. The event $A$ above takes $2$ of these $4$ shares, so the probability of $A$ is $\dfrac24=\dfrac12$.

:::theorem Formula for probability
Suppose the possible outcomes of an experiment are equally likely. Then the probability of an event $A$ is
$$P(A)=\frac{k}{n},$$
where $n$ is the number of elements of the sample space and $k$ is the number of outcomes favourable to $A$.
:::

**Going deeper.** Since $0\leq k\leq n$, we have $0\leq P(A)\leq1$: an **impossible event** (no favourable outcome) has probability $0$, and a **certain event** (every outcome favourable) has probability $1$. The formula works only when the outcomes are *equally likely*. If we record "the number of heads" when tossing two coins, there are three results $0$, $1$, $2$, but they are not equally likely ($1$ head corresponds to the two outcomes $(T, H)$ and $(H, T)$), so the probability of "1 head" is not $\dfrac13$ but $\dfrac24=\dfrac12$. That is why we always describe outcomes "in enough detail", such as ordered pairs.

:::example Total 7 or total 8?
Roll two fair dice. Find the probabilities of the events $A$: "The total score is $7$" and $B$: "The total score is $8$". Which event has the higher probability?

**Solution.** The sample space consists of $36$ equally likely outcomes $(i, j)$.

The outcomes favourable to $A$ are $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$, so $P(A)=\dfrac{6}{36}=\dfrac16$.

The outcomes favourable to $B$ are $(2, 6)$, $(3, 5)$, $(4, 4)$, $(5, 3)$, $(6, 2)$, so $P(B)=\dfrac{5}{36}$.

So $P(A)=\dfrac16>P(B)=\dfrac{5}{36}$: a total of $7$ is more likely than a total of $8$.

**Remark.** A total of $7$ comes from three pairs of different numbers, each giving two outcomes; a total of $8$ has only two such pairs, while $(4, 4)$ gives one outcome.
:::

:::example At least one six
Back to the opening problem: roll two fair dice. Find the probability of the event $C$: "At least one dice shows a six".

**Solution.**

*Understand.* $C$ happens when the first dice shows 6, or the second dice shows 6, or both.

*Plan.* Count the favourable cells in the $6\times6$ table: the sixth row and the sixth column.

*Solve.* The row $i=6$ has $6$ outcomes and the column $j=6$ has $6$ outcomes, but the cell $(6, 6)$ lies in both, so the number of favourable outcomes is $k=6+6-1=11$. Hence

$$P(C)=\frac{11}{36}.$$

So the probability of bringing out a piece is $\dfrac{11}{36}$, less than the $\dfrac13=\dfrac{12}{36}$ that Nam found.

*Look back.* Nam went wrong by counting the outcome $(6, 6)$ twice. Is there another way? Count the outcomes with *no* six: each dice has $5$ faces other than 6, so there are $5\cdot5=25$ such outcomes, and so $k=36-25=11$. This "complement" count is very useful when an event says "at least".
:::

:::graph Outcomes with at least one six
alt: A 6 by 6 lattice: each point (i, j) is one outcome; the row j = 6 and the column i = 6 are shaded and overlap at the point (6, 6), 11 points in all
x: 0..7
y: 0..7
fill: 6.4 ; 5.6 ; 0.6..6.4
fill: 6.4 ; 0.6 ; 5.6..6.4
point: (1, 6)
point: (2, 6)
point: (3, 6)
point: (4, 6)
point: (5, 6)
point: (6, 1)
point: (6, 2)
point: (6, 3)
point: (6, 4)
point: (6, 5)
point: (6, 6) "(6, 6)" above-right
:::

In the picture, the $x$-axis shows the score on the first dice and the $y$-axis the score on the second. The shaded row and column overlap exactly at $(6, 6)$: that is where Nam counted twice.

## Applications

The formula $P(A)=\dfrac kn$ works for any situation of random choice: drawing lots, drawing tickets, choosing people.

:::example A prize draw
Suppose a shop has a box of $5$ identical tickets, $2$ of which win a prize. Each customer draws $2$ tickets at random at the same time. Find the probability that a customer wins at least one prize.

**Solution.** Call the two winning tickets $T_1$, $T_2$ and the three losing tickets $K_1$, $K_2$, $K_3$. The tickets are drawn at the same time, so each outcome is an unordered pair; the sample space has $10$ equally likely outcomes:

$$T_1T_2,\ T_1K_1,\ T_1K_2,\ T_1K_3,\ T_2K_1,\ T_2K_2,\ T_2K_3,\ K_1K_2,\ K_1K_3,\ K_2K_3.$$

The outcomes with no prize are $K_1K_2$, $K_1K_3$, $K_2K_3$, so the number of favourable outcomes is $k=10-3=7$.

So the probability that a customer wins at least one prize is $\dfrac{7}{10}$.

**Remark.** "Identical" tickets are still separate objects; naming them $T_1$, $T_2$, … makes the outcomes equally likely.
:::

:::warning Common mistakes
- **Using a sample space whose outcomes are not equally likely.** Wrong: when tossing two coins, $P(\text{1 head})=\dfrac13$. Right: $\dfrac24=\dfrac12$.
- **Double counting** (as Nam did at the start). Wrong: $P(\text{at least one six})=\dfrac{12}{36}$. Right: $(6, 6)$ is counted once, giving $\dfrac{11}{36}$.
:::

**Connections.** In year 8 you saw that when an experiment is repeated many times, the relative frequency of an event gets close to its probability. This lesson shows how to find a probability *before* experimenting. In year 10, permutations, arrangements and combinations let us find probabilities when the sample space is too large to list.

## Key terms

:::terms
- event | biến cố
- favourable outcome | kết quả thuận lợi
- equally likely | đồng khả năng
- probability of an event | xác suất của biến cố
- fair dice | xúc xắc cân đối
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
:::

## Summary

- An outcome favourable to $A$ is one that makes $A$ happen.
- Equally likely outcomes: $P(A)=\dfrac kn$ ($k$ favourable outcomes, $n$ elements in $\Omega$); $0\leq P(A)\leq1$.
- Describe outcomes in enough detail (ordered pairs, naming identical objects) so that they are equally likely.
- For "at least one", count the unfavourable outcomes and subtract from $n$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Roll a fair dice. Find the probabilities of the events:

a) $A$: "The score is divisible by $3$".

b) $B$: "The score is a prime number".

::hint
**What you need:** $P(A)=\dfrac kn$ with $n=6$.

**Steps:**
1. List the favourable outcomes.
2. Divide by $6$.

::solution
a) The outcomes favourable to $A$ are $3$ and $6$, so $P(A)=\dfrac26=\dfrac13$.

b) The outcomes favourable to $B$ are $2$, $3$, $5$, so $P(B)=\dfrac36=\dfrac12$.

**Answer.** a) $\dfrac13$; b) $\dfrac12$.
:::

:::exercise
Toss two fair coins. Find the probability of the event "At least one coin shows heads".

::hint
**What you need:** $\Omega$ has $4$ equally likely outcomes.

**Steps:**
1. List the outcomes with a head.
2. Work out $\dfrac k4$.

::solution
The favourable outcomes are $(T, H)$, $(H, T)$, $(H, H)$, so the probability is $\dfrac34$.

So the probability is $\dfrac34$.

**Answer.** $\dfrac34$.
:::

:::exercise
Roll two fair dice. Find the probability of the event "The total score is at least $10$".

::hint
**What you need:** $n=36$; the total can be $10$, $11$ or $12$.

**Steps:**
1. List the pairs with totals $10$, $11$, $12$.
2. Work out $\dfrac{k}{36}$.

::solution
The favourable outcomes are $(4, 6)$, $(5, 5)$, $(6, 4)$, $(5, 6)$, $(6, 5)$, $(6, 6)$, so $k=6$ and the probability is $\dfrac{6}{36}=\dfrac16$.

So the probability is $\dfrac16$.

**Answer.** $\dfrac16$.
:::

:::exercise
Suppose the code of a lock consists of two different digits, each taken from $1$, $2$, $3$, $4$. Someone who does not know the code makes one random attempt. Find the probability of opening the lock. How does the probability change if the two digits may be the same?

::hint
**What you need:** the number of possible codes is the number of elements of $\Omega$; only one code is correct.

**Steps:**
1. Count the ordered pairs of different digits: $4\cdot3$.
2. If repeats are allowed: $4\cdot4$.

::solution
There are $4\cdot3=12$ equally likely codes and only $1$ is correct, so the probability is $\dfrac{1}{12}$. If the two digits may be the same, there are $4\cdot4=16$ codes.

So the probability is $\dfrac1{12}$; with repeats allowed, it is $\dfrac1{16}$.

**Answer.** $\dfrac{1}{12}$; $\dfrac{1}{16}$.
:::

:::exercise
**(1.5 marks)** A group of $5$ students consists of $3$ girls and $2$ boys. Two students are chosen at random at the same time.

a) How many elements does the sample space have?

b) Find the probability that both students chosen are girls.

c) Find the probability that at least $1$ of the students chosen is a boy.

::hint
**What you need:** name the girls $N_1, N_2, N_3$ and the boys $M_1, M_2$; choosing at the same time gives unordered pairs.

**Steps:**
1. List the pairs.
2. Count the pairs of girls only.
3. "At least 1 boy" is all the other pairs.

::solution
a) The sample space consists of the pairs $N_1N_2$, $N_1N_3$, $N_2N_3$, $N_1M_1$, $N_1M_2$, $N_2M_1$, $N_2M_2$, $N_3M_1$, $N_3M_2$, $M_1M_2$, that is, $10$ elements.

b) There are $3$ pairs of girls only, so the probability is $\dfrac{3}{10}$.

c) All the other pairs contain at least $1$ boy, so $k=10-3=7$ and the probability is $\dfrac{7}{10}$.

**Answer.** a) $10$; b) $\dfrac{3}{10}$; c) $\dfrac{7}{10}$.
:::

:::exercise
Class 9A tosses two coins $200$ times and finds that the event "The two coins land differently" happens $104$ times. Find the relative frequency of this event and compare it with its probability. (Revise [relative frequency](lesson:relative-frequency-tables).)

::hint
**What you need:** relative frequency $\dfrac mn$; probability found by counting.

**Steps:**
1. Work out $\dfrac{104}{200}$.
2. Find $P$ from the sample space of $4$ outcomes.

::solution
The relative frequency is $\dfrac{104}{200}=0.52=52\%$. The event has $2$ favourable outcomes, $(T, H)$ and $(H, T)$, so its probability is $\dfrac24=0.5$.

So the relative frequency of $52\%$ is very close to the probability of $50\%$, as expected: with many trials, the relative frequency gets close to the probability.

**Answer.** $52\%$, close to $P=0.5$.
:::

:::exercise
An and Binh roll two fair dice and multiply the two scores. If the product is even, An wins; if it is odd, Binh wins. Is the game fair?

::hint
**What you need:** the product is odd exactly when both numbers are odd.

**Steps:**
1. Count the pairs in which both numbers are odd: $3\cdot3$.
2. Compare the two players' probabilities.

::solution
The product is odd when both scores are odd ($1$, $3$ or $5$), which gives $3\cdot3=9$ outcomes. Hence Binh's probability of winning is $\dfrac{9}{36}=\dfrac14$ and An's is $\dfrac{36-9}{36}=\dfrac34$.

So the game is not fair: An is three times as likely to win as Binh.

**Answer.** Not fair ($\dfrac34$ against $\dfrac14$).
:::

:::exercise Challenge
Roll two fair dice. Find the probability that the product of the two scores is a perfect square.

::hint
**What you need:** the possible perfect squares are $1, 4, 9, 16, 25, 36$.

**Steps:**
1. If the two numbers are equal, the product is always a square.
2. Look for pairs of different numbers whose product is $4$, $9$, $16$, ….

::solution
The pairs $(i, i)$ give the product $i^2$: $6$ outcomes. The pairs of different numbers with a square product are $(1, 4)$ and $(4, 1)$ (product $4$); there are no others, because $9=1\cdot9$, $16=2\cdot8$ and $36=4\cdot9$ all need a number greater than $6$. Hence $k=8$ and the probability is $\dfrac{8}{36}=\dfrac29$.

So the required probability is $\dfrac29$.

**Answer.** $\dfrac{2}{9}$.
:::

## Mini test

:::quiz
::mc
A fair dice is rolled. The probability of getting an odd number is
A. $\dfrac13$.
B. $\dfrac16$.
C. $3$.
D. $\dfrac12$.
::key D
There are $3$ favourable outcomes $1, 3, 5$ out of $6$. A forgets that $1$ is odd, B is the probability of one face, C is the number of favourable outcomes, not a probability.

::mc
Two fair coins are tossed. The probability that both coins show heads is
A. $\dfrac13$.
B. $\dfrac14$.
C. $\dfrac12$.
D. $\dfrac34$.
::key B
Only $(H, H)$ out of $4$ outcomes. A wrongly uses three outcomes that are not equally likely, C is the probability that one coin shows heads, D is the probability of at least one head.

::mc
Two fair dice are rolled. The probability that the total is $4$ is
A. $\dfrac{1}{12}$.
B. $\dfrac{1}{18}$.
C. $\dfrac{1}{11}$.
D. $\dfrac{1}{9}$.
::key A
$(1, 3), (2, 2), (3, 1)$: $\dfrac{3}{36}=\dfrac{1}{12}$. B ignores the order, C treats the $11$ totals from $2$ to $12$ as equally likely, D counts $(2, 2)$ twice.

::mc
A box has $3$ red marbles and $2$ blue marbles. One marble is taken at random. The probability of getting a blue marble is
A. $\dfrac23$.
B. $\dfrac35$.
C. $\dfrac25$.
D. $\dfrac12$.
::key C
$k=2$, $n=5$. A divides the number of blue marbles by the number of red ones, B is the probability of a red marble, D treats the two colours as two equally likely outcomes.

::tf
A box contains four cards showing $1$, $2$, $3$, $4$. Two cards are drawn at random at the same time. Decide whether each statement is true or false.
a) The sample space has $6$ elements.
b) The probability that the sum of the two numbers is even is $\dfrac13$.
c) The probability that the product of the two numbers is even is $\dfrac56$.
d) The probability that the sum of the two numbers is $5$ is $\dfrac12$.
::key T T T F
a) True: $12, 13, 14, 23, 24, 34$. b) True: $\{1, 3\}$, $\{2, 4\}$. c) True: only $\{1, 3\}$ has an odd product. d) False: $\{1, 4\}$, $\{2, 3\}$ give $\dfrac26=\dfrac13$.

::sa
Roll two fair dice. Find the probability that both dice show the same score (give your answer to 2 decimal places).
::key 0.17
There are $6$ outcomes $(i, i)$ out of $36$: $\dfrac16\approx0.17$.

::sa
Two students are chosen at random at the same time from a group of $2$ boys and $3$ girls. Find the probability of choosing $1$ boy and $1$ girl (as a decimal).
::key 0.6
There are $2\cdot3=6$ boy–girl pairs out of $10$ pairs: $\dfrac{6}{10}=0.6$.
:::
