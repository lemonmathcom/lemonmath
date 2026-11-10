---
title: The multiplication rule for independent events
description: Recognise independent events and use the multiplication rule to find intersections, complements and combined probabilities.
minutes: 16
---

:::goals
- Recognise independent events from the design of an experiment or from known probabilities.
- Use the rule $P(A\cap B)=P(A)P(B)$ for two independent events.
- Combine the multiplication rule with complementary events and the addition rule.
- Distinguish independent events from mutually exclusive events.
:::

In a game at a school fair, you roll a fair die and toss a fair coin. You win a prize if the die shows an even number **and** the coin shows heads. What is the probability of winning: should we add or multiply the two probabilities?

The two results come from different devices. The result from one does not change the result from the other. We express this idea by saying that the two events are independent.

## Recognising independent events

### Explore: a die and a coin

Each outcome of the experiment is a pair consisting of the number on the die and the side of the coin. There are $6\cdot2=12$ equally likely outcomes:

| Side of the coin | Die scores that can accompany it | Number of outcomes |
|---|---|---|
| Heads | $1,2,3,4,5,6$ | $6$ |
| Tails | $1,2,3,4,5,6$ | $6$ |

Let $A$ be the event “the die shows an even number” and $B$ the event “the coin shows heads”. Of the $12$ outcomes, $6$ belong to $A$, $6$ belong to $B$ and $3$ belong to $A\cap B$. Therefore

$$P(A)=\frac{6}{12}=\frac12,\qquad P(B)=\frac{6}{12}=\frac12,\qquad P(A\cap B)=\frac{3}{12}=\frac14.$$

If we know that $A$ has occurred, only the $6$ outcomes with an even die score remain; half of these still have heads. Thus the occurrence of $A$ does not change the likelihood of $B$. The same statement holds when the roles of $A$ and $B$ are reversed.

:::definition Independent events
Two events $A$ and $B$ are **independent** if whether one event occurs does not change the likelihood that the other event occurs.
:::

Independence must come from the design of the experiment or be checked using probability values. Two actions separated in time are not automatically independent; for example, drawing two cards without replacement changes the contents of the box.

## The multiplication rule

In the exploration, $\dfrac14=\dfrac12\cdot\dfrac12$. This is the first instance of the general rule.

:::theorem Multiplication rule for independent events
Two events $A$ and $B$ are independent if and only if

$$P(A\cap B)=P(A)P(B).$$

Therefore, if $A$ and $B$ are known to be independent, the probability that **both** occur is the product of their probabilities. Conversely, when the three probabilities are known, this equation tests independence.
:::

Why does multiplication appear? In an independent two-stage model, suppose the proportion of first-stage outcomes favourable to $A$ is $P(A)$. For every such first-stage outcome, the proportion of second-stage outcomes favourable to $B$ remains $P(B)$. The proportion favourable to both stages is therefore $P(A)P(B)$.

:::example Rolling a die and tossing a coin
A fair die is rolled and a fair coin is tossed. Find the probability that the die shows a number greater than $4$ and the coin shows tails.

**Solution.** Let $A$ be the event “the score is greater than $4$” and $B$ the event “tails”. The events are independent because the die result does not affect the coin:

$$P(A)=\frac26=\frac13,\qquad P(B)=\frac12.$$

Use the multiplication rule:

$$P(A\cap B)=P(A)P(B)=\frac13\cdot\frac12=\frac16.$$

So the required probability is $\dfrac16$.
:::

When an action is repeated, we must check whether the conditions for the later trial remain unchanged.

:::example With and without replacement
A box contains $3$ red cards and $2$ blue cards, all distinguishable. Two random draws are made. Let $A$ be the event “the first card is red” and $B$ the event “the second card is red”. Decide whether $A$ and $B$ are independent in two cases: the first card is replaced, and it is not replaced.

**Solution.** With replacement, the box contains $3$ red cards out of $5$ before each draw. There are $5\cdot5=25$ equally likely ordered pairs, of which $3\cdot3=9$ are red–red:

$$P(A)=P(B)=\frac35,\qquad P(A\cap B)=\frac9{25}=\frac35\cdot\frac35.$$

Thus $A$ and $B$ are independent with replacement.

Without replacement, there are $5\cdot4=20$ ordered pairs of different cards, of which $3\cdot2=6$ are red–red. Each position still contains a red card with probability $\dfrac35$, but

$$P(A\cap B)=\frac6{20}=\frac3{10}\ne\frac35\cdot\frac35=\frac9{25}.$$

Thus $A$ and $B$ are not independent without replacement.
:::

This example shows that we cannot use the multiplication rule merely because a question contains the word “and”. We must first decide whether the events are independent.

## Combining complements and the addition rule

If $A$ and $B$ are independent, then $A$ is also independent of $\overline B$. Indeed, $A\cap B$ and $A\cap\overline B$ are mutually exclusive and their union is $A$, so

$$\begin{aligned}
P(A\cap\overline B)
&=P(A)-P(A\cap B)\\
&=P(A)-P(A)P(B)\\
&=P(A)\bigl(1-P(B)\bigr)\\
&=P(A)P(\overline B).
\end{aligned}$$

Similarly, the pairs $\overline A$ and $B$, and $\overline A$ and $\overline B$, are independent. We can therefore combine multiplication and addition to find probabilities involving “neither”, “at least one” or “exactly one”.

:::example At least one faulty component
Two components operate independently. The probability that the first meets the standard is $0.96$, and the probability that the second meets the standard is $0.95$. Find the probability that both meet the standard and the probability that at least one component is faulty.

**Solution.** Let $A$ and $B$ be the events that the first and second components meet the standard. Since $A$ and $B$ are independent,

$$P(A\cap B)=0.96\cdot0.95=0.912.$$

The event “at least one component is faulty” is the complement of “both components meet the standard”. Hence

$$P(\text{at least one faulty component})=1-0.912=0.088.$$

The two probabilities are $0.912$ and $0.088$, or $91.2\%$ and $8.8\%$, respectively.
:::

“Exactly one” consists of two mutually exclusive cases: the first trial succeeds and the second fails, or the other way round.

:::example Exactly one successful shot
An athlete takes two independent shots. The probability of success on the first shot is $0.7$, and that on the second is $0.8$. Find the probability of exactly one successful shot.

**Solution.** Let $A$ and $B$ be the events of success on the first and second shots. The cases $A\cap\overline B$ and $\overline A\cap B$ are mutually exclusive, so we add their probabilities:

$$\begin{aligned}
P\bigl((A\cap\overline B)\cup(\overline A\cap B)\bigr)
&=0.7\cdot0.2+0.3\cdot0.8\\
&=0.14+0.24=0.38.
\end{aligned}$$

So the probability of exactly one successful shot is $0.38$.
:::

The multiplication rule can also be rearranged to find an unknown probability when the probability of the intersection is given.

:::example Finding a missing probability
An app has two independent checks, $A$ and $B$. The probability of passing check $A$ is $0.8$, while the probability of passing both checks is $0.52$. Find the probability of passing check $B$ and the probability of passing neither check.

**Solution.** Since $A$ and $B$ are independent and $P(A)>0$, divide the multiplication rule by $P(A)$:

$$P(B)=\frac{P(A\cap B)}{P(A)}=\frac{0.52}{0.8}=0.65.$$

The complementary events are also independent. Therefore

$$P(\overline A\cap\overline B)=(1-0.8)(1-0.65)=0.2\cdot0.35=0.07.$$

The probability of passing check $B$ is $0.65$; the probability of passing neither check is $0.07$.
:::

:::warning Common mistakes
- **Multiplying whenever the word “and” appears.** Wrong: always write $P(A\cap B)=P(A)P(B)$. This rule requires $A$ and $B$ to be independent. First check the design of the experiment or verify $P(A\cap B)=P(A)P(B)$.
- **Multiplying to find “at least one”.** The product $P(A)P(B)$ gives the probability that both events occur, not that at least one occurs. Usually use $1-P(\overline A\cap\overline B)$.
- **Treating mutually exclusive events as independent.** If $P(A)>0$, $P(B)>0$ and $A$, $B$ are mutually exclusive, then $P(A\cap B)=0$ but $P(A)P(B)>0$; they are not independent.
- **Assuming that two draws are independent.** Without replacement, the first draw changes the contents of the box. Use the multiplication rule for independent events only when the question or the model guarantees independence.
:::

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- event | biến cố
- intersection of events | biến cố giao
- union of events | biến cố hợp
- complementary event | biến cố đối
- mutually exclusive events | biến cố xung khắc
- independent events | biến cố độc lập
- multiplication rule for probabilities | công thức nhân xác suất
:::

## Summary

- $A$ and $B$ are independent when whether one occurs does not change the likelihood that the other occurs.
- Test and multiplication rule: $A$, $B$ independent $\Leftrightarrow P(A\cap B)=P(A)P(B)$.
- If $A$, $B$ are independent, replacing either event by its complement also gives an independent pair.
- Find “at least one” using $1-P(\overline A\cap\overline B)$; “exactly one” is the union of $A\cap\overline B$ and $\overline A\cap B$.
- Independent does not mean mutually exclusive. Mutually exclusive events with positive probabilities are not independent.

## Practice

Each exercise gives the fact you need and some steps. Try it yourself before opening the solution.

:::exercise
A fair die is rolled and a fair coin is tossed. Find the probability that the die score is a multiple of $3$ and the coin shows tails.

::hint
**What you need:** the die and coin results are independent, so the probability of the intersection is the product of the two probabilities.

**Steps:**
1. Find the probability that the score is $3$ or $6$.
2. Multiply by the probability of tails.

::solution
The probability of a multiple of $3$ is $\dfrac26=\dfrac13$; the probability of tails is $\dfrac12$.

$$P=\frac13\cdot\frac12=\frac16.$$

**Answer.** $\dfrac16$.
:::

:::exercise
Two spinners operate independently. The probability that the first stops on red is $0.4$; the probability that the second stops on red is $0.7$. Find the probability that a) both stop on red; b) neither stops on red.

::hint
**What you need:** multiply probabilities for independent events; the probability of a complementary event is $1-P(A)$.

**Steps:**
1. For part a), multiply $0.4$ and $0.7$.
2. For part b), multiply the two probabilities of not stopping on red.

::solution
a) $P(\text{both red})=0.4\cdot0.7=0.28$.

b) $P(\text{neither red})=(1-0.4)(1-0.7)=0.6\cdot0.3=0.18$.

**Answer.** a) $0.28$; b) $0.18$.
:::

:::exercise
Test whether $A$ and $B$ are independent in each case:

a) $P(A)=0.4$, $P(B)=0.5$, $P(A\cap B)=0.2$;

b) $P(A)=0.4$, $P(B)=0.5$, $P(A\cap B)=0.18$.

::hint
**What you need:** $A$ and $B$ are independent if and only if $P(A\cap B)=P(A)P(B)$.

**Steps:**
1. Calculate $P(A)P(B)$ in each case.
2. Compare it with the probability of the intersection.

::solution
In both cases, $P(A)P(B)=0.4\cdot0.5=0.2$.

a) $P(A\cap B)=0.2$, so $A$ and $B$ are independent.

b) $P(A\cap B)=0.18\ne0.2$, so $A$ and $B$ are not independent.

**Answer.** a) Independent; b) not independent.
:::

:::exercise
Two parts of a device operate independently. The probability that the first works properly is $0.97$, and that for the second is $0.94$. Find the probability that at least one part does not work properly.

::hint
**What you need:** the complement of “at least one part does not work properly” is “both parts work properly”.

**Steps:**
1. Multiply the two probabilities of working properly.
2. Subtract the result from $1$.

::solution
The probability that both parts work properly is $0.97\cdot0.94=0.9118$.

Hence $P(\text{at least one part not working properly})=1-0.9118=0.0882$.

**Answer.** $0.0882$.
:::

:::exercise
A footballer takes two independent shots. The probabilities of scoring with the first and second shots are $0.75$ and $0.6$, respectively. Find the probability that the player scores exactly one goal.

::hint
**What you need:** “exactly one” consists of two mutually exclusive cases: score then miss, or miss then score.

**Steps:**
1. Find the probability of each case using multiplication.
2. Add the two results.

::solution
The two cases have probabilities $0.75\cdot0.4=0.3$ and $0.25\cdot0.6=0.15$.

$$P(\text{exactly one goal})=0.3+0.15=0.45.$$

**Answer.** $0.45$.
:::

:::exercise
Let $A$ and $B$ be independent events with $P(A)=0.3$ and $P(B)=0.8$. Is each statement true or false?

a) $P(A\cap B)=0.24$.

b) $P(\overline A\cap B)=0.56$.

c) $P(A\cup B)=0.86$.

d) $A$ and $B$ are mutually exclusive.

::hint
**What you need:** use multiplication for the intersection and the addition rule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.

**Steps:**
1. Find $P(A\cap B)$ and $P(\overline A\cap B)$.
2. Use the addition rule for the union.
3. Compare $P(A\cap B)$ with $0$ to test mutual exclusivity.

::solution
a) **True:** $P(A\cap B)=0.3\cdot0.8=0.24$.

b) **True:** $P(\overline A\cap B)=0.7\cdot0.8=0.56$.

c) **True:** $P(A\cup B)=0.3+0.8-0.24=0.86$.

d) **False:** $P(A\cap B)=0.24>0$, so the events are not mutually exclusive.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise
Two independent deliveries have probabilities $0.92$ and $0.85$ of arriving on time. What is the probability, as a percentage, that exactly one delivery is late? Round to one decimal place.

::hint
**What you need:** “exactly one delivery is late” consists of: the first is on time and the second is late; or the first is late and the second is on time.

**Steps:**
1. Find the probability that each delivery is late.
2. Find and add the probabilities of the two mutually exclusive cases.
3. Convert to a percentage and round.

::solution
The probability that exactly one delivery is late is

$$0.92\cdot0.15+0.08\cdot0.85=0.138+0.068=0.206.$$

As a percentage, $0.206=20.6\%$.

**Answer.** $20.6\%$.
:::

:::exercise
Suppose $P(A)=0.45$, $P(B)=0.35$ and $P(A\cap B)=0.15$.

a) Find $P(A\cup B)$.

b) Are $A$ and $B$ independent?

::hint
**What you need:** the addition rule and the test for independence.

**Steps:**
1. Use $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
2. Compare $P(A\cap B)$ with $P(A)P(B)$.

::solution
a) By the addition rule,

$$P(A\cup B)=0.45+0.35-0.15=0.65.$$

b) $P(A)P(B)=0.45\cdot0.35=0.1575\ne0.15$, so $A$ and $B$ are not independent.

**Answer.** a) $0.65$; b) not independent.
:::

:::exercise Challenge
A student answers two independent questions. The probability of answering each question correctly is $p$. The probability of answering at least one question correctly is $0.84$. Find $p$.

::hint
**What you need:** the complement of “at least one correct answer” is “both answers are wrong”.

**Steps:**
1. Write the probability of a wrong answer as $1-p$.
2. Form the equation $1-(1-p)^2=0.84$.
3. Use $0\le p\le1$ to choose the solution.

::solution
We have

$$1-(1-p)^2=0.84\iff(1-p)^2=0.16.$$

Since $0\le p\le1$, we have $1-p\ge0$. Thus $1-p=0.4$, giving $p=0.6$.

**Answer.** $0.6$.
:::

## Mini test

:::quiz
::mc
Let $A$ and $B$ be independent events with $P(A)=0.7$ and $P(B)=0.4$. The value of $P(A\cap B)$ is
A. $0.28$.
B. $0.42$.
C. $0.7$.
D. $1.1$.
::key A
Because $A$ and $B$ are independent, $P(A\cap B)=0.7\cdot0.4=0.28$. Option B uses the probability of $\overline B$, while D adds the probabilities.

::mc
Two sensors operate independently with probabilities $0.98$ and $0.95$ of working properly. The probability that both work properly is
A. $0.069$.
B. $0.931$.
C. $0.001$.
D. $0.965$.
::key B
The probability that both work properly is $0.98\cdot0.95=0.931$. Option A is the probability that at least one is faulty, while C is the probability that both are faulty.

::mc
Suppose $P(A)=0.5$ and $P(B)=0.6$. If $A$ and $B$ are independent, then $P(A\cap B)$ is
A. $0.1$.
B. $0.5$.
C. $0.3$.
D. $0.6$.
::key C
The independence test gives $P(A\cap B)=P(A)P(C)=0.5\cdot0.6=0.3$.

::mc
Two independent trials have success probabilities $0.8$ and $0.6$. The probability of at least one success is
A. $0.48$.
B. $0.44$.
C. $0.08$.
D. $0.92$.
::key D
The probability that both trials fail is $0.2\cdot0.4=0.08$, so the required probability is $1-0.08=0.92$. Option A is the probability of two successes, and B is the probability of exactly one success.

::tf
Let $A$ and $B$ be independent events with $P(A)=0.6$ and $P(B)=0.25$.
a) $P(A\cap B)=0.15$.
b) $P(\overline A\cap B)=0.4$.
c) $P(A\cup B)=0.7$.
d) $A$ and $B$ are mutually exclusive.
::key T F T F
a) True because $0.6\cdot0.25=0.15$. b) False because $P(\overline A\cap B)=0.4\cdot0.25=0.1$. c) True because $0.6+0.25-0.15=0.7$. d) False because $P(A\cap B)>0$.

::sa
Two machines operate independently. The probabilities that the first and second machines do not fail are $0.98$ and $0.97$. What is the probability, as a percentage, that neither machine fails? Round to one decimal place.
::key 95.1
The probability that neither machine fails is $0.98\cdot0.97=0.9506=95.06\%$, which rounds to $95.1\%$.

::sa
Two independent trials have the same success probability $p$. The probability that both trials fail is $0.09$. Find $p$.
::key 0.7
We have $(1-p)^2=0.09$ and $1-p\ge0$, so $1-p=0.3$ and $p=0.7$.
:::
