---
title: Angle sum of a triangle
description: The three angles of a triangle add up to 180°: measuring, a proof, right-angled triangles, exterior angles and a real survey problem.
minutes: 20
---

:::goals
- State and prove the theorem on the angle sum of a triangle.
- Find the third angle of a triangle when two angles are known.
- Use the property of the two acute angles of a right-angled triangle and the property of an exterior angle.
- Apply these ideas to a real measuring problem.
:::

Suppose a triangular field $ABC$ has its corner $C$ right next to a pond, so nobody can stand there to place a protractor. The farmer can only measure the two angles at $A$ and $B$: $62^\circ$ and $81^\circ$. He wants to know the angle at $C$ so that he can drive in the stake correctly.

Without measuring, can we work out the angle $C$? Yes, because the three angles of every triangle are tied together very tightly. This lesson finds that link, proves it, and then uses it to solve the farmer's problem.

## The angle sum of a triangle

### Exploration: measuring three angles

A student measures the three angles of four triangular pieces of card with a protractor:

| Triangle | First angle | Second angle | Third angle | Sum |
|---|---|---|---|---|
| 1 | $52^\circ$ | $71^\circ$ | $57^\circ$ | $180^\circ$ |
| 2 | $38^\circ$ | $84^\circ$ | $58^\circ$ | $180^\circ$ |
| 3 | $90^\circ$ | $34^\circ$ | $56^\circ$ | $180^\circ$ |
| 4 | $61^\circ$ | $62^\circ$ | $58^\circ$ | $181^\circ$ |

The sum is almost always $180^\circ$; the $1^\circ$ difference in triangle 4 is measuring error. You can also try this: cut out the three corners of a paper triangle and put the three vertices together; the three angles make a straight angle. Measuring and folding give us a guess; to be sure we need a proof.

:::theorem Angle sum of a triangle
The three angles of a triangle add up to $180^\circ$.
:::

**Proof.** Let $ABC$ be a triangle.

Given: triangle $ABC$. To prove: $\angle A+\angle B+\angle C=180^\circ$.

Through $A$ draw the line $xy$ parallel to $BC$. By Euclid's axiom, this line exists and is unique.

:::diagram Through $A$ draw $xy\parallel BC$
alt: Triangle ABC and the line xy through A parallel to BC; the angles at A equal angles B and C
point A 3,4.29 above
point B 0,0 below-left
point C 5,0 below-right
point x 0,4.29 left
point y 6.3,4.29 right
segment A B
segment A C
segment B C
segment x y
angle x A B "B"
angle B A C "A"
angle C A y "C"
angle A B C "B"
angle A C B "C"
:::

Since $xy\parallel BC$, $\angle xAB=\angle B$ and $\angle CAy=\angle C$ (alternate angles).

The three angles $\angle xAB$, $\angle BAC$, $\angle CAy$ together make the straight angle $\angle xAy$, so $\angle xAB+\angle BAC+\angle CAy=180^\circ$.

Replacing $\angle xAB=\angle B$ and $\angle CAy=\angle C$, we get $\angle B+\angle A+\angle C=180^\circ$. So the angles of a triangle add up to $180^\circ$.

The last two lessons are all present in this proof: Euclid's axiom gives the line $xy$, the property of parallel lines gives the pairs of alternate angles, and the straight angle gives the sum $180^\circ$.

:::diagram Triangle $ABC$ with two known angles
alt: Triangle ABC with angle A equal to 65 degrees, angle B 48 degrees and angle C unknown
point A 3.4,3.77 above
point B 0,0 below-left
point C 5,0 below-right
segment A B
segment A C
segment B C
angle B A C "65°"
angle A B C "48°"
angle A C B "?"
:::

:::example Finding the third angle of a triangle
Triangle $ABC$ has $\angle A=65^\circ$, $\angle B=48^\circ$. Find $\angle C$.

**Solution.** In triangle $ABC$ we have $\angle A+\angle B+\angle C=180^\circ$ (angle sum of a triangle).

So $\angle C=180^\circ-(\angle A+\angle B)=180^\circ-(65^\circ+48^\circ)=180^\circ-113^\circ=67^\circ$.

So $\angle C=67^\circ$.
:::

## Right-angled triangles and exterior angles

**Right-angled triangles.** A triangle with one right angle is called a right-angled triangle. In triangle $ABC$ right-angled at $A$ we have $\angle B+\angle C=180^\circ-90^\circ=90^\circ$. So the two acute angles of a right-angled triangle are complementary. A triangle can also have at most one right angle or one obtuse angle, since two such angles already add up to $180^\circ$ or more.

:::diagram Triangle $ABC$ right-angled at $A$
alt: Triangle ABC right-angled at A, angle B is 35 degrees and angle C is unknown
point A 0,0 below-left
point B 4,0 below-right
point C 0,2.8 above
segment A B
segment A C
segment B C
right B A C
angle A B C "35°"
angle A C B "?"
:::

:::example A right-angled triangle
Triangle $ABC$ is right-angled at $A$ and $\angle B=35^\circ$. Find $\angle C$.

**Solution.** Since triangle $ABC$ is right-angled at $A$, $\angle A=90^\circ$. In triangle $ABC$: $\angle A+\angle B+\angle C=180^\circ$ (angle sum).

So $\angle C=180^\circ-90^\circ-35^\circ=55^\circ$.

So $\angle C=55^\circ$ (and $\angle B+\angle C=90^\circ$, the acute angles are complementary).
:::

**Exterior angles.** An exterior angle of a triangle is an angle adjacent supplementary to an angle of the triangle. For instance, extending the side $BC$ past $C$ to $D$, the angle $\angle ACD$ is the exterior angle at the vertex $C$.

:::theorem Exterior angle property
Each exterior angle of a triangle equals the sum of the two interior angles not next to it.
:::

**Why?** For the exterior angle $\angle ACD$: since it is adjacent supplementary to $\angle C$, $\angle ACD=180^\circ-\angle C$. But $\angle A+\angle B+\angle C=180^\circ$, so $180^\circ-\angle C=\angle A+\angle B$. So $\angle ACD=\angle A+\angle B$.

:::diagram Exterior angle $\angle ACD$ of triangle $ABC$
alt: Triangle ABC with BC extended to D; angle A is 70 degrees, angle B is 50 degrees and angle ACD is unknown
point A 2.96,3.53 above
point B 0,0 below-left
point C 5,0 below
point D 6.8,0 below-right
segment A B
segment A C
segment B D
angle B A C "70°"
angle A B C "50°"
angle A C D "?"
:::

:::example An exterior angle of a triangle
Triangle $ABC$ has $\angle A=70^\circ$, $\angle B=50^\circ$. Extend $BC$ to $D$. Find $\angle ACD$ in two ways.

**Solution.** *Method 1.* In triangle $ABC$: $\angle C=180^\circ-(70^\circ+50^\circ)=60^\circ$ (angle sum). Since $\angle ACD$ is adjacent supplementary to $\angle C$, $\angle ACD=180^\circ-60^\circ=120^\circ$.

*Method 2.* By the exterior angle property, $\angle ACD=\angle A+\angle B=70^\circ+50^\circ=120^\circ$.

Both methods give the same result. So $\angle ACD=120^\circ$.
:::

:::diagram Three angles in the ratio $2:3:4$
alt: Triangle ABC whose three angles are marked 2k, 3k and 4k
point A 3.37,2.83 above
point B 0,0 below-left
point C 5,0 below-right
segment A B
segment A C
segment B C
angle B A C "4k"
angle A B C "2k"
angle A C B "3k"
:::

:::example Angles in a ratio
The angles $\angle B$, $\angle C$, $\angle A$ of triangle $ABC$ are in the ratio $2:3:4$. Find each angle.

**Solution.** Let $\angle B=2k$, $\angle C=3k$, $\angle A=4k$ (degrees), $k>0$.

By the angle sum of a triangle: $2k+3k+4k=180$, so $9k=180$ and $k=20$.

So $\angle B=40^\circ$, $\angle C=60^\circ$, $\angle A=80^\circ$. The sum is $40+60+80=180$, as it should be.

So $\angle A=80^\circ$, $\angle B=40^\circ$, $\angle C=60^\circ$.
:::

Now back to the field, in four steps.

:::diagram Field $ABC$ with a pond next to corner $C$
alt: Triangular field ABC with a pond near vertex C; angle A is 62 degrees and angle B is 81 degrees
point A 0.53,3.37 above
point B 0,0 below-left
point C 5,0 below-right
point P 3.86,0.38 ""
segment A B
segment A C
segment B C
circle P 0.3
label 3.76,0.98 "ao"
angle B A C "62°"
angle A B C "81°"
angle A C B "?"
:::

:::example The field by the pond
Suppose the triangular field $ABC$ has its corner $C$ next to a pond so it cannot be measured. We measure $\angle A=62^\circ$ and $\angle B=81^\circ$. Find $\angle C$.

**Solution.**

*Understand.* Triangle $ABC$ has two known angles, $62^\circ$ and $81^\circ$; we need the third.

*Plan.* Use the theorem that the angles of a triangle add up to $180^\circ$.

*Solve.* In triangle $ABC$: $\angle A+\angle B+\angle C=180^\circ$ (angle sum of a triangle). So
$$\angle C=180^\circ-(62^\circ+81^\circ)=180^\circ-143^\circ=37^\circ.$$

So $\angle C=37^\circ$.

*Look back.* Check: $62+81+37=180$. If we could measure at $C$ directly and got $36^\circ$ or $38^\circ$ we would accept it because of protractor error; if we got $45^\circ$ we would measure all three angles again.
:::

:::diagram Bisector $AD$ of $\angle BAC$
alt: Triangle ABC with angle B 70 degrees, angle C 30 degrees and bisector AD meeting BC at D
point A 0.87,2.39 above
point B 0,0 below-left
point C 5,0 below-right
point D 1.74,0 below
segment A B
segment A C
segment B C
segment A D
angle A B C "70°"
angle A C B "30°"
angle B A D "α"
angle D A C "α"
angle A D C "?"
:::

:::example A bisector in a triangle
Triangle $ABC$ has $\angle B=70^\circ$, $\angle C=30^\circ$. The bisector of $\angle BAC$ meets $BC$ at $D$. Find $\angle ADC$.

**Solution.** In triangle $ABC$: $\angle A=180^\circ-(70^\circ+30^\circ)=80^\circ$ (angle sum).

Since $AD$ bisects $\angle BAC$, $\angle BAD=\dfrac{80^\circ}2=40^\circ$.

Since $D$ lies on $BC$, $\angle ADC$ is the exterior angle of triangle $ABD$ at the vertex $D$. By the exterior angle property, $\angle ADC=\angle B+\angle BAD=70^\circ+40^\circ=110^\circ$.

Check in triangle $ADC$: $40^\circ+30^\circ+110^\circ=180^\circ$, correct.

So $\angle ADC=110^\circ$.
:::

:::warning Common mistakes
- **Subtracting only one angle properly.** Wrong: "$\angle C=180^\circ-65^\circ+48^\circ=163^\circ$". Why it is wrong: we must subtract the sum of both known angles. Right: $\angle C=180^\circ-(65^\circ+48^\circ)=67^\circ$.
- **Confusing an exterior angle with an interior angle.** Wrong: "the exterior angle at $C$ equals $\angle C$". Why it is wrong: the exterior angle is adjacent supplementary to $\angle C$, so it equals $180^\circ-\angle C$. Right: the exterior angle at $C$ equals $\angle A+\angle B$.
- **Doubting the theorem because you measured $181^\circ$.** Wrong: "I measured $181^\circ$, so the sum is not $180^\circ$". Why it is wrong: a protractor has some error, while the theorem has been proved. Right: the exact sum is $180^\circ$.
:::

**Connections.** This lesson uses everything from the last three lessons: adjacent supplementary angles, the properties of parallel lines, Euclid's axiom and how to write a proof. From the angle sum you can find the missing angle of a triangle without measuring, and you will use it again and again in the lessons on triangles. Back to the farmer: the angle at $C$ is $37^\circ$.

## Key terms

:::terms
- triangle | tam giác
- angle sum | tổng ba góc
- right-angled triangle | tam giác vuông
- acute angle | góc nhọn
- obtuse angle | góc tù
- exterior angle | góc ngoài
- interior angle | góc trong
- complementary angles | hai góc phụ nhau
- vertex | đỉnh
- ratio | tỉ lệ
:::

## Summary

- The three angles of a triangle add up to $180^\circ$. Proof: through one vertex draw a line parallel to the opposite side, then use two pairs of alternate angles and the straight angle.
- To find the third angle: subtract the sum of the two known angles from $180^\circ$.
- A right-angled triangle has two complementary acute angles (sum $90^\circ$).
- An exterior angle of a triangle is adjacent supplementary to an interior angle; it equals the sum of the two interior angles not next to it.
- Measuring has error, while the theorem is exactly $180^\circ$.

## Practice

Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Find the third angle of triangle $ABC$:

a) $\angle A=50^\circ$, $\angle B=60^\circ$. Find $\angle C$.

b) $\angle A=100^\circ$, $\angle B=35^\circ$. Find $\angle C$.

c) $\angle A=\angle B=65^\circ$. Find $\angle C$.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Add the two given angles.
2. Subtract that sum from $180^\circ$.

::solution
Consider triangle $ABC$. By the angle sum theorem of a triangle, $\angle A+\angle B+\angle C=180^\circ$. Hence
$$\angle C=180^\circ-(\angle A+\angle B).$$

a) Substituting $\angle A=50^\circ$, $\angle B=60^\circ$, we get $\angle C=180^\circ-(50^\circ+60^\circ)=180^\circ-110^\circ=70^\circ$.

b) Substituting $\angle A=100^\circ$, $\angle B=35^\circ$, we get $\angle C=180^\circ-(100^\circ+35^\circ)=180^\circ-135^\circ=45^\circ$.

c) Substituting $\angle A=\angle B=65^\circ$, we get $\angle C=180^\circ-(65^\circ+65^\circ)=180^\circ-130^\circ=50^\circ$.

So $\angle C=70^\circ$ in a), $\angle C=45^\circ$ in b), $\angle C=50^\circ$ in c).

**Answer.** a) $70^\circ$; b) $45^\circ$; c) $50^\circ$.
:::

:::exercise
a) Triangle $ABC$ is right-angled at $A$ and $\angle B=28^\circ$. Find $\angle C$.

b) Triangle $ABC$ is right-angled at $A$ and $\angle B=\angle C$. Find $\angle B$.

::hint
**What you need:** in a right-angled triangle the two acute angles are complementary.

**Steps:**
1. Use $\angle B+\angle C=90^\circ$.
2. In part b), the two angles are equal, so each is half of $90^\circ$.

::solution
Since triangle $ABC$ is right-angled at $A$, we have $\angle A=90^\circ$. By the angle sum theorem, $\angle B+\angle C=180^\circ-90^\circ=90^\circ$ (the acute angles are complementary).

a) With $\angle B=28^\circ$, we have $\angle C=90^\circ-28^\circ=62^\circ$.

b) With $\angle B=\angle C$, we have $2\angle B=90^\circ$, so $\angle B=45^\circ$.

So $\angle C=62^\circ$ in a) and $\angle B=45^\circ$ in b).

**Answer.** a) $62^\circ$; b) $45^\circ$.
:::

:::exercise
Triangle $ABC$ has $\angle B=40^\circ$, $\angle C=65^\circ$. Find the exterior angle at the vertex $A$ (the angle adjacent supplementary to $\angle BAC$).

::hint
**What you need:** an exterior angle equals the sum of the two interior angles not next to it; or find $\angle A$ and subtract it from $180^\circ$.

**Steps:**
1. Find $\angle A$.
2. Find the angle adjacent supplementary to $\angle A$.

::solution
Consider triangle $ABC$. By the angle sum theorem,
$$\angle A=180^\circ-(\angle B+\angle C)=180^\circ-(40^\circ+65^\circ)=75^\circ.$$

The exterior angle at $A$ is adjacent supplementary to $\angle A$, so it equals
$$180^\circ-75^\circ=105^\circ.$$

Check with the exterior angle property: the exterior angle at $A$ equals the sum of the two interior angles not adjacent to it, that is $\angle B+\angle C=40^\circ+65^\circ=105^\circ$ (it matches).

So the exterior angle at the vertex $A$ equals $105^\circ$.

**Answer.** $105^\circ$.
:::

:::exercise
The angles $\angle A$, $\angle B$, $\angle C$ of triangle $ABC$ are in the ratio $1:2:3$. Find each angle.

::hint
**What you need:** let the angles be $k$, $2k$, $3k$ and use the angle sum.

**Steps:**
1. Form the equation $k+2k+3k=180$.
2. Solve for $k$ and work out each angle.

::solution
Since the angles $\angle A$, $\angle B$, $\angle C$ are in the ratio $1:2:3$, let $\angle A=k$, $\angle B=2k$, $\angle C=3k$ (in degrees, $k>0$).

By the angle sum theorem of a triangle,
$$k+2k+3k=180,\ \text{that is}\ 6k=180,\ \text{so}\ k=30.$$

Hence $\angle A=30^\circ$, $\angle B=2\cdot30^\circ=60^\circ$, $\angle C=3\cdot30^\circ=90^\circ$.

So $\angle A=30^\circ$, $\angle B=60^\circ$, $\angle C=90^\circ$.

**Answer.** $30^\circ$; $60^\circ$; $90^\circ$.
:::

:::exercise
Triangle $ABC$ has $\angle A=x^\circ$, $\angle B=(2x-10)^\circ$, $\angle C=(3x+10)^\circ$. Find $x$ and the three angles.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Add the three expressions and set the sum equal to $180$.
2. Solve the equation and substitute back.

::solution
By the angle sum theorem for triangle $ABC$, we have
$$x+(2x-10)+(3x+10)=180.$$

Simplifying the left-hand side gives $6x=180$, so $x=30$.

Substituting $x=30$, we get $\angle A=30^\circ$, $\angle B=2\cdot30^\circ-10^\circ=50^\circ$, $\angle C=3\cdot30^\circ+10^\circ=100^\circ$.

Check: $30+50+100=180$ (correct) and all three angles are positive.

So $x=30$ and the three angles are $\angle A=30^\circ$, $\angle B=50^\circ$, $\angle C=100^\circ$.

**Answer.** $x=30$; $30^\circ$, $50^\circ$, $100^\circ$.
:::

:::exercise
Suppose Nam measures the three angles of a triangular piece of card and gets $47^\circ$, $68^\circ$, $66^\circ$. Is the measurement reasonable? If there is an error, how many degrees is it?

::hint
**What you need:** the exact angle sum of a triangle is $180^\circ$; measuring has error.

**Steps:**
1. Add the three measurements.
2. Compare with $180^\circ$.

::solution
The exact sum of the angles of a triangle is $180^\circ$. We compute the sum of Nam's measurements:
$$47^\circ+68^\circ+66^\circ=181^\circ.$$

This differs from $180^\circ$ by $181^\circ-180^\circ=1^\circ$.

A difference of $1^\circ$ is very small and within the usual error of a protractor, so the measurement is reasonable.

So Nam's measurement is reasonable and the error is $1^\circ$.

**Answer.** Reasonable; error $1^\circ$.
:::

:::exercise
Suppose the cross-section of a roof is a triangle $ABC$ with apex angle $\angle A=100^\circ$ and equal base angles, $\angle B=\angle C$. Find each base angle.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$; the base angles are equal.

**Steps:**
1. Find $\angle B+\angle C$.
2. Halve it.

::solution
In triangle $ABC$ with $\angle A=100^\circ$, the angle sum theorem gives
$$\angle B+\angle C=180^\circ-100^\circ=80^\circ.$$

Since $\angle B=\angle C$, we have $2\angle B=80^\circ$, so $\angle B=\angle C=\dfrac{80^\circ}2=40^\circ$.

So each base angle of the roof is $40^\circ$.

**Answer.** $40^\circ$.
:::

:::exercise
Let $ABC$ be a triangle. Through $A$ draw a line $d\parallel BC$. The angle between $d$ and $AB$ (alternate to $\angle B$) is $50^\circ$ and the angle between $d$ and $AC$ (alternate to $\angle C$) is $60^\circ$. Find $\angle A$. (A reminder about parallel lines.)

::hint
**What you need:** if $d\parallel BC$ then alternate angles are equal; the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Deduce $\angle B$ and $\angle C$.
2. Find $\angle A$.

::solution
Since $d\parallel BC$, the pairs of alternate angles are equal. The angle between $d$ and $AB$ is alternate to $\angle B$, so $\angle B=50^\circ$. The angle between $d$ and $AC$ is alternate to $\angle C$, so $\angle C=60^\circ$.

In triangle $ABC$, the angle sum theorem gives
$$\angle A=180^\circ-(\angle B+\angle C)=180^\circ-(50^\circ+60^\circ)=70^\circ.$$

So $\angle A=70^\circ$.

**Answer.** $\angle A=70^\circ$.
:::

:::exercise
Triangle $ABC$ has an exterior angle of $130^\circ$ at the vertex $B$ and $\angle A=45^\circ$. Find $\angle C$.

::hint
**What you need:** the exterior angle at $B$ equals the sum of the two interior angles not next to it, which are $\angle A$ and $\angle C$.

**Steps:**
1. Write the exterior angle as $\angle A+\angle C$.
2. Solve for $\angle C$.

::solution
By the exterior angle property of a triangle, the exterior angle at $B$ equals the sum of the two interior angles not adjacent to it, that is $\angle A+\angle C$.

Substituting the values, $45^\circ+\angle C=130^\circ$, so $\angle C=130^\circ-45^\circ=85^\circ$.

So $\angle C=85^\circ$.

**Answer.** $85^\circ$.
:::

:::exercise Challenge
Triangle $ABC$ has $\angle A=80^\circ$. The bisectors of $\angle B$ and $\angle C$ meet at $I$. Find $\angle BIC$, then prove that $\angle BIC=90^\circ+\dfrac12\angle A$.

::hint
**What you need:** the angle sum of a triangle; a bisector halves an angle; apply the angle sum to triangle $IBC$.

**Steps:**
1. Find $\angle B+\angle C$, then $\angle IBC+\angle ICB$.
2. Use triangle $IBC$.

::solution
In triangle $ABC$ with $\angle A=80^\circ$, the angle sum theorem gives
$$\angle B+\angle C=180^\circ-80^\circ=100^\circ.$$

Since $BI$, $CI$ bisect $\angle B$, $\angle C$, we have
$$\angle IBC+\angle ICB=\frac12\angle B+\frac12\angle C=\frac12(\angle B+\angle C)=50^\circ.$$

In triangle $IBC$, the angle sum theorem gives
$$\angle BIC=180^\circ-(\angle IBC+\angle ICB)=180^\circ-50^\circ=130^\circ.$$

General proof. By the angle sum theorem in triangle $ABC$, $\angle B+\angle C=180^\circ-\angle A$. Since $BI$, $CI$ are bisectors,
$$\angle IBC+\angle ICB=\frac12(\angle B+\angle C)=\frac12(180^\circ-\angle A)=90^\circ-\frac12\angle A.$$

In triangle $IBC$ we have
$$\angle BIC=180^\circ-\left(90^\circ-\frac12\angle A\right)=90^\circ+\frac12\angle A.$$

With $\angle A=80^\circ$ we get $90^\circ+40^\circ=130^\circ$, which matches the result above.

So $\angle BIC=130^\circ$ and $\angle BIC=90^\circ+\dfrac12\angle A$.

**Answer.** $130^\circ$; proved.
:::

## Mini test

:::quiz
::mc NB
The angles of a triangle add up to
A. $90^\circ$.
B. $180^\circ$.
C. $270^\circ$.
D. $360^\circ$.
::key B
That is the angle sum theorem. $90^\circ$ is the sum of the two acute angles of a right-angled triangle and $360^\circ$ is a full turn.

::mc TH
Triangle $ABC$ has $\angle A=50^\circ$, $\angle B=60^\circ$. Then $\angle C$ equals
A. $60^\circ$.
B. $110^\circ$.
C. $70^\circ$.
D. $130^\circ$.
::key C
$\angle C=180^\circ-(50^\circ+60^\circ)=70^\circ$. C is $180^\circ-70^\circ$, D is $180^\circ-50^\circ$.

::mc TH
Triangle $ABC$ is right-angled at $A$ and $\angle B=28^\circ$. Then $\angle C$ equals
A. $118^\circ$.
B. $152^\circ$.
C. $28^\circ$.
D. $62^\circ$.
::key D
The acute angles are complementary: $\angle C=90^\circ-28^\circ=62^\circ$. B is $180^\circ-28^\circ$.

::mc TH
Triangle $ABC$ has $\angle B=40^\circ$, $\angle C=65^\circ$. The exterior angle at the vertex $A$ equals
A. $105^\circ$.
B. $115^\circ$.
C. $75^\circ$.
D. $140^\circ$.
::key A
The exterior angle at $A$ equals $\angle B+\angle C=105^\circ$. A is the interior angle $\angle A$.

::tf VD TH TH VD
Triangle $ABC$ has $\angle A=40^\circ$ and $\angle B=\angle C$. Decide whether each statement is true or false.
a) $\angle B=80^\circ$.
b) $\angle B+\angle C=40^\circ$.
c) The exterior angle at the vertex $A$ equals $140^\circ$.
d) Triangle $ABC$ has three acute angles.
::key F F T T
We have $\angle B+\angle C=140^\circ$, so $\angle B=\angle C=70^\circ$. a) False. b) False: the sum is $140^\circ$. c) True: $180^\circ-40^\circ=140^\circ$. d) True: $40^\circ$, $70^\circ$, $70^\circ$ are all acute.

::sa TH
Triangle $ABC$ has $\angle A=75^\circ$, $\angle B=45^\circ$. Find $\angle C$ (in degrees).
::key 60
$180-(75+45)=60$.

::sa VD
The angles of a triangle are in the ratio $1:2:3$. How many degrees is the largest angle?
::key 90
$k+2k+3k=180$ so $k=30$, and the largest angle is $3k=90$.
:::
