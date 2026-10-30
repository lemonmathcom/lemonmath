---
title: Approximate numbers and errors
description: Measure how far an approximate number is from the true value with absolute and relative errors; round numbers and find reliable digits.
minutes: 15
---

:::goals
- Explain what an approximate number is and write $a = \bar{a} \pm d$.
- Compute the absolute error, the error bound and the relative error, and use them to compare accuracy.
- Round numbers to a given place or to a number of significant figures.
- Decide which digits of an approximate number are reliable.
:::

A ruler says your textbook is 24.4 cm wide. A calculator says $\sqrt{2} = 1.414213562\ldots$ and the display just stops. In real life almost every number you meet, from a length to a population, is **approximate**. The real question is not "is it exact?" but "how far off can it be?". This lesson gives you the tools to answer that.

## Approximate numbers and absolute error

Sometimes the exact value is impossible to write down ($\pi$, $\sqrt{2}$) and sometimes it is impossible to know (the exact mass of a bag of rice). Then we use a nearby number instead.

Let $a$ be the exact value and $\bar{a}$ an approximation of it.

:::definition Absolute error and error bound
The **absolute error** of $\bar{a}$ is
$$\Delta = |a - \bar{a}|.$$
Usually we do not know $a$, so we cannot compute $\Delta$ exactly. Instead we find a number $d$ that is certainly big enough:
$$\Delta \leq d.$$
This $d$ is called an **error bound** (or upper bound for the error). We write
$$a = \bar{a} \pm d,$$
which means $\bar{a} - d \leq a \leq \bar{a} + d$.
:::

The smaller $d$ is, the better the approximation. For $\pi \approx 3.14$ we can take $d = 0.002$, so $\pi$ lies between $3.138$ and $3.142$.

:::graph The number $\pi$ lies inside the interval $3.14 \pm 0.002$
alt: A short number line from 3.136 to 3.144 with a segment from 3.138 to 3.142, a point at 3.14 and a hollow point at pi inside the segment
x: 3.136..3.144
y: -1..1
segment: (3.138, 0) (3.142, 0)
point: (3.138, 0) "3.138" below
point: (3.142, 0) "3.142" below
point: (3.14, 0) "ā" above-left
open: (3.14159, 0) "π" above-right
:::

## Relative error

Is an error of 1 cm serious? For the length of a pencil, yes. For the length of a football pitch, not at all. We compare the error with the size of the number.

:::definition Relative error
The **relative error** of $\bar{a}$ is
$$\delta = \frac{\Delta}{|\bar{a}|}.$$
Since $\Delta \leq d$, we have the bound
$$\delta \leq \frac{d}{|\bar{a}|},$$
and we usually write it as a percentage. The smaller the relative error, the more **accurate** (reliable) the measurement.
:::

:::example How good is 3.14 for $\pi$?
Take $\bar{a} = 3.14$ as an approximation of $\pi = 3.14159265\ldots$. Find an error bound and the relative error bound.

**Solution.**
1. The absolute error is $\Delta = |\pi - 3.14| = 0.00159\ldots$.
2. This is less than $0.002$, so we may take $d = 0.002$ and write $\pi = 3.14 \pm 0.002$.
3. The relative error satisfies $\delta \leq \dfrac{0.002}{3.14} \approx 0.00064$, that is about $0.064\%$ (rounded to 3 decimal places of a percent).
:::

:::example Which measurement is more accurate?
A ruler marked in millimetres gives the length of a book as $12.4\text{ cm}$ with $d = 0.1\text{ cm}$. A scale gives the mass of a student as $85\text{ kg}$ with $d = 0.5\text{ kg}$. Which measurement is more accurate?

**Solution.**
1. Length: $\delta_1 \leq \dfrac{0.1}{12.4} \approx 0.0081 = 0.81\%$.
2. Mass: $\delta_2 \leq \dfrac{0.5}{85} \approx 0.0059 = 0.59\%$.
3. We compare relative errors, not absolute ones. Since $0.59\% < 0.81\%$, the mass measurement is more accurate, even though its absolute error bound $0.5$ is larger than $0.1$.
:::

:::warning Do not compare absolute errors across different quantities
Errors of $0.5\text{ kg}$ and $0.1\text{ cm}$ have different units and different sizes of the quantity. Always compare **relative** errors when the measured numbers are different.
:::

## Rounding and significant figures

To round a number to a chosen place, look at the digit just to the right of that place.

- If that digit is **less than 5**, keep the digits on the left and replace the others by zeros (or drop them after the decimal point).
- If that digit is **5 or more**, add 1 to the last kept digit and then do the same.

For example, $7\,459$ rounded to hundreds is $7\,500$; $3.14159$ rounded to 2 decimal places is $3.14$.

When you round to a place, the error is at most **half a unit of that place**. So $3.14$ (rounded to hundredths) has $d = 0.005$, and $7\,500$ (rounded to hundreds) has $d = 50$.

The **significant figures** of a number are its digits starting from the first non-zero digit on the left. So $0.0305$ has 3 significant figures ($3, 0, 5$), and $2.40$ has 3 ($2, 4, 0$). To round to $k$ significant figures, keep the first $k$ of them and round as above. For example, $0.0071849$ to 3 significant figures is $0.00718$, and $12\,345$ to 3 significant figures is $12\,300$.

## Reliable digits

Suppose $a = \bar{a} \pm d$. A digit of $\bar{a}$ is **reliable** (a "correct digit") if $d$ is at most half a unit of the place where that digit stands. All digits to the left of a reliable digit are reliable too. When we report a result, we keep only reliable digits and round off the rest.

:::example Reliable digits of a population count
The population of a town is $\bar{a} = 5\,248\,300$ with $d = 300$. Which digits are reliable? How should the number be reported?

**Solution.**
1. Half a unit of the thousands place is $500$, and $d = 300 \leq 500$. So the thousands digit $8$ is reliable, and so are the digits to its left: $5, 2, 4$.
2. Half a unit of the hundreds place is $50$, and $d = 300 > 50$. So the hundreds digit $3$ is **not** reliable.
3. We keep the reliable digits and round to thousands: the population is about $5\,248\,000$.
:::

:::example Approximating $\sqrt{2}$ with a calculator
The calculator shows $\sqrt{2} = 1.41421356\ldots$. Round it to 2 and to 3 decimal places. Give the error bound, the relative error bound and the reliable digits in each case.

**Solution.**
1. To 2 decimal places: $\bar{a} = 1.41$. The error is $|\sqrt{2} - 1.41| = 0.0042\ldots \leq 0.005$, so $d = 0.005$. Half a unit of the hundredths place is $0.005$, so all digits $1, 4, 1$ are reliable. The relative error is $\delta \leq \dfrac{0.005}{1.41} \approx 0.35\%$.
2. To 3 decimal places: $\bar{a} = 1.414$. The error is $|\sqrt{2} - 1.414| = 0.00021\ldots \leq 0.0005$, so $d = 0.0005$. All four digits $1, 4, 1, 4$ are reliable. The relative error is $\delta \leq \dfrac{0.0005}{1.414} \approx 0.035\%$.
3. More decimal places give a smaller error bound and more reliable digits.
:::

:::warning Common mistakes
- Writing $a = \bar{a} \pm d$ with a $d$ that is too small. The bound $d$ must be **at least** the true error.
- Thinking that all printed digits are reliable. A calculator or a ruler can show digits that are only guesses.
- Forgetting that rounding itself creates an error of up to half a unit of the last place.
:::

## Key terms

:::terms
- approximate number | số gần đúng
- absolute error | sai số tuyệt đối
- error bound | độ chính xác (của số gần đúng)
- relative error | sai số tương đối
- rounding | quy tròn
- significant figure | chữ số có nghĩa
- reliable digit | chữ số chắc
:::

## Summary

- An approximation $\bar{a}$ of the exact value $a$ has absolute error $\Delta = |a - \bar{a}|$. An error bound $d$ satisfies $\Delta \leq d$, and we write $a = \bar{a} \pm d$.
- The relative error is $\delta = \Delta/|\bar{a}|$, bounded by $d/|\bar{a}|$. Use it to compare the accuracy of different measurements.
- Rounding to a place gives an error of at most half a unit of that place.
- A digit is reliable if $d$ is at most half a unit of its place. Report only reliable digits.

## Practice

:::practice
1. Round $7\,459$ to tens and to hundreds, and round $3.14159$ to 2 and to 4 decimal places.
2. How many significant figures do $0.0305$, $2.40$ and $40.007$ have? Round $0.0071849$ to 2 significant figures.
3. Use $\bar{a} = 1.73$ as an approximation of $\sqrt{3} = 1.7320508\ldots$. Find $\Delta$ (to 4 decimal places, rounding up), then a relative error bound as a percentage (2 decimal places).
4. A tailor measures a cloth $8.5\text{ m}$ long with $d = 0.05\text{ m}$, and a builder measures a wall $120\text{ m}$ long with $d = 0.5\text{ m}$. Whose measurement is more accurate?
5. Which is the better approximation of $\pi$: $\dfrac{22}{7}$ or $3.1416$? Compare their absolute errors.
6. Let $\bar{a} = 1\,536$ with $d = 4$. Which digits are reliable? Write the result with reliable digits only.
7. Let $\bar{a} = 45.60$ with $d = 0.03$. Which digits are reliable? How would you report it?
8. The sides of a rectangle are measured as $25.4\text{ cm}$ and $12.6\text{ cm}$, each with $d = 0.1\text{ cm}$. Find the perimeter and an error bound for it, then its relative error bound.
9. A student writes $\bar{a} = 2.500$ with $d = 0.001$ and claims that all four digits are reliable. Is that right? Use the idea of half a unit, and say how the number should be reported.
10. (Challenge) For the rectangle in exercise 8, the area is estimated as $25.4 \times 12.6$. Find the possible smallest and largest areas, an error bound $d$ for the estimated area, and the reliable digits.
:::

:::solution Show solutions
1. To tens: $7\,459 \to 7\,460$ (the units digit $9 \geq 5$). To hundreds: $7\,459 \to 7\,500$ (the tens digit $5 \geq 5$). Then $3.14159 \to 3.14$ (the next digit is $1$) and $3.14159 \to 3.1416$ (the next digit is $9$).
2. $0.0305$ has 3 significant figures, $2.40$ has 3, and $40.007$ has 5. For $0.0071849$ keep $7$ and $1$; the next digit is $8 \geq 5$, so round up to $0.0072$.
3. $\Delta = |1.7320508 - 1.73| = 0.0020508 \approx 0.0021$ (rounded up). So $d = 0.0021$ and $\delta \leq \dfrac{0.0021}{1.73} \approx 0.0012 = 0.12\%$.
4. Tailor: $\dfrac{0.05}{8.5} \approx 0.0059 = 0.59\%$. Builder: $\dfrac{0.5}{120} \approx 0.0042 = 0.42\%$. The builder's measurement is more accurate because its relative error is smaller.
5. $\left|\dfrac{22}{7} - \pi\right| \approx 0.00126$ and $|3.1416 - \pi| \approx 0.0000073$. The second error is much smaller, so $3.1416$ is the better approximation.
6. Half a unit of the tens place is $5 \geq 4$, so the tens digit $3$ is reliable (and so are $1$ and $5$). Half a unit of the units place is $0.5 < 4$, so the digit $6$ is not reliable. Report $1\,540$ (rounded to tens).
7. Half a unit of the tenths place is $0.05 \geq 0.03$, so the digit $6$ is reliable, as are $4$ and $5$. Half a unit of the hundredths place is $0.005 < 0.03$, so the last digit $0$ is not reliable. Report $45.6$.
8. Perimeter $\bar{P} = 2(25.4 + 12.6) = 76.0\text{ cm}$. Each side may be off by $0.1$, so $d = 2(0.1 + 0.1) = 0.4\text{ cm}$ and $P = 76.0 \pm 0.4$. Relative error: $\delta \leq \dfrac{0.4}{76.0} \approx 0.0053 = 0.53\%$.
9. No. The last digit $0$ is in the thousandths place. The error $d = 0.001$ is larger than half a unit of the thousandths place ($0.0005$), so the last $0$ is not reliable. It is smaller than half a unit of the hundredths place ($0.005$), so the digits $2, 5, 0$ are reliable. Report $2.50$.
10. The smallest area is $25.3 \times 12.5 = 316.25$ and the largest is $25.5 \times 12.7 = 323.85$. The estimate is $25.4 \times 12.6 = 320.04\text{ cm}^2$. The distances are $|323.85 - 320.04| = 3.81$ and $|316.25 - 320.04| = 3.79$, so $d = 3.81$. Half a unit of the tens place is $5 \geq 3.81$, so the digits $3$ and $2$ are reliable, but half a unit of the units place is $0.5 < 3.81$, so $0$ is not. Report the area as about $320\text{ cm}^2$.
:::
