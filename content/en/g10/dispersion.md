---
title: Measures of dispersion
description: Measure how spread out data is with the range, interquartile range, variance and standard deviation, compare data sets and detect outliers.
minutes: 18
---

:::goals
- Find the range and the interquartile range of a data set.
- Compute the variance and standard deviation, using either formula.
- Compare the spread of two data sets.
- Detect outliers with the $1.5\times$ interquartile-range rule.
:::

Two basketball players both average $8$ points a game. One scores $7, 8, 9$ night after night; the other scores $0, 8, 16$. Same mean, completely different players: one is steady, one is a gamble. The mean alone hides this. To describe data honestly we also need a number for **how spread out** it is.

## Range and interquartile range

:::definition Range and interquartile range
- The **range** is $R=x_{\max}-x_{\min}$.
- The **interquartile range** is $\Delta_Q=Q_3-Q_1$, the width of the middle half of the data.
:::

The range is easy but depends only on two values, so one extreme value ruins it. The interquartile range ignores the extremes.

:::example Range and interquartile range
Scores of 8 students: $4, 6, 7, 7, 8, 9, 10, 11$. Find $R$ and $\Delta_Q$.

**Solution.**
- $R=11-4=7$.
- $n=8$: lower half $4, 6, 7, 7$ gives $Q_1=\frac{6+7}{2}=6.5$; upper half $8, 9, 10, 11$ gives $Q_3=\frac{9+10}{2}=9.5$.
- $\Delta_Q=9.5-6.5=3$.
:::

## Variance and standard deviation

Both measures above ignore most of the data. The variance uses every value: it is the average of the squared distances from the mean.

:::definition Variance and standard deviation
For data $x_1, \dots, x_n$ with mean $\bar{x}$,
$$s^2=\frac{(x_1-\bar{x})^2+\cdots+(x_n-\bar{x})^2}{n},\qquad s=\sqrt{s^2}.$$
An equivalent formula, often faster, is
$$s^2=\frac{x_1^2+\cdots+x_n^2}{n}-\bar{x}^2.$$
:::

The standard deviation $s$ has the same unit as the data, which makes it easier to interpret. A small $s$ means the values hug the mean; a large $s$ means they are scattered.

:::example Two ways to get the variance
For $4, 6, 7, 7, 8, 9, 10, 11$ the mean is $\bar{x}=\frac{62}{8}=7.75$. Find $s^2$ and $s$.

**Solution.**
- Direct formula: the squared deviations are $14.0625,\ 3.0625,\ 0.5625,\ 0.5625,\ 0.0625,\ 1.5625,\ 5.0625,\ 10.5625$, with sum $35.5$. So $s^2=\frac{35.5}{8}=4.4375\approx 4.44$.
- Second formula: $\frac{16+36+49+49+64+81+100+121}{8}=\frac{516}{8}=64.5$, and $64.5-7.75^2=64.5-60.0625=4.4375$. ✓
- $s=\sqrt{4.4375}\approx 2.11$.
:::

:::example Comparing two groups
Group B scored $7, 7, 7, 8, 8, 8, 9, 9$. Compare it with the group above.

**Solution.** For B: $\bar{x}=7.875$, $s^2=\frac{501}{8}-7.875^2\approx 0.61$, so $s\approx 0.78$; $R=2$ and $\Delta_Q=8.5-7=1.5$. The means are almost equal ($7.75$ and $7.875$), but every measure of spread is much smaller for B. Group B is far more consistent.
:::

## The box plot

A **box plot** draws five numbers: the minimum, $Q_1$, the median, $Q_3$ and the maximum. The box covers the middle half of the data and the "whiskers" reach out to the extremes.

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

A value is an **outlier** if it lies far from the bulk of the data. A common rule: $x$ is an outlier if
$$x<Q_1-1.5\,\Delta_Q\qquad\text{or}\qquad x>Q_3+1.5\,\Delta_Q.$$

:::example Is 45 an outlier?
Data: $12, 13, 13, 14, 15, 15, 16, 17, 45$. Test for outliers.

**Solution.** $n=9$, $M=15$. Lower half $12, 13, 13, 14$ gives $Q_1=13$; upper half $15, 16, 17, 45$ gives $Q_3=\frac{16+17}{2}=16.5$. So $\Delta_Q=3.5$ and $1.5\Delta_Q=5.25$.
- Lower fence: $13-5.25=7.75$. Upper fence: $16.5+5.25=21.75$.
- $45>21.75$, so $45$ is an outlier. No other value is outside $[7.75;\ 21.75]$.
:::

:::warning Common mistakes
- Dividing by $n-1$: in this programme the variance divides by $n$.
- Forgetting the square root when asked for the standard deviation.
- Using $s^2=\frac{\sum x_i^2}{n}-\bar{x}$ (forgetting to square $\bar{x}$).
- Using the range to compare spread when an extreme value is present.
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

- $R=x_{\max}-x_{\min}$ and $\Delta_Q=Q_3-Q_1$.
- $s^2=\frac1n\sum(x_i-\bar{x})^2=\overline{x^2}-\bar{x}^2$ and $s=\sqrt{s^2}$.
- A smaller $s$ (or $\Delta_Q$) means more consistent data.
- $x$ is an outlier if $x<Q_1-1.5\Delta_Q$ or $x>Q_3+1.5\Delta_Q$.

## Practice

:::practice
1. Find $R$ and $\Delta_Q$ for $3, 5, 7, 9, 11$.
2. Find $s^2$ and $s$ for $2, 4, 4, 4, 5, 5, 7, 9$.
3. Find the variance of $6, 6, 6, 6$. What does the answer tell you?
4. For $3, 5, 7, 9, 11$ use $s^2=\overline{x^2}-\bar{x}^2$ to find $s^2$ and $s$ (to $0.01$).
5. Which group is more consistent: A $=4, 6, 7, 7, 8, 9, 10, 11$ or B $=7, 7, 7, 8, 8, 8, 9, 9$? Give a reason using $s$.
6. Is $40$ an outlier in $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40$?
7. Add $5$ to every value of $3, 5, 7, 9, 11$. How do the mean and $s$ change?
8. Multiply every value of $3, 5, 7, 9, 11$ by $2$. Find the new variance and $s$ (to $0.01$).
9. Challenge. The numbers $4, 6, 8, 10, x$ have mean $8$. Find $x$ and $s^2$.
10. Challenge. Four numbers have $\sum x_i=20$ and $\sum x_i^2=120$. Find $s^2$.
:::

:::solution Show solutions
1. $R=11-3=8$. $Q_1=\frac{3+5}{2}=4$, $Q_3=\frac{9+11}{2}=10$, so $\Delta_Q=6$.
2. $\bar{x}=5$. Squared deviations: $9, 1, 1, 1, 0, 0, 4, 16$, sum $32$. $s^2=\frac{32}{8}=4$ and $s=2$.
3. $\bar{x}=6$ and every deviation is $0$, so $s^2=0$. All values are equal: there is no spread.
4. $\bar{x}=7$ and $\overline{x^2}=\frac{9+25+49+81+121}{5}=\frac{285}{5}=57$. $s^2=57-49=8$ and $s=\sqrt8\approx 2.83$.
5. For A, $s\approx 2.11$; for B, $s\approx 0.78$. B has the smaller standard deviation, so B is more consistent.
6. $Q_1=3$, $Q_3=9$ (median $6$ left out), $\Delta_Q=6$, $1.5\Delta_Q=9$. Upper fence $=9+9=18$. Since $40>18$, it is an outlier.
7. The new data is $8, 10, 12, 14, 16$: the mean becomes $12$ (it increases by $5$), while $s=\sqrt8\approx 2.83$ does not change. Shifting all values does not change the spread.
8. The new data is $6, 10, 14, 18, 22$ with mean $14$. $s^2=\frac{64+16+0+16+64}{5}=32$ and $s=\sqrt{32}\approx 5.66$. The variance is multiplied by $4$ and $s$ by $2$.
9. Mean $8$ gives $4+6+8+10+x=40$, so $x=12$. Deviations $-4, -2, 0, 2, 4$, squares sum to $40$. $s^2=\frac{40}{5}=8$.
10. $\bar{x}=\frac{20}{4}=5$. $s^2=\frac{120}{4}-5^2=30-25=5$.
:::
