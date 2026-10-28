The [law of cosines](lesson:law-of-cosines) is perfect when you know two sides and the angle between them. But often a problem gives you **two angles and one side**. For that, the **law of sines** is the right tool. It also leads to a very useful formula for the area of a triangle.

:::theorem Law of sines
In triangle $ABC$ with circumradius $R$ (the radius of the circle through $A$, $B$ and $C$),
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R.$$
:::

In words: the ratio of a side to the sine of its opposite angle is the same for all three sides.

## When to use it

- **Two angles and one side (AAS or ASA).** The third angle is $180^\circ$ minus the other two. Then the law of sines gives the other sides.
- **Finding the circumradius.** Any side and its opposite angle give $2R$.

:::warning The ambiguous case
If you know two sides and an angle that is **not** between them (SSA), there can be two different triangles, one triangle, or none. Be careful in this situation, and check whether both answers make sense.
:::

## Worked examples

:::example Find a side
In triangle $ABC$, $A = 45^\circ$, $B = 60^\circ$ and $a = 10$. Find $b$ and $C$.

First, $C = 180^\circ - 45^\circ - 60^\circ = 75^\circ$. Then
$$b = \frac{a \sin B}{\sin A} = \frac{10 \cdot \frac{\sqrt{3}}{2}}{\frac{\sqrt{2}}{2}} = \frac{10\sqrt{3}}{\sqrt{2}} = 5\sqrt{6} \approx 12.25.$$
:::

:::example Find the circumradius
A triangle has $a = 7$ and $A = 60^\circ$. Then
$$2R = \frac{a}{\sin A} = \frac{7}{\frac{\sqrt{3}}{2}} = \frac{14}{\sqrt{3}}, \qquad\text{so}\qquad R = \frac{7}{\sqrt{3}} \approx 4.04.$$
:::

## Area of a triangle

If you know two sides and the angle between them, the area is half the product of the sides times the sine of that angle.

:::theorem Area formula
$$S = \tfrac{1}{2}\, bc \sin A = \tfrac{1}{2}\, ac \sin B = \tfrac{1}{2}\, ab \sin C.$$
:::

:::example Area from two sides and an angle
For $b = 5$, $c = 8$ and $A = 60^\circ$:
$$S = \tfrac{1}{2} \cdot 5 \cdot 8 \cdot \sin 60^\circ = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3} \approx 17.32.$$

Check with Heron's formula. This is the triangle with sides $5$, $7$, $8$ from the [law of cosines](lesson:law-of-cosines) lesson, so $s = \tfrac{5 + 7 + 8}{2} = 10$ and $S = \sqrt{10 \cdot 5 \cdot 3 \cdot 2} = \sqrt{300} = 10\sqrt{3}$. ✓
:::

## Practice

**Exercise 1.** In triangle $ABC$, $a = 12$, $A = 30^\circ$ and $B = 45^\circ$. Find $b$.

:::solution
$$b = \frac{a \sin B}{\sin A} = \frac{12 \cdot \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 12\sqrt{2} \approx 16.97.$$
:::

**Exercise 2.** A triangle has $c = 6$ and $C = 30^\circ$. Find its circumradius $R$.

:::solution
$$2R = \frac{c}{\sin C} = \frac{6}{\frac{1}{2}} = 12, \qquad\text{so}\qquad R = 6.$$
:::

**Exercise 3.** Find the area of a triangle with $a = 6$, $b = 7$ and $C = 30^\circ$.

:::solution
$$S = \tfrac{1}{2}\, ab \sin C = \tfrac{1}{2} \cdot 6 \cdot 7 \cdot \tfrac{1}{2} = 10.5.$$
:::

:::note Key takeaways
- Law of sines: $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$.
- Use it when you know two angles and a side, or when you need the circumradius.
- Area: $S = \tfrac{1}{2}\, ab \sin C$ (two sides and the angle between them).
:::
