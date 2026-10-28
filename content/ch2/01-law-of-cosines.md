The Pythagorean theorem only works in right triangles. The **law of cosines** is its big sister: it works in *every* triangle, and it lets you find a missing side or a missing angle.

## Notation

In triangle $ABC$ we write $a = BC$, $b = CA$ and $c = AB$. Each side is named after the angle **opposite** to it: side $a$ is opposite angle $A$, side $b$ is opposite angle $B$, and side $c$ is opposite angle $C$.

:::theorem Law of cosines
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$b^2 = a^2 + c^2 - 2ac\cos B$$
$$c^2 = a^2 + b^2 - 2ab\cos C$$
:::

:::note Pythagoras is a special case
If $A = 90^\circ$, then $\cos A = 0$ and the first formula becomes $a^2 = b^2 + c^2$. The extra term $-2bc\cos A$ is the correction that makes the formula work for other angles.
:::

## Two ways to use it

**1. Two sides and the angle between them (SAS): find the third side.** Use the formula as it is.

**2. Three sides (SSS): find an angle.** Solve the formula for the cosine:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}.$$

## Worked examples

:::example Find a side (SAS)
In triangle $ABC$, $b = 5$, $c = 8$ and $A = 60^\circ$. Find $a$.

$$a^2 = 5^2 + 8^2 - 2 \cdot 5 \cdot 8 \cdot \cos 60^\circ = 25 + 64 - 80 \cdot \tfrac{1}{2} = 49.$$

So $a = 7$.
:::

:::example Find an angle (SSS)
Now take the same triangle with $a = 7$, $b = 5$, $c = 8$. Find $A$.

$$\cos A = \frac{5^2 + 8^2 - 7^2}{2 \cdot 5 \cdot 8} = \frac{40}{80} = \frac{1}{2}, \qquad\text{so}\qquad A = 60^\circ.$$

We get back the angle we started with, as expected.
:::

:::example An obtuse angle
A triangle has sides $a = 6$, $b = 4$, $c = 3$. Find the largest angle.

The largest angle is opposite the longest side, so it is $A$.

$$\cos A = \frac{4^2 + 3^2 - 6^2}{2 \cdot 4 \cdot 3} = \frac{-11}{24} \approx -0.458, \qquad\text{so}\qquad A \approx 117.3^\circ.$$

A **negative** cosine tells you that the angle is obtuse.
:::

## Practice

**Exercise 1.** In triangle $ABC$, $a = 8$, $b = 15$ and $C = 120^\circ$. Find $c$.

:::solution
$$c^2 = 8^2 + 15^2 - 2 \cdot 8 \cdot 15 \cdot \cos 120^\circ = 64 + 225 - 240 \cdot \left(-\tfrac{1}{2}\right) = 289 + 120 = 409.$$

So $c = \sqrt{409} \approx 20.22$.
:::

**Exercise 2.** A triangle has sides $3$, $4$ and $5$. Use the law of cosines to find its largest angle.

:::solution
The largest angle is opposite the side $5$:

$$\cos\theta = \frac{3^2 + 4^2 - 5^2}{2 \cdot 3 \cdot 4} = \frac{0}{24} = 0, \qquad\text{so}\qquad \theta = 90^\circ.$$

It is a right triangle, which agrees with the Pythagorean theorem.
:::

**Exercise 3.** A triangle has sides $a = 6$, $b = 7$ and $c = 9$. Find angle $C$.

:::solution
$$\cos C = \frac{6^2 + 7^2 - 9^2}{2 \cdot 6 \cdot 7} = \frac{4}{84} = \frac{1}{21}, \qquad\text{so}\qquad C \approx 87.3^\circ.$$
:::

:::note Key takeaways
- The law of cosines works in every triangle: $a^2 = b^2 + c^2 - 2bc\cos A$.
- Use it for SAS (find a side) and SSS (find an angle).
- A negative cosine means an obtuse angle; $\cos A = 0$ means a right angle.
:::
