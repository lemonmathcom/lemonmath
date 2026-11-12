---
title: Possible outcomes and events in games and experiments. Experimental probability
description: List the possible outcomes of games and experiments; recognise certain, impossible and possible events; work out experimental probability and use it to predict.
minutes: 30
---

:::goals
- List the possible outcomes of a simple game or experiment.
- Recognise certain, impossible and possible events; name the outcomes that make an event happen.
- Work out the experimental probability of an event from repeated trials.
- Use experimental probability to compare and to predict in real situations.
:::

Before a match, the referee tosses a coin to decide which team kicks off. Nobody knows in advance whether it will land heads or tails. But everyone knows one thing for certain: it can only land on one of those two sides, and never on a "third side".

That is what games and experiments of chance are like: we do not know the outcome of **one** go in advance, but we do know **which outcomes are possible**. And if we repeat it many times, we also find out which outcomes happen more often. This lesson is the first step in probability, the mathematics of chance.

## Possible outcomes

When a coin is tossed, there are two **possible outcomes**: heads (H) and tails (T). When a six-sided dice is rolled, there are six possible outcomes: $1$ dot, $2$ dots, …, $6$ dots.

:::definition Possible outcome
When a game or an experiment is carried out, each result that can happen is called a **possible outcome**. We often write the set of possible outcomes; for example, when a dice is rolled: $\{1;2;3;4;5;6\}$.
:::

A game of chance has two features: we know **all** the possible outcomes in advance, but we do **not** know the outcome of each go in advance.

## Events

When rolling a dice, we may be interested in things like "the number of dots is even" or "the number of dots is greater than $4$". Each such thing is called an **event**. The event "the number of dots is even" happens if the outcome is $2$, $4$ or $6$; those outcomes are called **favourable outcomes** for the event.

:::definition Three kinds of event
- A **certain** event: it always happens, whatever the outcome. Example: "the number of dots is less than $7$".
- An **impossible** event: it never happens. Example: "the number of dots is $7$".
- A **possible** event: it happens for some outcomes and not for others. Example: "the number of dots is even".
:::

## Experimental probability

The event "the coin lands heads" is possible. But how often does it happen? To answer, we do the experiment many times and count.

:::definition Experimental probability
A game or experiment is carried out $n$ times. If the event $A$ happens $k$ times, the **experimental probability** of $A$ is the ratio
$$\dfrac{k}{n}=\dfrac{\text{number of times } A \text{ happens}}{\text{total number of trials}}.$$
:::

Experimental probability is a number from $0$ to $1$. The closer it is to $1$, the more often the event happens; the closer to $0$, the rarer it is. It depends on the particular trials: do a few dozen more and the number may change a little. But the more trials we do, the steadier that number becomes.

Minh rolls a dice $50$ times and records how many times each face comes up. The results are shown in the bar chart below.

:::diagram Number of times each face came up in $50$ rolls of a dice
alt: A bar chart with six bars for the faces 1 to 6 of a dice, of heights 7, 9, 8, 10, 6, 10
point O 0,0 ""
point XE 12.6,0 ""
point YE 0,10.8 ""
segment O XE
segment O YE
label -0.5,0 "0"
point G2a 0,2 ""
point G2b 12.6,2 ""
segment G2a G2b dashed
label -0.5,2 "2"
point G4a 0,4 ""
point G4b 12.6,4 ""
segment G4a G4b dashed
label -0.5,4 "4"
point G6a 0,6 ""
point G6b 12.6,6 ""
segment G6a G6b dashed
label -0.5,6 "6"
point G8a 0,8 ""
point G8b 12.6,8 ""
segment G8a G8b dashed
label -0.5,8 "8"
point G10a 0,10 ""
point G10b 12.6,10 ""
segment G10a G10b dashed
label -0.5,10 "10"
point B0a 0.8,0 ""
point B0b 2,0 ""
point B0c 2,7 ""
point B0d 0.8,7 ""
polygon B0a B0b B0c B0d
segment B0a B0d
segment B0d B0c
segment B0c B0b
label 1.4,7.4 "7"
label 1.4,-0.6 "1"
point B1a 2.8,0 ""
point B1b 4,0 ""
point B1c 4,9 ""
point B1d 2.8,9 ""
polygon B1a B1b B1c B1d
segment B1a B1d
segment B1d B1c
segment B1c B1b
label 3.4,9.4 "9"
label 3.4,-0.6 "2"
point B2a 4.8,0 ""
point B2b 6,0 ""
point B2c 6,8 ""
point B2d 4.8,8 ""
polygon B2a B2b B2c B2d
segment B2a B2d
segment B2d B2c
segment B2c B2b
label 5.4,8.4 "8"
label 5.4,-0.6 "3"
point B3a 6.8,0 ""
point B3b 8,0 ""
point B3c 8,10 ""
point B3d 6.8,10 ""
polygon B3a B3b B3c B3d
segment B3a B3d
segment B3d B3c
segment B3c B3b
label 7.4,10.4 "10"
label 7.4,-0.6 "4"
point B4a 8.8,0 ""
point B4b 10,0 ""
point B4c 10,6 ""
point B4d 8.8,6 ""
polygon B4a B4b B4c B4d
segment B4a B4d
segment B4d B4c
segment B4c B4b
label 9.4,6.4 "6"
label 9.4,-0.6 "5"
point B5a 10.8,0 ""
point B5b 12,0 ""
point B5c 12,10 ""
point B5d 10.8,10 ""
polygon B5a B5b B5c B5d
segment B5a B5d
segment B5d B5c
segment B5c B5b
label 11.4,10.4 "10"
label 11.4,-0.6 "6"
label 0.3,11.2 "Times"
:::

For example, face $4$ came up $10$ times in $50$ rolls, so the experimental probability of the event "face $4$ comes up" is $\dfrac{10}{50}=\dfrac15$.

## Examples

We start by listing possible outcomes.

:::example Listing possible outcomes
List the possible outcomes in each game:

a) Drawing a card at random from a box of $5$ cards numbered $1$; $2$; $3$; $4$; $5$.

b) Taking a ball at random from a box with $3$ red balls and $2$ blue balls (all the same size), and looking at its colour.

**Solution.**

a) The card drawn can show any one of the five numbers, so the possible outcomes are $\{1;2;3;4;5\}$.

b) We only care about the colour of the ball. The ball taken can be red or blue, so the possible outcomes are $\{\text{red};\ \text{blue}\}$.

So a) $\{1;2;3;4;5\}$; b) $\{\text{red};\ \text{blue}\}$.

**Remark.** In part b), the box has $5$ balls but there are only $2$ possible outcomes, because we only record the colour.
:::

Next, we sort events.

:::example Sorting events
A dice is rolled. Is each event certain, impossible or possible? For each possible event, name the favourable outcomes.

a) "The number of dots is even".

b) "The number of dots is less than $7$".

c) "The number of dots is $7$".

d) "The number of dots is greater than $4$".

**Solution.**

The possible outcomes are $\{1;2;3;4;5;6\}$.

a) The event happens when the outcome is $2$; $4$; $6$, and not for the other outcomes. It is a possible event; the favourable outcomes are $2$; $4$; $6$.

b) Every outcome from $1$ to $6$ is less than $7$, so it is a certain event.

c) No outcome is $7$, so it is an impossible event.

d) The event happens when the outcome is $5$ or $6$. It is a possible event; the favourable outcomes are $5$; $6$.

So a) and d) are possible; b) is certain; c) is impossible.
:::

Now we work out experimental probabilities.

:::example Tossing a coin
Lan tosses a coin $40$ times and gets tails $18$ times. Find the experimental probability of the event "tails" and of the event "heads".

**Solution.**

The event "tails" happened $18$ times in $40$ tosses. Its experimental probability is
$$\dfrac{18}{40}=\dfrac{9}{20}=0.45.$$

The number of heads is $40-18=22$. The experimental probability of the event "heads" is
$$\dfrac{22}{40}=\dfrac{11}{20}=0.55.$$

So the experimental probability of "tails" is $0.45$, and of "heads" is $0.55$.

**Remark.** These two numbers add up to $1$, because each toss gives exactly one of the two events.
:::

Reading data from a chart to find experimental probabilities.

:::example Rolling a dice $50$ times
Using the chart "Number of times each face came up in $50$ rolls of a dice", find the experimental probability of each event:

a) "Face $6$ comes up".

b) "A face with an even number of dots comes up".

**Solution.**

a) Face $6$ came up $10$ times in $50$ rolls. The experimental probability is
$$\dfrac{10}{50}=\dfrac{1}{5}.$$

b) The event happens when face $2$, $4$ or $6$ comes up. The number of times it happened is
$$9+10+10=29\ (\text{times}).$$

The experimental probability is $\dfrac{29}{50}$.

So a) $\dfrac15$; b) $\dfrac{29}{50}$.
:::

Finally, we use experimental probability to predict.

:::example A prediction for a shop
A bread stall records that, of its last $200$ customers, $50$ also bought a cup of soya milk. Next week the stall expects about $600$ customers. About how many cups of soya milk should it prepare?

**Solution.**

*Understand.* We have data from $200$ past customers. We need to estimate how many of the $600$ coming customers will buy soya milk.

*Plan.* Find the experimental probability of the event "a customer buys soya milk", and assume this rate stays the same next week.

*Solve.* The experimental probability of the event "a customer also buys soya milk" is
$$\dfrac{50}{200}=\dfrac{1}{4}.$$

If this rate stays the same, then of $600$ customers about
$$600\cdot\dfrac{1}{4}=150\ (\text{customers})$$
will buy soya milk.

So the stall should prepare about $150$ cups of soya milk.

*Look back.* This is only an estimate: the real number of customers may be a little more or a little less. Sellers usually prepare a few extra so as not to run out. Even so, having the figure $150$ is far better than guessing.
:::

:::warning Common mistakes
- **Mixing up "possible" and "certain".** Wrong: "Toss a coin $10$ times and you will definitely get heads $5$ times." Why it is wrong: each toss is down to chance; $10$ tosses could give $3$, $5$ or $7$ heads. Right: we can only say the number of heads is usually about half.
- **Using the number of times as the probability.** Wrong: the experimental probability of "tails" is $18$. Why it is wrong: experimental probability is a ratio; divide by the total number of trials. Right: $\dfrac{18}{40}=0.45$.
- **Dividing by the number of possible outcomes instead of the number of trials.** Wrong: a dice rolled $50$ times shows $6$ ten times, so the experimental probability is $\dfrac{10}{6}$. Why it is wrong: the denominator is the total number of rolls. Right: $\dfrac{10}{50}=\dfrac15$.
- **Believing "it was tails last time, so it must be heads now".** Wrong: tails came up $4$ times in a row, so next time it must be heads. Why it is wrong: a coin does not "remember" earlier tosses; each toss can still be tails. Right: the next result is still down to chance.
:::

## Key terms

:::terms
- game, experiment | trò chơi, thí nghiệm
- possible outcome | kết quả có thể
- event | sự kiện
- favourable outcome | kết quả thuận lợi
- certain event | sự kiện chắc chắn
- impossible event | sự kiện không thể
- possible event | sự kiện có thể xảy ra
- experimental probability | xác suất thực nghiệm
- toss a coin | tung đồng xu
- roll a dice | gieo xúc xắc
:::

## Summary

- In a game or experiment of chance we know all the possible outcomes in advance, but not the outcome of each go.
- A certain event always happens; an impossible event never happens; a possible event happens for its favourable outcomes.
- If an experiment is done $n$ times and event $A$ happens $k$ times, the experimental probability of $A$ is $\dfrac{k}{n}$, a number from $0$ to $1$.
- Experimental probability helps us compare how likely events are and estimate how often they will happen in future.

The referee in the opening does not know which way the coin will land, but now you do know this: toss it enough times and tails will come up about half the time. That is the beauty of probability: within the chance of each single go there is a pattern in large numbers. You can try the experiment yourself with a coin tonight. If you need to revise reading bar charts, see [Bar charts](lesson:g6-bar-charts).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
List the possible outcomes in each game:

a) Rolling a six-sided dice.

b) Taking a pen at random from a box with $2$ red pens, $3$ blue pens and $1$ black pen, and looking at its colour.

::hint
**What you need:** the possible outcomes are all the results that can happen, each listed once.

**Steps:**
1. Decide what we are interested in (number of dots, colour…).
2. List them without repeats.

::solution
a) The face that comes up can have from $1$ to $6$ dots, so the possible outcomes are $\{1;2;3;4;5;6\}$.

b) We are interested in the colour of the pen. The pen taken can be red, blue or black, so the possible outcomes are $\{\text{red};\ \text{blue};\ \text{black}\}$.

So a) $\{1;2;3;4;5;6\}$; b) $\{\text{red};\ \text{blue};\ \text{black}\}$.

**Answer.** a) $6$ outcomes; b) $3$ outcomes: red, blue, black.
:::

:::exercise
A dice is rolled. Is each event certain, impossible or possible?

a) "The number of dots is greater than $0$".

b) "The number of dots is a prime number".

c) "The number of dots is $0$".

d) "The number of dots is divisible by $7$".

::hint
**What you need:** see how many of the six possible outcomes make the event happen.

**Steps:**
1. Check each outcome from $1$ to $6$.
2. All outcomes: certain; none: impossible; some: possible.

::solution
a) Every outcome from $1$ to $6$ is greater than $0$, so it is a certain event.

b) The prime numbers from $1$ to $6$ are $2$; $3$; $5$. The event happens for these outcomes and not for $1$; $4$; $6$. It is a possible event.

c) No face has $0$ dots, so it is an impossible event.

d) No number from $1$ to $6$ is divisible by $7$, so it is an impossible event.

So a) certain; b) possible; c) impossible; d) impossible.

**Answer.** a) Certain; b) possible; c) impossible; d) impossible.
:::

:::exercise
A dice is rolled. List the favourable outcomes for each event:

a) "The number of dots is divisible by $3$".

b) "The number of dots is an odd number greater than $1$".

::hint
**What you need:** a favourable outcome is one that makes the event happen.

**Steps:**
1. Check the numbers from $1$ to $6$ one by one.
2. Keep those that satisfy the condition.

::solution
a) Of the numbers from $1$ to $6$, the ones divisible by $3$ are $3$ and $6$. So the favourable outcomes are $3$; $6$.

b) The odd numbers from $1$ to $6$ are $1$; $3$; $5$. Of these, the ones greater than $1$ are $3$ and $5$. So the favourable outcomes are $3$; $5$.

**Answer.** a) $3$; $6$. b) $3$; $5$.
:::

:::exercise
Hùng tosses a coin $50$ times and gets heads $23$ times. Find the experimental probability of the event "heads" and of the event "tails" (as decimals).

::hint
**What you need:** experimental probability is the number of times the event happens divided by the total number of trials.

**Steps:**
1. Work out $\dfrac{23}{50}$.
2. Find the number of tails, then the ratio.

::solution
The experimental probability of the event "heads" is
$$\dfrac{23}{50}=\dfrac{46}{100}=0.46.$$

The number of tails is $50-23=27$. The experimental probability of the event "tails" is
$$\dfrac{27}{50}=\dfrac{54}{100}=0.54.$$

So they are $0.46$ and $0.54$.

**Answer.** Heads $0.46$; tails $0.54$.
:::

:::exercise
Using the chart "Number of times each face came up in $50$ rolls of a dice", find the experimental probability of each event:

a) "Face $1$ comes up".

b) "A face with an odd number of dots comes up".

::hint
**What you need:** read the number on top of each bar; add the favourable faces.

**Steps:**
1. Read how many times face $1$ came up.
2. Add the numbers of times faces $1$, $3$, $5$ came up.

::solution
a) Face $1$ came up $7$ times in $50$ rolls. The experimental probability is $\dfrac{7}{50}$.

b) The event happens when face $1$, $3$ or $5$ comes up. The number of times it happened is
$$7+8+6=21\ (\text{times}).$$

The experimental probability is $\dfrac{21}{50}$.

So a) $\dfrac{7}{50}$; b) $\dfrac{21}{50}$.

**Answer.** a) $\dfrac{7}{50}$; b) $\dfrac{21}{50}$.
:::

:::exercise
A box contains red, blue and yellow balls. Mai takes a ball at random, notes its colour and puts it back. She does this $40$ times and gets $22$ red, $13$ blue and $5$ yellow.

a) Find the experimental probability of getting a ball of each colour.

b) Which colour do you think there is most of in the box?

::hint
**What you need:** experimental probability $\dfrac{k}{n}$; a colour that comes up more often is probably more common in the box.

**Steps:**
1. Work out the three ratios, each with denominator $40$.
2. Compare, then predict.

::solution
a) The experimental probability of getting a red ball is $\dfrac{22}{40}=\dfrac{11}{20}$.

The experimental probability of getting a blue ball is $\dfrac{13}{40}$.

The experimental probability of getting a yellow ball is $\dfrac{5}{40}=\dfrac{1}{8}$.

b) Red has the largest experimental probability ($\dfrac{22}{40}$, more than half), so we can guess that there are more red balls in the box than any other colour.

So a) red $\dfrac{11}{20}$, blue $\dfrac{13}{40}$, yellow $\dfrac18$; b) probably red.

**Answer.** a) $\dfrac{11}{20}$; $\dfrac{13}{40}$; $\dfrac18$. b) Red.
:::

:::exercise
In the $30$ days of September last year, a city had $12$ rainy days.

a) Find the experimental probability of the event "a September day is rainy".

b) Using that result, estimate how many of the first $10$ days of September this year will be rainy.

::hint
**What you need:** experimental probability $\dfrac{k}{n}$; the estimated number of times is the number of trials times the experimental probability.

**Steps:**
1. Work out $\dfrac{12}{30}$.
2. Multiply by $10$.

::solution
a) The experimental probability of the event "a September day is rainy" is
$$\dfrac{12}{30}=\dfrac{2}{5}.$$

b) If this rate stays the same, then in $10$ days about
$$10\cdot\dfrac{2}{5}=4\ (\text{days})$$
will be rainy.

So a) $\dfrac25$; b) about $4$ days (this is only an estimate; the real weather may differ).

**Answer.** a) $\dfrac25$; b) about $4$ days.
:::

:::exercise
In basketball practice, An throws $20$ shots and scores $13$; Bình throws $25$ shots and scores $15$. Using the experimental probability of the event "scoring", who shoots better?

::hint
**What you need:** compare the two experimental probabilities (you can change them into percentages).

**Steps:**
1. Work out the ratio for each student.
2. Change to percentages and compare.

::solution
An's experimental probability of scoring is
$$\dfrac{13}{20}=0.65=65\%.$$

Bình's experimental probability of scoring is
$$\dfrac{15}{25}=0.6=60\%.$$

Since $65\%>60\%$, An shoots better.

So, judging by experimental probability, An shoots better than Bình.

**Answer.** An ($65\%$ against $60\%$).
:::

:::exercise Challenge
Two coins are tossed at the same time.

a) List the possible outcomes (write the first coin's side first, then the second coin's).

b) List the favourable outcomes for the event "the two coins show different sides".

::hint
**What you need:** each coin has two sides, H and T; pair a side of the first coin with a side of the second.

**Steps:**
1. For each side of the first coin, pair it with both sides of the second.
2. Pick the outcomes with two different sides.

::solution
a) The first coin shows H or T; in each case the second coin also shows H or T. The possible outcomes are
$$\{HH;\ HT;\ TH;\ TT\}.$$

There are $2\cdot2=4$ possible outcomes in all.

b) The sides are different when one coin shows H and the other shows T. The favourable outcomes are $HT$ and $TH$.

So a) $HH$, $HT$, $TH$, $TT$; b) $HT$ and $TH$.

**Answer.** a) $4$ outcomes: $HH$, $HT$, $TH$, $TT$. b) $HT$, $TH$.
:::

## Mini test

:::quiz
::mc
A six-sided dice is rolled. The number of possible outcomes is
A. $6$.
B. $1$.
C. $2$.
D. $12$.
::key A
There are $6$ faces, from $1$ to $6$ dots. C is the number of outcomes when a coin is tossed.

::mc
A dice is rolled. Which event is impossible?
A. "The number of dots is even".
B. "The number of dots is $7$".
C. "The number of dots is less than $7$".
D. "The number of dots is odd".
::key B
No face has $7$ dots. A and D are possible; C is certain.

::mc
A coin is tossed $20$ times and lands tails $8$ times. The experimental probability of the event "tails" is
A. $8$.
B. $\dfrac{12}{20}$.
C. $\dfrac{2}{5}$.
D. $\dfrac{1}{2}$.
::key C
$\dfrac{8}{20}=\dfrac25$. A uses the number of times as the probability; B is for heads; D is the "ideal" value, not the result of this experiment.

::mc
A card is drawn at random from a box of four cards numbered $2$; $4$; $6$; $8$. The certain event is
A. "The card shows an odd number".
B. "The card shows a number greater than $8$".
C. "The card shows the number $5$".
D. "The card shows an even number".
::key D
All four cards show even numbers. A and C are impossible; B is impossible too.

::tf
Using the chart "Number of times each face came up in $50$ rolls of a dice", decide whether each statement is true or false.
a) Face $4$ came up $10$ times.
b) The experimental probability of the event "face $5$ comes up" is $6$.
c) Faces $1$ and $2$ came up $15$ times altogether.
d) The experimental probability of the event "a face with an even number of dots comes up" is greater than $\dfrac12$.
::key T F F T
a) True. b) False: it is $\dfrac{6}{50}=\dfrac{3}{25}$. c) False: $7+9=16$. d) True: $\dfrac{29}{50}>\dfrac{25}{50}$.

::sa
A coin is tossed $40$ times and lands tails $18$ times. Find the experimental probability of the event "tails" (as a decimal).
::key 0.45
$\dfrac{18}{40}=0.45$.

::sa
A dice is rolled. How many favourable outcomes are there for the event "the number of dots is a prime number"?
::key 3
The prime numbers from $1$ to $6$ are $2$; $3$; $5$.
:::
