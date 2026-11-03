---
title: Solving word problems with simultaneous equations
description: Choose unknowns, state conditions, form and solve simultaneous linear equations for real problems about numbers, speed, percentages and mixtures.
minutes: 20
---

:::goals
- Know the three steps for solving a word problem with simultaneous equations.
- Choose the unknowns, state their conditions and write the other quantities in terms of them.
- Solve problems about numbers, motion, percentages and mixing solutions.
:::

A farm keeps chickens and cows, $50$ animals in all. Nam counts $140$ legs altogether. How many chickens and how many cows are there on the farm?

The problem has two unknown numbers and two conditions. That is the sign that we should form a pair of simultaneous equations.

## Three steps to solve a problem

### Explore: suppose that…

Suppose all $50$ animals were chickens. Then there would be $50\cdot2=100$ legs, which is $140-100=40$ legs short. Each time we swap a chicken for a cow, the number of legs goes up by $2$. So we need $40\div2=20$ swaps: there are $20$ cows and $30$ chickens.

The "suppose" trick is clever but hard to find for harder problems. Forming simultaneous equations is a general method that works for every problem.

:::definition Steps for solving a problem with simultaneous equations
1. **Form the equations:** choose two unknowns and state their conditions; write the other unknown quantities in terms of them; form two equations from the two conditions in the problem.
2. **Solve the simultaneous equations.**
3. **Answer:** check that the solution satisfies the conditions on the unknowns, then state the answer.
:::

:::example Chickens and cows
Solve the problem at the start by forming simultaneous equations.

**Solution.** Let $x$ be the number of chickens and $y$ the number of cows ($x$, $y$ whole numbers). A chicken has $2$ legs and a cow has $4$, so:

$$\begin{cases} x+y=50\\ 2x+4y=140 \end{cases}\iff\begin{cases} x+y=50\\ x+2y=70 \end{cases}\Rightarrow y=20,\ x=30.$$

Both numbers are whole numbers. So the farm has $30$ chickens and $20$ cows.
:::

:::graph The solution is where the two lines meet
alt: The line x plus y equals 50 and the line x plus 2y equals 70 crossing at the point (30, 20)
x: 0..75
y: 0..55
plot: 50 - x ; 0..50
plot: (70 - x)/2 ; 0..70
point: (30, 20) "(30, 20)" above-right
label: (8, 47) "x + y = 50"
label: (58, 9) "2x + 4y = 140"
:::

## Number problems and motion problems

In digit problems, a two-digit number with tens digit $a$ and units digit $b$ is written $\overline{ab}=10a+b$.

:::example Swapping the digits
A two-digit number has digits that add up to $11$. If the two digits are swapped, the new number is $27$ more than the original number. Find the number.

**Solution.** Let the tens digit be $a$ and the units digit be $b$ ($a$, $b$ digits, $a\neq0$, $b\neq0$). The original number is $10a+b$ and the new number is $10b+a$:

$$\begin{cases} a+b=11\\ (10b+a)-(10a+b)=27 \end{cases}\iff\begin{cases} a+b=11\\ b-a=3 \end{cases}\Rightarrow b=7,\ a=4.$$

So the number is $47$.

**Check.** $74-47=27$.
:::

A motion problem on a river has more data, so we work through the four steps.

:::example A boat downstream and upstream
A motor boat travels $48$ km downstream in $2$ hours and $48$ km upstream in $3$ hours. Find the speed of the boat in still water and the speed of the current.

**Solution.**

*Understand.* Going downstream the current pushes the boat along; going upstream it holds the boat back.

*Plan.* Let $x$ be the speed of the boat in still water and $y$ the speed of the current (km/h, $x>y>0$). The downstream speed is $x+y$ and the upstream speed is $x-y$.

*Solve.* The downstream speed is $48\div2=24$ km/h and the upstream speed is $48\div3=16$ km/h:

$$\begin{cases} x+y=24\\ x-y=16 \end{cases}\Rightarrow 2x=40,\ x=20,\ y=4.$$

*Look back.* $x=20>y=4>0$, so the conditions hold. The boat travels at $20$ km/h in still water and the current flows at $4$ km/h.
:::

## Percentage problems

When a quantity $x$ increases by $15\%$, the increase is $0.15x$ and the new value is $1.15x$ (not $x+15$).

:::example Two production teams
Last month two production teams made $800$ products. This month team I made $15\%$ more than last month and team II made $20\%$ more, so together they made $945$ products. How many products did each team make last month?

**Solution.** Let $x$ and $y$ be the numbers of products made last month by team I and team II ($x$, $y$ positive whole numbers). Together the extra products come to $945-800=145$:

$$\begin{cases} x+y=800\\ 0.15x+0.2y=145 \end{cases}\iff\begin{cases} x+y=800\\ 3x+4y=2900 \end{cases}\Rightarrow y=2900-3\cdot800=500,\ x=300.$$

So last month team I made $300$ products and team II made $500$.

**Check.** $1.15\cdot300+1.2\cdot500=345+600=945$.
:::

:::warning Common mistakes
- **No conditions on the unknowns.** Numbers of animals or people must be whole numbers; speeds must be positive. If you get $y=-3$ or $x=12.5$ chickens, go back and check how you formed the equations.
- **Misreading percentages.** Wrong: "an increase of $15\%$" becomes $x+15$. Why it is wrong: it is $15\%$ **of $x$**. Right: $x+0.15x=1.15x$.
- **Mixing units.** Wrong: at $12$ km/h for $30$ minutes you cover $12\cdot30=360$ km. Why it is wrong: the speed is per hour. Right: $30$ minutes $=0.5$ hours, so you cover $6$ km.
:::

## Key terms

:::terms
- solving word problems with simultaneous equations | giải bài toán bằng cách lập hệ phương trình
- choose the unknowns | chọn ẩn
- condition on the unknowns | điều kiện của ẩn
- speed | vận tốc
- downstream / upstream | xuôi dòng / ngược dòng
- exceed (a previous level) | vượt mức
- percentage concentration | nồng độ phần trăm
- solution (mixture) | dung dịch
:::

## Summary

- Step 1: choose two unknowns, state their conditions, write the quantities in terms of them, form two equations.
- Step 2: solve the equations (substitution or elimination).
- Step 3: check against the conditions, then answer, with units.
- $\overline{ab}=10a+b$; downstream $x+y$, upstream $x-y$; an increase of $p\%$ means multiplying by $1+\dfrac{p}{100}$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
There are $36$ chickens and rabbits, with $100$ legs altogether. How many chickens and how many rabbits are there?

::hint
**What you need:** a chicken has $2$ legs and a rabbit has $4$.

**Steps:**
1. Let $x$ be the number of chickens and $y$ the number of rabbits.
2. Form the equations from the number of animals and the number of legs, then solve.

::solution
$x+y=36$ and $2x+4y=100$, that is $x+2y=50$. Subtracting: $y=14$, $x=22$.

**Answer.** $22$ chickens and $14$ rabbits.
:::

:::exercise
Class 9B visits a museum: $42$ people, teachers and students together. A student ticket costs $20$ thousand đồng, a teacher ticket costs $40$ thousand đồng, and the tickets cost $920$ thousand đồng in total. How many students and how many teachers are there?

::hint
**What you need:** the number of people and the cost give two equations.

**Steps:**
1. Let $x$ be the number of students and $y$ the number of teachers.
2. Form the equations, divide the cost equation by $20$, then solve.

::solution
$x+y=42$ and $20x+40y=920$, that is $x+2y=46$. Subtracting: $y=4$, $x=38$.

**Answer.** $38$ students and $4$ teachers.
:::

:::exercise
In a two-digit number, the tens digit is twice the units digit. If the two digits are swapped, the new number is $36$ less than the original number. Find the number.

::hint
**What you need:** $\overline{ab}=10a+b$; $(10a+b)-(10b+a)=9(a-b)$.

**Steps:**
1. Form $a=2b$ and $9(a-b)=36$.
2. Substitute $a=2b$ into the second equation.

::solution
$a-b=4$ and $a=2b$ give $b=4$, $a=8$. Check: $84-48=36$.

**Answer.** $84$.
:::

:::exercise
A rectangular garden has perimeter $56$ m. If its length is increased by $2$ m and its width is decreased by $1$ m, its area stays the same. Find the length and the width of the garden.

::hint
**What you need:** perimeter $2(x+y)$; area $xy$. When you expand $(x+2)(y-1)=xy$, the $xy$ terms cancel.

**Steps:**
1. Let the length be $x$ and the width $y$ (m, $x\ge y>1$).
2. Form $x+y=28$ and $(x+2)(y-1)=xy$, and simplify the second equation.
3. Solve the equations.

::solution
$(x+2)(y-1)=xy\iff -x+2y-2=0\iff -x+2y=2$. Adding $x+y=28$: $3y=30$, $y=10$, $x=18$. Check: $20\cdot9=180=18\cdot10$.

**Answer.** Length $18$ m, width $10$ m.
:::

:::exercise
How many grams of a $10\%$ salt solution and how many grams of a $30\%$ salt solution must be mixed to make $200$ g of a $16\%$ salt solution?

::hint
**What you need:** mass of salt $=$ mass of solution $\times$ concentration; the total mass of solution and the total mass of salt do not change when you mix.

**Steps:**
1. Let $x$ and $y$ be the grams of the $10\%$ and the $30\%$ solutions.
2. Form the equations from the total mass and the total salt ($16\%$ of $200$ g is $32$ g).

::solution
$x+y=200$ and $0.1x+0.3y=32$, that is $x+3y=320$. Subtracting: $2y=120$, $y=60$, $x=140$.

**Answer.** $140$ g of the $10\%$ solution and $60$ g of the $30\%$ solution.
:::

:::exercise Review
Solve the chickens-and-rabbits problem of exercise 1 again by forming **one equation in one unknown** (as in Grade 8), then compare with the method of simultaneous equations.

::hint
**What you need:** if there are $x$ chickens, there are $36-x$ rabbits.

**Steps:**
1. Write the number of legs in terms of $x$.
2. Solve the linear equation in one unknown.

::solution
$2x+4(36-x)=100\iff 144-2x=100\iff x=22$, so there are $14$ rabbits. This is really the substitution method: we wrote $y=36-x$ as soon as we chose the unknown.

**Answer.** $22$ chickens and $14$ rabbits.
:::

:::exercise
Last month two teams sewed $1000$ shirts. This month team A sewed $10\%$ more and team B sewed $5\%$ fewer than last month, so together they sewed $1040$ shirts.

a) Let $x$ and $y$ be the numbers of shirts sewn last month by team A and team B. Form the simultaneous equations.

b) Solve them to find $x$ and $y$.

c) Which team sewed more this month, and by how many shirts?

::hint
**What you need:** $10\%$ more means multiplying by $1.1$; $5\%$ fewer means multiplying by $0.95$.

**Steps:**
1. Form $x+y=1000$ and $1.1x+0.95y=1040$.
2. Multiply the second equation by $20$, then substitute $x=1000-y$.
3. Work out each team's shirts this month.

::solution
a) $\begin{cases} x+y=1000\\ 1.1x+0.95y=1040 \end{cases}$

b) Multiplying by $20$: $22x+19y=20800$. Substituting $x=1000-y$: $22000-3y=20800$, $y=400$, $x=600$.

c) Team A: $1.1\cdot600=660$ shirts; team B: $0.95\cdot400=380$ shirts; the difference is $280$ shirts.

**Answer.** b) $x=600$, $y=400$; c) team A sewed $280$ more shirts.
:::

:::exercise Challenge
Hà cycles from home to school. At $15$ km/h she arrives $6$ minutes before the start of lessons; at $12$ km/h she arrives $3$ minutes late. Find the distance from home to school and the time Hà needs to arrive exactly on time.

::hint
**What you need:** distance $=$ speed $\times$ time; in hours, $6$ minutes $=0.1$ h and $3$ minutes $=0.05$ h.

**Steps:**
1. Let $s$ be the distance (km) and $t$ the time to arrive exactly on time (hours), $t>0.1$.
2. Form $s=15(t-0.1)$ and $s=12(t+0.05)$.
3. Solve by substitution.

::solution
$15(t-0.1)=12(t+0.05)\iff 15t-1.5=12t+0.6\iff 3t=2.1\iff t=0.7$. Then $s=15\cdot0.6=9$. Check: $12\cdot0.75=9$.

**Answer.** The distance is $9$ km; the time is $0.7$ hours $=42$ minutes.
:::

## Mini test

:::quiz
::mc
Two numbers have sum $50$ and difference $14$. The smaller number is
A. $18$.
B. $32$.
C. $36$.
D. $25$.
::key A
$x+y=50$, $x-y=14$ give $x=32$, $y=18$. B is the larger number; C is $50-14$ without halving.

::mc
A rectangular garden has perimeter $40$ m, and its length is $4$ m more than its width. Let the length be $x$ and the width $y$ (m). The correct equations are
A. $\begin{cases} x+y=40\\ x-y=4 \end{cases}$
B. $\begin{cases} x+y=20\\ x-y=4 \end{cases}$
C. $\begin{cases} 2x+y=40\\ x-y=4 \end{cases}$
D. $\begin{cases} x+y=20\\ y-x=4 \end{cases}$
::key B
The perimeter is $2(x+y)=40$, so $x+y=20$. A forgets to divide by $2$; D has the difference the wrong way round.

::mc
A motor boat goes at $30$ km/h downstream and $22$ km/h upstream. The speed of the current is
A. $4$ km/h.
B. $8$ km/h.
C. $26$ km/h.
D. $2$ km/h.
::key A
$x+y=30$, $x-y=22$, so $2y=8$, $y=4$. B forgets to divide by $2$; C is the speed of the boat in still water.

::mc
Two items have list prices of $x$ and $y$ thousand đồng. The first is reduced by $10\%$ and the second by $20\%$, and the total to pay is $170$ thousand đồng. The correct equation is
A. $0.9x+0.8y=170$.
B. $0.1x+0.2y=170$.
C. $(x-10)+(y-20)=170$.
D. $0.9x+0.2y=170$.
::key A
After a $10\%$ reduction you pay $90\%$ of the price, after a $20\%$ reduction $80\%$. B is the amount saved; C treats the percentages as thousands of đồng.

::tf
There are $30$ chickens and rabbits with $84$ legs altogether. Let $x$ be the number of chickens and $y$ the number of rabbits.
a) $x+y=30$.
b) $4x+2y=84$.
c) There are $12$ rabbits.
d) There are $6$ more chickens than rabbits.
::key T F T T
a) True. b) False: chickens have $2$ legs and rabbits $4$, so $2x+4y=84$. c) True: subtracting $x+y=30$ from $x+2y=42$ gives $y=12$. d) True: $x=18$, $18-12=6$.

::sa
A two-digit number has digits that add up to $9$. Swapping the digits gives a number $45$ more than the original. Find the number.
::key 27
$a+b=9$, $9(b-a)=45$, so $b-a=5$, $b=7$, $a=2$. Check: $72-27=45$.

::sa
A $10\%$ salt solution is mixed with a $25\%$ salt solution to make $300$ g of a $20\%$ solution. How many grams of the $10\%$ solution are needed?
::key 100
$x+y=300$, $0.1x+0.25y=60$, that is $2x+5y=1200$. Substituting $x=300-y$: $600+3y=1200$, $y=200$, $x=100$.
:::
