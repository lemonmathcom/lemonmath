---
title: "Topic: statistics and probability"
description: Revise frequency tables, relative frequency, grouped tables, pie charts and the probability of events in games and experiments, in entrance-exam style.
minutes: 25
---

:::goals
- Make and read frequency tables and relative frequency tables, and grouped frequency tables; convert percentages into angles at the centre of a pie chart.
- Identify the sample space and the favourable outcomes and find the probability of an event with $P(A)=\dfrac kn$.
- Use the complementary event, $P(\overline A)=1-P(A)$, and make a table to list the outcomes of two trials.
- Tell theoretical probability from experimental probability and present a statistics or probability question as in the grade 10 entrance paper.
:::

Suppose $20$ students in a class take a maths test and their marks are whole numbers from $5$ to $10$. The teacher has only written down each student's mark on a sheet of paper. To find out which mark occurs most often and what percentage of the students got $8$ or more, we have to arrange the data in a table. And if the teacher picks one student at random to solve a problem on the board, how likely is it that the student got $8$ or more?

The first question belongs to **statistics** (arranging and describing data we already have) and the second to **probability** (measuring how likely an event is). In the grade 10 entrance paper these two topics usually make up only a small part of a question, but they are easy marks if you know the ideas well and present them neatly.

## Statistics: frequency tables and relative frequency

### Explore: from a list of marks to a frequency table

Suppose the $20$ students got these marks: $2$ students got $5$, $3$ students got $6$, $5$ students got $7$, $6$ students got $8$, $3$ students got $9$ and $1$ student got $10$. We write this as a table:

| Mark | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | Total |
|---|---|---|---|---|---|---|---|
| Frequency | $2$ | $3$ | $5$ | $6$ | $3$ | $1$ | $20$ |
| Relative frequency | $10\%$ | $15\%$ | $25\%$ | $30\%$ | $15\%$ | $5\%$ | $100\%$ |

:::definition Frequency and relative frequency
The **frequency** of a value is the number of times the value occurs in the sample. The **relative frequency** of a value is the ratio of its frequency to the number $N$ of items in the sample, usually written as a percentage:
$$f_i=\frac{n_i}N\cdot100\%.$$
The frequencies add up to $N$ and the relative frequencies add up to $100\%$.
:::

**Why do we need relative frequency?** The frequency tells us how many times a value occurs, but only the relative frequency lets us compare two samples of different sizes. For example, $6$ students out of $20$ and $12$ students out of $40$ both make up $30\%$ of the students, although the frequencies are different.

:::example Reading a frequency table
Use the frequency table of marks above. a) Which mark has the greatest frequency? b) How many students got $8$ or more, and what percentage of the students is that? c) What is the relative frequency of the mark $9$?

**Solution.**

a) The greatest frequency is $6$, for the mark $8$. So the mark $8$ occurs most often.

b) The number of students who got $8$ or more is $6+3+1=10$ (students), which is $\dfrac{10}{20}=50\%$ of the students.

c) The relative frequency of the mark $9$ is $\dfrac3{20}=15\%$.

**Answer.** a) The mark $8$; b) $10$ students, $50\%$; c) $15\%$.
:::

### Grouped frequency tables

When the data has many different values (heights, weights, times), we divide it into **groups** of equal width. Each group has the form of a half-open interval $[a,b)$, containing the values $x$ with $a\leq x<b$. The frequency of a group is the number of values that lie in that group.

:::example A grouped frequency table
Suppose the heights (in cm) of $40$ students are recorded in this table:

| Group | $[145, 150)$ | $[150, 155)$ | $[155, 160)$ | $[160, 165)$ | $[165, 170)$ |
|---|---|---|---|---|---|
| Frequency | $4$ | $10$ | $14$ | $9$ | $3$ |

a) Find the relative frequency of each group. b) Which group has the most students? c) What percentage of the students are shorter than $160$ cm?

**Solution.**

a) The total frequency is $4+10+14+9+3=40$. The relative frequencies are $\dfrac4{40}=10\%$; $\dfrac{10}{40}=25\%$; $\dfrac{14}{40}=35\%$; $\dfrac9{40}=22.5\%$; $\dfrac3{40}=7.5\%$. They add up to $100\%$.

b) The group $[155, 160)$ has the greatest frequency ($14$ students).

c) The number of students shorter than $160$ cm is $4+10+14=28$, which is $\dfrac{28}{40}=70\%$.

**Answer.** a) $10\%$; $25\%$; $35\%$; $22.5\%$; $7.5\%$. b) The group $[155, 160)$. c) $70\%$.
:::

### Pie charts

In a pie chart, each sector stands for a value or a group, and the angle at the centre of the sector equals the relative frequency times $360^\circ$. The whole circle stands for $100\%$.

:::example From a frequency table to a pie chart
Suppose a survey of $80$ students about how they get to school gives: walking $20$ students, cycling $32$ students, bus $16$ students, electric scooter $12$ students. Find the relative frequency and the angle at the centre of the matching sector in a pie chart.

**Solution.** We have $N=20+32+16+12=80$. The relative frequencies and the angles at the centre are:
- walking: $\dfrac{20}{80}=25\%$, angle $0.25\cdot360^\circ=90^\circ$;
- cycling: $\dfrac{32}{80}=40\%$, angle $0.4\cdot360^\circ=144^\circ$;
- bus: $\dfrac{16}{80}=20\%$, angle $0.2\cdot360^\circ=72^\circ$;
- electric scooter: $\dfrac{12}{80}=15\%$, angle $0.15\cdot360^\circ=54^\circ$.

Check: $25+40+20+15=100\%$ and $90^\circ+144^\circ+72^\circ+54^\circ=360^\circ$.
:::

## Probability of an event

### Explore: rolling a die

Roll a fair die; every face is equally likely to come up. The **sample space** is the set of all possible outcomes: $\Omega=\{1,2, 3, 4, 5, 6\}$, which has $6$ outcomes. The event "the number of dots is even" happens when the outcome is $2$, $4$ or $6$. These are $3$ **favourable outcomes** out of $6$ possible outcomes, so the chance of it happening is $\dfrac36=\dfrac12$.

:::definition Probability of an event
If an experiment has $n$ possible, equally likely outcomes, and an event $A$ has $k$ favourable outcomes, then the **probability** of $A$ is
$$P(A)=\frac kn.$$
We always have $0\leq P(A)\leq1$. An impossible event has probability $0$, and a certain event has probability $1$. If $\overline A$ is the complementary event of $A$ (it happens when $A$ does not happen) then $P(\overline A)=1-P(A)$.
:::

**Why is $P(\overline A)=1-P(A)$?** Every outcome is either favourable to $A$ or favourable to $\overline A$, and no outcome is both. So the number of favourable outcomes of $\overline A$ is $n-k$ and $P(\overline A)=\dfrac{n-k}n=1-\dfrac kn$.

:::example Rolling one die
Roll a fair die. Find the probabilities of the events:

a) $A$: "the number of dots is even";

b) $B$: "the number of dots is divisible by $3$";

c) $C$: "the number of dots is greater than $4$";

d) $D$: "the number of dots is not $6$".

**Solution.** The sample space has $6$ equally likely outcomes.

a) The favourable outcomes are $2$, $4$, $6$, so $P(A)=\dfrac36=\dfrac12$.

b) The favourable outcomes are $3$ and $6$, so $P(B)=\dfrac26=\dfrac13$.

c) The favourable outcomes are $5$ and $6$, so $P(C)=\dfrac26=\dfrac13$.

d) The event $D$ is the complement of "the number of dots is $6$", so $P(D)=1-\dfrac16=\dfrac56$.

**Answer.** a) $\dfrac12$; b) $\dfrac13$; c) $\dfrac13$; d) $\dfrac56$.
:::

:::example An exam-style question
**Question 5.** ($1.5$ marks) A box contains $4$ identical cards numbered $1$, $2$, $3$, $4$. Lan draws one card at random, notes the number, puts the card back in the box and then draws a second card at random. a) Describe the sample space of the experiment. b) Find the probability of the event $A$: "the sum of the two numbers is $5$". c) Find the probability of the event $B$: "the product of the two numbers is even".

**Solution.**

*Understand.* Each draw has $4$ outcomes, and since the card is put back, the two draws are independent. We need to list the pairs of numbers (first draw, second draw).

*Plan.* Make a $4\times4$ table of all possible pairs, then count the favourable pairs. For the event $B$, use the complementary event: the product is odd when both numbers are odd.

*Solve.*

a) ($0.5$ marks) The sample space consists of the pairs $(a,b)$ with $a,b\in\{1,2, 3, 4\}$. There are $4\cdot4=16$ equally likely outcomes.

b) ($0.5$ marks) The pairs with sum $5$ are $(1, 4)$, $(2, 3)$, $(3, 2)$, $(4, 1)$, that is $4$ favourable outcomes. So $P(A)=\dfrac4{16}=\dfrac14$.

c) ($0.5$ marks) The complementary event $\overline B$: "the product of the two numbers is odd" happens when both numbers are odd, that is each number is in $\{1,3\}$. There are $2\cdot2=4$ favourable outcomes, so $P(\overline B)=\dfrac4{16}=\dfrac14$. So $P(B)=1-\dfrac14=\dfrac34$.

So $P(A)=\dfrac14$ and $P(B)=\dfrac34$.

*Look back.* Counting the pairs with an even product directly: there are $16-4=12$ pairs, and $\dfrac{12}{16}=\dfrac34$, which matches the result above. The result is reasonable because only odd $\times$ odd gives an odd product.
:::

### Experimental probability

When we do not know whether the outcomes are equally likely, we estimate the chance by repeating the experiment many times. The **experimental probability** of an event $A$ is the ratio of the number of times $A$ happens to the total number of trials. When the number of trials is large enough, the experimental probability is usually close to the theoretical probability.

:::example Tossing a coin
Suppose Minh tosses a coin $200$ times and sees heads $96$ times. Find the experimental probability of the event "heads" and compare it with the theoretical probability for a fair coin.

**Solution.** The experimental probability is $\dfrac{96}{200}=0.48$. For a fair coin, the theoretical probability of heads is $\dfrac12=0.5$. The two values are close, differing by $0.02$.

So the experimental probability is $0.48$, close to the theoretical probability $0.5$.
:::

:::warning Common mistakes
- **Confusing frequency with relative frequency.** Wrong: saying "the mark $8$ makes up $6\%$ of the students" because the frequency is $6$. Why it is wrong: $6$ is a number of students, and a percentage must be divided by the total $20$. Right: $\dfrac6{20}=30\%$.
- **Missing a group or confusing the ends of a group.** Wrong: putting a height of $160$ cm in the group $[155, 160)$. Why it is wrong: the half-open interval $[155, 160)$ does not contain $160$. Right: $160$ belongs to the group $[160, 165)$.
- **A probability greater than $1$ or negative.** Wrong: finding $P=\dfrac{6}{4}$. Why it is wrong: the number of favourable outcomes cannot be greater than the number of possible outcomes. Right: $0\leq P\leq1$, so check the counting again.
- **Counting too few outcomes in the sample space.** Wrong: for two draws with replacement from $4$ cards, thinking there are $4$ or $8$ outcomes. Why it is wrong: each draw has $4$ ways, so there are $4\cdot4=16$ pairs. Right: list the table of pairs before counting.
- **Forgetting that theoretical probability needs equally likely outcomes.** Wrong: "tomorrow it either rains or it does not, so the probability of rain is $\dfrac12$". Why it is wrong: these two outcomes are not equally likely. Right: use $\dfrac kn$ only when the outcomes are equally likely; otherwise use experimental probability.
:::

**Connections.** This lesson uses percentages, fractions and counting. The percentages and angles at the centre of a pie chart link to the circle geometry of an earlier topic. Statistics and probability will be extended in grades 10 and 11 with the mean, the standard deviation and the rules for calculating probabilities.

## Key terms

:::terms
- frequency | tần số
- relative frequency | tần số tương đối
- grouped frequency table | bảng tần số ghép nhóm
- pie chart | biểu đồ tròn
- sample space | không gian mẫu
- favourable outcome | kết quả thuận lợi
- event | biến cố
- complementary event | biến cố đối
- probability | xác suất
- experimental probability | xác suất thực nghiệm
- equally likely | đồng khả năng
:::

## Summary

- The frequency $n_i$ is the number of times a value occurs; the relative frequency is $f_i=\dfrac{n_i}N\cdot100\%$; the relative frequencies add up to $100\%$.
- A grouped table uses groups $[a,b)$; for a pie chart, the angle at the centre $=f_i\cdot360^\circ$.
- $P(A)=\dfrac kn$ with $n$ equally likely outcomes and $k$ favourable outcomes; $0\leq P(A)\leq1$.
- $P(\overline A)=1-P(A)$; for two trials, make a table of the pairs to count.
- Experimental probability $=\dfrac{\text{number of times }A\text{ happens}}{\text{total number of trials}}$, close to the theoretical probability when the number of trials is large.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
The marks of $20$ students are given by this frequency table:

| Mark | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|
| Frequency | $2$ | $4$ | $8$ | $5$ | $1$ |

Find the relative frequency of each mark, say which mark occurs most often, and find what percentage of the students got $9$ or more.

::hint
**What you need:** $f_i=\dfrac{n_i}N\cdot100\%$.

**Steps:**
1. Divide each frequency by $20$.
2. Add the frequencies of the marks $9$ and $10$.

::solution
The relative frequencies are $\dfrac2{20}=10\%$; $\dfrac4{20}=20\%$; $\dfrac8{20}=40\%$; $\dfrac5{20}=25\%$; $\dfrac1{20}=5\%$. The mark $8$ has the greatest frequency ($8$). The number of students who got $9$ or more is $5+1=6$, which is $\dfrac6{20}=30\%$.

**Answer.** $10\%$; $20\%$; $40\%$; $25\%$; $5\%$; the mark $8$; $30\%$.
:::

:::exercise
The weights (in kg) of $50$ students are recorded in this table:

| Group | $[40, 45)$ | $[45, 50)$ | $[50, 55)$ | $[55, 60)$ | $[60, 65)$ |
|---|---|---|---|---|---|
| Frequency | $5$ | $15$ | $20$ | $8$ | $2$ |

Find the relative frequency of each group. Which group has the greatest relative frequency? What percentage of the students weigh less than $55$ kg?

::hint
**What you need:** relative frequency and the half-open interval $[a,b)$.

**Steps:**
1. Find $N$, then divide each frequency by $N$.
2. Add the groups with weight less than $55$ kg.

::solution
$N=5+15+20+8+2=50$. The relative frequencies are $10\%$; $30\%$; $40\%$; $16\%$; $4\%$. The group $[50, 55)$ has the greatest relative frequency. The number of students weighing less than $55$ kg is $5+15+20=40$, which is $\dfrac{40}{50}=80\%$.

**Answer.** $10\%$; $30\%$; $40\%$; $16\%$; $4\%$; the group $[50, 55)$; $80\%$.
:::

:::exercise
A survey of $40$ students about their favourite sport gives: football $16$ students, badminton $12$ students, swimming $8$ students, other sports $4$ students. Find the relative frequency and the angle at the centre of the matching sector in a pie chart.

::hint
**What you need:** angle at the centre $=f_i\cdot360^\circ$.

**Steps:**
1. Find the relative frequency of each sport.
2. Multiply by $360^\circ$.

::solution
Football: $\dfrac{16}{40}=40\%$, angle $144^\circ$. Badminton: $\dfrac{12}{40}=30\%$, angle $108^\circ$. Swimming: $\dfrac8{40}=20\%$, angle $72^\circ$. Other sports: $\dfrac4{40}=10\%$, angle $36^\circ$. Check: $144+108+72+36=360$.

**Answer.** $40\%$, $144^\circ$; $30\%$, $108^\circ$; $20\%$, $72^\circ$; $10\%$, $36^\circ$.
:::

:::exercise
Two fair dice are rolled at the same time. Find the probabilities of the events:

a) $A$: "the sum of the dots is $8$";

b) $B$: "the sum of the dots is less than $5$";

c) $C$: "the two dice show the same number of dots";

d) $D$: "the sum of the dots is even".

::hint
**What you need:** the sample space has $6\cdot6=36$ equally likely outcomes.

**Steps:**
1. List the pairs $(a,b)$ that are favourable to each event.
2. Divide by $36$.

::solution
The sample space has $36$ outcomes.

a) Sum $8$: $(2, 6)$, $(3, 5)$, $(4, 4)$, $(5, 3)$, $(6, 2)$, which is $5$ outcomes, so $P(A)=\dfrac5{36}$.

b) A sum less than $5$ means $2$, $3$ or $4$, which gives $1+2+3=6$ outcomes, so $P(B)=\dfrac6{36}=\dfrac16$.

c) There are $6$ outcomes $(1, 1)$, $(2, 2)$, …, $(6, 6)$, so $P(C)=\dfrac6{36}=\dfrac16$.

d) The sum is even when both numbers are even or both are odd: $3\cdot3+3\cdot3=18$ outcomes, so $P(D)=\dfrac{18}{36}=\dfrac12$.

**Answer.** a) $\dfrac5{36}$; b) $\dfrac16$; c) $\dfrac16$; d) $\dfrac12$.
:::

:::exercise
**Question 5.** ($1.5$ marks) A box contains $5$ red balls, $3$ blue balls and $2$ yellow balls of the same size. One ball is drawn at random from the box, its colour is noted, it is put back in the box and a second ball is drawn. a) How many outcomes are possible? b) Find the probability of the event $A$: "both balls are red". c) Find the probability of the event $B$: "the two balls have the same colour".

::hint
**What you need:** each draw has $10$ outcomes, and since the ball is put back, the draws are independent.

**Steps:**
1. Count the possible outcomes: $10\cdot10$.
2. Count the favourable outcomes colour by colour.

::solution
a) ($0.5$ marks) Each draw has $10$ equally likely outcomes, so there are $10\cdot10=100$ outcomes.

b) ($0.5$ marks) Both red: $5\cdot5=25$ outcomes, so $P(A)=\dfrac{25}{100}=\dfrac14$.

c) ($0.5$ marks) Two balls of the same colour: red-red has $25$ outcomes, blue-blue has $3\cdot3=9$ outcomes, yellow-yellow has $2\cdot2=4$ outcomes, so $25+9+4=38$ outcomes in all. So $P(B)=\dfrac{38}{100}=\dfrac{19}{50}$.

**Answer.** a) $100$; b) $\dfrac14$; c) $\dfrac{19}{50}$.
:::

:::exercise
Suppose a class has $40$ students, $24$ girls and $16$ boys. The teacher picks one student at random to be a temporary class monitor. Find the probability that the student picked is a girl and the probability that the student picked is a boy.

::hint
**What you need:** $P(A)=\dfrac kn$; two complementary events.

**Steps:**
1. Count the possible outcomes and the favourable outcomes.
2. Check the sum of the two probabilities.

::solution
There are $40$ equally likely outcomes. $P(\text{girl})=\dfrac{24}{40}=\dfrac35$ and $P(\text{boy})=\dfrac{16}{40}=\dfrac25$. Check: $\dfrac35+\dfrac25=1$.

**Answer.** $\dfrac35$ and $\dfrac25$.
:::

:::exercise
Suppose Nam rolls a die $60$ times and sees the face with $6$ dots $12$ times. Find the experimental probability of the event "the face with $6$ dots comes up" and compare it with the theoretical probability (round to 3 decimal places).

::hint
**What you need:** experimental probability $=\dfrac{\text{number of times it happens}}{\text{total number of trials}}$.

**Steps:**
1. Find $\dfrac{12}{60}$.
2. Find $\dfrac16$ and compare.

::solution
The experimental probability is $\dfrac{12}{60}=0.2$. The theoretical probability is $\dfrac16\approx0.167$. The two values are close, differing by about $0.033$.

**Answer.** $0.2$ and $\approx0.167$.
:::

:::exercise
The marks of $40$ students have the following frequency table, in which the frequency of the mark $7$ is not known:

| Mark | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Frequency | $4$ | $8$ | ? | $10$ | $6$ |

Find the frequency of the mark $7$ and its relative frequency.

::hint
**What you need:** the frequencies add up to $N$.

**Steps:**
1. Subtract the known frequencies from $40$.
2. Divide the frequency you found by $40$.

::solution
The frequency of the mark $7$ is $40-(4+8+10+6)=40-28=12$. Its relative frequency is $\dfrac{12}{40}=30\%$.

**Answer.** Frequency $12$; relative frequency $30\%$.
:::

:::exercise Challenge
A box contains $x$ red balls and $6$ blue balls of the same size. One ball is drawn at random from the box, and the probability of drawing a blue ball is $\dfrac25$. Find $x$.

::hint
**What you need:** $P(\text{blue})=\dfrac{\text{number of blue balls}}{\text{total number of balls}}$.

**Steps:**
1. Express the total number of balls in terms of $x$.
2. Form the equation $\dfrac6{x+6}=\dfrac25$.

::solution
The total number of balls is $x+6$, so $\dfrac6{x+6}=\dfrac25$. So $2(x+6)=30$, that is $x+6=15$ and $x=9$. Check: $\dfrac6{15}=\dfrac25$.

**Answer.** $x=9$.
:::

## Mini test

:::quiz
::mc
Among $20$ students taking a test, $6$ students got $8$. The relative frequency of the mark $8$ is
A. $30\%$.
B. $3.3\%$.
C. $6\%$.
D. $70\%$.
::key A
$\dfrac6{20}=30\%$. Option C takes the frequency as a percentage, B is $\dfrac{20}6$ (dividing the wrong way round), and D is the relative frequency of the other marks.

::mc
A fair die is rolled. The probability that the number of dots is greater than $4$ is
A. $\dfrac16$.
B. $\dfrac13$.
C. $\dfrac12$.
D. $\dfrac23$.
::key B
The favourable outcomes are $5$ and $6$, so $P=\dfrac26=\dfrac13$. Option A counts only the face $6$, C is the probability of "at least $4$", and D is the probability of "at most $4$".

::mc
A box has $5$ red balls, $3$ blue balls and $2$ yellow balls. One ball is drawn at random. The probability that the ball is not yellow is
A. $\dfrac15$.
B. $\dfrac12$.
C. $\dfrac45$.
D. $\dfrac3{10}$.
::key C
$P=1-\dfrac2{10}=\dfrac8{10}=\dfrac45$. Option A is the probability of drawing a yellow ball, B is the probability of drawing a red ball, and D is the probability of drawing a blue ball.

::mc
In a pie chart, one group makes up $15\%$. The angle at the centre of the matching sector is
A. $150^\circ$.
B. $15^\circ$.
C. $27^\circ$.
D. $54^\circ$.
::key D
$0.15\cdot360^\circ=54^\circ$. Option B takes the percentage as the number of degrees, C is $\dfrac{54}{2}$, and A multiplies by $10$ by mistake.

::tf
The marks of $40$ students have this frequency table: mark $5$: $4$; mark $6$: $8$; mark $7$: $12$; mark $8$: $10$; mark $9$: $6$. Decide whether each statement is true or false.
a) The relative frequency of the mark $7$ is $30\%$.
b) The mark that occurs most often is $8$.
c) $40\%$ of the students got $8$ or more.
d) The relative frequencies add up to $100\%$.
::key T F T T
a) True: $\dfrac{12}{40}=30\%$. b) False: the mark $7$ has the greatest frequency ($12$). c) True: $\dfrac{10+6}{40}=40\%$. d) True: the relative frequencies always add up to $100\%$.

::sa
A box has $5$ red balls, $3$ blue balls and $2$ yellow balls. One ball is drawn at random. What percentage is the probability of drawing a blue ball?
::key 30
$P=\dfrac3{10}=30\%$.

::sa
Two fair dice are rolled. How many outcomes give a sum of $8$?
::key 5
The pairs are $(2, 6)$, $(3, 5)$, $(4, 4)$, $(5, 3)$, $(6, 2)$.
:::
