---
title: Polynomials. Adding and subtracting polynomials
description: Recognise monomials and polynomials in several variables, simplify them and find their degree, then add and subtract polynomials in real problems.
minutes: 30
---

:::goals
- Recognise monomials, coefficients, variable parts, degrees of monomials and like terms.
- Recognise polynomials in several variables, simplify them and find their degree.
- Add and subtract polynomials by removing brackets and collecting like terms.
- Use polynomials to describe and compare quantities in real problems.
:::

Suppose a notebook costs $12\,000$ dong and a pen costs $5\,000$ dong. Class 8A buys $x$ notebooks and $y$ pens, so it pays $12\,000x+5\,000y$ (dong). Class 8B buys $3$ more notebooks and $2$ fewer pens than class 8A.

How much do the two classes pay altogether? Which class pays more, and by how much? To answer, we need to add and subtract expressions such as $12\,000x+5\,000y$. These are **polynomials**, the main tool of algebra from this year onwards.

## Monomials and polynomials

### Explore: which expressions are a single "block"?

Let us look at some expressions and ask: which ones are just a number, a variable, or a product of numbers and variables?

| Expression | Product of numbers and variables? |
|---|---|
| $7$ | yes (just a number) |
| $-4x$ | yes |
| $3x^2y$ | yes |
| $x^2y^3$ | yes |
| $2x+y$ | no (it contains an addition) |

The first four are a single "block" of factors multiplied together, while $2x+y$ is two blocks added. We give these blocks a name.

:::definition Monomial
A **monomial** is an expression consisting of a number, or a variable, or a product of numbers and variables (each variable may have a positive whole-number exponent).

In a simplified monomial, the number in front is the **coefficient** and the rest is the **variable part**. The **degree of a monomial** (other than $0$) is the sum of the exponents of all its variables. A non-zero number is a monomial of degree $0$.
:::

For example, the monomial $-4x^2y^3$ has coefficient $-4$, variable part $x^2y^3$ and degree $2+3=5$. The coefficient of $x$ is $1$, and that of $-y$ is $-1$.

Two monomials with the same variable part (and non-zero coefficients) are called **like terms**, for example $3x^2y$ and $-5x^2y$. We add like terms by adding the coefficients and keeping the variable part, because by the distributive property
$$3x^2y+5x^2y=(3+5)x^2y=8x^2y.$$
But $x^2y$ and $xy^2$ are not like terms, since their variable parts are different.

:::definition Polynomial
A **polynomial** is a sum of monomials. Each monomial in the sum is a **term** of the polynomial. A term that is just a number is the **constant term**.

To **simplify a polynomial** is to add its like terms. The **degree of a polynomial** is the highest degree among its terms in simplified form.
:::

**Going deeper.** A polynomial is several monomial blocks joined together. A monomial is itself a polynomial (with one term). To find the degree of a polynomial we must simplify it first, because terms of high degree may cancel each other.

## Adding and subtracting polynomials

To add two polynomials, write them one after the other with a $+$ sign, then simplify. For subtraction we must watch the brackets.

:::note Rule for removing brackets
- Bracket with a $+$ sign in front: remove the bracket and keep the signs of its terms.
- Bracket with a $-$ sign in front: remove the bracket and **change the sign** of every term inside.
:::

Why? Subtraction is adding the opposite: $A-B=A+(-B)$, and the opposite of a sum is the sum of the opposites. With numbers: $10-(3-1)=10-2=8$ and $10-3+1=8$, whereas $10-3-1=6$ is wrong.

The steps for adding or subtracting two polynomials:
1. Write the two polynomials joined by $+$ or $-$ (put brackets around the second one).
2. Remove the brackets using the rule above.
3. Collect the like terms and add their coefficients.

## Examples

We begin by recognising monomials.

:::example Monomials, coefficients and degrees
Which of the following expressions are monomials? For each monomial, state the coefficient and the degree.

a) $-4x^2y^3$.

b) $\dfrac23xyz$.

c) $2x+y$.

d) $9$.

**Solution.** a) It is a monomial, with coefficient $-4$ and degree $2+3=5$.

b) It is a monomial, with coefficient $\dfrac23$ and degree $1+1+1=3$.

c) It is not a monomial, because it has an addition of two terms. (It is a polynomial.)

d) It is a monomial, with coefficient $9$ and degree $0$ (a non-zero number).

So a), b) and d) are monomials.
:::

Next we simplify a polynomial and find its degree.

:::example Simplifying a polynomial and finding its degree
Simplify the polynomial $P=3x^2y-5xy^2+2x^2y+xy^2-4$ and find its degree.

**Solution.** We group the like terms:
$$\begin{aligned} P&=(3x^2y+2x^2y)+(-5xy^2+xy^2)-4\\ &=5x^2y-4xy^2-4. \end{aligned}$$
The terms $5x^2y$ and $-4xy^2$ both have degree $3$, and the term $-4$ has degree $0$.

So $P=5x^2y-4xy^2-4$ and the degree of $P$ is $3$.
:::

Now we add two polynomials.

:::example Adding two polynomials
Let $A=3x^2-2xy+y^2$ and $B=x^2+4xy-5y^2$. Find $A+B$.

**Solution.** We have
$$\begin{aligned} A+B&=(3x^2-2xy+y^2)+(x^2+4xy-5y^2)\\ &=3x^2-2xy+y^2+x^2+4xy-5y^2\\ &=(3x^2+x^2)+(-2xy+4xy)+(y^2-5y^2)\\ &=4x^2+2xy-4y^2. \end{aligned}$$
So $A+B=4x^2+2xy-4y^2$.
:::

For subtraction we must change signs carefully.

:::example Subtracting two polynomials
With $A$ and $B$ as in the previous example, find $A-B$.

**Solution.** The second bracket has a $-$ sign in front, so when we remove it we change the sign of every term:
$$\begin{aligned} A-B&=(3x^2-2xy+y^2)-(x^2+4xy-5y^2)\\ &=3x^2-2xy+y^2-x^2-4xy+5y^2\\ &=(3x^2-x^2)+(-2xy-4xy)+(y^2+5y^2)\\ &=2x^2-6xy+6y^2. \end{aligned}$$
So $A-B=2x^2-6xy+6y^2$.

**Remark.** Check with numbers: for $x=1$, $y=1$ we get $A=2$, $B=0$ and $A-B=2$; also $2-6+6=2$, which agrees.
:::

Now we return to the notebook and pen problem from the start.

:::example Two classes buy notebooks and pens (Application)
Suppose a notebook costs $12\,000$ dong and a pen costs $5\,000$ dong. Class 8A buys $x$ notebooks and $y$ pens. Class 8B buys $3$ more notebooks and $2$ fewer pens than class 8A. Find the polynomials for the total the two classes pay and for how much more class 8B pays than class 8A.

**Solution.**

*Understand the problem.* The amount each class pays is a polynomial in the two variables $x$ and $y$ (dong). We need the sum and the difference of two polynomials.

*Plan.* Let class 8A pay $T_A$ and class 8B pay $T_B$, then compute $T_A+T_B$ and $T_B-T_A$ using the bracket rule.

*Carry out the plan.* Class 8A pays $T_A=12\,000x+5\,000y$. Class 8B buys $x+3$ notebooks and $y-2$ pens, so $T_B=12\,000(x+3)+5\,000(y-2)=12\,000x+36\,000+5\,000y-10\,000=12\,000x+5\,000y+26\,000$.

The total for the two classes is
$$T_A+T_B=24\,000x+10\,000y+26\,000\ \text{(dong)}.$$
The difference is
$$T_B-T_A=(12\,000x+5\,000y+26\,000)-(12\,000x+5\,000y)=26\,000\ \text{(dong)}.$$
So the two classes pay $24\,000x+10\,000y+26\,000$ dong, and class 8B pays $26\,000$ dong more than class 8A.

*Look back.* The difference $26\,000$ is a number, independent of $x$ and $y$. Why? Because the $3$ extra notebooks ($36\,000$ dong) cost exactly $26\,000$ dong more than the $2$ fewer pens ($10\,000$ dong), however much class 8A buys. Check with $x=10$, $y=8$: $T_A=160\,000$, $T_B=186\,000$, the total is $346\,000$ and the difference is $26\,000$, in agreement with the two expressions above.
:::

:::warning Common mistakes
- **Not changing signs when removing a bracket with a minus sign.** Wrong: $(x^2-3x)-(2x^2-x)=x^2-3x-2x^2-x$. Why it is wrong: the $-$ sign in front of the bracket acts on both $2x^2$ and $-x$. Right: $x^2-3x-2x^2+x=-x^2-2x$.
- **Adding terms that are not like terms.** Wrong: $2x^2y+3xy^2=5x^3y^3$. Why it is wrong: $x^2y$ and $xy^2$ have different variable parts, so they cannot be added. Right: leave $2x^2y+3xy^2$ as it is.
- **Finding the degree before simplifying.** Wrong: the polynomial $x^3+2x-x^3+1$ has degree $3$. Why it is wrong: the two terms $x^3$ cancel. Right: simplify to $2x+1$, which has degree $1$.
- **Forgetting the coefficient $1$.** Wrong: the coefficient of $x$ in $x+2x$ is $0$, so the sum is $2x$. Why it is wrong: $x=1\cdot x$. Right: $x+2x=(1+2)x=3x$.
:::

**Connections.** Polynomials build on the expressions with letters and powers that you met in Year 7. Adding and subtracting polynomials is the basis for multiplying polynomials, identities and factorising in the next lessons, and polynomials in one variable will return when you study functions.

## Key terms

:::terms
- monomial | đơn thức
- coefficient | hệ số
- variable part | phần biến
- degree of a monomial | bậc của đơn thức
- like terms | đơn thức đồng dạng
- polynomial | đa thức
- term | hạng tử
- constant term | hạng tử tự do
- simplify a polynomial | thu gọn đa thức
- degree of a polynomial | bậc của đa thức
:::

## Summary

- A monomial is a number, a variable, or a product of numbers and variables; its degree is the sum of the exponents.
- Like terms (same variable part) are added by adding coefficients: $3x^2y+5x^2y=8x^2y$.
- A polynomial is a sum of monomials; its degree is found after simplifying.
- To add polynomials: remove the brackets, collect like terms, add the coefficients.
- To subtract polynomials: $A-B=A+(-B)$; when removing a bracket with a $-$ sign, change the sign of every term.

## Practice

Each exercise has the knowledge you need and the steps. Try it yourself first, then open the solution.

:::exercise
Find the coefficient and the degree of each monomial:

a) $6x^3y^2$.

b) $-x^2yz$.

c) $15$.

::hint
**What you need:** the degree of a monomial is the sum of the exponents of its variables; a non-zero number has degree $0$.

**Steps:**
1. Write the monomial as "number times variable part".
2. Add the exponents.

::solution
a) Coefficient $6$, degree $3+2=5$.

b) Coefficient $-1$, degree $2+1+1=4$.

c) Coefficient $15$, degree $0$.

So a) $6$ and $5$; b) $-1$ and $4$; c) $15$ and $0$.

**Answer.** a) $6$; $5$. b) $-1$; $4$. c) $15$; $0$.
:::

:::exercise
Simplify the polynomial $Q=4x^2y-3xy+2x^2y+5xy-7$ and find its degree.

::hint
**What you need:** add the like terms; the degree is found after simplifying.

**Steps:**
1. Group the terms containing $x^2y$ and the terms containing $xy$.
2. Add the coefficients, then find the highest degree.

::solution
We have $Q=(4x^2y+2x^2y)+(-3xy+5xy)-7=6x^2y+2xy-7$. The term $6x^2y$ has degree $3$.

So $Q=6x^2y+2xy-7$ and the degree of $Q$ is $3$.

**Answer.** $Q=6x^2y+2xy-7$; degree $3$.
:::

:::exercise
Consider the monomials $2x^2y$, $-3xy^2$, $5x^2y$, $xy^2$, $7x^2$. Group the like terms and find the sum of each group.

::hint
**What you need:** two monomials are like terms when they have the same variable part.

**Steps:**
1. Find the monomials with the same variable part.
2. Add the coefficients within each group.

::solution
The group with variable part $x^2y$ is $2x^2y$ and $5x^2y$, with sum $7x^2y$.

The group with variable part $xy^2$ is $-3xy^2$ and $xy^2$, with sum $(-3+1)xy^2=-2xy^2$. The monomial $7x^2$ is not like any other.

So the sums of the two groups are $7x^2y$ and $-2xy^2$.

**Answer.** $7x^2y$; $-2xy^2$.
:::

:::exercise
Let $A=2x^2-3x+5$ and $B=-x^2+4x-1$. Find $A+B$ and $A-B$.

::hint
**What you need:** $A-B=A+(-B)$; when removing a bracket with a $-$ sign, change the signs.

**Steps:**
1. Write $A+B$ and collect like terms.
2. Write $A-B$, change the signs of the terms of $B$, then collect.

::solution
We have $A+B=(2x^2-x^2)+(-3x+4x)+(5-1)=x^2+x+4$.

We have $A-B=2x^2-3x+5+x^2-4x+1=(2x^2+x^2)+(-3x-4x)+(5+1)=3x^2-7x+6$.

So $A+B=x^2+x+4$ and $A-B=3x^2-7x+6$.

**Answer.** $x^2+x+4$; $3x^2-7x+6$.
:::

:::exercise
Let $M=x^2+2xy-y^2$ and $N=3x^2-xy+2y^2$. Find $M+N$ and $M-N$.

::hint
**What you need:** adding and subtracting polynomials in two variables works just as for one variable.

**Steps:**
1. Add the terms with the same variable part $x^2$, $xy$, $y^2$.
2. For $M-N$, change the signs of the terms of $N$.

::solution
We have $M+N=(x^2+3x^2)+(2xy-xy)+(-y^2+2y^2)=4x^2+xy+y^2$.

We have $M-N=x^2+2xy-y^2-3x^2+xy-2y^2=(x^2-3x^2)+(2xy+xy)+(-y^2-2y^2)=-2x^2+3xy-3y^2$.

So $M+N=4x^2+xy+y^2$ and $M-N=-2x^2+3xy-3y^2$.

**Answer.** $4x^2+xy+y^2$; $-2x^2+3xy-3y^2$.
:::

:::exercise
A rectangular garden has length $(3x+2)$ m and width $(2x-1)$ m ($x>\dfrac12$). Write a polynomial for the perimeter of the garden, then find the perimeter when $x=5$.

::hint
**What you need:** perimeter of a rectangle $=2\cdot$(length $+$ width).

**Steps:**
1. Add the length and the width.
2. Multiply by $2$, then substitute $x=5$.

::solution
The semi-perimeter is $(3x+2)+(2x-1)=5x+1$ (m). The perimeter is $2(5x+1)=10x+2$ (m).

When $x=5$, the perimeter is $10\cdot5+2=52$ (m). (Check: length $17$ m, width $9$ m, $2(17+9)=52$.)

So the perimeter is $10x+2$ (m), which equals $52$ m when $x=5$.

**Answer.** $10x+2$ (m); $52$ m.
:::

:::exercise
A shop sells shirts at $150$ thousand dong and trousers at $200$ thousand dong (suppose). On the first day it sells $x$ shirts and $y$ pairs of trousers. On the second day it sells $5$ more shirts and $3$ fewer pairs of trousers than on the first day. Write polynomials for the total takings over the two days and for how much more the second day takes than the first (in thousand dong).

::hint
**What you need:** takings $=$ price $\times$ quantity; adding and subtracting polynomials.

**Steps:**
1. Write each day's takings as a polynomial and simplify.
2. Find the sum and the difference.

::solution
The first day's takings are $D_1=150x+200y$. On the second day it sells $x+5$ shirts and $y-3$ pairs of trousers, so $D_2=150(x+5)+200(y-3)=150x+200y+150$.

The sum is $D_1+D_2=300x+400y+150$. The difference is $D_2-D_1=150$.

So the total takings are $300x+400y+150$ (thousand dong), and the second day takes $150$ thousand dong more than the first.

**Answer.** $300x+400y+150$; $150$ thousand dong.
:::

:::exercise
Recall the lesson on cuboids. A cuboid has a base of length $(x+3)$ cm and width $x$ cm, and height $5$ cm. Write a polynomial for the lateral surface area, then find it when $x=4$.

::hint
**What you need:** $P_{\text{lat}}=2(a+b)c$, where $a$, $b$ are the base sides and $c$ is the height.

**Steps:**
1. Add the length and width of the base.
2. Multiply by $2\cdot5$, then substitute $x=4$.

::solution
We have $a+b=(x+3)+x=2x+3$. Hence the lateral surface area is $2(2x+3)\cdot5=20x+30\ (\text{cm}^2)$.

When $x=4$, it is $20\cdot4+30=110\ (\text{cm}^2)$. (Check: $a=7$, $b=4$, $2(7+4)\cdot5=110$.)

So the lateral surface area is $20x+30\ (\text{cm}^2)$, which equals $110\ \text{cm}^2$ when $x=4$.

**Answer.** $20x+30$; $110\ \text{cm}^2$.
:::

:::exercise
Find the polynomial $C$ such that $C+(x^2-2xy)=3x^2+xy-y^2$.

::hint
**What you need:** if $C+B=A$ then $C=A-B$.

**Steps:**
1. Write $C=(3x^2+xy-y^2)-(x^2-2xy)$.
2. Remove the brackets (changing signs), then simplify.

::solution
We have $C=(3x^2+xy-y^2)-(x^2-2xy)=3x^2+xy-y^2-x^2+2xy=2x^2+3xy-y^2$.

So $C=2x^2+3xy-y^2$.

**Answer.** $C=2x^2+3xy-y^2$.
:::

:::exercise Challenge
Prove that the value of the expression
$$E=(4x^2-3xy+y^2+7)+(-x^2+2xy-3y^2)-(3x^2-xy-2y^2)$$
does not depend on $x$ or $y$.

::hint
**What you need:** simplify the polynomial; if every term containing a variable cancels, only a number remains.

**Steps:**
1. Remove the brackets, changing signs in the third bracket.
2. Group the terms with the same variable part $x^2$, $xy$, $y^2$.

::solution
We have $E=4x^2-3xy+y^2+7-x^2+2xy-3y^2-3x^2+xy+2y^2$. Grouping like terms:
$$\begin{aligned} E&=(4x^2-x^2-3x^2)+(-3xy+2xy+xy)+(y^2-3y^2+2y^2)+7\\ &=0+0+0+7=7. \end{aligned}$$
So $E=7$ for all $x$, $y$, and the value of $E$ does not depend on $x$ or $y$.

**Answer.** $E=7$.
:::

## Mini test

:::quiz
::mc
The degree of the monomial $-3x^2y^3z$ is
A. $5$.
B. $-3$.
C. $6$.
D. $3$.
::key C
The degree is the sum of the exponents: $2+3+1=6$. A forgets the variable $z$, B is the coefficient, D is the number of variables.

::mc
Simplifying $5x^2y-2xy^2+x^2y+3xy^2$ gives
A. $6x^2y+5xy^2$.
B. $5x^2y+xy^2$.
C. $7x^2y^2$.
D. $6x^2y+xy^2$.
::key D
$(5+1)x^2y+(-2+3)xy^2=6x^2y+xy^2$. A drops the sign of $-2$, B forgets the term $x^2y$, C adds both groups although they are not like terms.

::mc
The sum $(2x^2-3x+1)+(x^2+5x-4)$ equals
A. $3x^2+2x-3$.
B. $3x^2+8x-3$.
C. $x^2-8x+5$.
D. $3x^2+2x+5$.
::key A
$(2+1)x^2+(-3+5)x+(1-4)=3x^2+2x-3$. B gets the sign of $-3x$ wrong, C is the difference instead of the sum, D gets the constant term wrong.

::mc
The difference $(x^2-3xy)-(2x^2-xy+y^2)$ equals
A. $3x^2-4xy+y^2$.
B. $-x^2-2xy-y^2$.
C. $-x^2-4xy-y^2$.
D. $x^2-2xy-y^2$.
::key B
$x^2-3xy-2x^2+xy-y^2=-x^2-2xy-y^2$. A is an addition, C forgets to change the sign of $-xy$, D forgets to change the sign of $2x^2$.

::tf
Let $P=4x^2y-3xy^2+2x^2y+xy^2-5$.
a) The degree of $P$ is $5$.
b) After simplifying, $P$ has $4$ terms.
c) The value of $P$ at $x=1$, $y=1$ is $-1$.
d) After simplifying, the coefficient of the term containing $xy^2$ is $-2$.
::key F F T T
After simplifying, $P=6x^2y-2xy^2-5$. a) False: the degree is $3$. b) False: there are $3$ terms. c) True: $6-2-5=-1$. d) True: $-3+1=-2$.

::sa
Let $A=2x^2-3xy+y^2$ and $B=x^2+xy-2y^2$. Find the value of $A-B$ at $x=2$, $y=1$.
::key -1
$A-B=x^2-4xy+3y^2$. At $x=2$, $y=1$: $4-8+3=-1$.

::sa
Find the value of $(x^2y+3xy-2)+(2x^2y-xy+5)$ at $x=1$, $y=2$.
::key 13
The expression equals $3x^2y+2xy+3$. At $x=1$, $y=2$: $6+4+3=13$.
:::
