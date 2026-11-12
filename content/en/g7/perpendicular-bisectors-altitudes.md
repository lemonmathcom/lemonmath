---
title: Concurrency of the perpendicular bisectors and of the altitudes
description: See why the three perpendicular bisectors and the three altitudes of a triangle each meet at one point, and use this in real-life problems.
minutes: 20
---

:::goals
- Recall the property of a perpendicular bisector and recognise the altitudes of a triangle.
- Explain why the three perpendicular bisectors of a triangle meet at a point equidistant from the three vertices.
- Recognise the orthocentre and locate it in acute, right-angled and obtuse triangles.
- Apply these ideas to isosceles triangles and to real-life problems about a point equidistant from three places.
:::

Suppose three villages $A$, $B$, $C$ do not lie on one line and want to dig a shared well. To be fair, the well must be the same distance from all three villages. Is there such a point, and if so, how do we find it?

This lesson answers that question. It also shows something neat: when we draw three special lines in a triangle, they do not wander off; they always meet at exactly one point.

## Perpendicular bisectors and the point equidistant from the vertices

### Explore: a point on a perpendicular bisector

Let $AB=10$ cm with midpoint $I$. The perpendicular bisector of $AB$ is the line through $I$ perpendicular to $AB$. Take a point $M$ on it with $MI=h$.

| $h$ (cm) | $MA$ (cm) | $MB$ (cm) |
|---|---|---|
| $0$ | $5$ | $5$ |
| $12$ | $13$ | $13$ |

For $h=12$, the right-angled triangle $MIA$ has $MA=\sqrt{12^2+5^2}=13$, and in the same way $MB=13$. For any position of $M$, the right-angled triangles $MIA$ and $MIB$ are congruent (the shorter side $MI$ is common and $IA=IB$), so $MA=MB$.

:::theorem Property of the perpendicular bisector
- Every point on the perpendicular bisector of a segment is equidistant from the two endpoints of the segment.
- Conversely, a point equidistant from the two endpoints of a segment lies on the perpendicular bisector of the segment.
:::

Now we use this property for the three sides of a triangle.

:::theorem Concurrency of the perpendicular bisectors
The three perpendicular bisectors of the sides of a triangle pass through one point. This point is equidistant from the three vertices of the triangle.
:::

**Why?** Let $ABC$ be a triangle. The perpendicular bisectors of $AB$ and $BC$ are not parallel (because $AB$ and $BC$ are not parallel), so they meet at a point $O$.

Since $O$ is on the perpendicular bisector of $AB$, we have $OA=OB$. Since $O$ is on the perpendicular bisector of $BC$, we have $OB=OC$. Hence $OA=OC$, so $O$ is on the perpendicular bisector of $AC$.

So the three perpendicular bisectors pass through $O$, and $OA=OB=OC$.

:::diagram The three perpendicular bisectors meet at $O$
alt: Triangle ABC with the perpendicular bisectors of its sides meeting at O, and the circle with centre O passing through the vertices A, B and C
point B 0,0 below-left
point C 6,0 below-right
point A 2,4 above
point O 3,1 below-right
point M 3,0 below ""
point N 1,2 left
point P 4,2 right
circle O 3.162
polygon A B C
segment M O
segment N O
segment P O
right C M O
mark B M 1
mark M C 1
:::

The point $O$ is the centre of the circle through $A$, $B$ and $C$ (the circumscribed circle of triangle $ABC$), so we call $O$ the circumcentre of the triangle.

**Going deeper.** The condition "three points not on one line" is essential: if $A$, $B$, $C$ are collinear, the three perpendicular bisectors are parallel and no point is equidistant from all three. This is why the three villages at the start must not lie on a line.

## Altitudes and the orthocentre

An altitude is different from a perpendicular bisector: it passes through a vertex and is perpendicular to the opposite side, but it does not have to pass through the midpoint.

:::definition Altitude of a triangle
The segment drawn from a vertex of a triangle perpendicular to the line containing the opposite side is called an **altitude** of the triangle. The foot of the altitude is the point where it meets the line containing the opposite side.
:::

Every triangle has three altitudes. Remarkably, they are also concurrent.

:::theorem Concurrency of the altitudes
The three altitudes of a triangle pass through one point. This point is called the **orthocentre** of the triangle.
:::

We accept this theorem. (Idea of a proof: through each vertex draw the line parallel to the opposite side; these three lines form a larger triangle, and the three altitudes of the original triangle turn out to be the three perpendicular bisectors of the larger triangle. So they are concurrent by the theorem above.)

:::diagram The altitudes $AD$, $BE$, $CF$ meet at the orthocentre $H$
alt: Acute triangle ABC with the three altitudes AD, BE and CF meeting at a point H inside the triangle
point B 0,0 below-left
point C 6,0 below-right
point A 2,4 above
point D 2,0 below
point E 3,3 right
point F 1.2,2.4 left
point H 2,2 below-right
polygon A B C
segment A D
segment B E
segment C F
right A D C
:::

The position of the orthocentre depends on the type of triangle: in an acute triangle it lies inside; in an obtuse triangle it lies outside; in a right-angled triangle it is the vertex of the right angle.

## Examples

We start with a length problem that uses equidistance.

:::example A point equidistant from the three vertices
In triangle $ABC$, the perpendicular bisectors of $AB$ and $BC$ meet at $O$. Given $OA=5$ cm. Let $M$ be the midpoint of $AB$, with $OM=3$ cm.

a) Find $OB$ and $OC$.

b) Find $AB$.

**Solution.** a) Since $O$ is the point where the perpendicular bisectors meet, $OA=OB=OC$. So $OB=OC=5$ cm.

b) Since $O$ is on the perpendicular bisector of $AB$, we have $OM\perp AB$. In triangle $OMA$, right-angled at $M$, Pythagoras' theorem gives
$$AM=\sqrt{OA^2-OM^2}=\sqrt{5^2-3^2}=\sqrt{16}=4\text{ (cm)}.$$
Since $M$ is the midpoint of $AB$, $AB=2AM=8$ cm.

So $OB=OC=5$ cm and $AB=8$ cm.
:::

In an isosceles triangle, the special lines coincide.

:::example An isosceles triangle
Triangle $ABC$ is isosceles at $A$ and $M$ is the midpoint of $BC$. Prove that $AM$ is the perpendicular bisector of $BC$ and the altitude from $A$. Deduce that the circumcentre $O$ lies on $AM$.

**Solution.** Since $AB=AC$, the point $A$ is equidistant from $B$ and $C$, so $A$ lies on the perpendicular bisector of $BC$. The point $M$ is the midpoint of $BC$, so $M$ also lies on the perpendicular bisector of $BC$.

Two distinct points $A$ and $M$ lie on the perpendicular bisector of $BC$, so the line $AM$ is the perpendicular bisector of $BC$. Hence $AM\perp BC$, that is, $AM$ is the altitude from $A$.

The point $O$ is where the three perpendicular bisectors meet, so $O$ is on the perpendicular bisector of $BC$, that is, $O$ lies on $AM$.

So $AM$ is both the perpendicular bisector and the altitude, and $O\in AM$.
:::

Next is a special case of the orthocentre.

:::example The orthocentre of a right-angled triangle
Triangle $ABC$ is right-angled at $A$. Find its orthocentre.

**Solution.** Since $AB\perp AC$, the line $BA$ passes through $B$ and is perpendicular to $AC$, so $BA$ is the altitude from $B$. In the same way, $CA$ is the altitude from $C$.

The altitudes $BA$ and $CA$ meet at $A$. The third altitude, from $A$, also passes through $A$ because it starts there, so the three altitudes meet at $A$.

So the orthocentre of the right-angled triangle $ABC$ is the vertex $A$.
:::

The concurrency theorem gives a short argument.

:::example The third altitude
In triangle $ABC$, the altitudes $BD$ and $CE$ meet at $H$. Prove that $AH\perp BC$.

**Solution.** $H$ is the intersection of the altitudes $BD$ and $CE$. Since the three altitudes of a triangle are concurrent, the third altitude, from $A$, also passes through $H$.

Hence the line $AH$ is the altitude from $A$, so $AH\perp BC$.

So $AH\perp BC$.
:::

The last example is a real-life problem with several pieces of data, so we go through all four steps.

:::example Choosing the site of a well (Application)
Suppose three villages $A$, $B$, $C$ form a triangle, isosceles at $A$, with $AB=AC=13$ km and $BC=10$ km. A well is to be dug at a point $O$ equidistant from the three villages. Find the distance from the well to each village (give your answer to 1 decimal place).

**Solution.**

*Understand.* We need a point $O$ with $OA=OB=OC$ and the length $R=OA$.

*Plan.* $O$ is where the perpendicular bisectors meet, so $O$ lies on $AM$ (with $M$ the midpoint of $BC$, by the previous example). We use Pythagoras' theorem in two right-angled triangles.

*Solve.* We have $BM=5$ km, and $AM\perp BC$, so $AM=\sqrt{13^2-5^2}=12$ km. Let $OA=OB=R$; then $OM=12-R$. In triangle $OMB$, right-angled at $M$:
$$\begin{aligned} R^2&=(12-R)^2+5^2\\ R^2&=144-24R+R^2+25\\ 24R&=169\\ R&=\dfrac{169}{24}\approx 7.0. \end{aligned}$$
So the well is about $7.0$ km from each village.

*Look back.* Check: $OM=12-\dfrac{169}{24}=\dfrac{119}{24}>0$, and $OM^2+5^2=\dfrac{14161}{576}+\dfrac{14400}{576}=\dfrac{28561}{576}=\left(\dfrac{169}{24}\right)^2$, which is correct. Since $OM>0$, the well lies inside the triangle. If the data changed, for example if $BC$ were very long compared with $AM$, then $12-R$ could be negative, meaning $O$ lies outside the triangle (the triangle is obtuse at $A$).
:::

:::warning Mistakes to watch out for
- **Confusing a perpendicular bisector with an altitude.** Wrong: "the altitude from $A$ always passes through the midpoint of $BC$". Why it is wrong: an altitude only has to be perpendicular to $BC$; it passes through the midpoint of $BC$ when the triangle is isosceles at $A$. Right: a perpendicular bisector passes through the midpoint and is perpendicular; an altitude passes through the vertex and is perpendicular.
- **Thinking the orthocentre is always inside.** Wrong: "the orthocentre of every triangle lies inside it". Why it is wrong: in a right-angled triangle it is the vertex of the right angle, and in an obtuse triangle it lies outside. Right: only an acute triangle has its orthocentre inside.
- **Confusing the orthocentre with the circumcentre.** Wrong: "the orthocentre $H$ is equidistant from the three vertices". Why it is wrong: the property $OA=OB=OC$ belongs to the meeting point of the perpendicular bisectors, not of the altitudes. Right: the two points coincide only in an equilateral triangle.
:::

**Connections.** This lesson uses perpendicular bisectors, congruent triangles and Pythagoras' theorem, and it prepares the next lesson on the concurrency of the medians and the angle bisectors. The three kinds of lines in a triangle (perpendicular bisectors, altitudes, medians) give four special points, and an isosceles triangle is where they lie on one line.

## Key terms

:::terms
- perpendicular bisector | đường trung trực
- altitude | đường cao
- concurrent | đồng quy
- orthocentre | trực tâm
- circumcentre | tâm đường tròn ngoại tiếp
- equidistant | cách đều
- midpoint | trung điểm
- acute triangle | tam giác nhọn
- obtuse triangle | tam giác tù
- foot of the altitude | chân đường cao
:::

## Summary

- A point on the perpendicular bisector of $AB$ is equidistant from $A$ and $B$, and conversely.
- The three perpendicular bisectors of a triangle meet at $O$ with $OA=OB=OC$; $O$ is the circumcentre.
- The three altitudes of a triangle meet at the orthocentre $H$.
- Acute triangle: $H$ inside; right-angled triangle: $H$ is the vertex of the right angle; obtuse triangle: $H$ outside.
- Isosceles triangle at $A$: the perpendicular bisector of $BC$ passes through $A$ and is the altitude from $A$.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Let $AB$ be a segment.

a) The point $M$ lies on the perpendicular bisector of $AB$ and $MA=7$ cm. Find $MB$.

b) The point $N$ has $NA=NB=9$ cm. On which line does $N$ lie?

::hint
**What you need:** a point on the perpendicular bisector of a segment is equidistant from the endpoints, and conversely.

**Steps:**
1. a) Use the direct property.
2. b) Use the converse.

::solution
a) Since $M$ lies on the perpendicular bisector of $AB$, $MB=MA=7$ cm.

b) Since $NA=NB$, $N$ lies on the perpendicular bisector of $AB$.

So a) $MB=7$ cm; b) $N$ lies on the perpendicular bisector of $AB$.

**Answer.** a) $7$ cm; b) the perpendicular bisector of $AB$.
:::

:::exercise
In triangle $ABC$, the perpendicular bisectors of $AB$ and $AC$ meet at $O$. Given $OB=4$ cm, find $OA$ and $OC$, and say whether $O$ lies on the perpendicular bisector of $BC$.

::hint
**What you need:** the three perpendicular bisectors of a triangle meet at a point equidistant from the three vertices.

**Steps:**
1. Use equidistance with each perpendicular bisector.
2. Compare $OB$ and $OC$.

::solution
Since $O$ is on the perpendicular bisector of $AB$, $OA=OB=4$ cm. Since $O$ is on the perpendicular bisector of $AC$, $OA=OC$, so $OC=4$ cm.

Since $OB=OC$, $O$ lies on the perpendicular bisector of $BC$.

So $OA=OC=4$ cm and $O$ lies on the perpendicular bisector of $BC$.

**Answer.** $OA=OC=4$ cm; yes.
:::

:::exercise
Triangle $ABC$ is right-angled at $C$. Which point is its orthocentre? Explain.

::hint
**What you need:** an altitude from a vertex is perpendicular to the opposite side.

**Steps:**
1. Find the altitudes from $A$ and from $B$.
2. Find where they meet.

::solution
Since $CA\perp CB$, $CA$ is the altitude from $A$ (perpendicular to $BC$) and $CB$ is the altitude from $B$ (perpendicular to $AC$). These two lines meet at $C$.

So the orthocentre of the triangle is the point $C$.

**Answer.** The point $C$.
:::

:::exercise
Triangle $ABC$ is isosceles at $A$ and $M$ is the midpoint of $BC$. Prove that the orthocentre $H$ of triangle $ABC$ lies on the line $AM$.

::hint
**What you need:** in a triangle isosceles at $A$, $AM$ is the perpendicular bisector of $BC$ and the altitude from $A$.

**Steps:**
1. Prove that $AM$ is the altitude from $A$.
2. Use the fact that the three altitudes meet at $H$.

::solution
Since $AB=AC$ and $MB=MC$, the points $A$ and $M$ both lie on the perpendicular bisector of $BC$, so $AM\perp BC$. Hence $AM$ is the altitude from $A$.

The orthocentre $H$ is on all three altitudes, so $H$ lies on the altitude from $A$, that is, $H\in AM$.

So the orthocentre $H$ lies on $AM$.

**Answer.** $H\in AM$.
:::

:::exercise
A park is shaped like an isosceles triangle $ABC$ with $AB=AC=10$ m and $BC=12$ m. A lamp post is placed at a point $O$ equidistant from the three corners, and a cable is run from $O$ to each corner. Find the length of each cable.

::hint
**What you need:** $O$ lies on $AM$ ($M$ is the midpoint of $BC$) and $OA=OB=OC$.

**Steps:**
1. Find $AM$ using Pythagoras' theorem.
2. Let $OA=R$ and form an equation in triangle $OMB$.

::solution
We have $BM=6$ m and $AM=\sqrt{10^2-6^2}=8$ m. Let $OA=OB=R$; then $OM=8-R$. In triangle $OMB$, right-angled at $M$:
$$R^2=(8-R)^2+6^2\Rightarrow 16R=100\Rightarrow R=6.25.$$
So each cable is $6.25$ m long.

**Answer.** $6.25$ m.
:::

:::exercise
A piece of an ancient broken plate has three points $A$, $B$, $C$ on its rim, lying on the circle of the original plate. Describe how to find the centre of the plate and explain why the method works.

::hint
**What you need:** the centre of a circle is equidistant from all points of the circle; the three perpendicular bisectors of triangle $ABC$ are concurrent.

**Steps:**
1. Draw the perpendicular bisectors of $AB$ and of $BC$.
2. Explain why their intersection is equidistant from $A$, $B$, $C$.

::solution
Draw the perpendicular bisector of $AB$ and the perpendicular bisector of $BC$. They meet at $O$.

Since $O$ is on the perpendicular bisector of $AB$, $OA=OB$, and since $O$ is on the perpendicular bisector of $BC$, $OB=OC$. Hence $OA=OB=OC$, so $O$ is the centre of the circle through $A$, $B$, $C$, that is, the centre of the plate.

So the centre of the plate is the intersection of the perpendicular bisectors of $AB$ and $BC$.

**Answer.** The intersection of the two perpendicular bisectors.
:::

:::exercise
Remember the previous lesson on the triangle inequality. Three villages $A$, $B$, $C$ are each $5$ km from a well $O$, and $O$ does not lie on the line $AB$. Which of the numbers $8$; $10$; $11$ (km) could be the length of $AB$?

::hint
**What you need:** in triangle $OAB$, $AB<OA+OB$.

**Steps:**
1. Write the triangle inequality for $O$, $A$, $B$.
2. Test each value.

::solution
Since $O$ is not on $AB$, the points $O$, $A$, $B$ form a triangle. By the triangle inequality, $AB<OA+OB=10$ km.

Of the three given numbers, only $8$ is less than $10$. The value $10$ would put $O$ on $AB$, and $11$ is greater than $10$.

So $AB$ can be $8$ km.

**Answer.** $8$ km.
:::

:::exercise Challenge
In acute triangle $ABC$, the altitudes $BD$ and $CE$ meet at $H$. Prove that $\angle BHC=180^\circ-\angle A$.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$; two angles on a straight line add up to $180^\circ$.

**Steps:**
1. Find $\angle ABD$ in triangle $ABD$, right-angled at $D$.
2. Find $\angle BHE$ in triangle $BEH$, right-angled at $E$, then use angles on a straight line.

::solution
In triangle $ABD$, right-angled at $D$, we have $\angle ABD=90^\circ-\angle A$.

In triangle $BEH$, right-angled at $E$, we have $\angle EBH=\angle ABD$ (since $E$ is on $AB$ and $H$ is on $BD$). Hence $\angle BHE=90^\circ-\angle EBH=\angle A$.

Since $H$ lies between $E$ and $C$, the angles $\angle BHE$ and $\angle BHC$ are on a straight line. Hence $\angle BHC=180^\circ-\angle BHE=180^\circ-\angle A$.

So $\angle BHC=180^\circ-\angle A$.

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
In triangle $ABC$, the perpendicular bisectors of $AB$ and $AC$ meet at $O$ and $OA=5$ cm. The distance $OB$ is
A. $5$ cm.
B. $2.5$ cm.
C. $3$ cm.
D. $10$ cm.
::key A
$O$ is equidistant from the three vertices, so $OB=OA=5$ cm. A doubles and B halves $OA$ for no reason.

::mc
The orthocentre of triangle $ABC$, right-angled at $A$, is
A. the midpoint of $BC$.
B. the point $A$.
C. the point $B$.
D. a point on $AB$ equidistant from $B$ and $C$.
::key B
The altitudes from $B$ and $C$ are $BA$ and $CA$, which meet at $A$. B confuses it with the circumcentre of a right-angled triangle.

::mc
The point equidistant from the three vertices of a triangle is the intersection of
A. the three altitudes.
B. the three medians.
C. the three perpendicular bisectors.
D. two altitudes and one perpendicular bisector.
::key C
The intersection of the three perpendicular bisectors is equidistant from the vertices. The intersection of the altitudes is the orthocentre, which does not have this property.

::mc
Triangle $ABC$ is isosceles at $A$ and $M$ is the midpoint of $BC$. Which line is the perpendicular bisector of $BC$?
A. The line $BC$.
B. The line through $A$ parallel to $BC$.
C. The line $AB$.
D. The line $AM$.
::key D
$A$ and $M$ are both equidistant from $B$ and $C$, so $AM$ is the perpendicular bisector of $BC$. D is perpendicular to $AM$, not to $BC$.

::tf
In acute triangle $ABC$, the altitudes $BD$ and $CE$ meet at $H$. Decide whether each statement is true or false.
a) The point $H$ is equidistant from the three vertices $A$, $B$, $C$.
b) $AH\perp BC$.
c) $\angle BHC=180^\circ-\angle A$.
d) If $\angle A=50^\circ$, then $\angle BHC=40^\circ$.
::key F T T F
a) False: $H$ is the orthocentre, not the circumcentre. b) True: $AH$ is the third altitude. c) True: by the challenge exercise. d) False: $180^\circ-50^\circ=130^\circ$.

::sa
Acute triangle $ABC$ has $\angle A=64^\circ$. The altitudes $BD$ and $CE$ meet at $H$. Find $\angle BHC$ (in degrees).
::key 116
$\angle BHC=180^\circ-\angle A=180^\circ-64^\circ=116^\circ$.

::sa
Triangle $ABC$ is isosceles at $A$ with $AB=AC=5$ cm and $BC=6$ cm. How far is the circumcentre $O$ from each vertex, in centimetres (give your answer to 1 decimal place)?
::key 3.1
$AM=\sqrt{25-9}=4$. Let $OA=R$, $OM=4-R$, so $R^2=(4-R)^2+9$, which gives $8R=25$ and $R=3.125\approx3.1$ (cm).
:::
