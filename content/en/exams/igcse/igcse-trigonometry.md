---
title: Trigonometry
description: "IGCSE Mathematics Extended: right-angled triangles, bearings, sine and cosine rules, area ½ab sin C, 3D problems and solving sin x = k from 0° to 360°."
minutes: 50
---

:::goals
- Use Pythagoras and sine, cosine and tangent in right-angled triangles, including bearings and angles of elevation.
- Use the sine rule, the cosine rule and $\tfrac12ab\sin C$ in any triangle, and choose the right one.
- Solve simple trigonometric equations for $0^\circ\le x\le360^\circ$ and find angles in three-dimensional shapes.
:::

A ladder $6$ m long leans against a wall, and its foot is $2$ m from the wall. Is it safe? A common guide says a ladder should make an angle of about $75^\circ$ with the ground. Nobody can climb up and measure that angle with a protractor, but a calculator and one ratio will tell you in a few seconds.

That is what trigonometry is for: it turns lengths into angles and angles into lengths, in places where measuring directly is awkward. On Paper 4 you have a scientific calculator, and trigonometry questions are usually worth plenty of marks. The ideas are few; most lost marks come from choosing the wrong rule or the wrong calculator mode. This lesson is built around those two choices.

## Right-angled triangles

In a right-angled triangle, label the sides from the angle $\theta$ you are using: the **hypotenuse** is opposite the right angle, the **opposite** side faces $\theta$, and the **adjacent** side is next to it. Then

$$\sin\theta=\frac{\text{opp}}{\text{hyp}},\qquad \cos\theta=\frac{\text{adj}}{\text{hyp}},\qquad \tan\theta=\frac{\text{opp}}{\text{adj}}.$$

Before anything else, check that your calculator is in **degrees**. Then the method is always the same: mark the two sides you know or want, pick the ratio that uses exactly those two, and solve.

:::example The ladder
A ladder $6$ m long leans against a vertical wall with its foot $2$ m from the wall. Find the angle between the ladder and the ground, correct to $1$ decimal place.
A. $19.5^\circ$
B. $70.5^\circ$
C. $71.6^\circ$
D. $75.0^\circ$

**Solution.** Relative to the angle at the foot, the ladder is the hypotenuse ($6$ m) and the distance from the wall is the adjacent side ($2$ m), so we use cosine: $\cos\theta=\dfrac26$.

Then $\theta=\cos^{-1}\left(\dfrac13\right)\approx70.5^\circ$.

So the angle is $70.5^\circ$, answer **B**. That is a little flatter than the $75^\circ$ guide, so the foot should be moved closer to the wall. Option A is the angle at the top of the ladder, and option C comes from $\tan^{-1}3$, as if $6$ m were the height.
:::

**Bearings** are angles measured clockwise from north, written with three figures: $060^\circ$, $245^\circ$. If $B$ is on a bearing of $060^\circ$ from $A$, then $A$ is on a bearing of $060^\circ+180^\circ=240^\circ$ from $B$. Always draw a small north arrow at each point before you start.

:::example A walk
Mai walks $5$ km due north and then $12$ km due east. How far is she from her starting point, and on what bearing?

**Solution.** The two legs are at right angles, so by Pythagoras the distance is $\sqrt{5^2+12^2}=\sqrt{169}=13$ km.

The angle at the start, measured from north, satisfies $\tan\theta=\dfrac{12}{5}$, so $\theta=\tan^{-1}2.4\approx67.4^\circ$.

So she is $13$ km away on a bearing of $067.4^\circ$.
:::

## Sine rule, cosine rule and area

For a triangle with angles $A$, $B$, $C$ and opposite sides $a$, $b$, $c$:

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad a^2=b^2+c^2-2bc\cos A,\qquad \text{Area}=\tfrac12ab\sin C.$$

How do you choose? Look at what you know.

| You know | Use |
|---|---|
| a side and its opposite angle, plus one more side or angle | sine rule |
| two sides and the angle between them | cosine rule for the third side; $\tfrac12ab\sin C$ for the area |
| all three sides | cosine rule rearranged for an angle |

The cosine rule is Pythagoras with a correction term. When $A=90^\circ$, $\cos A=0$ and the correction disappears.

:::example The sine rule
In triangle $ABC$, angle $A=40^\circ$, angle $B=65^\circ$ and $a=8$ cm. Find $b$.

**Solution.** We know side $a$ and its opposite angle $A$, and we want the side opposite $B$, so we use the sine rule: $\dfrac{b}{\sin65^\circ}=\dfrac{8}{\sin40^\circ}$.

Then $b=\dfrac{8\sin65^\circ}{\sin40^\circ}\approx11.3$ cm.

So $b\approx11.3$ cm.
:::

:::example The cosine rule and the area
Two sides of a triangle are $7$ cm and $10$ cm, and the angle between them is $52^\circ$. Find the third side and the area.

**Solution.** We know two sides and the included angle, so the cosine rule gives the third side: $c^2=7^2+10^2-2\times7\times10\cos52^\circ\approx149-86.19=62.81$, so $c\approx7.93$ cm.

The area is $\tfrac12\times7\times10\times\sin52^\circ\approx27.6\text{ cm}^2$.

So the third side is about $7.93$ cm and the area about $27.6\text{ cm}^2$.
:::

## Trigonometric graphs and equations

The graphs of $y=\sin x$ and $y=\cos x$ repeat every $360^\circ$ and stay between $-1$ and $1$. Because of this, an equation such as $\sin x=0.5$ has **two** solutions between $0^\circ$ and $360^\circ$, while the calculator gives only one. The graph shows where to find the other.

:::graph The line y = 0.5 meets y = sin x twice between 0° and 360°
alt: The graph of y = sin x for x from 0 to 360 degrees, with the horizontal line y = 0.5 crossing it at x = 30 and x = 150
x: 0..360
y: -1.5..1.5
shape: free
plot: sin(x*pi/180) ; 0..360
hline: 0.5 ; dashed
point: (30, 0.5) "30°" above
point: (150, 0.5) "150°" above
:::

:::example Solving sin x = 0.5
Solve $\sin x=0.5$ for $0^\circ\le x\le360^\circ$.

**Solution.** The calculator gives $x=\sin^{-1}0.5=30^\circ$.

The sine graph is symmetrical about $x=90^\circ$, so the second solution is $180^\circ-30^\circ=150^\circ$. Both are in the interval.

So $x=30^\circ$ or $x=150^\circ$.
:::

For cosine, the graph is symmetrical about $x=180^\circ$, so if $x_1$ is one solution then $360^\circ-x_1$ is another.

## Three dimensions

A 3D question is a 2D question in disguise. Find a right-angled triangle that contains the length or angle you want, draw it separately and flat, and work in that triangle. The angle between a line and a plane is the angle between the line and its "shadow" on the plane.

:::warning Common traps
- **Calculator mode:** it must be in degrees; a radian answer looks reasonable but is wrong.
- **Wrong rule:** use the table above; the sine rule needs a side with its opposite angle.
- **Cosine rule order:** work out $2bc\cos A$ fully before subtracting it from $b^2+c^2$.
- **Only one solution:** equations on $0^\circ$ to $360^\circ$ usually have two; use the graph.
- **Rounding too early:** keep full calculator values, then give lengths to $3$ significant figures and angles to $1$ decimal place.
:::

:::terms
- hypotenuse / opposite / adjacent | cạnh huyền / cạnh đối / cạnh kề
- sine rule / cosine rule | định lí sin / định lí côsin
- included angle | góc xen giữa
- bearing | phương vị (góc hướng)
- angle of elevation / depression | góc nâng / góc hạ
- degree mode | chế độ độ (Deg)
- line and plane | đường thẳng và mặt phẳng
:::

## Similar exercises

:::exercise
In a right-angled triangle the hypotenuse is $15$ cm and one angle is $35^\circ$. Find the side opposite the $35^\circ$ angle.

::hint
**What you need:** $\sin\theta=\dfrac{\text{opp}}{\text{hyp}}$.

::solution
We know the hypotenuse and want the opposite side, so we use sine: $\sin35^\circ=\dfrac{x}{15}$.

Multiplying by $15$, $x=15\sin35^\circ\approx8.60$ cm.

So the opposite side is about $8.60$ cm.

**Answer.** $8.60$ cm.
:::

:::exercise
In a right-angled triangle the two shorter sides are $7$ cm and $4$ cm. Find the angle opposite the $7$ cm side.

::hint
**What you need:** $\tan\theta=\dfrac{\text{opp}}{\text{adj}}$.

::solution
The side of $7$ cm is opposite the angle and the side of $4$ cm is adjacent to it, so $\tan\theta=\dfrac74=1.75$.

Then $\theta=\tan^{-1}1.75\approx60.3^\circ$.

So the angle is about $60.3^\circ$.

**Answer.** $60.3^\circ$.
:::

:::exercise
In triangle $ABC$, $a=10$ cm, angle $A=48^\circ$ and angle $B=72^\circ$. Find $b$.

::hint
**What you need:** the sine rule.

::solution
We know side $a$ together with its opposite angle $A$, which is exactly the pair the sine rule needs, so the sine rule gives $\dfrac{b}{\sin72^\circ}=\dfrac{10}{\sin48^\circ}$.

Then $b=\dfrac{10\sin72^\circ}{\sin48^\circ}\approx12.8$ cm.

So $b\approx12.8$ cm.

**Answer.** $12.8$ cm.
:::

:::exercise
Two sides of a triangle are $8$ cm and $11$ cm, and the angle between them is $120^\circ$. Find the third side.

::hint
**What you need:** the cosine rule; $\cos120^\circ=-0.5$.

::solution
Two sides and the included angle are known, so we use the cosine rule: $c^2=8^2+11^2-2\times8\times11\cos120^\circ$.

Since $\cos120^\circ=-0.5$, this is $c^2=64+121+88=273$, so $c=\sqrt{273}\approx16.5$ cm.

So the third side is about $16.5$ cm. It is longer than either of the other sides, as it should be opposite an obtuse angle.

**Answer.** $16.5$ cm.
:::

:::exercise
A triangle has sides $5$ cm, $7$ cm and $9$ cm. Find its largest angle.

::hint
**What you need:** the largest angle is opposite the longest side.

::solution
The largest angle $C$ is opposite the side of $9$ cm. Rearranging the cosine rule, $\cos C=\dfrac{5^2+7^2-9^2}{2\times5\times7}=\dfrac{-7}{70}=-0.1$.

Then $C=\cos^{-1}(-0.1)\approx95.7^\circ$.

So the largest angle is about $95.7^\circ$; the negative cosine already told us it is obtuse.

**Answer.** $95.7^\circ$.
:::

## Applied exercises

:::exercise
From a point $50$ m from the foot of a tower, on level ground, the angle of elevation of the top is $32^\circ$. Find the height of the tower.

::hint
**What you need:** $\tan\theta=\dfrac{\text{opp}}{\text{adj}}$.

::solution
The height is opposite the $32^\circ$ angle and the $50$ m distance is adjacent to it, so $\tan32^\circ=\dfrac{h}{50}$.

Then $h=50\tan32^\circ\approx31.2$ m.

So the tower is about $31.2$ m tall.

**Answer.** $31.2$ m.
:::

:::exercise
Solve $2\cos x+1=0$ for $0^\circ\le x\le360^\circ$.

::hint
**What you need:** rearrange to $\cos x=-0.5$, then use the symmetry of the cosine graph.

::solution
Subtract $1$ and divide by $2$: $\cos x=-0.5$, and the calculator gives $x=\cos^{-1}(-0.5)=120^\circ$.

The cosine graph is symmetrical about $x=180^\circ$, so the second solution is $360^\circ-120^\circ=240^\circ$.

So $x=120^\circ$ or $x=240^\circ$.

**Answer.** $120^\circ$, $240^\circ$.
:::

:::exercise
A cuboid is $8$ cm long, $6$ cm wide and $5$ cm high. Find the length of a diagonal through the inside of the cuboid, and the angle it makes with the base.

::hint
**What you need:** first the diagonal of the base, then a vertical right-angled triangle.

::solution
The diagonal of the base is $\sqrt{8^2+6^2}=10$ cm. The space diagonal, the base diagonal and a vertical edge of $5$ cm form a right-angled triangle, so the space diagonal is $\sqrt{10^2+5^2}=\sqrt{125}\approx11.2$ cm.

The angle with the base is the angle between the space diagonal and its shadow, the base diagonal: $\tan\theta=\dfrac{5}{10}$, so $\theta\approx26.6^\circ$.

So the diagonal is about $11.2$ cm and makes an angle of $26.6^\circ$ with the base.

**Answer.** $11.2$ cm; $26.6^\circ$.
:::

:::exercise Challenge
Ship $B$ is $20$ km from port $P$ on a bearing of $050^\circ$. Ship $C$ is $15$ km from $P$ on a bearing of $140^\circ$. Find the distance $BC$ and the area of triangle $PBC$.

::hint
**What you need:** the angle $BPC$ is the difference of the bearings.

::solution
The angle at $P$ is $140^\circ-50^\circ=90^\circ$, so triangle $PBC$ has a right angle at $P$ and $BC=\sqrt{20^2+15^2}=\sqrt{625}=25$ km.

The area is $\tfrac12\times20\times15\times\sin90^\circ=150\text{ km}^2$.

So the ships are $25$ km apart, and the triangle has area $150\text{ km}^2$. It is worth checking angles between bearings first: here it turned a cosine rule question into Pythagoras.

**Answer.** $25$ km; $150\text{ km}^2$.
:::

:::quiz
::mc
$B$ is on a bearing of $060^\circ$ from $A$. The bearing of $A$ from $B$ is
A. $120^\circ$
B. $300^\circ$
C. $240^\circ$
D. $060^\circ$
::key C
Add $180^\circ$.

::mc
You know two sides and the angle between them. To find the third side, use
A. the sine rule
B. the cosine rule
C. $\tan\theta=\dfrac{\text{opp}}{\text{adj}}$
D. $\tfrac12ab\sin C$
::key B
Two sides and the included angle: cosine rule.

::mc
The value of $\sin150^\circ$ is
A. $0.5$
B. $-0.5$
C. $0.866$
D. $-0.866$
::key A
$\sin150^\circ=\sin30^\circ$.

::mc
Which formula gives the area of any triangle?
A. $\tfrac12ab\cos C$
B. $ab\sin C$
C. $\tfrac12(a+b)\sin C$
D. $\tfrac12ab\sin C$
::key D
Half the product of two sides and the sine of the included angle.

::tf
Triangle $ABC$ has a right angle at $C$, with $BC=3$, $AC=4$ and $AB=5$. Decide whether each statement is true or false.
a) $\sin A=0.6$.
b) $\cos A=0.8$.
c) $\tan A=0.75$.
d) Angle $A=45^\circ$.
::key T T T F
$A=\tan^{-1}0.75\approx36.9^\circ$.

::sa
Find the area of a triangle with sides $9$ cm and $12$ cm and an included angle of $30^\circ$, in $\text{cm}^2$.
::key 27
$\tfrac12\times9\times12\times0.5$.

::sa
Solve $\sin x=1$ for $0^\circ\le x\le360^\circ$ (in degrees).
::key 90
The sine graph reaches $1$ only once in this interval.
:::
