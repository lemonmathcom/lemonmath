---
title: Function models
description: IB Maths AI: linear, quadratic, exponential and sinusoidal models, choosing a model from data with the GDC, interpreting parameters and domains.
minutes: 50
---

:::goals
- Build linear, quadratic, exponential and sinusoidal models from a description or from data.
- Choose a suitable model by looking at differences, ratios and graphs, and fit it with the GDC.
- Interpret the parameters of a model in context and state a sensible domain.
- Use a model to make predictions, and say when it stops being reliable.
:::

A ball is kicked from the ground and rises, slows, and falls back. A cup of tea cools quickly at first, then more and more slowly. The number of daylight hours rises through spring and falls through autumn, year after year. Each of these has its own shape, and if you can name the shape, you can predict what happens next.

That is what a **model** is: a function chosen because its shape matches the situation. In IB Maths AI you will rarely be told "use a quadratic". More often you are given a situation or a table and asked to decide. So this lesson is about recognising shapes, fitting them, and then asking honestly whether the answer makes sense.

## Four shapes worth knowing

| Model | Form | Recognise it by |
|---|---|---|
| Linear | $f(x)=mx+c$ | equal differences: the same amount added each step |
| Quadratic | $f(x)=ax^2+bx+c$ | rises then falls (or the reverse); equal second differences |
| Exponential | $f(x)=ka^x+c$ | equal ratios: multiplied by the same factor each step; levels off towards $y=c$ |
| Sinusoidal | $f(x)=a\sin\big(b(x-c)\big)+d$ | repeats in cycles |

The parameters always mean something. In a linear model, $m$ is the rate of change and $c$ the starting value. In an exponential model, $k$ is the initial difference from the long-term value $c$, and $a$ is the growth or decay factor. In a sinusoidal model, $|a|$ is the amplitude, $d$ the principal axis (the middle value), and the period is $\dfrac{360^\circ}{b}$ in degrees or $\dfrac{2\pi}{b}$ in radians.

:::example A taxi fare
A taxi charges a fixed $3$ dollars plus $1.20$ dollars per kilometre. Write a model for the fare $F$ for a trip of $d$ km, interpret the parameters, and find the fare for $12$ km.

**Solution.** The same amount is added for every kilometre, so the model is linear: $F(d)=1.2d+3$.

The gradient $1.2$ is the cost in dollars of each extra kilometre, and the intercept $3$ is the fixed charge before the taxi moves.

For $12$ km, $F(12)=1.2(12)+3=17.40$ dollars.

So $F(d)=1.2d+3$, and a $12$ km trip costs $17.40$ dollars.
:::

## Quadratic models

A quadratic has a **vertex**, a highest or lowest point, at $x=-\dfrac{b}{2a}$. In context the vertex is often the answer to "how high?" or "what is the best value?", and the zeros mark where the model starts or stops making sense.

:::graph Height of the ball, $h(t)=1.5+20t-4.9t^2$
alt: A downward parabola starting at height 1.5 metres, reaching a maximum of about 21.9 metres at t about 2.04 seconds and returning to the ground at about 4.16 seconds
x: 0..4.5
y: 0..25
shape: free
plot: 1.5+20*x-4.9*x^2 ; 0..4.16
point: (2.04, 21.9) "max" above
point: (4.16, 0) "lands" above
:::

:::example How high does the ball go?
A ball is kicked so that its height in metres after $t$ seconds is $h(t)=1.5+20t-4.9t^2$. What is the maximum height, and when does the ball land?
A. $21.9$ m; after $4.16$ s
B. $20.0$ m; after $4.08$ s
C. $21.9$ m; after $2.04$ s
D. $1.5$ m; after $4.16$ s

**Solution.** The vertex is at $t=-\dfrac{20}{2(-4.9)}\approx2.04$ s, where $h\approx1.5+20(2.04)-4.9(2.04)^2\approx21.9$ m.

The ball lands when $h(t)=0$. The GDC gives the positive solution $t\approx4.16$ s; the negative solution has no meaning here.

So the maximum height is about $21.9$ m and the ball lands after about $4.16$ s, answer **A**. Option C gives the time of the maximum, not the landing time. A sensible domain for this model is $0\le t\le4.16$.
:::

## Exponential models

Exponential models describe growth and decay by a constant factor. With a constant $c$ added, they level off towards the **horizontal asymptote** $y=c$, as a hot drink levels off at room temperature.

:::example Recognising a model from data
A table gives $y=3,\ 6,\ 12,\ 24,\ 48$ for $x=0,\ 1,\ 2,\ 3,\ 4$. Which model fits the data exactly?
A. $y=3x+3$
B. $y=3\cdot2^x$
C. $y=3x^2+3$
D. $y=2\cdot3^x$

**Solution.** The differences $3,\ 6,\ 12,\ 24$ are not equal, so the model is not linear. The ratios $\dfrac63=\dfrac{12}{6}=\dfrac{24}{12}=\dfrac{48}{24}=2$ are equal, so the model is exponential with factor $2$.

At $x=0$ the value is $3$, so $y=3\cdot2^x$. An exponential regression on the GDC gives the same result.

So the model is $y=3\cdot2^x$, answer **B**.
:::

## Sinusoidal models

When a quantity repeats, find the maximum and minimum first. The principal axis is halfway between them, the amplitude is half the distance between them, and the period comes from the context. Many AI questions use degrees, so check your calculator's mode.

:::example Hours of daylight
In a city, the number of hours of daylight $t$ months after the start of the year is modelled by $D(t)=12.2+2.8\cos\big(30(t-6)\big)$, with the angle in degrees. What is the greatest number of hours of daylight, and when does it occur?

**Solution.** The cosine is at most $1$, which happens when $30(t-6)=0$, that is $t=6$.

Then $D(6)=12.2+2.8=15.0$ hours. The period is $\dfrac{360}{30}=12$ months, as it should be for a year.

So the longest day has $15.0$ hours of daylight, $6$ months after the start of the year, in the middle of the year.
:::

:::warning Common traps
- **Fitting without looking:** check differences, ratios or the shape of a scatter plot before choosing a regression.
- **Meaningless solutions:** reject negative times or lengths, and state a sensible domain.
- **Extrapolating:** a model that fits from $0$ to $5$ hours may be nonsense at $50$ hours.
- **Degrees or radians:** use the mode the question uses.
- **Parameters without context:** say what $m$, $k$ or $a$ means, with units.
:::

:::terms
- model | mô hình
- linear / quadratic / exponential model | mô hình bậc nhất / bậc hai / hàm mũ
- sinusoidal model | mô hình dạng sin
- gradient / intercept | hệ số góc / tung độ gốc
- vertex | đỉnh
- horizontal asymptote | tiệm cận ngang
- amplitude / period / principal axis | biên độ / chu kì / trục chính
- regression | hồi quy
- domain | tập xác định
:::

## Similar exercises

:::exercise
A phone plan costs $25$ dollars for $2$ GB of data and $37$ dollars for $6$ GB. Assuming a linear model, write the cost $C$ in terms of the data $g$ (in GB), and interpret the gradient.

::hint
**What you need:** gradient $=\dfrac{37-25}{6-2}$.

::solution
The gradient is $\dfrac{37-25}{6-2}=\dfrac{12}{4}=3$, so $C=3g+c$. Substituting $(2,\ 25)$ gives $25=6+c$, so $c=19$.

The model is $C=3g+19$: each extra gigabyte costs $3$ dollars, on top of a fixed $19$ dollars.

So $C=3g+19$, and the gradient is the cost per gigabyte.

**Answer.** $C=3g+19$; $3$ dollars per GB.
:::

:::exercise
A small company's monthly profit, in thousands of dollars, when it makes $x$ hundred items is $P(x)=-2x^2+40x-150$. Find the number of items that gives the greatest profit, and that profit.

::hint
**What you need:** the vertex is at $x=-\dfrac{b}{2a}$.

::solution
The vertex is at $x=-\dfrac{40}{2(-2)}=10$, that is $1000$ items.

The profit there is $P(10)=-200+400-150=50$ thousand dollars.

So making $1000$ items gives the greatest profit, $50$ thousand dollars.

**Answer.** $1000$ items; $50$ thousand dollars.
:::

:::exercise
A culture has $500$ bacteria at $t=0$ and $4000$ after $3$ hours. Assuming exponential growth $N=500a^t$, find $a$ and predict $N$ after $5$ hours.

::hint
**What you need:** $500a^3=4000$.

::solution
From $500a^3=4000$ we get $a^3=8$, so $a=2$: the number doubles every hour.

After $5$ hours, $N=500(2)^5=16\,000$.

So $a=2$ and the model predicts $16\,000$ bacteria after $5$ hours.

**Answer.** $a=2$; $16\,000$.
:::

:::exercise
For $y=4\sin(30x)+10$, with $x$ in degrees, state the amplitude, the period, the principal axis, and the maximum and minimum values.

::hint
**What you need:** amplitude $|a|$, period $\dfrac{360}{b}$, axis $y=d$.

::solution
Here $a=4$, $b=30$ and $d=10$.

The amplitude is $4$, the period is $\dfrac{360}{30}=12$, and the principal axis is $y=10$. The values therefore range from $10-4=6$ to $10+4=14$.

So the amplitude is $4$, the period $12$, the axis $y=10$, the maximum $14$ and the minimum $6$.

**Answer.** $4$; $12$; $y=10$; $14$ and $6$.
:::

:::exercise
A scatter plot of the yield of a crop against the amount of fertiliser shows yield rising, reaching a peak and then falling. Which model would you try first, and why?

::hint
**What you need:** which shape rises and then falls?

::solution
The data rise to a highest point and then fall, which is the shape of a parabola opening downwards.

So a quadratic model $y=ax^2+bx+c$ with $a<0$ is the natural first choice; a linear or exponential model cannot turn around.

**Answer.** A quadratic model with $a<0$.
:::

## Applied exercises

:::exercise
A cup of tea cools according to $T=20+60(0.9)^t$, where $T$ is in degrees Celsius and $t$ in minutes.
a) Find the temperature after $10$ minutes.
b) How long does it take to cool to $35^\circ$C?
c) What temperature does the tea approach in the long run?

::hint
**What you need:** solve $0.9^t=0.25$ with logarithms or the GDC.

::solution
a) $T(10)=20+60(0.9)^{10}\approx40.9^\circ$C.

b) Setting $T=35$ gives $60(0.9)^t=15$, so $0.9^t=0.25$ and $t=\dfrac{\ln0.25}{\ln0.9}\approx13.2$ minutes.

c) As $t$ grows, $0.9^t$ approaches $0$, so $T$ approaches $20^\circ$C, the temperature of the room.

So the tea is about $40.9^\circ$C after $10$ minutes, reaches $35^\circ$C after about $13.2$ minutes, and levels off at $20^\circ$C.

**Answer.** a) $40.9^\circ$C; b) $13.2$ minutes; c) $20^\circ$C.
:::

:::exercise
For the ball with $h(t)=1.5+20t-4.9t^2$, for how long is the ball higher than $15$ m?

::hint
**What you need:** solve $4.9t^2-20t+13.5=0$.

::solution
Setting $h(t)=15$ gives $4.9t^2-20t+13.5=0$. The GDC, or the quadratic formula, gives $t\approx0.853$ s and $t\approx3.23$ s.

The ball is above $15$ m between these times, for $3.228-0.853\approx2.37$ s.

So the ball is higher than $15$ m for about $2.37$ seconds.

**Answer.** About $2.37$ s.
:::

:::exercise
Plan A costs $C=3g+19$ dollars for $g$ GB of data; plan B costs a flat $35$ dollars. For which amounts of data is plan A cheaper?

::hint
**What you need:** solve $3g+19<35$.

::solution
Plan A is cheaper when $3g+19<35$, that is $3g<16$, so $g<\dfrac{16}{3}\approx5.33$.

So plan A is cheaper for less than about $5.33$ GB a month; above that, plan B is cheaper.

**Answer.** For $g<5.33$ GB.
:::

:::exercise Challenge
A patient takes $200$ mg of a medicine, and $15\%$ of the amount in the body is removed each hour. After how many whole hours is there less than $50$ mg left?

::hint
**What you need:** solve $200(0.85)^t<50$.

::solution
The amount after $t$ hours is $200(0.85)^t$, so we need $0.85^t<0.25$, that is $t>\dfrac{\ln0.25}{\ln0.85}\approx8.53$.

Checking whole hours: after $8$ hours, $200(0.85)^8\approx54.5$ mg; after $9$ hours, $200(0.85)^9\approx46.3$ mg.

So less than $50$ mg remains after $9$ hours.

**Answer.** $9$ hours.
:::

:::quiz
::mc
A quantity is multiplied by $1.08$ every year. Which model fits?
A. Linear
B. Quadratic
C. Sinusoidal
D. Exponential
::key D
A constant factor each step is exponential growth.

::mc
In the model $C=0.15m+12$ for a phone bill, where $m$ is minutes used, $12$ represents
A. the fixed charge
B. the cost per minute
C. the number of minutes
D. the maximum bill
::key A
It is the cost when $m=0$.

::mc
The function $y=-(x-3)^2+7$ has
A. a minimum $7$ at $x=3$
B. a maximum $3$ at $x=7$
C. a maximum $7$ at $x=3$
D. a minimum $-7$ at $x=-3$
::key C
The vertex is $(3,\ 7)$ and the parabola opens downwards.

::mc
The model $T=20+60(0.9)^t$ has horizontal asymptote
A. $T=60$
B. $T=20$
C. $T=80$
D. $T=0.9$
::key B
$60(0.9)^t\to0$, so $T\to20$.

::tf
Consider $y=3\cos(30x)+5$, with $x$ in degrees. Decide whether each statement is true or false.
a) The amplitude is $3$.
b) The period is $12$.
c) The minimum value is $2$.
d) The maximum value is $9$.
::key T T T F
The maximum is $5+3=8$.

::sa
For $y=2.5x+4$, find $y$ when $x=6$.
::key 19
$2.5(6)+4=19$.

::sa
A sinusoidal model has maximum $18$ and minimum $6$. Find its amplitude.
::key 6
$\dfrac{18-6}{2}=6$.
:::
