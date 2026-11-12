---
title: Cube of a sum. Cube of a difference. Sum and difference of two cubes
description: Learn four identities for the cube of a sum, the cube of a difference, and the sum and difference of two cubes, to expand, calculate and solve problems.
minutes: 35
---

:::goals
- Remember and prove the identities for $(a+b)^3$, $(a-b)^3$, $a^3+b^3$ and $a^3-b^3$.
- Expand the cube of a sum, the cube of a difference and the products $(a\pm b)(a^2\mp ab+b^2)$.
- Recognise the shape of an identity to write an expression as a cube or as a product.
- Use the identities for mental calculation, for simplifying expressions and for volumes in real problems.
:::

A gift box is a cube with edge $x$ cm. Suppose we make a larger box by lengthening every edge by $1$ cm. How much more volume does the new box have than the old one? The new volume is $(x+1)^3$, so we need to know how to expand the **cube of a sum**.

We might also ask: what is $99^3$? Since $99=100-1$, we shall be able to calculate it in our heads. This lesson continues the previous one, with four identities about cubes.

## The cube of a sum and of a difference

### Explore: from squares to cubes

We already know $(a+b)^2=a^2+2ab+b^2$. To find $(a+b)^3$, we multiply by one more factor $(a+b)$:
$$(a+b)^3=(a+b)^2(a+b)=(a^2+2ab+b^2)(a+b).$$
Multiplying term by term:
$$\begin{aligned} (a^2+2ab+b^2)(a+b)&=a^3+a^2b+2a^2b+2ab^2+ab^2+b^3\\ &=a^3+3a^2b+3ab^2+b^3. \end{aligned}$$

:::theorem Cube of a sum
For any two numbers (or expressions) $a$ and $b$,
$$(a+b)^3=a^3+3a^2b+3ab^2+b^3.$$
:::

We can also see it as a volume: a cube of edge $a+b$ is made of a cube of edge $a$ (volume $a^3$), a cube of edge $b$ (volume $b^3$), three boxes $a\times a\times b$ (each of volume $a^2b$) and three boxes $a\times b\times b$ (each of volume $ab^2$). Adding the eight pieces gives $a^3+3a^2b+3ab^2+b^3$.

Replacing $b$ by $-b$ in this identity gives the cube of a difference.

:::theorem Cube of a difference
For any two numbers (or expressions) $a$ and $b$,
$$(a-b)^3=a^3-3a^2b+3ab^2-b^3.$$
:::

**Going deeper.** In $(a-b)^3$ the signs alternate: $+,-,+,-$. The coefficients $1,3,3,1$ are the same in both identities.

## The sum and difference of two cubes

We multiply $(a+b)$ by $(a^2-ab+b^2)$:
$$(a+b)(a^2-ab+b^2)=a^3-a^2b+ab^2+a^2b-ab^2+b^3=a^3+b^3,$$
because $-a^2b$ and $+a^2b$, and $+ab^2$ and $-ab^2$, cancel each other. In the same way, $(a-b)(a^2+ab+b^2)=a^3-b^3$.

:::theorem Sum and difference of two cubes
For any two numbers (or expressions) $a$ and $b$,
$$a^3+b^3=(a+b)(a^2-ab+b^2),$$
$$a^3-b^3=(a-b)(a^2+ab+b^2).$$
:::

:::note How to remember
- The first factor has the same sign as the left-hand side: $a^3+b^3$ has the factor $(a+b)$, and $a^3-b^3$ has the factor $(a-b)$.
- In the second factor, the terms $a^2$ and $b^2$ always have a $+$ sign; the term $ab$ has the **opposite** sign to the first factor.
:::

These identities hold for monomials and polynomials too, provided we treat $a$ and $b$ as expressions. For instance $(2x)^3=8x^3$, not $2x^3$.

## Examples

We begin with the cube of a sum and of a difference.

:::example Expanding cubes
Expand:

a) $(x+2)^3$.

b) $(2x-y)^3$.

**Solution.** a) With $a=x$, $b=2$:
$$(x+2)^3=x^3+3\cdot x^2\cdot2+3\cdot x\cdot2^2+2^3=x^3+6x^2+12x+8.$$

b) With $a=2x$, $b=y$:
$$\begin{aligned} (2x-y)^3&=(2x)^3-3\cdot(2x)^2\cdot y+3\cdot2x\cdot y^2-y^3\\ &=8x^3-12x^2y+6xy^2-y^3. \end{aligned}$$

So a) $x^3+6x^2+12x+8$; b) $8x^3-12x^2y+6xy^2-y^3$.
:::

Next we use the identities for mental calculation.

:::example Mental calculation
Calculate in your head:

a) $11^3$.

b) $99^3$.

c) $101^3$.

**Solution.** a) $11^3=(10+1)^3=1000+3\cdot100\cdot1+3\cdot10\cdot1+1=1000+300+30+1=1331$.

b) $99^3=(100-1)^3=1\,000\,000-3\cdot10\,000+3\cdot100-1=1\,000\,000-30\,000+300-1=970\,299$.

c) $101^3=(100+1)^3=1\,000\,000+30\,000+300+1=1\,030\,301$.

So a) $1331$; b) $970\,299$; c) $1\,030\,301$.
:::

Now we use the sum and difference of two cubes.

:::example Expanding special products
Expand:

a) $(x+3)(x^2-3x+9)$.

b) $(2x-1)(4x^2+2x+1)$.

**Solution.** a) With $a=x$, $b=3$: $(x+3)(x^2-3x+9)=x^3+3^3=x^3+27$.

b) With $a=2x$, $b=1$: $(2x-1)(4x^2+2x+1)=(2x)^3-1^3=8x^3-1$.

So a) $x^3+27$; b) $8x^3-1$.
:::

We also read the identities backwards.

:::example Writing as a cube or as a product
Write each expression as the cube of a sum (or difference), or as a product:

a) $x^3-9x^2+27x-27$.

b) $27x^3-8$.

c) $8x^3+1$.

**Solution.** a) We have $x^3-9x^2+27x-27=x^3-3\cdot x^2\cdot3+3\cdot x\cdot3^2-3^3=(x-3)^3$.

b) We have $27x^3-8=(3x)^3-2^3=(3x-2)(9x^2+6x+4)$.

c) We have $8x^3+1=(2x)^3+1^3=(2x+1)(4x^2-2x+1)$.

So a) $(x-3)^3$; b) $(3x-2)(9x^2+6x+4)$; c) $(2x+1)(4x^2-2x+1)$.
:::

Next we simplify and evaluate.

:::example Simplifying an expression
Simplify $(x-2)(x^2+2x+4)-x(x^2-3)$ and find its value at $x=4$.

**Solution.** We use the difference of two cubes:
$$\begin{aligned} (x-2)(x^2+2x+4)-x(x^2-3)&=(x^3-8)-(x^3-3x)\\ &=x^3-8-x^3+3x\\ &=3x-8. \end{aligned}$$
At $x=4$ the value is $3\cdot4-8=4$.

So the expression equals $3x-8$, and equals $4$ when $x=4$.

**Remark.** Direct check: $2\cdot28-4\cdot13=56-52=4$, which agrees.
:::

Finally, the problem about the box from the start.

:::example A larger cubic box (Application)
Suppose a gift box is a cube with edge $x$ cm. We make a new box by lengthening every edge by $1$ cm. Write a polynomial for the extra volume, then find it when $x=10$.

**Solution.**

*Understand the problem.* The old box has edge $x$ and the new box has edge $x+1$. We need to compare the two volumes.

*Plan.* Find the volume of the new box with the identity for the cube of a sum, then subtract the old volume $x^3$.

*Carry out the plan.* The old volume is $x^3$ (cm³). The new volume is
$$(x+1)^3=x^3+3x^2+3x+1\ (\text{cm}^3).$$
The extra volume is
$$(x^3+3x^2+3x+1)-x^3=3x^2+3x+1\ (\text{cm}^3).$$
When $x=10$, the extra volume is $3\cdot100+3\cdot10+1=331$ (cm³).

So the extra volume is $3x^2+3x+1$ (cm³), which equals $331$ cm³ when $x=10$.

*Look back.* Check with numbers: when $x=10$, the old box has $10^3=1000$ cm³, the new box has $11^3=1331$ cm³, and the difference is $331$ cm³, which agrees. The three terms $3x^2$, $3x$ and $1$ are also the three layers we add on the three faces, the three edges and the one corner of the cube.
:::

:::warning Common mistakes
- **Dropping the two middle terms.** Wrong: $(x+2)^3=x^3+8$. Why it is wrong: $3\cdot x^2\cdot2$ and $3\cdot x\cdot2^2$ are missing. Right: $(x+2)^3=x^3+6x^2+12x+8$.
- **Not alternating the signs in the cube of a difference.** Wrong: $(x-2)^3=x^3-6x^2-12x-8$. Why it is wrong: the signs must be $+,-,+,-$. Right: $(x-2)^3=x^3-6x^2+12x-8$.
- **Wrong sign in the second factor.** Wrong: $x^3+8=(x+2)(x^2+2x+4)$. Why it is wrong: for a sum of two cubes, the middle term has a $-$ sign. Right: $x^3+8=(x+2)(x^2-2x+4)$.
- **Mixing up the difference of two cubes with the cube of a difference.** Wrong: $x^3-8=(x-2)^3$. Why it is wrong: $(x-2)^3$ has four terms. Right: $x^3-8=(x-2)(x^2+2x+4)$.
:::

**Connections.** These identities continue the lesson on squares, and all come from multiplying polynomials. They let us expand very quickly, and when read backwards they help us factorise polynomials in the next lesson.

## Key terms

:::terms
- cube | lập phương
- cube of a sum | lập phương của một tổng
- cube of a difference | lập phương của một hiệu
- sum of two cubes | tổng hai lập phương
- difference of two cubes | hiệu hai lập phương
- identity | hằng đẳng thức
- expand | khai triển
- volume | thể tích
:::

## Summary

- $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.
- $(a-b)^3=a^3-3a^2b+3ab^2-b^3$ (alternating signs).
- $a^3+b^3=(a+b)(a^2-ab+b^2)$.
- $a^3-b^3=(a-b)(a^2+ab+b^2)$.
- Note that $(2x)^3=8x^3$, and watch the sign of the middle term in the second factor.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Expand:

a) $(x+1)^3$.

b) $(x-3)^3$.

c) $(2x+1)^3$.

::hint
**What you need:** $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ and $(a-b)^3=a^3-3a^2b+3ab^2-b^3$.

**Steps:**
1. Identify $a$ and $b$.
2. Write the four terms, paying attention to the signs.

::solution
a) $(x+1)^3=x^3+3x^2+3x+1$.

b) $(x-3)^3=x^3-9x^2+27x-27$.

c) $(2x+1)^3=8x^3+12x^2+6x+1$.

So a) $x^3+3x^2+3x+1$; b) $x^3-9x^2+27x-27$; c) $8x^3+12x^2+6x+1$.

**Answer.** a) $x^3+3x^2+3x+1$. b) $x^3-9x^2+27x-27$. c) $8x^3+12x^2+6x+1$.
:::

:::exercise
Expand:

a) $(3x-2y)^3$.

b) $(x^2+2)^3$.

c) $\left(\dfrac12x+2\right)^3$.

::hint
**What you need:** the identities hold when $a$ and $b$ are monomials; remember to cube both the coefficient and the variable.

**Steps:**
1. Identify $a$ and $b$.
2. Work out $a^3$, $3a^2b$, $3ab^2$, $b^3$.

::solution
a) $(3x-2y)^3=27x^3-54x^2y+36xy^2-8y^3$.

b) $(x^2+2)^3=x^6+6x^4+12x^2+8$.

c) $\left(\dfrac12x+2\right)^3=\dfrac18x^3+\dfrac32x^2+6x+8$.

So a) $27x^3-54x^2y+36xy^2-8y^3$; b) $x^6+6x^4+12x^2+8$; c) $\dfrac18x^3+\dfrac32x^2+6x+8$.

**Answer.** a) $27x^3-54x^2y+36xy^2-8y^3$. b) $x^6+6x^4+12x^2+8$. c) $\dfrac18x^3+\dfrac32x^2+6x+8$.
:::

:::exercise
Expand:

a) $(x+4)(x^2-4x+16)$.

b) $(3x-1)(9x^2+3x+1)$.

c) $(2x+3y)(4x^2-6xy+9y^2)$.

::hint
**What you need:** $(a+b)(a^2-ab+b^2)=a^3+b^3$ and $(a-b)(a^2+ab+b^2)=a^3-b^3$.

**Steps:**
1. Recognise $a$, $b$ and the shape of the second factor.
2. Write the result as a sum or difference of two cubes.

::solution
a) $(x+4)(x^2-4x+16)=x^3+64$.

b) $(3x-1)(9x^2+3x+1)=27x^3-1$.

c) $(2x+3y)(4x^2-6xy+9y^2)=8x^3+27y^3$.

So a) $x^3+64$; b) $27x^3-1$; c) $8x^3+27y^3$.

**Answer.** a) $x^3+64$. b) $27x^3-1$. c) $8x^3+27y^3$.
:::

:::exercise
Calculate mentally using identities:

a) $21^3$.

b) $19^3$.

c) $31^3$.

::hint
**What you need:** write the given number as a sum or difference of a multiple of ten and a small number.

**Steps:**
1. Write $21=20+1$, $19=20-1$, $31=30+1$.
2. Apply the matching identity.

::solution
a) $21^3=(20+1)^3=8000+1200+60+1=9261$.

b) $19^3=(20-1)^3=8000-1200+60-1=6859$.

c) $31^3=(30+1)^3=27\,000+2700+90+1=29\,791$.

So a) $9261$; b) $6859$; c) $29\,791$.

**Answer.** a) $9261$. b) $6859$. c) $29\,791$.
:::

:::exercise
Write each expression as the cube of a sum (or difference), or as a product:

a) $x^3+12x^2+48x+64$.

b) $8x^3-125$.

c) $27+x^3$.

::hint
**What you need:** read the identities backwards.

**Steps:**
1. Recognise $a$ and $b$ (the first and last terms are cubes).
2. Choose the matching identity.

::solution
a) With $a=x$, $b=4$: $x^3+12x^2+48x+64=(x+4)^3$.

b) $8x^3-125=(2x)^3-5^3=(2x-5)(4x^2+10x+25)$.

c) $27+x^3=3^3+x^3=(3+x)(9-3x+x^2)$.

So a) $(x+4)^3$; b) $(2x-5)(4x^2+10x+25)$; c) $(3+x)(9-3x+x^2)$.

**Answer.** a) $(x+4)^3$. b) $(2x-5)(4x^2+10x+25)$. c) $(3+x)(9-3x+x^2)$.
:::

:::exercise
Simplify $C=(x+3)^3-(x-3)^3$ and find the value of $C$ at $x=1$.

::hint
**What you need:** expand the two cubes, then subtract; when removing a bracket with a $-$ sign, change the sign of every term.

**Steps:**
1. Expand $(x+3)^3$ and $(x-3)^3$.
2. Subtract the two results, then substitute $x=1$.

::solution
We have $(x+3)^3=x^3+9x^2+27x+27$ and $(x-3)^3=x^3-9x^2+27x-27$. Hence
$$C=(x^3+9x^2+27x+27)-(x^3-9x^2+27x-27)=18x^2+54.$$
At $x=1$, $C=18+54=72$. (Check: $4^3-(-2)^3=64+8=72$.)

So $C=18x^2+54$ and $C=72$ when $x=1$.

**Answer.** $C=18x^2+54$; $72$.
:::

:::exercise
Suppose a water tank is a cube with edge $x$ m. A new tank, also a cube, is built with edges $2$ m longer than the old one. Write a polynomial for the extra volume, then find it when $x=3$.

::hint
**What you need:** the volume of a cube of edge $a$ is $a^3$; $(x+2)^3=x^3+6x^2+12x+8$.

**Steps:**
1. Write the volumes of the new and old tanks.
2. Subtract the two volumes, then substitute $x=3$.

::solution
The volume of the new tank is $(x+2)^3=x^3+6x^2+12x+8$ (m³). The extra volume is
$$(x^3+6x^2+12x+8)-x^3=6x^2+12x+8\ (\text{m}^3).$$
When $x=3$, the extra volume is $6\cdot9+12\cdot3+8=98$ (m³). (Check: $5^3-3^3=125-27=98$.)

So the extra volume is $6x^2+12x+8$ (m³), which equals $98$ m³ when $x=3$.

**Answer.** $6x^2+12x+8$ (m³); $98$ m³.
:::

:::exercise
Suppose there are two cubic boxes whose edges (in decimetres) are $a$ and $b$, with $a+b=5$ and $ab=6$. Find the total volume $a^3+b^3$ of the two boxes.

::hint
**What you need:** $a^3+b^3=(a+b)^3-3ab(a+b)$.

**Steps:**
1. Expand $(a+b)^3$ and solve for $a^3+b^3$.
2. Substitute $a+b=5$ and $ab=6$.

::solution
From $(a+b)^3=a^3+b^3+3ab(a+b)$ we get $a^3+b^3=(a+b)^3-3ab(a+b)$. Hence
$$a^3+b^3=5^3-3\cdot6\cdot5=125-90=35.$$
(Check: the edges are $2$ dm and $3$ dm, and $2^3+3^3=8+27=35$.)

So the total volume of the two boxes is $35$ dm³.

**Answer.** $35\ \text{dm}^3$.
:::

:::exercise
Recall the lesson on cuboids and cubes. A cube has edge $(2x-1)$ cm. Write its volume as a polynomial, then find it when $x=2$.

::hint
**What you need:** $V=a^3$ and $(a-b)^3=a^3-3a^2b+3ab^2-b^3$.

**Steps:**
1. Expand $(2x-1)^3$.
2. Substitute $x=2$.

::solution
We have $V=(2x-1)^3=(2x)^3-3(2x)^2\cdot1+3\cdot2x\cdot1^2-1^3=8x^3-12x^2+6x-1\ (\text{cm}^3)$.

When $x=2$, $V=64-48+12-1=27\ (\text{cm}^3)$. (Check: the edge is $3$ cm, and $3^3=27$.)

So $V=8x^3-12x^2+6x-1\ (\text{cm}^3)$, which equals $27\ \text{cm}^3$ when $x=2$.

**Answer.** $8x^3-12x^2+6x-1$; $27\ \text{cm}^3$.
:::

:::exercise Challenge
Given $a+b=1$, prove that $a^3+b^3+3ab=1$.

::hint
**What you need:** $(a+b)^3=a^3+b^3+3ab(a+b)$.

**Steps:**
1. Write $a^3+b^3$ in terms of $(a+b)^3$ and $3ab(a+b)$.
2. Substitute $a+b=1$ and simplify.

::solution
From $(a+b)^3=a^3+b^3+3ab(a+b)$ we get $a^3+b^3=(a+b)^3-3ab(a+b)$. Since $a+b=1$,
$$a^3+b^3=1-3ab.$$
Hence $a^3+b^3+3ab=1-3ab+3ab=1$.

**Answer.** The identity is proved.
:::

## Mini test

:::quiz
::mc
Expanding $(x+2)^3$ gives
A. $x^3+8$.
B. $x^3+2x^2+4x+8$.
C. $x^3+6x^2+12x+8$.
D. $x^3-6x^2+12x-8$.
::key C
$(x+2)^3=x^3+3\cdot x^2\cdot2+3\cdot x\cdot4+8=x^3+6x^2+12x+8$. A drops the two middle terms, B forgets the coefficients $3$, D has the wrong signs.

::mc
Expanding $(2x-1)^3$ gives
A. $8x^3-12x^2-6x-1$.
B. $8x^3-1$.
C. $8x^3-6x^2+6x-1$.
D. $8x^3-12x^2+6x-1$.
::key D
$(2x-1)^3=8x^3-3\cdot4x^2+3\cdot2x-1=8x^3-12x^2+6x-1$. B is a difference of two cubes, C forgets to square the coefficient $2$ in the second term, A does not alternate the signs.

::mc
The expression $x^3+27$ equals
A. $(x+3)(x^2-3x+9)$.
B. $(x+3)^3$.
C. $(x+3)(x^2-9x+9)$.
D. $(x+3)(x^2+3x+9)$.
::key A
$x^3+27=x^3+3^3=(x+3)(x^2-3x+9)$. A has the wrong sign on the middle term, B has four terms, C gets the middle term wrong.

::mc
The expression $8x^3-y^3$ equals
A. $(2x-y)^3$.
B. $(2x-y)(4x^2+2xy+y^2)$.
C. $(2x+y)(4x^2-2xy+y^2)$.
D. $(2x-y)(2x^2+2xy+y^2)$.
::key B
$8x^3-y^3=(2x)^3-y^3=(2x-y)(4x^2+2xy+y^2)$. A is the cube of a difference, C is a sum of two cubes, D forgets to square the coefficient $2$.

::tf
Consider $(x+1)^3$ and $(x-1)^3$.
a) $(x+1)^3=x^3+1$.
b) $(x-1)^3=x^3-3x^2+3x-1$.
c) $(x+1)^3-(x-1)^3=6x^2$.
d) At $x=1$, $(x+1)^3-(x-1)^3$ equals $8$.
::key F T F T
a) False: $3x^2+3x$ is missing. b) True: the signs alternate. c) False: the difference is $6x^2+2$. d) True: $2^3-0^3=8$ and $6+2=8$.

::sa
Calculate $11^3$ mentally.
::key 1331
$11^3=(10+1)^3=1000+300+30+1=1331$.

::sa
Given $a-b=1$ and $ab=6$, find $a^3-b^3$.
::key 19
$a^3-b^3=(a-b)^3+3ab(a-b)=1+18=19$.
:::
