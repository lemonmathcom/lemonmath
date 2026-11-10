---
title: Cyclic quadrilaterals
description: Learn why opposite angles of a cyclic quadrilateral add up to 180°, use the converse, and apply it to angles, proofs and real problems.
minutes: 20
---

:::goals
- Recognise a cyclic quadrilateral and explain why its opposite angles add up to $180^\circ$.
- Prove that a quadrilateral is cyclic.
- Find the circle through the vertices of a rectangle, a square and an isosceles trapezium.
:::

Through three points that are not collinear we can always draw exactly one circle (lesson [The circumcircle and incircle](lesson:circumcircle-incircle)). With **four** points it is different: the circle through the first three is already fixed, and the fourth point lies on it only by "luck".

So how can we tell whether the four vertices of a quadrilateral lie on one circle, without drawing? For example, why is it easy to make a round arch through the four corners of a window shaped like an isosceles trapezium, but impossible for a window shaped like an arbitrary parallelogram?

## Cyclic quadrilaterals and their property

:::definition Cyclic quadrilateral
A quadrilateral whose four vertices lie on a circle is called a **cyclic quadrilateral** (it is inscribed in the circle).
:::

### Explore: two opposite angles

Let $ABCD$ be inscribed in the circle $(O)$. The angle $\angle DAB$ is an inscribed angle subtending the arc $BCD$; the angle $\angle BCD$ is an inscribed angle subtending the arc $BAD$. Together these two arcs make the whole circle, so (lesson [Inscribed angles](lesson:inscribed-angles))

$$\angle DAB+\angle BCD=\frac12\left(\overset{\frown}{BCD}+\overset{\frown}{BAD}\right)=\frac12\cdot360^\circ=180^\circ.$$

:::theorem Theorem
In a cyclic quadrilateral, opposite angles add up to $180^\circ$.

**Conversely:** if a quadrilateral has a pair of opposite angles adding up to $180^\circ$, then it is cyclic.
:::

:::diagram The quadrilateral $ABCD$ inscribed in the circle $(O)$
alt: The quadrilateral ABCD with its four vertices on a circle with centre O; the opposite angles A and C are marked
point O 0,0 above
point A -2.598,-1.5 below-left
point B 1.5,-2.598 below-right
point C 2.819,1.026 right
point D -2.298,1.928 above-left
polygon A B C D
circle O 3
angle B A D
angle D C B
:::

**A deeper look.** A parallelogram has **equal** opposite angles; for their sum to be $180^\circ$, each must be $90^\circ$. So a parallelogram is cyclic exactly when it is a rectangle. That is why a "slanted" parallelogram window has no round arch through its four corners.

:::example Finding the angles of a cyclic quadrilateral
The quadrilateral $ABCD$ is cyclic with $\angle A=70^\circ$ and $\angle B=105^\circ$. Find $\angle C$ and $\angle D$.

**Solution.** Since $ABCD$ is cyclic, $\angle A+\angle C=180^\circ$ and $\angle B+\angle D=180^\circ$. Hence

$$\angle C=180^\circ-70^\circ=110^\circ,\qquad \angle D=180^\circ-105^\circ=75^\circ.$$

So $\angle C=110^\circ$ and $\angle D=75^\circ$.
:::

## Proving that a quadrilateral is cyclic

Two methods are common in grade 9:
- Show that a pair of opposite angles adds up to $180^\circ$ (the converse).
- Show that the four vertices are equidistant from one point. In particular, if two vertices both see the segment joining the other two at a right angle, the four vertices lie on the circle with that segment as diameter (the median to the hypotenuse is half the hypotenuse).

:::example Two cyclic quadrilaterals in a triangle
The triangle $ABC$ is acute, and its altitudes $BE$ and $CF$ meet at $H$. Prove that:

a) the quadrilateral $AEHF$ is cyclic;

b) the quadrilateral $BCEF$ is cyclic.

**Solution.** a) We have $\angle AEH=90^\circ$ (because $BE\perp AC$) and $\angle AFH=90^\circ$ (because $CF\perp AB$). Hence $\angle AEH+\angle AFH=180^\circ$.

So the quadrilateral $AEHF$ is cyclic (opposite angles add up to $180^\circ$).

b) Let $M$ be the midpoint of $BC$. The triangle $BEC$ is right-angled at $E$, so $ME=\dfrac{BC}{2}$ (the median to the hypotenuse). Similarly, the triangle $BFC$ is right-angled at $F$, so $MF=\dfrac{BC}{2}$. Hence $MB=MC=ME=MF$.

So the quadrilateral $BCEF$ is cyclic, inscribed in the circle with centre $M$ and diameter $BC$.

**Remark.** In b), the sum $\angle BEC+\angle BFC$ tells us nothing, because $E$ and $F$ are **adjacent** vertices of $BCEF$. We must choose the right tool for the figure.
:::

:::diagram The altitudes $BE$, $CF$ of the triangle $ABC$
alt: An acute triangle ABC with the altitudes BE and CF meeting at H
point A 1,4 above
point B 0,0 below-left
point C 5,0 below-right
point E 2.5,2.5 above-right
point F 0.294,1.176 left
point H 1,1 below
polygon A B C
segment B E
segment C F
right A E B
right A F C
:::

## Rectangles, squares and isosceles trapezia

- A rectangle (and a square) has four right angles, so it is cyclic; the centre of the circle is where the diagonals meet, and the radius is half a diagonal.
- An isosceles trapezium $ABCD$ ($AB\parallel CD$) has $\angle A+\angle D=180^\circ$ (co-interior angles) and $\angle D=\angle C$, so $\angle A+\angle C=180^\circ$: an isosceles trapezium is always cyclic.

:::example Application: the arch of a window
Suppose a glass window is an isosceles trapezium $ABCD$ with lower base $AB=80$ cm, upper base $CD=60$ cm and height $70$ cm. A craftsman wants to make a round arch through the four corners of the window. Find the radius of the arch.

**Solution.**

*Understand.* An isosceles trapezium is cyclic; we need the radius of the circle through its four vertices.

*Plan.* The centre $O$ is equidistant from $A$ and $B$, so it lies on the axis of symmetry of the trapezium, the line through the midpoint $K$ of $AB$ and the midpoint $L$ of $CD$. Let $OK=x$ (cm) and use $OA=OD$.

*Solve.* Assume $O$ lies between $K$ and $L$; then $OL=70-x$. By Pythagoras' theorem in the right-angled triangles $OKA$ and $OLD$:

$$OA^2=40^2+x^2,\qquad OD^2=30^2+(70-x)^2.$$

Since $OA=OD$, we get $1600+x^2=900+4900-140x+x^2$, so $140x=4200$ and $x=30$ (this satisfies $0<x<70$). Hence

$$OA=\sqrt{40^2+30^2}=50\ \text{(cm)}.$$

So the radius of the arch is $50$ cm.

*Look back.* Check: $OD=\sqrt{30^2+40^2}=50$ cm. Had we found $x<0$, the centre would lie outside the window, below $AB$: the same unknown still works, we just read the sign correctly.
:::

:::warning Common mistakes
- **Adding two adjacent angles.** Wrong: "$\angle A+\angle B=180^\circ$, so $ABCD$ is cyclic". Why it is wrong: the theorem is about **opposite** angles. Right: look at $\angle A+\angle C$ or $\angle B+\angle D$.
- **Thinking opposite angles are equal.** Wrong: "$ABCD$ is cyclic and $\angle A=70^\circ$, so $\angle C=70^\circ$". Right: $\angle C=110^\circ$.
- **Thinking every trapezium is cyclic.** Only an **isosceles** trapezium is.
:::

**Connections.** Cyclic quadrilaterals are where inscribed angles, the circumcircle of a triangle and similar triangles meet. Once we know a quadrilateral is cyclic, we "receive" many pairs of equal angles (on the same arc), and from them we prove parallel lines, perpendicular lines and similar triangles. This chain of reasoning is the usual shape of the geometry question in the grade 10 entrance exam.

## Key terms

:::terms
- cyclic quadrilateral | tứ giác nội tiếp
- opposite angles | hai góc đối
- adjacent angles | hai góc kề
- converse | định lí đảo
- isosceles trapezium | hình thang cân
- altitude | đường cao
- median | trung tuyến
:::

## Summary

- Cyclic quadrilateral: its four vertices lie on one circle.
- Cyclic $\Leftrightarrow$ a pair of opposite angles adds up to $180^\circ$.
- Two vertices seeing a segment at right angles: the four points lie on the circle with that segment as diameter.
- Rectangles, squares (centre where the diagonals meet) and isosceles trapezia are always cyclic.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The quadrilateral $ABCD$ is cyclic with $\angle A=80^\circ$ and $\angle B=95^\circ$. Find $\angle C$ and $\angle D$.

::hint
**What you need:** opposite angles of a cyclic quadrilateral add up to $180^\circ$.

**Steps:**
1. Subtract the opposite angle from $180^\circ$.

::solution
We have $\angle C=180^\circ-80^\circ=100^\circ$ and $\angle D=180^\circ-95^\circ=85^\circ$.

So $\angle C=100^\circ$ and $\angle D=85^\circ$.

**Answer.** $\angle C=100^\circ$; $\angle D=85^\circ$.
:::

:::exercise
Which of the following quadrilaterals are cyclic? Explain.

a) The quadrilateral $ABCD$ with $\angle A=75^\circ$, $\angle B=95^\circ$, $\angle C=105^\circ$, $\angle D=85^\circ$.

b) The parallelogram $MNPQ$ with $\angle M=80^\circ$.

c) A parallelogram with one right angle.

::hint
**What you need:** the opposite-angle test; opposite angles of a parallelogram are equal.

**Steps:**
1. Add a pair of opposite angles in each case.

::solution
a) We have $\angle A+\angle C=180^\circ$, so the quadrilateral is cyclic.

b) We have $\angle P=\angle M=80^\circ$, so $\angle M+\angle P=160^\circ\neq180^\circ$: it is not cyclic.

c) A parallelogram with one right angle is a rectangle, so it is cyclic.

So a) and c) are cyclic, b) is not.

**Answer.** a) Yes; b) No; c) Yes.
:::

:::exercise
Find the radius of the circle through the vertices of:

a) a rectangle with sides $6$ cm and $8$ cm;

b) a square with side $4$ cm.

::hint
**What you need:** the centre is where the diagonals meet, and the radius is half a diagonal.

**Steps:**
1. Find the diagonal by Pythagoras' theorem, then halve it.

::solution
a) The diagonal is $\sqrt{6^2+8^2}=10$ (cm), so $R=5$ cm.

b) The diagonal is $\sqrt{4^2+4^2}=4\sqrt2$ (cm), so $R=2\sqrt2$ cm.

So a) $R=5$ cm; b) $R=2\sqrt2\approx2.83$ cm.

**Answer.** a) $5$ cm; b) $2\sqrt2$ cm.
:::

:::exercise
The triangle $ABC$ is right-angled at $A$. Take a point $M$ on the side $AC$ ($M$ different from $A$ and $C$) and draw $MD\perp BC$ at $D$. Prove that the quadrilateral $ABDM$ is cyclic and that $\angle MBD=\angle MAD$.

::hint
**What you need:** the opposite-angle test; inscribed angles on the same arc.

**Steps:**
1. Compute $\angle BAM+\angle BDM$.
2. Show that $\angle MBD$ and $\angle MAD$ subtend the same arc $MD$.

::solution
We have $\angle BAM=90^\circ$ (given) and $\angle BDM=90^\circ$ (because $MD\perp BC$), so $\angle BAM+\angle BDM=180^\circ$. Hence $ABDM$ is cyclic.

In the circle through $A$, $B$, $D$, $M$, we have $\angle MBD=\angle MAD$ (inscribed angles subtending the same arc $MD$).

So $ABDM$ is cyclic and $\angle MBD=\angle MAD$.

**Answer.** See the proof.
:::

:::exercise
Suppose a rectangular playground is $30$ m long and $16$ m wide. A lamp post is to be put at the point equidistant from the four corners, so that the circle of light just reaches all four corners. Where should the lamp post go, and what is the radius of the lit circle?

::hint
**What you need:** a rectangle is inscribed in a circle whose centre is where the diagonals meet.

**Steps:**
1. Find the diagonal, then halve it.

::solution
The diagonal of the playground is $\sqrt{30^2+16^2}=\sqrt{1156}=34$ (m). The centre of the circle through the four corners is where the diagonals meet, and the radius is $\dfrac{34}{2}=17$ (m).

So the lamp post goes where the diagonals meet, and the lit circle has radius $17$ m.

**Answer.** Where the diagonals meet; $17$ m.
:::

:::exercise
The quadrilateral $ABCD$ is cyclic with $\angle A-\angle C=40^\circ$ and $\angle B=2\angle D$. Find the angles of the quadrilateral. (Revise [solving simultaneous equations](lesson:solving-simultaneous-equations).)

::hint
**What you need:** $\angle A+\angle C=180^\circ$, $\angle B+\angle D=180^\circ$.

**Steps:**
1. Solve the pair $\angle A+\angle C=180^\circ$, $\angle A-\angle C=40^\circ$.
2. Substitute $\angle B=2\angle D$ into $\angle B+\angle D=180^\circ$.

::solution
Adding $\angle A+\angle C=180^\circ$ and $\angle A-\angle C=40^\circ$, we get $2\angle A=220^\circ$, so $\angle A=110^\circ$ and $\angle C=70^\circ$.

Substituting $\angle B=2\angle D$ into $\angle B+\angle D=180^\circ$, we get $3\angle D=180^\circ$, so $\angle D=60^\circ$ and $\angle B=120^\circ$.

So $\angle A=110^\circ$, $\angle B=120^\circ$, $\angle C=70^\circ$, $\angle D=60^\circ$.

**Answer.** $110^\circ$, $120^\circ$, $70^\circ$, $60^\circ$.
:::

:::exercise
**(2.0 marks)** The triangle $ABC$ is acute, and its altitudes $AD$ and $BE$ meet at $H$.

a) Prove that the quadrilateral $CDHE$ is cyclic.

b) Prove that the quadrilateral $ABDE$ is cyclic.

c) Prove that $CD\cdot CB=CE\cdot CA$.

::hint
**What you need:** tests for a cyclic quadrilateral; the exterior angle of a cyclic quadrilateral; similar triangles.

**Steps:**
1. a) Compute $\angle HDC+\angle HEC$.
2. b) $D$ and $E$ both see $AB$ at a right angle.
3. c) From b), prove $\angle CDE=\angle CAB$, then $\triangle CDE\sim\triangle CAB$.

::solution
a) We have $\angle HDC=90^\circ$ and $\angle HEC=90^\circ$ (two altitudes), so $\angle HDC+\angle HEC=180^\circ$. Hence $CDHE$ is cyclic.

b) Let $N$ be the midpoint of $AB$. The triangles $ADB$ and $AEB$ are right-angled at $D$ and $E$, so $ND=NE=NA=NB=\dfrac{AB}{2}$ (the median to the hypotenuse). Hence $ABDE$ is cyclic, inscribed in the circle with centre $N$.

c) Since $ABDE$ is cyclic, $\angle EDB+\angle EAB=180^\circ$. Also $\angle EDB+\angle CDE=180^\circ$ (angles on a straight line), so $\angle CDE=\angle CAB$. The triangles $CDE$ and $CAB$ share the angle $C$ and have $\angle CDE=\angle CAB$, so $\triangle CDE\sim\triangle CAB$ (AA). Hence $\dfrac{CD}{CA}=\dfrac{CE}{CB}$, that is, $CD\cdot CB=CE\cdot CA$.

So the result is proved.

**Answer.** See the proof.
:::

:::exercise Challenge
The circle $(O, 13\text{ cm})$ has two parallel chords $AB=24$ cm and $CD=10$ cm on opposite sides of the centre $O$ (the quadrilateral $ABCD$ has $AB\parallel CD$). Prove that $ABCD$ is an isosceles trapezium and find its area. (Revise [arcs and chords](lesson:arcs-and-chords).)

::hint
**What you need:** a diameter perpendicular to a chord passes through its midpoint; the distance from the centre to a chord is $d=\sqrt{R^2-\left(\frac{l}{2}\right)^2}$.

**Steps:**
1. The line through $O$ perpendicular to $AB$ is a common axis of symmetry of both chords.
2. Find the distance from $O$ to each chord and add them to get the height.

::solution
The line through $O$ perpendicular to $AB$ is also perpendicular to $CD$ (because $AB\parallel CD$), and it passes through the midpoints of both chords. Hence it is an axis of symmetry of $ABCD$, so $ABCD$ is an isosceles trapezium.

The distances from $O$ to $AB$ and to $CD$ are

$$\sqrt{13^2-12^2}=5\ \text{(cm)},\qquad \sqrt{13^2-5^2}=12\ \text{(cm)}.$$

The chords are on opposite sides of $O$, so the height of the trapezium is $5+12=17$ (cm). Hence its area is $\dfrac{(24+10)\cdot17}{2}=289$ (cm²).

So $ABCD$ is an isosceles trapezium with area $289$ cm².

**Answer.** $289$ cm².
:::

## Mini test

:::quiz
::mc
The quadrilateral $ABCD$ is cyclic with $\angle A=65^\circ$. The angle $\angle C$ is
A. $65^\circ$.
B. $115^\circ$.
C. $25^\circ$.
D. $295^\circ$.
::key B
$\angle A+\angle C=180^\circ$. A assumes opposite angles are equal, C takes the complement (to $90^\circ$), and D takes $360^\circ-65^\circ$.

::mc
Which of the following quadrilaterals is always cyclic?
A. A rhombus.
B. A parallelogram.
C. A rectangle.
D. A trapezium.
::key C
A rectangle has opposite angles both equal to $90^\circ$. A rhombus or a parallelogram is cyclic only when it is a square or a rectangle; a trapezium must be isosceles.

::mc
A rectangle with sides $5$ cm and $12$ cm is inscribed in a circle of radius
A. $13$ cm.
B. $8.5$ cm.
C. $3.25$ cm.
D. $6.5$ cm.
::key D
The diagonal is $13$ cm and the radius is half of it. A takes the whole diagonal, B takes half the sum of the sides, and C divides the diagonal by $4$.

::mc
The quadrilateral $ABCD$ is cyclic with $\angle B=2\angle D$. The angle $\angle D$ is
A. $60^\circ$.
B. $120^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key A
$3\angle D=180^\circ$, so $\angle D=60^\circ$. B is $\angle B$, C assumes $\angle B=\angle D$, and D takes the sum of opposite angles to be $90^\circ$.

::tf
The triangle $ABC$ is acute, and its altitudes $BE$, $CF$ meet at $H$. Decide whether each statement is true or false.
a) The quadrilateral $AEHF$ is cyclic.
b) The quadrilateral $BCEF$ is cyclic.
c) The centre of the circle through $B$, $C$, $E$, $F$ is the midpoint of $BC$.
d) $\angle AEF+\angle ABC=180^\circ$.
::key T T T F
a) True: two opposite right angles. b), c) True: $E$ and $F$ see $BC$ at right angles. d) False: since $BCEF$ is cyclic, $\angle AEF=\angle ABC$ (both supplementary to $\angle FEC$), so the sum is $2\angle ABC<180^\circ$ (the triangle is acute).

::sa
Find the radius (in cm) of the circle through the vertices of a square with side $6$ cm (give your answer to 2 decimal places).
::key 4.24
The diagonal is $6\sqrt2$ cm, so $R=3\sqrt2\approx4.24$ cm.

::sa
The quadrilateral $ABCD$ is cyclic with $\angle A=3\angle C$. Find $\angle A$ (in degrees).
::key 135
$4\angle C=180^\circ$, so $\angle C=45^\circ$ and $\angle A=135^\circ$.
:::
