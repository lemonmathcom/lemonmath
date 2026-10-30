---
title: The quadratic function
description: Study y=ax²+bx+c, its parabola, vertex and axis, tables of variation, minimum and maximum, translations, and applications to projectiles, areas and profit.
minutes: 24
---

:::goals
- Recognise a quadratic function and find the vertex, the axis of symmetry and the direction of its parabola.
- Sketch the graph and write its table of variation.
- Find the minimum or maximum value, and find the formula from given data.
- Use $y=a(x-p)^2+q$ and solve problems on projectiles, areas and profit.
:::

Throw a ball in the air. It goes up, slows down, stops for an instant and falls back; the path is a curve called a **parabola**. The same curve appears in bridge arches, satellite dishes and the graph of profit against price. All these situations are described by a *quadratic function*, and knowing its highest or lowest point answers the question "what is the best we can do?".

## The function $y=ax^2+bx+c$

:::definition Quadratic function
A **quadratic function** is a function of the form
$$y=ax^2+bx+c,\qquad a\ne0.$$
Its domain is $\mathbb{R}$ and its graph is a **parabola**. Put $\Delta=b^2-4ac$.
- The **vertex** is $I\left(-\dfrac{b}{2a},\ -\dfrac{\Delta}{4a}\right)$.
- The **axis of symmetry** is the vertical line $x=-\dfrac{b}{2a}$.
- If $a>0$ the parabola opens **upwards** and the vertex is its lowest point. If $a<0$ it opens **downwards** and the vertex is its highest point.
:::

The number $|a|$ controls how narrow the parabola is.

:::graph Parabolas $y=x^2$, $y=-x^2$ and $y=\frac12x^2$
alt: Three parabolas through the origin: y=x^2 opening up, y=-x^2 opening down and the wider y=0.5x^2 opening up
x: -4..4
y: -5..5
plot: x^2
plot: -x^2
plot: 0.5*x^2
:::

## Sketching a parabola

To sketch $y=ax^2+bx+c$: (1) find the vertex; (2) draw the axis; (3) find the points where the graph meets the axes ($x=0$ gives $y=c$; $y=0$ gives the roots, if any); (4) use symmetry about the axis.

:::example A parabola opening upwards
Study and sketch $y=x^2-4x+3$.

**Solution.**
- $a=1>0$, so it opens upwards. $\Delta=16-12=4$.
- Vertex: $x_I=-\dfrac{-4}{2}=2$, $y_I=-\dfrac{4}{4}=-1$. So $I(2, -1)$; axis $x=2$.
- With the $y$-axis: $x=0$ gives $y=3$.
- With the $x$-axis: $x^2-4x+3=0$ gives $x=1$ or $x=3$.
- The minimum value of the function is $-1$, reached at $x=2$.
:::

:::graph $y=x^2-4x+3$
alt: Upward parabola with vertex (2, -1), crossing the x-axis at 1 and 3 and the y-axis at 3, with the axis x=2 dashed
x: -1..5
y: -2..6
plot: x^2 - 4x + 3
vline: 2 ; dashed
point: (2, -1) "I(2, -1)" below
point: (1, 0) "1" above-left
point: (3, 0) "3" above-right
point: (0, 3) "3" left
:::

### Table of variation

The table of variation shows where the function goes up or down. For $y=x^2-4x+3$ ($a>0$):

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $+\infty$ | decreasing | $-1$ | increasing | $+\infty$ |

For $a>0$: decreasing on $\left(-\infty, -\frac{b}{2a}\right)$, increasing on $\left(-\frac{b}{2a}, +\infty\right)$, minimum $-\frac{\Delta}{4a}$. For $a<0$ it is the other way round and $-\frac{\Delta}{4a}$ is the maximum.

:::example A parabola opening downwards
Study $y=-x^2+2x+3$.

**Solution.**
- $a=-1<0$: opens downwards. $\Delta=4+12=16$.
- Vertex: $x_I=-\dfrac{2}{-2}=1$, $y_I=-\dfrac{16}{-4}=4$. So $I(1, 4)$.
- $x=0$ gives $y=3$. $-x^2+2x+3=0$ gives $x=-1$ or $x=3$.
- Increasing on $(-\infty, 1)$, decreasing on $(1, +\infty)$; maximum value $4$ at $x=1$.
:::

:::graph $y=-x^2+2x+3$
alt: Downward parabola with vertex (1, 4), crossing the x-axis at -1 and 3 and the y-axis at 3
x: -2..4
y: -2..6
plot: -x^2 + 2x + 3
vline: 1 ; dashed
point: (1, 4) "I(1, 4)" above
point: (-1, 0) "-1" below-left
point: (3, 0) "3" below-right
point: (0, 3) "3" left
:::

## Finding the formula

:::example A parabola through three points
Find the quadratic function whose graph passes through $A(0, 5)$, $B(1, 2)$ and $C(3, 2)$.

**Solution.**
- Let $y=ax^2+bx+c$. From $A$: $c=5$.
- From $B$: $a+b+5=2$, so $a+b=-3$.
- From $C$: $9a+3b+5=2$, so $3a+b=-1$.
- Subtracting: $2a=2$, $a=1$, then $b=-4$.
- The function is $y=x^2-4x+5$. Check: $B$ and $C$ have the same height, so the axis is $x=2$, and indeed $-\frac{b}{2a}=2$.
:::

## Translations: $y=a(x-p)^2+q$

Completing the square gives $ax^2+bx+c=a(x-p)^2+q$ with $p=-\frac{b}{2a}$ and $q=-\frac{\Delta}{4a}$. So **the vertex is $(p, q)$**. The graph is the parabola $y=ax^2$ moved $p$ units to the right and $q$ units up (left or down if negative).

:::graph $y=2x^2$ moved to $y=2(x-1)^2+3$
alt: The parabola y=2x^2 drawn dashed and the same parabola shifted one unit right and three units up, with vertex (1, 3)
x: -3..4
y: -1..9
plot: 2x^2 ; dashed
plot: 2(x - 1)^2 + 3
point: (1, 3) "(1, 3)" below-right
:::

Expanding, $2(x-1)^2+3=2x^2-4x+5$, which has vertex $\left(\frac{4}{4}, \frac{-(16-40)}{8}\right)=(1, 3)$. ✓

## Applications

:::example A thrown ball
A ball is thrown upwards. Its height in metres after $t$ seconds is $h(t)=-5t^2+20t+1.5$. Find the greatest height and when the ball hits the ground.

**Solution.**
- $a=-5<0$, so there is a maximum at $t=-\dfrac{20}{2\cdot(-5)}=2$ s.
- $h(2)=-20+40+1.5=21.5$ m.
- The ball lands when $h=0$: $5t^2-20t-1.5=0$, $t=\dfrac{20\pm\sqrt{430}}{10}$. We keep the positive root $t\approx4.07$ s.
:::

:::graph Height of the ball
alt: A downward parabola starting at height 1.5 for t=0, reaching 21.5 at t=2 and returning to zero at about t=4.07
x: 0..5
y: -2..24
plot: -5x^2 + 20x + 1.5 ; 0..4.07
point: (2, 21.5) "(2, 21.5)" above
:::

:::example Largest area
A farmer has $40$ m of fence and wants a rectangular pen with one side along a straight wall (no fence needed there). What dimensions give the largest area?

**Solution.**
- Let the two sides perpendicular to the wall be $x$ m. The side parallel to the wall is $40-2x$, with $0<x<20$.
- Area $S(x)=x(40-2x)=-2x^2+40x$.
- $a=-2<0$: maximum at $x=-\dfrac{40}{2\cdot(-2)}=10$, and $S(10)=-200+400=200$.
- The pen should be $10$ m by $20$ m; the greatest area is $200$ m$^2$.
:::

:::warning Common mistakes
- Using $x_I=\frac{b}{2a}$ without the minus sign.
- Saying "minimum" when $a<0$. Check the sign of $a$ first.
- Forgetting to restrict $x$ in a real problem (the pen needs $0<x<20$).
- In $a(x-p)^2+q$, the vertex has $x=p$, not $-p$.
:::

## Key terms

:::terms
- quadratic function | hàm số bậc hai
- parabola | parabol
- vertex | đỉnh
- axis of symmetry | trục đối xứng
- discriminant | biệt thức $\Delta$ (delta)
- table of variation | bảng biến thiên
- minimum value | giá trị nhỏ nhất
- maximum value | giá trị lớn nhất
- translation | phép tịnh tiến
:::

## Summary

- $y=ax^2+bx+c$ has a parabola as its graph, with vertex $\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$ and axis $x=-\frac{b}{2a}$.
- $a>0$: opens up, minimum at the vertex. $a<0$: opens down, maximum at the vertex.
- Sketch with the vertex, the intercepts and symmetry; summarise with a table of variation.
- $y=a(x-p)^2+q$ has vertex $(p, q)$.
- Use the vertex to solve maximum and minimum problems; always check the allowed values of $x$.

## Practice

:::practice
1. Find the vertex, the axis and the $x$-intercepts of $y=x^2-6x+5$.
2. For $y=-2x^2+4x+1$, say whether the parabola opens up or down and find its vertex.
3. Find the minimum value of $y=3x^2-12x+7$ and where it is reached.
4. Write the table of variation of $y=-x^2+4x$ and state its maximum.
5. Find the quadratic function whose parabola has vertex $(1, -4)$ and passes through $(3, 0)$.
6. Find the quadratic function whose graph passes through $A(0, 1)$, $B(1, 0)$, $C(2, 3)$.
7. Describe how to obtain the graph of $y=x^2-2x-3$ from the graph of $y=x^2$.
8. A ball's height is $h(t)=-5t^2+10t$ metres after $t$ seconds. Find its greatest height and the time it returns to the ground.
9. Challenge. A rectangle has perimeter $60$ m. Which dimensions give the greatest area, and what is it?
10. Challenge. For which values of $m$ is the minimum value of $y=x^2-2mx+3$ equal to $2$?
:::

:::solution Show solutions
1. $x_I=3$, $y_I=9-18+5=-4$. Vertex $(3, -4)$, axis $x=3$. $x^2-6x+5=0$ gives $x=1$ or $x=5$.
2. $a=-2<0$: opens down. $x_I=-\dfrac{4}{-4}=1$, $y_I=-2+4+1=3$. Vertex $(1, 3)$.
3. $a=3>0$, so there is a minimum at $x=\dfrac{12}{6}=2$: $y=12-24+7=-5$. Minimum $-5$ at $x=2$.
4. $a=-1<0$, vertex at $x=2$, $y=-4+8=4$.

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $-\infty$ | increasing | $4$ | decreasing | $-\infty$ |

   Maximum $4$ at $x=2$.
5. $y=a(x-1)^2-4$. Through $(3, 0)$: $4a-4=0$, $a=1$. So $y=(x-1)^2-4=x^2-2x-3$.
6. $c=1$ (from $A$). $B$: $a+b+1=0$. $C$: $4a+2b+1=3$, so $2a+b=1$. Subtract: $a=2$, $b=-3$. $y=2x^2-3x+1$. Check $C$: $8-6+1=3$ ✓.
7. $x^2-2x-3=(x-1)^2-4$. Move the parabola $y=x^2$ one unit to the right and four units down.
8. Maximum at $t=-\dfrac{10}{-10}=1$ s: $h(1)=-5+10=5$ m. $h=0$: $-5t(t-2)=0$, so it lands at $t=2$ s.
9. Let the sides be $x$ and $30-x$. Area $S=x(30-x)=-x^2+30x$, maximum at $x=15$, $S=225$. It is a square of side $15$ m, area $225$ m$^2$.
10. $y=(x-m)^2+3-m^2$, so the minimum is $3-m^2$. Setting $3-m^2=2$ gives $m^2=1$, so $m=1$ or $m=-1$.
:::
