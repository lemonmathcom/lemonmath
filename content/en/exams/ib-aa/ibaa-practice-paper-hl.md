---
title: IB Maths AA HL practice paper
description: A full IB Maths AA HL Paper 2 style practice paper: 120 minutes, graphing calculator, 110 marks, Section A and Section B, with hints and full worked solutions.
minutes: 120
type: exam
---

This practice paper follows the format of IB Mathematics: Analysis and Approaches HL **Paper 2**: 120 minutes, **graphing calculator (GDC) required**, 110 marks, with short questions in Section A and long questions in Section B. All questions are written by Lemonmath; they are not real IB questions, but they follow the HL syllabus and the style of the papers. Together with the [SL practice paper](lesson:ibaa-practice-paper-sl), which has no calculator, it covers both kinds of paper.

| | Section A | Section B |
|---|---|---|
| Questions | 8 short questions | 3 long questions |
| Marks | 50 | 60 |
| Suggested time | about 55 minutes | about 65 minutes |

**Instructions.** Answer all questions. Give answers correct to three significant figures unless a question says otherwise, and keep your GDC in radian mode. When you use the GDC, write down the equation you solve or the integral you evaluate before the result. Each question shows a short hint below it: cover it unless you are stuck, and open the solution only after you have finished.

## Section A

:::exercise [6 marks]
A car is bought for $24{,}000$ dollars. Its value decreases by $15\%$ each year.

a) Find the value of the car after $5$ years, to the nearest dollar. [3 marks]
b) Find the number of complete years after which the value of the car first falls below $5000$ dollars. [3 marks]

::hint
**What you need:** after $n$ years the value is $24{,}000\times0.85^n$; for b), solve $24{,}000\times0.85^n<5000$ with logarithms or a GDC table.

::solution
The value after $n$ years forms a geometric sequence with first value $24{,}000$ and ratio $1-0.15=0.85$, so it is $24{,}000\times0.85^n$ dollars.

a) After $5$ years, the value is
$$24{,}000\times0.85^5\approx10{,}648.93.$$
So the value after $5$ years is $10{,}649$ dollars.

b) We need $24{,}000\times0.85^n<5000$, that is $0.85^n<\dfrac{5}{24}$.

Taking logarithms, and remembering that $\ln0.85<0$ reverses the inequality, we get
$$n>\frac{\ln(5/24)}{\ln0.85}\approx9.65.$$

Check with the GDC: after $9$ years the value is about $5559$ dollars, and after $10$ years it is about $4725$ dollars.

So the value first falls below $5000$ dollars after $10$ complete years.

**Answer.** a) $10{,}649$ dollars; b) $10$ years.
:::

:::exercise [6 marks]
Let $z=1+i$.

a) Write $z$ in the form $re^{i\theta}$ and hence find $z^8$. [3 marks]
b) Find the three solutions of $w^3=z$, giving your answers in the form $re^{i\theta}$ with $-\pi<\theta\le\pi$. [3 marks]

::hint
**What you need:** $|z|=\sqrt2$, $\arg z=\dfrac\pi4$; De Moivre's theorem; the cube roots have modulus $\left(\sqrt2\right)^{1/3}=2^{1/6}$ and arguments $\dfrac{\pi}{12}+\dfrac{2k\pi}{3}$.

::solution
a) The point $(1,1)$ is in the first quadrant, with $|z|=\sqrt{1^2+1^2}=\sqrt2$ and $\arg z=\arctan1=\dfrac\pi4$. So $z=\sqrt2e^{i\pi/4}$.

By De Moivre's theorem,
$$z^8=\left(\sqrt2\right)^8e^{i\cdot8\pi/4}=16e^{2\pi i}=16.$$

So $z=\sqrt2e^{i\pi/4}$ and $z^8=16$.

b) Write $w=re^{i\theta}$. Then $w^3=r^3e^{3i\theta}=\sqrt2e^{i\pi/4}$.

Comparing moduli, $r^3=\sqrt2$, so $r=2^{1/6}$.

Comparing arguments, $3\theta=\dfrac\pi4+2k\pi$, so $\theta=\dfrac{\pi}{12}+\dfrac{2k\pi}{3}$ for $k=0,1,2$, which gives $\dfrac{\pi}{12}$, $\dfrac{3\pi}{4}$ and $\dfrac{17\pi}{12}$.

The last argument is not in $-\pi<\theta\le\pi$, so we replace it by $\dfrac{17\pi}{12}-2\pi=-\dfrac{7\pi}{12}$.

So the solutions are $w=2^{1/6}e^{i\pi/12}$, $w=2^{1/6}e^{3i\pi/4}$ and $w=2^{1/6}e^{-7i\pi/12}$.

**Answer.** a) $z=\sqrt2e^{i\pi/4}$, $z^8=16$; b) $2^{1/6}e^{i\pi/12}$, $2^{1/6}e^{3i\pi/4}$, $2^{1/6}e^{-7i\pi/12}$.
:::

:::exercise [6 marks]
The points $A(1,2,0)$, $B(3,-1,4)$ and $C(0,1,2)$ are given.

a) Find the size of the angle $B\hat AC$. [3 marks]
b) Find the area of triangle $ABC$. [3 marks]

::hint
**What you need:** $\overrightarrow{AB}$, $\overrightarrow{AC}$, the scalar product for the angle and the vector product for the area.

::solution
We first find the two vectors from $A$:
$$\overrightarrow{AB}=\begin{pmatrix}2\\-3\\4\end{pmatrix},\qquad\overrightarrow{AC}=\begin{pmatrix}-1\\-1\\2\end{pmatrix}.$$

a) The scalar product is $\overrightarrow{AB}\cdot\overrightarrow{AC}=-2+3+8=9$, and the lengths are $\left|\overrightarrow{AB}\right|=\sqrt{29}$ and $\left|\overrightarrow{AC}\right|=\sqrt6$.

So
$$\cos B\hat AC=\frac{9}{\sqrt{29}\sqrt6},$$
and therefore $B\hat AC\approx47.0^\circ$.

So the angle $B\hat AC$ is about $47.0^\circ$.

b) The vector product is
$$\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}(-3)(2)-(4)(-1)\\(4)(-1)-(2)(2)\\(2)(-1)-(-3)(-1)\end{pmatrix}=\begin{pmatrix}-2\\-8\\-5\end{pmatrix}.$$

Its length is $\sqrt{4+64+25}=\sqrt{93}$, and the area of the triangle is half of it.

So the area of triangle $ABC$ is $\dfrac{\sqrt{93}}{2}\approx4.82$.

**Answer.** a) $47.0^\circ$; b) $4.82$.
:::

:::exercise [7 marks]
The masses of bags of rice filled by a machine are normally distributed with mean $500$ g and standard deviation $4$ g.

a) Find the probability that a bag has a mass less than $495$ g. [2 marks]
b) $2\%$ of bags have a mass less than $k$ g. Find $k$. [2 marks]
c) A box contains $12$ bags, chosen at random. Find the probability that at least one bag in the box has a mass less than $495$ g. [3 marks]

::hint
**What you need:** $M\sim N\left(500, 4^2\right)$; inverse normal for b); for c), the number of light bags is $B(12,p)$ with $p$ from a).

::solution
Let $M$ be the mass of a bag in grams. Then $M\sim N\left(500, 4^2\right)$.

a) Using the normal cdf on the GDC,
$$P(M<495)\approx0.105649.$$
So the probability is $0.106$.

b) We need $P(M<k)=0.02$. Using the inverse normal on the GDC, $k\approx491.785$.

So $k\approx492$ g.

c) Let $X$ be the number of bags in the box with mass less than $495$ g. The bags are chosen at random, so $X\sim B(12, 0.105649)$.

Then
$$P(X\ge1)=1-P(X=0)=1-(1-0.105649)^{12}\approx0.738.$$

So the probability that at least one bag is lighter than $495$ g is $0.738$.

**Answer.** a) $0.106$; b) $492$ g; c) $0.738$.
:::

:::exercise [6 marks]
The curves $y=e^{x/2}$ and $y=4-x^2$ intersect at two points.

a) Find the $x$-coordinates of the two points of intersection. [2 marks]
b) Find the area of the region enclosed by the two curves. [4 marks]

::hint
**What you need:** solve $e^{x/2}=4-x^2$ on the GDC; between the intersections, the parabola is above the exponential curve.

::solution
a) We solve $e^{x/2}=4-x^2$ by graphing both sides on the GDC. The intersections are at
$$x\approx-1.9009\quad\text{and}\quad x\approx1.4069.$$

So the $x$-coordinates of the intersections are $x\approx-1.90$ and $x\approx1.41$.

b) Testing $x=0$: $4-0^2=4$ and $e^0=1$, so between the intersections the curve $y=4-x^2$ is above $y=e^{x/2}$.

The area is therefore
$$\int_{-1.9009}^{1.4069}\left(4-x^2-e^{x/2}\right)dx\approx6.75.$$

So the area of the enclosed region is $6.75$.

**Answer.** a) $x\approx-1.90$ and $x\approx1.41$; b) $6.75$.
:::

:::exercise [7 marks]
A particle moves in a straight line with velocity $v(t)=3e^{-0.2t}\sin t$ m s⁻¹, for $0\le t\le10$.

a) Find the first time $t>0$ at which the particle is at rest. [2 marks]
b) Find the total distance travelled by the particle. [2 marks]
c) Find the maximum speed of the particle in the first $\pi$ seconds, and the time at which it occurs. [3 marks]

::hint
**What you need:** $v(t)=0$ when $\sin t=0$; distance is $\displaystyle\int_0^{10}|v(t)|\,dt$; for c), solve $v'(t)=0$, which gives $\tan t=5$.

::solution
a) Since $3e^{-0.2t}>0$, the particle is at rest when $\sin t=0$. The first positive solution is $t=\pi$.

So the particle is first at rest at $t=\pi\approx3.14$ s.

b) The distance travelled is the integral of the speed. Using the GDC,
$$\int_0^{10}\left|3e^{-0.2t}\sin t\right|dt\approx8.11.$$
So the particle travels $8.11$ m.

c) For $0<t<\pi$ the velocity is positive. Differentiating with the product rule,
$$v'(t)=3e^{-0.2t}\left(\cos t-0.2\sin t\right).$$

Setting $v'(t)=0$ gives $\cos t=0.2\sin t$, that is $\tan t=5$, so $t=\arctan5\approx1.3734$.

At this time, $v(1.3734)\approx2.24$, and $v$ changes from increasing to decreasing there.

So the maximum speed in the first $\pi$ seconds is $2.24$ m s⁻¹, at $t\approx1.37$ s.

**Answer.** a) $t=\pi$ s; b) $8.11$ m; c) $2.24$ m s⁻¹ at $t\approx1.37$ s.
:::

:::exercise [6 marks]
In the expansion of $(1+ax)^8$, where $a>0$, the coefficient of $x^2$ is $112$.

a) Find the value of $a$. [3 marks]
b) Find the coefficient of $x^3$. [3 marks]

::hint
**What you need:** the term in $x^r$ is $\dbinom8r(ax)^r$.

::solution
a) The term in $x^2$ is $\dbinom82(ax)^2=28a^2x^2$.

So $28a^2=112$, which gives $a^2=4$. Since $a>0$, we get $a=2$.

So $a=2$.

b) The term in $x^3$ is
$$\binom83(2x)^3=56\cdot8x^3=448x^3.$$

So the coefficient of $x^3$ is $448$.

**Answer.** a) $a=2$; b) $448$.
:::

:::exercise [6 marks]
The depth of water in a harbor, in meters, $t$ hours after midnight is modeled by $d(t)=5+3\cos\left(\dfrac{\pi t}{6}\right)$, for $0\le t\le24$.

a) Write down the maximum and minimum depths. [2 marks]
b) A boat can enter the harbor only when the depth is more than $6.5$ m. Find the total time between $t=0$ and $t=12$ during which the boat can enter. [4 marks]

::hint
**What you need:** the cosine takes values from $-1$ to $1$; for b), solve $\cos\left(\dfrac{\pi t}{6}\right)>\dfrac12$ on $[0,12]$.

::solution
a) Since $-1\le\cos\left(\dfrac{\pi t}{6}\right)\le1$, the depth is between $5-3=2$ m and $5+3=8$ m.

So the maximum depth is $8$ m and the minimum depth is $2$ m.

b) We need $5+3\cos\left(\dfrac{\pi t}{6}\right)>6.5$, that is $\cos\left(\dfrac{\pi t}{6}\right)>\dfrac12$.

For $0\le t\le12$, the angle $\dfrac{\pi t}{6}$ runs from $0$ to $2\pi$, and $\cos\theta>\dfrac12$ when $0\le\theta<\dfrac\pi3$ or $\dfrac{5\pi}{3}<\theta\le2\pi$.

This gives $0\le t<2$ or $10<t\le12$, which is $2+2=4$ hours.

So the boat can enter the harbor for a total of $4$ hours between midnight and noon.

**Answer.** a) $8$ m and $2$ m; b) $4$ hours.
:::

## Section B

:::exercise [20 marks]
Let $f(x)=xe^{-x}$, for $x\ge0$.

a) Find $f'(x)$. [2 marks]
b) Find the exact coordinates of the maximum point of the graph of $f$. [3 marks]
c) Show that $f''(x)=(x-2)e^{-x}$, and find the exact coordinates of the point of inflection. [3 marks]
d) Find the exact area of the region bounded by the graph of $f$, the $x$-axis and the line $x=3$. [4 marks]
e) The region in d) is rotated through $2\pi$ about the $x$-axis. Find the volume of the solid formed. [3 marks]
f) Find the Maclaurin series of $f(x)$ up to the term in $x^3$. [3 marks]
g) Use your answer to f) to approximate $f(0.1)$, and compare it with the exact value. [2 marks]

::hint
**What you need:** the product rule; integration by parts with $u=x$, $dv=e^{-x}dx$; $V=\pi\displaystyle\int y^2\,dx$; multiply $x$ by the series of $e^{-x}$.

::solution
a) By the product rule,
$$f'(x)=e^{-x}+x\left(-e^{-x}\right)=(1-x)e^{-x}.$$

So $f'(x)=(1-x)e^{-x}$.

b) Since $e^{-x}>0$, $f'(x)=0$ only when $x=1$. Also $f'(x)>0$ for $0\le x<1$ and $f'(x)<0$ for $x>1$, so $f$ has a maximum at $x=1$.

The maximum value is $f(1)=e^{-1}$.

So the maximum point is $\left(1,\dfrac1e\right)$.

c) Differentiating $f'(x)=(1-x)e^{-x}$ with the product rule,
$$f''(x)=-e^{-x}-(1-x)e^{-x}=(x-2)e^{-x}.$$

$f''(x)=0$ when $x=2$, and $f''$ changes from negative to positive there, so there is a point of inflection at $x=2$, where $f(2)=2e^{-2}$.

So the point of inflection is $\left(2,\dfrac{2}{e^2}\right)$.

d) Since $f(x)\ge0$ on $[0,3]$, the area is $\displaystyle\int_0^3xe^{-x}\,dx$.

Integrating by parts with $u=x$ and $dv=e^{-x}dx$, so that $du=dx$ and $v=-e^{-x}$:
$$\int_0^3xe^{-x}\,dx=\Big[-xe^{-x}\Big]_0^3+\int_0^3e^{-x}\,dx=-3e^{-3}+\Big[-e^{-x}\Big]_0^3=-3e^{-3}-e^{-3}+1.$$

So the area is $1-4e^{-3}\approx0.801$.

e) The volume of revolution is
$$V=\pi\int_0^3\left(xe^{-x}\right)^2dx=\pi\int_0^3x^2e^{-2x}\,dx\approx0.737.$$

So the volume is $0.737$ cubic units.

f) Since $e^{-x}=1-x+\dfrac{x^2}{2}-\dots$, we have
$$f(x)=x\left(1-x+\frac{x^2}{2}-\dots\right)=x-x^2+\frac{x^3}{2}-\dots$$

So the Maclaurin series up to the term in $x^3$ is $x-x^2+\dfrac{x^3}{2}$.

g) Substituting $x=0.1$: $0.1-0.01+0.0005=0.0905$.

The exact value is $f(0.1)=0.1e^{-0.1}\approx0.0904837$, so the approximation differs from it by about $0.00002$.

So $f(0.1)\approx0.0905$, a very good approximation because $x=0.1$ is close to $0$.

**Answer.** a) $(1-x)e^{-x}$; b) $\left(1,\dfrac1e\right)$; c) $\left(2,\dfrac{2}{e^2}\right)$; d) $1-4e^{-3}$; e) $0.737$; f) $x-x^2+\dfrac{x^3}{2}$; g) $0.0905$.
:::

:::exercise [20 marks]
The plane $\Pi$ has equation $2x-y+2z=6$. The line $L$ has equation $\boldsymbol r=\begin{pmatrix}1\\0\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$, and $P(1,0,3)$ is a point on $L$.

a) Find the coordinates of the point where $L$ meets $\Pi$. [4 marks]
b) Find the acute angle between $L$ and $\Pi$. [4 marks]
c) Find the distance from $P$ to $\Pi$. [3 marks]
d) Find the coordinates of the foot of the perpendicular from $P$ to $\Pi$. [5 marks]
e) Find the coordinates of the reflection of $P$ in $\Pi$. [4 marks]

::hint
**What you need:** a general point of $L$ is $(1+\lambda,2\lambda,3-\lambda)$; the normal of $\Pi$ is $\boldsymbol n=\begin{pmatrix}2\\-1\\2\end{pmatrix}$; the angle with a plane uses sine; the perpendicular from $P$ follows $\boldsymbol n$.

::solution
The normal vector of $\Pi$ is $\boldsymbol n=\begin{pmatrix}2\\-1\\2\end{pmatrix}$, with $|\boldsymbol n|=3$, and the direction of $L$ is $\boldsymbol d=\begin{pmatrix}1\\2\\-1\end{pmatrix}$, with $|\boldsymbol d|=\sqrt6$.

a) A general point of $L$ is $(1+\lambda,2\lambda,3-\lambda)$. Substituting into the equation of $\Pi$:
$$2(1+\lambda)-2\lambda+2(3-\lambda)=6,$$
that is $8-2\lambda=6$, so $\lambda=1$.

So $L$ meets $\Pi$ at the point $(2,2,2)$. Check: $4-2+4=6$.

b) We have $\boldsymbol n\cdot\boldsymbol d=2-2-2=-2$. The angle $\varphi$ between a line and a plane satisfies
$$\sin\varphi=\frac{|\boldsymbol n\cdot\boldsymbol d|}{|\boldsymbol n||\boldsymbol d|}=\frac{2}{3\sqrt6}.$$

So the acute angle between $L$ and $\Pi$ is $\varphi\approx15.8^\circ$.

c) The distance from $P(1,0,3)$ to the plane $2x-y+2z-6=0$ is
$$\frac{|2(1)-0+2(3)-6|}{|\boldsymbol n|}=\frac{2}{3}.$$

So the distance from $P$ to $\Pi$ is $\dfrac23$.

d) The line through $P$ perpendicular to $\Pi$ has direction $\boldsymbol n$, so its points are $(1+2t,-t,3+2t)$. Substituting into the equation of $\Pi$:
$$2(1+2t)+t+2(3+2t)=6,$$
that is $9t+8=6$, so $t=-\dfrac29$.

So the foot of the perpendicular is $\left(\dfrac59,\dfrac29,\dfrac{23}{9}\right)$. Check: its distance from $P$ is $\dfrac29|\boldsymbol n|=\dfrac23$, as in c).

e) The reflection $P'$ is twice as far along the same perpendicular, at $t=-\dfrac49$:
$$P'=\left(1-\frac89,\ \frac49,\ 3-\frac89\right).$$

So the reflection of $P$ in $\Pi$ is $\left(\dfrac19,\dfrac49,\dfrac{19}{9}\right)$.

**Answer.** a) $(2,2,2)$; b) $15.8^\circ$; c) $\dfrac23$; d) $\left(\dfrac59,\dfrac29,\dfrac{23}{9}\right)$; e) $\left(\dfrac19,\dfrac49,\dfrac{19}{9}\right)$.
:::

:::exercise [20 marks]
A population of fish in a lake is modeled by the differential equation
$$\frac{dP}{dt}=0.1P\left(1-\frac{P}{1000}\right),$$
where $t$ is the time in years and $P(0)=100$.

a) Show that $P=\dfrac{1000}{1+9e^{-0.1t}}$. [7 marks]
b) Find the population after $10$ years. [2 marks]
c) Find the time when the population reaches $500$. [3 marks]
d) Use Euler's method with step $h=5$ to estimate $P(10)$. [4 marks]
e) Explain why the estimate in d) is less than the value in b). [2 marks]
f) Write down $\displaystyle\lim_{t\to\infty}P$ and interpret it. [2 marks]

::hint
**What you need:** separate the variables and use $\dfrac{1000}{P(1000-P)}=\dfrac1P+\dfrac{1}{1000-P}$; for e), the solution curve is concave up while $P<500$.

::solution
a) Write the equation as $\dfrac{dP}{dt}=\dfrac{P(1000-P)}{10{,}000}$ and separate the variables:
$$\int\frac{1000}{P(1000-P)}\,dP=\int0.1\,dt.$$

Using partial fractions, $\dfrac{1000}{P(1000-P)}=\dfrac1P+\dfrac{1}{1000-P}$, so
$$\ln P-\ln(1000-P)=0.1t+C\qquad(0<P<1000).$$

At $t=0$, $P=100$, so $C=\ln\dfrac{100}{900}=-\ln9$.

Therefore $\ln\dfrac{P}{1000-P}=0.1t-\ln9$, which gives $\dfrac{P}{1000-P}=\dfrac{e^{0.1t}}{9}$.

Solving for $P$: $9P=e^{0.1t}(1000-P)$, so $P\left(9+e^{0.1t}\right)=1000e^{0.1t}$, and dividing by $e^{0.1t}$,
$$P=\frac{1000}{1+9e^{-0.1t}}.$$

So the solution is $P=\dfrac{1000}{1+9e^{-0.1t}}$.

b) Substituting $t=10$:
$$P(10)=\frac{1000}{1+9e^{-1}}\approx231.97.$$

So the population after $10$ years is about $232$ fish.

c) We need $\dfrac{1000}{1+9e^{-0.1t}}=500$, that is $1+9e^{-0.1t}=2$, so $e^{-0.1t}=\dfrac19$.

Taking logarithms, $t=10\ln9\approx21.97$.

So the population reaches $500$ after about $22.0$ years.

d) With $h=5$ and $\dfrac{dP}{dt}=0.1P\left(1-\dfrac{P}{1000}\right)$:

At $t=0$: $P_1=100+5\times0.1\times100\times0.9=145$.

At $t=5$: $P_2=145+5\times0.1\times145\times0.855\approx206.99$.

So Euler's method estimates $P(10)\approx207$ fish.

e) While $P<500$, the rate $\dfrac{dP}{dt}$ increases as $P$ increases, so the solution curve is concave up. Each Euler step follows a tangent line, which lies below a concave-up curve.

So Euler's method underestimates the population here: $207<232$.

f) As $t\to\infty$, $e^{-0.1t}\to0$, so $P\to1000$.

So in the long run the population approaches $1000$ fish, the carrying capacity of the lake.

**Answer.** b) $232$ fish; c) $22.0$ years; d) $207$ fish; f) $1000$.
:::

## After the paper

Add up your marks out of 110, part by part: in IB marking, method marks still count when an answer is wrong, and follow-through marks are given when you use a wrong earlier answer correctly. Grade boundaries change from session to session, so use the score to find weak topics. For lost marks, revise: [Number and algebra](lesson:ibaa-number-algebra) (questions 1, 7), [Complex numbers, induction and proof](lesson:ibaa-hl-complex-proof) (question 2), [Vectors, lines and planes](lesson:ibaa-hl-vectors) (questions 3, 10), [Statistics and probability](lesson:ibaa-statistics-probability) (question 4), [Calculus](lesson:ibaa-calculus) (questions 5, 6, 9), [Geometry and trigonometry](lesson:ibaa-geometry-trigonometry) (question 8), [Further calculus](lesson:ibaa-hl-further-calculus) (questions 9, 11).
