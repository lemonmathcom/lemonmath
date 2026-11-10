---
title: Spheres
description: Recognise spheres and their cross-sections, and use the formulae for the surface area and volume of a sphere in real-life problems.
minutes: 20
---

:::goals
- Recognise a sphere, its centre and radius, a great circle and the cross-section of a sphere by a plane.
- Use the formulae for the surface area $S=4\pi R^2$ and the volume $V=\dfrac43\pi R^3$ of a sphere.
- Solve real-life problems combining spheres with cylinders and cones.
:::

Archimedes (287–212 BC) made a great many discoveries, but he regarded his result on the sphere and the cylinder as the most important: the volume of a sphere is $\dfrac23$ of the volume of the cylinder circumscribed about it, and the surface area of the sphere is also $\dfrac23$ of the total surface area of that cylinder. He wanted a sphere inside a cylinder carved on his tomb; around 75 BC, Cicero found the tomb thanks to that figure (according to MacTutor, University of St Andrews).

From footballs to the Earth, spheres are everywhere. How much material covers a ball? How much metal is in a ball bearing? This lesson answers with Archimedes' discovery.

## The sphere and its cross-sections

Turn a semicircle with centre $O$ and radius $R$ through one full turn about its fixed diameter, and we get a **sphere** with centre $O$ and radius $R$. The semicircular arc sweeps out the **surface of the sphere**: every point of the surface is exactly $R$ from $O$.

:::diagram A sphere with centre $O$ and radius $R$
alt: A sphere with centre O and radius R, with a horizontal great circle drawn as an ellipse whose back half is dashed
point P0 3.000,0.000 ""
point P1 2.598,0.400 ""
point P2 1.500,0.693 ""
point P3 0.000,0.800 ""
point P4 -1.500,0.693 ""
point P5 -2.598,0.400 ""
point P6 -3.000,0.000 ""
point P7 -2.598,-0.400 ""
point P8 -1.500,-0.693 ""
point P9 -0.000,-0.800 ""
point P10 1.500,-0.693 ""
point P11 2.598,-0.400 ""
segment P0 P1 dashed
segment P1 P2 dashed
segment P2 P3 dashed
segment P3 P4 dashed
segment P4 P5 dashed
segment P5 P6 dashed
segment P6 P7
segment P7 P8
segment P8 P9
segment P9 P10
segment P10 P11
segment P11 P0
point O 0,0 above
point A 3,0 right
circle O 3
segment O A
label 1.5,0.25 "R"
:::

### Explore: cutting a sphere with a plane

Imagine cutting a sphere (say, a nearly round orange) with one straight cut: the cut face is a disc. A cut through the centre gives the largest disc, of radius $R$: its boundary is a **great circle** (like the Earth's equator). A cut at distance $d$ from the centre ($d<R$) gives a disc of radius $r=\sqrt{R^2-d^2}$, by Pythagoras' theorem in the triangle $OHM$, right-angled at $H$.

:::diagram A cross-section at distance $d=OH$ from the centre $O$
alt: Side view: a circle with centre O and radius R, a horizontal chord at distance d from O, half of the chord equal to r
point O 0,0 below
point H 0,3 above-left
point M 4,3 right
point N -4,3 ""
circle O 5
segment N M
segment O H dashed
segment O M
right O H M
label -0.4,1.5 "d"
label 2,3.4 "r"
label 2.4,1.2 "R"
:::

:::example The cross-section of a ball
A ball has radius $13$ cm. It is cut by a plane at distance $5$ cm from the centre. Find the radius and the area of the cross-section.

**Solution.** Let $H$ be the centre of the cross-section and $M$ a point on its boundary circle. In the triangle $OHM$, right-angled at $H$, Pythagoras' theorem gives

$$r=HM=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

Hence the area of the cross-section is $\pi\cdot12^2=144\pi\approx452.39$ (cm²).

So the cross-section is a disc of radius $12$ cm with area about $452.39$ cm².
:::

## Surface area and volume of a sphere

The cylinder circumscribed about a sphere of radius $R$ has base radius $R$ and height $2R$. Its curved surface area is $2\pi R\cdot2R=4\pi R^2$ and its volume is $\pi R^2\cdot2R=2\pi R^3$. Archimedes proved that the surface area of the sphere equals exactly the curved surface area of the circumscribed cylinder, and that the volume of the sphere is $\dfrac23$ of the volume of that cylinder.

:::theorem Sphere with radius $R$
$$S=4\pi R^2,\qquad V=\frac43\pi R^3.$$
:::

**A deeper look.** $S=4\pi R^2$ means the surface of a sphere has exactly the area of $4$ great-circle discs. *Activity:* draw $4$ discs with the same radius as an orange, peel the orange in small pieces, try to cover the discs with them and compare with the formula (an orange is not a perfect sphere, so the result is only approximate). The volume is proportional to $R^3$: doubling the radius multiplies the volume by $8$.

:::example Finding the surface area and volume
Find the surface area and the volume of a sphere with radius $3$ cm.

**Solution.** We have

$$S=4\pi\cdot3^2=36\pi\approx113.10\ \text{(cm}^2),\qquad V=\frac43\pi\cdot3^3=36\pi\approx113.10\ \text{(cm}^3).$$

So $S=36\pi$ cm² and $V=36\pi$ cm³.

**Remark.** The two numbers being equal is a coincidence of $R=3$: from $4\pi R^2=\dfrac43\pi R^3$ we get $R=3$. Area and volume have different units, so they cannot really be "compared".
:::

:::example Application: a football
By Law 2 of the IFAB Laws of the Game, a match ball has a circumference between $68$ cm and $70$ cm. Suppose a ball has a great-circle circumference of $69$ cm. Find the area of the cover of the ball and the volume of air inside (ignore the thickness of the cover; give your answers to the nearest whole number).

**Solution.**

*Understand.* We know the great-circle circumference $C=69$ cm; we need $S$ and $V$.

*Plan.* From $C=2\pi R$ find $R$, then use the two formulae.

*Solve.* We have $R=\dfrac{69}{2\pi}\approx10.98$ (cm). Hence

$$S=4\pi R^2=\frac{C^2}{\pi}=\frac{69^2}{\pi}\approx1515\ \text{(cm}^2),\qquad V=\frac43\pi R^3\approx5547\ \text{(cm}^3).$$

So the cover has an area of about $1515$ cm², and the ball holds about $5547$ cm³ (nearly $5.5$ litres) of air.

*Look back.* The formula $S=\dfrac{C^2}{\pi}$ works straight from a tape-measure reading, without rounding $R$ half-way (early rounding causes errors). For $C=68$ cm and $C=70$ cm the areas are about $1472$ cm² and $1560$ cm²: a small difference in circumference makes a difference of about $6\%$ in area.
:::

:::example Application: the Earth
Take the Earth to be a sphere with radius $6371$ km (the mean radius, according to NASA). Find the length of the equator (taken as a great circle) and the surface area of the Earth.

**Solution.** The length of a great circle is

$$C=2\pi\cdot6371\approx40\,030\ \text{(km)}.$$

The surface area is $S=4\pi\cdot6371^2\approx510\,064\,472$ (km²), that is, about $5.1\cdot10^8$ km².

So the equator is about $40\,030$ km long and the surface area of the Earth is about $5.1\cdot10^8$ km².
:::

:::warning Common mistakes
- **Using the diameter instead of the radius.** A ball with diameter $22$ cm has $R=11$ cm.
- **Mixing up the two formulae.** Area has $R^2$ (units cm²), volume has $R^3$ (units cm³). Wrong: $V=4\pi R^2$.
- **Thinking that doubling the radius doubles the volume.** Right: the volume is multiplied by $2^3=8$ and the area by $2^2=4$.
:::

**Connections.** The sphere completes the chapter on solids in real life: the cylinder, the cone and the sphere all arise by turning a flat shape about an axis. Cross-sections use Pythagoras' theorem just like chords in [Arcs and chords](lesson:arcs-and-chords). The three volume formulae are beautifully linked: with the same radius $R$ and height $2R$, $V_{\text{cone}}:V_{\text{sphere}}:V_{\text{cylinder}}=1:2:3$ (lesson [Cylinders and cones](lesson:cylinders-and-cones)).

## Key terms

:::terms
- sphere (solid ball) | hình cầu
- surface of a sphere | mặt cầu
- centre, radius | tâm, bán kính
- great circle | đường tròn lớn
- cross-section | mặt cắt
- hemisphere | nửa hình cầu
- circumscribed cylinder | hình trụ ngoại tiếp
:::

## Summary

- A sphere is formed by turning a semicircle about its diameter.
- A plane at distance $d<R$ from the centre cuts the sphere in a disc of radius $\sqrt{R^2-d^2}$; through the centre it gives a great circle.
- $S=4\pi R^2$ (four great-circle discs); $V=\dfrac43\pi R^3$.
- A sphere is $\dfrac23$ of its circumscribed cylinder (both volume and total surface area).

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the surface area and the volume of a sphere with radius $5$ cm (give your answers to 2 decimal places).

::hint
**What you need:** $S=4\pi R^2$, $V=\dfrac43\pi R^3$.

**Steps:**
1. Substitute $R=5$.

::solution
We have $S=4\pi\cdot5^2=100\pi\approx314.16$ (cm²) and $V=\dfrac43\pi\cdot5^3=\dfrac{500\pi}{3}\approx523.60$ (cm³).

So $S\approx314.16$ cm² and $V\approx523.60$ cm³.

**Answer.** $100\pi\approx314.16$ cm²; $\dfrac{500\pi}{3}\approx523.60$ cm³.
:::

:::exercise
A sphere has diameter $12$ cm. Find its surface area and volume (leave your answers in terms of $\pi$).

::hint
**What you need:** $R=\dfrac{d}{2}$.

**Steps:**
1. Find $R=6$ cm, then substitute into both formulae.

::solution
We have $R=6$ cm, so $S=4\pi\cdot6^2=144\pi$ (cm²) and $V=\dfrac43\pi\cdot6^3=288\pi$ (cm³).

So $S=144\pi$ cm² and $V=288\pi$ cm³.

**Answer.** $144\pi$ cm²; $288\pi$ cm³.
:::

:::exercise
The surface of a sphere has area $64\pi$ cm². Find the radius and the volume of the sphere.

::hint
**What you need:** $4\pi R^2=S$.

**Steps:**
1. Solve $4\pi R^2=64\pi$ with $R>0$.
2. Find $V$.

::solution
We have $4\pi R^2=64\pi$, so $R^2=16$ and $R=4$ (because $R>0$). Hence $V=\dfrac43\pi\cdot4^3=\dfrac{256\pi}{3}\approx268.08$ (cm³).

So $R=4$ cm and $V=\dfrac{256\pi}{3}$ cm³.

**Answer.** $R=4$ cm; $V=\dfrac{256\pi}{3}$ cm³.
:::

:::exercise
A metal ball with radius $6$ cm is melted down and cast into spherical ball bearings with radius $2$ cm. Ignoring any loss, how many ball bearings can be made?

::hint
**What you need:** the volume of metal does not change; $V$ is proportional to $R^3$.

**Steps:**
1. Find the ratio of the two volumes.

::solution
The number of ball bearings is the ratio of the two volumes:

$$\frac{\frac43\pi\cdot6^3}{\frac43\pi\cdot2^3}=\left(\frac62\right)^3=27.$$

So $27$ ball bearings can be made.

**Answer.** $27$ ball bearings.
:::

:::exercise
Suppose an ice-cream cone consists of a conical wafer with base radius $3$ cm and height $10$ cm, filled with ice cream, topped by a hemisphere of ice cream with radius $3$ cm. Find the volume of ice cream (give your answer to 2 decimal places). (Revise [cones](lesson:cylinders-and-cones).)

::hint
**What you need:** $V_{\text{cone}}=\dfrac13\pi r^2h$; a hemisphere has volume $\dfrac23\pi R^3$.

**Steps:**
1. Find both volumes and add them.

::solution
We have $V_{\text{cone}}=\dfrac13\pi\cdot3^2\cdot10=30\pi$ (cm³) and $V_{\text{hemisphere}}=\dfrac23\pi\cdot3^3=18\pi$ (cm³). Hence the volume of ice cream is $30\pi+18\pi=48\pi\approx150.80$ (cm³).

So the cone holds about $150.80$ cm³ of ice cream.

**Answer.** $48\pi\approx150.80$ cm³.
:::

:::exercise
A spherical balloon is blown up from radius $10$ cm to radius $20$ cm. By what factor do the surface area of the balloon and the volume of air inside increase?

::hint
**What you need:** $S$ is proportional to $R^2$, and $V$ to $R^3$.

**Steps:**
1. Find the ratios $\dfrac{S_2}{S_1}$ and $\dfrac{V_2}{V_1}$.

::solution
We have $\dfrac{S_2}{S_1}=\dfrac{4\pi\cdot20^2}{4\pi\cdot10^2}=4$ and $\dfrac{V_2}{V_1}=\dfrac{\frac43\pi\cdot20^3}{\frac43\pi\cdot10^3}=8$.

So the area is multiplied by $4$ and the volume by $8$.

**Answer.** $4$ times; $8$ times.
:::

:::exercise
**(1.5 marks)** Suppose a cylindrical tube holds exactly $3$ table-tennis balls stacked on top of each other, each with diameter $4$ cm (the balls touch the side, the bottom and the lid of the tube).

a) Find the base radius and the height of the tube.

b) Find the volume of the tube and the total volume of the three balls (leave your answers in terms of $\pi$).

c) What percentage of the volume of the tube is empty space (give your answer to 1 decimal place)?

::hint
**What you need:** $V_{\text{cylinder}}=\pi r^2h$; $V_{\text{sphere}}=\dfrac43\pi R^3$.

**Steps:**
1. a) The base radius equals the radius of a ball; the height is $3$ diameters.
2. c) Divide the empty space by the volume of the tube.

::solution
a) The tube has base radius $r=2$ cm and height $h=3\cdot4=12$ (cm).

b) We have $V_{\text{tube}}=\pi\cdot2^2\cdot12=48\pi$ (cm³) and $V_{\text{balls}}=3\cdot\dfrac43\pi\cdot2^3=32\pi$ (cm³).

c) The empty space is $48\pi-32\pi=16\pi$ (cm³), which is $\dfrac{16\pi}{48\pi}=\dfrac13\approx33.3\%$ of the volume of the tube.

So a) $r=2$ cm, $h=12$ cm; b) $48\pi$ cm³ and $32\pi$ cm³; c) about $33.3\%$.

**Answer.** a) $2$ cm, $12$ cm; b) $48\pi$ cm³, $32\pi$ cm³; c) $\approx33.3\%$.
:::

:::exercise Challenge
Two parallel planes $7$ cm apart cut a sphere with centre $O$ in two discs with radii $3$ cm and $4$ cm; the centre $O$ lies between the two planes. Find the radius $R$ of the sphere. (Revise [equations reducible to linear equations](lesson:equations-reducible-to-linear).)

::hint
**What you need:** the distance from $O$ to a cross-section of radius $r$ is $d=\sqrt{R^2-r^2}$.

**Steps:**
1. Let $d_1$, $d_2$ be the distances from $O$ to the two cross-sections; then $d_1+d_2=7$.
2. Write $R^2=d_1^2+9=d_2^2+16$ and substitute $d_1=7-d_2$.

::solution
Let $d_1$, $d_2$ (cm) be the distances from $O$ to the cross-sections with radii $3$ cm and $4$ cm. Since $O$ lies between the two planes, $d_1+d_2=7$. By Pythagoras' theorem,

$$R^2=d_1^2+3^2=d_2^2+4^2.$$

Substituting $d_1=7-d_2$, we get $(7-d_2)^2+9=d_2^2+16$, so $49-14d_2=7$, $d_2=3$ and $d_1=4$. Hence $R=\sqrt{3^2+4^2}=5$ (cm).

So the radius of the sphere is $5$ cm.

**Answer.** $R=5$ cm.
:::

## Mini test

:::quiz
::mc
The surface area of a sphere with radius $2$ cm is
A. $8\pi$ cm².
B. $16\pi$ cm².
C. $\dfrac{32\pi}{3}$ cm².
D. $4\pi$ cm².
::key B
$S=4\pi\cdot2^2=16\pi$. A uses $4\pi R$ (forgets to square), C is the volume, and D is the area of one great-circle disc.

::mc
The volume of a sphere with radius $3$ cm is
A. $108\pi$ cm³.
B. $12\pi$ cm³.
C. $36\pi$ cm³.
D. $27\pi$ cm³.
::key C
$V=\dfrac43\pi\cdot27=36\pi$. A forgets the $\dfrac13$, B uses $R^2$ instead of $R^3$, and D forgets the factor $\dfrac43$.

::mc
A plane is $3$ cm from the centre of a sphere with radius $5$ cm. The cross-section is a disc of radius
A. $4$ cm.
B. $2$ cm.
C. $8$ cm.
D. $\sqrt{34}$ cm.
::key A
$\sqrt{25-9}=4$. B takes $5-3$, C takes $5+3$, and D adds under the root.

::mc
If the radius of a sphere is doubled, its volume is multiplied by
A. $2$.
B. $4$.
C. $6$.
D. $8$.
::key D
$V$ is proportional to $R^3$, and $2^3=8$. A treats $V$ as proportional to $R$, B is the ratio of the areas, and C works out $2\cdot3$ instead of $2^3$.

::tf
A sphere has radius $6$ cm. Decide whether each statement is true or false.
a) The surface area is $144\pi$ cm².
b) The volume is $288\pi$ cm³.
c) Each great circle has length $12\pi$ cm.
d) The circumscribed cylinder has twice the volume of the sphere.
::key T T T F
a) True: $4\pi\cdot36$. b) True: $\dfrac43\pi\cdot216$. c) True: $2\pi\cdot6$. d) False: the cylinder has volume $\pi\cdot36\cdot12=432\pi$, which is $1.5$ times as much.

::sa
The surface area of a sphere (in cm²) and its volume (in cm³) are the same number. Find the radius (in cm) of the sphere.
::key 3
$4\pi R^2=\dfrac43\pi R^3$, so $R=3$.

::sa
A metal ball with radius $4$ cm is melted down and cast into ball bearings with radius $1$ cm. Ignoring any loss, how many ball bearings can be made?
::key 64
The ratio of the volumes is $\left(\dfrac41\right)^3=64$.
:::
