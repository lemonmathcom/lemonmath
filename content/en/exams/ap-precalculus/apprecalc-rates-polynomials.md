---
title: Rates of change and polynomial functions
description: AP Precalculus Unit 1, part 1: average rates of change, concavity from tables, end behavior, zeros and multiplicity, building polynomials, finite differences.
minutes: 45
---

:::goals
- Calculate average rates of change from formulas, tables and graphs, and use them to describe how a function changes.
- Decide whether a function is concave up or concave down from its rates of change.
- Describe the end behavior of a polynomial from its leading term.
- Use zeros and their multiplicities to sketch polynomials and to build a polynomial from given information.
- Recognize a polynomial model from constant finite differences.
:::

AP Precalculus starts with a question that runs through the whole course: how fast is a quantity changing, and is that rate itself increasing or decreasing? Polynomials are the first family of functions studied this way. Much of the algebra will be familiar from the Vietnamese curriculum; the new part is describing behavior precisely in words, which the exam rewards in both the multiple-choice and the free-response sections.

## Average rate of change

The **average rate of change** of $f$ on $[a,b]$ is
$$\frac{f(b)-f(a)}{b-a},$$
the slope of the secant line through $\big(a,f(a)\big)$ and $\big(b,f(b)\big)$. Its units are output units per input unit.

:::example A rate from a formula
What is the average rate of change of $f(x)=x^3-2x$ on $[1,3]$?
A. $8$
B. $11$
C. $22$
D. $\dfrac{21}{2}$

**Solution.** We have $f(3)=27-6=21$ and $f(1)=1-2=-1$. So the average rate of change is
$$\frac{21-(-1)}{3-1}=\frac{22}{2}=11.$$

So the average rate of change is $11$, answer **B**. Option C forgets to divide by $3-1$.
:::

## Increasing rates and concavity

If, over consecutive equal intervals, the average rates of change **increase**, the graph is **concave up**; if they **decrease**, it is **concave down**. A function can be increasing and concave down at the same time: it is rising, but more and more slowly.

:::example Reading a table
The table gives values of a function $f$.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $f(x)$ | $2$ | $5$ | $6$ | $5.5$ |

Which statement is true on $[0,3]$?
A. $f$ is increasing and concave up.
B. $f$ is decreasing and concave down.
C. The average rates of change are decreasing, so the graph is concave down.
D. The average rates of change are increasing, so the graph is concave up.

**Solution.** The average rates of change on $[0,1]$, $[1,2]$ and $[2,3]$ are
$$5-2=3,\qquad6-5=1,\qquad5.5-6=-0.5.$$

These rates decrease from interval to interval, so the graph is concave down. The function increases at first and then decreases, so it is neither increasing nor decreasing on the whole interval.

So statement C is true, answer **C**.
:::

## End behavior of polynomials

For large $|x|$, a polynomial behaves like its **leading term** $a_nx^n$. If $n$ is even, both ends go the same way: up when $a_n>0$, down when $a_n<0$. If $n$ is odd, the ends go opposite ways. In limit notation, for example, $\displaystyle\lim_{x\to\infty}p(x)=-\infty$.

:::example End behavior
Which describes the end behavior of $p(x)=-2x^5+3x^2-1$?
A. $\displaystyle\lim_{x\to\infty}p(x)=-\infty$ and $\displaystyle\lim_{x\to-\infty}p(x)=\infty$
B. $\displaystyle\lim_{x\to\infty}p(x)=\infty$ and $\displaystyle\lim_{x\to-\infty}p(x)=-\infty$
C. Both limits are $-\infty$
D. Both limits are $\infty$

**Solution.** The leading term is $-2x^5$, with odd degree and a negative coefficient. For large positive $x$, $-2x^5$ is large and negative; for large negative $x$, $x^5$ is negative, so $-2x^5$ is large and positive.

So $p(x)\to-\infty$ as $x\to\infty$ and $p(x)\to\infty$ as $x\to-\infty$, answer **A**.
:::

## Zeros and multiplicity

If $(x-c)^m$ is a factor of $p$, then $c$ is a zero of **multiplicity** $m$. At a zero of odd multiplicity the graph **crosses** the $x$-axis; at a zero of even multiplicity it **touches** the axis and turns back. A polynomial of degree $n$ has at most $n$ real zeros and at most $n-1$ turning points.

:::graph The graph of $p(x)=(x-1)^2(x+3)$
alt: A cubic curve that crosses the x-axis at x = -3 and touches it at x = 1, with a local maximum between them
x: -3.5..2.5
y: -11..14
plot: (x-1)^2*(x+3)
point: (-3, 0) "-3" above-left
point: (1, 0) "1" below
:::

:::example Reading zeros from factors
For $p(x)=(x-1)^2(x+3)$, shown above, which statement is true?
A. The graph crosses the $x$-axis at $x=1$.
B. $p$ has three distinct real zeros.
C. The graph touches the $x$-axis at $x=1$ and crosses it at $x=-3$.
D. $p(x)<0$ for all $x>1$.

**Solution.** The factor $(x-1)^2$ gives a zero of multiplicity $2$ at $x=1$, so the graph touches the axis there. The factor $(x+3)$ gives a zero of multiplicity $1$ at $x=-3$, so the graph crosses there. There are only two distinct zeros, and for $x>1$ both factors are positive, so $p(x)>0$.

So statement C is true, answer **C**.
:::

:::example Building a polynomial
A polynomial $p$ of degree $3$ has zeros $-2$, $1$ and $4$, and $p(0)=16$. Find $p(x)$.

**Solution.** Since the zeros are $-2$, $1$ and $4$, we can write
$$p(x)=a(x+2)(x-1)(x-4)$$
for some constant $a$.

Substituting $x=0$: $p(0)=a(2)(-1)(-4)=8a$. Since $p(0)=16$, we get $8a=16$, so $a=2$.

So $p(x)=2(x+2)(x-1)(x-4)$.
:::

## Finite differences and polynomial models

For equally spaced inputs: if the first differences of the outputs are constant, a **linear** model fits; if the second differences are constant, a **quadratic** model fits; if the third differences are constant, a **cubic** model fits.

:::example Which model?
The outputs of a function for $x=0,1,2,3,4$ are $1, 4, 11, 22, 37$. Which type of polynomial fits these data exactly?
A. Linear
B. Cubic
C. Quartic
D. Quadratic

**Solution.** The first differences are $3, 7, 11, 15$, which are not constant. The second differences are $4, 4, 4$, which are constant.

So a quadratic model fits the data exactly, answer **D**.
:::

:::warning Common traps
- **Forgetting the denominator** $b-a$ in an average rate of change.
- **Increasing versus concave up:** a function can increase while its rate of change decreases.
- **End behavior from the wrong term:** only the leading term matters for large $|x|$.
- **Multiplicity:** even means touch, odd means cross; do not count a double zero twice when asked for distinct zeros.
- **Unequal input steps:** finite differences only work when the inputs are equally spaced.
:::

:::terms
- average rate of change | tốc độ thay đổi trung bình
- secant line | cát tuyến
- concave up / concave down | lõm lên / lõm xuống
- end behavior, leading term | dáng điệu ở vô cực, số hạng bậc cao nhất
- zero, multiplicity | nghiệm (không điểm), bội của nghiệm
- turning point | điểm đổi chiều
- finite differences | sai phân hữu hạn
- polynomial model | mô hình đa thức
:::

## Similar exercises

:::exercise
Find the average rate of change of $g(x)=\sqrt x$ on $[4,9]$.

::hint
**What you need:** $\dfrac{g(9)-g(4)}{9-4}$.

::solution
We have $g(9)=3$ and $g(4)=2$.

So the average rate of change is
$$\frac{3-2}{9-4}=\frac15.$$

So the average rate of change of $g$ on $[4,9]$ is $\dfrac15$.

**Answer.** $\dfrac15$.
:::

:::exercise
The values of a function $h$ at $x=0,2,4,6$ are $10, 11, 14, 19$. Is the graph of $h$ concave up or concave down on $[0,6]$? Explain.

::hint
**What you need:** compare the average rates of change over the three equal intervals.

::solution
The average rates of change on $[0,2]$, $[2,4]$ and $[4,6]$ are
$$\frac{11-10}{2}=0.5,\qquad\frac{14-11}{2}=1.5,\qquad\frac{19-14}{2}=2.5.$$

The rates increase from interval to interval.

So the graph of $h$ is concave up on $[0,6]$.

**Answer.** Concave up, because the average rates of change increase.
:::

:::exercise
Describe the end behavior of $q(x)=3x^4-x$.

::hint
**What you need:** the leading term $3x^4$ has even degree and a positive coefficient.

::solution
For large $|x|$, $q(x)$ behaves like $3x^4$. Since the degree $4$ is even and the coefficient $3$ is positive, $3x^4$ is large and positive at both ends.

So $\displaystyle\lim_{x\to\infty}q(x)=\infty$ and $\displaystyle\lim_{x\to-\infty}q(x)=\infty$.

**Answer.** Both ends go to $\infty$.
:::

:::exercise
Find the zeros of $f(x)=x^3-4x^2+4x$ and their multiplicities. Where does the graph cross the $x$-axis, and where does it only touch it?

::hint
**What you need:** factor out $x$, then recognize a perfect square.

::solution
Factoring, $f(x)=x\left(x^2-4x+4\right)=x(x-2)^2$.

So $x=0$ is a zero of multiplicity $1$ and $x=2$ is a zero of multiplicity $2$.

So the graph crosses the $x$-axis at $x=0$ and touches it at $x=2$.

**Answer.** $0$ (multiplicity $1$, crosses) and $2$ (multiplicity $2$, touches).
:::

:::exercise
A polynomial of degree $3$ has zeros $0$, $2$ and $-1$, and its graph passes through $(1,-4)$. Find the polynomial.

::hint
**What you need:** write $p(x)=ax(x-2)(x+1)$ and use the point to find $a$.

::solution
Since the zeros are $0$, $2$ and $-1$, we write $p(x)=ax(x-2)(x+1)$.

Substituting $x=1$: $p(1)=a(1)(-1)(2)=-2a$. Since $p(1)=-4$, we get $a=2$.

So $p(x)=2x(x-2)(x+1)$.

**Answer.** $p(x)=2x(x-2)(x+1)$.
:::

## Application exercises

:::exercise
The temperature of an oven, in degrees Celsius, is recorded after it is switched on.

| Time (min) | $0$ | $5$ | $10$ | $15$ |
|---|---|---|---|---|
| Temperature | $25$ | $105$ | $155$ | $180$ |

a) Find the average rate of change on each interval, with units.
b) Describe how the temperature is changing.

::hint
**What you need:** divide each change in temperature by $5$ minutes.

::solution
a) The average rates of change are
$$\frac{105-25}{5}=16,\qquad\frac{155-105}{5}=10,\qquad\frac{180-155}{5}=5$$
degrees Celsius per minute.

b) The temperature increases on every interval, but the rates decrease, so the graph is concave down.

So the oven heats up more and more slowly as it approaches its set temperature.

**Answer.** a) $16$, $10$ and $5$ degrees Celsius per minute; b) increasing at a decreasing rate.
:::

:::exercise
An open box is made from a $20$ cm by $20$ cm sheet by cutting squares of side $x$ cm from the corners. Its volume is $V(x)=x(20-2x)^2$.
a) What is the domain of $V$ in this context?
b) What is the degree of $V$, and what are its zeros?

::hint
**What you need:** the side $x$ must be positive and $20-2x$ must be positive.

::solution
a) The cut must have positive size, so $x>0$, and the base must have positive width, so $20-2x>0$, that is $x<10$. The domain is $0<x<10$.

b) Expanding the leading terms, $V(x)=4x^3-\dots$, so $V$ has degree $3$. Its zeros are $x=0$ and $x=10$ (a double zero).

So the domain is $0<x<10$, and $V$ is a cubic with zeros $0$ and $10$.

**Answer.** a) $0<x<10$; b) degree $3$, zeros $0$ and $10$.
:::

:::exercise
A function has values $2, 3, 10, 29, 66$ at $x=0,1,2,3,4$. Find the lowest degree of a polynomial that fits these data exactly.

::hint
**What you need:** compute successive differences until they are constant.

::solution
The first differences are $1, 7, 19, 37$; the second differences are $6, 12, 18$; the third differences are $6, 6$.

The third differences are constant.

So a polynomial of degree $3$ fits the data exactly.

**Answer.** Degree $3$.
:::

:::exercise Challenge
Solve the inequality $x^3-2x^2-5x+6>0$.

::hint
**What you need:** $x=1$ is a zero; factor and use a sign chart.

::solution
Since $1-2-5+6=0$, $(x-1)$ is a factor. Dividing, $x^3-2x^2-5x+6=(x-1)\left(x^2-x-6\right)=(x-1)(x+2)(x-3)$.

The zeros $-2$, $1$ and $3$ are all of multiplicity $1$, so the sign changes at each of them. For large $x$ the polynomial is positive, so it is positive on $(3,\infty)$, negative on $(1,3)$, positive on $(-2,1)$ and negative on $(-\infty,-2)$.

So the solution is $-2<x<1$ or $x>3$.

**Answer.** $-2<x<1$ or $x>3$.
:::

:::quiz
::mc
What is the average rate of change of $f(x)=x^3$ on $[0,2]$?
A. $8$
B. $2$
C. $6$
D. $4$
::key D
$\dfrac{8-0}{2-0}=4$.

::mc
What is the end behavior of $f(x)=-x^4+5x$?
A. Both ends go to $-\infty$
B. Both ends go to $\infty$
C. Left end $\infty$, right end $-\infty$
D. Left end $-\infty$, right end $\infty$
::key A
The leading term $-x^4$ has even degree and a negative coefficient.

::mc
At a zero of even multiplicity, the graph of a polynomial
A. crosses the $x$-axis
B. touches the $x$-axis and turns back
C. has a vertical asymptote
D. is undefined
::key B
Even multiplicity: the sign does not change, so the graph touches.

::mc
What is the greatest possible number of turning points of a polynomial of degree $5$?
A. $5$
B. $6$
C. $4$
D. $3$
::key C
A polynomial of degree $n$ has at most $n-1$ turning points.

::tf
Let $p(x)=x(x-3)^2$. Decide whether each statement is true or false.
a) The zeros of $p$ are $0$ and $3$.
b) $p$ has degree $3$.
c) The graph crosses the $x$-axis at $x=3$.
d) $p(x)\to\infty$ as $x\to\infty$.
::key T T F T
$3$ is a zero of multiplicity $2$, so the graph only touches there; the leading term is $x^3$.

::sa
Find the average rate of change of $f(x)=2x^2+1$ on $[1,3]$.
::key 8
$\dfrac{19-3}{2}=8$.

::sa
How many real zeros does $f(x)=x^3-x$ have?
::key 3
$x(x-1)(x+1)$ has zeros $-1$, $0$, $1$.
:::
