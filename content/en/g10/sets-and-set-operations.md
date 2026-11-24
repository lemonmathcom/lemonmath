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

The trouble lies with the students who play both: when we add $21+17$, each of them is counted twice. To sort this out neatly we need the language of **sets**: put the basketball players in one set, the chess players in another, and look at how the two sets overlap. You will use this language for the rest of secondary school, from solution sets of inequalities to probability, so it is well worth learning carefully now.

## Sets and elements

We start with something small: try to describe the group of positive divisors of $12$. We can list them all: $1, 2, 3, 4, 6, 12$. Or we can give only the rule for choosing them: "the non-zero natural numbers that divide $12$". The two descriptions are different, but they describe the same group of numbers:

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

Once we can list elements, comparing two sets becomes easy: we go through the elements one by one and ask "is this one in the other set?".

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

You can picture these sets as boxes inside one another, each box bigger than the one before: $\mathbb{N}^*\subset\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. The number $\sqrt{2}$ is in $\mathbb{R}$ but not in $\mathbb{Q}$.

## Intervals

The real numbers cannot be listed, so for subsets of $\mathbb{R}$ we need another way of writing. Luckily, many such sets are just one unbroken "piece" of the number line, and we only need to say where the piece starts and ends. Suppose $a<b$.

| Set | Name | Notation |
|---|---|---|
| $\{x\in\mathbb{R} \mid a<x<b\}$ | open interval | $(a, b)$ |
| $\{x\in\mathbb{R} \mid a\le x\le b\}$ | closed interval | $[a, b]$ |
| $\{x\in\mathbb{R} \mid a\le x<b\}$ | half-open interval | $[a, b)$ |
| $\{x\in\mathbb{R} \mid a<x\le b\}$ | half-open interval | $(a, b]$ |
| $\{x\in\mathbb{R} \mid x>a\}$, $\{x\in\mathbb{R}\mid x\ge a\}$ | unbounded interval (open, half-open) | $(a, +\infty)$, $[a, +\infty)$ |
| $\{x\in\mathbb{R} \mid x<b\}$, $\{x\in\mathbb{R}\mid x\le b\}$ | unbounded interval (open, half-open) | $(-\infty, b)$, $(-\infty, b]$ |

The table has many rows, but there is really only one convention to remember: a square bracket means the endpoint is included (filled dot); a round bracket means it is not (hollow dot). The side of $+\infty$ or $-\infty$ always takes a round bracket, because infinity is not a number; we can never "stand" there.

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

Sometimes the property is given as an inequality. Then do not rush to write brackets: solve the inequality first, see clearly where $x$ runs from and to, and only then write the notation.

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

These four operations sound like four rules, but they are really just everyday words: "or", "and", "but not". A Venn diagram lets us see them: each set is a circle, and the common part of two circles is the intersection.

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

With intervals we cannot list the elements, so the number line plays the part of the Venn diagram. The place to be most careful is the endpoints: stop at each one and ask separately whether it is included.

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

This is exactly what fooled us when we added $21+17$ at the start. **Why subtract?** In $n(A)+n(B)$, an element of only one set is counted once, but each element of $A\cap B$ is counted twice. Subtracting $n(A\cap B)$ leaves every element of $A\cup B$ counted exactly once. In the example above: $5+5-3=7$.

Now the question about the two clubs from the start is just a matter of substituting numbers.

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
Most mistakes in this topic come not from misunderstanding but from writing too fast. Read through these once so you know where to slow down.
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

Back to class 10A: $21+17$ came to exactly the class size and yet $5$ students were left out, because the $5$ who play both games had been counted twice. Whenever you count two groups that overlap, ask yourself: how many times has the overlap been counted?

## Practice

Each exercise reminds you what you need and gives some steps to start. Have a go yourself first, and for the interval questions draw the number line on paper; drawing before writing brackets saves a lot of slips. Then open the solution and compare.

:::exercise
List the elements of each set.

(a) $\{x\in\mathbb{N}^*\mid x\le 4\}$. (b) $\{x\in\mathbb{Z}\mid -3<x\le 1\}$. (c) $\{x\in\mathbb{R}\mid x^2-4x=0\}$.

::hint
**What you need:** listing means writing every element that belongs to the given number set and has the property.

**Steps:**
1. Remember that $\mathbb{N}^*$ does not contain $0$, and check which endpoints are included.
2. In (c), take out a common factor.

::solution
(a) The set $\{x\in\mathbb{N}^*\mid x\le4\}$ consists of the positive integers not exceeding $4$, namely $1$, $2$, $3$, $4$. So this set is $\{1, 2, 3, 4\}$.

(b) The set $\{x\in\mathbb{Z}\mid -3<x\le1\}$ consists of the integers greater than $-3$ and at most $1$, namely $-2$, $-1$, $0$, $1$. So this set is $\{-2, -1, 0, 1\}$.

(c) We have $x^2-4x=x(x-4)=0$, hence $x=0$ or $x=4$. Both values are real numbers, so they belong to the given set. So this set is $\{0, 4\}$.

So the sets are $\{1, 2, 3, 4\}$, $\{-2, -1, 0, 1\}$ and $\{0, 4\}$ respectively.

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
(a) The elements $4$, $8$, $12$, $16$, $20$ equal $4\cdot1$, $4\cdot2$, $4\cdot3$, $4\cdot4$, $4\cdot5$ respectively; they are all positive multiples of $4$ not exceeding $20$. Conversely, every positive multiple of $4$ not exceeding $20$ appears in this list (the next multiple is $24>20$). Hence the defining property is: $x$ is a positive integer divisible by $4$ and $x\le20$.

(b) We have $1=1^2$, $4=2^2$, $9=3^2$, $16=4^2$, $25=5^2$. The elements are the squares of the positive integers from $1$ to $5$. Hence the defining property is: the element has the form $n^2$ where $n$ is a positive integer and $n\le5$.

So the two sets are $\{x\in\mathbb{N}^*\mid x \text{ is divisible by } 4,\ x\le20\}$ and $\{n^2\mid n\in\mathbb{N}^*,\ n\le5\}$ respectively.

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
The set $A=\{2, 3, 5, 7\}$ has $4$ elements. When forming a subset of $A$, each element gives $2$ choices: take it or leave it out. Therefore the number of subsets of $A$ is
$$2\cdot2\cdot2\cdot2=2^4=16$$
(including the empty set $\varnothing$ and $A$ itself).

For the subsets containing the element $2$, the element $2$ must be taken; each of the other three elements $3$, $5$, $7$ gives $2$ choices. Therefore the number of subsets containing $2$ is
$$2\cdot2\cdot2=2^3=8.$$

Check: the number of subsets not containing $2$ is also $2^3=8$, and $8+8=16$.

So $A$ has $16$ subsets, of which $8$ contain the element $2$.

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
The set $A=[-4, 1]$ consists of the numbers $x$ with $-4\le x\le1$, and $B=(-1, 3)$ consists of the numbers $x$ with $-1<x<3$.

The intersection $A\cap B$ consists of the numbers satisfying both $-4\le x\le1$ and $-1<x<3$, that is $-1<x\le1$. So $A\cap B=(-1, 1]$.

The union $A\cup B$ consists of the numbers in $A$ or in $B$. The two sets overlap, so their union covers everything from $-4$ to $3$ without a gap; the point $-4\in A$ is included and the point $3\notin B$ is not. So $A\cup B=[-4, 3)$.

The difference $A\setminus B$ consists of the numbers in $A$ but not in $B$. A number $x\notin B$ when $x\le-1$ or $x\ge3$; combining with $-4\le x\le1$ we get $-4\le x\le-1$. The point $-1\in A$ and $-1\notin B$, so it is included. So $A\setminus B=[-4, -1]$.

The difference $B\setminus A$ consists of the numbers in $B$ but not in $A$. A number $x\notin A$ when $x<-4$ or $x>1$; combining with $-1<x<3$ we get $1<x<3$. The point $1\in A$, so it is left out. So $B\setminus A=(1, 3)$.

So $A\cap B=(-1, 1]$, $A\cup B=[-4, 3)$, $A\setminus B=[-4, -1]$ and $B\setminus A=(1, 3)$.

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
The complement of $A$ in $\mathbb{R}$ is $C_{\mathbb{R}}A=\mathbb{R}\setminus A$, which consists of the real numbers not in $A$.

We have $A=(-\infty, -2]\cup(3, +\infty)$, that is, $x\in A$ when $x\le-2$ or $x>3$. Hence $x\notin A$ when both $x>-2$ and $x\le3$ hold, that is, $-2<x\le3$.

Checking the endpoints: the point $-2\in A$, so it is left out; the point $3\notin A$, so it is included.

So $C_{\mathbb{R}}A=(-2, 3]$.

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
We have $B=\{x\in\mathbb{Z}\mid -2\le x\le2\}=\{-2, -1, 0, 1, 2\}$, and $A=[-1, 4)$ consists of the real numbers $x$ with $-1\le x<4$.

a) **True.** Among the elements of $B$, the numbers $-1$, $0$, $1$, $2$ all satisfy $-1\le x<4$, so they belong to $A$; and $-2<-1$, so $-2\notin A$. Hence $A\cap B=\{-1, 0, 1, 2\}$.

b) **False.** The number $-1.5$ lies in $[-2, 4)$ but $-1.5\notin A$ (since $-1.5<-1$) and $-1.5\notin B$ (it is not an integer), so $-1.5\notin A\cup B$. In fact $A\cup B=\{-2\}\cup[-1, 4)$, which differs from $[-2, 4)$.

c) **True.** By a), the only element of $B$ not in $A$ is $-2$. Hence $B\setminus A=\{-2\}$.

d) **False.** The integers in $A$ are $-1$, $0$, $1$, $2$, $3$ (the number $4\notin A$). So $A$ contains $5$ integers, not $4$.

So statements a), c) are true; statements b), d) are false.

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
Let $A$ be the set of students who like football and $B$ the set of students who like swimming. We have $n(A)=32$ and $n(B)=25$.

Since $9$ students like neither sport, the number of students who like at least one sport is
$$n(A\cup B)=50-9=41.$$

Using the formula $n(A\cup B)=n(A)+n(B)-n(A\cap B)$, we have
$$41=32+25-n(A\cap B).$$

Hence $n(A\cap B)=57-41=16$.

Check: $32-16=16$ students like only football, $25-16=9$ like only swimming, and $16+9+16=41$ like at least one sport.

So $16$ students like both.

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
Let $A$ be the set of customers who have been to Ha Long and $B$ the set of customers who have been to Sa Pa. We have $n(A)=70$, $n(B)=55$ and $n(A\cap B)=30$; the total number of customers asked is $120$.

The number of customers who have been to at least one of the two places is
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)=70+55-30=95.$$

The number who have been only to Ha Long is $70-30=40$, and the number who have been only to Sa Pa is $55-30=25$. So the number who have been to exactly one of the two places is $40+25=65$ (also equal to $95-30=65$).

The number who have been to neither place is $120-95=25$.

So $65$ customers have been to exactly one of the two places, and $25$ customers have been to neither.

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
(a) We have $x^2\le4\iff-2\le x\le2$. Hence $A=[-2, 2]$.

(b) For every $x\in A$ we have $-2\le x\le2$, and all these values satisfy $-3<x<3$, that is $x\in B$. Hence the statement "$\forall x\in A,\ x\in B$" is true (because $A\subset B$). Its negation is "$\exists x\in A,\ x\notin B$".

(c) The statement "$\forall x\in B,\ x\in A$" is false. Indeed, take $x=2.5$: since $-3<2.5<3$ we have $2.5\in B$, but $2.5^2=6.25>4$, so $2.5\notin A$. This is a counterexample.

So $A=[-2, 2]$; the statement in (b) is true; the statement in (c) is false.

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
A set $X$ satisfies $\{1, 2\}\subset X\subset\{1, 2, 3, 4, 5\}$ (here the symbol $\subset$ also allows the two sets to be equal) if and only if $X$ contains the two elements $1$, $2$ and every element of $X$ belongs to $\{1, 2, 3, 4, 5\}$.

So $1$ and $2$ are always in $X$, while each of the three elements $3$, $4$, $5$ gives $2$ choices: in $X$ or not in $X$.

Therefore the number of sets $X$ is
$$2\cdot2\cdot2=2^3=8,$$
ranging from $X=\{1, 2\}$ (none of $3$, $4$, $5$ taken) to $X=\{1, 2, 3, 4, 5\}$ (all three taken).

So there are $8$ sets $X$ satisfying the condition.

**Answer.** $8$.
:::

## Mini test

:::quiz
::mc TH
Let $A=\{x\in\mathbb{Z}\mid -2\le x<3\}$. The number of elements of $A$ is
A. $4$.
B. $5$.
C. $6$.
D. $3$.
::key B
$A=\{-2, -1, 0, 1, 2\}$ has $5$ elements. Counting $3$ as well (the sign "$<$" excludes $3$) gives $6$; leaving out $-2$ gives $4$.

::mc TH
Let $A=(-1, 4]$ and $B=[2, 6)$. The set $A\cap B$ is
A. $[2, 4]$.
B. $(2, 4)$.
C. $(-1, 6)$.
D. $[2, 4)$.
::key A
We need $-1<x\le 4$ and $2\le x<6$, that is $2\le x\le 4$. Both $2$ and $4$ belong to both sets, so they are included; $(-1, 6)$ is the union, not the intersection.

::mc NB
The complement of $[1, +\infty)$ in $\mathbb{R}$ is
A. $(-\infty, 1]$.
B. $(-\infty, 1)$.
C. $(1, +\infty)$.
D. $(-\infty, -1)$.
::key B
The complement consists of the real numbers not in $[1, +\infty)$, that is $x<1$. The point $1$ belongs to the given set, so it is not in the complement.

::mc TH
Let $A=\{1, 2, 3, 4, 5\}$ and let $B$ be the set of natural-number divisors of $6$. The set $A\setminus B$ is
A. $\{4, 5\}$.
B. $\{6\}$.
C. $\{1, 2, 3\}$.
D. $\{4, 5, 6\}$.
::key A
$B=\{1, 2, 3, 6\}$. $A\setminus B$ consists of the elements of $A$ that are not in $B$: $4$ and $5$. Option B is $B\setminus A$ and option C is $A\cap B$.

::tf TH TH TH VD
Let $A=[-2, 3)$ and $B=(0, 5]$.
a) $A\cup B=[-2, 5]$.
b) $A\cap B=[0, 3)$.
c) $A\setminus B=[-2, 0]$.
d) $B\setminus A$ contains exactly $3$ integers.
::key T F T T
a) True: the two intervals join up from $-2$ (included) to $5$ (included). b) False: $0\notin B$, so $A\cap B=(0, 3)$. c) True: $0\notin B$, so $0$ stays in $A\setminus B$. d) True: $B\setminus A=[3, 5]$ contains $3, 4, 5$.

::sa VD
How many sets $X$ are subsets of $\{1, 2, 3, 4, 5, 6\}$ that contain the element $1$ but do not contain the element $6$?
::key 16
The element $1$ must be in and the element $6$ must be out. Each of $2, 3, 4, 5$ has $2$ choices (in or out), so there are $2^4=16$ sets.

::sa VD
Class 10B has $40$ students: $25$ like maths, $18$ like literature and $7$ like both subjects. How many students like **exactly one** of the two subjects?
::key 29
Maths only: $25-7=18$; literature only: $18-7=11$. Exactly one subject: $18+11=29$ students (the sum $25+18-7=36$ is the number who like at least one subject).
:::
