---
title: Random experiments and sample spaces
description: Recognise random experiments, describe the sample space by listing, and use tree diagrams or tables for two-step experiments.
minutes: 20
---

:::goals
- Recognise a random experiment and describe its sample space.
- Use a tree diagram or a table to list the sample space of a two-step experiment.
- Tell apart choosing with replacement, without replacement and at the same time.
:::

An and Binh play a game with two coins: if the two coins land the same way up, An wins; if they land differently, Binh wins. Binh complains: "There are only three possibilities: two heads, two tails, or one head and one tail. An has two ways to win and I have only one. It's not fair!" Is Binh right? To answer, we must list *all* the possible outcomes, *correctly*: a job that looks simple but is very easy to get wrong.

## Random experiments and sample spaces

Rolling a dice, drawing lots, picking a student to come to the board: before we do it, we know which outcomes are *possible*, but not *which* one will happen.

:::definition Random experiment and sample space
- A **random experiment** (or simply an experiment) is an activity whose outcome cannot be known in advance.
- The set of all possible outcomes of an experiment is called its **sample space**, written $\Omega$.
:::

**Going deeper.** Drawing a card from a box in which every card shows the number $5$ is not a random experiment: the outcome is known in advance. Also, an "outcome" depends on what we record: rolling a dice and recording the score gives $\Omega=\{1,2,3,4,5,6\}$, while recording only "even" or "odd" gives $\Omega=\{\text{even}, \text{odd}\}$. So before listing, ask: "What information makes up one outcome?"

:::example Describing the sample space
Describe the sample space of each experiment and state how many elements it has.

a) Roll a dice and record the score.

b) Take a ball at random from a bag containing three balls: blue (B), red (R) and yellow (Y).

c) Toss a coin and record which side lands face up (H for heads, T for tails).

**Solution.** a) We have $\Omega=\{1, 2, 3, 4, 5, 6\}$, with $6$ elements.

b) We have $\Omega=\{B, R, Y\}$, with $3$ elements.

c) We have $\Omega=\{H, T\}$, with $2$ elements.
:::

## Tree diagrams for two-step experiments

When an experiment has two steps (tossing two coins, drawing two lots), each outcome is an **ordered pair**: the result of step 1, then the result of step 2. To miss nothing, we draw a **tree diagram**: from the root, draw one branch for each result of step 1; from the end of each of these, draw one branch for each result of step 2. Each path from the root to a tip gives one outcome.

:::diagram Tree diagram for tossing two coins
alt: Tree diagram: the root splits into T and H (first coin), and each branch splits again into T and H (second coin), giving four outcomes (T, T), (T, H), (H, T), (H, H)
point R 0,1.5 ""
point S1 2.5,3 above "T"
point N1 2.5,0 below "H"
point SS 5,3.75 right "T"
point SN 5,2.25 right "H"
point NS 5,0.75 right "T"
point NN 5,-0.75 right "H"
segment R S1
segment R N1
segment S1 SS
segment S1 SN
segment N1 NS
segment N1 NN
label 7.5,3.75 "(T, T)"
label 7.5,2.25 "(T, H)"
label 7.5,0.75 "(H, T)"
label 7.5,-0.75 "(H, H)"
label 2.5,5 "Coin 1"
label 5,5 "Coin 2"
:::

:::example Tossing two coins
Toss two coins (a 1 000-dong coin and a 2 000-dong coin). Describe the sample space, then answer Binh's question from the start of the lesson.

**Solution.** Write $(T, H)$ for the outcome "the first coin shows tails and the second shows heads". From the tree diagram,

$$\Omega=\{(T, T),\ (T, H),\ (H, T),\ (H, H)\}.$$

The sample space has $4$ elements. The coins landing the same way corresponds to $2$ outcomes, $(T, T)$ and $(H, H)$; landing differently also corresponds to $2$ outcomes, $(T, H)$ and $(H, T)$.

So Binh is wrong: "one head and one tail" consists of two different outcomes, so each player has $2$ of the $4$ outcomes.

**Remark.** Even if the two coins look identical, they are still two separate objects, so $(T, H)$ and $(H, T)$ are still two different outcomes.
:::

:::example With and without replacement
A box contains three marbles: red (R), blue (B) and yellow (Y). Two marbles are taken out at random, one after the other.

a) Describe the sample space if the first marble is not put back.

b) How many elements does the sample space have if the first marble is put back before the second is taken?

**Solution.**

*Understand.* Each outcome is a pair (colour of the first marble, colour of the second); in b) the two marbles can be the same colour.

*Plan.* Tree diagram: step 1 has $3$ branches; step 2 has $2$ branches (without replacement) or $3$ branches (with replacement).

*Solve.* a) Each colour in the first draw is followed by the two remaining colours in the second, so

$$\Omega=\{(R, B),\ (R, Y),\ (B, R),\ (B, Y),\ (Y, R),\ (Y, B)\},$$

with $3\cdot2=6$ elements.

b) Each colour in the first draw is followed by all three colours in the second, so the sample space consists of the $6$ outcomes in a) together with $(R, R)$, $(B, B)$, $(Y, Y)$, that is, $3\cdot3=9$ elements.

*Look back.* Is there a pattern? The number of elements is (number of branches at step 1) $\times$ (number of branches at step 2). What if both marbles are taken *at the same time*? Then there is no "first marble": $(R, B)$ and $(B, R)$ are the same outcome $\{R, B\}$, so there are only $3$ outcomes.
:::

## Using a table for two-step experiments

When each step has many results, a tree diagram becomes crowded; instead we use a **table**: rows for the results of step 1, columns for the results of step 2, and each cell is one outcome.

:::example Rolling two dice
Roll two dice (one green, one red). Describe the sample space and find how many outcomes have a total score of $7$.

**Solution.** Write $(i, j)$ for the outcome "the green dice shows $i$ and the red dice shows $j$". We have the table:

| Green \ Red | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $1$ | $(1, 1)$ | $(1, 2)$ | $(1, 3)$ | $(1, 4)$ | $(1, 5)$ | $(1, 6)$ |
| $2$ | $(2, 1)$ | $(2, 2)$ | $(2, 3)$ | $(2, 4)$ | $(2, 5)$ | $(2, 6)$ |
| $3$ | $(3, 1)$ | $(3, 2)$ | $(3, 3)$ | $(3, 4)$ | $(3, 5)$ | $(3, 6)$ |
| $4$ | $(4, 1)$ | $(4, 2)$ | $(4, 3)$ | $(4, 4)$ | $(4, 5)$ | $(4, 6)$ |
| $5$ | $(5, 1)$ | $(5, 2)$ | $(5, 3)$ | $(5, 4)$ | $(5, 5)$ | $(5, 6)$ |
| $6$ | $(6, 1)$ | $(6, 2)$ | $(6, 3)$ | $(6, 4)$ | $(6, 5)$ | $(6, 6)$ |

Hence $\Omega$ has $6\cdot6=36$ elements. The outcomes with total $7$ lie on the diagonal from $(1, 6)$ to $(6, 1)$.

So the sample space has $36$ elements, of which $6$ have a total of $7$.
:::

:::warning Common mistakes
- **Merging different outcomes.** Wrong: tossing two coins has three outcomes. Right: it has four, because $(T, H)$ and $(H, T)$ are different.
- **Forgetting the repeated outcomes with replacement**, such as $(R, R)$; or **including repeated outcomes without replacement**.
- **Mixing up ordered and unordered pairs** (one after the other versus at the same time).
:::

**Connections.** In year 8 you found probabilities when rolling one dice. This lesson prepares for [the probability of an event](lesson:event-probability-experiments): to find a probability, we must first list the sample space correctly. Counting (branches at step 1) $\times$ (branches at step 2) becomes the multiplication rule in year 10.

## Key terms

:::terms
- random experiment | phép thử ngẫu nhiên
- possible outcome | kết quả có thể
- sample space | không gian mẫu
- tree diagram | sơ đồ cây
- table (two-way table) | bảng
- with replacement | lấy có hoàn lại
- without replacement | lấy không hoàn lại
:::

## Summary

- Experiment: the outcome is not known in advance. Sample space $\Omega$: the set of all possible outcomes.
- Two-step experiment: each outcome is an ordered pair; list them with a tree diagram or a table.
- Number of elements $=$ (branches at step 1) $\times$ (branches at step 2).

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Describe the sample space of each experiment:

a) Take a pen at random from a box containing four pens: red, blue, black and purple.

b) A family has two children; record the sex of the first child and then of the second (B for boy, G for girl).

::hint
**What you need:** the sample space is the set of all possible outcomes; with two steps, each outcome is an ordered pair.

**Steps:**
1. List the pen colours.
2. Draw a tree diagram for the two children.

::solution
The sample space $\Omega$ is the set of all possible outcomes of the experiment.

a) The pen taken can be red, blue, black or purple. Hence
$$\Omega=\{\text{red}, \text{blue}, \text{black}, \text{purple}\}.$$

The sample space has $4$ elements.

b) Each outcome is a pair $(x, y)$, where $x$ is the sex of the first child and $y$ the sex of the second; each position can be $B$ or $G$. Hence
$$\Omega=\{(B, B),\ (B, G),\ (G, B),\ (G, G)\}.$$

The sample space has $2\cdot2=4$ elements.

So the two sample spaces are $\{\text{red}, \text{blue}, \text{black}, \text{purple}\}$ and $\{(B, B), (B, G), (G, B), (G, G)\}$.

**Answer.** a) $\{\text{red}, \text{blue}, \text{black}, \text{purple}\}$; b) $\{(B, B), (B, G), (G, B), (G, G)\}$.
:::

:::exercise
Toss a coin and then roll a dice. Describe the sample space and state its number of elements.

::hint
**What you need:** use a table or a tree diagram; the number of elements is $2\cdot6$.

**Steps:**
1. Each outcome has the form (side of the coin, score).
2. List the outcomes with $T$, then with $H$.

::solution
Write $H$ for heads and $T$ for tails. Each outcome is a pair $(x, y)$, where $x$ is the side of the coin ($H$ or $T$) and $y$ is the score on the die ($1$, $2$, …, $6$).

Hence
$$\Omega=\{(H, 1), (H, 2), \ldots, (H, 6), (T, 1), (T, 2), \ldots, (T, 6)\}.$$

The coin has $2$ outcomes, and for each of them the die has $6$ outcomes. By the multiplication rule, the number of elements of $\Omega$ is $2\cdot6=12$.

So the sample space has $12$ elements.

**Answer.** $12$ elements.
:::

:::exercise
From three cards showing the digits $1$, $2$, $3$, two cards are drawn at random one after the other (without replacement) and placed in the order drawn to make a two-digit number. List the sample space.

::hint
**What you need:** without replacement, the two digits are different; the order drawn decides the number.

**Steps:**
1. The first card has $3$ possibilities, the second $2$.
2. Write down the numbers formed.

::solution
The two cards are drawn one after the other without replacement, so the tens digit and the units digit are different.

- The first card can be $1$, $2$ or $3$: $3$ ways.
- For each of these, the second card is one of the two remaining cards: $2$ ways.

Listing by the first card, we get the numbers $12$, $13$; $21$, $23$; $31$, $32$.

Hence
$$\Omega=\{12, 13, 21, 23, 31, 32\},$$
with $3\cdot2=6$ elements.

So the sample space is $\{12, 13, 21, 23, 31, 32\}$.

**Answer.** $\{12, 13, 21, 23, 31, 32\}$.
:::

:::exercise
Suppose the school canteen offers three main dishes: chicken rice (C), noodles (B) and sticky rice (X), and two drinks: milk (S) and orange juice (O). Minh chooses a main dish and a drink at random. Use a table to describe the sample space.

::hint
**What you need:** a table with the main dishes as rows and the drinks as columns.

**Steps:**
1. Draw a table with $3$ rows and $2$ columns.
2. Each cell is a pair (main dish, drink).

::solution
The table has $3$ rows C, B, X and $2$ columns S, O, and each cell is one outcome, so

$$\Omega=\{(C, S),\ (C, O),\ (B, S),\ (B, O),\ (X, S),\ (X, O)\}.$$

So the sample space has $3\cdot2=6$ elements.

**Answer.** $6$ elements.
:::

:::exercise
The teacher chooses two of the four students An (A), Binh (B), Chi (C) and Dung (D) at the same time, at random, to tidy the classroom. Describe the sample space.

::hint
**What you need:** choosing at the same time means there is no order: $\{A, B\}$ and $\{B, A\}$ are the same.

**Steps:**
1. Pair A with each student after A, then B with each student after B, …
2. Count the pairs.

::solution
The two students are chosen together, so order does not matter: each outcome is a group of two students. We write, for example, $AB$ for the outcome "An and Binh are chosen".

Listing by the first name in the group:

- groups with An: $AB$, $AC$, $AD$;
- groups with Binh (without An): $BC$, $BD$;
- the remaining group: $CD$.

Hence
$$\Omega=\{AB, AC, AD, BC, BD, CD\}.$$

So the sample space has $6$ elements.

**Answer.** $6$ elements.
:::

:::exercise
**(1.5 marks)** A box contains four cards showing the numbers $1$, $2$, $3$, $4$. Two cards are drawn at random, one after the other.

a) The cards are drawn without replacement. Describe the sample space and state its number of elements.

b) List the outcomes in which the two numbers add up to $5$.

c) If the cards are drawn with replacement, how many elements does the sample space have?

::hint
**What you need:** a tree diagram or a table; without replacement, the two cards are different.

**Steps:**
1. Each first card is followed by $3$ possible second cards.
2. Find the pairs with total $5$, remembering the order.
3. With replacement, each step has $4$ possibilities.

::solution
Each outcome is a pair $(i, j)$, where $i$ is the number on the first card and $j$ the number on the second card.

a) The cards are drawn without replacement, so $i\neq j$. Hence
$$\Omega=\{(i, j)\mid i, j\in\{1, 2, 3, 4\},\ i\neq j\}.$$

There are $4$ ways for the first draw and $3$ ways for the second. By the multiplication rule, $\Omega$ has $4\cdot3=12$ elements.

b) The pairs of different numbers in $\{1, 2, 3, 4\}$ with sum $5$ are $1+4$ and $2+3$. Taking the order of drawing into account, we get the outcomes
$$(1, 4),\ (4, 1),\ (2, 3),\ (3, 2).$$

c) With replacement, the second card can be the same as the first: there are $4$ ways each time. By the multiplication rule, the sample space has $4\cdot4=16$ elements.

So a) the sample space has $12$ elements; b) there are $4$ outcomes with sum $5$; c) the sample space has $16$ elements.

**Answer.** a) $12$; b) $(1, 4), (4, 1), (2, 3), (3, 2)$; c) $16$.
:::

:::exercise
Lan's group tosses two coins $40$ times and records the number of heads: $0$ heads: $9$ times; $1$ head: $21$ times; $2$ heads: $10$ times.

a) Find the relative frequency of each result. (Revise [relative frequency](lesson:relative-frequency-tables).)

b) Using the sample space, explain why "1 head" occurs nearly twice as often as each of the other results.

::hint
**What you need:** $f=\dfrac{m}{n}\cdot100\%$; $\Omega=\{(T, T), (T, H), (H, T), (H, H)\}$.

**Steps:**
1. Divide each frequency by $40$.
2. Count the elements of $\Omega$ with exactly one head.

::solution
a) We have $\dfrac{9}{40}=22.5\%$, $\dfrac{21}{40}=52.5\%$, $\dfrac{10}{40}=25\%$.

b) Of the $4$ outcomes in $\Omega$, $2$ have exactly one head, $(T, H)$ and $(H, T)$, while "0 heads" and "2 heads" each correspond to only $1$ outcome.

So "1 head" corresponds to twice as many outcomes, which is why it occurs more often.

**Answer.** a) $22.5\%$, $52.5\%$, $25\%$. b) It corresponds to $2$ of the $4$ outcomes.
:::

:::exercise Challenge
Roll two dice. How many outcomes in the sample space have scores that differ by at least $3$?

::hint
**What you need:** use the $6\times6$ table; count by each difference.

**Steps:**
1. Count the pairs $(i, j)$ with $i-j$ equal to $3$, $4$, $5$.
2. Double, since $j$ can be greater than $i$.

::solution
The pairs with $i-j=3$ are $(4, 1)$, $(5, 2)$, $(6, 3)$; with $i-j=4$: $(5, 1)$, $(6, 2)$; with $i-j=5$: $(6, 1)$. That gives $3+2+1=6$ pairs with $i>j$, and $6$ symmetric pairs with $j>i$.

So there are $12$ outcomes.

**Answer.** $12$.
:::

## Mini test

:::quiz
::mc
A dice is rolled. The number of elements in the sample space is
A. $1$.
B. $2$.
C. $6$.
D. $36$.
::key C
$\Omega=\{1, 2, 3, 4, 5, 6\}$. A thinks "only one face comes up each time", B confuses this with tossing one coin, D is the number of outcomes for two dice.

::mc
Two coins are tossed. The sample space is
A. $\{(T, T), (T, H), (H, H)\}$.
B. $\{T, H\}$.
C. $\{(T, H), (H, T)\}$.
D. $\{(T, T), (T, H), (H, T), (H, H)\}$.
::key D
A wrongly merges $(T, H)$ with $(H, T)$, B is the sample space for one coin, C contains only the outcomes with different faces.

::mc
Two dice are rolled. The number of elements in the sample space is
A. $12$.
B. $36$.
C. $21$.
D. $6$.
::key B
$6\cdot6=36$. A adds $6+6$, C counts unordered pairs, D is for one dice.

::mc
A box has $4$ marbles of different colours. Two marbles are taken out one after the other, without replacement. The number of elements in the sample space is
A. $12$.
B. $16$.
C. $6$.
D. $8$.
::key A
$4\cdot3=12$. B is with replacement, C is taking both at once (unordered), D adds $4+4$.

::tf
A box contains three cards showing $1$, $2$, $3$. Two cards are drawn at random one after the other, with replacement. Decide whether each statement is true or false.
a) The sample space has $9$ elements.
b) $(1, 1)$ is an element of the sample space.
c) $(1, 2)$ and $(2, 1)$ are the same outcome.
d) There are $3$ outcomes in which both cards show the same number.
::key T T F T
a) True: $3\cdot3=9$. b) True, because of replacement. c) False: the order of drawing differs. d) True: $(1, 1), (2, 2), (3, 3)$.

::sa
Roll two dice. How many outcomes have a total score of $9$?
::key 4
$(3, 6), (4, 5), (5, 4), (6, 3)$.

::sa
Two of five students are chosen at random at the same time. How many elements does the sample space have?
::key 10
Pair each student with those after them: $4+3+2+1=10$.
:::
