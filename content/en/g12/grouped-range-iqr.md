---
title: Range and interquartile range of grouped data
description: Find the range and the interquartile range of grouped data, use them to compare the spread of two data sets, and interpret them in real situations.
minutes: 20
---

:::goals
- Find the range $R$ of grouped data.
- Find the quartiles $Q_1$, $Q_3$ and the interquartile range $\Delta_Q$ of grouped data.
- Compare the spread of two sets of grouped data and explain what it means.
- Understand why these measures are only approximations of the measures of the raw data.
:::

A school surveyed how long students in classes 12A and 12B take to travel from home to school, $40$ students in each class. The results were grouped as follows.

| Time (minutes) | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|---|
| Class 12A | $4$ | $12$ | $12$ | $8$ | $4$ |
| Class 12B | $2$ | $6$ | $24$ | $6$ | $2$ |

In both classes the times stretch from $0$ to $50$ minutes. So which class has the more even travel times, and which number measures that?

In grade 10 we measured the spread of raw data. This lesson does the same when we only have a grouped table.

## The range of grouped data

### Exploring: what do we know about the largest and smallest values?

From the table for class 12A we do not know each student's exact time. We only know that the quickest student is in the class $[0, 10)$ and the slowest is in the class $[40, 50)$. So the difference between those two values is at most $50-0=50$ minutes. We take the number $50$ as the range of the grouped data.

In this lesson, grouped data have $k$ classes $[u_1, u_2)$, $[u_2, u_3)$, …, $[u_k, u_{k+1})$ with frequencies $n_1$, $n_2$, …, $n_k$ and sample size $n=n_1+n_2+\cdots+n_k$. We assume that the first and last classes have non-zero frequency.

:::definition Range
The range of grouped data is
$$R=u_{k+1}-u_1,$$
that is, the right end of the last class minus the left end of the first class.
:::

For both classes, $R=50-0=50$ minutes. The range **cannot** tell the two classes apart, because it depends only on the two classes at the ends. We need a measure that looks at the middle of the data.

## The interquartile range

In grade 11 we found the quartiles of grouped data by "spreading out" the values evenly inside the class that contains them. Recall: the first quartile $Q_1$ is at position $\frac n4$, the third quartile $Q_3$ at position $\frac{3n}{4}$.

:::theorem Quartiles of grouped data
Let $[u_m, u_{m+1})$ be **the first class whose cumulative frequency is greater than or equal to $\frac n4$**, let $n_m$ be its frequency and $C=n_1+\cdots+n_{m-1}$ the cumulative frequency of the classes before it. Then
$$Q_1=u_m+\frac{\frac n4-C}{n_m}\cdot(u_{m+1}-u_m).$$
$Q_3$ is found in exactly the same way, with $\frac n4$ replaced by $\frac{3n}{4}$ (and the class chosen using $\frac{3n}{4}$).
:::

The fraction $\dfrac{\frac n4-C}{n_m}$ tells us how far into the class position $\frac n4$ lies. For example, if the class holds $12$ values and we need $6$ more of them, then $Q_1$ is in the middle of the class.

:::definition Interquartile range
The interquartile range of grouped data is $\Delta_Q=Q_3-Q_1$. The interval from $Q_1$ to $Q_3$ holds about the middle half of the data; the smaller $\Delta_Q$, the more concentrated the middle of the data.
:::

The first example finds all these measures for class 12A.

:::example Class 12A
Find $R$, $Q_1$, $Q_3$ and $\Delta_Q$ for the travel times of class 12A.

**Solution.** The sample size is $n=40$ and the cumulative frequencies are $4$, $16$, $28$, $36$, $40$. First, $R=50-0=50$.

We have $\frac n4=10$. Since $4<10\le16$, the class containing $Q_1$ is $[10, 20)$, with $C=4$, $n_m=12$:

$$Q_1=10+\frac{10-4}{12}\cdot10=10+5=15.$$

We have $\frac{3n}{4}=30$. Since $28<30\le36$, the class containing $Q_3$ is $[30, 40)$, with $C=28$, $n_m=8$:

$$Q_3=30+\frac{30-28}{8}\cdot10=30+2.5=32.5.$$

So $R=50$ minutes, $Q_1=15$, $Q_3=32.5$ and $\Delta_Q=32.5-15=17.5$ minutes. About half the students of class 12A take between $15$ and $32.5$ minutes to get to school.
:::

Doing the same for class 12B answers the opening question.

:::example Comparing the two classes
Find $\Delta_Q$ for class 12B and compare it with class 12A.

**Solution.** The cumulative frequencies for class 12B are $2$, $8$, $32$, $38$, $40$. Both positions $10$ and $30$ satisfy $8<\text{position}\le32$, so $Q_1$ and $Q_3$ are both in the class $[20, 30)$, with $C=8$, $n_m=24$:

$$\begin{aligned}
Q_1&=20+\frac{10-8}{24}\cdot10=20+\frac56\approx20.83,\\
Q_3&=20+\frac{30-8}{24}\cdot10=20+\frac{55}{6}\approx29.17.
\end{aligned}$$

Hence $\Delta_Q=\dfrac{55}{6}-\dfrac56=\dfrac{50}{6}\approx8.33$ minutes.

| | $R$ | $Q_1$ | $Q_3$ | $\Delta_Q$ |
|---|---|---|---|---|
| Class 12A | $50$ | $15$ | $32.5$ | $17.5$ |
| Class 12B | $50$ | $20.83$ | $29.17$ | $8.33$ |

The two classes have the same range, but the interquartile range of 12B is only about half that of 12A. So the travel times of class 12B are more even.
:::

When $\frac n4$ is not a whole number, the formula is used in the same way. The class width need not be $10$ either.

:::example Heights of seedlings
The heights (cm) of $50$ seedlings in a nursery are given in the table. Find $R$ and $\Delta_Q$.

| Height (cm) | $[10, 14)$ | $[14, 18)$ | $[18, 22)$ | $[22, 26)$ | $[26, 30)$ |
|---|---|---|---|---|---|
| Seedlings | $6$ | $10$ | $16$ | $12$ | $6$ |

**Solution.** We have $R=30-10=20$ cm. The cumulative frequencies are $6$, $16$, $32$, $44$, $50$; each class has width $4$.

For $\frac n4=12.5$: since $6<12.5\le16$, the class containing $Q_1$ is $[14, 18)$:

$$Q_1=14+\frac{12.5-6}{10}\cdot4=14+2.6=16.6.$$

For $\frac{3n}{4}=37.5$: since $32<37.5\le44$, the class containing $Q_3$ is $[22, 26)$:

$$Q_3=22+\frac{37.5-32}{12}\cdot4=22+\frac{11}{6}\approx23.83.$$

So $R=20$ cm and $\Delta_Q\approx23.83-16.6=7.23$ cm.
:::

:::note Outliers
As in grade 10, a value is regarded as an **outlier** (an unusual value) if it is less than $Q_1-1.5\,\Delta_Q$ or greater than $Q_3+1.5\,\Delta_Q$. For the nursery above, the two limits are about $5.75$ cm and $34.68$ cm: a seedling $36$ cm tall would deserve a second look.
:::

## Measures of grouped data are approximations

Grouping loses information about the individual values. The next example compares the measures from the raw data with those from the grouped table.

:::example Raw data and grouped data
The travel times (minutes) of $20$ students, sorted:
$$5,\ 8,\ 12,\ 14,\ 15,\ 17,\ 18,\ 19,\ 21,\ 22,\ 23,\ 24,\ 25,\ 26,\ 28,\ 31,\ 33,\ 36,\ 41,\ 47.$$
a) Find $R$ and $\Delta_Q$ from the raw data. b) Group them into the classes $[0, 10)$, …, $[40, 50)$ and find them again.

**Solution.** a) With the raw data (the grade-10 method): $R=47-5=42$. The lower half is the first $10$ values and the upper half the last $10$:

$$Q_1=\frac{15+17}{2}=16,\qquad Q_3=\frac{28+31}{2}=29.5,\qquad \Delta_Q=13.5.$$

b) Counting the values in each class gives the frequencies $2$, $6$, $7$, $3$, $2$ (cumulative $2$, $8$, $15$, $18$, $20$). Then $R=50-0=50$. With $\frac n4=5$ and $\frac{3n}{4}=15$:

$$Q_1=10+\frac{5-2}{6}\cdot10=15,\qquad Q_3=20+\frac{15-8}{7}\cdot10=30,\qquad \Delta_Q=15.$$

So the grouped table gives $R=50$ (really $42$) and $\Delta_Q=15$ (really $13.5$). The measures of grouped data are **approximate values** of the measures of the raw data; $\Delta_Q$ is much closer than $R$.
:::

:::warning Common mistakes
- **Wrong end point for $R$.** Wrong: for class 12A, $R=40-0=40$ (using the left end of the last class). Why it is wrong: the largest value may be close to $50$. Right: $R=u_{k+1}-u_1=50$.
- **Including the quartile's own class in $C$.** Wrong: $Q_1=10+\frac{10-16}{12}\cdot10=5$, which is even below the left end $10$ of the class. Right: $C$ counts only the classes **before** it, $C=4$, so $Q_1=15$.
- **Choosing the class with the largest frequency.** Wrong: for class 12A, putting $Q_1$ in $[10, 20)$ or $[20, 30)$ "because they have frequency $12$". Right: choose the first class whose cumulative frequency is $\ge\frac n4$.
- **Forgetting to multiply by the class width.** Wrong: for the nursery, $Q_1=14+\frac{6.5}{10}=14.65$. Right: multiply by the width $4$, $Q_1=16.6$.
:::

## Key terms

:::terms
- grouped data | mẫu số liệu ghép nhóm
- class | nhóm số liệu
- frequency | tần số
- cumulative frequency | tần số tích luỹ
- class width | độ rộng nhóm
- range | khoảng biến thiên
- quartile | tứ phân vị
- interquartile range | khoảng tứ phân vị
- outlier | giá trị bất thường
- approximate value | giá trị xấp xỉ
:::

## Summary

- Grouped data $[u_1, u_2)$, …, $[u_k, u_{k+1})$, frequencies $n_1$, …, $n_k$, sample size $n$.
- $R=u_{k+1}-u_1$ (right end of the last class minus left end of the first class).
- $Q_1=u_m+\dfrac{\frac n4-C}{n_m}(u_{m+1}-u_m)$, where class $m$ is the first class with cumulative frequency $\ge\frac n4$ and $C$ is the cumulative frequency of the classes before it; $Q_3$: replace $\frac n4$ by $\frac{3n}{4}$.
- $\Delta_Q=Q_3-Q_1$: the width of the middle half of the data; smaller means more even.
- These are approximate values; $\Delta_Q$ is less affected by the two end classes than $R$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The masses (g) of $40$ apples are given in the table. Find $R$, $Q_1$, $Q_3$ and $\Delta_Q$.

| Mass (g) | $[150, 160)$ | $[160, 170)$ | $[170, 180)$ | $[180, 190)$ | $[190, 200)$ |
|---|---|---|---|---|---|
| Apples | $4$ | $10$ | $14$ | $8$ | $4$ |

::hint
**What you need:** $R=u_{k+1}-u_1$; the formulas for $Q_1$, $Q_3$ of grouped data.

**Steps:**
1. Write the cumulative frequencies.
2. Find the classes containing position $10$ and position $30$.
3. Substitute into the formula.

::solution
Cumulative frequencies: $4$, $14$, $28$, $36$, $40$; $R=200-150=50$.
$$Q_1=160+\frac{10-4}{10}\cdot10=166,\qquad Q_3=180+\frac{30-28}{8}\cdot10=182.5.$$

**Answer.** $R=50$ g, $Q_1=166$, $Q_3=182.5$, $\Delta_Q=16.5$ g.
:::

:::exercise
The daily reading times (minutes) of $50$ students are given in the table. Find $Q_1$, $Q_3$ and $\Delta_Q$ (to two decimal places).

| Time (minutes) | $[0, 20)$ | $[20, 40)$ | $[40, 60)$ | $[60, 80)$ | $[80, 100)$ |
|---|---|---|---|---|---|
| Students | $5$ | $9$ | $16$ | $12$ | $8$ |

::hint
**What you need:** the position of $Q_1$ is $\frac n4=12.5$ and that of $Q_3$ is $\frac{3n}{4}=37.5$; the class width is $20$.

**Steps:**
1. Cumulative frequencies: $5$, $14$, $30$, $42$, $50$.
2. Choose the class for each position and substitute into the formula.

::solution
$$Q_1=20+\frac{12.5-5}{9}\cdot20=20+\frac{50}{3}\approx36.67,\qquad Q_3=60+\frac{37.5-30}{12}\cdot20=72.5.$$

**Answer.** $Q_1\approx36.67$; $Q_3=72.5$; $\Delta_Q\approx35.83$ minutes.
:::

:::exercise
A shop tests the battery life (hours) of $50$ phones of each of two models X and Y.

| Battery life (hours) | $[8, 10)$ | $[10, 12)$ | $[12, 14)$ | $[14, 16)$ | $[16, 18)$ |
|---|---|---|---|---|---|
| Model X | $3$ | $10$ | $24$ | $10$ | $3$ |
| Model Y | $8$ | $12$ | $10$ | $12$ | $8$ |

Find the interquartile range of each model. If a customer wants a steady battery life, which model should they choose?

::hint
**What you need:** a smaller $\Delta_Q$ means the middle of the data is more concentrated.

**Steps:**
1. Positions $12.5$ and $37.5$; write the cumulative frequencies for each model.
2. Find $Q_1$, $Q_3$ and $\Delta_Q$ for each model and compare.

::solution
Model X (cumulative $3$, $13$, $37$, $47$, $50$):
$$Q_1=10+\frac{12.5-3}{10}\cdot2=11.9,\qquad Q_3=14+\frac{37.5-37}{10}\cdot2=14.1,\qquad \Delta_Q=2.2.$$
Model Y (cumulative $8$, $20$, $30$, $42$, $50$):
$$Q_1=10+\frac{12.5-8}{12}\cdot2=10.75,\qquad Q_3=14+\frac{37.5-30}{12}\cdot2=15.25,\qquad \Delta_Q=4.5.$$
Both models have the same $R=10$ hours, but the $\Delta_Q$ of X is much smaller.

**Answer.** $\Delta_Q=2.2$ hours (X) and $4.5$ hours (Y); choose model X.
:::

:::exercise
The weekly hours of exercise of $30$ students are given in the table.

| Hours | $[0, 2)$ | $[2, 4)$ | $[4, 6)$ | $[6, 8)$ | $[8, 10)$ |
|---|---|---|---|---|---|
| Students | $3$ | $7$ | $10$ | $6$ | $4$ |

Is each claim true or false?

a) The range of the data is $10$.

b) The first quartile lies in the class $[2, 4)$.

c) $Q_3\approx6.83$.

d) The interquartile range is greater than $4$.

::hint
**What you need:** $R=u_{k+1}-u_1$; the class containing $Q_1$ is the first class with cumulative frequency $\ge\frac n4$.

**Steps:**
1. Cumulative frequencies: $3$, $10$, $20$, $26$, $30$; $\frac n4=7.5$, $\frac{3n}{4}=22.5$.
2. Find $Q_1$, $Q_3$ and $\Delta_Q$.

::solution
a) **True.** $R=10-0=10$.

b) **True.** $3<7.5\le10$, and $Q_1=2+\dfrac{7.5-3}{7}\cdot2=\dfrac{23}{7}\approx3.29$.

c) **True.** $20<22.5\le26$, so $Q_3=6+\dfrac{22.5-20}{6}\cdot2=\dfrac{41}{6}\approx6.83$.

d) **False.** $\Delta_Q=\dfrac{41}{6}-\dfrac{23}{7}=\dfrac{149}{42}\approx3.55<4$.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise
The masses (kg) of $40$ students are given in the table. Find the interquartile range (in kg, to two decimal places).

| Mass (kg) | $[40, 45)$ | $[45, 50)$ | $[50, 55)$ | $[55, 60)$ | $[60, 65)$ |
|---|---|---|---|---|---|
| Students | $4$ | $9$ | $15$ | $8$ | $4$ |

::hint
**What you need:** the formulas for $Q_1$, $Q_3$; the class width is $5$.

**Steps:**
1. Cumulative frequencies: $4$, $13$, $28$, $36$, $40$.
2. Position $10$ lies in $[45, 50)$, position $30$ in $[55, 60)$.

::solution
$$Q_1=45+\frac{10-4}{9}\cdot5=\frac{145}{3}\approx48.33,\qquad Q_3=55+\frac{30-28}{8}\cdot5=56.25.$$
$$\Delta_Q=56.25-\frac{145}{3}\approx7.9167.$$

**Answer.** $7.92$.
:::

:::exercise
(Revisiting the median of grouped data, grade 11.) For the table of apple masses in Exercise 1, find the median $M_e$ and check that $Q_1<M_e<Q_3$.

::hint
**What you need:** $M_e$ is found like $Q_1$ but at position $\frac n2$.

**Steps:**
1. $\frac n2=20$; cumulative frequencies $4$, $14$, $28$, …
2. The class containing $M_e$ is $[170, 180)$, with $C=14$, $n_m=14$.

::solution
$$M_e=170+\frac{20-14}{14}\cdot10=170+\frac{30}{7}\approx174.29.$$
Since $166<174.29<182.5$, we have $Q_1<M_e<Q_3$.

**Answer.** $M_e\approx174.29$ g.
:::

:::exercise
(Revisiting [Measures of dispersion](lesson:dispersion).) Consider the raw data $3, 7, 8, 11, 12, 14, 15, 16, 18, 21, 24, 29$.

a) Find $R$ and $\Delta_Q$ of the raw data.

b) Group them into the three classes $[0, 10)$, $[10, 20)$, $[20, 30)$ and find $R$ and $\Delta_Q$ of the grouped data.

::hint
**What you need:** with $n=12$ even, each half has $6$ values (grade 10); the formulas for grouped data.

**Steps:**
1. a) $Q_1$ is the median of the first $6$ values, $Q_3$ the median of the last $6$.
2. b) Count the frequency of each class; positions $3$ and $9$.

::solution
a) $R=29-3=26$; $Q_1=\dfrac{8+11}{2}=9.5$, $Q_3=\dfrac{18+21}{2}=19.5$, $\Delta_Q=10$.

b) Frequencies $3$, $6$, $3$ (cumulative $3$, $9$, $12$), $R=30$.
$$Q_1=0+\frac{3-0}{3}\cdot10=10,\qquad Q_3=10+\frac{9-3}{6}\cdot10=20,\qquad \Delta_Q=10.$$

**Answer.** a) $R=26$, $\Delta_Q=10$; b) $R=30$, $\Delta_Q=10$. Here $\Delta_Q$ is a very good approximation, while $R$ is larger than the true value.
:::

:::exercise
For class 12A (Example 1) we have $Q_1=15$ and $Q_3=32.5$ minutes. A new student who joins the class takes $62$ minutes to get to school. By the $1.5\,\Delta_Q$ rule, is this time an outlier?

::hint
**What you need:** a value is an outlier if it is greater than $Q_3+1.5\,\Delta_Q$ or less than $Q_1-1.5\,\Delta_Q$.

**Steps:**
1. Compute $\Delta_Q$ and $1.5\,\Delta_Q$.
2. Compute the upper limit and compare it with $62$.

::solution
$\Delta_Q=17.5$ and $1.5\,\Delta_Q=26.25$. The upper limit is
$$Q_3+1.5\,\Delta_Q=32.5+26.25=58.75<62.$$

**Answer.** Yes, $62$ minutes is an outlier for this class.
:::

:::exercise Challenge
Grouped data have the following frequency table, where $x$ is an unknown positive integer.

| Class | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ |
|---|---|---|---|---|
| Frequency | $4$ | $x$ | $10$ | $6$ |

We know that $Q_1=13.75$ and that $Q_1$ lies in the class $[10, 20)$. Find $x$.

::hint
**What you need:** $n=20+x$; $Q_1=u_m+\dfrac{\frac n4-C}{n_m}\cdot h$.

**Steps:**
1. Write $Q_1$ in terms of $x$ with $u_m=10$, $C=4$, $n_m=x$, $h=10$.
2. Solve the equation, then check the condition for choosing the class.

::solution
$$10+\frac{\frac{20+x}{4}-4}{x}\cdot10=13.75\iff\frac{x+4}{4x}\cdot10=3.75\iff 10x+40=15x\iff x=8.$$
**Check.** $n=28$, $\frac n4=7$ and $4<7\le12$, so $Q_1$ does lie in $[10, 20)$: $Q_1=10+\frac{7-4}{8}\cdot10=13.75$.

**Answer.** $x=8$.
:::

## Mini test

:::quiz
::mc
The times (minutes) that $40$ passengers waited for a bus are given in the table. The range of these grouped data is

| Time (minutes) | $[0, 5)$ | $[5, 10)$ | $[10, 15)$ | $[15, 20)$ | $[20, 25)$ |
|---|---|---|---|---|---|
| Passengers | $6$ | $14$ | $12$ | $4$ | $4$ |

A. $5$ minutes.
B. $20$ minutes.
C. $25$ minutes.
D. $10$ minutes.
::key C
$R=u_{k+1}-u_1=25-0=25$. Option B uses the left end of the last class, option A is the width of one class, and option D is the difference of two frequencies, $14-4$.

::mc
For the data in Question 1, the class containing the third quartile $Q_3$ is
A. $[5, 10)$.
B. $[10, 15)$.
C. $[15, 20)$.
D. $[20, 25)$.
::key B
The cumulative frequencies are $6$, $20$, $32$, $36$, $40$, and $\frac{3n}{4}=30$ lies between $20$ and $32$, so $Q_3$ is in the class $[10, 15)$ (in fact $Q_3=10+\dfrac{30-20}{12}\cdot5\approx14.17$). Option A is the class with the largest frequency; options C and D are classes that come after the 30th value.

::mc
For the data in Question 1, the best approximation to the first quartile $Q_1$ is
A. $8.33$.
B. $5.29$.
C. $1.43$.
D. $6.43$.
::key D
$\frac n4=10$ lies in the class $[5, 10)$ with $C=6$, $n_m=14$: $Q_1=5+\dfrac{10-6}{14}\cdot5\approx6.43$. Option B forgets to multiply by the width $5$, option C includes the quartile's own class in $C$, and option A uses the class $[0, 5)$ by mistake.

::mc
By the interquartile range rule, a value $x$ of a data set is regarded as an outlier if
A. $x<Q_1-1.5\,\Delta_Q$ or $x>Q_3+1.5\,\Delta_Q$.
B. $x<Q_1$ or $x>Q_3$.
C. $x<Q_1-1.5\,R$ or $x>Q_3+1.5\,R$.
D. $Q_1-1.5\,\Delta_Q<x<Q_3+1.5\,\Delta_Q$.
::key A
An outlier lies further from the middle of the data than $1.5$ times the interquartile range. Option B would make half of the data outliers; option D describes the values that are not outliers.

::tf
The $100$ m running times (seconds) of $32$ students are given in the table.

| Time (seconds) | $[12, 14)$ | $[14, 16)$ | $[16, 18)$ | $[18, 20)$ | $[20, 22)$ |
|---|---|---|---|---|---|
| Students | $4$ | $8$ | $10$ | $8$ | $2$ |

a) The range of the data is $10$ seconds.
b) $Q_1=15$.
c) The third quartile $Q_3$ lies in the class $[16, 18)$.
d) By the $1.5\,\Delta_Q$ rule, a time of $24$ seconds is an outlier.
::key T T F T
a) True: $22-12=10$. b) True: the cumulative frequencies are $4$, $12$, $22$, $30$, $32$, and $Q_1=14+\dfrac{8-4}{8}\cdot2=15$. c) False: $\frac{3n}{4}=24$ lies between $22$ and $30$, so $Q_3$ is in the class $[18, 20)$: $Q_3=18+\dfrac{24-22}{8}\cdot2=18.5$. d) True: $\Delta_Q=18.5-15=3.5$ and $Q_3+1.5\cdot3.5=23.75<24$.

::sa
The monthly electricity use (kWh) of $80$ households is given in the table. Find the interquartile range of the data, giving your answer to 1 decimal place.

| Electricity use (kWh) | $[50, 100)$ | $[100, 150)$ | $[150, 200)$ | $[200, 250)$ | $[250, 300)$ |
|---|---|---|---|---|---|
| Households | $8$ | $20$ | $28$ | $16$ | $8$ |

::key 82.5
The cumulative frequencies are $8$, $28$, $56$, $72$, $80$. $Q_1=100+\dfrac{20-8}{20}\cdot50=130$ and $Q_3=200+\dfrac{60-56}{16}\cdot50=212.5$, so $\Delta_Q=82.5$ kWh.

::sa
For the data in the previous question, by the $1.5\,\Delta_Q$ rule, above how many kWh a month is a household's electricity use regarded as an outlier? Give your answer to the nearest whole number.
::key 336
The upper limit is $Q_3+1.5\,\Delta_Q=212.5+1.5\cdot82.5=336.25$, which rounds to $336$ kWh.
:::
