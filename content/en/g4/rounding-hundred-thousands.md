---
title: Rounding to the nearest hundred thousand. Introducing the sequence of natural numbers
description: Learn to round to the nearest ten thousand and hundred thousand, then meet the sequence of natural numbers and the smallest natural number.
minutes: 20
---

:::goals
- Round numbers to the nearest thousand, ten thousand and hundred thousand.
- Use rounding in real situations and to estimate results.
- Recognise the sequence of natural numbers, the smallest natural number and consecutive natural numbers.
- Know that there is no largest natural number.
:::

A city (made-up numbers) has $2\,467\,891$ people. A newspaper article says: "The city has about $2\,500\,000$ people." What did the article do to the number $2\,467\,891$ to get $2\,500\,000$?

To do this yourself, you need the rule for rounding. After that you will look again at all the numbers you have met: the sequence of natural numbers.

## Rounding to the nearest hundred thousand

### Let's explore

The number $2\,467\,891$ lies between two consecutive whole numbers of hundred thousands, $2\,400\,000$ and $2\,500\,000$. See which one it is closer to:

- From $2\,400\,000$ to $2\,467\,891$ is $2\,467\,891-2\,400\,000=67\,891$.
- From $2\,467\,891$ to $2\,500\,000$ is $2\,500\,000-2\,467\,891=32\,109$.

Since $32\,109<67\,891$, the number $2\,467\,891$ is closer to $2\,500\,000$. You can see it more clearly on the number line:

:::graph On the number line: $2\,467\,891$ lies between $2\,400\,000$ and $2\,500\,000$, closer to $2\,500\,000$
alt: A number line from 2,400,000 to 2,500,000 with the points 2,400,000, 2,450,000, 2,467,891 and 2,500,000; the point 2,467,891 is to the right of the midpoint
x: 24..25
y: -1..1
segment: (24, 0) (25, 0)
point: (24, 0) "2,400,000" below
point: (24.5, 0) "2,450,000" above
point: (24.679, 0) "2,467,891" below
point: (25, 0) "2,500,000" above
:::

The midpoint of $2\,400\,000$ and $2\,500\,000$ is $2\,450\,000$. The number $2\,467\,891$ is greater than $2\,450\,000$, so it is on the side of $2\,500\,000$. We round $2\,467\,891$ to $2\,500\,000$ (rounding to the nearest hundred thousand).

### The rounding rule

:::theorem Rounding a number
To round a number to a certain place, we look at the digit in the place just to the right of it:
1. If that digit is less than $5$, keep the digit in the rounding place the same, then replace the digits to its right with $0$.
2. If that digit is $5$ or more, increase the digit in the rounding place by $1$, then replace the digits to its right with $0$.
:::

Why look at only one digit? Because the digit just to the right tells you whether the number is in the lower half or the upper half between two consecutive round numbers. A digit less than $5$ means the lower half, closer to the smaller round number. A digit of $5$ or more means the upper half, closer to the larger round number.

We start with rounding up.

:::example Rounding up
Round $2\,467\,891$ to the nearest hundred thousand.

**Solution.** The hundred-thousands digit of this number is $4$. The digit in the ten-thousands place, just to the right, is $6$. Since $6\geq5$, we increase the digit $4$ by $1$ to make $5$ and replace the digits to its right with $0$.

So $2\,467\,891$ rounded to the nearest hundred thousand is $2\,500\,000$.
:::

Now rounding down.

:::example Rounding down
Round $3\,241\,560$ to the nearest hundred thousand.

**Solution.** The hundred-thousands digit is $2$. The ten-thousands digit is $4$. Since $4<5$, we keep the digit $2$ the same and replace the digits to its right with $0$.

So $3\,241\,560$ rounded to the nearest hundred thousand is $3\,200\,000$.
:::

What if the number is exactly halfway between two round numbers?

:::example Exactly halfway
Round $750\,000$ to the nearest hundred thousand.

**Solution.** The hundred-thousands digit is $7$. The ten-thousands digit is $5$. Since $5\geq5$, we increase the digit $7$ by $1$ to make $8$.

So $750\,000$ rounded to the nearest hundred thousand is $800\,000$. When the digit to the right is exactly $5$, we always round up.
:::

Round the same number to different places.

:::example Rounding to several places
Round $468\,395$ to the nearest thousand, the nearest ten thousand and the nearest hundred thousand.

**Solution.**
- To the nearest thousand: the thousands digit is $8$ and the hundreds digit is $3$. Since $3<5$, keep $8$. The result is $468\,000$.
- To the nearest ten thousand: the ten-thousands digit is $6$ and the thousands digit is $8$. Since $8\geq5$, increase $6$ to $7$. The result is $470\,000$.
- To the nearest hundred thousand: the hundred-thousands digit is $4$ and the ten-thousands digit is $6$. Since $6\geq5$, increase $4$ to $5$. The result is $500\,000$.
:::

Use rounding to write numbers more simply.

:::example The size of a crowd
A match (made-up numbers) has $38\,460$ spectators. Round the number of spectators to the nearest thousand and to the nearest ten thousand.

**Solution.** To the nearest thousand: the thousands digit is $8$ and the hundreds digit is $4$. Since $4<5$, keep $8$, and the result is $38\,000$.

To the nearest ten thousand: the ten-thousands digit is $3$ and the thousands digit is $8$. Since $8\geq5$, increase $3$ to $4$, and the result is $40\,000$.

So there are about $38\,000$ spectators (to the nearest thousand) and about $40\,000$ spectators (to the nearest ten thousand).
:::

Finally, an estimation problem. We work in four steps: understand, plan, solve, look back.

:::example The total population of two provinces
Two provinces (made-up numbers) have populations of $1\,234\,567$ people and $2\,345\,678$ people. About how many people live in the two provinces altogether (to the nearest hundred thousand)?

**Understand.** We are given the populations of two provinces. We are asked for the total population, rounded to the nearest hundred thousand.

**Plan.** There are two ways: add exactly and then round the total, or round each number and then add. We try both ways and compare.

**Solve.**

Solution

Way 1: the total population of the two provinces is:
$$1\,234\,567+2\,345\,678=3\,580\,245\ \text{(people)}.$$
The ten-thousands digit of the total is $8$, and $8\geq5$, so rounding the total to the nearest hundred thousand gives $3\,600\,000$.

Way 2: rounding each number gives $1\,234\,567\approx1\,200\,000$ and $2\,345\,678\approx2\,300\,000$. Adding gives $1\,200\,000+2\,300\,000=3\,500\,000$.

Answer: about $3\,600\,000$ people (by way 1).

**Look back.** The two ways give two different results: $3\,600\,000$ and $3\,500\,000$. The exact total is $3\,580\,245$, which is closer to $3\,600\,000$ than to $3\,500\,000$. So way 1 (add exactly, then round) gives the better result, because rounding each number makes the errors add up.
:::

## The sequence of natural numbers

The numbers $0$, $1$, $2$, $3$, $4$, $5$, $\ldots$ are the natural numbers. When we write the natural numbers in order from smallest to largest, we get the sequence of natural numbers: $0$; $1$; $2$; $3$; $4$; $\ldots$

:::theorem The sequence of natural numbers
- The smallest natural number is $0$.
- Two consecutive natural numbers differ by $1$. The number after a number is $1$ more than it; the number before is $1$ less. The number $0$ has no number before it.
- There is no largest natural number.
:::

Why is there no largest natural number? Suppose there were a largest natural number $n$. Adding $1$ to $n$ gives $n+1$, which is still a natural number and is greater than $n$. This is a contradiction, so there is no largest natural number. However large a number you write, for example $1\,000\,000$ or $100\,000\,000$, there is always a larger one.

Write consecutive numbers in the sequence.

:::example Consecutive numbers
Write the $5$ consecutive natural numbers after $99\,998$.

**Solution.** Each number after is $1$ more than the one before:
$$99\,998+1=99\,999,\quad 99\,999+1=100\,000,\quad 100\,000+1=100\,001,$$
$$100\,001+1=100\,002,\quad 100\,002+1=100\,003.$$
So the $5$ numbers are $99\,999$; $100\,000$; $100\,001$; $100\,002$; $100\,003$.
:::

**Connection.** The sequence of natural numbers contains all the numbers you have used to count, read, write and compare. Rounding is a way of choosing the nearest round number in this sequence.

:::warning Mistakes to watch out for
- **Looking at the wrong digit.** Wrong: rounding $2\,467\,891$ to the nearest hundred thousand gives $2\,400\,000$. Why it is wrong: the hundred-thousands digit $4$ was looked at, but the ten-thousands digit $6$ should be looked at. Right: $2\,500\,000$.
- **Forgetting to change the digits on the right to $0$.** Wrong: rounding $468\,395$ to the nearest ten thousand gives $470\,395$. Why it is wrong: the digits to the right of the rounding place must become $0$. Right: $470\,000$.
- **Saying there is a largest natural number.** Wrong: the largest natural number is $999\,999\,999$. Why it is wrong: adding $1$ to it gives a larger number. Right: there is no largest natural number.
:::

## Key terms

:::terms
- rounding | làm tròn số
- the place being rounded to | hàng làm tròn
- a whole number of hundred thousands | số tròn trăm nghìn
- approximately | khoảng
- natural number | số tự nhiên
- sequence of natural numbers | dãy số tự nhiên
- the number before | số liền trước
- the number after | số liền sau
- number line | tia số
- consecutive natural numbers | số tự nhiên liên tiếp
:::

## Summary

- To round to a place, look at the digit just to the right of that place. Less than $5$: keep the digit the same; $5$ or more: increase it by $1$; the digits to the right become $0$.
- A number exactly halfway between two round numbers (the digit to the right is $5$) is rounded up.
- The sequence of natural numbers: $0$; $1$; $2$; $3$; $\ldots$ The smallest natural number is $0$, consecutive numbers differ by $1$, and there is no largest natural number.
- When estimating a total, it is better to add exactly and then round the result.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Round $5\,683\,200$ to the nearest hundred thousand.

::hint
**What you need:** look at the ten-thousands digit, just to the right of the hundred-thousands place.

**Steps:**
1. Find the hundred-thousands digit and the ten-thousands digit.
2. Compare the ten-thousands digit with $5$.

::solution
The hundred-thousands digit is $6$ and the ten-thousands digit is $8$. Since $8\geq5$, increase $6$ to $7$ and replace the digits to its right with $0$.

**Answer.** $5\,700\,000$.
:::

:::exercise
Round $417\,305$ to the nearest hundred thousand.

::hint
**What you need:** if the ten-thousands digit is less than $5$, keep the hundred-thousands digit the same.

**Steps:**
1. Find the hundred-thousands digit and the ten-thousands digit.
2. Round using the rule.

::solution
The hundred-thousands digit is $4$ and the ten-thousands digit is $1$. Since $1<5$, keep $4$ and replace the digits to its right with $0$.

**Answer.** $400\,000$.
:::

:::exercise
Round $850\,000$ to the nearest hundred thousand.

::hint
**What you need:** if the digit to the right is exactly $5$, round up.

**Steps:**
1. Find the ten-thousands digit.
2. Round using the rule.

::solution
The hundred-thousands digit is $8$ and the ten-thousands digit is $5$. Since $5\geq5$, increase $8$ to $9$.

**Answer.** $900\,000$.
:::

:::exercise
Round $726\,481$ to the nearest thousand, the nearest ten thousand and the nearest hundred thousand.

::hint
**What you need:** each time, look at the digit just to the right of the rounding place.

**Steps:**
1. Round to the nearest thousand.
2. Round to the nearest ten thousand, then to the nearest hundred thousand.

::solution
To the nearest thousand: the hundreds digit is $4<5$, keep $6$, giving $726\,000$. To the nearest ten thousand: the thousands digit is $6\geq5$, increase $2$ to $3$, giving $730\,000$. To the nearest hundred thousand: the ten-thousands digit is $2<5$, keep $7$, giving $700\,000$.

**Answer.** $726\,000$; $730\,000$; $700\,000$.
:::

:::exercise
A city (made-up numbers) has $3\,856\,000$ people. About how many people does the city have (to the nearest hundred thousand)?

::hint
**What you need:** the ten-thousands digit decides whether to round up or down.

**Steps:**
1. What do we know? What is asked?
2. Find the hundred-thousands digit and the ten-thousands digit.
3. Round using the rule.

::solution
Solution

The hundred-thousands digit is $8$ and the ten-thousands digit is $5$. Since $5\geq5$, increase $8$ to $9$.

The number of people is about $3\,900\,000$.

**Answer.** About $3\,900\,000$ people.
:::

:::exercise
Two matches (made-up numbers) have $41\,280$ spectators and $57\,340$ spectators. About how many spectators are there at the two matches altogether (to the nearest ten thousand)?

::hint
**What you need:** add exactly first, then round the result.

**Steps:**
1. Work out the total number of spectators at the two matches.
2. Round the total to the nearest ten thousand.

::solution
Solution

The total number of spectators is:
$$41\,280+57\,340=98\,620\ \text{(people)}.$$
The ten-thousands digit is $9$ and the thousands digit is $8\geq5$, so increase $9$ to $10$, giving $100\,000$.

**Answer.** About $100\,000$ spectators.
:::

:::exercise
Write the $6$ consecutive natural numbers after $999\,997$.

::hint
**What you need:** each number after is $1$ more than the one before.

**Steps:**
1. Write the number after $999\,997$.
2. Keep adding $1$ to get the next number.

::solution
We have $999\,997+1=999\,998$, then $999\,999$, $1\,000\,000$, $1\,000\,001$, $1\,000\,002$, $1\,000\,003$.

**Answer.** $999\,998$; $999\,999$; $1\,000\,000$; $1\,000\,001$; $1\,000\,002$; $1\,000\,003$.
:::

:::exercise
Remember the lesson on comparing numbers with many digits. Compare $2\,467\,891$ with its rounded value to the nearest hundred thousand. Is the rounded value greater or smaller than the original number?

::hint
**What you need:** compare pairs of digits from left to right.

**Steps:**
1. Write $2\,467\,891$ rounded to the nearest hundred thousand.
2. Compare the two numbers.

::solution
The rounded value is $2\,500\,000$. Both numbers have seven digits. Millions: $2=2$. Hundred-thousands: $4<5$. So $2\,467\,891<2\,500\,000$.

**Answer.** The rounded value $2\,500\,000$ is greater than the original number.
:::

:::exercise
Nam rounds $3\,548\,200$ to the nearest hundred thousand and gets $3\,600\,000$. Check Nam's result. If it is wrong, correct it.

::hint
**What you need:** look at the digit in the ten-thousands place, just to the right of the hundred-thousands place.

**Steps:**
1. Find the hundred-thousands digit and the ten-thousands digit.
2. Round again correctly.

::solution
The hundred-thousands digit is $5$ and the ten-thousands digit is $4$. Since $4<5$, keep $5$ and replace the digits to its right with $0$, giving $3\,500\,000$. Nam looked at the thousands digit $8$, so he rounded up wrongly.

**Answer.** Nam is wrong; the correct result is $3\,500\,000$.
:::

:::exercise Challenge
Find the smallest and the largest six-digit natural number that rounds to $500\,000$ when rounded to the nearest hundred thousand.

::hint
**What you need:** the numbers that round to $500\,000$ have a ten-thousands digit that fits the rule.

**Steps:**
1. Smallest number: the hundred-thousands digit is $4$ and it must round up.
2. Largest number: the hundred-thousands digit is $5$ and it must round down.

::solution
Smallest number: it starts with $4$ and the ten-thousands digit must be $5$ or more, so the smallest number is $450\,000$. Largest number: it starts with $5$ and the ten-thousands digit must be less than $5$, so the largest number is $549\,999$.

**Check.** $449\,999$ rounds to $400\,000$ and $550\,000$ rounds to $600\,000$, and neither is $500\,000$.

**Answer.** $450\,000$ and $549\,999$.
:::

## Mini test

:::quiz
::mc
$2\,467\,891$ rounded to the nearest hundred thousand is
A. $2\,400\,000$.
B. $2\,470\,000$.
C. $2\,000\,000$.
D. $2\,500\,000$.
::key D
The ten-thousands digit is $6\geq5$, so increase the hundred-thousands digit $4$ to $5$: $2\,500\,000$. Option A looks at the wrong digit, option B rounds to the nearest ten thousand, and option C rounds to the nearest million.

::mc
$468\,395$ rounded to the nearest ten thousand is
A. $470\,000$.
B. $468\,000$.
C. $460\,000$.
D. $500\,000$.
::key A
The thousands digit is $8\geq5$, so increase the ten-thousands digit $6$ to $7$: $470\,000$. Option B rounds to the nearest thousand, option C rounds down wrongly, and option D rounds to the nearest hundred thousand.

::mc
The number before $100\,000$ is
A. $100\,001$.
B. $99\,999$.
C. $99\,000$.
D. $90\,000$.
::key B
The number before is $1$ less: $100\,000-1=99\,999$. Option A is the number after, and options C and D have the wrong values.

::mc
Which statement is correct?
A. The largest natural number is $999\,999$.
B. The number $0$ is not a natural number.
C. There is no largest natural number.
D. The smallest natural number is $1$.
::key C
Adding $1$ to any natural number gives a larger natural number, so there is no largest natural number. The number $0$ is the smallest natural number.

::tf
Look at the number $3\,548\,200$.
a) Rounded to the nearest hundred thousand it is $3\,500\,000$.
b) Rounded to the nearest ten thousand it is $3\,540\,000$.
c) Rounded to the nearest million it is $3\,000\,000$.
d) Rounded to the nearest thousand it is $3\,549\,000$.
::key T F F F
a) True: the ten-thousands digit is $4<5$. b) False: the thousands digit is $8\geq5$, so it is $3\,550\,000$. c) False: the hundred-thousands digit is $5\geq5$, so it is $4\,000\,000$. d) False: the hundreds digit is $2<5$, so it is $3\,548\,000$.

::sa
Round $749\,999$ to the nearest hundred thousand. What is the hundred-thousands digit of the result?
::key 7
The ten-thousands digit is $4<5$, so keep the digit $7$, giving $700\,000$.

::sa
How many digits $0$ does the number after $4\,999\,999$ have?
::key 6
The number after is $5\,000\,000$, which has six digits $0$.
:::
