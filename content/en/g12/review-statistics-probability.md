---
title: "Revision: statistics and probability"
description: Revise measures of grouped data, conditional probability, the law of total probability and Bayes' theorem, in graduation exam style.
minutes: 40
---

:::goals
- Calculate the mean, median, quartiles and mode of grouped data.
- Calculate the range, interquartile range, variance and standard deviation, and use them to compare data sets.
- Use the addition rule, the multiplication rule, conditional probability and independent events.
- Use tree diagrams, the law of total probability and Bayes' theorem in real-life problems.
:::

Statistics and probability is certain to appear in the graduation exam. Part I usually has two or three questions that ask for a quick measure from a grouped frequency table or a probability. Part II or Part III usually has one real-life question on conditional probability or Bayes' theorem. Altogether this topic is usually worth about $1$ to $1.5$ marks.

The statistics part of this lesson uses one data set throughout. The daily phone use (minutes) of $40$ students is grouped as follows:

| Time (minutes) | $[0, 30)$ | $[30, 60)$ | $[60, 90)$ | $[90, 120)$ | $[120, 150)$ |
|---|---|---|---|---|---|
| Number of students | $4$ | $10$ | $14$ | $8$ | $4$ |
| Midpoint | $15$ | $45$ | $75$ | $105$ | $135$ |
| Cumulative frequency | $4$ | $14$ | $28$ | $36$ | $40$ |

## Measures of central tendency

:::theorem Formulas for grouped data
The data has classes $[u_1, u_2)$, …, $[u_k, u_{k+1})$, frequencies $n_1$, …, $n_k$, midpoints $x_1$, …, $x_k$ and size $n$.
- Mean: $\bar x=\dfrac{n_1x_1+n_2x_2+\cdots+n_kx_k}{n}$.
- Median: if $[u_m, u_{m+1})$ is the first class with cumulative frequency $\ge\dfrac n2$ and $C$ is the cumulative frequency of the classes before it, then $M_e=u_m+\dfrac{\frac n2-C}{n_m}(u_{m+1}-u_m)$. Quartiles $Q_1$, $Q_3$: replace $\dfrac n2$ by $\dfrac n4$, $\dfrac{3n}{4}$.
- Mode: if $[u_m, u_{m+1})$ is the class with the highest frequency, then $M_o=u_m+\dfrac{n_m-n_{m-1}}{(n_m-n_{m-1})+(n_m-n_{m+1})}(u_{m+1}-u_m)$.
:::

For the table above, $\dfrac n2=20$ lies in the class $[60, 90)$ (because $14<20\le28$), so $M_e=60+\dfrac{20-14}{14}\cdot30\approx72.86$. The class with the highest frequency is also $[60, 90)$, so $M_o=60+\dfrac{4}{4+6}\cdot30=72$.

:::example Multiple choice: the mean of grouped data
The mean of the phone-use data above is

**A.** $75$.

**B.** $72$.

**C.** $73.5$.

**D.** $72.86$.

**Solution.** We multiply each midpoint by its frequency and divide by the size of the data set:

$$\bar x=\frac{4\cdot15+10\cdot45+14\cdot75+8\cdot105+4\cdot135}{40}=\frac{60+450+1050+840+540}{40}=\frac{2940}{40}=73.5.$$

The answer is **C**. Option A is the midpoint of the class with the highest frequency, option B is the mode, and option D is the median.
:::

## Measures of spread

:::theorem Range, interquartile range, variance, standard deviation
- $R=u_{k+1}-u_1$; $\Delta_Q=Q_3-Q_1$.
- Variance: $s^2=\dfrac{n_1(x_1-\bar x)^2+\cdots+n_k(x_k-\bar x)^2}{n}=\dfrac{n_1x_1^2+\cdots+n_kx_k^2}{n}-\bar x^2$.
- Standard deviation: $s=\sqrt{s^2}$, in the same units as the data.
:::

:::example True/false: measures of spread
For the phone-use data above:

a) The range of the data is $150$ minutes.

b) The lower quartile is $Q_1=48$.

c) The upper quartile lies in the class $[60, 90)$.

d) The standard deviation of the data is approximately $33.51$ minutes.

**Solution.** We use the cumulative frequencies $4$, $14$, $28$, $36$, $40$.

a) **True.** $R=150-0=150$.

b) **True.** $\dfrac n4=10$ and $4<10\le14$, so $Q_1$ lies in $[30, 60)$:

$$Q_1=30+\frac{10-4}{10}\cdot30=48.$$

c) **False.** $\dfrac{3n}{4}=30$ and $28<30\le36$, so $Q_3$ lies in the class $[90, 120)$; in fact $Q_3=90+\dfrac{30-28}{8}\cdot30=97.5$.

d) **True.** We find the mean of the squares and subtract $\bar x^2=73.5^2$:

$$s^2=\frac{4\cdot15^2+10\cdot45^2+14\cdot75^2+8\cdot105^2+4\cdot135^2}{40}-73.5^2=6525-5402.25=1122.75.$$

So $s=\sqrt{1122.75}\approx33.51$ minutes.

So the answers are a) True, b) True, c) False, d) True.
:::

:::warning Common traps in statistics
- **Choosing the class with the highest frequency** instead of using the cumulative frequency to find the class containing $Q_1$, $M_e$ or $Q_3$.
- **Including the class itself in $C$.** $C$ is only the cumulative frequency of the classes **before** it.
- **Forgetting to subtract $\bar x^2$** in the variance formula, or giving the variance when the question asks for the standard deviation.
:::

## Conditional probability and the multiplication rule

:::theorem Rules of probability
- $P(\overline A)=1-P(A)$; $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
- The probability of $A$ given that $B$ has happened: $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ ($P(B)>0$).
- Multiplication rule: $P(A\cap B)=P(B)\cdot P(A\mid B)$.
- $A$ and $B$ are independent $\iff P(A\cap B)=P(A)\cdot P(B)$.
:::

:::example Multiple choice: conditional probability from a table
Class 12A has $40$ students, of whom $24$ are girls. In the class, $15$ girls and $6$ boys belong to the maths club. A student of the class is chosen at random. Given that the student belongs to the maths club, the probability that the student is a girl is

**A.** $\dfrac58$.

**B.** $\dfrac57$.

**C.** $\dfrac38$.

**D.** $\dfrac{21}{40}$.

**Solution.** Let $B$ be the event "belongs to the club" and $A$ the event "is a girl". The event $B$ contains $15+6=21$ students, $15$ of them girls:

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{15/40}{21/40}=\frac{15}{21}=\frac57.$$

The answer is **B**. Option A is $P(B\mid A)=\dfrac{15}{24}$ (the events swapped), option C is $P(A\cap B)$ and option D is $P(B)$.
:::

:::example Short answer: two independent events
Two archers shoot independently at the same target, one arrow each. The first hits with probability $0.8$ and the second with probability $0.7$. Find the probability that exactly one of them hits.

**Solution.** "Exactly one hits" consists of two mutually exclusive cases: the first hits and the second misses, or the other way round. We use the multiplication rule for independent events:

$$P=0.8\cdot0.3+0.2\cdot0.7=0.24+0.14=0.38.$$

So the required probability is $0.38$.
:::

## The law of total probability and Bayes' theorem

:::theorem Two formulas
With $0<P(B)<1$:
$$P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B),\qquad P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}.$$
On a tree diagram: multiply along each branch, and add the branches that lead to $A$ to get $P(A)$; Bayes' theorem is "the branch you want divided by the sum of the branches".
:::

:::diagram Tree diagram for a screening test
alt: A two-level tree diagram; the first level splits into has the disease with probability 0.02 and does not have it with probability 0.98; the disease branch splits into positive 0.95 and negative 0.05, the no-disease branch into positive 0.1 and negative 0.9; the ends show 0.019, 0.001, 0.098 and 0.882
point S 0,0 left "Person tested"
point M1 3,2 above "Has the disease"
point M2 3,-2 below "Does not"
point L1 6,3 right "Positive: 0.019"
point T1 6,1 right "Negative: 0.001"
point L2 6,-1 right "Positive: 0.098"
point T2 6,-3 right "Negative: 0.882"
segment S M1
segment S M2
segment M1 L1
segment M1 T1
segment M2 L2
segment M2 T2
label 1.2,1.5 "0.02"
label 1.2,-1.5 "0.98"
label 4.4,3 "0.95"
label 4.4,1.1 "0.05"
label 4.4,-1.1 "0.1"
label 4.4,-3 "0.9"
:::

:::example True/false: a screening test
A disease affects $2\%$ of a population. A test gives a positive result for $95\%$ of people with the disease and for $10\%$ of people without it. A person is chosen at random and tested. Let $B$ be the event "the person has the disease" and $A$ the event "the result is positive".

a) $P(\overline B)=0.98$.

b) $P(A)=0.117$.

c) If the result is positive, the chance that the person has the disease is more than $50\%$.

d) $P(B\mid A)\approx0.16$ (to 2 decimal places).

**Solution.** We are given $P(B)=0.02$, $P(A\mid B)=0.95$, $P(A\mid\overline B)=0.1$; we read the branches of the tree diagram.

a) **True.** $P(\overline B)=1-0.02=0.98$.

b) **True.** By the law of total probability:

$$P(A)=0.02\cdot0.95+0.98\cdot0.1=0.019+0.098=0.117.$$

c) **False.** By Bayes' theorem, $P(B\mid A)=\dfrac{0.019}{0.117}\approx0.162<0.5$.

d) **True.** Rounding $0.162$ to 2 decimal places gives $0.16$.

So the answers are a) True, b) True, c) False, d) True.

:::

:::warning Common traps in probability
- **Confusing $P(A\mid B)$ with $P(B\mid A)$.** The word "given" tells you which event goes after the bar $\mid$.
- **Confusing mutually exclusive with independent.** For mutually exclusive events add the probabilities; for independent events multiply them.
:::

## Key terms

:::terms
- grouped data | mẫu số liệu ghép nhóm
- class midpoint | giá trị đại diện
- median | trung vị
- quartile | tứ phân vị
- mode | mốt
- variance | phương sai
- standard deviation | độ lệch chuẩn
- conditional probability | xác suất có điều kiện
- independent events | biến cố độc lập
- law of total probability | công thức xác suất toàn phần
- Bayes' theorem | công thức Bayes
- tree diagram | sơ đồ cây
:::

## Exercises

The exercises go from easy to hard, and each one states its exam format.

:::exercise Multiple choice
The waiting times (minutes) of $10$ customers are grouped: the class $[0, 4)$ has $3$ people, $[4, 8)$ has $5$ people and $[8, 12)$ has $2$ people. The mean of the data is

**A.** $5.6$. **B.** $6$. **C.** $18.67$. **D.** $3.6$.

::hint
**What you need:** $\bar x=\dfrac{\sum n_ix_i}{n}$, where $x_i$ are the class midpoints.

**Steps:**
1. The midpoints are $2$, $6$, $10$.
2. Find the sum of $n_ix_i$ and divide by $10$.

::solution
$\bar x=\dfrac{3\cdot2+5\cdot6+2\cdot10}{10}=\dfrac{56}{10}=5.6$. Option B is the mean of the three midpoints, option C divides by $3$ instead of $10$, and option D uses the left endpoints.

**Answer.** A.
:::

:::exercise Multiple choice
The test marks of $50$ students are given in the table. The median of the data (to 2 decimal places) is

| Mark | $[5, 6)$ | $[6, 7)$ | $[7, 8)$ | $[8, 9)$ | $[9, 10)$ |
|---|---|---|---|---|---|
| Number of students | $4$ | $8$ | $16$ | $14$ | $8$ |

**A.** $7.81$. **B.** $7.5$. **C.** $6.81$. **D.** $7.93$.

::hint
**What you need:** the median class is the first class with cumulative frequency $\ge\dfrac n2$.

**Steps:**
1. Cumulative frequencies: $4$, $12$, $28$, $42$, $50$; $\dfrac n2=25$.
2. Substitute into the formula with $C=12$, $n_m=16$.

::solution
$M_e=7+\dfrac{25-12}{16}\cdot1=7.8125\approx7.81$. Option C takes $C=28$ (including the median class), option D uses the frequency $14$ of the next class, and option B is just the midpoint of the class.

**Answer.** A.
:::

:::exercise True/false
The masses (kg) of $20$ students: the class $[45, 50)$ has $5$ students, $[50, 55)$ has $10$ and $[55, 60)$ has $5$.

a) The mode of the data lies in the class $[55, 60)$.

b) The lower quartile is $Q_1=50$.

c) The variance of the data is $12.5$.

d) The standard deviation of the data is $12.5$ kg.

::hint
**What you need:** the mode lies in the class with the highest frequency; $s^2=\dfrac{\sum n_i(x_i-\bar x)^2}{n}$ and $s=\sqrt{s^2}$.

**Steps:**
1. The midpoints are $47.5$, $52.5$, $57.5$ and the mean is $\bar x=52.5$.
2. Cumulative frequencies $5$, $15$, $20$; $\dfrac n4=5$.

::solution
a) **False.** The class with the highest frequency is $[50, 55)$.

b) **True.** The first class with cumulative frequency $\ge5$ is $[45, 50)$: $Q_1=45+\dfrac{5-0}{5}\cdot5=50$.

c) **True.** $s^2=\dfrac{5\cdot(-5)^2+10\cdot0^2+5\cdot5^2}{20}=\dfrac{250}{20}=12.5$.

d) **False.** $s=\sqrt{12.5}\approx3.54$ kg.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise Short answer
Find the interquartile range of the following grouped data (to 1 decimal place).

| Class | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ |
|---|---|---|---|---|
| Frequency | $5$ | $12$ | $15$ | $8$ |

::hint
**What you need:** $\Delta_Q=Q_3-Q_1$; the positions of $Q_1$, $Q_3$ are $\dfrac n4$, $\dfrac{3n}{4}$.

**Steps:**
1. $n=40$; cumulative frequencies $5$, $17$, $32$, $40$.
2. Position $10$ is in $[10, 20)$ and position $30$ is in $[20, 30)$.

::solution
$$Q_1=10+\frac{10-5}{12}\cdot10=\frac{85}{6}\approx14.17,\qquad Q_3=20+\frac{30-17}{15}\cdot10=\frac{86}{3}\approx28.67.$$

To avoid rounding errors, we subtract the fractions: $\Delta_Q=\dfrac{86}{3}-\dfrac{85}{6}=\dfrac{87}{6}=14.5$.

**Answer.** $14.5$.
:::

:::exercise Multiple choice
$A$ and $B$ are independent events with $P(A)=0.4$ and $P(B)=0.5$. The probability $P(A\cup B)$ is

**A.** $0.9$. **B.** $0.2$. **C.** $0.7$. **D.** $0.3$.

::hint
**What you need:** $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ and $P(A\cap B)=P(A)P(B)$.

**Steps:**
1. Find $P(A\cap B)$.
2. Substitute into the addition rule.

::solution
$P(A\cap B)=0.2$, so $P(A\cup B)=0.4+0.5-0.2=0.7$. Option A treats $A$, $B$ as mutually exclusive; option B is $P(A\cap B)$; option D is $1-0.7$.

**Answer.** C.
:::

:::exercise Short answer
A box holds $10$ cards, $4$ of which are red. Two cards are taken one after the other, without replacement. Find the probability that both cards are red (to 2 decimal places).

::hint
**What you need:** $P(A\cap B)=P(A)\cdot P(B\mid A)$.

**Steps:**
1. $P(\text{first red})=\dfrac{4}{10}$.
2. After one red card is taken, $3$ of the $9$ remaining cards are red.

::solution
$P=\dfrac{4}{10}\cdot\dfrac39=\dfrac{2}{15}\approx0.133$.

**Answer.** $0.13$.
:::

:::exercise Short answer
In a company's inbox, $30\%$ of the emails are spam. A filter marks $90\%$ of spam emails as "spam" and also $5\%$ of normal emails. An email is marked "spam". Find the probability that it really is spam (to 2 decimal places).

::hint
**What you need:** the law of total probability and Bayes' theorem.

**Steps:**
1. Find $P(\text{marked})=0.3\cdot0.9+0.7\cdot0.05$.
2. Divide the branch "spam and marked" by that result.

::solution
$P(\text{marked})=0.27+0.035=0.305$, so $P(\text{spam}\mid\text{marked})=\dfrac{0.27}{0.305}\approx0.885$.

**Answer.** $0.89$.
:::

:::exercise Written answer
In a city, the probability of rain on a given day is $0.3$. If it rains, the probability that Minh is late for school is $0.4$; if it does not rain, that probability is $0.1$. Find the probability that Minh is late on a randomly chosen day. Given that Minh is late today, find the probability that it is raining today.

::hint
**What you need:** draw a tree diagram with the branches "rain" and "no rain".

**Steps:**
1. Use the law of total probability for the event "late".
2. Use Bayes' theorem for "rain given late".

::solution
$P(\text{late})=0.3\cdot0.4+0.7\cdot0.1=0.12+0.07=0.19$. Then $P(\text{rain}\mid\text{late})=\dfrac{0.12}{0.19}=\dfrac{12}{19}\approx0.63$.

**Answer.** $0.19$ and about $0.63$.
:::

:::exercise Short answer
Find the standard deviation of the following grouped data.

| Class | $[2, 4)$ | $[4, 6)$ | $[6, 8)$ | $[8, 10)$ |
|---|---|---|---|---|
| Frequency | $4$ | $8$ | $6$ | $2$ |

::hint
**What you need:** $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar x^2$.

**Steps:**
1. The midpoints are $3$, $5$, $7$, $9$; find $\bar x$.
2. Find the mean of the squares, subtract $\bar x^2$, then take the square root.

::solution
$\bar x=\dfrac{12+40+42+18}{20}=5.6$. $\dfrac{4\cdot9+8\cdot25+6\cdot49+2\cdot81}{20}=\dfrac{692}{20}=34.6$, so $s^2=34.6-31.36=3.24$ and $s=1.8$.

**Answer.** $1.8$.
:::

:::exercise Short answer (challenge)
A shop buys components from three suppliers X, Y, Z in the proportions $50\%$, $30\%$, $20\%$. The defect rates of X, Y, Z are $1\%$, $2\%$, $3\%$ respectively. A component chosen at random is found to be faulty. Find the probability that it came from Z (to 2 decimal places).

::hint
**What you need:** the law of total probability with the three cases X, Y, Z; Bayes' theorem.

**Steps:**
1. Find $P(\text{faulty})$ as the sum of three branches.
2. Divide the branch for Z by $P(\text{faulty})$.

::solution
$P(\text{faulty})=0.5\cdot0.01+0.3\cdot0.02+0.2\cdot0.03=0.005+0.006+0.006=0.017$. Then $P(Z\mid\text{faulty})=\dfrac{0.006}{0.017}\approx0.353$.

**Answer.** $0.35$.
:::

## Mini test

:::quiz
::mc
A set of grouped data has the class $[10, 20)$ with frequency $2$, $[20, 30)$ with frequency $5$ and $[30, 40)$ with frequency $3$. The mean of the data is
A. $25$.
B. $26$.
C. $86.67$.
D. $21$.
::key B
$\bar x=\dfrac{2\cdot15+5\cdot25+3\cdot35}{10}=26$. Option A is the midpoint of the middle class, option C divides by $3$, and option D uses the left endpoints.

::mc
For the data in the previous question, the class containing the upper quartile $Q_3$ is
A. $[10, 20)$.
B. $[20, 30)$.
C. $[30, 40)$.
D. It cannot be determined.
::key C
The cumulative frequencies are $2$, $7$, $10$ and $\dfrac{3n}{4}=7.5$; the first class with cumulative frequency $\ge7.5$ is $[30, 40)$. Option B is the class with the highest frequency.

::mc
Let $A$, $B$ be events with $P(B)>0$. The probability of $A$ given that $B$ has happened is
A. $P(A\mid B)=\dfrac{P(A\cap B)}{P(A)}$.
B. $P(A\mid B)=P(A)\cdot P(B)$.
C. $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$.
D. $P(A\mid B)=\dfrac{P(A)}{P(B)}$.
::key C
We restrict the sample space to $B$, so we divide by $P(B)$. Option A is $P(B\mid A)$; option B is only $P(A\cap B)$ when $A$ and $B$ are independent.

::mc
Given $P(A)=0.3$ and $P(B\mid A)=0.5$, the value of $P(A\cap B)$ is
A. $0.15$.
B. $0.8$.
C. $0.6$.
D. $0.2$.
::key A
$P(A\cap B)=P(A)\cdot P(B\mid A)=0.3\cdot0.5=0.15$. Option B adds the two numbers and option C divides $0.3$ by $0.5$.

::tf
A bag holds $5$ red and $3$ white marbles. Two marbles are taken one after the other, without replacement.
a) The probability that the first marble is red is $\dfrac58$.
b) The probability that the second marble is red, given that the first is red, is $\dfrac47$.
c) The probability that both marbles are red is $\dfrac{5}{14}$.
d) The probability that the second marble is red is $\dfrac47$.
::key T T T F
a) True. b) True: $4$ red marbles remain out of $7$. c) True: $\dfrac58\cdot\dfrac47=\dfrac{20}{56}=\dfrac5{14}$. d) False: by the law of total probability, $\dfrac58\cdot\dfrac47+\dfrac38\cdot\dfrac57=\dfrac{35}{56}=\dfrac58$.

::sa
A set of grouped data has the class $[0, 2)$ with frequency $3$, $[2, 4)$ with frequency $4$ and $[4, 6)$ with frequency $3$. Find its standard deviation (to 2 decimal places).
::key 1.55
The midpoints are $1$, $3$, $5$ and $\bar x=3$. $s^2=\dfrac{3\cdot4+4\cdot0+3\cdot4}{10}=2.4$, so $s=\sqrt{2.4}\approx1.549$, which rounds to $1.55$.

::sa
Given $P(B)=0.4$, $P(A\mid B)=0.5$ and $P(A\mid\overline B)=0.25$, find $P(B\mid A)$ (to 2 decimal places).
::key 0.57
$P(A)=0.4\cdot0.5+0.6\cdot0.25=0.35$, so $P(B\mid A)=\dfrac{0.2}{0.35}\approx0.571$, which rounds to $0.57$.
:::
