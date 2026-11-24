---
title: Circles in the coordinate plane
description: Write the equation of a circle from its centre and radius, recognise a circle from an expanded equation, and write the tangent at a point.
minutes: 28
---

:::goals
- Write the equation of a circle from its centre and radius, and the other way round.
- Decide whether $x^2+y^2-2ax-2by+c=0$ is a circle.
- Find a circle from a diameter or from three points.
- Write the tangent at a point, and find the position of a point or a line relative to a circle.
:::

A mobile phone mast stands at the point $I(1, 2)$ on a map (units: km) and covers every place within $5$ km of it. A house stands at $P(5, 1)$. Does the house have signal? A road runs along the line $3x+4y-31=0$: how long is the stretch of road with signal?

If you sketch it, you will see at once that the edge of the coverage zone is a circle. But a sketch is never quite accurate, especially when you need to know how many kilometres of road are covered. So we do what we did with lines: write the circle as an equation, so that every question about it becomes a calculation.

## The equation of a circle

### Explore: the points exactly $5$ km from $I$

Whether a point has signal depends only on its distance from the mast. To avoid square roots, we compute the squared distance $IM^2=(x-1)^2+(y-2)^2$ for a few points $M(x, y)$:

| $M$ | $(4, 6)$ | $(6, 2)$ | $(1, -3)$ | $(-3, 5)$ | $(5, 1)$ |
|---|---|---|---|---|---|
| $IM^2$ | $9+16=25$ | $25+0=25$ | $0+25=25$ | $16+9=25$ | $16+1=17$ |

Notice that the first four points all give $IM^2=25$, that is $IM=5$, so they lie exactly on the edge of the coverage zone. The point $(5, 1)$ has $IM^2=17<25$, so it lies inside. So a point $M(x, y)$ is on the edge exactly when $(x-1)^2+(y-2)^2=25$.

:::definition Equation of a circle
The circle with centre $I(a, b)$ and radius $R>0$ is the set of points $M(x, y)$ with $IM=R$, that is
$$(x-a)^2+(y-b)^2=R^2.$$
:::

This equation is really just the sentence "$M$ is exactly $R$ from $I$" written in coordinates. Since $IM=\sqrt{(x-a)^2+(y-b)^2}$, and for two non-negative numbers $IM=R\iff IM^2=R^2$, we square both sides to keep things tidy and get rid of the square root.

### The expanded form

In exercises, a circle is not always handed to you in the neat form above. Often the squares have already been multiplied out. Expanding $(x-a)^2+(y-b)^2=R^2$ gives $x^2+y^2-2ax-2by+c=0$ with $c=a^2+b^2-R^2$.

:::theorem Recognising a circle
The equation $x^2+y^2-2ax-2by+c=0$ is the equation of a circle if and only if $a^2+b^2-c>0$. The circle then has centre $I(a, b)$ and radius $R=\sqrt{a^2+b^2-c}$.
:::

Why do we need that condition? Completing the squares turns the equation into $(x-a)^2+(y-b)^2=a^2+b^2-c$. The left side is a sum of two squares, so it is never negative. So if $a^2+b^2-c<0$ no point satisfies it, and if it equals $0$ only the single point $(a, b)$ does. Only when the right side is positive do we get a real circle.

:::example From centre and radius to the equation
Write the equation of the circle with centre $I(1, -2)$ and radius $3$, in both forms.

**Solution.** Substitute $a=1$, $b=-2$, $R=3$ into $(x-a)^2+(y-b)^2=R^2$. Note that $y-(-2)=y+2$:

$$(x-1)^2+(y+2)^2=9\iff x^2-2x+1+y^2+4y+4-9=0\iff x^2+y^2-2x+4y-4=0.$$

So the circle is $(x-1)^2+(y+2)^2=9$, or $x^2+y^2-2x+4y-4=0$.
:::

The other direction needs a little more care. An equation can look exactly like a circle's equation and still not be one, so we always check the sign of $a^2+b^2-c$ before drawing a conclusion.

:::example From the equation to the centre and radius
Is each equation the equation of a circle? If so, find the centre and the radius.
a) $x^2+y^2-6x+4y-12=0$. b) $x^2+y^2+2x+2y+5=0$.

**Solution.** Compare with $x^2+y^2-2ax-2by+c=0$ to read off $a$, $b$, $c$ (the coefficient of $x$ is $-2a$), then look at the sign of $a^2+b^2-c$:

$$\begin{aligned} \text{a) }& a=3,\ b=-2,\ c=-12:\quad a^2+b^2-c=9+4+12=25>0;\\ \text{b) }& a=-1,\ b=-1,\ c=5:\quad a^2+b^2-c=1+1-5=-3<0. \end{aligned}$$

So a) is a circle with centre $(3, -2)$ and radius $R=\sqrt{25}=5$, while b) is not the equation of a circle.
:::

## Finding a circle

Whatever the question gives you, writing the equation of a circle comes down to two jobs: find the centre and find the radius. When you know the two ends of a diameter, the centre sits right in the middle, at the midpoint.

:::example The circle on a given diameter
Write the equation of the circle with diameter $AB$, where $A(1, 2)$ and $B(5, 6)$.

**Solution.** The centre $I$ is the midpoint of $AB$, and the radius is half of $AB$:

$$I\left(\frac{1+5}{2}, \frac{2+6}{2}\right)=(3, 4),\qquad AB=\sqrt{4^2+4^2}=4\sqrt2,\qquad R=2\sqrt2,\ R^2=8.$$

So the circle is $(x-3)^2+(y-4)^2=8$.

**Check.** The point $A$: $(1-3)^2+(2-4)^2=4+4=8$.
:::

When all we know is three points on the circle, the centre does not show itself straight away. Here the expanded form helps: each point gives one equation in the unknowns $a$, $b$, $c$, and three points give exactly three equations.

:::example The circle through three points
Write the equation of the circle through $O(0, 0)$, $A(4, 0)$ and $B(0, 2)$.

**Solution.** Substitute the coordinates of the three points into $x^2+y^2-2ax-2by+c=0$ in turn:

$$\begin{aligned} O(0, 0):&\quad c=0;\\ A(4, 0):&\quad 16-8a+c=0\Rightarrow a=2;\\ B(0, 2):&\quad 4-4b+c=0\Rightarrow b=1. \end{aligned}$$

Then $R^2=a^2+b^2-c=4+1-0=5>0$.

So the circle is $(x-2)^2+(y-1)^2=5$.
:::

## The tangent at a point

Picture a ruler laid against the edge of a plate: it touches the plate at exactly one point. A line is **tangent** to a circle when it has exactly one point in common with the circle. The tangent at $M_0$ is perpendicular to the radius $IM_0$, so $\overrightarrow{IM_0}$ is a normal vector of it.

:::graph The tangent to a circle at $M$
alt: The circle with centre I(1, 1) and radius 5 and a line touching it at the point M(4, 5)
x: -5..8
y: -5..8
plot: 1 + sqrt(25 - (x-1)^2) ; -4..6
plot: 1 - sqrt(25 - (x-1)^2) ; -4..6
plot: (32 - 3x)/4 ; 0..8
segment: (1, 1) (4, 5)
point: (1, 1) "I" below-left
point: (4, 5) "M" above-right
:::

:::example The tangent at a point
Write the equation of the tangent to the circle $(x-1)^2+(y-1)^2=25$ at $M(4, 5)$.

**Solution.** First check that $M$ is on the circle: $(4-1)^2+(5-1)^2=9+16=25$. The tangent passes through $M$ and has normal vector $\overrightarrow{IM}=(3, 4)$:

$$3(x-4)+4(y-5)=0\iff 3x+4y-32=0.$$

So the tangent is $3x+4y-32=0$.

**Check.** The distance from $I(1, 1)$ to the tangent is $\dfrac{|3+4-32|}{5}=5=R$, as expected.
:::

## Position of a point and a line relative to a circle

Every question about position comes down to one familiar job: compare a distance with the radius. Take a circle with centre $I$ and radius $R$.

- A point $P$ lies **inside**, **on** or **outside** the circle according as $IP<R$, $IP=R$ or $IP>R$.
- A line $\Delta$ **cuts** the circle in two points, is **tangent** to it, or **does not meet** it according as $d(I, \Delta)<R$, $=R$ or $>R$.
- When $d=d(I, \Delta)<R$, the chord cut off on $\Delta$ has length $2\sqrt{R^2-d^2}$ (by Pythagoras' theorem in the right-angled triangle formed by a radius, the distance and half the chord).

We now have all we need to answer the question about the phone mast from the start, without drawing an accurate picture.

:::graph The coverage zone and the road
alt: The circle with centre I(1, 2) and radius 5, the point P(5, 1) inside it, and the line 3x plus 4y equals 31 cutting the circle in two points
x: -5..7
y: -4..8
plot: 2 + sqrt(25 - (x-1)^2) ; -4..6
plot: 2 - sqrt(25 - (x-1)^2) ; -4..6
plot: (31 - 3x)/4
point: (1, 2) "I" below-left
point: (5, 1) "P" below
point: (1, 7)
point: (5.8, 3.4)
:::

:::example The phone mast
The mast at $I(1, 2)$ covers a radius of $5$ km.
a) Does the house at $P(5, 1)$ have signal?
b) Does the road $\Delta: 3x+4y-31=0$ pass through the coverage zone? If so, how long is the stretch with signal?

**Solution.** We compare $IP$ and $d(I, \Delta)$ with $R=5$.

a) $IP^2=(5-1)^2+(1-2)^2=17<25$, so $IP<5$.

b) The distance from the centre to the road, and the length of the chord:

$$d=\frac{|3\cdot1+4\cdot2-31|}{\sqrt{3^2+4^2}}=\frac{20}{5}=4<5,\qquad 2\sqrt{R^2-d^2}=2\sqrt{25-16}=6.$$

So the house is inside the coverage zone, and a $6$ km stretch of the road has signal.

**Check.** Solving the system of the circle and the road gives the two intersection points $(1, 7)$ and $\left(\frac{29}{5}, \frac{17}{5}\right)$; the distance between them is $\sqrt{4.8^2+3.6^2}=6$.
:::

:::warning Common mistakes
Most mistakes in this topic are sign slips and forgotten squares. Read these carefully so you know where to pause and check.

- **Wrong signs for the centre.** Wrong: $(x+2)^2+(y-3)^2=16$ has centre $(2, -3)$. Why it is wrong: $x+2=x-(-2)$. Right: the centre is $(-2, 3)$ and the radius is $4$.
- **Writing $R$ instead of $R^2$.** Wrong: the circle with centre $(3, 4)$ and radius $2\sqrt2$ is $(x-3)^2+(y-4)^2=2\sqrt2$. Why it is wrong: the right side is the square of the radius. Right: $(x-3)^2+(y-4)^2=8$.
- **Not checking $a^2+b^2-c>0$.** Wrong: "$x^2+y^2+2x+2y+5=0$ is a circle with centre $(-1, -1)$". Why it is wrong: $a^2+b^2-c=-3<0$, so no point satisfies it. Right: it is not a circle.
- **The wrong normal vector for a tangent.** Wrong: the tangent at $M$ uses a vector perpendicular to $\overrightarrow{IM}$ as its normal vector. Why it is wrong: the tangent is perpendicular to the radius. Right: $\vec{n}=\overrightarrow{IM}$.
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

- Circle with centre $I(a, b)$ and radius $R$: $(x-a)^2+(y-b)^2=R^2$.
- $x^2+y^2-2ax-2by+c=0$ is a circle $\iff a^2+b^2-c>0$; centre $(a, b)$, $R=\sqrt{a^2+b^2-c}$.
- Diameter $AB$: the centre is the midpoint, $R=\dfrac{AB}{2}$. Three points: substitute into the expanded form and solve for $a$, $b$, $c$.
- Tangent at $M_0$: through $M_0$, normal vector $\overrightarrow{IM_0}$.
- Compare $IP$ and $d(I, \Delta)$ with $R$ to find positions; a chord has length $2\sqrt{R^2-d^2}$.

The questions about the house and the road at the start turned out to be just two comparisons of a distance with the radius. That is the thing to remember: a circle is the set of points exactly $R$ from the centre, and almost every problem about it starts from the word "distance".

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, and do not worry about mistakes; then open the solution and compare it with your own thinking.

:::exercise
Write the equation of the circle with centre $(-2, 3)$ and radius $4$.

::hint
**What you need:** the circle with centre $(a, b)$ and radius $R$ is $(x-a)^2+(y-b)^2=R^2$.

**Steps:**
1. Substitute $a=-2$, $b=3$; note that $x-(-2)=x+2$.
2. The right side is $R^2=16$.

::solution
The circle with centre $I(a, b)$ and radius $R$ has equation $(x-a)^2+(y-b)^2=R^2$.

For the centre $(-2, 3)$ we have $a=-2$, $b=3$; the radius is $R=4$. Substituting, we get
$$(x-(-2))^2+(y-3)^2=4^2,$$
that is, $(x+2)^2+(y-3)^2=16$.

So the equation of the circle is $(x+2)^2+(y-3)^2=16$.

**Answer.** $(x+2)^2+(y-3)^2=16$.
:::

:::exercise
Find the centre and the radius of the circle $x^2+y^2-4x+6y-3=0$.

::hint
**What you need:** $x^2+y^2-2ax-2by+c=0$ has centre $(a, b)$ and $R=\sqrt{a^2+b^2-c}$.

**Steps:**
1. From $-2a=-4$, $-2b=6$ find $a$, $b$; read off $c$.
2. Compute $a^2+b^2-c$.

::solution
The equation $x^2+y^2-2ax-2by+c=0$ with the condition $a^2+b^2-c>0$ is the equation of a circle with centre $I(a, b)$ and radius $R=\sqrt{a^2+b^2-c}$.

Comparing with $x^2+y^2-4x+6y-3=0$, we have $-2a=-4$, $-2b=6$ and $c=-3$. Hence $a=2$, $b=-3$, $c=-3$.

We have $a^2+b^2-c=4+9+3=16>0$, so this is the equation of a circle, with $R=\sqrt{16}=4$.

Check by completing the squares: $(x-2)^2+(y+3)^2=4+9+3=16$.

So the circle has centre $I(2, -3)$ and radius $R=4$.

**Answer.** Centre $(2, -3)$, $R=4$.
:::

:::exercise
Is $x^2+y^2-2x+4y+6=0$ the equation of a circle?

::hint
**What you need:** the expanded form is a circle if and only if $a^2+b^2-c>0$.

**Steps:**
1. Read off $a$, $b$, $c$.
2. Find the sign of $a^2+b^2-c$.

::solution
The equation $x^2+y^2-2ax-2by+c=0$ is the equation of a circle if and only if $a^2+b^2-c>0$.

Comparing with $x^2+y^2-2x+4y+6=0$, we have $-2a=-2$, $-2b=4$ and $c=6$. Hence $a=1$, $b=-2$, $c=6$.

We have $a^2+b^2-c=1+4-6=-1<0$, so the condition is not satisfied.

Check by completing the squares: the equation is equivalent to $(x-1)^2+(y+2)^2=-1$. The left side is non-negative while the right side is negative, so no point satisfies it.

So $x^2+y^2-2x+4y+6=0$ is not the equation of a circle.

**Answer.** It is not the equation of a circle.
:::

:::exercise
Write the equation of the circle through the three points $O(0, 0)$, $A(6, 0)$ and $B(0, 8)$.

::hint
**What you need:** substitute the coordinates of each point into $x^2+y^2-2ax-2by+c=0$.

**Steps:**
1. $O$ gives $c$.
2. $A$ gives $a$, and $B$ gives $b$.
3. Compute $R^2=a^2+b^2-c$.

::solution
Let the equation of the required circle be $x^2+y^2-2ax-2by+c=0$ (with $a^2+b^2-c>0$).

Since the circle passes through $O(0, 0)$, we have $0+0-0-0+c=0$, so $c=0$.

Since the circle passes through $A(6, 0)$, we have $36+0-12a-0+c=0$. With $c=0$ this gives $36-12a=0$, so $a=3$.

Since the circle passes through $B(0, 8)$, we have $0+64-0-16b+c=0$. With $c=0$ this gives $64-16b=0$, so $b=4$.

Check the condition: $a^2+b^2-c=9+16-0=25>0$ (satisfied), so $R^2=25$ and $R=5$.

Hence the circle has centre $I(3, 4)$, radius $5$ and equation $(x-3)^2+(y-4)^2=25$. Check: $(0-3)^2+(0-4)^2=25$; $(6-3)^2+(0-4)^2=25$; $(0-3)^2+(8-4)^2=25$.

So the equation of the circle through $O$, $A$ and $B$ is $(x-3)^2+(y-4)^2=25$.

**Answer.** $(x-3)^2+(y-4)^2=25$.
:::

:::exercise
Write the equation of the tangent to the circle $x^2+y^2=25$ at the point $M(3, 4)$.

::hint
**What you need:** the tangent at $M$ has normal vector $\overrightarrow{IM}$; here $I=O(0, 0)$.

**Steps:**
1. Check that $M$ is on the circle.
2. Write the line through $M$ with $\vec{n}=\overrightarrow{OM}$.

::solution
The circle $x^2+y^2=25$ has centre $O(0, 0)$ and radius $5$.

Substituting the coordinates of $M(3, 4)$: $3^2+4^2=9+16=25$, so $M$ lies on the circle.

The tangent to the circle at $M$ is the line through $M$ perpendicular to $OM$. Hence the tangent has normal vector $\overrightarrow{OM}=(3, 4)$.

The equation of the tangent is
$$3(x-3)+4(y-4)=0\iff3x+4y-9-16=0\iff3x+4y-25=0.$$

So the tangent to the circle at $M(3, 4)$ has equation $3x+4y-25=0$.

**Answer.** $3x+4y-25=0$.
:::

:::exercise
Consider the circle $(C): x^2+y^2-6x+2y-15=0$ and the point $A(6, 3)$. Is each claim true or false?

a) $(C)$ has centre $I(3, -1)$.

b) $(C)$ has radius $25$.

c) The point $A$ lies on $(C)$.

d) The tangent to $(C)$ at $A$ has equation $3x+4y-30=0$.

::hint
**What you need:** centre $(a, b)$, $R=\sqrt{a^2+b^2-c}$; the tangent at $A$ has normal vector $\overrightarrow{IA}$.

**Steps:**
1. Read off $a$, $b$, $c$ and compute $R$.
2. Substitute $A$ into the equation.
3. Compute $\overrightarrow{IA}$ and write the tangent.

::solution
Comparing $(C): x^2+y^2-6x+2y-15=0$ with $x^2+y^2-2ax-2by+c=0$, we have $-2a=-6$, $-2b=2$, $c=-15$, so $a=3$, $b=-1$, $c=-15$. Then $a^2+b^2-c=9+1+15=25>0$.

a) **True.** The centre of $(C)$ is $I(a, b)=(3, -1)$.

b) **False.** The radius is $R=\sqrt{a^2+b^2-c}=\sqrt{25}=5$; the number $25$ is $R^2$, not $R$.

c) **True.** Substituting $A(6, 3)$ into the left side: $6^2+3^2-6\cdot6+2\cdot3-15=36+9-36+6-15=0$, so $A$ lies on $(C)$.

d) **True.** Since $A$ lies on $(C)$, the tangent at $A$ is perpendicular to $IA$ and has normal vector $\overrightarrow{IA}=(6-3, 3-(-1))=(3, 4)$. The equation of the tangent is
$$3(x-6)+4(y-3)=0\iff3x+4y-30=0.$$

So statements a), c), d) are true; statement b) is false.

**Answer.** a) True; b) False; c) True; d) True.
:::

:::exercise
The line $x+2y-5=0$ cuts the circle $x^2+y^2=25$ at two points $A$ and $B$. Find the length $AB$ (rounded to two decimal places).

::hint
**What you need:** a chord has length $2\sqrt{R^2-d^2}$, where $d$ is the distance from the centre to the line.

**Steps:**
1. Compute $d(O, \Delta)$.
2. Substitute into the chord-length formula.

::solution
The circle $x^2+y^2=25$ has centre $O(0, 0)$ and radius $R=5$.

The distance from $O$ to the line $x+2y-5=0$ is
$$d=\frac{|0+2\cdot0-5|}{\sqrt{1^2+2^2}}=\frac{5}{\sqrt5}=\sqrt5.$$

Since $d=\sqrt5<5=R$, the line cuts the circle at two points $A$ and $B$. Let $H$ be the foot of the perpendicular from $O$ to the line; $H$ is the midpoint of $AB$. In the triangle $OHA$, right-angled at $H$, we have
$$HA=\sqrt{OA^2-OH^2}=\sqrt{R^2-d^2}=\sqrt{25-5}=\sqrt{20}.$$

Hence $AB=2HA=2\sqrt{20}=4\sqrt5\approx8.94$.

Check by solving the system: from $x=5-2y$, substituting into $x^2+y^2=25$ gives $(5-2y)^2+y^2=25\iff5y^2-20y=0$, so $y=0$ or $y=4$. The two intersection points are $A(5, 0)$ and $B(-3, 4)$, and then $AB=\sqrt{(5+3)^2+(0-4)^2}=\sqrt{64+16}=\sqrt{80}=4\sqrt5$ (this agrees).

So the length $AB$ is $4\sqrt5$, which is $8.94$ rounded to two decimal places.

**Answer.** $8.94$.
:::

:::exercise
A Wi-Fi router stands at the point $I(2, 3)$ on a plan of a room (units: metres) and has a range of $5$ m. Three computers are at $A(5, 6)$, $B(7, 1)$ and $C(-1, 7)$. Which computer is inside the range, which is outside, and which is exactly on the edge?

::hint
**What you need:** compare $IP^2$ with $R^2=25$.

**Steps:**
1. Compute $IA^2$, $IB^2$, $IC^2$.
2. Compare each one with $25$.

::solution
The coverage area is the disc with centre $I(2, 3)$ and radius $5$ m. A point $P$ is inside the range when $IP<5$, outside when $IP>5$, and exactly on the edge when $IP=5$. Since $IP\ge0$, we compare $IP^2$ with $5^2=25$.

For $A(5, 6)$: $IA^2=(5-2)^2+(6-3)^2=9+9=18<25$, so $IA<5$ (about $4.24$ m).

For $B(7, 1)$: $IB^2=(7-2)^2+(1-3)^2=25+4=29>25$, so $IB>5$ (about $5.39$ m).

For $C(-1, 7)$: $IC^2=(-1-2)^2+(7-3)^2=9+16=25$, so $IC=5$ m.

So computer $A$ is inside the range, computer $B$ is outside, and computer $C$ is exactly on the edge.

**Answer.** $A$ is inside the range, $B$ is outside, and $C$ is exactly on the edge.
:::

:::exercise Challenge
Write the equation of the circle with centre $I(1, 2)$ that is tangent to the line $\Delta: 3x-4y+15=0$, then find the point of tangency.

::hint
**What you need:** the circle is tangent to $\Delta$ when $R=d(I, \Delta)$; the point of tangency is the foot of the perpendicular from $I$ to $\Delta$.

**Steps:**
1. Compute $R=d(I, \Delta)$.
2. Write the line through $I$ perpendicular to $\Delta$ (direction vector $(3, -4)$).
3. Solve the system to find the point of tangency.

::solution
The circle with centre $I(1, 2)$ is tangent to the line $\Delta$ when its radius equals the distance from $I$ to $\Delta$:
$$R=d(I, \Delta)=\frac{|3\cdot1-4\cdot2+15|}{\sqrt{3^2+(-4)^2}}=\frac{|3-8+15|}{5}=\frac{10}{5}=2.$$

Hence the equation of the circle is $(x-1)^2+(y-2)^2=2^2=4$.

The point of tangency $H$ is the foot of the perpendicular from $I$ to $\Delta$. The line $\Delta$ has normal vector $\vec n=(3, -4)$, so the line through $I$ perpendicular to $\Delta$ has direction vector $\vec n$. Its parametric equations are
$$x=1+3t,\qquad y=2-4t.$$

The coordinates of $H$ correspond to the value of $t$ that satisfies the equation of $\Delta$. Substituting into $\Delta$:
$$3(1+3t)-4(2-4t)+15=0\iff3+9t-8+16t+15=0\iff25t+10=0\iff t=-\frac25.$$

It follows that
$$x=1+3\cdot\left(-\frac25\right)=-\frac15,\qquad y=2-4\cdot\left(-\frac25\right)=\frac{18}{5}.$$

Check: $3\cdot\left(-\dfrac15\right)-4\cdot\dfrac{18}{5}+15=\dfrac{-3-72+75}{5}=0$, so $H$ lies on $\Delta$; and $IH^2=\left(-\dfrac15-1\right)^2+\left(\dfrac{18}{5}-2\right)^2=\dfrac{36}{25}+\dfrac{64}{25}=4$, so $IH=2=R$.

So the circle is $(x-1)^2+(y-2)^2=4$ and the point of tangency is $\left(-\dfrac15, \dfrac{18}{5}\right)$.

**Answer.** $(x-1)^2+(y-2)^2=4$; point of tangency $\left(-\dfrac15, \dfrac{18}{5}\right)$.
:::

:::exercise Review
Write the equation of the circle through $A(1, 1)$ and $B(5, 3)$ whose centre lies on the $x$-axis.

::hint
**What you need:** the centre is equidistant from $A$ and $B$, so it lies on the perpendicular bisector of $AB$ (see [equation of a line](lesson:equation-of-a-line)).

**Steps:**
1. Write the perpendicular bisector of $AB$.
2. Put $y=0$ to find the centre.
3. Compute $R^2=IA^2$.

::solution
Let $I$ be the centre of the required circle. Since the circle passes through $A$ and $B$, we have $IA=IB$, so $I$ lies on the perpendicular bisector of the segment $AB$. Moreover, $I$ lies on the $x$-axis, that is $y_I=0$.

The midpoint of $AB$ is $\left(\dfrac{1+5}{2}, \dfrac{1+3}{2}\right)=(3, 2)$ and $\overrightarrow{AB}=(5-1, 3-1)=(4, 2)$.

The perpendicular bisector of $AB$ passes through $(3, 2)$ and has normal vector $\overrightarrow{AB}=(4, 2)$, so its equation is
$$4(x-3)+2(y-2)=0\iff4x+2y-16=0\iff2x+y-8=0.$$

Since $I$ lies on the $x$-axis, $y=0$. Substituting into the equation above: $2x-8=0$, so $x=4$. Hence $I(4, 0)$.

The radius satisfies $R^2=IA^2=(1-4)^2+(1-0)^2=9+1=10$. Check: $IB^2=(5-4)^2+(3-0)^2=1+9=10$ (equal to $IA^2$).

So the equation of the circle is $(x-4)^2+y^2=10$.

**Answer.** $(x-4)^2+y^2=10$.
:::

## Mini test

:::quiz
::mc NB
The circle $(x+3)^2+(y-1)^2=16$ has centre $I$ and radius $R$ given by
A. $I(3, -1)$, $R=4$.
B. $I(-3, 1)$, $R=16$.
C. $I(-3, 1)$, $R=4$.
D. $I(3, -1)$, $R=16$.
::key C
Write $x+3=x-(-3)$ and $y-1$, so the centre is $(-3, 1)$; the right side is $R^2=16$, so $R=4$. Option A has the wrong signs for the centre, and B forgets the square root.

::mc TH
Which of these is the equation of a circle?
A. $x^2+y^2-2x+4y+6=0$.
B. $x^2+y^2+4x-2y+1=0$.
C. $x^2+2y^2-4x+1=0$.
D. $x^2+y^2-4x+2y+5=0$.
::key B
For B: $a=-2$, $b=1$, $c=1$, so $a^2+b^2-c=4>0$. For A, $a^2+b^2-c=-1<0$; for D it equals $0$ (a single point); in C the coefficients of $x^2$ and $y^2$ are different.

::mc VD
The circle with diameter $AB$, where $A(-1, 2)$ and $B(3, -4)$, has equation
A. $(x-1)^2+(y+1)^2=13$.
B. $(x-1)^2+(y+1)^2=52$.
C. $(x+1)^2+(y-1)^2=13$.
D. $(x-1)^2+(y+1)^2=\sqrt{13}$.
::key A
The centre is the midpoint $(1, -1)$ of $AB$. $AB^2=16+36=52$, so $R^2=\dfrac{AB^2}{4}=13$. Option B uses $AB^2$ as $R^2$, and D writes $R$ instead of $R^2$.

::mc VD
The tangent to the circle $(x-2)^2+(y+1)^2=10$ at the point $M(3, 2)$ is
A. $3x-y-7=0$.
B. $x+3y+1=0$.
C. $x-3y+3=0$.
D. $x+3y-9=0$.
::key D
$\overrightarrow{IM}=(1, 3)$ is a normal vector and the tangent passes through $M$: $(x-3)+3(y-2)=0\iff x+3y-9=0$. Option A uses $\overrightarrow{IM}$ as a direction vector, and B is the line through the centre $I$.

::tf NB TH TH VD
Consider the circle $(C): x^2+y^2-4x+6y-12=0$.
a) $(C)$ has centre $I(-2, 3)$.
b) $(C)$ has radius $R=5$.
c) The origin $O$ lies outside $(C)$.
d) The line $4x+3y+16=0$ cuts $(C)$ in a chord of length $8$.
::key F T F T
a) False: $-2a=-4$ and $-2b=6$, so the centre is $(2, -3)$. b) True: $R^2=4+9+12=25$. c) False: $IO^2=4+9=13<25$, so $O$ lies inside. d) True: $d=\dfrac{|8-9+16|}{5}=3$, and the chord has length $2\sqrt{25-9}=8$.

::sa VD
A circle with centre $I(2, -1)$ is tangent to the line $4x-3y+9=0$. Find its radius.
::key 4
A circle is tangent to a line when $R$ equals the distance from the centre to the line: $R=\dfrac{|8+3+9|}{\sqrt{16+9}}=\dfrac{20}{5}=4$.

::sa VD
On a map (units: km), a phone mast stands at the origin $O$ and covers a radius of $10$ km. A road runs along the line $x+y-10=0$. How long, in kilometres, is the stretch of road with signal? (Round to one decimal place.)
::key 14.1
$d=\dfrac{|-10|}{\sqrt2}=5\sqrt2<10$, so the stretch with signal is a chord of length $2\sqrt{100-50}=10\sqrt2\approx14.1$ km.
:::
