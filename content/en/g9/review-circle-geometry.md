---
title: "Topic: circle geometry"
description: Revise angles at the centre, inscribed angles, cyclic quadrilaterals, tangents, arc length and sector area in grade 10 entrance-exam geometry style.
minutes: 25
---

:::goals
- Revise the angle at the centre, inscribed angles, the angle in a semicircle and cyclic quadrilaterals.
- Remember the properties of a tangent and of two tangents meeting at a point, then find lengths with Pythagoras' theorem and trigonometry in right-angled triangles.
- Find arc lengths and sector areas.
- Present a multi-part geometry question as in the grade 10 entrance paper, with real-life problems.
:::

Suppose a round pizza with a diameter of $30$ cm is cut into $8$ equal slices. Each slice is a sector of a circle. What is the area of each slice, and how long is the curved edge (the arc) of each one? The answer depends on the angle at the centre of each slice, and that is exactly where circle geometry starts.

The geometry question is usually the question worth the most marks in the grade 10 entrance paper (about three marks), and it almost always has a circle in it. This lesson revises the key facts and how to present them to earn full marks.

## Angles and circles

### Explore: the inscribed angle and the angle at the centre

In a circle $(O)$, take an arc $BC$ of measure $100^\circ$. The angle at the centre $\angle BOC$ stands on this arc, so it is $100^\circ$. If $A$ is a point on the circle, not on that arc $BC$, then the inscribed angle $\angle BAC$ also stands on arc $BC$ and equals half the measure of the arc, that is $50^\circ$.

:::diagram The inscribed angle $\angle BAC$ and the angle at the centre $\angle BOC$
alt: A circle with centre O and a chord BC at the top; the point A lies at the bottom of the circle; the angle at the centre BOC is 100 degrees and the inscribed angle BAC is 50 degrees, both standing on arc BC
point O 0,0 below
point A 0,-3 below
point B -2.298,1.928 above-left
point C 2.298,1.928 above-right
circle O 3
segment A B
segment A C
segment O B
segment O C
angle B O C "100°"
angle B A C "50°"
:::

:::theorem Properties of angles and circles
In a circle:
- The angle at the centre has the same measure as the arc it stands on.
- An inscribed angle is half the measure of the arc it stands on. So inscribed angles standing on the same arc are equal, and the angle in a semicircle is a right angle.
- The opposite angles of a cyclic quadrilateral add up to $180^\circ$. Conversely, a quadrilateral whose opposite angles add up to $180^\circ$ can be inscribed in a circle.
:::

**Why is this true?** For the inscribed angle, triangle $OAB$ is isosceles at $O$ so its base angles are equal, and an exterior angle of a triangle equals the sum of the two interior opposite angles; from this the angle at the centre is twice the inscribed angle on the same arc. For a cyclic quadrilateral $ABCD$, the two opposite angles $\angle A$ and $\angle C$ stand on two arcs whose measures add up to the whole circle, $360^\circ$, so $\angle A+\angle C=\dfrac12\cdot360^\circ=180^\circ$.

:::example Inscribed angle and angle at the centre
Triangle $ABC$ is inscribed in a circle $(O)$ and $\angle BAC=50^\circ$.

a) Find $\angle BOC$.

b) Find $\angle OBC$.

**Solution.**

a) $\angle BAC$ is an inscribed angle and $\angle BOC$ is the angle at the centre standing on the same arc $BC$, so $\angle BOC=2\cdot\angle BAC=2\cdot50^\circ=100^\circ$.

b) Triangle $OBC$ has $OB=OC$ (both are radii), so it is isosceles at $O$. So $\angle OBC=\dfrac{180^\circ-100^\circ}2=40^\circ$.

**Answer.** a) $100^\circ$; b) $40^\circ$.
:::

:::example A cyclic quadrilateral
The quadrilateral $ABCD$ is inscribed in a circle with $\angle A=70^\circ$ and $\angle B=100^\circ$. Find $\angle C$ and $\angle D$.

**Solution.** Since $ABCD$ is cyclic, opposite angles are supplementary. So $\angle C=180^\circ-\angle A=180^\circ-70^\circ=110^\circ$ and $\angle D=180^\circ-\angle B=180^\circ-100^\circ=80^\circ$. Check: $70^\circ+100^\circ+110^\circ+80^\circ=360^\circ$.

**Answer.** $\angle C=110^\circ$; $\angle D=80^\circ$.
:::

## Tangents to a circle

:::theorem Tangents
- A tangent to a circle is perpendicular to the radius at the point of contact.
- If two tangents to a circle meet at $A$, with points of contact $B$ and $C$, then $AB=AC$ and $AO$ is the perpendicular bisector of $BC$ (so $AO\perp BC$ at the midpoint $H$ of $BC$).
:::

In the triangle $ABO$, right-angled at $B$, with $BH$ the altitude to the hypotenuse $AO$, we have the commonly used relations
$$AB^2=AH\cdot AO,\qquad OB^2=OH\cdot OA,\qquad BH\cdot AO=AB\cdot OB.$$

## Arc length and sector area

:::theorem Arcs and sectors
On a circle of radius $R$, an arc of measure $n^\circ$ has length
$$l=\frac{\pi Rn}{180},$$
and the corresponding sector has area
$$S=\frac{\pi R^2n}{360}.$$
:::

**Why is this true?** The whole circle, $360^\circ$, has circumference $2\pi R$ and area $\pi R^2$. An arc of $n^\circ$ is $\dfrac n{360}$ of the circle, so its length is $\dfrac n{360}\cdot2\pi R=\dfrac{\pi Rn}{180}$ and its sector has area $\dfrac n{360}\cdot\pi R^2$.

:::example Arcs and sectors
a) Find the length of a $60^\circ$ arc and the area of the corresponding sector of a circle of radius $6$ cm (round to 2 decimal places).

b) The pizza at the start of the lesson has diameter $30$ cm and is cut into $8$ equal slices. Find the area and the arc length of each slice (round to 1 decimal place).

**Solution.**

a) The arc length is $l=\dfrac{\pi\cdot6\cdot60}{180}=2\pi\approx6.28$ (cm). The sector area is $S=\dfrac{\pi\cdot6^2\cdot60}{360}=6\pi\approx18.85$ (cm²).

b) The radius is $R=15$ cm, and each slice has an angle at the centre of $\dfrac{360^\circ}{8}=45^\circ$. The area of each slice is $\dfrac{\pi\cdot15^2\cdot45}{360}=\dfrac{225\pi}8\approx88.4$ (cm²). The arc length is $\dfrac{\pi\cdot15\cdot45}{180}=\dfrac{15\pi}4\approx11.8$ (cm).

**Answer.** a) $2\pi\approx6.28$ cm; $6\pi\approx18.85$ cm². b) $\approx88.4$ cm²; $\approx11.8$ cm.
:::

## An exam-style geometry question

:::diagram Two tangents $AB$ and $AC$ to the circle $(O)$
alt: A circle with centre O and radius 3; the point A lies outside the circle on the horizontal line through O; two tangents AB and AC; the chord BC meets OA at H; angle ABO and angle AHB are right angles
point O 0,0 below-left
point A 5,0 right
point B 1.8,2.4 above
point C 1.8,-2.4 below
point H 1.8,0 below-left
circle O 3
segment A B
segment A C
segment O A
segment B C
segment O B
segment O C
right O B A
right B H A
:::

:::example Two tangents meeting at a point
**Question 4.** ($3.0$ marks) Given a circle $(O;3\text{ cm})$ and a point $A$ outside the circle with $OA=5$ cm. Draw the tangents $AB$ and $AC$ to the circle ($B$ and $C$ are the points of contact). Let $H$ be the intersection of $OA$ and $BC$.

a) Prove that the four points $A$, $B$, $O$, $C$ lie on one circle.

b) Prove that $OA\perp BC$ at $H$ and $AH\cdot AO=AB^2$.

c) Find $AB$, $BC$ and the area of triangle $ABC$.

**Solution.**

*Understand.* We have a circle of radius $3$, a point $A$ at distance $5$ from the centre, and two tangents $AB$ and $AC$. The three parts ask in turn: four points on one circle, perpendicularity and a relation, then numerical values.

*Plan.* Part a) uses the tangent being perpendicular to the radius to get right angles at $B$ and $C$. Part b) uses two tangents meeting at a point and the relations in the right-angled triangle $ABO$. Part c) uses Pythagoras' theorem and the relation from part b).

*Solve.*

a) ($1.0$ mark) Since $AB$ is the tangent at $B$, we have $AB\perp OB$, that is $\angle ABO=90^\circ$. Similarly $\angle ACO=90^\circ$. So $\angle ABO+\angle ACO=180^\circ$, and the quadrilateral $ABOC$ is cyclic (with diameter $AO$). So the four points $A$, $B$, $O$, $C$ lie on one circle.

b) ($1.0$ mark) Since the two tangents meet at $A$, we have $AB=AC$, and $OB=OC$ (radii). So $OA$ is the perpendicular bisector of $BC$, hence $OA\perp BC$ at $H$ (the midpoint of $BC$). In triangle $ABO$, right-angled at $B$, with altitude $BH$, the relations in a right-angled triangle give $AB^2=AH\cdot AO$.

c) ($1.0$ mark) In triangle $ABO$, right-angled at $B$: $AB=\sqrt{OA^2-OB^2}=\sqrt{25-9}=4$ (cm). From $AB^2=AH\cdot AO$ we get $AH=\dfrac{16}5=3.2$ (cm). We have $BH=\dfrac{AB\cdot OB}{OA}=\dfrac{4\cdot3}5=2.4$ (cm), so $BC=2BH=4.8$ (cm). The area of triangle $ABC$ is $\dfrac12\cdot BC\cdot AH=\dfrac12\cdot4.8\cdot3.2=7.68$ (cm²).

So $AB=4$ cm, $BC=4.8$ cm and $S_{ABC}=7.68$ cm².

*Look back.* A check by another route: $OH=\dfrac{OB^2}{OA}=\dfrac95=1.8$ cm and $AH+OH=3.2+1.8=5=OA$, which is correct. We can also find $BH=\sqrt{OB^2-OH^2}=\sqrt{9-3.24}=2.4$ cm, matching the result above.
:::

:::example A bicycle wheel
Suppose a bicycle wheel has diameter $70$ cm. a) When the wheel turns $100$ times, how many metres does the bicycle travel? b) About how many turns does the wheel make for the bicycle to travel $1$ km? (Round to 1 decimal place in part a), and to the nearest whole number in part b).)

**Solution.** In each turn the bicycle travels a distance equal to the circumference of the wheel: $C=\pi\cdot0.7\approx2.199$ (m).

a) In $100$ turns the bicycle travels $100\cdot0.7\pi=70\pi\approx219.9$ (m).

b) Convert $1$ km $=1000$ m. The number of turns is $\dfrac{1000}{0.7\pi}\approx454.7$, that is about $455$ turns.

So the bicycle travels about $219.9$ m in $100$ turns, and needs about $455$ turns to travel $1$ km.
:::

:::warning Common mistakes
- **Confusing the inscribed angle with the angle at the centre.** Wrong: saying $\angle BAC=\angle BOC$ when they stand on the same arc $BC$. Why it is wrong: the angle at the centre is twice the inscribed angle. Right: $\angle BOC=2\angle BAC$.
- **Forgetting that opposite angles of a cyclic quadrilateral are supplementary.** Wrong: taking $\angle C=\angle A$ in a cyclic quadrilateral. Why it is wrong: adjacent angles are not equal, and it is opposite angles that add up to $180^\circ$. Right: $\angle A+\angle C=180^\circ$.
- **Proving a quadrilateral is cyclic without giving the reason.** Wrong: writing only "so $ABOC$ is cyclic". Why it is wrong: marks are given for the steps: opposite angles supplementary (or two points seeing a segment under equal angles). Right: write $\angle ABO+\angle ACO=180^\circ$ and then conclude.
- **Using the wrong formula for arcs and sectors.** Wrong: finding arc length with $\dfrac{\pi R^2n}{360}$. Why it is wrong: that is the area of a sector. Right: $l=\dfrac{\pi Rn}{180}$.
- **Drawing the diagram inexactly and reasoning from the picture.** Wrong: seeing that $H$ looks like a midpoint and concluding at once. Why it is wrong: the exam needs a reason. Right: state $AB=AC$ and $OB=OC$, so $OA$ is the perpendicular bisector of $BC$.
:::

**Connections.** This lesson uses Pythagoras' theorem, similar triangles and relations in right-angled triangles, isosceles triangles, and the formulas for the circumference and area of a circle. The next topic, on trigonometry and real-life geometry, will add more trigonometric ratios.

## Key terms

:::terms
- circle | đường tròn
- centre, radius | tâm, bán kính
- chord | dây cung
- angle at the centre | góc ở tâm
- inscribed angle | góc nội tiếp
- cyclic quadrilateral | tứ giác nội tiếp
- tangent | tiếp tuyến
- point of contact | tiếp điểm
- arc | cung tròn
- sector | hình quạt tròn
- arc length | độ dài cung
- perpendicular bisector | đường trung trực
:::

## Summary

- The angle at the centre equals the measure of the arc; an inscribed angle is half the measure of the arc; the angle in a semicircle is $90^\circ$.
- A cyclic quadrilateral has opposite angles supplementary; conversely, a quadrilateral with opposite angles supplementary is cyclic.
- A tangent is perpendicular to the radius at the point of contact; two tangents meeting at $A$ give $AB=AC$ and $OA\perp BC$.
- Relations: $AB^2=AH\cdot AO$, $OB^2=OH\cdot OA$.
- Arc length $l=\dfrac{\pi Rn}{180}$; sector area $S=\dfrac{\pi R^2n}{360}$.
- When presenting geometry, give a reason for each step and a clear conclusion.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ is inscribed in a circle $(O;4\text{ cm})$ with $\angle BAC=60^\circ$. Find $\angle BOC$ and the length $BC$ (round to 1 decimal place).

::hint
**What you need:** the angle at the centre is twice the inscribed angle on the same arc.

**Steps:**
1. Find $\angle BOC$.
2. Triangle $OBC$ is isosceles at $O$ with apex angle $120^\circ$; draw the altitude $OK$ to find $BC$.

::solution
We have $\angle BOC=2\cdot60^\circ=120^\circ$. Triangle $OBC$ is isosceles at $O$, and the altitude $OK$ is also the bisector, so $\angle BOK=60^\circ$ and $BK=OB\sin60^\circ=4\cdot\dfrac{\sqrt3}2=2\sqrt3$. So $BC=2BK=4\sqrt3\approx6.9$ (cm).

**Answer.** $\angle BOC=120^\circ$; $BC=4\sqrt3\approx6.9$ cm.
:::

:::exercise
The quadrilateral $ABCD$ is inscribed in a circle with $\angle A=80^\circ$ and $\angle B=95^\circ$. Find $\angle C$ and $\angle D$.

::hint
**What you need:** opposite angles of a cyclic quadrilateral are supplementary.

**Steps:**
1. $\angle C$ is opposite $\angle A$.
2. $\angle D$ is opposite $\angle B$.

::solution
$\angle C=180^\circ-80^\circ=100^\circ$ and $\angle D=180^\circ-95^\circ=85^\circ$. Check: $80+95+100+85=360$.

**Answer.** $\angle C=100^\circ$; $\angle D=85^\circ$.
:::

:::exercise
Given a circle $(O)$ with diameter $AB=10$ cm and a point $C$ on the circle such that $\angle CAB=30^\circ$. Find $\angle ACB$, $BC$ and $AC$ (round $AC$ to 2 decimal places).

::hint
**What you need:** the angle in a semicircle is $90^\circ$; trigonometric ratios in a right-angled triangle.

**Steps:**
1. Show that triangle $ABC$ is right-angled at $C$.
2. Use $\sin30^\circ$ and $\cos30^\circ$.

::solution
Since $AB$ is a diameter, $\angle ACB=90^\circ$. In triangle $ABC$, right-angled at $C$: $BC=AB\sin30^\circ=10\cdot\dfrac12=5$ (cm) and $AC=AB\cos30^\circ=10\cdot\dfrac{\sqrt3}2=5\sqrt3\approx8.66$ (cm).

**Answer.** $\angle ACB=90^\circ$; $BC=5$ cm; $AC=5\sqrt3\approx8.66$ cm.
:::

:::exercise
Given a circle $(O;6\text{ cm})$ and a point $A$ outside it with $OA=10$ cm. Draw the tangents $AB$ and $AC$ ($B$ and $C$ are the points of contact). Find $AB$, $AH$ and $BC$, where $H$ is the intersection of $OA$ and $BC$.

::hint
**What you need:** a tangent is perpendicular to the radius; $AB^2=AH\cdot AO$.

**Steps:**
1. Use Pythagoras' theorem in triangle $ABO$, right-angled at $B$.
2. Find $AH$ from $AB^2=AH\cdot AO$, then $BH$ and $BC$.

::solution
In triangle $ABO$, right-angled at $B$: $AB=\sqrt{100-36}=8$ (cm). From $AB^2=AH\cdot AO$ we get $AH=\dfrac{64}{10}=6.4$ (cm). We have $BH=\dfrac{AB\cdot OB}{OA}=\dfrac{8\cdot6}{10}=4.8$ (cm), so $BC=2BH=9.6$ (cm).

**Answer.** $AB=8$ cm; $AH=6.4$ cm; $BC=9.6$ cm.
:::

:::exercise
**Question 4.** ($3.0$ marks) Given a semicircle with centre $O$ and diameter $AB$. Take a point $C$ on the semicircle ($C$ different from $A$ and $B$) and draw $CH\perp AB$ at $H$. a) Prove that triangle $ABC$ is right-angled at $C$. b) Prove that $CH^2=AH\cdot HB$. c) Given $AB=10$ cm and $AH=2$ cm, find $CH$, $AC$ and $BC$ (round to 2 decimal places if needed).

::hint
**What you need:** the angle in a semicircle; relations in a right-angled triangle.

**Steps:**
1. In part a), use $\angle ACB$ standing on a semicircle.
2. In parts b) and c), use $CH^2=AH\cdot HB$, $AC^2=AH\cdot AB$, $BC^2=BH\cdot AB$.

::solution
a) ($1.0$ mark) $\angle ACB$ is an inscribed angle standing on the semicircle with diameter $AB$, so $\angle ACB=90^\circ$, that is triangle $ABC$ is right-angled at $C$.

b) ($1.0$ mark) Triangle $ABC$ is right-angled at $C$ with altitude $CH$, so the relations in a right-angled triangle give $CH^2=AH\cdot HB$.

c) ($1.0$ mark) $HB=AB-AH=10-2=8$ (cm). So $CH^2=2\cdot8=16$, giving $CH=4$ cm. We have $AC^2=AH\cdot AB=2\cdot10=20$, so $AC=2\sqrt5\approx4.47$ cm, and $BC^2=BH\cdot AB=8\cdot10=80$, so $BC=4\sqrt5\approx8.94$ cm. Check: $AC^2+BC^2=20+80=100=AB^2$.

**Answer.** $CH=4$ cm; $AC=2\sqrt5\approx4.47$ cm; $BC=4\sqrt5\approx8.94$ cm.
:::

:::exercise
Find the length of a $72^\circ$ arc and the area of the corresponding sector of a circle of radius $10$ cm (round to 2 decimal places).

::hint
**What you need:** $l=\dfrac{\pi Rn}{180}$ and $S=\dfrac{\pi R^2n}{360}$.

**Steps:**
1. Substitute $R=10$ and $n=72$ into the two formulas.
2. Simplify, then round.

::solution
$l=\dfrac{\pi\cdot10\cdot72}{180}=4\pi\approx12.57$ (cm). $S=\dfrac{\pi\cdot100\cdot72}{360}=20\pi\approx62.83$ (cm²).

**Answer.** $4\pi\approx12.57$ cm; $20\pi\approx62.83$ cm².
:::

:::exercise
Suppose a paper fan, when opened, is a sector of a circle of radius $20$ cm with an angle at the centre of $120^\circ$. Find the area of the fan and the length of its outer arc (round to 1 decimal place).

::hint
**What you need:** for a sector: $S=\dfrac{\pi R^2n}{360}$ and $l=\dfrac{\pi Rn}{180}$.

**Steps:**
1. Substitute $R=20$ and $n=120$.
2. Simplify the fractions, then round.

::solution
$S=\dfrac{\pi\cdot400\cdot120}{360}=\dfrac{400\pi}3\approx418.9$ (cm²). $l=\dfrac{\pi\cdot20\cdot120}{180}=\dfrac{40\pi}3\approx41.9$ (cm).

**Answer.** $\approx418.9$ cm²; $\approx41.9$ cm.
:::

:::exercise
Suppose a wheel has diameter $60$ cm. When the wheel turns $500$ times, how many metres does it travel (round to 1 decimal place)?

::hint
**What you need:** in each turn the vehicle travels a distance equal to the circumference of the wheel.

**Steps:**
1. Convert the diameter to metres and find the circumference.
2. Multiply by the number of turns.

::solution
The circumference of the wheel is $0.6\pi$ m. In $500$ turns it travels $500\cdot0.6\pi=300\pi\approx942.5$ (m).

**Answer.** About $942.5$ m.
:::

:::exercise Challenge
Given a circle $(O;3\text{ cm})$ and a point $A$ such that the two tangents $AB$ and $AC$ make an angle $\angle BAC=60^\circ$. Prove that triangle $ABC$ is equilateral, then find $OA$, $AB$ and the area of triangle $ABC$ (round to 2 decimal places).

::hint
**What you need:** $AB=AC$ and $AO$ bisects $\angle BAC$; an isosceles triangle with a $60^\circ$ angle is equilateral.

**Steps:**
1. Prove $AB=AC$, so triangle $ABC$ is equilateral.
2. In triangle $ABO$, right-angled at $B$ with $\angle BAO=30^\circ$, find $OA$ and $AB$.

::solution
Since $AB$ and $AC$ are two tangents meeting at $A$, $AB=AC$. Triangle $ABC$ is isosceles at $A$ with $\angle BAC=60^\circ$, so it is equilateral. Since $AO$ bisects $\angle BAC$, $\angle BAO=30^\circ$. In triangle $ABO$, right-angled at $B$: $OA=\dfrac{OB}{\sin30^\circ}=6$ (cm) and $AB=\sqrt{36-9}=3\sqrt3\approx5.20$ (cm). The area of an equilateral triangle of side $3\sqrt3$ is $\dfrac{\sqrt3}4\cdot27=\dfrac{27\sqrt3}4\approx11.69$ (cm²).

**Answer.** Triangle $ABC$ is equilateral; $OA=6$ cm; $AB=3\sqrt3\approx5.20$ cm; $S\approx11.69$ cm².
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ is inscribed in a circle $(O)$ and the angle at the centre $\angle BOC=80^\circ$ (standing on the same arc $BC$ as $\angle BAC$). The measure of $\angle BAC$ is
A. $80^\circ$.
B. $160^\circ$.
C. $40^\circ$.
D. $100^\circ$.
::key C
An inscribed angle is half the angle at the centre on the same arc: $\angle BAC=80^\circ\div2=40^\circ$. Option A confuses the two angles as equal, B doubles instead of halving, and D is $180^\circ-80^\circ$.

::mc
The quadrilateral $ABCD$ is inscribed in a circle with $\angle A=70^\circ$. The measure of $\angle C$ is
A. $290^\circ$.
B. $70^\circ$.
C. $20^\circ$.
D. $110^\circ$.
::key D
Opposite angles are supplementary, so $\angle C=180^\circ-70^\circ=110^\circ$. Option B takes opposite angles as equal, C is $90^\circ-70^\circ$, and A is $360^\circ-70^\circ$.

::mc
Given a circle $(O;3\text{ cm})$ and a point $A$ with $OA=5$ cm. $AB$ is the tangent to the circle at $B$. The length of $AB$ is
A. $4$ cm.
B. $2$ cm.
C. $\sqrt{34}$ cm.
D. $8$ cm.
::key A
Triangle $ABO$ is right-angled at $B$, so $AB=\sqrt{25-9}=4$. Option D is $5+3$, B is $5-3$, and C is $\sqrt{25+9}$ (adding instead of subtracting).

::mc
The length of a $90^\circ$ arc of a circle of radius $4$ cm is
A. $\pi$ cm.
B. $2\pi$ cm.
C. $4\pi$ cm.
D. $8\pi$ cm.
::key B
$l=\dfrac{\pi\cdot4\cdot90}{180}=2\pi$. Option A halves it again, C uses $\dfrac{\pi R n}{90}$, and D is the circumference of the whole circle.

::tf
Triangle $ABC$ is inscribed in a circle $(O;5\text{ cm})$ with $\angle BAC=30^\circ$. Decide whether each statement is true or false.
a) $\angle BOC=60^\circ$.
b) $BC=5$ cm.
c) $\angle OBC=70^\circ$.
d) Triangle $OBC$ is equilateral.
::key T T F T
a) True: the angle at the centre is twice the inscribed angle. b) True: triangle $OBC$ is isosceles with apex angle $60^\circ$, so it is equilateral and $BC=OB=5$. c) False: $\angle OBC=60^\circ$. d) True: as in b).

::sa
Given a circle $(O;6\text{ cm})$ and a point $A$ with $OA=10$ cm. $AB$ is the tangent at $B$. Find $AB$ (in cm).
::key 8
$AB=\sqrt{10^2-6^2}=8$.

::sa
Find the area of a sector of a circle of radius $6$ cm with an angle at the centre of $60^\circ$ (in cm², round to 1 decimal place).
::key 18.8
$S=\dfrac{\pi\cdot36\cdot60}{360}=6\pi\approx18.8$.
:::
