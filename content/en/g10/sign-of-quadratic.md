---
title: The sign of a quadratic trinomial
description: Use the discriminant and the roots to find where ax²+bx+c is positive or negative, and solve quadratic inequalities, including with a parameter.
minutes: 20
---

:::goals
- Determine the sign of $f(x)=ax^2+bx+c$ from $a$ and $\Delta$.
- Solve quadratic inequalities with a sign table or the parabola.
- Solve simple quotient inequalities and word problems.
- Find the values of a parameter for which a quadratic keeps one sign for all $x$.
:::

A ball is thrown upward. For which seconds is it more than $15$ m above the ground? "More than" is an inequality, and the height is a quadratic in time. To answer, we need to know where a quadratic is **positive** and where it is **negative**. The parabola tells the whole story.

## The sign theorem

:::definition Quadratic trinomial
A **quadratic trinomial** is $f(x)=ax^2+bx+c$ with $a\neq 0$. Its discriminant is $\Delta=b^2-4ac$.
:::

:::theorem Sign of $f(x)=ax^2+bx+c$
- If $\Delta<0$: $f(x)$ has the **same sign as $a$** for every $x$.
- If $\Delta=0$: $f(x)$ has the same sign as $a$ for every $x\neq-\frac{b}{2a}$, and $f\left(-\frac{b}{2a}\right)=0$.
- If $\Delta>0$ with roots $x_1<x_2$: $f(x)$ has the same sign as $a$ **outside** $[x_1, x_2]$ and the opposite sign **between** the roots.
:::

Picture it: for $a>0$ the parabola opens upward, so it lies above the $x$-axis wherever it does not dip below it. The sign changes only at roots.

:::graph The parabola $y=x^2-5x+6$
alt: An upward parabola crossing the x-axis at x equal 2 and x equal 3, below the axis between the roots
x: -1..6
y: -2..8
plot: x^2 - 5x + 6
point: (2, 0) "2" below
point: (3, 0) "3" below
:::

## Solving quadratic inequalities

Method: (1) move everything to one side; (2) find $\Delta$ and the roots; (3) use the theorem; (4) read off the answer.

:::example Two roots, $a>0$
Solve $x^2-5x+6<0$.

**Solution.** $\Delta=25-24=1>0$, roots $x_1=2$ and $x_2=3$. Here $a=1>0$, so $f<0$ between the roots. The solution set is $S=(2, 3)$.
:::

:::example Two roots, $a<0$
Solve $-x^2+4x-3\ge 0$.

**Solution.** Roots of $-x^2+4x-3=0$: $x=1$ and $x=3$. Since $a=-1<0$, $f$ has the sign of $a$ (negative) outside the roots and is **positive between** them. So $f\ge 0$ on $[1, 3]$, and $S=[1, 3]$.
:::

:::example No roots
Solve $x^2+x+1>0$ and $2x^2-3x+5<0$.

**Solution.**
- $x^2+x+1$: $\Delta=1-4=-3<0$ and $a=1>0$, so it is always positive. $S=\mathbb{R}$.
- $2x^2-3x+5$: $\Delta=9-40=-31<0$ and $a=2>0$, so it is always positive and is never $<0$. $S=\varnothing$.
:::

:::example A double root
Solve $x^2-6x+9\le 0$ and $x^2-6x+9>0$.

**Solution.** $x^2-6x+9=(x-3)^2$, $\Delta=0$. It is $\ge 0$ always and $=0$ only at $x=3$.
- $(x-3)^2\le 0$ holds only for $x=3$: $S=\{3\}$.
- $(x-3)^2>0$ holds for all $x\neq 3$: $S=\mathbb{R}\setminus\{3\}$.
:::

## A quotient inequality

:::example Sign table for a fraction
Solve $\dfrac{x-1}{x+2}\le 0$.

**Solution.** The numerator vanishes at $x=1$ and the denominator at $x=-2$ (which is excluded). Test the three regions:
- $x<-2$: numerator $<0$, denominator $<0$, quotient $>0$.
- $-2<x<1$: numerator $<0$, denominator $>0$, quotient $<0$. ✓
- $x>1$: both positive, quotient $>0$.

At $x=1$ the quotient is $0$, which is allowed by "$\le$". So $S=(-2, 1]$.
:::

## Inequalities with a parameter

:::example A quadratic that never goes negative
For which $m$ is $x^2-2mx+m+2\ge 0$ for every real $x$?

**Solution.** Since $a=1>0$, we need $\Delta'\le 0$ with $\Delta'=m^2-(m+2)=m^2-m-2$ (half-coefficient version). $m^2-m-2=(m-2)(m+1)\le 0$ gives $-1\le m\le 2$. So $m\in[-1, 2]$.
:::

## A word problem

:::example When is the ball high enough?
The height of a ball (in metres) after $t$ seconds is $h=-5t^2+20t$. When is $h>15$?

**Solution.** $-5t^2+20t>15$ becomes $-5t^2+20t-15>0$, i.e. $t^2-4t+3<0$. The roots are $t=1$ and $t=3$, and the parabola is negative between them. So the ball is above $15$ m for $1<t<3$: two seconds.
:::

:::graph Height of the ball
alt: A downward parabola of the height of a ball with a dashed horizontal line at 15 and the points at t equal 1 and t equal 3
x: 0..4
y: -2..22
plot: -5x^2 + 20x
hline: 15 ; dashed
point: (1, 15) "1" below-right
point: (3, 15) "3" below-left
:::

:::warning Common mistakes
- Not moving everything to one side before using the theorem.
- Forgetting that for $a<0$ the picture is flipped: positive **between** the roots.
- Writing $S=\varnothing$ or $S=\mathbb{R}$ without checking $\Delta$ and the sign of $a$.
- Using a closed bracket at a root for a strict inequality (or an open one for $\le$, $\ge$), and including a value that makes the denominator $0$.
:::

## Key terms

:::terms
- quadratic trinomial | tam thức bậc hai
- discriminant | biệt thức
- root | nghiệm
- sign table | bảng xét dấu
- quadratic inequality | bất phương trình bậc hai
- solution set | tập nghiệm
- parameter | tham số
- double root | nghiệm kép
:::

## Summary

- Sign of $f(x)=ax^2+bx+c$: $\Delta<0$ gives the sign of $a$ everywhere; $\Delta=0$ gives the sign of $a$ except at the root; $\Delta>0$ gives the sign of $a$ outside the roots and the opposite sign between them.
- Solve an inequality by: one side zero, $\Delta$ and roots, then the theorem.
- For $a>0$: $f\ge 0$ for all $x$ $\iff\Delta\le 0$. For $a<0$: $f\le 0$ for all $x$ $\iff\Delta\le 0$.

## Practice

:::practice
1. Solve $x^2-4x+3>0$.
2. Solve $x^2-9\le 0$.
3. Solve $-x^2+2x+8>0$.
4. Solve $2x^2-x-3\ge 0$.
5. Solve $x^2+4x+5>0$.
6. Solve $x^2-4x+4\le 0$.
7. For which $m$ is $x^2+mx+4>0$ for every real $x$?
8. Solve $\dfrac{x+1}{x-3}<0$.
9. Challenge. For which $m$ is $mx^2-4x+m-3<0$ for every real $x$?
10. Challenge. Find the domain of $\sqrt{x^2-3x-4}$.
:::

:::solution Show solutions
1. Roots $1$ and $3$, $a>0$: positive outside. $S=(-\infty, 1)\cup(3, +\infty)$.
2. $x^2-9=(x-3)(x+3)$, roots $\pm3$, $a>0$: $\le 0$ between (including the roots). $S=[-3, 3]$.
3. $-x^2+2x+8=-(x-4)(x+2)$, roots $-2$ and $4$, $a<0$: positive between. $S=(-2, 4)$.
4. $2x^2-x-3=(2x-3)(x+1)$, roots $-1$ and $\frac32$, $a>0$: $\ge 0$ outside, with the roots. $S=(-\infty, -1]\cup\left[\frac32, +\infty\right)$.
5. $\Delta=16-20=-4<0$, $a>0$: always positive. $S=\mathbb{R}$.
6. $(x-2)^2\le 0$ only at $x=2$. $S=\{2\}$.
7. $a=1>0$, need $\Delta=m^2-16<0$, so $-4<m<4$.
8. Critical values $-1$ (numerator) and $3$ (excluded). Test: $x<-1$: $(-)/(-)>0$; $-1<x<3$: $(+)/(-)<0$ ✓; $x>3$: $(+)/(+)>0$. $S=(-1, 3)$.
9. Need $a=m<0$ and $\Delta'=4-m(m-3)<0$, i.e. $m^2-3m-4>0$, i.e. $(m-4)(m+1)>0$, so $m<-1$ or $m>4$. With $m<0$: $m<-1$. $m\in(-\infty, -1)$.
10. Need $x^2-3x-4\ge 0$: $(x-4)(x+1)\ge 0$, so $x\le -1$ or $x\ge 4$. Domain $(-\infty, -1]\cup[4, +\infty)$.
:::
