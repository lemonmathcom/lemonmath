---
title: Relative positions of a line and a circle
description: Find the position of a line and a circle from the distance to the centre, recognise tangents and use the property of two tangents from a point.
minutes: 20
---

:::goals
- Find the relative position of a line and a circle by comparing $d$ with $R$.
- Recognise and prove that a line is a tangent to a circle.
- Use the property of two tangents from a point.
:::

A mobile phone mast covers a radius of $5$ km. One straight main road is $3$ km from the mast, and another road is $7$ km from it. How long is the stretch with signal on each road?

## Three positions of a line and a circle

### Explore: move the line away from the centre

Let $d=OH$ be the distance from $O$ to the line $a$ ($OH\perp a$). Move $a$ slowly away from the centre: at first there are two points of intersection, they merge into one when $d=R$, and then they disappear when $d>R$.

:::theorem Relative position of a line $a$ and a circle $(O, R)$
- $d<R$: $a$ and $(O)$ intersect (they have $2$ common points);
- $d=R$: $a$ and $(O)$ touch (they have $1$ common point);
- $d>R$: $a$ and $(O)$ do not meet.
:::

When $a$ touches $(O)$, $a$ is called a **tangent** and the common point is the **point of contact**. When they intersect, the two points form a chord of length $2\sqrt{R^2-d^2}$ (lesson [Arcs and chords](lesson:arcs-and-chords)).

:::diagram The line $a$ cuts, $b$ touches and $c$ does not meet $(O)$
alt: A circle with centre O; line a cuts it, line b touches it at H, line c is outside it
point O 0,0 above
point P1 -3.2,1.2 left "a"
point P2 3.2,1.2 ""
point Q1 -3.2,-2.5 left "b"
point Q2 3.2,-2.5 ""
point H 0,-2.5 below
point S1 3.6,-2.6 ""
point S2 3.6,2.6 above "c"
circle O 2.5
segment P1 P2
segment Q1 Q2
segment S1 S2
segment O H dashed
:::

:::example Answering the opening question
Solve the opening problem.

**Solution.** The first road has $d=3<5$, so it cuts the edge of the coverage zone in a chord of length

$$2\sqrt{R^2-d^2}=2\sqrt{5^2-3^2}=2\cdot4=8\ \text{(km)}.$$

The second road has $d=7>5$, so it does not meet the coverage zone.

So the first road has $8$ km with signal and the second road has no signal.
:::

## Tangents to a circle

:::theorem Property and test for a tangent
- If the line $a$ is the tangent to $(O)$ at $A$, then $a\perp OA$.
- Conversely, if the line $a$ passes through a point $A$ on $(O)$ and $a\perp OA$, then $a$ is the tangent to $(O)$ at $A$.
:::

Indeed, $a\perp OA$ at $A$ exactly when the distance from $O$ to $a$ is $d=OA=R$.

:::example Proving that a line is a tangent
The triangle $ABC$ is right-angled at $A$. Prove that $AC$ is a tangent to the circle $(B, BA)$.

**Solution.** We have $A$ on the circle $(B, BA)$ and $AC\perp BA$ at $A$ (because $\angle BAC=90^\circ$).

So $AC$ is the tangent to $(B, BA)$ at $A$ (test for a tangent).
:::

Because of the right angle at the point of contact, we find the length of a tangent by Pythagoras' theorem.

:::example The length of a tangent
From a point $M$ at distance $10$ cm from the centre $O$ of the circle $(O, 6\text{ cm})$, draw the tangent $MA$ ($A$ is the point of contact). Find $MA$.

**Solution.** We have $OA\perp MA$ (property of a tangent). In the triangle $OAM$, right-angled at $A$, Pythagoras' theorem gives

$$MA=\sqrt{OM^2-OA^2}=\sqrt{10^2-6^2}=8\ \text{(cm)}.$$

So $MA=8$ cm.
:::

## Two tangents from a point

:::theorem Property of two tangents from a point
If the tangents to $(O)$ at $A$ and $B$ meet at $M$, then:
- $MA=MB$;
- $MO$ bisects the angle $\angle AMB$;
- $OM$ bisects the angle $\angle AOB$.
:::

**Why?** The triangles $OAM$ and $OBM$ are right-angled at $A$ and $B$, share the hypotenuse $OM$ and have $OA=OB$, so they are congruent (RHS). Hence $MA=MB$, $\angle AMO=\angle BMO$ and $\angle AOM=\angle BOM$.

:::diagram Two tangents $MA$, $MB$ to the circle $(O)$
alt: From a point M outside the circle with centre O, two tangents MA, MB perpendicular to the radii OA, OB
point O 0,0 left
point M 4,0 right
point A 1,1.732 above
point B 1,-1.732 below
circle O 2
segment M A
segment M B
segment O A
segment O B
segment O M dashed
right O A M
right O B M
mark M A 1
mark M B 1
:::

:::example Two tangents from one point
From a point $M$ with $OM=10$ cm, draw the two tangents $MA$, $MB$ to the circle $(O, 5\text{ cm})$. Find $MA$, the angle $\angle AMB$ and $AB$.

**Solution.** In the triangle $OAM$, right-angled at $A$, we have

$$MA=\sqrt{10^2-5^2}=5\sqrt3\approx8.66\ \text{(cm)},\qquad \sin\angle AMO=\frac{OA}{OM}=\frac12\Rightarrow\angle AMO=30^\circ.$$

Since $MO$ bisects $\angle AMB$, we get $\angle AMB=60^\circ$. The triangle $MAB$ is isosceles with an angle of $60^\circ$, so it is equilateral, hence $AB=MA$.

So $MA=AB=5\sqrt3\approx8.66$ cm and $\angle AMB=60^\circ$.
:::

:::warning Common mistakes
- **Measuring $d$ to any point of the line.** Wrong: "$M$ is on $a$ and $OM=7>5$, so $a$ does not meet $(O, 5)$". Why it is wrong: $d=OH$ with $OH\perp a$, which is shorter than $OM$. Right: compute $OH$.
- **Calling a line a tangent too soon.** Wrong: "$a\perp OA$, so $a$ is a tangent". Why it is wrong: $A$ must also lie on the circle. Right: check both conditions.
:::

## Key terms

:::terms
- intersect | cắt nhau
- touch (be tangent) | tiếp xúc
- do not meet | không giao nhau
- tangent | tiếp tuyến
- point of contact | tiếp điểm
- angle bisector | tia phân giác
:::

## Summary

- $d<R$: they intersect (chord of length $2\sqrt{R^2-d^2}$); $d=R$: they touch; $d>R$: they do not meet.
- A tangent is perpendicular to the radius at the point of contact, and conversely.
- Length of a tangent: $MA=\sqrt{OM^2-R^2}$.
- Two tangents from $M$: $MA=MB$, and $MO$, $OM$ are angle bisectors.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Three lines are at distances $4$ cm, $6$ cm and $7.5$ cm from the centre of the circle $(O, 6\text{ cm})$. Find the position of each line relative to the circle.

::hint
**What you need:** compare $d$ with $R$.

**Steps:**
1. Compare each distance with $6$.

::solution
Let $d$ be the distance from the centre $O$ to the line and $R=6$ cm the radius. We compare $d$ with $R$:

- If $d<R$, the line meets the circle at two points;
- If $d=R$, the line touches the circle;
- If $d>R$, the line and the circle do not meet.

For the first line, $d=4<6$, so it cuts the circle.

For the second line, $d=6=R$, so it touches the circle.

For the third line, $d=7.5>6$, so it does not meet the circle.

So the first line cuts the circle, the second touches it and the third does not meet it.

**Answer.** The first line cuts the circle, the second touches it, the third does not meet it.
:::

:::exercise
The line $a$ is at distance $8$ cm from the centre of the circle $(O, 10\text{ cm})$. Prove that $a$ cuts the circle at two points $A$, $B$ and find $AB$.

::hint
**What you need:** if $d<R$ they intersect; the chord has length $2\sqrt{R^2-d^2}$.

**Steps:**
1. Compare $8$ with $10$, then find the chord.

::solution
Let $d=8$ cm be the distance from $O$ to the line $a$ and $R=10$ cm the radius. Since $d<R$, the line $a$ meets the circle at two points $A$, $B$.

Draw $OH\perp a$ at $H$; then $OH=8$ cm. Since $OA=OB$, triangle $OAB$ is isosceles at $O$, so the altitude $OH$ is also a median, that is $H$ is the midpoint of $AB$.

Consider triangle $OHA$ with a right angle at $H$. By Pythagoras' theorem, we have
$$HA=\sqrt{OA^2-OH^2}=\sqrt{10^2-8^2}=\sqrt{36}=6\ \text{(cm)}.$$

It follows that $AB=2HA=12$ (cm).

So the line $a$ meets the circle at two points and $AB=12$ cm.

**Answer.** $AB=12$ cm.
:::

:::exercise
From a point $M$ at distance $15$ cm from the centre $O$, draw the tangent $MA$ to the circle $(O, 9\text{ cm})$. Find $MA$.

::hint
**What you need:** $OA\perp MA$, so the triangle $OAM$ is right-angled at $A$.

**Steps:**
1. Use Pythagoras' theorem with hypotenuse $OM$.

::solution
Since $MA$ is a tangent to the circle $(O)$ at $A$, we have $MA\perp OA$, so triangle $OAM$ has a right angle at $A$.

In triangle $OAM$, we have $OM=15$ cm and $OA=9$ cm (a radius). By Pythagoras' theorem,
$$MA=\sqrt{OM^2-OA^2}=\sqrt{15^2-9^2}=\sqrt{144}=12\ \text{(cm)}.$$

So $MA=12$ cm.

**Answer.** $MA=12$ cm.
:::

:::exercise
The triangle $ABC$ is right-angled at $A$, with $AB=3$ cm and $AC=4$ cm. Prove that $AB$ is a tangent to the circle $(C, CA)$ and that the point $B$ lies outside this circle.

::hint
**What you need:** the test for a tangent.

**Steps:**
1. Show that $A$ is on $(C, CA)$ and $AB\perp CA$.
2. Compare $CB$ with $4$.

::solution
We have $A$ on $(C, CA)$ and $AB\perp CA$ at $A$, so $AB$ is a tangent. By Pythagoras' theorem, $CB=\sqrt{3^2+4^2}=5>4$, so $B$ lies outside the circle.

So $AB$ is a tangent and $B$ lies outside $(C, CA)$.

**Answer.** $AB$ is a tangent to $(C, CA)$; $B$ lies outside the circle because $CB=5$ cm $>4$ cm.
:::

:::exercise
From the top $M$ of a tower $80$ m high, we look out to sea to the horizon at $A$, where $MA$ touches the Earth. Take a cross-section of the Earth to be a circle with centre $O$ and radius $6400$ km. Find $MA$ (give your answer to the nearest kilometre).

::hint
**What you need:** $OA\perp MA$; convert $80$ m $=0.08$ km.

**Steps:**
1. Compute $OM=6400+0.08$ (km).
2. Use Pythagoras' theorem in the triangle $OAM$, right-angled at $A$.

::solution
We have $OM=6400.08$ km and the triangle $OAM$ is right-angled at $A$, so

$$MA=\sqrt{6400.08^2-6400^2}\approx\sqrt{1024}=32\ \text{(km)}.$$

So from the top of the tower we can see about $32$ km.

**Answer.** About $32$ km.
:::

:::exercise
From a point $M$ with $OM=8$ cm, draw the two tangents $MA$, $MB$ to the circle $(O, 4\text{ cm})$. Find the angle $\angle AMB$ and the measure of the minor arc $AB$. (Revise [arcs and chords](lesson:arcs-and-chords).)

::hint
**What you need:** $\sin\angle AMO=\dfrac{OA}{OM}$; the angles of a quadrilateral add up to $360^\circ$.

**Steps:**
1. Find $\angle AMO$, then $\angle AMB$, then $\angle AOB$.

::solution
In the triangle $OAM$, right-angled at $A$, we have $\sin\angle AMO=\dfrac48=\dfrac12$, so $\angle AMO=30^\circ$ and $\angle AMB=60^\circ$. The quadrilateral $OAMB$ has right angles at $A$ and $B$, so $\angle AOB=360^\circ-90^\circ-90^\circ-60^\circ=120^\circ$.

So $\angle AMB=60^\circ$ and the minor arc $AB$ measures $120^\circ$.

**Answer.** $\angle AMB=60^\circ$; the minor arc $AB$ measures $120^\circ$.
:::

:::exercise
**(2.0 marks)** From a point $M$ outside the circle $(O, 3\text{ cm})$, with $OM=5$ cm, draw the two tangents $MA$, $MB$ ($A$, $B$ are the points of contact). Let $H$ be the point where $OM$ meets $AB$.

a) Prove that the four points $M$, $A$, $O$, $B$ lie on one circle.

b) Prove that $OM\perp AB$ at $H$.

c) Find $MA$ and $AB$.

::hint
**What you need:** the median to the hypotenuse is half the hypotenuse; the property of the perpendicular bisector.

**Steps:**
1. Let $I$ be the midpoint of $OM$ and prove that $IA=IB=IO=IM$.
2. Show that $OM$ is the perpendicular bisector of $AB$.
3. Find $AH$ using the area of the triangle $OAM$.

::solution
a) The triangles $OAM$ and $OBM$ are right-angled at $A$ and $B$ (property of a tangent). Let $I$ be the midpoint of $OM$; then $IA=IB=IO=IM=\dfrac{OM}{2}$ (the median to the hypotenuse). Hence $M$, $A$, $O$, $B$ lie on the circle with centre $I$.

b) We have $MA=MB$ (two tangents from a point) and $OA=OB$, so $OM$ is the perpendicular bisector of $AB$. Hence $OM\perp AB$ at the midpoint $H$ of $AB$.

c) We have $MA=\sqrt{5^2-3^2}=4$ (cm). The area of the triangle $OAM$ is $\dfrac12\cdot OA\cdot MA=\dfrac12\cdot OM\cdot AH$, so $AH=\dfrac{3\cdot4}{5}=2.4$ (cm). Hence $AB=2AH=4.8$ cm.

So $MA=4$ cm and $AB=4.8$ cm.

**Answer.** a), b) See the proof; c) $MA=4$ cm, $AB=4.8$ cm.
:::

:::exercise Challenge
From a point $M$ outside the circle $(O)$, draw the two tangents $MA$, $MB$ with $MA=10$ cm. The tangent at a point $C$ on the minor arc $AB$ meets $MA$ and $MB$ at $D$ and $E$ respectively. Find the perimeter of the triangle $MDE$.

::hint
**What you need:** the property of two tangents from a point, used at $D$ and at $E$.

**Steps:**
1. Show that $DC=DA$ and $EC=EB$, then write the perimeter in terms of $MA$, $MB$.

::solution
We have $DC=DA$ (two tangents from $D$) and $EC=EB$ (two tangents from $E$). Hence

$$MD+DE+EM=MD+DC+CE+EM=(MD+DA)+(EB+EM)=MA+MB=20\ \text{(cm)}.$$

So the perimeter of the triangle $MDE$ is $20$ cm.

**Answer.** $20$ cm.
:::

## Mini test

:::quiz
::mc
Consider the circle $(O, 7\text{ cm})$ and a line $a$ at distance $7$ cm from $O$. Which of the following statements is true?
A. $a$ cuts $(O)$ at two points.
B. $a$ touches $(O)$.
C. $a$ does not meet $(O)$.
D. $a$ passes through $O$.
::key B
$d=R=7$ cm, so $a$ touches $(O)$.

::mc
A line at distance $3$ cm from the centre of the circle $(O, 5\text{ cm})$ cuts the circle in a chord of length
A. $8$ cm.
B. $4$ cm.
C. $2\sqrt{34}$ cm.
D. $2$ cm.
::key A
$2\sqrt{25-9}=8$ cm. B forgets to double, and C adds under the root.

::mc
From a point $M$ with $OM=13$ cm, draw the tangent $MA$ to the circle $(O, 5\text{ cm})$. The length $MA$ is
A. $\sqrt{194}$ cm.
B. $18$ cm.
C. $8$ cm.
D. $12$ cm.
::key D
$MA=\sqrt{169-25}=12$ cm. A treats $OM$ as a shorter side, C takes $13-5$, and B takes $13+5$.

::mc
The tangents at $A$ and $B$ to the circle $(O)$ meet at $M$, and $\angle AMB=50^\circ$. The angle $\angle AOB$ is
A. $50^\circ$.
B. $40^\circ$.
C. $130^\circ$.
D. $25^\circ$.
::key C
The quadrilateral $OAMB$ has two right angles, so $\angle AOB=360^\circ-180^\circ-50^\circ=130^\circ$. D is $\angle AMO$.

::tf
From a point $M$ with $OM=12$ cm, draw the two tangents $MA$, $MB$ to the circle $(O, 6\text{ cm})$. Decide whether each statement is true or false.
a) $MA=6\sqrt3$ cm.
b) $\angle AMO=30^\circ$.
c) $\angle AMB=30^\circ$.
d) $MA=MB$.
::key T T F T
a) True: $MA=\sqrt{108}=6\sqrt3$. b) True: $\sin\angle AMO=\dfrac12$. c) False: $\angle AMB=60^\circ$. d) True: two tangents from a point.

::sa
A line at distance $4$ cm from the centre $O$ cuts the circle $(O)$ in a chord of length $6$ cm. Find the radius (in cm) of the circle.
::key 5
Half the chord is $3$ cm, so $R=\sqrt{4^2+3^2}=5$ cm.

::sa
The two tangents $MA$, $MB$ to the circle $(O)$ have $MA=7.5$ cm. The tangent at a point $C$ on the minor arc $AB$ meets $MA$ and $MB$ at $D$ and $E$. Find the perimeter (in cm) of the triangle $MDE$.
::key 15
$DC=DA$ and $EC=EB$, so the perimeter is $MA+MB=15$ cm.
:::
