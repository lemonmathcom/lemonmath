---
title: The three conic sections
description: Meet the ellipse, hyperbola and parabola as sets of points, learn their standard equations, foci and asymptotes, and find the equation from given data.
minutes: 20
---

:::goals
- Describe the ellipse, the hyperbola and the parabola by the distances that define them.
- Read $a$, $b$, $c$, the foci and the vertices from a standard equation.
- Find the equation of a conic from given data.
- Recognise conics in the real world.
:::

Planets circle the Sun along ellipses. A satellite dish collects signals at a single point because its cross-section is a parabola. A power-station cooling tower has the shape of a hyperbola turned around. These three curves, together with the circle, are the **conic sections**, and each has a short definition in terms of distances to special points.

## The ellipse

:::definition Ellipse
Given two points $F_1, F_2$ (the **foci**) and a number $2a>F_1F_2$, the **ellipse** is the set of points $M$ with
$$MF_1+MF_2=2a.$$
:::

With $F_1(-c, 0)$, $F_2(c, 0)$ and $b^2=a^2-c^2$ the equation is
$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\qquad(a>b>0).$$
The vertices are $(\pm a, 0)$ and $(0, \pm b)$; $2a$ is the length of the major axis, $2b$ of the minor axis.

:::graph The ellipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$
alt: An ellipse longer in the x direction with foci at (-4, 0) and (4, 0) and vertices at (plus or minus 5, 0) and (0, plus or minus 3)
x: -7..7
y: -5..5
plot: 3*sqrt(1 - x^2/25)
plot: -3*sqrt(1 - x^2/25)
point: (-4, 0) "F_1" above
point: (4, 0) "F_2" above
point: (5, 0) "A_2" above-right
point: (-5, 0) "A_1" above-left
point: (0, 3) "B_2" above-right
point: (0, -3) "B_1" below-right
:::

:::example Ellipse from the foci
Find the ellipse with foci $(\pm3, 0)$ and $MF_1+MF_2=10$.

**Solution.** $2a=10$ so $a=5$; $c=3$ so $b^2=25-9=16$. The equation: $\frac{x^2}{25}+\frac{y^2}{16}=1$.
:::

:::example Ellipse from axes
An ellipse has major axis $12$ and minor axis $8$. Write its equation and find its foci.

**Solution.** $a=6$, $b=4$: $\frac{x^2}{36}+\frac{y^2}{16}=1$. $c^2=36-16=20$, so $c=2\sqrt5$ and the foci are $(\pm2\sqrt5, 0)$.
:::

## The hyperbola

:::definition Hyperbola
Given two foci $F_1, F_2$ and a number $2a<F_1F_2$, the **hyperbola** is the set of points $M$ with
$$|MF_1-MF_2|=2a.$$
:::

With foci $(\pm c, 0)$ and $b^2=c^2-a^2$:
$$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.$$
The vertices are $(\pm a, 0)$ and the curve approaches the **asymptotes** $y=\pm\frac{b}{a}x$.

:::graph The hyperbola $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$
alt: A hyperbola with two branches opening left and right, vertices at (plus or minus 4, 0), foci at (plus or minus 5, 0) and dashed asymptotes
x: -9..9
y: -7..7
plot: 3*sqrt(x^2/16 - 1) ; 4..8.5
plot: -3*sqrt(x^2/16 - 1) ; 4..8.5
plot: 3*sqrt(x^2/16 - 1) ; -8.5..-4
plot: -3*sqrt(x^2/16 - 1) ; -8.5..-4
plot: 3/4*x ; dashed
plot: -3/4*x ; dashed
point: (-5, 0) "F_1" above
point: (5, 0) "F_2" above
point: (4, 0) "A_2" below-left
point: (-4, 0) "A_1" below-right
:::

:::example Hyperbola from foci and vertices
Find the hyperbola with foci $(\pm5, 0)$ and vertices $(\pm3, 0)$, and its asymptotes.

**Solution.** $c=5$, $a=3$, so $b^2=25-9=16$. The equation: $\frac{x^2}{9}-\frac{y^2}{16}=1$. Asymptotes: $y=\pm\frac43x$.
:::

## The parabola

:::definition Parabola
Given a point $F$ (the **focus**) and a line $\Delta$ not through $F$ (the **directrix**), the **parabola** is the set of points equally distant from $F$ and from $\Delta$.
:::

With $F\left(\frac p2, 0\right)$ and $\Delta: x=-\frac p2$ ($p>0$) the equation is
$$y^2=2px.$$

:::graph The parabola $y^2=4x$
alt: A parabola opening to the right with vertex at the origin, focus at (1, 0) and a dashed vertical directrix at x equal minus 1
x: -2..7
y: -5..5
plot: 2*sqrt(x) ; 0..6.25
plot: -2*sqrt(x) ; 0..6.25
vline: -1 ; dashed
point: (1, 0) "F" below-right
point: (0, 0) "O" above-left
:::

:::example Parabola from the focus
Find the parabola with focus $F(3, 0)$ and vertex at the origin, and its directrix.

**Solution.** $\frac p2=3$, so $p=6$: $y^2=12x$. The directrix is $x=-3$.
:::

## Using the definitions

:::example Distances to the foci
The point $P$ on $\frac{x^2}{25}+\frac{y^2}{9}=1$ has $x=3$. Find $y$ and check the definition.

**Solution.** $y^2=9\left(1-\frac{9}{25}\right)=\frac{144}{25}$, so $y=\pm\frac{12}{5}$. For $P\left(3, \frac{12}{5}\right)$ with $F_1(-4, 0)$, $F_2(4, 0)$: $PF_2=\sqrt{1+5.76}=2.6$ and $PF_1=\sqrt{49+5.76}=7.4$. The sum is $10=2a$ ✓.
:::

:::example Which conic?
Identify $9x^2+16y^2=144$.

**Solution.** Dividing by $144$: $\frac{x^2}{16}+\frac{y^2}{9}=1$. An ellipse with $a=4$, $b=3$, $c^2=7$, foci $(\pm\sqrt7, 0)$.
:::

:::warning Common mistakes
- Mixing the two relations: ellipse $c^2=a^2-b^2$, hyperbola $c^2=a^2+b^2$.
- Forgetting to write the equation as "$=1$" before reading $a^2$ and $b^2$.
- Treating $a$ as the larger denominator for a hyperbola: here $a^2$ is under the positive term.
- For the parabola, mixing up $p$ with $\frac p2$: the focus is at $\frac p2$, and $2p$ is the coefficient of $x$.
:::

## Key terms

:::terms
- conic section | đường conic
- ellipse | elip
- hyperbola | hypebol
- parabola | parabol
- focus (foci) | tiêu điểm
- directrix | đường chuẩn
- asymptote | đường tiệm cận
- vertex | đỉnh
:::

## Summary

- Ellipse: $MF_1+MF_2=2a$, $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$, $c^2=a^2-b^2$.
- Hyperbola: $|MF_1-MF_2|=2a$, $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$, $c^2=a^2+b^2$, asymptotes $y=\pm\frac bax$.
- Parabola: distance to $F$ equals distance to $\Delta$; $y^2=2px$, focus $\left(\frac p2, 0\right)$, directrix $x=-\frac p2$.

## Practice

:::practice
1. For $\frac{x^2}{49}+\frac{y^2}{25}=1$ find $a$, $b$, $c$, the foci and the vertices.
2. Find the ellipse with foci $(\pm2, 0)$ and $a=3$.
3. Find $a$, $b$ and the foci of $4x^2+9y^2=36$.
4. For $\frac{x^2}{25}-\frac{y^2}{144}=1$ find $a$, $b$, $c$, the foci and the asymptotes.
5. Find the hyperbola with vertices $(\pm2, 0)$ and foci $(\pm\sqrt{13}, 0)$.
6. Find the focus and the directrix of $y^2=8x$.
7. Find the parabola $y^2=2px$ with focus $\left(\frac32, 0\right)$.
8. Show that $P\left(5, \frac{16}{3}\right)$ is on $\frac{x^2}{9}-\frac{y^2}{16}=1$ and check that $|PF_1-PF_2|=6$.
9. Challenge. Find the points of $\frac{x^2}{25}+\frac{y^2}{9}=1$ whose distance to $F_2(4, 0)$ is $3$.
10. Challenge. A satellite dish has a parabolic cross-section: its opening is $2$ m wide and it is $0.5$ m deep. How far from the vertex should the receiver be placed (at the focus)?
:::

:::solution Show solutions
1. $a=7$, $b=5$, $c^2=49-25=24$, so $c=2\sqrt6$. Foci $(\pm2\sqrt6, 0)$; vertices $(\pm7, 0)$ and $(0, \pm5)$.
2. $c=2$, $a=3$, $b^2=9-4=5$: $\frac{x^2}{9}+\frac{y^2}{5}=1$.
3. $\frac{x^2}{9}+\frac{y^2}{4}=1$: $a=3$, $b=2$, $c=\sqrt5$, foci $(\pm\sqrt5, 0)$.
4. $a=5$, $b=12$, $c=\sqrt{25+144}=13$. Foci $(\pm13, 0)$; asymptotes $y=\pm\frac{12}{5}x$.
5. $a=2$, $c^2=13$, $b^2=13-4=9$: $\frac{x^2}{4}-\frac{y^2}{9}=1$.
6. $2p=8$, so $p=4$. Focus $(2, 0)$; directrix $x=-2$.
7. $\frac p2=\frac32$, so $p=3$: $y^2=6x$.
8. $\frac{25}{9}-\frac{(16/3)^2}{16}=\frac{25}{9}-\frac{256}{144}=\frac{25}{9}-\frac{16}{9}=1$ ✓. Foci $(\pm5, 0)$: $PF_2=\frac{16}{3}$ and $PF_1=\sqrt{100+\frac{256}{9}}=\frac{34}{3}$. Difference $\frac{18}{3}=6=2a$ ✓.
9. For this ellipse $MF_2=5-\frac45x$. Setting $5-0.8x=3$ gives $x=2.5$, then $y^2=9\left(1-\frac{6.25}{25}\right)=6.75$, $y=\pm\frac{3\sqrt3}{2}$. Points $\left(2.5, \pm\frac{3\sqrt3}{2}\right)$. Check: $\sqrt{1.5^2+6.75}=\sqrt9=3$ ✓.
10. Put the vertex at the origin with the axis along $Ox$: the rim point is $(0.5, 1)$. $1^2=2p\cdot0.5$ gives $p=1$, so the focus is at $\frac p2=0.5$ m from the vertex.
:::
