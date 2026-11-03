---
title: Graduation practice paper 4
description: The hardest 22-question paper of the series, in the 2025 Vietnamese graduation exam format, with full solutions and a revision lesson for each question.
minutes: 90
type: exam
---

The paper has $22$ questions to be done in $90$ minutes, in three parts: Part I has $12$ multiple-choice questions ($0.25$ points each), Part II has $4$ true/false questions (up to $1$ point each) and Part III has $6$ short-answer questions ($0.5$ points each). This is the hardest paper of the series: many statements in Part II and Part III need a careful check of conditions and rounding. Work on the printed sheet first under timed conditions, then enter your answers below to be marked out of $10$.

:::quiz exam
::mc
Consider the function $y=\ln(x^2+1)-x$. Which statement is true?
A. The function has a local maximum at $x=1$.
B. The function has two turning points.
C. The function is decreasing on $\mathbb{R}$.
D. The function is increasing on the interval $(1, +\infty)$.
::key C
Differentiate and write over a common denominator:

$$y'=\dfrac{2x}{x^2+1}-1=\dfrac{2x-x^2-1}{x^2+1}=-\dfrac{(x-1)^2}{x^2+1}\le0\quad\text{for all } x.$$

$y'=0$ only at $x=1$ and $y'$ does not change sign there, so the function is decreasing on $\mathbb{R}$ and has no turning points. Option A assumes every root of $y'=0$ is a turning point.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
What is the total number of vertical and horizontal asymptotes of the graph of $y=\dfrac{x+1}{\sqrt{x^2-4}}$?
A. $1$.
B. $2$.
C. $3$.
D. $4$.
::key D
The domain is $(-\infty, -2)\cup(2, +\infty)$. For the limits at infinity, remember that $\sqrt{x^2}=|x|$:

$$\lim_{x\to+\infty}y=\lim_{x\to+\infty}\dfrac{1+\frac1x}{\sqrt{1-\frac{4}{x^2}}}=1,\qquad \lim_{x\to-\infty}y=\lim_{x\to-\infty}\dfrac{1+\frac1x}{-\sqrt{1-\frac{4}{x^2}}}=-1.$$

Also $\displaystyle\lim_{x\to2^+}y=+\infty$ and $\displaystyle\lim_{x\to-2^-}y=-\infty$ (the numerator tends to $3$ and to $-1$, not $0$). So there are $2$ horizontal asymptotes $y=\pm1$ and $2$ vertical asymptotes $x=\pm2$, $4$ in total. Option C misses $y=-1$ by writing $\sqrt{x^2}=x$.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
The function $y=f(x)$ is continuous on $\mathbb{R}$ and its derivative has the following sign table.

| $x$ | $-\infty$ | | $-2$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ | |

Which statement is true?
A. The function has a local minimum at $x=1$.
B. The function has three turning points.
C. The function is decreasing on the interval $(-2, 3)$.
D. $f(1)<f(3)$.
::key C
On $(-2, 3)$ we have $f'(x)<0$, equal to $0$ only at the single point $x=1$, so $f$ is decreasing on $(-2, 3)$. The derivative does not change sign at $x=1$, so it is not a turning point: the function has only two turning points, $x=-2$ and $x=3$. Since $f$ is decreasing on $[-2, 3]$, $f(1)>f(3)$. Options A and B treat $x=1$ as a turning point just because $f'(1)=0$.

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::mc
$F(x)$ is an antiderivative of $f(x)=2x+\sin x$ with $F(0)=3$. Then $F(x)$ is
A. $x^2-\cos x+3$.
B. $x^2+\cos x+2$.
C. $x^2-\cos x+4$.
D. $x^2-\cos x+2$.
::key C
The antiderivatives are $F(x)=x^2-\cos x+C$. Use the condition $F(0)=3$, remembering that $\cos0=1$:

$$0-1+C=3\iff C=4.$$

So $F(x)=x^2-\cos x+4$. Option A forgets that $\cos0=1$; option B takes the antiderivative of $\sin x$ to be $\cos x$; option D moves the $-1$ across with the wrong sign, giving $C=3-1=2$.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::mc
The value of $\displaystyle\int_0^{\ln2}\big(e^x+1\big)^2\,dx$ is
A. $5+\ln2$.
B. $\dfrac{19}{3}$.
C. $\dfrac32+\ln2$.
D. $\dfrac72+\ln2$.
::key D
Expand the square, then use the standard results:

$$\int_0^{\ln2}\big(e^{2x}+2e^x+1\big)dx=\Big[\dfrac12e^{2x}+2e^x+x\Big]_0^{\ln2}=\big(2+4+\ln2\big)-\Big(\dfrac12+2\Big)=\dfrac72+\ln2.$$

Option A forgets the factor $\dfrac12$ in the antiderivative of $e^{2x}$; option B takes $\dfrac{(e^x+1)^3}{3}$ as the antiderivative; option C misses the term $2e^x$.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::mc
In the $Oxyz$ coordinate system, the orthogonal projection of the point $M(3, 3, -1)$ onto the plane $(P)\colon x+2y-2z-2=0$ is the point
A. $H(4, 5, -3)$.
B. $H(1, -1, 3)$.
C. $H(2, 1, 1)$.
D. $H(2, 1, -1)$.
::key C
The line through $M$ perpendicular to $(P)$ has direction vector $\vec n=(1, 2, -2)$ and consists of the points $H(3+t, 3+2t, -1-2t)$. Substitute into the equation of $(P)$:

$$(3+t)+2(3+2t)-2(-1-2t)-2=0\iff 9+9t=0\iff t=-1.$$

So $H(2, 1, 1)$. Option A takes $t=1$ by mistake; option B is the reflection of $M$ in $(P)$ (which corresponds to $t=-2$).

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::mc
In the $Oxyz$ coordinate system, the angle between the line $d\colon\begin{cases}x=1+t\\ y=2\\ z=-t\end{cases}$ and the plane $(P)\colon x+y-3=0$ is
A. $60^\circ$.
B. $30^\circ$.
C. $45^\circ$.
D. $90^\circ$.
::key B
With $\vec u=(1, 0, -1)$ and $\vec n=(1, 1, 0)$, the angle $\varphi$ between a line and a plane is found with the sine:

$$\sin\varphi=\dfrac{|\vec u\cdot\vec n|}{|\vec u|\cdot|\vec n|}=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12\ \Rightarrow\ \varphi=30^\circ.$$

Option A uses the cosine formula, as for the angle between two lines.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::mc
The pyramid $S.ABCD$ has a square base of side $a$, $SA$ is perpendicular to the base and $SA=\dfrac{a\sqrt6}{2}$. The dihedral angle $[S, BD, A]$ measures
A. $30^\circ$.
B. $60^\circ$.
C. about $50.8^\circ$.
D. about $40.9^\circ$.
::key B
Let $O$ be the centre of the square. Since $BD\perp AO$ and $BD\perp SA$, $BD\perp SO$; the plane angle of the dihedral angle is $\angle SOA$:

$$AO=\dfrac{a\sqrt2}{2},\qquad \tan\angle SOA=\dfrac{SA}{AO}=\dfrac{a\sqrt6/2}{a\sqrt2/2}=\sqrt3\ \Rightarrow\ \angle SOA=60^\circ.$$

Option A uses $\dfrac{AO}{SA}$ by mistake; option C uses $\angle SBA$ (the dihedral angle along $BC$); option D uses $AC$ instead of $AO$.

Revise: [Revision: geometry in space](lesson:review-space-geometry).

::mc
The right prism $ABC.A'B'C'$ has a base that is a right-angled isosceles triangle with the right angle at $A$, $BC=2a$, and the angle between the line $A'B$ and the base is $60^\circ$. The volume of the prism is
A. $a^3\sqrt6$.
B. $\dfrac{a^3\sqrt6}{3}$.
C. $2a^3\sqrt6$.
D. $\dfrac{a^3\sqrt3}{2}$.
::key A
The right-angled isosceles triangle has hypotenuse $2a$, so $AB=AC=a\sqrt2$. The projection of $A'B$ onto the base is $AB$, so $\angle A'BA=60^\circ$:

$$AA'=AB\tan60^\circ=a\sqrt6,\qquad V=\dfrac12\big(a\sqrt2\big)^2\cdot a\sqrt6=a^3\sqrt6.$$

Option B uses the formula for the volume of a pyramid; option C forgets the factor $\dfrac12$ in the area of the triangle; option D takes $AB=a$.

Revise: [Revision: geometry in space](lesson:review-space-geometry).

::mc
The ages of $40$ members of a tai chi club are shown in the table.

| Age | $[40, 50)$ | $[50, 60)$ | $[60, 70)$ | $[70, 80)$ | $[80, 90)$ |
|---|---|---|---|---|---|
| Number of members | $6$ | $10$ | $14$ | $7$ | $3$ |

The median of this grouped data set (to two decimal places) is
A. $65$.
B. $64$.
C. $62.86$.
D. $60$.
::key C
The cumulative frequencies are $6$, $16$, $30$, $37$, $40$; $\dfrac n2=20$ lies in the class $[60, 70)$, and the cumulative frequency before it is $16$:

$$M_e=60+\dfrac{20-16}{14}\cdot10=60+\dfrac{20}{7}\approx62.86.$$

Option A is the midpoint of the class; option B divides by the frequency $10$ of the previous class; option D is the lower boundary of the class.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::mc
Box I contains $3$ white and $2$ black balls; box II contains $2$ white and $4$ black balls. A fair coin is tossed: on heads a ball is drawn at random from box I, on tails from box II. The probability of drawing a white ball is
A. $\dfrac{5}{11}$.
B. $\dfrac{7}{15}$.
C. $\dfrac{1}{5}$.
D. $\dfrac{14}{15}$.
::key B
By the law of total probability, split by the box chosen:

$$P(W)=\dfrac12\cdot\dfrac35+\dfrac12\cdot\dfrac26=\dfrac{3}{10}+\dfrac16=\dfrac{7}{15}.$$

Option A merges the two boxes into one ($5$ white balls out of $11$); option C multiplies $\dfrac35\cdot\dfrac13$; option D forgets to multiply by $\dfrac12$.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::mc
The water level (metres) in a harbour $t$ hours after midnight is modelled by $h(t)=3+2\sin\dfrac{\pi t}{6}$, $0\le t\le24$. In one day, the total time for which the water level is at least $4$ m is
A. $4$ hours.
B. $12$ hours.
C. $8$ hours.
D. $16$ hours.
::key C
Reduce to a basic trigonometric inequality:

$$h(t)\ge4\iff\sin\dfrac{\pi t}{6}\ge\dfrac12\iff\dfrac{\pi}{6}+2k\pi\le\dfrac{\pi t}{6}\le\dfrac{5\pi}{6}+2k\pi\iff1+12k\le t\le5+12k.$$

For $0\le t\le24$ this gives $t\in[1, 5]\cup[13, 17]$, $8$ hours in total. Option A only considers one $12$-hour period; option D solves $\sin\dfrac{\pi t}{6}\ge-\dfrac12$ by mistake (that is, $h\ge2$).

Revise: [Revision: trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).

::tf
Consider the function $f(x)=(x^2-3)e^x$.
a) $f'(x)=(x^2+2x-3)e^x$ for all $x\in\mathbb{R}$.
b) The function has a local maximum at $x=1$.
c) The minimum value of $f(x)$ on $[0, 2]$ is $-2e$.
d) The equation $f(x)=0.3$ has three distinct solutions.
::key T F T F
a) True: $f'(x)=2xe^x+(x^2-3)e^x=(x^2+2x-3)e^x=(x-1)(x+3)e^x$.

b) False: $f'(x)$ changes from $-$ to $+$ at $x=1$, so $x=1$ is a local minimum; the local maximum is at $x=-3$.

c) True: compare $f(0)=-3$, $f(1)=-2e\approx-5.44$, $f(2)=e^2$; the least is $-2e$.

d) False: as $x\to-\infty$, $f(x)\to0$, and $f(x)>0$ for $x<-\sqrt3$; $f$ increases on $(-\infty, -3)$ up to the local maximum $f(-3)=6e^{-3}\approx0.2987<0.3$, then decreases on $(-3, 1)$ and increases on $(1, +\infty)$ from $-2e$ to $+\infty$. So the line $y=0.3$ meets the graph at only one point (on $(1, +\infty)$).

Revise: [Revision: derivatives and graphs of functions](lesson:review-functions-derivatives).

::tf
On a straight road, car A travels at a constant $16$ m/s. At time $t=0$ car A passes car B, which is at rest, and car B starts in the same direction with velocity $v_B(t)=2t$ (m/s) for the first $12$ seconds, then keeps a constant $24$ m/s.
a) In the first $8$ seconds, car B travels $64$ m.
b) Before car B catches up with car A, the greatest distance between them is $64$ m.
c) Car B catches up with car A at time $t=16$ seconds.
d) When car B catches up, each car has travelled $288$ m since $t=0$.
::key T T F T
a) True: $\displaystyle\int_0^8 2t\,dt=\Big[t^2\Big]_0^8=64$.

b) True: for $0\le t\le12$ the distance between them is $16t-t^2$, greatest when the velocities are equal ($2t=16$, $t=8$), and equal to $128-64=64$ m; for $t>12$ car B is faster, so the gap shrinks.

c) False: solving $t^2=16t$ gives $t=16$, but the formula $v_B=2t$ only holds for $t\le12$. For $t>12$ car B has travelled $144+24(t-12)$, so $144+24(t-12)=16t\iff t=18$.

d) True: $16\cdot18=288$ m and $144+24\cdot6=288$ m.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::tf
In the $Oxyz$ coordinate system (units in metres), the floor of a warehouse is the plane $(Oxy)$. A wireless transmitter at $I(1, -2, 3)$ covers the solid ball with centre $I$ and radius $5$ m.
a) The sphere bounding the coverage has equation $(x-1)^2+(y+2)^2+(z-3)^2=25$.
b) The point $A(4, 2, 3)$ is outside the coverage.
c) The covered part of the floor is a disc of radius $4$ m.
d) A robot moves on the floor along the $x$-axis. The distance it travels inside the coverage is $4\sqrt3$ m.
::key T F T T
a) True: the sphere has centre $I(1, -2, 3)$ and radius $5$.

b) False: $IA=\sqrt{3^2+4^2+0^2}=5$, so $A$ lies on the sphere and is still covered.

c) True: the distance from $I$ to the floor is $3$, so the disc has radius $\sqrt{5^2-3^2}=4$ and centre $(1, -2, 0)$.

d) True: on the $x$-axis $y=0$ and $z=0$: $(x-1)^2+4+9\le25\iff(x-1)^2\le12$, so $x$ runs over an interval of length $2\sqrt{12}=4\sqrt3\approx6.93$ m.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::tf
In a company's mailbox, $30\%$ of emails are spam. An automatic filter flags $92\%$ of spam emails and wrongly flags $4\%$ of ordinary emails. An email is chosen at random.
a) The probability that the chosen email is flagged is $0.276$.
b) Given that the email is flagged, the probability that it is spam is greater than $0.9$.
c) Given that the email is not flagged, the probability that it is spam is greater than $0.05$.
d) Every flagged email goes through a second filter with the same rates, working independently of the first filter (for each type of email). Given that an email is flagged by both filters, the probability that it is spam is greater than $0.99$.
::key F T F T
Let $R$ be "the email is spam" and $D$ "the email is flagged".

a) False: $0.276=0.3\cdot0.92$ is only the flagged spam. By the law of total probability, $P(D)=0.3\cdot0.92+0.7\cdot0.04=0.276+0.028=0.304$.

b) True: $P(R\mid D)=\dfrac{0.276}{0.304}\approx0.908>0.9$.

c) False: $P(R\mid\overline D)=\dfrac{0.3\cdot0.08}{1-0.304}=\dfrac{0.024}{0.696}\approx0.034<0.05$.

d) True: the probability of being flagged twice is $0.3\cdot0.92^2=0.25392$ for spam and $0.7\cdot0.04^2=0.00112$ for ordinary email, so the required probability is $\dfrac{0.25392}{0.25392+0.00112}\approx0.9956>0.99$.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::sa
A window frame is a rectangle with a semicircle on top, the diameter of the semicircle being the width of the rectangle. The perimeter of the whole frame (the bottom, the two sides and the arc) is $6$ m. What is the greatest possible area of the window, in square metres (give your answer to two decimal places)?
::key 2.52
Let the radius of the semicircle be $r$ and the height of the rectangle $h$. From the perimeter:

$$2r+2h+\pi r=6\iff h=\dfrac{6-(2+\pi)r}{2}.$$

$$S(r)=2rh+\dfrac{\pi r^2}{2}=6r-\Big(2+\dfrac{\pi}{2}\Big)r^2,\qquad S'(r)=6-(4+\pi)r=0\iff r=\dfrac{6}{4+\pi}.$$

$S$ is a quadratic with negative $r^2$ coefficient, so it is greatest there (and then $h=r>0$): $S_{\max}=3r=\dfrac{18}{4+\pi}\approx2.52$ m$^2$.

Revise: [Revision: optimisation and real-life problems](lesson:review-optimisation-real-life).

::sa
The regular square pyramid $S.ABCD$ has base edge $4$ and height $3$. Find the distance from $A$ to the plane $(SCD)$ (give your answer to two decimal places).
::key 3.33
Let $O$ be the centre of the base and $M$ the midpoint of $CD$. The line $AO$ meets $(SCD)$ at $C$ and $AC=2OC$, so $d\big(A,(SCD)\big)=2\,d\big(O,(SCD)\big)$. In the triangle $SOM$, right-angled at $O$, the distance from $O$ is the altitude:

$$OM=2,\qquad d\big(O,(SCD)\big)=\dfrac{SO\cdot OM}{\sqrt{SO^2+OM^2}}=\dfrac{3\cdot2}{\sqrt{13}}=\dfrac{6}{\sqrt{13}}.$$

So $d\big(A,(SCD)\big)=\dfrac{12}{\sqrt{13}}\approx3.33$.

Revise: [Revision: geometry in space](lesson:review-space-geometry).

::sa
In the $Oxyz$ coordinate system (units in metres), two drones fly in straight lines at constant speeds at the same time. After $t$ seconds the first drone is at $P(2t, t, 10)$ and the second at $Q(20-t, 2t, 4+t)$. What is the least distance between the two drones, in metres (give your answer to two decimal places)?
::key 6.32
The square of the distance is a quadratic in $t$:

$$\overrightarrow{QP}=(3t-20, -t, 6-t),\qquad PQ^2=(3t-20)^2+t^2+(6-t)^2=11t^2-132t+436=11(t-6)^2+40.$$

$PQ^2$ is least, equal to $40$, when $t=6$, so the least distance is $\sqrt{40}=2\sqrt{10}\approx6.32$ m.

Revise: [Revision: coordinates in space](lesson:review-coordinates-space).

::sa
Two fair dice are rolled. Given that the total score is at least $9$, find the probability that at least one die shows a $6$.
::key 0.7
The event "the total is at least $9$" has $10$ outcomes:

$$(3, 6), (6, 3), (4, 5), (5, 4), (4, 6), (6, 4), (5, 5), (5, 6), (6, 5), (6, 6).$$

Of these, $7$ contain a $6$ (all except $(4, 5)$, $(5, 4)$, $(5, 5)$). So the required probability is $\dfrac{7}{10}=0.7$.

Revise: [Revision: statistics and probability](lesson:review-statistics-probability).

::sa
A machine part is the solid of revolution formed by rotating the region bounded by $y=1+\sqrt x$, $y=0$, $x=0$, $x=4$ about the $x$-axis (units on each axis in decimetres). Find the volume of the part (in $\text{dm}^3$, to one decimal place).
::key 71.2
Expand the square so that the standard results apply:

$$V=\pi\int_0^4\big(1+\sqrt x\big)^2dx=\pi\int_0^4\big(1+2\sqrt x+x\big)dx=\pi\Big[x+\dfrac43x^{\frac32}+\dfrac{x^2}{2}\Big]_0^4=\pi\Big(4+\dfrac{32}{3}+8\Big)=\dfrac{68\pi}{3}.$$

So $V\approx71.2\ \text{dm}^3$.

Revise: [Revision: antiderivatives and integrals](lesson:review-integrals).

::sa
At the start of every month, Lan pays $5$ million đồng into a savings account. The interest rate is $0.5\%$ per month, and the interest at the end of each month is added to the balance. After at least how many months (including the interest for the last month) does the balance reach $100$ million đồng or more?
::key 20
After $n$ months the balance is the sum of a geometric sequence with common ratio $q=1.005$:

$$S_n=5\cdot1.005\cdot\dfrac{1.005^n-1}{0.005}=1005\big(1.005^n-1\big).$$

$$S_n\ge100\iff1.005^n\ge1+\dfrac{100}{1005}\iff n\ge\dfrac{\ln\big(1+\frac{100}{1005}\big)}{\ln1.005}\approx19.02.$$

So at least $20$ months are needed (check: $S_{19}\approx99.9$ million, $S_{20}\approx105.4$ million).

Revise: [Revision: trigonometry, exponentials, logarithms and sequences](lesson:review-trig-exp-log-sequences).
:::
