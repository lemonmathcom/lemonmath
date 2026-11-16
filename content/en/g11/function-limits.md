---
title: Limits of functions
description: Understand limits of functions at a point, one-sided limits, limits at infinity and infinite limits; evaluate 0/0 forms; instantaneous velocity.
minutes: 25
---

:::goals
- Understand the meaning of the limit of a function at a point, even when the function is not defined at that point.
- Find limits by the rules and by substitution, factorising or multiplying by a conjugate expression for the form $\dfrac00$.
- Use one-sided limits to decide whether a limit exists.
- Find limits at infinity and recognise infinite limits.
:::

An object falls freely (ignoring air resistance) from rest. After $t$ seconds it has fallen $s(t)=4.9t^2$ metres. From the first second to the time $1+h$, the average velocity is $\dfrac{s(1+h)-s(1)}{h}$.

What is the velocity of the object at exactly $t=1$ second? We cannot put $h=0$, because then the numerator and the denominator are both $0$. But we can let $h$ get smaller and smaller and see which number the average velocity approaches. That is the meaning of the limit of a function.

## Finite limits of a function at a point

### Explore: a function not defined at a point

Take $f(x)=\dfrac{x^2-1}{x-1}$. The function is not defined at $x=1$ because the denominator is $0$. We compute $f(x)$ for $x$ near $1$:

| $x$ | $0.9$ | $0.99$ | $0.999$ | $1.001$ | $1.01$ | $1.1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |

As $x$ approaches $1$ from both sides, $f(x)$ approaches $2$. Indeed, for $x\ne1$ we have $f(x)=\dfrac{(x-1)(x+1)}{x-1}=x+1$: the graph is the line $y=x+1$ with the point $(1, 2)$ missing.

:::graph The graph of $y=\dfrac{x^2-1}{x-1}$: the line $y=x+1$ with the point $(1, 2)$ missing
alt: The line y = x + 1 through the corresponding points, with a missing point of height 2 at x = 1
x: -2..4
y: -1..5
plot: x+1
point: (1, 2) "(1, 2)" above
:::

:::definition Finite limit of a function at a point
Let $f$ be defined on an interval containing $x_0$ (possibly except at $x_0$). We say that $f$ has the **limit** $L$ as $x$ tends to $x_0$, written $\lim\limits_{x\to x_0}f(x)=L$, if for every sequence $(x_n)$ in the domain with $x_n\ne x_0$ and $\lim x_n=x_0$, we have $\lim f(x_n)=L$.
:::

The limit at $x_0$ depends only on the values of $f(x)$ for $x$ near $x_0$ and different from $x_0$; it does not depend on whether $f(x_0)$ is defined, or what it equals.

:::theorem Rules for limits
1. $\lim\limits_{x\to x_0}c=c$ and $\lim\limits_{x\to x_0}x=x_0$.
2. If $\lim\limits_{x\to x_0}f(x)=L$ and $\lim\limits_{x\to x_0}g(x)=M$ then
$$\lim(f\pm g)=L\pm M,\quad\lim(fg)=LM,\quad\lim\dfrac fg=\dfrac LM\ (M\ne0).$$
3. For a polynomial $P$, $\lim\limits_{x\to x_0}P(x)=P(x_0)$; for a fraction $\dfrac{P(x)}{Q(x)}$ with $Q(x_0)\ne0$, $\lim\limits_{x\to x_0}\dfrac{P(x)}{Q(x)}=\dfrac{P(x_0)}{Q(x_0)}$.
:::

When substituting $x=x_0$ gives the form $\dfrac00$, we do not yet know the limit. We transform the expression (factorise and cancel, or multiply by a conjugate expression) to remove the factor that makes the numerator and the denominator both $0$.

:::example Instantaneous velocity of a falling object
For a freely falling object with $s(t)=4.9t^2$ (metres), find the limit of the average velocity over $[1, 1+h]$ as $h\to0$.

**Understand.** The average velocity is $\dfrac{s(1+h)-s(1)}{h}$ for $h\ne0$; we need its limit as $h\to0$.

**Plan.** Substituting $h=0$ gives the form $\dfrac00$, so we expand the numerator, cancel $h$, and only then let $h\to0$.

**Solve.** For $h\ne0$ we have
$$\dfrac{s(1+h)-s(1)}{h}=\dfrac{4.9(1+h)^2-4.9}{h}=\dfrac{4.9(2h+h^2)}{h}=4.9(2+h)=9.8+4.9h.$$
As $h\to0$, $9.8+4.9h\to9.8$.

So the instantaneous velocity at $t=1$ second is $9.8$ m/s.

**Look back.** For $h=0.1$ the average velocity is $9.8+0.49=10.29$ m/s; for $h=0.001$ it is $9.8049$ m/s: approaching $9.8$. The number $9.8$ agrees with the acceleration due to gravity $g$, because an object falling from rest has velocity $gt=9.8$ m/s after $1$ second. This is the first example of the idea of a derivative, which we will meet in the next topic.
:::

:::example Direct substitution
Find a) $\lim\limits_{x\to2}(x^2+3x-1)$; b) $\lim\limits_{x\to3}\dfrac{x+1}{x^2-2}$.

**Solution.** a) It is a polynomial, so substitute $x=2$: $4+6-1=9$.

b) The denominator at $x=3$ is $9-2=7\ne0$, so substitute $x=3$: $\dfrac{3+1}{9-2}=\dfrac47$.

So a) $9$; b) $\dfrac47$.
:::

:::example The form $\dfrac00$: factorising
Find a) $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}$; b) $\lim\limits_{x\to1}\dfrac{x^2-3x+2}{x^2-1}$.

**Solution.** a) Substituting $x=2$ gives $\dfrac00$. For $x\ne2$: $\dfrac{x^2-4}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.

b) Substituting $x=1$ gives $\dfrac00$. For $x\ne1$: $\dfrac{x^2-3x+2}{x^2-1}=\dfrac{(x-1)(x-2)}{(x-1)(x+1)}=\dfrac{x-2}{x+1}\to\dfrac{1-2}{1+1}=-\dfrac12$.

So a) $4$; b) $-\dfrac12$.
:::

:::example The form $\dfrac00$: multiplying by a conjugate
Find $\lim\limits_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$.

**Solution.** Substituting $x=0$ gives $\dfrac00$. Multiply the numerator and the denominator by $\sqrt{x+4}+2$:
$$\dfrac{\sqrt{x+4}-2}{x}=\dfrac{(x+4)-4}{x\left(\sqrt{x+4}+2\right)}=\dfrac{1}{\sqrt{x+4}+2}\to\dfrac{1}{2+2}=\dfrac14.$$
So the limit is $\dfrac14$.
:::

## One-sided limits

Sometimes $f(x)$ tends to different numbers as $x$ tends to $x_0$ from the right and from the left. Then we look at one-sided limits: $\lim\limits_{x\to x_0^+}f(x)$ (for $x>x_0$) and $\lim\limits_{x\to x_0^-}f(x)$ (for $x<x_0$).

:::theorem Limits and one-sided limits
$\lim\limits_{x\to x_0}f(x)=L$ if and only if $\lim\limits_{x\to x_0^+}f(x)=\lim\limits_{x\to x_0^-}f(x)=L$.
:::

:::example Postage for a parcel
Suppose the postage for a parcel of weight $x$ kg is $f(x)=20$ (thousand dong) if $0<x\le1$ and $f(x)=30$ if $1<x\le2$. Study the limit of $f(x)$ as $x\to1$. Compare with the function $g(x)=x+1$ if $x<1$ and $g(x)=3-x$ if $x\ge1$ as $x\to1$.

**Solution.** For $f$: as $x\to1^-$ we have $0<x\le1$, so $f(x)=20$ and the left-hand limit is $20$; as $x\to1^+$ we have $1<x\le2$, so $f(x)=30$ and the right-hand limit is $30$. The two limits differ, so $\lim\limits_{x\to1}f(x)$ does not exist.

For $g$: as $x\to1^-$, $g(x)=x+1\to2$; as $x\to1^+$, $g(x)=3-x\to2$. The two limits are equal, so $\lim\limits_{x\to1}g(x)=2$.

So $f$ has no limit at $1$ (the postage jumps), while $g$ has the limit $2$.
:::

## Limits at infinity and infinite limits

We also consider $x$ growing without bound: $\lim\limits_{x\to+\infty}f(x)=L$ if $f(x)\to L$ for every sequence $x_n\to+\infty$; similarly as $x\to-\infty$.

:::theorem Basic limits
1. $\lim\limits_{x\to\pm\infty}\dfrac{1}{x^k}=0$ for a positive integer $k$ (and $\lim\limits_{x\to+\infty}x^k=+\infty$).
2. $\lim\limits_{x\to x_0^+}\dfrac{1}{x-x_0}=+\infty$ and $\lim\limits_{x\to x_0^-}\dfrac{1}{x-x_0}=-\infty$.
3. For a fraction in $x$ as $x\to\pm\infty$, divide the numerator and the denominator by the highest power of $x$.
:::

:::example Limits at infinity and infinite limits
Find a) $\lim\limits_{x\to+\infty}\dfrac{2x^2+x}{x^2+3}$; b) $\lim\limits_{x\to1^+}\dfrac{1}{x-1}$ and $\lim\limits_{x\to1^-}\dfrac{1}{x-1}$.

**Solution.** a) Divide the numerator and the denominator by $x^2$: $\dfrac{2+\frac1x}{1+\frac3{x^2}}\to\dfrac{2+0}{1+0}=2$.

b) As $x\to1^+$, $x-1$ is positive and tends to $0$, so $\dfrac{1}{x-1}\to+\infty$. As $x\to1^-$, $x-1$ is negative and tends to $0$, so $\dfrac{1}{x-1}\to-\infty$.

So a) $2$; b) the right-hand limit is $+\infty$ and the left-hand limit is $-\infty$, so the limit at $1$ does not exist.
:::

**Connections.** The limit of a function extends the limit of a sequence from the previous lesson: the definition uses exactly the limit of the sequence $f(x_n)$. The instantaneous velocity problem at the start, the limit of $\dfrac{s(1+h)-s(1)}{h}$ as $h\to0$, is exactly the derivative of $s$ at $t=1$. Limits also let us say that a function is continuous: not "broken" at a point.

:::warning Common mistakes
- **Thinking that a function not defined at $x_0$ has no limit at $x_0$.** Wrong: $f(x)=\dfrac{x^2-1}{x-1}$ is not defined at $1$, so it has no limit at $1$. Why it is wrong: a limit only looks at values of $x$ near $x_0$ and different from $x_0$. Right: $\lim\limits_{x\to1}f(x)=2$.
- **Treating the form $\dfrac00$ as equal to $0$ or as non-existent.** Wrong: $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}=\dfrac00=0$. Why it is wrong: $\dfrac00$ is an indeterminate form and needs a transformation. Right: cancel $\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.
- **Ignoring one-sided limits.** Wrong: the function $\dfrac{|x|}{x}$ has the limit $1$ at $0$. Why it is wrong: the right-hand limit is $1$ but the left-hand limit is $-1$. Right: the two one-sided limits differ, so the limit does not exist.
- **Writing $\lim\limits_{x\to0}\dfrac1x=+\infty$.** Wrong: $\dfrac1x\to+\infty$ as $x\to0$. Why it is wrong: $x\to0^-$ gives $\dfrac1x\to-\infty$. Right: only $\lim\limits_{x\to0^+}\dfrac1x=+\infty$; the limit at $0$ does not exist.
:::

## Key terms

:::terms
- limit of a function | giới hạn của hàm số
- one-sided limit | giới hạn một phía
- left-hand limit | giới hạn bên trái
- right-hand limit | giới hạn bên phải
- limit at infinity | giới hạn tại vô cực
- infinite limit | giới hạn vô cực
- indeterminate form | dạng chưa xác định
- conjugate expression | biểu thức liên hợp
- instantaneous velocity | vận tốc tức thời
:::

## Summary

- $\lim\limits_{x\to x_0}f(x)=L$ if every sequence $x_n\to x_0$ ($x_n\ne x_0$) gives $f(x_n)\to L$; the limit does not depend on $f(x_0)$.
- The limit of a sum, difference, product or quotient is the sum, difference, product or quotient of the limits (for a quotient the denominator's limit must be non-zero).
- For polynomials and fractions whose denominator is non-zero at $x_0$, substitute $x=x_0$.
- The form $\dfrac00$: factorise and cancel, or multiply by a conjugate expression.
- The limit exists if and only if the left-hand limit equals the right-hand limit.
- $\lim\limits_{x\to\pm\infty}\dfrac1{x^k}=0$; for a fraction as $x\to\pm\infty$, divide by the highest power; $\lim\limits_{x\to x_0^\pm}\dfrac{1}{x-x_0}=\pm\infty$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find a) $\lim\limits_{x\to3}(x^2-2x+1)$; b) $\lim\limits_{x\to-1}\dfrac{2x+3}{x^2+2}$.

::hint
**What you need:** for polynomials and fractions with a non-zero denominator, substitute $x=x_0$.

**Steps:**
1. Substitute the value $x_0$.
2. For part b, check that the denominator is non-zero.

::solution
a) $9-6+1=4$. b) The denominator at $x=-1$ is $1+2=3\ne0$, so $\dfrac{2(-1)+3}{3}=\dfrac13$.

**Answer.** a) $4$; b) $\dfrac13$.
:::

:::exercise
Find a) $\lim\limits_{x\to3}\dfrac{x^2-9}{x-3}$; b) $\lim\limits_{x\to2}\dfrac{x^2-5x+6}{x-2}$.

::hint
**What you need:** the form $\dfrac00$: factorise and cancel.

**Steps:**
1. Factorise the numerator.
2. Cancel the common factor and substitute $x_0$.

::solution
a) $\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. b) $\dfrac{(x-2)(x-3)}{x-2}=x-3\to-1$.

**Answer.** a) $6$; b) $-1$.
:::

:::exercise
Find $\lim\limits_{x\to0}\dfrac{\sqrt{x+1}-1}{x}$.

::hint
**What you need:** multiply the numerator and the denominator by the conjugate $\sqrt{x+1}+1$.

**Steps:**
1. Use $(a-b)(a+b)=a^2-b^2$.
2. Cancel $x$ and substitute $x=0$.

::solution
$\dfrac{\sqrt{x+1}-1}{x}=\dfrac{(x+1)-1}{x\left(\sqrt{x+1}+1\right)}=\dfrac{1}{\sqrt{x+1}+1}\to\dfrac12$.

**Answer.** $\dfrac12$.
:::

:::exercise
Find a) $\lim\limits_{x\to+\infty}\dfrac{3x^2-x+1}{x^2+2}$; b) $\lim\limits_{x\to+\infty}\dfrac{x+1}{x^2+1}$.

::hint
**What you need:** divide the numerator and the denominator by the highest power of $x$.

**Steps:**
1. Part a: divide by $x^2$.
2. Part b: divide by $x^2$ and note the degrees.

::solution
a) $\dfrac{3-\frac1x+\frac1{x^2}}{1+\frac2{x^2}}\to3$. b) $\dfrac{\frac1x+\frac1{x^2}}{1+\frac1{x^2}}\to0$.

**Answer.** a) $3$; b) $0$.
:::

:::exercise
For a freely falling object with $s(t)=4.9t^2$ (metres), find the instantaneous velocity at $t=2$ seconds as the limit of the average velocity over $[2, 2+h]$ as $h\to0$.

::hint
**What you need:** $\dfrac{s(2+h)-s(2)}{h}$; cancel $h$ before letting $h\to0$.

**Steps:**
1. Expand $(2+h)^2=4+4h+h^2$.
2. Cancel, then take the limit.

::solution
$\dfrac{4.9(2+h)^2-4.9\cdot4}{h}=\dfrac{4.9(4h+h^2)}{h}=4.9(4+h)=19.6+4.9h\to19.6$.

**Answer.** $19.6$ m/s.
:::

:::exercise
Take the function $f(x)=\dfrac{|x-2|}{x-2}$. Find $\lim\limits_{x\to2^+}f(x)$ and $\lim\limits_{x\to2^-}f(x)$, and say whether $\lim\limits_{x\to2}f(x)$ exists.

::hint
**What you need:** $|x-2|=x-2$ when $x>2$ and $|x-2|=-(x-2)$ when $x<2$.

**Steps:**
1. Simplify $f(x)$ on each side.
2. Compare the two one-sided limits.

::solution
When $x>2$, $f(x)=1$, so the right-hand limit is $1$. When $x<2$, $f(x)=-1$, so the left-hand limit is $-1$. The two limits differ, so $\lim\limits_{x\to2}f(x)$ does not exist.

**Answer.** $1$ and $-1$; the limit at $2$ does not exist.
:::

:::exercise
Take the function $f(x)=\dfrac{x^2-1}{x-1}$. Decide whether each statement is true or false:

a) $f$ is defined at $x=1$.

b) $\lim\limits_{x\to1}f(x)=2$.

c) $\lim\limits_{x\to0}f(x)=1$.

d) $\lim\limits_{x\to+\infty}f(x)=1$.

::hint
**What you need:** for $x\ne1$, $f(x)=x+1$.

**Steps:**
1. Simplify $f(x)$.
2. Find the limits of $x+1$.

::solution
a) **False**: the denominator is $0$ at $x=1$.

b) **True**: $x+1\to2$.

c) **True**: $x+1\to1$ as $x\to0$.

d) **False**: $x+1\to+\infty$.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
Find $\lim\limits_{x\to2}\dfrac{x^3-8}{x-2}$.

::hint
**What you need:** $x^3-8=(x-2)(x^2+2x+4)$.

**Steps:**
1. Factorise the numerator.
2. Cancel and substitute $x=2$.

::solution
$\dfrac{(x-2)(x^2+2x+4)}{x-2}=x^2+2x+4\to4+4+4=12$.

**Answer.** $12$.
:::

:::exercise Revision
Using the definition of the limit of a function through sequences and the limits of sequences from the previous lesson, show that $\lim\limits_{x\to2}x^2=4$ by considering the sequence $x_n=2+\dfrac1n$.

::hint
**What you need:** $\lim x_n=2$ and $f(x_n)=x_n^2$; $\lim\dfrac1n=0$.

**Steps:**
1. Find $x_n^2$.
2. Take the limit of the sequence.

::solution
The sequence $x_n=2+\dfrac1n\ne2$ has $\lim x_n=2$. We have $f(x_n)=\left(2+\dfrac1n\right)^2=4+\dfrac4n+\dfrac1{n^2}\to4$. The result is the same for every sequence $x_n\to2$ (by the rule for the limit of a product), so $\lim\limits_{x\to2}x^2=4$.

**Answer.** $\lim\limits_{x\to2}x^2=4$.
:::

:::exercise Challenge
Find $\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}$.

::hint
**What you need:** multiply the numerator and the denominator by $\sqrt{1+x}+\sqrt{1-x}$.

**Steps:**
1. The numerator becomes $(1+x)-(1-x)=2x$.
2. Cancel $x$.

::solution
$\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}=\dfrac{(1+x)-(1-x)}{x\left(\sqrt{1+x}+\sqrt{1-x}\right)}=\dfrac{2}{\sqrt{1+x}+\sqrt{1-x}}\to\dfrac{2}{1+1}=1$.

**Answer.** $1$.
:::

## Mini test

:::quiz
::mc
$\lim\limits_{x\to2}\dfrac{x^2+1}{x-1}$ equals
A. $3$.
B. $5$.
C. $+\infty$.
D. $1$.
::key B
The denominator at $x=2$ is non-zero, so substitute $x=2$: $\dfrac{4+1}{2-1}=5$.

::mc
$\lim\limits_{x\to3}\dfrac{x^2-9}{x-3}$ equals
A. $0$.
B. $3$.
C. $6$.
D. does not exist.
::key C
$\dfrac{x^2-9}{x-3}=x+3\to6$. Option A treats the form $\dfrac00$ as $0$.

::mc
$\lim\limits_{x\to+\infty}\dfrac{2x+1}{x-3}$ equals
A. $1$.
B. $+\infty$.
C. $-3$.
D. $2$.
::key D
Divide the numerator and the denominator by $x$: $\dfrac{2+\frac1x}{1-\frac3x}\to2$.

::mc
$\lim\limits_{x\to0^+}\dfrac1x$ equals
A. $+\infty$.
B. $-\infty$.
C. $0$.
D. $1$.
::key A
For $x>0$ getting smaller, $\dfrac1x$ is positive and grows without bound. Option B is the limit as $x\to0^-$.

::tf
Take the function $g(x)=x+2$ if $x<1$ and $g(x)=4-x$ if $x\ge1$. Decide whether each statement is true or false.
a) $\lim\limits_{x\to1^-}g(x)=3$.
b) $\lim\limits_{x\to1^+}g(x)=4$.
c) $\lim\limits_{x\to1}g(x)=3$.
d) $g(1)=4$.
::key T F T F
a) True: $x+2\to3$. b) False: $4-x\to3$. c) True: both one-sided limits equal $3$. d) False: $g(1)=4-1=3$.

::sa
Find $\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}$.
::key 2
$\dfrac{x^2-1}{x-1}=x+1\to2$.

::sa
Find $\lim\limits_{x\to+\infty}\dfrac{5x^2+1}{x^2-2}$.
::key 5
Divide by $x^2$: $\dfrac{5+\frac1{x^2}}{1-\frac2{x^2}}\to5$.
:::
