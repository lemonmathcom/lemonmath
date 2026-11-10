---
title: Relative frequency tables and charts
description: Work out relative frequencies, build relative frequency tables, and draw and read relative frequency bar charts and pie charts to compare data sets.
minutes: 20
---

:::goals
- Work out relative frequencies and build a relative frequency table.
- Draw and read relative frequency bar charts and pie charts.
- Use relative frequencies to compare data sets of different sizes.
:::

Suppose school A surveys 300 students and finds that $84$ of them use social media for more than 3 hours a day; school B surveys 180 students and finds $63$ such students. School A has more of them, so are school A's students more "hooked" on social media? Not necessarily: $84$ out of $300$ and $63$ out of $180$ are different things. To compare fairly, we need to know what *fraction* of the whole sample each group is. That is exactly the relative frequency.

## Relative frequency

### Explore: dividing by the sample size

We divide the number of students using social media for more than 3 hours by the number surveyed:

$$\text{School A: } \frac{84}{300}=0.28=28\%;\qquad \text{School B: } \frac{63}{180}=0.35=35\%.$$

So school B has the higher proportion, even though it has fewer such students. The figure $28\%$ means: for every 100 students in school A, about 28 use social media for more than 3 hours a day.

:::definition Relative frequency
Consider a data set of size $n$ with values $x_1, x_2, \ldots, x_k$ and frequencies $m_1, m_2, \ldots, m_k$.
- The **relative frequency** of the value $x_i$ is the ratio of its frequency $m_i$ to the sample size $n$:
$$f_i=\frac{m_i}{n}\cdot100\%.$$
- A **relative frequency table** has one row listing the values $x_i$ and one row listing their relative frequencies $f_i$.
- The relative frequencies add up to $100\%$.
:::

**Going deeper.** Frequency answers "how many?", relative frequency answers "what fraction of the whole sample?". Because we have divided by $n$, relative frequency does not depend on the sample size, so a class of 35 can be compared with a whole country. The total is $100\%$ because $\dfrac{m_1+m_2+\ldots+m_k}{n}=\dfrac nn=1$. When the $f_i$ are rounded, the total may be $99.9\%$ or $100.1\%$: that is rounding error, not a mistake.

:::example Building a relative frequency table
The hours of sleep of 200 year 9 students (lesson [frequency tables](lesson:frequency-tables-charts)) have this frequency table:

| Hours of sleep | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Number of students | $24$ | $46$ | $68$ | $44$ | $18$ |

Build the relative frequency table of the data set.

**Solution.** The sample size is $n=200$. We have

$$f_1=\frac{24}{200}\cdot100\%=12\%,\quad f_2=\frac{46}{200}\cdot100\%=23\%,\quad f_3=\frac{68}{200}\cdot100\%=34\%,$$
$$f_4=\frac{44}{200}\cdot100\%=22\%,\quad f_5=\frac{18}{200}\cdot100\%=9\%.$$

So the relative frequency table is:

| Hours of sleep | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Relative frequency | $12\%$ | $23\%$ | $34\%$ | $22\%$ | $9\%$ |

**Check.** $12+23+34+22+9=100$. From the table we read at once: $22\%+9\%=31\%$ of the students sleep 8 hours or more.
:::

From relative frequencies we can also work back to frequencies: $m_i=f_i\cdot n$.

:::example Application: sorting waste at source
Suppose a ward surveys 250 households about sorting their rubbish: $18\%$ sort it fully, $46\%$ sort it partly and the rest do not sort it. Find the number of households in each group.

**Solution.** The relative frequency of the group that does not sort is $100\%-18\%-46\%=36\%$. We have

$$250\cdot18\%=45,\qquad 250\cdot46\%=115,\qquad 250\cdot36\%=90.$$

So $45$ households sort fully, $115$ sort partly and $90$ do not sort.
:::

## Relative frequency charts

### Bar charts

A relative frequency bar chart is drawn like a frequency bar chart, except that the height of each bar is the relative frequency (as a percentage).

:::graph Relative frequencies of hours of sleep (%)
alt: Bar chart: the values 5, 6, 7, 8, 9 hours have bars of heights 12, 23, 34, 22, 9 per cent
x: 4..10
y: 0..40
fill: 12 ; 0 ; 4.7..5.3
fill: 23 ; 0 ; 5.7..6.3
fill: 34 ; 0 ; 6.7..7.3
fill: 22 ; 0 ; 7.7..8.3
fill: 9 ; 0 ; 8.7..9.3
:::

The shape is exactly the same as the frequency bar chart in the previous lesson, because every bar is divided by the same number $n=200$. Only the scale on the vertical axis changes.

### Pie charts

To see what fraction of the *whole* each group is, we use a pie chart: the whole circle stands for $100\%$, and each value has a sector with angle at the centre

$$\alpha_i=f_i\cdot360^\circ.$$

For example, $f=25\%$ gives an angle of $90^\circ$, a quarter of the circle.

:::example The age structure of Vietnam's population
According to the 2024 Intercensal Population and Housing Survey of Vietnam's General Statistics Office (published in January 2025), on 1 April 2024 Vietnam's population was $101\,112\,656$, of whom $23.3\%$ were under 15, $67.4\%$ were aged 15 to 64 and $9.3\%$ were 65 or over.

a) Find the angle at the centre of each sector when drawing a pie chart.

b) Estimate the number of people aged 65 or over (to the nearest hundred thousand).

**Solution.** a) We have

$$23.3\%\cdot360^\circ\approx83.9^\circ,\qquad 67.4\%\cdot360^\circ\approx242.6^\circ,\qquad 9.3\%\cdot360^\circ\approx33.5^\circ.$$

b) The number of people aged 65 or over is about $101\,112\,656\cdot9.3\%\approx9\,403\,477$, that is, about $9.4$ million.

So a) the angles are about $83.9^\circ$, $242.6^\circ$ and $33.5^\circ$; b) about $9.4$ million people.

**Remark.** The "65 or over" sector is small, but $9.4$ million people is a great many: they need healthcare, pensions and care. When reading relative frequencies, always remember the size of the whole.
:::

:::diagram The age structure of Vietnam's population (1 April 2024)
alt: A pie chart in three sectors: under 15 is 23.3%, 15 to 64 is 67.4%, 65 and over is 9.3%
point O 0,0 ""
point A 0,3 ""
point B 2.98,0.32 ""
point C -1.65,2.5 ""
circle O 3
segment O A
segment O B
segment O C
label 1.25,1.4 "23.3%"
label -0.75,-1.2 "67.4%"
label -0.75,-1.9 "aged 15–64"
label 2.9,2.9 "Under 15"
label -0.55,3.45 "9.3%"
label -2.5,3.3 "65 and over"
:::

:::example Which school should worry more?
Back to the opening situation. Suppose that, besides the "more than 3 hours" group, school A has $126$ students who use social media for 1 to 3 hours and school B has $72$; the rest use it for less than 1 hour. Build the relative frequency tables of the two schools and comment.

**Solution.**

*Understand.* Each school has three groups; the sample sizes differ ($300$ and $180$), so we must compare relative frequencies.

*Plan.* Find the number using it for less than 1 hour in each school, then divide each frequency by the sample size.

*Solve.* Less than 1 hour: school A has $300-84-126=90$, school B has $180-63-72=45$. We get the table:

| Time used | Less than 1 hour | 1 to 3 hours | More than 3 hours |
|---|---|---|---|
| School A | $\frac{90}{300}=30\%$ | $\frac{126}{300}=42\%$ | $\frac{84}{300}=28\%$ |
| School B | $\frac{45}{180}=25\%$ | $\frac{72}{180}=40\%$ | $\frac{63}{180}=35\%$ |

So school B has a higher proportion using it for more than 3 hours ($35\%$ against $28\%$) and a lower proportion using it for less than 1 hour, so it should worry more.

*Look back.* Is the result sensible? Each row adds up to $100\%$. What if school B had asked only 20 students? Then one student alone would be $5\%$, and the conclusion could easily be wrong by chance: relative frequencies are only reliable when the sample is large enough.
:::

:::warning Common mistakes
- **Comparing frequencies instead of relative frequencies** when the samples have different sizes (like $84>63$ in the opening).
- **Wrong angles.** Wrong: $25\%$ gives an angle of $25^\circ$. Right: $25\%\cdot360^\circ=90^\circ$.
- **Dividing by the wrong number**, for example by the number of values $k$ instead of by $n$.
:::

**Connections.** Relative frequency is the bridge between statistics and probability: in year 8 you saw that when an experiment is repeated many times, the relative frequency of an event gets close to its probability. In the next chapter we work out [probabilities](lesson:event-probability-experiments) by counting and compare them with relative frequencies from real data.

## Key terms

:::terms
- relative frequency | tần số tương đối
- relative frequency table | bảng tần số tương đối
- relative frequency bar chart | biểu đồ tần số tương đối dạng cột
- pie chart | biểu đồ hình quạt tròn
- sector | hình quạt
- angle at the centre | góc ở tâm
- percentage | tỉ lệ phần trăm
:::

## Summary

- Relative frequency: $f_i=\dfrac{m_i}{n}\cdot100\%$; the $f_i$ add up to $100\%$.
- Conversely: $m_i=f_i\cdot n$.
- Bar chart: bar height equals $f_i$. Pie chart: angle at the centre $f_i\cdot360^\circ$.
- To compare two data sets of different sizes, use relative frequencies, not frequencies.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Suppose the numbers of children in 25 families have the frequency table: values $1, 2, 3, 4$ with frequencies $7, 12, 5, 1$. Build the relative frequency table.

::hint
**What you need:** $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Steps:**
1. Divide each frequency by $25$.
2. Check that the total is $100\%$.

::solution
We have $\dfrac{7}{25}=28\%$, $\dfrac{12}{25}=48\%$, $\dfrac{5}{25}=20\%$, $\dfrac{1}{25}=4\%$; the total is $100\%$.

So the values $1, 2, 3, 4$ have relative frequencies $28\%, 48\%, 20\%, 4\%$.

**Answer.** $28\%$, $48\%$, $20\%$, $4\%$.
:::

:::exercise
Suppose 40 students are surveyed about how they get to school: $15\%$ walk, $35\%$ cycle, $30\%$ are driven by their parents and the rest take the bus. Find the number of students in each group.

::hint
**What you need:** $m_i=f_i\cdot n$; the $f_i$ add up to $100\%$.

**Steps:**
1. Find the relative frequency of the bus group.
2. Multiply each relative frequency by $40$.

::solution
The bus group is $100\%-15\%-35\%-30\%=20\%$. We have $40\cdot15\%=6$, $40\cdot35\%=14$, $40\cdot30\%=12$, $40\cdot20\%=8$.

So $6$ students walk, $14$ cycle, $12$ are driven and $8$ take the bus.

**Answer.** $6$, $14$, $12$, $8$.
:::

:::exercise
A data set has four values with relative frequencies $25\%$, $40\%$, $20\%$, $15\%$. Find the angles at the centre of the corresponding sectors in a pie chart.

::hint
**What you need:** angle at the centre $\alpha_i=f_i\cdot360^\circ$.

**Steps:**
1. Multiply each relative frequency by $360^\circ$.
2. Check that the total is $360^\circ$.

::solution
We have $25\%\cdot360^\circ=90^\circ$, $40\%\cdot360^\circ=144^\circ$, $20\%\cdot360^\circ=72^\circ$, $15\%\cdot360^\circ=54^\circ$; the total is $360^\circ$.

So the angles are $90^\circ$, $144^\circ$, $72^\circ$, $54^\circ$.

**Answer.** $90^\circ$, $144^\circ$, $72^\circ$, $54^\circ$.
:::

:::exercise
According to Vietnam's General Statistics Office, on 1 April 2024 Vietnam had $101\,112\,656$ inhabitants, of whom $38\,599\,637$ lived in urban areas. Find the relative frequency of the urban population (to 1 decimal place of a per cent) and the angle of the "urban" sector (to the nearest degree).

::hint
**What you need:** $f=\dfrac mn\cdot100\%$; angle $=f\cdot360^\circ$.

**Steps:**
1. Divide the urban population by the total population.
2. Multiply the result by $360^\circ$.

::solution
We have $f=\dfrac{38\,599\,637}{101\,112\,656}\cdot100\%\approx38.2\%$. The angle of the sector is $\dfrac{38\,599\,637}{101\,112\,656}\cdot360^\circ\approx137^\circ$ (use the exact ratio; multiplying by the rounded $38.2\%$ gives $137.52^\circ$, which wrongly rounds to $138^\circ$).

So the urban population is about $38.2\%$ and its sector has an angle of about $137^\circ$.

**Answer.** $38.2\%$; $137^\circ$.
:::

:::exercise
Suppose a survey at two school gates finds: at gate 1, $160$ people ride motorbikes and $12$ of them wear no helmet; at gate 2, $90$ people ride motorbikes and $9$ of them wear no helmet. Which gate needs more safety awareness work? Explain.

::hint
**What you need:** when two data sets have different sizes, compare relative frequencies.

**Steps:**
1. Work out the proportion without a helmet at each gate.
2. Compare them.

::solution
We have $\dfrac{12}{160}\cdot100\%=7.5\%$ and $\dfrac{9}{90}\cdot100\%=10\%$.

So gate 2 has the higher proportion without helmets ($10\%>7.5\%$) and needs more awareness work, even though fewer people break the rule there.

**Answer.** Gate 2 ($10\%$ against $7.5\%$).
:::

:::exercise
**(1.5 marks)** Suppose 50 students each choose one club: Maths $14$ students, English $18$, Football $x$, Music $8$.

a) Find $x$.

b) Build the relative frequency table.

c) Find the angle at the centre of the "English" sector.

::hint
**What you need:** the frequencies add up to $n$; $f_i=\dfrac{m_i}{n}\cdot100\%$; angle $=f_i\cdot360^\circ$.

**Steps:**
1. $x=50-(14+18+8)$.
2. Divide each frequency by $50$.
3. Multiply the $f$ for English by $360^\circ$.

::solution
a) We have $x=50-(14+18+8)=10$.

b) The relative frequencies are: Maths $\dfrac{14}{50}=28\%$, English $\dfrac{18}{50}=36\%$, Football $\dfrac{10}{50}=20\%$, Music $\dfrac{8}{50}=16\%$.

c) The angle of the "English" sector is $36\%\cdot360^\circ=129.6^\circ$.

**Answer.** a) $10$; b) $28\%$, $36\%$, $20\%$, $16\%$; c) $129.6^\circ$.
:::

:::exercise
In a data set, option A has frequency $12$ and relative frequency $15\%$.

a) Find the sample size.

b) Some more people are then asked and all of them choose A; the relative frequency of A becomes $20\%$. How many more people were asked? (Revise [solving word problems by forming equations](lesson:g9-equation-word-problems).)

::hint
**What you need:** $n=\dfrac{m}{f}$; when $x$ more people choose A, both the frequency and the sample size increase by $x$.

**Steps:**
1. Work out $n=12\div15\%$.
2. Form the equation $\dfrac{12+x}{n+x}=20\%$.

::solution
a) We have $n=12\div0.15=80$.

b) Let $x$ be the number of extra people asked ($x$ a positive whole number). From the question we have the equation

$$\frac{12+x}{80+x}=0.2\ \Rightarrow\ 12+x=16+0.2x\ \Rightarrow\ 0.8x=4\ \Rightarrow\ x=5\ \text{(this satisfies the condition)}.$$

So $5$ more people were asked.

**Answer.** a) $80$; b) $5$ people.
:::

:::exercise Challenge
A pie chart shows the results of a survey of 120 people in three sectors A, B, C. The angle of sector C is $72^\circ$, and the angle of sector A is twice the angle of sector B. Find the number of people in each group.

::hint
**What you need:** angle $=f\cdot360^\circ$, so $f=\dfrac{\text{angle}}{360^\circ}$; the three angles add up to $360^\circ$.

**Steps:**
1. Find the angles of A and B from their total $360^\circ-72^\circ$.
2. Turn each angle into a frequency: $m=\dfrac{\text{angle}}{360^\circ}\cdot120$.

::solution
Angles A and B add up to $360^\circ-72^\circ=288^\circ$ and angle A is twice angle B, so angle B is $96^\circ$ and angle A is $192^\circ$.

Hence the numbers of people are

$$\frac{192}{360}\cdot120=64,\qquad \frac{96}{360}\cdot120=32,\qquad \frac{72}{360}\cdot120=24.$$

So group A has $64$ people, group B $32$ and group C $24$.

**Answer.** $64$, $32$, $24$.
:::

## Mini test

:::quiz
::mc
A value has frequency $9$ in a data set of size $36$. The relative frequency of that value is
A. $9\%$.
B. $25\%$.
C. $4\%$.
D. $75\%$.
::key B
$\dfrac{9}{36}\cdot100\%=25\%$. A uses the frequency as a percentage, C works out $36\div9$, D is the remaining part $100\%-25\%$.

::mc
In a data set of size $50$, a value has relative frequency $30\%$. The frequency of that value is
A. $30$.
B. $20$.
C. $35$.
D. $15$.
::key D
$m=50\cdot30\%=15$. A uses the percentage as the frequency, B works out $50-30$, C is the frequency of the rest, $50-15$.

::mc
In a pie chart, the sector for a relative frequency of $15\%$ has angle at the centre
A. $54^\circ$.
B. $15^\circ$.
C. $27^\circ$.
D. $5.4^\circ$.
::key A
$15\%\cdot360^\circ=54^\circ$. B uses the percentage as the angle, C multiplies by $180^\circ$ instead of $360^\circ$, D wrongly turns $15\%$ into $0.015$.

::mc
To show clearly what part of the whole each group makes up, the best choice is
A. a line graph.
B. a frequency table.
C. a pie chart.
D. the original list of data.
::key C
The whole circle stands for $100\%$, so each sector shows at once the share of its group. A line graph (A) shows a trend; a frequency table (B) and the data list (D) give numbers but no picture of "part of the whole".

::tf
A data set of size $80$ has four groups with relative frequencies $35\%$, $25\%$, $x\%$, $15\%$. Decide whether each statement is true or false.
a) $x=25$.
b) The frequency of the first group is $35$.
c) The sector of the fourth group has an angle at the centre of $54^\circ$.
d) The third and fourth groups have a total frequency of $30$.
::key T F T F
a) True: $100-35-25-15=25$. b) False: $80\cdot35\%=28$. c) True: $15\%\cdot360^\circ=54^\circ$. d) False: $80\cdot40\%=32$.

::sa
A value has frequency $18$ and relative frequency $12\%$. Find the sample size.
::key 150
$n=18\div0.12=150$.

::sa
A sector of a pie chart has an angle at the centre of $126^\circ$. What is the relative frequency of that group, as a percentage?
::key 35
$\dfrac{126}{360}=0.35=35\%$.
:::
