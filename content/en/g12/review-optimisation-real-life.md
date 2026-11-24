---
title: "Revision: optimisation and real-life problems"
description: Revise setting up a function and using derivatives for optimisation, rates of change, motion, cost and profit, in graduation exam style.
minutes: 40
---

:::goals
- Turn a real-life problem into finding the maximum or minimum of a function on the correct domain.
- Use the derivative as a rate of change: velocity, acceleration, growth rate.
- Solve cost, revenue and profit problems, and route or installation problems with the least cost.
- Give answers with the right units and the requested rounding.
:::

Real-life problems are a speciality of the new exam format. They usually appear in Part III (short answer, with a single number in some unit), sometimes as a whole true/false question in Part II, and are usually worth about $1$ to $2$ marks altogether. The calculus is usually not hard; the hard part is **setting up the function** and **finding the right domain** for the variable.

The background is in the lessons on [maximum and minimum values](lesson:max-min-values) and [derivatives in real-life problems](lesson:derivative-real-problems).

## A method for optimisation problems

:::note Four steps
1. **Choose a variable** $x$ (a quantity that can vary), with its unit and its **constraints**.
2. **Write the function** to be optimised in terms of $x$ (use the conditions to eliminate other variables).
3. **Find the maximum or minimum** of the function on that domain: differentiate, compare with the endpoints or draw a table of variations.
4. **Answer the actual question**: does it ask for $x$, for the maximum value, or for another quantity?
:::

:::example Short answer: an open box
Four equal squares of side $x$ cm are cut from the corners of a square sheet of card of side $30$ cm, and the sides are folded up to make an open box. What is the greatest possible volume of the box, in cm³?

**Solution.** The base is a square of side $30-2x$ and the height is $x$, with $0<x<15$. The volume is

$$V(x)=x(30-2x)^2,\qquad V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x).$$

On $(0, 15)$, $30-2x>0$, so $V'$ has the sign of $30-6x$: positive for $x<5$, negative for $x>5$. So $V$ is greatest at $x=5$:

$$V(5)=5\cdot20^2=2000.$$

The greatest volume is $2000$ cm³ (cutting squares of side $5$ cm).
:::

## Rates of change and motion

:::note Remember
- If a quantity $Q$ depends on time $t$, then $Q'(t)$ is the **instantaneous rate of change** of $Q$ at time $t$.
- For motion in a straight line with displacement $s(t)$: velocity $v(t)=s'(t)$, acceleration $a(t)=v'(t)=s''(t)$.
- If velocity and acceleration have the same sign, the object is speeding up; if opposite signs, it is slowing down.
:::

Two questions that are often confused: "when is $Q$ greatest" (solve $Q'=0$) and "when is $Q$ **increasing fastest**" (find the maximum of $Q'$, that is, look at $Q''$).

:::example Multiple choice: increasing fastest
The number of bacteria in a culture after $t$ hours is $N(t)=1000+30t^2-t^3$, $0\le t\le20$. At what time is the number of bacteria increasing fastest?
A. $t=10$.
B. $t=20$.
C. $t=0$.
D. $t=15$.

**Solution.** The growth rate is $N'(t)=60t-3t^2$. We find the maximum of $N'$ on $[0, 20]$:

$$N''(t)=60-6t=0\iff t=10;\qquad N'(0)=0,\quad N'(10)=300,\quad N'(20)=0.$$

So the bacteria increase fastest at $t=10$ hours: the answer is **A**. Option B is when $N'(t)=0$, that is when the number of bacteria is **greatest**, not when it grows fastest.
:::

:::example True/false: motion in a straight line
An object moves in a straight line with displacement $s(t)=-t^3+9t^2$ (m), $t$ in seconds, $0\le t\le6$.
a) The velocity of the object at $t=2$ is $24$ m/s.
b) The greatest velocity of the object is $27$ m/s.
c) At $t=4$, the object is speeding up.
d) The distance travelled in the $6$ seconds is $108$ m.

**Solution.** We first find the velocity and acceleration:

$$v(t)=-3t^2+18t,\qquad a(t)=-6t+18.$$

a) **True**: $v(2)=-12+36=24$.

b) **True**: $v$ is a quadratic with coefficient $-3<0$, greatest at $t=3$ (where $a=0$): $v(3)=-27+54=27$.

c) **False**: $v(4)=24>0$ but $a(4)=-6<0$; opposite signs, so the object is slowing down.

d) **True**: $v(t)=3t(6-t)\ge0$ on $[0, 6]$, so the object never turns back, and the distance is $s(6)-s(0)=-216+324=108$.

Key: T T F T.
:::

## Cost, revenue and profit

:::note Remember
- Profit = revenue − cost: $P(x)=R(x)-C(x)$.
- Average cost per item: $\overline{C}(x)=\dfrac{C(x)}{x}$.
- The number of items $x$ is usually a whole number, but we treat $x$ as continuous on an interval and check the result.
:::

:::example Multiple choice: output for the greatest profit
A workshop makes $x$ items a day ($0\le x\le60$) and earns a profit of $P(x)=-x^3+45x^2+1200x$ (thousand đồng). How many items a day should it make to maximise profit?
A. $40$.
B. $15$.
C. $60$.
D. $10$.

**Solution.** We solve $P'(x)=0$ on $(0, 60)$ and compare with the two endpoints:

$$P'(x)=-3x^2+90x+1200=-3(x-40)(x+10)=0\iff x=40\ (\text{reject } x=-10).$$

$$P(0)=0,\qquad P(40)=56\,000,\qquad P(60)=18\,000.$$

So it should make $40$ items a day (a profit of $56$ million đồng): the answer is **A**. Option B is the root of $P''(x)=0$; D is the root with the sign changed; C is just an endpoint.
:::

## Route and installation problems

Here a point $M$ moves along a straight line; the distance or cost has a slanting part (use Pythagoras' theorem) and a straight part.

:::diagram Laying a cable from the power station $A$ to the island $C$
alt: A horizontal coastline with point B on the left and the power station A on the right, 8 km from B; the island C is above B, 3 km from the shore; the cable runs along the shore from A to M and then underwater from M to C
point B 0,0 below
point A 8,0 below
point C 0,3 above
point M 2.25,0 below
segment B A
segment C M
segment C B dashed
right C B A
label 1.1,-0.5 "x"
label -0.4,1.5 "3"
:::

:::example Short answer: the least installation cost
A power station $A$ stands on a straight coastline. An island $C$ is $3$ km from the shore, and the nearest point of the shore to the island is $B$, with $AB=8$ km. A cable is laid along the shore from $A$ to a point $M$ on $AB$, then underwater from $M$ to $C$. The cable costs $30$ million đồng per km on land and $50$ million đồng per km underwater. How far from $B$ should $M$ be to make the cost least, in km?

**Solution.** Let $BM=x$ (km), $0\le x\le8$. Then $MC=\sqrt{x^2+9}$, $AM=8-x$, and the cost (million đồng) is

$$T(x)=30(8-x)+50\sqrt{x^2+9},\qquad T'(x)=-30+\frac{50x}{\sqrt{x^2+9}}.$$

We solve $T'(x)=0$ (this needs $x>0$, so we may square):

$$5x=3\sqrt{x^2+9}\iff25x^2=9x^2+81\iff x^2=\frac{81}{16}\iff x=\frac94.$$

Comparing: $T(0)=390$, $T\left(\frac94\right)=172.5+187.5=360$, $T(8)=50\sqrt{73}\approx427$. So $M$ should be $2.25$ km from $B$, and the least cost is $360$ million đồng.
:::

:::warning Common mistakes
- **The wrong domain.** For the $30$ cm box, $x$ must be less than $15$; the root $x=15$ of $V'$ gives volume $0$.
- **Answering for the wrong quantity.** The question asks "how far from $B$" and the answer given is the cost $360$, or the other way round.
- **Confusing "greatest" with "increasing fastest".** Greatest: $Q'=0$. Increasing fastest: $Q'$ greatest.
- **Forgetting the endpoints.** The optimum may be at an endpoint, especially when the domain is limited by the situation.
- **Forgetting to convert units.** Minutes and hours, metres and kilometres, thousand đồng and million đồng.
:::

## Key terms

:::terms
- optimisation problem | bài toán tối ưu
- instantaneous rate of change | tốc độ thay đổi tức thời
- velocity / acceleration | vận tốc / gia tốc
- cost / revenue / profit | chi phí / doanh thu / lợi nhuận
- average cost | chi phí trung bình
- constraint on the variable | điều kiện của biến
- volume / total surface area | thể tích / diện tích toàn phần
- Pythagoras' theorem | định lí Pythagore
:::

## Exercises

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise Multiple choice
A rectangular garden has perimeter $40$ m. Its greatest possible area is
A. $100$ m².
B. $400$ m².
C. $96$ m².
D. $200$ m².

::hint
**What you need:** if one side is $x$, the other is $20-x$.

**Steps:**
1. Write $S(x)=x(20-x)$, $0<x<20$.
2. Solve $S'(x)=0$.

::solution
Let $x$ (m) be the length of one side of the garden, $0<x<20$. Since the perimeter is $40$ m, the semi-perimeter is $20$ m, so the other side is $20-x$ (m).

The area of the garden is
$$S(x)=x(20-x)=20x-x^2\quad(\text{m}^2),\ 0<x<20.$$

We have $S'(x)=20-2x$. Then
$$S'(x)=0\iff x=10\ (\text{satisfies the condition}).$$

Since $S'(x)>0$ for $0<x<10$ and $S'(x)<0$ for $10<x<20$, $S'$ changes from $+$ to $-$ at $x=10$. Hence $S$ attains its greatest value at $x=10$ and
$$S(10)=10\cdot(20-10)=100.$$

So the greatest area of the garden is $100$ m² (when the garden is a square of side $10$ m). So the answer is **A**.

*Remark.* Option B is $20^2$.

**Answer.** A.
:::

:::exercise Short answer
An object moves with $s(t)=t^3-3t^2+5t$ (m), $t$ in seconds. Find its velocity (m/s) at the moment when its acceleration is $0$.

::hint
**What you need:** $v=s'$, $a=v'$.

**Steps:**
1. Find $v(t)$ and $a(t)$.
2. Solve $a(t)=0$ and substitute into $v$.

::solution
Velocity is the derivative of displacement with respect to time, and acceleration is the derivative of velocity with respect to time. We have
$$v(t)=s'(t)=3t^2-6t+5,\qquad a(t)=v'(t)=6t-6.$$

The acceleration is $0$ when
$$6t-6=0\iff t=1\ (\text{seconds}),$$
which satisfies the condition $t\ge0$.

Substituting $t=1$ into $v(t)$, we get
$$v(1)=3\cdot1^2-6\cdot1+5=2.$$

So the velocity of the object at the moment when its acceleration is $0$ is $2$ m/s.

**Answer.** $2$.
:::

:::exercise Multiple choice
The total cost of making $x$ items is $C(x)=x^2+20x+900$ (thousand đồng), $x>0$. The least average cost per item is
A. $80$ thousand đồng.
B. $30$ thousand đồng.
C. $60$ thousand đồng.
D. $50$ thousand đồng.

::hint
**What you need:** the average cost is $\overline C(x)=x+20+\dfrac{900}{x}$.

**Steps:**
1. Solve $\overline C'(x)=1-\dfrac{900}{x^2}=0$.
2. Evaluate $\overline C$ at the positive root.

::solution
Condition: $x>0$. The average cost per item is
$$\overline C(x)=\frac{C(x)}{x}=\frac{x^2+20x+900}{x}=x+20+\frac{900}{x}\quad(\text{thousand đồng}),\ x>0.$$

We have
$$\overline C'(x)=1-\frac{900}{x^2}=\frac{x^2-900}{x^2}.$$

For $x>0$, $\overline C'(x)=0\iff x^2=900\iff x=30$.

Since $\overline C'(x)<0$ for $0<x<30$ and $\overline C'(x)>0$ for $x>30$, $\overline C'$ changes from $-$ to $+$ at $x=30$. Hence $\overline C$ attains its least value at $x=30$ and
$$\overline C(30)=30+20+\frac{900}{30}=30+20+30=80.$$

So the least average cost per item is $80$ thousand đồng (when $30$ items are made). So the answer is **A**.

*Remark.* Option B is the number of items $x$; option C leaves out the term $20$.

**Answer.** A.
:::

:::exercise Written answer
An open tank with a square base has volume $32$ dm³. Find its dimensions so that it uses the least material (the area of the base plus the four sides is least).

::hint
**What you need:** base side $x$, height $h=\dfrac{32}{x^2}$.

**Steps:**
1. Write $S(x)=x^2+4xh=x^2+\dfrac{128}{x}$, $x>0$.
2. Draw the table of variations on $(0, +\infty)$.

::solution
Let $x$ (dm) be the side of the base and $h$ (dm) the height of the tank, $x>0$, $h>0$.

The volume is $x^2h=32$, so $h=\dfrac{32}{x^2}$.

The tank has no lid, so the area of material is the area of the base plus the area of the four sides:
$$S(x)=x^2+4xh=x^2+4x\cdot\frac{32}{x^2}=x^2+\frac{128}{x}\quad(\text{dm}^2),\ x>0.$$

We have
$$S'(x)=2x-\frac{128}{x^2}=\frac{2\left(x^3-64\right)}{x^2}.$$

For $x>0$, $S'(x)=0\iff x^3=64\iff x=4$.

Since $S'(x)<0$ for $0<x<4$ and $S'(x)>0$ for $x>4$, $S$ attains its least value at $x=4$. Then
$$h=\frac{32}{4^2}=2,\qquad S(4)=16+\frac{128}{4}=16+32=48.$$

So the tank that uses the least material has a square base of side $4$ dm and height $2$ dm; the area of material is then $48$ dm².

**Answer.** Base side $4$ dm, height $2$ dm (material area $48$ dm²).
:::

:::exercise True/False
A shop sells shirts at $200$ thousand đồng each and sells $50$ a month; for every $1$ thousand đồng reduction in price it sells $1$ more shirt. Each shirt costs the shop $120$ thousand đồng. Let $x$ (thousand đồng) be the price reduction, $0\le x\le80$.

a) At a price of $190$ thousand đồng, the shop sells $60$ shirts a month.

b) The monthly profit is $P(x)=(80-x)(50+x)$ (thousand đồng).

c) The profit is greatest when the price is $170$ thousand đồng.

d) The greatest profit is $4225$ thousand đồng.

::hint
**What you need:** profit = (selling price − cost price) × quantity.

**Steps:**
1. Price $200-x$, profit per shirt $80-x$, quantity $50+x$.
2. Find the maximum of $P$ on $[0, 80]$.

::solution
Let $x$ (thousand đồng) be the price reduction, $0\le x\le80$. Then the selling price of a shirt is $200-x$ (thousand đồng) and the number of shirts sold per month is $50+x$.

a) **True.** A price of $190$ thousand đồng means a reduction of $x=200-190=10$ thousand đồng, so the shop sells $50+10=60$ shirts a month.

b) **True.** The profit on each shirt is $(200-x)-120=80-x$ (thousand đồng). Multiplying by the number of shirts sold, $50+x$, the monthly profit is
$$P(x)=(80-x)(50+x)=-x^2+30x+4000\quad(\text{thousand đồng}).$$

c) **False.** We have $P'(x)=30-2x$, so $P'(x)=0\iff x=15$ (which satisfies $0\le x\le80$). The price is then $200-15=185$ thousand đồng, not $170$ thousand đồng. Indeed, a price of $170$ thousand đồng corresponds to $x=30$ and $P(30)=50\cdot80=4000<P(15)$.

d) **True.** Since $P'(x)>0$ for $0\le x<15$ and $P'(x)<0$ for $15<x\le80$, $P$ is greatest at $x=15$. We have
$$P(15)=65\cdot65=4225,$$
which is more than $P(0)=4000$ and $P(80)=0$. So the greatest profit is $4225$ thousand đồng.

So statements a), b), d) are true; statement c) is false.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise Short answer
A ball is thrown straight up; its height after $t$ seconds is $h(t)=1.5+19.6t-4.9t^2$ (m). Find the greatest height of the ball, in metres.

::hint
**What you need:** the height is greatest when the velocity $h'(t)=0$.

**Steps:**
1. Solve $h'(t)=19.6-9.8t=0$.
2. Substitute into $h(t)$.

::solution
The height of the ball is $h(t)=1.5+19.6t-4.9t^2$ (m), $t\ge0$. We have
$$h'(t)=19.6-9.8t.$$

Then $h'(t)=0\iff t=2$ (seconds), which satisfies the condition $t\ge0$.

Since $h'(t)>0$ for $0\le t<2$ and $h'(t)<0$ for $t>2$, $h'$ changes from $+$ to $-$ at $t=2$. Hence $h$ attains its greatest value at $t=2$ and
$$h(2)=1.5+19.6\cdot2-4.9\cdot2^2=1.5+39.2-19.6=21.1.$$

So the greatest height of the ball is $21.1$ m.

**Answer.** $21.1$.
:::

:::exercise Multiple choice
A cylindrical can has volume $16\pi$ cm³. To use the least material (least total surface area), the radius of its base must be
A. $2$ cm.
B. $4$ cm.
C. $8$ cm.
D. $1$ cm.

::hint
**What you need:** $V=\pi r^2h$, total surface area $S=2\pi r^2+2\pi rh$.

**Steps:**
1. Substitute $h=\dfrac{16}{r^2}$ to get $S(r)=2\pi r^2+\dfrac{32\pi}{r}$.
2. Solve $S'(r)=0$.

::solution
Let $r$ (cm) be the radius of the base and $h$ (cm) the height of the can, $r>0$, $h>0$.

The volume of the can is $\pi r^2h=16\pi$, so $h=\dfrac{16}{r^2}$.

The total surface area of the can is
$$S(r)=2\pi r^2+2\pi rh=2\pi r^2+2\pi r\cdot\frac{16}{r^2}=2\pi r^2+\frac{32\pi}{r}\quad(\text{cm}^2),\ r>0.$$

We have
$$S'(r)=4\pi r-\frac{32\pi}{r^2}=\frac{4\pi\left(r^3-8\right)}{r^2}.$$

For $r>0$, $S'(r)=0\iff r^3=8\iff r=2$.

Since $S'(r)<0$ for $0<r<2$ and $S'(r)>0$ for $r>2$, $S'$ changes from $-$ to $+$ at $r=2$. Hence $S$ attains its least value at $r=2$; then $h=\dfrac{16}{2^2}=4$.

So, to use the least material, the radius of the base must be $2$ cm. So the answer is **A**.

*Remark.* Option B is the height $h=4$ cm; option C is $r^3=8$.

**Answer.** A.
:::

:::exercise Short answer
A person at point $A$ on a lake is $4$ km from a straight shore ($B$ is the point of the shore nearest to $A$). They want to reach point $C$ on the shore with $BC=10$ km: they row at $3$ km/h to a point $M$ on $BC$, then walk at $5$ km/h to $C$. How far from $B$ should $M$ be to make the time least, in km?

::hint
**What you need:** time = distance ÷ speed; $AM=\sqrt{x^2+16}$ with $x=BM$.

**Steps:**
1. Write $T(x)=\dfrac{\sqrt{x^2+16}}{3}+\dfrac{10-x}{5}$, $0\le x\le10$.
2. Solve $T'(x)=0$ and compare with the two endpoints.

::solution
Put $BM=x$ (km), $0\le x\le10$. Then $MC=10-x$ (km).

Triangle $ABM$ is right-angled at $B$ with $AB=4$ km, so $AM=\sqrt{x^2+16}$ (km).

The time spent rowing from $A$ to $M$ is $\dfrac{\sqrt{x^2+16}}{3}$ (hours) and the time spent walking from $M$ to $C$ is $\dfrac{10-x}{5}$ (hours). The total time is
$$T(x)=\frac{\sqrt{x^2+16}}{3}+\frac{10-x}{5},\ 0\le x\le10.$$

We have
$$T'(x)=\frac{x}{3\sqrt{x^2+16}}-\frac15.$$

For $x\ge0$,
$$\begin{aligned}T'(x)=0&\iff5x=3\sqrt{x^2+16}\\&\iff25x^2=9x^2+144\\&\iff16x^2=144\\&\iff x=3\end{aligned}$$
(both sides are non-negative, so squaring gives an equivalent equation; $x=3$ satisfies $0\le x\le10$).

The function $T$ is continuous on the interval $[0, 10]$, so its least value is the smallest of the values at the two endpoints and at $x=3$:
$$T(0)=\frac43+2=\frac{10}{3}\approx3.33,\qquad T(3)=\frac53+\frac75=\frac{46}{15}\approx3.07,\qquad T(10)=\frac{\sqrt{116}}{3}\approx3.59\ (\text{hours}).$$

The least value is $T(3)$.

So the time is least when $M$ is $3$ km from $B$ (about $3.07$ hours).

**Answer.** $3$.
:::

:::exercise True/False
Four squares of side $x$ cm are cut from the corners of a $16$ cm × $10$ cm rectangular sheet of card, which is then folded into an open box.

a) The constraint on $x$ is $0<x<5$.

b) The volume of the box is $V(x)=x(16-x)(10-x)$.

c) The volume is greatest when $x=\dfrac{20}{3}$.

d) The greatest volume of the box is $144$ cm³.

::hint
**What you need:** the base of the box measures $(16-2x)$ by $(10-2x)$.

**Steps:**
1. Write $V(x)$ and find $V'(x)$.
2. Keep only the roots inside the domain of $x$.

::solution
Cutting four squares of side $x$ cm from the corners and folding up, we obtain an open box of height $x$ cm. Each side of the sheet loses two squares, so the base is a rectangle with sides $16-2x$ and $10-2x$ (cm).

a) **True.** To make the box we need $x>0$, $16-2x>0$ and $10-2x>0$, that is $x>0$, $x<8$ and $x<5$. Combining these, the constraint on $x$ is $0<x<5$.

b) **False.** Since the sides of the base are $16-2x$ and $10-2x$, the volume of the box is
$$V(x)=x(16-2x)(10-2x)=4x^3-52x^2+160x,$$
not $x(16-x)(10-x)$.

c) **False.** We have
$$V'(x)=12x^2-104x+160=4(x-2)(3x-20).$$
Hence $V'(x)=0\iff x=2$ or $x=\dfrac{20}{3}$. Since $\dfrac{20}{3}\approx6.67$ is not in the interval $(0, 5)$, we keep only $x=2$. So the volume is not greatest at $x=\dfrac{20}{3}$.

d) **True.** On the interval $(0, 5)$, $V'(x)>0$ for $0<x<2$ and $V'(x)<0$ for $2<x<5$, so $V'$ changes from $+$ to $-$ at $x=2$. Hence $V$ attains its greatest value at $x=2$ and
$$V(2)=2\cdot(16-4)\cdot(10-4)=2\cdot12\cdot6=144\ (\text{cm}^3).$$

So statements a), d) are true; statements b), c) are false.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise Challenge
A metal sheet $30$ cm wide is folded into a gutter: a base $10$ cm wide and two sides $10$ cm wide, each making an angle $\theta$ with the horizontal, $0<\theta\le\dfrac{\pi}{2}$ (the cross-section is an isosceles trapezium). Find $\theta$ so that the cross-sectional area is greatest, and find that area to 1 decimal place.

::hint
**What you need:** area of a trapezium $=\dfrac{(\text{sum of the parallel sides})\cdot\text{height}}{2}$; $\cos2\theta=2\cos^2\theta-1$.

**Steps:**
1. The height is $10\sin\theta$ and the top is $10+20\cos\theta$, so $A(\theta)=100\sin\theta(1+\cos\theta)$.
2. Find $A'(\theta)$ and factorise it in terms of $\cos\theta$.

::solution
The cross-section is an isosceles trapezium whose shorter base is $10$ cm and whose two legs are $10$ cm, each leg making an angle $\theta$ with the horizontal.

The height of the trapezium is $10\sin\theta$ (cm). The horizontal projection of each leg is $10\cos\theta$ (cm), so the longer base is $10+2\cdot10\cos\theta=10+20\cos\theta$ (cm).

The cross-sectional area is
$$A(\theta)=\frac{10+(10+20\cos\theta)}{2}\cdot10\sin\theta=100\sin\theta(1+\cos\theta)\quad(\text{cm}^2),\ 0<\theta\le\frac{\pi}{2}.$$

We have
$$A'(\theta)=100\left(\cos\theta+\cos^2\theta-\sin^2\theta\right)=100\left(2\cos^2\theta+\cos\theta-1\right)=100(2\cos\theta-1)(\cos\theta+1).$$

On $\left(0, \dfrac{\pi}{2}\right]$, $\cos\theta+1>0$, so
$$A'(\theta)=0\iff\cos\theta=\frac12\iff\theta=\frac{\pi}{3}\ (\text{satisfies the condition}).$$

For $0<\theta<\dfrac{\pi}{3}$ we have $\cos\theta>\dfrac12$, so $A'(\theta)>0$; for $\dfrac{\pi}{3}<\theta\le\dfrac{\pi}{2}$ we have $\cos\theta<\dfrac12$, so $A'(\theta)<0$. Hence $A'$ changes from $+$ to $-$ at $\theta=\dfrac{\pi}{3}$ and $A$ is greatest there:
$$A\left(\frac{\pi}{3}\right)=100\cdot\frac{\sqrt3}{2}\cdot\left(1+\frac12\right)=100\cdot\frac{\sqrt3}{2}\cdot\frac32=75\sqrt3\approx129.9.$$

So the cross-sectional area is greatest when $\theta=\dfrac{\pi}{3}$ ($60^\circ$), and that greatest area is $75\sqrt3\approx129.9$ cm².

**Answer.** $\theta=\dfrac{\pi}{3}$ ($60^\circ$), with greatest area $75\sqrt3\approx129.9$ cm².
:::

## Mini test

:::quiz
::mc VD
Two positive numbers add up to $12$. The greatest possible product is
A. $36$.
B. $6$.
C. $144$.
D. $72$.
::key A
The product is $P(x)=x(12-x)$, $P'(x)=12-2x=0\iff x=6$, $P(6)=36$. Option B is the value of each number, C is $12^2$.

::mc TH
An object moves with $s(t)=t^3-3t^2+4t$ (m). Its acceleration at $t=2$ seconds is
A. $8$ m/s².
B. $4$ m/s².
C. $6$ m/s².
D. $0$ m/s².
::key C
$v(t)=3t^2-6t+4$, $a(t)=6t-6$, $a(2)=6$. Option B is the velocity $v(2)$; D is the acceleration at $t=1$.

::mc VD
The total cost of making $x$ items is $C(x)=2x^2+50x+800$ (thousand đồng). How many items should be made to minimise the average cost per item?
A. $10$.
B. $20$.
C. $400$.
D. $40$.
::key B
$\overline C(x)=2x+50+\dfrac{800}{x}$, $\overline C'(x)=2-\dfrac{800}{x^2}=0\iff x^2=400\iff x=20$. Option C is $x^2$.

::mc TH
$N(t)$ is the number of users of an app (thousands) after $t$ months, and $N'(5)=12$. Which statement is correct?
A. After $5$ months, the number of users has increased by $12$ thousand in total.
B. At $5$ months, the number of users is increasing at about $12$ thousand per month.
C. Over the first $5$ months, users increased by $12$ thousand per month on average.
D. After $5$ months there are $12$ thousand users.
::key B
The derivative is the instantaneous rate of change at one moment. D confuses it with $N(5)$, C with the average rate, A with the total change.

::tf TH TH VD TH
Mr Ba uses $120$ m of fencing for three sides of a rectangular plot; the fourth side is a river bank and needs no fence. Let $x$ (m) be the length of each side perpendicular to the river.
a) The constraint on $x$ is $0<x<60$.
b) The area of the plot is $S(x)=x(120-2x)$.
c) The area is greatest when $x=30$.
d) The greatest area is $3600$ m².
::key T T T F
a) True: the side parallel to the river is $120-2x>0$. b) True. c) True: $S'(x)=120-4x=0\iff x=30$, and $S'$ changes from $+$ to $-$. d) False: $S(30)=30\cdot60=1800$ m².

::sa TH
A ball is thrown upwards with height $h(t)=2+14.7t-4.9t^2$ (m) after $t$ seconds. After how many seconds does the ball reach its greatest height?
::key 1.5
$h'(t)=14.7-9.8t=0\iff t=1.5$, and $h'$ changes from $+$ to $-$.

::sa VD
Four squares of side $x$ cm are cut from the corners of a square sheet of side $12$ cm, which is then folded into an open box. What is the greatest volume of the box, in cm³?
::key 128
$V(x)=x(12-2x)^2$, $0<x<6$; $V'(x)=(12-2x)(12-6x)=0\iff x=2$. $V(2)=2\cdot8^2=128$.
:::
