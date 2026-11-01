---
title: Measures of central tendency
description: Find the mean, median, quartiles and mode of a data set, including from a frequency table, and decide which one describes the data best.
minutes: 16
---

:::goals
- Compute the mean, median and mode of a data set, also from a frequency table.
- Find the quartiles $Q_1$, $Q_2$, $Q_3$ of a data set.
- Explain how an extreme value changes each measure.
- Choose the measure that best describes a given situation.
:::

Your class has just had a test. The teacher says, "The average was 7." A friend says, "Half the class scored at least 7.5." A third says, "Most students got 8." Are they contradicting each other? No: each is describing the "centre" of the same data in a different way. This lesson shows the four standard ways, and when each one is the honest choice.

## The mean

:::definition Mean
For data $x_1, x_2, \dots, x_n$ the **mean** is
$$\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}.$$
If the value $x_i$ occurs $f_i$ times, then $\bar{x}=\dfrac{f_1x_1+f_2x_2+\cdots+f_kx_k}{n}$, where $n=f_1+\cdots+f_k$.
:::

The mean uses every value, so it is sensitive to extreme ones.

## The median and the quartiles

Sort the data from smallest to largest.

:::definition Median and quartiles
- The **median** $M$ (also $Q_2$) is the middle value if $n$ is odd, and the mean of the two middle values if $n$ is even.
- The **first quartile** $Q_1$ is the median of the lower half of the data, and the **third quartile** $Q_3$ is the median of the upper half.
- If $n$ is odd, the median itself is **left out** of both halves.
:::

The median splits the data into two halves; the quartiles split it into four quarters.

:::example Eleven test scores
Scores of 11 students: $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$. Find the mean, median, quartiles and mode.

**Solution.**
- Sum $=78$, so $\bar{x}=\frac{78}{11}\approx 7.09$.
- $n=11$ is odd, so the median is the 6th value: $M=7$.
- Lower half (without the median): $4, 5, 6, 6, 7$, whose middle is $6$. So $Q_1=6$.
- Upper half: $7, 8, 9, 9, 10$, whose middle is $9$. So $Q_3=9$.
- The value $7$ occurs most often (three times): mode $=7$.
:::

:::example Ten test scores
Scores: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

**Solution.**
- Sum $=70$, so $\bar{x}=7$.
- $n=10$ is even: the 5th and 6th values are $7$ and $8$, so $M=7.5$.
- Lower half $3, 5, 6, 6, 7$ gives $Q_1=6$; upper half $8, 8, 8, 9, 10$ gives $Q_3=8$.
- Mode $=8$ (three times).
:::

## The mode

The **mode** is the value that occurs most often. A data set can have no clear mode, or two modes. The mode is the only measure that also works for categories (the most popular colour, the most common shoe size).

## Data in a frequency table

:::example A frequency table
The scores of 20 students are summarised below. Find $\bar{x}$, $M$, $Q_1$, $Q_3$ and the mode.

| Score | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Frequency | 2 | 3 | 5 | 6 | 3 | 1 |

**Solution.**
- $n=2+3+5+6+3+1=20$. Sum $=10+18+35+48+27+10=148$, so $\bar{x}=\frac{148}{20}=7.4$.
- Cumulative counts: $2, 5, 10, 16, 19, 20$. The 10th value is $7$ and the 11th is $8$, so $M=7.5$.
- Lower half = first 10 values: the 5th is $6$ and the 6th is $7$, so $Q_1=6.5$.
- Upper half = last 10 values: the 15th and 16th are both $8$, so $Q_3=8$.
- The highest frequency is $6$, so the mode is $8$.
:::

## Effect of an outlier

:::example An extreme value
Seven students' monthly pocket money (in thousand dong): $50, 60, 60, 70, 80, 90, 500$. Compare the measures with and without the value $500$.

**Solution.**
- With all seven: $\bar{x}=\frac{910}{7}=130$, $M=70$.
- Without $500$: $\bar{x}=\frac{410}{6}\approx 68.33$ and $M=\frac{60+70}{2}=65$.
- One extreme value moved the mean by about $62$ but the median by only $5$.
:::

:::tip Which measure to use
- Mean: data without extreme values, when every value matters (total, budget).
- Median: data with extreme values or a skewed shape (pay, house prices).
- Mode: categories, or "the most typical" value.
- Quartiles: to describe the spread around the median (next lesson).
:::

:::warning Common mistakes
- Not sorting the data before finding the median.
- For an even $n$, picking one of the middle values instead of their mean.
- For an odd $n$, keeping the median in the halves when finding $Q_1$ and $Q_3$.
- Confusing the mode (a value) with its frequency.
:::

## Key terms

:::terms
- mean | số trung bình cộng
- median | trung vị
- quartile | tứ phân vị
- mode | mốt
- frequency | tần số
- frequency table | bảng tần số
- outlier | giá trị ngoại lệ
- data set | mẫu số liệu
:::

## Summary

- The mean is the sum divided by the count; with a frequency table, use $\bar{x}=\frac{\sum f_ix_i}{n}$.
- The median is the middle value of the sorted data; $Q_1$ and $Q_3$ are the medians of the lower and upper halves.
- The mode is the most frequent value.
- Extreme values pull the mean much more than the median.

## Practice

:::practice
1. Find the mean of $6, 8, 9, 10, 12$.
2. Find the median of $3, 9, 4, 7, 1, 6$.
3. Find the mode of $2, 3, 3, 5, 5, 5, 7$.
4. For $2, 4, 5, 7, 8, 10, 11, 13, 15$ find $M$, $Q_1$ and $Q_3$.
5. The table gives the number of books read by 22 students. Find $\bar{x}$ (to $0.01$), $M$ and the mode.

   | Books | 1 | 2 | 3 | 4 | 5 |
   |---|---|---|---|---|---|
   | Students | 3 | 5 | 8 | 4 | 2 |
6. Five numbers have mean $8$. Four of them are $6, 7, 9, 10$. Find the fifth.
7. A class has 20 girls with mean score $7.0$ and 10 boys with mean score $8.5$. Find the mean of the whole class.
8. For $12, 13, 14, 15, 16, 17, 90$ find the mean and the median. Which describes the data better?
9. Challenge. Seven numbers have mean $10$. After removing one number the mean of the other six is $9$. Which number was removed?
10. Challenge. For $3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20$ find $M$, $Q_1$ and $Q_3$.
:::

:::solution Show solutions
1. $\frac{6+8+9+10+12}{5}=\frac{45}{5}=9$.
2. Sorted: $1, 3, 4, 6, 7, 9$. The middle values are $4$ and $6$, so $M=5$.
3. The value $5$ occurs three times: mode $=5$.
4. $n=9$: $M=8$ (5th value). Lower half $2, 4, 5, 7$ gives $Q_1=\frac{4+5}{2}=4.5$. Upper half $10, 11, 13, 15$ gives $Q_3=\frac{11+13}{2}=12$.
5. $n=22$; sum $=3+10+24+16+10=63$, so $\bar{x}=\frac{63}{22}\approx 2.86$. Cumulative counts $3, 8, 16, 20, 22$: the 11th and 12th values are both $3$, so $M=3$. Highest frequency $8$, so mode $=3$.
6. Total $=5\cdot 8=40$. Known sum $=32$. The fifth number is $8$.
7. Total $=20\cdot 7+10\cdot 8.5=140+85=225$; mean $=\frac{225}{30}=7.5$.
8. Mean $=\frac{177}{7}\approx 25.29$; median $=15$. The extreme value $90$ pulls the mean above all but one of the values, so the median describes the data better.
9. Total of seven $=70$; total of six $=54$. The removed number is $70-54=16$.
10. $n=12$: the 6th and 7th values are $10$ and $12$, so $M=11$. Lower half $3, 4, 6, 7, 9, 10$ gives $Q_1=\frac{6+7}{2}=6.5$. Upper half $12, 13, 15, 16, 18, 20$ gives $Q_3=\frac{15+16}{2}=15.5$.
:::
