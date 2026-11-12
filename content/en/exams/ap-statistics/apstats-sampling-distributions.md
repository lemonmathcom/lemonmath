---
title: Normal models and sampling distributions
description: AP Statistics Unit 2: normal distributions and the empirical rule, normal calculations, and the sampling distributions of a sample proportion and a sample mean.
minutes: 50
---

:::goals
- Use the empirical rule and z-scores to find areas under a normal curve, and find values from percentiles.
- Explain what a sampling distribution is, and the difference between bias and variability of a statistic.
- Describe the sampling distribution of a sample proportion $\hat p$: centre, spread and shape, with the conditions that justify them.
- Describe the sampling distribution of a sample mean $\bar x$, using the central limit theorem when needed.
:::

Inference rests on one idea: a statistic varies from sample to sample in a predictable way. If we know how $\hat p$ or $\bar x$ would vary when the population value is known, we can judge whether an observed result is surprising, and estimate the unknown value with a margin of error. This lesson builds that idea, starting from the normal model that describes many of these distributions.

## Normal distributions

A **normal distribution** $N(\mu,\sigma)$ is symmetric, single-peaked and bell-shaped, with mean $\mu$ and standard deviation $\sigma$. The **empirical rule** says that about $68\%$, $95\%$ and $99.7\%$ of the values lie within $1$, $2$ and $3$ standard deviations of the mean.

:::graph Heights $N(165, 6)$ in cm: about $95\%$ lie between $153$ and $177$
alt: A bell-shaped curve centred at 165 with the area between 153 and 177 shaded
x: 145..185
y: 0..8
shape: free
plot: 6.649*exp(-((x-165)/6)^2/2) ; 145..185
fill: 6.649*exp(-((x-165)/6)^2/2) ; 0 ; 153..177
vline: 165 ; dashed
:::

For other areas, standardize with $z=\dfrac{x-\mu}{\sigma}$ and use the calculator or the table: the area to the left of $z$ is the proportion of values below $x$. To find a value from a percentile, find the $z$ with that area to its left, then $x=\mu+z\sigma$. Always show the distribution, the boundary and the direction, for example "$N(165,6)$, $P(X>175)$".

:::example The empirical rule
Heights of adult women in a region are approximately normal with mean $165$ cm and standard deviation $6$ cm. About what percent of these women are between $153$ cm and $177$ cm tall?
A. $68\%$
B. $99.7\%$
C. $95\%$
D. $47.5\%$

**Solution.** The boundaries are $153=165-2(6)$ and $177=165+2(6)$, that is two standard deviations below and above the mean.

By the empirical rule, about $95\%$ of the values in a normal distribution lie within two standard deviations of the mean.

So about $95\%$ of the women are between $153$ and $177$ cm tall, answer **C**.
:::

:::example Normal calculations
For the same heights, find the proportion of women taller than $175$ cm, and the height of the $90$th percentile.

**Solution.** For $175$ cm, $z=\dfrac{175-165}{6}\approx1.667$. The area to the right of $z=1.667$ is $P(Z>1.667)\approx0.0478$.

For the $90$th percentile, the $z$-value with area $0.90$ to its left is $z\approx1.2816$, so the height is $165+1.2816(6)\approx172.69$ cm.

So about $4.78\%$ of the women are taller than $175$ cm, and the $90$th percentile is about $172.7$ cm.
:::

## Sampling distributions

A **sampling distribution** is the distribution of the values a statistic takes in all possible samples of the same size from the same population. A statistic is an **unbiased estimator** if the centre of its sampling distribution equals the parameter. Its **variability** is measured by the standard deviation of the sampling distribution, and it decreases as the sample size increases.

### The sample proportion $\hat p$

For random samples of size $n$ from a population with proportion of successes $p$:

| Feature | Value | Condition |
|---|---|---|
| Centre | $\mu_{\hat p}=p$ | always: $\hat p$ is unbiased |
| Spread | $\sigma_{\hat p}=\sqrt{\dfrac{p(1-p)}{n}}$ | $10\%$ condition: $n\le0.1N$ |
| Shape | approximately normal | large counts: $np\ge10$ and $n(1-p)\ge10$ |

:::example A sample proportion
In a large city, $60\%$ of adults use public transport. A random sample of $150$ adults is taken. What is the probability that less than $55\%$ of the sample use public transport?
A. $0.1056$
B. $0.0500$
C. $0.3944$
D. $0.8944$

**Solution.** The centre is $\mu_{\hat p}=0.6$ and the spread is $\sigma_{\hat p}=\sqrt{\dfrac{0.6(0.4)}{150}}=\sqrt{0.0016}=0.04$; the $10\%$ condition holds because the city has more than $1500$ adults.

The large counts are $150(0.6)=90$ and $150(0.4)=60$, both at least $10$, so the distribution of $\hat p$ is approximately normal.

Then $z=\dfrac{0.55-0.6}{0.04}=-1.25$ and $P(\hat p<0.55)=P(Z<-1.25)\approx0.1056$, answer **A**.
:::

### The sample mean $\bar x$

For random samples of size $n$ from a population with mean $\mu$ and standard deviation $\sigma$:
$$\mu_{\bar x}=\mu,\qquad \sigma_{\bar x}=\frac{\sigma}{\sqrt n}\ \ (\text{if }n\le0.1N).$$
If the population is normal, so is the distribution of $\bar x$. Otherwise, the **central limit theorem** says that for a large sample, usually $n\ge30$, the distribution of $\bar x$ is approximately normal whatever the shape of the population.

:::example A sample mean
The time customers spend in a shop has mean $50$ minutes and standard deviation $12$ minutes. For a random sample of $36$ customers, find the probability that their mean time is more than $53$ minutes.

**Solution.** The centre is $\mu_{\bar x}=50$ and the spread is $\sigma_{\bar x}=\dfrac{12}{\sqrt{36}}=2$ minutes, assuming the shop has more than $360$ customers.

Since $n=36\ge30$, the central limit theorem says $\bar x$ is approximately normal, even if individual times are skewed.

So $z=\dfrac{53-50}{2}=1.5$ and $P(\bar x>53)=P(Z>1.5)\approx0.0668$.
:::

:::warning Common traps
- **Individual or mean?** Use $\sigma$ for one individual and $\dfrac{\sigma}{\sqrt n}$ for a sample mean.
- **Conditions:** state the $10\%$ condition and the large counts (for $\hat p$) or the central limit theorem (for $\bar x$).
- **The CLT is about $\bar x$:** a larger sample does not make the population or the sample data normal.
- **Bias versus variability:** a larger sample reduces variability, not bias.
- **Notation:** write the distribution and the probability, not just calculator commands.
:::

:::terms
- normal distribution | phân phối chuẩn
- empirical rule | quy tắc 68-95-99,7
- standardize | chuẩn hoá
- sampling distribution | phân phối mẫu
- unbiased estimator | ước lượng không chệch
- sample proportion / sample mean | tỉ lệ mẫu / trung bình mẫu
- large counts condition | điều kiện số đếm đủ lớn
- central limit theorem | định lí giới hạn trung tâm
:::

## Similar exercises

:::exercise
Scores on a test are approximately normal with mean $70$ and standard deviation $8$. Between which two scores do about the middle $68\%$ of the scores lie?

::hint
**What you need:** $68\%$ lie within one standard deviation of the mean.

::solution
By the empirical rule, about $68\%$ of the values lie within one standard deviation of the mean.

The boundaries are $70-8=62$ and $70+8=78$.

So about the middle $68\%$ of the scores lie between $62$ and $78$.

**Answer.** Between $62$ and $78$.
:::

:::exercise
For the same test, find the proportion of students who score below $60$.

::hint
**What you need:** $z=\dfrac{60-70}{8}$, then the area to the left.

::solution
The scores are approximately $N(70,8)$, and we need $P(X<60)$. Standardizing, $z=\dfrac{60-70}{8}=-1.25$.

The area to the left of $z=-1.25$ is $P(Z<-1.25)\approx0.1056$.

So about $10.56\%$ of the students score below $60$.

**Answer.** About $0.1056$.
:::

:::exercise
In a population, $30\%$ of people prefer tea. For random samples of $210$ people, find the mean and standard deviation of $\hat p$, and check whether its distribution is approximately normal.

::hint
**What you need:** $\sigma_{\hat p}=\sqrt{\dfrac{p(1-p)}{n}}$; large counts $np$ and $n(1-p)$.

::solution
The centre is $\mu_{\hat p}=p=0.3$, and the spread is $\sigma_{\hat p}=\sqrt{\dfrac{0.3(0.7)}{210}}=\sqrt{0.001}\approx0.0316$, assuming the population has more than $2100$ people.

The large counts are $210(0.3)=63$ and $210(0.7)=147$, both at least $10$, so the distribution of $\hat p$ is approximately normal.

So $\hat p$ has mean $0.3$ and standard deviation about $0.0316$, and is approximately normal.

**Answer.** $0.3$; $0.0316$; approximately normal.
:::

:::exercise
How must the sample size change to halve the standard deviation of $\bar x$?

::hint
**What you need:** $\sigma_{\bar x}=\dfrac{\sigma}{\sqrt n}$.

::solution
The standard deviation of $\bar x$ is $\dfrac{\sigma}{\sqrt n}$, which is inversely proportional to $\sqrt n$.

To halve it, $\sqrt n$ must double, so $n$ must be multiplied by $4$.

So the sample size must be quadrupled.

**Answer.** Multiply $n$ by $4$.
:::

:::exercise
A statistic has a sampling distribution centred well above the parameter, with a very small spread. Is it biased? Is it a good estimator?

::hint
**What you need:** bias is about the centre; variability is about the spread.

::solution
The centre of the sampling distribution is not equal to the parameter, so the statistic is biased.

Its low variability means its values are consistently close to each other, but they are consistently too high. A small spread does not fix the bias.

So the statistic is biased with low variability, and it is not a good estimator.

**Answer.** Biased; not a good estimator.
:::

## Applied exercises

:::exercise
A machine fills bottles with an amount that is approximately normal with mean $500$ ml and standard deviation $4$ ml. What proportion of bottles contain between $495$ and $505$ ml?

::hint
**What you need:** $z=\pm1.25$.

::solution
Standardizing the boundaries, $z=\dfrac{495-500}{4}=-1.25$ and $z=\dfrac{505-500}{4}=1.25$.

The area between them is $P(-1.25<Z<1.25)=1-2(0.1056)\approx0.7887$.

So about $78.87\%$ of bottles contain between $495$ and $505$ ml.

**Answer.** About $0.7887$.
:::

:::exercise
In an election, $52\%$ of voters support candidate A. A poll takes a random sample of $400$ voters. Find the probability that the poll shows less than $50\%$ support for A.

::hint
**What you need:** $\sigma_{\hat p}=\sqrt{\dfrac{0.52(0.48)}{400}}$.

::solution
The centre is $0.52$ and the spread is $\sigma_{\hat p}=\sqrt{\dfrac{0.52(0.48)}{400}}\approx0.02498$; the $10\%$ condition holds for a large electorate.

The large counts are $400(0.52)=208$ and $400(0.48)=192$, so $\hat p$ is approximately normal.

Then $z=\dfrac{0.50-0.52}{0.02498}\approx-0.80$ and $P(\hat p<0.50)\approx0.2117$.

So there is about a $21\%$ chance that the poll wrongly suggests A is behind.

**Answer.** About $0.2117$.
:::

:::exercise
The weights of parcels at a post office are skewed right with mean $3.2$ kg and standard deviation $1.5$ kg. Find the probability that a random sample of $50$ parcels has a mean weight above $3.5$ kg, and explain why a normal model can be used.

::hint
**What you need:** the central limit theorem with $n=50$.

::solution
The centre is $\mu_{\bar x}=3.2$ and the spread is $\sigma_{\bar x}=\dfrac{1.5}{\sqrt{50}}\approx0.2121$ kg.

Although individual weights are skewed, $n=50\ge30$, so by the central limit theorem $\bar x$ is approximately normal.

Then $z=\dfrac{3.5-3.2}{0.2121}\approx1.414$ and $P(\bar x>3.5)\approx0.0786$.

So the probability is about $0.0786$.

**Answer.** About $0.0786$.
:::

:::exercise Challenge
How large a random sample is needed so that the standard deviation of $\hat p$ is at most $0.02$, whatever the value of $p$?

::hint
**What you need:** $p(1-p)$ is largest when $p=0.5$.

::solution
The product $p(1-p)$ is at most $0.25$, reached at $p=0.5$, so $\sigma_{\hat p}\le\sqrt{\dfrac{0.25}{n}}$ for every $p$.

We need $\sqrt{\dfrac{0.25}{n}}\le0.02$, that is $\dfrac{0.25}{n}\le0.0004$, so $n\ge625$.

So a sample of at least $625$ is needed.

**Answer.** $n\ge625$.
:::

:::quiz
::mc
In a normal distribution, about $99.7\%$ of the values lie within how many standard deviations of the mean?
A. $1$
B. $2$
C. $2.5$
D. $3$
::key D
The empirical rule: $68$, $95$, $99.7$.

::mc
A population has $\sigma=10$. For random samples of size $25$, the standard deviation of $\bar x$ is
A. $2$
B. $10$
C. $0.4$
D. $50$
::key A
$\dfrac{10}{\sqrt{25}}=2$.

::mc
For the sampling distribution of $\hat p$ to be approximately normal, we check that
A. $n\ge30$
B. $np\ge10$ and $n(1-p)\ge10$
C. the population is normal
D. $p=0.5$
::key B
The large counts condition.

::mc
Increasing the sample size
A. reduces the bias of a statistic
B. makes the population normal
C. reduces the variability of a statistic
D. changes the parameter
::key C
The spread decreases as $n$ increases.

::tf
A population has mean $40$ and standard deviation $9$. Random samples of size $81$ are taken. Decide whether each statement is true or false.
a) The mean of $\bar x$ is $40$.
b) The standard deviation of $\bar x$ is $1$.
c) The distribution of $\bar x$ is approximately normal.
d) The individual values must be normal.
::key T T T F
The central limit theorem applies to $\bar x$, not to individuals.

::sa
A test has mean $100$ and standard deviation $15$. Find the z-score of $130$.
::key 2
$\dfrac{130-100}{15}=2$.

::sa
About what percent of a normal distribution lies within one standard deviation of the mean?
::key 68
The empirical rule.
:::
