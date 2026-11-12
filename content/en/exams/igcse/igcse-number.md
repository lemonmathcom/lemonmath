---
title: "Number: fractions, percentages, indices, bounds"
description: IGCSE Mathematics Extended: fractions without a calculator, percentages and reverse percentages, standard form, indices, surds, recurring decimals and bounds.
minutes: 50
---

:::goals
- Calculate with fractions and mixed numbers without a calculator, and write recurring decimals as fractions.
- Solve percentage problems, including reverse percentages and compound growth, and work with ratio and proportion.
- Use standard form and the laws of indices, including negative and fractional indices.
- Simplify surds and rationalise denominators.
- Find upper and lower bounds of measurements and of calculations with them.
:::

A jacket is on sale for $68$ dollars after a $15\%$ discount. What was the original price? Many people answer by adding $15\%$ of $68$ back on, and get it wrong. Number questions in IGCSE are full of small traps like this, and they are worth many marks, especially on the non-calculator paper.

This lesson collects the number skills that appear again and again: fractions, percentages, powers, roots and bounds. None of them is difficult on its own. What makes the difference is understanding **why** each method works, so that you choose the right one under pressure and can check your answer by common sense.

## Fractions and recurring decimals

To add or subtract fractions, use a common denominator; to multiply, multiply tops and bottoms; to divide, multiply by the reciprocal. Always change mixed numbers to improper fractions first.

A **recurring decimal** can be written as a fraction. If the block of $k$ digits repeats, multiply by $10^k$ and subtract to remove the repeating part.

:::example A recurring decimal
Write $0.\dot4\dot5$ as a fraction in its simplest form.

**Solution.** Let $x=0.454545\ldots$. Two digits repeat, so multiply by $100$: $100x=45.4545\ldots$

Subtracting removes the repeating tail: $100x-x=45$, so $99x=45$ and $x=\dfrac{45}{99}=\dfrac{5}{11}$.

So $0.\dot4\dot5=\dfrac{5}{11}$.
:::

## Percentages

A percentage change multiplies by a **multiplier**: an increase of $r\%$ multiplies by $1+\dfrac{r}{100}$, a decrease by $1-\dfrac{r}{100}$. Repeated changes multiply repeatedly, which gives compound interest and depreciation: $P\left(1+\dfrac{r}{100}\right)^n$.

For a **reverse percentage**, the final amount is known and the original is not. Divide by the multiplier; do not take a percentage of the new amount.

:::example The jacket on sale
After a $15\%$ discount, a jacket costs $68$ dollars. What was the original price?
A. $78.20$ dollars
B. $80$ dollars
C. $57.80$ dollars
D. $83$ dollars

**Solution.** The sale price is $85\%$ of the original, so original $\times0.85=68$.

Dividing by the multiplier, the original price is $\dfrac{68}{0.85}=80$ dollars. Check: $15\%$ of $80$ is $12$, and $80-12=68$.

So the original price was $80$ dollars, answer **B**. Option A adds $15\%$ of $68$, which is the common mistake: the $15\%$ was taken from the original price, not from $68$.
:::

## Ratio and proportion

A ratio compares parts of a whole. To share an amount in the ratio $a:b:c$, find the total number of parts, $a+b+c$, work out the value of one part, then multiply. Simplify ratios by dividing every part by the same number, just as you simplify fractions.

Two quantities are in **direct proportion** when doubling one doubles the other: $y=kx$. They are in **inverse proportion** when doubling one halves the other: $y=\dfrac kx$. Why does this matter? Because once you find $k$ from one pair of values, every other value follows. If $5$ workers take $12$ days to build a wall, the number of worker-days, $60$, stays the same, so $6$ workers take $\dfrac{60}{6}=10$ days. Before calculating, ask yourself whether the answer should be bigger or smaller; that one question catches most proportion mistakes.

## Standard form, indices and surds

**Standard form** is $a\times10^k$ with $1\le a<10$. The **laws of indices**:
$$a^m\times a^n=a^{m+n},\quad a^m\div a^n=a^{m-n},\quad (a^m)^n=a^{mn},\quad a^0=1,\quad a^{-n}=\frac{1}{a^n},\quad a^{\frac mn}=\left(\sqrt[n]{a}\right)^m.$$
Why is $a^{-n}=\dfrac{1}{a^n}$? Because dividing $a^2$ by $a^5$ gives $\dfrac{1}{a^3}$, and the subtraction law gives $a^{2-5}=a^{-3}$; both must be the same.

A **surd** is a root that cannot be simplified to a whole number. Simplify by taking out square factors, $\sqrt{ab}=\sqrt a\sqrt b$, and **rationalise** a denominator by multiplying top and bottom by the surd.

:::example A fractional index
The value of $27^{-\frac23}$ is
A. $-9$
B. $-18$
C. $\dfrac19$
D. $\dfrac{1}{18}$

**Solution.** Deal with each part of the index in turn. The denominator $3$ means a cube root: $\sqrt[3]{27}=3$. The numerator $2$ means a square: $3^2=9$. The minus sign means the reciprocal.

So $27^{-\frac23}=\dfrac{1}{9}$, answer **C**. A negative index never makes the number negative.
:::

:::example Rationalising a denominator
Simplify $\dfrac{6}{\sqrt3}$ and $(2+\sqrt3)(2-\sqrt3)$.

**Solution.** Multiply top and bottom by $\sqrt3$: $\dfrac{6}{\sqrt3}=\dfrac{6\sqrt3}{3}=2\sqrt3$.

The second product is a difference of two squares: $(2+\sqrt3)(2-\sqrt3)=4-3=1$.

So the answers are $2\sqrt3$ and $1$.
:::

## Upper and lower bounds

A measurement rounded to a given accuracy lies within half a unit of that accuracy. A length of $8.4$ cm to $1$ decimal place lies in $8.35\le l<8.45$.

For calculations, choose the bounds that make the result largest or smallest:

| Calculation | Upper bound | Lower bound |
|---|---|---|
| $a+b$ | upper $+$ upper | lower $+$ lower |
| $a-b$ | upper $-$ lower | lower $-$ upper |
| $a\times b$ | upper $\times$ upper | lower $\times$ lower |
| $a\div b$ | upper $\div$ lower | lower $\div$ upper |

:::example Bounds of a speed
A runner covers $120$ m, measured to the nearest $10$ m, in $15.2$ s, measured to the nearest $0.1$ s. Find the upper bound of the runner's speed.

**Solution.** The distance lies in $115\le d<125$ and the time in $15.15\le t<15.25$.

Speed is distance divided by time, so it is largest with the largest distance and the smallest time: $\dfrac{125}{15.15}\approx8.25$ m/s.

So the upper bound of the speed is $8.25$ m/s, to three significant figures.
:::

:::warning Common traps
- **Reverse percentages:** divide by the multiplier; never take a percentage of the new amount.
- **Negative indices:** $5^{-2}=\dfrac{1}{25}$, not $-25$.
- **Upper bound of a quotient:** largest top, smallest bottom.
- **Mixed numbers:** change to improper fractions before multiplying or dividing.
- **Standard form:** $a$ must be at least $1$ and less than $10$; $45\times10^3$ is not in standard form.
:::

:::terms
- improper fraction / mixed number | phân số không thực sự / hỗn số
- recurring decimal | số thập phân vô hạn tuần hoàn
- multiplier | hệ số nhân
- reverse percentage | bài toán phần trăm ngược
- standard form | dạng chuẩn
- index (indices) | số mũ
- surd | căn thức
- rationalise the denominator | trục căn thức ở mẫu
- upper / lower bound | cận trên / cận dưới
:::

## Similar exercises

:::exercise
Without a calculator, work out $3\dfrac13-1\dfrac34$.

::hint
**What you need:** change to improper fractions with denominator $12$.

::solution
To subtract mixed numbers, we change them to improper fractions with the common denominator $12$. As improper fractions, $3\dfrac13=\dfrac{10}{3}=\dfrac{40}{12}$ and $1\dfrac34=\dfrac74=\dfrac{21}{12}$.

Subtracting, $\dfrac{40}{12}-\dfrac{21}{12}=\dfrac{19}{12}=1\dfrac{7}{12}$.

So $3\dfrac13-1\dfrac34=1\dfrac{7}{12}$.

**Answer.** $1\dfrac{7}{12}$.
:::

:::exercise
Without a calculator, work out $(3\times10^5)\times(4\times10^{-2})$, giving your answer in standard form.

::hint
**What you need:** multiply the numbers, add the powers of $10$.

::solution
Multiplying the number parts gives $3\times4=12$, and the powers of $10$ give $10^{5+(-2)}=10^3$.

So the product is $12\times10^3$; since $12$ is not between $1$ and $10$, we write it as $1.2\times10^4$.

**Answer.** $1.2\times10^4$.
:::

:::exercise
Simplify $\sqrt{50}+\sqrt{18}$.

::hint
**What you need:** $50=25\times2$ and $18=9\times2$.

::solution
The two surds cannot be added yet because they are not like terms, so we simplify each first. Taking out square factors, $\sqrt{50}=\sqrt{25}\sqrt2=5\sqrt2$ and $\sqrt{18}=\sqrt9\sqrt2=3\sqrt2$.

These are like terms, so $5\sqrt2+3\sqrt2=8\sqrt2$.

So $\sqrt{50}+\sqrt{18}=8\sqrt2$.

**Answer.** $8\sqrt2$.
:::

:::exercise
Write $0.\dot2\dot7$ as a fraction in its simplest form.

::hint
**What you need:** two digits repeat, so use $100x-x$.

::solution
The block $27$ repeats, so we multiply by $100$ to line up the tails. Let $x=0.272727\ldots$. Then $100x=27.2727\ldots$, and subtracting gives $99x=27$.

So $x=\dfrac{27}{99}=\dfrac{3}{11}$.

**Answer.** $\dfrac{3}{11}$.
:::

:::exercise
Share $360$ dollars in the ratio $2:3:4$.

::hint
**What you need:** there are $2+3+4=9$ parts.

::solution
There are $2+3+4=9$ equal parts, so one part is $\dfrac{360}{9}=40$ dollars.

The shares are $2\times40=80$, $3\times40=120$ and $4\times40=160$ dollars; check: $80+120+160=360$.

So the shares are $80$, $120$ and $160$ dollars.

**Answer.** $80$, $120$ and $160$ dollars.
:::

## Applied exercises

:::exercise
Lan invests $5000$ dollars at $3\%$ per year compound interest.
a) Find the value after $4$ years.
b) Find the overall percentage increase.

::hint
**What you need:** multiplier $1.03$, applied $4$ times.

::solution
a) The value after $4$ years is $5000(1.03)^4\approx5627.54$ dollars.

b) The increase is $627.54$ dollars, and $\dfrac{627.54}{5000}\times100\%\approx12.6\%$.

So the investment is worth $5627.54$ dollars, an increase of about $12.6\%$; this is more than $4\times3\%=12\%$ because interest is earned on interest.

**Answer.** a) $5627.54$ dollars; b) about $12.6\%$.
:::

:::exercise
A price of $54$ dollars includes a tax of $20\%$. Find the price before tax.

::hint
**What you need:** $54$ is $120\%$ of the price before tax.

::solution
The price including tax is $120\%$ of the price before tax, so price $\times1.2=54$.

Dividing by the multiplier, the price before tax is $\dfrac{54}{1.2}=45$ dollars. Check: $20\%$ of $45$ is $9$, and $45+9=54$.

So the price before tax is $45$ dollars.

**Answer.** $45$ dollars.
:::

:::exercise
A car travels $250$ km, correct to the nearest $10$ km, in $3.5$ hours, correct to the nearest half hour. Find the upper and lower bounds of its average speed.

::hint
**What you need:** $245\le d<255$ and $3.25\le t<3.75$.

::solution
The distance lies in $245\le d<255$ km and the time in $3.25\le t<3.75$ h.

The upper bound of the speed uses the largest distance and the smallest time: $\dfrac{255}{3.25}\approx78.5$ km/h. The lower bound uses the smallest distance and the largest time: $\dfrac{245}{3.75}\approx65.3$ km/h.

So the average speed lies between about $65.3$ and $78.5$ km/h.

**Answer.** Upper $78.5$ km/h; lower $65.3$ km/h.
:::

:::exercise Challenge
Solve $4^x=8^{x-1}$.

::hint
**What you need:** write both sides as powers of $2$.

::solution
Since $4=2^2$ and $8=2^3$, the equation becomes $2^{2x}=2^{3(x-1)}=2^{3x-3}$.

Two powers of $2$ are equal only when the indices are equal, so $2x=3x-3$ and $x=3$. Check: $4^3=64$ and $8^2=64$.

So $x=3$.

**Answer.** $x=3$.
:::

:::quiz
::mc
The value of $5^{-2}$ is
A. $-25$
B. $-10$
C. $\dfrac{1}{10}$
D. $\dfrac{1}{25}$
::key D
$5^{-2}=\dfrac{1}{5^2}$.

::mc
$0.00406$ in standard form is
A. $4.06\times10^{-3}$
B. $4.06\times10^{3}$
C. $40.6\times10^{-4}$
D. $4.06\times10^{-2}$
::key A
Move the decimal point $3$ places to the right.

::mc
A length is $7.3$ m, correct to $1$ decimal place. Its upper bound is
A. $7.4$ m
B. $7.35$ m
C. $7.31$ m
D. $7.349$ m
::key B
Half of $0.1$ is $0.05$.

::mc
$\sqrt{12}$ simplifies to
A. $3\sqrt2$
B. $4\sqrt3$
C. $2\sqrt3$
D. $6\sqrt2$
::key C
$\sqrt{4\times3}=2\sqrt3$.

::tf
Decide whether each statement is true or false.
a) $16^{\frac12}=4$.
b) $16^{\frac34}=8$.
c) $16^0=0$.
d) $16^{-1}=\dfrac{1}{16}$.
::key T T F T
Any non-zero number to the power $0$ is $1$.

::sa
Increase $40$ by $15\%$.
::key 46
$40\times1.15=46$.

::sa
Evaluate $8^{\frac23}$.
::key 4
$\sqrt[3]8=2$ and $2^2=4$.
:::
