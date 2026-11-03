---
title: Relations between sides and angles in a right-angled triangle, with applications
description: Find sides of a right-angled triangle from one side and an acute angle, solve right-angled triangles and measure real heights and distances.
minutes: 20
---

:::goals
- Write and use the relations between the sides and angles of a right-angled triangle.
- Solve a right-angled triangle given two sides, or one side and one acute angle.
- Find real heights and distances without measuring them directly.
:::

Minh stands $15$ m from the foot of the school flagpole. He looks up at the top of the pole along a line that makes an angle of $35^\circ$ with the horizontal, and his eyes are $1.5$ m above the ground. Without climbing up, how can we find the height of the flagpole in metres?

In the right-angled triangle formed by Minh's eye, the top of the pole and the point on the pole level with his eye, we know one side ($15$ m) and one angle ($35^\circ$). This lesson shows how to find the other sides.

## Relations between sides and angles

Take triangle $ABC$ with a right angle at $A$, and write $BC=a$, $CA=b$, $AB=c$. The two sides that form the right angle, $b$ and $c$, are called the **legs**.

:::diagram The right-angled triangle $ABC$ with sides $a$, $b$, $c$
alt: Triangle ABC with a right angle at A, hypotenuse BC labelled a, side CA labelled b and side AB labelled c
point A 0,0 below-left
point B 5,0 below-right
point C 0,3 above-left
polygon A B C
segment B C "a"
segment A C "b"
segment A B "c"
right B A C
:::

### Explore

From the definition, $\sin B=\dfrac{b}{a}$. Multiplying both sides by $a$ gives $b=a\sin B$. For example, if $a=10$ and $\angle B=30^\circ$, then $b=10\cdot\dfrac12=5$. Doing the same with the other ratios gives four relations.

:::theorem Relations between sides and angles in a right-angled triangle
In triangle $ABC$ with a right angle at $A$:
- Each leg equals the hypotenuse times the sine of the opposite angle, or times the cosine of the adjacent angle:
$$b=a\sin B=a\cos C,\qquad c=a\sin C=a\cos B.$$
- Each leg equals the other leg times the tangent of the opposite angle, or times the cotangent of the adjacent angle:
$$b=c\tan B=c\cot C,\qquad c=b\tan C=b\cot B.$$
:::

Why? Each equation is just a definition rewritten. For example, $\cos C=\dfrac{b}{a}$ (the side adjacent to $C$ is $b$), so $b=a\cos C$; and $\tan B=\dfrac bc$, so $b=c\tan B$.

:::example Given the hypotenuse and an acute angle
Triangle $ABC$ has a right angle at $A$, $BC=12$ cm and $\angle B=40^\circ$. Find $AC$ and $AB$ (rounded to two decimal places).

**Solution.** Applying the side–angle relations to triangle $ABC$ with a right angle at $A$ ($AC$ is opposite angle $B$, $AB$ is adjacent to it), we get

$$AC=BC\sin B=12\sin40^\circ\approx7.71;\qquad AB=BC\cos B=12\cos40^\circ\approx9.19.$$

So $AC\approx7.71$ cm and $AB\approx9.19$ cm.
:::

When we know a leg, we use the tangent or the cotangent.

:::example Given a leg and an acute angle
Triangle $ABC$ has a right angle at $A$, $AB=6$ cm and $\angle B=55^\circ$. Find $AC$ (rounded to two decimal places).

**Solution.** Applying the side–angle relations to triangle $ABC$ with a right angle at $A$ ($AC$ is opposite angle $B$, $AB$ is adjacent to it), we get

$$AC=AB\tan B=6\tan55^\circ\approx8.57.$$

So $AC\approx8.57$ cm.
:::

## Solving a right-angled triangle

**Solving a right-angled triangle** means finding all the remaining sides and angles from two known facts, at least one of which is a side. We use three tools: Pythagoras' theorem, $\angle B+\angle C=90^\circ$, and the relations above.

:::example Given the two legs
Solve triangle $ABC$ with a right angle at $A$, given $AB=5$ cm and $AC=7$ cm (angles to the nearest degree, sides to two decimal places).

**Solution.** In the right-angled triangle $ABC$, $BC^2=AB^2+AC^2$ (Pythagoras' theorem) and $\tan B=\dfrac{AC}{AB}$. Hence

$$BC=\sqrt{5^2+7^2}=\sqrt{74}\approx8.60;\qquad \tan B=\frac75=1.4\Rightarrow \angle B\approx54^\circ;\qquad \angle C\approx90^\circ-54^\circ=36^\circ.$$

So $BC\approx8.60$ cm, $\angle B\approx54^\circ$ and $\angle C\approx36^\circ$.
:::

:::example Given the hypotenuse and an acute angle
Solve triangle $ABC$ with a right angle at $A$, given $BC=20$ cm and $\angle C=35^\circ$ (sides to two decimal places).

**Solution.** In the right-angled triangle $ABC$, $\angle B+\angle C=90^\circ$. Applying the side–angle relations ($AB$ is opposite angle $C$, $AC$ is adjacent to it), we get

$$\angle B=90^\circ-35^\circ=55^\circ;\qquad AB=20\sin35^\circ\approx11.47;\qquad AC=20\cos35^\circ\approx16.38.$$

So $\angle B=55^\circ$, $AB\approx11.47$ cm and $AC\approx16.38$ cm.
:::

## Applications: measuring heights and distances

When we look up at an object, the angle between the line of sight and the horizontal is called the **angle of elevation**. When we look down, it is called the **angle of depression**. We draw a right-angled triangle with one horizontal side, then use the relations.

:::diagram Measuring the height of the flagpole
alt: Minh's eye is at point M, 1.5 metres above the ground and 15 metres from the flagpole; the line of sight to the top D of the pole makes an angle of 35 degrees with the horizontal
point G 0,0 below-left "G"
point M 0,1.5 left "M"
point K 15,1.5 right "K"
point F 15,0 below-right "F"
point D 15,12 above-right "D"
segment G M
segment G F "15 m"
segment F D
segment M K dashed
segment M D
right M K D
angle D M K "35°"
:::

:::example The height of the flagpole
Answer the question from the start (rounded to one decimal place).

**Solution.** *Understand:* $M$ is Minh's eye, $K$ is the point on the pole level with his eye, and $D$ is the top of the pole; $MK=15$ m, $\angle DMK=35^\circ$, $KF=1.5$ m. *Plan:* in triangle $MKD$ with a right angle at $K$, $DK$ is opposite angle $M$ and $MK$ is adjacent to it, so we use the tangent. The height of the pole is $DK$ plus the height $KF$ from Minh's eye to the ground. *Solve:* In triangle $MKD$ with a right angle at $K$, we have

$$DK=MK\tan35^\circ=15\tan35^\circ\approx10.50;\qquad DF=DK+KF\approx10.50+1.5=12.0.$$

So the flagpole is about $12.0$ m tall.
:::

:::warning Common mistakes
- **Choosing the wrong ratio.** Wrong: $AC=BC\cos B$. Why it is wrong: $AC$ is opposite angle $B$, so it goes with sine. Right: $AC=BC\sin B$ (or $BC\cos C$).
- **Dividing instead of multiplying.** Wrong: $AC=\dfrac{AB}{\tan B}$. Why it is wrong: $\tan B=\dfrac{AC}{AB}$, so $AC=AB\tan B$. Right: divide only when the side you want is in the denominator, for example $BC=\dfrac{AC}{\sin B}$.
- **Rounding too early.** Wrong: in the kite problem, taking $\sin38^\circ\approx0.6$ and working out $50\cdot0.6=30$ (m). Why it is wrong: $50\sin38^\circ\approx30.78$, almost $0.8$ m more, and the error grows over several steps. Right: keep the full value on the calculator and round only the final answer.
:::

## Key terms

:::terms
- leg of a right-angled triangle | cạnh góc vuông
- hypotenuse | cạnh huyền
- opposite angle | góc đối
- adjacent angle | góc kề
- solving a right-angled triangle | giải tam giác vuông
- angle of elevation | góc nâng
- angle of depression | góc hạ
- horizontal | phương nằm ngang
:::

## Summary

- Triangle $ABC$ with a right angle at $A$: $b=a\sin B=a\cos C$, $c=a\sin C=a\cos B$.
- $b=c\tan B=c\cot C$, $c=b\tan C=b\cot B$.
- Solving a right-angled triangle: Pythagoras' theorem, $\angle B+\angle C=90^\circ$ and the relations; at least one side must be known.
- Real-life problems: draw a picture, find the right-angled triangle, choose the ratio, round at the last step.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ has a right angle at $A$, $BC=8$ cm and $\angle C=30^\circ$. Find $AB$ and $AC$.

::hint
**What you need:** $c=a\sin C$, $b=a\cos C$; $\sin30^\circ=\dfrac12$, $\cos30^\circ=\dfrac{\sqrt3}2$.

**Steps:**
1. $AB$ is opposite angle $C$.
2. $AC$ is adjacent to angle $C$.

::solution
In the right-angled triangle $ABC$, $AB=BC\sin C=8\sin30^\circ=4$ (cm) and $AC=BC\cos C=8\cos30^\circ=4\sqrt3\approx6.93$ (cm).

**Answer.** $AB=4$ cm, $AC=4\sqrt3\approx6.93$ cm.
:::

:::exercise
Triangle $ABC$ has a right angle at $A$, $AC=10$ cm and $\angle C=42^\circ$. Find $AB$ and $BC$ (rounded to two decimal places).

::hint
**What you need:** $c=b\tan C$; $b=a\cos C\Rightarrow a=\dfrac{b}{\cos C}$.

**Steps:**
1. $AB=AC\tan C$.
2. $BC=\dfrac{AC}{\cos C}$.

::solution
In the right-angled triangle $ABC$, $AB=AC\tan C=10\tan42^\circ\approx9.00$ (cm). Since $AC=BC\cos C$, $BC=\dfrac{AC}{\cos C}=\dfrac{10}{\cos42^\circ}\approx13.46$ (cm).

**Answer.** $AB\approx9.00$ cm, $BC\approx13.46$ cm.
:::

:::exercise
Solve triangle $ABC$ with a right angle at $A$, given $AB=9$ cm and $BC=15$ cm (angles to the nearest degree).

::hint
**What you need:** Pythagoras' theorem; $\sin C=\dfrac{AB}{BC}$.

**Steps:**
1. Find $AC$.
2. Find angle $C$, then angle $B=90^\circ-\angle C$.

::solution
In the right-angled triangle $ABC$, $AC=\sqrt{BC^2-AB^2}=\sqrt{225-81}=12$ (cm) (Pythagoras' theorem). We have $\sin C=\dfrac{AB}{BC}=\dfrac9{15}=0.6$, so $\angle C\approx37^\circ$. Hence $\angle B\approx90^\circ-37^\circ=53^\circ$.

**Answer.** $AC=12$ cm, $\angle C\approx37^\circ$, $\angle B\approx53^\circ$.
:::

:::exercise
Solve triangle $ABC$ with a right angle at $A$, given $AC=4$ cm and $\angle B=50^\circ$ (sides to two decimal places).

::hint
**What you need:** $c=b\cot B$; $b=a\sin B$.

**Steps:**
1. $\angle C=90^\circ-50^\circ$.
2. $AB=AC\cot B=\dfrac{AC}{\tan B}$; $BC=\dfrac{AC}{\sin B}$.

::solution
In the right-angled triangle $ABC$, $\angle C=90^\circ-50^\circ=40^\circ$. Since $AC=AB\tan B$, $AB=\dfrac{AC}{\tan B}=\dfrac{4}{\tan50^\circ}\approx3.36$ (cm). Since $AC=BC\sin B$, $BC=\dfrac{AC}{\sin B}=\dfrac{4}{\sin50^\circ}\approx5.22$ (cm).

**Answer.** $\angle C=40^\circ$, $AB\approx3.36$ cm, $BC\approx5.22$ cm.
:::

:::exercise
Triangle $ABC$ has a right angle at $A$, $AB=2\sqrt3$ cm and $\angle B=60^\circ$. Find the exact values of $AC$ and $BC$.

::hint
**What you need:** $\tan60^\circ=\sqrt3$, $\cos60^\circ=\dfrac12$ (see [trigonometric ratios of acute angles](lesson:acute-angle-trig-ratios)).

**Steps:**
1. $AC=AB\tan B$.
2. $BC=\dfrac{AB}{\cos B}$.

::solution
In the right-angled triangle $ABC$, $AC=AB\tan B=2\sqrt3\cdot\sqrt3=6$ (cm). Since $AB=BC\cos B$, $BC=\dfrac{AB}{\cos B}=\dfrac{2\sqrt3}{1/2}=4\sqrt3$ (cm).

**Answer.** $AC=6$ cm, $BC=4\sqrt3$ cm.
:::

:::exercise
A $6$ m ladder leans against a wall and makes an angle of $70^\circ$ with the ground. How far is its foot from the wall, and how high is its top (rounded to two decimal places)?

::hint
**What you need:** the ladder is the hypotenuse; the distance to the wall is adjacent to the $70^\circ$ angle.

**Steps:**
1. Distance $=6\cos70^\circ$.
2. Height $=6\sin70^\circ$.

::solution
The ladder, the wall and the ground form a right-angled triangle whose hypotenuse is the $6$ m ladder. The distance from the foot of the ladder to the wall is $6\cos70^\circ\approx2.05$ (m). The height of the top of the ladder is $6\sin70^\circ\approx5.64$ (m).

**Answer.** About $2.05$ m and $5.64$ m.
:::

:::exercise
From the top of a lighthouse $40$ m above the sea, the keeper sees a boat at an angle of depression of $12^\circ$. How far is the boat from the foot of the lighthouse (to the nearest metre)?

::hint
**What you need:** the angle of depression equals the angle between the line of sight and the sea (alternate angles).

**Steps:**
1. In the right-angled triangle, the $40$ m side is opposite the $12^\circ$ angle at the boat.
2. Distance $=\dfrac{40}{\tan12^\circ}$.

::solution
Let $d$ (m) be the distance from the boat to the foot of the lighthouse. The angle between the line of sight and the sea is $12^\circ$ (alternate angles). In the right-angled triangle formed by the lighthouse, the sea and the line of sight, $40=d\tan12^\circ$, so $d=\dfrac{40}{\tan12^\circ}\approx188$ (m).

**Answer.** About $188$ m.
:::

:::exercise
When the sun's rays make an angle of $52^\circ$ with the ground, a tree casts a shadow $9$ m long on flat ground. Find the height of the tree (rounded to one decimal place).

::hint
**What you need:** the height is opposite the $52^\circ$ angle and the shadow is adjacent to it.

**Steps:**
1. Draw the right-angled triangle: tree, shadow, sun's ray.
2. Height $=9\tan52^\circ$.

::solution
The tree, its shadow and the sun's ray form a right-angled triangle. The height of the tree is $9\tan52^\circ\approx11.5$ (m).

**Answer.** About $11.5$ m.
:::

:::exercise
Hà is flying a kite. The string is straight and $50$ m long, and makes an angle of $38^\circ$ with the horizontal; Hà holds the string $1.2$ m above the ground.

a) How high is the kite above the ground (rounded to one decimal place)?

b) What is the horizontal distance from Hà's hand to the point directly below the kite (rounded to one decimal place)?

c) Hà lets out more string until it is $60$ m long, keeping the same angle. How many metres higher does the kite go (rounded to one decimal place)?

::hint
**What you need:** the string is the hypotenuse; the height is opposite the $38^\circ$ angle.

**Steps:**
1. Height above the hand: $50\sin38^\circ$; add $1.2$.
2. Horizontal distance: $50\cos38^\circ$.
3. The rise: $(60-50)\sin38^\circ$.

::solution
a) The height of the kite above Hà's hand is $50\sin38^\circ\approx30.78$ (m). Hence its height above the ground is about $30.78+1.2\approx32.0$ (m).

b) The horizontal distance is $50\cos38^\circ\approx39.4$ (m).

c) The kite rises by $60\sin38^\circ-50\sin38^\circ=10\sin38^\circ\approx6.2$ (m).

**Answer.** a) $32.0$ m; b) $39.4$ m; c) $6.2$ m.
:::

:::exercise Challenge
Two friends stand on the same straight line through the foot of a building, on the same side, $20$ m apart. The nearer one sees the top of the building at an angle of elevation of $45^\circ$, the farther one at $30^\circ$. Find the height of the building (ignore eye height; give an exact form, then round to two decimal places).

::hint
**What you need:** the distance to the foot of the building is $h\cot\alpha$; rationalising the denominator.

**Steps:**
1. Let $h$ be the height. The two distances are $h\cot45^\circ=h$ and $h\cot30^\circ=h\sqrt3$.
2. Form the equation $h\sqrt3-h=20$ and solve it.

::solution
Let $h$ (m) be the height of the building ($h>0$). The distances from the two friends to the foot of the building are $h\cot45^\circ=h$ and $h\cot30^\circ=h\sqrt3$. From the question, $h\sqrt3-h=20$. Hence $h=\dfrac{20}{\sqrt3-1}=\dfrac{20\left(\sqrt3+1\right)}{2}=10\left(\sqrt3+1\right)\approx27.32$ (m) (which satisfies the condition).

**Answer.** $10\left(\sqrt3+1\right)\approx27.32$ m.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has a right angle at $A$, $BC=a$ and $CA=b$. Then
A. $b=a\sin B$.
B. $b=a\cos B$.
C. $b=a\tan B$.
D. $b=a\sin C$.
::key A
Since the leg $b$ is opposite angle $B$, $b=a\sin B$ (or $b=a\cos C$). Options B and D mix up the opposite and adjacent angles, and C uses the tangent with the hypotenuse.

::mc
Triangle $ABC$ has a right angle at $A$ and $AB=c$. Then $AC$ equals
A. $c\tan B$.
B. $c\cot B$.
C. $c\sin B$.
D. $c\cos B$.
::key A
We have $\tan B=\dfrac{AC}{AB}$, so $AC=c\tan B$. Option B uses the cotangent of the opposite angle; C and D use sine and cosine with a leg instead of the hypotenuse.

::mc
Triangle $ABC$ has a right angle at $A$, $BC=10$ and $\angle B=30^\circ$. Then $AC$ equals
A. $5$.
B. $5\sqrt3$.
C. $10\sqrt3$.
D. $20$.
::key A
We have $AC=BC\sin B=10\sin30^\circ=5$. Option B is $10\cos30^\circ$ (the side $AB$), and D divides by $\sin30^\circ$ instead of multiplying.

::mc
An $8$ m electricity pole casts a shadow $8\sqrt3$ m long on the ground. The angle between the sun's rays and the ground is
A. $30^\circ$.
B. $60^\circ$.
C. $45^\circ$.
D. about $0.58^\circ$.
::key A
Let $\alpha$ be the angle. We have $\tan\alpha=\dfrac{8}{8\sqrt3}=\dfrac{\sqrt3}3$, so $\alpha=30^\circ$. Option B turns the ratio upside down (shadow over pole), and D writes the ratio $0.58$ as if it were the angle.

::tf
Triangle $ABC$ has a right angle at $A$, $AB=6$ cm and $\angle C=30^\circ$. Decide whether each statement is true or false.
a) $BC=12$ cm.
b) $AC=6\sqrt3$ cm.
c) $\angle B=30^\circ$.
d) $AC=BC\sin C$.
::key T T F F
a) True. Since $AB=BC\sin C$, $BC=\dfrac{AB}{\sin C}=\dfrac{6}{1/2}=12$ (cm). b) True. $AC=AB\cot C=6\sqrt3$ (cm). c) False. $\angle B=90^\circ-30^\circ=60^\circ$. d) False. $BC\sin C=6=AB$; the correct relation is $AC=BC\cos C$.

::sa
A $4$ m ladder leans against a wall and makes an angle of $60^\circ$ with the ground. How many metres above the ground is its top? (Give your answer to 1 decimal place.)
::key 3.5
The height of the top of the ladder is $4\sin60^\circ=2\sqrt3\approx3.5$ (m).

::sa
A building casts a shadow $25$ m long on the ground when the sun's rays make an angle of $40^\circ$ with the ground. How tall is the building in metres? (Give your answer to the nearest whole number.)
::key 21
The height of the building is $25\tan40^\circ\approx21$ (m).
:::
