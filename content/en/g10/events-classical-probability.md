---
title: Events and the classical definition of probability
description: Describe random experiments with sample spaces and events, then compute probabilities of equally likely outcomes with counting and complements.
minutes: 22
---

:::goals
- Describe a random experiment by its sample space $\Omega$.
- Write events as subsets of $\Omega$, including certain, impossible and complementary events.
- Compute $P(A)=\dfrac{n(A)}{n(\Omega)}$ for equally likely outcomes, using counting rules and combinations when needed.
- Use the properties $0\le P(A)\le 1$ and $P(\overline{A})=1-P(A)$.
:::

Class 10A has $40$ students: $22$ girls and $18$ boys. The teacher draws $2$ students at random to attend the school's anniversary ceremony. How likely is it that both chosen students are girls? And how likely is it that at least one is a boy?

Nobody knows in advance which names will be drawn. Even so, we can say with some confidence that one thing is "more likely" than another. Mathematics makes that feeling precise: it measures the **likelihood** with a number between $0$ and $1$. To get that number, the first job is always to list (or count) carefully **what can happen**.

## Experiments and sample spaces

We start with a very familiar game: toss a coin twice. Before tossing we do not know the result, but we know for sure it is one of four possibilities. Write $H$ for heads and $T$ for tails, and record the two tosses in order:

$$HH,\quad HT,\quad TH,\quad TT.$$

The sentence "exactly one head" is true for $HT$ and $TH$ and false for the other two. Notice that each statement about the result corresponds to **a subset** of the set of four outcomes, made up of the outcomes that make it true. That is the most important idea in this section. Now we give these ideas names.

:::definition Experiment, sample space, event
- A **random experiment** is an activity whose result cannot be predicted, although all possible results are known.
- The set of all possible outcomes is the **sample space**, written $\Omega$.
- An **event** $A$ is a subset of $\Omega$. Each outcome in $A$ is called a **favourable** outcome for $A$.
- $\Omega$ is the **certain event**, $\varnothing$ is the **impossible event**.
- The **complementary event** of $A$ is $\overline{A}=\Omega\setminus A$: $\overline{A}$ happens exactly when $A$ does not.
:::

:::example Tossing a coin twice
Toss a coin twice. Write $\Omega$, the event $A$: "exactly one head", the event $B$: "the first toss is tails", and the complement $\overline{A}$.

**Solution.** We list the outcomes in the order toss $1$, toss $2$:

$$\Omega=\{HH, HT, TH, TT\},\quad A=\{HT, TH\},\quad B=\{TH, TT\},\quad \overline{A}=\{HH, TT\}.$$

So $n(\Omega)=4$, $n(A)=2$, $n(B)=2$; the event $\overline{A}$ is "both tosses show the same face".
:::

## The classical definition of probability

A fair coin has no reason to favour one face over the other, so the four outcomes above are equally likely. The event $A$ takes up $2$ of the $4$ outcomes, so it is natural to say the chance of $A$ is $\dfrac24=\dfrac12$. The definition below simply writes that idea as a formula.

:::definition Classical definition of probability
Let an experiment have a sample space $\Omega$ with finitely many **equally likely** outcomes. The probability of an event $A$ is
$$P(A)=\frac{n(A)}{n(\Omega)}.$$
:::

:::theorem Properties
- $0\le P(A)\le 1$, $P(\Omega)=1$, $P(\varnothing)=0$.
- $P(\overline{A})=1-P(A)$.
:::

**Why are these properties true?** Since $\varnothing\subset A\subset\Omega$, we have $0\le n(A)\le n(\Omega)$; dividing by $n(\Omega)$ gives the first property. The outcomes of $\Omega$ split into two non-overlapping parts, $A$ and $\overline{A}$, so $n(A)+n(\overline{A})=n(\Omega)$; dividing by $n(\Omega)$ gives $P(A)+P(\overline{A})=1$.

:::example Rolling one die
Roll a fair die. Find the probabilities of the events $A$: "the number is prime", $B$: "the number is at least $5$", $C$: "the number is divisible by $7$".

**Solution.** $\Omega=\{1, 2, 3, 4, 5, 6\}$ has $6$ equally likely outcomes. We list the favourable outcomes:

$$A=\{2, 3, 5\},\quad B=\{5, 6\},\quad C=\varnothing.$$

Hence $P(A)=\dfrac36=\dfrac12$, $P(B)=\dfrac26=\dfrac13$, $P(C)=0$.

So $P(A)=\dfrac12$, $P(B)=\dfrac13$, and $C$ is the impossible event.
:::

With two dice there are already $36$ outcomes, and listing them one by one makes it easy to miss some. A table lets us see them all without forgetting any.

:::example The total of two dice
Roll two fair dice. Find the probability that the total is $7$, and that the total is at least $10$.

**Solution.** Each outcome is an ordered pair (score on the first die, score on the second), so by the multiplication rule $n(\Omega)=6\cdot6=36$. The table shows the total for each pair:

| Die 1 \ Die 2 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

A total of $7$ appears $6$ times (the anti-diagonal). Totals $10$, $11$, $12$ appear $3+2+1=6$ times. Hence

$$P(\text{total}=7)=\frac{6}{36}=\frac16,\qquad P(\text{total}\ge10)=\frac{6}{36}=\frac16.$$

So both events have probability $\dfrac16$.
:::

## Counting with combinations

When several objects are taken at once, the number of outcomes grows very fast, and a table no longer has room. This is where the counting tools we have learnt come in: we count $n(\Omega)$ and $n(A)$ with the formulas from [Permutations, arrangements and combinations](lesson:permutations-combinations).

:::example Drawing marbles from a box
A box holds $5$ red marbles and $3$ blue marbles of the same size. Two marbles are drawn at random at the same time. Find the probability of each of the following events:

a) $A$: "Both marbles drawn are red";
b) $B$: "The two marbles drawn have different colours".

**Solution.** The $2$ marbles are drawn together, so there is no order: each outcome is a combination of $2$ of the $8$ marbles. Hence $n(\Omega)=\binom{8}{2}=28$.

a) Each outcome favourable to $A$ is a choice of $2$ of the $5$ red marbles, so $n(A)=\binom{5}{2}=10$. Hence
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{10}{28}=\frac{5}{14}.$$

b) For different colours, we choose $1$ red marble ($5$ ways) **then** $1$ blue marble ($3$ ways). By the multiplication rule, $n(B)=5\cdot3=15$. Hence
$$P(B)=\frac{n(B)}{n(\Omega)}=\frac{15}{28}.$$

So the probability that both are red is $\dfrac{5}{14}$, and that they have different colours is $\dfrac{15}{28}$.
:::

## Using the complementary event

With an "**at least one**" question, counting directly often means splitting into many cases: one, two, three… The complementary event ("none at all"), on the other hand, is usually a single case. So we find the probability of the complement and take it away from $1$.

:::example At least one head
Toss a fair coin $3$ times. Find the probability of at least one head.

**Solution.** Each toss has $2$ outcomes, so $n(\Omega)=2^3=8$. Let $A$ be "at least one head". The complement $\overline{A}$ is "no head at all", which is the single outcome $TTT$:

$$P(A)=1-P(\overline{A})=1-\frac18=\frac78.$$

So the probability of at least one head is $\dfrac78$.
:::

We now have everything we need to answer the draw question from the start of the lesson.

:::example Drawing two students for the ceremony
The class has $22$ girls and $18$ boys. Two students are chosen at random. Find the probability that:

a) Both students chosen are girls;
b) At least one student chosen is a boy.

**Solution.**

*Understand.* The two students are chosen together, without order; every group of $2$ is equally likely to be chosen.

*Plan.* Count $n(\Omega)$ and $n(A)$ with combinations; the event in part b) is the complement of the event in part a).

*Solve.* We have $n(\Omega)=\binom{40}{2}=780$ and $n(A)=\binom{22}{2}=231$. Hence

$$P(A)=\frac{231}{780}=\frac{77}{260}\approx0.30,\qquad P(\overline{A})=1-\frac{77}{260}=\frac{183}{260}\approx0.70.$$

*Look back.* Although there are more girls than boys, the chance that both are girls is only about $30\%$, because both "girl" picks have to happen.

So the probability that both are girls is $\dfrac{77}{260}$, and the probability of at least one boy is $\dfrac{183}{260}$.
:::

:::warning Common mistakes
- **Using the classical definition when outcomes are not equally likely.** Saying "with two dice the total takes $11$ values from $2$ to $12$, so $P(\text{total}=7)=\dfrac1{11}$". Wrong, because the totals are not equally likely (total $2$ has $1$ pair, total $7$ has $6$ pairs). Right: count over the $36$ ordered pairs to get $\dfrac16$.
- **Mixing ordered and unordered counts.** Drawing $2$ marbles together but counting $n(\Omega)=P(8, 2)=56$ while counting $n(A)=\binom{5}{2}=10$. Wrong, because both counts must be of the same kind. Right: use combinations for both (or arrangements for both).
- **Negating "at least one" wrongly.** Writing the complement of "at least one boy" as "at least one girl". Wrong, because these two events can happen together. Right: the complement is "no boy at all", that is, both are girls.
- **A probability above $1$.** If you get $P(A)>1$ or $P(A)<0$, a count is certainly wrong. This is a quick and useful check; glance at it every time you finish.
:::

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- outcome | kết quả
- sample space | không gian mẫu
- event | biến cố
- favourable outcome | kết quả thuận lợi
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
- complementary event | biến cố đối
- equally likely | đồng khả năng
- probability | xác suất
:::

## Summary

- **Sample space** $\Omega$: the set of all outcomes of the experiment. **Event**: a subset of $\Omega$.
- $\Omega$ is the certain event, $\varnothing$ the impossible event, $\overline{A}=\Omega\setminus A$ the complementary event.
- Equally likely outcomes: $P(A)=\dfrac{n(A)}{n(\Omega)}$.
- $0\le P(A)\le1$, $P(\Omega)=1$, $P(\varnothing)=0$, $P(\overline{A})=1-P(A)$.
- Count $n(\Omega)$ and $n(A)$ with counting rules, a table or combinations; both counts must be of the same kind (both ordered or both unordered).
- "At least one": go through the complement "none at all".

Think back to the draw at the start: even though the class has more girls, the chance that both chosen students are girls is only about $30\%$, and the chance of at least one boy is about $70\%$. First impressions can mislead us; careful counting and dividing give an answer we can trust.

## Practice

Each exercise comes with the ideas you need and a few steps to get going. Have a go on your own first, and do not worry about mistakes; comparing with the solution afterwards shows you how much you have understood.

:::exercise
Roll a fair die. Find the probability that the number shown is divisible by $3$.

::hint
**What you need:** $P(A)=\dfrac{n(A)}{n(\Omega)}$.

**Steps:**
1. Write $\Omega$.
2. List the outcomes divisible by $3$.

::solution
The sample space is $\Omega=\{1, 2, 3, 4, 5, 6\}$, so $n(\Omega)=6$. The die is fair, so these outcomes are equally likely.

Let $A$ be the event "The number shown is divisible by $3$". We have $A=\{3, 6\}$, so $n(A)=2$.

Hence
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac26=\frac13.$$

So the probability that the number shown is divisible by $3$ is $\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise
Toss a fair coin $3$ times. Write the sample space and find the probability of exactly two heads.

::hint
**What you need:** each outcome is a string of three letters $H$, $T$; the multiplication rule gives $n(\Omega)=2^3$.

**Steps:**
1. List the $8$ outcomes.
2. Pick those with exactly two letters $H$.

::solution
Write $H$ for heads and $T$ for tails. Each outcome is a string of three letters giving the results of the three tosses in order. The sample space is
$$\Omega=\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}.$$

We have $n(\Omega)=8$. The coin is fair, so these outcomes are equally likely.

Let $A$ be the event "Exactly two heads". We have $A=\{HHT, HTH, THH\}$, so $n(A)=3$.

Hence $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac38$.

So the probability of exactly two heads is $\dfrac38$.

**Answer.** $\dfrac38$.
:::

:::exercise
Roll two fair dice. Find the probability of each of the following events:

a) $A$: "The total of the two scores is $8$";
b) $B$: "Both dice show the same number".

::hint
**What you need:** $n(\Omega)=36$; use the table of totals.

**Steps:**
1. List the pairs with total $8$.
2. List the pairs $(1, 1), \dots, (6, 6)$.

::solution
Each outcome is a pair $(i, j)$, where $i$ and $j$ are the scores on the first and the second die. By the multiplication rule, $n(\Omega)=6\cdot6=36$. The dice are fair, so these outcomes are equally likely.

a) We have $A=\{(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)\}$, so $n(A)=5$. Hence
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{5}{36}.$$

b) We have $B=\{(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)\}$, so $n(B)=6$. Hence
$$P(B)=\frac{n(B)}{n(\Omega)}=\frac{6}{36}=\frac16.$$

So $P(A)=\dfrac{5}{36}$ and $P(B)=\dfrac16$.

**Answer.** a) $\dfrac5{36}$; b) $\dfrac16$.
:::

:::exercise
A box holds $4$ red balls and $6$ white balls. Two balls are drawn at random at the same time. Find the probability that both are white.

::hint
**What you need:** drawn together, so use combinations for both $n(\Omega)$ and $n(A)$.

**Steps:**
1. Compute $n(\Omega)=\binom{10}{2}$.
2. Compute $n(A)=\binom{6}{2}$.

::solution
The box holds $4+6=10$ balls in total. Two balls are drawn together, so each outcome is a combination of $2$ of the $10$ balls. Hence
$$n(\Omega)=\binom{10}{2}=45.$$

Let $A$ be the event "Both balls drawn are white". Each outcome favourable to $A$ is a choice of $2$ of the $6$ white balls, so
$$n(A)=\binom{6}{2}=15.$$

Hence $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac{15}{45}=\dfrac13$.

So the probability that both balls drawn are white is $\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise
Roll two fair dice. Decide whether each statement is true or false.

a) The sample space has $36$ outcomes.
b) The probability that the total is $7$ is $\dfrac7{36}$.
c) The probability that the product of the scores is even is $\dfrac34$.
d) The probability that at least one die shows a $6$ is $\dfrac16$.

::hint
**What you need:** $n(\Omega)=6\cdot6$; a product is odd exactly when both numbers are odd; use the complement for c) and d).

**Steps:**
1. Count the pairs with total $7$.
2. Count the pairs with an odd product, then take the complement.
3. Count the pairs with no $6$, then take the complement.

::solution
a) **True.** Each die has $6$ outcomes, so by the multiplication rule $n(\Omega)=6\cdot6=36$.

b) **False.** The outcomes with total $7$ are $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$: there are $6$ of them. Hence the probability is $\dfrac6{36}=\dfrac16$, not $\dfrac7{36}$.

c) **True.** Let $C$ be the event "The product of the scores is even". Its complement $\overline{C}$ is "The product of the scores is odd", which happens exactly when both scores are odd. Each die has $3$ odd faces, so $n(\overline{C})=3\cdot3=9$. Hence
$$P(C)=1-P(\overline{C})=1-\frac9{36}=\frac34.$$

d) **False.** Let $D$ be the event "At least one die shows a $6$". Its complement $\overline{D}$ is "Neither die shows a $6$"; each die then has $5$ outcomes, so $n(\overline{D})=5\cdot5=25$. Hence
$$P(D)=1-\frac{25}{36}=\frac{11}{36}.$$

So statements a) and c) are true; statements b) and d) are false.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
A team has $20$ boys and $15$ girls. Three students are chosen at random. Find the probability that at least one girl is chosen (give your answer to 2 decimal places).

::hint
**What you need:** $P(A)=1-P(\overline{A})$; $\overline{A}$: "all three are boys".

**Steps:**
1. Compute $n(\Omega)=\binom{35}{3}$.
2. Compute $n(\overline{A})=\binom{20}{3}$.
3. Subtract the ratio from $1$ and round.

::solution
The team has $20+15=35$ students in total. Three students are chosen without order, so
$$n(\Omega)=\binom{35}{3}=6545.$$

Let $A$ be the event "At least one of the three students chosen is a girl". Its complement $\overline{A}$ is "All three students chosen are boys". We have
$$n(\overline{A})=\binom{20}{3}=1140.$$

It follows that $P(\overline{A})=\dfrac{1140}{6545}=\dfrac{228}{1309}$. Hence
$$P(A)=1-P(\overline{A})=1-\frac{228}{1309}=\frac{1081}{1309}\approx0.83.$$

So the probability that at least one girl is chosen is about $0.83$.

**Answer.** $0.83$.
:::

:::exercise
A suitcase has a combination lock with three wheels, each showing the digits $0$ to $9$. Ha has forgotten the code and remembers only that its three digits are different. She tries one random code with three different digits. Find the probability that the lock opens at that try.

::hint
**What you need:** the order of the digits on the lock matters, so use arrangements.

**Steps:**
1. Count the codes with three different digits: $P(10, 3)$.
2. Only one code is correct.

::solution
Each code is an ordered string of $3$ different digits taken from $10$ digits, that is, an arrangement of $3$ out of $10$ elements. Hence
$$n(\Omega)=P(10, 3)=10\cdot9\cdot8=720.$$

Let $A$ be the event "The lock opens at that try". Only one code is correct, so $n(A)=1$.

Hence $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac1{720}$.

So the probability that the lock opens at that try is $\dfrac1{720}$.

**Answer.** $\dfrac1{720}$.
:::

:::exercise
(Review of [Counting rules](lesson:counting-rules)) A three-digit number with distinct digits is made at random from the digits $1, 2, 3, 4, 5$. Find the probability that it is even.

::hint
**What you need:** the multiplication rule; fill the restricted place (the units digit) first.

**Steps:**
1. Count all the numbers: $5\cdot4\cdot3$.
2. Count the even ones: the units digit is $2$ or $4$.

::solution
To make a three-digit number with distinct digits, we choose in turn the hundreds digit ($5$ ways), the tens digit ($4$ ways) and the units digit ($3$ ways). By the multiplication rule,
$$n(\Omega)=5\cdot4\cdot3=60.$$

Let $A$ be the event "The number made is even". An even number has units digit $2$ or $4$, so we choose the units digit first:

- units digit: $2$ ways;
- hundreds digit: $4$ ways (different from the units digit);
- tens digit: $3$ ways (different from the two digits already chosen).

By the multiplication rule, $n(A)=2\cdot4\cdot3=24$. Hence
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{24}{60}=\frac25.$$

So the probability that the number made is even is $\dfrac25$.

**Answer.** $\dfrac25$.
:::

:::exercise
(Review of [Sets and set operations](lesson:sets-and-set-operations)) A box holds $30$ cards numbered $1$ to $30$. One card is drawn at random. Find the probability that its number is divisible by $2$ or by $3$.

::hint
**What you need:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$; a number divisible by both $2$ and $3$ is divisible by $6$.

**Steps:**
1. Count the numbers divisible by $2$, by $3$ and by $6$.
2. Find $n(A\cup B)$ and divide by $30$.

::solution
One card is drawn from $30$ cards, so $n(\Omega)=30$.

Let $A$ be the event "The number on the card is divisible by $2$" and $B$ the event "The number on the card is divisible by $3$". The event whose probability we need is $A\cup B$.

Among the numbers from $1$ to $30$ there are $30\div2=15$ numbers divisible by $2$ and $30\div3=10$ numbers divisible by $3$, so $n(A)=15$, $n(B)=10$.

A number is divisible by both $2$ and $3$ exactly when it is divisible by $6$; there are $30\div6=5$ such numbers, so $n(A\cap B)=5$.

We have
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)=15+10-5=20.$$

Hence $P(A\cup B)=\dfrac{20}{30}=\dfrac23$.

So the probability that the number on the card is divisible by $2$ or by $3$ is $\dfrac23$.

**Answer.** $\dfrac23$.
:::

:::exercise Challenge
Five students An, Binh, Chi, Dung and Ha stand in a row in random order. Find the probability that An and Binh stand next to each other.

::hint
**What you need:** the number of permutations $n!$; tie the two students into one block.

**Steps:**
1. Compute $n(\Omega)=5!$.
2. Treat An and Binh as one block: $4!$ ways to arrange the blocks, times $2$ orders inside the block.

::solution
Each way of standing the five students in a row is a permutation of $5$ elements, so
$$n(\Omega)=5!=120.$$

Let $A$ be the event "An and Binh stand next to each other". We treat An and Binh as one block. Then:

- arranging this block with the other three students ($4$ places in all): $4!=24$ ways;
- inside the block, An and Binh can swap places: $2$ ways.

By the multiplication rule, $n(A)=2\cdot24=48$. Hence
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{48}{120}=\frac25.$$

So the probability that An and Binh stand next to each other is $\dfrac25$.

**Answer.** $\dfrac25$.
:::

## Mini test

:::quiz
::mc
A coin is tossed twice ($H$: heads, $T$: tails). The complementary event of "at least one head" is
A. $\{TT\}$.
B. $\{HH\}$.
C. $\{HT, TH\}$.
D. $\{HT, TH, TT\}$.
::key A
The complement happens exactly when there is "no head at all", which is the single outcome $TT$. Option D is "at least one tail", which can happen at the same time as the given event.

::mc
A fair die is rolled. The probability that the number shown is a factor of $6$ is
A. $\dfrac12$.
B. $\dfrac23$.
C. $\dfrac13$.
D. $\dfrac16$.
::key B
The factors of $6$ in $\Omega$ are $1, 2, 3, 6$, so $P=\dfrac46=\dfrac23$. Option A forgets the factor $1$; C is the probability of the complementary event.

::mc
Two fair dice are rolled. The probability that the total is $9$ is
A. $\dfrac{1}{11}$.
B. $\dfrac{1}{18}$.
C. $\dfrac19$.
D. $\dfrac{4}{21}$.
::key C
There are $36$ ordered pairs; a total of $9$ comes from $(3, 6)$, $(4, 5)$, $(5, 4)$, $(6, 3)$, so $P=\dfrac{4}{36}=\dfrac19$. Option A treats the $11$ possible totals as equally likely; B counts only $2$ unordered pairs.

::mc
A box holds $6$ red marbles and $4$ blue marbles. Three marbles are drawn at random at the same time. The probability that all three are red is
A. $\dfrac{27}{125}$.
B. $\dfrac{1}{36}$.
C. $\dfrac35$.
D. $\dfrac16$.
::key D
$n(\Omega)=\binom{10}{3}=120$ and $n(A)=\binom{6}{3}=20$, so $P=\dfrac{20}{120}=\dfrac16$. Option B uses arrangements $P(10, 3)=720$ for $\Omega$ but combinations for $A$; A treats the draw as if each marble were put back.

::tf
A box holds $20$ cards numbered $1$ to $20$. One card is drawn at random.
a) The sample space has $20$ elements.
b) The probability that the number is divisible by $5$ is $\dfrac15$.
c) The probability that the number is prime is $\dfrac{9}{20}$.
d) The probability that the number is not divisible by $3$ is $\dfrac23$.
::key T T F F
a) True. b) True: $5, 10, 15, 20$, so $P=\dfrac{4}{20}=\dfrac15$. c) False: there are $8$ primes ($2, 3, 5, 7, 11, 13, 17, 19$; the number $1$ is not prime), so $P=\dfrac25$. d) False: $6$ numbers are divisible by $3$, so $P=1-\dfrac{6}{20}=\dfrac{7}{10}$.

::sa
A fair coin is tossed $4$ times. Find the probability of at least one tail (rounded to two decimal places).
::key 0.94
$n(\Omega)=2^4=16$. The complement "no tail at all" is the single outcome $HHHH$, so $P=1-\dfrac{1}{16}=\dfrac{15}{16}\approx0.94$.

::sa
A tour group of $12$ people includes $5$ people from Hanoi. Three people are chosen at random. Find the probability that at least one of them is from Hanoi (rounded to two decimal places).
::key 0.84
$n(\Omega)=\binom{12}{3}=220$. The complement "nobody from Hanoi" has $\binom{7}{3}=35$ outcomes. So $P=1-\dfrac{35}{220}=\dfrac{37}{44}\approx0.84$.
:::
