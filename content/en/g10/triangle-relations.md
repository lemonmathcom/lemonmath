---
title: Trigonometry in triangles
description: Use the laws of cosines and sines, the area formulas and Heron's formula to find unknown sides, angles and areas, including the ambiguous SSA case.
minutes: 22
---

:::goals
- State and use the law of cosines and the law of sines (with the circumradius $R$).
- Compute the area of a triangle with $S=\frac12ab\sin C$, Heron's formula, $S=\frac{abc}{4R}$ and $S=pr$.
- Solve a triangle from SAS, SSS, ASA/AAS data, and handle the ambiguous SSA case.
- Apply these tools to distances that cannot be measured directly.
:::

You want the width of a pond, but you cannot walk across it. You can stand at a point on the shore, measure two distances and one angle, and then *calculate* the width. This works because the six measurements of a triangle (three sides, three angles) are tied together by a few precise formulas. In [the previous lesson](lesson:trig-ratios-0-180) you learned $\sin$ and $\cos$ for angles up to $180^\circ$; now we use them in any triangle, not only right-angled ones.

Throughout, the triangle is $ABC$, the sides opposite $A, B, C$ are $a, b, c$, $R$ is the radius of the circumscribed circle, $r$ the radius of the inscribed circle and $p=\frac{a+b+c}{2}$ the semi-perimeter.

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

## The law of cosines

:::definition Law of cosines
In every triangle $ABC$,
$$a^2=b^2+c^2-2bc\cos A,\qquad b^2=a^2+c^2-2ac\cos B,\qquad c^2=a^2+b^2-2ab\cos C.$$
:::

Use it to find **a side** when you know two sides and the angle between them, and to find **an angle** when you know three sides:
$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

If $A=90^\circ$ then $\cos A=0$ and we get $a^2=b^2+c^2$: **Pythagoras' theorem is the special case** of the law of cosines. For an obtuse angle $\cos A<0$, so $a^2$ becomes *larger* than $b^2+c^2$.

:::example Two sides and the angle between (SAS)
In triangle $ABC$, $b=7$, $c=5$ and $A=60^\circ$. Find $a$, then the angles $B$ and $C$.

**Solution.**
- Law of cosines: $a^2=7^2+5^2-2\cdot7\cdot5\cos60^\circ=49+25-35=39$, so $a=\sqrt{39}\approx 6.24$.
- Angle $B$: $\cos B=\dfrac{a^2+c^2-b^2}{2ac}=\dfrac{39+25-49}{2\sqrt{39}\cdot5}\approx 0.2402$, so $B\approx 76.1^\circ$.
- Angle $C=180^\circ-60^\circ-76.1^\circ\approx 43.9^\circ$.
- Check: the largest side $b=7$ is opposite the largest angle $B$.
:::

:::example Three sides (SSS)
The sides of a triangle are $a=7$, $b=5$, $c=8$. Find the angle $A$.

**Solution.**
- $\cos A=\dfrac{b^2+c^2-a^2}{2bc}=\dfrac{25+64-49}{2\cdot5\cdot8}=\dfrac{40}{80}=\dfrac12$.
- Since $0^\circ<A<180^\circ$ and $\cos A=\frac12$, we get $A=60^\circ$.
:::

## The law of sines

:::definition Law of sines
In every triangle $ABC$ with circumradius $R$,
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.$$
:::

Use it when you know **a side and its opposite angle** plus one more piece of data. For the triangle of the last example, $A=60^\circ$, $a=7$, so $2R=\dfrac{7}{\sin60^\circ}=\dfrac{14}{\sqrt3}$ and $R=\dfrac{7}{\sqrt3}\approx 4.04$.

:::example Two angles and a side (ASA)
In triangle $ABC$, $B=40^\circ$, $C=75^\circ$ and $a=10$. Find $A$, $b$ and $c$.

**Solution.**
- $A=180^\circ-40^\circ-75^\circ=65^\circ$.
- $\dfrac{b}{\sin40^\circ}=\dfrac{10}{\sin65^\circ}$, so $b=\dfrac{10\sin40^\circ}{\sin65^\circ}\approx 7.09$.
- $c=\dfrac{10\sin75^\circ}{\sin65^\circ}\approx 10.66$.
:::

### The ambiguous case (SSA)

If you know two sides and an angle that is **not** between them, say $A$, $a$ and $b$, then $\sin B=\dfrac{b\sin A}{a}$ and there may be $0$, $1$ or $2$ triangles, because $B$ and $180^\circ-B$ have the same sine.

:::example Two triangles from the same data
In triangle $ABC$, $A=30^\circ$, $a=5$, $b=8$. Find $B$, $C$ and $c$.

**Solution.**
- $\sin B=\dfrac{8\sin30^\circ}{5}=0.8$. This is less than $1$, so a solution may exist.
- Two angles have sine $0.8$: $B_1\approx 53.13^\circ$ and $B_2\approx 126.87^\circ$.
- For $B_1$: $A+B_1=83.13^\circ<180^\circ$, so it works. $C_1\approx 96.87^\circ$ and $c_1=\dfrac{5\sin C_1}{\sin30^\circ}\approx 9.93$.
- For $B_2$: $A+B_2=156.87^\circ<180^\circ$, so it also works. $C_2\approx 23.13^\circ$ and $c_2\approx 3.93$.
- Answer: **two** triangles.
:::

A quick rule: with $A$, $a$, $b$ given, compute $b\sin A$. If $a<b\sin A$ there is no triangle; if $a=b\sin A$ there is one (right-angled at $B$); if $b\sin A<a<b$ there are two; if $a\ge b$ there is only one (the angle opposite the shorter side must be acute).

## Area of a triangle

:::theorem Area formulas
$$S=\tfrac12ab\sin C=\tfrac12bc\sin A=\tfrac12ca\sin B,\qquad S=\frac{abc}{4R},\qquad S=pr,$$
$$S=\sqrt{p(p-a)(p-b)(p-c)}\quad\text{(Heron's formula).}$$
:::

:::example Area, $R$ and $r$ of one triangle
Find $S$, $R$ and $r$ for the triangle with $a=7$, $b=5$, $c=8$.

**Solution.**
- $p=\dfrac{7+5+8}{2}=10$.
- Heron: $S=\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3\approx17.32$.
- Check with $A=60^\circ$: $\frac12bc\sin A=\frac12\cdot5\cdot8\cdot\frac{\sqrt3}{2}=10\sqrt3$. ✓
- $R=\dfrac{abc}{4S}=\dfrac{280}{40\sqrt3}=\dfrac{7}{\sqrt3}\approx4.04$, as found before.
- $r=\dfrac{S}{p}=\dfrac{10\sqrt3}{10}=\sqrt3\approx1.73$.
:::

## Using triangles in real life

:::example Width of a pond
From a point $C$ on the shore, the distances to two points $A$ and $B$ on opposite sides of a pond are $CA=120$ m and $CB=95$ m, and the angle $ACB=70^\circ$. Find $AB$.

**Solution.**
- Law of cosines: $AB^2=120^2+95^2-2\cdot120\cdot95\cos70^\circ=23425-22800\cos70^\circ\approx 15627$.
- $AB\approx 125$ m.
:::

:::example Two ships
Two ships leave a port at the same time. The first sails at $12$ km/h and the second at $16$ km/h; their courses make an angle of $50^\circ$. How far apart are they after $2$ hours?

**Solution.**
- After $2$ h they are $24$ km and $32$ km from the port.
- $d^2=24^2+32^2-2\cdot24\cdot32\cos50^\circ=1600-1536\cos50^\circ\approx 612.7$.
- $d\approx 24.75$ km.
:::

:::warning Common mistakes
- Forgetting the minus sign or the factor $2$ in $-2bc\cos A$.
- Using the law of sines for SSA data and keeping only one answer. Always check whether $180^\circ-B$ also works.
- Using the law of cosines with the wrong angle: the angle must be the one *between* the two known sides and *opposite* the side you want.
- Setting the calculator to radians.
:::

## Key terms

:::terms
- law of cosines | định lí côsin
- law of sines | định lí sin
- circumradius | bán kính đường tròn ngoại tiếp
- inradius | bán kính đường tròn nội tiếp
- semi-perimeter | nửa chu vi
- Heron's formula | công thức Heron
- solving a triangle | giải tam giác
- ambiguous case | trường hợp có hai nghiệm (SSA)
:::

## Summary

- Law of cosines: $a^2=b^2+c^2-2bc\cos A$; it contains Pythagoras' theorem and solves SAS and SSS triangles.
- Law of sines: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$; it solves ASA, AAS and SSA triangles.
- With SSA data check $0$, $1$ or $2$ triangles.
- Area: $S=\frac12ab\sin C=\sqrt{p(p-a)(p-b)(p-c)}=\frac{abc}{4R}=pr$.

## Practice

:::practice
1. In triangle $ABC$, $b=6$, $c=8$ and $A=60^\circ$. Find $a$.
2. The sides of a triangle are $a=5$, $b=6$, $c=7$. Find the angle $C$.
3. In a triangle $a=8$ and $A=30^\circ$. Find the circumradius $R$.
4. In triangle $ABC$, $A=45^\circ$, $B=60^\circ$, $b=\sqrt6$. Find $a$.
5. Find the area of the triangle with $a=6$, $b=9$ and $C=30^\circ$.
6. A triangle has sides $13$, $14$, $15$. Find its area, its inradius $r$ and its circumradius $R$.
7. Does a triangle exist with $A=40^\circ$, $a=4$, $b=8$? Explain.
8. In triangle $ABC$, $A=45^\circ$, $a=6$, $b=6$. How many triangles are there? Find $c$.
9. Challenge. A triangle has sides $3$, $5$, $7$. Show that its largest angle is $120^\circ$ and find its area.
10. Challenge. To find the distance from $A$ to a tree $C$ across a river, a surveyor measures $AB=200$ m along the bank, the angle at $A$ equal to $62^\circ$ and the angle at $B$ equal to $71^\circ$. Find $AC$.
:::

:::solution Show solutions
1. $a^2=36+64-2\cdot6\cdot8\cos60^\circ=100-48=52$, so $a=\sqrt{52}=2\sqrt{13}\approx7.21$.
2. $\cos C=\dfrac{a^2+b^2-c^2}{2ab}=\dfrac{25+36-49}{60}=\dfrac{12}{60}=0.2$, so $C\approx78.46^\circ$.
3. $2R=\dfrac{a}{\sin A}=\dfrac{8}{0.5}=16$, so $R=8$.
4. $a=\dfrac{b\sin A}{\sin B}=\dfrac{\sqrt6\cdot\frac{\sqrt2}{2}}{\frac{\sqrt3}{2}}=\dfrac{\sqrt{12}}{\sqrt3}=2$.
5. $S=\frac12\cdot6\cdot9\cdot\sin30^\circ=27\cdot\frac12=13.5$.
6. $p=21$; $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$. $r=\dfrac{84}{21}=4$. $R=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=8.125$.
7. $\sin B=\dfrac{8\sin40^\circ}{4}=2\sin40^\circ\approx1.286>1$, which is impossible. No such triangle.
8. $\sin B=\dfrac{6\sin45^\circ}{6}=\frac{\sqrt2}{2}$, so $B=45^\circ$ or $135^\circ$. But $A+135^\circ=180^\circ$ leaves no angle for $C$. So there is **one** triangle with $B=45^\circ$, $C=90^\circ$, and $c=\dfrac{6\sin90^\circ}{\sin45^\circ}=6\sqrt2\approx8.49$.
9. The largest angle is opposite the side $7$: $\cos\theta=\dfrac{9+25-49}{2\cdot3\cdot5}=-\dfrac{15}{30}=-\dfrac12$, so $\theta=120^\circ$. Area $=\frac12\cdot3\cdot5\sin120^\circ=\dfrac{15\sqrt3}{4}\approx6.50$.
10. The angle at $C$ is $180^\circ-62^\circ-71^\circ=47^\circ$. $AC$ is opposite $B$: $\dfrac{AC}{\sin71^\circ}=\dfrac{200}{\sin47^\circ}$, so $AC=\dfrac{200\sin71^\circ}{\sin47^\circ}\approx258.6$ m.
:::
