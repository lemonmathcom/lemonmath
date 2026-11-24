---
title: Statistics, data displays and probability
description: SAT Problem-Solving and Data Analysis: mean, median and outliers, frequency tables, scatterplots, two-way tables, conditional probability and sampling.
minutes: 35
---

:::goals
- Compute and compare the mean and the median, and explain how an outlier affects each.
- Read frequency tables, scatterplots and lines of best fit, and interpret their slope and intercept.
- Find probabilities, including conditional probabilities, from a two-way table.
- Decide what conclusions a survey or a study can support.
:::

Statistics questions on the SAT rarely ask for long calculations. Instead, they test whether you **understand** a statistic: what changes the mean but not the median, what a slope means in a scatterplot, or whether a survey can speak for a whole population. Vietnamese students learn most of these ideas between grades 6 and 10; the new part is the vocabulary, so the glossary at the end of this lesson matters.

## Mean, median and outliers

The **mean** is the sum of the values divided by their number. The **median** is the middle value of the ordered data (the mean of the two middle values when the number of values is even). An **outlier** is a value far from the others: it pulls the mean toward itself but barely moves the median.

:::example Finding a missing value
The mean of Nam's first 6 test scores is 82. After his seventh test, the mean of all 7 scores is 84. What was his score on the seventh test?

**Solution.** Work with totals, not means. The first 6 scores add up to $6\cdot82=492$; all 7 add up to $7\cdot84=588$. The seventh score is $588-492=96$. You type **96**.
:::

:::example The effect of an outlier
A small company has 9 employees. The highest salary is much greater than all the others. If that salary is removed from the data, which statement is true?
A. The mean and the median both increase.
B. The mean decreases, and the median changes little.
C. The median decreases, and the mean does not change.
D. The mean and the median do not change.

**Solution.** The outlier is far above the other values, so removing it lowers the mean a lot. The median moves only from the 5th value to the average of the 4th and 5th values of the remaining 8, a small change. The answer is **B**.
:::

The **standard deviation** measures how spread out the values are around the mean. The SAT asks only to compare it: a data set whose values cluster closely around the mean has a smaller standard deviation than one whose values are spread far apart. The **range** is the largest value minus the smallest.

## Frequency tables and scatterplots

:::example Median from a frequency table
The table shows the number of books read last month by 20 students.

| Books | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| Students | $3$ | $5$ | $8$ | $4$ |

What is the median number of books?
A. $2$
B. $2.5$
C. $3$
D. $2.65$

**Solution.** With 20 values, the median is the mean of the 10th and 11th values. Counting up: values 1 to 3 are "1", values 4 to 8 are "2", values 9 to 16 are "3". Both the 10th and 11th values are $3$, so the median is $3$: answer **C**. Option D is the mean, $\dfrac{3+10+24+16}{20}=2.65$.
:::

A **scatterplot** shows pairs of data. A **line of best fit** $y=mx+b$ models the trend: the slope $m$ is the predicted change in $y$ for each increase of $1$ in $x$, and $b$ is the predicted value of $y$ when $x=0$.

:::graph Hours of study and test scores, with the line of best fit $y=2.5x+40$
alt: Eight data points rising from left to right around a straight line that starts at 40 on the y-axis
x: 0..9
y: 35..65
shape: free
plot: 2.5x + 40
point: (1, 42)
point: (2, 46)
point: (3, 48)
point: (4, 51)
point: (5, 52)
point: (6, 56)
point: (7, 57)
point: (8, 61)
:::

:::example Interpreting a line of best fit
For the data in the scatterplot, the line of best fit is $y=2.5x+40$, where $x$ is the number of hours a student studied and $y$ is the test score. Which statement is the best interpretation of $2.5$?
A. Each student studied 2.5 hours.
B. A student who did not study is predicted to score 2.5.
C. For each additional hour of study, the predicted score increases by 2.5 points.
D. The score of every student increases by 2.5 points per hour.

**Solution.** The slope is the change in the **predicted** score per hour: the answer is **C**. Option D is too strong: a model predicts a trend, not the score of every student. The model predicts $2.5\cdot6+40=55$ points for 6 hours of study.
:::

## Two-way tables and probability

The probability of an event, when all outcomes are equally likely, is $\dfrac{\text{number of favorable outcomes}}{\text{total number of outcomes}}$. In a two-way table, a **conditional probability** "given that…" restricts the total to one row or one column.

:::example A two-way table
The table shows the club choices of 80 students.

| | Math club | Art club | Total |
|---|---|---|---|
| Grade 10 | $18$ | $12$ | $30$ |
| Grade 11 | $22$ | $28$ | $50$ |
| Total | $40$ | $40$ | $80$ |

A student is chosen at random from those in the art club. What is the probability that the student is in grade 11?
A. $\dfrac{7}{20}$
B. $\dfrac{14}{25}$
C. $\dfrac{7}{10}$
D. $\dfrac{5}{8}$

**Solution.** "From those in the art club" means the total is the art column, $40$. Of these, $28$ are in grade 11: $\dfrac{28}{40}=\dfrac{7}{10}$. The answer is **C**. Option B is $\dfrac{28}{50}$, the probability of art **given** grade 11; option A is $\dfrac{28}{80}$.
:::

## Samples and studies

:::note What can we conclude?
- A **random sample** lets us generalize to the population it was chosen from, and only to that population.
- A **margin of error** gives a range of plausible values for the population: an estimate of 64% with a margin of error of 5% suggests a true value between 59% and 69%.
- Only a **randomized experiment** (subjects randomly assigned to treatments) supports a cause-and-effect conclusion. An observational study shows only an association.
:::

:::warning Common traps
- **The wrong total in a conditional probability.** "Given grade 11" divides by the grade 11 total, not by the grand total.
- **Mean versus median with outliers.** Outliers move the mean much more than the median.
- **Over-generalizing.** A sample of one school says nothing certain about all the schools in a country.
- **Causation from observation.** "People who drink more coffee sleep less" does not show that coffee causes less sleep.
:::

:::tip Statistics in Desmos
Type a list such as `L=[3,9,4,7,12,5]`, then `mean(L)`, `median(L)` or `stdev(L)`. For a line of best fit, enter the data in a table and type `y_1~mx_1+b`.
:::

:::terms
- mean | số trung bình
- median | trung vị
- outlier | giá trị ngoại lai
- standard deviation | độ lệch chuẩn
- range | khoảng biến thiên
- scatterplot | biểu đồ phân tán
- line of best fit | đường thẳng khớp nhất
- two-way table | bảng hai chiều
- conditional probability | xác suất có điều kiện
- random sample | mẫu ngẫu nhiên
- margin of error | biên sai số
:::

## Similar exercises

:::exercise Student-produced response
The mean of five numbers is 12. Four of the numbers are 10, 14, 9 and 15. What is the fifth number?

::hint
**What you need:** sum = mean × number of values.

**Steps:**
1. The sum of all five numbers is $5\cdot12$.
2. Subtract the four known numbers.

::solution
Let $x$ be the fifth number.

The mean of the five numbers is $12$, so the sum of the five numbers is
$$5\cdot12=60.$$

The sum of the four given numbers is $10+14+9+15=48$. Therefore
$$48+x=60\iff x=60-48=12.$$

So the fifth number is $12$.

**Answer.** $12$.
:::

:::exercise Multiple choice
For the data set 2, 4, 4, 5, 7, 9, 30, which statement is true?
A. The mean is less than the median.
B. The mean is equal to the median.
C. The mean is greater than the median.
D. The median is 4.

::hint
**What you need:** the effect of the outlier $30$.

**Steps:**
1. The median is the 4th of 7 ordered values.
2. Compute the mean.

::solution
The data set has $7$ values in increasing order: $2, 4, 4, 5, 7, 9, 30$.

Since there are $7$ values (an odd number), the median is the middle value, that is, the $4$th value: the median is $5$.

The sum of the values is $2+4+4+5+7+9+30=61$, so the mean is
$$\frac{61}{7}\approx8.7.$$

Since $8.7>5$, the mean is greater than the median. The reason is that the outlier $30$ pulls the mean up, while the median is hardly affected.

So the answer is **C**.

*Remark.* Options A and B are false because the mean $\approx8.7$ is greater than the median $5$; option D is false because the median is $5$, while $4$ is only the mode of the data set.

**Answer.** C.
:::

:::exercise Student-produced response
Use the two-way table of club choices above. A student is chosen at random from grade 10. What is the probability that the student is in the math club? Give your answer as a decimal.

::hint
**What you need:** "from grade 10" means the total is the grade 10 row.

**Steps:**
1. The grade 10 total is $30$.
2. Divide the math club count in that row by $30$.

::solution
Let $A$ be the event "the chosen student is in the math club". Each grade 10 student is equally likely to be chosen, so the probability of $A$ equals the number of grade 10 students in the math club divided by the total number of grade 10 students.

From the two-way table, $18$ of the $30$ grade 10 students are in the math club. Therefore
$$P(A)=\frac{18}{30}=0.6.$$

So the probability that the student is in the math club is $0.6$.

*Exam tip.* When entering the answer in Bluebook, type `0.6`.

**Answer.** $0.6$.
:::

:::exercise Student-produced response
A line of best fit for some data is $y=1.8x+12$. What value of $y$ does the line predict when $x=10$?

::hint
**What you need:** substitute into the equation of the line.

**Steps:**
1. $1.8\cdot10+12$.

::solution
The line of best fit has equation $y=1.8x+12$.

Substituting $x=10$ into the equation, we get
$$y=1.8\cdot10+12=18+12=30.$$

So when $x=10$, the line predicts $y=30$.

**Answer.** $30$.
:::

:::exercise Multiple choice
Researchers randomly assigned 100 volunteers to two groups. One group walked 30 minutes every day and the other did not. After 8 weeks, the walking group had significantly lower blood pressure on average. Which conclusion is best supported?
A. Walking every day causes lower blood pressure for all adults.
B. Walking every day is likely to cause lower blood pressure for people similar to the volunteers.
C. People with low blood pressure choose to walk more.
D. No conclusion can be made because the volunteers were not a random sample.

::hint
**What you need:** random assignment supports cause and effect; a random sample is needed to generalize to a population.

**Steps:**
1. Was there random assignment? Yes.
2. Was there a random sample from all adults? No.

::solution
The volunteers were randomly assigned to the two groups, so the groups are similar in every respect other than walking. Hence the difference in blood pressure after $8$ weeks (significantly lower in the walking group) can be attributed to walking: this experiment supports a causal conclusion.

However, the $100$ volunteers were not randomly selected from all adults. So the conclusion can only be generalized to people similar to the volunteers, not to all adults.

So the best supported conclusion is that walking every day is likely to cause lower blood pressure for people similar to the volunteers, and the answer is **B**.

*Remark.* Option A over-generalizes, since it applies to all adults; option C reverses the cause and effect, while the groups were randomly assigned rather than self-selected; option D ignores what random assignment does show.

**Answer.** B.
:::

## Application exercises

:::exercise Combining two classes
Class A has 20 students with a mean score of 75. Class B has 30 students with a mean score of 80. What is the mean score of all 50 students?

::hint
**What you need:** combine totals, not means.

**Steps:**
1. Total of class A: $20\cdot75$; class B: $30\cdot80$.
2. Divide the combined total by $50$.

::solution
The total score of class A equals the number of students times the mean score:
$$20\cdot75=1{,}500.$$

The total score of class B is
$$30\cdot80=2{,}400.$$

The total score of all $50$ students is $1{,}500+2{,}400=3{,}900$, so the mean score of the two classes together is
$$\frac{1{,}500+2{,}400}{50}=\frac{3{,}900}{50}=78.$$

The result is reasonable because $75<78<80$ and the mean is closer to $80$ than to $75$, since class B is larger.

So the mean score of all $50$ students is $78$.

**Answer.** $78$.
:::

:::exercise Marbles
A bag contains 4 red, 6 blue and 5 green marbles. One marble is drawn at random. What is the probability that it is not blue?

::hint
**What you need:** count the outcomes that are not blue.

**Steps:**
1. The total is $15$.
2. Not blue: $4+5$.

::solution
Let $A$ be the event "the marble drawn is not blue".

The total number of marbles in the bag is $4+6+5=15$, and each marble is equally likely to be drawn.

The number of marbles that are not blue is $4+5=9$ (the red and the green ones). Therefore
$$P(A)=\frac{9}{15}=\frac35.$$

So the probability that the marble drawn is not blue is $\dfrac35$.

**Answer.** $\dfrac35$.
:::

:::exercise Comparing spread
Data set A is 48, 49, 50, 51, 52. Data set B is 30, 40, 50, 60, 70. Compare the means, the ranges and the standard deviations of the two data sets.

::hint
**What you need:** both sets are symmetric about the same middle value.

**Steps:**
1. Compute the means.
2. Compare how far the values lie from the mean.

::solution
The mean of data set A is
$$\frac{48+49+50+51+52}{5}=\frac{250}{5}=50,$$
and the mean of data set B is
$$\frac{30+40+50+60+70}{5}=\frac{250}{5}=50.$$

The range equals the largest value minus the smallest value. For set A: $52-48=4$. For set B: $70-30=40$.

To compare the standard deviations, we compute the sum of the squared deviations from the mean $50$. For set A:
$$(-2)^2+(-1)^2+0^2+1^2+2^2=10.$$
For set B:
$$(-20)^2+(-10)^2+0^2+10^2+20^2=1{,}000.$$

The two sets have the same number of values, so the sum of squared deviations of B is $100$ times that of A, which means the standard deviation of B is $10$ times the standard deviation of A. This agrees with the fact that the values of B lie much farther from the mean.

So the two data sets have the same mean $50$; the range of A is $4$ and the range of B is $40$; and B has the larger standard deviation.

**Answer.** Same mean $50$; the range of A is $4$ and the range of B is $40$; B has the larger standard deviation.
:::

:::exercise Challenge
The numbers 6, 8, $x$, 15, 21 are listed in increasing order, and their mean is equal to their median. What is the value of $x$?

::hint
**What you need:** with five ordered values, the median is the middle one, $x$.

**Steps:**
1. Write the mean as $\dfrac{50+x}{5}$.
2. Set it equal to $x$.

::solution
The five numbers $6, 8, x, 15, 21$ are listed in increasing order, so the middle number is the third one. Hence the median is $x$.

The sum of the four known numbers is $6+8+15+21=50$, so the mean is $\dfrac{50+x}{5}$.

The mean equals the median, so
$$\begin{aligned}\frac{50+x}{5}&=x\\50+x&=5x\\50&=4x\\x&=12.5.\end{aligned}$$

Check the condition: $8<12.5<15$, so the increasing order is kept (the condition is satisfied). Then the mean is $\dfrac{62.5}{5}=12.5$, which is exactly the median.

So $x=12.5$.

**Answer.** $12.5$.
:::

:::quiz
::mc TH
What is the median of the data set 3, 9, 4, 7, 12, 5?
A. $5$
B. $6$
C. $7$
D. $6.7$
::key B
Ordered: 3, 4, 5, 7, 9, 12. The median is $\dfrac{5+7}{2}=6$. Option D is the mean, about $6.7$.

::mc NB
What is the mean of 4, 8, 10 and 14?
A. $8$
B. $10$
C. $9$
D. $36$
::key C
$\dfrac{36}{4}=9$. Option D is the sum.

::mc NB
A box contains 3 red, 5 white and 2 black balls. One ball is chosen at random. What is the probability that it is white?
A. $\dfrac12$
B. $\dfrac15$
C. $\dfrac{3}{10}$
D. $\dfrac{1}{10}$
::key A
$\dfrac{5}{10}=\dfrac12$.

::mc TH
A random sample of 300 adults in a city was asked whether they use public transport. Of those, 45% said yes. Which conclusion is best supported?
A. Exactly 45% of adults in the country use public transport.
B. Public transport causes 45% of adults to travel less.
C. Exactly 135 adults in the city use public transport.
D. About 45% of adults in the city use public transport.
::key D
A random sample supports an estimate for the population it came from, the adults in that city, and only approximately.

::tf NB TH TH TH
Use the two-way table of club choices in this lesson.
a) There are 80 students in total.
b) The probability that a randomly chosen student is in the math club is $\dfrac12$.
c) The probability that a grade 10 student chosen at random is in the art club is $0.4$.
d) The probability that a math club member chosen at random is in grade 10 is $0.6$.
::key T T T F
a) True. b) True: $\dfrac{40}{80}$. c) True: $\dfrac{12}{30}=0.4$. d) False: $\dfrac{18}{40}=0.45$.

::sa VD
The mean of 7 numbers is 10. When one of the numbers, 22, is removed, what is the mean of the remaining numbers?
::key 8
$\dfrac{70-22}{6}=\dfrac{48}{6}=8$.

::sa TH
Use the two-way table of club choices. A math club member is chosen at random. What is the probability that the student is in grade 11? Give your answer as a decimal.
::key 0.55
$\dfrac{22}{40}=0.55$.
:::
