---
title: Dividing polynomials in one variable
description: Divide monomials, divide a polynomial by a monomial and by another polynomial step by step; exact division and remainders, checking by multiplication.
minutes: 30
---

:::goals
- Divide a monomial by a monomial and a polynomial by a monomial using the rule for powers.
- Divide a polynomial in one variable by another, step by step, after arranging both in descending powers.
- Tell exact division from division with a remainder; write $A=B\cdot Q+R$ and check by multiplication.
- Apply polynomial division to problems about area and volume.
:::

A playground is a rectangle with area $(x^2+7x+10)$ m² and width $(x+2)$ m. How long is the playground? For one particular value this is easy: when $x=8$ the area is $130$ m², the width is $10$ m, so the length is $130\div10=13$ m. But what if $x$ is any number? We want an expression for the length that works for every $x$.

To get it, we have to divide one polynomial by the other, just as we divide $130$ by $10$ to find the length. In the last lesson you learnt to multiply polynomials, and division is the inverse of multiplication. The nice thing is that the layout for dividing polynomials is very like the way you learnt to divide whole numbers in primary school.

## Dividing a monomial by a monomial

**Why is $x^5\div x^2=x^3$?** Because $x^5=x\cdot x\cdot x\cdot x\cdot x$ and $x^2=x\cdot x$, so after cancelling $2$ factors of $x$, there remain $5-2=3$ factors of $x$. In general, $x^m\div x^n=x^{m-n}$ when $m\geq n$. The coefficients are divided as ordinary numbers.

:::definition Dividing a monomial by a monomial
To divide the monomial $ax^m$ by the monomial $bx^n$ ($b\neq0$, $m\geq n$), divide the coefficient by the coefficient and the power of the variable by the power of the variable:
$$ax^m\div bx^n=\dfrac ab\,x^{m-n}.$$
:::

:::example Dividing a monomial by a monomial
Work out the following divisions:

a) $12x^5\div(3x^2)$.

b) $(-8x^4)\div(2x)$.

c) $15x^3\div(-5x^3)$.

**Solution.** a) We divide the coefficients, $12\div3=4$, and the powers, $x^5\div x^2=x^3$. Hence $12x^5\div(3x^2)=4x^3$.

b) We have $(-8)\div2=-4$ and $x^4\div x=x^3$. Hence $(-8x^4)\div(2x)=-4x^3$.

c) We have $15\div(-5)=-3$ and $x^3\div x^3=x^0=1$. Hence $15x^3\div(-5x^3)=-3$.

So a) $4x^3$; b) $-4x^3$; c) $-3$.
:::

## Dividing a polynomial by a monomial

When the divisor is a monomial, we divide each term of the polynomial by it, because $(A+B)\div C=A\div C+B\div C$ (just as $(10+6)\div2=5+3$).

:::definition Dividing a polynomial by a monomial
To divide a polynomial $A$ by a monomial $B$ ($B\neq0$), divide each term of $A$ by $B$ and add the quotients.
:::

:::example Dividing a polynomial by a monomial
Work out the following divisions:

a) $(6x^3-9x^2+3x)\div(3x)$.

b) $(8x^4-12x^3+4x^2)\div(4x^2)$.

**Solution.** a) We divide each term by $3x$:
$$(6x^3-9x^2+3x)\div(3x)=6x^3\div3x-9x^2\div3x+3x\div3x=2x^2-3x+1.$$

b) We divide each term by $4x^2$:
$$(8x^4-12x^3+4x^2)\div(4x^2)=2x^2-3x+1.$$
Here $8x^4\div4x^2=2x^2$, $-12x^3\div4x^2=-3x$ and $4x^2\div4x^2=1$.

So a) $2x^2-3x+1$; b) $2x^2-3x+1$.
:::

## Dividing a polynomial by a polynomial

### Explore: dividing polynomials is like dividing numbers

Try $x=10$: the polynomial $x^2+5x+6$ has value $156$ and the polynomial $x+2$ has value $12$. We know $156\div12=13$. Let us see whether we can divide the polynomials in the same way.

Divide the first term of the dividend by the first term of the divisor: $x^2\div x=x$. Multiply $x$ by the divisor: $x(x+2)=x^2+2x$. Subtract: $(x^2+5x+6)-(x^2+2x)=3x+6$. Repeat: $3x\div x=3$, multiply $3(x+2)=3x+6$, subtract to get $0$. The quotient is $x+3$, and when $x=10$, $x+3=13$, exactly $156\div12$. This is the same method as for dividing numbers, except that we work "place by place" in powers of $x$.

:::definition Division of polynomials
Let $A$ (the dividend) and $B$ (the divisor) be polynomials with $B\neq0$. Dividing $A$ by $B$ gives a polynomial $Q$ (the **quotient**) and a polynomial $R$ (the **remainder**) such that
$$A=B\cdot Q+R,$$
where $R=0$ or the degree of $R$ is less than the degree of $B$. If $R=0$ we say that $A$ is **divisible** by $B$ and the division is exact; if $R\neq0$ it is a division with a remainder.
:::

:::theorem Steps for dividing a polynomial by a polynomial
1. Arrange both the dividend and the divisor in descending powers of the variable. Write any missing term with coefficient $0$ (for example $x^3-8=x^3+0x^2+0x-8$).
2. Divide the term of highest degree in the dividend by the term of highest degree in the divisor; this gives the first term of the quotient.
3. Multiply that term by the whole divisor, then subtract the product from the dividend (change the sign of every term of the product when subtracting).
4. Repeat steps 2 and 3 with the new polynomial, until you reach $0$ or a polynomial of degree less than that of the divisor. That last polynomial is the remainder.
:::

Now we answer the question from the start, going through all four steps of solving a problem.

:::example The length of the playground
A playground is a rectangle with area $(x^2+7x+10)$ m² and width $(x+2)$ m. Find an expression for the length of the playground, then find the length when $x=8$.

**Solution.**

*Understand.* Area equals length times width, so length equals area divided by width. We need $(x^2+7x+10)\div(x+2)$.

*Plan.* Both polynomials are already in descending powers with no missing terms, so we divide using the steps above.

*Solve.* Step 1: $x^2\div x=x$. Multiply $x$ by $x+2$ to get $x^2+2x$. Subtract: $(x^2+7x+10)-(x^2+2x)=5x+10$.

Step 2: $5x\div x=5$. Multiply $5$ by $x+2$ to get $5x+10$. Subtract: $(5x+10)-(5x+10)=0$.

The remainder is $0$, so the division is exact and $(x^2+7x+10)\div(x+2)=x+5$. When $x=8$, the length is $8+5=13$ (m).

So the length of the playground is $x+5$ (m), and it is $13$ m when $x=8$.

*Look back.* Check by multiplication: $(x+2)(x+5)=x^2+5x+2x+10=x^2+7x+10$, which is exactly the area. For $x=8$: $10\cdot13=130$, which matches the original $130$ m². What if the data change? For instance, if the width were $x+5$, the length would be $x+2$, because multiplication is commutative.
:::

:::example Exact division, cubic by linear
Work out $(x^3-6x^2+11x-6)\div(x-1)$.

**Solution.** Both polynomials are arranged in descending powers with no missing terms.

Step 1: $x^3\div x=x^2$. Multiply $x^2(x-1)=x^3-x^2$. Subtract: $(x^3-6x^2)-(x^3-x^2)=-5x^2$; bring down $11x$ to get $-5x^2+11x$.

Step 2: $-5x^2\div x=-5x$. Multiply $-5x(x-1)=-5x^2+5x$. Subtract: $(-5x^2+11x)-(-5x^2+5x)=6x$; bring down $-6$ to get $6x-6$.

Step 3: $6x\div x=6$. Multiply $6(x-1)=6x-6$. Subtract: $(6x-6)-(6x-6)=0$.

The remainder is $0$, so the division is exact.

So $(x^3-6x^2+11x-6)\div(x-1)=x^2-5x+6$.

Remark: since $x^2-5x+6=(x-2)(x-3)$, the original polynomial equals $(x-1)(x-2)(x-3)$, and the numbers $1$, $2$ and $3$ are all roots of it.
:::

:::example Division with a remainder
Work out $(2x^3-5x^2+6x-3)\div(2x-1)$.

**Solution.** Both polynomials are arranged in descending powers with no missing terms.

Step 1: $2x^3\div2x=x^2$. Multiply $x^2(2x-1)=2x^3-x^2$. Subtract: $(2x^3-5x^2)-(2x^3-x^2)=-4x^2$; bring down $6x$ to get $-4x^2+6x$.

Step 2: $-4x^2\div2x=-2x$. Multiply $-2x(2x-1)=-4x^2+2x$. Subtract: $(-4x^2+6x)-(-4x^2+2x)=4x$; bring down $-3$ to get $4x-3$.

Step 3: $4x\div2x=2$. Multiply $2(2x-1)=4x-2$. Subtract: $(4x-3)-(4x-2)=-1$.

The polynomial $-1$ has degree $0$, which is less than the degree of the divisor ($1$), so we stop. The quotient is $x^2-2x+2$ and the remainder is $-1$.

So $2x^3-5x^2+6x-3=(2x-1)(x^2-2x+2)+(-1)$.

Check: $(2x-1)(x^2-2x+2)=2x^3-4x^2+4x-x^2+2x-2=2x^3-5x^2+6x-2$, and $2x^3-5x^2+6x-2+(-1)=2x^3-5x^2+6x-3$, which is correct.
:::

:::example A dividend with missing terms
Work out $(x^3-8)\div(x-2)$.

**Solution.** The dividend has no $x^2$ or $x$ terms, so we write $x^3-8=x^3+0x^2+0x-8$.

Step 1: $x^3\div x=x^2$. Multiply $x^2(x-2)=x^3-2x^2$. Subtract: $(x^3+0x^2)-(x^3-2x^2)=2x^2$; bring down $0x$ to get $2x^2+0x$.

Step 2: $2x^2\div x=2x$. Multiply $2x(x-2)=2x^2-4x$. Subtract: $(2x^2+0x)-(2x^2-4x)=4x$; bring down $-8$ to get $4x-8$.

Step 3: $4x\div x=4$. Multiply $4(x-2)=4x-8$. Subtract: $(4x-8)-(4x-8)=0$.

So $(x^3-8)\div(x-2)=x^2+2x+4$.

Check: in the last lesson we found $(x-2)(x^2+2x+4)=x^3-8$.
:::

:::warning Common mistakes
- **Dividing each term by the first term of the divisor.** Wrong: $(x^2+7x+10)\div(x+2)=x^2\div x+7x\div x+10\div2=x+7+5$. Why it is wrong: dividing term by term is only for a monomial divisor, and $x+2$ has two terms. Right: set out the division step by step, which gives $x+5$.
- **Forgetting to change signs when subtracting.** Wrong: $(x^3-6x^2)-(x^3-x^2)=-6x^2-x^2=-7x^2$. Why it is wrong: the minus sign before the bracket changes the sign of both terms, so $-(-x^2)=+x^2$. Right: $-6x^2+x^2=-5x^2$.
- **Ignoring missing terms.** Wrong: dividing $x^3-8$ by $x-2$ keeping $x^3-8$ as it is, and bringing down $-8$ straight after $x^3$. Why it is wrong: the columns for $x^2$ and $x$ are lost, so the terms do not line up. Right: write $x^3+0x^2+0x-8$.
- **Stopping too early or too late.** Wrong: when dividing by $2x-1$ (degree $1$), stopping at $4x-3$ because "there is nothing left to bring down". Why it is wrong: $4x-3$ has degree $1$, not less than the degree of the divisor, so we can still divide. Right: carry on to the remainder $-1$ (degree $0$).
:::

:::tip Check by multiplication
After each division, multiply the quotient by the divisor and add the remainder. The result must be exactly the dividend. This is the most reliable check, and it is also where you use polynomial multiplication from the last lesson.
:::

**Connections.** Polynomial division relies on two things you have learnt: multiplying polynomials (to check) and subtracting polynomials (at every step). It also links to roots: when $A$ is divisible by $x-a$, then $a$ is a root of $A$, and the quotient gives the other roots. As for the playground at the start: the length is $x+5$, and you can check it by multiplying.

## Key terms

:::terms
- exact division | phép chia hết
- division with remainder | phép chia có dư
- dividend | số bị chia
- divisor | số chia
- quotient | thương
- remainder | số dư
- dividing a monomial by a monomial | chia đơn thức cho đơn thức
- dividing a polynomial by a monomial | chia đa thức cho đơn thức
- arranging in descending powers | sắp xếp theo luỹ thừa giảm dần
- missing term | hạng tử thiếu
:::

## Summary

- $ax^m\div bx^n=\dfrac ab\,x^{m-n}$ ($m\geq n$, $b\neq0$): divide the coefficients, subtract the exponents.
- Dividing a polynomial by a monomial: divide each term by the monomial and add the quotients.
- Dividing a polynomial by a polynomial: arrange in descending powers (insert $0$ terms if needed), then repeat: divide the first terms, multiply by the divisor, subtract.
- $A=B\cdot Q+R$ with $R=0$ or degree of $R<$ degree of $B$; $R=0$ is an exact division.
- Always check by multiplication: $B\cdot Q+R=A$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Work out the following divisions:

a) $20x^6\div(5x^2)$.

b) $(-18x^4)\div(6x)$.

c) $15x^3\div(-5x^3)$.

::hint
**What you need:** $ax^m\div bx^n=\dfrac ab\,x^{m-n}$.

**Steps:**
1. Divide the coefficients.
2. Subtract the exponent of the divisor from the exponent of the dividend.

::solution
a) We have $20\div5=4$ and $x^6\div x^2=x^4$, so $20x^6\div(5x^2)=4x^4$.

b) We have $(-18)\div6=-3$ and $x^4\div x=x^3$, so $(-18x^4)\div(6x)=-3x^3$.

c) We have $15\div(-5)=-3$ and $x^3\div x^3=1$, so $15x^3\div(-5x^3)=-3$.

So a) $4x^4$; b) $-3x^3$; c) $-3$.

**Answer.** a) $4x^4$; b) $-3x^3$; c) $-3$.
:::

:::exercise
Work out the following divisions:

a) $(15x^3-5x^2+10x)\div(-5x)$.

b) $(4x^4-8x^2)\div(-2x^2)$.

::hint
**What you need:** divide each term by the monomial, and watch the signs of the coefficients.

**Steps:**
1. a) Divide $15x^3$, $-5x^2$ and $10x$ in turn by $-5x$.
2. b) Divide $4x^4$ and $-8x^2$ by $-2x^2$.

::solution
a) We have $15x^3\div(-5x)=-3x^2$, $(-5x^2)\div(-5x)=x$ and $10x\div(-5x)=-2$. Hence $(15x^3-5x^2+10x)\div(-5x)=-3x^2+x-2$.

b) We have $4x^4\div(-2x^2)=-2x^2$ and $(-8x^2)\div(-2x^2)=4$. Hence $(4x^4-8x^2)\div(-2x^2)=-2x^2+4$.

So a) $-3x^2+x-2$; b) $-2x^2+4$.

**Answer.** a) $-3x^2+x-2$; b) $-2x^2+4$.
:::

:::exercise
Work out the following divisions:

a) $(x^2+6x+8)\div(x+2)$.

b) $(x^2-x-2)\div(x-2)$.

c) $(x^2-5x+6)\div(x-2)$.

::hint
**What you need:** divide the first term by the first term, multiply by the divisor, then subtract.

**Steps:**
1. The first step in all three parts is $x^2\div x=x$.
2. After subtracting, divide the term in $x$ of the result by $x$.

::solution
a) Step 1: $x^2\div x=x$; $x(x+2)=x^2+2x$; $(x^2+6x+8)-(x^2+2x)=4x+8$. Step 2: $4x\div x=4$; $4(x+2)=4x+8$; the difference is $0$. So $(x^2+6x+8)\div(x+2)=x+4$.

b) Step 1: $x^2\div x=x$; $x(x-2)=x^2-2x$; $(x^2-x-2)-(x^2-2x)=x-2$. Step 2: $x\div x=1$; $1\cdot(x-2)=x-2$; the difference is $0$. So $(x^2-x-2)\div(x-2)=x+1$.

c) Step 1: $x^2\div x=x$; $x(x-2)=x^2-2x$; $(x^2-5x+6)-(x^2-2x)=-3x+6$. Step 2: $-3x\div x=-3$; $-3(x-2)=-3x+6$; the difference is $0$. So $(x^2-5x+6)\div(x-2)=x-3$.

**Answer.** a) $x+4$; b) $x+1$; c) $x-3$.
:::

:::exercise
Work out $(2x^2-7x+3)\div(2x-1)$.

::hint
**What you need:** the first term of the divisor is $2x$, not $x$.

**Steps:**
1. Divide $2x^2$ by $2x$.
2. Multiply the result by $2x-1$ and subtract to get $-6x+3$.

::solution
Step 1: $2x^2\div2x=x$; $x(2x-1)=2x^2-x$; $(2x^2-7x+3)-(2x^2-x)=-6x+3$.

Step 2: $-6x\div2x=-3$; $-3(2x-1)=-6x+3$; $(-6x+3)-(-6x+3)=0$.

The remainder is $0$, so the division is exact. So $(2x^2-7x+3)\div(2x-1)=x-3$.

**Answer.** $x-3$.
:::

:::exercise
Work out $(x^3+2x^2-x-2)\div(x+2)$.

::hint
**What you need:** after the first step, the result of the subtraction may lose a term.

**Steps:**
1. Divide $x^3$ by $x$, multiply by $x+2$ and subtract; the $2x^2$ terms cancel.
2. Bring down the next terms and carry on.

::solution
Step 1: $x^3\div x=x^2$; $x^2(x+2)=x^3+2x^2$; $(x^3+2x^2)-(x^3+2x^2)=0$; bring down $-x$ to get $-x$, then bring down $-2$ to get $-x-2$.

Step 2: $-x\div x=-1$; $-1\cdot(x+2)=-x-2$; $(-x-2)-(-x-2)=0$.

The remainder is $0$. So $(x^3+2x^2-x-2)\div(x+2)=x^2-1$.

Check: $(x+2)(x^2-1)=x^3-x+2x^2-2=x^3+2x^2-x-2$, which is correct.

**Answer.** $x^2-1$.
:::

:::exercise
Work out the following divisions and write each result in the form $A=B\cdot Q+R$:

a) $(x^2+3x+5)\div(x+1)$.

b) $(x^3+x^2-4x+5)\div(x-1)$.

::hint
**What you need:** a division with a remainder stops when the degree of the remainder is less than the degree of the divisor.

**Steps:**
1. a) Two steps of division; the remainder is a number.
2. b) Three steps of division; watch the signs when subtracting.

::solution
a) Step 1: $x^2\div x=x$; $x(x+1)=x^2+x$; $(x^2+3x)-(x^2+x)=2x$; bring down $5$ to get $2x+5$. Step 2: $2x\div x=2$; $2(x+1)=2x+2$; $(2x+5)-(2x+2)=3$. The remainder is $3$, of degree $0$, which is less than the degree $1$ of the divisor. So $x^2+3x+5=(x+1)(x+2)+3$.

b) Step 1: $x^3\div x=x^2$; $x^2(x-1)=x^3-x^2$; $(x^3+x^2)-(x^3-x^2)=2x^2$; bring down $-4x$ to get $2x^2-4x$. Step 2: $2x^2\div x=2x$; $2x(x-1)=2x^2-2x$; $(2x^2-4x)-(2x^2-2x)=-2x$; bring down $5$ to get $-2x+5$. Step 3: $-2x\div x=-2$; $-2(x-1)=-2x+2$; $(-2x+5)-(-2x+2)=3$. So $x^3+x^2-4x+5=(x-1)(x^2+2x-2)+3$.

**Answer.** a) quotient $x+2$, remainder $3$; b) quotient $x^2+2x-2$, remainder $3$.
:::

:::exercise
Work out $(x^4-16)\div(x-2)$.

::hint
**What you need:** write in the missing terms: $x^4-16=x^4+0x^3+0x^2+0x-16$.

**Steps:**
1. At each step the term of the quotient goes down by one power.
2. There are $4$ steps of division.

::solution
Write $x^4-16=x^4+0x^3+0x^2+0x-16$.

Step 1: $x^4\div x=x^3$; $x^3(x-2)=x^4-2x^3$; the difference is $2x^3$; bring down $0x^2$ to get $2x^3+0x^2$. Step 2: $2x^3\div x=2x^2$; $2x^2(x-2)=2x^3-4x^2$; the difference is $4x^2$; bring down $0x$ to get $4x^2+0x$. Step 3: $4x^2\div x=4x$; $4x(x-2)=4x^2-8x$; the difference is $8x$; bring down $-16$ to get $8x-16$. Step 4: $8x\div x=8$; $8(x-2)=8x-16$; the difference is $0$.

So $(x^4-16)\div(x-2)=x^3+2x^2+4x+8$.

Check: $(x-2)(x^3+2x^2+4x+8)=x^4+2x^3+4x^2+8x-2x^3-4x^2-8x-16=x^4-16$, which is correct.

**Answer.** $x^3+2x^2+4x+8$.
:::

:::exercise
A cuboid box has volume $(x^3+6x^2+8x)$ cm³ and height $x$ cm. Its base is a rectangle of width $(x+2)$ cm.

a) Find an expression for the area of the base.

b) Find an expression for the length of the base.

c) Find the length of the base when $x=2$.

::hint
**What you need:** volume equals base area times height; base area equals length times width.

**Steps:**
1. a) Divide the volume by the height $x$.
2. b) Divide the base area by $x+2$.

::solution
a) The base area equals the volume divided by the height: $(x^3+6x^2+8x)\div x=x^2+6x+8$ (cm²).

b) The length of the base equals the base area divided by the width $x+2$. Step 1: $x^2\div x=x$; $x(x+2)=x^2+2x$; $(x^2+6x+8)-(x^2+2x)=4x+8$. Step 2: $4x\div x=4$; $4(x+2)=4x+8$; the difference is $0$. So the length of the base is $x+4$ (cm).

c) When $x=2$, the length of the base is $2+4=6$ (cm). Check: the volume is $8+24+16=48$ (cm³) and $4\cdot6\cdot2=48$.

So a) $x^2+6x+8$ (cm²); b) $x+4$ (cm); c) $6$ cm.

**Answer.** a) $x^2+6x+8$; b) $x+4$; c) $6$ cm.
:::

:::exercise
(Revision of multiplying and adding polynomials.) Work out $(x^3-2x^2+x+4)\div(x-2)$, then check the result by multiplication.

::hint
**What you need:** $A=B\cdot Q+R$.

**Steps:**
1. After the first step, the result of the subtraction is just $x+4$.
2. Multiply $(x-2)$ by the quotient and add the remainder.

::solution
Step 1: $x^3\div x=x^2$; $x^2(x-2)=x^3-2x^2$; $(x^3-2x^2)-(x^3-2x^2)=0$; bring down $x$ and $4$ to get $x+4$ (the term in $x$ of the quotient is $0$). Step 2: $x\div x=1$; $1\cdot(x-2)=x-2$; $(x+4)-(x-2)=6$. The remainder is $6$, of degree $0$, which is less than the degree of the divisor.

The quotient is $x^2+1$ and the remainder is $6$. Check: $(x-2)(x^2+1)=x^3+x-2x^2-2=x^3-2x^2+x-2$ and $x^3-2x^2+x-2+6=x^3-2x^2+x+4$, which is correct.

So $x^3-2x^2+x+4=(x-2)(x^2+1)+6$.

**Answer.** Quotient $x^2+1$, remainder $6$.
:::

:::exercise Challenge
a) Work out $(2x^4-3x^3-3x^2+6x-2)\div(x^2-2)$.

b) Is $1$ a root of the quotient you found?

::hint
**What you need:** the divisor $x^2-2=x^2+0x-2$ has degree $2$; we stop when the remainder has degree less than $2$.

**Steps:**
1. a) The first term of the quotient is $2x^4\div x^2=2x^2$.
2. b) Substitute $x=1$ into the quotient.

::solution
a) Write the divisor as $x^2+0x-2$.

Step 1: $2x^4\div x^2=2x^2$; $2x^2(x^2-2)=2x^4-4x^2$; $(2x^4-3x^3-3x^2)-(2x^4-4x^2)=-3x^3+x^2$; bring down $6x$ to get $-3x^3+x^2+6x$. Step 2: $-3x^3\div x^2=-3x$; $-3x(x^2-2)=-3x^3+6x$; $(-3x^3+x^2+6x)-(-3x^3+6x)=x^2$; bring down $-2$ to get $x^2-2$. Step 3: $x^2\div x^2=1$; $1\cdot(x^2-2)=x^2-2$; the difference is $0$.

So $(2x^4-3x^3-3x^2+6x-2)\div(x^2-2)=2x^2-3x+1$.

b) Let $T(x)=2x^2-3x+1$. We have $T(1)=2-3+1=0$, so $x=1$ is a root of the quotient.

So a) the quotient is $2x^2-3x+1$; b) yes, $1$ is a root.

**Answer.** a) $2x^2-3x+1$; b) yes.
:::

## Mini test

:::quiz
::mc TH
The quotient of $12x^6\div(4x^2)$ is
A. $3x^3$.
B. $3x^4$.
C. $8x^4$.
D. $3x^8$.
::key B
Divide the coefficients $12\div4=3$ and subtract the exponents $6-2=4$. A takes $6\div2=3$ for the exponent, C subtracts the coefficients and D adds the exponents.

::mc TH
The result of $(9x^3-6x^2)\div(3x)$ is
A. $3x^2-2$.
B. $6x^2-3x$.
C. $3x^2-2x$.
D. $3x^2+2x$.
::key C
$9x^3\div3x=3x^2$ and $-6x^2\div3x=-2x$. A drops the $x$ from the second term, B subtracts the coefficients instead of dividing and D has the wrong sign.

::mc VD
The quotient of $(x^2+x-6)\div(x-2)$ is
A. $x+1$.
B. $x-3$.
C. $x+4$.
D. $x+3$.
::key D
$(x-2)(x+3)=x^2+x-6$. B has the wrong sign, and C and A take the wrong second term when subtracting.

::mc VD
The remainder in the division $(x^2+3x+5)\div(x+1)$ is
A. $3$.
B. $5$.
C. $1$.
D. $2$.
::key A
$x^2+3x+5=(x+1)(x+2)+3$. A is the constant term of the quotient, B is the constant term of the dividend and C is the constant term of the divisor.

::tf VD VD TH TH
Let $A=x^3+3x^2+3x+1$ and $B=x+1$. Decide whether each statement is true or false.
a) The quotient of $A$ divided by $B$ is $x^2+2x+1$.
b) The remainder of this division is $1$.
c) $A=(x+1)(x^2+2x+1)$.
d) $x=-1$ is a root of $A$.
::key T F T T
a) True. b) False: the remainder is $0$, because $(x+1)(x^2+2x+1)=x^3+3x^2+3x+1$. c) True. d) True: $-1+3-3+1=0$.

::sa VD
Divide $x^3-8$ by $x-2$, then find the value of the quotient at $x=1$.
::key 7
The quotient is $x^2+2x+4$; at $x=1$ it equals $1+2+4=7$.

::sa VD
Find the remainder when $(x^3-3x^2+3x+5)$ is divided by $(x-1)$.
::key 6
$x^3-3x^2+3x+5=(x-1)(x^2-2x+1)+6$.
:::
