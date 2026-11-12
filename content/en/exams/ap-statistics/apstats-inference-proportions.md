---
title: Inference for proportions
description: AP Statistics Unit 3: confidence intervals and significance tests for one proportion and for a difference of two proportions, errors, power and sample size.
minutes: 55
---

:::goals
- Construct and interpret a confidence interval for a proportion $p$ and for a difference $p_1-p_2$.
- Carry out a significance test for $p$ and for $p_1-p_2$: hypotheses, conditions, test statistic, P-value and conclusion in context.
- Interpret the confidence level, the margin of error and the P-value correctly.
- Describe Type I and Type II errors and power in context, and choose a sample size.
:::

Unit 3 is where statistics starts drawing conclusions about populations. Every inference question on the exam, including the full free-response question on inference, is marked with the same four-step structure, so learn it once and use it every time.

:::note The four steps of inference
1. **State:** the parameter in words and symbols, the confidence level or the hypotheses and significance level.
2. **Plan:** name the procedure and check the conditions: random, $10\%$, large counts.
3. **Do:** compute the interval, or the test statistic and the P-value.
4. **Conclude:** answer the question in context.
:::

## Confidence intervals for a proportion

A confidence interval has the form
$$\text{statistic}\pm\text{(critical value)}\times\text{(standard error)},\qquad \hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}}.$$
Common critical values: $z^*=1.645$ for $90\%$, $1.960$ for $95\%$, $2.576$ for $99\%$. The part after $\pm$ is the **margin of error**. Conditions: a random sample, $n\le0.1N$, and at least $10$ successes and $10$ failures in the sample.

**Interpretation of the interval:** "We are $95\%$ confident that the interval from … to … captures the true proportion of [population] who [context]." **Interpretation of the level:** "If we took many random samples of the same size and built an interval from each, about $95\%$ of the intervals would capture the true proportion."

:::example A one-proportion interval
In a random sample of $500$ adults in a city, $290$ say they would use a new bike-share scheme. Construct and interpret a $95\%$ confidence interval for the proportion of all adults in the city who would use it.

**Solution.** *State:* $p$ is the proportion of all adults in the city who would use the scheme; $95\%$ confidence.

*Plan:* one-sample $z$-interval for $p$. Random: random sample. $10\%$: $500$ is less than $10\%$ of the city's adults. Large counts: $290$ successes and $210$ failures, both at least $10$.

*Do:* $\hat p=\dfrac{290}{500}=0.58$ and the standard error is $\sqrt{\dfrac{0.58(0.42)}{500}}\approx0.02207$, so the interval is $0.58\pm1.96(0.02207)=0.58\pm0.0433$, that is $(0.5367,\ 0.6233)$.

*Conclude:* we are $95\%$ confident that the interval from $0.537$ to $0.623$ captures the true proportion of adults in the city who would use the scheme. Since all values are above $0.5$, the data give convincing evidence that a majority would use it.
:::

To reach a margin of error $M$, choose $n\ge\left(\dfrac{z^*}{M}\right)^2\hat p(1-\hat p)$, using $\hat p=0.5$ if there is no earlier estimate; always round **up**.

:::example Choosing a sample size
A polling company wants a $95\%$ confidence interval for a proportion with margin of error at most $0.03$, with no prior estimate. What is the smallest sample size?
A. $33$
B. $1068$
C. $1067$
D. $4268$

**Solution.** With no prior estimate we use $\hat p=0.5$, which gives the largest standard error.

Then $n\ge\left(\dfrac{1.96}{0.03}\right)^2(0.5)(0.5)\approx1067.1$, and we round up to the next whole number.

So the smallest sample size is $1068$, answer **B**. Option C rounds down, which would give a margin slightly above $0.03$.
:::

## Significance tests for a proportion

A test weighs evidence **against** a null hypothesis $H_0:p=p_0$ in favour of an alternative $H_a:p<p_0$, $p>p_0$ or $p\ne p_0$. Assuming $H_0$ is true, the test statistic is
$$z=\frac{\hat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}},$$
and the large counts condition uses $np_0$ and $n(1-p_0)$. The **P-value** is the probability, assuming $H_0$ is true, of getting a statistic at least as extreme as the one observed. If the P-value is less than the significance level $\alpha$, reject $H_0$: there is convincing evidence for $H_a$. Otherwise fail to reject $H_0$; we never "accept" it.

:::example A one-proportion test
A bus company claims that $90\%$ of its buses arrive on time. A random sample of $200$ arrivals finds $170$ on time. At $\alpha=0.05$, is there convincing evidence that the true proportion is less than $0.9$?

**Solution.** *State:* $H_0:p=0.9$ and $H_a:p<0.9$, where $p$ is the true proportion of the company's buses that arrive on time; $\alpha=0.05$.

*Plan:* one-sample $z$-test for $p$. Random sample; $200$ is less than $10\%$ of all arrivals; $np_0=180$ and $n(1-p_0)=20$, both at least $10$.

*Do:* $\hat p=\dfrac{170}{200}=0.85$, the standard deviation under $H_0$ is $\sqrt{\dfrac{0.9(0.1)}{200}}\approx0.02121$, so $z=\dfrac{0.85-0.9}{0.02121}\approx-2.357$ and the P-value is $P(Z<-2.357)\approx0.0092$.

*Conclude:* since $0.0092<0.05$, we reject $H_0$. There is convincing evidence that fewer than $90\%$ of the company's buses arrive on time.
:::

## Two proportions

For two independent random samples or two groups in a randomized experiment:

- **Interval:** $(\hat p_1-\hat p_2)\pm z^*\sqrt{\dfrac{\hat p_1(1-\hat p_1)}{n_1}+\dfrac{\hat p_2(1-\hat p_2)}{n_2}}$.
- **Test of $H_0:p_1-p_2=0$:** use the pooled proportion $\hat p_c=\dfrac{x_1+x_2}{n_1+n_2}$ and $z=\dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p_c(1-\hat p_c)\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}$.

Check large counts in each sample. If the interval contains $0$, "no difference" is plausible.

:::example A difference of proportions
In random samples of $300$ students from each of two cities, $120$ students in city A and $90$ in city B walk to school. A $95\%$ confidence interval for $p_A-p_B$ is $(0.024,\ 0.176)$. Which conclusion is correct?
A. There is no evidence of a difference, because the interval is narrow.
B. The proportion who walk is between $2.4\%$ and $17.6\%$ in city A.
C. $95\%$ of students in city A walk more than students in city B.
D. Because the interval is entirely above $0$, there is convincing evidence that a higher proportion of students walk in city A.

**Solution.** The interval estimates the **difference** $p_A-p_B$: here $\hat p_A-\hat p_B=0.4-0.3=0.1$, with margin of error about $0.076$.

Every plausible value of the difference is positive, so $0$ is not plausible and the proportion of walkers is higher in city A.

So the correct conclusion is D, answer **D**.
:::

## Errors and power

| | $H_0$ true | $H_0$ false |
|---|---|---|
| Reject $H_0$ | **Type I error** (probability $\alpha$) | correct: power |
| Fail to reject $H_0$ | correct | **Type II error** |

The **power** of a test is the probability of rejecting $H_0$ when a particular alternative is true. Power increases with a larger sample, a larger $\alpha$, and a true value farther from $p_0$. Describe errors in context: in the bus example, a Type I error would be concluding that fewer than $90\%$ arrive on time when in fact $90\%$ do.

:::warning Common traps
- **Hypotheses about parameters:** write $p$, never $\hat p$, in $H_0$ and $H_a$.
- **Tests use $p_0$:** in a test the standard deviation uses $p_0$; in an interval the standard error uses $\hat p$.
- **"Accept $H_0$":** say "fail to reject"; the data are not evidence for $H_0$.
- **P-value meaning:** it is not the probability that $H_0$ is true.
- **Conditions in context:** "the sample is random", "$500<10\%$ of adults in the city", with the actual counts.
:::

:::terms
- confidence interval / confidence level | khoảng tin cậy / độ tin cậy
- margin of error | sai số biên
- standard error | sai số chuẩn
- critical value | giá trị tới hạn
- null / alternative hypothesis | giả thuyết không / giả thuyết đối
- significance level | mức ý nghĩa
- P-value | giá trị P
- Type I / Type II error | sai lầm loại I / loại II
- power | lực kiểm định
- pooled proportion | tỉ lệ gộp
:::

## Similar exercises

:::exercise
In a random sample of $400$ students, $140$ say they read every day. Construct a $90\%$ confidence interval for the proportion of all students who read every day. Assume the conditions are met.

::hint
**What you need:** $\hat p\pm1.645\sqrt{\dfrac{\hat p(1-\hat p)}{n}}$.

::solution
The sample proportion is $\hat p=\dfrac{140}{400}=0.35$, and the standard error is $\sqrt{\dfrac{0.35(0.65)}{400}}\approx0.02385$.

The margin of error is $1.645(0.02385)\approx0.0392$, so the interval is $0.35\pm0.0392$, that is $(0.3108,\ 0.3892)$.

So we are $90\%$ confident that between about $31.1\%$ and $38.9\%$ of all students read every day.

**Answer.** $(0.3108,\ 0.3892)$.
:::

:::exercise
A school claims that $75\%$ of its graduates go to university. A reporter suspects the true figure is lower. State the hypotheses, defining the parameter.

::hint
**What you need:** the claim goes in $H_0$; the suspicion goes in $H_a$.

::solution
Let $p$ be the true proportion of the school's graduates who go to university.

The claim is the null hypothesis and the reporter's suspicion is the alternative: $H_0:p=0.75$ and $H_a:p<0.75$.

So the hypotheses are $H_0:p=0.75$ versus $H_a:p<0.75$.

**Answer.** $H_0:p=0.75$, $H_a:p<0.75$.
:::

:::exercise
A test of $H_0:p=0.5$ against $H_a:p>0.5$ gives a P-value of $0.03$. Interpret the P-value and state the conclusion at $\alpha=0.05$ and at $\alpha=0.01$.

::hint
**What you need:** the P-value assumes $H_0$ is true.

::solution
Assuming the true proportion is $0.5$, there is a $0.03$ probability of getting a sample proportion as large as or larger than the one observed, just by chance.

At $\alpha=0.05$, $0.03<0.05$, so we reject $H_0$: there is convincing evidence that $p>0.5$. At $\alpha=0.01$, $0.03>0.01$, so we fail to reject $H_0$.

So the conclusion depends on the significance level chosen before the test.

**Answer.** Reject at $0.05$; fail to reject at $0.01$.
:::

:::exercise
How does the margin of error of a confidence interval for $p$ change in each case?
a) The confidence level increases from $95\%$ to $99\%$.
b) The sample size is multiplied by $4$.

::hint
**What you need:** $M=z^*\sqrt{\dfrac{\hat p(1-\hat p)}{n}}$.

::solution
a) A higher confidence level needs a larger critical value, $2.576$ instead of $1.96$, so the margin of error increases.

b) The standard error contains $\sqrt n$ in the denominator, so multiplying $n$ by $4$ divides the margin of error by $2$.

So the margin of error gets larger in case a) and is halved in case b).

**Answer.** a) larger; b) halved.
:::

:::exercise
A researcher wants to test $H_0:p=0.1$ with a random sample of $40$ people. Is the large counts condition met?

::hint
**What you need:** check $np_0$ and $n(1-p_0)$.

::solution
For a test, the expected counts under $H_0$ are $np_0=40(0.1)=4$ and $n(1-p_0)=36$.

Since $4<10$, the large counts condition is not met, so the sampling distribution of $\hat p$ may not be approximately normal.

So the $z$-test should not be used; a larger sample is needed.

**Answer.** No, since $np_0=4<10$.
:::

## Applied exercises

:::exercise
A candidate claims that $60\%$ of voters support her. In a random sample of $250$ voters, $138$ support her. Is there convincing evidence at $\alpha=0.05$ that her support is less than $60\%$?

::hint
**What you need:** $\hat p=0.552$; standard deviation $\sqrt{\dfrac{0.6(0.4)}{250}}$.

::solution
*State:* $H_0:p=0.6$, $H_a:p<0.6$, where $p$ is the true proportion of voters who support her; $\alpha=0.05$.

*Plan:* one-sample $z$-test. Random sample; $250$ is less than $10\%$ of voters; $np_0=150$ and $n(1-p_0)=100$, both at least $10$.

*Do:* $\hat p=\dfrac{138}{250}=0.552$, so $z=\dfrac{0.552-0.6}{\sqrt{0.24/250}}\approx\dfrac{-0.048}{0.03098}\approx-1.549$, and the P-value is about $0.0607$.

*Conclude:* since $0.0607>0.05$, we fail to reject $H_0$. There is not convincing evidence that her support is below $60\%$.

**Answer.** P-value $\approx0.0607$; not convincing evidence.
:::

:::exercise
In an experiment, $300$ patients were randomly assigned to a new treatment or a standard one, $150$ each. Improvement occurred in $45$ patients with the new treatment and $30$ with the standard treatment. Test at $\alpha=0.05$ whether the new treatment gives a higher proportion of improvement.

::hint
**What you need:** pooled proportion $\hat p_c=\dfrac{75}{300}=0.25$.

::solution
*State:* $H_0:p_N-p_S=0$, $H_a:p_N-p_S>0$, where $p_N$ and $p_S$ are the true improvement proportions for the new and standard treatments; $\alpha=0.05$.

*Plan:* two-sample $z$-test. Treatments were randomly assigned; the counts $45,105,30,120$ are all at least $10$.

*Do:* $\hat p_N=0.30$, $\hat p_S=0.20$ and $\hat p_c=0.25$, so the standard deviation is $\sqrt{0.25(0.75)\left(\dfrac{1}{150}+\dfrac{1}{150}\right)}=\sqrt{0.0025}=0.05$ and $z=\dfrac{0.10}{0.05}=2.0$, with P-value about $0.0228$.

*Conclude:* since $0.0228<0.05$, we reject $H_0$. There is convincing evidence that the new treatment causes a higher improvement rate for patients like these.

**Answer.** $z=2.0$, P-value $\approx0.0228$; reject $H_0$.
:::

:::exercise
A previous survey estimated that about $30\%$ of residents use a library. How large a sample is needed for a $95\%$ confidence interval with margin of error at most $0.04$?

::hint
**What you need:** $n\ge\left(\dfrac{z^*}{M}\right)^2\hat p(1-\hat p)$ with $\hat p=0.3$.

::solution
Using the prior estimate $\hat p=0.3$, we need $n\ge\left(\dfrac{1.96}{0.04}\right)^2(0.3)(0.7)$.

This gives $n\ge49^2\times0.21=504.21$, and we round up.

So a sample of at least $505$ residents is needed.

**Answer.** $505$.
:::

:::exercise Challenge
In the candidate example above, suppose her true support is actually $55\%$. Which type of error might the conclusion have made, and name two ways to make the test more powerful.

::hint
**What you need:** we failed to reject $H_0$.

::solution
The test failed to reject $H_0:p=0.6$. If the true support is $55\%$, then $H_0$ is false, so failing to reject it is a Type II error.

The power of the test, the probability of detecting that support is below $60\%$, can be increased by taking a larger sample or by using a larger significance level, such as $\alpha=0.10$.

So a Type II error may have occurred, and a larger $n$ or a larger $\alpha$ would increase power.

**Answer.** Type II error; increase $n$ or $\alpha$.
:::

:::quiz
::mc
Which critical value is used for a $95\%$ confidence interval for a proportion?
A. $1.645$
B. $2.576$
C. $1.96$
D. $0.95$
::key C
$95\%$ of the standard normal lies between $-1.96$ and $1.96$.

::mc
Which is a correct null hypothesis?
A. $H_0:p=0.4$
B. $H_0:\hat p=0.4$
C. $H_0:p>0.4$
D. $H_0:\hat p>0.4$
::key A
Hypotheses are about the parameter, and $H_0$ states equality.

::mc
A Type I error occurs when we
A. fail to reject a false $H_0$
B. reject a true $H_0$
C. compute the wrong P-value
D. use the wrong sample size
::key B
Its probability is $\alpha$.

::mc
A P-value of $0.002$ means that
A. there is a $0.2\%$ chance that $H_0$ is true
B. $H_a$ is true with probability $0.998$
C. the sample was too small
D. if $H_0$ were true, a result this extreme would happen about $0.2\%$ of the time
::key D
The P-value is computed assuming $H_0$ is true.

::tf
A $95\%$ confidence interval for $p$ is $(0.42,\ 0.50)$. Decide whether each statement is true or false.
a) The sample proportion is $0.46$.
b) The margin of error is $0.04$.
c) $p=0.55$ is a plausible value.
d) A $99\%$ interval from the same data would be wider.
::key T T F T
$0.55$ lies outside the interval.

::sa
A $95\%$ interval for $p$ is $(0.31,\ 0.39)$. Find the margin of error.
::key 0.04
Half the width: $\dfrac{0.39-0.31}{2}$.

::sa
How many times larger must $n$ be to halve the margin of error?
::key 4
The margin of error is proportional to $\dfrac{1}{\sqrt n}$.
:::
