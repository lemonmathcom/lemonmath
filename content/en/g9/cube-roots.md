---
title: Cube roots and cube-root expressions
description: Understand the cube root of a real number, find cube roots by definition and by calculator, and use ∛(A³) = A to simplify cube-root expressions.
minutes: 20
---

:::goals
- Understand the cube root of a real number and find the cube roots of simple numbers.
- Use a calculator to find approximate cube roots.
- Recognise cube-root expressions and use $\sqrt[3]{A^3}=A$ to evaluate and simplify.
:::

A big Rubik's-style cube is built from $27$ identical small cubes. How many small cubes are there along each edge? A gift box in the shape of a cube has a volume of $2$ litres, that is $2000$ cm³. How long is each edge, in centimetres?

For the first question, $3\cdot3\cdot3=27$, so each edge has $3$ small cubes. The second question needs a number whose **cube** is $2000$. That is a cube root.

:::diagram A cube with edge $a$ and volume $a^3$
alt: A cube drawn in oblique projection with the hidden edges dashed and one bottom edge labelled a
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B "a"
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
:::

## The cube root of a real number

### Explore: the cubes of a few numbers

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^3$ | $-27$ | $-8$ | $-1$ | $0$ | $1$ | $8$ | $27$ |

Unlike a square, the cube of a negative number is negative. Each value in the bottom row appears exactly once. For example, only one number cubes to $-8$, namely $-2$.

:::definition Cube root
The **cube root** of a real number $a$ is the number $x$ with $x^3=a$.

Every real number $a$ has **exactly one** cube root, written $\sqrt[3]{a}$. The number $3$ is called the **index** of the root.

From the definition: $\left(\sqrt[3]{a}\right)^3=a$ and $\sqrt[3]{a^3}=a$ for every real number $a$.
:::

Remember: the cube root of a positive number is positive, of a negative number is negative, and of $0$ is $0$. Also, $\sqrt[3]{-a}=-\sqrt[3]{a}$.

:::example Finding cube roots
Find: a) $\sqrt[3]{64}$; b) $\sqrt[3]{-125}$; c) $\sqrt[3]{0.008}$; d) $\sqrt[3]{-\dfrac{8}{27}}$.

**Solution.** We have

$$4^3=64,\qquad (-5)^3=-125,\qquad 0.2^3=0.008,\qquad \left(-\frac23\right)^3=-\frac{8}{27}.$$

So a) $4$; b) $-5$; c) $0.2$; d) $-\dfrac23$.
:::

For a number like $2000$, no whole number cubes to $2000$ (since $12^3=1728$ and $13^3=2197$). We use a calculator.

:::example The edge of the gift box
Find the edge of the gift box with volume $2000$ cm³ (rounded to one decimal place).

**Solution.** Let $a$ (cm) be the edge of the box ($a>0$). We have $a^3=2000$, so $a=\sqrt[3]{2000}$. Using a calculator, we get

$$a=\sqrt[3]{2000}\approx12.599\approx12.6.$$

So each edge of the box is about $12.6$ cm.
:::

The identities $\left(\sqrt[3]{a}\right)^3=a$ and $\sqrt[3]{a^3}=a$ make many expressions quick to evaluate.

:::example Evaluating an expression
Evaluate $A=\sqrt[3]{27}-\sqrt[3]{-64}+\left(\sqrt[3]{3}\right)^3$.

**Solution.** We have $\sqrt[3]{27}=3$, $\sqrt[3]{-64}=-4$ and $\left(\sqrt[3]{3}\right)^3=3$. Hence

$$A=3-(-4)+3=10.$$

So $A=10$.
:::

## Comparing cube roots

Cubing keeps the order: a larger number has a larger cube. So for all real numbers $a$ and $b$:
$$a<b\iff\sqrt[3]{a}<\sqrt[3]{b}.$$

:::example Comparing
Compare: a) $3$ and $\sqrt[3]{26}$; b) $2\sqrt[3]{3}$ and $\sqrt[3]{25}$.

**Solution.** a) We have $3=\sqrt[3]{27}$ and $27>26$. b) We have $\left(2\sqrt[3]3\right)^3=2^3\cdot3=24$, so $2\sqrt[3]3=\sqrt[3]{24}$, and $24<25$. Hence

$$3=\sqrt[3]{27}>\sqrt[3]{26};\qquad 2\sqrt[3]{3}=\sqrt[3]{24}<\sqrt[3]{25}.$$

So $3>\sqrt[3]{26}$ and $2\sqrt[3]{3}<\sqrt[3]{25}$.
:::

## Cube-root expressions

:::definition Cube-root expression
If $A$ is an algebraic expression, $\sqrt[3]{A}$ is called a **cube-root expression**, and $A$ is the expression under the root sign.

$\sqrt[3]{A}$ is **defined for every value** of the variable for which $A$ is defined, and $\sqrt[3]{A^3}=A$.
:::

Compare with square roots: $\sqrt{A^2}=|A|$, but $\sqrt[3]{A^3}=A$, with no absolute value and no condition $A\ge0$.

:::example Simplifying cube-root expressions
Simplify: a) $\sqrt[3]{8x^3}$; b) $\sqrt[3]{x^3-3x^2+3x-1}$.

**Solution.** Using $\sqrt[3]{A^3}=A$, we have (in b), using the identity $(a-b)^3=a^3-3a^2b+3ab^2-b^3$):

$$\sqrt[3]{8x^3}=\sqrt[3]{(2x)^3}=2x;\qquad \sqrt[3]{x^3-3x^2+3x-1}=\sqrt[3]{(x-1)^3}=x-1.$$

So a) $2x$; b) $x-1$, true for every $x$.
:::

:::example A cube-shaped water tank
A cube-shaped water tank holds $1728$ litres when full. Find the edge of the tank in metres.

**Solution.** We have $1728$ litres $=1728$ dm³. Let $a$ (dm) be the edge of the tank ($a>0$); then $a^3=1728$. Hence

$$a=\sqrt[3]{1728}=12\ \text{(dm)}=1.2\ \text{(m)}.$$

So the edge of the tank is $1.2$ m.
:::

:::warning Common mistakes
- **Thinking a negative number has no cube root.** Wrong: "$\sqrt[3]{-8}$ is not defined". Why it is wrong: $(-2)^3=-8$. Right: $\sqrt[3]{-8}=-2$.
- **Writing $\sqrt[3]{a^3}=|a|$.** Wrong: $\sqrt[3]{(-5)^3}=5$. Why it is wrong: only square roots need the absolute value. Right: $\sqrt[3]{(-5)^3}=-5$.
- **Confusing the cube root with dividing by three.** Wrong: $\sqrt[3]{27}=9$. Why it is wrong: $9^3=729$. Right: $\sqrt[3]{27}=3$ because $3^3=27$.
- **Adding a condition that is not needed.** Wrong: "$\sqrt[3]{x-2}$ is defined when $x\ge2$". Why it is wrong: a cube root is defined for every number. Right: it is defined for every $x$.
:::

## Key terms

:::terms
- cube root | căn bậc ba
- cube-root expression | căn thức bậc ba
- cube of a number | lập phương của một số
- cube | hình lập phương
- index of the root | chỉ số của căn
- volume | thể tích
- expression under the root sign | biểu thức lấy căn
:::

## Summary

- $x=\sqrt[3]{a}\iff x^3=a$. Every real number has exactly one cube root.
- $\left(\sqrt[3]{a}\right)^3=a$, $\sqrt[3]{a^3}=a$, $\sqrt[3]{-a}=-\sqrt[3]{a}$.
- $a<b\iff\sqrt[3]{a}<\sqrt[3]{b}$; to compare, write both as cube roots or compare their cubes.
- $\sqrt[3]{A}$ is defined whenever $A$ is; $\sqrt[3]{A^3}=A$ (no absolute value).
- A cube of volume $V$ has edge $\sqrt[3]{V}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Evaluate: a) $\sqrt[3]{343}$; b) $\sqrt[3]{-0.027}$; c) $\sqrt[3]{\dfrac{64}{125}}$.

::hint
**What you need:** $\sqrt[3]{a}=x\iff x^3=a$.

**Steps:**
1. Remember the cubes $1^3$ to $10^3$.
2. For a negative number, the cube root is negative.

::solution
a) Since $7^3=343$, $\sqrt[3]{343}=7$. b) Since $(-0.3)^3=-0.027$, $\sqrt[3]{-0.027}=-0.3$. c) Since $\left(\dfrac45\right)^3=\dfrac{64}{125}$, $\sqrt[3]{\dfrac{64}{125}}=\dfrac45$.

**Answer.** a) $7$; b) $-0.3$; c) $\dfrac45$.
:::

:::exercise
Evaluate $\sqrt[3]{-216}+\sqrt[3]{1000}-\left(\sqrt[3]{7}\right)^3$.

::hint
**What you need:** $\left(\sqrt[3]{a}\right)^3=a$.

**Steps:**
1. Work out each root.
2. Add and subtract.

::solution
We have $\sqrt[3]{-216}+\sqrt[3]{1000}-\left(\sqrt[3]{7}\right)^3=-6+10-7=-3$.

**Answer.** $-3$.
:::

:::exercise
Use a calculator to find (rounded to two decimal places): a) $\sqrt[3]{50}$; b) $\sqrt[3]{-12}$.

::hint
**What you need:** the calculator has a cube-root key; the cube root of a negative number is negative.

**Steps:**
1. Use the calculator.
2. Round to the second decimal place.

::solution
Using a calculator, we get: a) $\sqrt[3]{50}\approx3.68$; b) $\sqrt[3]{-12}\approx-2.29$.

**Answer.** a) $3.68$; b) $-2.29$.
:::

:::exercise
Compare: a) $5$ and $\sqrt[3]{124}$; b) $-2$ and $\sqrt[3]{-9}$.

::hint
**What you need:** $a<b\iff\sqrt[3]a<\sqrt[3]b$.

**Steps:**
1. Write $5=\sqrt[3]{125}$ and $-2=\sqrt[3]{-8}$.
2. Compare the numbers under the root signs.

::solution
a) We have $5=\sqrt[3]{125}$. Since $125>124$, $5>\sqrt[3]{124}$. b) We have $-2=\sqrt[3]{-8}$. Since $-8>-9$, $-2>\sqrt[3]{-9}$.

**Answer.** a) $5>\sqrt[3]{124}$; b) $-2>\sqrt[3]{-9}$.
:::

:::exercise
Find $x$ given that: a) $x^3=-64$; b) $\sqrt[3]{3x+1}=-2$.

::hint
**What you need:** $x^3=a\iff x=\sqrt[3]a$; $\sqrt[3]A=b\iff A=b^3$.

**Steps:**
1. Part a: take the cube root.
2. Part b: cube both sides and solve the linear equation.

::solution
a) We have $x^3=-64\iff x=\sqrt[3]{-64}=-4$. b) We have $\sqrt[3]{3x+1}=-2\iff 3x+1=(-2)^3=-8\iff 3x=-9\iff x=-3$.

**Answer.** a) $x=-4$; b) $x=-3$.
:::

:::exercise
Simplify the following expressions: a) $\sqrt[3]{27x^3}-2x$; b) $\sqrt[3]{x^3+6x^2+12x+8}$.

::hint
**What you need:** $\sqrt[3]{A^3}=A$; the identity $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.

**Steps:**
1. Write $27x^3=(3x)^3$.
2. Recognise $x^3+6x^2+12x+8=(x+2)^3$.

::solution
a) We have $\sqrt[3]{27x^3}-2x=\sqrt[3]{(3x)^3}-2x=3x-2x=x$. b) We have $\sqrt[3]{x^3+6x^2+12x+8}=\sqrt[3]{(x+2)^3}=x+2$.

**Answer.** a) $x$; b) $x+2$.
:::

:::exercise
A cube-shaped water tank holds $3375$ litres when full.

a) Find the edge of the tank in metres.

b) Find the area of the base of the tank.

::hint
**What you need:** $1$ litre $=1$ dm³; the edge of a cube is $\sqrt[3]{V}$.

**Steps:**
1. Work out $\sqrt[3]{3375}$ (dm) and convert to metres.
2. The base area is the square of the edge.

::solution
a) We have $3375$ litres $=3375$ dm³. Hence the edge of the tank is $\sqrt[3]{3375}=15$ (dm) $=1.5$ (m).

b) The area of the base is $1.5^2=2.25$ (m²).

**Answer.** a) $1.5$ m; b) $2.25$ m².
:::

:::exercise
A large cube is built from $512$ identical small cubes, and then its whole outside surface is painted.

a) How many small cubes are there along each edge of the large cube?

b) How many small cubes have no painted face?

::hint
**What you need:** the number of cubes along an edge is $\sqrt[3]{512}$.

**Steps:**
1. Work out $\sqrt[3]{512}$.
2. The unpainted cubes form a smaller cube inside, with $2$ fewer cubes along each edge.

::solution
a) The number of small cubes along each edge is $\sqrt[3]{512}=8$.

b) The unpainted small cubes form a cube inside, with $8-2=6$ cubes along each edge. Hence $6^3=216$ small cubes have no painted face.

**Answer.** a) $8$; b) $216$.
:::

:::exercise
Evaluate $\sqrt{16}+\sqrt[3]{-27}+\sqrt{(-2)^2}$.

::hint
**What you need:** $\sqrt{a^2}=|a|$ (see [square roots and square-root expressions](lesson:square-roots-radicals)) and $\sqrt[3]{a^3}=a$.

**Steps:**
1. Work out each term, watching the signs.
2. Add them.

::solution
We have $\sqrt{16}+\sqrt[3]{-27}+\sqrt{(-2)^2}=4+(-3)+|-2|=4-3+2=3$.

**Answer.** $3$.
:::

:::exercise Challenge
How many integers $x$ satisfy $-2<\sqrt[3]{x}<3$?

::hint
**What you need:** $a<b\iff\sqrt[3]a<\sqrt[3]b$, so we can cube every part and keep the inequality signs.

**Steps:**
1. Write $-2=\sqrt[3]{-8}$ and $3=\sqrt[3]{27}$.
2. Count the integers in the interval you get.

::solution
We have $-2=\sqrt[3]{-8}$ and $3=\sqrt[3]{27}$. Hence $-2<\sqrt[3]{x}<3\iff -8<x<27$. So the integers $x$ are $-7, -6, \ldots, 26$, which is $26-(-7)+1=34$ numbers.

**Answer.** $34$ integers.
:::

## Mini test

:::quiz
::mc
$\sqrt[3]{-27}$ equals
A. $-3$.
B. $3$.
C. $-9$.
D. not defined.
::key A
Since $(-3)^3=-27$, $\sqrt[3]{-27}=-3$. Option D confuses it with a square root, and C divides $-27$ by $3$.

::mc
Which expression is defined for every real number $x$?
A. $\sqrt{x-1}$.
B. $\sqrt[3]{x-1}$.
C. $\sqrt{1-x}$.
D. $\sqrt{x}$.
::key B
A cube root is defined for every expression under the root sign. The square roots in A, C and D need a non-negative expression under the root.

::mc
$\sqrt[3]{(-5)^3}$ equals
A. $5$.
B. $-5$.
C. $125$.
D. $\pm5$.
::key B
We have $\sqrt[3]{(-5)^3}=-5$ (since $\sqrt[3]{a^3}=a$). Option A wrongly uses the absolute value, as for a square root.

::mc
A cube-shaped crate has a volume of $0.216$ m³. Its edge is
A. $0.6$ m.
B. $0.072$ m.
C. $0.06$ m.
D. $6$ m.
::key A
The edge is $\sqrt[3]{0.216}=0.6$ (m) (since $0.6^3=0.216$). Option B divides the volume by $3$; C and D put the decimal point in the wrong place.

::tf
Consider the expression $A=\sqrt[3]{x-7}$. Decide whether each statement is true or false.
a) $A$ is defined if and only if $x\ge7$.
b) When $x=-1$, $A=-2$.
c) $A=3$ when $x=34$.
d) $A<0$ when $x<7$.
::key F T T T
a) False. A cube root is defined for every $x$. b) True. When $x=-1$, $A=\sqrt[3]{-8}=-2$. c) True. When $x=34$, $A=\sqrt[3]{27}=3$. d) True. When $x<7$, $x-7<0$, hence $A=\sqrt[3]{x-7}<0$.

::sa
Evaluate $\sqrt[3]{125}-\sqrt[3]{-8}+\sqrt[3]{0.001}$.
::key 7.1
We have $\sqrt[3]{125}-\sqrt[3]{-8}+\sqrt[3]{0.001}=5-(-2)+0.1=7.1$.

::sa
A cube-shaped gift box has a volume of $3$ litres. Find the length of its edge in centimetres (give your answer to 1 decimal place).
::key 14.4
We have $3$ litres $=3000$ cm³. Hence the edge is $\sqrt[3]{3000}\approx14.4$ (cm).
:::
