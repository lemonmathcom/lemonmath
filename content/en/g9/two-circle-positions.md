---
title: Relative positions of two circles
description: Find the relative position of two circles by comparing the distance between the centres with the sum and the difference of the radii.
minutes: 20
---

:::goals
- Find the relative position of two circles by comparing $OO'$ with $R+r$ and $R-r$.
- Know that the line of centres is a line of symmetry, the perpendicular bisector of the common chord, and passes through the point of contact.
- Find the length of a common chord, a radius or the distance between the centres.
:::

Two phone masts $O$ and $O'$ are $7$ km apart and cover radii of $5$ km and $3$ km respectively. Do the two coverage zones overlap? What if mast $O'$ is moved so that the masts are $8$ km apart?

## Common points of two circles

### Explore: pull two circles apart

Take $(O, R)$ and $(O', r)$ with $R\geq r$, and $d=OO'$. Put the small circle inside the large one and slowly pull it out: they touch from inside when $d=R-r$, then intersect, touch from outside when $d=R+r$, and finally move apart.

:::theorem Relative position of $(O, R)$ and $(O', r)$, $R\geq r$, $d=OO'$
- **Intersect** ($2$ common points): $R-r<d<R+r$.
- **Touch externally** ($1$ common point): $d=R+r$.
- **Touch internally** ($1$ common point): $d=R-r>0$.
- **Lie outside each other** ($0$ common points): $d>R+r$.
- **One inside the other** ($0$ common points): $d<R-r$; when $d=0$ the circles are **concentric**.
:::

The line $OO'$ is called the **line of centres**. Every line through the centre is a line of symmetry of a circle, so the line of centres is a common line of symmetry of both circles.

:::example Answering the opening question
Solve the opening problem.

**Solution.** We have $R+r=5+3=8$ and $R-r=5-3=2$.

For $d=7$: $2<7<8$, so the two circles intersect. For $d=8=R+r$, the two circles touch externally.

So at first the two coverage zones overlap; when the masts are $8$ km apart, the zones meet at only one point.
:::

## Two intersecting circles

:::theorem Common chord and point of contact
- If two circles intersect at $A$ and $B$, then the line of centres $OO'$ is the perpendicular bisector of the common chord $AB$.
- If two circles touch at $T$, then $T$ lies on the line of centres.
:::

**Why?** We have $OA=OB$ and $O'A=O'B$, so $O$ and $O'$ both lie on the perpendicular bisector of $AB$.

If two circles touch at $T$ and $T$ is not on $OO'$, then the reflection of $T$ in $OO'$ is also a common point (because $OO'$ is a common line of symmetry). Then the circles would have two common points, which is impossible.

:::diagram Two circles intersecting at $A$ and $B$
alt: Two circles with centres O, O' meeting at A, B; OO' is perpendicular to AB at its midpoint H
point O 0,0 left
point P 4,0 right "O'"
point A 2.34,1.87 above
point B 2.34,-1.87 below
point H 2.34,0 below-right
circle O 3
circle P 2.5
segment O P
segment A B
segment O A
segment P A
right A H P
:::

:::example The length of a common chord
The circles $(O, 15\text{ cm})$ and $(O', 13\text{ cm})$ intersect at $A$ and $B$, with $OO'=14$ cm. Find $AB$.

**Solution.** Let $H$ be the point where $OO'$ meets $AB$; then $AH\perp OO'$ and $H$ is the midpoint of $AB$. Let $OH=x$; then $O'H=14-x$ (because $H$ lies between $O$ and $O'$). By Pythagoras' theorem in the right-angled triangles $AHO$ and $AHO'$, we have $AH^2=15^2-x^2=13^2-(14-x)^2$, hence

$$225-x^2=169-196+28x-x^2\Rightarrow 28x=252\Rightarrow x=9.$$

Therefore $AH=\sqrt{15^2-9^2}=12$ (cm) and $AB=2AH=24$ cm.

So $AB=24$ cm.
:::

## Two touching circles

When two circles touch externally at $T$, the point $T$ lies between $O$ and $O'$, so $OO'=OT+TO'=R+r$. The line through $T$ perpendicular to $OO'$ is a common tangent of the two circles at $T$.

:::diagram Two circles touching externally at $T$
alt: Two circles with centres O, O' touching externally at T on OO', with the common tangent at T
point O 0,0 below
point P 3.5,0 below "O'"
point T 2,0 below-right
point U 2,2.2 ""
point V 2,-2.2 ""
circle O 2
circle P 1.5
segment O P
segment U V
right O T U
:::

:::example Two gearwheels
Two gearwheels touch externally. The distance between their axles is $15$ cm, and the radius of the large wheel is twice the radius of the small one. Find the radius of each wheel.

**Solution.** Let $r$ (cm) be the radius of the small wheel ($r>0$); then the large wheel has radius $2r$. The circles touch externally, so we have the equation

$$r+2r=15\Rightarrow r=5\ \text{(satisfies the condition)}.$$

So the small wheel has radius $5$ cm and the large wheel has radius $10$ cm.
:::

:::warning Common mistakes
- **Only thinking of touching externally.** Wrong: "Two circles of radii $7$ and $3$ touch, so $OO'=10$". Why it is wrong: they may touch internally. Right: $OO'=10$ or $OO'=4$.
- **Mixing up "do not meet" and "lie outside each other".** Wrong: $d=1$, $R=5$, $r=3$, so the circles lie outside each other. Why it is wrong: $d<R-r=2$. Right: one circle is inside the other.
:::

## Key terms

:::terms
- line of centres | đường nối tâm
- common chord | dây chung
- touch externally | tiếp xúc ngoài
- touch internally | tiếp xúc trong
- lie outside each other | ở ngoài nhau
- one inside the other | đựng nhau
- common tangent | tiếp tuyến chung
:::

## Summary

- Intersect: $R-r<d<R+r$; touch externally: $d=R+r$; touch internally: $d=R-r$; outside each other: $d>R+r$; one inside the other: $d<R-r$.
- The line of centres is a line of symmetry, the perpendicular bisector of the common chord, and passes through the point of contact.
- For a common chord: let $OH=x$ and write $AH^2$ in two ways.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Consider the circles $(O, 6\text{ cm})$ and $(O', 4\text{ cm})$. Find their relative position in each of the following cases:

a) $OO'=11$ cm;
b) $OO'=10$ cm;
c) $OO'=5$ cm;
d) $OO'=2$ cm;
e) $OO'=1$ cm.

::hint
**What you need:** compare $d$ with $R+r=10$ and $R-r=2$.

**Steps:**
1. Compute $R+r$ and $R-r$, then compare each value with them.

::solution
We have $R=6$ cm and $r=4$ cm, so $R+r=10$ cm and $R-r=2$ cm. We compare the distance between the centres $d=OO'$ with $R+r$ and $R-r$.

a) $d=11>R+r=10$: the circles are outside each other.

b) $d=10=R+r$: the circles touch externally.

c) $R-r=2<d=5<R+r=10$: the circles intersect.

d) $d=2=R-r$: the circles touch internally.

e) $d=1<R-r=2$: the circle $(O)$ contains the circle $(O')$.

So a) the circles are outside each other; b) they touch externally; c) they intersect; d) they touch internally; e) one is inside the other.

**Answer.** a) outside each other; b) touch externally; c) intersect; d) touch internally; e) one inside the other.
:::

:::exercise
The circles $(O, 5\text{ cm})$ and $(O', 5\text{ cm})$ intersect at $A$ and $B$, with $OO'=8$ cm. Find $AB$.

::hint
**What you need:** $OO'$ is the perpendicular bisector of $AB$; $H$ is the midpoint of $OO'$.

**Steps:**
1. Find $OH=4$ cm, then $AH$ by Pythagoras' theorem.

::solution
Let $H$ be the point where $OO'$ meets $AB$. The two circles have equal radii, so $H$ is the midpoint of $OO'$, hence $OH=4$ cm. In the triangle $AHO$, right-angled at $H$, we have $AH=\sqrt{5^2-4^2}=3$ (cm), so $AB=6$ cm.

So $AB=6$ cm.

**Answer.** $AB=6$ cm.
:::

:::exercise
The circle $(O, 9\text{ cm})$ touches the circle $(O', r)$ internally, with $r<9$ cm and $OO'=4$ cm. Find $r$.

::hint
**What you need:** touching internally means $d=R-r$.

**Steps:**
1. Solve the equation $9-r=4$.

::solution
The circles $(O, 9\text{ cm})$ and $(O', r)$ with $r<9$ cm touch internally, so the distance between the centres is the difference of the radii:
$$OO'=9-r.$$

From the question $OO'=4$ cm, so $9-r=4$, which gives $r=5$ cm.

The value $r=5$ satisfies the condition $r<9$.

So $r=5$ cm.

**Answer.** $r=5$ cm.
:::

:::exercise
The circles $(O, 7\text{ cm})$ and $(O', 3\text{ cm})$ touch each other. Find $OO'$.

::hint
**What you need:** touching externally: $d=R+r$; touching internally: $d=R-r$.

**Steps:**
1. Look at the two cases.

::solution
Two touching circles can touch externally or internally, so we consider two cases.

- If the circles touch externally, the distance between the centres is the sum of the radii: $OO'=7+3=10$ (cm).
- If the circles touch internally, the distance between the centres is the difference of the radii: $OO'=7-3=4$ (cm).

So $OO'=10$ cm (touching externally) or $OO'=4$ cm (touching internally).

**Answer.** $OO'=10$ cm or $OO'=4$ cm.
:::

:::exercise
A logo is made of two circles of radii $3$ cm and $4$ cm whose centres are $5$ cm apart. Minh needs to draw the common chord of the two circles. Find the length of the common chord. (Revise [equations reducible to linear equations](lesson:equations-reducible-to-linear).)

::hint
**What you need:** let $OH=x$ and write $AH^2$ in two ways.

**Steps:**
1. Form the equation $3^2-x^2=4^2-(5-x)^2$.
2. Find $AH$, then $AB=2AH$.

::solution
Let $O$, $O'$ be the centres of the circles of radii $3$ cm and $4$ cm; let $H$ be the point where $OO'$ meets the common chord $AB$, and $OH=x$. We have

$$9-x^2=16-(5-x)^2\Rightarrow 9=-9+10x\Rightarrow x=1.8.$$

Hence $AH=\sqrt{9-1.8^2}=\sqrt{5.76}=2.4$ (cm), so $AB=4.8$ cm.

So the common chord is $4.8$ cm long.

**Answer.** $4.8$ cm.
:::

:::exercise
Three circles with centres $A$, $B$, $C$ touch one another externally in pairs, with $AB=7$ cm, $BC=8$ cm and $CA=9$ cm. Find the radius of each circle. (Revise [solving simultaneous equations](lesson:solving-simultaneous-equations).)

::hint
**What you need:** when two circles touch externally, the distance between the centres is the sum of the radii.

**Steps:**
1. Form three equations in the unknowns $a$, $b$, $c$, then add them.

::solution
Let $a$, $b$, $c$ (cm) be the radii of the circles with centres $A$, $B$, $C$ ($a$, $b$, $c>0$). From the question, $a+b=7$, $b+c=8$ and $c+a=9$. Adding the three equations gives $2(a+b+c)=24$, so $a+b+c=12$. Hence

$$c=12-7=5,\qquad a=12-8=4,\qquad b=12-9=3\ \text{(satisfying the conditions)}.$$

So the circles with centres $A$, $B$, $C$ have radii $4$ cm, $3$ cm and $5$ cm respectively.

**Answer.** $4$ cm, $3$ cm, $5$ cm (centres $A$, $B$, $C$).
:::

:::exercise
**(1.5 marks)** The circles $(O, 4\text{ cm})$ and $(O', 2\text{ cm})$ touch externally at $A$. The line $a$ passes through $A$ and is perpendicular to $OO'$.

a) Find $OO'$.

b) Prove that $a$ is a common tangent of the two circles.

c) Take a point $M$ on $a$ with $MA=3$ cm. Find $MO$ and $MO'$ (give your answers to 2 decimal places).

::hint
**What you need:** the point of contact lies on the line of centres; the test for a tangent.

**Steps:**
1. Use $OO'=R+r$.
2. Show that $a\perp OA$ and $a\perp O'A$ at $A$.
3. Use Pythagoras' theorem in the triangles right-angled at $A$.

::solution
a) The circles touch externally, so $OO'=4+2=6$ (cm).

b) The point $A$ lies on $OO'$, so $a\perp OA$ and $a\perp O'A$ at $A$. By the test for a tangent, $a$ is the tangent to both $(O)$ and $(O')$ at $A$.

c) In the triangles $MAO$ and $MAO'$, right-angled at $A$, we have

$$MO=\sqrt{3^2+4^2}=5\ \text{(cm)},\qquad MO'=\sqrt{3^2+2^2}=\sqrt{13}\approx3.61\ \text{(cm)}.$$

So $OO'=6$ cm, $MO=5$ cm and $MO'\approx3.61$ cm.

**Answer.** a) $OO'=6$ cm; b) see the proof; c) $MO=5$ cm, $MO'=\sqrt{13}\approx3.61$ cm.
:::

:::exercise Challenge
The circles $(O, 9\text{ cm})$ and $(O', 4\text{ cm})$ touch externally. A common tangent touches $(O)$ at $B$ and $(O')$ at $C$, and does not pass through the point where the circles touch. Find $BC$.

::hint
**What you need:** $OB\perp BC$ and $O'C\perp BC$ (property of a tangent).

**Steps:**
1. Draw $O'K\perp OB$ at $K$; show that $BCO'K$ is a rectangle.
2. Find $OK$ and $OO'$, then $O'K$ by Pythagoras' theorem.

::solution
We have $OB\perp BC$ and $O'C\perp BC$, so $OB\parallel O'C$. Draw $O'K\perp OB$ at $K$; the quadrilateral $BCO'K$ has three right angles, so it is a rectangle. Hence $BC=O'K$ and $BK=O'C=4$ cm, so $OK=9-4=5$ cm. The circles touch externally, so $OO'=9+4=13$ cm. In the triangle $OKO'$, right-angled at $K$, we have

$$O'K=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

So $BC=12$ cm.

**Answer.** $BC=12$ cm.
:::

## Mini test

:::quiz
::mc
Consider the circles $(O, 8\text{ cm})$ and $(O', 3\text{ cm})$ with $OO'=5$ cm. The relative position of the two circles is that they
A. intersect.
B. touch externally.
C. touch internally.
D. lie one inside the other.
::key C
$OO'=8-3=R-r$, so the circles touch internally. B confuses it with $R+r=11$.

::mc
Consider the circles $(O, 6\text{ cm})$ and $(O', 2\text{ cm})$ with $OO'=3$ cm. The relative position of the two circles is that they
A. intersect.
B. touch internally.
C. lie outside each other.
D. lie one inside the other.
::key D
$OO'=3<R-r=4$, so $(O')$ lies inside $(O)$. A only compares with $R+r$.

::mc
The circles $(O, 5\text{ cm})$ and $(O', 5\text{ cm})$ intersect at $A$ and $B$, with $OO'=6$ cm. The length of the common chord $AB$ is
A. $4$ cm.
B. $8$ cm.
C. $6$ cm.
D. $2\sqrt{34}$ cm.
::key B
$OH=3$ cm, so $AH=\sqrt{25-9}=4$ cm and $AB=8$ cm. A forgets to double, and D adds under the root.

::mc
The circles $(O, 7\text{ cm})$ and $(O', 2\text{ cm})$ touch externally. The distance $OO'$ is
A. $5$ cm.
B. $9$ cm.
C. $14$ cm.
D. $4.5$ cm.
::key B
Touching externally gives $OO'=R+r=9$ cm. A is the case of touching internally.

::tf
Consider the circles $(O, 5\text{ cm})$ and $(O', 3\text{ cm})$ with $OO'=4$ cm. Decide whether each statement is true or false.
a) The two circles intersect.
b) The line of centres $OO'$ is perpendicular to the common chord.
c) The two circles touch internally.
d) The common chord has length $6$ cm.
::key T T F T
a) True: $2<4<8$. b) True: $OO'$ is the perpendicular bisector of the common chord. c) False: $4\neq R-r$. d) True: $25-x^2=9-(4-x)^2$ gives $x=4$, so $H$ is $O'$ and $AH=3$.

::sa
The circle $(O, 10\text{ cm})$ touches the circle $(O', r)$ internally, with $r<10$ cm and $OO'=3.5$ cm. Find $r$ (in cm).
::key 6.5
Touching internally gives $10-r=3.5$, so $r=6.5$ cm.

::sa
The circles $(O, 8\text{ cm})$ and $(O', 2\text{ cm})$ touch externally. A common tangent touches the two circles at $B$ and $C$ and does not pass through the point where the circles touch. Find $BC$ (in cm).
::key 8
$OO'=10$ cm and $OK=8-2=6$ cm, so $BC=\sqrt{10^2-6^2}=8$ cm.
:::
