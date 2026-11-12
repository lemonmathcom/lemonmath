---
title: "Topic: right-angled triangle trigonometry and real-life geometry"
description: Revise relations and trigonometric ratios in right-angled triangles, solve them, and measure heights and distances with angles of elevation and depression.
minutes: 25
---

:::goals
- Revise the relations between the sides and the altitude in a right-angled triangle and the trigonometric ratios $\sin$, $\cos$, $\tan$, $\cot$ of an acute angle.
- Find sides and angles of a right-angled triangle (solve the triangle) using the relations between sides and angles.
- Apply these to problems that measure heights and distances with angles of elevation and depression.
- Present a geometry question that uses these relations and ratios as in the grade 10 entrance paper.
:::

Suppose you stand $12$ m from the foot of a tree and see the top of the tree at an angle of elevation of $35^\circ$ above the horizontal, with your eyes $1.6$ m above the ground. How tall is the tree? We cannot climb up to measure it, but a right-angled triangle hidden in this situation means a tape measure and an instrument for measuring angles are enough.

This is how people measure the heights of buildings and mountains, or the width of a river, without going there. In the grade 10 entrance paper, such problems usually appear in the geometry question, and every tool is a relation or a trigonometric ratio in a right-angled triangle.

## Relations between the sides and the altitude

### Explore: a $6-8-10$ triangle

Triangle $ABC$ is right-angled at $A$ with $AB=6$ and $AC=8$. By Pythagoras' theorem, $BC=\sqrt{36+64}=10$. The area of the triangle is $\dfrac12\cdot6\cdot8=24$. On the other hand, if $AH$ is the altitude to $BC$, the area is also $\dfrac12\cdot BC\cdot AH=5\cdot AH$. From $5\cdot AH=24$ we get $AH=4.8$. This way of calculating leads to the following relations.

:::theorem Relations in a right-angled triangle
Let $ABC$ be a triangle right-angled at $A$ with altitude $AH$. Then
- $AB^2=BH\cdot BC$ and $AC^2=CH\cdot BC$;
- $AH^2=BH\cdot CH$;
- $AH\cdot BC=AB\cdot AC$;
- $\dfrac1{AH^2}=\dfrac1{AB^2}+\dfrac1{AC^2}$.
:::

**Why are they true?** The right-angled triangles $HBA$ and $ABC$ share the angle $B$, so they are similar, which gives $\dfrac{BA}{BC}=\dfrac{BH}{BA}$, that is $AB^2=BH\cdot BC$. The same works for $AC^2=CH\cdot BC$. The similar triangles $HBA$ and $HAC$ give $AH^2=BH\cdot CH$. Finally, calculating the area of triangle $ABC$ in two ways gives $AH\cdot BC=AB\cdot AC$.

:::diagram Triangle $ABC$ right-angled at $A$ with altitude $AH$
alt: Triangle ABC right-angled at A with AB equal to 6 and AC equal to 8; the altitude AH is drawn from A to the hypotenuse BC and meets it at H
point A 0,0 below-left
point B 6,0 below-right
point C 0,8 above
point H 3.84,2.88 right
polygon A B C
segment A H
right B A C
right A H B
:::

## Trigonometric ratios of an acute angle

:::definition Trigonometric ratios
In triangle $ABC$ right-angled at $A$, with the acute angle $\alpha=\angle B$:
$$\sin\alpha=\frac{\text{opposite}}{\text{hypotenuse}}=\frac{AC}{BC},\qquad\cos\alpha=\frac{\text{adjacent}}{\text{hypotenuse}}=\frac{AB}{BC},$$
$$\tan\alpha=\frac{\text{opposite}}{\text{adjacent}}=\frac{AC}{AB},\qquad\cot\alpha=\frac{\text{adjacent}}{\text{opposite}}=\frac{AB}{AC}.$$
:::

Basic relations: $\sin^2\alpha+\cos^2\alpha=1$, $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$, $\tan\alpha\cdot\cot\alpha=1$. For complementary angles ($\alpha+\beta=90^\circ$) we have $\sin\alpha=\cos\beta$ and $\tan\alpha=\cot\beta$. We also remember the values $\sin30^\circ=\cos60^\circ=\dfrac12$, $\sin60^\circ=\cos30^\circ=\dfrac{\sqrt3}2$, $\tan45^\circ=1$.

:::theorem Relations between sides and angles in a right-angled triangle
In triangle $ABC$ right-angled at $A$:
- a leg equals the hypotenuse times the $\sin$ of the opposite angle or times the $\cos$ of the adjacent angle: $AC=BC\sin B=BC\cos C$;
- a leg equals the other leg times the $\tan$ of the opposite angle or times the $\cot$ of the adjacent angle: $AC=AB\tan B=AB\cot C$.
:::

**Why are they true?** These relations are the definitions of the trigonometric ratios rewritten for the side we want. For example, from $\sin B=\dfrac{AC}{BC}$ we get $AC=BC\sin B$.

:::example Finding trigonometric ratios
Triangle $ABC$ is right-angled at $A$ with $AB=6$ and $AC=8$. Find $\sin B$, $\cos B$, $\tan B$, $\cot B$.

**Solution.** By Pythagoras' theorem, $BC=\sqrt{6^2+8^2}=10$. For the angle $B$: the opposite side is $AC=8$, the adjacent side is $AB=6$ and the hypotenuse is $BC=10$. So
$$\sin B=\frac8{10}=0.8,\quad\cos B=\frac6{10}=0.6,\quad\tan B=\frac86=\frac43,\quad\cot B=\frac68=\frac34.$$

**Check.** $\sin^2B+\cos^2B=0.64+0.36=1$.
:::

:::example An exam-style geometry question
**Question 4.** ($2.5$ marks) Given a triangle $ABC$ right-angled at $A$ with altitude $AH$, $AB=6$ cm and $AC=8$ cm. a) Find $BC$ and $AH$. b) Find $BH$ and $CH$. c) Find $\sin B$ and the measure of the angle $B$ (round to the nearest degree).

**Solution.**

*Understand.* We have a right-angled triangle with legs $6$ and $8$ and the altitude $AH$. We must find some lengths and one angle.

*Plan.* Use Pythagoras' theorem for $BC$; use $AH\cdot BC=AB\cdot AC$ for $AH$; use $AB^2=BH\cdot BC$ for $BH$; use $\sin B$ to find the angle.

*Solve.*

a) ($1.0$ mark) $BC=\sqrt{AB^2+AC^2}=\sqrt{36+64}=10$ (cm). From $AH\cdot BC=AB\cdot AC$ we get $AH=\dfrac{6\cdot8}{10}=4.8$ (cm).

b) ($0.75$ marks) From $AB^2=BH\cdot BC$ we get $BH=\dfrac{36}{10}=3.6$ (cm). So $CH=BC-BH=10-3.6=6.4$ (cm).

c) ($0.75$ marks) $\sin B=\dfrac{AC}{BC}=\dfrac8{10}=0.8$. Using a calculator, $\angle B\approx53^\circ$.

So $BC=10$ cm, $AH=4.8$ cm, $BH=3.6$ cm, $CH=6.4$ cm, $\sin B=0.8$ and $\angle B\approx53^\circ$.

*Look back.* Check with another relation: $AH^2=BH\cdot CH=3.6\cdot6.4=23.04=4.8^2$, which is correct. Also $\angle C\approx37^\circ$, and $53^\circ+37^\circ=90^\circ$.
:::

## Solving right-angled triangles

*Solving a right-angled triangle* means finding the unknown sides and angles when two quantities are known (at least one of them a side). We use Pythagoras' theorem, the relations between sides and angles, and the fact that the two acute angles add up to $90^\circ$.

:::example Given the hypotenuse and an angle
Triangle $ABC$ is right-angled at $A$ with $BC=12$ cm and $\angle B=30^\circ$. Find $AC$, $AB$ and $\angle C$ (round $AB$ to 2 decimal places).

**Solution.** We have $\angle C=90^\circ-30^\circ=60^\circ$. By the relations between sides and angles, $AC=BC\sin B=12\sin30^\circ=12\cdot\dfrac12=6$ (cm) and $AB=BC\cos B=12\cos30^\circ=12\cdot\dfrac{\sqrt3}2=6\sqrt3\approx10.39$ (cm).

**Answer.** $\angle C=60^\circ$; $AC=6$ cm; $AB=6\sqrt3\approx10.39$ cm.
:::

:::example Given the two legs
Triangle $ABC$ is right-angled at $A$ with $AB=5$ cm and $AC=12$ cm. Solve this right-angled triangle (round the angles to 2 decimal places).

**Solution.** $BC=\sqrt{25+144}=13$ (cm). We have $\tan B=\dfrac{AC}{AB}=\dfrac{12}5=2.4$, and a calculator gives $\angle B\approx67.38^\circ$. So $\angle C=90^\circ-67.38^\circ=22.62^\circ$.

**Answer.** $BC=13$ cm; $\angle B\approx67.38^\circ$; $\angle C\approx22.62^\circ$.
:::

## Angles of elevation and depression, and real-life problems

When we look at an object higher than our eyes, the angle between the line of sight and the horizontal is the **angle of elevation**. When we look at an object lower than our eyes, the angle between the line of sight and the horizontal is the **angle of depression**. The horizontal and the vertical are perpendicular, so we get a right-angled triangle.

:::diagram Measuring the height of a tree with an angle of elevation
alt: An observer whose eyes are at point E, 1.6 m above the ground, looks at the top T of a tree at an angle of elevation of 35 degrees above the horizontal EF; the foot of the tree is at G, 12 m from the observer
point O 0,0 below
point E 0,1.6 left
point G 12,0 below
point F 12,1.6 right
point T 12,10 above
segment O G
segment O E
segment E F dashed
segment E T
segment G T
angle F E T "35°"
:::

:::example Measuring the height of a tree
Suppose you stand $12$ m from the foot of a tree and see the top of the tree at an angle of elevation of $35^\circ$, and your eyes are $1.6$ m above the ground. Find the height of the tree (round to 1 decimal place).

**Solution.**

*Understand.* The eyes are at height $1.6$ m, $12$ m from the tree horizontally, and the angle of elevation to the top is $35^\circ$. We need the height from the ground to the top of the tree.

*Plan.* The horizontal line from the eyes meets the tree at $F$. Triangle $EFT$ is right-angled at $F$ with $EF=12$ m and $\angle FET=35^\circ$, so $FT=EF\tan35^\circ$. The height of the tree is $FT$ plus $1.6$ m.

*Solve.* We have $FT=12\tan35^\circ\approx12\cdot0.7002\approx8.4$ (m). The height of the tree is $GT=FT+GF=8.4+1.6=10.0$ (m).

So the tree is about $10.0$ m tall.

*Look back.* If we forget to add the height of the eyes we get only $8.4$ m, which is lower than the real height. A result of $10$ m is reasonable for a fairly tall tree next to a person.
:::

:::example Looking down from a building
Suppose that from the top of a building $40$ m tall, a person sees a car on the ground at an angle of depression of $25^\circ$. How many metres is the car from the foot of the building (round to 1 decimal place)?

**Solution.** Let $A$ be the top of the building, $B$ its foot and $C$ the position of the car. Triangle $ABC$ is right-angled at $B$ with $AB=40$ m. Since the line of sight $AC$ and the horizontal make an angle of depression of $25^\circ$, we have (alternate angles) $\angle ACB=25^\circ$. So $BC=\dfrac{AB}{\tan25^\circ}=\dfrac{40}{0.4663}\approx85.8$ (m).

So the car is about $85.8$ m from the foot of the building.
:::

:::warning Common mistakes
- **Confusing the opposite and the adjacent side.** Wrong: writing $\sin B=\dfrac{AB}{BC}$ in a triangle right-angled at $A$. Why it is wrong: the side opposite the angle $B$ is $AC$, not $AB$. Right: $\sin B=\dfrac{AC}{BC}$ and $\cos B=\dfrac{AB}{BC}$.
- **Leaving the calculator in the wrong mode.** Wrong: finding $\tan35^\circ$ while the calculator is in radian mode. Why it is wrong: the result is then completely wrong. Right: check that the calculator is in degree mode (DEG); test that $\tan45^\circ=1$.
- **Forgetting the height of the eyes or of the instrument.** Wrong: finding only $12\tan35^\circ\approx8.4$ m and concluding that the tree is $8.4$ m tall. Why it is wrong: the angle of elevation is measured from the eyes, not from the ground. Right: add $1.6$ m to get $10.0$ m.
- **Using the wrong relation.** Wrong: $AH^2=BH\cdot BC$. Why it is wrong: $BH\cdot BC$ equals $AB^2$. Right: $AH^2=BH\cdot CH$ and $AB^2=BH\cdot BC$.
- **Rounding too early.** Wrong: rounding $\tan35^\circ$ to $0.7$ before multiplying. Why it is wrong: the error grows when multiplied by large numbers. Right: keep many digits and round only the final result.
:::

**Connections.** This lesson uses Pythagoras' theorem, similar triangles, the area of a triangle and trigonometric ratios. These relations are also tools for the circle geometry in the previous topic, and trigonometric ratios will be extended to any angle in grades 10 and 11.

## Key terms

:::terms
- relations in a right-angled triangle | hệ thức lượng
- right-angled triangle | tam giác vuông
- hypotenuse | cạnh huyền
- opposite side, adjacent side | cạnh đối, cạnh kề
- trigonometric ratio | tỉ số lượng giác
- solving a right-angled triangle | giải tam giác vuông
- angle of elevation | góc nâng
- angle of depression | góc hạ
- altitude | đường cao
- complementary angles | hai góc phụ nhau
:::

## Summary

- A right-angled triangle $ABC$ ($\angle A=90^\circ$) with altitude $AH$: $AB^2=BH\cdot BC$, $AC^2=CH\cdot BC$, $AH^2=BH\cdot CH$, $AH\cdot BC=AB\cdot AC$, $\dfrac1{AH^2}=\dfrac1{AB^2}+\dfrac1{AC^2}$.
- $\sin=\dfrac{\text{opposite}}{\text{hypotenuse}}$, $\cos=\dfrac{\text{adjacent}}{\text{hypotenuse}}$, $\tan=\dfrac{\text{opposite}}{\text{adjacent}}$, $\cot=\dfrac{\text{adjacent}}{\text{opposite}}$; $\sin^2\alpha+\cos^2\alpha=1$; for complementary angles $\sin\alpha=\cos\beta$.
- Solve a right-angled triangle with Pythagoras' theorem, the relations between sides and angles, and the fact that the two acute angles add up to $90^\circ$.
- Angles of elevation and depression are measured from the horizontal; remember to add the height of the eyes when measuring the height of an object.
- Keep many digits during the calculation and round only the final result.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ is right-angled at $A$ with $AB=5$ and $AC=12$. Find $\sin B$, $\cos B$, $\tan B$, $\cot B$.

::hint
**What you need:** the definitions of the trigonometric ratios; Pythagoras' theorem.

**Steps:**
1. Find $BC$.
2. Identify the opposite and adjacent sides of the angle $B$.

::solution
$BC=\sqrt{25+144}=13$. For the angle $B$: the opposite side is $AC=12$ and the adjacent side is $AB=5$. So $\sin B=\dfrac{12}{13}$, $\cos B=\dfrac5{13}$, $\tan B=\dfrac{12}5$, $\cot B=\dfrac5{12}$.

**Answer.** $\dfrac{12}{13}$; $\dfrac5{13}$; $\dfrac{12}5$; $\dfrac5{12}$.
:::

:::exercise
a) Find $A=\sin^235^\circ+\cos^235^\circ$.

b) Compare $\sin40^\circ$ and $\cos50^\circ$.

c) Find $B=\tan20^\circ\cdot\cot20^\circ$.

::hint
**What you need:** $\sin^2\alpha+\cos^2\alpha=1$; complementary angles; $\tan\alpha\cdot\cot\alpha=1$.

**Steps:**
1. Recognise the basic relations.
2. In part b), check $40^\circ+50^\circ$.

::solution
a) $A=1$.

b) Since $40^\circ+50^\circ=90^\circ$, we have $\sin40^\circ=\cos50^\circ$.

c) $B=1$.

**Answer.** a) $1$; b) $\sin40^\circ=\cos50^\circ$; c) $1$.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $BC=20$ cm and $\angle C=40^\circ$. Find $AB$ and $AC$ (round to 2 decimal places).

::hint
**What you need:** $AB=BC\sin C$ and $AC=BC\cos C$.

**Steps:**
1. Identify the opposite and adjacent sides of the angle $C$.
2. Use a calculator in degree mode.

::solution
$AB=20\sin40^\circ\approx12.86$ (cm) and $AC=20\cos40^\circ\approx15.32$ (cm).

**Answer.** $AB\approx12.86$ cm; $AC\approx15.32$ cm.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $AB=8$ cm and $\angle B=50^\circ$. Find $AC$ and $BC$ (round to 2 decimal places).

::hint
**What you need:** $AC=AB\tan B$ and $BC=\dfrac{AB}{\cos B}$.

**Steps:**
1. Find $AC$ with $\tan B$.
2. Find $BC$ with $\cos B$.

::solution
$AC=8\tan50^\circ\approx9.53$ (cm) and $BC=\dfrac8{\cos50^\circ}\approx12.45$ (cm).

**Answer.** $AC\approx9.53$ cm; $BC\approx12.45$ cm.
:::

:::exercise
**Question 4.** ($2.0$ marks) Given a triangle $ABC$ right-angled at $A$ with altitude $AH$, $AB=9$ cm and $AC=12$ cm. a) Find $BC$ and $AH$. b) Find $BH$ and $CH$. c) Find the area of triangle $ABC$ and the area of triangle $ABH$.

::hint
**What you need:** the relations in a right-angled triangle.

**Steps:**
1. Use Pythagoras' theorem and $AH\cdot BC=AB\cdot AC$.
2. Use $AB^2=BH\cdot BC$; the area of triangle $ABH$ is $\dfrac12BH\cdot AH$.

::solution
a) ($0.75$ marks) $BC=\sqrt{81+144}=15$ (cm) and $AH=\dfrac{9\cdot12}{15}=7.2$ (cm).

b) ($0.75$ marks) $BH=\dfrac{AB^2}{BC}=\dfrac{81}{15}=5.4$ (cm) and $CH=15-5.4=9.6$ (cm).

c) ($0.5$ marks) $S_{ABC}=\dfrac12\cdot9\cdot12=54$ (cm²) and $S_{ABH}=\dfrac12\cdot5.4\cdot7.2=19.44$ (cm²).

**Answer.** a) $BC=15$ cm, $AH=7.2$ cm; b) $BH=5.4$ cm, $CH=9.6$ cm; c) $54$ cm² and $19.44$ cm².
:::

:::exercise
Suppose a ladder $6$ m long leans against a wall, with its foot $2$ m from the wall. Find the angle between the ladder and the ground (round to 1 decimal place of a degree) and the height of the top of the ladder above the ground (round to 2 decimal places).

::hint
**What you need:** $\cos\alpha=\dfrac{\text{adjacent}}{\text{hypotenuse}}$; Pythagoras' theorem.

**Steps:**
1. Find $\cos\alpha$ from the foot distance and the length of the ladder.
2. Use Pythagoras' theorem to find the height.

::solution
Let $\alpha$ be the angle between the ladder and the ground. We have $\cos\alpha=\dfrac26=\dfrac13$, so $\alpha\approx70.5^\circ$. The height of the top of the ladder is $\sqrt{6^2-2^2}=\sqrt{32}=4\sqrt2\approx5.66$ (m).

**Answer.** $\alpha\approx70.5^\circ$; height $\approx5.66$ m.
:::

:::exercise
Suppose a slope is $200$ m long and is inclined at $5^\circ$ to the horizontal. How many metres higher is a person at the top of the slope (round to 2 decimal places)?

::hint
**What you need:** the opposite side equals the hypotenuse times $\sin$.

**Steps:**
1. Draw a right-angled triangle whose hypotenuse is the slope.
2. The height is the side opposite the angle of $5^\circ$.

::solution
The height is $200\sin5^\circ\approx17.43$ (m).

**Answer.** About $17.43$ m.
:::

:::exercise
Suppose a pole $5$ m tall casts a shadow $8$ m long on the ground. Find the angle of elevation of the Sun above the ground (round to the nearest degree).

::hint
**What you need:** $\tan\alpha=\dfrac{\text{opposite}}{\text{adjacent}}$.

**Steps:**
1. The pole and the shadow are the two legs.
2. Find $\tan\alpha$, then $\alpha$.

::solution
Let $\alpha$ be the angle of elevation of the Sun. We have $\tan\alpha=\dfrac58=0.625$, so $\alpha\approx32^\circ$.

**Answer.** About $32^\circ$.
:::

:::exercise Challenge
Suppose that from two points $A$ and $B$ in line with the foot $H$ of a tower, the top of the tower is seen at angles of elevation of $30^\circ$ and $45^\circ$ respectively. Given $AB=30$ m ($B$ lies between $A$ and $H$), find the height of the tower (round to 1 decimal place, ignoring the height of the eyes).

::hint
**What you need:** if $h$ is the height of the tower then $AH=\dfrac h{\tan30^\circ}$ and $BH=\dfrac h{\tan45^\circ}$.

**Steps:**
1. Express $AH$ and $BH$ in terms of $h$.
2. Form the equation $AH-BH=30$.

::solution
Let $h$ (m) be the height of the tower. We have $AH=h\sqrt3$ and $BH=h$. Since $AH-BH=AB=30$, we get $h(\sqrt3-1)=30$, so $h=\dfrac{30}{\sqrt3-1}=15(\sqrt3+1)\approx41.0$ (m).

**Answer.** About $41.0$ m.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ is right-angled at $A$ with $AB=3$ and $AC=4$. The value of $\sin C$ is
A. $\dfrac45$.
B. $\dfrac53$.
C. $\dfrac34$.
D. $\dfrac35$.
::key D
$BC=5$ and the side opposite the angle $C$ is $AB=3$, so $\sin C=\dfrac35$. Option A is $\cos C$, C is $\tan C$, and B is $\dfrac{BC}{AB}$.

::mc
Triangle $ABC$ is right-angled at $A$ with $BC=10$ cm and $\angle B=30^\circ$. The length of $AC$ is
A. $5$ cm.
B. $5\sqrt3$ cm.
C. $\dfrac{10\sqrt3}3$ cm.
D. $20$ cm.
::key A
$AC=BC\sin30^\circ=10\cdot\dfrac12=5$. Option B uses $\cos30^\circ$ instead of $\sin30^\circ$, C is $\dfrac{BC}{\sqrt3}$, and D is $2BC$.

::mc
An acute angle $\alpha$ has $\tan\alpha=1.5$. The measure of $\alpha$ (rounded to 1 decimal place) is
A. $33.7^\circ$.
B. $56.3^\circ$.
C. $48.2^\circ$.
D. $1.5^\circ$.
::key B
$\alpha=\arctan1.5\approx56.3^\circ$. Option A is the complementary angle $90^\circ-56.3^\circ$ (which corresponds to $\tan\alpha=\dfrac23$), C is $\arccos\dfrac23$, and D takes the value of $\tan\alpha$ as the measure of the angle.

::mc
A person stands $20$ m from the foot of a tower and sees the top at an angle of elevation of $40^\circ$ (ignore the height of the eyes). The height of the tower (rounded to 1 decimal place) is
A. $15.3$ m.
B. $12.9$ m.
C. $16.8$ m.
D. $23.8$ m.
::key C
$h=20\tan40^\circ\approx16.8$. Option A is $20\cos40^\circ$, B is $20\sin40^\circ$, and D is $\dfrac{20}{\tan40^\circ}$.

::tf
Triangle $ABC$ is right-angled at $A$ with altitude $AH$, $AB=6$ cm and $AC=8$ cm. Decide whether each statement is true or false.
a) $BC=10$ cm.
b) $AH=5$ cm.
c) $BH=6.4$ cm.
d) $\tan B=\dfrac34$.
::key T F F F
a) True: $\sqrt{36+64}=10$. b) False: $AH=\dfrac{6\cdot8}{10}=4.8$ cm. c) False: $BH=\dfrac{36}{10}=3.6$ cm ($6.4$ is $CH$). d) False: $\tan B=\dfrac{AC}{AB}=\dfrac43$.

::sa
A ladder $4$ m long leans against a wall and makes an angle of $60^\circ$ with the ground. How many metres above the ground is the top of the ladder (round to 1 decimal place)?
::key 3.5
$4\sin60^\circ=2\sqrt3\approx3.5$.

::sa
A person whose eyes are $1.6$ m above the ground stands $12$ m from the foot of a pole and sees the top of the pole at an angle of elevation of $45^\circ$. How many metres tall is the pole?
::key 13.6
$12\tan45^\circ=12$, and adding the height of the eyes $1.6$ gives $13.6$ m.
:::
