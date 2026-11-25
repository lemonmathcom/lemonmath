---
title: Functions: graphs, transformations, inverses
description: IB Maths AA topic 2: domain and range, composite and inverse functions, transformations, quadratics, rational functions and solving equations with a GDC.
minutes: 45
---

:::goals
- State the domain and range of a function, and restrict a domain so that an inverse exists.
- Form composite functions and find inverse functions algebraically.
- Describe and apply transformations of graphs.
- Analyze quadratic functions with the vertex form and the discriminant.
- Find the asymptotes and intercepts of rational functions $y=\dfrac{ax+b}{cx+d}$.
- Solve equations graphically on a GDC and write the answer correctly.
:::

Have you ever opened a long Section B question and not known where to start? Usually the start is a function. Topic 2 is the language of the whole course: a calculus question in Section B nearly always opens with a function, and you are asked for its domain, an intercept, an asymptote or an inverse before the derivatives begin. These first parts are worth easy marks, and they are lost mostly through careless notation and forgotten restrictions. Getting them right is the steadiest way to keep marks.

## Domain, range, composite and inverse functions

A function is like a machine: put one value in and it gives one value out. The **domain** is the set of inputs; the **range** is the set of outputs. Two restrictions come up again and again: no division by zero, and (for real functions) no square root of a negative number or logarithm of a non-positive number. At those values the calculation has no meaning, so the machine gives no output.

Join two machines, with the output of one becoming the input of the next, and we get a composite. The **composite** $(f\circ g)(x)=f\big(g(x)\big)$ applies $g$ first. To run a machine backwards we need an inverse. The **inverse** $f^{-1}$ undoes $f$: to find it, write $y=f(x)$, swap $x$ and $y$, and solve for $y$. An inverse exists only if $f$ is one-to-one, which means every output comes from just one input; the graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y=x$, and the domain and range swap.

:::example Composite and inverse
Let $f(x)=2x-3$ and $g(x)=x^2+1$.

(a) Find $(f\circ g)(2)$. [2 marks]
(b) Find $(g\circ f)(x)$. [2 marks]
(c) Find $f^{-1}(x)$. [2 marks]

**Solution.** (a) $g(2)=5$, so $(f\circ g)(2)=f(5)=7$.

(b) $(g\circ f)(x)=(2x-3)^2+1$, which can be left in this form unless the question asks to expand.

(c) $y=2x-3$; swap: $x=2y-3$, so $f^{-1}(x)=\dfrac{x+3}{2}$.
:::

:::example Restricting the domain
Let $h(x)=(x-1)^2$ for $x\ge1$.

(a) Write down the range of $h$. [1 mark]
(b) Find $h^{-1}(x)$ and state its domain. [3 marks]

**Solution.** (a) $h(x)\ge0$.

(b) $y=(x-1)^2$; swap: $x=(y-1)^2$, so $y-1=\pm\sqrt x$. Since the range of $h^{-1}$ is the domain of $h$, $y\ge1$, so we take the positive root: $h^{-1}(x)=1+\sqrt x$, with domain $x\ge0$.
:::

## Transformations

| Equation | Transformation of $y=f(x)$ |
|---|---|
| $y=f(x)+b$ | translation by $b$ units up |
| $y=f(x-a)$ | translation by $a$ units right |
| $y=pf(x)$ | vertical stretch with scale factor $p$ |
| $y=f(qx)$ | horizontal stretch with scale factor $\dfrac1q$ |
| $y=-f(x)$ | reflection in the $x$-axis |
| $y=f(-x)$ | reflection in the $y$-axis |

This is where many students go wrong, so let us read it slowly. Changes inside the bracket act on $x$ and do the "opposite" of what they look like: $f(x-3)$ moves the graph right, and $f(2x)$ squeezes it horizontally. The reason is that the input has been changed before it reaches the function; to get the same output back, the input must make up for the change, so the graph moves the other way. The next example follows a single point through the transformations.

:::example Following a point
The point $(4,-2)$ lies on the graph of $y=f(x)$. Find the coordinates of the corresponding point on the graph of $y=2f(x-3)+1$. [3 marks]

**Solution.** $x-3=4$ gives $x=7$. The new $y$-value is $2(-2)+1=-3$. The point is $(7,-3)$. Order matters for the $y$-value: stretch first, then translate.
:::

## Quadratic functions

The same parabola can be written in different ways, and each way shows something different at a glance. A quadratic can be written in three forms: $f(x)=ax^2+bx+c$ (the $y$-intercept is $c$), $f(x)=a(x-h)^2+k$ (vertex $(h,k)$, axis of symmetry $x=h$) and $f(x)=a(x-p)(x-q)$ ($x$-intercepts $p$ and $q$). Choose the form that matches the question. The **discriminant** $\Delta=b^2-4ac$ decides the number of real roots: two if $\Delta>0$, one (repeated) if $\Delta=0$, none if $\Delta<0$.

:::example Vertex form and the discriminant
(a) Write $f(x)=2x^2-8x+5$ in the form $a(x-h)^2+k$, and write down the vertex. [3 marks]
(b) Find the values of $k$ for which $x^2+kx+9=0$ has two equal roots. [3 marks]

**Solution.** (a) $2\left(x^2-4x\right)+5=2(x-2)^2-8+5=2(x-2)^2-3$. The vertex is $(2,-3)$.

(b) $\Delta=k^2-36=0$, so $k=\pm6$.
:::

## Rational functions

The graph of a rational function has lines that it keeps approaching, called asymptotes. For $f(x)=\dfrac{ax+b}{cx+d}$ with $c\ne0$: the **vertical asymptote** is where the denominator is zero, $x=-\dfrac dc$, and the **horizontal asymptote** is $y=\dfrac ac$, the value the function approaches as $x\to\pm\infty$. The graph below shows both.

:::graph The graph of $y=\dfrac{2x+1}{x-3}$ with its asymptotes
alt: A hyperbola with a vertical asymptote at x = 3 and a horizontal asymptote at y = 2; the left branch crosses the axes at x = -0.5 and y = -1/3
x: -6..12
y: -8..12
plot: (2x+1)/(x-3) ; -6..2.6
plot: (2x+1)/(x-3) ; 3.45..12
vline: 3 ; dashed
hline: 2 ; dashed
point: (-0.5, 0) "(-0.5, 0)" below-left
:::

:::example Asymptotes, intercepts and inverse
Let $f(x)=\dfrac{2x+1}{x-3}$, $x\ne3$.

(a) Write down the equations of the asymptotes. [2 marks]
(b) Find the intercepts with the axes. [2 marks]
(c) Find $f^{-1}(x)$. [3 marks]

**Solution.** (a) $x=3$ and $y=2$.

(b) $x$-intercept: $2x+1=0$, so $\left(-\dfrac12,0\right)$. $y$-intercept: $f(0)=-\dfrac13$, so $\left(0,-\dfrac13\right)$.

(c) $x=\dfrac{2y+1}{y-3}$, so $xy-3x=2y+1$, $y(x-2)=3x+1$ and $f^{-1}(x)=\dfrac{3x+1}{x-2}$, $x\ne2$. The asymptotes of $f^{-1}$ are $x=2$ and $y=3$: the asymptotes swap, as the reflection in $y=x$ predicts.
:::

## Solving equations with a GDC (Paper 2)

Many Paper 2 equations cannot be solved algebraically, however we rearrange them. The calculator is the right tool then: graph both sides and find the intersections, then write the answers to three significant figures. Write which equation you solved, so that a wrong final answer can still earn the method mark. Here is an example with two intersections.

:::example Two intersections
Solve $e^x=4-x^2$. [3 marks]

**Solution.** Graphing $y=e^x$ and $y=4-x^2$ gives two intersections: $x\approx-1.96$ and $x\approx1.06$. A common mistake is to report only the solution that appears in the default viewing window; zoom out to check that there are no others.
:::

:::warning Common traps
- **The order of composition:** $(f\circ g)(x)$ means $g$ first.
- **$f^{-1}(x)$ is not $\dfrac{1}{f(x)}$.**
- **Forgetting the domain** of an inverse, or the $\pm$ that a restricted domain removes.
- **Transformations inside the bracket:** $f(x+2)$ moves the graph left, not right.
- **Asymptotes written as numbers.** Write equations: "$x=3$", not "$3$".
- **Missing GDC solutions** outside the viewing window.
At the start we said that a function is where every long question begins. Correct notation and remembered restrictions are what keep those early marks safe. The exercises below will help that become a habit.
:::

:::terms
- domain, range | tập xác định, tập giá trị
- composite function | hàm hợp
- inverse function, one-to-one | hàm ngược, đơn ánh
- translation, stretch, reflection | phép tịnh tiến, phép co giãn, phép đối xứng
- vertex, axis of symmetry | đỉnh, trục đối xứng
- discriminant | biệt thức
- rational function | hàm phân thức
- vertical / horizontal asymptote | tiệm cận đứng / ngang
:::

## Similar exercises

:::exercise Domain and range
Let $f(x)=\ln(5-x)$. Write down the domain and the range of $f$. [2 marks]

::hint
**What you need:** the logarithm needs a positive input; logarithms take every real value.

::solution
For $f(x)=\ln(5-x)$ to be defined, we need $5-x>0$, that is $x<5$.

So the domain of $f$ is $x<5$, i.e. the interval $(-\infty, 5)$.

As $x$ runs over $(-\infty, 5)$, the expression $t=5-x$ takes every value in $(0, +\infty)$. The function $y=\ln t$ with $t>0$ takes every real value, so $f(x)$ also takes every real value.

So the range of $f$ is $\mathbb{R}$.

**Answer.** Domain $x<5$; range $f(x)\in\mathbb{R}$.
:::

:::exercise Composite equation
Let $f(x)=x+2$ and $g(x)=3x^2$. Solve $(g\circ f)(x)=27$. [4 marks]

::hint
**What you need:** $(g\circ f)(x)=3(x+2)^2$.

::solution
We have $(g\circ f)(x)=g(f(x))=g(x+2)=3(x+2)^2$.

The equation $(g\circ f)(x)=27$ becomes
$$3(x+2)^2=27.$$

Dividing both sides by $3$ gives $(x+2)^2=9$. Hence $x+2=3$ or $x+2=-3$.

Therefore $x=1$ or $x=-5$.

Check: for $x=1$, $3(1+2)^2=27$; for $x=-5$, $3(-5+2)^2=27$. Both satisfy the equation.

So the equation has two solutions, $x=1$ and $x=-5$.

**Answer.** $x=1$ or $x=-5$.
:::

:::exercise Inverse of an exponential
Let $f(x)=e^{2x}-1$. Find $f^{-1}(x)$ and its domain. [4 marks]

::hint
**What you need:** swap $x$ and $y$, then take natural logarithms.

::solution
To find the inverse, let $y=f^{-1}(x)$, that is $x=f(y)=e^{2y}-1$.

Hence $e^{2y}=x+1$.

Since $e^{2y}>0$, we need $x+1>0$. Taking natural logarithms of both sides gives $2y=\ln(x+1)$, so
$$y=\frac12\ln(x+1).$$

So $f^{-1}(x)=\dfrac12\ln(x+1)$.

The domain of $f^{-1}$ is the range of $f$. Since $e^{2x}>0$ for all $x$ and $e^{2x}$ takes every positive value, $f(x)=e^{2x}-1$ takes every value greater than $-1$. This agrees with the condition $x+1>0$ above.

So $f^{-1}(x)=\dfrac12\ln(x+1)$ with domain $x>-1$.

**Answer.** $f^{-1}(x)=\dfrac12\ln(x+1)$, domain $x>-1$.
:::

:::exercise Transformations of a parabola
Describe the sequence of transformations that maps $y=x^2$ onto $y=-(x+1)^2+4$, and write down the vertex of the new graph. [3 marks]

::hint
**What you need:** read the bracket, the minus sign and the constant separately.

::solution
We transform the graph $y=x^2$ step by step.

Step 1: a reflection in the $x$-axis (replace $y$ by $-y$), giving $y=-x^2$.

Step 2: a translation by $1$ unit to the left (replace $x$ by $x+1$), giving $y=-(x+1)^2$.

Step 3: a translation by $4$ units up (add $4$ to $y$), giving $y=-(x+1)^2+4$.

The vertex of $y=x^2$ is $(0, 0)$. The reflection in the $x$-axis leaves this point unchanged; the translation $1$ unit left takes it to $(-1, 0)$; the translation $4$ units up takes it to $(-1, 4)$.

Check: $y=-(x+1)^2+4$ has the form $y=a(x-h)^2+k$ with $h=-1$ and $k=4$, so the vertex is $(-1, 4)$.

So the sequence is: a reflection in the $x$-axis, then a translation by $1$ unit left and $4$ units up; the vertex of the new graph is $(-1, 4)$.

**Answer.** A reflection in the $x$-axis, then a translation by $1$ unit left and $4$ units up; vertex $(-1, 4)$.
:::

:::exercise Discriminant inequality
Find the values of $k$ for which $kx^2+4x+1=0$ has two distinct real roots. [4 marks]

::hint
**What you need:** $\Delta>0$, and $k\ne0$ so that the equation is quadratic.

::solution
For $kx^2+4x+1=0$ to be a quadratic equation, we need $k\ne0$.

A quadratic equation has two distinct real roots if and only if the discriminant $\Delta>0$. We have
$$\Delta=4^2-4\cdot k\cdot1=16-4k.$$

Hence $\Delta>0\iff16-4k>0\iff k<4$.

Combining with the condition $k\ne0$, we get $k<4$ and $k\ne0$.

Note: when $k=0$ the equation becomes $4x+1=0$, which has only one root, so $k=0$ is excluded.

So the equation has two distinct real roots when $k<4$ and $k\ne0$.

**Answer.** $k<4$, $k\ne0$.
:::

## Application exercises

:::exercise A ball in flight
A ball is thrown upward, and its height in meters after $t$ seconds is $h(t)=-4.9t^2+19.6t+1.5$.
(a) Find the maximum height. [3 marks]
(b) Find the time when the ball hits the ground. [2 marks]

::hint
**What you need:** the vertex is at $t=-\dfrac{b}{2a}$; for (b) solve $h(t)=0$ with a GDC and take the positive root.

::solution
a) The function $h(t)=-4.9t^2+19.6t+1.5$ is quadratic with coefficient $-4.9<0$, so its graph is a downward-opening parabola and $h$ is greatest at the vertex.

The $t$-coordinate of the vertex is
$$t=-\frac{19.6}{2\cdot(-4.9)}=\frac{19.6}{9.8}=2\ \text{(seconds)}.$$

Substituting $t=2$ into $h(t)$:
$$h(2)=-4.9\cdot4+19.6\cdot2+1.5=-19.6+39.2+1.5=21.1.$$

So the maximum height of the ball is $21.1$ meters (reached after $2$ seconds).

b) The ball hits the ground when $h(t)=0$, that is
$$-4.9t^2+19.6t+1.5=0.$$

The discriminant is $\Delta=19.6^2-4\cdot(-4.9)\cdot1.5=384.16+29.4=413.56$, so $\sqrt\Delta\approx20.336$.

The two roots are
$$t=\frac{-19.6\pm\sqrt\Delta}{2\cdot(-4.9)}=\frac{19.6\mp\sqrt\Delta}{9.8},$$
that is $t\approx4.075$ or $t\approx-0.075$.

Since $t\ge0$, we reject the negative root and take $t\approx4.075$.

So the ball hits the ground after about $4.08$ seconds.

**Answer.** a) $21.1$ meters; b) $t\approx4.08$ seconds.
:::

:::exercise A cooling drink
The temperature of a drink, in degrees Celsius, $t$ minutes after it is poured is $T(t)=20+70e^{-0.05t}$.
(a) Write down the equation of the horizontal asymptote of the graph of $T$ and interpret it. [2 marks]
(b) Find the time when the temperature is $50$ degrees Celsius. [3 marks]

::hint
**What you need:** $e^{-0.05t}\to0$; for (b), $70e^{-0.05t}=30$.

::solution
a) As $t\to+\infty$, we have $-0.05t\to-\infty$, so $e^{-0.05t}\to0$. Therefore
$$T(t)=20+70e^{-0.05t}\to20.$$

So the graph of $T$ has the horizontal asymptote $T=20$.

Interpretation: in the long run, the temperature of the drink approaches $20$ degrees Celsius (room temperature) but never falls below it.

b) Solve $T(t)=50$:
$$20+70e^{-0.05t}=50\iff70e^{-0.05t}=30\iff e^{-0.05t}=\frac37.$$

Taking natural logarithms of both sides:
$$-0.05t=\ln\frac37=-\ln\frac73,\ \text{so}\ t=\frac{\ln(7/3)}{0.05}\approx16.9.$$

This value satisfies $t\ge0$.

So the temperature of the drink is $50$ degrees Celsius after about $16.9$ minutes.

**Answer.** a) $T=20$; b) $t\approx16.9$ minutes.
:::

:::exercise A self-inverse function
Let $f(x)=\dfrac{x+2}{x-1}$, $x\ne1$. Show that $f^{-1}(x)=f(x)$. What does this tell you about the graph of $f$? [4 marks]

::hint
**What you need:** find $f^{-1}$ in the usual way.

::solution
Condition: $x\ne1$.

To find the inverse, let $y=f^{-1}(x)$, that is $x=f(y)=\dfrac{y+2}{y-1}$ with $y\ne1$.

Multiplying both sides by $y-1\ne0$:
$$x(y-1)=y+2\iff xy-x=y+2.$$

Collecting the terms containing $y$ on one side:
$$xy-y=x+2\iff y(x-1)=x+2.$$

For $x\ne1$, dividing both sides by $x-1$ gives
$$y=\frac{x+2}{x-1}.$$

So $f^{-1}(x)=\dfrac{x+2}{x-1}=f(x)$.

For the domain: since $f(x)=1+\dfrac{3}{x-1}$ takes every value except $1$, the domain of $f^{-1}$ is $x\ne1$, the same as the domain of $f$.

Interpretation: the graph of $f^{-1}$ is the image of the graph of $f$ under reflection in the line $y=x$. Since $f^{-1}=f$, the graph of $f$ coincides with its own image under this reflection.

So $f^{-1}(x)=f(x)$, and the graph of $f$ is symmetric about the line $y=x$.

**Answer.** $f^{-1}(x)=\dfrac{x+2}{x-1}=f(x)$; the graph of $f$ is symmetric about the line $y=x$.
:::

:::exercise Challenge
Find the values of $k$ for which the line $y=kx$ is tangent to the curve $y=x^2+1$. [4 marks]

::hint
**What you need:** a tangent line meets the curve at exactly one point, so the resulting quadratic has $\Delta=0$.

::solution
The $x$-coordinates of the intersection points of the line $y=kx$ and the curve $y=x^2+1$ satisfy
$$kx=x^2+1\iff x^2-kx+1=0.$$

The line is tangent to the curve if and only if this equation has a repeated root, that is $\Delta=0$.

We have $\Delta=(-k)^2-4\cdot1\cdot1=k^2-4$.

Therefore $\Delta=0\iff k^2=4\iff k=2$ or $k=-2$.

Check: for $k=2$, $x^2-2x+1=(x-1)^2$ has the repeated root $x=1$; for $k=-2$, $x^2+2x+1=(x+1)^2$ has the repeated root $x=-1$.

So the line $y=kx$ is tangent to the curve $y=x^2+1$ when $k=2$ or $k=-2$.

**Answer.** $k=\pm2$.
:::

:::quiz
::mc TH
Let $f(x)=3x+1$. What is $f^{-1}(7)$?
A. $22$
B. $\dfrac83$
C. $2$
D. $\dfrac{1}{22}$
::key C
$3x+1=7$ gives $x=2$. Option A is $f(7)$; option D is $\dfrac{1}{f(7)}$.

::mc TH
What is the range of $f(x)=x^2+2$, $x\in\mathbb{R}$?
A. $f(x)\ge2$
B. $f(x)\ge0$
C. $f(x)>2$
D. $f(x)\in\mathbb{R}$
::key A
$x^2\ge0$, so $x^2+2\ge2$, and the value $2$ is reached at $x=0$.

::mc TH
What is the horizontal asymptote of $y=\dfrac{4x-1}{2x+5}$?
A. $y=-\dfrac15$
B. $x=-\dfrac52$
C. $y=4$
D. $y=2$
::key D
$\dfrac ac=\dfrac42=2$. Option B is the vertical asymptote.

::mc TH
Let $f(x)=x^2$ and $g(x)=2x-3$. What is $(f\circ g)(1)$?
A. $-1$
B. $1$
C. $-2$
D. $4$
::key B
$g(1)=-1$ and $f(-1)=1$. Option A is $(g\circ f)(1)$.

::tf NB TH TH VD
Let $f(x)=2(x-1)^2+3$.
a) The vertex of the graph is $(1,3)$.
b) The graph opens downward.
c) The axis of symmetry is $x=-1$.
d) The equation $f(x)=0$ has no real solutions.
::key T F F T
a) True. b) False: $a=2>0$. c) False: it is $x=1$. d) True: the minimum value is $3>0$.

::sa TH
Let $f(x)=\sqrt{x+1}$. Find $f^{-1}(3)$.
::key 8
$\sqrt{x+1}=3$ gives $x=8$.

::sa TH
Find $c$ so that $x^2-6x+c=0$ has two equal roots.
::key 9
$36-4c=0$.
:::
