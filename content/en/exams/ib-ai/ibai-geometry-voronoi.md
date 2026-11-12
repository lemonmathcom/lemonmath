---
title: Geometry, trigonometry and Voronoi diagrams
description: IB Maths AI: volume and surface area, the sine and cosine rules, bearings and elevation, and Voronoi diagrams with bisectors and nearest neighbours.
minutes: 50
---

:::goals
- Find volumes and surface areas of 3D shapes in context.
- Use right-angled trigonometry, the sine rule, the cosine rule and $\tfrac12ab\sin C$, including bearings and angles of elevation.
- Draw and interpret Voronoi diagrams: sites, cells, edges and vertices.
- Find the equation of a perpendicular bisector, use nearest-neighbour interpolation, and solve "largest empty circle" problems.
:::

A town has three fire stations. When a fire is reported, which station should go? Most of the time the answer is simply "the nearest one". If you shade every point of the map by its nearest station, the town splits into regions with straight borders. That picture is called a **Voronoi diagram**, and it is one of the most practical ideas in IB Maths AI.

This lesson puts it together with the geometry you already know: lengths, angles and volumes in real situations. You will see that Voronoi diagrams are built from one familiar object, the perpendicular bisector, so nothing here is truly new. What is new is using these tools to answer questions about the world.

## Volume, surface area and right-angled triangles

The formula booklet gives the volume and surface area of prisms, cylinders, pyramids, cones and spheres. In context, check the units: $1\text{ m}^3=1000$ litres and $1\text{ cm}^3=1$ ml.

In a right-angled triangle, $\sin\theta=\dfrac{\text{opp}}{\text{hyp}}$, $\cos\theta=\dfrac{\text{adj}}{\text{hyp}}$ and $\tan\theta=\dfrac{\text{opp}}{\text{adj}}$. An **angle of elevation** is measured up from the horizontal; an angle of depression is measured down from it.

:::example A water tank
A cylindrical tank has radius $1.2$ m and height $3$ m. How many litres of water does it hold when full?

**Solution.** The volume of a cylinder is $V=\pi r^2h=\pi(1.2)^2(3)\approx13.57\text{ m}^3$.

Since $1\text{ m}^3=1000$ litres, the tank holds about $13.57\times1000\approx13{,}600$ litres, to three significant figures.

So the full tank holds about $13{,}600$ litres.
:::

## Non-right-angled triangles and bearings

For any triangle with sides $a,b,c$ opposite angles $A,B,C$:
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad c^2=a^2+b^2-2ab\cos C,\qquad \text{Area}=\tfrac12ab\sin C.$$
Use the sine rule when you know a side and its opposite angle; use the cosine rule when you know two sides and the angle between them, or all three sides. A **bearing** is an angle measured clockwise from north, written with three digits, such as $040^\circ$.

:::example Two boats
Two boats leave a port. One sails $8$ km on a bearing of $040^\circ$, the other $11$ km on a bearing of $110^\circ$. How far apart are they?
A. $3.00$ km
B. $13.6$ km
C. $11.2$ km
D. $124.8$ km

**Solution.** The angle at the port between the two paths is $110^\circ-40^\circ=70^\circ$, and we know the two sides around it, so we use the cosine rule:
$$d^2=8^2+11^2-2(8)(11)\cos70^\circ\approx124.8,\qquad d\approx11.2\text{ km}.$$

So the boats are about $11.2$ km apart, answer **C**. Option D forgets the square root.
:::

## Voronoi diagrams

A Voronoi diagram divides the plane around a set of points called **sites**. Each **cell** contains all the points closer to its site than to any other site. The **edges** between two cells lie on the **perpendicular bisector** of the two sites, and a **vertex** where three cells meet is the same distance from all three sites.

To find the perpendicular bisector of $P(x_1,y_1)$ and $Q(x_2,y_2)$: find the midpoint, find the gradient $m$ of $PQ$, then use the gradient $-\dfrac1m$ through the midpoint.

:::graph Voronoi diagram for the sites $A(0, 0)$, $B(6, 0)$ and $C(2, 6)$
alt: Three sites A, B and C with three edges meeting at the vertex V at (3, 2.33); one edge goes straight down along x = 3, one goes left and up, one goes right and up
x: -1..8
y: -1..7
shape: equal
segment: (3, 2.333) (3, -1)
segment: (3, 2.333) (-1, 3.667)
segment: (3, 2.333) (8, 5.667)
point: (0, 0) "A" below-right
point: (6, 0) "B" below-left
point: (2, 6) "C" right
point: (3, 2.333) "V" right
:::

:::example Finding an edge and a vertex
For the sites $A(0, 0)$, $B(6, 0)$ and $C(2, 6)$, find the equation of the edge between the cells of $A$ and $C$, and the coordinates of the vertex $V$.

**Solution.** The edge between $A$ and $B$ is the perpendicular bisector of $AB$, the vertical line $x=3$.

For $A$ and $C$: the midpoint is $(1, 3)$ and the gradient of $AC$ is $\dfrac{6}{2}=3$, so the bisector has gradient $-\dfrac13$:
$$y-3=-\frac13(x-1),\qquad y=-\frac13x+\frac{10}{3}.$$

The vertex lies on both bisectors, so $x=3$ and $y=-1+\dfrac{10}{3}=\dfrac73\approx2.33$.

So the edge between $A$ and $C$ is $y=-\dfrac13x+\dfrac{10}{3}$, and the vertex is $V\left(3,\dfrac73\right)$.
:::

Two common uses of a Voronoi diagram:

- **Nearest-neighbour interpolation:** to estimate a value (such as rainfall) at a point with no measurement, use the value at the site of the cell containing it.
- **The largest empty circle:** to place something as far as possible from all sites (a new shop away from competitors, or a facility away from homes), look at the **vertices** inside the region; the best one is the vertex furthest from its nearest sites.

:::example Nearest neighbour
Rainfall is measured at three stations: $A$ recorded $12$ mm, $B$ recorded $18$ mm and $C$ recorded $25$ mm. Using the diagram above, what is the nearest-neighbour estimate of the rainfall at the point $(5, 1)$?
A. $12$ mm
B. $25$ mm
C. $18.3$ mm
D. $18$ mm

**Solution.** The point $(5, 1)$ has $x>3$, so it is on $B$'s side of the edge $x=3$. Checking distances confirms it: $(5, 1)$ is $\sqrt{4+1}\approx2.24$ from $B$, compared with $\sqrt{25+1}\approx5.10$ from $A$ and $\sqrt{9+25}\approx5.83$ from $C$.

So the estimate is the value at $B$, $18$ mm, answer **D**. Option C averages the three values, which is not nearest-neighbour interpolation.
:::

:::warning Common traps
- **Degrees:** IB AI geometry uses degrees; check the calculator mode.
- **Sine rule ambiguity:** an angle found with the sine rule may have two possible values; check which fits the diagram.
- **Bearings:** measure clockwise from north and use three digits.
- **Voronoi edges:** use the perpendicular bisector of the two sites, not the line joining them.
- **Largest empty circle:** the answer is at a vertex (or on the boundary of the region), not at a site.
:::

:::terms
- volume / surface area | thể tích / diện tích bề mặt
- angle of elevation / depression | góc nâng / góc hạ
- sine rule / cosine rule | định lí sin / định lí côsin
- bearing | phương vị
- Voronoi diagram | sơ đồ Voronoi
- site / cell / edge / vertex | điểm gốc / ô / cạnh / đỉnh
- perpendicular bisector | đường trung trực
- nearest-neighbour interpolation | nội suy láng giềng gần nhất
- largest empty circle | đường tròn rỗng lớn nhất
:::

## Similar exercises

:::exercise
In triangle $ABC$, $a=10$ cm, $A=40^\circ$ and $B=65^\circ$. Find $b$.

::hint
**What you need:** the sine rule $\dfrac{b}{\sin B}=\dfrac{a}{\sin A}$.

::solution
We know side $a$ with its opposite angle $A$, and angle $B$, so the sine rule applies:
$$b=\frac{a\sin B}{\sin A}=\frac{10\sin65^\circ}{\sin40^\circ}\approx14.1\text{ cm}.$$

Since $B=65^\circ$ is larger than $A=40^\circ$, side $b$ should be longer than $a=10$ cm, and it is. A quick check like this catches a wrong pairing of sides and angles.

So $b\approx14.1$ cm.

**Answer.** $b\approx14.1$ cm.
:::

:::exercise
Find the area of a triangle with two sides $7$ m and $9$ m and an included angle of $50^\circ$.

::hint
**What you need:** $\text{Area}=\tfrac12ab\sin C$.

::solution
The formula $\tfrac12ab\sin C$ needs the angle between the two sides. The angle of $50^\circ$ lies between the two given sides, so the area is $\tfrac12(7)(9)\sin50^\circ$.

This gives $31.5\times0.7660\approx24.1\text{ m}^2$.

So the area is about $24.1\text{ m}^2$.

**Answer.** About $24.1\text{ m}^2$.
:::

:::exercise
A ball has radius $4$ cm. Find its surface area and its volume.

::hint
**What you need:** $S=4\pi r^2$, $V=\tfrac43\pi r^3$.

::solution
The ball is a sphere of radius $4$ cm, so we use the sphere formulas from the formula booklet. The surface area is $S=4\pi(4)^2=64\pi\approx201\text{ cm}^2$.

The volume is $V=\tfrac43\pi(4)^3=\tfrac{256}{3}\pi\approx268\text{ cm}^3$.

So the ball has surface area about $201\text{ cm}^2$ and volume about $268\text{ cm}^3$.

**Answer.** $201\text{ cm}^2$; $268\text{ cm}^3$.
:::

:::exercise
Find the equation of the perpendicular bisector of the points $P(1, 2)$ and $Q(5, 6)$.

::hint
**What you need:** midpoint and the negative reciprocal of the gradient.

::solution
The midpoint of $PQ$ is $\left(\dfrac{1+5}{2},\dfrac{2+6}{2}\right)=(3, 4)$, and the gradient of $PQ$ is $\dfrac{6-2}{5-1}=1$.

The bisector is perpendicular to $PQ$, so its gradient is $-1$, and it passes through $(3, 4)$: $y-4=-(x-3)$, that is $y=-x+7$.

So the perpendicular bisector is $y=-x+7$.

**Answer.** $y=-x+7$.
:::

:::exercise
Sites are at $A(0, 0)$, $B(6, 0)$ and $C(2, 6)$. In whose cell is the point $(1, 4)$?

::hint
**What you need:** compare the distances to the three sites.

::solution
The squared distances from $(1, 4)$ are $1+16=17$ to $A$, $25+16=41$ to $B$ and $1+4=5$ to $C$.

The smallest is to $C$, so $(1, 4)$ lies in the cell of $C$.

**Answer.** The cell of $C$.
:::

## Applied exercises

:::exercise
A ship sails $12$ km on a bearing of $060^\circ$, then turns and sails $9$ km on a bearing of $150^\circ$. Find its distance from the start and its bearing from the start.

::hint
**What you need:** the turn is $90^\circ$, so the path forms a right angle.

::solution
The two bearings differ by $150^\circ-60^\circ=90^\circ$, so the two legs form a right angle. The distance is $\sqrt{12^2+9^2}=\sqrt{225}=15$ km.

The angle at the start between the first leg and the line to the ship is $\arctan\dfrac{9}{12}\approx36.9^\circ$, so the bearing is $060^\circ+36.9^\circ\approx096.9^\circ$.

So the ship is $15$ km from the start on a bearing of about $097^\circ$.

**Answer.** $15$ km; bearing about $097^\circ$.
:::

:::exercise
A company wants to build a warehouse inside the triangle formed by the sites $A(0, 0)$, $B(6, 0)$ and $C(2, 6)$ (in km), as far as possible from all three towns. Use the Voronoi diagram to suggest a location and find its distance to the nearest town.

::hint
**What you need:** the vertex $V\left(3,\tfrac73\right)$ is equidistant from all three sites.

::solution
Inside the triangle the point furthest from its nearest town is the Voronoi vertex $V\left(3,\dfrac73\right)$, which is the same distance from $A$, $B$ and $C$.

Its distance to $A$ is $\sqrt{3^2+\left(\dfrac73\right)^2}=\sqrt{9+\dfrac{49}{9}}\approx3.80$ km, and the same to $B$ and $C$.

So the warehouse should be built at about $(3,\ 2.33)$, $3.80$ km from each town.

**Answer.** At $V(3,\ 2.33)$, about $3.80$ km from each town.
:::

:::exercise
A conical paper cup has radius $4$ cm and height $10$ cm. How many full cups can be filled from a $2$ litre bottle?

::hint
**What you need:** $V=\tfrac13\pi r^2h$ and $2$ litres $=2000\text{ cm}^3$.

::solution
The cup is a cone, so the volume of one cup is $\tfrac13\pi(4)^2(10)\approx167.6\text{ cm}^3$.

Two litres is $2000\text{ cm}^3$, and $\dfrac{2000}{167.6}\approx11.9$.

The $12$th cup cannot be filled, so we round down, not up.

So $11$ cups can be filled completely.

**Answer.** $11$ cups.
:::

:::exercise Challenge
Three phone masts are at $(0, 0)$, $(8, 0)$ and $(0, 6)$, in km. Find the Voronoi vertex and explain what it means.

::hint
**What you need:** the bisectors of the first two pairs are $x=4$ and $y=3$.

::solution
The perpendicular bisector of $(0, 0)$ and $(8, 0)$ is $x=4$, and that of $(0, 0)$ and $(0, 6)$ is $y=3$, so the vertex is $(4, 3)$.

Its distance to each mast is $\sqrt{4^2+3^2}=5$ km; you can check that $(4, 3)$ is also $\sqrt{16+9}=5$ km from $(8, 0)$ and from $(0, 6)$.

So the vertex $(4, 3)$ is the point inside the region that is furthest from its nearest mast, $5$ km away: the worst place for signal.

**Answer.** $(4, 3)$, $5$ km from each mast.
:::

:::quiz
::mc
Two sides of a triangle and the angle between them are known. Which rule finds the third side?
A. The sine rule
B. Pythagoras' theorem
C. The cosine rule
D. $\tfrac12ab\sin C$
::key C
Two sides and the included angle: cosine rule.

::mc
An edge of a Voronoi diagram between two sites lies on
A. the perpendicular bisector of the two sites
B. the line through the two sites
C. a circle centred at one site
D. the $x$-axis
::key A
Every point on it is equidistant from the two sites.

::mc
A cylinder has radius $2$ m and height $5$ m. Its volume is
A. $10\pi\text{ m}^3$
B. $20\pi\text{ m}^3$
C. $40\pi\text{ m}^3$
D. $100\pi\text{ m}^3$
::key B
$\pi(2)^2(5)=20\pi$.

::mc
Nearest-neighbour interpolation estimates a value at a point by
A. averaging all sites
B. using the site furthest away
C. drawing a regression line
D. using the value at the site whose cell contains the point
::key D
The cell's site is the nearest site.

::tf
For sites $(0, 0)$ and $(4, 0)$, decide whether each statement is true or false.
a) The edge between their cells is $x=2$.
b) The point $(1, 5)$ is in the cell of $(0, 0)$.
c) The point $(2, 3)$ is equidistant from both sites.
d) The point $(3, -2)$ is in the cell of $(0, 0)$.
::key T T T F
$(3, -2)$ has $x>2$, so it is closer to $(4, 0)$.

::sa
Find the area of a triangle with sides $6$ and $8$ and an included angle of $90^\circ$.
::key 24
$\tfrac12(6)(8)\sin90^\circ=24$.

::sa
Find the distance from $(0, 0)$ to $(4, 3)$.
::key 5
$\sqrt{16+9}=5$.
:::
