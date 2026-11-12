---
title: Applied calculus
description: IB Maths AI: derivatives as rates of change, tangents, increasing and decreasing functions, optimisation, integration, areas and the trapezoidal rule.
minutes: 50
---

:::goals
- Differentiate $ax^n$ and sums of such terms, and interpret the derivative as a rate of change.
- Find the equation of a tangent, decide where a function is increasing or decreasing, and find stationary points.
- Solve optimisation problems in context.
- Integrate polynomials, find areas with definite integrals, and estimate areas with the trapezoidal rule.
:::

A farmer has $100$ m of fencing and wants to fence a rectangular field against a long wall, so only three sides need fencing. How wide should the field be to give the most grass for the sheep? You could try many widths and see which works best. Calculus finds the best width in two lines, and tells you why it is the best.

That is the spirit of calculus in IB Maths AI: it is a tool for change and for "best" answers. A derivative tells you how fast something is changing; setting it equal to zero finds the highest or lowest point. An integral adds up small pieces to find a total, like an area or a distance. You will use the GDC often, but understanding what each step means is what earns the marks.

## The derivative as a rate of change

For $f(x)=ax^n$, the derivative is $f'(x)=anx^{n-1}$, and sums are differentiated term by term. The derivative $f'(x)$, also written $\dfrac{dy}{dx}$, is the **gradient** of the curve and the **rate of change** of $y$ with respect to $x$, in units of $y$ per unit of $x$.

The **tangent** at $x=a$ has gradient $f'(a)$ and passes through $\big(a,f(a)\big)$. The **normal** is perpendicular to it, with gradient $-\dfrac{1}{f'(a)}$.

:::example A tangent line
Find the equation of the tangent to $f(x)=x^2-3x+2$ at $x=4$.

**Solution.** The point on the curve is $\big(4,f(4)\big)=(4,6)$, since $16-12+2=6$.

The derivative is $f'(x)=2x-3$, so the gradient at $x=4$ is $f'(4)=5$.

The tangent is $y-6=5(x-4)$, that is $y=5x-14$.
:::

## Increasing, decreasing and stationary points

A function is **increasing** where $f'(x)>0$ and **decreasing** where $f'(x)<0$. At a **stationary point** $f'(x)=0$; it is a local maximum if $f'$ changes from positive to negative, and a local minimum if it changes from negative to positive. The GDC can confirm both the point and its type from the graph.

Why should the derivative be zero at a highest point? Just before the top, the curve is still climbing, so its gradient is positive. Just after the top, it is falling, so its gradient is negative. To go from positive to negative, the gradient must pass through zero, and it does so exactly at the top. The same reasoning, turned upside down, explains a lowest point. That is why "set the derivative equal to zero" is the first step in almost every optimisation question.

:::graph The area of the farmer's field, $A(x)=100x-2x^2$
alt: A downward parabola from x = 0 to x = 50 with its highest point at x = 25, where the area is 1250 square metres and the tangent is horizontal
x: 0..50
y: 0..1400
shape: free
plot: 100*x-2*x^2 ; 0..50
hline: 1250 ; dashed
point: (25, 1250) "max" above
:::

## Optimisation

To find the best value of a quantity:

1. Write the quantity as a function of **one** variable, using the information given.
2. Differentiate and solve $f'(x)=0$.
3. Check it is a maximum or minimum, and that the value makes sense in context.
4. Answer the question that was asked, with units.

:::example The farmer's field
The farmer fences three sides of a rectangle against a wall with $100$ m of fencing. Find the greatest possible area.
A. $1250\text{ m}^2$
B. $625\text{ m}^2$
C. $2500\text{ m}^2$
D. $1000\text{ m}^2$

**Solution.** Let the two sides perpendicular to the wall be $x$ m each. The side parallel to the wall is then $100-2x$ m, and the area is
$$A(x)=x(100-2x)=100x-2x^2.$$

Differentiating, $A'(x)=100-4x$, which is zero when $x=25$. Since $A'$ changes from positive to negative there, this is a maximum.

So the greatest area is $A(25)=25\times50=1250\text{ m}^2$, answer **A**. Option C assumes a square of side $50$ m, which would need $150$ m of fencing.
:::

## Integration and area

Integration reverses differentiation:
$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C\quad(n\ne-1).$$
The **definite integral** $\displaystyle\int_a^bf(x)\,dx$ gives the area between the curve and the $x$-axis from $x=a$ to $x=b$, when the curve is above the axis. The GDC evaluates definite integrals directly; write the integral you are evaluating as your working.

When only data are known, the **trapezoidal rule** estimates the area with strips of width $h$:
$$\int_a^by\,dx\approx\frac h2\Big(y_0+y_n+2\big(y_1+y_2+\dots+y_{n-1}\big)\Big).$$

:::example An area under a curve
Find the area enclosed by $y=-x^2+4x$ and the $x$-axis.

**Solution.** The curve meets the axis where $-x^2+4x=x(4-x)=0$, at $x=0$ and $x=4$, and it is above the axis in between.

So the area is
$$\int_0^4(-x^2+4x)\,dx=\left[-\frac{x^3}{3}+2x^2\right]_0^4=-\frac{64}{3}+32=\frac{32}{3}\approx10.7.$$

The area is $\dfrac{32}{3}\approx10.7$ square units.
:::

:::example A river's cross-section
The depth of a river is measured every $2$ m across its $8$ m width: $0,\ 1.2,\ 1.8,\ 1.5,\ 0$ m. Use the trapezoidal rule to estimate the area of the cross-section.
A. $4.5\text{ m}^2$
B. $9.0\text{ m}^2$
C. $18.0\text{ m}^2$
D. $10.8\text{ m}^2$

**Solution.** The strip width is $h=2$, the end values are $0$ and $0$, and the inner values are $1.2$, $1.8$ and $1.5$.

So the area is approximately
$$\frac22\Big(0+0+2(1.2+1.8+1.5)\Big)=1\times9.0=9.0\text{ m}^2.$$

The estimate is $9.0\text{ m}^2$, answer **B**. Option A forgets to double the inner values.
:::

:::warning Common traps
- **Units of a rate:** the derivative of distance in metres with respect to time in seconds is in metres per second.
- **Optimise the right function:** write it in terms of one variable before differentiating.
- **Answer the question:** if asked for the area, do not stop at $x=25$.
- **Trapezoidal rule:** count the strips correctly; $n$ strips need $n+1$ values.
- **Area below the axis:** an integral there is negative; take the absolute value for area.
:::

:::terms
- derivative / gradient | đạo hàm / hệ số góc
- rate of change | tốc độ thay đổi
- tangent / normal | tiếp tuyến / pháp tuyến
- increasing / decreasing | đồng biến / nghịch biến
- stationary point | điểm dừng
- local maximum / minimum | cực đại / cực tiểu
- optimisation | tối ưu hoá
- definite integral | tích phân xác định
- trapezoidal rule | quy tắc hình thang
:::

## Similar exercises

:::exercise
For $f(x)=4x^3-2x+7$, find $f'(x)$ and $f'(2)$.

::hint
**What you need:** differentiate each term with $ax^n\to anx^{n-1}$.

::solution
We use $ax^n\to anx^{n-1}$ on each term: $4x^3$ gives $12x^2$ and $-2x$ gives $-2$, so $f'(x)=12x^2-2$; the constant $7$ has derivative $0$.

Then $f'(2)=12(4)-2=46$.

So $f'(x)=12x^2-2$ and $f'(2)=46$.

**Answer.** $f'(x)=12x^2-2$; $46$.
:::

:::exercise
Find the equation of the tangent to $y=3x^2-x$ at $x=1$.

::hint
**What you need:** the point $(1,y(1))$ and the gradient $y'(1)$.

::solution
At $x=1$, $y=3-1=2$, so the point is $(1,2)$. The derivative is $y'=6x-1$, so the gradient is $5$.

The tangent is $y-2=5(x-1)$, that is $y=5x-3$.

So the tangent is $y=5x-3$.

**Answer.** $y=5x-3$.
:::

:::exercise
Find the stationary points of $f(x)=x^3-6x^2+9x+1$ and their nature.

::hint
**What you need:** $f'(x)=3x^2-12x+9=3(x-1)(x-3)$.

::solution
Setting $f'(x)=3(x-1)(x-3)=0$ gives $x=1$ or $x=3$, with $f(1)=5$ and $f(3)=1$.

$f'$ is positive for $x<1$, negative for $1<x<3$ and positive for $x>3$. So $(1,5)$ is a local maximum and $(3,1)$ is a local minimum.

So the stationary points are a maximum at $(1,5)$ and a minimum at $(3,1)$.

**Answer.** Maximum $(1,5)$; minimum $(3,1)$.
:::

:::exercise
Find $\displaystyle\int(6x^2-4x+1)\,dx$.

::hint
**What you need:** $\int ax^n\,dx=\dfrac{a}{n+1}x^{n+1}+C$.

::solution
Each term is integrated separately, raising the power by $1$ and dividing by the new power: $\int6x^2\,dx=2x^3$, $\int-4x\,dx=-2x^2$ and $\int1\,dx=x$.

So $\displaystyle\int(6x^2-4x+1)\,dx=2x^3-2x^2+x+C$.

**Answer.** $2x^3-2x^2+x+C$.
:::

:::exercise
Evaluate $\displaystyle\int_1^3 2x\,dx$ and interpret it as an area.

::hint
**What you need:** an antiderivative of $2x$ is $x^2$.

::solution
An antiderivative of $2x$ is $x^2$, so $\displaystyle\int_1^32x\,dx=3^2-1^2=8$.

Since $y=2x$ is above the $x$-axis for $1\le x\le3$, this is the area under the line between $x=1$ and $x=3$, a trapezium with parallel sides $2$ and $6$ and width $2$.

So the integral equals $8$, the area of that trapezium.

**Answer.** $8$.
:::

## Applied exercises

:::exercise
The cost, in dollars, of producing each item when $x$ items are made per day is $C(x)=0.02x^2-4x+500$. Find the number of items that minimises the cost per item, and that minimum cost.

::hint
**What you need:** solve $C'(x)=0$.

::solution
Differentiating, $C'(x)=0.04x-4$, which is zero when $x=100$. $C'$ changes from negative to positive there, so it is a minimum.

The minimum cost is $C(100)=0.02(10{,}000)-400+500=300$ dollars.

So making $100$ items a day gives the lowest cost per item, $300$ dollars.

**Answer.** $100$ items; $300$ dollars.
:::

:::exercise
A car's speed is recorded every $10$ seconds: $0,\ 8,\ 12,\ 14$ m/s at $t=0,\ 10,\ 20,\ 30$ s. Use the trapezoidal rule to estimate the distance travelled in $30$ s.

::hint
**What you need:** distance is the area under the speed–time graph; $h=10$.

::solution
The distance is the area under the speed–time graph. With $h=10$, end values $0$ and $14$, and inner values $8$ and $12$:
$$\frac{10}{2}\Big(0+14+2(8+12)\Big)=5\times54=270.$$

So the car travels about $270$ m.

**Answer.** About $270$ m.
:::

:::exercise
A population is modelled by $P(t)=200+30t-t^2$, where $t$ is in years. When is the population decreasing?

::hint
**What you need:** solve $P'(t)<0$.

::solution
The rate of change is $P'(t)=30-2t$.

The population decreases when $P'(t)<0$, that is $30-2t<0$, so $t>15$.

So, according to the model, the population decreases after $15$ years.

**Answer.** For $t>15$.
:::

:::exercise Challenge
A closed cylindrical can must hold $500\text{ cm}^3$. Find the radius that uses the least metal, and the minimum surface area.

::hint
**What you need:** $\pi r^2h=500$ gives $h=\dfrac{500}{\pi r^2}$, so $S=2\pi r^2+\dfrac{1000}{r}$.

::solution
The surface area is $S=2\pi r^2+2\pi rh$. Using $h=\dfrac{500}{\pi r^2}$, it becomes $S(r)=2\pi r^2+\dfrac{1000}{r}$, a function of $r$ only.

Then $S'(r)=4\pi r-\dfrac{1000}{r^2}=0$ gives $r^3=\dfrac{1000}{4\pi}$, so $r\approx4.30$ cm, and $h=\dfrac{500}{\pi r^2}\approx8.60$ cm.

So the minimum surface area is $S\approx348.7\approx349\text{ cm}^2$. Notice that $h=2r$: the best can is as tall as it is wide.

**Answer.** $r\approx4.30$ cm; $S\approx349\text{ cm}^2$.
:::

:::quiz
::mc
The derivative of $5x^2$ is
A. $5x$
B. $10x^2$
C. $10x$
D. $\dfrac53x^3$
::key C
$5\times2x^{1}=10x$.

::mc
At a stationary point of $f$,
A. $f'(x)=0$
B. $f(x)=0$
C. $f'(x)>0$
D. the function is undefined
::key A
The gradient is zero.

::mc
Which estimates an area from data values at equal intervals?
A. The cosine rule
B. The trapezoidal rule
C. The chain rule
D. Spearman's rank coefficient
::key B
Trapezia approximate the area.

::mc
$\displaystyle\int3x^2\,dx$ equals
A. $6x+C$
B. $3x^3+C$
C. $x^2+C$
D. $x^3+C$
::key D
$\dfrac{3}{3}x^3=x^3$.

::tf
Consider $f(x)=x^2-4x$. Decide whether each statement is true or false.
a) $f'(x)=2x-4$.
b) There is a stationary point at $x=2$.
c) The minimum value of $f$ is $-4$.
d) $f$ is increasing for $x<2$.
::key T T T F
$f'(x)<0$ for $x<2$, so $f$ is decreasing there.

::sa
For $f(x)=x^3$, find $f'(3)$.
::key 27
$3(3)^2=27$.

::sa
Evaluate $\displaystyle\int_0^23x^2\,dx$.
::key 8
$2^3-0=8$.
:::
