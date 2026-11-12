---
title: Writing natural numbers. Order in the set of natural numbers
description: The decimal system and place value, Roman numerals up to 30; the sets ℕ and ℕ*, comparing, ordering, and the number just before and after.
minutes: 50
---

:::goals
- Understand the decimal system: the value of a digit depends on the place it occupies.
- Break a natural number down by places and build numbers from given digits.
- Read and write Roman numerals from $1$ to $30$.
- Tell the sets $\mathbb{N}$ and $\mathbb{N}^*$ apart, and compare and order natural numbers.
- Find the number before and the number after a given number and list the natural numbers that satisfy a given condition.
:::

Suppose a shop sold $4075$ pens in September and $4057$ pens in October. The two numbers use the same digits $4$, $0$, $7$, $5$ and differ only in the last two. Which month had more pens sold? And how can we tell quickly without counting every pen?

## Writing natural numbers

**Explore.** In $4075$ the digit $7$ is in the tens place, but in $4057$ the digit $7$ is in the ones place. The same digit $7$ stands for "$7$ tens", that is $70$, in the first number, but only "$7$ ones", that is $7$, in the second. So the value of a digit depends on its **position**.

:::theorem The decimal system
To write every natural number we use only $10$ digits: $0$, $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$. Every $10$ units in one place make $1$ unit in the next place to the left: $10$ ones make $1$ ten, $10$ tens make $1$ hundred, $10$ hundreds make $1$ thousand, ...

The places, from right to left, are: ones, tens, hundreds, thousands, ten thousands, hundred thousands, ...

The notation $\overline{ab}$ means the two-digit number with digits $a$, $b$ (where $a\ne0$), and $\overline{abc}$ means the three-digit number with digits $a$, $b$, $c$ (where $a\ne0$). Then
$$\overline{ab}=a\times10+b,\qquad \overline{abc}=a\times100+b\times10+c.$$
:::

**Why is this true?** The number $\overline{abc}$ consists of $a$ hundreds, $b$ tens and $c$ ones. Since $1$ hundred is $100$ ones and $1$ ten is $10$ ones, the number equals $a\times100+b\times10+c$. The first digit on the left must not be $0$, because then the number would really have fewer digits. For instance $037$ is just the number $37$, which has two digits.

When reading and writing large numbers, we split the digits into groups of three, counting from the right, for example $12\,345$ or $1\,000\,000$.

**Roman numerals.** Besides this way of writing, we sometimes meet Roman numerals, for example on clock faces or as chapter numbers. We use three symbols:
$$\text{I}=1,\qquad \text{V}=5,\qquad \text{X}=10.$$
Rules:
- A symbol placed after adds its value: $\text{VI}=5+1=6$, $\text{XII}=10+2=12$.
- Only two cases use subtraction: $\text{IV}=5-1=4$ and $\text{IX}=10-1=9$.
- I and X are not written more than three times in a row: $\text{III}=3$, $\text{XXX}=30$.

:::example Breaking a number down by places
Break down $6407$ by places. Which place is the digit $4$ in, and what is its value?

**Solution.** $6407=6\times1000+4\times100+0\times10+7$. The digit $4$ is in the hundreds place and its value is $4\times100=400$.
:::

:::example Building numbers from digits
Using the three digits $0$, $3$, $7$, each exactly once, form the largest and the smallest three-digit numbers.

**Solution.** For the largest number we put the largest digit in the highest place: $730$. For the smallest number we must not put $0$ in the hundreds place (since $037$ has only two digits). We put $3$ in the hundreds place, then the smallest digit left: $307$. So the largest number is $730$ and the smallest is $307$.
:::

The next problem uses the notation $\overline{ab}$, so we go step by step: *Understand, Plan, Solve, Look back*.

:::example Tens digit is $3$ times the ones digit
Find the two-digit natural numbers whose tens digit is $3$ times the ones digit.

**Solution.**

*Understand.* The number is $\overline{ab}$, where $a$ is the tens digit, $b$ is the ones digit, $a\ne0$ and $a=3\times b$.

*Plan.* The largest digit is $9$, so $a\le9$. We try $b=0$, $1$, $2$, ... in turn and work out $a=3\times b$.

*Solve.* If $b=0$ then $a=0$, which is not allowed since $a\ne0$. If $b=1$ then $a=3$, giving $31$. If $b=2$ then $a=6$, giving $62$. If $b=3$ then $a=9$, giving $93$. If $b\ge4$ then $a\ge12$, which is not a digit. So there are three numbers: $31$, $62$, $93$.

*Look back.* If we add the condition "the digits add up to $4$", how many numbers remain? We have $3+1=4$, $6+2=8$, $9+3=12$, so only $31$ remains.
:::

:::example Writing Roman numerals
Write $14$, $19$, $27$ as Roman numerals. Which number is $\text{XXIV}$?

**Solution.** $14=10+4$ so $\text{XIV}$. $19=10+9$ so $\text{XIX}$. $27=20+7$ so $\text{XXVII}$. And $\text{XXIV}=10+10+4=24$.
:::

## Order in the set of natural numbers

**Explore.** Look at the natural numbers placed on a number line, starting from $0$ and going to the right:

:::graph The first natural numbers on a number line
alt: A number line with points marked from 0 to 9, going from left to right
x: -1..10
y: -1..1
segment: (0, 0) (9.6, 0)
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
point: (4, 0) "4" below
point: (5, 0) "5" below
point: (6, 0) "6" below
point: (7, 0) "7" below
point: (8, 0) "8" below
point: (9, 0) "9" below
:::

The number on the left is the smaller one. For example $3$ is to the left of $7$, so $3<7$. And $5$ comes right after $4$ and right before $6$.

:::theorem The set of natural numbers and order
- The set of natural numbers is written $\mathbb{N}$: $\mathbb{N}=\{0,1,2,3,\ldots\}$. The set of natural numbers other than $0$ is written $\mathbb{N}^*$: $\mathbb{N}^*=\{1,2,3,\ldots\}$.
- In $\mathbb{N}$ the smallest number is $0$ and there is no largest number.
- For two natural numbers $a$ and $b$, exactly one of $a<b$, $a=b$, $a>b$ holds. The notation $a\le b$ means $a<b$ or $a=b$; $a\ge b$ means $a>b$ or $a=b$.
- If $a<b$ and $b<c$ then $a<c$ (the transitive property).
- Every natural number $a$ has exactly one number after it, $a+1$. Every natural number $a\ne0$ has exactly one number before it, $a-1$. Two numbers that differ by $1$ are called consecutive natural numbers.
:::

**How to compare two natural numbers.**
1. The number with more digits is larger.
2. If both have the same number of digits, compare the digits in the same place, from left to right. At the first pair that differs, the number with the larger digit is larger.

**Why is this true?** A number with more digits has a higher place, and one unit in a higher place is always larger than everything in the lower places added together: for example $1000>999$. When the digit counts are equal, the highest places decide first, so we compare from left to right.

Now we can answer the opening question: $4075$ and $4057$ both have $4$ digits and the same first two digits $4$, $0$. In the tens place, $7>5$, so $4075>4057$. September had more pens sold.

:::example Comparing and ordering
Put the numbers $1099$; $987$; $1100$; $10\,000$; $1009$ in increasing order.

**Solution.** The number $987$ has $3$ digits so it is the smallest. The number $10\,000$ has $5$ digits so it is the largest. The other three have $4$ digits and the same thousands digit $1$. In the hundreds place, $1099$ and $1009$ have $0$ while $1100$ has $1$, so $1100$ is the largest of the three. Between $1009$ and $1099$, the tens digits satisfy $0<9$, so $1009<1099$. Therefore
$$987<1009<1099<1100<10\,000.$$
:::

:::example The number before and the number after
Find the number before and the number after $999$. Does $0$ have a number before it in $\mathbb{N}$?

**Solution.** The number before $999$ is $999-1=998$. The number after $999$ is $999+1=1000$. The number $0$ is the smallest natural number, so no natural number comes right before it; $0$ only has a number after it, namely $1$.
:::

:::example Listing numbers that satisfy a condition
Write the set $X$ of natural numbers $x$ satisfying $17<x\le22$. How many elements does $X$ have?

**Solution.** The condition $17<x$ excludes $17$, while $x\le22$ keeps $22$. So $X=\{18,19,20,21,22\}$ and $X$ has $5$ elements.
:::

:::warning Mistakes to avoid
- **Allowing a number to start with $0$.** Wrong: the smallest three-digit number made from $0$, $3$, $7$ is $037$. Why it is wrong: $037=37$ has only two digits. Right: $307$.
- **Breaking the Roman numeral rules.** Wrong: $4=\text{IIII}$. Why it is wrong: I is not written more than three times in a row. Right: $4=\text{IV}$.
- **Comparing from the right.** Wrong: $4057>4075$ because $7>5$ at the end. Why it is wrong: we must compare from the highest place. Right: in the tens place $5<7$, so $4057<4075$.
- **Thinking $0$ has $-1$ before it.** Wrong: the number before $0$ is $-1$. Why it is wrong: $-1$ is not a natural number. Right: in $\mathbb{N}$, the number $0$ has no number before it.
:::

## Key terms

:::terms
- decimal system | hệ thập phân
- digit | chữ số
- place | hàng
- place value | giá trị theo vị trí
- Roman numeral | số La Mã
- set of natural numbers | tập hợp số tự nhiên
- number line | tia số
- compare | so sánh
- transitive property | tính chất bắc cầu
- the number before | số liền trước
- the number after | số liền sau
- consecutive natural numbers | số tự nhiên liên tiếp
:::

## Summary

- The decimal system uses $10$ digits; $10$ units in one place make $1$ unit in the next place to the left.
- $\overline{ab}=a\times10+b$; $\overline{abc}=a\times100+b\times10+c$; the first digit is not $0$.
- Roman numerals: $\text{I}=1$, $\text{V}=5$, $\text{X}=10$; only $\text{IV}=4$ and $\text{IX}=9$ use subtraction.
- $\mathbb{N}=\{0,1,2,3,\ldots\}$, $\mathbb{N}^*=\{1,2,3,\ldots\}$; $\mathbb{N}$ has smallest number $0$ and no largest number.
- To compare: more digits means larger; with equal digit counts, compare place by place from the left.
- The number after $a$ is $a+1$; the number before $a\ne0$ is $a-1$.

## Practice

Try each one yourself first, then open the solution.

:::exercise
**Question 1.** Break down $90\,506$ by places. Which place is the digit $5$ in, and what is its value?

::hint
**What you need:** the value of a digit is the digit times the value of its place.

**Steps:**
1. Identify the place of each digit, from the right.
2. Write the sum of the values.

::solution
$90\,506=9\times10\,000+0\times1000+5\times100+0\times10+6$. The digit $5$ is in the hundreds place, with value $500$.

**Answer.** The digit $5$ is in the hundreds place, with value $500$.
:::

:::exercise
**Question 2.** Using the four digits $0$, $2$, $5$, $8$, each exactly once, write the largest and the smallest four-digit numbers.

::hint
**What you need:** the digit in the highest place must not be $0$.

**Steps:**
1. Largest: arrange the digits from largest to smallest.
2. Smallest: choose the smallest non-zero digit for the thousands place.

::solution
The largest number is $8520$. For the smallest, the thousands digit is $2$ (it cannot be $0$), then arrange $0$, $5$, $8$ from smallest to largest, giving $2058$.

**Answer.** $8520$ and $2058$.
:::

:::exercise
**Question 3.** a) Write $16$, $24$, $29$ as Roman numerals. b) Which numbers are $\text{XXVIII}$ and $\text{XIX}$?

::hint
**What you need:** $\text{IV}=4$, $\text{IX}=9$; the other symbols add.

**Steps:**
1. Split each number into tens and ones.
2. Write it with X, V, I following the rules.

::solution
a) $16=10+6$ so $\text{XVI}$; $24=20+4$ so $\text{XXIV}$; $29=20+9$ so $\text{XXIX}$.

b) $\text{XXVIII}=10+10+5+3=28$; $\text{XIX}=10+9=19$.

**Answer.** a) $\text{XVI}$, $\text{XXIV}$, $\text{XXIX}$; b) $28$ and $19$.
:::

:::exercise
**Question 4.** A wall clock uses Roman numerals. The minute hand points at $\text{IX}$. How many minutes past the hour is it? (Each number on the clock face stands for $5$ minutes.)

::hint
**What you need:** $\text{IX}=9$; each number stands for $5$ minutes.

**Steps:**
1. Change $\text{IX}$ into an ordinary number.
2. Multiply by $5$.

::solution
$\text{IX}=9$ and $9\times5=45$, so the minute hand shows $45$ minutes.

**Answer.** $45$ minutes.
:::

:::exercise
**Question 5.** Fill in $>$, $<$ or $=$: a) $5307\ ?\ 5370$; b) $99\,999\ ?\ 100\,000$; c) $7090\ ?\ 7009$.

::hint
**What you need:** compare the number of digits first; if equal, compare from left to right.

**Steps:**
1. Count the digits of each number.
2. Find the first place where the two numbers differ.

::solution
a) The hundreds digits are both $3$; in the tens place $0<7$, so $5307<5370$. b) $99\,999$ has $5$ digits and $100\,000$ has $6$ digits, so $99\,999<100\,000$. c) The hundreds digits are both $0$; in the tens place $9>0$, so $7090>7009$.

**Answer.** a) $<$; b) $<$; c) $>$.
:::

:::exercise
**Question 6.** Put the numbers $3450$; $3045$; $34\,500$; $3504$; $345$ in increasing order.

::hint
**What you need:** more digits means larger.

**Steps:**
1. Group the numbers by their number of digits.
2. Compare the numbers with the same number of digits.

::solution
$345$ has $3$ digits; $34\,500$ has $5$ digits. The three numbers $3450$, $3045$, $3504$ have $4$ digits: the thousands digits are all $3$; in the hundreds place $0<4<5$, so $3045<3450<3504$. Therefore $345<3045<3450<3504<34\,500$.

**Answer.** $345$; $3045$; $3450$; $3504$; $34\,500$.
:::

:::exercise
**Question 7.** Suppose the populations of four towns are: A has $12\,450$ people, B has $12\,054$, C has $9999$, D has $12\,540$. Put the towns in order of population, largest first.

::hint
**What you need:** compare the five-digit numbers from left to right.

**Steps:**
1. What is given? What is asked?
2. How many digits does $9999$ have?
3. Compare the other three in the hundreds place.

::solution
Town C has $9999$ people, with only $4$ digits, so it is the smallest. The other three have $5$ digits and all begin with $12$; in the hundreds place, $540$ is largest, then $450$, then $054$. So $12\,540>12\,450>12\,054>9999$.

**Answer.** D, A, B, C.
:::

:::exercise
**Question 8.** a) Find the number before $1000$ and the number after $99\,999$. b) Write the set of natural numbers $x$ satisfying $7\le x<11$.

::hint
**What you need:** the number before $a$ is $a-1$, the number after $a$ is $a+1$; $\le$ includes the end number, $<$ does not.

**Steps:**
1. Part a: add or subtract $1$.
2. Part b: keep $7$, leave out $11$.

::solution
a) The number before $1000$ is $999$; the number after $99\,999$ is $100\,000$. b) $X=\{7,8,9,10\}$.

**Answer.** a) $999$ and $100\,000$; b) $\{7,8,9,10\}$.
:::

:::exercise
**Question 9.** Write the set $K$ of two-digit natural numbers whose tens digit is $4$ more than the ones digit. What are the largest and smallest numbers in $K$?

::hint
**What you need:** a two-digit number $\overline{ab}$ has $a\ne0$ and here $a=b+4$.

**Steps:**
1. Try $b=0$, $1$, $2$, ...
2. Stop when $a$ goes above $9$.

::solution
If $b=0$ then $a=4$: $40$. Similarly $51$, $62$, $73$, $84$, $95$. If $b=6$ then $a=10$, which is not a digit. So $K=\{40,51,62,73,84,95\}$; the smallest is $40$ and the largest is $95$.

**Answer.** $K=\{40,51,62,73,84,95\}$; smallest $40$, largest $95$.
:::

:::exercise Challenge
**Question 10.** A book has $120$ pages, numbered from $1$ to $120$. How many digits are needed altogether to number the pages?

::hint
**What you need:** split the pages by how many digits the page number has.

**Steps:**
1. What is given? What is asked?
2. Count the pages with $1$ digit, $2$ digits, $3$ digits.
3. Multiply by the number of digits, then add.

::solution
Pages $1$ to $9$: $9$ pages, $1$ digit each, giving $9$ digits. Pages $10$ to $99$: $99-10+1=90$ pages, $2$ digits each, giving $180$ digits. Pages $100$ to $120$: $120-100+1=21$ pages, $3$ digits each, giving $63$ digits. In total $9+180+63=252$ digits.

**Answer.** $252$ digits.
:::

## Mini test

:::quiz
::mc
Using the digits $0$, $3$, $7$, each exactly once, the smallest three-digit number is
A. $037$.
B. $307$.
C. $370$.
D. $703$.
::key B
The hundreds digit cannot be $0$, so choose $3$ and arrange $0$, $7$ from smallest to largest: $307$. Option A has only two digits; C and D are larger than $307$.

::mc
The number $14$ written as a Roman numeral is
A. $\text{XIIII}$.
B. $\text{IVX}$.
C. $\text{XIV}$.
D. $\text{VIX}$.
::key C
$14=10+4$ so $\text{XIV}$. Option A writes $4$ as $\text{IIII}$ (against the rules); B and D put the symbols in the wrong order.

::mc
The number before $1000$ is
A. $990$.
B. $1001$.
C. $99$.
D. $999$.
::key D
$1000-1=999$. Option B is the number after $1000$; C and A come from subtraction errors.

::mc
Which list puts $3045$; $3504$; $345$; $3450$ in increasing order?
A. $345$; $3045$; $3450$; $3504$.
B. $3045$; $345$; $3450$; $3504$.
C. $345$; $3504$; $3450$; $3045$.
D. $3504$; $3450$; $3045$; $345$.
::key A
$345$ has the fewest digits; among the three four-digit numbers, the hundreds digits satisfy $0<4<5$. Option D is decreasing order; A and B are mis-ordered.

::tf
About the set $\mathbb{N}$ of natural numbers and the set $\mathbb{N}^*$ of natural numbers other than $0$.
a) $0\in\mathbb{N}$.
b) $5\in\mathbb{N}^*$.
c) $\mathbb{N}$ has a largest number.
d) The number $0$ has no number before it in $\mathbb{N}$.
::key T T F T
a) True: $0$ is a natural number. b) True: $5\ne0$. c) False: every number has a larger number after it. d) True: $0$ is the smallest number.

::sa
Which natural number does the Roman numeral $\text{XXIV}$ stand for?
::key 24
$\text{XXIV}=10+10+4=24$.

::sa
How many two-digit natural numbers are there?
::key 90
From $10$ to $99$ there are $99-10+1=90$ numbers.
:::

