---
title: Logarithms
description: Understand a logarithm as the exponent that gives a number, learn the rules and change of base, and apply them to compound interest, pH and sound level.
minutes: 25
---

:::goals
- Understand the definition of the logarithm to base $a$ of a positive number and evaluate simple logarithms.
- Use the properties and the rules for products, quotients and powers to simplify expressions.
- Use the change of base formula, common logarithms and natural logarithms to calculate and express logarithms.
- Apply logarithms to real-life problems such as compound interest, pH and sound level.
:::

Suppose you invest $100$ million dong at $6\%$ a year, compounded annually (hypothetical figures). After $t$ years the amount is $100\cdot1.06^t$ million dong. You want to know when the amount reaches $200$ million dong. That means solving $1.06^t=2$.

In the previous lesson we learned to find a power when the exponent is known. Now the problem runs the other way: the result is known and we must find the exponent. The inverse operation is the **logarithm**, and it lets us read off an exponent from a given number.

## Exploration: finding the exponent

Let us try a few whole-number exponents of $1.06$:

| $t$ | $10$ | $11$ | $12$ |
|---|---|---|---|
| $1.06^t$ | $1.7908$ | $1.8983$ | $2.0122$ |

Since $1.8983<2<2.0122$, the number $t$ lies between $11$ and $12$. We cannot yet name this $t$, so we need a new notation. Let us begin with an easier case: writing numbers as powers of $2$.

| $b$ | $\dfrac18$ | $\dfrac12$ | $1$ | $2$ | $8$ | $32$ |
|---|---|---|---|---|---|---|
| exponent $\alpha$ with $2^{\alpha}=b$ | $-3$ | $-1$ | $0$ | $1$ | $3$ | $5$ |

Every positive number $b$ has exactly one exponent $\alpha$ such that $2^{\alpha}=b$. We call that exponent the logarithm of $b$ to base $2$.

## Definition of the logarithm

:::definition Logarithm
Let $a>0$, $a\neq1$ and $b>0$. The number $\alpha$ satisfying $a^{\alpha}=b$ is called the **logarithm to base $a$** of $b$, written $\log_a b$. Thus
$$\log_a b=\alpha\Leftrightarrow a^{\alpha}=b.$$
:::

**Going deeper.** A logarithm is just another name for an exponent. For example $\log_2 8=3$ because $2^3=8$. There are three conditions to remember. The base satisfies $a>0$ and $a\neq1$, because $1^{\alpha}$ is always $1$, so no exponent could produce any other number. The number $b$ must be positive, because $a^{\alpha}>0$ for every $\alpha$. Hence $\log_2(-4)$ and $\log_2 0$ are meaningless.

From the definition we get at once the following properties (for $a>0$, $a\neq1$, $b>0$):

$$\log_a1=0,\qquad\log_aa=1,\qquad a^{\log_ab}=b,\qquad\log_a\left(a^{\alpha}\right)=\alpha.$$

For instance, $a^{\log_ab}=b$ says exactly "if $\alpha=\log_ab$ then $a^{\alpha}=b$". The two functions "take a power" and "take a logarithm" undo each other, as in the graph below: their graphs are symmetric about the line $y=x$.

:::graph Graphs of $y=2^x$ and $y=\log_2x$ are symmetric about the line $y=x$
alt: The dashed curve y equals 2 to the power x, the solid curve y equals the logarithm of x to base 2, and the dashed line y equals x; the two curves are mirror images in this line
x: -2..8
y: -3..8
plot: 2^x ; dashed
plot: ln(x)/ln(2) ; 0.05..8
plot: x ; dashed
point: (1, 0) "" below-right
point: (2, 1) "" below-right
point: (4, 2) "" below-right
label: (2.4, 7) "y = 2^x"
label: (6.2, 3.4) "y = log_2 x"
:::

Two bases are used so often that they have their own notation. The **common logarithm** is the logarithm to base $10$, written $\log b$ (or $\lg b$). The **natural logarithm** is the logarithm to base $e$, written $\ln b$, where $e\approx2.718$ is Euler's number.

## Rules for logarithms

:::theorem Rules for logarithms
For $a>0$, $a\neq1$, $M>0$, $N>0$ and every real number $\alpha$:
- $\log_a(MN)=\log_aM+\log_aN$.
- $\log_a\dfrac{M}{N}=\log_aM-\log_aN$.
- $\log_a\left(M^{\alpha}\right)=\alpha\log_aM$.
:::

**Why is this true?** A logarithm is an exponent, so these rules are properties of powers written in a different language. Put $x=\log_aM$ and $y=\log_aN$, that is $M=a^x$ and $N=a^y$. Then $MN=a^x\cdot a^y=a^{x+y}$, so $\log_a(MN)=x+y=\log_aM+\log_aN$. The other two rules follow in the same way from $\dfrac{a^x}{a^y}=a^{x-y}$ and $(a^x)^{\alpha}=a^{\alpha x}$.

:::theorem Change of base formula
For $a>0$, $a\neq1$, $b>0$, $c>0$, $c\neq1$:
$$\log_ab=\frac{\log_cb}{\log_ca},\qquad\log_ab=\frac{1}{\log_ba}\ (b\neq1).$$
:::

The change of base formula lets us use a calculator (which has only $\log$ and $\ln$) to find a logarithm to any base: $\log_ab=\dfrac{\ln b}{\ln a}$. It also gives a consequence: $\log_{a^{\alpha}}b=\dfrac1{\alpha}\log_ab$.

## Examples

We begin with the definition.

:::example Evaluating logarithms from the definition
Evaluate:

a) $\log_2 32$.

b) $\log_3\dfrac{1}{81}$.

c) $\log_{1/2}8$.

d) $\log0.001$.

**Solution.** a) Since $2^5=32$, $\log_232=5$.

b) Since $3^{-4}=\dfrac{1}{81}$, $\log_3\dfrac1{81}=-4$.

c) Since $\left(\dfrac12\right)^{-3}=8$, $\log_{1/2}8=-3$.

d) Since $10^{-3}=0.001$, $\log0.001=-3$.

So a) $5$; b) $-4$; c) $-3$; d) $-3$.
:::

Next we use the properties $a^{\log_ab}=b$ and $\log_aa^{\alpha}=\alpha$.

:::example Using the basic properties
Evaluate:

a) $5^{\log_57}$.

b) $9^{\log_34}$.

c) $\log_48$.

**Solution.** a) We have $5^{\log_57}=7$.

b) Since $9=3^2$, $9^{\log_34}=\left(3^{\log_34}\right)^2=4^2=16$.

c) Put $x=\log_48$, that is $4^x=8$. Writing $4=2^2$ and $8=2^3$ gives $2^{2x}=2^3$, so $2x=3$ and $x=\dfrac32$.

So a) $7$; b) $16$; c) $\dfrac32$.
:::

Now we simplify using the rules.

:::example Using the rules for logarithms
Evaluate:

a) $\log_62+\log_63$.

b) $\log_240-\log_25$.

c) $2\log_36-\log_34$.

**Solution.** a) $\log_62+\log_63=\log_6(2\cdot3)=\log_66=1$.

b) $\log_240-\log_25=\log_2\dfrac{40}{5}=\log_28=3$.

c) $2\log_36-\log_34=\log_36^2-\log_34=\log_3\dfrac{36}{4}=\log_39=2$.

So a) $1$; b) $3$; c) $2$.
:::

When the bases differ, we convert to a single base.

:::example Changing base
Let $a=\log_23$. Express $\log_612$ in terms of $a$.

**Solution.** Change to base $2$, then use the rules:

$$\log_612=\frac{\log_212}{\log_26}=\frac{\log_24+\log_23}{\log_22+\log_23}=\frac{2+a}{1+a}.$$

So $\log_612=\dfrac{2+a}{1+a}$.

**Check.** With $a\approx1.585$ we get $\dfrac{3.585}{2.585}\approx1.387$, and a calculator gives $\dfrac{\ln12}{\ln6}\approx1.387$.
:::

Now we return to the compound interest problem from the start, using all four steps.

:::example Application: how long to double the money?
Suppose Hoa invests $100$ million dong at $6\%$ a year, compounded annually (hypothetical figures). After how many years does the amount reach $200$ million dong (to one decimal place)?

**Solution.**

*Understand.* After $t$ years the amount is $100\cdot1.06^t$ million dong. We need $t$ such that the amount equals $200$.

*Plan.* The equation $100\cdot1.06^t=200$ reduces to $1.06^t=2$. The exponent $t$ is exactly $\log_{1.06}2$, and we calculate it by changing to $\ln$.

*Solve.* We have

$$t=\log_{1.06}2=\frac{\ln2}{\ln1.06}\approx\frac{0.6931}{0.0583}\approx11.9.$$

So the amount doubles after about $11.9$ years.

*Look back.* Is the result reasonable? In the exploration we saw that $t$ lies between $11$ and $12$, and $11.9$ fits; substituting back, $1.06^{11.9}\approx2.0005$. What if the data change? The doubling time does not depend on the amount invested, only on the interest rate: investing $50$ million or $500$ million both double after about $11.9$ years.
:::

Logarithms also appear in science. The pH of a solution measures how acidic it is and is defined by $\mathrm{pH}=-\log[\mathrm{H}^+]$, where $[\mathrm{H}^+]$ is the concentration of hydrogen ions (mol/litre).

:::example Application: pH
A solution has hydrogen ion concentration $[\mathrm{H}^+]=3\cdot10^{-5}$ mol/litre (hypothetical figure).

a) Find the pH of the solution (to two decimal places).

b) How many times greater is $[\mathrm{H}^+]$ in a solution with $\mathrm{pH}=3$ than in one with $\mathrm{pH}=5$?

**Solution.** a) We have $\log\left(3\cdot10^{-5}\right)=\log3+\log10^{-5}=\log3-5$. Hence $\mathrm{pH}=5-\log3\approx5-0.4771\approx4.52$.

b) From $\mathrm{pH}=-\log[\mathrm{H}^+]$ we get $[\mathrm{H}^+]=10^{-\mathrm{pH}}$. So $\mathrm{pH}=3$ gives $[\mathrm{H}^+]=10^{-3}$ and $\mathrm{pH}=5$ gives $[\mathrm{H}^+]=10^{-5}$. The ratio is $\dfrac{10^{-3}}{10^{-5}}=10^2=100$.

So a) $\mathrm{pH}\approx4.52$; b) $100$ times greater.
:::

:::warning Common mistakes
- **Logarithm of a sum.** Wrong: $\log_2(4+4)=\log_24+\log_24=4$. Why it is wrong: the rule exists only for products; $\log_a(M+N)$ cannot be split. Right: $\log_2(4+4)=\log_28=3$.
- **Logarithm of a quotient versus quotient of logarithms.** Wrong: $\dfrac{\log_28}{\log_24}=\log_2\dfrac84=1$. Why it is wrong: $\log_a\dfrac MN=\log_aM-\log_aN$, not $\dfrac{\log_aM}{\log_aN}$. Right: $\dfrac{\log_28}{\log_24}=\dfrac32$, whereas $\log_2\dfrac84=1$.
- **Ignoring the condition on the argument.** Wrong: $\log_2(-4)=-2$ because $2^{-2}=\dfrac14$. Why it is wrong: $2^{-2}=\dfrac14$, not $-4$; $a^{\alpha}$ is always positive, so negative numbers have no logarithm. Right: $\log_2(-4)$ is meaningless.
- **An invalid base.** Wrong: $\log_1 5=5$. Why it is wrong: $1^{\alpha}=1\neq5$ for every $\alpha$. Right: the base must satisfy $a>0$, $a\neq1$.
:::

**Connections.** Logarithms rest on powers with real exponents from the lesson [powers with real exponents](lesson:real-exponents): the rules above are properties of powers read in reverse. They prepare for the lesson on [exponential and logarithmic functions](lesson:exp-log-functions) and the lesson on [exponential and logarithmic equations and inequalities](lesson:exp-log-equations), where we solve equations with the unknown in the exponent, such as $1.06^t=2$. In practice, logarithms turn quantities spread over many orders of magnitude (acid concentration, sound intensity) into readable numbers such as $\mathrm{pH}=4.52$.

## Key terms

:::terms
- lôgarit | logarithm
- cơ số | base
- lôgarit thập phân | common logarithm
- lôgarit tự nhiên | natural logarithm
- đổi cơ số | change of base
- lôgarit của một tích | logarithm of a product
- lôgarit của một thương | logarithm of a quotient
- lôgarit của một luỹ thừa | logarithm of a power
- độ pH | pH
- thời gian gấp đôi | doubling time
:::

## Summary

- $\log_ab=\alpha\Leftrightarrow a^{\alpha}=b$ for $a>0$, $a\neq1$, $b>0$.
- $\log_a1=0$, $\log_aa=1$, $a^{\log_ab}=b$, $\log_a(a^{\alpha})=\alpha$.
- $\log_a(MN)=\log_aM+\log_aN$; $\log_a\dfrac MN=\log_aM-\log_aN$; $\log_a(M^{\alpha})=\alpha\log_aM$.
- $\log_ab=\dfrac{\log_cb}{\log_ca}$; $\log$ means base $10$, $\ln$ means base $e$.
- Real-life problems: solve $a^t=b$ by $t=\dfrac{\ln b}{\ln a}$; $\mathrm{pH}=-\log[\mathrm{H}^+]$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Evaluate:

a) $\log_5125$.

b) $\log_2\dfrac18$.

c) $\log_{1/3}9$.

d) $\ln e^5$.

::hint
**What you need:** $\log_ab=\alpha\Leftrightarrow a^{\alpha}=b$.

**Steps:**
1. Write the number inside the logarithm as a power of the base.
2. Read off the exponent.

::solution
a) Since $5^3=125$, $\log_5125=3$.

b) Since $2^{-3}=\dfrac18$, $\log_2\dfrac18=-3$.

c) Since $\left(\dfrac13\right)^{-2}=9$, $\log_{1/3}9=-2$.

d) We have $\ln e^5=\log_ee^5=5$.

So a) $3$; b) $-3$; c) $-2$; d) $5$.

**Answer.** a) $3$; b) $-3$; c) $-2$; d) $5$.
:::

:::exercise
Find the condition on $x$ for each expression to be defined:

a) $\log_3(x-2)$.

b) $\log_2(5-x)$.

c) $\log(x^2-4)$.

::hint
**What you need:** $\log_au$ is defined when $u>0$.

**Steps:**
1. Write the condition $u>0$.
2. Solve the resulting inequality (in part c, study the sign of the product $(x-2)(x+2)$).

::solution
a) We need $x-2>0$, that is $x>2$.

b) We need $5-x>0$, that is $x<5$.

c) We need $x^2-4>0\Leftrightarrow(x-2)(x+2)>0$, that is $x<-2$ or $x>2$.

So a) $x>2$; b) $x<5$; c) $x\in(-\infty, -2)\cup(2, +\infty)$.

**Answer.** a) $x>2$; b) $x<5$; c) $(-\infty, -2)\cup(2, +\infty)$.
:::

:::exercise
Evaluate:

a) $4^{\log_23}$.

b) $8^{\log_25}$.

c) $\log_432$.

::hint
**What you need:** $a^{\log_ab}=b$; write the base as a power of $2$.

**Steps:**
1. In parts a and b: write $4=2^2$ and $8=2^3$, then use $(a^{\alpha})^{\beta}=a^{\alpha\beta}$.
2. In part c: put $x=\log_432$ and solve $4^x=32$.

::solution
a) We have $4^{\log_23}=\left(2^2\right)^{\log_23}=\left(2^{\log_23}\right)^2=3^2=9$.

b) We have $8^{\log_25}=\left(2^{\log_25}\right)^3=5^3=125$.

c) From $4^x=32$ we get $2^{2x}=2^5$, so $x=\dfrac52$.

So a) $9$; b) $125$; c) $\dfrac52$.

**Answer.** a) $9$; b) $125$; c) $\dfrac52$.
:::

:::exercise
Evaluate:

a) $\log_64+\log_69$.

b) $\log_354-\log_32$.

c) $\log_212-2\log_23+\log_26$.

::hint
**What you need:** $\log_a(MN)=\log_aM+\log_aN$, $\log_a\dfrac MN=\log_aM-\log_aN$, $\alpha\log_aM=\log_aM^{\alpha}$.

**Steps:**
1. Combine the logarithms into a single logarithm.
2. Evaluate the expression inside the logarithm.

::solution
a) We have $\log_64+\log_69=\log_636=2$.

b) We have $\log_354-\log_32=\log_327=3$.

c) We have $\log_212-2\log_23+\log_26=\log_2\dfrac{12\cdot6}{3^2}=\log_28=3$.

So a) $2$; b) $3$; c) $3$.

**Answer.** a) $2$; b) $3$; c) $3$.
:::

:::exercise
The pH of a solution is given by $\mathrm{pH}=-\log[\mathrm{H}^+]$ ($[\mathrm{H}^+]$ in mol/litre).

a) A solution has $[\mathrm{H}^+]=2\cdot10^{-4}$ (hypothetical figure). Find its pH (to two decimal places).

b) A solution has $\mathrm{pH}=6.5$. Find $[\mathrm{H}^+]$, written as $c\cdot10^{-7}$ with $c$ to one decimal place.

::hint
**What you need:** $\mathrm{pH}=-\log[\mathrm{H}^+]$ and $[\mathrm{H}^+]=10^{-\mathrm{pH}}$.

**Steps:**
1. a) Split $\log\left(2\cdot10^{-4}\right)=\log2-4$.
2. b) Write $10^{-6.5}=10^{0.5}\cdot10^{-7}$.

::solution
a) We have $\mathrm{pH}=-(\log2-4)=4-\log2\approx4-0.3010=3.70$.

b) We have $[\mathrm{H}^+]=10^{-6.5}=10^{0.5}\cdot10^{-7}\approx3.2\cdot10^{-7}$.

So a) $\mathrm{pH}\approx3.70$; b) $[\mathrm{H}^+]\approx3.2\cdot10^{-7}$ mol/litre.

**Answer.** a) $3.70$; b) $3.2\cdot10^{-7}$ mol/litre.
:::

:::exercise
The sound level is given by $L=10\log\dfrac{I}{I_0}$ (in decibels, dB), where $I$ is the sound intensity (W/m²) and $I_0=10^{-12}$ W/m² is the reference intensity (by the definition of sound level in school physics).

a) A sound has $I=10^{-5}$ W/m². Find $L$.

b) If the sound intensity doubles, by how many dB does the sound level increase (to one decimal place)?

::hint
**What you need:** $\log\dfrac ab$, $\log10^k=k$ and $\log(2I)=\log2+\log I$.

**Steps:**
1. a) Find $\dfrac{I}{I_0}$, then take $\log$.
2. b) Find $L'-L$ with $I'=2I$.

::solution
a) We have $\dfrac{I}{I_0}=10^{7}$, so $L=10\log10^7=70$ (dB).

b) We have $L'-L=10\log\dfrac{2I}{I_0}-10\log\dfrac{I}{I_0}=10\log2\approx3.0$ (dB), independent of $I$.

So a) $L=70$ dB; b) it increases by about $3.0$ dB.

**Answer.** a) $70$ dB; b) about $3.0$ dB.
:::

:::exercise
Decide whether each statement is true or false:

a) $\log_28=3$.

b) $\log_2(4+4)=\log_24+\log_24$.

c) $\log_{1/2}4=2$.

d) $\log_35\cdot\log_53=1$.

::hint
**What you need:** the definition of the logarithm; the rules apply only to products, quotients and powers; the change of base formula.

**Steps:**
1. a), c) Check $a^{\alpha}=b$.
2. b) Evaluate each side separately; d) use $\log_ab=\dfrac{1}{\log_ba}$.

::solution
a) **True**: $2^3=8$.

b) **False**: the left side is $\log_28=3$, the right side is $2+2=4$.

c) **False**: $\left(\dfrac12\right)^2=\dfrac14\neq4$; in fact $\log_{1/2}4=-2$.

d) **True**: $\log_35=\dfrac{1}{\log_53}$, so the product is $1$.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise
Using a calculator, find $\log_23$ (to two decimal places).

::hint
**What you need:** $\log_ab=\dfrac{\ln b}{\ln a}$.

**Steps:**
1. Change to base $e$.
2. Use the calculator, then round.

::solution
We have $\log_23=\dfrac{\ln3}{\ln2}\approx\dfrac{1.0986}{0.6931}\approx1.585$.

So $\log_23\approx1.58$.

**Answer.** $1.58$.
:::

:::exercise
Revisit powers with rational exponents. For $a>0$, $a\neq1$, evaluate:

a) $\log_a\left(a^2\sqrt{a}\right)$.

b) $\log_a\dfrac{a}{\sqrt[3]{a}}$.

::hint
**What you need:** $\sqrt[n]{a}=a^{1/n}$ and $\log_a\left(a^{\alpha}\right)=\alpha$.

**Steps:**
1. Write the expression inside the logarithm in the form $a^{r}$.
2. Read off the exponent $r$.

::solution
a) We have $a^2\sqrt a=a^{2+\frac12}=a^{5/2}$, so $\log_a\left(a^2\sqrt a\right)=\dfrac52$.

b) We have $\dfrac{a}{\sqrt[3]{a}}=a^{1-\frac13}=a^{2/3}$, so $\log_a\dfrac{a}{\sqrt[3]a}=\dfrac23$.

So a) $\dfrac52$; b) $\dfrac23$.

**Answer.** a) $\dfrac52$; b) $\dfrac23$.
:::

:::exercise Challenge
Prove that $\log_23$ is irrational.

::hint
**What you need:** if $\log_23=\dfrac mn$ then $2^{m/n}=3$; an even number cannot equal an odd number.

**Steps:**
1. Suppose $\log_23=\dfrac mn$ with $m$, $n$ positive integers (since $\log_23>0$).
2. Reduce to $2^m=3^n$ and consider parity.

::solution
Suppose $\log_23=\dfrac mn$ with $m$, $n$ positive integers. Then $2^{m/n}=3$, so $2^m=3^n$.

The left side is even (since $m\ge1$) and the right side is odd. This is a contradiction.

So $\log_23$ is irrational.

**Answer.** $\log_23$ is irrational.
:::

## Mini test

:::quiz
::mc TH
The value of $\log_{1/2}8$ is
A. $-\dfrac13$.
B. $3$.
C. $-3$.
D. $\dfrac13$.
::key C
Since $\left(\dfrac12\right)^{-3}=8$, $\log_{1/2}8=-3$. Option B ignores that the base is less than $1$; C and D take the reciprocal of the result.

::mc TH
The domain of the function $y=\log(x^2-1)$ is
A. $(1, +\infty)$.
B. $(-1, 1)$.
C. $\mathbb{R}\setminus\{-1, 1\}$.
D. $(-\infty, -1)\cup(1, +\infty)$.
::key D
We need $x^2-1>0$, that is $x<-1$ or $x>1$. Option A forgets the negative half, B has the inequality reversed, and C treats the condition like a denominator being non-zero.

::mc TH
The value of $\log_62+\log_618$ is
A. $2$.
B. $\log_620$.
C. $\log_69$.
D. $6$.
::key A
We have $\log_62+\log_618=\log_6(2\cdot18)=\log_636=2$. Option B adds the arguments, C divides instead of multiplying, and D stops at $36$ without taking the logarithm.

::mc VD
Let $a=\log_23$. Then $\log_618$ equals
A. $\dfrac{2+a}{1+a}$.
B. $\dfrac{1+2a}{1+a}$.
C. $\dfrac{1+a}{1+2a}$.
D. $\dfrac{2a}{1+a}$.
::key B
$\log_618=\dfrac{\log_218}{\log_26}=\dfrac{1+2\log_23}{1+\log_23}=\dfrac{1+2a}{1+a}$. Option A is $\log_612$, C swaps numerator and denominator, and D only computes $\log_29$ in the numerator.

::tf NB NB TH TH
The pH of a solution is given by $\mathrm{pH}=-\log[\mathrm{H}^+]$. Solution A has $[\mathrm{H}^+]=10^{-3}$ mol/litre and solution B has $[\mathrm{H}^+]=10^{-5}$ mol/litre. Decide whether each statement is true or false:
a) The pH of solution A is $-3$.
b) The pH of solution B is $5$.
c) The concentration $[\mathrm{H}^+]$ of solution A is $100$ times that of solution B.
d) The pH of solution B is greater than the pH of solution A.
::key F T T T
a) False: $\mathrm{pH}=-\log10^{-3}=3$; the minus sign in the formula cancels the negative exponent. b) True: $-\log10^{-5}=5$. c) True: $\dfrac{10^{-3}}{10^{-5}}=100$. d) True: $5>3$.

::sa VD
Suppose the interest rate is $6\%$ a year, compounded annually. After how many years does the amount invested triple (give the answer to one decimal place)?
::key 18.9
We need $1.06^t=3$, so $t=\dfrac{\ln3}{\ln1.06}\approx\dfrac{1.0986}{0.0583}\approx18.9$ (years).

::sa TH
The sound level is $L=10\log\dfrac{I}{I_0}$ (dB) with $I_0=10^{-12}$ W/m². A sound has $I=3\cdot10^{-6}$ W/m². Find $L$ (give the answer to one decimal place).
::key 64.8
$\dfrac{I}{I_0}=3\cdot10^6$, so $L=10(\log3+6)\approx10\cdot6.4771\approx64.8$ (dB).
:::
