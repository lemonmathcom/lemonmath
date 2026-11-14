---
title: Trigonometric values of angles from 0° to 180°
description: Define sin, cos, tan and cot for angles from 0° to 180° on the unit semicircle; use special values, supplementary angles, identities and a calculator.
minutes: 25
---

:::goals
- Define $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$ for $0^\circ\leq\alpha\leq180^\circ$ using a point on the unit semicircle.
- Use the relation between supplementary angles and the table of values for special angles.
- Use $\sin^2\alpha+\cos^2\alpha=1$ and related identities to find the other values from one value, choosing the correct sign.
- Compute trigonometric values and find angles with a calculator.
:::

A barrier arm $1$ m long turns about a pivot $O$ at road level. When the arm makes $30^\circ$ with the road, its tip is $0.5$ m high and about $0.87$ m to the right of $O$. If the arm keeps turning until it reaches $150^\circ$, where is the tip: how high, on which side of $O$, and how far?

For $30^\circ$ we can draw a right-angled triangle and work it out at once. But $150^\circ$ does not fit inside any right-angled triangle, because the sine and cosine you met in grade 9 are only for acute angles. This lesson extends them to every angle from $0^\circ$ to $180^\circ$. The extension is very natural, and it answers the barrier question too: which side the tip is on, and how high.

## The unit semicircle

The idea is to replace the right-angled triangle with a shape that never "runs out of room" as the angle grows: a semicircle. Draw the half of the circle above the $x$-axis with centre $O(0, 0)$ and radius $1$. This is the **unit semicircle**: its points $(x, y)$ satisfy $x^2+y^2=1$ and $y\geq0$.

Take an angle $\alpha$ from $0^\circ$ to $180^\circ$. Think of the barrier arm from the start: it begins lying along the ray $Ox$ and turns anticlockwise through $\alpha$. This ray meets the semicircle at exactly one point $M(x_0, y_0)$.

:::graph The point $M$ for the angle $\alpha$
alt: The unit semicircle with centre O. A point M on the semicircle is joined to O, the angle alpha between the x-axis and OM is marked, and the foot H of the perpendicular from M to the x-axis is shown.
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

### Exploring with an acute angle

We start from what we know. When $\alpha$ is acute, triangle $OHM$ has a right angle at $H$ and hypotenuse $OM=1$. Because the hypotenuse is $1$, the ratios become very simple:

$$\cos\alpha=\frac{OH}{OM}=OH=x_0,\qquad \sin\alpha=\frac{HM}{OM}=HM=y_0.$$

For example, with $\alpha=30^\circ$: $M\left(\dfrac{\sqrt3}{2}, \dfrac12\right)\approx(0.87, 0.5)$, exactly the position of the barrier tip at the start. So for acute angles, **the $x$-coordinate of $M$ is the cosine and the $y$-coordinate is the sine**. This small discovery is the key: every angle has an $x$-coordinate and a $y$-coordinate, obtuse ones included. So we take exactly this as the definition for **every** angle $\alpha$ in $[0^\circ, 180^\circ]$. For acute angles the new definition gives the same results as the old one, so nothing you learned is thrown away.

:::definition Trigonometric ratios of an angle from 0° to 180°
Let $M(x_0, y_0)$ be the point of the unit semicircle with $\angle xOM=\alpha$. Then

$$\sin\alpha=y_0,\qquad \cos\alpha=x_0,$$

$$\tan\alpha=\frac{y_0}{x_0}\ (x_0\neq0),\qquad \cot\alpha=\frac{x_0}{y_0}\ (y_0\neq0).$$
:::

### When are tan and cot undefined?

Tangent and cotangent are divisions, and a division cannot have a zero denominator. Let us see when that happens.

- $x_0=0$ exactly when $M=(0, 1)$, that is, $\alpha=90^\circ$. So $\tan90^\circ$ is undefined.
- $y_0=0$ exactly when $M=(1, 0)$ or $M=(-1, 0)$, that is, $\alpha=0^\circ$ or $\alpha=180^\circ$. So $\cot0^\circ$ and $\cot180^\circ$ are undefined.

### Signs of the ratios

The signs can be read straight off the picture, with nothing to learn by heart. Since $M$ is always on the upper semicircle, $\sin\alpha\geq0$ for every $\alpha$. The sign of $\cos\alpha=x_0$ depends on whether $M$ is to the right or to the left of the $y$-axis:

| angle | $\sin\alpha$ | $\cos\alpha$ | $\tan\alpha$ | $\cot\alpha$ |
|---|---|---|---|---|
| acute ($0^\circ<\alpha<90^\circ$) | $+$ | $+$ | $+$ | $+$ |
| obtuse ($90^\circ<\alpha<180^\circ$) | $+$ | $-$ | $-$ | $-$ |

## Supplementary angles

Now back to the barrier. Notice that $150^\circ$ and $30^\circ$ add up to exactly $180^\circ$: they are supplementary. An arm tilted $30^\circ$ to the right and an arm tilted $30^\circ$ to the left (that is, at $150^\circ$) are like mirror images. In general, the points $M$ (angle $\alpha$) and $M'$ (angle $180^\circ-\alpha$) are mirror images in the $y$-axis.

:::graph Supplementary angles give points symmetric in the y-axis
alt: The unit semicircle with the point M for 60 degrees and the point M' for 120 degrees, at the same height and symmetric in the y-axis.
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

A mirror in the $y$-axis keeps the height and only swaps left and right: the two points have the same $y$-coordinate and opposite $x$-coordinates. Written as formulas, this gives a rule for every $\alpha$.

:::theorem Supplementary angles
For $0^\circ\leq\alpha\leq180^\circ$:

$$\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha,$$

$$\tan(180^\circ-\alpha)=-\tan\alpha,\qquad \cot(180^\circ-\alpha)=-\cot\alpha$$

(whenever these values are defined).
:::

So at $150^\circ$ the barrier tip is still $0.5$ m high, but it is about $0.87$ m to the **left** of $O$, because $\cos150^\circ=-\cos30^\circ\approx-0.87$. For acute angles you also know the complementary-angle rule: $\sin(90^\circ-\alpha)=\cos\alpha$ and $\cos(90^\circ-\alpha)=\sin\alpha$.

The supplementary rule is so strong that sometimes we can compute without knowing a single value. The next example shows this.

:::example Simplifying with supplementary angles
Compute $A=\sin100^\circ-\sin80^\circ+\cos100^\circ+\cos80^\circ$.

**Solution.** Since $100^\circ=180^\circ-80^\circ$, we rewrite every term with the angle $80^\circ$:

$$\sin100^\circ=\sin80^\circ,\qquad \cos100^\circ=-\cos80^\circ.$$

$$A=\sin80^\circ-\sin80^\circ-\cos80^\circ+\cos80^\circ=0.$$

So $A=0$.
:::

## Table of special values

Putting $M$ at $30^\circ$, $45^\circ$, $60^\circ$ (and at the mirror points $150^\circ$, $135^\circ$, $120^\circ$) gives the table below. Do not worry about all those numbers: you only need to remember the first half, and those are the values you already learned in grade 9. The second half follows from the supplementary rule.

:::graph Points of the semicircle at special angles
alt: The unit semicircle with points marked at 30, 45, 60, 90, 120, 135 and 150 degrees.
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
| $\tan\alpha$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | undefined | $-\sqrt3$ | $-1$ | $-\frac{\sqrt3}{3}$ | $0$ |
| $\cot\alpha$ | undefined | $\sqrt3$ | $1$ | $\frac{\sqrt3}{3}$ | $0$ | $-\frac{\sqrt3}{3}$ | $-1$ | $-\sqrt3$ | undefined |

Let us use the table and the supplementary rule to find all four values for an obtuse angle. You will see that knowing $45^\circ$ is enough.

:::example The values at 135°
Find $\sin135^\circ$, $\cos135^\circ$, $\tan135^\circ$, $\cot135^\circ$.

**Solution.** Since $135^\circ=180^\circ-45^\circ$, we use the supplementary rule with $\alpha=45^\circ$; the sine stays the same and the other three change sign:

$$\sin135^\circ=\sin45^\circ=\frac{\sqrt2}{2},\qquad \cos135^\circ=-\cos45^\circ=-\frac{\sqrt2}{2},$$

$$\tan135^\circ=-\tan45^\circ=-1,\qquad \cot135^\circ=-\cot45^\circ=-1.$$

So $\sin135^\circ=\dfrac{\sqrt2}{2}$, $\cos135^\circ=-\dfrac{\sqrt2}{2}$, $\tan135^\circ=\cot135^\circ=-1$.
:::

## Basic identities

**Why is $\sin^2\alpha+\cos^2\alpha=1$?** The reason is right there in the picture. The point $M(x_0, y_0)$ lies on the circle with centre $O$ and radius $1$, so $x_0^2+y_0^2=OM^2=1$, that is, $\cos^2\alpha+\sin^2\alpha=1$. Dividing both sides by $\cos^2\alpha$ or by $\sin^2\alpha$ gives two more identities.

:::theorem Basic identities
$$\sin^2\alpha+\cos^2\alpha=1$$

$$1+\tan^2\alpha=\frac{1}{\cos^2\alpha}\quad(\alpha\neq90^\circ),\qquad 1+\cot^2\alpha=\frac{1}{\sin^2\alpha}\quad(\alpha\neq0^\circ,180^\circ)$$

$$\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha},\qquad \tan\alpha\cdot\cot\alpha=1$$

(the last one when $\alpha\neq0^\circ,90^\circ,180^\circ$).
:::

These identities let us find all the other values from one known value. The method: use an identity to find the square of the value we want, then **choose the sign** according to whether the angle is acute or obtuse. Choosing the sign is where many students slip, because after a square root it is easy to forget there are two possibilities: $\cos^2\alpha=\dfrac{16}{25}$ allows both $\cos\alpha=\dfrac45$ and $\cos\alpha=-\dfrac45$.

:::example Given the sine of an obtuse angle
Given $\sin\alpha=\dfrac35$ and $90^\circ<\alpha<180^\circ$, find $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.

**Solution.** We use $\sin^2\alpha+\cos^2\alpha=1$ to find $\cos^2\alpha$:

$$\cos^2\alpha=1-\frac{9}{25}=\frac{16}{25}.$$

The angle is obtuse, so $\cos\alpha<0$ and we take the negative value:

$$\cos\alpha=-\frac45,\qquad \tan\alpha=\frac{3/5}{-4/5}=-\frac34,\qquad \cot\alpha=\frac{1}{\tan\alpha}=-\frac43.$$

So $\cos\alpha=-\dfrac45$, $\tan\alpha=-\dfrac34$, $\cot\alpha=-\dfrac43$.
:::

Sometimes the problem does not say whether the angle is acute or obtuse. No need to worry: if the tangent is given, its sign gives that away.

:::example Given the tangent
Given $\tan\alpha=-2$, find $\cos\alpha$, $\sin\alpha$, $\cot\alpha$.

**Solution.** Since $\tan\alpha<0$, the angle is obtuse, so $\cos\alpha<0$. Use $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$:

$$\frac{1}{\cos^2\alpha}=1+4=5\Rightarrow \cos^2\alpha=\frac15\Rightarrow \cos\alpha=-\frac{1}{\sqrt5}=-\frac{\sqrt5}{5}.$$

The sine is the tangent times the cosine:

$$\sin\alpha=\tan\alpha\cdot\cos\alpha=(-2)\left(-\frac{\sqrt5}{5}\right)=\frac{2\sqrt5}{5},\qquad \cot\alpha=-\frac12.$$

So $\cos\alpha=-\dfrac{\sqrt5}{5}$, $\sin\alpha=\dfrac{2\sqrt5}{5}$, $\cot\alpha=-\dfrac12$.

**Check.** $\sin^2\alpha+\cos^2\alpha=\dfrac45+\dfrac15=1$, and $\sin\alpha>0$, as for every angle in $[0^\circ, 180^\circ]$.
:::

:::warning Common mistakes
When in doubt, sketch the semicircle quickly and mark the point $M$: the picture will show you the right sign.
- **Wrong:** $\cos120^\circ=\dfrac12$. **Why it is wrong:** $120^\circ$ is obtuse, so $M$ is left of the $y$-axis and its $x$-coordinate is negative. **Right:** $\cos120^\circ=-\cos60^\circ=-\dfrac12$.
- **Wrong:** from $\cos^2\alpha=\dfrac{16}{25}$, writing $\cos\alpha=\dfrac45$ straight away. **Why it is wrong:** $\sqrt{\cos^2\alpha}=|\cos\alpha|$, and both signs are still possible. **Right:** decide whether the angle is acute or obtuse, then choose the sign.
- **Wrong:** writing $\tan90^\circ=\infty$ or $\cot0^\circ=0$. **Why it is wrong:** the denominator $x_0$ (or $y_0$) is $0$, so the division cannot be done. **Right:** these values are undefined.
:::

## Using a scientific calculator

For angles that are not special, such as $37^\circ$, we use a calculator. The keys differ a little between models, but the idea is the same.

- First set the calculator to **degree** mode (the screen shows D or DEG). In radian mode the results are wrong.
- For $\sin$, $\cos$, $\tan$: press the function key, enter the angle, then press equals.
- There is no $\cot$ key: use $\cot\alpha=\dfrac{1}{\tan\alpha}$.
- To find an angle from a value, press SHIFT (or 2nd) and then the function key ($\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

A calculator is handy, but it does not think for us. The last example shows a trap: a given sine can come from **two** angles, while the calculator reports only one.

:::example Working with a calculator
a) Find $\sin37^\circ$ (to $4$ decimal places).

b) Find $\alpha\in[0^\circ, 180^\circ]$ with $\cos\alpha=-0.3$.

c) Find all $\alpha\in[0^\circ, 180^\circ]$ with $\sin\alpha=0.8$.

**Solution.** a) Press $\sin 37$:
$$\sin37^\circ\approx0.6018.$$

b) Press $\cos^{-1}(-0.3)$ to get $\alpha\approx107.46^\circ$. Each cosine value matches exactly one point $M$ on the semicircle, so this is the only angle.

c) Press $\sin^{-1}(0.8)$ to get the acute angle $53.13^\circ$. The supplementary angle has the same sine, so there is one more angle:
$$180^\circ-53.13^\circ=126.87^\circ.$$

So $\alpha\approx53.13^\circ$ or $\alpha\approx126.87^\circ$.
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

- $M(x_0, y_0)$ on the unit semicircle with $\angle xOM=\alpha$: $\sin\alpha=y_0$, $\cos\alpha=x_0$, $\tan\alpha=\dfrac{y_0}{x_0}$, $\cot\alpha=\dfrac{x_0}{y_0}$.
- $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$ are undefined. Always $\sin\alpha\geq0$; obtuse angles have negative $\cos$, $\tan$, $\cot$.
- Supplementary angles: $\sin(180^\circ-\alpha)=\sin\alpha$; $\cos$, $\tan$, $\cot$ change sign.
- $\sin^2\alpha+\cos^2\alpha=1$, $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$, $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$. After taking a square root, choose the sign.
- Calculator: degree mode; $\sin^{-1}$ gives only the acute angle, so remember the supplementary one.

Back to the barrier from the start: at $150^\circ$ the tip is still $0.5$ m high and about $0.87$ m from $O$, but on the left, because $\cos150^\circ<0$. You only need to remember one picture: the point $M$ on the semicircle, whose $x$-coordinate is the cosine and $y$-coordinate the sine. Everything else in the lesson can be read from that picture.

## Practice

Each exercise reminds you what you need and gives some steps to start. Have a go yourself first; with an obtuse angle, sketch the semicircle to find the sign before you calculate. Then open the solution and compare.

:::exercise
Use the supplementary rule to find $\sin150^\circ$, $\cos150^\circ$, $\tan150^\circ$, $\cot150^\circ$.

::hint
**What you need:** $\sin(180^\circ-\alpha)=\sin\alpha$; cosine, tangent and cotangent change sign.

**Steps:**
1. Write $150^\circ=180^\circ-30^\circ$.
2. Take the values for $30^\circ$ from the table and change the signs where needed.

::solution
$$\sin150^\circ=\frac12,\quad \cos150^\circ=-\frac{\sqrt3}{2},\quad \tan150^\circ=-\frac{\sqrt3}{3},\quad \cot150^\circ=-\sqrt3.$$

**Answer.** $\dfrac12$; $-\dfrac{\sqrt3}{2}$; $-\dfrac{\sqrt3}{3}$; $-\sqrt3$.
:::

:::exercise
Which of the following are undefined: $\tan90^\circ$, $\cot0^\circ$, $\tan180^\circ$, $\cot180^\circ$, $\cot90^\circ$? Find the values that are defined.

::hint
**What you need:** $\tan\alpha=\dfrac{y_0}{x_0}$ needs $x_0\neq0$; $\cot\alpha=\dfrac{x_0}{y_0}$ needs $y_0\neq0$.

**Steps:**
1. Write the coordinates of $M$ at $0^\circ$, $90^\circ$, $180^\circ$.
2. Check whether the denominator is $0$.

::solution
$M(1, 0)$ at $0^\circ$, $M(0, 1)$ at $90^\circ$, $M(-1, 0)$ at $180^\circ$. The denominator is $0$ for $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$. Otherwise
$$\tan180^\circ=\frac{0}{-1}=0,\qquad \cot90^\circ=\frac01=0.$$

**Answer.** Undefined: $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$; $\tan180^\circ=0$, $\cot90^\circ=0$.
:::

:::exercise
Given $\cos\alpha=-\dfrac35$ with $0^\circ\leq\alpha\leq180^\circ$, find $\sin\alpha$, $\tan\alpha$, $\cot\alpha$.

::hint
**What you need:** $\sin^2\alpha+\cos^2\alpha=1$, and $\sin\alpha\geq0$ for every $\alpha\in[0^\circ, 180^\circ]$.

**Steps:**
1. Find $\sin^2\alpha$.
2. Choose the sign of $\sin\alpha$.
3. Find $\tan$ and $\cot$.

::solution
$$\sin^2\alpha=1-\frac{9}{25}=\frac{16}{25},\ \sin\alpha\geq0\Rightarrow \sin\alpha=\frac45;\qquad \tan\alpha=\frac{4/5}{-3/5}=-\frac43,\quad \cot\alpha=-\frac34.$$

**Answer.** $\sin\alpha=\dfrac45$, $\tan\alpha=-\dfrac43$, $\cot\alpha=-\dfrac34$.
:::

:::exercise
Compute $B=\cos20^\circ+\cos160^\circ+\sin35^\circ-\sin145^\circ$.

::hint
**What you need:** the supplementary-angle rule.

**Steps:**
1. Notice that $160^\circ=180^\circ-20^\circ$ and $145^\circ=180^\circ-35^\circ$.
2. Rewrite every term with the angles $20^\circ$ and $35^\circ$.

::solution
$$\cos160^\circ=-\cos20^\circ,\quad \sin145^\circ=\sin35^\circ\Rightarrow B=\cos20^\circ-\cos20^\circ+\sin35^\circ-\sin35^\circ=0.$$

**Answer.** $B=0$.
:::

:::exercise
An angle $\alpha$ has $90^\circ<\alpha<180^\circ$ and $\sin\alpha=\dfrac{12}{13}$. Is each claim true or false?

a) $\cos\alpha=\dfrac{5}{13}$.

b) $\tan\alpha=-\dfrac{12}{5}$.

c) $\cos(180^\circ-\alpha)=-\dfrac{5}{13}$.

d) $\sin\alpha\cos\alpha=-\dfrac{60}{169}$.

::hint
**What you need:** $\sin^2\alpha+\cos^2\alpha=1$; an obtuse angle has a negative cosine; $\cos(180^\circ-\alpha)=-\cos\alpha$.

**Steps:**
1. Find $\cos^2\alpha$ and choose the sign.
2. Compute $\tan\alpha$ and $\sin\alpha\cos\alpha$.
3. Use the supplementary rule for c).

::solution
$\cos^2\alpha=1-\dfrac{144}{169}=\dfrac{25}{169}$, and the angle is obtuse, so $\cos\alpha=-\dfrac{5}{13}$.

a) **False:** $\cos\alpha=-\dfrac5{13}$, not $\dfrac5{13}$.

b) **True:** $\tan\alpha=\dfrac{12/13}{-5/13}=-\dfrac{12}{5}$.

c) **False:** $\cos(180^\circ-\alpha)=-\cos\alpha=\dfrac{5}{13}$.

d) **True:** $\dfrac{12}{13}\cdot\left(-\dfrac{5}{13}\right)=-\dfrac{60}{169}$.

**Answer.** a) False; b) True; c) False; d) True.
:::

:::exercise
The arm of a crane is $20$ m long and is attached to the crane's tower at a point $O$ that is $3$ m above the ground. The arm makes an angle of $115^\circ$ with the horizontal ray $Ox$. How high above the ground is the tip of the arm, in metres (rounded to one decimal place)?

::hint
**What you need:** if $OM=R$ and $\angle xOM=\alpha$, then $M$ is $R\sin\alpha$ higher than $O$.

**Steps:**
1. Scale the unit semicircle by $20$: the height of the tip above $O$ is $20\sin115^\circ$.
2. Add the $3$ m height of $O$.
3. Use a calculator in degree mode.

::solution
$$h=3+20\sin115^\circ\approx3+20\cdot0.9063\approx21.1\ \text{(m)}.$$

**Answer.** $21.1$.
:::

:::exercise
In triangle $ABC$, show that $\sin(B+C)=\sin A$ and $\cos(B+C)=-\cos A$. Apply this to find $\sin(B+C)$ and $\cos(B+C)$ when $A=120^\circ$.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$; the supplementary rule.

**Steps:**
1. Write $B+C=180^\circ-A$.
2. Apply the supplementary rule.
3. Put $A=120^\circ$ and use the table.

::solution
$B+C=180^\circ-A$, so $\sin(B+C)=\sin A$ and $\cos(B+C)=-\cos A$. With $A=120^\circ$:
$$\sin(B+C)=\sin120^\circ=\frac{\sqrt3}{2},\qquad \cos(B+C)=-\cos120^\circ=\frac12.$$

**Answer.** $\sin(B+C)=\dfrac{\sqrt3}{2}$, $\cos(B+C)=\dfrac12$ (consistent with $B+C=60^\circ$).
:::

:::exercise
Use a calculator to find every angle $\alpha\in[0^\circ, 180^\circ]$ (to two decimal places of a degree) such that: a) $\sin\alpha=0.6$; b) $\cos\alpha=-0.6$.

::hint
**What you need:** $\sin^{-1}$ gives only the acute angle, and the supplementary angle has the same sine; each cosine value matches only one angle.

**Steps:**
1. Press $\sin^{-1}(0.6)$, then add the supplementary angle.
2. Press $\cos^{-1}(-0.6)$.

::solution
a) $\sin^{-1}(0.6)\approx36.87^\circ$, and $180^\circ-36.87^\circ=143.13^\circ$.

b) $\cos^{-1}(-0.6)\approx126.87^\circ$ (a single angle).

**Answer.** a) $\alpha\approx36.87^\circ$ or $\alpha\approx143.13^\circ$; b) $\alpha\approx126.87^\circ$.
:::

:::exercise Challenge
An angle $\alpha\in[0^\circ, 180^\circ]$ satisfies $\sin\alpha+\cos\alpha=\dfrac12$. Find $\sin\alpha$ and $\cos\alpha$.

::hint
**What you need:** $(\sin\alpha\pm\cos\alpha)^2=1\pm2\sin\alpha\cos\alpha$.

**Steps:**
1. Square to find $\sin\alpha\cos\alpha$.
2. Use signs to see that $\sin\alpha-\cos\alpha$ is positive.
3. Find $\sin\alpha-\cos\alpha$, then solve for the sum and difference.

::solution
Square both sides:
$$1+2\sin\alpha\cos\alpha=\frac14\Rightarrow \sin\alpha\cos\alpha=-\frac38.$$
The product is negative and $\sin\alpha\geq0$, so $\sin\alpha>0>\cos\alpha$, hence $\sin\alpha-\cos\alpha>0$:
$$(\sin\alpha-\cos\alpha)^2=1+\frac34=\frac74\Rightarrow \sin\alpha-\cos\alpha=\frac{\sqrt7}{2}.$$
Add and subtract with $\sin\alpha+\cos\alpha=\dfrac12$.

**Answer.** $\sin\alpha=\dfrac{1+\sqrt7}{4}\approx0.911$, $\cos\alpha=\dfrac{1-\sqrt7}{4}\approx-0.411$.
:::

:::exercise
(Revisiting [Statements](lesson:statements).) Consider the two statements

$P$: "$\forall\alpha\in[0^\circ, 180^\circ],\ \sin\alpha\geq0$";

$Q$: "$\exists\alpha\in[0^\circ, 180^\circ]$ such that $\tan\alpha=0$ and $\cot\alpha=0$".

Is each statement true or false? State the negation of $P$.

::hint
**What you need:** $\sin\alpha$ is the $y$-coordinate of a point on the upper semicircle; the negation of "$\forall\alpha, R(\alpha)$" is "$\exists\alpha, \overline{R(\alpha)}$".

**Steps:**
1. For $P$: recall where $M$ lies.
2. For $Q$: find the angles with $\tan\alpha=0$, then look at their $\cot$.

::solution
$P$ is true because $M$ lies on the semicircle above the $x$-axis, so $y_0\geq0$.

$\tan\alpha=0$ only when $y_0=0$, that is, $\alpha=0^\circ$ or $180^\circ$; there $\cot\alpha$ is undefined. So no angle satisfies both, and $Q$ is false.

**Answer.** $P$ is true, $Q$ is false. $\overline{P}$: "$\exists\alpha\in[0^\circ, 180^\circ],\ \sin\alpha<0$".
:::

## Mini test

:::quiz
::mc
The value of $\cos150^\circ$ is
A. $\dfrac{\sqrt3}{2}$.
B. $-\dfrac{\sqrt3}{2}$.
C. $\dfrac12$.
D. $-\dfrac12$.
::key B
$\cos150^\circ=\cos(180^\circ-30^\circ)=-\cos30^\circ=-\dfrac{\sqrt3}{2}$. Option A forgets to change the sign; an obtuse angle always has a negative cosine.

::mc
Which value is **undefined**?
A. $\tan0^\circ$.
B. $\cot90^\circ$.
C. $\tan90^\circ$.
D. $\cos180^\circ$.
::key C
At $90^\circ$ the point $M(0, 1)$ has $x_0=0$, so $\tan90^\circ=\dfrac{y_0}{x_0}$ is undefined. The other values are $0$, $0$ and $-1$.

::mc
Given $\sin\alpha=\dfrac45$ with $90^\circ<\alpha<180^\circ$, the value of $\cos\alpha$ is
A. $\dfrac35$.
B. $-\dfrac35$.
C. $\dfrac15$.
D. $-\dfrac15$.
::key B
$\cos^2\alpha=1-\dfrac{16}{25}=\dfrac{9}{25}$, and the angle is obtuse, so we take the negative value: $\cos\alpha=-\dfrac35$. Option C uses $1-\sin\alpha$ instead of $1-\sin^2\alpha$.

::mc
The value of $\sin120^\circ\cos30^\circ+\cos120^\circ\sin30^\circ$ is
A. $\dfrac12$.
B. $1$.
C. $0$.
D. $-\dfrac12$.
::key A
$\dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2}+\left(-\dfrac12\right)\cdot\dfrac12=\dfrac34-\dfrac14=\dfrac12$. Taking $\cos120^\circ=\dfrac12$ by mistake gives $1$ (option B).

::tf
An angle $\alpha$ has $90^\circ<\alpha<180^\circ$ and $\cos\alpha=-\dfrac{\sqrt5}{3}$.
a) $\sin\alpha=\dfrac23$.
b) $\sin(180^\circ-\alpha)=-\dfrac23$.
c) $\tan\alpha=-\dfrac{2\sqrt5}{5}$.
d) $\cos(180^\circ-\alpha)=\dfrac{\sqrt5}{3}$.
::key T F T T
a) True: $\sin^2\alpha=1-\dfrac59=\dfrac49$ and $\sin\alpha\ge 0$. b) False: $\sin(180^\circ-\alpha)=\sin\alpha=\dfrac23$. c) True: $\tan\alpha=\dfrac{2/3}{-\sqrt5/3}=-\dfrac{2}{\sqrt5}=-\dfrac{2\sqrt5}{5}$. d) True: $\cos(180^\circ-\alpha)=-\cos\alpha$.

::sa
Compute $P=\sin^2 25^\circ+\sin^2 65^\circ+\cos100^\circ+\cos80^\circ$.
::key 1
$\sin65^\circ=\cos25^\circ$ (complementary angles), so $\sin^2 25^\circ+\sin^2 65^\circ=1$. Also $\cos100^\circ=-\cos80^\circ$ (supplementary angles), so the last two terms add up to $0$. Hence $P=1$.

::sa
In the coordinate plane, the point $M$ lies on the semicircle with centre $O$ and radius $4$ (above the $x$-axis), with $\angle xOM=140^\circ$. Find the $x$-coordinate of $M$ (rounded to one decimal place).
::key -3.1
Scale the unit semicircle by $4$: the $x$-coordinate of $M$ is $4\cos140^\circ\approx4\cdot(-0.766)\approx-3.06$, which rounds to $-3.1$. It is negative because the obtuse angle puts $M$ to the left of the $y$-axis.
:::
