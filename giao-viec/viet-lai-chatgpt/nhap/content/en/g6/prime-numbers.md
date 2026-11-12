---
title: Prime numbers
description: Understand prime numbers, apply the rules in calculations and solve practical problems.
minutes: 25
---

:::goals
- Recognise and describe prime numbers.
- Explain why the main rule works.
- Carry out the related calculations or reasoning accurately.
- Apply the idea to a practical situation.
:::

A club has $29$ badges and wants to arrange them in equal rows. Apart from one row of $29$ or $29$ rows of one, is there any other arrangement? This question about equal grouping leads to prime numbers.

## prime numbers

**A short exploration.**
List the factors greater than $0$: $12$ has factors $1,2,3,4,6,12$, whereas $13$ has only $1$ and $13$. The difference is that $13$ cannot be split into equal groups of between $2$ and $12$ objects.

:::definition Prime and composite numbers
A prime number is a natural number greater than $1$ with exactly two factors: $1$ and itself. A composite number is a natural number greater than $1$ with more than two factors. Neither $0$ nor $1$ is prime or composite.
:::

:::definition Prime factorisation
To express a composite number as a product of prime factors, divide successively by the primes $2,3,5,7,\ldots$ until the quotient is $1$.
:::

**Why does this work?**
If a number $n>1$ is not prime, then $n=ab$ with $1<a<n$ and $1<b<n$, so $n$ has the extra factors $a,b$. Conversely, any factor other than $1$ and $n$ makes the number composite. During prime factorisation each division makes the remaining quotient smaller, so the process must end.

**How to check your own work.** For a question on this topic, first state in words what is given and what must be found. Next write the rule you will use, substitute values or reason one step at a time, and then check the result in a different way: put it back into the data, estimate its size, or compare it with a diagram or number line. If two methods disagree, locate the first step where they differ instead of changing only the final answer. This habit catches sign errors, missing units and overlooked cases.

**Systems view.** prime numbers is not an isolated trick. Follow the chain: the data determine a model, the model determines the calculation, and the result must return to the original situation. When one piece of data changes, predict whether the result should increase, decrease or stay unchanged before calculating again.

## Worked examples and applications

:::example Identifying primes
Which of $1,2,19,25,37$ are prime?

**Solution.**
$1$ is not prime; $2$ has only the factors $1,2$; neither $19$ nor $37$ has a factor from $2$ up to the number before it; $25=5^2$ is composite.

Therefore, the primes are $2,19,37$.
:::

:::example A prime factorisation
Express $180$ as a product of prime factors.

**Solution.**
Divide successively: $180=2\cdot90=2^2\cdot45=2^2\cdot3^2\cdot5$. The factors $2,3,5$ are all prime.

Therefore, $180=2^2\cdot3^2\cdot5$.
:::

:::example Testing the number $91$
Is $91$ prime or composite?

**Solution.**
Trying small factors gives $91\div7=13$, so $91=7\cdot13$. Since $91$ has the factors $7$ and $13$ besides $1,91$, it is composite.

Therefore, $91$ is composite.
:::

:::example Arranging badges
A class has $31$ badges. Can they be shared equally among $k$ bags, with more than one badge per bag and $k>1$?

**Solution.**

*Understand.* We need a factor $k$ of $31$ satisfying $1<k<31$.

*Plan.* We decide whether $31$ is prime or composite.

*Solve.* $31$ is not divisible by $2,3,5$. Any factorisation $31=ab$ with $a,b>1$ would have one factor at most $\sqrt{31}<6$, so there is no other factor to test. Hence $31$ is prime.

*Look back.* Only the two trivial arrangements exist: one bag of $31$ or $31$ bags of one. With $33$ badges, $3$ bags of $11$ would become possible.

Therefore, the required sharing is not possible.
:::

## Common mistakes and connections

:::warning What can go wrong?
- **Calling $1$ prime.** This is wrong because a prime must have exactly two factors. $1$ has only one factor, namely $1$. Correct: $1$ is neither prime nor composite.
- **Stopping a factorisation too early.** Writing $60=6\cdot10$ is not yet a prime factorisation. $6$ and $10$ are still composite. Correct: $60=2^2\cdot3\cdot5$.
:::

**Connections.** Primes are the building blocks of natural numbers. Prime factorisation will help us find highest common factors, lowest common multiples and simplify fractions.

## Key terms

:::terms
- prime number | số nguyên tố
- composite number | hợp số
- factor | ước
- factor | thừa số
- prime factor | thừa số nguyên tố
- prime factorisation | phân tích ra thừa số nguyên tố
- natural number | số tự nhiên
:::

## Summary

- A prime is greater than $1$ and has exactly two factors: $1$ and itself.
- A composite number is greater than $1$ and has more than two factors.
- $0$ and $1$ are neither prime nor composite.
- A prime factorisation must end with prime factors only.

## Practice

Each exercise includes the knowledge you need and a sequence of hints. Try it before opening the solution.

:::exercise
Select the primes from $2,9,17,21,23,27$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$9=3^2$, $21=3\cdot7$ and $27=3^3$ are composite; $2,17,23$ have exactly two factors.

**Answer.** $2,17,23$.
:::

:::exercise
Express $84$ as a product of prime factors.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$84=2\cdot42=2^2\cdot21=2^2\cdot3\cdot7$.

**Answer.** $2^2\cdot3\cdot7$.
:::

:::exercise
Express $315$ as a product of prime factors.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$315=3\cdot105=3^2\cdot35=3^2\cdot5\cdot7$.

**Answer.** $3^2\cdot5\cdot7$.
:::

:::exercise
Explain why $143$ is composite.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
We have $143=11\cdot13$, so $143$ has factors besides $1$ and $143$.

**Answer.** $143$ is composite.
:::

:::exercise
Find the prime $p$ if $p$ is a factor of $42$ and $p>5$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$42=2\cdot3\cdot7$. Of its prime factors, only $7>5$.

**Answer.** $p=7$.
:::

:::exercise
A shop has $47$ bottles and wants equal trays with at least $2$ bottles per tray. Can it use more than one tray without a remainder?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$47$ is prime because it is not divisible by $2,3,5$. Therefore no number of trays $k$ with $1<k<47$ divides $47$.

**Answer.** not possible.
:::

:::exercise
Find the least number of the form $2^a\cdot3^b$, where $a,b$ are positive natural numbers, that has exactly $12$ factors.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
The number of factors is $(a+1)(b+1)=12$. With $a,b\ge1$, the pairs are $(5,1),(3,2),(2,3),(1,5)$. The least corresponding number occurs at $(a,b)=(3,2)$: $2^3\cdot3^2=72$.

**Answer.** $72$.
:::

:::exercise Challenge
Prove that the sum of two primes greater than $2$ is always composite.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Every prime greater than $2$ is odd. The sum of two odd numbers is even and greater than $2$, so it is divisible by $2$ and has more than two factors.

**Answer.** the sum is always composite.
:::

## Mini test

:::quiz
::mc
Which number is prime?
A. $29$
B. $33$
C. $39$
D. $51$
::key A
$29$ is not divisible by $2,3,5$; each of the other numbers is divisible by $3$.

::mc
The correct prime factorisation of $90$ is
A. $9\cdot10$
B. $2\cdot3^2\cdot5$
C. $2\cdot45$
D. $3\cdot30$
::key B
$90=2\cdot45=2\cdot3^2\cdot5$, with all factors prime.

::mc
Which number is neither prime nor composite?
A. $2$
B. $4$
C. $1$
D. $7$
::key C
$1$ has only one factor, so it belongs to neither class.

::mc
Why is $77$ composite?
A. $77$ is odd.
B. $77>10$.
C. $77$ ends in $7$.
D. $77=7\cdot11$.
::key D
$77=7\cdot11$ gives two factors other than $1$ and $77$.

::tf
Consider these statements about prime numbers.
a) $1$ is the least prime.
b) $2$ is the only even prime.
c) $49$ is composite.
d) Every odd number is prime.
::key F T T F
b) True. a) False because $1$ is not prime. c) True since $49=7^2$. d) False; for example, $9=3^2$.

::sa
How many primes are less than $10$?
::key 4
They are $2,3,5,7$.

::sa
What is the greatest prime factor of $210$?
::key 7
$210=2\cdot3\cdot5\cdot7$.

:::
