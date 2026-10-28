A **quadratic function** appears everywhere: the path of a ball in the air, the shape of a satellite dish, the profit of a small shop. In this lesson you will learn to read its graph, find its vertex and sketch it.

:::definition Quadratic function
A quadratic function is a function of the form
$$f(x) = ax^2 + bx + c, \qquad a \neq 0,$$
where $a$, $b$ and $c$ are real numbers.
:::

Its graph is a curve called a **parabola**.

## What does $a$ tell us?

- If $a > 0$, the parabola opens **upward** and has a lowest point.
- If $a < 0$, the parabola opens **downward** and has a highest point.
- The larger $|a|$ is, the narrower the parabola.

The number $c$ is easy to read. Since $f(0) = c$, the graph crosses the $y$-axis at the point $(0,\, c)$.

## The vertex and the axis of symmetry

The turning point of a parabola is called its **vertex**. It is the highest point if $a < 0$ and the lowest point if $a > 0$.

:::theorem Vertex of a parabola
The graph of $f(x) = ax^2 + bx + c$ has its vertex at
$$x_V = -\frac{b}{2a}, \qquad y_V = f(x_V) = -\frac{\Delta}{4a}, \qquad \text{where } \Delta = b^2 - 4ac.$$
The vertical line $x = -\dfrac{b}{2a}$ is the **axis of symmetry**. The two halves of the parabola are mirror images of each other in this line.
:::

:::tip Easy way to remember
First find $x_V = -\dfrac{b}{2a}$. Then put that value into $f$ to get $y_V$. You do not need to memorise the formula with $\Delta$.
:::

## Worked example

:::example Graph $f(x) = x^2 - 4x + 3$
Here $a = 1$, $b = -4$ and $c = 3$.

1. **Direction.** $a = 1 > 0$, so the parabola opens upward.
2. **Vertex.** $x_V = -\dfrac{-4}{2 \cdot 1} = 2$ and $y_V = f(2) = 4 - 8 + 3 = -1$. The vertex is $(2,\, -1)$.
3. **$y$-intercept.** $f(0) = 3$, so the graph passes through $(0,\, 3)$.
4. **$x$-intercepts.** Solve $x^2 - 4x + 3 = 0$. It factors as $(x - 1)(x - 3) = 0$, so $x = 1$ or $x = 3$.
:::

Plot these points and join them with a smooth curve:

| $x$ | 0 | 1 | 2 | 3 | 4 |
|:---:|:-:|:-:|:-:|:-:|:-:|
| $f(x)$ | 3 | 0 | −1 | 0 | 3 |

Notice the symmetry about $x = 2$: the values at $x = 1$ and $x = 3$ are equal, and so are the values at $x = 0$ and $x = 4$.

## Practice

**Exercise 1.** Find the vertex of $f(x) = -2x^2 + 8x - 5$. Is it a maximum or a minimum point?

:::solution
Here $a = -2$, $b = 8$, $c = -5$.

$x_V = -\dfrac{8}{2 \cdot (-2)} = 2$ and $y_V = f(2) = -2 \cdot 4 + 16 - 5 = 3$.

The vertex is $(2,\, 3)$. Since $a < 0$, the parabola opens downward, so the vertex is a **maximum** point. The largest value of $f$ is $3$.
:::

**Exercise 2.** Does the graph of $g(x) = x^2 + 2x + 5$ cross the $x$-axis?

:::solution
$x_V = -\dfrac{2}{2} = -1$ and $y_V = g(-1) = 1 - 2 + 5 = 4$.

The parabola opens upward and its lowest point has height $4 > 0$, so the graph stays above the $x$-axis and never crosses it.
:::

**Exercise 3.** The vertex of $f(x) = x^2 - 6x + k$ lies on the $x$-axis. Find $k$.

:::solution
$x_V = -\dfrac{-6}{2} = 3$. The vertex is on the $x$-axis when $y_V = 0$:

$$f(3) = 9 - 18 + k = k - 9 = 0 \quad\Longrightarrow\quad k = 9.$$

Check: $x^2 - 6x + 9 = (x - 3)^2$, which touches the $x$-axis only at $x = 3$.
:::

:::note Key takeaways
- A quadratic function has the form $f(x) = ax^2 + bx + c$ with $a \neq 0$; its graph is a parabola.
- The sign of $a$ decides whether the parabola opens up or down.
- The vertex is at $x_V = -\dfrac{b}{2a}$, and the axis of symmetry is the vertical line through it.
:::
