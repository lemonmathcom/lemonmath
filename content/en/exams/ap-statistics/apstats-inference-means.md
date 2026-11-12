---
title: Inference for means
description: AP Statistics Unit 4: t distributions, confidence intervals and significance tests for one mean, paired data and a difference of two means.
minutes: 55
---

:::goals
- Explain why inference for means uses $t$ distributions, and find critical values with the correct degrees of freedom.
- Construct and interpret a one-sample $t$ interval and carry out a one-sample $t$ test for $\mu$.
- Recognize paired data and analyse them with one-sample procedures on the differences.
- Construct intervals and carry out tests for a difference of two means $\mu_1-\mu_2$.
- Check the conditions, including the normal/large sample condition.
:::

Inference for means follows the same four steps as inference for proportions: state, plan, do, conclude. The new ingredient is the $t$ distribution, needed because we almost never know the population standard deviation $\sigma$ and must estimate it with the sample standard deviation $s$. The most common exam mistake in this unit is not the arithmetic but choosing the wrong procedure, especially treating paired data as two independent samples.

## $t$ distributions

When $\sigma$ is replaced by $s$, the standardized statistic
$$t=\frac{\bar x-\mu}{s/\sqrt n}$$
follows a **$t$ distribution** with $n-1$ **degrees of freedom** (df). A $t$ distribution is symmetric and bell-shaped like the normal, but has heavier tails, so its critical values are larger; as df increase it approaches the standard normal. The quantity $\dfrac{s}{\sqrt n}$ is the **standard error** of $\bar x$.

**Conditions** for one-sample procedures:

| Condition | Check |
|---|---|
| Random | random sample or random assignment |
| $10\%$ | $n\le0.1N$ when sampling without replacement |
| Normal/large sample | population normal, or $n\ge30$, or (for small $n$) a graph of the data shows no strong skew or outliers |

## One-sample $t$ interval and test

- **Interval:** $\bar x\pm t^*\dfrac{s}{\sqrt n}$, with $t^*$ from df $=n-1$.
- **Test of $H_0:\mu=\mu_0$:** $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$, P-value from the $t$ distribution with df $=n-1$.

:::example A one-sample interval
A random sample of $16$ students at a school has mean score $82.5$ and standard deviation $6$ on a reading test, and a dotplot of the scores shows no strong skew or outliers. Construct a $95\%$ confidence interval for the mean score of all students at the school.

**Solution.** *State:* $\mu$ is the true mean reading score of all students at the school; $95\%$ confidence.

*Plan:* one-sample $t$ interval. Random sample; $16$ is less than $10\%$ of the students; $n<30$, but the dotplot shows no strong skew or outliers.

*Do:* df $=15$, so $t^*\approx2.131$. The standard error is $\dfrac{6}{\sqrt{16}}=1.5$, so the interval is $82.5\pm2.131(1.5)=82.5\pm3.197$, that is $(79.30,\ 85.70)$.

*Conclude:* we are $95\%$ confident that the interval from $79.30$ to $85.70$ points captures the true mean reading score of all students at the school.
:::

:::example A one-sample test
A machine is supposed to fill bottles with a mean of $500$ ml. A random sample of $25$ bottles has mean $497.8$ ml and standard deviation $5$ ml, and the amounts show no strong skew. At $\alpha=0.05$, is there convincing evidence that the true mean is less than $500$ ml?
A. Yes, because the P-value is about $0.019$.
B. No, because the P-value is about $0.019$.
C. Yes, because the P-value is about $0.038$, using a two-sided test.
D. No, because $497.8$ is close to $500$.

**Solution.** The hypotheses are $H_0:\mu=500$ and $H_a:\mu<500$, where $\mu$ is the true mean fill. The test statistic is
$$t=\frac{497.8-500}{5/\sqrt{25}}=\frac{-2.2}{1}=-2.2,$$
with df $=24$, so the P-value is $P(t<-2.2)\approx0.019$.

Since $0.019<0.05$, we reject $H_0$: there is convincing evidence that the machine's mean fill is less than $500$ ml.

So the answer is **A**. Option C doubles the P-value although the alternative is one-sided.
:::

## Paired data

Data are **paired** when each observation in one set is naturally matched with one in the other: the same subjects measured twice, or matched pairs in an experiment. Compute the **differences** within each pair, then use one-sample $t$ procedures on the differences, with parameter $\mu_{\text{diff}}$.

:::example Before and after
Eight students took a test before and after a short course. Their score differences (after minus before) have mean $3.5$ points and standard deviation $4.2$ points, with no strong skew or outliers. The students were a random sample from a large school. Is there convincing evidence at $\alpha=0.05$ that the course increases scores on average?

**Solution.** *State:* $H_0:\mu_{\text{diff}}=0$ and $H_a:\mu_{\text{diff}}>0$, where $\mu_{\text{diff}}$ is the true mean difference (after minus before) for students at the school; $\alpha=0.05$.

*Plan:* paired $t$ test. Random sample; $8$ is less than $10\%$ of the students; the differences show no strong skew or outliers.

*Do:* $t=\dfrac{3.5-0}{4.2/\sqrt8}\approx2.357$ with df $=7$, so the P-value is about $0.0253$.

*Conclude:* since $0.0253<0.05$, we reject $H_0$. There is convincing evidence that, on average, students at the school score higher after the course than before. Without a control group and random assignment, however, we cannot be sure the course itself caused the increase.
:::

## Two independent samples

For two independent random samples or two groups in a randomized experiment:

- **Interval:** $(\bar x_1-\bar x_2)\pm t^*\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}$.
- **Test of $H_0:\mu_1-\mu_2=0$:** $t=\dfrac{\bar x_1-\bar x_2}{\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}}$.

Use the degrees of freedom given by the calculator, or the conservative choice df $=$ the smaller of $n_1-1$ and $n_2-1$. Check the normal/large sample condition for **each** sample.

:::example Two classes
A random sample of $30$ students from school A has mean study time $72$ minutes per day with $s=10$, and an independent random sample of $35$ students from school B has mean $66$ minutes with $s=12$. A test of $H_0:\mu_A-\mu_B=0$ against $H_a:\mu_A-\mu_B\ne0$ is carried out. What are the test statistic and the approximate P-value?
A. $t\approx0.60$, P-value $\approx0.55$
B. $t\approx2.20$, P-value $\approx0.016$
C. $t\approx2.20$, P-value $\approx0.032$
D. $t\approx6.00$, P-value $\approx0.000$

**Solution.** The standard error is $\sqrt{\dfrac{10^2}{30}+\dfrac{12^2}{35}}=\sqrt{3.333+4.114}\approx2.729$, so
$$t=\frac{72-66}{2.729}\approx2.20.$$

With the calculator's df $\approx63$, the two-sided P-value is $2P(t>2.20)\approx0.032$.

So $t\approx2.20$ and the P-value is about $0.032$, answer **C**. Option B gives only one tail, and option D forgets to divide by the standard error.
:::

:::warning Common traps
- **Paired or two-sample?** Same subjects or matched pairs means paired: analyse the differences.
- **$z$ or $t$?** For means with $s$ estimated from the data, use $t$.
- **Normal/large sample:** for small samples, say what the graph shows: "no strong skew or outliers".
- **Degrees of freedom:** $n-1$ for one sample or paired data.
- **One- or two-sided:** match the P-value to $H_a$.
:::

:::terms
- t distribution | phân phối t (Student)
- degrees of freedom | bậc tự do
- standard error of the mean | sai số chuẩn của trung bình
- one-sample t interval / test | khoảng tin cậy / kiểm định t một mẫu
- paired data | dữ liệu ghép cặp
- mean difference | trung bình hiệu
- two-sample t procedures | phương pháp t hai mẫu
- normal/large sample condition | điều kiện chuẩn / mẫu lớn
:::

## Similar exercises

:::exercise
A random sample of $25$ batteries has mean life $12.4$ hours and standard deviation $2.5$ hours; the data show no strong skew. Construct a $90\%$ confidence interval for the mean life of all such batteries.

::hint
**What you need:** df $=24$ gives $t^*\approx1.711$.

::solution
The standard error is $\dfrac{2.5}{\sqrt{25}}=0.5$ hours, and with df $=24$ the critical value for $90\%$ is $t^*\approx1.711$.

The margin of error is $1.711(0.5)\approx0.856$, so the interval is $12.4\pm0.856$, that is $(11.54,\ 13.26)$.

So we are $90\%$ confident that the true mean battery life is between about $11.54$ and $13.26$ hours.

**Answer.** $(11.54,\ 13.26)$ hours.
:::

:::exercise
Explain why $t^*$ for a $95\%$ interval with $n=10$ is larger than $1.96$.

::hint
**What you need:** estimating $\sigma$ by $s$ adds uncertainty.

::solution
With $n=10$ we use a $t$ distribution with $9$ degrees of freedom, because $\sigma$ is estimated by $s$.

This extra uncertainty gives the $t$ distribution heavier tails than the normal, so we must go farther from the centre to capture the middle $95\%$: $t^*\approx2.262>1.96$.

So $t^*$ is larger because the sample standard deviation is itself uncertain, especially for small samples.

**Answer.** Heavier tails with $9$ df: $t^*\approx2.262$.
:::

:::exercise
A random sample of $12$ house prices in a town is strongly skewed right with one very large outlier. Is a one-sample $t$ interval for the mean price appropriate?

::hint
**What you need:** the normal/large sample condition.

::solution
The sample size $12$ is less than $30$, so the normal/large sample condition depends on the shape of the data.

The data are strongly skewed with an outlier, which suggests the population is not normal, so the sampling distribution of $\bar x$ may not be approximately normal.

So a $t$ interval is not appropriate; a larger sample would be needed.

**Answer.** No.
:::

:::exercise
A $95\%$ confidence interval for a mean is $(47.2,\ 53.6)$. Is there convincing evidence that $\mu\ne50$? Is there convincing evidence that $\mu\ne45$?

::hint
**What you need:** values inside the interval are plausible.

::solution
The value $50$ lies inside the interval, so it is a plausible value of $\mu$: there is not convincing evidence that $\mu\ne50$.

The value $45$ lies outside the interval, so it is not plausible: there is convincing evidence, at about the $5\%$ level for a two-sided test, that $\mu\ne45$.

So the answer is no for $50$ and yes for $45$.

**Answer.** No for $50$; yes for $45$.
:::

:::exercise
For each study, decide whether the data are paired or come from two independent samples.
a) The reaction times of $20$ drivers are measured with and without a phone call.
b) The heights of $30$ randomly chosen boys and $30$ randomly chosen girls are compared.

::hint
**What you need:** are the measurements naturally matched?

::solution
a) Each driver is measured twice, so each "with phone" time is matched with the same driver's "without phone" time: the data are paired.

b) The boys and girls are separate random samples with no natural matching, so these are two independent samples.

So study a) uses paired procedures and study b) uses two-sample procedures.

**Answer.** a) paired; b) two independent samples.
:::

## Applied exercises

:::exercise
A battery maker claims its batteries last $40$ hours on average. A random sample of $20$ batteries has mean $38.5$ hours and standard deviation $3.2$ hours, with no strong skew. Test the claim at $\alpha=0.05$ against the alternative that the mean is less than $40$ hours.

::hint
**What you need:** $t=\dfrac{38.5-40}{3.2/\sqrt{20}}$, df $=19$.

::solution
*State:* $H_0:\mu=40$, $H_a:\mu<40$, where $\mu$ is the true mean life of the batteries; $\alpha=0.05$.

*Plan:* one-sample $t$ test. Random sample; $20$ is less than $10\%$ of all batteries; no strong skew in the sample.

*Do:* $t=\dfrac{38.5-40}{3.2/\sqrt{20}}\approx\dfrac{-1.5}{0.7155}\approx-2.096$ with df $=19$, so the P-value is about $0.0248$.

*Conclude:* since $0.0248<0.05$, we reject $H_0$. There is convincing evidence that the mean battery life is less than $40$ hours.

**Answer.** $t\approx-2.096$, P-value $\approx0.0248$; reject the claim.
:::

:::exercise
Independent random samples of $40$ customers at shop X and $45$ customers at shop Y give mean waiting times $25.1$ and $22.4$ minutes, with standard deviations $4.0$ and $5.0$ minutes. Construct a $95\%$ confidence interval for $\mu_X-\mu_Y$, using df $\approx82$ ($t^*\approx1.989$), and interpret it.

::hint
**What you need:** standard error $\sqrt{\dfrac{4^2}{40}+\dfrac{5^2}{45}}$.

::solution
The difference in sample means is $25.1-22.4=2.7$ minutes, and the standard error is $\sqrt{\dfrac{16}{40}+\dfrac{25}{45}}=\sqrt{0.4+0.5556}\approx0.9775$.

The margin of error is $1.989(0.9775)\approx1.945$, so the interval is $2.7\pm1.945$, that is $(0.755,\ 4.645)$ minutes. Both samples are larger than $30$, so the normal/large sample condition holds.

So we are $95\%$ confident that the true mean waiting time at shop X is between about $0.76$ and $4.64$ minutes longer than at shop Y; since $0$ is not in the interval, the shops differ.

**Answer.** $(0.755,\ 4.645)$ minutes.
:::

:::exercise
In a matched-pairs experiment with $10$ pairs, the differences have mean $1.8$ and standard deviation $2.0$, with no strong skew. Construct a $95\%$ confidence interval for $\mu_{\text{diff}}$.

::hint
**What you need:** df $=9$ gives $t^*\approx2.262$.

::solution
The standard error of the mean difference is $\dfrac{2.0}{\sqrt{10}}\approx0.6325$, and with df $=9$, $t^*\approx2.262$.

The margin of error is $2.262(0.6325)\approx1.431$, so the interval is $1.8\pm1.431$, that is $(0.369,\ 3.231)$.

So we are $95\%$ confident that the true mean difference is between about $0.37$ and $3.23$; since the interval is entirely positive, the treatment appears to increase the response.

**Answer.** $(0.369,\ 3.231)$.
:::

:::exercise Challenge
A researcher wants a $95\%$ confidence interval for a mean with margin of error at most $3$ units. From earlier studies, $\sigma\approx15$. Using the $z^*$ approximation, find the smallest sample size.

::hint
**What you need:** $n\ge\left(\dfrac{z^*\sigma}{M}\right)^2$.

::solution
The margin of error is approximately $z^*\dfrac{\sigma}{\sqrt n}$, so we need $1.96\cdot\dfrac{15}{\sqrt n}\le3$, that is $\sqrt n\ge\dfrac{1.96\times15}{3}=9.8$.

Hence $n\ge9.8^2=96.04$, and we round up.

So the smallest sample size is $97$.

**Answer.** $97$.
:::

:::quiz
::mc
For a one-sample $t$ procedure with $n=20$, the degrees of freedom are
A. $20$
B. $19$
C. $18$
D. $21$
::key B
df $=n-1$.

::mc
Compared with the standard normal, a $t$ distribution has
A. heavier tails
B. a larger mean
C. lighter tails
D. a skewed shape
::key A
Estimating $\sigma$ adds uncertainty.

::mc
A study measures each patient's blood pressure before and after a drug. The correct procedure is
A. a two-sample $t$ test
B. a one-proportion $z$ test
C. a two-proportion $z$ test
D. a paired $t$ test on the differences
::key D
The same patients are measured twice.

::mc
For a small sample, the normal/large sample condition is checked by
A. computing $np$
B. making sure $n\ge10$
C. graphing the data and looking for strong skew or outliers
D. checking that $\bar x$ is close to $\mu_0$
::key C
The sample shape gives evidence about the population shape.

::tf
A random sample of $36$ values has $\bar x=50$ and $s=12$. Decide whether each statement is true or false.
a) The standard error of the mean is $2$.
b) The degrees of freedom are $35$.
c) A $95\%$ $t$ interval uses $t^*=1.96$ exactly.
d) The normal/large sample condition is met because $n\ge30$.
::key T T F T
With df $=35$, $t^*\approx2.03$.

::sa
Find the standard error of the mean when $s=8$ and $n=16$.
::key 2
$\dfrac{8}{\sqrt{16}}=2$.

::sa
In a test, $\bar x=52$, $\mu_0=50$ and the standard error is $0.8$. Find $t$.
::key 2.5
$\dfrac{52-50}{0.8}=2.5$.
:::
