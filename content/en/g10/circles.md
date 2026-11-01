---
title: Circles in the coordinate plane
description: Write the equation of a circle from its centre and radius, recognise a circle from an expanded equation, and find tangent lines.
minutes: 16
---

:::goals
- Write the equation of a circle from its centre and radius, and the other way round.
- Decide whether $x^2+y^2-2ax-2by+c=0$ is a circle.
- Find a circle from a diameter or from three points.
- Find the tangent line at a point and use the distance condition for tangency.
:::

A circle is every point at the same distance from a centre. If you know the distance formula, you already know the equation of a circle: it is the distance formula, written as a rule. This lesson turns the picture "all points $R$ away from $I$" into algebra.

## Equation of a circle

:::definition Equation of a circle
The circle with centre $I(a, b)$ and radius $R>0$ is the set of points $M(x, y)$ with $IM=R$:
$$(x-a)^2+(y-b)^2=R^2.$$
:::

Expanding gives the **general form** $x^2+y^2-2ax-2by+c=0$ with $c=a^2+b^2-R^2$. Conversely, an equation of this form is a circle exactly when $R^2=a^2+b^2-c>0$; then the centre is $(a, b)$ and the radius is $R=\sqrt{a^2+b^2-c}$.

:::example Centre and radius to equation
Write the equation of the circle with centre $I(1, -2)$ and radius $3$.

**Solution.** $(x-1)^2+(y+2)^2=9$. Expanding: $x^2+y^2-2x+4y+1+4-9=0$, i.e. $x^2+y^2-2x+4y-4=0$.
:::

:::example Equation to centre and radius
Is $x^2+y^2-6x+4y-12=0$ a circle? And $x^2+y^2+2x+2y+5=0$?

**Solution.**
- First: $-2a=-6$ gives $a=3$ and $-2b=4$ gives $b=-2$, $c=-12$. $R^2=9+4+12=25>0$: a circle with centre $(3, -2)$ and radius $5$.
- Second: $a=-1$, $b=-1$, $c=5$. $R^2=1+1-5=-3<0$: not a circle (no points satisfy it).
:::

## Finding a circle

:::example Circle with a given diameter
Find the circle with diameter $AB$, $A(1, 2)$ and $B(5, 6)$.

**Solution.** The centre is the midpoint $I(3, 4)$. The diameter is $AB=\sqrt{16+16}=4\sqrt2$, so $R=2\sqrt2$ and $R^2=8$. The circle: $(x-3)^2+(y-4)^2=8$.
:::

:::example Circle through three points
Find the circle through $O(0, 0)$, $A(4, 0)$ and $B(0, 2)$.

**Solution.** Use $x^2+y^2-2ax-2by+c=0$.
- $O$: $c=0$.
- $A$: $16-8a=0$, so $a=2$.
- $B$: $4-4b=0$, so $b=1$.

Circle: $(x-2)^2+(y-1)^2=5$ (indeed $R^2=4+1-0=5$).
:::

## Tangent lines

A line is **tangent** to a circle when it touches it at exactly one point, and then it is perpendicular to the radius at that point. So the tangent at $M_0$ has normal vector $\overrightarrow{IM_0}$.

:::graph Tangent to a circle at $M$
alt: A circle with centre I(1, 1) and a straight line touching it at the point M(4, 5)
x: -5..8
y: -5..8
plot: 1 + sqrt(25 - (x-1)^2) ; -4..6
plot: 1 - sqrt(25 - (x-1)^2) ; -4..6
plot: (32 - 3x)/4 ; 0..8
point: (1, 1) "I" below-left
point: (4, 5) "M" above-right
:::

:::example The tangent at a point
Find the tangent to $(x-1)^2+(y-1)^2=25$ at $M(4, 5)$.

**Solution.** Check: $3^2+4^2=25$ ✓, so $M$ is on the circle. $\overrightarrow{IM}=(3, 4)$ is a normal vector, so $3(x-4)+4(y-5)=0$, i.e. $3x+4y-32=0$.
:::

A line is tangent to the circle $(I, R)$ exactly when its distance to the centre equals $R$: $d(I, \Delta)=R$. If $d<R$ it cuts the circle in two points; if $d>R$ it misses it.

:::example Tangency by distance
For which $m$ is $3x-4y+m=0$ tangent to $(x-2)^2+(y+1)^2=4$?

**Solution.** $I(2, -1)$, $R=2$: $\dfrac{|6+4+m|}{5}=2$, so $|m+10|=10$, giving $m=0$ or $m=-20$.
:::

:::example Position of a point
Where is $P(5, 1)$ relative to $(x-1)^2+(y-2)^2=25$?

**Solution.** $IP^2=16+1=17<25$, so $P$ is inside the circle. (If $IP^2=R^2$ the point is on the circle; if greater, outside.)
:::

:::warning Common mistakes
- Sign errors: the centre of $(x+2)^2+(y-3)^2=16$ is $(-2, 3)$, not $(2, -3)$.
- Writing $R$ instead of $R^2$ on the right-hand side.
- Forgetting to check $R^2>0$ for the expanded form.
- Using the wrong normal vector for the tangent: it is $\overrightarrow{IM_0}$ (the radius itself), not a vector perpendicular to the radius.
:::

## Key terms

:::terms
- circle | đường tròn
- centre | tâm
- radius | bán kính
- diameter | đường kính
- tangent line | tiếp tuyến
- point of tangency | tiếp điểm
- general equation of a circle | phương trình tổng quát của đường tròn
- inside / outside | nằm trong / nằm ngoài
:::

## Summary

- Circle $(I(a, b), R)$: $(x-a)^2+(y-b)^2=R^2$.
- General form $x^2+y^2-2ax-2by+c=0$ is a circle iff $R^2=a^2+b^2-c>0$.
- Tangent at $M_0$: normal vector $\overrightarrow{IM_0}$. A line is tangent iff $d(I, \Delta)=R$.
- A point is inside, on or outside the circle according to $IP^2<R^2$, $=R^2$, $>R^2$.

## Practice

:::practice
1. Write the circle with centre $(-2, 3)$ and radius $4$.
2. Find the centre and radius of $x^2+y^2-4x+6y-3=0$.
3. Is $x^2+y^2-2x+4y+6=0$ a circle?
4. Write the circle with centre $I(2, -1)$ through $A(5, 3)$.
5. Write the circle with diameter $AB$, $A(-1, 3)$ and $B(3, -1)$.
6. Find the circle through $O(0, 0)$, $A(6, 0)$ and $B(0, 8)$.
7. Find the tangent to $x^2+y^2=25$ at $M(3, 4)$.
8. For which $m$ is $3x+4y+m=0$ tangent to $x^2+y^2=9$?
9. Challenge. Find the common points of $x^2+y^2-4x=0$ and the line $x+y-4=0$.
10. Challenge. Find the tangent lines to $x^2+y^2=4$ through $P(4, 0)$.
:::

:::solution Show solutions
1. $(x+2)^2+(y-3)^2=16$.
2. $a=2$, $b=-3$, $c=-3$. $R^2=4+9+3=16$, so the centre is $(2, -3)$ and $R=4$.
3. $a=1$, $b=-2$, $c=6$: $R^2=1+4-6=-1<0$. Not a circle.
4. $R^2=IA^2=9+16=25$. $(x-2)^2+(y+1)^2=25$.
5. The centre is $(1, 1)$ and $AB^2=16+16=32$, so $R^2=\frac{32}{4}=8$. $(x-1)^2+(y-1)^2=8$.
6. $c=0$; $A$: $36-12a=0$, so $a=3$; $B$: $64-16b=0$, so $b=4$. $R^2=9+16=25$. $(x-3)^2+(y-4)^2=25$.
7. $\overrightarrow{OM}=(3, 4)$: $3(x-3)+4(y-4)=0$, so $3x+4y-25=0$.
8. $\frac{|m|}{5}=3$, so $m=\pm15$.
9. Substitute $y=4-x$: $x^2+(4-x)^2-4x=0$, so $2x^2-12x+16=0$, $x^2-6x+8=0$, $x=2$ or $x=4$. Points $(2, 2)$ and $(4, 0)$.
10. A line through $P$: $kx-y-4k=0$. Tangency: $\frac{|4k|}{\sqrt{k^2+1}}=2$, so $16k^2=4k^2+4$, $k^2=\frac13$, $k=\pm\frac1{\sqrt3}$. The lines are $x-\sqrt3\,y-4=0$ and $x+\sqrt3\,y-4=0$.
:::
