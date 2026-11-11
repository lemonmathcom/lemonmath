---
title: Area, volume, lines and angles
description: SAT Geometry: angles with parallel lines, angle sums in triangles and polygons, composite areas, volumes of solids and the effect of scaling.
minutes: 35
---

:::goals
- Use vertical angles, linear pairs and the angles formed by parallel lines and a transversal.
- Use the angle sum of a triangle and of a polygon.
- Find the area of composite figures and the volume and surface area of prisms, cylinders, cones and spheres.
- Predict how area and volume change when lengths are scaled.
:::

Geometry and Trigonometry has about 5 to 7 questions on the test. The formulas for area and volume are on the reference sheet in Bluebook, so the SAT does not test memory: it tests whether you can **choose** the right formula, break a figure into simple parts and set up an equation from an angle relationship. Many questions here are student-produced responses, so careful arithmetic matters.

## Lines and angles

:::note Angle facts
- Angles on a straight line add up to $180^\circ$; angles around a point add up to $360^\circ$.
- Vertical angles are equal.
- When a transversal crosses two **parallel** lines: corresponding angles are equal, alternate interior angles are equal, and same-side interior angles add up to $180^\circ$.
- The angles of a triangle add up to $180^\circ$; the interior angles of a polygon with $n$ sides add up to $(n-2)\cdot180^\circ$.
:::

:::example Parallel lines
Two parallel lines are cut by a transversal. Two alternate interior angles measure $(3x+10)^\circ$ and $(5x-30)^\circ$. What is the value of $x$?

**Solution.** Alternate interior angles are equal: $3x+10=5x-30\iff40=2x\iff x=20$. You type **20**. (Each angle measures $70^\circ$.)
:::

:::example A regular polygon
What is the measure of each interior angle of a regular hexagon?
A. $108^\circ$
B. $120^\circ$
C. $135^\circ$
D. $720^\circ$

**Solution.** The interior angles add up to $(6-2)\cdot180^\circ=720^\circ$, and a regular hexagon has 6 equal angles: $720^\circ\div6=120^\circ$. The answer is **B**. Option D is the sum, not one angle.
:::

## Area and composite figures

To find the area of a composite figure, split it into rectangles, triangles and circles, then add or subtract.

:::example A rectangle with a semicircle cut out
A garden is a rectangle 12 meters long and 8 meters wide. A semicircular pond with diameter 8 meters lies along one of the 8-meter sides, inside the garden. What is the area of the garden not covered by the pond, in square meters?
A. $96-16\pi$
B. $96-8\pi$
C. $96-32\pi$
D. $96-4\pi$

**Solution.** The rectangle has area $12\cdot8=96$. The pond is half a circle of radius $4$: $\dfrac12\pi\cdot4^2=8\pi$. The remaining area is $96-8\pi$: answer **B**. Option A uses the whole circle; option C uses the diameter as the radius.
:::

## Volume and surface area

:::theorem Volumes (on the reference sheet)
- Rectangular prism: $V=\ell wh$. Cylinder: $V=\pi r^2h$.
- Cone: $V=\dfrac13\pi r^2h$. Pyramid: $V=\dfrac13\ell wh$.
- Sphere: $V=\dfrac43\pi r^3$; its surface area is $4\pi r^2$.
:::

:::example A sphere
A sphere has volume $36\pi$ cubic centimeters. What is the radius of the sphere, in centimeters?

**Solution.** $\dfrac43\pi r^3=36\pi\iff r^3=27\iff r=3$. You type **3**. Its surface area is then $4\pi\cdot9=36\pi$ square centimeters.
:::

## Scaling

:::theorem Scale factor
If every length of a figure is multiplied by $k$, then its area is multiplied by $k^2$ and its volume by $k^3$.
:::

:::example Similar solids
Two similar solids have corresponding edges in the ratio $2:3$. The smaller solid has volume 40 cubic inches. What is the volume of the larger solid, in cubic inches?

**Solution.** The scale factor is $k=\dfrac32$, so the volume is multiplied by $\left(\dfrac32\right)^3=\dfrac{27}{8}$: $40\cdot\dfrac{27}{8}=135$. You type **135**.
:::

:::warning Common traps
- **Radius or diameter.** Read which one is given. Many wrong options use the diameter in $\pi r^2$.
- **Forgetting $\dfrac13$** in the volume of a cone or a pyramid.
- **Scaling linearly.** Doubling the radius of a circle multiplies its area by $4$, not $2$.
- **Answers in terms of $\pi$.** If the options contain $\pi$, keep $\pi$ as a symbol; do not multiply by $3.14$.
:::

:::tip Using the reference sheet
The reference sheet also states that a circle has $360^\circ$ or $2\pi$ radians and gives the special right triangles. Open it once before the test so you know exactly what it contains; on test day, open it only for the formula you need.
:::

:::terms
- parallel lines | hai đường thẳng song song
- transversal | đường thẳng cắt (cát tuyến)
- vertical angles | góc đối đỉnh
- alternate interior angles | góc so le trong
- corresponding angles | góc đồng vị
- interior angle | góc trong
- composite figure | hình ghép
- rectangular prism | hình hộp chữ nhật
- cylinder / cone / sphere | hình trụ / hình nón / hình cầu
- surface area | diện tích toàn phần (diện tích bề mặt)
- scale factor | tỉ số đồng dạng (hệ số tỉ lệ)
:::

## Similar exercises

:::exercise Student-produced response
Two angles form a linear pair. Their measures are $(2x+15)^\circ$ and $(4x-3)^\circ$. What is the value of $x$?

::hint
**What you need:** angles of a linear pair add up to $180^\circ$.

**Steps:**
1. $(2x+15)+(4x-3)=180$.
2. Solve for $x$.

::solution
$6x+12=180\iff x=28$. The angles are $71^\circ$ and $109^\circ$.
:::

:::exercise Student-produced response
The angles of a triangle are in the ratio $2:3:4$. What is the measure, in degrees, of the largest angle?

::hint
**What you need:** the angles add up to $180^\circ$, split into $2+3+4$ equal parts.

**Steps:**
1. One part is $180\div9$.
2. Multiply by $4$.

::solution
One part is $20^\circ$, so the largest angle is $80^\circ$.
:::

:::exercise Multiple choice
What is the measure of each interior angle of a regular octagon?
A. $120^\circ$
B. $135^\circ$
C. $140^\circ$
D. $1{,}080^\circ$

::hint
**What you need:** $(n-2)\cdot180^\circ$ with $n=8$.

**Steps:**
1. Compute the sum.
2. Divide by $8$.

::solution
$6\cdot180^\circ=1{,}080^\circ$, and $1{,}080^\circ\div8=135^\circ$: answer **B**.
:::

:::exercise Multiple choice
A cone has radius 4 centimeters and height 6 centimeters. What is its volume, in cubic centimeters?
A. $32\pi$
B. $96\pi$
C. $16\pi$
D. $48\pi$

::hint
**What you need:** $V=\dfrac13\pi r^2h$.

**Steps:**
1. $r^2=16$.
2. $\dfrac13\cdot16\cdot6$.

::solution
$\dfrac13\pi\cdot16\cdot6=32\pi$: answer **A**. Option B forgets the $\dfrac13$.
:::

:::exercise Multiple choice
The length and the width of a rectangle are both tripled. How does the area change?
A. It is tripled.
B. It is multiplied by 6.
C. It is multiplied by 9.
D. It is multiplied by 27.

::hint
**What you need:** area scales by $k^2$.

**Steps:**
1. $k=3$.

::solution
The area is multiplied by $3^2=9$: answer **C**. Option D is the factor for volume.
:::

## Application exercises

:::exercise Wrapping a box
A box is a rectangular prism 30 centimeters long, 20 centimeters wide and 10 centimeters high. What is its total surface area?

::hint
**What you need:** a prism has three pairs of equal rectangular faces.

**Steps:**
1. Compute $30\cdot20$, $30\cdot10$ and $20\cdot10$.
2. Add them and double.

::solution
$2(600+300+200)=2{,}200$ square centimeters.
:::

:::exercise An aquarium
An aquarium is 60 centimeters long, 40 centimeters wide and 30 centimeters high. It is filled with water to a depth of 25 centimeters. How many liters of water does it contain? (1 liter = 1,000 cubic centimeters)

::hint
**What you need:** the water forms a prism of height 25 centimeters.

**Steps:**
1. $60\cdot40\cdot25$ cubic centimeters.
2. Divide by $1{,}000$.

::solution
$60\cdot40\cdot25=60{,}000$ cubic centimeters, which is 60 liters.
:::

:::exercise A running track
A circular track has an inner radius of 30 meters and an outer radius of 35 meters. What is the area of the track, to the nearest square meter?

::hint
**What you need:** area of the outer circle minus area of the inner circle.

**Steps:**
1. $\pi(35^2-30^2)$.
2. Round.

::solution
$\pi(1{,}225-900)=325\pi\approx1{,}021$ square meters.
:::

:::exercise Challenge
A sphere fits exactly inside a cube with volume 64 cubic centimeters, touching all six faces. What fraction of the cube's volume does the sphere fill? Give the exact value and a decimal rounded to the nearest hundredth.

::hint
**What you need:** the diameter of the sphere equals the edge of the cube.

**Steps:**
1. Edge $=4$, so radius $=2$.
2. Divide the volume of the sphere by $64$.

::solution
The sphere has volume $\dfrac43\pi\cdot8=\dfrac{32\pi}{3}$. The fraction is $\dfrac{32\pi}{3\cdot64}=\dfrac{\pi}{6}\approx0.52$. A sphere always fills $\dfrac{\pi}{6}$ of the cube around it, whatever its size.
:::

:::quiz
::mc
Two angles on a straight line measure $x^\circ$ and $3x^\circ$. What is the value of $x$?
A. $30$
B. $45$
C. $60$
D. $90$
::key B
$x+3x=180$, so $x=45$.

::mc
What is the volume of a cube with edge length 5?
A. $25$
B. $75$
C. $150$
D. $125$
::key D
$5^3=125$. Option A is the area of one face; option C is the surface area.

::mc
What is the area of a circle with diameter 10?
A. $10\pi$
B. $100\pi$
C. $25\pi$
D. $5\pi$
::key C
The radius is $5$, so the area is $25\pi$. Option B uses the diameter as the radius; option A is the circumference.

::mc
What is the sum of the interior angles of a pentagon?
A. $540^\circ$
B. $360^\circ$
C. $720^\circ$
D. $900^\circ$
::key A
$(5-2)\cdot180^\circ=540^\circ$.

::tf
A rectangular prism has edges 3, 4 and 12 centimeters.
a) Its volume is 144 cubic centimeters.
b) Its surface area is 192 square centimeters.
c) The distance between opposite corners (the space diagonal) is 13 centimeters.
d) If all edges are doubled, the volume is doubled.
::key T T T F
a) True: $3\cdot4\cdot12$. b) True: $2(12+36+48)=192$. c) True: $\sqrt{9+16+144}=13$. d) False: the volume is multiplied by $2^3=8$.

::sa
A cylinder has radius 2 and height 5. Its volume is $k\pi$. What is the value of $k$?
::key 20
$\pi\cdot2^2\cdot5=20\pi$.

::sa
Two similar triangles have a scale factor of 3. The smaller triangle has area 6. What is the area of the larger triangle?
::key 54
The area is multiplied by $3^2=9$: $6\cdot9=54$.
:::
