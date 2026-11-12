---
title: The four free-response questions and how to score
description: How the four 10-point AP Statistics free-response questions work from 2027, what each asks, how to type answers in Bluebook, and a model answer.
minutes: 35
type: guide
---

:::goals
- Know how the free-response section is organized, timed and scored from May 2027.
- Recognize what each of the four questions focuses on.
- Type statistical notation clearly in Bluebook.
- Write answers that earn points: procedures named, conditions checked, conclusions in context.
:::

Imagine two students who reach the same P-value on the same question. One writes the number and stops. The other says what was tested, checks the conditions with the real numbers, and explains what the result means for the people in the problem. They get very different scores. Why? Because the free-response questions are marked with scoring guidelines that reward clear reasoning in context, not just correct arithmetic.

Section II is half of your AP Statistics score: four questions in 90 minutes, each worth 10 points. The good news is that the writing can be learned. The same few habits earn points again and again, and a clear explanation built on a small arithmetic slip often keeps most of its marks.

## How the section works

| Question | Focus | Typical content |
|---|---|---|
| 1 | Formulating questions and collecting data | investigative questions, sampling, experimental design, bias |
| 2 | Analyzing data and interpreting results | graphs, summary statistics, comparisons, regression |
| 3 | Statistical inference | a confidence interval or significance test, with conditions |
| 4 | Integrated question | several areas of the course in one context |

With $90$ minutes for four equal questions, plan on about $20$ minutes each and keep $5$–$10$ minutes for checking. Read all four questions first, start with the one you find easiest, and never leave a question blank: partial answers earn points. A graphing calculator is allowed, Desmos is available in Bluebook, and a formula sheet with tables is provided.

## Typing your answers in Bluebook

From 2027 the free-response answers are typed into an autosaving box in Bluebook. You can insert symbols such as $\le$, $\bar x$, $\hat p$, square roots and Greek letters from the "Mathematical" special characters, or type them with the keyboard. College Board's digital response guidelines accept conventions like these:

| To show | You may type |
|---|---|
| $\bar x$, $\hat p$, $\mu$, $\sigma$ | x-bar, p-hat, mu, sigma |
| $H_0$, $H_a$, $\mu_A$ | H_0, H_a, mu_A |
| $\le$, $\ge$, $\ne$, $\pm$ | <=, >=, !=, +/- |
| $\dfrac{5}{\sqrt{30}}$ | 5/sqrt(30) |
| $r^2$ | r^2 or r-squared |
| an interval | "from 2.5 to 5.5" (not "2.5-5.5", which looks like subtraction) |

Use parentheses generously, for example (0.50-0.30)+/-1.96*sqrt(...), and practise typing in the Test Preview or AP Classroom before the exam. If you practise in a word processor, turn autocorrect off.

## What earns points in each question

**Question 1 (collecting data).** Name the method precisely ("stratified random sample with grades as strata") and describe the random selection so that someone else could carry it out: how individuals are numbered, what tool is used, how repeats are handled. When asked about bias, name the type, explain the mechanism and give the likely direction.

**Question 2 (analyzing data).** Describe distributions with shape, centre, variability and unusual features, and compare with comparative words. For regression, interpret slope, intercept, residuals and $r^2$ with "predicted" and both variables named. Every number needs units and context.

**Question 3 (inference).** Follow the four steps every time:

1. **State** the parameter in context and the hypotheses or confidence level.
2. **Plan:** name the procedure and check each condition with the actual numbers.
3. **Do:** show the formula with values substituted, then the result, the df where relevant and the P-value.
4. **Conclude** in context, linked to the P-value or interval: "Because the P-value of $0.012$ is less than $\alpha=0.05$, we reject $H_0$. There is convincing evidence that …"

**Question 4 (integrated).** Expect several connected parts, for example describing data, then designing a study, then judging a claim with probability or inference. Earlier parts often contain information you need later, so reread them.

:::tip Phrases that save points
- "We are $95\%$ confident that the interval from … to … captures the true mean …"
- "Assuming $H_0$ is true, there is a $0.012$ probability of getting a sample result at least as extreme as the one observed."
- "Because treatments were randomly assigned, we can conclude that … caused …"
- "Because the sample was random, we can generalize to all …"
:::

## A model answer

:::example An inference question (Question 3 style)
A city wants to know whether a new cycle lane has increased the proportion of residents who cycle to work. Before the lane, $18\%$ did. After it opened, a random sample of $400$ working residents found that $88$ cycle to work. Do the data give convincing evidence at $\alpha=0.05$ that the proportion has increased?

**Model answer.** *State:* $H_0:p=0.18$ and $H_a:p>0.18$, where $p$ is the true proportion of all working residents of the city who now cycle to work; $\alpha=0.05$.

*Plan:* one-sample $z$-test for a proportion. Random: a random sample of residents. $10\%$: $400$ is less than $10\%$ of the city's working residents. Large counts: $np_0=400(0.18)=72$ and $n(1-p_0)=328$ are both at least $10$.

*Do:* $\hat p=\dfrac{88}{400}=0.22$ and
$$z=\frac{0.22-0.18}{\sqrt{\dfrac{0.18(0.82)}{400}}}=\frac{0.04}{0.01921}\approx2.08,$$
so the P-value is $P(Z>2.08)\approx0.0187$.

*Conclude:* because the P-value of $0.0187$ is less than $\alpha=0.05$, we reject $H_0$. There is convincing evidence that the proportion of working residents who cycle to work is now greater than $0.18$.

So the data are convincing at the $5\%$ level. Note that this is not an experiment, so we cannot be sure the cycle lane itself caused the increase.
:::

Points are commonly lost in an answer like this by writing $\hat p$ in the hypotheses, omitting "the city's working residents" in the parameter, checking large counts with $\hat p$ instead of $p_0$, or ending with "reject $H_0$" without saying what it means for the city.

:::warning Common reasons for lost points
- **No context:** conclusions that would fit any problem.
- **Conditions listed but not checked:** write the actual numbers.
- **Calculator commands only:** "1-PropZTest" alone does not show the work; name the procedure and show the statistic.
- **Overstating:** "proves", "accept $H_0$", or causal conclusions from observational data.
- **Ignoring the question's wording:** "explain", "justify" and "describe" each need a sentence.
:::

Think back to the two students with the same P-value. The difference between them was never the mathematics; it was a few sentences of clear writing. If you remember one thing, make it this: every number you write should say what it is about. Practise one full free-response question a week, compare it with a published scoring guideline, and those sentences will soon come naturally.

:::terms
- free-response question | câu tự luận
- scoring guideline | hướng dẫn chấm
- communication | trình bày
- in context | gắn với tình huống
- conditions | điều kiện
- conclusion | kết luận
- digital response | bài làm dạng số
:::
