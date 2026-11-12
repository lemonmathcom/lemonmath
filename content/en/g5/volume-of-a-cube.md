---
title: Volume of a cube
description: Learn to find the volume of a cube by multiplying the edge by itself three times, change units of volume and solve word problems.
minutes: 15
---

:::goals
- Know the formula for the volume of a cube: $V=a\times a\times a$.
- Find the volume of a cube whose edge is a whole number or a decimal.
- Change the edge to the right unit before calculating, and write the correct unit $\text{cm}^3$, $\text{dm}^3$ or $\text{m}^3$.
- Solve word problems about the volume of a cube.
:::

A cube-shaped fish tank has an edge of $4\ \text{dm}$. What is the greatest number of litres of water it can hold?

You already know how to find the volume of a cuboid. This lesson gives you a short way to do it just for cubes.

## Let's explore

Build a big cube with an edge of $3\ \text{cm}$ from small cubes. Each small cube has an edge of $1\ \text{cm}$ and a volume of $1\ \text{cm}^3$.

- The bottom layer has $3$ rows of $3$ cubes: $3\times3=9$ (cubes).
- There are $3$ layers like this: $9\times3=27$ (cubes).
- So the volume of the big cube is $27\ \text{cm}^3$.

Do the same for other edges:

| Edge | $1\ \text{cm}$ | $2\ \text{cm}$ | $3\ \text{cm}$ | $4\ \text{cm}$ |
|---|---|---|---|---|
| Number of small cubes | $1\times1\times1=1$ | $2\times2\times2=8$ | $3\times3\times3=27$ | $4\times4\times4=64$ |

Do you see it? The number of small cubes is the **edge times the edge times the edge**.

:::diagram A cube with edge $a$
alt: A cube ABCD.A'B'C'D' with the hidden edges dashed and the edge AB labelled a
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 1.5,-0.5 "a"
:::

:::theorem Volume of a cube
To find the volume of a cube, multiply the edge by the edge and then by the edge again:
$$V=a\times a\times a,$$
where $a$ is the length of the edge. The unit of volume matches the unit of the edge: cm gives $\text{cm}^3$, dm gives $\text{dm}^3$ and m gives $\text{m}^3$.
:::

**Why is it true?** A cube is a cuboid whose length, width and height are all equal to $a$. The volume of a cuboid is the area of its base times its height. The base has area $a\times a$ and the height is $a$, so $V=a\times a\times a$.

Remember also that $1\ \text{dm}^3=1$ litre and $1\ \text{m}^3=1000\ \text{dm}^3$.

## Examples

We start with a cube whose edge is a whole number.

:::example Find the volume of a cube with edge $5\ \text{cm}$
**Solution.** Using $V=a\times a\times a$ with $a=5$, we have:
$$V=5\times5\times5=125\ (\text{cm}^3).$$
So the volume of the cube is $125\ \text{cm}^3$.
:::

Now we answer the question at the start.

:::example The fish tank
A cube-shaped fish tank has an edge of $4\ \text{dm}$. What is the greatest number of litres of water it can hold?

**Solution.** The volume of the tank is:
$$4\times4\times4=64\ (\text{dm}^3).$$
Since $1\ \text{dm}^3=1$ litre, the tank can hold at most $64$ litres of water.

**Answer.** $64$ litres.
:::

The edge can also be a decimal.

:::example The water tank
A cube-shaped water tank has an edge of $0.5\ \text{m}$. Find its volume in $\text{m}^3$, then change it to litres.

**Solution.** The volume of the tank is:
$$0.5\times0.5\times0.5=0.25\times0.5=0.125\ (\text{m}^3).$$
Since $1\ \text{m}^3=1000\ \text{dm}^3$, we have $0.125\ \text{m}^3=125\ \text{dm}^3=125$ litres.

**Answer.** $0.125\ \text{m}^3$; $125$ litres.
:::

When the answer must be in another unit, change the edge first.

:::example Volume in $\text{dm}^3$
Find the volume of a cube with edge $20\ \text{cm}$, giving the answer in $\text{dm}^3$.

**Solution.** We change the edge to dm: $20\ \text{cm}=2\ \text{dm}$. The volume is:
$$2\times2\times2=8\ (\text{dm}^3).$$
**Check.** $20\times20\times20=8000\ (\text{cm}^3)$, and $1\ \text{dm}^3=1000\ \text{cm}^3$, so $8000\ \text{cm}^3=8\ \text{dm}^3$. Correct.

So the volume of the cube is $8\ \text{dm}^3$.
:::

The next problem needs more steps, so we use *Understand, Plan, Solve, Look back*.

:::example Packing wooden blocks into a box
A plastic box is a cube with an edge of $6\ \text{cm}$. The teacher fills it with wooden cubes with an edge of $2\ \text{cm}$. How many wooden cubes does she fit in?

**Solution.**

*Understand.* The box has edge $6\ \text{cm}$ and each wooden cube has edge $2\ \text{cm}$. We need the number of cubes that fill the box.

*Plan.* Divide the volume of the box by the volume of one wooden cube.

*Solve.* The volume of the box is $6\times6\times6=216\ (\text{cm}^3)$. The volume of one wooden cube is $2\times2\times2=8\ (\text{cm}^3)$. The number of cubes is:
$$216\div8=27\ (\text{cubes}).$$
*Look back.* Another way: each edge holds $6\div2=3$ cubes, so there are $3\times3\times3=27$ cubes, the same result. What if the wooden cubes had edge $4\ \text{cm}$? Each edge holds only $1$ cube because $6$ is not a multiple of $4$, so only $1$ cube fits, even though $216\div64=3.375$. Dividing volumes only works when the cubes fit exactly.

**Answer.** $27$ wooden cubes.
:::

:::warning Mistakes to watch out for
- **Multiplying the edge by $3$.** Wrong: $5\times3=15\ \text{cm}^3$. Why it is wrong: a cube has $3$ dimensions, each equal to $a$, so we multiply the edge by itself three times. Right: $5\times5\times5=125\ \text{cm}^3$.
- **Writing the wrong unit.** Wrong: "Answer: $125\ \text{cm}^2$". Why it is wrong: $\text{cm}^2$ is a unit of area. Right: $125\ \text{cm}^3$.
- **Forgetting to change the unit.** Wrong: for an edge of $20\ \text{cm}$, the volume is $20\times20\times20=8000\ \text{dm}^3$. Why it is wrong: $8000$ is a number of $\text{cm}^3$, not $\text{dm}^3$. Right: $20\ \text{cm}=2\ \text{dm}$, so the volume is $8\ \text{dm}^3$.
:::

## Key terms

:::terms
- volume | thể tích
- cube | hình lập phương
- edge | cạnh
- cubic centimetre | xăng-ti-mét khối
- cubic decimetre | đề-xi-mét khối
- cubic metre | mét khối
- litre | lít
- cuboid | hình hộp chữ nhật
:::

## Summary

- The volume of a cube with edge $a$ is $V=a\times a\times a$.
- The unit of volume matches the unit of the edge ($\text{cm}^3$, $\text{dm}^3$, $\text{m}^3$).
- Change the edge to the unit you want before calculating. Remember $1\ \text{dm}^3=1$ litre and $1\ \text{m}^3=1000\ \text{dm}^3$.
- To find how many small cubes fit, divide the volumes or count the cubes along each edge.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find the volume of a cube with edge $7\ \text{cm}$.

::hint
**What you need:** $V=a\times a\times a$.

**Steps:**
1. Write a product of three equal factors.
2. Multiply step by step and write the unit.

::solution
$$V=7\times7\times7=49\times7=343\ (\text{cm}^3).$$

**Answer.** $343\ \text{cm}^3$.
:::

:::exercise
A cube has an edge of $10\ \text{dm}$. Find its volume in $\text{dm}^3$, then change it to $\text{m}^3$.

::hint
**What you need:** $1\ \text{m}^3=1000\ \text{dm}^3$.

**Steps:**
1. Work out $10\times10\times10$.
2. Change the result to $\text{m}^3$.

::solution
$$10\times10\times10=1000\ (\text{dm}^3)=1\ (\text{m}^3).$$
This is also a cube with edge $1\ \text{m}$, because $10\ \text{dm}=1\ \text{m}$.

**Answer.** $1000\ \text{dm}^3$; $1\ \text{m}^3$.
:::

:::exercise
Find the volume of a cube with edge $1.2\ \text{dm}$.

::hint
**What you need:** multiply decimals like whole numbers, then count the decimal places.

**Steps:**
1. Work out $1.2\times1.2$.
2. Multiply the result by $1.2$.

::solution
$$1.2\times1.2\times1.2=1.44\times1.2=1.728\ (\text{dm}^3).$$

**Answer.** $1.728\ \text{dm}^3$.
:::

:::exercise
Find the volume of a cube with edge $30\ \text{cm}$, giving the answer in $\text{dm}^3$.

::hint
**What you need:** $10\ \text{cm}=1\ \text{dm}$. Change the edge before calculating.

**Steps:**
1. Change $30\ \text{cm}$ to dm.
2. Work out the volume.

::solution
We have $30\ \text{cm}=3\ \text{dm}$. The volume is:
$$3\times3\times3=27\ (\text{dm}^3).$$

**Answer.** $27\ \text{dm}^3$.
:::

:::exercise
A cube-shaped water tank has an edge of $6\ \text{dm}$. How many litres of water does it hold when full?

::hint
**What you need:** $1\ \text{dm}^3=1$ litre.

**Steps:**
1. What do we know? What are we asked?
2. Work out the volume in $\text{dm}^3$, then change it to litres.
3. Check: is $6\times6=36$ the area of the base?

::solution
The volume of the tank is:
$$6\times6\times6=216\ (\text{dm}^3)=216\ \text{litres}.$$

**Answer.** $216$ litres.
:::

:::exercise
A cube-shaped cardboard carton has an edge of $4\ \text{dm}$. Small cube-shaped boxes with an edge of $2\ \text{dm}$ are packed into it. What is the greatest number of boxes that fill the carton?

::hint
**What you need:** each edge of the carton holds (edge of carton) $\div$ (edge of box) boxes.

**Steps:**
1. How many boxes fit along one edge?
2. How many boxes are there in all three directions?
3. Check by dividing the volumes.

::solution
Each edge holds $4\div2=2$ (boxes). The number of boxes is $2\times2\times2=8$ (boxes).

**Check.** $4\times4\times4=64\ (\text{dm}^3)$, $2\times2\times2=8\ (\text{dm}^3)$ and $64\div8=8$. Correct.

**Answer.** $8$ boxes.
:::

:::exercise
Remember the lesson on the volume of a cuboid. A wooden cuboid is $8\ \text{cm}$ long, $4\ \text{cm}$ wide and $2\ \text{cm}$ high. A wooden cube has an edge of $4\ \text{cm}$. Which block has the greater volume?

::hint
**What you need:** the volume of a cuboid is length times width times height.

**Steps:**
1. Work out the volume of each block.
2. Compare the two numbers.

::solution
Volume of the cuboid: $8\times4\times2=64\ (\text{cm}^3)$.

Volume of the cube: $4\times4\times4=64\ (\text{cm}^3)$.

Since $64=64$, the two blocks have the same volume.

**Answer.** The two blocks have the same volume ($64\ \text{cm}^3$).
:::

:::exercise
A cube has a volume of $216\ \text{cm}^3$. Find the length of its edge.

::hint
**What you need:** find the number $a$ such that $a\times a\times a=216$.

**Steps:**
1. Try $a=5$ and $a=7$ to see which range the edge is in.
2. Try the number in between.

::solution
We have $5\times5\times5=125$ (less than $216$) and $7\times7\times7=343$ (more than $216$). Try $6$: $6\times6\times6=216$.

**Answer.** $6\ \text{cm}$.
:::

:::exercise Challenge
If the edge of a cube is doubled, how many times greater does the volume become? Try it with an edge of $3\ \text{cm}$.

::hint
**What you need:** $V=a\times a\times a$.

**Steps:**
1. Work out the volume when the edge is $3\ \text{cm}$.
2. Work out the volume when the edge is $6\ \text{cm}$ and compare.

::solution
Edge $3\ \text{cm}$: $3\times3\times3=27\ (\text{cm}^3)$. Edge $6\ \text{cm}$: $6\times6\times6=216\ (\text{cm}^3)$. We have $216\div27=8$.

The edge is doubled in all three dimensions, so the volume is multiplied by $2\times2\times2=8$.

**Answer.** The volume becomes $8$ times greater.
:::

## Mini test

:::quiz
::mc
The volume of a cube with edge $4\ \text{cm}$ is
A. $12\ \text{cm}^3$.
B. $16\ \text{cm}^3$.
C. $64\ \text{cm}^2$.
D. $64\ \text{cm}^3$.
::key D
$4\times4\times4=64$, and the unit is $\text{cm}^3$. Option A is $4\times3$, B is $4\times4$ (only two factors) and C has the wrong unit.

::mc
The volume of a cube with edge $2\ \text{dm}$ is
A. $8\ \text{dm}^3$.
B. $6\ \text{dm}^3$.
C. $4\ \text{dm}^3$.
D. $8\ \text{dm}^2$.
::key A
$2\times2\times2=8\ (\text{dm}^3)$. Option B is $2\times3$, C is $2\times2$ and D has the wrong unit.

::mc
A cube has an edge of $20\ \text{cm}$. Its volume in $\text{dm}^3$ is
A. $8000\ \text{dm}^3$.
B. $8\ \text{dm}^3$.
C. $40\ \text{dm}^3$.
D. $80\ \text{dm}^3$.
::key B
$20\ \text{cm}=2\ \text{dm}$, so $V=2\times2\times2=8\ (\text{dm}^3)$. Option A forgets to change the unit, D is $20\times4$ and C is $20\times2$.

::mc
A cube-shaped tank has an edge of $3\ \text{dm}$. When full, it holds
A. $9$ litres.
B. $81$ litres.
C. $27$ litres.
D. $18$ litres.
::key C
$3\times3\times3=27\ (\text{dm}^3)=27$ litres. Option A is the area of the base and D is $3\times6$.

::tf
Consider a cube with edge $5\ \text{cm}$.
a) Its volume is $5\times3=15\ \text{cm}^3$.
b) Its volume is $125\ \text{cm}^3$.
c) If the edge is doubled to $10\ \text{cm}$, the volume is $1000\ \text{cm}^3$.
d) If the edge is doubled, the volume is only doubled too.
::key F T T F
a) False: the edge must be multiplied three times, $5\times5\times5=125$. b) True: $5\times5\times5=125$. c) True: $10\times10\times10=1000$. d) False: the volume becomes $8$ times greater ($1000\div125=8$).

::sa
Find the volume of a cube with edge $9\ \text{cm}$ (in $\text{cm}^3$).
::key 729
$9\times9\times9=81\times9=729$.

::sa
A cube has a volume of $512\ \text{cm}^3$. How many centimetres long is its edge?
::key 8
$8\times8\times8=512$, so the edge is $8\ \text{cm}$.
:::

