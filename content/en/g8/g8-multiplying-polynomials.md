---
title: Multiplying polynomials. Dividing a polynomial by a monomial
description: Multiply a monomial by a polynomial, multiply two polynomials, divide monomials and polynomials by a monomial, and apply them to real problems.
minutes: 35
---

:::goals
- Multiply a monomial by a polynomial, and multiply two polynomials, using the distributive property.
- Divide a monomial by a monomial, and a polynomial by a monomial.
- Simplify expressions involving products of polynomials and find their values.
- Use multiplication of polynomials to find areas, volumes and other quantities in real problems.
:::

Suppose a rectangular plot of land has width $x$ m and length $(x+6)$ m. The owner enlarges it: the length grows by $4$ m and the width grows by $3$ m. The new area is $(x+10)(x+3)$ (m²).

By how many square metres has the area increased? To find out, we must **multiply two polynomials**, $(x+10)$ and $(x+3)$, and subtract the old area. This lesson teaches us how to multiply, and also how to divide, polynomials.

## Multiplying a monomial by a polynomial

### Explore: the area of a combined rectangle

A rectangle has width $3$ and length $(x+4)$. We cut it into two smaller rectangles: one of length $x$ and one of length $4$, both of width $3$. The area of the whole equals the sum of the areas of the two parts:
$$3(x+4)=3\cdot x+3\cdot4=3x+12.$$
This is just the distributive property of multiplication over addition. We use it for monomials and polynomials too.

:::theorem Multiplying a monomial by a polynomial
To multiply a monomial by a polynomial, multiply the monomial by each term of the polynomial and add the products:
$$A(B+C-D)=AB+AC-AD.$$
:::

When we multiply monomials, we multiply the coefficients and multiply powers of the same base: $x^m\cdot x^n=x^{m+n}$.

## Multiplying a polynomial by a polynomial

Why is there a rule for multiplying two polynomials? We treat $(A+B)$ as one block and use the rule we have just learnt:
$$(A+B)(C+D)=A(C+D)+B(C+D)=AC+AD+BC+BD.$$

:::theorem Multiplying two polynomials
To multiply one polynomial by another, multiply each term of the first by every term of the second and add the products:
$$(A+B)(C+D)=AC+AD+BC+BD.$$
Then simplify by adding like terms.
:::

Multiplying and simplifying like this is also called **expanding** the product. If one polynomial has $m$ terms and the other has $n$ terms, then before simplifying we get $m\cdot n$ products.

## Dividing monomials and dividing a polynomial by a monomial

:::definition Divisibility
Let $A$ and $B$ be monomials with $B\neq0$. We say that $A$ is **divisible** by $B$ if every variable of $B$ is also a variable of $A$, with an exponent no larger than its exponent in $A$. The quotient $A\div B$ is then a monomial.
:::

To divide a monomial $A$ by a monomial $B$, divide the coefficient of $A$ by the coefficient of $B$, divide the power of each variable in $A$ by the power of the same variable in $B$ ($x^m\div x^n=x^{m-n}$ for $m\ge n$), then multiply the results. For example
$$12x^3y^2\div(4xy)=(12\div4)\cdot x^{3-1}\cdot y^{2-1}=3x^2y.$$

:::note Dividing a polynomial by a monomial
If every term of the polynomial $A$ is divisible by the monomial $B$, divide each term of $A$ by $B$ and add the quotients:
$$(A_1+A_2+A_3)\div B=A_1\div B+A_2\div B+A_3\div B.$$
:::

This rule holds because dividing by $B$ is multiplying by $\dfrac1B$, and then we use the distributive property. When we divide, we always understand that the variables are non-zero.

## Examples

We begin with multiplying a monomial by a polynomial.

:::example Multiplying a monomial by a polynomial
Find the product $-3x^2y(x-2y+1)$.

**Solution.** We multiply $-3x^2y$ by each term in the bracket:
$$\begin{aligned} -3x^2y(x-2y+1)&=(-3x^2y)\cdot x+(-3x^2y)\cdot(-2y)+(-3x^2y)\cdot1\\ &=-3x^3y+6x^2y^2-3x^2y. \end{aligned}$$
So $-3x^2y(x-2y+1)=-3x^3y+6x^2y^2-3x^2y$.
:::

Next we multiply two polynomials.

:::example Multiplying two polynomials
Find the products:

a) $(x+2)(x^2-3x+5)$.

b) $(2x-y)(x+3y)$.

**Solution.** a) We have
$$\begin{aligned} (x+2)(x^2-3x+5)&=x\cdot x^2+x\cdot(-3x)+x\cdot5+2\cdot x^2+2\cdot(-3x)+2\cdot5\\ &=x^3-3x^2+5x+2x^2-6x+10\\ &=x^3-x^2-x+10. \end{aligned}$$

b) We have
$$\begin{aligned} (2x-y)(x+3y)&=2x\cdot x+2x\cdot3y-y\cdot x-y\cdot3y\\ &=2x^2+6xy-xy-3y^2\\ &=2x^2+5xy-3y^2. \end{aligned}$$

So a) $x^3-x^2-x+10$; b) $2x^2+5xy-3y^2$.
:::

Now we divide a polynomial by a monomial.

:::example Dividing a polynomial by a monomial
Find $(6x^3y^2-9x^2y^3+3xy^2)\div(3xy)$.

**Solution.** Every term of the dividend is divisible by $3xy$. We divide term by term:
$$\begin{aligned} &(6x^3y^2-9x^2y^3+3xy^2)\div(3xy)\\ &=6x^3y^2\div(3xy)-9x^2y^3\div(3xy)+3xy^2\div(3xy)\\ &=2x^2y-3xy^2+y. \end{aligned}$$
So the quotient is $2x^2y-3xy^2+y$.

**Remark.** Check by multiplying: $3xy(2x^2y-3xy^2+y)=6x^3y^2-9x^2y^3+3xy^2$, which is the dividend.
:::

Then we simplify an expression and find its value.

:::example Simplifying and evaluating
Simplify the expression $(x-2)(x+3)-x(x-1)$ and find its value at $x=5$.

**Solution.** We expand each product:
$$\begin{aligned} (x-2)(x+3)-x(x-1)&=(x^2+3x-2x-6)-(x^2-x)\\ &=x^2+x-6-x^2+x\\ &=2x-6. \end{aligned}$$
At $x=5$ we get $2\cdot5-6=4$.

So the expression equals $2x-6$, and its value at $x=5$ is $4$.

**Remark.** Direct check: at $x=5$, $(5-2)(5+3)-5\cdot4=3\cdot8-20=4$, which agrees.
:::

Now we return to the plot of land from the start.

:::example Enlarging a plot of land (Application)
Suppose a rectangular plot has width $x$ m and length $(x+6)$ m. The length is increased by $4$ m and the width by $3$ m. Write a polynomial for the increase in area, then find the increase when $x=10$.

**Solution.**

*Understand the problem.* We must compare the new area with the old area. Both are products of two polynomials in one variable $x$.

*Plan.* Write the old area $S_1$ and the new area $S_2$, expand, then compute $S_2-S_1$.

*Carry out the plan.* The old area is $S_1=x(x+6)=x^2+6x$ (m²). The new length is $x+6+4=x+10$ and the new width is $x+3$, so the new area is
$$S_2=(x+10)(x+3)=x^2+3x+10x+30=x^2+13x+30\ (\text{m}^2).$$
The increase in area is
$$S_2-S_1=(x^2+13x+30)-(x^2+6x)=7x+30\ (\text{m}^2).$$
When $x=10$, the increase is $7\cdot10+30=100$ (m²).

So the increase in area is $7x+30$ (m²), which equals $100$ m² when $x=10$.

*Look back.* Check with numbers: when $x=10$, the old plot has $10\cdot16=160$ m², the new plot has $20\cdot13=260$ m², the difference is $100$ m², in agreement with $7\cdot10+30$.
:::

:::warning Common mistakes
- **Wrong sign when multiplying by a negative.** Wrong: $-2x(x-3)=-2x^2-6x$. Why it is wrong: $(-2x)\cdot(-3)=+6x$. Right: $-2x(x-3)=-2x^2+6x$.
- **Multiplying by only one term.** Wrong: $3x(x+2)=3x^2+2$. Why it is wrong: $3x$ must multiply both terms. Right: $3x(x+2)=3x^2+6x$.
- **Missing the cross products.** Wrong: $(x+2)(x+3)=x^2+6$. Why it is wrong: only the first terms and the last terms were multiplied, and $x\cdot3$ and $2\cdot x$ are missing. Right: $(x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6$.
- **Losing a term when dividing.** Wrong: $(4x^3+2x)\div2x=2x^2$. Why it is wrong: $2x\div2x=1$, not $0$. Right: $(4x^3+2x)\div2x=2x^2+1$.
:::

**Connections.** Multiplying polynomials rests on the distributive property you have known since Year 6, and on adding and subtracting polynomials from the previous lesson. When we multiply certain special polynomials, we get very neat results called identities, in the next lessons; and dividing a polynomial by a monomial is a first step towards factorising polynomials.

## Key terms

:::terms
- multiplying a monomial by a polynomial | nhân đơn thức với đa thức
- multiplying two polynomials | nhân đa thức với đa thức
- distributive property | tính chất phân phối
- expand | khai triển
- divisible | chia hết
- dividing a monomial by a monomial | chia đơn thức cho đơn thức
- dividing a polynomial by a monomial | chia đa thức cho đơn thức
- quotient | thương
:::

## Summary

- Monomial times polynomial: $A(B+C)=AB+AC$ (multiply by each term).
- Polynomial times polynomial: $(A+B)(C+D)=AC+AD+BC+BD$, then simplify the like terms.
- Monomial divided by monomial: divide the coefficients, divide the powers of the same variable, then multiply the results.
- Polynomial divided by monomial: divide each term by the monomial and add the quotients.
- Take care with negative signs, and do not drop terms when multiplying or dividing.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Find the products:

a) $3x^2(2x-5)$.

b) $-2xy(x^2-3y+1)$.

c) $\dfrac12x(4x^2-6x+2)$.

::hint
**What you need:** multiply the monomial by each term of the polynomial; $x^m\cdot x^n=x^{m+n}$.

**Steps:**
1. Multiply the monomial by the first, second and third terms.
2. Watch the sign of each product.

::solution
a) $3x^2(2x-5)=6x^3-15x^2$.

b) $-2xy(x^2-3y+1)=-2x^3y+6xy^2-2xy$.

c) $\dfrac12x(4x^2-6x+2)=2x^3-3x^2+x$.

So a) $6x^3-15x^2$; b) $-2x^3y+6xy^2-2xy$; c) $2x^3-3x^2+x$.

**Answer.** a) $6x^3-15x^2$. b) $-2x^3y+6xy^2-2xy$. c) $2x^3-3x^2+x$.
:::

:::exercise
Find the products:

a) $(x+4)(x-3)$.

b) $(2x-1)(x^2+x-2)$.

::hint
**What you need:** $(A+B)(C+D)=AC+AD+BC+BD$; add the like terms.

**Steps:**
1. Multiply each term of the first polynomial by each term of the second.
2. Add the like terms.

::solution
a) $(x+4)(x-3)=x^2-3x+4x-12=x^2+x-12$.

b) $(2x-1)(x^2+x-2)=2x^3+2x^2-4x-x^2-x+2=2x^3+x^2-5x+2$.

So a) $x^2+x-12$; b) $2x^3+x^2-5x+2$.

**Answer.** a) $x^2+x-12$. b) $2x^3+x^2-5x+2$.
:::

:::exercise
Prove that $(x-2y)(x^2+2xy+4y^2)=x^3-8y^3$.

::hint
**What you need:** expand the product, then simplify.

**Steps:**
1. Multiply the second polynomial by $x$, then by $-2y$.
2. Add the like terms; what remains is the result.

::solution
We have
$$\begin{aligned} (x-2y)(x^2+2xy+4y^2)&=x^3+2x^2y+4xy^2-2x^2y-4xy^2-8y^3\\ &=x^3-8y^3. \end{aligned}$$
So $(x-2y)(x^2+2xy+4y^2)=x^3-8y^3$.

**Answer.** The identity is proved.
:::

:::exercise
Simplify $A=(x-1)(x+2)-(x+1)(x-3)$ and find the value of $A$ at $x=2$.

::hint
**What you need:** expand each product; when removing a bracket with a $-$ sign, change the sign of every term.

**Steps:**
1. Expand $(x-1)(x+2)$ and $(x+1)(x-3)$.
2. Subtract the two results, then substitute $x=2$.

::solution
We have $(x-1)(x+2)=x^2+x-2$ and $(x+1)(x-3)=x^2-2x-3$. Hence
$$A=(x^2+x-2)-(x^2-2x-3)=x^2+x-2-x^2+2x+3=3x+1.$$
At $x=2$, $A=3\cdot2+1=7$. (Check: $1\cdot4-3\cdot(-1)=7$.)

So $A=3x+1$ and $A=7$ when $x=2$.

**Answer.** $A=3x+1$; $7$.
:::

:::exercise
Carry out the divisions:

a) $12x^3y^2\div(-4xy)$.

b) $(15x^4y^3-10x^2y^2+5xy)\div(5xy)$.

c) $(8x^3-4x^2+6x)\div(2x)$.

::hint
**What you need:** divide the coefficients, divide powers of the same variable ($x^m\div x^n=x^{m-n}$); to divide a polynomial by a monomial, divide each term.

**Steps:**
1. Divide the coefficients.
2. Divide the powers of the same variable, then add the quotients.

::solution
a) $12x^3y^2\div(-4xy)=-3x^2y$.

b) $(15x^4y^3-10x^2y^2+5xy)\div(5xy)=3x^3y^2-2xy+1$.

c) $(8x^3-4x^2+6x)\div(2x)=4x^2-2x+3$.

So a) $-3x^2y$; b) $3x^3y^2-2xy+1$; c) $4x^2-2x+3$.

**Answer.** a) $-3x^2y$. b) $3x^3y^2-2xy+1$. c) $4x^2-2x+3$.
:::

:::exercise
A rectangular yard is $(x+8)$ m long and $(x+5)$ m wide. In the middle of the yard there is a square pond of side $x$ m. Write a polynomial for the area of the yard not covered by the pond, then find it when $x=4$.

::hint
**What you need:** remaining area $=$ area of the rectangle $-$ area of the square.

**Steps:**
1. Expand $(x+8)(x+5)$.
2. Subtract $x^2$, then substitute $x=4$.

::solution
The area of the whole yard is $(x+8)(x+5)=x^2+13x+40$ (m²). The area of the pond is $x^2$ (m²). The area of the yard without the pond is
$$x^2+13x+40-x^2=13x+40\ (\text{m}^2).$$
When $x=4$, the area is $13\cdot4+40=92$ (m²). (Check: $12\cdot9-4^2=108-16=92$.)

So the area is $13x+40$ (m²), which equals $92$ m² when $x=4$.

**Answer.** $13x+40$ (m²); $92$ m².
:::

:::exercise
Suppose a shop sells $(2x+5)$ kg of rice per day at $(x+3)$ thousand dong per kilogram. Write a polynomial for the daily takings (in thousand dong), then find it when $x=10$.

::hint
**What you need:** takings $=$ number of kilograms $\times$ price per kilogram.

**Steps:**
1. Multiply the two polynomials.
2. Substitute $x=10$.

::solution
The takings are $(2x+5)(x+3)=2x^2+6x+5x+15=2x^2+11x+15$ (thousand dong).

When $x=10$, the takings are $2\cdot100+11\cdot10+15=325$ (thousand dong). (Check: $25\cdot13=325$.)

So the takings are $2x^2+11x+15$ thousand dong, which equals $325$ thousand dong when $x=10$.

**Answer.** $2x^2+11x+15$; $325$ thousand dong.
:::

:::exercise
Recall the lesson on cuboids. A cuboid has a rectangular base of width $x$ cm and length $(x+2)$ cm, and height $(x+3)$ cm. Write a polynomial for the volume, then find it when $x=2$.

::hint
**What you need:** $V=abc$ (length times width times height).

**Steps:**
1. Multiply $x(x+2)$, then multiply by $(x+3)$.
2. Substitute $x=2$.

::solution
We have $V=x(x+2)(x+3)=x(x^2+5x+6)=x^3+5x^2+6x\ (\text{cm}^3)$.

When $x=2$, $V=8+20+12=40\ (\text{cm}^3)$. (Check: $2\cdot4\cdot5=40$.)

So $V=x^3+5x^2+6x\ (\text{cm}^3)$, which equals $40\ \text{cm}^3$ when $x=2$.

**Answer.** $x^3+5x^2+6x$; $40\ \text{cm}^3$.
:::

:::exercise
Find $x$, given that $x(x-4)-(x-2)(x+3)=16$.

::hint
**What you need:** expand and simplify the left-hand side, then solve the linear equation.

**Steps:**
1. Expand $x(x-4)$ and $(x-2)(x+3)$.
2. Simplify, then find $x$.

::solution
We have $x(x-4)=x^2-4x$ and $(x-2)(x+3)=x^2+x-6$. Hence
$$x^2-4x-x^2-x+6=16,\quad\text{that is}\quad -5x+6=16.$$
It follows that $-5x=10$, so $x=-2$. (Check: $(-2)(-6)-(-4)\cdot1=12+4=16$.)

So $x=-2$.

**Answer.** $x=-2$.
:::

:::exercise Challenge
Prove that the value of the expression
$$E=(x-5)(2x+3)-2x(x-4)-x$$
does not depend on $x$.

::hint
**What you need:** if, after simplifying, every term containing $x$ cancels, only a number remains.

**Steps:**
1. Expand $(x-5)(2x+3)$ and $2x(x-4)$.
2. Remove the brackets (changing signs), then group the like terms.

::solution
We have
$$\begin{aligned} E&=(2x^2+3x-10x-15)-(2x^2-8x)-x\\ &=2x^2-7x-15-2x^2+8x-x\\ &=(2x^2-2x^2)+(-7x+8x-x)-15\\ &=-15. \end{aligned}$$
So $E=-15$ for every $x$, and the value of $E$ does not depend on $x$.

**Answer.** $E=-15$.
:::

## Mini test

:::quiz
::mc
The product $(x+3)(x-2)$ equals
A. $x^2+x-6$.
B. $x^2+5x-6$.
C. $x^2-6$.
D. $x^2-x-6$.
::key A
$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6$. A misses the cross products, B adds $-2x+3x$ wrongly, D has the wrong sign on the $x$ term.

::mc
The product $-2x^2y(3x-y+4)$ equals
A. $-6x^3y-2x^2y^2-8x^2y$.
B. $-6x^3y+2x^2y^2-8x^2y$.
C. $-6x^3y+2x^2y^2+4$.
D. $-6x^3y+2x^2y^2+8x^2y$.
::key B
Multiplying $-2x^2y$ by $3x$, $-y$, $4$ gives $-6x^3y$, $+2x^2y^2$, $-8x^2y$. B has the wrong sign on the second term, C forgets to multiply the term $4$, D has the wrong sign on the third term.

::mc
The quotient $(6x^3y^2-4x^2y)\div(2xy)$ equals
A. $3x^2y-2xy$.
B. $3x^2y-2$.
C. $3x^2y-2x$.
D. $3x^2y+2x$.
::key C
$6x^3y^2\div(2xy)=3x^2y$ and $4x^2y\div(2xy)=2x$, so the quotient is $3x^2y-2x$. A keeps an extra $y$ in the second term, B divides the power of $x$ wrongly, D has the wrong sign.

::mc
The product $(x-1)(x^2+x+1)$ equals
A. $x^3+1$.
B. $x^3+x^2-1$.
C. $x^3-x^2-1$.
D. $x^3-1$.
::key D
$(x-1)(x^2+x+1)=x^3+x^2+x-x^2-x-1=x^3-1$. A has the wrong sign on the constant term; C and B keep a term $\pm x^2$ that should cancel.

::tf
Let $E=(x+2)(x-5)-x(x-3)$.
a) $(x+2)(x-5)=x^2-3x-10$.
b) $x(x-3)=x^2-3$.
c) After simplifying, $E=-10$.
d) The value of $E$ at $x=0$ is $0$.
::key T F T F
a) True: $x^2-5x+2x-10$. b) False: $x(x-3)=x^2-3x$. c) True: $x^2-3x-10-x^2+3x=-10$. d) False: $E=-10$ for every $x$, including $x=0$.

::sa
Find the value of $(x-1)(x+4)$ at $x=3$.
::key 14
$(3-1)(3+4)=2\cdot7=14$.

::sa
Find $(12x^3y^2-6x^2y)\div(3xy)$, then find the value of the quotient at $x=2$, $y=1$.
::key 12
The quotient is $4x^2y-2x$. At $x=2$, $y=1$: $16-4=12$.
:::
