---
title: The intercept theorem in a triangle
description: Learn the ratio of two segments, the intercept theorem and its converse in a triangle, then find lengths, prove lines parallel and solve real problems.
minutes: 35
---

:::goals
- Understand the ratio of two segments and find it when both are measured in the same unit.
- State and use the intercept theorem: a line parallel to one side of a triangle cuts the other two sides in proportional segments.
- State and use the converse of the intercept theorem to prove that two lines are parallel.
- Find lengths, prove parallelism and solve real problems with these theorems.
:::

Suppose a plot of land is a triangle $ABC$ with $AB=30$ m and $AC=24$ m. A straight path $DE$ is to be built parallel to the side $BC$ (the side next to the main road), with $D$ on $AB$, $E$ on $AC$ and $AD=12$ m.

How far from $A$ must the point $E$ be? We shall answer this with the **intercept theorem** (in Vietnam: Thales' theorem), one of the most useful results in plane geometry.

## The ratio of two segments

:::definition Ratio of two segments
The **ratio of two segments** $AB$ and $CD$ is the ratio of their lengths, when both lengths are measured in the same unit. We write it as $\dfrac{AB}{CD}$.
:::

A ratio has no unit. If two segments are measured in different units, we first convert them to the same unit and only then form the ratio.

Two pairs of segments $AB$, $CD$ and $A'B'$, $C'D'$ are called **proportional** if $\dfrac{AB}{CD}=\dfrac{A'B'}{C'D'}$. This is just a proportion, as you know from Grade 7.

## The intercept theorem

### Explore: a parallel line cutting two sides of a triangle

Take a triangle $ABC$. Choose $D$ on side $AB$ and $E$ on side $AC$ so that $DE\parallel BC$. Suppose $AD=2$ cm and $AB=5$ cm (so $DB=3$ cm). Measuring an accurate drawing, we find $AE=\dfrac{2}{5}AC$. In other words, $\dfrac{AD}{AB}=\dfrac{AE}{AC}$: the line $DE$ cuts the sides $AB$ and $AC$ in the same ratio.

:::diagram The line $DE$ is parallel to the side $BC$
alt: Triangle ABC with vertex A at the top; point D on side AB, point E on side AC, and segment DE parallel to the base BC
point A 0,6 above
point B -4,0 below-left
point C 5,0 below-right
point D -1.6,3.6 left
point E 2,3.6 right
polygon A B C
segment D E
:::

:::theorem Intercept theorem in a triangle
If a line is parallel to one side of a triangle and meets the other two sides, then it cuts those two sides in proportional segments.

For triangle $ABC$ with $D\in AB$, $E\in AC$ and $DE\parallel BC$, we have
$$\frac{AD}{AB}=\frac{AE}{AC},\qquad \frac{AD}{DB}=\frac{AE}{EC},\qquad \frac{DB}{AB}=\frac{EC}{AC}.$$
:::

At this level we accept this theorem without proof. The three equalities say the same thing: the sides $AB$ and $AC$ are cut in the same ratio. They follow from one another by the properties of proportions. For example, from $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ we get $\dfrac{AB}{AD}=\dfrac{AC}{AE}$; subtracting $1$ from both sides gives $\dfrac{AB-AD}{AD}=\dfrac{AC-AE}{AE}$, that is $\dfrac{DB}{AD}=\dfrac{EC}{AE}$, and turning both sides upside down gives $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

A tip: when forming a ratio, always compare **corresponding** segments, that is, segments that lie on the two sides in the same way (the part near $A$ with the whole side, the part near $A$ with the part far from $A$, or the part far from $A$ with the whole side).

## The converse of the intercept theorem

If we know that segments are proportional, can we deduce that two lines are parallel?

:::theorem Converse of the intercept theorem
If a line meets two sides of a triangle and cuts them in proportional corresponding segments, then it is parallel to the third side.

For triangle $ABC$ with $D\in AB$ and $E\in AC$: if $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ (or $\dfrac{AD}{DB}=\dfrac{AE}{EC}$), then $DE\parallel BC$.
:::

Why? Suppose $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Through $D$ draw the line parallel to $BC$, meeting $AC$ at $E'$. By the intercept theorem, $\dfrac{AD}{AB}=\dfrac{AE'}{AC}$. Hence $\dfrac{AE'}{AC}=\dfrac{AE}{AC}$, so $AE'=AE$. The points $E$ and $E'$ lie on the same ray $AC$ at the same distance $AE$ from $A$, so they coincide. Therefore $DE\parallel BC$.

## Examples

We start with the ratio of two segments.

:::example Finding the ratio of two segments
Let $AB=6$ cm and $CD=45$ mm. Find the ratio $\dfrac{AB}{CD}$.

**Solution.** The two segments are measured in different units, so we convert to millimetres: $AB=6$ cm $=60$ mm. Hence
$$\frac{AB}{CD}=\frac{60}{45}=\frac{4}{3}.$$

So $\dfrac{AB}{CD}=\dfrac43$.
:::

Next we use the intercept theorem to find a length.

:::example Using $\dfrac{AD}{DB}=\dfrac{AE}{EC}$
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Given $AD=4$ cm, $DB=6$ cm and $AE=5$ cm, find $EC$ and $AC$.

**Solution.** Since $DE\parallel BC$, the intercept theorem gives
$$\frac{AD}{DB}=\frac{AE}{EC},\quad\text{that is}\quad \frac{4}{6}=\frac{5}{EC}.$$
So $EC=\dfrac{5\cdot6}{4}=7.5$ (cm). Hence $AC=AE+EC=5+7.5=12.5$ (cm).

So $EC=7.5$ cm and $AC=12.5$ cm.
:::

Now we use a ratio with the whole side.

:::example Using $\dfrac{AD}{AB}=\dfrac{AE}{AC}$
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Given $AD=4$ cm, $AB=10$ cm and $AC=15$ cm, find $AE$ and $EC$.

**Solution.** Since $DE\parallel BC$, the intercept theorem gives
$$\frac{AD}{AB}=\frac{AE}{AC},\quad\text{that is}\quad \frac{4}{10}=\frac{AE}{15}.$$
So $AE=\dfrac{4\cdot15}{10}=6$ (cm). Hence $EC=AC-AE=15-6=9$ (cm).

So $AE=6$ cm and $EC=9$ cm.
:::

Now we prove that two lines are parallel.

:::example Proving parallel lines
Triangle $ABC$ has $AB=9$ cm and $AC=12$ cm. On $AB$ take $D$ with $DB=6$ cm, and on $AC$ take $E$ with $EC=8$ cm. Prove that $DE\parallel BC$.

**Solution.** We have $AD=AB-DB=9-6=3$ (cm) and $AE=AC-EC=12-8=4$ (cm). Then
$$\frac{AD}{DB}=\frac{3}{6}=\frac12,\qquad \frac{AE}{EC}=\frac{4}{8}=\frac12.$$
So $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, and by the converse of the intercept theorem, $DE\parallel BC$.
:::

What happens when the ratios are not equal?

:::example Lines that are not parallel
In triangle $ABC$, $D\in AB$ and $E\in AC$ with $AD=2$ cm, $DB=4$ cm, $AE=3$ cm and $EC=5$ cm. Is $DE$ parallel to $BC$?

**Solution.** We have
$$\frac{AD}{DB}=\frac{2}{4}=\frac{5}{10},\qquad \frac{AE}{EC}=\frac35=\frac{6}{10}.$$
Since $\dfrac{5}{10}\ne\dfrac{6}{10}$, that is $\dfrac12\ne\dfrac35$, we have $\dfrac{AD}{DB}\ne\dfrac{AE}{EC}$. If $DE\parallel BC$, the intercept theorem would make these two ratios equal, and they are not.

So $DE$ is not parallel to $BC$.
:::

Finally, the plot of land from the start of the lesson.

:::example A path parallel to the main road (Application)
Suppose a triangular plot $ABC$ has $AB=30$ m and $AC=24$ m. A straight path $DE$ is built parallel to $BC$, with $D\in AB$, $E\in AC$ and $AD=12$ m. Find $AE$ and $EC$.

**Solution.**

*Understand.* The path $DE$ is parallel to the side $BC$ and meets the sides $AB$ and $AC$. We know $AB$, $AC$ and $AD$, and we want $AE$ and $EC$.

*Plan.* Since $DE\parallel BC$, we use the intercept theorem. The known segments are $AD$, $AB$ and $AC$, so we choose the ratio $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ to find $AE$.

*Carry out.* Since $DE\parallel BC$, $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, that is $\dfrac{12}{30}=\dfrac{AE}{24}$. So
$$AE=\frac{12\cdot24}{30}=9.6\ (\text{m}).$$
Hence $EC=AC-AE=24-9.6=14.4$ (m).

So $AE=9.6$ m and $EC=14.4$ m.

*Look back.* Check with the other ratio: $DB=30-12=18$ m, $\dfrac{AD}{DB}=\dfrac{12}{18}=\dfrac23$ and $\dfrac{AE}{EC}=\dfrac{9.6}{14.4}=\dfrac23$. The two ratios are equal, so the answer is correct.
:::

:::warning Common mistakes
- **Mixing up the ratios.** Wrong: $\dfrac{AD}{DB}=\dfrac{AE}{AC}$. Why it is wrong: the left side compares a part with a part, the right side compares a part with the whole side. Right: $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ or $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.
- **Using the theorem without parallel lines.** Wrong: take any $D\in AB$ and $E\in AC$ and write $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Why it is wrong: this equality holds only when $DE\parallel BC$. Right: first make sure that $DE\parallel BC$, then write the ratios.
- **Forming a ratio with different units.** Wrong: $\dfrac{6\text{ cm}}{45\text{ mm}}=\dfrac{6}{45}$. Why it is wrong: the lengths are not in the same unit, so $6$ and $45$ cannot be compared. Right: convert $6$ cm $=60$ mm and form $\dfrac{60}{45}=\dfrac43$.
- **Comparing segments that do not correspond in the converse.** Wrong: conclude $DE\parallel BC$ from $\dfrac{AD}{AB}=\dfrac{EC}{AC}$. Why it is wrong: $EC$ is the part far from $A$, but $AD$ is the part near $A$, so they do not correspond. Right: compare $\dfrac{AD}{AB}$ with $\dfrac{AE}{AC}$, or $\dfrac{AD}{DB}$ with $\dfrac{AE}{EC}$.
:::

**Connection.** The intercept theorem uses proportions from Grade 7 and simple equation solving. It is also the foundation of the next lesson: when $D$ and $E$ are the midpoints of $AB$ and $AC$, we have $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac12$, and we get the midsegment of a triangle.

## Key terms

:::terms
- ratio | tỉ số
- proportional segments | đoạn thẳng tỉ lệ
- proportion | tỉ lệ thức
- parallel | song song
- intercept theorem (Thales' theorem) | định lí Thalès
- converse of the intercept theorem | định lí Thalès đảo
- unit of measurement | đơn vị đo
- side | cạnh
- corresponding | tương ứng
:::

## Summary

- The ratio of two segments is the ratio of their lengths in the same unit; a ratio has no unit.
- Intercept theorem: if $DE\parallel BC$ with $D\in AB$, $E\in AC$, then $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ and $\dfrac{DB}{AB}=\dfrac{EC}{AC}$.
- Converse: if $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ (or $\dfrac{AD}{DB}=\dfrac{AE}{EC}$), then $DE\parallel BC$.
- When forming ratios, use corresponding segments in the same unit.
- To find a length, use the intercept theorem; to prove lines parallel, use its converse.

## Practice

Each exercise has the key facts and a hint on the steps. Try it yourself first, then open the solution.

:::exercise
Let $AB=15$ cm and $CD=1.2$ dm. Find the ratio $\dfrac{AB}{CD}$.

::hint
**What you need:** a ratio of two segments needs both lengths in the same unit.

**Steps:**
1. Convert $CD$ to centimetres.
2. Form the ratio and simplify.

::solution
We have $CD=1.2$ dm $=12$ cm. Hence $\dfrac{AB}{CD}=\dfrac{15}{12}=\dfrac54$.

So $\dfrac{AB}{CD}=\dfrac54$.

**Answer.** $\dfrac54$.
:::

:::exercise
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Given $AD=6$ cm, $DB=9$ cm and $AE=4$ cm, find $EC$.

::hint
**What you need:** the intercept theorem: $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Steps:**
1. Write the equal ratios.
2. Substitute and find $EC$.

::solution
Since $DE\parallel BC$, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, that is $\dfrac{6}{9}=\dfrac{4}{EC}$. So $EC=\dfrac{4\cdot9}{6}=6$ (cm).

So $EC=6$ cm.

**Answer.** $EC=6$ cm.
:::

:::exercise
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Given $AB=12$ cm, $AD=5$ cm and $AC=18$ cm, find $AE$ and $EC$.

::hint
**What you need:** the intercept theorem: $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.

**Steps:**
1. Find $AE$ from the ratio $\dfrac{AD}{AB}$.
2. Find $EC=AC-AE$.

::solution
Since $DE\parallel BC$, $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, that is $\dfrac{5}{12}=\dfrac{AE}{18}$. So $AE=\dfrac{5\cdot18}{12}=7.5$ (cm). Hence $EC=18-7.5=10.5$ (cm).

So $AE=7.5$ cm and $EC=10.5$ cm.

**Answer.** $AE=7.5$ cm; $EC=10.5$ cm.
:::

:::exercise
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Given $AD=x$ cm, $DB=3$ cm, $AE=4$ cm and $EC=6$ cm, find $x$.

::hint
**What you need:** $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Steps:**
1. Substitute the numbers into the proportion.
2. Solve for $x$.

::solution
Since $DE\parallel BC$, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, that is $\dfrac{x}{3}=\dfrac{4}{6}$. So $x=\dfrac{3\cdot4}{6}=2$.

So $x=2$ (cm).

**Answer.** $x=2$.
:::

:::exercise
Triangle $ABC$ has $AB=15$ cm and $AC=20$ cm. On $AB$ take $D$ with $AD=6$ cm, and on $AC$ take $E$ with $AE=8$ cm. Prove that $DE\parallel BC$.

::hint
**What you need:** the converse of the intercept theorem: if $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, then $DE\parallel BC$.

**Steps:**
1. Find $\dfrac{AD}{AB}$ and $\dfrac{AE}{AC}$.
2. Compare the two ratios and conclude.

::solution
We have $\dfrac{AD}{AB}=\dfrac{6}{15}=\dfrac25$ and $\dfrac{AE}{AC}=\dfrac{8}{20}=\dfrac25$. The two ratios are equal, so by the converse of the intercept theorem, $DE\parallel BC$.

**Answer.** $DE\parallel BC$.
:::

:::exercise
In triangle $ABC$, $D\in AB$ and $E\in AC$ with $AD=4$ cm, $DB=6$ cm, $AE=5$ cm and $EC=8$ cm. Is $DE$ parallel to $BC$? Why?

::hint
**What you need:** if $DE\parallel BC$, then $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Steps:**
1. Find the two ratios $\dfrac{AD}{DB}$ and $\dfrac{AE}{EC}$.
2. Compare them and conclude.

::solution
We have $\dfrac{AD}{DB}=\dfrac46=\dfrac23$ and $\dfrac{AE}{EC}=\dfrac58$. Since $\dfrac23=\dfrac{16}{24}$ and $\dfrac58=\dfrac{15}{24}$, the two ratios are not equal. If $DE\parallel BC$, the intercept theorem would make them equal.

So $DE$ is not parallel to $BC$.

**Answer.** Not parallel.
:::

:::exercise
Suppose a triangular roof frame $ABC$ has $AB=6$ m and $AC=5$ m. A crossbar $DE$ is fixed parallel to $BC$, with $D\in AB$, $E\in AC$ and $AD=2.4$ m. Find $AE$ and $EC$.

::hint
**What you need:** the intercept theorem: $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.

**Steps:**
1. Find $AE$.
2. Find $EC=AC-AE$.

::solution
Since $DE\parallel BC$, $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, that is $\dfrac{2.4}{6}=\dfrac{AE}{5}$. So $AE=\dfrac{2.4\cdot5}{6}=2$ (m). Hence $EC=5-2=3$ (m).

So $AE=2$ m and $EC=3$ m.

**Answer.** $AE=2$ m; $EC=3$ m.
:::

:::exercise
Suppose a triangular garden $ABC$ has $AC=25$ m. A string $DE$ is stretched parallel to $BC$ ($D\in AB$, $E\in AC$) so that $\dfrac{AD}{DB}=\dfrac23$. Find $AE$ and $EC$.

::hint
**What you need:** the intercept theorem: $\dfrac{AE}{EC}=\dfrac{AD}{DB}$; $AE+EC=AC$.

**Steps:**
1. Write $AE=2k$ and $EC=3k$ with $k>0$.
2. Use $AE+EC=25$ to find $k$.

::solution
Since $DE\parallel BC$, $\dfrac{AE}{EC}=\dfrac{AD}{DB}=\dfrac23$. Let $AE=2k$ and $EC=3k$ (with $k>0$). Since $AE+EC=AC=25$, we get $5k=25$, so $k=5$. Hence $AE=10$ m and $EC=15$ m.

So $AE=10$ m and $EC=15$ m.

**Answer.** $AE=10$ m; $EC=15$ m.
:::

:::exercise
Recall the lesson on rhombuses. Rhombus $ABCD$ has side $9$ cm. Take $M$ on $AB$ and $N$ on $AD$ so that $AM=AN=3$ cm. Prove that $MN\parallel BD$ and $MN\perp AC$.

::hint
**What you need:** the converse of the intercept theorem in triangle $ABD$; the diagonals of a rhombus are perpendicular; a line perpendicular to one of two parallel lines is perpendicular to the other.

**Steps:**
1. Find $\dfrac{AM}{AB}$ and $\dfrac{AN}{AD}$.
2. Conclude $MN\parallel BD$, then use $AC\perp BD$.

::solution
Rhombus $ABCD$ has $AB=AD=9$ cm. In triangle $ABD$, $\dfrac{AM}{AB}=\dfrac39=\dfrac13$ and $\dfrac{AN}{AD}=\dfrac39=\dfrac13$. The two ratios are equal, so by the converse of the intercept theorem, $MN\parallel BD$.

The diagonals of a rhombus are perpendicular, so $AC\perp BD$. Since $MN\parallel BD$, we get $AC\perp MN$.

So $MN\parallel BD$ and $MN\perp AC$.

**Answer.** $MN\parallel BD$; $MN\perp AC$.
:::

:::exercise Challenge
In triangle $ABC$, $D\in AB$ and $E\in AC$ with $DE\parallel BC$. Through $D$ draw the line parallel to $AC$, meeting $BC$ at $F$. Prove that
$$\frac{AE}{AC}+\frac{BF}{BC}=1.$$

::hint
**What you need:** the intercept theorem for $DE\parallel BC$ in triangle $ABC$ and for $DF\parallel AC$ in triangle $BAC$.

**Steps:**
1. Write $\dfrac{AE}{AC}$ in terms of $AD$ and $AB$.
2. Write $\dfrac{BF}{BC}$ in terms of $BD$ and $BA$.
3. Add the two ratios, remembering that $AD+DB=AB$.

::solution
Since $DE\parallel BC$, the intercept theorem in triangle $ABC$ gives $\dfrac{AE}{AC}=\dfrac{AD}{AB}$.

In triangle $BAC$, $D\in BA$, $F\in BC$ and $DF\parallel AC$, so the intercept theorem gives $\dfrac{BF}{BC}=\dfrac{BD}{BA}$.

Adding the two equalities, we get
$$\frac{AE}{AC}+\frac{BF}{BC}=\frac{AD}{AB}+\frac{BD}{AB}=\frac{AD+BD}{AB}=\frac{AB}{AB}=1.$$

So $\dfrac{AE}{AC}+\dfrac{BF}{BC}=1$.

**Answer.** The equality is proved.
:::

## Mini test

:::quiz
::mc
Let $AB=3$ dm and $CD=15$ cm. The ratio $\dfrac{AB}{CD}$ is
A. $\dfrac12$.
B. $5$.
C. $2$.
D. $\dfrac15$.
::key C
Converting, $AB=3$ dm $=30$ cm, so $\dfrac{AB}{CD}=\dfrac{30}{15}=2$. A is the reciprocal, and B and D come from a wrong unit.

::mc
In triangle $ABC$, $D\in AB$, $E\in AC$, $DE\parallel BC$, $AD=3$ cm, $DB=6$ cm and $AE=2$ cm. The length $EC$ is
A. $1$ cm.
B. $3$ cm.
C. $6$ cm.
D. $4$ cm.
::key D
By the intercept theorem, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, so $EC=\dfrac{2\cdot6}{3}=4$ cm. A is $AE:2$, B is $AD$ and C is $DB$.

::mc
In triangle $ABC$, $D\in AB$, $E\in AC$ and $DE\parallel BC$. Which equality is correct?
A. $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.
B. $\dfrac{AD}{DB}=\dfrac{AE}{AC}$.
C. $\dfrac{AD}{AB}=\dfrac{EC}{AC}$.
D. $\dfrac{AB}{DB}=\dfrac{AE}{EC}$.
::key A
The intercept theorem gives $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. In B, C and D the segments on the two sides do not correspond.

::mc
In triangle $ABC$, $D\in AB$ and $E\in AC$. In which case is $DE\parallel BC$ certain?
A. $AD=2$, $AB=6$, $AE=2$, $AC=9$.
B. $AD=2$, $AB=6$, $AE=3$, $AC=9$.
C. $AD=3$, $DB=6$, $AE=4$, $EC=6$.
D. $AD=2$, $DB=4$, $AE=2$, $EC=6$.
::key B
In C, $\dfrac{AD}{AB}=\dfrac26=\dfrac13$ and $\dfrac{AE}{AC}=\dfrac39=\dfrac13$, so the lines are parallel by the converse of the intercept theorem. In A, $\dfrac13\ne\dfrac29$; in B, $\dfrac12\ne\dfrac23$; in D, $\dfrac12\ne\dfrac13$.

::tf
Triangle $ABC$ has $AB=12$ cm and $AC=15$ cm; $D\in AB$ with $AD=4$ cm and $E\in AC$ with $AE=6$ cm.
a) $\dfrac{AD}{AB}=\dfrac13$.
b) $\dfrac{AE}{AC}=\dfrac25$.
c) $DE\parallel BC$.
d) $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.
::key T T F F
a) True: $\dfrac4{12}=\dfrac13$. b) True: $\dfrac6{15}=\dfrac25$. c) False: $\dfrac13\ne\dfrac25$, so the lines are not parallel. d) False: $\dfrac{AD}{DB}=\dfrac48=\dfrac12$ but $\dfrac{AE}{EC}=\dfrac69=\dfrac23$.

::sa
In triangle $ABC$, $DE\parallel BC$ ($D\in AB$, $E\in AC$), $AD=4$ cm, $AB=10$ cm and $AC=15$ cm. Find $AE$ (cm).
::key 6
$\dfrac{AE}{15}=\dfrac4{10}$, so $AE=6$ cm.

::sa
In triangle $ABC$, $DE\parallel BC$ ($D\in AB$, $E\in AC$), $AD=2$ cm, $DB=3$ cm and $AC=10$ cm. Find $AE$ (cm).
::key 4
$\dfrac{AD}{AB}=\dfrac25$, so $AE=\dfrac25\cdot10=4$ cm.
:::
