---
title: Possible outcomes and favourable outcomes. Calculating probability as a ratio
description: List the possible outcomes of an experiment, find the favourable outcomes of an event and calculate probability as a ratio of equally likely outcomes.
minutes: 25
---

:::goals
- Recognise a random experiment and list its possible outcomes.
- Identify the favourable outcomes for an event.
- Calculate the probability of an event as the ratio $\dfrac{k}{n}$ when the outcomes are equally likely.
- Understand that a probability lies between $0$ and $1$, and know the probability of a certain event and of an impossible event.
:::

Suppose your class holds a prize draw: a closed box holds $20$ identical slips, of which $4$ say "Prize". You close your eyes and take out one slip. You might win and you might not, and nobody can predict the result.

Even so, we feel that the chance of winning is "not very large". How large is it? In mathematics, the chance that an event happens is measured by a number called its probability. This lesson teaches you to calculate that number.

## Let's explore

Consider three familiar experiments:

- Tossing a coin: there are two outcomes, tails (T) or heads (H).
- Rolling a fair die: there are six outcomes, a face with $1$, $2$, $3$, $4$, $5$ or $6$ dots.
- Spinning a wheel divided into $8$ equal parts, numbered $1$ to $8$.

Question: when we roll a die, how likely is a face with an even number of dots? Of the six outcomes, three ($2$, $4$, $6$) are even. Each outcome is equally likely, so we guess that the chance is $3$ in $6$, that is $\dfrac12$. The next sections name and organise this method.

## Possible outcomes of an experiment

:::definition Experiment and possible outcomes
A **random experiment** (an experiment for short) is an activity whose result we cannot predict, but for which we know all the results that can occur. Each such result is called a **possible outcome**. The set of all possible outcomes is called the **sample space** of the experiment.
:::

If the possible outcomes all have the same chance of occurring, we call them **equally likely**. A fair coin or die, a box of identical slips drawn without looking, and a wheel divided into equal parts all give equally likely outcomes.

**Going deeper.** Equal likelihood is the key condition. If a wheel has a red sector twice as wide as the blue one, the outcomes "red" and "blue" are not equally likely; the ratio method of the later sections then cannot be used.

:::example Listing possible outcomes
A coin is tossed twice in a row. List the possible outcomes.

**Solution.** Each toss has two possibilities, T or H. We write the outcomes in the order first toss, second toss:
$$TT,\quad TH,\quad HT,\quad HH.$$
There are $4$ possible outcomes, and since the coin is fair they are equally likely.

So the possible outcomes are $TT$, $TH$, $HT$, $HH$.
:::

## Favourable outcomes for an event

An **event** is something whose happening or not depends on the result of the experiment. For example, when we roll a die, "the face shows an even number of dots" is an event.

:::definition Favourable outcome
Each possible outcome that makes the event $E$ happen is called a **favourable outcome** for $E$.
:::

When a die is rolled, the event "an even face" has $3$ favourable outcomes, $2$, $4$, $6$. The event "a face greater than $6$" has no favourable outcome, and for the event "a face less than $7$" all $6$ outcomes are favourable.

:::example Identifying favourable outcomes
A card is drawn at random from $20$ cards numbered $1$ to $20$. How many possible outcomes are there? Which outcomes are favourable for the event $A$: "the number on the card is divisible by $5$"?

**Solution.** Each card is a possible outcome, so there are $20$ possible outcomes. The numbers from $1$ to $20$ divisible by $5$ are $5$, $10$, $15$, $20$.

So there are $20$ possible outcomes, and the event $A$ has $4$ favourable outcomes: $5$, $10$, $15$, $20$.
:::

## The probability of an event

:::theorem Calculating probability as a ratio
Suppose an experiment has $n$ possible outcomes that are equally likely. If the event $E$ has $k$ favourable outcomes, then the **probability** of $E$, written $P(E)$, is
$$P(E)=\frac{k}{n}.$$
:::

**Why?** Each possible outcome takes the same share $\dfrac1n$ of the chance. The event $E$ consists of $k$ such outcomes, so it takes $k\cdot\dfrac1n=\dfrac kn$. In other words, if we repeat the experiment very many times, the proportion of times $E$ occurs will be close to $\dfrac kn$.

Since $0\leq k\leq n$, we get these properties:
- $0\leq P(E)\leq1$.
- A **certain** event (one that always happens, $k=n$) has $P(E)=1$.
- An **impossible** event (one that never happens, $k=0$) has $P(E)=0$.
- The event $\overline{E}$ "$E$ does not happen" (the complementary event of $E$) has $P(\overline{E})=1-P(E)$, because the favourable outcomes for $E$ and for $\overline{E}$ together make up all $n$ outcomes.

:::example Probability when rolling a die
A fair die is rolled. Find the probability of each event:

a) $A$: "the face shows an even number of dots".

b) $B$: "the face shows a prime number of dots".

c) $C$: "the face shows more than $6$ dots".

d) $D$: "the face shows fewer than $7$ dots".

**Solution.** There are $n=6$ possible outcomes, equally likely.

a) The favourable outcomes are $2$, $4$, $6$, so $k=3$ and $P(A)=\dfrac36=\dfrac12$.

b) The prime numbers among $1,\dots,6$ are $2$, $3$, $5$, so $k=3$ and $P(B)=\dfrac36=\dfrac12$.

c) No outcome is greater than $6$, so $k=0$ and $P(C)=0$.

d) All $6$ outcomes are less than $7$, so $k=6$ and $P(D)=1$.

So $P(A)=\dfrac12$, $P(B)=\dfrac12$, $P(C)=0$, $P(D)=1$.
:::

:::example A box of marbles
A box holds $3$ red, $5$ blue and $2$ yellow marbles of the same size. One marble is taken at random. Find the probability of the event $E$: "the marble is red" and the event $F$: "the marble is not blue".

**Solution.** The total number of marbles is $3+5+2=10$, so there are $10$ possible outcomes, equally likely. There are $3$ red marbles, so $P(E)=\dfrac{3}{10}$. A marble that is not blue is red or yellow: $3+2=5$ marbles, so $P(F)=\dfrac{5}{10}=\dfrac12$.

Check with the complementary event: a blue marble has probability $\dfrac{5}{10}$ and $1-\dfrac{5}{10}=\dfrac12$, correct.

So $P(E)=\dfrac{3}{10}$ and $P(F)=\dfrac12$.
:::

When an experiment has several stages, we must list the outcomes carefully so that none is missed or counted twice.

:::example Tossing two coins
A fair coin is tossed twice. Find the probability of the event $A$: "the two faces are the same" and the event $B$: "at least one head".

**Solution.** The possible outcomes are $TT$, $TH$, $HT$, $HH$, so $n=4$.

The event $A$ has favourable outcomes $TT$ and $HH$, so $k=2$ and $P(A)=\dfrac24=\dfrac12$.

The event $B$ has favourable outcomes $TH$, $HT$, $HH$ (at least one H), so $k=3$ and $P(B)=\dfrac34$.

So $P(A)=\dfrac12$ and $P(B)=\dfrac34$.
:::

We return to the box of slips at the start, using the four steps of solving a problem.

:::example Winning a prize in the draw
A box holds $20$ identical slips, of which $4$ say "Prize" (an imagined draw). You take one slip at random. Find the probability that you win a prize.

**Solution.**

*Understand.* The experiment is taking one slip; there are $20$ possible outcomes, of which $4$ are favourable for the event "win a prize".

*Plan.* The slips are identical and drawn without looking, so the outcomes are equally likely; use $P(E)=\dfrac kn$.

*Solve.* Let $E$ be the event "win a prize". We have $n=20$ and $k=4$, so $P(E)=\dfrac{4}{20}=\dfrac15=20\%$.

*Look back.* Check: the probability lies between $0$ and $1$, and winning is less likely than losing since $4<16$. The probability of losing is $1-\dfrac15=\dfrac45$. If the box had $8$ winning slips, the probability would double to $\dfrac{8}{20}=40\%$.

So the probability of winning a prize is $\dfrac15$, that is $20\%$.
:::

:::warning Mistakes to watch out for
- **Treating outcomes that are not equally likely as equally likely.** Wrong: tossing two coins has $3$ outcomes, "two heads", "two tails", "one of each", so the probability of "one of each" is $\dfrac13$. Why it is wrong: "one of each" consists of two outcomes, $TH$ and $HT$, so it is twice as likely as the others. Right: there are $4$ equally likely outcomes and the probability is $\dfrac24=\dfrac12$.
- **Using favourable to unfavourable instead of favourable to all.** Wrong: $P(\text{red})=\dfrac37$ when the box has $3$ red marbles and $7$ others. Why it is wrong: the denominator must be the total number of possible outcomes, $3+7=10$. Right: $P(\text{red})=\dfrac{3}{10}$.
- **Missing favourable outcomes.** Wrong: $P(\text{at least one head})=\dfrac24$ when tossing two coins (counting only $TH$, $HT$). Why it is wrong: the outcome $HH$ also has a head. Right: $\dfrac34$.
:::

**Connections.** This lesson uses fractions and percentages from earlier years, and systematic counting. It prepares the lesson on [experimental and theoretical probability](lesson:experimental-theoretical-probability), where we compare the number $\dfrac kn$ with the results obtained by actually repeating an experiment many times.

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- possible outcome | kết quả có thể
- sample space | không gian mẫu
- equally likely | đồng khả năng
- event | biến cố
- favourable outcome | kết quả thuận lợi
- probability | xác suất
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
- complementary event | biến cố đối
:::

## Summary

- A random experiment has possible outcomes that we cannot predict; they are equally likely if they have the same chance of occurring.
- A favourable outcome for an event $E$ is an outcome that makes $E$ happen.
- With $n$ equally likely possible outcomes and $k$ favourable outcomes, $P(E)=\dfrac kn$.
- $0\leq P(E)\leq1$; a certain event has probability $1$ and an impossible event has probability $0$.
- Probability of the complementary event: $P(\overline E)=1-P(E)$.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
A fair die is rolled. State the possible outcomes and the favourable outcomes for the event "the face shows a number of dots divisible by $3$", and find the probability of the event.

::hint
**What you need:** $P(E)=\dfrac kn$.

**Steps:**
1. List the $6$ possible outcomes.
2. Pick the numbers divisible by $3$.

::solution
The possible outcomes are $1$, $2$, $3$, $4$, $5$, $6$, so $n=6$. The favourable outcomes are $3$ and $6$, so $k=2$. Hence the probability is $\dfrac26=\dfrac13$.

So the probability is $\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise
A card is drawn at random from $12$ cards numbered $1$ to $12$. Find the probability that the number on the card:

a) is divisible by $4$;

b) has two digits;

c) is a prime number.

::hint
**What you need:** count the favourable outcomes $k$, then divide by $n=12$.

**Steps:**
1. List the cards satisfying each condition.
2. Work out $\dfrac{k}{12}$ and simplify.

::solution
There are $n=12$ possible outcomes.

a) The numbers divisible by $4$ are $4$, $8$, $12$: $k=3$, probability $\dfrac3{12}=\dfrac14$.

b) The numbers with two digits are $10$, $11$, $12$: $k=3$, probability $\dfrac3{12}=\dfrac14$.

c) The prime numbers are $2$, $3$, $5$, $7$, $11$: $k=5$, probability $\dfrac{5}{12}$.

**Answer.** a) $\dfrac14$. b) $\dfrac14$. c) $\dfrac5{12}$.
:::

:::exercise
A box holds $4$ white and $6$ black marbles of the same size. One marble is taken at random. Find the probability of taking a white marble, a black marble, and the sum of these two probabilities.

::hint
**What you need:** $n$ is the total number of marbles.

**Steps:**
1. Work out $n=4+6$.
2. Find the two probabilities and add them.

::solution
There are $n=10$ possible outcomes. The probability of a white marble is $\dfrac{4}{10}=\dfrac25$; the probability of a black marble is $\dfrac{6}{10}=\dfrac35$. The sum is $\dfrac25+\dfrac35=1$, because the two events are complementary.

**Answer.** $\dfrac25$; $\dfrac35$; the sum is $1$.
:::

:::exercise
A wheel is divided into $8$ equal parts numbered $1$ to $8$. Find the probability of each event:

a) $A$: "an even number greater than $4$".

b) $B$: "a number less than $9$".

c) $C$: "the number $10$".

::hint
**What you need:** a certain event has probability $1$ and an impossible event has probability $0$.

**Steps:**
1. List the favourable outcomes.
2. Watch for the special cases.

::solution
There are $n=8$ possible outcomes.

a) The even numbers greater than $4$ are $6$ and $8$: $k=2$, $P(A)=\dfrac28=\dfrac14$.

b) Every number from $1$ to $8$ is less than $9$: $k=8$, $P(B)=1$.

c) There is no number $10$ on the wheel: $k=0$, $P(C)=0$.

**Answer.** a) $\dfrac14$. b) $1$. c) $0$.
:::

:::exercise
A fair coin is tossed twice. Find the probability of the event "the two faces are different" and the event "both faces are heads".

::hint
**What you need:** list the $4$ outcomes $TT$, $TH$, $HT$, $HH$.

**Steps:**
1. Pick the favourable outcomes for each event.
2. Work out the ratio with $n=4$.

::solution
Two different faces: $TH$ and $HT$, so the probability is $\dfrac24=\dfrac12$. Both heads: $HH$, so the probability is $\dfrac14$.

**Answer.** $\dfrac12$; $\dfrac14$.
:::

:::exercise
Class 8A has $40$ students, of whom $18$ are boys. One student is chosen at random for cleaning duty. Find the probability that the student chosen is a boy and the probability that it is a girl.

::hint
**What you need:** the number of girls is the total minus the number of boys.

**Steps:**
1. Work out the number of girls.
2. Find the two probabilities.

::solution
The number of girls is $40-18=22$. There are $n=40$ possible outcomes. The probability of a boy is $\dfrac{18}{40}=\dfrac{9}{20}$; the probability of a girl is $\dfrac{22}{40}=\dfrac{11}{20}$.

Check: $\dfrac{9}{20}+\dfrac{11}{20}=1$.

**Answer.** $\dfrac{9}{20}$; $\dfrac{11}{20}$.
:::

:::exercise
A box holds $50$ identical draw slips, of which $2$ are first prizes, $5$ are second prizes, $8$ are third prizes and the rest win nothing (an imagined draw). One slip is drawn. Find the probability of winning any prize and the probability of winning nothing.

::hint
**What you need:** winning any prize includes all three kinds of prize.

**Steps:**
1. Work out the total number of winning slips.
2. Use the complementary event for "winning nothing".

::solution
The number of winning slips is $2+5+8=15$ and $n=50$. The probability of winning a prize is $\dfrac{15}{50}=\dfrac{3}{10}$. The probability of winning nothing is $1-\dfrac{3}{10}=\dfrac{7}{10}$ (there are $35$ losing slips, $\dfrac{35}{50}=\dfrac7{10}$).

**Answer.** $\dfrac3{10}$; $\dfrac7{10}$.
:::

:::exercise
Two fair dice are rolled at the same time. How many possible outcomes are there? Find the probability that the total number of dots is $7$.

::hint
**What you need:** each outcome is a pair (dots on the first die, dots on the second die).

**Steps:**
1. Count the pairs: $6\cdot6$.
2. List the pairs with total $7$.

::solution
Each die has $6$ possibilities, so there are $6\cdot6=36$ possible outcomes, equally likely. The pairs with total $7$ are $(1,6)$, $(2,5)$, $(3,4)$, $(4,3)$, $(5,2)$, $(6,1)$: $k=6$. The probability is $\dfrac{6}{36}=\dfrac16$.

**Answer.** $36$ outcomes; $\dfrac16$.
:::

:::exercise
Make all the two-digit numbers with different digits from the digits $1$, $2$, $3$. One of these numbers is chosen at random. Find the probability that it is even. (Revise writing a probability as a fraction in its simplest form.)

::hint
**What you need:** an even number ends in an even digit.

**Steps:**
1. List the two-digit numbers with different digits.
2. Count the even ones.

::solution
The numbers are $12$, $13$, $21$, $23$, $31$, $32$, so $n=6$. The even numbers are $12$ and $32$: $k=2$. The probability is $\dfrac26=\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise Challenge
A two-digit natural number (from $10$ to $99$) is chosen at random. Find the probability that it:

a) is divisible by $7$;

b) has digits that add up to $9$.

::hint
**What you need:** there are $99-10+1=90$ two-digit numbers.

**Steps:**
1. a) List the multiples of $7$ from $14$ to $98$.
2. b) List the numbers whose digits add up to $9$.

::solution
There are $n=90$ possible outcomes.

a) The two-digit multiples of $7$ are $14$, $21$, $28$, $\dots$, $98$, that is $7\cdot2$, $7\cdot3$, $\dots$, $7\cdot14$: there are $13$ of them. The probability is $\dfrac{13}{90}$.

b) The numbers whose digits add up to $9$ are $18$, $27$, $36$, $45$, $54$, $63$, $72$, $81$, $90$: there are $9$ of them. The probability is $\dfrac{9}{90}=\dfrac1{10}$.

**Answer.** a) $\dfrac{13}{90}$. b) $\dfrac1{10}$.
:::

## Mini test

:::quiz
::mc
A fair die is rolled. The probability that the face shows more than $4$ dots is
A. $\dfrac16$.
B. $\dfrac23$.
C. $\dfrac12$.
D. $\dfrac13$.
::key D
The favourable outcomes are $5$ and $6$, so $P=\dfrac26=\dfrac13$. A counts only one outcome; C and B count the favourable outcomes wrongly.

::mc
A box holds $3$ red, $5$ blue and $2$ yellow marbles. One marble is taken. The probability that it is not red is
A. $\dfrac{7}{10}$.
B. $\dfrac37$.
C. $\dfrac12$.
D. $\dfrac{3}{10}$.
::key A
There are $5+2=7$ non-red marbles out of $10$, so $P=\dfrac7{10}$. A is the probability of red, B uses $3$ out of $7$, C is the probability of blue.

::mc
A fair coin is tossed twice. The probability that the two faces are the same is
A. $\dfrac13$.
B. $\dfrac12$.
C. $\dfrac14$.
D. $\dfrac34$.
::key B
The favourable outcomes are $TT$ and $HH$, out of $4$ outcomes, so $P=\dfrac24=\dfrac12$. B thinks there are only $3$ outcomes, C counts only one outcome, D is the probability of at least one head.

::mc
A card is drawn from $20$ cards numbered $1$ to $20$. The probability that the number is divisible by $5$ is
A. $\dfrac14$.
B. $\dfrac45$.
C. $\dfrac15$.
D. $\dfrac1{20}$.
::key C
There are $4$ such numbers ($5$, $10$, $15$, $20$), so $P=\dfrac{4}{20}=\dfrac15$. A uses $\dfrac{5}{20}$, B takes $\dfrac{4}{5}$, D counts only one outcome.

::tf
A fair die is rolled. Decide whether each statement is true or false.
a) The experiment has $5$ possible outcomes.
b) The probability of an even number of dots is $\dfrac12$.
c) The probability of more than $6$ dots is $0$.
d) The probability of a prime number of dots is $\dfrac13$.
::key F T T F
a) False: there are $6$ outcomes. b) True: $\dfrac36=\dfrac12$. c) True: it is an impossible event. d) False: the primes are $2$, $3$, $5$, so the probability is $\dfrac36=\dfrac12$.

::sa
A box holds $20$ slips, of which $4$ win a prize. One slip is drawn. What is the probability of winning, as a percentage?
::key 20
$\dfrac4{20}=\dfrac15=20\%$.

::sa
Two fair dice are rolled at the same time. How many possible outcomes are there?
::key 36
$6\cdot6=36$.
:::
