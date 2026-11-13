---
title: Computing probabilities in practice
description: A strategy for classical probability problems, using counting rules, combinations, sums of dice and the complement for "at least one".
minutes: 28
---

:::goals
- Follow a four-step strategy for classical probability problems.
- Use combinations to count outcomes when objects are chosen without order.
- Use the complement for "at least one" events.
- Work with real situations: boxes of balls, committees, dice, quality control, lotteries and decks of cards.
:::

The school maths club has $6$ boys and $4$ girls. The teacher picks $3$ members at random for a competition. How likely is it that all three are girls? How likely is it that at least one is a girl?

There are $120$ ways to choose $3$ members. Writing them all out would take ages, and it is easy to miss one. Luckily we do not need the list: we only need to **count** correctly, using combinations, and then divide as the classical definition of probability says. This lesson is practice in counting like that until it feels steady.

## A strategy that works

### Explore: list a small case

Before counting big numbers, we try a box so small that we can write everything down. A box holds $3$ red balls $R_1, R_2, R_3$ and $2$ blue balls $B_1, B_2$. We take $2$ balls at the same time. All the possible draws are:

$$R_1R_2,\ R_1R_3,\ R_2R_3,\ R_1B_1,\ R_1B_2,\ R_2B_1,\ R_2B_2,\ R_3B_1,\ R_3B_2,\ B_1B_2.$$

Count them and you find $10$ outcomes, and $3$ of them have two red balls. So the probability of drawing two red balls is $\dfrac{3}{10}$.

Now let us count without looking at the list. Taking $2$ balls **without order** from $5$ can be done in $\binom{5}{2}=10$ ways, and taking $2$ of the $3$ red balls in $\binom{3}{2}=3$ ways. Both numbers match the list exactly. That is what lets us trust combinations: with a bigger box, where listing is hopeless, they still count correctly.

:::definition Classical probability
If the outcomes of an experiment are equally likely, the probability of an event $A$ is
$$P(A)=\frac{n(A)}{n(\Omega)},$$
where $n(\Omega)$ is the number of possible outcomes and $n(A)$ is the number of outcomes favourable to $A$ (see [events and classical probability](lesson:events-classical-probability)). For the complementary event $\overline{A}$ (the complement of $A$): $P(A)=1-P(\overline{A})$.
:::

Why does the complement rule hold? Because each outcome belongs to exactly one of $A$ and $\overline{A}$, none left out and none counted twice, so $n(A)+n(\overline{A})=n(\Omega)$. Divide both sides by $n(\Omega)$ and the rule appears.

### Four steps

Classical probability problems look very different from one another, but most of them go through the same four steps. Once you have these steps, an unfamiliar question is much less confusing.

1. **Identify the experiment** and decide whether order matters. Taking objects "at the same time" means order does not matter, so use combinations.
2. **Count $n(\Omega)$** with the counting rules, permutations, arrangements or combinations.
3. **Count $n(A)$**: use the multiplication rule or split into cases. When you see "at least one", consider the complement.
4. **Divide and simplify**, then check that $0\le P(A)\le 1$.

## Balls in a box

We go back to the box of balls, this time a slightly bigger one, big enough to see combinations doing the work of the list.

:::example Two balls drawn together
A box holds $5$ red balls and $3$ blue balls. Two balls are drawn at random at the same time. Find the probability that a) both balls are red, b) the two balls have different colours, c) at least one ball is red.

**Solution.** The two balls are drawn together, so order does not matter: $n(\Omega)=\binom{8}{2}=28$.

a) Choose $2$ of the $5$ red balls:
$$P=\frac{\binom{5}{2}}{28}=\frac{10}{28}=\frac{5}{14}.$$

b) Choose $1$ red ball and then $1$ blue ball (multiplication rule):
$$P=\frac{5\cdot3}{28}=\frac{15}{28}.$$

c) The complement is "both balls are blue", with $\binom{3}{2}=3$ outcomes:
$$P=1-\frac{3}{28}=\frac{25}{28}.$$

So the probabilities are $\dfrac{5}{14}$, $\dfrac{15}{28}$ and $\dfrac{25}{28}$.
:::

## Choosing a committee

We now have all the tools to answer the question about the maths club from the start. The counting is just like the box of balls: the boys play the part of the red balls and the girls the blue ones.

:::example The maths club
The club has $6$ boys and $4$ girls. Three members are chosen at random. Find the probability that a) all three are girls, b) exactly $2$ are boys, c) at least one is a girl.

**Solution.** Choose $3$ of the $10$ members: $n(\Omega)=\binom{10}{3}=120$.

$$\begin{aligned} \text{a) }& P=\frac{\binom{4}{3}}{120}=\frac{4}{120}=\frac{1}{30};\\ \text{b) }& P=\frac{\binom{6}{2}\cdot\binom{4}{1}}{120}=\frac{15\cdot4}{120}=\frac12. \end{aligned}$$

c) The complement is "all three are boys", with $\binom{6}{3}=20$ outcomes, so $P=1-\dfrac{20}{120}=\dfrac56$.

So the probability that all three are girls is $\dfrac{1}{30}$, that exactly $2$ are boys is $\dfrac12$, and that at least one is a girl is $\dfrac56$.

**Check.** Count part c) directly: $1$ girl and $2$ boys gives $4\cdot15=60$, $2$ girls and $1$ boy gives $6\cdot6=36$, $3$ girls gives $4$; the total is $100=120-20$.
:::

## Rolling dice

Dice are a little different. Even when rolled together, the two dice are still two separate dice (the first die and the second die), so each outcome is an **ordered pair**. Many students slip up here, so let us look at it carefully.

:::example The sum of two dice
Two fair dice are rolled. Find the probability that the sum is $7$, and the probability that the sum is $11$.

**Solution.** Each die has $6$ faces, so by the multiplication rule $n(\Omega)=6\cdot6=36$. We list the favourable pairs:

$$\begin{aligned} \text{sum }7:&\quad (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)\ \Rightarrow\ 6\ \text{outcomes};\\ \text{sum }11:&\quad (5, 6), (6, 5)\ \Rightarrow\ 2\ \text{outcomes}. \end{aligned}$$

So $P(\text{sum }7)=\dfrac{6}{36}=\dfrac16$ and $P(\text{sum }11)=\dfrac{2}{36}=\dfrac{1}{18}$.

**Check.** $(5, 6)$ and $(6, 5)$ are two different outcomes. Merging them would also make $n(\Omega)$ wrong.
:::

## Quality control

In a factory, nobody tests every single item. A few are taken out and checked. The natural question is: with only a few checked, how likely are we to catch a faulty one? Here it is much easier to count "no faulty item at all", so we use the complement.

:::example Faulty items
A box holds $20$ items, $3$ of which are faulty. An inspector picks $4$ items at random. Find the probability that none is faulty, and the probability that at least one is faulty.

**Solution.** $n(\Omega)=\binom{20}{4}=4845$. "None faulty" means all $4$ items come from the $17$ good ones:

$$P(\text{none faulty})=\frac{\binom{17}{4}}{\binom{20}{4}}=\frac{2380}{4845}=\frac{28}{57},\qquad P(\text{at least one faulty})=1-\frac{28}{57}=\frac{29}{57}\approx 0.51.$$

So the inspector finds at least one faulty item with probability about $0.51$, only just over a half.
:::

## Lotteries and cards

The last two examples have thousands, even millions, of outcomes. Nobody could list them, yet combinations count them in a single line. The answers also show why winning a lottery is so rare.

:::example A lottery
In a lottery, a player chooses $6$ of the numbers $1$ to $45$, and a machine draws $6$ numbers. Find the probability that a) the ticket matches all six numbers, b) the ticket matches exactly five numbers.

**Solution.** $n(\Omega)=\binom{45}{6}=8\,145\,060$.

a) Only one set of $6$ numbers is favourable, so $P=\dfrac{1}{8\,145\,060}$.

b) Choose $5$ of the $6$ winning numbers and $1$ of the $39$ other numbers:
$$n(A)=\binom{6}{5}\cdot39=234,\qquad P=\frac{234}{8\,145\,060}=\frac{39}{1\,357\,510}.$$

So the probability of matching all six is $\dfrac{1}{8\,145\,060}$ and of matching exactly five is $\dfrac{39}{1\,357\,510}$; both are tiny.
:::

:::example Two aces
Two cards are drawn at random from a $52$-card deck. Find the probability that both are aces.

**Solution.** The deck has $4$ aces. Choose $2$ of the $4$ aces and divide by the number of ways to choose $2$ of the $52$ cards:

$$P=\frac{\binom{4}{2}}{\binom{52}{2}}=\frac{6}{1326}=\frac{1}{221}.$$

So the probability of drawing two aces is $\dfrac{1}{221}$.
:::

:::warning Common mistakes
- **Counting $n(\Omega)$ and $n(A)$ in two different ways.** Wrong: in the first example, two red balls give $P=\dfrac{\binom{5}{2}}{P(8,2)}=\dfrac{10}{56}$. Why it is wrong: the denominator counts order and the numerator does not. Right: $\dfrac{\binom{5}{2}}{\binom{8}{2}}=\dfrac{5}{14}$ (or $\dfrac{P(5,2)}{P(8,2)}=\dfrac{20}{56}$, the same result).
- **Treating the outcomes of two dice as unordered.** Wrong: there are $21$ ways for two dice to land, so $P(\text{sum }11)=\dfrac{1}{21}$. Why it is wrong: these $21$ outcomes are not equally likely. Right: use the $36$ ordered pairs, $P=\dfrac{1}{18}$.
- **Counting "at least one" with a single product.** Wrong: the number of ways to choose $3$ members with at least one girl is $4\cdot\binom{9}{2}=144$. Why it is wrong: groups with two or three girls are counted several times, and $144>120$. Right: $120-\binom{6}{3}=100$.
:::

## Key terms

:::terms
- favourable outcomes | kết quả thuận lợi
- at least one | ít nhất một
- complementary event | biến cố đối
- random selection | chọn ngẫu nhiên
- quality control | kiểm tra chất lượng
- lottery | xổ số
- faulty (defective) | lỗi (phế phẩm)
- box (bag) of balls | hộp (túi) đựng bóng
:::

## Summary

- $P(A)=\dfrac{n(A)}{n(\Omega)}$ when the outcomes are equally likely.
- Four steps: experiment → $n(\Omega)$ → $n(A)$ → divide, simplify, check $0\le P\le 1$.
- Drawn "at the same time": combinations $\binom{n}{k}$. Two dice: $36$ ordered pairs.
- Several groups: multiplication rule, for example $\binom{6}{2}\cdot\binom{4}{1}$.
- "At least one": $P(A)=1-P(\overline{A})$, where $\overline{A}$ is "none at all".

Back to the maths club: the chance that all three are girls is only $\dfrac{1}{30}$, while the chance of at least one girl is as high as $\dfrac56$. We found both without listing the $120$ choices, just by counting carefully. The thing to remember most: count the top and the bottom of the fraction in the same way.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, working through the four steps: $n(\Omega)$ first, then $n(A)$. If you get stuck, open the hint, and only look at the solution at the end to compare.

:::exercise
A box holds $6$ white balls and $4$ black balls. Two balls are drawn at random at the same time. Find the probability that both are white.

::hint
**What you need:** taking $k$ of $n$ objects at the same time can be done in $\binom{n}{k}$ ways.

**Steps:**
1. Compute $n(\Omega)=\binom{10}{2}$.
2. Count the ways to take $2$ of the $6$ white balls.

::solution
$P=\dfrac{\binom{6}{2}}{\binom{10}{2}}=\dfrac{15}{45}=\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise
With the box from the previous exercise, find the probability that the two balls have different colours.

::hint
**What you need:** the multiplication rule: choose $1$ white and $1$ black.

**Steps:**
1. Count the ways to choose $1$ of $6$ white balls and $1$ of $4$ black balls.
2. Divide by $\binom{10}{2}=45$.

::solution
$n(A)=6\cdot4=24$, so $P=\dfrac{24}{45}=\dfrac{8}{15}$.

**Answer.** $\dfrac{8}{15}$.
:::

:::exercise
A class has $12$ boys and $8$ girls. Three students are chosen at random. Find the probability that a) all three are boys, b) at least one is a girl.

::hint
**What you need:** "at least one girl" is the complement of "all three are boys".

**Steps:**
1. Compute $\binom{20}{3}$ and $\binom{12}{3}$.
2. Use $P(A)=1-P(\overline{A})$ for part b).

::solution
a) $P=\dfrac{\binom{12}{3}}{\binom{20}{3}}=\dfrac{220}{1140}=\dfrac{11}{57}$. b) $P=1-\dfrac{11}{57}=\dfrac{46}{57}$.

**Answer.** a) $\dfrac{11}{57}$; b) $\dfrac{46}{57}$.
:::

:::exercise
A shop receives a carton of $15$ light bulbs, $2$ of which are broken. An assistant picks $3$ bulbs at random to test. Find the probability that all $3$ bulbs work.

::hint
**What you need:** all $3$ working means choosing $3$ of the $13$ good bulbs.

**Steps:**
1. Compute $\binom{15}{3}$ and $\binom{13}{3}$.
2. Divide and simplify.

::solution
$P=\dfrac{\binom{13}{3}}{\binom{15}{3}}=\dfrac{286}{455}=\dfrac{22}{35}$.

**Answer.** $\dfrac{22}{35}$.
:::

:::exercise
Two fair dice are rolled. Find the probability that the product of the two numbers is even.

::hint
**What you need:** a product of two numbers is odd exactly when both numbers are odd.

**Steps:**
1. Count the pairs in which both numbers are odd.
2. Use the complement.

::solution
There are $3\cdot3=9$ pairs of two odd numbers among the $36$ pairs. $P(\text{even})=1-\dfrac{9}{36}=\dfrac34$.

**Answer.** $\dfrac34$.
:::

:::exercise
A box holds $4$ red balls, $3$ yellow balls and $2$ green balls. Three balls are drawn at random at the same time. Is each claim true or false?

a) The number of possible outcomes is $84$.

b) The probability of drawing $3$ red balls is $\dfrac{1}{21}$.

c) The probability that the $3$ balls have all three colours is $\dfrac13$.

d) The probability of at least one green ball is $\dfrac{7}{12}$.

::hint
**What you need:** $n(\Omega)=\binom{9}{3}$; all three colours: one ball of each colour; "at least one green" is the complement of "no green ball".

**Steps:**
1. Compute $\binom{9}{3}$ and $\binom{4}{3}$.
2. Count $4\cdot3\cdot2$ for part c).
3. Count $\binom{7}{3}$ for part d).

::solution
a) **True**: $\binom{9}{3}=84$.

b) **True**: $\dfrac{\binom{4}{3}}{84}=\dfrac{4}{84}=\dfrac{1}{21}$.

c) **False**: $\dfrac{4\cdot3\cdot2}{84}=\dfrac{24}{84}=\dfrac27$.

d) **True**: there are $\binom{7}{3}=35$ draws with no green ball, so $P=1-\dfrac{35}{84}=\dfrac{49}{84}=\dfrac{7}{12}$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
Three cards are drawn at random from a $52$-card deck. Find the probability that all three are hearts (rounded to three decimal places).

::hint
**What you need:** the deck has $13$ hearts.

**Steps:**
1. Compute $\binom{13}{3}$ and $\binom{52}{3}$.
2. Divide and round.

::solution
$P=\dfrac{\binom{13}{3}}{\binom{52}{3}}=\dfrac{286}{22\,100}=\dfrac{11}{850}\approx 0.013$.

**Answer.** $0.013$.
:::

:::exercise Challenge
A group has $5$ boys and $4$ girls. Four people are chosen at random. Find the probability that exactly $2$ boys and $2$ girls are chosen.

::hint
**What you need:** the multiplication rule for two groups: $\binom{5}{2}\cdot\binom{4}{2}$.

**Steps:**
1. Compute $n(\Omega)=\binom{9}{4}$.
2. Compute $n(A)$ and divide.

::solution
$n(\Omega)=\binom{9}{4}=126$, $n(A)=\binom{5}{2}\cdot\binom{4}{2}=10\cdot6=60$, so $P=\dfrac{60}{126}=\dfrac{10}{21}$.

**Answer.** $\dfrac{10}{21}$.
:::

:::exercise Challenge
Three fair dice are rolled. Find the probability that a) the sum is $9$, b) at least one die shows a six.

::hint
**What you need:** $n(\Omega)=6^3=216$ ordered triples.

**Steps:**
1. Part a): list the unordered triples with sum $9$, then count the orderings of each.
2. Part b): the complement is "no die shows a six", with $5^3$ outcomes.

::solution
a) The triples with sum $9$: $\{1, 2, 6\}$, $\{1, 3, 5\}$, $\{2, 3, 4\}$ ($6$ orderings each), $\{1, 4, 4\}$, $\{2, 2, 5\}$ ($3$ orderings each), $\{3, 3, 3\}$ ($1$ ordering): in total $18+6+1=25$, so $P=\dfrac{25}{216}$.

b) $P=1-\dfrac{125}{216}=\dfrac{91}{216}$.

**Answer.** a) $\dfrac{25}{216}$; b) $\dfrac{91}{216}$.
:::

:::exercise Review
Five friends, including An and Binh, sit at random on a row of $5$ seats. Use [permutations](lesson:permutations-combinations) to find the probability that An and Binh sit next to each other.

::hint
**What you need:** $n$ people can sit in $n$ seats in $n!$ ways; treat An and Binh as one "block".

**Steps:**
1. Compute $n(\Omega)=5!$.
2. Arrange the An–Binh block with the other $3$ friends: $4!$ ways, times $2$ because An and Binh can swap.

::solution
$n(\Omega)=5!=120$, $n(A)=2\cdot4!=48$, so $P=\dfrac{48}{120}=\dfrac25$.

**Answer.** $\dfrac25$.
:::

## Mini test

:::quiz
::mc
A fair die is rolled. The probability that the number shown is prime is
A. $\dfrac23$.
B. $\dfrac13$.
C. $\dfrac12$.
D. $\dfrac56$.
::key C
The primes among $1, \dots, 6$ are $2, 3, 5$, so $P=\dfrac36=\dfrac12$. Counting $1$ as a prime by mistake gives $\dfrac46=\dfrac23$.

::mc
A box holds $4$ red balls and $6$ blue balls. Two balls are drawn at random at the same time. The probability that both are blue is
A. $\dfrac35$.
B. $\dfrac13$.
C. $\dfrac{9}{25}$.
D. $\dfrac23$.
::key B
$P=\dfrac{\binom{6}{2}}{\binom{10}{2}}=\dfrac{15}{45}=\dfrac13$. Option A only counts one ball; option C treats the draw as if the first ball were put back.

::mc
Two fair dice are rolled. The probability that the sum is $4$ is
A. $\dfrac{1}{12}$.
B. $\dfrac{1}{18}$.
C. $\dfrac{2}{21}$.
D. $\dfrac19$.
::key A
$n(\Omega)=36$ ordered pairs; the sum $4$ comes from $(1, 3)$, $(2, 2)$, $(3, 1)$, so $P=\dfrac{3}{36}=\dfrac{1}{12}$. Option B merges $(1, 3)$ and $(3, 1)$; option C uses $21$ outcomes that are not equally likely.

::mc
A group has $5$ boys and $3$ girls. Three people are chosen at random. The probability that at least one girl is chosen is
A. $\dfrac{5}{28}$.
B. $\dfrac38$.
C. $\dfrac{15}{28}$.
D. $\dfrac{23}{28}$.
::key D
The complementary event is "all three are boys", with $\binom{5}{3}=10$ of the $\binom{8}{3}=56$ outcomes. So $P=1-\dfrac{10}{56}=\dfrac{23}{28}$. Option A is the probability of the complementary event.

::tf
A box holds $5$ cards numbered $1, 2, 3, 4, 5$. Two cards are drawn at random at the same time.
a) The sample space has $10$ outcomes.
b) The probability that the sum of the two numbers is even is $\dfrac25$.
c) The probability that the product of the two numbers is odd is $\dfrac35$.
d) The probability that at least one card shows a number greater than $3$ is $\dfrac{3}{10}$.
::key T T F F
a) True: $\binom{5}{2}=10$. b) True: both numbers odd ($\binom{3}{2}=3$ ways) or both even ($1$ way), $P=\dfrac{4}{10}$. c) False: both numbers must be odd, $P=\dfrac{3}{10}$. d) False: the complementary event "both cards are $\le 3$" has $3$ outcomes, so $P=1-\dfrac{3}{10}=\dfrac{7}{10}$.

::sa
Two fair dice are rolled. Find the probability that the sum is at least $10$ (rounded to two decimal places).
::key 0.17
The pairs with sum $10$, $11$ or $12$ are $(4, 6)$, $(5, 5)$, $(6, 4)$, $(5, 6)$, $(6, 5)$, $(6, 6)$: $6$ of the $36$ pairs. $P=\dfrac16\approx0.17$.

::sa
A batch of $10$ items contains $3$ faulty ones. Two items are chosen at random. Find the probability that at least one is faulty (rounded to two decimal places).
::key 0.53
The complementary event is "both items are good": $\binom{7}{2}=21$ of the $\binom{10}{2}=45$ outcomes. $P=1-\dfrac{21}{45}=\dfrac{8}{15}\approx0.53$.
:::
