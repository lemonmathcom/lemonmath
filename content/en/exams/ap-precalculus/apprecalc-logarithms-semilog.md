---
title: Logarithms, inverses and semi-log models
description: AP Precalculus Unit 2, part 2: inverse functions, logarithm rules, logarithmic graphs, exponential and log equations, and semi-log plots.
minutes: 50
---

:::goals
- Find and interpret inverse functions, and see logarithms as inverses of exponentials.
- Evaluate logarithms and use the product, quotient and power rules.
- Sketch logarithmic graphs: domain, vertical asymptote, intercepts and transformations.
- Solve exponential and logarithmic equations, rejecting values outside the domain.
- Read a semi-log plot and turn a linear relation in $\log y$ into an exponential model.
:::

Logarithms answer the question exponentials ask in reverse: "to what power?" In AP Precalculus they appear in three ways: as inverse functions, as tools for solving equations where the unknown sits in an exponent, and as the scale behind semi-log plots. This lesson covers all three, building on the exponential models of the previous lesson.

## Inverse functions and the meaning of a logarithm

If $f$ maps input $x$ to output $y$, its **inverse** $f^{-1}$ maps $y$ back to $x$. To find it, write $y=f(x)$, swap $x$ and $y$, and solve for $y$. The graphs of $f$ and $f^{-1}$ are reflections in the line $y=x$, and the domain of one is the range of the other.

The logarithm is the inverse of the exponential:
$$y=\log_b x \iff b^y=x,\qquad b>0,\ b\ne1,\ x>0.$$
So $\log_b x$ is the exponent that turns $b$ into $x$. The common log is $\log x=\log_{10}x$; the natural log is $\ln x=\log_e x$.

:::example An inverse function
For $f(x)=2x+6$, the inverse function is
A. $f^{-1}(x)=\dfrac{x}{2}-6$
B. $f^{-1}(x)=\dfrac{x-6}{2}$
C. $f^{-1}(x)=\dfrac{1}{2x+6}$
D. $f^{-1}(x)=2x-6$

**Solution.** Write $y=2x+6$ and swap the variables: $x=2y+6$.

Solving for $y$ gives $2y=x-6$, so $y=\dfrac{x-6}{2}$. Check: $f(4)=14$ and $f^{-1}(14)=\dfrac{8}{2}=4$.

So $f^{-1}(x)=\dfrac{x-6}{2}$, answer **B**. Option C is the reciprocal $\dfrac{1}{f(x)}$, which is not the inverse.
:::

## Logarithm rules

For $b>0$, $b\ne1$ and $M,N>0$:

| Rule | Formula |
|---|---|
| Product | $\log_b(MN)=\log_b M+\log_b N$ |
| Quotient | $\log_b\dfrac MN=\log_b M-\log_b N$ |
| Power | $\log_b M^k=k\log_b M$ |
| Change of base | $\log_b M=\dfrac{\ln M}{\ln b}$ |

These follow from the exponent rules: multiplying powers adds exponents, so logs of products add.

:::example Combining logarithms
The value of $\log_3 54-\log_3 2$ is
A. $3$
B. $\log_3 52$
C. $27$
D. $\dfrac{\log_3 54}{\log_3 2}$

**Solution.** By the quotient rule, $\log_3 54-\log_3 2=\log_3\dfrac{54}{2}=\log_3 27$.

Since $3^3=27$, $\log_3 27=3$.

So the value is $3$, answer **A**. Option D wrongly divides the logs instead of the arguments.
:::

## Solving exponential and logarithmic equations

- **Unknown in an exponent:** isolate the power, then take a logarithm of both sides (or match bases).
- **Unknown inside a logarithm:** combine into a single log, rewrite in exponential form, solve, and **check the domain**: every argument must be positive.

:::example Exponential equations
Solve each equation.
a) $5\cdot2^x=40$
b) $3^{x+1}=7$ (give $x$ to three decimal places)

**Solution.** a) Dividing by $5$ gives $2^x=8=2^3$, so $x=3$.

b) Taking natural logs of both sides gives $(x+1)\ln3=\ln7$, so
$$x=\frac{\ln7}{\ln3}-1\approx1.771-1=0.771.$$

So the solutions are $x=3$ and $x\approx0.771$.
:::

:::example A logarithmic equation
Solve $\log_4(x+2)+\log_4(x-4)=2$.

**Solution.** By the product rule, the equation becomes $\log_4\big[(x+2)(x-4)\big]=2$, which in exponential form is $(x+2)(x-4)=4^2=16$.

Expanding, $x^2-2x-8=16$, so $x^2-2x-24=0$, that is $(x-6)(x+4)=0$, giving $x=6$ or $x=-4$.

Checking the domain: for $x=-4$ the argument $x-4=-8$ is negative, so $x=-4$ is rejected; for $x=6$ both arguments, $8$ and $2$, are positive.

So the only solution is $x=6$.
:::

## Logarithmic graphs and semi-log plots

The graph of $y=\log_b x$ with $b>1$ passes through $(1,0)$ and $(b,1)$, increases, is concave down, and has the vertical asymptote $x=0$. Transformations work as usual: $y=\log_b(x-h)+k$ has domain $x>h$ and asymptote $x=h$.

:::graph The graph of $y=\log_2(x-3)+1$
alt: An increasing curve that starts near a dashed vertical asymptote at x = 3, crosses the x-axis at 3.5 and passes through (4, 1) and (7, 3)
x: -1..10
y: -3..4
plot: log(x-3)/log(2)+1 ; 3.01..10
vline: 3 ; dashed
point: (3.5, 0) "3.5" below-right
point: (4, 1) "(4, 1)" above-left
point: (7, 3) "(7, 3)" above-left
:::

The graph above is $y=\log_2(x-3)+1$: domain $x>3$, asymptote $x=3$, and $x$-intercept $3.5$, because $\log_2(x-3)=-1$ gives $x-3=\tfrac12$.

On a **semi-log plot** the vertical axis shows $\log y$. Exponential data $y=ab^x$ then lie on a straight line, because $\log y=\log a+x\log b$: the intercept is $\log a$ and the slope is $\log b$.

:::example From a semi-log line to a model
On a semi-log plot, data lie on the line $\log y=0.3x+1$. Which exponential model fits the data?
A. $y=0.3\cdot10^x$
B. $y=1+10^{0.3x}$
C. $y=10\cdot(1.995)^x$
D. $y=0.3x+10$

**Solution.** Undo the logarithm: $y=10^{0.3x+1}=10^1\cdot\left(10^{0.3}\right)^x$.

Since $10^{0.3}\approx1.995$, the model is $y\approx10\cdot(1.995)^x$: the initial value is $10$ and $y$ roughly doubles for each unit of $x$.

So the model is $y=10\cdot(1.995)^x$, answer **C**.
:::

:::warning Common traps
- **$\log(M+N)$ is not $\log M+\log N$:** the product rule is about $\log(MN)$.
- **Check the domain** after solving any log equation.
- **The inverse is not the reciprocal:** $f^{-1}(x)\ne\dfrac{1}{f(x)}$.
- **Semi-log slope:** the slope is $\log b$, so $b=10^{\text{slope}}$, not the slope itself.
- **Calculator:** use parentheses, as in $\ln(7)/\ln(3)$.
:::

:::terms
- inverse function | hàm ngược
- logarithm | logarit
- common / natural logarithm | logarit thập phân / logarit tự nhiên
- argument | biểu thức dưới dấu logarit
- change of base | đổi cơ số
- vertical asymptote | tiệm cận đứng
- semi-log plot | đồ thị bán logarit
- extraneous solution | nghiệm ngoại lai
:::

## Similar exercises

:::exercise
Find the inverse of $f(x)=5x-3$ and check it with one value.

::hint
**What you need:** swap $x$ and $y$, then solve for $y$.

::solution
To find the inverse, write $y=5x-3$ and swap the variables: $x=5y-3$. Then $5y=x+3$, so $f^{-1}(x)=\dfrac{x+3}{5}$.

Check: $f(2)=7$ and $f^{-1}(7)=\dfrac{10}{5}=2$.

So $f^{-1}(x)=\dfrac{x+3}{5}$.

**Answer.** $f^{-1}(x)=\dfrac{x+3}{5}$.
:::

:::exercise
Evaluate $\log_9 27$.

::hint
**What you need:** write both $9$ and $27$ as powers of $3$.

::solution
By definition, $\log_9 27$ is the power of $9$ that gives $27$. Let $\log_9 27=y$, so $9^y=27$. Writing both as powers of $3$ gives $3^{2y}=3^3$.

Hence $2y=3$ and $y=\dfrac32$.

So $\log_9 27=\dfrac32$.

**Answer.** $\dfrac32$.
:::

:::exercise
Solve $e^{2x}=10$, giving $x$ to three decimal places.

::hint
**What you need:** take the natural log of both sides.

::solution
The unknown is in the exponent of $e$, so take natural logs of both sides: $2x=\ln10$, so $x=\dfrac{\ln10}{2}$.

Since $\ln10\approx2.3026$, $x\approx1.151$.

So $x\approx1.151$.

**Answer.** $x\approx1.151$.
:::

:::exercise
Solve $\log_2 x+\log_2(x-2)=3$.

::hint
**What you need:** combine the logs, rewrite in exponential form, then check the domain $x>2$.

::solution
By the product rule, $\log_2\big[x(x-2)\big]=3$, so $x(x-2)=2^3=8$.

Then $x^2-2x-8=0$, that is $(x-4)(x+2)=0$, so $x=4$ or $x=-2$.

The domain needs $x>2$, so $x=-2$ is rejected.

So the solution is $x=4$.

**Answer.** $x=4$.
:::

:::exercise
State the domain, vertical asymptote and $x$-intercept of $y=\ln(x+1)-2$.

::hint
**What you need:** the argument $x+1$ must be positive; set $y=0$ for the intercept.

::solution
The argument must be positive, $x+1>0$, so the domain is $x>-1$ and the vertical asymptote is $x=-1$.

Setting $y=0$ gives $\ln(x+1)=2$, so $x+1=e^2$ and $x=e^2-1\approx6.389$.

So the domain is $x>-1$, the asymptote is $x=-1$ and the $x$-intercept is $e^2-1\approx6.389$.

**Answer.** $x>-1$; $x=-1$; $x=e^2-1\approx6.389$.
:::

## Applied exercises

:::exercise
The pH of a solution is $\text{pH}=-\log\left[\text{H}^+\right]$. Find the pH of a solution with $\left[\text{H}^+\right]=3.2\times10^{-4}$.

::hint
**What you need:** $\log\left(3.2\times10^{-4}\right)=\log3.2-4$.

::solution
By the product rule, $\log\left(3.2\times10^{-4}\right)=\log3.2+\log10^{-4}\approx0.5051-4=-3.4949$.

Hence $\text{pH}=-(-3.4949)\approx3.4949$, which rounds to $3.49$ to two decimal places.

So the solution has pH about $3.49$: it is acidic.

**Answer.** About $3.49$.
:::

:::exercise
A radioactive substance has a half-life of $8$ days. How long until only $10\%$ of it remains?

::hint
**What you need:** solve $\left(\tfrac12\right)^{t/8}=0.1$ with logarithms.

::solution
The fraction left after $t$ days is $\left(\tfrac12\right)^{t/8}$. Set it equal to $0.1$ and take logs:
$$\frac t8\log0.5=\log0.1,\qquad t=\frac{8\log0.1}{\log0.5}=\frac{8}{\log2}\approx26.6.$$

So $10\%$ remains after about $26.6$ days.

**Answer.** About $26.6$ days.
:::

:::exercise
Two earthquakes have magnitudes $7$ and $5$ on a scale where magnitude is $M=\log\dfrac{A}{A_0}$, with $A$ the amplitude. How many times larger is the amplitude of the stronger one?

::hint
**What you need:** $M_1-M_2=\log\dfrac{A_1}{A_2}$.

::solution
Subtracting the two formulas gives $M_1-M_2=\log A_1-\log A_2=\log\dfrac{A_1}{A_2}$, because the $\log A_0$ terms cancel.

So $\log\dfrac{A_1}{A_2}=7-5=2$, and $\dfrac{A_1}{A_2}=10^2=100$.

So the amplitude of the stronger earthquake is $100$ times larger.

**Answer.** $100$ times.
:::

:::exercise Challenge
On a semi-log plot (base $10$), data lie on the line through $(0,\log5)$ and $(4,\log80)$. Find the exponential model $y=ab^x$.

::hint
**What you need:** the intercept gives $\log a$; the slope gives $\log b$.

::solution
Since $\log y=\log a+x\log b$, the intercept gives $\log a=\log5$, so $a=5$.

The slope is $\dfrac{\log80-\log5}{4}=\dfrac{\log16}{4}=\log16^{1/4}=\log2$, so $b=2$.

So the model is $y=5\cdot2^x$. Check: $5\cdot2^4=80$.

**Answer.** $y=5\cdot2^x$.
:::

:::quiz
::mc
The value of $\log_2 32$ is
A. $16$
B. $5$
C. $6$
D. $64$
::key B
$2^5=32$.

::mc
Which expression equals $\log M+\log N-\log P$?
A. $\log(M+N-P)$
B. $\dfrac{\log MN}{\log P}$
C. $\log\dfrac{MN}{P}$
D. $\log(MNP)$
::key C
Product rule, then quotient rule.

::mc
The graph of $y=\log_3(x+2)$ has vertical asymptote
A. $x=2$
B. $x=-2$
C. $y=-2$
D. $x=0$
::key B
The argument $x+2$ is zero at $x=-2$.

::mc
If $f(x)=e^x$, then $f^{-1}(x)$ is
A. $\ln x$
B. $\dfrac{1}{e^x}$
C. $e^{-x}$
D. $\log x$
::key A
The natural log undoes $e^x$.

::tf
Consider $g(x)=\ln x$. Decide whether each statement is true or false.
a) The domain of $g$ is $x>0$.
b) $g(1)=0$.
c) $g$ is concave up.
d) $g(e^3)=3$.
::key T T F T
$\ln x$ increases but is concave down.

::sa
Evaluate $\log_3 81$.
::key 4
$3^4=81$.

::sa
Solve $2^x=64$.
::key 6
$2^6=64$.
:::
