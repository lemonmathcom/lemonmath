---
title: Probability and random variables
description: AP Statistics Unit 2: probability rules, two-way tables, conditional probability and independence, discrete random variables, and binomial distributions.
minutes: 50
---

:::goals
- Use the complement, addition and multiplication rules, and two-way tables.
- Compute conditional probabilities and check whether two events are independent.
- Find and interpret the mean and standard deviation of a discrete random variable.
- Recognize binomial settings, compute binomial probabilities, and find the mean and standard deviation of a binomial distribution.
:::

Probability is the bridge from describing data to drawing conclusions from them: inference asks how likely a result would be if chance alone were at work. On the revised exam one set of three multiple-choice questions is about probability, random variables and distributions. Combining random variables and the geometric distribution have been removed from the course.

## Probability as long-run relative frequency

The **probability** of an outcome is the proportion of times it would occur in a very long series of repetitions of the chance process. In a short run the proportion can be far from the probability, but as the number of repetitions grows it settles down near it; this is the **law of large numbers**. A **simulation** imitates a chance process with random numbers, so that probabilities that are hard to compute can be estimated by the relative frequency of the outcome over many simulated trials. When you describe a simulation on the exam, say how the random numbers represent the outcomes, what you record in each trial, and how you use the results.

## Probability rules

For events $A$ and $B$:

| Rule | Formula |
|---|---|
| Complement | $P(A^C)=1-P(A)$ |
| General addition | $P(A\text{ or }B)=P(A)+P(B)-P(A\text{ and }B)$ |
| Conditional probability | $P(A\mid B)=\dfrac{P(A\text{ and }B)}{P(B)}$ |
| General multiplication | $P(A\text{ and }B)=P(A)\cdot P(B\mid A)$ |

$A$ and $B$ are **mutually exclusive** if they cannot happen together, $P(A\text{ and }B)=0$. They are **independent** if knowing that one happened does not change the probability of the other: $P(A\mid B)=P(A)$, or equivalently $P(A\text{ and }B)=P(A)\cdot P(B)$.

:::example A two-way table
A survey of $200$ students records grade and whether they play a sport.

| | Plays a sport | No sport | Total |
|---|---|---|---|
| Grade 10 | $45$ | $55$ | $100$ |
| Grade 11 | $60$ | $40$ | $100$ |
| Total | $105$ | $95$ | $200$ |

What is the probability that a randomly chosen grade 11 student plays a sport?
A. $0.30$
B. $0.525$
C. $0.571$
D. $0.60$

**Solution.** The condition "grade 11" restricts us to the $100$ grade 11 students, of whom $60$ play a sport.

So $P(\text{sport}\mid\text{grade 11})=\dfrac{60}{100}=0.60$, answer **D**. Option A is $P(\text{grade 11 and sport})=\dfrac{60}{200}$, and option C is $P(\text{grade 11}\mid\text{sport})=\dfrac{60}{105}$.

Since $P(\text{sport})=\dfrac{105}{200}=0.525\ne0.60$, the events "plays a sport" and "grade 11" are not independent.
:::

:::example The multiplication rule
In a town, $30\%$ of days are rainy, and on a rainy day the bus is late with probability $0.5$. What is the probability that a randomly chosen day is rainy and the bus is late?
A. $0.80$
B. $0.15$
C. $0.20$
D. $0.35$

**Solution.** By the general multiplication rule,
$$P(\text{rain and late})=P(\text{rain})\cdot P(\text{late}\mid\text{rain})=0.3\times0.5=0.15.$$

So the probability is $0.15$, answer **B**.
:::

## Discrete random variables

A **random variable** takes numerical values determined by a chance process. For a discrete random variable $X$ with values $x_i$ and probabilities $p_i$ (which sum to $1$):
$$\mu_X=\sum x_ip_i,\qquad \sigma_X=\sqrt{\sum(x_i-\mu_X)^2p_i}.$$
The mean $\mu_X$ is the long-run average value of $X$ over many repetitions; $\sigma_X$ is the typical distance of the values from that mean.

:::example Goals in a match
The number of goals $X$ a team scores in a match has this distribution.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $P(X=x)$ | $0.2$ | $0.4$ | $0.3$ | $0.1$ |

Find and interpret the mean and the standard deviation of $X$.

**Solution.** The mean is $\mu_X=0(0.2)+1(0.4)+2(0.3)+3(0.1)=0+0.4+0.6+0.3=1.3$.

For the standard deviation, the squared deviations weighted by the probabilities are $(0-1.3)^2(0.2)+(1-1.3)^2(0.4)+(2-1.3)^2(0.3)+(3-1.3)^2(0.1)=0.338+0.036+0.147+0.289=0.81$, so $\sigma_X=\sqrt{0.81}=0.9$.

So over many matches the team scores $1.3$ goals per match on average, and the number of goals typically varies from $1.3$ by about $0.9$ goals.
:::

## Binomial distributions

A **binomial setting** has four conditions (BINS): **B**inary outcomes (success or failure), **I**ndependent trials, a fixed **N**umber $n$ of trials, and the **S**ame probability $p$ of success on every trial. The number of successes $X$ then has a binomial distribution:
$$P(X=k)=\binom nk p^k(1-p)^{n-k},\qquad \mu_X=np,\qquad \sigma_X=\sqrt{np(1-p)}.$$
When sampling without replacement, trials are treated as independent if the sample is less than $10\%$ of the population.

:::example Free throws
A basketball player makes $70\%$ of her free throws, independently. She takes $10$ free throws. What is the probability that she makes exactly $8$?
A. $0.8000$
B. $0.0576$
C. $0.2335$
D. $0.3828$

**Solution.** The setting is binomial with $n=10$ and $p=0.7$: each shot is a success or a failure, shots are independent, the number of shots is fixed and $p$ is the same.

So
$$P(X=8)=\binom{10}{8}(0.7)^8(0.3)^2=45\times0.05765\times0.09\approx0.2335,$$
answer **C**. Option B leaves out the factor $\dbinom{10}{8}=45$.

Her mean number of successful shots is $np=7$, with standard deviation $\sqrt{10(0.7)(0.3)}=\sqrt{2.1}\approx1.449$.
:::

:::warning Common traps
- **Mutually exclusive is not independent:** if $P(A),P(B)>0$, mutually exclusive events are always dependent.
- **Conditional direction:** $P(A\mid B)$ and $P(B\mid A)$ have different denominators.
- **Binomial checklist:** state all four conditions before using the formula.
- **"At least" questions:** use the complement, $P(X\ge1)=1-P(X=0)$.
- **Interpreting the mean:** "on average over many repetitions", not "the value we expect each time".
:::

:::terms
- event / complement | biến cố / biến cố đối
- mutually exclusive | xung khắc
- independent | độc lập
- conditional probability | xác suất có điều kiện
- two-way table | bảng hai chiều
- random variable | biến ngẫu nhiên
- probability distribution | phân phối xác suất
- expected value (mean) | kì vọng (giá trị trung bình)
- binomial distribution | phân phối nhị thức
:::

## Similar exercises

:::exercise
A fair die is rolled $4$ times. Find the probability of getting at least one six.

::hint
**What you need:** the complement of "at least one six" is "no sixes".

::solution
The complement of "at least one six" is "no sixes in $4$ rolls". The rolls are independent, so $P(\text{no sixes})=\left(\dfrac56\right)^4\approx0.4823$.

Hence $P(\text{at least one six})=1-\left(\dfrac56\right)^4\approx0.5177$.

So the probability of at least one six is about $0.5177$.

**Answer.** About $0.5177$.
:::

:::exercise
For events $A$ and $B$, $P(A)=0.45$, $P(B)=0.35$ and $P(A\text{ and }B)=0.15$. Find $P(A\text{ or }B)$ and decide whether $A$ and $B$ are mutually exclusive.

::hint
**What you need:** the general addition rule; mutually exclusive means $P(A\text{ and }B)=0$.

::solution
By the general addition rule, $P(A\text{ or }B)=0.45+0.35-0.15=0.65$.

Since $P(A\text{ and }B)=0.15\ne0$, the events can happen together, so they are not mutually exclusive.

So $P(A\text{ or }B)=0.65$, and the events are not mutually exclusive.

**Answer.** $0.65$; no.
:::

:::exercise
For events $A$ and $B$, $P(A)=0.4$, $P(B)=0.5$ and $P(A\text{ and }B)=0.2$. Are $A$ and $B$ independent?

::hint
**What you need:** compare $P(A\text{ and }B)$ with $P(A)P(B)$.

::solution
Two events are independent exactly when the probability of both equals the product of their probabilities. If the events were independent, we would have $P(A\text{ and }B)=P(A)P(B)=0.4\times0.5=0.2$.

The given value $P(A\text{ and }B)=0.2$ matches, so equivalently $P(A\mid B)=\dfrac{0.2}{0.5}=0.4=P(A)$.

So $A$ and $B$ are independent.

**Answer.** Yes, independent.
:::

:::exercise
A random variable $X$ takes the values $1,2,3,4$ with probabilities $0.1$, $0.3$, $0.4$ and $0.2$. Find $\mu_X$ and $P(X\ge3)$.

::hint
**What you need:** $\mu_X=\sum x_ip_i$; add the probabilities of $3$ and $4$.

::solution
The mean is the sum of each value times its probability: $\mu_X=1(0.1)+2(0.3)+3(0.4)+4(0.2)=0.1+0.6+1.2+0.8=2.7$.

The event $X\ge3$ means $X=3$ or $X=4$, so $P(X\ge3)=0.4+0.2=0.6$.

So $\mu_X=2.7$ and $P(X\ge3)=0.6$.

**Answer.** $\mu_X=2.7$; $0.6$.
:::

:::exercise
A binomial random variable has $n=50$ and $p=0.2$. Find its mean and standard deviation.

::hint
**What you need:** $\mu=np$ and $\sigma=\sqrt{np(1-p)}$.

::solution
The number of successes is a binomial random variable, so we use the binomial formulas. The mean is $\mu=np=50\times0.2=10$.

The standard deviation is $\sigma=\sqrt{50\times0.2\times0.8}=\sqrt8\approx2.828$.

So the mean is $10$ successes and the standard deviation is about $2.828$.

**Answer.** $\mu=10$, $\sigma\approx2.828$.
:::

## Applied exercises

:::exercise
A machine produces parts, $5\%$ of which are defective, independently. An inspector checks $20$ parts.
a) Find the probability that none is defective.
b) Find the probability that at most one is defective.

::hint
**What you need:** binomial with $n=20$, $p=0.05$; "at most one" means $0$ or $1$.

::solution
The number of defective parts $X$ is binomial with $n=20$ and $p=0.05$, since parts are defective or not, independently, with a fixed number of checks.

a) $P(X=0)=(0.95)^{20}\approx0.3585$.

b) $P(X=1)=\dbinom{20}{1}(0.05)(0.95)^{19}\approx0.3774$, so $P(X\le1)=P(X=0)+P(X=1)\approx0.7358$ (the calculator's binomial cumulative probability gives the same value without rounding errors).

So the probabilities are about $0.3585$ and $0.7358$.

**Answer.** a) $0.3585$; b) $0.7358$.
:::

:::exercise
A disease affects $2\%$ of a population. A test is positive for $95\%$ of people who have the disease and for $10\%$ of people who do not. A randomly chosen person tests positive. What is the probability that the person has the disease?

::hint
**What you need:** $P(\text{disease}\mid\text{positive})=\dfrac{P(\text{disease and positive})}{P(\text{positive})}$.

::solution
By the multiplication rule, $P(\text{disease and positive})=0.02\times0.95=0.019$ and $P(\text{no disease and positive})=0.98\times0.10=0.098$.

So $P(\text{positive})=0.019+0.098=0.117$, and
$$P(\text{disease}\mid\text{positive})=\frac{0.019}{0.117}\approx0.1624.$$

So only about $16\%$ of people who test positive have the disease, because the disease is rare and false positives are common.

**Answer.** About $0.1624$.
:::

:::exercise
A game costs $2$ dollars to play. With probability $0.15$ you win a prize of $10$ dollars; otherwise you win nothing. Let $X$ be your net gain. Find $\mu_X$ and interpret it.

::hint
**What you need:** the net gain is $10-2=8$ when you win and $-2$ when you lose.

::solution
The net gain is $8$ dollars with probability $0.15$ and $-2$ dollars with probability $0.85$.

So $\mu_X=8(0.15)+(-2)(0.85)=1.2-1.7=-0.5$.

So over many plays, a player loses $0.50$ dollars per game on average.

**Answer.** $\mu_X=-0.5$ dollars.
:::

:::exercise Challenge
A student guesses randomly on $10$ multiple-choice questions, each with $4$ options. Find the probability that she gets at least $5$ correct.

::hint
**What you need:** binomial with $n=10$, $p=0.25$; $P(X\ge5)=1-P(X\le4)$.

::solution
The number of correct answers $X$ is binomial with $n=10$ and $p=0.25$, because each guess is right or wrong, guesses are independent, and $p=\dfrac14$ for each question.

By the complement rule and a calculator, $P(X\ge5)=1-P(X\le4)\approx1-0.9219=0.0781$.

So the probability of at least $5$ correct by pure guessing is about $0.0781$.

**Answer.** About $0.0781$.
:::

:::quiz
::mc
If $P(A)=0.35$, then $P(A^C)$ is
A. $0.35$
B. $0.65$
C. $1.35$
D. $0.1225$
::key B
$1-0.35=0.65$.

::mc
$A$ and $B$ are independent with $P(A)=0.3$ and $P(B)=0.4$. Then $P(A\text{ and }B)$ is
A. $0.7$
B. $0.1$
C. $0.12$
D. $0.58$
::key C
$0.3\times0.4=0.12$.

::mc
The mean of a binomial distribution with $n=20$ and $p=0.3$ is
A. $6$
B. $4.2$
C. $2.05$
D. $0.3$
::key A
$np=20\times0.3=6$.

::mc
Which situation is NOT a binomial setting?
A. Counting heads in $12$ coin tosses
B. Counting correct guesses on $8$ true-false questions
C. Counting defective items in a random sample of $15$ from a large batch
D. Counting the rolls of a die needed to get the first six
::key D
The number of trials is not fixed.

::tf
A random variable $X$ takes values $0$, $1$, $2$ with probabilities $0.5$, $0.3$ and $0.2$. Decide whether each statement is true or false.
a) The probabilities sum to $1$.
b) $P(X\ge1)=0.5$.
c) $\mu_X=0.7$.
d) $\mu_X$ must be one of the values of $X$.
::key T T T F
The mean $0.7$ is not a possible value.

::sa
For the random variable in the previous question, find $P(X=2\mid X\ge1)$.
::key 0.4
$\dfrac{0.2}{0.5}=0.4$.

::sa
If $P(A\text{ and }B)=0.12$ and $P(B)=0.4$, find $P(A\mid B)$.
::key 0.3
$\dfrac{0.12}{0.4}=0.3$.
:::
