---
title: Getting to know the probability of an event
description: Find the probability of an event when the outcomes are equally likely, as the ratio of favourable outcomes to possible outcomes.
minutes: 20
---

:::goals
- Identify the possible outcomes and the favourable outcomes of an event in an experiment.
- Find the probability of an event with the formula $P=\dfrac{k}{n}$ when the outcomes are equally likely.
- Know that a probability always lies between $0$ and $1$: an impossible event has probability $0$ and a certain event has probability $1$.
- Solve simple real-life problems about probability.
:::

A box holds $12$ marbles of the same size: $5$ red, $4$ blue and $3$ yellow. Minh closes his eyes and takes out one marble. Is he likely or unlikely to get a red marble?

We could say "quite likely" or "not very likely", but that is not precise. This lesson helps you measure that chance with a number. That number is called the probability.

## Let's explore

We start with the simplest experiment: tossing a fair coin. There are two possible outcomes: heads (H) or tails (T). The coin is fair, so these two outcomes are equally likely.

Consider the event $A$: "The coin lands heads". Only $1$ outcome makes $A$ happen, out of $2$ outcomes in total. We say the chance of $A$ is $1$ out of $2$, that is $\dfrac12$.

Now roll a fair die. There are $6$ possible outcomes: $1, 2, 3, 4, 5, 6$ dots, and they are equally likely. Consider the event $B$: "The score is even". The outcomes that make $B$ happen are $2, 4, 6$: there are $3$ of them.

We record these cases in a table:

| Experiment | Number of possible outcomes | Event | Number of favourable outcomes | Chance |
|---|---|---|---|---|
| Toss a coin | $2$ | Heads | $1$ | $\dfrac12$ |
| Roll a die | $6$ | Even score | $3$ | $\dfrac36=\dfrac12$ |
| Roll a die | $6$ | A score of $6$ | $1$ | $\dfrac16$ |

In all three rows, the chance equals the number of favourable outcomes divided by the number of possible outcomes. The outcomes are equally likely, so each one takes exactly the same share of the total. With $k$ favourable outcomes, the event takes $k$ shares out of $n$.

:::definition The probability of an event
Suppose an experiment has $n$ possible outcomes and these outcomes are equally likely. If $k$ of them are favourable to the event $A$, then the **probability of the event $A$** is
$$P(A)=\dfrac{k}{n}.$$
:::

Here an "outcome favourable to $A$" is an outcome that makes $A$ happen. Back to the opening problem: the box has $12$ marbles, $5$ of them red. Each marble is equally likely to be taken, so the probability of getting a red marble is $\dfrac{5}{12}$.

## A probability always lies between 0 and 1

The number of favourable outcomes $k$ cannot be negative and cannot be greater than the total number of outcomes $n$. So $0\le k\le n$. Dividing all three parts by $n$ (a positive number) gives $0\le\dfrac{k}{n}\le1$.

Two special cases to remember:

- If $k=0$ then $P(A)=0$: no outcome makes $A$ happen, so $A$ is an impossible event.
- If $k=n$ then $P(A)=1$: every outcome makes $A$ happen, so $A$ is a certain event.

:::theorem The value of a probability
For every event $A$, $0\le P(A)\le1$. An impossible event has probability $0$. A certain event has probability $1$.
:::

:::graph Every probability lies on the segment from 0 to 1
alt: A number line with the segment from 0 to 1 and the three points 0, 1/2 and 1 marked
x: -0.2..1.2
y: -1..1
segment: (0, 0) (1, 0)
point: (0, 0) "0" below
point: (0.5, 0) "1/2" below
point: (1, 0) "1" below
:::

The closer a probability is to $1$, the more likely the event is. The closer it is to $0$, the less likely the event is.

## Examples

We start with the marble problem from the beginning of the lesson.

:::example Marbles in a box
A box holds $12$ marbles of the same size: $5$ red, $4$ blue and $3$ yellow. One marble is taken at random. Find the probability of the event $A$: "A red marble is taken" and of the event $B$: "A blue marble is taken".

**Solution.** The marbles are the same size, so the $12$ possible outcomes are equally likely. Count the favourable outcomes of each event and form the ratio $\dfrac{k}{n}$ with $n=12$:

$$P(A)=\dfrac{5}{12},\qquad P(B)=\dfrac{4}{12}=\dfrac13.$$

For $B$ we simplify by dividing the numerator and the denominator by $4$. So the probability of a red marble is $\dfrac{5}{12}$ and the probability of a blue marble is $\dfrac13$.

**Check.** The three colours have $5+4+3=12$ marbles, which is exactly the total.
:::

With a die, you must first list the favourable outcomes correctly.

:::example Rolling a die
Roll a fair die. Find the probability of the event $C$: "The score is a prime number".

**Solution.** The experiment has $n=6$ equally likely outcomes. Among $1, 2, 3, 4, 5, 6$, the prime numbers are $2, 3, 5$ ($1$ is not a prime number). So $k=3$:

$$P(C)=\dfrac{3}{6}=\dfrac12.$$

So the probability that the score is a prime number is $\dfrac12$.
:::

With more outcomes, you need to count carefully.

:::example Drawing a card
A bag holds $20$ cards numbered from $1$ to $20$. One card is drawn at random. Find the probability of the event $D$: "The number on the card is divisible by $4$".

**Solution.** There are $n=20$ equally likely outcomes. The numbers from $1$ to $20$ that are divisible by $4$ are $4, 8, 12, 16, 20$, so $k=5$:

$$P(D)=\dfrac{5}{20}=\dfrac14.$$

So the probability of drawing a card with a number divisible by $4$ is $\dfrac14$.

**Check.** One in every $4$ consecutive numbers is divisible by $4$, so a ratio of $\dfrac14$ makes sense.
:::

Sometimes an event is described with "not", and we still count each outcome.

:::example A lucky spinner
A spinner is divided into $8$ equal parts: $3$ red, $2$ blue, $2$ yellow and $1$ white. The spinner is spun once and the arrow stops on one part. Find the probability of the event $E$: "The arrow stops on red" and of the event $G$: "The arrow does not stop on red".

**Solution.** The parts are equal, so there are $n=8$ equally likely outcomes. For $E$ there are $k=3$ red parts. For $G$, the number of parts that are not red is $2+2+1=5$:

$$P(E)=\dfrac{3}{8},\qquad P(G)=\dfrac{5}{8}.$$

So the probability of stopping on red is $\dfrac38$ and the probability of not stopping on red is $\dfrac58$.

**Check.** The two probabilities add up to $\dfrac38+\dfrac58=1$, because the arrow either stops on red or it does not.
:::

Now look at the two special cases: probability $0$ and probability $1$.

:::example An impossible event and a certain event
A box holds $4$ blue marbles and $3$ red marbles. One marble is taken at random. Find the probability of the event $H$: "A yellow marble is taken" and of the event $K$: "A blue or a red marble is taken".

**Solution.** The box has $n=4+3=7$ marbles, each equally likely to be taken. There are no yellow marbles, so $H$ has $k=0$. Every marble in the box is blue or red, so $K$ has $k=7$:

$$P(H)=\dfrac{0}{7}=0,\qquad P(K)=\dfrac{7}{7}=1.$$

So $H$ is an impossible event ($P=0$) and $K$ is a certain event ($P=1$).
:::

In the last example, you have to count the possible outcomes yourself.

:::example Two-digit numbers
A two-digit natural number is chosen at random. Find the probability of the event $L$: "The chosen number is divisible by $10$".

**Solution.** The two-digit numbers are $10, 11, \dots, 99$. There are $99-10+1=90$ of them, so $n=90$. The numbers divisible by $10$ are $10, 20, 30, 40, 50, 60, 70, 80, 90$, so $k=9$:

$$P(L)=\dfrac{9}{90}=\dfrac{1}{10}.$$

So the probability of choosing a number divisible by $10$ is $\dfrac{1}{10}$.
:::

:::warning Common mistakes
- **Writing the ratio upside down.** Wrong: $P(\text{red})=\dfrac{12}{5}$. Why it is wrong: a probability cannot be greater than $1$. Right: $\dfrac{5}{12}$, the number of favourable outcomes divided by the number of possible outcomes.
- **Miscounting the favourable outcomes.** Wrong: the prime scores on a die are $1, 2, 3, 5$, so $P=\dfrac46$. Why it is wrong: $1$ is not a prime number. Right: $2, 3, 5$, so $P=\dfrac36=\dfrac12$.
- **Treating every colour as equally likely.** Wrong: the box has $3$ colours, so each colour has probability $\dfrac13$. Why it is wrong: the colours have different numbers of marbles. Right: treat each marble as one outcome and count the marbles of that colour.
:::

## Key terms

:::terms
- experiment | phép thử
- possible outcome | kết quả có thể
- favourable outcome | kết quả thuận lợi
- event | biến cố
- certain event | biến cố chắc chắn
- impossible event | biến cố không thể
- probability | xác suất
- equally likely | khả năng như nhau
- fair die | xúc xắc cân đối
- fair coin | đồng xu cân đối
:::

## Summary

- If an experiment has $n$ equally likely outcomes and $k$ of them are favourable to the event $A$, then $P(A)=\dfrac{k}{n}$.
- Method: count $n$, count $k$, then form the ratio and simplify.
- Always $0\le P(A)\le1$. An impossible event has $P=0$; a certain event has $P=1$.
- To use the formula, the outcomes must be equally likely. When choosing marbles, treat each marble as one outcome.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Roll a fair die.

a) List the possible outcomes.

b) Let $A$ be the event "The score is odd". List the outcomes favourable to $A$ and find $P(A)$.

::hint
**What you need:** $P(A)=\dfrac{k}{n}$, where $n$ is the number of possible outcomes and $k$ is the number of favourable outcomes.

**Steps:**
1. Write the scores from $1$ to $6$.
2. Pick out the odd numbers and form the ratio.

::solution
a) There are $6$ outcomes: $1, 2, 3, 4, 5, 6$.

b) The outcomes favourable to $A$ are $1, 3, 5$, so $k=3$ and $P(A)=\dfrac36=\dfrac12$.

**Answer.** a) $6$ outcomes; b) $P(A)=\dfrac12$.
:::

:::exercise
A box holds $15$ sweets of the same size: $6$ orange, $5$ strawberry and $4$ grape. One sweet is taken at random. Find the probability of taking an orange sweet, a strawberry sweet and a grape sweet.

::hint
**What you need:** each sweet is one outcome; $n=15$.

**Steps:**
1. For each flavour, $k$ is the number of sweets of that flavour.
2. Form the ratio $\dfrac{k}{15}$ and simplify if possible.

::solution
$P(\text{orange})=\dfrac{6}{15}=\dfrac25$; $P(\text{strawberry})=\dfrac{5}{15}=\dfrac13$; $P(\text{grape})=\dfrac{4}{15}$.

**Answer.** $\dfrac25$; $\dfrac13$; $\dfrac{4}{15}$.
:::

:::exercise
Remember the last lesson (events). Roll a fair die. Is each event below certain, impossible or random? Find the probability of each event.

a) "The score is less than $7$".

b) "The score is $0$".

c) "The score is greater than $4$".

::hint
**What you need:** a certain event always happens ($P=1$), an impossible event never happens ($P=0$), and any other event is random.

**Steps:**
1. For each part, find the scores that make the event happen.
2. Count $k$ and divide by $n=6$.

::solution
a) All $6$ outcomes are less than $7$: certain, $P=\dfrac66=1$.

b) No outcome is $0$: impossible, $P=0$.

c) The outcomes $5, 6$: random, $P=\dfrac26=\dfrac13$.

**Answer.** a) Certain, $1$; b) impossible, $0$; c) random, $\dfrac13$.
:::

:::exercise
A bag holds $20$ cards numbered from $1$ to $20$. One card is drawn at random. Find the probability that the card shows:

a) a number less than $6$;

b) an even number;

c) a one-digit number.

::hint
**What you need:** $n=20$; count the numbers that meet each condition to find $k$.

**Steps:**
1. List the numbers that meet each condition.
2. Form the ratio $\dfrac{k}{20}$ and simplify.

::solution
a) The numbers $1, 2, 3, 4, 5$: $k=5$, $P=\dfrac{5}{20}=\dfrac14$.

b) The even numbers $2, 4, \dots, 20$: $k=10$, $P=\dfrac{10}{20}=\dfrac12$.

c) The numbers $1, 2, \dots, 9$: $k=9$, $P=\dfrac{9}{20}$.

**Answer.** a) $\dfrac14$; b) $\dfrac12$; c) $\dfrac{9}{20}$.
:::

:::exercise
Box $A$ has $3$ red and $7$ blue marbles. Box $B$ has $2$ red and $3$ blue marbles. One marble is taken at random from each box. From which box are you more likely to get a red marble? Why?

::hint
**What you need:** find the probability of a red marble from each box, then compare the two fractions.

**Steps:**
1. Find the total number of marbles in each box.
2. Find the two probabilities, then give them a common denominator to compare.

::solution
Box $A$ has $10$ marbles: $P_A=\dfrac{3}{10}$. Box $B$ has $5$ marbles: $P_B=\dfrac25=\dfrac{4}{10}$. Since $\dfrac{3}{10}<\dfrac{4}{10}$, $P_A<P_B$.

**Answer.** Box $B$, because $\dfrac25>\dfrac{3}{10}$.
:::

:::exercise
Find the mistake in each student's work and correct it.

a) Mai: "A box has $5$ red marbles and $1$ blue marble. There are only two colours, so the probability of taking a blue marble is $\dfrac12$."

b) Binh: "Roll a die; let $M$ be the event that the score is divisible by $2$. The favourable outcomes are $2, 4, 6$, so $P(M)=\dfrac33=1$."

::hint
**What you need:** $P=\dfrac{k}{n}$; $n$ is the total number of possible outcomes, and the outcomes must be equally likely.

**Steps:**
1. In each part, check whether $n$ has been counted correctly.
2. Work it out again.

::solution
a) Mai treats the two colours as equally likely, but there are more red marbles than blue ones. Each marble is one outcome: $n=6$, $k=1$, so $P=\dfrac16$.

b) Binh used $n=3$, but a die has $6$ possible outcomes. The right answer is $P(M)=\dfrac36=\dfrac12$.

**Answer.** a) $\dfrac16$; b) $\dfrac12$.
:::

:::exercise
Class $7$B has $40$ students, $22$ of them girls. The teacher calls one student to the board at random.

a) Find the probability that the student called is a girl.

b) Find the probability that the student called is a boy.

c) Add the two probabilities from parts a) and b). Why do you get this result?

::hint
**What you need:** what is given? What is asked? Each student is one outcome, $n=40$.

**Steps:**
1. Find the number of boys.
2. Form the two ratios and simplify, then add them.

::solution
a) $P(\text{girl})=\dfrac{22}{40}=\dfrac{11}{20}$.

b) The number of boys is $40-22=18$, so $P(\text{boy})=\dfrac{18}{40}=\dfrac{9}{20}$.

c) $\dfrac{11}{20}+\dfrac{9}{20}=1$. Every student is either a girl or a boy, so the event "a girl or a boy" is certain.

**Answer.** a) $\dfrac{11}{20}$; b) $\dfrac{9}{20}$; c) $1$.
:::

:::exercise
A box holds $30$ marbles, as recorded in the table below:

| Colour | Red | Blue | Yellow | White |
|---|---|---|---|---|
| Number of marbles | $6$ | $9$ | $5$ | $10$ |

One marble is taken at random. Find the probability of each colour, then add the four probabilities.

::hint
**What you need:** $n$ is the total number of marbles in the table; $k$ is the number of marbles of the colour in question.

**Steps:**
1. Add the numbers in the table to check that $n=30$.
2. Work out the four ratios $\dfrac{k}{30}$ and simplify.
3. Add the four probabilities.

::solution
The total number of marbles is $6+9+5+10=30$. The probabilities are $P(\text{red})=\dfrac{6}{30}=\dfrac15$, $P(\text{blue})=\dfrac{9}{30}=\dfrac{3}{10}$, $P(\text{yellow})=\dfrac{5}{30}=\dfrac16$, $P(\text{white})=\dfrac{10}{30}=\dfrac13$. The sum of the four probabilities is $\dfrac{6+9+5+10}{30}=\dfrac{30}{30}=1$.

**Answer.** $\dfrac15$; $\dfrac{3}{10}$; $\dfrac16$; $\dfrac13$; they add up to $1$.
:::

:::exercise Challenge
A box holds $5$ red and $3$ blue marbles. How many yellow marbles must be added to the box so that the probability of taking a yellow marble is $\dfrac13$?

::hint
**What you need:** if the probability of a yellow marble is $\dfrac13$, then the marbles that are not yellow make up $\dfrac23$ of the box.

**Steps:**
1. How many red and blue marbles are there now?
2. How many of $3$ equal shares do these marbles make?
3. Find the number of marbles in one share.

::solution
There are $5+3=8$ red and blue marbles. They make $2$ of $3$ equal shares, so one share is $8\div2=4$ marbles. So $4$ yellow marbles must be added.

**Check.** The box then has $12$ marbles and $P(\text{yellow})=\dfrac{4}{12}=\dfrac13$.

**Answer.** $4$ yellow marbles.
:::

## Mini test

:::quiz
::mc
Roll a fair die. The probability that the score is divisible by $3$ is
A. $\dfrac13$.
B. $\dfrac16$.
C. $\dfrac12$.
D. $2$.
::key A
The scores $3, 6$ are favourable, so $P=\dfrac26=\dfrac13$. Option B forgets the $6$, and option D only counts the favourable outcomes without dividing by $6$.

::mc
A box holds $8$ red and $12$ blue marbles. One marble is taken at random. The probability of a red marble is
A. $\dfrac23$.
B. $\dfrac25$.
C. $\dfrac35$.
D. $\dfrac12$.
::key B
$n=8+12=20$, so $P=\dfrac{8}{20}=\dfrac25$. Option A works out $\dfrac{8}{12}$ (dividing by the number of blue marbles), C is the probability of a blue marble, and D treats the two colours as equally likely.

::mc
Which of these values cannot be the probability of an event?
A. $0$.
B. $\dfrac34$.
C. $\dfrac54$.
D. $1$.
::key C
A probability always lies between $0$ and $1$, but $\dfrac54>1$. Such a value appears when the ratio is written upside down as $\dfrac{n}{k}$.

::mc
One card is drawn at random from $30$ cards numbered from $1$ to $30$. The probability that the card shows a number divisible by $5$ is
A. $\dfrac16$.
B. $\dfrac13$.
C. $\dfrac{1}{30}$.
D. $\dfrac15$.
::key D
The numbers $5, 10, 15, 20, 25, 30$ are favourable: $k=6$, so $P=\dfrac{6}{30}=\dfrac15$. Option C counts only one outcome; D is the probability of a number divisible by $3$ ($k=10$).

::tf
A box holds $3$ white, $5$ black and $2$ yellow marbles. One marble is taken at random.
a) The probability of a black marble is $\dfrac12$.
b) The probability of a white marble is $\dfrac37$.
c) "A green marble is taken" is an impossible event.
d) The probability of a yellow marble is greater than the probability of a white marble.
::key T F T F
a) True: $\dfrac{5}{10}=\dfrac12$. b) False: there are $10$ marbles in total, so $P=\dfrac{3}{10}$. c) True: the box has no green marbles. d) False: $\dfrac{2}{10}<\dfrac{3}{10}$.

::sa
A box holds $25$ marbles, $10$ of them red. One marble is taken at random. What is the probability of a red marble? (Write it as a decimal.)
::key 0.4
$P=\dfrac{10}{25}=\dfrac25=0.4$.

::sa
A class has $36$ students. The probability of choosing a girl at random is $\dfrac59$. How many girls are in the class?
::key 20
The number of girls is $k=36\times\dfrac59=20$. Check: $\dfrac{20}{36}=\dfrac59$.
:::
