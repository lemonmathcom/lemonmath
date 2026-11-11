---
title: Triangles, trigonometry and circles
description: SAT Geometry and Trigonometry: Pythagoras, special right triangles, similar triangles, sine, cosine and tangent, radians, arcs, sectors and circle equations.
minutes: 40
---

:::goals
- Use the Pythagorean theorem and the special right triangles $30^\circ$–$60^\circ$–$90^\circ$ and $45^\circ$–$45^\circ$–$90^\circ$.
- Use similar triangles to find unknown lengths.
- Use sine, cosine and tangent in right triangles, and the identity $\sin x^\circ=\cos(90-x)^\circ$.
- Work with radians, arc length, sector area and the equation of a circle.
:::

This lesson covers the harder half of the Geometry and Trigonometry domain. Vietnamese students know the trigonometric ratios from grade 9, but the SAT also uses radians and the circle equation $(x-h)^2+(y-k)^2=r^2$, which in Vietnam come in grade 10 and 11. The reference sheet in Bluebook gives the special right triangles; everything else in this lesson you should know by heart.

## Right triangles

:::theorem Pythagoras and the special right triangles
- In a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2+b^2=c^2$.
- $45^\circ$–$45^\circ$–$90^\circ$: the sides are in the ratio $1:1:\sqrt2$.
- $30^\circ$–$60^\circ$–$90^\circ$: the sides are in the ratio $1:\sqrt3:2$ (the shortest side is opposite $30^\circ$).
- Common Pythagorean triples: $3, 4, 5$; $5, 12, 13$; $8, 15, 17$ and their multiples.
:::

:::example A 30–60–90 triangle
In a right triangle, one angle measures $30^\circ$ and the hypotenuse has length 10. What is the length of the side opposite the $60^\circ$ angle?
A. $5$
B. $5\sqrt2$
C. $5\sqrt3$
D. $10\sqrt3$

**Solution.** The sides are in the ratio $1:\sqrt3:2$, and the hypotenuse $2$ corresponds to $10$, so each "unit" is $5$. The side opposite $60^\circ$ is $5\sqrt3$: answer **C**. Option A is the side opposite $30^\circ$.
:::

## Similar triangles

Two triangles are **similar** when their angles are equal; then their corresponding sides are proportional. A line parallel to one side of a triangle cuts off a smaller similar triangle.

:::example A parallel segment
In triangle $ABC$, point $D$ lies on $\overline{AB}$ and point $E$ lies on $\overline{AC}$, with $\overline{DE}$ parallel to $\overline{BC}$. If $AD=4$, $DB=6$ and $DE=5$, what is the length of $\overline{BC}$?

**Solution.** Triangles $ADE$ and $ABC$ are similar, with $AB=4+6=10$. So $\dfrac{BC}{DE}=\dfrac{AB}{AD}$: $BC=5\cdot\dfrac{10}{4}=12.5$. You type **12.5**. The trap is to use $\dfrac{DB}{AD}$ instead of $\dfrac{AB}{AD}$.
:::

## Trigonometric ratios

:::theorem Sine, cosine and tangent
For an acute angle $\theta$ of a right triangle:
$$\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},\qquad\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},\qquad\tan\theta=\frac{\text{opposite}}{\text{adjacent}}.$$
The two acute angles of a right triangle add up to $90^\circ$, so $\sin x^\circ=\cos(90-x)^\circ$.
:::

:::example Complementary angles
For an angle with $0<x<90$, $\sin x^\circ=\cos32^\circ$. What is the value of $x$?

**Solution.** $\sin x^\circ=\cos(90-x)^\circ$, so $90-x=32$ and $x=58$. You type **58**.
:::

:::example A ratio from the sides
In right triangle $PQR$, the right angle is at $R$, $PR=8$, $QR=15$ and $PQ=17$. What is $\tan Q$?
A. $\dfrac{8}{15}$
B. $\dfrac{15}{8}$
C. $\dfrac{8}{17}$
D. $\dfrac{15}{17}$

**Solution.** The side opposite $Q$ is $PR=8$ and the side adjacent to $Q$ (not the hypotenuse) is $QR=15$: $\tan Q=\dfrac{8}{15}$. The answer is **A**. Option B is $\tan P$; option C is $\sin Q$.
:::

## Radians, arcs and circles

:::theorem Radians and arcs
$180^\circ=\pi$ radians. In a circle of radius $r$, a central angle of $\theta$ radians cuts off an arc of length $s=r\theta$ and a sector of area $\dfrac12r^2\theta$. In degrees: arc $=\dfrac{\theta}{360}\cdot2\pi r$, sector $=\dfrac{\theta}{360}\cdot\pi r^2$.
:::

:::example An arc length
A circle has radius 6. What is the length of the arc cut off by a central angle of $\dfrac{2\pi}{3}$ radians?
A. $2\pi$
B. $4\pi$
C. $12\pi$
D. $\dfrac{\pi}{9}$

**Solution.** $s=r\theta=6\cdot\dfrac{2\pi}{3}=4\pi$. The answer is **B**. Option C is the area of the sector, $\dfrac12\cdot36\cdot\dfrac{2\pi}{3}$.
:::

The circle with center $(h, k)$ and radius $r$ has equation $(x-h)^2+(y-k)^2=r^2$. If the equation is expanded, complete the square in $x$ and in $y$.

:::example Finding the radius
The equation of a circle in the $xy$-plane is $x^2+y^2-6x+4y-12=0$. What is the radius of the circle?

**Solution.** Group and complete the squares:

$$(x^2-6x+9)+(y^2+4y+4)=12+9+4\iff(x-3)^2+(y+2)^2=25.$$

The center is $(3, -2)$ and the radius is $5$. You type **5**.
:::

:::graph The circle $(x-3)^2+(y+2)^2=25$
alt: A circle with center at (3, -2) and radius 5, passing through (8, -2) and (3, 3)
x: -4..10
y: -9..5
plot: -2 + sqrt(25 - (x-3)^2) ; -2..8
plot: -2 - sqrt(25 - (x-3)^2) ; -2..8
point: (3, -2) "(3, -2)" below
segment: (3, -2) (8, -2)
label: (5.5, -1.4) "r = 5"
:::

:::warning Common traps
- **The wrong side as "opposite".** Opposite and adjacent depend on which angle you look from; the hypotenuse is always opposite the right angle.
- **Signs in the circle equation.** $(x+4)^2+(y-1)^2=9$ has center $(-4, 1)$, not $(4, -1)$.
- **$r^2$ versus $r$.** In $(x-3)^2+(y+2)^2=25$ the radius is $5$, not $25$.
- **Degrees or radians.** Check the question. On a calculator, check the mode; in Desmos, check the settings.
:::

:::tip Trigonometry in Desmos
Desmos works in radians by default; switch to degrees with the wrench icon before typing `sin(30)`. To check a circle, type the equation exactly as given: Desmos draws it and shows the center if you also type the completed-square form.
:::

:::terms
- hypotenuse | cạnh huyền
- leg | cạnh góc vuông
- Pythagorean theorem | định lí Pythagore
- similar triangles | tam giác đồng dạng
- sine / cosine / tangent | sin / côsin / tang
- complementary angles | hai góc phụ nhau
- radian | radian
- arc length | độ dài cung
- sector | hình quạt
- center / radius | tâm / bán kính
:::

## Similar exercises

:::exercise Multiple choice
In an isosceles right triangle, each leg has length 7. What is the length of the hypotenuse?
A. $7$
B. $14$
C. $7\sqrt3$
D. $7\sqrt2$

::hint
**What you need:** a $45^\circ$–$45^\circ$–$90^\circ$ triangle has sides in the ratio $1:1:\sqrt2$.

**Steps:**
1. Multiply the leg by $\sqrt2$.

::solution
The hypotenuse is $7\sqrt2$: answer **D**. Check with Pythagoras: $49+49=98=(7\sqrt2)^2$.
:::

:::exercise Student-produced response
A pole 2 meters tall casts a shadow 3 meters long. At the same time, a tree casts a shadow 18 meters long. How tall is the tree, in meters?

::hint
**What you need:** the sun's rays make similar triangles.

**Steps:**
1. $\dfrac{h}{18}=\dfrac{2}{3}$.

::solution
$h=18\cdot\dfrac23=12$ meters.
:::

:::exercise Student-produced response
For an angle with $0<x<90$, $\cos x^\circ=\sin20^\circ$. What is the value of $x$?

::hint
**What you need:** $\cos x^\circ=\sin(90-x)^\circ$.

**Steps:**
1. Set $90-x=20$.

::solution
$x=70$.
:::

:::exercise Multiple choice
In right triangle $ABC$ with the right angle at $C$, $\sin A=\dfrac35$. What is $\cos B$?
A. $\dfrac45$
B. $\dfrac34$
C. $\dfrac35$
D. $\dfrac43$

::hint
**What you need:** $A$ and $B$ are complementary.

**Steps:**
1. The side opposite $A$ is the side adjacent to $B$.

::solution
$\cos B=\sin A=\dfrac35$: answer **C**. Option A is $\cos A$ (and $\sin B$).
:::

:::exercise Multiple choice
What is the center of the circle $x^2+y^2+8x-2y+8=0$?
A. $(4, -1)$
B. $(-4, 1)$
C. $(8, -2)$
D. $(-8, 2)$

::hint
**What you need:** complete the square in $x$ and in $y$.

**Steps:**
1. $x^2+8x=(x+4)^2-16$, $y^2-2y=(y-1)^2-1$.

::solution
$(x+4)^2+(y-1)^2=16+1-8=9$. The center is $(-4, 1)$ and the radius is $3$: answer **B**.
:::

## Application exercises

:::exercise A ladder
A 13-foot ladder leans against a vertical wall. Its foot is 5 feet from the wall. How high up the wall does the ladder reach?

::hint
**What you need:** Pythagoras, or the triple $5, 12, 13$.

**Steps:**
1. $h^2=13^2-5^2$.

::solution
$h^2=169-25=144$, so $h=12$ feet.
:::

:::exercise A ramp
A ramp 10 meters long rises at an angle of $6^\circ$ to the horizontal. How much does the ramp rise, to the nearest hundredth of a meter?

::hint
**What you need:** the rise is opposite the angle, the ramp is the hypotenuse.

**Steps:**
1. Rise $=10\sin6^\circ$ (calculator in degree mode).

::solution
$10\sin6^\circ\approx10\cdot0.1045=1.05$ meters.
:::

:::exercise A slice of pizza
A pizza has radius 20 centimeters and is cut into 8 equal slices. What is the area of one slice, and the length of its curved edge? Give exact answers and decimals to one decimal place.

::hint
**What you need:** each slice is a sector with a central angle of $45^\circ$.

**Steps:**
1. Area $=\dfrac{45}{360}\cdot\pi\cdot20^2$.
2. Arc $=\dfrac{45}{360}\cdot2\pi\cdot20$.

::solution
Area $=\dfrac18\cdot400\pi=50\pi\approx157.1$ square centimeters. Arc $=\dfrac18\cdot40\pi=5\pi\approx15.7$ centimeters.
:::

:::exercise Challenge
The point $(5, k)$, with $k>0$, lies on the circle $(x-2)^2+(y-1)^2=25$. What is the value of $k$?

::hint
**What you need:** substitute the point into the equation.

**Steps:**
1. $9+(k-1)^2=25$.
2. Keep the positive value.

::solution
$(k-1)^2=16$, so $k-1=4$ or $k-1=-4$, giving $k=5$ or $k=-3$. Since $k>0$, $k=5$. The two points $(5, 5)$ and $(5, -3)$ are symmetric about the horizontal line through the center.
:::

:::quiz
::mc
A right triangle has legs 6 and 8. What is the length of the hypotenuse?
A. $10$
B. $14$
C. $48$
D. $7$
::key A
$\sqrt{36+64}=10$. Option B adds the legs.

::mc
What is $90^\circ$ in radians?
A. $\pi$
B. $2\pi$
C. $\dfrac{\pi}{2}$
D. $\dfrac{\pi}{4}$
::key C
$90^\circ=\dfrac{90}{180}\pi=\dfrac{\pi}{2}$.

::mc
What is the value of $\sin30^\circ$?
A. $\dfrac{\sqrt3}{2}$
B. $1$
C. $\dfrac{\sqrt2}{2}$
D. $\dfrac12$
::key D
In a $30^\circ$–$60^\circ$–$90^\circ$ triangle, the side opposite $30^\circ$ is half the hypotenuse.

::mc
What are the center and the radius of the circle $(x+1)^2+(y-4)^2=49$?
A. Center $(1, -4)$, radius $7$
B. Center $(-1, 4)$, radius $7$
C. Center $(-1, 4)$, radius $49$
D. Center $(1, 4)$, radius $7$
::key B
$x+1=x-(-1)$, so $h=-1$; $k=4$; $r=\sqrt{49}=7$.

::tf
In right triangle $ABC$, the right angle is at $C$, $BC=5$, $AC=12$ and $AB=13$.
a) $\sin A=\dfrac{5}{13}$.
b) $\cos A=\dfrac{12}{13}$.
c) $\tan A=\dfrac{12}{5}$.
d) $\sin A=\cos B$.
::key T T F T
a) True: the side opposite $A$ is $BC=5$. b) True. c) False: $\tan A=\dfrac{5}{12}$. d) True: $A$ and $B$ are complementary.

::sa
A circle has radius 9. The arc cut off by a central angle of $40^\circ$ has length $k\pi$. What is the value of $k$?
::key 2
$\dfrac{40}{360}\cdot2\pi\cdot9=2\pi$.

::sa
For an angle with $0<x<90$, $\sin x^\circ=\cos25^\circ$. What is the value of $x$?
::key 65
$90-x=25$, so $x=65$.
:::
