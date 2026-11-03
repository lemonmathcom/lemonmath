---
title: Sets and set operations
description: Learn to describe sets, use subsets, number sets and intervals, and compute union, intersection, difference and complement, with Venn diagrams and counting.
minutes: 22
---

:::goals
- Describe a set by listing its elements or by a property, and use $\in$, $\notin$, $\subset$, $\varnothing$.
- Recognise the number sets $\mathbb{N}$, $\mathbb{N}^*$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ and write open, closed and half-open intervals.
- Find the union, intersection, difference and complement of sets, and draw Venn diagrams.
- Count elements with $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.
:::

Class 10A has $38$ students. $21$ of them are in the basketball club, $17$ are in the chess club and $5$ are in no club at all. Adding $21+17=38$ gives exactly the class size, yet $5$ students are left out. So how many students are in both clubs?

To answer neatly we need the language of **sets**: put the basketball players in one set, the chess players in another, and look at how the two sets overlap. Almost every later topic, from solution sets of inequalities to probability, is written in this language.

## Sets and elements

Try to describe the group of positive divisors of $12$. We can list them all: $1, 2, 3, 4, 6, 12$. Or we can give only the rule for choosing them: "the non-zero natural numbers that divide $12$". The two descriptions are different, but they describe the same group of numbers:

$$\{1, 2, 3, 4, 6, 12\}=\{x\in\mathbb{N}^* \mid x \text{ divides } 12\}.$$

:::definition Sets and elements
A **set** is a collection of distinct objects, called the **elements** of the set. We write $a \in A$ if $a$ is an element of $A$ and $a \notin A$ if it is not. A set can be described in two ways:
- by **listing** its elements, for example $\{2, 4, 6\}$ (order does not matter, each element is written once);
- by **stating a property**, for example $\{x\in\mathbb{N}^* \mid x \text{ even},\ x\le 6\}$, read "the set of $x$ in $\mathbb{N}^*$ such that ...".

The number of elements of a finite set $A$ is written $n(A)$. The **empty set** $\varnothing$ has no elements, $n(\varnothing)=0$.
:::

:::example Listing the elements
List the elements of each set.

(a) $A=\{x\in\mathbb{N}\mid 3\le x<8\}$. (b) $B=\{x\in\mathbb{R}\mid x^2-7x+10=0\}$. (c) $C=\{x\in\mathbb{Z}\mid x^2\le 5\}$. (d) $D=\{x\in\mathbb{R}\mid x^2+1=0\}$.

**Solution.** For each set we look for exactly the numbers that belong to the given number set and satisfy the property.

- (a) The natural numbers from $3$ to $7$: $A=\{3, 4, 5, 6, 7\}$.
- (b) Factorise the left-hand side:
$$x^2-7x+10=(x-2)(x-5)=0 \iff x=2 \ \text{or}\ x=5.$$
So $B=\{2, 5\}$.
- (c) Integers whose square is at most $5$: since $2^2=4\le5$ but $3^2=9>5$, we get $C=\{-2, -1, 0, 1, 2\}$.
- (d) $x^2+1\ge 1>0$ for every real $x$, so there are no elements: $D=\varnothing$.

So $n(A)=5$, $n(B)=2$, $n(C)=5$ and $n(D)=0$.
:::

### Subsets and equal sets

:::definition Subsets and equal sets
$A$ is a **subset** of $B$, written $A \subset B$, if every element of $A$ is an element of $B$. Two sets are **equal**, $A=B$, if $A\subset B$ and $B\subset A$. The empty set is a subset of every set, and every set is a subset of itself.
:::

Once we can list elements, we can compare two sets element by element.

:::example Subsets
Let $A=\{1, 2, 4\}$ and let $B$ be the set of positive divisors of $8$.

(a) Is $A\subset B$? Is $B\subset A$? (b) List the subsets of $A$ with exactly two elements.

**Solution.** We list $B$ first: the positive divisors of $8$ are $1, 2, 4, 8$, so $B=\{1, 2, 4, 8\}$.

- (a) The three elements $1, 2, 4$ of $A$ all belong to $B$, so $A\subset B$. But $8\in B$ and $8\notin A$, so $B\not\subset A$.
- (b) Choose two of the three elements $1, 2, 4$: $\{1, 2\}$, $\{1, 4\}$, $\{2, 4\}$.

So $A\subset B$ but $A\ne B$, and $A$ has $3$ two-element subsets. (Counting $\varnothing$, the three one-element subsets and $A$ itself, $A$ has $1+3+3+1=8$ subsets in all.)
:::

### Number sets

- $\mathbb{N}=\{0, 1, 2, 3, \dots\}$ is the set of natural numbers, and $\mathbb{N}^*=\{1, 2, 3, \dots\}$ is the set of non-zero natural numbers.
- $\mathbb{Z}$: the integers $\dots, -2, -1, 0, 1, 2, \dots$
- $\mathbb{Q}$: the rational numbers, the numbers of the form $\dfrac{p}{q}$ with $p,q\in\mathbb{Z}$, $q\neq 0$.
- $\mathbb{R}$: the real numbers, all the points of the number line.

These sets are nested: $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. The number $\sqrt{2}$ is in $\mathbb{R}$ but not in $\mathbb{Q}$.

## Intervals

Many subsets of $\mathbb{R}$ are a "piece" of the number line. Suppose $a<b$.

| Set | Name | Notation |
|---|---|---|
| $\{x\in\mathbb{R} \mid a<x<b\}$ | open interval | $(a, b)$ |
| $\{x\in\mathbb{R} \mid a\le x\le b\}$ | closed interval | $[a, b]$ |
| $\{x\in\mathbb{R} \mid a\le x<b\}$ | half-open interval | $[a, b)$ |
| $\{x\in\mathbb{R} \mid a<x\le b\}$ | half-open interval | $(a, b]$ |
| $\{x\in\mathbb{R} \mid x>a\}$, $\{x\in\mathbb{R}\mid x\ge a\}$ | unbounded interval (open, half-open) | $(a, +\infty)$, $[a, +\infty)$ |
| $\{x\in\mathbb{R} \mid x<b\}$, $\{x\in\mathbb{R}\mid x\le b\}$ | unbounded interval (open, half-open) | $(-\infty, b)$, $(-\infty, b]$ |

A square bracket means the endpoint is included (filled dot); a round bracket means it is not (hollow dot). The side of $+\infty$ or $-\infty$ always takes a round bracket, because infinity is not a number.

:::graph The half-open interval $[-1, 3)$
alt: Number line with a segment from -1 to 3, filled dot at -1 and hollow dot at 3
x: -3..5
y: -1..1
segment: (-1, 0) (3, 0)
point: (-1, 0) "-1" below
open: (3, 0) "3" below
:::

:::graph The interval $(-\infty, 2]$
alt: Number line with a ray going left from 2, filled dot at 2
x: -3..5
y: -1..1
segment: (-3, 0) (2, 0)
point: (2, 0) "2" below
label: (-2.5, 0.5) "-∞"
:::

When the property is an inequality, we solve the inequality first and then write the notation.

:::example Writing intervals
Write each set using interval notation.

(a) $\{x\in\mathbb{R}\mid -2<x\le 3\}$. (b) $\{x\in\mathbb{R}\mid x\ge -1\}$. (c) $\{x\in\mathbb{R}\mid 2x-6<0\}$.

**Solution.** We find the two endpoints and check whether each one is included.

- (a) $-2$ is not included, $3$ is included: $(-2, 3]$.
- (b) $-1$ is included and there is no right endpoint: $[-1, +\infty)$.
- (c) Move $6$ to the right-hand side, then divide by $2$:
$$2x-6<0 \iff 2x<6 \iff x<3.$$
So the set is $(-\infty, 3)$.

So the three sets are $(-2, 3]$, $[-1, +\infty)$ and $(-\infty, 3)$.
:::

## Set operations

:::definition Union, intersection, difference, complement
- **Union** $A\cup B$: the elements in $A$ **or** in $B$.
- **Intersection** $A\cap B$: the elements in **both** $A$ **and** $B$.
- **Difference** $A\setminus B$: the elements in $A$ but **not** in $B$.
- **Complement**: if $A\subset E$, the complement of $A$ in $E$ is $C_E A=E\setminus A$.
:::

A Venn diagram lets us see these operations: each set is a circle, and the common part of two circles is the intersection.

:::example Operations on finite sets
Let $E=\{1, 2, \dots, 10\}$, $A=\{x\in E\mid x \text{ even}\}$ and let $B$ be the set of positive divisors of $12$ that lie in $E$. Find $A\cup B$, $A\cap B$, $A\setminus B$, $B\setminus A$ and $C_E A$.

**Solution.** List both sets first: $A=\{2, 4, 6, 8, 10\}$ and $B=\{1, 2, 3, 4, 6\}$ ($12$ is not in $E$). Then read off each operation:

$$\begin{aligned} A\cup B&=\{1, 2, 3, 4, 6, 8, 10\},\\ A\cap B&=\{2, 4, 6\},\\ A\setminus B&=\{8, 10\},\quad B\setminus A=\{1, 3\},\\ C_E A&=\{1, 3, 5, 7, 9\}. \end{aligned}$$

**Check.** The three regions of the Venn diagram hold $2+3+2=7$ elements, exactly $n(A\cup B)$.
:::

:::diagram Venn diagram of $A$ and $B$ in $E$
alt: A rectangle E containing two overlapping circles A and B; the part only in A holds 8 and 10, the overlap holds 2, 4, 6, the part only in B holds 1 and 3, and 5, 7, 9 lie outside both circles
point R1 -1.7,-1.6 ""
point R2 3.2,-1.6 ""
point R3 3.2,1.6 ""
point R4 -1.7,1.6 ""
polygon R1 R2 R3 R4
point P 0,0 ""
point Q 1.5,0 ""
circle P 1.2
circle Q 1.2
label -1.4,1.35 "E"
label -0.5,0.8 "A"
label 2.0,0.8 "B"
label -0.5,-0.2 "8, 10"
label 0.75,-0.2 "2, 4, 6"
label 2.0,-0.2 "1, 3"
label 2.6,-1.3 "5, 7, 9"
:::

With intervals we cannot list the elements, so we draw the sets on a number line and read off the result.

:::example Operations on intervals
Let $A=[-3, 2)$ and $B=(0, 5]$. Find $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$ and $C_{\mathbb{R}}A$.

**Solution.** Put $A$ and $B$ on the same number line; at each endpoint we ask which sets contain that point.

- $A\cap B$: we need $-3\le x<2$ **and** $0<x\le 5$, so $0<x<2$. Hence $A\cap B=(0, 2)$.
- $A\cup B$: from $-3$ (included) to $5$ (included), with no gap since $B$ starts inside $A$. Hence $A\cup B=[-3, 5]$.
- $A\setminus B$: remove from $A$ the part $x>0$. The point $0$ is not in $B$, so it stays: $A\setminus B=[-3, 0]$.
- $B\setminus A$: remove from $B$ the part $x<2$. The point $2$ is not in $A$, so it stays: $B\setminus A=[2, 5]$.
- $C_{\mathbb{R}}A$: the numbers $x<-3$ or $x\ge 2$, that is $(-\infty, -3)\cup[2, +\infty)$.

So $A\cap B=(0, 2)$, $A\cup B=[-3, 5]$, $A\setminus B=[-3, 0]$, $B\setminus A=[2, 5]$, $C_{\mathbb{R}}A=(-\infty, -3)\cup[2, +\infty)$.
:::

## Counting elements

:::theorem Counting formula
For two finite sets $A$ and $B$:
$$n(A\cup B)=n(A)+n(B)-n(A\cap B).$$
:::

**Why?** In $n(A)+n(B)$, an element of only one set is counted once, but each element of $A\cap B$ is counted twice. Subtracting $n(A\cap B)$ leaves every element of $A\cup B$ counted exactly once. In the example above: $5+5-3=7$.

Now we can answer the question about the two clubs from the start of the lesson.

:::example Two clubs
Class 10A has $38$ students; $21$ play basketball, $17$ play chess and $5$ are in no club. How many students are in both clubs?

**Solution.** Let $R$ and $V$ be the sets of basketball and chess players. The students in at least one club form $R\cup V$:

$$n(R\cup V)=38-5=33.$$

Substitute into the counting formula and rearrange:

$$33=21+17-n(R\cap V)\iff n(R\cap V)=38-33=5.$$

So $5$ students are in both clubs.

**Check.** Basketball only $21-5=16$, chess only $17-5=12$, both $5$, no club $5$: total $16+12+5+5=38$.
:::

:::warning Common mistakes
- **A square bracket at infinity.** Writing $[2, +\infty]$. Wrong, because $+\infty$ is not a number and cannot be "included". Right: $[2, +\infty)$.
- **Simply adding the sizes.** Writing $n(A\cup B)=n(A)+n(B)$ when the sets overlap. Wrong, because the overlap is counted twice. Right: subtract $n(A\cap B)$.
- **Losing an endpoint in a difference.** With $A=[-3, 2)$, $B=(0, 5]$, writing $A\setminus B=[-3, 0)$. Wrong, because $0\notin B$, so $0$ stays in the difference. Right: $A\setminus B=[-3, 0]$.
- **Mixing up $\in$ and $\subset$.** Writing $2\subset\{1, 2\}$. Wrong, because $2$ is an element. Right: $2\in\{1, 2\}$ or $\{2\}\subset\{1, 2\}$.
:::

## Key terms

:::terms
- set | tập hợp
- element | phần tử
- empty set | tập rỗng
- subset | tập hợp con
- equal sets | hai tập hợp bằng nhau
- open interval | khoảng
- closed interval | đoạn
- half-open interval | nửa khoảng
- union | hợp
- intersection | giao
- difference | hiệu
- complement | phần bù
:::

## Summary

- Describe a set by listing its elements or by stating a property. $\varnothing$ is the empty set. $A\subset B$: every element of $A$ is in $B$.
- $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- Intervals: a square bracket includes the endpoint, a round bracket does not; infinity always takes a round bracket.
- Union means "or", intersection means "and", $A\setminus B$ means "in $A$ but not in $B$", $C_E A=E\setminus A$.
- With intervals: draw them on a number line and check each endpoint separately.
- $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
List the elements of each set.

(a) $\{x\in\mathbb{N}^*\mid x\le 4\}$. (b) $\{x\in\mathbb{Z}\mid -3<x\le 1\}$. (c) $\{x\in\mathbb{R}\mid x^2-4x=0\}$.

::hint
**What you need:** listing means writing every element that belongs to the given number set and has the property.

**Steps:**
1. Remember that $\mathbb{N}^*$ does not contain $0$, and check which endpoints are included.
2. In (c), take out a common factor.

::solution
(a) $\{1, 2, 3, 4\}$. (b) Integers greater than $-3$ and at most $1$: $\{-2, -1, 0, 1\}$. (c) $x^2-4x=x(x-4)=0$ gives $x=0$ or $x=4$.

**Answer.** (a) $\{1, 2, 3, 4\}$; (b) $\{-2, -1, 0, 1\}$; (c) $\{0, 4\}$.
:::

:::exercise
Describe each set by stating a property.

(a) $\{4, 8, 12, 16, 20\}$. (b) $\{1, 4, 9, 16, 25\}$.

::hint
**What you need:** the property must hold for every element of the set and for no other object.

**Steps:**
1. Find what the elements have in common (multiples of what? squares of what?).
2. Add an upper bound so that the set does not go on for ever.

::solution
(a) These are the positive multiples of $4$ up to $20$. (b) These are the squares of $1, 2, 3, 4, 5$.

**Answer.** (a) $\{x\in\mathbb{N}^*\mid x \text{ is divisible by } 4,\ x\le 20\}$; (b) $\{n^2\mid n\in\mathbb{N}^*,\ n\le 5\}$.
:::

:::exercise
Let $A=\{2, 3, 5, 7\}$. How many subsets does $A$ have? How many subsets of $A$ contain the element $2$?

::hint
**What you need:** a subset is fixed once we decide, for each element, whether to take it or not.

**Steps:**
1. Each element has $2$ choices: in or out.
2. If $2$ must be in, only three elements are free.

::solution
Each of the four elements has $2$ choices, so the number of subsets is $2\cdot2\cdot2\cdot2=16$ (including $\varnothing$ and $A$). If $2$ must be in, the other three elements $3, 5, 7$ give $2\cdot2\cdot2=8$ choices.

**Answer.** $16$ subsets; $8$ subsets contain $2$.
:::

:::exercise
Let $A=[-4, 1]$ and $B=(-1, 3)$. Find $A\cap B$, $A\cup B$, $A\setminus B$ and $B\setminus A$.

::hint
**What you need:** the intersection is the common part, the union is everything together, and $A\setminus B$ is the part of $A$ outside $B$.

**Steps:**
1. Draw both sets on one number line.
2. At each endpoint $-4$, $-1$, $1$, $3$, ask which sets contain it.

::solution
The common part is $-1<x\le 1$; together they cover $-4\le x<3$. Removing the part $x>-1$ from $A$ leaves $[-4, -1]$, since $-1\notin B$. Removing the part $x\le 1$ from $B$ leaves $(1, 3)$, since $1\in A$.

**Answer.** $A\cap B=(-1, 1]$, $A\cup B=[-4, 3)$, $A\setminus B=[-4, -1]$, $B\setminus A=(1, 3)$.
:::

:::exercise
Find the complement in $\mathbb{R}$ of $A=(-\infty, -2]\cup(3, +\infty)$.

::hint
**What you need:** $C_{\mathbb{R}}A$ consists of the real numbers not in $A$; an endpoint in $A$ is not in the complement, and the other way round.

**Steps:**
1. Draw $A$ on the number line and find the empty part.
2. Check the two points $-2$ and $3$ separately.

::solution
The empty part lies between $-2$ and $3$. The point $-2\in A$, so it is left out; the point $3\notin A$, so it is included.

**Answer.** $C_{\mathbb{R}}A=(-2, 3]$.
:::

:::exercise
Let $A=[-1, 4)$ and $B=\{x\in\mathbb{Z}\mid -2\le x\le 2\}$. Is each claim true or false?

a) $A\cap B=\{-1, 0, 1, 2\}$.
b) $A\cup B=[-2, 4)$.
c) $B\setminus A=\{-2\}$.
d) $A$ contains exactly $4$ integers.

::hint
**What you need:** $B$ is a finite set of integers, while $A$ contains every real number from $-1$ up to (not including) $4$.

**Steps:**
1. List $B$.
2. For each element of $B$, check whether it lies in $A$.
3. For b), ask whether $-1.5$ belongs to $A\cup B$.

::solution
$B=\{-2, -1, 0, 1, 2\}$.

a) **True.** In $B$, only $-2$ is not in $A$.

b) **False.** $-1.5\in[-2, 4)$ but $-1.5\notin A$ and $-1.5\notin B$. In fact $A\cup B=\{-2\}\cup[-1, 4)$.

c) **True.** $-2$ is the only element of $B$ outside $A$.

d) **False.** $A$ contains $5$ integers: $-1, 0, 1, 2, 3$ ($4\notin A$).

**Answer.** a) True; b) False; c) True; d) False.
:::

:::exercise
In a survey of $50$ students, $32$ like football, $25$ like swimming and $9$ like neither. How many like both?

::hint
**What you need:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

**Steps:**
1. Find how many like at least one of the two.
2. Substitute into the formula and solve for $n(A\cap B)$.

::solution
At least one: $50-9=41$. Then $41=32+25-n(A\cap B)$, so $n(A\cap B)=57-41=16$.

**Answer.** $16$.
:::

:::exercise
A travel company asks $120$ customers: $70$ have been to Ha Long, $55$ have been to Sa Pa and $30$ have been to both. How many have been to exactly one of the two places? How many have been to neither?

::hint
**What you need:** the counting formula, and a Venn diagram with three regions: only $A$, both, only $B$.

**Steps:**
1. Find how many have been to at least one place.
2. Remove those who have been to both.
3. Subtract "at least one" from the total.

::solution
At least one place: $70+55-30=95$. Exactly one: $95-30=65$ ($40$ only Ha Long and $25$ only Sa Pa). Neither: $120-95=25$.

**Answer.** $65$ customers have been to exactly one place; $25$ to neither.
:::

:::exercise
(Review of [Statements](lesson:statements)) Let $A=\{x\in\mathbb{R}\mid x^2\le 4\}$ and $B=(-3, 3)$.

(a) Write $A$ as a closed interval. (b) Is "$\forall x\in A,\ x\in B$" true or false? Write its negation. (c) Is "$\forall x\in B,\ x\in A$" true or false?

::hint
**What you need:** "$\forall x\in A,\ x\in B$" means exactly "$A\subset B$"; the negation of $\forall$ is $\exists$.

**Steps:**
1. Solve $x^2\le 4$.
2. Compare the two sets on the number line.
3. In (c), look for a counter-example.

::solution
(a) $x^2\le 4\iff -2\le x\le 2$, so $A=[-2, 2]$.

(b) Every $x\in[-2, 2]$ satisfies $-3<x<3$, so the statement is true ($A\subset B$). Negation: "$\exists x\in A,\ x\notin B$".

(c) False: $x=2.5\in B$ but $2.5^2=6.25>4$, so $2.5\notin A$.

**Answer.** (a) $A=[-2, 2]$; (b) true; (c) false.
:::

:::exercise Challenge
How many sets $X$ satisfy $\{1, 2\}\subset X\subset\{1, 2, 3, 4, 5\}$?

::hint
**What you need:** $\{1, 2\}\subset X$ means $X$ must contain $1$ and $2$; $X\subset\{1, 2, 3, 4, 5\}$ means $X$ contains nothing else.

**Steps:**
1. Find the elements that are still free to choose.
2. Each free element has two choices: in or out.

::solution
$X$ always contains $1$ and $2$; each of $3$, $4$, $5$ may be in or out. That gives $2\cdot2\cdot2=8$ choices, from $X=\{1, 2\}$ to $X=\{1, 2, 3, 4, 5\}$.

**Answer.** $8$.
:::

## Mini test

:::quiz
::mc
Let $A=\{x\in\mathbb{Z}\mid -2\le x<3\}$. The number of elements of $A$ is
A. $4$.
B. $5$.
C. $6$.
D. $3$.
::key B
$A=\{-2, -1, 0, 1, 2\}$ has $5$ elements. Counting $3$ as well (the sign "$<$" excludes $3$) gives $6$; leaving out $-2$ gives $4$.

::mc
Let $A=(-1, 4]$ and $B=[2, 6)$. The set $A\cap B$ is
A. $[2, 4]$.
B. $(2, 4)$.
C. $(-1, 6)$.
D. $[2, 4)$.
::key A
We need $-1<x\le 4$ and $2\le x<6$, that is $2\le x\le 4$. Both $2$ and $4$ belong to both sets, so they are included; $(-1, 6)$ is the union, not the intersection.

::mc
The complement of $[1, +\infty)$ in $\mathbb{R}$ is
A. $(-\infty, 1]$.
B. $(-\infty, 1)$.
C. $(1, +\infty)$.
D. $(-\infty, -1)$.
::key B
The complement consists of the real numbers not in $[1, +\infty)$, that is $x<1$. The point $1$ belongs to the given set, so it is not in the complement.

::mc
Let $A=\{1, 2, 3, 4, 5\}$ and let $B$ be the set of natural-number divisors of $6$. The set $A\setminus B$ is
A. $\{4, 5\}$.
B. $\{6\}$.
C. $\{1, 2, 3\}$.
D. $\{4, 5, 6\}$.
::key A
$B=\{1, 2, 3, 6\}$. $A\setminus B$ consists of the elements of $A$ that are not in $B$: $4$ and $5$. Option B is $B\setminus A$ and option C is $A\cap B$.

::tf
Let $A=[-2, 3)$ and $B=(0, 5]$.
a) $A\cup B=[-2, 5]$.
b) $A\cap B=[0, 3)$.
c) $A\setminus B=[-2, 0]$.
d) $B\setminus A$ contains exactly $3$ integers.
::key T F T T
a) True: the two intervals join up from $-2$ (included) to $5$ (included). b) False: $0\notin B$, so $A\cap B=(0, 3)$. c) True: $0\notin B$, so $0$ stays in $A\setminus B$. d) True: $B\setminus A=[3, 5]$ contains $3, 4, 5$.

::sa
How many sets $X$ are subsets of $\{1, 2, 3, 4, 5, 6\}$ that contain the element $1$ but do not contain the element $6$?
::key 16
The element $1$ must be in and the element $6$ must be out. Each of $2, 3, 4, 5$ has $2$ choices (in or out), so there are $2^4=16$ sets.

::sa
Class 10B has $40$ students: $25$ like maths, $18$ like literature and $7$ like both subjects. How many students like **exactly one** of the two subjects?
::key 29
Maths only: $25-7=18$; literature only: $18-7=11$. Exactly one subject: $18+11=29$ students (the sum $25+18-7=36$ is the number who like at least one subject).
:::
