---
title: Adding, subtracting, multiplying and dividing natural numbers
description: Commutative, associative and distributive properties; quick calculation; subtraction in ℕ; exact division and division with remainder a = b × q + r.
minutes: 50
---

:::goals
- Recognise and use the commutative and associative properties of addition and multiplication.
- Calculate quickly by grouping terms, grouping factors and using the distributive property.
- Understand when subtraction can be carried out in the set $\mathbb{N}$ and use the names of the operations correctly.
- Tell exact division from division with a remainder, and write $a=b\times q+r$ with $0\le r<b$.
:::

Suppose a stationery shop sold $237$ exercise books in the first week, $163$ in the second week and $250$ in the third week. The owner did not add from left to right. She added $237+163=400$ first, then added $250$ to get $650$. Why is she allowed to add in that order, and what other ways are there to calculate even faster?

## Adding and subtracting natural numbers

**Explore.** Let us change the order: $250+163+237$. We get $250+163=413$, then $413+237=650$, still $650$. Adding $237+163$ first is only quicker because it gives the round number $400$ straight away.

:::theorem Properties of addition
For all natural numbers $a$, $b$, $c$:
- Commutative: $a+b=b+a$.
- Associative: $(a+b)+c=a+(b+c)$.
- Adding $0$: $a+0=0+a=a$.

Subtraction is the reverse of addition: $a-b=c$ when $a=b+c$. In $\mathbb{N}$, the subtraction $a-b$ can only be carried out when $a\ge b$. Also $a-0=a$ and $a-a=0$.
:::

**Why is this true?** Adding means putting two groups of objects together. Putting group $b$ with group $a$, or group $a$ with group $b$, gives the same total number of objects, so $a+b=b+a$. When we combine three groups, it does not matter which two we combine first, so $(a+b)+c=a+(b+c)$. As for subtraction: $a-b=c$ means $c$ is the number we must add to $b$ to get $a$. That number is a natural number only when $a$ is not smaller than $b$.

**Two quick-calculation tips.**
- Group terms so that they add up to a round ten or hundred.
- For subtraction, if we add the same number to both the minuend and the subtrahend, the difference does not change. This is because the distance between two numbers on the number line does not change when we shift both to the right by the same amount.

:::example Grouping terms
Calculate quickly $125+38+75+62$.

**Solution.** Using the commutative and associative properties:
$$125+38+75+62=(125+75)+(38+62)=200+100=300.$$
:::

:::example Adding the same number to both
Calculate quickly $1976-999$.

**Solution.** Adding $1$ to both the minuend and the subtrahend leaves the difference unchanged:
$$1976-999=(1976+1)-(999+1)=1977-1000=977.$$
:::

The next problem is a real-life problem with several steps, so we go step by step: *Understand, Plan, Solve, Look back*.

:::example Passengers on a bus
A bus sets off with $45$ passengers. At the first stop $12$ people get off and $20$ get on. At the second stop $18$ get off and $9$ get on. How many passengers are on the bus after the second stop?

**Solution.**

*Understand.* At the start there are $45$ people. At each stop, the people getting off decrease the number and the people getting on increase it. We are asked for the number after the second stop.

*Plan.* Work stop by stop: take the number on the bus, subtract those getting off, add those getting on.

*Solve.* After the first stop: $45-12+20=53$ (people). After the second stop: $53-18+9=44$ (people). So $44$ passengers remain on the bus.

*Look back.* Try another way: the total number getting on is $20+9=29$ and the total getting off is $12+18=30$. Then $45+29-30=44$, the same as before. Also, the number getting off at each stop is never more than the number on the bus, so every subtraction can be carried out in $\mathbb{N}$.
:::

## Multiplying and dividing natural numbers

**Explore.** A cinema ticket costs $45$ thousand dong. Buying $6$ tickets costs $6\times45=270$ thousand dong. We can also split $45=40+5$: $6$ tickets at $40$ thousand cost $240$ thousand, $6$ tickets at $5$ thousand cost $30$ thousand, and altogether $240+30=270$. Both ways give the same result.

:::theorem Properties of multiplication
For all natural numbers $a$, $b$, $c$:
- Commutative: $a\times b=b\times a$.
- Associative: $(a\times b)\times c=a\times(b\times c)$.
- Multiplying by $1$ and by $0$: $a\times1=a$ and $a\times0=0$.
- Distributive over addition: $a\times(b+c)=a\times b+a\times c$.
- Distributive over subtraction: $a\times(b-c)=a\times b-a\times c$ (when $b\ge c$).
:::

**Why is the distributive property true?** $a\times(b+c)$ is the total number of objects when there are $a$ groups, each holding $b+c$ objects. We can count $a$ groups of $b$ objects and $a$ groups of $c$ objects separately and add, which gives $a\times b+a\times c$.

:::theorem Exact division and division with remainder
Let $a$ and $b$ be natural numbers with $b\ne0$.
- If there is a natural number $q$ with $a=b\times q$, we say $a$ is divisible by $b$ and write $a\div b=q$.
- Otherwise we have division with a remainder: there are unique $q$ and $r$ such that
$$a=b\times q+r,\qquad 0<r<b.$$
Then $q$ is the quotient and $r$ is the remainder. If $r=0$ it is an exact division. Division by $0$ does not exist.
:::

**Why is the remainder smaller than the divisor?** Dividing $a$ by $b$ means splitting $a$ into groups of $b$, making as many groups as possible. If the leftover $r$ were still $b$ or more, we could make one more group, so an incomplete leftover must satisfy $r<b$.

:::example Using the associative property
Calculate quickly $25\times37\times4$.

**Solution.** Using the commutative and associative properties: $25\times37\times4=(25\times4)\times37=100\times37=3700$.
:::

:::example Using the distributive property
Calculate quickly $47\times99$.

**Solution.** Write $99=100-1$ and use the distributive property over subtraction:
$$47\times99=47\times(100-1)=47\times100-47\times1=4700-47=4653.$$
:::

:::example Division with remainder
$100$ sweets are shared equally among $7$ friends. What is the most each friend can get, and how many sweets are left over?

**Solution.** We have $7\times14=98$ and $7\times15=105>100$. So each friend gets at most $14$ sweets, and $100-98=2$ sweets are left over. We write $100=7\times14+2$, with $0<2<7$.
:::

:::example Finding a total
Suppose a shop arranges $38$ boxes of pens, with $25$ pens in each box. How many pens are there altogether?

**Solution.** The number of pens is $38\times25$. Write $38=40-2$ and use the distributive property: $38\times25=(40-2)\times25=40\times25-2\times25=1000-50=950$. So there are $950$ pens.
:::

:::warning Mistakes to avoid
- **Subtracting a larger number from a smaller one.** Wrong: $5-8=3$ because "larger minus smaller". Why it is wrong: in $5-8$ we have $5<8$, so it cannot be carried out in $\mathbb{N}$. Right: only write $8-5=3$.
- **Forgetting to multiply everything when distributing.** Wrong: $6\times(40+5)=6\times40+5$. Why it is wrong: $6$ must multiply both numbers in the brackets. Right: $6\times40+6\times5=270$.
- **A remainder that is not smaller than the divisor.** Wrong: $100=7\times13+9$. Why it is wrong: the remainder $9\ge7$, so another group of $7$ can still be made. Right: $100=7\times14+2$.
- **Dividing by $0$.** Wrong: $5\div0=0$. Why it is wrong: no number multiplied by $0$ gives $5$. Right: division by $0$ has no meaning; but $0\div5=0$.
:::

## Key terms

:::terms
- sum | tổng
- difference | hiệu
- minuend | số bị trừ
- product | tích
- factor | thừa số
- quotient | thương
- dividend | số bị chia
- divisor | số chia
- remainder | số dư
- commutative property | tính chất giao hoán
- associative property | tính chất kết hợp
- distributive property | tính chất phân phối
:::

## Summary

- Addition and multiplication are commutative and associative; we can reorder and group numbers to calculate quickly.
- $a-b$ can be carried out in $\mathbb{N}$ only when $a\ge b$; adding the same number to the minuend and subtrahend leaves the difference unchanged.
- Distributive property: $a\times(b+c)=a\times b+a\times c$ and $a\times(b-c)=a\times b-a\times c$.
- Division: $a\div b$ with $b\ne0$; exact when $a=b\times q$; with remainder when $a=b\times q+r$ and $0<r<b$.

## Practice

Try each one yourself first, then open the solution.

:::exercise
**Question 1.** Calculate quickly $68+27+32+73$.

::hint
**What you need:** group terms so that they add up to a round ten or hundred.

**Steps:**
1. Find two numbers whose sum is a round hundred.
2. Add the groups.

::solution
$68+27+32+73=(68+32)+(27+73)=100+100=200$.

**Answer.** $200$.
:::

:::exercise
**Question 2.** Calculate quickly $2025-998$.

::hint
**What you need:** adding the same number to the minuend and the subtrahend leaves the difference unchanged.

**Steps:**
1. What must we add to $998$ to get a round number?
2. Add it to both numbers.

::solution
$2025-998=(2025+2)-(998+2)=2027-1000=1027$.

**Answer.** $1027$.
:::

:::exercise
**Question 3.** Suppose a library has $1250$ books in stock. This week it lends out $380$ books and receives $215$ back. How many books are in stock at the end of the week?

::hint
**What you need:** lending decreases the stock, returns increase it.

**Steps:**
1. What is given? What is asked?
2. Subtract the books lent.
3. Add the books returned.

::solution
After lending, there are $1250-380=870$ (books). After the returns there are $870+215=1085$ (books).

**Answer.** $1085$ books.
:::

:::exercise
**Question 4.** Calculate quickly $4\times18\times25$.

::hint
**What you need:** group factors to make a round number.

**Steps:**
1. Which two numbers have product $100$?

::solution
$4\times18\times25=(4\times25)\times18=100\times18=1800$.

**Answer.** $1800$.
:::

:::exercise
**Question 5.** Calculate quickly $53\times101$.

::hint
**What you need:** $a\times(b+c)=a\times b+a\times c$.

**Steps:**
1. Write $101=100+1$.

::solution
$53\times101=53\times(100+1)=5300+53=5353$.

**Answer.** $5353$.
:::

:::exercise
**Question 6.** Suppose a shirt costs $125$ thousand dong. How much must be paid for $8$ such shirts?

::hint
**What you need:** $8\times125=1000$.

**Steps:**
1. What is given? What is asked?
2. Multiply the number of shirts by the price of one.

::solution
The cost is $8\times125=1000$ (thousand dong), that is $1$ million dong.

**Answer.** $1000$ thousand dong, that is $1$ million dong.
:::

:::exercise
**Question 7.** Carry out the division $250\div12$ and write the result in the form $a=b\times q+r$.

::hint
**What you need:** the remainder must be smaller than the divisor.

**Steps:**
1. Find the largest $q$ with $12\times q\le250$.
2. Work out the remainder.

::solution
$12\times20=240$ and $12\times21=252>250$. So the quotient is $20$ and the remainder is $250-240=10$ (less than $12$). We write $250=12\times20+10$.

**Answer.** $250=12\times20+10$.
:::

:::exercise
**Question 8.** Suppose $200$ students go on a trip and each coach carries at most $45$ people. What is the least number of coaches needed?

::hint
**What you need:** division with remainder; the leftover students still need a coach.

**Steps:**
1. What is given? What is asked?
2. Divide $200$ by $45$.
3. Deal with the remainder.

::solution
$200=45\times4+20$. Four coaches carry $180$ students, leaving $20$ students who need one more coach. So we need $4+1=5$ coaches.

**Answer.** $5$ coaches.
:::

:::exercise
**Question 9.** Let $\overline{ab}$ be a two-digit number and $\overline{ba}$ the number with the digits reversed (both digits $a$, $b$ are not $0$), with $a+b=7$. Find $\overline{ab}+\overline{ba}$.

::hint
**What you need:** $\overline{ab}=a\times10+b$ and the distributive property.

**Steps:**
1. Write $\overline{ab}$ and $\overline{ba}$ in terms of $a$, $b$.
2. Add and group.

::solution
$\overline{ab}+\overline{ba}=(a\times10+b)+(b\times10+a)=a\times11+b\times11=11\times(a+b)=11\times7=77$.

**Check.** With $a=2$, $b=5$: $25+52=77$.

**Answer.** $77$.
:::

:::exercise Challenge
**Question 10.** A natural number divided by $8$ gives quotient $11$ and remainder $r$. a) What is the largest possible remainder $r$, and what is the number then? b) What is the smallest possible number?

::hint
**What you need:** $a=8\times11+r$ with $0\le r<8$.

**Steps:**
1. Find the possible values of $r$.
2. Work out $a$ for the largest and smallest $r$.

::solution
Since the remainder is less than $8$, $r$ can only be $0$, $1$, ..., $7$. a) The largest $r$ is $7$, and then the number is $8\times11+7=95$. b) The smallest number corresponds to $r=0$: $8\times11+0=88$.

**Answer.** a) $r=7$ and the number is $95$; b) $88$.
:::

## Mini test

:::quiz
::mc
The value of $125+38+75+62$ is
A. $300$.
B. $238$.
C. $200$.
D. $400$.
::key A
$(125+75)+(38+62)=200+100=300$. Option C forgets the pair $38+62$, B only adds $125+38+75$, D wrongly adds the two groups as $200+200$.

::mc
The value of $1976-999$ is
A. $1977$.
B. $977$.
C. $987$.
D. $877$.
::key B
$1976-999=1977-1000=977$. Option A forgets to subtract $1000$; C and D are subtraction slips.

::mc
The value of $47\times99$ is
A. $4700$.
B. $4606$.
C. $4653$.
D. $4747$.
::key C
$47\times99=47\times(100-1)=4700-47=4653$. Option A skips the subtraction, B is $47\times98$, D is $47\times101$.

::mc
Which is the correct way to write $100$ divided by $7$?
A. $100=7\times13+9$.
B. $100=7\times12+16$.
C. $100=7\times15-5$.
D. $100=7\times14+2$.
::key D
The remainder must be non-negative and less than the divisor: $2<7$. Options A and B have a remainder bigger than $7$; C has a negative remainder.

::tf
About division of natural numbers.
a) $0\div5=0$.
b) $5\div0=0$.
c) When dividing by $6$, the remainder can equal $6$.
d) $6\times(10+4)=6\times10+6\times4$.
::key T F F T
a) True: $5\times0=0$. b) False: division by $0$ does not exist. c) False: the remainder is less than $6$. d) True: the distributive property.

::sa
Find the remainder when $250$ is divided by $12$.
::key 10
$250=12\times20+10$.

::sa
$200$ students board coaches with $45$ seats each. What is the least number of coaches needed?
::key 5
$200=45\times4+20$, and the $20$ left over need one more coach: $4+1=5$.
:::

