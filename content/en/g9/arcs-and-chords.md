---
title: Arcs and chords of a circle
description: Recognise chords, angles at the centre, minor and major arcs; find the length of a chord and the measure of an arc.
minutes: 20
---

:::goals
- Recognise a chord and know that a diameter is the longest chord.
- Find the length of a chord, or its distance from the centre, using Pythagoras' theorem.
- Recognise angles at the centre, minor and major arcs, and find the measure of an arc.
:::

The classroom clock has a minute hand $15$ cm long. From $7{:}00$ to $7{:}20$, its tip moves along an arc from $A$ to $B$. What is the measure of that arc? How long is the segment $AB$?

## Chords of a circle

### Explore: which chord is the longest?

On the circle $(O, 5\text{ cm})$, joining two points gives a **chord**. A chord $4$ cm from the centre is $6$ cm long, one $3$ cm from the centre is $8$ cm long, and one through the centre is $10$ cm long. The closer to the centre, the longer the chord.

:::definition Chord
A segment joining two different points of a circle is called a **chord**. A chord through the centre is a diameter.
:::

:::theorem A diameter is the longest chord
Of all the chords of a circle, the longest is a diameter.
:::

**Why?** For a chord $AB$ not through the centre, the triangle $OAB$ gives $AB<OA+OB=2R$. If $AB$ passes through the centre, then $AB=2R$.

The triangle $OAB$ is isosceles ($OA=OB=R$). Hence the foot $H$ of the perpendicular from $O$ to $AB$ is the midpoint of $AB$, and by Pythagoras' theorem:

$$AB=2HA=2\sqrt{R^2-OH^2}.$$

:::diagram The chord $AB$ and its distance $OH$ from the centre
alt: A circle with centre O, a horizontal chord AB below the centre, the segment OH perpendicular to AB at its midpoint H, and the radii OA and OB
point O 0,0 above
point A -4,-3 below-left
point B 4,-3 below-right
point H 0,-3 below
circle O 5
segment A B
segment O A
segment O B
segment O H dashed
right O H B
mark A H 1
mark H B 1
:::

:::example Finding the length of a chord
Consider the circle $(O, 10\text{ cm})$ and a chord $AB$ at distance $6$ cm from $O$. Find $AB$.

**Solution.** Draw $OH\perp AB$; then $OH=6$ cm and $H$ is the midpoint of $AB$ (the triangle $OAB$ is isosceles). In the triangle $OHA$, right-angled at $H$, we have

$$HA=\sqrt{OA^2-OH^2}=\sqrt{10^2-6^2}=8\ \text{(cm)}.$$

So $AB=2HA=16$ cm.
:::

## Angles at the centre and arcs

Two points $A$, $B$ on a circle split it into two **arcs**, both written $\overset{\frown}{AB}$; to tell them apart, we name a point $M$ on one and write $\overset{\frown}{AMB}$.

:::definition Angle at the centre, minor arc, major arc
An angle whose vertex is the centre of the circle is called an **angle at the centre**. For an angle at the centre $\angle AOB$ ($0^\circ<\angle AOB<180^\circ$), the arc inside the angle is the **minor arc**, and the other arc is the **major arc**; the minor arc $AB$ is called the arc **subtended** by $\angle AOB$. If $AB$ is a diameter, each arc is a **semicircle**.
:::

:::diagram The angle at the centre $\angle AOB$ subtending the minor arc $AB$
alt: A circle with centre O, two radii OA and OB forming an angle of 100 degrees at the centre, and a point M on the major arc AB
point O 0,0 below
point A 3,0 right
point B -0.52,2.95 above
point M -1.93,-2.3 below-left
circle O 3
segment O A
segment O B
angle A O B "100°"
:::

## The measure of an arc

:::definition The measure of an arc
- The measure of a minor arc equals the angle at the centre subtending it.
- The measure of a major arc is $360^\circ$ minus the measure of the minor arc with the same end points.
- A semicircle measures $180^\circ$; the whole circle measures $360^\circ$.

We write $\overset{\frown}{AB}=100^\circ$ for "the arc $AB$ measures $100^\circ$". In one circle, two arcs are equal if they have the same measure.
:::

If a point $C$ lies on the arc $AB$, then $\overset{\frown}{AB}=\overset{\frown}{AC}+\overset{\frown}{CB}$ (the angle $\angle AOB$ splits into two angles).

:::example Minor arc and major arc
In the figure above, $\angle AOB=100^\circ$. Find the measures of the minor arc $AB$ and the major arc $AMB$.

**Solution.** We have $\overset{\frown}{AB}=\angle AOB=100^\circ$ (a minor arc equals the angle at the centre subtending it). Hence

$$\overset{\frown}{AMB}=360^\circ-100^\circ=260^\circ.$$

So the minor arc $AB$ measures $100^\circ$ and the major arc $AMB$ measures $260^\circ$.
:::

Now we answer the question about the clock from the start.

:::example The minute hand of a clock
The minute hand $OA$ is $15$ cm long. From $7{:}00$ to $7{:}20$, its tip moves from $A$ to $B$. Find the measure of the arc $AB$ travelled by the tip and the length $AB$ (give your answer to 2 decimal places).

**Solution.** Each minute the minute hand turns $\dfrac{360^\circ}{60}=6^\circ$, so in $20$ minutes it turns $20\cdot6^\circ=120^\circ$. Hence $\angle AOB=120^\circ$ and $\overset{\frown}{AB}=120^\circ$.

Draw $OH\perp AB$. The triangle $OAB$ is isosceles, so $OH$ is also an angle bisector, hence $\angle AOH=60^\circ$. In the triangle $OHA$, right-angled at $H$, we have

$$HA=OA\cdot\sin60^\circ=15\cdot\frac{\sqrt3}{2},\qquad AB=2HA=15\sqrt3\approx25.98\ \text{(cm)}.$$

So the arc measures $120^\circ$ and $AB\approx25.98$ cm.
:::

When three points split a circle into three arcs, we add the measures of arcs.

:::example Three arcs of a circle
Three points $A$, $B$, $C$ split the circle $(O)$ into three arcs $AB$, $BC$, $CA$, none containing the third point, with $\overset{\frown}{AB}=100^\circ$ and $\overset{\frown}{BC}=140^\circ$. Find the measures of the arc $CA$ and the arc $ACB$.

**Solution.** The three arcs together make the whole circle, so

$$\overset{\frown}{CA}=360^\circ-100^\circ-140^\circ=120^\circ,\qquad \overset{\frown}{ACB}=\overset{\frown}{BC}+\overset{\frown}{CA}=260^\circ.$$

So the arc $CA$ measures $120^\circ$ and the arc $ACB$ measures $260^\circ$.
:::

:::warning Common mistakes
- **Forgetting to double for a chord.** Wrong: a chord $6$ cm from the centre of $(O, 10\text{ cm})$ has length $\sqrt{100-36}=8$ cm. Why it is wrong: $8$ cm is only half the chord, $HA$. Right: $AB=16$ cm.
- **Using the angle at the centre for the major arc.** Wrong: $\angle AOB=70^\circ$, so the major arc $AB$ measures $70^\circ$. Why it is wrong: the angle equals the minor arc only. Right: the major arc measures $290^\circ$.
:::

## Key terms

:::terms
- chord | dây cung
- angle at the centre | góc ở tâm
- arc | cung
- minor arc / major arc | cung nhỏ / cung lớn
- subtended arc | cung bị chắn
- semicircle | nửa đường tròn
- measure of an arc | số đo cung
:::

## Summary

- A chord joins two points of a circle; a diameter is the longest chord.
- If $OH\perp AB$, then $H$ is the midpoint of $AB$ and $AB=2\sqrt{R^2-OH^2}$.
- A minor arc equals the angle at the centre subtending it; a major arc is $360^\circ$ minus the minor arc; a semicircle is $180^\circ$.
- If $C$ lies on the arc $AB$, then $\overset{\frown}{AB}=\overset{\frown}{AC}+\overset{\frown}{CB}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
An angle at the centre has $\angle AOB=65^\circ$. Find the measures of the minor arc $AB$ and the major arc $AB$.

::hint
**What you need:** the minor arc equals the angle at the centre; the major arc is $360^\circ$ minus the minor arc.

**Steps:**
1. Read off the minor arc, then subtract it from $360^\circ$.

::solution
We have $\overset{\frown}{AB}_{\text{minor}}=65^\circ$, so the major arc measures $360^\circ-65^\circ=295^\circ$.

So the arcs measure $65^\circ$ and $295^\circ$.

**Answer.** Minor arc $65^\circ$, major arc $295^\circ$.
:::

:::exercise
Consider the circle $(O, 5\text{ cm})$ and a chord $AB$ at distance $3$ cm from the centre. Find $AB$.

::hint
**What you need:** $AB=2\sqrt{R^2-OH^2}$.

**Steps:**
1. Find half the chord, $HA$, then double it.

::solution
Draw $OH\perp AB$; then $HA=\sqrt{5^2-3^2}=4$ (cm), so $AB=2HA=8$ cm.

So $AB=8$ cm.

**Answer.** $AB=8$ cm.
:::

:::exercise
Consider the circle $(O, 13\text{ cm})$ and a chord $AB=24$ cm. Find the distance from $O$ to $AB$.

::hint
**What you need:** the foot of the perpendicular, $H$, is the midpoint of $AB$.

**Steps:**
1. Find $HA=12$ cm.
2. Use Pythagoras' theorem in the triangle $OHA$.

::solution
Draw $OH\perp AB$; then $HA=\dfrac{24}{2}=12$ (cm). In the triangle $OHA$, right-angled at $H$, we have $OH=\sqrt{13^2-12^2}=5$ (cm).

So the distance from $O$ to $AB$ is $5$ cm.

**Answer.** $5$ cm.
:::

:::exercise
Consider the circle $(O, R)$ and a chord $AB=R$. Find the measures of the minor arc $AB$ and the major arc $AB$.

::hint
**What you need:** a triangle with three equal sides is equilateral.

**Steps:**
1. Show that the triangle $OAB$ is equilateral and deduce $\angle AOB$.

::solution
We have $OA=OB=AB=R$, so the triangle $OAB$ is equilateral, hence $\angle AOB=60^\circ$. Therefore the minor arc measures $60^\circ$ and the major arc measures $300^\circ$.

So the arcs measure $60^\circ$ and $300^\circ$.

**Answer.** Minor arc $60^\circ$, major arc $300^\circ$.
:::

:::exercise
Ha starts her homework at $3{:}00$ and finishes at $3{:}45$. Through how many degrees do the minute hand and the hour hand of the clock turn in that time?

::hint
**What you need:** the minute hand turns $6^\circ$ per minute; the hour hand turns $30^\circ$ per hour.

**Steps:**
1. Multiply the number of minutes by $6^\circ$.
2. The hour hand turns for $\dfrac{45}{60}$ of an hour.

::solution
The minute hand turns $45\cdot6^\circ=270^\circ$. The hour hand turns $\dfrac{45}{60}\cdot30^\circ=22.5^\circ$.

So the minute hand turns $270^\circ$ and the hour hand $22.5^\circ$.

**Answer.** The minute hand turns $270^\circ$ and the hour hand $22.5^\circ$.
:::

:::exercise
Consider the circle $(O, 8\text{ cm})$ and a chord $AB$ with $\angle AOB=120^\circ$. Find $AB$ (give your answer to 2 decimal places). (Revise [trigonometric ratios of acute angles](lesson:acute-angle-trig-ratios).)

::hint
**What you need:** the altitude $OH$ of the isosceles triangle $OAB$ is also an angle bisector.

**Steps:**
1. Deduce that $\angle AOH=60^\circ$.
2. Find $HA=OA\cdot\sin60^\circ$, then double it.

::solution
Draw $OH\perp AB$. The triangle $OAB$ is isosceles, so $\angle AOH=60^\circ$. In the triangle $OHA$, right-angled at $H$, we have $HA=8\sin60^\circ=4\sqrt3$ (cm), hence $AB=8\sqrt3\approx13.86$ cm.

So $AB\approx13.86$ cm.

**Answer.** $AB=8\sqrt3\approx13.86$ cm.
:::

:::exercise
**(1.5 marks)** Consider the circle $(O, 10\text{ cm})$ and a chord $AB=16$ cm. Let $H$ be the midpoint of $AB$.

a) Prove that $OH\perp AB$ and find $OH$.

b) Find the angle $\angle AOB$ (give your answer to the nearest degree).

c) Find the measure of the major arc $AB$.

::hint
**What you need:** in an isosceles triangle, the median from the apex is also an altitude and an angle bisector.

**Steps:**
1. Use the isosceles triangle $OAB$, then Pythagoras' theorem.
2. Find $\tan\angle AOH$, then $\angle AOB=2\angle AOH$.
3. Subtract the minor arc from $360^\circ$.

::solution
a) The triangle $OAB$ is isosceles and $OH$ is a median, so it is also an altitude: $OH\perp AB$. We have $HA=8$ cm, so $OH=\sqrt{10^2-8^2}=6$ (cm).

b) In the triangle $OHA$, right-angled at $H$, we have $\tan\angle AOH=\dfrac{8}{6}$, so $\angle AOH\approx53.13^\circ$. Since $OH$ is the angle bisector, $\angle AOB\approx106.26^\circ\approx106^\circ$.

c) The major arc $AB$ measures $360^\circ-106.26^\circ\approx254^\circ$.

So $OH=6$ cm, $\angle AOB\approx106^\circ$ and the major arc $AB$ is about $254^\circ$.

**Answer.** a) $OH=6$ cm; b) $\angle AOB\approx106^\circ$; c) about $254^\circ$.
:::

:::exercise Challenge
Consider the circle $(O, 10\text{ cm})$ and two parallel chords $AB=12$ cm and $CD=16$ cm. Find the distance between the two chords.

::hint
**What you need:** the distance from the centre to a chord is $\sqrt{R^2-\left(\frac{\text{chord}}{2}\right)^2}$.

**Steps:**
1. Find the distance from $O$ to each chord.
2. Look at two cases: the chords on the same side of $O$ or on opposite sides.

::solution
The distance from $O$ to $AB$ is $\sqrt{10^2-6^2}=8$ (cm), and to $CD$ it is $\sqrt{10^2-8^2}=6$ (cm). The chords are parallel, so both perpendiculars from $O$ lie on one line.

If the chords are on the same side of $O$, the distance is $8-6=2$ (cm); if they are on opposite sides, it is $8+6=14$ (cm).

So the distance between the chords is $2$ cm or $14$ cm.

**Answer.** $2$ cm or $14$ cm.
:::

## Mini test

:::quiz
::mc
An angle at the centre has $\angle AOB=50^\circ$. The major arc $AB$ measures
A. $50^\circ$.
B. $130^\circ$.
C. $310^\circ$.
D. $260^\circ$.
::key C
$360^\circ-50^\circ=310^\circ$. B uses $180^\circ-50^\circ$; A is the minor arc; D uses $360^\circ-2\cdot50^\circ$.

::mc
The longest chord of the circle $(O, 6\text{ cm})$ has length
A. $6$ cm.
B. $12$ cm.
C. $36$ cm.
D. $3$ cm.
::key B
The longest chord is a diameter, of length $2R=12$ cm. A confuses it with the radius, and C takes $R^2$.

::mc
A chord $AB$ of the circle $(O, 10\text{ cm})$ is $8$ cm from the centre. The length $AB$ is
A. $6$ cm.
B. $12$ cm.
C. $4$ cm.
D. $4\sqrt{41}$ cm.
::key B
$AB=2\sqrt{10^2-8^2}=12$ cm. A forgets to double, C takes $2(10-8)$, and D adds instead of subtracting under the root.

::mc
In $25$ minutes, the minute hand of a clock turns through
A. $125^\circ$.
B. $150^\circ$.
C. $25^\circ$.
D. $300^\circ$.
::key B
The minute hand turns $6^\circ$ per minute, so $25\cdot6^\circ=150^\circ$. A uses $5^\circ$ per minute.

::tf
Consider the circle $(O, 5\text{ cm})$ and a chord $AB=8$ cm, with $H$ the midpoint of $AB$. Decide whether each statement is true or false.
a) $OH\perp AB$.
b) $OH=3$ cm.
c) The minor arc $AB$ measures $90^\circ$.
d) The circle has a chord of length $11$ cm.
::key T T F F
a) True: the triangle $OAB$ is isosceles. b) True: $OH=\sqrt{25-16}=3$. c) False: $AB^2=64\neq OA^2+OB^2=50$, so $\angle AOB\neq90^\circ$. d) False: no chord is longer than $2R=10$ cm.

::sa
A chord $AB=30$ cm of the circle $(O, 17\text{ cm})$ is how many centimetres from the centre $O$?
::key 8
$OH=\sqrt{17^2-15^2}=\sqrt{64}=8$ (cm).

::sa
Three points split a circle into three arcs whose measures are in the ratio $2:3:4$. Find the measure (in degrees) of the smallest arc.
::key 80
The arcs add up to $360^\circ$; one part is $\dfrac{360^\circ}{9}=40^\circ$, so the smallest arc is $80^\circ$.
:::
