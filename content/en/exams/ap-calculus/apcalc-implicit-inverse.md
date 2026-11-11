---
title: Chain rule, implicit and inverse functions
description: AP Calculus Unit 3: the chain rule, implicit differentiation, derivatives of inverse functions and inverse trigonometric functions, and higher derivatives.
minutes: 40
---

:::goals
- Differentiate composite functions with the chain rule, including from tables of values.
- Find $\dfrac{dy}{dx}$ by implicit differentiation and use it for tangent lines.
- Compute the derivative of an inverse function at a point.
- Differentiate inverse trigonometric functions and find second derivatives.
:::

Unit 3 completes the toolkit of differentiation. The chain rule appears in nearly every AP Calculus question from here on, often hidden inside a context or a table, and implicit differentiation is the key to the related-rates problems of Unit 4. The derivative of an inverse function at a point is a favorite multiple-choice item that many students find surprising, so it is worth practising until it is automatic.

## The chain rule

:::theorem Chain rule
If $h(x)=f\big(g(x)\big)$, then $h'(x)=f'\big(g(x)\big)\cdot g'(x)$: the derivative of the outside function, evaluated at the inside, times the derivative of the inside.
:::

:::example A power of a polynomial
What is $\dfrac{d}{dx}\left(3x^2+1\right)^4$?
A. $4\left(3x^2+1\right)^3$
B. $24x\left(3x^2+1\right)^3$
C. $4(6x)^3$
D. $6x\left(3x^2+1\right)^4$

**Solution.** Outside: $u^4\to4u^3$; inside: $3x^2+1\to6x$. So the derivative is $4\left(3x^2+1\right)^3\cdot6x=24x\left(3x^2+1\right)^3$: answer **B**. Option A forgets the inside derivative.
:::

:::example The chain rule from a table
The table gives values of differentiable functions $f$ and $g$.

| $x$ | $g(x)$ | $g'(x)$ | $f'(x)$ |
|---|---|---|---|
| $1$ | $2$ | $3$ | $5$ |
| $2$ | $4$ | $-1$ | $-4$ |

Let $h(x)=f\big(g(x)\big)$. What is $h'(1)$?

**Solution.** $h'(1)=f'\big(g(1)\big)\cdot g'(1)=f'(2)\cdot3=(-4)(3)=-12$. The trap is to use $f'(1)=5$: the outside derivative is evaluated at $g(1)$, not at $1$.
:::

## Implicit differentiation

When $y$ is defined by an equation in $x$ and $y$, differentiate both sides with respect to $x$, treating $y$ as a function of $x$: each time you differentiate an expression in $y$, multiply by $\dfrac{dy}{dx}$. Then solve for $\dfrac{dy}{dx}$.

:::example The slope of a circle
Find the slope of the tangent line to the circle $x^2+y^2=25$ at the point $(3, 4)$.

**Solution.** $2x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{x}{y}$. At $(3, 4)$ the slope is $-\dfrac34$. This agrees with geometry: the tangent is perpendicular to the radius, whose slope is $\dfrac43$.
:::

:::example A product inside the equation
The curve $x^2+xy+y^2=7$ passes through $(1, 2)$. Find $\dfrac{dy}{dx}$ at this point.

**Solution.** Differentiate, using the product rule on $xy$:

$$2x+\left(y+x\frac{dy}{dx}\right)+2y\frac{dy}{dx}=0.$$

At $(1, 2)$: $2+2+(1+4)\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac45$.
:::

## Inverse functions

:::theorem Derivative of an inverse function
If $f$ is differentiable and one-to-one, $f(a)=b$ and $f'(a)\ne0$, then
$$\left(f^{-1}\right)'(b)=\frac{1}{f'(a)}.$$
The slopes at matching points of $f$ and $f^{-1}$ are reciprocals.
:::

:::example Without finding the inverse
Let $f(x)=x^3+x+1$. What is the value of $\left(f^{-1}\right)'(3)$?
A. $\dfrac14$
B. $\dfrac{1}{28}$
C. $4$
D. $28$

**Solution.** First find $a$ with $f(a)=3$: $a^3+a+1=3$ gives $a=1$. Then $f'(x)=3x^2+1$, so $f'(1)=4$ and $\left(f^{-1}\right)'(3)=\dfrac14$. The answer is **A**. Option B uses $f'(3)=28$, the classic mistake.
:::

:::note Inverse trigonometric functions
$$\frac{d}{dx}\arcsin x=\frac{1}{\sqrt{1-x^2}},\qquad\frac{d}{dx}\arccos x=-\frac{1}{\sqrt{1-x^2}},\qquad\frac{d}{dx}\arctan x=\frac{1}{1+x^2}.$$
With the chain rule: $\dfrac{d}{dx}\arctan(2x)=\dfrac{2}{1+4x^2}$.
:::

:::example Higher derivatives
For $y=x^4-2x^2$, find $\dfrac{d^2y}{dx^2}$ at $x=1$.

**Solution.** $y'=4x^3-4x$ and $y''=12x^2-4$, so $y''(1)=8$. The second derivative will be used in Unit 5 to study concavity.
:::

:::warning Common traps
- **Forgetting the inside derivative.** $\dfrac{d}{dx}\sin(5x)=5\cos(5x)$, not $\cos(5x)$.
- **Evaluating the outside derivative at the wrong point.** $h'(1)=f'\big(g(1)\big)g'(1)$, not $f'(1)g'(1)$.
- **Forgetting $\dfrac{dy}{dx}$ on $y$ terms** in implicit differentiation: $\dfrac{d}{dx}y^2=2y\dfrac{dy}{dx}$.
- **Inverse derivative at the wrong input.** For $\left(f^{-1}\right)'(b)$, first solve $f(a)=b$, then use $f'(a)$.
:::

:::tip Organize composite functions
Before differentiating, name the layers: "outside $\ln u$, inside $u=x^2+1$". Writing the inside on the side saves more time than it costs, and it prevents the most common chain-rule mistake.
:::

:::terms
- composite function | hàm hợp
- chain rule | quy tắc đạo hàm hàm hợp (quy tắc chuỗi)
- implicit differentiation | đạo hàm hàm ẩn
- inverse function | hàm ngược
- one-to-one | đơn ánh (một đối một)
- inverse trigonometric function | hàm lượng giác ngược
- second derivative | đạo hàm cấp hai
:::

## Similar exercises

:::exercise Free response
For $f(x)=\sqrt{x^2+9}$, find $f'(4)$.

::hint
**What you need:** the chain rule with outside $\sqrt u$ and inside $u=x^2+9$.

**Steps:**
1. $f'(x)=\dfrac{2x}{2\sqrt{x^2+9}}$.
2. Substitute $x=4$.

::solution
$f'(x)=\dfrac{x}{\sqrt{x^2+9}}$, so $f'(4)=\dfrac45$.
:::

:::exercise Multiple choice
For $g(x)=\ln\left(x^2+1\right)$, what is $g'(1)$?
A. $\dfrac12$
B. $1$
C. $2$
D. $\ln2$

::hint
**What you need:** $\dfrac{d}{dx}\ln u=\dfrac{u'}{u}$.

**Steps:**
1. $g'(x)=\dfrac{2x}{x^2+1}$.

::solution
$g'(1)=\dfrac22=1$: answer **B**. Option D is $g(1)$.
:::

:::exercise Free response
Find the slope of the curve $xy=6$ at the point $(2, 3)$ by implicit differentiation.

::hint
**What you need:** the product rule on $xy$.

**Steps:**
1. $y+x\dfrac{dy}{dx}=0$.
2. Substitute the point.

::solution
$\dfrac{dy}{dx}=-\dfrac yx=-\dfrac32$ at $(2, 3)$.
:::

:::exercise Multiple choice
Let $f(x)=2x+e^x$. What is $\left(f^{-1}\right)'(1)$?
A. $\dfrac{1}{2+e}$
B. $3$
C. $\dfrac13$
D. $2+e$

::hint
**What you need:** find $a$ with $f(a)=1$ first.

**Steps:**
1. $f(0)=0+1=1$, so $a=0$.
2. $f'(x)=2+e^x$.

::solution
$f'(0)=3$, so $\left(f^{-1}\right)'(1)=\dfrac13$: answer **C**. Option A uses $f'(1)$.
:::

:::exercise Free response
For $y=\arcsin\left(\dfrac x2\right)$, find $\dfrac{dy}{dx}$ at $x=1$.

::hint
**What you need:** $\dfrac{d}{dx}\arcsin u=\dfrac{u'}{\sqrt{1-u^2}}$.

**Steps:**
1. $u=\dfrac x2$, $u'=\dfrac12$.
2. Substitute $x=1$.

::solution
$\dfrac{dy}{dx}=\dfrac{\frac12}{\sqrt{1-\frac{x^2}{4}}}$, so at $x=1$: $\dfrac{\frac12}{\sqrt{\frac34}}=\dfrac{1}{\sqrt3}=\dfrac{\sqrt3}{3}$.
:::

## Application exercises

:::exercise A tangent line to a circle
Write the equation of the tangent line to $x^2+y^2=10$ at $(1, 3)$.

::hint
**What you need:** $\dfrac{dy}{dx}=-\dfrac xy$ from implicit differentiation.

**Steps:**
1. The slope at $(1, 3)$ is $-\dfrac13$.
2. Use point–slope form.

::solution
$y-3=-\dfrac13(x-1)$, that is $y=-\dfrac13x+\dfrac{10}{3}$.
:::

:::exercise An inverse from a table
The function $f$ is differentiable and one-to-one, with $f(3)=5$ and $f'(3)=2$. Let $g=f^{-1}$. Find $g(5)$ and $g'(5)$, and write the tangent line to $g$ at $x=5$.

::hint
**What you need:** $g(5)=3$ because $f(3)=5$; slopes are reciprocals.

**Steps:**
1. $g'(5)=\dfrac{1}{f'(3)}$.

::solution
$g(5)=3$ and $g'(5)=\dfrac12$. The tangent line is $y=3+\dfrac12(x-5)$.
:::

:::exercise The second derivative implicitly
For the curve $x^2+y^2=25$, show that $\dfrac{d^2y}{dx^2}=-\dfrac{25}{y^3}$.

::hint
**What you need:** differentiate $\dfrac{dy}{dx}=-\dfrac xy$ with the quotient rule, then substitute.

**Steps:**
1. $\dfrac{d^2y}{dx^2}=-\dfrac{y-x\frac{dy}{dx}}{y^2}$.
2. Replace $\dfrac{dy}{dx}$ by $-\dfrac xy$ and use $x^2+y^2=25$.

::solution
$\dfrac{d^2y}{dx^2}=-\dfrac{y+\frac{x^2}{y}}{y^2}=-\dfrac{y^2+x^2}{y^3}=-\dfrac{25}{y^3}$.
:::

:::exercise Challenge
Let $h(x)=f\big(g(x)\big)$, where $g(x)=x^2+1$ and $f'(5)=3$. Find $h'(2)$, then find the value of $\dfrac{d}{dx}\Big[h(x)\Big]^2$ at $x=2$ given that $f(5)=-1$.

::hint
**What you need:** the chain rule twice.

**Steps:**
1. $h'(2)=f'\big(g(2)\big)g'(2)$ with $g(2)=5$, $g'(2)=4$.
2. $\dfrac{d}{dx}h^2=2h\cdot h'$ and $h(2)=f(5)$.

::solution
$h'(2)=3\cdot4=12$. Then $\dfrac{d}{dx}h(x)^2=2h(x)h'(x)$, which at $x=2$ equals $2\cdot(-1)\cdot12=-24$.
:::

:::quiz
::mc
What is $\dfrac{d}{dx}\sin(5x)$?
A. $\cos(5x)$
B. $5\cos(5x)$
C. $-5\cos(5x)$
D. $5\sin(5x)$
::key B
The chain rule: the inside derivative is $5$.

::mc
What is $\dfrac{d}{dx}e^{x^2}$?
A. $2xe^{x^2}$
B. $e^{x^2}$
C. $x^2e^{x^2-1}$
D. $e^{2x}$
::key A
Outside $e^u$, inside $x^2$ with derivative $2x$.

::mc
What is the slope of the curve $x^2+y^2=13$ at $(2, 3)$?
A. $\dfrac23$
B. $-\dfrac32$
C. $\dfrac32$
D. $-\dfrac23$
::key D
$\dfrac{dy}{dx}=-\dfrac xy=-\dfrac23$.

::mc
What is $\dfrac{d}{dx}\arctan x$?
A. $\dfrac{1}{\sqrt{1-x^2}}$
B. $\sec^2x$
C. $\dfrac{1}{1+x^2}$
D. $-\dfrac{1}{1+x^2}$
::key C
Option B is the derivative of $\tan x$; option A is that of $\arcsin x$.

::tf
The functions $f$ and $g$ are differentiable with $g(2)=1$, $g'(2)=4$, $f(1)=3$ and $f'(1)=-2$. Let $h(x)=f\big(g(x)\big)$.
a) $h(2)=3$.
b) $h'(2)=-8$.
c) $h'(2)=f'\big(g'(2)\big)$.
d) The tangent line to $h$ at $x=2$ is $y=3-8(x-2)$.
::key T T F T
a) True: $f(g(2))=f(1)=3$. b) True: $f'(1)\cdot g'(2)=-8$. c) False: that is not the chain rule. d) True.

::sa
Let $f(x)=x^3+2x$. Find $\left(f^{-1}\right)'(3)$. Give your answer as a decimal.
::key 0.2
$f(1)=3$ and $f'(1)=3+2=5$, so the answer is $\dfrac15=0.2$.

::sa
Find the derivative of $(2x+1)^3$ at $x=0$.
::key 6
$3(2x+1)^2\cdot2=6$ at $x=0$.
:::
