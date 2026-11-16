---
title: Grouped data
description: Learn to group data into classes, build grouped frequency tables, find relative and cumulative frequencies and class midpoints, and read histograms.
minutes: 25
---

:::goals
- Explain why and when we group data, and form classes correctly (consecutive, non-overlapping, covering all the data).
- Build a grouped frequency table and draw and read a histogram of grouped data.
- Find and use the relative frequency and the cumulative frequency of each class.
- Find the representative value (midpoint) of a class and see what information is lost by grouping.
:::

Suppose a teacher asks $40$ students in grade 11 how many minutes it takes them to get from home to school. The result is $40$ numbers, each a whole number of minutes. We would like to say things like "most students take about $10$ to $20$ minutes" or "so many students take less than $20$ minutes".

It is hard to draw such conclusions from $40$ separate numbers. How can we summarise them in a compact table that still keeps the main information?

## Grouping data

### Explore: counting in intervals

Here are the journey times (in minutes) of the $40$ students (imagined data):
$$\begin{array}{cccccccccc} 8 & 12 & 15 & 25 & 7 & 18 & 22 & 30 & 14 & 9\\ 35 & 20 & 17 & 11 & 28 & 6 & 24 & 16 & 41 & 13\\ 19 & 27 & 10 & 33 & 21 & 5 & 23 & 38 & 15 & 26\\ 12 & 44 & 18 & 29 & 9 & 31 & 22 & 14 & 36 & 20 \end{array}$$
The smallest value is $5$ and the largest is $44$. We split the range from $0$ to $50$ minutes into $5$ equal intervals, each $10$ minutes long, and count how many values fall in each interval. Convention: the interval $[0, 10)$ contains the numbers $x$ with $0\le x<10$, that is it includes $0$ but not $10$. This way every value belongs to exactly one interval; for example $10$ belongs to $[10, 20)$, not to $[0, 10)$.

| Time (minutes) | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|---|
| Students | $6$ | $14$ | $12$ | $6$ | $2$ |

The numbers in the table add up to $6+14+12+6+2=40$, the number of students asked, so nobody was missed. Now we see at once that the class $[10, 20)$ has the most students.

:::definition Grouped data
When data take many different values, we divide them into **classes** of the form $[a_i, a_{i+1})$. Data divided in this way are called **grouped data**. The number $a_{i+1}-a_i$ is the **class width**. The **frequency** $m_i$ of a class is the number of data values in that class, and a table listing the classes with their frequencies is called a **grouped frequency table**. The frequencies add up to the **sample size** $n$.
:::

For a grouped table to be correct and useful, we usually follow these rules:
1. The classes are consecutive intervals that **do not overlap** (every value belongs to exactly one class) and **leave no gaps** (every value belongs to some class).
2. The classes usually have the same width, to make comparison and drawing graphs easier.
3. The number of classes is moderate: too few lose a lot of information, too many give a long table with small, untidy frequencies.

:::diagram Histogram of the grouped frequency table (journey times, minutes)
alt: Five adjacent bars whose heights are proportional to the frequencies 6, 14, 12, 6, 2 in the classes 0 to 10, 10 to 20, 20 to 30, 30 to 40 and 40 to 50 minutes
point A0 0,0 ""
point B0 1,0 ""
point C0 1,2.4 ""
point D0 0,2.4 ""
point A1 1,0 ""
point B1 2,0 ""
point C1 2,5.6 ""
point D1 1,5.6 ""
point A2 2,0 ""
point B2 3,0 ""
point C2 3,4.8 ""
point D2 2,4.8 ""
point A3 3,0 ""
point B3 4,0 ""
point C3 4,2.4 ""
point D3 3,2.4 ""
point A4 4,0 ""
point B4 5,0 ""
point C4 5,0.8 ""
point D4 4,0.8 ""
polygon A0 B0 C0 D0
polygon A1 B1 C1 D1
polygon A2 B2 C2 D2
polygon A3 B3 C3 D3
polygon A4 B4 C4 D4
label 0.5,2.7 "6"
label 1.5,5.9 "14"
label 2.5,5.1 "12"
label 3.5,2.7 "6"
label 4.5,1.1 "2"
label 0,-0.35 "0"
label 1,-0.35 "10"
label 2,-0.35 "20"
label 3,-0.35 "30"
label 4,-0.35 "40"
label 5,-0.35 "50"
:::

In a **histogram**, each class is drawn as a bar whose width is the class width and whose height is proportional to the frequency; the bars touch because the classes are consecutive. The frequency is written above each bar in the picture.

## Relative frequency and cumulative frequency

The frequency tells us "how many students", but when we compare two samples of different sizes we need to know "what fraction".

:::theorem Relative frequency and cumulative frequency
Take grouped data of sample size $n$, in which class $i$ has frequency $m_i$.
- The **relative frequency** of class $i$ is $f_i=\dfrac{m_i}{n}\cdot100\%$. The relative frequencies add up to $100\%$.
- The **cumulative frequency** of class $i$ is the sum of the frequency of that class and of all the classes before it: $m_1+m_2+\dots+m_i$. It tells us how many data values are **less than** the upper boundary of that class.
:::

For the journey-time data we get the complete table:

| Class (minutes) | Frequency | Relative frequency | Cumulative frequency |
|---|---|---|---|
| $[0, 10)$ | $6$ | $15\%$ | $6$ |
| $[10, 20)$ | $14$ | $35\%$ | $20$ |
| $[20, 30)$ | $12$ | $30\%$ | $32$ |
| $[30, 40)$ | $6$ | $15\%$ | $38$ |
| $[40, 50)$ | $2$ | $5\%$ | $40$ |

For example $\dfrac{14}{40}\cdot100\%=35\%$ and $6+14=20$. The number $20$ tells us that exactly $20$ students take less than $20$ minutes, which is half the class. The last number in the cumulative column is always the sample size $n$.

## Representative values

After grouping we no longer know the exact value of each data point, only which class it lies in. When we need one number to "represent" a whole class, we take its midpoint.

:::definition Representative value
The **representative value** of the class $[a_i, a_{i+1})$ is the midpoint of the class: $c_i=\dfrac{a_i+a_{i+1}}{2}$.
:::

For example the representative value of the class $[10, 20)$ is $15$ and of the class $[20, 30)$ is $25$. In the next lesson we use representative values to estimate the mean, median, quartiles and mode of grouped data.

:::example Choosing different classes
For the $40$ journey times above, build a grouped frequency table with classes of width $5$ minutes, starting at $5$.

**Understand.** The smallest value is $5$ and the largest is $44$, so the classes $[5, 10)$, $[10, 15)$, ..., $[40, 45)$ cover all the data. We need to count the values in each class.

**Plan.** Count class by class through the $40$ numbers, ticking each number as it is counted so that none is missed or counted twice, then check that the total is $40$.

**Solve.** We get the table:

| Class (minutes) | $[5, 10)$ | $[10, 15)$ | $[15, 20)$ | $[20, 25)$ | $[25, 30)$ | $[30, 35)$ | $[35, 40)$ | $[40, 45)$ |
|---|---|---|---|---|---|---|---|---|
| Students | $6$ | $7$ | $7$ | $7$ | $5$ | $3$ | $3$ | $2$ |

Check: $6+7+7+7+5+3+3+2=40$. Correct.

**Look back.** With width $10$ we had $5$ classes and knew that $[10, 20)$ was the busiest ($14$ students). With width $5$ we see more: $[10, 15)$, $[15, 20)$ and $[20, 25)$ all have $7$ students, so the "peak" is spread from $10$ to $25$ minutes. With width $20$ only the classes $[0, 20)$, $[20, 40)$, $[40, 60)$ would remain, with frequencies $20$, $18$, $2$: a compact table, but nearly all of the shape of the data is lost. A smaller width keeps more detail but gives a longer table.
:::

When the original data are available, we build the table ourselves.

:::example Building a grouped frequency table from raw data
Test marks of $20$ students (out of $10$; nobody scored $10$):
$$5.5;\ 6;\ 7.5;\ 8;\ 6.5;\ 7;\ 9;\ 5;\ 6;\ 7.5;\ 8.5;\ 6.5;\ 7;\ 8;\ 9.5;\ 7.5;\ 6;\ 8;\ 5.5;\ 7.$$
Build a grouped frequency table with the classes $[5, 6)$, $[6, 7)$, $[7, 8)$, $[8, 9)$, $[9, 10)$ and find the relative frequency of each class.

**Solution.** Count the marks in each class: $[5, 6)$ contains $5; 5.5; 5.5$, which is $3$ values; $[6, 7)$ contains $6; 6; 6; 6.5; 6.5$, which is $5$ values; $[7, 8)$ contains $7; 7; 7; 7.5; 7.5; 7.5$, which is $6$ values; $[8, 9)$ contains $8; 8; 8; 8.5$, which is $4$ values; $[9, 10)$ contains $9; 9.5$, which is $2$ values. The total is $3+5+6+4+2=20$.

| Class (marks) | $[5, 6)$ | $[6, 7)$ | $[7, 8)$ | $[8, 9)$ | $[9, 10)$ |
|---|---|---|---|---|---|
| Frequency | $3$ | $5$ | $6$ | $4$ | $2$ |
| Relative frequency | $15\%$ | $25\%$ | $30\%$ | $20\%$ | $10\%$ |

So the frequencies are $3, 5, 6, 4, 2$ and the relative frequencies are $15\%, 25\%, 30\%, 20\%, 10\%$.
:::

Now we find the relative and cumulative frequencies for a given table.

:::example A shop's takings
Suppose the daily takings (in millions of dong) of a shop over $30$ days are grouped as follows: $[10, 15)$ has $4$ days, $[15, 20)$ has $9$ days, $[20, 25)$ has $10$ days, $[25, 30)$ has $5$ days, $[30, 35)$ has $2$ days. Find the relative and cumulative frequency of each class (relative frequencies to $0.1\%$). On how many days were the takings below $25$ million dong? What proportion of days had takings of $25$ million dong or more?

**Solution.** The sample size is $n=30$. We get the table:

| Class | $[10, 15)$ | $[15, 20)$ | $[20, 25)$ | $[25, 30)$ | $[30, 35)$ |
|---|---|---|---|---|---|
| Frequency | $4$ | $9$ | $10$ | $5$ | $2$ |
| Relative frequency | $13.3\%$ | $30\%$ | $33.3\%$ | $16.7\%$ | $6.7\%$ |
| Cumulative frequency | $4$ | $13$ | $23$ | $28$ | $30$ |

The number of days with takings below $25$ million dong is the cumulative frequency of the class $[20, 25)$, that is $23$ days. The number of days with takings of $25$ million dong or more is $5+2=7$, which is $\dfrac{7}{30}\cdot100\%\approx23.3\%$ of the days.

So there are $23$ days with takings below $25$ million dong, and about $23.3\%$ of the days have takings of $25$ million dong or more.
:::

Next, we see what information grouping loses.

:::example Information lost by grouping
Using the journey-time table with class width $10$ minutes, can we find exactly how many students take less than $25$ minutes? If not, give the range of possible values and an estimate that assumes the students in each class are spread evenly.

**Solution.** There are $20$ students who take less than $20$ minutes and $32$ who take less than $30$ minutes. The table does not say how many of the $12$ students in the class $[20, 30)$ take less than $25$ minutes, so we cannot find the number exactly; it lies between $20$ and $32$.

If we assume that the $12$ students in $[20, 30)$ are spread evenly, then the interval $[20, 25)$ holds half of the class, that is $6$ students, and the estimate is $20+6=26$ students.

So we cannot find it exactly; the estimate is about $26$ students.

**Check with the width-$5$ table.** The table in the first example gives $7$ students in $[20, 25)$, so the number of students taking less than $25$ minutes is $20+7=27$. The estimate $26$ is close to $27$, and the finer table gives the exact answer.
:::

Finally, relative frequencies help us compare two samples of different sizes.

:::example Comparing two classes
The daily self-study times (in hours) of class 11A ($40$ students) and class 11B ($50$ students) are grouped: class 11A has $6$, $22$, $12$ students in the classes $[0, 1)$, $[1, 2)$, $[2, 3)$; class 11B has $10$, $25$, $15$ students in those classes. Compare the two classes.

**Solution.** Class 11B has more students, so its frequencies are larger, and we cannot yet compare. We find the relative frequencies:

| Class (hours) | $[0, 1)$ | $[1, 2)$ | $[2, 3)$ |
|---|---|---|---|
| Class 11A | $\dfrac{6}{40}=15\%$ | $\dfrac{22}{40}=55\%$ | $\dfrac{12}{40}=30\%$ |
| Class 11B | $\dfrac{10}{50}=20\%$ | $\dfrac{25}{50}=50\%$ | $\dfrac{15}{50}=30\%$ |

So the proportion of students who study $2$ hours or more is the same in both classes ($30\%$), even though class 11B has $15$ such students against $12$ in class 11A. Class 11B has a higher proportion of students who study less than $1$ hour ($20\%$ against $15\%$).
:::

**Connections.** In grade 10 we found the mean, median, quartiles and mode from raw data. When we have only a grouped table we do not have the raw data, so in the next lesson we use representative values and cumulative frequencies to estimate these numbers. For example, with the representative values $5, 15, 25, 35, 45$ we estimate the mean journey time as $\dfrac{5\cdot6+15\cdot14+25\cdot12+35\cdot6+45\cdot2}{40}=21$ minutes, close to the $20.575$ minutes found from the $40$ raw values.

:::warning Common mistakes
- **Overlapping classes or classes with gaps.** Wrong: the classes $[10, 20]$ and $[20, 30]$. Why it is wrong: a value equal to $20$ lies in both classes and is counted twice. Right: use half-open intervals $[10, 20)$, $[20, 30)$.
- **Confusing frequency with relative frequency.** Wrong: a class with $14$ of $40$ students is $14\%$. Why it is wrong: $14$ is a number of students, not a percentage. Right: $\dfrac{14}{40}\cdot100\%=35\%$.
- **Confusing cumulative frequency with the frequency of the class.** Wrong: the cumulative frequency of $[20, 30)$ is $12$. Why it is wrong: $12$ is only the frequency of this class, without the classes before it. Right: $6+14+12=32$.
- **Treating every value in a class as the representative value.** Wrong: all $12$ students in $[20, 30)$ take exactly $25$ minutes. Why it is wrong: some students in the class take $20$ minutes and some take $29$. Right: the representative value is only a typical number used for estimating.
:::

## Key terms

:::terms
- data set | mẫu số liệu
- grouped data | mẫu số liệu ghép nhóm
- class | nhóm số liệu
- class width | độ rộng của nhóm
- sample size | cỡ mẫu
- frequency | tần số
- relative frequency | tần số tương đối
- cumulative frequency | tần số tích luỹ
- representative value (class midpoint) | giá trị đại diện
- histogram | biểu đồ cột
- grouped frequency table | bảng tần số ghép nhóm
:::

## Summary

- Grouping data means dividing them into consecutive classes $[a_i, a_{i+1})$ that do not overlap and cover all the data, usually of equal width.
- The frequency $m_i$ is the number of data values in a class; the frequencies add up to the sample size $n$.
- Relative frequency: $f_i=\dfrac{m_i}{n}\cdot100\%$; they add up to $100\%$.
- The cumulative frequency of a class is the sum of the frequencies from the first class up to it; it gives the number of values less than the upper boundary of the class.
- The representative value of the class $[a_i, a_{i+1})$ is $\dfrac{a_i+a_{i+1}}{2}$.
- Grouping loses information: we only know which class each value lies in, so many quantities can only be estimated.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
The heights (in cm) of $20$ students are $152, 158, 161, 165, 149, 170, 155, 162, 168, 157, 160, 173, 154, 163, 166, 159, 151, 164, 169, 156$. Build a grouped frequency table with the classes $[145, 150)$, $[150, 155)$, $[155, 160)$, $[160, 165)$, $[165, 170)$, $[170, 175)$.

::hint
**What you need:** every value belongs to exactly one class of the form $[a, b)$; check that the frequencies add up to $20$.

**Steps:**
1. For each number, decide which class contains it (note that $150$ belongs to $[150, 155)$).
2. Count the frequencies and add them up as a check.

::solution
Counting class by class gives the frequencies $1, 3, 5, 5, 4, 2$; for example the class $[150, 155)$ contains $152, 154, 151$. The total is $1+3+5+5+4+2=20$.

**Answer.** The frequencies are $1, 3, 5, 5, 4, 2$.
:::

:::exercise
Grouped heights (in cm) of a sample of size $50$: $[140, 150)$ has $5$, $[150, 160)$ has $12$, $[160, 170)$ has $18$, $[170, 180)$ has $10$, $[180, 190)$ has $5$ people. Find the relative frequency and cumulative frequency of each class.

::hint
**What you need:** $f_i=\dfrac{m_i}{n}\cdot100\%$; the cumulative frequency is a running total.

**Steps:**
1. Divide each frequency by $50$ and multiply by $100\%$.
2. Add up the frequencies as a running total.

::solution
Relative frequencies: $\dfrac{5}{50}=10\%$, $\dfrac{12}{50}=24\%$, $\dfrac{18}{50}=36\%$, $\dfrac{10}{50}=20\%$, $\dfrac{5}{50}=10\%$ (total $100\%$). Cumulative frequencies: $5$, $5+12=17$, $17+18=35$, $35+10=45$, $45+5=50$.

**Answer.** Relative frequencies: $10\%, 24\%, 36\%, 20\%, 10\%$; cumulative frequencies: $5, 17, 35, 45, 50$.
:::

:::exercise
Each of the following grouped tables of weights (in kg) has an error. Point out the error and correct it. a) $[40, 45)$, $[45, 50]$, $[50, 55)$, $[55, 60)$. b) $[40, 45)$, $[45, 50)$, $[55, 60)$, $[60, 65)$.

::hint
**What you need:** the classes must be consecutive, non-overlapping and without gaps.

**Steps:**
1. Check whether the upper boundary of each class equals the lower boundary of the next.
2. Look for any interval that is not covered.

::solution
a) The class $[45, 50]$ contains $50$, and $50$ also belongs to $[50, 55)$, so it is counted twice: the classes overlap. Correct it to $[45, 50)$. b) The class $[50, 55)$ is missing: values from $50$ up to but not including $55$ belong to no class. Correct it by adding the class $[50, 55)$.

**Answer.** a) Overlap at $50$; correct to $[45, 50)$. b) $[50, 55)$ is missing; add this class.
:::

:::exercise
Suppose the monthly household water use (in $\text{m}^3$) of $50$ households is grouped as: $[0, 5)$ has $4$ households, $[5, 10)$ has $16$, $[10, 15)$ has $18$, $[15, 20)$ has $9$, $[20, 25)$ has $3$. What percentage of the households use less than $15\ \text{m}^3$ a month?

::hint
**What you need:** the cumulative frequency of the class $[10, 15)$ gives the number of households using less than $15\ \text{m}^3$.

**Steps:**
1. Add the frequencies of the first three classes.
2. Divide by $50$ and multiply by $100\%$.

::solution
The number of households using less than $15\ \text{m}^3$ is $4+16+18=38$, which is $\dfrac{38}{50}\cdot100\%=76\%$.

**Answer.** $76\%$.
:::

:::exercise
The heights of $40$ students are grouped: $[150, 155)$ has $4$, $[155, 160)$ has $10$, $[160, 165)$ has $14$, $[165, 170)$ has $9$, $[170, 175)$ has $3$ students. a) Write the representative value of each class. b) Assuming that the heights in each class are spread evenly, estimate the number of students shorter than $162.5$ cm.

::hint
**What you need:** the representative value is the midpoint of the class; $162.5$ is the midpoint of the class $[160, 165)$.

**Steps:**
1. Find the midpoint of each class.
2. Add the classes that lie entirely below $162.5$ and half of the class $[160, 165)$.

::solution
a) The representative values are $152.5$, $157.5$, $162.5$, $167.5$, $172.5$. b) The classes $[150, 155)$ and $[155, 160)$ lie entirely below $162.5$ cm and contain $4+10=14$ students. The lower half of the class $[160, 165)$ contains about $\dfrac{14}{2}=7$ students. So the estimate is $14+7=21$ students.

**Answer.** a) $152.5; 157.5; 162.5; 167.5; 172.5$; b) about $21$ students.
:::

:::exercise
Take the journey-time table from the lesson ($[0, 10)$: $6$; $[10, 20)$: $14$; $[20, 30)$: $12$; $[30, 40)$: $6$; $[40, 50)$: $2$). Decide whether each statement is true or false.

a) The class $[10, 20)$ has the greatest frequency.

b) The relative frequency of the class $[20, 30)$ is $12\%$.

c) Exactly $20$ students take less than $20$ minutes.

d) The cumulative frequency of the class $[30, 40)$ is $38$.

::hint
**What you need:** relative frequency is $\dfrac{m_i}{n}\cdot100\%$ with $n=40$; cumulative frequency is a running total.

**Steps:**
1. a) Compare the frequencies.
2. b) Find $\dfrac{12}{40}$.
3. c), d) Add up the frequencies as a running total.

::solution
a) **True**: the greatest frequency is $14$.

b) **False**: $\dfrac{12}{40}\cdot100\%=30\%$; $12$ is the frequency, not the relative frequency.

c) **True**: $6+14=20$.

d) **True**: $6+14+12+6=38$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
A grouped data set of size $50$ has cumulative frequencies $5, 17, 38, 46, 50$ for five consecutive classes. Find the frequency of the third class.

::hint
**What you need:** the frequency of a class is the difference of two consecutive cumulative frequencies.

**Steps:**
1. The frequency of the third class is the third cumulative frequency minus the second.

::solution
The frequency of the third class is $38-17=21$.

**Answer.** $21$.
:::

:::exercise Revision
Prove that if the classes of a grouped data set all have the same width $h$, then their representative values form an arithmetic progression with common difference $h$.

::hint
**What you need:** class $i$ is $[a_i, a_i+h)$ and the next class starts at $a_{i+1}=a_i+h$; from the lesson on arithmetic progressions, a sequence with constant consecutive differences is an arithmetic progression.

**Steps:**
1. Write the representative values $c_i$ and $c_{i+1}$.
2. Find $c_{i+1}-c_i$.

::solution
The representative value of class $i$ is $c_i=\dfrac{a_i+(a_i+h)}{2}=a_i+\dfrac h2$. The next class starts at $a_i+h$, so $c_{i+1}=a_i+h+\dfrac h2$. Hence $c_{i+1}-c_i=h$ is constant, so $(c_i)$ is an arithmetic progression with common difference $h$.

**Answer.** The representative values form an arithmetic progression with common difference $h$.
:::

:::exercise Challenge
A grouped frequency table has five classes $[0, 10)$, $[10, 20)$, $[20, 30)$, $[30, 40)$, $[40, 50)$ and some cells are smudged. We know that the class $[0, 10)$ has frequency $4$, the class $[20, 30)$ has frequency $18$ and relative frequency $36\%$, the class $[40, 50)$ has frequency $3$, and the cumulative frequency of the class $[10, 20)$ is $14$. Find the sample size and the frequencies of the classes $[10, 20)$ and $[30, 40)$.

::hint
**What you need:** $f_i=\dfrac{m_i}{n}\cdot100\%$ lets us find $n$; the cumulative frequency, and the fact that the frequencies add up to $n$.

**Steps:**
1. From $\dfrac{18}{n}=36\%$ find $n$.
2. Find the frequency of $[10, 20)$ from the cumulative frequency $14$.
3. Find the frequency of $[30, 40)$ from the total $n$.

::solution
From $\dfrac{18}{n}=0.36$ we get $n=50$. The cumulative frequency of $[10, 20)$ is $4+m_2=14$, so $m_2=10$. The frequencies add up to $50$, so $m_4=50-(4+10+18+3)=15$.

**Answer.** $n=50$; the class $[10, 20)$ has $10$; the class $[30, 40)$ has $15$.
:::

## Mini test

:::quiz
::mc
A grouped data set of size $50$ has a class with frequency $12$. The relative frequency of that class is
A. $12\%$.
B. $62\%$.
C. $4.2\%$.
D. $24\%$.
::key D
$\dfrac{12}{50}\cdot100\%=24\%$. Option A treats the frequency as a percentage, and option C is $\dfrac{50}{12}$.

::mc
The representative value of the class $[160, 170)$ is
A. $165$.
B. $160$.
C. $10$.
D. $330$.
::key A
$\dfrac{160+170}{2}=165$. Option C is the class width, and option D is the sum of the boundaries without dividing by $2$.

::mc
A sample has four classes with frequencies $4, 9, 12, 5$. The cumulative frequency of the third class is
A. $12$.
B. $25$.
C. $13$.
D. $21$.
::key B
$4+9+12=25$. Option A is the frequency of the third class alone, option C is $4+9$, and option D is $9+12$.

::mc
Which of the following groupings is valid for data taking values from $3$ to $28$?
A. $[0, 10)$, $[15, 25)$, $[25, 35)$.
B. $[0, 10]$, $[10, 20]$, $[20, 30]$.
C. $[0, 10)$, $[10, 20)$, $[20, 30)$.
D. $[5, 15)$, $[15, 25)$.
::key C
The classes $[0, 10)$, $[10, 20)$, $[20, 30)$ are consecutive, do not overlap, and cover every value from $3$ to $28$. Option B overlaps at $10$ and $20$, option A leaves $[10, 15)$ uncovered, and option D does not contain the values $3$ and $28$.

::tf
The waiting times for a bus of $25$ passengers are grouped: $[0, 5)$ has $7$, $[5, 10)$ has $10$, $[10, 15)$ has $6$, $[15, 20)$ has $2$ passengers. Decide whether each statement is true or false.
a) The relative frequency of the class $[0, 5)$ is $7\%$.
b) $15$ passengers wait less than $10$ minutes.
c) The cumulative frequency of the class $[10, 15)$ is $23$.
d) $5$ passengers wait at least $15$ minutes.
::key F F T F
a) False: $\dfrac{7}{25}\cdot100\%=28\%$. b) False: $7+10=17$ passengers. c) True: $7+10+6=23$. d) False: the class $[15, 20)$ has only $2$ passengers.

::sa
A grouped data set of size $80$ has the class $[20, 30)$ with frequency $28$. What is the relative frequency of that class, as a percentage?
::key 35
$\dfrac{28}{80}\cdot100\%=35\%$.

::sa
What is the representative value of the class $[12.5, 17.5)$?
::key 15
$\dfrac{12.5+17.5}{2}=15$.
:::
