---
title: Measures of central tendency
description: Find the mean, median, quartiles and mode of a data set, including from a frequency table, and decide which one describes the data best.
minutes: 25
---

:::goals
- Compute the mean, median and mode of a data set, including from a frequency table.
- Find the quartiles $Q_1$, $Q_2$, $Q_3$ of a data set.
- Explain how an outlier changes each measure.
- Choose the measure that best describes a situation.
:::

A group of $10$ students has just taken a test, with these marks: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. The group leader says: "Our average mark is $7$." Another student says: "Half of the group got $7.5$ or more." A third says: "The most common mark is $8$." Who is right?

All three are. Each one describes the "centre" of the same data set in a different way. This lesson introduces these ways and when to use each one.

## The mean

### Exploring: the balance point

Take the leader's mark $7$ and compute how far each student is from $7$:

$$-4,\ -2,\ -1,\ -1,\ 0,\ 1,\ 1,\ 1,\ 2,\ 3.$$

The negative differences add up to $-8$ and the positive ones to $8$: they cancel out. The number $7$ is the "balance point" of the data. It is exactly the total of the marks ($70$) divided by the number of students ($10$).

:::definition Mean
For a data set $x_1, x_2, \dots, x_n$, the **mean** is
$$\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}.$$
If the value $x_i$ occurs $n_i$ times (frequency $n_i$), then $\bar{x}=\dfrac{n_1x_1+n_2x_2+\cdots+n_kx_k}{n}$, where $n=n_1+\cdots+n_k$.
:::

The mean uses every value, so it is sensitive to very large or very small values. Our first example uses the definition backwards: we know the mean and look for one value.

:::example How many marks are needed?
Lan has four test marks: $7$, $8$, $7$, $8$. What must she score on the fifth test so that the mean of the five tests is $8$?

**Solution.** A mean of $8$ means that the five marks add up to $5\cdot8$. Let $x$ be the fifth mark:

$$\frac{7+8+7+8+x}{5}=8\iff 30+x=40\iff x=10.$$

So Lan needs $10$ on the fifth test.

**Check.** The mean of the first four tests is $\dfrac{30}{4}=7.5$; to pull it up to $8$ the new mark must be well above $8$, and $10$ makes sense.
:::

## The median and the quartiles

First, sort the data in non-decreasing order.

:::definition Median and quartiles
- The **median** $M$ is the middle value if $n$ is odd, and the mean of the two middle values if $n$ is even.
- The **second quartile** $Q_2$ is the median. The **first quartile** $Q_1$ is the median of the lower half of the data (below $Q_2$); the **third quartile** $Q_3$ is the median of the upper half (above $Q_2$).
- If $n$ is odd, the median value itself is **not** included in either half.
:::

The median splits the data into two halves with the same number of values; the three quartiles split it into four parts. We start with an odd $n$.

:::example Marks of 11 students
The marks of $11$ students are $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

**Solution.** The data are already sorted. The total is $78$:

$$\bar{x}=\frac{78}{11}\approx7.09.$$

$n=11$ is odd, so the median is the $6$th value: $M=7$. Leaving it out, each half has $5$ values:

$$\text{lower half } 4, 5, \underline{6}, 6, 7\Rightarrow Q_1=6;\qquad \text{upper half } 7, 8, \underline{9}, 9, 10\Rightarrow Q_3=9.$$

The value $7$ occurs most often (three times), so the mode is $7$.

So $\bar{x}\approx7.09$, $M=7$, $Q_1=6$, $Q_3=9$, mode $7$.
:::

When $n$ is even, no value sits exactly in the middle, so we take the mean of the two middle values. These are the group's marks from the start of the lesson.

:::example Marks of 10 students
Marks: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

**Solution.** The total is $70$, so $\bar{x}=7$. $n=10$ is even; the two middle values are the $5$th and the $6$th:

$$M=\frac{7+8}{2}=7.5.$$

Two halves of $5$ values each:

$$\text{lower half } 3, 5, \underline{6}, 6, 7\Rightarrow Q_1=6;\qquad \text{upper half } 8, 8, \underline{8}, 9, 10\Rightarrow Q_3=8.$$

The value $8$ occurs three times, more than any other, so the mode is $8$.

So $\bar{x}=7$, $M=7.5$, $Q_1=6$, $Q_3=8$, mode $8$: exactly the three numbers the students quoted at the start.
:::

## The mode

The **mode** is the value with the largest frequency. A data set can have several modes (when several values share the largest frequency). The mode is the only measure that works for data that are not numbers, such as the most chosen shirt colour or the best-selling shoe size.

## Data in a frequency table

With many values, we record the data in a frequency table. To find the $k$th value, we add up the frequencies as we go (the **cumulative frequency**).

:::example A frequency table
The marks of $20$ students are given in the table. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

| Mark | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Frequency | 2 | 3 | 5 | 6 | 3 | 1 |

**Solution.** $n=2+3+5+6+3+1=20$. Multiply each mark by its frequency and add:

$$\bar{x}=\frac{10+18+35+48+27+10}{20}=\frac{148}{20}=7.4.$$

The cumulative frequencies are $2, 5, 10, 16, 19, 20$. So the $6$th to $10$th values are $7$, and the $11$th to $16$th values are $8$. Therefore:

$$M=\frac{x_{10}+x_{11}}{2}=\frac{7+8}{2}=7.5,\qquad Q_1=\frac{x_5+x_6}{2}=\frac{6+7}{2}=6.5,\qquad Q_3=\frac{x_{15}+x_{16}}{2}=\frac{8+8}{2}=8.$$

The largest frequency is $6$, for the mark $8$, so the mode is $8$.

So $\bar{x}=7.4$, $M=7.5$, $Q_1=6.5$, $Q_3=8$, mode $8$.
:::

## Effect of an outlier

The last example shows why the mean is not always the right choice.

:::example An extreme value
The monthly pocket money of seven students (thousand dong) is $50, 60, 60, 70, 80, 90, 500$. Compare $\bar{x}$ and $M$ with and without the value $500$.

**Solution.** With all seven values:

$$\bar{x}=\frac{910}{7}=130,\qquad M=70.$$

Without $500$, six values remain:

$$\bar{x}=\frac{410}{6}\approx68.33,\qquad M=\frac{60+70}{2}=65.$$

So one outlier raises the mean by about $62$ thousand dong but the median by only $5$ thousand dong. With all seven students, $130$ thousand dong is more than six of them receive, so the median $70$ describes a "typical student" better.
:::

:::tip Which measure to use
- Mean: data without outliers, when every value matters (totals, budgets).
- Median: data with outliers or strongly skewed to one side (salaries, house prices).
- Mode: data that are not numbers, or when you need the most frequent value (which shirt size to stock most).
- Quartiles: show how the data spread around the median (next lesson).
:::

:::warning Common mistakes
- **Wrong:** the median of $3, 9, 4, 7, 1, 6$ is $\dfrac{4+7}{2}=5.5$. **Why it is wrong:** the data were not sorted. **Right:** sort to $1, 3, 4, 6, 7, 9$ and take $\dfrac{4+6}{2}=5$.
- **Wrong:** for $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$, taking the upper half as $7, 7, 8, 9, 9, 10$ and $Q_3=8.5$. **Why it is wrong:** when $n$ is odd the median (the $6$th value) belongs to neither half. **Right:** the upper half is $7, 8, 9, 9, 10$, so $Q_3=9$.
- **Wrong:** saying "the mode is $6$" because the mark $8$ has frequency $6$. **Why it is wrong:** the mode is a value, not a frequency. **Right:** the mode is $8$.
:::

## Key terms

:::terms
- mean | số trung bình cộng
- median | trung vị
- quartile | tứ phân vị
- mode | mốt
- frequency | tần số
- cumulative frequency | tần số tích luỹ
- frequency table | bảng tần số
- outlier | giá trị bất thường
- data set | mẫu số liệu
:::

## Summary

- $\bar{x}=\dfrac{x_1+\cdots+x_n}{n}$; from a frequency table $\bar{x}=\dfrac{n_1x_1+\cdots+n_kx_k}{n}$. It is the balance point: the differences from it add up to $0$.
- Sort first. $M=Q_2$ is the middle value ($n$ odd) or the mean of the two middle values ($n$ even).
- $Q_1$, $Q_3$ are the medians of the lower and upper halves; for odd $n$, leave the median out before splitting.
- The mode is the value with the largest frequency.
- An outlier pulls $\bar{x}$ a long way, while $M$ hardly changes.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
a) Find the mean of $6, 8, 9, 10, 12$.

b) Find the median of $3, 9, 4, 7, 1, 6$.

::hint
**What you need:** $\bar{x}$ is the total divided by the number of values; the median needs sorted data.

**Steps:**
1. a) Add the five numbers and divide by $5$.
2. b) Sort the six numbers and take the mean of the two middle ones.

::solution
a) $\bar{x}=\dfrac{45}{5}=9$.

b) Sorted: $1, 3, 4, 6, 7, 9$; $M=\dfrac{4+6}{2}=5$.

**Answer.** a) $9$; b) $5$.
:::

:::exercise
a) Find the mode of $2, 3, 3, 5, 5, 5, 7$.

b) A shop records the shirt sizes sold in one day: M, L, S, M, XL, M, L, M, S, L. Find the mode. Can we compute the mean of these data?

::hint
**What you need:** the mode is the value with the largest frequency; the mean can only be computed for numerical data.

**Steps:**
1. Count how often each value occurs.
2. Choose the value that occurs most often.

::solution
a) $5$ occurs three times, more than any other value.

b) Frequencies: S: $2$, M: $4$, L: $3$, XL: $1$. Shirt sizes are not numbers, so they cannot be added and divided.

**Answer.** a) mode $5$; b) mode M; the mean cannot be computed.
:::

:::exercise
Find $M$, $Q_1$, $Q_3$ for each data set:

a) $2, 4, 5, 7, 8, 10, 11, 13, 15$;

b) $3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20$.

::hint
**What you need:** $Q_1$, $Q_3$ are the medians of the lower and upper halves; for odd $n$, leave the median out.

**Steps:**
1. Count $n$ and find the median.
2. Split into two halves and find the median of each.

::solution
a) $n=9$, $M=8$. Lower half $2, 4, 5, 7$: $Q_1=\dfrac{4+5}{2}=4.5$. Upper half $10, 11, 13, 15$: $Q_3=\dfrac{11+13}{2}=12$.

b) $n=12$, $M=\dfrac{10+12}{2}=11$. Lower half $3, 4, 6, 7, 9, 10$: $Q_1=6.5$. Upper half $12, 13, 15, 16, 18, 20$: $Q_3=15.5$.

**Answer.** a) $M=8$, $Q_1=4.5$, $Q_3=12$; b) $M=11$, $Q_1=6.5$, $Q_3=15.5$.
:::

:::exercise
The table gives the number of books read in one month by $22$ students. Find $\bar{x}$ (to two decimal places), $M$ and the mode.

| Books | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Students | 3 | 5 | 8 | 4 | 2 |

::hint
**What you need:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$; use cumulative frequencies to find the middle values.

**Steps:**
1. Compute the total of $n_ix_i$.
2. Build the cumulative frequencies and find the $11$th and $12$th values.

::solution
$$\bar{x}=\frac{3+10+24+16+10}{22}=\frac{63}{22}\approx2.86.$$
Cumulative frequencies $3, 8, 16, 20, 22$: the $11$th and $12$th values are both $3$, so $M=3$. The largest frequency is $8$, for $3$ books.

**Answer.** $\bar{x}\approx2.86$; $M=3$; mode $3$.
:::

:::exercise
Consider the data set $5, 7, 7, 8, 9, 10, 10, 10, 12$. Is each claim true or false?

a) The mean is $8$.

b) The median is $9$.

c) The first quartile is $Q_1=7$.

d) If the value $30$ is added to the data set, the median changes more than the mean.

::hint
**What you need:** the definitions of $\bar{x}$, $M$, $Q_1$; the effect of an outlier.

**Steps:**
1. Compute the total and $\bar{x}$.
2. $n=9$: find $M$, then the lower half of $4$ values.
3. With $n=10$ after adding $30$, recompute $\bar{x}$ and $M$.

::solution
a) **False:** $\bar{x}=\dfrac{78}{9}\approx8.67$.

b) **True:** the $5$th value is $9$.

c) **True:** the lower half $5, 7, 7, 8$ gives $Q_1=\dfrac{7+7}{2}=7$.

d) **False:** after adding $30$, $M=\dfrac{9+10}{2}=9.5$ (up by $0.5$), while $\bar{x}=\dfrac{108}{10}=10.8$ (up by about $2.13$).

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
A class has $20$ girls with a mean mark of $7.0$ and $10$ boys with a mean mark of $8.5$. Find the mean mark of the whole class.

::hint
**What you need:** the total of a group equals the number of people times the mean.

**Steps:**
1. Find the total marks of the girls and of the boys.
2. Divide the sum by $30$.

::solution
$$\bar{x}=\frac{20\cdot7+10\cdot8.5}{30}=\frac{140+85}{30}=\frac{225}{30}=7.5.$$
We cannot take $\dfrac{7+8.5}{2}=7.75$, because the two groups have different sizes.

**Answer.** $7.5$.
:::

:::exercise
The monthly salaries (million dong) of the seven people working in a small shop are $12, 13, 14, 15, 16, 17, 90$ (the $90$ is the owner's salary). Find the mean and the median. Someone wants to know "how much a person working here is usually paid"; which number should they use?

::hint
**What you need:** an outlier pulls the mean but hardly affects the median.

**Steps:**
1. Compute $\bar{x}$ and $M$.
2. Compare each number with most of the values.

::solution
$$\bar{x}=\frac{177}{7}\approx25.29,\qquad M=15.$$
Six of the seven people earn less than $18$ million dong, so $25.29$ represents nobody.

**Answer.** $\bar{x}\approx25.29$ million dong, $M=15$ million dong; the median should be used.
:::

:::exercise Challenge
Seven numbers have mean $10$. When one number is removed, the remaining six have mean $9$. Which number was removed?

::hint
**What you need:** total $=$ number of values $\times$ mean.

**Steps:**
1. Find the total of the seven numbers and of the six numbers.
2. Take the difference.

::solution
The seven numbers add up to $7\cdot10=70$ and the six to $6\cdot9=54$, so the removed number is $70-54=16$.

**Answer.** $16$.
:::

:::exercise Challenge
A data set of $5$ positive whole numbers has mean $6$, median $5$, a single mode $3$, and largest value $11$. Find the data set.

::hint
**What you need:** for $5$ sorted values $a\le b\le c\le d\le e$, the median is $c$.

**Steps:**
1. Write $c=5$, $e=11$ and total $30$.
2. The single mode is $3$: the number $3$ must occur at least twice, and only $a$, $b$ are less than $5$.
3. Find $d$ from the total.

::solution
The total is $5\cdot6=30$. Since $3<5=c$, the value $3$ can only be $a$ and $b$, so $a=b=3$. Then
$$d=30-3-3-5-11=8.$$
In $3, 3, 5, 8, 11$ every value other than $3$ occurs once, so $3$ is the only mode.

**Answer.** $3, 3, 5, 8, 11$.
:::

:::exercise
(Revisiting [Linear inequalities in two variables](lesson:linear-inequality-two-variables).) Binh has four test marks: $6, 7, 8, 7$. There are two more tests, with marks $x$ and $y$. Write the condition for the mean of all six tests to be at least $7.5$. Do the pairs of marks $(8, 9)$ and $(10, 6)$ satisfy it?

::hint
**What you need:** total $=$ number of tests $\times$ mean; a condition of the form $ax+by\ge c$ is a linear inequality in two variables.

**Steps:**
1. Write $\dfrac{28+x+y}{6}\ge7.5$.
2. Simplify to an inequality in $x, y$.
3. Substitute both pairs.

::solution
$$\frac{6+7+8+7+x+y}{6}\ge7.5\iff 28+x+y\ge45\iff x+y\ge17.$$
For $(8, 9)$: $17\ge17$, true. For $(10, 6)$: $16\ge17$, false.

**Answer.** $x+y\ge17$ (with $0\le x, y\le10$); $(8, 9)$ satisfies it, $(10, 6)$ does not.
:::

## Mini test

:::quiz
::mc
The mean of the data set $2, 5, 6, 9, 13$ is
A. $6$.
B. $7$.
C. $8.75$.
D. $35$.
::key B
The total is $35$ and there are $5$ values, so $\bar x=\dfrac{35}{5}=7$. Option A is the median, C divides by $4$ by mistake, and D is the total before dividing.

::mc
The median of the data set $9, 2, 13, 4, 6, 15$ is
A. $6$.
B. $8.5$.
C. $7.5$.
D. $9$.
::key C
Sorted: $2, 4, 6, 9, 13, 15$. There are $6$ values, so $M=\dfrac{6+9}{2}=7.5$. Option B takes the two middle numbers before sorting ($13$ and $4$).

::mc
In one month a shop sells $5$ pairs of shoes in size $36$, $9$ pairs in size $37$, $14$ pairs in size $38$, $8$ pairs in size $39$ and $3$ pairs in size $40$. The mode of the shoe-size data is
A. $14$.
B. $37$.
C. $40$.
D. $38$.
::key D
The mode is the value with the largest frequency: size $38$ ($14$ pairs). Option A confuses the mode with its frequency.

::mc
The first quartile $Q_1$ of the data set $1, 3, 4, 6, 7, 8, 9, 11, 12$ is
A. $3.5$.
B. $4$.
C. $3$.
D. $10$.
::key A
$n=9$ is odd and $M=7$. Leaving $7$ out, the lower half is $1, 3, 4, 6$, so $Q_1=\dfrac{3+4}{2}=3.5$. Option B puts $7$ into the lower half; D is $Q_3$.

::tf
Consider the data set $3, 5, 5, 6, 8, 9, 20$.
a) The mean is $8$.
b) The median is $6$.
c) The third quartile is $Q_3=8.5$.
d) If the value $20$ is removed, the mean falls by less than $1$.
::key T T F F
a) True: $\bar x=\dfrac{56}{7}=8$. b) True: the $4$th value is $6$. c) False: the upper half (without $6$) is $8, 9, 20$, so $Q_3=9$. d) False: the remaining mean is $\dfrac{36}{6}=6$, a fall of $2$.

::sa
In a group of $20$ students, $4$ score $6$, $6$ score $7$, $7$ score $8$ and $3$ score $9$. Find the mean mark of the group.
::key 7.45
$\bar x=\dfrac{4\cdot6+6\cdot7+7\cdot8+3\cdot9}{20}=\dfrac{149}{20}=7.45$.

::sa
The mean age of a group of $12$ friends is $15$. When their teacher joins the group, the mean age of all $13$ people is $17$. How old is the teacher?
::key 41
The $12$ friends' ages add up to $12\cdot15=180$, and the $13$ people's to $13\cdot17=221$. So the teacher is $221-180=41$.
:::
