---
title: Powers with real exponents
description: Extend powers from integer to rational and real exponents, learn their properties, simplify and compare powers, and apply them to compound interest.
minutes: 25
---

:::goals
- Recall powers with integer exponents and $n$th roots; understand why rational and real exponents are defined only for a positive base.
- Evaluate powers with integer and rational exponents and $n$th roots.
- Use the properties of powers to simplify expressions and compare powers.
- Apply powers with real exponents to compound interest and growth.
:::

Suppose you put $100$ million dong into a bank at $6\%$ a year, with compound interest (made-up figures). After each year the amount is multiplied by $1.06$: after $2$ years it is $100\cdot1.06^2=112.36$ million dong, and after $3$ years it is $100\cdot1.06^3=119.1016$ million dong.

What about after $2.5$ years? We need to know what $1.06^{2.5}$ means and, going deeper, what $2^{\sqrt2}$ means when the exponent is no longer a whole number, or even a fraction. This lesson answers that question: we extend powers step by step so that the familiar properties stay true.

## From integer exponents to rational exponents

For a positive integer $n$ and a real number $a$, $a^n=\underbrace{a\cdot a\cdots a}_{n\text{ factors}}$. If $a\neq0$, then $a^0=1$ and $a^{-n}=\dfrac{1}{a^n}$. The rules $a^0=1$ and $a^{-n}=\dfrac1{a^n}$ are chosen so that $a^m\cdot a^n=a^{m+n}$ stays true: for example $2^3\cdot2^{-3}=2^0$ must equal $1$, so $2^{-3}=\dfrac{1}{2^3}$.

### Explore: what should $2^{1/2}$ be?

We want $2^{1/2}$ to obey $(a^{\alpha})^{\beta}=a^{\alpha\beta}$ as well. Then
$$\left(2^{1/2}\right)^2=2^{\frac12\cdot2}=2^1=2.$$
The positive number whose square is $2$ is $\sqrt2$. So the only way to keep the properties is to define $2^{1/2}=\sqrt2$. In the same way, $(2^{1/3})^3=2$ gives $2^{1/3}=\sqrt[3]{2}$.

To work with such numbers we need the idea of an $n$th root.

:::definition The $n$th root
Let $a$ be a real number and $n\ge2$ an integer. A number $b$ is an **$n$th root** of $a$ if $b^n=a$.
- If $n$ is odd, every real number $a$ has exactly one $n$th root, written $\sqrt[n]{a}$.
- If $n$ is even and $a>0$, there are two $n$th roots, opposite to each other; the positive one is written $\sqrt[n]{a}$ and the negative one is $-\sqrt[n]{a}$.
- If $n$ is even and $a<0$, there is no $n$th root (in the real numbers); $\sqrt[n]{0}=0$.
:::

For example $\sqrt[3]{-8}=-2$ because $(-2)^3=-8$, and $\sqrt[4]{16}=2$ because $2^4=16$ (the number $-2$ also satisfies $(-2)^4=16$, but the symbol $\sqrt[4]{16}$ means the positive root only).

:::definition Powers with rational exponents
Let $a>0$ and let $r=\dfrac{m}{n}$ be a rational number ($m\in\mathbb{Z}$, $n\in\mathbb{Z}$, $n\ge2$). Then
$$a^{r}=a^{\frac mn}=\sqrt[n]{a^m}.$$
:::

**Going deeper.** Why must $a>0$? If we allowed $a<0$, we would meet a contradiction: $\dfrac13=\dfrac26$, but $(-8)^{1/3}=\sqrt[3]{-8}=-2$ while $(-8)^{2/6}=\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2$. The same exponent gives two different results. So that a power does not depend on how the fraction is written, we use only a positive base.

## Powers with real exponents

What about $2^{\sqrt2}$? The number $\sqrt2=1.41421\ldots$ is irrational, so it cannot be written as a fraction. The idea is to use rational numbers that get closer and closer to $\sqrt2$.

| $r$ | $1.4$ | $1.41$ | $1.414$ | $1.4142$ |
|---|---|---|---|---|
| $2^{r}$ | $2.6390$ | $2.6574$ | $2.6647$ | $2.6651$ |

As $r$ approaches $\sqrt2$, the value $2^r$ settles on one definite number, about $2.6651$. That number is $2^{\sqrt2}$.

:::definition Powers with real exponents
Let $a>0$ and let $\alpha$ be an irrational number. Take a sequence of rational numbers $(r_n)$ with limit $\alpha$. Then $a^{\alpha}=\lim a^{r_n}$.
:::

This limit exists and does not depend on the choice of the sequence $(r_n)$. The figure shows that the graph of $y=2^x$ is one unbroken curve that also passes through the point whose $x$-coordinate is the irrational number $\sqrt2$.

:::graph The graph of $y=2^x$ and the point with $x$-coordinate $\sqrt2$
alt: The rising curve y equals 2 to the power x, through the points (1, 2), (2, 4) and a point with x-coordinate about 1.414 and y-coordinate about 2.665
x: -1..3
y: 0..9
plot: 2^x
point: (1, 2) "2" below-right
point: (2, 4) "4" below-right
point: (1.4142, 2.6651) "2^√2" above-left
:::

:::theorem Properties of powers with real exponents
For $a>0$, $b>0$ and all real numbers $\alpha$, $\beta$:
- $a^{\alpha}\cdot a^{\beta}=a^{\alpha+\beta}$; $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$; $(a^{\alpha})^{\beta}=a^{\alpha\beta}$.
- $(ab)^{\alpha}=a^{\alpha}b^{\alpha}$; $\left(\dfrac ab\right)^{\alpha}=\dfrac{a^{\alpha}}{b^{\alpha}}$.
- If $a>1$, then $a^{\alpha}>a^{\beta}\Leftrightarrow\alpha>\beta$. If $0<a<1$, then $a^{\alpha}>a^{\beta}\Leftrightarrow\alpha<\beta$.
:::

**Why?** These properties hold for rational exponents, and they carry over to real exponents by taking limits. The comparison property can be seen from the graph: for $a>1$ the graph of $y=a^x$ rises, so a larger exponent gives a larger value; for $0<a<1$ the graph falls, so the inequality reverses.

## Examples

We start with roots and rational exponents.

:::example Evaluating powers
Work out:

a) $\sqrt[3]{-125}$.

b) $\sqrt[4]{81}$.

c) $16^{3/4}$.

d) $8^{-2/3}$.

**Solution.** a) Since $(-5)^3=-125$, we have $\sqrt[3]{-125}=-5$.

b) Since $3^4=81$, we have $\sqrt[4]{81}=3$.

c) We have $16^{3/4}=\left(2^4\right)^{3/4}=2^{3}=8$.

d) We have $8^{-2/3}=\left(2^3\right)^{-2/3}=2^{-2}=\dfrac14$.

So a) $-5$; b) $3$; c) $8$; d) $\dfrac14$.
:::

With irrational exponents we use the properties to reach whole numbers.

:::example Evaluating powers with irrational exponents
Work out:

a) $\left(2^{\sqrt3+1}\right)^{\sqrt3-1}$.

b) $\dfrac{5^{\sqrt3+2}\cdot5^{2-\sqrt3}}{25}$.

**Solution.** a) We have $\left(2^{\sqrt3+1}\right)^{\sqrt3-1}=2^{(\sqrt3+1)(\sqrt3-1)}=2^{3-1}=2^2=4$.

b) We have $5^{\sqrt3+2}\cdot5^{2-\sqrt3}=5^{(\sqrt3+2)+(2-\sqrt3)}=5^4=625$, and $625\div25=25$.

So a) $4$; b) $25$.
:::

Next we simplify expressions with letters.

:::example Simplifying expressions
For $a>0$, $b>0$, simplify:

a) $A=\dfrac{a^{2/3}\cdot a^{1/2}}{a^{1/6}}$.

b) $B=\left(a^{1/2}+b^{1/2}\right)^2-2\sqrt{ab}$.

**Solution.** a) Add and subtract the exponents:

$$A=a^{\frac23+\frac12-\frac16}=a^{\frac46+\frac36-\frac16}=a^{1}=a.$$

b) Expand the square, using $\sqrt{ab}=(ab)^{1/2}=a^{1/2}b^{1/2}$:

$$B=a+2a^{1/2}b^{1/2}+b-2a^{1/2}b^{1/2}=a+b.$$

So $A=a$ and $B=a+b$.
:::

Now we use the comparison property. The key is to ask whether the base is greater or less than $1$.

:::example Comparing powers
Compare:

a) $2^{\sqrt3}$ and $2^{1.7}$.

b) $\left(\dfrac13\right)^{\sqrt2}$ and $\left(\dfrac13\right)^{1.5}$.

c) $2^{300}$ and $3^{200}$.

**Solution.** a) The base $2>1$ and $\sqrt3\approx1.732>1.7$, so $2^{\sqrt3}>2^{1.7}$.

b) The base satisfies $0<\dfrac13<1$ and $\sqrt2\approx1.414<1.5$, so $\left(\dfrac13\right)^{\sqrt2}>\left(\dfrac13\right)^{1.5}$.

c) Write both with exponent $100$: $2^{300}=\left(2^3\right)^{100}=8^{100}$ and $3^{200}=\left(3^2\right)^{100}=9^{100}$. Since $8<9$, we have $8^{100}<9^{100}$.

So a) $2^{\sqrt3}>2^{1.7}$; b) $\left(\dfrac13\right)^{\sqrt2}>\left(\dfrac13\right)^{1.5}$; c) $2^{300}<3^{200}$.
:::

Finally, the problem from the start of the lesson, through all four steps.

:::example Application: compound interest
Suppose Mrs Hoa puts $100$ million dong into an account at $6\%$ a year with compound interest (made-up figures). After $t$ years the amount is $A(t)=100\cdot1.06^{t}$ (million dong). Work out the amount after $3$ years and after $2.5$ years (round to 2 decimal places).

**Solution.**

*Understand.* Each year the amount is multiplied by $1.06$. We need $A(3)$ and $A(2.5)$, where the exponent $2.5$ is not an integer.

*Plan.* Substitute $t$ into the formula. For $t=2.5=\dfrac52$ we use a power with a rational exponent: $1.06^{5/2}=\sqrt{1.06^5}$, worked out on a scientific calculator.

*Solve.* We have $A(3)=100\cdot1.06^3=119.1016\approx119.10$. We have $A(2.5)=100\cdot1.06^{2.5}\approx115.68$.

So after $3$ years Mrs Hoa has about $119.10$ million dong, and after $2.5$ years she has about $115.68$ million dong.

*Look back.* Is the result reasonable? After $2$ years the amount is $112.36$ and after $3$ years it is $119.10$, so $115.68$ lies between them, as expected. However, in practice a bank usually pays interest only at fixed periods, so the formula with a non-integer $t$ is an approximate model, not the exact sum the bank would pay.
:::

:::warning Common mistakes
- **Multiplying the exponents when multiplying powers of the same base.** Wrong: $2^3\cdot2^4=2^{12}$. Why it is wrong: when we multiply powers of the same base we add the exponents. Right: $2^3\cdot2^4=2^7$.
- **Taking a power of a sum as the sum of the powers.** Wrong: $(4+9)^{1/2}=4^{1/2}+9^{1/2}=5$. Why it is wrong: in general $(a+b)^{\alpha}\neq a^{\alpha}+b^{\alpha}$. Right: $(4+9)^{1/2}=\sqrt{13}\approx3.61$.
- **Forgetting to reverse the inequality when the base is less than $1$.** Wrong: $\left(\dfrac12\right)^3>\left(\dfrac12\right)^2$ because $3>2$. Why it is wrong: for $0<a<1$, a larger exponent gives a smaller value. Right: $\left(\dfrac12\right)^3=\dfrac18<\dfrac14=\left(\dfrac12\right)^2$.
- **Allowing a negative base with a rational exponent.** Wrong: $(-8)^{1/3}=-2$ and $(-8)^{2/6}=2$ are both valid powers. Why it is wrong: the two results contradict each other although $\dfrac26=\dfrac13$. Right: powers with rational exponents are defined only when $a>0$.
:::

**Connections.** Powers with real exponents build on the square roots and algebraic identities you already know, and on limits to define irrational exponents. They lead to [logarithms](lesson:logarithms) (a way to "find the exponent" when the power is known) and to [exponential and logarithmic functions](lesson:exp-log-functions) (studying $a^x$ as a function). In real life, every quantity that rises or falls by a fixed ratio each period (compound interest, a bacteria count, the value of an asset losing value) is a power whose exponent is time.

## Key terms

:::terms
- power | luỹ thừa
- base | cơ số
- exponent (index) | số mũ
- $n$th root | căn bậc $n$
- negative exponent | số mũ nguyên âm
- rational exponent | số mũ hữu tỉ
- real exponent | số mũ thực
- compound interest | lãi kép
- growth | tăng trưởng
- depreciation | khấu hao
:::

## Summary

- $a^0=1$, $a^{-n}=\dfrac1{a^n}$ ($a\neq0$); $a^{m/n}=\sqrt[n]{a^m}$ for $a>0$.
- For $a>0$ and an irrational exponent $\alpha$: $a^{\alpha}=\lim a^{r_n}$, where $r_n$ is rational and $r_n\to\alpha$.
- Properties: $a^{\alpha}a^{\beta}=a^{\alpha+\beta}$, $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$, $(a^{\alpha})^{\beta}=a^{\alpha\beta}$, $(ab)^{\alpha}=a^{\alpha}b^{\alpha}$.
- Comparison: if $a>1$, a larger exponent gives a larger value; if $0<a<1$, it is the other way round.
- Real-life problems: compound interest, growth and depreciation all have the form (starting value) $\times$ (ratio)$^{t}$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Work out:

a) $2^{-5}$.

b) $(-3)^{-3}$.

c) $\left(\dfrac23\right)^{-2}$.

::hint
**What you need:** $a^{-n}=\dfrac{1}{a^n}$ for $a\neq0$.

**Steps:**
1. Write each power in the form $\dfrac{1}{a^n}$.
2. Watch the sign in part b and the reciprocal of the fraction in part c.

::solution
a) We have $2^{-5}=\dfrac{1}{2^5}=\dfrac1{32}$.

b) We have $(-3)^{-3}=\dfrac{1}{(-3)^3}=-\dfrac1{27}$.

c) We have $\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2=\dfrac94$.

So a) $\dfrac1{32}$; b) $-\dfrac1{27}$; c) $\dfrac94$.

**Answer.** a) $\dfrac1{32}$; b) $-\dfrac1{27}$; c) $\dfrac94$.
:::

:::exercise
Work out:

a) $\sqrt[3]{-64}$.

b) $\sqrt[4]{256}$.

c) $125^{2/3}$.

d) $16^{-3/4}$.

::hint
**What you need:** $a^{m/n}=\sqrt[n]{a^m}$; write the base as a power of a smaller number.

**Steps:**
1. Write $125=5^3$ and $16=2^4$.
2. Multiply the exponents.

::solution
a) Since $(-4)^3=-64$, we have $\sqrt[3]{-64}=-4$.

b) Since $4^4=256$, we have $\sqrt[4]{256}=4$.

c) We have $125^{2/3}=\left(5^3\right)^{2/3}=5^2=25$.

d) We have $16^{-3/4}=\left(2^4\right)^{-3/4}=2^{-3}=\dfrac18$.

So a) $-4$; b) $4$; c) $25$; d) $\dfrac18$.

**Answer.** a) $-4$; b) $4$; c) $25$; d) $\dfrac18$.
:::

:::exercise
Work out:

a) $\dfrac{7^{\sqrt5+1}}{7^{\sqrt5-1}}$.

b) $\left(3^{\sqrt2}\right)^{\sqrt2}$.

c) $4^{\sqrt3}\cdot2^{2-2\sqrt3}$.

::hint
**What you need:** $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$, $(a^{\alpha})^{\beta}=a^{\alpha\beta}$; write $4=2^2$.

**Steps:**
1. Write everything with one base.
2. Add, subtract or multiply the exponents.

::solution
a) We have $\dfrac{7^{\sqrt5+1}}{7^{\sqrt5-1}}=7^{(\sqrt5+1)-(\sqrt5-1)}=7^2=49$.

b) We have $\left(3^{\sqrt2}\right)^{\sqrt2}=3^{\sqrt2\cdot\sqrt2}=3^2=9$.

c) We have $4^{\sqrt3}=2^{2\sqrt3}$, so $4^{\sqrt3}\cdot2^{2-2\sqrt3}=2^{2\sqrt3+2-2\sqrt3}=2^2=4$.

So a) $49$; b) $9$; c) $4$.

**Answer.** a) $49$; b) $9$; c) $4$.
:::

:::exercise
For $a>0$, write each expression in the form $a^{r}$ with $r$ rational:

a) $\sqrt{a}\cdot\sqrt[3]{a}$.

b) $\dfrac{a^2}{\sqrt[3]{a}}$.

c) $\dfrac{1}{a\sqrt{a}}$.

::hint
**What you need:** $\sqrt[n]{a}=a^{1/n}$ and the properties of powers.

**Steps:**
1. Change every root into a power with a rational exponent.
2. Add or subtract the exponents.

::solution
a) We have $a^{1/2}\cdot a^{1/3}=a^{\frac12+\frac13}=a^{5/6}$.

b) We have $\dfrac{a^2}{a^{1/3}}=a^{2-\frac13}=a^{5/3}$.

c) We have $\dfrac{1}{a\cdot a^{1/2}}=\dfrac{1}{a^{3/2}}=a^{-3/2}$.

So a) $a^{5/6}$; b) $a^{5/3}$; c) $a^{-3/2}$.

**Answer.** a) $a^{5/6}$; b) $a^{5/3}$; c) $a^{-3/2}$.
:::

:::exercise
Suppose the number of bacteria in a culture (made-up figures) is $N(t)=500\cdot2^{t/3}$, where $t$ is the number of hours since the start. Work out the number of bacteria at the start, after $9$ hours and after $4.5$ hours (round to the nearest whole number).

::hint
**What you need:** substitute $t$ into the formula; $2^{t/3}$ doubles every $3$ hours.

**Steps:**
1. Substitute $t=0$ and $t=9$.
2. Substitute $t=4.5$ and use a scientific calculator.

::solution
We have $N(0)=500\cdot2^0=500$ and $N(9)=500\cdot2^3=4000$. We have $N(4.5)=500\cdot2^{1.5}\approx1414.2$.

So there are $500$ bacteria at the start, $4000$ after $9$ hours and about $1414$ after $4.5$ hours.

**Answer.** $500$; $4000$; about $1414$.
:::

:::exercise
Suppose a new car costs $800$ million dong and loses $10\%$ of its value each year (made-up figures). The value of the car after $t$ years is $V(t)=800\cdot0.9^{t}$ (million dong). Work out its value after $3$ years and after $2.5$ years (round to 1 decimal place).

::hint
**What you need:** each year the value is multiplied by $0.9$.

**Steps:**
1. Work out $V(3)$.
2. Work out $V(2.5)$ with a scientific calculator.

::solution
We have $V(3)=800\cdot0.9^3=800\cdot0.729=583.2$. We have $V(2.5)=800\cdot0.9^{2.5}\approx614.7$.

So the value of the car is $583.2$ million dong after $3$ years and about $614.7$ million dong after $2.5$ years.

**Answer.** $583.2$ million dong; about $614.7$ million dong.
:::

:::exercise
Decide whether each statement is true or false.

a) $(-8)^{1/3}=-2$ by the definition of powers with rational exponents.

b) $4^{3/2}=8$.

c) $2^{\sqrt3}<2^{1.7}$.

d) $\left(\dfrac12\right)^{\sqrt5}<\left(\dfrac12\right)^{2}$.

::hint
**What you need:** powers with rational exponents are defined only for a positive base; the comparison property depends on whether the base is greater or less than $1$.

**Steps:**
1. a) Is the base positive?
2. c), d) Compare $\sqrt3$ with $1.7$ and $\sqrt5$ with $2$.

::solution
a) **False**: by definition, $a^{r}$ is considered only for $a>0$, so $(-8)^{1/3}$ is not defined as a power with a rational exponent (the cube root of $-8$ is $-2$).

b) **True**: $4^{3/2}=\left(2^2\right)^{3/2}=2^3=8$.

c) **False**: the base $2>1$ and $\sqrt3\approx1.732>1.7$, so $2^{\sqrt3}>2^{1.7}$.

d) **True**: the base $\dfrac12<1$ and $\sqrt5\approx2.236>2$, so $\left(\dfrac12\right)^{\sqrt5}<\left(\dfrac12\right)^2$.

**Answer.** a) False; b) True; c) False; d) True.
:::

:::exercise
Work out the value of $\left(3^{\sqrt5-1}\right)^{\sqrt5+1}$.

::hint
**What you need:** $(a^{\alpha})^{\beta}=a^{\alpha\beta}$ and $(x-1)(x+1)=x^2-1$.

**Steps:**
1. Multiply the two exponents.
2. Work out $3$ to that power.

::solution
We have $\left(3^{\sqrt5-1}\right)^{\sqrt5+1}=3^{(\sqrt5-1)(\sqrt5+1)}=3^{5-1}=3^4=81$.

So the value of the expression is $81$.

**Answer.** $81$.
:::

:::exercise
Revision of surds from earlier years. Work out $\left(\sqrt5+2\right)^{2026}\left(\sqrt5-2\right)^{2026}$.

::hint
**What you need:** $a^{\alpha}b^{\alpha}=(ab)^{\alpha}$ and the identity $(x+y)(x-y)=x^2-y^2$.

**Steps:**
1. Combine the two powers with the same exponent.
2. Work out the product $(\sqrt5+2)(\sqrt5-2)$.

::solution
We have $\left(\sqrt5+2\right)^{2026}\left(\sqrt5-2\right)^{2026}=\left[\left(\sqrt5+2\right)\left(\sqrt5-2\right)\right]^{2026}$. Since $\left(\sqrt5+2\right)\left(\sqrt5-2\right)=5-4=1$, the expression equals $1^{2026}=1$.

So the value of the expression is $1$.

**Answer.** $1$.
:::

:::exercise Challenge
Let $x>0$ satisfy $x^{1/2}+x^{-1/2}=3$. Work out $A=x+x^{-1}$ and $B=x^{3/2}+x^{-3/2}$.

::hint
**What you need:** $(u+v)^2=u^2+2uv+v^2$ and $(u+v)^3=u^3+v^3+3uv(u+v)$.

**Steps:**
1. Let $u=x^{1/2}$, $v=x^{-1/2}$; find $uv$.
2. Square and then cube the sum $u+v$.

::solution
Let $u=x^{1/2}$, $v=x^{-1/2}$. We have $uv=1$ and $u+v=3$.

Squaring both sides: $9=u^2+2uv+v^2=x+2+x^{-1}$, so $A=x+x^{-1}=7$.

Cubing both sides: $27=u^3+v^3+3uv(u+v)=B+3\cdot1\cdot3$, so $B=27-9=18$.

So $A=7$ and $B=18$.

**Answer.** $A=7$; $B=18$.
:::

## Mini test

:::quiz
::mc TH
The value of $\sqrt[3]{-27}+\sqrt[4]{16}$ is
A. $-1$.
B. $5$.
C. $-5$.
D. $1$.
::key A
We have $\sqrt[3]{-27}=-3$ and $\sqrt[4]{16}=2$, so the sum is $-1$. Option B drops the sign of the cube root, C takes both roots as negative, and D changes the sign of the result.

::mc TH
The value of $8^{-2/3}$ is
A. $\dfrac{1}{64}$.
B. $\dfrac14$.
C. $4$.
D. $-4$.
::key B
$8^{-2/3}=\left(2^3\right)^{-2/3}=2^{-2}=\dfrac14$. Option A works out $8^{-2}$, C ignores the sign of the exponent, and D thinks a negative exponent gives a negative value.

::mc TH
For $a>0$, the expression $\left(a^{\sqrt3+1}\right)^{\sqrt3-1}$ equals
A. $a^{2\sqrt3}$.
B. $a^{4}$.
C. $a^{2}$.
D. $a^{3}$.
::key C
We multiply the exponents: $(\sqrt3+1)(\sqrt3-1)=3-1=2$. Option A adds the exponents, B uses $3+1$ instead of $3-1$, and D forgets to subtract $1^2$.

::mc TH
Which statement is correct?
A. $\left(\dfrac13\right)^{2.5}<\left(\dfrac13\right)^{3}$.
B. $2^{\sqrt3}<2^{1.7}$.
C. $3^{-\sqrt2}>3^{-1.4}$.
D. $\left(\dfrac12\right)^{\sqrt3}<\left(\dfrac12\right)^{1.7}$.
::key D
The base $\dfrac12<1$ and $\sqrt3>1.7$, so $\left(\dfrac12\right)^{\sqrt3}<\left(\dfrac12\right)^{1.7}$. Option B forgets that $\sqrt3>1.7$, C is wrong because $-\sqrt2<-1.4$, and A forgets to reverse the inequality for a base less than $1$.

::tf NB TH TH TH
Let $a>0$, $b>0$. Decide whether each statement is true or false.
a) $(a+b)^{1/2}=a^{1/2}+b^{1/2}$.
b) $a^{1/2}\cdot a^{1/3}=a^{1/6}$.
c) $a^{3/2}=a\sqrt{a}$.
d) $\dfrac{a^{5/3}}{a^{2/3}}=a$.
::key F F T T
a) False: for example $a=4$, $b=9$ gives $\sqrt{13}\neq5$. b) False: adding the exponents gives $\dfrac12+\dfrac13=\dfrac56$, that is $a^{5/6}$. c) True: $a^{3/2}=a^{1+1/2}=a\cdot a^{1/2}$. d) True: $a^{5/3-2/3}=a^1$.

::sa TH
Suppose the number of bacteria in a culture is $N(t)=200\cdot2^{t/2}$, where $t$ is the number of hours. Work out the number of bacteria after $5$ hours (round to the nearest whole number).
::key 1131
$N(5)=200\cdot2^{2.5}\approx200\cdot5.657\approx1131$.

::sa VD
Work out the value of $81^{3/4}\cdot16^{-1/2}$ (give your answer as a decimal).
::key 6.75
$81^{3/4}=\left(3^4\right)^{3/4}=27$ and $16^{-1/2}=\dfrac14$, so the product is $\dfrac{27}{4}=6.75$.
:::
