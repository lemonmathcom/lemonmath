---
title: Derivatives in real-world problems
description: Set up a function for a real problem, find a maximum or minimum (area, volume, cost, profit) and compute velocity, acceleration and rates of change.
minutes: 22
---

:::goals
- Turn a real-life problem into finding the maximum or minimum of a function on a domain.
- Solve optimisation problems about area, volume, material, cost, profit and paths.
- Use derivatives to compute velocity, acceleration and the rate of change of a quantity.
- Give a complete answer with units, and check that the result is sensible.
:::

A workshop has to make sheet-metal tanks **with no lid**, with a square base, holding exactly $32$ dm³ (that is, $32$ litres). The less metal a tank uses, the cheaper it is. If the base is $2$ dm wide, the tank must be $8$ dm tall; if the base is $6$ dm wide, it needs to be less than $1$ dm tall. What base side should we choose to use the least metal?

"What is the best way to do it?" is a question for engineers, shopkeepers and gardeners alike: how to fence a garden with the least netting, how to price a product for the highest revenue, how fast to drive so that a trip costs least. The derivative turns these everyday questions into problems of finding maximum and minimum values, which we already know how to solve.

## Optimisation problems

### Explore: try a few sizes

Let the base side be $x$ (dm). The height is $h=\dfrac{32}{x^2}$, and the area of metal (the base and four sides) is
$$S(x)=x^2+4xh=x^2+\frac{128}{x}.$$

| $x$ (dm) | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|
| $S(x)$ (dm²) | $68$ | $\approx51.67$ | $48$ | $50.6$ | $\approx57.33$ |

A small base means tall sides, so a lot of metal goes on the sides; a large base uses a lot of metal on the bottom. The best value seems to be near $x=4$, but the table does not prove it. The derivative will give the exact answer.

**A closer look.** An optimisation problem usually has two opposite tendencies: here, a smaller base saves metal on the bottom but needs more metal on the sides. The best point is where the two tendencies "balance", that is, where the derivative is $0$. For example, at $x=4$ the bottom $x^2$ has derivative $2x=8$ and the sides $\dfrac{128}{x}$ have derivative $-\dfrac{128}{x^2}=-8$: widening the base a little adds exactly as much metal to the bottom as it saves on the sides.

**Connections.** This lesson uses maximum and minimum values (previous lesson) and the meaning of the derivative as a rate of change (grade 11): velocity, acceleration, the extra cost of one more product. In the next chapter, antiderivatives and integrals do the reverse: from a rate of change they recover the original quantity.

:::note Steps for an optimisation problem
1. **Choose the variable** (often a length, a quantity or a time) and state its **constraint**.
2. **Set up the function** giving the quantity to be maximised or minimised in terms of the variable.
3. **Find the maximum or minimum** of the function on the allowed domain (a table of variations, or comparing values on a closed interval).
4. **Conclude** in words, with units, and check that the result is sensible.
:::

:::example The tank that uses the least material
Find the base side and the height of the open tank with a square base and volume $32$ dm³ that uses the least area of metal.

**Solution.** Let $x$ (dm) be the base side of the tank ($x>0$). From the exploration, the area of metal needed is $S(x)=x^2+\dfrac{128}{x}$. Considering the function on $(0, +\infty)$, we have

$$S'(x)=2x-\frac{128}{x^2}=\frac{2(x^3-64)}{x^2},\qquad S'(x)=0\iff x^3=64\iff x=4.$$

Since $S'<0$ for $0<x<4$ and $S'>0$ for $x>4$, $S$ is smallest at $x=4$, with $S(4)=16+32=48$. Then $h=\dfrac{32}{16}=2$. We see that the volume is $4\cdot4\cdot2=32$ dm³, as required.

So the tank should have a $4\times4$ dm base and be $2$ dm tall; the least amount of metal is $48$ dm².
:::

:::graph Area of metal $S(x)=x^2+\dfrac{128}{x}$
alt: A graph for positive x, falling from very high to its lowest point (4, 48) and then rising
x: 0..10
y: 0..120
plot: x^2 + 128/x ; 1..10
point: (4, 48) "(4, 48)" below
:::

Business problems have the same shape, but the domain is often a closed interval, so both endpoints must be compared too.

:::example The largest profit
A company estimates that if it makes $x$ hundred products a month ($0\le x\le 15$), its profit is $P(x)=-x^3+9x^2+120x-200$ (million đồng). How many products a month should the company make so that its profit is largest?

**Solution.** We need the maximum value of the function $P$ on $[0, 15]$. We have

$$P'(x)=-3x^2+18x+120=-3(x-10)(x+4)=0\iff x=10\ \ (\text{reject } x=-4).$$

We have

$$P(0)=-200,\qquad P(10)=-1000+900+1200-200=900,\qquad P(15)=250.$$

So the company should make $1000$ products a month ($x=10$); the largest profit is $900$ million đồng.
:::

## Velocity, acceleration and rates of change

The derivative $f'(t_0)$ is the **instantaneous rate of change** of the quantity $f$ at time $t_0$. For an object moving along a straight line with distance $s(t)$:

- the velocity is $v(t)=s'(t)$;
- the acceleration is $a(t)=v'(t)=s''(t)$ (see the second derivative in grade 11).

:::example The greatest velocity
A test car runs along a straight track and has travelled $s(t)=-t^3+9t^2$ (metres) after $t$ seconds, $0\le t\le 6$. Find the acceleration at $t=1$ and the greatest velocity of the car.

**Solution.** We have

$$v(t)=s'(t)=-3t^2+18t,\qquad a(t)=v'(t)=-6t+18.$$

Hence $a(1)=12$ m/s². Considering the function $v$ on $[0, 6]$, we have $v'(t)=a(t)$ and

$$a(t)=0\iff t=3;\qquad v(0)=0,\quad v(3)=-27+54=27,\quad v(6)=-108+108=0.$$

We see that the greatest velocity occurs exactly when the acceleration is $0$: before that the car speeds up ($a>0$), and after it the car slows down ($a<0$).

So at $t=1$ the acceleration is $12$ m/s²; the greatest velocity is $27$ m/s, reached at $t=3$ seconds.
:::

Rates of change are not only for motion. The next example is about temperature.

:::example A cup of tea cools down
The temperature of a cup of tea after $t$ minutes is $T(t)=20+\dfrac{70}{1+0.1t}$ (°C). Find the starting temperature and the rate of change of the temperature at $t=10$ minutes.

**Solution.** We have $T(0)=20+70=90$ °C. Writing $T(t)=20+70(1+0.1t)^{-1}$, by the chain rule we have

$$T'(t)=-70\cdot0.1\cdot(1+0.1t)^{-2}=\frac{-7}{(1+0.1t)^2},\qquad T'(10)=\frac{-7}{2^2}=-1.75.$$

So the tea starts at $90$ °C; at $t=10$ minutes its temperature is falling at $1.75$ °C per minute (the minus sign means it is decreasing).
:::

## Shortest paths and least cost

This problem has a lot of data, so we solve it in four steps.

:::diagram A pipeline from the pumping station $A$ to the factory $F$
alt: A horizontal river bank through H, M and A; the factory F is 3 km above H; the pipeline runs along the bank from A to M, then straight from M to F
point H 0,0 below
point M 2.25,0 below
point A 8,0 below
point F 0,3 above
segment H A
segment A M
segment M F
segment H F dashed
right F H A
label -0.7,1.5 "3 km"
label 1.1,-0.6 "x"
label 5.1,-0.6 "8 − x"
:::

:::example The cheapest pipeline
A factory $F$ is $3$ km from a straight river bank, and $H$ is the point on the bank closest to $F$. A pumping station $A$ is on the bank, $8$ km from $H$. A pipe is laid along the bank from $A$ to a point $M$ on the segment $AH$, then straight from $M$ to $F$. Each km of pipe along the bank costs $3$ billion đồng, and each km of pipe over land from $M$ to $F$ costs $5$ billion đồng. Find the position of $M$ that makes the cost of the pipeline as small as possible.

**Solution.**

*Understand.* We must choose the position of $M$ on the segment $AH$, which is $8$ km long. The cost is made of two pieces of pipe with different prices, so the shortest pipeline is not necessarily the cheapest.

*Plan.* Let $HM=x$ (km), $0\le x\le 8$. Then $AM=8-x$ and, by Pythagoras' theorem, $MF=\sqrt{x^2+9}$. The cost of the pipeline is
$$C(x)=3(8-x)+5\sqrt{x^2+9}\ \ (\text{billion đồng}).$$
We find the minimum value of $C$ on $[0, 8]$.

*Solve.* We have (both sides are non-negative, so we may square)

$$C'(x)=-3+\frac{5x}{\sqrt{x^2+9}}=0\iff 5x=3\sqrt{x^2+9}\iff 25x^2=9x^2+81\iff x=\frac94.$$

For $x=\dfrac94=2.25$, we have $\sqrt{x^2+9}=\sqrt{14.0625}=3.75$, so $C(2.25)=3\cdot5.75+5\cdot3.75=36$. Also $C(0)=24+15=39$, $C(8)=5\sqrt{73}\approx42.72$.

So $M$ should be $2.25$ km from $H$ (that is, $5.75$ km from $A$); the least cost is $36$ billion đồng.

*Look back.* If the pumping station were further away, say $AH=12$ km, would the best point $M$ change? The equation $C'(x)=0$ does not involve the length $AH$, so we still get $x=\dfrac94$: the point $M$ is always $2.25$ km from $H$ (as long as $AH\ge 2.25$ km). The result is also sensible: laying the pipe straight from $A$ to $F$ ($x=8$) gives the shortest pipeline but the most expensive one, because all of the pipe is over land.
:::

:::warning Common mistakes
- **Forgetting the constraint on the variable.** Wrong: for a box made from a $60$ cm sheet by cutting squares of side $x$, solving $V'(x)=0$ gives $x=10$ and $x=30$, and both are kept. Why it is wrong: the box exists only if $0<x<30$. Right: keep only $x=10$.
- **Finding a critical point without checking whether it is a maximum or a minimum.** Wrong: "$S'(4)=0$, so $S(4)$ is the largest". Why it is wrong: $S'$ changes sign from $-$ to $+$ at $4$. Right: $S(4)$ is the smallest.
- **Ignoring the endpoints on a closed interval.** Wrong: concluding the largest profit without computing $P(0)$ and $P(15)$. Why it is wrong: the maximum can be at an endpoint. Right: compare all three values.
- **Answering without units or with the wrong quantity.** Wrong: "the answer is $x=10$" when the question asks for the number of products and $x$ counts hundreds. Why it is wrong: $x=10$ means $10$ hundred. Right: $1000$ products, with a profit of $900$ million đồng.
:::

## Key terms

:::terms
- optimisation problem | bài toán tối ưu
- objective function | hàm mục tiêu
- constraint on the variable | điều kiện của ẩn
- velocity | vận tốc
- acceleration | gia tốc
- instantaneous rate of change | tốc độ thay đổi tức thời
- cost | chi phí
- profit | lợi nhuận
- revenue | doanh thu
:::

## Summary

- Four steps: choose the variable and its constraint → set up the function → find the maximum or minimum on the domain → conclude with units.
- The domain is an open interval: use a table of variations. A closed interval: compare the values at the critical points and at both endpoints.
- Motion: $v(t)=s'(t)$, $a(t)=v'(t)=s''(t)$; the greatest velocity is usually reached when $a(t)=0$.
- $f'(t_0)$ is the instantaneous rate of change of $f$ at $t_0$; a minus sign means the quantity is decreasing.
- Always check the result: does it satisfy the constraint, and does it make sense in real life?

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
An object moves along a straight line and has travelled $s(t)=t^3-6t^2+9t$ (metres) after $t$ seconds. Find the times when the velocity is $0$, and the acceleration at those times.

::hint
**What you need:** $v(t)=s'(t)$, $a(t)=s''(t)$.

**Steps:**
1. Compute $v(t)$ and solve $v(t)=0$.
2. Compute $a(t)=6t-12$ at each root.

::solution
We have $v(t)=3t^2-12t+9=3(t-1)(t-3)=0\iff t=1$ or $t=3$. We have $a(t)=6t-12$, so $a(1)=-6$, $a(3)=6$.

So the velocity is $0$ at $t=1$ s and $t=3$ s.

**Answer.** $t=1$ s (acceleration $-6$ m/s²) and $t=3$ s (acceleration $6$ m/s²).
:::

:::exercise
Mr Hùng fences a rectangular garden of area $200$ m², with one side against an existing wall (which needs no fence). Find the dimensions that make the total length of fence as small as possible.

::hint
**What you need:** the steps for an optimisation problem; find the minimum on $(0, +\infty)$ with a variation table.

**Steps:**
1. Let $x$ be the side perpendicular to the wall; the side parallel to the wall is $\dfrac{200}{x}$.
2. The fence has length $L(x)=2x+\dfrac{200}{x}$; find its minimum.

::solution
We have $L'(x)=2-\dfrac{200}{x^2}=0\iff x=10$ (since $x>0$). Since $L'<0$ for $0<x<10$ and $L'>0$ for $x>10$, $L$ is smallest at $x=10$, with $L(10)=20+20=40$. Then the side parallel to the wall is $\dfrac{200}{10}=20$ m.

So the fence is shortest when the garden measures $10$ m by $20$ m.

**Answer.** The garden is $10$ m $\times$ $20$ m (the $20$ m side against the wall); the shortest fence is $40$ m.
:::

:::exercise
From a square sheet of card with side $60$ cm, four equal squares of side $x$ cm are cut from the corners and the sides are folded up to make an open box. Find $x$ to make the volume of the box as large as possible.

::hint
**What you need:** the box has a square base of side $60-2x$ and height $x$, with $0<x<30$.

**Steps:**
1. Set up $V(x)=x(60-2x)^2$.
2. Compute $V'(x)$, factorise it, and keep only the roots in $(0, 30)$.

::solution
We have $V'(x)=(60-2x)^2-4x(60-2x)=(60-2x)(60-6x)=12(x-30)(x-10)$. On the interval $(0, 30)$, $V'=0$ only at $x=10$. Since $V'>0$ for $0<x<10$ and $V'<0$ for $10<x<30$, $V$ is largest at $x=10$, with $V(10)=10\cdot40^2=16\,000$.

So the volume of the box is largest when $x=10$ cm.

**Answer.** $x=10$ cm; the largest volume is $16\,000$ cm³ ($16$ litres).
:::

:::exercise
The population of a town $t$ years after 2025 is estimated as $N(t)=\dfrac{26t+10}{t+5}$ (thousand people). Find the rate of population growth at $t=5$. In the long run, roughly how many thousand people does the population of the town approach?

::hint
**What you need:** the instantaneous rate of change is $N'(t)$; the long-run value is $\lim\limits_{t\to+\infty}N(t)$ (the horizontal asymptote).

**Steps:**
1. Compute $N'(t)$ with the quotient rule.
2. Substitute $t=5$ and compute the limit.

::solution
We have $N'(t)=\dfrac{26(t+5)-(26t+10)}{(t+5)^2}=\dfrac{120}{(t+5)^2}$, so $N'(5)=\dfrac{120}{100}=1.2$ thousand people per year. We have $\lim\limits_{t\to+\infty}N(t)=26$.

So at $t=5$ the population is growing at $1.2$ thousand people a year; in the long run it approaches $26$ thousand people.

**Answer.** It grows by $1.2$ thousand people a year (that is, $1200$ people a year); in the long run the population approaches $26$ thousand people.
:::

:::exercise
A hotel has $50$ rooms. At $400$ thousand đồng a night it is full; each increase of $20$ thousand đồng in the price leaves one more room empty. Let $x$ be the number of price increases ($0\le x\le 50$) and $R(x)$ the revenue per night (thousand đồng). Decide whether each statement is true or false.

a) $R(x)=(400+20x)(50-x)$.

b) The function $R$ is increasing on the interval $(0, 15)$.

c) The revenue is largest when the room price is $700$ thousand đồng.

d) The largest revenue per night is $24\,000\,000$ đồng.

::hint
**What you need:** revenue = price of one room $\times$ number of rooms let.

**Steps:**
1. Write the price and the number of rooms in terms of $x$.
2. Compute $R'(x)$ and find where $R'(x)=0$.
3. Compute the room price and the revenue at that point.

::solution
a) **True**. The room price is $400+20x$ and the number of rooms let is $50-x$.

b) **True**. We have $R(x)=-20x^2+600x+20\,000$ and $R'(x)=600-40x>0$ when $x<15$.

c) **True**. Since $R'$ changes sign from $+$ to $-$ at $x=15$, $R$ is largest at $x=15$; the room price is then $400+300=700$ thousand đồng.

d) **False**. We have $R(15)=700\cdot35=24\,500$ thousand đồng, that is $24\,500\,000$ đồng.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise
A cylindrical can with a lid has volume $1000$ cm³. Find the base radius $r$ (cm) that uses the least material (give your answer to 2 decimal places).

::hint
**What you need:** the volume $V=\pi r^2h$; the total surface area $S=2\pi r^2+2\pi rh$.

**Steps:**
1. From $\pi r^2h=1000$, write $h$ in terms of $r$ and set up $S(r)=2\pi r^2+\dfrac{2000}{r}$.
2. Solve $S'(r)=0$ and check the sign.

::solution
We have $S'(r)=4\pi r-\dfrac{2000}{r^2}=0\iff r^3=\dfrac{500}{\pi}\iff r=\sqrt[3]{\dfrac{500}{\pi}}\approx5.419$. Since $S'<0$ for $r$ below this value and $S'>0$ above it, $S$ reaches its minimum value there.

So the required base radius is $r\approx5.42$ cm.

**Answer.** $r\approx5.42$.
:::

:::exercise
During a flu outbreak, the number of people who have caught the illness by day $t$ is estimated as $f(t)=30t^2-t^3$ ($0\le t\le 20$). The rate of spread is $f'(t)$ (people per day). On which day is the rate of spread greatest? Find this greatest rate of spread.

::hint
**What you need:** find the maximum of $g(t)=f'(t)$ on $[0, 20]$.

**Steps:**
1. Compute $g(t)=f'(t)=60t-3t^2$.
2. Solve $g'(t)=0$ and compare with both endpoints.

::solution
We have $g'(t)=60-6t=0\iff t=10$, and $g(0)=0$, $g(10)=600-300=300$, $g(20)=1200-1200=0$.

So the rate of spread is greatest on day $10$, at $300$ people per day.

**Answer.** Day $10$; the greatest rate of spread is $300$ people per day.
:::

:::exercise
A lorry travels $300$ km at a constant speed $v$ (km/h), $40\le v\le 90$. Each hour of driving costs $500$ thousand đồng (wages, depreciation) plus $\dfrac{v^2}{5}$ thousand đồng of fuel. Find $v$ so that the total cost of the trip is as small as possible.

::hint
**What you need:** the driving time is $\dfrac{300}{v}$ hours; the total cost is the cost per hour times the time.

**Steps:**
1. Set up $C(v)=\dfrac{300}{v}\left(500+\dfrac{v^2}{5}\right)=\dfrac{150\,000}{v}+60v$.
2. Find its minimum on $[40, 90]$.

::solution
We have $C'(v)=-\dfrac{150\,000}{v^2}+60=0\iff v^2=2500\iff v=50$ (since $v>0$). We have $C(40)=3750+2400=6150$, $C(50)=3000+3000=6000$, $C(90)=\dfrac{5000}{3}+5400\approx7066.67$.

So the lorry should travel at $50$ km/h.

**Answer.** $v=50$ km/h; the least cost is $6000$ thousand đồng ($6$ million đồng).
:::

:::exercise Review
A metal sheet $30$ cm wide is folded into a gutter: the bottom is $10$ cm wide and each of the two sides is $10$ cm wide, each side tilted outwards at an angle $\theta$ to the vertical ($0\le\theta<\dfrac{\pi}{2}$). Find $\theta$ that makes the cross-section area of the gutter as large as possible.

::hint
**What you need:** the cross-section is a trapezium with height $10\cos\theta$, shorter base $10$ and longer base $10+20\sin\theta$; the derivatives of $\sin$ and $\cos$ and the formula $\cos2\theta=1-2\sin^2\theta$ (grade 11).

**Steps:**
1. Set up $A(\theta)=100\cos\theta(1+\sin\theta)$.
2. Compute $A'(\theta)$ and turn it into an equation in $\sin\theta$.
3. Compare with the value at $\theta=0$.

::solution
The cross-section is a trapezium, so $A=\dfrac{10+10+20\sin\theta}{2}\cdot10\cos\theta=100\cos\theta(1+\sin\theta)$. We have $A'(\theta)=100(\cos^2\theta-\sin\theta-\sin^2\theta)=100(1-\sin\theta-2\sin^2\theta)=-100(2\sin\theta-1)(\sin\theta+1)$. Hence $A'=0\iff\sin\theta=\dfrac12\iff\theta=\dfrac{\pi}{6}$; $A'>0$ before this point and $A'<0$ after it. We have $A\left(\dfrac{\pi}{6}\right)=100\cdot\dfrac{\sqrt3}{2}\cdot\dfrac32=75\sqrt3\approx129.9$, which is larger than $A(0)=100$.

So the cross-section area of the gutter is largest when $\theta=\dfrac{\pi}{6}$.

**Answer.** $\theta=\dfrac{\pi}{6}$ ($30^\circ$); the largest cross-section area is $75\sqrt3\approx129.9$ cm².
:::

:::exercise Challenge
A rectangular window is set inside a semicircular frame of radius $10$ dm, with one side of the window on the diameter. Find the dimensions of the window with the largest area.

::hint
**What you need:** if half the width of the window is $x$, its top corners lie on the semicircle, so its height is $\sqrt{100-x^2}$ (Pythagoras' theorem).

**Steps:**
1. Set up $S(x)=2x\sqrt{100-x^2}$ for $0<x<10$.
2. Compute $S'(x)$ and solve $S'(x)=0$.

::solution
$S'(x)=2\sqrt{100-x^2}-\dfrac{2x^2}{\sqrt{100-x^2}}=\dfrac{2(100-2x^2)}{\sqrt{100-x^2}}=0\iff x=5\sqrt2$. Since $S'>0$ for $x<5\sqrt2$ and $S'<0$ for $x>5\sqrt2$, $S$ is largest at $x=5\sqrt2$. Then the width is $2x=10\sqrt2$, the height is $\sqrt{100-50}=5\sqrt2$, and the area is $10\sqrt2\cdot5\sqrt2=100$.

So the window has the largest area when it is $10\sqrt2$ dm wide and $5\sqrt2$ dm tall.

**Answer.** The window is $10\sqrt2\approx14.14$ dm wide and $5\sqrt2\approx7.07$ dm tall; the largest area is $100$ dm².
:::

## Mini test

:::quiz
::mc
An object moves along a straight line and has travelled $s(t)=2t^3-3t^2+t$ (metres) after $t$ seconds. Its velocity at $t=2$ seconds is
A. $6$ m/s.
B. $13$ m/s.
C. $18$ m/s.
D. $37$ m/s.
::key B
We have $v(t)=s'(t)=6t^2-6t+1$, so $v(2)=24-12+1=13$. Option A is the distance $s(2)$, option C is the acceleration $a(2)=s''(2)$, and option D gets the sign of the term $-6t$ wrong.

::mc
A particle moves along a straight line with distance $s(t)=-t^3+6t^2$ (metres), $0\le t\le 5$ (seconds). Its velocity reaches its greatest value at
A. $t=5$.
B. $t=4$.
C. $t=0$.
D. $t=2$.
::key D
We have $v(t)=-3t^2+12t$ and $v'(t)=a(t)=-6t+12=0\iff t=2$. We have $v(0)=0$, $v(2)=12$, $v(5)=-15$. Option B is when $v(t)=0$, that is, when the particle stops.

::mc
The cost of making $x$ products is $C(x)=0.01x^2+20x+500$ (thousand đồng). The instantaneous rate of change of the cost with respect to the number of products at $x=100$ is
A. $21$ thousand đồng per product.
B. $2600$ thousand đồng per product.
C. $22$ thousand đồng per product.
D. $26$ thousand đồng per product.
::key C
We have $C'(x)=0.02x+20$, so $C'(100)=22$. Option B is $C(100)$, option A forgets the factor $2$ when differentiating $x^2$, and option D is the average cost $\dfrac{C(100)}{100}$.

::mc
$40$ m of fencing is used to go all the way round a rectangular garden of width $x$ (m). The area of the garden in terms of $x$ is
A. $S(x)=x(20-x)$.
B. $S(x)=x(40-x)$.
C. $S(x)=x(40-2x)$.
D. $S(x)=2x+2(20-x)$.
::key A
Since the perimeter is $2x+2y=40$, the length is $y=20-x$ and $S=x(20-x)$ with $0<x<20$. Option C is the case with fencing on only three sides, and option D is the perimeter, not the area.

::tf
A ball is thrown straight up; its height after $t$ seconds is $h(t)=2+20t-5t^2$ (metres). Decide whether each statement is true or false.
a) The velocity of the ball is $v(t)=20-10t$ (m/s).
b) The ball reaches its greatest height at $t=2$ seconds.
c) The greatest height of the ball is $20$ m.
d) The speed of the ball when it hits the ground is more than $20$ m/s.
::key T T F T
a) True: we have $v=h'(t)$. b) True: we have $v(t)=0\iff t=2$, and $v$ changes sign from $+$ to $-$ there. c) False: the greatest height is $h(2)=2+40-20=22$ m. d) True: $h(t)=0$ when $t=2+\dfrac{\sqrt{110}}{5}$, and then $v=-2\sqrt{110}\approx-20.98$, hence the speed is about $20.98$ m/s.

::sa
A piece of wire $2$ m long is cut into two parts: the first is bent into a square and the second into an equilateral triangle. To make the total area of the two shapes as small as possible, how long (in metres) should the part for the square be (give your answer to 2 decimal places)?
::key 0.87
Let $x$ (m) be the length of the part for the square. The total area is $S(x)=\dfrac{x^2}{16}+\dfrac{\sqrt3}{36}(2-x)^2$, $0\le x\le2$. We have $S'(x)=0\iff x=\dfrac{8\sqrt3}{4\sqrt3+9}\approx0.87$; the value there ($\approx0.109$) is less than $S(0)\approx0.192$ and $S(2)=0.25$. So the part for the square should be about $0.87$ m long.

::sa
A beam with a rectangular cross-section of width $b$ and height $h$ (cm) is cut from a cylindrical log of diameter $40$ cm, with the rectangle inscribed in the circle. The strength of the beam is proportional to $bh^2$. For the strongest beam, what is the width $b$ in centimetres (give your answer to 1 decimal place)?
::key 23.1
Since the diagonal of the cross-section is a diameter, $h^2=1600-b^2$. We need the maximum value of $f(b)=b(1600-b^2)$ on $(0, 40)$. We have $f'(b)=1600-3b^2=0\iff b=\dfrac{40}{\sqrt3}\approx23.09$, and $f'$ changes sign from $+$ to $-$ there. So $b\approx23.1$ cm.
:::
