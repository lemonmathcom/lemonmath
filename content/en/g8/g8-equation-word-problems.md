---
title: Solving word problems by forming equations
description: Learn the steps for solving word problems with a linear equation, through problems on numbers, motion, work rate, percentages, ages and geometry.
minutes: 25
---

:::goals
- Know the steps for solving a word problem by forming a linear equation in one unknown.
- Choose the unknown, state its conditions and express other quantities using it.
- Solve problems about numbers, motion, work rate, percentages, ages and geometry.
- Check the solution against the conditions of the problem before answering.
:::

Suppose Mr Hai wants to fence a rectangular garden with exactly $60$ m of netting, and the length is $6$ m more than the width. How long and how wide is the garden?

You could try pairs of numbers one by one, but a more reliable way is to use a letter for the unknown number and turn the words into an equation. This lesson teaches you to do that systematically.

## Let's explore

The key to word problems is **translating words into symbols**. Let $x$ be a number we need to find. We translate:

| Words | Expression |
|---|---|
| a number $8$ more than $x$ | $x+8$ |
| a number $5$ less than $x$ | $x-5$ |
| $3$ times $x$ | $3x$ |
| the sum of $x$ and a number $8$ more than it | $x+(x+8)$ |
| $20\%$ of $x$ | $0.2x$ |

With this translation, the sentence "the sum of two numbers is $50$ and the larger exceeds the smaller by $8$" becomes $x+(x+8)=50$, that is $2x=42$ and $x=21$. The two numbers are $21$ and $29$. Every problem in this lesson works the same way.

## Steps for solving a word problem with an equation

:::note The steps
1. **Form the equation:** choose the unknown (with its unit) and state its conditions; express the other quantities using the unknown; form an equation that expresses the relationship in the problem.
2. **Solve the equation.**
3. **Check against the conditions:** accept a solution that satisfies the conditions on the unknown, reject one that does not; then answer exactly what the problem asks, with units.
:::

If a problem involves motion, remember $s=v\cdot t$ (distance equals speed times time), and convert units to the same kind (for example $30$ minutes $=0.5$ hours).

:::example Mr Hai's garden
A rectangular garden has perimeter $60$ m, and its length is $6$ m more than its width. Find the length and the width.

**Solution.**

*Understand.* We know the perimeter and the difference of the two dimensions; we need the width and the length.

*Plan.* Let the width be $x$, then write the perimeter as $2\cdot(\text{length}+\text{width})$.

*Solve.* Let the width be $x$ (m), with $x>0$. The length is $x+6$ (m). The perimeter is $60$ m, so
$$2\,(x+x+6)=60\ \Rightarrow\ 2x+6=30\ \Rightarrow\ x=12.$$
The value $x=12$ satisfies the condition. The length is $12+6=18$ (m).

*Look back.* Check: the perimeter is $2\cdot(18+12)=60$ m and $18-12=6$ m, as the problem says.

So the width is $12$ m and the length is $18$ m.
:::

Some equations are correct algebraically but do not fit the problem, so checking the conditions matters.

:::example A rejected solution
Are there two consecutive natural numbers whose sum is $40$?

**Solution.** Let the smaller number be $x$, with $x\in\mathbb N$. The larger number is $x+1$. We have the equation
$$x+(x+1)=40\ \Rightarrow\ 2x=39\ \Rightarrow\ x=19.5.$$
The value $19.5$ is not a natural number, so it does not satisfy the condition.

So there are no two consecutive natural numbers with sum $40$. (For the sum $41$ we get $x=20$, and the numbers are $20$ and $21$.)
:::

:::example A motion problem
A car travels from A to B at $50$ km/h. On the way back it travels at $40$ km/h, so the journey back takes $30$ minutes longer than the journey there. Find the distance AB.

**Solution.** Let the time of the journey there be $x$ (hours), with $x>0$. The time back is $x+0.5$ hours (since $30$ minutes $=0.5$ hours). The distance there and back is the same, so
$$50x=40(x+0.5)\ \Rightarrow\ 50x=40x+20\ \Rightarrow\ 10x=20\ \Rightarrow\ x=2.$$
The value $x=2$ satisfies the condition. The distance AB is $50\cdot2=100$ (km).

Check: on the way back $40\cdot2.5=100$ km.

So the distance AB is $100$ km.
:::

:::example A work-rate problem
A team planned to make $30$ products a day. In fact it made $36$ products a day and finished $2$ days earlier than planned. How many products did the team have to make in all?

**Solution.** Let the number of products be $x$, with $x>0$. The planned time is $\dfrac{x}{30}$ days and the actual time is $\dfrac{x}{36}$ days. Since the team finished $2$ days earlier,
$$\frac{x}{30}-\frac{x}{36}=2.$$
Multiplying both sides by $180$: $6x-5x=360$, so $x=360$. This value satisfies the condition.

Check: $\dfrac{360}{30}=12$ days and $\dfrac{360}{36}=10$ days, a difference of $2$ days.

So the team had to make $360$ products.
:::

:::example A percentage problem
A shirt is sold at a $20\%$ discount from its listed price, and the price after the discount is $360\,000$ dong. Find the listed price (an imagined case).

**Solution.** Let the listed price be $x$ (dong), with $x>0$. A discount of $20\%$ leaves $x-0.2x=0.8x$. We have the equation
$$0.8x=360\,000\ \Rightarrow\ x=450\,000.$$
This value satisfies the condition.

Check: $450\,000\cdot0.8=360\,000$.

So the listed price is $450\,000$ dong.
:::

:::example An age problem
This year a mother is $38$ and her child is $8$. After how many years will the mother be $3$ times as old as the child?

**Solution.** Let the number of years be $x$, with $x>0$. After $x$ years the mother is $38+x$ and the child is $8+x$. We have the equation
$$38+x=3(8+x)\ \Rightarrow\ 38+x=24+3x\ \Rightarrow\ 2x=14\ \Rightarrow\ x=7.$$
The value $x=7$ satisfies the condition.

Check: after $7$ years the mother is $45$ and the child is $15$, and $45=3\cdot15$.

So in $7$ years the mother will be $3$ times as old as the child.
:::

:::warning Mistakes to watch out for
- **Not checking the solution against the conditions.** Wrong: answering "the numbers are $19.5$ and $20.5$" for two consecutive natural numbers with sum $40$. Why it is wrong: a natural number has no decimal part. Right: reject the solution and conclude that no such numbers exist.
- **Mixing units.** Wrong: writing $40(x+30)$ when speeds are in km/h and the extra time is $30$ minutes. Why it is wrong: $x$ is in hours, so $30$ minutes must be $0.5$ hours. Right: $40(x+0.5)$.
- **Setting up a percentage relation wrongly.** Wrong: the price after a $20\%$ discount is $360\,000$ dong, so the original price is $360\,000+0.2\cdot360\,000=432\,000$ dong. Why it is wrong: $20\%$ is of the original price, not of the reduced price; $432\,000\cdot0.8=345\,600\neq360\,000$. Right: $0.8x=360\,000$ gives $x=450\,000$.
:::

**Connections.** This lesson uses the method of [linear equations in one unknown](lesson:linear-equations-one-unknown) directly, together with the formulas for distance, perimeter and percentages from earlier years. Translating words into equations is an important skill, because it is the bridge between mathematics and problems from real life.

## Key terms

:::terms
- word problem | bài toán có lời văn
- forming an equation | lập phương trình
- choosing the unknown | chọn ẩn
- condition on the unknown | điều kiện của ẩn
- checking the solution against the conditions | đối chiếu điều kiện
- distance, speed, time | quãng đường, vận tốc, thời gian
- rate of work (output per day) | năng suất
- listed price | giá niêm yết
:::

## Summary

- Solving a word problem with an equation has three steps: form the equation, solve it, check the conditions and answer.
- Choose as the unknown the quantity asked for (or the one that gives the simplest equation), with a unit and conditions.
- Motion: $s=v\cdot t$; if the journey there and back is along the same road, the distances are equal.
- Percentages: after a $p\%$ discount the price is $(100-p)\%$ of the original.
- Always check the solution against the problem, not only against the equation.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Find two numbers whose sum is $65$ and whose difference is $11$.

::hint
**What you need:** if the smaller number is $x$, the larger is $x+11$.

**Steps:**
1. Form the equation $x+(x+11)=65$.
2. Solve it, then find the larger number.

::solution
Let the smaller number be $x$ and the larger $x+11$. We have $x+(x+11)=65$, so $2x=54$ and $x=27$. The larger number is $27+11=38$.

Check: $27+38=65$ and $38-27=11$.

So the numbers are $27$ and $38$.

**Answer.** $27$ and $38$.
:::

:::exercise
A rectangular plot has perimeter $70$ m, and its length is $5$ m more than its width. Find the length, the width and the area of the plot.

::hint
**What you need:** perimeter equals $2\cdot(\text{length}+\text{width})$.

**Steps:**
1. Let the width be $x$ (m) and the length $x+5$ (m).
2. Form the perimeter equation, solve it, then find the area.

::solution
Let the width be $x$ (m), $x>0$, and the length $x+5$ (m). The perimeter is $70$, so $x+(x+5)=35$, giving $2x=30$ and $x=15$. The length is $20$ m. The area is $15\cdot20=300$ (m²).

So the width is $15$ m, the length $20$ m and the area $300$ m².

**Answer.** $15$ m; $20$ m; $300$ m².
:::

:::exercise
A motorbike leaves A at $7$ a.m. at $40$ km/h. One hour later a car also leaves A, travelling in the same direction at $60$ km/h. How long after the car leaves does it catch up with the motorbike?

::hint
**What you need:** when the car catches up, both vehicles have travelled the same distance.

**Steps:**
1. Let $x$ be the car's travelling time; the motorbike has travelled $x+1$ hours.
2. Write $40(x+1)=60x$.

::solution
Let the car's travelling time until it catches up be $x$ (hours), $x>0$; the motorbike has travelled $x+1$ hours. We have $40(x+1)=60x$, so $40=20x$ and $x=2$.

Check: the motorbike travels $40\cdot3=120$ km and the car travels $60\cdot2=120$ km.

So the car catches up with the motorbike $2$ hours after it leaves.

**Answer.** $2$ hours.
:::

:::exercise
Two cities are $180$ km apart. Two cars leave at the same time, one from each city, driving towards each other at $50$ km/h and $40$ km/h. After how long do they meet?

::hint
**What you need:** when they meet, the total distance travelled by the two cars is $180$ km.

**Steps:**
1. Let $x$ be the travelling time (hours).
2. Write $50x+40x=180$.

::solution
Let the time until they meet be $x$ (hours), $x>0$. We have $50x+40x=180$, so $90x=180$ and $x=2$.

Check: $50\cdot2+40\cdot2=180$.

So the cars meet after $2$ hours.

**Answer.** $2$ hours.
:::

:::exercise
A tailoring team plans to make $20$ shirts a day. If it makes $4$ more shirts a day, it finishes $2$ days earlier. Find the number of shirts the team has to make.

::hint
**What you need:** time equals the total number of shirts divided by the number made per day.

**Steps:**
1. Let $x$ be the number of shirts; the planned time is $\dfrac x{20}$ days and the actual time $\dfrac{x}{24}$ days.
2. Form $\dfrac{x}{20}-\dfrac{x}{24}=2$.

::solution
Let the number of shirts be $x$, $x>0$. We have $\dfrac{x}{20}-\dfrac{x}{24}=2$. Multiplying both sides by $120$: $6x-5x=240$, so $x=240$.

Check: $\dfrac{240}{20}=12$ days and $\dfrac{240}{24}=10$ days, a difference of $2$ days.

So the team has to make $240$ shirts.

**Answer.** $240$ shirts.
:::

:::exercise
An item is discounted by $15\%$, and the price after the discount is $255\,000$ dong. Find the original price of the item.

::hint
**What you need:** after a $15\%$ discount the price is $85\%$ of the original.

**Steps:**
1. Let $x$ be the original price.
2. Form $0.85x=255\,000$.

::solution
Let the original price be $x$ (dong), $x>0$. We have $x-0.15x=255\,000$, that is $0.85x=255\,000$, so $x=300\,000$.

Check: $300\,000\cdot0.85=255\,000$.

So the original price is $300\,000$ dong.

**Answer.** $300\,000$ dong.
:::

:::exercise
Suppose a swimming pool sells single tickets at $40\,000$ dong per visit, or a monthly card at $120\,000$ dong plus $20\,000$ dong per visit. After how many visits in a month do the two options cost the same? From how many visits is the monthly card cheaper?

::hint
**What you need:** set the two costs equal to find the number of visits.

**Steps:**
1. Let $x$ be the number of visits; form $40x=120+20x$ (in thousand dong).
2. Compare the costs when $x$ is greater than the solution.

::solution
Let the number of visits be $x$, $x\in\mathbb N^*$. We have $40x=120+20x$, so $20x=120$ and $x=6$ (both options cost $240$ thousand dong). Each extra visit adds $40$ thousand dong to single tickets but only $20$ thousand dong to the monthly card, so from the $7$th visit on the monthly card is cheaper.

So with $6$ visits the options cost the same; from $7$ visits on the monthly card is cheaper.

**Answer.** $6$ visits; from $7$ visits on.
:::

:::exercise
A father is $28$ years older than his son. In four years' time the father will be $3$ times as old as the son. Find their present ages.

::hint
**What you need:** in $4$ years each person's age increases by $4$.

**Steps:**
1. Let the son's present age be $x$; the father's is $x+28$.
2. Form the equation for the time $4$ years from now.

::solution
Let the son's present age be $x$, $x>0$; the father's is $x+28$. In $4$ years: father $x+32$, son $x+4$. We have $x+32=3(x+4)$, that is $x+32=3x+12$, so $2x=20$ and $x=10$. The father is $38$.

Check: in $4$ years the father is $42$, the son $14$, and $42=3\cdot14$.

So the son is $10$ and the father is $38$.

**Answer.** Son $10$; father $38$.
:::

:::exercise
An isosceles triangle has perimeter $41$ cm, and its base is $4$ cm shorter than each of the equal sides. Find the lengths of the sides. (Recall: the sum of any two sides is greater than the third side.)

::hint
**What you need:** an isosceles triangle has two equal sides.

**Steps:**
1. Let each equal side be $x$; the base is $x-4$.
2. Form the perimeter equation, solve it, then check the triangle inequality.

::solution
Let each equal side be $x$ (cm), $x>4$; the base is $x-4$. The perimeter is $41$, so $x+x+(x-4)=41$, giving $3x=45$ and $x=15$. The base is $11$ cm.

Check: $15+11>15$ and $15+15>11$, so sides $15$, $15$, $11$ form a triangle.

So the equal sides are $15$ cm and the base is $11$ cm.

**Answer.** $15$ cm, $15$ cm, $11$ cm.
:::

:::exercise Challenge
A cyclist rides from A to B at $12$ km/h and returns at $10$ km/h, so the total time there and back is $4$ hours $24$ minutes. Find the distance AB.

::hint
**What you need:** $4$ hours $24$ minutes $=4.4$ hours.

**Steps:**
1. Let $x$ be the distance AB; the time there is $\dfrac{x}{12}$ and the time back is $\dfrac{x}{10}$.
2. Form $\dfrac{x}{12}+\dfrac{x}{10}=4.4$ and clear the fractions.

::solution
Convert $4$ hours $24$ minutes $=4.4$ hours. Let the distance AB be $x$ (km), $x>0$. We have $\dfrac{x}{12}+\dfrac{x}{10}=4.4$. Multiplying both sides by $60$: $5x+6x=264$, so $11x=264$ and $x=24$.

Check: $\dfrac{24}{12}+\dfrac{24}{10}=2+2.4=4.4$ hours.

So the distance AB is $24$ km.

**Answer.** $24$ km.
:::

## Mini test

:::quiz
::mc
The sum of two numbers is $40$ and their difference is $6$. The larger number is
A. $23$.
B. $20$.
C. $17$.
D. $34$.
::key A
Let the smaller number be $x$: $x+(x+6)=40$, so $x=17$ and the larger is $23$. A is the smaller number, B is half the sum, D is $40-6$.

::mc
A rectangle has perimeter $50$ m, and its length is $5$ m more than its width. The width is
A. $15$ m.
B. $10$ m.
C. $20$ m.
D. $12.5$ m.
::key B
$2(x+x+5)=50$, so $x=10$. B is the length; C and D come from dividing the perimeter by $2$ or $4$ without using the difference.

::mc
The price of a shirt after a $20\%$ discount is $360\,000$ dong. The original price is
A. $288\,000$ dong.
B. $432\,000$ dong.
C. $450\,000$ dong.
D. $380\,000$ dong.
::key C
$0.8x=360\,000$, so $x=450\,000$. A takes $360\,000\cdot0.8$, B adds $20\%$ of the reduced price.

::mc
A motorbike travels at $40$ km/h and starts $1$ hour earlier than a car travelling the same way at $60$ km/h. How many hours after the car leaves does it catch up with the motorbike?
A. $1$ hour.
B. $4$ hours.
C. $3$ hours.
D. $2$ hours.
::key D
$40(x+1)=60x$, so $x=2$. C is the motorbike's travelling time; A and B do not satisfy the equation.

::tf
A rectangle has perimeter $60$ m, and its length is $6$ m more than its width. Decide whether each statement is true or false.
a) If the width is $x$, then the length is $x-6$.
b) The equation for the problem is $2x+6=60$.
c) The width is $12$ m.
d) The area is $216$ m².
::key F F T T
a) False: the length is greater, so it is $x+6$. b) False: the equation is $2(x+x+6)=60$. c) True: $4x+12=60$, so $x=12$. d) True: $12\cdot18=216$.

::sa
The sum of two numbers is $65$ and their difference is $11$. What is the larger number?
::key 38
$x+(x+11)=65$, so $x=27$ and the larger number is $38$.

::sa
This year a mother is $38$ and her child is $8$. After how many years will the mother be $3$ times as old as the child?
::key 7
$38+x=3(8+x)$, so $x=7$.
:::
