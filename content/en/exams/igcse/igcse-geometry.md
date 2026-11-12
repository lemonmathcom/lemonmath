---
title: "Geometry: angles, similarity, circle theorems"
description: IGCSE Mathematics Extended: angle facts and polygons, similar shapes with length, area and volume scale factors, and the circle theorems with reasons.
minutes: 50
---

:::goals
- Use angle facts for parallel lines, triangles and polygons, giving geometrical reasons.
- Use similarity, including the area and volume scale factors $k^2$ and $k^3$.
- Use the circle theorems and tangent properties, stating the reason for each step.
:::

Two bottles of juice have exactly the same shape. The small one is $12$ cm tall and holds $400$ ml; the large one is $18$ cm tall. It is $1.5$ times as tall, so does it hold $1.5$ times as much? Most people's first guess is yes, and it is wrong: the large bottle holds more than three times as much.

Geometry is full of facts like this, which feel surprising until you see why they are true. In IGCSE, finding the right angle or length is only half of a geometry question. The other half is giving the **reason**, in the standard words examiners expect. This lesson collects the facts and the reasons together, so you learn them as a pair.

## Angles and polygons

The basic angle facts, with the reasons you should write:

| Fact | Reason to write |
|---|---|
| Angles on a straight line add up to $180^\circ$ | angles on a straight line |
| Angles around a point add up to $360^\circ$ | angles at a point |
| Vertically opposite angles are equal | vertically opposite angles |
| With parallel lines: alternate angles equal, corresponding angles equal, co-interior angles add to $180^\circ$ | alternate / corresponding / co-interior angles |
| Angles in a triangle add up to $180^\circ$ | angle sum of a triangle |

For a polygon with $n$ sides, the interior angles add up to $(n-2)\times180^\circ$, because it can be cut into $n-2$ triangles from one vertex. The exterior angles always add up to $360^\circ$: walking once around the polygon, you turn through one full turn. So a **regular** polygon has each exterior angle $\dfrac{360^\circ}{n}$.

:::example A regular polygon
Each exterior angle of a regular polygon is $24^\circ$. How many sides does it have, and what is each interior angle?
A. $15$ sides; $156^\circ$
B. $15$ sides; $24^\circ$
C. $12$ sides; $156^\circ$
D. $24$ sides; $165^\circ$

**Solution.** The exterior angles add up to $360^\circ$, so the number of sides is $\dfrac{360}{24}=15$.

An interior angle and an exterior angle together make a straight line, so each interior angle is $180^\circ-24^\circ=156^\circ$.

So the polygon has $15$ sides and interior angles of $156^\circ$, answer **A**.
:::

## Similarity

Two shapes are **similar** when one is an enlargement of the other: all angles are equal and all lengths are multiplied by the same **scale factor** $k$. Areas are then multiplied by $k^2$ and volumes by $k^3$. Why? An area is a length times a length, so each of the two lengths contributes a factor $k$; a volume uses three lengths.

:::example The two bottles
Two similar bottles have heights $12$ cm and $18$ cm. The small bottle holds $400$ ml. How much does the large bottle hold?
A. $600$ ml
B. $900$ ml
C. $1200$ ml
D. $1350$ ml

**Solution.** The length scale factor is $k=\dfrac{18}{12}=1.5$, so the volume scale factor is $k^3=1.5^3=3.375$.

The large bottle holds $400\times3.375=1350$ ml.

So it holds $1350$ ml, answer **D**. Option A uses $k$ instead of $k^3$, and option B uses $k^2$, the area scale factor.
:::

## Circle theorems

| Theorem | Reason to write |
|---|---|
| The angle at the centre is twice the angle at the circumference subtended by the same arc | angle at centre $=2\times$ angle at circumference |
| The angle in a semicircle is $90^\circ$ | angle in a semicircle |
| Angles in the same segment are equal | angles in the same segment |
| Opposite angles of a cyclic quadrilateral add up to $180^\circ$ | opposite angles of a cyclic quadrilateral |
| A tangent is perpendicular to the radius at the point of contact | tangent $\perp$ radius |
| Two tangents from an external point are equal in length | tangents from a point |
| The angle between a tangent and a chord equals the angle in the alternate segment | alternate segment theorem |
| The perpendicular from the centre to a chord bisects the chord | perpendicular from centre bisects chord |

:::diagram The angle at the centre is twice the angle at the circumference
alt: A circle with centre O; points A and B on the lower part of the circle and C at the top; lines OA, OB, CA and CB, with the angle AOB marked 2x and the angle ACB marked x
point O 0,0 above
point A -2.82,-1.03 left
point B 2.82,-1.03 right
point C 0,3 above
circle O 3
segment O A
segment O B
segment C A
segment C B
angle A O B "2x"
angle A C B "x"
:::

:::example Angles at the centre and at the circumference
Points $A$, $B$ and $C$ lie on a circle with centre $O$, and angle $ACB=35^\circ$. Find angle $AOB$, giving a reason.

**Solution.** Angles $AOB$ and $ACB$ are subtended by the same arc $AB$, the first at the centre and the second at the circumference.

The angle at the centre is twice the angle at the circumference, so angle $AOB=2\times35^\circ=70^\circ$.

So angle $AOB=70^\circ$ (angle at centre $=2\times$ angle at circumference).
:::

:::example A tangent and a radius
A tangent from a point $P$ touches a circle with centre $O$ at $T$. The radius is $5$ cm and $OP=13$ cm. Find $PT$.

**Solution.** The tangent is perpendicular to the radius at $T$, so triangle $OTP$ has a right angle at $T$.

By Pythagoras, $PT=\sqrt{13^2-5^2}=\sqrt{144}=12$ cm.

So $PT=12$ cm (tangent $\perp$ radius).
:::

:::warning Common traps
- **No reason given:** most geometry marks need the reason as well as the angle.
- **Scale factors:** lengths $k$, areas $k^2$, volumes $k^3$; from areas back to lengths take a square root.
- **Angle at the centre:** check that both angles stand on the same arc.
- **Cyclic quadrilateral:** all four vertices must lie on the circle.
- **Diagrams not to scale:** never measure; calculate.
:::

:::terms
- alternate / corresponding / co-interior angles | góc so le trong / góc đồng vị / góc trong cùng phía
- interior / exterior angle | góc trong / góc ngoài
- regular polygon | đa giác đều
- similar / scale factor | đồng dạng / tỉ số đồng dạng
- circumference | đường tròn (chu vi)
- semicircle / segment / arc | nửa đường tròn / hình viên phân / cung
- cyclic quadrilateral | tứ giác nội tiếp
- tangent / chord | tiếp tuyến / dây cung
- alternate segment theorem | định lí góc tạo bởi tiếp tuyến và dây cung
:::

## Similar exercises

:::exercise
Find the sum of the interior angles of a hexagon, and the size of each interior angle of a regular hexagon.

::hint
**What you need:** $(n-2)\times180^\circ$.

::solution
A hexagon has $6$ sides, so its interior angles add up to $(6-2)\times180^\circ=720^\circ$.

In a regular hexagon all six angles are equal, so each is $\dfrac{720^\circ}{6}=120^\circ$.

So the sum is $720^\circ$ and each angle of a regular hexagon is $120^\circ$.

**Answer.** $720^\circ$; $120^\circ$.
:::

:::exercise
Triangles $ABC$ and $PQR$ are similar, with $AB=4$ cm corresponding to $PQ=10$ cm, and $AC=6$ cm corresponding to $PR$. Find $PR$.

::hint
**What you need:** the scale factor is $\dfrac{10}{4}$.

::solution
The scale factor from $ABC$ to $PQR$ is $k=\dfrac{10}{4}=2.5$, and every length is multiplied by $k$.

Side $AC$ corresponds to side $PR$, so $PR$ is also $2.5$ times $AC$: $PR=6\times2.5=15$ cm.

So $PR=15$ cm.

**Answer.** $15$ cm.
:::

:::exercise
$AB$ is a diameter of a circle and $C$ is a point on the circle. Angle $CAB=32^\circ$. Find angle $CBA$, giving reasons.

::hint
**What you need:** the angle in a semicircle.

::solution
Since $AB$ is a diameter, angle $ACB=90^\circ$ (angle in a semicircle).

The angles of triangle $ABC$ add up to $180^\circ$, so angle $CBA=180^\circ-90^\circ-32^\circ=58^\circ$.

So angle $CBA=58^\circ$.

**Answer.** $58^\circ$.
:::

:::exercise
A tangent at $T$ makes an angle of $64^\circ$ with the chord $TA$. $B$ is a point on the circle in the alternate segment. Find angle $TBA$, giving a reason.

::hint
**What you need:** the alternate segment theorem.

::solution
The angle between the tangent and the chord $TA$ equals the angle that $TA$ subtends at the circumference in the alternate segment.

So angle $TBA=64^\circ$ (alternate segment theorem).

**Answer.** $64^\circ$.
:::

:::exercise
Two similar shapes have lengths in the ratio $2:5$. The smaller has area $12\text{ cm}^2$. Find the area of the larger.

::hint
**What you need:** the area scale factor is $k^2$.

::solution
The length scale factor is $k=\dfrac52$, so the area scale factor is $k^2=\dfrac{25}{4}=6.25$.

The larger area is $12\times6.25=75\text{ cm}^2$.

So the larger shape has area $75\text{ cm}^2$.

**Answer.** $75\text{ cm}^2$.
:::

## Applied exercises

:::exercise
A map has scale $1:25{,}000$. A lake has area $8\text{ cm}^2$ on the map. Find its real area in $\text{km}^2$.

::hint
**What you need:** areas are multiplied by $25{,}000^2$; $1\text{ km}^2=10^{10}\text{ cm}^2$.

::solution
Lengths are multiplied by $25{,}000$, so areas are multiplied by $25{,}000^2=6.25\times10^8$. The real area is $8\times6.25\times10^8=5\times10^9\text{ cm}^2$.

Since $1\text{ km}=10^5$ cm, $1\text{ km}^2=10^{10}\text{ cm}^2$, so the area is $\dfrac{5\times10^9}{10^{10}}=0.5\text{ km}^2$.

So the lake has an area of $0.5\text{ km}^2$.

**Answer.** $0.5\text{ km}^2$.
:::

:::exercise
Each interior angle of a regular polygon is $5$ times each exterior angle. How many sides does the polygon have?

::hint
**What you need:** interior $+$ exterior $=180^\circ$.

::solution
Let the exterior angle be $x$. Then $5x+x=180^\circ$, so $x=30^\circ$.

Each interior angle is $5\times30^\circ=150^\circ$; check: $150^\circ+30^\circ=180^\circ$. The exterior angles add up to $360^\circ$, so the number of sides is $\dfrac{360}{30}=12$.

So the polygon has $12$ sides.

**Answer.** $12$.
:::

:::exercise
In a cyclic quadrilateral, two opposite angles are $(3x+10)^\circ$ and $(2x+20)^\circ$. Find $x$ and both angles.

::hint
**What you need:** opposite angles of a cyclic quadrilateral add to $180^\circ$.

::solution
Opposite angles of a cyclic quadrilateral add up to $180^\circ$, so $3x+10+2x+20=180$, that is $5x=150$ and $x=30$.

The angles are $3(30)+10=100^\circ$ and $2(30)+20=80^\circ$; check: $100+80=180$.

So $x=30$, and the angles are $100^\circ$ and $80^\circ$.

**Answer.** $x=30$; $100^\circ$ and $80^\circ$.
:::

:::exercise Challenge
A chord of length $16$ cm is drawn in a circle of radius $10$ cm. Find the distance from the centre to the chord.

::hint
**What you need:** the perpendicular from the centre bisects the chord.

::solution
The perpendicular from the centre to the chord bisects it, so it meets the chord at its midpoint, $8$ cm from each end.

This makes a right-angled triangle with hypotenuse $10$ (a radius) and one side $8$, so the distance is $\sqrt{10^2-8^2}=\sqrt{36}=6$ cm.

So the chord is $6$ cm from the centre.

**Answer.** $6$ cm.
:::

:::quiz
::mc
The exterior angles of any polygon add up to
A. $180^\circ$
B. $360^\circ$
C. $540^\circ$
D. $(n-2)\times180^\circ$
::key B
One full turn around the polygon.

::mc
The angle in a semicircle is
A. $90^\circ$
B. $180^\circ$
C. $45^\circ$
D. $60^\circ$
::key A
The angle subtended by a diameter.

::mc
Two similar solids have lengths in the ratio $1:3$. Their volumes are in the ratio
A. $1:3$
B. $1:6$
C. $1:27$
D. $1:9$
::key C
$3^3=27$.

::mc
A tangent meets the radius at the point of contact at
A. $45^\circ$
B. $60^\circ$
C. $180^\circ$
D. $90^\circ$
::key D
Tangent $\perp$ radius.

::tf
$ABCD$ is a cyclic quadrilateral with angle $A=110^\circ$ and angle $B=75^\circ$. Decide whether each statement is true or false.
a) Angle $C=70^\circ$.
b) Angle $D=105^\circ$.
c) The four angles add up to $360^\circ$.
d) Angle $A$ and angle $B$ must add up to $180^\circ$.
::key T T T F
Only opposite angles add up to $180^\circ$.

::sa
Find each interior angle of a regular pentagon, in degrees.
::key 108
$\dfrac{540}{5}=108$.

::sa
The angle at the circumference is $40^\circ$. Find the angle at the centre on the same arc, in degrees.
::key 80
Twice the angle at the circumference.
:::
