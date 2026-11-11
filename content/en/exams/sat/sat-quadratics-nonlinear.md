---
title: Quadratics and nonlinear equations
description: SAT Advanced Math: the three forms of a quadratic, vertex and zeros, the discriminant, line–parabola systems, radical and rational equations.
minutes: 40
---

:::goals
- Read the vertex, the zeros and the $y$-intercept from the standard, vertex and factored forms of a quadratic.
- Solve quadratic equations by factoring and by the quadratic formula, and use the discriminant to count real solutions.
- Solve a system of a linear and a quadratic equation.
- Solve radical and rational equations and reject extraneous solutions.
:::

Quadratics are the heart of the Advanced Math domain and appear in almost every module, often among the hardest questions. Vietnamese students already know the quadratic formula and Viète's theorem from grade 9, which is a real advantage. What the SAT adds is the ability to move quickly between the three forms of a quadratic, to read their meaning in a context such as the path of a ball, and to spot false solutions.

## Three forms of a quadratic

:::note What each form shows
| Form | Formula | Shows at a glance |
|---|---|---|
| Standard | $f(x)=ax^2+bx+c$ | $y$-intercept $c$; vertex at $x=-\dfrac{b}{2a}$ |
| Vertex | $f(x)=a(x-h)^2+k$ | vertex $(h, k)$; minimum $k$ if $a>0$, maximum $k$ if $a<0$ |
| Factored | $f(x)=a(x-r)(x-s)$ | zeros ($x$-intercepts) $r$ and $s$; vertex halfway, at $x=\dfrac{r+s}{2}$ |
:::

:::example Choosing the right form
The function $f$ is defined by $f(x)=2(x-3)^2-8$. Which equivalent form of $f(x)$ displays the $x$-intercepts of the graph of $y=f(x)$ as constants or coefficients?
A. $f(x)=2x^2-12x+10$
B. $f(x)=2(x-1)(x-5)$
C. $f(x)=2(x-3)^2-8$
D. $f(x)=(2x-6)^2-8$

**Solution.** The $x$-intercepts appear as constants only in the factored form. Expanding, $2(x-3)^2-8=2x^2-12x+10=2(x^2-6x+5)=2(x-1)(x-5)$. The answer is **B**: the intercepts are $x=1$ and $x=5$, and the vertex $(3, -8)$ lies halfway between them.
:::

:::graph $f(x)=2(x-3)^2-8$: vertex $(3, -8)$, zeros $1$ and $5$
alt: An upward parabola with its lowest point at (3, -8), crossing the x-axis at 1 and 5 and the y-axis at 10
x: -1..7
y: -10..12
plot: 2(x-3)^2 - 8
point: (3, -8) "(3, -8)" right
point: (1, 0) "1" above-left
point: (5, 0) "5" above-right
point: (0, 10) "10" right
:::

## Solving and counting solutions

:::theorem The quadratic formula and the discriminant
The solutions of $ax^2+bx+c=0$ ($a\ne0$) are $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$. The discriminant $D=b^2-4ac$ tells how many real solutions there are:
- $D>0$: two real solutions (the parabola crosses the $x$-axis twice);
- $D=0$: exactly one real solution (the vertex touches the $x$-axis);
- $D<0$: no real solution.

If the solutions are $x_1$, $x_2$, then $x_1+x_2=-\dfrac{b}{a}$ and $x_1x_2=\dfrac{c}{a}$ (Viète's theorem).
:::

:::example Exactly one solution
In the equation $x^2-6x+c=0$, $c$ is a constant. The equation has exactly one real solution. What is the value of $c$?

**Solution.** Exactly one solution means $D=0$: $36-4c=0$, so $c=9$. You type **9**. Then the equation is $(x-3)^2=0$.
:::

:::example The quadratic formula
What are the solutions of $2x^2-4x-3=0$?
A. $x=1\pm\sqrt{10}$
B. $x=1\pm\dfrac{\sqrt{10}}{2}$
C. $x=2\pm\dfrac{\sqrt{10}}{2}$
D. $x=-1\pm\dfrac{\sqrt{10}}{2}$

**Solution.** With $a=2$, $b=-4$, $c=-3$: $D=16+24=40$, and

$$x=\frac{4\pm\sqrt{40}}{4}=\frac{4\pm2\sqrt{10}}{4}=1\pm\frac{\sqrt{10}}{2}.$$

The answer is **B**. Option A forgets to divide $2\sqrt{10}$ by $4$ as well.
:::

## A line and a parabola

To solve a system of a linear and a quadratic equation, set the two expressions for $y$ equal. The resulting quadratic can have two, one or no solutions, just like the number of points where a line meets a parabola.

:::example A system with a parabola
$$y=x^2-2x+1$$
$$y=x+5$$
The point $(a, b)$ is a solution to the system, and $a>0$. What is the value of $b$?

**Solution.** Set the right sides equal:

$$x^2-2x+1=x+5\iff x^2-3x-4=0\iff(x-4)(x+1)=0.$$

So $x=4$ or $x=-1$. Since $a>0$, $a=4$ and $b=4+5=9$. You type **9**.
:::

## Radical equations, rational equations and models

When you square both sides of an equation, or multiply by an expression that can be zero, you may create **extraneous solutions**: numbers that solve the new equation but not the original one. Always check them in the original equation.

:::example An extraneous solution
What is the solution set of $\sqrt{x+7}=x-5$?
A. $\{2\}$
B. $\{9\}$
C. $\{2, 9\}$
D. There is no solution.

**Solution.** Square both sides: $x+7=x^2-10x+25\iff x^2-11x+18=0\iff(x-2)(x-9)=0$. Check: $x=9$ gives $\sqrt{16}=4=9-5$, true; $x=2$ gives $\sqrt9=3$ but $2-5=-3$, false. The answer is **B**.
:::

:::example Height of a ball
A ball is thrown upward. Its height, in feet, $t$ seconds after it is thrown is $h(t)=-16t^2+64t+5$. What is the maximum height of the ball, in feet?

**Solution.** The maximum is at the vertex, $t=-\dfrac{64}{2\cdot(-16)}=2$. Then $h(2)=-64+128+5=69$. You type **69**. In context, $5$ is the height at which the ball was released.
:::

:::warning Common traps
- **Sign of the vertex.** $f(x)=(x+2)^2-1$ has vertex $(-2, -1)$, not $(2, -1)$.
- **Dividing by $x$.** From $x^2=5x$, dividing by $x$ loses the solution $x=0$. Factor instead: $x(x-5)=0$.
- **Not checking radical equations.** A square root is never negative, so any "solution" that makes the right side negative is extraneous.
- **Maximum value or where it happens.** "What is the maximum height?" asks for $k$; "after how many seconds?" asks for $h$.
:::

:::tip Desmos for quadratics
Type `y=-16x^2+64x+5` and click the gray points: Desmos shows the vertex and the zeros with their coordinates. For a system, type both equations and click the intersection points. For "exactly one solution" questions with a constant, add a slider and drag it until the graphs just touch.
:::

:::terms
- quadratic function | hàm số bậc hai
- vertex form | dạng đỉnh
- factored form | dạng tích (dạng phân tích)
- zero, x-intercept | nghiệm, giao điểm với trục hoành
- discriminant | biệt thức
- quadratic formula | công thức nghiệm
- extraneous solution | nghiệm ngoại lai
- maximum / minimum value | giá trị lớn nhất / nhỏ nhất
:::

## Similar exercises

:::exercise Student-produced response
The function $g$ is defined by $g(x)=-(x+2)^2+9$. What is the sum of the $x$-intercepts of the graph of $y=g(x)$?

::hint
**What you need:** the zeros satisfy $(x+2)^2=9$.

**Steps:**
1. $x+2=3$ or $x+2=-3$.
2. Add the two zeros.

::solution
$x=1$ or $x=-5$, so the sum is $-4$. Shortcut: the zeros are symmetric about the vertex $x=-2$, so their sum is $2\cdot(-2)=-4$.
:::

:::exercise Multiple choice
In the equation $x^2+8x+k=0$, $k$ is a constant. The equation has no real solutions. Which of the following could be the value of $k$?
A. $12$
B. $16$
C. $4$
D. $20$

::hint
**What you need:** no real solutions means $D<0$.

**Steps:**
1. $D=64-4k$.
2. Solve $64-4k<0$.

::solution
$64-4k<0\iff k>16$. Only $20$ works: the answer is **D**. With $k=16$ there is exactly one solution.
:::

:::exercise Student-produced response
What is the positive solution of $3x^2+2x-1=0$?

::hint
**What you need:** factor, using two numbers with product $-3$ and sum $2$.

**Steps:**
1. $3x^2+3x-x-1$.
2. Group and solve.

::solution
$3x(x+1)-(x+1)=(3x-1)(x+1)=0$, so $x=\dfrac13$ or $x=-1$. The positive solution is $\dfrac13$; type `1/3`.
:::

:::exercise Multiple choice
$$y=x^2+1$$
$$y=2x+4$$
The graphs of the equations intersect at two points. What is the sum of the $y$-coordinates of these points?
A. $8$
B. $10$
C. $12$
D. $14$

::hint
**What you need:** set the two expressions for $y$ equal.

**Steps:**
1. Solve $x^2+1=2x+4$.
2. Find $y$ for each $x$ and add.

::solution
$x^2-2x-3=0\iff(x-3)(x+1)=0$. For $x=3$, $y=10$; for $x=-1$, $y=2$. The sum is $12$: answer **C**.
:::

:::exercise Student-produced response
What is the solution of $\sqrt{2x+3}=x$?

::hint
**What you need:** square, solve, then check.

**Steps:**
1. $2x+3=x^2$.
2. Check each solution in the original equation.

::solution
$x^2-2x-3=0$ gives $x=3$ or $x=-1$. For $x=-1$: $\sqrt1=1\ne-1$, so it is extraneous. The solution is $3$.
:::

## Application exercises

:::exercise A rectangle
The length of a rectangle is $4$ centimeters more than its width, and its area is $96$ square centimeters. What is the perimeter of the rectangle?

::hint
**What you need:** write the area as a product and solve the quadratic.

**Steps:**
1. Width $w$, length $w+4$: $w(w+4)=96$.
2. Keep only the positive solution.

::solution
$w^2+4w-96=0\iff(w+12)(w-8)=0$, so $w=8$ and the length is $12$. The perimeter is $2(8+12)=40$ centimeters.
:::

:::exercise A ball from a balcony
The height, in feet, of a ball $t$ seconds after it is thrown from a balcony is $h(t)=-16t^2+48t+4$.

a) What is the maximum height, and when is it reached?

b) After how many seconds does the ball hit the ground? Round to the nearest hundredth.

::hint
**What you need:** the vertex for a), the positive zero for b).

**Steps:**
1. $t=-\dfrac{48}{2\cdot(-16)}$.
2. Solve $-16t^2+48t+4=0$ with the quadratic formula (or Desmos).

::solution
a) $t=1.5$ seconds, and $h(1.5)=-36+72+4=40$ feet.

b) Divide by $-4$: $4t^2-12t-1=0$, so $t=\dfrac{12\pm\sqrt{160}}{8}$. The positive solution is $t\approx3.08$ seconds; the negative one has no meaning here.
:::

:::exercise Zeros and coefficients
The function $f(x)=x^2+bx+c$ has zeros $2$ and $-6$. What is the value of $f(1)$?

::hint
**What you need:** the factored form, or Viète's theorem.

**Steps:**
1. $f(x)=(x-2)(x+6)$.
2. Substitute $x=1$.

::solution
$f(1)=(1-2)(1+6)=-7$. (Equivalently $f(x)=x^2+4x-12$, so $b=4$, $c=-12$.)
:::

:::exercise A rational equation
What is the sum of the solutions of $\dfrac1x+\dfrac{1}{x+2}=\dfrac43$?

::hint
**What you need:** multiply by the common denominator $3x(x+2)$, then check that no solution makes a denominator zero.

**Steps:**
1. $3(x+2)+3x=4x(x+2)$.
2. Simplify to a quadratic and solve.

::solution
$6x+6=4x^2+8x\iff 2x^2+x-3=0\iff(2x+3)(x-1)=0$, so $x=1$ or $x=-\dfrac32$. Neither is $0$ or $-2$, so both are valid. Their sum is $-\dfrac12$.
:::

:::exercise Challenge
The line $y=mx-1$, where $m>0$, intersects the parabola $y=x^2$ at exactly one point. What is the value of $m$?

::hint
**What you need:** exactly one intersection point means the discriminant of the combined equation is $0$.

**Steps:**
1. $x^2=mx-1\iff x^2-mx+1=0$.
2. Set $m^2-4=0$.

::solution
$D=m^2-4=0$ gives $m=\pm2$, and since $m>0$, $m=2$. The line $y=2x-1$ touches the parabola at $(1, 1)$.
:::

:::quiz
::mc
What is the vertex of the graph of $y=(x-4)^2+3$?
A. $(-4, 3)$
B. $(4, -3)$
C. $(4, 3)$
D. $(3, 4)$
::key C
In $a(x-h)^2+k$ the vertex is $(h, k)=(4, 3)$. Option A is the common sign mistake.

::mc
How many real solutions does $x^2-4x+5=0$ have?
A. $0$
B. $1$
C. $2$
D. Infinitely many
::key A
$D=16-20=-4<0$, so there is no real solution.

::mc
What are the solutions of $x^2-x-12=0$?
A. $-4$ and $3$
B. $4$ and $-3$
C. $6$ and $-2$
D. $12$ and $-1$
::key B
$(x-4)(x+3)=0$. Option A has the right numbers with the wrong signs.

::mc
What is the maximum value of $f(x)=-2x^2+8x-3$?
A. $2$
B. $3$
C. $8$
D. $5$
::key D
The vertex is at $x=-\dfrac{8}{2\cdot(-2)}=2$, and $f(2)=-8+16-3=5$. Option A is where the maximum happens, not its value.

::tf
The function $f$ is defined by $f(x)=x^2-6x+8$.
a) The zeros of $f$ are $2$ and $4$.
b) The vertex of the graph of $y=f(x)$ is $(3, -1)$.
c) $f(x)=(x-3)^2+1$ for all $x$.
d) The graph of $y=f(x)$ crosses the $y$-axis at $(0, 8)$.
::key T T F T
a) True: $(x-2)(x-4)$. b) True: $f(3)=9-18+8=-1$. c) False: $(x-3)^2-1$. d) True: $f(0)=8$.

::sa
What is the positive solution of $x^2+2x-15=0$?
::key 3
$(x+5)(x-3)=0$, so $x=3$ or $x=-5$.

::sa
What is the solution of $\sqrt{x+12}=x$?
::key 4
$x^2-x-12=0$ gives $x=4$ or $x=-3$; $x=-3$ is extraneous because $\sqrt9=3\ne-3$.
:::
