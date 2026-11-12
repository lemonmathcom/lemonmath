---
title: Factorising polynomials
description: Factorise polynomials by taking out a common factor, using identities and grouping terms, then apply factorising to quick calculations and real problems.
minutes: 35
---

:::goals
- Understand what it means to factorise a polynomial.
- Factorise polynomials by taking out a common factor, using identities and grouping terms.
- Combine the methods to factorise a polynomial completely.
- Use factorising for quick calculations and real problems.
:::

Can you work out $37\cdot68+37\cdot32$ quickly without a calculator? If you notice that the factor $37$ appears in both products, you can write $37\cdot(68+32)=37\cdot100=3700$. We have just pulled a common factor out of both terms.

Now suppose a rectangular plot has area $x^2+6x$ (m²) and width $x$ m. What is its length? We need to write $x^2+6x$ as a **product** with a factor $x$. This is called **factorising a polynomial**, the reverse of multiplying polynomials.

## Factorising polynomials

:::definition Factorising a polynomial
To **factorise a polynomial** is to rewrite it as a **product** of polynomials. Each polynomial in the product is a **factor**.
:::

For example, $x^2-9=(x-3)(x+3)$ is a factorisation, with the two factors $(x-3)$ and $(x+3)$. To check, we multiply the factors and compare with the original polynomial.

### Method: taking out a common factor

When every term has the same factor, we use the distributive property backwards:
$$AB+AC=A(B+C).$$
The factor $A$ is the **common factor**.

:::note Finding the common factor
- The coefficient of the common factor is the **greatest common divisor** of the coefficients.
- The variable part consists of the variables that appear in every term, each taken with its **smallest** exponent.
:::

For example, in $6x^2y-9xy^2$ the greatest common divisor of $6$ and $9$ is $3$, and the common variables are $x$ and $y$ with smallest exponent $1$. So the common factor is $3xy$ and $6x^2y-9xy^2=3xy(2x-3y)$.

### Method: using identities

We read the identities we know backwards:
$$A^2\pm2AB+B^2=(A\pm B)^2,\qquad A^2-B^2=(A-B)(A+B),$$
$$A^3\pm3A^2B+3AB^2\pm B^3=(A\pm B)^3,\qquad A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2).$$
We recognise the shape of the polynomial and then identify $A$ and $B$.

### Method: grouping terms

When the terms have no common factor for all of them, we put them into groups so that each group has a common factor, and then a new common factor appears between the groups:
$$ax+ay+bx+by=a(x+y)+b(x+y)=(a+b)(x+y).$$

:::note Order to try the methods
1. If all terms share a common factor, take it out first.
2. Then see whether what remains fits an identity.
3. If four or more terms remain, try grouping.
:::

A polynomial is **completely factorised** when its factors cannot be factorised any further.

## Examples

We begin with taking out a common factor.

:::example Taking out a common factor
Factorise:

a) $6x^2y-9xy^2$.

b) $5x(x-2)+3(x-2)$.

**Solution.** a) The common factor is $3xy$:
$$6x^2y-9xy^2=3xy\cdot2x-3xy\cdot3y=3xy(2x-3y).$$

b) The common factor is $(x-2)$:
$$5x(x-2)+3(x-2)=(x-2)(5x+3).$$

So a) $3xy(2x-3y)$; b) $(x-2)(5x+3)$.
:::

Next we use identities.

:::example Using identities
Factorise:

a) $4x^2-25$.

b) $x^2+8x+16$.

c) $8x^3-27$.

**Solution.** a) We have $4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.

b) We have $x^2+8x+16=x^2+2\cdot x\cdot4+4^2=(x+4)^2$.

c) We have $8x^3-27=(2x)^3-3^3=(2x-3)(4x^2+6x+9)$.

So a) $(2x-5)(2x+5)$; b) $(x+4)^2$; c) $(2x-3)(4x^2+6x+9)$.
:::

Now we group terms.

:::example Grouping terms
Factorise:

a) $x^2-xy+3x-3y$.

b) $x^2-y^2+2x+2y$.

**Solution.** a) We group the first two terms and the last two terms:
$$\begin{aligned} x^2-xy+3x-3y&=(x^2-xy)+(3x-3y)\\ &=x(x-y)+3(x-y)\\ &=(x-y)(x+3). \end{aligned}$$

b) We group $x^2-y^2$ and $2x+2y$, and use an identity on the first group:
$$\begin{aligned} x^2-y^2+2x+2y&=(x-y)(x+y)+2(x+y)\\ &=(x+y)(x-y+2). \end{aligned}$$

So a) $(x-y)(x+3)$; b) $(x+y)(x-y+2)$.
:::

Often we must combine several methods.

:::example Combining methods
Factorise completely:

a) $2x^3-8x$.

b) $3x^2-12x+12$.

**Solution.** a) Take out the common factor $2x$, then use the difference of two squares:
$$2x^3-8x=2x(x^2-4)=2x(x-2)(x+2).$$

b) Take out the common factor $3$, then use the square of a difference:
$$3x^2-12x+12=3(x^2-4x+4)=3(x-2)^2.$$

So a) $2x(x-2)(x+2)$; b) $3(x-2)^2$.
:::

We can also use factorising for quick calculation.

:::example Quick calculation
Calculate quickly:

a) $37\cdot68+37\cdot32$.

b) $85^2-15^2$.

c) $105^2-2\cdot105\cdot5+5^2$.

**Solution.** a) $37\cdot68+37\cdot32=37(68+32)=37\cdot100=3700$.

b) $85^2-15^2=(85-15)(85+15)=70\cdot100=7000$.

c) $105^2-2\cdot105\cdot5+5^2=(105-5)^2=100^2=10\,000$.

So a) $3700$; b) $7000$; c) $10\,000$.
:::

Finally, a real problem about the area of a yard.

:::example A yard with a pond (Application)
Suppose a square yard has side $x$ m. In the middle of the yard there is a square pond of side $y$ m ($x>y$). Write the area of the rest of the yard as a product of factors, then find it when $x=20$ and $y=6$.

**Solution.**

*Understand the problem.* The area of the rest of the yard is the area of the whole yard minus the area of the pond.

*Plan.* Write the difference $x^2-y^2$ and factorise it with an identity, then substitute the numbers.

*Carry out the plan.* The area of the rest of the yard is
$$x^2-y^2=(x-y)(x+y)\ (\text{m}^2).$$
When $x=20$ and $y=6$ we get $(20-6)(20+6)=14\cdot26=364$ (m²).

So the area of the rest of the yard is $(x-y)(x+y)$ (m²), which equals $364$ m² when $x=20$, $y=6$.

*Look back.* Check: $20^2-6^2=400-36=364$, which agrees. The product form gives one more meaning: the rest of the yard can be cut up and rearranged into a rectangle with sides $(x-y)$ and $(x+y)$.
:::

:::warning Common mistakes
- **Not taking out the whole common factor.** Wrong: $6x^2y-9xy^2=3x(2xy-3y^2)$. Why it is wrong: the terms in the bracket still have the common factor $y$. Right: $6x^2y-9xy^2=3xy(2x-3y)$.
- **Wrong sign when reversing a factor.** Wrong: $x(x-2)+(2-x)=(x-2)(x+1)$. Why it is wrong: $2-x=-(x-2)$. Right: $x(x-2)-(x-2)=(x-2)(x-1)$.
- **Losing a term when taking out a common factor.** Wrong: $2x^2+2x=2x\cdot x$. Why it is wrong: the term $2x$ divided by $2x$ leaves $1$. Right: $2x^2+2x=2x(x+1)$.
- **Stopping before the factorisation is complete.** Wrong: $x^4-16=(x^2-4)(x^2+4)$ and stop. Why it is wrong: the factor $x^2-4$ can still be factorised. Right: $x^4-16=(x-2)(x+2)(x^2+4)$.
:::

**Connections.** Factorising is the reverse operation of multiplying polynomials, and it uses the identities from the last two lessons. Later, when you simplify algebraic fractions and solve equations written as products, you will use it often.

## Key terms

:::terms
- factorise a polynomial | phân tích đa thức thành nhân tử
- factor | nhân tử
- common factor | nhân tử chung
- taking out a common factor | đặt nhân tử chung
- grouping terms | nhóm hạng tử
- identity | hằng đẳng thức
- greatest common divisor | ước chung lớn nhất
- product | tích
:::

## Summary

- To factorise a polynomial is to rewrite it as a product of polynomials.
- Taking out a common factor: $AB+AC=A(B+C)$; use the greatest common divisor of the coefficients and the common variables with their smallest exponents.
- Use the identities backwards to write an expression as a square, a cube or a product.
- Grouping terms: put terms together so that a new common factor appears.
- Order to try: common factor, then identities, then grouping; factorise until it is complete.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Factorise:

a) $4x^2-6x$.

b) $12x^3y-18x^2y^2$.

c) $5x(y-2)-3(y-2)$.

::hint
**What you need:** $AB+AC=A(B+C)$; the common factor has the greatest common divisor of the coefficients and the common variables with their smallest exponents.

**Steps:**
1. Find the common factor.
2. Divide each term by the common factor and write the results in the bracket.

::solution
a) $4x^2-6x=2x(2x-3)$.

b) $12x^3y-18x^2y^2=6x^2y(2x-3y)$.

c) $5x(y-2)-3(y-2)=(y-2)(5x-3)$.

So a) $2x(2x-3)$; b) $6x^2y(2x-3y)$; c) $(y-2)(5x-3)$.

**Answer.** a) $2x(2x-3)$. b) $6x^2y(2x-3y)$. c) $(y-2)(5x-3)$.
:::

:::exercise
Factorise:

a) $2x(x-3)+5(x-3)$.

b) $x(x-y)+y(y-x)$.

c) $3a(b-1)-6(1-b)$.

::hint
**What you need:** $B-A=-(A-B)$; change signs so that the factors match.

**Steps:**
1. In b) and c), rewrite $y-x$ and $1-b$ so that a common factor appears.
2. Take out the common factor.

::solution
a) $2x(x-3)+5(x-3)=(x-3)(2x+5)$.

b) We have $y(y-x)=-y(x-y)$, so $x(x-y)+y(y-x)=x(x-y)-y(x-y)=(x-y)(x-y)=(x-y)^2$.

c) We have $-6(1-b)=6(b-1)$, so $3a(b-1)-6(1-b)=3a(b-1)+6(b-1)=(b-1)(3a+6)=3(b-1)(a+2)$.

So a) $(x-3)(2x+5)$; b) $(x-y)^2$; c) $3(b-1)(a+2)$.

**Answer.** a) $(x-3)(2x+5)$. b) $(x-y)^2$. c) $3(b-1)(a+2)$.
:::

:::exercise
Factorise using identities:

a) $9x^2-16y^2$.

b) $x^2-10x+25$.

c) $4x^2+12x+9$.

::hint
**What you need:** $A^2-B^2=(A-B)(A+B)$ and $A^2\pm2AB+B^2=(A\pm B)^2$.

**Steps:**
1. Recognise the shape of the polynomial.
2. Identify $A$ and $B$ and write the result.

::solution
a) $9x^2-16y^2=(3x)^2-(4y)^2=(3x-4y)(3x+4y)$.

b) $x^2-10x+25=x^2-2\cdot x\cdot5+5^2=(x-5)^2$.

c) $4x^2+12x+9=(2x)^2+2\cdot2x\cdot3+3^2=(2x+3)^2$.

So a) $(3x-4y)(3x+4y)$; b) $(x-5)^2$; c) $(2x+3)^2$.

**Answer.** a) $(3x-4y)(3x+4y)$. b) $(x-5)^2$. c) $(2x+3)^2$.
:::

:::exercise
Factorise using the identities for cubes:

a) $x^3+8$.

b) $27x^3-1$.

c) $x^3+6x^2+12x+8$.

::hint
**What you need:** $A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2)$ and $(A+B)^3=A^3+3A^2B+3AB^2+B^3$.

**Steps:**
1. Recognise the cubes in the polynomial.
2. Watch the sign in the second factor.

::solution
a) $x^3+8=x^3+2^3=(x+2)(x^2-2x+4)$.

b) $27x^3-1=(3x)^3-1^3=(3x-1)(9x^2+3x+1)$.

c) $x^3+6x^2+12x+8=x^3+3\cdot x^2\cdot2+3\cdot x\cdot2^2+2^3=(x+2)^3$.

So a) $(x+2)(x^2-2x+4)$; b) $(3x-1)(9x^2+3x+1)$; c) $(x+2)^3$.

**Answer.** a) $(x+2)(x^2-2x+4)$. b) $(3x-1)(9x^2+3x+1)$. c) $(x+2)^3$.
:::

:::exercise
Factorise by grouping terms:

a) $xy+2x+3y+6$.

b) $x^2-2xy+x-2y$.

c) $a^2-ab-4a+4b$.

::hint
**What you need:** put terms together so that each group has a common factor and the groups share a new common factor.

**Steps:**
1. Group the first two terms and the last two terms.
2. Take out the common factor in each group, then the new common factor.

::solution
a) $xy+2x+3y+6=x(y+2)+3(y+2)=(y+2)(x+3)$.

b) $x^2-2xy+x-2y=x(x-2y)+(x-2y)=(x-2y)(x+1)$.

c) $a^2-ab-4a+4b=a(a-b)-4(a-b)=(a-b)(a-4)$.

So a) $(y+2)(x+3)$; b) $(x-2y)(x+1)$; c) $(a-b)(a-4)$.

**Answer.** a) $(y+2)(x+3)$. b) $(x-2y)(x+1)$. c) $(a-b)(a-4)$.
:::

:::exercise
Factorise completely:

a) $3x^3-12x$.

b) $2x^2-12x+18$.

c) $x^4-16$.

::hint
**What you need:** take out a common factor first, then use identities; continue until no further factorising is possible.

**Steps:**
1. Find a common factor of all terms (if there is one).
2. Factorise what remains using identities.

::solution
a) $3x^3-12x=3x(x^2-4)=3x(x-2)(x+2)$.

b) $2x^2-12x+18=2(x^2-6x+9)=2(x-3)^2$.

c) $x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$.

So a) $3x(x-2)(x+2)$; b) $2(x-3)^2$; c) $(x-2)(x+2)(x^2+4)$.

**Answer.** a) $3x(x-2)(x+2)$. b) $2(x-3)^2$. c) $(x-2)(x+2)(x^2+4)$.
:::

:::exercise
Calculate quickly:

a) $45\cdot37+45\cdot63$.

b) $65^2-35^2$.

c) $76^2+2\cdot76\cdot24+24^2$.

::hint
**What you need:** take out a common factor or use an identity, then calculate.

**Steps:**
1. Spot a common factor or the shape of an identity.
2. Factorise, then calculate.

::solution
a) $45\cdot37+45\cdot63=45(37+63)=45\cdot100=4500$.

b) $65^2-35^2=(65-35)(65+35)=30\cdot100=3000$.

c) $76^2+2\cdot76\cdot24+24^2=(76+24)^2=100^2=10\,000$.

So a) $4500$; b) $3000$; c) $10\,000$.

**Answer.** a) $4500$. b) $3000$. c) $10\,000$.
:::

:::exercise
Suppose a rectangular garden has area $(x^2+6x)$ m² and width $x$ m. Write the length of the garden in terms of $x$, then find the length and the area when $x=14$.

::hint
**What you need:** area of a rectangle $=$ length $\times$ width; factorise the area into a product with a factor $x$.

**Steps:**
1. Take out the common factor $x$ from $x^2+6x$.
2. The other factor is the length; substitute $x=14$.

::solution
We have $x^2+6x=x(x+6)$, so the length is $(x+6)$ m.

When $x=14$, the length is $20$ m and the area is $14\cdot20=280$ (m²). (Check: $14^2+6\cdot14=196+84=280$.)

So the length is $(x+6)$ m; when $x=14$ the length is $20$ m and the area is $280$ m².

**Answer.** $(x+6)$ m; $20$ m; $280$ m².
:::

:::exercise
Recall the lesson on the difference of two squares. Suppose a square piece of card with side $12$ cm has a square of side $8$ cm cut out of one corner. Find the area of what remains by factorising.

::hint
**What you need:** the remaining area is $12^2-8^2=(12-8)(12+8)$.

**Steps:**
1. Write the difference of two squares.
2. Factorise it into a product, then calculate.

::solution
The remaining area is $12^2-8^2=(12-8)(12+8)=4\cdot20=80\ (\text{cm}^2)$. (Check: $144-64=80$.)

So the remaining area is $80\ \text{cm}^2$.

**Answer.** $80\ \text{cm}^2$.
:::

:::exercise Challenge
Prove that for every integer $n$, the expression $n^3-n$ is divisible by $6$.

::hint
**What you need:** $n^3-n=n(n^2-1)$; among three consecutive integers one is divisible by $3$ and at least one is even.

**Steps:**
1. Factorise $n^3-n$ as a product of three consecutive integers.
2. Argue about divisibility by $2$ and by $3$.

::solution
We have $n^3-n=n(n^2-1)=n(n-1)(n+1)=(n-1)\,n\,(n+1)$, which is the product of three consecutive integers.

Among three consecutive integers there is at least one even number, so the product is divisible by $2$. Among them there is also exactly one multiple of $3$, so the product is divisible by $3$. Since $2$ and $3$ are coprime, the product is divisible by $2\cdot3=6$.

So $n^3-n$ is divisible by $6$ for every integer $n$.

**Answer.** $n^3-n=(n-1)n(n+1)$ is divisible by $6$.
:::

## Mini test

:::quiz
::mc
Factorising $6x^2-9x$ gives
A. $3(2x^2-3x)$.
B. $3x(2x-3)$.
C. $3x(2x-9)$.
D. $3x(2x+3)$.
::key B
The common factor is $3x$: $6x^2-9x=3x(2x-3)$. A does not take out the whole common factor, D has the wrong sign, C divides the second term wrongly.

::mc
Factorising $4x^2-9$ gives
A. $(2x-3)^2$.
B. $(4x-3)(x+3)$.
C. $(2x-3)(2x+3)$.
D. $(2x+3)^2$.
::key C
$4x^2-9=(2x)^2-3^2=(2x-3)(2x+3)$. A and D are the square of a difference or a sum (they have a term $\pm12x$), B is wrong when multiplied back.

::mc
Factorising $x^3-8$ gives
A. $(x-2)(x^2+4)$.
B. $(x-2)^3$.
C. $(x-2)(x^2-2x+4)$.
D. $(x-2)(x^2+2x+4)$.
::key D
$x^3-8=x^3-2^3=(x-2)(x^2+2x+4)$. B has four terms when expanded, C has the wrong sign on the middle term, A lacks the term $2x$.

::mc
Factorising $xy+2x+3y+6$ gives
A. $(x+3)(y+2)$.
B. $(x+2)(y+6)$.
C. $(x+2)(y+3)$.
D. $x(y+2)+6$.
::key A
$xy+2x+3y+6=x(y+2)+3(y+2)=(x+3)(y+2)$. A and C give wrong terms when multiplied back, D is not yet a product.

::tf
Consider the polynomial $2x^2-8$.
a) $2x^2-8=2(x^2-4)$.
b) $2x^2-8=2(x-2)^2$.
c) $2x^2-8=2(x-2)(x+2)$.
d) The value of $2x^2-8$ at $x=3$ is $10$.
::key T F T T
a) True: take out the common factor $2$. b) False: $2(x-2)^2=2x^2-8x+8$. c) True: $x^2-4=(x-2)(x+2)$. d) True: $18-8=10$ and $2\cdot1\cdot5=10$.

::sa
Calculate $65^2-35^2$ quickly.
::key 3000
$65^2-35^2=(65-35)(65+35)=30\cdot100=3000$.

::sa
Given $x+y=5$ and $x-y=3$, find $x^2-y^2$.
::key 15
$x^2-y^2=(x-y)(x+y)=3\cdot5=15$.
:::
