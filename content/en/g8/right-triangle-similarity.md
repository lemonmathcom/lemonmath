---
title: Similarity conditions for right-angled triangles
description: Recognise similar right-angled triangles from an acute angle, the two legs, or the hypotenuse and a leg, and use them to find lengths and heights.
minutes: 20
---

:::goals
- State and use the three similarity conditions for right-angled triangles.
- Prove that two right-angled triangles are similar and write the corresponding vertices correctly.
- Use similar right-angled triangles to find lengths, heights and distances in real life.
- Recognise the similar right-angled triangles formed when we draw the altitude to the hypotenuse.
:::

Suppose Nam is $1.6$ m tall and stands next to a tree in the school yard. At the same moment, Nam's shadow on the ground is $2$ m long and the tree's shadow is $7.5$ m long.

Can you find the height of the tree without climbing it? Each person and each tree, together with its shadow, forms a right-angled triangle, and these two triangles have "the same shape". To use that, we need a quick way to recognise similar right-angled triangles.

A general triangle needs at least two equal angles or three proportional sides before we can call it similar. A right-angled triangle already has a right angle, so there is much less to check.

## Explore: right-angled triangles need fewer conditions

Take the triangle $ABC$ with a right angle at $A$ and $AB=3$, $AC=4$, $BC=5$, and the triangle $DEF$ with a right angle at $D$ and $DE=6$, $DF=8$, $EF=10$.

:::diagram Two right-angled triangles $ABC$ and $DEF$
alt: Two right-angled triangles: triangle ABC with legs 3 and 4 and hypotenuse 5, and a triangle DEF twice as large with legs 6 and 8 and hypotenuse 10
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 5,0 below-left
point E 11,0 below-right
point F 5,8 above
polygon A B C
polygon D E F
right B A C
right E D F
label 1.5,-0.5 "3"
label -0.5,2 "4"
label 2,2.3 "5"
label 8,-0.5 "6"
label 4.5,4 "8"
label 8.7,4.3 "10"
:::

We have $\dfrac{DE}{AB}=\dfrac{6}{3}=2$, $\dfrac{DF}{AC}=\dfrac{8}{4}=2$ and $\dfrac{EF}{BC}=\dfrac{10}{5}=2$, so $\triangle ABC\backsim\triangle DEF$ (SSS).

But we do not need all three ratios. Two proportional legs ($\frac{6}{3}=\frac{8}{4}$) and the two equal right angles are enough (SAS). Better still, if we only know $DE=6$ and $EF=10$ with $\frac{10}{5}=\frac{6}{3}$, the remaining side follows by itself: $DF=\sqrt{10^2-6^2}=8$. Finally, if two right-angled triangles have an equal acute angle, the other acute angles are equal too, because each pair adds up to $90^\circ$.

:::theorem Similarity conditions for right-angled triangles
Let $ABC$ (right-angled at $A$) and $A'B'C'$ (right-angled at $A'$) be two right-angled triangles. They are similar if one of the following holds:
1. An acute angle of one triangle equals an acute angle of the other, for example $\angle B=\angle B'$.
2. The two legs (the sides next to the right angle) of one triangle are proportional to the two legs of the other: $\dfrac{A'B'}{AB}=\dfrac{A'C'}{AC}$.
3. The hypotenuse and one leg of one triangle are proportional to the hypotenuse and one leg of the other: $\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$.
:::

**Why?** In condition 1, the triangles have $\angle A=\angle A'=90^\circ$ and $\angle B=\angle B'$, so they are similar by the AA condition. In condition 2, two pairs of sides are proportional and the angles between them are equal ($90^\circ$), so they are similar by the SAS condition.

In condition 3, let $k=\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$. By Pythagoras' theorem, we have
$$A'C'^2=B'C'^2-A'B'^2=k^2BC^2-k^2AB^2=k^2(BC^2-AB^2)=k^2AC^2.$$
Hence $A'C'=k\cdot AC$, so all three sides are proportional. So condition 3 is really the SSS condition, but we only need two pairs of sides because Pythagoras' theorem supplies the third pair for free.

Notice that one pair of proportional sides is not enough: two right-angled triangles with one leg twice as long as the other can still have very different shapes.

## Examples

We start by recognising similar right-angled triangles.

:::example Recognising similar right-angled triangles
Which of the following pairs of right-angled triangles are similar? Explain.

a) $\triangle ABC$ is right-angled at $A$ with $\angle B=35^\circ$, and $\triangle DEF$ is right-angled at $D$ with $\angle F=55^\circ$.

b) $\triangle MNP$ is right-angled at $M$ with $MN=3$, $MP=4$, and $\triangle M'N'P'$ is right-angled at $M'$ with $M'N'=9$, $M'P'=12$.

c) $\triangle ABC$ is right-angled at $A$ with $BC=10$, $AB=6$, and $\triangle DEF$ is right-angled at $D$ with $EF=15$, $DE=9$.

d) $\triangle ABC$ is right-angled at $A$ with $AB=2$, $AC=3$, and $\triangle DEF$ is right-angled at $D$ with $DE=4$, $DF=7$.

**Solution.** a) Since triangle $ABC$ is right-angled at $A$, we have $\angle C=90^\circ-35^\circ=55^\circ$. So $\angle C=\angle F=55^\circ$ and $\triangle ABC\backsim\triangle DEF$ (two right-angled triangles with an equal acute angle).

b) We have $\dfrac{M'N'}{MN}=\dfrac{9}{3}=3$ and $\dfrac{M'P'}{MP}=\dfrac{12}{4}=3$, so $\triangle MNP\backsim\triangle M'N'P'$ (the two legs are proportional).

c) We have $\dfrac{EF}{BC}=\dfrac{15}{10}=\dfrac32$ and $\dfrac{DE}{AB}=\dfrac{9}{6}=\dfrac32$, so $\triangle ABC\backsim\triangle DEF$ (the hypotenuse and a leg are proportional).

d) We have $\dfrac{DE}{AB}=\dfrac42=2$ but $\dfrac{DF}{AC}=\dfrac73\neq2$. Try the other pairing: $\dfrac{DE}{AC}=\dfrac43$ and $\dfrac{DF}{AB}=\dfrac72$, which are also different. So the triangles are not similar.

So the pairs a), b), c) are similar and the pair d) is not.
:::

Once triangles are similar, every ratio is known, including the ratio of perimeters.

:::example The similarity ratio and the perimeter
Triangle $ABC$ is right-angled at $A$ with $AB=9$, $AC=12$, and triangle $A'B'C'$ is right-angled at $A'$ with $A'B'=3$, $A'C'=4$. Prove that $\triangle A'B'C'\backsim\triangle ABC$, then compare the similarity ratio with the ratio of the perimeters.

**Solution.** We have $\dfrac{A'B'}{AB}=\dfrac39=\dfrac13$ and $\dfrac{A'C'}{AC}=\dfrac4{12}=\dfrac13$, so $\triangle A'B'C'\backsim\triangle ABC$ with similarity ratio $\dfrac13$.

By Pythagoras' theorem, we have
$$BC=\sqrt{9^2+12^2}=15,\qquad B'C'=\sqrt{3^2+4^2}=5.$$
The perimeter of $ABC$ is $9+12+15=36$ and the perimeter of $A'B'C'$ is $3+4+5=12$. Hence $\dfrac{12}{36}=\dfrac13$.

So the ratio of the perimeters equals the similarity ratio $\dfrac13$.
:::

Now we use the hypotenuse–leg condition in an everyday situation.

:::example Two ladders
The first ladder is $5$ m long and leans against a wall with its top $4$ m above the ground. The second ladder is $7.5$ m long and leans against the wall with its top $6$ m above the ground. How far from the wall is the foot of the second ladder? Do the two ladders make the same angle with the ground?

**Solution.** Let $A$ be the foot of the wall, $B$ the top of the ladder and $C$ the foot of the first ladder; $A'$, $B'$, $C'$ are the matching points for the second ladder. Triangles $ABC$ and $A'B'C'$ are right-angled at $A$ and $A'$ (the wall is perpendicular to the ground), with $BC=5$, $AB=4$, $B'C'=7.5$, $A'B'=6$.

We have $\dfrac{B'C'}{BC}=\dfrac{7.5}{5}=\dfrac32$ and $\dfrac{A'B'}{AB}=\dfrac64=\dfrac32$, so $\triangle A'B'C'\backsim\triangle ABC$ (the hypotenuse and a leg are proportional).

Hence $\angle C'=\angle C$ and $\dfrac{A'C'}{AC}=\dfrac32$. Since $AC=\sqrt{5^2-4^2}=3$, we get $A'C'=\dfrac32\cdot3=4.5$.

So the foot of the second ladder is $4.5$ m from the wall, and the two ladders make the same angle with the ground.

**Check.** $7.5^2-6^2=56.25-36=20.25=4.5^2$.
:::

The three conditions also give a lovely discovery when we draw the altitude from the right angle.

:::diagram The altitude $AH$ splits the right-angled triangle $ABC$ into two right-angled triangles
alt: Triangle ABC with a right angle at A, the altitude AH drawn from A to the hypotenuse BC, with H lying between B and C
point B 0,0 below-left
point C 10,0 below-right
point H 3.6,0 below
point A 3.6,4.8 above
polygon A B C
segment A H
right B A C
right A H B
:::

:::example The altitude to the hypotenuse
Triangle $ABC$ is right-angled at $A$ with $AB=6$, $AC=8$. Draw the altitude $AH$. Prove that $\triangle HBA\backsim\triangle ABC$, then find $BH$ and $AH$.

**Solution.** The right-angled triangles $HBA$ (right angle at $H$) and $ABC$ (right angle at $A$) share the acute angle $\angle B$. So $\triangle HBA\backsim\triangle ABC$ (two right-angled triangles with an equal acute angle), with the vertices matching as $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$.

By Pythagoras' theorem, $BC=\sqrt{6^2+8^2}=10$. From the similarity, we have
$$\frac{HB}{AB}=\frac{HA}{AC}=\frac{BA}{BC}=\frac{6}{10}.$$
Hence $BH=\dfrac{6\cdot6}{10}=3.6$ and $AH=\dfrac{8\cdot6}{10}=4.8$.

So $BH=3.6$ and $AH=4.8$.

**Check.** In the same way, $CH=\dfrac{8\cdot8}{10}=6.4$ and $BH+CH=3.6+6.4=10=BC$.
:::

Finally, we return to the opening question, going through all four steps of solving a problem.

:::diagram A person and a tree with their shadows at the same moment
alt: Two right-angled triangles on flat ground: a person 1.6 m tall with a 2 m shadow and a tree with a 7.5 m shadow; the sun's rays are parallel, so the two angles at the ends of the shadows are equal
point A 0,0 below
point B 0,1.6 above
point C 2,0 below
point D 4,0 below
point E 4,6 above
point F 11.5,0 below
segment A B
segment A C
segment B C
segment C D
segment D E
segment D F
segment E F
right B A C
right E D F
angle B C A "α"
angle E F D "α"
label -0.6,0.8 "1.6"
label 1,-0.6 "2"
label 3.4,3 "h"
label 7.7,-0.6 "7.5"
:::

:::example The height of the tree
At the same moment, Nam, who is $1.6$ m tall, has a shadow $2$ m long on the ground, and a tree has a shadow $7.5$ m long. Find the height of the tree.

**Solution.**

*Understand.* We know Nam's height and the lengths of both shadows; we need the height $h$ of the tree. We assume the ground is flat, Nam and the tree are vertical, and the sun's rays are parallel.

*Plan.* Each person or tree with its shadow forms a right-angled triangle. The sun's rays are parallel, so the two angles at the ends of the shadows are equal (corresponding angles), and the triangles are similar by the acute-angle condition.

*Solve.* Let $A$, $B$, $C$ be Nam's feet, the top of his head and the end of his shadow; let $D$, $E$, $F$ be the foot of the tree, its top and the end of its shadow. We have $\angle A=\angle D=90^\circ$ and $\angle C=\angle F$, so $\triangle ABC\backsim\triangle DEF$. Hence
$$\frac{AB}{DE}=\frac{AC}{DF}\Rightarrow\frac{1.6}{h}=\frac{2}{7.5}\Rightarrow h=\frac{1.6\cdot7.5}{2}=6.$$

So the tree is $6$ m tall.

*Look back.* Is there another method? At this moment the height is always $\dfrac{1.6}{2}=0.8$ times the length of the shadow, so the tree is $0.8\cdot7.5=6$ m tall, the same answer. Is the result reasonable? The tree's shadow is $7.5:2=3.75$ times Nam's shadow and the tree is $6:1.6=3.75$ times as tall as Nam, so yes. What if the tree's shadow were $9$ m? Then the tree would be $\dfrac{1.6\cdot9}{2}=7.2$ m tall. The method only works if both shadows are measured at the same moment on flat ground.
:::

:::warning Common mistakes
- **Pairing the wrong sides.** Wrong: for two right-angled triangles with legs $3$, $4$ and $8$, $6$, writing $\dfrac38$ and $\dfrac46$ and concluding they are not similar. Why it is wrong: a short leg was paired with a long leg. Right: pair short with short, $\dfrac36=\dfrac48=\dfrac12$, so the triangles are similar.
- **Only one pair of proportional sides.** Wrong: two right-angled triangles have legs $3$ and $6$, so they are similar. Why it is wrong: the other legs could be $4$ and $5$, and then $\dfrac63=2$ but $\dfrac54\neq2$. Right: we need two pairs of proportional sides, or one pair of equal acute angles.
- **Using the hypotenuse–leg condition without a right angle.** Wrong: triangle $ABC$ has $AB=3$, $BC=5$, $AC=6$ and triangle $A'B'C'$ has $A'B'=6$, $B'C'=10$, $A'C'=7$; since $\dfrac{6}{3}=\dfrac{10}{5}$, they are similar. Why it is wrong: neither triangle is right-angled, and $\dfrac{A'C'}{AC}=\dfrac76\neq2$. Right: check for a right angle before using the condition.
:::

**Connections.** This lesson builds on the AA, SAS and SSS conditions for general triangles and on Pythagoras' theorem. It prepares for trigonometry in right-angled triangles in grade 9: the triangles $HBA$, $HAC$ and $ABC$ from the altitude example are where those formulas come from.

## Key terms

:::terms
- similar triangles | tam giác đồng dạng
- right-angled triangle | tam giác vuông
- hypotenuse | cạnh huyền
- leg (side next to the right angle) | cạnh góc vuông
- acute angle | góc nhọn
- similarity ratio | tỉ số đồng dạng
- altitude | đường cao
- proportional | tỉ lệ
- perimeter | chu vi
:::

## Summary

- Two right-angled triangles are similar if they have an equal acute angle.
- Two right-angled triangles are similar if their legs are proportional: $\dfrac{A'B'}{AB}=\dfrac{A'C'}{AC}$.
- Two right-angled triangles are similar if the hypotenuse and a leg are proportional: $\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$. The other leg is proportional too, by Pythagoras' theorem.
- The altitude to the hypotenuse splits a right-angled triangle into two right-angled triangles similar to it.
- The ratio of the perimeters of similar triangles equals the similarity ratio. Always match the vertices correctly and check for a right angle.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ is right-angled at $A$ with $\angle B=50^\circ$ and triangle $DEF$ is right-angled at $D$ with $\angle F=40^\circ$. Prove that $\triangle ABC\backsim\triangle DEF$.

::hint
**What you need:** two right-angled triangles with an equal acute angle are similar.

**Steps:**
1. Find $\angle C$ in triangle $ABC$.
2. Compare $\angle C$ with $\angle F$.

::solution
Since triangle $ABC$ is right-angled at $A$, we have $\angle C=90^\circ-50^\circ=40^\circ$. So $\angle C=\angle F=40^\circ$ and $\triangle ABC\backsim\triangle DEF$ (two right-angled triangles with an equal acute angle).

**Answer.** $\triangle ABC\backsim\triangle DEF$ with $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $AB=6$, $AC=8$, and triangle $MNP$ is right-angled at $M$ with $MN=9$, $MP=12$. Prove that $\triangle ABC\backsim\triangle MNP$ and find $NP$.

::hint
**What you need:** if the legs are proportional, the right-angled triangles are similar.

**Steps:**
1. Form the ratios $\dfrac{MN}{AB}$ and $\dfrac{MP}{AC}$.
2. Find $BC$, then use the similarity ratio to find $NP$.

::solution
We have $\dfrac{MN}{AB}=\dfrac96=\dfrac32$ and $\dfrac{MP}{AC}=\dfrac{12}8=\dfrac32$, so $\triangle ABC\backsim\triangle MNP$ (the legs are proportional). By Pythagoras' theorem, $BC=\sqrt{6^2+8^2}=10$. Hence $NP=\dfrac32\cdot10=15$.

**Answer.** $NP=15$.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $BC=13$, $AB=5$, and triangle $DEF$ is right-angled at $D$ with $EF=39$, $DE=15$. Prove that the triangles are similar and find $DF$.

::hint
**What you need:** if the hypotenuse and a leg are proportional, the right-angled triangles are similar.

**Steps:**
1. Compare $\dfrac{EF}{BC}$ with $\dfrac{DE}{AB}$.
2. Find $AC$, then deduce $DF$.

::solution
We have $\dfrac{EF}{BC}=\dfrac{39}{13}=3$ and $\dfrac{DE}{AB}=\dfrac{15}5=3$, so $\triangle DEF\backsim\triangle ABC$ (the hypotenuse and a leg are proportional). By Pythagoras' theorem, $AC=\sqrt{13^2-5^2}=12$. Hence $DF=3\cdot12=36$.

**Answer.** $DF=36$.
:::

:::exercise
Remember the lesson on similar triangles. Triangle $ABC$ is similar to triangle $A'B'C'$ with ratio $\dfrac25$, and the perimeter of triangle $ABC$ is $24$ cm. Find the perimeter of triangle $A'B'C'$.

::hint
**What you need:** the ratio of the perimeters of similar triangles equals the similarity ratio.

**Steps:**
1. Write $\dfrac{\text{perimeter of }ABC}{\text{perimeter of }A'B'C'}=\dfrac25$.
2. Work out the perimeter of $A'B'C'$.

::solution
Let $p$ cm be the perimeter of triangle $A'B'C'$. We have $\dfrac{24}{p}=\dfrac25$, so $p=\dfrac{24\cdot5}{2}=60$.

**Answer.** $60$ cm.
:::

:::exercise
At the same moment, a vertical stake $1.5$ m tall has a shadow $1.2$ m long, and the flagpole in the school yard has a shadow $9.6$ m long. Find the height of the flagpole.

::hint
**What you need:** a vertical object and its shadow form a right-angled triangle; the sun's rays are parallel, so the angles at the ends of the shadows are equal.

**Steps:**
1. Let $h$ be the height of the flagpole and set up two similar right-angled triangles.
2. Form a proportion and work out $h$.

::solution
The two right-angled triangles (the stake with its shadow, the flagpole with its shadow) have an equal acute angle, so they are similar. We have $\dfrac{1.5}{h}=\dfrac{1.2}{9.6}$, so $h=\dfrac{1.5\cdot9.6}{1.2}=12$.

**Answer.** $12$ m.
:::

:::exercise
The first ramp has a horizontal run of $2.4$ m, a height of $1$ m and a sloping surface $2.6$ m long. The second ramp has a sloping surface $6.5$ m long and a height of $2.5$ m. Prove that the two ramps make the same angle with the horizontal and find the horizontal run of the second ramp.

::hint
**What you need:** each ramp, with its height and horizontal run, forms a right-angled triangle; use the hypotenuse–leg condition.

**Steps:**
1. Compare the ratio of the sloping surfaces with the ratio of the heights.
2. Use the similarity ratio to find the horizontal run.

::solution
Consider triangle $ABC$ right-angled at $A$ with $AC=2.4$, $AB=1$, $BC=2.6$, and triangle $A'B'C'$ right-angled at $A'$ with $A'B'=2.5$, $B'C'=6.5$. We have $\dfrac{B'C'}{BC}=\dfrac{6.5}{2.6}=2.5$ and $\dfrac{A'B'}{AB}=\dfrac{2.5}1=2.5$, so $\triangle A'B'C'\backsim\triangle ABC$. Hence $\angle C'=\angle C$, so the ramps make the same angle, and $A'C'=2.5\cdot2.4=6$.

**Answer.** The same angle; the horizontal run is $6$ m.
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $AB=15$, $AC=20$. Draw the altitude $AH$. Prove that $\triangle HBA\backsim\triangle ABC$ and find $BC$, $BH$ and $AH$.

::hint
**What you need:** the right-angled triangles $HBA$ and $ABC$ share the acute angle $\angle B$.

**Steps:**
1. Find $BC$ by Pythagoras' theorem.
2. From $\dfrac{HB}{AB}=\dfrac{HA}{AC}=\dfrac{BA}{BC}$ find $BH$ and $AH$.

::solution
The right-angled triangles $HBA$ and $ABC$ share the angle $\angle B$, so $\triangle HBA\backsim\triangle ABC$. By Pythagoras' theorem, $BC=\sqrt{15^2+20^2}=25$. We have $\dfrac{HB}{15}=\dfrac{HA}{20}=\dfrac{15}{25}$, so $BH=\dfrac{15\cdot15}{25}=9$ and $AH=\dfrac{20\cdot15}{25}=12$.

**Answer.** $BC=25$, $BH=9$, $AH=12$.
:::

:::exercise
Nam stands $10$ m from the foot of a lamp post. His eyes are $1.6$ m above the ground and his line of sight to the top of the post makes an angle of $45^\circ$ with the horizontal. Find the height of the lamp post.

::hint
**What you need:** a right-angled triangle with one acute angle of $45^\circ$ has its other acute angle equal to $45^\circ$, so it is isosceles.

**Steps:**
1. Let $E$ be Nam's eyes, $H$ the point on the post at eye level and $M$ the top of the post. Look at triangle $EHM$.
2. Find $HM$, then add the height of his eyes.

::solution
In triangle $EHM$, right-angled at $H$, we have $\angle E=45^\circ$, so $\angle M=45^\circ$ and the triangle is isosceles with $HM=EH=10$. The height of the post is $10+1.6=11.6$.

**Answer.** $11.6$ m.
:::

:::exercise Challenge
Triangle $ABC$ is right-angled at $A$ with altitude $AH$. Prove that $AB\cdot AC=AH\cdot BC$. Then find $AH$ when $AB=9$ and $AC=12$.

::hint
**What you need:** $\triangle HBA\backsim\triangle ABC$ gives equal ratios.

**Steps:**
1. Write $\dfrac{HA}{AC}=\dfrac{BA}{BC}$ from the similarity.
2. Cross-multiply, then substitute the numbers.

::solution
We have $\triangle HBA\backsim\triangle ABC$, so $\dfrac{HA}{AC}=\dfrac{BA}{BC}$, which gives $AH\cdot BC=AB\cdot AC$. For $AB=9$ and $AC=12$ we have $BC=\sqrt{9^2+12^2}=15$, so $AH=\dfrac{9\cdot12}{15}=7.2$.

**Answer.** $AH=7.2$.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ is right-angled at $A$ with $\angle B=40^\circ$, and triangle $DEF$ is right-angled at $D$ with $\angle E=50^\circ$. Which statement is correct?
A. $\triangle ABC\backsim\triangle DEF$.
B. $\triangle ABC\backsim\triangle EDF$.
C. $\triangle ABC\backsim\triangle DFE$.
D. The triangles are not similar.
::key C
$\angle C=50^\circ=\angle E$ and $\angle B=40^\circ=\angle F$, so $A\leftrightarrow D$, $B\leftrightarrow F$, $C\leftrightarrow E$. Option A wrongly pairs $B$ with $E$, and option D assumes the equal angles must have the same letters.

::mc
Triangle $ABC$ is right-angled at $A$ with $AB=6$, $BC=10$, and triangle $MNP$ is right-angled at $M$ with $MN=9$, $NP=15$. The length $MP$ is
A. $8$.
B. $13$.
C. $18$.
D. $12$.
::key D
$AC=8$ and the similarity ratio is $\dfrac{15}{10}=\dfrac32$, so $MP=\dfrac32\cdot8=12$. Option A keeps $AC$, option B adds the difference $15-10=5$, and option C doubles $9$.

::mc
Triangle $ABC$ is right-angled at $A$ with $AB=3$, $BC=5$, and triangle $DEF$ is right-angled at $D$ with $DE=12$, $EF=20$. The length $DF$ is
A. $16$.
B. $4$.
C. $8$.
D. $\sqrt{544}$.
::key A
The ratio is $\dfrac{20}{5}=\dfrac{12}{3}=4$ and $AC=4$, so $DF=4\cdot4=16$. Option B keeps $AC$, option C takes $EF-DE$, and option D adds the squares instead of subtracting.

::mc
Triangle $ABC$ is right-angled at $A$ with $AB=6$, $AC=8$ and altitude $AH$. The length $BH$ is
A. $4.8$.
B. $3.6$.
C. $6.4$.
D. $5$.
::key B
$BC=10$ and $\triangle HBA\backsim\triangle ABC$ gives $BH=\dfrac{AB^2}{BC}=\dfrac{36}{10}=3.6$. Option A is $AH$ and option C is $CH$.

::tf
Triangle $ABC$ is right-angled at $A$ with $AB=9$, $AC=12$ and altitude $AH$. Decide whether each statement is true or false.
a) $\triangle HBA\backsim\triangle ACB$.
b) $BH=5.4$.
c) $AH=7.2$.
d) $CH=8.4$.
::key F T T F
a) False: it should be $\triangle HBA\backsim\triangle ABC$ (matching $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$). b) True: $BC=15$, $BH=\dfrac{81}{15}=5.4$. c) True: $AH=\dfrac{9\cdot12}{15}=7.2$. d) False: $CH=15-5.4=9.6$.

::sa
Triangle $ABC$ is right-angled at $A$ with $AB=8$, $BC=17$, and triangle $DEF$ is right-angled at $D$ with $DE=24$, $EF=51$. Find the perimeter of triangle $DEF$.
::key 120
$AC=\sqrt{17^2-8^2}=15$ and the similarity ratio is $\dfrac{51}{17}=3$, so $DF=45$. The perimeter is $24+51+45=120$.

::sa
Nam stands $12$ m from the foot of a flagpole. His eyes are $1.5$ m above the ground and he sees the top of the pole at an angle of $45^\circ$ above the horizontal. Find the height of the flagpole (in metres).
::key 13.5
A right-angled triangle with an acute angle of $45^\circ$ is isosceles, so the part of the pole above eye level is $12$ m. The height of the pole is $12+1.5=13.5$.
:::
