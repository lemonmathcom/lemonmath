---
title: Monomials
description: Recognise monomials, simplify them, find the coefficient, variable part and degree, spot like monomials, and add, subtract and multiply monomials.
minutes: 20
---

:::goals
- Recognise monomials and monomials in simplest form; find the coefficient, the variable part and the degree of a monomial.
- Recognise like monomials, and add and subtract like monomials.
- Multiply two monomials by multiplying coefficient by coefficient and variable part by variable part.
- Use monomials to write areas and volumes briefly in real-life problems.
:::

Picture a gift box with a square base of side $x$ cm. Its height is twice the side of the base, that is $2x$ cm. So the volume is $x\cdot x\cdot2x$ (cm³). That is a mouthful to write. Is there a shorter way, and what kind of expression is it?

In grade $7$ you learned to let a letter stand for a number, and how to multiply two powers with the same base. Those two ideas are enough to meet the simplest kind of algebraic expression, the monomial. Once you know it, you can name, compare and work with expressions like the volume of the box, without the clutter.

## Monomials and monomials in simplest form

### Explore: writing the volume of the gift box briefly

To see what the expression means, try a real number. Take $x=3$. The base is a square with side $3$ cm and the height is $2\cdot3=6$ cm. The volume is $3\cdot3\cdot6=54$ cm³.

Look at the volume again: several factors are the same, so we group them. The number $2$ stands on its own, and $x\cdot x\cdot x=x^3$. So the volume is $2x^3$. Check with $x=3$: $2\cdot3^3=2\cdot27=54$, the same as before. So $x\cdot x\cdot2x=2x^3$.

Since $2x^3$ is short and easy to read, we want to know which expressions belong to the same family. The table below lists some expressions and shows which are monomials, and why.

| Expression | A monomial? | Why |
|---|---|---|
| $7$ | Yes | it is just a number |
| $y$ | Yes | it is just a variable |
| $-2xy$ | Yes | a product of the number $-2$ and the variables $x$, $y$ |
| $\dfrac{2}{3}x^2y$ | Yes | a product of the number $\dfrac{2}{3}$ and variables |
| $x+y$ | No | there is an addition between two variables |
| $\dfrac{3}{x}$ | No | the variable $x$ is in the denominator |

:::definition Monomial
A **monomial** is an expression that is just a number, or just a variable, or a product of numbers and variables (with the variables raised to natural-number powers).
:::

A monomial can have more than one variable. For example, $-2xy$ has the two variables $x$ and $y$. The volume $x\cdot x\cdot2x$ is also a monomial, but it is not tidy, because the variable $x$ appears more than once. We need a standard way to write it.

:::definition Monomial in simplest form, coefficient, variable part, degree
A monomial **in simplest form** is a monomial made of one number multiplied by powers of the variables, with each variable appearing only once.

In the monomial in simplest form $-5x^2y$:
- the number $-5$ is the **coefficient**;
- $x^2y$ is the **variable part**;
- the **degree** of the monomial is the sum of the exponents of the variables: $2+1=3$.
:::

Do not worry if these conventions look odd at first. The exponent of $y$ is $1$ even though we do not write it, because $y=y^1$. A non-zero number is a monomial of degree $0$. The number $0$ is a monomial too, called the zero monomial, and it alone has no degree.

## Operations with monomials

### Like monomials, addition and subtraction

Picture $3$ packets of sweets plus $5$ identical packets: that makes $8$ packets. The expression $3x^2+5x^2$ works the same way, because each $x^2$ is an identical "packet". So $3x^2+5x^2=8x^2$. Check with $x=2$: $3\cdot4+5\cdot4=32$ and $8\cdot4=32$.

Why does counting packets work? Because of the distributive law: $3x^2+5x^2=(3+5)x^2$. Here is a spot where many people slip: it only works when the two monomials have the same variable part, since only then are the packets identical. Such monomials have a name, which comes next.

:::definition Like monomials
Two monomials with non-zero coefficients and **the same variable part** are called **like monomials**.

To add (subtract) like monomials, add (subtract) the coefficients and keep the variable part the same.
:::

### Multiplying two monomials

Now multiply two monomials: $(2x^2)\cdot(3x^3)$. Factors in a product can be swapped, so group numbers with numbers and variables with variables: $2\cdot3\cdot x^2\cdot x^3$. The numbers give $6$. For the variable, use the rule for multiplying powers with the same base: $x^2\cdot x^3=x^{2+3}=x^5$. So $(2x^2)(3x^3)=6x^5$.

:::theorem Multiplying two monomials
To multiply two monomials, multiply the coefficients together and multiply the variable parts together (for the same variable, add the exponents):
$$(a\,x^m y^n)\cdot(b\,x^p y^q)=ab\,x^{m+p}y^{n+q}.$$
:::

## Examples

We begin with the most basic question: is a given expression a monomial? The example below shows how to check each one.

:::example Recognising monomials
Of the expressions $5$, $-x^2y$, $2x+3$, $\dfrac{4}{y}$, $\dfrac{1}{3}xy^2$, which are monomials?

**Solution.** Check whether each expression is a number, a variable or a product of numbers and variables:

- $5$ is a number, so it is a monomial.
- $-x^2y$ is a product of $-1$ and variables, so it is a monomial.
- $2x+3$ contains an addition, so it is not a monomial.
- $\dfrac{4}{y}$ has a variable in the denominator, so it is not a monomial.
- $\dfrac{1}{3}xy^2$ is a product of the number $\dfrac13$ and variables, so it is a monomial.

So there are three monomials: $5$, $-x^2y$ and $\dfrac{1}{3}xy^2$.
:::

A long monomial is simplified first, and then we can read off its coefficient, variable part and degree. This example does all of those steps.

:::example Simplifying a monomial
Simplify $A=4x\cdot\dfrac12y\cdot x^2y$, then give the coefficient, the variable part and the degree of $A$.

**Solution.** Group the numbers, then group each variable, using $x\cdot x^2=x^{1+2}$ and $y\cdot y=y^{1+1}$:

$$A=\left(4\cdot\frac12\right)\cdot(x\cdot x^2)\cdot(y\cdot y)=2x^3y^2.$$

So $A=2x^3y^2$ has coefficient $2$, variable part $x^3y^2$ and degree $3+2=5$.
:::

Once a monomial is in simplest form, reading its coefficient and degree is quick. We practise on a few, including one with no number written in front.

:::example Coefficient and degree
Find the coefficient and the degree of the monomials $-7x^2y$, $\dfrac34x^4$ and $xy^2z$.

**Solution.** For each monomial, the number in front is the coefficient, and we add the exponents to get the degree. Note that $xy^2z$ has no number written in front, so its coefficient is $1$:

| Monomial | Coefficient | Degree |
|---|---|---|
| $-7x^2y$ | $-7$ | $2+1=3$ |
| $\dfrac34x^4$ | $\dfrac34$ | $4$ |
| $xy^2z$ | $1$ | $1+2+1=4$ |
:::

Back to the idea of identical packets: which monomials in a list are like one another, and what do we get when we add them?

:::example Like monomials, addition and subtraction
Of the monomials $2xy^2$, $-xy^2$, $3x^2y$, $5y^2x$, which are like $xy^2$? Find the sum of those monomials.

**Solution.** Compare the variable parts. We have $5y^2x=5xy^2$ because multiplication is commutative. The variable part of $3x^2y$ is $x^2y$, which is different from $xy^2$.

So the three monomials $2xy^2$, $-xy^2$, $5y^2x$ are like $xy^2$. Add the coefficients and keep the variable part:

$$2xy^2+(-xy^2)+5xy^2=(2-1+5)xy^2=6xy^2.$$

So the sum is $6xy^2$.
:::

Addition needs like monomials, but multiplication does not. Any two monomials can be multiplied.

:::example Multiplying two monomials
Work out $(-3x^2y)\cdot(2xy^3)$ and give the degree of the result.

**Solution.** Multiply the coefficients, then multiply each variable by adding its exponents ($x$ has $2+1$, $y$ has $1+3$):

$$(-3x^2y)\cdot(2xy^3)=(-3\cdot2)\cdot x^{2+1}\cdot y^{1+3}=-6x^3y^4.$$

So the result is $-6x^3y^4$, of degree $3+4=7$.
:::

Last, we return to the gift box from the start, now with two kinds of box. Monomials let us write the total volume very briefly.

:::example The volume of two kinds of box
Box A has a square base with side $x$ cm and height $2x$ cm. Box B is a cube with side $x$ cm. Write the volume of one box A plus the volume of one box B as a monomial, then find its value when $x=4$.

**Solution.** The volume of box A is $x\cdot x\cdot2x=2x^3$. The volume of box B is $x\cdot x\cdot x=x^3$. These two monomials are like monomials, so we add the coefficients:

$$2x^3+x^3=(2+1)x^3=3x^3.$$

When $x=4$: $3\cdot4^3=3\cdot64=192$.

So the total volume is $3x^3$ cm³, which is $192$ cm³ when $x=4$.
:::

:::warning Common mistakes
- **Thinking that $x+y$ is a monomial.** Some people write: $x+y$ is a monomial. The slip is that a monomial only has multiplication between numbers and variables, never addition. Right: $x+y$ is not a monomial.
- **Finding the degree by multiplying the exponents.** It is tempting to say the degree of $x^2y^3$ is $2\cdot3=6$. But the degree is the sum of the exponents, so the right answer is $2+3=5$.
- **Adding the exponents when adding monomials.** Some people write $3x^2+5x^2=8x^4$. Remember the packets: adding the coefficients leaves the variable part alone, just as $3$ packets plus $5$ packets make $8$ packets. Right: $8x^2$. (Try $x=2$: $3\cdot4+5\cdot4=32$, but $8\cdot2^4=128$.)
- **Multiplying the exponents when multiplying powers.** Some people write $x^2\cdot x^3=x^6$. Write it out: $x^2\cdot x^3=(x\cdot x)(x\cdot x\cdot x)$ has $5$ factors of $x$. Right: $x^5$.
:::

## Key terms

:::terms
- monomial | đơn thức
- variable | biến
- coefficient | hệ số
- variable part | phần biến
- monomial in its simplest form | đơn thức thu gọn
- degree of a monomial | bậc của đơn thức
- like terms | đơn thức đồng dạng
- power | lũy thừa
- exponent (index) | số mũ
- constant | hằng số
:::

## Summary

- A monomial is a number, a variable, or a product of numbers and variables. An expression with addition, subtraction or a variable in the denominator is not a monomial.
- A monomial in simplest form $ax^my^n$ has coefficient $a$, variable part $x^my^n$, and degree equal to the sum of the exponents $m+n$.
- Two monomials are like monomials if their coefficients are non-zero and they have the same variable part. To add or subtract them, add or subtract the coefficients and keep the variable part.
- To multiply two monomials, multiply the coefficients together and the variable parts together (adding the exponents of the same variable).
- To check an answer, replace the variables with a small number, for example $x=2$, and compare the two sides.
The opening question has an answer: the volume of the gift box can be written as one short monomial, and monomials give us a tidy way to name, compare and calculate. The one thing to remember is that when you add, the variable part stays the same, and when you multiply, the exponents add.

## Practice

Each exercise comes with what you need to know and hints for the steps. Try it yourself first, and open the solution only when you are stuck. Work slowly and steadily, and monomials will soon feel familiar.

:::exercise
Of the expressions $-3$, $x^2y$, $x-2y$, $\dfrac{5}{x}$, $\dfrac{2}{3}ab$, $y^3$, which are monomials?

::hint
**What you need:** a monomial is a number, a variable, or a product of numbers and variables.

**Steps:**
1. See whether the expression contains an addition or a subtraction.
2. See whether any variable is in a denominator.

::solution
A monomial is an algebraic expression consisting only of a number, or a variable, or a product of numbers and variables (including powers of variables with natural-number exponents).

The expression $-3$ is a number, so it is a monomial.

The expression $x^2y$ is a product of variables, so it is a monomial.

The expression $x-2y$ contains a subtraction, so it is not a monomial.

The expression $\dfrac{5}{x}$ has a variable in the denominator, so it is not a monomial.

The expression $\dfrac23ab$ is a product of a number and variables, so it is a monomial.

The expression $y^3$ is a power of a variable, so it is a monomial.

So the monomials are $-3$, $x^2y$, $\dfrac23ab$, $y^3$.

**Answer.** $-3$, $x^2y$, $\dfrac23ab$, $y^3$.
:::

:::exercise
Simplify, then give the coefficient and the degree:

a) $5x\cdot(-2)\cdot xy^2$.

b) $\dfrac12x^2\cdot6y\cdot x$.

::hint
**What you need:** group the numbers together, group each variable, then add the exponents of the same variable.

**Steps:**
1. Multiply the numbers.
2. Write one power for each variable.
3. Add the exponents to find the degree.

::solution
To simplify a monomial, we multiply the coefficients together and multiply powers of the same variable using $x^m\cdot x^n=x^{m+n}$. The degree of a monomial is the sum of the exponents of its variables.

a) We have
$$5x\cdot(-2)\cdot xy^2=(5\cdot(-2))\cdot(x\cdot x)\cdot y^2=-10x^2y^2.$$
The coefficient is $-10$; the degree is $2+2=4$.

b) We have
$$\frac12x^2\cdot6y\cdot x=\left(\frac12\cdot6\right)\cdot(x^2\cdot x)\cdot y=3x^3y.$$
The coefficient is $3$; the degree is $3+1=4$.

So a) the simplified monomial is $-10x^2y^2$, coefficient $-10$, degree $4$; b) the simplified monomial is $3x^3y$, coefficient $3$, degree $4$.

**Answer.** a) $-10x^2y^2$, coefficient $-10$, degree $4$; b) $3x^3y$, coefficient $3$, degree $4$.
:::

:::exercise
Work out:

a) $6xy^2+(-2xy^2)+xy^2$.

b) $9x^3y-4x^3y-x^3y$.

::hint
**What you need:** for like monomials, add or subtract the coefficients and keep the variable part.

**Steps:**
1. Check that the monomials have the same variable part.
2. Work out the algebraic sum of the coefficients.

::solution
The monomials in each part are like monomials (same variable part), so we add or subtract the coefficients and keep the variable part.

a) We have
$$6xy^2+(-2xy^2)+xy^2=(6-2+1)xy^2=5xy^2.$$

b) We have
$$9x^3y-4x^3y-x^3y=(9-4-1)x^3y=4x^3y.$$

So a) the result is $5xy^2$; b) the result is $4x^3y$.

**Answer.** a) $5xy^2$; b) $4x^3y$.
:::

:::exercise
Remember powers from grade $7$: $x^m\cdot x^n=x^{m+n}$.

a) Write $2^3\cdot2^4$ as a single power of $2$, then work out its value.

b) Write $x^3\cdot x^4$ as a single power of $x$.

::hint
**What you need:** to multiply two powers with the same base, keep the base and add the exponents.

**Steps:**
1. Add the two exponents.
2. In part a), work out $2^7$.

::solution
We apply the rule for multiplying powers with the same base: $x^m\cdot x^n=x^{m+n}$.

a) We have
$$2^3\cdot2^4=2^{3+4}=2^7=128.$$
Check: $2^3\cdot2^4=8\cdot16=128$.

b) We have
$$x^3\cdot x^4=x^{3+4}=x^7.$$

So a) $2^3\cdot2^4=2^7=128$; b) $x^3\cdot x^4=x^7$.

**Answer.** a) $2^7=128$; b) $x^7$.
:::

:::exercise
For the monomial $-4x^3yz^2$, give:

a) its coefficient;

b) its variable part;

c) its degree.

::hint
**What you need:** the coefficient is the number in front; the degree is the sum of the exponents (remember $y=y^1$).

**Steps:**
1. Find the number in front.
2. Write the variable part that is left.
3. Add the exponents $3$, $1$, $2$.

::solution
The monomial $-4x^3yz^2$ is already simplified: it is a number (the coefficient) times powers of distinct variables.

a) The coefficient is the number in front of the variables, that is $-4$.

b) The variable part consists of the variables with their exponents, that is $x^3yz^2$.

c) The degree is the sum of the exponents of the variables: $3+1+2=6$ (the variable $y$ has exponent $1$).

So the coefficient is $-4$, the variable part is $x^3yz^2$ and the degree is $6$.

**Answer.** a) $-4$; b) $x^3yz^2$; c) $6$.
:::

:::exercise
In each pair, are the two monomials like monomials? Why?

a) $3x^2y$ and $-5x^2y$.

b) $2xy$ and $2xy^2$.

c) $4ab$ and $ba$.

::hint
**What you need:** two monomials are like monomials when their coefficients are non-zero and they have the same variable part.

**Steps:**
1. Write the variable part of each monomial.
2. Remember that the order of the factors can be changed.

::solution
Two monomials are called like monomials if their coefficients are non-zero and they have the same variable part.

a) The monomials $3x^2y$ and $-5x^2y$ have non-zero coefficients $3$ and $-5$, and the same variable part $x^2y$. Hence they are like monomials.

b) The monomials $2xy$ and $2xy^2$ have variable parts $xy$ and $xy^2$, which are different. Hence they are not like monomials.

c) We have $ba=ab$, a monomial with coefficient $1\neq0$ and variable part $ab$, the same as that of $4ab$ (coefficient $4\neq0$). Hence they are like monomials.

So the pairs in a) and c) are like monomials; the pair in b) is not.

**Answer.** a) yes; b) no; c) yes.
:::

:::exercise
Find the mistakes in Ha's work and correct them.

a) $4x^2+3x^2=7x^4$.

b) $(-2x)\cdot(3x^2)=-6x^2$.

c) The degree of the monomial $5x^3y$ is $3$.

::hint
**What you need:** adding like monomials keeps the variable part; multiplying monomials adds the exponents; the degree is the sum of the exponents.

**Steps:**
1. See which rule each part should use.
2. Check by replacing $x$ with $2$.

::solution
We check each step of Ha's work against the rules for monomials.

a) Rule: when adding like monomials, we add the coefficients and keep the variable part. Ha made a mistake in the variable part (writing $x^4$). The correct work is
$$4x^2+3x^2=(4+3)x^2=7x^2.$$
Try $x=2$: $4\cdot4+3\cdot4=16+12=28$ and $7\cdot4=28$.

b) Rule: when multiplying powers with the same base, we add the exponents. Ha made a mistake in the exponent, because $x\cdot x^2=x^{1+2}=x^3$. The correct work is
$$(-2x)\cdot(3x^2)=(-2\cdot3)\cdot x^3=-6x^3.$$

c) The degree of a monomial is the sum of the exponents of its variables. Ha forgot the exponent of $y$ (which is $1$). The correct work is that the degree of $5x^3y$ is $3+1=4$.

So Ha made a mistake in all three parts; the correct results are a) $7x^2$; b) $-6x^3$; c) degree $4$.

**Answer.** a) $7x^2$; b) $-6x^3$; c) degree $4$.
:::

:::exercise
A rectangular playground is $3x$ m long and $2x$ m wide.

a) Write the area of the playground as a monomial in simplest form and give its degree.

b) Find the area when $x=5$.

::hint
**What you need:** the area of a rectangle is length times width.

**Steps:**
1. What is given? What is asked?
2. Multiply the two monomials $3x$ and $2x$.
3. Substitute $x=5$ and write the unit.

::solution
The rectangular playground is $3x$ m long and $2x$ m wide (with $x>0$).

a) The area equals length times width, so
$$S=3x\cdot2x=(3\cdot2)\cdot(x\cdot x)=6x^{1+1}=6x^2\ (\text{m}^2).$$
The monomial $6x^2$ has degree $2$.

b) Substituting $x=5$ into $S=6x^2$, we get
$$S=6\cdot5^2=6\cdot25=150\ (\text{m}^2).$$

So a) the area of the playground is $6x^2$ m$^2$ and the monomial has degree $2$; b) when $x=5$ the area is $150$ m$^2$.

**Answer.** a) $6x^2$ m², degree $2$; b) $150$ m².
:::

:::exercise Challenge
Find the monomial $M$ such that $M\cdot(-3xy^2)=6x^3y^4$. Then find the value of $M$ when $x=2$, $y=-1$.

::hint
**What you need:** when two monomials are multiplied, the coefficients are multiplied and the exponents of each variable are added.

**Steps:**
1. The coefficient of $M$ times $-3$ must equal $6$.
2. The exponent of $x$ in $M$ plus $1$ must equal $3$.
3. The exponent of $y$ in $M$ plus $2$ must equal $4$.

::solution
The coefficient of $M$ is $-2$ because $(-2)\cdot(-3)=6$. The exponent of $x$ is $3-1=2$. The exponent of $y$ is $4-2=2$. So $M=-2x^2y^2$.

**Check.** $(-2x^2y^2)\cdot(-3xy^2)=6x^3y^4$. Correct.

When $x=2$, $y=-1$: $M=-2\cdot4\cdot1=-8$.

**Answer.** $M=-2x^2y^2$; its value is $-8$.
:::

## Mini test

:::quiz
::mc NB
Which of these expressions is a monomial?
A. $x+3$.
B. $\dfrac{2}{x}$.
C. $-4xy^2$.
D. $x^2-y$.
::key C
$-4xy^2$ is a product of the number $-4$ and variables. A and D contain an addition or a subtraction; B has a variable in the denominator.

::mc NB
The degree of the monomial $-3x^2y^4$ is
A. $8$.
B. $6$.
C. $4$.
D. $-3$.
::key B
The degree is the sum of the exponents: $2+4=6$. Option A multiplies the exponents, C takes only the greatest exponent, D takes the coefficient.

::mc TH
The result of $5x^2y+3x^2y-x^2y$ is
A. $8x^2y$.
B. $9x^2y$.
C. $7x^2y$.
D. $7x^4y^2$.
::key C
Add the coefficients: $5+3-1=7$, and keep the variable part. Option A leaves out the subtraction, B treats $-x^2y$ as $+x^2y$, D adds the exponents too.

::mc TH
The result of $(-2x^2y)\cdot(4xy^3)$ is
A. $-8x^3y^4$.
B. $-8x^2y^3$.
C. $2x^3y^4$.
D. $-8x^3y^3$.
::key A
Coefficient: $-2\cdot4=-8$. Exponents: $x$ has $2+1=3$, $y$ has $1+3=4$. Option C adds the coefficients, B and D get the exponents wrong.

::tf NB NB NB TH
Let $A=-\dfrac32x^2y^3$.
a) The coefficient of $A$ is $-\dfrac32$.
b) The variable part of $A$ is $x^2y^3$.
c) The degree of $A$ is $6$.
d) $A$ is like the monomial $4y^3x^2$.
::key T T F T
a) True: the number in front is $-\dfrac32$. b) True. c) False: the degree is $2+3=5$. d) True: $4y^3x^2=4x^2y^3$ has the same variable part as $A$.

::sa TH
Simplify $2x^3y\cdot(-5xy^2)$. What is the degree of the resulting monomial?
::key 7
$2x^3y\cdot(-5xy^2)=-10x^4y^3$, of degree $4+3=7$.

::sa TH
Find the value of the monomial $-2x^2y$ when $x=3$, $y=-1$.
::key 18
$-2\cdot3^2\cdot(-1)=-2\cdot9\cdot(-1)=18$.
:::
