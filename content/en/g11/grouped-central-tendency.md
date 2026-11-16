---
title: Mean, median, quartiles and mode of grouped data
description: Estimate the mean, median, quartiles and mode of grouped data from class midpoints and cumulative frequencies, and explain what each number tells us.
minutes: 25
---

:::goals
- Find the mean of grouped data using the representative values of the classes.
- Identify the class containing the median or a quartile and compute these numbers by formula.
- Identify the modal class and find the mode of grouped data.
- Compare these numbers with values computed from the raw data and choose the right one to describe a sample.
:::

In the previous lesson, $40$ students in grade 11 were asked how long their journey to school takes, and the data were grouped into a table:

| Time (minutes) | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|---|
| Students | $6$ | $14$ | $12$ | $6$ | $2$ |

Suppose the $40$ raw values have been lost and only this table is left. How long does the journey take on average? What time do half of the students not exceed? What time is the most common? In grade 10 we answered such questions with the mean, median, quartiles and mode. This lesson shows how to estimate them when only grouped data are available.

## The mean

### Explore: replacing each value by the representative value

We do not know the exact values for the $14$ students in the class $[10, 20)$, but we know they take from $10$ up to but not including $20$ minutes. If we treat each student in the class as taking exactly the representative time of $15$ minutes, then these $14$ students together contribute $14\cdot15=210$ minutes to the total. Doing the same for the other classes and dividing by the number of students gives an estimate of the mean.

:::theorem The mean of grouped data
Take grouped data of sample size $n$ with $k$ classes, where class $i$ has representative value $c_i$ and frequency $m_i$. The (estimated) mean is
$$\bar{x}=\dfrac{m_1c_1+m_2c_2+\dots+m_kc_k}{n}.$$
:::

Each representative value is multiplied by the frequency of its class, so a crowded class counts for more. This formula can also be written $\bar{x}=f_1c_1+\dots+f_kc_k$, where $f_i=\dfrac{m_i}{n}$ is the relative frequency (as a decimal).

:::example The mean journey time
Estimate the mean journey time from the table above.

**Understand.** We need $\bar{x}$ for a sample of size $n=40$ with $5$ classes of width $10$.

**Plan.** Find the representative value of each class, multiply by the frequency, add, and divide by $n$.

**Solve.** The representative values are $5$, $15$, $25$, $35$, $45$. Hence
$$\bar{x}=\dfrac{6\cdot5+14\cdot15+12\cdot25+6\cdot35+2\cdot45}{40}=\dfrac{30+210+300+210+90}{40}=\dfrac{840}{40}=21.$$
So the estimated mean journey time is $21$ minutes.

**Look back.** From the $40$ raw values in the previous lesson, the true mean is $20.575$ minutes. The estimate $21$ is off by about $0.4$ minutes, which is very close. The difference arises because we treated every student in a class as taking exactly the representative time, whereas in reality some take more and some take less, and the differences largely cancel.
:::

## The median and the quartiles

### Explore: finding the halfway point using cumulative frequencies

The median splits the sample into two equal halves. For $n=40$ we need the value below which $\dfrac n2=20$ students lie. The cumulative frequencies of the classes are $6$, $20$, $32$, $38$, $40$. Since $6<20\le20$, the halfway point lies in the class $[10, 20)$, the first class whose cumulative frequency is not less than $20$. Before this class there are only $6$ students, so we need $20-6=14$ more students out of the $14$ in the class: all of the class. The halfway point is the upper boundary $20$.

In general, if the class containing the halfway point has $m_p$ students, of which we need $\dfrac n2-C_{p-1}$, and we assume the students in the class are spread evenly, then we move from the lower boundary $a_p$ by the fraction $\dfrac{n/2-C_{p-1}}{m_p}$ of the class width.

:::theorem The median and quartiles of grouped data
Take grouped data of sample size $n$, in which class $j$ has frequency $m_j$ and cumulative frequency $C_j$ (put $C_0=0$). For $r=1, 2, 3$, let $[a_p, a_{p+1})$ be the first class with $C_p\ge\dfrac{rn}{4}$. The $r$th quartile is
$$Q_r=a_p+\dfrac{\dfrac{rn}{4}-C_{p-1}}{m_p}\cdot(a_{p+1}-a_p).$$
The second quartile $Q_2$ is the **median** $M_e$; $Q_1$ is the **lower quartile** and $Q_3$ is the **upper quartile**.
:::

When $\dfrac{rn}{4}$ is exactly equal to a cumulative frequency, choosing that class or the next one gives the same result: the boundary the two classes share.

:::example The median and quartiles of the journey times
Estimate $M_e$, $Q_1$, $Q_3$ for the journey times, and compare them with the values from the raw data.

**Solution.** The cumulative frequencies are $6$, $20$, $32$, $38$, $40$ and $n=40$.

Median: $\dfrac n2=20$, and the first class with $C_p\ge20$ is $[10, 20)$ ($p=2$, $C_1=6$, $m_2=14$). So $M_e=10+\dfrac{20-6}{14}\cdot10=20$.

Lower quartile: $\dfrac n4=10$; the first class with $C_p\ge10$ is also $[10, 20)$. So $Q_1=10+\dfrac{10-6}{14}\cdot10\approx12.86$.

Upper quartile: $\dfrac{3n}{4}=30$; the first class with $C_p\ge30$ is $[20, 30)$ ($C_2=20$, $m_3=12$). So $Q_3=20+\dfrac{30-20}{12}\cdot10\approx28.33$.

So $M_e=20$, $Q_1\approx12.86$, $Q_3\approx28.33$ minutes.

**Compared with the raw data.** From the $40$ raw values we have $M_e=19.5$, $Q_1=12.5$ and $Q_3=27.5$. The estimates differ by less than one minute.
:::

## The mode

The mode is the most frequent value. For grouped data we find the class with the greatest frequency, called the **modal class**, and then choose a point inside it. This point is not necessarily the representative value: it is pulled towards the neighbouring class that is more crowded, because the data are denser there.

:::theorem The mode of grouped data
Let $[u_j, u_{j+1})$ be the class with the greatest frequency $m_j$, let $h=u_{j+1}-u_j$ be its width, and let $m_{j-1}$, $m_{j+1}$ be the frequencies of the two neighbouring classes (taken as $0$ if there is no such class). The mode is
$$M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h.$$
:::

If $m_{j-1}$ equals $m_{j+1}$, the fraction is $\dfrac12$ and the mode is the midpoint of the class. If the previous class is more crowded than the next one ($m_{j-1}>m_{j+1}$), the fraction is less than $\dfrac12$ and the mode moves towards the lower boundary.

:::example The mode of the journey times
Estimate the mode of the journey times.

**Solution.** The class with the greatest frequency is $[10, 20)$ with $m_j=14$, $u_j=10$, $h=10$. The two neighbouring classes have frequencies $m_{j-1}=6$ and $m_{j+1}=12$. Hence
$$M_o=10+\dfrac{14-6}{(14-6)+(14-12)}\cdot10=10+\dfrac{8}{10}\cdot10=18.$$
So the estimated mode is $18$ minutes.

**Remark.** The representative value of the class is $15$ but the mode is $18$: the next class ($[20, 30)$, $12$ students) is more crowded than the previous one ($[0, 10)$, $6$ students), so the mode is pulled to the right. In the $40$ raw values many values occur twice, so there is no single mode; the number $18$ tells us the region where times are most common.
:::

Now we compute all four numbers for a real-life problem and see what they say.

:::example Employees' salaries
Suppose the monthly salaries (in millions of dong) of $50$ employees of a company are grouped as follows: $[6, 9)$ has $10$ people, $[9, 12)$ has $18$, $[12, 15)$ has $14$, $[15, 18)$ has $6$, $[18, 21)$ has $2$. Estimate the mean, median, $Q_1$, $Q_3$ and mode (to 2 decimal places). Which number should we use to describe the "typical" salary?

**Solution.** The representative values are $7.5$; $10.5$; $13.5$; $16.5$; $19.5$ and the cumulative frequencies are $10$, $28$, $42$, $48$, $50$.

Mean: $\bar{x}=\dfrac{10\cdot7.5+18\cdot10.5+14\cdot13.5+6\cdot16.5+2\cdot19.5}{50}=\dfrac{591}{50}=11.82$.

Median: $\dfrac n2=25$, class $[9, 12)$ ($C_1=10$, $m_2=18$): $M_e=9+\dfrac{25-10}{18}\cdot3\approx11.5$.

$Q_1$: $\dfrac n4=12.5$, class $[9, 12)$: $Q_1=9+\dfrac{12.5-10}{18}\cdot3\approx9.42$.

$Q_3$: $\dfrac{3n}{4}=37.5$, class $[12, 15)$ ($C_2=28$, $m_3=14$): $Q_3=12+\dfrac{37.5-28}{14}\cdot3\approx14.04$.

Mode: the class $[9, 12)$ has $m_j=18$ and its neighbours have $10$ and $14$: $M_o=9+\dfrac{18-10}{(18-10)+(18-14)}\cdot3=9+\dfrac{8}{12}\cdot3=11$.

So $\bar{x}\approx11.82$, $M_e\approx11.50$, $Q_1\approx9.42$, $Q_3\approx14.04$ and $M_o=11.00$ (millions of dong).

**Meaning.** The mean ($11.82$) is larger than the median ($11.5$) and the mode ($11$) because a few employees with high salaries (up to $21$ million dong) pull the mean up. The median tells us that half of the employees earn no more than $11.5$ million dong, and the mode tells us that the most common salary is around $11$ million dong. To describe the "typical" salary, the median or the mode is more suitable than the mean when there are a few unusually large values.
:::

:::example The effect of an outlier
Suppose one more student, whose journey takes $90$ minutes, is added to the $40$ raw values of the previous lesson, so there are now $41$ values. How do the mean and the median change?

**Solution.** The sum of the $40$ raw values is $40\cdot20.575=823$. With the 41st student the sum is $823+90=913$, so the new mean is $\dfrac{913}{41}\approx22.27$ minutes, an increase of $22.27-20.575\approx1.7$ minutes. The new median is the $21$st value in order, which is $20$ minutes, compared with $19.5$ before, an increase of only $0.5$ minutes.

So one very large value raises the mean by about $1.7$ minutes but the median by only $0.5$ minutes.

**Remark.** The mean is strongly affected by outliers, while the median and the quartiles are affected less.
:::

**Connections.** The formulas in this lesson are built on the representative values and cumulative frequencies of the previous lesson, and take their ideas from how we found the mean, median, quartiles and mode in grade 10. The mean tells us the "centre" of the data in the sense of a total, the median splits the sample in half, and the mode points to the most crowded region. When we also need to know how widely the data are spread, we use measures of spread, which follow on from these measures of central tendency.

:::warning Common mistakes
- **Forgetting to multiply by the frequencies when finding the mean.** Wrong: $\bar{x}=\dfrac{5+15+25+35+45}{5}=25$. Why it is wrong: this treats every class as having the same number of students. Right: $\bar{x}=\dfrac{6\cdot5+14\cdot15+12\cdot25+6\cdot35+2\cdot45}{40}=21$.
- **Thinking the class containing the median is the class with the greatest frequency.** Wrong: for frequencies $15, 3, 3, 3, 16$ ($n=40$), the class containing the median is the fifth class because it is the most crowded. Why it is wrong: the cumulative frequencies $15, 18, 21$ show that $\dfrac n2=20$ lies in the third class. Right: the class containing the median is the first class with cumulative frequency $\ge\dfrac n2$.
- **Using the frequency of the previous class instead of the cumulative frequency.** Wrong: $Q_3=12+\dfrac{37.5-18}{14}\cdot3\approx16.18$ in the salary example. Why it is wrong: $18$ is only the frequency of the second class, whereas $28$ people come before the class $[12, 15)$. Right: $C_{p-1}=28$ and $Q_3\approx14.04$.
- **Taking the mode to be the representative value of the most crowded class.** Wrong: the mode of the journey times is $15$. Why it is wrong: the formula shows the mode is pulled towards the more crowded neighbouring class. Right: $M_o=18$.
:::

## Key terms

:::terms
- mean | số trung bình
- median | trung vị
- quartile | tứ phân vị
- mode | mốt
- modal class | nhóm chứa mốt
- representative value (class midpoint) | giá trị đại diện
- cumulative frequency | tần số tích luỹ
- central tendency | xu thế trung tâm
- outlier | giá trị ngoại lai
- grouped data | mẫu số liệu ghép nhóm
:::

## Summary

- Mean: $\bar{x}=\dfrac{m_1c_1+\dots+m_kc_k}{n}$, where $c_i$ is the representative value and $m_i$ is the frequency of class $i$.
- The $r$th quartile: $Q_r=a_p+\dfrac{\frac{rn}{4}-C_{p-1}}{m_p}\cdot(a_{p+1}-a_p)$, where $[a_p, a_{p+1})$ is the first class with $C_p\ge\dfrac{rn}{4}$; the median is $M_e=Q_2$.
- Mode: $M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h$, where $[u_j, u_{j+1})$ is the class with the greatest frequency.
- These values are only estimates of the numbers computed from raw data, because we assume the data in each class are spread evenly.
- The mean is strongly affected by outliers; the median and quartiles are affected less.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
The heights of $40$ students are grouped: $[150, 155)$ has $4$, $[155, 160)$ has $10$, $[160, 165)$ has $14$, $[165, 170)$ has $9$, $[170, 175)$ has $3$ students. Estimate the mean height (to 1 decimal place).

::hint
**What you need:** $\bar{x}=\dfrac{m_1c_1+\dots+m_kc_k}{n}$.

**Steps:**
1. Write the representative value of each class.
2. Multiply by the frequencies, add, and divide by $40$.

::solution
The representative values are $152.5$; $157.5$; $162.5$; $167.5$; $172.5$. Hence $\bar{x}=\dfrac{4\cdot152.5+10\cdot157.5+14\cdot162.5+9\cdot167.5+3\cdot172.5}{40}=\dfrac{6485}{40}\approx162.1$.

**Answer.** About $162.1$ cm.
:::

:::exercise
For the height table of the previous exercise, estimate the median, $Q_1$ and $Q_3$ (to 2 decimal places).

::hint
**What you need:** $Q_r=a_p+\dfrac{\frac{rn}{4}-C_{p-1}}{m_p}\cdot h$, where $p$ is the first class with $C_p\ge\dfrac{rn}{4}$.

**Steps:**
1. Find the cumulative frequencies: $4, 14, 28, 37, 40$.
2. Find the classes containing $10$, $20$, $30$, then apply the formula.

::solution
The cumulative frequencies are $4, 14, 28, 37, 40$. Median: $\dfrac n2=20$, class $[160, 165)$ ($C_2=14$, $m_3=14$): $M_e=160+\dfrac{20-14}{14}\cdot5\approx162.14$. $Q_1$: $\dfrac n4=10$, class $[155, 160)$ ($C_1=4$, $m_2=10$): $Q_1=155+\dfrac{10-4}{10}\cdot5=158$. $Q_3$: $\dfrac{3n}{4}=30$, class $[165, 170)$ ($C_3=28$, $m_4=9$): $Q_3=165+\dfrac{30-28}{9}\cdot5\approx166.11$.

**Answer.** $M_e\approx162.14$; $Q_1=158$; $Q_3\approx166.11$ (cm).
:::

:::exercise
For the height table of the previous exercises, estimate the mode (to 2 decimal places).

::hint
**What you need:** $M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h$.

**Steps:**
1. Find the class with the greatest frequency and the two neighbouring frequencies.
2. Substitute into the formula.

::solution
The class with the greatest frequency is $[160, 165)$ with $m_j=14$; its neighbours have $10$ and $9$. Hence $M_o=160+\dfrac{14-10}{(14-10)+(14-9)}\cdot5=160+\dfrac49\cdot5\approx162.22$.

**Answer.** $M_o\approx162.22$ cm.
:::

:::exercise
Suppose the monthly water use (in $\text{m}^3$) of $50$ households is grouped: $[0, 5)$ has $4$ households, $[5, 10)$ has $16$, $[10, 15)$ has $18$, $[15, 20)$ has $9$, $[20, 25)$ has $3$. Estimate the mean, median and mode (to 2 decimal places).

::hint
**What you need:** the three formulas of the lesson; the cumulative frequencies are $4, 20, 38, 47, 50$.

**Steps:**
1. Find $\bar{x}$ using the representative values $2.5; 7.5; \dots$.
2. For the median, find the class containing $\dfrac n2=25$.
3. The mode lies in the class with $18$ households.

::solution
Mean: $\bar{x}=\dfrac{4\cdot2.5+16\cdot7.5+18\cdot12.5+9\cdot17.5+3\cdot22.5}{50}=\dfrac{580}{50}=11.6$. Median: $\dfrac n2=25$, class $[10, 15)$ ($C_2=20$, $m_3=18$): $M_e=10+\dfrac{25-20}{18}\cdot5\approx11.39$. Mode: the class $[10, 15)$ has frequency $18$ and its neighbours have $16$ and $9$: $M_o=10+\dfrac{18-16}{(18-16)+(18-9)}\cdot5\approx10.91$.

**Answer.** $\bar{x}=11.60$; $M_e\approx11.39$; $M_o\approx10.91$ ($\text{m}^3$).
:::

:::exercise
The waiting times (in minutes) for a bus of $25$ passengers are grouped: $[0, 5)$ has $7$, $[5, 10)$ has $10$, $[10, 15)$ has $6$, $[15, 20)$ has $2$ passengers. Estimate the median and $Q_3$ (to 2 decimal places). How should we interpret $Q_3$ in this situation?

::hint
**What you need:** the cumulative frequencies are $7, 17, 23, 25$; $\dfrac n2=12.5$ and $\dfrac{3n}{4}=18.75$.

**Steps:**
1. Find the first class with $C_p\ge12.5$, then the first with $C_p\ge18.75$.
2. Apply the formula.

::solution
Median: class $[5, 10)$ ($C_1=7$, $m_2=10$): $M_e=5+\dfrac{12.5-7}{10}\cdot5=7.75$. $Q_3$: class $[10, 15)$ ($C_2=17$, $m_3=6$): $Q_3=10+\dfrac{18.75-17}{6}\cdot5\approx11.46$. This means that about $\dfrac34$ of the passengers wait no more than $11.46$ minutes, or about a quarter of the passengers wait longer than that.

**Answer.** $M_e=7.75$ minutes; $Q_3\approx11.46$ minutes.
:::

:::exercise
Take grouped data: $[0, 10)$ has $5$, $[10, 20)$ has $x$, $[20, 30)$ has $15$, $[30, 40)$ has $5$. The estimated mean is $20$. Find $x$.

::hint
**What you need:** $n=25+x$; the representative values are $5, 15, 25, 35$.

**Steps:**
1. Write $\bar{x}$ in terms of $x$.
2. Solve the equation $\bar{x}=20$.

::solution
We have $\bar{x}=\dfrac{5\cdot5+15x+25\cdot15+35\cdot5}{25+x}=\dfrac{575+15x}{25+x}$. From $\dfrac{575+15x}{25+x}=20$ we get $575+15x=500+20x$, so $x=15$.

**Answer.** $x=15$.
:::

:::exercise
The daily takings (in millions of dong) of a shop over $30$ days are grouped: $[10, 15)$ has $4$ days, $[15, 20)$ has $9$ days, $[20, 25)$ has $10$ days, $[25, 30)$ has $5$ days, $[30, 35)$ has $2$ days. Decide whether each statement is true or false.

a) $Q_1$ lies in the class $[15, 20)$.

b) The median is $M_e=21$.

c) The estimated mean is $\bar{x}\approx21.17$.

d) The mode is $M_o=22.5$.

::hint
**What you need:** the cumulative frequencies are $4, 13, 23, 28, 30$; $\dfrac n4=7.5$, $\dfrac n2=15$.

**Steps:**
1. a) Find the first class with $C_p\ge7.5$.
2. b) Find $M_e$ in the class $[20, 25)$.
3. c), d) Find $\bar{x}$ and $M_o$.

::solution
a) **True**: $C_1=4<7.5\le C_2=13$, so $Q_1\in[15, 20)$.

b) **True**: $M_e=20+\dfrac{15-13}{10}\cdot5=21$.

c) **True**: $\bar{x}=\dfrac{12.5\cdot4+17.5\cdot9+22.5\cdot10+27.5\cdot5+32.5\cdot2}{30}=\dfrac{635}{30}\approx21.17$.

d) **False**: $M_o=20+\dfrac{10-9}{(10-9)+(10-5)}\cdot5\approx20.83$; $22.5$ is only the representative value of the class.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise
A grouped data set of size $40$ has cumulative frequency $12$ for the class $[10, 20)$, and the class $[20, 30)$ has frequency $16$. Estimate the median.

::hint
**What you need:** $\dfrac n2=20$ lies in the class $[20, 30)$ because $12<20\le12+16$.

**Steps:**
1. Identify $a_p$, $C_{p-1}$, $m_p$.
2. Substitute into the formula for $M_e$.

::solution
We have $a_p=20$, $C_{p-1}=12$, $m_p=16$ and $h=10$. Hence $M_e=20+\dfrac{20-12}{16}\cdot10=25$.

**Answer.** $M_e=25$.
:::

:::exercise Revision
Use the relative frequencies of the journey-time table of the previous lesson ($15\%$, $35\%$, $30\%$, $15\%$, $5\%$) and the representative values $5, 15, 25, 35, 45$ to find the mean again by the formula $\bar{x}=f_1c_1+\dots+f_kc_k$.

::hint
**What you need:** $f_i=\dfrac{m_i}{n}$, so $\dfrac{m_ic_i}{n}=f_ic_i$; convert the percentages to decimals.

**Steps:**
1. Write $0.15; 0.35; 0.30; 0.15; 0.05$.
2. Multiply by the representative values and add.

::solution
$\bar{x}=0.15\cdot5+0.35\cdot15+0.30\cdot25+0.15\cdot35+0.05\cdot45=0.75+5.25+7.5+5.25+2.25=21$.

**Answer.** $\bar{x}=21$ minutes, the same result as with the frequencies.
:::

:::exercise Challenge
Grouped data have $k$ classes of the same width $h$, all with the same frequency. Prove that the estimated mean is the midpoint of the interval $[a_1, a_{k+1}]$, where $a_1$ is the lower boundary of the first class and $a_{k+1}$ the upper boundary of the last class.

::hint
**What you need:** the representative values form an arithmetic progression with common difference $h$ (previous lesson); the sum of the first $k$ terms of an arithmetic progression is $S_k=\dfrac{k(c_1+c_k)}{2}$.

**Steps:**
1. With equal frequencies $m$, $n=km$ and $\bar{x}=\dfrac{c_1+\dots+c_k}{k}$.
2. Use $c_1=a_1+\dfrac h2$ and $c_k=a_{k+1}-\dfrac h2$.

::solution
Since each class has frequency $m$, $n=km$ and $\bar{x}=\dfrac{m(c_1+\dots+c_k)}{km}=\dfrac{c_1+\dots+c_k}{k}$. The $c_i$ form an arithmetic progression, so $c_1+\dots+c_k=\dfrac{k(c_1+c_k)}{2}$, and hence $\bar{x}=\dfrac{c_1+c_k}{2}=\dfrac{\left(a_1+\frac h2\right)+\left(a_{k+1}-\frac h2\right)}{2}=\dfrac{a_1+a_{k+1}}{2}$.

**Answer.** $\bar{x}=\dfrac{a_1+a_{k+1}}{2}$, the midpoint of $[a_1, a_{k+1}]$.
:::

## Mini test

:::quiz
::mc
Grouped data have the classes $[0, 10)$, $[10, 20)$, $[20, 30)$ with frequencies $2$, $3$, $5$. The estimated mean is
A. $15$.
B. $20$.
C. $180$.
D. $18$.
::key D
$\bar{x}=\dfrac{2\cdot5+3\cdot15+5\cdot25}{10}=\dfrac{180}{10}=18$. Option A is the plain mean of the three representative values (forgetting the frequencies), and option C forgets to divide by $n$.

::mc
A grouped data set of size $40$ has five classes with frequencies $15, 3, 3, 3, 16$. The class containing the median is class number
A. three.
B. one.
C. five.
D. two.
::key A
The cumulative frequencies are $15, 18, 21, 24, 40$ and $\dfrac n2=20$, so the first class with $C_p\ge20$ is the third class. Option C is the class with the greatest frequency.

::mc
The table $[0, 10)$: $4$; $[10, 20)$: $10$; $[20, 30)$: $6$ has an estimated mode of
A. $15$.
B. $16$.
C. $14$.
D. $20$.
::key B
$M_o=10+\dfrac{10-4}{(10-4)+(10-6)}\cdot10=16$. Option A is the representative value, option C swaps the roles of the two neighbouring classes, and option D is the upper boundary.

::mc
The table of size $40$: $[0, 10)$: $5$; $[10, 20)$: $10$; $[20, 30)$: $15$; $[30, 40)$: $10$. The lower quartile $Q_1$ is
A. $5$.
B. $10$.
C. $15$.
D. $20$.
::key C
$\dfrac n4=10$, class $[10, 20)$ ($C_1=5$, $m_2=10$): $Q_1=10+\dfrac{10-5}{10}\cdot10=15$. Option A is $C_1$, option B is $\dfrac n4$, and option D is the upper boundary of the class.

::tf
Grouped data of size $60$: $[0, 20)$ has $10$, $[20, 40)$ has $30$, $[40, 60)$ has $20$. Decide whether each statement is true or false.
a) The estimated mean is $30$.
b) The class containing $Q_3$ is $[40, 60)$.
c) The median is $M_e\approx33.3$.
d) $Q_1=20$.
::key F T T F
The cumulative frequencies are $10, 40, 60$. a) False: $\bar{x}=\dfrac{10\cdot10+30\cdot30+20\cdot50}{60}\approx33.3$; $30$ is the plain mean of the representative values. b) True: $\dfrac{3n}{4}=45>40$. c) True: $M_e=20+\dfrac{30-10}{30}\cdot20\approx33.3$. d) False: $Q_1=20+\dfrac{15-10}{30}\cdot20\approx23.3$.

::sa
Grouped data of size $10$ have the classes $[0, 5)$ and $[5, 10)$ with frequencies $3$ and $7$. What is the estimated mean?
::key 6
$\bar{x}=\dfrac{3\cdot2.5+7\cdot7.5}{10}=\dfrac{60}{10}=6$.

::sa
The table of size $40$: $[0, 10)$: $5$; $[10, 20)$: $10$; $[20, 30)$: $15$; $[30, 40)$: $10$. What is the upper quartile $Q_3$?
::key 30
$\dfrac{3n}{4}=30$; the cumulative frequencies are $5, 15, 30, 40$, so the class is $[20, 30)$ ($C_2=15$, $m_3=15$): $Q_3=20+\dfrac{30-15}{15}\cdot10=30$.
:::
