---
title: Functions
description: Learn what a function is, how to find its domain and range, read its graph, decide where it increases or decreases, and work with piecewise functions.
minutes: 20
---

:::goals
- Explain what a function is and describe it by a formula, a table, a graph or words.
- Find the domain of a function given by a formula, and its range in simple cases.
- Read values, zeros, increasing and decreasing intervals from a graph.
- Work with piecewise functions such as a taxi fare or an electricity bill.
:::

A taxi driver switches on the meter. The longer the trip, the more you pay, and for each distance there is exactly **one** price. This idea, "each input gives exactly one output", is the heart of the notion of a function. Almost every formula in science, economics and daily life is a function.

## What is a function?

:::definition Function
Let $D$ be a non-empty subset of $\mathbb{R}$. A **function** $f$ defined on $D$ is a rule that assigns to **each** number $x\in D$ **exactly one** real number $y$. We write $y=f(x)$.
- $x$ is the **independent variable** (input), $y$ the **dependent variable** (output).
- $D$ is the **domain**. The set of all values $f(x)$ with $x\in D$ is the **range**.
- The **graph** of $f$ is the set of points $(x, f(x))$ in the coordinate plane, $x\in D$.
:::

A function can be given in several ways: by a **formula** ($f(x)=3x-2$), by a **table** of values, by a **graph**, or by **words** ("the price of a trip of $x$ km"). A relation that gives two different outputs for one input is **not** a function: the circle $x^2+y^2=1$ is not the graph of a function, because $x=0$ gives both $y=1$ and $y=-1$. On a graph, this is the **vertical line test**: no vertical line meets the graph twice.

When a function is given by a formula without any comment, its domain is the set of all real $x$ for which the formula makes sense. Two things to watch: **no division by zero**, and **no square root of a negative number**.

:::example Finding a domain
Find the domain of $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ and compute $f(3)$.

**Solution.**
- The root needs $x-2\ge 0$, that is $x\ge 2$.
- The denominator needs $x-5\ne 0$, that is $x\ne 5$.
- Both conditions together: $D=[2, 5)\cup(5, +\infty)$.
- $f(3)=\dfrac{\sqrt{1}}{3-5}=-\dfrac12$.
:::

## Reading a graph

:::graph The graph of $f(x)=x^2-2x-3$
alt: A parabola opening upwards with lowest point (1, -4), crossing the x-axis at -1 and 3 and the y-axis at -3
x: -3..5
y: -5..6
plot: x^2 - 2x - 3
point: (-1, 0) "(-1, 0)" above-left
point: (3, 0) "(3, 0)" above-right
point: (0, -3) "(0, -3)" below-left
point: (1, -4) "(1, -4)" below
:::

From this picture we read, without any calculation:
- $f(0)=-3$, the point where the graph meets the $y$-axis.
- $f(x)=0$ for $x=-1$ and $x=3$ (the **zeros** of $f$).
- The lowest point is $(1, -4)$, so the **range** is $[-4, +\infty)$.
- Going from left to right, the graph goes **down** until $x=1$, then **up**.

:::definition Increasing and decreasing
Let $K$ be an interval inside the domain of $f$.
- $f$ is **increasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)<f(x_2)$ (the graph rises).
- $f$ is **decreasing** on $K$ if for all $x_1<x_2$ in $K$ we have $f(x_1)>f(x_2)$ (the graph falls).
:::

So $f(x)=x^2-2x-3$ is decreasing on $(-\infty, 1)$ and increasing on $(1, +\infty)$.

:::example Proving that a function is increasing
Prove that $g(x)=x^2$ is increasing on $(0, +\infty)$ and decreasing on $(-\infty, 0)$.

**Solution.**
- Take $x_1<x_2$ and compute $g(x_2)-g(x_1)=x_2^2-x_1^2=(x_2-x_1)(x_2+x_1)$.
- On $(0,+\infty)$: $x_2-x_1>0$ and $x_2+x_1>0$, so the difference is positive, that is $g(x_1)<g(x_2)$. Increasing.
- On $(-\infty, 0)$: $x_2-x_1>0$ but $x_2+x_1<0$, so the difference is negative, that is $g(x_1)>g(x_2)$. Decreasing.
:::

## Piecewise functions

Sometimes one formula is not enough: the rule changes with the input. We then write the function in **pieces**.

:::example A piecewise function
Let $f(x)=\begin{cases} x+2 & \text{if } x<0,\\ x^2 & \text{if } x\ge 0.\end{cases}$ Compute $f(-3)$, $f(0)$, $f(2)$ and sketch the graph.

**Solution.**
- $-3<0$, so use the first line: $f(-3)=-3+2=-1$.
- $0\ge 0$, so use the second line: $f(0)=0$.
- $f(2)=2^2=4$.
- The graph consists of the line $y=x+2$ for $x<0$ (ending with an open point at $(0, 2)$) and the parabola $y=x^2$ for $x\ge0$.
:::

:::graph A piecewise function
alt: A line coming from the lower left up to an open point at (0, 2), and a parabola starting at the origin on the right
x: -4..3
y: -2..6
plot: x + 2 ; -4..0
plot: x^2 ; 0..2.4
open: (0, 2) "(0, 2)" above-left
point: (0, 0) "O" below-right
:::

### A real-life function: the taxi fare

A taxi charges $15$ thousand dong for the first kilometre (or less) and $12$ thousand dong for each further kilometre. If the trip is $d$ km long, the fare in thousand dong is
$$T(d)=\begin{cases}15 & \text{if } 0<d\le 1,\\ 15+12(d-1) & \text{if } d>1.\end{cases}$$

:::example Taxi fare
Find the fare for $0.8$ km, for $5$ km, and the length of a trip that costs $99$ thousand dong.

**Solution.**
- $d=0.8\le 1$: $T=15$ thousand dong.
- $d=5>1$: $T=15+12\cdot4=63$ thousand dong.
- $T=99>15$, so use the second line: $15+12(d-1)=99$, so $12(d-1)=84$, $d-1=7$, $d=8$ km.
:::

:::graph Taxi fare $T(d)$
alt: A horizontal segment at height 15 from d=0 to d=1, then a rising line segment reaching 75 at d=6
x: 0..6
y: 0..80
plot: 15 ; 0..1
plot: 12x + 3 ; 1..6
open: (0, 15) "" above
point: (1, 15) "(1, 15)" below-right
:::

:::warning Common mistakes
- Forgetting the domain: $\dfrac{1}{x}$ is not defined at $0$, and $\sqrt{x}$ only for $x\ge0$.
- Writing "increasing" for the whole function when it is only increasing on an *interval*.
- Using the wrong line of a piecewise function. First check which condition the number satisfies.
:::

## Key terms

:::terms
- function | hàm số
- domain | tập xác định
- range | tập giá trị
- independent variable | biến số (đối số)
- graph of a function | đồ thị hàm số
- increasing | đồng biến
- decreasing | nghịch biến
- piecewise function | hàm số cho bởi nhiều công thức
- zero of a function | không điểm (nghiệm) của hàm số
:::

## Summary

- A function assigns to each $x$ in its domain exactly one value $f(x)$; it can be given by formula, table, graph or words.
- Domain of a formula: all $x$ for which it makes sense (denominators $\ne0$, square roots of numbers $\ge0$).
- $f$ is increasing on $K$ if $x_1<x_2\Rightarrow f(x_1)<f(x_2)$, decreasing if $f(x_1)>f(x_2)$.
- A piecewise function uses different formulas on different parts of the domain; always choose the line by the condition.

## Practice

:::practice
1. Let $f(x)=3x-2$. Compute $f(-1)$ and $f(4)$.
2. Find the domain of $f(x)=\sqrt{5-x}$.
3. Find the domain of $f(x)=\dfrac{1}{x^2-4}$.
4. A table gives the pairs $(x, y)$: $(1, 4)$, $(2, 5)$, $(2, 6)$, $(3, 7)$. Does it define $y$ as a function of $x$? Why?
5. Prove that $h(x)=-2x+5$ is decreasing on $\mathbb{R}$.
6. Let $f(x)=\begin{cases} x+2 & x<0,\\ x^2 & x\ge 0.\end{cases}$ Solve $f(x)=9$ and $f(x)=-1$.
7. An electricity company charges $2$ thousand dong per kWh for the first $50$ kWh and $2.5$ thousand dong per kWh for every kWh above $50$. Write the bill $B(x)$ for $x$ kWh as a piecewise function, then find the bill for $80$ kWh and the consumption that gives a bill of $300$ thousand dong.
8. Find the range of $f(x)=x^2-4x+7$ on $\mathbb{R}$. (Hint: $x^2-4x+7=(x-2)^2+3$.)
9. Challenge. Find the domain of $f(x)=\sqrt{x+3}+\dfrac{1}{\sqrt{2-x}}$.
10. Challenge. Find the range of $f(x)=x^2-4x+7$ on the interval $[0, 3]$.
:::

:::solution Show solutions
1. $f(-1)=3\cdot(-1)-2=-5$; $f(4)=12-2=10$.
2. We need $5-x\ge0$, so $x\le5$. $D=(-\infty, 5]$.
3. We need $x^2-4\ne0$, so $x\ne2$ and $x\ne-2$. $D=\mathbb{R}\setminus\{-2, 2\}$.
4. No. The input $x=2$ has two different outputs, $5$ and $6$.
5. Take $x_1<x_2$. Then $h(x_1)-h(x_2)=-2x_1+2x_2=2(x_2-x_1)>0$, so $h(x_1)>h(x_2)$: decreasing on $\mathbb{R}$.
6. $f(x)=9$: if $x<0$ then $x+2=9$ gives $x=7$, which is not $<0$, rejected. If $x\ge0$ then $x^2=9$ gives $x=3$ (and $x=-3$ is rejected). So $x=3$. $f(x)=-1$: if $x<0$, $x+2=-1$ gives $x=-3$, valid. If $x\ge0$, $x^2=-1$ is impossible. So $x=-3$.
7. $B(x)=2x$ for $0\le x\le50$ and $B(x)=100+2.5(x-50)$ for $x>50$. For $80$ kWh: $100+2.5\cdot30=175$ thousand dong. For a bill of $300>100$: $100+2.5(x-50)=300$, so $x-50=80$, $x=130$ kWh.
8. $(x-2)^2\ge0$, so $f(x)\ge3$, with equality at $x=2$; every value $\ge3$ is reached. Range $[3, +\infty)$.
9. We need $x+3\ge0$ and $2-x>0$ (the root is in the denominator, so it cannot be $0$). So $x\ge-3$ and $x<2$: $D=[-3, 2)$.
10. $f(x)=(x-2)^2+3$. The vertex $x=2$ is in $[0, 3]$, so the minimum is $f(2)=3$. At the ends, $f(0)=7$ and $f(3)=4$, so the maximum is $7$. The function is continuous, so the range is $[3, 7]$.
:::
