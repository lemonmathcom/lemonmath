---
title: Terminating and recurring decimals
description: Understand terminating and recurring decimals and fraction conversion, apply the rules in calculations and solve practical problems.
minutes: 25
---

:::goals
- Recognise and describe terminating and recurring decimals and fraction conversion.
- Explain why the main rule works.
- Carry out the related calculations or reasoning accurately.
- Apply the idea to a practical situation.
:::

$1\div4$ stops at $0.25$, while $1\div3$ gives $0.333\ldots$, which never stops but repeats. Both are rational. What about the denominator determines the decimal type, and how can a repeating block be converted back to a fraction?

## terminating and recurring decimals and fraction conversion

**A short exploration.**
Long division of $\dfrac17$ gives $0.142857142857\ldots$: after six digits, the remainder returns to its earlier value, so the block repeats. A simplified fraction whose denominator has only factors $2$ and $5$ gives a terminating decimal.

:::definition Two decimal forms
A terminating decimal has finitely many digits after the decimal point. A recurring decimal has a digit or block that repeats indefinitely, for example $0.\overline{27}$.
:::

:::definition Denominator criterion
Simplify $\dfrac ab$ with a positive denominator. Its decimal terminates exactly when $b=2^m5^n$ for natural numbers $m,n$; if another prime factor remains, the decimal recurs.
:::

**Why does this work?**
In long division, only remainders $0,1,\ldots,b-1$ are possible. Remainder $0$ ends the division; otherwise a remainder must repeat, and so do subsequent quotient digits. Multiplying a recurring decimal by a power of $10$ aligns the repeating blocks so subtraction removes the infinite tail.

**How to check your own work.** For a question on this topic, first state in words what is given and what must be found. Next write the rule you will use, substitute values or reason one step at a time, and then check the result in a different way: put it back into the data, estimate its size, or compare it with a diagram or number line. If two methods disagree, locate the first step where they differ instead of changing only the final answer. This habit catches sign errors, missing units and overlooked cases.

**Systems view.** terminating and recurring decimals and fraction conversion is not an isolated trick. Follow the chain: the data determine a model, the model determines the calculation, and the result must return to the original situation. When one piece of data changes, predict whether the result should increase, decrease or stay unchanged before calculating again.

## Worked examples and applications

:::example Recognising termination
Does $\dfrac7{40}$ terminate or recur?

**Solution.**
$40=2^3\cdot5$ has only factors $2,5$, so it terminates; indeed $\dfrac7{40}=0.175$.

Therefore, terminating.
:::

:::example Recognising recurrence
What decimal type does $\dfrac5{12}$ have?

**Solution.**
$12=2^2\cdot3$ retains factor $3$, so the decimal is recurring.

Therefore, recurring.
:::

:::example Converting a terminating decimal
Write $0.625$ as a fraction in simplest form.

**Solution.**
$0.625=\dfrac{625}{1000}=\dfrac58$.

Therefore, $\dfrac58$.
:::

:::example Converting one recurring digit
Convert $x=0.\overline{6}$ to a fraction.

**Solution.**

*Understand.* Record the given data, the required result and any conditions.

*Plan.* Choose the relevant definition or rule, then work in a logical order.

*Solve.* $10x=6.\overline{6}$. Subtracting $x=0.\overline{6}$ gives $9x=6$, so $x=\dfrac23$.

*Look back.* Compare the result with the data and use an independent check.

Therefore, $\dfrac23$.
:::

## Common mistakes and connections

:::warning What can go wrong?
- **Inspecting the denominator before simplifying.** Claiming $\dfrac6{15}$ recurs because its denominator has factor $3$. Factor $3$ cancels during simplification. Simplify $\dfrac6{15}=\dfrac25$ before applying the criterion.
- **Misreading the recurring bar.** Treating $0.1\overline{6}$ as $0.\overline{16}$. The bar covers only digits in the repetend. Write several digits: $0.1666\ldots$ differs from $0.1616\ldots$.
:::

**Connections.** Decimal notation makes measurement and comparison convenient, while fractions preserve exact structure. Recurrence shows that an infinite digit string can still represent an exact rational number. When solving a problem, separate three layers: the data, the mathematical relationship and the conclusion. Before substituting values, state why the chosen rule applies; after each step, check signs, units and conditions. A diagram, small table or simple case often reveals a missing assumption. Estimate before calculating so that you know whether the answer should be large or small, positive or negative. After obtaining a result, use an independent check: substitute it back into the data, measure it on the diagram, or test a boundary case. If one item of data changes, predict which part of the method changes and which part remains valid. This approach turns a formula into a connected system of reasons and makes the idea usable in an unfamiliar situation instead of only in a memorised exercise. It also produces written work that another student can follow, question and verify line by line.

## Key terms

:::terms
- terminating decimal | số thập phân hữu hạn
- infinite decimal | số thập phân vô hạn
- recurring decimal | số thập phân tuần hoàn
- repetend | chu kì
- non-repeating part | phần không lặp
- fraction in simplest form | phân số tối giản
- long division | chia dài
- remainder | số dư
- recurring bar | dấu gạch tuần hoàn
:::

## Summary

- A simplified fraction with denominator factors only $2,5$ terminates.
- Another denominator factor produces a recurring decimal.
- A repeated remainder produces repeated quotient digits.
- Multiply by a power of $10$ to align the repetend.
- Terminating and recurring decimals are rational.

## Practice

Each exercise includes the knowledge you need and a sequence of hints. Try it before opening the solution.

:::exercise
Convert $0.\overline{45}$ to a fraction.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Let $x=0.\overline{45}$. Then $100x-x=45$, so $99x=45$ and $x=\dfrac5{11}$.

**Answer.** $\dfrac5{11}$.
:::

:::exercise
Does $\dfrac6{15}$ terminate?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Simplify first: $\dfrac6{15}=\dfrac25=0.4$, so it terminates.

**Answer.** yes.
:::

:::exercise
In $0.1232323\ldots$, what are the non-repeating part and repetend?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Digit $1$ appears before repetition; block $23$ repeats indefinitely.

**Answer.** $1$; $23$.
:::

:::exercise
Compare $0.\overline{3}$ and $\dfrac13$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Let $x=0.\overline{3}$; then $9x=3$, so $x=\dfrac13$ and the numbers are equal.

**Answer.** equal.
:::

:::exercise
Without dividing, explain why $\dfrac{13}{125}$ has at most $3$ decimal places.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$125=5^3$. Multiplying the denominator by $2^3$ gives $1000$, so $\dfrac{13}{125}=\dfrac{104}{1000}=0.104$.

**Answer.** $0.104$.
:::

:::exercise
Convert $x=0.1\overline{6}$ to a fraction.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$10x=1.\overline{6}$ and $100x=16.\overline{6}$. Subtraction gives $90x=15$, so $x=\dfrac16$.

**Answer.** $\dfrac16$.
:::

:::exercise
Calculate $0.\overline{2}+\dfrac19$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
$0.\overline{2}=\dfrac29$, so the sum is $\dfrac29+\dfrac19=\dfrac13$.

**Answer.** $\dfrac13$.
:::

:::exercise Challenge
Show that $0.\overline{9}=1$.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Let $x=0.\overline{9}$. Then $10x-x=9$, so $9x=9$ and $x=1$.

**Answer.** $1$.
:::

## Mini test

:::quiz
::mc
The decimal representation of $\dfrac7{20}$ is
A. terminating.
B. infinite non-recurring.
C. undefined.
D. not rational.
::key A
$20=2^2\cdot5$ has only factors $2,5$.

::mc
$0.\overline{4}$ equals
A. $\dfrac14$
B. $\dfrac49$
C. $\dfrac45$
D. $4$
::key B
If $x=0.\overline4$, then $9x=4$.

::mc
Which fraction is recurring in simplest form?
A. $\dfrac38$
B. $\dfrac7{25}$
C. $\dfrac5{12}$
D. $\dfrac9{40}$
::key C
Denominator $12$ retains factor $3$.

::mc
$0.125$ equals
A. $\dfrac14$
B. $\dfrac15$
C. $\dfrac18$
D. $\dfrac12$
::key C
$0.125=\dfrac{125}{1000}=\dfrac18$.

::tf
Consider decimal representations of rationals.
a) $\dfrac18$ has a terminating decimal.
b) $0.\overline9<1$.
c) A repeated remainder makes quotient digits repeat.
d) Every infinite decimal is irrational.
::key T F T F
a), c) are true. Recurring decimals are rational and $0.\overline9=1$, so d), b) are false.

::sa
Convert $0.75$ to a fraction in simplest form.
::key 3/4
$0.75=\dfrac{75}{100}=\dfrac34$.

::sa
Convert $0.\overline7$ to a fraction.
::key 7/9
Let $x=0.\overline7$; then $9x=7$.

:::
