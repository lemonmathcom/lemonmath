---
title: Theorems and proofs
description: What a theorem is, how to write the hypothesis and conclusion, how to build a proof from reasons, and how to refute a claim with a counterexample.
minutes: 20
---

:::goals
- Tell the hypothesis from the conclusion and write a theorem in the form "if ... then ...".
- Draw a figure and write the given facts and the aim for a geometry theorem.
- Set out a proof as a chain of reasoning, each step with a reason.
- Refute a false statement with a counterexample.
:::

Nam draws two crossing lines five times, measures four angles each time, and every time the two vertically opposite angles come out equal. Nam concludes: "Vertically opposite angles are always equal." Hà asks: "What if your sixth drawing is different?"

How can we be sure of something that is true for every figure, even figures nobody has drawn? That is the job of proof. After this lesson you will be able to write a neat proof, in the style used throughout the next lessons.

## Theorems

In mathematics, some things we **accept** (definitions, axioms such as Euclid's axiom) and some things we **prove** from them. Facts that have been proved are called theorems.

:::definition Theorem, hypothesis, conclusion
A **theorem** is a true statement that is deduced from facts already known to be true. Many theorems have the form "**if** $A$ **then** $B$": the part $A$ is the **hypothesis** (written GT in Vietnam, "given" in English) and the part $B$ is the **conclusion** (written KL in Vietnam, "to prove" in English).
:::

For example, the theorem on vertically opposite angles reads: "If two angles are vertically opposite then they are equal". Hypothesis: two vertically opposite angles. Conclusion: those two angles are equal. When we write the given facts and the aim we use short notation together with a figure, so the reader sees at a glance what is given and what must be proved.

:::diagram $a\parallel b$; alternate angles $\alpha$ and $\beta$
alt: Parallel lines a and b crossed by line c; two alternate angles are alpha and beta
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "α"
angle Q1 B A "β"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::example Finding the hypothesis and the conclusion
Write each theorem in the form "if ... then ...", then write the given facts and the aim:

a) Vertically opposite angles are equal.

b) Two different lines that are both parallel to a third line are parallel to each other.

c) When a line crosses two parallel lines, alternate angles are equal (figure above).

**Solution.** a) If two angles are vertically opposite then they are equal. Given: $\angle xOy$ and $\angle x'Oy'$ are vertically opposite. To prove: $\angle xOy=\angle x'Oy'$.

b) If two different lines are both parallel to a third line then they are parallel to each other. Given: $a$, $b$, $c$ are different, $a\parallel c$, $b\parallel c$. To prove: $a\parallel b$.

c) If a line crosses two parallel lines then alternate angles are equal. Given: $a\parallel b$, $c$ crosses $a$ at $A$ and $b$ at $B$, $\alpha$ and $\beta$ are alternate angles. To prove: $\alpha=\beta$.

In each part, the given facts come after "if" and the aim comes after "then".
:::

## Proving a theorem

To **prove** a theorem is to use a chain of reasoning that leads from the given facts to the conclusion. Every step must have a **reason**: a given fact, a definition, an axiom, or a theorem already learnt. You will see the reasons written in brackets, like (given), (adjacent supplementary), (alternate).

A neat proof has four parts: a figure; the given facts and the aim; the steps "since ... so ..."; and a closing sentence.

:::diagram Lines $xx'$ and $yy'$ meet at $O$
alt: Lines xx' and yy' cross at O making four angles, three of them numbered
point O 0,0 below-right
point x 2.82,1.03 right
point y -1.5,2.6 above-left
point xp -2.82,-1.03 left "x'"
point yp 1.5,-2.6 below-right "y'"
segment x xp
segment y yp
angle x O y "1"
angle y O xp "2"
angle xp O yp "3"
:::

:::example Proving that vertically opposite angles are equal
Prove the theorem: vertically opposite angles are equal.

**Solution.**

Given: The lines $xx'$ and $yy'$ meet at $O$.

To prove: $\angle xOy=\angle x'Oy'$.

Proof. Since $Ox$, $Ox'$ are opposite rays, $\angle xOy$ and $\angle yOx'$ are adjacent supplementary angles, so
$$\angle xOy+\angle yOx'=180^\circ\quad(1)$$
(adjacent supplementary angles).

Since $Oy$, $Oy'$ are opposite rays, $\angle x'Oy'$ and $\angle yOx'$ are adjacent supplementary angles, so
$$\angle x'Oy'+\angle yOx'=180^\circ\quad(2)$$
(adjacent supplementary angles).

From (1) and (2): $\angle xOy+\angle yOx'=\angle x'Oy'+\angle yOx'$. Subtracting $\angle yOx'$ from both sides, we get $\angle xOy=\angle x'Oy'$.

So vertically opposite angles are equal. Hà's question has its answer: the argument does not depend on how the figure is drawn, so it holds for every figure.
:::

:::diagram $a\parallel b$ and $c\perp a$
alt: Parallel lines a and b; line c is perpendicular to a at A and meets b at B
point A 2.4,2.2 above-left
point B 2.4,0 below-right
point P1 0.6,2.2 ""
point P2 4.2,2.2 ""
point Q1 0.6,0 ""
point Q2 4.2,0 ""
point C1 2.4,3.1 ""
point C2 2.4,-0.9 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "90°"
angle Q2 B C2 "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 2.15,3.2 "c"
:::

:::example Parallel lines and a perpendicular
Prove: if a line is perpendicular to one of two parallel lines then it is also perpendicular to the other.

**Solution.**

Given: $a\parallel b$, $c\perp a$ at $A$, $c$ meets $b$ at $B$.

To prove: $c\perp b$.

Proof. Let $\angle A_3$ and $\angle B_7$ be the two corresponding angles shown in the figure above. Since $c\perp a$, $\angle A_3=90^\circ$ (given).

Since $a\parallel b$, corresponding angles are equal (property of parallel lines), so $\angle B_7=\angle A_3=90^\circ$.

Since $\angle B_7=90^\circ$, $c\perp b$.

So $c\perp b$.
:::

:::diagram Bisectors of two adjacent supplementary angles
alt: Straight line xz, ray Oy and the bisectors Om, On of the adjacent supplementary angles xOy, yOz
point O 0,0 below
point x -3.2,0 left
point z 3.2,0 right
point y -1.93,2.3 above-left
point m -2.72,1.27 left
point n 1.27,2.72 above-right
segment x z
segment O y
segment O m
segment O n
angle x O y "α"
angle y O z "β"
:::

:::example Bisectors of two adjacent supplementary angles
Prove: the bisectors of two adjacent supplementary angles are perpendicular.

**Solution.**

Given: $\angle xOy$ and $\angle yOz$ are adjacent supplementary; $Om$ bisects $\angle xOy$; $On$ bisects $\angle yOz$.

To prove: $Om\perp On$, that is $\angle mOn=90^\circ$.

Proof. Since $\angle xOy$ and $\angle yOz$ are adjacent supplementary, $\angle xOy+\angle yOz=180^\circ$ (adjacent supplementary).

Since $Om$ bisects $\angle xOy$, $\angle mOy=\dfrac12\angle xOy$. Since $On$ bisects $\angle yOz$, $\angle yOn=\dfrac12\angle yOz$ (property of a bisector).

The ray $Oy$ lies between $Om$ and $On$, so
$$\angle mOn=\angle mOy+\angle yOn=\frac12(\angle xOy+\angle yOz)=\frac12\cdot180^\circ=90^\circ.$$

So $Om\perp On$.
:::

## Counterexamples

To prove a theorem we must argue for **every** case. To refute a false statement, we need only **one** case that satisfies the hypothesis but not the conclusion. Such a case is called a **counterexample**.

:::diagram Two equal angles that are not vertically opposite
alt: Two angles of 50 degrees at different vertices O and O prime
point O 0,0 below-left
point X1 2.5,0 right "x"
point Y1 1.61,1.92 above-right "y"
point P 6,0 below-left "O'"
point X2 5.57,2.46 above "x'"
point Y2 3.83,1.25 above-left "y'"
segment O X1
segment O Y1
segment P X2
segment P Y2
angle X1 O Y1 "50°"
angle X2 P Y2 "50°"
:::

:::example Finding counterexamples
Give a counterexample to show that each statement is false:

a) Equal angles are vertically opposite.

b) Supplementary angles are adjacent supplementary angles.

c) If $a^2=b^2$ then $a=b$.

**Solution.** a) The angles $\angle xOy$ and $\angle x'O'y'$ in the figure above are both $50^\circ$ but have different vertices, so they are not vertically opposite. This is a counterexample.

b) Angles of $100^\circ$ and $80^\circ$ add up to $180^\circ$, so they are supplementary. If we place them at two different vertices they share no arm, so they are not adjacent supplementary. This is a counterexample.

c) Take $a=2$, $b=-2$: $a^2=4=b^2$ but $a\ne b$. This is a counterexample.

So all three statements are false.
:::

The next example is a real situation, in four steps.

:::diagram An iron gate: upright $d$ and two crossbars $a$, $b$
alt: Upright d crosses crossbars a and b at A and B, with right angles at A and B
point D1 0,0 ""
point D2 0,4 ""
point A 0,1 below-right
point B 0,3 below-right
point L1 -2.2,1 ""
point R1 2.2,1 ""
point L2 -2.2,3 ""
point R2 2.2,3 ""
segment D1 D2
segment L1 R1
segment L2 R2
right R1 A D2
right R2 B D2
label 2.5,1 "a"
label 2.5,3 "b"
label 0.2,4.1 "d"
:::

:::example An iron gate
Suppose an iron gate has an upright $d$. Two crossbars $a$ and $b$ are both welded perpendicular to $d$. Explain why the two crossbars are parallel.

**Solution.**

*Understand.* Given: $a\perp d$ at $A$ and $b\perp d$ at $B$. We must show $a\parallel b$.

*Plan.* The angles at $A$ and $B$ are corresponding angles. If they are equal, we use the test for parallel lines.

*Solve.*
Given: $a\perp d$ at $A$, $b\perp d$ at $B$. To prove: $a\parallel b$.

Since $a\perp d$, the angle between $a$ and $d$ at the top right of $A$ is $90^\circ$ (given). Since $b\perp d$, the angle in the same position at $B$ is also $90^\circ$ (given).

These two angles are corresponding and equal, so by the test for parallel lines, $a\parallel b$.

So the two crossbars are parallel.

*Look back.* We did not need to measure the distance between the bars. Two right angles are enough. If one bar were welded at a slant, the angles would no longer be equal and the conclusion would fail.
:::

:::warning Common mistakes
- **Measuring a few figures and calling it a proof.** Wrong: "I measured five figures and $\angle xOy=\angle x'Oy'$ every time, so we are done". Why it is wrong: measuring only checks particular figures and may fail for others. Right: argue from reasons.
- **Using what you want to prove as a reason.** Wrong: proving that vertically opposite angles are equal and writing "because vertically opposite angles are equal". Why it is wrong: the argument goes in a circle. Right: use the property of adjacent supplementary angles, which is already known.
- **Writing a step without a reason.** Wrong: "$\angle xOy=\angle x'Oy'$" appears from nowhere. Why it is wrong: the reader cannot tell where it came from. Right: write (given), (adjacent supplementary), (vertically opposite), (alternate)... right after each step.
:::

**Connections.** This lesson gathers what you learnt in the last two lessons into theorems and shows how to write them out: given facts, aim, and a proof with a reason at every step. In the next lesson you will use exactly this method to prove that the three angles of a triangle add up to $180^\circ$. Back to Hà's question: thanks to proof, we are sure that vertically opposite angles are equal, even in the sixth drawing.

## Key terms

:::terms
- theorem | định lí
- hypothesis (given) | giả thiết
- conclusion | kết luận
- proof | chứng minh
- axiom | tiên đề
- definition | định nghĩa
- counterexample | phản ví dụ
- statement | mệnh đề
- argument (reasoning) | lập luận
- deduce | suy ra
:::

## Summary

- A theorem is a true statement deduced from facts already known to be true; it often has the form "if $A$ then $B$" with $A$ the hypothesis and $B$ the conclusion.
- To prove it, draw a figure, write the given facts and the aim, then argue step by step.
- Each step has a reason: a given fact, a definition, an axiom or a theorem already learnt.
- A proof must work for every case; measuring a few figures is not enough.
- One counterexample is enough to refute a false statement.

## Practice

Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Write the given facts and the aim for the theorem: "If a line crosses two parallel lines then corresponding angles are equal." Use the symbols $a$, $b$, $c$ and the crossing points $A$, $B$.

::hint
**What you need:** the hypothesis comes after "if" and the conclusion after "then".

**Steps:**
1. Name the two parallel lines and the line crossing them.
2. Name two corresponding angles for the conclusion.

::solution
In a theorem of the form "if ... then ...", the part after "if" is the given fact (Given) and the part after "then" is the aim (To prove).

Given: $a\parallel b$; the line $c$ crosses $a$ at $A$ and $b$ at $B$.

To prove: corresponding angles are equal, for example $\angle A_1=\angle B_5$.

So Given: $a\parallel b$, $c$ crosses $a$, $b$ at $A$, $B$; To prove: $\angle A_1=\angle B_5$ (and the other corresponding pairs).

**Answer.** Given: $a\parallel b$, $c$ crosses $a$, $b$ at $A$, $B$. To prove: $\angle A_1=\angle B_5$ (and the other corresponding pairs).
:::

:::exercise
Write the theorem "Adjacent supplementary angles add up to $180^\circ$" in the form "if ... then ...", then write the given facts and the aim.

::hint
**What you need:** a theorem of the form "if $A$ then $B$"; $A$ is the given, $B$ is the aim.

**Steps:**
1. Two adjacent supplementary angles are what is given.
2. The sum $180^\circ$ is what must be proved.

::solution
In the form "if ... then ...": If two angles are adjacent supplementary then their sum is $180^\circ$.

The part after "if" is the given fact and the part after "then" is the aim. Call the two adjacent supplementary angles $\angle xOy$ and $\angle yOz$.

Given: $\angle xOy$ and $\angle yOz$ are adjacent supplementary.

To prove: $\angle xOy+\angle yOz=180^\circ$.

So Given: $\angle xOy$ and $\angle yOz$ are adjacent supplementary; To prove: $\angle xOy+\angle yOz=180^\circ$.

**Answer.** Given: $\angle xOy$ and $\angle yOz$ adjacent supplementary. To prove: $\angle xOy+\angle yOz=180^\circ$.
:::

:::exercise
Give a counterexample to show that each statement is false:

a) If $ab>0$ then $a>0$ and $b>0$.

b) The sum of two irrational numbers is an irrational number.

::hint
**What you need:** a counterexample is a case that satisfies the hypothesis but not the conclusion.

**Steps:**
1. a) Try two negative numbers.
2. b) Try two opposite irrational numbers, such as $\sqrt2$ and $-\sqrt2$.

::solution
a) Take $a=-1$, $b=-2$: $ab=2>0$ but $a<0$ and $b<0$. This is a counterexample.

b) Take the irrational numbers $\sqrt2$ and $-\sqrt2$: their sum $\sqrt2+(-\sqrt2)=0$ is rational. This is a counterexample.

So both statements are false.

**Answer.** a) $a=-1$, $b=-2$; b) $\sqrt2$ and $-\sqrt2$.
:::

:::exercise
The lines $AB$ and $CD$ meet at $O$. Prove that $\angle AOD=\angle BOC$.

::hint
**What you need:** two angles that are adjacent supplementary to the same third angle are equal; or copy the proof for vertically opposite angles.

**Steps:**
1. Write the given facts and the aim.
2. Write two adjacent-supplementary equations sharing the term $\angle AOC$.

::solution
Given: the lines $AB$ and $CD$ meet at $O$.

To prove: $\angle AOD=\angle BOC$.

Proof. Since $OC$, $OD$ are opposite rays, $\angle AOD$ and $\angle AOC$ are adjacent supplementary, so
$$\angle AOD+\angle AOC=180^\circ\ \text{(adjacent supplementary)}.$$

Since $OA$, $OB$ are opposite rays, $\angle BOC$ and $\angle AOC$ are adjacent supplementary, so
$$\angle BOC+\angle AOC=180^\circ\ \text{(adjacent supplementary)}.$$

Hence $\angle AOD+\angle AOC=\angle BOC+\angle AOC$. Subtracting $\angle AOC$ from both sides, we get $\angle AOD=\angle BOC$.

So $\angle AOD=\angle BOC$ (as required).

**Answer.** Proved.
:::

:::exercise
Prove: two angles that are supplementary to the same third angle are equal.

::hint
**What you need:** supplementary angles add up to $180^\circ$.

**Steps:**
1. Call the three angles $\widehat{A}$, $\widehat{B}$, $\widehat{C}$ and write the given facts and the aim.
2. Write two equations with sum $180^\circ$ and compare them.

::solution
Given: $\widehat{A}$ is supplementary to $\widehat{C}$; $\widehat{B}$ is supplementary to $\widehat{C}$.

To prove: $\widehat{A}=\widehat{B}$.

Proof. Since $\widehat{A}$ is supplementary to $\widehat{C}$, we have $\widehat{A}+\widehat{C}=180^\circ$, that is $\widehat{A}=180^\circ-\widehat{C}$ (given).

Since $\widehat{B}$ is supplementary to $\widehat{C}$, we have $\widehat{B}+\widehat{C}=180^\circ$, that is $\widehat{B}=180^\circ-\widehat{C}$ (given).

The right-hand sides are both equal to $180^\circ-\widehat{C}$, so $\widehat{A}=\widehat{B}$.

So two angles that are supplementary to the same third angle are equal.

**Answer.** Proved.
:::

:::exercise
Suppose two rails $a$ and $b$ of two straight railway lines are both parallel to a main road $d$ (three different lines). Are the two rails parallel to each other? Explain.

::hint
**What you need:** two different lines that are both parallel to a third line are parallel to each other.

**Steps:**
1. Write the given facts and the aim.
2. State the reason.

::solution
Given: $a\parallel d$, $b\parallel d$, $a$, $b$, $d$ different. To prove: $a\parallel b$.

Two different lines that are both parallel to a third line are parallel to each other (a consequence of Euclid's axiom). Since $a\parallel d$ and $b\parallel d$, $a\parallel b$.

So the two rails are parallel to each other.

**Answer.** Yes, $a\parallel b$.
:::

:::exercise
Suppose a carpenter measures two corresponding angles where a third edge of a tabletop crosses two opposite edges, and finds $88^\circ$ and $92^\circ$. Are the two opposite edges parallel? Explain.

::hint
**What you need:** if two lines are parallel then corresponding angles are equal.

**Steps:**
1. If the edges were parallel, what would be true of the corresponding angles?
2. Compare with the measurements.

::solution
If the opposite edges were parallel then, by the property of parallel lines, the corresponding angles would be equal. But $88^\circ\ne92^\circ$, a contradiction.

So the opposite edges are not parallel. A difference of $4^\circ$ is more than the usual error of a protractor, so the measurement can be trusted.

**Answer.** Not parallel.
:::

:::exercise
$\angle xOy$ and $\angle yOz$ are adjacent supplementary angles with $\angle xOy=2\cdot\angle yOz$. Write the given facts and the aim, then find each angle. (A reminder about adjacent supplementary angles.)

::hint
**What you need:** adjacent supplementary angles add up to $180^\circ$.

**Steps:**
1. Let $\angle yOz=t$ (degrees).
2. Form the equation $2t+t=180$.

::solution
Given: $\angle xOy$ and $\angle yOz$ are adjacent supplementary; $\angle xOy=2\cdot\angle yOz$. To prove: find $\angle xOy$, $\angle yOz$.

Let $\angle yOz=t^\circ$, so $\angle xOy=2t^\circ$. Since the angles are adjacent supplementary, $2t+t=180$, so $3t=180$ and $t=60$.

So $\angle yOz=60^\circ$ and $\angle xOy=120^\circ$.

**Answer.** $60^\circ$ and $120^\circ$.
:::

:::exercise
Lines $a$, $b$ are crossed by a line $c$ at $A$, $B$. Prove: if one pair of corresponding angles is equal then the pairs of alternate angles are also equal. (Use the numbering of the last lesson: $\angle A_1$ and $\angle B_5$ are corresponding, $\angle A_3$ and $\angle B_5$ are alternate.)

::hint
**What you need:** vertically opposite angles are equal.

**Steps:**
1. Let $\angle A_1=\angle B_5$.
2. Which angle is vertically opposite $\angle A_1$? Then compare with $\angle B_5$.

::solution
Given: the lines $a$, $b$ are crossed by the line $c$ at $A$, $B$; $\angle A_1=\angle B_5$ (one pair of corresponding angles is equal).

To prove: $\angle A_3=\angle B_5$ (the alternate angles are equal).

Proof. Since $\angle A_1$ and $\angle A_3$ are vertically opposite angles,
$$\angle A_3=\angle A_1\ \text{(vertically opposite)}.$$

Since $\angle A_1=\angle B_5$ (given), we get $\angle A_3=\angle B_5$.

So $\angle A_3=\angle B_5$; that is, if one pair of corresponding angles is equal then the alternate angles are also equal.

**Answer.** Proved.
:::

:::exercise Challenge
$a\parallel b$ and the line $c$ crosses $a$ at $A$ and $b$ at $B$. Let $\angle A_1$ and $\angle B_5$ be two corresponding angles on the same side, numbered as in the last lesson. The ray $Am$ bisects $\angle A_1$ and the ray $Bn$ bisects $\angle B_5$. Prove that $Am\parallel Bn$.

::hint
**What you need:** the property of parallel lines, a bisector halves an angle, the test for parallel lines using corresponding angles.

**Steps:**
1. Show that the angles $c$ makes with $Am$ and with $Bn$ are equal.
2. What position do these two angles have for the lines $Am$, $Bn$ and the transversal $c$?

::solution
Given: $a\parallel b$; $c$ crosses $a$ at $A$ and $b$ at $B$; $Am$ bisects $\angle A_1$; $Bn$ bisects $\angle B_5$.

To prove: $Am\parallel Bn$.

Proof. Since $a\parallel b$, we have $\angle A_1=\angle B_5$ (corresponding angles).

Since $Am$ bisects $\angle A_1$, the angle between $Am$ and the ray of $c$ inside $\angle A_1$ equals $\dfrac12\angle A_1$. Since $Bn$ bisects $\angle B_5$, the angle between $Bn$ and the ray of $c$ inside $\angle B_5$ equals $\dfrac12\angle B_5$.

As $\angle A_1=\angle B_5$, we have $\dfrac12\angle A_1=\dfrac12\angle B_5$, so these two angles are equal.

These two angles are corresponding angles for the lines $Am$, $Bn$ and the transversal $c$. By the test for parallel lines (equal corresponding angles), $Am\parallel Bn$.

So $Am\parallel Bn$ (as required).

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc NB
In the theorem "If two angles are vertically opposite then they are equal", the conclusion is
A. two angles are vertically opposite.
B. two angles are adjacent supplementary.
C. they are equal.
D. two angles equal $90^\circ$.
::key C
The conclusion is the part after "then": the angles are equal. "Two angles are vertically opposite" is the hypothesis.

::mc NB
To show that a statement is false, we need
A. to prove it true in every case.
B. to draw a figure and measure.
C. to test three cases that all work.
D. to give a counterexample.
::key D
One counterexample that satisfies the hypothesis but not the conclusion is enough to refute the statement.

::mc TH
Which statement is **false**?
A. Equal angles are vertically opposite.
B. Vertically opposite angles are equal.
C. Adjacent supplementary angles add up to $180^\circ$.
D. Two lines parallel to a third line are parallel to each other.
::key A
Equal angles need not be vertically opposite: two $50^\circ$ angles at different vertices form a counterexample.

::mc TH
In a proof, the step "since $\angle A_3=\angle B_5$ (alternate) so $a\parallel b$" relies on
A. the property of parallel lines.
B. the test for parallel lines.
C. Euclid's axiom.
D. the theorem on vertically opposite angles.
::key B
Going from equal alternate angles to parallel lines is the test. The property goes the other way.

::tf TH NB NB NB
Decide whether each statement is true or false.
a) Every statement that is true in a few test cases is a theorem.
b) The hypothesis is what is given and the conclusion is what must be proved.
c) One counterexample is enough to refute a statement.
d) In a proof, every step needs a reason.
::key F T T T
a) False: true in a few cases does not mean true in every case. b), c), d) True.

::sa VD
Two vertically opposite angles measure $(3x-5)^\circ$ and $(x+25)^\circ$. Find $x$.
::key 15
Vertically opposite angles are equal, so $3x-5=x+25$, giving $2x=30$ and $x=15$.

::sa TH
The bisectors of two adjacent supplementary angles make an angle of how many degrees?
::key 90
By the theorem proved in Example 3, that angle is $90^\circ$.
:::
