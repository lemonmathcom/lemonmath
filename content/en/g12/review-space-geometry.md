---
title: "Revision: geometry in space"
description: Revise parallel and perpendicular lines and planes, angles, distances, dihedral angles and volumes of pyramids and prisms, in graduation exam style.
minutes: 40
---

:::goals
- Prove quickly that a line is perpendicular to a plane and recognise perpendicular planes.
- Identify and calculate the angle between a line and a plane, and a dihedral angle.
- Calculate the distance from a point to a plane and between two skew lines.
- Calculate the volume of pyramids and prisms, including in real-life problems.
:::

Grade 11 geometry in space still appears in the graduation exam. In Part I (multiple choice) there are usually one or two questions on perpendicularity, angles or volume. In Part II or Part III there is usually one question on a distance, a dihedral angle or a volume in a real-life setting. Altogether this topic is usually worth about $0.5$ to $1$ mark.

This revision lesson covers four areas: perpendicularity, angles, distances and volumes. Every example is written exactly like an exam question. Most of them use the same familiar figure: a pyramid with one lateral edge perpendicular to the base.

:::diagram The pyramid $S.ABCD$ with $SA\perp(ABCD)$ and a square base with centre $O$
alt: The pyramid S.ABCD in parallel projection, with S directly above A so that edge SA is perpendicular to the base; the hidden segments AD, AC and BD are dashed and O is the point where AC meets BD
point S 0,4 above
point A 0,0 left
point B 1.5,-1.5 below-left
point C 5.8,-1.5 below-right
point D 4.3,0 right
point O 2.9,-0.75 below
segment S A
segment S B
segment S C
segment S D
segment A B
segment B C
segment C D
segment A D dashed
segment A C dashed
segment B D dashed
right S A B
:::

## Parallel and perpendicular lines and planes

:::theorem Criteria to remember
- **A line perpendicular to a plane:** if $d$ is perpendicular to two intersecting lines in $(P)$, then $d\perp(P)$. Then $d$ is perpendicular to **every** line in $(P)$.
- **Perpendicular planes:** if $(Q)$ contains a line perpendicular to $(P)$, then $(Q)\perp(P)$.
- **The theorem of three perpendiculars:** let $a$ lie in $(P)$ and let $b$ be a line not perpendicular to $(P)$, with orthogonal projection $b'$ on $(P)$. Then $a\perp b\iff a\perp b'$.
- **Parallel:** if $d$ is parallel to a line in $(P)$ and $d$ does not lie in $(P)$, then $d\parallel(P)$.
:::

For a pyramid with $SA\perp(ABCD)$ and a square base, the following two "perpendicular pairs" always hold. Remember how to derive them rather than learning the results by heart:

$$BC\perp AB,\ BC\perp SA\ \Rightarrow\ BC\perp(SAB);\qquad BD\perp AC,\ BD\perp SA\ \Rightarrow\ BD\perp(SAC).$$

Multiple-choice questions often give four relations and ask which is correct. The reliable method is to find **two** intersecting lines in the plane that the line is perpendicular to.

:::example Multiple choice: choose the correct perpendicular relation
The pyramid $S.ABCD$ has a square base $ABCD$ and $SA\perp(ABCD)$. Which statement is correct?

**A.** $BD\perp(SAB)$.

**B.** $BC\perp(SAB)$.

**C.** $AC\perp(SBD)$.

**D.** $CD\perp(SBC)$.

**Solution.** We check whether each line is perpendicular to two intersecting lines of the plane.

$$BC\perp AB\ (\text{square base}),\quad BC\perp SA\ (SA\perp(ABCD))\ \Rightarrow\ BC\perp(SAB).$$

Option A is wrong because $BD$ is not perpendicular to $AB$ (the angle between them is $45^\circ$). Option C is wrong because $AC$ is not perpendicular to $SO$. Option D is wrong because $CD\parallel AB$ and $AB$ is not perpendicular to $SB$ (triangle $SAB$ has its right angle at $A$), so $CD$ is not perpendicular to $SB$.

So the answer is **B**.
:::

## Angles in space

:::note How to identify an angle
- **The angle between a line $d$ and a plane $(P)$:** the angle between $d$ and its projection $d'$ on $(P)$. With $SA\perp(ABCD)$, the projection of $SC$ is $AC$, so the angle between $SC$ and $(ABCD)$ is $\angle SCA$.
- **The dihedral angle $[S, BD, A]$:** take a point $O$ on the edge $BD$, draw $OS\perp BD$ in the face $(SBD)$ and $OA\perp BD$ in the face $(ABD)$. The size of the dihedral angle is then $\angle SOA$.
- The angle between two intersecting planes is between $0^\circ$ and $90^\circ$; a dihedral angle can be between $0^\circ$ and $180^\circ$.
:::

To calculate an angle we reduce it to a right-angled triangle and use $\tan$, $\sin$ or $\cos$. In the exam, a true/false question on angles often tests both **identifying** the angle and **calculating** it.

:::example True/false: the angle with a plane and a dihedral angle
The pyramid $S.ABCD$ has a square base with side $a$ and centre $O$, $SA\perp(ABCD)$ and $SA=a\sqrt2$.

a) The angle between $SC$ and the plane $(ABCD)$ is $\angle SCA$.

b) The angle between $SC$ and the plane $(ABCD)$ is $45^\circ$.

c) The dihedral angle $[S, BD, A]$ is $60^\circ$.

d) The sine of the angle between $SB$ and the plane $(SAD)$ is $\dfrac{\sqrt3}{3}$.

**Solution.** We judge each claim; each one reduces to a right-angled triangle.

a) **True.** $SA\perp(ABCD)$, so $AC$ is the projection of $SC$ on the base.

b) **True.** The diagonal of the square is $AC=a\sqrt2$, so in triangle $SAC$ with its right angle at $A$:

$$\tan\angle SCA=\frac{SA}{AC}=\frac{a\sqrt2}{a\sqrt2}=1\ \Rightarrow\ \angle SCA=45^\circ.$$

c) **False.** Since $BD\perp(SAC)$, we have $BD\perp SO$ and $BD\perp AO$; the dihedral angle is $\angle SOA$. With $AO=\dfrac{a\sqrt2}{2}$:

$$\tan\angle SOA=\frac{SA}{AO}=\frac{a\sqrt2}{\frac{a\sqrt2}{2}}=2\ \Rightarrow\ \angle SOA\approx63.4^\circ.$$

d) **True.** $AB\perp AD$ and $AB\perp SA$, so $AB\perp(SAD)$; the projection of $SB$ on $(SAD)$ is $SA$ and the angle is $\angle BSA$. We have $SB=\sqrt{a^2+2a^2}=a\sqrt3$:

$$\sin\angle BSA=\frac{AB}{SB}=\frac{a}{a\sqrt3}=\frac{\sqrt3}{3}.$$

So the answers are a) True, b) True, c) False, d) True.
:::

:::warning Common traps with angles
- **Taking the angle at the vertex $S$.** The angle between $SC$ and the base is $\angle SCA$ (at the point where $SC$ meets the base), not $\angle CSA$.
- **Drawing the perpendicular in the wrong place.** For the dihedral angle $[S, BC, A]$ with a square base, the foot of the perpendicular is $B$ (because $BC\perp(SAB)$), and the angle is $\angle SBA$; it is not at the midpoint of $BC$.
- **Guessing $60^\circ$ because it "looks like it".** Always calculate the $\tan$ first; $\tan=2$ does not give a special angle.
:::

## Distances

:::theorem The two most used formulas
- If $SA\perp(ABC)$ and $AH\perp SK$, where $K$ is the foot of the perpendicular from $A$ to $BC$, then $d(A, (SBC))=AH$ and
$$\frac{1}{AH^2}=\frac{1}{SA^2}+\frac{1}{AK^2}.$$
- **Changing the point:** if $MN\parallel(P)$, then $d(M, (P))=d(N, (P))$. If the line $AM$ meets $(P)$ at $I$, then $\dfrac{d(A, (P))}{d(M, (P))}=\dfrac{IA}{IM}$.
- **Two skew lines $a$, $b$:** if $a\parallel(P)$ where $(P)\supset b$, then $d(a, b)=d(a, (P))$.
:::

With a square or rectangular base, the foot $K$ is $B$ itself, because $AB\perp BC$. Changing the point lets us turn the distance from an "awkward" point ($D$, $C$, a midpoint...) into the distance from $A$.

:::example Short answer: the distance to a lateral face
The pyramid $S.ABCD$ has a square base with side $3$, $SA\perp(ABCD)$ and $SA=4$. Find the distance from $D$ to the plane $(SBC)$.

**Solution.** Since $AD\parallel BC$, we have $AD\parallel(SBC)$, so $d(D, (SBC))=d(A, (SBC))$. Draw $AH\perp SB$; since $BC\perp(SAB)$, $BC\perp AH$, so $AH\perp(SBC)$:

$$\frac{1}{AH^2}=\frac{1}{4^2}+\frac{1}{3^2}=\frac{9+16}{144}=\frac{25}{144}\ \Rightarrow\ AH=\frac{12}{5}=2.4.$$

So $d(D, (SBC))=2.4$. On the answer sheet we write $2.4$.

**Look back.** For the same reason, the distance between the skew lines $AD$ and $SB$ is also $2.4$.
:::

## Volumes of pyramids and prisms

:::theorem Volume formulas
- Pyramid: $V=\dfrac13 B\cdot h$; prism: $V=B\cdot h$ ($B$ is the base area, $h$ the height).
- Cuboid: $V=abc$; cube with side $a$: $V=a^3$.
- Tetrahedron $OABC$ with $OA$, $OB$, $OC$ mutually perpendicular: $V=\dfrac16\,OA\cdot OB\cdot OC$.
- Area of an equilateral triangle with side $a$: $\dfrac{a^2\sqrt3}{4}$.
:::

In a regular pyramid, the foot of the height is the centre of the base. So the height is usually found with Pythagoras' theorem in the triangle formed by a lateral edge, the height and half a diagonal of the base.

:::example Short answer: the volume of a tent
A camping tent has the shape of a regular square pyramid with a square base of side $6$ m, and each lateral edge is $5$ m long. Find the volume of air inside the tent (in m³, to 1 decimal place).

**Solution.** Let $O$ be the centre of the base; $SO$ is the height. Half the diagonal of the base is $OA=\dfrac{6\sqrt2}{2}=3\sqrt2$, so:

$$SO=\sqrt{SA^2-OA^2}=\sqrt{25-18}=\sqrt7,\qquad V=\frac13\cdot 6^2\cdot\sqrt7=12\sqrt7\approx31.749.$$

So the volume of air in the tent is about $31.7$ m³ (write $31.7$).

**Look back.** Using half the side, $3$, instead of half the diagonal gives a height of $4$ and a volume of $48$ m³, a wrong answer that looks very "nice".
:::

:::warning Common traps with distances and volumes
- **Forgetting the factor $\dfrac13$** for a pyramid, or adding $\dfrac13$ for a prism.
- **Confusing a lateral edge with the height.** Only in a right prism is the lateral edge the height.
- **Taking $AB$ or $SB$ as the distance.** The distance from $A$ to $(SBC)$ is the perpendicular $AH$, which is always shorter than $AB$ and $SA$.
:::

## Key terms

:::terms
- line perpendicular to a plane | đường thẳng vuông góc với mặt phẳng
- perpendicular planes | hai mặt phẳng vuông góc
- theorem of three perpendiculars | định lí ba đường vuông góc
- orthogonal projection | hình chiếu vuông góc
- dihedral angle | góc nhị diện
- distance | khoảng cách
- skew lines | đường thẳng chéo nhau
- regular pyramid | hình chóp đều
- right prism | hình lăng trụ đứng
- volume | thể tích
:::

## Exercises

The exercises go from easy to hard, and each one states its exam format.

:::exercise Multiple choice
The right prism $ABC.A'B'C'$ has a base that is a right-angled triangle at $A$, with $AB=3$, $AC=4$ and $AA'=5$. The volume of the prism is

**A.** $30$. **B.** $10$. **C.** $60$. **D.** $20$.

::hint
**What you need:** $V_{\text{prism}}=B\cdot h$; in a right prism the height equals the lateral edge.

**Steps:**
1. Find the area of the right-angled triangle $ABC$.
2. Multiply by $AA'$.

::solution
The base area is $\dfrac12\cdot3\cdot4=6$, so $V=6\cdot5=30$. Option B multiplies by an extra $\dfrac13$; option C forgets the $\dfrac12$.

**Answer.** A.
:::

:::exercise Multiple choice
In the tetrahedron $OABC$, the edges $OA$, $OB$, $OC$ are mutually perpendicular, $OA=2$, $OB=3$, $OC=4$. The volume of the tetrahedron is

**A.** $24$. **B.** $12$. **C.** $8$. **D.** $4$.

::hint
**What you need:** $V=\dfrac16\,OA\cdot OB\cdot OC$.

**Steps:**
1. Take $OAB$ (a right-angled triangle) as the base and $OC$ as the height.
2. Compute $\dfrac13\cdot S_{OAB}\cdot OC$.

::solution
$V=\dfrac13\cdot\dfrac12\cdot2\cdot3\cdot4=4$. Option A forgets both $\dfrac13$ and $\dfrac12$; option B forgets $\dfrac13$; option C forgets $\dfrac12$.

**Answer.** D.
:::

:::exercise Multiple choice
The pyramid $S.ABC$ has an equilateral base with side $a$, $SA\perp(ABC)$, and the angle between the plane $(SBC)$ and the base is $60^\circ$. The volume of the pyramid is

**A.** $\dfrac{a^3\sqrt3}{24}$. **B.** $\dfrac{a^3\sqrt3}{8}$. **C.** $\dfrac{3a^3\sqrt3}{8}$. **D.** $\dfrac{a^3}{4}$.

::hint
**What you need:** let $M$ be the midpoint of $BC$; since $BC\perp(SAM)$, the angle between $(SBC)$ and the base is $\angle SMA$.

**Steps:**
1. Find $AM=\dfrac{a\sqrt3}{2}$, then $SA=AM\tan60^\circ$.
2. Compute $V=\dfrac13\cdot\dfrac{a^2\sqrt3}{4}\cdot SA$.

::solution
$SA=\dfrac{a\sqrt3}{2}\cdot\sqrt3=\dfrac{3a}{2}$, so $V=\dfrac13\cdot\dfrac{a^2\sqrt3}{4}\cdot\dfrac{3a}{2}=\dfrac{a^3\sqrt3}{8}$. Option A uses $\tan30^\circ$ by mistake, option C forgets $\dfrac13$, and option D takes the angle to be $\angle SBA$.

**Answer.** B.
:::

:::exercise True/false
$ABCD.A'B'C'D'$ is a cube with side $a$, and $O$ is the centre of the square $ABCD$.

a) $AC\perp(BDD'B')$.

b) The angle between the lines $AB'$ and $BC'$ is $60^\circ$.

c) The distance from $A$ to the plane $(BDD'B')$ is $\dfrac{a\sqrt2}{2}$.

d) The dihedral angle $[C', BD, C]$ is $45^\circ$.

::hint
**What you need:** the criterion for a line perpendicular to a plane; the angle between two lines equals the angle between two lines parallel to them.

**Steps:**
1. $AC\perp BD$ and $AC\perp BB'$.
2. Replace $BC'$ by the parallel line $AD'$ and look at triangle $AB'D'$.
3. For the dihedral angle, use $C'O\perp BD$ and $CO\perp BD$.

::solution
a) **True.** $AC\perp BD$ (diagonals of a square) and $AC\perp BB'$, so $AC\perp(BDD'B')$.

b) **True.** $BC'\parallel AD'$; triangle $AB'D'$ has all three sides equal to $a\sqrt2$, so it is equilateral and the angle is $60^\circ$.

c) **True.** By a), $AO\perp(BDD'B')$, so the distance is $AO=\dfrac{a\sqrt2}{2}$.

d) **False.** The dihedral angle is $\angle C'OC$ with $\tan\angle C'OC=\dfrac{CC'}{CO}=\dfrac{a}{\frac{a\sqrt2}{2}}=\sqrt2$, so the angle is about $54.7^\circ$.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise Short answer
$ABCD.A'B'C'D'$ is a cube. Find the angle between the line $A'C$ and the plane $(ABCD)$ (in degrees, to the nearest whole number).

::hint
**What you need:** the projection of $A'C$ on $(ABCD)$ is $AC$.

**Steps:**
1. Call the side $a$ and find $AC=a\sqrt2$.
2. Compute $\tan\angle A'CA=\dfrac{AA'}{AC}$.

::solution
$\tan\angle A'CA=\dfrac{a}{a\sqrt2}=\dfrac{1}{\sqrt2}$, so $\angle A'CA\approx35.26^\circ$.

**Answer.** $35$.
:::

:::exercise Short answer
The pyramid $S.ABC$ has an equilateral base with side $2$, $SA\perp(ABC)$ and $SA=1$. Find the distance from $A$ to the plane $(SBC)$ (to 2 decimal places).

::hint
**What you need:** with $M$ the midpoint of $BC$, $BC\perp(SAM)$; $\dfrac{1}{AH^2}=\dfrac{1}{SA^2}+\dfrac{1}{AM^2}$.

**Steps:**
1. Find $AM=\sqrt3$.
2. Substitute into the formula.

::solution
$\dfrac{1}{AH^2}=1+\dfrac13=\dfrac43$, so $AH=\dfrac{\sqrt3}{2}\approx0.866$.

**Answer.** $0.87$.
:::

:::exercise Short answer
The cover of a skylight is a regular square pyramid with a square base of side $4$ m and height $3$ m. Find the angle between a sloping face of the cover and the base (in degrees, to the nearest whole number).

::hint
**What you need:** with $O$ the centre of the base and $M$ the midpoint of a base edge, the angle between the face and the base is $\angle SMO$.

**Steps:**
1. $OM$ is half the side of the base.
2. Compute $\tan\angle SMO=\dfrac{SO}{OM}$.

::solution
$OM=2$ and $\tan\angle SMO=\dfrac32$, so $\angle SMO\approx56.31^\circ$.

**Answer.** $56$.
:::

:::exercise Short answer
A water trough $2$ m long is a right prism whose cross-section is an isosceles trapezium with a longer base (the top) of $0.6$ m, a shorter base of $0.4$ m and a depth of $0.3$ m. At most how many litres of water can the trough hold?

::hint
**What you need:** $V=B\cdot h$ with a trapezium as the base; $1$ m³ $=1000$ litres.

**Steps:**
1. Find the area of the trapezium.
2. Multiply by the length of the trough, then convert to litres.

::solution
$B=\dfrac{(0.6+0.4)\cdot0.3}{2}=0.15$ m², so $V=0.15\cdot2=0.3$ m³ $=300$ litres.

**Answer.** $300$.
:::

:::exercise Written answer
The pyramid $S.ABCD$ has a square base with side $a$ and centre $O$, $SA\perp(ABCD)$ and $SA=a$. Find the distance between the skew lines $SC$ and $BD$.

::hint
**What you need:** $BD\perp(SAC)$; if $OH\perp SC$ in the plane $(SAC)$, then $OH$ is the common perpendicular.

**Steps:**
1. Show that $BD\perp OH$.
2. Compute $OH=OC\cdot\sin\angle SCA$.

::solution
Since $BD\perp(SAC)$ and $OH\subset(SAC)$, $OH\perp BD$; also $OH\perp SC$, so $d(SC, BD)=OH$. We have $OC=\dfrac{a\sqrt2}{2}$, $SC=\sqrt{a^2+2a^2}=a\sqrt3$ and $\sin\angle SCA=\dfrac{SA}{SC}=\dfrac{1}{\sqrt3}$:

$$OH=\frac{a\sqrt2}{2}\cdot\frac{1}{\sqrt3}=\frac{a\sqrt6}{6}.$$

**Answer.** $d(SC, BD)=\dfrac{a\sqrt6}{6}$.
:::

:::exercise Short answer (challenge)
The prism $ABC.A'B'C'$ has volume $30$. Let $M$ be the midpoint of the edge $CC'$. The pyramid $M.ABC$ is cut away from the prism. Find the volume of what remains.

::hint
**What you need:** the pyramid and the prism share the base; the height of the pyramid is half the height of the prism.

**Steps:**
1. Write $V_{M.ABC}=\dfrac13\cdot B\cdot\dfrac h2$ in terms of $V=B\cdot h$.
2. Subtract it from $30$.

::solution
$d(M, (ABC))=\dfrac12 d(C', (ABC))=\dfrac h2$, so $V_{M.ABC}=\dfrac13\cdot B\cdot\dfrac h2=\dfrac{V}{6}=5$. What remains has volume $30-5=25$.

**Answer.** $25$.
:::

## Mini test

:::quiz
::mc
A pyramid has base area $12$ and height $5$. Its volume is
A. $60$.
B. $20$.
C. $30$.
D. $10$.
::key B
$V=\dfrac13\cdot12\cdot5=20$. Option A is the prism formula; option C uses the factor $\dfrac12$ by mistake.

::mc
The pyramid $S.ABCD$ has $SA\perp(ABCD)$. The angle between the line $SB$ and the plane $(ABCD)$ is
A. $\angle SBA$.
B. $\angle BSA$.
C. $\angle SBC$.
D. $\angle SAB$.
::key A
The projection of $SB$ on the base is $AB$, so the angle is $\angle SBA$. Option B is the angle between $SB$ and $SA$; option D is a right angle.

::mc
$ABCD.A'B'C'D'$ is a cube with side $2$. The distance between the lines $AA'$ and $BD$ is
A. $2$.
B. $2\sqrt2$.
C. $\sqrt2$.
D. $\sqrt3$.
::key C
With $O$ the centre of the base, $AO\perp BD$ and $AO\perp AA'$, so the distance is $AO=\dfrac{2\sqrt2}{2}=\sqrt2$. Option B is the whole diagonal $AC$; option A is the edge $AB$.

::mc
The pyramid $S.ABCD$ has a rectangular base and $SA\perp(ABCD)$. Which plane is perpendicular to the plane $(SAB)$?
A. $(SCD)$.
B. $(SBD)$.
C. $(SAC)$.
D. $(SBC)$.
::key D
$BC\perp AB$ and $BC\perp SA$, so $BC\perp(SAB)$; the plane $(SBC)$ contains $BC$, so it is perpendicular to $(SAB)$.

::tf
$S.ABCD$ is a regular square pyramid with all edges equal to $2$, and $O$ is the centre of the base.
a) $SO\perp(ABCD)$.
b) $SO=\sqrt2$.
c) The angle between $SA$ and the plane $(ABCD)$ is $60^\circ$.
d) The volume of the pyramid is $\dfrac{4\sqrt2}{3}$.
::key T T F T
a) True: the foot of the height of a regular pyramid is the centre of the base. b) True: $AO=\sqrt2$ and $SO=\sqrt{4-2}=\sqrt2$. c) False: $\tan\angle SAO=\dfrac{\sqrt2}{\sqrt2}=1$, so the angle is $45^\circ$. d) True: $V=\dfrac13\cdot4\cdot\sqrt2$.

::sa
A right prism has an equilateral base with side $2$ and lateral edges of length $3$. Find its volume (to 1 decimal place).
::key 5.2
$B=\dfrac{2^2\sqrt3}{4}=\sqrt3$ and $V=3\sqrt3\approx5.196$, which rounds to $5.2$.

::sa
The pyramid $S.ABC$ has $SA\perp(ABC)$, triangle $ABC$ has its right angle at $B$, and $SA=AB=2$. Find the distance from $A$ to the plane $(SBC)$ (to 2 decimal places).
::key 1.41
$BC\perp(SAB)$, so the distance is the altitude $AH$ of the isosceles right-angled triangle $SAB$: $AH=\dfrac{SB}{2}=\dfrac{2\sqrt2}{2}=\sqrt2\approx1.41$.
:::
