---
title: Frequency tables and frequency charts
description: Build a frequency table from a data set, draw and read frequency bar charts and line graphs, and use them to comment and make decisions.
minutes: 20
---

:::goals
- Build the frequency table of a data set.
- Draw and read frequency bar charts and frequency line graphs.
- Use frequency tables and charts to comment and make decisions in real situations.
:::

The American Academy of Sleep Medicine recommends (as quoted by the US CDC) that teenagers aged 13 to 18 sleep 8 to 10 hours per 24 hours. Suppose the form tutor of class 9A asks 30 students "How many hours did you sleep last night?" and writes down the answers (to the nearest hour):

$$7,\ 8,\ 8,\ 8,\ 8,\ 7,\ 8,\ 6,\ 7,\ 9,\ 6,\ 7,\ 6,\ 9,\ 7,\ 7,\ 5,\ 8,\ 5,\ 9,\ 7,\ 7,\ 5,\ 8,\ 6,\ 6,\ 6,\ 7,\ 8,\ 7.$$

How many students in the class sleep enough? Thirty numbers in no order hide the answer; this lesson shows how to arrange them so that the answer appears.

## Frequency tables

### Explore: counting each value

The list contains only five different values: $5$, $6$, $7$, $8$, $9$. We count how many times each value appears:

| Hours of sleep | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Number of students | $3$ | $6$ | $10$ | $8$ | $3$ |

Check: $3+6+10+8+3=30$. Now the answer appears: only $8+3=11$ students slept 8 hours or more, less than half of the class.

:::definition Frequency and frequency table
- The number of times a value appears in a data set is the **frequency** of that value.
- A **frequency table** has one row listing the different values $x_1, x_2, \ldots, x_k$ of the data set and one row listing their frequencies $m_1, m_2, \ldots, m_k$.
- The sum of the frequencies is the number of data values, called the **sample size**: $n=m_1+m_2+\ldots+m_k$.
:::

**Going deeper.** A frequency table "compresses" thirty numbers into five (value; frequency) pairs, losing only the order and who gave each answer ("who slept 5 hours"). The value $8$ having frequency $8$ is only a coincidence.

:::example Goals in a football tournament
Suppose the numbers of goals in the 20 matches of a school football tournament are:

$$0,\ 2,\ 1,\ 3,\ 3,\ 0,\ 4,\ 1,\ 2,\ 3,\ 5,\ 1,\ 2,\ 0,\ 3,\ 2,\ 1,\ 1,\ 2,\ 1.$$

a) Build the frequency table of the data set.

b) How many goals were scored in the whole tournament?

**Solution.** a) Counting how many times each value $0, 1, 2, 3, 4, 5$ appears, we get the frequency table:

| Number of goals ($x$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Number of matches ($m$) | $3$ | $6$ | $5$ | $4$ | $1$ | $1$ |

Check: $3+6+5+4+1+1=20=n$.

b) The $m$ matches with $x$ goals each contribute $x\cdot m$ goals. Hence the total number of goals is

$$0\cdot3+1\cdot6+2\cdot5+3\cdot4+4\cdot1+5\cdot1=0+6+10+12+4+5=37.$$

So $37$ goals were scored in the whole tournament.
:::

## Frequency bar charts

A frequency table gives exact numbers; a chart shows the *shape* of the data. Suppose the school asks 200 students in year 9 about their sleep and gets this frequency table:

| Hours of sleep | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Number of students | $24$ | $46$ | $68$ | $44$ | $18$ |

To draw a **frequency bar chart**: put the values $x$ on the horizontal axis and the frequencies $m$ on the vertical axis; at each value $x_i$ draw a bar of height $m_i$, with all bars the same width and equally spaced; give the chart a title.

:::graph Hours of sleep of 200 year 9 students
alt: Bar chart: the horizontal axis shows 5, 6, 7, 8, 9 hours of sleep; the bars have heights 24, 46, 68, 44, 18
x: 4..10
y: 0..80
fill: 24 ; 0 ; 4.7..5.3
fill: 46 ; 0 ; 5.7..6.3
fill: 68 ; 0 ; 6.7..7.3
fill: 44 ; 0 ; 7.7..8.3
fill: 18 ; 0 ; 8.7..9.3
:::

The horizontal axis ($x$) shows hours of sleep and the vertical axis ($y$) the number of students. At a glance, the bar at $7$ is the tallest and the bars get shorter on both sides.

:::example Reading a bar chart
Using the chart above, compare the number of students who sleep 8 hours or more with the number who sleep less than 7 hours.

**Solution.** The number of students sleeping 8 hours or more is $44+18=62$. The number sleeping less than 7 hours is $24+46=70$.

So $8$ more students sleep less than 7 hours than sleep enough.
:::

## Frequency line graphs

When the values are numbers in order, we can also draw a **frequency line graph**: mark the points $(x_i, m_i)$ and join consecutive points with line segments.

:::graph Line graph of the same data set
alt: A broken line joining the points (5, 24), (6, 46), (7, 68), (8, 44), (9, 18)
x: 4..10
y: 0..80
segment: (5, 24) (6, 46)
segment: (6, 46) (7, 68)
segment: (7, 68) (8, 44)
segment: (8, 44) (9, 18)
:::

The broken line shows the trend clearly: the frequency rises up to 7 hours and then falls. But for data that are not numbers, such as a favourite sport, a segment joining "football" to "badminton" means nothing: then we use a bar chart.

:::example How should a shoe shop restock?
Suppose a trainer shop records the sizes of the 100 pairs it sold last month:

| Shoe size | $37$ | $38$ | $39$ | $40$ | $41$ | $42$ |
|---|---|---|---|---|---|---|
| Pairs sold | $12$ | $20$ | $31$ | $25$ | $9$ | $3$ |

The owner plans to order 120 pairs for next month, 20 pairs of each size. If demand stays the same, comment on this plan.

**Solution.**

*Understand.* The frequency table gives the demand for each size; $20$ pairs of each size will be ordered.

*Plan.* For each size, compare $20$ with the frequency $m$: $m>20$ means a shortage, $m<20$ means a surplus.

*Solve.* Size 39 is $31-20=11$ pairs short and size 40 is $25-20=5$ pairs short, so $16$ sales are lost. Sizes 37, 41 and 42 have $(20-12)+(20-9)+(20-3)=36$ pairs left over.

So the equal split is not sensible: the shop should order more of sizes 39 and 40 and fewer of sizes 41 and 42, following the shape of the frequency table.

*Look back.* Would knowing only "the average size is about 39" be enough? No: that number does not say how many pairs of size 37 or 42 are needed.
:::

:::warning Common mistakes
- **The frequencies do not add up to the sample size** (missed or double-counted values). Always add the frequency row and compare it with $n$.
- **Mixing up values and frequencies.** Wrong: "the largest value is $68$". Right: $68$ is the largest frequency, for the value $7$.
- **Bars of different widths.** The eye compares areas, so a wider bar looks like "more".
:::

**Connections.** Frequency tables build on the charts you met in years 6 and 7 and are the foundation of this chapter: next we divide frequencies by the sample size to get [relative frequencies](lesson:relative-frequency-tables), then [group the data](lesson:grouped-frequency-tables) when there are too many values; in year 10, we find the mean and the median from a frequency table.

## Key terms

:::terms
- data set | mẫu dữ liệu
- value | giá trị
- frequency | tần số
- frequency table | bảng tần số
- sample size | cỡ mẫu
- frequency bar chart | biểu đồ tần số dạng cột
- frequency line graph | biểu đồ tần số dạng đoạn thẳng
:::

## Summary

- Frequency: the number of times a value appears; $m_1+m_2+\ldots+m_k=n$ (the sample size).
- Bar chart: bar height equals the frequency; all bars have the same width.
- Line graph: join the points $(x_i, m_i)$; use it only when the values are numbers.
- Total of the data: $x_1m_1+x_2m_2+\ldots+x_km_k$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Suppose the numbers of children in the families of 20 students are:

$$2,\ 2,\ 4,\ 3,\ 3,\ 2,\ 1,\ 1,\ 2,\ 1,\ 2,\ 3,\ 2,\ 1,\ 2,\ 3,\ 2,\ 1,\ 2,\ 2.$$

a) Build the frequency table of the data set.

b) How many families have 3 or more children?

::hint
**What you need:** the frequency is the number of times a value appears; the frequencies add up to the sample size.

**Steps:**
1. Count how many times $1, 2, 3, 4$ appear.
2. Add the frequencies of $3$ and $4$.

::solution
a) The values $1, 2, 3, 4$ have frequencies $5, 10, 4, 1$ (total $20$).

b) So $4+1=5$ families have 3 or more children.

**Answer.** a) $5, 10, 4, 1$; b) $5$.
:::

:::exercise
Suppose 36 students in class 9B choose their favourite sport: $13$ choose football, $9$ badminton, $8$ swimming and the rest basketball.

a) Find the number of students who chose basketball.

b) Should a bar chart or a line graph be used for these data? Explain.

::hint
**What you need:** the frequencies add up to the sample size; a line graph is only for values that are numbers.

**Steps:**
1. Subtract the three known frequencies from $36$.
2. Are the names of sports numbers?

::solution
a) The number of students who chose basketball is $36-(13+9+8)=6$.

b) The values are names of sports, not numbers, so a segment joining two sports means nothing. So we use a bar chart.

**Answer.** a) $6$; b) a bar chart.
:::

:::exercise
The frequency line graph of the numbers of spelling mistakes made by a group of students passes through the points $(0, 4)$, $(1, 9)$, $(2, 7)$, $(3, 3)$, $(4, 1)$. Find the number of students and the total number of mistakes in the group.

::hint
**What you need:** the point $(x_i, m_i)$ gives the value $x_i$ and its frequency $m_i$.

**Steps:**
1. Add the $y$-coordinates to get the sample size.
2. Add the products $x\cdot m$.

::solution
We have $n=4+9+7+3+1=24$. The total number of mistakes is

$$0\cdot4+1\cdot9+2\cdot7+3\cdot3+4\cdot1=36.$$

So the group has $24$ students, who made $36$ mistakes.

**Answer.** $24$ students; $36$ mistakes.
:::

:::exercise
Suppose that of the 60 motorbikes passing the school gate at 6:45 a.m., $21$ carry 1 person, $34$ carry 2 people and $5$ carry 3 people.

a) Find the total number of people on these 60 motorbikes.

b) If all these people travelled by 40-seat bus instead, at least how many bus journeys would be needed? Comment.

::hint
**What you need:** the total of the data is $x_1m_1+\ldots+x_km_k$.

**Steps:**
1. Work out $1\cdot21+2\cdot34+3\cdot5$.
2. Divide by $40$ and round up.

::solution
a) The total number of people is $1\cdot21+2\cdot34+3\cdot5=21+68+15=104$.

b) We have $104\div40=2.6$, so at least $3$ journeys are needed. So $3$ bus journeys could replace $60$ motorbikes.

**Answer.** a) $104$; b) $3$.
:::

:::exercise
**(1.5 marks)** Suppose the times (in minutes) taken by 20 students to travel from home to school are:

$$10,\ 15,\ 20,\ 10,\ 15,\ 30,\ 25,\ 5,\ 15,\ 10,\ 5,\ 10,\ 15,\ 20,\ 10,\ 15,\ 10,\ 20,\ 5,\ 15.$$

a) Build the frequency table of the data set.

b) How many students take more than 15 minutes?

c) Find the total travel time of the 20 students.

::hint
**What you need:** the frequency table; the total of the data is $x_1m_1+\ldots+x_km_k$.

**Steps:**
1. Count how many times $5, 10, 15, 20, 25, 30$ appear.
2. "More than 15 minutes" does not include $15$.

::solution
a) The values $5, 10, 15, 20, 25, 30$ (minutes) have frequencies $3, 6, 6, 3, 1, 1$.

b) The number of students taking more than 15 minutes is $3+1+1=5$.

c) The total time is $5\cdot3+10\cdot6+15\cdot6+20\cdot3+25+30=280$ (minutes).

**Answer.** a) $3, 6, 6, 3, 1, 1$; b) $5$; c) $280$ minutes.
:::

:::exercise
Suppose class 9C (40 students) has $14$ students who sleep 8 hours or more, and class 9D (35 students) also has $14$ such students. Ha says: "The two classes sleep equally well." Do you agree? Explain.

::hint
**What you need:** when two data sets have different sizes, compare the counts *relative to* the sample sizes.

**Steps:**
1. Work out the ratio of students who sleep enough to the class size for each class.
2. Compare the two ratios.

::solution
We have $\dfrac{14}{40}=0.35$ and $\dfrac{14}{35}=0.4$.

So we do not agree: the proportion of students who sleep enough is higher in class 9D.

**Answer.** No ($0.35<0.4$).
:::

:::exercise
Suppose the test marks of 40 students are given in the table below, where $x$ and $y$ are whole numbers. The total of the marks of all 40 students is $312$. Find $x$ and $y$. (Revise [solving simultaneous equations](lesson:solving-simultaneous-equations).)

| Mark | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|
| Number of students | $5$ | $x$ | $12$ | $y$ | $3$ |

::hint
**What you need:** the frequencies add up to the sample size; the total of the marks is $x_1m_1+\ldots+x_km_k$.

**Steps:**
1. Form two equations from the sample size and the total.
2. Solve them by substitution.

::solution
From the question, $5+x+12+y+3=40$ and $30+7x+96+9y+30=312$, so

$$\begin{cases} x+y=20\\ 7x+9y=156.\end{cases}$$

Substituting $y=20-x$ into the second equation, we get $7x+180-9x=156$, so $x=12$ and $y=8$ (these satisfy the conditions).

So $x=12$, $y=8$.

**Answer.** $x=12$, $y=8$.
:::

:::exercise Challenge
A data set consists of 15 numbers, each equal to $1$, $2$ or $3$. The total of the 15 numbers is $34$, and $3$ appears twice as often as $1$. Build the frequency table of the data set.

::hint
**What you need:** let the frequencies of $1, 2, 3$ be $a, b, c$; use the sample size and the total.

**Steps:**
1. Write $a+b+c=15$, $a+2b+3c=34$, $c=2a$.
2. Substitute $c=2a$ to get two equations in two unknowns.

::solution
Let $a$, $b$, $c$ be the frequencies of $1$, $2$, $3$ ($a, b, c\in\mathbb{N}$). We have $a+b+c=15$, $a+2b+3c=34$, $c=2a$.

Substituting $c=2a$, we get $3a+b=15$ and $7a+2b=34$. Substituting $b=15-3a$ into the second: $7a+30-6a=34$, so $a=4$, and hence $b=3$, $c=8$.

So the values $1, 2, 3$ have frequencies $4, 3, 8$.

**Answer.** $4$, $3$, $8$.
:::

## Mini test

:::quiz
::mc
Consider the data set $3, 5, 4, 5, 2, 5, 4, 3, 5, 1$. The frequency of the value $5$ is
A. $5$.
B. $10$.
C. $4$.
D. $2$.
::key C
The value $5$ appears $4$ times. A confuses the value with its frequency, B is the sample size, D is the frequency of the value $3$ (or $4$).

::mc
A data set has the frequency table: values $1, 2, 3, 4$ with frequencies $6, 9, 4, 1$. The sample size is
A. $20$.
B. $10$.
C. $4$.
D. $9$.
::key A
$n=6+9+4+1=20$. B adds the values, C is the number of different values, D is the largest frequency.

::mc
In a frequency bar chart, the height of each bar represents
A. a data value.
B. the sample size.
C. the number of different values.
D. the frequency of the value of that bar.
::key D
The height of a bar equals the frequency of its value. The value is written under the bar (A), the sample size is the total height of all the bars (B), and the number of different values is the number of bars (C).

::mc
The numbers of goals in some matches have the frequency table: values $0, 1, 2, 3$ with frequencies $4, 7, 6, 3$. The number of matches with at least 2 goals is
A. $6$.
B. $9$.
C. $16$.
D. $3$.
::key B
$6+3=9$. A counts only the matches with exactly 2 goals, D only those with 3 goals, C counts the matches with at least 1 goal.

::tf
The daily hours of private study of a group of students take the values $1, 2, 3, 4$ with frequencies $5, 8, 4, 3$. Decide whether each statement is true or false.
a) The sample size is $20$.
b) The value with the largest frequency is $8$.
c) $7$ students study for 3 hours or more.
d) The total study time of the group is $45$ hours.
::key T F T T
a) True. b) False: $8$ is the frequency; the value is $2$. c) True: $4+3=7$. d) True: $5+16+12+12=45$.

::sa
A data set of size $20$ has the frequency table: values $5, 6, 7, 8$ with frequencies $3, x, 7, 4$. Find $x$.
::key 6
$x=20-(3+7+4)=6$.

::sa
The numbers of goals in some matches have the frequency table: values $0, 1, 2, 3$ with frequencies $4, 7, 6, 3$. Find the total number of goals in all the matches.
::key 28
$0\cdot4+1\cdot7+2\cdot6+3\cdot3=0+7+12+9=28$.
:::
