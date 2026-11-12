---
title: "Mensuration: arcs, sectors, surface area and volume"
description: IGCSE Mathematics Extended: arc length and sector area, surface area and volume of prisms, cylinders, cones, pyramids, spheres, and unit conversions.
minutes: 50
---

:::goals
- Find arc lengths and sector areas from the angle at the centre.
- Find surface areas and volumes of prisms, cylinders, pyramids, cones and spheres, and of shapes made from them.
- Convert between units of area, volume and capacity without losing a factor of $10$.
:::

A water tank is a cylinder $1.2$ m tall with radius $0.5$ m, and a pump fills it at $12$ litres per minute. How long until it is full? Nothing in this question is hard, yet many students get it wrong. They find the volume correctly and then slip at the very last step, turning cubic metres into litres.

"Mensuration" simply means measuring: lengths, areas and volumes. It is worth steady marks on every IGCSE paper, and the method is nearly always the same. Choose the right formula, substitute carefully, and watch the units. This lesson goes through the shapes one by one, then comes back to the tank.

## Arcs and sectors

A sector with angle $\theta$ at the centre is the fraction $\dfrac{\theta}{360}$ of the whole circle. So its arc and its area are that fraction of the circumference and of the area:

$$\text{arc length}=\frac{\theta}{360}\times2\pi r,\qquad \text{sector area}=\frac{\theta}{360}\times\pi r^2.$$

There is nothing new to memorise here. If you remember "fraction of the circle", you can rebuild both formulas in the exam.

:::example A sector
A sector has radius $9$ cm and angle $80^\circ$. Find its arc length and its area, correct to $3$ significant figures.

**Solution.** The sector is $\dfrac{80}{360}=\dfrac29$ of the circle.

Arc length $=\dfrac29\times2\pi\times9=4\pi\approx12.6$ cm.

Area $=\dfrac29\times\pi\times9^2=18\pi\approx56.5\text{ cm}^2$.

So the arc is about $12.6$ cm and the area about $56.5\text{ cm}^2$.
:::

## Prisms and cylinders

A prism has the same cross-section all along its length, so its volume is the area of the cross-section times the length. A cylinder is a prism with a circular cross-section:

$$V_{\text{prism}}=A\times l,\qquad V_{\text{cylinder}}=\pi r^2h,\qquad \text{curved surface of cylinder}=2\pi rh.$$

The curved surface of a cylinder unrolls into a rectangle: its width is the circumference $2\pi r$ and its height is $h$. That is where $2\pi rh$ comes from. For the total surface area, add the two circular ends.

:::example A trapezium prism
A prism of length $12$ cm has a cross-section that is a trapezium with parallel sides $4$ cm and $10$ cm, a distance $5$ cm apart. Find its volume.
A. $240\text{ cm}^3$
B. $420\text{ cm}^3$
C. $480\text{ cm}^3$
D. $840\text{ cm}^3$

**Solution.** The area of the trapezium is $\dfrac{4+10}{2}\times5=35\text{ cm}^2$.

The volume is the cross-section times the length: $35\times12=420\text{ cm}^3$.

So the volume is $420\text{ cm}^3$, answer **B**. Option D forgets to halve the sum of the parallel sides.
:::

## Pyramids, cones and spheres

A pyramid or a cone holds exactly one third of the prism or cylinder with the same base and height. A sphere has its own formulas:

$$V_{\text{pyramid}}=\tfrac13\times\text{base area}\times h,\qquad V_{\text{cone}}=\tfrac13\pi r^2h,\qquad \text{curved surface of cone}=\pi rl,$$

$$V_{\text{sphere}}=\tfrac43\pi r^3,\qquad \text{surface of sphere}=4\pi r^2.$$

Here $l$ is the **slant height** of the cone, the distance from the apex to the edge of the base, and $l^2=r^2+h^2$. Some of these formulas are printed on the formulae list in the paper, but learn them all the same: you lose no time looking them up, and you will notice at once when a value is in the wrong place.

:::diagram A cone with radius r, height h and slant height l
alt: A side view of a cone: apex A above the centre O of the base; segment AO is the height 8, segment OC is the radius 6, and segment AC is the slant height 10
point A 0,4 above
point O 0,0 below
point B -3,0 left
point C 3,0 right
segment A B
segment A C
label 2.5,2.4 "l = 10"
segment B C
segment A O
label -0.7,1.8 "h = 8"
segment O C "r = 6"
:::

:::example A cone
A cone has radius $6$ cm and height $8$ cm. Find its slant height, its curved surface area and its volume.

**Solution.** The radius, the height and the slant height form a right-angled triangle, so $l=\sqrt{6^2+8^2}=\sqrt{100}=10$ cm.

Curved surface area $=\pi rl=\pi\times6\times10=60\pi\approx188.5\text{ cm}^2$.

Volume $=\tfrac13\pi\times6^2\times8=96\pi\approx301.6\text{ cm}^3$.

So $l=10$ cm, the curved surface is about $188.5\text{ cm}^2$ and the volume about $301.6\text{ cm}^3$.
:::

:::example A compound solid
A solid is a cylinder of radius $3$ cm and height $10$ cm with a hemisphere of radius $3$ cm on top. Find its volume.

**Solution.** Cylinder: $\pi\times3^2\times10=90\pi$.

Hemisphere: half of a sphere, $\tfrac12\times\tfrac43\pi\times3^3=18\pi$.

The total volume is $90\pi+18\pi=108\pi\approx339.3\text{ cm}^3$.

So the volume is about $339\text{ cm}^3$. Keeping the answer in terms of $\pi$ until the last line avoids rounding errors.
:::

## Units

Converting units of area and volume is where many marks quietly disappear. Since $1\text{ m}=100$ cm,

$$1\text{ m}^2=100^2=10{,}000\text{ cm}^2,\qquad 1\text{ m}^3=100^3=1{,}000{,}000\text{ cm}^3.$$

For capacity, $1\text{ litre}=1000\text{ cm}^3$, so $1\text{ m}^3=1000$ litres. For example, $2.5\text{ m}^3=2500$ litres.

Now back to the tank. Its volume is $\pi\times0.5^2\times1.2=0.3\pi\approx0.942\text{ m}^3$, which is about $942$ litres. At $12$ litres per minute it takes $942\div12\approx78.5$ minutes. The last step is the one that matters: without it, you would answer with cubic metres when the question was about litres.

:::warning Common traps
- **Diameter given, radius used:** halve the diameter before substituting.
- **Height and slant height:** $\pi rl$ uses the slant height; $\tfrac13\pi r^2h$ uses the vertical height.
- **Hemisphere surface:** the curved part is $2\pi r^2$; add the flat circle $\pi r^2$ only if the face is exposed.
- **Units:** square the factor for areas, cube it for volumes; $1\text{ m}^3=1000$ litres.
- **Rounding too early:** keep $\pi$ or full calculator values until the final answer, then give $3$ significant figures.
:::

:::terms
- arc length | độ dài cung
- sector | hình quạt
- cross-section | mặt cắt (thiết diện)
- prism / cylinder | hình lăng trụ / hình trụ
- pyramid / cone | hình chóp / hình nón
- slant height | đường sinh
- sphere / hemisphere | hình cầu / nửa hình cầu
- curved surface area | diện tích xung quanh
- capacity | dung tích
:::

## Similar exercises

:::exercise
A circle has area $78.5\text{ cm}^2$. Taking $\pi=3.14$, find its radius and its circumference.

::hint
**What you need:** $A=\pi r^2$, $C=2\pi r$.

::solution
From $\pi r^2=78.5$ we get $r^2=\dfrac{78.5}{3.14}=25$, so $r=5$ cm. With $\pi=3.14$ the division comes out exact, a good sign that we are on the right track.

The circumference is $2\times3.14\times5=31.4$ cm.

So the radius is $5$ cm and the circumference $31.4$ cm.

**Answer.** $r=5$ cm; $31.4$ cm.
:::

:::exercise
Find the arc length of a sector with radius $12$ cm and angle $150^\circ$.

::hint
**What you need:** $\dfrac{\theta}{360}\times2\pi r$.

::solution
The question asks for a length, so we take a fraction of the circumference, not of the area. The sector is $\dfrac{150}{360}=\dfrac{5}{12}$ of the circle, whose circumference is $2\pi\times12=24\pi$.

The arc length is $\dfrac{5}{12}\times24\pi=10\pi\approx31.4$ cm.

So the arc is about $31.4$ cm long.

**Answer.** $10\pi\approx31.4$ cm.
:::

:::exercise
Find the volume of a sphere of radius $6$ cm.

::hint
**What you need:** $V=\tfrac43\pi r^3$.

::solution
Substitute $r=6$: $V=\tfrac43\pi\times6^3=\tfrac43\pi\times216$.

Cube the radius first, $6^3=216$, and only then multiply by $\tfrac43\pi$; writing $3r$ or $r^2$ instead is a very common slip. That gives $V=288\pi\approx905\text{ cm}^3$.

So the volume is about $905\text{ cm}^3$.

**Answer.** $288\pi\approx905\text{ cm}^3$.
:::

:::exercise
Find the total surface area of a closed cylinder with radius $4$ cm and height $10$ cm.

::hint
**What you need:** two circles plus the curved surface $2\pi rh$.

::solution
The cylinder is closed, so both ends count. The two circular ends have area $2\times\pi\times4^2=32\pi$, and the curved surface has area $2\pi\times4\times10=80\pi$.

The total is $32\pi+80\pi=112\pi\approx352\text{ cm}^2$.

So the surface area is about $352\text{ cm}^2$.

**Answer.** $112\pi\approx352\text{ cm}^2$.
:::

:::exercise
A pyramid has a square base of side $6$ cm and a vertical height of $10$ cm. Find its volume.

::hint
**What you need:** $\tfrac13\times\text{base area}\times h$.

::solution
The base area is $6^2=36\text{ cm}^2$. A pyramid holds only one third of the box with the same base and height, so do not forget the factor $\tfrac13$.

The volume is $\tfrac13\times36\times10=120\text{ cm}^3$.

So the pyramid has volume $120\text{ cm}^3$.

**Answer.** $120\text{ cm}^3$.
:::

## Applied exercises

:::exercise
A metal sphere of radius $3$ cm is melted down and recast into a cylinder of radius $2$ cm. Find the height of the cylinder.

::hint
**What you need:** the volume stays the same.

::solution
The volume of the sphere is $\tfrac43\pi\times3^3=36\pi\text{ cm}^3$.

The cylinder has the same volume, so $\pi\times2^2\times h=36\pi$, that is $4h=36$ and $h=9$.

So the cylinder is $9$ cm tall.

**Answer.** $9$ cm.
:::

:::exercise
A room is $5$ m long, $4$ m wide and $3$ m high. The four walls are to be painted (ignore doors and windows). One litre of paint covers $10\text{ m}^2$, and paint is sold in $1$-litre tins. How many tins are needed?

::hint
**What you need:** two pairs of rectangular walls.

::solution
Two walls are $5\times3=15\text{ m}^2$ each and two are $4\times3=12\text{ m}^2$ each, so the area is $2\times15+2\times12=54\text{ m}^2$.

The paint needed is $54\div10=5.4$ litres. Five tins are not enough, so we round up.

So $6$ tins are needed.

**Answer.** $6$ tins.
:::

:::exercise
A cylindrical tank has radius $0.5$ m and height $1.2$ m. It is filled at $12$ litres per minute. How long does it take to fill?

::hint
**What you need:** $1\text{ m}^3=1000$ litres.

::solution
The volume is $\pi\times0.5^2\times1.2=0.3\pi\approx0.942\text{ m}^3$, which is about $942$ litres.

Each minute adds $12$ litres, so we divide the capacity by the rate. The time is $942\div12\approx78.5$ minutes.

So it takes about $78.5$ minutes, a little over an hour and a quarter.

**Answer.** About $78.5$ minutes.
:::

:::exercise Challenge
A sector of radius $10$ cm and angle $216^\circ$ is rolled up to make a cone (the two straight edges meet). Find the volume of the cone.

::hint
**What you need:** the arc becomes the circumference of the base; the radius of the sector becomes the slant height.

::solution
The arc length is $\dfrac{216}{360}\times2\pi\times10=12\pi$. This becomes the circumference of the base, so $2\pi r=12\pi$ and $r=6$ cm.

The slant height is $10$ cm, so the height is $h=\sqrt{10^2-6^2}=8$ cm.

The volume is $\tfrac13\pi\times6^2\times8=96\pi\approx301.6\text{ cm}^3$.

So the cone has volume about $302\text{ cm}^3$.

**Answer.** $96\pi\approx302\text{ cm}^3$.
:::

:::quiz
::mc
The volume of a cone with radius $r$ and height $h$ is
A. $\pi r^2h$
B. $\tfrac13\pi r^2h$
C. $\pi rl$
D. $\tfrac43\pi r^3$
::key B
One third of the cylinder.

::mc
How many litres are in $1\text{ m}^3$?
A. $1000$
B. $100$
C. $10$
D. $1{,}000{,}000$
::key A
$1\text{ m}^3=1{,}000{,}000\text{ cm}^3$ and $1$ litre $=1000\text{ cm}^3$.

::mc
The surface area of a sphere of radius $r$ is
A. $2\pi r^2$
B. $\tfrac43\pi r^3$
C. $4\pi r^2$
D. $\pi r^2$
::key C
Four times the area of a great circle.

::mc
A sector has angle $90^\circ$ and radius $4$ cm. Its area is
A. $16\pi$
B. $8\pi$
C. $2\pi$
D. $4\pi$
::key D
A quarter of $16\pi$.

::tf
A cylinder has radius $2$ cm and height $5$ cm. Decide whether each statement is true or false.
a) Its volume is $20\pi\text{ cm}^3$.
b) Its curved surface area is $20\pi\text{ cm}^2$.
c) Its total surface area is $28\pi\text{ cm}^2$.
d) Doubling the radius doubles the volume.
::key T T T F
The volume depends on $r^2$, so it is multiplied by $4$.

::sa
Find the volume of a cube with side $3$ cm, in $\text{cm}^3$.
::key 27
$3^3=27$.

::sa
How many litres are in $2\text{ m}^3$?
::key 2000
$2\times1000$.
:::
