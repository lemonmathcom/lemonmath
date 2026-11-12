---
title: Inscribed angles
description: Recognise inscribed angles, see why an inscribed angle is half the arc it subtends, and use the consequences to find angles and prove right angles.
minutes: 20
---

:::goals
- Recognise an inscribed angle and the arc it subtends.
- Explain and use the theorem: an inscribed angle is half the measure of the arc it subtends.
- Use the consequences of the theorem to find angles and to prove results.
:::

In football, the goal is $7.32$ m wide (the distance between the inside of the posts, by Law 1 of the IFAB Laws of the Game). A striker standing at a point $M$ "sees" the posts $A$ and $B$ at the angle $\angle AMB$, the shooting angle: the bigger the angle, the "wider" the goal looks to the player.

So are there *different* positions with the *same* shooting angle? On what line do they lie? The answer is beautiful: they lie on an arc of a circle through the two posts. To see why, we need a new kind of angle: the inscribed angle.

## What is an inscribed angle?

In the lesson [Arcs and chords](lesson:arcs-and-chords), the angle at the centre had its vertex at the centre $O$. Now we move the vertex of the angle onto the circle itself.

:::definition Inscribed angle
An **inscribed angle** (angle at the circumference) is an angle whose vertex lies on a circle and whose two arms contain two chords of the circle. The arc lying inside the angle is the **arc it subtends** (the intercepted arc).
:::

For example, if $A$, $B$, $M$ lie on the circle $(O)$, then $\angle AMB$ is an inscribed angle subtending the arc $AB$ (the arc that does not contain $M$).

**Not inscribed angles:** an angle with its vertex inside or outside the circle (such as the angle at the centre), or an angle with its vertex on the circle but with one arm meeting the circle at no other point.

:::diagram The inscribed angle $\angle AMB$ and the angle at the centre $\angle AOB$ subtend the same arc $AB$
alt: A circle with centre O with the inscribed angle AMB of 50 degrees and the angle at the centre AOB of 100 degrees on the same arc AB
point O 0,0 right
point A -2.298,-1.928 below-left
point B 2.298,-1.928 below-right
point M -0.521,2.954 above
circle O 3
segment M A
segment M B
segment O A dashed
segment O B dashed
angle A M B "50°"
angle A O B "100°"
:::

## The inscribed angle theorem

### Explore: measure and compare

In the figure, the minor arc $AB$ measures $100^\circ$ (equal to the angle at the centre). A protractor gives $\angle AMB=50^\circ$; move $M$ along the major arc and measure again: still $50^\circ$. An inscribed angle seems always to be **half** the arc it subtends.

:::theorem The inscribed angle theorem
In a circle, an inscribed angle is half the measure of the arc it subtends.
:::

**Why?** Take the case where the centre $O$ lies on the arm $MB$. The triangle $OMA$ is isosceles at $O$ (because $OM=OA=R$), so $\angle OMA=\angle OAM$. The angle $\angle AOB$ is an exterior angle of the triangle $OMA$, hence

$$\angle AOB=\angle OMA+\angle OAM=2\angle AMB.$$

Since $\angle AOB$ equals the measure of the arc $AB$, the angle $\angle AMB$ is half that measure. When $O$ lies inside or outside the angle, we draw the diameter $MD$ and add or subtract two cases like the one above.

Back to the shooting angle.

:::example Application: positions with the same shooting angle
A goal has posts $A$ and $B$ with $AB=7.32$ m. Suppose a circle with centre $O$ is drawn on the pitch through $A$ and $B$ so that $\angle AOB=60^\circ$. Find the shooting angle $\angle AMB$ of a player standing at any point $M$ on the major arc $AB$, and find the radius of the circle.

**Solution.**

*Understand.* We know the chord $AB$ and the angle at the centre; we need the inscribed angle on the arc $AB$ and the radius.

*Plan.* The inscribed angle theorem gives the angle; the triangle $OAB$ gives the radius.

*Solve.* The angle $\angle AMB$ is an inscribed angle subtending the minor arc $AB$, which measures $60^\circ$, so

$$\angle AMB=\frac{60^\circ}{2}=30^\circ.$$

The triangle $OAB$ is isosceles at $O$ (because $OA=OB$) with $\angle AOB=60^\circ$, so it is equilateral. Hence $OA=AB=7.32$ m.

So every position on the major arc $AB$ has a shooting angle of $30^\circ$, and the radius of the circle is $7.32$ m.

*Look back.* What about a point $N$ **inside** the circle? Extend $AN$ to meet the circle at $M$; $\angle ANB$ is an exterior angle of the triangle $NMB$, so $\angle ANB>30^\circ$. Outside the circle the angle is smaller: the circle is a "contour line" of the shooting angle.
:::

:::diagram The points $M_1$, $M_2$, $M_3$ on the major arc see $AB$ at the same angle
alt: A circle through the posts A and B; three points M1, M2, M3 on the major arc all see AB at 30 degrees
point O 0,0 right
point A -1.5,-2.598 below "A"
point B 1.5,-2.598 below "B"
point M1 -2.598,1.5 left "M_1"
point M2 0,3 above "M_2"
point M3 2.598,1.5 right "M_3"
circle O 3
segment A B
segment M1 A
segment M1 B
segment M2 A
segment M2 B
segment M3 A
segment M3 B
angle A M2 B "30°"
:::

## Consequences of the theorem

The theorem has three consequences that are used all the time.

:::theorem Consequences
In a circle:
- Equal inscribed angles subtend equal arcs; inscribed angles subtending the same arc (or equal arcs) are equal.
- An inscribed angle (at most $90^\circ$) is half the angle at the centre subtending the same arc.
- The angle in a semicircle is a right angle.
:::

Conversely, a right inscribed angle subtends an arc of $180^\circ$, so its arms pass through the two ends of a diameter.

:::example Application: finding the centre of a round table
To find the centre of a round tabletop, a carpenter puts the right-angle corner of a set square at a point $C$ on the edge; its edges cross the edge of the table at $A$ and $B$, and he draws $AB$. He does the same at another point and gets $A'B'$. Explain why the point where $AB$ and $A'B'$ meet is the centre of the table.

**Solution.** We have $\angle ACB=90^\circ$, an inscribed angle, so it subtends an arc of $2\cdot90^\circ=180^\circ$ (inscribed angle theorem). Hence $AB$ is a diameter, so $AB$ passes through the centre.

In the same way, $A'B'$ is also a diameter and passes through the centre.

So the two diameters $AB$ and $A'B'$ meet at the centre of the table.
:::

Inscribed angles on the same arc give pairs of equal angles, and from them similar triangles (grade 8).

:::example Two intersecting chords
The chords $AB$ and $CD$ of the circle $(O)$ meet at a point $I$ inside the circle. Prove that $IA\cdot IB=IC\cdot ID$.

**Solution.** Consider the triangles $IAC$ and $IDB$. We have:

$\angle AIC=\angle DIB$ (vertically opposite angles);

$\angle CAB=\angle CDB$ (inscribed angles subtending the same arc $BC$).

Hence $\triangle IAC\sim\triangle IDB$ (AA), so

$$\frac{IA}{ID}=\frac{IC}{IB}\ \Rightarrow\ IA\cdot IB=IC\cdot ID.$$

So $IA\cdot IB=IC\cdot ID$.
:::

:::warning Common mistakes
- **Taking the inscribed angle equal to the angle at the centre.** Wrong: "$\angle AOB=110^\circ$, so $\angle ACB=110^\circ$". Why it is wrong: an inscribed angle is only **half** the arc it subtends. Right: $\angle ACB=55^\circ$.
- **Choosing the wrong arc.** Wrong: "$\angle AOB=110^\circ$ and $D$ is on the minor arc $AB$, so $\angle ADB=55^\circ$". Why it is wrong: $\angle ADB$ subtends the **major** arc $AB$ (the arc not containing $D$), which measures $250^\circ$. Right: $\angle ADB=125^\circ$.
:::

**Connections.** This lesson builds on angles at the centre ([Arcs and chords](lesson:arcs-and-chords)), exterior angles (grade 7) and similar triangles (grade 8). It leads to the [circumcircle of a right-angled triangle](lesson:circumcircle-incircle) and to [cyclic quadrilaterals](lesson:cyclic-quadrilaterals), a topic in almost every grade 10 entrance exam.

## Key terms

:::terms
- inscribed angle (angle at the circumference) | góc nội tiếp
- angle at the centre | góc ở tâm
- intercepted arc | cung bị chắn
- semicircle | nửa đường tròn
- diameter | đường kính
- chord | dây cung
- vertically opposite angles | góc đối đỉnh
:::

## Summary

- Inscribed angle: vertex on the circle, both arms contain chords.
- Inscribed angle $=\dfrac12$ of the arc it subtends (the arc inside the angle).
- Inscribed angles on the same arc (or equal arcs) are equal.
- An inscribed angle $\leq 90^\circ$ is half the angle at the centre on the same arc.
- The angle in a semicircle is a right angle; a right inscribed angle stands on a diameter.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The points $A$, $B$, $C$, $D$ lie on the circle $(O)$ with $\angle AOB=130^\circ$; $C$ is on the major arc $AB$ and $D$ is on the minor arc $AB$.

a) Find the measure of the major arc $AB$.

b) Find $\angle ACB$.

c) Find $\angle ADB$.

::hint
**What you need:** an inscribed angle is half the arc it subtends (the arc inside the angle).

**Steps:**
1. The minor arc $AB$ equals the angle at the centre; the major arc is $360^\circ$ minus the minor arc.
2. Decide which arc each angle subtends, then halve it.

::solution
a) The angle at the centre $\angle AOB=130^\circ$ subtends the minor arc $AB$, so the minor arc $AB$ measures $130^\circ$. Hence the major arc $AB$ measures
$$360^\circ-130^\circ=230^\circ.$$

So the major arc $AB$ measures $230^\circ$.

b) The point $C$ is on the major arc $AB$, so the inscribed angle $\angle ACB$ subtends the minor arc $AB$. An inscribed angle is half the measure of the arc it subtends, so
$$\angle ACB=\frac{130^\circ}{2}=65^\circ.$$

So $\angle ACB=65^\circ$.

c) The point $D$ is on the minor arc $AB$, so the inscribed angle $\angle ADB$ subtends the major arc $AB$. Hence
$$\angle ADB=\frac{230^\circ}{2}=115^\circ.$$

So $\angle ADB=115^\circ$.

**Answer.** a) $230^\circ$; b) $65^\circ$; c) $115^\circ$.
:::

:::exercise
The circle $(O, 6.5\text{ cm})$ has diameter $AB$, and the point $C$ on the circle has $BC=5$ cm. Find $\angle ACB$ and $AC$.

::hint
**What you need:** the angle in a semicircle is a right angle; Pythagoras' theorem.

**Steps:**
1. Show that the triangle $ABC$ is right-angled at $C$.
2. Compute $AC=\sqrt{AB^2-BC^2}$ with $AB=13$ cm.

::solution
We have $\angle ACB=90^\circ$ (angle in a semicircle). In the triangle $ABC$, right-angled at $C$, we have $AC=\sqrt{13^2-5^2}=\sqrt{144}=12$ (cm).

So $\angle ACB=90^\circ$ and $AC=12$ cm.

**Answer.** $\angle ACB=90^\circ$; $AC=12$ cm.
:::

:::exercise
The points $A$, $B$, $C$ lie on the circle $(O)$ with $\angle BAC=40^\circ$ and $\angle ABC=75^\circ$. Find the measures of the minor arcs $BC$, $AC$ and $AB$.

::hint
**What you need:** the arc subtended is twice the inscribed angle.

**Steps:**
1. Find $\angle ACB$.
2. Double each angle to get the opposite arc.

::solution
We have $\angle ACB=180^\circ-40^\circ-75^\circ=65^\circ$. Each angle of the triangle is an inscribed angle subtending the opposite arc, so

$$\overset{\frown}{BC}=2\cdot40^\circ=80^\circ,\quad \overset{\frown}{AC}=2\cdot75^\circ=150^\circ,\quad \overset{\frown}{AB}=2\cdot65^\circ=130^\circ.$$

So the arcs $BC$, $AC$, $AB$ measure $80^\circ$, $150^\circ$ and $130^\circ$ respectively (total $360^\circ$).

**Answer.** $80^\circ$, $150^\circ$, $130^\circ$.
:::

:::exercise
The circle $(O)$ has diameter $AB$, and $C$ is a point on the circle ($C$ different from $A$ and $B$). The bisector of the angle $\angle ACB$ meets the circle again at $D$. Prove that the arcs $AD$ and $DB$ (not containing $C$) are equal and that the triangle $ADB$ is an isosceles right-angled triangle.

::hint
**What you need:** equal inscribed angles subtend equal arcs; the angle in a semicircle.

**Steps:**
1. Find $\angle ACD=\angle DCB$, then the arcs $AD$, $DB$.
2. Use $\angle ADB=90^\circ$.

::solution
We have $\angle ACB=90^\circ$ (angle in a semicircle), so $\angle ACD=\angle DCB=45^\circ$ ($CD$ is the bisector). Equal inscribed angles subtend equal arcs: $\overset{\frown}{AD}=\overset{\frown}{DB}=90^\circ$. Hence $AD=DB$ (equal arcs have equal chords).

Also $\angle ADB=90^\circ$ (angle in a semicircle).

So the arcs $AD$ and $DB$ are equal and the triangle $ADB$ is an isosceles right-angled triangle with the right angle at $D$.

**Answer.** Arc $AD$ = arc $DB$ $=90^\circ$; $ADB$ is isosceles and right-angled at $D$.
:::

:::exercise
Suppose an open-air stage is $AB=12$ m wide. The organisers put a row of seats on the major arc $AB$ of a circle with centre $O$ through $A$ and $B$, with $\angle AOB=100^\circ$. Find the viewing angle $\angle AMB$ of the stage from any seat $M$ in the row, and find the radius of the circle (give your answer to 1 decimal place). (Revise [trigonometric ratios of acute angles](lesson:acute-angle-trig-ratios).)

::hint
**What you need:** the inscribed angle theorem; the sine ratio in a right-angled triangle.

**Steps:**
1. Find $\angle AMB$ from the minor arc $AB$.
2. Let $H$ be the midpoint of $AB$ and use $\sin\angle AOH=\dfrac{AH}{OA}$.

::solution
The angle $\angle AMB$ subtends the minor arc $AB$, which measures $100^\circ$, so $\angle AMB=50^\circ$.

Let $H$ be the midpoint of $AB$. The triangle $OAB$ is isosceles at $O$, so $OH\perp AB$ and $\angle AOH=50^\circ$. In the triangle $OAH$, right-angled at $H$, we have

$$OA=\frac{AH}{\sin 50^\circ}=\frac{6}{\sin 50^\circ}\approx7.8\ \text{(m)}.$$

So every seat in the row sees the stage at an angle of $50^\circ$, and the radius is about $7.8$ m.

**Answer.** $50^\circ$; about $7.8$ m.
:::

:::exercise
A round glass panel is broken. A glazier puts the right-angle corner of a set square at a point $C$ on the curved edge of one piece; the edges of the set square cross that edge at $A$ and $B$, with $CA=30$ cm and $CB=40$ cm. Find the radius of the panel.

::hint
**What you need:** a right inscribed angle subtends a semicircle, so $AB$ is a diameter.

**Steps:**
1. Find $AB$ by Pythagoras' theorem, then halve it.

::solution
We have $\angle ACB=90^\circ$, an inscribed angle, so it subtends an arc of $180^\circ$, hence $AB$ is a diameter. In the triangle $ABC$, right-angled at $C$, we have $AB=\sqrt{30^2+40^2}=50$ (cm).

So the radius of the panel is $25$ cm.

**Answer.** $25$ cm.
:::

:::exercise
**(2.0 marks)** The circle $(O, 5\text{ cm})$ has diameter $AB$, and $C$ is a point on the circle with $AC=6$ cm. Let $H$ be the foot of the perpendicular from $C$ to $AB$.

a) Prove that the triangle $ABC$ is right-angled at $C$.

b) Prove that $\angle ACH=\angle ABC$.

c) Find $CH$ and $BH$.

::hint
**What you need:** the angle in a semicircle; angles complementary to the same angle are equal.

**Steps:**
1. b) Show that $\angle ACH$ and $\angle ABC$ are both complementary to $\angle CAB$.
2. c) Find $BC$, then $CH=\dfrac{AC\cdot BC}{AB}$ and $BH=\sqrt{BC^2-CH^2}$.

::solution
a) We have $\angle ACB=90^\circ$ (angle in a semicircle), so the triangle $ABC$ is right-angled at $C$.

b) We have $\angle ACH+\angle CAB=90^\circ$ (the triangle $ACH$ is right-angled at $H$) and $\angle ABC+\angle CAB=90^\circ$ (the triangle $ABC$ is right-angled at $C$). Hence $\angle ACH=\angle ABC$ (both complementary to $\angle CAB$).

c) We have $AB=10$ cm and $BC=\sqrt{10^2-6^2}=8$ (cm). From $\dfrac12\cdot AC\cdot BC=\dfrac12\cdot AB\cdot CH$ (area of $ABC$) we get $CH=\dfrac{6\cdot8}{10}=4.8$ (cm). In the triangle $BCH$, right-angled at $H$, we have $BH=\sqrt{8^2-4.8^2}=6.4$ (cm).

So $CH=4.8$ cm and $BH=6.4$ cm.

**Answer.** a), b) See the proof; c) $CH=4.8$ cm, $BH=6.4$ cm.
:::

:::exercise Challenge
The chords $AB$ and $CD$ of a circle meet at a point $I$ inside the circle. We know $IA=2$ cm, $IB=12$ cm and $CD=11$ cm. Find $IC$ and $ID$ (given $IC<ID$). (Revise [Viète's theorem](lesson:vietes-theorem).)

::hint
**What you need:** $IA\cdot IB=IC\cdot ID$ (proved in the example Two intersecting chords); two numbers with a given sum and product.

**Steps:**
1. Find $IC\cdot ID$ and $IC+ID$.
2. Form the equation $x^2-Sx+P=0$ and solve it.

::solution
We have $IC\cdot ID=IA\cdot IB=2\cdot12=24$ and $IC+ID=CD=11$ (because $I$ lies between $C$ and $D$). Hence $IC$ and $ID$ are the two roots of the equation

$$x^2-11x+24=0.$$

We have $\Delta=121-96=25$, so $x_1=\dfrac{11-5}{2}=3$ and $x_2=\dfrac{11+5}{2}=8$.

So $IC=3$ cm and $ID=8$ cm.

**Answer.** $IC=3$ cm, $ID=8$ cm.
:::

## Mini test

:::quiz
::mc
An inscribed angle subtending an arc of $100^\circ$ measures
A. $100^\circ$.
B. $50^\circ$.
C. $200^\circ$.
D. $130^\circ$.
::key B
An inscribed angle is half the arc it subtends: $50^\circ$. A confuses it with the angle at the centre, C doubles instead of halving, and D halves the major arc.

::mc
The circle $(O)$ has diameter $AB$, and $C$ is a point on the circle with $\angle CAB=35^\circ$. The angle $\angle CBA$ is
A. $35^\circ$.
B. $90^\circ$.
C. $145^\circ$.
D. $55^\circ$.
::key D
$\angle ACB=90^\circ$ (angle in a semicircle), so $\angle CBA=90^\circ-35^\circ=55^\circ$. A treats the triangle as isosceles at $C$, B confuses it with $\angle ACB$, and C forgets the right angle at $C$ (it takes $180^\circ-35^\circ$).

::mc
The points $A$, $B$, $M$ lie on the circle $(O)$, $\angle AOB=140^\circ$, and $M$ is on the major arc $AB$. The angle $\angle AMB$ is
A. $70^\circ$.
B. $140^\circ$.
C. $110^\circ$.
D. $280^\circ$.
::key A
$\angle AMB$ subtends the minor arc of $140^\circ$, so it is $70^\circ$. B is the angle at the centre, C corresponds to $M$ on the minor arc, and D doubles instead of halving.

::mc
The four points $A$, $B$, $C$, $D$ lie on a circle, $C$ and $D$ are both on the major arc $AB$, and $\angle ACB=40^\circ$. The angle $\angle ADB$ is
A. $80^\circ$.
B. $140^\circ$.
C. $40^\circ$.
D. $20^\circ$.
::key C
Both inscribed angles subtend the minor arc $AB$, so they are equal: $\angle ADB=40^\circ$. A doubles as for an angle at the centre, B puts $D$ on the other arc ($180^\circ-40^\circ$), and D halves once more.

::tf
The circle $(O, 8.5\text{ cm})$ has diameter $AB$, and $C$ is a point on the circle with $AC=8$ cm. Decide whether each statement is true or false.
a) $\angle ACB=90^\circ$.
b) $BC=15$ cm.
c) $\angle AOC=2\angle ABC$.
d) The area of the triangle $ABC$ is $120$ cm².
::key T T T F
a) True: angle in a semicircle. b) True: $\sqrt{17^2-8^2}=15$. c) True: the angle at the centre and the inscribed angle subtend the same minor arc $AC$. d) False: $\dfrac12\cdot8\cdot15=60$ cm².

::sa
An inscribed angle measures $27^\circ$. Find the measure (in degrees) of the arc it subtends.
::key 54
The arc subtended is twice the inscribed angle: $2\cdot27^\circ=54^\circ$.

::sa
The acute triangle $ABC$ is inscribed in the circle $(O)$ with $\angle ABC=62^\circ$. Find the angle $\angle AOC$ (in degrees).
::key 124
The inscribed angle $\angle ABC$ and the angle at the centre $\angle AOC$ subtend the same minor arc $AC$, so $\angle AOC=2\cdot62^\circ=124^\circ$.
:::
