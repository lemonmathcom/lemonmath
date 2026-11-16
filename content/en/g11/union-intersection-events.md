---
title: Union, intersection and independent events
description: Understand union, intersection, complement, mutually exclusive and independent events; use P(AB)=P(A)P(B) and counting to find probabilities.
minutes: 25
---

:::goals
- Understand and describe the union $A\cup B$, the intersection $A\cap B$ and the complement $\overline A$ of events.
- Recognise mutually exclusive events.
- Understand independent events and use the condition $P(AB)=P(A)\,P(B)$ to test them.
- Apply this to dice, cards, surveys and real-life situations.
:::

Suppose that in a class of $40$ students, $25$ like football, $18$ like basketball and $8$ like both (assumed figures). A student is chosen at random. What is the probability that the student likes at least one of the two sports? Are the two preferences independent? To answer, we need the language of union, intersection and independent events.

## Exploration: two events on the same die

Roll a fair die, which has $6$ equally likely outcomes. Let $A$ be "the number is even" and $B$ be "the number is at least $4$".

| Number | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| In $A$ | no | yes | no | yes | no | yes |
| In $B$ | no | no | no | yes | yes | yes |

The outcomes favourable to $A$ are $\{2,4,6\}$ and to $B$ are $\{4,5,6\}$. The outcomes in at least one of the events are $\{2,4,5,6\}$; those in both are $\{4,6\}$. These two sets give two new events.

## Union and intersection

:::definition Union, intersection and complement of events
Let $A$ and $B$ be two events of the same experiment.
- The **union** $A\cup B$ occurs when **at least one** of $A$, $B$ occurs.
- The **intersection** $A\cap B$ (also written $AB$) occurs when **both** $A$ and $B$ occur.
- The **complement** of $A$, written $\overline A$, occurs when $A$ does not occur.
:::

The set of outcomes favourable to $A\cup B$ is the union of the sets favourable to $A$ and to $B$; the set for $A\cap B$ is their intersection. In the die example, $A\cup B=\{2,4,5,6\}$ and $A\cap B=\{4,6\}$.

:::definition Mutually exclusive events
Two events $A$ and $B$ are **mutually exclusive** if they cannot occur together, that is $A\cap B=\varnothing$. Then $P(AB)=0$.
:::

An event $A$ and its complement $\overline A$ are always mutually exclusive, and $P(A)+P(\overline A)=1$.

:::definition Independent events
Two events $A$ and $B$ are **independent** if the occurrence or non-occurrence of one does not change the probability of the other. Then
$$P(AB)=P(A)\,P(B).$$
Conversely, if $P(AB)=P(A)\,P(B)$ then $A$ and $B$ are independent.
:::

If $A$ and $B$ are independent, then the pairs $A$ and $\overline B$, $\overline A$ and $B$, $\overline A$ and $\overline B$ are also independent.

## Examples

First, a union and an intersection on a die.

:::example Union and intersection of two events
Roll a fair die. Let $A$ be "the number is even" and $B$ be "the number is at least $4$". Describe $A\cup B$ and $A\cap B$ and find their probabilities.

**Solution.** We have $A=\{2,4,6\}$ and $B=\{4,5,6\}$. So $A\cup B=\{2,4,5,6\}$ has $4$ outcomes and $A\cap B=\{4,6\}$ has $2$ outcomes. Since the $6$ outcomes are equally likely,
$$P(A\cup B)=\frac46=\frac23,\qquad P(A\cap B)=\frac26=\frac13.$$

So $P(A\cup B)=\dfrac23$ and $P(A\cap B)=\dfrac13$.
:::

Next, a deck of cards.

:::example Drawing one card
A card is drawn at random from a standard deck of $52$ cards. Let $A$ be "a heart is drawn" and $B$ be "a king is drawn". Find $P(A\cup B)$ and $P(A\cap B)$.

**Solution.** There are $13$ hearts and $4$ kings. The intersection $A\cap B$ contains only the king of hearts, that is $1$ outcome. The union $A\cup B$ contains the $13$ hearts and the other $3$ kings (not hearts), a total of $16$ outcomes. So
$$P(A\cap B)=\frac1{52},\qquad P(A\cup B)=\frac{16}{52}=\frac4{13}.$$

So $P(A\cap B)=\dfrac1{52}$ and $P(A\cup B)=\dfrac4{13}$.
:::

Now mutually exclusive events.

:::example Mutually exclusive events
A card is drawn at random from a standard deck of $52$ cards. Let $A$ be "an ace is drawn" and $B$ be "a queen is drawn". Are these events mutually exclusive? Are they independent?

**Solution.** A card cannot be both an ace and a queen, so $A\cap B=\varnothing$; the events are mutually exclusive and $P(AB)=0$. On the other hand, $P(A)=P(B)=\dfrac4{52}=\dfrac1{13}$, so $P(A)\,P(B)=\dfrac1{169}\neq0$. Hence $P(AB)\neq P(A)\,P(B)$ and the events are **not** independent.

So $A$ and $B$ are mutually exclusive but not independent.
:::

Then testing independence.

:::example Testing independence
Roll a fair die twice. Let $A$ be "the first roll is $3$", $B$ be "the sum of the two rolls is $7$", and $C$ be "the sum of the two rolls is $8$". Decide whether $A$ is independent of $B$ and whether $A$ is independent of $C$.

**Solution.** There are $36$ equally likely outcomes. We have $P(A)=\dfrac6{36}=\dfrac16$, $P(B)=\dfrac6{36}=\dfrac16$ (the pairs $(1,6),(2,5),\dots,(6,1)$) and $P(C)=\dfrac5{36}$.

The intersection $A\cap B$ is only $(3,4)$, so $P(AB)=\dfrac1{36}=\dfrac16\cdot\dfrac16=P(A)\,P(B)$. So $A$ and $B$ are independent.

The intersection $A\cap C$ is only $(3,5)$, so $P(AC)=\dfrac1{36}$, while $P(A)\,P(C)=\dfrac16\cdot\dfrac5{36}=\dfrac5{216}$. The two values differ, so $A$ and $C$ are not independent.

So $A$ and $B$ are independent, but $A$ and $C$ are not.
:::

Finally, we return to the survey from the start, in four steps.

:::example Application: a survey of preferences in a class
Suppose that in a class of $40$ students, $25$ like football, $18$ like basketball and $8$ like both (assumed figures). A student is chosen at random. Let $A$ be "the student likes football" and $B$ be "the student likes basketball". Find $P(A\cup B)$ and decide whether the two events are independent.

**Solution.**

*Understand.* We need the probability that the student likes at least one sport, $P(A\cup B)$, and a comparison of $P(AB)$ with $P(A)\,P(B)$.

*Plan.* Count the students who like at least one sport by adding the two groups and subtracting the students counted twice (those who like both). Then compare the probabilities.

*Solve.* There are $25+18-8=35$ students who like at least one sport, so $P(A\cup B)=\dfrac{35}{40}=\dfrac78$. Also $P(A)=\dfrac{25}{40}=\dfrac58$, $P(B)=\dfrac{18}{40}=\dfrac9{20}$ and $P(AB)=\dfrac8{40}=\dfrac15$. The product is $P(A)\,P(B)=\dfrac58\cdot\dfrac9{20}=\dfrac9{32}\approx0.28$, while $P(AB)=0.2$. The values differ, so the events are not independent.

So $P(A\cup B)=\dfrac78$ and the events are not independent.

*Look back.* Is the result reasonable? The probability $\dfrac78$ must exceed each of $P(A)=\dfrac58$ and $P(B)=\dfrac9{20}$, and it does. The remaining $5$ students like neither sport, so $P(\overline{A\cup B})=\dfrac18$ and $\dfrac78+\dfrac18=1$. Non-independence is also reasonable: among the students who like football, the proportion who like basketball is $\dfrac8{25}=0.32$, lower than the overall proportion $\dfrac9{20}=0.45$, so knowing a student likes football makes basketball less likely.
:::

:::warning Common mistakes
- **Union means both.** Wrong: $A\cup B$ occurs when $A$ and $B$ both occur. Why it is wrong: that is the intersection. Right: $A\cup B$ occurs when at least one of them occurs.
- **Adding the numbers of outcomes directly for a union.** Wrong: $n(A\cup B)=n(A)+n(B)$ in the heart-or-king example. Why it is wrong: the king of hearts is counted twice. Right: $n(A\cup B)=n(A)+n(B)-n(A\cap B)=13+4-1=16$.
- **Mutually exclusive means independent.** Wrong: $A$, $B$ are mutually exclusive, so they are independent. Why it is wrong: mutually exclusive gives $P(AB)=0$, while independence needs $P(AB)=P(A)P(B)$; these agree only when a probability is $0$. Right: two events with positive probability that are mutually exclusive are not independent.
- **Independent means they cannot occur together.** Wrong: $A$, $B$ are independent, so $A\cap B=\varnothing$. Why it is wrong: independent events can still occur together. Right: $P(AB)=P(A)\,P(B)>0$ when both probabilities are positive.
:::

**Connections.** This lesson uses the classical definition of probability and counting outcomes from earlier lessons. The lesson on [the addition rule](lesson:addition-rule) will turn the count $n(A\cup B)=n(A)+n(B)-n(A\cap B)$ into the formula $P(A\cup B)=P(A)+P(B)-P(AB)$. In practice, surveys, quality control and risk forecasts all need us to tell unions, intersections and independence apart.

## Terms

:::terms
- biến cố hợp | union of events
- biến cố giao | intersection of events
- biến cố đối | complementary event
- biến cố xung khắc | mutually exclusive events
- biến cố độc lập | independent events
- phép thử | experiment
- không gian mẫu | sample space
- kết quả thuận lợi | favourable outcome
- xác suất | probability
- bộ bài tây | standard deck of cards
:::

## Summary

- $A\cup B$: at least one of the events occurs; $A\cap B$ (or $AB$): both occur; $\overline A$: $A$ does not occur.
- $A$, $B$ are mutually exclusive if $A\cap B=\varnothing$, and then $P(AB)=0$.
- $A$, $B$ are independent if and only if $P(AB)=P(A)\,P(B)$.
- If $A$, $B$ are independent, so are $A$ and $\overline B$; mutually exclusive and independent are different ideas.
- Counting a union: $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
Roll a fair die. Let $A$ be "the number is divisible by $3$" and $B$ be "the number is odd". Describe $A\cup B$ and $A\cap B$ and find their probabilities.

::hint
**Knowledge:** list the favourable outcomes; union and intersection.

**Hints on the steps:**
1. List $A$ and $B$.
2. Find the union and the intersection, then divide by $6$.

::solution
$A=\{3,6\}$, $B=\{1,3,5\}$. So $A\cup B=\{1,3,5,6\}$ and $A\cap B=\{3\}$. Hence $P(A\cup B)=\dfrac46=\dfrac23$ and $P(A\cap B)=\dfrac16$.

**Answer.** $\dfrac23$ and $\dfrac16$.
:::

:::exercise
A card is drawn at random from a standard deck of $52$ cards. Let $A$ be "a spade" and $B$ be "a jack, queen or king". Find $P(A\cup B)$ and $P(A\cap B)$.

::hint
**Knowledge:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

**Hints on the steps:**
1. Count $n(A)=13$ and $n(B)=12$.
2. Count the intersection: the jack, queen and king of spades.

::solution
$n(A\cap B)=3$ (the jack, queen and king of spades), so $n(A\cup B)=13+12-3=22$. So $P(A\cup B)=\dfrac{22}{52}=\dfrac{11}{26}$ and $P(A\cap B)=\dfrac3{52}$.

**Answer.** $\dfrac{11}{26}$ and $\dfrac3{52}$.
:::

:::exercise
A fair coin is tossed three times. Let $A$ be "at least two heads" and $B$ be "the first toss is a tail". Find $P(A\cup B)$ and $P(A\cap B)$.

::hint
**Knowledge:** there are $8$ equally likely outcomes.

**Hints on the steps:**
1. List the outcomes favourable to $A$ and to $B$ (H: head, T: tail).
2. Find the union and the intersection.

::solution
$A=\{HHH,HHT,HTH,THH\}$ and $B=\{THH,THT,TTH,TTT\}$. The intersection is $A\cap B=\{THH\}$ and the union has $4+4-1=7$ outcomes. So $P(A\cup B)=\dfrac78$ and $P(A\cap B)=\dfrac18$.

**Answer.** $\dfrac78$ and $\dfrac18$.
:::

:::exercise
Decide whether each statement is true or false.

a) The event $A\cup B$ occurs when at least one of $A$, $B$ occurs.

b) If $A\cap B=\varnothing$ then $A$ and $B$ are always independent.

c) If $P(AB)=P(A)\,P(B)$ then $A$ and $B$ are independent.

d) The event $A\cup B$ occurs only when both $A$ and $B$ occur.

::hint
**Knowledge:** the definitions.

**Hints on the steps:**
1. Compare each statement with the definition.
2. Distinguish mutually exclusive from independent.

::solution
a) **True** by definition.

b) **False**: mutually exclusive events have $P(AB)=0$, which usually differs from $P(A)P(B)$.

c) **True** by definition.

d) **False**: that describes the intersection.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Suppose two marksmen shoot independently at the same target; the probability of a hit is $0.8$ for the first and $0.7$ for the second (assumed figures). Find the probability that both hit and the probability that both miss.

::hint
**Knowledge:** if $A$, $B$ are independent then $P(AB)=P(A)P(B)$; $\overline A$, $\overline B$ are also independent.

**Hints on the steps:**
1. Find $P(AB)$.
2. Find $P(\overline A)$, $P(\overline B)$ and multiply.

::solution
$P(AB)=0.8\cdot0.7=0.56$. Both miss: $P(\overline A\,\overline B)=0.2\cdot0.3=0.06$.

**Answer.** $0.56$ and $0.06$.
:::

:::exercise
Roll a fair die twice. Let $A$ be "the sum of the two rolls is $7$" and $B$ be "the second roll is $6$". Are the two events independent?

::hint
**Knowledge:** compare $P(AB)$ with $P(A)P(B)$.

**Hints on the steps:**
1. Find $P(A)$ and $P(B)$.
2. Find the intersection: only $(1,6)$.

::solution
$P(A)=\dfrac16$, $P(B)=\dfrac16$ and $A\cap B=\{(1,6)\}$, so $P(AB)=\dfrac1{36}=P(A)P(B)$. So the events are independent.

**Answer.** Yes, the events are independent.
:::

:::exercise
Suppose that in a class of $30$ students, $18$ learn chess, $12$ learn music and $5$ learn both (assumed figures). A student is chosen at random. Find the probability that the student learns at least one of the two, and the probability that the student learns neither.

::hint
**Knowledge:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$; complementary events.

**Hints on the steps:**
1. Count the students who learn at least one.
2. Use the complement.

::solution
The number who learn at least one is $18+12-5=25$, so the probability is $\dfrac{25}{30}=\dfrac56$. The probability of neither is $1-\dfrac56=\dfrac16$.

**Answer.** $\dfrac56$ and $\dfrac16$.
:::

:::exercise
Revisit fractions. Two cards are drawn one after the other from a standard deck of $52$ cards, each card being returned to the deck after it is drawn. Find the probability that both cards are hearts.

::hint
**Knowledge:** with replacement, the two draws are independent.

**Hints on the steps:**
1. Find the probability of a heart on one draw.
2. Multiply the two probabilities.

::solution
Each time the probability of a heart is $\dfrac{13}{52}=\dfrac14$. The draws are independent, so the required probability is $\dfrac14\cdot\dfrac14=\dfrac1{16}$.

**Answer.** $\dfrac1{16}$.
:::

:::exercise Challenge
Prove that if $A$ and $B$ are independent, then $A$ and $\overline B$ are also independent.

::hint
**Knowledge:** $A=AB\cup A\overline B$ and these two events are mutually exclusive, so $P(A)=P(AB)+P(A\overline B)$.

**Hints on the steps:**
1. Express $P(A\overline B)$ using $P(A)$ and $P(AB)$.
2. Substitute $P(AB)=P(A)P(B)$.

::solution
We have $P(A\overline B)=P(A)-P(AB)=P(A)-P(A)P(B)=P(A)\,(1-P(B))=P(A)\,P(\overline B)$. So $A$ and $\overline B$ are independent.

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
The event $A\cup B$ occurs when
A. at least one of $A$, $B$ occurs.
B. $A$ occurs and $B$ does not.
C. both $A$ and $B$ occur.
D. neither event occurs.
::key A
This is the definition of the union. Option C is the intersection, and B and D are other events.

::mc
Roll a fair die. Let $A$ be "the number is even" and $B$ be "the number is at least $4$". The probability $P(A\cap B)$ is
A. $\dfrac12$.
B. $\dfrac13$.
C. $\dfrac16$.
D. $\dfrac23$.
::key B
$A\cap B=\{4,6\}$, so $P=\dfrac26=\dfrac13$. Option D is $P(A\cup B)$, A is $P(A)$, and C counts only one outcome.

::mc
A card is drawn from a standard deck of $52$ cards. Let $A$ be "a heart" and $B$ be "a king". The probability $P(A\cup B)$ is
A. $\dfrac1{52}$.
B. $\dfrac{17}{52}$.
C. $\dfrac4{13}$.
D. $\dfrac1{13}$.
::key C
$n(A\cup B)=13+4-1=16$, so $P=\dfrac{16}{52}=\dfrac4{13}$. Option B forgets to subtract the common card, A is $P(AB)$, and D is $P(B)$.

::mc
Two events $A$, $B$ are independent if and only if
A. $A\cap B=\varnothing$.
B. $P(AB)=0$.
C. $P(A\cup B)=P(A)+P(B)$.
D. $P(AB)=P(A)\,P(B)$.
::key D
This is the condition for independence. Options A and B describe mutually exclusive events, and C holds only for mutually exclusive events.

::tf
Decide whether each statement is true or false:
a) The intersection $A\cap B$ occurs when both $A$ and $B$ occur.
b) $A$ and its complement $\overline A$ are always mutually exclusive.
c) Two mutually exclusive events with positive probabilities are always independent.
d) If $A$ and $B$ are independent then $A$ and $\overline B$ are also independent.
::key T T F T
a) True by definition. b) True, since $A$ and $\overline A$ cannot occur together. c) False: then $P(AB)=0\neq P(A)P(B)$. d) True by the property.

::sa
Independent events $A$, $B$ have $P(A)=0.6$ and $P(B)=0.5$. Find $P(AB)$.
::key 0.3
$P(AB)=0.6\cdot0.5=0.3$.

::sa
Suppose that in a survey of $50$ people, $30$ use app X, $24$ use app Y and $14$ use both. One person is chosen at random. Find the probability that the person uses at least one app.
::key 0.8
$30+24-14=40$ people, so the probability is $\dfrac{40}{50}=0.8$.
:::
