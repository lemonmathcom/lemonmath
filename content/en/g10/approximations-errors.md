---
title: Approximate values and errors
description: Measure how far an approximate value is from the true value with absolute and relative errors; round numbers and round to a given error bound.
minutes: 20
---

:::goals
- Explain what an approximate value is and write $a = \bar{a} \pm d$.
- Compute the absolute error, the error bound and the relative error, and use them to compare accuracy.
- Round a number to a given place and find an approximation of a number to a given error bound.
- Write the rounded form of an approximate value when its error bound is known.
:::

A bicycle wheel has a diameter of $60$ cm. Its true circumference is $60\pi$ cm, but $\pi$ has infinitely many decimal places, so nobody can compute it "all the way". An uses $\pi\approx3.14$ and gets a circumference of $188.4$ cm. Binh uses $\pi\approx\dfrac{22}{7}$ and gets about $188.57$ cm. Whose result is closer to the true circumference, and by how much can it be off?

Look around: the height on a health record, the weight printed on a bag of rice, the distance on a map. Almost every one of them is an **approximate value**. Nobody can measure anything perfectly, so asking "is this number exact?" nearly always gets the answer "no". The more useful question is: "how far off can this number be?". Once you can answer that, you know how much to trust a number.

## Approximate values and absolute error

Using a calculator with many digits, $60\pi=188.4955\ldots$ cm. Compare the two results with this number:

| Student | Result | Difference from $60\pi$ |
|---|---|---|
| An | $188.4$ | $188.4955\ldots-188.4\approx0.096$ |
| Binh | $188.5714\ldots$ | $188.5714\ldots-188.4955\ldots\approx0.076$ |

Binh's result is slightly closer. To compare them we did something very natural: we measured the **distance** between the true value and the approximate value. That distance is used so often that it has a name of its own.

:::definition Absolute error and error bound
Let $a$ be the true value and $\bar{a}$ an approximate value of it. The **absolute error** of $\bar{a}$ is
$$\Delta_{\bar a} = |a - \bar{a}|.$$
Usually we do not know $a$, so we cannot compute $\Delta_{\bar a}$. Instead we find a number $d$ that is surely large enough, so that $\Delta_{\bar a} \leq d$. The number $d$ is called the **error bound** of the approximate value $\bar a$, and we write
$$a = \bar{a} \pm d,\quad\text{meaning}\quad \bar{a} - d \leq a \leq \bar{a} + d.$$
:::

You can think of $d$ as a promise: "the true value is no further than $d$ from $\bar a$". The tighter the promise, that is, the smaller $d$, the more you can trust the approximation. We start with the most familiar approximate value of all.

:::example Writing $\pi$ as $3.14\pm d$
Given $\pi=3.14159265\ldots$, find the absolute error of the approximation $3.14$ and choose a neat error bound $d$.

**Solution.** Subtract the approximate value from the true value:

$$\Delta = |\pi - 3.14| = 0.00159\ldots$$

Since $0.00159\ldots<0.002$, we can take $d=0.002$.

So $\pi = 3.14 \pm 0.002$, that is, $\pi$ lies in the interval $[3.138, 3.142]$.
:::

:::graph The number $\pi$ lies in $[3.138, 3.142]$
alt: A short number line from 3.136 to 3.144 with a segment from 3.138 to 3.142, a point at 3.14 and a hollow point at pi inside the segment.
x: 3.136..3.144
y: -1..1
segment: (3.138, 0) (3.142, 0)
point: (3.138, 0) "3.138" below
point: (3.142, 0) "3.142" below
point: (3.14, 0) "ā" above-left
open: (3.14159, 0) "π" above-right
:::

With $\pi$ we are lucky: we know so many digits that we can work out the real error. With a tape measure in your hand it is different. You never know the true value, only that it lies somewhere in an interval. That is when $d$ really earns its keep.

:::example When the true value is unknown
A garden is measured several times and every result lies between $24.6$ m and $25.0$ m. Choose an approximate value $\bar a$ and an error bound $d$ for its length $a$.

**Solution.** Take $\bar a$ as the midpoint of $[24.6, 25.0]$; then $d$ is half the length of the interval:

$$\bar a=\dfrac{24.6+25.0}{2}=24.8,\qquad d=\dfrac{25.0-24.6}{2}=0.2.$$

So the length of the garden is $a=24.8\pm0.2$ (m).

**Check.** $24.8-0.2=24.6$ and $24.8+0.2=25.0$: exactly the two ends of the measured range.
:::

## Relative error

Does being $1$ cm out matter? For a pen, quite a lot, because a pen is only about fifteen centimetres long. For a football pitch, nobody would notice. The same error weighs differently depending on what is being measured. So to decide which measurement is **more accurate**, we have to put the error next to the size of the quantity and compare.

:::definition Relative error
The **relative error** of the approximate value $\bar{a}$ is
$$\delta_{\bar a} = \frac{\Delta_{\bar a}}{|\bar{a}|}.$$
Since $\Delta_{\bar a} \leq d$, we have $\delta_{\bar a} \leq \dfrac{d}{|\bar{a}|}$. The relative error is usually written as a percentage. The smaller the relative error, the more accurate the measurement.
:::

:::example Which measurement is more accurate?
A football pitch is measured as $105$ m with error bound $0.2$ m. A pen is measured as $14.6$ cm with error bound $0.1$ cm. Which measurement is more accurate?

**Solution.** The two quantities have different sizes and units, so we compare relative errors:

$$\delta_1\le\dfrac{0.2}{105}\approx0.19\%,\qquad \delta_2\le\dfrac{0.1}{14.6}\approx0.68\%.$$

So the pitch measurement is more accurate, even though its error bound of $0.2$ m (that is, $20$ cm) is much larger than $0.1$ cm.
:::

## Rounding

You have been rounding since primary school. Here we recall the rule, then ask how far rounding can move the original number. To round a number to a given place, look at the digit just to the right of that place.

- If that digit is **less than $5$**: keep the digits on the left and replace the digits on the right by $0$ (or drop them if they are decimals).
- If that digit is **$5$ or more**: add $1$ to the digit in the rounding place, then do the same.

For example, $4\,863$ rounded to the nearest hundred is $4\,900$ (because the tens digit is $6\ge5$).

:::theorem Error caused by rounding
When a number is rounded to a given place, the absolute error is at most **half a unit** of that place.
:::

**Why?** Think of the marks on a ruler. When you round to the nearest hundred, the "marks" are $4\,800$, $4\,900$, $5\,000$, … and you pick the mark closest to your number. Two neighbouring marks are exactly one unit apart, so your number can never be more than half a unit from the nearest one.

:::example Rounding and its error
Round $7\,254\,836$ to the nearest thousand and $0.58276$ to two decimal places. Find the absolute error in each case.

**Solution.** We look at the digit just to the right of the rounding place.

- The hundreds digit of $7\,254\,836$ is $8\ge5$, so the thousands digit goes up: $7\,255\,000$. The error is $7\,255\,000-7\,254\,836=164\le500$.
- The thousandths digit of $0.58276$ is $2<5$, so we keep it: $0.58$. The error is $0.58276-0.58=0.00276\le0.005$.

So the rounded values are $7\,255\,000$ (error $164$) and $0.58$ (error $0.00276$), both within half a unit of the rounding place.
:::

## Approximations to a given error bound

The rule "the error is at most half a unit" answers two questions that come up often. They sound alike but go in opposite directions, so read them slowly.

**1. Given a known number and an error bound $d$, find an approximation.** Round the number to the place of the first non-zero digit (from the left) of $d$. The error is then at most half a unit of that place, so at most $d$.

**2. Given an approximate value $\bar a$ with error bound $d$, write the rounded form of $\bar a$.** Round $\bar a$ to the **lowest place whose unit is greater than $d$**. Digits in lower places cannot be trusted, because $d$ is already larger than one whole unit of them.

:::example An approximation of $\sqrt5$
Given $\sqrt5=2.2360679\ldots$, write an approximation of $\sqrt5$ with error bound $d=0.01$, and then with $d=0.001$.

**Solution.** The first non-zero digit of $d=0.01$ is in the hundredths place, so we round to two decimal places:

$$\sqrt5\approx2.24,\qquad |2.24-\sqrt5|=0.0039\ldots\le0.01.$$

With $d=0.001$ we round to three decimal places:

$$\sqrt5\approx2.236,\qquad |\sqrt5-2.236|=0.000067\ldots\le0.001.$$

So an approximation of $\sqrt5$ is $2.24$ with error bound $0.01$, and $2.236$ with error bound $0.001$.
:::

Now the second question. This time we already have $\bar a$ and $d$; the job is to be brave and drop the digits that $d$ tells us cannot be trusted.

:::example The rounded form of an approximate value
(a) A road is $\bar a=3\,527\,418$ mm long with error bound $d=300$ mm. Write the rounded form of $\bar a$.

(b) A metal block has mass $\bar b=12.4637$ kg with error bound $d=0.02$ kg. Write the rounded form of $\bar b$.

**Solution.** We look for the lowest place whose unit is greater than $d$.

- (a) One hundred is $100<300$, one thousand is $1000>300$. So we round to the nearest thousand: the hundreds digit is $4<5$, giving $3\,527\,000$.
- (b) One hundredth is $0.01<0.02$, one tenth is $0.1>0.02$. So we round to one decimal place: the hundredths digit is $6\ge5$, giving $12.5$.

So the rounded forms are $3\,527\,000$ mm and $12.5$ kg.
:::

:::warning Common mistakes
Many students have tripped over the points below. Read them once, so you can spot them in your own work.

- **Choosing $d$ too small.** Writing $\pi=3.14\pm0.001$. Wrong, because the real error is $0.00159\ldots>0.001$. Right: $d$ must be at least the real error, for example $d=0.002$.
- **Comparing absolute errors of different quantities.** Concluding that the pen ($d=0.1$ cm) is measured more accurately than the pitch ($d=0.2$ m). Wrong, because the two quantities have very different sizes. Right: compare relative errors.
- **Keeping too many digits.** For $\bar b=12.4637\pm0.02$, writing the rounded form as $12.46$. Wrong, because $d=0.02$ is larger than one hundredth. Right: $12.5$.
- **Rounding in a chain.** Rounding $2.346$ to one decimal place via $2.346\to2.35\to2.4$. Wrong, because only the digit just right of the rounding place counts ($4<5$). Right: $2.3$.
:::

## Key terms

:::terms
- approximate value | số gần đúng
- absolute error | sai số tuyệt đối
- error bound | độ chính xác (của số gần đúng)
- relative error | sai số tương đối
- rounding | quy tròn
- place value | hàng (đơn vị, chục, phần mười, ...)
- rounded value | số quy tròn
:::

## Summary

- An approximation $\bar a$ of the true value $a$ has absolute error $\Delta_{\bar a}=|a-\bar a|$. If $\Delta_{\bar a}\le d$ we write $a=\bar a\pm d$ ($d$ is the error bound).
- Relative error $\delta_{\bar a}=\Delta_{\bar a}/|\bar a|\le d/|\bar a|$, usually a percentage; use it to compare the accuracy of different measurements.
- Rounding to a place: look at the digit just to the right; the error is at most half a unit of that place.
- Approximation of a number with error bound $d$: round to the place of the first non-zero digit of $d$.
- Rounded form of $\bar a\pm d$: round to the lowest place whose unit is greater than $d$.

Back to the bicycle wheel: neither An nor Binh has the "true" number, and neither needs it. What makes an approximation worth something is that we can say how far off it can be. Get into the habit of giving every number its error bound, and you will read data with a much clearer head.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, and do not worry about mistakes; then open the solution and compare it with your own thinking.

:::exercise
Round $4\,863$ to the nearest ten and the nearest hundred; round $2.71828$ to two and to three decimal places.

::hint
**What you need:** look at the digit just right of the rounding place; below $5$ keep, $5$ or more add $1$.

**Steps:**
1. Find the digit in the rounding place.
2. Look at the digit just to its right.

::solution
$4\,863$: the units digit $3<5$, so to the nearest ten it is $4\,860$; the tens digit $6\ge5$, so to the nearest hundred it is $4\,900$. $2.71828$: the thousandths digit $8\ge5$, so to two decimal places it is $2.72$; the ten-thousandths digit $2<5$, so to three decimal places it is $2.718$.

**Answer.** $4\,860$; $4\,900$; $2.72$; $2.718$.
:::

:::exercise
Given $\sqrt3=1.7320508\ldots$, take $\bar a=1.73$ as an approximation of $\sqrt3$. Show that $\Delta_{\bar a}<0.0021$ and find an upper bound for the relative error (as a percentage, rounded to two decimal places).

::hint
**What you need:** $\Delta_{\bar a}=|a-\bar a|$ and $\delta_{\bar a}\le\dfrac{d}{|\bar a|}$.

**Steps:**
1. Compute $\sqrt3-1.73$.
2. Divide $0.0021$ by $1.73$ and convert to a percentage.

::solution
$\Delta_{\bar a}=1.7320508\ldots-1.73=0.0020508\ldots<0.0021$. Hence
$$\delta_{\bar a}\le\dfrac{0.0021}{1.73}\approx0.0012=0.12\%.$$

**Answer.** $\delta_{\bar a}\le0.12\%$.
:::

:::exercise
Which is the better approximation of $\sqrt2=1.41421356\ldots$: $1.41$ or $\dfrac{99}{70}$?

::hint
**What you need:** the better approximation (of the same number) is the one with the smaller absolute error.

**Steps:**
1. Write $\dfrac{99}{70}$ as a decimal.
2. Compute both absolute errors and compare.

::solution
$\dfrac{99}{70}=1.4142857\ldots$ We have
$$|\sqrt2-1.41|\approx0.0042,\qquad \left|\dfrac{99}{70}-\sqrt2\right|\approx0.000072.$$
The second error is far smaller.

**Answer.** $\dfrac{99}{70}$ is the better approximation of $\sqrt2$.
:::

:::exercise
Given $\sqrt7=2.6457513\ldots$ and $\pi^2=9.8696044\ldots$, write an approximation of $\sqrt7$ with error bound $0.001$ and of $\pi^2$ with error bound $0.01$.

::hint
**What you need:** rounding to the place of the first non-zero digit of $d$ gives an error of at most $d$.

**Steps:**
1. $d=0.001$: round to three decimal places.
2. $d=0.01$: round to two decimal places.

::solution
$\sqrt7\approx2.646$ with error $\approx0.00025\le0.001$. $\pi^2\approx9.87$ with error $\approx0.0004\le0.01$.

**Answer.** $\sqrt7\approx2.646$; $\pi^2\approx9.87$.
:::

:::exercise
Write the rounded form of each approximate value: (a) $\bar a=2\,476\,154\pm2\,000$; (b) $\bar b=0.73914\pm0.004$.

::hint
**What you need:** round to the lowest place whose unit is greater than $d$.

**Steps:**
1. Compare $d$ with $1$, $10$, $100$, ... (or $0.1$, $0.01$, ...) to find the place.
2. Round using the digit just to the right of that place.

::solution
(a) $2\,000$ is not less than $1\,000$ but is less than $10\,000$, so round to the nearest ten thousand; the thousands digit is $6\ge5$: $2\,480\,000$.

(b) $0.004$ is less than $0.01$ but not less than $0.001$, so round to two decimal places; the thousandths digit is $9\ge5$: $0.74$.

**Answer.** (a) $2\,480\,000$; (b) $0.74$.
:::

:::exercise
A tailor measures a piece of cloth as $6.4$ m with error bound $0.05$ m. A builder measures a wall as $85$ m with error bound $0.4$ m. Whose measurement is more accurate?

::hint
**What you need:** the measurement with the smaller relative error is more accurate.

**Steps:**
1. Compute $\dfrac{d}{\bar a}$ for each measurement.
2. Compare the two ratios.

::solution
Tailor: $\delta_1\le\dfrac{0.05}{6.4}\approx0.78\%$. Builder: $\delta_2\le\dfrac{0.4}{85}\approx0.47\%$.

**Answer.** The builder's measurement is more accurate.
:::

:::exercise
Let $\bar a=4.375$ be an approximation of $a$ with error bound $d=0.02$. Is each claim true or false?

a) $a$ lies in the interval $[4.355, 4.395]$.
b) The relative error of $\bar a$ is at most $0.5\%$.
c) The rounded form of $\bar a$ is $4.38$.
d) It is possible that $a=4.4$.

::hint
**What you need:** $a=\bar a\pm d$ means $\bar a-d\le a\le\bar a+d$; $\delta\le\dfrac{d}{|\bar a|}$; the rule for the rounded form.

**Steps:**
1. Compute $\bar a-d$ and $\bar a+d$.
2. Compute $\dfrac{0.02}{4.375}$.
3. Find the lowest place whose unit is greater than $0.02$.

::solution
a) **True.** $4.375-0.02=4.355$ and $4.375+0.02=4.395$.

b) **True.** $\dfrac{0.02}{4.375}\approx0.46\%\le0.5\%$.

c) **False.** $0.02$ is not less than $0.01$ but is less than $0.1$, so we round to one decimal place: $4.4$.

d) **False.** $4.4-4.375=0.025>0.02$, so $4.4$ lies outside the interval in a).

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
A rectangular yard is $32.5\pm0.1$ m long and $18.4\pm0.1$ m wide. Find an upper bound for the relative error of its perimeter, as a percentage rounded to two decimal places.

::hint
**What you need:** if each side is off by at most $0.1$ m, the perimeter $2(x+y)$ is off by at most $2(0.1+0.1)$.

**Steps:**
1. Compute the approximate perimeter.
2. Compute the error bound of the perimeter.
3. Divide and convert to a percentage.

::solution
Approximate perimeter $\bar P=2(32.5+18.4)=101.8$ m, error bound $d=2(0.1+0.1)=0.4$ m. Hence
$$\delta\le\dfrac{0.4}{101.8}\approx0.39\%.$$

**Answer.** $\delta\le0.39\%$.
:::

:::exercise
(Review of [Sets and set operations](lesson:sets-and-set-operations)) We know that $\pi=3.14\pm0.002$.

(a) Write the set $I$ of possible values of $\pi$ given by this information as a closed interval. (b) Does $\dfrac{22}{7}$ belong to $I$? (c) Find $I\cap[3.141, 3.15]$.

::hint
**What you need:** $a=\bar a\pm d$ means $a\in[\bar a-d, \bar a+d]$; the intersection of two intervals is their common part.

**Steps:**
1. Compute the two endpoints.
2. Write $\dfrac{22}{7}$ as a decimal and compare.
3. Draw both intervals on a number line.

::solution
(a) $I=[3.138, 3.142]$.

(b) $\dfrac{22}{7}=3.142857\ldots>3.142$, so $\dfrac{22}{7}\notin I$.

(c) The common part of $[3.138, 3.142]$ and $[3.141, 3.15]$ is $[3.141, 3.142]$.

**Answer.** (a) $[3.138, 3.142]$; (b) no; (c) $[3.141, 3.142]$.
:::

:::exercise Challenge
For the yard in the previous exercise ($32.5\pm0.1$ m by $18.4\pm0.1$ m), the area is estimated as $32.5\cdot18.4$. Find the smallest and largest possible areas, an error bound $d$ for the estimated area, and then the rounded form of the area.

::hint
**What you need:** the smallest area comes from the two smallest sides, the largest from the two largest; $d$ is the larger distance from the estimate to these two values.

**Steps:**
1. Compute $32.4\cdot18.3$, $32.5\cdot18.4$ and $32.6\cdot18.5$.
2. Compute the two distances and take the larger one as $d$.
3. Apply the rule for the rounded form.

::solution
Estimated area $\bar S=32.5\cdot18.4=598$ m². Smallest $32.4\cdot18.3=592.92$, largest $32.6\cdot18.5=603.1$. The two distances are $598-592.92=5.08$ and $603.1-598=5.1$, so take $d=5.1$. Since $5.1$ is not less than $1$ but is less than $10$, we round $598$ to the nearest ten: $600$.

**Answer.** $592.92\le S\le603.1$; $S=598\pm5.1$ (m²); the rounded form is $600$ m².
:::

## Mini test

:::quiz
::mc
The length of a pen is $a=12.5\pm0.3$ cm. Which statement is true?
A. $12.2\le a\le12.8$.
B. $12.47\le a\le12.53$.
C. $12.5\le a\le12.8$.
D. $12.2\le a\le12.5$.
::key A
$a=\bar a\pm d$ means $\bar a-d\le a\le\bar a+d$, that is $12.5-0.3\le a\le12.5+0.3$. We must subtract and add, not go in one direction only.

::mc
Rounding $52\,846$ to the nearest hundred gives
A. $52\,800$.
B. $52\,900$.
C. $52\,850$.
D. $53\,000$.
::key A
The tens digit is $4<5$, so the hundreds digit stays: $52\,800$. Option B is the "chain rounding" mistake $52\,846\to52\,850\to52\,900$.

::mc
The approximate value $\bar a=40$ has error bound $d=0.2$. Its relative error is at most
A. $0.2\%$.
B. $0.5\%$.
C. $5\%$.
D. $200\%$.
::key B
$\delta_{\bar a}\le\dfrac{d}{|\bar a|}=\dfrac{0.2}{40}=0.005=0.5\%$. Option A mistakes $d$ for the relative error; D uses $\dfrac{40}{0.2}$.

::mc
The rounded form of the approximate value $\bar a=1\,734\,562$ with error bound $d=300$ is
A. $1\,734\,600$.
B. $1\,735\,000$.
C. $1\,734\,000$.
D. $1\,730\,000$.
::key B
One hundred is $100<300$ and one thousand is $1000>300$, so we round to the nearest thousand. The hundreds digit is $5\ge5$, giving $1\,735\,000$ (C drops digits without rounding).

::tf
Given $\sqrt5=2.2360679\ldots$, take $\bar a=2.24$ as an approximation of $\sqrt5$.
a) The absolute error of $\bar a$ is less than $0.004$.
b) We may write $\sqrt5=2.24\pm0.003$.
c) With error bound $d=0.004$, the relative error of $\bar a$ is at most $0.2\%$.
d) Rounding $\sqrt5$ to three decimal places gives $2.237$.
::key T F T F
a) True: $2.24-2.2360679\ldots=0.0039\ldots<0.004$. b) False: the real error $0.0039\ldots$ is larger than $0.003$. c) True: $\dfrac{0.004}{2.24}\approx0.18\%$. d) False: round to three decimal places; the next digit is $0<5$, so we get $2.236$.

::sa
A bag of rice is weighed as $49.6$ kg with error bound $0.2$ kg. What is the largest possible true mass of the bag, in kilograms?
::key 49.8
The true mass $a$ satisfies $49.6-0.2\le a\le49.6+0.2$, so the largest possible value is $49.8$ kg.

::sa
A leaf is measured several times and every result lies between $7.42$ cm and $7.58$ cm. Take $\bar a$ as the midpoint of this range. At most what percentage is the relative error of $\bar a$? (Round to two decimal places.)
::key 1.07
$\bar a=\dfrac{7.42+7.58}{2}=7.5$ and $d=\dfrac{7.58-7.42}{2}=0.08$, so $\delta\le\dfrac{0.08}{7.5}\approx1.07\%$.
:::
