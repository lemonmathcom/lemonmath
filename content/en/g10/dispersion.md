---
title: Measures of dispersion
description: Measure how spread out data is with the range, interquartile range, variance and standard deviation, compare data sets and detect outliers.
minutes: 25
---

:::goals
- Find the range and the interquartile range of a data set.
- Compute the variance and the standard deviation with either formula.
- Compare the spread of two data sets.
- Detect outliers with the $1.5$ times interquartile range rule.
:::

Two basketball players both score $8$ points per game on average. In the last three games, An scored $7, 8, 9$ points and Bao scored $0, 8, 16$ points. The coach needs a player who scores steadily. The means are equal, so what should the choice be based on?

At a glance An looks steadier: always somewhere around $8$ points. Bao, on the other hand, scored nothing in one game and twice as much in another. The mean only tells us the "centre" of the data; it says nothing about how widely the values **spread** around that centre. To compare the players properly, we need numbers that measure that spread.

## Range and interquartile range

### Exploring: how wide are the data?

The first idea that comes to anyone's mind is to see how far apart the best and the worst game are:

$$\text{An: } 9-7=2,\qquad \text{Bao: } 16-0=16.$$

Bao's scores spread over an interval $8$ times as wide as An's. This simple number is called the range.

:::definition Range and interquartile range
- The **range** is $R=x_{\max}-x_{\min}$.
- The **interquartile range** is $\Delta_Q=Q_3-Q_1$, the width of the middle half of the data.
:::

The range is easy to compute, but it only looks at the two values at the ends. One unusual value, say a test that went badly, is enough to make it jump. The interquartile range "ignores" a quarter of the data at each end and measures only the middle half, so strange values disturb it much less.

:::example Range and interquartile range
The marks of the $8$ students in group A are $4, 6, 7, 7, 8, 9, 10, 11$. Find $R$ and $\Delta_Q$.

**Solution.** The data are sorted, so $R=11-4=7$. With $n=8$ even, each half has $4$ values:

$$\text{lower half } 4, 6, 7, 7\Rightarrow Q_1=\frac{6+7}{2}=6.5;\qquad \text{upper half } 8, 9, 10, 11\Rightarrow Q_3=\frac{9+10}{2}=9.5.$$

So $R=7$ and $\Delta_Q=9.5-6.5=3$.
:::

## Variance and standard deviation

The two measures above use only a few values from the data. To let **every** value have its say, we look at how far each value is from the mean, that is the deviation $x_i-\bar{x}$. The natural idea is to take the mean of the deviations. But there is a snag: positive and negative deviations cancel out, and they always add up to $0$ (previous lesson). The fix is to square the deviations so that none of them is negative, and only then take the mean. For An, the deviations are $-1, 0, 1$, their squares $1, 0, 1$, with mean $\dfrac23$. For Bao: $64, 0, 64$, with mean $\dfrac{128}{3}$, which is $64$ times larger. This number puts into figures what we felt at the start. The coach should choose An.

:::definition Variance and standard deviation
For a data set $x_1, \dots, x_n$ with mean $\bar{x}$,
$$s^2=\frac{(x_1-\bar{x})^2+\cdots+(x_n-\bar{x})^2}{n},\qquad s=\sqrt{s^2}.$$
An equivalent formula, often quicker, is
$$s^2=\frac{x_1^2+\cdots+x_n^2}{n}-\bar{x}^2.$$
:::

**Why are the two formulas equal?** You do not need to learn this working by heart, but reading it once will make you more comfortable using the second formula. Expand $(x_i-\bar{x})^2=x_i^2-2\bar{x}x_i+\bar{x}^2$, add up and divide by $n$. Since $\dfrac{x_1+\cdots+x_n}{n}=\bar{x}$, we get $\dfrac{\sum x_i^2}{n}-2\bar{x}^2+\bar{x}^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$.

Why do we need the standard deviation as well, when we already have the variance? Because the variance is measured in "squared units": squared points, squared hours, which are hard to picture. Taking the square root gives $s$, which has the same unit as the data, so it is easier to interpret. A small $s$ means the values are close to the mean; a large $s$ means they are spread out. The next example computes the variance with both formulas, so you can see the two roads arrive at the same place.

:::example Two ways to get the variance
Find $s^2$ and $s$ for group A: $4, 6, 7, 7, 8, 9, 10, 11$.

**Solution.** First, $\bar{x}=\dfrac{62}{8}=7.75$.

*Method 1 (definition).* The squared deviations are
$$14.0625;\ 3.0625;\ 0.5625;\ 0.5625;\ 0.0625;\ 1.5625;\ 5.0625;\ 10.5625,$$
with total $35.5$, so $s^2=\dfrac{35.5}{8}=4.4375$.

*Method 2.* The sum of squares is $16+36+49+49+64+81+100+121=516$:
$$s^2=\frac{516}{8}-7.75^2=64.5-60.0625=4.4375.$$

So $s^2=4.4375$ and $s=\sqrt{4.4375}\approx2.11$.
:::

Often the data are not listed one by one but given in a frequency table. The method is the same; just remember that a value appearing several times has its square counted that many times, which means multiplying by the frequency.

:::example Variance from a frequency table
The table gives the daily hours of self-study of $20$ students. Find $s^2$ and $s$.

| Hours | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Students | 3 | 6 | 7 | 4 |

**Solution.** We use the second formula, with each sum weighted by the frequencies. The mean:
$$\bar{x}=\frac{3\cdot1+6\cdot2+7\cdot3+4\cdot4}{20}=\frac{52}{20}=2.6.$$
The mean of the squares:
$$\frac{3\cdot1+6\cdot4+7\cdot9+4\cdot16}{20}=\frac{154}{20}=7.7.$$
Therefore
$$s^2=7.7-2.6^2=7.7-6.76=0.94,\qquad s\approx0.97.$$

So $s^2=0.94$ and $s\approx0.97$ hours.
:::

A single variance on its own does not say much. It really earns its keep when we **compare** two data sets with similar means, just like the two players at the start.

:::example Comparing two groups
Group B has marks $7, 7, 7, 8, 8, 8, 9, 9$. Compare the spread of group B with that of group A from Example 2.

**Solution.** We compute the same measures for B. The total is $63$ and the sum of squares is $501$:
$$\bar{x}=\frac{63}{8}=7.875,\qquad s^2=\frac{501}{8}-7.875^2\approx0.61,\qquad s\approx0.78.$$
Also $R=9-7=2$; the lower half $7, 7, 7, 8$ and the upper half $8, 8, 9, 9$ give $\Delta_Q=8.5-7=1.5$.

| | $\bar{x}$ | $R$ | $\Delta_Q$ | $s$ |
|---|---|---|---|---|
| Group A | $7.75$ | $7$ | $3$ | $2.11$ |
| Group B | $7.875$ | $2$ | $1.5$ | $0.78$ |

So the two groups have almost the same mean, but every measure of spread is smaller for B: group B's results are far more even.
:::

## The box plot

Sometimes a picture is quicker to read than a table of numbers. A **box plot** shows five numbers: the minimum, $Q_1$, the median, $Q_3$ and the maximum. The box holds the middle half of the data (its length is $\Delta_Q$), and the two "whiskers" reach out to the extremes (from the end of one whisker to the end of the other is $R$).

:::diagram Box plot of $4, 6, 7, 7, 8, 9, 10, 11$
alt: A box plot on a number line: whiskers from 4 to 11, a box from 6.5 to 9.5 and a line inside the box at the median 7.5
point L1 4,0.3 ""
point L2 4,0.9 ""
point R1 11,0.3 ""
point R2 11,0.9 ""
point Q1a 6.5,0 ""
point Q1b 6.5,1.2 ""
point Q3a 9.5,1.2 ""
point Q3b 9.5,0 ""
point Ma 7.5,0 ""
point Mb 7.5,1.2 ""
point WL1 4,0.6 ""
point WL2 6.5,0.6 ""
point WR1 9.5,0.6 ""
point WR2 11,0.6 ""
point P1 4,-0.5 ""
point P2 11,-0.5 ""
polygon Q1a Q1b Q3a Q3b
segment Ma Mb
segment WL1 WL2
segment WR1 WR2
segment L1 L2
segment R1 R2
segment P1 P2
label 4,-0.9 "4"
label 6.5,-0.9 "Q₁"
label 7.5,-0.9 "M"
label 9.5,-0.9 "Q₃"
label 11,-0.9 "11"
:::

## Outliers

Now and then a data set contains one value that sits well apart from the rest. It may be a genuinely special case, or it may simply be a recording mistake. Either way, we should spot it before drawing conclusions. A value is an **outlier** if it lies too far from most of the data. A common rule: $x$ is an outlier if
$$x<Q_1-1.5\,\Delta_Q\qquad\text{or}\qquad x>Q_3+1.5\,\Delta_Q.$$

The last example applies this rule to a data set with one rather suspicious value.

:::example Is 45 an outlier?
The times (minutes) that $9$ students take to get from home to school are $12, 13, 13, 14, 15, 15, 16, 17, 45$. Does the data set have an outlier?

**Solution.** Find the quartiles. $n=9$ is odd, so $M=15$ (the $5$th value), and we leave it out when splitting:

$$\text{lower half } 12, 13, 13, 14\Rightarrow Q_1=13;\qquad \text{upper half } 15, 16, 17, 45\Rightarrow Q_3=16.5.$$

So $\Delta_Q=3.5$ and $1.5\,\Delta_Q=5.25$. The two limits are

$$Q_1-5.25=7.75,\qquad Q_3+5.25=21.75.$$

Only $45>21.75$. So $45$ is the only outlier (perhaps that student lives very far away, or the value was recorded wrongly).

**Check.** The value $45$ is in the upper half, but $Q_3$ uses only the two middle values $16$ and $17$, so the limit is not pulled up by $45$. That is why the rule uses quartiles rather than $\bar{x}$ and $R$.
:::

:::warning Common mistakes
- **Wrong:** computing the variance of $7, 8, 9$ as $\dfrac{1+0+1}{2}=1$. **Why it is wrong:** in this course the variance divides by $n$, not by $n-1$ (you may meet the $n-1$ version in other books or on a calculator, but we do not use it here). **Right:** $s^2=\dfrac{2}{3}$.
- **Wrong:** $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}$. **Why it is wrong:** $\bar{x}$ is not squared; for group A this gives $64.5-7.75=56.75$, which is absurd. **Right:** subtract $\bar{x}^2$.
- **Wrong:** answering $s^2$ when the standard deviation is asked for. This one is very common, because finishing $s^2$ feels like the end. **Right:** remember to take the square root as well: $s=\sqrt{s^2}$.
- **Wrong:** comparing spreads with the range when there is an outlier. **Why it is wrong:** in Example 5, $R=45-12=33$ reflects only one student. **Right:** use $\Delta_Q$.
:::

## Key terms

:::terms
- range | khoảng biến thiên
- interquartile range | khoảng tứ phân vị
- variance | phương sai
- standard deviation | độ lệch chuẩn
- deviation | độ lệch
- box plot | biểu đồ hộp
- outlier | giá trị ngoại lệ
- spread | độ phân tán
:::

## Summary

- $R=x_{\max}-x_{\min}$; $\Delta_Q=Q_3-Q_1$ (less affected by unusual values).
- $s^2=\dfrac1n\sum(x_i-\bar{x})^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$, dividing by $n$; $s=\sqrt{s^2}$, in the same unit as the data.
- Frequency table: multiply each $x_i$ and each $x_i^2$ by its frequency before adding.
- The smaller $s$ (or $\Delta_Q$), the more even the data.
- Outlier: $x<Q_1-1.5\Delta_Q$ or $x>Q_3+1.5\Delta_Q$.

Back to the two players from the start: the means are equal, but the standard deviation shows that An scores far more steadily than Bao. When you compare two data sets, get into the habit of looking at both the "centre" and the "spread", not just the mean.

## Practice

Each exercise comes with the ideas you need and a few steps to get going. Have a go on your own first, and do not worry about mistakes; comparing with the solution afterwards shows you how much you have understood.

:::exercise
Find $R$ and $\Delta_Q$ for the data set $3, 5, 7, 9, 11$.

::hint
**What you need:** $R=x_{\max}-x_{\min}$, $\Delta_Q=Q_3-Q_1$; for odd $n$, leave the median out when splitting.

**Steps:**
1. Compute $R$.
2. The median is $7$; the lower half is $3, 5$ and the upper half $9, 11$.

::solution
$R=11-3=8$. $Q_1=\dfrac{3+5}{2}=4$, $Q_3=\dfrac{9+11}{2}=10$.

**Answer.** $R=8$, $\Delta_Q=6$.
:::

:::exercise
Find $s^2$ and $s$ for the data set $2, 4, 4, 4, 5, 5, 7, 9$ using the definition.

::hint
**What you need:** $s^2=\dfrac{1}{n}\sum(x_i-\bar{x})^2$.

**Steps:**
1. Compute $\bar{x}$.
2. Compute the squared deviation of each value and add them.
3. Divide by $8$, then take the square root.

::solution
$\bar{x}=\dfrac{40}{8}=5$. The squared deviations are $9, 1, 1, 1, 0, 0, 4, 16$, with total $32$.
$$s^2=\frac{32}{8}=4,\qquad s=2.$$

**Answer.** $s^2=4$, $s=2$.
:::

:::exercise
a) Use the formula $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$ to find $s^2$ and $s$ for $3, 5, 7, 9, 11$.

b) Find the variance of $6, 6, 6, 6$. What does the result tell you?

::hint
**What you need:** the second formula for the variance; the variance is $0$ when every deviation is $0$.

**Steps:**
1. a) Compute $\bar{x}$ and the sum of squares.
2. b) Look at the deviation of each value.

::solution
a) $\bar{x}=7$, $\sum x_i^2=9+25+49+81+121=285$:
$$s^2=\frac{285}{5}-49=57-49=8,\qquad s=\sqrt8\approx2.83.$$

b) $\bar{x}=6$ and every deviation is $0$, so $s^2=0$: the data have no spread at all.

**Answer.** a) $s^2=8$, $s\approx2.83$; b) $s^2=0$.
:::

:::exercise
Consider the data set $2, 3, 5, 6, 7, 8, 11$. Is each claim true or false?

a) The range is $9$.

b) The interquartile range is $4$.

c) The variance is $8$.

d) If $3$ is added to every value, the variance of the new data set is $11$.

::hint
**What you need:** the definitions of $R$, $\Delta_Q$, $s^2$; adding the same number to every value leaves every deviation unchanged.

**Steps:**
1. Find $R$; find $Q_1$, $Q_3$ (leaving out the median $6$).
2. Compute $\bar{x}$ and the squared deviations.
3. See how the deviations change when $3$ is added.

::solution
a) **True:** $R=11-2=9$.

b) **False:** $Q_1=3$ (lower half $2, 3, 5$), $Q_3=8$ (upper half $7, 8, 11$), so $\Delta_Q=5$.

c) **True:** $\bar{x}=\dfrac{42}{7}=6$; the squared deviations $16, 9, 1, 0, 1, 4, 25$ add up to $56$; $s^2=\dfrac{56}{7}=8$.

d) **False:** every value and $\bar{x}$ go up by $3$, so the deviations do not change and the variance is still $8$.

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
Two shooters each fire $5$ shots. Minh scores $8, 9, 10, 9, 9$. Quan scores $10, 7, 10, 8, 10$. Find the mean and the standard deviation for each. Whom should the team send if it needs a steady shooter?

::hint
**What you need:** with equal means, the one with the smaller $s$ is steadier.

**Steps:**
1. Compute $\bar{x}$ for each shooter.
2. Compute the squared deviations, divide by $5$ and take the square root.
3. Compare.

::solution
Both have $\bar{x}=\dfrac{45}{5}=9$.
$$\text{Minh: } s^2=\frac{1+0+1+0+0}{5}=0.4,\ s\approx0.63;\qquad \text{Quan: } s^2=\frac{1+4+1+1+1}{5}=1.6,\ s\approx1.26.$$

**Answer.** Both have mean $9$; $s\approx0.63$ (Minh) and $s\approx1.26$ (Quan). The team should send Minh.
:::

:::exercise
Is $40$ an outlier of the data set $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40$?

::hint
**What you need:** $x$ is an outlier if $x>Q_3+1.5\Delta_Q$ (or $x<Q_1-1.5\Delta_Q$).

**Steps:**
1. $n=11$: the median is $6$; leave it out and find $Q_1$, $Q_3$.
2. Compute the upper limit.

::solution
The lower half $1, \dots, 5$ gives $Q_1=3$; the upper half $7, 8, 9, 10, 40$ gives $Q_3=9$. Then $\Delta_Q=6$ and
$$Q_3+1.5\,\Delta_Q=9+9=18<40.$$

**Answer.** Yes, $40$ is an outlier.
:::

:::exercise
Consider the data set $3, 5, 7, 9, 11$ (with $\bar{x}=7$, $s^2=8$).

a) Add $5$ to every value. How do the mean and the standard deviation change?

b) Multiply every value by $2$. Find the new variance and standard deviation.

::hint
**What you need:** the variance depends only on the deviations $x_i-\bar{x}$.

**Steps:**
1. Write the new data set and its mean.
2. Write the new deviations and compare them with the old ones $-4, -2, 0, 2, 4$.

::solution
a) The data $8, 10, 12, 14, 16$ have $\bar{x}=12$; the deviations are still $-4, -2, 0, 2, 4$, so $s=\sqrt8$ does not change.

b) The data $6, 10, 14, 18, 22$ have $\bar{x}=14$; the deviations $-8, -4, 0, 4, 8$ are doubled:
$$s^2=\frac{64+16+0+16+64}{5}=32,\qquad s=\sqrt{32}\approx5.66.$$

**Answer.** a) $\bar{x}$ goes up by $5$ (to $12$), $s\approx2.83$ is unchanged; b) $s^2=32$ ($4$ times as large), $s\approx5.66$ (twice as large).
:::

:::exercise
(Revisiting [Measures of central tendency](lesson:central-tendency).) The table gives the number of library visits in one month of $25$ students. Find the standard deviation (rounded to two decimal places).

| Visits | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Students | 4 | 6 | 8 | 5 | 2 |

::hint
**What you need:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ (previous lesson); $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar{x}^2$.

**Steps:**
1. Compute $\bar{x}$.
2. Compute $\sum n_ix_i^2$ and divide by $25$.
3. Subtract $\bar{x}^2$ and take the square root.

::solution
$$\bar{x}=\frac{0+6+16+15+8}{25}=\frac{45}{25}=1.8,\qquad \frac{0+6+32+45+32}{25}=\frac{115}{25}=4.6,$$
$$s^2=4.6-1.8^2=4.6-3.24=1.36,\qquad s\approx1.166.$$

**Answer.** $1.17$.
:::

:::exercise Challenge
The data set $4, 6, 8, 10, x$ has mean $8$. Find $x$ and the variance of the data set.

::hint
**What you need:** total $=n\cdot\bar{x}$; the definition of the variance.

**Steps:**
1. Write an equation from the total to find $x$.
2. Compute the deviations from $8$.

::solution
$4+6+8+10+x=40$, so $x=12$. The deviations are $-4, -2, 0, 2, 4$:
$$s^2=\frac{16+4+0+4+16}{5}=8.$$

**Answer.** $x=12$, $s^2=8$.
:::

:::exercise Challenge
A data set of four numbers has total $20$ and sum of squares $120$. Find the variance of the data set.

::hint
**What you need:** $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$ works without knowing the individual values.

**Steps:**
1. Find $\bar{x}$ from the total.
2. Substitute into the second formula.

::solution
$$\bar{x}=\frac{20}{4}=5,\qquad s^2=\frac{120}{4}-5^2=30-25=5.$$

**Answer.** $s^2=5$.
:::

## Mini test

:::quiz
::mc
The range of the data set $12, 7, 15, 9, 20, 11$ is
A. $13$.
B. $20$.
C. $9$.
D. $27$.
::key A
$R=x_{\max}-x_{\min}=20-7=13$. Option C subtracts the last value ($20-11$) instead of the smallest value.

::mc
The variance of the data set $2, 4, 6$ is
A. $4$.
B. $\dfrac83$.
C. $\sqrt{\dfrac83}$.
D. $0$.
::key B
$\bar x=4$ and the deviations are $-2, 0, 2$, so $s^2=\dfrac{4+0+4}{3}=\dfrac83$. Option A divides by $n-1=2$; C is the standard deviation; D is the mean of the deviations (not squared).

::mc
The interquartile range of the data set $1, 2, 4, 5, 7, 8, 10, 12$ is
A. $11$.
B. $6$.
C. $9$.
D. $3$.
::key B
The lower half $1, 2, 4, 5$ gives $Q_1=3$ and the upper half $7, 8, 10, 12$ gives $Q_3=9$. So $\Delta_Q=9-3=6$. Option A is the range; C and D are just $Q_3$ and $Q_1$.

::mc
A data set has $Q_1=10$ and $Q_3=14$. Which of these values is an outlier?
A. $5$.
B. $19$.
C. $21$.
D. $15$.
::key C
$\Delta_Q=4$ and $1.5\,\Delta_Q=6$, so the limits are $10-6=4$ and $14+6=20$. Only $21>20$. Options A and B would be outliers with the wrong limits $Q_1-\Delta_Q$ and $Q_3+\Delta_Q$.

::tf
Consider the data set $5, 7, 8, 9, 11$.
a) The mean is $8$.
b) The variance is $5$.
c) The standard deviation is $2$.
d) If every value is multiplied by $3$, the variance of the new data set is $36$.
::key T F T T
a) True: $\dfrac{40}{5}=8$. b) False: the squared deviations are $9, 1, 0, 1, 9$, with total $20$, so $s^2=\dfrac{20}{5}=4$ (the value $5$ comes from dividing by $4$). c) True: $s=\sqrt4=2$. d) True: every deviation is $3$ times as large, so the variance is $9$ times as large: $36$.

::sa
Over $10$ days, a shop sold $1$ fridge on $2$ days, $2$ fridges on $5$ days and $3$ fridges on $3$ days. Find the variance of the number of fridges sold per day.
::key 0.49
$\bar x=\dfrac{2\cdot1+5\cdot2+3\cdot3}{10}=2.1$; the mean of the squares is $\dfrac{2\cdot1+5\cdot4+3\cdot9}{10}=4.9$. So $s^2=4.9-2.1^2=0.49$.

::sa
Find the standard deviation of the data set $10, 12, 14, 16, 18$ (rounded to two decimal places).
::key 2.83
$\bar x=14$ and the deviations are $-4, -2, 0, 2, 4$, so $s^2=\dfrac{16+4+0+4+16}{5}=8$ and $s=\sqrt8\approx2.83$.
:::
