---
title: Quadratic equations in one unknown
description: Recognise quadratic equations, solve special cases, use the quadratic formula and the reduced discriminant, and apply them to real-life problems.
minutes: 20
---

:::goals
- Recognise a quadratic equation in one unknown and identify its coefficients $a$, $b$, $c$.
- Solve special quadratic equations ($b=0$ or $c=0$) and understand completing the square.
- Solve quadratic equations with the quadratic formula and with the reduced discriminant.
- Apply quadratic equations to real-life problems.
:::

Quadratic equations are among the oldest problems in mathematics. On Babylonian clay tablets, some of them about $4000$ years old, there are already problems such as "find the sides of a rectangle given its area and the difference of its sides". Around the year $830$, the mathematician al-Khwarizmi in Baghdad solved such equations by rearranging pieces to "complete a square", and the title of his book (*Hisab al-jabr w'al-muqabala*) gave us the word "algebra" (MacTutor, University of St Andrews).

The old problem is still close to home. Suppose your family has a rectangular garden whose length is $3$ m more than its width and whose area is $40$ m². How wide is the garden? Let the width be $x$ (m); then $x(x+3)=40$, that is $x^2+3x-40=0$. Trying numbers one by one takes time, and the solutions are not always whole numbers. This lesson gives you a formula that solves every equation like this.

## Quadratic equations in one unknown

:::definition Quadratic equation in one unknown
A quadratic equation in one unknown (a quadratic equation, for short) is an equation of the form
$$ax^2+bx+c=0,$$
where $x$ is the unknown and $a$, $b$, $c$ are given numbers called the **coefficients**, with $a\neq0$.
:::

**Going deeper.** The condition $a\neq0$ is essential: if $a=0$, the equation becomes $bx+c=0$, a linear equation that you already know how to solve. The coefficients $b$ and $c$ may be $0$. The equations $x^3-2x=0$ (a cubic) and $\dfrac1x+x=2$ (unknown in a denominator) are not quadratic equations, even though they can be turned into familiar forms.

:::example Recognising quadratic equations
Which of the following are quadratic equations in one unknown? State their coefficients $a$, $b$, $c$.

a) $5x^2-3x+1=0$.

b) $-x^2+4x=0$.

c) $2x^2-7=0$.

d) $x^3-2x=0$.

**Solution.** We compare each equation with the form $ax^2+bx+c=0$, $a\neq0$.

a) It is a quadratic equation with $a=5$, $b=-3$, $c=1$.

b) It is a quadratic equation with $a=-1$, $b=4$, $c=0$.

c) It is a quadratic equation with $a=2$, $b=0$, $c=-7$.

d) It is not a quadratic equation, because it has a term in $x^3$.

So the equations a), b), c) are quadratic equations.
:::

## Solving special quadratic equations

When $c=0$, we take out the common factor $x$ to get a product equation. When $b=0$, we rewrite the equation as $x^2=k$ and use square roots.

:::example Two special cases
Solve the following equations:

a) $3x^2-12x=0$.

b) $2x^2-18=0$.

c) $(x-2)^2=5$.

**Solution.** a) We have $3x^2-12x=0\Leftrightarrow 3x(x-4)=0\Leftrightarrow x=0$ or $x=4$.

b) We have $2x^2-18=0\Leftrightarrow x^2=9\Leftrightarrow x=3$ or $x=-3$.

c) We have $(x-2)^2=5\Leftrightarrow x-2=\sqrt5$ or $x-2=-\sqrt5$, so $x=2+\sqrt5$ or $x=2-\sqrt5$.

So a) $x=0$, $x=4$; b) $x=3$, $x=-3$; c) $x=2\pm\sqrt5$.
:::

How many solutions does $x^2=k$ have? Exactly as many as the points where the parabola $y=x^2$ (lesson [the function $y=ax^2$](lesson:function-y-equals-ax2)) meets the horizontal line $y=k$: two points when $k>0$, one when $k=0$, none when $k<0$.

:::graph The number of solutions of $x^2=k$
alt: The parabola y equals x squared; the line y equals 4 meets it at the two points (-2, 4) and (2, 4); the dashed line y equals -1 does not meet it
x: -3..3
y: -2..6
plot: x^2
hline: 4
hline: -1 ; dashed
point: (-2, 4) "-2" above-left
point: (2, 4) "2" above-right
point: (0, 0) "O" below-right
label: (2.3, 0.7) "y = -1"
label: (-2.4, 5) "y = 4"
:::

### Explore: completing the square

Part c) suggests an idea: if we can write the left-hand side as a square, we can solve the equation. Try it with $x^2-6x+5=0$. Since $(x-3)^2=x^2-6x+9$, we add $4$ to both sides:

$$x^2-6x+5=0\Leftrightarrow x^2-6x+9=4\Leftrightarrow(x-3)^2=4\Leftrightarrow x-3=\pm2.$$

Hence $x=5$ or $x=1$. This is exactly al-Khwarizmi's "completing the square". Doing the same with any coefficients gives the quadratic formula.

## The quadratic formula

:::theorem The quadratic formula
Consider the equation $ax^2+bx+c=0$ ($a\neq0$) and its **discriminant** $\Delta=b^2-4ac$.
- If $\Delta>0$, the equation has two distinct roots $x_1=\dfrac{-b+\sqrt\Delta}{2a}$, $x_2=\dfrac{-b-\sqrt\Delta}{2a}$.
- If $\Delta=0$, the equation has a repeated root $x_1=x_2=-\dfrac{b}{2a}$.
- If $\Delta<0$, the equation has no solutions.
:::

**Why?** Divide both sides by $a$ and complete the square as in the exploration; we get

$$\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}=\frac{\Delta}{4a^2}.$$

The right-hand side has denominator $4a^2>0$, so its sign is the sign of $\Delta$. This is exactly the form $X^2=k$ above: $\Delta>0$ gives two roots, $\Delta=0$ gives one, and $\Delta<0$ gives none (a square is never negative). The word "discriminant" means the expression that *discriminates*, or tells apart, the three cases.

:::example The three cases of $\Delta$
Solve the following equations:

a) $2x^2-5x+2=0$.

b) $4x^2-4x+1=0$.

c) $x^2+x+3=0$.

**Solution.** a) We have $\Delta=(-5)^2-4\cdot2\cdot2=25-16=9>0$ and $\sqrt\Delta=3$. The equation has two distinct roots

$$x_1=\frac{5+3}{4}=2,\qquad x_2=\frac{5-3}{4}=\frac12.$$

b) We have $\Delta=(-4)^2-4\cdot4\cdot1=0$. The equation has a repeated root $x_1=x_2=\dfrac{4}{2\cdot4}=\dfrac12$.

c) We have $\Delta=1^2-4\cdot1\cdot3=-11<0$. The equation has no solutions.

So a) $x=2$, $x=\dfrac12$; b) $x=\dfrac12$; c) no solutions.
:::

:::note When $a$ and $c$ have opposite signs
If $a$ and $c$ have opposite signs, then $ac<0$, so $\Delta=b^2-4ac>0$: the equation always has two distinct roots. For example, $3x^2-5x-7=0$ has two distinct roots, with no need to work out $\Delta$.
:::

Now we answer the opening question, going through all four steps of solving a problem.

:::example The garden from the opening
A rectangular garden has length $3$ m more than its width and area $40$ m². Find the width and the length of the garden.

**Solution.**

*Understand.* We know the difference of the sides ($3$ m) and the area ($40$ m²); we need both sides.

*Plan.* Let the width be $x$ (m), $x>0$; the length is $x+3$ (m). The area gives the equation $x(x+3)=40$, that is $x^2+3x-40=0$.

*Solve.* We have $\Delta=3^2-4\cdot1\cdot(-40)=169>0$ and $\sqrt\Delta=13$. Hence

$$x_1=\frac{-3+13}{2}=5,\qquad x_2=\frac{-3-13}{2}=-8.$$

Since $x>0$, $x=5$. So the garden is $5$ m wide and $8$ m long.

*Look back.* Check: $5\cdot8=40$ and $8-5=3$. The root $-8$ is not a length, but it is not meaningless: $x^2+3x-40=(x-5)(x+8)$, so $-8$ is the "second root" of the same equation. Is there another method? We could look for two numbers with product $40$ that differ by $3$; the lesson on [Viète's theorem](lesson:vietes-theorem) turns this guess into a method.
:::

## The reduced discriminant

When $b$ is even, write $b=2b'$. Then $\Delta=4b'^2-4ac=4(b'^2-ac)$, and the fractions in the quadratic formula can be simplified by $2$.

:::theorem The formula with the reduced discriminant
Consider the equation $ax^2+bx+c=0$ ($a\neq0$) with $b=2b'$ and the reduced discriminant $\Delta'=b'^2-ac$.
- If $\Delta'>0$, the equation has two distinct roots $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.
- If $\Delta'=0$, the equation has a repeated root $x_1=x_2=-\dfrac{b'}{a}$.
- If $\Delta'<0$, the equation has no solutions.
:::

:::example Using the reduced discriminant
Solve the following equations:

a) $3x^2-8x+4=0$.

b) $x^2+6x+4=0$.

**Solution.** a) We have $b'=-4$, $\Delta'=(-4)^2-3\cdot4=4>0$ and $\sqrt{\Delta'}=2$. Hence $x_1=\dfrac{4+2}{3}=2$ and $x_2=\dfrac{4-2}{3}=\dfrac23$.

b) We have $b'=3$ and $\Delta'=3^2-1\cdot4=5>0$. Hence $x_{1,2}=-3\pm\sqrt5$.

So a) $x=2$, $x=\dfrac23$; b) $x=-3+\sqrt5$, $x=-3-\sqrt5$.
:::

:::tip Checking with a calculator
A scientific calculator has a mode for solving quadratic equations: enter $a$, $b$, $c$ and it gives the roots. Use it to **check** your answers; in your written work, still show $\Delta$ (or $\Delta'$) and the formula.
:::

:::warning Common mistakes
- **Wrong sign of $b$.** Wrong: for $2x^2-5x+2=0$, writing $x=\dfrac{-5\pm3}{4}$. Why it is wrong: $-b=-(-5)=5$. Right: $x=\dfrac{5\pm3}{4}$.
- **Wrong sign in $\Delta$ when $c<0$.** Wrong: $x^2+3x-40=0$ has $\Delta=9-160$. Right: $\Delta=9-4\cdot1\cdot(-40)=9+160=169$.
- **Dividing both sides by $x$.** Wrong: "$3x^2=12x\Rightarrow3x=12\Rightarrow x=4$". Why it is wrong: dividing by $x$ loses the root $x=0$. Right: $3x(x-4)=0$, so $x=0$ or $x=4$.
:::

**Connections.** Quadratic equations tie together many things you have learnt: algebraic identities (to complete the square), square roots (to find the roots), product equations (when $c=0$) and the parabola $y=x^2$ (to "see" the number of solutions). Next, [Viète's theorem](lesson:vietes-theorem) gives the sum and product of the roots without solving, and the lesson [solving word problems by forming equations](lesson:g9-equation-word-problems) uses the quadratic formula in many real situations.

## Key terms

:::terms
- quadratic equation in one unknown | phương trình bậc hai một ẩn
- coefficient | hệ số
- discriminant | biệt thức
- quadratic formula | công thức nghiệm
- reduced discriminant | biệt thức thu gọn
- two distinct roots | hai nghiệm phân biệt
- repeated root | nghiệm kép
- no (real) solutions | vô nghiệm
- completing the square | đưa về bình phương
:::

## Summary

- A quadratic equation: $ax^2+bx+c=0$ with $a\neq0$.
- $c=0$: take out the common factor $x$; $b=0$: rewrite as $x^2=k$.
- $\Delta=b^2-4ac$: $\Delta>0$ two roots $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$; $\Delta=0$ a repeated root $-\dfrac{b}{2a}$; $\Delta<0$ no solutions.
- $b=2b'$: $\Delta'=b'^2-ac$, $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.
- If $a$ and $c$ have opposite signs, there are always two distinct roots.
- Real-life problems: check each root against the condition on the unknown.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Solve the following equations:

a) $5x^2-20=0$.

b) $-2x^2+6x=0$.

::hint
**What you need:** if $b=0$, rewrite as $x^2=k$; if $c=0$, take out a common factor.

**Steps:**
1. a) Rearrange and divide by $5$.
2. b) Write $-2x(x-3)=0$.

::solution
a) We have $5x^2=20\Leftrightarrow x^2=4\Leftrightarrow x=2$ or $x=-2$.

b) We have $-2x(x-3)=0\Leftrightarrow x=0$ or $x=3$.

So a) $x=\pm2$; b) $x=0$, $x=3$.

**Answer.** a) $x=2$, $x=-2$; b) $x=0$, $x=3$.
:::

:::exercise
Solve the following equations using the quadratic formula:

a) $x^2-7x+10=0$.

b) $2x^2+x-1=0$.

c) $9x^2-6x+1=0$.

::hint
**What you need:** $\Delta=b^2-4ac$ and the quadratic formula.

**Steps:**
1. Identify $a$, $b$, $c$ and work out $\Delta$.
2. Look at the sign of $\Delta$, then apply the formula.

::solution
a) We have $\Delta=49-40=9$ and $\sqrt\Delta=3$, so $x_1=\dfrac{7+3}{2}=5$ and $x_2=\dfrac{7-3}{2}=2$.

b) We have $\Delta=1+8=9$, so $x_1=\dfrac{-1+3}{4}=\dfrac12$ and $x_2=\dfrac{-1-3}{4}=-1$.

c) We have $\Delta=36-36=0$, so the equation has a repeated root $x_1=x_2=\dfrac{6}{18}=\dfrac13$.

So a) $x=5$, $x=2$; b) $x=\dfrac12$, $x=-1$; c) $x=\dfrac13$.

**Answer.** a) $5$; $2$. b) $\dfrac12$; $-1$. c) Repeated root $\dfrac13$.
:::

:::exercise
Solve the following equations using the reduced discriminant:

a) $x^2-4x-1=0$.

b) $5x^2+2x+1=0$.

::hint
**What you need:** $b=2b'$, $\Delta'=b'^2-ac$.

**Steps:**
1. Find $b'$ and work out $\Delta'$.
2. Apply $x_{1,2}=\dfrac{-b'\pm\sqrt{\Delta'}}{a}$.

::solution
a) We have $b'=-2$ and $\Delta'=4+1=5>0$, so $x_{1,2}=2\pm\sqrt5$.

b) We have $b'=1$ and $\Delta'=1-5=-4<0$, so the equation has no solutions.

So a) $x=2+\sqrt5$, $x=2-\sqrt5$; b) no solutions.

**Answer.** a) $x=2\pm\sqrt5$; b) no solutions.
:::

:::exercise
Solve the following equations:

a) $(x+1)(x-3)=2x-7$.

b) $x(x+2)=3(x+4)$.

::hint
**What you need:** expand and rearrange into the form $ax^2+bx+c=0$.

**Steps:**
1. Expand both sides and move everything to the left-hand side.
2. Solve the resulting quadratic equation.

::solution
a) We have $x^2-2x-3=2x-7\Leftrightarrow x^2-4x+4=0$. We have $\Delta'=4-4=0$, so the equation has a repeated root $x=2$.

b) We have $x^2+2x=3x+12\Leftrightarrow x^2-x-12=0$. We have $\Delta=1+48=49$, so $x_1=\dfrac{1+7}{2}=4$ and $x_2=\dfrac{1-7}{2}=-3$.

So a) $x=2$; b) $x=4$, $x=-3$.

**Answer.** a) $x=2$; b) $x=4$, $x=-3$.
:::

:::exercise
Suppose a ball is kicked straight up from the ground and its height after $t$ seconds is $h=-5t^2+20t$ (metres). After how many seconds is the ball at a height of $15$ m?

::hint
**What you need:** solve the equation $-5t^2+20t=15$ with $t\geq0$.

**Steps:**
1. Rearrange and divide both sides by $-5$.
2. Solve the resulting equation, then explain what the two roots mean.

::solution
We have $-5t^2+20t=15\Leftrightarrow t^2-4t+3=0$. We have $\Delta'=4-3=1$, so $t_1=2+1=3$ and $t_2=2-1=1$.

So the ball is at a height of $15$ m twice: after $1$ second (on the way up) and after $3$ seconds (on the way down).

**Answer.** After $1$ second and after $3$ seconds.
:::

:::exercise
Suppose Mrs Lan puts $100$ million dong into a savings account at an interest rate $r$ per year, and the first year's interest is added to the capital before the second year's interest is worked out (compound interest). After $2$ years she receives $112.36$ million dong. Find the interest rate $r$.

::hint
**What you need:** each year the amount is multiplied by $1+r$.

**Steps:**
1. Form the equation $100(1+r)^2=112.36$.
2. Solve it as $X^2=k$ with $X=1+r>0$.

::solution
After $2$ years the amount is $100(1+r)^2$ (million dong). We have

$$100(1+r)^2=112.36\Leftrightarrow(1+r)^2=1.1236\Leftrightarrow 1+r=1.06\ \text{(since }1+r>0).$$

Hence $r=0.06$.

So the interest rate is $6\%$ per year.

**Answer.** $r=6\%$ per year.
:::

:::exercise
Solve the equation $\dfrac{x}{x-2}-\dfrac1x=\dfrac{2}{x(x-2)}$. (Revise [equations with the unknown in a denominator](lesson:equations-reducible-to-linear).)

::hint
**What you need:** find the conditions for the equation to be defined, clear the denominators and check the conditions.

**Steps:**
1. Conditions: $x\neq0$, $x\neq2$.
2. Multiply both sides by $x(x-2)$.
3. Solve the resulting quadratic equation and reject any root that breaks the conditions.

::solution
The equation is defined for $x\neq0$, $x\neq2$. Clearing the denominators, we get

$$x^2-(x-2)=2\Leftrightarrow x^2-x=0\Leftrightarrow x(x-1)=0\Leftrightarrow x=0\ \text{ or }\ x=1.$$

The value $x=0$ breaks the conditions, and $x=1$ satisfies them.

So the equation has the solution $x=1$.

**Answer.** $x=1$.
:::

:::exercise
**(2.0 marks)**

a) Solve the equation $2x^2-3x-5=0$.

b) Find the coordinates of the points where the parabola $(P): y=x^2$ meets the line $(d): y=x+2$.

c) Solve the equation $x^2-2\sqrt2x-6=0$.

::hint
**What you need:** the quadratic formula; the $x$-coordinates of the points where $(P)$ meets $(d)$ are the roots of $x^2=x+2$.

**Steps:**
1. a) Work out $\Delta$.
2. b) Solve $x^2-x-2=0$, then work out $y=x^2$.
3. c) Use $b'=-\sqrt2$.

::solution
a) We have $\Delta=9+40=49$, so $x_1=\dfrac{3+7}{4}=\dfrac52$ and $x_2=\dfrac{3-7}{4}=-1$.

b) The $x$-coordinates of the points of intersection are the roots of $x^2=x+2\Leftrightarrow x^2-x-2=0$. We have $\Delta=1+8=9$, so $x=2$ or $x=-1$. When $x=2$, $y=4$; when $x=-1$, $y=1$.

c) We have $b'=-\sqrt2$, $\Delta'=2+6=8$ and $\sqrt{\Delta'}=2\sqrt2$. Hence $x_1=\sqrt2+2\sqrt2=3\sqrt2$ and $x_2=\sqrt2-2\sqrt2=-\sqrt2$.

So a) $x=\dfrac52$, $x=-1$; b) the points of intersection are $(2, 4)$ and $(-1, 1)$; c) $x=3\sqrt2$, $x=-\sqrt2$.

**Answer.** a) $\dfrac52$; $-1$. b) $(2, 4)$, $(-1, 1)$. c) $3\sqrt2$; $-\sqrt2$.
:::

:::exercise Challenge
From a rectangular metal sheet $30$ cm long and $20$ cm wide, four equal squares are cut from the corners and the sides are folded up to make an open box. How long must the side of each square be for the base of the box to have area $336$ cm²? What is the volume of the box then, in cubic centimetres?

::hint
**What you need:** the base of the box is a rectangle $(30-2x)\times(20-2x)$, and the height of the box is $x$.

**Steps:**
1. Let the side of the square be $x$ (cm), $0<x<10$.
2. Form and solve the equation $(30-2x)(20-2x)=336$.
3. Check against the condition, then find the volume.

::solution
Let the side of the square be $x$ (cm), $0<x<10$. From the problem we have the equation

$$(30-2x)(20-2x)=336\Leftrightarrow4x^2-100x+264=0\Leftrightarrow x^2-25x+66=0.$$

We have $\Delta=625-264=361$ and $\sqrt\Delta=19$, so $x_1=\dfrac{25+19}{2}=22$ (rejected, since $22>10$) and $x_2=\dfrac{25-19}{2}=3$ (satisfies the condition). The volume of the box is then $336\cdot3=1008$ (cm³).

So the side of each square is $3$ cm and the box holds $1008$ cm³.

**Answer.** $3$ cm; $1008$ cm³.
:::

## Mini test

:::quiz
::mc
Which of the following is a quadratic equation in one unknown?
A. $2x+3=0$.
B. $x^3-x=0$.
C. $-x^2+5=0$.
D. $0x^2+3x-1=0$.
::key C
$a=-1\neq0$, $b=0$, $c=5$. A and D (with $a=0$) are linear equations, and B is a cubic equation.

::mc
The discriminant $\Delta$ of the equation $2x^2-3x-2=0$ is
A. $25$.
B. $-7$.
C. $17$.
D. $7$.
::key A
$\Delta=9-4\cdot2\cdot(-2)=9+16=25$. B has the wrong sign of $c$, C uses $2ac$ instead of $4ac$, and D writes $b^2=-9$.

::mc
The equation $x^2-6x+9=0$
A. has two distinct roots $3$ and $-3$.
B. has a repeated root $x=3$.
C. has a repeated root $x=-3$.
D. has no solutions.
::key B
$\Delta'=9-9=0$, repeated root $x=-\dfrac{b'}{a}=3$. A confuses it with $x^2=9$, C has the wrong sign of $b'$, and D works out $\Delta'=-9-9<0$ by mistake.

::mc
The reduced discriminant $\Delta'$ of the equation $3x^2-4x-1=0$ is
A. $7$.
B. $1$.
C. $28$.
D. $19$.
::key A
$b'=-2$, $\Delta'=4-3\cdot(-1)=7$. B has the wrong sign of $c$, C is $\Delta$, and D uses $b^2$ instead of $b'^2$.

::tf
Consider the equation $x^2-2x-8=0$. Decide whether each statement is true or false.
a) The coefficients are $a=1$, $b=-2$, $c=-8$.
b) $\Delta'=9$.
c) The equation has the two roots $x=-4$ and $x=2$.
d) The equation has a repeated root.
::key T T F F
a) True. b) True: $\Delta'=1+8=9$. c) False: $x=1\pm3$, that is $x=4$, $x=-2$. d) False: $\Delta'>0$.

::sa
Find the positive root of the equation $x^2+x-12=0$.
::key 3
$\Delta=1+48=49$, $x=\dfrac{-1\pm7}{2}$, that is $x=3$ or $x=-4$.

::sa
Find the smaller root of the equation $2x^2-5x-3=0$ (give your answer as a decimal).
::key -0.5
$\Delta=25+24=49$, $x=\dfrac{5\pm7}{4}$, that is $x=3$ or $x=-0.5$.
:::
