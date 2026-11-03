---
title: The law of total probability and Bayes' theorem
description: Find a probability case by case with the law of total probability, then work backwards with Bayes' theorem, using tree diagrams and real examples.
minutes: 20
---

:::goals
- Use the law of total probability to find the probability of an event case by case.
- Use Bayes' theorem to find the probability of a case once the result is known.
- Draw a tree diagram for a two-stage problem and read both formulas from it.
- Explain why a positive test for a rare disease can still be unlikely to mean the disease.
:::

A rare disease affects $1\%$ of the population. A test gives a positive result for $95\%$ of people who have the disease, but it also gives a false positive for $5\%$ of people who do not. Lan takes the test and gets a positive result. Is the chance that Lan has the disease $95\%$?

Many people, adults included, answer "yes". The right answer is much lower. This lesson gives us the tools to find it.

## The law of total probability

### Explore: picture $10\,000$ people

Instead of talking about probabilities, we imagine $10\,000$ people taking the test.
- $1\%$ of them, that is $100$ people, have the disease. Of these, $95\%$, that is $95$ people, test positive.
- $9\,900$ people do not have the disease. Of these, $5\%$, that is $495$ people, test positive by mistake.

The total number of positive results is $95+495=590$. Of those $590$ people, only $95$ really have the disease:

$$\frac{95}{590}\approx0.161.$$

So a positive result means only about a $16\%$ chance of the disease. To get $590$ we added the positive results from **two cases**: with the disease and without it. That is the idea behind the law of total probability.

:::theorem The law of total probability
Let $A$ and $B$ be events with $0<P(B)<1$. Then
$$P(A)=P(B)\cdot P(A\mid B)+P(\overline{B})\cdot P(A\mid\overline{B}).$$
More generally, if $B_1, B_2, \dots, B_n$ are mutually exclusive, have positive probabilities and together make up the whole sample space (we say they form a **partition of the sample space**), then
$$P(A)=P(B_1)P(A\mid B_1)+P(B_2)P(A\mid B_2)+\dots+P(B_n)P(A\mid B_n).$$
:::

**Why is it true?** The event $A$ happens either together with $B$ or together with $\overline{B}$, so $A=(A\cap B)\cup(A\cap\overline{B})$, and these two parts are mutually exclusive. By the addition rule, $P(A)=P(A\cap B)+P(A\cap\overline{B})$. Each term comes from the multiplication rule, for example $P(A\cap B)=P(B)\cdot P(A\mid B)$.

On a tree diagram the formula is easy to remember: multiply along each path that leads to $A$, then add those paths.

:::example Two machines making the same item
A workshop has two machines making the same item. Machine I makes $60\%$ of the items, with a defect rate of $2\%$; machine II makes $40\%$, with a defect rate of $5\%$. One item from the workshop is picked at random. Find the probability that it is defective.

**Solution.** Let $B$ be "made by machine I" and $A$ be "defective". We are given $P(B)=0.6$, $P(A\mid B)=0.02$, $P(\overline B)=0.4$ and $P(A\mid\overline B)=0.05$. We add the two paths that lead to "defective":

$$P(A)=0.6\cdot0.02+0.4\cdot0.05=0.012+0.02=0.032.$$

So the probability that the item is defective is $0.032$, that is $3.2\%$.
:::

:::diagram Tree diagram for the two machines
alt: A two-stage tree; the first stage splits into machine I with probability 0.6 and machine II with probability 0.4; machine I splits into defective 0.02 and good 0.98, machine II into defective 0.05 and good 0.95; the ends show 0.012, 0.588, 0.02 and 0.38
point S 0,0 left "Item"
point M1 3,2 above "Machine I"
point M2 3,-2 below "Machine II"
point L1 6,3 right "Defective: 0.012"
point T1 6,1 right "Good: 0.588"
point L2 6,-1 right "Defective: 0.02"
point T2 6,-3 right "Good: 0.38"
segment S M1
segment S M2
segment M1 L1
segment M1 T1
segment M2 L2
segment M2 T2
label 1.2,1.5 "0.6"
label 1.2,-1.5 "0.4"
label 4.4,3 "0.02"
label 4.4,1.1 "0.98"
label 4.4,-1.1 "0.05"
label 4.4,-3 "0.95"
:::

## Bayes' theorem

The next question is often a "backwards" one: we have seen the result $A$, so how likely is it that it came from case $B$? We need $P(B\mid A)$, while we are only given $P(A\mid B)$.

:::theorem Bayes' theorem
Let $A$ and $B$ be events with $P(A)>0$ and $0<P(B)<1$. Then
$$P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}=\frac{P(B)\cdot P(A\mid B)}{P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B)}.$$
For a partition $B_1, \dots, B_n$: $P(B_i\mid A)=\dfrac{P(B_i)\cdot P(A\mid B_i)}{P(A)}$.
:::

**Why is it true?** By definition, $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$. The numerator is rewritten with the multiplication rule, $P(A\cap B)=P(B)\cdot P(A\mid B)$; the denominator with the law of total probability. On a tree diagram: **the numerator is one path, the denominator is the sum of all paths leading to $A$**.

:::example Which machine made the defective item?
Continuing the two-machine example, an item is picked at random and found to be defective. Find the probability that it was made by machine II.

**Solution.** The numerator is the path "machine II, then defective", and the denominator is $P(A)=0.032$ found above:

$$P(\overline B\mid A)=\frac{0.4\cdot0.05}{0.032}=\frac{0.02}{0.032}=0.625.$$

Machine II makes only $40\%$ of the items but accounts for $62.5\%$ of the defective ones, because its defect rate is higher.
:::

Choosing a box and then drawing a ball is a two-stage problem of the same kind.

:::example Two boxes of balls
Box I holds $3$ red and $2$ white balls; box II holds $1$ red and $4$ white balls. A fair coin is tossed: heads chooses box I and tails chooses box II, and then one ball is drawn at random from the chosen box. Find the probability of drawing a red ball. If the ball is red, what is the probability that it came from box I?

**Solution.** Let $H$ be "box I is chosen" and $D$ be "a red ball is drawn". We have $P(H)=P(\overline H)=\dfrac12$, $P(D\mid H)=\dfrac35$ and $P(D\mid\overline H)=\dfrac15$. By the law of total probability:

$$P(D)=\frac12\cdot\frac35+\frac12\cdot\frac15=\frac{3}{10}+\frac1{10}=\frac25.$$

By Bayes' theorem:

$$P(H\mid D)=\frac{3/10}{2/5}=\frac34.$$

So $P(D)=\dfrac25$ and $P(H\mid D)=\dfrac34$.
:::

With more than two cases, we use the general form of both formulas.

:::example Three suppliers
A shop buys light bulbs from three suppliers: $50\%$ from X, $30\%$ from Y and $20\%$ from Z. The proportions of faulty bulbs from X, Y and Z are $1\%$, $2\%$ and $3\%$. A bulb chosen at random turns out to be faulty. Find the probability that it came from supplier Z.

**Solution.** The three events "from X", "from Y", "from Z" form a partition of the sample space. Let $A$ be "the bulb is faulty". By the law of total probability:

$$P(A)=0.5\cdot0.01+0.3\cdot0.02+0.2\cdot0.03=0.005+0.006+0.006=0.017.$$

By Bayes' theorem:

$$P(Z\mid A)=\frac{0.006}{0.017}=\frac{6}{17}\approx0.353.$$

So the probability that the faulty bulb came from Z is about $35.3\%$, even though Z supplies only $20\%$ of the bulbs.
:::

## A test for a rare disease

Now we answer the question from the start with the formulas.

:::example A positive test
The disease affects $1\%$ of the population; the test is positive for $95\%$ of people with the disease and for $5\%$ of people without it. A person tests positive. Find the probability that this person has the disease.

**Understand.** Let $B$ be "has the disease" and $A$ be "tests positive". We are given $P(B)=0.01$, $P(A\mid B)=0.95$, $P(A\mid\overline B)=0.05$, and we want $P(B\mid A)$.

**Plan.** This is a "backwards" question, so we use Bayes' theorem, with the denominator from the law of total probability.

**Solve.**

$$P(A)=0.01\cdot0.95+0.99\cdot0.05=0.0095+0.0495=0.059,$$

$$P(B\mid A)=\frac{0.0095}{0.059}=\frac{19}{118}\approx0.161.$$

**Look back.** The result agrees with the count $\dfrac{95}{590}$. The probability is low because the healthy people outnumber the sick ones $99$ to $1$: $5\%$ of a very large group ($0.0495$) is more than $95\%$ of a very small group ($0.0095$).
:::

That is why, after a positive screening test, doctors usually order a second test.

:::example A second test
Lan retakes the same kind of test, and again it is positive. Assume that, for each person, the results of the two tests are independent. Find the probability that Lan has the disease.

**Solution.** After the first test, the probability that Lan has the disease is already $\dfrac{19}{118}$, and that she does not is $\dfrac{99}{118}$. We use these as the starting probabilities and apply Bayes' theorem again (the denominator $118$ cancels top and bottom):

$$P=\frac{19\cdot0.95}{19\cdot0.95+99\cdot0.05}=\frac{18.05}{18.05+4.95}=\frac{18.05}{23}\approx0.785.$$

After two positive tests, the probability of the disease rises from about $16\%$ to about $78.5\%$.
:::

:::warning Common mistakes
- **Mixing up $P(A\mid B)$ and $P(B\mid A)$.** Wrong: "the test is $95\%$ accurate, so a positive result means a $95\%$ chance of the disease". Why it is wrong: $95\%$ is $P(\text{positive}\mid\text{disease})$. Right: $P(\text{disease}\mid\text{positive})=\dfrac{19}{118}\approx0.161$.
- **Missing a branch.** Wrong: in the two-machine example, $P(\text{defective})=0.6\cdot0.02=0.012$. Why it is wrong: a defective item can also come from machine II. Right: add both branches to get $0.032$.
- **Forgetting to multiply by the starting probability.** Wrong: $P(\text{machine II}\mid\text{defective})=\dfrac{0.05}{0.032}$. Why it is wrong: the numerator must be the probability of the whole path, $P(\overline B)\cdot P(A\mid\overline B)$. Right: $\dfrac{0.4\cdot0.05}{0.032}=0.625$.
- **Taking $P(A\mid\overline B)=1-P(A\mid B)$.** Wrong: the false positive rate is $1-0.95=0.05$ "because it is the rest". Why it is wrong: $1-P(A\mid B)$ is $P(\overline A\mid B)$, the probability that a **sick** person tests negative. Right: $P(A\mid\overline B)$ is a separate figure that the problem must give.
:::

## Key terms

:::terms
- law of total probability | công thức xác suất toàn phần
- Bayes' theorem | công thức Bayes
- partition of the sample space | hệ biến cố đầy đủ
- complementary event | biến cố đối
- prior probability | xác suất ban đầu
- posterior probability | xác suất sau khi biết kết quả
- false positive | dương tính giả
- screening test | xét nghiệm sàng lọc
:::

## Summary

- Total probability: $P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B)$; in general, add $P(B_i)P(A\mid B_i)$ over a partition.
- Bayes: $P(B\mid A)=\dfrac{P(B)P(A\mid B)}{P(A)}$.
- On a tree diagram: multiply along each path; $P(A)$ is the sum of the paths to $A$; Bayes is "one path divided by the sum".
- For a rare disease, the false positives from the huge healthy group can dominate, so $P(\text{disease}\mid\text{positive})$ can be small.
- $P(A\mid\overline B)$ is not $1-P(A\mid B)$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Given $P(B)=0.3$, $P(A\mid B)=0.6$ and $P(A\mid\overline B)=0.2$, find $P(A)$ and $P(B\mid A)$.

::hint
**What you need:** the law of total probability and Bayes' theorem.

**Steps:**
1. $P(\overline B)=0.7$.
2. Find $P(A)$, then divide $0.3\cdot0.6$ by $P(A)$.

::solution
$P(A)=0.3\cdot0.6+0.7\cdot0.2=0.18+0.14=0.32$. $P(B\mid A)=\dfrac{0.18}{0.32}=\dfrac9{16}=0.5625$.

**Answer.** $P(A)=0.32$; $P(B\mid A)=0.5625$.
:::

:::exercise
A school has two campuses: $70\%$ of its students are at campus 1 and $30\%$ at campus 2. The proportions who cycle to school at the two campuses are $20\%$ and $50\%$. A student of the school is chosen at random. Find the probability that the student cycles. If the student cycles, what is the probability that the student is at campus 2?

::hint
**What you need:** the two campuses are two complementary cases.

**Steps:**
1. Add the two paths that lead to "cycles".
2. Divide the path through campus 2 by the total.

::solution
$P(\text{cycles})=0.7\cdot0.2+0.3\cdot0.5=0.14+0.15=0.29$. $P(\text{campus 2}\mid\text{cycles})=\dfrac{0.15}{0.29}=\dfrac{15}{29}\approx0.517$.

**Answer.** $0.29$ and $\dfrac{15}{29}\approx0.517$.
:::

:::exercise
Box I holds $4$ red and $6$ blue balls; box II holds $7$ red and $3$ blue balls. A die is rolled: a $1$ or a $2$ chooses box I, anything else chooses box II; then one ball is drawn at random from the chosen box. Find the probability of a red ball and the probability that a red ball came from box I.

::hint
**What you need:** $P(\text{box I})=\dfrac26=\dfrac13$.

**Steps:**
1. $P(\text{red})=\dfrac13\cdot\dfrac4{10}+\dfrac23\cdot\dfrac7{10}$.
2. Use Bayes' theorem.

::solution
$P(\text{red})=\dfrac{4}{30}+\dfrac{14}{30}=\dfrac{18}{30}=\dfrac35$. $P(\text{box I}\mid\text{red})=\dfrac{4/30}{18/30}=\dfrac29$.

**Answer.** $\dfrac35$ and $\dfrac29$.
:::

:::exercise
The first box holds $3$ white and $2$ black balls; the second box holds $2$ white and $2$ black balls. One ball is moved at random from the first box to the second, and then one ball is drawn at random from the second box. Find the probability that this last ball is white.

::hint
**What you need:** two cases: the ball moved is white or black; after the move, the second box has $5$ balls.

**Steps:**
1. Moving a white ball (probability $\dfrac35$): the second box has $3$ white out of $5$.
2. Moving a black ball (probability $\dfrac25$): the second box has $2$ white out of $5$.

::solution
$P(\text{white})=\dfrac35\cdot\dfrac35+\dfrac25\cdot\dfrac25=\dfrac9{25}+\dfrac4{25}=\dfrac{13}{25}$.

**Answer.** $\dfrac{13}{25}$.
:::

:::exercise
The probability of rain on a given morning is $0.25$. If it rains, the bus is late with probability $0.6$; if it does not rain, the bus is late with probability $0.2$. Is each claim true or false?

a) The probability that the bus is late is $0.3$.

b) The probability that the bus is late when it does not rain is $0.8$.

c) Given that the bus is late, the probability of rain is $0.5$.

d) Given that the bus is not late, the probability of rain is less than $0.25$.

::hint
**What you need:** the law of total probability and Bayes' theorem; $P(\text{not late}\mid\text{rain})=1-0.6$.

**Steps:**
1. Find $P(\text{late})$.
2. Apply Bayes' theorem to "late" and to "not late".

::solution
a) **True**: $0.25\cdot0.6+0.75\cdot0.2=0.15+0.15=0.3$.

b) **False**: that probability is given as $0.2$; $0.8$ is the probability of **not** being late when it does not rain.

c) **True**: $\dfrac{0.15}{0.3}=0.5$.

d) **True**: $P(\text{rain}\mid\text{not late})=\dfrac{0.25\cdot0.4}{0.7}=\dfrac17\approx0.143<0.25$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
Three factories supply parts to a phone maker in the proportions $40\%$, $35\%$, $25\%$, with defect rates $2\%$, $3\%$, $4\%$. A part chosen at random is defective. Find the probability that it came from the first factory. Give your answer to 2 decimal places.

::hint
**What you need:** the general form of the law of total probability and of Bayes' theorem with three cases.

**Steps:**
1. Find $P(\text{defective})$ as a sum of three products.
2. Divide $0.4\cdot0.02$ by that sum.

::solution
$P(\text{defective})=0.008+0.0105+0.01=0.0285$. The probability is $\dfrac{0.008}{0.0285}=\dfrac{16}{57}\approx0.2807$.

**Answer.** $0.28$.
:::

:::exercise
In a company's inbox, $30\%$ of emails are spam. The phrase "you have won" appears in $40\%$ of spam emails but in only $2\%$ of ordinary emails. A new email contains "you have won". Find the probability that it is spam, as a percentage to 1 decimal place.

::hint
**What you need:** Bayes' theorem; this is how a simple spam filter works.

**Steps:**
1. Find $P(\text{phrase})=0.3\cdot0.4+0.7\cdot0.02$.
2. Divide $0.3\cdot0.4$ by that result.

::solution
$P(\text{phrase})=0.12+0.014=0.134$. $P(\text{spam}\mid\text{phrase})=\dfrac{0.12}{0.134}=\dfrac{60}{67}\approx0.896$.

**Answer.** About $89.6\%$.
:::

:::exercise Review
Machine A makes $300$ items, $9$ of them defective; machine B makes $200$ items, $10$ of them defective. All the items are mixed and one is picked at random. Find the probability that it is defective in two ways: by direct counting and with the law of total probability. If the item is defective, what is the probability that machine B made it?

::hint
**What you need:** conditional probability by counting (see [conditional probability](lesson:conditional-probability-intro)).

**Steps:**
1. Counting: $\dfrac{9+10}{500}$.
2. Formula: $P(A)=\dfrac{300}{500}=0.6$, $P(\text{defective}\mid A)=\dfrac{9}{300}=0.03$, and similarly for machine B.

::solution
Counting: $\dfrac{19}{500}=0.038$. Formula: $0.6\cdot0.03+0.4\cdot0.05=0.018+0.02=0.038$, the same. $P(\text{machine B}\mid\text{defective})=\dfrac{10}{19}$ (counting among the $19$ defective items).

**Answer.** $0.038$; $\dfrac{10}{19}$.
:::

:::exercise Review
Box I holds $4$ red and $2$ white balls; box II holds $2$ red and $4$ white balls. One box is chosen at random (each with probability $\dfrac12$), and then $2$ balls are drawn at random together from that box. Find the probability of getting $2$ red balls. If $2$ red balls are drawn, what is the probability that box I was chosen?

::hint
**What you need:** counting with combinations (see [permutations, arrangements and combinations](lesson:permutations-combinations)): each box gives $\binom{6}{2}=15$ ways to draw $2$ balls.

**Steps:**
1. $P(\text{2 red}\mid\text{box I})=\dfrac{\binom{4}{2}}{15}$ and $P(\text{2 red}\mid\text{box II})=\dfrac{\binom{2}{2}}{15}$.
2. Use the law of total probability, then Bayes' theorem.

::solution
$P(\text{2 red})=\dfrac12\cdot\dfrac6{15}+\dfrac12\cdot\dfrac1{15}=\dfrac7{30}$. $P(\text{box I}\mid\text{2 red})=\dfrac{6/30}{7/30}=\dfrac67$.

**Answer.** $\dfrac7{30}$ and $\dfrac67$.
:::

:::exercise Challenge
A disease affects $2\%$ of the population. A test is positive for $90\%$ of people with the disease and gives a false positive for $4\%$ of people without it. a) A person tests positive; find the probability that the person has the disease. b) The person retakes the test and is positive again (the two results are independent for each person); find the probability of the disease again.

::hint
**What you need:** Bayes' theorem; with two independent tests, the probability of two positives is $0.9^2$ with the disease and $0.04^2$ without it.

**Steps:**
1. a) Numerator $0.02\cdot0.9$; the denominator adds $0.98\cdot0.04$.
2. b) Replace $0.9$ by $0.81$ and $0.04$ by $0.0016$.

::solution
a) $\dfrac{0.018}{0.018+0.0392}=\dfrac{0.018}{0.0572}\approx0.315$.

b) $\dfrac{0.02\cdot0.81}{0.02\cdot0.81+0.98\cdot0.0016}=\dfrac{0.0162}{0.017768}\approx0.912$.

**Answer.** a) $\approx0.315$; b) $\approx0.912$.
:::

## Mini test

:::quiz
::mc
Given $P(B)=0.4$, $P(A\mid B)=0.5$ and $P(A\mid\overline B)=0.25$, the value of $P(A)$ is
A. $0.2$.
B. $0.75$.
C. $0.3$.
D. $0.35$.
::key D
$P(A)=0.4\cdot0.5+0.6\cdot0.25=0.2+0.15=0.35$. A misses the $\overline B$ branch, B adds the two conditional probabilities, and C wrongly uses $P(\overline B)=0.4$.

::mc
Machine I makes $70\%$ of the items with a defect rate of $1\%$; machine II makes $30\%$ with a defect rate of $4\%$. An item is defective; the probability that machine II made it is closest to
A. $0.04$.
B. $0.3$.
C. $0.63$.
D. $0.012$.
::key C
$P(\text{defective})=0.007+0.012=0.019$, so $P(\text{II}\mid\text{defective})=\dfrac{0.012}{0.019}=\dfrac{12}{19}\approx0.63$. A is $P(\text{defective}\mid\text{II})$, B is the starting probability, and D is the numerator before dividing.

::mc
Box I holds $2$ red and $3$ white balls; box II holds $4$ red and $1$ white ball. A box is chosen at random and one ball is drawn. The probability of a red ball is
A. $\dfrac{8}{25}$.
B. $\dfrac35$.
C. $\dfrac15$.
D. $\dfrac65$.
::key B
$\dfrac12\cdot\dfrac25+\dfrac12\cdot\dfrac45=\dfrac35$. A multiplies the two conditional probabilities, C uses only the box I branch, and D forgets to multiply by $\dfrac12$ (a probability cannot exceed $1$).

::mc
A disease affects $0.5\%$ of the population; a test is positive for $99\%$ of people with it and gives a false positive for $2\%$ of people without it. A person tests positive; the probability that the person has the disease is closest to
A. $99\%$.
B. $98\%$.
C. $20\%$.
D. $0.5\%$.
::key C
$\dfrac{0.005\cdot0.99}{0.005\cdot0.99+0.995\cdot0.02}=\dfrac{0.00495}{0.02485}\approx0.199$. A confuses $P(\text{positive}\mid\text{disease})$ with $P(\text{disease}\mid\text{positive})$, B is $1-0.02$, and D is the starting probability.

::tf
Workshop I makes $60\%$ of the items with a defect rate of $3\%$; workshop II makes $40\%$ with a defect rate of $6\%$. An item is chosen at random.
a) The probability that the item is defective is $0.042$.
b) The probability that the item is defective, given that it is from workshop II, is $0.024$.
c) Given that the item is defective, the probability that it is from workshop II is $0.4$.
d) Given that the item is not defective, the probability that it is from workshop I is greater than $0.6$.
::key T F F T
a) True: $0.018+0.024$. b) False: that probability is given as $0.06$; $0.024$ is the probability of "from II and defective". c) False: $\dfrac{0.024}{0.042}=\dfrac47\approx0.571$. d) True: $\dfrac{0.6\cdot0.97}{0.958}\approx0.608$.

::sa
$40\%$ of phone users use iOS and $60\%$ use Android. The proportions using app X in the two groups are $30\%$ and $25\%$. A phone user is chosen at random; find the probability that the user uses app X.
::key 0.27
$0.4\cdot0.3+0.6\cdot0.25=0.12+0.15=0.27$.

::sa
Box I holds $3$ red and $7$ blue balls; box II holds $6$ red and $4$ blue balls. A die is rolled: a $6$ chooses box I, anything else chooses box II; then one ball is drawn and it is red. Find the probability that it came from box I. Give your answer to 2 decimal places.
::key 0.09
$P(\text{red})=\dfrac16\cdot0.3+\dfrac56\cdot0.6=0.05+0.5=0.55$, so $P(\text{I}\mid\text{red})=\dfrac{0.05}{0.55}=\dfrac1{11}\approx0.09$.
:::
