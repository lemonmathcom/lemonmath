---
title: Trigonometric formulas
description: Learn the addition, double-angle, power-reducing, product-to-sum and sum-to-product formulas, and use them to evaluate, simplify and model real situations.
minutes: 25
---

:::goals
- Write and apply the addition formulas for $\sin$, $\cos$ and $\tan$ to find trigonometric values of angles such as $75^\circ$, $15^\circ$ and $\dfrac{\pi}{12}$.
- Use the double-angle and power-reducing formulas to find values and transform expressions.
- Use the product-to-sum and sum-to-product formulas to simplify expressions.
- Explain why the formulas are true and use them in real situations: viewing angles, the range of a ball, and beats in sound.
:::

A photo-editing app rotates a picture about the origin $O$: first by $30^\circ$, then by a further $45^\circ$. The point $I(1, 0)$ ends up exactly where a single rotation of $75^\circ$ would put it, at the point $(\cos75^\circ, \sin75^\circ)$.

The table of special trigonometric values has $30^\circ$, $45^\circ$, $60^\circ$ and a few other angles, but not $75^\circ$. How can we find $\cos75^\circ$ and $\sin75^\circ$ exactly from the values we already know? We need to know how the trigonometric values of a sum of two angles are related to those of the two angles themselves.

## Addition formulas

### Explore: is $\cos(a+b)$ equal to $\cos a+\cos b$?

Let us try some familiar pairs of angles:

| $(a, b)$ | $\cos(a+b)$ | $\cos a+\cos b$ | $\cos a\cos b-\sin a\sin b$ |
|---|---|---|---|
| $(30^\circ, 60^\circ)$ | $0$ | $\dfrac{\sqrt3+1}{2}\approx1.37$ | $\dfrac{\sqrt3}{4}-\dfrac{\sqrt3}{4}=0$ |
| $(45^\circ, 45^\circ)$ | $0$ | $\sqrt2\approx1.41$ | $\dfrac12-\dfrac12=0$ |
| $(60^\circ, 60^\circ)$ | $-\dfrac12$ | $1$ | $\dfrac14-\dfrac34=-\dfrac12$ |

The second and third columns differ, so $\cos(a+b)\ne\cos a+\cos b$. The second and fourth columns agree in all three rows. We conjecture that $\cos(a+b)=\cos a\cos b-\sin a\sin b$, and we will now prove it.

:::theorem Addition formulas
For all angles $a$ and $b$:
$$\begin{aligned}\cos(a-b)&=\cos a\cos b+\sin a\sin b, & \cos(a+b)&=\cos a\cos b-\sin a\sin b,\\ \sin(a-b)&=\sin a\cos b-\cos a\sin b, & \sin(a+b)&=\sin a\cos b+\cos a\sin b.\end{aligned}$$
When all the expressions are defined,
$$\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b},\qquad \tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b}.$$
:::

### Why are the formulas true?

On the unit circle take $M(\cos a, \sin a)$ and $N(\cos b, \sin b)$. Then $\overrightarrow{OM}=(\cos a, \sin a)$ and $\overrightarrow{ON}=(\cos b, \sin b)$ both have length $1$. We compute their scalar product (dot product) in two ways.

:::diagram Two points $M$, $N$ on the unit circle ($a=60^\circ$, $b=30^\circ$)
alt: The unit circle with two points M and N, the angle b between rays OI and ON, and the angle a−b between ON and OM
point O 0,0 below-left
point I 1,0 below-right
point M 0.5,0.866 above
point N 0.866,0.5 right
circle O 1
axes
segment O M
segment O N
angle I O N "b"
angle N O M "a−b"
:::

Using coordinates: $\overrightarrow{OM}\cdot\overrightarrow{ON}=\cos a\cos b+\sin a\sin b$. Using the definition: $\overrightarrow{OM}\cdot\overrightarrow{ON}=1\cdot1\cdot\cos(a-b)$, because the angle between the two vectors measures $a-b$ (or $b-a$, or differs from it by a multiple of $2\pi$; their cosines are equal). Comparing the two results,
$$\cos(a-b)=\cos a\cos b+\sin a\sin b.$$

Replace $b$ by $-b$ and use $\cos(-b)=\cos b$ and $\sin(-b)=-\sin b$ to get $\cos(a+b)=\cos a\cos b-\sin a\sin b$. For $\sin$ we use $\sin x=\cos\left(\dfrac{\pi}{2}-x\right)$:
$$\sin(a+b)=\cos\left(\left(\dfrac{\pi}{2}-a\right)-b\right)=\sin a\cos b+\cos a\sin b.$$
Replacing $b$ by $-b$ gives $\sin(a-b)$. Finally $\tan(a+b)=\dfrac{\sin(a+b)}{\cos(a+b)}$; dividing the numerator and denominator by $\cos a\cos b$ (which is not $0$) gives the formula for $\tan$.

:::example Trigonometric values of $75^\circ$
Find $\sin75^\circ$ and $\cos75^\circ$. Hence find the coordinates of the point $I(1, 0)$ after a rotation of $30^\circ$ followed by a further $45^\circ$ about $O$.

**Solution.** We have $75^\circ=45^\circ+30^\circ$, so we apply the addition formulas with the special values:
$$\begin{aligned}\sin75^\circ&=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ=\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2}+\dfrac{\sqrt2}{2}\cdot\dfrac12=\dfrac{\sqrt6+\sqrt2}{4},\\ \cos75^\circ&=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ=\dfrac{\sqrt6-\sqrt2}{4}.\end{aligned}$$
Two rotations of $30^\circ$ and $45^\circ$ give the same result as one rotation of $75^\circ$. So the final point is $\left(\dfrac{\sqrt6-\sqrt2}{4}, \dfrac{\sqrt6+\sqrt2}{4}\right)$.

**Check.** We have $\left(\sqrt6+\sqrt2\right)^2=8+4\sqrt3$ and $\left(\sqrt6-\sqrt2\right)^2=8-4\sqrt3$, so $\sin^275^\circ+\cos^275^\circ=\dfrac{16}{16}=1$. Correct.
:::

The formula for $\tan$ is ideal for finding viewing angles in everyday life.

:::example The viewing angle of an advertising board
A person stands $10$ m from the foot of a wall. The lower edge of an advertising board on the wall is $2$ m above the person's eyes and the upper edge is $6$ m above the eyes. Find $\tan$ of the viewing angle of the board (the angle between the two lines of sight to the edges) and the size of that angle.

**Understand.** Let $\alpha$ be the angle between the horizontal line of sight and the line of sight to the upper edge, and $\beta$ the angle between the horizontal and the line of sight to the lower edge. The viewing angle is $\alpha-\beta$.

**Plan.** We know $\tan\alpha$ and $\tan\beta$ from right-angled triangles, so we use the formula for $\tan(\alpha-\beta)$ instead of finding each angle.

**Solve.** We have $\tan\alpha=\dfrac{6}{10}=0.6$ and $\tan\beta=\dfrac{2}{10}=0.2$. Hence
$$\tan(\alpha-\beta)=\dfrac{0.6-0.2}{1+0.6\cdot0.2}=\dfrac{0.4}{1.12}=\dfrac{5}{14}\approx0.357,$$
so $\alpha-\beta\approx19.7^\circ$. So the viewing angle of the board is about $19.7^\circ$.

**Look back.** From $5$ m away we get $\tan\alpha=1.2$, $\tan\beta=0.4$ and a viewing angle of about $28.4^\circ$. From $20$ m away the angle is only about $11.0^\circ$. So standing closer gives a wider view, but standing right at the foot of the wall makes the angle small again. Where is the angle largest? At a distance $d=\sqrt{12}\approx3.46$ m we get $\tan(\alpha-\beta)=\dfrac{2}{d}=\dfrac{1}{\sqrt3}$, and the viewing angle reaches $30^\circ$.
:::

## Double-angle and power-reducing formulas

When $b=a$, the addition formulas give the trigonometric values of a doubled angle.

:::theorem Double-angle formulas
$$\sin2a=2\sin a\cos a,\qquad \cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a,$$
$$\tan2a=\dfrac{2\tan a}{1-\tan^2a}\quad(\text{when the expressions are defined}).$$
:::

The second and third forms of $\cos2a$ come from $\sin^2a+\cos^2a=1$. Solving those two forms for $\cos^2a$ and $\sin^2a$ gives the power-reducing formulas:
$$\cos^2a=\dfrac{1+\cos2a}{2},\qquad \sin^2a=\dfrac{1-\cos2a}{2}.$$
The power-reducing formulas let us find the "half angle" of a known angle, for example $\dfrac{\pi}{8}$ from $\dfrac{\pi}{4}$.

:::example The range of a football
Suppose a player kicks a ball from the ground with initial speed $v=20$ m/s at an angle $\alpha$ to the ground. Ignoring air resistance, the range (the distance from the kick to where the ball lands) is $R=\dfrac{v^2\sin2\alpha}{g}$, where $g\approx9.8$ m/s$^2$. Find the range when $\alpha=30^\circ$ (to 1 decimal place). For which angle is the range greatest?

**Solution.** For $\alpha=30^\circ$ we have $\sin2\alpha=\sin60^\circ=\dfrac{\sqrt3}{2}$, so
$$R=\dfrac{20^2\cdot\frac{\sqrt3}{2}}{9.8}=\dfrac{200\sqrt3}{9.8}\approx35.4\ \text{(m)}.$$
Since $\sin2\alpha\le1$, we have $R\le\dfrac{v^2}{g}$, with equality when $\sin2\alpha=1$, that is $2\alpha=90^\circ$ and $\alpha=45^\circ$. Then $R=\dfrac{400}{9.8}\approx40.8$ m.

So the range at $\alpha=30^\circ$ is about $35.4$ m, and the greatest range is about $40.8$ m, reached when $\alpha=45^\circ$.

**Remark.** Since $\sin(180^\circ-2\alpha)=\sin2\alpha$, the angles $\alpha$ and $90^\circ-\alpha$ give the same range. For example $30^\circ$ and $60^\circ$ both give $35.4$ m, but the $60^\circ$ kick goes higher and stays in the air longer.
:::

Next we use a power-reducing formula to find an exact value that is not in the table.

:::example Find $\cos\dfrac{\pi}{8}$
Find the exact value of $\cos\dfrac{\pi}{8}$.

**Solution.** We apply the power-reducing formula with $a=\dfrac{\pi}{8}$ and $2a=\dfrac{\pi}{4}$:
$$\cos^2\dfrac{\pi}{8}=\dfrac{1+\cos\frac{\pi}{4}}{2}=\dfrac{1+\frac{\sqrt2}{2}}{2}=\dfrac{2+\sqrt2}{4}.$$
Since $0<\dfrac{\pi}{8}<\dfrac{\pi}{2}$, we have $\cos\dfrac{\pi}{8}>0$. So $\cos\dfrac{\pi}{8}=\dfrac{\sqrt{2+\sqrt2}}{2}\approx0.924$.
:::

## Product-to-sum and sum-to-product formulas

Adding (or subtracting) the addition formulas for the same function gives very useful results. For example, adding $\cos(a-b)$ and $\cos(a+b)$, the terms $\sin a\sin b$ cancel and $2\cos a\cos b$ remains.

:::theorem Product-to-sum formulas
$$\begin{aligned}\cos a\cos b&=\dfrac12\left[\cos(a-b)+\cos(a+b)\right],\\ \sin a\sin b&=\dfrac12\left[\cos(a-b)-\cos(a+b)\right],\\ \sin a\cos b&=\dfrac12\left[\sin(a-b)+\sin(a+b)\right].\end{aligned}$$
:::

Put $u=a+b$ and $v=a-b$, that is $a=\dfrac{u+v}{2}$ and $b=\dfrac{u-v}{2}$, and read the formulas the other way round:

:::theorem Sum-to-product formulas
$$\begin{aligned}\cos u+\cos v&=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}, & \cos u-\cos v&=-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2},\\ \sin u+\sin v&=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}, & \sin u-\sin v&=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}.\end{aligned}$$
:::

:::example Product to sum
a) Write $\sin3x\cos x$ as a sum. b) Find $\sin105^\circ\cos15^\circ$.

**Solution.** a) We apply $\sin a\cos b=\dfrac12\left[\sin(a-b)+\sin(a+b)\right]$ with $a=3x$ and $b=x$:
$$\sin3x\cos x=\dfrac12\left(\sin2x+\sin4x\right).$$
b) Similarly with $a=105^\circ$ and $b=15^\circ$:
$$\sin105^\circ\cos15^\circ=\dfrac12\left(\sin90^\circ+\sin120^\circ\right)=\dfrac12\left(1+\dfrac{\sqrt3}{2}\right)=\dfrac{2+\sqrt3}{4}.$$
So $\sin105^\circ\cos15^\circ=\dfrac{2+\sqrt3}{4}$.

**Check.** Since $\sin105^\circ=\cos15^\circ$, this product equals $\cos^215^\circ=\dfrac{1+\cos30^\circ}{2}=\dfrac{2+\sqrt3}{4}$ by the power-reducing formula. Both methods agree.
:::

The sum-to-product formulas explain a familiar effect in sound.

:::example Beats
Suppose two tuning forks sound pure tones of frequencies $440$ Hz and $444$ Hz at the same time. At a point, the combined displacement is proportional to $y=\sin(2\pi\cdot440t)+\sin(2\pi\cdot444t)$ ($t$ in seconds). Write $y$ as a product and say how many times per second the sound gets louder and softer.

**Solution.** We apply $\sin u+\sin v=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$ with $u=2\pi\cdot440t$ and $v=2\pi\cdot444t$. Then $\dfrac{u+v}{2}=2\pi\cdot442t$ and $\dfrac{u-v}{2}=-2\pi\cdot2t$. Since $\cos$ is an even function,
$$y=2\cos(4\pi t)\cdot\sin(2\pi\cdot442t).$$
The factor $\sin(2\pi\cdot442t)$ oscillates $442$ times per second and sounds like a $442$ Hz tone. The factor $2\cos(4\pi t)$ changes slowly and makes the amplitude rise and fall; $|\cos(4\pi t)|$ has period $\dfrac{\pi}{4\pi}=\dfrac14$ second.

So the sound gets louder and softer $4$ times per second, which is the difference $444-440$ of the two frequencies.
:::

**Connections.** These formulas build on trigonometric values of angles and on the scalar product from grade 10. We use them straight away in the next two lessons: when sketching graphs and finding periods of trigonometric functions, and when solving trigonometric equations, where we often turn a sum into a product or reduce a power. Later they also help us find the derivatives of $\sin$ and $\cos$.

:::warning Common mistakes
- **Thinking $\cos(a+b)=\cos a+\cos b$.** Wrong: $\cos(60^\circ+60^\circ)=\cos60^\circ+\cos60^\circ=1$. Why it is wrong: $\cos120^\circ=-\dfrac12$, but $\cos60^\circ+\cos60^\circ=1$. Right: $\cos(a+b)=\cos a\cos b-\sin a\sin b=\dfrac14-\dfrac34=-\dfrac12$.
- **Wrong sign in the formulas for $\cos$.** Wrong: $\cos(a+b)=\cos a\cos b+\sin a\sin b$. Why it is wrong: for $a=b=45^\circ$ the left side is $0$ and the right side is $1$. Right: the sign in $\cos$ is opposite to the sign in the bracket, and the sign in $\sin$ is the same as the sign in the bracket.
- **Writing $\sin2a=2\sin a$.** Wrong: $\sin60^\circ=2\sin30^\circ=1$. Why it is wrong: $\sin60^\circ=\dfrac{\sqrt3}{2}\ne1$. Right: $\sin2a=2\sin a\cos a=2\cdot\dfrac12\cdot\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{2}$.
- **Dropping the minus sign for a difference of cosines.** Wrong: $\cos u-\cos v=2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$. Why it is wrong: for $u=0$ and $v=\dfrac{\pi}{2}$ the left side is $1$, but the right side is $2\cdot\dfrac{\sqrt2}{2}\cdot\left(-\dfrac{\sqrt2}{2}\right)=-1$. Right: there is a minus sign in front: $-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$.
:::

## Key terms

:::terms
- addition formulas | công thức cộng
- double-angle formulas | công thức nhân đôi
- power-reducing formulas | công thức hạ bậc
- product-to-sum formulas | công thức biến đổi tích thành tổng
- sum-to-product formulas | công thức biến đổi tổng thành tích
- trigonometric value | giá trị lượng giác
- unit circle | đường tròn đơn vị
- scalar product (dot product) | tích vô hướng
- range (of a projectile) | tầm xa
- beats | phách
:::

## Summary

- $\cos(a\mp b)=\cos a\cos b\pm\sin a\sin b$; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$; $\tan(a\pm b)=\dfrac{\tan a\pm\tan b}{1\mp\tan a\tan b}$.
- $\sin2a=2\sin a\cos a$; $\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$; $\tan2a=\dfrac{2\tan a}{1-\tan^2a}$.
- Power reduction: $\cos^2a=\dfrac{1+\cos2a}{2}$, $\sin^2a=\dfrac{1-\cos2a}{2}$.
- Product to sum: $\cos a\cos b=\dfrac12[\cos(a-b)+\cos(a+b)]$, $\sin a\sin b=\dfrac12[\cos(a-b)-\cos(a+b)]$, $\sin a\cos b=\dfrac12[\sin(a-b)+\sin(a+b)]$.
- Sum to product: $\cos u+\cos v=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$, $\sin u+\sin v=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$, and the two difference formulas carry a sign: $\cos u-\cos v=-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$, $\sin u-\sin v=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$.
- You only need to remember the addition formulas; all the others follow from them.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Find $\cos15^\circ$ and $\tan15^\circ$.

::hint
**What you need:** the addition formulas with $15^\circ=45^\circ-30^\circ$.

**Steps:**
1. Write $\cos15^\circ=\cos(45^\circ-30^\circ)$ and use the difference formula.
2. Find $\tan15^\circ=\tan(45^\circ-30^\circ)$ with $\tan45^\circ=1$ and $\tan30^\circ=\dfrac{1}{\sqrt3}$.

::solution
We have $\cos15^\circ=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ=\dfrac{\sqrt6+\sqrt2}{4}$.

We have $\tan15^\circ=\dfrac{1-\frac{1}{\sqrt3}}{1+\frac{1}{\sqrt3}}=\dfrac{\sqrt3-1}{\sqrt3+1}=\dfrac{(\sqrt3-1)^2}{2}=2-\sqrt3$.

**Answer.** $\cos15^\circ=\dfrac{\sqrt6+\sqrt2}{4}$; $\tan15^\circ=2-\sqrt3$.
:::

:::exercise
Given $\sin a=\dfrac35$ with $\dfrac{\pi}{2}<a<\pi$ and $\cos b=\dfrac{5}{13}$ with $0<b<\dfrac{\pi}{2}$, find $\sin(a+b)$ and $\cos(a+b)$.

::hint
**What you need:** $\sin^2x+\cos^2x=1$; the sign of $\cos a$ depends on the quadrant of $a$.

**Steps:**
1. Find $\cos a$ (negative) and $\sin b$ (positive).
2. Substitute into the addition formulas.

::solution
Since $a$ is in the second quadrant, $\cos a=-\sqrt{1-\frac{9}{25}}=-\dfrac45$. Since $0<b<\dfrac{\pi}{2}$, $\sin b=\sqrt{1-\frac{25}{169}}=\dfrac{12}{13}$. Hence
$$\sin(a+b)=\dfrac35\cdot\dfrac{5}{13}+\left(-\dfrac45\right)\dfrac{12}{13}=-\dfrac{33}{65},\qquad \cos(a+b)=\left(-\dfrac45\right)\dfrac{5}{13}-\dfrac35\cdot\dfrac{12}{13}=-\dfrac{56}{65}.$$

**Answer.** $\sin(a+b)=-\dfrac{33}{65}$; $\cos(a+b)=-\dfrac{56}{65}$.
:::

:::exercise
Given $\sin\alpha=\dfrac45$ with $\dfrac{\pi}{2}<\alpha<\pi$, find $\sin2\alpha$ and $\cos2\alpha$.

::hint
**What you need:** $\sin2\alpha=2\sin\alpha\cos\alpha$; $\cos2\alpha=1-2\sin^2\alpha$.

**Steps:**
1. Find $\cos\alpha$ and take care over the sign.
2. Substitute into the double-angle formulas.

::solution
Since $\dfrac{\pi}{2}<\alpha<\pi$, $\cos\alpha=-\sqrt{1-\frac{16}{25}}=-\dfrac35$. Hence $\sin2\alpha=2\cdot\dfrac45\cdot\left(-\dfrac35\right)=-\dfrac{24}{25}$ and $\cos2\alpha=1-2\cdot\dfrac{16}{25}=-\dfrac{7}{25}$.

**Answer.** $\sin2\alpha=-\dfrac{24}{25}$; $\cos2\alpha=-\dfrac{7}{25}$.
:::

:::exercise
Find a) $\sin15^\circ\cos75^\circ$; b) $\cos105^\circ+\cos15^\circ$.

::hint
**What you need:** the product-to-sum formulas for part a, the sum-to-product formulas for part b.

**Steps:**
1. Part a: use $\sin a\cos b=\dfrac12[\sin(a-b)+\sin(a+b)]$.
2. Part b: use $\cos u+\cos v=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$.

::solution
a) $\sin15^\circ\cos75^\circ=\dfrac12\left[\sin(-60^\circ)+\sin90^\circ\right]=\dfrac12\left(1-\dfrac{\sqrt3}{2}\right)=\dfrac{2-\sqrt3}{4}$.

b) $\cos105^\circ+\cos15^\circ=2\cos60^\circ\cos45^\circ=2\cdot\dfrac12\cdot\dfrac{\sqrt2}{2}=\dfrac{\sqrt2}{2}$.

**Answer.** a) $\dfrac{2-\sqrt3}{4}$; b) $\dfrac{\sqrt2}{2}$.
:::

:::exercise
Simplify $A=\dfrac{\sin3x+\sin x}{\cos3x+\cos x}$ (for values of $x$ where the expression is defined).

::hint
**What you need:** the sum-to-product formulas in both the numerator and the denominator.

**Steps:**
1. Write $\sin3x+\sin x$ and $\cos3x+\cos x$ as products.
2. Cancel the common factor.

::solution
We have $\sin3x+\sin x=2\sin2x\cos x$ and $\cos3x+\cos x=2\cos2x\cos x$. Since the expression is defined, $\cos x\ne0$, so
$$A=\dfrac{2\sin2x\cos x}{2\cos2x\cos x}=\dfrac{\sin2x}{\cos2x}=\tan2x.$$

**Answer.** $A=\tan2x$.
:::

:::exercise
A player kicks a ball with initial speed $15$ m/s and it lands $20$ m from the kick. Use the range formula $R=\dfrac{v^2\sin2\alpha}{g}$ with $g\approx9.8$ m/s$^2$ (ignoring air resistance) to find the kick angle $\alpha$ (in degrees, to 1 decimal place). How many such angles are there with $0^\circ<\alpha<90^\circ$?

::hint
**What you need:** $\sin x=\sin(180^\circ-x)$; from $\sin2\alpha$ find $2\alpha$ in the interval $(0^\circ, 180^\circ)$.

**Steps:**
1. Find $\sin2\alpha=\dfrac{Rg}{v^2}$.
2. Find the two values of $2\alpha$, then halve them.

::solution
We have $\sin2\alpha=\dfrac{20\cdot9.8}{15^2}=\dfrac{196}{225}\approx0.8711$. Since $0^\circ<2\alpha<180^\circ$, either $2\alpha\approx60.6^\circ$ or $2\alpha\approx180^\circ-60.6^\circ=119.4^\circ$, so $\alpha\approx30.3^\circ$ or $\alpha\approx59.7^\circ$.

**Answer.** There are two angles: $\alpha\approx30.3^\circ$ and $\alpha\approx59.7^\circ$ (complementary angles).
:::

:::exercise
Let $\alpha=\dfrac{\pi}{12}$. Decide whether each statement is true or false.

a) $\cos\alpha=\cos\dfrac{\pi}{3}-\cos\dfrac{\pi}{4}$.

b) $\cos\alpha=\dfrac{\sqrt6+\sqrt2}{4}$.

c) $\sin\alpha\cos\alpha=\dfrac14$.

d) $\tan\alpha=2+\sqrt3$.

::hint
**What you need:** $\dfrac{\pi}{12}=\dfrac{\pi}{3}-\dfrac{\pi}{4}$; $\sin2a=2\sin a\cos a$; $\tan15^\circ$ was found in the first exercise.

**Steps:**
1. a), b) Use the formula for $\cos(a-b)$.
2. c) Write $\sin\alpha\cos\alpha=\dfrac12\sin2\alpha$.
3. d) Compare with $\tan15^\circ$.

::solution
a) **False**: $\cos\dfrac{\pi}{12}\approx0.966$, but $\cos\dfrac{\pi}{3}-\cos\dfrac{\pi}{4}\approx-0.207$; a difference of cosines is not the cosine of a difference of angles.

b) **True**: $\cos\dfrac{\pi}{12}=\cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4}+\sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4}=\dfrac{\sqrt2}{4}+\dfrac{\sqrt6}{4}$.

c) **True**: $\sin\alpha\cos\alpha=\dfrac12\sin\dfrac{\pi}{6}=\dfrac14$.

d) **False**: $\tan\dfrac{\pi}{12}=\tan15^\circ=2-\sqrt3\approx0.268$; $2+\sqrt3$ is $\tan75^\circ$.

**Answer.** a) False; b) True; c) True; d) False.
:::

:::exercise
A person stands $8$ m from a wall. The lower edge of a banner hanging on the wall is $1$ m above the person's eyes and the upper edge is $7$ m above the eyes. Find the viewing angle of the banner (in degrees, to 1 decimal place).

::hint
**What you need:** the viewing angle is the difference $\alpha-\beta$ of two angles; use the formula for $\tan(\alpha-\beta)$.

**Steps:**
1. Find $\tan\alpha$ and $\tan\beta$ from right-angled triangles.
2. Find $\tan(\alpha-\beta)$, then the angle.

::solution
We have $\tan\alpha=\dfrac78$ and $\tan\beta=\dfrac18$. Hence
$$\tan(\alpha-\beta)=\dfrac{\frac78-\frac18}{1+\frac78\cdot\frac18}=\dfrac{\frac34}{\frac{71}{64}}=\dfrac{48}{71}\approx0.676,$$
so $\alpha-\beta\approx34.1^\circ$.

**Answer.** About $34.1^\circ$.
:::

:::exercise Revision
In triangle $ABC$, $\angle A=45^\circ$, $\angle B=60^\circ$ and $BC=a$. Find $\sin C$ and the length of $AB$ in terms of $a$.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$; the sine rule $\dfrac{AB}{\sin C}=\dfrac{BC}{\sin A}$.

**Steps:**
1. Find $\angle C$, then use the addition formula to find $\sin C$.
2. Apply the sine rule to find $AB$.

::solution
We have $\angle C=180^\circ-45^\circ-60^\circ=75^\circ$, so $\sin C=\sin75^\circ=\dfrac{\sqrt6+\sqrt2}{4}$ (the first example). By the sine rule:
$$AB=\dfrac{BC\sin C}{\sin A}=\dfrac{a\cdot\frac{\sqrt6+\sqrt2}{4}}{\frac{\sqrt2}{2}}=\dfrac{a(\sqrt6+\sqrt2)}{2\sqrt2}=\dfrac{a(\sqrt3+1)}{2}.$$

**Answer.** $\sin C=\dfrac{\sqrt6+\sqrt2}{4}$; $AB=\dfrac{(\sqrt3+1)a}{2}$.
:::

:::exercise Challenge
Prove that $\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{3\pi}{7}=\dfrac18$.

::hint
**What you need:** $\sin2a=2\sin a\cos a$, so $\cos a=\dfrac{\sin2a}{2\sin a}$; $\cos(\pi-x)=-\cos x$.

**Steps:**
1. Write $\cos\dfrac{3\pi}{7}=-\cos\dfrac{4\pi}{7}$ so that the angles are $\dfrac{\pi}{7}$, $\dfrac{2\pi}{7}$, $\dfrac{4\pi}{7}$ (each double the last).
2. Multiply and divide by $\sin\dfrac{\pi}{7}$ and use the double-angle formula three times.

::solution
Let $P$ be the product. Since $\cos\dfrac{3\pi}{7}=-\cos\dfrac{4\pi}{7}$, we have $P=-\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{4\pi}{7}$. Multiply both sides by $8\sin\dfrac{\pi}{7}$ and use $2\sin x\cos x=\sin2x$ three times:
$$8\sin\dfrac{\pi}{7}\,P=-\sin\dfrac{8\pi}{7}=\sin\dfrac{\pi}{7}\quad\left(\text{because }\sin\dfrac{8\pi}{7}=-\sin\dfrac{\pi}{7}\right).$$
Since $\sin\dfrac{\pi}{7}\ne0$, we get $P=\dfrac18$.

**Answer.** $\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{3\pi}{7}=\dfrac18$.
:::

## Mini test

:::quiz
::mc TH
The value of $\sin20^\circ\cos25^\circ+\cos20^\circ\sin25^\circ$ is
A. $\dfrac12$.
B. $\dfrac{\sqrt2}{2}$.
C. $\dfrac{\sqrt3}{2}$.
D. $\sin5^\circ$.
::key B
This is $\sin(20^\circ+25^\circ)=\sin45^\circ=\dfrac{\sqrt2}{2}$. Option D is $\sin(25^\circ-20^\circ)$, which uses the difference formula by mistake.

::mc NB
Given $\cos x=-\dfrac13$, the value of $\cos2x$ is
A. $-\dfrac23$.
B. $\dfrac79$.
C. $-\dfrac79$.
D. $\dfrac29$.
::key C
$\cos2x=2\cos^2x-1=\dfrac29-1=-\dfrac79$. Option A is $2\cos x$, and option D forgets to subtract $1$.

::mc TH
Given $\tan a=2$ and $\tan b=-3$, the value of $\tan(a-b)$ is
A. $1$.
B. $\dfrac57$.
C. $-\dfrac17$.
D. $-1$.
::key D
$\tan(a-b)=\dfrac{2-(-3)}{1+2\cdot(-3)}=\dfrac{5}{-5}=-1$. Option B uses $1-\tan a\tan b$ in the denominator, and option C uses the formula for $\tan(a+b)$.

::mc NB
For all $x$, the expression $\sin7x-\sin x$ equals
A. $2\cos4x\sin3x$.
B. $-2\cos4x\sin3x$.
C. $2\sin4x\cos3x$.
D. $2\sin3x\sin4x$.
::key A
$\sin u-\sin v=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}=2\cos4x\sin3x$. Option C is the formula for $\sin u+\sin v$, and option B has an extra minus sign.

::tf NB TH TH TH
A player kicks a ball with initial speed $14$ m/s at an angle $\alpha=30^\circ$ to the ground. Ignoring air resistance, the range is $R=\dfrac{v^2\sin2\alpha}{g}$ with $g=9.8$ m/s$^2$. Decide whether each statement is true or false.
a) $\sin2\alpha=2\sin\alpha=1$.
b) The range of the ball is $10\sqrt3$ m.
c) If the ball is kicked at $60^\circ$ with the same speed, the range is still $10\sqrt3$ m.
d) For a given initial speed, the range is greatest when $\alpha=45^\circ$.
::key F T T T
a) False: $\sin2\alpha=\sin60^\circ=\dfrac{\sqrt3}{2}$, not $2\sin\alpha$. b) True: $R=\dfrac{196\cdot\frac{\sqrt3}{2}}{9.8}=10\sqrt3$. c) True: $\sin120^\circ=\sin60^\circ$. d) True: $\sin2\alpha=1$ when $\alpha=45^\circ$.

::sa TH
Find the value of $2\cos^222.5^\circ-1$ (give your answer to 2 decimal places).
::key 0.71
$2\cos^222.5^\circ-1=\cos45^\circ=\dfrac{\sqrt2}{2}\approx0.71$.

::sa VDC
Two tuning forks sound pure tones of frequencies $440$ Hz and $448$ Hz at the same time. How many times per second does the sound get louder and softer?
::key 8
$\sin(2\pi\cdot440t)+\sin(2\pi\cdot448t)=2\cos(8\pi t)\sin(2\pi\cdot444t)$, and $|\cos(8\pi t)|$ has period $\dfrac18$ second. So the answer is $8$ times per second, the difference $448-440$.
:::
