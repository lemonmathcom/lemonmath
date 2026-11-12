---
title: Practice Paper 4 (calculator)
description: "An IGCSE Mathematics Extended Paper 4 style practice paper: 2 hours, scientific calculator, 100 marks, 11 longer structured questions with worked solutions."
minutes: 120
type: exam
---

Paper 4 asks for something different from Paper 2. The calculator removes most of the arithmetic, and in its place come longer questions, each built around one situation: an investment, a triangle, a water container. Every part leads to the next. Doing well here means keeping your head through a whole page, and that is a skill you can only practise by doing it.

This paper follows the format of Cambridge IGCSE Mathematics (0580) Extended **Paper 4**: 2 hours, **scientific calculator**, 100 marks, with the number of marks shown after each part. All questions are written by Lemonmath; they are not real Cambridge questions, but they follow the Extended syllabus and the style of the papers.

**Instructions.** Answer all questions. Show your working, including what you enter into the calculator: a correct answer with no working may not receive full marks. Unless a question says otherwise, give answers that are not exact to $3$ significant figures, angles to $1$ decimal place, and money to the nearest cent. Use the $\pi$ button on your calculator. Each question has a short hint: cover it unless you are stuck, and open the solution only when you have finished.

:::exercise [8 marks]
(a) Lan invests $5000$ dollars at $3.5\%$ per year compound interest. Find the value of the investment after $6$ years. [2 marks]
(b) Find the number of complete years before the value of Lan's investment first exceeds $8000$ dollars. [3 marks]
(c) A car loses $12\%$ of its value each year. It is now worth $18{,}000$ dollars. Find its value $3$ years ago, correct to the nearest hundred dollars. [3 marks]

::hint
**What you need:** compound growth multiplies by $1.035$ each year; a $12\%$ loss multiplies by $0.88$, so going back means dividing.

::solution
(a) $5000\times1.035^6\approx6146.28$ dollars.

(b) We need $5000\times1.035^n>8000$, that is $1.035^n>1.6$. Trying values: $1.035^{13}\approx1.564$ and $1.035^{14}\approx1.619$. So the value first exceeds $8000$ dollars after $14$ years.

(c) If the value $3$ years ago was $V$, then $V\times0.88^3=18{,}000$, so $V=\dfrac{18{,}000}{0.88^3}\approx26{,}413$ dollars.

So the investment is worth $6146.28$ dollars after $6$ years, it takes $14$ years to pass $8000$ dollars, and the car was worth about $26{,}400$ dollars.
:::

:::exercise [9 marks]
In triangle $ABC$, $AB=9$ cm, $AC=14$ cm and angle $BAC=48^\circ$.

(a) Calculate $BC$. [3 marks]
(b) Calculate the area of triangle $ABC$. [2 marks]
(c) Calculate angle $ABC$. [3 marks]
(d) Calculate the shortest distance from $B$ to the line $AC$. [1 mark]

::hint
**What you need:** cosine rule for (a) and (c); area $=\tfrac12ab\sin C$; the shortest distance is the height when $AC$ is the base.

::solution
(a) By the cosine rule, $BC^2=9^2+14^2-2\times9\times14\cos48^\circ\approx277-168.62=108.38$, so $BC\approx10.4$ cm ($10.41$ cm).

(b) Area $=\tfrac12\times9\times14\times\sin48^\circ\approx46.8\text{ cm}^2$.

(c) Rearranging the cosine rule, $\cos B=\dfrac{9^2+10.41^2-14^2}{2\times9\times10.41}\approx-0.0353$, so angle $ABC\approx92.0^\circ$. The cosine rule is safer than the sine rule here, because the angle turns out to be obtuse.

(d) Using $AC$ as the base, $\tfrac12\times14\times h=46.82$, so $h\approx6.69$ cm.

So $BC\approx10.4$ cm, the area is about $46.8\text{ cm}^2$, angle $ABC\approx92.0^\circ$ and the distance is about $6.69$ cm.
:::

:::exercise [9 marks]
(a) Solve $x^2-4x-2=0$, giving your answers correct to $2$ decimal places. [3 marks]
(b) Write $x^2-4x-2$ in the form $(x-a)^2-b$, and write down the coordinates of the turning point of $y=x^2-4x-2$. [2 marks]
(c) Find the coordinates of the points where the line $y=2x-7$ meets the curve $y=x^2-4x-2$. [4 marks]

::hint
**What you need:** the quadratic formula; at the intersection the two expressions for $y$ are equal.

::solution
(a) $x=\dfrac{4\pm\sqrt{16+8}}{2}=2\pm\sqrt6$, so $x\approx4.45$ or $x\approx-0.45$.

(b) $(x-2)^2=x^2-4x+4$, so $x^2-4x-2=(x-2)^2-6$, and the turning point is $(2,\ -6)$.

(c) Setting $x^2-4x-2=2x-7$ gives $x^2-6x+5=0$, that is $(x-1)(x-5)=0$, so $x=1$ or $x=5$. Then $y=2(1)-7=-5$ and $y=2(5)-7=3$.

So the solutions are $4.45$ and $-0.45$, the turning point is $(2,\ -6)$, and the line meets the curve at $(1,\ -5)$ and $(5,\ 3)$.
:::

:::exercise [10 marks]
The heights, $h$ cm, of $50$ students are grouped below.

| Height $h$ | $140<h\le150$ | $150<h\le160$ | $160<h\le170$ | $170<h\le180$ |
|---|---|---|---|---|
| Frequency | $6$ | $14$ | $22$ | $8$ |

(a) Calculate an estimate of the mean height. [4 marks]
(b) Write down the cumulative frequencies. [1 mark]
(c) Estimate the median height, assuming heights are spread evenly within each class. [2 marks]
(d) Two students are chosen at random. Find the probability that both are taller than $170$ cm. [3 marks]

::hint
**What you need:** midpoints $145$, $155$, $165$, $175$; the median is at a cumulative frequency of $25$; the second choice is without replacement.

::solution
(a) $6\times145+14\times155+22\times165+8\times175=870+2170+3630+1400=8070$, so the estimated mean is $\dfrac{8070}{50}=161.4$ cm.

(b) The cumulative frequencies are $6$, $20$, $42$, $50$.

(c) The $25$th student is $5$ students into the class $160<h\le170$, which has $22$ students. So the median is about $160+\dfrac{5}{22}\times10\approx162$ cm.

(d) $\dfrac{8}{50}\times\dfrac{7}{49}=\dfrac{56}{2450}=\dfrac{4}{175}\approx0.0229$.

So the mean is about $161.4$ cm, the median about $162$ cm, and the probability is $\dfrac{4}{175}$.
:::

:::exercise [9 marks]
A closed cylindrical container has radius $12$ cm and height $30$ cm.

(a) Calculate the volume of the container. [2 marks]
(b) Write the capacity in litres. [1 mark]
(c) The container is full of water. All the water is poured into a cuboid tank with a base $40$ cm by $25$ cm. Find the depth of the water in the tank. [2 marks]
(d) A sphere has the same volume as the container. Find its radius. [2 marks]
(e) Calculate the curved surface area of the container. [2 marks]

::hint
**What you need:** $V=\pi r^2h$; $1$ litre $=1000\text{ cm}^3$; $V_{\text{sphere}}=\tfrac43\pi r^3$; curved surface $=2\pi rh$.

::solution
(a) $V=\pi\times12^2\times30=4320\pi\approx13{,}600\text{ cm}^3$ ($13{,}571.7\text{ cm}^3$).

(b) $13{,}571.7\div1000\approx13.6$ litres.

(c) The water keeps its volume: $40\times25\times d=13{,}571.7$, so $d\approx13.6$ cm.

(d) $\tfrac43\pi r^3=4320\pi$ gives $r^3=3240$, so $r=\sqrt[3]{3240}\approx14.8$ cm.

(e) $2\pi\times12\times30=720\pi\approx2260\text{ cm}^2$.

So the volume is about $13{,}600\text{ cm}^3$, or $13.6$ litres; the depth is about $13.6$ cm; the sphere has radius about $14.8$ cm; and the curved surface area is about $2260\text{ cm}^2$.
:::

:::exercise [9 marks]
(a) Solve $3x^2+5x-7=0$, giving your answers correct to $2$ decimal places. [3 marks]
(b) Solve $\dfrac{4}{x+1}+\dfrac{3}{x-2}=2$, giving your answers correct to $2$ decimal places. [4 marks]
(c) Expand and simplify $(x+3)(x-1)(2x+1)$. [2 marks]

::hint
**What you need:** the quadratic formula; multiply the equation in (b) by $(x+1)(x-2)$.

::solution
(a) $x=\dfrac{-5\pm\sqrt{25+84}}{6}=\dfrac{-5\pm\sqrt{109}}{6}$, so $x\approx0.91$ or $x\approx-2.57$.

(b) Multiplying by $(x+1)(x-2)$: $4(x-2)+3(x+1)=2(x+1)(x-2)$, that is $7x-5=2x^2-2x-4$, so $2x^2-9x+1=0$. Then $x=\dfrac{9\pm\sqrt{73}}{4}$, so $x\approx4.39$ or $x\approx0.11$.

(c) $(x+3)(x-1)=x^2+2x-3$, and $(x^2+2x-3)(2x+1)=2x^3+x^2+4x^2+2x-6x-3=2x^3+5x^2-4x-3$.

So the answers are $0.91$ and $-2.57$; $4.39$ and $0.11$; and $2x^3+5x^2-4x-3$.
:::

:::exercise [9 marks]
$f(x)=3x+2$, $g(x)=x^2$ and $h(x)=\dfrac{1}{x-1}$, $x\ne1$.

(a) Find $fg(-2)$. [1 mark]
(b) Find $gf(x)$. [1 mark]
(c) Find $f^{-1}(x)$. [2 marks]
(d) Solve $f(x)=g(x)$, giving your answers correct to $2$ decimal places. [3 marks]
(e) Explain why $x=1$ is excluded from the domain of $h$. [1 mark]
(f) Find $hf(1)$. [1 mark]

::hint
**What you need:** apply the inner function first; for $f^{-1}$, swap the roles of $x$ and $y$.

::solution
(a) $g(-2)=4$, then $f(4)=14$.

(b) $gf(x)=(3x+2)^2$.

(c) From $y=3x+2$, $x=\dfrac{y-2}{3}$, so $f^{-1}(x)=\dfrac{x-2}{3}$.

(d) $3x+2=x^2$ gives $x^2-3x-2=0$, so $x=\dfrac{3\pm\sqrt{17}}{2}$, that is $x\approx3.56$ or $x\approx-0.56$.

(e) When $x=1$ the denominator $x-1$ is $0$, and division by zero is not defined.

(f) $f(1)=5$, then $h(5)=\dfrac{1}{4}$.

So $fg(-2)=14$, $gf(x)=(3x+2)^2$, $f^{-1}(x)=\dfrac{x-2}{3}$, $x\approx3.56$ or $-0.56$, and $hf(1)=\dfrac14$.
:::

:::exercise [9 marks]
$A$ is the point $(1,\ 2)$, $B$ is $(7,\ 5)$ and $C$ is $(4,\ 11)$.

(a) Write $\overrightarrow{AB}$ as a column vector. [1 mark]
(b) Find $|\overrightarrow{AB}|$. [2 marks]
(c) Find the gradient of $AB$. [1 mark]
(d) $M$ is the midpoint of $BC$. Find the coordinates of $M$ and the length $AM$. [3 marks]
(e) $ABCD$ is a parallelogram. Find the coordinates of $D$. [2 marks]

::hint
**What you need:** in a parallelogram $ABCD$, $\overrightarrow{AD}=\overrightarrow{BC}$.

::solution
(a) $\overrightarrow{AB}=\begin{pmatrix}6\\3\end{pmatrix}$.

(b) $|\overrightarrow{AB}|=\sqrt{36+9}=\sqrt{45}\approx6.71$.

(c) Gradient $=\dfrac36=0.5$.

(d) $M=\left(\dfrac{7+4}{2},\ \dfrac{5+11}{2}\right)=(5.5,\ 8)$, so $\overrightarrow{AM}=\begin{pmatrix}4.5\\6\end{pmatrix}$ and $AM=\sqrt{4.5^2+6^2}=\sqrt{56.25}=7.5$.

(e) $\overrightarrow{BC}=\begin{pmatrix}-3\\6\end{pmatrix}$, and $\overrightarrow{AD}=\overrightarrow{BC}$, so $D=(1-3,\ 2+6)=(-2,\ 8)$.

So $|\overrightarrow{AB}|\approx6.71$, the gradient is $0.5$, $M=(5.5,\ 8)$, $AM=7.5$ and $D=(-2,\ 8)$.
:::

:::exercise [9 marks]
A sector of a circle has radius $15$ cm and angle $72^\circ$.

(a) Calculate the perimeter of the sector. [3 marks]
(b) Calculate the area of the sector. [2 marks]
(c) The sector is folded so that its two straight edges meet, forming a cone. Find the radius and the height of the cone. [2 marks]
(d) Find the volume of the cone. [2 marks]

::hint
**What you need:** the arc becomes the circumference of the base; the radius of the sector becomes the slant height.

::solution
(a) Arc length $=\dfrac{72}{360}\times2\pi\times15=6\pi\approx18.85$ cm. The perimeter adds the two radii: $18.85+30\approx48.8$ cm.

(b) Area $=\dfrac{72}{360}\times\pi\times15^2=45\pi\approx141\text{ cm}^2$.

(c) $2\pi r=6\pi$ gives $r=3$ cm. The slant height is $15$ cm, so $h=\sqrt{15^2-3^2}=\sqrt{216}\approx14.7$ cm.

(d) $V=\tfrac13\pi\times3^2\times\sqrt{216}\approx139\text{ cm}^3$.

So the perimeter is about $48.8$ cm, the area about $141\text{ cm}^2$, the cone has radius $3$ cm and height about $14.7$ cm, and its volume is about $139\text{ cm}^3$.
:::

:::exercise [10 marks]
A curve has equation $y=x^3-6x^2+9x+1$.

(a) Find $\dfrac{\mathrm{d}y}{\mathrm{d}x}$. [2 marks]
(b) Find the coordinates of the stationary points. [4 marks]
(c) Determine whether each stationary point is a maximum or a minimum. [2 marks]
(d) Find the equation of the tangent to the curve at the point where $x=4$. [2 marks]

::hint
**What you need:** solve $\dfrac{\mathrm{d}y}{\mathrm{d}x}=0$; check the sign of the gradient on each side; the tangent has the gradient of the curve at that point.

::solution
(a) $\dfrac{\mathrm{d}y}{\mathrm{d}x}=3x^2-12x+9$.

(b) $3x^2-12x+9=3(x-1)(x-3)=0$ gives $x=1$ or $x=3$. Then $y=1-6+9+1=5$ and $y=27-54+27+1=1$. The stationary points are $(1,\ 5)$ and $(3,\ 1)$.

(c) At $x=0$ the gradient is $9>0$, at $x=2$ it is $-3<0$, and at $x=4$ it is $9>0$. So $(1,\ 5)$ is a maximum and $(3,\ 1)$ is a minimum.

(d) At $x=4$, $y=64-96+36+1=5$ and the gradient is $9$. The tangent is $y-5=9(x-4)$, that is $y=9x-31$.

So the curve has a maximum at $(1,\ 5)$ and a minimum at $(3,\ 1)$, and the tangent at $x=4$ is $y=9x-31$.
:::

:::exercise [9 marks]
(a) A population of bacteria is $500$ and increases by $8\%$ every hour. Find the population after $10$ hours, to the nearest whole number. [2 marks]
(b) Find the first whole number of hours after which the population is more than $1000$. [2 marks]
(c) Find the $n$th term of the sequence $3,\ 12,\ 27,\ 48,\ \dots$ [2 marks]
(d) $y$ is directly proportional to the cube root of $x$. When $x=8$, $y=6$. Find $x$ when $y=12$. [3 marks]

::hint
**What you need:** growth by $8\%$ multiplies by $1.08$; compare the sequence with the square numbers; $y=k\sqrt[3]{x}$.

::solution
(a) $500\times1.08^{10}\approx1079$.

(b) $500\times1.08^9\approx999.5$, which is still less than $1000$, while $500\times1.08^{10}\approx1079$. So the first whole number of hours is $10$.

(c) The terms are $3\times1,\ 3\times4,\ 3\times9,\ 3\times16$, so the $n$th term is $3n^2$.

(d) $6=k\sqrt[3]{8}=2k$, so $k=3$ and $y=3\sqrt[3]{x}$. When $y=12$, $\sqrt[3]{x}=4$, so $x=64$.

So the population is about $1079$, it first passes $1000$ after $10$ hours, the $n$th term is $3n^2$ and $x=64$.
:::

## After the paper

Add up your marks out of $100$, part by part, as an examiner would: method marks still count after an early slip, so do not cross out working that might earn them. Grade thresholds change from session to session, so use the score to find weak topics rather than to predict a grade.

For every lost mark, go back to the matching lesson: [Number](lesson:igcse-number) (questions 1 and 11), [Algebra and graphs](lesson:igcse-algebra-graphs) (questions 3, 6, 7, 10 and 11), [Coordinate geometry](lesson:igcse-coordinate-geometry) (question 8), [Mensuration](lesson:igcse-mensuration) (questions 5 and 9), [Trigonometry](lesson:igcse-trigonometry) (question 2), [Transformations and vectors](lesson:igcse-transformations-vectors) (question 8), [Probability and statistics](lesson:igcse-probability-statistics) (question 4). Then ask yourself one more question: where did the time go? On Paper 4 the long questions reward steady reading, and the last two parts of a question are often easier than they look.
