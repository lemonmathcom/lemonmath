Write your answers in full sentences, with the procedure named, conditions checked and conclusions in context. The points for each part are shown in brackets; each question is worth $10$ points.

:::exercise Question 1 (10 points): Collecting data
A school with $1200$ students, $400$ in each of grades 10, 11 and 12, wants to learn about the time its students spend on homework.

a) Write a statistical investigative question the school could answer with a survey. [2 points]
b) Describe how to select a stratified random sample of $90$ students, using grade as the strata. [4 points]
c) Explain one advantage of stratifying by grade in this situation. [2 points]
d) A teacher suggests instead posting the survey on the school website for anyone to answer. Describe one likely bias and its likely direction. [2 points]

::hint
**What you need:** an investigative question asks about a group and is answered with variable data; a stratified sample takes a simple random sample from each stratum.

::solution
a) A suitable question is: "How many minutes do students at our school typically spend on homework on a school night?" It asks about the whole group of students, and the answers will vary from student to student.

b) Take $30$ students from each grade, since $\dfrac{90}{3}=30$ and the grades have equal sizes. Number the $400$ students in grade 10 from $1$ to $400$, use a random number generator to choose $30$ different numbers from $1$ to $400$ (ignoring repeats), and survey those students. Repeat separately for grade 11 and grade 12.

c) Homework time probably differs between grades, for example older students may have more homework. Stratifying by grade guarantees each grade is represented and gives a more precise estimate of the school's typical homework time than a simple random sample of the same size.

d) Students would choose whether to answer, which is voluntary response bias. Students who spend a lot of time on homework and feel strongly about it are more likely to respond, so the survey would probably overestimate the typical homework time.

So the answers are a clear investigative question, a sample of $30$ students chosen at random within each grade, more precise estimates from stratifying, and a likely overestimate from voluntary response.

**Answer.** See the model answer; key points: $30$ per grade chosen at random, voluntary response bias leading to an overestimate.
:::

:::exercise Question 2 (10 points): Analysing data
Random samples of $40$ customers at each of two cafés give these waiting times, in minutes.

| Café | Min | $Q_1$ | Median | $Q_3$ | Max | Mean | SD |
|---|---|---|---|---|---|---|---|
| A | $2$ | $5$ | $7$ | $9$ | $16$ | $7.4$ | $3.0$ |
| B | $1$ | $3$ | $5$ | $11$ | $22$ | $7.1$ | $5.2$ |

a) Compare the centres and the variability of the two distributions of waiting times. [4 points]
b) Use the $1.5\times\text{IQR}$ rule to decide whether café B has any outliers. [3 points]
c) A customer wants to be fairly sure of not waiting more than $12$ minutes. Which café would you recommend? Justify your choice. [3 points]

::hint
**What you need:** compare with comparative words; for café B, $\text{IQR}=11-3=8$.

::solution
a) Centre: the median waiting time at café B ($5$ minutes) is less than at café A ($7$ minutes), while the means are about the same ($7.1$ and $7.4$ minutes). Variability: waiting times at café B vary much more, with IQR $11-3=8$ minutes compared with $9-5=4$ minutes at café A, and standard deviation $5.2$ compared with $3.0$ minutes.

b) For café B, $\text{IQR}=8$, so the fences are $3-1.5(8)=-9$ and $11+1.5(8)=23$ minutes. The minimum $1$ and the maximum $22$ are both inside the fences, so café B has no outliers.

c) Café A. At café A, $75\%$ of customers waited at most $9$ minutes and the longest wait was $16$ minutes. At café B, about a quarter of customers waited $11$ minutes or more and the longest wait was $22$ minutes, so long waits are more common there, even though the median is lower.

So café B has the shorter typical wait but much more variable waits, has no outliers, and café A is the safer choice for avoiding a wait of more than $12$ minutes.

**Answer.** a) B has a lower median, similar mean, much larger spread; b) no outliers (fences $-9$ and $23$); c) café A.
:::

:::exercise Question 3 (10 points): Inference
Fifty student volunteers were randomly assigned to revise for a test using a new app ($25$ students) or the textbook ($25$ students). The app group's scores had mean $78.4$ and standard deviation $8.1$; the textbook group's scores had mean $73.6$ and standard deviation $9.0$. Dotplots of both groups show no strong skew or outliers.

Do these data give convincing evidence at $\alpha=0.05$ that revising with the app leads to a higher mean score than revising with the textbook? [10 points]

::hint
**What you need:** a two-sample $t$ test; standard error $\sqrt{\dfrac{8.1^2}{25}+\dfrac{9.0^2}{25}}$.

::solution
*State* [2 points]: $H_0:\mu_A-\mu_T=0$ and $H_a:\mu_A-\mu_T>0$, where $\mu_A$ and $\mu_T$ are the true mean scores for students like these who revise with the app and with the textbook; $\alpha=0.05$.

*Plan* [3 points]: two-sample $t$ test for a difference in means. Random: the treatments were randomly assigned. Normal/large sample: each group has $25<30$ students, but the dotplots show no strong skew or outliers.

*Do* [3 points]: the standard error is $\sqrt{\dfrac{8.1^2}{25}+\dfrac{9.0^2}{25}}=\sqrt{2.6244+3.24}\approx2.422$, so
$$t=\frac{78.4-73.6}{2.422}\approx1.98,$$
with df $\approx47.5$ from the calculator, giving a P-value of about $0.027$.

*Conclude* [2 points]: because the P-value of about $0.027$ is less than $\alpha=0.05$, we reject $H_0$. There is convincing evidence that revising with the app leads to a higher mean score than revising with the textbook, for students like these volunteers. Since the treatments were randomly assigned, we can conclude cause and effect, but the volunteers were not a random sample, so we should not generalize to all students.

So the data are convincing at the $5\%$ level.

**Answer.** $t\approx1.98$, P-value $\approx0.027$; reject $H_0$.
:::

:::exercise Question 4 (10 points): Integrated question
A basketball player has made $75\%$ of her free throws over her career. Assume her shots are independent.

a) In a game she takes $12$ free throws. Find the probability that she makes at least $10$ of them. [3 points]
b) This season she made $162$ of $240$ free throws. Treating these shots as a random sample of her current shooting, is there convincing evidence at $\alpha=0.05$ that her current success rate is less than $0.75$? [4 points]
c) Her coach says the drop shows that her new shoes caused her to shoot worse. Explain why the data do not support this conclusion. [2 points]
d) Describe a Type I error in the context of part b). [1 point]

::hint
**What you need:** binomial with $n=12$, $p=0.75$; a one-sample $z$ test with $p_0=0.75$.

::solution
a) The number of successful shots $X$ is binomial with $n=12$ and $p=0.75$, because each shot is a success or failure, shots are independent, $n$ is fixed and $p$ is the same. Then
$$P(X\ge10)=P(X=10)+P(X=11)+P(X=12)\approx0.2323+0.1267+0.0317=0.3907.$$

b) *State:* $H_0:p=0.75$ and $H_a:p<0.75$, where $p$ is her current true success rate; $\alpha=0.05$. *Plan:* one-sample $z$ test; the shots are treated as a random sample; $np_0=180$ and $n(1-p_0)=60$ are both at least $10$. *Do:* $\hat p=\dfrac{162}{240}=0.675$ and $z=\dfrac{0.675-0.75}{\sqrt{0.75(0.25)/240}}=\dfrac{-0.075}{0.02795}\approx-2.68$, so the P-value is about $0.0036$. *Conclude:* because $0.0036<0.05$, we reject $H_0$; there is convincing evidence that her current success rate is less than $0.75$.

c) The shoes were not randomly assigned in an experiment; this is an observational comparison over time. Other variables, such as fatigue, an injury or a change in practice time, could explain the drop, so we cannot conclude that the shoes caused it.

d) A Type I error would be concluding that her success rate has dropped below $0.75$ when in fact it is still $0.75$.

So the probability in a) is about $0.3907$, the evidence in b) is convincing, and the drop cannot be blamed on the shoes.

**Answer.** a) $\approx0.3907$; b) $z\approx-2.68$, P-value $\approx0.0036$, reject $H_0$; c) no random assignment; d) as stated.
:::
