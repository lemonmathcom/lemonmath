---
title: The addition rule
description: Use the addition rule P(A∪B)=P(A)+P(B)−P(AB), the mutually exclusive case and the complement rule to find probabilities in real problems.
minutes: 25
---

:::goals
- Recall and use the addition rule $P(A\cup B)=P(A)+P(B)-P(AB)$.
- Use the simplified rule for two mutually exclusive events.
- Use $P(\overline A)=1-P(A)$ to find "at least one" probabilities.
- Apply this to dice, cards, target shooting and real-life problems.
:::

Suppose a workshop inspects its products: $12\%$ have defect $A$, $9\%$ have defect $B$ and $4\%$ have both defects (assumed figures). A product is chosen at random. What is the probability that it has at least one defect? Would it be right to simply add $12\%$ and $9\%$? This lesson answers these questions with the addition rule.

## Exploration: why we cannot simply add

Draw one card at random from a standard deck of $52$ cards. We compare the number of outcomes in the union of two events with the sum of the two counts.

| Pair of events | $n(A)$ | $n(B)$ | $n(A\cap B)$ | $n(A\cup B)$ | $n(A)+n(B)$ |
|---|---|---|---|---|---|
| $A$: ace, $B$: queen | $4$ | $4$ | $0$ | $8$ | $8$ |
| $A$: heart, $B$: king | $13$ | $4$ | $1$ | $16$ | $17$ |
| $A$: heart, $B$: red card | $13$ | $26$ | $13$ | $26$ | $39$ |

When the two events have no outcome in common (first row), the sum equals the number of outcomes in the union. When they do share outcomes, the sum is too large by exactly the number of shared outcomes: $17-16=1$ and $39-26=13$. Dividing by $52$ gives the rule for probabilities.

## The addition rule

:::theorem The addition rule for probability
For any two events $A$ and $B$ of the same experiment,
$$P(A\cup B)=P(A)+P(B)-P(AB).$$
:::

**Why?** Each outcome in $A\cap B$ is counted twice in $n(A)+n(B)$, so $n(A\cup B)=n(A)+n(B)-n(A\cap B)$. Dividing both sides by the number of outcomes in the sample space gives the rule.

:::theorem Mutually exclusive events and the complement
- If $A$ and $B$ are mutually exclusive then $P(A\cup B)=P(A)+P(B)$.
- For every event $A$, $P(\overline A)=1-P(A)$.
- If $A$ and $B$ are independent then $P(A\cup B)=P(A)+P(B)-P(A)\,P(B)$.
:::

The second rule is very useful for "at least one" events: $P(\text{at least one})=1-P(\text{none})$. The probability of a union is always at least each of the two probabilities and at most their sum.

## Examples

First, the addition rule with a deck of cards.

:::example The addition rule for two events with a common part
A card is drawn at random from a standard deck of $52$ cards. Find the probability of drawing a heart or a king.

**Solution.** Let $A$ be "a heart" and $B$ be "a king". Then $P(A)=\dfrac{13}{52}$, $P(B)=\dfrac4{52}$, and $A\cap B$ is the king of hearts, so $P(AB)=\dfrac1{52}$. By the addition rule,
$$P(A\cup B)=\frac{13}{52}+\frac4{52}-\frac1{52}=\frac{16}{52}=\frac4{13}.$$

So the required probability is $\dfrac4{13}$.
:::

Next, two mutually exclusive events.

:::example Two mutually exclusive events
Suppose a box holds $5$ red balls, $3$ blue balls and $2$ yellow balls, all the same size. One ball is drawn at random. Find the probability that it is red or blue.

**Solution.** Let $A$ be "red" and $B$ be "blue". A ball cannot be both red and blue, so $A$, $B$ are mutually exclusive. We have $P(A)=\dfrac5{10}$ and $P(B)=\dfrac3{10}$, so
$$P(A\cup B)=\frac5{10}+\frac3{10}=\frac8{10}=0.8.$$

Check with the complement: a yellow ball has probability $\dfrac2{10}$, and $1-\dfrac2{10}=0.8$. So the required probability is $0.8$.
:::

Now a union with a common part on a die.

:::example A prime number or an even number
Roll a fair die. Find the probability that the number is prime or even.

**Solution.** Let $A$ be "prime" $=\{2,3,5\}$ and $B$ be "even" $=\{2,4,6\}$. The intersection is $A\cap B=\{2\}$. So
$$P(A\cup B)=\frac36+\frac36-\frac16=\frac56.$$

Check: the union is $\{2,3,4,5,6\}$ with $5$ outcomes, giving $\dfrac56$. So the required probability is $\dfrac56$.
:::

Then the complement for an "at least one" probability.

:::example The probability of at least one
Roll a fair die twice. Find the probability that at least one roll shows $6$.

**Solution.** Let $A$ be "at least one roll shows $6$". Its complement $\overline A$ is "neither roll shows $6$". Each roll fails to show $6$ with probability $\dfrac56$, and the two rolls are independent, so $P(\overline A)=\dfrac56\cdot\dfrac56=\dfrac{25}{36}$. Therefore
$$P(A)=1-\frac{25}{36}=\frac{11}{36}.$$

So the required probability is $\dfrac{11}{36}$.
:::

Finally, we return to the workshop from the start, in four steps.

:::example Application: products with defects
Suppose a workshop has $12\%$ of products with defect $A$, $9\%$ with defect $B$ and $4\%$ with both defects (assumed figures). A product is chosen at random. Find the probability that it has at least one defect and the probability that it has no defect.

**Solution.**

*Understand.* We need $P(A\cup B)$, where $A$ is "has defect $A$" and $B$ is "has defect $B$", and then the probability of the complement.

*Plan.* The two events overlap (products with both defects), so use the addition rule rather than adding directly. Then use $P(\overline{A\cup B})=1-P(A\cup B)$.

*Solve.* We have $P(A)=0.12$, $P(B)=0.09$ and $P(AB)=0.04$. By the addition rule,
$$P(A\cup B)=0.12+0.09-0.04=0.17.$$

The probability of no defect is $1-0.17=0.83$. So $17\%$ of products have at least one defect and $83\%$ have none.

*Look back.* Is the result reasonable? The probability of a union must be at least each part and at most their sum: $0.12\le0.17\le0.21$, as it is. Adding directly, $12\%+9\%=21\%$, would count the products with both defects twice and overshoot by $4\%$.
:::

:::warning Common mistakes
- **Adding the two probabilities directly.** Wrong: $P(A\cup B)=P(A)+P(B)$ for all $A$, $B$. Why it is wrong: the common part $A\cap B$ is counted twice. Right: $P(A\cup B)=P(A)+P(B)-P(AB)$; only for mutually exclusive events does the last term vanish.
- **Forgetting that a probability cannot exceed $1$.** Wrong: $P(A\cup B)=0.7+0.6=1.3$. Why it is wrong: probabilities always lie between $0$ and $1$; a result above $1$ signals that $P(AB)$ was not subtracted. Right: $P(A\cup B)=0.7+0.6-P(AB)\le1$.
- **Finding "at least one" by adding.** Wrong: $P(\text{at least one }6)=\dfrac16+\dfrac16=\dfrac13$. Why it is wrong: the events "first roll is $6$" and "second roll is $6$" are not mutually exclusive. Right: $1-\left(\dfrac56\right)^2=\dfrac{11}{36}$.
- **Using $P(A)\,P(B)$ when the events are not independent.** Wrong: $P(AB)=P(A)\,P(B)$ for every pair of events. Why it is wrong: the equality holds only for independent events. Right: check independence first, or count the common part directly.
:::

**Connections.** This lesson uses [union, intersection and independent events](lesson:union-intersection-events): the addition rule is the probability version of the count $n(A\cup B)=n(A)+n(B)-n(A\cap B)$. In practice, quality inspectors, insurers and survey designers use this rule to find the chance of at least one fault or at least one characteristic.

## Terms

:::terms
- công thức cộng xác suất | addition rule for probability
- biến cố hợp | union of events
- biến cố giao | intersection of events
- biến cố đối | complementary event
- biến cố xung khắc | mutually exclusive events
- biến cố độc lập | independent events
- ít nhất một | at least one
- sản phẩm lỗi | defective product
- phép đếm | counting
- xác suất | probability
:::

## Summary

- $P(A\cup B)=P(A)+P(B)-P(AB)$ for any events $A$, $B$.
- If $A$, $B$ are mutually exclusive then $P(A\cup B)=P(A)+P(B)$.
- $P(\overline A)=1-P(A)$; the probability of "at least one" is $1-P(\text{none})$.
- If $A$, $B$ are independent then $P(A\cup B)=P(A)+P(B)-P(A)P(B)$.
- Always check that $\max\{P(A),P(B)\}\le P(A\cup B)\le P(A)+P(B)$ and $\le1$.

## Practice

Each exercise has the knowledge needed and hints on the steps. Try it yourself first, then open the solution.

:::exercise
Roll a fair die. Find the probability that the number is even or divisible by $3$.

::hint
**Knowledge:** $P(A\cup B)=P(A)+P(B)-P(AB)$.

**Hints on the steps:**
1. List $A=\{2,4,6\}$ and $B=\{3,6\}$.
2. Find the intersection, then apply the rule.

::solution
Let $A$ be the event "the number is even" and $B$ the event "the number is divisible by $3$". The die is fair, so the $6$ outcomes $1, 2, 3, 4, 5, 6$ are equally likely.

We have $A=\{2, 4, 6\}$, so $P(A)=\dfrac36$; and $B=\{3, 6\}$, so $P(B)=\dfrac26$. The intersection is $A\cap B=\{6\}$, so $P(A\cap B)=\dfrac16$.

Applying the addition rule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, we get
$$P(A\cup B)=\frac36+\frac26-\frac16=\frac46=\frac23.$$

So the probability that the number is even or divisible by $3$ is $\dfrac23$.

**Answer.** $\dfrac23$.
:::

:::exercise
A card is drawn at random from a standard deck of $52$ cards. Find the probability of drawing a red card or an ace.

::hint
**Knowledge:** there are $26$ red cards and $4$ aces, of which $2$ are red aces.

**Hints on the steps:**
1. Find $P(A)$, $P(B)$ and $P(AB)$.
2. Apply the addition rule.

::solution
Let $A$ be the event "the card drawn is red" and $B$ the event "the card drawn is an ace". The deck has $52$ cards and each card is equally likely to be drawn.

There are $26$ red cards, so $P(A)=\dfrac{26}{52}$; there are $4$ aces, so $P(B)=\dfrac4{52}$. The event $A\cap B$ is "the card drawn is a red ace". There are $2$ red aces (the ace of hearts and the ace of diamonds), so $P(A\cap B)=\dfrac2{52}$.

Applying the addition rule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, we get
$$P(A\cup B)=\frac{26}{52}+\frac4{52}-\frac2{52}=\frac{28}{52}=\frac7{13}.$$

So the probability of drawing a red card or an ace is $\dfrac7{13}$.

**Answer.** $\dfrac7{13}$.
:::

:::exercise
Decide whether each statement is true or false.

a) $P(A\cup B)=P(A)+P(B)$ for all events $A$, $B$.

b) If $A$, $B$ are mutually exclusive then $P(A\cup B)=P(A)+P(B)$.

c) $P(\overline A)=1-P(A)$.

d) $P(A\cup B)\ge P(A)$.

::hint
**Knowledge:** the addition rule and its consequences.

**Hints on the steps:**
1. Compare each statement with the rule.
2. Remember that the union contains $A$.

::solution
The addition rule: for any two events $A$, $B$, $P(A\cup B)=P(A)+P(B)-P(AB)$.

a) **False.** By the addition rule, $P(A\cup B)=P(A)+P(B)-P(AB)$, so the equality $P(A\cup B)=P(A)+P(B)$ holds only when $P(AB)=0$. For instance, take $B=A$ with $P(A)>0$; then $P(A\cup B)=P(A)\ne2P(A)=P(A)+P(B)$. So the equality is not true for all events $A$, $B$.

b) **True.** If $A$, $B$ are mutually exclusive then $A\cap B=\varnothing$, so $P(AB)=0$. Substituting into the addition rule gives $P(A\cup B)=P(A)+P(B)$.

c) **True.** The events $A$ and $\overline A$ are mutually exclusive and $A\cup\overline A=\Omega$. Hence $P(A)+P(\overline A)=P(\Omega)=1$, so $P(\overline A)=1-P(A)$.

d) **True.** Since $A\subset A\cup B$, every outcome favourable to $A$ is also favourable to $A\cup B$. Hence $P(A\cup B)\ge P(A)$.

So statements b), c), d) are true; statement a) is false.

**Answer.** a) False; b) True; c) True; d) True.
:::

:::exercise
Given $P(A)=0.5$, $P(B)=0.4$ and $P(AB)=0.2$, find $P(A\cup B)$ and the probability that neither event occurs.

::hint
**Knowledge:** the addition rule; the complement of a union.

**Hints on the steps:**
1. Find $P(A\cup B)$.
2. Subtract the result from $1$.

::solution
Applying the addition rule $P(A\cup B)=P(A)+P(B)-P(AB)$, we have
$$P(A\cup B)=0.5+0.4-0.2=0.7.$$

The event "neither $A$ nor $B$ occurs" is the complement of $A\cup B$, that is $\overline{A\cup B}$. Hence
$$P\left(\overline{A\cup B}\right)=1-P(A\cup B)=1-0.7=0.3.$$

So $P(A\cup B)=0.7$ and the probability that neither event occurs is $0.3$.

**Answer.** $0.7$ and $0.3$.
:::

:::exercise
A fair coin is tossed three times. Find the probability of at least one head.

::hint
**Knowledge:** use the complement "all three tosses are tails".

**Hints on the steps:**
1. Find the probability that all three are tails.
2. Subtract from $1$.

::solution
Let $A$ be the event "at least one head". The complement $\overline A$ is the event "all three tosses are tails".

The coin is fair, so on each toss the probability of tails is $\dfrac12$, and the tosses are independent. Hence
$$P(\overline A)=\frac12\cdot\frac12\cdot\frac12=\left(\frac12\right)^3=\frac18.$$

It follows that $P(A)=1-P(\overline A)=1-\dfrac18=\dfrac78$.

So the probability of at least one head is $\dfrac78$.

**Answer.** $\dfrac78$.
:::

:::exercise
Suppose a warehouse has two fire alarms that work independently; the probabilities that each detects a fire are $0.9$ and $0.8$ (assumed figures). Find the probability that at least one alarm sounds when there is a fire.

::hint
**Knowledge:** the complement "neither alarm sounds"; the alarms are independent.

**Hints on the steps:**
1. Find the probability that each alarm fails.
2. Multiply, then subtract from $1$.

::solution
Let $A$ be the event "the first alarm sounds" and $B$ the event "the second alarm sounds" when there is a fire. We have $P(A)=0.9$, $P(B)=0.8$, and $A$, $B$ are independent.

The event "at least one alarm sounds" is $A\cup B$. Its complement is "both alarms fail", that is $\overline A\cap\overline B$.

We have $P(\overline A)=1-0.9=0.1$ and $P(\overline B)=1-0.8=0.2$. Since $A$, $B$ are independent, $\overline A$ and $\overline B$ are also independent, so
$$P(\overline A\cap\overline B)=P(\overline A)\cdot P(\overline B)=0.1\cdot0.2=0.02.$$

It follows that $P(A\cup B)=1-0.02=0.98$.

Check with the addition rule: $P(A\cup B)=0.9+0.8-0.9\cdot0.8=1.7-0.72=0.98$.

So the probability that at least one alarm sounds when there is a fire is $0.98$.

**Answer.** $0.98$.
:::

:::exercise
Suppose a bag holds $20$ balls numbered $1$ to $20$. One ball is drawn at random. Find the probability that its number is divisible by $2$ or by $3$.

::hint
**Knowledge:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

**Hints on the steps:**
1. Count the numbers divisible by $2$, by $3$ and by $6$.
2. Apply the rule.

::solution
There are $10$ numbers divisible by $2$, $6$ divisible by $3$, and $3$ divisible by both (that is by $6$: $6,12,18$). So $P=\dfrac{10+6-3}{20}=\dfrac{13}{20}$.

**Answer.** $\dfrac{13}{20}$.
:::

:::exercise
Revisit rearranging equations. Given $P(A\cup B)=0.85$, $P(A)=0.6$ and $P(B)=0.5$, find $P(AB)$ and decide whether $A$, $B$ are independent.

::hint
**Knowledge:** $P(AB)=P(A)+P(B)-P(A\cup B)$.

**Hints on the steps:**
1. Rearrange the addition rule to find $P(AB)$.
2. Compare with $P(A)\,P(B)$.

::solution
Applying the addition rule $P(A\cup B)=P(A)+P(B)-P(AB)$ and rearranging, we get $P(AB)=P(A)+P(B)-P(A\cup B)$. Substituting the values:
$$P(AB)=0.6+0.5-0.85=0.25.$$

The events $A$, $B$ are independent if and only if $P(AB)=P(A)\,P(B)$. We have
$$P(A)\,P(B)=0.6\cdot0.5=0.3.$$

Since $0.25\ne0.3$, we have $P(AB)\ne P(A)\,P(B)$, so $A$, $B$ are not independent.

So $P(AB)=0.25$ and the events $A$, $B$ are not independent.

**Answer.** $P(AB)=0.25$; not independent.
:::

:::exercise Challenge
Roll a fair die twice. Find the probability that the sum of the two rolls is at least $10$ or is even.

::hint
**Knowledge:** there are $36$ equally likely outcomes; count $n(A)$, $n(B)$ and $n(A\cap B)$.

**Hints on the steps:**
1. Count the sums $\ge10$ and the even sums.
2. Count the sums that are both $\ge10$ and even, then apply the rule.

::solution
Sums $\ge10$ give $6$ outcomes: $(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)$. Even sums give $18$ outcomes. Sums that are both $\ge10$ and even give $4$ outcomes: $(4,6),(5,5),(6,4),(6,6)$. So $P=\dfrac{6+18-4}{36}=\dfrac{20}{36}=\dfrac59$.

**Answer.** $\dfrac59$.
:::

## Mini test

:::quiz
::mc NB
For any two events $A$, $B$, $P(A\cup B)$ equals
A. $P(A)+P(B)-P(AB)$.
B. $P(A)+P(B)$.
C. $P(A)\,P(B)$.
D. $P(A)-P(B)$.
::key A
This is the addition rule. Option B holds only for mutually exclusive events, and C concerns independence.

::mc TH
Roll a fair die. The probability that the number is prime or even is
A. $\dfrac12$.
B. $\dfrac56$.
C. $\dfrac23$.
D. $1$.
::key B
The union is $\{2,3,4,5,6\}$, so $P=\dfrac56$. Option A is the probability of an even number, and C and D do not match the count.

::mc VD
Roll a fair die twice. The probability that at least one roll shows $6$ is
A. $\dfrac13$.
B. $\dfrac{25}{36}$.
C. $\dfrac{11}{36}$.
D. $\dfrac16$.
::key C
$1-\left(\dfrac56\right)^2=\dfrac{11}{36}$. Option A is a wrong sum, B is the probability of no $6$ at all, and D is for one roll.
 
::mc VD
Suppose two marksmen shoot independently with hit probabilities $0.6$ and $0.5$. The probability that at least one hits is
A. $1.1$.
B. $0.3$.
C. $0.2$.
D. $0.8$.
::key D
$1-0.4\cdot0.5=0.8$. Option A is a sum above $1$, B is the probability that both hit, and C is the probability that both miss.

::tf TH VD NB TH
Decide whether each statement is true or false:
a) $P(A\cup B)=P(A)+P(B)$ for all events $A$, $B$.
b) If $A$, $B$ are independent then $P(A\cup B)=P(A)\,P(B)$.
c) $P(\overline A)=1-P(A)$.
d) $P(A\cup B)\ge P(B)$.
::key F F T T
a) False: $P(AB)$ must be subtracted. b) False: for independent events $P(AB)=P(A)P(B)$ but $P(A\cup B)=P(A)+P(B)-P(A)P(B)$. c) True. d) True, since $B\subset A\cup B$.

::sa NB
Given $P(A)=0.3$, $P(B)=0.45$ and $P(AB)=0.1$, find $P(A\cup B)$.
::key 0.65
$0.3+0.45-0.1=0.65$.

::sa VD
A fair coin is tossed four times. Find the probability of at least one head, to two decimal places.
::key 0.94
$1-\left(\dfrac12\right)^4=\dfrac{15}{16}=0.9375\approx0.94$.
:::
