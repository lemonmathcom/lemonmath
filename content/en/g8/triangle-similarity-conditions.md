---
title: The three similarity conditions for triangles
description: Learn the SSS, SAS and AA similarity conditions, the case of right-angled triangles, and use them to find lengths, prove results and measure distances.
minutes: 25
---

:::goals
- State the three similarity conditions for triangles: SSS, SAS, AA.
- Choose the right condition and write the corresponding vertices in the correct order.
- Use similar triangles to find lengths and prove relations.
- Apply them to real problems such as measuring distances that cannot be measured directly.
:::

Suppose two friends want to find the width $AB$ of a pond that they cannot swim across or walk through. They choose a point $O$ on the shore and measure $OA=60$ m and $OB=80$ m. On $OA$ they mark a point $A'$ with $OA'=15$ m, on $OB$ a point $B'$ with $OB'=20$ m, and measure $A'B'=12$ m (this segment is not blocked by the pond).

From these measurements, can they find $AB$? The triangles $OA'B'$ and $OAB$ share the angle $O$ and two pairs of sides seem to be proportional. Is that already enough to conclude that they are similar, without measuring all six elements? This lesson gives you three such "shortcuts".

## Let's explore

By definition, two triangles are similar when they have three pairs of equal angles and three pairs of proportional sides, six conditions in all. Let us try to cut this down. Triangle $ABC$ has sides $3$, $4$, $5$ and triangle $A'B'C'$ has sides $6$, $8$, $10$. The three ratios of sides are all $2$. If you draw them accurately and measure, you will see that the corresponding angles are equal.

This is not a coincidence: for triangles, equal ratios of the three sides are enough to force equal angles. Similarly, two pairs of equal angles are enough to make the third pair equal, because the angles of a triangle add up to $180^\circ$. We state these facts as three similarity conditions.

## First condition: side–side–side (SSS)

:::theorem Similarity condition SSS
If the three sides of one triangle are proportional to the three sides of another, the two triangles are similar:
$$\frac{A'B'}{AB}=\frac{B'C'}{BC}=\frac{C'A'}{CA}\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Why?** Suppose the common ratio $k<1$ (if $k>1$ we swap the roles of the triangles). On side $AB$ mark a point $M$ with $AM=A'B'$, then draw $MN\parallel BC$ ($N\in AC$). By the theorem on a parallel line, $\triangle AMN\sim\triangle ABC$ with ratio $\dfrac{AM}{AB}=k$, so $MN=k\cdot BC=B'C'$ and $AN=k\cdot AC=A'C'$. Triangles $AMN$ and $A'B'C'$ have three pairs of equal sides, so they are congruent (SSS). Hence $\triangle A'B'C'\sim\triangle ABC$.

**Note.** When comparing sides, match the shortest side with the shortest, and the longest with the longest.

:::example Using SSS
Consider triangle $ABC$ with $AB=4$, $BC=6$, $CA=8$ and triangle $DEF$ with $DE=6$, $EF=9$, $FD=12$.

a) Show that the two triangles are similar and state the pairs of equal angles.

b) Are the triangles $MNP$ with $MN=3$, $NP=4$, $PM=6$ and $QRS$ with $QR=6$, $RS=8$, $SQ=11$ similar?

**Solution.** a) We have $\dfrac{DE}{AB}=\dfrac64=\dfrac32$, $\dfrac{EF}{BC}=\dfrac96=\dfrac32$, $\dfrac{FD}{CA}=\dfrac{12}{8}=\dfrac32$. The three ratios are equal, so $\triangle DEF\sim\triangle ABC$ (SSS) with scale factor $\dfrac32$. Hence $\angle D=\angle A$, $\angle E=\angle B$, $\angle F=\angle C$.

b) We have $\dfrac{QR}{MN}=\dfrac63=2$, $\dfrac{RS}{NP}=\dfrac84=2$ but $\dfrac{SQ}{PM}=\dfrac{11}{6}\neq2$. The three ratios are not equal, so the triangles are not similar.

So a) the triangles are similar; b) they are not similar.
:::

## Second condition: side–angle–side (SAS)

:::theorem Similarity condition SAS
If two sides of one triangle are proportional to two sides of another and the angles **included** between these pairs of sides are equal, the two triangles are similar:
$$\frac{A'B'}{AB}=\frac{A'C'}{AC}\ \text{and}\ \angle A'=\angle A\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Why?** Suppose $k=\dfrac{A'B'}{AB}<1$. On $AB$ mark $M$ with $AM=A'B'$ and draw $MN\parallel BC$ ($N\in AC$). Then $\triangle AMN\sim\triangle ABC$ with ratio $k$, so $AN=k\cdot AC=A'C'$. Triangles $AMN$ and $A'B'C'$ have $AM=A'B'$, $\angle A=\angle A'$, $AN=A'C'$, so they are congruent (SAS). Hence $\triangle A'B'C'\sim\triangle ABC$.

:::example Using SAS
In $\triangle ABC$, $AB=6$, $AC=9$, $\angle A=50^\circ$; in $\triangle MNP$, $MN=4$, $MP=6$, $\angle M=50^\circ$. Prove that the triangles are similar. If $BC=12$, find $NP$.

**Solution.** We have $\dfrac{MN}{AB}=\dfrac46=\dfrac23$ and $\dfrac{MP}{AC}=\dfrac69=\dfrac23$. The two ratios are equal, and $\angle M=\angle A$ is the angle included between these pairs of sides. By SAS, $\triangle MNP\sim\triangle ABC$ with scale factor $\dfrac23$.

Hence $\dfrac{NP}{BC}=\dfrac23$, so $NP=\dfrac23\cdot12=8$.

So the triangles are similar and $NP=8$.
:::

## Third condition: angle–angle (AA)

:::theorem Similarity condition AA
If two angles of one triangle are equal to two angles of another, the two triangles are similar:
$$\angle A'=\angle A\ \text{and}\ \angle B'=\angle B\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Why?** Since the angles of a triangle add up to $180^\circ$, $\angle C'=180^\circ-\angle A'-\angle B'=\angle C$. Suppose $A'B'<AB$. On $AB$ mark $M$ with $AM=A'B'$ and draw $MN\parallel BC$ ($N\in AC$). Then $\triangle AMN\sim\triangle ABC$, so $\angle AMN=\angle B=\angle B'$. Triangles $AMN$ and $A'B'C'$ have $\angle A=\angle A'$, $AM=A'B'$, $\angle AMN=\angle B'$, so they are congruent (ASA). Hence $\triangle A'B'C'\sim\triangle ABC$.

:::example Using AA
In $\triangle ABC$, $\angle A=40^\circ$ and $\angle B=60^\circ$; in $\triangle DEF$, $\angle E=60^\circ$ and $\angle F=80^\circ$. Are the triangles similar? Write the vertices in the correct order.

**Solution.** In $\triangle ABC$: $\angle C=180^\circ-40^\circ-60^\circ=80^\circ$. In $\triangle DEF$: $\angle D=180^\circ-60^\circ-80^\circ=40^\circ$. We have $\angle D=\angle A=40^\circ$, $\angle E=\angle B=60^\circ$, $\angle F=\angle C=80^\circ$.

By AA, $\triangle DEF\sim\triangle ABC$ (with $D\leftrightarrow A$, $E\leftrightarrow B$, $F\leftrightarrow C$).

So the triangles are similar.
:::

## Similar right-angled triangles

A right-angled triangle already has a $90^\circ$ angle, so the conditions simplify:
- Two right-angled triangles with one pair of equal acute angles are similar (AA).
- Two right-angled triangles whose two pairs of legs are proportional are similar (SAS, since the included angle is the right angle).

:::example Two right-angled triangles
Triangle $ABC$ is right-angled at $A$ with $AB=6$, $AC=8$, and triangle $A'B'C'$ is right-angled at $A'$ with $A'B'=9$, $A'C'=12$. Prove that the triangles are similar and check the ratio of the hypotenuses.

**Solution.** We have $\dfrac{A'B'}{AB}=\dfrac96=\dfrac32$ and $\dfrac{A'C'}{AC}=\dfrac{12}{8}=\dfrac32$, and $\angle A'=\angle A=90^\circ$ is the included angle. By SAS, $\triangle A'B'C'\sim\triangle ABC$ with scale factor $\dfrac32$.

By Pythagoras' theorem, $BC=10$ and $B'C'=15$, and $\dfrac{B'C'}{BC}=\dfrac{15}{10}=\dfrac32$, in agreement with the scale factor.

So the triangles are similar with scale factor $\dfrac32$.
:::

:::example Proving a relation
In $\triangle ABC$, the point $D$ lies on side $AC$ with $\angle ABD=\angle ACB$. Prove that $AB^2=AD\cdot AC$ and find $AC$ when $AB=6$, $AD=4$.

**Solution.** Triangles $ABD$ and $ACB$ share the angle $A$ and have $\angle ABD=\angle ACB$. By AA, $\triangle ABD\sim\triangle ACB$, with $A\leftrightarrow A$, $B\leftrightarrow C$, $D\leftrightarrow B$. Hence
$$\frac{AB}{AC}=\frac{AD}{AB}\ \Rightarrow\ AB^2=AD\cdot AC.$$
When $AB=6$, $AD=4$: $36=4\cdot AC$, so $AC=9$.

So $AB^2=AD\cdot AC$ and $AC=9$.
:::

We return to the pond at the start, using the four steps of solving a problem.

:::example Measuring the width of a pond
The point $O$ is on the shore, $OA=60$ m, $OB=80$ m. Take $A'\in OA$ with $OA'=15$ m, $B'\in OB$ with $OB'=20$ m, and measure $A'B'=12$ m (an imagined case). Find the width $AB$ of the pond.

**Solution.**

*Understand.* We need $AB$ when we can measure only $A'B'$, $OA$, $OB$, $OA'$, $OB'$.

*Plan.* Triangles $OA'B'$ and $OAB$ share the angle $O$; check whether the two pairs of sides next to that angle are proportional, so that we can use SAS.

*Solve.* We have $\dfrac{OA'}{OA}=\dfrac{15}{60}=\dfrac14$ and $\dfrac{OB'}{OB}=\dfrac{20}{80}=\dfrac14$, and $\angle O$ is common. By SAS, $\triangle OA'B'\sim\triangle OAB$ with scale factor $\dfrac14$. Hence $\dfrac{A'B'}{AB}=\dfrac14$, so $AB=4\cdot12=48$ (m).

*Look back.* Check: $A'B'=\dfrac14\cdot48=12$ m. The result is reasonable because $AB$ must be greater than $A'B'$ when $A'$, $B'$ are closer to $O$ than $A$, $B$.

So the pond is $48$ m wide.
:::

:::warning Mistakes to watch out for
- **Using SAS with an angle that is not included.** Wrong: two proportional sides and one equal angle (not between those sides) make the triangles similar. Why it is wrong: an angle that is not between the sides does not fix the shape of the triangle; two different triangles can occur. Right: the angle must lie between the two pairs of proportional sides.
- **Matching the wrong pairs of sides in SSS.** Wrong: for sides $4$, $6$, $8$ and $6$, $9$, $12$, comparing $\dfrac{12}{4}$ and $\dfrac{9}{6}$. Why it is wrong: match the shortest with the shortest and the longest with the longest. Right: $\dfrac64=\dfrac96=\dfrac{12}{8}=\dfrac32$.
- **Concluding similarity from only one pair of equal angles.** Wrong: two triangles each with a $40^\circ$ angle are similar. Why it is wrong: AA needs two pairs of angles. Right: check one more pair (or find it from the angle sum $180^\circ$).
:::

**Connections.** This lesson relies on the definition of similar triangles and the theorem on a parallel line from [similar triangles](lesson:similar-triangles), together with the congruence conditions for triangles. The next lesson, [Pythagoras' theorem and its applications](lesson:pythagoras-theorem), can be proved very neatly using similar triangles, as you will see in the challenge exercise.

## Key terms

:::terms
- similarity condition | trường hợp đồng dạng
- side–side–side (SSS) | cạnh – cạnh – cạnh (c.c.c)
- side–angle–side (SAS) | cạnh – góc – cạnh (c.g.c)
- angle–angle (AA) | góc – góc (g.g)
- included angle | góc xen giữa
- leg, hypotenuse | cạnh góc vuông, cạnh huyền
- scale factor | tỉ số đồng dạng
- right-angled triangle | tam giác vuông
:::

## Summary

- SSS: three pairs of corresponding sides proportional $\Rightarrow$ similar.
- SAS: two pairs of corresponding sides proportional and the included angles equal $\Rightarrow$ similar.
- AA: two pairs of equal angles $\Rightarrow$ similar.
- Right-angled triangles: one pair of equal acute angles, or two pairs of proportional legs $\Rightarrow$ similar.
- Always write the corresponding vertices in the right order; from similarity we get equal angles and ratios of sides.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ has sides $5$, $12$, $13$ and triangle $DEF$ has sides $10$, $24$, $26$. Are the triangles similar? State the scale factor.

::hint
**What you need:** the SSS condition.

**Steps:**
1. Match the shortest side with the shortest, and so on.
2. Work out the three ratios.

::solution
We have $\dfrac{10}{5}=\dfrac{24}{12}=\dfrac{26}{13}=2$. The three ratios are equal, so the triangles are similar (SSS) with scale factor $2$.

**Answer.** Similar, scale factor $2$.
:::

:::exercise
Are two triangles with sides $3$, $5$, $7$ and $6$, $10$, $15$ similar?

::hint
**What you need:** SSS needs all three ratios to be equal.

**Steps:**
1. Match the sides in increasing order.
2. Work out the three ratios.

::solution
We have $\dfrac63=2$, $\dfrac{10}{5}=2$ but $\dfrac{15}{7}\neq2$. The three ratios are not equal, so the triangles are not similar.

**Answer.** Not similar.
:::

:::exercise
Triangle $ABC$ has $AB=4$, $AC=6$, $\angle A=60^\circ$ and triangle $A'B'C'$ has $A'B'=6$, $A'C'=9$, $\angle A'=60^\circ$. Prove that the triangles are similar. If $BC=5$, find $B'C'$.

::hint
**What you need:** the SAS condition.

**Steps:**
1. Work out $\dfrac{A'B'}{AB}$ and $\dfrac{A'C'}{AC}$.
2. Use the scale factor for the remaining side.

::solution
We have $\dfrac{6}{4}=\dfrac{9}{6}=\dfrac32$ and the included angle $\angle A'=\angle A=60^\circ$. By SAS, $\triangle A'B'C'\sim\triangle ABC$ with scale factor $\dfrac32$. Hence $B'C'=\dfrac32\cdot5=7.5$.

**Answer.** Similar; $B'C'=7.5$.
:::

:::exercise
Triangle $ABC$ has $\angle A=50^\circ$, $\angle B=70^\circ$ and triangle $MNP$ has $\angle M=50^\circ$, $\angle P=60^\circ$. Prove that the triangles are similar and write the vertices in the correct order.

::hint
**What you need:** the AA condition; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Work out the remaining angle of each triangle.
2. Match the equal angles.

::solution
In $\triangle ABC$: $\angle C=180^\circ-50^\circ-70^\circ=60^\circ$. In $\triangle MNP$: $\angle N=180^\circ-50^\circ-60^\circ=70^\circ$. We have $\angle A=\angle M$, $\angle B=\angle N$, $\angle C=\angle P$. By AA, $\triangle ABC\sim\triangle MNP$.

**Answer.** $\triangle ABC\sim\triangle MNP$ (AA).
:::

:::exercise
Triangle $ABC$ is right-angled at $A$ with $AB=3$, $AC=4$; triangle $DEF$ is right-angled at $D$ with $DE=6$, $DF=8$. Prove that the triangles are similar and find $EF$.

::hint
**What you need:** two pairs of legs proportional.

**Steps:**
1. Work out $\dfrac{DE}{AB}$ and $\dfrac{DF}{AC}$.
2. Find $BC$, then $EF$.

::solution
We have $\dfrac63=\dfrac84=2$ and the two right angles (included) are equal, so $\triangle DEF\sim\triangle ABC$ (SAS) with scale factor $2$. By Pythagoras' theorem, $BC=5$. Hence $EF=2\cdot5=10$.

**Answer.** Similar, $EF=10$.
:::

:::exercise
In $\triangle ABC$, the point $D$ lies on side $AC$ with $\angle ABD=\angle ACB$. Given $AB=10$ and $AD=5$, find $AC$ and $DC$.

::hint
**What you need:** $\triangle ABD\sim\triangle ACB$, so $AB^2=AD\cdot AC$.

**Steps:**
1. Show that the two triangles are similar by AA.
2. Use the relation to find $AC$, then $DC=AC-AD$.

::solution
Triangles $ABD$ and $ACB$ share the angle $A$ and have $\angle ABD=\angle ACB$, so they are similar (AA). Hence $AB^2=AD\cdot AC$, that is $100=5\cdot AC$ and $AC=20$. So $DC=20-5=15$.

**Answer.** $AC=20$; $DC=15$.
:::

:::exercise
Suppose that to measure the distance $AB$ between two points on opposite sides of a lake, people choose a point $O$ and measure $OA=90$ m, $OB=120$ m. They mark $A'\in OA$ with $OA'=30$ m, $B'\in OB$ with $OB'=40$ m and measure $A'B'=25$ m. Find $AB$.

::hint
**What you need:** triangles $OA'B'$ and $OAB$ share the angle $O$.

**Steps:**
1. Check $\dfrac{OA'}{OA}$ and $\dfrac{OB'}{OB}$.
2. Use SAS to get the ratio of $A'B'$ to $AB$.

::solution
We have $\dfrac{OA'}{OA}=\dfrac{30}{90}=\dfrac13$ and $\dfrac{OB'}{OB}=\dfrac{40}{120}=\dfrac13$, and $\angle O$ is common. By SAS, $\triangle OA'B'\sim\triangle OAB$ with scale factor $\dfrac13$, so $AB=3\cdot A'B'=75$ (m).

**Answer.** $75$ m.
:::

:::exercise
Suppose that to measure the height of a building, a small mirror is placed on the ground $30$ m from the foot of the building. A person $1.6$ m tall, standing $2$ m from the mirror, sees the top of the building in the mirror. Find the height of the building. (The incoming ray and the reflected ray make equal angles with the ground.)

::hint
**What you need:** two right-angled triangles with one pair of equal acute angles are similar.

**Steps:**
1. Recognise the two similar right-angled triangles (person with mirror, building with mirror).
2. Write $\dfrac{\text{height of person}}{\text{distance to mirror}}=\dfrac{\text{height of building}}{30}$.

::solution
The two right-angled triangles (the person and the distance to the mirror; the building and the distance to the mirror) have one pair of equal acute angles (the angle of incidence equals the angle of reflection), so they are similar (AA). Let $h$ be the height of the building. We have $\dfrac{h}{30}=\dfrac{1.6}{2}$, so $h=24$ (m).

**Answer.** $24$ m.
:::

:::exercise
In trapezium $ABCD$, $AB\parallel CD$; the diagonals $AC$ and $BD$ meet at $O$. Prove that $\triangle OAB\sim\triangle OCD$ and find $CD$ when $OA=4$, $OC=6$, $AB=8$. (Revise [similar triangles](lesson:similar-triangles).)

::hint
**What you need:** alternate angles are equal when two lines are parallel.

**Steps:**
1. Find two pairs of equal angles to use AA.
2. Write $\dfrac{CD}{AB}=\dfrac{OC}{OA}$.

::solution
Since $AB\parallel CD$, $\angle OAB=\angle OCD$ and $\angle OBA=\angle ODC$ (alternate angles). By AA, $\triangle OAB\sim\triangle OCD$. Hence $\dfrac{CD}{AB}=\dfrac{OC}{OA}=\dfrac64$, so $CD=8\cdot\dfrac32=12$.

**Answer.** Proved; $CD=12$.
:::

:::exercise Challenge
Triangle $ABC$ is right-angled at $A$, with altitude $AH$ ($H\in BC$).

a) Prove that $\triangle HBA\sim\triangle ABC$ and $AB^2=BH\cdot BC$. Similarly $AC^2=CH\cdot BC$.

b) Deduce that $AB^2+AC^2=BC^2$. Find $BH$ when $AB=6$, $BC=10$.

::hint
**What you need:** AA for right-angled triangles; $BH+CH=BC$.

**Steps:**
1. Triangles $HBA$ and $ABC$ share the angle $B$ and both have a right angle.
2. Add the two relations and use $BH+CH=BC$.

::solution
a) Triangles $HBA$ (right-angled at $H$) and $ABC$ (right-angled at $A$) share the angle $B$, so $\triangle HBA\sim\triangle ABC$ (AA). Hence $\dfrac{BH}{AB}=\dfrac{AB}{BC}$, that is $AB^2=BH\cdot BC$. In exactly the same way $\triangle HCA\sim\triangle ACB$ gives $AC^2=CH\cdot BC$.

b) Adding the two relations: $AB^2+AC^2=BC\cdot(BH+CH)=BC\cdot BC=BC^2$. With $AB=6$, $BC=10$: $BH=\dfrac{AB^2}{BC}=\dfrac{36}{10}=3.6$.

So we have proved Pythagoras' theorem, and $BH=3.6$.

**Answer.** $BH=3.6$.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has sides $4$, $6$, $8$ and triangle $DEF$ has sides $6$, $9$, $12$. The scale factor of $\triangle DEF$ to $\triangle ABC$ is
A. $\dfrac23$.
B. $\dfrac32$.
C. $2$.
D. $3$.
::key B
$\dfrac64=\dfrac96=\dfrac{12}{8}=\dfrac32$. A inverts the ratio; B and D are not ratios of corresponding sides.

::mc
Two triangles with two pairs of equal angles
A. are not similar.
B. are congruent.
C. are similar.
D. are both isosceles.
::key C
This is the AA condition. They need not be congruent (they may differ in size) and need not be isosceles.

::mc
In the SAS condition for similar triangles, the equal angle must be the angle
A. opposite the longest side.
B. of any kind.
C. acute.
D. included between the two pairs of proportional sides.
::key D
The angle must lie between the two pairs of proportional sides. The other options do not guarantee similar triangles.

::mc
In $\triangle ABC$, $D\in AC$ with $\angle ABD=\angle ACB$, $AB=10$ and $AD=5$. The length $AC$ is
A. $20$.
B. $2.5$.
C. $15$.
D. $5$.
::key A
$AB^2=AD\cdot AC$, so $AC=\dfrac{100}{5}=20$. C is $DC$; A and D do not satisfy the relation.

::tf
In $\triangle ABC$, $AB=6$, $AC=9$, $\angle A=50^\circ$; in $\triangle MNP$, $MN=4$, $MP=6$, $\angle M=50^\circ$. Decide whether each statement is true or false.
a) $\triangle MNP\sim\triangle ABC$ by the SAS condition.
b) The scale factor of $\triangle MNP$ to $\triangle ABC$ is $\dfrac32$.
c) $\angle N=\angle C$.
d) If $BC=12$ then $NP=8$.
::key T F F T
a) True: $\dfrac46=\dfrac69=\dfrac23$ and the included angles are equal. b) False: the scale factor is $\dfrac23$. c) False: $\angle N=\angle B$. d) True: $NP=\dfrac23\cdot12=8$.

::sa
In $\triangle ABC$, $AB=6$, $AC=9$, $BC=12$; in $\triangle MNP$, $MN=4$, $MP=6$, $\angle M=\angle A$. Find $NP$.
::key 8
$\triangle MNP\sim\triangle ABC$ (SAS) with scale factor $\dfrac23$, so $NP=\dfrac23\cdot12=8$.

::sa
In $\triangle ABC$, $D\in AC$ with $\angle ABD=\angle ACB$, $AB=10$, $AD=5$. Find $AC$.
::key 20
$AB^2=AD\cdot AC$, so $AC=\dfrac{100}{5}=20$.
:::
