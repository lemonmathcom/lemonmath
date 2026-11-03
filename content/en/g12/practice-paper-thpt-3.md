---
title: Graduation practice paper 3
description: A 22-question paper in the 2025 Vietnamese graduation exam format, harder than papers 1 and 2, with full solutions and a revision lesson for each question.
minutes: 90
type: exam
---

The paper has $22$ questions to be done in $90$ minutes, in three parts: Part I has $12$ multiple-choice questions ($0.25$ points each), Part II has $4$ true/false questions (up to $1$ point each) and Part III has $6$ short-answer questions ($0.5$ points each). This paper is harder than papers 1 and 2, and many questions need two or three steps of reasoning. Work on the printed sheet first under timed conditions, then enter your answers below to be marked out of $10$.

:::quiz exam
::mc
The function $y=f(x)$ has derivative $f'(x)=x^2(x-1)(x+2)^3$ for all $x\in\mathbb{R}$. How many turning points does the function have?
A. $1$.
B. $2$.
C. $3$.
D. $6$.
::key B
The function has a turning point where $f'(x)$ changes sign, that is, at the roots of odd multiplicity:

$$x=1\ (\text{multiplicity } 1),\qquad x=-2\ (\text{multiplicity } 3),\qquad x=0\ (\text{multiplicity } 2\text{, no sign change}).$$

So the function has $2$ turning points. Option C also counts the double root $x=0$; option D adds the exponents $2+1+3$.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
What is the total number of vertical and horizontal asymptotes of the graph of $y=\dfrac{2x^2-3x+1}{x^2-1}$?
A. $1$.
B. $2$.
C. $3$.
D. $4$.
::key B
Factorise the numerator and denominator, then cancel (for $x\neq1$):

$$y=\dfrac{(2x-1)(x-1)}{(x-1)(x+1)}=\dfrac{2x-1}{x+1}.$$

As $x\to1$, $y\to\dfrac12$ (finite), so $x=1$ is not a vertical asymptote. The graph has the vertical asymptote $x=-1$ and the horizontal asymptote $y=2$, two lines in total. Option C forgets to check the limit at $x=1$ and only looks at the roots of the denominator.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The function $y=f(x)$ has the following table of variations.

| $x$ | $-\infty$ | | $-1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $2$ | $\searrow$ | $-4$ | $\nearrow$ | $+\infty$ |

How many real solutions does the equation $2f(x)+5=0$ have?
A. $1$.
B. $2$.
C. $3$.
D. $0$.
::key C
Rewrite the equation as $f(x)=k$ and count the intersections with the line $y=k$:

$$2f(x)+5=0\iff f(x)=-\dfrac52.$$

Since $-4<-\dfrac52<2$, the line $y=-\dfrac52$ meets the graph exactly once on each of $(-\infty, -1)$, $(-1, 3)$ and $(3, +\infty)$, so the equation has $3$ solutions. Option A makes a sign error and solves $f(x)=\dfrac52>2$.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The family of antiderivatives of $f(x)=e^{2x}-\dfrac1x$ on the interval $(0, +\infty)$ is
A. $2e^{2x}-\ln x+C$.
B. $\dfrac12e^{2x}+\dfrac{1}{x^2}+C$.
C. $\dfrac12e^{2x}-\ln x+C$.
D. $\dfrac12e^{2x}+\ln x+C$.
::key C
Use the standard results $\displaystyle\int e^{ax}\,dx=\dfrac1a e^{ax}+C$ and $\displaystyle\int\dfrac1x\,dx=\ln|x|+C$; for $x>0$, $|x|=x$:

$$\int\Big(e^{2x}-\dfrac1x\Big)dx=\dfrac12e^{2x}-\ln x+C.$$

Option A differentiates $e^{2x}$ instead of integrating it; option B differentiates $\dfrac1x$; option D has the wrong sign.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::mc
Given $\displaystyle\int_0^2 f(x)\,dx=3$ and $\displaystyle\int_0^5 f(x)\,dx=7$, the value of $\displaystyle\int_2^5\big[2f(x)-1\big]\,dx$ is
A. $8$.
B. $5$.
C. $7$.
D. $11$.
::key B
Split the interval of integration, then use linearity:

$$\int_2^5 f(x)\,dx=7-3=4,\qquad \int_2^5\big[2f(x)-1\big]dx=2\cdot4-(5-2)=5.$$

Option A forgets the term $-1$; option C takes $\displaystyle\int_2^5 1\,dx=1$; option D uses $\displaystyle\int_0^5$ instead of $\displaystyle\int_2^5$: $2\cdot7-3$.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::mc
In the $Oxyz$ coordinate system, let $A(1, 2, -1)$ and $B(3, 0, 3)$. The perpendicular bisector plane of the segment $AB$ has equation
A. $x-y+2z+3=0$.
B. $x-y+2z-9=0$.
C. $2x+y+z-6=0$.
D. $x-y+2z-3=0$.
::key D
The perpendicular bisector plane passes through the midpoint $I$ of $AB$ and has normal vector $\overrightarrow{AB}$:

$$I(2, 1, 1),\qquad \overrightarrow{AB}=(2, -2, 4)=2(1, -1, 2).$$

$$1(x-2)-1(y-1)+2(z-1)=0\iff x-y+2z-3=0.$$

Option A passes through $A$ and option B through $B$ instead of the midpoint; option C wrongly uses the coordinates of $I$ as the normal vector.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::mc
In the $Oxyz$ coordinate system, consider the sphere $(S)\colon x^2+y^2+z^2-4x+2y-6z-2=0$ and the plane $(P)\colon 2x-y+2z+1=0$. Which statement is true?
A. $(P)$ cuts $(S)$ in a circle.
B. $(P)$ is tangent to $(S)$.
C. $(P)$ and $(S)$ have no common point.
D. $(P)$ passes through the centre of $(S)$.
::key B
Find the centre and radius of the sphere, then compare the distance from the centre to the plane with the radius:

$$I(2, -1, 3),\qquad R=\sqrt{2^2+1^2+3^2+2}=4.$$

$$d\big(I,(P)\big)=\dfrac{|2\cdot2-(-1)+2\cdot3+1|}{\sqrt{4+1+4}}=\dfrac{12}{3}=4=R.$$

So $(P)$ is tangent to $(S)$. Option C comes from forgetting the $+2$ in $R$ (giving $R=\sqrt{14}<4$) or forgetting to divide by $3$; option A comes from taking the centre with the wrong signs, $I(-2, 1, -3)$.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::mc
The pyramid $S.ABCD$ has a square base of side $a$, $SA$ is perpendicular to the base and $SA=a\sqrt2$. The angle between the line $SC$ and the plane $(SAB)$ is
A. $45^\circ$.
B. $60^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key D
We find the projection of $C$ onto $(SAB)$. Since $BC\perp AB$ and $BC\perp SA$, $BC\perp(SAB)$, so the projection of $SC$ onto $(SAB)$ is $SB$ and the required angle is $\angle CSB$:

$$SB=\sqrt{SA^2+AB^2}=a\sqrt3,\qquad \tan\angle CSB=\dfrac{BC}{SB}=\dfrac{a}{a\sqrt3}=\dfrac{1}{\sqrt3}.$$

So the angle is $30^\circ$. Option A is the angle between $SC$ and the base ($\tan=\dfrac{SA}{AC}=1$); option B is $\angle SCB$, the other acute angle of the right-angled triangle $SBC$.

Revise: [Revision: geometry in space](lesson:review-space-geometry).

::mc
The daily self-study time of $40$ students is shown in the table.

| Time (minutes) | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ |
|---|---|---|---|---|---|
| Number of students | $5$ | $12$ | $15$ | $6$ | $2$ |

The mode of this grouped data set is
A. $25$.
B. $22.5$.
C. $27.5$.
D. $22$.
::key B
The modal class is $[20, 30)$, with $n_{m-1}=12$, $n_m=15$, $n_{m+1}=6$ and class width $h=10$:

$$M_o=20+\dfrac{15-12}{(15-12)+(15-6)}\cdot10=20+\dfrac{3}{12}\cdot10=22.5.$$

Option A is the midpoint of the class; option C puts $15-6$ in the numerator by mistake; option D is the mean.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::mc
The lengths (cm) of $10$ leaves are shown in the table.

| Length (cm) | $[4, 6)$ | $[6, 8)$ | $[8, 10)$ |
|---|---|---|---|
| Number of leaves | $3$ | $5$ | $2$ |

The standard deviation of this grouped data set is
A. $1.96$.
B. $6$.
C. $1.4$.
D. $2$.
::key C
Use the midpoints $5$, $7$, $9$:

$$\bar x=\dfrac{3\cdot5+5\cdot7+2\cdot9}{10}=6.8,\qquad s^2=\dfrac{3\cdot25+5\cdot49+2\cdot81}{10}-6.8^2=48.2-46.24=1.96.$$

So $s=\sqrt{1.96}=1.4$. Option A is the variance (no square root); option B is the range $10-4$; option D is the class width.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::mc
Events $A$ and $B$ satisfy $P(A)=0.5$, $P(B)=0.4$ and $P(A\cap B)=0.12$. The value of $P(A\mid B)$ is
A. $0.24$.
B. $0.2$.
C. $0.12$.
D. $0.3$.
::key D
By the definition of conditional probability, divide by the probability of the known event $B$:

$$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{0.12}{0.4}=0.3.$$

Option A divides by $P(A)$, which gives $P(B\mid A)$; option B is the product $P(A)\cdot P(B)$, which is only correct for independent events; option C is $P(A\cap B)$.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::mc
The solution set of the inequality $\log_{\frac12}(x-1)\ge-2$ is
A. $[5, +\infty)$.
B. $(1, 5]$.
C. $(-\infty, 5]$.
D. $\Big(1, \dfrac54\Big]$.
::key B
We need $x>1$. The base $\dfrac12$ is less than $1$, so the inequality reverses when we remove the logarithm:

$$\log_{\frac12}(x-1)\ge-2\iff x-1\le\Big(\dfrac12\Big)^{-2}=4\iff x\le5.$$

Together with the condition, $S=(1, 5]$. Option A forgets to reverse the inequality; option C forgets the condition $x>1$; option D takes $\Big(\dfrac12\Big)^{-2}=\dfrac14$.

Revise: [Revision: trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).

::tf
Consider the function $f(x)=\dfrac{x^2-3x+6}{x-1}$.
a) The derivative is $f'(x)=\dfrac{x^2-2x-3}{(x-1)^2}$ for all $x\neq1$.
b) The function is decreasing on the interval $(-1, 3)$.
c) The graph has the oblique asymptote $y=x-2$.
d) The distance between the two turning points of the graph is $4\sqrt5$.
::key T F T T
a) True: $f'(x)=\dfrac{(2x-3)(x-1)-(x^2-3x+6)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}$.

b) False: $f'(x)=\dfrac{(x+1)(x-3)}{(x-1)^2}<0$ on $(-1, 1)$ and on $(1, 3)$, but the function is not defined at $x=1$, so it is not decreasing on the whole of $(-1, 3)$ (for example $f(0)=-6<f(2)=4$).

c) True: polynomial division gives $f(x)=x-2+\dfrac{4}{x-1}$, and $\dfrac{4}{x-1}\to0$ as $x\to\pm\infty$.

d) True: the turning points are $(-1, -5)$ and $(3, 3)$, at distance $\sqrt{4^2+8^2}=\sqrt{80}=4\sqrt5$.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::tf
A tank holds $200$ litres of water. From time $t=0$ a tap fills it at the rate $v(t)=16+6t-t^2$ (litres per minute), $0\le t\le8$, with $t$ in minutes.
a) At time $t=2$ the water flows in at $24$ litres per minute.
b) The rate of flow increases over the whole interval $[0, 8]$.
c) After $8$ minutes the tank holds about $349.3$ litres.
d) The amount of water reaches $300$ litres before time $t=4$.
::key T F T F
a) True: $v(2)=16+12-4=24$.

b) False: $v'(t)=6-2t$ changes sign at $t=3$, so the rate increases on $[0, 3]$ and decreases on $[3, 8]$ (the greatest rate is $v(3)=25$).

c) True: the amount after $t$ minutes is $W(t)=200+\displaystyle\int_0^t v(s)\,ds=200+16t+3t^2-\dfrac{t^3}{3}$, so $W(8)=200+128+192-\dfrac{512}{3}=\dfrac{1048}{3}\approx349.3$ litres.

d) False: $W(4)=200+64+48-\dfrac{64}{3}\approx290.7<300$; since $v(t)>0$, $W$ is increasing, so the tank only reaches $300$ litres after $t=4$.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::tf
In the $Oxyz$ coordinate system (units in metres), a drone flies in a straight line at constant speed $3$ m/s from the point $M(1, 2, 3)$ in the direction of $\vec u=(2, -1, 2)$. The plane $(Oxy)$ is the ground. The control station is at $K(7, 2, 6)$.
a) After $t$ seconds the drone is at the point $(1+2t, 2-t, 3+2t)$.
b) After $2$ seconds the drone is at $(5, 0, 7)$.
c) The angle between the flight path and the ground is greater than $45^\circ$.
d) The least distance between the drone and the control station is $3$ m.
::key T T F T
a) True: $|\vec u|=\sqrt{4+1+4}=3$, which equals the speed, so each second the drone moves by exactly the vector $\vec u$.

b) True: substituting $t=2$ gives $(5, 0, 7)$.

c) False: the ground has normal vector $\vec k=(0, 0, 1)$, so $\sin\varphi=\dfrac{|\vec u\cdot\vec k|}{|\vec u|\cdot|\vec k|}=\dfrac23$ and $\varphi\approx41.8^\circ<45^\circ$.

d) True: with $P(t)=(1+2t, 2-t, 3+2t)$, $\overrightarrow{KP}=(2t-6, -t, 2t-3)$ and $KP^2=9t^2-36t+45=9(t-2)^2+9\ge9$, least when $t=2$, so the least distance is $3$ m.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::tf
A factory has two production lines. Line I makes $60\%$ of the products with a defect rate of $3\%$; line II makes $40\%$ of the products with a defect rate of $5\%$. A product of the factory is chosen at random.
a) The probability that the chosen product is defective is $0.038$.
b) Given that the product is defective, the probability that it came from line I is greater than $0.5$.
c) Given that the product is not defective, the probability that it came from line II is greater than $0.4$.
d) If two products are chosen at random and independently, the probability that at least one is defective is less than $0.08$.
::key T F F T
Let $L$ be the event "the product is defective" and $D_1$, $D_2$ the events "made by line I, line II".

a) True: by the law of total probability, $P(L)=0.6\cdot0.03+0.4\cdot0.05=0.018+0.02=0.038$.

b) False: by Bayes' theorem, $P(D_1\mid L)=\dfrac{0.018}{0.038}=\dfrac{9}{19}\approx0.474<0.5$. Line I makes more products but has a lower defect rate.

c) False: $P(D_2\mid\overline L)=\dfrac{0.4\cdot0.95}{1-0.038}=\dfrac{0.38}{0.962}\approx0.395<0.4$.

d) True: using the complement, $1-0.962^2\approx0.0746<0.08$.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::sa
A workshop makes closed cylindrical cans with volume $1000\ \text{cm}^3$. The material for the top and bottom costs twice as much per $\text{cm}^2$ as the material for the curved surface. What base radius, in centimetres, makes the cost of material as small as possible (give your answer to one decimal place)?
::key 4.3
Let the base radius be $r$; the height is $h=\dfrac{1000}{\pi r^2}$. Taking the curved surface material as $1$ unit per $\text{cm}^2$, the cost is proportional to

$$C(r)=2\cdot2\pi r^2+2\pi rh=4\pi r^2+\dfrac{2000}{r},\qquad r>0.$$

$$C'(r)=8\pi r-\dfrac{2000}{r^2}=0\iff r^3=\dfrac{250}{\pi}\iff r=\sqrt[3]{\dfrac{250}{\pi}}\approx4.30.$$

$C'(r)$ changes from negative to positive there, so the cost is least when $r\approx4.3$ cm.

Revise: [Revision: optimisation and real-life problems](lesson:review-optimisation-real-life).

::sa
The pyramid $S.ABCD$ has a square base of side $2$, $SA$ is perpendicular to the base and $SA=2$. Find the distance between the skew lines $BD$ and $SC$ (give your answer to two decimal places).
::key 0.82
Construct the common perpendicular. Let $O$ be the centre of the square. Since $BD\perp AC$ and $BD\perp SA$, $BD\perp(SAC)$. In $(SAC)$ draw $OH\perp SC$ at $H$; then $OH\perp BD$, so $OH$ is the common perpendicular and $d(BD, SC)=OH$.

$$AC=2\sqrt2,\qquad SC=\sqrt{SA^2+AC^2}=2\sqrt3,\qquad OC=\sqrt2.$$

The right-angled triangles $CHO$ and $CAS$ share the angle at $C$, so they are similar:

$$OH=\dfrac{OC\cdot SA}{SC}=\dfrac{\sqrt2\cdot2}{2\sqrt3}=\dfrac{\sqrt6}{3}\approx0.816.$$

So the distance is about $0.82$.

Revise: [Revision: geometry in space](lesson:review-space-geometry).

::sa
In the $Oxyz$ coordinate system (units in metres), the ground is the plane $(Oxy)$. A zip line is a taut straight cable from the point $A(0, 0, 20)$ on a tower to the point $B(40, 30, 5)$ on a lower post. Find the angle between the cable and the ground (in degrees, to one decimal place).
::key 16.7
The angle $\varphi$ between the line $AB$ and the plane $(Oxy)$, whose normal vector is $\vec k=(0, 0, 1)$:

$$\overrightarrow{AB}=(40, 30, -15),\qquad AB=\sqrt{1600+900+225}=5\sqrt{109}\approx52.2.$$

$$\sin\varphi=\dfrac{|-15|}{5\sqrt{109}}\approx0.2873\ \Rightarrow\ \varphi\approx16.7^\circ.$$

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::sa
A box contains $5$ red balls and $4$ blue balls. Two balls are taken out at random at the same time. Given that at least one of them is red, find the probability that both are red (give your answer to two decimal places).
::key 0.33
Let $A$ be "both balls are red" and $B$ "at least one ball is red"; since $A\subset B$, $A\cap B=A$:

$$P(A)=\dfrac{\binom52}{\binom92}=\dfrac{10}{36},\qquad P(B)=1-\dfrac{\binom42}{\binom92}=1-\dfrac{6}{36}=\dfrac{30}{36}.$$

$$P(A\mid B)=\dfrac{10}{30}=\dfrac13\approx0.33.$$

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::sa
In a coordinate plane (units in metres), a flower bed is the region bounded by the parabola $y=\dfrac{x^2}{2}$ and the line $y=x+4$. Planting costs $250\,000$ đồng per square metre. Find the cost of planting the whole bed (in millions of đồng).
::key 4.5
The $x$-coordinates of the intersections satisfy $\dfrac{x^2}{2}=x+4\iff x^2-2x-8=0\iff x=-2$ or $x=4$. On $[-2, 4]$ the line lies above the parabola, so the area is

$$S=\int_{-2}^{4}\Big(x+4-\dfrac{x^2}{2}\Big)dx=\Big[\dfrac{x^2}{2}+4x-\dfrac{x^3}{6}\Big]_{-2}^{4}=\dfrac{40}{3}-\Big(-\dfrac{14}{3}\Big)=18\ (\text{m}^2).$$

The cost is $18\cdot250\,000=4\,500\,000$ đồng, that is $4.5$ million đồng.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::sa
A cup of hot water is left in a room at $25^\circ\text{C}$. The temperature of the water after $t$ minutes is $T(t)=25+70e^{-kt}$ ($^\circ$C), where $k>0$ is a constant. After $10$ minutes the water is at $60^\circ\text{C}$. How many minutes after the start does the water reach $35^\circ\text{C}$ (give your answer to one decimal place)?
::key 28.1
Use $T(10)=60$ to find $k$:

$$25+70e^{-10k}=60\iff e^{-10k}=\dfrac12\iff k=\dfrac{\ln2}{10}.$$

Solve $T(t)=35$:

$$70e^{-kt}=10\iff e^{-kt}=\dfrac17\iff t=\dfrac{\ln7}{k}=\dfrac{10\ln7}{\ln2}\approx28.07.$$

So after about $28.1$ minutes.

Revise: [Revision: trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).
:::
