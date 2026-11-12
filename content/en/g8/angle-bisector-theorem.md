---
title: The angle bisector theorem
description: The bisector of an angle of a triangle divides the opposite side in the ratio of the two adjacent sides. Learn why, and use it to find lengths.
minutes: 20
---

:::goals
- State the angle bisector theorem: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- Understand why it is true (using areas of triangles).
- Find lengths in a triangle when an angle bisector is given.
- Apply it to real-life problems and combine it with the intercept theorem to solve geometry problems.
:::

The property of the angle bisector appears in Euclid's *Elements* more than $2000$ years ago (Book VI, Proposition 3). The ancient surveyors needed it to divide land and to construct figures, and today it still helps us divide a plot of land, a piece of cloth or a design in a given ratio.

Suppose Mr Hai owns a triangular plot $ABC$ with $AB=12$ m, $AC=18$ m and $BC=20$ m, and the side $BC$ runs along a canal bank. He wants a straight path from corner $A$ to the canal that splits angle $A$ into two equal angles. The path meets the bank at a point $D$. How far is $D$ from $B$? Is $D$ the midpoint of $BC$?

## Let's explore

Draw triangle $ABC$ with $AB=6$ cm, $AC=9$ cm and $BC=10$ cm, then draw the bisector of angle $A$, meeting $BC$ at $D$. Measuring with a ruler, you will find $DB\approx4$ cm and $DC\approx6$ cm.

:::diagram The bisector $AD$ of triangle $ABC$
alt: Triangle ABC with the bisector AD of angle A meeting side BC at D; the angles BAD and DAC are marked as equal
point B 0,0 below-left
point C 10,0 below-right
point A 2.75,5.33 above
point D 4,0 below
polygon A B C
segment A D
angle B A D "α"
angle D A C "α"
:::

Notice that $\dfrac{DB}{DC}=\dfrac46=\dfrac23$ and $\dfrac{AB}{AC}=\dfrac69=\dfrac23$. The two ratios are equal! Is this true for every triangle? We state it as a theorem.

:::theorem The angle bisector theorem
In triangle $ABC$, the bisector of angle $A$ meets side $BC$ at $D$. Then $D$ divides $BC$ into two segments in the same ratio as the two adjacent sides:
$$\frac{DB}{DC}=\frac{AB}{AC}.$$
:::

**Why?** Triangles $ABD$ and $ACD$ have the same height from $A$, so the ratio of their areas equals the ratio of their bases:
$$\frac{S_{ABD}}{S_{ACD}}=\frac{DB}{DC}.$$
On the other hand, $D$ lies on the bisector of angle $A$, so $D$ is the same distance from $AB$ and from $AC$; call this distance $h$. Taking $AB$ and $AC$ as bases, the two triangles have the same height $h$ from $D$, so
$$\frac{S_{ABD}}{S_{ACD}}=\frac{\frac12\cdot AB\cdot h}{\frac12\cdot AC\cdot h}=\frac{AB}{AC}.$$
Both expressions equal $\dfrac{S_{ABD}}{S_{ACD}}$, so $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Going deeper.** The shorter side goes with the shorter segment: if $AB<AC$ then $DB<DC$, so $D$ is closer to $B$. Only when $AB=AC$ is $D$ the midpoint of $BC$. So an angle bisector is in general **not** the same as a median.

:::note A quick way to calculate
From $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ and $DB+DC=BC$ we get
$$DB=BC\cdot\frac{AB}{AB+AC},\qquad DC=BC\cdot\frac{AC}{AB+AC}.$$
:::

## Examples

We start with a direct calculation.

:::example Finding two lengths
In triangle $ABC$, $AB=8$, $AC=12$ and $BC=15$. The bisector $AD$ meets $BC$ at $D$. Find $DB$ and $DC$.

**Solution.** Since $AD$ is the bisector of angle $A$, we have
$$\frac{DB}{DC}=\frac{AB}{AC}=\frac{8}{12}=\frac23.$$
Hence $DB=\dfrac{2}{2+3}\cdot BC=\dfrac25\cdot15=6$ and $DC=15-6=9$.

So $DB=6$ and $DC=9$.
:::

The theorem also works backwards: from the two segments on $BC$ we can find a side.

:::example Finding a side
In triangle $ABC$, $AB=6$. The bisector $AD$ meets $BC$ at $D$ with $DB=3$ and $DC=4.5$. Find $AC$.

**Solution.** Since $AD$ is the bisector, $\dfrac{AB}{AC}=\dfrac{DB}{DC}$. Substituting, we get
$$\frac{6}{AC}=\frac{3}{4.5}\ \Rightarrow\ AC=\frac{6\cdot4.5}{3}=9.$$

So $AC=9$.
:::

In a right-angled triangle we also need Pythagoras' theorem to find the third side.

:::example A right-angled triangle
In triangle $ABC$, the angle at $A$ is a right angle, $AB=6$ cm and $AC=8$ cm. The bisector $AD$ meets $BC$ at $D$. Find $DB$ and $DC$.

**Solution.** By Pythagoras' theorem, $BC^2=AB^2+AC^2=36+64=100$, so $BC=10$ cm. Since $AD$ is the bisector,
$$DB=BC\cdot\frac{AB}{AB+AC}=10\cdot\frac{6}{14}=\frac{30}{7},\qquad DC=10-\frac{30}{7}=\frac{40}{7}.$$

So $DB=\dfrac{30}{7}$ cm and $DC=\dfrac{40}{7}$ cm.
:::

Now we combine the theorem with the intercept theorem (in Vietnam: Thales' theorem) for a line parallel to a side.

:::example Combining with the intercept theorem
In triangle $ABC$, $AB=9$, $AC=12$ and $BC=14$. The bisector $AD$ meets $BC$ at $D$. The line through $D$ parallel to $AB$ meets $AC$ at $E$. Find $DE$.

**Solution.** Since $AD$ is the bisector, $\dfrac{DB}{DC}=\dfrac{AB}{AC}=\dfrac{9}{12}=\dfrac34$. Hence $DC=\dfrac47\cdot14=8$.

In triangle $ABC$ we have $DE\parallel AB$, so by the intercept theorem
$$\frac{DE}{AB}=\frac{CD}{CB}\ \Rightarrow\ DE=9\cdot\frac{8}{14}=\frac{36}{7}.$$

So $DE=\dfrac{36}{7}$.
:::

Finally we return to the plot at the start, using the four steps of solving a problem.

:::example Mr Hai's plot
The triangular plot $ABC$ has $AB=12$ m, $AC=18$ m and $BC=20$ m. The path $AD$ bisects angle $A$ ($D$ on $BC$). Find $DB$ and $DC$.

**Solution.**

*Understand.* We know the three sides; $AD$ is an angle bisector; we need the two parts $DB$ and $DC$ of side $BC$.

*Plan.* An angle bisector divides the opposite side in the ratio of the adjacent sides, so we use $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

*Solve.* We have $\dfrac{DB}{DC}=\dfrac{12}{18}=\dfrac23$. So $DB=\dfrac{2}{5}\cdot20=8$ (m) and $DC=20-8=12$ (m).

*Look back.* Check: $8+12=20$ and $\dfrac{8}{12}=\dfrac{12}{18}$. The point $D$ is not the midpoint of $BC$ because $AB\neq AC$. What if the data change? If $AC$ were longer while $AB$ and $BC$ stay the same, $DB$ would get smaller, so the foot of the path moves towards $B$. This makes sense because the path always leans towards the shorter side.
:::

:::warning Mistakes to watch out for
- **Writing the ratio upside down.** Wrong: $\dfrac{DB}{DC}=\dfrac{AC}{AB}$. Why it is wrong: with $AB=6$ and $AC=9$ it would give $DB>DC$, but $AB<AC$ must give $DB<DC$. Right: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- **Comparing one segment with the whole side $BC$.** Wrong: $\dfrac{DB}{BC}=\dfrac{AB}{AC}$. Why it is wrong: this compares $DB$ with $BC=DB+DC$, not with $DC$. Right: $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.
- **Assuming $D$ is the midpoint of $BC$.** Wrong: "$AD$ is a bisector, so $DB=DC$". Why it is wrong: this holds only when $AB=AC$. Right: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
:::

**Connections.** This lesson builds on angle bisectors, areas of triangles and the intercept theorem. It prepares the lesson on [similar triangles](lesson:similar-triangles), where ratios of corresponding lengths become the main tool.

## Key terms

:::terms
- angle bisector | đường phân giác
- angle bisector theorem | tính chất đường phân giác
- adjacent sides | hai cạnh kề
- opposite side | cạnh đối diện
- ratio | tỉ số
- proportion | tỉ lệ thức
- intercept theorem | định lí Thalès
- parallel line | đường thẳng song song
- area | diện tích
:::

## Summary

- If $AD$ is the bisector of angle $A$ in triangle $ABC$ ($D$ on $BC$), then $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- Reason: triangles $ABD$ and $ACD$ have an area ratio equal to $\dfrac{DB}{DC}$ (same height from $A$) and also to $\dfrac{AB}{AC}$ ($D$ is equidistant from $AB$ and $AC$).
- Quick formulas: $DB=BC\cdot\dfrac{AB}{AB+AC}$, $DC=BC\cdot\dfrac{AC}{AB+AC}$.
- The point $D$ lies closer to the vertex with the shorter adjacent side; $D$ is the midpoint of $BC$ if and only if $AB=AC$.
- The theorem combines well with the intercept theorem and Pythagoras' theorem in multi-step problems.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
In triangle $ABC$, $AB=4$ and $AC=6$. The bisector $AD$ ($D$ on $BC$) has $DB=2$. Find $DC$.

::hint
**What you need:** $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Steps:**
1. Write the proportion with the given numbers.
2. Solve for $DC$.

::solution
Since $AD$ is the bisector, $\dfrac{DB}{DC}=\dfrac{AB}{AC}$, that is $\dfrac{2}{DC}=\dfrac46$. Hence $DC=\dfrac{2\cdot6}{4}=3$.

So $DC=3$.

**Answer.** $DC=3$.
:::

:::exercise
In triangle $ABC$, $AB=10$, $AC=14$ and $BC=18$. The bisector $AD$ meets $BC$ at $D$. Find $DB$ and $DC$.

::hint
**What you need:** $DB=BC\cdot\dfrac{AB}{AB+AC}$.

**Steps:**
1. Work out $AB+AC$.
2. Find $DB$, then $DC=BC-DB$.

::solution
Since $AD$ is the bisector, $DB=18\cdot\dfrac{10}{24}=7.5$. Hence $DC=18-7.5=10.5$.

So $DB=7.5$ and $DC=10.5$.

**Answer.** $DB=7.5$; $DC=10.5$.
:::

:::exercise
In triangle $ABC$, $AB=7.5$. The bisector $AD$ ($D$ on $BC$) has $DB=4.5$ and $DC=6$. Find $AC$.

::hint
**What you need:** $\dfrac{AB}{AC}=\dfrac{DB}{DC}$.

**Steps:**
1. Write the proportion $\dfrac{7.5}{AC}=\dfrac{4.5}{6}$.
2. Use the properties of proportions to find $AC$.

::solution
Since $AD$ is the bisector, $\dfrac{AB}{AC}=\dfrac{DB}{DC}$, that is $\dfrac{7.5}{AC}=\dfrac{4.5}{6}$. Hence $AC=\dfrac{7.5\cdot6}{4.5}=10$.

So $AC=10$.

**Answer.** $AC=10$.
:::

:::exercise
Triangle $ABC$ is isosceles with $AB=AC=10$ cm and $BC=12$ cm. The bisector $AD$ meets $BC$ at $D$. Prove that $D$ is the midpoint of $BC$ and $AD\perp BC$, then find $AD$. (Revise [Pythagoras' theorem](lesson:pythagoras-theorem).)

::hint
**What you need:** the angle bisector theorem; congruent triangles; Pythagoras' theorem.

**Steps:**
1. Use $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ with $AB=AC$.
2. Consider triangles $ABD$ and $ACD$ to prove $AD\perp BC$.
3. Apply Pythagoras' theorem to triangle $ABD$.

::solution
Since $AD$ is the bisector, $\dfrac{DB}{DC}=\dfrac{AB}{AC}=1$, so $DB=DC=6$ cm. Hence $D$ is the midpoint of $BC$.

Consider triangles $ABD$ and $ACD$. We have $AB=AC$, $DB=DC$ and $AD$ is common, so $\triangle ABD\equiv\triangle ACD$ (SSS). Hence $\angle ADB=\angle ADC$; these angles are on a straight line, so each is $90^\circ$, that is $AD\perp BC$.

In triangle $ABD$, right-angled at $D$, Pythagoras' theorem gives $AD^2=AB^2-DB^2=100-36=64$, so $AD=8$ cm.

So $D$ is the midpoint of $BC$, $AD\perp BC$ and $AD=8$ cm.

**Answer.** $AD=8$ cm.
:::

:::exercise
A triangular piece of cloth $ABC$ has $AB=90$ cm, $AC=120$ cm and $BC=105$ cm. A tailor folds the cloth so that side $AB$ lies along side $AC$; the crease $AD$ meets $BC$ at $D$. Find $DB$ and $DC$.

::hint
**What you need:** when $AB$ is folded onto $AC$, the crease $AD$ is the bisector of angle $A$.

**Steps:**
1. Recognise that $AD$ is an angle bisector.
2. Apply $DB=BC\cdot\dfrac{AB}{AB+AC}$.

::solution
The crease $AD$ is the bisector of angle $A$, so
$$DB=105\cdot\frac{90}{90+120}=45\ \text{(cm)},\qquad DC=105-45=60\ \text{(cm)}.$$

So $DB=45$ cm and $DC=60$ cm.

**Answer.** $DB=45$ cm; $DC=60$ cm.
:::

:::exercise
In triangle $ABC$, $AD$ is the bisector of angle $A$ ($D$ on $BC$). Prove that $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.

::hint
**What you need:** $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ and the property of equal ratios.

**Steps:**
1. From $\dfrac{DB}{AB}=\dfrac{DC}{AC}$, add numerators and add denominators.
2. Use $DB+DC=BC$.

::solution
Since $AD$ is the bisector, $\dfrac{DB}{DC}=\dfrac{AB}{AC}$, so $\dfrac{DB}{AB}=\dfrac{DC}{AC}$. By the property of equal ratios,
$$\frac{DB}{AB}=\frac{DC}{AC}=\frac{DB+DC}{AB+AC}=\frac{BC}{AB+AC}.$$
Hence $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.

**Answer.** Proved.
:::

:::exercise
In triangle $ABC$, $AB=10$, $AC=15$ and $BC=20$. The bisector $AD$ meets $BC$ at $D$. The line through $D$ parallel to $AB$ meets $AC$ at $E$. Find $DE$.

::hint
**What you need:** the angle bisector theorem and the intercept theorem.

**Steps:**
1. Find $DC$.
2. Write $\dfrac{DE}{AB}=\dfrac{CD}{CB}$.

::solution
Since $AD$ is the bisector, $DC=20\cdot\dfrac{15}{25}=12$. Since $DE\parallel AB$, the intercept theorem gives $\dfrac{DE}{AB}=\dfrac{CD}{CB}=\dfrac{12}{20}$. Hence $DE=10\cdot\dfrac{12}{20}=6$.

So $DE=6$.

**Answer.** $DE=6$.
:::

:::exercise
Triangle $ABC$ has $AB=6$ cm, $AC=10$ cm and area $48$ cm². The bisector $AD$ meets $BC$ at $D$. Find the areas of triangles $ABD$ and $ACD$.

::hint
**What you need:** $\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Steps:**
1. Find the ratio $\dfrac{S_{ABD}}{S_{ACD}}$.
2. Share $48$ cm² in that ratio.

::solution
We have $\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{AB}{AC}=\dfrac{6}{10}=\dfrac35$ and $S_{ABD}+S_{ACD}=48$. Hence $S_{ABD}=\dfrac38\cdot48=18$ (cm²) and $S_{ACD}=48-18=30$ (cm²).

So $S_{ABD}=18$ cm² and $S_{ACD}=30$ cm².

**Answer.** $18$ cm²; $30$ cm².
:::

:::exercise Challenge
In triangle $ABC$, $AD$ is the bisector of angle $A$ ($D$ on $BC$). The line through $D$ parallel to $AB$ meets $AC$ at $E$.

a) Prove that $EA=ED$.

b) Given $AB=12$ and $AC=20$, find $AE$.

::hint
**What you need:** equal alternate angles; isosceles triangles; the intercept theorem.

**Steps:**
1. a) Compare $\angle EDA$ with $\angle BAD$, then with $\angle EAD$.
2. b) Let $AE=x$ and write $\dfrac{DE}{AB}=\dfrac{CE}{CA}$ with $DE=x$, $CE=20-x$.

::solution
a) Since $DE\parallel AB$, we have $\angle EDA=\angle BAD$ (alternate angles). Since $AD$ is the bisector, $\angle BAD=\angle EAD$. Hence $\angle EDA=\angle EAD$, so triangle $EAD$ is isosceles at $E$, that is $EA=ED$.

b) Let $AE=x$ ($0<x<20$). Then $DE=x$ and $CE=20-x$. Since $DE\parallel AB$, we have $\dfrac{DE}{AB}=\dfrac{CE}{CA}$, that is
$$\frac{x}{12}=\frac{20-x}{20}\ \Rightarrow\ 20x=240-12x\ \Rightarrow\ x=\frac{240}{32}=7.5.$$

So $AE=7.5$.

**Answer.** a) Proved. b) $AE=7.5$.
:::

## Mini test

:::quiz
::mc
In triangle $ABC$, $AB=6$, $AC=10$ and $BC=12$. The bisector $AD$ meets $BC$ at $D$. The length $DB$ is
A. $7.5$.
B. $7.2$.
C. $6$.
D. $4.5$.
::key D
$DB=12\cdot\dfrac{6}{16}=4.5$. A is $DC$, C is half of $BC$ (assuming $D$ is the midpoint), B is $BC\cdot\dfrac{AB}{AC}$ (forgetting to add in the denominator).

::mc
In triangle $ABC$, $AB=9$. The bisector $AD$ meets $BC$ at $D$ with $DB=3$ and $DC=5$. The length $AC$ is
A. $15$.
B. $12$.
C. $14$.
D. $5.4$.
::key A
$\dfrac{AB}{AC}=\dfrac{DB}{DC}$, so $AC=9\cdot\dfrac53=15$. A has the ratio upside down; B and C add instead of multiplying.

::mc
In triangle $ABC$, $AB=AC$. The bisector $AD$ meets $BC$ at $D$. Which statement is true?
A. $DB=AB$.
B. $D$ is the midpoint of $BC$.
C. $AD=AB$.
D. $DB<DC$.
::key B
$\dfrac{DB}{DC}=\dfrac{AB}{AC}=1$, so $DB=DC$. Statements B, C and D do not follow from the angle bisector theorem.

::mc
In triangle $ABC$, $AB=4$ and $AC=6$. The bisector $AD$ meets $BC$ at $D$, and $S_{ABD}=12$. The area $S_{ACD}$ is
A. $8$.
B. $16$.
C. $18$.
D. $24$.
::key C
$\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{AB}{AC}=\dfrac23$, so $S_{ACD}=12\cdot\dfrac32=18$. A has the ratio upside down, B adds $12+4$, D doubles $12$.

::tf
In triangle $ABC$, $AB=9$, $AC=12$ and $BC=14$. The bisector $AD$ meets $BC$ at $D$. Decide whether each statement is true or false.
a) $D$ is the midpoint of $BC$.
b) $\dfrac{DB}{DC}=\dfrac34$.
c) $DB=6$.
d) $DC=6$.
::key F T T F
a) False: $AB\neq AC$, so $DB\neq DC$. b) True: $\dfrac{DB}{DC}=\dfrac{9}{12}=\dfrac34$. c) True: $DB=14\cdot\dfrac{9}{21}=6$. d) False: $DC=14-6=8$.

::sa
In triangle $ABC$, $AB=14$ cm, $AC=21$ cm and $BC=25$ cm. The bisector $AD$ meets $BC$ at $D$. Find $DB$ (in cm).
::key 10
$DB=25\cdot\dfrac{14}{35}=10$.

::sa
In triangle $ABC$, $AB=6$ cm, $AC=8$ cm and $BC=9$ cm. The bisector $AD$ meets $BC$ at $D$. Find $DC$ (in cm, to 1 decimal place).
::key 5.1
$DC=9\cdot\dfrac{8}{14}=\dfrac{36}{7}\approx5.14$, which is $5.1$ to 1 decimal place.
:::
