---
title: Rounding and estimating
description: Round integers and decimals to a given place, round negative decimals, and use estimates to check answers and to work out costs when shopping.
minutes: 25
---

:::goals
- Round integers and decimals to a given place.
- Round negative decimals.
- Estimate the result of a calculation by rounding the numbers.
- Use estimates to spot wrong answers and to make quick decisions in everyday life.
:::

Minh's mother goes to the supermarket with $200$ thousand dong in her purse. She picks $3$ kilograms of rice at $18\,900$ dong per kilogram, $2$ cartons of milk at $31\,500$ dong per carton and $1$ bottle of cooking oil at $48\,200$ dong. Before going to the checkout, she thinks for a few seconds and nods: "That's enough."

She does not write out a sum or use a calculator. She just rounds the numbers so they are easy to add in her head. That is **estimating**, a skill grown-ups use every day: at the market, when checking a bill, when guessing how long a journey will take. This lesson teaches you to round correctly and to use rounding sensibly.

## Rounding numbers

Look at the number $2\,685$ on a number line that only shows whole hundreds. $2\,685$ lies between $2\,600$ and $2\,700$, and it is closer to $2\,700$. Rounding $2\,685$ to the nearest hundred means replacing it with the closest whole hundred, that is, $2\,700$.

:::graph $2\,685$ is closer to $2\,700$ than to $2\,600$
alt: Part of a number line around 2600 to 2700; the point 2685 is closer to the 2700 end; the halfway point 2650 is marked
x: 2450..2800
y: -1..1
shape: free
segment: (2450, 0) (2800, 0)
point: (2600, 0) "2600" below
point: (2650, 0) "2650" below
point: (2700, 0) "2700" below
open: (2685, 0) "2685" above
:::

Looking at a number line every time would be slow. Luckily, we only need to look at **one digit** to know which half the number is in.

:::theorem Rule for rounding
To round a number to a given place, look at the **digit just to the right** of that place:
- If that digit is **less than $5$**, keep the digit in the rounding place and replace all the digits to its right with $0$ (in the decimal part, drop them).
- If that digit is **$5$ or more**, add $1$ to the digit in the rounding place, then do the same.
:::

For $2\,685$ to the nearest hundred: the hundreds digit is $6$ and the digit to its right is $8\ge5$, so $6$ becomes $7$ and the digits after it become $0$, giving $2\,700$.

A rounded result is shown with the sign "$\approx$" (read "is approximately equal to"): $2\,685\approx2\,700$.

:::note Rounding negative decimals
To round a negative decimal, round its opposite and put a "$-$" sign in front of the result. For example, $12.456\approx12.5$ (to 1 decimal place), so $-12.456\approx-12.5$.
:::

## Estimating the result of a calculation

To estimate the result of a calculation, round the numbers so they are easy to work with in your head, then calculate with the rounded numbers. There is no fixed rule about which place to round to: choose one that makes the calculation easy while staying close enough.

For example, $19.8\cdot5.1\approx20\cdot5=100$. The exact result is $100.98$, very close to $100$.

Estimating has two big uses:

1. **Checking a result.** If your calculator shows $4.9\cdot21.3=10.437$, the estimate $5\cdot20=100$ tells you straight away that something is wrong: you probably put the decimal point in the wrong place.
2. **Deciding quickly.** When you do not need the exact number, only "enough or not enough", "in time or not in time", an estimate saves a lot of time.

:::tip Round up to be safe
When you are worried about running short, for example when estimating the cost of shopping, round the prices **up**. If the estimated total is still within the money you have, you certainly have enough.
:::

## Examples

We start with a familiar decimal.

:::example Rounding a decimal
Round $3.1416$:

a) to 1 decimal place;

b) to 2 decimal places;

c) to 3 decimal places.

**Solution.**

a) The tenths digit is $1$ and the digit to its right is $4<5$. We keep it and drop the digits after it: $3.1416\approx3.1$.

b) The hundredths digit is $4$ and the digit to its right is $1<5$. We get $3.1416\approx3.14$.

c) The thousandths digit is $1$ and the digit to its right is $6\ge5$. We change $1$ into $2$: $3.1416\approx3.142$.

So the results are $3.1$; $3.14$; $3.142$.
:::

Rounding an integer to different places gives different results.

:::example Rounding an integer
Round $2\,685$ to the nearest ten, hundred and thousand.

**Solution.**

To the nearest ten: the tens digit is $8$ and the digit to its right is $5\ge5$, so $2\,685\approx2\,690$.

To the nearest hundred: the hundreds digit is $6$ and the digit to its right is $8\ge5$, so $2\,685\approx2\,700$.

To the nearest thousand: the thousands digit is $2$ and the digit to its right is $6\ge5$, so $2\,685\approx3\,000$.

So $2\,685\approx2\,690$ (nearest ten); $2\,685\approx2\,700$ (nearest hundred); $2\,685\approx3\,000$ (nearest thousand).
:::

For a negative number, we work with its opposite.

:::example Rounding a negative decimal
Round $-12.456$:

a) to 1 decimal place;

b) to the nearest whole number.

**Solution.**

The opposite of $-12.456$ is $12.456$.

a) Round $12.456$ to 1 decimal place: the digit to the right of the tenths place is $5\ge5$, so $12.456\approx12.5$. Hence $-12.456\approx-12.5$.

b) Round $12.456$ to the nearest whole number: the digit to the right of the units place is $4<5$, so $12.456\approx12$. Hence $-12.456\approx-12$.

So a) $-12.5$; b) $-12$.
:::

An estimate helps us spot a mistake straight away.

:::example Is this answer right?
An uses a calculator and gets $4.9\cdot21.3=10.437$. Without working it out again, decide whether this answer is reasonable. If not, find the correct answer.

**Solution.**

Round the factors to the nearest whole number and the nearest ten: $4.9\approx5$ and $21.3\approx20$. Hence
$$4.9\cdot21.3\approx5\cdot20=100.$$

The answer $10.437$ is about $10$ times smaller than the estimate, so it is not reasonable. An probably put the decimal point in the wrong place.

Working it out again: $49\cdot213=10\,437$; the two factors have two decimal places altogether, so $4.9\cdot21.3=104.37$.

So An's answer is wrong; the correct answer is $104.37$, very close to the estimate of $100$.
:::

Finally, back to Minh's mother at the supermarket.

:::example Does she have enough money?
Minh's mother has $200$ thousand dong. She buys $3$ kg of rice at $18\,900$ dong/kg, $2$ cartons of milk at $31\,500$ dong each and $1$ bottle of cooking oil at $48\,200$ dong. By estimating, decide whether she has enough money. Then work out the exact amount.

**Solution.**

*Understand.* We only need to know "enough or not enough", so an estimate will do.

*Plan.* To be safe, we round each price **up** to the nearest thousand, then add.

*Solve.* Rounding up: $18\,900\to19\,000$; $31\,500\to32\,000$; $48\,200\to49\,000$. The estimated total is
$$3\cdot19\,000+2\cdot32\,000+49\,000=57\,000+64\,000+49\,000=170\,000\ (\text{dong}).$$

Since every price was rounded up, the real total is no more than $170\,000$ dong, which is less than $200\,000$ dong. So she has enough money.

The exact amount is
$$3\cdot18\,900+2\cdot31\,500+48\,200=56\,700+63\,000+48\,200=167\,900\ (\text{dong}).$$

So she has enough money; she has to pay $167\,900$ dong.

*Look back.* The estimate of $170\,000$ is only $2\,100$ dong away from the real total, good enough for the decision. If we had rounded by the usual rule, $31\,500\to32\,000$ but $48\,200\to48\,000$, one up and one down; then we could not be sure whether the estimate was above or below the real total.
:::

:::warning Common mistakes
- **Looking at the wrong digit.** Wrong: rounding $3.1416$ to 2 decimal places, looking at the last digit $6$ and getting $3.15$. Why it is wrong: only the digit **just to the right** of the rounding place matters, here $1$. Right: $3.1416\approx3.14$.
- **Rounding a negative number "up" towards the larger number.** Wrong: $-12.456\approx-12.4$ "because we round up". Why it is wrong: for a negative number, round the opposite and then put the "$-$" sign back; $12.456\approx12.5$. Right: $-12.456\approx-12.5$.
- **Forgetting to replace the digits on the right with $0$.** Wrong: $2\,685$ rounded to the nearest hundred is $27$. Why it is wrong: a whole hundred must keep its size, with zeros in the tens and units places. Right: $2\,685\approx2\,700$.
- **Rounding too roughly when estimating.** Wrong: estimating $49.7\cdot2.03\approx0\cdot2=0$. Why it is wrong: rounding $49.7$ to the nearest hundred throws away all the information. Right: $49.7\cdot2.03\approx50\cdot2=100$.
:::

## Key terms

:::terms
- rounding | làm tròn số
- rounding place | hàng làm tròn
- approximately equal to | xấp xỉ
- estimate | ước lượng
- round up | làm tròn lên
- tenths place | hàng phần mười
- hundredths place | hàng phần trăm
- units place | hàng đơn vị
- exact result | kết quả chính xác
:::

## Summary

- Rounding: look at the digit just to the right of the rounding place; less than $5$, keep the digit; $5$ or more, add $1$ to it; the digits to the right become $0$ (in the decimal part, drop them).
- Negative decimals: round the opposite, then put the "$-$" sign in front.
- The sign "$\approx$" means "is approximately equal to".
- Estimating: round the numbers so they are easy to work with, then calculate; use it to check answers and to decide quickly. When worried about running short, round up.

Minh's mother knew she had enough money without a calculator, because she estimated with a purpose: rounding up to be safe. From now on, every time you finish a calculator calculation, do a quick estimate in your head. It takes only a few seconds, and it will save you from many misplaced decimal points. If you need to revise calculating with decimals, see [Decimals. Calculating with decimals](lesson:decimal-numbers).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Round $47.3862$:

a) to the nearest whole number;

b) to 1 decimal place;

c) to 2 decimal places;

d) to the nearest ten.

::hint
**What you need:** look at the digit just to the right of the rounding place.

**Steps:**
1. Find the digit in the rounding place and the digit just to its right.
2. Apply the rounding rule.

::solution
a) The digit to the right of the units place is $3<5$, so $47.3862\approx47$.

b) The digit to the right of the tenths place is $8\ge5$, so $3$ becomes $4$: $47.3862\approx47.4$.

c) The digit to the right of the hundredths place is $6\ge5$, so $8$ becomes $9$: $47.3862\approx47.39$.

d) The digit to the right of the tens place is $7\ge5$, so $4$ becomes $5$: $47.3862\approx50$.

So the results are $47$; $47.4$; $47.39$; $50$.

**Answer.** a) $47$; b) $47.4$; c) $47.39$; d) $50$.
:::

:::exercise
Round $-8.0549$:

a) to 1 decimal place;

b) to 2 decimal places;

c) to the nearest whole number.

::hint
**What you need:** round the opposite, $8.0549$, then put the "$-$" sign in front.

**Steps:**
1. Round $8.0549$ to the required place.
2. Put a "$-$" sign in front of the result.

::solution
The opposite of $-8.0549$ is $8.0549$.

a) The digit to the right of the tenths place is $5\ge5$, so $0$ becomes $1$: $8.0549\approx8.1$. Hence $-8.0549\approx-8.1$.

b) The digit to the right of the hundredths place is $4<5$, so $8.0549\approx8.05$. Hence $-8.0549\approx-8.05$.

c) The digit to the right of the units place is $0<5$, so $8.0549\approx8$. Hence $-8.0549\approx-8$.

So the results are $-8.1$; $-8.05$; $-8$.

**Answer.** a) $-8.1$; b) $-8.05$; c) $-8$.
:::

:::exercise
Round $1\,234\,567$ to the nearest thousand, the nearest hundred thousand and the nearest million.

::hint
**What you need:** when rounding an integer, the digits to the right of the rounding place become $0$.

**Steps:**
1. Find the digit in the rounding place and the digit just to its right.
2. Apply the rule and replace the later digits with $0$.

::solution
To the nearest thousand: the thousands digit is $4$ and the digit to its right is $5\ge5$, so $1\,234\,567\approx1\,235\,000$.

To the nearest hundred thousand: the hundred-thousands digit is $2$ and the digit to its right is $3<5$, so $1\,234\,567\approx1\,200\,000$.

To the nearest million: the millions digit is $1$ and the digit to its right is $2<5$, so $1\,234\,567\approx1\,000\,000$.

So the results are $1\,235\,000$; $1\,200\,000$; $1\,000\,000$.

**Answer.** $1\,235\,000$; $1\,200\,000$; $1\,000\,000$.
:::

:::exercise
Estimate the results of these calculations by rounding the numbers so they are easy to work with:

a) $61.8+29.3$;

b) $7.9\cdot4.05$;

c) $59.4:3.1$.

::hint
**What you need:** round each number to a suitable place so the calculation can be done in your head.

**Steps:**
1. Round each number.
2. Calculate in your head with the rounded numbers.

::solution
a) Round to the nearest whole number: $61.8\approx62$ and $29.3\approx29$. Hence
$$61.8+29.3\approx62+29=91.$$

b) Round to the nearest whole number: $7.9\approx8$ and $4.05\approx4$. Hence
$$7.9\cdot4.05\approx8\cdot4=32.$$

c) Round the number being divided to the nearest ten and the divisor to the nearest whole number: $59.4\approx60$ and $3.1\approx3$. Hence
$$59.4:3.1\approx60:3=20.$$

So the results are approximately $91$; $32$; $20$.

**Answer.** a) $\approx91$; b) $\approx32$; c) $\approx20$.
:::

:::exercise
Nam works out $0.48\cdot51=244.8$. Use an estimate to check Nam's answer, then find the correct answer.

::hint
**What you need:** $0.48\approx0.5$; $51\approx50$.

**Steps:**
1. Estimate the product.
2. Compare it with Nam's answer; if it is wrong, work it out again.

::solution
Rounding: $0.48\approx0.5$ and $51\approx50$. Hence
$$0.48\cdot51\approx0.5\cdot50=25.$$

The answer $244.8$ is about $10$ times bigger than the estimate, so Nam's answer is wrong.

Working it out again: $48\cdot51=2448$; the factor $0.48$ has two decimal places, so $0.48\cdot51=24.48$.

So Nam's answer is wrong; the correct answer is $24.48$.

**Answer.** Wrong; the correct answer is $24.48$.
:::

:::exercise
A rectangular room is $12.45$ m long and $7.8$ m wide. Find the area of the room and round it to 1 decimal place.

::hint
**What you need:** the area of a rectangle is length times width.

**Steps:**
1. Work out $12.45\cdot7.8$.
2. Round to 1 decimal place.

::solution
The area of the room is
$$12.45\cdot7.8=97.11\ (\text{m}^2).$$

The digit to the right of the tenths place is $1<5$, so $97.11\approx97.1$.

So the area of the room is approximately $97.1\ \text{m}^2$.

**Answer.** $\approx97.1\ \text{m}^2$.
:::

:::exercise
A car has to travel $245.6$ km at an average speed of $49.2$ km/h. Estimate how long the journey will take.

::hint
**What you need:** time equals distance divided by speed.

**Steps:**
1. Round the distance and the speed to the nearest ten.
2. Divide in your head.

::solution
Rounding to the nearest ten: $245.6\approx250$ and $49.2\approx50$.

The time for the journey is approximately
$$250:50=5\ (\text{hours}).$$

So the journey takes about $5$ hours.

**Answer.** About $5$ hours.
:::

:::exercise
A round plate has a diameter of $12.5$ cm. Its circumference is given by $C=3.14\cdot d$, where $d$ is the diameter. Find the circumference of the plate and round it to the nearest whole number.

::hint
**What you need:** $C=3.14\cdot d$; the rounding rule.

**Steps:**
1. Work out $3.14\cdot12.5$.
2. Round to the nearest whole number.

::solution
The circumference of the plate is
$$C=3.14\cdot12.5=39.25\ (\text{cm}).$$

The digit to the right of the units place is $2<5$, so $39.25\approx39$.

So the circumference of the plate is approximately $39$ cm.

**Answer.** $\approx39$ cm.
:::

:::exercise Challenge
How many positive decimals with exactly two decimal places round to $2.4$ when rounded to 1 decimal place? Find the smallest and the largest of them.

::hint
**What you need:** a number rounds to $2.4$ when it is closest to $2.4$: from halfway between $2.3$ and $2.4$ up to just before halfway between $2.4$ and $2.5$.

**Steps:**
1. Try $2.34$ and $2.35$; try $2.44$ and $2.45$.
2. List them and count.

::solution
A number with two decimal places that rounds to $2.4$ (to 1 decimal place) must have the form $2.3b$ or $2.4b$, where $b$ is a digit.

The number $2.3b$ rounds to $2.4$ when $b\ge5$, that is, $2.35$; $2.36$; $2.37$; $2.38$; $2.39$.

The number $2.4b$ rounds to $2.4$ when $b<5$, that is, $2.40$; $2.41$; $2.42$; $2.43$; $2.44$.

Other numbers (such as $2.34$ or $2.45$) round to $2.3$ or $2.5$.

There are $5+5=10$ numbers in all; the smallest is $2.35$ and the largest is $2.44$.

So there are $10$ numbers; the smallest is $2.35$ and the largest is $2.44$.

**Answer.** $10$ numbers; smallest $2.35$; largest $2.44$.
:::

## Mini test

:::quiz
::mc
$5.276$ rounded to 2 decimal places is
A. $5.27$.
B. $5.28$.
C. $5.3$.
D. $5.2$.
::key B
The digit to the right of the hundredths place is $6\ge5$, so $5.276\approx5.28$. A drops digits without rounding up; C rounds to 1 decimal place; D just cuts off.

::mc
$-3.46$ rounded to 1 decimal place is
A. $-3.4$.
B. $-3$.
C. $-3.5$.
D. $-4$.
::key C
Round $3.46\approx3.5$, then put the "$-$" sign back. A rounds the wrong way; B and D round to the nearest whole number.

::mc
$8\,652$ rounded to the nearest hundred is
A. $8\,600$.
B. $8\,650$.
C. $9\,000$.
D. $8\,700$.
::key D
The digit to the right of the hundreds place is $5\ge5$, so $8\,652\approx8\,700$. A wrongly keeps the digit; B rounds to the nearest ten; C rounds to the nearest thousand.

::mc
The value closest to $49.7\cdot2.03$ is
A. $100$.
B. $10$.
C. $1000$.
D. $50$.
::key A
$49.7\cdot2.03\approx50\cdot2=100$. B and C are $10$ times off (a misplaced decimal point); D forgets to multiply by $2$.

::tf
Let $a=17.0451$. Decide whether each statement is true or false.
a) $a$ rounded to the nearest whole number is $17$.
b) $a$ rounded to 1 decimal place is $17.1$.
c) $a$ rounded to 2 decimal places is $17.05$.
d) $a$ rounded to the nearest ten is $10$.
::key T F T F
a) True: the digit after the units place is $0$. b) False: the digit after the tenths place is $4<5$, so $a\approx17.0$. c) True: the digit after the hundredths place is $5$, so $4$ becomes $5$. d) False: the digit after the tens place is $7\ge5$, so $a\approx20$.

::sa
Round $2.718$ to 2 decimal places.
::key 2.72
The digit to the right of the hundredths place is $8\ge5$, so $2.718\approx2.72$.

::sa
Round $198.6$ to the nearest ten and $4.97$ to the nearest whole number, then estimate $198.6:4.97$.
::key 40
$198.6\approx200$ and $4.97\approx5$, so $198.6:4.97\approx200:5=40$.
:::
