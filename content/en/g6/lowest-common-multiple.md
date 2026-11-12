---
title: Common multiples. Lowest common multiple
description: Find common multiples and the lowest common multiple by listing and by prime factorisation; use the LCM as a common denominator.
minutes: 25
---

:::goals
- Understand the common multiples and the lowest common multiple of two or more numbers, and the notation $\text{CM}$, $\text{LCM}$.
- Find the LCM by listing multiples and by using prime factorisation.
- Find all common multiples from the LCM.
- Use the LCM as a common denominator to add and subtract fractions, and solve "when do they meet again" problems.
:::

At the bus station near school, route $8$ leaves every $12$ minutes and route $15$ leaves every $18$ minutes. At exactly $6$ a.m., both buses leave together. At what time do the two routes next leave together?

The time we want must be a moment when bus $8$ has made a whole number of trips, and so has bus $15$. So the number of minutes that have passed is a multiple of $12$ and also a multiple of $18$. In the last lesson we looked for the largest "shared" factor; in this lesson we look for the smallest "shared" multiple.

## Common multiples

We write the multiples of each number (other than $0$) in increasing order:

- Multiples of $12$: $12$; $24$; $36$; $48$; $60$; $72$; $84$; $96$; $108$; …
- Multiples of $18$: $18$; $36$; $54$; $72$; $90$; $108$; …

The numbers in both lists are $36$; $72$; $108$; … The smallest non-zero one is $36$. So after $36$ minutes, at $6$:$36$ a.m., the two buses leave together again.

:::graph Departure times of the two routes in the first $72$ minutes
alt: Two time lines from 0 to 72 minutes. The upper one marks 0, 12, 24, 36, 48, 60, 72 for route 8; the lower one marks 0, 18, 36, 54, 72 for route 15. The routes coincide at 0, 36 and 72.
x: -4..76
y: -1..3
shape: free
segment: (0, 2) (72, 2)
segment: (0, 0) (72, 0)
point: (0, 2) "0" above
point: (12, 2) "12" above
point: (24, 2) "24" above
point: (36, 2) "36" above
point: (48, 2) "48" above
point: (60, 2) "60" above
point: (72, 2) "72" above
point: (0, 0) "0" below
point: (18, 0) "18" below
point: (36, 0) "36" below
point: (54, 0) "54" below
point: (72, 0) "72" below
vline: 36 ; dashed
vline: 72 ; dashed
label: (6, 2.7) "Route 8"
label: (6, -0.7) "Route 15"
:::

:::definition Common multiple, lowest common multiple
- A **common multiple** of two or more numbers is a multiple of all of them. The set of common multiples of $a$ and $b$ is written $\text{CM}(a,b)$.
- The **lowest common multiple** of two or more numbers is the smallest **non-zero** number among their common multiples, written $\text{LCM}(a,b)$.
:::

Why "non-zero"? Because $0$ is a multiple of every number, so if we counted $0$, the LCM would always be $0$ and would tell us nothing.

In the bus example, $\text{CM}(12,18)=\{0;36;72;108;\dots\}$ and $\text{LCM}(12,18)=36$. You can see that the common multiples $36$, $72$, $108$, … are all multiples of $36$.

:::note Common multiples from the LCM
The common multiples of some numbers are exactly the multiples of their LCM.
:::

## Finding the LCM with prime factorisation

A common multiple must be divisible by each number, so it must contain **every** prime that appears in any of the numbers, each with at least the power it has in each number. To get the lowest common multiple, we take just enough: each prime with its largest power.

:::theorem Rule for the LCM
To find the LCM of two or more numbers greater than $1$:
1. Write each number as a product of prime factors.
2. Pick out **all** the primes, shared and unshared.
3. Multiply the chosen primes, each with its **largest power**. The product is the LCM.
:::

Compare with the rule for the HCF; there are two differences. The HCF takes the **shared** primes with their **smallest** powers; the LCM takes **all** the primes with their **largest** powers.

:::tip Two quick cases
- If $a$ is divisible by $b$, then $\text{LCM}(a,b)=a$. For example, $\text{LCM}(24,8)=24$.
- If $a$ and $b$ are coprime, then $\text{LCM}(a,b)=a\cdot b$. For example, $\text{LCM}(8,9)=72$.
:::

## Using the LCM: common denominators

To add or subtract two fractions with different denominators, we write them over the same denominator. Any common denominator must be a common multiple of the denominators. Choosing the **LCM of the denominators** keeps the numbers smallest, so there is less simplifying afterwards.

## Examples

We start by listing, to see clearly what common multiples are.

:::example Listing multiples
Find the common multiples of $6$ and $8$ that are less than $100$, then give $\text{LCM}(6,8)$.

**Solution.**

The multiples of $8$ less than $100$ are $0$; $8$; $16$; $24$; $32$; $40$; $48$; $56$; $64$; $72$; $80$; $88$; $96$.

Among them, the numbers divisible by $6$ are $0$; $24$; $48$; $72$; $96$.

The smallest non-zero common multiple is $24$.

So the common multiples of $6$ and $8$ less than $100$ are $0$; $24$; $48$; $72$; $96$, and $\text{LCM}(6,8)=24$.
:::

A small trick from this example: list the multiples of the **larger** number, then keep those divisible by the smaller one. That saves writing two long lists.

:::example Using prime factors
Find $\text{LCM}(36,60)$.

**Solution.**

Writing each number as a product of primes, we have
$$36=2^2\cdot3^2,\qquad 60=2^2\cdot3\cdot5.$$

All the primes, shared and unshared, are $2$, $3$ and $5$.

The largest power of $2$ is $2$, of $3$ is $2$ and of $5$ is $1$.

So $\text{LCM}(36,60)=2^2\cdot3^2\cdot5=180$.

Therefore $\text{LCM}(36,60)=180$.
:::

With three numbers, the method is the same.

:::example Three numbers
Find $\text{LCM}(8,12,30)$, then write the common multiples of the three numbers that are less than $400$.

**Solution.**

We have $8=2^3$, $12=2^2\cdot3$ and $30=2\cdot3\cdot5$.

All the primes are $2$, $3$, $5$, with largest powers $3$, $1$, $1$.

So $\text{LCM}(8,12,30)=2^3\cdot3\cdot5=120$.

The common multiples are the multiples of $120$, so those less than $400$ are $0$; $120$; $240$; $360$.

So $\text{LCM}(8,12,30)=120$, and the common multiples less than $400$ are $0$; $120$; $240$; $360$.
:::

Now we use the LCM to calculate with fractions.

:::example Common denominator from the LCM
Work out $\dfrac{5}{12}+\dfrac{7}{18}$.

**Solution.**

We have $12=2^2\cdot3$ and $18=2\cdot3^2$, so $\text{LCM}(12,18)=2^2\cdot3^2=36$. We choose $36$ as the common denominator.

Since $36\div12=3$ and $36\div18=2$, we get
$$\dfrac{5}{12}+\dfrac{7}{18}=\dfrac{5\cdot3}{36}+\dfrac{7\cdot2}{36}=\dfrac{15}{36}+\dfrac{14}{36}=\dfrac{29}{36}.$$

So $\dfrac{5}{12}+\dfrac{7}{18}=\dfrac{29}{36}$.
:::

Finally, a familiar real problem: things that repeat in cycles.

:::example Three strings of lights
A Christmas tree has three strings of lights. The red string flashes every $6$ seconds, the green every $8$ seconds and the yellow every $10$ seconds. When the power is switched on, all three flash together. After how many seconds, at least, do all three flash together again?

**Solution.**

*Understand the problem.* Let $t$ (seconds) be the shortest time until all three flash together again ($t>0$). The red string flashes at multiples of $6$, so $t$ is divisible by $6$. In the same way, $t$ is divisible by $8$ and by $10$.

*Plan.* So $t$ is the smallest non-zero common multiple of $6$, $8$, $10$, that is $t=\text{LCM}(6,8,10)$.

*Carry out the plan.* We have $6=2\cdot3$, $8=2^3$ and $10=2\cdot5$.

So $\text{LCM}(6,8,10)=2^3\cdot3\cdot5=120$, that is $t=120$.

*Look back.* Check: $120\div6=20$, $120\div8=15$ and $120\div10=12$ are all whole numbers. Is the answer sensible? $120$ seconds is $2$ minutes, so every $2$ minutes the whole tree lights up at once.

So after at least $120$ seconds (that is, $2$ minutes), all three strings flash together again.
:::

:::warning Common mistakes
- **Mixing up the LCM and the HCF.** Wrong: $\text{LCM}(12,18)=6$. Why it is wrong: $6$ is smaller than $12$, so it cannot be a multiple of $12$. Right: $\text{LCM}(12,18)=36$.
- **Taking only the shared primes.** Wrong: $\text{LCM}(36,60)=2^2\cdot3^2=36$. Why it is wrong: $36$ is not divisible by $60$; the unshared prime $5$ is needed too. Right: $2^2\cdot3^2\cdot5=180$.
- **Taking the smallest powers.** Wrong: $\text{LCM}(8,12,30)=2\cdot3\cdot5=30$. Why it is wrong: $30$ is not divisible by $8$. Right: take $2^3$, giving $120$.
- **Always multiplying the two numbers.** Wrong: $\text{LCM}(12,18)=12\cdot18=216$. Why it is wrong: $216$ is a common multiple but not the lowest. Right: the LCM equals the product only when the numbers are coprime.
:::

## Key terms

:::terms
- multiple | bội
- common multiple | bội chung
- lowest common multiple (LCM) | bội chung nhỏ nhất
- shared and unshared factors | thừa số chung và riêng
- largest power | số mũ lớn nhất
- common denominator | mẫu chung
- write over a common denominator | quy đồng mẫu
:::

## Summary

- A common multiple of some numbers is a multiple of all of them; the LCM is the smallest non-zero common multiple.
- To find the LCM: write each number as a product of primes, pick all the primes, take each with its largest power and multiply.
- The common multiples are exactly the multiples of the LCM.
- If $a$ is divisible by $b$, the LCM is $a$; if $a$ and $b$ are coprime, the LCM is $a\cdot b$.
- Problems about "happening together again", "at least how long", and common denominators of fractions all use the LCM.

Back to the bus station: $\text{LCM}(12,18)=36$, so the two routes leave together again at $6$:$36$ a.m. Whenever "at least" goes together with things that repeat, think of the LCM.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Write the common multiples of $4$ and $6$ that are less than $60$, then give $\text{LCM}(4,6)$.

::hint
**What you need:** a common multiple appears in both lists of multiples.

**Steps:**
1. Write the multiples of $6$ less than $60$.
2. Keep those divisible by $4$.

::solution
The multiples of $6$ less than $60$ are $0$; $6$; $12$; $18$; $24$; $30$; $36$; $42$; $48$; $54$.

Of these, the numbers divisible by $4$ are $0$; $12$; $24$; $36$; $48$.

The smallest non-zero one is $12$.

So the common multiples less than $60$ are $0$; $12$; $24$; $36$; $48$, and $\text{LCM}(4,6)=12$.

**Answer.** $0$; $12$; $24$; $36$; $48$; $\text{LCM}(4,6)=12$.
:::

:::exercise
Find the LCM of:

a) $15$ and $20$;

b) $28$ and $42$.

::hint
**What you need:** take all the primes, shared and unshared, each with its largest power.

**Steps:**
1. Write each number as a product of primes.
2. Multiply the chosen primes.

::solution
a) We have $15=3\cdot5$ and $20=2^2\cdot5$.

All the primes are $2$, $3$, $5$, with largest powers $2$, $1$, $1$.

So $\text{LCM}(15,20)=2^2\cdot3\cdot5=60$.

b) We have $28=2^2\cdot7$ and $42=2\cdot3\cdot7$.

All the primes are $2$, $3$, $7$, with largest powers $2$, $1$, $1$.

So $\text{LCM}(28,42)=2^2\cdot3\cdot7=84$.

Therefore $\text{LCM}(15,20)=60$ and $\text{LCM}(28,42)=84$.

**Answer.** a) $60$; b) $84$.
:::

:::exercise
Without factorising, find quickly:

a) $\text{LCM}(9,45)$;

b) $\text{LCM}(7,10)$.

::hint
**What you need:** if $a$ is divisible by $b$, then $\text{LCM}(a,b)=a$; if two numbers are coprime, the LCM is their product.

**Steps:**
1. Check whether $45$ is divisible by $9$.
2. Check whether $7$ and $10$ share any factor other than $1$.

::solution
a) Since $45=9\cdot5$, $45$ is divisible by $9$. So $\text{LCM}(9,45)=45$.

b) Since $7$ is prime and $10$ is not divisible by $7$, $\text{HCF}(7,10)=1$. So $\text{LCM}(7,10)=7\cdot10=70$.

Therefore $\text{LCM}(9,45)=45$ and $\text{LCM}(7,10)=70$.

**Answer.** a) $45$; b) $70$.
:::

:::exercise
Find $\text{LCM}(10,12,15)$, then write the common multiples of the three numbers that are less than $200$.

::hint
**What you need:** the common multiples are the multiples of the LCM.

**Steps:**
1. Write the three numbers as products of primes and find the LCM.
2. Multiply the LCM by $0$, $1$, $2$, … until you pass $200$.

::solution
We have $10=2\cdot5$, $12=2^2\cdot3$ and $15=3\cdot5$.

All the primes are $2$, $3$, $5$, with largest powers $2$, $1$, $1$.

So $\text{LCM}(10,12,15)=2^2\cdot3\cdot5=60$.

The multiples of $60$ less than $200$ are $0$; $60$; $120$; $180$.

So $\text{LCM}(10,12,15)=60$, and the common multiples less than $200$ are $0$; $60$; $120$; $180$.

**Answer.** $\text{LCM}=60$; $0$; $60$; $120$; $180$.
:::

:::exercise
Using the LCM of the denominators as the common denominator, work out:

a) $\dfrac{3}{8}+\dfrac{5}{12}$;

b) $\dfrac{7}{10}-\dfrac{4}{15}$.

::hint
**What you need:** use the LCM of the denominators as the common denominator.

**Steps:**
1. Find the LCM of the two denominators.
2. Find the multiplier for each denominator, rewrite the fractions, then add or subtract the numerators.

::solution
a) We have $8=2^3$ and $12=2^2\cdot3$, so $\text{LCM}(8,12)=2^3\cdot3=24$.

Since $24\div8=3$ and $24\div12=2$, we get
$$\dfrac{3}{8}+\dfrac{5}{12}=\dfrac{9}{24}+\dfrac{10}{24}=\dfrac{19}{24}.$$

b) We have $10=2\cdot5$ and $15=3\cdot5$, so $\text{LCM}(10,15)=2\cdot3\cdot5=30$.

Since $30\div10=3$ and $30\div15=2$, we get
$$\dfrac{7}{10}-\dfrac{4}{15}=\dfrac{21}{30}-\dfrac{8}{30}=\dfrac{13}{30}.$$

So the results are $\dfrac{19}{24}$ and $\dfrac{13}{30}$.

**Answer.** a) $\dfrac{19}{24}$; b) $\dfrac{13}{30}$.
:::

:::exercise
Minh goes swimming every $4$ days and Ha goes swimming every $6$ days. Today they both go swimming. After at least how many days will they next go swimming on the same day?

::hint
**What you need:** the number of days is the smallest non-zero common multiple of $4$ and $6$.

**Steps:**
1. Call the number of days $n$ and say what it must satisfy.
2. Find $\text{LCM}(4,6)$.

::solution
Let $n$ be the smallest number of days until they swim on the same day again ($n>0$).

Minh swims on days that are multiples of $4$, and Ha on days that are multiples of $6$. So $n$ is divisible by both $4$ and $6$, and $n$ is as small as possible, so $n=\text{LCM}(4,6)$.

We have $4=2^2$ and $6=2\cdot3$, so $\text{LCM}(4,6)=2^2\cdot3=12$.

So after at least $12$ days they go swimming on the same day again.

**Answer.** $12$ days.
:::

:::exercise
A school has between $200$ and $300$ pupils in year 6. When they line up in rows of $8$, rows of $10$ or rows of $12$, there is nobody left over. How many pupils are in year 6?

::hint
**What you need:** the number of pupils is a common multiple of $8$, $10$ and $12$.

**Steps:**
1. Call the number of pupils $x$ and say what it must satisfy.
2. Find the LCM, list its multiples, then pick the one between $200$ and $300$.

::solution
Let the number of pupils in year 6 be $x$ ($200\le x\le300$).

Since rows of $8$, $10$ and $12$ all work exactly, $x$ is divisible by $8$, $10$ and $12$. So $x$ is a common multiple of $8$, $10$, $12$.

We have $8=2^3$, $10=2\cdot5$ and $12=2^2\cdot3$, so $\text{LCM}(8,10,12)=2^3\cdot3\cdot5=120$.

So $x$ is a multiple of $120$, that is, one of $0$; $120$; $240$; $360$; …

Of these, only $240$ lies between $200$ and $300$, so $x=240$.

So there are $240$ pupils in year 6.

**Answer.** $240$ pupils.
:::

:::exercise Challenge
Find the smallest natural number greater than $1$ that leaves a remainder of $1$ when divided by $6$, by $8$ or by $9$.

::hint
**What you need:** if $x$ leaves remainder $1$ when divided by $6$, then $x-1$ is divisible by $6$.

**Steps:**
1. Notice that $x-1$ is divisible by $6$, $8$ and $9$.
2. Find the LCM, then choose the smallest value of $x-1$ with $x>1$.

::solution
Let the number be $x$ ($x>1$).

Since $x$ leaves remainder $1$ when divided by $6$, $8$ and $9$, the number $x-1$ is divisible by $6$, $8$ and $9$, that is, $x-1$ is a common multiple of $6$, $8$, $9$.

We have $6=2\cdot3$, $8=2^3$ and $9=3^2$, so $\text{LCM}(6,8,9)=2^3\cdot3^2=72$.

So $x-1$ is one of $0$; $72$; $144$; … Since $x>1$, we need $x-1>0$, so the smallest value is $x-1=72$, that is $x=73$.

Check: $73=6\cdot12+1=8\cdot9+1=9\cdot8+1$.

So the number is $73$.

**Answer.** $73$.
:::

## Mini test

:::quiz
::mc
$\text{LCM}(12,20)$ equals
A. $4$.
B. $240$.
C. $60$.
D. $120$.
::key C
$12=2^2\cdot3$ and $20=2^2\cdot5$, so the LCM is $2^2\cdot3\cdot5=60$. A is the HCF; B is the product $12\cdot20$; D is a common multiple but not the lowest.

::mc
Given $\text{LCM}(a,b)=15$, the common multiples of $a$ and $b$ less than $50$ are
A. $1$; $3$; $5$; $15$.
B. $0$; $15$; $30$; $45$.
C. $15$; $30$; $45$; $60$.
D. $0$; $15$.
::key B
The common multiples are the multiples of $15$. A lists the factors of $15$; C has $60>50$ and misses $0$; D misses $30$ and $45$.

::mc
The smallest common denominator for $\dfrac{1}{6}$ and $\dfrac{3}{10}$ is
A. $60$.
B. $16$.
C. $2$.
D. $30$.
::key D
The smallest common denominator is $\text{LCM}(6,10)=30$. A is the product $6\cdot10$; B is the sum; C is the HCF.

::mc
Two gear wheels mesh. The small one has $12$ teeth and the large one has $18$ teeth. Two marked teeth are touching. At least how many turns must the small wheel make before those two teeth touch again?
A. $3$ turns.
B. $2$ turns.
C. $36$ turns.
D. $6$ turns.
::key A
The smallest number of teeth that must pass the contact point is $\text{LCM}(12,18)=36$, so the small wheel turns $36\div12=3$ times. B is the number of turns of the large wheel; C mixes up teeth and turns; D is the HCF.

::tf
Decide whether each statement is true or false.
a) $\text{LCM}(5,7)=35$.
b) $\text{LCM}(16,4)=64$.
c) The number $0$ is a common multiple of every pair of non-zero numbers.
d) If $\text{HCF}(a,b)=1$, then $\text{LCM}(a,b)=a\cdot b$.
::key T F T T
a) True: $5$ and $7$ are coprime. b) False: $16$ is divisible by $4$, so the LCM is $16$. c) True: $0$ is divisible by every non-zero number. d) True: the numbers share no prime, so the LCM is the product.

::sa
Find $\text{LCM}(18,24)$.
::key 72
$18=2\cdot3^2$ and $24=2^3\cdot3$, so the LCM is $2^3\cdot3^2=72$.

::sa
A number is divisible by $4$, $5$ and $6$. What is the smallest such non-zero number?
::key 60
It is $\text{LCM}(4,5,6)=2^2\cdot3\cdot5=60$.
:::
