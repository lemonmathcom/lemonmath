---
title: Equations reducible to quadratics
description: Solve equations with square roots by squaring both sides, then check the solutions to remove extraneous roots, and apply the method to a ladder problem.
minutes: 16
---

:::goals
- Solve $\sqrt{f(x)}=\sqrt{g(x)}$ by squaring and checking.
- Solve $\sqrt{f(x)}=g(x)$ and explain why $g(x)\ge 0$ is required.
- Recognise extraneous solutions and discard them.
- Set up and solve a word problem that leads to a root equation.
:::

A ladder leans against a wall. How far from the wall must its foot be so that it reaches a given height? Pythagoras puts a square root in the equation. To get rid of the root we **square** both sides, but squaring can create fake solutions. This lesson shows how to square safely.

## Why squaring needs a check

If $A=B$ then $A^2=B^2$. The reverse is false: $A^2=B^2$ only says $A=B$ or $A=-B$. For instance $x=-3$ is not a solution of $x=3$, yet squaring gives $x^2=9$, which accepts it. So after squaring we must either keep the right conditions or **check every candidate** in the original equation.

## The equation $\sqrt{f(x)}=\sqrt{g(x)}$

Square both sides to get $f(x)=g(x)$. Then keep only the solutions for which $f(x)\ge 0$ (then $g(x)=f(x)\ge 0$ too).

:::example Two roots under the root sign
Solve $\sqrt{2x-3}=\sqrt{x+1}$.

**Solution.** Squaring: $2x-3=x+1$, so $x=4$. Check: $2\cdot 4-3=5\ge 0$ and $4+1=5$. ✓ $S=\{4\}$.
:::

:::example Two solutions
Solve $\sqrt{x^2-x-2}=\sqrt{x+1}$.

**Solution.** Squaring: $x^2-x-2=x+1$, so $x^2-2x-3=0$, giving $x=3$ or $x=-1$. Check with $x+1\ge 0$:
- $x=3$: $x+1=4\ge 0$ ✓.
- $x=-1$: $x+1=0\ge 0$ ✓ (both sides are $\sqrt0=0$).

$S=\{-1, 3\}$.
:::

## The equation $\sqrt{f(x)}=g(x)$

A square root is never negative, so a solution needs $g(x)\ge 0$. Then squaring is safe:
$$\sqrt{f(x)}=g(x)\iff\begin{cases}g(x)\ge 0\\ f(x)=g(x)^2.\end{cases}$$

:::example One of the roots is rejected
Solve $\sqrt{x+6}=x$.

**Solution.** We need $x\ge 0$. Squaring: $x+6=x^2$, so $x^2-x-6=0$ and $x=3$ or $x=-2$. Only $x=3$ satisfies $x\ge 0$. Check: $\sqrt9=3$ ✓. $S=\{3\}$.
:::

:::example The condition keeps the right root
Solve $\sqrt{2x+1}=x-1$.

**Solution.** We need $x-1\ge 0$. Squaring: $2x+1=x^2-2x+1$, so $x^2-4x=0$ and $x=0$ or $x=4$. Only $x=4$ satisfies $x\ge 1$. Check: $\sqrt9=3=4-1$ ✓. $S=\{4\}$.
:::

:::example No solution
Solve $\sqrt{x-1}=x+1$.

**Solution.** We need $x+1\ge 0$. Squaring: $x-1=x^2+2x+1$, so $x^2+x+2=0$. Here $\Delta=1-8<0$: no real roots. $S=\varnothing$.
:::

## A ladder problem

:::diagram The ladder
alt: A right triangle with the wall on the vertical side, the ground on the horizontal side and the ladder of length 10 metres as the hypotenuse
point O 0,0 below-left "O"
point F 6,0 below "foot"
point T 0,8 left "top"
polygon O F T
right F O T
label 3.4,4.6 "10 m"
label 3,-0.8 "d"
label -0.6,4 "h"
:::

:::example The ladder
A $10$ m ladder leans against a wall. The top of the ladder is $2$ m higher than the distance $d$ of its foot from the wall. Find $d$.

**Solution.** The height is $h=d+2$ and Pythagoras gives $h=\sqrt{100-d^2}$. So $\sqrt{100-d^2}=d+2$ with $d+2\ge 0$. Squaring: $100-d^2=d^2+4d+4$, so $2d^2+4d-96=0$, i.e. $d^2+2d-48=0$, and $d=6$ or $d=-8$. A distance is positive, so $d=6$ m and $h=8$ m. Check: $\sqrt{100-36}=8=6+2$ ✓.
:::

:::warning Common mistakes
- Squaring without checking and keeping an extraneous root.
- Squaring $(x-1)$ wrongly: $(x-1)^2=x^2-2x+1$, not $x^2-1$.
- Forgetting that the left side $\sqrt{\ }$ is $\ge 0$, so the right side must be too.
- Squaring when two roots are added; that needs more care and is not part of this lesson.
:::

## Key terms

:::terms
- square root | căn bậc hai
- equation containing roots | phương trình chứa căn
- squaring both sides | bình phương hai vế
- extraneous solution | nghiệm ngoại lai
- condition | điều kiện
- check | thử lại
- Pythagorean theorem | định lí Pythagore
- ladder | cái thang
:::

## Summary

- $\sqrt{f}=\sqrt{g}\iff f=g$ and $f\ge 0$.
- $\sqrt{f}=g\iff g\ge 0$ and $f=g^2$.
- Always check the candidates; squaring can add fake solutions.
- Real problems: translate to an equation, solve, then keep only meaningful answers.

## Practice

:::practice
1. Solve $\sqrt{x+5}=\sqrt{3x-1}$.
2. Solve $\sqrt{x^2-4}=\sqrt{3x}$.
3. Solve $\sqrt{x-2}=3$.
4. Solve $\sqrt{x+2}=x$.
5. Solve $\sqrt{2x+3}=x$.
6. Solve $\sqrt{x+3}=x-3$.
7. Solve $\sqrt{2-x}=x+4$.
8. Solve $\sqrt{x^2-2x}=\sqrt{x+4}$.
9. Challenge. Solve $\sqrt{2x^2-3x-5}=x-1$.
10. Challenge. A $13$ m ladder leans against a wall. Its top is $7$ m higher than the distance $d$ of its foot from the wall. Find $d$ and the height.
:::

:::solution Show solutions
1. $x+5=3x-1$ gives $x=3$. Check: $\sqrt8=\sqrt8$ ✓. $S=\{3\}$.
2. $x^2-4=3x$, so $x^2-3x-4=0$ and $x=4$ or $x=-1$. We need $3x\ge 0$: only $x=4$. Check: $\sqrt{12}=\sqrt{12}$ ✓. $S=\{4\}$.
3. $x-2=9$, so $x=11$. Check: $\sqrt9=3$ ✓.
4. Need $x\ge 0$. $x+2=x^2$, so $x^2-x-2=0$, $x=2$ or $x=-1$. Only $x=2$. Check: $\sqrt4=2$ ✓.
5. Need $x\ge 0$. $2x+3=x^2$, so $x^2-2x-3=0$, $x=3$ or $x=-1$. Only $x=3$. Check: $\sqrt9=3$ ✓.
6. Need $x\ge 3$. $x+3=x^2-6x+9$, so $x^2-7x+6=0$, $x=1$ or $x=6$. Only $x=6$. Check: $\sqrt9=3=6-3$ ✓.
7. Need $x\ge -4$. $2-x=x^2+8x+16$, so $x^2+9x+14=0$, $x=-2$ or $x=-7$. Only $x=-2$. Check: $\sqrt4=2=-2+4$ ✓.
8. $x^2-2x=x+4$, so $x^2-3x-4=0$ and $x=4$ or $x=-1$. Check: for $x=4$ both sides are $\sqrt8$ ✓; for $x=-1$ both sides are $\sqrt3$ ✓. $S=\{-1, 4\}$.
9. Need $x\ge 1$. $2x^2-3x-5=x^2-2x+1$, so $x^2-x-6=0$, $x=3$ or $x=-2$. Only $x=3$. Check: $\sqrt{18-9-5}=\sqrt4=2=3-1$ ✓.
10. $\sqrt{169-d^2}=d+7$. Squaring: $169-d^2=d^2+14d+49$, so $d^2+7d-60=0$ and $d=5$ or $d=-12$. So $d=5$ m and the height is $12$ m. Check: $\sqrt{169-25}=12=5+7$ ✓.
:::
