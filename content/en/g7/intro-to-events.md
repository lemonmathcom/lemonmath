---
title: Introducing events
description: Tell certain, impossible and random events apart, compare how likely they are, and find simple probabilities as a fraction of favourable outcomes.
minutes: 20
---

:::goals
- Recognise a random experiment and list its possible outcomes.
- Classify events as certain, impossible or random.
- Compare how likely simple events are.
- Find the probability of an event in card, dice and spinner games.
:::

Suppose your class has a card game. A box holds $10$ identical cards numbered $1$ to $10$. You draw one card without looking. You may pick one of two rules: win $1$ point if you draw an even number, or win $1$ point if you draw a multiple of $5$. You may only choose one rule.

Which rule would you choose, and why? And in this game, is there anything that is certain to happen, or something that can never happen?

## Experiments and possible outcomes

Drawing a card is an activity whose result we cannot predict, although we know exactly which cards could come out. Activities like this are familiar: tossing a coin, rolling a dice, spinning a wheel at a fair.

:::definition Random experiment
A random experiment is an activity whose result we cannot predict, but whose possible results we all know. Each separate possible result is called an **outcome**.

For example, drawing a card from a box of $10$ cards has $10$ outcomes; rolling a dice has $6$ outcomes; tossing a coin has $2$ outcomes, heads (H) and tails (T).
:::

## Types of event

Take the experiment "draw one card from the box of $10$ cards" and three statements: (1) the card shows a number less than $11$; (2) the card shows the number $11$; (3) the card shows an even number. Statement (1) is always true, (2) is never true, and (3) is sometimes true and sometimes false. These are three different types of event.

:::definition Event
An event is something that may or may not happen as a result of the experiment. There are three types:
- A **certain event** always happens.
- An **impossible event** never happens.
- A **random event** may happen and may not happen.
:::

An outcome that makes an event happen is called a **favourable outcome** for that event. For example, for the event "the card shows an even number", the favourable outcomes are the cards $2$, $4$, $6$, $8$, $10$.

:::example Classifying events
A fair dice with $6$ faces is rolled. Is each event below certain, impossible or random?

a) The number of dots is less than $7$.

b) The number of dots is $7$.

c) The number of dots is even.

d) The number of dots is greater than $4$.

**Solution.** The possible outcomes are $1$, $2$, $3$, $4$, $5$, $6$. For each event we ask whether it happens for every outcome, for no outcome, or only for some.

a) All six outcomes are less than $7$, so the event always happens: it is certain.

b) No outcome equals $7$, so the event never happens: it is impossible.

c) The event happens for $2$, $4$, $6$ and does not happen for $1$, $3$, $5$: it is random.

d) The event happens for $5$ or $6$ and does not happen for $1$, $2$, $3$, $4$: it is random.

So a) certain; b) impossible; c) and d) random.
:::

## How likely is an event? Probability

For a random event we want to know whether it is easy or hard to happen. When the outcomes of an experiment are equally likely to occur (identical cards, a fair dice, a spinner with equal sections), we call them **equally likely**. Then an event with more favourable outcomes is more likely, and we measure how likely it is with a number.

:::theorem Probability of an event
If an experiment has $n$ equally likely outcomes and an event $A$ has $k$ favourable outcomes, the probability of $A$ is
$$P(A)=\frac{k}{n}.$$
Always $0\le P(A)\le1$. A certain event has probability $1$ and an impossible event has probability $0$.
:::

**Why?** With $n$ equally likely outcomes, each outcome takes a share $\dfrac1n$ of "all the chance". Event $A$ has $k$ favourable outcomes, so it takes $k$ such shares, that is $\dfrac{k}{n}$. Since $k$ runs from $0$ (no outcome) to $n$ (every outcome), $P(A)$ lies between $0$ and $1$.

:::example Answering the opening question
One card is drawn from a box of $10$ cards numbered $1$ to $10$. Consider the events $A$: "the card is even"; $B$: "the card is a multiple of $5$"; $C$: "the card is a prime number". List the favourable outcomes, find the probability of each event, and say which event is the most likely.

**Solution.** The experiment has $10$ equally likely outcomes (the cards are identical).

The favourable outcomes for $A$ are the cards $2$, $4$, $6$, $8$, $10$ ($5$ outcomes), so $P(A)=\dfrac{5}{10}=\dfrac12$.

The favourable outcomes for $B$ are the cards $5$, $10$ ($2$ outcomes), so $P(B)=\dfrac{2}{10}=\dfrac15$.

The favourable outcomes for $C$ are the cards $2$, $3$, $5$, $7$ ($4$ outcomes), so $P(C)=\dfrac{4}{10}=\dfrac25$.

Comparing $\dfrac12=\dfrac{5}{10}$, $\dfrac25=\dfrac{4}{10}$, $\dfrac15=\dfrac{2}{10}$, we see that $P(A)>P(C)>P(B)$.

So $P(A)=\dfrac12$, $P(B)=\dfrac15$, $P(C)=\dfrac25$, and event $A$ is the most likely. Hence we should choose the rule "an even card".
:::

:::graph A spinner divided into 8 equal sections
alt: A circular spinner divided into 8 equal sections numbered 1 to 8 clockwise
x: -4..4
y: -4..4
plot: sqrt(9 - x^2)
plot: -sqrt(9 - x^2)
segment: (0, 0) (0.0, 3.0)
segment: (0, 0) (2.12, 2.12)
segment: (0, 0) (3.0, 0.0)
segment: (0, 0) (2.12, -2.12)
segment: (0, 0) (0.0, -3.0)
segment: (0, 0) (-2.12, -2.12)
segment: (0, 0) (-3.0, -0.0)
segment: (0, 0) (-2.12, 2.12)
label: (0.77, 1.85) "1"
label: (1.85, 0.77) "2"
label: (1.85, -0.77) "3"
label: (0.77, -1.85) "4"
label: (-0.77, -1.85) "5"
label: (-1.85, -0.77) "6"
label: (-1.85, 0.77) "7"
label: (-0.77, 1.85) "8"
:::

:::example Spinning a spinner
A spinner is divided into $8$ equal sections numbered $1$ to $8$, as in the figure. We spin it and see which section the arrow stops in. Find the probabilities of the events:

$A$: "an even number"; $B$: "a number greater than $5$"; $C$: "a multiple of $4$"; $D$: "a number greater than $8$".

**Solution.** The sections are equal, so the $8$ outcomes are equally likely.

Event $A$ has the favourable outcomes $2$, $4$, $6$, $8$ ($4$ outcomes), so $P(A)=\dfrac48=\dfrac12$.

Event $B$ has the favourable outcomes $6$, $7$, $8$ ($3$ outcomes), so $P(B)=\dfrac38$.

Event $C$ has the favourable outcomes $4$, $8$ ($2$ outcomes), so $P(C)=\dfrac28=\dfrac14$.

Event $D$ has no favourable outcome (no section is greater than $8$), so it is impossible and $P(D)=\dfrac08=0$.

So $P(A)=\dfrac12$, $P(B)=\dfrac38$, $P(C)=\dfrac14$, $P(D)=0$; among these events, $A$ is the most likely.
:::

:::example A spinner at the school fair
At a fair, a spinner is divided into $12$ equal sections: $1$ section "First prize", $2$ sections "Second prize", $4$ sections "Third prize" and $5$ sections "Better luck next time". Each student spins once. Find the probability of winning First prize, of winning some prize, and of winning no prize.

**Solution.**

*Understand.* We spin once and there are $12$ equally likely outcomes (one for each section). We need the probabilities of three events.

*Plan.* For each event, count the favourable sections, then divide by $12$.

*Solve.* The event "win First prize" has $1$ favourable section, so its probability is $\dfrac{1}{12}$. The event "win some prize" has $1+2+4=7$ favourable sections, so its probability is $\dfrac{7}{12}$. The event "win no prize" has $5$ favourable sections, so its probability is $\dfrac{5}{12}$.

*Look back.* Check: $\dfrac{7}{12}+\dfrac{5}{12}=1$, because every spin certainly falls into one of the two cases "prize" or "no prize". These two cases do not have equal probabilities, since they take $7$ sections and $5$ sections.
:::

:::example Is the game fair?
An and Bình play a game by rolling a fair dice. An wins if the number of dots is even; Bình wins if the number of dots is a multiple of $3$. Is the game fair? If not, change Bình's rule to make it fair.

**Solution.** There are $6$ equally likely outcomes: $1$, $2$, $3$, $4$, $5$, $6$.

The event "An wins" has the favourable outcomes $2$, $4$, $6$, so its probability is $\dfrac36=\dfrac12$.

The event "Bình wins" has the favourable outcomes $3$, $6$, so its probability is $\dfrac26=\dfrac13$.

Since $\dfrac12>\dfrac13$, An is more likely to win, so the game is not fair.

To make it fair, Bình needs a rule with $3$ favourable outcomes, for instance "the number of dots is greater than $3$" (outcomes $4$, $5$, $6$); then the probability is also $\dfrac36=\dfrac12$.

So the game is not fair; changing Bình's rule to "the number of dots is greater than $3$" makes it fair.
:::

:::warning Common mistakes
- **Seeing two possibilities and saying the probability is $\dfrac12$.** Wrong: a spinner gives "prize" or "no prize", so the probability of a prize is $\dfrac12$. Why it is wrong: the two cases are not equally likely, as one takes $7$ sections and the other $5$. Right: count the equally likely outcomes ($12$ sections) and use $\dfrac{7}{12}$.
- **Thinking the experiment "remembers" the last result.** Wrong: the coin has just shown heads $5$ times in a row, so tails is certain next. Why it is wrong: each toss is independent and the coin has no memory. Right: each time there are $2$ equally likely outcomes, so the probability of tails is still $\dfrac12$.
- **Missing a favourable outcome.** Wrong: the only multiple of $5$ is the card $5$, so the probability is $\dfrac{1}{10}$. Why it is wrong: the card $10$ was left out. Right: list both $5$ and $10$, giving $\dfrac{2}{10}=\dfrac15$.
:::

**Connection.** A probability can also be written as a percentage: $\dfrac12$ is $50\%$ and $\dfrac15$ is $20\%$. You can revise how to convert between them in the lesson on [percentages](lesson:ratio-percentage-problems).

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- outcome | kết quả
- event | biến cố
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
- random event | biến cố ngẫu nhiên
- favourable outcome | kết quả thuận lợi
- equally likely | đồng khả năng
- probability | xác suất
:::

## Summary

- A random experiment: we cannot predict the result but we know all possible outcomes.
- A certain event always happens, an impossible event never happens, a random event may or may not happen.
- When the outcomes are equally likely: $P(A)=\dfrac{\text{number of favourable outcomes}}{\text{number of possible outcomes}}$.
- $0\le P(A)\le1$; certain means $P=1$, impossible means $P=0$.
- An event with more favourable outcomes is more likely.

## Practice

Each exercise gives what you need and hints for the steps. Try it yourself first, then open the solution.

:::exercise
Is each of the following events certain, impossible or random?

a) A card is drawn from a box that holds only blue cards: the card is blue.

b) A coin is tossed: it shows heads.

c) A fair dice is rolled: the number of dots is $0$.

d) A bag has $5$ red balls and $3$ blue balls, and one ball is taken: it is yellow.

e) From the same bag, one ball is taken: it is red or blue.

::hint
**What you need:** certain means it always happens; impossible means it never happens; anything else is random.

**Steps:**
1. In a), are there cards of any other colour in the box?
2. In c), does a dice have a face with $0$ dots?
3. In d) and e), which colours of ball are in the bag?

::solution
We check each event: does it happen for every outcome, for none, or for some?

a) The box has only blue cards, so the card drawn is always blue: certain.

b) The coin may show heads or tails: random.

c) A dice has no face with $0$ dots: impossible.

d) The bag has no yellow ball: impossible.

e) The bag has only red and blue balls, so the ball taken is always one of those colours: certain.

**Answer.** a) certain; b) random; c) impossible; d) impossible; e) certain.
:::

:::exercise
A fair dice is rolled. List the favourable outcomes and find the probability of each event:

a) $A$: "the number of dots is a prime number".

b) $B$: "the number of dots is greater than $2$ and less than $6$".

c) $C$: "the number of dots is a multiple of $7$".

::hint
**What you need:** $P=\dfrac{k}{6}$, where $k$ is the number of favourable outcomes among the six outcomes $1$ to $6$.

**Steps:**
1. In a), remember that $1$ is not a prime number.
2. In b), the numbers greater than $2$ and less than $6$ are $3$, $4$, $5$.
3. In c), is any number from $1$ to $6$ a multiple of $7$?

::solution
There are $6$ equally likely outcomes: $1$, $2$, $3$, $4$, $5$, $6$.

a) The primes are $2$, $3$, $5$ ($3$ outcomes), so $P(A)=\dfrac36=\dfrac12$.

b) The numbers that fit are $3$, $4$, $5$ ($3$ outcomes), so $P(B)=\dfrac36=\dfrac12$.

c) No number from $1$ to $6$ is a multiple of $7$, so $C$ is impossible and $P(C)=0$.

**Answer.** a) $\dfrac12$; b) $\dfrac12$; c) $0$.
:::

:::exercise
A box has $12$ identical cards numbered $1$ to $12$. One card is drawn at random. Find the probabilities of the events: "the card is a multiple of $3$", "the card is a prime number", "the card is greater than $12$". Which is more likely: a multiple of $3$ or a prime?

::hint
**What you need:** there are $12$ equally likely outcomes; compare two fractions with denominator $12$.

**Steps:**
1. List the multiples of $3$: start at $3$ and add $3$ each time.
2. List the primes from $1$ to $12$ (not including $1$).
3. Compare the two numbers of favourable outcomes.

::solution
There are $12$ equally likely outcomes.

The multiples of $3$ are $3$, $6$, $9$, $12$ ($4$ outcomes), so the probability is $\dfrac{4}{12}=\dfrac13$.

The primes are $2$, $3$, $5$, $7$, $11$ ($5$ outcomes), so the probability is $\dfrac{5}{12}$.

No card is greater than $12$, so the probability of the third event is $0$.

Since $\dfrac{5}{12}>\dfrac{4}{12}$, the event "a prime number" is more likely.

**Answer.** $\dfrac13$; $\dfrac{5}{12}$; $0$; "a prime number" is more likely.
:::

:::exercise
A bag has $4$ red balls, $3$ blue balls, $2$ yellow balls and $1$ white ball, all the same size. One ball is taken at random.

a) Find the probability of taking a red ball.

b) Find the probability of taking a ball that is not blue.

c) Which colour is the most likely to be taken?

::hint
**What you need:** the number of possible outcomes is the total number of balls; "not blue" includes the red, yellow and white balls.

**Steps:**
1. Work out the total number of balls.
2. In b), add the red, yellow and white balls, or subtract the blue balls from the total.
3. In c), compare the number of balls of each colour.

::solution
The total number of balls is $4+3+2+1=10$, so there are $10$ equally likely outcomes.

a) There are $4$ red balls, so the probability is $\dfrac{4}{10}=\dfrac25$.

b) The number of balls that are not blue is $10-3=7$, so the probability is $\dfrac{7}{10}$.

c) Red has the most balls ($4$), so red is the most likely colour to be taken.

**Answer.** a) $\dfrac25$; b) $\dfrac{7}{10}$; c) red.
:::

:::exercise
At a charity draw there are $20$ identical tickets numbered $1$ to $20$. One ticket is drawn at random. Find the probabilities of the events: $A$: "the number ends in $5$"; $B$: "the number is greater than $15$"; $C$: "the number is a multiple of $10$". Which events have equal probabilities?

::hint
**What you need:** there are $20$ equally likely outcomes; two events with the same number of favourable outcomes have the same probability.

**Steps:**
1. List the tickets that fit each event.
2. A number ending in $5$: there is $5$ and one more.
3. Count the tickets and divide by $20$.

::solution
There are $20$ equally likely outcomes.

Event $A$ has the tickets $5$, $15$ ($2$ outcomes), so $P(A)=\dfrac{2}{20}=\dfrac{1}{10}$.

Event $B$ has the tickets $16$, $17$, $18$, $19$, $20$ ($5$ outcomes), so $P(B)=\dfrac{5}{20}=\dfrac14$.

Event $C$ has the tickets $10$, $20$ ($2$ outcomes), so $P(C)=\dfrac{2}{20}=\dfrac{1}{10}$.

So $A$ and $C$ have equal probabilities.

**Answer.** $P(A)=\dfrac{1}{10}$; $P(B)=\dfrac14$; $P(C)=\dfrac{1}{10}$; $A$ and $C$ have equal probabilities.
:::

:::exercise
Lan and Minh play a game by drawing one card from a box of $10$ identical cards numbered $1$ to $10$. Lan wins if the card is odd; Minh wins if the card is greater than $7$. Who has the advantage? Change Minh's rule to make the game fair.

::hint
**What you need:** a game is fair when the two winning events have equal probabilities.

**Steps:**
1. List the odd cards and the cards greater than $7$.
2. Work out the two probabilities and compare them.
3. Find a new rule for Minh with $5$ favourable cards.

::solution
There are $10$ equally likely outcomes.

Lan wins with the cards $1$, $3$, $5$, $7$, $9$ ($5$ outcomes), so the probability is $\dfrac{5}{10}=\dfrac12$.

Minh wins with the cards $8$, $9$, $10$ ($3$ outcomes), so the probability is $\dfrac{3}{10}$.

Since $\dfrac12=\dfrac{5}{10}>\dfrac{3}{10}$, Lan has the advantage.

If Minh wins when the card is "greater than $5$" (cards $6$, $7$, $8$, $9$, $10$), his probability is $\dfrac{5}{10}=\dfrac12$ and the game is fair.

**Answer.** Lan has the advantage; change Minh's rule to "a card greater than $5$".
:::

:::exercise
Class 7A has $40$ students: $24$ girls and $16$ boys. The teacher chooses one student at random to clean the board. Find the probability that the student chosen is a girl, and that it is a boy; write these probabilities as percentages. (Revise the lesson on [percentages](lesson:ratio-percentage-problems).)

::hint
**What you need:** every student is equally likely to be chosen, so there are $40$ equally likely outcomes.

**Steps:**
1. The number of favourable outcomes for "a girl is chosen" is the number of girls.
2. Simplify the fraction.
3. Change the fraction to a percentage by writing it over $100$.

::solution
There are $40$ equally likely outcomes.

The probability of choosing a girl is $\dfrac{24}{40}=\dfrac35=\dfrac{60}{100}=60\%$.

The probability of choosing a boy is $\dfrac{16}{40}=\dfrac25=\dfrac{40}{100}=40\%$.

Check: $60\%+40\%=100\%$, because the student chosen is certainly a girl or a boy.

**Answer.** Girl: $\dfrac35=60\%$; boy: $\dfrac25=40\%$.
:::

:::exercise
A spinner is divided into $10$ equal sections of four kinds: First prize, Second prize, Third prize and "No prize". It must be designed so that the probability of First prize is $\dfrac{1}{10}$, of Second prize is $\dfrac15$ and of Third prize is $\dfrac{3}{10}$.

a) How many sections of each kind are needed?

b) What is the probability of winning no prize?

::hint
**What you need:** probability $=\dfrac{\text{number of sections}}{10}$, so number of sections $=$ probability $\cdot10$.

**Steps:**
1. Write $\dfrac15$ over $10$.
2. Work out the number of sections for First, Second and Third prize.
3. The number of "No prize" sections is what is left of the $10$.

::solution
a) A probability of $\dfrac{1}{10}$ needs $1$ section. A probability of $\dfrac15=\dfrac{2}{10}$ needs $2$ sections. A probability of $\dfrac{3}{10}$ needs $3$ sections. The number of "No prize" sections is $10-1-2-3=4$.

b) The probability of winning no prize is $\dfrac{4}{10}=\dfrac25$.

Check: $\dfrac{1}{10}+\dfrac{2}{10}+\dfrac{3}{10}+\dfrac{4}{10}=1$.

**Answer.** a) First prize $1$ section, Second prize $2$, Third prize $3$, No prize $4$. b) $\dfrac25$.
:::

:::exercise Challenge
A box has $3$ red cards and some blue cards, all identical. One card is drawn at random and the probability of drawing a blue card is $\dfrac25$. How many blue cards are in the box?

::hint
**What you need:** drawing a blue card or a red card is a certain event, so the two probabilities add up to $1$.

**Steps:**
1. Find the probability of drawing a red card: $1-\dfrac25$.
2. The $3$ red cards make up that fraction of all the cards; use it to find the total number of cards.
3. Subtract the number of red cards from the total.

::solution
Every card drawn is certainly red or blue, so the probability of drawing a red card is $1-\dfrac25=\dfrac35$.

So the $3$ red cards make up $\dfrac35$ of all the cards. Each $\dfrac15$ of the cards is $3\div3=1$ card, so the total number of cards is $5\cdot1=5$.

The number of blue cards is $5-3=2$. Check: $\dfrac25$ is exactly the probability of drawing a blue card.

So the box has $2$ blue cards.

**Answer.** $2$ blue cards.
:::

## Mini test

:::quiz
::mc NB
A fair dice is rolled. Which of the following events is impossible?
A. The number of dots is $1$.
B. The number of dots is even.
C. The number of dots is less than $7$.
D. The number of dots is $7$.
::key D
A dice shows only $1$ to $6$ dots, so $7$ dots never happens. A and B are random events and C is a certain event.

::mc TH
One card is drawn from a box of $10$ cards numbered $1$ to $10$. The probability of drawing a multiple of $5$ is
A. $\dfrac15$.
B. $2$.
C. $\dfrac12$.
D. $\dfrac{1}{10}$.
::key A
The favourable cards are $5$ and $10$, so the probability is $\dfrac{2}{10}=\dfrac15$. B is the number of favourable outcomes, C is the probability of an even card, and D counts only the card $5$.

::mc TH
A spinner has $12$ equal sections: $5$ blue, $4$ yellow, $3$ red. Which event is the most likely?
A. The arrow stops on red.
B. The arrow stops on yellow or red.
C. The arrow stops on blue.
D. The arrow stops on yellow.
::key B
Event D has $4+3=7$ favourable sections, more than the $5$ blue ones. The probabilities are $\dfrac{3}{12}$, $\dfrac{4}{12}$, $\dfrac{5}{12}$ and $\dfrac{7}{12}$ respectively.

::mc NB
Which statement about the probability $P(A)$ of an event $A$ is correct?
A. $P(A)$ can equal $2$.
B. A certain event has probability $0$.
C. $0\le P(A)\le1$.
D. An impossible event has probability $1$.
::key C
Probability always lies between $0$ and $1$. A certain event has probability $1$ and an impossible event has probability $0$, so C and D are wrong; A is wrong because $P(A)$ never exceeds $1$.

::tf NB TH TH TH
A bag has $20$ identical balls: $8$ red, $7$ blue, $5$ yellow. One ball is taken at random. Decide whether each statement is true or false.
a) There are $20$ equally likely outcomes.
b) The probability of taking a red ball is $\dfrac13$ because there are $3$ colours.
c) Taking a blue ball is more likely than taking a yellow ball.
d) "Taking a red, blue or yellow ball" is a random event.
::key T F T F
a) True: each ball is one outcome. b) False: the probability is $\dfrac{8}{20}=\dfrac25$; the colours are not equally likely. c) True: $7>5$. d) False: the bag has only those three colours, so the event always happens and is certain.

::sa TH
A box has $25$ cards numbered $1$ to $25$. How many favourable outcomes are there for the event "the card drawn is a multiple of $5$"?
::key 5
The favourable cards are $5$, $10$, $15$, $20$, $25$, which is $5$ outcomes.

::sa TH
A bag has $20$ balls, of which $5$ are red and the rest are blue. One ball is taken at random. What is the probability of taking a red ball, written as a decimal?
::key 0.25
$\dfrac{5}{20}=\dfrac14=0.25$.
:::
