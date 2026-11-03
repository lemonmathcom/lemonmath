---
title: The sign of a quadratic expression
description: Use the discriminant and the roots to find where ax²+bx+c is positive or negative, and solve quadratic, quotient and real-life inequalities.
minutes: 25
---

:::goals
- Determine the sign of $f(x)=ax^2+bx+c$ from $a$ and $\Delta$.
- Solve quadratic inequalities with the sign theorem or the parabola.
- Solve simple quotient inequalities and real-life problems.
:::

Minh throws a ball straight up. Its height after $t$ seconds is $h=-5t^2+20t$ (metres). After $1$ second the ball is at $15$ m, after $2$ seconds at $20$ m, and after $3$ seconds back at $15$ m. So during which time interval is the ball **higher** than $15$ m?

This question is a quadratic inequality. To solve it, we need to know where a quadratic expression is positive and where it is negative.

## The sign theorem

### Explore: where does the sign change?

Take $f(x)=x^2-5x+6$. We compute a few values:

| $x$ | $0$ | $1$ | $2$ | $2.5$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $6$ | $2$ | $0$ | $-0.25$ | $0$ | $2$ | $6$ |
| sign | $+$ | $+$ | $0$ | $-$ | $0$ | $+$ | $+$ |

The quadratic is positive on both sides and negative in the middle. The sign changes only at $x=2$ and $x=3$, which are exactly the roots of $f(x)=0$.

:::graph The parabola $y=x^2-5x+6$
alt: An upward parabola crossing the x-axis at x equal 2 and x equal 3, below the axis between the roots
x: -1..6
y: -2..8
plot: x^2 - 5x + 6
point: (2, 0) "2" below
point: (3, 0) "3" below
:::

This observation holds for every quadratic expression, and it is stated as the theorem below.

:::definition Quadratic expression
A **quadratic expression** is an expression $f(x)=ax^2+bx+c$ with $a\neq 0$. Its discriminant is $\Delta=b^2-4ac$.
:::

:::theorem Sign of $f(x)=ax^2+bx+c$
- If $\Delta<0$: $f(x)$ has the **same sign as $a$** for every $x$.
- If $\Delta=0$: $f(x)$ has the same sign as $a$ for every $x\neq-\dfrac{b}{2a}$, and $f\left(-\dfrac{b}{2a}\right)=0$.
- If $\Delta>0$, with roots $x_1<x_2$: $f(x)$ has the same sign as $a$ when $x$ lies **outside** $[x_1, x_2]$, and the opposite sign when $x$ lies **between** the roots.
:::

### Why is it true?

When $\Delta>0$ we can write $f(x)=a(x-x_1)(x-x_2)$. If $x$ lies outside the roots, the factors $x-x_1$ and $x-x_2$ have the same sign, so their product is positive and $f(x)$ has the sign of $a$. If $x$ lies between the roots, the two factors have opposite signs, so $f(x)$ has the opposite sign to $a$.

When $\Delta\le 0$, we rewrite
$$f(x)=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].$$
The expression in square brackets is non-negative (because $-\Delta\ge 0$), and it is $0$ only when $\Delta=0$ and $x=-\dfrac{b}{2a}$. So $f(x)$ has the sign of $a$ at every other point.

## Solving quadratic inequalities

To solve a quadratic inequality, we work in this order:

1. Move every term to one side, so the other side is $0$.
2. Compute $\Delta$ and find the roots (if any).
3. Use the sign theorem and keep the part with the sign you want.
4. Write the solution set: round brackets for $<$, $>$; include the roots for $\le$, $\ge$.

We start with the most familiar case: two roots and $a>0$.

:::example Two roots, $a>0$
Solve $x^2-5x+6<0$.

**Solution.** The right-hand side is already $0$, so we find the roots and then use the sign theorem:

$$\Delta=(-5)^2-4\cdot1\cdot6=1>0,\qquad x=\frac{5\pm1}{2}\ \Rightarrow\ x_1=2,\ x_2=3.$$

Since $a=1>0$, the quadratic is negative when $x$ lies between the roots. The sign "$<$" is strict, so the roots are not included.

So the solution set is $S=(2, 3)$.

**Check.** The table in the exploration gives $f(2.5)=-0.25<0$ and $f(0)=6>0$, which agrees with the conclusion.
:::

When $a<0$, the parabola opens downward and the picture is flipped. This is where mistakes happen most often.

:::example Two roots, $a<0$
Solve $-x^2+4x-3\ge 0$.

**Solution.** The coefficient is $a=-1<0$, so "the sign of $a$" here means **negative**. We find the roots first:

$$\Delta=4^2-4\cdot(-1)\cdot(-3)=4>0,\qquad x=\frac{-4\pm2}{-2}\ \Rightarrow\ x_1=1,\ x_2=3.$$

The quadratic is negative (the sign of $a$) outside the roots, so it is positive between them. The sign "$\ge$" lets us include both roots.

So the solution set is $S=[1, 3]$.

**Check.** Multiplying both sides by $-1$ and reversing the sign gives $x^2-4x+3\le 0$. This quadratic has $a=1>0$ and is non-positive between the roots $1$ and $3$: the same result.
:::

The next two examples are special cases: with $\Delta<0$ there is no root to cut the number line, and with $\Delta=0$ there is only one point.

:::example A quadratic with no roots
Solve the two inequalities $x^2+x+1>0$ and $2x^2-3x+5<0$.

**Solution.** Both quadratics have $\Delta<0$, so each one has the sign of $a$ for every $x$:

$$\begin{aligned} x^2+x+1:&\quad \Delta=1-4=-3<0,\ a=1>0\ \Rightarrow\ f(x)>0\ \ \forall x;\\ 2x^2-3x+5:&\quad \Delta=9-40=-31<0,\ a=2>0\ \Rightarrow\ f(x)>0\ \ \forall x. \end{aligned}$$

So the first inequality has solution set $S=\mathbb{R}$, and the second has no solution, $S=\varnothing$.
:::

:::example A double root
Solve the two inequalities $x^2-6x+9\le 0$ and $x^2-6x+9>0$.

**Solution.** Here $\Delta=36-36=0$, and the left-hand side is a perfect square:

$$x^2-6x+9=(x-3)^2\ge 0\quad\text{for every } x,\ \text{with equality only when } x=3.$$

The expression is never negative, so "$\le 0$" happens only where it equals $0$. And "$>0$" holds at every point except $x=3$.

So the first inequality has $S=\{3\}$, and the second has $S=\mathbb{R}\setminus\{3\}$.
:::

## A quotient inequality

With a fraction, the sign of the quotient depends on the signs of both the numerator and the denominator, and the denominator must not be $0$. A sign table keeps track of both at once.

:::example Sign table for a fraction
Solve $\dfrac{x-1}{x+2}\le 0$.

**Solution.** The sign of the quotient can only change where the numerator or the denominator is $0$: the numerator is $0$ at $x=1$, the denominator at $x=-2$ (this value is excluded). We make a sign table:

| $x$ | $(-\infty, -2)$ | $(-2, 1)$ | $(1, +\infty)$ |
|---|---|---|---|
| $x-1$ | $-$ | $-$ | $+$ |
| $x+2$ | $-$ | $+$ | $+$ |
| quotient | $+$ | $-$ | $+$ |

The quotient is negative on $(-2, 1)$ and equals $0$ at $x=1$ (included because of "$\le$"). At $x=-2$ the quotient is undefined.

So the solution set is $S=(-2, 1]$.
:::

## A real-life problem

Now we have all the tools to answer the question about the ball from the start of the lesson.

:::example When is the ball above 15 m?
The height of the ball after $t$ seconds is $h=-5t^2+20t$ (metres). During which time interval is the ball higher than $15$ m?

**Solution.** We solve $h>15$. Move $15$ to the left, then divide both sides by $-5$ (a negative number, so the sign reverses):

$$\begin{aligned} -5t^2+20t>15 &\iff -5t^2+20t-15>0\\ &\iff t^2-4t+3<0\\ &\iff (t-1)(t-3)<0\\ &\iff 1<t<3. \end{aligned}$$

The last step uses the sign theorem: $a=1>0$, so the quadratic is negative between the roots $1$ and $3$.

So the ball is higher than $15$ m for $1<t<3$, that is, for $2$ seconds.

**Check.** At $t=0.5$: $h=8.75<15$, so the ball is not high enough yet, which agrees because $0.5$ lies outside $(1, 3)$.
:::

:::graph Height of the ball
alt: A downward parabola of the height of a ball with a dashed horizontal line at 15 and the points at t equal 1 and t equal 3
x: 0..4
y: -2..22
plot: -5x^2 + 20x
hline: 15 ; dashed
point: (1, 15) "1" below-right
point: (3, 15) "3" below-left
:::

:::warning Common mistakes
- **Not flipping the picture when $a<0$.** Wrong: "$-x^2+4x-3\ge 0$, so take outside the roots, $S=(-\infty, 1]\cup[3, +\infty)$". Why it is wrong: "outside the roots" is where the quadratic has **the sign of $a$**, which here is negative. Right: take the middle, $S=[1, 3]$.
- **Dividing by a negative number without reversing.** Wrong: $-5t^2+20t-15>0\iff t^2-4t+3>0$. Why it is wrong: dividing by $-5$ reverses the inequality. Right: $t^2-4t+3<0$.
- **Jumping to a conclusion when $\Delta<0$.** Wrong: "$2x^2-3x+5<0$ has no roots, so $S=\mathbb{R}$". Why it is wrong: $\Delta<0$ only says the quadratic always has the sign of $a$, here always positive. Right: $S=\varnothing$.
- **Including a value that makes the denominator $0$.** Wrong: $\dfrac{x-1}{x+2}\le 0$ has $S=[-2, 1]$. Why it is wrong: the fraction is undefined at $x=-2$. Right: $S=(-2, 1]$.
:::

## Key terms

:::terms
- quadratic expression | tam thức bậc hai
- discriminant | biệt thức
- root | nghiệm
- sign table | bảng xét dấu
- quadratic inequality | bất phương trình bậc hai
- solution set | tập nghiệm
- parabola | parabol
- double root | nghiệm kép
:::

## Summary

- $f(x)=ax^2+bx+c$, $\Delta=b^2-4ac$.
- $\Delta<0$: $f(x)$ always has the sign of $a$. $\Delta=0$: the sign of $a$, except at $x=-\dfrac{b}{2a}$ (where it is $0$).
- $\Delta>0$: "between: opposite, outside: same": opposite sign to $a$ between the roots, the sign of $a$ outside them.
- Solving an inequality: one side zero → $\Delta$ and roots → sign theorem → solution set, minding the equals sign.
- Multiplying or dividing by a negative number reverses the inequality. For a quotient: make a sign table and exclude values that make the denominator $0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Solve $x^2-4x+3>0$.

::hint
**What you need:** a quadratic with roots $x_1<x_2$ has the sign of $a$ outside $[x_1, x_2]$ and the opposite sign between the roots.

**Steps:**
1. Find the two roots of $x^2-4x+3$.
2. Look at the sign of $a$.
3. Keep the part where the quadratic is positive.

::solution
$x^2-4x+3=(x-1)(x-3)$ has roots $1$ and $3$. Since $a=1>0$, the quadratic is positive outside the roots; "$>$" is strict, so the roots are not included.

**Answer.** $S=(-\infty, 1)\cup(3, +\infty)$.
:::

:::exercise
Solve $x^2-9\le 0$.

::hint
**What you need:** the identity $a^2-b^2=(a-b)(a+b)$ and the sign theorem.

**Steps:**
1. Factorise $x^2-9$ to see the two roots.
2. With $a>0$, the quadratic is non-positive between the roots.

::solution
$x^2-9=(x-3)(x+3)$ has roots $\pm3$. Since $a=1>0$, the quadratic is $\le 0$ between the roots, and both roots count because of the equals sign.

**Answer.** $S=[-3, 3]$.
:::

:::exercise
Solve $-x^2+2x+8>0$.

::hint
**What you need:** when $a<0$, the quadratic is positive **between** the roots.

**Steps:**
1. Take out the minus sign: $-x^2+2x+8=-(x^2-2x-8)$, then factorise.
2. Find the roots and keep the middle part.

::solution
$-x^2+2x+8=-(x-4)(x+2)$, with roots $-2$ and $4$. Since $a=-1<0$, the quadratic is positive between the roots.

**Answer.** $S=(-2, 4)$.
:::

:::exercise
Solve $2x^2-x-3\ge 0$.

::hint
**What you need:** the quadratic formula $x=\dfrac{-b\pm\sqrt{\Delta}}{2a}$ with $\Delta=b^2-4ac$.

**Steps:**
1. Compute $\Delta$, then the two roots.
2. With $a>0$, the quadratic is $\ge 0$ outside the roots, roots included.

::solution
$\Delta=1+24=25$, roots $x=\dfrac{1\pm5}{4}$, that is $x=-1$ and $x=\dfrac32$. Since $a=2>0$, the quadratic is non-negative outside the roots, roots included.

**Answer.** $S=(-\infty, -1]\cup\left[\dfrac32, +\infty\right)$.
:::

:::exercise
Solve $x^2+4x+5>0$.

::hint
**What you need:** if $\Delta<0$, the quadratic has the sign of $a$ for every $x$.

**Steps:**
1. Compute $\Delta$.
2. Look at the sign of $a$ and conclude.

::solution
$\Delta=16-20=-4<0$ and $a=1>0$, so the quadratic is positive for every $x$.

**Answer.** $S=\mathbb{R}$.
:::

:::exercise
Solve $x^2-4x+4\le 0$.

::hint
**What you need:** $(a-b)^2=a^2-2ab+b^2$, and a square is never negative.

**Steps:**
1. Write the left side as a square.
2. Ask: when is a square "$\le 0$"?

::solution
$x^2-4x+4=(x-2)^2\ge 0$ for every $x$, so it is $\le 0$ only when it equals $0$, that is $x=2$.

**Answer.** $S=\{2\}$.
:::

:::exercise
A rectangular garden has perimeter $20$ m and width $x$ m (the width is not larger than the length). For which $x$ is the area at least $21$ m²?

::hint
**What you need:** half the perimeter is length plus width; area is length times width.

**Steps:**
1. Write the length in terms of $x$.
2. Set up "area $\ge 21$" and solve it.
3. Combine with the condition that the width is not larger than the length.

::solution
Half the perimeter is $10$ m, so the length is $10-x$ and the area is $x(10-x)$. We need
$$\begin{aligned} x(10-x)\ge 21 &\iff x^2-10x+21\le 0\\ &\iff (x-3)(x-7)\le 0\\ &\iff 3\le x\le 7. \end{aligned}$$
The width is not larger than the length: $x\le 10-x$, that is $x\le 5$.

**Answer.** $3\le x\le 5$ (metres). Check: $x=3$ gives an area of $3\cdot7=21$ m², just enough.
:::

:::exercise
Solve $\dfrac{x+1}{x-3}<0$.

::hint
**What you need:** a quotient is negative when the numerator and denominator have opposite signs; the denominator must not be $0$.

**Steps:**
1. Find where the numerator is $0$ and where the denominator is $0$.
2. Check the signs of both on each interval.

::solution
The numerator is $0$ at $x=-1$, the denominator at $x=3$ (excluded). On $(-1, 3)$ the numerator is positive and the denominator negative, so the quotient is negative; outside that interval they have the same sign, so the quotient is positive.

**Answer.** $S=(-1, 3)$.
:::

:::exercise Challenge
Solve $x^4-5x^2+4<0$.

::hint
**What you need:** substitute $t=x^2$ ($t\ge 0$) to get a quadratic in $t$.

**Steps:**
1. Let $t=x^2$ and solve $t^2-5t+4<0$.
2. Go back to $x$: turn the condition on $t$ into a condition on $x^2$, then on $x$.

::solution
With $t=x^2$: $t^2-5t+4=(t-1)(t-4)<0 \iff 1<t<4$. So $1<x^2<4$, that is $1<|x|<2$.

**Answer.** $S=(-2, -1)\cup(1, 2)$.
:::

:::exercise Challenge
Find the domain of $y=\sqrt{x^2-3x-4}$.

::hint
**What you need:** $\sqrt{A}$ is defined when $A\ge 0$.

**Steps:**
1. Write the condition $x^2-3x-4\ge 0$.
2. Factorise and read the sign.

::solution
We need $x^2-3x-4=(x-4)(x+1)\ge 0$. Since $a=1>0$, this holds outside the roots $-1$ and $4$, roots included.

**Answer.** $D=(-\infty, -1]\cup[4, +\infty)$.
:::

## Mini test

:::quiz
::mc
The quadratic $f(x)=x^2-6x+8$ is negative exactly when
A. $x<2$ or $x>4$.
B. $2<x<4$.
C. $x<-4$ or $x>-2$.
D. $-4<x<-2$.
::key B
The roots are $2$ and $4$ and $a=1>0$, so $f(x)<0$ between the roots.

::mc
The solution set of $x^2+2x+3\le 0$ is
A. $\mathbb{R}$.
B. $\varnothing$.
C. $\{-1\}$.
D. $[-3, 1]$.
::key B
Here $b=2b'$ with $b'=1$, so the reduced discriminant is $\Delta'=b'^2-ac=1-3=-2<0$; with $a=1>0$, the quadratic is always positive; no $x$ makes it $\le 0$.

::mc
Which quadratic is negative for every real $x$?
A. $x^2-x-1$.
B. $-x^2+4x-4$.
C. $-x^2+x-1$.
D. $-2x^2+3x+1$.
::key C
For C: $a=-1<0$ and $\Delta=1-4=-3<0$, so it is always negative. Option B equals $-(x-2)^2$, which is $0$ at $x=2$, so it is not "always negative".

::mc
The solution set of $\dfrac{x-3}{x+1}\ge 0$ is
A. $(-1, 3]$.
B. $[-1, 3]$.
C. $(-\infty, -1)\cup[3, +\infty)$.
D. $(-\infty, -1]\cup[3, +\infty)$.
::key C
The quotient is non-negative when the numerator and denominator have the same sign, or the numerator is $0$. The value $x=-1$ makes the denominator $0$, so it is excluded; $x=3$ is included.

::tf
Let $f(x)=-x^2+2x+3$.
a) $f(x)$ has roots $x=-1$ and $x=3$.
b) $f(x)>0$ for every $x\in(-1, 3)$.
c) $f(4)>0$.
d) The inequality $f(x)\ge 3$ has solution set $[0, 2]$.
::key T T F T
a) True: $f(-1)=f(3)=0$. b) True: $a<0$, so the quadratic is positive between the roots. c) False: $f(4)=-5$. d) True: $f(x)\ge 3\iff -x^2+2x\ge 0\iff 0\le x\le 2$.

::sa
How many integers $x$ satisfy $x^2-5x-6<0$?
::key 6
The roots are $-1$ and $6$, so $-1<x<6$. The integers are $0, 1, 2, 3, 4, 5$: there are $6$.

::sa
The height of a ball after $t$ seconds is $h(t)=-5t^2+30t$ metres. For how many seconds is the ball higher than $40$ m?
::key 2
$-5t^2+30t>40\iff t^2-6t+8<0\iff 2<t<4$. That is $2$ seconds.
:::
