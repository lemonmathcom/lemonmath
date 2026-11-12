---
title: Algebra and graphs
description: IGCSE Mathematics Extended: factorising, quadratic equations, completing the square, simultaneous equations, functions, sequences and graphs.
minutes: 55
---

:::goals
- Expand and factorise expressions, including quadratics and the difference of two squares.
- Solve quadratic equations by factorising, by the formula and by completing the square.
- Solve simultaneous equations, including one linear and one quadratic.
- Rearrange formulae, simplify algebraic fractions and solve inequalities.
- Work with composite and inverse functions, and find the $n$th term of linear and quadratic sequences.
- Recognise common graphs and use them to solve equations.
:::

A rectangular garden is $5$ m longer than it is wide, and its area is $84\text{ m}^2$. How wide is it? You could guess and check: $6$ by $11$ is $66$, too small; $8$ by $13$ is $104$, too big. Guessing works for neat numbers, but it gets slow and uncertain. Algebra lets you write down what you know, $x(x+5)=84$, and solve it in a few lines.

Algebra is the largest topic in IGCSE Extended, and it supports almost every other topic. The skills in this lesson are tools, used again in geometry, trigonometry and graphs. Learn them until they feel automatic, and the longer questions on the paper become much less tiring.

## Expanding and factorising

Expanding removes brackets; factorising puts them back. Useful patterns:
$$(a+b)^2=a^2+2ab+b^2,\qquad a^2-b^2=(a-b)(a+b).$$
To factorise $ax^2+bx+c$, look for two numbers that multiply to $ac$ and add to $b$, split the middle term, and factorise in pairs. Always check by expanding.

## Quadratic equations

A quadratic equation $ax^2+bx+c=0$ can be solved three ways:

1. **Factorising**, when it factorises neatly.
2. **The formula** $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, which always works; give answers to three significant figures (or two decimal places if asked).
3. **Completing the square**, $x^2+bx+c=\left(x+\dfrac b2\right)^2-\left(\dfrac b2\right)^2+c$, which also gives the **turning point** of the graph.

:::example Factorising a quadratic
The solutions of $2x^2-5x-3=0$ are
A. $x=3$ or $x=\dfrac12$
B. $x=-3$ or $x=\dfrac12$
C. $x=3$ or $x=-\dfrac12$
D. $x=-3$ or $x=-\dfrac12$

**Solution.** We need two numbers that multiply to $2\times(-3)=-6$ and add to $-5$: they are $-6$ and $1$. So $2x^2-6x+x-3=2x(x-3)+(x-3)=(2x+1)(x-3)$.

Then $(2x+1)(x-3)=0$ gives $x=-\dfrac12$ or $x=3$.

So the answer is **C**. Check: $2(9)-15-3=0$.
:::

:::example Completing the square
Write $x^2-6x+11$ in the form $(x-p)^2+q$, and state the minimum point of $y=x^2-6x+11$.

**Solution.** Half of $-6$ is $-3$, and $(x-3)^2=x^2-6x+9$. So $x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2$.

A square is never negative, so $y$ is smallest when $x-3=0$, that is $x=3$, and then $y=2$.

So $x^2-6x+11=(x-3)^2+2$, and the minimum point is $(3,\ 2)$. Since $y\ge2$ for all $x$, the equation $x^2-6x+11=0$ has no real solutions.
:::

## Simultaneous equations

For two linear equations, eliminate a variable by adding or subtracting suitable multiples. For one linear and one quadratic equation, **substitute** the linear one into the quadratic; you usually get two pairs of solutions, which are the intersection points of a line and a curve.

:::example A line and a curve
Solve $y=x+1$ and $y=x^2-5$ simultaneously.

**Solution.** Substituting $y=x+1$ into the second equation: $x+1=x^2-5$, so $x^2-x-6=0$, that is $(x-3)(x+2)=0$.

So $x=3$ or $x=-2$. Using $y=x+1$, the corresponding values are $y=4$ and $y=-1$.

So the solutions are $x=3,\ y=4$ and $x=-2,\ y=-1$: the line meets the curve at $(3,\ 4)$ and $(-2,\ -1)$.
:::

## Functions and sequences

For functions $f$ and $g$, $fg(x)$ means "do $g$ first, then $f$". The **inverse** $f^{-1}$ undoes $f$: write $y=f(x)$, swap $x$ and $y$, and make $y$ the subject.

A **linear sequence** has $n$th term $an+b$, where $a$ is the common difference. A **quadratic sequence** has a constant **second** difference $2a$, and its $n$th term is $an^2+bn+c$.

:::example Composite and inverse functions
For $f(x)=2x-3$ and $g(x)=x^2$, which statement is true?
A. $fg(2)=1$ and $f^{-1}(x)=\dfrac{x+3}{2}$
B. $fg(2)=5$ and $f^{-1}(x)=\dfrac{x+3}{2}$
C. $fg(2)=5$ and $f^{-1}(x)=\dfrac{x-3}{2}$
D. $fg(2)=1$ and $f^{-1}(x)=2x+3$

**Solution.** First $g(2)=4$, then $f(4)=2(4)-3=5$, so $fg(2)=5$.

For the inverse, write $y=2x-3$, swap: $x=2y-3$, so $y=\dfrac{x+3}{2}$.

So $fg(2)=5$ and $f^{-1}(x)=\dfrac{x+3}{2}$, answer **B**. Option A works out $gf(2)=1^2$ instead, doing $f$ first.
:::

:::example A quadratic sequence
Find the $n$th term of $3,\ 8,\ 15,\ 24,\ \dots$

**Solution.** The first differences are $5,\ 7,\ 9$ and the second differences are all $2$, so the sequence is quadratic with $2a=2$, that is $a=1$.

Subtracting $n^2$ from each term: $3-1=2$, $8-4=4$, $15-9=6$, $24-16=8$. These form the linear sequence $2n$.

So the $n$th term is $n^2+2n$. Check: when $n=4$, $16+8=24$.
:::

## Graphs

You should recognise the shapes of the main graphs: straight lines $y=mx+c$, parabolas $y=ax^2+bx+c$, cubics $y=ax^3+\dots$, reciprocal graphs $y=\dfrac ax$ with asymptotes on the axes, and exponential graphs $y=a^x$ that pass through $(0,\ 1)$. A graph also solves equations: the solutions of $x^2-4x+1=0$ are the $x$-coordinates where $y=x^2-4x+1$ crosses the $x$-axis, and the solutions of $x^2-4x+1=x$ are where the curve meets the line $y=x$. To estimate the **gradient of a curve** at a point, draw the tangent there and find its gradient as $\dfrac{\text{rise}}{\text{run}}$.

:::graph The graph of $y=x^2-4x+1$
alt: A parabola opening upwards with its lowest point at (2, -3), crossing the x-axis at about 0.27 and 3.73
x: -1..5
y: -4..6
plot: x^2-4*x+1 ; -1..5
point: (2, -3) "(2, -3)" below
point: (0.268, 0) "0.27" above-left
point: (3.732, 0) "3.73" above-right
:::

:::warning Common traps
- **Dividing by $x$:** in $x^2=5x$, factorise as $x(x-5)=0$; dividing by $x$ loses $x=0$.
- **Signs in the formula:** use brackets, $b^2-4ac$ with $b=-5$ gives $(-5)^2=25$.
- **Order in composite functions:** $fg(x)$ means $g$ first.
- **Inequalities:** multiplying or dividing by a negative number reverses the inequality sign.
- **Two solutions:** a line and a curve usually meet twice; give both pairs.
:::

:::terms
- expand / factorise | khai triển / phân tích thành nhân tử
- difference of two squares | hiệu hai bình phương
- quadratic equation / formula | phương trình bậc hai / công thức nghiệm
- completing the square | hoàn thành bình phương
- turning point | điểm đổi chiều (đỉnh)
- simultaneous equations | hệ phương trình
- subject of a formula | biến cần biểu diễn trong công thức
- composite / inverse function | hàm hợp / hàm ngược
- $n$th term | số hạng thứ $n$
:::

## Similar exercises

:::exercise
Factorise $6x^2+7x-3$.

::hint
**What you need:** two numbers with product $6\times(-3)=-18$ and sum $7$.

::solution
We look for two numbers with product $ac=6\times(-3)=-18$ and sum $b=7$. The numbers $9$ and $-2$ work, so we split the middle term: $6x^2+9x-2x-3$.

Factorising in pairs: $3x(2x+3)-1(2x+3)=(3x-1)(2x+3)$.

So $6x^2+7x-3=(3x-1)(2x+3)$. Check: $6x^2+9x-2x-3$.

**Answer.** $(3x-1)(2x+3)$.
:::

:::exercise
Solve $3x^2-4x-2=0$, giving your answers to $2$ decimal places.

::hint
**What you need:** the quadratic formula with $a=3$, $b=-4$, $c=-2$.

::solution
The equation does not factorise neatly, so we use the formula with $a=3$, $b=-4$, $c=-2$. The discriminant is $b^2-4ac=16+24=40$, so $x=\dfrac{4\pm\sqrt{40}}{6}$.

This gives $x=\dfrac{4+6.325}{6}\approx1.72$ and $x=\dfrac{4-6.325}{6}\approx-0.39$.

So $x\approx1.72$ or $x\approx-0.39$.

**Answer.** $x=1.72$ or $x=-0.39$.
:::

:::exercise
Make $r$ the subject of $V=\dfrac13\pi r^2h$, where $r>0$.

::hint
**What you need:** undo each operation in reverse order.

::solution
We undo the operations around $r$ in reverse order. Multiplying both sides by $3$ gives $3V=\pi r^2h$, and dividing by $\pi h$ gives $r^2=\dfrac{3V}{\pi h}$.

Taking the positive square root, $r=\sqrt{\dfrac{3V}{\pi h}}$.

So $r=\sqrt{\dfrac{3V}{\pi h}}$.

**Answer.** $r=\sqrt{\dfrac{3V}{\pi h}}$.
:::

:::exercise
Simplify $\dfrac{x^2-9}{x^2+5x+6}$.

::hint
**What you need:** factorise the top and the bottom, then cancel.

::solution
The numerator is a difference of two squares, $x^2-9=(x-3)(x+3)$, and the denominator factorises as $x^2+5x+6=(x+2)(x+3)$.

Cancelling the common factor $(x+3)$ gives $\dfrac{x-3}{x+2}$.

So the fraction simplifies to $\dfrac{x-3}{x+2}$.

**Answer.** $\dfrac{x-3}{x+2}$.
:::

:::exercise
Solve $3-2x<11$ and describe the solution on a number line.

::hint
**What you need:** dividing by a negative number reverses the sign.

::solution
Subtracting $3$ from both sides gives $-2x<8$.

Dividing by $-2$ reverses the inequality: $x>-4$. On a number line, this is an open circle at $-4$ with an arrow to the right.

So $x>-4$.

**Answer.** $x>-4$.
:::

## Applied exercises

:::exercise
Return to the garden at the start: its length is $5$ m more than its width and its area is $84\text{ m}^2$. Find the width.

::hint
**What you need:** $x(x+5)=84$.

::solution
Let the width be $x$ m; then the length is $x+5$ m and $x(x+5)=84$, that is $x^2+5x-84=0$.

Factorising, $(x+12)(x-7)=0$, so $x=-12$ or $x=7$. A width cannot be negative, so $x=7$.

So the garden is $7$ m wide and $12$ m long; check: $7\times12=84$.

**Answer.** $7$ m.
:::

:::exercise
Three pens and two rulers cost $4.30$ dollars; two pens and five rulers cost $4.70$ dollars. Find the cost of one pen and one ruler.

::hint
**What you need:** $3p+2r=4.30$ and $2p+5r=4.70$.

::solution
Let a pen cost $p$ dollars and a ruler $r$ dollars: $3p+2r=4.30$ and $2p+5r=4.70$.

Multiplying the first equation by $2$ and the second by $3$: $6p+4r=8.60$ and $6p+15r=14.10$. Subtracting, $11r=5.50$, so $r=0.50$, and then $3p=4.30-1.00$, so $p=1.10$.

So a pen costs $1.10$ dollars and a ruler $0.50$ dollars.

**Answer.** Pen $1.10$ dollars; ruler $0.50$ dollars.
:::

:::exercise
For $y=x^2-4x+1$:
a) write the expression in the form $(x-p)^2+q$ and state the turning point;
b) solve $x^2-4x+1=0$, giving answers to $3$ significant figures.

::hint
**What you need:** $x^2-4x=(x-2)^2-4$.

::solution
a) $x^2-4x+1=(x-2)^2-4+1=(x-2)^2-3$, so the turning point is the minimum $(2,\ -3)$.

b) From a), $(x-2)^2=3$, so $x-2=\pm\sqrt3$ and $x=2\pm\sqrt3$, that is $x\approx3.73$ or $x\approx0.268$.

So the turning point is $(2,\ -3)$, and the solutions are $x\approx3.73$ and $x\approx0.268$.

**Answer.** a) $(x-2)^2-3$, turning point $(2,\ -3)$; b) $x=3.73$ or $x=0.268$.
:::

:::exercise Challenge
For $f(x)=3x-4$, solve $f(x)=f^{-1}(x)$.

::hint
**What you need:** $f^{-1}(x)=\dfrac{x+4}{3}$.

::solution
Writing $y=3x-4$ and swapping, $x=3y-4$, so $f^{-1}(x)=\dfrac{x+4}{3}$.

Then $3x-4=\dfrac{x+4}{3}$ gives $9x-12=x+4$, so $8x=16$ and $x=2$. Check: $f(2)=2$ and $f^{-1}(2)=2$.

So $x=2$: the graphs of $f$ and $f^{-1}$ meet on the line $y=x$.

**Answer.** $x=2$.
:::

:::quiz
::mc
$(x+3)(x-5)$ expands to
A. $x^2-15$
B. $x^2+2x-15$
C. $x^2-2x+15$
D. $x^2-2x-15$
::key D
$x^2-5x+3x-15$.

::mc
$x^2-49$ factorises to
A. $(x-7)(x+7)$
B. $(x-7)^2$
C. $(x+7)^2$
D. $x(x-49)$
::key A
A difference of two squares.

::mc
The $n$th term of $5,\ 8,\ 11,\ 14,\ \dots$ is
A. $5n$
B. $3n+5$
C. $3n+2$
D. $n+3$
::key C
Difference $3$, and $3(1)+2=5$.

::mc
If $f(x)=x+4$ and $g(x)=3x$, then $gf(1)$ is
A. $7$
B. $15$
C. $12$
D. $13$
::key B
$f(1)=5$, then $g(5)=15$.

::tf
Consider $y=x^2-6x+11=(x-3)^2+2$. Decide whether each statement is true or false.
a) The completed square form is correct.
b) The minimum value of $y$ is $2$.
c) The turning point is $(3,\ 2)$.
d) The equation $x^2-6x+11=0$ has two real roots.
::key T T T F
Since $y\ge2$, the graph never meets the $x$-axis.

::sa
For $f(x)=2x-3$, find $f(5)$.
::key 7
$2(5)-3=7$.

::sa
Find the positive solution of $x^2=x+6$.
::key 3
$(x-3)(x+2)=0$.
:::
