---
title: Prime numbers
description: Tell prime numbers from composite numbers and write a number as a product of prime factors with a factor tree or by repeated division.
minutes: 25
---

:::goals
- Tell prime numbers from composite numbers, and know why $0$ and $1$ are neither.
- Check whether a number below $1000$ is prime.
- Write a natural number greater than $1$ as a product of prime factors, with a factor tree or by repeated division.
- Use the prime factorisation to list the factors of a number and to solve sharing problems.
:::

You have $12$ square tiles and want to lay them as a full rectangle with none left over. You can make $1$ row of $12$, $2$ rows of $6$ or $3$ rows of $4$. But what if you had only $13$ tiles? However hard you try, there is only one way: one long row of $13$.

Why is $12$ so easy to arrange and $13$ so stubborn? The answer lies in their factors. Numbers like $13$ are called prime numbers. They are like basic building blocks: every natural number greater than $1$ can be built from them by multiplication.

## Prime numbers and composite numbers

Let us list the factors of the first few numbers and count how many each one has.

| Number | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ | $13$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Number of factors | $2$ | $2$ | $3$ | $2$ | $4$ | $2$ | $4$ | $3$ | $4$ | $2$ | $6$ | $2$ |

Some numbers have exactly two factors, $1$ and the number itself: $2$, $3$, $5$, $7$, $11$, $13$. The others have more than two. That is why $13$ tiles fit only one way: $13$ is divisible only by $1$ and $13$.

:::definition Prime number, composite number
- A **prime number** is a natural number greater than $1$ whose only factors are $1$ and itself.
- A **composite number** is a natural number greater than $1$ with more than two factors.
:::

:::note The numbers $0$ and $1$
The numbers $0$ and $1$ are neither prime nor composite. The number $1$ has only one factor, $1$. The number $0$ is divisible by every non-zero number, so it has infinitely many factors.
:::

The prime numbers below $30$ are $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$. Notice that $2$ is the only even prime. Every other even number is divisible by $2$, so it has at least three factors: $1$, $2$ and itself.

### Checking whether a number is prime

To show that $n$ is composite, we only need to find **one** factor of $n$ other than $1$ and $n$. We try dividing $n$ by the primes $2$, $3$, $5$, $7$, $11$, … in turn. We can stop once the quotient is smaller than the divisor. Why? If $n=a\cdot b$ with $a\le b$, then the smaller number $a$ has already been tried. Once the divisor is bigger than the quotient, every pair $(a;b)$ has been checked.

:::tip Divisibility tests make it quicker
A number ending in an even digit is divisible by $2$; one ending in $0$ or $5$ is divisible by $5$; if the digit sum is divisible by $3$, so is the number.
:::

## Writing a number as a product of prime factors

A composite number can always be written as a product of smaller numbers. If a composite number is still left in the product, we split it again. We carry on until every factor is prime.

:::definition Prime factorisation
To write a natural number greater than $1$ as a product of prime factors (its prime factorisation) means to write it as a product of primes. Equal factors are written as powers.
:::

:::theorem Only one answer
Every natural number greater than $1$ can be written as a product of prime factors. Whichever way we do it, we get the same result (apart from the order of the factors).
:::

There are two common layouts.

**Method 1: a factor tree.** Split the number into any two factors, then keep splitting the branches that are still composite.

:::diagram Factor tree for $60$
alt: A factor tree: 60 splits into 6 and 10; 6 splits into 2 and 3; 10 splits into 2 and 5. The leaves are 2, 3, 2, 5.
point R 3,4 above "60"
point L 1.5,2.5 left "6"
point M 4.5,2.5 right "10"
point A 0.8,1 below "2"
point B 2.2,1 below "3"
point C 3.8,1 below "2"
point D 5.2,1 below "5"
segment R L
segment R M
segment L A
segment L B
segment M C
segment M D
:::

The numbers at the ends of the branches are all prime, so $60=2\cdot3\cdot2\cdot5=2^2\cdot3\cdot5$.

**Method 2: repeated division.** Divide again and again by primes from smallest to largest. Write the quotients on the left and the divisors on the right, until the quotient is $1$.

$$\begin{array}{r|l} 60 & 2 \\ 30 & 2 \\ 15 & 3 \\ 5 & 5 \\ 1 & \end{array}$$

Both methods give the same result $60=2^2\cdot3\cdot5$, just as the theorem says.

## Examples

We start by sorting numbers into primes and composites.

:::example Prime or composite?
Among the numbers $1$; $17$; $21$; $29$; $51$; $91$, which are prime and which are composite?

**Solution.**

The number $1$ is neither prime nor composite.

The number $17$ is not divisible by $2$ or $3$; when we divide by $5$, the quotient is already smaller than the divisor. So $17$ is prime. In the same way, $29$ is prime.

We have $21=3\cdot7$, $51=3\cdot17$ (since $5+1=6$ is divisible by $3$) and $91=7\cdot13$. So $21$, $51$ and $91$ are composite.

So the primes are $17$ and $29$; the composite numbers are $21$, $51$ and $91$.
:::

The number $91$ is a well-known trap: it is not divisible by $2$, $3$ or $5$, so it looks prime. The next example shows how patiently we need to test.

:::example Testing $221$
Is $221$ prime or composite?

**Solution.**

We divide $221$ by the primes in turn.

Since $221$ is odd, it is not divisible by $2$. Its digit sum is $5$, not divisible by $3$. Its last digit is $1$, so it is not divisible by $5$.

We have $221=7\cdot31+4$ and $221=11\cdot20+1$, so $221$ is not divisible by $7$ or $11$.

Trying $13$, we get $221=13\cdot17$.

So $221$ is composite.
:::

Now we factorise a larger number by repeated division.

:::example Repeated division
Write $360$ as a product of prime factors.

**Solution.**

We divide again and again by primes from smallest to largest:
$$\begin{array}{r|l} 360 & 2 \\ 180 & 2 \\ 90 & 2 \\ 45 & 3 \\ 15 & 3 \\ 5 & 5 \\ 1 & \end{array}$$

So $360=2\cdot2\cdot2\cdot3\cdot3\cdot5$.

Therefore $360=2^3\cdot3^2\cdot5$.
:::

The prime factorisation is not only a neat way to write a number. It shows us every factor at once.

:::example Listing factors from the prime factorisation
Given $36=2^2\cdot3^2$, list all the factors of $36$.

**Solution.**

Each factor of $36$ is a power of $2$ (that is $1$, $2$ or $4$) times a power of $3$ (that is $1$, $3$ or $9$).

We make a table of the products:

| $\times$ | $1$ | $3$ | $9$ |
|---|---|---|---|
| $1$ | $1$ | $3$ | $9$ |
| $2$ | $2$ | $6$ | $18$ |
| $4$ | $4$ | $12$ | $36$ |

So $36$ has $9$ factors: $1$; $2$; $3$; $4$; $6$; $9$; $12$; $18$; $36$.
:::

Finally, a real situation: packing items equally into boxes.

:::example Packing cakes
A bakery has $42$ cakes. The owner wants to pack all of them into boxes with the same number of cakes in each box, more than $1$ and fewer than $42$ per box. How many ways are there?

**Solution.**

The number of cakes per box must be a factor of $42$, other than $1$ and $42$.

Writing $42$ as a product of primes, we have $42=2\cdot3\cdot7$.

The factors of $42$ are $1$; $2$; $3$; $6$; $7$; $14$; $21$; $42$.

Leaving out $1$ and $42$, we are left with $2$; $3$; $6$; $7$; $14$; $21$.

So there are $6$ ways: $2$, $3$, $6$, $7$, $14$ or $21$ cakes per box.

*Looking back.* What if the bakery had $41$ cakes? Since $41$ is prime, there would be no way at all.
:::

:::warning Common mistakes
- **Thinking $1$ is prime.** Wrong: "The primes below $10$ are $1$, $2$, $3$, $5$, $7$." Why it is wrong: $1$ has only one factor. Right: $2$, $3$, $5$, $7$.
- **Thinking every odd number is prime.** Wrong: "$9$, $15$, $21$ are prime." Why it is wrong: $9=3\cdot3$, $15=3\cdot5$, $21=3\cdot7$. Right: they are composite.
- **Stopping while a composite factor is left.** Wrong: $60=4\cdot15$. Why it is wrong: $4$ and $15$ are not prime. Right: $60=2^2\cdot3\cdot5$.
- **Writing powers wrongly.** Wrong: $2\cdot2\cdot2=2\cdot3$. Why it is wrong: $2\cdot3$ means $2$ times $3$. Right: $2\cdot2\cdot2=2^3$.
:::

## Key terms

:::terms
- prime number | số nguyên tố
- composite number | hợp số
- factor (divisor) | ước
- prime factor | thừa số nguyên tố
- prime factorisation | phân tích ra thừa số nguyên tố
- factor tree | sơ đồ cây
- power | luỹ thừa
:::

## Summary

- A prime number has exactly two factors, $1$ and itself; a composite number has more than two.
- $0$ and $1$ are neither prime nor composite; $2$ is the only even prime.
- To test $n$, divide by $2$, $3$, $5$, $7$, … until the quotient is smaller than the divisor.
- Every number greater than $1$ has a prime factorisation, and it is unique.
- From the prime factorisation you can find every factor of a number.

Back to the $13$ tiles: because $13$ is prime, there is only one way to lay them. Next time you meet a number, ask yourself: which primes is it built from?

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Which of the numbers $2$; $15$; $23$; $27$; $31$; $49$ are prime?

::hint
**What you need:** a prime has only two factors, $1$ and itself.

**Steps:**
1. Use the tests for $3$ and $5$ to rule numbers out quickly.
2. For the rest, try dividing by $7$.

::solution
We have $15=3\cdot5$; $27=3\cdot9$; $49=7\cdot7$. So $15$, $27$ and $49$ are composite.

The numbers $2$, $23$ and $31$ have only two factors, $1$ and themselves.

So the primes are $2$; $23$; $31$.

**Answer.** $2$; $23$; $31$.
:::

:::exercise
Is $143$ prime or composite? Explain.

::hint
**What you need:** finding one factor other than $1$ and $143$ is enough to show it is composite.

**Steps:**
1. Try dividing by $2$, $3$, $5$, $7$.
2. Then try $11$.

::solution
The number $143$ is odd, its digit sum is $8$ and its last digit is $3$, so it is not divisible by $2$, $3$ or $5$.

We have $143=7\cdot20+3$, so $143$ is not divisible by $7$.

Trying $11$, we get $143=11\cdot13$.

So $143$ is composite.

**Answer.** Composite, because $143=11\cdot13$.
:::

:::exercise
Write each number as a product of prime factors:

a) $84$;

b) $150$;

c) $252$.

::hint
**What you need:** divide again and again by primes from smallest to largest.

**Steps:**
1. Divide by $2$ until you can no longer, then move on to $3$, $5$, $7$.
2. Write equal factors as powers.

::solution
a) We have $84=2\cdot42=2\cdot2\cdot21=2\cdot2\cdot3\cdot7$. So $84=2^2\cdot3\cdot7$.

b) We have $150=2\cdot75=2\cdot3\cdot25=2\cdot3\cdot5\cdot5$. So $150=2\cdot3\cdot5^2$.

c) We have $252=2\cdot126=2\cdot2\cdot63=2\cdot2\cdot3\cdot21=2\cdot2\cdot3\cdot3\cdot7$. So $252=2^2\cdot3^2\cdot7$.

**Answer.** a) $2^2\cdot3\cdot7$; b) $2\cdot3\cdot5^2$; c) $2^2\cdot3^2\cdot7$.
:::

:::exercise
An writes $90=9\cdot10$ and says "$90=9\cdot10$ is the prime factorisation of $90$". Is An right? Write it correctly.

::hint
**What you need:** every factor in a prime factorisation must be prime.

**Steps:**
1. Check whether $9$ and $10$ are prime.
2. Split the composite numbers further.

::solution
We have $9=3\cdot3$ and $10=2\cdot5$, which are both composite, so An is wrong.

Splitting further, we get $90=3\cdot3\cdot2\cdot5$.

So the correct form is $90=2\cdot3^2\cdot5$.

**Answer.** An is wrong; $90=2\cdot3^2\cdot5$.
:::

:::exercise
Given $100=2^2\cdot5^2$, list all the factors of $100$.

::hint
**What you need:** each factor is a power of $2$ times a power of $5$.

**Steps:**
1. The power of $2$ can be $1$, $2$ or $4$; the power of $5$ can be $1$, $5$ or $25$.
2. Make a $3\times3$ multiplication table.

::solution
Each factor of $100$ is (one of $1$, $2$, $4$) times (one of $1$, $5$, $25$).

Multiplying in turn, we get the factors $1$; $5$; $25$; $2$; $10$; $50$; $4$; $20$; $100$.

So $100$ has $9$ factors: $1$; $2$; $4$; $5$; $10$; $20$; $25$; $50$; $100$.

**Answer.** $1$; $2$; $4$; $5$; $10$; $20$; $25$; $50$; $100$.
:::

:::exercise
Class 6A has $35$ pupils. The teacher wants to split the class into groups of equal size, with more than $1$ pupil per group and more than $1$ group. In which ways can she do it?

::hint
**What you need:** the number of pupils in each group is a factor of $35$.

**Steps:**
1. Write $35$ as a product of primes, then list its factors.
2. Leave out the factors that do not fit the conditions.

::solution
The number of pupils per group must be a factor of $35$, other than $1$ and $35$.

We have $35=5\cdot7$, so the factors of $35$ are $1$; $5$; $7$; $35$.

Leaving out $1$ and $35$, we are left with $5$ and $7$.

So there are two ways: $7$ groups of $5$ pupils, or $5$ groups of $7$ pupils.

**Answer.** $7$ groups of $5$ or $5$ groups of $7$.
:::

:::exercise
Find the digit $a$ such that the number $\overline{2a}$ is prime.

::hint
**What you need:** $\overline{2a}$ is a two-digit number with tens digit $2$.

**Steps:**
1. List the numbers from $20$ to $29$.
2. Rule out even numbers and numbers divisible by $3$ or $5$.

::solution
The numbers of the form $\overline{2a}$ are $20$; $21$; …; $29$.

Ruling out the even numbers leaves $21$; $23$; $25$; $27$; $29$.

We have $21=3\cdot7$, $25=5\cdot5$ and $27=3\cdot9$, which are composite.

The numbers $23$ and $29$ are prime.

So $a=3$ or $a=9$.

**Answer.** $a\in\{3;9\}$.
:::

:::exercise Challenge
The sum of two prime numbers is $31$. Find the two numbers.

::hint
**What you need:** the sum of two odd numbers is even; $2$ is the only even prime.

**Steps:**
1. Since $31$ is odd, one of the two numbers must be even.
2. Which prime is even? Find the other number and check it.

::solution
If both numbers were odd, their sum would be even, but $31$ is odd.

So one of the two numbers is even. The only even prime is $2$.

Then the other number is $31-2=29$, and $29$ is prime.

So the two numbers are $2$ and $29$.

**Answer.** $2$ and $29$.
:::

## Mini test

:::quiz
::mc
Which of these numbers is prime?
A. $1$.
B. $51$.
C. $91$.
D. $47$.
::key D
$47$ has only two factors, $1$ and $47$. A: $1$ has only one factor; B: $51=3\cdot17$; C: $91=7\cdot13$.

::mc
The prime factorisation of $72$ is
A. $2^3\cdot3^2$.
B. $8\cdot9$.
C. $2^2\cdot3^3$.
D. $2\cdot36$.
::key A
$72=2\cdot2\cdot2\cdot3\cdot3=2^3\cdot3^2$. B and D still contain composite numbers; C swaps the powers ($2^2\cdot3^3=108$).

::mc
How many prime numbers are there below $20$?
A. $7$.
B. $8$.
C. $9$.
D. $10$.
::key B
They are $2$; $3$; $5$; $7$; $11$; $13$; $17$; $19$. A forgets $2$; C also counts $1$.

::mc
Given $n=2^2\cdot7$, which number is **not** a factor of $n$?
A. $4$.
B. $14$.
C. $8$.
D. $28$.
::key C
$n=28$ has the factors $1$; $2$; $4$; $7$; $14$; $28$. The number $8=2^3$ needs three factors of $2$, but $n$ has only two.

::tf
Decide whether each statement is true or false.
a) Every prime number is odd.
b) The number $57$ is composite.
c) $2\cdot3\cdot5+1$ is prime.
d) $120=2^3\cdot3\cdot5$.
::key F T T T
a) False: $2$ is an even prime. b) True: $57=3\cdot19$. c) True: $31$ is prime. d) True: $2^3\cdot3\cdot5=8\cdot15=120$.

::sa
What is $2^3\cdot5$?
::key 40
$2^3\cdot5=8\cdot5=40$.

::sa
How many different prime factors does $210$ have?
::key 4
$210=2\cdot3\cdot5\cdot7$, which has $4$ different prime factors.
:::
