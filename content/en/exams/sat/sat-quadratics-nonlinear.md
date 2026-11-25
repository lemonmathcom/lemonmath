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

Think of a ball thrown into the air. It climbs, slows down and falls back, and its path is a parabola. How high does it go, and when does it land? Quadratics are the heart of the Advanced Math domain and appear in almost every module, often among the hardest questions. Vietnamese students already know the quadratic formula and Viète's theorem from grade 9, which is a real advantage. What the SAT adds is the ability to move quickly between the three forms of a quadratic, to read their meaning in a context such as the path of a ball, and to spot false solutions.

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

How many times can a line cross a parabola? Twice, once, or not at all. That is exactly what a system of a linear and a quadratic equation is asking. To solve it, set the two expressions for $y$ equal, because an intersection point is where both sides give the same $y$. The resulting quadratic can have two, one or no solutions, just like the number of points where a line meets a parabola.

:::example A system with a parabola
$$y=x^2-2x+1$$
$$y=x+5$$
The point $(a, b)$ is a solution to the system, and $a>0$. What is the value of $b$?

**Solution.** Set the right sides equal:

$$x^2-2x+1=x+5\iff x^2-3x-4=0\iff(x-4)(x+1)=0.$$

So $x=4$ or $x=-1$. Since $a>0$, $a=4$ and $b=4+5=9$. You type **9**.
:::

## Radical equations, rational equations and models

Some steps in solving an equation quietly add trouble. When you square both sides of an equation, or multiply by an expression that can be zero, you may create **extraneous solutions**: numbers that solve the new equation but not the original one. So the last step is never optional: always check them in the original equation.

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
- **Sign of the vertex.** Many students slip here: $f(x)=(x+2)^2-1$ has vertex $(-2, -1)$, not $(2, -1)$.
- **Dividing by $x$.** From $x^2=5x$, dividing by $x$ loses the solution $x=0$. Factor instead: $x(x-5)=0$.
- **Not checking radical equations.** A square root is never negative, so any "solution" that makes the right side negative is extraneous.
- **Maximum value or where it happens.** "What is the maximum height?" asks for $k$; "after how many seconds?" asks for $h$.
All four are slips of reading, not of understanding. Slow down for a beat and you will avoid them.
:::

:::tip Desmos for quadratics
Let Desmos do the heavy lifting, and use it to check your answers. Type `y=-16x^2+64x+5` and click the grey points: Desmos shows the vertex and the zeros with their coordinates. For a system, type both equations and click the intersection points. For "exactly one solution" questions with a constant, add a slider and drag it until the graphs just touch.
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
The $x$-intercepts of the graph of $y=g(x)$ have $x$-coordinates that are the solutions of $g(x)=0$:
$$-(x+2)^2+9=0\iff(x+2)^2=9.$$

Hence $x+2=3$ or $x+2=-3$, that is $x=1$ or $x=-5$.

The sum of the $x$-coordinates is $1+(-5)=-4$.

So the sum of the $x$-intercepts of the graph is $-4$.

*Exam tip.* The graph is a parabola with vertex at $x=-2$, so its two $x$-intercepts are symmetric about the line $x=-2$; hence their sum is $2\cdot(-2)=-4$.

**Answer.** $-4$.
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
The equation $x^2+8x+k=0$ has no real solutions exactly when the discriminant $\Delta<0$. We have
$$\Delta=8^2-4\cdot1\cdot k=64-4k.$$

Then
$$64-4k<0\iff-4k<-64\iff k>16$$
(dividing both sides by $-4<0$ reverses the inequality).

Among the options, only $20>16$. Check: for $k=20$, $\Delta=64-80=-16<0$.

So the answer is **D**.

*Remark.* For $k=16$ we have $\Delta=0$, so the equation has exactly one solution and option B is ruled out. For $k=12$ and $k=4$, $\Delta=16>0$ and $\Delta=48>0$, so the equation has two distinct solutions and options A and C are ruled out.

**Answer.** D.
:::

:::exercise Student-produced response
What is the positive solution of $3x^2+2x-1=0$?

::hint
**What you need:** factor, using two numbers with product $-3$ and sum $2$.

**Steps:**
1. $3x^2+3x-x-1$.
2. Group and solve.

::solution
Factorise the left-hand side:
$$3x^2+2x-1=3x^2+3x-x-1=3x(x+1)-(x+1)=(3x-1)(x+1).$$

The equation becomes $(3x-1)(x+1)=0$, so $3x-1=0$ or $x+1=0$, that is $x=\dfrac13$ or $x=-1$.

Check $x=\dfrac13$: $3\cdot\dfrac19+\dfrac23-1=\dfrac13+\dfrac23-1=0$.

Of the two solutions, only $\dfrac13$ is positive.

So the positive solution of the equation is $\dfrac13$.

*Exam tip.* When entering the answer, type `1/3`.

**Answer.** $\dfrac13$.
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
The $x$-coordinates of the intersection points of the two graphs are the solutions of
$$x^2+1=2x+4\iff x^2-2x-3=0\iff(x-3)(x+1)=0.$$

Hence $x=3$ or $x=-1$.

Substituting into $y=2x+4$: for $x=3$, $y=10$; for $x=-1$, $y=2$. Check with $y=x^2+1$: $3^2+1=10$ and $(-1)^2+1=2$. The two intersection points are $(3, 10)$ and $(-1, 2)$.

The sum of the $y$-coordinates is $10+2=12$.

So the answer is **C**.

**Answer.** C.
:::

:::exercise Student-produced response
What is the solution of $\sqrt{2x+3}=x$?

::hint
**What you need:** square, solve, then check.

**Steps:**
1. $2x+3=x^2$.
2. Check each solution in the original equation.

::solution
Condition: $2x+3\ge0$. Also, since a square root is non-negative, the right-hand side must satisfy $x\ge0$ (this condition implies $2x+3\ge3>0$).

Squaring both sides, we get
$$2x+3=x^2\iff x^2-2x-3=0\iff(x-3)(x+1)=0.$$

Hence $x=3$ or $x=-1$.

Checking the condition $x\ge0$: $x=3$ is acceptable; $x=-1$ is rejected. Indeed, for $x=-1$ we have $\sqrt{2\cdot(-1)+3}=\sqrt1=1\ne-1$, so it is an extraneous solution created by squaring.

Check $x=3$: $\sqrt{2\cdot3+3}=\sqrt9=3$.

So the solution of the equation is $x=3$.

**Answer.** $3$.
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
Let $w$ (cm) be the width of the rectangle ($w>0$). The length is $4$ cm more than the width, so the length is $w+4$ (cm).

The area is $96$ cm$^2$, so
$$w(w+4)=96\iff w^2+4w-96=0\iff(w+12)(w-8)=0.$$

Hence $w=-12$ or $w=8$. Checking the condition $w>0$: reject $w=-12$, accept $w=8$.

Then the width is $8$ cm and the length is $8+4=12$ cm. Check: $8\cdot12=96$ cm$^2$.

The perimeter of the rectangle is
$$2(8+12)=40\ \text{(cm)}.$$

So the perimeter of the rectangle is $40$ centimeters.

**Answer.** $40$ centimeters.
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
The function $h(t)=-16t^2+48t+4$ ($h$ in feet, $t\ge0$ in seconds) has a parabola as its graph.

a) Since the coefficient $a=-16<0$, the parabola opens downward, and $h(t)$ attains its maximum at the vertex, whose $t$-coordinate is
$$t=-\frac{b}{2a}=-\frac{48}{2\cdot(-16)}=1.5.$$

The value $t=1.5\ge0$ is acceptable. The maximum height is
$$h(1.5)=-16\cdot2.25+48\cdot1.5+4=-36+72+4=40.$$

So the maximum height is $40$ feet, reached at $t=1.5$ seconds.

b) The ball hits the ground when $h(t)=0$ with $t\ge0$:
$$-16t^2+48t+4=0.$$

Dividing both sides by $-4$ gives $4t^2-12t-1=0$. The discriminant is $\Delta=(-12)^2-4\cdot4\cdot(-1)=144+16=160>0$, so
$$t=\frac{12\pm\sqrt{160}}{8}.$$

We have $t_1=\dfrac{12+\sqrt{160}}{8}\approx3.08$ and $t_2=\dfrac{12-\sqrt{160}}{8}\approx-0.08$. The negative solution does not satisfy $t\ge0$ (it has no meaning here), so we accept only $t_1\approx3.08$.

So the ball hits the ground after about $3.08$ seconds (rounded to the nearest hundredth).

**Answer.** a) $40$ feet, at $t=1.5$ seconds; b) $3.08$ seconds.
:::

:::exercise Zeros and coefficients
The function $f(x)=x^2+bx+c$ has zeros $2$ and $-6$. What is the value of $f(1)$?

::hint
**What you need:** the factored form, or Viète's theorem.

**Steps:**
1. $f(x)=(x-2)(x+6)$.
2. Substitute $x=1$.

::solution
The function $f(x)=x^2+bx+c$ has zeros $2$ and $-6$ and the coefficient of $x^2$ is $1$, so
$$f(x)=(x-2)(x+6).$$

Substituting $x=1$, we get
$$f(1)=(1-2)(1+6)=(-1)\cdot7=-7.$$

Check: expanding gives $f(x)=x^2+4x-12$, so $b=4$, $c=-12$ and $f(1)=1+4-12=-7$.

So $f(1)=-7$.

**Answer.** $-7$.
:::

:::exercise A rational equation
What is the sum of the solutions of $\dfrac1x+\dfrac{1}{x+2}=\dfrac43$?

::hint
**What you need:** multiply by the common denominator $3x(x+2)$, then check that no solution makes a denominator zero.

**Steps:**
1. $3(x+2)+3x=4x(x+2)$.
2. Simplify to a quadratic and solve.

::solution
Condition: $x\ne0$ and $x\ne-2$.

Multiply both sides by $3x(x+2)\ne0$ to clear the denominators:
$$3(x+2)+3x=4x(x+2)\iff6x+6=4x^2+8x.$$

Moving terms to one side and dividing by $2$:
$$4x^2+2x-6=0\iff2x^2+x-3=0\iff(2x+3)(x-1)=0.$$

Hence $x=-\dfrac32$ or $x=1$. Both values are different from $0$ and from $-2$, so they satisfy the condition.

Check: for $x=1$, $1+\dfrac13=\dfrac43$; for $x=-\dfrac32$, $-\dfrac23+2=\dfrac43$.

The sum of the solutions is
$$1+\left(-\frac32\right)=-\frac12.$$

So the sum of the solutions of the equation is $-\dfrac12$.

**Answer.** $-\dfrac12$.
:::

:::exercise Challenge
The line $y=mx-1$, where $m>0$, intersects the parabola $y=x^2$ at exactly one point. What is the value of $m$?

::hint
**What you need:** exactly one intersection point means the discriminant of the combined equation is $0$.

**Steps:**
1. $x^2=mx-1\iff x^2-mx+1=0$.
2. Set $m^2-4=0$.

::solution
The $x$-coordinates of the intersection points of the line $y=mx-1$ and the parabola $y=x^2$ are the solutions of
$$x^2=mx-1\iff x^2-mx+1=0.$$

The line meets the parabola at exactly one point exactly when this equation has exactly one solution, that is $\Delta=0$:
$$\Delta=(-m)^2-4\cdot1\cdot1=m^2-4=0\iff m=\pm2.$$

Since $m>0$, we get $m=2$.

Check: for $m=2$ the equation is $x^2-2x+1=(x-1)^2=0$, which has the double solution $x=1$, and then $y=1$. The line $y=2x-1$ touches the parabola at $(1, 1)$.

So $m=2$.

**Answer.** $2$.
:::

:::quiz
::mc NB
What is the vertex of the graph of $y=(x-4)^2+3$?
A. $(-4, 3)$
B. $(4, -3)$
C. $(4, 3)$
D. $(3, 4)$
::key C
In $a(x-h)^2+k$ the vertex is $(h, k)=(4, 3)$. Option A is the common sign mistake.

::mc TH
How many real solutions does $x^2-4x+5=0$ have?
A. $0$
B. $1$
C. $2$
D. Infinitely many
::key A
$D=16-20=-4<0$, so there is no real solution.

::mc TH
What are the solutions of $x^2-x-12=0$?
A. $-4$ and $3$
B. $4$ and $-3$
C. $6$ and $-2$
D. $12$ and $-1$
::key B
$(x-4)(x+3)=0$. Option A has the right numbers with the wrong signs.

::mc VD
What is the maximum value of $f(x)=-2x^2+8x-3$?
A. $2$
B. $3$
C. $8$
D. $5$
::key D
The vertex is at $x=-\dfrac{8}{2\cdot(-2)}=2$, and $f(2)=-8+16-3=5$. Option A is where the maximum happens, not its value.

::tf TH TH TH NB
The function $f$ is defined by $f(x)=x^2-6x+8$.
a) The zeros of $f$ are $2$ and $4$.
b) The vertex of the graph of $y=f(x)$ is $(3, -1)$.
c) $f(x)=(x-3)^2+1$ for all $x$.
d) The graph of $y=f(x)$ crosses the $y$-axis at $(0, 8)$.
::key T T F T
a) True: $(x-2)(x-4)$. b) True: $f(3)=9-18+8=-1$. c) False: $(x-3)^2-1$. d) True: $f(0)=8$.

::sa TH
What is the positive solution of $x^2+2x-15=0$?
::key 3
$(x+5)(x-3)=0$, so $x=3$ or $x=-5$.

::sa VD
What is the solution of $\sqrt{x+12}=x$?
::key 4
$x^2-x-12=0$ gives $x=4$ or $x=-3$; $x=-3$ is extraneous because $\sqrt9=3\ne-3$.
:::
