---
title: The derivative and differentiation rules
description: AP Calculus Unit 2: the derivative as a limit, power, product and quotient rules, derivatives of trigonometric, exponential and log functions, tangent lines.
minutes: 40
---

:::goals
- Recognize the limit definition of the derivative and use it to identify $f'(a)$.
- Differentiate with the power, sum, product and quotient rules.
- Use the derivatives of $\sin x$, $\cos x$, $\tan x$, $e^x$ and $\ln x$.
- Write the equation of a tangent line, use it to approximate values, and explain why differentiability implies continuity.
:::

Unit 2 turns the idea of a limit into the derivative, the instantaneous rate of change. Most of its questions are fast multiple-choice items in the no-calculator part, but the same skills are needed in every free-response question, so accuracy here is worth a lot. Vietnamese students know these rules from grade 11; the AP style adds questions that **disguise** a derivative as a limit.

## The derivative as a limit

:::theorem Definition of the derivative
$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.$$
$f'(a)$ is the slope of the tangent line to the graph of $f$ at $x=a$, and the instantaneous rate of change of $f$ at $a$.
:::

:::example A limit in disguise
What is $\displaystyle\lim_{h\to0}\frac{(2+h)^3-8}{h}$?
A. $0$
B. $8$
C. $12$
D. The limit does not exist.

**Solution.** This is the definition of $f'(2)$ for $f(x)=x^3$, because $f(2)=8$. Since $f'(x)=3x^2$, the limit is $3\cdot4=12$. The answer is **C**. Recognizing the pattern is much faster than expanding $(2+h)^3$.
:::

## Basic rules

:::note Rules to know by heart
| Function | Derivative |
|---|---|
| $x^n$ (any real $n$) | $nx^{n-1}$ |
| $\sin x$, $\cos x$, $\tan x$ | $\cos x$, $-\sin x$, $\sec^2x$ |
| $e^x$, $\ln x$ | $e^x$, $\dfrac1x$ |
| $f\cdot g$ (product rule) | $f'g+fg'$ |
| $\dfrac fg$ (quotient rule) | $\dfrac{f'g-fg'}{g^2}$ |
:::

:::example Power rule with negative and fractional exponents
For $f(x)=4x^3-\dfrac2x+\sqrt x$, what is $f'(1)$?

**Solution.** Write $f(x)=4x^3-2x^{-1}+x^{\frac12}$. Then $f'(x)=12x^2+2x^{-2}+\dfrac12x^{-\frac12}$, and $f'(1)=12+2+\dfrac12=14.5$.
:::

:::example The product rule
What is $\dfrac{d}{dx}\left(x^2\sin x\right)$?
A. $2x\cos x$
B. $2x\sin x+x^2\cos x$
C. $2x\sin x-x^2\cos x$
D. $x^2\cos x$

**Solution.** $(x^2)'\sin x+x^2(\sin x)'=2x\sin x+x^2\cos x$: answer **B**. Option A multiplies the two derivatives, which is never the rule.
:::

:::example The quotient rule
For $f(x)=\dfrac{2x+1}{x-3}$, what is $f'(4)$?

**Solution.** $f'(x)=\dfrac{2(x-3)-(2x+1)\cdot1}{(x-3)^2}=\dfrac{-7}{(x-3)^2}$, so $f'(4)=-7$.
:::

## Tangent lines and local linear approximation

The tangent line to $y=f(x)$ at $x=a$ is $y=f(a)+f'(a)(x-a)$. Near $a$ it is a good approximation of $f$.

:::example Approximating with a tangent line
Write the equation of the tangent line to $y=e^x$ at $x=0$, and use it to approximate $e^{0.1}$.

**Solution.** $f(0)=1$ and $f'(0)=e^0=1$, so the tangent line is $y=1+x$. Then $e^{0.1}\approx1+0.1=1.1$. (The true value is about $1.105$; since $e^x$ is concave up, the tangent line lies below the curve and the approximation is an underestimate.)
:::

:::graph $y=e^x$ and its tangent line $y=1+x$ at $x=0$
alt: The exponential curve rising from left to right and a straight line touching it at the point (0, 1)
x: -2..2
y: -1..5
plot: exp(x)
plot: 1 + x
point: (0, 1) "(0, 1)" above-left
:::

## Differentiability and continuity

:::theorem Differentiability implies continuity
If $f$ is differentiable at $x=a$, then $f$ is continuous at $x=a$. The converse is false: a function can be continuous at a point but not differentiable there, at a **corner**, a **cusp** or a **vertical tangent**.
:::

:::example A corner
Which statement about $f(x)=|x-2|$ at $x=2$ is true?
A. $f$ is neither continuous nor differentiable.
B. $f$ is differentiable but not continuous.
C. $f$ is continuous but not differentiable.
D. $f$ is continuous and differentiable.

**Solution.** The graph is a V with its corner at $(2, 0)$: no break, so $f$ is continuous, but the slope jumps from $-1$ to $1$, so $f'(2)$ does not exist. The answer is **C**. Option B is impossible by the theorem.
:::

:::warning Common traps
- **Multiplying derivatives.** $(fg)'\ne f'g'$ and $\left(\dfrac fg\right)'\ne\dfrac{f'}{g'}$.
- **Order in the quotient rule.** The numerator is $f'g-fg'$; reversing it changes the sign.
- **$\dfrac{d}{dx}\cos x=-\sin x$.** The minus sign is the most common lost point.
- **Constants.** $\dfrac{d}{dx}e^2=0$, because $e^2$ is a number.
:::

:::tip Numerical derivative on the calculator
In the calculator parts, your graphing calculator can compute $f'(a)$ numerically. Use it to check a hand computation, or when the derivative is messy and only its value is needed.
:::

:::terms
- derivative | đạo hàm
- difference quotient | tỉ số gia số
- instantaneous rate of change | tốc độ thay đổi tức thời
- tangent line | tiếp tuyến
- power / product / quotient rule | quy tắc luỹ thừa / tích / thương
- local linear approximation | xấp xỉ tuyến tính địa phương
- differentiable | có đạo hàm (khả vi)
- corner / cusp | điểm góc / điểm lùi
:::

## Similar exercises

:::exercise Multiple choice
What is $\displaystyle\lim_{h\to0}\frac{\sin\left(\frac{\pi}{2}+h\right)-1}{h}$?
A. $-1$
B. $0$
C. $1$
D. The limit does not exist.

::hint
**What you need:** recognize $f'(a)$ for $f(x)=\sin x$ and $a=\dfrac{\pi}{2}$.

**Steps:**
1. $\sin\dfrac{\pi}{2}=1$.
2. $f'(x)=\cos x$.

::solution
The limit is $\cos\dfrac{\pi}{2}=0$: answer **B**.
:::

:::exercise Free response
For $g(x)=5x^4-3x^2+\dfrac{4}{x^2}$, find $g'(1)$.

::hint
**What you need:** write $\dfrac{4}{x^2}=4x^{-2}$.

**Steps:**
1. Differentiate term by term.
2. Substitute $x=1$.

::solution
$g'(x)=20x^3-6x-8x^{-3}$, so $g'(1)=20-6-8=6$.
:::

:::exercise Multiple choice
For $f(x)=xe^x$, what is $f'(0)$?
A. $0$
B. $e$
C. $2$
D. $1$

::hint
**What you need:** the product rule.

**Steps:**
1. $f'(x)=e^x+xe^x$.

::solution
$f'(0)=1+0=1$: answer **D**.
:::

:::exercise Free response
For $f(x)=\dfrac{x}{x^2+1}$, find $f'(1)$ and interpret it.

::hint
**What you need:** the quotient rule.

**Steps:**
1. $f'(x)=\dfrac{(x^2+1)-x\cdot2x}{(x^2+1)^2}$.
2. Substitute $x=1$.

::solution
$f'(x)=\dfrac{1-x^2}{(x^2+1)^2}$, so $f'(1)=0$: the tangent line at $x=1$ is horizontal. In fact $f$ has its maximum value $\dfrac12$ there.
:::

:::exercise Free response
Write the equation of the tangent line to $y=\ln x$ at $x=1$.

::hint
**What you need:** $y=f(a)+f'(a)(x-a)$.

**Steps:**
1. $\ln1=0$ and $\left.\dfrac1x\right|_{x=1}=1$.

::solution
$y=0+1\cdot(x-1)$, that is $y=x-1$.
:::

## Application exercises

:::exercise Particle motion
A particle moves along a line with position $s(t)=t^3-6t^2+9t$ for $t\ge0$. At what times is the particle at rest?

::hint
**What you need:** at rest means velocity $v(t)=s'(t)=0$.

**Steps:**
1. $v(t)=3t^2-12t+9$.
2. Solve $v(t)=0$.

::solution
$3(t^2-4t+3)=3(t-1)(t-3)=0$, so the particle is at rest at $t=1$ and $t=3$.
:::

:::exercise Horizontal tangents
Find the points on the graph of $y=x^3-3x$ where the tangent line is horizontal.

::hint
**What you need:** horizontal tangent means $y'=0$.

**Steps:**
1. $y'=3x^2-3$.
2. Solve, then find the $y$-values.

::solution
$3x^2-3=0$ gives $x=\pm1$. The points are $(1, -2)$ and $(-1, 2)$.
:::

:::exercise Using a table
The table gives values of the differentiable functions $f$ and $g$ at $x=2$.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|---|---|---|---|---|
| $2$ | $3$ | $-1$ | $4$ | $5$ |

Let $h(x)=f(x)g(x)$. Find $h'(2)$.

::hint
**What you need:** the product rule with values from the table.

**Steps:**
1. $h'(2)=f'(2)g(2)+f(2)g'(2)$.

::solution
$h'(2)=(-1)(4)+(3)(5)=-4+15=11$.
:::

:::exercise Challenge
$$f(x)=\begin{cases}ax^2, & x\le1\\ bx-2, & x>1\end{cases}$$
Find $a$ and $b$ so that $f$ is differentiable at $x=1$.

::hint
**What you need:** differentiable at $1$ requires both continuity and equal one-sided derivatives.

**Steps:**
1. Continuity: $a=b-2$.
2. Equal slopes: $2a=b$.

::solution
Substituting $b=2a$ into $a=b-2$ gives $a=2a-2$, so $a=2$ and $b=4$. Check: both pieces give the value $2$ and the slope $4$ at $x=1$.
:::

:::quiz
::mc
What is $\dfrac{d}{dx}\left(x^5\right)$?
A. $5x^4$
B. $x^4$
C. $5x^5$
D. $\dfrac{x^6}{6}$
::key A
The power rule. Option D is an antiderivative.

::mc
What is $\dfrac{d}{dx}\left(\cos x\right)$?
A. $\sin x$
B. $-\cos x$
C. $-\sin x$
D. $\sec^2x$
::key C
The derivative of cosine is negative sine.

::mc
For $f(x)=x^2\ln x$, what is $f'(1)$?
A. $0$
B. $1$
C. $2$
D. $e$
::key B
$f'(x)=2x\ln x+x$, so $f'(1)=0+1=1$.

::mc
What is the slope of the tangent line to $y=\sqrt x$ at $x=4$?
A. $2$
B. $\dfrac12$
C. $\dfrac18$
D. $\dfrac14$
::key D
$y'=\dfrac{1}{2\sqrt x}=\dfrac14$ at $x=4$.

::tf
Let $g(x)=x^3-3x$.
a) $g'(x)=3x^2-3$.
b) $g'(1)=0$.
c) The tangent line at $x=2$ has slope $9$.
d) $g$ is not differentiable at $x=0$.
::key T T T F
a) True. b) True. c) True: $12-3=9$. d) False: a polynomial is differentiable everywhere.

::sa
Evaluate $\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}$.
::key 6
This is $f'(3)$ for $f(x)=x^2$: $2\cdot3=6$.

::sa
For $f(x)=\dfrac{x}{x+1}$, find $f'(1)$. Give your answer as a decimal.
::key 0.25
$f'(x)=\dfrac{(x+1)-x}{(x+1)^2}=\dfrac{1}{(x+1)^2}$, so $f'(1)=\dfrac14=0.25$.
:::
