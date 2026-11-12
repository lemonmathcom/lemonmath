---
title: Analysing statistical data from charts
description: Read and compare data on charts, calculate percentage change, describe trends and spot misleading charts so that you draw sound conclusions.
minutes: 25
---

:::goals
- Read data from bar charts, double bar charts, pie charts and line graphs.
- Compare data using differences and percentages; calculate percentage increase and decrease.
- Describe trends and draw conclusions from charts.
- Recognise charts that can mislead (for example an axis that does not start at $0$).
:::

An advertisement says: "This quarter's sales are three times last quarter's!", with a chart in which one bar is three times as tall as the other. But the real figures are only $52$ million dong and $56$ million dong. Is the chart telling the truth, or is it fooling the eye? Drawing a chart is one skill; reading one with a clear head is another, and that is what this lesson trains.

## Let's explore

Suppose two drink shops, A and B, record the number of drinks sold (in thousands) over $5$ months. Shop A sells $20$; $24$; $28$; $32$; $36$. Shop B sells $30$; $31$; $29$; $32$; $30$. We draw both lines on one chart.

:::graph Drinks sold by two shops (thousands)
alt: Two lines over months 1 to 5; shop A rises steadily from 20 to 36, shop B stays close to 30
x: 0..6
y: 15..40
segment: (1, 20) (2, 24)
segment: (2, 24) (3, 28)
segment: (3, 28) (4, 32)
segment: (4, 32) (5, 36)
segment: (1, 30) (2, 31)
segment: (2, 31) (3, 29)
segment: (3, 29) (4, 32)
segment: (4, 32) (5, 30)
label: (5.3, 36) "A"
label: (5.3, 30) "B"
:::

The line labelled A is shop A and the line labelled B is shop B. Shop A rises steadily, while shop B hardly moves. In month $1$ shop B sold $10$ thousand more, but in month $5$ shop A sold $6$ thousand more. The two lines meet in month $4$ at $32$ thousand each. What can we say for certain from these observations?

## Reading and comparing data

When you meet a chart, follow these steps.

:::note Steps for analysing a chart
1. Read the **title**, the **units**, and check where the **axis** starts.
2. Read the values you need (how tall a bar is, what percentage a sector shows).
3. Compare using the **difference** (how much more or less) or a **percentage** (what fraction of the other value).
4. State a remark or conclusion, saying which data it rests on.
:::

When comparing over time we usually use the **percentage change**:
$$\text{percentage change}=\frac{\text{new value}-\text{old value}}{\text{old value}}\cdot100\%.$$
A positive result is an increase, a negative one a decrease. We divide by the **old** value because we want the change relative to the starting level.

:::example Reading a pie chart
A pie chart shows the breakfast choices of $200$ students at the canteen: bread rolls $45\%$, sticky rice $30\%$, noodle soup $15\%$, other $10\%$. Find the number of students in each group. Which group is twice as large as the noodle soup group?

**Solution.** The number of students in each group is the percentage times $200$:
$$200\cdot0.45=90,\quad 200\cdot0.3=60,\quad 200\cdot0.15=30,\quad 200\cdot0.1=20.$$
We see that $60=2\cdot30$, so the sticky rice group is twice as large as the noodle soup group.

So bread rolls $90$ students, sticky rice $60$, noodle soup $30$, other $20$; the sticky rice group is twice the noodle soup group.
:::

:::example Comparing two shops
Using the chart in the exploration, find: a) the difference between the drinks sold by A and B in month $5$; b) the percentage change of each shop from month $1$ to month $5$.

**Solution.** a) In month $5$, shop A sold $36$ thousand and shop B sold $30$ thousand. We have $36-30=6$ (thousand).

b) Shop A: $\dfrac{36-20}{20}\cdot100\%=80\%$. Shop B: $\dfrac{30-30}{30}\cdot100\%=0\%$.

So in month $5$ shop A sold $6$ thousand more than shop B; from month $1$ to month $5$ shop A rose by $80\%$ and shop B did not change.
:::

A double bar chart puts two bars side by side for each group, so we can compare two data sets.

:::diagram Academic results of classes 8A and 8B
alt: A double bar chart; Excellent has 12 students in 8A and 8 in 8B, Good has 20 and 22, Pass has 8 and 10
point A1 1,0 ""
point A2 2,0 ""
point A3 2,12 ""
point A4 1,12 ""
point B1 2,0 ""
point B2 3,0 ""
point B3 3,8 ""
point B4 2,8 ""
point C1 4,0 ""
point C2 5,0 ""
point C3 5,20 ""
point C4 4,20 ""
point D1 5,0 ""
point D2 6,0 ""
point D3 6,22 ""
point D4 5,22 ""
point E1 7,0 ""
point E2 8,0 ""
point E3 8,8 ""
point E4 7,8 ""
point F1 8,0 ""
point F2 9,0 ""
point F3 9,10 ""
point F4 8,10 ""
polygon A1 A2 A3 A4
polygon B1 B2 B3 B4
polygon C1 C2 C3 C4
polygon D1 D2 D3 D4
polygon E1 E2 E3 E4
polygon F1 F2 F3 F4
label 1.5,13.5 "12"
label 2.5,9.5 "8"
label 4.5,21.5 "20"
label 5.5,23.5 "22"
label 7.5,9.5 "8"
label 8.5,11.5 "10"
label 1.5,-1.5 "8A"
label 2.5,-1.5 "8B"
label 4.5,-1.5 "8A"
label 5.5,-1.5 "8B"
label 7.5,-1.5 "8A"
label 8.5,-1.5 "8B"
label 2,-3 "Excellent"
label 5,-3 "Good"
label 8,-3 "Pass"
:::

:::example Reading a double bar chart
Each of classes 8A and 8B has $40$ students. Using the chart above, compare the proportions of excellent and good students in the two classes.

**Solution.** The classes have the same size, so comparing numbers or proportions both work; we use proportions to be clear.

Excellent: class 8A has $\dfrac{12}{40}=30\%$, class 8B has $\dfrac{8}{40}=20\%$. Good: class 8A has $\dfrac{20}{40}=50\%$, class 8B has $\dfrac{22}{40}=55\%$.

So class 8A has the higher proportion of excellent students ($30\%$ against $20\%$), while class 8B has the higher proportion of good students ($55\%$ against $50\%$).
:::

## Charts that can mislead

The eye compares the **heights of bars**, so if the vertical axis does not start at $0$, a small difference looks far bigger than it is. Let us return to the advertisement at the start.

:::diagram Sales in two quarters (vertical axis starts at 50)
alt: A bar chart with two bars; the quarter 1 bar, labelled 52, is very short and the quarter 2 bar, labelled 56, is three times as tall because the vertical axis starts at 50, not 0
point A1 1,0 ""
point A2 2,0 ""
point A3 2,2 ""
point A4 1,2 ""
point B1 3,0 ""
point B2 4,0 ""
point B3 4,6 ""
point B4 3,6 ""
polygon A1 A2 A3 A4
polygon B1 B2 B3 B4
label 1.5,2.7 "52"
label 3.5,6.7 "56"
label 0.2,0 "50"
label 1.5,-0.7 "Quarter 1"
label 3.5,-0.7 "Quarter 2"
:::

:::example Spotting a misleading chart
Sales were $52$ million dong in quarter 1 and $56$ million dong in quarter 2. In the chart above the vertical axis starts at $50$. How many times as tall does the quarter 2 bar look? By what percentage did sales really rise?

**Solution.** Bar heights are measured from the mark $50$: the quarter 1 bar is $52-50=2$ tall and the quarter 2 bar is $56-50=6$ tall. We have $\dfrac62=3$, so the quarter 2 bar looks three times as tall.

The real percentage increase is $\dfrac{56-52}{52}\cdot100\%\approx7.7\%$.

So the chart makes us think sales tripled, when in fact they rose by only about $7.7\%$.
:::

Two other tricks also mislead: scales that are not evenly spaced on an axis, and choosing only a period of time that supports the conclusion.

We finish with a problem that uses all four steps, reusing the electricity data from the previous lesson.

:::example By what percentage did the electricity use fall?
A family used $290$ kWh of electricity in month $4$ and $230$ kWh in month $6$ (an imagined case). By what percentage did the use fall? (Give your answer to 1 decimal place.)

**Solution.**

*Understand.* There are two values: old ($290$) and new ($230$); we need the percentage decrease.

*Plan.* Use the percentage change formula, dividing by the old value.

*Solve.* We have $\dfrac{230-290}{290}\cdot100\%=\dfrac{-60}{290}\cdot100\%\approx-20.7\%$.

*Look back.* The minus sign tells us the use fell. Dividing by the new value $230$ would give $26.1\%$, which is wrong because percentage change is always relative to the starting level. The result is reasonable: $20\%$ of $290$ is $58$, close to the real fall of $60$.

So the electricity use fell by about $20.7\%$.
:::

:::warning Mistakes to watch out for
- **Comparing counts when the totals differ.** Wrong: "class A has $12$ excellent students and class B has $15$, so class B is better" when class A has $40$ students and class B has $60$. Why it is wrong: $\dfrac{12}{40}=30\%$ but $\dfrac{15}{60}=25\%$. Right: compare using percentages.
- **Dividing by the new value when finding a percentage increase.** Wrong: from $52$ to $56$ is an increase of $\dfrac{4}{56}\approx7.1\%$. Why it is wrong: percentage change is relative to the starting level. Right: $\dfrac{4}{52}\approx7.7\%$.
- **Ignoring where the axis starts.** Wrong: concluding "sales tripled" just because one bar is three times as tall. Why it is wrong: the axis starts at $50$, not $0$. Right: read the values written on the bars before comparing.
:::

**Connections.** This lesson reuses relative frequencies and the chart types from [collecting and classifying data](lesson:g8-collecting-classifying-data), and percentages from earlier years. Chart-reading helps in every subject and whenever you read the news: always ask "what are the real figures?" before trusting the shape of a chart.

## Key terms

:::terms
- data analysis | phân tích số liệu
- trend | xu hướng
- axis | trục
- percentage change | phần trăm thay đổi
- percentage increase | phần trăm tăng
- percentage decrease | phần trăm giảm
- misleading chart | biểu đồ gây hiểu lầm
- difference | chênh lệch
- compare | so sánh
:::

## Summary

- When reading a chart: check the title, units and where the axis starts; read values; compare; then state a conclusion that cites the data.
- A difference says how much more or less; a percentage says how much relative to what level, especially when totals differ.
- Percentage change $=\dfrac{\text{new}-\text{old}}{\text{old}}\cdot100\%$: positive means an increase, negative a decrease.
- A vertical axis that does not start at $0$ makes differences look bigger than they are.
- Conclusions should rest only on what the data show.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
A pie chart shows how $150$ students chose a club: Football $40\%$, Music $30\%$, Art $20\%$, Chess $10\%$. Find the number of students in each club.

::hint
**What you need:** the number of students is the percentage times the total.

**Steps:**
1. Write each percentage as a decimal.
2. Multiply by $150$.

::solution
We have $150\cdot0.4=60$; $150\cdot0.3=45$; $150\cdot0.2=30$; $150\cdot0.1=15$.

So Football has $60$ students, Music $45$, Art $30$ and Chess $15$.

**Answer.** $60$; $45$; $30$; $15$ students.
:::

:::exercise
The temperatures (°C) at $6$ a.m., $9$ a.m., $12$ noon, $3$ p.m. and $6$ p.m. are $24$; $27$; $31$; $33$; $29$. What is the highest temperature? In which $3$-hour interval did the temperature rise the most?

::hint
**What you need:** compare using the difference between consecutive values.

**Steps:**
1. Find the greatest value.
2. Work out the differences between consecutive values.

::solution
The highest temperature is $33^\circ$C at $3$ p.m. The consecutive differences are $27-24=3$; $31-27=4$; $33-31=2$; $29-33=-4$. The greatest rise is $4^\circ$C, from $9$ a.m. to $12$ noon.

So the highest temperature is $33^\circ$C and the greatest rise was between $9$ a.m. and $12$ noon.

**Answer.** $33^\circ$C; from $9$ a.m. to $12$ noon.
:::

:::exercise
The number of members of a club rose from $40$ to $52$. Find the percentage increase.

::hint
**What you need:** percentage change $=\dfrac{\text{new}-\text{old}}{\text{old}}\cdot100\%$.

**Steps:**
1. Work out the difference $52-40$.
2. Divide by the old value $40$.

::solution
We have $\dfrac{52-40}{40}\cdot100\%=\dfrac{12}{40}\cdot100\%=30\%$.

So the membership rose by $30\%$.

**Answer.** $30\%$.
:::

:::exercise
Class 8C has $50$ students, of whom $15$ achieved the grade "Very good". Class 8D has $40$ students, of whom $12$ achieved "Very good". Which class has the higher proportion of "Very good" students?

::hint
**What you need:** when class sizes differ, compare using percentages.

**Steps:**
1. Work out the proportion for each class.
2. Compare the two proportions.

::solution
Class 8C has $\dfrac{15}{50}=30\%$; class 8D has $\dfrac{12}{40}=30\%$. The two proportions are equal.

So the two classes have the same proportion of "Very good" students ($30\%$), even though the numbers differ.

**Answer.** Equal ($30\%$).
:::

:::exercise
Two products cost $18$ thousand dong and $20$ thousand dong. A bar chart has its vertical axis starting at $16$ thousand dong. How many times as tall does the second bar look as the first? By what percentage do the real prices differ, relative to the first product (to 1 decimal place)?

::hint
**What you need:** bar heights are measured from the start of the axis.

**Steps:**
1. Work out the heights of the two bars above the mark $16$.
2. Work out $\dfrac{20-18}{18}\cdot100\%$.

::solution
The bar heights are $18-16=2$ and $20-16=4$. We have $\dfrac42=2$, so the second bar looks $2$ times as tall. The real difference is $\dfrac{20-18}{18}\cdot100\%\approx11.1\%$.

So the chart makes us think the price doubles, when in fact it differs by only about $11.1\%$.

**Answer.** $2$ times; $11.1\%$.
:::

:::exercise
Suppose the rainfall (mm) in a region in months $6$, $7$, $8$, $9$ is $100$; $180$; $250$; $200$. Find the percentage increase from month $6$ to month $8$ and the percentage decrease from month $8$ to month $9$.

::hint
**What you need:** percentage change $=\dfrac{\text{new}-\text{old}}{\text{old}}\cdot100\%$.

**Steps:**
1. From month $6$ to month $8$: old is $100$, new is $250$.
2. From month $8$ to month $9$: old is $250$, new is $200$.

::solution
From month $6$ to month $8$: $\dfrac{250-100}{100}\cdot100\%=150\%$. From month $8$ to month $9$: $\dfrac{200-250}{250}\cdot100\%=-20\%$.

So the rainfall rose by $150\%$, then fell by $20\%$.

**Answer.** Increase $150\%$; decrease $20\%$.
:::

:::exercise
A survey of $25$ students about their favourite subject gives: Maths $10$, Literature $5$, English $5$, other $5$. Find the relative frequency and the sector angle for each subject in a pie chart.

::hint
**What you need:** the sector angle is the relative frequency times $360^\circ$.

**Steps:**
1. Divide each frequency by $25$.
2. Multiply by $360^\circ$.

::solution
Maths: $\dfrac{10}{25}=40\%$, angle $144^\circ$. Each other subject: $\dfrac{5}{25}=20\%$, angle $72^\circ$.

Check: $144+3\cdot72=360$.

**Answer.** $40\%$, $20\%$, $20\%$, $20\%$; angles $144^\circ$, $72^\circ$, $72^\circ$, $72^\circ$.
:::

:::exercise
Suppose a family's electricity bill is $600\,000$ dong, split by appliance: air conditioner $45\%$, fridge $20\%$, lighting $15\%$, other $20\%$. Find the amount for each item. If the family cuts the air conditioner's share by $20\%$, how much money is saved?

::hint
**What you need:** amount equals percentage times total; a cut of $20\%$ means taking $20\%$ of that item.

**Steps:**
1. Work out $600\,000\cdot\dfrac{p}{100}$ for each item.
2. Take $20\%$ of the air conditioner's amount.

::solution
We have: air conditioner $600\,000\cdot0.45=270\,000$; fridge $120\,000$; lighting $90\,000$; other $120\,000$ (dong). The saving is $270\,000\cdot0.2=54\,000$ (dong).

Check: $270\,000+120\,000+90\,000+120\,000=600\,000$.

So the family saves $54\,000$ dong.

**Answer.** $270\,000$; $120\,000$; $90\,000$; $120\,000$ dong; saving $54\,000$ dong.
:::

:::exercise Challenge
The sales of shop A rise from $100$ to $120$ million dong, and the sales of shop B rise from $400$ to $440$ million dong. Which shop's sales rose more in money? Which grew faster in percentage? Why do the two answers differ?

::hint
**What you need:** the difference says how much money; the percentage says how much relative to the starting level.

**Steps:**
1. Work out each shop's rise.
2. Work out each shop's percentage increase and compare.

::solution
Shop A rose by $120-100=20$ (million dong); shop B rose by $440-400=40$ (million dong), so B rose more in money. In percentage, A rose by $\dfrac{20}{100}=20\%$ and B by $\dfrac{40}{400}=10\%$, so A grew faster.

The answers differ because B starts from a much larger level: the same rise of $1$ million dong is a smaller percentage for B.

So B rose more in money, while A grew faster.

**Answer.** B rose by $40$ million dong; A grew faster ($20\%$ against $10\%$).
:::

## Mini test

:::quiz
::mc
Sales rise from $40$ to $46$ million dong. The percentage increase is
A. $15\%$.
B. $13\%$.
C. $115\%$.
D. $6\%$.
::key A
$\dfrac{46-40}{40}\cdot100\%=15\%$. A takes the difference $6$ as a percentage, B divides by the new value ($\dfrac{6}{46}\approx13\%$), C is the ratio $\dfrac{46}{40}$.

::mc
A pie chart shows that $35\%$ of $200$ students chose swimming. The number who chose swimming is
A. $35$.
B. $70$.
C. $5.7$.
D. $165$.
::key B
$200\cdot0.35=70$. A confuses the percentage with a number of students, C divides $200$ by $35$ instead of multiplying, D is the number who did not choose swimming.

::mc
A bar chart whose vertical axis starts at a value greater than $0$ can mislead because
A. the values on the bars cannot be read.
B. the bars become equal.
C. the differences between bars look bigger than they are.
D. the total of the values changes.
::key C
Bar heights are measured from the start of the axis, so small differences look like large ones. The values and the total do not change.

::mc
Class A has $9$ excellent students out of $30$, and class B has $12$ excellent students out of $48$. Which statement is true?
A. They cannot be compared.
B. Class B has the higher proportion of excellent students, because $12>9$.
C. The two classes have equal proportions.
D. Class A has the higher proportion of excellent students, because $30\%>25\%$.
::key D
$\dfrac{9}{30}=30\%$ and $\dfrac{12}{48}=25\%$. B compares counts although the class sizes differ.

::tf
The drinks sold (in thousands) over $5$ months are $20$; $24$; $28$; $32$; $36$ for shop A and $30$; $31$; $29$; $32$; $30$ for shop B. Decide whether each statement is true or false.
a) In month $3$, shop A sold more than shop B.
b) In month $4$, the two shops sold the same amount.
c) The drinks sold by shop B increased every month.
d) In month $5$, shop A sold $6$ thousand more than shop B.
::key F T F T
a) False: $28<29$. b) True: both $32$. c) False: in month $3$ it fell from $31$ to $29$. d) True: $36-30=6$.

::sa
The rainfall rose from $100$ mm to $250$ mm. By what percentage did it rise?
::key 150
$\dfrac{250-100}{100}\cdot100\%=150\%$.

::sa
The electricity use fell from $290$ kWh to $230$ kWh. What is the percentage decrease (to 1 decimal place, ignoring the minus sign)?
::key 20.7
$\dfrac{290-230}{290}\cdot100\%\approx20.7\%$.
:::
