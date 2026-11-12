---
title: IB Maths AI SL practice paper
description: A full IB Maths AI SL Paper 1 style practice paper: 90 minutes, graphing calculator, 80 marks, twelve short questions with hints and worked solutions.
minutes: 90
type: exam
---

The best rehearsal for an exam is an exam. Sit this paper in one go, with a timer and your GDC, and you will learn more about your timing and your habits than from another evening of revision notes. It follows the format of IB Mathematics: Applications and Interpretation SL **Paper 1**: 90 minutes, a **graphing calculator** for every question, 80 marks, twelve short questions across all five topics. All questions are written by Lemonmath; they are not real IB questions, but they follow the syllabus and the style of the papers, including the [n marks] after each part.

**Instructions.** Answer all questions. Show your working, including the equations you solve or the values you enter in the GDC: a correct answer without working may not receive full marks. Give answers to three significant figures, and money to two decimal places, unless a question says otherwise. Each question has a short hint below it: cover it unless you are stuck, and open the solution only when you have finished.

:::exercise [7 marks]
The speed of light is $299{,}792{,}458$ m/s, and the mean distance from the Sun to the Earth is $1.496\times10^{11}$ m.

(a) Write the speed of light in the form $a\times10^k$, where $1\le a<10$, correct to three significant figures. [2 marks]
(b) Find the time, in seconds, that light takes to travel from the Sun to the Earth, using the exact speed. [2 marks]
(c) A student uses $3\times10^8$ m/s for the speed of light. Find the percentage error in the student's time. [3 marks]

::hint
**What you need:** time $=\dfrac{\text{distance}}{\text{speed}}$; percentage error $=\left|\dfrac{v_A-v_E}{v_E}\right|\times100\%$.

::solution
(a) To three significant figures, $299{,}792{,}458\approx300{,}000{,}000=3.00\times10^8$ m/s.

(b) $t=\dfrac{1.496\times10^{11}}{299{,}792{,}458}\approx499$ s ($499.01$ s).

(c) The student's time is $\dfrac{1.496\times10^{11}}{3\times10^8}\approx498.67$ s. The percentage error is $\left|\dfrac{498.67-499.01}{499.01}\right|\times100\%\approx0.0692\%$.

So the answers are $3.00\times10^8$ m/s, $499$ s and about $0.0692\%$.
:::

:::exercise [7 marks]
In a theatre, the first row has $20$ seats and each row after that has $3$ more seats than the row in front. There are $25$ rows.

(a) Find the number of seats in the last row. [2 marks]
(b) Find the total number of seats in the theatre. [2 marks]
(c) Find the first row that has more than $60$ seats. [3 marks]

::hint
**What you need:** an arithmetic sequence with $u_1=20$ and $d=3$.

::solution
(a) $u_{25}=20+24(3)=92$ seats.

(b) $S_{25}=\dfrac{25}{2}(20+92)=1400$ seats.

(c) We need $20+3(n-1)>60$, that is $3(n-1)>40$, so $n-1>13.3$ and $n>14.3$. The first such row is row $15$, which has $20+14(3)=62$ seats (row $14$ has $59$).

So the last row has $92$ seats, the theatre has $1400$ seats, and row $15$ is the first with more than $60$ seats.
:::

:::exercise [7 marks]
Nam invests $8000$ dollars in an account paying $3.5\%$ per year, compounded quarterly.

(a) Find the value of the investment after $6$ years. [3 marks]
(b) Find the number of complete years after which the value first exceeds $12{,}000$ dollars. [2 marks]
(c) Inflation is $2\%$ per year. Find the real value, in today's money, of the amount in (a). [2 marks]

::hint
**What you need:** $FV=PV\left(1+\dfrac{r}{100k}\right)^{kn}$, or the TVM solver with $C/Y=4$.

::solution
(a) With $N=24$, $I\%=3.5$, $PV=-8000$, $PMT=0$ and $P/Y=C/Y=4$, or by the formula $8000\left(1+\dfrac{3.5}{400}\right)^{24}$, the value is $9860.41$ dollars.

(b) After $11$ years the value is $8000\left(1.00875\right)^{44}\approx11{,}737.24$ dollars, and after $12$ years it is $8000\left(1.00875\right)^{48}\approx12{,}153.47$ dollars. So it first exceeds $12{,}000$ dollars after $12$ years.

(c) The real value is $\dfrac{9860.41}{1.02^6}\approx8755.77$ dollars.

So the investment is worth $9860.41$ dollars after $6$ years, first exceeds $12{,}000$ dollars after $12$ years, and has a real value of about $8755.77$ dollars.
:::

:::exercise [5 marks]
A laptop is bought for $1500$ dollars and loses $25\%$ of its value each year.

(a) Find its value after $3$ years. [2 marks]
(b) After how many complete years is its value first less than $300$ dollars? [3 marks]

::hint
**What you need:** value after $n$ years $=1500(0.75)^n$.

::solution
(a) $1500(0.75)^3=632.81$ dollars.

(b) We need $1500(0.75)^n<300$, that is $0.75^n<0.2$, so $n>\dfrac{\ln0.2}{\ln0.75}\approx5.59$. Checking: after $5$ years the value is $355.96$ dollars and after $6$ years $266.97$ dollars.

So the laptop is worth $632.81$ dollars after $3$ years, and first worth less than $300$ dollars after $6$ years.
:::

:::exercise [6 marks]
A plumber's charge $C$ dollars for a job of $h$ hours follows a linear model. A $3$-hour job costs $210$ dollars and a $5$-hour job costs $300$ dollars.

(a) Find the equation of the model in the form $C=mh+c$. [3 marks]
(b) Interpret the value of $m$ in context. [1 mark]
(c) Find the length of a job that costs $480$ dollars. [2 marks]

::hint
**What you need:** $m=\dfrac{300-210}{5-3}$.

::solution
(a) $m=\dfrac{300-210}{5-3}=45$. Substituting $(3,\ 210)$: $210=135+c$, so $c=75$, and $C=45h+75$.

(b) The plumber charges $45$ dollars for each hour of work.

(c) $45h+75=480$ gives $45h=405$, so $h=9$ hours.

So $C=45h+75$, the rate is $45$ dollars per hour, and a $480$-dollar job takes $9$ hours.
:::

:::exercise [7 marks]
A ball is thrown so that its height in metres after $t$ seconds is $h(t)=-4.9t^2+14t+1.2$.

(a) Write down the height from which the ball is thrown. [1 mark]
(b) Find the maximum height and the time at which it occurs. [3 marks]
(c) Find the time at which the ball hits the ground. [3 marks]

::hint
**What you need:** the vertex is at $t=-\dfrac{b}{2a}$; solve $h(t)=0$ with the GDC.

::solution
(a) $h(0)=1.2$ m.

(b) The vertex is at $t=-\dfrac{14}{2(-4.9)}\approx1.43$ s, and $h(1.43)=11.2$ m.

(c) Solving $-4.9t^2+14t+1.2=0$ with the GDC gives $t\approx2.94$ s or $t\approx-0.0833$ s; time cannot be negative, so the ball hits the ground at $t\approx2.94$ s.

So the ball is thrown from $1.2$ m, reaches $11.2$ m after $1.43$ s, and lands after $2.94$ s.
:::

:::exercise [6 marks]
The temperature of a cup of tea, $T^\circ$C, $t$ minutes after it is made is modelled by $T=22+68(0.85)^t$.

(a) Write down the initial temperature. [1 mark]
(b) Find the temperature after $5$ minutes. [2 marks]
(c) Find the time when the temperature is $40^\circ$C. [2 marks]
(d) Write down the temperature of the room. [1 mark]

::hint
**What you need:** solve $68(0.85)^t=18$; the room temperature is the horizontal asymptote.

::solution
(a) $T(0)=22+68=90^\circ$C.

(b) $T(5)=22+68(0.85)^5\approx52.2^\circ$C.

(c) $22+68(0.85)^t=40$ gives $0.85^t=\dfrac{18}{68}$, so $t=\dfrac{\ln(18/68)}{\ln0.85}\approx8.18$ minutes.

(d) As $t$ grows, $(0.85)^t\to0$, so the room temperature is $22^\circ$C.

So the tea starts at $90^\circ$C, is $52.2^\circ$C after $5$ minutes, reaches $40^\circ$C after $8.18$ minutes, and the room is at $22^\circ$C.
:::

:::exercise [7 marks]
Two surveyors stand at points $A$ and $B$, $120$ m apart on a straight riverbank. A tree $C$ on the other bank is such that angle $CAB=48^\circ$ and angle $CBA=62^\circ$.

(a) Find angle $ACB$. [1 mark]
(b) Find the distance $AC$. [3 marks]
(c) Find the area of triangle $ABC$. [3 marks]

::hint
**What you need:** angles in a triangle sum to $180^\circ$; sine rule; area $=\tfrac12ab\sin C$.

::solution
(a) $ACB=180^\circ-48^\circ-62^\circ=70^\circ$.

(b) By the sine rule, $\dfrac{AC}{\sin62^\circ}=\dfrac{120}{\sin70^\circ}$, so $AC=\dfrac{120\sin62^\circ}{\sin70^\circ}\approx113$ m ($112.75$ m).

(c) The area is $\tfrac12(120)(112.75)\sin48^\circ\approx5030\text{ m}^2$.

So the angle at $C$ is $70^\circ$, $AC\approx113$ m and the area is about $5030\text{ m}^2$.
:::

:::exercise [6 marks]
Three shops are at $P(0,\ 0)$, $Q(8,\ 0)$ and $R(4,\ 6)$, in km. Customers go to the nearest shop.

(a) Write down the equation of the edge between the cells of $P$ and $Q$ in the Voronoi diagram. [1 mark]
(b) Find the equation of the edge between the cells of $P$ and $R$. [3 marks]
(c) Find the coordinates of the vertex of the Voronoi diagram. [2 marks]

::hint
**What you need:** each edge is the perpendicular bisector of two shops.

::solution
(a) The perpendicular bisector of $PQ$ is $x=4$.

(b) The midpoint of $PR$ is $(2,\ 3)$ and the gradient of $PR$ is $\dfrac64=1.5$, so the bisector has gradient $-\dfrac23$: $y-3=-\dfrac23(x-2)$, that is $y=-\dfrac23x+\dfrac{13}{3}$.

(c) With $x=4$, $y=-\dfrac83+\dfrac{13}{3}=\dfrac53$, so the vertex is $\left(4,\ \dfrac53\right)\approx(4,\ 1.67)$.

So the edges are $x=4$ and $y=-\dfrac23x+\dfrac{13}{3}$, meeting at $(4,\ 1.67)$.
:::

:::exercise [7 marks]
Six students recorded their weekly practice time $x$ hours and their test score $y$.

| $x$ | $2$ | $3$ | $5$ | $6$ | $8$ | $9$ |
|---|---|---|---|---|---|---|
| $y$ | $52$ | $58$ | $65$ | $70$ | $79$ | $83$ |

(a) Find Pearson's correlation coefficient $r$ and describe the correlation. [2 marks]
(b) Find the equation of the regression line of $y$ on $x$. [2 marks]
(c) Use it to estimate the score of a student who practises $7$ hours a week. [2 marks]
(d) State whether this estimate is reliable, giving a reason. [1 mark]

::hint
**What you need:** linear regression on the GDC gives $r$, the gradient and the intercept.

::solution
(a) The GDC gives $r\approx0.999$: a very strong positive linear correlation.

(b) The regression line is $y=4.36x+43.9$.

(c) For $x=7$, $y=4.36(7)+43.85\approx74.4$.

(d) Reliable: the correlation is very strong and $x=7$ lies within the data, so this is interpolation.

So $r\approx0.999$, $y=4.36x+43.9$ and the estimated score is about $74.4$, which is reliable.
:::

:::exercise [6 marks]
A survey asked $160$ adults whether they prefer to shop online or in person.

| | Online | In person | Total |
|---|---|---|---|
| Under $30$ | $48$ | $32$ | $80$ |
| $30$ or over | $30$ | $50$ | $80$ |
| Total | $78$ | $82$ | $160$ |

A $\chi^2$ test for independence is carried out at the $5\%$ significance level.

(a) State the null hypothesis. [1 mark]
(b) Show that the expected frequency for adults under $30$ who prefer online shopping is $39$. [1 mark]
(c) Find the $\chi^2$ statistic and the p-value. [2 marks]
(d) State the conclusion of the test, giving a reason. [2 marks]

::hint
**What you need:** expected frequency $=\dfrac{\text{row total}\times\text{column total}}{\text{grand total}}$.

::solution
(a) $H_0$: the preferred way of shopping is independent of age group.

(b) $\dfrac{80\times78}{160}=39$.

(c) The GDC gives $\chi^2\approx8.11$ and p-value $\approx0.00441$, with $1$ degree of freedom.

(d) Since $0.00441<0.05$, we reject $H_0$: there is evidence that the preferred way of shopping depends on age group.

So $\chi^2\approx8.11$, p-value $\approx0.00441$, and shopping preference is not independent of age.
:::

:::exercise [9 marks]
A company's weekly profit, in hundreds of dollars, when it makes $x$ hundred items is $P(x)=-x^3+12x^2+60x-100$, for $0\le x\le15$.

(a) Find $P'(x)$. [2 marks]
(b) Find the value of $x$ that maximises the profit. [2 marks]
(c) Find the maximum weekly profit. [1 mark]

A delivery van's speed $v$ m/s is recorded every $2$ seconds.

| $t$ (s) | $0$ | $2$ | $4$ | $6$ |
|---|---|---|---|---|
| $v$ (m/s) | $0$ | $6$ | $9$ | $10$ |

(d) Use the trapezoidal rule to estimate the distance travelled in the first $6$ seconds. [4 marks]

::hint
**What you need:** solve $P'(x)=0$; distance is the area under the speed–time graph, with $h=2$.

::solution
(a) $P'(x)=-3x^2+24x+60$.

(b) $-3x^2+24x+60=0$ gives $x^2-8x-20=0$, that is $(x-10)(x+2)=0$, so $x=10$ (since $x\ge0$). $P'$ changes from positive to negative there, so it is a maximum.

(c) $P(10)=-1000+1200+600-100=700$, that is $70{,}000$ dollars per week.

(d) With $h=2$: distance $\approx\dfrac22\Big(0+10+2(6+9)\Big)=40$ m.

So the profit is greatest when $1000$ items are made, the maximum profit is $70{,}000$ dollars, and the van travels about $40$ m.
:::

## After the paper

Add up your marks out of $80$, part by part, as an examiner would: method marks still count when an answer is wrong. Grade boundaries change from session to session, so use the score to find weak topics rather than to predict a grade. For every lost mark, revise the matching lesson: [Number, approximation and financial maths](lesson:ibai-number-finance) (questions 1–4), [Function models](lesson:ibai-function-models) (questions 5–7), [Geometry, trigonometry and Voronoi diagrams](lesson:ibai-geometry-voronoi) (questions 8–9), [Statistics, correlation and hypothesis tests](lesson:ibai-statistics-tests) (questions 10–11), [Applied calculus](lesson:ibai-calculus) (question 12). Then look again at the questions where you lost marks for working rather than for mathematics: in Maths AI, writing down what you did with the calculator is half the skill.
