---
title: The derivative
description: Understand the derivative at a point as a limit of difference quotients, its meaning as velocity and tangent gradient, and its link with continuity.
minutes: 25
---

:::goals
- Understand the definition of the derivative of a function at a point as the limit of a difference quotient.
- Calculate derivatives from the definition and write the equation of a tangent to a graph.
- Understand the meaning of instantaneous velocity and gradient, and the link between differentiability and continuity.
- Apply the derivative to problems of motion and rate of change.
:::

Suppose an object falls freely and after $t$ seconds has fallen $s(t)=5t^2$ metres (hypothetical figures). From the 1st second to the 2nd, it falls $s(2)-s(1)=15$ metres, so the average velocity is $15$ m/s. But a speedometer does not measure an average; it shows the speed **at one instant**. What is the velocity at exactly $t=1$?

We cannot divide by a time interval of $0$. What we can do is shrink the interval gradually and see where the average velocity is heading. That idea is the derivative.

## Exploration: shrinking the time interval

Consider the interval from $t=1$ to $t=1+h$. The average velocity is $\dfrac{s(1+h)-s(1)}{h}=\dfrac{5(1+h)^2-5}{h}=10+5h$.

| $h$ | $1$ | $0.1$ | $0.01$ | $0.001$ |
|---|---|---|---|---|
| Average velocity (m/s) | $15$ | $10.5$ | $10.05$ | $10.005$ |

As $h$ gets closer to $0$, the average velocity gets closer to $10$ m/s. We say the instantaneous velocity at $t=1$ is $10$ m/s, and write $\displaystyle\lim_{h\to0}(10+5h)=10$.

## Definition of the derivative

:::definition Derivative at a point
Let $y=f(x)$ be defined on an interval $(a, b)$ and let $x_0\in(a, b)$. If the limit
$$\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$$
exists and is finite, it is called the **derivative** of $f$ at $x_0$, written $f'(x_0)$, and $f$ is said to be **differentiable** at $x_0$. Putting $x=x_0+h$, we also have
$$f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.$$
:::

**Going deeper.** The numerator $f(x)-f(x_0)$ is the change in the function and the denominator $x-x_0$ is the change in the variable. Their quotient is the average rate of change from $x_0$ to $x$. The derivative is the rate of change at exactly $x_0$. If $f$ is differentiable at every point of $(a, b)$, then $f'(x)$ is itself a function, called the derivative function of $f$.

**Two meanings.** If $s(t)$ is distance, then $s'(t_0)$ is the instantaneous velocity at $t_0$. Geometrically, the quotient $\dfrac{f(x)-f(x_0)}{x-x_0}$ is the gradient of the secant joining the points $(x_0, f(x_0))$ and $(x, f(x))$. As $x\to x_0$, the secant approaches the **tangent**, so $f'(x_0)$ is the gradient of the tangent at that point.

:::theorem Equation of a tangent
If $f$ is differentiable at $x_0$, the tangent to the graph at the point $M(x_0, f(x_0))$ has equation
$$y=f'(x_0)(x-x_0)+f(x_0).$$
:::

:::graph A secant approaching the tangent of $y=x^2$ at the point $(1, 1)$
alt: The parabola y equals x squared, a dashed secant line through the points (1, 1) and (2, 4), and the tangent at (1, 1) with gradient 2
x: -1..3
y: -1..6
plot: x^2
plot: 3*x-2 ; dashed
plot: 2*x-1
point: (1, 1) "" below-right
point: (2, 4) "" below-right
label: (-0.8, 4.5) "y = x^2"
label: (2.2, 5.2) "secant, gradient 3"
label: (-0.6, -0.8) "tangent, gradient 2"
:::

:::theorem Differentiable implies continuous
If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.
:::

**Why is this true?** For $x\neq x_0$ write $f(x)-f(x_0)=\dfrac{f(x)-f(x_0)}{x-x_0}\cdot(x-x_0)$. As $x\to x_0$, the first factor tends to $f'(x_0)$ (finite) and the second tends to $0$, so the product tends to $0$. Hence $\lim_{x\to x_0}f(x)=f(x_0)$, that is, $f$ is continuous at $x_0$. The converse is **false**: a continuous function may fail to be differentiable, as in the example $y=|x|$ below.

## Examples

We begin with the definition.

:::example Calculating a derivative from the definition
Calculate from the definition:

a) $f(x)=x^2$ at $x_0=3$.

b) $f(x)=\dfrac1x$ at $x_0=2$.

**Solution.** a) For $x\neq3$: $\dfrac{x^2-9}{x-3}=\dfrac{(x-3)(x+3)}{x-3}=x+3$. As $x\to3$ this tends to $6$. So $f'(3)=6$.

b) For $x\neq2$:
$$\frac{\frac1x-\frac12}{x-2}=\frac{\frac{2-x}{2x}}{x-2}=-\frac{1}{2x}.$$
As $x\to2$ this tends to $-\dfrac14$. So $f'(2)=-\dfrac14$.
:::

Next we write the equation of a tangent.

:::example Equation of a tangent
Let $f(x)=x^2-2x$.

a) Write the equation of the tangent to the graph at the point with $x$-coordinate $x_0=2$.

b) Find the tangent at $x_0=1$ and say what is special about it.

**Solution.** a) We have $f(2)=0$ and $\dfrac{f(x)-f(2)}{x-2}=\dfrac{x(x-2)}{x-2}=x\to2$, so $f'(2)=2$. The tangent is $y=2(x-2)+0=2x-4$.

b) We have $f(1)=-1$ and $\dfrac{f(x)+1}{x-1}=\dfrac{(x-1)^2}{x-1}=x-1\to0$, so $f'(1)=0$. The tangent is $y=0\cdot(x-1)-1=-1$, a horizontal line.

So a) $y=2x-4$; b) $y=-1$ (a horizontal tangent, at the lowest point of the parabola).
:::

Not every continuous function is differentiable.

:::example When is a function differentiable?
Decide whether each function is differentiable at $x_0$:

a) $f(x)=|x|$ at $x_0=0$.

b) $g(x)=\begin{cases}x^2&\text{if }x\le1\\2x-1&\text{if }x>1\end{cases}$ at $x_0=1$.

**Solution.** a) We have $\dfrac{f(x)-f(0)}{x-0}=\dfrac{|x|}{x}$. As $x\to0^+$ the quotient equals $1$; as $x\to0^-$ it equals $-1$. The two one-sided limits differ, so $f$ is not differentiable at $0$, although $f$ is continuous at $0$.

b) We have $g(1)=1$. From the left: $\dfrac{x^2-1}{x-1}=x+1\to2$. From the right: $\dfrac{(2x-1)-1}{x-1}=2\to2$. The two one-sided limits are equal, so $g$ is differentiable at $1$ and $g'(1)=2$.

So a) not differentiable; b) differentiable, $g'(1)=2$.
:::

Now we return to the falling object, at a different instant, using all four steps.

:::example Application: instantaneous velocity
Suppose an object falls freely and after $t$ seconds has fallen $s(t)=5t^2$ metres (hypothetical figures). Find the instantaneous velocity at $t=2$.

**Solution.**

*Understand.* The instantaneous velocity at $t=2$ is $s'(2)$.

*Plan.* Use the definition: form the quotient $\dfrac{s(t)-s(2)}{t-2}$ and cancel the factor $t-2$ before taking the limit.

*Solve.* For $t\neq2$:
$$\frac{5t^2-20}{t-2}=\frac{5(t-2)(t+2)}{t-2}=5(t+2).$$
As $t\to2$ this tends to $20$. So the instantaneous velocity at $t=2$ is $20$ m/s.

*Look back.* Is the result reasonable? The average velocity from the 1st to the 2nd second is $15$ m/s, and the object speeds up as it falls, so the velocity at the end of the 2nd second must exceed $15$: $20$ is reasonable. The same method at $t=1$ gives $10$ m/s, and we see that the velocity at $t=2$ is double the velocity at $t=1$. What if we repeat this at any $t_0$? We get $s'(t_0)=10t_0$, so the velocity is proportional to the time of fall.
:::

:::warning Common mistakes
- **Substituting $x=x_0$ straight into the quotient.** Wrong: $\dfrac{x^2-9}{x-3}$ at $x=3$ gives $\dfrac00=0$, so $f'(3)=0$. Why it is wrong: $\dfrac00$ is undefined; we must cancel the factor $x-3$ first. Right: the quotient equals $x+3$, so the limit is $6$.
- **Assuming continuous means differentiable.** Wrong: $y=|x|$ is continuous at $0$, so it is differentiable at $0$. Why it is wrong: the converse of the theorem is false; the one-sided limits are $1$ and $-1$. Right: $|x|$ is continuous but not differentiable at $0$.
- **Confusing a tangent with a line that meets the graph once.** Wrong: the tangent at $x_0$ is the line that meets the graph exactly once. Why it is wrong: a tangent is defined by the gradient $f'(x_0)$ and may meet the graph again elsewhere. Right: the tangent is the line through $(x_0, f(x_0))$ with gradient $f'(x_0)$.
- **Forgetting $f(x_0)$ in the tangent equation.** Wrong: $y=f'(x_0)(x-x_0)$. Why it is wrong: at $x=x_0$ this line gives $y=0$, so it misses the point of contact $(x_0, f(x_0))$ when $f(x_0)\neq0$. Right: $y=f'(x_0)(x-x_0)+f(x_0)$.
:::

**Connections.** The derivative uses limits and the continuity from the lesson on [continuous functions](lesson:continuity): continuity is a necessary condition for being differentiable. The lesson on [rules of differentiation](lesson:differentiation-rules) will give quick formulas so that we need not set up a limit every time, and the lesson on the [second derivative](lesson:second-derivative) studies the rate of change of the derivative itself, such as acceleration. In practice, the derivative measures how fast any quantity changes with time or with another quantity.

## Key terms

:::terms
- đạo hàm | derivative
- có đạo hàm | differentiable
- hàm đạo hàm | derivative function
- cát tuyến | secant line
- tiếp tuyến | tangent line
- hệ số góc | gradient
- vận tốc trung bình | average velocity
- vận tốc tức thời | instantaneous velocity
- giới hạn một bên | one-sided limit
- tốc độ thay đổi | rate of change
:::

## Summary

- $f'(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h}$.
- $f'(x_0)$ is the gradient of the tangent at $(x_0, f(x_0))$; the tangent is $y=f'(x_0)(x-x_0)+f(x_0)$.
- If $s(t)$ is distance, then $s'(t_0)$ is the instantaneous velocity at $t_0$.
- Differentiable at $x_0$ implies continuous at $x_0$; the converse is false.
- A function is differentiable at $x_0$ when the two one-sided limits of the difference quotient exist and are equal.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Calculate the derivative from the definition:

a) $f(x)=2x^2-x$ at $x_0=1$.

b) $f(x)=x^3$ at $x_0=2$.

c) $f(x)=\dfrac1x$ at $x_0=-1$.

d) $f(x)=\sqrt x$ at $x_0=4$.

::hint
**What you need:** $f'(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}$.

**Steps:**
1. Form the quotient and factorise the numerator to show a factor $x-x_0$ (part d: multiply by the conjugate).
2. Cancel, then let $x\to x_0$.

::solution
a) $\dfrac{2x^2-x-1}{x-1}=\dfrac{(2x+1)(x-1)}{x-1}=2x+1\to3$. So $f'(1)=3$.

b) $\dfrac{x^3-8}{x-2}=x^2+2x+4\to12$. So $f'(2)=12$.

c) $\dfrac{\frac1x+1}{x+1}=\dfrac{\frac{1+x}{x}}{x+1}=\dfrac1x\to-1$. So $f'(-1)=-1$.

d) $\dfrac{\sqrt x-2}{x-4}=\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}\to\dfrac14$. So $f'(4)=\dfrac14$.

**Answer.** a) $3$; b) $12$; c) $-1$; d) $\dfrac14$.
:::

:::exercise
Find the derivative function $f'(x)$ from the definition:

a) $f(x)=x^2-3x$.

b) $f(x)=\dfrac1x$ ($x\neq0$).

c) $f(x)=c$ (a constant function).

::hint
**What you need:** $f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.

**Steps:**
1. Write $f(x+h)-f(x)$ and simplify.
2. Divide by $h$, then let $h\to0$.

::solution
a) $f(x+h)-f(x)=(x+h)^2-3(x+h)-x^2+3x=2xh+h^2-3h$. Dividing by $h$: $2x+h-3\to2x-3$. So $f'(x)=2x-3$.

b) $\dfrac{1}{x+h}-\dfrac1x=\dfrac{-h}{x(x+h)}$. Dividing by $h$: $-\dfrac{1}{x(x+h)}\to-\dfrac{1}{x^2}$. So $f'(x)=-\dfrac{1}{x^2}$.

c) $f(x+h)-f(x)=c-c=0$, so $f'(x)=0$.

**Answer.** a) $2x-3$; b) $-\dfrac1{x^2}$; c) $0$.
:::

:::exercise
Write the equation of the tangent to the graph:

a) $y=x^2$ at the point with $x$-coordinate $-1$.

b) $y=x^3$ at the point with $x$-coordinate $2$.

c) $y=\dfrac1x$ at the point with $x$-coordinate $\dfrac12$.

::hint
**What you need:** $y=f'(x_0)(x-x_0)+f(x_0)$; $(x^2)'=2x$, $(x^3)'=3x^2$, $\left(\dfrac1x\right)'=-\dfrac1{x^2}$.

**Steps:**
1. Calculate $f(x_0)$ and $f'(x_0)$.
2. Substitute into the formula and simplify.

::solution
a) $f(-1)=1$, $f'(-1)=-2$. The tangent is $y=-2(x+1)+1=-2x-1$.

b) $f(2)=8$, $f'(2)=12$. The tangent is $y=12(x-2)+8=12x-16$.

c) $f\left(\dfrac12\right)=2$, $f'\left(\dfrac12\right)=-4$. The tangent is $y=-4\left(x-\dfrac12\right)+2=-4x+4$.

**Answer.** a) $y=-2x-1$; b) $y=12x-16$; c) $y=-4x+4$.
:::

:::exercise
Decide whether each function is differentiable at the given point, and find the derivative if it is:

a) $f(x)=|x-1|$ at $x_0=1$.

b) $f(x)=\begin{cases}x^2&\text{if }x\le2\\4x-4&\text{if }x>2\end{cases}$ at $x_0=2$.

c) $g(x)=\begin{cases}x^2&\text{if }x\le1\\3x-2&\text{if }x>1\end{cases}$ at $x_0=1$.

::hint
**What you need:** a function is differentiable when the two one-sided limits of $\dfrac{f(x)-f(x_0)}{x-x_0}$ are equal.

**Steps:**
1. Calculate the value of the function at $x_0$.
2. Calculate the limits as $x\to x_0^-$ and $x\to x_0^+$ and compare.

::solution
a) The quotient is $\dfrac{|x-1|}{x-1}$: it equals $1$ from the right and $-1$ from the left. Not differentiable.

b) $f(2)=4$. From the left: $\dfrac{x^2-4}{x-2}=x+2\to4$. From the right: $\dfrac{4x-4-4}{x-2}=4\to4$. Differentiable, $f'(2)=4$.

c) $g(1)=1$. From the left: $\dfrac{x^2-1}{x-1}=x+1\to2$. From the right: $\dfrac{3x-2-1}{x-1}=3\to3$. The two limits differ, so not differentiable.

**Answer.** a) No; b) Yes, $4$; c) No.
:::

:::exercise
Decide whether each statement is true or false:

a) The function $y=|x|$ is differentiable at $x=0$.

b) If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.

c) The derivative $f'(x_0)$ is the gradient of the tangent to the graph at the point with $x$-coordinate $x_0$.

d) For $f(x)=x^3$, $f'(2)=6$.

::hint
**What you need:** the definition of the derivative; the link between differentiable and continuous; the geometric meaning.

**Steps:**
1. Recall the two one-sided limits of $|x|$ at $0$.
2. Part d: use the result $f'(2)=12$ already found.

::solution
a) **False**: the two one-sided limits are $1$ and $-1$.

b) **True**: the theorem that differentiable implies continuous.

c) **True**: the geometric meaning of the derivative.

d) **False**: $f'(2)=12$, not $6$.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
Suppose an object falls freely and after $t$ seconds has fallen $s(t)=5t^2$ metres (hypothetical figures).

a) Find the instantaneous velocity at $t=3$ from the definition.

b) Using $s'(t)=10t$ (found in the example), after how many seconds does the object reach a velocity of $40$ m/s?

::hint
**What you need:** $v(t_0)=s'(t_0)$.

**Steps:**
1. a) Simplify $\dfrac{5t^2-45}{t-3}$.
2. b) Solve $10t=40$.

::solution
a) $\dfrac{5t^2-45}{t-3}=\dfrac{5(t-3)(t+3)}{t-3}=5(t+3)\to30$. So $v(3)=30$ m/s.

b) $10t=40$, so $t=4$ seconds.

**Answer.** a) $30$ m/s; b) $4$ seconds.
:::

:::exercise
Suppose the cost of producing $q$ items is $C(q)=0.02q^2+3q+50$ (million dong) (hypothetical figures).

a) Find $C'(100)$ from the definition.

b) Find the actual cost of producing the 101st item, that is $C(101)-C(100)$. Compare it with $C'(100)$.

::hint
**What you need:** $C'(q_0)$ approximates the cost of making one more item after $q_0$ have been made.

**Steps:**
1. a) Simplify $\dfrac{C(q)-C(100)}{q-100}$.
2. b) Find the difference of the two values.

::solution
a) $\dfrac{C(q)-C(100)}{q-100}=\dfrac{0.02(q^2-100^2)+3(q-100)}{q-100}=0.02(q+100)+3\to7$. So $C'(100)=7$ million dong per item.

b) $C(101)-C(100)=0.02\cdot201+3=7.02$ million dong, very close to $C'(100)=7$.

**Answer.** a) $7$ million dong per item; b) $7.02$ million dong, approximately $C'(100)$.
:::

:::exercise
Suppose a train travels a distance of $s(t)=2t^2+3t$ metres after $t$ seconds (hypothetical figures).

a) Find the average velocity from $t=4$ to $t=5$.

b) Find the instantaneous velocity at $t=4$ and compare it with part a.

::hint
**What you need:** average velocity $=\dfrac{s(t_2)-s(t_1)}{t_2-t_1}$; instantaneous velocity $=s'(t_0)$.

**Steps:**
1. a) Calculate $s(4)$ and $s(5)$.
2. b) Factorise $2t^2+3t-44=(t-4)(2t+11)$.

::solution
a) $s(4)=44$, $s(5)=65$; the average velocity is $\dfrac{65-44}{1}=21$ m/s.

b) $\dfrac{s(t)-s(4)}{t-4}=\dfrac{2t^2+3t-44}{t-4}=2t+11\to19$. So $v(4)=19$ m/s, which is less than $21$ m/s because the train is speeding up, so its velocity at the end of the interval is greater than at the start.

**Answer.** a) $21$ m/s; b) $19$ m/s.
:::

:::exercise
Revisit powers with rational exponents. Let $f(x)=x^{3/2}$ ($x>0$). Find $f'(4)$ from the definition.

::hint
**What you need:** $x^{3/2}=\left(\sqrt x\right)^3$; put $u=\sqrt x$.

**Steps:**
1. Write the quotient in terms of $u$ and factorise $u^3-8$ and $u^2-4$.
2. Cancel, then let $u\to2$.

::solution
Put $u=\sqrt x$; then $x\to4$ is equivalent to $u\to2$. The quotient equals $\dfrac{u^3-8}{u^2-4}=\dfrac{(u-2)(u^2+2u+4)}{(u-2)(u+2)}=\dfrac{u^2+2u+4}{u+2}\to\dfrac{12}{4}=3$.

So $f'(4)=3$.

**Answer.** $3$.
:::

:::exercise Challenge
Let $f$ be an even function that is differentiable at $0$. Prove that $f'(0)=0$.

::hint
**What you need:** an even function satisfies $f(-h)=f(h)$.

**Steps:**
1. Write $f'(0)$ from the definition with $h\to0$ and with $-h\to0$.
2. Compare the two expressions.

::solution
Since $f$ is differentiable at $0$, $f'(0)=\displaystyle\lim_{h\to0}\dfrac{f(h)-f(0)}{h}$. Replace $h$ by $-h$ (which still tends to $0$):
$$f'(0)=\lim_{h\to0}\frac{f(-h)-f(0)}{-h}=\lim_{h\to0}\frac{f(h)-f(0)}{-h}=-f'(0).$$
Hence $2f'(0)=0$, that is $f'(0)=0$.

**Answer.** $f'(0)=0$.
:::

## Mini test

:::quiz
::mc
Let $f(x)=x^2+2x$. The value of $f'(1)$ is
A. $4$.
B. $2$.
C. $3$.
D. $5$.
::key A
$\dfrac{x^2+2x-3}{x-1}=\dfrac{(x-1)(x+3)}{x-1}=x+3\to4$. Option C is $f(1)$, B uses only the coefficient of $2x$, and D is an addition slip.

::mc
The tangent to the graph of $y=x^3$ at the point with $x$-coordinate $1$ has equation
A. $y=3x+2$.
B. $y=3x-2$.
C. $y=x$.
D. $y=-3x+4$.
::key B
$f(1)=1$ and $f'(1)=3$, so $y=3(x-1)+1=3x-2$. Option A has the wrong sign on the constant, C uses gradient $1$, and D uses gradient $-3$.

::mc
Which property does $f(x)=|x|$ have?
A. Differentiable at $0$ with $f'(0)=1$.
B. Differentiable at $0$ with $f'(0)=0$.
C. Continuous at $0$ but not differentiable at $0$.
D. Not continuous at $0$.
::key C
$|x|$ is continuous at $0$, but the two one-sided limits of the difference quotient are $1$ and $-1$, so it is not differentiable. Options B and A get the value wrong, and D gets the continuity wrong.

::mc
A particle has distance $s(t)=t^2+4t$ (metres) after $t$ seconds. The instantaneous velocity at $t=2$ is
A. $4$ m/s.
B. $6$ m/s.
C. $10$ m/s.
D. $8$ m/s.
::key D
$\dfrac{t^2+4t-12}{t-2}=\dfrac{(t-2)(t+6)}{t-2}=t+6\to8$. Option A takes only the coefficient $4$ of $4t$, while B and C come from simplifying the quotient wrongly.

::tf
Let $h(x)=\begin{cases}x^2&\text{if }x\le0\\x&\text{if }x>0.\end{cases}$ Decide whether each statement is true or false:
a) $h$ is continuous at $x=0$.
b) The limit of $\dfrac{h(x)-h(0)}{x}$ as $x\to0^+$ is $1$.
c) The limit of $\dfrac{h(x)-h(0)}{x}$ as $x\to0^-$ is $1$.
d) $h$ is differentiable at $x=0$.
::key T T F F
a) True: $h(0)=0$ and both one-sided limits equal $0$. b) True: $\dfrac{x-0}{x}=1$. c) False: $\dfrac{x^2}{x}=x\to0$. d) False: the two one-sided limits differ ($1$ and $0$).

::sa
An object has distance $s(t)=3t^2+t$ metres after $t$ seconds (hypothetical figures). Find the instantaneous velocity at $t=5$ (in m/s).
::key 31
$\dfrac{3t^2+t-80}{t-5}=\dfrac{(t-5)(3t+16)}{t-5}=3t+16\to31$.

::sa
Find the gradient of the tangent to the graph of $y=\dfrac1x$ at the point with $x$-coordinate $\dfrac14$.
::key -16
$\dfrac{\frac1x-4}{x-\frac14}=\dfrac{\frac{1-4x}{x}}{x-\frac14}=\dfrac{-4\left(x-\frac14\right)}{x\left(x-\frac14\right)}=-\dfrac4x\to-16$.
:::
