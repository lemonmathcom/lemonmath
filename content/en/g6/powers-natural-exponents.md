---
title: Powers with natural-number exponents
description: Powers a^n, base and exponent; squares and cubes; multiplying and dividing powers with the same base; powers of 10 and writing numbers.
minutes: 40
---

:::goals
- Understand that the power $a^n$ is a product of $n$ equal factors, and name the base and the exponent.
- Write a product of equal factors in short form and calculate the value of a power.
- Multiply and divide two powers with the same base by adding and subtracting exponents.
- Write a natural number as a sum of powers of $10$.
:::

Suppose you send a message to $3$ people. Each person who receives it sends it on to $3$ other people, and so on, with nobody receiving it twice. Round $1$ has $3$ recipients, round $2$ has $3\times3=9$ recipients, round $3$ has $3\times3\times3=27$ recipients. Writing it out gets longer and longer. Is there a shorter way to write this, and how many people receive the message in round $5$?

## Powers and how to calculate them

**Explore.** Look at these products made of equal factors: $3\times3$, $3\times3\times3$, $3\times3\times3\times3$. All we need to say is what the factor is and how many factors there are. We write $3\times3\times3\times3=3^4$.

:::theorem Power
The power of $a$ with exponent $n$ ($n$ a natural number other than $0$) is the product of $n$ factors equal to $a$:
$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ factors}}.$$
We call $a$ the **base** and $n$ the **exponent**. By convention $a^1=a$.

It is read "$a$ to the power $n$". In particular $a^2$ is also read "$a$ squared" and $a^3$ is read "$a$ cubed".
:::

For example $2^5=2\times2\times2\times2\times2=32$ has base $2$ and exponent $5$. Note that $2^5$ is not $2\times5$.

## Multiplying and dividing powers with the same base

**Explore.** Work out $3^4\times3^3$ by writing it out: $(3\times3\times3\times3)\times(3\times3\times3)$ has $4+3=7$ factors of $3$, that is $3^7$. And for $3^7\div3^3$ we remove $3$ factors of $3$ from the $7$, leaving $7-3=4$ factors, that is $3^4$.

:::theorem Multiplying and dividing powers with the same base
For natural numbers $m$, $n$ other than $0$:
$$a^m\times a^n=a^{m+n}.$$
For $a\ne0$ and $m\ge n$:
$$a^m\div a^n=a^{m-n}.$$
Convention: $a^0=1$ for $a\ne0$.
:::

**Why is this true?** The product $a^m\times a^n$ has $m$ factors of $a$ followed by $n$ more factors of $a$, giving $m+n$ factors in all, so it equals $a^{m+n}$. The division $a^m\div a^n$ removes $n$ factors of $a$ from $a^m$, leaving $m-n$ factors. If $m=n$ then $a^m\div a^m=1$ (a non-zero number divided by itself), and by the formula it equals $a^0$. That is why we agree that $a^0=1$.

**Powers of $10$.** We have $10^1=10$, $10^2=100$, $10^3=1000$, ... The power $10^n$ is the digit $1$ followed by $n$ zeros. Because of this, every natural number can be written as a sum of powers of $10$.

## Examples

:::example Short form and value
Write $5\times5\times5\times5$ as a power and find its value. Calculate $2^5$.

**Solution.** There are $4$ factors of $5$, so $5\times5\times5\times5=5^4=25\times25=625$. And $2^5=2\times2\times2\times2\times2=32$.
:::

:::example Multiplying and dividing powers
Write each result as a single power, then find its value: a) $3^4\times3^3$; b) $5^8\div5^5$.

**Solution.** a) Keep the base and add the exponents: $3^4\times3^3=3^{4+3}=3^7=2187$. b) Keep the base and subtract the exponents: $5^8\div5^5=5^{8-5}=5^3=125$.
:::

:::example Writing a number with powers of $10$
Write $4507$ as a sum of powers of $10$.

**Solution.** The number $4507$ has $4$ thousands, $5$ hundreds, $0$ tens and $7$ ones:
$$4507=4\times10^3+5\times10^2+0\times10+7.$$
:::

The next problem is the opening question, so we go step by step: *Understand, Plan, Solve, Look back*.

:::example A message spreads
A message is sent to $3$ people. Each recipient sends it on to $3$ other people, with nobody receiving it twice. How many people receive it in round $5$? How many people have received it in total after $5$ rounds?

**Solution.**

*Understand.* In each round the number of recipients is $3$ times that of the previous round. Round $1$ has $3$ people. We are asked for the number in round $5$ and the total after $5$ rounds.

*Plan.* In round $k$ there are $3\times3\times\cdots\times3$ ($k$ factors), that is $3^k$ people.

*Solve.* Round $1$: $3^1=3$. Round $2$: $3^2=9$. Round $3$: $3^3=27$. Round $4$: $3^4=81$. Round $5$: $3^5=243$ people. In total: $3+9+27+81+243=363$ people.

*Look back.* How many people are there in round $6$? We have $3^5\times3=3^5\times3^1=3^6=729$, which is exactly $243\times3$. The numbers grow very fast, because each round multiplies in one more factor of $3$.
:::

:::example One number, several ways
Write $64$ as a power of $2$, of $4$ and of $8$.

**Solution.** $2\times2\times2\times2\times2\times2=64$ so $64=2^6$. $4\times4\times4=64$ so $64=4^3$. $8\times8=64$ so $64=8^2$. A number can be written as a power with several different bases.
:::

:::warning Mistakes to avoid
- **Confusing a power with multiplication.** Wrong: $2^3=2\times3=6$. Why it is wrong: $2^3$ has $3$ factors equal to $2$. Right: $2^3=2\times2\times2=8$.
- **Multiplying the bases.** Wrong: $2^3\times2^4=4^7$. Why it is wrong: when multiplying powers with the same base, the base does not change. Right: $2^3\times2^4=2^7=128$.
- **Dividing the exponents.** Wrong: $5^8\div5^4=5^2$. Why it is wrong: we subtract exponents, not divide. Right: $5^8\div5^4=5^4=625$.
- **Thinking $a^0=0$.** Wrong: $7^0=0$. Why it is wrong: $7^0=7^3\div7^3=1$. Right: $7^0=1$.
:::

## Key terms

:::terms
- power | luỹ thừa
- base | cơ số
- exponent | số mũ
- square | bình phương
- cube | lập phương
- factor | thừa số
- same base | cùng cơ số
- power of $10$ | luỹ thừa của $10$
- write as a power | viết dưới dạng luỹ thừa
:::

## Summary

- $a^n$ is the product of $n$ factors $a$; $a$ is the base, $n$ is the exponent; $a^1=a$.
- $a^m\times a^n=a^{m+n}$; $a^m\div a^n=a^{m-n}$ ($a\ne0$, $m\ge n$); $a^0=1$ ($a\ne0$).
- $10^n$ is $1$ followed by $n$ zeros; every natural number is a sum of powers of $10$ times digits.

## Practice

Try each one yourself first, then open the solution.

:::exercise
**Question 1.** Write as a power: a) $7\times7\times7\times7\times7$; b) $10\times10\times10$; c) $4\times4$.

::hint
**What you need:** count the equal factors; that is the exponent.

**Steps:**
1. The base is the repeated factor.
2. The exponent is the number of repeats.

::solution
a) $7^5$. b) $10^3$. c) $4^2$.

**Answer.** $7^5$; $10^3$; $4^2$.
:::

:::exercise
**Question 2.** Calculate: a) $2^5$; b) $3^4$; c) $10^4$.

::hint
**What you need:** $a^n$ is the product of $n$ factors $a$.

**Steps:**
1. Write out the product, then multiply step by step.

::solution
a) $2\times2\times2\times2\times2=32$. b) $3\times3\times3\times3=81$. c) $10^4=10\,000$.

**Answer.** $32$; $81$; $10\,000$.
:::

:::exercise
**Question 3.** Calculate: a) $11^2$; b) $5^3$; c) $1^9$; d) $0^4$.

::hint
**What you need:** multiplying $1$ by itself any number of times gives $1$; multiplying $0$ by itself gives $0$.

**Steps:**
1. Write each power as a product.

::solution
a) $11\times11=121$. b) $5\times5\times5=125$. c) $1^9=1$. d) $0^4=0$.

**Answer.** $121$; $125$; $1$; $0$.
:::

:::exercise
**Question 4.** Write each result as a single power: a) $6^5\times6^3$; b) $9^7\div9^4$; c) $7^4\times7$.

::hint
**What you need:** multiply means add the exponents, divide means subtract the exponents; $7=7^1$.

**Steps:**
1. Keep the base.
2. Add or subtract the exponents.

::solution
a) $6^{5+3}=6^8$. b) $9^{7-4}=9^3$. c) $7^4\times7^1=7^5$.

**Answer.** $6^8$; $9^3$; $7^5$.
:::

:::exercise
**Question 5.** Write $30\,502$ as a sum of powers of $10$.

::hint
**What you need:** $30\,502$ has $3$ ten-thousands, $0$ thousands, $5$ hundreds, $0$ tens, $2$ ones.

**Steps:**
1. Find the digit in each place.
2. Multiply by $10^4$, $10^3$, $10^2$, $10$, $1$.

::solution
$30\,502=3\times10^4+0\times10^3+5\times10^2+0\times10+2$.

**Answer.** $3\times10^4+0\times10^3+5\times10^2+0\times10+2$.
:::

:::exercise
**Question 6.** Suppose a thin sheet of paper is folded in half $6$ times in a row, and each fold doubles the number of layers. Each layer is $0.1$ mm thick. How many layers are there after $6$ folds, and how thick is the stack in millimetres?

::hint
**What you need:** after $n$ folds there are $2^n$ layers.

**Steps:**
1. What is given? What is asked?
2. Calculate $2^6$.
3. Multiply by the thickness of one layer.

::solution
The number of layers is $2^6=64$. The thickness is $64\times0.1=6.4$ (mm).

**Answer.** $64$ layers, $6.4$ mm thick.
:::

:::exercise
**Question 7.** Suppose a type of bacteria triples in number every hour. At the start there are $5$. How many are there after $4$ hours?

::hint
**What you need:** each hour multiplies by $3$; after $4$ hours we multiply by $3^4$.

**Steps:**
1. What is given? What is asked?
2. Calculate $3^4$, then multiply by $5$.

::solution
After $4$ hours the number is $5\times3^4=5\times81=405$.

**Answer.** $405$ bacteria.
:::

:::exercise
**Question 8.** Fill in $>$, $<$ or $=$: a) $2^3\ ?\ 3^2$; b) $2^5\ ?\ 5^2$; c) $4^3\ ?\ 8^2$.

::hint
**What you need:** work out the value of each power, then compare.

**Steps:**
1. Calculate both sides.
2. Compare the two numbers.

::solution
a) $8<9$ so $2^3<3^2$. b) $32>25$ so $2^5>5^2$. c) $64=64$ so $4^3=8^2$.

**Answer.** a) $<$; b) $>$; c) $=$.
:::

:::exercise
**Question 9.** Calculate quickly $2^2\times37\times5^2$.

::hint
**What you need:** $2^2=4$, $5^2=25$, and the commutative and associative properties of multiplication.

**Steps:**
1. Work out the powers.
2. Group the two factors whose product is $100$.

::solution
$2^2\times37\times5^2=4\times37\times25=(4\times25)\times37=100\times37=3700$.

**Answer.** $3700$.
:::

:::exercise Challenge
**Question 10.** a) Calculate $S=1+2+2^2+2^3+2^4+2^5$. b) Compare $S+1$ with $2^6$ and comment.

::hint
**What you need:** work out each power, then add.

**Steps:**
1. Calculate $2^2$, $2^3$, $2^4$, $2^5$.
2. Add them up, then add $1$.

::solution
a) $S=1+2+4+8+16+32=63$. b) $S+1=64=2^6$. Comment: $S=2^6-1$. Indeed, each later term equals the sum of the terms before it plus $1$ (for example $8=1+2+4+1$), so the sum is always exactly $1$ less than the next power.

**Answer.** a) $63$; b) $S+1=2^6$.
:::

## Mini test

:::quiz
::mc
The value of $2^5$ is
A. $10$.
B. $7$.
C. $32$.
D. $25$.
::key C
$2^5=2\times2\times2\times2\times2=32$. Option A is $2\times5$, B is $2+5$, D is $5^2$.

::mc
The result of $3^4\times3^3$ written as a single power is
A. $3^1$.
B. $3^{12}$.
C. $9^7$.
D. $3^7$.
::key D
Keep the base and add the exponents: $3^{4+3}=3^7$. Option B multiplies the exponents, C multiplies the bases, A subtracts the exponents.

::mc
The result of $5^8\div5^5$ is
A. $5^3$.
B. $5^{13}$.
C. $1^3$.
D. $5^{40}$.
::key A
Keep the base and subtract the exponents: $5^{8-5}=5^3$. Option B adds the exponents, C divides the bases, D multiplies the exponents.

::mc
The value of $7^0$ is
A. $0$.
B. $1$.
C. $7$.
D. meaningless.
::key B
By convention $a^0=1$ for $a\ne0$, because $7^0=7^3\div7^3=1$. Options A and C are common mix-ups.

::tf
About the number $64$.
a) $64=2^8$.
b) $64=2^6$.
c) $64=4^3$.
d) $64=8^2$.
::key F T T T
a) False: $2^8=256$. b) True: $2^6=64$. c) True: $4\times4\times4=64$. d) True: $8\times8=64$.

::sa
What is the value of $3^4$?
::key 81
$3\times3\times3\times3=81$.

::sa
What is the value of $5^8\div5^6$?
::key 25
$5^8\div5^6=5^2=25$.
:::

