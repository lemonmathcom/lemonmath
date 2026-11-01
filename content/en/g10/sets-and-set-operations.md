---
title: Sets and set operations
description: Learn to describe sets, use subsets, number sets and intervals, and compute union, intersection, difference and complement, with Venn diagrams and counting.
minutes: 18
---

:::goals
- Describe a set by listing its elements or by a property, and use $\in$, $\notin$, $\subset$, $\emptyset$.
- Recognise the number sets $\mathbb{N}$, $\mathbb{N}^*$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ and write intervals, half-intervals and rays.
- Find the union, intersection, difference and complement of sets, and draw Venn diagrams.
- Count elements with $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.
:::

Your class, the songs on your phone, the even numbers: we group things all the time. Mathematics gives such a group a name, a **set**, and a few simple tools for working with it. Almost every later topic, from equations to probability, is written in this language.

## Sets and elements

A **set** is a collection of distinct objects, called its **elements**. We write $a \in A$ if $a$ is an element of $A$ and $a \notin A$ if it is not.

There are two ways to describe a set.

- **Listing**: $A=\{2,4,6,8\}$. The order does not matter and repeating an element changes nothing.
- **By a property**: $A=\{x \in \mathbb{N} \mid x \text{ is even and } x \le 8,\ x>0\}$. Read "the set of all $x$ in $\mathbb{N}$ such that ...".

The number of elements of a finite set $A$ is written $n(A)$. The **empty set** $\emptyset$ has no element, so $n(\emptyset)=0$.

:::example Describing sets
Write each set by listing its elements.

(a) $A=\{x \in \mathbb{N} \mid 2<x\le 7\}$. (b) $B=\{x \in \mathbb{R} \mid x^2-5x+6=0\}$. (c) $C=\{x \in \mathbb{Z} \mid x^2<2\}$.

**Solution.**
- (a) The natural numbers greater than $2$ and at most $7$ are $3,4,5,6,7$. So $A=\{3,4,5,6,7\}$.
- (b) $x^2-5x+6=(x-2)(x-3)=0$ gives $x=2$ or $x=3$. So $B=\{2,3\}$.
- (c) The integers whose square is less than $2$ are $-1,0,1$. So $C=\{-1,0,1\}$.
:::

### Subsets and equal sets

:::definition Subset and equality
$A$ is a **subset** of $B$, written $A \subset B$, if every element of $A$ is also an element of $B$. Two sets are **equal**, $A=B$, if $A\subset B$ and $B\subset A$. The empty set is a subset of every set.
:::

For example $\{1,2\}\subset\{1,2,3\}$. The set $\{1,2,3\}$ has $8$ subsets: $\emptyset$, $\{1\}$, $\{2\}$, $\{3\}$, $\{1,2\}$, $\{1,3\}$, $\{2,3\}$, $\{1,2,3\}$.

### Number sets

- $\mathbb{N}=\{0,1,2,3,\dots\}$ natural numbers, and $\mathbb{N}^*=\{1,2,3,\dots\}$ positive integers.
- $\mathbb{Z}$: integers $\dots,-2,-1,0,1,2,\dots$
- $\mathbb{Q}$: rational numbers, those of the form $\dfrac{p}{q}$ with $p,q\in\mathbb{Z}$, $q\neq 0$.
- $\mathbb{R}$: real numbers, all points of the number line.

They are nested: $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. The number $\sqrt{2}$ belongs to $\mathbb{R}$ but not to $\mathbb{Q}$.

## Intervals

Many subsets of $\mathbb{R}$ are pieces of the number line. Let $a<b$.

| Set | Name | Notation |
|---|---|---|
| $\{x \mid a<x<b\}$ | open interval | $(a, b)$ |
| $\{x \mid a\le x\le b\}$ | closed interval (segment) | $[a, b]$ |
| $\{x \mid a\le x<b\}$ | half-open interval | $[a, b)$ |
| $\{x \mid a<x\le b\}$ | half-open interval | $(a, b]$ |
| $\{x \mid x>a\}$ and $\{x\mid x\ge a\}$ | rays | $(a, +\infty)$ and $[a, +\infty)$ |
| $\{x \mid x<b\}$ and $\{x\mid x\le b\}$ | rays | $(-\infty, b)$ and $(-\infty, b]$ |

A square bracket means the end is included (filled dot), a round bracket means it is excluded (hollow dot). Infinity is never included.

:::graph The interval $[-1, 3)$
alt: Number line with a segment from -1 to 3, filled dot at -1 and hollow dot at 3
x: -3..5
y: -1..1
segment: (-1, 0) (3, 0)
point: (-1, 0) "-1" below
open: (3, 0) "3" below
:::

:::graph The ray $(-\infty, 2]$
alt: Number line with a half-line going left from 2, filled dot at 2
x: -3..5
y: -1..1
segment: (-3, 0) (2, 0)
point: (2, 0) "2" below
label: (-2.5, 0.5) "-∞"
:::

## Operations on sets

:::definition Union, intersection, difference, complement
- **Union** $A\cup B$: elements belonging to $A$ **or** $B$ (or both).
- **Intersection** $A\cap B$: elements belonging to **both** $A$ and $B$.
- **Difference** $A\setminus B$: elements of $A$ that are **not** in $B$.
- **Complement**: if $A\subset E$, the complement of $A$ in $E$ is $A^c=E\setminus A$.
:::

:::example Operations on finite sets
Let $E=\{1,2,\dots,8\}$, $A=\{1,2,3,4\}$, $B=\{3,4,5,6\}$. Find $A\cup B$, $A\cap B$, $A\setminus B$, $B\setminus A$ and the complement of $A$ in $E$.

**Solution.**
- $A\cup B$: put everything together without repeats: $\{1,2,3,4,5,6\}$.
- $A\cap B$: elements in both lists: $\{3,4\}$.
- $A\setminus B$: elements of $A$ not in $B$: $\{1,2\}$. Similarly $B\setminus A=\{5,6\}$.
- The complement of $A$ in $E$: elements of $E$ not in $A$: $\{5,6,7,8\}$.
:::

:::diagram Venn diagram of $A$ and $B$
alt: Two overlapping circles A and B; the left part holds 1 and 2, the overlap holds 3 and 4, the right part holds 5 and 6
point P 0,0 ""
point Q 1.5,0 ""
circle P 1.2
circle Q 1.2
label -0.5,0.8 "A"
label 2.0,0.8 "B"
label -0.5,-0.2 "1, 2"
label 0.75,-0.2 "3, 4"
label 2.0,-0.2 "5, 6"
:::

### Operations on intervals

:::example Operations on intervals
Let $A=[-2, 3]$ and $B=(1, 5)$. Find $A\cap B$, $A\cup B$, $A\setminus B$ and the complement of $A$ in $\mathbb{R}$.

**Solution.** Draw both on the number line and read off.
- $A\cap B$: numbers that are $\ge -2$, $\le 3$ **and** $>1$, $<5$. So $1<x\le 3$: $A\cap B=(1, 3]$.
- $A\cup B$: from $-2$ (included) up to $5$ (excluded), with no gap since $B$ starts inside $A$: $A\cup B=[-2, 5)$.
- $A\setminus B$: points of $A$ that are not in $(1,5)$. That leaves $-2\le x\le 1$, and $1$ is not in $B$, so it stays: $A\setminus B=[-2, 1]$.
- Complement of $A$: $x<-2$ or $x>3$, so $(-\infty, -2)\cup(3, +\infty)$.
:::

## Counting elements

For finite sets, adding $n(A)+n(B)$ counts the elements of $A\cap B$ twice, so we subtract them once:

:::theorem Counting formula
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)$$
:::

:::example Two clubs
In a class of $40$ students, $25$ play football, $18$ play badminton and $6$ play neither. How many play both?

**Solution.**
- Students who play at least one sport: $40-6=34$, so $n(A\cup B)=34$.
- By the formula $34=25+18-n(A\cap B)$.
- So $n(A\cap B)=43-34=9$.
- Check: only football $25-9=16$, only badminton $18-9=9$, both $9$, neither $6$; total $16+9+9+6=40$.
:::

:::warning Common mistake
Writing $[a, +\infty]$ or $(a, +\infty]$ is wrong: $\infty$ is not a number, so the bracket next to it is always round. Also, $A\cup B$ is not "$n(A)+n(B)$" elements when the sets overlap.
:::

## Key terms

:::terms
- set | tập hợp
- element | phần tử
- empty set | tập rỗng
- subset | tập hợp con
- equal sets | hai tập hợp bằng nhau
- interval | khoảng
- segment (closed interval) | đoạn
- half-open interval | nửa khoảng
- union | hợp
- intersection | giao
- difference | hiệu
- complement | phần bù
:::

## Summary

- A set is described by listing its elements or by a property; $\emptyset$ is the empty set; $A\subset B$ means every element of $A$ is in $B$.
- $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- Intervals use square brackets for included ends and round brackets for excluded ends; infinity always gets a round bracket.
- Union means "or", intersection means "and", difference $A\setminus B$ means "in $A$ but not in $B$", complement is $E\setminus A$.
- $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.

## Practice

:::practice
1. List the elements: (a) $\{x\in\mathbb{N}\mid 1<x\le 6\}$, (b) $\{x\in\mathbb{Z}\mid -2\le x<3\}$, (c) $\{x\in\mathbb{R}\mid x^2=9\}$.
2. Write by a property: (a) $\{1,3,5,7,9,11\}$, (b) $\{3,6,9,12,15,18\}$.
3. True or false: (a) $5\in\mathbb{N}^*$, (b) $-3\in\mathbb{N}$, (c) $\tfrac12\in\mathbb{Q}$, (d) $\sqrt{2}\in\mathbb{Q}$, (e) $\mathbb{Z}\subset\mathbb{Q}$, (f) $0\in\mathbb{N}^*$.
4. List all subsets of $\{1,2,3\}$ that contain the element $1$. How many are there?
5. Write as an interval: (a) $\{x\in\mathbb{R}\mid -1<x\le 4\}$, (b) $\{x\in\mathbb{R}\mid x\ge 2\}$, (c) $\{x\in\mathbb{R}\mid x<0\}$.
6. Let $A=[-3, 2]$ and $B=(0, 6)$. Find $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$.
7. Let $A=\{x\in\mathbb{N}\mid x\le 6\}$ and $B=\{x\in\mathbb{N}\mid x\text{ even},\ x\le 10\}$. Find $A\cap B$, $A\cup B$, $A\setminus B$ and check the counting formula.
8. In a class of $45$ students, $30$ like maths, $22$ like literature and every student likes at least one of them. How many like both?
9. Let $A=(-\infty, 1]\cup(4, +\infty)$. Find the complement of $A$ in $\mathbb{R}$.
10. Challenge. (a) Among $100$ students, $60$ speak English, $45$ speak French and $20$ speak both. How many speak exactly one of the two languages, and how many speak neither? (b) Find all real $m$ with $[m, m+2]\subset[0, 5]$.
:::

:::solution Show solutions
1. (a) $\{2,3,4,5,6\}$. (b) $\{-2,-1,0,1,2\}$. (c) $x^2=9$ gives $x=\pm 3$: $\{-3,3\}$.
2. (a) The odd natural numbers less than $12$: $\{x\in\mathbb{N}\mid x\text{ odd},\ x<12\}$. (b) The positive multiples of $3$ that are at most $18$: $\{x\in\mathbb{N}^*\mid x=3k,\ k\in\mathbb{N}^*,\ x\le 18\}$.
3. (a) True. (b) False, $-3$ is negative. (c) True. (d) False, $\sqrt2$ is irrational. (e) True, every integer $k$ equals $\frac{k}{1}$. (f) False, $0$ is not positive.
4. A subset containing $1$ is $\{1\}$ together with a subset of $\{2,3\}$: $\{1\}$, $\{1,2\}$, $\{1,3\}$, $\{1,2,3\}$. There are $4$ (half of the $8$ subsets).
5. (a) $(-1, 4]$. (b) $[2, +\infty)$. (c) $(-\infty, 0)$.
6. $A\cap B=(0, 2]$. $A\cup B=[-3, 6)$. $A\setminus B=[-3, 0]$ ($0$ is not in $B$). $B\setminus A=(2, 6)$ ($2$ is in $A$, so it is removed).
7. $A=\{0,1,2,3,4,5,6\}$, $B=\{0,2,4,6,8,10\}$. $A\cap B=\{0,2,4,6\}$. $A\cup B=\{0,1,2,3,4,5,6,8,10\}$. $A\setminus B=\{1,3,5\}$. Check: $n(A\cup B)=9$ and $7+6-4=9$.
8. $n(A\cup B)=45$, so $45=30+22-n(A\cap B)$, hence $n(A\cap B)=52-45=7$.
9. The numbers not in $A$ are those with $x>1$ and $x\le 4$: the complement is $(1, 4]$.
10. (a) At least one language: $60+45-20=85$. Exactly one: $85-20=65$ (or $40+25$). Neither: $100-85=15$. (b) We need $m\ge 0$ and $m+2\le 5$, i.e. $0\le m\le 3$.
:::
