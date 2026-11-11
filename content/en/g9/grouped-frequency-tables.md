---
title: Grouped frequency and relative frequency tables and charts
description: Group data into classes, build grouped frequency and relative frequency tables, and draw and read histograms and frequency polygons.
minutes: 20
---

:::goals
- Understand why and when data are grouped; know the class $[a, b)$, the class width and the class midpoint.
- Build grouped frequency tables and grouped relative frequency tables.
- Draw and read histograms and frequency polygons for grouped data.
:::

Suppose the PE teacher measures the heights (in cm) of the 20 students in the athletics team:

$$154,\ 161,\ 164,\ 151,\ 161,\ 155,\ 153,\ 163,\ 159,\ 159,\ 154,\ 149,\ 155,\ 146,\ 158,\ 168,\ 169,\ 159,\ 152,\ 157.$$

A frequency table as in the previous lessons would have 15 different values, most appearing only once: a long table that shows nothing. Yet the teacher only needs to know "how many students are from 155 cm up to 160 cm" to choose shirt sizes. How can a table be short and still say what we need?

## Grouping data

### Explore: counting in 5 cm steps

We split the heights into intervals 5 cm wide and count:

| Height (cm) | $[145, 150)$ | $[150, 155)$ | $[155, 160)$ | $[160, 165)$ | $[165, 170)$ |
|---|---|---|---|---|---|
| Number of students | $2$ | $5$ | $7$ | $4$ | $2$ |

The notation $[155, 160)$ means the numbers $x$ with $155\leq x<160$: a student 155 cm tall belongs to this class, while one 160 cm tall belongs to the next. Now we see at once: the class $[155, 160)$ is the largest, with $7$ students.

:::definition Grouped data
- Grouping means sorting the data into **classes** $[a_1, a_2), [a_2, a_3), \ldots, [a_k, a_{k+1})$, so that each data value belongs to exactly one class. For the class $[a, b)$: $a$ is the **lower boundary**, $b$ is the **upper boundary**, $b-a$ is the **class width** and $\dfrac{a+b}{2}$ is the **midpoint** of the class (in Vietnamese textbooks, its representative value).
- The **frequency** of a class is the number of data values in it. The **relative frequency** of the $i$th class is $f_i=\dfrac{m_i}{n}\cdot100\%$.
- A **grouped frequency table** (**grouped relative frequency table**) lists the classes and their frequencies (relative frequencies).
:::

**Going deeper.** Grouping is "looking from a distance": we drop some detail (we no longer know who is $151$ or $153$ cm tall) to see the overall picture. Classes usually have equal widths and follow on from each other; the half-open form $[a, b)$ makes sure a value on a boundary is counted only once. Too few classes lose information, too many are as messy as the original table; 5 to 8 classes is usual.

:::example Grouped relative frequency table
Suppose the heights of the 40 students in class 9A have this grouped frequency table:

| Height (cm) | $[145, 150)$ | $[150, 155)$ | $[155, 160)$ | $[160, 165)$ | $[165, 170)$ | $[170, 175)$ |
|---|---|---|---|---|---|---|
| Frequency | $3$ | $7$ | $12$ | $10$ | $6$ | $2$ |

Build the grouped relative frequency table and find the percentage of students who are 160 cm tall or more.

**Solution.** The sample size is $n=40$. Dividing each frequency by $40$, we get

$$\frac{3}{40}=7.5\%,\ \ \frac{7}{40}=17.5\%,\ \ \frac{12}{40}=30\%,\ \ \frac{10}{40}=25\%,\ \ \frac{6}{40}=15\%,\ \ \frac{2}{40}=5\%.$$

Students 160 cm tall or more are in the last three classes, which make up $25\%+15\%+5\%=45\%$.

So $45\%$ of the students are 160 cm tall or more.
:::

## Charts for grouped data

### Histograms

In a **histogram** (grouped frequency bar chart), each bar stands on a whole class $[a, b)$ on the horizontal axis, so **the bars touch each other**: the data run continuously, with no "gap" between $149.9$ cm and $150$ cm.

:::graph Heights of the 40 students in class 9A
alt: Histogram with touching bars: classes from 145 to 175 cm, each 5 cm wide, with bar heights 3, 7, 12, 10, 6, 2
x: 142..177
y: 0..14
fill: 3 ; 0 ; 145..150
fill: 7 ; 0 ; 150..155
fill: 12 ; 0 ; 155..160
fill: 10 ; 0 ; 160..165
fill: 6 ; 0 ; 165..170
fill: 2 ; 0 ; 170..175
segment: (150, 0) (150, 7) ; dashed
segment: (155, 0) (155, 12) ; dashed
segment: (160, 0) (160, 12) ; dashed
segment: (165, 0) (165, 10) ; dashed
segment: (170, 0) (170, 6) ; dashed
:::

A relative frequency histogram is drawn in exactly the same way, with bar heights equal to the relative frequencies.

### Frequency polygons

To draw a **relative frequency polygon** for grouped data, for each class we mark the point whose $x$-coordinate is the class midpoint and whose $y$-coordinate is the relative frequency, then join consecutive points. For class 9A the midpoints are $147.5$, $152.5$, …, $172.5$.

:::graph Relative frequency (%) against class midpoints
alt: A broken line joining the points (147.5, 7.5), (152.5, 17.5), (157.5, 30), (162.5, 25), (167.5, 15), (172.5, 5)
x: 142..177
y: 0..35
segment: (147.5, 7.5) (152.5, 17.5)
segment: (152.5, 17.5) (157.5, 30)
segment: (157.5, 30) (162.5, 25)
segment: (162.5, 25) (167.5, 15)
segment: (167.5, 15) (172.5, 5)
:::

The broken line shows that heights cluster around the class $[155, 160)$ and thin out on both sides.

:::example Reading a grouped table
Using the grouped frequency table of class 9A above, find:

a) the width of each class and the midpoint of the class with the largest frequency;

b) the number of students shorter than 155 cm.

**Solution.** a) Each class has width $150-145=5$ (cm). The class with the largest frequency is $[155, 160)$, with midpoint $\dfrac{155+160}{2}=157.5$.

b) Students shorter than 155 cm are in the first two classes. So $3+7=10$ students are shorter than 155 cm.
:::

:::example The bus company's promise
Suppose a bus company surveys the waiting times (in minutes) of 60 passengers:

| Waiting time (minutes) | $[0, 5)$ | $[5, 10)$ | $[10, 15)$ | $[15, 20)$ | $[20, 25)$ |
|---|---|---|---|---|---|
| Number of passengers | $21$ | $18$ | $12$ | $6$ | $3$ |

The company says: "Most passengers wait less than 10 minutes." Is this true? Do we know how many passengers wait less than 7 minutes?

**Solution.**

*Understand.* "Most" means more than half, that is, more than $50\%$ of the $60$ passengers. "Less than 10 minutes" corresponds to the two classes $[0, 5)$ and $[5, 10)$.

*Plan.* Work out the relative frequency of the first two classes.

*Solve.* The number of passengers waiting less than 10 minutes is $21+18=39$, which is $\dfrac{39}{60}\cdot100\%=65\%>50\%$. The 7-minute mark lies inside the class $[5, 10)$; the table only says that the whole class has $18$ people.

So the company's claim is true ($65\%$), but the number of passengers waiting less than 7 minutes cannot be found from the table.

*Look back.* This is the price of grouping: shorter, but the detail inside each class is lost. To answer a question about the 7-minute mark, we would need the original data or different classes (for example, 1 minute wide).
:::

:::warning Common mistakes
- **Overlapping classes.** Wrong: $[150, 155]$, $[155, 160]$ (the value $155$ is counted twice). Right: $[150, 155)$, $[155, 160)$.
- **Leaving gaps between bars.** For grouped data, the bars must touch.
:::

**Connections.** Grouping continues [frequency tables](lesson:frequency-tables-charts) and [relative frequency](lesson:relative-frequency-tables): the same idea of counting, with "value" replaced by "class". In years 11 and 12, we use grouped tables and class midpoints to estimate the mean, the median and the standard deviation.

## Key terms

:::terms
- grouping data | ghép nhóm
- class (group) | nhóm số liệu
- class width | độ dài nhóm
- midpoint of a class | giá trị đại diện của nhóm
- grouped frequency table | bảng tần số ghép nhóm
- grouped relative frequency | tần số tương đối ghép nhóm
- histogram | biểu đồ tần số ghép nhóm dạng cột
- frequency polygon | biểu đồ dạng đoạn thẳng
:::

## Summary

- Class $[a, b)$: $a\leq x<b$; width $b-a$; midpoint $\dfrac{a+b}{2}$.
- Relative frequency of a class: $f_i=\dfrac{m_i}{n}\cdot100\%$.
- Histogram: the bars touch. Frequency polygon: join the points (midpoint, $f_i$).
- Grouping loses the information inside each class.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Suppose the daily private study times (in minutes) of 20 students are:

$$54,\ 76,\ 73,\ 68,\ 98,\ 43,\ 73,\ 32,\ 44,\ 51,\ 38,\ 72,\ 55,\ 44,\ 97,\ 33,\ 46,\ 41,\ 69,\ 91.$$

Build the grouped frequency and relative frequency table with classes $[20, 40)$, $[40, 60)$, $[60, 80)$, $[80, 100)$.

::hint
**What you need:** $x$ belongs to the class $[a, b)$ when $a\leq x<b$; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Steps:**
1. Count the data values in each class and check that the total is $20$.
2. Divide each frequency by $20$.

::solution
Counting by class, we get the frequencies $3$, $8$, $6$, $3$ (total $20$).

So the corresponding relative frequencies are $\dfrac{3}{20}=15\%$, $\dfrac{8}{20}=40\%$, $\dfrac{6}{20}=30\%$, $\dfrac{3}{20}=15\%$.

**Answer.** Frequencies $3, 8, 6, 3$; relative frequencies $15\%, 40\%, 30\%, 15\%$.
:::

:::exercise
Consider the classes $[0, 5)$, $[5, 10)$, $[10, 15)$, $[15, 20)$.

a) Which class does the value $10$ belong to? Find the class midpoints.

b) Lan uses the classes $[0, 5]$, $[5, 10]$, $[10, 15]$, $[15, 20]$. What is wrong with this?

::hint
**What you need:** $[a, b)$ contains $a\leq x<b$; midpoint $\dfrac{a+b}{2}$.

**Steps:**
1. Check which class's inequality $10$ satisfies.
2. Look at the value $5$ in Lan's classes.

::solution
a) The class $[a, b)$ contains the values $x$ with $a\le x<b$. Since $10\le10<15$, the value $10$ belongs to the class $[10, 15)$ (it does not belong to $[5, 10)$, which does not contain its right end point).

The midpoint of the class $[a, b)$ is $\dfrac{a+b}{2}$. Hence the class midpoints are
$$\frac{0+5}{2}=2.5;\quad \frac{5+10}{2}=7.5;\quad \frac{10+15}{2}=12.5;\quad \frac{15+20}{2}=17.5.$$

So the value $10$ belongs to the class $[10, 15)$; the class midpoints are $2.5$; $7.5$; $12.5$; $17.5$.

b) With Lan's classes, the value $5$ belongs to both $[0, 5]$ and $[5, 10]$; in the same way, $10$ and $15$ each belong to two classes. When counting, these values are counted twice.

So Lan's classes are wrong because they overlap; the classes must not overlap, for example by using the form $[a, b)$.

**Answer.** a) $[10, 15)$; $2.5$; $7.5$; $12.5$; $17.5$. b) The classes overlap.
:::

:::exercise
Suppose the daily household waste (in kg) of 50 households has the grouped frequency table: $[0, 2)$: $8$ households, $[2, 4)$: $19$, $[4, 6)$: $15$, $[6, 8)$: $8$.

a) Build the grouped relative frequency table.

b) What percentage of households throw away 4 kg of waste or more per day?

::hint
**What you need:** $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Steps:**
1. Divide each frequency by $50$.
2. Add the relative frequencies of the last two classes.

::solution
a) The relative frequency of each class is its frequency divided by the number of households ($n=50$):
$$\frac{8}{50}=16\%;\quad \frac{19}{50}=38\%;\quad \frac{15}{50}=30\%;\quad \frac{8}{50}=16\%.$$

The grouped relative frequency table is:

| Waste (kg) | $[0, 2)$ | $[2, 4)$ | $[4, 6)$ | $[6, 8)$ |
|---|---|---|---|---|
| Relative frequency | $16\%$ | $38\%$ | $30\%$ | $16\%$ |

Check: $16\%+38\%+30\%+16\%=100\%$.

b) The households that throw away 4 kg or more per day are in the two classes $[4, 6)$ and $[6, 8)$. Their percentage is
$$30\%+16\%=46\%.$$

So $46\%$ of the households throw away 4 kg of waste or more per day.

**Answer.** a) $16\%, 38\%, 30\%, 16\%$; b) $46\%$.
:::

:::exercise
Suppose that on a road with a 50 km/h limit, a camera records the speeds (in km/h) of 80 motorbikes: $[30, 40)$: $10$ motorbikes, $[40, 50)$: $38$, $[50, 60)$: $24$, $[60, 70)$: $8$.

a) What percentage of the motorbikes travel at 50 km/h or more?

b) Can we find the number of motorbikes travelling faster than 55 km/h? Why?

::hint
**What you need:** a grouped table does not show the data inside a class.

**Steps:**
1. Add the frequencies of the last two classes and divide by $80$.
2. Is $55$ a class boundary?

::solution
a) The motorbikes travelling at 50 km/h or more are in the two classes $[50, 60)$ and $[60, 70)$. There are $24+8=32$ of them.

Their percentage is
$$\frac{32}{80}\cdot100\%=40\%.$$

So $40\%$ of the motorbikes travel at 50 km/h or more.

b) The value $55$ lies inside the class $[50, 60)$. The grouped frequency table only tells us that $24$ motorbikes have speeds from 50 km/h up to (but not including) 60 km/h; it does not give the individual speeds of these $24$ motorbikes.

So we cannot find exactly how many motorbikes travel faster than 55 km/h.

**Answer.** a) $40\%$; b) no.
:::

:::exercise
**(1.5 marks)** Suppose the 100 m times (in seconds) of 40 students have the grouped frequency table: $[13, 14)$: $4$, $[14, 15)$: $9$, $[15, 16)$: $x$, $[16, 17)$: $10$, $[17, 18)$: $5$.

a) Find $x$.

b) Build the grouped relative frequency table.

c) What percentage of the students run 100 m in under 15 seconds?

::hint
**What you need:** the frequencies add up to $n$; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Steps:**
1. $x=40-(4+9+10+5)$.
2. Divide each frequency by $40$.
3. Add the relative frequencies of the first two classes.

::solution
a) The frequencies add up to the number of students, so
$$4+9+x+10+5=40.$$

It follows that $x+28=40$, so $x=12$.

So $x=12$.

b) The relative frequency of each class is its frequency divided by $40$:
$$\frac{4}{40}=10\%;\quad \frac{9}{40}=22.5\%;\quad \frac{12}{40}=30\%;\quad \frac{10}{40}=25\%;\quad \frac{5}{40}=12.5\%.$$

The grouped relative frequency table is:

| Time (s) | $[13, 14)$ | $[14, 15)$ | $[15, 16)$ | $[16, 17)$ | $[17, 18)$ |
|---|---|---|---|---|---|
| Relative frequency | $10\%$ | $22.5\%$ | $30\%$ | $25\%$ | $12.5\%$ |

c) The students who run in under 15 seconds are in the two classes $[13, 14)$ and $[14, 15)$. Their percentage is
$$10\%+22.5\%=32.5\%.$$

So $32.5\%$ of the students run 100 m in under 15 seconds.

**Answer.** a) $12$; b) $10\%$, $22.5\%$, $30\%$, $25\%$, $12.5\%$; c) $32.5\%$.
:::

:::exercise
Suppose class 9B has 25 students with heights (cm): $[145, 150)$: $1$, $[150, 155)$: $5$, $[155, 160)$: $9$, $[160, 165)$: $6$, $[165, 170)$: $3$, $[170, 175)$: $1$. Compare the percentage of students 160 cm tall or more in class 9B with that of class 9A in the example ($45\%$).

::hint
**What you need:** classes of different sizes are compared using relative frequencies.

**Steps:**
1. Add the frequencies of the last three classes of 9B.
2. Divide by $25$ and compare with $45\%$.

::solution
Class 9B has $6+3+1=10$ students 160 cm tall or more, which is $\dfrac{10}{25}\cdot100\%=40\%$.

So this percentage is lower in class 9B ($40\%$) than in class 9A ($45\%$).

**Answer.** $40\%<45\%$.
:::

:::exercise
Suppose the grouped frequency table of a data set of size $50$ has five classes with frequencies $6$, $x$, $15$, $y$, $4$. The relative frequency of the second class is $10\%$ more than that of the fourth class. Find $x$ and $y$. (Revise [solving simultaneous equations](lesson:solving-simultaneous-equations).)

::hint
**What you need:** the frequencies add up to the sample size; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Steps:**
1. Form the equation $x+y=25$.
2. From $\dfrac{x-y}{50}=10\%$, deduce $x-y=5$.

::solution
From the question, $6+x+15+y+4=50$, so $x+y=25$; and $\dfrac{x}{50}-\dfrac{y}{50}=0.1$, so $x-y=5$.

Adding the two equations, we get $2x=30$, so $x=15$ and $y=10$ (these satisfy the conditions).

So $x=15$, $y=10$.

**Answer.** $x=15$, $y=10$.
:::

:::exercise Challenge
The relative frequency polygon of a grouped data set of size $60$ passes through the points $(15, 10)$, $(25, 40)$, $(35, 35)$, $(45, 15)$ ($y$-coordinates in %). The classes have equal widths. Find the classes, the frequency of each class and the number of data values in $[20, 40)$.

::hint
**What you need:** consecutive midpoints are exactly one class width apart; $m_i=f_i\cdot n$.

**Steps:**
1. The class width is $25-15$; deduce the boundaries.
2. Multiply each relative frequency by $60$.

::solution
The class width is $25-15=10$, and the class with midpoint $15$ is $[10, 20)$. Hence the classes are $[10, 20)$, $[20, 30)$, $[30, 40)$, $[40, 50)$, with frequencies $60\cdot10\%=6$, $60\cdot40\%=24$, $60\cdot35\%=21$, $60\cdot15\%=9$.

So $24+21=45$ data values lie in $[20, 40)$ (the two middle classes).

**Answer.** Frequencies $6, 24, 21, 9$; $45$ data values.
:::

## Mini test

:::quiz
::mc
With the classes $[145, 150)$, $[150, 155)$, $[155, 160)$, the value $155$ belongs to
A. $[150, 155)$.
B. both $[150, 155)$ and $[155, 160)$.
C. no class.
D. $[155, 160)$.
::key D
We have $155\leq155<160$. The class $[150, 155)$ does not contain its upper boundary $155$ (A is wrong), so $155$ belongs to exactly one class (B and C are wrong).

::mc
The midpoint of the class $[40, 50)$ is
A. $10$.
B. $40$.
C. $45$.
D. $50$.
::key C
$\dfrac{40+50}{2}=45$. A is the class width, B is the lower boundary, D is the upper boundary.

::mc
A data set of size $30$ has four classes with frequencies $5$, $12$, $8$, $5$. The relative frequency of the second class is
A. $40\%$.
B. $12\%$.
C. $60\%$.
D. $2.5\%$.
::key A
$\dfrac{12}{30}\cdot100\%=40\%$. B uses the frequency as a percentage, C is the remaining part, D works out $30\div12$.

::mc
In a histogram, the bars
A. are equally spaced, each standing on a class midpoint.
B. touch each other, each standing on a whole class.
C. have widths equal to the frequencies.
D. have heights equal to the class midpoints.
::key B
The data run continuously across the classes, so the bars touch. A describes a bar chart of ungrouped data; the width of a bar is the class width (C is wrong) and its height is the frequency (D is wrong).

::tf
Suppose the waiting times (in minutes) of 50 customers are: $[0, 5)$: $12$, $[5, 10)$: $20$, $[10, 15)$: $10$, $[15, 20)$: $8$. Decide whether each statement is true or false.
a) Each class has a width of $5$ minutes.
b) The relative frequency of the class $[5, 10)$ is $40\%$.
c) $18$ customers wait 10 minutes or more.
d) From the table, we know that exactly $6$ customers wait less than 2 minutes.
::key T T T F
a) True. b) True: $\dfrac{20}{50}=40\%$. c) True: $10+8=18$. d) False: the table does not show the data inside the class $[0, 5)$.

::sa
For the table in the previous question, what percentage of the customers wait 10 minutes or more?
::key 36
$\dfrac{18}{50}=36\%$.

::sa
Find the midpoint of the class $[12.5, 17.5)$.
::key 15
$\dfrac{12.5+17.5}{2}=15$.
:::
