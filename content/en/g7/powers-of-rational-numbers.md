---
title: Natural-number powers of a rational number
description: Understand the n-th power of a rational number and use the rules for products, quotients, powers of powers, of products and of quotients to calculate quickly.
minutes: 35
---

:::goals
- State the definition of a natural-number power of a rational number, and know the base, the exponent and the conventions $x^1=x$, $x^0=1$.
- Tell $(-2)^2$ apart from $-2^2$, and write $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$ correctly, on both the numerator and the denominator.
- Use the rules for the product and quotient of powers with the same base, a power of a power, and a power of a product or a quotient.
- Solve real-life problems about volume, area and compound interest.
:::

A water tank is a cube with edge $\dfrac32$ m. Its volume is a product of three equal factors, and the builder simply writes $\left(\dfrac32\right)^3$ m³. How many litres of water does the tank hold? If a second tank is built with an edge twice as long, how many times more does it hold? The second question sounds as if we must start again, but we will see that we do not.

In Year 6 you wrote $2\cdot2\cdot2$ as $2^3$ with a natural number as the base. Now the base may be any rational number, negative numbers and fractions included. Two places cause most of the mistakes, the signs and the fractions, so we will go slowly there.

## Powers of a rational number

Let us try a fraction first:

$$\left(\dfrac23\right)^2=\dfrac23\cdot\dfrac23=\dfrac{2\cdot2}{3\cdot3}=\dfrac{4}{9}=\dfrac{2^2}{3^2}.$$

Both the numerator and the denominator are raised to the power. Now a negative base: here are the first powers of $-2$.

$$(-2)^1=-2,\quad (-2)^2=4,\quad (-2)^3=-8,\quad (-2)^4=16.$$

The sign alternates. Why? Two negative factors multiply to a positive number, so we can pair up the negative factors: with an even number of factors every one is paired and the result is positive; with an odd number one is left over and the result is negative.

:::definition Natural-number power
The $n$-th power of a rational number $x$, written $x^n$, is the product of $n$ factors equal to $x$ ($n$ is a natural number greater than $1$):

$$x^n=\underbrace{x\cdot x\cdots x}_{n\ \text{factors}}.$$

We call $x$ the **base** and $n$ the **exponent** (or index). By convention $x^1=x$ and $x^0=1$ (for $x\neq0$).

For $x=\dfrac ab$ ($b\neq0$) we have $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$.
:::

:::note The sign of a power
A positive base always gives a positive power. A negative base gives a positive power when the exponent is even and a negative power when the exponent is odd.
:::

Why $x^0=1$? Because, by the rule in the next section, the quotient $x^n:x^n$ must equal $1$, and it must also equal $x^{n-n}=x^0$. The expression $0^0$ has no meaning, which is why we always write $x\neq0$.

## Product and quotient of powers with the same base

Write out the factors:

$$2^3\cdot2^4=(2\cdot2\cdot2)\cdot(2\cdot2\cdot2\cdot2)=2^7,\qquad \dfrac{5^6}{5^2}=\dfrac{5\cdot5\cdot5\cdot5\cdot5\cdot5}{5\cdot5}=5^4.$$

Multiplying puts more factors together, so the exponents add; dividing cancels factors, so the exponents subtract.

:::theorem Product and quotient of powers with the same base
For a rational number $x$ and natural numbers $m$, $n$:

- $x^m\cdot x^n=x^{m+n}$;
- $x^m:x^n=x^{m-n}$ ($x\neq0$, $m\geq n$).
:::

## A power of a power, of a product, of a quotient

Try $\left(2^3\right)^2=2^3\cdot2^3=2^6$: there are $2$ groups of $3$ factors each, so $3\cdot2=6$ factors in all. For a product, $(2\cdot3)^2=(2\cdot3)(2\cdot3)=2\cdot2\cdot3\cdot3=2^2\cdot3^2$: we only change the order of the factors.

:::theorem A power of a power, of a product, of a quotient
For rational numbers $x$, $y$ and natural numbers $m$, $n$:

- $\left(x^m\right)^n=x^{m\cdot n}$;
- $(x\cdot y)^n=x^n\cdot y^n$;
- $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$ ($y\neq0$).
:::

Read these equalities in both directions. Right to left gives a quick way to calculate, because $x^n\cdot y^n=(xy)^n$ gathers two powers with the same exponent into one.

:::example Calculating powers of rational numbers
Calculate:

a) $\left(-\dfrac34\right)^2$;

b) $\left(-\dfrac23\right)^3$;

c) $(-0.3)^2$.

**Solution.** We use the definition, remembering that a negative base gives a positive result for an even exponent and a negative result for an odd exponent.

a) We have $\left(-\dfrac34\right)^2=\dfrac{(-3)^2}{4^2}=\dfrac{9}{16}$.

b) We have $\left(-\dfrac23\right)^3=\dfrac{(-2)^3}{3^3}=\dfrac{-8}{27}=-\dfrac{8}{27}$.

c) We have $(-0.3)^2=(-0.3)\cdot(-0.3)=0.09$.

So the results are $\dfrac9{16}$, $-\dfrac8{27}$ and $0.09$.

**Answer.** a) $\dfrac9{16}$. b) $-\dfrac8{27}$. c) $0.09$.
:::

Now we use the first two rules to write an expression more briefly.

:::example Writing as a single power
Write each expression as a single power:

a) $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^5$;

b) $(-3)^7:(-3)^4$;

c) $\left[\left(\dfrac23\right)^2\right]^3$.

**Solution.**

a) Both powers have the same base $\dfrac12$, so we keep the base and add the exponents: $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^5=\left(\dfrac12\right)^{3+5}=\left(\dfrac12\right)^8$.

b) Both powers have the same base $-3$, so we keep the base and subtract the exponents: $(-3)^7:(-3)^4=(-3)^{7-4}=(-3)^3$.

c) We multiply the two exponents: $\left[\left(\dfrac23\right)^2\right]^3=\left(\dfrac23\right)^{2\cdot3}=\left(\dfrac23\right)^6$.

So we get $\left(\dfrac12\right)^8$, $(-3)^3$ and $\left(\dfrac23\right)^6$.

**Answer.** a) $\left(\dfrac12\right)^8$. b) $(-3)^3$. c) $\left(\dfrac23\right)^6$.
:::

Next comes the "right to left" direction of the rule for a power of a product, which often gives a very short solution.

:::example Quick calculation
Calculate:

a) $(0.125)^3\cdot8^3$;

b) $\dfrac{12^4}{6^4}$;

c) $\left(\dfrac35\right)^3\cdot\left(\dfrac{10}3\right)^3$.

**Solution.** In all three parts the two powers have the same exponent, so we combine them with $x^n\cdot y^n=(xy)^n$ or $\dfrac{x^n}{y^n}=\left(\dfrac xy\right)^n$.

a) We have $(0.125)^3\cdot8^3=(0.125\cdot8)^3=1^3=1$.

b) We have $\dfrac{12^4}{6^4}=\left(\dfrac{12}{6}\right)^4=2^4=16$.

c) We have $\left(\dfrac35\right)^3\cdot\left(\dfrac{10}3\right)^3=\left(\dfrac35\cdot\dfrac{10}3\right)^3=2^3=8$.

So the results are $1$, $16$ and $8$.

**Answer.** a) $1$. b) $16$. c) $8$.
:::

Some powers are far too large for a calculator, yet we can still compare them if we bring them to the same exponent.

:::example Comparing two powers
Compare $2^{300}$ and $3^{200}$.

**Solution.** The exponents $300$ and $200$ are both multiples of $100$, so we write both numbers as $100$-th powers.

We have $2^{300}=\left(2^3\right)^{100}=8^{100}$ and $3^{200}=\left(3^2\right)^{100}=9^{100}$.

Since $8<9$, we get $8^{100}<9^{100}$ (for positive numbers with the same exponent, the larger base gives the larger power).

Hence $2^{300}<3^{200}$.

So $2^{300}<3^{200}$.

**Answer.** $2^{300}<3^{200}$.
:::

Finally, we go back to the tank from the start and answer it in four steps.

:::example The volume of a tank
A water tank is a cube with edge $\dfrac32$ m.

a) Find the volume of the tank in cubic metres, then convert it to litres ($1$ m³ $=1000$ litres).

b) If another tank is built with an edge twice as long, how many times larger is its volume?

**Solution.**

*Understand.* The tank is a cube of edge $a=\dfrac32$ m. We need $V$ in litres, and the ratio of the two volumes when the edge is doubled.

*Plan.* The volume of a cube of edge $a$ is $V=a^3$. In part b the new edge is $2a$, so the new volume is $(2a)^3$; we use the power of a product.

*Solve.*

a) We have $V=\left(\dfrac32\right)^3=\dfrac{3^3}{2^3}=\dfrac{27}{8}$ (m³). In litres: $\dfrac{27}{8}\cdot1000=3375$ (litres).

b) The new edge is $2\cdot\dfrac32=3$ m, so the new volume is $3^3=27$ m³. The ratio of the volumes is $27:\dfrac{27}8=8$.

So the tank holds $3375$ litres, and the tank with twice the edge holds $8$ times as much.

*Look back.* We also have $(2a)^3=2^3\cdot a^3=8a^3$, so the factor $8$ does not depend on $a$. What if the edge were three times as long?

**Answer.** $3375$ litres; $8$ times as much.
:::

Compound interest is where powers appear most often in everyday life.

:::example Compound interest
Suppose a bank accepts deposits for a term of $1$ year at an interest rate of $5\%$ per year, and at the end of each term the interest is added to the deposit for the next term. Mrs Hà deposits $80$ million đồng and leaves it for $3$ years. How many million đồng does she have after $3$ years?

**Solution.** Let $T$ (million đồng) be the amount after $3$ years.

Each year the amount is multiplied by $1+\dfrac{5}{100}=\dfrac{21}{20}$.

So after $3$ years we have $T=80\cdot\left(\dfrac{21}{20}\right)^3=80\cdot\dfrac{21^3}{20^3}=80\cdot\dfrac{9261}{8000}=\dfrac{9261}{100}=92.61$.

So after $3$ years Mrs Hà has $92.61$ million đồng.

**Answer.** $92.61$ million đồng.
:::

:::warning Common mistakes
- **Sign errors.** Wrong: $(-2)^2=-4$, or $-2^2=4$. Why it is wrong: $(-2)^2$ squares the whole number $-2$, while $-2^2$ squares only $2$ and then takes the opposite. Right: $(-2)^2=4$ and $-2^2=-4$.
- **Raising only the numerator (or only the denominator).** Wrong: $\left(\dfrac23\right)^2=\dfrac{2^2}{3}=\dfrac43$. Why it is wrong: the square of a fraction is the product of two equal fractions, so both the numerator and the denominator are multiplied twice. Right: $\left(\dfrac23\right)^2=\dfrac{2^2}{3^2}=\dfrac49$.
- **Mixing up adding and multiplying exponents.** Wrong: $2^3\cdot2^4=2^{12}$, or $\left(2^3\right)^4=2^7$. Why it is wrong: multiplying powers with the same base adds the exponents; a power of a power multiplies them. Right: $2^3\cdot2^4=2^7$ and $\left(2^3\right)^4=2^{12}$.
- **Splitting a power of a sum.** Wrong: $(2+3)^2=2^2+3^2=13$. Why it is wrong: the rule is only for products and quotients. Right: $(2+3)^2=5^2=25$.
:::

**Connections.** This lesson builds on powers of natural numbers from Year 6 and on arithmetic with rational numbers. The rules here will come back when we study real numbers and square roots, and in science when we write very large or very small numbers.

## Key terms

:::terms
- power | lũy thừa
- base | cơ số
- exponent (index) | số mũ
- rational number | số hữu tỉ
- square | bình phương
- cube | lập phương
- product | tích
- quotient | thương
- compound interest | lãi kép
- volume | thể tích
:::

## Summary

- $x^n$ is the product of $n$ factors $x$; $x^1=x$, $x^0=1$ ($x\neq0$); $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$.
- Negative base: an even exponent gives a positive result and an odd exponent a negative one; $(-2)^2=4$ but $-2^2=-4$.
- $x^m\cdot x^n=x^{m+n}$ and $x^m:x^n=x^{m-n}$: keep the base, add or subtract the exponents.
- $\left(x^m\right)^n=x^{mn}$, $(xy)^n=x^ny^n$, $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$.

So the tank with edge $\dfrac32$ m holds $3375$ litres, and doubling the edge multiplies the volume by $2^3=8$. Work through the exercises and compare with the solutions to check that signs and fractions are secure.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Calculate:

a) $\left(\dfrac35\right)^2$;

b) $\left(-\dfrac12\right)^5$;

c) $(-0.4)^2$;

d) $(-1)^{2027}$.

::hint
**What you need:** $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$; a negative base gives a positive result for an even exponent and a negative result for an odd exponent.

**Steps:**
1. In parts a and b, raise both the numerator and the denominator to the power.
2. In part d, is the exponent $2027$ even or odd?

::solution
a) We have $\left(\dfrac35\right)^2=\dfrac{3^2}{5^2}=\dfrac9{25}$.

b) The exponent $5$ is odd, so the result is negative: $\left(-\dfrac12\right)^5=\dfrac{(-1)^5}{2^5}=-\dfrac1{32}$.

c) The exponent $2$ is even, so the result is positive: $(-0.4)^2=0.4\cdot0.4=0.16$.

d) The exponent $2027$ is odd, so $(-1)^{2027}=-1$.

So the results are $\dfrac9{25}$, $-\dfrac1{32}$, $0.16$ and $-1$.

**Answer.** a) $\dfrac9{25}$. b) $-\dfrac1{32}$. c) $0.16$. d) $-1$.
:::

:::exercise
Calculate and compare:

a) $(-3)^2$;

b) $-3^2$;

c) $\left(-\dfrac23\right)^2$;

d) $-\left(\dfrac23\right)^2$.

::hint
**What you need:** $(-a)^2$ squares the whole number $-a$; $-a^2$ is the opposite of $a^2$.

**Steps:**
1. Parts a and c: the minus sign is inside the bracket, part of the base.
2. Parts b and d: square first, then take the opposite.

::solution
a) We have $(-3)^2=(-3)\cdot(-3)=9$.

b) We have $-3^2=-(3\cdot3)=-9$.

c) We have $\left(-\dfrac23\right)^2=\dfrac{(-2)^2}{3^2}=\dfrac49$.

d) We have $-\left(\dfrac23\right)^2=-\dfrac{2^2}{3^2}=-\dfrac49$.

So in each pair the two values are opposites, because the minus sign is inside the base in parts a and c, and outside the power in parts b and d.

**Answer.** a) $9$. b) $-9$. c) $\dfrac49$. d) $-\dfrac49$.
:::

:::exercise
Write each expression as a single power:

a) $\left(\dfrac34\right)^2\cdot\left(\dfrac34\right)^3$;

b) $(-0.5)^6:(-0.5)^2$;

c) $\left[\left(-\dfrac25\right)^3\right]^2$;

d) $2^3\cdot2^5:2^4$ (then find its value).

::hint
**What you need:** $x^m\cdot x^n=x^{m+n}$; $x^m:x^n=x^{m-n}$; $\left(x^m\right)^n=x^{mn}$.

**Steps:**
1. Identify the base in each part.
2. Part d: work from left to right, multiplying first and then dividing.

::solution
a) Same base $\dfrac34$: $\left(\dfrac34\right)^2\cdot\left(\dfrac34\right)^3=\left(\dfrac34\right)^{2+3}=\left(\dfrac34\right)^5$.

b) Same base $-0.5$: $(-0.5)^6:(-0.5)^2=(-0.5)^{6-2}=(-0.5)^4$.

c) We multiply the exponents: $\left[\left(-\dfrac25\right)^3\right]^2=\left(-\dfrac25\right)^{3\cdot2}=\left(-\dfrac25\right)^6$.

d) We have $2^3\cdot2^5=2^8$, then $2^8:2^4=2^{8-4}=2^4=16$.

So the results are $\left(\dfrac34\right)^5$, $(-0.5)^4$, $\left(-\dfrac25\right)^6$ and $2^4=16$.

**Answer.** a) $\left(\dfrac34\right)^5$. b) $(-0.5)^4$. c) $\left(-\dfrac25\right)^6$. d) $2^4=16$.
:::

:::exercise
Calculate quickly:

a) $(0.25)^3\cdot4^3$;

b) $15^5:3^5$;

c) $\left(\dfrac12\right)^3\cdot6^3$.

::hint
**What you need:** $x^n\cdot y^n=(xy)^n$ and $x^n:y^n=\left(\dfrac xy\right)^n$ when the two powers have the same exponent.

**Steps:**
1. Part a: what is $0.25\cdot4$?
2. Part b: what is $15:3$?
3. Part c: what is $\dfrac12\cdot6$?

::solution
a) We have $(0.25)^3\cdot4^3=(0.25\cdot4)^3=1^3=1$.

b) We have $15^5:3^5=(15:3)^5=5^5=3125$.

c) We have $\left(\dfrac12\right)^3\cdot6^3=\left(\dfrac12\cdot6\right)^3=3^3=27$.

So the results are $1$, $3125$ and $27$.

**Answer.** a) $1$. b) $3125$. c) $27$.
:::

:::exercise
Find the rational number $x$ (or the natural number $n$) such that:

a) $x^2=\dfrac{25}{36}$;

b) $x^3=-\dfrac{27}{64}$;

c) $\left(-\dfrac23\right)^n=\dfrac{16}{81}$.

::hint
**What you need:** an even power of two opposite numbers gives the same result; an odd power of a negative number is negative.

**Steps:**
1. Part a: $25=5^2$ and $36=6^2$; two numbers work.
2. Part b: $27=3^3$ and $64=4^3$; the answer is negative.
3. Part c: write out $\left(-\dfrac23\right)^1$, $\left(-\dfrac23\right)^2$, … until you reach $\dfrac{16}{81}$.

::solution
a) We have $\dfrac{25}{36}=\left(\dfrac56\right)^2=\left(-\dfrac56\right)^2$. So $x=\dfrac56$ or $x=-\dfrac56$.

b) We have $-\dfrac{27}{64}=\left(-\dfrac34\right)^3$. So $x=-\dfrac34$.

c) We have $\left(-\dfrac23\right)^1=-\dfrac23$, $\left(-\dfrac23\right)^2=\dfrac49$, $\left(-\dfrac23\right)^3=-\dfrac8{27}$ and $\left(-\dfrac23\right)^4=\dfrac{16}{81}$. The later powers have ever smaller absolute value, so $n=4$ is the only solution. So $n=4$.

**Answer.** a) $x=\pm\dfrac56$. b) $x=-\dfrac34$. c) $n=4$.
:::

:::exercise
Compare:

a) $2^{500}$ and $5^{200}$;

b) $\left(\dfrac13\right)^{20}$ and $\left(\dfrac19\right)^{10}$.

::hint
**What you need:** bring both numbers to the same exponent or the same base using $\left(x^m\right)^n=x^{mn}$.

**Steps:**
1. Part a: $500$ and $200$ are both multiples of $100$; write $2^{500}=\left(2^5\right)^{100}$.
2. Part b: write $\dfrac19=\left(\dfrac13\right)^2$.

::solution
a) We have $2^{500}=\left(2^5\right)^{100}=32^{100}$ and $5^{200}=\left(5^2\right)^{100}=25^{100}$. Since $32>25$, we get $32^{100}>25^{100}$. So $2^{500}>5^{200}$.

b) We have $\dfrac19=\left(\dfrac13\right)^2$, so $\left(\dfrac19\right)^{10}=\left[\left(\dfrac13\right)^2\right]^{10}=\left(\dfrac13\right)^{20}$. So the two numbers are equal.

**Answer.** a) $2^{500}>5^{200}$. b) The two numbers are equal.
:::

:::exercise
A plastic bin is a cube with edge $0.4$ m.

a) How many litres of water can the bin hold at most? ($1$ m³ $=1000$ litres)

b) If the edge is halved (to $0.2$ m), how many litres can the bin hold at most?

::hint
**What you need:** the volume of a cube of edge $a$ is $a^3$; $1$ m³ $=1000$ litres.

**Steps:**
1. Calculate $(0.4)^3$ in cubic metres.
2. Convert to litres by multiplying by $1000$.
3. Do the same for an edge of $0.2$ m, then compare with part a.

::solution
a) The volume of the bin is $(0.4)^3=0.4\cdot0.4\cdot0.4=0.064$ (m³). In litres: $0.064\cdot1000=64$ (litres).

b) With edge $0.2$ m the volume is $(0.2)^3=0.008$ (m³), that is $0.008\cdot1000=8$ (litres).

So the bin with edge $0.4$ m holds at most $64$ litres and the bin with edge $0.2$ m holds at most $8$ litres, which is $8$ times less because $\left(\dfrac12\right)^3=\dfrac18$.

**Answer.** a) $64$ litres. b) $8$ litres.
:::

:::exercise
Suppose a bank accepts deposits for a term of $1$ year at an interest rate of $4\%$ per year, and at the end of each term the interest is added to the deposit for the next term. Mr Hùng deposits $50$ million đồng and leaves it for $2$ years. How many million đồng does he have after $2$ years?

::hint
**What you need:** each year the amount is multiplied by $1+\dfrac{4}{100}$; after $n$ years the deposit is multiplied by the $n$-th power of that number.

**Steps:**
1. Write $1+\dfrac4{100}$ as the fraction $\dfrac{26}{25}$ in its simplest form.
2. The amount after $2$ years is $50\cdot\left(\dfrac{26}{25}\right)^2$.

::solution
Let $T$ (million đồng) be the amount after $2$ years.

Each year the amount is multiplied by $1+\dfrac4{100}=\dfrac{26}{25}$.

So $T=50\cdot\left(\dfrac{26}{25}\right)^2=50\cdot\dfrac{676}{625}=\dfrac{1352}{25}=54.08$.

So after $2$ years Mr Hùng has $54.08$ million đồng.

**Answer.** $54.08$ million đồng.
:::

:::exercise
Find the value of $A=\left(-\dfrac12\right)^3+\left(\dfrac23\right)^2$.

::hint
**What you need:** find each power first, then add the two rational numbers by writing them over a common denominator.

**Steps:**
1. $\left(-\dfrac12\right)^3=-\dfrac18$ and $\left(\dfrac23\right)^2=\dfrac49$.
2. The common denominator of $8$ and $9$ is $72$.

::solution
We have $\left(-\dfrac12\right)^3=\dfrac{(-1)^3}{2^3}=-\dfrac18$ and $\left(\dfrac23\right)^2=\dfrac{2^2}{3^2}=\dfrac49$.

Writing both fractions over the common denominator $72$:

$$A=-\dfrac18+\dfrac49=-\dfrac{9}{72}+\dfrac{32}{72}=\dfrac{23}{72}.$$

So $A=\dfrac{23}{72}$.

**Answer.** $A=\dfrac{23}{72}$.
:::

:::exercise Challenge
a) Find the natural number $n$ such that $27^n=3^{12}$.

b) Prove that $7^6+7^5-7^4$ is divisible by $11$.

::hint
**What you need:** $27=3^3$; if two powers with the same base $3$ are equal, their exponents are equal; take out the common factor $7^4$.

**Steps:**
1. a) Write $27^n=\left(3^3\right)^n$ and compare the exponents.
2. b) Take $7^4$ outside the bracket and calculate what is left inside.

::solution
a) We have $27^n=\left(3^3\right)^n=3^{3n}$. So $3^{3n}=3^{12}$, which gives $3n=12$, that is $n=4$.

b) We have $7^6+7^5-7^4=7^4\cdot\left(7^2+7-1\right)=7^4\cdot(49+7-1)=7^4\cdot55$. Since $55=11\cdot5$, the number $7^4\cdot55$ is divisible by $11$. So $7^6+7^5-7^4$ is divisible by $11$.

**Answer.** a) $n=4$. b) Proved.
:::

## Mini test

:::quiz
::mc TH
The value of $\left(-\dfrac23\right)^3$ is
A. $\dfrac{8}{27}$.
B. $-\dfrac{8}{27}$.
C. $-\dfrac{8}{9}$.
D. $-\dfrac{6}{27}$.
::key B
The base is negative and the exponent is odd, so the result is negative; both numerator and denominator are raised to the power: $\dfrac{(-2)^3}{3^3}=-\dfrac8{27}$. A forgets the sign, C raises only the numerator, D uses the product $2\cdot3$.

::mc NB
Written as a single power, $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^4$ is
A. $\left(\dfrac14\right)^7$.
B. $\left(\dfrac12\right)^{12}$.
C. $\left(\dfrac12\right)^7$.
D. $\left(\dfrac12\right)^1$.
::key C
The bases are the same, so we keep the base and add the exponents: $3+4=7$. B multiplies the exponents, A multiplies the bases, D subtracts the exponents.

::mc NB
The value of $\left(\dfrac35\right)^2$ is
A. $\dfrac95$.
B. $\dfrac65$.
C. $\dfrac9{10}$.
D. $\dfrac9{25}$.
::key D
Both numerator and denominator are squared: $\dfrac{3^2}{5^2}=\dfrac9{25}$. A squares only the numerator, B multiplies the numerator by $2$, C divides $3^2$ by $5\cdot2$.

::mc NB
Which of the following equals $\left(2^3\right)^4$?
A. $2^{12}$.
B. $2^7$.
C. $2^{81}$.
D. $8^7$.
::key A
A power of a power multiplies the exponents: $3\cdot4=12$. A adds the exponents, C uses $3^4$ as the exponent, D adds exponents after changing the base.

::tf TH NB NB NB
Decide whether each statement is true or false.
a) $-2^2=4$.
b) $\left(\dfrac23\right)^3=\dfrac8{27}$.
c) $5^6:5^2=5^4$.
d) $\left(3^2\right)^3=3^5$.
::key F T T F
a) False: $-2^2=-4$, whereas $(-2)^2=4$. b) True: $\dfrac{2^3}{3^3}=\dfrac8{27}$. c) True: subtract the exponents, $6-2=4$. d) False: multiply the exponents, $\left(3^2\right)^3=3^6$.

::sa VD
Calculate $(0.5)^3\cdot8^3$.
::key 64
We have $(0.5)^3\cdot8^3=(0.5\cdot8)^3=4^3=64$.

::sa VD
A box is a cube with edge $0.3$ m. How many litres of water can it hold at most? ($1$ m³ $=1000$ litres)
::key 27
The volume is $(0.3)^3=0.027$ m³, which is $0.027\cdot1000=27$ litres.
:::
