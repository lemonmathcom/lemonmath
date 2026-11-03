---
title: Graduation practice paper 1
description: A full maths practice paper in the new Vietnamese graduation exam format: 22 questions in 90 minutes, with answers, solutions and the lesson to revise.
minutes: 90
type: exam
---

This paper has the three parts of the Vietnamese upper-secondary graduation exam: 12 multiple-choice questions, 4 true-or-false questions and 6 short-answer questions, to be done in 90 minutes. Part I gives 0.25 points per question; Part II gives up to 1 point per question, depending on how many statements you judge correctly; Part III gives 0.5 points per question. Print the sheet and work on paper first, then enter your answers below to get a mark out of 10. Every solution names the revision lesson to go back to if you got it wrong.

:::quiz exam
::mc
The function $y=f(x)$ has the following table of variations:

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $-3$ | $\nearrow$ | $1$ | $\searrow$ | $-\infty$ |

The local maximum value of the function is
A. $2$.
B. $1$.
C. $-3$.
D. $0$.
::key B
$f'(x)$ changes sign from $+$ to $-$ at $x=2$, so the function has a local maximum at $x=2$ and the local maximum value is $f(2)=1$. Option A is the $x$-coordinate of the maximum point, option C is the local minimum value and option D is the $x$-coordinate of the minimum point.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The horizontal asymptote of the graph of $y=\dfrac{4x+1}{2x-6}$ is the line
A. $y=4$.
B. $x=3$.
C. $y=2$.
D. $y=-\dfrac16$.
::key C
We find the limit as $x\to\pm\infty$ by dividing the numerator and the denominator by $x$:

$$\lim_{x\to\pm\infty}\frac{4x+1}{2x-6}=\lim_{x\to\pm\infty}\frac{4+\frac1x}{2-\frac6x}=\frac42=2.$$

So the horizontal asymptote is $y=2$. Option A uses only the coefficient in the numerator, option B is the vertical asymptote and option D is the ratio of the constants $\dfrac{1}{-6}$.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
On which interval is the function $y=x^3-3x^2+2$ decreasing?
A. $(0, 2)$.
B. $(-\infty, 0)$.
C. $(2, +\infty)$.
D. $(-2, 0)$.
::key A
We study the sign of the derivative:

$$y'=3x^2-6x=3x(x-2),\qquad y'<0\iff 0<x<2.$$

So the function is decreasing on $(0, 2)$. Options B and C are the intervals where it is increasing ($y'>0$); option D comes from solving $y'=0$ wrongly as $x=0$, $x=-2$.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The indefinite integral of $f(x)=2\cos x-3x^2$ is
A. $-2\sin x-x^3+C$.
B. $2\sin x-6x+C$.
C. $2\sin x-x^3+C$.
D. $2\sin x-3x^3+C$.
::key C
We use $\int\cos x\,dx=\sin x+C$ and $\int x^2\,dx=\dfrac{x^3}{3}+C$:

$$\int\left(2\cos x-3x^2\right)dx=2\sin x-3\cdot\frac{x^3}{3}+C=2\sin x-x^3+C.$$

Option A has the wrong sign for the antiderivative of $\cos x$, option B differentiates $3x^2$ instead of integrating it, and option D forgets to divide by $3$.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::mc
Given $\displaystyle\int_1^3 f(x)\,dx=4$ and $\displaystyle\int_1^3 g(x)\,dx=-1$, the value of $\displaystyle\int_1^3\left[2f(x)-3g(x)\right]dx$ is
A. $5$.
B. $11$.
C. $7$.
D. $9$.
::key B
The definite integral is linear, so

$$\int_1^3\left[2f(x)-3g(x)\right]dx=2\cdot4-3\cdot(-1)=8+3=11.$$

Option A drops the minus sign of $-1$ ($8-3$), option C forgets the factor $2$ and option D forgets the factor $3$.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::mc
In the $Oxyz$ coordinate system, let $A(2, -1, 3)$ and $B(4, 3, -1)$. The midpoint of the line segment $AB$ is
A. $(1, 2, -2)$.
B. $(6, 2, 2)$.
C. $(2, 4, -4)$.
D. $(3, 1, 1)$.
::key D
Each coordinate of the midpoint is the mean of the coordinates of the endpoints:

$$I\left(\frac{2+4}{2}, \frac{-1+3}{2}, \frac{3+(-1)}{2}\right)=I(3, 1, 1).$$

Option A is half the difference, option B is the sum (forgetting to divide by $2$) and option C is the vector $\overrightarrow{AB}$.

Revise: [coordinates in space](lesson:review-coordinates-space).

::mc
In the $Oxyz$ coordinate system, the plane through the three points $M(2, 0, 0)$, $N(0, -3, 0)$, $P(0, 0, 6)$ has equation
A. $3x-2y+z-6=0$.
B. $3x+2y+z-6=0$.
C. $2x-3y+6z-6=0$.
D. $3x-2y+z+6=0$.
::key A
The three points lie on the three axes, so we use the intercept form of the equation of a plane and multiply both sides by $6$:

$$\frac x2+\frac{y}{-3}+\frac z6=1\iff 3x-2y+z-6=0.$$

Option B drops the minus sign of $-3$, option C uses the intercepts as coefficients, and option D has the wrong sign of the constant (substituting $M$ gives $6+6\neq0$).

Revise: [coordinates in space](lesson:review-coordinates-space).

::mc
In the $Oxyz$ coordinate system, the sphere $(S)\colon(x-1)^2+(y+2)^2+(z-3)^2=16$ has centre $I$ and radius $R$ given by
A. $I(-1, 2, -3)$, $R=4$.
B. $I(1, -2, 3)$, $R=16$.
C. $I(1, -2, 3)$, $R=4$.
D. $I(-1, 2, -3)$, $R=16$.
::key C
The sphere $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ has centre $I(a, b, c)$ and radius $R$. Here $a=1$, $b=-2$, $c=3$ and $R^2=16$, so $R=4$. Option A changes the signs of the centre's coordinates and option B forgets to take the square root.

Revise: [coordinates in space](lesson:review-coordinates-space).

::mc
The pyramid $S.ABCD$ has a square base of side $a$, $SA\perp(ABCD)$ and $SA=a\sqrt6$. The angle between the line $SC$ and the plane $(ABCD)$ is
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
$AC$ is the orthogonal projection of $SC$ onto $(ABCD)$, so the required angle is $\angle SCA$. The diagonal of the square is $AC=a\sqrt2$, so

$$\tan\angle SCA=\frac{SA}{AC}=\frac{a\sqrt6}{a\sqrt2}=\sqrt3\ \Rightarrow\ \angle SCA=60^\circ.$$

Option A comes from the upside-down ratio $\dfrac{AC}{SA}$; option D wrongly takes $SC$ to be perpendicular to the base.

Revise: [geometry in space](lesson:review-space-geometry).

::mc
The daily home study time (minutes) of $40$ students is shown in the table:

| Time (minutes) | $[0, 20)$ | $[20, 40)$ | $[40, 60)$ | $[60, 80)$ | $[80, 100)$ |
|---|---|---|---|---|---|
| Number of students | $5$ | $12$ | $15$ | $6$ | $2$ |

The mean of this grouped data set is
A. $34$ minutes.
B. $50$ minutes.
C. $44$ minutes.
D. $8$ minutes.
::key C
We use the midpoint of each class, $10$, $30$, $50$, $70$, $90$:

$$\bar x=\frac{5\cdot10+12\cdot30+15\cdot50+6\cdot70+2\cdot90}{40}=\frac{1760}{40}=44.$$

Option A uses the lower class boundaries, option B is the midpoint of the middle class and option D is the mean of the frequencies.

Revise: [statistics and probability](lesson:review-statistics-probability).

::mc
Events $A$ and $B$ satisfy $P(A)=0.6$, $P(B)=0.5$ and $P(A\cap B)=0.3$. Then $P(A\mid B)$ equals
A. $0.5$.
B. $0.15$.
C. $0.3$.
D. $0.6$.
::key D
By the definition of conditional probability:

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0.3}{0.5}=0.6.$$

Option A is $P(B\mid A)=\dfrac{0.3}{0.6}$ (dividing by $P(A)$ by mistake), option B multiplies $P(A\cap B)$ by $P(B)$ instead of dividing, and option C is $P(A\cap B)$.

Revise: [statistics and probability](lesson:review-statistics-probability).

::mc
The solution set of the inequality $3^{2x-1}\le27$ is
A. $(-\infty, 2)$.
B. $(-\infty, 2]$.
C. $[2, +\infty)$.
D. $(-\infty, 14]$.
::key B
Write $27=3^3$; the base $3$ is greater than $1$, so the inequality keeps its direction:

$$3^{2x-1}\le3^3\iff 2x-1\le3\iff x\le2.$$

Option A loses the equals sign, option C reverses the inequality (that only happens when the base is less than $1$), and option D compares $2x-1$ with $27$ instead of with the exponent $3$.

Revise: [trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).

::tf
Let $f(x)=x^3-6x^2+9x+1$.
a) $f'(x)=3x^2-12x+9$.
b) The function is increasing on the interval $(1, 3)$.
c) The local maximum value of the function is $5$.
d) On the interval $[0, 4]$, the maximum value of the function is $5$ and it is reached at exactly one point.
::key T F T F
a) True: differentiate term by term, $(x^3)'=3x^2$, $(-6x^2)'=-12x$, $(9x)'=9$.

b) False: $f'(x)=3(x-1)(x-3)<0$ for $1<x<3$, so the function is decreasing on $(1, 3)$.

c) True: $f'$ changes sign from $+$ to $-$ at $x=1$, so the local maximum value is $f(1)=1-6+9+1=5$.

d) False: compare $f(0)=1$, $f(1)=5$, $f(3)=1$, $f(4)=64-96+36+1=5$. The maximum value is $5$, but it is reached at two points, $x=1$ and $x=4$.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::tf
A model rocket is launched vertically from the ground. During the first $4$ seconds its velocity is $v(t)=12t-3t^2$ (m/s), where $t$ is the number of seconds since launch. Let $h(t)$ be the height (m) of the rocket at time $t$, $0\le t\le4$.
a) The velocity of the rocket at $t=1$ second is $9$ m/s.
b) The velocity of the rocket keeps increasing throughout the first $4$ seconds.
c) $h(t)=6t^2-t^3$.
d) The greatest height the rocket reaches during the first $4$ seconds is $32$ m.
::key T F T T
a) True: $v(1)=12-3=9$ (m/s).

b) False: $v'(t)=12-6t<0$ for $t>2$, so the velocity increases only during the first $2$ seconds and then decreases.

c) True: $h(t)$ is the antiderivative of $v(t)$ with $h(0)=0$: $h(t)=6t^2-t^3+C$ and $h(0)=0$ gives $C=0$.

d) True: $v(t)=3t(4-t)\ge0$ on $[0, 4]$, so the height increases and is greatest at $t=4$: $h(4)=\displaystyle\int_0^4\left(12t-3t^2\right)dt=96-64=32$ (m).

Revise: [antiderivatives and integrals](lesson:review-integrals).

::tf
In the $Oxyz$ coordinate system, let $A(1, 0, 2)$, $B(3, 2, 0)$ and the plane $(P)\colon 2x+y-z-4=0$.
a) $\overrightarrow{AB}=(2, 2, -2)$.
b) The midpoint $I$ of the line segment $AB$ lies in the plane $(P)$.
c) The perpendicular bisector plane of $AB$ has equation $x+y-z=0$.
d) The angle between the line $AB$ and the plane $(P)$ is greater than $60^\circ$.
::key T T F T
a) True: $\overrightarrow{AB}=(3-1, 2-0, 0-2)=(2, 2, -2)$.

b) True: $I(2, 1, 1)$ and $2\cdot2+1-1-4=0$.

c) False: the perpendicular bisector plane passes through $I(2, 1, 1)$ with normal vector $\vec n=(1, 1, -1)$, so its equation is $(x-2)+(y-1)-(z-1)=0$, that is $x+y-z-2=0$. The plane $x+y-z=0$ does not pass through $I$.

d) True: with $\vec u=(1, 1, -1)$ and $\vec n_P=(2, 1, -1)$,

$$\sin\varphi=\frac{|2+1+1|}{\sqrt3\cdot\sqrt6}=\frac{4}{3\sqrt2}\approx0.943\ \Rightarrow\ \varphi\approx70.5^\circ>60^\circ.$$

Revise: [coordinates in space](lesson:review-coordinates-space).

::tf
A factory has two production lines. Line I makes $60\%$ of the products and line II makes $40\%$. The defect rate is $3\%$ on line I and $5\%$ on line II. One product of the factory is chosen at random.
a) The probability that the product is defective, given that it was made on line I, is $0.03$.
b) The probability that the product is defective is $0.04$.
c) The probability that the product was made on line I and is defective is $0.03$.
d) Given that the chosen product is defective, the probability that it was made on line II is greater than $0.5$.
::key T F F T
Let $A$ be the event "the product was made on line I" and $L$ the event "the product is defective".

a) True: we are given $P(L\mid A)=0.03$.

b) False: by the law of total probability, $P(L)=0.6\cdot0.03+0.4\cdot0.05=0.018+0.02=0.038$. The number $0.04$ is the plain mean of the two rates, which ignores how much each line produces.

c) False: $P(A\cap L)=P(A)\cdot P(L\mid A)=0.6\cdot0.03=0.018$; the number $0.03$ is the conditional probability.

d) True: by Bayes' theorem, $P(\overline A\mid L)=\dfrac{0.02}{0.038}=\dfrac{10}{19}\approx0.526>0.5$.

Revise: [statistics and probability](lesson:review-statistics-probability).

::sa
A rectangular poster has a printed area that is a rectangle of area $384$ cm². The top and bottom margins are $3$ cm each and the left and right margins are $2$ cm each. What is the smallest possible area of the poster, in cm²?
::key 600
Let the printed width be $x$ cm ($x>0$); the printed height is $\dfrac{384}{x}$ cm. The area of the poster is

$$S(x)=(x+4)\left(\frac{384}{x}+6\right)=408+6x+\frac{1536}{x}.$$

$S'(x)=6-\dfrac{1536}{x^2}=0\iff x^2=256\iff x=16$, and $S'$ changes sign from $-$ to $+$ at $x=16$. Then the printed area is $16\times24$ cm and the poster is $20\times30$ cm, so the smallest area is $600$ cm².

Revise: [optimisation and real-life problems](lesson:review-optimisation-real-life).

::sa
The cuboid $ABCD.A'B'C'D'$ has $AB=3$, $AD=4$, $AA'=12$. Find the distance from $A$ to the plane $(A'BD)$ (give your answer to 2 decimal places).
::key 2.35
We set up coordinates with $A$ at the origin and the axes along $AB$, $AD$, $AA'$: $B(3, 0, 0)$, $D(0, 4, 0)$, $A'(0, 0, 12)$. A normal vector $\vec n=(a, b, c)$ of $(A'BD)$ is perpendicular to $\overrightarrow{BD}=(-3, 4, 0)$ and $\overrightarrow{BA'}=(-3, 0, 12)$:

$$-3a+4b=0,\qquad -3a+12c=0\ \Rightarrow\ \text{choose } a=4,\ b=3,\ c=1.$$

So $(A'BD)\colon 4(x-3)+3y+z=0$, that is $4x+3y+z-12=0$, and

$$d(A, (A'BD))=\frac{|4\cdot0+3\cdot0+0-12|}{\sqrt{4^2+3^2+1^2}}=\frac{12}{\sqrt{26}}\approx2.353.$$

To 2 decimal places the distance is $2.35$. Note: because $AB$, $AD$, $AA'$ are pairwise perpendicular, the result can be checked with $\dfrac1{h^2}=\dfrac1{AB^2}+\dfrac1{AD^2}+\dfrac1{AA'^2}$, but this formula is not in the textbook.

Revise: [geometry in space](lesson:review-space-geometry).

::sa
Choose axes $Oxyz$ (unit: metre) with the plane $(Oxy)$ as the ground. A zip line is stretched straight from the point $A(0, 0, 20)$ on a high platform to the point $B(30, 40, 5)$. Find the angle between the zip line and the ground (in degrees, to the nearest degree).
::key 17
The line has direction vector $\overrightarrow{AB}=(30, 40, -15)$ and the ground has normal vector $\vec k=(0, 0, 1)$. Then

$$\sin\varphi=\frac{|-15|}{\sqrt{30^2+40^2+15^2}}=\frac{15}{\sqrt{2725}}\approx0.287\ \Rightarrow\ \varphi\approx16.7^\circ.$$

To the nearest degree, the angle between the zip line and the ground is about $17^\circ$.

Revise: [coordinates in space](lesson:review-coordinates-space).

::sa
A fire alarm system has three sensors that work independently. When there is a fire, the sensors detect it with probabilities $0.9$, $0.8$ and $0.5$ respectively. When there is a fire, find the probability that exactly two sensors detect it.
::key 0.49
"Exactly two sensors detect it" is the union of three mutually exclusive events (one sensor misses, the other two detect). The sensors are independent, so we multiply the probabilities in each case and add:

$$P=0.9\cdot0.8\cdot0.5+0.9\cdot0.2\cdot0.5+0.1\cdot0.8\cdot0.5=0.36+0.09+0.04=0.49.$$

Revise: [statistics and probability](lesson:review-statistics-probability).

::sa
Find the area of the region enclosed by the parabola $y=x^2-2x$ and the line $y=x$.
::key 4.5
The intersections: $x^2-2x=x\iff x^2-3x=0\iff x=0$ or $x=3$. On $[0, 3]$ the line lies above the parabola (test $x=1$: $1>-1$), so

$$S=\int_0^3\left(x-x^2+2x\right)dx=\int_0^3\left(3x-x^2\right)dx=\left[\frac{3x^2}{2}-\frac{x^3}{3}\right]_0^3=\frac{27}{2}-9=4.5.$$

Revise: [antiderivatives and integrals](lesson:review-integrals).

::sa
A freshly made cup of tea is at $95^\circ$C in a room at $25^\circ$C. Its temperature after $t$ minutes is $T(t)=25+70\cdot e^{-kt}$ ($^\circ$C), where $k$ is a positive constant. After $5$ minutes the tea is at $60^\circ$C. How many minutes after it was made is the tea at $30^\circ$C (to the nearest minute)?
::key 19
From $T(5)=60$ we get $70e^{-5k}=35$, so $e^{-5k}=\dfrac12$ and $k=\dfrac{\ln2}{5}$. Solve $T(t)=30$:

$$70e^{-kt}=5\iff e^{-kt}=\frac1{14}\iff t=\frac{\ln14}{k}=\frac{5\ln14}{\ln2}\approx19.04.$$

So the tea reaches $30^\circ$C after about $19$ minutes.

Revise: [trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).
:::
