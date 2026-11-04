---
title: Studying and graphing a function
description: Apply the standard procedure to cubics and two kinds of rational function, read graphs, count the solutions of an equation and write tangent lines.
minutes: 25
---

:::goals
- Carry out the procedure: domain, limits and asymptotes, table of variations, extrema, intercepts, graph.
- Analyse and sketch cubic functions, $y=\dfrac{ax+b}{cx+d}$ and $y=\dfrac{ax^2+bx+c}{mx+n}$.
- Read the features of a function from its graph and use the graph to count the solutions of an equation.
- Write the tangent line to a graph at a point.
:::

Lan wants to draw the graph of $y=x^3-3x+1$ by hand. She plots five points:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y$ | $-1$ | $3$ | $1$ | $-1$ | $3$ |

and joins them up. But what if, between two plotted points, the graph has a "bump" that Lan cannot see? And how many solutions does the equation $x^3-3x+1=0$ have?

However many points we plot, we cannot be sure what the graph does between two neighbouring points. Analysing the function gives us that certainty: it brings together everything we have learnt about derivatives, extrema and asymptotes into a complete picture of the shape of the graph.

## The curve-sketching procedure

### Explore: the derivative tells the shape

The derivative $y'=3x^2-3=3(x-1)(x+1)$ is zero only at $x=-1$ and $x=1$. So the graph can only "turn round" at those two points: it goes up on $(-\infty, -1)$, down on $(-1, 1)$ and up on $(1, +\infty)$. There is no other bump between Lan's points.

So a few points and the table of variations are enough to draw the graph with the right shape. That is the idea of the procedure.

**A closer look.** Each step of the procedure answers a question about shape: the domain tells us whether the graph is "broken"; the sign of $y'$ tells us whether it goes up or down; limits and asymptotes tell us where it goes far away; the intercepts place it in the right position.

**Connections.** The procedure brings together the three previous lessons (monotonicity and extrema, maximum and minimum values, asymptotes). The graph we draw is then used straight away to count the solutions of equations and to describe real-life quantities.

:::note Procedure for analysing a function and sketching its graph
1. **Domain** of the function.
2. **Behaviour:**
   - compute $y'$ and find the points where $y'=0$ or $y'$ is undefined;
   - find the limits at infinity, the infinite limits and the asymptotes (if any);
   - draw the table of variations; state where the function increases or decreases, and its extrema.
3. **Graph:** find the intercepts with the axes, a few special points, note any symmetry, then draw.
:::

## Cubic functions

:::example Analysing $y=x^3-3x+1$
Analyse $y=x^3-3x+1$ and sketch its graph. How many solutions does $x^3-3x+1=0$ have?

**Solution.** The domain is $\mathbb{R}$. We have

$$y'=3(x-1)(x+1)=0\iff x=\pm1;\qquad \lim_{x\to+\infty}y=+\infty,\quad \lim_{x\to-\infty}y=-\infty.$$

Substituting $x=\pm1$ into the function, we get $y(-1)=3$, $y(1)=-1$. The table of variations:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-1$ | $\nearrow$ | $+\infty$ |

The function is increasing on $(-\infty, -1)$ and $(1, +\infty)$ and decreasing on $(-1, 1)$; local maximum $(-1, 3)$, local minimum $(1, -1)$. The graph meets the y-axis at $(0, 1)$.

The number of solutions equals the number of points where the graph meets the x-axis. On each of $(-\infty, -1)$, $(-1, 1)$, $(1, +\infty)$ the function is monotonic and $y$ changes sign exactly once (from $-\infty$ up to $3$, from $3$ down to $-1$, from $-1$ up to $+\infty$).

So the equation $x^3-3x+1=0$ has exactly $3$ solutions (approximately $-1.88$, $0.35$, $1.53$).

**Look back.** Can we tell that a cubic equation has three solutions without drawing? We see that $y_{\text{max}}\cdot y_{\text{min}}=3\cdot(-1)<0$: the two turning points lie on opposite sides of the x-axis, so the graph must cross the x-axis three times. If this product were positive, the equation would have only one solution.
:::

:::graph The graph of $y=x^3-3x+1$
alt: A cubic graph rising to the local maximum point (-1, 3), falling through (0, 1) to the local minimum point (1, -1), then rising, crossing the x-axis at three points
x: -3..3
y: -3..5
plot: x^3 - 3x + 1
point: (-1, 3) "(-1, 3)" above
point: (1, -1) "(1, -1)" below
point: (0, 1) "(0, 1)" right
:::

The point $(0, 1)$ is the midpoint of the two turning points, and the graph is symmetric about it. Every cubic graph has a **centre of symmetry**: the point whose x-coordinate is the root of $y''=0$ (here $y''=6x=0\iff x=0$).

Not every cubic has extrema. When $y'$ does not change sign, the graph goes one way only.

:::example A cubic with no extrema
Analyse $y=-x^3+3x^2-3x+2$ and sketch its graph.

**Solution.** The domain is $\mathbb{R}$. We have

$$y'=-3x^2+6x-3=-3(x-1)^2\le0,\qquad y'=0\iff x=1.$$

We have $\lim\limits_{x\to+\infty}y=-\infty$, $\lim\limits_{x\to-\infty}y=+\infty$. Since $y'\le0$ and $y'$ is zero at only one point, the function is decreasing on $\mathbb{R}$ and has no extremum. We have $y''=-6x+6=0\iff x=1$, $y(1)=1$, so the centre of symmetry is $I(1, 1)$, where the tangent is horizontal.

Intercepts: $y(0)=2$; and $-x^3+3x^2-3x+2=-(x-2)(x^2-x+1)=0\iff x=2$ (since $x^2-x+1$ has $\Delta=-3<0$).

So the function is decreasing on $\mathbb{R}$; the graph passes through $(0, 2)$, $I(1, 1)$ and $(2, 0)$.
:::

:::graph The graph of $y=-x^3+3x^2-3x+2$
alt: A cubic graph that always falls, passing through (0, 2), the centre of symmetry I(1, 1) with a horizontal tangent, and meeting the x-axis at (2, 0)
x: -1..3
y: -2..4
plot: -x^3 + 3x^2 - 3x + 2
point: (0, 2) "(0, 2)" right
point: (1, 1) "I" above-right
point: (2, 0) "(2, 0)" left
:::

## Rational functions

For a rational function, the step "limits and asymptotes" matters more: we draw the asymptotes first as dashed lines, then draw the branches close to them.

:::example Analysing $y=\dfrac{x+1}{x-1}$
Analyse $y=\dfrac{x+1}{x-1}$ and sketch its graph.

**Solution.** The domain is $D=\mathbb{R}\setminus\{1\}$. Applying the formula $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$, we have

$$y'=\frac{1\cdot(-1)-1\cdot1}{(x-1)^2}=\frac{-2}{(x-1)^2}<0\quad\text{for every } x\in D.$$

Since $\lim\limits_{x\to\pm\infty}y=1$, $y=1$ is a horizontal asymptote; since $\lim\limits_{x\to1^+}y=+\infty$, $\lim\limits_{x\to1^-}y=-\infty$, $x=1$ is a vertical asymptote. The table of variations:

| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y'$ | | $-$ | $\Vert$ | $-$ | |
| $y$ | $1$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $1$ |

The graph meets the coordinate axes at $(-1, 0)$ and $(0, -1)$.

So the function is decreasing on each interval $(-\infty, 1)$ and $(1, +\infty)$ and has no extremum; the graph is symmetric about the intersection $I(1, 1)$ of the two asymptotes.
:::

:::graph The graph of $y=\dfrac{x+1}{x-1}$
alt: A two-branch graph lying in the lower-left and upper-right corners formed by the dashed asymptotes x equal 1 and y equal 1, passing through (-1, 0) and (0, -1)
x: -6..8
y: -6..8
plot: (x + 1)/(x - 1)
vline: 1 ; dashed
hline: 1 ; dashed
point: (-1, 0) "(-1, 0)" above-left
point: (0, -1) "(0, -1)" below-left
:::

For $y=\dfrac{ax^2+bx+c}{mx+n}$, we divide first: we see the oblique asymptote, and the derivative becomes easier.

:::example Analysing $y=\dfrac{x^2-2x+2}{x-1}$
Analyse $y=\dfrac{x^2-2x+2}{x-1}$ and sketch its graph.

**Solution.** The domain is $D=\mathbb{R}\setminus\{1\}$. We have $x^2-2x+2=(x-1)(x-1)+1$, so

$$y=x-1+\frac{1}{x-1},\qquad y'=1-\frac{1}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}.$$

We have $y'=0\iff x=0$ or $x=2$; $y(0)=-2$, $y(2)=2$. The graph has the vertical asymptote $x=1$ (since $\lim\limits_{x\to1^+}y=+\infty$) and the oblique asymptote $y=x-1$ (since $\dfrac{1}{x-1}\to0$). The table of variations:

| $x$ | $-\infty$ | | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-2$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $2$ | $\nearrow$ | $+\infty$ |

The graph meets the y-axis at $(0, -2)$ and does not meet the x-axis (since $x^2-2x+2$ has $\Delta'=1-2<0$).

So the function has the local maximum $(0, -2)$, the local minimum $(2, 2)$, the vertical asymptote $x=1$ and the oblique asymptote $y=x-1$.
:::

:::graph The graph of $y=\dfrac{x^2-2x+2}{x-1}$
alt: A two-branch graph; the left branch has the local maximum point (0, -2), the right branch the local minimum point (2, 2), both close to the dashed vertical asymptote x equal 1 and the dashed oblique asymptote y equal x minus 1
x: -5..7
y: -8..10
plot: (x^2 - 2x + 2)/(x - 1)
plot: x - 1 ; dashed
vline: 1 ; dashed
point: (0, -2) "(0, -2)" below-left
point: (2, 2) "(2, 2)" above-right
:::

## Reading graphs and applications

Once we have the graph, we can read a lot without computing again, for example the number of solutions of $f(x)=k$ (for a given number $k$): it is the number of intersection points of the graph with the horizontal line $y=k$.

:::graph The graph of a cubic $y=f(x)$ and the line $y=1$
alt: A cubic graph through (-1, 0), with local maximum (0, 4) and local minimum (2, 0); the dashed horizontal line y equal 1 cuts the graph at three points
x: -2..4
y: -1..6
plot: x^3 - 3x^2 + 4
hline: 1 ; dashed
point: (0, 4) "(0, 4)" above
point: (2, 0) "(2, 0)" below
point: (-1, 0) "(-1, 0)" below-left
:::

:::example Reading a graph
A road crosses some hills (an imagined situation). In the side profile, the height of the road above the foot of the hills at a point $x$ km from a marker post is $f(x)=ax^3+bx^2+cx+d$ (tens of metres), $-1\le x\le 3$. The graph in the figure above has local maximum point $(0, 4)$ and local minimum point $(2, 0)$.
a) Find $a$, $b$, $c$, $d$.
b) How many points of this stretch of road are at a height of $10$ m, that is $f(x)=1$? How many are at a height of $40$ m?

**Solution.** a) We have $f'(x)=3ax^2+2bx+c$. From the given information, $f(0)=4$, $f'(0)=0$, $f'(2)=0$, $f(2)=0$. Hence

$$\begin{aligned} f(0)=4 &\Rightarrow d=4; & f'(0)=0 &\Rightarrow c=0;\\ f'(2)=0 &\Rightarrow 12a+4b=0\Rightarrow b=-3a; & f(2)=0 &\Rightarrow 8a-12a+4=0\Rightarrow a=1. \end{aligned}$$

It follows that $b=-3$, hence $f(x)=x^3-3x^2+4$.

b) Since the line $y=1$ lies between the local minimum value $0$ and the local maximum value $4$, it cuts the graph at $3$ points, all with $-1\le x\le 3$ (since $f(-1)=0<1$ and $f(3)=4>1$). The line $y=4$ passes through the local maximum point (touching the graph there) and cuts the right-hand part at one more point. Indeed, $x^3-3x^2+4=4\iff x^2(x-3)=0$.

So $f(x)=x^3-3x^2+4$; the road has $3$ points at a height of $10$ m and $2$ points at a height of $40$ m ($x=0$ and $x=3$).
:::

Finally, we recall how to write a tangent line from grade 11: the tangent at $M(x_0, y_0)$ is $y=f'(x_0)(x-x_0)+y_0$.

:::example A tangent to a rational graph
Write the equation of the tangent to the graph of $y=\dfrac{x+1}{x-1}$ at the point with x-coordinate $x_0=2$.

**Solution.** By Example 3, we have $y'=\dfrac{-2}{(x-1)^2}$. Hence

$$y_0=\frac{2+1}{2-1}=3,\qquad y'(2)=\frac{-2}{1^2}=-2.$$

Substituting into the equation $y=f'(x_0)(x-x_0)+y_0$, we get $y=-2(x-2)+3$.

So the tangent is $y=-2x+7$.
:::

:::warning Common mistakes
- **Drawing a rational graph in one stroke.** Wrong: joining the two branches of $y=\dfrac{x+1}{x-1}$ across $x=1$. Why it is wrong: the function is undefined at $x=1$, and the vertical asymptote splits the graph into two branches. Right: draw the dashed asymptotes first, with one branch on each side.
- **Miscounting when the line passes through a turning point.** Wrong: "$f(x)=4$ has $3$ solutions because $4$ is within the range of the function". Why it is wrong: $y=4$ only touches the graph at the local maximum and does not cross it twice there. Right: $2$ solutions.
- **Not dividing, so missing the oblique asymptote.** Wrong: "$y=\dfrac{x^2-2x+2}{x-1}$ only has a vertical asymptote". Why it is wrong: $y=x-1+\dfrac{1}{x-1}$. Right: there is also the oblique asymptote $y=x-1$.
- **Using $y'(x)$ instead of $y'(x_0)$ in a tangent.** Wrong: $y=\dfrac{-2}{(x-1)^2}(x-2)+3$. Why it is wrong: the gradient is a number. Right: $y=-2(x-2)+3$.
:::

## Key terms

:::terms
- curve sketching (analysing a function) | khảo sát hàm số
- curve-sketching procedure | sơ đồ khảo sát
- table of variations | bảng biến thiên
- centre of symmetry | tâm đối xứng
- intersection point | giao điểm
- tangent line | tiếp tuyến
- gradient | hệ số góc
- number of solutions of an equation | số nghiệm của phương trình
:::

## Summary

- Procedure: domain → $y'$, limits, asymptotes, table of variations → intercepts, special points → draw.
- A cubic has either two extrema or none; its centre of symmetry is the point where $y''=0$.
- $y=\dfrac{ax+b}{cx+d}$: always increasing or always decreasing on each interval; its two asymptotes meet at the centre of symmetry.
- $y=\dfrac{ax^2+bx+c}{mx+n}$: divide to get the oblique asymptote and a tidy derivative.
- The number of solutions of $f(x)=k$ is the number of intersections of the graph with the line $y=k$. Tangent at $x_0$: $y=f'(x_0)(x-x_0)+f(x_0)$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Analyse $y=x^3-3x$ and sketch its graph.

::hint
**What you need:** the procedure; an odd function has a graph symmetric about the origin.

**Steps:**
1. Compute $y'$, find the extrema and draw the table of variations.
2. Find the x-intercepts: $x(x^2-3)=0$.

::solution
The domain is $\mathbb{R}$. We have $y'=3(x-1)(x+1)$. The function is increasing on $(-\infty, -1)$ and $(1, +\infty)$, and decreasing on $(-1, 1)$. The local maximum point of the graph is $(-1, 2)$ and the local minimum point is $(1, -2)$. The graph meets the x-axis at $x=0$, $x=\pm\sqrt3$, and is symmetric about $O$ (since $y''=6x=0$ at $x=0$).

So the graph has the origin $O$ as its centre of symmetry.

**Answer.** Local maximum $(-1, 2)$, local minimum $(1, -2)$; the graph passes through $(-\sqrt3, 0)$, $O(0, 0)$, $(\sqrt3, 0)$, with centre of symmetry $O$.
:::

:::exercise
Analyse $y=\dfrac{x-2}{x+1}$ and sketch its graph.

::hint
**What you need:** $y=\dfrac{ax+b}{cx+d}$ has $y'=\dfrac{ad-bc}{(cx+d)^2}$, vertical asymptote $x=-\dfrac dc$ and horizontal asymptote $y=\dfrac ac$.

**Steps:**
1. Compute $y'$ and its sign.
2. Find the two asymptotes and the intercepts.

::solution
The domain is $D=\mathbb{R}\setminus\{-1\}$. We have $y'=\dfrac{1\cdot1-(-2)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}>0$, so the function is increasing on each interval $(-\infty, -1)$ and $(-1, +\infty)$. The graph has the vertical asymptote $x=-1$ and the horizontal asymptote $y=1$, and meets the coordinate axes at $(2, 0)$, $(0, -2)$.

So the graph is symmetric about the intersection of its two asymptotes.

**Answer.** Increasing on each interval of the domain; asymptotes $x=-1$, $y=1$; centre of symmetry $I(-1, 1)$; the graph passes through $(2, 0)$ and $(0, -2)$.
:::

:::exercise
Consider the function $y=\dfrac{x^2+x+1}{x+1}$. Find the extrema of the function and the asymptotes of its graph.

::hint
**What you need:** divide to write $y=x+\dfrac{1}{x+1}$.

**Steps:**
1. Compute $y'=1-\dfrac{1}{(x+1)^2}$ and write it as one fraction.
2. Draw the table of variations with $-2$, $-1$, $0$ marked.

::solution
We have $y'=\dfrac{x(x+2)}{(x+1)^2}=0\iff x=0$ or $x=-2$. We see that $y'$ is positive on $(-\infty, -2)$ and $(0, +\infty)$, and negative on $(-2, -1)$ and $(-1, 0)$; $y(-2)=-3$, $y(0)=1$. The graph has the vertical asymptote $x=-1$ and the oblique asymptote $y=x$.

So the function has a local maximum at $x=-2$ and a local minimum at $x=0$.

**Answer.** Local maximum $(-2, -3)$, local minimum $(0, 1)$; vertical asymptote $x=-1$, oblique asymptote $y=x$.
:::

:::exercise
Using the graph of $y=x^3-3x$ (exercise 1), find the number of solutions of each of the following equations: a) $x^3-3x=1$; b) $x^3-3x=-3$.

::hint
**What you need:** the number of solutions of $f(x)=k$ is the number of intersections of the graph with the line $y=k$.

**Steps:**
1. Compare $k$ with the local maximum $2$ and the local minimum $-2$.
2. Count the intersections.

::solution
a) Since $-2<1<2$, the line $y=1$ cuts all three "pieces" of the graph. Hence the equation has $3$ solutions. b) Since $-3<-2$, the line $y=-3$ only cuts the left-hand part (where $y$ goes from $-\infty$ up to $2$). Hence the equation has $1$ solution.

So equation a) has three solutions and equation b) has one solution.

**Answer.** a) $3$ solutions; b) $1$ solution.
:::

:::exercise
Consider the function $y=x^3-6x^2+9x-2$. Decide whether each statement is true or false.

a) The graph meets the y-axis at the point $(0, -2)$.

b) The local maximum point of the graph is $(1, 2)$.

c) The equation $x^3-6x^2+9x-2=0$ has exactly two solutions.

d) The centre of symmetry of the graph is the point $(2, 0)$.

::hint
**What you need:** the table of variations of a cubic; the centre of symmetry has the root of $y''=0$ as its x-coordinate.

**Steps:**
1. Compute $y'$ and find the extrema.
2. Compare $0$ with the local maximum and minimum values to count solutions.
3. Solve $y''=0$.

::solution
We have $y'=3(x-1)(x-3)$; $y(1)=2$ (local maximum), $y(3)=-2$ (local minimum).

a) **True**. We have $y(0)=-2$.

b) **True**. Since $y'$ changes sign $+\to-$ at $x=1$ and $y(1)=2$, the point $(1, 2)$ is the local maximum point of the graph.

c) **False**. Since $-2<0<2$, the line $y=0$ cuts the graph at $3$ points (the solutions are $2$ and $2\pm\sqrt3$).

d) **True**. We have $y''=6x-12=0\iff x=2$ and $y(2)=8-24+18-2=0$.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
The tangent to the graph of $y=x^3-3x^2+4$ at the point with x-coordinate $x_0=3$ meets the y-axis at a point. Find the y-coordinate of that point.

::hint
**What you need:** the tangent at $x_0$ is $y=f'(x_0)(x-x_0)+f(x_0)$ (derivatives, grade 11).

**Steps:**
1. Compute $f(3)$ and $f'(3)$.
2. Write the tangent and put $x=0$.

::solution
We have $f(3)=27-27+4=4$ and $f'(x)=3x^2-6x$, so $f'(3)=9$. The equation of the tangent is $y=9(x-3)+4=9x-23$. Substituting $x=0$, we get $y=-23$.

So the tangent meets the y-axis at the point with y-coordinate $-23$.

**Answer.** $-23$.
:::

:::exercise
The number of bacteria in a culture after $t$ hours is $N(t)=\dfrac{500t+100}{t+1}$ (thousand), $t\ge0$. Analyse the function on $[0, +\infty)$. Find the number of bacteria at the start, state whether the number increases or decreases, and find the value it approaches in the long run.

::hint
**What you need:** the sign of $N'(t)$ tells whether it increases or decreases; the horizontal asymptote gives the long-run value.

**Steps:**
1. Compute $N(0)$ and $N'(t)$.
2. Compute $\lim\limits_{t\to+\infty}N(t)$.

::solution
We have $N(0)=100$ and $N'(t)=\dfrac{500(t+1)-(500t+100)}{(t+1)^2}=\dfrac{400}{(t+1)^2}>0$, so $N$ is increasing on $[0, +\infty)$. We have $\lim\limits_{t\to+\infty}N(t)=500$, so the graph has the horizontal asymptote $N=500$.

So the number of bacteria always increases and approaches $500$ thousand.

**Answer.** $100$ thousand at the start; the number always increases and approaches $500$ thousand without exceeding it.
:::

:::exercise
The graph of $y=\dfrac{ax+b}{x+c}$ has the vertical asymptote $x=1$, the horizontal asymptote $y=2$, and passes through the point $(0, -1)$. Find $a$, $b$, $c$.

::hint
**What you need:** $y=\dfrac{ax+b}{x+c}$ has the vertical asymptote $x=-c$ and the horizontal asymptote $y=a$.

**Steps:**
1. Deduce $c$ and $a$ from the two asymptotes.
2. Substitute the point $(0, -1)$ to find $b$.

::solution
The graph has the vertical asymptote $x=-c=1$, so $c=-1$; the horizontal asymptote is $y=a=2$. Substituting the point $(0, -1)$, we get $\dfrac{b}{-1}=-1$, so $b=1$.

So the function is $y=\dfrac{2x+1}{x-1}$ (which satisfies $ad-bc=2\cdot(-1)-1\cdot1=-3\neq0$).

**Answer.** $a=2$, $b=1$, $c=-1$.
:::

:::exercise Review
Find the coordinates of the intersection points of the graph of $y=\dfrac{x+1}{x-1}$ and the line $y=x-1$.

::hint
**What you need:** the x-coordinates of the intersections solve $\dfrac{x+1}{x-1}=x-1$ with $x\neq1$; solve a quadratic equation (grade 10).

**Steps:**
1. Multiply both sides by $x-1$ and get a quadratic equation.
2. Check the condition $x\neq1$, then compute the y-coordinates.

::solution
The equation for the x-coordinates of the intersection points (with $x\neq1$) is $x+1=(x-1)^2\iff x^2-3x=0\iff x=0$ or $x=3$ (both satisfy the condition). Substituting into $y=x-1$, we get $y=0-1=-1$ and $y=3-1=2$.

So there are two intersection points.

**Answer.** $(0, -1)$ and $(3, 2)$.
:::

:::exercise Challenge
Write the equations of the tangents to the graph of $y=\dfrac{x+1}{x-1}$ that are parallel to the line $y=-2x$.

::hint
**What you need:** parallel lines have the same gradient; the gradient of the tangent at $x_0$ is $y'(x_0)$.

**Steps:**
1. Solve $y'(x_0)=\dfrac{-2}{(x_0-1)^2}=-2$.
2. For each root, compute $y_0$ and write the tangent; check that it is not the line $y=-2x$ itself.

::solution
Since the tangent is parallel to $y=-2x$, we have $y'(x_0)=-2$, that is $(x_0-1)^2=1\iff x_0=0$ or $x_0=2$. For $x_0=0$, we have $y_0=-1$ and the tangent is $y=-2x-1$. For $x_0=2$, we have $y_0=3$ and the tangent is $y=-2(x-2)+3=-2x+7$. Both lines differ from $y=-2x$.

So there are two tangents satisfying the condition.

**Answer.** $y=-2x-1$ and $y=-2x+7$.
:::

## Mini test

:::quiz
::mc
The centre of symmetry of the graph of $y=x^3-3x^2+2$ is the point
A. $I(2, -2)$.
B. $I(0, 2)$.
C. $I(1, 0)$.
D. $I(-1, -2)$.
::key C
We have $y''=6x-6=0\iff x=1$ and $y(1)=0$. Option B is where the graph meets the y-axis, and option A is the local minimum point of the graph.

::mc
The graph of which of the following functions has the vertical asymptote $x=2$ and the horizontal asymptote $y=-1$?
A. $y=\dfrac{-x+1}{x-2}$.
B. $y=\dfrac{x+1}{x-2}$.
C. $y=\dfrac{-x+1}{x+2}$.
D. $y=\dfrac{2x+1}{-x+1}$.
::key A
The graph of $y=\dfrac{ax+b}{cx+d}$ has the vertical asymptote $x=-\dfrac dc$ and the horizontal asymptote $y=\dfrac ac$; for function A, we get $x=2$ and $y=-1$. Option C gets the sign of $-\dfrac dc$ wrong, and option D swaps the roles of the coefficients.

::mc
The function $y=f(x)$ is continuous on $\mathbb{R}$, increasing on $(-\infty, -1)$ and $(3, +\infty)$, decreasing on $(-1, 3)$, with $f(-1)=4$, $f(3)=-2$, $\lim\limits_{x\to-\infty}f(x)=-\infty$ and $\lim\limits_{x\to+\infty}f(x)=+\infty$. How many solutions does $f(x)+2=0$ have?
A. $1$.
B. $2$.
C. $3$.
D. $0$.
::key B
We have $f(x)+2=0\iff f(x)=-2$. The line $y=-2$ cuts the left-hand part once and only touches the graph at the local minimum point $(3, -2)$, so the equation has $2$ solutions. Option C counts as if $-2$ were between the two extreme values.

::mc
The gradient of the tangent to the graph of $y=\dfrac{2x-1}{x+1}$ at the point with x-coordinate $x_0=0$ is
A. $1$.
B. $-1$.
C. $-3$.
D. $3$.
::key D
We have $y'=\dfrac{2\cdot1-(-1)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}$, so $y'(0)=3$. Option B is the y-coordinate $y(0)$, and option C computes $bc-ad$ by mistake.

::tf
Suppose the water level (relative to a marker) in an irrigation channel $x$ hours after the sluice gate is opened is modelled by $f(x)=-x^3+6x^2-9x+3$ (dm), $0\le x\le 4$. Decide whether each statement is true or false.
a) The water level has a local minimum at time $x=1$.
b) Between $x=1$ and $x=3$, the water level rises fastest at time $x=2$.
c) There are three different times at which the water level is $3$ dm.
d) At time $x=2$, the water level is rising at $3$ dm per hour.
::key T T F T
a) True: we have $f'(x)=-3(x-1)(x-3)$, which changes sign from $-$ to $+$ at $x=1$. b) True: the rate of rise is $f'(x)$, with $f'(x)>0$ on $(1, 3)$, and $f''(x)=-6x+12$ changes sign from $+$ to $-$ at $x=2$, so $f'$ is greatest at $x=2$. c) False: $f(3)=3$ is the local maximum value, and $f(x)=3\iff -x(x-3)^2=0$, which has only the $2$ solutions $x=0$, $x=3$ in $[0, 4]$. d) True: we have $f'(2)=-3\cdot1\cdot(-1)=3$.

::sa
Let $A$ and $B$ be the two turning points of the graph of $y=x^3-3x^2-9x+1$, and $O$ the origin. Find the area of triangle $OAB$.
::key 4
We have $y'=3(x+1)(x-3)$, so $A(-1, 6)$ and $B(3, -26)$. So the area of triangle $OAB$ is $\dfrac12\left|(-1)\cdot(-26)-3\cdot6\right|=\dfrac12\cdot8=4$.

::sa
The tangent to the graph of $y=\dfrac{x+2}{x-1}$ at the point with x-coordinate $x_0=3$ meets the x-axis at a point. Find the x-coordinate of that point (give your answer to 1 decimal place).
::key 6.3
We have $y(3)=\dfrac52$ and $y'=\dfrac{-3}{(x-1)^2}$, so $y'(3)=-\dfrac34$. The tangent is $y=-\dfrac34(x-3)+\dfrac52$. Setting $y=0$, we get $x=\dfrac{19}{3}\approx6.33$. So the required x-coordinate, rounded, is $6.3$.
:::
