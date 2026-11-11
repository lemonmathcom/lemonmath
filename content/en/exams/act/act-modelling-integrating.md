---
title: Modelling and integrating skills
description: ACT Math modeling and integrated questions: building linear and exponential models, interpreting parameters, multi-step rate, volume and cost problems.
minutes: 45
---

:::goals
- Build a linear or exponential model from a description or a table, and use it to predict.
- Interpret the numbers in a model in the context of the problem.
- Choose between linear and exponential models from the pattern in data.
- Solve multi-step problems that combine rates, units, volume, percentages and cost.
:::

ACT labels some questions **Modeling** and groups others as **Integrating Essential Skills**. In practice they look alike: a realistic situation, several pieces of information, and a question that needs two or three steps. The mathematics is rarely harder than in other questions; what makes them hard is organizing the information. A good routine is: name the quantities, write the model or the chain of calculations, compute, and check that the answer makes sense in context.

## Linear models

A quantity that changes by the **same amount** for each unit step is linear: $y=mx+b$, where $m$ is the rate of change and $b$ is the starting value (the value when $x=0$).

:::example A linear model from a table
The table shows the cost $C$, in dollars, of printing $n$ T-shirts.

| $n$ | $0$ | $5$ | $10$ |
|---|---|---|---|
| $C$ | $40$ | $65$ | $90$ |

If the pattern continues, what is the cost of printing $18$ T-shirts?
A. $130$ dollars
B. $162$ dollars
C. $126$ dollars
D. $90$ dollars

**Solution.** Each increase of $5$ T-shirts adds $25$ dollars, so the rate is $\dfrac{25}{5}=5$ dollars per T-shirt, and the starting value is $C=40$ when $n=0$. So the model is
$$C=5n+40.$$

For $n=18$: $C=5(18)+40=90+40=130$.

So printing $18$ T-shirts costs $130$ dollars, answer **A**. Option C forgets the fixed cost of $40$ dollars.
:::

## Exponential models

A quantity that changes by the **same percentage** each period is exponential: $y=a\cdot b^t$, where $a$ is the starting value and $b=1+r$ for growth or $b=1-r$ for decay at rate $r$.

:::example Compound growth
Linh invests $2000$ dollars at $4\%$ interest compounded once a year. To the nearest dollar, what is the investment worth after $10$ years?
A. $2800$ dollars
B. $2960$ dollars
C. $2080$ dollars
D. $8000$ dollars

**Solution.** Each year the value is multiplied by $1.04$, so after $10$ years it is
$$2000(1.04)^{10}\approx2960.49.$$

So the investment is worth about $2960$ dollars, answer **B**. Option A uses simple interest: $2000+10\times80$.
:::

:::example Linear or exponential?
A quantity takes the values $3$, $6$, $12$, $24$ at times $0$, $1$, $2$, $3$. Which model fits these data?
A. $y=3x+3$
B. $y=6x$
C. $y=3\cdot2^x$
D. $y=3x^2$

**Solution.** The differences $3$, $6$, $12$ are not constant, so the data are not linear. The ratios $\dfrac63=\dfrac{12}{6}=\dfrac{24}{12}=2$ are constant, so the data are exponential with starting value $3$ and ratio $2$.

Check: $3\cdot2^3=24$.

So the model is $y=3\cdot2^x$, answer **C**.
:::

## Interpreting a model

In a modeling question, every number in the formula has a meaning. The constant term is usually a starting value, a coefficient of $x$ is usually a rate, and the base of an exponential is a growth factor.

:::example What does the 2 mean?
The height, in meters, of a ball $t$ seconds after it is thrown is $h(t)=-4.9t^2+14.7t+2$. What does the number $2$ represent?
A. The time when the ball lands
B. The maximum height of the ball
C. The speed at which the ball is thrown
D. The height from which the ball is thrown

**Solution.** At $t=0$, the moment of the throw, $h(0)=2$. So $2$ is the height of the ball when it leaves the thrower's hand.

So the number $2$ represents the height from which the ball is thrown, answer **D**.
:::

## Multi-step problems

Integrated questions chain several simple steps. Write each step with its units so that you can see where you are.

:::example Filling a tank
A rectangular tank measures $2$ m by $1.5$ m by $1$ m. Water flows in at $50$ liters per minute. How long does it take to fill the empty tank? ($1$ m³ $=1000$ liters.)
A. $6$ minutes
B. $30$ minutes
C. $60$ minutes
D. $150$ minutes

**Solution.** The volume of the tank is $2\times1.5\times1=3$ m³, which is $3\times1000=3000$ liters.

At $50$ liters per minute, the time is
$$\frac{3000}{50}=60\text{ minutes}.$$

So the tank fills in $60$ minutes, answer **C**. Option A divides $3000$ by $500$ instead of $50$. Writing the units at each step prevents such errors.
:::

:::example The cost of a trip
A car uses $6.5$ liters of fuel per $100$ km. Fuel costs $1.20$ dollars per liter. What is the fuel cost of a $340$-km trip?
A. $22.10$ dollars
B. $26.52$ dollars
C. $40.80$ dollars
D. $7.80$ dollars

**Solution.** The fuel used is
$$\frac{6.5}{100}\times340=22.1\text{ liters}.$$

At $1.20$ dollars per liter, the cost is $22.1\times1.2=26.52$ dollars.

So the fuel for the trip costs $26.52$ dollars, answer **B**. Option A is the number of liters, not the cost.
:::

:::warning Common traps
- **Linear or exponential:** look at differences (linear) and ratios (exponential).
- **Simple and compound interest:** "compounded" means multiply each period.
- **Units:** convert before you compute: m³ to liters, minutes to hours.
- **Rounding too early** in a chain of steps; round only the final answer.
- **Answering an intermediate quantity:** a question about cost does not end at the number of liters.
:::

:::terms
- linear model, rate of change | mô hình tuyến tính, tốc độ thay đổi
- starting value, intercept | giá trị ban đầu, tung độ gốc
- exponential growth, decay | tăng trưởng, suy giảm theo hàm mũ
- growth factor | hệ số tăng trưởng
- compound interest, simple interest | lãi kép, lãi đơn
- break-even point | điểm hoà vốn
- unit conversion | đổi đơn vị
- interpret | giải thích ý nghĩa
:::

## Similar exercises

:::exercise
A phone plan costs $15$ dollars per month plus $0.10$ dollars per minute of calls. Write a model for the monthly cost $C$ for $m$ minutes, and find the cost for $250$ minutes.

::hint
**What you need:** fixed cost plus rate times quantity.

::solution
The cost is the fixed fee plus $0.10$ dollars for each minute, so
$$C=15+0.1m.$$

For $m=250$: $C=15+0.1(250)=15+25=40$.

So the model is $C=15+0.1m$, and $250$ minutes cost $40$ dollars.

**Answer.** $C=15+0.1m$; $40$ dollars.
:::

:::exercise
A town of $5000$ people loses $3\%$ of its population each year. Write a model for the population after $t$ years and estimate it after $5$ years.

::hint
**What you need:** decay factor $1-0.03=0.97$.

::solution
Each year the population is multiplied by $0.97$, so $P(t)=5000(0.97)^t$.

After $5$ years, $P(5)=5000(0.97)^5\approx4293.7$.

So the model is $P(t)=5000(0.97)^t$, and after $5$ years the population is about $4294$ people.

**Answer.** About $4294$ people.
:::

:::exercise
Nam's savings after $w$ weeks are modeled by $S=1200+50w$, in thousand đồng. Interpret the numbers $1200$ and $50$.

::hint
**What you need:** the value at $w=0$ and the change per week.

::solution
At $w=0$, $S=1200$, so $1200$ is the amount Nam has saved at the start.

Each week $S$ increases by $50$, so $50$ is the amount he saves each week.

So Nam starts with $1200$ thousand đồng and saves $50$ thousand đồng per week.

**Answer.** Starting savings $1200$ thousand đồng; $50$ thousand đồng per week.
:::

:::exercise
A cylindrical tank has radius $1$ m and height $2$ m. Water flows in at $0.5$ m³ per minute. How long does it take to fill the empty tank, to the nearest tenth of a minute?

::hint
**What you need:** $V=\pi r^2h$, then divide by the rate.

::solution
The volume of the tank is $V=\pi(1)^2(2)=2\pi$ m³.

At $0.5$ m³ per minute, the time is
$$\frac{2\pi}{0.5}=4\pi\approx12.6\text{ minutes}.$$

So the tank fills in about $12.6$ minutes.

**Answer.** About $12.6$ minutes.
:::

:::exercise
A car uses $8$ liters of fuel per $100$ km. How much fuel does it use on a $450$-km trip?

::hint
**What you need:** fuel per kilometer times the distance.

::solution
The car uses $\dfrac{8}{100}=0.08$ liters per kilometer.

On $450$ km it uses $0.08\times450=36$ liters.

So the car uses $36$ liters of fuel on the trip.

**Answer.** $36$ liters.
:::

## Application exercises

:::exercise
A small business makes phone cases. Its costs are $500$ dollars per month plus $4$ dollars per case, and it sells each case for $9$ dollars. How many cases must it sell in a month to break even?

::hint
**What you need:** break even means revenue equals cost.

::solution
Let $x$ be the number of cases sold in a month. The cost is $500+4x$ dollars and the revenue is $9x$ dollars.

Breaking even means $9x=500+4x$, so $5x=500$ and $x=100$.

So the business must sell $100$ cases a month to break even.

**Answer.** $100$ cases.
:::

:::exercise
Two cars start at the same time from two cities $350$ km apart and drive toward each other at $60$ km/h and $80$ km/h. After how long do they meet?

::hint
**What you need:** the distance between them decreases by $60+80$ km each hour.

::solution
The distance between the cars decreases by $60+80=140$ km each hour.

They meet when the whole $350$ km has been covered, after
$$\frac{350}{140}=2.5\text{ hours}.$$

So the cars meet after $2.5$ hours, that is $2$ hours $30$ minutes.

**Answer.** $2.5$ hours.
:::

:::exercise
An online channel had $1200$ subscribers at the start of 2024, and the number doubles every $2$ years. If the trend continues, how many subscribers will it have at the start of 2030?

::hint
**What you need:** count the doubling periods from 2024 to 2030.

::solution
From 2024 to 2030 is $6$ years, which is $\dfrac62=3$ doubling periods.

So the number of subscribers will be $1200\times2^3=1200\times8=9600$.

So the channel will have $9600$ subscribers at the start of 2030, if the trend continues.

**Answer.** $9600$.
:::

:::exercise Challenge
A farmer has $100$ m of fencing to enclose a rectangular field. What is the largest area she can enclose?

::hint
**What you need:** if one side is $x$, the other is $50-x$; the area is a quadratic with its maximum at the vertex.

::solution
Let one side be $x$ m. The perimeter is $100$ m, so the other side is $50-x$ m, and the area is
$$A=x(50-x)=-x^2+50x.$$

This parabola opens downward, so its maximum is at the vertex $x=-\dfrac{50}{2(-1)}=25$. Then the other side is also $25$ m, and $A=25\times25=625$.

So the largest area is $625$ m², when the field is a square of side $25$ m.

**Answer.** $625$ m².
:::

:::quiz
::mc
If $y=3x+2$, what is $y$ when $x=5$?
A. $15$
B. $17$
C. $10$
D. $25$
::key B
$3(5)+2=17$.

::mc
A price increases by $10\%$ and then by another $10\%$. By what number is the original price multiplied?
A. $1.2$
B. $1.02$
C. $1.21$
D. $2.1$
::key C
$1.1\times1.1=1.21$.

::mc
How many minutes are there in $2.5$ hours?
A. $250$
B. $130$
C. $210$
D. $150$
::key D
$2.5\times60=150$.

::mc
Data that increase by the same percentage each year are best modeled by which kind of function?
A. Exponential
B. Linear
C. Quadratic
D. Constant
::key A
A constant ratio between consecutive values means an exponential model.

::tf
The cost of a taxi ride of $m$ minutes is $C=20+0.5m$ thousand đồng. Decide whether each statement is true or false.
a) The fixed charge is $20$ thousand đồng.
b) Each minute costs $0.5$ thousand đồng.
c) A $100$-minute ride costs $70$ thousand đồng.
d) Doubling the number of minutes doubles the cost.
::key T T T F
$C(100)=20+50=70$; because of the fixed charge, the cost is not proportional to $m$.

::sa
A tank holds $3000$ liters and fills at $50$ liters per minute. How many minutes does it take to fill?
::key 60
$\dfrac{3000}{50}=60$.

::sa
A business has fixed costs of $500$ dollars, a cost of $4$ dollars per item, and a price of $9$ dollars per item. How many items must it sell to break even?
::key 100
$\dfrac{500}{9-4}=100$.
:::
