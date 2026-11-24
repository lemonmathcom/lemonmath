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

It sounds as if someone must be wrong, but in fact all three are right. Each student is looking for one number that stands for the whole group; they just look at the "middle" of the marks in different ways. Whenever we face a long list of data, we want a number like that, to say briefly "on the whole, it looks like this". The hard part is choosing the right one, because each kind suits some situations and can mislead in others.

## The mean

### Exploring: the balance point

What is special about the leader's number $7$? Let us see how far above or below $7$ each student is:

$$-4,\ -2,\ -1,\ -1,\ 0,\ 1,\ 1,\ 1,\ 2,\ 3.$$

The shortfalls add up to $-8$ and the extras to $8$: they cancel out exactly. Picture a see-saw: put the pivot at $7$ and the two sides balance. That is why $7$ is the "balance point" of the data, and it is exactly the total of the marks ($70$) divided by the number of students ($10$).

:::definition Mean
For a data set $x_1, x_2, \dots, x_n$, the **mean** is
$$\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}.$$
If the value $x_i$ occurs $n_i$ times (frequency $n_i$), then $\bar{x}=\dfrac{n_1x_1+n_2x_2+\cdots+n_kx_k}{n}$, where $n=n_1+\cdots+n_k$.
:::

Because it is built from every value, the mean "hears" all of them, including any that are unusually large or small. That is both its strength and its weakness, and we come back to it at the end of the lesson. First, let us use the definition backwards: we know the mean and look for one missing value. Many students ask themselves exactly this before an exam.

:::example How many marks are needed?
Lan has four test marks: $7$, $8$, $7$, $8$. What must she score on the fifth test so that the mean of the five tests is $8$?

**Solution.** A mean of $8$ means that the five marks add up to $5\cdot8$. Let $x$ be the fifth mark:

$$\frac{7+8+7+8+x}{5}=8\iff 30+x=40\iff x=10.$$

So Lan needs $10$ on the fifth test.

**Check.** The mean of the first four tests is $\dfrac{30}{4}=7.5$; to pull it up to $8$ the new mark must be well above $8$, and $10$ makes sense.
:::

## The median and the quartiles

The mean asks "where does it balance?". The median asks a different, simpler question: "who stands in the middle of the line?". To know who is in the middle, everyone has to line up first, so the first step is always to sort the data in non-decreasing order.

:::definition Median and quartiles
- The **median** $M$ is the middle value if $n$ is odd, and the mean of the two middle values if $n$ is even.
- The **second quartile** $Q_2$ is the median. The **first quartile** $Q_1$ is the median of the lower half of the data (below $Q_2$); the **third quartile** $Q_3$ is the median of the upper half (above $Q_2$).
- If $n$ is odd, the median value itself is **not** included in either half.
:::

The median cuts the data into two halves with the same number of values; the three quartiles cut it into four parts. The usual stumbling point is when to take one value and when to average two, so we do the two cases one at a time, starting with an odd $n$.

:::example Marks of 11 students
The marks of $11$ students are $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

**Solution.** The data are already sorted. The total is $78$:

$$\bar{x}=\frac{78}{11}\approx7.09.$$

$n=11$ is odd, so the median is the $6$th value: $M=7$. Leaving it out, each half has $5$ values:

$$\text{lower half } 4, 5, \underline{6}, 6, 7\Rightarrow Q_1=6;\qquad \text{upper half } 7, 8, \underline{9}, 9, 10\Rightarrow Q_3=9.$$

The value $7$ occurs most often (three times), so the mode is $7$.

So $\bar{x}\approx7.09$, $M=7$, $Q_1=6$, $Q_3=9$, mode $7$.
:::

When $n$ is even, nobody stands exactly in the middle of the line: there are two people there. Then we take the mean of those two values. The data below are the group's marks from the start of the lesson, so you will see where the three statements came from.

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

The third way is the simplest: just see which value turns up most often. The **mode** is the value with the largest frequency. A data set can have several modes (when several values share the largest frequency). The mode is the only measure that works for data that are not numbers, such as the most chosen shirt colour or the best-selling shoe size.

## Data in a frequency table

With many values, nobody writes them all out; we record them neatly in a frequency table. The only snag is that a table does not show at a glance what, say, the $10$th value is. The trick is to add up the frequencies from left to right as we go (the **cumulative frequency**): each running total tells you how many values are in the line up to that column.

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

Earlier we said the mean "hears" every value. The next example shows how that can mislead, and why the median is more trustworthy in such cases.

:::example An extreme value
The monthly pocket money of seven students (thousand dong) is $50, 60, 60, 70, 80, 90, 500$. Compare $\bar{x}$ and $M$ with and without the value $500$.

**Solution.** With all seven values:

$$\bar{x}=\frac{910}{7}=130,\qquad M=70.$$

Without $500$, six values remain:

$$\bar{x}=\frac{410}{6}\approx68.33,\qquad M=\frac{60+70}{2}=65.$$

So one outlier raises the mean by about $62$ thousand dong but the median by only $5$ thousand dong. With all seven students, $130$ thousand dong is more than six of them receive, so the median $70$ describes a "typical student" better.
:::

:::tip Which measure to use
No single measure is best every time. Before you choose, ask yourself: are there any unusual values, and what question do I want to answer?

- Mean: data without outliers, when every value matters (totals, budgets).
- Median: data with outliers or strongly skewed to one side (salaries, house prices).
- Mode: data that are not numbers, or when you need the most frequent value (which shirt size to stock most).
- Quartiles: show how the data spread around the median (next lesson).
:::

:::warning Common mistakes
The three slips below are very common, even among students who understand the lesson. Most come from rushing, so slowing down by one step is usually enough.

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

Think back to the three students at the start: none of them was wrong, because each measure answers its own question. Next time you see an "average" in the news or in class, ask one more thing: is it the mean, the median or the mode, and could one unusual value be pulling it off course?

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, and do not worry about mistakes; then open the solution and compare it with your own thinking.

:::exercise
a) Find the mean of $6, 8, 9, 10, 12$.

b) Find the median of $3, 9, 4, 7, 1, 6$.

::hint
**What you need:** $\bar{x}$ is the total divided by the number of values; the median needs sorted data.

**Steps:**
1. a) Add the five numbers and divide by $5$.
2. b) Sort the six numbers and take the mean of the two middle ones.

::solution
a) The mean of $n$ numbers is their sum divided by $n$. For the $5$ given numbers,
$$\bar{x}=\frac{6+8+9+10+12}{5}=\frac{45}{5}=9.$$

b) Sort the numbers in non-decreasing order: $1, 3, 4, 6, 7, 9$. The data set has $n=6$ values (an even number), so the median is the mean of the two middle values, the $3$rd and the $4$th:
$$M=\frac{4+6}{2}=5.$$

So the mean of $6, 8, 9, 10, 12$ is $9$, and the median of $3, 9, 4, 7, 1, 6$ is $5$.

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
a) The mode is the value that occurs most often. In $2, 3, 3, 5, 5, 5, 7$: $2$ occurs once, $3$ twice, $5$ three times, $7$ once. Since $5$ occurs most often, the mode is $5$.

b) Make a frequency table of the $10$ recorded sizes: S occurs $2$ times, M occurs $4$ times, L occurs $3$ times, XL occurs $1$ time (check: $2+4+3+1=10$). The largest frequency is $4$, for size M, so the mode is M.

Shirt sizes are not numbers, so they cannot be added and then divided by the number of values; hence the mean of these data cannot be computed.

So the mode of the numbers in part a) is $5$; the mode of the shirt sizes is M, and the mean of the shirt sizes cannot be computed.

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
We use the convention: $M$ is the median of the whole data set; $Q_1$ is the median of the lower half and $Q_3$ is the median of the upper half. When $n$ is odd, the lower and upper halves do not contain the median $M$. Both data sets are already sorted in increasing order.

a) The data set has $n=9$ values (odd), so $M$ is the $5$th value: $M=8$.

The lower half is $2, 4, 5, 7$ ($4$ values), so $Q_1=\dfrac{4+5}{2}=4.5$.

The upper half is $10, 11, 13, 15$ ($4$ values), so $Q_3=\dfrac{11+13}{2}=12$.

b) The data set has $n=12$ values (even), so $M$ is the mean of the $6$th and $7$th values: $M=\dfrac{10+12}{2}=11$.

The lower half is $3, 4, 6, 7, 9, 10$ ($6$ values), so $Q_1=\dfrac{6+7}{2}=6.5$.

The upper half is $12, 13, 15, 16, 18, 20$ ($6$ values), so $Q_3=\dfrac{15+16}{2}=15.5$.

So in part a) $M=8$, $Q_1=4.5$, $Q_3=12$; in part b) $M=11$, $Q_1=6.5$, $Q_3=15.5$.

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
The total number of students is $3+5+8+4+2=22$.

The mean is the sum of (value times frequency) divided by $22$:
$$\bar{x}=\frac{1\cdot3+2\cdot5+3\cdot8+4\cdot4+5\cdot2}{22}=\frac{3+10+24+16+10}{22}=\frac{63}{22}\approx2.86.$$

The data set has $n=22$ values (even), so the median is the mean of the $11$th and $12$th values. The cumulative frequencies for $1, 2, 3, 4, 5$ books are $3, 8, 16, 20, 22$. The values from the $9$th to the $16$th are all $3$ (since $8<9$ and $16\ge16$), so the $11$th and $12$th values are both $3$. Hence
$$M=\frac{3+3}{2}=3.$$

The largest frequency is $8$, for $3$ books, so the mode is $3$.

So $\bar{x}\approx2.86$ books, $M=3$ books and the mode is $3$ books.

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
The data set $5, 7, 7, 8, 9, 10, 10, 10, 12$ is already sorted in increasing order and has $n=9$ values.

a) **False.** The sum of the values is $5+7+7+8+9+10+10+10+12=78$, so $\bar{x}=\dfrac{78}{9}\approx8.67$, which is not $8$.

b) **True.** Since $n=9$ is odd, the median is the $5$th value, which is $9$.

c) **True.** The lower half (not containing the median) is $5, 7, 7, 8$, so $Q_1=\dfrac{7+7}{2}=7$.

d) **False.** After adding $30$, the data set is $5, 7, 7, 8, 9, 10, 10, 10, 12, 30$ with $10$ values. The new median is $M=\dfrac{9+10}{2}=9.5$, up by $9.5-9=0.5$. The new mean is $\bar{x}=\dfrac{78+30}{10}=\dfrac{108}{10}=10.8$, up by about $10.8-8.67\approx2.13$. The median rises by less than the mean, so the claim that the median changes more is false.

So statements b), c) are true; statements a), d) are false.

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
The mean mark of the whole class equals the total of all marks divided by the total number of students.

The $20$ girls have a total of $20\cdot7=140$. The $10$ boys have a total of $10\cdot8.5=85$. The class has $20+10=30$ students. Hence
$$\bar{x}=\frac{20\cdot7+10\cdot8.5}{30}=\frac{140+85}{30}=\frac{225}{30}=7.5.$$

So the mean mark of the whole class is $7.5$.

*Remark.* We cannot take $\dfrac{7+8.5}{2}=7.75$, because the two groups have different sizes, so we must use the total marks and the total number of students.

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
Let $\bar{x}$ (million dong) be the mean and $M$ (million dong) the median of the seven salaries.

The total salary is $12+13+14+15+16+17+90=177$ (million dong), so
$$\bar{x}=\frac{177}{7}\approx25.29.$$

The seven values are already sorted in increasing order; $n=7$ is odd, so the median is the $4$th value, that is $M=15$.

Six of the seven people earn less than $18$ million dong (from $12$ to $17$ million dong), but the mean $25.29$ is larger than all six of these salaries, because it is pulled up by the very large value $90$ of the owner. So $25.29$ represents nobody among the seven people. The median $15$ is not distorted by this unusual value, so it reflects what a person here is usually paid.

So the mean is about $25.29$ million dong and the median is $15$ million dong; to know how much a person working here is usually paid, the median should be used.

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
Let $a$ be the number that was removed.

The seven numbers have mean $10$, so they add up to $7\cdot10=70$.

The remaining six numbers have mean $9$, so they add up to $6\cdot9=54$.

The total of the seven numbers equals the total of the remaining six plus the removed number, so $70=54+a$. Hence $a=70-54=16$.

Check: removing $16$ from the seven numbers leaves a total of $70-16=54$, and the mean of the remaining six is $\dfrac{54}{6}=9$ (correct).

So the removed number is $16$.

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
Let the data set, sorted in increasing order, be $a\le b\le c\le d\le e$ (positive whole numbers).

The median is $5$, so $c=5$. The largest value is $11$, so $e=11$. The mean is $6$, so the total of the five numbers is $5\cdot6=30$.

The single mode is $3$, so $3$ must occur at least twice (if every value occurred only once, there would not be a single mode). Since $3<5=c$ and every number after $c$ is at least $5$, the values equal to $3$ can only be $a$ and $b$. Hence $a=b=3$.

Then
$$d=30-3-3-5-11=8.$$

Check: $5\le d=8\le11$ (the order is correct). The data set $3, 3, 5, 8, 11$ has mean $\dfrac{30}{5}=6$, median $5$ and largest value $11$; the value $3$ occurs twice while every other value occurs once, so $3$ is the only mode.

So the required data set is $3, 3, 5, 8, 11$.

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
Let $x$ and $y$ be the marks of the two remaining tests (marked out of $10$, so $0\le x, y\le10$).

The four tests so far are $6, 7, 8, 7$ with total $6+7+8+7=28$. The mean of the six tests is at least $7.5$ when
$$\frac{6+7+8+7+x+y}{6}\ge7.5.$$

Multiplying both sides by $6>0$ (the inequality keeps its direction), we get $28+x+y\ge45$, hence
$$x+y\ge17.$$

Check each pair of marks:

- For $(8, 9)$: $8+9=17$ and $17\ge17$ is true, so this pair satisfies the condition.
- For $(10, 6)$: $10+6=16$ and $16\ge17$ is false, so this pair does not satisfy the condition.

So the condition is $x+y\ge17$ (with $0\le x, y\le10$); the pair $(8, 9)$ satisfies it and $(10, 6)$ does not.

**Answer.** $x+y\ge17$ (with $0\le x, y\le10$); $(8, 9)$ satisfies it, $(10, 6)$ does not.
:::

## Mini test

:::quiz
::mc NB
The mean of the data set $2, 5, 6, 9, 13$ is
A. $6$.
B. $7$.
C. $8.75$.
D. $35$.
::key B
The total is $35$ and there are $5$ values, so $\bar x=\dfrac{35}{5}=7$. Option A is the median, C divides by $4$ by mistake, and D is the total before dividing.

::mc NB
The median of the data set $9, 2, 13, 4, 6, 15$ is
A. $6$.
B. $8.5$.
C. $7.5$.
D. $9$.
::key C
Sorted: $2, 4, 6, 9, 13, 15$. There are $6$ values, so $M=\dfrac{6+9}{2}=7.5$. Option B takes the two middle numbers before sorting ($13$ and $4$).

::mc NB
In one month a shop sells $5$ pairs of shoes in size $36$, $9$ pairs in size $37$, $14$ pairs in size $38$, $8$ pairs in size $39$ and $3$ pairs in size $40$. The mode of the shoe-size data is
A. $14$.
B. $37$.
C. $40$.
D. $38$.
::key D
The mode is the value with the largest frequency: size $38$ ($14$ pairs). Option A confuses the mode with its frequency.

::mc TH
The first quartile $Q_1$ of the data set $1, 3, 4, 6, 7, 8, 9, 11, 12$ is
A. $3.5$.
B. $4$.
C. $3$.
D. $10$.
::key A
$n=9$ is odd and $M=7$. Leaving $7$ out, the lower half is $1, 3, 4, 6$, so $Q_1=\dfrac{3+4}{2}=3.5$. Option B puts $7$ into the lower half; D is $Q_3$.

::tf NB NB TH VD
Consider the data set $3, 5, 5, 6, 8, 9, 20$.
a) The mean is $8$.
b) The median is $6$.
c) The third quartile is $Q_3=8.5$.
d) If the value $20$ is removed, the mean falls by less than $1$.
::key T T F F
a) True: $\bar x=\dfrac{56}{7}=8$. b) True: the $4$th value is $6$. c) False: the upper half (without $6$) is $8, 9, 20$, so $Q_3=9$. d) False: the remaining mean is $\dfrac{36}{6}=6$, a fall of $2$.

::sa VD
In a group of $20$ students, $4$ score $6$, $6$ score $7$, $7$ score $8$ and $3$ score $9$. Find the mean mark of the group.
::key 7.45
$\bar x=\dfrac{4\cdot6+6\cdot7+7\cdot8+3\cdot9}{20}=\dfrac{149}{20}=7.45$.

::sa VD
The mean age of a group of $12$ friends is $15$. When their teacher joins the group, the mean age of all $13$ people is $17$. How old is the teacher?
::key 41
The $12$ friends' ages add up to $12\cdot15=180$, and the $13$ people's to $13\cdot17=221$. So the teacher is $221-180=41$.
:::
