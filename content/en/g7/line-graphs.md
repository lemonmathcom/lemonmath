---
title: Line graphs
description: Read line graphs, draw them from a table of data, describe increases and decreases, compare two times, and know when a line graph is the right choice.
minutes: 30
---

:::goals
- Recognise a line graph and know what kind of data it shows.
- Read values from a line graph and describe whether the trend is rising, falling or constant.
- Draw a line graph from a table of data.
- Compare values at two times and find the change and the average change.
:::

On a summer day Hà puts a thermometer in the yard and writes down the temperature every two hours, from 6 a.m. to 6 p.m. Her table looks like this (made-up data):

| Time | 6 | 8 | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|
| Temperature (°C) | 24 | 26 | 29 | 33 | 34 | 31 | 28 |

From the table you can say at once that at 12 o'clock it was 33 °C. But what if someone asks how the day warmed up and cooled down, and when the temperature rose fastest? You would have to compare pair after pair of numbers, which is tiring. Is there a way to see the whole story of the day at a single glance?

There is, and you have met it before: hospital charts, river levels in the flood season and a shop's takings are all drawn this way. In the last lesson, bar charts helped us compare separate items. This lesson helps us follow **one quantity as it changes over time**.

## Line graphs

### Exploring: from a table to a broken line

First we look at how much the temperature changes every two hours:

| Interval | 6–8 | 8–10 | 10–12 | 12–14 | 14–16 | 16–18 |
|---|---|---|---|---|---|---|
| Change (°C) | +2 | +3 | +4 | +1 | −3 | −3 |

In the morning the temperature rises, with bigger rises until 12 o'clock, then a smaller one; in the afternoon it falls. Now we draw that story. Each reading becomes a point: the horizontal coordinate is the time and the vertical coordinate is the temperature. Then we join consecutive points with straight line segments.

:::graph Temperature in Hà's yard (°C) by time of day
alt: Line graph of temperature by hour: it rises from 24 degrees at 6 o'clock to 34 degrees at 14 o'clock, then falls to 28 degrees at 18 o'clock
x: 0..20
y: 0..38
shape: free
segment: (6, 24) (8, 26)
segment: (8, 26) (10, 29)
segment: (10, 29) (12, 33)
segment: (12, 33) (14, 34)
segment: (14, 34) (16, 31)
segment: (16, 31) (18, 28)
point: (6, 24) "24" above
point: (8, 26) "26" above
point: (10, 29) "29" above
point: (12, 33) "33" above
point: (14, 34) "34" above
point: (16, 31) "31" above
point: (18, 28) "28" above
:::

Now you can see it straight away: the line climbs in the morning, peaks at 14 o'clock and then goes down. The steeper a segment is, the faster the temperature changes there. This kind of picture is called a line graph.

:::definition Line graph
A **line graph** shows how a quantity changes over time. Each data value is a **point**: its horizontal coordinate is the time and its vertical coordinate is the value of the quantity. Consecutive points are joined by **straight line segments**.
:::

**Going deeper.** A segment that goes up shows an increase, one that goes down shows a decrease, and a horizontal one shows no change. When the time intervals are equal, a steeper segment means a faster change. One thing to remember: we only measured at the times recorded. The part of a segment between two points helps the eye follow the trend, but a value read from it is an estimate, not a measurement.

A line graph does not replace a bar chart. A bar chart suits comparing separate items (sports, classes). A line graph suits data in time order (hour by hour, month by month, week by week).

## Reading and describing a line graph

:::example Reading values from a graph
Look at the graph of the temperature in Hà's yard.

a) What was the temperature at 10 o'clock?

b) What was the highest temperature, and when was it recorded?

c) During which periods does the temperature rise, and during which does it fall?

**Solution.** a) The point with horizontal coordinate $10$ has vertical coordinate $29$. So at 10 o'clock the temperature was $29$ °C.

b) The highest point has horizontal coordinate $14$ and vertical coordinate $34$. So the highest temperature was $34$ °C, recorded at 14 o'clock.

c) The segments that go up run from 6 o'clock to 14 o'clock, so the temperature rises from 6 to 14 o'clock. The segments that go down run from 14 o'clock to 18 o'clock, so the temperature falls from 14 to 18 o'clock.

Hence a) $29$ °C; b) $34$ °C at 14 o'clock; c) rising from 6 to 14 o'clock, falling from 14 to 18 o'clock.
:::

Now that you can read single points, we compare two times and work out the change.

:::example Comparing two times
Use the same graph of temperatures.

a) By how many degrees was the temperature at 14 o'clock higher than at 6 o'clock?

b) In which two-hour interval did the temperature rise the most?

c) Estimate the temperature at 11 o'clock.

**Solution.** a) The temperature at 14 o'clock is $34$ °C and at 6 o'clock it is $24$ °C. We have $34-24=10$. So the temperature at 14 o'clock was $10$ °C higher than at 6 o'clock.

b) The rises in the intervals are $26-24=2$; $29-26=3$; $33-29=4$; $34-33=1$. The greatest rise is $4$ °C, in the interval from 10 to 12 o'clock. This is also the steepest segment in the rising part of the graph.

c) 11 o'clock lies between 10 o'clock ($29$ °C) and 12 o'clock ($33$ °C). If the temperature rises steadily over these two hours, then at 11 o'clock it is
$$\dfrac{29+33}{2}=31\ (\text{°C}).$$

Hence a) $10$ °C; b) 10 to 12 o'clock, a rise of $4$ °C; c) about $31$ °C.

**Remark.** The answer to part c) is only an estimate, because we do not know whether the temperature really rose steadily.
:::

## Drawing a line graph

:::tip Steps for drawing a line graph
1. Draw a horizontal axis for time, with equally spaced marks if the time intervals are equal; draw a vertical axis for the values, with evenly spaced marks and the unit written.
2. For each data value, mark the point whose horizontal coordinate is the time and whose vertical coordinate is the value.
3. Join consecutive points in time order with straight line segments.
4. Write the value beside each point if needed, and give the graph a title.
:::

:::example Drawing a graph from a table
The takings of a bubble-tea shop in the first five months of the year are as follows (made-up data):

| Month | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Takings (million đồng) | 40 | 35 | 45 | 55 | 60 |

Describe how to draw a line graph of this table, and describe the trend.

**Solution.** Draw a horizontal axis with the months $1$; $2$; $3$; $4$; $5$ equally spaced. The largest value is $60$, so draw the vertical axis from $0$ to $70$, with each mark standing for $10$ million đồng, and write the unit "million đồng".

Mark the five points $(1, 40)$, $(2, 35)$, $(3, 45)$, $(4, 55)$, $(5, 60)$ and join consecutive points with line segments. This gives the graph below.

From month 1 to month 2 the takings fall by $40-35=5$ (million đồng). From month 2 onwards the takings rise every month.

Hence the graph has the five points above; the takings dip slightly in month 2, then rise from month 2 to month 5.
:::

:::graph Takings of the bubble-tea shop (million đồng) by month
alt: Line graph of takings: 40 in month 1, falling to 35 in month 2, then rising to 45, 55 and 60 in months 3, 4 and 5
x: 0..6
y: 0..70
shape: free
segment: (1, 40) (2, 35)
segment: (2, 35) (3, 45)
segment: (3, 45) (4, 55)
segment: (4, 55) (5, 60)
point: (1, 40) "40" above
point: (2, 35) "35" below
point: (3, 45) "45" above
point: (4, 55) "55" above
point: (5, 60) "60" above
:::

In this graph the segment from month 3 to month 4 is steeper than the one from month 4 to month 5, because the rises are $10$ and $5$ million đồng.

## A real-life problem

For problems with many numbers, we work in four steps: understand, plan, solve, look back.

:::example Height of a bean seedling
Minh sows a bean seed and measures the height of the seedling at the start of each week (made-up data):

| Week | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Height (cm) | 3 | 5 | 9 | 14 | 16 |

a) In which week did the plant grow the most?

b) From week 0 to week 4, by how many centimetres did the plant grow per week on average?

c) Should Minh use the graph to guess the plant's height in week 10?

**Solution.**

*Understand.* There are five readings, one week apart. We must compare the growth in consecutive weeks, find the average growth, and think about predicting far ahead.

*Plan.* The growth in one week is the difference between two consecutive values. The average growth is the total growth divided by the number of weeks.

*Solve.* a) The growth in each week is $5-3=2$; $9-5=4$; $14-9=5$; $16-14=2$ (cm). The greatest growth is $5$ cm, from week 2 to week 3.

b) After $4$ weeks the plant has grown $16-3=13$ (cm). On average, each week it grew
$$\dfrac{13}{4}=3.25\ (\text{cm}).$$

c) The graph only has data up to week 4, so there is not enough evidence to predict the height in week 10 accurately.

Hence a) from week 2 to week 3 (a growth of $5$ cm); b) $3.25$ cm; c) no.

*Look back.* The number $3.25$ is only an average: in no week did the plant grow exactly $3.25$ cm. In the last week the segment has already flattened ($+2$ cm), which shows that the plant does not keep growing fast for ever. If we extended the trend to week 10, the result could be far off. How far ahead do you think a line graph lets us predict?
:::

:::graph Height of the bean seedling (cm) by week
alt: Line graph of the seedling's height rising from 3 cm in week 0 to 16 cm in week 4, steepest between week 2 and week 3
x: 0..5
y: 0..18
shape: free
segment: (0, 3) (1, 5)
segment: (1, 5) (2, 9)
segment: (2, 9) (3, 14)
segment: (3, 14) (4, 16)
point: (0, 3) "3" above
point: (1, 5) "5" above
point: (2, 9) "9" above
point: (3, 14) "14" above
point: (4, 16) "16" above
:::

The last example is something every family meets: the monthly electricity bill.

:::example A family's electricity bill
The electricity bills of Mai's family in the first six months of the year are (made-up data):

| Month | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Bill (thousand đồng) | 450 | 420 | 480 | 590 | 720 | 690 |

a) Which month has the highest bill and which the lowest?

b) By how many thousand đồng did the bill rise from month 2 to month 5?

c) What can you say about the trend of the bill, and why might it look like this?

**Solution.** a) The greatest value is $720$, in month 5; the least is $420$, in month 2. So the bill is highest in month 5 and lowest in month 2.

b) We have $720-420=300$. So from month 2 to month 5 the bill rose by $300$ thousand đồng.

c) The changes month by month are $-30$; $+60$; $+110$; $+130$; $-30$. The bill rises every month from month 2 to month 5, rising fastest in month 5 (by $130$ thousand đồng), then falls slightly in month 6.

Hence a) highest in month 5, lowest in month 2; b) $300$ thousand đồng; c) the bill rises sharply in the hot months.

**Remark.** The graph tells us *when* the bill rises, but not *why*. Perhaps the family uses fans and air-conditioning more in hot weather, but to be sure we would need more information, such as how many hours each appliance is used.
:::

:::warning Common mistakes
- **Uneven scale on an axis.** Wrong: the vertical axis is labelled $20$; $25$; $30$; $40$ with equally spaced marks. Why it is wrong: one gap stands for $5$ and another for $10$, so the steepness of the segments is distorted. Right: use an even scale, $20$; $25$; $30$; $35$; $40$.
- **Joining the wrong points.** Wrong: joining points out of time order, or joining the first point to the origin $O$. Why it is wrong: such a segment does not stand for any period of time. Right: join only consecutive points, in time order.
- **Using it for data without a time order.** Wrong: joining favourite sports with line segments. Why it is wrong: there is nothing "between" football and swimming, so the segment means nothing. Right: use a bar chart.
- **Treating a value between two points as a measurement.** Wrong: "at 11 o'clock the temperature was definitely $31$ °C". Why it is wrong: we only measured at 10 and 12 o'clock. Right: say "about $31$ °C".
:::

**Connection.** This lesson builds on the pictograms and bar charts you already know, and adds one important idea: time order. When you read a line graph you practise seeing one quantity depending on another, which is the spirit of the functions and graphs you will meet later.

## Key terms

:::terms
- line graph | biểu đồ đoạn thẳng
- horizontal axis | trục ngang
- vertical axis | trục đứng
- plotted point | điểm biểu diễn
- joining line segment | đoạn thẳng nối
- point in time | thời điểm
- trend | xu hướng
- increase | tăng
- decrease | giảm
- unchanged (constant) | không đổi
- change | mức thay đổi
:::

## Summary

- A line graph shows how a quantity changes over time: each data value is a point, and consecutive points are joined by line segments.
- A segment going up means an increase, going down a decrease, horizontal no change. For equal time intervals, a steeper segment means a faster change.
- The change between two times is the difference of the two values; the average change is the total change divided by the number of intervals.
- When drawing: use even scales, write the unit, and join only consecutive points in time order.
- A value between two points is only an estimate; do not predict far beyond the data.

The question at the start now has an answer: that day was hottest at 14 o'clock ($34$ °C), and the temperature rose fastest between 10 and 12 o'clock. The best way to remember all this is to draw a graph from your own data, such as the temperature or the number of pages you read each day.

## Practice

Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Use the graph of the temperature in Hà's yard.

a) What was the temperature at 16 o'clock?

b) At which times was the temperature above $30$ °C?

c) By how many degrees was the temperature at 18 o'clock lower than at 12 o'clock?

::hint
**What you need:** read the vertical coordinate of the point for each time on the horizontal axis.

**Steps:**
1. a) Find the point with horizontal coordinate $16$.
2. b) List the values greater than $30$ in the table.
3. c) Subtract the temperature at 18 o'clock from the temperature at 12 o'clock.

::solution
a) The point with horizontal coordinate $16$ has vertical coordinate $31$. So at 16 o'clock the temperature was $31$ °C.

b) The temperatures greater than $30$ are $33$ (12 o'clock), $34$ (14 o'clock) and $31$ (16 o'clock). So the temperature was above $30$ °C at 12, 14 and 16 o'clock.

c) We have $33-28=5$. So the temperature at 18 o'clock was $5$ °C lower than at 12 o'clock.

**Answer.** a) $31$ °C; b) 12, 14 and 16 o'clock; c) $5$ °C.
:::

:::exercise
The numbers of books borrowed from a school library from Monday to Friday of one week are (made-up data):

| Day | Monday | Tuesday | Wednesday | Thursday | Friday |
|---|---|---|---|---|---|
| Books borrowed | 20 | 35 | 30 | 50 | 40 |

a) On which day were the most books borrowed?

b) From Tuesday to Wednesday, did the number of books borrowed rise or fall, and by how many?

c) Between which two consecutive days was the rise the greatest?

::hint
**What you need:** the change between two consecutive days is the later value minus the earlier value.

**Steps:**
1. a) Find the largest number in the table.
2. b) Work out $30-35$ and look at its sign.
3. c) Work out the changes for the four intervals and pick the greatest rise.

::solution
a) The largest number is $50$, on Thursday. So the most books were borrowed on Thursday.

b) We have $30-35=-5$. So from Tuesday to Wednesday the number of books borrowed fell by $5$.

c) The changes in the intervals are $35-20=15$; $30-35=-5$; $50-30=20$; $40-50=-10$. The greatest rise is $20$ books, from Wednesday to Thursday.

**Answer.** a) Thursday; b) a fall of $5$ books; c) Wednesday to Thursday, a rise of $20$ books.
:::

:::exercise
The weight of a puppy in its first six months is as follows (made-up data):

| Month | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Weight (kg) | 2 | 3 | 6 | 6 | 7 | 8 |

a) Describe how to draw a line graph of this table.

b) During which period did the puppy's weight stay the same?

c) Which segment is the steepest?

::hint
**What you need:** the steps for drawing a line graph; a horizontal segment means no change, and the steepest segment is the greatest rise.

**Steps:**
1. a) The largest value is $8$, so take the vertical axis from $0$ to $8$.
2. b) Find two consecutive months with the same weight.
3. c) Work out the change for each interval.

::solution
a) To draw the line graph, proceed as follows.

Draw a horizontal axis with the months $1$ to $6$ equally spaced. Draw a vertical axis from $0$ to $8$, each mark standing for $1$ kg, and write the unit "kg".

Mark the points $(1, 2)$, $(2, 3)$, $(3, 6)$, $(4, 6)$, $(5, 7)$, $(6, 8)$ as pairs (month, weight).

Join consecutive points with line segments and give the graph a title.

b) The weight in months $3$ and $4$ is $6$ kg in both, so the segment joining $(3, 6)$ and $(4, 6)$ is horizontal.

So the puppy's weight stays the same from month $3$ to month $4$.

c) The rise in weight in each interval is:
$$3-2=1;\quad 6-3=3;\quad 6-6=0;\quad 7-6=1;\quad 8-7=1\ (\text{kg}).$$

The greatest rise is $3$ kg, in the interval from month $2$ to month $3$. The months are equally spaced on the horizontal axis, so the segment with the greatest rise is the steepest.

So the segment from month $2$ to month $3$ is the steepest.

**Answer.** b) From month 3 to month 4; c) the segment from month 2 to month 3.
:::

:::exercise
Which of the following data should be shown on a line graph? Why?

a) The number of students in each class of Year 7.

b) The outdoor temperature measured every hour during a day.

c) The number of pages Lan reads each day for a week.

d) The favourite sport of the students in a group.

::hint
**What you need:** a line graph is for data that changes over time; a bar chart is for comparing separate items.

**Steps:**
1. For each set of data, ask: are the values in time order?
2. If not, does a segment between two points mean anything?

::solution
a) The classes are separate items with no time order, so use a bar chart.

b) The temperature is measured hour by hour, in time order, so use a line graph.

c) The number of pages read each day is in time order, so use a line graph.

d) The sports are separate items, so use a bar chart (or a pictogram).

Hence the data in b) and c) should be shown on a line graph.

**Answer.** b) and c).
:::

:::exercise
The water used by a household in the first six months of the year is as follows (made-up data):

| Month | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Water (m³) | 12 | 14 | 13 | 18 | 20 | 19 |

a) In which month was the most water used?

b) What was the greatest rise in water used from one month to the next, in cubic metres, and in which month did it happen?

c) Find the mean amount of water used per month. Which months used more than the mean?

::hint
**What you need:** the mean is the sum of the values divided by how many values there are.

**Steps:**
1. a) Find the largest value.
2. b) Work out the difference between consecutive values.
3. c) Add the six values, divide by $6$, then compare each month.

::solution
a) The largest value is $20$, in month 5. So the most water was used in month 5.

b) The changes are $+2$; $-1$; $+5$; $+2$; $-1$ (m³). The greatest rise is $5$ m³, from month 3 to month 4.

c) The total amount of water is $12+14+13+18+20+19=96$ (m³). The mean per month is $96\div6=16$ (m³). The months with more than $16$ are month 4 ($18$), month 5 ($20$) and month 6 ($19$).

**Answer.** a) Month 5; b) $5$ m³, from month 3 to month 4; c) $16$ m³; months 4, 5 and 6.
:::

:::exercise
The number of motorbikes passing a crossroads in the morning is as follows (made-up data):

| Time | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| Motorbikes | 120 | 300 | 240 | 150 | 130 |

a) At what time were there the most motorbikes, and how many?

b) By how many did the number fall from 7 to 9 o'clock? What percentage of the number at 7 o'clock is this fall?

c) In which interval did the number rise the most?

::hint
**What you need:** $a$ as a percentage of $b$ is $\dfrac{a}{b}\cdot100\%$.

**Steps:**
1. a) Find the largest value.
2. b) Work out $300-150$, then divide by $300$ and multiply by $100\%$.
3. c) Work out the change for each interval.

::solution
a) The largest number is $300$, at 7 o'clock. So there were the most motorbikes at 7 o'clock: $300$.

b) We have $300-150=150$. The fall is
$$\dfrac{150}{300}\cdot100\%=50\%$$
of the number at 7 o'clock.

c) The changes in the intervals are $180$; $-60$; $-90$; $-20$. The number only rises in the interval from 6 to 7 o'clock, by $180$.

**Answer.** a) 7 o'clock, $300$ motorbikes; b) $150$ motorbikes, $50\%$; c) from 6 to 7 o'clock.
:::

:::exercise
A cyclist records the distance travelled since the start (made-up data):

| Time (hours) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Distance (km) | 0 | 12 | 24 | 24 | 36 |

a) During which period did the cyclist stop for a rest? How can you tell?

b) What was the cyclist's speed in the first hour, in kilometres per hour?

c) Suppose the cyclist rode steadily during the second hour. Estimate the distance covered after $1.5$ hours.

::hint
**What you need:** an unchanged distance means the cyclist is standing still; speed is distance divided by time.

**Steps:**
1. a) Find two consecutive times with the same distance.
2. b) Divide $12$ by $1$ hour.
3. c) $1.5$ hours lies between $1$ hour and $2$ hours.

::solution
a) The distance after $2$ hours and after $3$ hours is $24$ km in both cases, so the segment joining those two points is horizontal. So the cyclist rested from hour $2$ to hour $3$.

b) In the first hour the cyclist covered $12$ km, so the speed is $12\div1=12$ (km/h).

c) If the cyclist rode steadily in the second hour, then after $1.5$ hours the distance covered is
$$\dfrac{12+24}{2}=18\ (\text{km}).$$

**Answer.** a) From hour $2$ to hour $3$; b) $12$ km/h; c) about $18$ km.
:::

:::exercise
The number of students arriving late in a class over five consecutive weeks is (made-up data):

| Week | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Students late | 6 | 4 | 5 | 2 | 1 |

a) How many late arrivals were there altogether in the five weeks?

b) In which interval did the number of late students fall the most?

c) By what percentage did the number of late students in week 5 fall compared with week 1? (Round to the nearest whole number.)

::hint
**What you need:** the percentage fall is the fall divided by the starting value, then multiplied by $100\%$.

**Steps:**
1. a) Add the five values.
2. b) Work out the difference between consecutive values and find the greatest fall.
3. c) Work out $(6-1)\div6$.

::solution
a) We have $6+4+5+2+1=18$. So there were $18$ late arrivals altogether.

b) The changes in the intervals are $-2$; $+1$; $-3$; $-1$. The greatest fall is $3$ students, from week 3 to week 4.

c) From week 1 to week 5 the number of late students fell by $6-1=5$, which is a fall of
$$\dfrac{5}{6}\cdot100\%\approx83.3\%\approx83\%.$$

**Answer.** a) $18$; b) from week 3 to week 4; c) about $83\%$.
:::

:::exercise Challenge
The temperatures at several times of day in two cities $A$ and $B$ are as follows (made-up data):

| Time | 6 | 9 | 12 | 15 | 18 |
|---|---|---|---|---|---|
| City $A$ (°C) | 20 | 25 | 30 | 32 | 27 |
| City $B$ (°C) | 22 | 24 | 27 | 28 | 26 |

a) At what time is the difference in temperature between the two cities greatest, and what is it?

b) For each city, what is the difference between the highest and lowest temperature of the day? Which city has the larger variation during the day, and how many times as large is it?

::hint
**What you need:** the difference of two numbers is the larger minus the smaller.

**Steps:**
1. a) Work out the difference between $A$ and $B$ at each time.
2. b) Find the largest and smallest value for each city.

::solution
a) The differences at $6$; $9$; $12$; $15$; $18$ o'clock are $2$; $1$; $3$; $4$; $1$ (°C). The greatest difference is $4$ °C, at 15 o'clock.

b) City $A$ has a highest temperature of $32$ °C and a lowest of $20$ °C, a difference of $32-20=12$ (°C). City $B$ has a highest of $28$ °C and a lowest of $22$ °C, a difference of $28-22=6$ (°C). We have $12\div6=2$.

So city $A$ has the larger variation during the day, $2$ times that of city $B$.

**Answer.** a) 15 o'clock, $4$ °C; b) $A$: $12$ °C, $B$: $6$ °C; $A$ is $2$ times as large.
:::

## Mini test

:::quiz
::mc NB
Which of the following data is best shown on a line graph?
A. The outdoor temperature measured every hour during a day.
B. The favourite colours of the students in a group.
C. How much students like each school subject.
D. The number of students in each class of Year 7.
::key A
Only the hourly temperature is data in time order. A, B and C are separate items, so a bar chart is better.

::mc NB
A shop's takings over four consecutive months are $12$; $15$; $15$; $11$ (million đồng). In which interval did the takings fall?
A. From month 1 to month 2.
B. From month 3 to month 4.
C. From month 2 to month 3.
D. In all three intervals.
::key B
$15\to11$ is a fall of $4$ million đồng. B is a rise of $3$ million đồng, and C is no change (a horizontal segment).

::mc TH
The temperatures at 6, 9, 12 and 15 o'clock are $22$ °C, $26$ °C, $30$ °C and $28$ °C. By how many degrees did the temperature rise from 6 to 12 o'clock?
A. $4$ °C.
B. $30$ °C.
C. $8$ °C.
D. $2$ °C.
::key C
$30-22=8$. A only counts the interval from 6 to 9 o'clock; C confuses the change with the temperature at 12 o'clock; D is the fall from 12 to 15 o'clock.

::mc NB
Which statement about drawing a line graph is correct?
A. The points can be joined in any order.
B. The marks on the vertical axis need not stand for equal amounts.
C. The first point must be joined to the origin $O$.
D. The points are joined one after another in time order by line segments.
::key D
This is the definition of a line graph. A and C are the mistake of joining the wrong points; B is the mistake of an uneven scale.

::tf NB TH NB TH
The numbers of people entering a park at 7, 8, 9 and 10 o'clock are $50$; $80$; $120$; $100$. Decide whether each statement is true or false.
a) At 8 o'clock, $120$ people entered the park.
b) From 7 to 9 o'clock, the number of people rose by $70$.
c) The segment joining 9 o'clock and 10 o'clock goes down.
d) The most people entered at 10 o'clock.
::key F T T F
a) False: at 8 o'clock there were $80$ people; $120$ is the number at 9 o'clock. b) True: $120-50=70$. c) True: from $120$ down to $100$. d) False: the most were at 9 o'clock.

::sa VD
The numbers of books a library lent on five consecutive days are $24$; $30$; $27$; $36$; $33$. What is the greatest rise between two consecutive days, in books?
::key 9
The changes are $+6$; $-3$; $+9$; $-3$. The greatest rise is $9$ books (from the third day to the fourth).

::sa VD
The height of a plant at the start of weeks 0, 1, 2, 3 is $4$ cm, $7$ cm, $11$ cm and $14$ cm. On average, by how many centimetres does the plant grow each week? (Give your answer to 1 decimal place.)
::key 3.3
After $3$ weeks the plant has grown $14-4=10$ (cm), so on average it grows $10\div3\approx3.3$ (cm) per week.
:::
