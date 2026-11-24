---
title: The second derivative
description: Understand the second derivative as the derivative of the derivative, its meaning as acceleration and its sign, and apply it to motion and business.
minutes: 25
---

:::goals
- Understand the second derivative as the derivative of the first derivative and calculate it.
- Understand acceleration as the second derivative of distance with respect to time.
- Recognise that the sign of the second derivative tells whether the first derivative is increasing or decreasing.
- Apply it to problems of speeding up, slowing down and the rate of change of a quantity.
:::

Suppose an object moves in a straight line and after $t$ seconds is $s(t)=2t^3-9t^2+12t$ metres from the origin (hypothetical figures). Its velocity is $v(t)=s'(t)=6t^2-18t+12$. We tabulate:

| $t$ (seconds) | $0$ | $1$ | $1.5$ | $2$ | $3$ |
|---|---|---|---|---|---|
| $v(t)$ (m/s) | $12$ | $0$ | $-1.5$ | $0$ | $12$ |

The velocity falls from $12$ to $-1.5$ and then rises again to $12$. So the velocity itself changes, and we want a quantity that measures **the rate of change of the velocity**, to find when the velocity is smallest. That quantity is the derivative of the derivative.

## Exploration: the derivative of the derivative

For $f(x)=x^3-3x$ we have $f'(x)=3x^2-3$, and differentiating again gives $(f')'(x)=6x$.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $f'(x)$ | $9$ | $0$ | $-3$ | $0$ | $9$ |
| $6x$ | $-12$ | $-6$ | $0$ | $6$ | $12$ |

When $x<0$, $f'$ is decreasing ($9\to0\to-3$) and $6x<0$. When $x>0$, $f'$ is increasing ($-3\to0\to9$) and $6x>0$. The sign of $6x$ tells whether $f'$ is increasing or decreasing.

## Definition of the second derivative

:::definition Second derivative
Let $y=f(x)$ have a derivative $f'(x)$ on an interval. If $f'$ is itself differentiable, the derivative of $f'$ is called the **second derivative** of $f$, written $f''(x)$ or $y''$:
$$f''(x)=\left(f'(x)\right)'.$$
:::

**Going deeper.** The first derivative $f'$ measures the rate of change of $f$; the second derivative $f''$ measures the rate of change of $f'$. When $f''(x_0)>0$ the gradient of the graph is increasing near $x_0$; when $f''(x_0)<0$ the gradient is decreasing. The sum, difference, product, quotient and chain rules can be used twice in a row.

:::theorem Mechanical meaning: acceleration
If a motion has distance $s=s(t)$, then the velocity is $v(t)=s'(t)$ and the **acceleration** is
$$a(t)=v'(t)=s''(t).$$
The unit of acceleration is m/s$^2$.
:::

Acceleration tells whether the velocity is increasing or decreasing. A motion is **speeding up** when the speed increases and **slowing down** when the speed decreases. The speed is $|v|$, so it increases when $v$ and $a$ have the same sign, and decreases when they have opposite signs.

:::graph The velocity $v(t)=6t^2-18t+12$ is smallest at $t=1.5$, exactly when the acceleration is $0$
alt: An upward-opening parabola crossing the horizontal axis at t equal to 1 and t equal to 2, with its vertex at the point (1.5, -1.5) below the axis
x: 0..3.2
y: -3..16
plot: 6*x^2-18*x+12
point: (1, 0) "" above-left
point: (2, 0) "" above-right
point: (1.5, -1.5) "" below
label: (0.2, 14) "v(t)"
:::

**Why is this true?** The distance $s$ has derivative $v$ (since velocity is the rate of change of position). Acceleration is the rate of change of velocity, so it is the derivative of $v$, that is the second derivative of $s$. If $v>0$ (moving in the positive direction), $a>0$ makes $v$ larger so the speed increases; if $v<0$, $a>0$ makes $v$ move towards $0$ so the speed decreases. That is why the signs of $v$ and $a$ decide.

## Examples

We begin with calculations.

:::example Calculating second derivatives
Find $y''$:

a) $y=x^4-3x^2+2x$.

b) $y=e^{2x}$.

c) $y=\ln x$.

d) $y=xe^x$.

e) $y=\dfrac1x$.

**Solution.** a) $y'=4x^3-6x+2$, so $y''=12x^2-6$.

b) $y'=2e^{2x}$, so $y''=4e^{2x}$.

c) $y'=\dfrac1x$, so $y''=-\dfrac1{x^2}$.

d) $y'=(x+1)e^x$, so $y''=e^x+(x+1)e^x=(x+2)e^x$.

e) $y'=-\dfrac1{x^2}$. By the quotient rule, $y''=\dfrac{0\cdot x^2-(-1)\cdot2x}{x^4}=\dfrac{2x}{x^4}=\dfrac2{x^3}$.

So a) $12x^2-6$; b) $4e^{2x}$; c) $-\dfrac1{x^2}$; d) $(x+2)e^x$; e) $\dfrac2{x^3}$.
:::

The second derivative is also used to prove relations.

:::example Proving a relation
Let $y=e^{2x}+e^{-x}$. Prove that $y''-y'-2y=0$.

**Solution.** We have $y'=2e^{2x}-e^{-x}$ and $y''=4e^{2x}+e^{-x}$. Hence
$$y''-y'-2y=\left(4e^{2x}+e^{-x}\right)-\left(2e^{2x}-e^{-x}\right)-2\left(e^{2x}+e^{-x}\right)=0.$$

So the relation is proved.
:::

The signs of $v$ and $a$ tell whether the motion is speeding up or slowing down.

:::example Speeding up or slowing down?
Suppose $s(t)=t^3-6t^2+9t$ metres (hypothetical figures). Decide whether the motion is speeding up or slowing down at $t=0.5$, $1.5$, $2.5$ and $4$.

**Solution.** $v(t)=3t^2-12t+9$ and $a(t)=6t-12$. We tabulate:

| $t$ | $v(t)$ | $a(t)$ | Signs | Motion |
|---|---|---|---|---|
| $0.5$ | $3.75$ | $-9$ | opposite | slowing down |
| $1.5$ | $-2.25$ | $-3$ | same | speeding up |
| $2.5$ | $-2.25$ | $3$ | opposite | slowing down |
| $4$ | $9$ | $12$ | same | speeding up |

So the motion is slowing down at $t=0.5$ and $t=2.5$, and speeding up at $t=1.5$ and $t=4$.
:::

Now we return to the problem from the start, using all four steps.

:::example Application: when is the velocity smallest?
Suppose $s(t)=2t^3-9t^2+12t$ metres (hypothetical figures), $t\ge0$. Find the acceleration and the time when the velocity is smallest.

**Solution.**

*Understand.* We need $a(t)=s''(t)$, and then the $t$ at which the velocity $v$ is smallest.

*Plan.* $v$ is a quadratic in $t$ with positive $t^2$ coefficient, so its smallest value is at the vertex, where the tangent to the graph of $v$ is horizontal, that is $v'(t)=a(t)=0$.

*Solve.* $v(t)=6t^2-18t+12$ and $a(t)=v'(t)=12t-18$. We have $a(t)=0$ when $t=1.5$, and $v(1.5)=13.5-27+12=-1.5$ m/s.

So the smallest velocity is $-1.5$ m/s at $t=1.5$ seconds, when the acceleration is $0$.

*Look back.* Is the result reasonable? The table at the start gives $v(1)=0$, $v(1.5)=-1.5$, $v(2)=0$: the smallest value lies exactly midway between the two zeros $t=1$ and $t=2$ of $v$, at $1.5$. What if $s(t)$ changes? Whenever $v$ is quadratic, its extreme value occurs when $a=0$; if $a$ never changes sign, the velocity has no extreme value.
:::

:::warning Common mistakes
- **Confusing the second derivative with the square of the derivative.** Wrong: $(e^{2x})''=\left((e^{2x})'\right)^2=4e^{4x}$. Why it is wrong: $y''$ is the derivative of $y'$, not the square of $y'$. Right: $(e^{2x})''=\left(2e^{2x}\right)'=4e^{2x}$.
- **Forgetting the rules in the second differentiation.** Wrong: $(xe^x)'=(x+1)e^x$, so $(xe^x)''=1\cdot e^x=e^x$. Why it is wrong: $(x+1)e^x$ is still a product, so the product rule is needed again. Right: $(xe^x)''=(x+2)e^x$.
- **Mistaking positive acceleration for speeding up.** Wrong: $a>0$ means the motion is speeding up. Why it is wrong: the sign of $v$ matters; if $v<0$ and $a>0$ the speed $|v|$ decreases. Right: speeding up when $v$ and $a$ have the same sign; slowing down when they have opposite signs.
- **Confusing $f''(x_0)=0$ with $f'(x_0)=0$.** Wrong: if $f''(x_0)=0$ then the tangent is horizontal. Why it is wrong: the tangent is horizontal when $f'(x_0)=0$. Right: $f''(x_0)=0$ only says the rate of change of $f'$ is $0$ at that point.
:::

**Connections.** The second derivative rests on the [definition of the derivative](lesson:derivative-definition) and the [rules of differentiation](lesson:differentiation-rules): we simply differentiate twice in a row. They let us find acceleration from distance. In practice, the second derivative tells whether a rate of change is speeding up or slowing down, as when revenue is still rising but rising more slowly.

## Key terms

:::terms
- đạo hàm cấp hai | second derivative
- đạo hàm cấp một | first derivative
- gia tốc | acceleration
- vận tốc | velocity
- nhanh dần | speeding up
- chậm dần | slowing down
- tốc độ thay đổi | rate of change
- hệ thức | identity
- điều kiện ban đầu | initial condition
- độ cao | height
:::

## Summary

- $f''(x)=\left(f'(x)\right)'$; $y''$ is the derivative of $y'$.
- Acceleration: $a(t)=v'(t)=s''(t)$, in m/s$^2$.
- Speeding up when $v$ and $a$ have the same sign; slowing down when they have opposite signs.
- $f''>0$ on an interval means $f'$ is increasing there; $f''<0$ means $f'$ is decreasing.
- The rules of differentiation work a second time; avoid confusing $y''$ with $(y')^2$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find the second derivative:

a) $y=x^5-2x^3+x$.

b) $y=e^{3x}$.

c) $y=\ln(2x+1)$.

d) $y=x^2e^x$.

::hint
**What you need:** $y''=(y')'$; the product, quotient and chain rules.

**Steps:**
1. Find $y'$ first.
2. Differentiate $y'$, using the rules again if needed.

::solution
The second derivative of $y=f(x)$ is $y''=(y')'$. We use the formulas $(x^n)'=nx^{n-1}$, $\left(e^{kx}\right)'=ke^{kx}$, $(\ln u)'=\dfrac{u'}{u}$, $(uv)'=u'v+uv'$ and $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.

a) The function is defined on $\mathbb R$. We have $y'=5x^4-6x^2+1$. Hence
$$y''=(5x^4-6x^2+1)'=20x^3-12x.$$

b) We have $y'=3e^{3x}$. Hence
$$y''=3\cdot3e^{3x}=9e^{3x}.$$

c) Condition: $2x+1>0$, that is $x>-\dfrac12$. We have $y'=\dfrac{2}{2x+1}$. Hence
$$y''=\frac{0\cdot(2x+1)-2\cdot2}{(2x+1)^2}=-\frac{4}{(2x+1)^2}.$$

d) By the product rule, we have
$$y'=2xe^x+x^2e^x=(x^2+2x)e^x.$$
Applying the same rule to $y'$, we get
$$\begin{aligned}y''&=(2x+2)e^x+(x^2+2x)e^x\\&=(x^2+4x+2)e^x.\end{aligned}$$

So a) $y''=20x^3-12x$; b) $y''=9e^{3x}$; c) $y''=-\dfrac{4}{(2x+1)^2}$; d) $y''=(x^2+4x+2)e^x$.

**Answer.** a) $20x^3-12x$; b) $9e^{3x}$; c) $-\dfrac4{(2x+1)^2}$; d) $(x^2+4x+2)e^x$.
:::

:::exercise
Find the value:

a) $f''(2)$ for $f(x)=x^3-3x^2+4$.

b) $f''(2)$ for $f(x)=\dfrac1x$.

c) $f''(e)$ for $f(x)=\ln x$.

d) $f''(0)$ for $f(x)=e^{-x}$.

::hint
**What you need:** find $f'$, then $f''$, then substitute the value.

**Steps:**
1. Find the expression for $f''(x)$.
2. Substitute the given $x$.

::solution
For each function we find $f'(x)$, then $f''(x)$, and then substitute the given value of $x$.

a) We have $f'(x)=3x^2-6x$ and $f''(x)=6x-6$. Substituting $x=2$ gives $f''(2)=6\cdot2-6=6$.

b) Condition: $x\neq0$. Writing $f(x)=\dfrac1x=x^{-1}$, we have $f'(x)=-\dfrac1{x^2}$ and $f''(x)=\dfrac{2}{x^3}$. Substituting $x=2$ gives $f''(2)=\dfrac28=\dfrac14$.

c) Condition: $x>0$. We have $f'(x)=\dfrac1x$ and $f''(x)=-\dfrac1{x^2}$. Substituting $x=e$ (the condition holds) gives $f''(e)=-\dfrac1{e^2}$.

d) We have $f'(x)=-e^{-x}$ and $f''(x)=e^{-x}$. Substituting $x=0$ gives $f''(0)=e^0=1$.

So a) $f''(2)=6$; b) $f''(2)=\dfrac14$; c) $f''(e)=-\dfrac1{e^2}$; d) $f''(0)=1$.

**Answer.** a) $6$; b) $\dfrac14$; c) $-\dfrac1{e^2}$; d) $1$.
:::

:::exercise
Find the values of $x$ for which $f''(x)>0$ and for which $f''(x)<0$:

a) $f(x)=x^3-6x^2+9x+1$.

b) $f(x)=x^4-2x^2$.

::hint
**What you need:** study the sign of $f''(x)$; $f''>0$ means $f'$ is increasing.

**Steps:**
1. Find $f''(x)$.
2. Solve the inequalities $f''(x)>0$ and $f''(x)<0$.

::solution
We compute $f''(x)$ and study its sign. Both functions are defined on $\mathbb R$.

a) We have $f'(x)=3x^2-12x+9$ and $f''(x)=6x-12$. Then
$$f''(x)>0\iff6x-12>0\iff x>2,$$
$$f''(x)<0\iff6x-12<0\iff x<2.$$

b) We have $f'(x)=4x^3-4x$ and $f''(x)=12x^2-4$. Then
$$f''(x)>0\iff x^2>\frac13\iff|x|>\frac1{\sqrt3},$$
$$f''(x)<0\iff x^2<\frac13\iff|x|<\frac1{\sqrt3}.$$

So in part a), $f''>0$ when $x>2$ and $f''<0$ when $x<2$; in part b), $f''>0$ when $|x|>\dfrac1{\sqrt3}$ and $f''<0$ when $|x|<\dfrac1{\sqrt3}$.

**Answer.** a) $f''>0$ when $x>2$, $f''<0$ when $x<2$; b) $f''>0$ when $|x|>\dfrac1{\sqrt3}$, $f''<0$ when $|x|<\dfrac1{\sqrt3}$.
:::

:::exercise
Suppose an object moves with $s(t)=t^3-3t^2+5t$ metres after $t$ seconds (hypothetical figures).

a) Find the velocity and acceleration at $t=2$. Is the motion speeding up or slowing down?

b) Find the time when the acceleration is $0$ and the velocity then.

::hint
**What you need:** $v=s'$, $a=s''$; speeding up when $v$ and $a$ have the same sign.

**Steps:**
1. Find $v(t)$ and $a(t)$.
2. Substitute the values and check the signs.

::solution
The instantaneous velocity is the first derivative of the position and the instantaneous acceleration is the second derivative: $v(t)=s'(t)$, $a(t)=s''(t)$, with $t\ge0$. From $s(t)=t^3-3t^2+5t$ we get
$$v(t)=3t^2-6t+5,\qquad a(t)=6t-6.$$

a) Substituting $t=2$, we get $v(2)=3\cdot4-6\cdot2+5=5$ (m/s) and $a(2)=6\cdot2-6=6$ (m/s$^2$). Since $v(2)>0$ and $a(2)>0$ have the same sign, the motion is speeding up at $t=2$.

b) Solving $a(t)=0$, that is $6t-6=0$, gives $t=1$ (which satisfies $t\ge0$). Then $v(1)=3-6+5=2$ (m/s).

So a) at $t=2$ seconds the velocity is $5$ m/s, the acceleration is $6$ m/s$^2$ and the motion is speeding up; b) the acceleration is $0$ at $t=1$ second, when the velocity is $2$ m/s.

**Answer.** a) $v=5$ m/s, $a=6$ m/s$^2$, speeding up; b) $t=1$ second, $v=2$ m/s.
:::

:::exercise
Suppose a ball is thrown vertically and after $t$ seconds is at height $s(t)=20t-5t^2$ metres (hypothetical figures).

a) Find the velocity at $t=1$ and the acceleration.

b) After how long does the ball reach its greatest height, and what is that height?

::hint
**What you need:** $v=s'$, $a=s''$; at the highest point the velocity is $0$.

**Steps:**
1. Find $v(t)$ and $a(t)$.
2. Solve $v(t)=0$ and then find $s$.

::solution
The velocity is $v(t)=s'(t)$ and the acceleration is $a(t)=s''(t)$, with $t\ge0$. From $s(t)=20t-5t^2$ we get
$$v(t)=20-10t,\qquad a(t)=-10.$$

a) Substituting $t=1$, we get $v(1)=20-10=10$ (m/s). The acceleration is the constant $a=-10$ (m/s$^2$) at every moment.

b) The ball is at its greatest height when the velocity changes sign from positive to negative, that is when $v(t)=0$. Solving $20-10t=0$ gives $t=2$. For $0\le t<2$ we have $v(t)>0$ (the ball is rising) and for $t>2$ we have $v(t)<0$ (the ball is falling). The greatest height is
$$s(2)=20\cdot2-5\cdot2^2=40-20=20\ \text{(m)}.$$

So a) $v(1)=10$ m/s and the acceleration is $-10$ m/s$^2$; b) after $2$ seconds the ball reaches its greatest height, which is $20$ m.

**Answer.** a) $v(1)=10$ m/s, $a=-10$ m/s$^2$; b) $t=2$ seconds, height $20$ m.
:::

:::exercise
Suppose the revenue of a shop after $t$ months ($0\le t\le6$) is $R(t)=-t^3+9t^2+10t$ (million dong) (hypothetical figures).

a) Find the rate of growth of revenue $R'(t)$ and $R''(t)$.

b) In which month is the rate of growth of revenue greatest, and what is it?

c) From that month on, does the revenue fall?

::hint
**What you need:** $R'$ is the rate of change of $R$; $R'$ is greatest when $R''=0$ and $R''$ changes from positive to negative.

**Steps:**
1. Find $R'$ and $R''$.
2. Solve $R''(t)=0$, find $R'$ there and check the sign of $R'$.

::solution
The rate of growth of revenue is the derivative $R'(t)$; to see whether $R'$ increases or decreases we study $R''(t)$. Consider $0\le t\le6$.

a) From $R(t)=-t^3+9t^2+10t$ we get
$$R'(t)=-3t^2+18t+10,\qquad R''(t)=-6t+18.$$

b) Solving $R''(t)=0$, that is $-6t+18=0$, gives $t=3$ (which lies in $[0, 6]$). For $t<3$ we have $R''(t)>0$, so $R'$ increases; for $t>3$ we have $R''(t)<0$, so $R'$ decreases. Hence $R'$ is greatest at $t=3$, and
$$R'(3)=-3\cdot9+18\cdot3+10=-27+54+10=37.$$

c) We write $R'(t)=-3(t-3)^2+37$. For $t\in[0, 6]$ we have $(t-3)^2\le9$, so $R'(t)\ge-27+37=10>0$. In particular $R'(0)=10$, $R'(3)=37$, $R'(6)=10$. Since $R'(t)>0$, the revenue does not fall. From month $3$ on, $R'$ decreases from $37$ to $10$ but stays positive, so the revenue still grows, only more slowly.

So a) $R'(t)=-3t^2+18t+10$, $R''(t)=-6t+18$; b) the rate of growth of revenue is greatest in month $3$, at $37$ million dong per month; c) from month $3$ on the revenue does not fall, it only grows more slowly.

**Answer.** a) $R'=-3t^2+18t+10$, $R''=-6t+18$; b) month $3$, $37$ million dong per month; c) it does not fall, it only grows more slowly.
:::

:::exercise
Decide whether each statement is true or false:

a) $\left(x^4\right)''=4x^3$.

b) $\left(e^{2x}\right)''=4e^{2x}$.

c) If velocity and acceleration have the same sign, the motion is speeding up.

d) $(\ln x)''=\dfrac1{x^2}$.

::hint
**What you need:** $y''=(y')'$; the meaning of the signs of $v$ and $a$.

**Steps:**
1. Calculate each second derivative.
2. Compare with the statement.

::solution
We examine each statement by computing derivatives or by using the meaning of velocity and acceleration.

a) **False.** We have $\left(x^4\right)'=4x^3$, so $\left(x^4\right)''=\left(4x^3\right)'=12x^2$. Thus $4x^3$ is the first derivative, not the second.

b) **True.** We have $\left(e^{2x}\right)'=2e^{2x}$, so $\left(e^{2x}\right)''=2\cdot2e^{2x}=4e^{2x}$.

c) **True.** The speed of the object is $|v|$. If $v>0$ and $a>0$, then $|v|=v$ has derivative $v'=a>0$, so it increases. If $v<0$ and $a<0$, then $|v|=-v$ has derivative $-v'=-a>0$, so it also increases. Thus when $v$ and $a$ have the same sign the speed increases, that is the motion is speeding up.

d) **False.** For $x>0$ we have $(\ln x)'=\dfrac1x$, so $(\ln x)''=-\dfrac1{x^2}$, which is not $\dfrac1{x^2}$.

So statements b), c) are true; statements a), d) are false.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
Revisit the definition of the derivative. Let $f(x)=x^3$, with $f'(x)=3x^2$. Use the definition of the derivative for the function $f'$ to find $f''(x_0)$.

::hint
**What you need:** $f''(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f'(x)-f'(x_0)}{x-x_0}$.

**Steps:**
1. Form the quotient with $f'(x)=3x^2$.
2. Cancel the factor $x-x_0$, then let $x\to x_0$.

::solution
By the definition of the derivative applied to the function $f'$ at the point $x_0$, we have
$$f''(x_0)=\lim_{x\to x_0}\frac{f'(x)-f'(x_0)}{x-x_0}.$$

With $f'(x)=3x^2$ and $x\neq x_0$, we rewrite
$$\begin{aligned}\frac{f'(x)-f'(x_0)}{x-x_0}&=\frac{3x^2-3x_0^2}{x-x_0}\\&=\frac{3(x-x_0)(x+x_0)}{x-x_0}\\&=3(x+x_0).\end{aligned}$$

As $x\to x_0$ we have $3(x+x_0)\to3\cdot2x_0=6x_0$. Hence $f''(x_0)=6x_0$ for every $x_0$.

So $f''(x_0)=6x_0$, that is $f''(x)=6x$.

**Answer.** $f''(x)=6x$.
:::

:::exercise
Revisit logarithms and exponential functions. Find the second derivative of:

a) $y=\log_2x$.

b) $y=2^x$.

::hint
**What you need:** $(\log_ax)'=\dfrac1{x\ln a}$ and $(a^x)'=a^x\ln a$; $\ln a$ is a constant.

**Steps:**
1. Write $y'$ and differentiate once more.
2. Take the constant $\ln a$ outside.

::solution
We use the formulas $(\log_ax)'=\dfrac{1}{x\ln a}$ (for $x>0$) and $\left(a^x\right)'=a^x\ln a$.

a) Condition: $x>0$. We have $y'=\dfrac{1}{x\ln2}=\dfrac1{\ln2}\cdot x^{-1}$. Hence
$$y''=\frac1{\ln2}\cdot\left(-\frac1{x^2}\right)=-\frac{1}{x^2\ln2}.$$

b) The function is defined on $\mathbb R$. We have $y'=2^x\ln2$. Since $\ln2$ is a constant,
$$y''=\ln2\cdot\left(2^x\ln2\right)=2^x(\ln2)^2.$$

So a) $y''=-\dfrac{1}{x^2\ln2}$; b) $y''=2^x(\ln2)^2$.

**Answer.** a) $-\dfrac1{x^2\ln2}$; b) $2^x(\ln2)^2$.
:::

:::exercise Challenge
Prove that the function $y=Ae^x+Be^{-x}$ satisfies $y''=y$ for all constants $A$, $B$. Then find $A$ and $B$ given $y(0)=2$ and $y'(0)=0$ (the initial conditions).

::hint
**What you need:** $(e^{-x})'=-e^{-x}$.

**Steps:**
1. Find $y'$ and $y''$.
2. Substitute $x=0$ into $y$ and $y'$ to form a system of equations.

::solution
Part 1: prove $y''=y$. For constants $A$, $B$, the function $y=Ae^x+Be^{-x}$ is defined on $\mathbb R$. Since $\left(e^{x}\right)'=e^x$ and $\left(e^{-x}\right)'=-e^{-x}$,
$$y'=Ae^x-Be^{-x}.$$
Differentiating again, we get
$$y''=Ae^x-B\left(-e^{-x}\right)=Ae^x+Be^{-x}=y.$$
So $y''=y$ for all constants $A$, $B$.

Part 2: find $A$ and $B$. Substituting $x=0$ (note $e^0=1$) into $y$ and $y'$:
$$y(0)=A+B=2,\qquad y'(0)=A-B=0.$$

From $A-B=0$ we get $A=B$. Substituting into $A+B=2$ gives $2A=2$, so $A=1$ and $B=1$.

Check: for $y=e^x+e^{-x}$ we have $y(0)=1+1=2$ and $y'(0)=1-1=0$ (both hold).

So $y''=y$ for all $A$, $B$; and $A=B=1$, that is $y=e^x+e^{-x}$.

**Answer.** $y''=y$; $A=B=1$, that is $y=e^x+e^{-x}$.
:::

## Mini test

:::quiz
::mc TH
Let $y=x^4-2x^2$. The value of $y''(1)$ is
A. $10$.
B. $12$.
C. $4$.
D. $8$.
::key D
$y'=4x^3-4x$ and $y''=12x^2-4$, so $y''(1)=8$. Option B drops the term $-4$, and C and A get the coefficients wrong.

::mc TH
The second derivative of $y=e^{3x}$ is
A. $9e^{3x}$.
B. $3e^{3x}$.
C. $6e^{3x}$.
D. $e^{3x}$.
::key A
$y'=3e^{3x}$ and $y''=9e^{3x}$. Option B is $y'$, C adds $3+3$ instead of multiplying, and D forgets the coefficient.

::mc VD
A particle has $s(t)=t^3-6t^2+2t$ metres after $t$ seconds. The acceleration at $t=3$ is
A. $-7$ m/s$^2$.
B. $6$ m/s$^2$.
C. $12$ m/s$^2$.
D. $18$ m/s$^2$.
::key B
$v=3t^2-12t+2$ and $a=6t-12$, so $a(3)=6$. Option A is $v(3)=-7$, D is $6t$ at $t=3$ with $-12$ forgotten, and C is a calculation slip.

::mc TH
Let $y=x^3-3x^2$. The set of $x$ for which $y''>0$ is
A. $x<1$.
B. $x>0$.
C. $x>1$.
D. $x>2$.
::key C
$y''=6x-6>0\Leftrightarrow x>1$. Option A reverses the inequality, and B and D use the roots of $y'$ or $y$.

::tf NB TH VD VD
A ball thrown vertically has height $s(t)=20t-5t^2$ metres after $t$ seconds. Decide whether each statement is true or false:
a) The velocity is $v(t)=20-10t$.
b) The acceleration of the ball is $-10$ m/s$^2$ at every moment.
c) The ball is highest at $t=1$.
d) The greatest height of the ball is $20$ metres.
::key T T F T
a) True. b) True: $a=v'=-10$. c) False: $v=0$ when $t=2$. d) True: $s(2)=40-20=20$.

::sa VD
Suppose $s(t)=2t^3-9t^2+12t$ metres after $t$ seconds. Find the velocity (in m/s) at the moment when the acceleration is $0$.
::key -1.5
$v=6t^2-18t+12$, and $a=12t-18=0$ when $t=1.5$. Then $v=13.5-27+12=-1.5$.

::sa TH
Find $y''(2)$ for $y=\dfrac1x$.
::key 0.25
$y'=-\dfrac1{x^2}$ and $y''=\dfrac{2}{x^3}$, so $y''(2)=\dfrac28=0.25$.
:::
