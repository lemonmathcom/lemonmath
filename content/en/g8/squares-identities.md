---
title: Difference of two squares. Square of a sum or a difference
description: Learn the identities (a+b)², (a−b)² and a²−b² to expand quickly, calculate mentally and simplify expressions, then apply them to real problems.
minutes: 35
---

:::goals
- Remember and prove the identities for $(a+b)^2$, $(a-b)^2$ and $a^2-b^2$.
- Expand the square of a sum, the square of a difference and the product $(a-b)(a+b)$ quickly, without multiplying term by term.
- Recognise the shape of an identity to write an expression as a square or as a product.
- Use the identities for mental calculation, for simplifying expressions and for real problems.
:::

Can you work out $51^2$, $99^2$ or $52\cdot48$ in your head, without a calculator? Multiplying $51\cdot51$ by hand takes a while. But $51=50+1$, and we shall see that $51^2$ needs only three very simple calculations. The trick comes from the **standard identities**: equalities that hold for all values of the letters and give very neat expansions.

This lesson has the first three of these identities. They are used so often that you should know them by heart.

## The square of a sum and of a difference

### Explore: the square of $51$

We write $51=50+1$ and multiply two polynomials as in the last lesson:
$$(50+1)^2=(50+1)(50+1)=50\cdot50+50\cdot1+1\cdot50+1\cdot1=2500+100+1=2601.$$
The two cross products $50\cdot1$ and $1\cdot50$ are equal, so together they make $2\cdot50\cdot1=100$. The same happens for any two numbers $a$ and $b$.

:::theorem Square of a sum
For any two numbers (or expressions) $a$ and $b$,
$$(a+b)^2=a^2+2ab+b^2.$$
The square of a sum equals the square of the first number, plus twice the product of the two numbers, plus the square of the second number.
:::

Why? We have $(a+b)^2=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2$.

We can also see it as an area: a square of side $a+b$ is made of a square of side $a$ (area $a^2$), a square of side $b$ (area $b^2$) and two $a\times b$ rectangles (each of area $ab$). Adding the four areas gives $a^2+2ab+b^2$.

:::theorem Square of a difference
For any two numbers (or expressions) $a$ and $b$,
$$(a-b)^2=a^2-2ab+b^2.$$
The square of a difference equals the square of the first number, minus twice the product of the two numbers, plus the square of the second number.
:::

Why? We have $(a-b)^2=(a-b)(a-b)=a^2-ab-ba+b^2=a^2-2ab+b^2$. We could also replace $b$ by $-b$ in the previous identity.

**Going deeper.** The term $b^2$ always has a $+$ sign in both identities, because $(-b)^2=b^2$. Only the middle term $2ab$ changes sign, following the sign inside the bracket. This is also why $(a-b)^2=(b-a)^2$.

## The difference of two squares

We multiply $(a-b)$ by $(a+b)$:
$$(a-b)(a+b)=a^2+ab-ba-b^2=a^2-b^2,$$
because the two terms $ab$ and $-ba$ cancel each other.

:::theorem Difference of two squares
For any two numbers (or expressions) $a$ and $b$,
$$a^2-b^2=(a-b)(a+b).$$
The difference of two squares equals the product of the difference and the sum of the two numbers.
:::

:::note How to remember
- $(a+b)^2$ and $(a-b)^2$ both have three terms: $a^2$, $\pm2ab$, $b^2$.
- $a^2-b^2$ has only two terms, and is the product of two factors $(a-b)$ and $(a+b)$.
:::

The identities hold for monomials and polynomials too, provided we treat $a$ and $b$ as expressions. For instance $(2x)^2=4x^2$, not $2x^2$.

## Examples

We begin with the square of a sum and of a difference.

:::example Expanding squares
Expand:

a) $(x+4)^2$.

b) $(3x-2y)^2$.

**Solution.** a) With $a=x$, $b=4$:
$$(x+4)^2=x^2+2\cdot x\cdot4+4^2=x^2+8x+16.$$

b) With $a=3x$, $b=2y$:
$$(3x-2y)^2=(3x)^2-2\cdot3x\cdot2y+(2y)^2=9x^2-12xy+4y^2.$$

So a) $x^2+8x+16$; b) $9x^2-12xy+4y^2$.
:::

Next we use the difference of two squares.

:::example Product of a difference and a sum
Expand:

a) $(x-3)(x+3)$.

b) $(2x+5y)(2x-5y)$.

**Solution.** a) With $a=x$, $b=3$: $(x-3)(x+3)=x^2-3^2=x^2-9$.

b) With $a=2x$, $b=5y$: $(2x+5y)(2x-5y)=(2x)^2-(5y)^2=4x^2-25y^2$.

So a) $x^2-9$; b) $4x^2-25y^2$.
:::

Now we use the identities for mental calculation.

:::example Mental calculation
Calculate in your head:

a) $51^2$.

b) $99^2$.

c) $52\cdot48$.

**Solution.** a) $51^2=(50+1)^2=50^2+2\cdot50\cdot1+1^2=2500+100+1=2601$.

b) $99^2=(100-1)^2=100^2-2\cdot100\cdot1+1^2=10\,000-200+1=9801$.

c) $52\cdot48=(50+2)(50-2)=50^2-2^2=2500-4=2496$.

So a) $2601$; b) $9801$; c) $2496$.
:::

We can also read the identities backwards.

:::example Writing as a square or as a product
Write each expression as the square of a sum (or difference), or as a product:

a) $x^2+10x+25$.

b) $4x^2-12x+9$.

c) $9x^2-16$.

**Solution.** a) We have $x^2+10x+25=x^2+2\cdot x\cdot5+5^2=(x+5)^2$.

b) We have $4x^2-12x+9=(2x)^2-2\cdot2x\cdot3+3^2=(2x-3)^2$.

c) We have $9x^2-16=(3x)^2-4^2=(3x-4)(3x+4)$.

So a) $(x+5)^2$; b) $(2x-3)^2$; c) $(3x-4)(3x+4)$.
:::

Next we simplify and evaluate.

:::example Simplifying an expression
Simplify $(x+3)^2-(x-2)(x+2)$ and find its value at $x=1$.

**Solution.** We use two identities:
$$\begin{aligned} (x+3)^2-(x-2)(x+2)&=(x^2+6x+9)-(x^2-4)\\ &=x^2+6x+9-x^2+4\\ &=6x+13. \end{aligned}$$
At $x=1$ the value is $6\cdot1+13=19$.

So the expression equals $6x+13$, and equals $19$ when $x=1$.

**Remark.** Direct check: $(1+3)^2-(1-2)(1+2)=16-(-3)=19$, which agrees.
:::

Finally, a real problem about reshaping a square yard.

:::example Reshaping a yard (Application)
Suppose a square yard has side $x$ m. It is reshaped into a rectangular yard by making one side $5$ m longer and the other side $5$ m shorter. How does the area change? Find the result when $x=40$.

**Solution.**

*Understand the problem.* The old yard is a square of side $x$. The new yard is a rectangle with sides $(x+5)$ and $(x-5)$ (with $x>5$).

*Plan.* Find the area of the new yard using an identity, then compare it with the old area $x^2$.

*Carry out the plan.* The old area is $x^2$ (m²). The new area is
$$(x+5)(x-5)=x^2-25\ (\text{m}^2).$$
The difference of the two areas is $x^2-(x^2-25)=25$ (m²).

So the area decreases by $25$ m², for every value $x>5$. When $x=40$, the old yard has area $1600$ m² and the new one has area $45\cdot35=1575$ m².

*Look back.* The area drops by exactly $25=5^2$ m², independent of $x$. That is because $(x+5)(x-5)=x^2-5^2$. Check: $1600-1575=25$.
:::

:::warning Common mistakes
- **Forgetting the term $2ab$.** Wrong: $(x+3)^2=x^2+9$. Why it is wrong: it loses the two cross products $3x+3x$. Right: $(x+3)^2=x^2+6x+9$.
- **Wrong sign on the last term.** Wrong: $(x-4)^2=x^2-8x-16$. Why it is wrong: $(-4)^2=+16$. Right: $(x-4)^2=x^2-8x+16$.
- **Forgetting to square the coefficient.** Wrong: $(2x)^2=2x^2$. Why it is wrong: $(2x)^2=2^2\cdot x^2$. Right: $(2x)^2=4x^2$.
- **Mixing up the difference of two squares with the square of a difference.** Wrong: $x^2-9=(x-3)^2$. Why it is wrong: $(x-3)^2=x^2-6x+9$. Right: $x^2-9=(x-3)(x+3)$.
:::

**Connections.** These identities are special results of the multiplication of polynomials from the last lesson. They let us expand very quickly, and when read backwards they are the main tool for factorising polynomials in the lessons that follow.

## Key terms

:::terms
- square | bình phương
- identity | hằng đẳng thức
- square of a sum | bình phương của một tổng
- square of a difference | bình phương của một hiệu
- difference of two squares | hiệu hai bình phương
- expand | khai triển
- product | tích
- mental calculation | tính nhẩm
:::

## Summary

- $(a+b)^2=a^2+2ab+b^2$.
- $(a-b)^2=a^2-2ab+b^2$.
- $a^2-b^2=(a-b)(a+b)$.
- The identities hold for numbers, monomials and polynomials; note that $(2x)^2=4x^2$.
- They can be used for mental calculation and for simplifying expressions, and read backwards to write an expression as a square or as a product.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Expand:

a) $(x+7)^2$.

b) $(x-6)^2$.

c) $(2x+1)^2$.

::hint
**What you need:** $(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$.

**Steps:**
1. Identify $a$ and $b$.
2. Write the three terms $a^2$, $\pm2ab$, $b^2$.

::solution
a) $(x+7)^2=x^2+14x+49$.

b) $(x-6)^2=x^2-12x+36$.

c) $(2x+1)^2=4x^2+4x+1$.

So a) $x^2+14x+49$; b) $x^2-12x+36$; c) $4x^2+4x+1$.

**Answer.** a) $x^2+14x+49$. b) $x^2-12x+36$. c) $4x^2+4x+1$.
:::

:::exercise
Expand:

a) $(3x-2y)^2$.

b) $\left(\dfrac12x+3\right)^2$.

c) $(5x^2-y)^2$.

::hint
**What you need:** the identities hold when $a$ and $b$ are monomials.

**Steps:**
1. Identify $a$ and $b$ (remember to square both the coefficient and the variable).
2. Work out $a^2$, $2ab$, $b^2$.

::solution
a) $(3x-2y)^2=9x^2-12xy+4y^2$.

b) $\left(\dfrac12x+3\right)^2=\dfrac14x^2+3x+9$.

c) $(5x^2-y)^2=25x^4-10x^2y+y^2$.

So a) $9x^2-12xy+4y^2$; b) $\dfrac14x^2+3x+9$; c) $25x^4-10x^2y+y^2$.

**Answer.** a) $9x^2-12xy+4y^2$. b) $\dfrac14x^2+3x+9$. c) $25x^4-10x^2y+y^2$.
:::

:::exercise
Expand:

a) $(x-8)(x+8)$.

b) $(4x+3y)(4x-3y)$.

c) $(x^2+1)(x^2-1)$.

::hint
**What you need:** $(a-b)(a+b)=a^2-b^2$.

**Steps:**
1. Recognise the product of a difference and a sum.
2. Square the first number and subtract the square of the second.

::solution
a) $(x-8)(x+8)=x^2-64$.

b) $(4x+3y)(4x-3y)=16x^2-9y^2$.

c) $(x^2+1)(x^2-1)=x^4-1$.

So a) $x^2-64$; b) $16x^2-9y^2$; c) $x^4-1$.

**Answer.** a) $x^2-64$. b) $16x^2-9y^2$. c) $x^4-1$.
:::

:::exercise
Calculate mentally using identities:

a) $103^2$.

b) $98^2$.

c) $61\cdot59$.

::hint
**What you need:** write the given number as a sum or difference of a round number (a multiple of ten or a hundred) and a small number.

**Steps:**
1. Write $103=100+3$, $98=100-2$, $61\cdot59=(60+1)(60-1)$.
2. Apply the matching identity.

::solution
a) $103^2=(100+3)^2=10\,000+600+9=10\,609$.

b) $98^2=(100-2)^2=10\,000-400+4=9604$.

c) $61\cdot59=(60+1)(60-1)=60^2-1=3600-1=3599$.

So a) $10\,609$; b) $9604$; c) $3599$.

**Answer.** a) $10\,609$. b) $9604$. c) $3599$.
:::

:::exercise
Fill in the blanks to make a correct identity:

a) $x^2+10x+\ldots=(x+\ldots)^2$.

b) $9x^2-\ldots+4=(3x-2)^2$.

c) $\ldots-36=(x-6)(x+6)$.

::hint
**What you need:** compare with $a^2\pm2ab+b^2$ and $a^2-b^2$.

**Steps:**
1. Find $a$ and $b$ from the terms you are given.
2. Work out the missing term.

::solution
a) We have $a=x$ and $2ab=10x$, so $b=5$. Hence $x^2+10x+25=(x+5)^2$.

b) We have $a=3x$, $b=2$, so the middle term is $2\cdot3x\cdot2=12x$. Hence $9x^2-12x+4=(3x-2)^2$.

c) We have $(x-6)(x+6)=x^2-36$, so the blank is $x^2$.

So a) $25$ and $5$; b) $12x$; c) $x^2$.

**Answer.** a) $25$; $5$. b) $12x$. c) $x^2$.
:::

:::exercise
Simplify $B=(x+4)^2-(x-4)^2$ and find the value of $B$ at $x=3$.

::hint
**What you need:** expand the two squares, then subtract; when removing a bracket with a $-$ sign, change the sign of every term.

**Steps:**
1. Expand $(x+4)^2$ and $(x-4)^2$.
2. Subtract the two results, then substitute $x=3$.

::solution
We have $(x+4)^2=x^2+8x+16$ and $(x-4)^2=x^2-8x+16$. Hence
$$B=(x^2+8x+16)-(x^2-8x+16)=16x.$$
At $x=3$, $B=16\cdot3=48$. (Check: $7^2-(-1)^2=49-1=48$.)

So $B=16x$ and $B=48$ when $x=3$.

**Answer.** $B=16x$; $48$.
:::

:::exercise
A square garden has side $x$ m. A path $1$ m wide is built all the way round the outside of the garden. Write a polynomial for the area of the path, then find it when $x=10$.

::hint
**What you need:** area of the path $=$ area of the large square $-$ area of the garden.

**Steps:**
1. Find the side of the large square made of the garden and the path.
2. Use an identity, then substitute $x=10$.

::solution
The large square has side $x+1+1=x+2$ (m). The area of the path is
$$(x+2)^2-x^2=x^2+4x+4-x^2=4x+4\ (\text{m}^2).$$
When $x=10$, the area is $4\cdot10+4=44$ (m²). (Check: $12^2-10^2=144-100=44$.)

So the area of the path is $4x+4$ (m²), which equals $44$ m² when $x=10$.

**Answer.** $4x+4$ (m²); $44$ m².
:::

:::exercise
Suppose a rectangular plot has perimeter $20$ m and area $21$ m². Let its sides be $a$ and $b$ (in m). Find $a^2+b^2$, that is, the total area of the two squares built on the two sides.

::hint
**What you need:** $a^2+b^2=(a+b)^2-2ab$.

**Steps:**
1. Find $a+b$ from the perimeter and $ab$ from the area.
2. Substitute into the formula.

::solution
The perimeter is $2(a+b)=20$, so $a+b=10$. The area is $ab=21$. Hence
$$a^2+b^2=(a+b)^2-2ab=10^2-2\cdot21=100-42=58.$$
(Check: the sides are $3$ m and $7$ m, and $3^2+7^2=9+49=58$.)

So $a^2+b^2=58\ (\text{m}^2)$.

**Answer.** $58\ \text{m}^2$.
:::

:::exercise
Recall the lesson on cuboids. A cuboid has a square base of side $(2x+1)$ cm and height $5$ cm. Write a polynomial for the volume, then find it when $x=2$.

::hint
**What you need:** volume equals base area times height; the area of a square is the square of its side.

**Steps:**
1. Expand $(2x+1)^2$.
2. Multiply by $5$, then substitute $x=2$.

::solution
The base area is $(2x+1)^2=4x^2+4x+1\ (\text{cm}^2)$. The volume is
$$V=5(4x^2+4x+1)=20x^2+20x+5\ (\text{cm}^3).$$
When $x=2$, $V=80+40+5=125\ (\text{cm}^3)$. (Check: $5\cdot5^2=125$.)

So $V=20x^2+20x+5\ (\text{cm}^3)$, which equals $125\ \text{cm}^3$ when $x=2$.

**Answer.** $20x^2+20x+5$; $125\ \text{cm}^3$.
:::

:::exercise Challenge
Prove that the difference of the squares of two consecutive odd numbers is always divisible by $8$.

::hint
**What you need:** two consecutive odd numbers have the form $2k-1$ and $2k+1$, where $k$ is an integer.

**Steps:**
1. Write the difference $(2k+1)^2-(2k-1)^2$.
2. Use an identity, then take out $8$ as a factor.

::solution
Let the two consecutive odd numbers be $2k-1$ and $2k+1$. We have
$$(2k+1)^2-(2k-1)^2=(4k^2+4k+1)-(4k^2-4k+1)=8k.$$
Since $8k$ is a multiple of $8$, the difference of the squares of two consecutive odd numbers is divisible by $8$.

**Answer.** The difference equals $8k$, which is divisible by $8$.
:::

## Mini test

:::quiz
::mc
Expanding $(x+5)^2$ gives
A. $x^2+10x+25$.
B. $x^2+25$.
C. $x^2+5x+25$.
D. $x^2-10x+25$.
::key A
$(x+5)^2=x^2+2\cdot x\cdot5+5^2=x^2+10x+25$. A forgets the middle term, C gets $2ab$ wrong, D has the wrong sign on the middle term.

::mc
Expanding $(3x-2)^2$ gives
A. $9x^2-4$.
B. $9x^2-12x+4$.
C. $9x^2+12x+4$.
D. $9x^2-6x+4$.
::key B
$(3x-2)^2=(3x)^2-2\cdot3x\cdot2+2^2=9x^2-12x+4$. A is a difference of two squares, D gets $2ab$ wrong, C has the wrong sign on the middle term.

::mc
Expanding $(7x-y)(7x+y)$ gives
A. $49x^2-14xy+y^2$.
B. $7x^2-y^2$.
C. $49x^2-y^2$.
D. $49x^2+y^2$.
::key C
$(7x-y)(7x+y)=(7x)^2-y^2=49x^2-y^2$. B forgets to square the coefficient $7$, A is a square of a difference, D has the wrong sign.

::mc
The expression $x^2-12x+36$ equals
A. $(x+6)^2$.
B. $(x-6)(x+6)$.
C. $(x-12)^2$.
D. $(x-6)^2$.
::key D
$x^2-12x+36=x^2-2\cdot x\cdot6+6^2=(x-6)^2$. A has the wrong sign, B equals $x^2-36$, C has middle term $-24x$.

::tf
Consider the expression $(x-3)^2$.
a) $(x-3)^2=x^2-9$.
b) $(x-3)^2=x^2-6x+9$.
c) $(x-3)^2=(3-x)^2$.
d) $(x-3)^2=(x-3)(x+3)$.
::key F T T F
a) False: the term $-6x$ is missing. b) True: $x^2-2\cdot x\cdot3+3^2$. c) True: $(3-x)^2=9-6x+x^2$. d) False: $(x-3)(x+3)=x^2-9$.

::sa
Calculate $51\cdot49$ mentally.
::key 2499
$51\cdot49=(50+1)(50-1)=50^2-1=2499$.

::sa
Given $a+b=7$ and $ab=12$, find $a^2+b^2$.
::key 25
$a^2+b^2=(a+b)^2-2ab=49-24=25$.
:::
