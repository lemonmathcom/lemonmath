---
title: "Topic: word problems with equations and systems"
description: Revise the steps for solving word problems with equations and systems through motion, work rates, rectangles and percentages, in entrance-exam style.
minutes: 25
---

:::goals
- Know the three steps for solving a word problem with an equation or a system: choose the unknown and its condition, form the equation, solve and check.
- Solve the usual types: motion (including downstream and upstream), work rates and joint work, rectangles, percentages and prices.
- Choose between a quadratic equation in one unknown and a system of two linear equations in two unknowns.
- Present a full solution as in an exam, remembering to check the conditions on the unknown and to write a conclusion.
:::

Suppose a car travels from A to B, a distance of $120$ km. On the way back the driver increases the speed by $10$ km/h, so the return journey takes $24$ minutes less than the outward journey. What was the speed on the outward journey? The problem gives us the distance and the difference in time but not the speed, yet we can still find the speed by forming an equation.

Word problems appear in almost every grade 10 entrance paper and usually carry about two marks. The difficulty is not in solving but in **translating the text into an equation**. This lesson revises a systematic way to do it.

## Three steps for solving a word problem

### Explore: a very small problem

Two numbers have sum $25$ and difference $7$. Find them. Let the larger be $x$ and the smaller $y$. From the text, $x+y=25$ and $x-y=7$. Adding the two equations gives $2x=32$, so $x=16$ and $y=9$. Every word problem follows the same three actions: choose the unknown, write the conditions of the text as equations, then solve and check.

:::definition Three steps for solving word problems with equations and systems
**Step 1.** Choose the unknown (with its unit) and state its condition.

**Step 2.** Express the other quantities in terms of the unknown, then form an equation or a system from the relationships in the text.

**Step 3.** Solve the equation or system, **check the roots against the condition**, and write a conclusion (with the unit).
:::

The basic relationships we often use:
- **Motion:** $s=v\cdot t$, so $t=\dfrac sv$. When the same distance is travelled at a different speed, the time changes.
- **Downstream and upstream:** $v_{\text{down}}=v+v_c$ and $v_{\text{up}}=v-v_c$ ($v$ is the speed in still water, $v_c$ is the speed of the current).
- **Work:** if working alone takes $x$ days, then each day $\dfrac1x$ of the job is done; when two people work together, their daily rates add.
- **Percentages:** an increase of $p\%$ multiplies by $\left(1+\dfrac p{100}\right)$; a decrease of $p\%$ multiplies by $\left(1-\dfrac p{100}\right)$.

**An equation or a system?** If the text gives two unknown quantities and two independent relationships, form a system of two equations. If one unknown is enough, and every other quantity can be written in terms of it, form a single equation (often quadratic).

:::example A rectangle (forming a system)
Suppose a rectangular plot is $7$ m longer than it is wide. If each dimension is increased by $2$ m, the area increases by $46$ m². Find the original dimensions of the plot.

**Solution.** Let the width be $x$ (m) and the length $y$ (m), with $0<x<y$.

Since the length is $7$ m more than the width, $y-x=7$. The original area is $xy$. After each dimension is increased by $2$ m, the area is $(x+2)(y+2)$, so
$$(x+2)(y+2)-xy=46\iff2x+2y+4=46\iff x+y=21.$$

We get the system $\begin{cases}y-x=7\\x+y=21.\end{cases}$ Adding the two equations gives $2y=28$, so $y=14$ and $x=7$. Both values satisfy the condition.

So the width is $7$ m and the length is $14$ m. Check: $7\cdot14=98$ and $9\cdot16=144$; the difference is $46$.
:::

:::example Motion (forming a quadratic equation)
A car travels from A to B, a distance of $120$ km. On the way back the driver increases the speed by $10$ km/h, so the return journey takes $24$ minutes less than the outward journey. Find the speed on the outward journey.

**Solution.**

*Understand.* The distance is $120$ km, the return speed is $10$ km/h greater and the return time is $24$ minutes less ($24$ minutes $=0.4$ hour). We need the speed on the outward journey.

*Plan.* The distance does not change, so we express the outward and return times in terms of the speed and form an equation from the difference in time.

*Solve.* Let the outward speed be $x$ (km/h), $x>0$. The outward time is $\dfrac{120}x$ hours. The return speed is $x+10$ (km/h), so the return time is $\dfrac{120}{x+10}$ hours. We get the equation
$$\frac{120}x-\frac{120}{x+10}=0.4.$$
Combining the fractions, $\dfrac{120\cdot10}{x(x+10)}=0.4$, so $x(x+10)=3000$, that is $x^2+10x-3000=0$. We have $\Delta'=25+3000=3025=55^2$, so $x=-5+55=50$ or $x=-5-55=-60$. The value $x=-60$ does not satisfy $x>0$, so we reject it.

So the outward speed is $50$ km/h.

*Look back.* The outward time is $120\div50=2.4$ hours, the return time is $120\div60=2$ hours, and the difference is $0.4$ hour $=24$ minutes, as stated. A speed of $50$ km/h is also reasonable for a car.
:::

:::example Downstream and upstream (forming a system)
Suppose a boat travels $36$ km downstream in $1.5$ hours and $36$ km upstream in $2$ hours $15$ minutes. Find the speed of the boat in still water and the speed of the current.

**Solution.** Let the speed of the boat in still water be $x$ (km/h) and the speed of the current be $y$ (km/h), with $x>y>0$.

The downstream speed is $\dfrac{36}{1.5}=24$ (km/h), so $x+y=24$. The upstream time is $2$ hours $15$ minutes $=2.25$ hours, so the upstream speed is $\dfrac{36}{2.25}=16$ (km/h), that is $x-y=16$.

Adding the two equations gives $2x=40$, so $x=20$ and $y=4$. Both values satisfy the condition.

So the speed of the boat in still water is $20$ km/h and the speed of the current is $4$ km/h.
:::

:::example Joint work (forming a quadratic equation)
Suppose two teams working together finish a job in $12$ days. Working alone, team A finishes $10$ days sooner than team B. How many days does each team need to finish the job alone?

**Solution.** Let team A need $x$ days alone ($x>0$); then team B needs $x+10$ days alone. Each day team A does $\dfrac1x$ of the job and team B does $\dfrac1{x+10}$ of the job. Together they finish in $12$ days, so each day they do $\dfrac1{12}$ of the job:
$$\frac1x+\frac1{x+10}=\frac1{12}.$$
Clearing denominators: $12(x+10)+12x=x(x+10)$, so $x^2-14x-120=0$. We have $\Delta'=49+120=169=13^2$, so $x=7+13=20$ or $x=7-13=-6$. The value $x=-6$ is rejected because $x>0$.

So team A needs $20$ days alone and team B needs $30$ days. Check: $\dfrac1{20}+\dfrac1{30}=\dfrac5{60}=\dfrac1{12}$.
:::

:::example Discounts and percentages (forming a system)
Suppose the listed prices of two items add up to $900$ thousand dong. When the first item is discounted by $10\%$ and the second by $20\%$, the total to pay is $740$ thousand dong. Find the listed price of each item.

**Solution.** Let the listed prices of the first and second items be $x$ and $y$ (thousand dong), $x>0$, $y>0$.

The listed prices add up to $900$ thousand, so $x+y=900$. After the discounts, the first item costs $0.9x$ and the second $0.8y$, so $0.9x+0.8y=740$.

From the first equation, $y=900-x$. Substituting into the second: $0.9x+0.8(900-x)=740$, so $0.1x+720=740$, that is $x=200$ and $y=700$. Both values satisfy the condition.

So the listed prices are $200$ thousand dong and $700$ thousand dong. Check: $0.9\cdot200+0.8\cdot700=180+560=740$.
:::

:::warning Common mistakes
- **Not stating a condition for the unknown.** Wrong: letting the speed be $x$ without writing $x>0$. Why it is wrong: without a condition we do not know which roots to reject. Right: write the condition right after choosing the unknown, for example $x>0$ or $x>y>0$.
- **Forgetting to convert units.** Wrong: writing $\dfrac{120}x-\dfrac{120}{x+10}=24$ when speeds are in km/h. Why it is wrong: $24$ is in minutes, but the times in the equation are in hours. Right: convert $24$ minutes $=0.4$ hour.
- **Not rejecting roots.** Wrong: concluding "the speed is $50$ or $-60$ km/h". Why it is wrong: a speed is not negative. Right: check the condition and reject $x=-60$.
- **Mixing up percentages.** Wrong: a $20\%$ decrease followed by a $20\%$ increase brings the price back to the original. Why it is wrong: the two percentages are taken of different prices, for example $100\to80\to96$. Right: multiply the factors $0.8\cdot1.2=0.96$.
- **Averaging speeds.** Wrong: the first half of the way at $40$ km/h and the second half at $60$ km/h give an average speed of $50$ km/h. Why it is wrong: the times for the two halves are different. Right: average speed is total distance divided by total time.
:::

**Connections.** This lesson uses quadratic equations and the quadratic formula, systems of two linear equations, percentages and the formula $s=vt$. The method of forming equations will be used again in problems with functions and geometry.

## Key terms

:::terms
- word problem | bài toán lời văn
- unknown | ẩn
- condition on the unknown | điều kiện của ẩn
- system of equations | hệ phương trình
- speed in still water | vận tốc riêng
- downstream | xuôi dòng
- upstream | ngược dòng
- rate of work | năng suất
- listed price | giá niêm yết
- check against the conditions | đối chiếu điều kiện
:::

## Summary

- Three steps: choose the unknown and state its condition, form an equation or a system, solve and check against the condition, then write a conclusion.
- Motion: $s=vt$; downstream $v+v_c$, upstream $v-v_c$.
- Work: if working alone takes $x$ days, each day $\dfrac1x$ of the job is done; two teams working together have their rates added.
- Percentages: an increase of $p\%$ multiplies by $\left(1+\dfrac p{100}\right)$; a decrease of $p\%$ multiplies by $\left(1-\dfrac p{100}\right)$.
- Always use consistent units, check the roots and write the conclusion with its unit.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Suppose a rectangular yard has perimeter $56$ m and is $4$ m longer than it is wide. Find the dimensions of the yard.

::hint
**What you need:** perimeter $=2$(length $+$ width); form a system of two equations.

**Steps:**
1. Let the width be $x$ and the length $y$.
2. Form two equations and solve the system.

::solution
Let the width be $x$ (m) and the length $y$ (m), $0<x<y$. We have $x+y=28$ and $y-x=4$. Adding the equations: $2y=32$, so $y=16$ and $x=12$.

**Answer.** Width $12$ m, length $16$ m.
:::

:::exercise
A car travels from A to B, a distance of $60$ km. On the way back the car increases its speed by $10$ km/h, so the return journey takes $18$ minutes less than the outward journey. Find the outward speed.

::hint
**What you need:** $t=\dfrac sv$; convert $18$ minutes to hours.

**Steps:**
1. Let the outward speed be $x$ (km/h).
2. Form the equation for a time difference of $0.3$ hour.

::solution
Let the outward speed be $x$ (km/h), $x>0$. We have $\dfrac{60}x-\dfrac{60}{x+10}=0.3$, that is $\dfrac{600}{x(x+10)}=0.3$, so $x(x+10)=2000$, or $x^2+10x-2000=0$. We have $\Delta'=25+2000=2025=45^2$, so $x=-5+45=40$ or $x=-5-45=-50$ (rejected). Check: $60\div40=1.5$ hours and $60\div50=1.2$ hours, a difference of $0.3$ hour.

**Answer.** $40$ km/h.
:::

:::exercise
Suppose a boat travels $30$ km downstream in $1.5$ hours and $30$ km upstream in $2.5$ hours. Find the speed of the boat in still water and the speed of the current.

::hint
**What you need:** $v_{\text{down}}=v+v_c$, $v_{\text{up}}=v-v_c$.

**Steps:**
1. Find the downstream and upstream speeds.
2. Form and solve a system in two unknowns.

::solution
The downstream speed is $30\div1.5=20$ (km/h) and the upstream speed is $30\div2.5=12$ (km/h). Let the speed in still water be $x$ and the speed of the current $y$: $x+y=20$ and $x-y=12$. So $x=16$ and $y=4$.

**Answer.** Speed in still water $16$ km/h; speed of the current $4$ km/h.
:::

:::exercise
Suppose a tap alone fills a tank in $12$ hours. If both taps are opened at the same time, the tank is full after $4$ hours. How long would the second tap take to fill the tank alone?

::hint
**What you need:** in one hour a tap working alone fills $\dfrac1x$ of the tank; two taps together add up.

**Steps:**
1. Let $x$ be the number of hours the second tap needs alone.
2. Form the equation $\dfrac1{12}+\dfrac1x=\dfrac14$.

::solution
Let $x$ (hours) be the time the second tap needs alone, $x>0$. We have $\dfrac1{12}+\dfrac1x=\dfrac14$, so $\dfrac1x=\dfrac14-\dfrac1{12}=\dfrac16$, and $x=6$.

**Answer.** $6$ hours.
:::

:::exercise
**Question 3.** ($2.0$ marks) A garden is a right-angled triangle with hypotenuse $13$ m, and its two shorter sides differ by $7$ m. Find the lengths of the two shorter sides and the area of the garden.

::hint
**What you need:** Pythagoras' theorem; a quadratic equation.

**Steps:**
1. Let the shorter of the two sides be $x$ (m) and the other $x+7$.
2. Form $x^2+(x+7)^2=13^2$ and solve it.

::solution
Let the shorter side be $x$ (m), $x>0$; the other side is $x+7$ (m). By Pythagoras' theorem, $x^2+(x+7)^2=169$, that is $2x^2+14x-120=0$, or $x^2+7x-60=0$. We have $\Delta=49+240=289=17^2$, so $x=\dfrac{-7+17}2=5$ or $x=\dfrac{-7-17}2=-12$ (rejected). The two shorter sides are $5$ m and $12$ m, and the area is $\dfrac12\cdot5\cdot12=30$ (m²).

**Answer.** $5$ m and $12$ m; $30$ m².
:::

:::exercise
A workshop has two teams producing items, with a combined plan of $1000$ items. In practice team I exceeded its plan by $10\%$ and team II by $20\%$, so together they made $1120$ items. How many items was each team supposed to make according to the plan?

::hint
**What you need:** exceeding a plan by $p\%$ multiplies by $\left(1+\dfrac p{100}\right)$.

**Steps:**
1. Let $x$ and $y$ be the planned numbers of items for team I and team II.
2. Form two equations and solve the system.

::solution
Let $x$ and $y$ be the planned numbers of items for team I and team II, $x>0$, $y>0$. We have $x+y=1000$ and $1.1x+1.2y=1120$. Substituting $y=1000-x$: $1.1x+1200-1.2x=1120$, so $0.1x=80$, giving $x=800$ and $y=200$.

**Answer.** Team I: $800$ items; team II: $200$ items.
:::

:::exercise
Find two consecutive natural numbers whose product is $342$.

::hint
**What you need:** let the smaller number be $x$ and the larger $x+1$; the condition is that $x$ is a natural number.

**Steps:**
1. Form the equation $x(x+1)=342$.
2. Solve it and check the condition.

::solution
Let the smaller number be $x$ ($x\in\mathbb N$) and the larger $x+1$. We have $x(x+1)=342$, that is $x^2+x-342=0$. We have $\Delta=1+1368=1369=37^2$, so $x=\dfrac{-1+37}2=18$ or $x=\dfrac{-1-37}2=-19$ (rejected). The numbers are $18$ and $19$.

**Answer.** $18$ and $19$.
:::

:::exercise
Suppose two teams working together finish a job in $6$ days. Working alone, team I finishes $5$ days sooner than team II. How many days does each team need to finish the job alone?

::hint
**What you need:** daily rates $\dfrac1x$ and $\dfrac1{x+5}$; two teams working together have their rates added.

**Steps:**
1. Let $x$ be the number of days team I needs alone.
2. Form $\dfrac1x+\dfrac1{x+5}=\dfrac16$, solve and check the condition.

::solution
Let $x$ (days) be the time team I needs alone, $x>0$; team II needs $x+5$ days. We have $\dfrac1x+\dfrac1{x+5}=\dfrac16$, so $6(2x+5)=x(x+5)$, or $x^2-7x-30=0$. We have $\Delta=49+120=169=13^2$, so $x=\dfrac{7+13}2=10$ or $x=\dfrac{7-13}2=-3$ (rejected). Team I needs $10$ days and team II needs $15$ days. Check: $\dfrac1{10}+\dfrac1{15}=\dfrac16$.

**Answer.** Team I: $10$ days; team II: $15$ days.
:::

:::exercise Challenge
A vehicle travels from A to B: on the first half of the distance it goes at $40$ km/h and on the second half at $60$ km/h. Find the average speed of the vehicle over the whole distance AB.

::hint
**What you need:** average speed is total distance divided by total time.

**Steps:**
1. Let half the distance be $s$ (km).
2. Find the total time, then the average speed.

::solution
Let half the distance be $s$ (km), $s>0$. The time for the first half is $\dfrac s{40}$ hours and for the second half $\dfrac s{60}$ hours, so the total time is $\dfrac s{40}+\dfrac s{60}=\dfrac{5s}{120}=\dfrac s{24}$ hours. The average speed is $\dfrac{2s}{s/24}=48$ (km/h), not $50$ km/h.

**Answer.** $48$ km/h.
:::

## Mini test

:::quiz
::mc
A boat has a downstream speed of $24$ km/h and an upstream speed of $16$ km/h. The speed of the current is
A. $4$ km/h.
B. $20$ km/h.
C. $40$ km/h.
D. $8$ km/h.
::key A
$x+y=24$ and $x-y=16$, so $y=\dfrac{24-16}{2}=4$. Option D is the difference $24-16$ (forgetting to halve it), B is the speed of the boat in still water, and C is the sum of the two speeds.

::mc
One tap alone fills a tank in $12$ hours; with both taps open the tank is full after $4$ hours. The second tap alone fills the tank in
A. $8$ hours.
B. $6$ hours.
C. $3$ hours.
D. $16$ hours.
::key B
$\dfrac1x=\dfrac14-\dfrac1{12}=\dfrac16$, so $x=6$. Option A is $12-4$, C is $\dfrac{12}{4}$, and D is $12+4$.

::mc
The price of an item is increased by $20\%$ and then decreased by $20\%$ (of the new price). Compared with the original price, the final price is
A. $100\%$.
B. $104\%$.
C. $96\%$.
D. $80\%$.
::key C
$1.2\cdot0.8=0.96$. Option A is the familiar mistake (thinking an increase and a decrease of the same percentage cancel), and B and D use the wrong factor.

::mc
The product of two consecutive natural numbers is $156$. The larger number is
A. $12$.
B. $14$.
C. $11$.
D. $13$.
::key D
$x(x+1)=156$ gives $x=12$, so the larger number is $13$. Option A is the smaller number, and B and C do not fit ($14\cdot15=210$, $11\cdot12=132$).

::tf
A car travels $60$ km. On the way back it increases its speed by $10$ km/h, so the return journey takes $18$ minutes less than the outward journey. Let the outward speed be $x$ (km/h). Decide whether each statement is true or false.
a) The outward time is $\dfrac x{60}$ hours.
b) $18$ minutes equals $0.18$ hour.
c) The outward speed is $40$ km/h.
d) The equation of the problem is $\dfrac{60}x-\dfrac{60}{x+10}=0.3$.
::key F F T T
a) False: the outward time is $\dfrac{60}x$ hours. b) False: $18$ minutes $=0.3$ hour. c) True: $40\cdot50=2000$ and $60\div40-60\div50=0.3$. d) True: the difference in time is $0.3$ hour.

::sa
Two numbers have sum $40$ and difference $12$. Find the larger number.
::key 26
$\dfrac{40+12}2=26$.

::sa
Two teams working together finish a job in $6$ days. Working alone, team I finishes $5$ days sooner than team II. How many days does team I need alone?
::key 10
Let $x$ be the number of days for team I: $\dfrac1x+\dfrac1{x+5}=\dfrac16$ gives $x^2-7x-30=0$, so $x=10$.
:::
