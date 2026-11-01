---
title: Trigonometric values of angles from 0° to 180°
description: Define sin, cos, tan and cot for angles from 0° to 180° on the unit semicircle; use special values, supplementary angles, identities and a calculator.
minutes: 16
---

:::goals
- Define $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$ for $0^\circ\leq\alpha\leq180^\circ$ using a point on the unit semicircle.
- Use the relations between supplementary angles and the table of special values.
- Use $\sin^2\alpha+\cos^2\alpha=1$ and the related identities to find the other values from one, with the correct sign.
- Compute trigonometric values and recover angles with a scientific calculator.
:::

In a right triangle, sine and cosine only make sense for acute angles. But a roof can slope at 120°, a door can swing open to 150°, and a ruler can be turned through any angle up to a straight line. To measure such things we need $\sin$, $\cos$, $\tan$ and $\cot$ for **obtuse** angles too. The trick is to move the triangle into a coordinate plane.

## The unit semicircle

Draw the half circle above the $x$-axis with centre $O(0, 0)$ and radius $1$. It is called the **unit semicircle**: its points $(x, y)$ satisfy $x^2+y^2=1$ and $y\geq0$.

Pick an angle $\alpha$ between $0^\circ$ and $180^\circ$. Start at the positive $x$-axis and turn the ray anticlockwise by $\alpha$. The ray meets the semicircle at exactly one point $M(x_0, y_0)$.

:::graph The point $M$ for an angle $\alpha$
alt: Unit semicircle with centre O. The point M on it is joined to O, the angle alpha between the x-axis and OM is marked, and the foot H of the perpendicular from M to the x-axis is shown.
x: -1.5..1.5
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
segment: (0, 0) (0.5, 0.866)
segment: (0.5, 0.866) (0.5, 0)
point: (0, 0) "O" below
point: (0.5, 0.866) "M" above-right
point: (0.5, 0) "H" below
label: (0.17, 0.08) "α"
:::

When $\alpha$ is acute, $OHM$ is a right triangle with hypotenuse $OM=1$. Then $\cos\alpha=\dfrac{OH}{OM}=x_0$ and $\sin\alpha=\dfrac{HM}{OM}=y_0$. So the coordinates of $M$ are just the cosine and sine. We use this as the definition for **every** $\alpha$ in $[0^\circ, 180^\circ]$.

:::definition Trigonometric values of an angle from 0° to 180°
Let $M(x_0, y_0)$ be the point of the unit semicircle such that the ray $OM$ makes the angle $\alpha$ with the positive $x$-axis. Then

$$\sin\alpha=y_0,\qquad \cos\alpha=x_0,$$

$$\tan\alpha=\frac{y_0}{x_0}\ (x_0\neq0),\qquad \cot\alpha=\frac{x_0}{y_0}\ (y_0\neq0).$$
:::

### When are tan and cot undefined?

- $x_0=0$ exactly when $M=(0, 1)$, that is $\alpha=90^\circ$. So $\tan90^\circ$ does not exist.
- $y_0=0$ exactly when $M=(\pm1, 0)$, that is $\alpha=0^\circ$ or $\alpha=180^\circ$. So $\cot0^\circ$ and $\cot180^\circ$ do not exist.

### Signs

Since $M$ lies on the upper half circle, $\sin\alpha\geq0$ always. The sign of $\cos\alpha=x_0$ depends on the side of the $y$-axis:

| angle | $\sin\alpha$ | $\cos\alpha$ | $\tan\alpha$ | $\cot\alpha$ |
|---|---|---|---|---|
| acute ($0^\circ<\alpha<90^\circ$) | $+$ | $+$ | $+$ | $+$ |
| obtuse ($90^\circ<\alpha<180^\circ$) | $+$ | $-$ | $-$ | $-$ |

## Supplementary angles

Take $\alpha=60^\circ$ and $180^\circ-\alpha=120^\circ$. Their points $M$ and $M'$ are mirror images in the $y$-axis.

:::graph Supplementary angles give mirror-image points
alt: Unit semicircle with two points M at 60 degrees and M' at 120 degrees at the same height, symmetric about the vertical axis.
x: -1.5..1.5
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
segment: (0, 0) (0.5, 0.866)
segment: (0, 0) (-0.5, 0.866)
point: (0, 0) "O" below
point: (0.5, 0.866) "M" above-right
point: (-0.5, 0.866) "M'" above-left
label: (0.3, 0.12) "α"
label: (-0.45, 0.12) "180°−α"
:::

Mirror images have the same height and opposite $x$-coordinates. This gives the rule for any $\alpha$.

:::theorem Supplementary angles
For $0^\circ\leq\alpha\leq180^\circ$:

$$\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha,$$

$$\tan(180^\circ-\alpha)=-\tan\alpha,\qquad \cot(180^\circ-\alpha)=-\cot\alpha$$

(whenever the values exist).
:::

For acute angles there is also the complementary rule $\sin(90^\circ-\alpha)=\cos\alpha$ and $\cos(90^\circ-\alpha)=\sin\alpha$, which you know from right triangles.

## Table of special values

Placing $M$ at $30^\circ$, $45^\circ$, $60^\circ$ (and the mirror points $150^\circ$, $135^\circ$, $120^\circ$) gives the values below. Learn the first half; the second half follows from the supplementary rule.

:::graph Points of the semicircle at special angles
alt: Unit semicircle with marked points at 30, 45, 60, 120, 135 and 150 degrees.
x: -1.4..1.4
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
point: (0.866, 0.5) "30°" right
point: (0.707, 0.707) "45°" above-right
point: (0.5, 0.866) "60°" above
point: (-0.5, 0.866) "120°" above
point: (-0.707, 0.707) "135°" above-left
point: (-0.866, 0.5) "150°" left
point: (0, 1) "90°" above
:::

| $\alpha$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| $\sin\alpha$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\cos\alpha$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}{2}$ | $-\frac{\sqrt3}{2}$ | $-1$ |
| $\tan\alpha$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | none | $-\sqrt3$ | $-1$ | $-\frac{\sqrt3}{3}$ | $0$ |
| $\cot\alpha$ | none | $\sqrt3$ | $1$ | $\frac{\sqrt3}{3}$ | $0$ | $-\frac{\sqrt3}{3}$ | $-1$ | $-\sqrt3$ | none |

("none" means the value is not defined.)

:::example Values at 135°
Find $\sin135^\circ$, $\cos135^\circ$, $\tan135^\circ$, $\cot135^\circ$.

**Solution.**
Step 1. $135^\circ=180^\circ-45^\circ$, so we use the supplementary rule with $\alpha=45^\circ$.
Step 2. $\sin135^\circ=\sin45^\circ=\dfrac{\sqrt2}{2}$.
Step 3. $\cos135^\circ=-\cos45^\circ=-\dfrac{\sqrt2}{2}$.
Step 4. $\tan135^\circ=-\tan45^\circ=-1$ and $\cot135^\circ=-\cot45^\circ=-1$.
:::

## Basic identities

The point $M(x_0, y_0)$ lies on the circle $x^2+y^2=1$, so $\cos^2\alpha+\sin^2\alpha=1$. Dividing by $\cos^2\alpha$ or $\sin^2\alpha$ gives two more.

:::theorem Basic identities
$$\sin^2\alpha+\cos^2\alpha=1$$

$$1+\tan^2\alpha=\frac{1}{\cos^2\alpha}\quad(\alpha\neq90^\circ),\qquad 1+\cot^2\alpha=\frac{1}{\sin^2\alpha}\quad(\alpha\neq0^\circ,180^\circ)$$

$$\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha},\qquad \tan\alpha\cdot\cot\alpha=1$$

(the last one when both $\tan\alpha$ and $\cot\alpha$ exist, i.e. $\alpha\neq0^\circ,90^\circ,180^\circ$).
:::

### Finding the other values from one

1. Use an identity to get the square of the missing value.
2. Take the square root and choose the sign from the table of signs (this is where the angle's quadrant matters).
3. Use $\tan=\sin/\cos$ and $\cot=\cos/\sin$.

:::example Sine given, angle obtuse
Let $\sin\alpha=\dfrac35$ and $90^\circ<\alpha<180^\circ$. Find $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.

**Solution.**
Step 1. $\cos^2\alpha=1-\sin^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$.
Step 2. $\alpha$ is obtuse, so $\cos\alpha<0$. Hence $\cos\alpha=-\dfrac45$.
Step 3. $\tan\alpha=\dfrac{3/5}{-4/5}=-\dfrac34$.
Step 4. $\cot\alpha=\dfrac{1}{\tan\alpha}=-\dfrac43$.
:::

:::example Tangent given
Let $\tan\alpha=-2$. Find $\sin\alpha$, $\cos\alpha$, $\cot\alpha$.

**Solution.**
Step 1. $\tan\alpha<0$, so $\alpha$ is obtuse: $\cos\alpha<0$ and $\sin\alpha>0$.
Step 2. $\dfrac{1}{\cos^2\alpha}=1+\tan^2\alpha=1+4=5$, so $\cos^2\alpha=\dfrac15$.
Step 3. $\cos\alpha<0$, so $\cos\alpha=-\dfrac{1}{\sqrt5}=-\dfrac{\sqrt5}{5}$.
Step 4. $\sin\alpha=\tan\alpha\cdot\cos\alpha=(-2)\left(-\dfrac{\sqrt5}{5}\right)=\dfrac{2\sqrt5}{5}$.
Step 5. $\cot\alpha=\dfrac{1}{\tan\alpha}=-\dfrac12$.

Check: $\sin^2\alpha+\cos^2\alpha=\dfrac{4}{5}+\dfrac15=1$.
:::

:::example Simplifying with supplementary angles
Evaluate $A=\sin100^\circ-\sin80^\circ+\cos100^\circ+\cos80^\circ$.

**Solution.**
Step 1. $100^\circ=180^\circ-80^\circ$, so $\sin100^\circ=\sin80^\circ$.
Step 2. Also $\cos100^\circ=-\cos80^\circ$.
Step 3. $A=\sin80^\circ-\sin80^\circ-\cos80^\circ+\cos80^\circ=0$.
:::

:::warning Common mistakes
- Forgetting the sign: $\cos120^\circ=-\dfrac12$, not $\dfrac12$. Obtuse angles have negative cosine, tangent and cotangent.
- Writing $\sqrt{\cos^2\alpha}=\cos\alpha$. In fact $\sqrt{\cos^2\alpha}=|\cos\alpha|$; decide the sign from the angle.
- Writing $\tan90^\circ=\infty$ as a number, or $\cot0^\circ=0$. These values simply do not exist.
:::

## Using a scientific calculator

Keys differ slightly between models, but the ideas are the same.

- First set the calculator to **degree** mode (the screen shows D or DEG). In radian mode the answers will be wrong.
- For $\sin$, $\cos$, $\tan$: press the function key, type the angle, close the bracket if needed, then press equals.
- There is no $\cot$ key: use $\cot\alpha=\dfrac{1}{\tan\alpha}$.
- To find an angle from a value, press SHIFT (or 2nd) and then the function key (shown as $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

:::example Calculator work
(a) Find $\sin37^\circ$ to 4 decimal places. (b) Find $\alpha\in[0^\circ, 180^\circ]$ with $\cos\alpha=-0.3$. (c) Find all $\alpha\in[0^\circ, 180^\circ]$ with $\sin\alpha=0.8$.

**Solution.**
(a) Entering $\sin 37$ gives $\sin37^\circ\approx0.6018$.

(b) Entering $\cos^{-1}(-0.3)$ gives $\alpha\approx107.46^\circ$. The inverse cosine always returns an angle in $[0^\circ, 180^\circ]$, so this is the only answer.

(c) $\sin^{-1}(0.8)\approx53.13^\circ$. But the inverse sine only returns acute angles. The supplementary angle has the same sine, so there is a second answer $180^\circ-53.13^\circ=126.87^\circ$. Hence $\alpha\approx53.13^\circ$ or $\alpha\approx126.87^\circ$.
:::

## Key terms

:::terms
- unit semicircle | nửa đường tròn đơn vị
- sine | sin (sin của một góc)
- cosine | côsin
- tangent | tang
- cotangent | côtang
- supplementary angles | hai góc bù nhau
- obtuse angle | góc tù
- acute angle | góc nhọn
- identity | đẳng thức (hằng đẳng thức)
- undefined | không xác định
:::

## Summary

- For $\alpha\in[0^\circ, 180^\circ]$ and $M(x_0, y_0)$ on the unit semicircle: $\sin\alpha=y_0$, $\cos\alpha=x_0$, $\tan\alpha=\dfrac{y_0}{x_0}$, $\cot\alpha=\dfrac{x_0}{y_0}$.
- $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$ do not exist. $\sin\alpha\geq0$ always; for obtuse $\alpha$, $\cos$, $\tan$, $\cot$ are negative.
- Supplementary angles: same $\sin$, opposite $\cos$, $\tan$, $\cot$.
- $\sin^2\alpha+\cos^2\alpha=1$, $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$, $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$.
- On a calculator use degree mode; $\sin^{-1}$ gives only acute angles, so check the supplementary angle too.

## Practice

:::practice
1. Use the supplementary rule to find $\sin150^\circ$, $\cos150^\circ$, $\tan150^\circ$, $\cot150^\circ$.
2. Write the coordinates of the point $M$ of the unit semicircle for $\alpha=135^\circ$, and for $\alpha=90^\circ$.
3. Which of these do not exist: $\tan90^\circ$, $\cot0^\circ$, $\tan180^\circ$, $\cot180^\circ$, $\cot90^\circ$? Give the value of each one that exists.
4. Let $\sin\alpha=\dfrac{5}{13}$ and $\alpha$ be acute. Find $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.
5. Let $\cos\alpha=-\dfrac35$ with $0^\circ\leq\alpha\leq180^\circ$. Find $\sin\alpha$, $\tan\alpha$, $\cot\alpha$.
6. Evaluate $\cos20^\circ+\cos160^\circ+\sin35^\circ-\sin145^\circ$.
7. Let $\tan\alpha=\dfrac12$. Find $\sin\alpha$ and $\cos\alpha$.
8. With a calculator (degree mode), find to 4 decimal places $\sin72^\circ$, $\cos123^\circ$, $\tan148^\circ$.
9. In triangle $ABC$, show that $\sin(B+C)=\sin A$ and $\cos(B+C)=-\cos A$. Use this to find $\sin(B+C)$ and $\cos(B+C)$ when $A=50^\circ$ in terms of $\sin 50^\circ$ and $\cos 50^\circ$.
10. (Challenge) For an angle $\alpha\in[0^\circ, 180^\circ]$ it is known that $\sin\alpha+\cos\alpha=\dfrac12$. Find $\sin\alpha$ and $\cos\alpha$.
:::

:::solution Show solutions
1. $150^\circ=180^\circ-30^\circ$. So $\sin150^\circ=\sin30^\circ=\dfrac12$, $\cos150^\circ=-\cos30^\circ=-\dfrac{\sqrt3}{2}$, $\tan150^\circ=-\tan30^\circ=-\dfrac{\sqrt3}{3}$, $\cot150^\circ=-\cot30^\circ=-\sqrt3$.
2. For $\alpha=135^\circ$: $M=(\cos135^\circ, \sin135^\circ)=\left(-\dfrac{\sqrt2}{2}, \dfrac{\sqrt2}{2}\right)$. For $\alpha=90^\circ$: $M=(0, 1)$.
3. $\tan90^\circ$, $\cot0^\circ$ and $\cot180^\circ$ do not exist (the denominator $x_0$ or $y_0$ is $0$). $\tan180^\circ=\dfrac{0}{-1}=0$ and $\cot90^\circ=\dfrac{0}{1}=0$ exist.
4. $\cos^2\alpha=1-\dfrac{25}{169}=\dfrac{144}{169}$ and $\alpha$ is acute, so $\cos\alpha=\dfrac{12}{13}$. Then $\tan\alpha=\dfrac{5/13}{12/13}=\dfrac{5}{12}$ and $\cot\alpha=\dfrac{12}{5}$.
5. $\sin^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$ and $\sin\alpha\geq0$, so $\sin\alpha=\dfrac45$. Then $\tan\alpha=\dfrac{4/5}{-3/5}=-\dfrac43$ and $\cot\alpha=-\dfrac34$.
6. $\cos160^\circ=-\cos20^\circ$ and $\sin145^\circ=\sin35^\circ$. So the sum is $\cos20^\circ-\cos20^\circ+\sin35^\circ-\sin35^\circ=0$.
7. $\tan\alpha>0$ so $\alpha$ is acute and both values are positive. $\dfrac{1}{\cos^2\alpha}=1+\dfrac14=\dfrac54$, so $\cos^2\alpha=\dfrac45$ and $\cos\alpha=\dfrac{2}{\sqrt5}=\dfrac{2\sqrt5}{5}$. Then $\sin\alpha=\tan\alpha\cos\alpha=\dfrac12\cdot\dfrac{2\sqrt5}{5}=\dfrac{\sqrt5}{5}$. Check: $\dfrac15+\dfrac45=1$.
8. $\sin72^\circ\approx0.9511$, $\cos123^\circ\approx-0.5446$, $\tan148^\circ\approx-0.6249$. (The last two are negative because the angles are obtuse, which is a good check on the calculator mode.)
9. In a triangle $A+B+C=180^\circ$, so $B+C=180^\circ-A$. By the supplementary rule $\sin(B+C)=\sin(180^\circ-A)=\sin A$ and $\cos(B+C)=\cos(180^\circ-A)=-\cos A$. For $A=50^\circ$: $\sin(B+C)=\sin50^\circ$ and $\cos(B+C)=-\cos50^\circ$ (here $B+C=130^\circ$).
10. Square: $(\sin\alpha+\cos\alpha)^2=\dfrac14$, so $1+2\sin\alpha\cos\alpha=\dfrac14$ and $\sin\alpha\cos\alpha=-\dfrac38$. The product is negative and $\sin\alpha\geq0$, so $\sin\alpha>0$ and $\cos\alpha<0$. Then $(\sin\alpha-\cos\alpha)^2=1-2\sin\alpha\cos\alpha=1+\dfrac34=\dfrac74$ and $\sin\alpha-\cos\alpha>0$, so $\sin\alpha-\cos\alpha=\dfrac{\sqrt7}{2}$. Adding and subtracting with $\sin\alpha+\cos\alpha=\dfrac12$: $\sin\alpha=\dfrac{1+\sqrt7}{4}\approx0.911$ and $\cos\alpha=\dfrac{1-\sqrt7}{4}\approx-0.411$. Check: $\dfrac{(1+\sqrt7)^2+(1-\sqrt7)^2}{16}=\dfrac{16}{16}=1$.
:::
