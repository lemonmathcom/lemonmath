---
title: The three conic sections
description: Meet the ellipse, hyperbola and parabola as sets of points, learn their standard equations, foci and asymptotes, and find the equation from given data.
minutes: 28
---

:::goals
- Describe the ellipse, the hyperbola and the parabola by the distances that define them.
- Read off $a$, $b$, $c$, the foci and the vertices from a standard equation.
- Write the equation of a conic from given data.
- Recognise conics in real life.
:::

A gardener wants an oval flower bed. He drives two stakes into the ground $8$ m apart, ties the ends of a $10$ m rope to the stakes, pulls the rope tight with a stick and walks the stick all the way round. The stick traces a closed curve. How long and how wide is the flower bed, and what is the equation of the curve?

That curve is an **ellipse**. Together with the hyperbola and the parabola it belongs to the family of **conic sections**: planets move on ellipses, a satellite dish has a parabolic cross-section, and power-station cooling towers have the shape of a hyperbola.

## The ellipse

### Explore: a constant sum of two distances

Put the stakes at $F_1(-4, 0)$ and $F_2(4, 0)$. The stick is always at a position $M$ with $MF_1+MF_2=10$ (the length of the rope). We check a few points:

| $M$ | $(5, 0)$ | $(0, 3)$ | $(-5, 0)$ | $(3, 2.4)$ |
|---|---|---|---|---|
| $MF_1$ | $9$ | $5$ | $1$ | $7.4$ |
| $MF_2$ | $1$ | $5$ | $9$ | $2.6$ |
| sum | $10$ | $10$ | $10$ | $10$ |

The flower bed runs from $(-5, 0)$ to $(5, 0)$, so it is $10$ m long, and from $(0, -3)$ to $(0, 3)$, so it is $6$ m wide. All four points satisfy $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$; for example $\dfrac{9}{25}+\dfrac{5.76}{9}=0.36+0.64=1$.

:::definition Ellipse
Let $F_1, F_2$ be two points (the **foci**) with $F_1F_2=2c$, and let $a>c>0$. The **ellipse** is the set of points $M$ with
$$MF_1+MF_2=2a.$$
With $F_1(-c, 0)$, $F_2(c, 0)$ and $b^2=a^2-c^2$, the ellipse has the **standard equation**
$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\qquad(a>b>0).$$
The vertices are $(\pm a, 0)$ and $(0, \pm b)$; $2a$ is the length of the major axis and $2b$ the length of the minor axis.
:::

### Why that equation?

For $M(x, y)$: $MF_1^2-MF_2^2=(x+c)^2-(x-c)^2=4cx$. Dividing by $MF_1+MF_2=2a$ gives $MF_1-MF_2=\dfrac{2cx}{a}$. Adding and subtracting with $MF_1+MF_2=2a$:
$$MF_1=a+\frac{c}{a}x,\qquad MF_2=a-\frac{c}{a}x.$$
Substituting into $MF_2^2=(x-c)^2+y^2$ and simplifying gives $\dfrac{x^2}{a^2}+\dfrac{y^2}{a^2-c^2}=1$. The two formulas for $MF_1$, $MF_2$ above are called the **focal radii**; they will be useful in the practice.

:::graph The ellipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$
alt: A horizontal ellipse with foci at (-4, 0) and (4, 0) and vertices at (±5, 0) and (0, ±3)
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

:::example An ellipse from its foci
Write the standard equation of the ellipse with foci $(\pm3, 0)$ and $MF_1+MF_2=10$ for every point $M$ of the ellipse.

**Solution.** The sum of distances gives $a$, the foci give $c$, and then $b^2=a^2-c^2$:

$$2a=10\Rightarrow a=5,\qquad c=3,\qquad b^2=25-9=16.$$

So the ellipse is $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.
:::

The reverse problem: from the lengths of the axes, we find the foci.

:::example An ellipse from the lengths of its axes
An ellipse has a major axis of length $12$ and a minor axis of length $8$, with its foci on $Ox$. Write its standard equation and find its foci.

**Solution.** The semi-major axis is $a$, the semi-minor axis is $b$, and for an ellipse $c^2=a^2-b^2$:

$$a=6,\ b=4,\qquad c^2=36-16=20\Rightarrow c=2\sqrt5.$$

So the ellipse is $\dfrac{x^2}{36}+\dfrac{y^2}{16}=1$, with foci $(\pm2\sqrt5, 0)$.
:::

## The hyperbola

If we replace the **sum** of the two distances by their **difference**, we get a curve with two separate branches.

:::definition Hyperbola
Let $F_1, F_2$ be two foci with $F_1F_2=2c$, and let $0<a<c$. The **hyperbola** is the set of points $M$ with
$$|MF_1-MF_2|=2a.$$
With foci $(\pm c, 0)$ and $b^2=c^2-a^2$, the hyperbola has the standard equation
$$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.$$
The vertices are $(\pm a, 0)$; the two branches approach the two **asymptotes** $y=\pm\dfrac{b}{a}x$.
:::

:::graph The hyperbola $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$
alt: A hyperbola with two branches opening left and right, vertices at (±4, 0), foci at (±5, 0) and two dashed asymptotes
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

:::example A hyperbola from its foci and vertices
Write the standard equation of the hyperbola with foci $(\pm5, 0)$ and vertices $(\pm3, 0)$, then write its asymptotes.

**Solution.** The vertices give $a$ and the foci give $c$. For a hyperbola $b^2=c^2-a^2$ (unlike the ellipse):

$$a=3,\ c=5,\qquad b^2=25-9=16\Rightarrow b=4.$$

So the hyperbola is $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$, with asymptotes $y=\pm\dfrac43x$.
:::

## The parabola

:::definition Parabola
Let $F$ be a point (the **focus**) and $\Delta$ a line not through $F$ (the **directrix**). The **parabola** is the set of points equidistant from $F$ and $\Delta$.
With $F\left(\dfrac p2, 0\right)$ and $\Delta: x=-\dfrac p2$ ($p>0$), the parabola has the standard equation
$$y^2=2px.$$
:::

Indeed, $MF=\sqrt{\left(x-\frac p2\right)^2+y^2}$ and the distance from $M$ to $\Delta$ is $\left|x+\frac p2\right|$. Squaring both and simplifying gives $y^2=2px$.

:::graph The parabola $y^2=4x$
alt: A parabola opening to the right with vertex at the origin, focus at (1, 0) and the dashed vertical directrix x equals -1
x: -2..7
y: -5..5
plot: 2*sqrt(x) ; 0..6.25
plot: -2*sqrt(x) ; 0..6.25
vline: -1 ; dashed
point: (1, 0) "F" below-right
point: (0, 0) "O" above-left
:::

:::example A parabola from its focus
Write the standard equation of the parabola with focus $F(3, 0)$, then write its directrix.

**Solution.** The focus is at $\dfrac p2$, so:

$$\frac p2=3\Rightarrow p=6,\qquad y^2=2\cdot6\cdot x=12x.$$

So the parabola is $y^2=12x$, with directrix $x=-3$.
:::

## Recognising and applying

When an equation is not yet in standard form, we transform it so that the right side is $1$ before reading off $a^2$, $b^2$.

:::example Which conic is it?
Identify the curve $9x^2+16y^2=144$ and find its foci.

**Solution.** Divide both sides by $144$ so that the right side is $1$:

$$\frac{9x^2}{144}+\frac{16y^2}{144}=1\iff\frac{x^2}{16}+\frac{y^2}{9}=1.$$

This is an ellipse with $a=4$, $b=3$, so $c^2=16-9=7$.

So the curve is an ellipse with foci $(\pm\sqrt7, 0)$.
:::

The reflecting property of the parabola is used in satellite dishes: every ray parallel to the axis passes through the focus after reflection.

:::example Placing the receiver of a satellite dish
A satellite dish has a parabolic cross-section; its opening is $1.2$ m wide and it is $0.18$ m deep. The receiver must sit at the focus. How far from the bottom of the dish is the receiver?

**Solution.** Put the vertex of the parabola (the bottom of the dish) at the origin with the axis along $Ox$, so the cross-section is $y^2=2px$. The rim is $0.6$ m from the axis and $0.18$ m from the bottom, so the point $(0.18, 0.6)$ lies on the parabola:

$$0.6^2=2p\cdot0.18\iff 0.36=0.36p\iff p=1.$$

The focus is $\left(\dfrac p2, 0\right)=(0.5, 0)$.

So the receiver is $0.5$ m from the bottom of the dish.
:::

:::warning Common mistakes
- **Mixing up the relation between $a$, $b$, $c$.** Wrong: a hyperbola with vertices $(\pm3, 0)$ and foci $(\pm5, 0)$ has $b^2=9-25$. Why it is wrong: for a hyperbola $c>a$ and $c^2=a^2+b^2$. Right: $b^2=c^2-a^2=16$. For an ellipse it is the other way round, $c^2=a^2-b^2$.
- **Reading $a^2$, $b^2$ before the right side is $1$.** Wrong: $9x^2+16y^2=144$ has $a^2=9$, $b^2=16$. Why it is wrong: both sides must be divided by $144$ first. Right: $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$, $a=4$, $b=3$.
- **Confusing $p$ with $\dfrac p2$.** Wrong: $y^2=8x$ has focus $(4, 0)$. Why it is wrong: $2p=8$ gives $p=4$, and the focus is at $\dfrac p2$. Right: focus $(2, 0)$, directrix $x=-2$.
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

- Ellipse: $MF_1+MF_2=2a$; $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$; $c^2=a^2-b^2$; focal radii $MF_{1,2}=a\pm\dfrac cax$.
- Hyperbola: $|MF_1-MF_2|=2a$; $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$; $c^2=a^2+b^2$; asymptotes $y=\pm\dfrac bax$.
- Parabola: $MF=d(M, \Delta)$; $y^2=2px$; focus $\left(\dfrac p2, 0\right)$, directrix $x=-\dfrac p2$.
- In standard form the foci always lie on $Ox$. To read off $a^2$, $b^2$: make the right side $1$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
For the ellipse $\dfrac{x^2}{49}+\dfrac{y^2}{25}=1$, find $a$, $b$, $c$, the foci and the vertices.

::hint
**What you need:** the ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ has $c^2=a^2-b^2$, foci $(\pm c, 0)$, vertices $(\pm a, 0)$, $(0, \pm b)$.

**Steps:**
1. Read off $a^2=49$, $b^2=25$.
2. Compute $c$.

::solution
$a=7$, $b=5$, $c^2=49-25=24$, so $c=2\sqrt6$.

**Answer.** Foci $(\pm2\sqrt6, 0)$; vertices $(\pm7, 0)$ and $(0, \pm5)$.
:::

:::exercise
Write the standard equation of the ellipse with foci $(\pm2, 0)$ and $a=3$.

::hint
**What you need:** $b^2=a^2-c^2$.

**Steps:**
1. Read off $c=2$.
2. Compute $b^2$ and write the equation.

::solution
$b^2=9-4=5$.

**Answer.** $\dfrac{x^2}{9}+\dfrac{y^2}{5}=1$.
:::

:::exercise
Find $a$, $b$ and the foci of the ellipse $4x^2+9y^2=36$.

::hint
**What you need:** make the right side $1$ before reading off $a^2$, $b^2$.

**Steps:**
1. Divide both sides by $36$.
2. Compute $c^2=a^2-b^2$.

::solution
$\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$: $a=3$, $b=2$, $c^2=9-4=5$.

**Answer.** $a=3$, $b=2$, foci $(\pm\sqrt5, 0)$.
:::

:::exercise
For the hyperbola $\dfrac{x^2}{25}-\dfrac{y^2}{144}=1$, find $a$, $b$, $c$, the foci and the asymptotes.

::hint
**What you need:** a hyperbola has $c^2=a^2+b^2$ and asymptotes $y=\pm\dfrac bax$.

**Steps:**
1. Read off $a$, $b$.
2. Compute $c$ and $\dfrac ba$.

::solution
$a=5$, $b=12$, $c=\sqrt{25+144}=13$.

**Answer.** Foci $(\pm13, 0)$; asymptotes $y=\pm\dfrac{12}{5}x$.
:::

:::exercise
Find the focus and the directrix of the parabola $y^2=8x$.

::hint
**What you need:** $y^2=2px$ has focus $\left(\dfrac p2, 0\right)$ and directrix $x=-\dfrac p2$.

**Steps:**
1. From $2p=8$ find $p$.
2. Compute $\dfrac p2$.

::solution
$2p=8$, so $p=4$ and $\dfrac p2=2$.

**Answer.** Focus $(2, 0)$; directrix $x=-2$.
:::

:::exercise
Consider the hyperbola $(H): \dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ and the point $P\left(5, \dfrac{16}{3}\right)$. Is each claim true or false?

a) $(H)$ has foci $(\pm5, 0)$.

b) The asymptotes of $(H)$ are $y=\pm\dfrac34x$.

c) The point $P$ lies on $(H)$.

d) $|PF_1-PF_2|=6$.

::hint
**What you need:** $c^2=a^2+b^2$; asymptotes $y=\pm\dfrac bax$; the definition $|MF_1-MF_2|=2a$.

**Steps:**
1. Compute $c$ and $\dfrac ba$.
2. Substitute $P$ into the equation.
3. Compute $PF_1$, $PF_2$.

::solution
$a=3$, $b=4$, $c=\sqrt{9+16}=5$.

a) **True**: $c=5$.

b) **False**: $\dfrac ba=\dfrac43$, so the asymptotes are $y=\pm\dfrac43x$.

c) **True**: $\dfrac{25}{9}-\dfrac{256}{9\cdot16}=\dfrac{25}{9}-\dfrac{16}{9}=1$.

d) **True**: $PF_2=\dfrac{16}{3}$, $PF_1=\sqrt{100+\dfrac{256}{9}}=\dfrac{34}{3}$, and the difference is $\dfrac{18}{3}=6=2a$.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
The entrance of a tunnel is half an ellipse: it is $8$ m wide at the base and $3$ m high at the top. How high, in metres, is the entrance at a point $1$ m from the centre line of the tunnel? (Round to two decimal places.)

::hint
**What you need:** put the origin at the middle of the base; the half-ellipse is $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, $y\ge 0$.

**Steps:**
1. Find $a$ (half the width) and $b$ (the height).
2. Substitute $x=1$ and compute $y$.

::solution
$a=4$, $b=3$: $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$. For $x=1$: $y=3\sqrt{1-\dfrac{1}{16}}=\dfrac{3\sqrt{15}}{4}\approx 2.90$.

**Answer.** $2.90$.
:::

:::exercise
The mirror of a headlamp has a parabolic cross-section: it is $20$ cm wide at the opening and $10$ cm deep. The bulb must sit at the focus so that the light leaves in a parallel beam. How many centimetres from the bottom of the mirror is the bulb?

::hint
**What you need:** with the vertex at the origin, the cross-section is $y^2=2px$, with focus $\left(\dfrac p2, 0\right)$.

**Steps:**
1. A point on the rim is $(10, 10)$.
2. Substitute it to find $p$, then compute $\dfrac p2$.

::solution
$10^2=2p\cdot10\iff p=5$. The focus is $(2.5, 0)$.

**Answer.** $2.5$ cm.
:::

:::exercise Challenge
Find the points $M$ of the ellipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ with $MF_2=3$, where $F_2(4, 0)$.

::hint
**What you need:** the focal radius $MF_2=a-\dfrac cax$.

**Steps:**
1. Write $MF_2=5-\dfrac45x$ and solve $MF_2=3$.
2. Substitute $x$ into the equation of the ellipse to find $y$.

::solution
$5-\dfrac45x=3\iff x=\dfrac52$. Then $y^2=9\left(1-\dfrac{1}{4}\right)=\dfrac{27}{4}$, $y=\pm\dfrac{3\sqrt3}{2}$. Check: $MF_2^2=\left(\dfrac32\right)^2+\dfrac{27}{4}=9$.

**Answer.** $M\left(\dfrac52, \pm\dfrac{3\sqrt3}{2}\right)$.
:::

:::exercise Review
Consider the ellipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ with foci $F_1(-4, 0)$, $F_2(4, 0)$. Find the points $M$ of the ellipse with $\angle F_1MF_2=90^\circ$.

::hint
**What you need:** $\angle F_1MF_2=90^\circ$ exactly when $M$ lies on the [circle](lesson:circles) with diameter $F_1F_2$, that is $x^2+y^2=16$.

**Steps:**
1. Write the circle with diameter $F_1F_2$.
2. Solve the system of the ellipse and the circle.

::solution
From $x^2=16-y^2$: $\dfrac{16-y^2}{25}+\dfrac{y^2}{9}=1\iff 9(16-y^2)+25y^2=225\iff 16y^2=81$, so $y=\pm\dfrac94$ and $x^2=16-\dfrac{81}{16}=\dfrac{175}{16}$, $x=\pm\dfrac{5\sqrt7}{4}$.

**Answer.** Four points $\left(\pm\dfrac{5\sqrt7}{4}, \pm\dfrac94\right)$.
:::

## Mini test

:::quiz
::mc
The foci of the ellipse $\dfrac{x^2}{36}+\dfrac{y^2}{20}=1$ are
A. $(\pm4, 0)$.
B. $(\pm2\sqrt{14}, 0)$.
C. $(\pm6, 0)$.
D. $(\pm16, 0)$.
::key A
For an ellipse $c^2=a^2-b^2=36-20=16$, so $c=4$. Option B uses $c^2=a^2+b^2$ (the hyperbola formula), C gives the vertices, and D forgets the square root.

::mc
The asymptotes of the hyperbola $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$ are
A. $y=\pm\dfrac43x$.
B. $y=\pm\dfrac34x$.
C. $y=\pm\dfrac{9}{16}x$.
D. $y=\pm\dfrac54x$.
::key B
$a=4$ and $b=3$, so the asymptotes are $y=\pm\dfrac bax=\pm\dfrac34x$. Option A turns the fraction upside down, and C uses $\dfrac{b^2}{a^2}$.

::mc
The focus of the parabola $y^2=6x$ is
A. $(3, 0)$.
B. $(6, 0)$.
C. $\left(\dfrac32, 0\right)$.
D. $\left(-\dfrac32, 0\right)$.
::key C
$2p=6$, so $p=3$ and the focus is $\left(\dfrac p2, 0\right)=\left(\dfrac32, 0\right)$. Option A confuses $p$ with $\dfrac p2$; D lies on the directrix $x=-\dfrac32$.

::mc
An ellipse has a major axis of length $10$ and its foci are $6$ apart (on $Ox$). Its standard equation is
A. $\dfrac{x^2}{25}+\dfrac{y^2}{34}=1$.
B. $\dfrac{x^2}{100}+\dfrac{y^2}{64}=1$.
C. $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.
D. $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$.
::key C
$2a=10$ and $2c=6$, so $a=5$, $c=3$ and $b^2=a^2-c^2=16$. Option B uses the lengths $10$ and $6$ as $a$ and $c$; A adds instead of subtracting.

::tf
Consider the ellipse $(E): 4x^2+25y^2=100$ with foci $F_1$, $F_2$.
a) The major axis of $(E)$ has length $10$.
b) The foci of $(E)$ are $(\pm\sqrt{21}, 0)$.
c) Every point $M$ of $(E)$ satisfies $MF_1+MF_2=5$.
d) The distance between the foci of $(E)$ is $\sqrt{21}$.
::key T T F F
Dividing both sides by $100$: $\dfrac{x^2}{25}+\dfrac{y^2}{4}=1$, so $a=5$, $b=2$, $c^2=21$. a) True: $2a=10$. b) True: $c=\sqrt{21}$. c) False: $MF_1+MF_2=2a=10$. d) False: $F_1F_2=2c=2\sqrt{21}$.

::sa
Consider the hyperbola $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ with foci $F_1(-5, 0)$ and $F_2(5, 0)$. A point $M$ lies on the right-hand branch and $MF_1=10$. Find $MF_2$.
::key 4
By definition $|MF_1-MF_2|=2a=6$. On the right-hand branch $M$ is closer to $F_2$, so $MF_1-MF_2=6$ and $MF_2=10-6=4$.

::sa
A gateway is half an ellipse, $10$ m wide at the base and $4$ m high at the top. A lorry $3.2$ m high wants to drive through. At most how many metres wide can its body be?
::key 6
Put the origin at the middle of the base: $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$. For $y=3.2$: $x^2=25(1-0.64)=9$, so $x=\pm3$. The lorry can be at most $6$ m wide.
:::
