---
title: Solving word problems by forming equations
description: Solve real-life problems with quadratic equations: choose the unknown, state its condition, form and solve the equation, check the condition and conclude.
minutes: 20
---

:::goals
- Know the steps for solving a problem by forming an equation.
- Express unknown quantities in terms of one unknown and form a quadratic equation from the problem.
- Solve problems about geometry, rates of work, motion and percentage growth.
- Check the roots against the condition and against reality before concluding.
:::

Suppose that at the start of spring, a youth volunteer team in a commune plans to plant $120$ trees along the road to the school, the same number every day. When the work begins, some students join in, so the team plants $4$ more trees per day than planned and finishes $1$ day early. How many trees per day did the team plan to plant?

Three quantities in this problem are tied together: trees per day, number of days and the total number of trees ($\text{total}=\text{per day}\times\text{days}$). Forming an equation means writing this link in the language of algebra, and then letting quadratic equations (lesson [quadratic equations in one unknown](lesson:quadratic-equations)) do the rest.

## The steps for solving a problem by forming an equation

:::definition The steps for solving a problem by forming an equation
**Step 1.** Form the equation:
- Choose the unknown and state a suitable condition on it (with units);
- Express the other unknown quantities in terms of the unknown and the known quantities;
- Form an equation showing the relation between the quantities.

**Step 2.** Solve the equation.

**Step 3.** Check which roots of the equation satisfy the condition on the unknown, then conclude.
:::

**Going deeper.** An equation is a *model* of a real situation, and a model is often "wider" than reality: it can have a negative root even though no length is negative. So the condition in Step 1 is not a formality: it lets Step 3 filter the roots. We usually choose the quantity the problem asks for as the unknown; if the equation becomes messy, choose another quantity.

:::example Two consecutive natural numbers
Find two consecutive natural numbers whose product is $156$.

**Solution.** Let the smaller number be $x$ ($x\in\mathbb{N}$); the next number is $x+1$. From the problem we have the equation

$$x(x+1)=156\Leftrightarrow x^2+x-156=0.$$

We have $\Delta=1+624=625$ and $\sqrt\Delta=25$, so $x_1=\dfrac{-1+25}{2}=12$ (satisfies the condition) and $x_2=\dfrac{-1-25}{2}=-13$ (rejected, since it is not a natural number).

So the two numbers are $12$ and $13$.
:::

## Geometry problems

In geometry problems, perimeter, area and Pythagoras' theorem are the "bridges" between the unknown and the data; a figure with the dimensions written in terms of $x$ makes the equation quicker to form.

:::example A path in a garden
Suppose a rectangular garden is $20$ m long and $14$ m wide. A path of constant width runs along all four sides, inside the garden; the rest, used for vegetables, has area $160$ m². Find the width of the path.

**Solution.** Let the width of the path be $x$ (m), $0<x<7$. The vegetable plot is a rectangle measuring $20-2x$ by $14-2x$ (m). From the problem we have the equation

$$(20-2x)(14-2x)=160\Leftrightarrow4x^2-68x+120=0\Leftrightarrow x^2-17x+30=0.$$

We have $\Delta=289-120=169$, so $x_1=\dfrac{17+13}{2}=15$ (rejected, since $15>7$) and $x_2=\dfrac{17-13}{2}=2$ (satisfies the condition).

So the path is $2$ m wide.
:::

:::diagram The vegetable plot $16$ m $\times$ $10$ m inside the garden $20$ m $\times$ $14$ m
alt: A large rectangle 20 by 14 with a rectangle 16 by 10 inside it, 2 units from each side; the strip between them is the path of width x
point A 0,0 below-left
point B 20,0 below-right
point C 20,14 above-right
point D 0,14 above-left
point E 2,2 ""
point F 18,2 ""
point G 18,12 ""
point H 2,12 ""
polygon A B C D
polygon E F G H
label 10,-1.2 "20 m"
label -1.6,7 "14 m"
label 10,7 "160 m²"
label 10,1 "x"
:::

## Rate of work and motion problems

These two types have the same structure: $\text{amount of work}=\text{rate}\times\text{time}$ and $\text{distance}=\text{speed}\times\text{time}$. The time is written as a fraction, so the equation has the unknown in a denominator (lesson [equations reducible to linear equations](lesson:equations-reducible-to-linear)).

:::example Answering the opening question
Solve the tree-planting problem from the opening.

**Solution.** Let the planned number of trees per day be $x$ ($x\in\mathbb{N}^*$). The planned time is $\dfrac{120}{x}$ days; in fact the team plants $x+4$ trees per day, so the actual time is $\dfrac{120}{x+4}$ days. Since the team finishes $1$ day early, we have the equation

$$\frac{120}{x}-\frac{120}{x+4}=1.$$

Multiplying both sides by $x(x+4)$, we get $120(x+4)-120x=x(x+4)\Leftrightarrow x^2+4x-480=0$. We have $\Delta'=4+480=484$ and $\sqrt{\Delta'}=22$, so $x_1=-2+22=20$ (satisfies the condition) and $x_2=-2-22=-24$ (rejected).

So the team planned to plant $20$ trees per day.

**Check.** Planned: $120\div20=6$ days; actual: $120\div24=5$ days, which is $1$ day early.
:::

The next motion problem has more data, so we go through all four steps.

:::example There and back at two speeds
A motorcyclist rides from home to a city $60$ km away. On the way back, the rider goes $10$ km/h faster, so the return journey takes $30$ minutes less. Find the speed on the way there.

**Solution.**

*Understand.* The return speed is $10$ km/h higher; the return time is $30$ minutes $=\dfrac12$ hour shorter.

*Plan.* Let the speed on the way there be $x$ (km/h), $x>0$. The time there is $\dfrac{60}{x}$ (hours) and the time back is $\dfrac{60}{x+10}$ (hours). From the problem we have the equation

$$\frac{60}{x}-\frac{60}{x+10}=\frac12.$$

*Solve.* Multiplying both sides by $2x(x+10)$, we get $120(x+10)-120x=x(x+10)\Leftrightarrow x^2+10x-1200=0$. We have $\Delta'=25+1200=1225$ and $\sqrt{\Delta'}=35$, so $x_1=-5+35=30$ (satisfies the condition) and $x_2=-5-35=-40$ (rejected).

So the speed on the way there is $30$ km/h.

*Look back.* Is the result sensible? The journey there takes $2$ hours and the return at $40$ km/h takes $1.5$ hours, indeed $30$ minutes less. If we forgot to convert $30$ minutes into hours and wrote $30$ on the right-hand side, we would get $x^2+10x-20=0$, giving a speed of about $1.7$ km/h, slower than walking: a sign that the units are wrong.
:::

## Percentage growth problems

If a quantity grows by $r$ (written as a decimal) each year, then each year it is multiplied by $1+r$; after two years it is multiplied by $(1+r)^2$. This is the common law behind compound interest, population growth and rising prices.

:::example The population of a commune
Suppose the population of a commune grows from $10\,000$ to $10\,404$ people in $2$ years, at the same rate each year. Find the yearly growth rate of the population.

**Solution.** Let the yearly growth rate be $r$ ($r>0$). From the problem we have the equation

$$10\,000(1+r)^2=10\,404\Leftrightarrow(1+r)^2=1.0404\Leftrightarrow1+r=1.02\ \text{(since }1+r>0).$$

Hence $r=0.02$.

So the population grows by $2\%$ per year.

**Remark.** The total growth over two years is $4.04\%$, not $4\%$, because in the second year the $2\%$ is taken of the population that has *already grown*.
:::

:::warning Common mistakes
- **Not checking the condition.** Wrong: "the speed is $30$ km/h or $-40$ km/h". Right: reject the roots that break the condition ($x>0$) before concluding.
- **Subtracting the times the wrong way round.** "Finishes early" means the planned time is longer, so we need $\text{planned}-\text{actual}=1$, not the other way round.
:::

**Connections.** This lesson gathers the tools of the chapter: the quadratic formula, Viète's theorem and equations with the unknown in a denominator; it also links to forming simultaneous equations in chapter I. When you meet a problem, ask yourself: which quantities depend on each other, and which relation between them is an "equals"?

## Key terms

:::terms
- solving problems by forming equations | giải bài toán bằng cách lập phương trình
- choosing the unknown | chọn ẩn
- condition on the unknown | điều kiện của ẩn
- satisfies the condition | thoả mãn điều kiện
- rate of work | năng suất
- speed | vận tốc
- growth rate | tỉ lệ tăng
- compound interest | lãi kép
:::

## Summary

- Three steps: form the equation (unknown, condition, express, equation) → solve → check against the condition and reality (positive lengths, natural numbers, …), then conclude.
- Geometry: use perimeter, area and Pythagoras' theorem; draw a figure with dimensions in terms of $x$.
- Rate of work and motion: $\text{time}=\dfrac{\text{total}}{\text{rate}}$ or $\dfrac{\text{distance}}{\text{speed}}$; make the units consistent.
- Growth: after two years a quantity is multiplied by $(1+r)^2$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find two consecutive even natural numbers whose product is $224$.

::hint
**What you need:** two consecutive even numbers differ by $2$.

**Steps:**
1. Let the smaller number be $x$ and the larger $x+2$.
2. Solve $x(x+2)=224$.

::solution
Let the smaller number be $x$ ($x$ an even natural number). We have the equation $x(x+2)=224\Leftrightarrow x^2+2x-224=0$. We have $\Delta'=1+224=225$, so $x=-1+15=14$ (satisfies the condition) or $x=-1-15=-16$ (rejected).

So the two numbers are $14$ and $16$.

**Answer.** $14$ and $16$.
:::

:::exercise
A right-angled triangle has hypotenuse $13$ cm, and its two shorter sides differ by $7$ cm. Find the lengths of the two shorter sides.

::hint
**What you need:** Pythagoras' theorem.

**Steps:**
1. Let the shortest side be $x$ (cm), $x>0$; the other is $x+7$.
2. Solve $x^2+(x+7)^2=169$.

::solution
Let the shortest side be $x$ (cm), $x>0$. By Pythagoras' theorem we have

$$x^2+(x+7)^2=169\Leftrightarrow2x^2+14x-120=0\Leftrightarrow x^2+7x-60=0.$$

We have $\Delta=49+240=289$, so $x=\dfrac{-7+17}{2}=5$ (satisfies the condition) or $x=\dfrac{-7-17}{2}=-12$ (rejected).

So the two shorter sides are $5$ cm and $12$ cm.

**Answer.** $5$ cm and $12$ cm.
:::

:::exercise
According to plan, a production team must make $600$ products, the same number each day. Thanks to a technical improvement, the team makes $10$ more products each day and finishes $2$ days ahead of plan. How many products per day did the plan require?

::hint
**What you need:** $\text{number of days}=\dfrac{\text{total number of products}}{\text{rate}}$.

**Steps:**
1. Let the planned rate be $x$ (products per day), $x\in\mathbb{N}^*$.
2. Form the equation $\dfrac{600}{x}-\dfrac{600}{x+10}=2$.

::solution
Let the planned number of products per day be $x$ ($x\in\mathbb{N}^*$). From the problem we have the equation

$$\frac{600}{x}-\frac{600}{x+10}=2\Leftrightarrow6000=2x(x+10)\Leftrightarrow x^2+10x-3000=0.$$

We have $\Delta'=25+3000=3025$ and $\sqrt{\Delta'}=55$, so $x=-5+55=50$ (satisfies the condition) or $x=-60$ (rejected).

So the plan required $50$ products per day.

**Answer.** $50$ products.
:::

:::exercise
A motorboat travels $35$ km downstream and then $35$ km upstream, taking $6$ hours in total (not counting stops). The current flows at $2$ km/h. Find the speed of the boat in still water.

::hint
**What you need:** speed downstream $=x+2$, speed upstream $=x-2$.

**Steps:**
1. Let the speed in still water be $x$ (km/h), $x>2$.
2. Form the equation $\dfrac{35}{x+2}+\dfrac{35}{x-2}=6$ and solve it.

::solution
Let the speed of the boat in still water be $x$ (km/h), $x>2$. From the problem we have the equation

$$\frac{35}{x+2}+\frac{35}{x-2}=6\Leftrightarrow35(x-2)+35(x+2)=6(x^2-4)\Leftrightarrow3x^2-35x-12=0.$$

We have $\Delta=1225+144=1369$ and $\sqrt\Delta=37$, so $x=\dfrac{35+37}{6}=12$ (satisfies the condition) or $x=\dfrac{35-37}{6}=-\dfrac13$ (rejected).

So the speed of the boat in still water is $12$ km/h.

**Answer.** $12$ km/h.
:::

:::exercise
Suppose the price of a mobile phone falls from $5$ million dong to $4.05$ million dong after two reductions, each by the same percentage of the price just before it. By what percentage is the price reduced each time?

::hint
**What you need:** each reduction by $r$ multiplies the price by $1-r$.

**Steps:**
1. Form the equation $5(1-r)^2=4.05$ with $0<r<1$.
2. Solve it as $X^2=k$.

::solution
Let the rate of each reduction be $r$ ($0<r<1$). From the problem we have the equation

$$5(1-r)^2=4.05\Leftrightarrow(1-r)^2=0.81\Leftrightarrow1-r=0.9\ \text{(since }1-r>0).$$

Hence $r=0.1$.

So the price is reduced by $10\%$ each time.

**Answer.** $10\%$.
:::

:::exercise
A rectangular photo measuring $12$ cm $\times$ $8$ cm is put in a frame with a border of constant width. The total area of the frame and photo is $140$ cm². Find the width of the border. (Revise [finding roots mentally](lesson:vietes-theorem).)

::hint
**What you need:** the whole frame is a rectangle $(12+2x)\times(8+2x)$; find the roots mentally when $a+b+c=0$.

**Steps:**
1. Let the width of the border be $x$ (cm), $x>0$.
2. Form the equation, simplify it, then find the roots mentally.

::solution
Let the width of the border be $x$ (cm), $x>0$. We have the equation

$$(12+2x)(8+2x)=140\Leftrightarrow4x^2+40x-44=0\Leftrightarrow x^2+10x-11=0.$$

We have $a+b+c=1+10-11=0$, so $x_1=1$ (satisfies the condition) and $x_2=-11$ (rejected).

So the border is $1$ cm wide.

**Answer.** $1$ cm.
:::

:::exercise
**(2.0 marks)**

a) Solve the equation $x^2-2x-35=0$.

b) Solve the following problem by forming an equation: A group of students hires a coach for a trip for $4.2$ million dong, shared equally. On the day of the trip, $2$ more students join, so each student pays $10$ thousand dong less than expected. How many students were in the group at first?

c) How much does each student actually pay?

::hint
**What you need:** the reduced discriminant; the amount per student $=\dfrac{\text{total cost}}{\text{number of students}}$.

**Steps:**
1. a) Work out $\Delta'$.
2. b) Work in thousands of dong: $4.2$ million $=4200$ thousand. Let the original number of students be $x$ and form $\dfrac{4200}{x}-\dfrac{4200}{x+2}=10$.
3. c) Divide the total cost by $x+2$.

::solution
a) We have $\Delta'=1+35=36$, so $x=1+6=7$ or $x=1-6=-5$.

b) Let the original number of students be $x$ ($x\in\mathbb{N}^*$). We work in thousands of dong. From the problem we have the equation

$$\frac{4200}{x}-\frac{4200}{x+2}=10\Leftrightarrow8400=10x(x+2)\Leftrightarrow x^2+2x-840=0.$$

We have $\Delta'=1+840=841$ and $\sqrt{\Delta'}=29$, so $x=-1+29=28$ (satisfies the condition) or $x=-30$ (rejected).

c) In fact there are $30$ students, and each pays $4200\div30=140$ (thousand dong).

So a) $x=7$, $x=-5$; b) there were $28$ students at first; c) each student pays $140$ thousand dong.

**Answer.** a) $7$; $-5$. b) $28$ students. c) $140$ thousand dong.
:::

:::exercise Challenge
Suppose a cinema sells $300$ tickets a day at a price of $60$ thousand dong. A survey shows that for every $5$ thousand dong cut from the price, it sells $50$ more tickets a day. The cinema wants a daily revenue of $20$ million dong and chooses the option that sells more tickets. What is the new ticket price?

::hint
**What you need:** revenue $=$ price $\times$ number of tickets; the number of tickets and the price depend on each other.

**Steps:**
1. Let the number of $5$ thousand dong cuts be $x$ ($x\in\mathbb{N}$, $x<12$).
2. The price is $60-5x$ and the number of tickets is $300+50x$; form the equation with revenue $20\,000$ thousand dong.
3. Choose the root that gives more tickets.

::solution
Let the number of $5$ thousand dong cuts be $x$ ($x\in\mathbb{N}$, $x<12$). Then the price is $60-5x$ (thousand dong) and the number of tickets sold is $300+50x$. From the problem we have the equation

$$(60-5x)(300+50x)=20\,000\Leftrightarrow250x^2-1500x+2000=0\Leftrightarrow x^2-6x+8=0.$$

We have $\Delta'=9-8=1$, so $x=4$ or $x=2$ (both satisfy the condition). With $x=2$: price $50$ thousand dong, $400$ tickets; with $x=4$: price $40$ thousand dong, $500$ tickets. The cinema chooses the option with more tickets, so $x=4$.

So the new ticket price is $40$ thousand dong.

**Remark.** With $x=3$ (price $45$ thousand dong, $450$ tickets), the revenue is $20.25$ million dong, which is higher; the quadratic functions of grade 10 will help find the best price.

**Answer.** $40$ thousand dong.
:::

## Mini test

:::quiz
::mc
The product of two consecutive natural numbers is $110$. If the smaller number is $x$, which equation is correct?
A. $x+(x+1)=110$.
B. $x(x+1)=110$.
C. $x^2+1=110$.
D. $2x+1=110$.
::key B
The next number is $x+1$ and their product is $x(x+1)$. A and D use the sum, and C confuses $x(x+1)$ with $x^2+1$.

::mc
A car travels $90$ km at a speed of $x$ (km/h). If it went $15$ km/h faster, it would arrive $1$ hour earlier. Which equation is correct?
A. $\dfrac{90}{x}-\dfrac{90}{x+15}=1$.
B. $\dfrac{90}{x+15}-\dfrac{90}{x}=1$.
C. $\dfrac{90}{x}+\dfrac{90}{x+15}=1$.
D. $90x-90(x+15)=1$.
::key A
The original time is longer, so $\dfrac{90}{x}-\dfrac{90}{x+15}=1$. B subtracts the wrong way round, C adds instead of subtracting, and D multiplies instead of dividing.

::mc
In a problem where the unknown $x$ is a width (m), we get the equation $x^2+3x-70=0$ with roots $7$ and $-10$. The width is
A. $7$ m or $10$ m.
B. $-10$ m.
C. $10$ m.
D. $7$ m.
::key D
The condition $x>0$ rejects $-10$; A and C wrongly drop the minus sign.

::mc
The price of a product rises from $200$ thousand dong to $242$ thousand dong after two increases, each by $r\%$ of the previous price. The value of $r$ is
A. $11$.
B. $21$.
C. $10.5$.
D. $10$.
::key D
$\left(1+\dfrac{r}{100}\right)^2=\dfrac{242}{200}=1.21$, so $1+\dfrac{r}{100}=1.1$, that is $r=10$. B is the total increase, C divides $21\%$ by $2$, and A takes $\sqrt{121}=11$ by mistake.

::tf
A rectangular garden is $4$ m longer than it is wide and has area $96$ m². Let the width be $x$ (m), $x>0$. Decide whether each statement is true or false.
a) The length of the garden is $x+4$ (m).
b) We have the equation $x^2+4x-96=0$.
c) The width of the garden is $12$ m.
d) The perimeter of the garden is $40$ m.
::key T T F T
a) True. b) True: $x(x+4)=96$. c) False: $\Delta'=100$, $x=-2+10=8$. d) True: $2(8+12)=40$.

::sa
The product of two consecutive even natural numbers is $288$. Find the larger number.
::key 18
$x(x+2)=288\Leftrightarrow x^2+2x-288=0$, $\Delta'=289$, $x=16$; the larger number is $18$.

::sa
Suppose the population of a ward grows from $20\,000$ to $20\,808$ people in $2$ years, at the same rate of $r\%$ each year. Find $r$.
::key 2
$\left(1+\dfrac{r}{100}\right)^2=1.0404$, so $1+\dfrac{r}{100}=1.02$, that is $r=2$.
:::
