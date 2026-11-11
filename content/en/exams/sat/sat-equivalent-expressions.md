---
title: Equivalent expressions and exponents
description: SAT Advanced Math: exponent rules, rational exponents, factoring, matching coefficients, rational expressions and rearranging formulas.
minutes: 35
---

:::goals
- Simplify expressions with the laws of exponents, including rational exponents and radicals.
- Factor quadratics and differences of squares, and find a factor among the options.
- Find unknown constants by matching coefficients of equivalent expressions.
- Simplify rational expressions and rearrange a formula to isolate a variable.
:::

"Which expression is equivalent to…?" is one of the most common question stems in the Advanced Math domain, which has about 13 to 15 questions in the test. These questions test algebra that Vietnamese students learn in grades 8 and 9, and the fastest students solve them in under a minute. Two tools from the previous lessons help: [plugging in a number](lesson:sat-desmos-strategies) and graphing both expressions in Desmos.

## Laws of exponents

:::theorem Laws of exponents
For $a, b>0$ and any exponents $m, n$:
- $a^m\cdot a^n=a^{m+n}$, $\dfrac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$, $(ab)^n=a^nb^n$;
- $a^0=1$, $a^{-n}=\dfrac{1}{a^n}$;
- $a^{\frac{m}{n}}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m$; in particular $a^{\frac12}=\sqrt a$.
:::

:::example Powers of a product
Which expression is equivalent to $(2x^3y)^2\cdot3xy^4$?
A. $6x^6y^6$
B. $12x^7y^6$
C. $12x^6y^8$
D. $36x^7y^6$

**Solution.** First the power, then the product:

$$(2x^3y)^2=4x^6y^2,\qquad 4x^6y^2\cdot3xy^4=12x^{7}y^{6}.$$

The answer is **B**. Option A forgets to square the $2$; option D squares the $3$ as well.
:::

:::example Rational exponents
For $x>0$, which expression is equivalent to $\sqrt{x^3}\cdot x^{-\frac12}$?
A. $x$
B. $x^2$
C. $x^{\frac34}$
D. $\dfrac1x$

**Solution.** Write the root as a power: $\sqrt{x^3}=x^{\frac32}$. Then $x^{\frac32}\cdot x^{-\frac12}=x^{\frac32-\frac12}=x^1$. The answer is **A**.
:::

## Factoring and factors

:::note Patterns to recognize
- $a^2-b^2=(a-b)(a+b)$
- $a^2\pm2ab+b^2=(a\pm b)^2$
- $px^2+qx+r$: look for two numbers with product $pr$ and sum $q$, split the middle term and group.
- $x-c$ is a factor of a polynomial $p(x)$ exactly when $p(c)=0$.
:::

:::example Finding a factor
Which of the following is a factor of $2x^2+5x-12$?
A. $x-4$
B. $2x+3$
C. $x+4$
D. $2x-4$

**Solution.** We need two numbers with product $2\cdot(-12)=-24$ and sum $5$: they are $8$ and $-3$.

$$2x^2+8x-3x-12=2x(x+4)-3(x+4)=(2x-3)(x+4).$$

The answer is **C**. Quick check: at $x=-4$, $2\cdot16-20-12=0$.
:::

## Matching coefficients

Two polynomials are equivalent (equal for every $x$) exactly when their coefficients of $x^2$, of $x$ and their constants are equal. This turns one equation into several simple ones.

:::example Find the constant
In the equation $(ax+3)(2x-5)=6x^2+bx-15$, $a$ and $b$ are constants and the equation is true for all values of $x$. What is the value of $b$?

**Solution.** Expand the left side: $2ax^2+(6-5a)x-15$.

$$x^2:\ 2a=6\iff a=3,\qquad x:\ b=6-5a=6-15=-9.$$

You type **-9**. The constants agree ($-15=-15$), as they must.
:::

## Rational expressions and formulas

To simplify a fraction of polynomials, factor and cancel common factors, remembering the values that make a denominator zero. To add fractions, use a common denominator.

:::example Adding rational expressions
For $x\ne2$ and $x\ne-2$, which expression is equivalent to $\dfrac{1}{x-2}+\dfrac{3}{x+2}$?
A. $\dfrac{4}{2x}$
B. $\dfrac{4}{x^2-4}$
C. $\dfrac{4x-4}{x^2-4}$
D. $\dfrac{4x+8}{x^2-4}$

**Solution.** The common denominator is $(x-2)(x+2)=x^2-4$:

$$\frac{(x+2)+3(x-2)}{x^2-4}=\frac{4x-4}{x^2-4}.$$

The answer is **C**. Option A adds numerators and denominators, which is never allowed.
:::

Rearranging a formula uses the same steps as solving an equation, keeping the other letters as they are.

:::example Rearranging a formula
The formula $F=\dfrac95C+32$ converts a temperature $C$ in degrees Celsius to $F$ in degrees Fahrenheit. Which equation gives $C$ in terms of $F$?
A. $C=\dfrac95F-32$
B. $C=\dfrac59F-32$
C. $C=\dfrac59(F+32)$
D. $C=\dfrac59(F-32)$

**Solution.** Subtract $32$, then multiply by $\dfrac59$: $F-32=\dfrac95C\iff C=\dfrac59(F-32)$. The answer is **D**. Check with water boiling at $F=212$: $\dfrac59\cdot180=100$.
:::

:::warning Common traps
- **Adding exponents when multiplying bases that differ.** $2^3\cdot3^2$ is $8\cdot9=72$, not $6^5$.
- **Squaring a sum term by term.** $(x+3)^2=x^2+6x+9$, not $x^2+9$.
- **Cancelling terms instead of factors.** In $\dfrac{x+6}{x+2}$ nothing cancels; in $\dfrac{x^2-9}{x+3}=\dfrac{(x-3)(x+3)}{x+3}$ the factor $x+3$ cancels.
- **Negative exponents.** $x^{-2}=\dfrac{1}{x^2}$, not $-x^2$.
:::

:::tip Check equivalence in Desmos
Type the original expression as `y=` and each option as another `y=`. The equivalent option is the one whose graph lies exactly on top of the original. For expressions with two letters, plug in numbers for both instead.
:::

:::terms
- equivalent expression | biểu thức tương đương
- exponent | số mũ
- rational exponent | số mũ hữu tỉ
- radical, square root | căn thức, căn bậc hai
- factor | nhân tử, thừa số
- coefficient | hệ số
- difference of squares | hiệu hai bình phương
- rational expression | phân thức
:::

## Similar exercises

:::exercise Multiple choice
Which expression is equivalent to $\dfrac{(3a^2b)^3}{9ab^2}$, where $a$ and $b$ are nonzero?
A. $a^5b$
B. $3a^4b$
C. $3a^5b$
D. $9a^5b$

::hint
**What you need:** $(xy)^n=x^ny^n$ and $\dfrac{a^m}{a^n}=a^{m-n}$.

**Steps:**
1. Expand the numerator: $27a^6b^3$.
2. Divide coefficient by coefficient and power by power.

::solution
$\dfrac{27a^6b^3}{9ab^2}=3a^5b$. The answer is **C**. Option A drops the coefficient, and option D divides $27$ by $3$ instead of by $9$.
:::

:::exercise Multiple choice
Which of the following is a factor of $3x^2-10x-8$?
A. $x+4$
B. $3x-2$
C. $3x+2$
D. $x-2$

::hint
**What you need:** two numbers with product $3\cdot(-8)$ and sum $-10$.

**Steps:**
1. The numbers are $-12$ and $2$.
2. Split the middle term and group.

::solution
$3x^2-12x+2x-8=3x(x-4)+2(x-4)=(3x+2)(x-4)$. The answer is **C**. Check: at $x=-\dfrac23$, $3\cdot\dfrac49+\dfrac{20}{3}-8=\dfrac43+\dfrac{20}3-8=0$.
:::

:::exercise Student-produced response
In the equation $(2x+k)(x-4)=2x^2-5x-12$, $k$ is a constant and the equation is true for all $x$. What is the value of $k$?

::hint
**What you need:** match the coefficients of $x$.

**Steps:**
1. Expand: $2x^2+(k-8)x-4k$.
2. Set $k-8=-5$ and check the constant.

::solution
$k-8=-5\iff k=3$, and the constant is $-4\cdot3=-12$, which matches. The answer is $3$.
:::

:::exercise Multiple choice
For $x>0$, which expression is equivalent to $x^{\frac23}\cdot x^{\frac13}\cdot\sqrt x$?
A. $x^{\frac13}$
B. $x\sqrt x$
C. $x^2$
D. $\sqrt[3]{x}$

::hint
**What you need:** add the exponents; $\sqrt x=x^{\frac12}$.

**Steps:**
1. $\dfrac23+\dfrac13+\dfrac12$.
2. Write the result back with a root.

::solution
$\dfrac23+\dfrac13+\dfrac12=\dfrac32$, and $x^{\frac32}=x\cdot x^{\frac12}=x\sqrt x$. The answer is **B**.
:::

:::exercise Multiple choice
The area of a trapezoid is $A=\dfrac12h(b_1+b_2)$. Which equation gives $h$ in terms of $A$, $b_1$ and $b_2$?
A. $h=\dfrac{2A}{b_1+b_2}$
B. $h=\dfrac{A}{2(b_1+b_2)}$
C. $h=2A-(b_1+b_2)$
D. $h=\dfrac{A(b_1+b_2)}{2}$

::hint
**What you need:** undo each operation in reverse order.

**Steps:**
1. Multiply both sides by $2$.
2. Divide by $b_1+b_2$.

::solution
$2A=h(b_1+b_2)\iff h=\dfrac{2A}{b_1+b_2}$. The answer is **A**.
:::

## Application exercises

:::exercise A path around a garden
A square garden has side length $x$ meters. A path $2$ meters wide runs around the outside of the garden. Write a simplified expression for the area of the path, in square meters. What is the area when $x=10$?

::hint
**What you need:** area of the path = area of the large square − area of the garden.

**Steps:**
1. The large square has side $x+4$.
2. Expand $(x+4)^2-x^2$.

::solution
$(x+4)^2-x^2=x^2+8x+16-x^2=8x+16$. When $x=10$ the path has area $96$ square meters. Check: $14^2-10^2=196-100=96$.
:::

:::exercise Student-produced response
If $x^2-y^2=48$ and $x+y=8$, what is the value of $x-y$?

::hint
**What you need:** the difference of squares.

**Steps:**
1. $x^2-y^2=(x+y)(x-y)$.
2. Substitute $x+y=8$.

::solution
$48=8(x-y)$, so $x-y=6$. (Here $x=7$, $y=1$.)
:::

:::exercise Student-produced response
If $x+\dfrac1x=5$, what is the value of $x^2+\dfrac{1}{x^2}$?

::hint
**What you need:** square both sides; the cross term is $2\cdot x\cdot\dfrac1x=2$.

**Steps:**
1. $\left(x+\dfrac1x\right)^2=x^2+2+\dfrac1{x^2}$.
2. Subtract $2$.

::solution
$25=x^2+2+\dfrac1{x^2}$, so $x^2+\dfrac1{x^2}=23$.
:::

:::exercise Challenge
For all $x\ne2$, $\dfrac{3x^2-5x-2}{x-2}=ax+b$, where $a$ and $b$ are constants. What is the value of $a+b$?

::hint
**What you need:** factor the numerator; one factor must be $x-2$.

**Steps:**
1. Find two numbers with product $3\cdot(-2)=-6$ and sum $-5$.
2. Cancel $x-2$.

::solution
The numbers are $-6$ and $1$: $3x^2-6x+x-2=3x(x-2)+(x-2)=(3x+1)(x-2)$. So the expression equals $3x+1$, giving $a=3$, $b=1$ and $a+b=4$.
:::

:::quiz
::mc
Which expression is equivalent to $(x^2)^3\cdot x^4$?
A. $x^9$
B. $x^{10}$
C. $x^{24}$
D. $x^{14}$
::key B
$(x^2)^3=x^6$ and $x^6\cdot x^4=x^{10}$. Option C multiplies all three exponents.

::mc
Which expression is equivalent to $4x^2-25$?
A. $(4x-5)(x+5)$
B. $(2x-5)^2$
C. $(4x-25)(x+1)$
D. $(2x-5)(2x+5)$
::key D
$4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.

::mc
Which expression is equivalent to $(x+3)^2$?
A. $x^2+9$
B. $x^2+3x+9$
C. $x^2+6x+9$
D. $x^2+6x+6$
::key C
$(x+3)^2=x^2+2\cdot3\cdot x+9$. Option A is the typical mistake of squaring term by term.

::mc
For $x>0$, which expression is equivalent to $x^{\frac12}\cdot x^{\frac13}$?
A. $\sqrt[6]{x^5}$
B. $\sqrt[6]{x}$
C. $\sqrt[5]{x^6}$
D. $x^{\frac16}$
::key A
$\dfrac12+\dfrac13=\dfrac56$ and $x^{\frac56}=\sqrt[6]{x^5}$. Options B and D multiply the exponents.

::tf
Consider the expression $(x-1)(x+5)$.
a) It is equivalent to $x^2+4x-5$.
b) $x+1$ is a factor of it.
c) Its value at $x=1$ is $0$.
d) It is equivalent to $(x+2)^2-9$.
::key T F T T
a) True: $x^2+5x-x-5$. b) False: its factors are $x-1$ and $x+5$. c) True: $0\cdot6=0$. d) True: $x^2+4x+4-9=x^2+4x-5$.

::sa
In the equation $(3x+2)(x+5)=3x^2+bx+10$, $b$ is a constant and the equation is true for all $x$. What is the value of $b$?
::key 17
$(3x+2)(x+5)=3x^2+15x+2x+10=3x^2+17x+10$.

::sa
If $a+b=7$ and $a-b=3$, what is the value of $a^2-b^2$?
::key 21
$a^2-b^2=(a+b)(a-b)=7\cdot3=21$.
:::
