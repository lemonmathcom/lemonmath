---
title: Describing one-variable data
description: AP Statistics Unit 1: displays, shape, centre and variability, quartiles and outliers, z-scores and percentiles, and comparing distributions in context.
minutes: 50
---

:::goals
- Distinguish categorical and quantitative variables and choose suitable displays.
- Describe a distribution by its shape, centre, variability and unusual features, in context.
- Compute and interpret the mean, median, standard deviation, quartiles and interquartile range, and identify outliers with the $1.5\times\text{IQR}$ rule.
- Use z-scores and percentiles to describe the position of a value.
- Compare two distributions with comparative language.
:::

Every statistical investigation starts by looking at the data. On the AP exam this is the core of free-response question 2 and appears in almost every other question too. The calculations are short; what earns points is describing what you see **in the context of the data** and **comparing** with words like "greater than" and "about the same as".

## Variables and displays

A **categorical** variable places each individual in a group (favourite sport, blood type); a **quantitative** variable takes numerical values for which arithmetic makes sense (height, time). Categorical data are shown with bar charts and summarised with counts or relative frequencies; quantitative data are shown with dotplots, stemplots, histograms and boxplots.

To describe a quantitative distribution, cover four things, always in context:

| Feature | What to say |
|---|---|
| Shape | roughly symmetric, skewed right or skewed left; number of peaks |
| Centre | mean or median, with units |
| Variability | standard deviation, range or IQR, with units |
| Unusual features | outliers, gaps, clusters |

## Measures of centre and variability

For data $x_1,\dots,x_n$: the **mean** is $\bar x=\dfrac{\sum x_i}{n}$; the **median** is the middle value of the ordered data. The **sample standard deviation** is
$$s=\sqrt{\frac{\sum(x_i-\bar x)^2}{n-1}},$$
roughly the typical distance of the values from the mean. The **quartiles** $Q_1$ and $Q_3$ are the medians of the lower and upper halves, and $\text{IQR}=Q_3-Q_1$.

The median and IQR are **resistant**: extreme values hardly affect them. The mean and standard deviation are not. In a right-skewed distribution the long tail pulls the mean above the median; in a left-skewed one, below it.

A value is an **outlier** by the $1.5\times\text{IQR}$ rule if it is below $Q_1-1.5\,\text{IQR}$ or above $Q_3+1.5\,\text{IQR}$.

:::example Finding outliers
The numbers of minutes $12$ students spent on homework one evening are
$$3,\ 5,\ 6,\ 6,\ 7,\ 8,\ 9,\ 10,\ 11,\ 12,\ 14,\ 29.$$
According to the $1.5\times\text{IQR}$ rule, which values are outliers?
A. $3$ only
B. $3$ and $29$
C. There are no outliers.
D. $29$ only

**Solution.** With $12$ ordered values, the lower half is $3,5,6,6,7,8$ and the upper half is $9,10,11,12,14,29$. So $Q_1=\dfrac{6+6}{2}=6$ and $Q_3=\dfrac{11+12}{2}=11.5$, and $\text{IQR}=5.5$.

The fences are $Q_1-1.5(5.5)=6-8.25=-2.25$ and $Q_3+1.5(5.5)=11.5+8.25=19.75$.

Only $29$ is beyond a fence, so the only outlier is $29$ minutes, answer **D**.
:::

:::example Mean, median and shape
The annual salaries at a small company have mean $52$ thousand dollars and median $45$ thousand dollars. Which is the most likely shape of the distribution?
A. Skewed left
B. Skewed right
C. Roughly symmetric
D. Uniform

**Solution.** The mean is well above the median. That happens when a few very large values, here a few high salaries, pull the mean upward while the median stays with the bulk of the data.

So the distribution is most likely skewed right, answer **B**. For such data the median is the better measure of a typical salary.
:::

## Position: z-scores and percentiles

The **z-score** of a value says how many standard deviations it is from the mean:
$$z=\frac{x-\text{mean}}{\text{standard deviation}}.$$
A negative z-score means below the mean. The **percentile** of a value is the percent of the data less than or equal to it. Z-scores let us compare values from different distributions.

:::example Comparing with z-scores
Minh scored $82$ on a mathematics test with mean $70$ and standard deviation $8$, and $75$ on a physics test with mean $65$ and standard deviation $4$. On which test did he do better relative to the other students?

**Solution.** We compare z-scores. For mathematics, $z=\dfrac{82-70}{8}=1.5$; for physics, $z=\dfrac{75-65}{4}=2.5$.

His physics score is $2.5$ standard deviations above the mean, while his mathematics score is only $1.5$ standard deviations above.

So Minh did better on the physics test relative to the other students, even though his raw score was lower.
:::

## Comparing distributions

When comparing two groups, address shape, centre, variability and unusual features, and use **comparative words**. Listing the two medians is not a comparison; "the median for A is greater than the median for B" is.

:::example Two classes
Five-number summaries of test scores are given for two classes.

| Class | Min | $Q_1$ | Median | $Q_3$ | Max |
|---|---|---|---|---|---|
| A | $40$ | $55$ | $68$ | $75$ | $90$ |
| B | $52$ | $60$ | $65$ | $70$ | $78$ |

Compare the centre and variability of the two distributions.

**Solution.** Centre: the median score for class A ($68$) is slightly greater than the median for class B ($65$).

Variability: class A's scores vary more. Its range is $90-40=50$ and its IQR is $75-55=20$, while class B's range is $78-52=26$ and its IQR is $70-60=10$.

So class A has a slightly higher typical score but much more variable scores than class B.
:::

:::warning Common traps
- **No context:** "the median is $68$" should be "the median score for class A is $68$ points".
- **Listing instead of comparing:** use "greater than", "less than", "about the same as".
- **Mean for skewed data:** with strong skew or outliers, describe centre with the median and variability with the IQR.
- **Quartiles by hand:** exclude the median from both halves when $n$ is odd.
- **Variance versus standard deviation:** the standard deviation has the same units as the data.
:::

:::terms
- categorical / quantitative variable | biến định tính / biến định lượng
- distribution | phân phối
- skewed right / left | lệch phải / lệch trái
- mean / median | trung bình / trung vị
- standard deviation | độ lệch chuẩn
- interquartile range (IQR) | khoảng tứ phân vị
- outlier | giá trị ngoại lai
- resistant measure | số đo bền vững
- z-score / percentile | điểm z / bách phân vị
- five-number summary | bộ năm số tóm tắt
:::

## Similar exercises

:::exercise
For the data $2,\ 4,\ 4,\ 5,\ 7,\ 8,\ 9,\ 10,\ 22$, find the median, the quartiles and the IQR, and decide whether there are any outliers.

::hint
**What you need:** with $n=9$ the median is the $5$th value; leave it out of both halves.

::solution
The data are already in order and $n=9$, so the median is the $5$th value, $7$.

The lower half is $2,4,4,5$, so $Q_1=\dfrac{4+4}{2}=4$; the upper half is $8,9,10,22$, so $Q_3=\dfrac{9+10}{2}=9.5$. Hence $\text{IQR}=9.5-4=5.5$.

The upper fence is $9.5+1.5(5.5)=17.75$ and the lower fence is $4-8.25=-4.25$. Only $22$ is beyond a fence.

So the median is $7$, $Q_1=4$, $Q_3=9.5$, $\text{IQR}=5.5$, and $22$ is an outlier.

**Answer.** Median $7$, $\text{IQR}=5.5$; $22$ is an outlier.
:::

:::exercise
Find the mean and the sample standard deviation of $4,\ 8,\ 6,\ 10,\ 12$.

::hint
**What you need:** $s=\sqrt{\dfrac{\sum(x_i-\bar x)^2}{n-1}}$.

::solution
The mean is $\bar x=\dfrac{4+8+6+10+12}{5}=\dfrac{40}{5}=8$.

The deviations from the mean are $-4,\ 0,\ -2,\ 2,\ 4$, whose squares sum to $16+0+4+4+16=40$.

Dividing by $n-1=4$ gives $10$, so $s=\sqrt{10}\approx3.162$.

So the mean is $8$ and the standard deviation is about $3.162$.

**Answer.** $\bar x=8$, $s\approx3.162$.
:::

:::exercise
A distribution of house prices has mean $310$ thousand dollars and median $260$ thousand dollars. Describe the likely shape and say which measure of centre better describes a typical house.

::hint
**What you need:** a mean above the median suggests a long right tail.

::solution
The mean is greater than the median, which suggests that a few expensive houses pull the mean upward: the distribution is likely skewed right.

Since the median is resistant to those extreme prices, it better describes a typical house price.

So the distribution is likely skewed right, and the median of $260$ thousand dollars is the better summary of a typical price.

**Answer.** Skewed right; the median.
:::

:::exercise
Heights of adult men in a country have mean $170$ cm and standard deviation $8$ cm.
a) Find the z-score of a man $180$ cm tall.
b) What height has z-score $-2$?

::hint
**What you need:** $z=\dfrac{x-\text{mean}}{\text{SD}}$, and $x=\text{mean}+z\cdot\text{SD}$.

::solution
a) The z-score is $z=\dfrac{180-170}{8}=1.25$: this man is $1.25$ standard deviations taller than the mean.

b) Solving for $x$ gives $x=170+(-2)(8)=154$ cm.

So the z-score is $1.25$, and a height of $154$ cm has z-score $-2$.

**Answer.** a) $1.25$; b) $154$ cm.
:::

:::exercise
In a survey of $50$ students, $18$ come to school by bus, $15$ by car, $12$ on foot and $5$ by bicycle. Find the relative frequency of each category and name a suitable display.

::hint
**What you need:** relative frequency $=\dfrac{\text{count}}{\text{total}}$.

::solution
Dividing each count by $50$ gives bus $\dfrac{18}{50}=36\%$, car $30\%$, on foot $24\%$ and bicycle $10\%$; together they make $100\%$.

The variable "way of coming to school" is categorical, so a bar chart of these relative frequencies is suitable.

So the relative frequencies are $36\%$, $30\%$, $24\%$ and $10\%$, shown in a bar chart.

**Answer.** $36\%$, $30\%$, $24\%$, $10\%$; a bar chart.
:::

## Applied exercises

:::exercise
The prices, in thousands of dollars, of five houses sold on one street are $210,\ 230,\ 245,\ 260,\ 950$. Compute the mean and the median, and explain which one a buyer should use to describe a typical price on this street.

::hint
**What you need:** the value $950$ is far from the others.

::solution
The mean is $\dfrac{210+230+245+260+950}{5}=\dfrac{1895}{5}=379$, and the median is the middle value, $245$.

The mean is higher than four of the five prices because the single expensive house pulls it upward, while the median is not affected by that one value.

So the median, $245$ thousand dollars, better describes a typical price on this street.

**Answer.** Mean $379$, median $245$ (thousand dollars); use the median.
:::

:::exercise
A class of $20$ students has mean score $72$ and another class of $30$ students has mean score $82$. Find the mean score of all $50$ students.

::hint
**What you need:** add the total scores, not the means.

::solution
The total for the first class is $20\times72=1440$ and for the second $30\times82=2460$, so the combined total is $3900$.

Dividing by $50$ students gives $\dfrac{3900}{50}=78$.

So the mean score of all $50$ students is $78$; the simple average $\dfrac{72+82}{2}=77$ is wrong because the classes have different sizes.

**Answer.** $78$.
:::

:::exercise
Using the five-number summaries of classes A and B in the example above, can we say that class A has an outlier? Use the $1.5\times\text{IQR}$ rule.

::hint
**What you need:** for class A, $Q_1=55$, $Q_3=75$, so $\text{IQR}=20$.

::solution
For class A, $\text{IQR}=75-55=20$, so the fences are $55-30=25$ and $75+30=105$.

The minimum $40$ is above $25$ and the maximum $90$ is below $105$, so no value can lie outside the fences.

So class A has no outliers by the $1.5\times\text{IQR}$ rule, even though its range is large.

**Answer.** No outliers.
:::

:::exercise Challenge
Four numbers in increasing order are $4,\ 7,\ 9,\ x$, where $x>9$. Find $x$ if the mean equals the median.

::hint
**What you need:** the median of four values is the average of the middle two.

::solution
With the values in order, the median is $\dfrac{7+9}{2}=8$, whatever $x>9$ is.

The mean is $\dfrac{4+7+9+x}{4}=\dfrac{20+x}{4}$. Setting it equal to $8$ gives $20+x=32$, so $x=12$.

Since $12>9$, the order is preserved. So $x=12$.

**Answer.** $x=12$.
:::

:::quiz
::mc
Which variable is categorical?
A. Height in centimetres
B. Favourite sport
C. Number of siblings
D. Time to run $100$ m
::key B
A favourite sport places each person in a group.

::mc
Which pair of measures is resistant to outliers?
A. Mean and standard deviation
B. Mean and IQR
C. Median and standard deviation
D. Median and IQR
::key D
Both are based on the middle of the ordered data.

::mc
For a distribution that is strongly skewed left, typically
A. the mean is less than the median
B. the mean equals the median
C. the mean is greater than the median
D. the median is $0$
::key A
The long left tail pulls the mean down.

::mc
A value has z-score $-1$. This means the value is
A. $1$ unit below the mean
B. at the $1$st percentile
C. one standard deviation below the mean
D. less than the minimum
::key C
The z-score counts standard deviations from the mean.

::tf
Consider the data $2,\ 4,\ 6,\ 8,\ 10$. Decide whether each statement is true or false.
a) The mean is $6$.
b) The median is $6$.
c) The range is $8$.
d) The IQR is $4$.
::key T T T F
$Q_1=3$ and $Q_3=9$, so the IQR is $6$.

::sa
Find the median of $3,\ 9,\ 4,\ 7,\ 10$.
::key 7
In order: $3,4,7,9,10$.

::sa
A test has mean $50$ and standard deviation $6$. Find the z-score of a score of $65$.
::key 2.5
$\dfrac{65-50}{6}=2.5$.
:::
