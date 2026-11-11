---
title: Geometry, coordinates and trigonometry
description: ACT Math geometry: right and similar triangles, circles, area and volume, distance, midpoint, slopes, circle equations and right-triangle trigonometry.
minutes: 45
---

:::goals
- Use the Pythagorean theorem and similar triangles.
- Find areas, perimeters, arc lengths, sector areas and volumes.
- Use the distance and midpoint formulas, slopes of parallel and perpendicular lines, and the equation of a circle.
- Use sine, cosine and tangent in right triangles, and know key values on the unit circle.
:::

Geometry questions on the ACT are usually short: a diagram or a description, one or two facts to apply, and a number to find. Many students lose marks not because the geometry is hard but because they do not know a formula by heart or do not draw a quick sketch. This lesson gathers the facts you need and shows a clean solution for each type of question.

## Right triangles and similar triangles

In a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2+b^2=c^2$. Common triples such as $3,4,5$ and $5,12,13$ (and their multiples) save time. In **similar triangles**, corresponding sides are in the same ratio.

:::example A ladder against a wall
A $13$-meter ladder leans against a vertical wall. Its foot is $5$ meters from the wall. How high up the wall does the ladder reach?
A. $8$ m
B. $12$ m
C. $18$ m
D. $\sqrt{194}$ m

**Solution.** The ladder, the wall and the ground form a right triangle with hypotenuse $13$ m and one leg $5$ m. Let $h$ be the height on the wall. By the Pythagorean theorem,
$$h^2+5^2=13^2,$$
so $h^2=169-25=144$ and $h=12$.

So the ladder reaches $12$ m up the wall, answer **B**. Option D adds the squares instead of subtracting.
:::

:::example Shadows and similar triangles
At the same time of day, a person $1.6$ m tall casts a shadow $2$ m long, and a tree casts a shadow $15$ m long. How tall is the tree?
A. $18.75$ m
B. $14.6$ m
C. $12$ m
D. $24$ m

**Solution.** The sun's rays make the same angle with the ground, so the two triangles formed by each object and its shadow are similar. Let $h$ be the height of the tree. Then
$$\frac{h}{15}=\frac{1.6}{2},$$
so $h=15\times0.8=12$.

So the tree is $12$ m tall, answer **C**. Option A uses the ratio upside down.
:::

## Circles, areas and volumes

:::note Formulas to know
Circle: $C=2\pi r$, $A=\pi r^2$; an arc or sector with central angle $\theta^\circ$ is the fraction $\dfrac{\theta}{360}$ of the whole circle.
Triangle: $A=\dfrac12bh$. Trapezoid: $A=\dfrac12(a+b)h$. Interior angles of an $n$-gon: $(n-2)\times180^\circ$.
Rectangular box: $V=lwh$. Cylinder: $V=\pi r^2h$. Cone: $V=\dfrac13\pi r^2h$. Sphere: $V=\dfrac43\pi r^3$.
:::

:::example From circumference to a sector
A circle has circumference $10\pi$. What is the area of a sector of this circle with a central angle of $72^\circ$?
A. $5\pi$
B. $2\pi$
C. $25\pi$
D. $10\pi$

**Solution.** From $2\pi r=10\pi$, the radius is $r=5$, so the area of the circle is $\pi(5)^2=25\pi$.

The sector is $\dfrac{72}{360}=\dfrac15$ of the circle, so its area is
$$\frac15\times25\pi=5\pi.$$

So the area of the sector is $5\pi$, answer **A**. Option C is the area of the whole circle.
:::

## Coordinate geometry

For points $(x_1,y_1)$ and $(x_2,y_2)$: the **distance** is $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, the **midpoint** is $\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$ and the **slope** is $\dfrac{y_2-y_1}{x_2-x_1}$. Parallel lines have equal slopes; perpendicular lines have slopes whose product is $-1$. A circle with center $(h,k)$ and radius $r$ has equation $(x-h)^2+(y-k)^2=r^2$.

:::example Midpoint and distance
The endpoints of a segment are $(-2,5)$ and $(6,-1)$. What are the midpoint and the length of the segment?
A. $(4,4)$ and $10$
B. $(2,2)$ and $\sqrt{28}$
C. $(2,2)$ and $10$
D. $(4,-3)$ and $8$

**Solution.** The midpoint is
$$\left(\frac{-2+6}{2},\ \frac{5+(-1)}{2}\right)=(2,2).$$

The length is
$$\sqrt{(6-(-2))^2+(-1-5)^2}=\sqrt{64+36}=\sqrt{100}=10.$$

So the midpoint is $(2,2)$ and the length is $10$, answer **C**.
:::

:::example A perpendicular line
Which is the equation of the line through $(1,3)$ that is perpendicular to $y=2x+1$?
A. $y=2x+1$
B. $y=-\dfrac12x+\dfrac72$
C. $y=\dfrac12x+\dfrac52$
D. $y=-2x+5$

**Solution.** The given line has slope $2$, so a perpendicular line has slope $-\dfrac12$, because $2\times\left(-\dfrac12\right)=-1$.

The line through $(1,3)$ with slope $-\dfrac12$ is $y-3=-\dfrac12(x-1)$, that is
$$y=-\frac12x+\frac72.$$

So the equation is $y=-\dfrac12x+\dfrac72$, answer **B**. Option D uses $-2$ instead of $-\dfrac12$.
:::

## Right-triangle trigonometry

In a right triangle with acute angle $\theta$: $\sin\theta=\dfrac{\text{opposite}}{\text{hypotenuse}}$, $\cos\theta=\dfrac{\text{adjacent}}{\text{hypotenuse}}$, $\tan\theta=\dfrac{\text{opposite}}{\text{adjacent}}$. Know the values for $30^\circ$, $45^\circ$ and $60^\circ$, and that $\sin^2\theta+\cos^2\theta=1$.

:::example From sine to tangent
In a right triangle, $\sin\theta=\dfrac35$ for an acute angle $\theta$. What is $\tan\theta$?
A. $\dfrac45$
B. $\dfrac53$
C. $\dfrac43$
D. $\dfrac34$

**Solution.** Draw a right triangle with the side opposite $\theta$ equal to $3$ and the hypotenuse equal to $5$. By the Pythagorean theorem, the adjacent side is $\sqrt{25-9}=4$.

So
$$\tan\theta=\frac{\text{opposite}}{\text{adjacent}}=\frac34.$$

So $\tan\theta=\dfrac34$, answer **D**. Option A is $\cos\theta$.
:::

:::warning Common traps
- **Adding instead of subtracting** in the Pythagorean theorem when the hypotenuse is known.
- **Diameter or radius:** a question may give one and the formula needs the other.
- **Perpendicular slope:** take the negative reciprocal, not just the negative.
- **Sector fractions:** use $\dfrac{\theta}{360}$ for degrees.
- **Calculator mode:** ACT trigonometry questions use degrees unless radians are stated.
:::

:::terms
- hypotenuse, leg | cạnh huyền, cạnh góc vuông
- Pythagorean theorem | định lí Pythagoras
- similar triangles | tam giác đồng dạng
- circumference, arc, sector | chu vi đường tròn, cung, hình quạt
- midpoint, distance formula | trung điểm, công thức khoảng cách
- slope, perpendicular | hệ số góc, vuông góc
- sine, cosine, tangent | sin, cos, tan
- volume, cylinder, cone, sphere | thể tích, hình trụ, hình nón, hình cầu
:::

## Similar exercises

:::exercise
A right triangle has legs of lengths $8$ and $15$. Find the length of the hypotenuse.

::hint
**What you need:** $c^2=a^2+b^2$.

::solution
Let $c$ be the hypotenuse. By the Pythagorean theorem,
$$c^2=8^2+15^2=64+225=289.$$

Since $c>0$, we get $c=\sqrt{289}=17$.

So the hypotenuse has length $17$.

**Answer.** $17$.
:::

:::exercise
A circle has diameter $12$ cm. Find its circumference and its area, in terms of $\pi$.

::hint
**What you need:** the radius is half the diameter.

::solution
The radius is $r=\dfrac{12}{2}=6$ cm.

The circumference is $C=2\pi r=12\pi$ cm, and the area is $A=\pi r^2=36\pi$ cm².

So the circle has circumference $12\pi$ cm and area $36\pi$ cm².

**Answer.** $12\pi$ cm and $36\pi$ cm².
:::

:::exercise
Find the distance between the points $(1,-2)$ and $(4,2)$.

::hint
**What you need:** the distance formula.

::solution
The differences of the coordinates are $4-1=3$ and $2-(-2)=4$.

So the distance is
$$\sqrt{3^2+4^2}=\sqrt{25}=5.$$

So the two points are $5$ units apart.

**Answer.** $5$.
:::

:::exercise
Find the slope of the line $3x-2y=6$ and the slope of any line perpendicular to it.

::hint
**What you need:** rewrite the equation as $y=mx+b$.

::solution
Solving for $y$: $-2y=-3x+6$, so $y=\dfrac32x-3$. The slope is $\dfrac32$.

A perpendicular line has slope equal to the negative reciprocal, $-\dfrac23$, since $\dfrac32\times\left(-\dfrac23\right)=-1$.

So the slope of the line is $\dfrac32$ and the slope of a perpendicular line is $-\dfrac23$.

**Answer.** $\dfrac32$ and $-\dfrac23$.
:::

:::exercise
For an acute angle $\theta$, $\sin\theta=\dfrac{5}{13}$. Find $\cos\theta$ and $\tan\theta$.

::hint
**What you need:** a right triangle with opposite side $5$ and hypotenuse $13$.

::solution
In a right triangle with opposite side $5$ and hypotenuse $13$, the adjacent side is $\sqrt{169-25}=\sqrt{144}=12$.

Therefore $\cos\theta=\dfrac{12}{13}$ and $\tan\theta=\dfrac{5}{12}$.

So $\cos\theta=\dfrac{12}{13}$ and $\tan\theta=\dfrac{5}{12}$.

**Answer.** $\dfrac{12}{13}$ and $\dfrac{5}{12}$.
:::

## Application exercises

:::exercise
A wheelchair ramp rises $1.2$ m over a horizontal distance of $4$ m. Find the angle the ramp makes with the ground, to the nearest tenth of a degree.

::hint
**What you need:** $\tan\theta=\dfrac{\text{rise}}{\text{run}}$.

::solution
The rise and the horizontal distance are the opposite and adjacent sides of the angle $\theta$, so
$$\tan\theta=\frac{1.2}{4}=0.3.$$

Using a calculator in degree mode, $\theta=\tan^{-1}(0.3)\approx16.7^\circ$.

So the ramp makes an angle of about $16.7^\circ$ with the ground.

**Answer.** $16.7^\circ$.
:::

:::exercise
A pizzeria sells a large pizza with diameter $30$ cm, or two medium pizzas with diameter $20$ cm each, for the same price. Which choice gives more pizza?

::hint
**What you need:** compare areas, not diameters.

::solution
The large pizza has radius $15$ cm, so its area is $\pi(15)^2=225\pi$ cm².

Each medium pizza has radius $10$ cm and area $\pi(10)^2=100\pi$ cm², so two of them give $200\pi$ cm².

Since $225\pi>200\pi$, the large pizza has more area.

So one large pizza gives more pizza than two medium ones.

**Answer.** The large pizza.
:::

:::exercise
A cylindrical water tank has radius $0.5$ m and height $1.2$ m. How many liters does it hold? ($1$ m³ $=1000$ liters.)

::hint
**What you need:** $V=\pi r^2h$, then convert cubic meters to liters.

::solution
The volume of the tank is
$$V=\pi(0.5)^2(1.2)=0.3\pi\approx0.942\text{ m}^3.$$

Since $1$ m³ $=1000$ liters, the tank holds about $0.942\times1000=942$ liters.

So the tank holds about $942$ liters of water.

**Answer.** About $942$ liters.
:::

:::exercise Challenge
Find the center and the radius of the circle $x^2+y^2-6x+4y-12=0$.

::hint
**What you need:** complete the square in $x$ and in $y$.

::solution
Group the terms and complete the squares:
$$\left(x^2-6x+9\right)+\left(y^2+4y+4\right)=12+9+4,$$
that is $(x-3)^2+(y+2)^2=25$.

This is the equation of a circle with center $(3,-2)$ and radius $\sqrt{25}=5$.

So the circle has center $(3,-2)$ and radius $5$.

**Answer.** Center $(3,-2)$, radius $5$.
:::

:::quiz
::mc
What is the sum of the interior angles of a hexagon?
A. $540^\circ$
B. $360^\circ$
C. $1080^\circ$
D. $720^\circ$
::key D
$(6-2)\times180^\circ=720^\circ$.

::mc
A triangle has base $10$ and height $6$. What is its area?
A. $30$
B. $60$
C. $16$
D. $15$
::key A
$\dfrac12\times10\times6=30$.

::mc
What is the value of $\tan45^\circ$?
A. $\dfrac{\sqrt2}{2}$
B. $1$
C. $\sqrt3$
D. $\dfrac{\sqrt3}{3}$
::key B
In a right isosceles triangle, the opposite and adjacent sides are equal.

::mc
What is the volume of a cube with edge length $4$?
A. $16$
B. $48$
C. $64$
D. $96$
::key C
$4^3=64$. Option D is the surface area.

::tf
Consider the circle $(x-1)^2+(y+2)^2=9$. Decide whether each statement is true or false.
a) The center is $(1,-2)$.
b) The radius is $9$.
c) The circle passes through $(4,-2)$.
d) The area enclosed by the circle is $9\pi$.
::key T F T T
The radius is $\sqrt9=3$; the point $(4,-2)$ is $3$ units from the center; the area is $\pi(3)^2=9\pi$.

::sa
A right triangle has legs $6$ and $8$. Find the hypotenuse.
::key 10
$\sqrt{36+64}=10$.

::sa
Find the slope of the line through $(0,1)$ and $(2,7)$.
::key 3
$\dfrac{7-1}{2-0}=3$.
:::
