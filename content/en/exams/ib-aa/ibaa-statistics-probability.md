---
title: Statistics and probability
description: IB Maths AA topic 4: regression and correlation, probability rules, conditional probability, discrete distributions, binomial and normal distributions.
minutes: 45
---

:::goals
- Use a GDC for summary statistics and the regression line of $y$ on $x$, and interpret $r$, the slope and predictions.
- Apply the addition rule, conditional probability and independence, with Venn diagrams, tree diagrams and tables.
- Work with discrete random variables and their expected value.
- Calculate binomial and normal probabilities, including inverse normal problems.
:::

Topic 4 is mostly a Paper 2 topic: the GDC does the arithmetic, and the marks go to choosing the right model, entering the right numbers and stating the answer in context. Two habits pay off. First, define the random variable in words and write its distribution, for example "$X\sim B(10,0.3)$, where $X$ is the number of defective items". Second, write the probability statement you are calculating, such as $P(X\ge2)$, before the number.

## Data and regression

Your GDC gives the mean, the standard deviation, the quartiles and the regression line. The **Pearson correlation coefficient** $r$ measures the strength of a linear relationship: close to $1$ or $-1$ means strong, close to $0$ means weak. Use the regression line of $y$ on $x$ to predict $y$ from $x$, and only within the range of the data: **interpolation** is reasonable, **extrapolation** is not.

:::example A regression line
| $x$ | $2$ | $4$ | $6$ | $8$ | $10$ |
|---|---|---|---|---|---|
| $y$ | $5$ | $8$ | $11$ | $13$ | $17$ |

(a) Write down the equation of the regression line of $y$ on $x$ and the value of $r$. [3 marks]
(b) Use your line to estimate $y$ when $x=7$. [2 marks]
(c) Explain why the line should not be used to estimate $y$ when $x=20$. [1 mark]

**Solution.** (a) $y=1.45x+2.1$ and $r\approx0.996$: a very strong positive linear correlation.

(b) $1.45(7)+2.1\approx12.3$.

(c) $x=20$ is far outside the data range ($2\le x\le10$): this is extrapolation, and the trend may not continue.
:::

## Probability rules

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}.$$
$A$ and $B$ are **mutually exclusive** if $P(A\cap B)=0$, and **independent** if $P(A\cap B)=P(A)P(B)$, equivalently $P(A\mid B)=P(A)$.

:::example Testing for independence
$P(A)=0.5$, $P(B)=0.4$ and $P(A\cup B)=0.7$.
(a) Find $P(A\cap B)$. [2 marks]
(b) Find $P(A\mid B)$. [2 marks]
(c) Are $A$ and $B$ independent? Justify. [2 marks]

**Solution.** (a) $0.7=0.5+0.4-P(A\cap B)$, so $P(A\cap B)=0.2$.

(b) $\dfrac{0.2}{0.4}=0.5$.

(c) Yes: $P(A)P(B)=0.5\times0.4=0.2=P(A\cap B)$. (Equivalently, $P(A\mid B)=P(A)$.)
:::

:::example Without replacement
A bag contains $5$ red and $3$ blue counters. Two counters are taken without replacement. Find the probability that they are different colors. [4 marks]

**Solution.** Red then blue, or blue then red:
$$\frac58\cdot\frac37+\frac38\cdot\frac57=\frac{30}{56}=\frac{15}{28}.$$
A tree diagram makes the second-stage probabilities, with denominator $7$, easy to get right.
:::

## Discrete random variables

A probability distribution lists each value $x$ with its probability; the probabilities add up to $1$. The **expected value** is $E(X)=\sum xP(X=x)$. A game is **fair** when the expected gain is $0$.

:::example Finding k and the expected value
$P(X=x)=kx$ for $x=1,2,3,4$.
(a) Find $k$. [2 marks]
(b) Find $E(X)$. [2 marks]

**Solution.** (a) $k(1+2+3+4)=1$, so $k=\dfrac{1}{10}$.

(b) $E(X)=\dfrac{1\cdot1+2\cdot2+3\cdot3+4\cdot4}{10}=\dfrac{30}{10}=3$.
:::

## Binomial and normal distributions

**Binomial:** $X\sim B(n,p)$ counts successes in $n$ independent trials with the same probability $p$. $E(X)=np$ and $\mathrm{Var}(X)=np(1-p)$. On the GDC, the probability of exactly $k$ successes is the binomial pdf, and the probability of at most $k$ is the binomial cdf. For "at least", use the complement.

**Normal:** $X\sim N\left(\mu,\sigma^2\right)$ is a symmetric bell curve. The GDC gives $P(a<X<b)$ directly; the **inverse normal** finds the value with a given probability below it.

:::example A binomial model
Each seed in a packet germinates with probability $0.3$, independently. Ten seeds are planted. Find the probability that:
(a) exactly $3$ germinate; [2 marks]
(b) at least $2$ germinate. [3 marks]

**Solution.** Let $X$ be the number that germinate: $X\sim B(10,0.3)$.

(a) $P(X=3)\approx0.267$.

(b) $P(X\ge2)=1-P(X\le1)\approx1-0.149=0.851$.
:::

:::example A normal model and its inverse
The heights of students in a school are normally distributed with mean $170$ cm and standard deviation $8$ cm.
(a) Find the probability that a student is taller than $180$ cm. [2 marks]
(b) $90\%$ of students are shorter than $h$ cm. Find $h$. [2 marks]

**Solution.** Let $H\sim N\left(170,8^2\right)$.

(a) $P(H>180)\approx0.106$.

(b) $P(H<h)=0.9$, so by the inverse normal, $h\approx180$ cm (more precisely $180.25$).
:::

:::warning Common traps
- **Variance or standard deviation.** $N\left(170,8^2\right)$ has $\sigma=8$; enter $8$ in the GDC, not $64$.
- **"At least" and "more than".** For a binomial, $P(X>2)=1-P(X\le2)$, but $P(X\ge2)=1-P(X\le1)$.
- **Mutually exclusive is not independent.** Two events with positive probabilities that are mutually exclusive are never independent.
- **Conditional probability upside down.** $P(A\mid B)$ divides by $P(B)$, the condition.
- **Extrapolating** with a regression line, or using $y$ on $x$ to predict $x$.
- **No context.** Write the distribution and the probability statement before the number.
:::

:::terms
- regression line, correlation coefficient | đường hồi quy, hệ số tương quan
- interpolation, extrapolation | nội suy, ngoại suy
- mutually exclusive, independent | xung khắc, độc lập
- conditional probability | xác suất có điều kiện
- tree diagram, Venn diagram | sơ đồ cây, biểu đồ Venn
- random variable, expected value | biến ngẫu nhiên, kì vọng
- binomial distribution | phân phối nhị thức
- normal distribution, inverse normal | phân phối chuẩn, tra ngược phân phối chuẩn
:::

## Similar exercises

:::exercise A missing value
Five numbers have mean $12$. A sixth number is added and the mean becomes $13$. Find the sixth number. [3 marks]

::hint
**What you need:** total $=$ mean $\times$ count.

::solution
The totals are $5(12)=60$ and $6(13)=78$, so the sixth number is $18$.
:::

:::exercise Independent events
$A$ and $B$ are independent, with $P(A)=0.3$ and $P(B)=0.6$. Find $P(A\cup B)$. [3 marks]

::hint
**What you need:** $P(A\cap B)=P(A)P(B)$.

::solution
$0.3+0.6-0.18=0.72$.
:::

:::exercise Expected value from a table
| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $P(X=x)$ | $0.2$ | $0.5$ | $0.3$ |

Find $E(X)$. [2 marks]

::hint
**What you need:** $\sum xP(X=x)$.

::solution
$0(0.2)+1(0.5)+2(0.3)=1.1$.
:::

:::exercise Binomial probability
A fair coin is tossed $8$ times. Find the probability of exactly $4$ heads. [2 marks]

::hint
**What you need:** $X\sim B(8,0.5)$.

::solution
$\dbinom84(0.5)^8=\dfrac{70}{256}\approx0.273$.
:::

:::exercise Normal probability
$X\sim N\left(50,4^2\right)$. Find $P(46<X<58)$. [2 marks]

::hint
**What you need:** the normal cdf with lower bound $46$, upper bound $58$, $\mu=50$, $\sigma=4$.

::solution
$P(46<X<58)\approx0.819$.
:::

## Application exercises

:::exercise Quality control
$2\%$ of the light bulbs made in a factory are defective. A random sample of $20$ bulbs is checked. Find the probability that at most one bulb is defective. [3 marks]

::hint
**What you need:** $X\sim B(20,0.02)$ and $P(X\le1)$.

::solution
$P(X\le1)\approx0.940$.
:::

:::exercise Grade boundaries
Scores on a test are normally distributed with mean $65$ and standard deviation $12$. The top $10\%$ of students receive the highest grade. Find the lowest score that receives this grade. [3 marks]

::hint
**What you need:** $P(S>k)=0.1$ means $P(S<k)=0.9$.

::solution
Inverse normal: $k\approx80.4$.
:::

:::exercise A two-way table
A survey of $200$ students records whether they studied more than $5$ hours and whether they passed.

| | Passed | Failed |
|---|---|---|
| More than $5$ hours | $90$ | $30$ |
| $5$ hours or less | $50$ | $30$ |

(a) Find the probability that a student passed, given that they studied more than $5$ hours. [2 marks]
(b) Find the probability that a student studied more than $5$ hours, given that they passed. [2 marks]

::hint
**What you need:** the condition decides the denominator: a row total in (a), a column total in (b).

::solution
(a) $\dfrac{90}{120}=0.75$.

(b) $\dfrac{90}{140}\approx0.643$. The two answers differ: $P(A\mid B)\ne P(B\mid A)$ in general.
:::

:::exercise Challenge: a fair game
A player pays $k$ dollars to roll a fair six-sided die and wins, in dollars, the number shown. Find $k$ so that the game is fair. [3 marks]

::hint
**What you need:** expected winnings equal the cost.

::solution
$E(\text{winnings})=\dfrac{1+2+3+4+5+6}{6}=3.5$, so $k=3.5$.
:::

:::quiz
::mc
$A$ and $B$ are mutually exclusive, with $P(A)=0.4$ and $P(B)=0.5$. What is $P(A\cup B)$?
A. $0.2$
B. $0.7$
C. $0.9$
D. $1$
::key C
For mutually exclusive events, $P(A\cup B)=P(A)+P(B)$.

::mc
$X\sim B(5,0.2)$. What is $E(X)$?
A. $1$
B. $0.2$
C. $0.8$
D. $5$
::key A
$np=5(0.2)=1$.

::mc
$X\sim N\left(\mu,\sigma^2\right)$. What is $P(X<\mu)$?
A. $0.68$
B. $0.95$
C. $1$
D. $0.5$
::key D
The normal distribution is symmetric about its mean.

::mc
A random variable takes the values $1$, $2$, $3$ with probabilities $0.2$, $k$, $0.5$. What is $k$?
A. $0.5$
B. $0.3$
C. $0.7$
D. $0.2$
::key B
$0.2+k+0.5=1$.

::tf
$X\sim N\left(100,15^2\right)$.
a) $P(X<100)=0.5$.
b) $P(X>115)=P(X<85)$.
c) $P(X>130)>0.05$.
d) The variance of $X$ is $15$.
::key T T F F
a) True: symmetry. b) True: symmetry. c) False: $P(X>130)\approx0.0228$. d) False: the variance is $225$.

::sa
A fair six-sided die is rolled. Find the expected score.
::key 3.5
$\dfrac{21}{6}=3.5$.

::sa
A fair coin is tossed twice. Find the probability of two heads.
::key 0.25
$0.5^2=0.25$.
:::
