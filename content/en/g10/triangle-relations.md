---
title: Trigonometry in triangles
description: Use the cosine and sine rules, the area formulas and Heron's formula to find unknown sides, angles and areas, including the ambiguous SSA case.
minutes: 30
---

:::goals
- State and use the cosine rule and the sine rule (with the circumradius $R$).
- Compute the area of a triangle with $S=\frac12ab\sin C$, Heron's formula, $S=\frac{abc}{4R}$ and $S=pr$.
- Solve a triangle from two sides and the included angle, three sides, or one side and two angles; recognise the ambiguous case (two sides and a non-included angle).
- Apply these tools to distances that cannot be measured directly.
:::

You want the distance between two points $A$ and $B$ on opposite sides of a pond, but you cannot walk across. Standing at a point $C$ on the shore, you measure $CA=120$ m, $CB=95$ m and $\angle ACB=70^\circ$. Can you work out $AB$ from these three measurements?

If the angle at $C$ were a right angle, it would be easy: Pythagoras' theorem and we are done. But here the angle is $70^\circ$, and in real life right angles are rare. The good news is that you already have the tools: in [the previous lesson](lesson:trig-ratios-0-180) you learned $\sin$ and $\cos$ for every angle from $0^\circ$ to $180^\circ$. This lesson uses them to find the sides, angles and area of any triangle, right-angled or not.

So we do not have to repeat ourselves, we agree on this for the whole lesson: the triangle is $ABC$, the sides opposite $A, B, C$ are $a, b, c$; $R$ is the radius of the circumscribed circle, $r$ the radius of the inscribed circle, and $p=\frac{a+b+c}{2}$ the semi-perimeter. A way to remember: each small letter sits opposite the capital with the same name.

:::diagram Triangle $ABC$ with its sides
alt: Triangle ABC with vertices A at the left, B at the right and C at the top, and the sides opposite each vertex labelled a, b and c
point A 0,0 below-left
point B 6,0 below-right
point C 1.5,3.5 above
polygon A B C
angle B A C "A"
label 3.8,2 "a"
label 0.5,1.9 "b"
label 3,-0.4 "c"
:::

## The cosine rule

### Exploring: how should Pythagoras' theorem be corrected?

We start from something familiar. Take a triangle with $b=3$, $c=4$. If $A=90^\circ$, then $a^2=9+16=25$. But what if angle $A$ closes up to $60^\circ$? Side $a$ must get shorter, but by how much? Put $A$ at the origin and $B(4, 0)$ on the $x$-axis; then $C$ has coordinates $(3\cos60^\circ, 3\sin60^\circ)\approx(1.5, 2.598)$. Compute $a^2=BC^2$:

$$a^2=(4-1.5)^2+2.598^2\approx6.25+6.75=13.$$

The answer $13$ is exactly $12$ less than $25$, and here is the nice part: $12=2\cdot3\cdot4\cdot\cos60^\circ$. So Pythagoras is not wrong; it is just missing one term containing $\cos A$ to make up for the angle no longer being right.

:::definition The cosine rule
In every triangle $ABC$,
$$a^2=b^2+c^2-2bc\cos A,\qquad b^2=a^2+c^2-2ac\cos B,\qquad c^2=a^2+b^2-2ab\cos C.$$
:::

**Why is it true?** We repeat the exploration exactly, using letters instead of numbers: $A(0, 0)$, $B(c, 0)$, $C(b\cos A, b\sin A)$. Then
$$a^2=(b\cos A-c)^2+b^2\sin^2A=b^2(\cos^2A+\sin^2A)-2bc\cos A+c^2=b^2+c^2-2bc\cos A.$$

Try $A=90^\circ$: then $\cos A=0$ and we are back to $a^2=b^2+c^2$. In other words, **Pythagoras' theorem is just a special case** of the cosine rule, so nothing has to be learned from scratch. For an acute angle, $a^2$ is smaller than $b^2+c^2$; for an obtuse angle $\cos A<0$, so $a^2$ is *larger* than $b^2+c^2$, just as your instinct says: the wider the angle, the longer the opposite side. The rule works both ways: it finds **a side** from two sides and the included angle, and **an angle** from three sides:
$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

We use the first direction first: two sides and the angle between them give the third side.

:::example Two sides and the included angle
In triangle $ABC$, $b=7$, $c=5$ and $A=60^\circ$. Find $a$ and the angles $B$, $C$.

**Solution.** The angle $A$ lies between the known sides $b$, $c$, so the cosine rule gives $a$ at once:

$$a^2=7^2+5^2-2\cdot7\cdot5\cos60^\circ=49+25-35=39\Rightarrow a=\sqrt{39}\approx6.24.$$

We find $B$ with the cosine rule too, in its angle form:

$$\cos B=\frac{a^2+c^2-b^2}{2ac}=\frac{39+25-49}{2\cdot\sqrt{39}\cdot5}\approx0.2402\Rightarrow B\approx76.1^\circ.$$

Finally $C=180^\circ-60^\circ-76.1^\circ\approx43.9^\circ$.

So $a=\sqrt{39}\approx6.24$, $B\approx76.1^\circ$, $C\approx43.9^\circ$.

**Check.** The longest side $b=7$ is opposite the largest angle $B$, as expected.
:::

Now the other direction. When all three sides are known, the cosine rule gives an angle, with no protractor and no guessing.

:::example Three sides
A triangle has sides $a=7$, $b=5$, $c=8$. Find the angle $A$.

**Solution.** We use the angle form of the cosine rule:

$$\cos A=\frac{b^2+c^2-a^2}{2bc}=\frac{25+64-49}{2\cdot5\cdot8}=\frac{40}{80}=\frac12.$$

Since $0^\circ<A<180^\circ$ and $\cos A=\dfrac12$, we get $A=60^\circ$.
:::

## The sine rule

:::definition The sine rule
In every triangle $ABC$ with circumradius $R$,
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.$$
:::

The cosine rule needs the angle *between* two sides. Sometimes, though, we know a side and the angle *opposite* it; then the sine rule fits better. It says that in a triangle, every side divided by the sine of its opposite angle gives the same number, and that number is the diameter of the circumscribed circle. Knowing **one side–opposite angle pair** plus one more measurement is enough. For example, in the triangle of Example 2: $a=7$, $A=60^\circ$, so $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$ and $R=\dfrac{7}{\sqrt3}\approx4.04$.

:::example One side and two angles
In triangle $ABC$, $B=40^\circ$, $C=75^\circ$ and $a=10$. Find $A$, $b$, $c$.

**Solution.** First find the third angle, so that we have the pair "side $a$ – angle $A$":

$$A=180^\circ-40^\circ-75^\circ=65^\circ.$$

Apply the sine rule:

$$b=\frac{a\sin B}{\sin A}=\frac{10\sin40^\circ}{\sin65^\circ}\approx7.09,\qquad c=\frac{10\sin75^\circ}{\sin65^\circ}\approx10.66.$$

So $A=65^\circ$, $b\approx7.09$, $c\approx10.66$.
:::

### The ambiguous case (SSA)

This is a spot many students miss, so we go through it carefully. If we know two sides and an angle that is **not** between them, for example $A$, $a$, $b$, then $\sin B=\dfrac{b\sin A}{a}$. But remember the previous lesson: $B$ and $180^\circ-B$ have the same sine. So one value of the sine can give two angles, and there may be $0$, $1$ or $2$ triangles that fit the data.

:::example Two triangles from the same data
In triangle $ABC$, $A=30^\circ$, $a=5$, $b=8$. Find $B$, $C$, $c$.

**Solution.** The sine rule gives $\sin B$:

$$\sin B=\frac{b\sin A}{a}=\frac{8\cdot0.5}{5}=0.8.$$

Two angles have sine $0.8$: $B_1\approx53.13^\circ$ and $B_2\approx126.87^\circ$. Both work, because $30^\circ+B<180^\circ$ in each case:

$$\begin{aligned} B_1\approx53.13^\circ &\Rightarrow C_1\approx96.87^\circ,\quad c_1=\frac{5\sin C_1}{\sin30^\circ}\approx9.93;\\ B_2\approx126.87^\circ &\Rightarrow C_2\approx23.13^\circ,\quad c_2=\frac{5\sin C_2}{\sin30^\circ}\approx3.93. \end{aligned}$$

So **two** triangles fit the data.
:::

You need not learn this by heart, but if you want to know in advance how many triangles there are, here is a quick rule: given an acute $A$, $a$ and $b$, compute $b\sin A$. If $a<b\sin A$ there is no triangle; if $a=b\sin A$ there is one (right-angled at $B$); if $b\sin A<a<b$ there are two; if $a\ge b$ there is only one.

## Area of a triangle

You are used to finding the area of a triangle as "half the base times the height". The trouble is that the height is rarely given. But look closely: the height from $C$ to $AB$ is exactly $b\sin A$ (side $b$ times the sine of angle $A$). Put that in and we get $S=\dfrac12c\cdot b\sin A$, with no height to measure. The other formulas follow from this one and the sine rule.

:::theorem Area formulas
$$S=\tfrac12ab\sin C=\tfrac12bc\sin A=\tfrac12ca\sin B,\qquad S=\frac{abc}{4R},\qquad S=pr,$$
$$S=\sqrt{p(p-a)(p-b)(p-c)}\quad\text{(Heron's formula).}$$
:::

Why so many formulas? So that you can pick the one that suits the data you have. With three known sides, Heron's formula gives the area at once, and from the area we get $R$ and $r$.

:::example Area, $R$ and $r$ of one triangle
Find $S$, $R$, $r$ for the triangle with $a=7$, $b=5$, $c=8$.

**Solution.** Compute the semi-perimeter, then use Heron's formula:

$$p=\frac{7+5+8}{2}=10,\qquad S=\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3\approx17.32.$$

From $S=\dfrac{abc}{4R}$ and $S=pr$:

$$R=\frac{abc}{4S}=\frac{280}{40\sqrt3}=\frac{7}{\sqrt3}\approx4.04,\qquad r=\frac{S}{p}=\frac{10\sqrt3}{10}=\sqrt3\approx1.73.$$

So $S=10\sqrt3$, $R=\dfrac{7}{\sqrt3}$, $r=\sqrt3$.

**Check.** Example 2 gave $A=60^\circ$, so $\dfrac12bc\sin A=\dfrac12\cdot5\cdot8\cdot\dfrac{\sqrt3}{2}=10\sqrt3$; and $R$ agrees with the value from the sine rule.
:::

## Using triangles in real life

Now we have all the tools to go back to the pond from the start. Try to guess which rule to use before you read the solution.

:::example Distance across a pond
From a point $C$ on the shore, $CA=120$ m, $CB=95$ m and $\angle ACB=70^\circ$. Find $AB$.

**Solution.** The angle $C$ lies between the two known sides, so we use the cosine rule:

$$AB^2=120^2+95^2-2\cdot120\cdot95\cos70^\circ=23425-22800\cos70^\circ\approx15627.$$

So $AB\approx125$ m.
:::

:::warning Common mistakes
These mistakes rarely come from not understanding; they usually come from rushing. Before you press the calculator, pause for a few seconds and check for them.
- **Wrong:** $a^2=b^2+c^2-bc\cos A$. **Why it is wrong:** the factor $2$ is missing; with $b=3$, $c=4$, $A=60^\circ$ it gives $a^2=19$ instead of $13$. **Right:** $a^2=b^2+c^2-2bc\cos A$.
- **Wrong:** for $A=30^\circ$, $a=5$, $b=8$, keeping only $B=53.13^\circ$. **Why it is wrong:** $\sin B=0.8$ also gives $B=126.87^\circ$, which is another triangle. **Right:** always check $180^\circ-B$ too.
- **Wrong:** using the cosine rule with an angle that is not between the two known sides. **Why it is wrong:** in $a^2=b^2+c^2-2bc\cos A$, the angle $A$ must lie between $b$ and $c$ and be opposite $a$. **Right:** match each side with its opposite angle before substituting.
- **Wrong:** leaving the calculator in radian mode, which gives $\cos60=-0.95$. **Right:** switch to degree mode. If the cosine of an acute angle comes out negative, you know at once the mode is wrong.
:::

## Key terms

:::terms
- the cosine rule | định lí côsin
- the sine rule | định lí sin
- circumradius | bán kính đường tròn ngoại tiếp
- inradius | bán kính đường tròn nội tiếp
- semi-perimeter | nửa chu vi
- Heron's formula | công thức Heron
- solving a triangle | giải tam giác
- ambiguous case | trường hợp có hai nghiệm
:::

## Summary

- The cosine rule: $a^2=b^2+c^2-2bc\cos A$, $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$. Use it with two sides and the included angle, or three sides.
- The sine rule: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$. Use it with one side and two angles, or two sides and a non-included angle.
- Two sides and a non-included angle: consider both $B$ and $180^\circ-B$; there may be $0$, $1$ or $2$ triangles.
- Area: $S=\frac12ab\sin C=\sqrt{p(p-a)(p-b)(p-c)}=\frac{abc}{4R}=pr$.
- Calculator in degree mode; round only at the last step.

So without wading across the pond, two sides and one angle measured on the shore were enough: the cosine rule gives $AB\approx125$ m. The thing most worth remembering: look at the data first; an included angle means the cosine rule, a side–opposite angle pair means the sine rule.

## Practice

Each exercise reminds you what you need and gives some steps to start. Have a go yourself first; before each one, sketch the triangle and mark what you know, and the picture will tell you which rule to use. Then open the solution and compare.

:::exercise
In triangle $ABC$, $b=6$, $c=8$ and $A=60^\circ$. Find $a$.

::hint
**What you need:** the cosine rule $a^2=b^2+c^2-2bc\cos A$.

**Steps:**
1. Substitute $b$, $c$ and $\cos60^\circ=\dfrac12$.
2. Take the square root and simplify.

::solution
$$a^2=36+64-2\cdot6\cdot8\cdot\frac12=100-48=52\Rightarrow a=\sqrt{52}=2\sqrt{13}.$$

**Answer.** $a=2\sqrt{13}\approx7.21$.
:::

:::exercise
A triangle has sides $a=5$, $b=6$, $c=7$. Find the angle $C$.

::hint
**What you need:** $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

**Steps:**
1. Substitute to find $\cos C$.
2. Use $\cos^{-1}$ on a calculator.

::solution
$$\cos C=\frac{25+36-49}{2\cdot5\cdot6}=\frac{12}{60}=0.2\Rightarrow C\approx78.46^\circ.$$

**Answer.** $C\approx78.46^\circ$.
:::

:::exercise
a) A triangle has $a=8$ and $A=30^\circ$. Find the circumradius $R$.

b) In triangle $ABC$, $A=45^\circ$, $B=60^\circ$, $b=\sqrt6$. Find $a$.

::hint
**What you need:** the sine rule $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=2R$.

**Steps:**
1. a) Compute $\dfrac{a}{\sin A}$ and halve it.
2. b) Write $a=\dfrac{b\sin A}{\sin B}$ and use the table of special values.

::solution
a) $2R=\dfrac{8}{\sin30^\circ}=16$, so $R=8$.

b)
$$a=\frac{\sqrt6\cdot\frac{\sqrt2}{2}}{\frac{\sqrt3}{2}}=\frac{\sqrt{12}}{\sqrt3}=2.$$

**Answer.** a) $R=8$; b) $a=2$.
:::

:::exercise
Find the area of a triangle with $a=6$, $b=9$ and $C=30^\circ$.

::hint
**What you need:** $S=\dfrac12ab\sin C$, where $C$ is the angle between $a$ and $b$.

**Steps:**
1. Substitute $a$, $b$ and $\sin30^\circ=\dfrac12$.

::solution
$$S=\frac12\cdot6\cdot9\cdot\frac12=13.5.$$

**Answer.** $S=13.5$.
:::

:::exercise
A triangle has sides $13$, $14$, $15$. Is each claim true or false?

a) The semi-perimeter of the triangle is $p=21$.

b) The area of the triangle is $84$.

c) The circumradius is $8$.

d) The angle opposite the side $15$ is obtuse.

::hint
**What you need:** Heron's formula, $S=\dfrac{abc}{4R}$; the angle opposite side $a$ is obtuse exactly when $a^2>b^2+c^2$.

**Steps:**
1. Find $p$ and $S$ with Heron's formula.
2. Compute $R=\dfrac{abc}{4S}$.
3. Compare $15^2$ with $13^2+14^2$.

::solution
a) **True:** $p=\dfrac{13+14+15}{2}=21$.

b) **True:** $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$.

c) **False:** $R=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=8.125$.

d) **False:** $15^2=225<13^2+14^2=365$, so the cosine of that angle is positive and the angle is acute.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
Two ships leave the same port. The first sails at $12$ km/h, the second at $16$ km/h, and their courses make an angle of $50^\circ$. How many kilometres apart are they after $2$ hours (rounded to one decimal place)?

::hint
**What you need:** distance equals speed times time; the cosine rule.

**Steps:**
1. Find how far each ship has sailed after $2$ hours.
2. Two distances with the $50^\circ$ angle between them: use the cosine rule.

::solution
After $2$ hours the ships are $24$ km and $32$ km from the port.
$$d^2=24^2+32^2-2\cdot24\cdot32\cos50^\circ=1600-1536\cos50^\circ\approx612.7\Rightarrow d\approx24.75.$$

**Answer.** $24.8$.
:::

:::exercise
To measure the distance from a point $A$ on a river bank to a tree $C$ on the other bank, a surveyor chooses a point $B$ on the same bank as $A$ with $AB=200$ m, and measures $\angle CAB=62^\circ$ and $\angle CBA=71^\circ$. Find $AC$.

::hint
**What you need:** the sine rule; the side $AC$ is opposite the angle $B$.

**Steps:**
1. Find the angle $C$ of the triangle.
2. Write $\dfrac{AC}{\sin B}=\dfrac{AB}{\sin C}$.

::solution
$$\angle C=180^\circ-62^\circ-71^\circ=47^\circ,\qquad AC=\frac{200\sin71^\circ}{\sin47^\circ}\approx258.6\ \text{(m)}.$$

**Answer.** $AC\approx258.6$ m.
:::

:::exercise
Is there a triangle $ABC$ with $A=40^\circ$, $a=4$, $b=8$? Explain.

::hint
**What you need:** the sine rule gives $\sin B=\dfrac{b\sin A}{a}$, and always $\sin B\le1$.

**Steps:**
1. Compute $\sin B$.
2. Compare it with $1$.

::solution
$$\sin B=\frac{8\sin40^\circ}{4}=2\sin40^\circ\approx1.286>1,$$
which is impossible. (The quick rule shows it too: $a=4<b\sin A\approx5.14$.)

**Answer.** No such triangle exists.
:::

:::exercise Challenge
A triangle has sides $3$, $5$, $7$. Show that its largest angle is $120^\circ$, then find its area $S$ and its inradius $r$.

::hint
**What you need:** the largest angle is opposite the longest side; $S=\dfrac12ab\sin C$; $S=pr$.

**Steps:**
1. Compute the cosine of the angle opposite the side $7$.
2. Find $S$ from the sides $3$, $5$ and the $120^\circ$ angle between them.
3. Find $p$, then $r=\dfrac{S}{p}$.

::solution
$$\cos\theta=\frac{3^2+5^2-7^2}{2\cdot3\cdot5}=\frac{-15}{30}=-\frac12\Rightarrow \theta=120^\circ.$$
$$S=\frac12\cdot3\cdot5\cdot\sin120^\circ=\frac{15\sqrt3}{4},\qquad p=\frac{15}{2},\qquad r=\frac{S}{p}=\frac{15\sqrt3}{4}\cdot\frac{2}{15}=\frac{\sqrt3}{2}.$$

**Answer.** $S=\dfrac{15\sqrt3}{4}\approx6.50$; $r=\dfrac{\sqrt3}{2}\approx0.87$.
:::

:::exercise
(Revisiting [Trigonometric values of angles from 0° to 180°](lesson:trig-ratios-0-180).) In triangle $ABC$, $b=5$, $c=4$ and $\cos A=-\dfrac35$. Find $\sin A$, the area $S$ and the side $a$.

::hint
**What you need:** $\sin^2A+\cos^2A=1$ and $\sin A>0$ for every angle of a triangle; $S=\dfrac12bc\sin A$; the cosine rule.

**Steps:**
1. Find $\sin A$ and choose its sign.
2. Find $S$.
3. Find $a^2$; since $\cos A$ is negative, the last term becomes a plus.

::solution
$$\sin^2A=1-\frac{9}{25}=\frac{16}{25}\Rightarrow \sin A=\frac45,\qquad S=\frac12\cdot5\cdot4\cdot\frac45=8,$$
$$a^2=25+16-2\cdot5\cdot4\cdot\left(-\frac35\right)=41+24=65.$$

**Answer.** $\sin A=\dfrac45$; $S=8$; $a=\sqrt{65}\approx8.06$.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has $b=3$, $c=5$ and $A=120^\circ$. The length of side $a$ is
A. $7$.
B. $\sqrt{19}$.
C. $\sqrt{34}$.
D. $\sqrt{\dfrac{83}{2}}$.
::key A
$a^2=9+25-2\cdot3\cdot5\cdot\cos120^\circ=34+15=49$, so $a=7$. Taking $\cos120^\circ=\dfrac12$ gives $\sqrt{19}$; forgetting the factor $2$ gives $\sqrt{83/2}$.

::mc
Triangle $ABC$ has $a=6$ and $A=30^\circ$. Its circumradius $R$ is
A. $12$.
B. $3$.
C. $6$.
D. $\dfrac32$.
::key C
By the sine rule, $2R=\dfrac{a}{\sin A}=\dfrac{6}{1/2}=12$, so $R=6$. Option A forgets to halve.

::mc
Triangle $ABC$ has $a=4$, $b=5$ and $C=150^\circ$. Its area is
A. $10$.
B. $5$.
C. $5\sqrt3$.
D. $10\sqrt3$.
::key B
$S=\dfrac12ab\sin C=\dfrac12\cdot4\cdot5\cdot\dfrac12=5$. Option A forgets the factor $\dfrac12$; option C uses $|\cos150^\circ|$ instead of $\sin150^\circ$.

::mc
The area of a triangle with sides $5$, $5$, $6$ is
A. $12$.
B. $15$.
C. $24$.
D. $30$.
::key A
$p=8$, and Heron's formula gives $S=\sqrt{8\cdot3\cdot3\cdot2}=\sqrt{144}=12$. Option C is the base $6$ times the height $4$ without dividing by $2$.

::tf
Triangle $ABC$ has $a=7$, $b=3$, $c=8$.
a) $A=60^\circ$.
b) The area of the triangle is $6\sqrt3$.
c) The circumradius is $R=\dfrac{14\sqrt3}{3}$.
d) The angle $C$ is obtuse.
::key T T F T
a) True: $\cos A=\dfrac{9+64-49}{2\cdot3\cdot8}=\dfrac12$. b) True: $S=\dfrac12\cdot3\cdot8\cdot\dfrac{\sqrt3}{2}=6\sqrt3$. c) False: $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$, so $R=\dfrac{7\sqrt3}{3}$. d) True: $\cos C=\dfrac{49+9-64}{2\cdot7\cdot3}=-\dfrac17<0$.

::sa
Two straight roads leave a junction at an angle of $60^\circ$. An's house is on the first road, $10$ km from the junction; Binh's house is on the second road, $6$ km from the junction. How far apart are the two houses in a straight line, in kilometres (rounded to one decimal place)?
::key 8.7
By the cosine rule, $d^2=10^2+6^2-2\cdot10\cdot6\cos60^\circ=136-60=76$, so $d=\sqrt{76}\approx8.72$, which rounds to $8.7$ km.

::sa
Two points $A$ and $B$ are $100$ m apart on the same bank of a river; $C$ is a tree on the other bank. The measured angles are $\angle CAB=50^\circ$ and $\angle CBA=60^\circ$. Find the distance $AC$ in metres (rounded to the nearest whole number).
::key 92
$\angle ACB=180^\circ-50^\circ-60^\circ=70^\circ$. By the sine rule, $AC=\dfrac{AB\sin B}{\sin C}=\dfrac{100\sin60^\circ}{\sin70^\circ}\approx92.2$, which rounds to $92$ m.
:::
