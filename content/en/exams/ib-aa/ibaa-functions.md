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

Topic 2 is the language of the whole course. A calculus question in Section B nearly always opens with a function: you are asked for its domain, an intercept, an asymptote or an inverse before the derivatives begin. These first parts are worth easy marks, and they are lost mostly through careless notation and forgotten restrictions.

## Domain, range, composite and inverse functions

The **domain** is the set of inputs; the **range** is the set of outputs. Two restrictions come up again and again: no division by zero, and (for real functions) no square root of a negative number or logarithm of a non-positive number.

The **composite** $(f\circ g)(x)=f\big(g(x)\big)$ applies $g$ first. The **inverse** $f^{-1}$ undoes $f$: to find it, write $y=f(x)$, swap $x$ and $y$, and solve for $y$. An inverse exists only if $f$ is one-to-one; the graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y=x$, and the domain and range swap.

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

Changes inside the bracket act on $x$ and do the "opposite" of what they look like: $f(x-3)$ moves the graph right, and $f(2x)$ squeezes it horizontally.

:::example Following a point
The point $(4,-2)$ lies on the graph of $y=f(x)$. Find the coordinates of the corresponding point on the graph of $y=2f(x-3)+1$. [3 marks]

**Solution.** $x-3=4$ gives $x=7$. The new $y$-value is $2(-2)+1=-3$. The point is $(7,-3)$. Order matters for the $y$-value: stretch first, then translate.
:::

## Quadratic functions

A quadratic can be written in three forms: $f(x)=ax^2+bx+c$ (the $y$-intercept is $c$), $f(x)=a(x-h)^2+k$ (vertex $(h,k)$, axis of symmetry $x=h$) and $f(x)=a(x-p)(x-q)$ ($x$-intercepts $p$ and $q$). The **discriminant** $\Delta=b^2-4ac$ decides the number of real roots: two if $\Delta>0$, one (repeated) if $\Delta=0$, none if $\Delta<0$.

:::example Vertex form and the discriminant
(a) Write $f(x)=2x^2-8x+5$ in the form $a(x-h)^2+k$, and write down the vertex. [3 marks]
(b) Find the values of $k$ for which $x^2+kx+9=0$ has two equal roots. [3 marks]

**Solution.** (a) $2\left(x^2-4x\right)+5=2(x-2)^2-8+5=2(x-2)^2-3$. The vertex is $(2,-3)$.

(b) $\Delta=k^2-36=0$, so $k=\pm6$.
:::

## Rational functions

For $f(x)=\dfrac{ax+b}{cx+d}$ with $c\ne0$: the **vertical asymptote** is where the denominator is zero, $x=-\dfrac dc$, and the **horizontal asymptote** is $y=\dfrac ac$, the value the function approaches as $x\to\pm\infty$.

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

Many Paper 2 equations cannot be solved algebraically. Graph both sides and find the intersections, then write the answers to three significant figures. Write which equation you solved, so that a wrong final answer can still earn the method mark.

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
Domain $x<5$; range $f(x)\in\mathbb{R}$.
:::

:::exercise Composite equation
Let $f(x)=x+2$ and $g(x)=3x^2$. Solve $(g\circ f)(x)=27$. [4 marks]

::hint
**What you need:** $(g\circ f)(x)=3(x+2)^2$.

::solution
$(x+2)^2=9$, so $x+2=\pm3$: $x=1$ or $x=-5$.
:::

:::exercise Inverse of an exponential
Let $f(x)=e^{2x}-1$. Find $f^{-1}(x)$ and its domain. [4 marks]

::hint
**What you need:** swap $x$ and $y$, then take natural logarithms.

::solution
$x=e^{2y}-1$, so $e^{2y}=x+1$ and $f^{-1}(x)=\dfrac12\ln(x+1)$, with domain $x>-1$ (the range of $f$).
:::

:::exercise Transformations of a parabola
Describe the sequence of transformations that maps $y=x^2$ onto $y=-(x+1)^2+4$, and write down the vertex of the new graph. [3 marks]

::hint
**What you need:** read the bracket, the minus sign and the constant separately.

::solution
A reflection in the $x$-axis, then a translation by $1$ unit left and $4$ units up. The vertex is $(-1,4)$.
:::

:::exercise Discriminant inequality
Find the values of $k$ for which $kx^2+4x+1=0$ has two distinct real roots. [4 marks]

::hint
**What you need:** $\Delta>0$, and $k\ne0$ so that the equation is quadratic.

::solution
$16-4k>0$, so $k<4$, with $k\ne0$.
:::

## Application exercises

:::exercise A ball in flight
A ball is thrown upward, and its height in meters after $t$ seconds is $h(t)=-4.9t^2+19.6t+1.5$.
(a) Find the maximum height. [3 marks]
(b) Find the time when the ball hits the ground. [2 marks]

::hint
**What you need:** the vertex is at $t=-\dfrac{b}{2a}$; for (b) solve $h(t)=0$ with a GDC and take the positive root.

::solution
(a) $t=\dfrac{19.6}{9.8}=2$, and $h(2)=21.1$ meters.

(b) $h(t)=0$ when $t\approx4.08$ seconds (the other root is negative).
:::

:::exercise A cooling drink
The temperature of a drink, in degrees Celsius, $t$ minutes after it is poured is $T(t)=20+70e^{-0.05t}$.
(a) Write down the equation of the horizontal asymptote of the graph of $T$ and interpret it. [2 marks]
(b) Find the time when the temperature is $50$ degrees Celsius. [3 marks]

::hint
**What you need:** $e^{-0.05t}\to0$; for (b), $70e^{-0.05t}=30$.

::solution
(a) $T=20$: in the long run, the drink approaches the room temperature of $20$ degrees Celsius.

(b) $e^{-0.05t}=\dfrac37$, so $t=\dfrac{\ln(7/3)}{0.05}\approx16.9$ minutes.
:::

:::exercise A self-inverse function
Let $f(x)=\dfrac{x+2}{x-1}$, $x\ne1$. Show that $f^{-1}(x)=f(x)$. What does this tell you about the graph of $f$? [4 marks]

::hint
**What you need:** find $f^{-1}$ in the usual way.

::solution
$x=\dfrac{y+2}{y-1}$ gives $xy-x=y+2$, so $y(x-1)=x+2$ and $f^{-1}(x)=\dfrac{x+2}{x-1}=f(x)$. The graph of $f$ is symmetric about the line $y=x$.
:::

:::exercise Challenge
Find the values of $k$ for which the line $y=kx$ is tangent to the curve $y=x^2+1$. [4 marks]

::hint
**What you need:** a tangent line meets the curve at exactly one point, so the resulting quadratic has $\Delta=0$.

::solution
$x^2-kx+1=0$ has $\Delta=k^2-4=0$, so $k=\pm2$.
:::

:::quiz
::mc
Let $f(x)=3x+1$. What is $f^{-1}(7)$?
A. $22$
B. $\dfrac83$
C. $2$
D. $\dfrac{1}{22}$
::key C
$3x+1=7$ gives $x=2$. Option A is $f(7)$; option D is $\dfrac{1}{f(7)}$.

::mc
What is the range of $f(x)=x^2+2$, $x\in\mathbb{R}$?
A. $f(x)\ge2$
B. $f(x)\ge0$
C. $f(x)>2$
D. $f(x)\in\mathbb{R}$
::key A
$x^2\ge0$, so $x^2+2\ge2$, and the value $2$ is reached at $x=0$.

::mc
What is the horizontal asymptote of $y=\dfrac{4x-1}{2x+5}$?
A. $y=-\dfrac15$
B. $x=-\dfrac52$
C. $y=4$
D. $y=2$
::key D
$\dfrac ac=\dfrac42=2$. Option B is the vertical asymptote.

::mc
Let $f(x)=x^2$ and $g(x)=2x-3$. What is $(f\circ g)(1)$?
A. $-1$
B. $1$
C. $-2$
D. $4$
::key B
$g(1)=-1$ and $f(-1)=1$. Option A is $(g\circ f)(1)$.

::tf
Let $f(x)=2(x-1)^2+3$.
a) The vertex of the graph is $(1,3)$.
b) The graph opens downward.
c) The axis of symmetry is $x=-1$.
d) The equation $f(x)=0$ has no real solutions.
::key T F F T
a) True. b) False: $a=2>0$. c) False: it is $x=1$. d) True: the minimum value is $3>0$.

::sa
Let $f(x)=\sqrt{x+1}$. Find $f^{-1}(3)$.
::key 8
$\sqrt{x+1}=3$ gives $x=8$.

::sa
Find $c$ so that $x^2-6x+c=0$ has two equal roots.
::key 9
$36-4c=0$.
:::
