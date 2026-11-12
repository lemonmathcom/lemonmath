---
title: The binomial theorem
description: Expand (a+b)⁴ and (a+b)⁵ with combinations and Pascal's triangle, find a coefficient, sum the coefficients and approximate powers.
minutes: 20
---

:::goals
- Understand why the coefficients of $(a+b)^n$ are the binomial coefficients $\binom{n}{k}$.
- Expand $(a+b)^4$ and $(a+b)^5$, including when $a$ and $b$ carry coefficients or minus signs.
- Find a coefficient or the constant term in an expansion with exponent $4$ or $5$.
- Find the sum of the coefficients and approximate powers such as $1.05^4$.
:::

Minh puts $20$ million dong into a savings account at $5\%$ interest a year, and the interest is added to the balance at the end of each year. After $4$ years he has $20\cdot1.05^4$ million dong. Without a calculator, how can we compute $1.05^4$ quickly and exactly? And if we only need to know roughly how many million he has, is there a shorter way to estimate it?

The first trick is to split the awkward number into two easy ones: $1.05^4=(1+0.05)^4$. Now the question is: what do you get when you multiply $(a+b)$ by itself four times? Doing it by hand is long, and it is easy to drop a term. Luckily the coefficients in the answer are not random at all; they are the very numbers you met when counting in [Permutations, arrangements and combinations](lesson:permutations-combinations). Once you see why, you can write the expansion almost without working.

## Where do the coefficients come from?

Let us start with a small power, $(a+b)^3=(a+b)(a+b)(a+b)$, and multiply it out slowly to see what happens. Each term of the product is made by taking from **each bracket** either an $a$ or a $b$, and multiplying. For example, taking $b$ from the second bracket and $a$ from the other two gives $a\cdot b\cdot a=a^2b$.

| Brackets giving $b$ | Term | Ways to choose the brackets giving $b$ |
|---|---|---|
| $0$ | $a^3$ | $\binom{3}{0}=1$ |
| $1$ | $a^2b$ | $\binom{3}{1}=3$ |
| $2$ | $ab^2$ | $\binom{3}{2}=3$ |
| $3$ | $b^3$ | $\binom{3}{3}=1$ |

Collecting like terms gives exactly the familiar identity:

$$(a+b)^3=a^3+3a^2b+3ab^2+b^3.$$

Look at the last column of the table: the $3$ in front of $a^2b$ did not appear by chance. It counts the ways to pick one bracket to give $b$. In general, the coefficient of $a^{3-k}b^k$ is the number of ways to choose $k$ of the $3$ brackets to give $b$, that is $\binom{3}{k}$. Nothing in this argument depends on the number $3$, so it works for any exponent.

## The expansion for $n=4$ and $n=5$

:::theorem The binomial theorem for $n=4$ and $n=5$
$$\begin{aligned}(a+b)^4&=\binom{4}{0}a^4+\binom{4}{1}a^3b+\binom{4}{2}a^2b^2+\binom{4}{3}ab^3+\binom{4}{4}b^4\\&=a^4+4a^3b+6a^2b^2+4ab^3+b^4,\\[4pt](a+b)^5&=\binom{5}{0}a^5+\binom{5}{1}a^4b+\binom{5}{2}a^3b^2+\binom{5}{3}a^2b^3+\binom{5}{4}ab^4+\binom{5}{5}b^5\\&=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5.\end{aligned}$$
:::

**Why?** As with $(a+b)^3$: the term $a^{n-k}b^k$ appears each time we choose $k$ of the $n$ brackets to give $b$, and there are $\binom{n}{k}$ such choices. Each expansion has $n+1$ terms; the power of $a$ falls from $n$ to $0$, the power of $b$ rises from $0$ to $n$, and the two powers always add up to $n$.

The coefficients form **Pascal's triangle**: each number (except the $1$s at the ends) is the sum of the two numbers just above it, because $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}$.

$$\begin{array}{ccccccccccc}
 & & & & & 1 & & & & & \\
 & & & & 1 & & 1 & & & & \\
 & & & 1 & & 2 & & 1 & & & \\
 & & 1 & & 3 & & 3 & & 1 & & \\
 & 1 & & 4 & & 6 & & 4 & & 1 & \\
1 & & 5 & & 10 & & 10 & & 5 & & 1
\end{array}$$

Row $n$ (counting the top row as row $0$) lists $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}$.

## Expanding a binomial

To expand, you only need three steps: identify $a$ and $b$ (carry their coefficients and signs with them), take the row of coefficients from Pascal's triangle, and raise **both** $a$ and $b$ to their powers. The last step is where terms most often go wrong, so write the brackets in full to be safe.

:::example Expanding $(x+2)^4$
Expand $(x+2)^4$.

**Solution.** Apply the formula with $a=x$, $b=2$ and the row $1, 4, 6, 4, 1$:

$$\begin{aligned}(x+2)^4&=x^4+4x^3\cdot2+6x^2\cdot2^2+4x\cdot2^3+2^4\\&=x^4+8x^3+24x^2+32x+16.\end{aligned}$$

So $(x+2)^4=x^4+8x^3+24x^2+32x+16$.

**Check.** Put $x=1$: the left side is $3^4=81$, the right side is $1+8+24+32+16=81$.
:::

A minus sign is nothing to fear. Just treat $b$ as a negative number: its even powers are positive and its odd powers are negative, so the signs of the terms simply alternate.

:::example With a minus sign
Expand $(2x-1)^5$.

**Solution.** Take $a=2x$, $b=-1$ and the row $1, 5, 10, 10, 5, 1$. Raise both $2$ and $x$ to the powers:

$$\begin{aligned}(2x-1)^5&=(2x)^5+5(2x)^4(-1)+10(2x)^3(-1)^2+10(2x)^2(-1)^3+5(2x)(-1)^4+(-1)^5\\&=32x^5-80x^4+80x^3-40x^2+10x-1.\end{aligned}$$

So $(2x-1)^5=32x^5-80x^4+80x^3-40x^2+10x-1$.
:::

## Finding just one coefficient

Questions often ask for just one term. Writing out the whole expansion takes time and invites mistakes. Instead, we write one "typical" term: in $(a+b)^n$ the term containing $b^k$ is $\binom{n}{k}a^{n-k}b^k$. Then we just choose the $k$ that lands on the term we want.

:::example The coefficient of $x^3$
Find the coefficient of $x^3$ in the expansion of $(1+2x)^5$.

**Solution.** The term containing $(2x)^k$ is $\binom{5}{k}\cdot1^{5-k}(2x)^k=\binom{5}{k}2^kx^k$. The power of $x$ is $3$ when $k=3$:

$$\binom{5}{3}\cdot2^3=10\cdot8=80.$$

So the coefficient of $x^3$ is $80$.
:::

What if $x$ also sits in a denominator? The method is exactly the same, with a little more care: collect all the powers of $x$ into one exponent, then set that exponent equal to the power we want.

:::example The constant term
Find the term independent of $x$ in the expansion of $\left(x+\dfrac2x\right)^4$ (with $x\ne0$).

**Solution.** The general term is

$$\binom{4}{k}\,x^{4-k}\left(\dfrac2x\right)^k=\binom{4}{k}\,2^k\,x^{4-2k}.$$

The constant term has $4-2k=0$, that is $k=2$:

$$\binom{4}{2}\cdot2^2=6\cdot4=24.$$

So the constant term is $24$.
:::

## Sum of coefficients and approximations

Here is a small trick worth remembering. Put $x=1$ into a polynomial and every power of $x$ becomes $1$, so each term is left with just its coefficient, and we get the **sum of the coefficients** straight away. Putting $a=b=1$ into the expansion gives $\binom{5}{0}+\binom{5}{1}+\cdots+\binom{5}{5}=2^5=32$.

:::example Sum of the coefficients
Find the sum of the coefficients in the expansion of $(3x-1)^5$.

**Solution.** No need to expand: put $x=1$ into both sides of the expansion identity:

$$(3\cdot1-1)^5=2^5=32.$$

So the sum of the coefficients is $32$. (The full expansion is $243x^5-405x^4+270x^3-90x^2+15x-1$, and $243-405+270-90+15-1=32$.)
:::

We now have all the tools to go back to Minh's savings. Notice how quickly the terms shrink: that is exactly why an estimate from the first few terms works so well.

:::example Minh's savings
Compute $1.05^4$ with the expansion, then the amount Minh has after $4$ years. How far off is the result if we use only the first three terms?

**Solution.** Write $1.05=1+0.05$ and use the row $1, 4, 6, 4, 1$:

$$\begin{aligned}1.05^4&=1+4\cdot0.05+6\cdot0.05^2+4\cdot0.05^3+0.05^4\\&=1+0.2+0.015+0.0005+0.00000625\\&=1.21550625.\end{aligned}$$

After $4$ years the amount is $20\,000\,000\cdot1.21550625=24\,310\,125$ dong.

The first three terms give $1+0.2+0.015=1.215$, that is $24\,300\,000$ dong, only $10\,125$ dong less.

So after $4$ years Minh has $24\,310\,125$ dong; the estimate from the first three terms is about $24.3$ million dong, good enough when a round figure is all we need.
:::

:::warning Common mistakes
These slips turn up in tests again and again. Read them carefully once, and you will know where to stop and check in your own work.

- **Forgetting to raise the coefficient.** Writing the term $10(2x)^3(-1)^2$ as $10\cdot2x^3$. Wrong, because $(2x)^3=8x^3$. Right: $10\cdot8x^3=80x^3$.
- **Losing the signs.** Writing every term of $(2x-1)^5$ as positive. Wrong, because $(-1)^k$ is negative for odd $k$. Right: the signs alternate $+,-,+,-,+,-$.
- **Writing $(a+b)^n=a^n+b^n$.** Wrong: with $a=b=1$, $n=4$, the left side is $16$ and the right side is $2$. Right: there must be all $n+1$ terms.
- **Miscounting the position of a term.** The term containing $b^k$ is the **$(k+1)$-th** term (counting starts at $k=0$). For example, in $(a+b)^5$ the third term is $\binom{5}{2}a^3b^2=10a^3b^2$.
:::

## Key terms

:::terms
- binomial theorem | công thức nhị thức Newton
- binomial coefficient | hệ số nhị thức
- Pascal's triangle | tam giác Pascal
- general term | số hạng tổng quát
- expansion | khai triển
- constant term | số hạng không chứa $x$
- sum of coefficients | tổng các hệ số
- approximation | giá trị gần đúng
:::

## Summary

- The coefficient of $a^{n-k}b^k$ in $(a+b)^n$ is $\binom{n}{k}$: the number of ways to choose $k$ brackets to give $b$.
- $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.
- $(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$.
- The coefficients are a row of Pascal's triangle; the expansion has $n+1$ terms.
- One coefficient: write $\binom{n}{k}a^{n-k}b^k$, collect the powers of $x$, choose $k$.
- Sum of coefficients: put $x=1$. Approximating $(1+h)^n$ for small $h$: use the first few terms.

The question about $1.05^4$ at the start turns out not to need a calculator: remember that each coefficient counts ways of choosing brackets, add a few terms, and you are done. If you forget the formula, just draw Pascal's triangle again; it is always there to help.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, and do not worry about mistakes; then open the solution and compare it with your own thinking.

:::exercise
Expand $(x+1)^5$.

::hint
**What you need:** row $5$ of Pascal's triangle is $1, 5, 10, 10, 5, 1$.

**Steps:**
1. Write the decreasing powers of $x$.
2. Match them with the row of coefficients.

::solution
With $a=x$, $b=1$, every power of $b$ equals $1$.

**Answer.** $(x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1$.
:::

:::exercise
Expand $(x-3)^4$.

::hint
**What you need:** the formula for $(a+b)^4$ with $b=-3$; the signs alternate.

**Steps:**
1. Compute $(-3)^1$, $(-3)^2$, $(-3)^3$, $(-3)^4$.
2. Multiply by the row $1, 4, 6, 4, 1$.

::solution
$$(x-3)^4=x^4+4x^3(-3)+6x^2\cdot9+4x(-27)+81.$$

**Answer.** $(x-3)^4=x^4-12x^3+54x^2-108x+81$.
:::

:::exercise
Find the coefficient of $x^2$ in the expansion of $(3+x)^5$.

::hint
**What you need:** the term containing $x^k$ in $(3+x)^5$ is $\binom{5}{k}3^{5-k}x^k$.

**Steps:**
1. Choose $k=2$.
2. Compute $\binom{5}{2}\cdot3^3$.

::solution
$\binom{5}{2}\cdot3^3=10\cdot27=270$.

**Answer.** $270$.
:::

:::exercise
Simplify $(x+y)^4+(x-y)^4$.

::hint
**What you need:** in $(x-y)^4$ the terms with odd powers of $y$ change sign.

**Steps:**
1. Expand both expressions.
2. Add: the terms with $y$ and $y^3$ cancel.

::solution
$(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$ and $(x-y)^4=x^4-4x^3y+6x^2y^2-4xy^3+y^4$. Adding, the terms $\pm4x^3y$ and $\pm4xy^3$ cancel.

**Answer.** $2x^4+12x^2y^2+2y^4$.
:::

:::exercise
Consider the expansion of $(1-2x)^5$. Is each claim true or false?

a) The expansion has $6$ terms.
b) The coefficient of $x^2$ is $40$.
c) The sum of the coefficients is $1$.
d) The term containing $x^5$ is $32x^5$.

::hint
**What you need:** $(a+b)^5$ has $6$ terms; the term containing $x^k$ is $\binom{5}{k}(-2x)^k$; the sum of coefficients comes from putting $x=1$.

**Steps:**
1. Write the general term $\binom{5}{k}(-2)^kx^k$.
2. Put $k=2$ and $k=5$.
3. Put $x=1$ for the sum of coefficients.

::solution
a) **True.** Exponent $5$ gives $5+1=6$ terms.

b) **True.** $\binom{5}{2}(-2)^2=10\cdot4=40$.

c) **False.** Putting $x=1$: $(1-2)^5=-1$.

d) **False.** $\binom{5}{5}(-2)^5x^5=-32x^5$.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
Find the coefficient of $x^4$ in the expansion of $\left(x^2+\dfrac2x\right)^5$ (with $x\ne0$).

::hint
**What you need:** the general term $\binom{5}{k}(x^2)^{5-k}\left(\dfrac2x\right)^k$.

**Steps:**
1. Collect the powers of $x$: $2(5-k)-k=10-3k$.
2. Solve $10-3k=4$.
3. Compute the coefficient.

::solution
$\binom{5}{k}(x^2)^{5-k}\left(\dfrac2x\right)^k=\binom{5}{k}2^kx^{10-3k}$. We need $10-3k=4$, so $k=2$: the coefficient is $\binom{5}{2}\cdot2^2=10\cdot4=40$.

**Answer.** $40$.
:::

:::exercise
A water filter costs $10$ million dong, and each year its value falls by $2\%$ of the previous year's value. Use the first three terms of the expansion of $(1-0.02)^5$ to estimate its value after $5$ years.

::hint
**What you need:** after $5$ years the value is $10\cdot0.98^5$ million dong; $(1+h)^5\approx1+5h+10h^2$ for small $h$.

**Steps:**
1. Write $0.98^5=(1-0.02)^5$.
2. Compute $1+5(-0.02)+10(-0.02)^2$.
3. Multiply by $10$ million dong.

::solution
$$0.98^5\approx1-5\cdot0.02+10\cdot0.02^2=1-0.1+0.004=0.904.$$
The filter is worth about $10\,000\,000\cdot0.904=9\,040\,000$ dong. (The exact value is $9\,039\,207.968$ dong, less than $800$ dong away.)

**Answer.** About $9\,040\,000$ dong.
:::

:::exercise
(Review of [Permutations, arrangements and combinations](lesson:permutations-combinations)) Let $X=\{1, 2, 3, 4, 5\}$.

(a) For each $k=0, 1, \dots, 5$, how many subsets of $X$ have $k$ elements? (b) Use the expansion to explain why $X$ has $32$ subsets in all.

::hint
**What you need:** a $5$-element set has $\binom{5}{k}$ subsets with $k$ elements; put $a=b=1$ in $(a+b)^5$.

**Steps:**
1. Compute $\binom{5}{0}, \dots, \binom{5}{5}$.
2. Add them and compare with $(1+1)^5$.

::solution
(a) $\binom{5}{0}=1$, $\binom{5}{1}=5$, $\binom{5}{2}=10$, $\binom{5}{3}=10$, $\binom{5}{4}=5$, $\binom{5}{5}=1$.

(b) Put $a=b=1$ in the expansion of $(a+b)^5$:
$$\binom{5}{0}+\binom{5}{1}+\cdots+\binom{5}{5}=(1+1)^5=32.$$

**Answer.** (a) $1, 5, 10, 10, 5, 1$; (b) $1+5+10+10+5+1=2^5=32$.
:::

:::exercise Challenge
Find the coefficient of $x^2$ in the expansion of $(1+x)(1+2x)^4$.

::hint
**What you need:** $x^2$ in the product comes from $1\cdot(\text{the } x^2 \text{ term})$ and $x\cdot(\text{the } x \text{ term})$.

**Steps:**
1. Find the coefficients of $x$ and $x^2$ in $(1+2x)^4$.
2. Add the two contributions.

::solution
In $(1+2x)^4$: the coefficient of $x$ is $\binom{4}{1}\cdot2=8$ and of $x^2$ is $\binom{4}{2}\cdot2^2=24$. In the product, $x^2$ comes from $1\cdot24x^2$ and $x\cdot8x$, so the coefficient is $24+8=32$.

**Answer.** $32$.
:::

:::exercise Challenge
Without a calculator, compare $1.1^5$ with $1.6$.

::hint
**What you need:** $(1+0.1)^5$ expands with the row $1, 5, 10, 10, 5, 1$; every term is positive.

**Steps:**
1. Compute the first three terms: do they already reach $1.6$?
2. If needed, compute all six terms.

::solution
$$1.1^5=1+5\cdot0.1+10\cdot0.01+10\cdot0.001+5\cdot0.0001+0.00001=1.61051.$$
The first three terms already give $1+0.5+0.1=1.6$, and the other terms are all positive.

**Answer.** $1.1^5=1.61051>1.6$.
:::

## Mini test

:::quiz
::mc
The expansion of $(x-1)^4$ is
A. $x^4-4x^3+6x^2-4x+1$.
B. $x^4+4x^3+6x^2+4x+1$.
C. $x^4-1$.
D. $x^4-4x^3-6x^2-4x-1$.
::key A
Use the row $1, 4, 6, 4, 1$ with $b=-1$: odd powers of $-1$ are negative and even powers positive, so the signs alternate. Option C is the mistake $(a+b)^n=a^n+b^n$.

::mc
The coefficient of $x^3$ in the expansion of $(2x+1)^4$ is
A. $4$.
B. $8$.
C. $24$.
D. $32$.
::key D
The term containing $x^3$ is $\binom{4}{3}(2x)^3\cdot1=4\cdot8x^3=32x^3$. Option A forgets to raise the $2$ to the power; B forgets $\binom{4}{3}$; C is the coefficient of $x^2$.

::mc
The term independent of $x$ in the expansion of $\left(x-\dfrac2x\right)^4$ (with $x\ne0$) is
A. $-24$.
B. $6$.
C. $12$.
D. $24$.
::key D
The general term is $\binom{4}{k}x^{4-k}\left(-\dfrac2x\right)^k=\binom{4}{k}(-2)^kx^{4-2k}$. We need $4-2k=0$, so $k=2$: $6\cdot(-2)^2=24$ (an even power, so positive).

::mc
The sum of the coefficients in the expansion of $(2x-3)^5$ is
A. $-1$.
B. $1$.
C. $3125$.
D. $-243$.
::key A
Put $x=1$: $(2-3)^5=(-1)^5=-1$. Option D comes from putting $x=0$ (that gives the constant term), and C is $(2+3)^5$ with the minus sign lost.

::tf
Let $(1+3x)^4=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$.
a) $a_1=12$.
b) $a_2=18$.
c) $a_0+a_1+a_2+a_3+a_4=256$.
d) The third term of the expansion is $54x^2$.
::key T F T T
a) True: $\binom{4}{1}\cdot3=12$. b) False: $a_2=\binom{4}{2}\cdot3^2=54$ (the value $18$ comes from forgetting to square the $3$). c) True: putting $x=1$ gives $4^4=256$. d) True: the third term has $k=2$, and it is $54x^2$.

::sa
Find the coefficient of $x^2$ in the expansion of $(x-2)^5$.
::key -80
The term containing $x^2$ is $\binom{5}{3}x^2(-2)^3=10\cdot(-8)x^2=-80x^2$.

::sa
Find the coefficient of $x^3$ in the expansion of $(x+2)(x-1)^4$.
::key -2
$(x-1)^4=x^4-4x^3+6x^2-4x+1$. The $x^3$ term of the product comes from $x\cdot6x^2$ and $2\cdot(-4x^3)$, so the coefficient is $6-8=-2$.
:::
