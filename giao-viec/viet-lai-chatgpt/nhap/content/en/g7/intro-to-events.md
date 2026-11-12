---
title: Introduction to events and probability
description: Understand events, theoretical probability and experimental probability, apply the rules in calculations and solve practical problems.
minutes: 25
---

:::goals
- Recognise and describe events, theoretical probability and experimental probability.
- Explain why the main rule works.
- Carry out the related calculations or reasoning accurately.
- Apply the idea to a practical situation.
:::

A bag contains $3$ identical blue cards and $2$ identical red cards. On drawing one card, “draw red” is an event. It is not certain, but a number from $0$ to $1$ can describe its likelihood.

## events, theoretical probability and experimental probability

**A short exploration.**
There are $5$ equally likely cards, with $2$ favourable to red, so $P(\text{red})=\dfrac25$. If the experiment is repeated many times, the relative frequency of red usually fluctuates around $\dfrac25$.

:::definition Event and probability
An event is a set of experiment outcomes. Probability $P(A)$ measures the likelihood of event $A$, with $0\le P(A)\le1$. Probability $0$ belongs to an impossible event and $1$ to a certain event.
:::

:::definition Counting and experiment
For equally likely outcomes, $P(A)=\dfrac{\text{number of favourable outcomes}}{\text{total outcomes}}$. Experimental probability after $n$ trials is $\dfrac{\text{number of occurrences of A}}n$.
:::

**Why does this work?**
The denominator counts all equally likely chances and the numerator counts those satisfying the event. The complement of $A$ contains every outcome not in $A$, so $P(A)+P(\overline A)=1$. Experimental frequency may differ from theory in a small trial but usually stabilises with more trials.

**How to check your own work.** For a question on this topic, first state in words what is given and what must be found. Next write the rule you will use, substitute values or reason one step at a time, and then check the result in a different way: put it back into the data, estimate its size, or compare it with a diagram or number line. If two methods disagree, locate the first step where they differ instead of changing only the final answer. This habit catches sign errors, missing units and overlooked cases.

**Systems view.** events, theoretical probability and experimental probability is not an isolated trick. Follow the chain: the data determine a model, the model determines the calculation, and the result must return to the original situation. When one piece of data changes, predict whether the result should increase, decrease or stay unchanged before calculating again.

## Worked examples and applications

:::example An even die result
Roll a fair die. Find the probability of an even result.

**Solution.**
There are $6$ outcomes; favourable outcomes are $2,4,6$, so there are $3$. Thus $P=\dfrac36=\dfrac12$.

Therefore, $\dfrac12$.
:::

:::example A complementary event
A hypothetical model gives probability of rain as $0.3$. Find the probability of no rain.

**Solution.**
$1-0.3=0.7$.

Therefore, $0.7$.
:::

:::example Coloured cards
A bag has $4$ yellow, $5$ purple and $1$ white identical cards. Find the probability of white.

**Solution.**
There are $10$ cards and $1$ is white, so $P=\dfrac1{10}$.

Therefore, $\dfrac1{10}$.
:::

:::example Experimental data
A spinner is tested $80$ times and lands on region A $22$ times. Find the experimental probability of A.

**Solution.**

*Understand.* Record the given data, the required result and any conditions.

*Plan.* Choose the relevant definition or rule, then work in a logical order.

*Solve.* $P_{exp}(A)=\dfrac{22}{80}=\dfrac{11}{40}=0.275$.

*Look back.* Compare the result with the data and use an independent check.

Therefore, $0.275$.
:::

## Common mistakes and connections

:::warning What can go wrong?
- **Counting unequal outcomes as equal.** Using the number of named spinner regions when their areas differ. The counting formula applies only to equally likely outcomes. Check mechanism, area or weighting before counting.
- **Expecting exact frequencies in every batch.** Believing probability $\dfrac12$ forces exactly one success in every two trials. Random outcomes fluctuate; proportions stabilise only in the long run. Compare many trials and use relative frequency.
:::

**Connections.** Probability turns a list of possibilities into a quantitative measure of uncertainty. It links counting, fractions and experimental data and supports decisions under risk. When solving a problem, separate three layers: the data, the mathematical relationship and the conclusion. Before substituting values, state why the chosen rule applies; after each step, check signs, units and conditions. A diagram, small table or simple case often reveals a missing assumption. Estimate before calculating so that you know whether the answer should be large or small, positive or negative. After obtaining a result, use an independent check: substitute it back into the data, measure it on the diagram, or test a boundary case. If one item of data changes, predict which part of the method changes and which part remains valid. This approach turns a formula into a connected system of reasons and makes the idea usable in an unfamiliar situation instead of only in a memorised exercise. It also produces written work that another student can follow, question and verify line by line.

## Key terms

:::terms
- event | biến cố
- probability | xác suất
- favourable outcome | kết quả thuận lợi
- equally likely | đồng khả năng
- complementary event | biến cố đối
- theoretical probability | xác suất lí thuyết
- experimental probability | xác suất thực nghiệm
- relative frequency | tần suất tương đối
- trial | phép thử
:::

## Summary

- $0\le P(A)\le1$.
- For equally likely outcomes, probability is favourable count divided by total count.
- $P(A)+P(\overline A)=1$.
- Experimental probability is relative frequency.
- More trials usually give a more stable relative frequency.

## Practice

Each exercise includes the knowledge you need and a sequence of hints. Try it before opening the solution.

:::exercise
Roll a standard die. What is the probability of a result below $7$?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
All $6$ outcomes are favourable, so $P=\dfrac66=1$.

**Answer.** $1$.
:::

:::exercise
Toss a coin. What is the probability of obtaining number $5$?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
There are no favourable outcomes, so the probability is $0$.

**Answer.** $0$.
:::

:::exercise
Choose one position at random from HOCSINH, which has $7$ positions. Find the probability of letter H.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
H occurs $2$ times among $7$ positions, so probability is $\dfrac27$.

**Answer.** $\dfrac27$.
:::

:::exercise
Toss two fair coins. Find the probability of exactly one head.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
The equally likely outcomes are $HH,HT,TH,TT$. There are $2$ favourable outcomes among $4$, so $P=\dfrac12$.

**Answer.** $\dfrac12$.
:::

:::exercise
There are $20$ equally likely outcomes and $P(A)=0.35$. How many are favourable?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
The favourable count is $0.35\cdot20=7$.

**Answer.** $7$.
:::

:::exercise
A fair coin has head probability $0.5$, but only $8$ heads occur in $20$ tosses. Is this a contradiction?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
No. Experimental probability $\dfrac8{20}=0.4$ may fluctuate; $0.5$ is a long-run model, not a requirement for every small batch.

**Answer.** no.
:::

:::exercise
Given $P(A)=\dfrac7{12}$, find $P(\overline A)$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$P(\overline A)=1-\dfrac7{12}=\dfrac5{12}$.

**Answer.** $\dfrac5{12}$.
:::

:::exercise Challenge
A spinner has one red region covering half the circle and two blue regions each covering one quarter. Are the three named regions equally likely?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
No. The red area is twice each blue area, so the three regions cannot simply be counted as equal.

**Answer.** no.
:::

## Mini test

:::quiz
::mc
Probability always lies in
A. $0$ to $1$.
B. $1$ to $10$.
C. negative numbers.
D. numbers greater than $1$.
::key A
$0$ is impossible and $1$ is certain.

::mc
A die result greater than $4$ has probability
A. $\dfrac16$
B. $\dfrac13$
C. $\dfrac12$
D. $\dfrac23$
::key B
Favourable outcomes are $5,6$: $\dfrac26=\dfrac13$.

::mc
If $P(A)=0.2$, then $P(\overline A)$ equals
A. $0.2$
B. $1.2$
C. $0.8$
D. $0$
::key C
$1-0.2=0.8$.

::mc
A certain event has probability
A. $0$
B. $\dfrac12$
C. undefined
D. $1$
::key D
Every outcome is favourable.

::tf
Consider these probability statements.
a) Probability $\dfrac12$ forces exactly one success in every two trials.
b) Complement probability equals $1-P(A)$.
c) An impossible event has probability $0$.
d) Unequally likely outcomes are always counted equally.
::key F T T F
c), b) are true. Counting needs equal likelihood and short-run frequency may fluctuate, so d), a) are false.

::sa
What is the probability of rolling $6$ on a fair die?
::key 1/6
There is $1$ favourable outcome among $6$.

::sa
$P(A)=0.65$. Find $P(\overline A)$.
::key 0.35
$1-0.65=0.35$.

:::
