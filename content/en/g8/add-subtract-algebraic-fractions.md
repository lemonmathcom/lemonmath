---
title: Adding and subtracting algebraic fractions
description: Add and subtract algebraic fractions with the same or different denominators by writing them over a common denominator, and apply this to real problems.
minutes: 22
---

:::goals
- Add and subtract two algebraic fractions with the same denominator.
- Find a common denominator and write fractions over it.
- Add and subtract fractions with different denominators, including when signs must be changed.
- Apply addition and subtraction of fractions to real-life problems.
:::

Suppose a water tank is filled by two taps. The first tap alone fills the tank in $x$ hours, and the second tap alone fills it in $x+3$ hours. In one hour the first tap fills $\dfrac1x$ of the tank and the second fills $\dfrac{1}{x+3}$ of it.

With both taps open, the fraction of the tank filled each hour is $\dfrac1x+\dfrac{1}{x+3}$. Can this be written as a single fraction? And if $x=6$, how long do the two taps take together to fill the tank? This lesson gives you the tools to answer.

## Let's explore

With numerical fractions we add $\dfrac16+\dfrac19$ by writing them over a common denominator: the lowest common denominator is $18$, so
$$\frac16+\frac19=\frac{3}{18}+\frac{2}{18}=\frac{5}{18}.$$
We change both fractions to the **same denominator** and then add the numerators. For $\dfrac1x+\dfrac{1}{x+3}$, the denominators $x$ and $x+3$ have no common factor, so the natural common denominator is their product $x(x+3)$. The method is exactly the same: same denominator, then add the numerators. The next sections show each step.

## Adding and subtracting fractions with the same denominator

:::theorem Adding and subtracting with the same denominator
To add (or subtract) two algebraic fractions with the same denominator, we add (or subtract) the numerators and keep the denominator:
$$\frac{A}{C}+\frac{B}{C}=\frac{A+B}{C},\qquad \frac{A}{C}-\frac{B}{C}=\frac{A-B}{C}.$$
:::

**Why?** This is the rule for numerical fractions: $\dfrac{A}{C}$ means $A$ parts, each part being $\dfrac1C$; adding $A$ parts and $B$ parts gives $A+B$ parts. After adding or subtracting, we should simplify the result if possible.

:::example Same denominator
Work out:

a) $\dfrac{3x+1}{x-2}+\dfrac{x+5}{x-2}$.

b) $\dfrac{5x+3}{x^2-1}-\dfrac{2x-1}{x^2-1}$.

**Solution.** a) The two fractions have the same denominator, so we add the numerators:
$$\frac{3x+1}{x-2}+\frac{x+5}{x-2}=\frac{4x+6}{x-2}.$$

b) When subtracting, we put the second numerator in brackets so that every term changes sign:
$$\frac{5x+3}{x^2-1}-\frac{2x-1}{x^2-1}=\frac{5x+3-(2x-1)}{x^2-1}=\frac{3x+4}{x^2-1}.$$

So a) $\dfrac{4x+6}{x-2}$; b) $\dfrac{3x+4}{x^2-1}$.
:::

## Writing fractions over a common denominator

When two fractions have different denominators, we must **write them over a common denominator**: change them into equal fractions with the same denominator. The steps are:

:::note Steps for finding a common denominator
1. Factorise each denominator.
2. Find the **common denominator**: the product of every factor that appears, each taken with its highest power; the numerical part is the lowest common multiple of the coefficients.
3. Find the **multiplying factor** of each fraction: divide the common denominator by that fraction's denominator.
4. Multiply the numerator and denominator of each fraction by its multiplying factor (the basic property of fractions).
:::

:::example Monomial denominators
Work out $\dfrac{5}{6x^2y}-\dfrac{1}{4xy^2}$.

**Solution.** We have $6x^2y=2\cdot3\cdot x^2\cdot y$ and $4xy^2=2^2\cdot x\cdot y^2$. The common denominator is $12x^2y^2$. The multiplying factors of the two fractions are $2y$ and $3x$. Hence
$$\frac{5}{6x^2y}-\frac{1}{4xy^2}=\frac{5\cdot2y}{12x^2y^2}-\frac{1\cdot3x}{12x^2y^2}=\frac{10y-3x}{12x^2y^2}.$$

So the result is $\dfrac{10y-3x}{12x^2y^2}$.
:::

:::example Denominators with no common factor
Work out $\dfrac1x+\dfrac{1}{x+3}$.

**Solution.** The denominators $x$ and $x+3$ have no common factor, so the common denominator is $x(x+3)$. We have
$$\frac1x+\frac{1}{x+3}=\frac{x+3}{x(x+3)}+\frac{x}{x(x+3)}=\frac{2x+3}{x(x+3)}.$$

So $\dfrac1x+\dfrac{1}{x+3}=\dfrac{2x+3}{x(x+3)}$.
:::

When a denominator can be factorised, the result often simplifies nicely.

:::example A denominator with a special product
Work out $\dfrac{1}{x-2}-\dfrac{4}{x^2-4}$.

**Solution.** We have $x^2-4=(x-2)(x+2)$, so the common denominator is $(x-2)(x+2)$. Hence
$$\frac{1}{x-2}-\frac{4}{x^2-4}=\frac{x+2}{(x-2)(x+2)}-\frac{4}{(x-2)(x+2)}=\frac{x-2}{(x-2)(x+2)}=\frac{1}{x+2}.$$

So the result is $\dfrac{1}{x+2}$.
:::

## Opposite fractions and subtraction

Two fractions whose sum is $0$ are called **opposite fractions**. The opposite of $\dfrac{A}{B}$ is $-\dfrac{A}{B}=\dfrac{-A}{B}$. Subtraction is addition of the opposite:
$$\frac{A}{B}-\frac{C}{D}=\frac{A}{B}+\left(-\frac{C}{D}\right).$$

When two denominators differ only in sign (like $x-1$ and $1-x$), we change the signs of one fraction so that the denominators match.

:::example Opposite denominators
Work out $\dfrac{x}{x-1}+\dfrac{2}{1-x}$.

**Solution.** We have $\dfrac{2}{1-x}=\dfrac{-2}{x-1}$ (changing the signs of numerator and denominator). Hence
$$\frac{x}{x-1}+\frac{2}{1-x}=\frac{x}{x-1}+\frac{-2}{x-1}=\frac{x-2}{x-1}.$$

So the result is $\dfrac{x-2}{x-1}$.
:::

Now we add and subtract three fractions, then simplify.

:::example Three fractions
Work out $\dfrac{x}{x+1}+\dfrac{1}{x-1}-\dfrac{2x}{x^2-1}$.

**Solution.** We have $x^2-1=(x-1)(x+1)$, so the common denominator is $x^2-1$. Hence
$$\begin{aligned}\frac{x}{x+1}+\frac{1}{x-1}-\frac{2x}{x^2-1}&=\frac{x(x-1)+(x+1)-2x}{x^2-1}\\&=\frac{x^2-2x+1}{x^2-1}\\&=\frac{(x-1)^2}{(x-1)(x+1)}=\frac{x-1}{x+1}.\end{aligned}$$

So the result is $\dfrac{x-1}{x+1}$.
:::

We return to the two taps at the start, using the four steps of solving a problem.

:::example Two taps together
One tap fills a tank in $x$ hours and the other in $x+3$ hours (an imagined case). Write a fraction for the part of the tank filled in one hour when both taps are open. For $x=6$, how long do the two taps take together to fill the tank?

**Solution.**

*Understand.* Each hour the taps fill $\dfrac1x$ and $\dfrac1{x+3}$ of the tank; we need to add them, then find the time when $x=6$.

*Plan.* Write over a common denominator to add; the time to fill the tank is $1$ divided by the part filled in one hour.

*Solve.* By the example above, the taps together fill $\dfrac{2x+3}{x(x+3)}$ of the tank each hour. For $x=6$ this is $\dfrac{15}{6\cdot9}=\dfrac{5}{18}$ of the tank per hour. The time to fill the tank is $1\div\dfrac{5}{18}=\dfrac{18}{5}=3.6$ (hours).

*Look back.* Check with numerical fractions: $\dfrac16+\dfrac19=\dfrac{5}{18}$. The result is reasonable because two taps together are faster than the faster tap alone ($6$ hours). If $x$ increases, each tap is slower, so the time to fill the tank increases.

So the two taps together fill the tank in $3.6$ hours ($3$ hours $36$ minutes).
:::

:::warning Mistakes to watch out for
- **Adding numerators and denominators.** Wrong: $\dfrac1x+\dfrac1y=\dfrac{2}{x+y}$. Why it is wrong: for $x=y=1$ the left side is $2$ and the right side is $1$. Right: $\dfrac1x+\dfrac1y=\dfrac{y+x}{xy}$.
- **Forgetting to change signs when subtracting.** Wrong: $\dfrac{x+3}{x}-\dfrac{x-1}{x}=\dfrac{x+3-x-1}{x}=\dfrac2x$. Why it is wrong: the minus sign must change the sign of the $-1$ as well. Right: $\dfrac{x+3-(x-1)}{x}=\dfrac4x$.
- **Multiplying only the denominator.** Wrong: $\dfrac1x+\dfrac{1}{x+3}=\dfrac{1}{x(x+3)}+\dfrac{1}{x(x+3)}$. Why it is wrong: multiplying a denominator without multiplying the numerator changes the value of the fraction. Right: multiply both: $\dfrac{x+3}{x(x+3)}+\dfrac{x}{x(x+3)}$.
:::

**Connections.** This lesson relies directly on the basic property and simplification in [algebraic fractions](lesson:intro-algebraic-fractions), and on factorising polynomials. It prepares the lesson on [multiplying and dividing algebraic fractions](lesson:multiply-divide-algebraic-fractions), and later the solving of equations with the unknown in a denominator.

## Key terms

:::terms
- addition of algebraic fractions | phép cộng phân thức
- subtraction of algebraic fractions | phép trừ phân thức
- writing over a common denominator | quy đồng mẫu thức
- common denominator | mẫu thức chung
- multiplying factor | nhân tử phụ
- opposite fraction | phân thức đối
- factorising | phân tích thành nhân tử
- simplify | rút gọn
:::

## Summary

- Same denominator: $\dfrac AC\pm\dfrac BC=\dfrac{A\pm B}{C}$; when subtracting, change the sign of every term of the second numerator.
- Different denominators: factorise the denominators, find the common denominator, find the multiplying factors, multiply numerator and denominator, then add or subtract.
- Subtraction is addition of the opposite fraction: $\dfrac AB-\dfrac CD=\dfrac AB+\left(-\dfrac CD\right)$.
- Opposite denominators (like $x-1$ and $1-x$): change the signs of one fraction first.
- After calculating, always simplify the result if possible.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Work out:

a) $\dfrac{2x+1}{x+3}+\dfrac{x+8}{x+3}$.

b) $\dfrac{4x-5}{x^2+1}-\dfrac{x-2}{x^2+1}$.

::hint
**What you need:** with the same denominator, add (subtract) the numerators and keep the denominator.

**Steps:**
1. a) Add the numerators, then simplify.
2. b) Put the second numerator in brackets when subtracting.

::solution
a) $\dfrac{2x+1}{x+3}+\dfrac{x+8}{x+3}=\dfrac{3x+9}{x+3}=\dfrac{3(x+3)}{x+3}=3$.

b) $\dfrac{4x-5}{x^2+1}-\dfrac{x-2}{x^2+1}=\dfrac{4x-5-(x-2)}{x^2+1}=\dfrac{3x-3}{x^2+1}$.

So a) $3$; b) $\dfrac{3x-3}{x^2+1}$.

**Answer.** a) $3$. b) $\dfrac{3x-3}{x^2+1}$.
:::

:::exercise
Work out $\dfrac{3}{4x}+\dfrac{5}{6x^2}$.

::hint
**What you need:** the common denominator contains the lowest common multiple of the coefficients and the highest power of each variable.

**Steps:**
1. Find the common denominator of $4x$ and $6x^2$.
2. Find the multiplying factors, then add.

::solution
The common denominator is $12x^2$; the multiplying factors are $3x$ and $2$. Hence
$$\frac{3}{4x}+\frac{5}{6x^2}=\frac{9x}{12x^2}+\frac{10}{12x^2}=\frac{9x+10}{12x^2}.$$

So the result is $\dfrac{9x+10}{12x^2}$.

**Answer.** $\dfrac{9x+10}{12x^2}$.
:::

:::exercise
Work out $\dfrac{2}{x}-\dfrac{3}{x+1}$.

::hint
**What you need:** if the denominators have no common factor, the common denominator is their product.

**Steps:**
1. The common denominator is $x(x+1)$.
2. Write over it, then subtract the numerators, watching the signs.

::solution
We have
$$\frac{2}{x}-\frac{3}{x+1}=\frac{2(x+1)-3x}{x(x+1)}=\frac{2-x}{x(x+1)}.$$

So the result is $\dfrac{2-x}{x(x+1)}$.

**Answer.** $\dfrac{2-x}{x(x+1)}$.
:::

:::exercise
Work out $\dfrac{x}{x^2-4}+\dfrac{1}{x+2}$.

::hint
**What you need:** $x^2-4=(x-2)(x+2)$.

**Steps:**
1. The common denominator is $x^2-4$.
2. The multiplying factor of $\dfrac{1}{x+2}$ is $x-2$.

::solution
We have
$$\frac{x}{x^2-4}+\frac{1}{x+2}=\frac{x+(x-2)}{(x-2)(x+2)}=\frac{2x-2}{x^2-4}.$$

So the result is $\dfrac{2x-2}{x^2-4}$.

**Answer.** $\dfrac{2x-2}{x^2-4}$.
:::

:::exercise
Work out $\dfrac{3}{x-2}-\dfrac{5}{2-x}$.

::hint
**What you need:** $\dfrac{5}{2-x}=\dfrac{-5}{x-2}$.

**Steps:**
1. Change signs so that the two denominators match.
2. Combine the numerators, watching the signs.

::solution
We have $-\dfrac{5}{2-x}=\dfrac{5}{x-2}$. Hence
$$\frac{3}{x-2}-\frac{5}{2-x}=\frac{3}{x-2}+\frac{5}{x-2}=\frac{8}{x-2}.$$

So the result is $\dfrac{8}{x-2}$.

**Answer.** $\dfrac{8}{x-2}$.
:::

:::exercise
Work out $\dfrac{1}{x^2-x}+\dfrac{1}{x^2+x}$.

::hint
**What you need:** $x^2-x=x(x-1)$ and $x^2+x=x(x+1)$.

**Steps:**
1. Find the common denominator $x(x-1)(x+1)$.
2. Add, then simplify.

::solution
We have
$$\frac{1}{x(x-1)}+\frac{1}{x(x+1)}=\frac{(x+1)+(x-1)}{x(x-1)(x+1)}=\frac{2x}{x(x^2-1)}=\frac{2}{x^2-1}.$$

So the result is $\dfrac{2}{x^2-1}$.

**Answer.** $\dfrac{2}{x^2-1}$.
:::

:::exercise
A car travels $60$ km at $x$ km/h, then returns along the same road at $(x+10)$ km/h. Write a fraction for the total time of the journey there and back, simplify it, then evaluate it for $x=40$.

::hint
**What you need:** time equals distance divided by speed.

**Steps:**
1. Write $\dfrac{60}{x}+\dfrac{60}{x+10}$.
2. Write over a common denominator, then substitute $x=40$.

::solution
The total time is
$$\frac{60}{x}+\frac{60}{x+10}=\frac{60(x+10)+60x}{x(x+10)}=\frac{120(x+5)}{x(x+10)}\ \text{(hours)}.$$
For $x=40$: $\dfrac{120\cdot45}{40\cdot50}=2.7$ (hours).

Check: $\dfrac{60}{40}+\dfrac{60}{50}=1.5+1.2=2.7$.

So the total time is $\dfrac{120(x+5)}{x(x+10)}$ hours, which is $2.7$ hours when $x=40$.

**Answer.** $\dfrac{120(x+5)}{x(x+10)}$ hours; $2.7$ hours.
:::

:::exercise
Suppose An can finish a job alone in $x$ hours, and Binh can finish it alone in $2x$ hours. What part of the job do they do together in one hour? If $x=6$, how long do they take to finish the job together?

::hint
**What you need:** the part of a job done in one hour is $1$ divided by the time to finish it.

**Steps:**
1. Write $\dfrac1x+\dfrac{1}{2x}$.
2. The time together is $1$ divided by the part done per hour.

::solution
In one hour they do $\dfrac1x+\dfrac1{2x}=\dfrac{2}{2x}+\dfrac{1}{2x}=\dfrac{3}{2x}$ of the job. The time to finish together is $1\div\dfrac{3}{2x}=\dfrac{2x}{3}$ (hours). For $x=6$: $\dfrac{2\cdot6}{3}=4$ (hours).

So they do $\dfrac{3}{2x}$ of the job per hour and finish in $4$ hours when $x=6$.

**Answer.** $\dfrac{3}{2x}$; $4$ hours.
:::

:::exercise
Simplify $A=\dfrac{1}{x-1}-\dfrac{1}{x+1}$ and find $A$ at $x=3$. (Revise [simplifying fractions](lesson:intro-algebraic-fractions).)

::hint
**What you need:** the common denominator is $(x-1)(x+1)$.

**Steps:**
1. Write over a common denominator, then subtract.
2. Substitute $x=3$ into the result.

::solution
Condition: $x\neq\pm1$. We have
$$A=\frac{(x+1)-(x-1)}{(x-1)(x+1)}=\frac{2}{x^2-1}.$$
For $x=3$: $A=\dfrac{2}{9-1}=\dfrac14$.

Check: $\dfrac12-\dfrac14=\dfrac14$.

So $A=\dfrac{2}{x^2-1}$, and $A=\dfrac14$ at $x=3$.

**Answer.** $\dfrac{2}{x^2-1}$; $\dfrac14$.
:::

:::exercise Challenge
Prove that
$$\frac{1}{x(x+1)}+\frac{1}{(x+1)(x+2)}+\frac{1}{(x+2)(x+3)}=\frac{3}{x(x+3)}.$$

::hint
**What you need:** $\dfrac{1}{n(n+1)}=\dfrac1n-\dfrac{1}{n+1}$.

**Steps:**
1. Write each fraction as a difference of two fractions.
2. Add them and notice which terms cancel.

::solution
Since $\dfrac1n-\dfrac1{n+1}=\dfrac{1}{n(n+1)}$, the left-hand side equals
$$\left(\frac1x-\frac1{x+1}\right)+\left(\frac1{x+1}-\frac1{x+2}\right)+\left(\frac1{x+2}-\frac1{x+3}\right)=\frac1x-\frac1{x+3}.$$
Over a common denominator: $\dfrac1x-\dfrac1{x+3}=\dfrac{(x+3)-x}{x(x+3)}=\dfrac{3}{x(x+3)}$.

So the identity is proved.

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
The result of $\dfrac{2x+3}{x-1}+\dfrac{x-4}{x-1}$ is
A. $\dfrac{3x-1}{2x-2}$.
B. $\dfrac{3x-1}{x-1}$.
C. $\dfrac{3x+7}{x-1}$.
D. $\dfrac{3x-1}{x^2-1}$.
::key B
With the same denominator we add numerators: $2x+3+x-4=3x-1$. A adds the denominators too, C gets the sign of $-4$ wrong, D changes the denominator.

::mc
The result of $\dfrac{5x+2}{x}-\dfrac{2x-1}{x}$ is
A. $\dfrac{3x+1}{x}$.
B. $\dfrac{7x+1}{x}$.
C. $\dfrac{3x+3}{x}$.
D. $3$.
::key C
$5x+2-(2x-1)=3x+3$. A forgets to change the sign of $-1$, B adds instead of subtracting, D simplifies wrongly.

::mc
The result of $\dfrac1x+\dfrac1{x+1}$ is
A. $\dfrac{2}{2x+1}$.
B. $\dfrac{1}{x(x+1)}$.
C. $\dfrac{2x}{x(x+1)}$.
D. $\dfrac{2x+1}{x(x+1)}$.
::key D
$\dfrac{x+1}{x(x+1)}+\dfrac{x}{x(x+1)}=\dfrac{2x+1}{x(x+1)}$. A adds numerators and denominators; B forgets the multiplying factors; C gets the numerator wrong.

::mc
The common denominator of $\dfrac{1}{x-2}$ and $\dfrac{3}{x^2-4}$ is
A. $x^2-4$.
B. $(x-2)(x^2-4)$.
C. $x-2$.
D. $x+2$.
::key A
$x^2-4=(x-2)(x+2)$ already contains the factor $x-2$, so the common denominator is $x^2-4$. B repeats the factor $x-2$ unnecessarily.

::tf
Let $P=\dfrac{1}{x-2}-\dfrac{4}{x^2-4}$ ($x\neq\pm2$). Decide whether each statement is true or false.
a) A common denominator of the two fractions is $(x-2)(x+2)$.
b) $P=\dfrac{x-3}{x^2-4}$.
c) $P=\dfrac{1}{x+2}$.
d) The value of $P$ at $x=3$ is $\dfrac15$.
::key T F T T
a) True: $x^2-4=(x-2)(x+2)$. b) False: the numerator is $(x+2)-4=x-2$, not $x-3$. c) True: $\dfrac{x-2}{(x-2)(x+2)}=\dfrac1{x+2}$. d) True: $\dfrac{1}{3+2}=\dfrac15$.

::sa
Two taps fill a tank in $6$ hours and in $9$ hours. What part of the tank do both taps fill together in one hour? (to 2 decimal places)
::key 0.28
$\dfrac16+\dfrac19=\dfrac{5}{18}\approx0.28$.

::sa
A car travels $60$ km at $40$ km/h, then returns $60$ km at $50$ km/h. What is the total travelling time in hours?
::key 2.7
$\dfrac{60}{40}+\dfrac{60}{50}=1.5+1.2=2.7$.
:::
