A **quadratic equation** asks: for which values of $x$ is $ax^2 + bx + c$ equal to zero? Geometrically, these are the points where the parabola from [the previous lesson](lesson:quadratic-function) meets the $x$-axis. In this lesson you will learn a method that works for every quadratic equation.

:::definition Quadratic equation
A quadratic equation in standard form is
$$ax^2 + bx + c = 0, \qquad a \neq 0.$$
A number $x$ that makes the equation true is called a **solution** or a **root**.
:::

:::warning Standard form first
Move everything to one side so that the other side is $0$ *before* you read off $a$, $b$ and $c$. For example, $x^2 = 3x - 2$ becomes $x^2 - 3x + 2 = 0$, so $a = 1$, $b = -3$, $c = 2$.
:::

## The discriminant and the quadratic formula

:::theorem The quadratic formula
Let $\Delta = b^2 - 4ac$ be the **discriminant**. Then:

- If $\Delta > 0$, there are two different real solutions
$$x = \frac{-b + \sqrt{\Delta}}{2a} \quad\text{and}\quad x = \frac{-b - \sqrt{\Delta}}{2a}.$$
- If $\Delta = 0$, there is exactly one solution (a *double root*): $x = -\dfrac{b}{2a}$.
- If $\Delta < 0$, there are no real solutions.
:::

The discriminant matches the picture of the parabola: $\Delta > 0$ means it crosses the $x$-axis twice, $\Delta = 0$ means it just touches the axis at its vertex, and $\Delta < 0$ means it never reaches the axis.

## Why does the formula work?

Divide by $a$ and complete the square:

$$\begin{aligned}
ax^2 + bx + c &= 0 \\
x^2 + \frac{b}{a}x &= -\frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2} = \frac{\Delta}{4a^2}.
\end{aligned}$$

If $\Delta \geq 0$, take square roots: $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{\Delta}}{2a}$, which gives the formula. If $\Delta < 0$, the right side is negative, but a square can never be negative, so there is no real solution.

## Worked examples

:::example Two solutions: $2x^2 - 5x + 2 = 0$
$a = 2$, $b = -5$, $c = 2$, so $\Delta = (-5)^2 - 4 \cdot 2 \cdot 2 = 25 - 16 = 9 > 0$.

$$x = \frac{5 \pm 3}{4}, \qquad\text{so}\qquad x = 2 \quad\text{or}\quad x = \frac{1}{2}.$$
:::

:::example One solution: $x^2 - 6x + 9 = 0$
$\Delta = 36 - 36 = 0$, so $x = -\dfrac{-6}{2} = 3$ is a double root. (Indeed, $x^2 - 6x + 9 = (x - 3)^2$.)
:::

:::example No real solutions: $x^2 + x + 1 = 0$
$\Delta = 1 - 4 = -3 < 0$, so the equation has no real solutions.
:::

## Sum and product of the roots

:::theorem Vieta's formulas
If $x_1$ and $x_2$ are the two roots of $ax^2 + bx + c = 0$, then
$$x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}.$$
:::

Check with $2x^2 - 5x + 2 = 0$, whose roots are $2$ and $\tfrac{1}{2}$: the sum is $\tfrac{5}{2} = -\tfrac{-5}{2}$ and the product is $1 = \tfrac{2}{2}$.

:::tip Quick trick
To solve $x^2 - 7x + 10 = 0$, look for two numbers with sum $7$ and product $10$. They are $2$ and $5$, so the solutions are $x = 2$ and $x = 5$.
:::

## Practice

**Exercise 1.** Solve $3x^2 + 2x - 5 = 0$.

:::solution
$a = 3$, $b = 2$, $c = -5$, so $\Delta = 4 + 60 = 64$ and $\sqrt{\Delta} = 8$.

$$x = \frac{-2 \pm 8}{6}, \qquad\text{so}\qquad x = 1 \quad\text{or}\quad x = -\frac{5}{3}.$$

Check $x = 1$: $3 + 2 - 5 = 0$. ✓
:::

**Exercise 2.** For which value of $k$ does $x^2 - 4x + k = 0$ have exactly one solution?

:::solution
$\Delta = (-4)^2 - 4 \cdot 1 \cdot k = 16 - 4k$. One solution means $\Delta = 0$, so $16 - 4k = 0$ and $k = 4$.

(For $k < 4$ there are two solutions; for $k > 4$ there are none.)
:::

**Exercise 3.** Without solving $5x^2 - 3x - 2 = 0$, find the sum and the product of its roots.

:::solution
By Vieta's formulas, $x_1 + x_2 = -\dfrac{-3}{5} = \dfrac{3}{5}$ and $x_1 x_2 = \dfrac{-2}{5} = -\dfrac{2}{5}$.

Check: the roots are $1$ and $-\tfrac{2}{5}$. Their sum is $\tfrac{3}{5}$ and their product is $-\tfrac{2}{5}$. ✓
:::

:::note Key takeaways
- Write the equation as $ax^2 + bx + c = 0$ first, then compute $\Delta = b^2 - 4ac$.
- $\Delta > 0$: two solutions. $\Delta = 0$: one solution. $\Delta < 0$: none.
- The roots satisfy $x_1 + x_2 = -\dfrac{b}{a}$ and $x_1 x_2 = \dfrac{c}{a}$.
:::
