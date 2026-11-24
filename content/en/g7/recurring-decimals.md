---
title: Introducing recurring decimals. Irrational numbers. Principal square roots
description: Tell terminating from recurring decimals using the denominator, meet irrational numbers and square roots, with estimating and rounding in real contexts.
minutes: 45
---

:::goals
- Decide whether a fraction gives a terminating or a recurring decimal, using the denominator of the fraction in its simplest form.
- Write fractions as decimals, identify the repeating block and use recurring-decimal notation.
- Recognise an irrational number as a non-terminating, non-recurring decimal.
- Understand and calculate principal square roots, and estimate and round them with a calculator.
:::

You cut a $1$ m piece of string into $3$ equal parts, each $\dfrac13$ m long. On a calculator the display shows $0.3333333\ldots$ and stops only because it runs out of room. Do those $3$s ever end? Yet $\dfrac14$ stops straight away at $0.25$. Why do the two fractions behave so differently?

There is a second question. A square wooden board has area $2$ m². How long is its side? You will see that no fraction gives the exact answer, and that is when we need a new kind of number.

## Terminating and recurring decimals

Let us do some divisions to change fractions into decimals:

$$\dfrac34=0.75,\qquad \dfrac7{25}=0.28,\qquad \dfrac13=0.333\ldots,\qquad \dfrac56=0.8333\ldots,\qquad \dfrac17=0.142857142857\ldots$$

The first two stop. The last three go on forever, but a group of digits repeats again and again.

:::definition Terminating and recurring decimals
- A decimal with a finite number of digits after the decimal point is a **terminating decimal**, such as $0.75$.
- A decimal with infinitely many digits after the decimal point, in which a group of digits repeats for ever, is a **recurring decimal**. The group of digits that repeats is called the **repeating block** (or period).

We write a bar over the repeating block: $\dfrac13=0.\overline{3}$, $\dfrac56=0.8\overline{3}$, $\dfrac17=0.\overline{142857}$. (Vietnamese books put the block in brackets instead, as in $0,(3)$.)
:::

Can we tell in advance which kind of decimal a fraction gives, without dividing? The answer lies in the denominator.

:::theorem How to recognise the type
Let $\dfrac ab$ be a fraction in its simplest form with $b>0$.
- If $b$ has no prime factor other than $2$ and $5$, then $\dfrac ab$ is a terminating decimal.
- If $b$ has a prime factor other than $2$ and $5$, then $\dfrac ab$ is a recurring decimal.
:::

**Why?** Suppose $b=2^m\cdot5^n$. We multiply numerator and denominator by a power of $2$ or of $5$ to make the denominator $10^k$. For example $\dfrac7{20}=\dfrac{7\cdot5}{20\cdot5}=\dfrac{35}{100}=0.35$, and a fraction with denominator $10^k$ is a terminating decimal. If the denominator has another prime factor, say $3$, then a fraction in its simplest form cannot be rewritten with denominator $10^k$, so the division never stops. Moreover, when we divide $a$ by $b$, every remainder is less than $b$, so after at most $b$ steps a remainder must repeat, and from there the digits repeat too.

**Important:** always simplify the fraction first, then look at the denominator. For example, $\dfrac9{15}$ has denominator $15$, divisible by $3$, but $\dfrac9{15}=\dfrac35$ has denominator $5$, so it gives the terminating decimal $0.6$.

:::example Recognising the type of decimal
Without dividing, say which fractions are terminating decimals and which are recurring decimals:

a) $\dfrac7{20}$.

b) $\dfrac5{12}$.

c) $\dfrac9{15}$.

d) $\dfrac{11}8$.

**Solution.** We simplify each fraction, then factorise the denominator into primes.

a) The fraction $\dfrac7{20}$ is in its simplest form and $20=2^2\cdot5$ has only the prime factors $2$ and $5$, so it is a terminating decimal ($0.35$).

b) The fraction $\dfrac5{12}$ is in its simplest form and $12=2^2\cdot3$ has the prime factor $3$, so it is a recurring decimal ($0.41\overline{6}$).

c) We have $\dfrac9{15}=\dfrac35$, and the denominator $5$ has only the prime factor $5$, so it is a terminating decimal ($0.6$).

d) The fraction $\dfrac{11}8$ is in its simplest form and $8=2^3$, so it is a terminating decimal ($1.375$).

So the terminating ones are a), c), d); the recurring one is b).

**Answer.** a) terminating; b) recurring; c) terminating; d) terminating.
:::

:::example Writing fractions as decimals
Write each fraction as a decimal and state the repeating block (if there is one):

a) $\dfrac23$.

b) $\dfrac7{11}$.

c) $\dfrac16$.

d) $\dfrac57$.

**Solution.** We divide the numerator by the denominator until a remainder repeats.

a) $2\div3=0.666\ldots$, and the remainder $2$ repeats at once. So $\dfrac23=0.\overline{6}$, with repeating block $6$.

b) $7\div11=0.6363\ldots$. So $\dfrac7{11}=0.\overline{63}$, with repeating block $63$.

c) $1\div6=0.1666\ldots$. The digit $1$ does not repeat; only $6$ does. So $\dfrac16=0.1\overline{6}$, with repeating block $6$.

d) $5\div7=0.714285714285\ldots$. So $\dfrac57=0.\overline{714285}$, with repeating block $714285$ ($6$ digits).

**Answer.** a) $0.\overline{6}$; b) $0.\overline{63}$; c) $0.1\overline{6}$; d) $0.\overline{714285}$.
:::

:::example Sharing rice among households
Suppose $25$ kg of rice is shared equally among $6$ households. How many kilograms does each household get? Give the answer as a decimal and round to $2$ decimal places.

**Solution.**

*Understand.* Each household gets $25\div6$ kg. We must write it as a decimal and round to two decimal places.

*Plan.* Divide $25$ by $6$ to get a decimal, identify the repeating block, then round.

*Solve.* We have $25\div6=4.1666\ldots=4.1\overline{6}$. To round to $2$ decimal places, the third decimal digit is $6$, which is more than $5$, so we round up and get $4.17$.

*Look back.* The denominator $6=2\cdot3$ has the prime factor $3$, which agrees with the answer being a recurring decimal. If each household were weighed exactly $4.17$ kg, the $6$ households would need $6\cdot4.17=25.02$ kg, slightly more than $25$ kg, because we rounded up.

So each household gets $\dfrac{25}6=4.1\overline{6}\approx4.17$ kg.

**Answer.** $\approx4.17$ kg.
:::

## Irrational numbers

What if a decimal goes on for ever but no group of digits repeats for ever? Take the number $0.1010010001\ldots$, where after each digit $1$ we write one more $0$ than last time. This number neither stops nor recurs.

:::definition Irrational numbers
An **irrational number** is a number that can be written as a non-terminating, non-recurring decimal. The set of irrational numbers is written $\mathbb{I}$.
:::

Two famous examples are $\sqrt2=1.41421356\ldots$ and $\pi=3.14159265\ldots$ (the ratio of the circumference of a circle to its diameter). We accept that both are irrational, so neither can be written as a fraction $\dfrac ab$ with $a,b$ integers. Rational numbers ($\dfrac ab$) and irrational numbers never overlap: a terminating or recurring decimal is rational, and a non-terminating, non-recurring decimal is irrational.

:::example Rational or irrational?
Is each number rational or irrational?

a) $0.25$.

b) $0.\overline{7}$.

c) $0.1010010001\ldots$ (after each digit $1$, the number of $0$s goes up by one).

d) $\dfrac58$.

**Solution.** We decide which type of decimal each number is.

a) $0.25$ is a terminating decimal, so it is rational ($0.25=\dfrac14$).

b) $0.\overline{7}$ is a recurring decimal, so it is rational.

c) This number is infinite, and the $0$s between consecutive $1$s keep growing in number, so there is no repeating block. It is a non-terminating, non-recurring decimal, that is, an irrational number.

d) $\dfrac58$ has the form $\dfrac ab$, so it is rational ($=0.625$).

So a), b), d) are rational; c) is irrational.

**Answer.** a) rational; b) rational; c) irrational; d) rational.
:::

## Principal square roots

A square of side $3$ m has area $3^2=9$ m². Conversely, a square of area $9$ m² has side $3$ m. The reverse of squaring is called taking a square root.

:::definition Principal square root
The **principal square root** of a number $a\geq0$ is the number $x\geq0$ such that $x^2=a$. It is written $\sqrt a$.
:::

For example $\sqrt9=3$ because $3\geq0$ and $3^2=9$; $\sqrt0=0$; $\sqrt{\dfrac49}=\dfrac23$ because $\left(\dfrac23\right)^2=\dfrac49$. A negative number has no principal square root, because the square of a number is never negative. The principal square root is always non-negative, so $\sqrt9$ equals $3$ only, not $\pm3$.

:::example Calculating principal square roots
Calculate:

a) $\sqrt{81}$.

b) $\sqrt{\dfrac4{9}}$.

c) $\sqrt{0.16}$.

d) Explain why $\sqrt{-4}$ does not exist.

**Solution.** We look for the non-negative number whose square equals the given number.

a) Since $9\geq0$ and $9^2=81$, we have $\sqrt{81}=9$.

b) Since $\dfrac23\geq0$ and $\left(\dfrac23\right)^2=\dfrac49$, we have $\sqrt{\dfrac49}=\dfrac23$.

c) Since $0.4\geq0$ and $0.4^2=0.16$, we have $\sqrt{0.16}=0.4$.

d) The square of every number is non-negative, so no number has square $-4$. So $-4$ has no principal square root.

**Answer.** a) $9$; b) $\dfrac23$; c) $0.4$; d) does not exist.
:::

When $a$ is not the square of a rational number, $\sqrt a$ is irrational, for example $\sqrt2$, $\sqrt3$, $\sqrt5$. We cannot write them exactly, but we can estimate them. A square of larger area has a longer side, so if $0\leq a<b$ then $\sqrt a<\sqrt b$. This lets us trap a square root between two consecutive integers: since $4<5<9$, we have $2<\sqrt5<3$.

:::example Estimating and rounding square roots
a) Trap $\sqrt{20}$ between two consecutive integers, then use a calculator to round $\sqrt{20}$ to $1$ decimal place.

b) Do the same for $\sqrt{70}$.

**Solution.** a) Since $16<20<25$, we have $\sqrt{16}<\sqrt{20}<\sqrt{25}$, that is, $4<\sqrt{20}<5$. A calculator gives $\sqrt{20}=4.4721\ldots$; the second decimal digit is $7$, more than $5$, so we round up: $\sqrt{20}\approx4.5$.

b) Since $64<70<81$, we have $8<\sqrt{70}<9$. A calculator gives $\sqrt{70}=8.3666\ldots$; the second decimal digit is $6$, so we round up: $\sqrt{70}\approx8.4$.

So $4<\sqrt{20}<5$ and $\sqrt{20}\approx4.5$; $8<\sqrt{70}<9$ and $\sqrt{70}\approx8.4$.

**Answer.** $\sqrt{20}\approx4.5$; $\sqrt{70}\approx8.4$.
:::

:::graph Positions of $\sqrt2$, $\sqrt3$ and $\sqrt5$ on the number line
alt: A number line from 0.5 to 3.5; the points root 2 at about 1.41 and root 3 at about 1.73 lie between 1 and 2; the point root 5 at about 2.24 lies between 2 and 3
x: 0.5..3.5
y: -1..1
segment: (0.5, 0) (3.5, 0)
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
point: (1.4142, 0) "√2" above
point: (1.7321, 0) "√3" above
point: (2.2361, 0) "√5" above
:::

Now we return to the wooden board from the start, in four steps.

:::example The side of a square board
Suppose a square wooden board has area $2$ m². Find the length of its side, rounded to the nearest centimetre.

**Solution.**

*Understand.* Let $a$ (m) be the side; then $a^2=2$ and $a>0$. We must find $a$ and round it to $0.01$ m.

*Plan.* The side is the principal square root of the area: $a=\sqrt2$. We use a calculator to find an approximation.

*Solve.* We have $a=\sqrt2=1.41421\ldots$ m. The third decimal digit is $4$, less than $5$, so we round down: $a\approx1.41$ m, that is, $141$ cm.

*Look back.* Check: $1.41^2=1.9881$ is a little less than $2$ and $1.42^2=2.0164$ is a little more than $2$, so $\sqrt2$ lies between $1.41$ and $1.42$. It is closer to $1.41$, so rounding to $1.41$ is correct. Because $\sqrt2$ is irrational, no terminating decimal has a square exactly equal to $2$.

So the side of the board is about $1.41$ m.

**Answer.** $\approx1.41$ m.
:::

:::warning Common mistakes
- **Looking at the denominator before simplifying.** Wrong: $\dfrac9{15}$ has a denominator divisible by $3$, so it is a recurring decimal. Why it is wrong: we must simplify first. Right: $\dfrac9{15}=\dfrac35=0.6$ is a terminating decimal.
- **Giving a principal square root two values.** Wrong: $\sqrt9=\pm3$. Why it is wrong: the principal square root is non-negative. Right: $\sqrt9=3$.
- **Splitting the root of a sum.** Wrong: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Why it is wrong: taking a square root does not distribute over addition. Right: $\sqrt{9+16}=\sqrt{25}=5$.
:::

**Connections.** This lesson widens your world of numbers: besides rational numbers there are irrational ones such as $\sqrt2$. Checking the denominator reuses fractions in their simplest form from Year 6, and taking roots reuses squares from the previous lesson. In later lessons we will put both kinds of number into one set.

## Key terms

:::terms
- terminating decimal | số thập phân hữu hạn
- recurring decimal | số thập phân vô hạn tuần hoàn
- repeating block (period) | chu kì
- irrational number | số vô tỉ
- principal (non-negative) square root | căn bậc hai số học
- fraction in its simplest form | phân số tối giản
- prime factor | ước nguyên tố
- round | làm tròn
:::

## Summary

- For a fraction $\dfrac ab$ in its simplest form ($b>0$): if $b$ has only the prime factors $2$ and $5$, the decimal terminates; if $b$ has any other prime factor, the decimal recurs. Always simplify first.
- A recurring decimal is written with a bar over the repeating block, as in $\dfrac56=0.8\overline{3}$.
- An irrational number is a non-terminating, non-recurring decimal, such as $\sqrt2$ and $\pi$.
- $\sqrt a$ ($a\geq0$) is the non-negative number whose square is $a$; if $0\leq a<b$ then $\sqrt a<\sqrt b$.

We have answered both opening questions: $\dfrac13=0.\overline{3}$ goes on for ever because the denominator $3$ has a prime factor other than $2$ and $5$, and the side of the board is $\sqrt2\approx1.41$ m.

## Practice

Each exercise comes with what you need and some hints. Try it yourself first, then open the solution.

:::exercise
Without dividing, say which fractions are terminating decimals: $\dfrac38$; $\dfrac7{15}$; $\dfrac9{12}$; $\dfrac{13}{40}$; $\dfrac5{18}$.

::hint
**What you need:** simplify the fraction, then look at the denominator: only the prime factors $2$ and $5$ means terminating.

**Steps:**
1. Simplify $\dfrac9{12}$ before looking at the denominator.
2. Factorise the denominators $8,15,4,40,18$ into primes.

::solution
We have $\dfrac38$ with denominator $8=2^3$: terminating.

$\dfrac7{15}$ is in its simplest form, and $15=3\cdot5$ has the factor $3$: recurring.

$\dfrac9{12}=\dfrac34$, with denominator $4=2^2$: terminating.

$\dfrac{13}{40}$ is in its simplest form, and $40=2^3\cdot5$: terminating.

$\dfrac5{18}$ is in its simplest form, and $18=2\cdot3^2$ has the factor $3$: recurring.

So the terminating ones are $\dfrac38$, $\dfrac9{12}$, $\dfrac{13}{40}$.

**Answer.** $\dfrac38$; $\dfrac9{12}$; $\dfrac{13}{40}$.
:::

:::exercise
Write each fraction as a decimal (use the bar notation if needed):

a) $\dfrac38$.

b) $\dfrac49$.

c) $\dfrac5{11}$.

d) $\dfrac7{12}$.

::hint
**What you need:** divide the numerator by the denominator until it stops or a remainder repeats.

**Steps:**
1. Use the denominator test to know in advance whether it terminates or recurs.
2. d) Notice that the digits $5$ and $8$ do not repeat; only the digit $3$ does.

::solution
To write a fraction as a decimal, we divide the numerator by the denominator.

a) We have $3\div8=0.375$. The division ends with remainder $0$, so this is a terminating decimal. (The denominator $8=2^3$ has only the prime factor $2$.)

b) We have $4\div9=0.444\ldots$ At every step the remainder is $4$, so the digit $4$ repeats forever. Hence
$$\frac49=0.\overline{4}.$$

c) We have $5\div11=0.4545\ldots$ After two steps the remainder returns to $5$, so the block $45$ repeats forever. Hence
$$\frac5{11}=0.\overline{45}.$$

d) We have $7\div12=0.58333\ldots$ After the digits $58$ the remainder repeats, so the digit $3$ repeats forever. Hence
$$\frac7{12}=0.58\overline{3}.$$

So $\dfrac38=0.375$; $\dfrac49=0.\overline{4}$; $\dfrac5{11}=0.\overline{45}$; $\dfrac7{12}=0.58\overline{3}$.

**Answer.** a) $0.375$; b) $0.\overline{4}$; c) $0.\overline{45}$; d) $0.58\overline{3}$.
:::

:::exercise
Find the $50$th digit after the decimal point of $\dfrac37$.

::hint
**What you need:** $\dfrac37=0.\overline{428571}$ has a repeating block of $6$ digits.

**Steps:**
1. Write the block $428571$ and divide $50$ by $6$ to get the remainder.
2. The remainder tells you the position of the digit within the block.

::solution
We have $\dfrac37=0.\overline{428571}$, with a repeating block of $6$ digits $4,2,8,5,7,1$.

Since $50=6\cdot8+2$, the $50$th digit is the $2$nd digit of the block, which is $2$.

So the $50$th digit after the decimal point of $\dfrac37$ is $2$.

**Answer.** $2$.
:::

:::exercise
Suppose $11$ m of cloth is cut into $7$ equal pieces. How long is each piece in metres? Round to the nearest centimetre.

::hint
**What you need:** each piece is $11\div7$ m long; $1$ m $=100$ cm, so rounding to the nearest cm means $2$ decimal places in metres.

**Steps:**
1. Work out $11\div7$ to a few decimal places.
2. Look at the third decimal digit to round.

::solution
Each piece is $\dfrac{11}7$ m long. We have $11\div7=1.571428\ldots=1.\overline{571428}$.

The third decimal digit is $1$, less than $5$, so we round down: $1.57$ m.

So each piece is about $1.57$ m long, that is, $157$ cm.

**Answer.** $\approx1.57$ m.
:::

:::exercise
Is each number rational or irrational?

a) $\dfrac79$.

b) $-0.\overline{12}$.

c) $0.2020020002\ldots$ (after each digit $2$, the number of $0$s goes up by one).

d) $2.5$.

::hint
**What you need:** a terminating or recurring decimal is rational; a non-terminating, non-recurring decimal is irrational.

**Steps:**
1. Decide which type of decimal each number is.
2. c) Look for a block of digits that repeats for ever.

::solution
a) $\dfrac79$ has the form of a fraction, so it is rational.

b) $-0.\overline{12}$ is a recurring decimal, so it is rational.

c) The number $0.2020020002\ldots$ is infinite, and the number of $0$s between the $2$s keeps growing, so there is no repeating block: it is irrational.

d) $2.5=\dfrac52$ is rational.

So a), b), d) are rational; c) is irrational.

**Answer.** a) rational; b) rational; c) irrational; d) rational.
:::

:::exercise
Calculate:

a) $\sqrt{64}$.

b) $\sqrt{\dfrac{25}{49}}$.

c) $\sqrt{0.25}$.

d) $\sqrt{100}-\sqrt{36}$.

::hint
**What you need:** $\sqrt a$ is the non-negative number whose square is $a$.

**Steps:**
1. Find the non-negative number whose square equals the number under the root.
2. d) Work out each root, then subtract.

::solution
a) Since $8^2=64$, we have $\sqrt{64}=8$.

b) Since $\left(\dfrac57\right)^2=\dfrac{25}{49}$, we have $\sqrt{\dfrac{25}{49}}=\dfrac57$.

c) Since $0.5^2=0.25$, we have $\sqrt{0.25}=0.5$.

d) $\sqrt{100}=10$ and $\sqrt{36}=6$, so $\sqrt{100}-\sqrt{36}=10-6=4$.

So the results are $8$; $\dfrac57$; $0.5$; $4$.

**Answer.** a) $8$; b) $\dfrac57$; c) $0.5$; d) $4$.
:::

:::exercise
Trap each root between two consecutive integers:

a) $\sqrt7$.

b) $\sqrt{30}$.

c) $\sqrt{50}$.

d) $\sqrt{90}$.

::hint
**What you need:** if $m^2<a<(m+1)^2$ then $m<\sqrt a<m+1$.

**Steps:**
1. Find two consecutive square numbers (such as $4,9,16,25,36,49,64,81,100$) around the number under the root.
2. Take the square roots of those square numbers.

::solution
a) Since $4<7<9$, we have $2<\sqrt7<3$.

b) Since $25<30<36$, we have $5<\sqrt{30}<6$.

c) Since $49<50<64$, we have $7<\sqrt{50}<8$.

d) Since $81<90<100$, we have $9<\sqrt{90}<10$.

So the roots lie between $2$ and $3$; $5$ and $6$; $7$ and $8$; $9$ and $10$.

**Answer.** a) $2<\sqrt7<3$; b) $5<\sqrt{30}<6$; c) $7<\sqrt{50}<8$; d) $9<\sqrt{90}<10$.
:::

:::exercise
Suppose a square garden has area $50$ m². Find the length of its side, rounded to $1$ decimal place.

::hint
**What you need:** the side of a square is the principal square root of its area.

**Steps:**
1. Write $a=\sqrt{50}$ and trap it between two consecutive integers.
2. Use a calculator, then round.

::solution
Let $a$ (m) be the side; then $a^2=50$ and $a=\sqrt{50}$. Since $49<50<64$, we have $7<a<8$.

A calculator gives $\sqrt{50}=7.0710\ldots$. The second decimal digit is $7$, more than $5$, so we round up: $a\approx7.1$.

So the side of the garden is about $7.1$ m.

**Answer.** $\approx7.1$ m.
:::

:::exercise
Compare:

a) $\sqrt{11}$ and $3$.

b) $4$ and $\sqrt{17}$.

c) $\sqrt{26}$ and $5$.

d) $0.8$ and $\sqrt{0.49}$.

::hint
**What you need:** if $0\leq a<b$ then $\sqrt a<\sqrt b$; write an integer as a root, for example $3=\sqrt9$.

**Steps:**
1. a)–c) Write $3=\sqrt9$, $4=\sqrt{16}$, $5=\sqrt{25}$, then compare the numbers under the roots.
2. d) Work out $\sqrt{0.49}$.

::solution
a) Since $11>9$, we have $\sqrt{11}>\sqrt9=3$.

b) Since $16<17$, we have $4=\sqrt{16}<\sqrt{17}$.

c) Since $26>25$, we have $\sqrt{26}>\sqrt{25}=5$.

d) We have $\sqrt{0.49}=0.7$ and $0.8>0.7$, so $0.8>\sqrt{0.49}$.

So a) $\sqrt{11}>3$; b) $4<\sqrt{17}$; c) $\sqrt{26}>5$; d) $0.8>\sqrt{0.49}$.

**Answer.** a) $>$; b) $<$; c) $>$; d) $>$.
:::

:::exercise
Find $x\geq0$ such that:

a) $\sqrt x=12$.

b) $\sqrt x+3=7$.

c) $\sqrt x-\dfrac12=\dfrac32$.

::hint
**What you need:** if $\sqrt x=k$ ($k\geq0$) then $x=k^2$; use moving terms across the equals sign to find $\sqrt x$ first.

**Steps:**
1. b), c) Move the known term to the right-hand side to get $\sqrt x=\ldots$.
2. Square the result to find $x$.

::solution
a) $\sqrt x=12$, so $x=12^2=144$.

b) Moving terms: $\sqrt x=7-3=4$, so $x=4^2=16$.

c) Moving terms: $\sqrt x=\dfrac32+\dfrac12=2$, so $x=2^2=4$.

So a) $x=144$; b) $x=16$; c) $x=4$.

**Answer.** a) $144$; b) $16$; c) $4$.
:::

:::exercise
Calculate:

a) $\sqrt{\dfrac{49}{100}}+\left(\dfrac12\right)^2$.

b) $3\cdot\sqrt{0.16}-0.2$.

::hint
**What you need:** work out roots and powers first, then multiplication and division, and addition and subtraction last.

**Steps:**
1. a) $\sqrt{\dfrac{49}{100}}=\dfrac7{10}$ and $\left(\dfrac12\right)^2=\dfrac14$.
2. b) $\sqrt{0.16}=0.4$.

::solution
a) Since $\left(\dfrac7{10}\right)^2=\dfrac{49}{100}$ and $\dfrac7{10}>0$, we have $\sqrt{\dfrac{49}{100}}=\dfrac7{10}$. Also $\left(\dfrac12\right)^2=\dfrac14$. Using the common denominator $20$ and adding:
$$\frac7{10}+\frac14=\frac{14}{20}+\frac5{20}=\frac{19}{20}.$$

b) Since $0.4^2=0.16$ and $0.4>0$, we have $\sqrt{0.16}=0.4$. Doing the multiplication first and then the subtraction:
$$3\cdot0.4-0.2=1.2-0.2=1.$$

So the results are $\dfrac{19}{20}$ and $1$.

**Answer.** a) $\dfrac{19}{20}$; b) $1$.
:::

:::exercise Challenge
How many of the fractions $\dfrac a{12}$, with $a$ an integer and $1\leq a\leq12$, are terminating decimals?

::hint
**What you need:** a fraction in its simplest form whose denominator has only the prime factors $2$ and $5$ is a terminating decimal.

**Steps:**
1. Factorise $12=2^2\cdot3$ and ask when the factor $3$ in the denominator disappears on simplifying.
2. List the values of $a$ for which this happens.

::solution
We have $12=2^2\cdot3$. The fraction $\dfrac a{12}$ is a terminating decimal when, after simplifying, the denominator no longer has the prime factor $3$. This happens exactly when $a$ is divisible by $3$.

The values of $a$ from $1$ to $12$ divisible by $3$ are $3$; $6$; $9$; $12$. Then $\dfrac3{12}=\dfrac14$, $\dfrac6{12}=\dfrac12$, $\dfrac9{12}=\dfrac34$, $\dfrac{12}{12}=1$ are all terminating decimals.

So there are $4$ such fractions.

**Answer.** $4$.
:::

## Mini test

:::quiz
::mc TH
Which of these fractions is a terminating decimal?
A. $\dfrac56$.
B. $\dfrac7{20}$.
C. $\dfrac49$.
D. $\dfrac2{15}$.
::key B
$\dfrac7{20}$ is in its simplest form and $20=2^2\cdot5$. The denominators $6=2\cdot3$, $9=3^2$ and $15=3\cdot5$ all have the prime factor $3$, so A, C and D are recurring decimals.

::mc TH
The fraction $\dfrac5{12}$ written as a decimal is
A. $0.4\overline{16}$.
B. $0.\overline{41}$.
C. $0.41\overline{6}$.
D. $0.416$.
::key C
$5\div12=0.41666\ldots$; only the digit $6$ repeats. B and A choose the wrong block, and D ignores the remaining $6$s.

::mc NB
Which of these numbers is irrational?
A. $0.\overline{3}$.
B. $\dfrac7{11}$.
C. $-2.75$.
D. $0.1010010001\ldots$ (after each digit $1$, the number of $0$s goes up by one).
::key D
Only D is a non-terminating, non-recurring decimal. A is a recurring decimal, B is a fraction and C is a terminating decimal; all three are rational.

::mc TH
The principal square root of $0.36$ is
A. $0.6$.
B. $0.18$.
C. $\pm0.6$.
D. $0.06$.
::key A
$0.6\geq0$ and $0.6^2=0.36$. A halves $0.36$, C forgets that the principal square root is non-negative, and D misplaces the decimal point.

::tf TH NB TH NB
Decide whether each statement is true or false.
a) $\dfrac9{15}$ is a terminating decimal.
b) $\sqrt{16}=\pm4$.
c) Every non-terminating decimal is irrational.
d) $\sqrt{25}=5$.
::key T F F T
a) True: $\dfrac9{15}=\dfrac35=0.6$. b) False: $\sqrt{16}=4$. c) False: $0.\overline{3}$ is non-terminating but rational. d) True, since $5\geq0$ and $5^2=25$.

::sa VD
Find the $50$th digit after the decimal point of $\dfrac37$.
::key 2
$\dfrac37=0.\overline{428571}$ has a block of $6$ digits; $50=6\cdot8+2$, so the $50$th digit is the second digit of the block, that is, $2$.

::sa VD
Calculate $\sqrt{0.64}+\sqrt{1.21}$ and give the answer as a decimal.
::key 1.9
$\sqrt{0.64}=0.8$ and $\sqrt{1.21}=1.1$, so the sum is $1.9$.
:::
