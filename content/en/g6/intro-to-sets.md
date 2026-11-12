---
title: Introduction to sets
description: An introduction to sets, elements and the symbols for belongs to and does not belong to; writing a set by listing or by a defining property.
minutes: 35
---

:::goals
- Understand that a set is a well-defined group of objects, and tell whether an element belongs to a set.
- Use the symbols $\in$, $\notin$ and curly brackets correctly.
- Write a set by listing its elements or by a defining property.
- Count the elements of a set correctly, remembering that each element is written only once.
:::

Group $1$ of Class $6$A has $6$ students: An, Binh, Chi, Dung, Ha and Khoa. On Monday the teacher announces: "This week's cleaning team is An, Chi and Khoa." The whole class knows exactly who she means. If she had only said "a few hard-working students", everyone would understand something different. How can we describe a group of objects so that everyone who hears it understands the same thing?

## Sets and elements

Let us try it with numbers. Your pencil case holds $3$ pens: blue, red and yellow. "The pens in the pencil case" is a clear group, because for any pen we know whether it is in the case or not. Likewise, "the natural numbers less than $5$" are $0$, $1$, $2$, $3$, $4$: the number $3$ is in this group, but the number $7$ is not.

:::theorem Set, element
A group of objects that is clearly defined, so that for each object we can always tell whether it is in the group or not, is called a **set**. Each object in the group is called an **element** of the set.

We usually name sets with capital letters $A$, $B$, $C$, ... Notation:
- $a\in A$ is read "$a$ belongs to $A$" (or $a$ is an element of $A$);
- $a\notin A$ is read "$a$ does not belong to $A$".
:::

For example, the group "the natural numbers less than $5$" forms a set $A$. Then $3\in A$ and $7\notin A$. In Grade $6$, the natural numbers include $0$: $0$, $1$, $2$, $3$, ...

## Two ways to write a set

**Way 1: list the elements.** We write the elements inside curly brackets $\{\ \}$, separated by commas:
$$A=\{0,1,2,3,4\}.$$
Each element is written **once**, and the order does not matter: $\{0,1,2,3,4\}$ and $\{4,3,2,1,0\}$ are the same set.

**Way 2: state a defining property.** We give a property that every element has and that only the elements of the set have:
$$A=\{x\mid x\text{ is a natural number less than }5\}.$$
This is read: "$A$ is the set of elements $x$ such that $x$ is a natural number less than $5$".

The number of elements of a set is the number of different elements it has. The set $A$ above has $5$ elements.

**Why is each element written only once?** A set only tells us "what is in the group", not "how many times". Consider the digits of the number $2023$: the digit $2$ appears twice but it is only one element. So the set of digits of $2023$ is $\{0,2,3\}$.

## Examples

:::example Listing from a property
Write the set $A$ of natural numbers less than $6$ by listing. Fill in $\in$ or $\notin$: $5\ ?\ A$ and $6\ ?\ A$.

**Solution.** The natural numbers less than $6$ are $0$, $1$, $2$, $3$, $4$, $5$, so $A=\{0,1,2,3,4,5\}$. The number $5$ is in $A$, so $5\in A$. The number $6$ is not less than $6$, so $6\notin A$.
:::

:::example Both ends
Write the set $B$ of even natural numbers greater than $10$ and less than $20$. How many elements does $B$ have?

**Solution.** The even numbers between $10$ and $20$ (not counting $10$ and $20$) are $12$, $14$, $16$, $18$. So $B=\{12,14,16,18\}$ and $B$ has $4$ elements.
:::

:::example Stating a defining property
Let $E=\{2,4,6,8,10\}$. Write $E$ by stating a defining property.

**Solution.** Every element of $E$ is an even natural number, not equal to $0$ and not more than $10$. So
$$E=\{x\mid x\text{ is an even natural number, }x\ne0\text{ and }x\le10\}.$$
:::

The next problem comes from the calendar, so we go step by step: *Understand, Plan, Solve, Look back*.

:::example Months with $30$ days
Let $M$ be the set of calendar months with exactly $30$ days (each month written as its number). Write $M$ by listing and state the number of elements.

**Solution.**

*Understand.* A year has $12$ months. We must pick the months with exactly $30$ days and write their numbers.

*Plan.* Go through the months from $1$ to $12$ and keep those that fit.

*Solve.* The months with $31$ days are $1$, $3$, $5$, $7$, $8$, $10$, $12$. Month $2$ has $28$ or $29$ days. The remaining months, with exactly $30$ days, are months $4$, $6$, $9$, $11$. So $M=\{4,6,9,11\}$ and $M$ has $4$ elements.

*Look back.* Does month $2$ belong to $M$? No, because month $2$ does not have exactly $30$ days. Check: $7$ months with $31$ days, $4$ months with $30$ days and month $2$ make $7+4+1=12$ months. That is the whole year.
:::

:::example Repeated digits
Write the set $D$ of digits of the number $1221$ and state how many elements $D$ has.

**Solution.** The number $1221$ has four digits: $1$, $2$, $2$, $1$. Each different digit is written once, so $D=\{1,2\}$. The set $D$ has $2$ elements, not $4$.
:::

:::warning Mistakes to avoid
- **Writing an element more than once.** Wrong: $A=\{1,1,2\}$ has $3$ elements. Why it is wrong: a repeated element is counted once. Right: $A=\{1,2\}$ has $2$ elements.
- **Forgetting the number $0$.** Wrong: the natural numbers less than $4$ are $\{1,2,3\}$. Why it is wrong: $0$ is a natural number. Right: $\{0,1,2,3\}$.
- **Including the end number.** Wrong: the natural numbers less than $5$ are $\{0,1,2,3,4,5\}$. Why it is wrong: "less than $5$" does not include $5$. Right: $\{0,1,2,3,4\}$.
:::

## Key terms

:::terms
- set | tập hợp
- element | phần tử
- belongs to | thuộc
- does not belong to | không thuộc
- list | liệt kê
- defining property | tính chất đặc trưng
- number of elements | số phần tử
- natural number | số tự nhiên
- digit | chữ số
:::

## Summary

- A set is a clearly defined group of objects; each object is an element.
- $a\in A$: $a$ belongs to $A$; $a\notin A$: $a$ does not belong to $A$.
- Write a set by listing $\{a,b,c\}$ or by a defining property $\{x\mid\ldots\}$.
- Each element is written once; the order of the elements does not matter.
- The natural numbers include $0$.

## Practice

Try each one yourself first, then open the solution.

:::exercise
**Question 1.** Let $A=\{2,4,6,8\}$. Fill in $\in$ or $\notin$: a) $4\ ?\ A$; b) $5\ ?\ A$; c) $8\ ?\ A$; d) $0\ ?\ A$.

::hint
**What you need:** $a\in A$ when $a$ is one of the elements listed in $A$.

**Steps:**
1. Check whether each number appears inside the curly brackets.

::solution
a) $4\in A$. b) $5\notin A$. c) $8\in A$. d) $0\notin A$.

**Answer.** $\in$; $\notin$; $\in$; $\notin$.
:::

:::exercise
**Question 2.** Write the set $B$ of natural numbers greater than $7$ and less than $13$ by listing.

::hint
**What you need:** "greater than $7$" does not include $7$; "less than $13$" does not include $13$.

**Steps:**
1. Write the first natural number after $7$.
2. Keep going up to the number just before $13$.

::solution
The numbers are $8$, $9$, $10$, $11$, $12$. So $B=\{8,9,10,11,12\}$.

**Answer.** $B=\{8,9,10,11,12\}$.
:::

:::exercise
**Question 3.** Let $C=\{10,20,30,40,50\}$. Write $C$ by stating a defining property.

::hint
**What you need:** find what all the elements have in common.

**Steps:**
1. What kind of numbers are these?
2. What are the smallest and largest numbers?

::solution
Every element is a whole number of tens (it ends in $0$), is not $0$, and is not more than $50$. So
$$C=\{x\mid x\text{ is a whole number of tens, }x\ne0\text{ and }x\le50\}.$$
**Answer.** As above.
:::

:::exercise
**Question 4.** A fruit basket has $5$ oranges, $3$ apples and $4$ mangoes. Write the set $F$ of kinds of fruit in the basket and state how many elements $F$ has.

::hint
**What you need:** the elements are *kinds of fruit*, not individual fruits.

**Steps:**
1. What is given? What is asked?
2. List the different kinds of fruit.

::solution
$F=\{\text{orange},\text{apple},\text{mango}\}$ and $F$ has $3$ elements. The number $5+3+4=12$ counts the fruits, not the elements.

**Answer.** $3$ elements.
:::

:::exercise
**Question 5.** Write the set $G$ of digits of the number $4554$. How many elements does $G$ have?

::hint
**What you need:** a repeated element is written only once.

**Steps:**
1. Write each digit of $4554$.
2. Remove the repeats.

::solution
The digits are $4$, $5$, $5$, $4$. So $G=\{4,5\}$ and $G$ has $2$ elements.

**Answer.** $G=\{4,5\}$, $2$ elements.
:::

:::exercise
**Question 6.** Write the set $N$ of calendar months with exactly $31$ days (each month as its number) and state how many elements $N$ has.

::hint
**What you need:** month $2$ has $28$ or $29$ days; months $4$, $6$, $9$, $11$ have $30$ days.

**Steps:**
1. Go through months $1$ to $12$.
2. Remove months $2$, $4$, $6$, $9$, $11$.

::solution
$N=\{1,3,5,7,8,10,12\}$ and $N$ has $7$ elements.

**Check.** $7+4+1=12$ months (including the $4$ months with $30$ days and month $2$).

**Answer.** $7$ elements.
:::

:::exercise
**Question 7.** Lan writes: "The set $P$ of natural numbers less than $4$ is $P=\{1,2,3,4\}$." Where is Lan wrong? Rewrite it correctly.

::hint
**What you need:** $0$ is a natural number; "less than $4$" does not include $4$.

**Steps:**
1. What is the smallest number in $P$?
2. Is the largest number in $P$ less than $4$?

::solution
Lan forgot $0$ and wrongly included $4$ (which is not less than $4$). Correct: $P=\{0,1,2,3\}$.

**Answer.** $P=\{0,1,2,3\}$.
:::

:::exercise
**Question 8.** Write the set $S$ of natural numbers with two digits whose digits add up to $5$. How many elements does $S$ have?

::hint
**What you need:** a two-digit number has a tens digit that is not $0$.

**Steps:**
1. Let the tens digit be $1$, then $2$, ... and find the ones digit.
2. Stop when the tens digit is $5$.

::solution
Tens digit $1$ gives ones digit $4$: the number $14$. Similarly we get $23$, $32$, $41$, $50$. So $S=\{14,23,32,41,50\}$ and $S$ has $5$ elements.

**Answer.** $5$ elements.
:::

:::exercise
**Question 9.** The chess club sign-up list reads, in order: An, Binh, An, Chi, Dung, Binh, Ha, An. Write the set $H$ of students who signed up and state how many students signed up.

::hint
**What you need:** a student who signs up several times is still only one element.

**Steps:**
1. What is given? What is asked?
2. Cross out the repeated names.

::solution
$H=\{\text{An},\text{Binh},\text{Chi},\text{Dung},\text{Ha}\}$, so $5$ students. The list has $8$ lines but only $5$ different students.

**Answer.** $5$ students.
:::

:::exercise Challenge
**Question 10.** Write the set $T$ of three-digit natural numbers whose hundreds digit is $2$ and whose three digits add up to $4$. How many elements does $T$ have? Does $220$ belong to $T$?

::hint
**What you need:** the other two digits add up to $4-2=2$.

**Steps:**
1. List the pairs (tens; ones) with sum $2$.
2. Attach the hundreds digit $2$.

::solution
The pairs (tens; ones) with sum $2$ are $(0;2)$, $(1;1)$, $(2;0)$. This gives the numbers $202$, $211$, $220$. So $T=\{202,211,220\}$ and $T$ has $3$ elements. Since $2+2+0=4$, we have $220\in T$.

**Answer.** $T=\{202,211,220\}$, $3$ elements; $220\in T$.
:::

## Mini test

:::quiz
::mc
Let $A=\{2,4,6,8\}$. Which statement is true?
A. $2\notin A$.
B. $5\in A$.
C. $6\in A$.
D. $8\notin A$.
::key C
$6$ is an element of $A$. The others are false: $2$ and $8$ are in $A$, but $5$ is not.

::mc
The set of natural numbers less than $4$ is
A. $\{1,2,3,4\}$.
B. $\{1,2,3\}$.
C. $\{0,1,2,3,4\}$.
D. $\{0,1,2,3\}$.
::key D
$0$ is a natural number and $4$ is not less than $4$. Option B forgets $0$, C includes $4$, A forgets $0$ and includes $4$.

::mc
How many elements does the set of digits of $4554$ have?
A. $2$.
B. $1$.
C. $3$.
D. $4$.
::key A
The different digits are $4$ and $5$, so there are $2$ elements. Option D counts the repeated digits.

::mc
How many elements does the set of calendar months with exactly $30$ days have?
A. $5$.
B. $4$.
C. $7$.
D. $12$.
::key B
They are months $4$, $6$, $9$, $11$. Option A adds month $2$, C is the number of months with $31$ days, D is the whole year.

::tf
Let $B=\{12,14,16,18\}$ be the set of even natural numbers greater than $10$ and less than $20$.
a) $10\in B$.
b) $16\in B$.
c) $B$ has $4$ elements.
d) $B$ has $5$ elements.
::key F T T F
a) False: $10$ is not greater than $10$. b) True. c) True: $12$, $14$, $16$, $18$. d) False: there are only $4$ elements.

::sa
How many elements does the set of odd natural numbers less than $12$ have?
::key 6
They are $1$, $3$, $5$, $7$, $9$, $11$.

::sa
How many elements does the set of calendar months with exactly $31$ days have?
::key 7
They are months $1$, $3$, $5$, $7$, $8$, $10$, $12$.
:::

