---
title: Divisibility and its properties. Divisibility rules
description: Divisibility, divisors and multiples, divisibility of a sum and a difference; divisibility rules for 2, 5, 3 and 9.
minutes: 55
---

:::goals
- Understand divisibility, divisors and multiples of a natural number, and write the set of divisors and the set of multiples.
- Use the divisibility properties of a sum and a difference to decide without calculating.
- Recognise whether a number is divisible by $2$, $5$, $3$, $9$ using divisibility rules.
- Solve problems about arranging, sharing equally and filling in digits of a given number.
:::

Suppose $48$ Grade $6$ students line up for the flag ceremony. The teacher says: "In $4$ rows there are exactly $12$ in each row, a perfect fit. But in $5$ rows there are $9$ in each row and $3$ students left over." Why does $4$ rows fit exactly while $5$ rows leaves some over, and is there a quick way to tell without doing the division?

## Divisibility and its properties

**Explore.** We have $48\div4=12$ and $48=4\times12$, a division with no remainder. But $48\div5=9$ remainder $3$, that is $48=5\times9+3$, a division with a remainder. The two cases differ precisely in the remainder.

:::theorem Divisible, divisor and multiple
Let $a$ and $b$ be natural numbers with $b\ne0$. If there is a natural number $q$ with $a=b\times q$, we say $a$ is **divisible by** $b$, written $a\vdots b$. Then $b$ is a **divisor** of $a$ and $a$ is a **multiple** of $b$. If $a$ is not divisible by $b$ we write $a\not\vdots b$.

The set of divisors of $a$ is written $\text{D}(a)$. The set of multiples of $b$ is written $\text{M}(b)$.
:::

For example $12\vdots4$ because $12=4\times3$, so $4$ is a divisor of $12$ and $12$ is a multiple of $4$. Every natural number is divisible by $1$. The number $0$ is divisible by every non-zero number, because $0=b\times0$, so $0$ is a multiple of every non-zero number.

:::theorem Divisibility of a sum and a difference
Let $m\ne0$.
- If $a\vdots m$ and $b\vdots m$ then $(a+b)\vdots m$ and $(a-b)\vdots m$ (when $a\ge b$).
- If $a\vdots m$ but $b\not\vdots m$ then $(a+b)\not\vdots m$ and $(a-b)\not\vdots m$ (when $a\ge b$).
:::

**Why is this true?** If $a=m\times p$ and $b=m\times q$ then by the distributive property $a+b=m\times p+m\times q=m\times(p+q)$, which is divisible by $m$; the difference works the same way. For the second part, suppose $(a+b)\vdots m$ while $a\vdots m$. Then $b=(a+b)-a$ is the difference of two numbers divisible by $m$, so $b\vdots m$, contradicting the assumption. Hence $(a+b)\not\vdots m$.

:::example Finding divisors and multiples
Write the set $\text{D}(18)$ and the three smallest non-zero multiples of $6$.

**Solution.** The ways to write $18$ as a product: $1\times18$, $2\times9$, $3\times6$. So $\text{D}(18)=\{1,2,3,6,9,18\}$. The multiples of $6$ are $0$, $6$, $12$, $18$, ... so the three smallest non-zero ones are $6$, $12$, $18$.
:::

:::example Without adding
Without calculating the values, decide whether $48+36$ and $48+20$ are divisible by $6$.

**Solution.** $48=6\times8$ and $36=6\times6$ are both divisible by $6$, so the sum $48+36$ is divisible by $6$. But $20$ is not divisible by $6$ ($20=6\times3+2$) while $48\vdots6$, so $48+20$ is not divisible by $6$. Check: $48+20=68=6\times11+2$.
:::

The next problem is about forming groups, so we go step by step: *Understand, Plan, Solve, Look back*.

:::example Forming groups
A form teacher wants to split $48$ students into groups with the same number of students, each group having between $3$ and $12$ students. In how many ways can this be done?

**Solution.**

*Understand.* The number of students per group must divide $48$ (so the split is equal with none left over) and lie between $3$ and $12$.

*Plan.* Find the set of divisors of $48$, then pick those from $3$ to $12$.

*Solve.* $48=1\times48=2\times24=3\times16=4\times12=6\times8$ so $\text{D}(48)=\{1,2,3,4,6,8,12,16,24,48\}$. The divisors from $3$ to $12$ are $3$, $4$, $6$, $8$, $12$. So there are $5$ ways: groups of $3$, $4$, $6$, $8$ or $12$ students.

*Look back.* The corresponding numbers of groups are $16$, $12$, $8$, $6$, $4$. These are also divisors of $48$, because if $48=\text{(students per group)}\times\text{(number of groups)}$ then both factors are divisors of $48$.
:::

## Divisibility rules for $2$, $5$, $3$, $9$

**Explore.** We notice $48$ ends in $8$ and is divisible by $2$. And $135$ ends in $5$ and is divisible by $5$. Is looking at the last digit enough?

:::theorem Divisibility rules for $2$ and $5$
- A number is divisible by $2$ when its last digit is $0$, $2$, $4$, $6$ or $8$ (an even number).
- A number is divisible by $5$ when its last digit is $0$ or $5$.
:::

**Why is this true?** Write $\overline{ab}=10\times a+b$. Since $10$ is divisible by $2$ and by $5$, so is $10\times a$. By the divisibility property of a sum, $\overline{ab}$ is divisible by $2$ (or $5$) exactly when the last digit $b$ is divisible by $2$ (or $5$). The same argument works for numbers with more digits.

:::theorem Divisibility rules for $3$ and $9$
- A number is divisible by $3$ when the sum of its digits is divisible by $3$.
- A number is divisible by $9$ when the sum of its digits is divisible by $9$.
- A number divisible by $9$ is divisible by $3$.
:::

**Why is this true?** We have $10=9+1$, $100=99+1$, ... so for a three-digit number:
$$\overline{abc}=100a+10b+c=(99a+9b)+(a+b+c).$$
The part $99a+9b$ is always divisible by $9$ (and by $3$). So $\overline{abc}$ is divisible by $9$ (or $3$) exactly when the digit sum $a+b+c$ is divisible by $9$ (or $3$). The same reasoning works for every natural number.

Now we can answer the opening question: $48$ ends in $8$ and its digit sum is $4+8=12$, divisible by $3$, so $48\vdots2$ and $48\vdots3$. But $5$ rows do not fit because $48$ does not end in $0$ or $5$, so $48\not\vdots5$.

:::example Applying the rules
Among $1350$, $2478$, $4625$, $7092$, which are divisible by $2$, by $5$, by $3$, by $9$?

**Solution.**
- $1350$: ends in $0$, so divisible by $2$ and $5$. Digit sum $1+3+5+0=9$, so divisible by $3$ and $9$.
- $2478$: ends in $8$, so divisible by $2$, not by $5$. Digit sum $2+4+7+8=21$ is divisible by $3$ but not by $9$.
- $4625$: ends in $5$, so divisible by $5$, not by $2$. Digit sum $4+6+2+5=17$ is not divisible by $3$ or $9$.
- $7092$: ends in $2$, so divisible by $2$, not by $5$. Digit sum $7+0+9+2=18$, so divisible by $3$ and $9$.
:::

:::example Filling in a digit
Replace $*$ by a suitable digit so that $\overline{58*}$ is divisible by both $2$ and $3$.

**Solution.** The number is divisible by $2$, so $*\in\{0,2,4,6,8\}$. The digit sum $5+8+*=13+*$ must be divisible by $3$. Try: $13+0=13$ (no), $13+2=15$ (yes), $13+4=17$ (no), $13+6=19$ (no), $13+8=21$ (yes). So $*=2$ or $*=8$, giving $582$ and $588$.
:::

:::example Forming numbers
Using the three digits $0$, $3$, $5$, each once, form the three-digit numbers that are divisible by $5$.

**Solution.** The hundreds digit cannot be $0$. A number divisible by $5$ must end in $0$ or $5$. Ending in $0$: $350$ and $530$. Ending in $5$: $305$ (the number $035$ is not a three-digit number). So there are three numbers: $305$, $350$, $530$.
:::

:::warning Mistakes to avoid
- **Thinking $0$ is not a multiple.** Wrong: $0$ is not a multiple of $7$. Why it is wrong: $0=7\times0$. Right: $0$ is a multiple of every non-zero number.
- **Using the last digit for the rule for $3$.** Wrong: $1011$ is not divisible by $3$ because it ends in $1$. Why it is wrong: the rule uses the sum of the digits. Right: $1+0+1+1=3$ is divisible by $3$, so $1011\vdots3$.
- **Reversing the property of a sum.** Wrong: $7+5=12$ is divisible by $6$, so $7$ and $5$ are both divisible by $6$. Why it is wrong: the property only works one way, "if both terms are divisible then the sum is". Right: $7\not\vdots6$ and $5\not\vdots6$.
- **Thinking divisible by $3$ means divisible by $9$.** Wrong: $21\vdots3$ so $21\vdots9$. Why it is wrong: $2+1=3$ is not divisible by $9$. Right: $21\not\vdots9$ (only the reverse is true: divisible by $9$ implies divisible by $3$).
:::

## Key terms

:::terms
- divisible | chia hết
- not divisible | không chia hết
- divisor | ước
- multiple | bội
- set of divisors | tập hợp các ước
- set of multiples | tập hợp các bội
- divisibility rule | dấu hiệu chia hết
- last digit | chữ số tận cùng
- sum of the digits | tổng các chữ số
- even number | số chẵn
- odd number | số lẻ
- divisibility property of a sum | tính chất chia hết của một tổng
:::

## Summary

- $a\vdots b$ ($b\ne0$) when $a=b\times q$; then $b$ is a divisor of $a$ and $a$ is a multiple of $b$. The number $0$ is a multiple of every non-zero number; $1$ is a divisor of every number.
- If $a\vdots m$ and $b\vdots m$ then $a+b$ and $a-b$ (when $a\ge b$) are divisible by $m$. If only one term is divisible by $m$, the sum (difference) is not divisible by $m$.
- Divisible by $2$: last digit $0$, $2$, $4$, $6$, $8$. Divisible by $5$: last digit $0$ or $5$.
- Divisible by $3$ (or $9$): the sum of the digits is divisible by $3$ (or $9$).

## Practice

Try each one yourself first, then open the solution.

:::exercise
**Question 1.** Write the set $\text{D}(20)$ and the set of multiples of $5$ that are less than $30$.

::hint
**What you need:** a divisor of $20$ is a number that divides $20$ exactly; a multiple of $5$ is $5\times q$.

**Steps:**
1. Find the pairs of factors with product $20$.
2. List $0$, $5$, $10$, ... until you reach $30$.

::solution
$\text{D}(20)=\{1,2,4,5,10,20\}$. The multiples of $5$ less than $30$ are $\{0,5,10,15,20,25\}$.

**Answer.** $\text{D}(20)=\{1,2,4,5,10,20\}$; $\{0,5,10,15,20,25\}$.
:::

:::exercise
**Question 2.** Without calculating the values, decide whether these sums are divisible by $6$: a) $18+30+42$; b) $24+40$.

::hint
**What you need:** if every term is divisible by $m$ then the sum is; if exactly one term is not, the sum is not.

**Steps:**
1. Check whether each term is divisible by $6$.

::solution
a) $18$, $30$, $42$ are all divisible by $6$, so the sum is divisible by $6$. b) $24\vdots6$ but $40\not\vdots6$, so $24+40$ is not divisible by $6$.

**Answer.** a) Yes; b) No.
:::

:::exercise
**Question 3.** $36$ students line up in equal rows, with at least $2$ students in each row and at least $2$ rows. In how many ways can they line up?

::hint
**What you need:** the number of students per row is a divisor of $36$; with at least $2$ rows, each row has at most $18$ students.

**Steps:**
1. What is given? What is asked?
2. Find $\text{D}(36)$.
3. Keep the divisors from $2$ to $18$.

::solution
$\text{D}(36)=\{1,2,3,4,6,9,12,18,36\}$. The number per row is in $\{2,3,4,6,9,12,18\}$, so there are $7$ ways.

**Answer.** $7$ ways.
:::

:::exercise
**Question 4.** Among $2540$; $3175$; $4892$; $6001$, which are divisible by $2$? which are divisible by $5$?

::hint
**What you need:** look at the last digit.

**Steps:**
1. Find the last digit of each number.

::solution
Divisible by $2$: $2540$ and $4892$. Divisible by $5$: $2540$ and $3175$. The number $6001$ is divisible by neither $2$ nor $5$.

**Answer.** Divisible by $2$: $2540$, $4892$; divisible by $5$: $2540$, $3175$.
:::

:::exercise
**Question 5.** Among $1827$; $5142$; $7305$; $2468$, which are divisible by $3$? which are divisible by $9$?

::hint
**What you need:** work out the sum of the digits.

**Steps:**
1. Find the digit sum of each number.
2. Check whether it is divisible by $3$ and by $9$.

::solution
$1827$: $1+8+2+7=18$, divisible by $3$ and $9$. $5142$: sum $12$, divisible by $3$, not by $9$. $7305$: sum $15$, divisible by $3$, not by $9$. $2468$: sum $20$, not divisible by $3$ or $9$.

**Answer.** Divisible by $3$: $1827$, $5142$, $7305$; divisible by $9$: $1827$.
:::

:::exercise
**Question 6.** Replace $*$ by a digit so that: a) $\overline{47*}$ is divisible by $9$; b) $\overline{47*}$ is divisible by both $2$ and $5$.

::hint
**What you need:** divisible by $9$ means the digit sum is divisible by $9$; divisible by both $2$ and $5$ means the last digit is $0$.

**Steps:**
1. Part a: $4+7=11$, so we need $11+*$ divisible by $9$.
2. Part b: the last digit must be even and also $0$ or $5$.

::solution
a) $11+*$ divisible by $9$ gives $11+*=18$, so $*=7$, and $477=9\times53$. b) The last digit must be $0$, so $*=0$, giving $470$.

**Answer.** a) $*=7$; b) $*=0$.
:::

:::exercise
**Question 7.** Suppose a teacher has $135$ exercise books and wants to share them equally among $9$ groups, and on another occasion equally among $5$ students, with none left over. Check using the divisibility rules, then say how many books each group (each student) gets.

::hint
**What you need:** the divisibility rules for $9$ and $5$.

**Steps:**
1. What is given? What is asked?
2. Find the digit sum of $135$ and look at its last digit.
3. Do the division.

::solution
$1+3+5=9$ so $135\vdots9$, and $135\div9=15$ (books per group). The last digit is $5$ so $135\vdots5$, and $135\div5=27$ (books per student).

**Answer.** $15$ books per group; $27$ books per student.
:::

:::exercise
**Question 8.** Write the set of two-digit natural numbers whose digits add up to $9$. Are these numbers divisible by $9$? Why?

::hint
**What you need:** the divisibility rule for $9$; a two-digit number $\overline{ab}$ has $a\ne0$.

**Steps:**
1. Let the tens digit be $a=1$, $2$, ..., $9$ and find $b=9-a$.
2. Look at the digit sum.

::solution
The numbers are $18$, $27$, $36$, $45$, $54$, $63$, $72$, $81$, $90$. The set has $9$ elements. The digit sum of each is $9$, so all of them are divisible by $9$.

**Answer.** $\{18,27,36,45,54,63,72,81,90\}$; yes, because the digit sum is $9$.
:::

:::exercise
**Question 9.** Using the three digits $0$, $4$, $5$, each exactly once, form three-digit numbers. Which of them are divisible by $5$? Are those numbers divisible by $9$?

::hint
**What you need:** the hundreds digit is not $0$; a number divisible by $5$ ends in $0$ or $5$.

**Steps:**
1. List the three-digit numbers.
2. Choose those ending in $0$ or $5$.
3. Look at the digit sum.

::solution
The numbers formed are $405$, $450$, $504$, $540$. Divisible by $5$: $405$, $450$, $540$ ($504$ ends in $4$, so it is not). Every number has digit sum $4+0+5=9$, so all of them are divisible by $9$.

**Answer.** $405$, $450$, $540$; yes, all are divisible by $9$.
:::

:::exercise Challenge
**Question 10.** Find the three-digit natural number that is a) the smallest; b) the largest, among those divisible by all of $2$, $3$ and $5$.

::hint
**What you need:** divisible by both $2$ and $5$ means the last digit is $0$; divisible by $3$ means the digit sum is divisible by $3$.

**Steps:**
1. The number has the form $\overline{ab0}$.
2. Part a: try from $100$ upwards. Part b: try from $990$ downwards.

::solution
The number has the form $\overline{ab0}$ with $a+b$ divisible by $3$. a) Try $100$ (sum $1$), $110$ (sum $2$), $120$ (sum $3$, works). The smallest is $120$. b) $990$ has digit sum $18$, divisible by $3$, and it is the largest three-digit number ending in $0$, so the largest is $990$.

**Answer.** a) $120$; b) $990$.
:::

## Mini test

:::quiz
::mc
The set of divisors of $12$ is
A. $\{0,12,24,36\}$.
B. $\{1,2,3,4,6\}$.
C. $\{1,2,3,4,6,12\}$.
D. $\{2,3,4,6,12\}$.
::key C
$12=1\times12=2\times6=3\times4$, so there are $6$ divisors. Option B leaves out $12$, A lists multiples of $12$, D leaves out $1$.

::mc
Which of these numbers is divisible by both $2$ and $5$?
A. $4125$.
B. $3128$.
C. $5207$.
D. $3460$.
::key D
$3460$ ends in $0$, so it is divisible by both $2$ and $5$. Option A is divisible by $5$ only, B by $2$ only, C by neither.
 
::mc
The number $1011$ is divisible by which of these numbers?
A. $3$.
B. $2$.
C. $5$.
D. $9$.
::key A
The digit sum is $1+0+1+1=3$, divisible by $3$ but not by $9$. It ends in $1$, so it is not divisible by $2$ or $5$.

::mc
Which digit replaces $*$ to make $\overline{34*}$ divisible by $9$?
A. $0$.
B. $2$.
C. $5$.
D. $7$.
::key B
$3+4+*=7+*$ must be divisible by $9$, so $*=2$ (the number $342=9\times38$). Options A, C, D do not make the sum divisible by $9$.

::tf
About divisibility.
a) $0$ is a multiple of $7$.
b) $1011\vdots3$.
c) $21\vdots9$.
d) Since $7+5=12$ is divisible by $6$, $7$ is divisible by $6$.
::key T T F F
a) True: $0=7\times0$. b) True: the digit sum is $3$. c) False: the digit sum $3$ is not divisible by $9$. d) False: $7=6\times1+1$.

::sa
How many divisors does $20$ have?
::key 6
$\text{D}(20)=\{1,2,4,5,10,20\}$.

::sa
Which digit replaces $*$ so that $\overline{47*}$ is divisible by $9$?
::key 7
$4+7+*=11+*$ is divisible by $9$, so $*=7$.
:::

