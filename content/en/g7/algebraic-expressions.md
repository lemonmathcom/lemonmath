---
title: Algebraic expressions. Polynomials in one variable
description: Write algebraic expressions from real situations; recognise polynomials in one variable, find degree, coefficients, values and roots of a polynomial.
minutes: 28
---

:::goals
- Write an algebraic expression from a situation and find its value for a given value of the variable.
- Recognise monomials and polynomials in one variable; simplify a polynomial and arrange it in descending powers.
- Identify the degree, coefficients, leading coefficient and constant term of a polynomial.
- Find the value of a polynomial and check whether a number is a root of it.
:::

Two shops near your school hire out bicycles. Shop A charges a deposit fee of $12$ thousand đồng plus $14$ thousand đồng for each hour. Shop B charges a deposit fee of $30$ thousand đồng plus $8$ thousand đồng for each hour. For $2$ hours Shop A is cheaper, but for $10$ hours Shop B is cheaper. So at what point does the better choice change?

To answer, we cannot recalculate for each length of hire. We need one way of writing the cost that works for every number of hours, using a letter for "any number of hours". That is the job of an algebraic expression. When the expression is built only from powers of one letter, each multiplied by a number and then added up, we call it a polynomial in one variable. Polynomials turn up everywhere: in areas, volumes, wages and costs, and they are the base for the algebra of later years.

## Algebraic expressions

### Explore: make a table, then write the general formula

Let $x$ be the number of hours. We work out the cost (thousand đồng) at the two shops for a few values of $x$.

| $x$ (hours) | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Shop A: $12+14x$ | $26$ | $40$ | $54$ | $68$ | $82$ |
| Shop B: $30+8x$ | $38$ | $46$ | $54$ | $62$ | $70$ |

Each cell is worked out in the same way: multiply the hours by the price per hour, then add the deposit fee. The letter $x$ lets us write that rule once and use it for any number of hours. Notice the column $x=3$: the two shops cost the same ($54$ thousand đồng). We will come back to that at the end of the lesson.

:::definition Algebraic expression
An algebraic expression is an expression made of numbers, letters (standing for numbers, called **variables**) and the signs of operations: addition, subtraction, multiplication, division and powers, possibly with brackets. When we replace the letters by numbers, we get the **value of the expression**.
:::

**Going deeper.** A letter in an algebraic expression is not a mystery number we must find. It is a "blank space" to fill in with numbers. The expression $12+14x$ is like a machine: put in the number of hours and out comes the cost. Each time we replace $x$ by a different number, we get a different value of the same expression.

:::example Writing an algebraic expression
A rectangular plot of land is $4$ m longer than it is wide. Let the width be $x$ (m).

a) Write expressions for the perimeter and the area of the plot.

b) Find the perimeter and the area when $x=6$.

**Solution.** a) The length is $x+4$ (m). The perimeter is $2\cdot(x+x+4)=2(2x+4)=4x+8$ (m). The area is $x(x+4)$ (m²).

b) Substituting $x=6$ into the expressions, we get perimeter $4\cdot6+8=32$ (m) and area $6\cdot(6+4)=60$ (m²).

So a) the perimeter is $4x+8$ and the area is $x(x+4)$; b) when $x=6$ the perimeter is $32$ m and the area is $60$ m².
:::

:::example Finding the value of an expression
Find the value of the expression $3x^2-2x+1$ when:

a) $x=-2$.

b) $x=\dfrac12$.

**Solution.** a) Substituting $x=-2$, we get $3\cdot(-2)^2-2\cdot(-2)+1=3\cdot4+4+1=17$. Here $(-2)^2=4$, because the square of a negative number is positive.

b) Substituting $x=\dfrac12$, we get $3\cdot\dfrac14-2\cdot\dfrac12+1=\dfrac34-1+1=\dfrac34$.

So a) the value is $17$; b) the value is $\dfrac34$.
:::

## Polynomials in one variable

In the expression $3x^2-2x+1$ there is just one letter $x$, and it appears only as a power with a whole-number exponent, multiplied by a number. Expressions like this have a name of their own.

:::definition Monomials and polynomials in one variable
- A monomial in one variable is an expression of the form $ax^n$, where $a$ is a number, $x$ is the variable and $n$ is a whole number ($0$, $1$, $2$, …). The number $a$ is the **coefficient**.
- A polynomial in one variable is a sum of monomials in the same variable. Each monomial in the sum is a **term** of the polynomial.
:::

A non-zero number is also a polynomial, because $5=5x^0$. The expression $x^2+\dfrac1x$ is not a polynomial, since $\dfrac1x$ would need an "exponent $-1$". The expression $2x+y$ is not one either, because it has two variables.

**Why simplify?** We have $2$ oranges $-$ $3$ oranges $=-1$ orange, so $2x^2-3x^2=(2-3)x^2=-x^2$. But $2$ oranges plus $3$ apples do not make "$5$ of anything": in the same way, $x^2$ and $x$ are different kinds of thing and cannot be combined. We combine only the terms with the same power of the variable, then write the polynomial with the exponents in **descending** order.

:::definition Degree, leading coefficient, constant term
Take a polynomial that has been simplified and arranged in descending powers.
- The **degree** of the polynomial is the highest exponent of the variable.
- The **leading coefficient** is the coefficient of the term with the highest exponent.
- The **constant term** is the term that has no variable (the coefficient of $x^0$).
:::

A non-zero constant polynomial has degree $0$. The number $0$ is also a polynomial, called the zero polynomial, and we do not talk about its degree.

:::example Recognising polynomials in one variable
Which of the following are polynomials in one variable? If it is a polynomial, state its degree.

a) $3x+5$.

b) $x^2+\dfrac1x$.

c) $-4$.

d) $2x+y$.

e) $5x^3-\dfrac12x$.

**Solution.** We check whether each expression is a sum of monomials $ax^n$ in one variable ($n$ a whole number).

a) It is a polynomial in one variable, of degree $1$.

b) It is not a polynomial, because $\dfrac1x$ does not have the form $ax^n$ with $n$ a whole number.

c) It is a polynomial in one variable (a non-zero constant), of degree $0$.

d) It is not a polynomial in one variable, because it has two variables $x$ and $y$.

e) It is a polynomial in one variable, of degree $3$.

So a), c), e) are polynomials in one variable, with degrees $1$, $0$ and $3$ respectively.
:::

:::example Simplifying and arranging
Let $A(x)=2x^2-5x^3+x-3x^2+7+4x^3$. Simplify $A(x)$, arrange it in descending powers, then state its degree, leading coefficient and constant term.

**Solution.** We group the terms with the same power of the variable:
$$A(x)=(-5x^3+4x^3)+(2x^2-3x^2)+x+7=-x^3-x^2+x+7.$$
The highest exponent is $3$, so the degree is $3$. The term of highest degree is $-x^3$, so the leading coefficient is $-1$. The term with no variable is $7$, so the constant term is $7$.

So $A(x)=-x^3-x^2+x+7$, with degree $3$, leading coefficient $-1$ and constant term $7$.
:::

## Value and roots of a polynomial

When we replace the variable by a number, a polynomial gives a value. The value $P(a)$ is the result of substituting $x=a$ into the polynomial $P(x)$. Some values of $x$ make the polynomial equal to $0$, and these matter because, when we solve equations, these are exactly the numbers we are looking for.

:::definition Root of a polynomial
A number $a$ is a **root** of the polynomial $P(x)$ if $P(a)=0$.
:::

:::example Checking roots
Let $Q(x)=x^2-4x+3$. Which of the numbers $1$, $2$, $3$ are roots of $Q(x)$?

**Solution.** We work out $Q$ at each number and compare with $0$.

We have $Q(1)=1-4+3=0$. We have $Q(2)=4-8+3=-1\neq0$. We have $Q(3)=9-12+3=0$.

So $x=1$ and $x=3$ are roots of $Q(x)$, but $x=2$ is not.
:::

Now we answer the question from the start, going through all four steps of solving a problem.

:::example Choosing a bicycle shop
Shop A charges $12+14x$ thousand đồng and Shop B charges $30+8x$ thousand đồng for $x$ hours. From how many hours on is Shop B cheaper?

**Solution.**

*Understand.* Both costs depend on the number of hours $x$. We need the value of $x$ at which the two costs are equal, then see which shop is cheaper on either side of that point.

*Plan.* The two costs are equal when $12+14x=30+8x$. We solve this equation, then try a few values on both sides of the solution.

*Solve.* We have $12+14x=30+8x$, so $14x-8x=30-12$, that is $6x=18$, hence $x=3$. In other words, $x=3$ is a root of the polynomial $6x-18$. For $x=4$, Shop A charges $12+14\cdot4=68$ (thousand đồng) and Shop B charges $30+8\cdot4=62$ (thousand đồng). For $x=2$, Shop A charges $40$ thousand đồng and Shop B charges $46$ thousand đồng.

So for exactly $3$ hours the two shops cost the same ($54$ thousand đồng), and for $4$ hours or more Shop B is cheaper.

*Look back.* The result agrees with the table in the exploration. Is it reasonable? Yes: Shop B has a higher deposit fee but a lower price per hour, so the longer the hire, the better it is. If Shop B lowered its deposit fee to $24$ thousand đồng, at how many hours would the choice change? Then $12+14x=24+8x$ gives $6x=12$, that is $x=2$.
:::

:::warning Common mistakes
- **Finding the degree before simplifying.** Wrong: $x^3-x^3+2x$ has degree $3$. Why it is wrong: the two $x^3$ terms cancel. Right: it simplifies to $2x$, of degree $1$.
- **Wrong sign when squaring a negative number.** Wrong: $3\cdot(-2)^2=-12$. Why it is wrong: $(-2)^2=(-2)(-2)=4$, not $-4$. Right: $3\cdot4=12$.
- **Taking the wrong leading coefficient before arranging.** Wrong: the polynomial $4-3x^2+x$ has leading coefficient $4$ because it comes first. Why it is wrong: the leading coefficient belongs to the term with the highest exponent. Right: it is $-3$.
:::

**Connections.** Algebraic expressions continue the numbers and operations you know from earlier years, now with a letter to speak about every case at once. Polynomials and their roots prepare the way for the next lessons: adding, subtracting, multiplying and dividing polynomials, then solving equations. As for the two bicycle shops: the choice changes exactly at the root $x=3$ of the polynomial $6x-18$.

## Key terms

:::terms
- algebraic expression | biểu thức đại số
- variable | biến
- value of an expression | giá trị của biểu thức
- monomial in one variable | đơn thức một biến
- polynomial in one variable | đa thức một biến
- term | hạng tử
- degree | bậc
- leading coefficient | hệ số cao nhất
- constant term | hệ số tự do
- root of a polynomial | nghiệm của đa thức
:::

## Summary

- An algebraic expression is made of numbers, variables and operations; replacing the variable by a number gives its value.
- A monomial in one variable has the form $ax^n$; a polynomial in one variable is a sum of monomials in the same variable.
- Simplify a polynomial by combining the terms with the same power of the variable, then arrange it in descending powers.
- The degree is the highest exponent; the leading coefficient belongs to the term of highest degree; the constant term is the term with no variable.
- A number $a$ is a root of $P(x)$ when $P(a)=0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
A cinema sells adult tickets at $40$ thousand đồng and child tickets at $25$ thousand đồng. A group has $a$ adults and $b$ children.

a) Write an expression for the total cost of the group's tickets.

b) Find the total cost when $a=3$ and $b=2$.

::hint
**What you need:** the cost of tickets is the number of tickets times the price of one ticket.

**Steps:**
1. a) The adult tickets cost $40a$ and the child tickets cost $25b$.
2. b) Substitute $a=3$, $b=2$ into the expression you wrote.

::solution
a) The adult tickets cost $40a$ (thousand đồng) and the child tickets cost $25b$ (thousand đồng). The total cost is $40a+25b$ (thousand đồng).

b) Substituting $a=3$, $b=2$, we get $40\cdot3+25\cdot2=120+50=170$.

So a) the total cost is $40a+25b$ thousand đồng; b) when $a=3$ and $b=2$ the group pays $170$ thousand đồng.

**Answer.** a) $40a+25b$; b) $170$ thousand đồng.
:::

:::exercise
Find the value of the expression $2x^2-3x+1$ when:

a) $x=-1$.

b) $x=\dfrac12$.

c) $x=3$.

::hint
**What you need:** replace $x$ by the given number; work out the power first, then multiply and add.

**Steps:**
1. a) Remember that $(-1)^2=1$.
2. b) Remember that $\left(\dfrac12\right)^2=\dfrac14$.
3. c) Remember that $3^2=9$.

::solution
a) Substituting $x=-1$, we get $2\cdot(-1)^2-3\cdot(-1)+1=2+3+1=6$.

b) Substituting $x=\dfrac12$, we get $2\cdot\dfrac14-3\cdot\dfrac12+1=\dfrac12-\dfrac32+1=0$.

c) Substituting $x=3$, we get $2\cdot9-3\cdot3+1=18-9+1=10$.

So a) $6$; b) $0$; c) $10$.

**Answer.** a) $6$; b) $0$; c) $10$.
:::

:::exercise
Which of the following are polynomials in one variable? If so, state the degree.

a) $5x^3-2x+1$.

b) $x^2+\dfrac3x$.

c) $-9$.

d) $4x-y$.

::hint
**What you need:** a polynomial in one variable is a sum of monomials $ax^n$ in the same variable, with $n$ a whole number.

**Steps:**
1. Check whether the variable appears in a denominator.
2. Count the different variables in the expression.

::solution
a) It is a polynomial in one variable, of degree $3$.

b) It is not a polynomial, because $\dfrac3x$ has the variable in the denominator.

c) It is a polynomial in one variable (a non-zero constant), of degree $0$.

d) It is not a polynomial in one variable, because it has two variables $x$ and $y$.

So a) and c) are polynomials in one variable, of degrees $3$ and $0$ respectively.

**Answer.** a) degree $3$; b) no; c) degree $0$; d) no.
:::

:::exercise
Let $A(x)=3x+2x^2-x^3+x^2-4-2x$.

a) Simplify $A(x)$ and arrange it in descending powers.

b) State the degree, leading coefficient and constant term of $A(x)$.

::hint
**What you need:** combine the terms with the same power of the variable.

**Steps:**
1. a) Combine $2x^2+x^2$ and $3x-2x$.
2. b) Read them off the arranged polynomial.

::solution
a) We have $A(x)=-x^3+(2x^2+x^2)+(3x-2x)-4=-x^3+3x^2+x-4$.

b) The highest exponent is $3$, so the degree is $3$. The leading coefficient is $-1$. The constant term is $-4$.

So $A(x)=-x^3+3x^2+x-4$, with degree $3$, leading coefficient $-1$ and constant term $-4$.

**Answer.** a) $-x^3+3x^2+x-4$; b) degree $3$, $-1$, $-4$.
:::

:::exercise
Let $P(x)=x^3-2x^2+x-2$.

a) Find $P(0)$, $P(1)$ and $P(2)$.

b) Which of the numbers $0$, $1$, $2$ is a root of $P(x)$?

::hint
**What you need:** $a$ is a root of $P(x)$ when $P(a)=0$.

**Steps:**
1. a) Substitute $x=0$, $x=1$, $x=2$ into $P(x)$ in turn.
2. b) Compare each value with $0$.

::solution
a) We have $P(0)=-2$. We have $P(1)=1-2+1-2=-2$. We have $P(2)=8-8+2-2=0$.

b) Only $P(2)=0$, while $P(0)=-2\neq0$ and $P(1)=-2\neq0$.

So $x=2$ is a root of $P(x)$; the numbers $0$ and $1$ are not roots.

**Answer.** a) $-2$; $-2$; $0$; b) $x=2$.
:::

:::exercise
Which of the numbers $1$, $2$, $3$ are roots of the polynomial $x^2-5x+6$?

::hint
**What you need:** substitute each number into the polynomial and compare with $0$.

**Steps:**
1. Work out $1-5+6$.
2. Work out $4-10+6$ and $9-15+6$.

::solution
Let $M(x)=x^2-5x+6$. We have $M(1)=1-5+6=2\neq0$. We have $M(2)=4-10+6=0$. We have $M(3)=9-15+6=0$.

So $x=2$ and $x=3$ are roots of the polynomial, but $x=1$ is not.

**Answer.** $x=2$ and $x=3$.
:::

:::exercise
Suppose a phone plan costs $50$ thousand đồng a month and includes $5$ GB of data. Each GB used beyond that is charged at $10$ thousand đồng. Let $x$ be the number of extra GB used.

a) Write an expression for the amount paid in the month.

b) Find the amount when $x=3$.

c) One month you pay $110$ thousand đồng. How many extra GB did you use?

::hint
**What you need:** the amount is the fixed charge plus the cost of the extra data.

**Steps:**
1. a) Write $50+10x$.
2. c) Solve $50+10x=110$.

::solution
a) The amount paid is $50+10x$ (thousand đồng).

b) Substituting $x=3$, we get $50+10\cdot3=80$ (thousand đồng).

c) We have $50+10x=110$, so $10x=60$, hence $x=6$. We see that $x=6$ is a root of the polynomial $10x-60$.

So a) $50+10x$ thousand đồng; b) $80$ thousand đồng; c) you used $6$ extra GB.

**Answer.** a) $50+10x$; b) $80$ thousand đồng; c) $6$ GB.
:::

:::exercise
Suppose a ball is thrown straight up, and its height after $t$ seconds is $h(t)=-5t^2+30t$ (metres), for $0\leq t\leq6$.

a) Find the height of the ball after $1$ second and after $2$ seconds.

b) Find $h(6)$ and explain what the result means.

::hint
**What you need:** substitute $t$ into $h(t)$; a root of $h(t)$ is a moment when the height is $0$.

**Steps:**
1. a) Substitute $t=1$ and $t=2$.
2. b) Substitute $t=6$, then say where the ball is.

::solution
a) We have $h(1)=-5\cdot1+30\cdot1=25$. We have $h(2)=-5\cdot4+30\cdot2=-20+60=40$.

b) We have $h(6)=-5\cdot36+30\cdot6=-180+180=0$. Since $h(6)=0$, $t=6$ is a root of $h(t)$: after $6$ seconds the ball is back on the ground.

So a) $25$ m and $40$ m; b) $h(6)=0$, the ball lands after $6$ seconds.

**Answer.** a) $25$ m; $40$ m; b) $0$ m (lands after $6$ seconds).
:::

:::exercise
(Revision of the lesson on direct proportion.) Let $y=6x$.

a) Are $x$ and $y$ in direct proportion? If so, what is the constant of proportionality?

b) For $y=6x+2$, are $x$ and $y$ in direct proportion?

::hint
**What you need:** $y$ is in direct proportion to $x$ when the quotient $\dfrac yx$ is constant.

**Steps:**
1. a) Write $y=kx$ and compare.
2. b) Work out $\dfrac yx$ when $x=1$ and when $x=2$.

::solution
a) Since $y=6x$ has the form $y=kx$ with $k=6\neq0$, $y$ is in direct proportion to $x$ with constant $6$.

b) For $y=6x+2$: when $x=1$, $y=8$ and $\dfrac yx=8$; when $x=2$, $y=14$ and $\dfrac yx=7$. The two quotients are different.

So a) yes, the constant is $6$; b) not in direct proportion.

**Answer.** a) yes, $k=6$; b) no.
:::

:::exercise Challenge
a) Show that the polynomial $x^2+4$ has no roots.

b) Find the roots of the polynomial $(x-1)(x+2)$.

::hint
**What you need:** the square of any number is not negative; a product of two numbers is $0$ when one of them is $0$.

**Steps:**
1. a) Compare $x^2$ with $0$, then deduce the result for $x^2+4$.
2. b) Set each factor equal to $0$.

::solution
a) For every number $x$ we have $x^2\geq0$, so $x^2+4\geq4>0$. So the value of $x^2+4$ is never $0$, which means the polynomial has no roots.

b) The product $(x-1)(x+2)$ is $0$ when $x-1=0$ or $x+2=0$, that is $x=1$ or $x=-2$. We see that for $x=1$, $(1-1)(1+2)=0$, and for $x=-2$, $(-2-1)(-2+2)=0$.

So a) the polynomial $x^2+4$ has no roots; b) the two roots are $x=1$ and $x=-2$.

**Answer.** a) no roots; b) $x=1$, $x=-2$.
:::

## Mini test

:::quiz
::mc
The degree of the polynomial $5x^3-2x^5+x$ is
A. $5$.
B. $3$.
C. $-2$.
D. $1$.
::key A
The highest exponent of the variable is $5$. A is the exponent of the first term, C is the leading coefficient and D is the exponent of the last term.

::mc
The value of the expression $2x^2-x$ when $x=-3$ is
A. $15$.
B. $21$.
C. $-21$.
D. $-15$.
::key B
$2\cdot(-3)^2-(-3)=18+3=21$. B works out $(-3)^2$ as $-9$, A ignores the minus sign before $x$ and C makes both mistakes.

::mc
The leading coefficient of the polynomial $4-3x^2+x$ is
A. $1$.
B. $4$.
C. $-3$.
D. $3$.
::key C
Arranged, it is $-3x^2+x+4$, and the term of highest degree is $-3x^2$. B is the term written first before arranging, A is the coefficient of $x$ and D loses the minus sign.

::mc
Which of the following numbers is a root of the polynomial $x^2-x-6$?
A. $2$.
B. $-3$.
C. $6$.
D. $3$.
::key D
$3^2-3-6=0$. For $2$ we get $-4$, for $-3$ we get $6$, and for $6$ we get $24$.

::tf
Let $P(x)=x^3-4x$. Decide whether each statement is true or false.
a) The leading coefficient of $P(x)$ is $-4$.
b) $P(2)=0$.
c) $x=1$ is a root of $P(x)$.
d) $P(-2)=0$.
::key F T F T
a) False: the leading coefficient is $1$ (of $x^3$). b) True: $8-8=0$. c) False: $P(1)=1-4=-3$. d) True: $-8+8=0$.

::sa
Find the value of the polynomial $3x^2-2x+1$ when $x=-2$.
::key 17
$3\cdot4+4+1=17$.

::sa
Find the root of the polynomial $5x+3$ (give your answer as a decimal).
::key -0.6
$5x+3=0$ gives $x=-\dfrac35=-0.6$.
:::
