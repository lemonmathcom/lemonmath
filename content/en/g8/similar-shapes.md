---
title: Similar shapes
description: Understand similar shapes, perspective similarity and the similarity ratio, and use them for photo enlargements, maps, scale models and shadows.
minutes: 20
---

:::goals
- Recognise similar polygons from their corresponding angles and sides.
- Recognise shapes in perspective similarity and use the similarity ratio to find lengths.
- Explain why shapes in perspective similarity have parallel, proportional sides.
- Use similar shapes for photo enlargements, maps, scale models and shadows.
:::

A $9\ \text{cm}\times12\ \text{cm}$ photo is enlarged to two prints: one $18\ \text{cm}\times24\ \text{cm}$ and one $18\ \text{cm}\times27\ \text{cm}$. Looking at them, you may feel the second print is slightly "stretched".

How can we be sure which print keeps the shape of the original? This question appears everywhere: enlarging photos, reading maps, building models, projecting images onto a screen. We already know what similar triangles are; this lesson extends the idea to any shape.

## Explore: equal angles are not enough

The rectangles $2\times3$ and $4\times6$ both have four right angles, and their corresponding sides are in the ratio $2$. The rectangle $4\times7$ also has four right angles, but $\dfrac42=2$ while $\dfrac73\neq2$, so it looks "fatter".

Here is an example the other way round: a square of side $4$ and a rhombus of side $8$ have proportional sides ($\frac84=2$), but the angles of the rhombus are not right angles, so the two shapes look different. So we need both conditions: **equal angles** and **proportional sides**.

:::definition Similar polygons
Two polygons are **similar** if their corresponding angles are equal and their corresponding sides are proportional. The ratio $k$ of two corresponding sides is the **similarity ratio**.
:::

For triangles we do not need to check both conditions, because the similarity conditions give us shortcuts. For polygons with four or more sides, we must check both.

**Going deeper.** Similar shapes have "the same shape but possibly a different size" (the same size when $k=1$). We may move, flip or turn a shape; what we may not do is stretch it more in one direction than in the other.

## Shapes in perspective similarity

There is a very natural way to enlarge or reduce a shape: project it from a point. Fix a point $O$ and a number $k>0$. For each point $M$, take the point $M'$ on the ray $OM$ with $OM'=k\cdot OM$. As $M$ runs over a shape $\mathcal{H}$, the point $M'$ runs over a shape $\mathcal{H}'$. We say that $\mathcal{H}'$ is in **perspective similarity** with $\mathcal{H}$, with centre $O$ and ratio $k$.

:::diagram Triangle $A'B'C'$ is in perspective similarity with triangle $ABC$, centre $O$, ratio $2$
alt: A point O at the lower left; a small triangle ABC; a triangle twice as large, A'B'C', whose vertices lie on the rays OA, OB and OC drawn as dashed lines
point O 0,0 below-left
point A 1,1 below-right
point B 3,1 below-right
point C 2,3 left
point A' 2,2 above-left
point B' 6,2 right
point C' 4,6 above
polygon A B C
polygon A' B' C'
segment O A' dashed
segment O B' dashed
segment O C' dashed
:::

:::theorem Properties of perspective similarity
If a shape $\mathcal{H}'$ is in perspective similarity with a shape $\mathcal{H}$, centre $O$ and ratio $k$, then for any two points $A$, $B$ of $\mathcal{H}$ and the matching points $A'$, $B'$:
- $A'B'\parallel AB$ and $A'B'=k\cdot AB$.
- Corresponding angles are equal.
- The two shapes are similar with similarity ratio $k$.
:::

**Why?** Look at triangles $OAB$ and $OA'B'$. We have $\dfrac{OA'}{OA}=\dfrac{OB'}{OB}=k$ and the triangles share the angle $\angle AOB$, so $\triangle OA'B'\backsim\triangle OAB$ (SAS) with ratio $k$. Hence $A'B'=k\cdot AB$ and $\angle OAB=\angle OA'B'$; these are corresponding angles, so $A'B'\parallel AB$. Every length is multiplied by the same number $k$ and corresponding sides are parallel, so corresponding angles are equal.

When $k>1$ the shape is enlarged; when $0<k<1$ it is reduced; when $k=1$ it does not change.

## Examples

We start by recognising similar shapes.

:::example Recognising similar shapes
Which of the following pairs of shapes are similar? If they are, state the similarity ratio.

a) A $3\times5$ rectangle and a $6\times10$ rectangle.

b) A $3\times5$ rectangle and a $6\times8$ rectangle.

c) A square of side $4$ and a square of side $7$.

d) A square of side $4$ and a rhombus of side $8$ with an angle of $80^\circ$.

**Solution.** a) Both rectangles have all angles equal to $90^\circ$, and $\dfrac63=\dfrac{10}5=2$. So the shapes are similar with ratio $2$.

b) All angles are $90^\circ$, but $\dfrac63=2$ and $\dfrac85=1.6$. So the shapes are not similar.

c) Every square has four right angles and four equal sides, so any two squares are similar, with ratio $\dfrac74$.

d) The rhombus has an angle of $80^\circ$, not $90^\circ$, so the angles are not equal. So the shapes are not similar, even though $\dfrac84=2$.

So the pairs a) and c) are similar; the pairs b) and d) are not.
:::

Now we answer the question about the photo from the start.

:::example Enlarging a photo
A $9\ \text{cm}\times12\ \text{cm}$ photo is enlarged so that the width of the print is $21$ cm. What must the height of the print be for the shape to be kept? Is the $18\ \text{cm}\times27\ \text{cm}$ print from the start similar to the original?

**Solution.** Two rectangular photos are similar when corresponding sides are proportional. The similarity ratio is $k=\dfrac{21}{9}=\dfrac73$. The height of the print is
$$12\cdot\frac73=28\ \text{(cm)}.$$

For the $18\times27$ print: $\dfrac{18}{9}=2$ but $\dfrac{27}{12}=2.25$. The ratios differ, so this print is not similar to the original (matching the "stretched" feeling at the start). The $18\times24$ print has $\dfrac{18}9=\dfrac{24}{12}=2$, so it is similar.

So the height of the print must be $28$ cm.
:::

When we know the centre and the ratio, we can find every length in the new shape.

:::example Lengths in perspective similarity
Triangle $A'B'C'$ is in perspective similarity with triangle $ABC$, centre $O$, ratio $k=\dfrac32$. Given $OA=3$ cm, $AB=4$ cm, $BC=5$ cm, $CA=6$ cm, find $OA'$ and the sides of triangle $A'B'C'$, and compare the ratio of the perimeters with $k$.

**Solution.** Since $A'$ lies on the ray $OA$ and $OA'=k\cdot OA$, we have $OA'=\dfrac32\cdot3=4.5$ (cm).

By the properties of perspective similarity, we have
$$A'B'=\frac32\cdot4=6,\qquad B'C'=\frac32\cdot5=7.5,\qquad C'A'=\frac32\cdot6=9\ \text{(cm)}.$$
The perimeter of $ABC$ is $4+5+6=15$ cm and the perimeter of $A'B'C'$ is $6+7.5+9=22.5$ cm. Hence $\dfrac{22.5}{15}=\dfrac32=k$.

So $OA'=4.5$ cm, the sides of triangle $A'B'C'$ are $6$ cm, $7.5$ cm, $9$ cm, and the ratio of the perimeters equals $k$.
:::

A map is also a reduced shape, similar to the ground it shows.

:::example Reading a map
A rectangular park measures $3\ \text{cm}\times2\ \text{cm}$ on a map with scale $1:50\,000$. Find the real dimensions and perimeter of the park. How many centimetres long is a real road of $7.5$ km on this map?

**Solution.** The scale $1:50\,000$ means that $1$ cm on the map stands for $50\,000$ cm $=0.5$ km on the ground; the real shape is similar to the shape on the map with ratio $50\,000$.

The real dimensions are
$$3\cdot0.5=1.5\ \text{(km)},\qquad2\cdot0.5=1\ \text{(km)}.$$
The real perimeter is $2\cdot(1.5+1)=5$ km.

The road is $7.5$ km $=750\,000$ cm long, so on the map it is $\dfrac{750\,000}{50\,000}=15$ cm long.

So the park is $1.5\ \text{km}\times1\ \text{km}$ with perimeter $5$ km, and the road is $15$ cm long on the map.
:::

Finally, we use perspective similarity to understand the shadow of an object under a lamp, going through all four steps of solving a problem.

:::diagram The shadow of a card on a wall (schematic, not to scale)
alt: Side view: a lamp at the point O on the left, the card as a short vertical segment near the lamp, the wall as a longer vertical segment far away; two rays from O through the ends of the card reach the ends of the shadow on the wall
point O 0,0 left
point P 1,0.3 above
point Q 1,-0.3 below
point P' 5,1.5 above
point Q' 5,-1.5 below
segment P Q
segment P' Q'
segment O P'
segment O Q'
:::

:::example The shadow of a card
A small lamp at a point $O$ lights a square card of side $12$ cm placed parallel to a wall. The card is $50$ cm from the lamp and the wall is $250$ cm from the lamp. Find the side of the card's shadow on the wall.

**Solution.**

*Understand.* We know the side of the card ($12$ cm) and the two distances from the lamp ($50$ cm, $250$ cm); we need the side of the shadow. We treat the lamp as a point and the card as parallel to the wall.

*Plan.* Each point $M$ of the card matches a point $M'$ of the shadow on the ray $OM$. Because the card is parallel to the wall, $\dfrac{OM'}{OM}$ has the same value $k$ for every point. So the shadow is in perspective similarity with the card, centre $O$.

*Solve.* We have $k=\dfrac{250}{50}=5$. The side of the shadow is
$$12\cdot5=60\ \text{(cm)}.$$

So the shadow of the card is a square of side $60$ cm.

*Look back.* Is there another method? Triangles $OPQ$ and $OP'Q'$ in the figure give $\dfrac{P'Q'}{PQ}=\dfrac{OP'}{OP}$, the same result. What if the card is moved closer to the lamp, to $25$ cm? Then $k=\dfrac{250}{25}=10$ and the shadow is $120$ cm wide: the closer the card is to the lamp, the bigger the shadow. If the card touches the wall, $k=1$ and the shadow is exactly the size of the card.
:::

:::warning Common mistakes
- **Checking only the angles.** Wrong: the rectangles $3\times5$ and $6\times8$ both have four right angles, so they are similar. Why it is wrong: the sides are not proportional ($\frac63=2$ but $\frac85=1.6$). Right: check both angles and sides.
- **Checking only the sides.** Wrong: a square of side $4$ and a rhombus of side $8$ have proportional sides, so they are similar. Why it is wrong: the angles of the rhombus are not $90^\circ$. Right: similar shapes must have equal corresponding angles.
- **Using the ratio upside down.** Wrong: enlarging a $9\times12$ photo to width $21$ and working out the height as $12\cdot\dfrac{9}{21}\approx5.1$. Why it is wrong: the print is bigger than the original, so the ratio must be greater than $1$. Right: $k=\dfrac{21}{9}$ and the height is $12\cdot\dfrac{21}{9}=28$.
:::

**Connections.** This lesson pulls earlier ideas together: similar triangles, the intercept theorem and the ratio of perimeters. The property $A'B'\parallel AB$ in perspective similarity is the converse of the intercept theorem. In grade 9, the idea of "multiplying every length by the same number" returns in trigonometric ratios and in real-life geometry problems.

## Key terms

:::terms
- similar shapes | hình đồng dạng
- similarity ratio | tỉ số đồng dạng
- perspective similarity | hình đồng dạng phối cảnh
- centre of perspective similarity | tâm đồng dạng phối cảnh
- enlargement | phóng to
- reduction | thu nhỏ
- corresponding angles | góc tương ứng
- corresponding sides | cạnh tương ứng
- map scale | bản đồ tỉ lệ
- scale model | mô hình
:::

## Summary

- Two polygons are similar when corresponding angles are equal **and** corresponding sides are proportional; the ratio of corresponding sides is the similarity ratio $k$.
- Perspective similarity with centre $O$ and ratio $k$: the point $M'$ lies on the ray $OM$ with $OM'=k\cdot OM$.
- Then $A'B'\parallel AB$, $A'B'=k\cdot AB$ and corresponding angles are equal, so the shapes are similar.
- $k>1$ is an enlargement, $0<k<1$ a reduction. The ratio of the perimeters is $k$.
- A map with scale $1:n$ and a scale model are similar shapes; take care to use the ratio in the right direction (from which shape to which).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Which of these pairs of shapes are similar? If they are, state the similarity ratio.

a) Two equilateral triangles with sides $3$ and $5$.

b) A $4\times6$ rectangle and a $10\times15$ rectangle.

c) A $2\times5$ rectangle and a $6\times9$ rectangle.

d) A square and a rhombus that is not a square.

::hint
**What you need:** polygons are similar when corresponding angles are equal and corresponding sides are proportional.

**Steps:**
1. Check the angles.
2. Check the ratios of the sides, pairing long sides with long sides.

::solution
Recall: two polygons are similar when their corresponding angles are equal and their corresponding sides are proportional.

a) Each equilateral triangle has three angles of $60^\circ$ and three equal sides. So the two triangles have equal corresponding angles ($60^\circ$) and their corresponding sides have the same ratio $\dfrac53$ (from the triangle of side $3$ to the triangle of side $5$). Hence they are similar with ratio $\dfrac53$.

b) Both rectangles have all angles equal to $90^\circ$. We have $\dfrac{10}{4}=2.5$ and $\dfrac{15}{6}=2.5$, so the corresponding sides are proportional. Hence the rectangles are similar with ratio $2.5$.

c) All angles are $90^\circ$, but $\dfrac62=3$ while $\dfrac95=1.8$ and $3\neq1.8$, so the corresponding sides are not proportional. If the sides are paired the other way, $\dfrac92=4.5$ and $\dfrac65=1.2$, which are not equal either. Hence the rectangles are not similar.

d) A square has four angles of $90^\circ$. A rhombus that is not a square has angles different from $90^\circ$ (if one angle is $90^\circ$, the rhombus is a square). The corresponding angles are not equal, so the shapes are not similar.

So the pairs in a) and b) are similar (with ratios $\dfrac53$ and $2.5$); the pairs in c) and d) are not similar.

**Answer.** a) Similar, $\dfrac53$. b) Similar, $2.5$. c) No. d) No.
:::

:::exercise
The rectangle $ABCD$ with $AB=6$, $BC=4$ is similar to the rectangle $A'B'C'D'$ with $A'B'=15$. Find $B'C'$ and the perimeter of $A'B'C'D'$.

::hint
**What you need:** corresponding sides are proportional; the ratio of the perimeters equals the similarity ratio.

**Steps:**
1. Find the similarity ratio $k=\dfrac{A'B'}{AB}$.
2. Multiply $BC$ by $k$; then find the perimeter.

::solution
Since the rectangle $ABCD$ is similar to the rectangle $A'B'C'D'$, their corresponding sides are proportional. The similarity ratio is
$$k=\frac{A'B'}{AB}=\frac{15}{6}=2.5.$$

The side $B'C'$ corresponds to $BC$, so
$$B'C'=k\cdot BC=2.5\cdot4=10.$$

The perimeter of the rectangle $A'B'C'D'$ is
$$2\cdot(A'B'+B'C')=2\cdot(15+10)=50.$$

Check: the perimeter of $ABCD$ is $2\cdot(6+4)=20$ and $2.5\cdot20=50$.

So $B'C'=10$ and the perimeter of the rectangle $A'B'C'D'$ is $50$.

**Answer.** $B'C'=10$; the perimeter is $50$.
:::

:::exercise
Triangle $A'B'C'$ is in perspective similarity with triangle $ABC$, centre $O$, ratio $k=3$. Given $OA=2$ cm, $AB=3$ cm, $BC=4$ cm, $CA=5$ cm, find $OA'$, $A'B'$ and the perimeter of triangle $A'B'C'$.

::hint
**What you need:** $OA'=k\cdot OA$, $A'B'=k\cdot AB$; the ratio of the perimeters is $k$.

**Steps:**
1. Multiply each length by $3$.
2. Find the perimeter of $ABC$, then multiply by $3$.

::solution
Triangle $A'B'C'$ is in perspective similarity with triangle $ABC$, centre $O$ and ratio $k=3$, so $OA'=k\cdot OA$ and $A'B'=k\cdot AB$.

We have
$$OA'=3\cdot OA=3\cdot2=6\ \text{(cm)},\qquad A'B'=3\cdot AB=3\cdot3=9\ \text{(cm)}.$$

The perimeter of triangle $ABC$ is $AB+BC+CA=3+4+5=12$ cm. The triangles are similar with ratio $3$, so the perimeter of triangle $A'B'C'$ is $3$ times that of triangle $ABC$:
$$3\cdot12=36\ \text{(cm)}.$$

Check: $A'B'=9$, $B'C'=3\cdot4=12$, $C'A'=3\cdot5=15$ and $9+12+15=36$.

So $OA'=6$ cm, $A'B'=9$ cm and the perimeter of triangle $A'B'C'$ is $36$ cm.

**Answer.** $OA'=6$ cm; $A'B'=9$ cm; perimeter $36$ cm.
:::

:::exercise
In the coordinate plane $Oxy$, let $A(2, 1)$ and $B(4, 3)$. The points $A'$ and $B'$ lie on the rays $OA$ and $OB$ with $OA'=3\cdot OA$ and $OB'=3\cdot OB$. Find the coordinates of $A'$ and $B'$ and compare $A'B'$ with $AB$.

::hint
**What you need:** a point $M'$ on the ray $OM$ with $OM'=3\cdot OM$ has coordinates $3$ times those of $M$.

**Steps:**
1. Multiply the coordinates of $A$ and $B$ by $3$.
2. Find $AB$ and $A'B'$ with Pythagoras' theorem.

::solution
Since $A'$ lies on the ray $OA$ and $OA'=3\cdot OA$, the coordinates of $A'$ are $3$ times those of $A$; similarly for $B'$. Hence
$$A'(3\cdot2, 3\cdot1)=A'(6, 3),\qquad B'(3\cdot4, 3\cdot3)=B'(12, 9).$$

Finding $AB$. By Pythagoras' theorem (the projections onto the two axes have lengths $4-2=2$ and $3-1=2$),
$$AB=\sqrt{(4-2)^2+(3-1)^2}=\sqrt{2^2+2^2}=2\sqrt2.$$

Finding $A'B'$. Similarly (the projections have lengths $12-6=6$ and $9-3=6$),
$$A'B'=\sqrt{(12-6)^2+(9-3)^2}=\sqrt{6^2+6^2}=6\sqrt2.$$

Hence $A'B'=6\sqrt2=3\cdot2\sqrt2=3\cdot AB$.

So $A'(6, 3)$, $B'(12, 9)$ and $A'B'=3\cdot AB$.

**Answer.** $A'(6, 3)$, $B'(12, 9)$; $A'B'=3\cdot AB$.
:::

:::exercise
Remember the converse of the intercept theorem. The points $A'$, $B'$ lie on the rays $OA$, $OB$ with $OA'=k\cdot OA$ and $OB'=k\cdot OB$. Prove that $A'B'\parallel AB$.

::hint
**What you need:** if a line cuts two sides of a triangle in proportional segments, it is parallel to the third side.

**Steps:**
1. Look at triangle $OAB$ (or $OA'B'$ if $k>1$).
2. Form the ratios $\dfrac{OA'}{OA}$ and $\dfrac{OB'}{OB}$.

::solution
Assume $O$, $A$, $B$ are not collinear (so that $OAB$ is a triangle) and $k>0$, $k\neq1$ (if $k=1$ then $A'\equiv A$ and $B'\equiv B$). We have
$$\frac{OA'}{OA}=k=\frac{OB'}{OB}.$$

Case $0<k<1$. Since $A'$, $B'$ lie on the rays $OA$, $OB$ with $OA'<OA$ and $OB'<OB$, the point $A'$ lies between $O$ and $A$, and $B'$ lies between $O$ and $B$. In triangle $OAB$ we have $A'\in OA$, $B'\in OB$ and $\dfrac{OA'}{OA}=\dfrac{OB'}{OB}$. By the converse of the intercept theorem, $A'B'\parallel AB$.

Case $k>1$. Then $OA<OA'$ and $OB<OB'$, so $A$ lies between $O$ and $A'$, and $B$ lies between $O$ and $B'$. In triangle $OA'B'$ we have $A\in OA'$, $B\in OB'$ and
$$\frac{OA}{OA'}=\frac1k=\frac{OB}{OB'}.$$
By the converse of the intercept theorem, $AB\parallel A'B'$.

So in every case, $A'B'\parallel AB$.

**Answer.** $A'B'\parallel AB$.
:::

:::exercise
A club's logo of size $12\ \text{cm}\times8\ \text{cm}$ is printed on a rectangular banner, keeping its shape. The width of the logo on the banner is $1.8$ m. Find its height.

::hint
**What you need:** similar rectangles have proportional sides; use the same unit.

**Steps:**
1. Change $1.8$ m to centimetres and find $k$.
2. Multiply the height $8$ cm by $k$.

::solution
The logo is printed on the banner keeping its shape, so the rectangle on the banner is similar to the $12\ \text{cm}\times8\ \text{cm}$ rectangle (width $12$ cm, height $8$ cm). Let $k$ be the similarity ratio and $x$ cm the height of the logo on the banner.

Converting units: $1.8\ \text{m}=180$ cm. The similarity ratio is
$$k=\frac{180}{12}=15.$$

The corresponding height of the logo on the banner is
$$x=k\cdot8=15\cdot8=120\ \text{(cm)}.$$

Check: $\dfrac{120}{8}=15=k$. Converting units: $120$ cm $=1.2$ m.

So the height of the logo on the banner is $120$ cm, that is $1.2$ m.

**Answer.** $120$ cm $=1.2$ m.
:::

:::exercise
On a map with scale $1:200\,000$, two towns are $6.5$ cm apart. What is the real distance between the towns in kilometres? How many centimetres long is a real route of $52$ km on the map?

::hint
**What you need:** the scale $1:200\,000$ means $1$ cm on the map stands for $200\,000$ cm on the ground; $100\,000$ cm $=1$ km.

**Steps:**
1. Multiply $6.5$ by $200\,000$ and change to kilometres.
2. Change $52$ km to centimetres and divide by $200\,000$.

::solution
A map scale of $1:200\,000$ means that $1$ cm on the map represents $200\,000$ cm in reality.

Real distance. The towns are $6.5$ cm apart on the map, so the real distance is
$$6.5\cdot200\,000=1\,300\,000\ \text{(cm)}.$$
Since $1$ km $=100\,000$ cm, we have $1\,300\,000$ cm $=1\,300\,000\div100\,000=13$ km.

Length on the map. The real route $52$ km $=52\cdot100\,000=5\,200\,000$ cm. Its length on the map is
$$\frac{5\,200\,000}{200\,000}=26\ \text{(cm)}.$$

So the real distance between the towns is $13$ km and a route of $52$ km is $26$ cm long on the map.

**Answer.** $13$ km; $26$ cm.
:::

:::exercise
A model of a house is built to the scale $1:20$. The front door of the model is $10$ cm high. How many metres high is the real door? If the real house is $8$ m wide, how many centimetres wide is the model?

::hint
**What you need:** the model and the real house are similar with ratio $20$ (from model to real).

**Steps:**
1. Multiply the height of the model by $20$.
2. Divide the real width by $20$.

::solution
A model built to the scale $1:20$ means that every real dimension is $20$ times the corresponding dimension of the model.

Height of the real door. The door of the model is $10$ cm high, so the real door is
$$10\cdot20=200\ \text{(cm)}=2\ \text{(m)}$$
high.

Width of the model. The real house is $8$ m wide, so the model is
$$\frac{8}{20}=0.4\ \text{(m)}=40\ \text{(cm)}$$
wide.

Check: $40\cdot20=800$ cm $=8$ m.

So the real door is $2$ m high and the model is $40$ cm wide.

**Answer.** $2$ m; $40$ cm.
:::

:::exercise Challenge
A small lamp at a point $O$ lights a square card of side $15$ cm placed parallel to a wall that is $3$ m from the lamp. For the shadow of the card on the wall to be a square of side $90$ cm, how many centimetres from the lamp must the card be placed?

::hint
**What you need:** the shadow is in perspective similarity with the card, centre $O$, with ratio $k=\dfrac{\text{side of shadow}}{\text{side of card}}=\dfrac{OM'}{OM}$.

**Steps:**
1. Find $k$.
2. Use $OM'=300$ cm to find $OM$.

::solution
The shadow of the card on the wall is in perspective similarity with the card, with centre $O$ at the lamp (because the card is parallel to the wall). The similarity ratio equals the ratio of the side of the shadow to the side of the card:
$$k=\frac{90}{15}=6.$$

This ratio also equals the ratio of the distance from the lamp to the wall to the distance from the lamp to the card. Let $d$ cm be the distance from the lamp to the card, $d>0$. The wall is $3$ m $=300$ cm from the lamp, so
$$\frac{300}{d}=6.$$

Hence
$$d=\frac{300}{6}=50.$$

The value $d=50>0$ and $50<300$ (the card lies between the lamp and the wall), so it satisfies the conditions. Check: $\dfrac{300}{50}=6$.

So the card must be placed $50$ cm from the lamp.

**Answer.** $50$ cm.
:::

## Mini test

:::quiz
::mc TH
Which of these pairs of rectangles are similar?
A. $4\times6$ and $10\times15$.
B. $2\times5$ and $6\times10$.
C. $3\times5$ and $6\times8$.
D. $5\times5$ and $5\times7$.
::key A
$\dfrac{10}4=\dfrac{15}6=2.5$. In A the ratios $2$ and $1.6$ differ; in B the ratios $3$ and $2$ differ; in D a square and a non-square rectangle have sides that are not proportional ($1$ and $\frac75$).

::mc NB
A shape $\mathcal{H}'$ is in perspective similarity with a shape $\mathcal{H}$, centre $O$, ratio $k=2$. A point $A$ of $\mathcal{H}$ has $OA=3$ cm. The length $OA'$ is
A. $1.5$ cm.
B. $6$ cm.
C. $5$ cm.
D. $9$ cm.
::key B
$OA'=k\cdot OA=2\cdot3=6$ cm. Option A divides instead of multiplying, C adds $2$, and D multiplies by $3$ twice.

::mc TH
On a map with scale $1:50\,000$, a road is $4$ cm long. The real length of the road is
A. $0.2$ km.
B. $20$ km.
C. $2$ km.
D. $200$ km.
::key C
$4\cdot50\,000=200\,000$ cm $=2$ km. The other options come from slips in changing units.

::mc TH
Triangle $A'B'C'$ is in perspective similarity with triangle $ABC$ with ratio $\dfrac32$, and the perimeter of triangle $ABC$ is $20$ cm. The perimeter of triangle $A'B'C'$ is
A. $\dfrac{40}3$ cm.
B. $23$ cm.
C. $60$ cm.
D. $30$ cm.
::key D
The ratio of the perimeters equals the similarity ratio, so the perimeter is $\dfrac32\cdot20=30$. Option A uses the ratio upside down, B adds $3$, and C multiplies by $3$.

::tf VD TH VD VD
A rectangular photo $12\ \text{cm}\times18\ \text{cm}$ is enlarged to a new rectangular photo of width $30$ cm, keeping its shape. Decide whether each statement is true or false.
a) The new length is $36$ cm.
b) The similarity ratio is $\dfrac52$.
c) The perimeter of the new photo is $150$ cm.
d) The new length is $45$ cm.
::key F T T T
a) False: $36$ comes from adding $18$ cm to the length as the width grew by $18$ cm; we must multiply by the ratio. b) True: $\dfrac{30}{12}=\dfrac52$. c) True: the old perimeter is $60$ cm and $60\cdot\dfrac52=150$. d) True: $18\cdot\dfrac52=45$.

::sa TH
On a map with scale $1:20\,000$, a road is $6.5$ cm long. Find the real length of the road (in kilometres).
::key 1.3
$6.5\cdot20\,000=130\,000$ cm $=1.3$ km.

::sa VD
A small lamp lights a square card of side $10$ cm placed parallel to a wall. The card is $40$ cm from the lamp and the wall is $160$ cm from the lamp. Find the side of the card's shadow on the wall (in centimetres).
::key 40
The ratio of the perspective similarity is $k=\dfrac{160}{40}=4$, so the side of the shadow is $10\cdot4=40$.
:::
