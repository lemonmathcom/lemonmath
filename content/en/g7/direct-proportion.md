---
title: Direct proportion. Inverse proportion
description: Recognise direct and inverse proportion from tables and graphs, find the constant of proportionality and solve problems on work, distance and sharing.
minutes: 28
---

:::goals
- Recognise two quantities in direct or inverse proportion from a formula and from a table of values; find the constant of proportionality.
- Use the properties of proportional quantities to find unknown values.
- Solve real problems about buying, work, speed and time.
- Share a number in direct or in inverse proportion.
:::

Suppose a motorbike travels steadily at $40$ km/h. After $1$ hour it has gone $40$ km, after $2$ hours $80$ km, after $3$ hours $120$ km. When the time doubles, the distance doubles too. Now change the story: we must cover a journey of $120$ km. At $30$ km/h it takes $4$ hours, and at $60$ km/h it takes only $2$ hours. This time, when the speed doubles, the time is halved.

In both situations two quantities change together, but they change in opposite ways. When one quantity is multiplied by $2$, the other is sometimes multiplied by $2$ and sometimes divided by $2$. How can you tell which case you are in, and once you know, how do you find the unknown number? That is what this lesson is about.

## Direct proportion

### Explore: make a table and look for what does not change

Let us make a table of the distance $s$ (km) the motorbike travels after time $t$ (hours), at $40$ km/h.

| $t$ (hours) | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $s$ (km) | $40$ | $80$ | $120$ | $160$ |

Divide the distance by the time: $\dfrac{40}1=\dfrac{80}2=\dfrac{120}3=\dfrac{160}4=40$. The quotient is always $40$, which is the speed. So $s=40t$. This formula shows that $s$ is $t$ multiplied by a number that never changes.

:::definition Direct proportion
If a quantity $y$ is related to a quantity $x$ by the formula
$$y=kx\qquad(k\text{ is a non-zero constant})$$
then we say that $y$ is in **direct proportion** to $x$, with **constant of proportionality** $k$.
:::

When $y=kx$ we have $x=\dfrac1k\cdot y$, so $x$ is also in direct proportion to $y$, with constant $\dfrac1k$. In the example above, $t=\dfrac1{40}s$: time is in direct proportion to distance with constant $\dfrac1{40}$.

:::theorem Properties of directly proportional quantities
If $y$ is in direct proportion to $x$ with constant $k$, and $(x_1, y_1)$, $(x_2, y_2)$ are two pairs of corresponding values, then
$$\frac{y_1}{x_1}=\frac{y_2}{x_2}=k\qquad\text{and}\qquad \frac{x_1}{x_2}=\frac{y_1}{y_2}.$$
:::

**Why?** From $y_1=kx_1$ and $y_2=kx_2$ we have $\dfrac{y_1}{x_1}=k$ and $\dfrac{y_2}{x_2}=k$. Dividing $y_1=kx_1$ by $y_2=kx_2$ side by side, the constant $k$ cancels and we get $\dfrac{y_1}{y_2}=\dfrac{x_1}{x_2}$.

We can see this property on a graph. For each pair $(t, s)$ in the table we mark a point, with time on the horizontal axis and distance on the vertical axis.

:::graph Distance $s=40t$ against time $t$
alt: The points (1, 40), (2, 80), (3, 120), (4, 160) lie on a straight line through the origin O
x: 0..5
y: 0..180
shape: free
plot: 40x ; 0..4.5
point: (0, 0) "O" below-right
point: (1, 40) "1, 40" below-right
point: (2, 80) "2, 80" below-right
point: (3, 120) "3, 120" below-right
point: (4, 160) "4, 160" below-right
:::

The points lie on a straight line through the origin $O$, because each time $x$ increases by $1$, $y$ increases by exactly $k$.

## Inverse proportion

### Explore: this time the product is the number that stays the same

Let us make a table of the time $t$ (hours) needed to cover a $120$ km journey at speed $v$ (km/h).

| $v$ (km/h) | $30$ | $40$ | $60$ | $120$ |
|---|---|---|---|---|
| $t$ (hours) | $4$ | $3$ | $2$ | $1$ |

This time dividing does not give equal results, but multiplying does: $30\cdot4=40\cdot3=60\cdot2=120\cdot1=120$. The product $v\cdot t$ is always $120$ (the length of the journey), so $t=\dfrac{120}v$.

:::definition Inverse proportion
If a quantity $y$ is related to a quantity $x$ by the formula
$$y=\frac ax\qquad(a\text{ is a non-zero constant})$$
then we say that $y$ is in **inverse proportion** to $x$, with **constant of proportionality** $a$. Then $xy=a$.
:::

:::theorem Properties of inversely proportional quantities
If $y$ is in inverse proportion to $x$ with constant $a$, and $(x_1, y_1)$, $(x_2, y_2)$ are two pairs of corresponding values, then
$$x_1y_1=x_2y_2=a\qquad\text{and}\qquad \frac{x_1}{x_2}=\frac{y_2}{y_1}.$$
:::

**Why?** From $y=\dfrac ax$ we have $xy=a$ for every pair of values, so $x_1y_1=a=x_2y_2$. Dividing $x_1y_1=x_2y_2$ by $x_2y_1$ gives $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$. Notice that the ratio of the $x$ values equals the **reversed** ratio of the $y$ values; that is why it is called "inverse".

:::graph Time $t=\dfrac{120}v$ against speed $v$
alt: The points (30, 4), (40, 3), (60, 2), (120, 1) lie on a curve going down: the greater the speed, the smaller the time
x: 0..130
y: 0..6
shape: free
plot: 120/x ; 20..125
point: (30, 4) "30, 4" above-right
point: (40, 3) "40, 3" above-right
point: (60, 2) "60, 2" above-right
point: (120, 1) "120, 1" above
:::

This time the points do not lie on a straight line but on a curve going down: the greater the speed, the less the time.

:::example Recognising proportion from tables of values
In each table below, are $x$ and $y$ in direct proportion, in inverse proportion, or neither? If so, find the constant of proportionality.

a)

| $x$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $y$ | $3$ | $6$ | $9$ | $12$ |

b)

| $x$ | $1$ | $2$ | $3$ | $6$ |
|---|---|---|---|---|
| $y$ | $12$ | $6$ | $4$ | $2$ |

c)

| $x$ | $1$ | $2$ | $3$ |
|---|---|---|---|
| $y$ | $2$ | $3$ | $4$ |

**Solution.** In each table we work out the quotients $\dfrac yx$ and the products $xy$.

a) We have $\dfrac31=\dfrac62=\dfrac93=\dfrac{12}4=3$. The quotient is constant, so $y$ is in direct proportion to $x$ with constant $k=3$.

b) We have $1\cdot12=2\cdot6=3\cdot4=6\cdot2=12$. The product is constant, so $y$ is in inverse proportion to $x$ with constant $a=12$.

c) The quotients $\dfrac21=2$, $\dfrac32=1.5$, $\dfrac43\approx1.33$ are different, and the products $1\cdot2=2$, $2\cdot3=6$, $3\cdot4=12$ are different too. So $y$ is neither in direct nor in inverse proportion to $x$.

So a) direct proportion, $k=3$; b) inverse proportion, $a=12$; c) neither.
:::

Given one pair of corresponding values, we can find the constant of proportionality, then write the formula and work out the other values.

:::example Finding the constant, then calculating
a) Let $y$ be in direct proportion to $x$. Given that $y=15$ when $x=6$, find the constant of proportionality, write the formula for $y$ in terms of $x$ and find $y$ when $x=10$.

b) Let $y$ be in inverse proportion to $x$. Given that $y=9$ when $x=4$, find the constant of proportionality, write the formula for $y$ in terms of $x$ and find $y$ when $x=12$.

**Solution.** a) Since $y$ is in direct proportion to $x$, $y=kx$. Substituting $x=6$, $y=15$, we get $15=k\cdot6$, so $k=\dfrac{15}6=2.5$. The formula is $y=2.5x$. When $x=10$, $y=2.5\cdot10=25$.

b) Since $y$ is in inverse proportion to $x$, $y=\dfrac ax$. Substituting $x=4$, $y=9$, we get $a=4\cdot9=36$. The formula is $y=\dfrac{36}x$. When $x=12$, $y=\dfrac{36}{12}=3$.

So a) $k=2.5$, $y=2.5x$, and $y=25$ when $x=10$; b) $a=36$, $y=\dfrac{36}x$, and $y=3$ when $x=12$.
:::

:::example Buying rice
Suppose $5$ kg of rice costs $90$ thousand đồng. How much do $12$ kg of the same rice cost?

**Solution.** For the same kind of rice, the cost is in direct proportion to the number of kilograms. Let $x$ be the cost of $12$ kg of rice (thousand đồng). By the property of directly proportional quantities, we have
$$\frac{x}{90}=\frac{12}{5}.$$
Hence $x=\dfrac{90\cdot12}5=216$.

So $12$ kg of rice costs $216$ thousand đồng.
:::

With a real problem, the hardest part is not the calculation but choosing the right kind of relationship. In the next example we go through all four steps.

:::example Building a wall
Suppose a team of $6$ workers builds a wall in $20$ days. If the team has $8$ workers (each working at the same rate), how many days does it take to build the wall?

**Solution.**

*Understand.* The number of workers goes up from $6$ to $8$, the rate of each worker stays the same and the job stays the same. We need the number of days to finish.

*Plan.* More workers means faster work, so the number of days goes down. When the number of workers is multiplied by some factor, the number of days is divided by the same factor, so these two quantities are in inverse proportion. We use $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$.

*Solve.* Let $x$ be the number of days for $8$ workers to build the wall ($x>0$). Since the number of workers and the number of days are in inverse proportion,
$$\frac{6}{8}=\frac{x}{20}.$$
Hence $x=\dfrac{6\cdot20}{8}=15$. So $8$ workers build the wall in $15$ days.

*Look back.* Check with the product: $6\cdot20=120$ and $8\cdot15=120$, so the two products are equal. The number $120$ can be read as the total amount of work, measured in "worker-days" (one worker-day is the work one person does in one day). Is the result reasonable? Yes: with more workers the number of days must be less than $20$. Still, the answer is valid only if everyone works at the same rate and for the whole time.
:::

A common type of problem is to share a number into parts in direct proportion, and the next example reuses the property of a chain of equal ratios from the previous lesson.

:::example Sharing in direct proportion
Classes $7A$, $7B$, $7C$ have $32$, $36$ and $40$ students. The school asks them to plant $216$ trees altogether, with the number of trees planted by each class in direct proportion to the number of students in that class. How many trees must each class plant?

**Solution.** Let the numbers of trees for classes $7A$, $7B$, $7C$ be $x$, $y$, $z$ respectively. From the problem we have
$$\frac x{32}=\frac y{36}=\frac z{40}\quad\text{and}\quad x+y+z=216.$$
By the property of a chain of equal ratios, we have
$$\frac x{32}=\frac y{36}=\frac z{40}=\frac{x+y+z}{32+36+40}=\frac{216}{108}=2.$$
Hence $x=32\cdot2=64$, $y=36\cdot2=72$ and $z=40\cdot2=80$. We see that $64+72+80=216$ (satisfied).

So class $7A$ plants $64$ trees, class $7B$ plants $72$ trees and class $7C$ plants $80$ trees.
:::

What if the parts are to be in inverse proportion? If $y$ is in inverse proportion to $x$ then $y=\dfrac ax=a\cdot\dfrac1x$, so $y$ is in direct proportion to $\dfrac1x$. Therefore sharing in inverse proportion to the numbers $2$, $3$, $6$ is the same as sharing in direct proportion to $\dfrac12$, $\dfrac13$, $\dfrac16$.

:::example Sharing in inverse proportion
Share the number $780$ into three parts in inverse proportion to $2$, $3$, $6$.

**Solution.** Let the three parts be $x$, $y$, $z$. Since they are in inverse proportion to $2$, $3$, $6$, they are in direct proportion to $\dfrac12$, $\dfrac13$, $\dfrac16$. We have
$$\frac x{\frac12}=\frac y{\frac13}=\frac z{\frac16}\quad\text{and}\quad x+y+z=780.$$
By the property of a chain of equal ratios, we have
$$\frac x{\frac12}=\frac y{\frac13}=\frac z{\frac16}=\frac{x+y+z}{\frac12+\frac13+\frac16}=\frac{780}{1}=780.$$
Hence $x=\dfrac12\cdot780=390$, $y=\dfrac13\cdot780=260$ and $z=\dfrac16\cdot780=130$. We see that $390+260+130=780$ (satisfied).

So the three parts are $390$, $260$ and $130$. The part for the smallest number ($2$) is the largest part, as "inverse" suggests.
:::

:::warning Common mistakes
- **Thinking that "when one quantity goes up the other goes up" means direct proportion.** Wrong: for $y=x+2$, when $x$ increases $y$ increases too, so $y$ is in direct proportion to $x$. Why it is wrong: direct proportion needs $\dfrac yx$ to stay the same, and here $\dfrac31$, $\dfrac42$, $\dfrac53$ are different. Right: always check whether the quotient $\dfrac yx$ is constant.
- **Using direct proportion for an inverse proportion problem.** Wrong: if $6$ workers take $20$ days then $8$ workers take $\dfrac{20\cdot8}6\approx26.7$ days. Why it is wrong: with more workers the job must go faster, so the number of days cannot increase. Right: $x=\dfrac{6\cdot20}8=15$ days.
- **Forgetting to reverse the ratio for inverse proportion.** Wrong: $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$. Why it is wrong: that is the property of direct proportion. Right: $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$, or use the product $x_1y_1=x_2y_2$.
:::

**Connections.** This lesson reuses proportions and chains of equal ratios from the previous lesson: both properties of proportional quantities are proportions, and sharing in a given ratio is a chain of equal ratios. The formulas $y=kx$ and $y=\dfrac ax$ are also the first examples of one quantity depending on another, an idea you will meet many times in later years. As for the question at the start, it has an answer: whether you divide or multiply depends on whether the quotient or the product is the one that stays constant.

## Key terms

:::terms
- direct proportion | đại lượng tỉ lệ thuận
- inverse proportion | đại lượng tỉ lệ nghịch
- constant of proportionality | hệ số tỉ lệ
- table of values | bảng giá trị
- corresponding values | giá trị tương ứng
- formula | công thức
- constant quotient | thương không đổi
- constant product | tích không đổi
- sharing in direct proportion | chia theo tỉ lệ thuận
- sharing in inverse proportion | chia theo tỉ lệ nghịch
:::

## Summary

- $y$ is in direct proportion to $x$ when $y=kx$ ($k\neq0$); then $\dfrac yx=k$ is constant and $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$.
- $y$ is in inverse proportion to $x$ when $y=\dfrac ax$ ($a\neq0$); then $xy=a$ is constant and $\dfrac{x_1}{x_2}=\dfrac{y_2}{y_1}$.
- To recognise which one it is, make a table and check whether the quotient $\dfrac yx$ or the product $xy$ is constant.
- Sharing in direct proportion uses a chain of equal ratios; sharing in inverse proportion to some numbers means sharing in direct proportion to their reciprocals.
- Real problems: decide the kind of relationship first, then calculate, and state the assumption that the rate or price stays the same.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
In each case below, are the two quantities in direct proportion, in inverse proportion, or neither? If so, find the constant of proportionality.

a) The perimeter $C$ of a square and the length $a$ of its side.

b) The width $x$ and the length $y$ of rectangles that all have area $24$ cm².

c) The area $S$ of a square and the length $a$ of its side.

::hint
**What you need:** $y=kx$ is direct proportion, $y=\dfrac ax$ is inverse proportion.

**Steps:**
1. a) Write $C$ in terms of $a$.
2. b) Write the formula for the area of a rectangle.
3. c) Write $S$ in terms of $a$, then compare it with the two types of formula.

::solution
a) We have $C=4a$, which has the form $y=kx$ with $k=4$. So $C$ is in direct proportion to $a$ with constant $4$.

b) We have $xy=24$, so $y=\dfrac{24}x$. So $y$ is in inverse proportion to $x$ with constant $24$.

c) We have $S=a^2$, which has neither the form $y=kx$ nor the form $y=\dfrac ax$. For example, when $a$ doubles from $1$ to $2$, $S$ goes from $1$ to $4$, which is $4$ times as much. So $S$ is neither in direct nor in inverse proportion to $a$.

**Answer.** a) direct proportion, $k=4$; b) inverse proportion, $a=24$; c) neither.
:::

:::exercise
Let $y$ be in direct proportion to $x$. Given that $y=20$ when $x=8$:

a) Find the constant of proportionality and write the formula for $y$ in terms of $x$.

b) Find $y$ when $x=14$.

::hint
**What you need:** $y=kx$, so $k=\dfrac yx$.

**Steps:**
1. a) Work out $k=\dfrac{20}8$.
2. b) Substitute $x=14$ into the formula you found.

::solution
a) Since $y$ is in direct proportion to $x$, $y=kx$. Substituting $x=8$, $y=20$, we get $20=k\cdot8$, so $k=\dfrac{20}8=2.5$. The formula is $y=2.5x$.

b) When $x=14$, $y=2.5\cdot14=35$.

So a) $k=2.5$, $y=2.5x$; b) $y=35$.

**Answer.** a) $k=2.5$; b) $y=35$.
:::

:::exercise
Let $y$ be in inverse proportion to $x$. Given that $y=12$ when $x=5$:

a) Find the constant of proportionality and write the formula for $y$ in terms of $x$.

b) Find $y$ when $x=15$, and find $x$ when $y=10$.

::hint
**What you need:** $y=\dfrac ax$, so $a=xy$.

**Steps:**
1. a) Work out $a=5\cdot12$.
2. b) Substitute into $y=\dfrac ax$, or use $xy=a$.

::solution
a) Since $y$ is in inverse proportion to $x$, $y=\dfrac ax$. Substituting $x=5$, $y=12$, we get $a=5\cdot12=60$. The formula is $y=\dfrac{60}x$.

b) When $x=15$, $y=\dfrac{60}{15}=4$. When $y=10$, $x=\dfrac{60}{10}=6$.

So a) $a=60$, $y=\dfrac{60}x$; b) $y=4$ when $x=15$, and $x=6$ when $y=10$.

**Answer.** a) $a=60$; b) $4$; $6$.
:::

:::exercise
Suppose a motorbike uses $5$ litres of petrol to travel $125$ km. At the same rate of consumption, how many litres of petrol does it use to travel $300$ km?

::hint
**What you need:** the longer the distance, the more petrol is used, and the ratio of the two quantities stays the same, so they are in direct proportion.

**Steps:**
1. Let $x$ be the number of litres to find.
2. Write $\dfrac x5=\dfrac{300}{125}$ and cross-multiply.

::solution
At the same rate of consumption, the amount of petrol is in direct proportion to the distance. Let $x$ be the number of litres used to travel $300$ km ($x>0$). By the property of directly proportional quantities, we have
$$\frac x5=\frac{300}{125}.$$
Hence $x=\dfrac{5\cdot300}{125}=12$.

So the motorbike uses $12$ litres of petrol to travel $300$ km.

**Answer.** $12$ litres.
:::

:::exercise
Suppose $9$ ploughing machines (all with the same power) plough a field in $10$ days. If there were $15$ such machines, how many days would it take to plough the field?

::hint
**What you need:** more machines means fewer days, so the two quantities are in inverse proportion: $x_1y_1=x_2y_2$.

**Steps:**
1. Let $x$ be the number of days to find.
2. Write $9\cdot10=15\cdot x$.

::solution
The number of machines and the number of days to plough the field are in inverse proportion. Let $x$ be the number of days for $15$ machines to plough the field ($x>0$). By the property of inversely proportional quantities, we have $9\cdot10=15\cdot x$. Hence $x=\dfrac{90}{15}=6$.

So $15$ machines plough the field in $6$ days.

**Answer.** $6$ days.
:::

:::exercise
Suppose a car travels a distance of $180$ km. At a speed of $45$ km/h it takes $4$ hours. How long does it take at a speed of $60$ km/h?

::hint
**What you need:** over the same distance, speed and time are in inverse proportion.

**Steps:**
1. Find the constant of proportionality $a=45\cdot4$.
2. Work out the time $t=\dfrac a{60}$.

::solution
Over the same distance, the speed $v$ and the time $t$ are in inverse proportion. Let $t$ be the time at $60$ km/h ($t>0$). By the property of inversely proportional quantities, we have $45\cdot4=60\cdot t$. Hence $t=\dfrac{180}{60}=3$. We see that $60\cdot3=180$, exactly the distance.

So at $60$ km/h the journey takes $3$ hours.

**Answer.** $3$ hours.
:::

:::exercise
The sizes of the three angles $A$, $B$, $C$ of triangle $ABC$ are in direct proportion to $2$, $3$, $4$. Find the size of each angle.

::hint
**What you need:** the angles of a triangle add up to $180^\circ$.

**Steps:**
1. Write $\dfrac{\angle A}2=\dfrac{\angle B}3=\dfrac{\angle C}4$.
2. Use $\angle A+\angle B+\angle C=180^\circ$ and $2+3+4=9$.

::solution
Since the angles of a triangle add up to $180^\circ$, $\angle A+\angle B+\angle C=180^\circ$. From the problem we have $\dfrac{\angle A}2=\dfrac{\angle B}3=\dfrac{\angle C}4$. By the property of a chain of equal ratios, we have
$$\frac{\angle A}2=\frac{\angle B}3=\frac{\angle C}4=\frac{\angle A+\angle B+\angle C}{2+3+4}=\frac{180^\circ}{9}=20^\circ.$$
Hence $\angle A=2\cdot20^\circ=40^\circ$, $\angle B=3\cdot20^\circ=60^\circ$ and $\angle C=4\cdot20^\circ=80^\circ$. We see that $40^\circ+60^\circ+80^\circ=180^\circ$ (satisfied).

So $\angle A=40^\circ$, $\angle B=60^\circ$, $\angle C=80^\circ$.

**Answer.** $40^\circ$; $60^\circ$; $80^\circ$.
:::

:::exercise
Three friends win prizes in a crossword competition and share $360$ thousand đồng of prize money in inverse proportion to their completion times of $3$ minutes, $4$ minutes and $6$ minutes. How much money does each friend receive?

::hint
**What you need:** sharing in inverse proportion to $3$, $4$, $6$ means sharing in direct proportion to $\dfrac13$, $\dfrac14$, $\dfrac16$.

**Steps:**
1. Let the three parts be $x$, $y$, $z$ and write $\dfrac x{\frac13}=\dfrac y{\frac14}=\dfrac z{\frac16}$.
2. Work out $\dfrac13+\dfrac14+\dfrac16$ by writing the fractions over the common denominator $12$.

::solution
Let the amounts of the three friends be $x$, $y$, $z$ (thousand đồng). Since the amounts are in inverse proportion to $3$, $4$, $6$, they are in direct proportion to $\dfrac13$, $\dfrac14$, $\dfrac16$. We have
$$\frac x{\frac13}=\frac y{\frac14}=\frac z{\frac16}\quad\text{and}\quad x+y+z=360.$$
We have $\dfrac13+\dfrac14+\dfrac16=\dfrac4{12}+\dfrac3{12}+\dfrac2{12}=\dfrac9{12}=\dfrac34$. By the property of a chain of equal ratios, we have
$$\frac x{\frac13}=\frac y{\frac14}=\frac z{\frac16}=\frac{360}{\frac34}=480.$$
Hence $x=\dfrac13\cdot480=160$, $y=\dfrac14\cdot480=120$ and $z=\dfrac16\cdot480=80$. We see that $160+120+80=360$ (satisfied).

So the three friends receive $160$ thousand đồng, $120$ thousand đồng and $80$ thousand đồng respectively.

**Answer.** $160$; $120$; $80$ (thousand đồng).
:::

:::exercise
Given that $y$ is in direct proportion to $x$ with constant $k$, and $x$ is in direct proportion to $z$ with constant $h$ (with $k\neq0$, $h\neq0$), prove that $y$ is in direct proportion to $z$ and find the constant of proportionality.

::hint
**What you need:** $y=kx$ and $x=hz$.

**Steps:**
1. Substitute $x=hz$ into $y=kx$.
2. Compare the result with the form $y=\text{constant}\cdot z$.

::solution
Since $y$ is in direct proportion to $x$ with constant $k$, $y=kx$. Since $x$ is in direct proportion to $z$ with constant $h$, $x=hz$.

Substituting $x=hz$ into $y=kx$, we get $y=k(hz)=(kh)z$.

Since $k\neq0$ and $h\neq0$, $kh\neq0$. Hence $y$ is in direct proportion to $z$ with constant $kh$.

So $y$ is in direct proportion to $z$, with constant of proportionality $kh$.

**Answer.** The constant of proportionality is $kh$.
:::

:::exercise Challenge
Suppose $12$ workers plan to finish a job in $30$ days, each working at the same rate. After $10$ days, $6$ of the workers are sent elsewhere. How many more days do the remaining $6$ workers need to finish the job?

::hint
**What you need:** measure the amount of work in "worker-days" (one person working one day is one worker-day); the total does not change when the number of workers changes.

**Steps:**
1. The total number of worker-days for the whole job is $12\cdot30$.
2. Subtract the worker-days done in the first $10$ days, then divide by the number of workers left.

::solution
The total amount of work is $12\cdot30=360$ (worker-days).

In the first $10$ days, $12$ workers do $12\cdot10=120$ (worker-days). The work left is $360-120=240$ (worker-days).

Let $x$ be the number of days the remaining $6$ workers need to finish the job ($x>0$). Since the number of workers and the number of days are in inverse proportion, $6\cdot x=240$. Hence $x=\dfrac{240}6=40$.

So the remaining $6$ workers need $40$ more days to finish the job.

**Answer.** $40$ days.
:::

## Mini test

:::quiz
::mc NB
Given that $y$ is in direct proportion to $x$ with constant $3$. When $x=5$, $y$ equals
A. $8$.
B. $\dfrac53$.
C. $15$.
D. $2$.
::key C
$y=3x$, so when $x=5$, $y=15$. A is $x+3$, B is $\dfrac x3$, and D is $x-3$.

::mc TH
Two quantities $x$, $y$ are in inverse proportion. When $x=4$, $y=15$. The constant of proportionality is
A. $\dfrac4{15}$.
B. $19$.
C. $\dfrac{15}4$.
D. $60$.
::key D
$a=xy=4\cdot15=60$. B is the sum $4+15$, C is $\dfrac yx$ (used for direct proportion), and A is $\dfrac xy$.

::mc TH
A quantity $y$ is in inverse proportion to $x$ with constant $24$. When $x=8$, $y$ equals
A. $3$.
B. $16$.
C. $\dfrac13$.
D. $192$.
::key A
$y=\dfrac{24}8=3$. A is $24\cdot8$, B is $24-8$, and C is $\dfrac8{24}$.

::mc VD
A team of $5$ people finishes a job in $12$ days. If the team had $10$ people (working at the same rate), the job would be finished in
A. $24$ days.
B. $6$ days.
C. $7$ days.
D. $60$ days.
::key B
The number of people and the number of days are in inverse proportion: $5\cdot12=10\cdot x$, so $x=6$. A is the result of using direct proportion, C is $12-5$, and D is $5\cdot12$.

::tf TH TH VD VD
Here is a table of values of two quantities $x$ and $y$:

| $x$ | $2$ | $4$ | $6$ |
|---|---|---|---|
| $y$ | $12$ | $6$ | $4$ |

Decide whether each statement is true or false.
a) The product $xy$ is always $24$.
b) $y$ is in direct proportion to $x$.
c) When $x=8$, $y=3$.
d) When $y=2$, $x=10$.
::key T F T F
a) True: $2\cdot12=4\cdot6=6\cdot4=24$. b) False: $y$ decreases as $x$ increases and the product is constant, so $y$ is in inverse proportion to $x$. c) True: $y=\dfrac{24}8=3$. d) False: $x=\dfrac{24}2=12$.

::sa VD
Given that $y$ is in direct proportion to $x$ and $y=15$ when $x=6$, find $y$ when $x=10$.
::key 25
$k=\dfrac{15}6=2.5$, so $y=2.5\cdot10=25$.

::sa VD
Suppose $5$ pumps of equal power empty a pond in $6$ hours. How many hours would $4$ such pumps take to empty the pond? (give your answer as a decimal)
::key 7.5
The number of pumps and the number of hours are in inverse proportion: $5\cdot6=4\cdot x$, so $x=\dfrac{30}4=7.5$.
:::
