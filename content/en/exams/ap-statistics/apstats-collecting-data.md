---
title: Sampling, observational studies and experiments
description: AP Statistics Unit 1: investigative questions, sampling methods and bias, observational studies and experiments, experimental design, scope of inference.
minutes: 50
---

:::goals
- Write and judge statistical investigative questions.
- Describe simple random, stratified, cluster and systematic samples, and identify sources of bias.
- Distinguish observational studies from experiments, and explain confounding.
- Describe a completely randomized, randomized block or matched-pairs design, including how to randomize.
- State the scope of inference: when results can be generalized, and when cause and effect can be concluded.
:::

How data are collected decides what they can tell us. A huge sample collected badly can be worse than a small one collected well, and a strong association in an observational study does not show cause and effect. Free-response question 1 on the revised exam is about exactly these ideas, so precise vocabulary and clear descriptions of procedures earn points.

## Investigative questions and sampling

A **statistical investigative question** asks about a group, can be answered with data that vary, and names the variable of interest, for example "What is the typical number of hours students at our school sleep on school nights?"

The **population** is the whole group we want information about; a **sample** is the part we actually measure; a **census** measures everyone. A **parameter** describes the population (such as $p$ or $\mu$) and a **statistic** describes the sample (such as $\hat p$ or $\bar x$).

| Method | How it works |
|---|---|
| Simple random sample (SRS) | every group of $n$ individuals has the same chance of being chosen |
| Stratified random sample | split the population into similar groups (strata), take an SRS from **each** |
| Cluster sample | split into groups (clusters), randomly choose **some** clusters, measure everyone in them |
| Systematic random sample | choose a random start, then every $k$th individual |

Stratifying by a variable related to the response gives more precise estimates; cluster sampling saves time and money.

:::example Naming the method
A school has four grades. The principal randomly selects $25$ students from each grade and asks them about the canteen. This is
A. a simple random sample
B. a cluster sample
C. a stratified random sample
D. a convenience sample

**Solution.** The population is divided into groups, the grades, and a random sample is taken from **every** group.

In a cluster sample only some groups would be chosen and everyone in them surveyed, and in an SRS the grade would play no role.

So this is a stratified random sample with the grades as strata, answer **C**.
:::

## Bias

**Bias** means the method systematically overestimates or underestimates the value we want. Random sampling removes selection bias but not every kind of bias.

| Bias | Cause |
|---|---|
| Convenience sampling | choosing individuals who are easy to reach |
| Voluntary response | people choose themselves; strong opinions are over-represented |
| Undercoverage | some members of the population cannot be chosen |
| Nonresponse | chosen individuals cannot be contacted or refuse |
| Response bias | wording, the interviewer or the topic leads to inaccurate answers |

When asked about bias, name it, explain **why** it happens and state its likely **direction**.

:::example An online poll
A news website asks readers to vote online on whether the city should ban cars from the centre. Of $3000$ votes, $78\%$ say yes. Which statement best describes this result?
A. It is unbiased because the sample is large.
B. It probably suffers from voluntary response bias, so $78\%$ may not reflect the city's residents.
C. It has nonresponse bias because some readers did not vote.
D. It is a stratified sample of website readers.

**Solution.** Readers decide for themselves whether to vote, and people with strong feelings, here likely those who strongly support the ban, are more likely to respond.

A large sample does not fix a biased method, and the readers who did not vote were never chosen, so this is not nonresponse.

So the result probably suffers from voluntary response bias, answer **B**.
:::

## Observational studies and experiments

In an **observational study**, researchers measure variables without influencing the individuals. In an **experiment**, they deliberately impose **treatments** on **experimental units** and measure a **response**. Two variables are **confounded** when their effects on the response cannot be separated; observational studies are open to confounding, which is why they cannot show cause and effect.

Principles of a good experiment:

1. **Comparison** of two or more treatments, often including a control group or a **placebo**.
2. **Random assignment** of treatments to units, to create roughly equivalent groups.
3. **Control** of other variables that might affect the response.
4. **Replication**: enough units in each treatment group.

**Blinding** keeps subjects (single-blind) or both subjects and the people measuring the response (double-blind) from knowing who received which treatment.

**Designs.** In a **completely randomized** design all units are assigned at random. In a **randomized block** design, units are first grouped into blocks that are similar in a variable affecting the response, and randomization is done within each block. A **matched-pairs** design is a block design with blocks of two, or each subject receives both treatments in random order.

:::example Describing random assignment
A researcher has $40$ volunteers to compare two memory techniques, A and B. Describe how to randomly assign the volunteers to two groups of $20$.

**Solution.** Write each volunteer's name on an identical slip of paper, mix the slips in a container, and draw $20$ slips without looking; those volunteers use technique A, and the remaining $20$ use technique B.

Equivalently, number the volunteers $1$ to $40$ and use a random number generator to pick $20$ different numbers between $1$ and $40$ for technique A.

So each volunteer has the same chance of receiving each technique, which makes the two groups roughly equivalent before the treatments.
:::

## Scope of inference

| | Random assignment | No random assignment |
|---|---|---|
| **Random sample** | generalize to the population; cause and effect | generalize to the population; association only |
| **No random sample** | cause and effect for these units only | association for these units only |

:::example What can we conclude?
In a well-designed experiment, $60$ student volunteers were randomly assigned to study with music or in silence, and the silence group scored significantly higher. Which conclusion is justified?
A. Studying in silence causes higher scores for all students in the country.
B. Studying in silence is associated with higher scores, but causation cannot be concluded.
C. Studying in silence caused higher scores for students like these volunteers.
D. No conclusion is possible because the sample was not random.

**Solution.** Random assignment of the treatments allows a cause-and-effect conclusion.

The subjects were volunteers, not a random sample, so the result cannot be generalized to all students.

So we can conclude that silence caused higher scores for students like these volunteers, answer **C**.
:::

:::warning Common traps
- **"Random" without a method:** describe the procedure: slips in a container or a random number generator, with numbering.
- **Stratified versus cluster:** stratified samples from every group; cluster samples whole groups.
- **Large biased samples:** size does not remove bias.
- **Random sampling versus random assignment:** sampling lets you generalize; assignment lets you conclude causation.
- **Bias direction:** say whether the estimate is likely too high or too low, and why.
:::

:::terms
- population / sample / census | tổng thể / mẫu / tổng điều tra
- simple random sample | mẫu ngẫu nhiên đơn giản
- stratified / cluster / systematic sample | mẫu phân tầng / mẫu cụm / mẫu hệ thống
- bias | độ chệch (sai lệch)
- voluntary response / nonresponse | tự nguyện trả lời / không trả lời
- observational study / experiment | nghiên cứu quan sát / thí nghiệm
- treatment / experimental unit | nghiệm thức / đơn vị thí nghiệm
- confounding | gây nhiễu (lẫn lộn)
- random assignment | phân nhóm ngẫu nhiên
- blinding / placebo | làm mù / giả dược
- randomized block / matched pairs | khối ngẫu nhiên / cặp ghép
:::

## Similar exercises

:::exercise
A shop manager picks a random number between $1$ and $10$, say $4$, and then surveys the $4$th, $14$th, $24$th, … customer of the day. Name the sampling method and say whether it is random.

::hint
**What you need:** a random start followed by every $k$th individual.

::solution
The manager chooses a random starting point and then takes every $10$th customer, so this is a systematic random sample.

It is random because the starting point is chosen at random, so each customer has the same chance, $\dfrac{1}{10}$, of being selected.

So the method is a systematic random sample.

**Answer.** Systematic random sample; yes.
:::

:::exercise
To survey students, a school randomly selects $5$ of its $40$ classes and surveys every student in those classes. Name the method and explain how it differs from a stratified sample.

::hint
**What you need:** are all groups sampled, or only some?

::solution
The classes are groups of students, some of the groups are chosen at random, and everyone in the chosen groups is surveyed: this is a cluster sample.

In a stratified sample we would take a random sample of students from **every** class (or every grade) instead of surveying whole classes.

So this is a cluster sample; it is cheaper, but classes may differ from each other.

**Answer.** Cluster sample.
:::

:::exercise
Researchers record how much coffee $500$ adults drink each day and how many hours they sleep. Those who drink more coffee sleep less on average. Is this an experiment? Can we conclude that coffee causes less sleep?

::hint
**What you need:** were treatments imposed?

::solution
The researchers only recorded what the adults already do; no treatment was imposed, so this is an observational study, not an experiment.

Because of possible confounding, for example people with stressful jobs may both drink more coffee and sleep less, we cannot separate the effect of coffee from other variables.

So we cannot conclude that coffee causes less sleep; we can only say the two are associated.

**Answer.** Observational study; no causal conclusion.
:::

:::exercise
An agronomist applies fertilizer A, fertilizer B or no fertilizer to $30$ plots of land and measures the yield of rice on each plot. Identify the treatments, the experimental units and the response variable.

::hint
**What you need:** treatments are what is applied; units are what they are applied to.

::solution
The treatments are the three conditions applied: fertilizer A, fertilizer B and no fertilizer, which acts as a control.

The experimental units are the $30$ plots of land, and the response variable is the rice yield of each plot.

So there are $3$ treatments, $30$ experimental units, and the response is the yield.

**Answer.** Treatments: A, B, none; units: $30$ plots; response: yield.
:::

:::exercise
A survey asks: "Don't you agree that the school day is too long?" Identify the problem and rewrite the question.

::hint
**What you need:** response bias from wording.

::solution
The wording pushes respondents toward agreeing, so the question causes response bias, and the proportion who say the day is too long will probably be overestimated.

A neutral version is: "Do you think the length of the school day is too long, about right, or too short?"

So the problem is leading wording, and a neutral question offers balanced options.

**Answer.** Response bias from wording; use a neutral question.
:::

## Applied exercises

:::exercise
The agronomist in the previous exercise wants to assign the three treatments to the $30$ plots, $10$ plots each. Describe a method using a random number generator.

::hint
**What you need:** number the units, then pick numbers without repetition.

::solution
Number the plots from $1$ to $30$. Use a random number generator to choose $10$ different integers from $1$ to $30$, ignoring repeats; those plots receive fertilizer A.

Then choose $10$ different integers from the remaining $20$ numbers; those plots receive fertilizer B, and the last $10$ plots receive no fertilizer.

So every plot has the same chance of receiving each treatment.

**Answer.** Number the plots and assign by random numbers without repetition.
:::

:::exercise
A company wants to compare two types of running-shoe soles. Each of $20$ runners wears one shoe with sole A and one with sole B, with the foot for sole A chosen by a coin flip, and the wear is measured after a month. Name the design and explain why it is better than giving sole A to $10$ runners and sole B to the other $10$.

::hint
**What you need:** each runner is a block of two.

::solution
Each runner receives both treatments, with the foot chosen at random, so this is a matched-pairs design.

Runners differ greatly in weight, distance and running style, which affect wear. Comparing the two soles on the same runner removes this variation from the comparison, so a difference between the soles is easier to detect.

So the matched-pairs design is better because it controls for differences between runners.

**Answer.** Matched pairs; it removes runner-to-runner variation.
:::

:::exercise
A school has $600$ students in grade 10, $500$ in grade 11 and $400$ in grade 12. A stratified random sample of $60$ students is taken in proportion to the grade sizes. How many students are sampled from each grade?

::hint
**What you need:** $60$ out of $1500$ is $4\%$.

::solution
The school has $600+500+400=1500$ students, so the sample is $\dfrac{60}{1500}=4\%$ of each grade.

Hence the sample contains $0.04\times600=24$ students from grade 10, $0.04\times500=20$ from grade 11 and $0.04\times400=16$ from grade 12; check: $24+20+16=60$.

So $24$, $20$ and $16$ students are sampled from grades 10, 11 and 12.

**Answer.** $24$, $20$, $16$.
:::

:::exercise Challenge
A random sample of $1000$ adults in a country is surveyed, and those who exercise regularly report lower stress. Explain what can and cannot be concluded.

::hint
**What you need:** random sampling, but no random assignment.

::solution
Because the adults were selected at random from the country, the association between exercise and lower stress can be generalized to all adults in the country.

Because exercise was not randomly assigned, this is an observational study, and confounding variables such as free time or income could explain the association. So we cannot conclude that exercise causes lower stress.

So we can generalize the association to the population, but not conclude causation.

**Answer.** Generalize the association; no cause and effect.
:::

:::quiz
::mc
Which method protects best against selection bias?
A. Choosing a random sample
B. Choosing a very large convenience sample
C. Asking for volunteers
D. Surveying friends of the researcher
::key A
Random selection gives every individual a known chance.

::mc
What is the main purpose of a placebo?
A. To increase the sample size
B. To make the treatment stronger
C. To allow random sampling
D. To make the control group's experience as similar as possible, except for the active treatment
::key D
The placebo effect then affects both groups.

::mc
Two variables are confounded when
A. they have correlation $0$
B. their effects on the response cannot be separated
C. they are both categorical
D. one is the response variable
::key B
Confounding is the reason observational studies cannot show causation.

::mc
Which is an experiment?
A. Recording the screen time of $200$ teenagers
B. Comparing the heights of boys and girls in a class
C. Randomly assigning patients to a new drug or a placebo
D. Surveying voters about a candidate
::key C
Only C imposes a treatment.

::tf
In an experiment, $50$ volunteers are randomly assigned to a new diet or their usual diet. Decide whether each statement is true or false.
a) This is an experiment.
b) Random assignment allows a cause-and-effect conclusion.
c) The results can be generalized to all adults.
d) The usual-diet group acts as a control group.
::key T T F T
The subjects are volunteers, not a random sample.

::sa
A school of $1200$ students has $300$ in grade 12. In a proportional stratified sample of $80$, how many grade 12 students are chosen?
::key 20
$\dfrac{300}{1200}\times80=20$.

::sa
An experiment has factor A with $3$ levels and factor B with $2$ levels. How many treatments are there?
::key 6
$3\times2=6$ combinations.
:::
