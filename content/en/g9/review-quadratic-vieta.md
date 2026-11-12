---
title: "Topic: quadratic equations and Viète's theorem"
description: Revise solving quadratic equations, Viète's formulas and symmetric expressions of the roots in grade 10 entrance-exam style, with real-life problems.
minutes: 25
---

:::goals
- Revise solving quadratic equations with the quadratic formula, the reduced discriminant and finding a root by inspection.
- Remember and use Viète's formulas $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$ and their converse.
- Find the value of symmetric expressions of the two roots without solving the equation.
- Solve real-life problems about the perimeter and area of a rectangle with quadratic equations.
:::

Suppose a rectangular garden has perimeter $28$ m and area $48$ m². Half the perimeter is $14$ m, so the sum of the two dimensions is $14$ and their product is $48$. Trying pairs of numbers one by one takes time, but if we call one dimension $x$ we get $x(14-x)=48$, that is $x^2-14x+48=0$. What are the two dimensions of the rectangle? And is there a way to spot two numbers at once when we know their sum and product?

In the grade 10 entrance paper, quadratic equations and Viète's formulas appear very often: solve an equation, then find the value of an expression of the roots without solving. This lesson revises those tools.

## Quadratic equations and the quadratic formula

### Explore: the sum and the product of the roots

The equation $x^2-5x+6=0$ has roots $2$ and $3$. Their sum is $2+3=5$ and their product is $2\cdot3=6$. The coefficients are $a=1$, $b=-5$, $c=6$. We notice that
$$x_1+x_2=5=-\frac ba,\qquad x_1x_2=6=\frac ca.$$
Is this true for every quadratic equation? We recall the quadratic formula and then answer.

:::theorem The quadratic formula
For the equation $ax^2+bx+c=0$ ($a\neq0$) with **discriminant** $\Delta=b^2-4ac$:
- If $\Delta>0$: the equation has two distinct roots $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$.
- If $\Delta=0$: the equation has a repeated root $x_1=x_2=-\dfrac b{2a}$.
- If $\Delta<0$: the equation has no real roots.

When $b=2b'$, we use the **reduced discriminant** $\Delta'=b'^2-ac$: if $\Delta'>0$ then $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
:::

**Finding a root by inspection.** If $a+b+c=0$, the equation has the root $x_1=1$ and $x_2=\dfrac ca$. If $a-b+c=0$, the equation has the root $x_1=-1$ and $x_2=-\dfrac ca$.

:::theorem Viète's formulas
If the equation $ax^2+bx+c=0$ ($a\neq0$) has two roots $x_1$, $x_2$ (which may be equal), then
$$x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.$$
**Converse.** If two numbers $u$ and $v$ have sum $S=u+v$ and product $P=uv$, then $u$ and $v$ are the two roots of $X^2-SX+P=0$. This equation has roots when $S^2-4P\geq0$.
:::

**Why are they true?** When $\Delta\geq0$, adding the two roots $\dfrac{-b+\sqrt\Delta}{2a}$ and $\dfrac{-b-\sqrt\Delta}{2a}$ makes the square roots cancel and leaves $\dfrac{-2b}{2a}=-\dfrac ba$. Multiplying the roots gives $\dfrac{b^2-\Delta}{4a^2}=\dfrac{4ac}{4a^2}=\dfrac ca$. Since $(X-u)(X-v)=X^2-SX+P$, the numbers $u$ and $v$ are roots of $X^2-SX+P=0$; the condition $S^2-4P\geq0$ is exactly $\Delta\geq0$ for this equation.

From $S=x_1+x_2$ and $P=x_1x_2$ we can find many symmetric expressions without solving the equation:
$$x_1^2+x_2^2=S^2-2P,\quad(x_1-x_2)^2=S^2-4P,\quad\frac1{x_1}+\frac1{x_2}=\frac SP,\quad x_1^3+x_2^3=S^3-3SP.$$

:::example Solving quadratic equations
Solve the equations:

a) $3x^2-7x+2=0$;

b) $x^2-2x-2=0$;

c) $2x^2-7x+5=0$.

**Solution.**

a) We have $\Delta=(-7)^2-4\cdot3\cdot2=49-24=25>0$, so the equation has two roots $x_1=\dfrac{7+5}{6}=2$ and $x_2=\dfrac{7-5}{6}=\dfrac13$.

b) Here $b'=-1$ and $\Delta'=(-1)^2-1\cdot(-2)=3>0$, so $x=1\pm\sqrt3$.

c) We have $a+b+c=2-7+5=0$, so $x_1=1$ and $x_2=\dfrac ca=\dfrac52$.

**Answer.** a) $x=2$ or $x=\dfrac13$; b) $x=1+\sqrt3$ or $x=1-\sqrt3$; c) $x=1$ or $x=\dfrac52$.
:::

## Viète's formulas and symmetric expressions

:::example Calculating without solving
The equation $x^2-5x+3=0$ has two roots $x_1$ and $x_2$. Without solving the equation, find

a) $x_1^2+x_2^2$;

b) $\dfrac1{x_1}+\dfrac1{x_2}$;

c) $(x_1-x_2)^2$.

**Solution.** We have $\Delta=25-12=13>0$, so the equation has two distinct roots. By Viète's formulas, $S=x_1+x_2=5$ and $P=x_1x_2=3$.

a) $x_1^2+x_2^2=S^2-2P=25-6=19$.

b) $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{x_1+x_2}{x_1x_2}=\dfrac53$.

c) $(x_1-x_2)^2=S^2-4P=25-12=13$.

**Answer.** a) $19$; b) $\dfrac53$; c) $13$.
:::

:::example Finding two numbers, forming an equation
a) Find two numbers with sum $14$ and product $48$.

b) Form a quadratic equation whose roots are $2+\sqrt3$ and $2-\sqrt3$.

**Solution.**

a) The two numbers are the roots of $X^2-14X+48=0$. We have $\Delta'=49-48=1>0$, so $X=7\pm1$, that is the numbers are $6$ and $8$. Check: $6+8=14$ and $6\cdot8=48$.

b) The sum is $S=(2+\sqrt3)+(2-\sqrt3)=4$ and the product is $P=(2+\sqrt3)(2-\sqrt3)=4-3=1$. Since $S^2-4P=12>0$, the two numbers are the roots of $X^2-4X+1=0$.

**Answer.** a) $6$ and $8$; b) $X^2-4X+1=0$.
:::

:::example An exam-style question
**Question 2.** ($2.0$ marks) The equation $x^2-4x+1=0$ has two roots $x_1$ and $x_2$. a) Prove that the equation has two distinct roots. b) Find $x_1^2+x_2^2$. c) Form a quadratic equation whose roots are $x_1^2$ and $x_2^2$.

**Solution.**

*Understand.* The given equation has coefficients $a=1$, $b=-4$, $c=1$. We must prove that $\Delta>0$, find a symmetric expression, and form a new equation using the converse.

*Plan.* Use Viète's formulas to get $S$ and $P$ for the old roots, and from them the sum and product of $x_1^2$ and $x_2^2$.

*Solve.*

a) ($0.5$ marks) Here $b'=-2$ and $\Delta'=(-2)^2-1\cdot1=3>0$. So the equation has two distinct roots.

b) ($0.75$ marks) By Viète's formulas, $x_1+x_2=4$ and $x_1x_2=1$. So $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=16-2=14$.

c) ($0.75$ marks) The sum of $x_1^2$ and $x_2^2$ is $14$. Their product is $x_1^2x_2^2=(x_1x_2)^2=1$. These two numbers are roots of $X^2-14X+1=0$. Since $\Delta'=49-1=48>0$, the equation has roots, in agreement with the converse.

So a) two distinct roots; b) $x_1^2+x_2^2=14$; c) $X^2-14X+1=0$.

*Look back.* The roots are $2\pm\sqrt3$, and their squares are $7\pm4\sqrt3$. Their sum is $14$ and their product is $49-48=1$, matching the result above.
:::

## Real-life applications

:::example A rectangular garden
Suppose a rectangular garden has perimeter $28$ m and area $48$ m². Find its dimensions and the length of its diagonal.

**Solution.** Half the perimeter is $14$ m. The two dimensions have sum $14$ and product $48$, so they are the roots of $X^2-14X+48=0$. We have $\Delta'=49-48=1>0$, so $X=7\pm1$, that is the dimensions are $8$ m and $6$ m. The diagonal is $\sqrt{8^2+6^2}=\sqrt{100}=10$ (m).

So the garden is $8$ m long and $6$ m wide, with a diagonal of $10$ m.
:::

:::example A plot with sides $5$ m apart
Suppose a rectangular plot is $5$ m longer than it is wide and has area $84$ m². Find the dimensions of the plot.

**Solution.** Let the width be $x$ (m), $x>0$. The length is $x+5$ (m). The area is $x(x+5)=84$, that is $x^2+5x-84=0$. We have $\Delta=25+336=361=19^2>0$, so $x=\dfrac{-5+19}{2}=7$ or $x=\dfrac{-5-19}{2}=-12$. The value $x=-12$ does not satisfy $x>0$, so we reject it. So the width is $7$ m and the length is $12$ m. Check: $7\cdot12=84$.
:::

:::warning Common mistakes
- **Wrong sign for the sum.** Wrong: for $x^2-5x+3=0$, writing $x_1+x_2=\dfrac{b}{a}=-5$. Why it is wrong: the formula is $x_1+x_2=-\dfrac ba$. Right: $x_1+x_2=5$.
- **Using Viète when the equation has no roots.** Wrong: for $x^2+2x+5=0$ ($\Delta'=-4<0$) still finding $x_1^2+x_2^2$. Why it is wrong: with no real roots there are no $x_1$, $x_2$. Right: check $\Delta\geq0$ (or $\Delta'\geq0$) first.
- **Wrong formula for $x_1^2+x_2^2$.** Wrong: $x_1^2+x_2^2=S^2+2P$ or $S^2-P$. Why it is wrong: $(x_1+x_2)^2=x_1^2+2x_1x_2+x_2^2$. Right: $x_1^2+x_2^2=S^2-2P$.
- **Mixing up $\Delta$ and $\Delta'$.** Wrong: using $x=\dfrac{-b'\pm\sqrt{\Delta'}}{2a}$. Why it is wrong: with $\Delta'$ the denominator is $a$, not $2a$. Right: $x=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
- **Not rejecting roots in a real-life problem.** Wrong: taking $x=-12$ as the width. Why it is wrong: dimensions must be positive. Right: compare with the conditions of the question before concluding.
:::

**Connections.** This lesson uses the standard identities, square roots and factorising. Viète's formulas are a tool for problems about the roots of a quadratic equation, and forming a quadratic equation will be used again in the topic on solving word problems with equations.

## Key terms

:::terms
- quadratic equation | phương trình bậc hai
- discriminant | biệt thức
- reduced discriminant | biệt thức thu gọn
- repeated root | nghiệm kép
- root | nghiệm
- Viète's formulas | hệ thức Viète
- sum and product of the roots | tổng và tích hai nghiệm
- coefficient | hệ số
- finding a root by inspection | nhẩm nghiệm
:::

## Summary

- $\Delta=b^2-4ac$: $\Delta>0$ two distinct roots, $\Delta=0$ a repeated root, $\Delta<0$ no real roots. With $b=2b'$: $\Delta'=b'^2-ac$ and $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}a$.
- If $a+b+c=0$ then $x_1=1$, $x_2=\dfrac ca$; if $a-b+c=0$ then $x_1=-1$, $x_2=-\dfrac ca$.
- Viète's formulas: $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$.
- $x_1^2+x_2^2=S^2-2P$; $(x_1-x_2)^2=S^2-4P$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP$; $x_1^3+x_2^3=S^3-3SP$.
- If two numbers have sum $S$ and product $P$, they are the roots of $X^2-SX+P=0$ (when $S^2-4P\geq0$).
- In real-life problems, reject roots that do not fit the conditions of the question.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Solve the equations:

a) $x^2-x-6=0$;

b) $4x^2-4x+1=0$;

c) $x^2+2x+5=0$;

d) $2x^2+4x-6=0$.

::hint
**What you need:** the quadratic formula; finding a root by inspection when $a+b+c=0$.

**Steps:**
1. Find $\Delta$ (or $\Delta'$) and decide its sign.
2. In part d), check $a+b+c$.

::solution
a) $\Delta=1+24=25>0$, so $x=\dfrac{1\pm5}{2}$, that is $x=3$ or $x=-2$.

b) $\Delta=16-16=0$, so the equation has a repeated root $x=\dfrac{4}{8}=\dfrac12$.

c) $\Delta'=1-5=-4<0$, so the equation has no real roots.

d) $a+b+c=2+4-6=0$, so $x_1=1$ and $x_2=\dfrac{-6}{2}=-3$.

**Answer.** a) $x=3$ or $x=-2$; b) $x=\dfrac12$; c) no real roots; d) $x=1$ or $x=-3$.
:::

:::exercise
The equation $x^2-3x-5=0$ has two roots $x_1$ and $x_2$. Without solving the equation, find $x_1^2+x_2^2$, $\dfrac1{x_1}+\dfrac1{x_2}$, $(x_1-x_2)^2$ and $x_1^3+x_2^3$.

::hint
**What you need:** Viète's formulas and the formulas in $S$ and $P$.

**Steps:**
1. Check $\Delta>0$, then find $S$ and $P$.
2. Substitute into each formula.

::solution
We have $\Delta=9+20=29>0$, $S=3$, $P=-5$. So $x_1^2+x_2^2=9+10=19$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{3}{-5}=-\dfrac35$; $(x_1-x_2)^2=9+20=29$; $x_1^3+x_2^3=27-3\cdot3\cdot(-5)=27+45=72$.

**Answer.** $19$; $-\dfrac35$; $29$; $72$.
:::

:::exercise
Find two numbers such that:

a) the sum is $9$ and the product is $20$;

b) the sum is $1$ and the product is $-12$.

::hint
**What you need:** the converse: the numbers are the roots of $X^2-SX+P=0$.

**Steps:**
1. Form the equation $X^2-SX+P=0$.
2. Solve it and check the sum and the product.

::solution
a) $X^2-9X+20=0$, $\Delta=81-80=1$, so $X=\dfrac{9\pm1}{2}$, that is $5$ and $4$.

b) $X^2-X-12=0$, $\Delta=1+48=49$, so $X=\dfrac{1\pm7}{2}$, that is $4$ and $-3$.

**Answer.** a) $4$ and $5$; b) $4$ and $-3$.
:::

:::exercise
Form a quadratic equation whose roots are $3+\sqrt2$ and $3-\sqrt2$.

::hint
**What you need:** find the sum $S$ and the product $P$ of the roots.

**Steps:**
1. Find $S$ and $P$.
2. Write $X^2-SX+P=0$.

::solution
$S=(3+\sqrt2)+(3-\sqrt2)=6$ and $P=(3+\sqrt2)(3-\sqrt2)=9-2=7$. The equation is $X^2-6X+7=0$.

**Answer.** $X^2-6X+7=0$.
:::

:::exercise
**Question 2.** ($2.0$ marks) The equation $x^2-6x+4=0$ has two roots $x_1$ and $x_2$. a) Prove that the equation has two distinct roots. b) Find $x_1^2+x_2^2$ and $(x_1-x_2)^2$. c) Find $\dfrac1{x_1}+\dfrac1{x_2}$.

::hint
**What you need:** $\Delta'$; Viète's formulas.

**Steps:**
1. Find $\Delta'$ with $b'=-3$.
2. Find $S$ and $P$, then substitute into the formulas.

::solution
a) $\Delta'=9-4=5>0$, so there are two distinct roots.

b) $S=6$, $P=4$. So $x_1^2+x_2^2=36-8=28$ and $(x_1-x_2)^2=36-16=20$.

c) $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP=\dfrac64=\dfrac32$.

**Answer.** a) Two distinct roots; b) $28$ and $20$; c) $\dfrac32$.
:::

:::exercise
Suppose a rectangular board has perimeter $36$ dm and area $80$ dm². Find the dimensions of the board and the length of its diagonal (round to 1 decimal place).

::hint
**What you need:** the two dimensions have a sum equal to half the perimeter and a product equal to the area.

**Steps:**
1. Find $S$ and $P$ and form $X^2-SX+P=0$.
2. Use Pythagoras' theorem for the diagonal.

::solution
Half the perimeter is $18$, so the dimensions are the roots of $X^2-18X+80=0$. We have $\Delta'=81-80=1$, so $X=9\pm1$, that is $10$ dm and $8$ dm. The diagonal is $\sqrt{10^2+8^2}=\sqrt{164}=2\sqrt{41}\approx12.8$ (dm).

**Answer.** $10$ dm and $8$ dm; diagonal $\approx12.8$ dm.
:::

:::exercise
Suppose a rectangular plot is $7$ m longer than it is wide and has area $120$ m². Find the length and the width of the plot.

::hint
**What you need:** let the width be $x$, form a quadratic equation and compare with the condition $x>0$.

**Steps:**
1. Write the length in terms of $x$.
2. Form and solve the equation for the area.

::solution
Let the width be $x$ (m), $x>0$. The length is $x+7$ (m) and $x(x+7)=120$, that is $x^2+7x-120=0$. We have $\Delta=49+480=529=23^2$, so $x=\dfrac{-7+23}{2}=8$ or $x=\dfrac{-7-23}{2}=-15$ (rejected). The width is $8$ m and the length is $15$ m. Check: $8\cdot15=120$.

**Answer.** Width $8$ m, length $15$ m.
:::

:::exercise
The equation $x^2-7x+12=0$ has two roots $x_1$ and $x_2$. Without solving the equation, find $(x_1-x_2)^2$ and $x_1^3+x_2^3$. Then solve the equation to check.

::hint
**What you need:** $(x_1-x_2)^2=S^2-4P$ and $x_1^3+x_2^3=S^3-3SP$.

**Steps:**
1. Find $S$ and $P$.
2. Substitute into the two formulas, then solve the equation.

::solution
$S=7$, $P=12$. So $(x_1-x_2)^2=49-48=1$ and $x_1^3+x_2^3=343-3\cdot7\cdot12=343-252=91$. Solving: $\Delta=49-48=1$, so $x=\dfrac{7\pm1}{2}$, that is $4$ and $3$. Check: $(4-3)^2=1$ and $4^3+3^3=64+27=91$.

**Answer.** $1$ and $91$.
:::

:::exercise Challenge
Two numbers $x_1$ and $x_2$ satisfy $x_1+x_2=5$ and $x_1^2+x_2^2=13$. Find $x_1x_2$ and then find $x_1$ and $x_2$.

::hint
**What you need:** $x_1^2+x_2^2=S^2-2P$; the converse.

**Steps:**
1. From $S=5$ and $S^2-2P=13$, find $P$.
2. Form $X^2-SX+P=0$ and solve it.

::solution
From $25-2P=13$ we get $P=6$. The two numbers are the roots of $X^2-5X+6=0$, with $\Delta=25-24=1$, so $X=\dfrac{5\pm1}{2}$, that is $3$ and $2$. Check: $3^2+2^2=13$.

**Answer.** $x_1x_2=6$; the numbers are $2$ and $3$.
:::

## Mini test

:::quiz
::mc
The solution set of $3x^2-7x+2=0$ is
A. $\left\{-2,-\dfrac13\right\}$.
B. $\{2,3\}$.
C. $\left\{1,\dfrac23\right\}$.
D. $\left\{2,\dfrac13\right\}$.
::key D
$\Delta=49-24=25$, so $x=\dfrac{7\pm5}{6}$, that is $2$ and $\dfrac13$. Option A has the wrong sign for $-b$, B takes $a=3$ as a root, and C confuses this with the roots found by inspection when $a+b+c=0$.

::mc
The equation $x^2-4x+1=0$ has two roots $x_1$ and $x_2$. The value of $x_1^2+x_2^2$ is
A. $14$.
B. $18$.
C. $12$.
D. $16$.
::key A
$S=4$, $P=1$, so $x_1^2+x_2^2=16-2=14$. Option D is $S^2$, B is $S^2+2P$, and C is $S^2-4P$.

::mc
The equation $2x^2-5x-3=0$ has two roots. The sum of the roots is
A. $-\dfrac52$.
B. $\dfrac52$.
C. $\dfrac32$.
D. $-\dfrac32$.
::key B
$x_1+x_2=-\dfrac ba=\dfrac52$. Option A has the wrong sign, and C and D use the product $\dfrac ca=-\dfrac32$ (or its opposite) instead of the sum.

::mc
The roots of $5x^2-8x+3=0$ are
A. $1$ and $-\dfrac35$.
B. $-1$ and $\dfrac35$.
C. $1$ and $\dfrac35$.
D. $-1$ and $-\dfrac35$.
::key C
$a+b+c=5-8+3=0$, so $x_1=1$ and $x_2=\dfrac ca=\dfrac35$. The other options have the wrong sign for one or both roots.

::tf
The equation $x^2-6x+4=0$ has two roots $x_1$ and $x_2$. Decide whether each statement is true or false.
a) The equation has two distinct roots.
b) $x_1+x_2=6$.
c) $x_1^2+x_2^2=32$.
d) $(x_1-x_2)^2=16$.
::key T T F F
a) True: $\Delta'=9-4=5>0$. b) True: $x_1+x_2=-\dfrac{-6}{1}=6$. c) False: $x_1^2+x_2^2=36-8=28$. d) False: $(x_1-x_2)^2=36-16=20$.

::sa
The equation $x^2-3x-5=0$ has two roots $x_1$ and $x_2$. Find $x_1^2+x_2^2$.
::key 19
$S=3$, $P=-5$, so $x_1^2+x_2^2=9-2\cdot(-5)=19$.

::sa
A rectangular board has perimeter $36$ dm and area $80$ dm². Find the length of the shorter side (in dm).
::key 8
The two sides are the roots of $X^2-18X+80=0$, that is $10$ and $8$. The shorter side is $8$.
:::
