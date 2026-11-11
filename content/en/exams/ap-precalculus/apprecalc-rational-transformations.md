---
title: Rational functions, transformations and modelling
description: AP Precalculus Unit 1, part 2: holes and vertical asymptotes, end behavior of rational functions, transformations, and choosing function models.
minutes: 45
---

:::goals
- Find the zeros, holes, vertical asymptotes and end behavior of a rational function.
- Describe behavior near a vertical asymptote with limit notation.
- Apply transformations to graphs, points and formulas.
- Build and use simple models, including inverse proportion, and choose a suitable function type for a situation.
:::

Rational functions are quotients of polynomials, and they model situations in which one quantity shrinks as another grows: average cost, concentration, light intensity. The AP Precalculus exam asks you to read their key features from the formula, to describe what happens near the "breaks" in the graph, and to explain in context what an asymptote means. This lesson also covers transformations of graphs and the choice of a model, two ideas that appear throughout Units 1 to 3.

## Zeros, holes and vertical asymptotes

For $r(x)=\dfrac{p(x)}{q(x)}$, first **factor** the numerator and the denominator.

- A factor that cancels gives a **hole** in the graph.
- A zero of the denominator that does not cancel gives a **vertical asymptote**.
- A zero of the numerator that does not cancel gives a **zero** of $r$.

:::graph The graph of $r(x)=\dfrac{x^2-4}{x^2-x-2}$
alt: A hyperbola-like curve with a vertical asymptote at x = -1, a horizontal asymptote at y = 1, a zero at x = -2 and a hole at (2, 4/3)
x: -5..5
y: -4..6
plot: (x+2)/(x+1) ; -5..-1.2
plot: (x+2)/(x+1) ; -0.8..5
vline: -1 ; dashed
hline: 1 ; dashed
open: (2, 1.333) "(2, 4/3)" above-right
point: (-2, 0) "-2" below-left
:::

:::example Reading the features
Let $r(x)=\dfrac{x^2-4}{x^2-x-2}$. Which statement is true?
A. The graph has vertical asymptotes at $x=2$ and $x=-1$.
B. The graph has a hole at $x=2$ and a vertical asymptote at $x=-1$.
C. The graph has a zero at $x=2$.
D. The graph has no horizontal asymptote.

**Solution.** Factor the numerator and the denominator:
$$r(x)=\frac{(x-2)(x+2)}{(x-2)(x+1)}.$$

The factor $x-2$ cancels, so there is a hole at $x=2$; its $y$-value is $\dfrac{2+2}{2+1}=\dfrac43$. The factor $x+1$ remains in the denominator, so $x=-1$ is a vertical asymptote. The numerator and denominator have the same degree with leading coefficients $1$, so $y=1$ is a horizontal asymptote.

So statement B is true, answer **B**.
:::

## End behavior of rational functions

Compare the degrees of the numerator and the denominator:

| Degrees | End behavior |
|---|---|
| numerator $<$ denominator | horizontal asymptote $y=0$ |
| numerator $=$ denominator | horizontal asymptote $y=\dfrac{\text{leading coefficient of }p}{\text{leading coefficient of }q}$ |
| numerator $=$ denominator $+1$ | slant asymptote: a line found by division |
| numerator $>$ denominator $+1$ | behaves like a polynomial of degree (difference of degrees) |

Near a vertical asymptote $x=a$, the function grows without bound; we write, for example, $\displaystyle\lim_{x\to a^+}r(x)=\infty$.

:::example End behavior
Which rational function has the horizontal asymptote $y=\dfrac32$?
A. $\dfrac{3x+1}{2x^2-5}$
B. $\dfrac{3x^2+1}{2x-5}$
C. $\dfrac{3x^2-x}{2x^2+7}$
D. $\dfrac{2x^2}{3x^2+1}$

**Solution.** A horizontal asymptote other than $y=0$ needs equal degrees, which leaves options C and D. For C the ratio of leading coefficients is $\dfrac32$; for D it is $\dfrac23$. Option A has $y=0$, and option B has a slant asymptote.

So the function is $\dfrac{3x^2-x}{2x^2+7}$, answer **C**.
:::

:::example Near a vertical asymptote
For $r(x)=\dfrac{1}{x-3}$, which statement is true?
A. $\displaystyle\lim_{x\to3^+}r(x)=-\infty$
B. $\displaystyle\lim_{x\to3}r(x)=0$
C. $\displaystyle\lim_{x\to3^-}r(x)=\infty$
D. $\displaystyle\lim_{x\to3^+}r(x)=\infty$

**Solution.** When $x$ is slightly greater than $3$, $x-3$ is a small positive number, so $\dfrac{1}{x-3}$ is large and positive. When $x$ is slightly less than $3$, $x-3$ is small and negative, so $\dfrac{1}{x-3}$ is large and negative.

So $\displaystyle\lim_{x\to3^+}r(x)=\infty$, answer **D**.
:::

## Transformations

$g(x)=a\,f\big(b(x-h)\big)+k$ transforms the graph of $f$: a horizontal dilation by factor $\dfrac1{|b|}$, a horizontal translation by $h$, a vertical dilation by factor $|a|$, a vertical translation by $k$, and reflections when $a$ or $b$ is negative. A point $(x_0,y_0)$ on $f$ with $b=1$ moves to $(x_0+h,\ ay_0+k)$.

:::example Following a point
The point $(2,5)$ lies on the graph of $f$. Which point must lie on the graph of $g(x)=-2f(x-1)+3$?
A. $(1,-7)$
B. $(3,13)$
C. $(3,-7)$
D. $(1,13)$

**Solution.** The input of $f$ must be $2$, so $x-1=2$ and $x=3$.

Then $g(3)=-2f(2)+3=-2(5)+3=-7$.

So the point $(3,-7)$ lies on the graph of $g$, answer **C**. Options A and D shift left instead of right.
:::

## Building and choosing models

Choose the type of function from the way the quantity behaves: constant rate of change, linear; constant second differences or a single turning point, quadratic; one quantity inversely proportional to another, rational. Then use given data to find the parameters.

:::example Inverse square law
The intensity $I$ of light from a lamp is inversely proportional to the square of the distance $d$: $I=\dfrac{k}{d^2}$. The intensity is $200$ units at a distance of $2$ m. What is the intensity at $4$ m?
A. $100$ units
B. $25$ units
C. $50$ units
D. $400$ units

**Solution.** From $200=\dfrac{k}{2^2}$, we get $k=800$, so $I=\dfrac{800}{d^2}$.

At $d=4$: $I=\dfrac{800}{16}=50$.

So the intensity at $4$ m is $50$ units, answer **C**. Doubling the distance divides the intensity by $4$, not by $2$ as in option A.
:::

:::warning Common traps
- **Not factoring first:** a common factor gives a hole, not an asymptote.
- **Horizontal asymptote from the wrong terms:** compare only the leading terms.
- **Direction of a shift:** $f(x-1)$ moves the graph right.
- **Order inside a transformation:** for $f\big(b(x-h)\big)$ the dilation by $\dfrac1b$ comes with the shift $h$; rewrite $f(2x-6)$ as $f\big(2(x-3)\big)$.
- **Models outside their domain:** an average-cost model makes sense only for positive quantities.
:::

:::terms
- rational function | hàm phân thức
- hole (removable discontinuity) | điểm khuyết (gián đoạn bỏ được)
- vertical / horizontal asymptote | tiệm cận đứng / ngang
- slant asymptote | tiệm cận xiên
- dilation, translation, reflection | phép co giãn, phép tịnh tiến, phép đối xứng
- inversely proportional | tỉ lệ nghịch
- average cost | chi phí trung bình
- model | mô hình
:::

## Similar exercises

:::exercise
Find the hole and any vertical asymptotes of $f(x)=\dfrac{x^2-9}{x-3}$.

::hint
**What you need:** factor the numerator as a difference of squares.

::solution
Factoring, $f(x)=\dfrac{(x-3)(x+3)}{x-3}$. The factor $x-3$ cancels, so $f(x)=x+3$ for $x\ne3$.

Since the only zero of the denominator cancels, there is no vertical asymptote. There is a hole at $x=3$, at height $3+3=6$.

So the graph is the line $y=x+3$ with a hole at $(3,6)$.

**Answer.** Hole at $(3,6)$; no vertical asymptote.
:::

:::exercise
Find the horizontal asymptote of $g(x)=\dfrac{5x-1}{2x+3}$.

::hint
**What you need:** equal degrees: divide the leading coefficients.

::solution
The numerator and the denominator both have degree $1$, with leading coefficients $5$ and $2$.

So the horizontal asymptote is $y=\dfrac52$.

**Answer.** $y=\dfrac52$.
:::

:::exercise
Find the slant asymptote of $h(x)=\dfrac{x^2+1}{x}$.

::hint
**What you need:** divide each term of the numerator by $x$.

::solution
Dividing, $h(x)=x+\dfrac1x$.

As $x\to\pm\infty$, the term $\dfrac1x$ tends to $0$, so $h(x)$ gets closer and closer to $x$.

So the slant asymptote is the line $y=x$.

**Answer.** $y=x$.
:::

:::exercise
The graph of $f(x)=x^2$ is transformed to $g(x)=(x+2)^2-1$. Describe the transformation and give the vertex of $g$.

::hint
**What you need:** $f(x+2)$ shifts left; $-1$ shifts down.

::solution
Replacing $x$ by $x+2$ translates the graph $2$ units to the left, and subtracting $1$ translates it $1$ unit down.

The vertex $(0,0)$ of $f$ moves to $(-2,-1)$.

So $g$ is the graph of $f$ translated $2$ left and $1$ down, with vertex $(-2,-1)$.

**Answer.** Left $2$, down $1$; vertex $(-2,-1)$.
:::

:::exercise
The point $(6,4)$ lies on the graph of $f$. Which point lies on the graph of $g(x)=f(2x)$?

::hint
**What you need:** solve $2x=6$.

::solution
For $g(x)=f(2x)$ to use the value $f(6)$, we need $2x=6$, so $x=3$.

Then $g(3)=f(6)=4$.

So the point $(3,4)$ lies on the graph of $g$: a horizontal dilation by factor $\dfrac12$.

**Answer.** $(3,4)$.
:::

## Application exercises

:::exercise
A company's cost of producing $x$ items is $500+4x$ dollars, so the average cost per item is $A(x)=\dfrac{500+4x}{x}$.
a) Find the horizontal asymptote of $A$.
b) Interpret it in context.

::hint
**What you need:** equal degrees, or divide each term by $x$.

::solution
a) Dividing, $A(x)=\dfrac{500}{x}+4$. As $x\to\infty$, $\dfrac{500}{x}\to0$, so the horizontal asymptote is $y=4$.

b) The fixed cost of $500$ dollars is spread over more and more items, so the average cost approaches the cost of $4$ dollars for each extra item.

So the average cost per item approaches $4$ dollars as production increases.

**Answer.** $y=4$: the average cost tends to $4$ dollars per item.
:::

:::exercise
The concentration of a medicine in the blood, in mg/L, $t$ hours after an injection is $C(t)=\dfrac{5t}{t^2+1}$.
a) Find the concentration after $2$ hours.
b) What happens to the concentration in the long run? Explain using the degrees.

::hint
**What you need:** substitute $t=2$; compare the degrees of the numerator and the denominator.

::solution
a) $C(2)=\dfrac{10}{4+1}=2$ mg/L.

b) The numerator has degree $1$ and the denominator degree $2$, so $C(t)\to0$ as $t\to\infty$.

So the concentration is $2$ mg/L after $2$ hours and approaches $0$ in the long run, as the body removes the medicine.

**Answer.** a) $2$ mg/L; b) it tends to $0$.
:::

:::exercise
A rectangle has area $36$ m². Express its length $L$ as a function of its width $w$, and describe what happens to $L$ as $w$ becomes very small.

::hint
**What you need:** $Lw=36$.

::solution
From $Lw=36$, we get $L=\dfrac{36}{w}$ for $w>0$.

As $w\to0^+$, $L=\dfrac{36}{w}\to\infty$: the graph has a vertical asymptote at $w=0$.

So $L=\dfrac{36}{w}$, and a very narrow rectangle with area $36$ m² must be very long.

**Answer.** $L=\dfrac{36}{w}$; $L\to\infty$ as $w\to0^+$.
:::

:::exercise Challenge
Write a rational function with a vertical asymptote $x=2$, a horizontal asymptote $y=3$ and a zero at $x=1$.

::hint
**What you need:** put $x-2$ in the denominator, $x-1$ in the numerator, and choose the leading coefficient for the horizontal asymptote.

::solution
The zero at $x=1$ needs a factor $x-1$ in the numerator, and the vertical asymptote $x=2$ needs a factor $x-2$ in the denominator that does not cancel.

With numerator and denominator of degree $1$, the horizontal asymptote is the ratio of the leading coefficients, so we take $3$ in the numerator:
$$r(x)=\frac{3(x-1)}{x-2}.$$

Check: $r(1)=0$, the denominator is zero at $x=2$, and the ratio of leading coefficients is $3$.

So $r(x)=\dfrac{3(x-1)}{x-2}$ is one such function.

**Answer.** For example $r(x)=\dfrac{3(x-1)}{x-2}$.
:::

:::quiz
::mc
Where does the graph of $f(x)=\dfrac{x+1}{x^2-1}$ have a vertical asymptote?
A. $x=1$ and $x=-1$
B. $x=1$ only
C. $x=-1$ only
D. Nowhere
::key B
$\dfrac{x+1}{(x-1)(x+1)}$: the factor $x+1$ cancels (a hole at $x=-1$).

::mc
What is the horizontal asymptote of $\dfrac{4x^2}{2x^2+1}$?
A. $y=4$
B. $y=0$
C. $y=\dfrac12$
D. $y=2$
::key D
Equal degrees: $\dfrac42=2$.

::mc
How is the graph of $y=f(x+3)$ related to the graph of $y=f(x)$?
A. Shifted $3$ units left
B. Shifted $3$ units right
C. Shifted $3$ units up
D. Shifted $3$ units down
::key A
Adding inside the bracket shifts the graph left.

::mc
Which line is the slant asymptote of $\dfrac{x^3}{x^2+1}$?
A. $y=x^2$
B. $y=1$
C. $y=x$
D. $y=0$
::key C
$\dfrac{x^3}{x^2+1}=x-\dfrac{x}{x^2+1}$, and the last term tends to $0$.

::tf
Let $r(x)=\dfrac{x-2}{x+1}$. Decide whether each statement is true or false.
a) $r$ has a zero at $x=2$.
b) The graph has a vertical asymptote $x=-1$.
c) The graph has a horizontal asymptote $y=1$.
d) $r(0)=2$.
::key T T T F
$r(0)=\dfrac{-2}{1}=-2$.

::sa
The graph of $f(x)=\dfrac{x^2-1}{x-1}$ has a hole at $x=1$. Find the $y$-coordinate of the hole.
::key 2
For $x\ne1$, $f(x)=x+1$, which is $2$ at $x=1$.

::sa
Find the horizontal asymptote $y=c$ of $\dfrac{6x+1}{3x-2}$. Give $c$.
::key 2
$\dfrac63=2$.
:::
