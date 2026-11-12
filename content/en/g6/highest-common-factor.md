---
title: Common factors. Highest common factor
description: Find common factors and the highest common factor by listing factors and by prime factorisation; simplify fractions fully.
minutes: 25
---

:::goals
- Understand the common factors and the highest common factor of two or more numbers, and the notation $\text{CF}$, $\text{HCF}$.
- Find the HCF by listing factors and by using prime factorisation.
- Find all common factors from the HCF and recognise coprime numbers.
- Simplify a fraction to its simplest form and solve "largest equal share" problems.
:::

Ms Lan has $18$ notebooks and $24$ pens. She wants to share them into gift packs so that every pack has the same number of notebooks and the same number of pens, with nothing left over. What is the greatest number of gift packs she can make?

The number of packs must divide $18$ notebooks exactly, and it must also divide $24$ pens exactly. In other words, it is a factor of $18$ and a factor of $24$ at the same time. This lesson shows you how to find such "shared" numbers, and above all the largest one.

## Common factors

We list the factors of each number:

- $\text{F}(18)=\{1;2;3;6;9;18\}$;
- $\text{F}(24)=\{1;2;3;4;6;8;12;24\}$.

The numbers that appear in both lists are $1$, $2$, $3$, $6$. These are the possible numbers of packs: $1$, $2$, $3$ or $6$.

:::diagram The factors of $18$ and of $24$
alt: Two overlapping circles. The left circle holds the factors of 18 only, 9 and 18; the right circle holds the factors of 24 only, 4, 8, 12, 24; the overlap holds 1, 2, 3, 6.
point P 0,0 ""
point Q 2,0 ""
circle P 1.6
circle Q 1.6
label -1,1.3 "F(18)"
label 3,1.3 "F(24)"
label -0.8,0 "9; 18"
label 1,0.3 "1; 2"
label 1,-0.3 "3; 6"
label 2.9,0.3 "4; 8"
label 2.9,-0.3 "12; 24"
:::

:::definition Common factor, highest common factor
- A **common factor** of two or more numbers is a factor of all of them. The set of common factors of $a$ and $b$ is written $\text{CF}(a,b)$.
- The **highest common factor** of two or more numbers is the largest of their common factors, written $\text{HCF}(a,b)$.
:::

So $\text{CF}(18,24)=\{1;2;3;6\}$ and $\text{HCF}(18,24)=6$. Ms Lan can make at most $6$ gift packs, each with $3$ notebooks and $4$ pens.

Notice something nice: every common factor $1$, $2$, $3$, $6$ is a factor of $6$. This is no accident.

:::note Common factors from the HCF
The common factors of some numbers are exactly the factors of their HCF.
:::

## Finding the HCF with prime factorisation

Listing factors is easy to understand, but for larger numbers such as $84$ and $126$ it takes a long time. Prime factorisation helps. A common factor can only contain prime factors that appear in **every** number. Each of those primes cannot have a higher power than it has in any of the numbers. To get the highest common factor, we take each shared prime with the highest power allowed, which is its smallest power among the numbers.

:::theorem Rule for the HCF
To find the HCF of two or more numbers greater than $1$:
1. Write each number as a product of prime factors.
2. Pick out the **shared** prime factors.
3. Multiply the chosen primes, each with its **smallest power**. The product is the HCF.
:::

:::note Coprime numbers
If $\text{HCF}(a,b)=1$, we say that $a$ and $b$ are **coprime**. For example, $8$ and $15$ are coprime, even though both are composite.
:::

## Using the HCF: fractions in simplest form

A fraction $\dfrac{a}{b}$ is in its **simplest form** if $\text{HCF}(a,b)=1$, that is, the numerator and the denominator have no common factor other than $1$. To simplify a fraction fully in one step, divide both the numerator and the denominator by their HCF.

## Examples

We start by listing, to see clearly what common factors mean.

:::example Listing factors
Find $\text{CF}(20,30)$ and $\text{HCF}(20,30)$.

**Solution.**

We have $\text{F}(20)=\{1;2;4;5;10;20\}$ and $\text{F}(30)=\{1;2;3;5;6;10;15;30\}$.

The numbers in both sets are $1$, $2$, $5$, $10$.

So $\text{CF}(20,30)=\{1;2;5;10\}$ and $\text{HCF}(20,30)=10$.
:::

For larger numbers we use prime factorisation.

:::example Using prime factors
Find $\text{HCF}(84,126)$.

**Solution.**

Writing each number as a product of primes, we have
$$84=2^2\cdot3\cdot7,\qquad 126=2\cdot3^2\cdot7.$$

The shared prime factors are $2$, $3$ and $7$.

The smallest power of $2$ is $1$, of $3$ is $1$ and of $7$ is $1$.

So $\text{HCF}(84,126)=2\cdot3\cdot7=42$.

Therefore $\text{HCF}(84,126)=42$.
:::

The rule works for three numbers too. Just remember: a prime must appear in **all** the numbers.

:::example Three numbers
Find $\text{HCF}(48,72,120)$, then find $\text{CF}(48,72,120)$.

**Solution.**

We have $48=2^4\cdot3$, $72=2^3\cdot3^2$ and $120=2^3\cdot3\cdot5$.

The prime $5$ does not appear in $48$ or $72$, so the shared primes are only $2$ and $3$.

The smallest power of $2$ is $3$ and of $3$ is $1$. So $\text{HCF}(48,72,120)=2^3\cdot3=24$.

The common factors are the factors of $24$.

So $\text{CF}(48,72,120)=\{1;2;3;4;6;8;12;24\}$.
:::

The HCF lets us simplify a fraction in one step.

:::example Simplifying fully
Write $\dfrac{84}{126}$ in its simplest form.

**Solution.**

From the example above, $\text{HCF}(84,126)=42$.

Dividing the numerator and the denominator by $42$, we get
$$\dfrac{84}{126}=\dfrac{84\div42}{126\div42}=\dfrac{2}{3}.$$

Since $\text{HCF}(2,3)=1$, the fraction $\dfrac{2}{3}$ is in its simplest form.

So $\dfrac{84}{126}=\dfrac{2}{3}$.
:::

Finally, a real problem, solved in four steps.

:::example Cutting cable into the longest pieces
Two rolls of electric cable are $84$ m and $126$ m long. An electrician wants to cut both rolls into pieces of equal length, a whole number of metres, with nothing left over, and with each piece as long as possible. How long is each piece, and how many pieces are there altogether?

**Solution.**

*Understand the problem.* Let each piece be $d$ m long. Since both rolls are cut completely, $84$ and $126$ are both divisible by $d$, so $d$ is a common factor of $84$ and $126$. We want the largest $d$.

*Plan.* So $d=\text{HCF}(84,126)$.

*Carry out the plan.* From the example above, $\text{HCF}(84,126)=42$, so $d=42$.

The first roll gives $84\div42=2$ (pieces) and the second roll gives $126\div42=3$ (pieces).

The total number of pieces is $2+3=5$ (pieces).

*Look back.* Check: $42\cdot2=84$ and $42\cdot3=126$, so no cable is wasted. If shorter pieces were needed, for example to get more of them, each length would still have to be a factor of $42$.

So each piece is $42$ m long, and there are $5$ pieces altogether.
:::

:::warning Common mistakes
- **Including primes that are not shared.** Wrong: $\text{HCF}(48,72,120)=2^3\cdot3\cdot5=120$. Why it is wrong: the prime $5$ is not in $48$ or $72$. Right: $2^3\cdot3=24$.
- **Taking the largest powers.** Wrong: $\text{HCF}(84,126)=2^2\cdot3^2\cdot7=252$. Why it is wrong: $252$ is bigger than $84$, so it cannot be a factor of $84$. Right: take the smallest powers, giving $42$.
- **Thinking two composite numbers cannot be coprime.** Wrong: "$8$ and $15$ are both composite, so they are not coprime." Why it is wrong: $\text{HCF}(8,15)=1$. Right: $8$ and $15$ are coprime.
- **Not simplifying all the way.** Wrong: $\dfrac{84}{126}=\dfrac{42}{63}$ and stopping. Why it is wrong: $42$ and $63$ still share the factor $21$. Right: divide by the HCF, $42$, to get $\dfrac{2}{3}$.
:::

## Key terms

:::terms
- common factor | ước chung
- highest common factor (HCF) | ước chung lớn nhất
- common prime factor | thừa số nguyên tố chung
- smallest power | số mũ nhỏ nhất
- coprime numbers | hai số nguyên tố cùng nhau
- fraction in its simplest form | phân số tối giản
:::

## Summary

- A common factor of some numbers is a factor of all of them; the HCF is the largest common factor.
- To find the HCF: write each number as a product of primes, pick the shared primes, take each with its smallest power and multiply.
- The common factors are exactly the factors of the HCF.
- If $\text{HCF}(a,b)=1$, then $a$ and $b$ are coprime, and $\dfrac{a}{b}$ is in its simplest form.
- Problems about "the largest equal share" or "the longest equal pieces" usually lead to the HCF.

Back to Ms Lan's gifts: the greatest number of packs is $\text{HCF}(18,24)=6$. Whenever you see "as many as possible" together with "share equally", think of the HCF.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find $\text{CF}(12,18)$ by listing factors, then give $\text{HCF}(12,18)$.

::hint
**What you need:** a common factor appears in both sets of factors.

**Steps:**
1. Write $\text{F}(12)$ and $\text{F}(18)$.
2. Pick the shared numbers, then take the largest.

::solution
We have $\text{F}(12)=\{1;2;3;4;6;12\}$ and $\text{F}(18)=\{1;2;3;6;9;18\}$.

The numbers in both sets are $1$, $2$, $3$, $6$.

So $\text{CF}(12,18)=\{1;2;3;6\}$ and $\text{HCF}(12,18)=6$.

**Answer.** $\text{CF}(12,18)=\{1;2;3;6\}$; $\text{HCF}(12,18)=6$.
:::

:::exercise
Find the HCF of:

a) $45$ and $75$;

b) $56$ and $140$.

::hint
**What you need:** the three-step rule: factorise, pick the shared primes, take the smallest powers.

**Steps:**
1. Write each number as a product of primes.
2. Multiply the shared primes with their smallest powers.

::solution
a) We have $45=3^2\cdot5$ and $75=3\cdot5^2$.

The shared primes are $3$ and $5$, each with smallest power $1$.

So $\text{HCF}(45,75)=3\cdot5=15$.

b) We have $56=2^3\cdot7$ and $140=2^2\cdot5\cdot7$.

The shared primes are $2$ (smallest power $2$) and $7$ (smallest power $1$).

So $\text{HCF}(56,140)=2^2\cdot7=28$.

Therefore $\text{HCF}(45,75)=15$ and $\text{HCF}(56,140)=28$.

**Answer.** a) $15$; b) $28$.
:::

:::exercise
Find $\text{HCF}(36,60,84)$, then the set of common factors of the three numbers.

::hint
**What you need:** the common factors are the factors of the HCF.

**Steps:**
1. Write the three numbers as products of primes.
2. Find the HCF, then list its factors.

::solution
We have $36=2^2\cdot3^2$, $60=2^2\cdot3\cdot5$ and $84=2^2\cdot3\cdot7$.

The shared primes are $2$ (smallest power $2$) and $3$ (smallest power $1$).

So $\text{HCF}(36,60,84)=2^2\cdot3=12$.

The common factors are the factors of $12$: $1$; $2$; $3$; $4$; $6$; $12$.

So $\text{CF}(36,60,84)=\{1;2;3;4;6;12\}$.

**Answer.** $\text{HCF}=12$; $\text{CF}=\{1;2;3;4;6;12\}$.
:::

:::exercise
Write each fraction in its simplest form:

a) $\dfrac{45}{75}$;

b) $\dfrac{56}{140}$.

::hint
**What you need:** divide the numerator and the denominator by their HCF.

**Steps:**
1. Use the HCFs from the previous exercise.
2. Divide the numerator and the denominator by the HCF.

::solution
a) Since $\text{HCF}(45,75)=15$,
$$\dfrac{45}{75}=\dfrac{45\div15}{75\div15}=\dfrac{3}{5}.$$

b) Since $\text{HCF}(56,140)=28$,
$$\dfrac{56}{140}=\dfrac{56\div28}{140\div28}=\dfrac{2}{5}.$$

So $\dfrac{45}{75}=\dfrac{3}{5}$ and $\dfrac{56}{140}=\dfrac{2}{5}$.

**Answer.** a) $\dfrac{3}{5}$; b) $\dfrac{2}{5}$.
:::

:::exercise
Which of these pairs are coprime: $9$ and $16$; $14$ and $21$; $25$ and $36$?

::hint
**What you need:** two numbers are coprime when their HCF is $1$.

**Steps:**
1. Write each number as a product of primes.
2. Check whether the two numbers share a prime factor.

::solution
We have $9=3^2$ and $16=2^4$: no shared prime, so $\text{HCF}(9,16)=1$.

We have $14=2\cdot7$ and $21=3\cdot7$: they share the prime $7$, so $\text{HCF}(14,21)=7$.

We have $25=5^2$ and $36=2^2\cdot3^2$: no shared prime, so $\text{HCF}(25,36)=1$.

So the coprime pairs are $9$ and $16$; $25$ and $36$.

**Answer.** $9$ and $16$; $25$ and $36$.
:::

:::exercise
A display team has $48$ boys and $60$ girls. The teacher wants to line them up in columns, each column with the same number of boys and the same number of girls. What is the greatest number of columns? How many boys and girls are then in each column?

::hint
**What you need:** the number of columns is a common factor of $48$ and $60$; "the greatest" leads to the HCF.

**Steps:**
1. Call the number of columns $h$ and say what it must satisfy.
2. Find $\text{HCF}(48,60)$, then the numbers of boys and girls per column.

::solution
Let the number of columns be $h$. Since the boys and the girls are shared equally among the columns, $h$ is a common factor of $48$ and $60$. We want the largest $h$, so $h=\text{HCF}(48,60)$.

We have $48=2^4\cdot3$ and $60=2^2\cdot3\cdot5$.

So $\text{HCF}(48,60)=2^2\cdot3=12$, that is $h=12$.

Each column has $48\div12=4$ (boys) and $60\div12=5$ (girls).

So there can be at most $12$ columns, each with $4$ boys and $5$ girls.

**Answer.** $12$ columns; each with $4$ boys and $5$ girls.
:::

:::exercise
A rectangular yard is $16$ m long and $12$ m wide. It is to be covered completely with equal square stone slabs whose side is a whole number of metres, with no slab cut. What is the longest possible side of a slab? How many slabs are then needed?

::hint
**What you need:** the side of a slab must divide both the length and the width.

**Steps:**
1. The longest side is $\text{HCF}(16,12)$.
2. Count the slabs along each side, then multiply.

::solution
Let the side of a slab be $a$ m. Since no slab is cut, $16$ and $12$ are both divisible by $a$. For the longest side, $a=\text{HCF}(16,12)$.

We have $16=2^4$ and $12=2^2\cdot3$, so $\text{HCF}(16,12)=2^2=4$. Therefore $a=4$.

Along the length there are $16\div4=4$ (slabs), and along the width $12\div4=3$ (slabs).

The number of slabs is $4\cdot3=12$ (slabs).

So the longest side of a slab is $4$ m, and $12$ slabs are needed.

**Answer.** $4$ m; $12$ slabs.
:::

:::exercise Challenge
Find the largest natural number $a$ greater than $1$ such that both $70$ and $84$ are divisible by $a$. How many natural numbers $a$ greater than $1$ have this property?

::hint
**What you need:** such numbers $a$ are the common factors of $70$ and $84$, that is, the factors of the HCF.

**Steps:**
1. Find $\text{HCF}(70,84)$.
2. List the factors of the HCF and leave out $1$.

::solution
Since $70$ and $84$ are both divisible by $a$, the number $a$ is a common factor of $70$ and $84$.

We have $70=2\cdot5\cdot7$ and $84=2^2\cdot3\cdot7$, so $\text{HCF}(70,84)=2\cdot7=14$.

The common factors of $70$ and $84$ are the factors of $14$: $1$; $2$; $7$; $14$.

Leaving out $1$, we have $2$; $7$; $14$.

So the largest $a$ is $14$, and there are $3$ such numbers.

**Answer.** The largest $a$ is $14$; there are $3$ numbers.
:::

## Mini test

:::quiz
::mc
$\text{HCF}(24,36)$ equals
A. $6$.
B. $12$.
C. $72$.
D. $4$.
::key B
$24=2^3\cdot3$ and $36=2^2\cdot3^2$, so the HCF is $2^2\cdot3=12$. A is a common factor but not the highest; C is the lowest common multiple; D misses the factor $3$.

::mc
Given $\text{HCF}(a,b)=10$, the set $\text{CF}(a,b)$ is
A. $\{1;2;5;10\}$.
B. $\{10;20;30;\dots\}$.
C. $\{2;5\}$.
D. $\{1;10\}$.
::key A
The common factors are the factors of $10$. B lists multiples of $10$; C and D miss some factors.

::mc
Which fraction is in its simplest form?
A. $\dfrac{14}{21}$.
B. $\dfrac{15}{25}$.
C. $\dfrac{9}{16}$.
D. $\dfrac{12}{18}$.
::key C
$\text{HCF}(9,16)=1$. The others simplify: $\dfrac{14}{21}=\dfrac{2}{3}$, $\dfrac{15}{25}=\dfrac{3}{5}$, $\dfrac{12}{18}=\dfrac{2}{3}$.

::mc
$30$ oranges and $45$ tangerines are shared equally among plates, each plate with the same number of oranges and the same number of tangerines. The greatest number of plates is
A. $5$.
B. $3$.
C. $90$.
D. $15$.
::key D
The greatest number of plates is $\text{HCF}(30,45)=15$. A and B are common factors but not the highest; C is the LCM.

::tf
Decide whether each statement is true or false.
a) $\text{HCF}(18,30)=6$.
b) Two composite numbers can never be coprime.
c) If $a$ is divisible by $b$, then $\text{HCF}(a,b)=b$.
d) $\text{HCF}(15,1)=15$.
::key T F T F
a) True: $18=2\cdot3^2$ and $30=2\cdot3\cdot5$, so the HCF is $2\cdot3=6$. b) False: $8$ and $9$ are both composite but $\text{HCF}(8,9)=1$. c) True: $b$ is a factor of both $a$ and $b$, and no factor of $b$ is larger than $b$. d) False: $\text{HCF}(15,1)=1$.

::sa
Find $\text{HCF}(42,70)$.
::key 14
$42=2\cdot3\cdot7$ and $70=2\cdot5\cdot7$, so the HCF is $2\cdot7=14$.

::sa
How many common factors do $54$ and $90$ have?
::key 6
$\text{HCF}(54,90)=2\cdot3^2=18$, and $18$ has $6$ factors: $1$; $2$; $3$; $6$; $9$; $18$.
:::
