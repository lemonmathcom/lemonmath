---
title: Square roots with multiplication and division
description: Use the rules √(ab) = √a·√b and √(a/b) = √a/√b to take the square root of a product or quotient and to multiply and divide square roots.
minutes: 20
---

:::goals
- Take the square root of a product, and multiply square roots.
- Take the square root of a quotient, and divide one square root by another.
- Apply both rules to square-root expressions with letters and to real-life problems.
:::

A rectangular garden is $\sqrt{50}$ m long and $\sqrt8$ m wide. Its area is $\sqrt{50}\cdot\sqrt8$ m². A calculator gives $7.07\ldots\cdot2.82\ldots$, which is a messy multiplication. Is there a way to find the exact area without a calculator?

:::diagram The rectangular garden
alt: Rectangle ABCD with side AB of length root 50 metres and side BC of length root 8 metres
point A 0,0 below-left
point B 7.07,0 below-right
point C 7.07,2.83 above-right
point D 0,2.83 above-left
polygon A B C D
segment A B "√50 m"
segment B C "√8 m"
right D A B
:::

## The square root of a product

### Explore: compare $\sqrt{ab}$ with $\sqrt a\cdot\sqrt b$

We work out both for a few pairs of perfect squares:

| $a$, $b$ | $\sqrt{ab}$ | $\sqrt a\cdot\sqrt b$ |
|---|---|---|
| $4$, $9$ | $\sqrt{36}=6$ | $2\cdot3=6$ |
| $16$, $25$ | $\sqrt{400}=20$ | $4\cdot5=20$ |
| $1$, $49$ | $\sqrt{49}=7$ | $1\cdot7=7$ |

Both ways always give the same result.

:::theorem Square roots and multiplication
For any two non-negative numbers $a$ and $b$,
$$\sqrt{ab}=\sqrt a\cdot\sqrt b.$$
:::

Why? The number $\sqrt a\cdot\sqrt b$ is non-negative, and $\left(\sqrt a\cdot\sqrt b\right)^2=\left(\sqrt a\right)^2\cdot\left(\sqrt b\right)^2=ab$. So $\sqrt a\cdot\sqrt b$ is the principal square root of $ab$.

Reading the rule from left to right, we **take the square root of a product**: take the root of each factor, then multiply.

:::example The square root of a product
Evaluate: a) $\sqrt{49\cdot1.44}$; b) $\sqrt{810\cdot40}$.

**Solution.** Using the rule for the square root of a product, we have (in b), we write $810\cdot40=81\cdot400$):

$$\sqrt{49\cdot1.44}=\sqrt{49}\cdot\sqrt{1.44}=7\cdot1.2=8.4;\qquad \sqrt{810\cdot40}=\sqrt{81}\cdot\sqrt{400}=9\cdot20=180.$$

So a) equals $8.4$ and b) equals $180$.
:::

Reading the rule from right to left, we **multiply square roots**: multiply the numbers under the root signs, then take the root of the result. This answers the garden question.

:::example Multiplying square roots
Evaluate: a) $\sqrt2\cdot\sqrt{32}$; b) the area of the garden, $\sqrt{50}\cdot\sqrt8$.

**Solution.** Using the rule for multiplying square roots, we have

$$\sqrt2\cdot\sqrt{32}=\sqrt{64}=8;\qquad \sqrt{50}\cdot\sqrt8=\sqrt{400}=20.$$

So a) equals $8$; b) the garden has an area of exactly $20$ m².
:::

The rule still holds when $a$ and $b$ are non-negative expressions: $\sqrt{AB}=\sqrt A\cdot\sqrt B$ for $A\ge0$, $B\ge0$.

:::example Multiplying expressions with letters
Simplify $\sqrt{3a}\cdot\sqrt{12a}$ for $a\ge0$.

**Solution.** Since $a\ge0$, $|6a|=6a$. We have

$$\sqrt{3a}\cdot\sqrt{12a}=\sqrt{36a^2}=\sqrt{(6a)^2}=|6a|=6a.$$

So $\sqrt{3a}\cdot\sqrt{12a}=6a$.
:::

## The square root of a quotient

We have $\sqrt{\dfrac{36}{4}}=\sqrt9=3$ and $\dfrac{\sqrt{36}}{\sqrt4}=\dfrac62=3$. Division also "passes through" the root sign, just like multiplication.

:::theorem Square roots and division
For a non-negative number $a$ and a positive number $b$,
$$\sqrt{\frac ab}=\frac{\sqrt a}{\sqrt b}.$$
:::

The reason is similar: $\dfrac{\sqrt a}{\sqrt b}\ge0$ and $\left(\dfrac{\sqrt a}{\sqrt b}\right)^2=\dfrac ab$. The number $b$ must be positive because it is in the denominator.

:::example The square root of a quotient
Evaluate: a) $\sqrt{\dfrac{25}{144}}$; b) $\sqrt{1\dfrac{9}{16}}$.

**Solution.** Using the rule for the square root of a quotient, we have (in b), $1\dfrac9{16}=\dfrac{25}{16}$):

$$\sqrt{\frac{25}{144}}=\frac{\sqrt{25}}{\sqrt{144}}=\frac{5}{12};\qquad \sqrt{\frac{25}{16}}=\frac{\sqrt{25}}{\sqrt{16}}=\frac54.$$

So a) equals $\dfrac5{12}$ and b) equals $\dfrac54$.
:::

The other way round, to divide two roots we divide the numbers under the root signs and then take the root.

:::example Dividing square roots
Evaluate: a) $\dfrac{\sqrt{80}}{\sqrt5}$; b) $\dfrac{\sqrt{2.7}}{\sqrt{0.3}}$; c) simplify $\dfrac{\sqrt{18x^3}}{\sqrt{2x}}$ for $x>0$.

**Solution.** Using the rule for dividing square roots, we have (in c), since $x>0$, $|3x|=3x$):

$$\frac{\sqrt{80}}{\sqrt5}=\sqrt{16}=4;\qquad \frac{\sqrt{2.7}}{\sqrt{0.3}}=\sqrt9=3;\qquad \frac{\sqrt{18x^3}}{\sqrt{2x}}=\sqrt{9x^2}=|3x|=3x.$$

So a) equals $4$, b) equals $3$ and c) equals $3x$.
:::

:::warning Common mistakes
- **Splitting the root when the factors are negative.** Wrong: $\sqrt{(-4)\cdot(-9)}=\sqrt{-4}\cdot\sqrt{-9}$. Why it is wrong: the rule is only for non-negative numbers; $\sqrt{-4}$ is not defined. Right: $\sqrt{(-4)\cdot(-9)}=\sqrt{36}=6$.
- **Using the rule for addition.** Wrong: $\sqrt{16+9}=\sqrt{16}+\sqrt9$. Why it is wrong: the rules are only for multiplication and division. Right: $\sqrt{25}=5$.
- **Forgetting the absolute value.** Wrong: $\sqrt{9a^2}=3a$ for every $a$. Why it is wrong: for $a=-1$ the left side is $3$ and the right side is $-3$. Right: $\sqrt{9a^2}=3|a|$.
:::

## Real-life applications

Many scientific formulas contain square roots. The two rules help us calculate quickly and exactly.

:::example Waves in shallow water
In shallow water, the speed (m/s) of a sea wave is about $v=\sqrt{10d}$, where $d$ is the depth of the water in metres. Find the speed of the wave when $d=3.6$ m.

**Solution.** Substituting $d=3.6$ into the formula, we get

$$v=\sqrt{10\cdot3.6}=\sqrt{36}=6.$$

So the speed of the wave is about $6$ m/s, which is about $21.6$ km/h.
:::

## Key terms

:::terms
- take the square root | khai căn bậc hai
- product | tích
- quotient | thương
- factor | thừa số
- perfect square | số chính phương
- mixed number | hỗn số
- square-root expression | căn thức bậc hai
:::

## Summary

- $\sqrt{ab}=\sqrt a\cdot\sqrt b$ for $a\ge0$, $b\ge0$: take the root of each factor, or multiply roots into one root.
- $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ for $a\ge0$, $b>0$: take the root of the numerator and the denominator, or divide roots into one root.
- Both rules hold for non-negative expressions $A$, $B$ too (with a positive denominator).
- Tip: regroup the factors to get perfect squares, as in $810\cdot40=81\cdot400$.
- There is no rule like this for addition or subtraction.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Evaluate: a) $\sqrt{16\cdot0.25}$; b) $\sqrt{2.5\cdot40}$; c) $\sqrt{12\cdot75}$.

::hint
**What you need:** $\sqrt{ab}=\sqrt a\cdot\sqrt b$ for $a$, $b\ge0$.

**Steps:**
1. If each factor is a perfect square, take the root of each factor.
2. If not, multiply to get a perfect square.

::solution
a) $\sqrt{16\cdot0.25}=\sqrt{16}\cdot\sqrt{0.25}=4\cdot0.5=2$. b) $\sqrt{2.5\cdot40}=\sqrt{100}=10$. c) $\sqrt{12\cdot75}=\sqrt{900}=30$.

**Answer.** a) $2$; b) $10$; c) $30$.
:::

:::exercise
Evaluate: a) $\sqrt3\cdot\sqrt{27}$; b) $\sqrt{0.2}\cdot\sqrt{180}$; c) $\sqrt{1.6}\cdot\sqrt{250}$.

::hint
**What you need:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$.

**Steps:**
1. Multiply the two numbers under the root signs.
2. Take the root of the result.

::solution
a) $\sqrt3\cdot\sqrt{27}=\sqrt{81}=9$. b) $\sqrt{0.2}\cdot\sqrt{180}=\sqrt{36}=6$. c) $\sqrt{1.6}\cdot\sqrt{250}=\sqrt{400}=20$.

**Answer.** a) $9$; b) $6$; c) $20$.
:::

:::exercise
Evaluate: a) $\sqrt{\dfrac{49}{81}}$; b) $\sqrt{2\dfrac79}$.

::hint
**What you need:** $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ for $a\ge0$, $b>0$.

**Steps:**
1. Change the mixed number into a fraction.
2. Take the root of the numerator and of the denominator.

::solution
a) $\sqrt{\dfrac{49}{81}}=\dfrac{\sqrt{49}}{\sqrt{81}}=\dfrac79$. b) We have $2\dfrac79=\dfrac{25}9$, hence $\sqrt{2\dfrac79}=\dfrac{\sqrt{25}}{\sqrt9}=\dfrac53$.

**Answer.** a) $\dfrac79$; b) $\dfrac53$.
:::

:::exercise
Evaluate: a) $\dfrac{\sqrt{72}}{\sqrt2}$; b) $\dfrac{\sqrt{6.4}}{\sqrt{0.1}}$; c) $\dfrac{\sqrt{12.5}}{\sqrt{0.5}}$.

::hint
**What you need:** $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$.

**Steps:**
1. Divide the two numbers under the root signs.
2. Take the root of the quotient.

::solution
a) $\dfrac{\sqrt{72}}{\sqrt2}=\sqrt{36}=6$. b) $\dfrac{\sqrt{6.4}}{\sqrt{0.1}}=\sqrt{64}=8$. c) $\dfrac{\sqrt{12.5}}{\sqrt{0.5}}=\sqrt{25}=5$.

**Answer.** a) $6$; b) $8$; c) $5$.
:::

:::exercise
Simplify the following expressions: a) $\sqrt{5x}\cdot\sqrt{20x}$ for $x\ge0$; b) $\dfrac{\sqrt{27y^3}}{\sqrt{3y}}$ for $y>0$.

::hint
**What you need:** combine into one root, then use $\sqrt{A^2}=|A|$.

**Steps:**
1. Multiply (or divide) the expressions under the root signs.
2. Write the result as a square and remove the root using the condition.

::solution
a) We have $\sqrt{5x}\cdot\sqrt{20x}=\sqrt{100x^2}=|10x|=10x$ (since $x\ge0$). b) We have $\dfrac{\sqrt{27y^3}}{\sqrt{3y}}=\sqrt{9y^2}=|3y|=3y$ (since $y>0$).

**Answer.** a) $10x$; b) $3y$.
:::

:::exercise
Simplify the expression $\sqrt{4a^2}-3a$ for $a<0$.

::hint
**What you need:** $\sqrt{4a^2}=\sqrt4\cdot\sqrt{a^2}=2|a|$ (see [square roots and square-root expressions](lesson:square-roots-radicals)).

**Steps:**
1. Write $\sqrt{4a^2}=2|a|$.
2. For $a<0$, $|a|=-a$.

::solution
We have $\sqrt{4a^2}-3a=2|a|-3a$. Since $a<0$, $|a|=-a$. Hence $\sqrt{4a^2}-3a=-2a-3a=-5a$.

**Answer.** $-5a$.
:::

:::exercise
A square photo has an area of $150$ cm². It is enlarged into a square with $6$ times the area.

a) How long, in centimetres, is a side of the new photo?

b) How many times as long as the old side is the new side (rounded to two decimal places)?

::hint
**What you need:** a square of area $S$ has side $\sqrt S$; $\dfrac{\sqrt{6S}}{\sqrt S}=\sqrt6$.

**Steps:**
1. The new area is $150\cdot6$; take its root.
2. Divide the two sides using the rule for dividing roots.

::solution
a) The area of the new photo is $150\cdot6=900$ (cm²). Hence a side of the new photo is $\sqrt{900}=30$ (cm).

b) The old side is $\sqrt{150}$ cm. So the new side is $\dfrac{\sqrt{900}}{\sqrt{150}}=\sqrt6\approx2.45$ times as long as the old side.

**Answer.** a) $30$ cm; b) about $2.45$ times.
:::

:::exercise
The speed (m/s) of a tsunami in water $d$ metres deep is about $v=\sqrt{10d}$.

a) Find the speed of the wave where the depth is $2.5$ m.

b) Find the speed of the wave where the depth is $4000$ m.

c) At the speed in part b, how many kilometres does the wave travel in $1$ hour?

::hint
**What you need:** $\sqrt{ab}=\sqrt a\cdot\sqrt b$; distance equals speed times time.

**Steps:**
1. Multiply under the root sign: $10\cdot2.5$ and $10\cdot4000$.
2. Convert $1$ hour $=3600$ seconds.

::solution
a) Substituting $d=2.5$ into the formula, we get $v=\sqrt{25}=5$ (m/s).

b) Substituting $d=4000$ into the formula, we get $v=\sqrt{40000}=200$ (m/s).

c) We have $1$ hour $=3600$ seconds. The distance travelled is $200\cdot3600=720000$ (m) $=720$ (km).

**Answer.** a) $5$ m/s; b) $200$ m/s; c) about $720$ km.
:::

:::exercise
Find $x\ge0$ given that $\sqrt{2x}\cdot\sqrt8=12$.

::hint
**What you need:** $\sqrt{2x}\cdot\sqrt8=\sqrt{16x}=4\sqrt x$.

**Steps:**
1. Combine the left side into $4\sqrt x$.
2. Find $\sqrt x$, then $x$.

::solution
We have $\sqrt{2x}\cdot\sqrt8=\sqrt{16x}=4\sqrt x$. Hence $4\sqrt x=12\iff\sqrt x=3\iff x=9$ (which satisfies the condition).

**Answer.** $x=9$.
:::

:::exercise Challenge
Without a calculator, evaluate $A=\sqrt{3+\sqrt5}\cdot\sqrt{3-\sqrt5}$.

::hint
**What you need:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$ when $a$, $b\ge0$; the identity $(m+n)(m-n)=m^2-n^2$.

**Steps:**
1. Check that $3-\sqrt5\ge0$.
2. Combine into one root and use the identity.

::solution
Since $\sqrt5<\sqrt9=3$, $3-\sqrt5>0$. Hence $A=\sqrt{\left(3+\sqrt5\right)\left(3-\sqrt5\right)}=\sqrt{9-5}=\sqrt4=2$.

**Answer.** $A=2$.
:::

## Mini test

:::quiz
::mc
$\sqrt{0.4\cdot90}$ equals
A. $6$.
B. $36$.
C. $0.6$.
D. $60$.
::key A
We have $\sqrt{0.4\cdot90}=\sqrt{36}=6$. Option B forgets to take the root; C and D put the decimal point in the wrong place.

::mc
$\sqrt{12}\cdot\sqrt3$ equals
A. $6$.
B. $\sqrt{15}$.
C. $36$.
D. $4$.
::key A
We have $\sqrt{12}\cdot\sqrt3=\sqrt{12\cdot3}=\sqrt{36}=6$. Option B adds the numbers under the roots, C forgets the root, and D divides instead of multiplying.

::mc
The identity $\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ holds when
A. $a\ge0$, $b\ge0$.
B. $a\ge0$, $b>0$.
C. $a>0$, $b\ge0$.
D. for all $a$, $b$.
::key B
We need $a\ge0$ for $\sqrt a$ to be defined and $b>0$ because $\sqrt b$ is in the denominator. Option A allows $b=0$, where the division makes no sense.

::mc
For $x<0$, $\sqrt{16x^2}$ equals
A. $4x$.
B. $-4x$.
C. $16x$.
D. $-16x$.
::key B
We have $\sqrt{16x^2}=4|x|=-4x$ (since $x<0$). Option A forgets the absolute value; C and D forget to take the root of $16$.

::tf
Let $A=\sqrt{50}\cdot\sqrt2$ and $B=\dfrac{\sqrt{98}}{\sqrt2}$. Decide whether each statement is true or false.
a) $A=10$.
b) $B=49$.
c) $A\cdot B=70$.
d) $A-B=\sqrt{51}$.
::key T F T F
a) True. We have $A=\sqrt{100}=10$. b) False. We have $B=\sqrt{49}=7$. c) True. $A\cdot B=10\cdot7=70$. d) False. $A-B=3$, while $\sqrt{51}\approx7.1$ (we cannot subtract under the root sign).

::sa
Evaluate $\sqrt{1.21\cdot0.25}$.
::key 0.55
We have $\sqrt{1.21\cdot0.25}=\sqrt{1.21}\cdot\sqrt{0.25}=1.1\cdot0.5=0.55$.

::sa
In shallow water, the speed $v$ (m/s) of a sea wave is about $v=\sqrt{10d}$, where $d$ (m) is the depth of the water. Find the speed of the wave (in m/s) where the water is $8.1$ m deep.
::key 9
Substituting $d=8.1$ into the formula, we get $v=\sqrt{10\cdot8.1}=\sqrt{81}=9$ (m/s).
:::
