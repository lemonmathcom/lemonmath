---
title: The triangle inequality
description: Learn when three lengths form a triangle, and use the triangle inequality to find the possible third side and to solve real-life problems.
minutes: 20
---

:::goals
- State and explain the triangle inequality: each side is shorter than the sum of the other two.
- Check whether three given lengths can be the sides of a triangle.
- Find the range of the third side when two sides are known.
- Apply the inequality to isosceles triangles and to real-life problems about distance and perimeter.
:::

Suppose you have three wooden sticks of length $30$ cm, $40$ cm and $80$ cm, and you want to join them into a triangular frame. However you place them, the two shorter sticks never quite reach each other across the longest one.

Here is a more familiar question: why is the walk from home to school always shorter by the direct road than through the bookshop? Both questions have the same answer, and it lives inside the triangle.

## Which three lengths make a triangle?

### Explore: two fixed sticks

Take two sticks of length $3$ cm and $4$ cm, and try a third stick of length $x$ cm to close a triangle.

| $x$ (cm) | Compare | Result |
|---|---|---|
| $1$ | $x+3=4$ | the sticks lie along a straight line, no triangle |
| $2$ | $x+3=5>4$ | a triangle closes |
| $5$ | $3+4=7>5$ | a triangle closes |
| $7$ | $3+4=7$ | the sticks lie along a straight line, no triangle |
| $8$ | $3+4=7<8$ | the two short sticks cannot reach each other |

When $x$ is between $1$ and $7$, a triangle can be made. When $x\le 1$ or $x\ge 7$, it cannot. We see that $7=3+4$ and $1=4-3$: these are the two boundaries.

In a triangle, the longest side must be short enough for the other two to bridge it. We state this as a theorem.

:::theorem The triangle inequality
In a triangle, each side is shorter than the sum of the other two sides:
$$BC<AB+AC,\qquad AB<AC+BC,\qquad AC<AB+BC.$$
Hence each side is longer than the difference of the other two sides:
$$|AB-AC|<BC<AB+AC.$$
:::

**Why?** Let $ABC$ be a triangle. On the ray opposite to $AB$, take a point $D$ with $AD=AC$.

:::diagram Extend $BA$ beyond $A$ by $AD=AC$
alt: Triangle ABC with a point D on the extension of BA beyond A so that AD equals AC, a dashed segment from A to D, and the segment CD also drawn
point B 0,0 below-left
point C 5,0 below-right
point A 3,2 left
point D 5.35,3.57 above-right
segment B C
segment B A
segment A C
segment A D dashed
segment C D
mark A C 1
mark A D 1
:::

Triangle $ACD$ is isosceles at $A$, so $\angle ADC=\angle ACD$. The point $A$ lies between $B$ and $D$, so the ray $CA$ lies between the rays $CB$ and $CD$. Hence $\angle BCD>\angle ACD=\angle BDC$.

In triangle $BCD$, the side opposite the larger angle is longer (the previous lesson on angles and opposite sides), so $BD>BC$. But $BD=BA+AD=BA+AC$. So $BC<AB+AC$.

**Going deeper.** Equality happens only when $A$, $B$, $C$ are collinear, that is, when the "triangle" is flattened into a segment, like the row $x=7$ in the table. This is also why the direct path from $B$ to $C$ is shorter than the detour through $A$: the detour $BA+AC$ is always longer than the segment $BC$.

To test three lengths, we do not need all three inequalities.

:::note A quick test
Three lengths $a\le b\le c$ are the sides of a triangle if and only if $c<a+b$.

Reason: $c$ is the largest, so $c\ge b$ and $c\ge a$. Hence if $c<a+b$, then $b\le c<a+c$ and $a\le c<b+c$, so the other two inequalities hold automatically.
:::

## Examples

We start by testing three lengths.

:::example Can three lengths be the sides of a triangle?
For each set of lengths (in cm), is there a triangle with these three sides?

a) $6$; $9$; $4$.

b) $4$; $6$; $10$.

c) $5$; $8$; $12$.

**Solution.** We compare the largest number with the sum of the other two.

a) The largest is $9$ and $4+6=10>9$. So a triangle exists.

b) The largest is $10$ and $4+6=10$, which is not less than $10$. So no triangle exists (the three segments lie on one line).

c) The largest is $12$ and $5+8=13>12$. So a triangle exists.

So the sets in a) and c) are the sides of a triangle, and the set in b) is not.
:::

Now we use the inequality to find the third side of an isosceles triangle.

:::example An isosceles triangle with sides $7$ cm and $3$ cm
An isosceles triangle has two sides of length $7$ cm and $3$ cm. Find its perimeter.

**Solution.** The third side equals $7$ cm or $3$ cm, because an isosceles triangle has two equal sides. We try each case.

If the third side is $3$ cm, the sides are $3$; $3$; $7$. We have $3+3=6<7$, so no triangle exists.

If the third side is $7$ cm, the sides are $7$; $7$; $3$. The largest is $7$ and $7+3=10>7$, so a triangle exists.

The perimeter is $7+7+3=17$ (cm). So the perimeter of the triangle is $17$ cm.
:::

When two sides are known, we can find a whole range for the third.

:::example The range of the third side
In triangle $ABC$, $AB=6$ cm and $AC=10$ cm. Find the possible integer values (in cm) of $BC$.

**Solution.** By the triangle inequality, $|AC-AB|<BC<AC+AB$, that is
$$10-6<BC<10+6\ \Rightarrow\ 4<BC<16.$$
The integers that satisfy this are $5;6;\dots;15$, which is $15-5+1=11$ numbers.

So $BC$ can take $11$ integer values, from $5$ cm to $15$ cm.
:::

The next two examples use the inequality in real situations.

:::example Straight or detour? (Application)
Suppose Lan's home is at $A$, her school at $B$ and the bookshop at $C$, with the three points not on one line. Lan measures $AC=450$ m and $CB=380$ m.

a) Between which values must the straight distance $AB$ lie?

b) If $AB=700$ m, how much shorter is the direct walk from home to school than the walk through the bookshop?

**Solution.** a) In triangle $ABC$ we have $|AC-CB|<AB<AC+CB$, that is $450-380<AB<450+380$. Hence $70<AB<830$.

So $AB$ is longer than $70$ m and shorter than $830$ m.

b) The walk through the bookshop is $450+380=830$ (m). The direct walk is $700$ m, which lies in the interval $(70, 830)$, so this value is possible.

The difference is $830-700=130$ (m). So the direct walk is $130$ m shorter.
:::

The last example has several pieces of data, so we go through all four steps.

:::example Fencing a garden
A triangular garden has two sides of length $12$ m and $20$ m. The third side is a whole number of metres divisible by $5$. Find the shortest and the longest possible length of fence around the garden.

**Solution.**

*Understand.* Two sides are $12$ m and $20$ m. The third side is $c$ (m), a whole number divisible by $5$. We need the smallest and largest perimeter.

*Plan.* Use the triangle inequality to find the range of $c$, then take the multiples of $5$ in that range. The perimeter is $12+20+c=32+c$.

*Solve.* We have $20-12<c<20+12$, that is $8<c<32$. The whole numbers divisible by $5$ in this range are $10;15;20;25;30$.

The smallest perimeter is for $c=10$: $32+10=42$ (m). The largest is for $c=30$: $32+30=62$ (m).

So the fence is at least $42$ m and at most $62$ m long.

*Look back.* If $c=8$ or $c=32$, the garden would be flattened into a straight segment, so these values are excluded even though the sum or difference "fits exactly". Is there another way? We could test each of $10;15;\dots$ with the rule "the longest side is shorter than the sum of the other two", but finding the range of $c$ once, as above, is faster and less error-prone.
:::

:::warning Mistakes to watch out for
- **Checking only the two short sides and skipping the longest.** Wrong: for $3$; $4$; $8$, working out $3+8>4$ and $4+8>3$ and concluding that a triangle exists. Why it is wrong: those two inequalities are always true when one number is large; you must compare the longest side. Right: $3+4=7<8$, so no triangle exists.
- **Allowing equality.** Wrong: $4$; $6$; $10$ are the sides of a triangle because $4+6=10$. Why it is wrong: when $4+6=10$, the three points are collinear and no triangle is formed. Right: we need $4+6>10$.
- **Not checking in an isosceles problem.** Wrong: an isosceles triangle with sides $3$ and $7$ has perimeter $3+3+7=13$. Why it is wrong: $3+3=6<7$, so no such triangle exists. Right: the third side is $7$ and the perimeter is $17$.
:::

**Connections.** The triangle inequality builds on the relationship between angles and opposite sides that you have already met. It is also the reason why a straight segment is the shortest path between two points, and it returns when we compare lengths in isosceles and equilateral triangles and when we study perpendicular and oblique lines.

## Key terms

:::terms
- triangle inequality | bất đẳng thức tam giác
- side | cạnh
- isosceles triangle | tam giác cân
- perimeter | chu vi
- collinear | thẳng hàng
- longest side | cạnh lớn nhất
- opposite angle | góc đối diện
- sum, difference | tổng, hiệu
- range of values | khoảng giá trị
- opposite ray | tia đối
:::

## Summary

- In triangle $ABC$: $BC<AB+AC$, and likewise for the other two sides.
- Consequence: $|AB-AC|<BC<AB+AC$.
- Three lengths $a\le b\le c$ are the sides of a triangle if and only if $c<a+b$.
- Equality happens when the three points are collinear; then there is no triangle.
- The direct path between two points is shorter than a detour through a point that is not on the segment.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Which of the following sets of lengths (in cm) are the sides of a triangle?

a) $6$; $8$; $10$.

b) $4$; $9$; $13$.

c) $5$; $6$; $12$.

::hint
**What you need:** three lengths $a\le b\le c$ are the sides of a triangle when $c<a+b$.

**Steps:**
1. Find the largest of the three numbers.
2. Compare it with the sum of the other two.

::solution
a) We have $6+8=14>10$, so a triangle exists.

b) We have $4+9=13$, which is not less than $13$, so no triangle exists.

c) We have $5+6=11<12$, so no triangle exists.

So only the set in a) gives the sides of a triangle.

**Answer.** a) Yes; b) No; c) No.
:::

:::exercise
In triangle $ABC$, $AB=3$ cm, $AC=8$ cm and the length $BC$ (in cm) is a prime number. Find $BC$.

::hint
**What you need:** $|AC-AB|<BC<AC+AB$.

**Steps:**
1. Find the range of $BC$.
2. List the prime numbers in that range.

::solution
We have $8-3<BC<8+3$, that is $5<BC<11$. The only prime number in this range is $7$ (since $5$ and $11$ are not in the range).

So $BC=7$ cm.

**Answer.** $BC=7$ cm.
:::

:::exercise
An isosceles triangle has two sides of length $5$ cm and $12$ cm. Find its perimeter.

::hint
**What you need:** an isosceles triangle has two equal sides; the three sides must satisfy the triangle inequality.

**Steps:**
1. Try two cases for the third side: $5$ cm or $12$ cm.
2. Reject the case that does not give a triangle.

::solution
If the third side is $5$ cm, the sides are $5$; $5$; $12$. We have $5+5=10<12$, so no triangle exists.

If the third side is $12$ cm, the sides are $12$; $12$; $5$. We have $12+5=17>12$, so a triangle exists, with perimeter $12+12+5=29$ (cm).

So the perimeter of the triangle is $29$ cm.

**Answer.** $29$ cm.
:::

:::exercise
Minh has a piece of wire $24$ cm long and wants to bend it into a triangle whose three sides are whole numbers of centimetres. What is the greatest possible length of the longest side?

::hint
**What you need:** the longest side is shorter than the sum of the other two.

**Steps:**
1. Let the longest side be $c$; the other two sides add up to $24-c$.
2. Write the triangle inequality for $c$, find the largest $c$, then check it.

::solution
Let the longest side be $c$ (cm). The other two sides add up to $24-c$. By the triangle inequality, $c<24-c$, so $c<12$. Since $c$ is a whole number, $c\le 11$.

For $c=11$, take the sides $11$; $11$; $2$: the largest is $11$ and $11+2=13>11$, so this works.

So the longest side can be at most $11$ cm. (Remark: the longest side is always less than half the perimeter.)

**Answer.** $11$ cm.
:::

:::exercise
Lan walks from home $A$ to school $B$. The straight road $AB$ is $800$ m long. Lan tries a detour through the market $C$ (which is not on the line $AB$) and measures $AC=500$ m and $CB=420$ m.

a) How much longer is the detour through the market than the direct road?

b) Someone measures $CB=250$ m. Is this measurement believable? Why?

::hint
**What you need:** in triangle $ABC$, $AB<AC+CB$.

**Steps:**
1. a) Work out $AC+CB$ and subtract $AB$.
2. b) Work out $AC+CB$ with $CB=250$ and compare it with $AB$.

::solution
a) The detour is $500+420=920$ (m) long. It is $920-800=120$ (m) longer than the direct road.

b) If $CB=250$ m, then $AC+CB=500+250=750$ m $<800$ m $=AB$. This contradicts the triangle inequality $AB<AC+CB$, so the measurement is not believable.

So a) $120$ m; b) not believable because $750<800$.

**Answer.** a) $120$ m; b) not believable.
:::

:::exercise
Prove that the perimeter of triangle $ABC$ is greater than $2BC$.

::hint
**What you need:** $BC<AB+AC$.

**Steps:**
1. Write the triangle inequality for the side $BC$.
2. Add $BC$ to both sides.

::solution
By the triangle inequality, $AB+AC>BC$. Adding $BC$ to both sides, we get $AB+AC+BC>2BC$.

So the perimeter of triangle $ABC$ is greater than $2BC$.

**Answer.** Perimeter $>2BC$.
:::

:::exercise
Remember the previous lesson on angles and opposite sides. In triangle $ABC$, $\angle A=70^\circ$ and $\angle B=50^\circ$.

a) Which side is the longest and which is the shortest?

b) Given $AC=5$ cm and $AB=7$ cm, which of the numbers $6$; $8$; $12$ (cm) could be the length of $BC$?

::hint
**What you need:** in a triangle the side opposite the larger angle is longer; and $BC<AB+AC$.

**Steps:**
1. Work out $\angle C$ and order the angles.
2. Use the order of the sides and the triangle inequality to find the range of $BC$.

::solution
a) We have $\angle C=180^\circ-70^\circ-50^\circ=60^\circ$. Since $\angle A>\angle C>\angle B$, we get $BC>AB>AC$. So $BC$ is the longest and $AC$ is the shortest.

b) Since $BC>AB=7$ and $BC<AB+AC=12$, we have $7<BC<12$. Of the three numbers, only $8$ satisfies this ($6<7$, and $12$ is not less than $12$).

So $BC=8$ cm.

**Answer.** a) $BC$ longest, $AC$ shortest; b) $8$ cm.
:::

:::exercise Challenge
A point $M$ lies inside triangle $ABC$. Prove that $MB+MC<AB+AC$.

::hint
**What you need:** the triangle inequality, used twice.

**Steps:**
1. Extend $BM$ to meet $AC$ at $D$.
2. Use triangle $MDC$ and then triangle $ABD$.

::solution
Extend $BM$ to meet $AC$ at $D$. Then $D$ lies between $A$ and $C$ and $BD=BM+MD$.

In triangle $MDC$ we have $MC<MD+DC$. Hence $MB+MC<MB+MD+DC=BD+DC$.

In triangle $ABD$ we have $BD<BA+AD$. Hence $BD+DC<BA+AD+DC=BA+AC$.

From the two inequalities, $MB+MC<AB+AC$.

**Answer.** Proved.
:::

## Mini test

:::quiz
::mc
Which of the following sets of lengths gives the sides of a triangle?
A. $3$ cm; $4$ cm; $8$ cm.
B. $2$ cm; $7$ cm; $9$ cm.
C. $5$ cm; $6$ cm; $10$ cm.
D. $4$ cm; $4$ cm; $8$ cm.
::key C
In B: $5+6=11>10$. A has $3+4=7<8$, B has $2+7=9$ (equal, not less), and D has $4+4=8$ (equal).

::mc
An isosceles triangle has two sides of length $4$ cm and $9$ cm. Its perimeter is
A. $17$ cm.
B. $13$ cm.
C. $18$ cm.
D. $22$ cm.
::key D
The third side must be $9$ cm because $4+4=8<9$, so the perimeter is $9+9+4=22$ cm. A is $4+4+9$ (no triangle), B is $4+9$, and C is $9+9$.

::mc
A triangle has two sides of length $6$ cm and $10$ cm. The third side could be
A. $9$ cm.
B. $16$ cm.
C. $17$ cm.
D. $4$ cm.
::key A
The third side $x$ satisfies $4<x<16$. A and B are the two boundary values (excluded because of equality), and C is greater than $16$.

::mc
A piece of wire $30$ cm long is bent into a triangle with whole-number sides in cm. The greatest possible length of the longest side is
A. $15$ cm.
B. $14$ cm.
C. $16$ cm.
D. $13$ cm.
::key B
The longest side $c$ satisfies $c<30-c$, that is $c<15$, so $c\le 14$. B equals half the perimeter (equality), C is more than half, and D is below the maximum.

::tf
In triangle $ABC$, $AB=5$ cm and $AC=9$ cm. Decide whether each statement is true or false.
a) $BC$ could be $4$ cm.
b) $BC$ could be $13$ cm.
c) If $BC=10$ cm, the perimeter of the triangle is $24$ cm.
d) $BC$ has exactly $9$ possible whole-number values.
::key F T T T
a) False: $4<BC<14$, so $BC=4$ is excluded because $5+4=9$ (equality). b) True: $4<13<14$. c) True: $5+9+10=24$. d) True: $BC\in\{5,6,\dots,13\}$, which is $9$ numbers.

::sa
In triangle $ABC$, $AB=7$ cm and $AC=12$ cm. How many whole-number values (in cm) can $BC$ take?
::key 13
We have $5<BC<19$, so $BC\in\{6,7,\dots,18\}$, which is $18-6+1=13$ values.

::sa
An isosceles triangle has two sides of length $8$ cm and $17$ cm. Find its perimeter (in cm).
::key 42
The third side must be $17$ cm because $8+8=16<17$. The perimeter is $17+17+8=42$ (cm).
:::
