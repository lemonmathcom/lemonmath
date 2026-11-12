---
title: Experimental and theoretical probability, with applications
description: Calculate experimental probability from trials, compare it with theoretical probability, and use it to predict and estimate in real situations.
minutes: 25
---

:::goals
- Calculate the experimental probability of an event from the results of trials.
- Understand how experimental and theoretical probability are related as the number of trials grows.
- Use probability to predict how often an event will occur.
- Estimate a probability, or an unknown quantity, from experimental results.
:::

Nam suspects that his die is not fair. He rolls it $60$ times and sees the face with $6$ dots $13$ times. If the die is fair, the probability of a $6$ is only $\dfrac16$, so in $60$ rolls we would expect about $10$ sixes.

So is $13$ evidence that the die is biased? Or is it just ordinary chance? To answer, we need to understand how the actual results of an experiment relate to the probability calculated by theory.

## Let's explore

Suppose a student tosses a fair coin many times and records the number of heads. We work out the proportion of heads after each run:

| Number of tosses | $10$ | $50$ | $100$ | $500$ | $1\,000$ |
|---|---|---|---|---|---|
| Number of heads | $7$ | $28$ | $47$ | $254$ | $497$ |
| Proportion of heads | $0.7$ | $0.56$ | $0.47$ | $0.508$ | $0.497$ |

With few tosses the proportion varies quite a lot ($0.7$ after $10$ tosses). As the number of tosses grows, the proportion settles down around $0.5$, which is exactly the theoretical probability $\dfrac12$ of heads. This is the relationship we now name precisely.

## Experimental probability

:::definition Experimental probability
Suppose we carry out an experiment $n$ times and the event $E$ occurs $m$ times. The **experimental probability** of $E$ is
$$\frac{m}{n}=\frac{\text{number of times }E\text{ occurs}}{\text{total number of trials}}.$$
:::

Experimental probability is the number we measure from an actual experiment, while the probability of the previous lesson (calculated as $\dfrac kn$ for equally likely outcomes) is called **theoretical probability**.

**The relationship.** The larger the number of trials $n$, the closer the experimental probability is to the theoretical probability. With few trials the two values can differ noticeably and that is still normal. This gives us two applications: when we know the theoretical probability, we can predict how often the event will occur; when we cannot calculate the theoretical probability, we estimate it with the experimental probability from enough trials.

:::example Calculating experimental probability
A die is rolled $60$ times and the face with $6$ dots appears $12$ times. Find the experimental probability of "a six" and compare it with the theoretical probability.

**Solution.** The experimental probability is $\dfrac{12}{60}=\dfrac15=0.2$. The theoretical probability of a six is $\dfrac16\approx0.167$.

The two values are close; a small difference is normal with $60$ trials.

So the experimental probability is $\dfrac15$, slightly larger than the theoretical $\dfrac16$.
:::

:::example Using a table of results
A die is rolled $50$ times and the results are recorded in this table:

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Frequency | $7$ | $9$ | $8$ | $10$ | $6$ | $10$ |

Find the experimental probability of the event "an even number of dots" and compare it with the theoretical probability.

**Solution.** Check the total: $7+9+8+10+6+10=50$. The number of even faces is $9+10+10=29$. The experimental probability is $\dfrac{29}{50}=0.58$. The theoretical probability is $\dfrac36=0.5$.

So the experimental probability is $58\%$, about $8$ percentage points larger than the theoretical $50\%$.
:::

## Applications: prediction and estimation

If the probability of an event $E$ is $p$, then in $n$ trials we predict that $E$ will occur about $n\cdot p$ times. This number is only an estimate, not a certain result.

:::example Quality control
A factory checks $400$ products chosen at random and finds $8$ defective ones (an imagined case). Estimate the probability that a product is defective. Predict about how many defective products there are in a batch of $15\,000$.

**Solution.** The experimental probability of a defect is $\dfrac{8}{400}=0.02=2\%$. We use it to estimate the probability of a defect. For $15\,000$ products, the predicted number of defects is $15\,000\cdot0.02=300$.

So the probability of a defect is about $2\%$ and the batch has about $300$ defective products.
:::

We can also estimate an unknown quantity by sampling.

:::example Estimating the number of red marbles
A box holds $50$ marbles, red and white, and we do not know how many are red. You take a marble at random, note its colour and put it back, and repeat $100$ times. A red marble comes out $24$ times. Estimate the number of red marbles in the box.

**Solution.** The experimental probability of a red marble is $\dfrac{24}{100}=0.24$. We take this as an approximation of the proportion of red marbles in the box. The estimated number of red marbles is $50\cdot0.24=12$.

So the box holds about $12$ red marbles.
:::

:::example Weather forecasting
Suppose that in $30$ days of a month, $12$ days were rainy. Estimate the probability that a day of that month is rainy, and predict the number of rainy days in the next $5$ days.

**Solution.** The experimental probability of rain is $\dfrac{12}{30}=\dfrac25=40\%$. In the next $5$ days the predicted number of rainy days is $5\cdot0.4=2$.

So the probability of rain is about $40\%$ and we predict about $2$ rainy days in the next $5$ days (only a prediction).
:::

We return to Nam's die, using the four steps of solving a problem.

:::example Is Nam's die fair?
Nam rolls the die $60$ times and gets a six $13$ times. To be surer, he keeps rolling, $600$ rolls in all, and gets a six $98$ times (an imagined case). Judge whether there is reason to suspect the die.

**Solution.**

*Understand.* There are two experiments with different numbers of trials; we compare the experimental probability of a six with the theoretical probability $\dfrac16\approx16.7\%$.

*Plan.* Work out both experimental probabilities; the more trials, the more reliable.

*Solve.* With $60$ rolls: $\dfrac{13}{60}\approx21.7\%$, about $5$ percentage points above $16.7\%$. With $600$ rolls: $\dfrac{98}{600}\approx16.3\%$, almost equal to $16.7\%$.

*Look back.* As the number of trials grows, the experimental probability approaches the theoretical one, so the difference in the first run was most likely just chance. However, the experiment does not prove that the die is perfectly fair; it only shows there is no strong enough evidence to suspect it.

So there is no convincing reason to say that Nam's die is unfair.
:::

:::warning Mistakes to watch out for
- **Thinking the experimental probability must equal the theoretical probability.** Wrong: tossing a coin $10$ times must give exactly $5$ heads. Why it is wrong: with few trials the results vary; only with many trials is the experimental probability close to the theoretical one. Right: $7$ heads in $10$ tosses is perfectly normal.
- **Believing earlier results affect the next trial.** Wrong: after $5$ tails in a row, heads is more likely next. Why it is wrong: the tosses are independent, the coin does not "remember" earlier results. Right: the probability of heads is still $\dfrac12$.
- **Dividing by the number of times it did not occur.** Wrong: $8$ defective products in $400$ give an experimental probability of $\dfrac{8}{392}$. Why it is wrong: the denominator must be the total number of trials. Right: $\dfrac{8}{400}=2\%$.
- **Treating a prediction as an exact result.** Wrong: "a batch of $15\,000$ products will certainly contain exactly $300$ defective ones". Why it is wrong: the actual number of defects varies around that value. Right: there will be about $300$ defective products.
:::

**Connections.** This lesson builds on calculating probability as a ratio in [possible outcomes and favourable outcomes](lesson:possible-favourable-outcomes), together with percentages and the tables from the lessons on data. The idea that "the more trials, the more stable the frequency" is the foundation of statistics and is used in quality control, weather forecasting and surveys.

## Key terms

:::terms
- experimental probability | xác suất thực nghiệm
- theoretical probability | xác suất lí thuyết
- number of trials | số lần thử
- relative frequency | tần số tương đối
- prediction | dự đoán
- estimate | ước lượng
- independent | độc lập
- random | ngẫu nhiên
:::

## Summary

- The experimental probability of $E$ is the number of times $E$ occurs divided by the total number of trials.
- Theoretical probability is calculated as $\dfrac kn$ when the outcomes are equally likely.
- The more trials, the closer the experimental probability is to the theoretical one; with few trials a difference is normal.
- Prediction: $E$ occurs about $n\cdot p$ times in $n$ trials.
- Estimation: use experimental probability (from many trials) to estimate a probability or an unknown quantity.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
A coin is tossed $50$ times and lands heads $27$ times. Find the experimental probability of heads and of tails, and compare them with $50\%$.

::hint
**What you need:** experimental probability is the number of occurrences divided by the number of trials.

**Steps:**
1. Work out the number of tails.
2. Find the two experimental probabilities.

::solution
The number of tails is $50-27=23$. The experimental probability of heads is $\dfrac{27}{50}=54\%$; of tails it is $\dfrac{23}{50}=46\%$. Both are close to $50\%$.

So the probabilities are $54\%$ and $46\%$, close to the theoretical $50\%$.

**Answer.** $54\%$; $46\%$.
:::

:::exercise
A die is rolled $60$ times and the results are:

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Frequency | $9$ | $11$ | $10$ | $8$ | $12$ | $10$ |

Find the experimental probability of the event "more than $4$ dots" and compare it with the theoretical probability.

::hint
**What you need:** the faces greater than $4$ are $5$ and $6$.

**Steps:**
1. Add the frequencies of faces $5$ and $6$.
2. Divide by $60$ and compare with $\dfrac13$.

::solution
The number of times is $12+10=22$. The experimental probability is $\dfrac{22}{60}=\dfrac{11}{30}\approx36.7\%$. The theoretical probability is $\dfrac26=\dfrac13\approx33.3\%$.

So the experimental probability is $\dfrac{11}{30}$, slightly larger than the theoretical $\dfrac13$.

**Answer.** $\dfrac{11}{30}$.
:::

:::exercise
A factory checks $250$ light bulbs at random and finds $5$ faulty (an imagined case). Estimate the probability that a bulb is faulty and predict the number of faulty bulbs in a batch of $20\,000$.

::hint
**What you need:** predict using $n\cdot p$.

**Steps:**
1. Work out the experimental probability $\dfrac{5}{250}$.
2. Multiply by $20\,000$.

::solution
The experimental probability is $\dfrac{5}{250}=0.02=2\%$. The predicted number of faulty bulbs is $20\,000\cdot0.02=400$.

So the probability of a fault is about $2\%$ and the batch has about $400$ faulty bulbs.

**Answer.** $2\%$; about $400$ bulbs.
:::

:::exercise
A box holds $40$ marbles, red and blue. A marble is taken at random, its colour noted and put back; this is repeated $80$ times, and a red marble comes out $20$ times. Estimate the number of red marbles in the box.

::hint
**What you need:** the proportion of red marbles in the box is close to the experimental probability.

**Steps:**
1. Work out $\dfrac{20}{80}$.
2. Multiply by $40$.

::solution
The experimental probability is $\dfrac{20}{80}=\dfrac14$. The estimated number of red marbles is $40\cdot\dfrac14=10$.

So the box holds about $10$ red marbles.

**Answer.** About $10$ red marbles.
:::

:::exercise
Suppose that in $40$ summer days, $14$ were very hot days. Estimate the probability that a summer day is very hot and predict the number of very hot days in the next $60$ summer days.

::hint
**What you need:** experimental probability, then multiply by the number of days.

**Steps:**
1. Work out $\dfrac{14}{40}$.
2. Multiply by $60$.

::solution
The experimental probability is $\dfrac{14}{40}=35\%$. The predicted number of very hot days is $60\cdot0.35=21$.

So the probability is about $35\%$ and we predict about $21$ very hot days.

**Answer.** $35\%$; about $21$ days.
:::

:::exercise
Suppose a footballer takes $30$ penalty kicks and scores $24$ times. Estimate the probability that the player scores with each kick. In the next $10$ kicks, about how many goals do you predict? Is this result certain?

::hint
**What you need:** a prediction is only an estimate.

**Steps:**
1. Work out $\dfrac{24}{30}$.
2. Multiply by $10$ and comment.

::solution
The experimental probability is $\dfrac{24}{30}=0.8=80\%$. In $10$ kicks we predict about $10\cdot0.8=8$ goals. The result is not certain: the actual number of goals could be $7$, $9$ or $10$.

So we predict about $8$ goals, but it is only an estimate.

**Answer.** $80\%$; about $8$ goals; not certain.
:::

:::exercise
An tosses a coin $20$ times and gets $13$ heads. Binh tosses it $200$ times and gets $104$ heads. Find each student's experimental probability. Whose result is more reliable for estimating the probability of heads? Why?

::hint
**What you need:** the more trials, the more reliable the result.

**Steps:**
1. Work out $\dfrac{13}{20}$ and $\dfrac{104}{200}$.
2. Compare with $\dfrac12$ and with the number of trials.

::solution
An: $\dfrac{13}{20}=65\%$. Binh: $\dfrac{104}{200}=52\%$. Binh's result is closer to $50\%$ and is based on many more trials.

So Binh's result is more reliable because it has more trials.

**Answer.** $65\%$; $52\%$; Binh's result is more reliable.
:::

:::exercise
A box holds $5$ red and $15$ blue marbles. A marble is taken at random, its colour noted and put back; this is repeated $200$ times. Find the theoretical probability of a red marble and predict the number of times a red marble is taken.

::hint
**What you need:** theoretical probability $\dfrac kn$; prediction $n\cdot p$.

**Steps:**
1. Find the theoretical probability of a red marble.
2. Multiply by $200$.

::solution
The theoretical probability of a red marble is $\dfrac{5}{20}=\dfrac14$. The predicted number of times is $200\cdot\dfrac14=50$.

So we predict about $50$ red marbles.

**Answer.** $\dfrac14$; about $50$ times.
:::

:::exercise
A prize machine is spun $80$ times and wins a prize $12$ times (an imagined case). Find the experimental probability of the event "wins a prize" and of the complementary event "does not win". (Revise [complementary events](lesson:possible-favourable-outcomes).)

::hint
**What you need:** $P(\overline E)=1-P(E)$.

**Steps:**
1. Work out $\dfrac{12}{80}$.
2. Subtract the result from $1$.

::solution
The experimental probability of winning is $\dfrac{12}{80}=\dfrac{3}{20}=15\%$. The experimental probability of not winning is $1-0.15=0.85=85\%$ (also $\dfrac{68}{80}$).

**Answer.** $15\%$; $85\%$.
:::

:::exercise Challenge
Two dice are rolled together $72$ times, and a total of $7$ occurs $15$ times. Find the experimental probability of that event and compare it with the theoretical probability $\dfrac16$. If we use the experimental probability to predict for $600$ rolls, how many times do we get, and what is the theoretical figure? Comment.

::hint
**What you need:** predict with $n\cdot p$ using the experimental or the theoretical $p$.

**Steps:**
1. Work out $\dfrac{15}{72}$ and $72\cdot\dfrac16$.
2. Work out $600\cdot\dfrac{15}{72}$ and $600\cdot\dfrac16$.

::solution
The experimental probability is $\dfrac{15}{72}=\dfrac{5}{24}\approx20.8\%$, larger than $\dfrac16\approx16.7\%$ (theory expects $72\cdot\dfrac16=12$ times, and we got $15$). The prediction for $600$ rolls from the experiment is $600\cdot\dfrac{5}{24}=125$ times; from theory it is $600\cdot\dfrac16=100$ times.

Comment: $72$ trials are still few, so the experimental probability is not yet reliable; since the outcomes of a pair of dice are equally likely, we should use the theoretical probability $\dfrac16$.

**Answer.** $\dfrac{5}{24}$; $125$ times against $100$ times.
:::

## Mini test

:::quiz
::mc
A coin is tossed $40$ times and lands heads $18$ times. The experimental probability of heads is
A. $\dfrac{18}{22}$.
B. $\dfrac{9}{20}$.
C. $\dfrac12$.
D. $\dfrac{22}{40}$.
::key B
$\dfrac{18}{40}=\dfrac{9}{20}=0.45$. A divides by the number of tails, C is the theoretical probability, D is the experimental probability of tails.

::mc
When the number of trials becomes very large, the experimental probability
A. gets further from the theoretical probability.
B. always equals the theoretical probability exactly.
C. gets closer to the theoretical probability.
D. is always larger than the theoretical probability.
::key C
The more trials, the more the proportion settles around the theoretical probability, but it need not equal it exactly.

::mc
A factory checks $400$ products and finds $8$ defective. About how many defective products would you predict in a batch of $15\,000$?
A. $8$.
B. $150$.
C. $600$.
D. $300$.
::key D
The experimental probability is $\dfrac{8}{400}=0.02$, so $15\,000\cdot0.02=300$. B and C use the wrong proportion.

::mc
A box holds $50$ red and white marbles. A marble is taken at random and put back, $100$ times; red comes out $24$ times. The estimated number of red marbles is
A. $12$.
B. $24$.
C. $26$.
D. $6$.
::key A
$50\cdot\dfrac{24}{100}=12$. A just takes the number of red draws (forgetting to scale), C and D do not follow any sensible method.

::tf
A fair coin is tossed $10$ times and lands heads $7$ times. Decide whether each statement is true or false.
a) The experimental probability of heads is $0.7$.
b) The theoretical probability of heads is $0.7$.
c) This result shows that the coin is not fair.
d) On the $11$th toss, the probability of heads is still $\dfrac12$.
::key T F F T
a) True: $\dfrac7{10}$. b) False: the theoretical probability is $\dfrac12$. c) False: $10$ trials are too few to conclude. d) True: the tosses are independent.

::sa
A coin is tossed $50$ times and lands heads $27$ times. What is the experimental probability of heads, as a percentage?
::key 54
$\dfrac{27}{50}=54\%$.

::sa
The probability that a bulb is faulty is estimated as $2\%$. About how many faulty bulbs are predicted in a batch of $20\,000$?
::key 400
$20\,000\cdot0.02=400$.
:::
