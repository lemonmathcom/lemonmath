---
title: Pythagoras' theorem and its applications
description: State and prove Pythagoras' theorem and its converse, find lengths in right-angled triangles, diagonals and heights, and solve real-life problems.
minutes: 25
---

:::goals
- State Pythagoras' theorem and its converse.
- Find the length of a side of a right-angled triangle when the other two are known.
- Decide whether a triangle is right-angled from the lengths of its three sides.
- Apply the theorem to find diagonals and heights and to solve real-life problems.
:::

Suppose a ladder $5$ m long leans against a vertical wall, with its foot on level ground $3$ m from the wall. How high up the wall does the ladder reach?

The ladder, the wall and the ground form a right-angled triangle in which we know two sides and need the third. The relationship between the three sides of a right-angled triangle is one of the most famous and useful results in geometry: Pythagoras' theorem.

## Let's explore

We draw a right-angled triangle with legs $3$ and $4$ and hypotenuse $5$, then build a square on each of its three sides. The areas of the squares are $3^2=9$, $4^2=16$ and $5^2=25$.

:::diagram Three squares built on the sides of a right-angled triangle
alt: A right-angled triangle at A with legs 3 and 4; on each side a square is built, with areas 9, 16 and 25
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above-left
point P1 3,-3 ""
point P2 0,-3 ""
point Q1 -4,4 ""
point Q2 -4,0 ""
point R1 7,3 ""
point R2 4,7 ""
polygon A B C
polygon A B P1 P2
polygon A C Q1 Q2
polygon B R1 R2 C
label 1.5,-1.5 "9"
label -2,2 "16"
label 5.5,3.5 "25"
:::

We see that $9+16=25$: the total area of the squares on the two legs equals the area of the square on the hypotenuse. Is this true for every right-angled triangle? This lesson answers that.

## Pythagoras' theorem

:::theorem Pythagoras' theorem
In a right-angled triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the two legs.

If $\triangle ABC$ is right-angled at $A$, then
$$BC^2=AB^2+AC^2.$$
:::

**Why?** Draw the altitude $AH$ ($H\in BC$). Triangles $HBA$ and $ABC$ each have a right angle and share the angle $B$, so they are similar (AA), giving $\dfrac{BH}{AB}=\dfrac{AB}{BC}$, that is $AB^2=BH\cdot BC$. Similarly $\triangle HCA\sim\triangle ACB$ gives $AC^2=CH\cdot BC$. Adding the two relations:
$$AB^2+AC^2=BC\cdot(BH+CH)=BC\cdot BC=BC^2.$$

:::example Finding sides of a right-angled triangle
a) Triangle $ABC$ is right-angled at $A$ with $AB=6$, $AC=8$. Find $BC$.

b) Triangle $DEF$ is right-angled at $D$ with hypotenuse $EF=13$ and $DE=5$. Find $DF$.

**Solution.** a) By Pythagoras' theorem, $BC^2=6^2+8^2=36+64=100$, so $BC=10$.

b) By Pythagoras' theorem, $EF^2=DE^2+DF^2$, so $DF^2=13^2-5^2=169-25=144$, and $DF=12$.

So a) $BC=10$; b) $DF=12$.
:::

The result is not always a whole number; then we use a square root.

:::example A result that is not a whole number
Triangle $ABC$ is right-angled at $A$ with $AB=2$, $AC=3$. Find $BC$ (to 2 decimal places).

**Solution.** By Pythagoras' theorem, $BC^2=2^2+3^2=4+9=13$. Hence $BC=\sqrt{13}\approx3.61$.

So $BC=\sqrt{13}\approx3.61$.
:::

## The converse of Pythagoras' theorem

:::theorem Converse of Pythagoras' theorem
If in a triangle the square of one side equals the sum of the squares of the other two, then the triangle is right-angled, and the right angle is opposite the longest side.

Precisely, if $BC^2=AB^2+AC^2$ then $\triangle ABC$ is right-angled at $A$.
:::

**Why?** Construct a triangle $A'B'C'$ right-angled at $A'$ with $A'B'=AB$ and $A'C'=AC$. By Pythagoras' theorem, $B'C'^2=AB^2+AC^2=BC^2$, so $B'C'=BC$. Triangles $ABC$ and $A'B'C'$ have three pairs of equal sides, so they are congruent (SSS). Hence $\angle A=\angle A'=90^\circ$.

:::example Checking for a right-angled triangle
Which of these triangles is right-angled?

a) Sides $9$, $12$, $15$.

b) Sides $6$, $7$, $9$.

**Solution.** We compare the square of the longest side with the sum of the squares of the other two.

a) $15^2=225$ and $9^2+12^2=81+144=225$. The two sides are equal, so the triangle is right-angled, with the right angle opposite the side $15$.

b) $9^2=81$ and $6^2+7^2=36+49=85$. They are not equal, so the triangle is not right-angled.

So a) is right-angled; b) is not.
:::

Triples of positive whole numbers satisfying $a^2+b^2=c^2$ are called **Pythagorean triples**, for example $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ and every triple obtained by multiplying all three numbers by the same whole number, such as $(6,8,10)$.

## Applications

Pythagoras' theorem lets us find many lengths in geometry and in real life.

:::example Diagonals
Find the diagonal of a rectangle with sides $12$ and $5$, and of a square with side $4$ (to 2 decimal places).

**Solution.** A diagonal splits a rectangle into two right-angled triangles whose legs are the sides of the rectangle. The diagonal of the rectangle is $\sqrt{12^2+5^2}=\sqrt{169}=13$. The diagonal of the square of side $4$ is $\sqrt{4^2+4^2}=\sqrt{32}=4\sqrt2\approx5.66$.

So the diagonal of the rectangle is $13$ and the diagonal of the square is $4\sqrt2\approx5.66$.
:::

:::example The height of an equilateral triangle
Find the height of an equilateral triangle with side $6$ (to 2 decimal places).

**Solution.** The altitude $AH$ of the equilateral triangle $ABC$ is also a median, so $BH=3$. In triangle $ABH$, right-angled at $H$: $AH^2=AB^2-BH^2=36-9=27$, so $AH=\sqrt{27}=3\sqrt3\approx5.20$.

So the height is $3\sqrt3\approx5.20$.
:::

We return to the ladder at the start, using the four steps of solving a problem.

:::example A ladder against a wall
A ladder $5$ m long leans against a vertical wall, with its foot $3$ m from the wall (an imagined case). Find the height reached by the top of the ladder. If the foot is pulled $1$ m further from the wall (the ladder's length unchanged), how far does the top slide down?

**Solution.**

*Understand.* The ladder is the hypotenuse ($5$ m) of a right-angled triangle, and the distance from the foot to the wall is one leg ($3$ m); we need the other leg.

*Plan.* Use Pythagoras' theorem with the known hypotenuse.

*Solve.* Let $h$ be the height of the top of the ladder (m). We have $h^2+3^2=5^2$, so $h^2=25-9=16$ and $h=4$. When the foot is $4$ m from the wall: $h'^2=25-16=9$, so $h'=3$. The top slides down $4-3=1$ (m).

*Look back.* Check: $3^2+4^2=5^2$. The result is reasonable: pulling the foot further out lowers the top, and we have the familiar Pythagorean triple $(3,4,5)$.

So the top of the ladder is $4$ m high, and if the foot is pulled out another $1$ m the top slides down $1$ m.
:::

:::warning Mistakes to watch out for
- **Adding instead of subtracting when finding a leg.** Wrong: with hypotenuse $13$ and one leg $5$, the other leg is $\sqrt{13^2+5^2}$. Why it is wrong: the hypotenuse is the longest side, so $13^2=5^2+x^2$. Right: $x=\sqrt{13^2-5^2}=12$.
- **Thinking $\sqrt{a^2+b^2}=a+b$.** Wrong: legs $3$ and $4$ give hypotenuse $3+4=7$. Why it is wrong: $\sqrt{3^2+4^2}=\sqrt{25}=5\neq7$. Right: square, add, and only then take the square root.
- **Comparing with a side that is not the longest when using the converse.** Wrong: for sides $5$, $12$, $13$, checking $5^2+13^2=12^2$ and concluding it is not right-angled. Why it is wrong: the hypotenuse (if there is one) must be the longest side. Right: $5^2+12^2=13^2$, so the triangle is right-angled.
:::

**Connections.** This lesson uses the similar triangles of [similar triangles](lesson:similar-triangles) and [the three similarity conditions](lesson:triangle-similarity-conditions) to prove the theorem, together with the square roots from earlier years. Pythagoras' theorem is used everywhere: in building, design and surveying, and in later years it is the foundation of trigonometry and coordinate geometry.

## Key terms

:::terms
- Pythagoras' theorem | định lí Pythagore
- converse of Pythagoras' theorem | định lí Pythagore đảo
- hypotenuse | cạnh huyền
- leg | cạnh góc vuông
- Pythagorean triple | bộ ba Pythagore
- diagonal | đường chéo
- altitude (height) | đường cao
- square root | căn bậc hai
:::

## Summary

- Pythagoras' theorem: if $\triangle ABC$ is right-angled at $A$, then $BC^2=AB^2+AC^2$.
- Converse: if $BC^2=AB^2+AC^2$, then $\triangle ABC$ is right-angled at $A$.
- To find the hypotenuse, add the two squares and take the square root; to find a leg, subtract the square of the other leg from the square of the hypotenuse.
- The diagonal of a rectangle with sides $a$, $b$ is $\sqrt{a^2+b^2}$; the diagonal of a square of side $a$ is $a\sqrt2$.
- Familiar Pythagorean triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find the hypotenuse of a right-angled triangle whose legs are:

a) $9$ and $12$.

b) $7$ and $24$.

::hint
**What you need:** $c^2=a^2+b^2$.

**Steps:**
1. Square the two legs and add.
2. Take the square root.

::solution
a) $c^2=81+144=225$, so $c=15$.

b) $c^2=49+576=625$, so $c=25$.

**Answer.** a) $15$. b) $25$.
:::

:::exercise
Find the remaining leg of a right-angled triangle given:

a) hypotenuse $17$, one leg $8$.

b) hypotenuse $10$, one leg $6$.

::hint
**What you need:** $a^2=c^2-b^2$ where $c$ is the hypotenuse.

**Steps:**
1. Subtract the square of the known leg from the square of the hypotenuse.
2. Take the square root.

::solution
a) $a^2=289-64=225$, so $a=15$.

b) $a^2=100-36=64$, so $a=8$.

**Answer.** a) $15$. b) $8$.
:::

:::exercise
A right-angled triangle has legs $4$ and $7$. Find the hypotenuse (to 2 decimal places).

::hint
**What you need:** when the sum of squares is not a perfect square, use a square root.

**Steps:**
1. Work out $4^2+7^2$.
2. Take the square root and round.

::solution
$c^2=16+49=65$, so $c=\sqrt{65}\approx8.06$.

**Answer.** $\sqrt{65}\approx8.06$.
:::

:::exercise
Which triangle is right-angled?

a) Sides $7$, $24$, $25$.

b) Sides $8$, $10$, $12$.

c) Sides $9$, $40$, $41$.

::hint
**What you need:** the converse of Pythagoras' theorem, compared with the longest side.

**Steps:**
1. Identify the longest side.
2. Compare its square with the sum of the other two squares.

::solution
a) $25^2=625$ and $7^2+24^2=49+576=625$: right-angled.

b) $12^2=144$ and $8^2+10^2=164$: not right-angled.

c) $41^2=1681$ and $9^2+40^2=81+1600=1681$: right-angled.

**Answer.** a) and c) are right-angled.
:::

:::exercise
Find the diagonal of a rectangle with sides $15$ and $8$, and of a square with side $5$ (to 2 decimal places).

::hint
**What you need:** a diagonal splits the figure into two right-angled triangles.

**Steps:**
1. Use $d^2=a^2+b^2$.
2. For the square, $a=b$.

::solution
Rectangle: $d=\sqrt{15^2+8^2}=\sqrt{289}=17$. Square: $d=\sqrt{25+25}=\sqrt{50}=5\sqrt2\approx7.07$.

**Answer.** $17$; $5\sqrt2\approx7.07$.
:::

:::exercise
Suppose a ladder $6.5$ m long leans against a vertical wall, with its foot $2.5$ m from the wall. How high up the wall does the top of the ladder reach?

::hint
**What you need:** the ladder is the hypotenuse.

**Steps:**
1. Write $h^2=6.5^2-2.5^2$.
2. Work it out and take the square root.

::solution
$h^2=42.25-6.25=36$, so $h=6$.

Check: $2.5^2+6^2=6.25+36=42.25=6.5^2$.

So the top of the ladder is $6$ m high.

**Answer.** $6$ m.
:::

:::exercise
Suppose a television screen is $96$ cm wide and $54$ cm high. Find the diagonal of the screen in cm (to the nearest whole number) and in inches (given $1$ inch $=2.54$ cm, to the nearest whole number).

::hint
**What you need:** the diagonal is the hypotenuse.

**Steps:**
1. Work out $\sqrt{96^2+54^2}$.
2. Divide by $2.54$.

::solution
$d^2=9\,216+2\,916=12\,132$, so $d=\sqrt{12\,132}\approx110$ (cm). In inches: $\dfrac{110.14}{2.54}\approx43.4\approx43$ (inches).

**Answer.** About $110$ cm, that is about $43$ inches.
:::

:::exercise
Suppose two ships leave a port at the same time, one sailing north and the other east. After a while the first ship is $12$ km from the port and the second is $16$ km from the port. How far apart are the ships?

::hint
**What you need:** north and east are perpendicular directions.

**Steps:**
1. Draw a right-angled triangle with legs $12$ and $16$.
2. Find the hypotenuse.

::solution
The distance is $\sqrt{12^2+16^2}=\sqrt{144+256}=\sqrt{400}=20$ (km).

**Answer.** $20$ km.
:::

:::exercise
A rhombus $ABCD$ has diagonals $AC=16$ and $BD=12$ meeting at $O$. Find the side of the rhombus. (Recall: the diagonals of a rhombus are perpendicular and bisect each other.)

::hint
**What you need:** triangle $AOB$ is right-angled at $O$.

**Steps:**
1. Find $OA$ and $OB$.
2. Use Pythagoras' theorem in triangle $AOB$.

::solution
We have $OA=\dfrac{16}{2}=8$ and $OB=\dfrac{12}{2}=6$. Triangle $AOB$ is right-angled at $O$, so $AB^2=8^2+6^2=100$, giving $AB=10$.

So the side of the rhombus is $10$.

**Answer.** $10$.
:::

:::exercise Challenge
For positive whole numbers $m>n$, let $a=m^2-n^2$, $b=2mn$, $c=m^2+n^2$. Prove that $a^2+b^2=c^2$ (so $a$, $b$, $c$ are the sides of a right-angled triangle). Apply it with $m=3$, $n=2$.

::hint
**What you need:** expand the identities $(m^2-n^2)^2$ and $(m^2+n^2)^2$.

**Steps:**
1. Expand $a^2+b^2$.
2. Compare with $c^2$.

::solution
We have $a^2+b^2=(m^2-n^2)^2+(2mn)^2=m^4-2m^2n^2+n^4+4m^2n^2=m^4+2m^2n^2+n^4=(m^2+n^2)^2=c^2$. With $m=3$, $n=2$: $a=9-4=5$, $b=2\cdot3\cdot2=12$, $c=9+4=13$, and $5^2+12^2=13^2$.

So the formula always gives a Pythagorean triple.

**Answer.** Proved; $(5,12,13)$.
:::

## Mini test

:::quiz
::mc
A right-angled triangle has hypotenuse $13$ and one leg $5$. The other leg is
A. $8$.
B. $12$.
C. $18$.
D. $\sqrt{194}$.
::key B
$13^2-5^2=169-25=144$, so the other leg is $12$. A takes $13-5$, C takes $13+5$, D adds the squares instead of subtracting.

::mc
Which set of three sides forms a right-angled triangle?
A. $4$, $5$, $6$.
B. $5$, $6$, $7$.
C. $6$, $8$, $10$.
D. $6$, $7$, $8$.
::key C
$6^2+8^2=100=10^2$. Sets A, B and D do not satisfy $a^2+b^2=c^2$.

::mc
The diagonal of a rectangle with sides $12$ and $5$ is
A. $60$.
B. $17$.
C. $7$.
D. $13$.
::key D
$\sqrt{12^2+5^2}=\sqrt{169}=13$. B adds the two sides, C subtracts them, A multiplies them.

::mc
The diagonal of a square with side $4$ is
A. $4\sqrt2$.
B. $4$.
C. $8$.
D. $2\sqrt2$.
::key A
$\sqrt{4^2+4^2}=\sqrt{32}=4\sqrt2$. A is the sum of two sides, B is the side itself, D halves the result.

::tf
Triangle $ABC$ has $AB=9$, $AC=12$, $BC=15$. Decide whether each statement is true or false.
a) Triangle $ABC$ is not right-angled.
b) Triangle $ABC$ is right-angled at $A$.
c) The area of triangle $ABC$ is $54$.
d) The altitude from $A$ to $BC$ is $6$.
::key F T T F
a) False: $9^2+12^2=225=15^2$, so it is right-angled. b) True: the right angle is opposite the longest side $BC$. c) True: $\dfrac12\cdot9\cdot12=54$. d) False: $AH=\dfrac{2\cdot54}{15}=7.2$.

::sa
A right-angled triangle has legs $7$ and $24$. What is the hypotenuse?
::key 25
$\sqrt{49+576}=\sqrt{625}=25$.

::sa
A ladder $5$ m long leans against a wall, with its foot $3$ m from the wall. How many metres high does the top reach?
::key 4
$\sqrt{25-9}=4$.
:::
