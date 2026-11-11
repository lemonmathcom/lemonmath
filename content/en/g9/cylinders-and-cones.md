---
title: Cylinders and cones
description: Recognise cylinders and cones, see why their surface area and volume formulae hold, and use them for water tanks, conical hats and sand piles.
minutes: 20
---

:::goals
- Recognise cylinders and cones and their parts: base radius, height, slant height.
- Explain and use the formulae for the curved surface area and the volume of a cylinder and a cone.
- Solve real-life problems: water tanks, painting columns, conical hats, sand piles.
:::

On the roofs of many Vietnamese homes stands a cylindrical water tank; in the fields, the conical hat (nón lá) shades the farmer from the sun; on building sites, poured sand forms a cone by itself. Very everyday questions follow: how many litres does the tank hold, and how many days will it last? How much leaf does one hat need? How many lorry loads will the sand pile take?

To answer them, we need to measure the first two "round" solids: the cylinder and the cone.

## The cylinder

Turn a rectangle $OABO'$ through one full turn about the fixed side $OO'$, and we get a **cylinder**. The sides $OA$ and $O'B$ sweep out the two **bases**, two equal discs in parallel planes; the side $AB$ sweeps out the **curved surface**, and each position of $AB$ is a **generator**. The length $AB$ is the **height** $h$, and the length $OA$ is the **base radius** $r$.

:::diagram A cylinder with base radius $r$ and height $h$
alt: An upright cylinder with circular bases centred at O and O', radius r and height h; the back half of the lower base is dashed
point P0 2.000,0.000 ""
point P1 1.732,0.300 ""
point P2 1.000,0.520 ""
point P3 0.000,0.600 ""
point P4 -1.000,0.520 ""
point P5 -1.732,0.300 ""
point P6 -2.000,0.000 ""
point P7 -1.732,-0.300 ""
point P8 -1.000,-0.520 ""
point P9 -0.000,-0.600 ""
point P10 1.000,-0.520 ""
point P11 1.732,-0.300 ""
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
point Q0 2.000,4.000 ""
point Q1 1.732,4.300 ""
point Q2 1.000,4.520 ""
point Q3 0.000,4.600 ""
point Q4 -1.000,4.520 ""
point Q5 -1.732,4.300 ""
point Q6 -2.000,4.000 ""
point Q7 -1.732,3.700 ""
point Q8 -1.000,3.480 ""
point Q9 -0.000,3.400 ""
point Q10 1.000,3.480 ""
point Q11 1.732,3.700 ""
segment Q0 Q1
segment Q1 Q2
segment Q2 Q3
segment Q3 Q4
segment Q4 Q5
segment Q5 Q6
segment Q6 Q7
segment Q7 Q8
segment Q8 Q9
segment Q9 Q10
segment Q10 Q11
segment Q11 Q0
point O 0,0 below
point O2 0,4 above "O'"
point A 2,0 right
point B 2,4 right
point L -2,0 ""
point L2 -2,4 ""
segment L L2
segment A B
segment O A dashed
segment O O2 dashed
label 1,0.25 "r"
label 2.4,2 "h"
:::

### Explore: unrolling the curved surface

Imagine peeling the label off a cylindrical can and laying it flat: we get a **rectangle**. One side is the height $h$; the other side is the circumference of the base, $2\pi r$. Hence the curved surface area is $2\pi r\cdot h$.

The volume of a cylinder is found as for a right prism (grade 7): base area times height.

:::theorem Cylinder with base radius $r$ and height $h$
$$S_{\text{curved}}=2\pi rh,\qquad S_{\text{total}}=2\pi rh+2\pi r^2,\qquad V=\pi r^2h.$$
:::

:::example Finding the surface area and volume of a cylinder
A cylinder has base radius $5$ cm and height $12$ cm. Find its curved surface area, total surface area and volume (give your answers to 2 decimal places).

**Solution.** We have

$$S_{\text{curved}}=2\pi\cdot5\cdot12=120\pi\approx376.99\ \text{(cm}^2),$$

$$S_{\text{total}}=120\pi+2\pi\cdot5^2=170\pi\approx534.07\ \text{(cm}^2),\qquad V=\pi\cdot5^2\cdot12=300\pi\approx942.48\ \text{(cm}^3).$$

So $S_{\text{curved}}\approx376.99$ cm², $S_{\text{total}}\approx534.07$ cm² and $V\approx942.48$ cm³.
:::

:::example Application: how many days will the tank last?
Suppose a family of $4$ has a cylindrical water tank with base diameter $1$ m and height $1.4$ m, and each person uses on average $100$ litres of water per day. If the tank is filled once, for how many whole days can the family use it?

**Solution.**

*Understand.* We need the volume of the tank (in litres) and the water used per day.

*Plan.* Compute $V=\pi r^2h$ with $r=0.5$ m, convert using $1$ m³ $=1000$ litres, then divide by $4\cdot100=400$ litres.

*Solve.* The volume of the tank is

$$V=\pi\cdot0.5^2\cdot1.4=0.35\pi\approx1.0996\ \text{(m}^3)\approx1100\ \text{(litres)}.$$

The family uses $400$ litres per day, and $1100\div400=2.75$.

So a full tank lasts $2$ whole days (it runs short on the third day).

*Look back.* The result is sensible: $1$ m³ is $1000$ litres and the tank is a little more than $1$ m³. To last $3$ days ($1200$ litres) with the same diameter, the height would need to be $h=\dfrac{1.2}{0.25\pi}\approx1.53$ m. The volume is proportional to $h$ but to the **square** of $r$: increasing the diameter is more effective than increasing the height.
:::

## The cone

Turn a triangle $SOA$, right-angled at $O$, through one full turn about the fixed side $SO$, and we get a **cone**. The side $OA$ sweeps out the **base** (a disc of radius $r=OA$), the side $SA$ sweeps out the **curved surface**, and each position of $SA$ is a generator of length $l$, the **slant height**. The point $S$ is the **vertex**, and $SO=h$ is the **height**. By Pythagoras' theorem, $l^2=r^2+h^2$.

:::diagram A cone with vertex $S$, base radius $r$, height $h$ and slant height $l$
alt: A cone with vertex S and base centre O; the radius OA equals r, the height SO equals h and is perpendicular to OA, the slant height SA equals l
point P0 2.000,0.000 ""
point P1 1.732,0.300 ""
point P2 1.000,0.520 ""
point P3 0.000,0.600 ""
point P4 -1.000,0.520 ""
point P5 -1.732,0.300 ""
point P6 -2.000,0.000 ""
point P7 -1.732,-0.300 ""
point P8 -1.000,-0.520 ""
point P9 -0.000,-0.600 ""
point P10 1.000,-0.520 ""
point P11 1.732,-0.300 ""
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
point O 0,0 below
point S 0,4 above
point A 2,0 right
point L -2,0 ""
segment S L
segment S A
segment O A dashed
segment S O dashed
right S O A
label 1,0.25 "r"
label -0.3,2 "h"
label 1.3,2.2 "l"
:::

### Why is $S_{\text{curved}}=\pi rl$?

Cut the curved surface of a cone along a generator and lay it flat: we get a **sector** of radius $l$. The arc length of the sector equals the circumference of the base, $2\pi r$. By the lesson on [the area of a sector](lesson:arc-length-sector-area), $S_{\text{sector}}=\dfrac{l_{\text{arc}}\cdot R}{2}$, so

$$S_{\text{curved}}=\frac{2\pi r\cdot l}{2}=\pi rl.$$

As for the volume: fill a cone with water and pour it into a cylinder with the same base and the same height, and it takes exactly $3$ cones to fill it. The volume of a cone is $\dfrac13$ of the volume of the cylinder with the same base and height.

:::theorem Cone with base radius $r$, height $h$ and slant height $l$
$$S_{\text{curved}}=\pi rl,\qquad S_{\text{total}}=\pi rl+\pi r^2,\qquad V=\frac13\pi r^2h.$$
:::

:::example Finding the parts of a cone
A cone has base radius $6$ cm and height $8$ cm. Find its slant height, curved surface area and volume.

**Solution.** In the triangle $SOA$, right-angled at $O$, Pythagoras' theorem gives $l=\sqrt{6^2+8^2}=10$ (cm). Hence

$$S_{\text{curved}}=\pi\cdot6\cdot10=60\pi\approx188.50\ \text{(cm}^2),\qquad V=\frac13\pi\cdot6^2\cdot8=96\pi\approx301.59\ \text{(cm}^3).$$

So $l=10$ cm, $S_{\text{curved}}=60\pi$ cm² and $V=96\pi$ cm³.
:::

:::example Application: leaf for a conical hat
Suppose a conical hat (nón lá) is a cone with rim diameter $40$ cm and height $15$ cm. Find the area of leaf needed to cover the hat with one layer (give your answer to the nearest cm²). When the layer of leaf is laid flat, it is a sector: what is the angle of its arc?

**Solution.** We have $r=20$ cm and $h=15$ cm, so $l=\sqrt{20^2+15^2}=25$ (cm). The area of one layer of leaf is

$$S_{\text{curved}}=\pi\cdot20\cdot25=500\pi\approx1571\ \text{(cm}^2).$$

The sector of radius $25$ cm has arc length equal to the circumference of the base, $40\pi$ cm. Let the arc measure $n^\circ$; then $\dfrac{\pi\cdot25\cdot n}{180}=40\pi$, so $n=288$.

So about $1571$ cm² of leaf is needed for one layer, and the flat sector has an arc of $288^\circ$.
:::

:::warning Common mistakes
- **Using the height instead of the slant height.** Wrong: $S_{\text{curved}}=\pi rh$. Right: $S_{\text{curved}}=\pi rl$ with $l=\sqrt{r^2+h^2}$.
- **Forgetting the $\dfrac13$.** Wrong: $V_{\text{cone}}=\pi r^2h$. Right: $V_{\text{cone}}=\dfrac13\pi r^2h$.
- **Using the diameter instead of the radius.** If the diameter is $1$ m, then $r=0.5$ m; mixing them up makes the volume $4$ times too big.
- **Not converting units.** $1$ m³ $=1000$ dm³ $=1000$ litres.
:::

**Connections.** Both curved-surface formulae come from **unrolling**: a rectangle (cylinder) and a sector (cone), using the circumference and the area of a sector from the Circles chapter. The volume of a cylinder extends the formula for a right prism (grade 7), and the volume of a cone looks like that of a regular pyramid ($\dfrac13$ base times height) from grade 8. The next lesson, [spheres](lesson:spheres), is the third "round" solid.

## Key terms

:::terms
- cylinder | hình trụ
- cone | hình nón
- base | mặt đáy
- curved surface | mặt xung quanh
- slant height (generator) | đường sinh
- curved surface area | diện tích xung quanh
- total surface area | diện tích toàn phần
- volume | thể tích
:::

## Summary

- Cylinder: $S_{\text{curved}}=2\pi rh$, $S_{\text{total}}=2\pi rh+2\pi r^2$, $V=\pi r^2h$.
- Cone: $l=\sqrt{r^2+h^2}$, $S_{\text{curved}}=\pi rl$, $S_{\text{total}}=\pi rl+\pi r^2$, $V=\dfrac13\pi r^2h$.
- Unrolled: the curved surface of a cylinder is a $2\pi r\times h$ rectangle; that of a cone is a sector of radius $l$ with arc length $2\pi r$.
- A cone and a cylinder with the same base and height: $V_{\text{cone}}=\dfrac13V_{\text{cylinder}}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
A cylinder has base radius $3$ cm and height $10$ cm. Find its curved surface area and volume (give your answers to 2 decimal places).

::hint
**What you need:** $S_{\text{curved}}=2\pi rh$, $V=\pi r^2h$.

**Steps:**
1. Substitute $r=3$ and $h=10$.

::solution
The cylinder has base radius $r=3$ cm and height $h=10$ cm.

The curved surface area of the cylinder is
$$S_{xq}=2\pi rh=2\pi\cdot3\cdot10=60\pi\approx188.50\ \text{(cm}^2\text{)}.$$

The volume of the cylinder is
$$V=\pi r^2h=\pi\cdot3^2\cdot10=90\pi\approx282.74\ \text{(cm}^3\text{)}.$$

So $S_{xq}=60\pi\approx188.50$ cm² and $V=90\pi\approx282.74$ cm³.

**Answer.** $60\pi\approx188.50$ cm²; $90\pi\approx282.74$ cm³.
:::

:::exercise
A cone has base radius $5$ cm and slant height $13$ cm. Find its height, curved surface area and volume.

::hint
**What you need:** $h=\sqrt{l^2-r^2}$; $S_{\text{curved}}=\pi rl$; $V=\dfrac13\pi r^2h$.

**Steps:**
1. Find $h$ by Pythagoras' theorem.
2. Substitute into both formulae.

::solution
The cone has base radius $r=5$ cm and slant height $l=13$ cm.

The height $h$, the base radius $r$ and the slant height $l$ are the sides of a right-angled triangle with hypotenuse $l$. By Pythagoras' theorem, we have
$$h=\sqrt{l^2-r^2}=\sqrt{13^2-5^2}=\sqrt{144}=12\ \text{(cm)}.$$

The curved surface area of the cone is
$$S_{xq}=\pi rl=\pi\cdot5\cdot13=65\pi\approx204.2\ \text{(cm}^2\text{)}.$$

The volume of the cone is
$$V=\frac13\pi r^2h=\frac13\pi\cdot5^2\cdot12=100\pi\approx314.2\ \text{(cm}^3\text{)}.$$

So $h=12$ cm, $S_{xq}=65\pi$ cm² and $V=100\pi$ cm³.

**Answer.** $12$ cm; $65\pi$ cm²; $100\pi$ cm³.
:::

:::exercise
A cylinder has height $8$ cm and volume $72\pi$ cm³. Find its base radius.

::hint
**What you need:** $V=\pi r^2h$.

**Steps:**
1. Solve $\pi r^2\cdot8=72\pi$ with $r>0$.

::solution
Let $r$ (cm) be the base radius of the cylinder ($r>0$).

The volume of the cylinder is $V=\pi r^2h=\pi r^2\cdot8$. From the question, we have
$$8\pi r^2=72\pi.$$

It follows that $r^2=9$. Since $r>0$, we have $r=3$.

So the base radius of the cylinder is $3$ cm.

**Answer.** $3$ cm.
:::

:::exercise
Suppose the hall of a community centre has $8$ cylindrical columns, each with diameter $0.4$ m and height $3.5$ m. The curved surfaces of the columns are to be painted; each litre of paint covers $10$ m². What is the least number of litres to buy (paint is sold by the litre)?

::hint
**What you need:** $S_{\text{curved}}=2\pi rh$ with $r=0.2$ m.

**Steps:**
1. Find the curved surface area of one column and multiply by $8$.
2. Divide by $10$ and round up.

::solution
The curved surface area of one column is $2\pi\cdot0.2\cdot3.5=1.4\pi$ (m²). The total area to paint is $8\cdot1.4\pi=11.2\pi\approx35.19$ (m²). We have $35.19\div10\approx3.52$.

So at least $4$ litres of paint must be bought.

**Answer.** $4$ litres.
:::

:::exercise
Suppose a building site has a conical sand pile with base diameter $4$ m and height $1.5$ m. Each lorry load carries $5$ m³ of sand. What is the least number of loads needed to move the whole pile?

::hint
**What you need:** $V=\dfrac13\pi r^2h$ with $r=2$ m.

**Steps:**
1. Find the volume, divide by $5$ and round up.

::solution
The sand pile is a cone with base radius $r=\dfrac42=2$ (m) and height $h=1.5$ m.

The volume of the sand pile is
$$V=\frac13\pi r^2h=\frac13\pi\cdot2^2\cdot1.5=2\pi\approx6.28\ \text{(m}^3\text{)}.$$

Each lorry load carries $5$ m³. Since $6.28>5$, one load is not enough; since $6.28<2\cdot5=10$, two loads are enough.

So at least $2$ lorry loads are needed.

**Answer.** $2$ loads.
:::

:::exercise
A conical cup and a cylindrical cup have the same base radius $4$ cm and the same height $9$ cm. Find the volume of each cup. How many times must the conical cup be filled to fill the cylindrical cup?

::hint
**What you need:** $V_{\text{cylinder}}=\pi r^2h$, $V_{\text{cone}}=\dfrac13\pi r^2h$.

**Steps:**
1. Find both volumes, then divide.

::solution
The two cups have the same base radius $r=4$ cm and the same height $h=9$ cm.

The volume of the conical cup is
$$V_{\text{cone}}=\frac13\pi r^2h=\frac13\pi\cdot4^2\cdot9=48\pi\ \text{(cm}^3\text{)}.$$

The volume of the cylindrical cup is
$$V_{\text{cylinder}}=\pi r^2h=\pi\cdot4^2\cdot9=144\pi\ \text{(cm}^3\text{)}.$$

We have $\dfrac{V_{\text{cylinder}}}{V_{\text{cone}}}=\dfrac{144\pi}{48\pi}=3$.

So the conical cup holds $48\pi$ cm³, the cylindrical cup holds $144\pi$ cm³, and the conical cup must be filled $3$ times to fill the cylindrical cup.

**Answer.** $48\pi$ cm³, $144\pi$ cm³; $3$ times.
:::

:::exercise
**(1.5 marks)** The rectangle $ABCD$ has $AB=6$ cm and $BC=4$ cm.

a) The rectangle is turned through one full turn about the fixed side $AB$. Find the volume of the cylinder formed.

b) The triangle $ABC$ (right-angled at $B$) is turned through one full turn about the fixed side $AB$. Find the volume of the cone formed.

c) Find the curved surface area of the cone in b) (give your answer to 2 decimal places).

::hint
**What you need:** turning about $AB$, the base radius is $BC$ and the height is $AB$.

**Steps:**
1. a), b) Use $r=4$, $h=6$.
2. c) The slant height is $AC$.

::solution
a) Turning the rectangle $ABCD$ through one full turn about the fixed side $AB$ gives a cylinder with height $h=AB=6$ cm and base radius $r=BC=4$ cm.

The volume of the cylinder is
$$V=\pi r^2h=\pi\cdot4^2\cdot6=96\pi\approx301.59\ \text{(cm}^3\text{)}.$$

So the volume of the cylinder is $96\pi$ cm³.

b) Turning the triangle $ABC$, with a right angle at $B$, through one full turn about the fixed side $AB$ gives a cone with apex $A$, height $h=AB=6$ cm and base radius $r=BC=4$ cm.

The volume of the cone is
$$V=\frac13\pi r^2h=\frac13\pi\cdot4^2\cdot6=32\pi\approx100.53\ \text{(cm}^3\text{)}.$$

So the volume of the cone is $32\pi$ cm³.

c) The slant height of the cone is $l=AC$. In triangle $ABC$ with a right angle at $B$, by Pythagoras' theorem, we have
$$AC=\sqrt{AB^2+BC^2}=\sqrt{6^2+4^2}=\sqrt{52}=2\sqrt{13}\ \text{(cm)}.$$

The curved surface area of the cone is
$$S_{xq}=\pi rl=\pi\cdot4\cdot2\sqrt{13}=8\sqrt{13}\,\pi\approx90.62\ \text{(cm}^2\text{)}.$$

So the curved surface area of the cone is about $90.62$ cm².

**Answer.** a) $96\pi$ cm³; b) $32\pi$ cm³; c) $\approx90.62$ cm².
:::

:::exercise Challenge
Minh rolls a semicircular sheet of paper with radius $20$ cm (without overlapping the edges) into the curved surface of a cone. Find the base radius, height and volume of the cone (give the volume to the nearest cm³). (Revise [arc length](lesson:arc-length-sector-area).)

::hint
**What you need:** the radius of the sheet is the slant height; the arc of the semicircle becomes the circumference of the base.

**Steps:**
1. From $2\pi r=\pi\cdot20$, find $r$.
2. Find $h=\sqrt{l^2-r^2}$, then $V$.

::solution
The slant height is $l=20$ cm. The arc of the semicircle has length $\pi\cdot20=20\pi$ (cm), equal to the circumference of the base, so $2\pi r=20\pi$ and $r=10$ cm. Hence

$$h=\sqrt{20^2-10^2}=10\sqrt3\ \text{(cm)},\qquad V=\frac13\pi\cdot10^2\cdot10\sqrt3=\frac{1000\sqrt3}{3}\pi\approx1814\ \text{(cm}^3).$$

So $r=10$ cm, $h=10\sqrt3\approx17.32$ cm and $V\approx1814$ cm³.

**Answer.** $r=10$ cm; $h=10\sqrt3$ cm; $V\approx1814$ cm³.
:::

## Mini test

:::quiz
::mc
The curved surface area of a cylinder with base radius $2$ cm and height $5$ cm is
A. $10\pi$ cm².
B. $28\pi$ cm².
C. $20\pi$ cm².
D. $40\pi$ cm².
::key C
$2\pi\cdot2\cdot5=20\pi$. A forgets the factor $2$, B is the total surface area, and D uses the diameter instead of the radius.

::mc
The volume of a cylinder with base radius $3$ cm and height $4$ cm is
A. $36\pi$ cm³.
B. $12\pi$ cm³.
C. $24\pi$ cm³.
D. $48\pi$ cm³.
::key A
$\pi\cdot9\cdot4=36\pi$. B is the volume of the cone, C is the curved surface area, and D swaps $r$ and $h$ ($\pi\cdot4^2\cdot3$).

::mc
A cone with base radius $3$ cm and height $4$ cm has slant height
A. $7$ cm.
B. $\sqrt7$ cm.
C. $25$ cm.
D. $5$ cm.
::key D
$l=\sqrt{9+16}=5$. A adds the two lengths, B subtracts under the root, and C forgets the square root.

::mc
The curved surface area of a cone with base radius $3$ cm and slant height $5$ cm is
A. $12\pi$ cm².
B. $15\pi$ cm².
C. $30\pi$ cm².
D. $24\pi$ cm².
::key B
$\pi\cdot3\cdot5=15\pi$. A uses the height $4$ instead of the slant height, C uses $2\pi rl$ as for a cylinder, and D is the total surface area.

::tf
A cone has base radius $6$ cm and height $8$ cm. Decide whether each statement is true or false.
a) The slant height of the cone is $10$ cm.
b) The curved surface area is $60\pi$ cm².
c) The volume is $288\pi$ cm³.
d) If the radius stays the same and the height is doubled, the volume doubles.
::key T T F T
a) True: $\sqrt{36+64}=10$. b) True: $\pi\cdot6\cdot10$. c) False: $V=\dfrac13\pi\cdot36\cdot8=96\pi$. d) True: $V$ is proportional to $h$.

::sa
Find the volume (in cm³) of a cylinder with base radius $1$ cm and height $2$ cm (give your answer to 2 decimal places).
::key 6.28
$V=\pi\cdot1\cdot2=2\pi\approx6.28$ cm³.

::sa
A cone and a cylinder have the same base radius and the same height. The volume of the cylinder is $27$ dm³. Find the volume (in dm³) of the cone.
::key 9
$V_{\text{cone}}=\dfrac13V_{\text{cylinder}}=9$ dm³.
:::
