---
title: Graduation practice paper 2
description: A second maths practice paper in the graduation exam format, a little harder than paper 1: 22 questions in 90 minutes, with answers and solutions.
minutes: 90
type: exam
---

This paper has the three parts of the Vietnamese upper-secondary graduation exam: 12 multiple-choice questions, 4 true-or-false questions and 6 short-answer questions, to be done in 90 minutes. Part I gives 0.25 points per question; Part II gives up to 1 point per question, depending on how many statements you judge correctly; Part III gives 0.5 points per question. Print the sheet and work on paper first, then enter your answers below to get a mark out of 10. This paper has more application questions than paper 1, so allow about 40 minutes for Part III.

:::quiz exam
::mc
The function $y=f(x)$ has derivative $f'(x)=(x+1)(x-2)^2(x-4)$ for all $x\in\mathbb{R}$. The function has a local minimum at
A. $x=2$.
B. $x=-1$.
C. $x=0$.
D. $x=4$.
::key D
We study the sign of $f'(x)$; the factor $(x-2)^2$ is never negative, so it does not make $f'$ change sign:

| $x$ | $-\infty$ | | $-1$ | | $2$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ | |

$f'$ changes sign from $-$ to $+$ only at $x=4$, so the function has a local minimum at $x=4$. Option A treats every root of $f'$ as a turning point, and option B is the local maximum point.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The oblique asymptote of the graph of $y=\dfrac{2x^2+3x-1}{x+2}$ is the line
A. $y=2x-1$.
B. $y=2x+3$.
C. $y=x-1$.
D. $x=-2$.
::key A
Divide the numerator by the denominator:

$$\frac{2x^2+3x-1}{x+2}=2x-1+\frac{1}{x+2}.$$

Since $\dfrac1{x+2}\to0$ as $x\to\pm\infty$, the oblique asymptote is $y=2x-1$. Option B just takes the first two coefficients of the numerator, option C forgets the coefficient $2$ of $x^2$, and option D is the vertical asymptote.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
Which of the following functions is increasing on $\mathbb{R}$?
A. $y=x^4+2x^2$.
B. $y=\dfrac{x+1}{x-3}$.
C. $y=x^3+x-5$.
D. $y=x^3-3x$.
::key C
$y=x^3+x-5$ has $y'=3x^2+1>0$ for every $x$, so it is increasing on $\mathbb{R}$. Function A has $y'=4x(x^2+1)<0$ for $x<0$; function B is not defined at $x=3$; function D has $y'=3x^2-3<0$ on $(-1, 1)$.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
On the interval $(0, +\infty)$, the indefinite integral of $f(x)=3^x+\dfrac1x$ is
A. $3^x\ln3+\ln x+C$.
B. $\dfrac{3^x}{\ln3}+\ln x+C$.
C. $x\cdot3^{x-1}+\ln x+C$.
D. $\dfrac{3^x}{\ln3}-\dfrac1{x^2}+C$.
::key B
We use $\int a^x\,dx=\dfrac{a^x}{\ln a}+C$ and $\int\dfrac1x\,dx=\ln|x|+C$ (for $x>0$, $|x|=x$). Option A is the derivative of $3^x$, option C wrongly uses the rule for powers of $x$, and option D differentiates $\dfrac1x$.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::mc
The value of $\displaystyle\int_0^3|x-2|\,dx$ is
A. $-\dfrac32$.
B. $\dfrac32$.
C. $2$.
D. $\dfrac52$.
::key D
We split at $x=2$, where $x-2$ changes sign:

$$\int_0^3|x-2|\,dx=\int_0^2(2-x)\,dx+\int_2^3(x-2)\,dx=2+\frac12=\frac52.$$

Option A ignores the modulus, option B subtracts the two parts instead of adding them, and option C only computes the part on $[0, 2]$.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::mc
A geometric sequence $(u_n)$ has $u_1=2$ and $u_4=-54$. Its common ratio is
A. $-3$.
B. $3$.
C. $-27$.
D. $-\dfrac{56}{3}$.
::key A
We have $u_4=u_1q^3$, so $q^3=\dfrac{-54}{2}=-27$ and $q=-3$. Option B loses the minus sign, option C forgets to take the cube root, and option D wrongly uses the arithmetic sequence formula $u_4=u_1+3d$.

Revise: [trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).

::mc
In the $Oxyz$ coordinate system, the plane through $A(1, -1, 2)$ perpendicular to the line $d\colon\dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{3}$ has equation
A. $2x-y+3z+9=0$.
B. $2x+y+3z-7=0$.
C. $2x-y+3z-9=0$.
D. $2x-y+3z+7=0$.
::key C
A plane perpendicular to $d$ has the direction vector $\vec u=(2, -1, 3)$ of $d$ as a normal vector:

$$2(x-1)-(y+1)+3(z-2)=0\iff 2x-y+3z-9=0.$$

Option A has the wrong sign of the constant, option B has the wrong sign of the $y$ coefficient, and option D is the plane through the point $(1, 0, -3)$ of $d$ instead of through $A$.

Revise: [coordinates in space](lesson:review-coordinates-space).

::mc
In the $Oxyz$ coordinate system, the sphere with centre $I(2, -1, 1)$ passing through $A(0, 1, 2)$ has equation
A. $(x-2)^2+(y+1)^2+(z-1)^2=3$.
B. $(x-2)^2+(y+1)^2+(z-1)^2=9$.
C. $(x+2)^2+(y-1)^2+(z+1)^2=9$.
D. $(x+2)^2+(y-1)^2+(z+1)^2=3$.
::key B
The radius is $IA$:

$$R^2=IA^2=(0-2)^2+(1+1)^2+(2-1)^2=9.$$

So the sphere is $(x-2)^2+(y+1)^2+(z-1)^2=9$. Option A writes $R$ instead of $R^2$; options C and D change the signs of the centre's coordinates.

Revise: [coordinates in space](lesson:review-coordinates-space).

::mc
$ABCD.A'B'C'D'$ is a cube. The angle between the lines $AB'$ and $BC'$ is
A. $45^\circ$.
B. $90^\circ$.
C. $60^\circ$.
D. $30^\circ$.
::key C
$ABC'D'$ is a rectangle, so $BC'\parallel AD'$ and the required angle equals the angle between $AB'$ and $AD'$. The three sides of triangle $AB'D'$ are diagonals of three faces of the cube, so the triangle is equilateral and the angle is $60^\circ$. Option A confuses it with the angle between a face diagonal and an edge; option B comes from the faces $(ABB'A')$ and $(BCC'B')$ being perpendicular.

Revise: [geometry in space](lesson:review-space-geometry).

::mc
The pyramid $S.ABCD$ has a rectangular base with $AB=3$, $AD=4$, $SA\perp(ABCD)$, and the angle between the line $SC$ and the base is $45^\circ$. The volume of the pyramid $S.ABCD$ is
A. $20$.
B. $60$.
C. $16$.
D. $10$.
::key A
The angle between $SC$ and the base is $\angle SCA=45^\circ$, so triangle $SAC$ is a right-angled isosceles triangle at $A$ and $SA=AC=\sqrt{3^2+4^2}=5$. Hence

$$V=\frac13\cdot AB\cdot AD\cdot SA=\frac13\cdot12\cdot5=20.$$

Option B forgets the factor $\dfrac13$, option C takes $SA=AD=4$ by mistake, and option D uses the area of triangle $ABC$ as the base area.

Revise: [geometry in space](lesson:review-space-geometry).

::mc
The masses (kg) of $40$ boys in year 12 are shown in the table:

| Mass (kg) | $[40, 50)$ | $[50, 60)$ | $[60, 70)$ | $[70, 80)$ | $[80, 90)$ |
|---|---|---|---|---|---|
| Number of students | $4$ | $9$ | $15$ | $10$ | $2$ |

The mode of this grouped data set (to 2 decimal places) is
A. $65$.
B. $64.55$.
C. $15$.
D. $65.45$.
::key D
The class with the highest frequency is $[60, 70)$ with $n_m=15$; the class before it has $n_{m-1}=9$ and the class after it has $n_{m+1}=10$:

$$M_o=60+\frac{15-9}{(15-9)+(15-10)}\cdot10=60+\frac{60}{11}\approx65.45.$$

Option A is the midpoint of the modal class, option B swaps the two differences in the numerator ($15-10$ instead of $15-9$), and option C is the highest frequency.

Revise: [statistics and probability](lesson:review-statistics-probability).

::mc
An and Binh each throw one ball at a basket, independently of each other. An scores with probability $0.7$ and Binh with probability $0.6$. The probability that exactly one of them scores is
A. $0.42$.
B. $0.46$.
C. $0.88$.
D. $0.54$.
::key B
"Exactly one scores" consists of two mutually exclusive cases: An scores and Binh misses, or An misses and Binh scores. The throws are independent, so

$$P=0.7\cdot0.4+0.3\cdot0.6=0.28+0.18=0.46.$$

Option A is the probability that both score, option C the probability that at least one scores, and option D the probability of the complementary event.

Revise: [statistics and probability](lesson:review-statistics-probability).

::tf
Let $(C)$ be the graph of $y=\dfrac{x+3}{x-1}$.
a) The line $x=1$ is a vertical asymptote of $(C)$.
b) The function is increasing on the interval $(1, +\infty)$.
c) The maximum value of the function on the interval $[2, 5]$ is $5$.
d) There are exactly $6$ points on $(C)$ whose coordinates are both integers.
::key T F T T
a) True: $\lim\limits_{x\to1^+}\dfrac{x+3}{x-1}=+\infty$.

b) False: $y'=\dfrac{1\cdot(-1)-3\cdot1}{(x-1)^2}=\dfrac{-4}{(x-1)^2}<0$, so the function is decreasing on each interval of its domain.

c) True: the function is decreasing on $[2, 5]$, so its maximum value is $y(2)=\dfrac51=5$.

d) True: write $y=1+\dfrac{4}{x-1}$. For integer $x$, $y$ is an integer exactly when $x-1$ is a divisor of $4$, that is $x-1\in\{\pm1, \pm2, \pm4\}$: there are $6$ values of $x$, so $6$ points.

Revise: [derivatives and graphs of functions](lesson:review-functions-derivatives).

::tf
A train starts from rest at a station. During the first $20$ seconds its acceleration is $a(t)=2-0.1t$ (m/s²), where $t$ is the number of seconds since it started. Let $v(t)$ be the velocity (m/s) of the train.
a) $v(t)=2t-0.05t^2$ for $0\le t\le20$.
b) The velocity of the train at $t=20$ seconds is $40$ m/s.
c) The distance the train travels in the first $10$ seconds is $100$ m.
d) From the 20th second on, the train keeps the velocity it has reached. The distance it travels in the first minute is more than $1$ km.
::key T F F T
a) True: $v(t)$ is an antiderivative of $a(t)$, $v(t)=2t-0.05t^2+C$, and $v(0)=0$ gives $C=0$.

b) False: $v(20)=40-0.05\cdot400=20$ (m/s). The value $40$ keeps only $2t$ and forgets the term $-0.05t^2$.

c) False: $\displaystyle\int_0^{10}\left(2t-0.05t^2\right)dt=\left[t^2-\frac{0.05t^3}{3}\right]_0^{10}=100-\frac{50}{3}\approx83.3$ (m).

d) True: in the first $20$ seconds the train travels $\displaystyle\int_0^{20}\left(2t-0.05t^2\right)dt=400-\frac{400}{3}=\frac{800}{3}\approx266.7$ (m); in the next $40$ seconds it travels $20\cdot40=800$ (m). In total about $1066.7$ m $>1000$ m.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::tf
Choose axes $Oxyz$ (unit: metre) with the plane $(Oxy)$ as the ground. A vertical aerial mast has its foot at the origin $O$ and its top at $A(0, 0, 12)$. A cable is stretched straight from the top $A$ to an anchor point $B(4, 6, 0)$ on the ground.
a) $\overrightarrow{AB}=(4, 6, -12)$.
b) The cable is $14$ m long.
c) The angle between the cable and the ground is greater than $60^\circ$.
d) The plane containing the mast and the cable has equation $3x-2y=0$.
::key T T F T
a) True: $\overrightarrow{AB}=(4-0, 6-0, 0-12)=(4, 6, -12)$.

b) True: $AB=\sqrt{16+36+144}=\sqrt{196}=14$ (m).

c) False: the ground has normal vector $\vec k=(0, 0, 1)$, so $\sin\varphi=\dfrac{12}{14}\approx0.857$ and $\varphi\approx59.0^\circ<60^\circ$.

d) True: the plane $(OAB)$ contains the vectors $\overrightarrow{OA}=(0, 0, 12)$ and $\overrightarrow{OB}=(4, 6, 0)$. A normal vector $\vec n=(a, b, c)$ is perpendicular to both:

$$12c=0,\qquad 4a+6b=0\ \Rightarrow\ \text{choose } c=0,\ a=3,\ b=-2.$$

The plane passes through $O$ with normal vector $\vec n=(3, -2, 0)$, so its equation is $3x-2y=0$.

Revise: [coordinates in space](lesson:review-coordinates-space).

::tf
Box I contains $4$ red and $2$ blue marbles; box II contains $3$ red and $5$ blue marbles. One marble is taken at random from box I and put into box II, and then one marble is taken at random from box II.
a) The probability that the marble moved from box I is red is $\dfrac23$.
b) Given that the marble moved is red, the probability of taking a red marble from box II is $\dfrac12$.
c) The probability of taking a red marble from box II is $\dfrac{11}{27}$.
d) Given that the marble taken from box II is red, the probability that the marble moved was red is greater than $0.75$.
::key T F T F
Let $D$ be the event "the marble moved is red" and $E$ the event "the marble taken from box II is red".

a) True: $P(D)=\dfrac46=\dfrac23$.

b) False: after the move, box II has $9$ marbles, $4$ of them red, so $P(E\mid D)=\dfrac49$. The value $\dfrac12=\dfrac48$ forgets that box II now has one more marble.

c) True: by the law of total probability, $P(E)=\dfrac23\cdot\dfrac49+\dfrac13\cdot\dfrac39=\dfrac{8}{27}+\dfrac{3}{27}=\dfrac{11}{27}$.

d) False: by Bayes' theorem, $P(D\mid E)=\dfrac{8/27}{11/27}=\dfrac{8}{11}\approx0.727<0.75$.

Revise: [statistics and probability](lesson:review-statistics-probability).

::sa
A hotel has $50$ rooms. At a price of $400$ thousand dong per room per day every room is taken; each increase of $20$ thousand dong leaves one more room empty. Each occupied room costs $40$ thousand dong per day to service. To make the daily profit as large as possible, what price per room (in thousand dong) should the hotel charge?
::key 720
Let $x$ be the number of price increases ($0\le x\le50$). Then the price is $400+20x$, $50-x$ rooms are taken, and the daily profit (thousand dong) is

$$L(x)=(400+20x-40)(50-x)=(360+20x)(50-x).$$

$L'(x)=20(50-x)-(360+20x)=640-40x=0\iff x=16$. Compare $L(0)=18\,000$, $L(16)=680\cdot34=23\,120$, $L(50)=0$: the profit is greatest for $x=16$, that is at a price of $400+320=720$ thousand dong.

Revise: [optimisation and real-life problems](lesson:review-optimisation-real-life).

::sa
The regular square pyramid $S.ABCD$ has base edge $6$ and height $4$. Find the distance from $A$ to the plane $(SCD)$.
::key 4.8
Let $O$ be the centre of the base and $M$ the midpoint of $CD$. Since $AC$ meets $(SCD)$ at $C$ and $AC=2OC$, we have $d(A, (SCD))=2\,d(O, (SCD))$. Draw $OH\perp SM$ at $H$. Since $CD\perp OM$ and $CD\perp SO$, we have $CD\perp(SOM)$, so $CD\perp OH$; hence $OH\perp(SCD)$. In the right-angled triangle $SOM$ with $OM=3$ and $SO=4$:

$$OH=\frac{SO\cdot OM}{\sqrt{SO^2+OM^2}}=\frac{4\cdot3}{5}=2.4.$$

So $d(A, (SCD))=2\cdot2.4=4.8$.

Revise: [geometry in space](lesson:review-space-geometry).

::sa
Choose axes $Oxyz$ (unit: metre). After $t$ seconds, the first drone is at $M(3t, 4t, 20)$ and the second drone is at $N(40-2t, 10+t, 30-t)$. Find the smallest distance between the two drones (to 1 decimal place).
::key 12.4
We have $\overrightarrow{MN}=(40-5t, 10-3t, 10-t)$, so

$$f(t)=MN^2=(40-5t)^2+(10-3t)^2+(10-t)^2=35t^2-480t+1800.$$

$f'(t)=70t-480=0\iff t=\dfrac{48}{7}$, and $f'$ changes sign from $-$ to $+$ there. The minimum value is $f\left(\dfrac{48}{7}\right)=\dfrac{1080}{7}$, so the smallest distance is $\sqrt{\dfrac{1080}{7}}\approx12.42$, which rounds to $12.4$ m.

Revise: [coordinates in space](lesson:review-coordinates-space).

::sa
In a multiple-choice test, each question has $4$ options and exactly one is correct. For each question, the probability that Lan knows the answer is $0.6$; if she does not know it, she picks an option at random. Given that Lan answers a question correctly, find the probability that she really knew the answer (to 2 decimal places).
::key 0.86
Let $K$ be the event "Lan knows the answer" and $C$ the event "Lan answers correctly". Then $P(C\mid K)=1$ and $P(C\mid\overline K)=0.25$. By the law of total probability and Bayes' theorem:

$$P(C)=0.6\cdot1+0.4\cdot0.25=0.7,\qquad P(K\mid C)=\frac{0.6}{0.7}=\frac67\approx0.857.$$

To 2 decimal places this is $0.86$.

Revise: [statistics and probability](lesson:review-statistics-probability).

::sa
A glass paperweight is a solid of revolution, formed by rotating the region bounded by the curve $y=4-x^2$, the $x$-axis and the $y$-axis (with $0\le x\le2$) about the $x$-axis (unit on the axes: cm). Find the volume of the paperweight in cm³ (to 1 decimal place).
::key 53.6
The volume of the solid of revolution is

$$V=\pi\int_0^2\left(4-x^2\right)^2dx=\pi\int_0^2\left(16-8x^2+x^4\right)dx=\pi\left(32-\frac{64}{3}+\frac{32}{5}\right)=\frac{256\pi}{15}\approx53.62.$$

To 1 decimal place this is $53.6$ cm³.

Revise: [antiderivatives and integrals](lesson:review-integrals).

::sa
The number of bacteria in a culture after $t$ hours is $N(t)=N_0\cdot a^t$, where $N_0$ and $a>0$ are constants. After $2$ hours there are $300$ bacteria, and after $5$ hours there are $2400$. How many hours after the start does the culture contain $10\,000$ bacteria (to 1 decimal place)?
::key 7.1
Dividing $N_0a^5=2400$ by $N_0a^2=300$ gives $a^3=8$, so $a=2$ and $N_0=\dfrac{300}{4}=75$. Solve $N(t)=10\,000$:

$$75\cdot2^t=10\,000\iff 2^t=\frac{400}{3}\iff t=\log_2\frac{400}{3}\approx7.06.$$

So the culture contains $10\,000$ bacteria after about $7.1$ hours.

Revise: [trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).
:::
