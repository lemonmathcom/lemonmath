---
title: Inequalities and their properties
description: Understand inequalities, the transitive property and how order behaves under addition and multiplication, and use them to compare and prove simple inequalities.
minutes: 20
---

:::goals
- Read and write inequalities with the signs $<$, $>$, $\le$, $\ge$.
- Use the transitive property and the rules for addition and multiplication to compare two expressions.
- Prove some simple inequalities.
:::

An is taller than Bình. A year later both have grown by $5$ cm. Is An still taller than Bình? Certainly. But if we know $a>b$, which is larger, $-2a$ or $-2b$? The answer surprises many students.

This lesson helps us answer questions like these with certainty, without guessing.

## Inequalities

A statement of the form $a<b$ (or $a>b$, $a\le b$, $a\ge b$) is called an **inequality**; $a$ is the **left-hand side** and $b$ is the **right-hand side**.

- $a\le b$ is read "$a$ is less than or equal to $b$", or "$a$ is not greater than $b$".
- $a\ge b$ is read "$a$ is greater than or equal to $b$", or "$a$ is not less than $b$".

:::example Writing in symbols
Write each statement as an inequality: a) the number $x$ is non-negative; b) the speed $v$ (km/h) does not exceed $60$; c) the age $t$ of a car driver is at least $18$.

**Solution.** "Non-negative" means $\ge0$, "does not exceed" means $\le$, and "at least" means $\ge$:

$$\text{a) } x\ge0;\qquad \text{b) } v\le60;\qquad \text{c) } t\ge18.$$

So the three statements are $x\ge0$, $v\le60$ and $t\ge18$.
:::

:::theorem The transitive property
If $a<b$ and $b<c$, then $a<c$. (Likewise for $>$, $\le$, $\ge$.)
:::

On a number line, $a<b$ means that the point $a$ is to the left of the point $b$. If $a$ is to the left of $b$ and $b$ is to the left of $c$, then $a$ is to the left of $c$.

## Order and addition

### Explore: sliding along the number line

We have $2<3$. Add $4$ to both sides: $6<7$. Add $-5$: $-3<-2$. Adding a number to both sides slides both points the same distance along the number line, so the order does not change.

:::theorem Order and addition
For all numbers $a$, $b$, $c$: if $a<b$, then $a+c<b+c$.
:::

The rule also holds for $>$, $\le$, $\ge$, and for subtraction (since subtracting $c$ is adding $-c$).

:::example Adding the same number to both sides
Suppose $a>b$. Compare: a) $a+3$ and $b+3$; b) $a-7$ and $b-7$. Then compare $2025+(-7)$ and $2024+(-7)$.

**Solution.** Adding the same number to both sides keeps the direction:

$$a>b\Rightarrow a+3>b+3;\qquad a>b\Rightarrow a-7>b-7.$$

Since $2025>2024$, we get $2025+(-7)>2024+(-7)$ without any calculation.
:::

## Order and multiplication

### Explore: multiplying by a negative number

We have $2<3$. Multiplying both sides by $4$ gives $8<12$: the direction stays the same. Multiplying both sides by $-1$ gives $-2$ and $-3$, and $-2>-3$: the direction is **reversed**. On a number line, multiplying by $-1$ reflects every point in $0$, so the point on the left ends up on the right.

:::graph Multiplying by $-1$ reverses the order
alt: A number line with the points 2 and 3 to the right of 0, and their reflections −2 and −3 to the left of 0
x: -4..4
y: -1..1
segment: (-4, 0) (4, 0)
point: (2, 0) "2" above
point: (3, 0) "3" above
point: (-2, 0) "−2" above
point: (-3, 0) "−3" above
point: (0, 0) "0" below
:::

:::theorem Order and multiplication
Suppose $a<b$.
- If $c>0$, then $ac<bc$ (the direction stays the same).
- If $c<0$, then $ac>bc$ (the inequality is **reversed**).
:::

Dividing by $c\neq0$ is multiplying by $\dfrac1c$, so the same rule applies.

:::example Multiplying by a negative number
Suppose $a<b$. Compare: a) $3a$ and $3b$; b) $-4a$ and $-4b$; c) $5-2a$ and $5-2b$.

**Solution.** Multiplying by a positive number keeps the direction; multiplying by a negative number reverses it. In part c) we multiply by $-2$, then add $5$:

$$\text{a) } 3a<3b;\qquad \text{b) } -4a>-4b;\qquad \text{c) } -2a>-2b\Rightarrow 5-2a>5-2b.$$

So $3a<3b$, $-4a>-4b$ and $5-2a>5-2b$.
:::

Putting the properties together, we can prove many inequalities.

:::example Using the transitive property
Suppose $a>b$. Prove that $3a+1>3b-2$.

**Solution.** Multiply both sides of $a>b$ by $3>0$, add $1$, then compare $3b+1$ with $3b-2$:

$$a>b\Rightarrow 3a>3b\Rightarrow 3a+1>3b+1;\qquad 3b+1>3b-2\ (\text{since } 1>-2).$$

By the transitive property, $3a+1>3b-2$.
:::

To prove an inequality with letters, we often use a simple fact: **the square of any number is non-negative**.

:::example An important inequality
Prove that $a^2+b^2\ge2ab$ for all numbers $a$, $b$. When does equality hold?

**Solution.** Start from $(a-b)^2\ge0$, expand, then add $2ab$ to both sides:

$$(a-b)^2\ge0\iff a^2-2ab+b^2\ge0\iff a^2+b^2\ge2ab.$$

So $a^2+b^2\ge2ab$ for all $a$, $b$; equality holds when $a-b=0$, that is $a=b$.
:::

:::warning Common mistakes
- **Forgetting to reverse when multiplying by a negative number.** Wrong: $a<b\Rightarrow -3a<-3b$. Why it is wrong: multiplying by $-3<0$ reverses the sign. Right: $-3a>-3b$.
- **Squaring both sides.** Wrong: $a<b\Rightarrow a^2<b^2$. Why it is wrong: $-3<1$ but $9>1$. Right: you may only square when both sides are known to be non-negative (see exercise 8).
- **Subtracting one inequality from another.** Wrong: $5>1$ and $4>0$, so $5-4>1-0$. Why it is wrong: $1>1$ is false. Right: only add (or subtract) **the same number** on both sides.
:::

## Key terms

:::terms
- inequality | bất đẳng thức
- left-hand side / right-hand side | vế trái / vế phải
- less than or equal to | nhỏ hơn hoặc bằng
- greater than or equal to | lớn hơn hoặc bằng
- transitive property | tính chất bắc cầu
- keep the direction (of the inequality) | giữ nguyên chiều
- reverse the inequality sign | đổi chiều
- equality holds | dấu bằng xảy ra
:::

## Summary

- Inequalities: $a<b$, $a>b$, $a\le b$, $a\ge b$.
- Transitive: $a<b$, $b<c\Rightarrow a<c$.
- Adding (subtracting) the same number on both sides: the direction stays the same.
- Multiplying (dividing) by a positive number: keep the direction; by a negative number: **reverse** it.
- Proofs: reduce to $(\dots)^2\ge0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Write as inequalities: a) the number of students $n$ in a class is at most $45$; b) the ticket price $p$ (thousand đồng) is at least $50$; c) the temperature $T$ ($^\circ$C) is below $0$.

::hint
**What you need:** "at most" is $\le$, "at least" is $\ge$, "below" is $<$.

**Steps:**
1. Decide the sign for each phrase.
2. Write the inequality.

::solution
a) $n\le45$; b) $p\ge50$; c) $T<0$.

**Answer.** $n\le45$; $p\ge50$; $T<0$.
:::

:::exercise
Is each statement true or false? a) $-5<-3$; b) $2\cdot(-3)\ge-6$; c) $(-2)^2<3$; d) $7-10\le-4$.

::hint
**What you need:** work out each side, then compare; $\ge$ is also true when the two sides are equal.

**Steps:**
1. Work out each side.
2. Compare them on a number line.

::solution
a) True. b) $-6\ge-6$: true. c) $4<3$: false. d) $-3\le-4$: false.

**Answer.** True, True, False, False.
:::

:::exercise
Suppose $a<b$. Compare: a) $a+5$ and $b+5$; b) $-3a$ and $-3b$; c) $2a-1$ and $2b-1$.

::hint
**What you need:** adding keeps the direction; multiplying by a positive number keeps it, by a negative number reverses it.

**Steps:**
1. In b) multiply by $-3$.
2. In c) multiply by $2$, then add $-1$.

::solution
a) $a+5<b+5$. b) $-3a>-3b$. c) $2a<2b\Rightarrow 2a-1<2b-1$.

**Answer.** a) $<$; b) $>$; c) $<$.
:::

:::exercise
Given that $-2a+3<-2b+3$, compare $a$ and $b$.

::hint
**What you need:** add $-3$ to both sides, then divide by $-2$ (reverse the sign).

**Steps:**
1. Remove the $3$ from both sides.
2. Divide by $-2$.

::solution
$-2a+3<-2b+3\Rightarrow -2a<-2b\Rightarrow a>b$ (dividing by $-2<0$ reverses the sign).

**Answer.** $a>b$.
:::

:::exercise
Prove that if $a>2$, then $3a-1>5$.

::hint
**What you need:** multiply by a positive number, then add the same number to both sides.

**Steps:**
1. Multiply both sides by $3$.
2. Add $-1$ to both sides.

::solution
$a>2\Rightarrow 3a>6\Rightarrow 3a-1>5$.

**Answer.** Proved.
:::

:::exercise
A lift can carry at most $600$ kg. Mr Tư, who weighs $70$ kg, wants to take some bags of cement, each of $50$ kg. Write an inequality for the load with $10$ bags, and say whether he can take $10$ bags or $11$ bags.

::hint
**What you need:** "at most $600$" means the total mass is $\le600$.

**Steps:**
1. Work out the total mass with $10$ bags and with $11$ bags.
2. Compare with $600$.

::solution
$10$ bags: $70+10\cdot50=570\le600$, allowed. $11$ bags: $70+11\cdot50=620>600$, not allowed.

**Answer.** He can take $10$ bags but not $11$.
:::

:::exercise Review
What are the solutions of the equation $(x-1)(x+2)=0$? Which of them satisfies $x>0$?

::hint
**What you need:** equations in factorised form (previous lesson).

**Steps:**
1. Solve $x-1=0$ and $x+2=0$.
2. Compare each solution with $0$.

::solution
The solutions are $x=1$ and $x=-2$. Since $1>0$ and $-2<0$, only $x=1$ works.

**Answer.** $x=1$.
:::

:::exercise
Suppose $a>b>0$.

a) Prove that $a^2>ab$.

b) Prove that $ab>b^2$.

c) Deduce that $a^2>b^2$.

::hint
**What you need:** multiplying both sides by a positive number keeps the direction; the transitive property.

**Steps:**
1. a) Multiply $a>b$ by $a>0$.
2. b) Multiply $a>b$ by $b>0$.
3. c) Use the transitive property.

::solution
a) $a>0$, so $a\cdot a>b\cdot a$, that is $a^2>ab$. b) $b>0$, so $ab>b\cdot b=b^2$. c) $a^2>ab$ and $ab>b^2$, so $a^2>b^2$.

**Answer.** Proved; so for two positive numbers, the larger one has the larger square.
:::

:::exercise Challenge
Prove that $a^2+b^2+2\ge2(a+b)$ for all numbers $a$, $b$. When does equality hold?

::hint
**What you need:** the square of any number is non-negative.

**Steps:**
1. Move everything to the left-hand side.
2. Write the left-hand side as $(a-1)^2+(b-1)^2$.

::solution
$a^2+b^2+2-2a-2b=(a^2-2a+1)+(b^2-2b+1)=(a-1)^2+(b-1)^2\ge0$. Equality holds when $a-1=0$ and $b-1=0$.

**Answer.** The inequality holds; equality when $a=b=1$.
:::

## Mini test

:::quiz
::mc
"$x$ does not exceed $5$" is written
A. $x<5$.
B. $x\le5$.
C. $x\ge5$.
D. $x>5$.
::key B
"Does not exceed" allows $x=5$. A leaves out the case of equality; C and D point the wrong way.

::mc
Suppose $a<b$. Which statement is true?
A. $-2a<-2b$.
B. $a-3>b-3$.
C. $3a<3b$.
D. $-a<-b$.
::key C
Multiplying by $3>0$ keeps the direction. A and D forget to reverse when multiplying by a negative number; B reverses wrongly when subtracting.

::mc
Suppose $a>b$. Compare $1-4a$ and $1-4b$.
A. $1-4a<1-4b$.
B. $1-4a>1-4b$.
C. $1-4a=1-4b$.
D. They cannot be compared.
::key A
$-4a<-4b$ (reversed), and adding $1$ gives $1-4a<1-4b$. B forgets to reverse.

::mc
Which statement is true for **all** numbers $a$, $b$?
A. If $a<b$, then $a^2<b^2$.
B. If $a<b$, then $-a<-b$.
C. $2a>a$.
D. $a^2+1>0$.
::key D
$a^2\ge0$, so $a^2+1\ge1>0$. A fails for $a=-3$, $b=1$; C fails for $a=-1$; B forgets to reverse.

::tf
Suppose $a>b$.
a) $a+2>b+2$.
b) $-5a>-5b$.
c) $a-b>0$.
d) $a^2>b^2$.
::key T F T F
a) True: adding keeps the direction. b) False: multiplying by $-5$ reverses the sign. c) True: add $-b$ to both sides. d) False: for example $1>-3$ but $1<9$.

::sa
How many integers $x$ satisfy $-3<x\le2$?
::key 5
They are $-2$, $-1$, $0$, $1$, $2$ ($-3$ is excluded, $2$ is included).

::sa
Find the least value of the expression $(x-3)^2+4$.
::key 4
$(x-3)^2\ge0$, so the expression is $\ge4$, and it equals $4$ when $x=3$.
:::
