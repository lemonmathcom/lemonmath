---
title: Probability and statistics
description: "IGCSE Mathematics Extended: tree diagrams, Venn diagrams and conditional probability, grouped mean, histograms with frequency density, cumulative frequency."
minutes: 50
---

:::goals
- Find probabilities of combined events with tree diagrams and Venn diagrams, including selection without replacement and conditional probability.
- Estimate the mean of grouped data and find the class containing the median.
- Draw and read histograms with unequal class widths using frequency density, and read cumulative frequency graphs.
:::

A bag holds $5$ red and $3$ blue sweets. You take one, eat it, and take another. What is the chance that both are the same colour? Many students multiply $\tfrac58\times\tfrac58$ for red and stop there, and they make two mistakes in one line. The second sweet comes from a bag with one sweet fewer, and "the same colour" also includes two blues.

Probability questions on IGCSE papers are rarely hard in their arithmetic. They test whether you have read the situation correctly. Statistics questions are similar: the calculations are short, but each one hides one idea, such as midpoints or frequency density, that has to be in place. This lesson takes those ideas one at a time.

## Combined events and tree diagrams

For two events, "and" usually means multiply along the branches, and "or" means add the separate outcomes. A **tree diagram** keeps this organised: write the probability on each branch, multiply along each path, and add the paths you want.

If the first item is not put back, the probabilities on the second set of branches change. That is the whole idea of **without replacement**.

:::example Two sweets
A bag holds $5$ red and $3$ blue sweets. Two sweets are taken at random without replacement. Find the probability that they are the same colour.
A. $\dfrac{13}{28}$
B. $\dfrac{17}{32}$
C. $\dfrac{15}{28}$
D. $\dfrac{5}{14}$

**Solution.** Two red: $\dfrac58\times\dfrac47=\dfrac{20}{56}$, since after one red is taken there are $4$ red among $7$ sweets.

Two blue: $\dfrac38\times\dfrac27=\dfrac{6}{56}$.

These are separate outcomes, so we add: $\dfrac{20}{56}+\dfrac{6}{56}=\dfrac{26}{56}=\dfrac{13}{28}$.

So the probability is $\dfrac{13}{28}$, answer **A**. Option B is what you get if the first sweet is put back, and option C is the probability of different colours.
:::

## Venn diagrams and conditional probability

A **Venn diagram** shows how two groups overlap. Fill it from the inside out: the overlap first, then the rest of each circle, then the region outside both circles.

**Conditional probability** asks for a probability *given* that something is already known. The known fact shrinks the group you are choosing from: $P(B\mid A)$ is the number in both $A$ and $B$ divided by the number in $A$.

:::example Football and basketball
In a class of $30$ students, $18$ play football, $12$ play basketball and $5$ play both. A student is chosen at random from those who play football. Find the probability that this student also plays basketball.

**Solution.** In the Venn diagram, the overlap is $5$, football only is $18-5=13$, basketball only is $12-5=7$, and neither is $30-13-5-7=5$.

We are told the student plays football, so we choose from those $18$ students only, and $5$ of them also play basketball.

So the probability is $\dfrac{5}{18}$, not $\dfrac{5}{30}$.
:::

## Averages from grouped data

When data are grouped, we no longer know the exact values, so we use the **midpoint** of each class as a representative value. The result is an **estimate** of the mean, and IGCSE questions use exactly that word.

:::example A grouped mean
The table shows the times, $t$ minutes, that $30$ students took to travel to school.

| Time $t$ | $0<t\le10$ | $10<t\le20$ | $20<t\le30$ | $30<t\le50$ |
|---|---|---|---|---|
| Frequency | $4$ | $10$ | $12$ | $4$ |

Calculate an estimate of the mean time, and state the class that contains the median.

**Solution.** The midpoints are $5$, $15$, $25$ and $40$. Multiply each by its frequency and add: $4\times5+10\times15+12\times25+4\times40=20+150+300+160=630$.

The estimated mean is $\dfrac{630}{30}=21$ minutes.

The median is the middle value, between the $15$th and $16$th. The first two classes hold $4+10=14$ students, so both of these lie in the class $20<t\le30$.

So the estimated mean is $21$ minutes, and the median is in the class $20<t\le30$.
:::

## Histograms and cumulative frequency

When classes have **different widths**, a bar's height cannot simply be the frequency: a wide class would look unfairly large. Instead the **area** of each bar shows the frequency, and the height is the **frequency density**:

$$\text{frequency density}=\frac{\text{frequency}}{\text{class width}}.$$

For the journey times above, the widths are $10$, $10$, $10$ and $20$, so the densities are $0.4$, $1$, $1.2$ and $0.2$.

:::graph A histogram of the journey times
alt: A histogram with bars from 0 to 10 of height 0.4, from 10 to 20 of height 1, from 20 to 30 of height 1.2, and from 30 to 50 of height 0.2; the horizontal axis is time in minutes and the vertical axis is frequency density
x: 0..55
y: 0..1.4
shape: free
fill: 0.4 ; 0 ; 0..10
fill: 1 ; 0 ; 10..20
fill: 1.2 ; 0 ; 20..30
fill: 0.2 ; 0 ; 30..50
segment: (0, 0.4) (10, 0.4)
segment: (10, 0) (10, 1)
segment: (10, 1) (20, 1)
segment: (20, 0) (20, 1.2)
segment: (20, 1.2) (30, 1.2)
segment: (30, 0) (30, 1.2)
segment: (30, 0.2) (50, 0.2)
segment: (50, 0) (50, 0.2)
:::

A **cumulative frequency** graph plots the running total against the upper end of each class. To estimate the median, read across from half the total frequency; for the quartiles, read across from one quarter and three quarters. The **interquartile range** is the upper quartile minus the lower quartile, and it describes the spread of the middle half of the data.

:::warning Common traps
- **Without replacement:** both the numerator and the denominator change on the second branch.
- **"Same colour" or "at least one":** list every path that fits, or use $1-P(\text{none})$.
- **Conditional probability:** divide by the size of the given group, not the whole total.
- **Grouped mean:** use midpoints, and call the answer an estimate.
- **Histograms:** the vertical axis is frequency density; frequency is the area of the bar.
:::

:::terms
- tree diagram | sơ đồ cây
- without replacement | không hoàn lại
- Venn diagram | biểu đồ Ven
- conditional probability | xác suất có điều kiện
- midpoint / estimate of the mean | giá trị đại diện (trung điểm) / ước lượng số trung bình
- frequency density | mật độ tần số
- cumulative frequency | tần số tích luỹ
- median / quartile / interquartile range | trung vị / tứ phân vị / khoảng tứ phân vị
:::

## Similar exercises

:::exercise
Two fair six-sided dice are rolled. Find the probability that the total is $8$.

::hint
**What you need:** there are $36$ equally likely outcomes; list the pairs with total $8$.

::solution
Each die has $6$ faces, so there are $6\times6=36$ equally likely outcomes.

The pairs with total $8$ are $(2,\ 6)$, $(3,\ 5)$, $(4,\ 4)$, $(5,\ 3)$, $(6,\ 2)$: $5$ outcomes.

So the probability is $\dfrac{5}{36}$.

**Answer.** $\dfrac{5}{36}$.
:::

:::exercise
A biased spinner lands on red with probability $0.15$. It is spun $200$ times. How many times would you expect it to land on red?

::hint
**What you need:** expected frequency $=$ probability $\times$ number of trials.

::solution
The expected number of reds is the probability multiplied by the number of spins: $0.15\times200=30$.

This is what we expect on average; the actual number in one experiment may be a little different.

So we expect about $30$ reds.

**Answer.** $30$.
:::

:::exercise
The probability that it rains on any day is $0.3$, independently of other days. Find the probability that it rains on exactly one of two days.

::hint
**What you need:** two paths on the tree: rain then dry, dry then rain.

::solution
Rain on the first day only: $0.3\times0.7=0.21$. Rain on the second day only: $0.7\times0.3=0.21$.

These are separate paths, so we add them: $0.21+0.21=0.42$.

So the probability is $0.42$.

**Answer.** $0.42$.
:::

:::exercise
The table shows the number of goals scored by a team in $20$ matches. Find the mean, the median and the mode.

| Goals | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Frequency | $3$ | $5$ | $7$ | $5$ |

::hint
**What you need:** the mean is $\dfrac{\sum fx}{\sum f}$; the median is between the $10$th and $11$th values.

::solution
The total number of goals is $0\times3+1\times5+2\times7+3\times5=34$, so the mean is $\dfrac{34}{20}=1.7$.

The running totals are $3$, $8$, $15$, $20$, so the $10$th and $11$th values are both $2$: the median is $2$. The highest frequency is $7$, for $2$ goals, so the mode is $2$.

So the mean is $1.7$, the median $2$ and the mode $2$.

**Answer.** Mean $1.7$; median $2$; mode $2$.
:::

:::exercise
In a histogram, the class $20<x\le35$ has frequency $18$. Find the height of its bar.

::hint
**What you need:** frequency density $=\dfrac{\text{frequency}}{\text{class width}}$.

::solution
The class width is $35-20=15$. In a histogram the frequency is the area of the bar, so the height is the frequency divided by the width.

The frequency density is $\dfrac{18}{15}=1.2$, and this is the height of the bar.

So the bar has height $1.2$.

**Answer.** $1.2$.
:::

## Applied exercises

:::exercise
A box holds $4$ working bulbs and $2$ faulty bulbs. Two bulbs are taken at random without replacement. Find the probability that at least one is faulty.

::hint
**What you need:** $P(\text{at least one})=1-P(\text{none})$.

::solution
Both working: $\dfrac46\times\dfrac35=\dfrac{12}{30}=\dfrac25$, since after one working bulb is taken there are $3$ working among $5$.

"At least one faulty" is everything except "both working", so its probability is $1-\dfrac25=\dfrac35$.

So the probability is $\dfrac35$.

**Answer.** $\dfrac35$.
:::

:::exercise
The mean of $8$ numbers is $15$. One number, $22$, is removed. Find the mean of the remaining $7$ numbers.

::hint
**What you need:** work with the total, not the mean.

::solution
The total of the $8$ numbers is $8\times15=120$. After removing $22$, the total is $120-22=98$.

The new mean is $\dfrac{98}{7}=14$.

So the mean of the remaining numbers is $14$; it went down because the number removed was above the mean.

**Answer.** $14$.
:::

:::exercise
Use the cumulative totals of the journey times in this lesson ($4$, $14$, $26$, $30$ at $t=10$, $20$, $30$, $50$). Estimate the median time by assuming the times are spread evenly within their class.

::hint
**What you need:** the median is at a cumulative frequency of $15$, inside the class $20<t\le30$.

::solution
Half of $30$ is $15$. The cumulative frequency is $14$ at $t=20$ and $26$ at $t=30$, so the median is $1$ student into a class of $12$ students.

Spreading the $12$ students evenly over the $10$ minutes of that class, the median is about $20+\dfrac{1}{12}\times10\approx20.8$ minutes.

So the median is about $20.8$ minutes, which is what a cumulative frequency curve would give when read at $15$.

**Answer.** About $20.8$ minutes.
:::

:::exercise Challenge
Of $40$ people, $25$ drink tea, $18$ drink coffee and $8$ drink both. Find how many drink neither, and the probability that a coffee drinker chosen at random also drinks tea.

::hint
**What you need:** fill the Venn diagram from the overlap outwards.

::solution
Tea only is $25-8=17$ and coffee only is $18-8=10$, so $17+8+10=35$ people drink at least one, and $40-35=5$ drink neither.

Given that the person drinks coffee, we choose from the $18$ coffee drinkers, and $8$ of them also drink tea: the probability is $\dfrac{8}{18}=\dfrac49$.

So $5$ people drink neither, and the probability is $\dfrac49$.

**Answer.** $5$; $\dfrac49$.
:::

:::quiz
::mc
In a histogram with unequal class widths, the height of each bar is
A. the frequency
B. the frequency density
C. the class width
D. the cumulative frequency
::key B
Frequency divided by class width.

::mc
$P(A)=0.35$. Then $P(\text{not }A)$ is
A. $0.65$
B. $0.35$
C. $0.7$
D. $1.35$
::key A
$1-0.35$.

::mc
To estimate the mean of grouped data, each class is represented by its
A. lower bound
B. frequency
C. midpoint
D. upper bound
::key C
The midpoint stands for every value in the class.

::mc
Which measure describes the spread of the middle half of the data?
A. the mean
B. the mode
C. the median
D. the interquartile range
::key D
Upper quartile minus lower quartile.

::tf
Two fair coins are tossed. Decide whether each statement is true or false.
a) There are $4$ equally likely outcomes.
b) $P(\text{two heads})=\dfrac14$.
c) $P(\text{at least one head})=\dfrac34$.
d) $P(\text{one head and one tail})=\dfrac14$.
::key T T T F
HT and TH give $\dfrac24=\dfrac12$.

::sa
Find the mean of $2$, $4$, $6$, $8$, $10$.
::key 6
$\dfrac{30}{5}$.

::sa
A fair coin is tossed twice. Find the probability of two tails, as a decimal.
::key 0.25
$0.5\times0.5$.
:::
