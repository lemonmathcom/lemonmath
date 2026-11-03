---
title: Variance and standard deviation of grouped data
description: Find the variance and standard deviation of grouped data with class midpoints, set out the work in a table, and compare the spread of two data sets.
minutes: 22
---

:::goals
- Find the variance $s^2$ and the standard deviation $s$ of grouped data with either formula.
- Set out the work in a table with the columns $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$.
- Compare the spread of two sets of grouped data using the standard deviation.
- Understand the effect of the class width and of changing units.
:::

A factory has two machines that fill $1$ kg bags of rice. Fifty bags from each machine were weighed and the masses (grams) were grouped:

| Mass (g) | $[990, 994)$ | $[994, 998)$ | $[998, 1002)$ | $[1002, 1006)$ | $[1006, 1010)$ |
|---|---|---|---|---|---|
| Machine A | $2$ | $8$ | $30$ | $8$ | $2$ |
| Machine B | $6$ | $10$ | $18$ | $10$ | $6$ |

Both tables are symmetric about $1000$ g, so the two machines have the same mean mass. Which machine fills more evenly, and by how much?

The previous lesson used the interquartile range, which looks only at the middle half of the data. This lesson uses **every** value, through the variance and the standard deviation.

## The variance of grouped data

### Exploring: how far off is each bag?

We do not know the true mass of each bag, so we replace each bag by the **class midpoint** of its class: $992$, $996$, $1000$, $1004$, $1008$. Compared with the mean $1000$, the deviations are $-8$, $-4$, $0$, $4$, $8$.

For machine A, $2$ bags deviate by $-8$, $8$ bags by $-4$, and so on. Square the deviations (so the signs do not cancel), multiply by the frequencies and take the mean:
$$\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10.24.$$
This number measures how far the bags stray from $1000$ g. It is exactly the variance of the grouped data.

In this lesson, grouped data have $k$ classes with midpoints $x_1$, …, $x_k$, frequencies $n_1$, …, $n_k$, sample size $n$ and mean $\bar{x}=\dfrac{n_1x_1+\cdots+n_kx_k}{n}$ (grade 11).

:::definition Variance and standard deviation
The variance of grouped data is
$$s^2=\frac{1}{n}\left[n_1(x_1-\bar{x})^2+n_2(x_2-\bar{x})^2+\cdots+n_k(x_k-\bar{x})^2\right].$$
The standard deviation is $s=\sqrt{s^2}$. The variance can also be found with the formula
$$s^2=\frac{1}{n}\left(n_1x_1^2+n_2x_2^2+\cdots+n_kx_k^2\right)-\bar{x}^2.$$
:::

**Why are the two formulas equal?** Expand $(x_i-\bar{x})^2=x_i^2-2\bar{x}x_i+\bar{x}^2$, multiply by $n_i$, add up and divide by $n$. Since $\dfrac{\sum n_ix_i}{n}=\bar{x}$ and $\dfrac{\sum n_i}{n}=1$, we get $\dfrac{\sum n_ix_i^2}{n}-2\bar{x}^2+\bar{x}^2$, which is the second formula.

The standard deviation has the same unit as the data (grams here), so it is easier to interpret than the variance. The first formula is convenient when $\bar{x}$ is a round number; the second is convenient when it is not.

## Step by step with a table

When $\bar{x}$ is not round, we draw up a table with the columns $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$ and use the second formula.

:::example Students' sleep
The nightly sleep (hours) of $40$ students is grouped as follows. Find $\bar{x}$, $s^2$ and $s$.

| Sleep (hours) | $[4, 5)$ | $[5, 6)$ | $[6, 7)$ | $[7, 8)$ | $[8, 9)$ |
|---|---|---|---|---|---|
| Students | $2$ | $6$ | $14$ | $12$ | $6$ |

**Solution.** The class midpoints are the middles of the classes. We draw up the table:

| Class | $x_i$ | $n_i$ | $n_ix_i$ | $n_ix_i^2$ |
|---|---|---|---|---|
| $[4, 5)$ | $4.5$ | $2$ | $9$ | $40.5$ |
| $[5, 6)$ | $5.5$ | $6$ | $33$ | $181.5$ |
| $[6, 7)$ | $6.5$ | $14$ | $91$ | $591.5$ |
| $[7, 8)$ | $7.5$ | $12$ | $90$ | $675$ |
| $[8, 9)$ | $8.5$ | $6$ | $51$ | $433.5$ |
| Total | | $40$ | $274$ | $1922$ |

Divide the last two totals by $n=40$:

$$\bar{x}=\frac{274}{40}=6.85,\qquad s^2=\frac{1922}{40}-6.85^2=48.05-46.9225=1.1275,\qquad s\approx1.06.$$

So on average a student sleeps $6.85$ hours, with a standard deviation of about $1.06$ hours.
:::

When $\bar{x}$ is round, the definition gives small numbers that are easy to work with. The next example completes the exploration.

:::example Machine A with the definition
Find the standard deviation of the bag masses for machine A.

**Solution.** First we check the mean, using the symmetry of the frequencies:

$$\bar{x}=\frac{2\cdot992+8\cdot996+30\cdot1000+8\cdot1004+2\cdot1008}{50}=\frac{50000}{50}=1000.$$

The deviations $x_i-\bar{x}$ are $-8$, $-4$, $0$, $4$, $8$. Multiply their squares by the frequencies:

$$s^2=\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10.24,\qquad s=\sqrt{10.24}=3.2.$$

So the standard deviation for machine A is $3.2$ g.
:::

## Comparing two data sets

For two data sets with similar means, the one with the smaller standard deviation is more even. Now we answer the opening question.

:::example Which machine fills more evenly?
Find the standard deviation for machine B and compare it with machine A.

**Solution.** Machine B also has $\bar{x}=1000$ (symmetric frequencies) and the same deviations $-8$, $-4$, $0$, $4$, $8$. Only the frequencies change:

$$s^2=\frac{6\cdot64+10\cdot16+18\cdot0+10\cdot16+6\cdot64}{50}=\frac{1088}{50}=21.76,\qquad s\approx4.66.$$

| | $\bar{x}$ (g) | $s^2$ | $s$ (g) |
|---|---|---|---|
| Machine A | $1000$ | $10.24$ | $3.2$ |
| Machine B | $1000$ | $21.76$ | $4.66$ |

So the two machines have the same mean mass, but machine A has the smaller standard deviation ($3.2$ g against about $4.66$ g): machine A fills more evenly.
:::

## The effect of the class width

The standard deviation of grouped data uses midpoints instead of the true values, so it is only an **approximate value** of the standard deviation of the raw data. The narrower the classes, the closer the midpoints are to the true values.

:::example The same data, grouped two ways
The travel times (minutes) of $20$ students (used in the previous lesson):
$$5,\ 8,\ 12,\ 14,\ 15,\ 17,\ 18,\ 19,\ 21,\ 22,\ 23,\ 24,\ 25,\ 26,\ 28,\ 31,\ 33,\ 36,\ 41,\ 47.$$
From the raw data, $s\approx10.41$ minutes. Compare this with $s$ for two groupings: width $10$ (classes $[0, 10)$, …, $[40, 50)$) and width $5$ (classes $[5, 10)$, …, $[45, 50)$).

**Solution.** *Width $10$.* Frequencies $2$, $6$, $7$, $3$, $2$ with midpoints $5$, $15$, $25$, $35$, $45$:

$$\sum n_ix_i=470,\quad \sum n_ix_i^2=13500,\quad \bar{x}=23.5,\quad s^2=675-552.25=122.75,\quad s\approx11.08.$$

*Width $5$.* Counting again, the frequencies are $2$, $2$, $4$, $4$, $3$, $2$, $1$, $1$, $1$ with midpoints $7.5$, $12.5$, …, $47.5$:

$$\sum n_ix_i=475,\quad \sum n_ix_i^2=13525,\quad \bar{x}=23.75,\quad s^2=676.25-564.0625=112.1875,\quad s\approx10.59.$$

So width $10$ gives $s\approx11.08$ and width $5$ gives $s\approx10.59$, closer to the true value $10.41$. Narrower classes give a better approximation, at the cost of a longer table.
:::

:::warning Common mistakes
- **Forgetting the frequencies.** Wrong: for machine A, $s^2=\dfrac{64+16+0+16+64}{5}=32$. Why it is wrong: each midpoint stands for $n_i$ bags, not one bag. Right: $s^2=\dfrac{512}{50}=10.24$.
- **Using a class end instead of the midpoint.** Wrong: taking $x_1=4$ for the class $[4, 5)$. Right: $x_1=\dfrac{4+5}{2}=4.5$.
- **Subtracting $\bar{x}$ instead of $\bar{x}^2$.** Wrong: $s^2=48.05-6.85=41.2$. Right: $s^2=48.05-6.85^2=1.1275$.
- **Rounding $\bar{x}$ too early.** Wrong: taking $\bar{x}\approx6.9$ and computing $48.05-6.9^2=0.44$, off by almost a half. Right: keep $\bar{x}=6.85$ exactly and round only the final result.
:::

## Key terms

:::terms
- class midpoint (representative value) | giá trị đại diện
- variance | phương sai
- standard deviation | độ lệch chuẩn
- deviation | độ lệch
- mean | số trung bình
- class width | độ rộng nhóm
- spread | độ phân tán
- approximate value | giá trị xấp xỉ
:::

## Summary

- Replace each class by its midpoint $x_i$ with frequency $n_i$.
- $s^2=\dfrac1n\sum n_i(x_i-\bar{x})^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$; $s=\sqrt{s^2}$, in the same unit as the data.
- Draw up a table of $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$; round only the final result.
- For two data sets with similar means: smaller $s$ means more even.
- The $s$ of grouped data is an approximate value; narrower classes usually give a better approximation.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The daily phone use (hours) of $20$ students is given in the table. Find $s^2$ and $s$ with the definition.

| Time (hours) | $[0, 4)$ | $[4, 8)$ | $[8, 12)$ | $[12, 16)$ |
|---|---|---|---|---|
| Students | $3$ | $7$ | $7$ | $3$ |

::hint
**What you need:** $s^2=\dfrac1n\sum n_i(x_i-\bar{x})^2$ with $x_i$ the midpoints.

**Steps:**
1. Midpoints $2$, $6$, $10$, $14$; find $\bar{x}$.
2. Find the deviations, square them and multiply by the frequencies.

::solution
$\bar{x}=\dfrac{6+42+70+42}{20}=8$; the deviations are $-6$, $-2$, $2$, $6$.
$$s^2=\frac{3\cdot36+7\cdot4+7\cdot4+3\cdot36}{20}=\frac{272}{20}=13.6,\qquad s\approx3.69.$$

**Answer.** $s^2=13.6$; $s\approx3.69$ hours.
:::

:::exercise
The test marks of $40$ students are grouped as follows. Draw up the table and find $\bar{x}$, $s^2$, $s$.

| Mark | $[4, 5)$ | $[5, 6)$ | $[6, 7)$ | $[7, 8)$ | $[8, 9)$ | $[9, 10)$ |
|---|---|---|---|---|---|---|
| Students | $2$ | $5$ | $9$ | $14$ | $7$ | $3$ |

::hint
**What you need:** $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$.

**Steps:**
1. Midpoints $4.5$, $5.5$, …, $9.5$.
2. Find $\sum n_ix_i$ and $\sum n_ix_i^2$.

::solution
$\sum n_ix_i=9+27.5+58.5+105+59.5+28.5=288$ and $\sum n_ix_i^2=2136$.
$$\bar{x}=\frac{288}{40}=7.2,\qquad s^2=\frac{2136}{40}-7.2^2=53.4-51.84=1.56,\qquad s\approx1.25.$$

**Answer.** $\bar{x}=7.2$; $s^2=1.56$; $s\approx1.25$.
:::

:::exercise
Two delivery services P and Q recorded the delivery times (minutes) of $40$ orders each.

| Time (minutes) | $[20, 25)$ | $[25, 30)$ | $[30, 35)$ | $[35, 40)$ | $[40, 45)$ |
|---|---|---|---|---|---|
| Service P | $2$ | $10$ | $16$ | $10$ | $2$ |
| Service Q | $8$ | $8$ | $8$ | $8$ | $8$ |

Find the mean time and the standard deviation for each service. Which service delivers more reliably on time?

::hint
**What you need:** with equal means, the smaller $s$ means more reliable.

**Steps:**
1. Midpoints $22.5$, $27.5$, …, $42.5$. Both tables are symmetric about $32.5$.
2. The deviations are $-10$, $-5$, $0$, $5$, $10$.

::solution
Both have $\bar{x}=32.5$ minutes.
$$\text{P: } s^2=\frac{2\cdot100+10\cdot25+0+10\cdot25+2\cdot100}{40}=\frac{900}{40}=22.5,\ s\approx4.74;$$
$$\text{Q: } s^2=\frac{8\cdot(100+25+0+25+100)}{40}=\frac{2000}{40}=50,\ s\approx7.07.$$

**Answer.** Mean $32.5$ minutes; $s\approx4.74$ (P) and $s\approx7.07$ (Q). Service P is more reliable.
:::

:::exercise
Consider the following grouped data.

| Class | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ |
|---|---|---|---|---|
| Frequency | $1$ | $4$ | $4$ | $1$ |

Is each claim true or false?

a) The mean is $20$.

b) The variance is $65$.

c) The standard deviation is greater than $9$.

d) If every value is increased by $5$ (the classes become $[5, 15)$, …, $[35, 45)$), the variance becomes $70$.

::hint
**What you need:** the variance formula; adding the same number to every value leaves the deviations unchanged.

**Steps:**
1. Midpoints $5$, $15$, $25$, $35$; find $\bar{x}$.
2. The deviations are $-15$, $-5$, $5$, $15$.

::solution
a) **True.** $\bar{x}=\dfrac{5+60+100+35}{10}=20$.

b) **True.** $s^2=\dfrac{1\cdot225+4\cdot25+4\cdot25+1\cdot225}{10}=\dfrac{650}{10}=65$.

c) **False.** $s=\sqrt{65}\approx8.06<9$.

d) **False.** The midpoints and $\bar{x}$ all increase by $5$, so the deviations are unchanged and the variance is still $65$.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
The heights (cm) of $50$ students are given in the table. Find the standard deviation (in cm, to two decimal places).

| Height (cm) | $[150, 155)$ | $[155, 160)$ | $[160, 165)$ | $[165, 170)$ | $[170, 175)$ |
|---|---|---|---|---|---|
| Students | $5$ | $12$ | $18$ | $10$ | $5$ |

::hint
**What you need:** $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$; do not round $\bar{x}$ along the way.

**Steps:**
1. Midpoints $152.5$, $157.5$, …, $172.5$.
2. Find $\bar{x}$, then $s^2$; take the square root and round only at the end.

::solution
$\sum n_ix_i=8115$, so $\bar{x}=162.3$; $\sum n_ix_i^2=1318612.5$.
$$s^2=\frac{1318612.5}{50}-162.3^2=26372.25-26341.29=30.96,\qquad s\approx5.564.$$

**Answer.** $5.56$.
:::

:::exercise
(Revisiting the mean of grouped data, grade 11.) The times (minutes) that $20$ students took to finish an assignment are given in the table. Find $\bar{x}$, then $s$.

| Time (minutes) | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|
| Students | $3$ | $9$ | $6$ | $2$ |

::hint
**What you need:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ with $x_i$ the midpoints; $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar{x}^2$.

**Steps:**
1. Midpoints $15$, $25$, $35$, $45$.
2. Find $\sum n_ix_i$ and $\sum n_ix_i^2$.

::solution
$$\bar{x}=\frac{45+225+210+90}{20}=\frac{570}{20}=28.5,\qquad \frac{675+5625+7350+4050}{20}=\frac{17700}{20}=885.$$
$$s^2=885-28.5^2=885-812.25=72.75,\qquad s\approx8.53.$$

**Answer.** $\bar{x}=28.5$ minutes; $s\approx8.53$ minutes.
:::

:::exercise
(Revisiting [Range and interquartile range of grouped data](lesson:grouped-range-iqr).) For the two delivery services in Exercise 3, find the interquartile range of each. Is the conclusion the same as with the standard deviation?

::hint
**What you need:** $Q_1=u_m+\dfrac{\frac n4-C}{n_m}(u_{m+1}-u_m)$, and likewise for $Q_3$; positions $10$ and $30$.

**Steps:**
1. Cumulative frequencies for P: $2$, $12$, $28$, $38$, $40$; for Q: $8$, $16$, $24$, $32$, $40$.
2. Find $Q_1$, $Q_3$ for each service.

::solution
P: $Q_1=25+\dfrac{10-2}{10}\cdot5=29$, $Q_3=35+\dfrac{30-28}{10}\cdot5=36$, $\Delta_Q=7$.

Q: $Q_1=25+\dfrac{10-8}{8}\cdot5=26.25$, $Q_3=35+\dfrac{30-24}{8}\cdot5=38.75$, $\Delta_Q=12.5$.

**Answer.** $\Delta_Q=7$ (P) and $12.5$ (Q); the same conclusion as from the standard deviation: P is more reliable.
:::

:::exercise Challenge
Grouped data have the following frequency table, where $x$ is a positive integer. The mean is $4.2$. Find $x$, then the variance (to two decimal places).

| Class | $[0, 2)$ | $[2, 4)$ | $[4, 6)$ | $[6, 8)$ |
|---|---|---|---|---|
| Frequency | $2$ | $x$ | $5$ | $3$ |

::hint
**What you need:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ with $n=10+x$.

**Steps:**
1. Midpoints $1$, $3$, $5$, $7$; set up the equation $\dfrac{48+3x}{10+x}=4.2$.
2. With that $x$, find $\sum n_ix_i^2$ and $s^2$.

::solution
$$\frac{2+3x+25+21}{10+x}=4.2\iff 48+3x=42+4.2x\iff 1.2x=6\iff x=5.$$
Then $n=15$ and $\sum n_ix_i^2=2+45+125+147=319$:
$$s^2=\frac{319}{15}-4.2^2=\frac{319}{15}-17.64=\frac{272}{75}\approx3.63.$$

**Answer.** $x=5$; $s^2\approx3.63$.
:::

:::exercise Challenge
In Example 1 the sleep data have $s^2=1.1275$ (unit: hours²). If all the data are converted to minutes (every value and every class end multiplied by $60$), what are the new variance and standard deviation?

::hint
**What you need:** multiplying every value by $k$ multiplies $\bar{x}$ and every deviation by $k$.

**Steps:**
1. Each deviation $x_i-\bar{x}$ is multiplied by $60$, so its square is multiplied by $3600$.
2. Deduce the new $s^2$, then the new $s$.

::solution
$$s^2_{\text{new}}=3600\cdot1.1275=4059,\qquad s_{\text{new}}=60\cdot\sqrt{1.1275}\approx63.71.$$
(Check: $\sqrt{4059}\approx63.71$.)

**Answer.** $s^2=4059$ (minutes²); $s\approx63.71$ minutes.
:::

## Mini test

:::quiz
::mc
In grouped data, the class midpoint of the class $[20, 30)$ is
A. $20$.
B. $25$.
C. $30$.
D. $10$.
::key B
The class midpoint is the middle of the class: $\dfrac{20+30}{2}=25$. Options A and C are the class ends, and option D is the class width.

::mc
A set of grouped data has variance $s^2=2.25$. Its standard deviation is
A. $1.125$.
B. $5.0625$.
C. $2.25$.
D. $1.5$.
::key D
$s=\sqrt{s^2}=\sqrt{2.25}=1.5$. Option B squares instead of taking the square root, and option A halves instead of taking the square root.

::mc
The variance of the following grouped data is

| Class | $[0, 2)$ | $[2, 4)$ | $[4, 6)$ | $[6, 8)$ |
|---|---|---|---|---|
| Frequency | $2$ | $3$ | $3$ | $2$ |

A. $4.2$.
B. $5$.
C. $2.05$.
D. $0$.
::key A
The class midpoints are $1$, $3$, $5$, $7$ and $\bar{x}=4$; the deviations are $-3$, $-1$, $1$, $3$. $s^2=\dfrac{2\cdot9+3\cdot1+3\cdot1+2\cdot9}{10}=4.2$. Option B forgets the frequencies, option C is the standard deviation, and option D adds the deviations without squaring them.

::mc
Two sets of grouped data $A$ and $B$ have the same mean, with standard deviations $s_A=2.1$ and $s_B=3.4$. Which statement is correct?
A. $A$ certainly has a smaller range than $B$.
B. The data in $B$ are more even than the data in $A$.
C. The data in $A$ are more even than the data in $B$.
D. The two data sets have the same spread.
::key C
With the same mean, a smaller standard deviation means the data are less spread out. The standard deviation does not decide the range for certain, so A is wrong.

::tf
The weekly running distances (km) of $20$ people are given in the table.

| Distance (km) | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|
| People | $4$ | $6$ | $8$ | $2$ |

a) The class midpoint of the class $[30, 40)$ is $35$.
b) The mean of the data is $29$ km.
c) The variance of the data is $84$.
d) If every value is converted to a different unit by multiplying by $2$, the new variance is $168$.
::key T T T F
a) True: $\dfrac{30+40}{2}=35$. b) True: $\bar{x}=\dfrac{60+150+280+90}{20}=29$. c) True: $\dfrac{\sum n_ix_i^2}{n}=\dfrac{18500}{20}=925$ and $s^2=925-29^2=84$. d) False: every deviation is multiplied by $2$, so the variance is multiplied by $4$ and becomes $336$.

::sa
The weekly private study times (hours) of $30$ students are given in the table. Find the standard deviation of the data, giving your answer to 2 decimal places.

| Time (hours) | $[0, 3)$ | $[3, 6)$ | $[6, 9)$ | $[9, 12)$ |
|---|---|---|---|---|
| Students | $4$ | $10$ | $12$ | $4$ |

::key 2.65
The class midpoints are $1.5$, $4.5$, $7.5$, $10.5$. $\bar{x}=\dfrac{183}{30}=6.1$ and $\dfrac{\sum n_ix_i^2}{n}=\dfrac{1327.5}{30}=44.25$, so $s^2=44.25-6.1^2=7.04$ and $s\approx2.653$, which rounds to $2.65$.

::sa
The lengths (mm) of $40$ machine parts are given in the table. Find the variance of the data, giving your answer to 2 decimal places.

| Length (mm) | $[48, 49)$ | $[49, 50)$ | $[50, 51)$ | $[51, 52)$ |
|---|---|---|---|---|
| Parts | $4$ | $16$ | $16$ | $4$ |

::key 0.65
The table is symmetric, so $\bar{x}=50$; the deviations are $-1.5$, $-0.5$, $0.5$, $1.5$. $s^2=\dfrac{2\left(4\cdot2.25+16\cdot0.25\right)}{40}=\dfrac{26}{40}=0.65$.
:::
