---
title: The set of real numbers
description: Meet the real numbers, place them on the number line, find opposites and compare two real numbers, with everyday examples.
minutes: 20
---

:::goals
- Tell rational from irrational numbers and name the set of real numbers $\mathbb{R}$.
- Represent real numbers, including $\sqrt2$, on a number line.
- Find the opposite of a real number.
- Compare two real numbers, and apply this to real-life problems.
:::

A carpenter cuts a square board whose area is exactly $2$ m². How long is its side? Call the side $x$ (m); we need $x^2=2$. He tries a tape measure marked in millimetres: with $1.414$ m the area is a little short, and with $1.415$ m it is a little too big. All he can say is that the side lies between those two marks.

That number $x$ is real, because the board is real. But what kind of number is it, and where does it sit on the number line you know? This lesson gathers every kind of number you have met into one set, so that every length and every point on the line has a number as its "name".

## From rational numbers to real numbers

### Exploration: squares close to $2$

Let us square a few decimals:

| $x$ | $1.4$ | $1.41$ | $1.414$ | $1.415$ |
|---|---|---|---|---|
| $x^2$ | $1.96$ | $1.9881$ | $1.999396$ | $2.002225$ |

However many digits we add, the square creeps towards $2$ without ever being exactly $2$. The positive number whose square is $2$ is $\sqrt2$ (the principal square root of $2$), and $\sqrt2=1.41421356\ldots$ is an infinite non-recurring decimal. A number like this is called an **irrational number**.

:::definition Real numbers
Rational numbers and irrational numbers together are called **real numbers**. The set of real numbers is written $\mathbb{R}$; the set of irrational numbers is written $\mathbb{I}$. We have
$$\mathbb{R}=\mathbb{Q}\cup\mathbb{I},\qquad \mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R},\qquad \mathbb{I}\subset\mathbb{R}.$$
:::

**Going deeper.** Real numbers are nothing strange: $5$, $-3$, $\dfrac23$ and $0.25$ are all real. We have only added the irrational numbers such as $\sqrt2$, $\sqrt3$ and $\pi$. Every real number can be written as a decimal: terminating, recurring (a rational number) or infinite and non-recurring (an irrational number). A common trap: a square root sign does not make a number irrational. $\sqrt{16}=4$ is rational.

:::example Classifying numbers
Which of these numbers are rational and which are irrational?

$-5$; $\dfrac23$; $0.25$; $\sqrt{16}$; $\sqrt7$; $0.\dot6$; $1.010010001\ldots$ (after each digit $1$, the number of $0$s grows by one).

**Solution.** For each number we ask whether it can be written as a fraction, or is an infinite non-recurring decimal.

The number $-5$ is an integer, $\dfrac23$ is a fraction, $0.25=\dfrac14$, and $\sqrt{16}=4$ (because $4^2=16$). These are rational.

The number $0.\dot6$ is an infinite recurring decimal (repeating block $6$), so it is rational.

The number $\sqrt7=2.6457\ldots$ is an infinite non-recurring decimal. The number $1.010010001\ldots$ is also infinite and non-recurring, because the run of $0$s between consecutive $1$s keeps growing. These two are irrational.

So the rational numbers are $-5$, $\dfrac23$, $0.25$, $\sqrt{16}$, $0.\dot6$; the irrational numbers are $\sqrt7$ and $1.010010001\ldots$; all of them are real numbers.
:::

## Real numbers on the number line

Every rational number matches a point on the number line. But these points do not fill the line: gaps remain, and irrational numbers fill them. So every real number is represented by a point on the line, and every point on the line represents a real number. This is why it is called the **real number line**.

So where does $\sqrt2$ sit? We use the carpenter's board again. Draw a square $ABCD$ of side $2$ (length units), area $4$. Take the midpoints $M$, $N$, $P$, $Q$ of the four sides and join them to get the square $MNPQ$. The four right-angled corner triangles are equal, each with area $\dfrac12\cdot1\cdot1=\dfrac12$, so the area of $MNPQ$ is $4-4\cdot\dfrac12=2$. Its side $MQ$ satisfies $MQ^2=2$, that is $MQ=\sqrt2$.

:::diagram The square $MNPQ$ has area $2$
alt: Square ABCD of side 2 with the midpoints M, N, P, Q of its sides joined to form a tilted square MNPQ and four isosceles right-angled triangles at the corners
point A 0,0 below-left
point B 2,0 below-right
point C 2,2 above-right
point D 0,2 above-left
point M 1,0 below
point N 2,1 right
point P 1,2 above
point Q 0,1 left
segment A B dashed
segment B C dashed
segment C D dashed
segment D A dashed
polygon M N P Q
mark M N 1
mark N P 1
mark P Q 1
mark Q M 1
label 1,1 "S = 2"
:::

The segment $MQ$ is also the diagonal of the unit square with vertex $A$ (sides $AM=AQ=1$). So the diagonal of a square of side $1$ has length $\sqrt2$, and we carry that length onto the number line with a pair of compasses.

:::diagram Carrying the diagonal onto the number line
alt: A unit square with vertex O at the origin; the circle centred at O through vertex C meets the number line at the point whose coordinate is the square root of 2
point O 0,0 below-left
point A 1,0 below-left "1"
point C 1,1 above-right
point D 0,1 above-left
point E 1.414,0 below-right "√2"
point L -1.7,0 ""
point R 1.8,0 ""
segment L R
segment O A
segment A C
segment C D
segment D O
circle O 1.414
:::

:::example Representing real numbers on the number line
Represent the numbers $1.5$, $\sqrt2$ and $-\sqrt2$ on the number line.

**Solution.** Since $1.5=1+\dfrac12$, it is the midpoint of the segment joining $1$ and $2$.

For $\sqrt2$: draw a square of side $1$ with one vertex at the origin $O$. Its diagonal $OC$ has length $\sqrt2$. With centre $O$ and radius $OC$, draw an arc; it meets the positive half of the line at the point representing $\sqrt2$.

For $-\sqrt2$: the same arc meets the negative half of the line at a point at distance $\sqrt2$ from $O$; this is the point representing $-\sqrt2$.

So the three points are shown in the figure below.
:::

:::graph The points $-\sqrt2$, $0$, $1$, $1.5$, $\sqrt2$ on the number line
alt: Number line from -3 to 3 with the points minus root 2, 0, 1, 1.5 and root 2, where root 2 lies between 1 and 1.5
x: -3..3
y: -1..1
segment: (-3, 0) (3, 0)
point: (-1.414, 0) "−√2" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (1.414, 0) "√2" above
point: (1.5, 0) "1.5" below-right
:::

## The opposite of a real number

Two real numbers whose sum is $0$ are called **opposites** of each other. The opposite of $x$ is $-x$; the opposite of $0$ is $0$; and $-(-x)=x$. On the number line, opposites lie on either side of $O$ at the same distance from $O$, like $\sqrt2$ and $-\sqrt2$ in the figure above.

## Comparing two real numbers

For any two real numbers $x$, $y$, exactly one of $x<y$, $x=y$, $x>y$ holds. We have three ways to decide which:

- Write both numbers as decimals and compare digits in the same place, from left to right, as you do with rational numbers.
- On the number line, the number further to the left is smaller.
- If $0\le a<b$ then $\sqrt a<\sqrt b$. To compare $\sqrt a$ with a positive number $m$, write $m=\sqrt{m^2}$ and compare $a$ with $m^2$. If $x<y$ then $-x>-y$.

:::example Comparing real numbers
Compare:

a) $\sqrt7$ and $2.6$.

b) $-\sqrt5$ and $-2.3$.

c) $3.1\dot4$ and $\pi$.

**Solution.** a) We have $2.6^2=6.76<7$, so $2.6=\sqrt{6.76}<\sqrt7$.

So $\sqrt7>2.6$.

b) We have $2.3^2=5.29>5$, so $2.3=\sqrt{5.29}>\sqrt5$, that is $\sqrt5<2.3$. Changing the sign of both sides reverses the inequality, so $-\sqrt5>-2.3$.

So $-\sqrt5>-2.3$.

c) We have $3.1\dot4=3.14444\ldots$ and $\pi=3.14159\ldots$. The two numbers agree in the whole part and the first two decimal places; at the third decimal place, $4>1$.

So $3.1\dot4>\pi$.
:::

:::example Ordering real numbers
Arrange $-2$, $\sqrt3$, $-\sqrt5$, $1.7$, $0$ in increasing order.

**Solution.** Negative numbers are less than $0$, and $0$ is less than positive numbers, so we split into two groups: $-2$ and $-\sqrt5$ are negative; $\sqrt3$ and $1.7$ are positive.

We have $2^2=4<5$, so $2<\sqrt5$, hence $-2>-\sqrt5$.

We have $1.7^2=2.89<3$, so $1.7<\sqrt3$.

So $-\sqrt5<-2<0<1.7<\sqrt3$.
:::

The next example shows an irrational number turning up in making a wooden frame. We go through all four steps.

:::example A frame for a pane of glass
Suppose Mr Hùng makes a square wooden frame that fits a pane of glass of area $2$ m² exactly (ignore any waste at the joints). He has one strip of wood $5.6$ m long. Is it long enough for the frame? If not, what about a strip $5.7$ m long?

**Solution.**

*Understand.* The side of the pane is $\sqrt2$ m, so the frame needs a strip $4\sqrt2$ m long. We must compare $4\sqrt2$ with $5.6$ and with $5.7$.

*Plan.* Divide by $4$ to get back to $\sqrt2$: $5.6\div4=1.4$ and $5.7\div4=1.425$. Then compare $\sqrt2$ with these two numbers by squaring.

*Solve.* We have $1.4^2=1.96<2$, so $1.4<\sqrt2$, hence $5.6<4\sqrt2$. The $5.6$ m strip is not long enough.

We have $1.425^2=2.030625>2$, so $\sqrt2<1.425$, hence $4\sqrt2<5.7$. The $5.7$ m strip is long enough.

So the $5.6$ m strip is too short and the $5.7$ m strip is enough.

*Look back.* On a calculator, $4\sqrt2\approx5.66$ m, which lies between $5.6$ and $5.7$, in agreement with our result. If the pane had area $3$ m², would the strip need to be longer or shorter? Longer, because a bigger area gives a bigger side.
:::

:::warning Common mistakes
- **Thinking every square root is irrational.** Wrong: "$\sqrt{16}$ is irrational". Why it is wrong: $\sqrt{16}=4$ is an integer. Right: $\sqrt{16}$ is rational, while $\sqrt{17}$ is irrational.
- **Forgetting to reverse the inequality when taking opposites.** Wrong: "$\sqrt7>2.6$, so $-\sqrt7>-2.6$". Why it is wrong: taking opposites reverses the order. Right: $-\sqrt7<-2.6$.
- **Writing $\pi=3.14$.** Wrong: "$\pi=3.14$". Why it is wrong: $\pi$ is irrational, and $3.14$ is only an approximation. Right: $\pi\approx3.14$.
:::

**Connections.** This lesson builds on the rational numbers and principal square roots you already know, and gathers them into one set $\mathbb{R}$ big enough that every point on the number line has a number. Back to the board: its side is $\sqrt2$ m, an irrational number, lying between $1.414$ and $1.415$ on the real number line. From here you will use real numbers for rounding, for absolute values and for solving equations.

## Key terms

:::terms
- rational number | số hữu tỉ
- irrational number | số vô tỉ
- real number | số thực
- set of real numbers | tập hợp số thực
- real number line | trục số thực
- opposite (additive inverse) | số đối
- principal square root | căn bậc hai số học
- recurring decimal | số thập phân vô hạn tuần hoàn
- non-recurring infinite decimal | số thập phân vô hạn không tuần hoàn
- subset | tập hợp con
:::

## Summary

- Rational and irrational numbers together are the real numbers; $\mathbb{R}=\mathbb{Q}\cup\mathbb{I}$ and $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.
- An irrational number is an infinite non-recurring decimal, such as $\sqrt2$ or $\pi$. A root sign does not guarantee irrationality ($\sqrt{16}=4$).
- Each real number matches one point on the number line and vice versa. The length $\sqrt2$ is the diagonal of a square of side $1$.
- The opposite of $x$ is $-x$; opposites are the same distance from $O$.
- To compare: use decimal digits, position on the number line, or squaring when there are roots ($0\le a<b\Rightarrow\sqrt a<\sqrt b$).

## Practice

Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Fill in the blank with $\in$, $\notin$ or $\subset$:

a) $-5\ ...\ \mathbb{Q}$.

b) $\sqrt2\ ...\ \mathbb{Q}$.

c) $\sqrt{25}\ ...\ \mathbb{Q}$.

d) $\pi\ ...\ \mathbb{I}$.

e) $\mathbb{Q}\ ...\ \mathbb{R}$.

::hint
**What you need:** a rational number can be written as a fraction; $\in$ and $\notin$ link a number to a set, $\subset$ links two sets.

**Steps:**
1. Work out $\sqrt{25}$ before deciding part c).
2. Part e) is about two sets.

::solution
a) $-5$ is an integer, and $-5=\dfrac{-5}{1}$, so $-5\in\mathbb{Q}$.

b) $\sqrt2=1.41421356\ldots$ is an infinite non-recurring decimal, so $\sqrt2\notin\mathbb{Q}$.

c) Since $5^2=25$, we have $\sqrt{25}=5$, so $\sqrt{25}\in\mathbb{Q}$.

d) $\pi=3.14159\ldots$ is irrational, so $\pi\in\mathbb{I}$.

e) Every rational number is a real number, so $\mathbb{Q}\subset\mathbb{R}$.

So a) $\in$; b) $\notin$; c) $\in$; d) $\in$; e) $\subset$.

**Answer.** a) $\in$; b) $\notin$; c) $\in$; d) $\in$; e) $\subset$.
:::

:::exercise
Find the opposite of each number:

a) $\sqrt{11}$.

b) $-\pi$.

c) $0$.

d) $2.\dot3$.

::hint
**What you need:** the opposite of $x$ is $-x$, and $-(-x)=x$.

**Steps:**
1. Change the sign of each number.
2. In part b), the opposite of a negative number is positive.

::solution
a) The opposite of $\sqrt{11}$ is $-\sqrt{11}$, because $\sqrt{11}+(-\sqrt{11})=0$.

b) The opposite of $-\pi$ is $-(-\pi)=\pi$.

c) The opposite of $0$ is $0$.

d) The opposite of $2.\dot3$ is $-2.\dot3$.

So the opposites are $-\sqrt{11}$, $\pi$, $0$, $-2.\dot3$.

**Answer.** a) $-\sqrt{11}$; b) $\pi$; c) $0$; d) $-2.\dot3$.
:::

:::exercise
Compare:

a) $\sqrt6$ and $2.5$.

b) $-\sqrt{10}$ and $-3.2$.

c) $4.\dot5$ and $4.55$.

::hint
**What you need:** compare $2.5^2$ with $6$; compare $3.2^2$ with $10$; compare decimal digits one by one.

**Steps:**
1. a) Work out $2.5^2$ and compare it with $6$.
2. b) Compare $\sqrt{10}$ with $3.2$ first, then reverse the inequality.
3. c) Write $4.\dot5=4.5555\ldots$.

::solution
a) We have $2.5^2=6.25>6$, so $2.5>\sqrt6$. So $\sqrt6<2.5$.

b) We have $3.2^2=10.24>10$, so $3.2>\sqrt{10}$. Changing the sign of both sides gives $-3.2<-\sqrt{10}$. So $-\sqrt{10}>-3.2$.

c) We have $4.\dot5=4.5555\ldots$ and $4.55=4.5500\ldots$. The numbers agree up to the second decimal place; at the third, $5>0$. So $4.\dot5>4.55$.

**Answer.** a) $\sqrt6<2.5$; b) $-\sqrt{10}>-3.2$; c) $4.\dot5>4.55$.
:::

:::exercise
Arrange $-1.5$, $\sqrt2$, $-\sqrt3$, $1.4$, $0$ in increasing order.

::hint
**What you need:** negative numbers are less than $0$, and $0$ is less than positive numbers; compare $1.5^2$ with $3$ and $1.4^2$ with $2$.

**Steps:**
1. Split into negatives ($-1.5$, $-\sqrt3$) and positives ($\sqrt2$, $1.4$).
2. Compare $\sqrt3$ with $1.5$, then reverse the inequality.

::solution
We have $1.5^2=2.25<3$, so $1.5<\sqrt3$, hence $-\sqrt3<-1.5$.

We have $1.4^2=1.96<2$, so $1.4<\sqrt2$.

So among the negatives $-\sqrt3<-1.5$, and among the positives $1.4<\sqrt2$.

So $-\sqrt3<-1.5<0<1.4<\sqrt2$.

**Answer.** $-\sqrt3,\ -1.5,\ 0,\ 1.4,\ \sqrt2$.
:::

:::exercise
Find two consecutive integers such that each number below lies between them:

a) $\sqrt{20}$.

b) $\sqrt{50}$.

c) $-\sqrt{30}$.

::hint
**What you need:** if $m^2<a<n^2$ ($m$, $n$ positive) then $m<\sqrt a<n$.

**Steps:**
1. a) Find the two consecutive square numbers around $20$ ($16$ and $25$).
2. c) Find two integers around $\sqrt{30}$, then change signs and reverse the inequalities.

::solution
a) Since $16<20<25$, we have $4<\sqrt{20}<5$.

b) Since $49<50<64$, we have $7<\sqrt{50}<8$.

c) Since $25<30<36$, we have $5<\sqrt{30}<6$. Changing the sign of every part, we get $-6<-\sqrt{30}<-5$.

So a) $4$ and $5$; b) $7$ and $8$; c) $-6$ and $-5$.

**Answer.** a) $4$; $5$. b) $7$; $8$. c) $-6$; $-5$.
:::

:::exercise
Find the real number $x$ such that:

a) $x^2=2.25$.

b) $3x^2-12=0$.

c) $x^2=-9$.

::hint
**What you need:** the square of a real number is always greater than or equal to $0$; $x^2=k$ ($k>0$) gives two numbers $x=\pm\sqrt k$.

**Steps:**
1. b) Move terms and divide by $3$ to get $x^2=4$.
2. c) Ask: is there any real number whose square is negative?

::solution
a) We have $x^2=2.25\Leftrightarrow x=\sqrt{2.25}$ or $x=-\sqrt{2.25}$, that is $x=1.5$ or $x=-1.5$.

b) We have $3x^2-12=0\Leftrightarrow3x^2=12\Leftrightarrow x^2=4\Leftrightarrow x=2$ or $x=-2$.

c) The square of every real number is non-negative, and $-9<0$, so no real number $x$ satisfies $x^2=-9$.

So a) $x=\pm1.5$; b) $x=\pm2$; c) no real number $x$.

**Answer.** a) $x=1.5$, $x=-1.5$; b) $x=2$, $x=-2$; c) none.
:::

:::exercise
Write these rational numbers as decimals:

a) $\dfrac78$.

b) $\dfrac56$.

c) $\dfrac3{11}$.

(A reminder about recurring decimals.)

::hint
**What you need:** divide the numerator by the denominator; if a remainder repeats, the digits repeat.

**Steps:**
1. Divide $7$ by $8$, $5$ by $6$, $3$ by $11$, adding a $0$ to the remainder when needed.
2. When a remainder appears for the second time, stop and find the repeating block.

::solution
a) Divide $7$ by $8$: $70\div8=8$ remainder $6$; $60\div8=7$ remainder $4$; $40\div8=5$ remainder $0$. So $\dfrac78=0.875$.

b) Divide $5$ by $6$: $50\div6=8$ remainder $2$; $20\div6=3$ remainder $2$; the remainder $2$ repeats, so the digit $3$ repeats forever. So $\dfrac56=0.8\dot3$.

c) Divide $3$ by $11$: $30\div11=2$ remainder $8$; $80\div11=7$ remainder $3$; the remainder $3$ repeats, so the pair of digits $27$ repeats forever. So $\dfrac3{11}=0.\dot2\dot7$.

All three results are terminating or recurring decimals, as expected for rational numbers.

**Answer.** a) $0.875$; b) $0.8\dot3$; c) $0.\dot2\dot7$.
:::

:::exercise
Suppose a square garden has area $30$ m². Mr An wants to fence it with a roll of netting $22$ m long (ignore the joins).

a) Between which two consecutive integers does the side of the garden lie?

b) Is the roll long enough to fence the whole garden?

::hint
**What you need:** the side of a square of area $S$ is $\sqrt S$; the perimeter is $4$ times the side.

**Steps:**
1. a) Find the two consecutive square numbers around $30$.
2. b) Divide $22$ by $4$ to get $5.5$, then compare $\sqrt{30}$ with $5.5$.

::solution
Let $x$ (m) be the side of the garden, $x>0$. Then $x^2=30$, so $x=\sqrt{30}$.

a) Since $25<30<36$, we have $5<\sqrt{30}<6$.

b) The perimeter of the garden is $4\sqrt{30}$ (m). We have $22\div4=5.5$ and $5.5^2=30.25>30$, so $\sqrt{30}<5.5$. Hence $4\sqrt{30}<22$.

So the side lies between $5$ m and $6$ m, and the $22$ m roll is long enough.

**Answer.** a) $5$ and $6$; b) yes, it is enough.
:::

:::exercise
Suppose a bicycle wheel has diameter $0.65$ m. Its circumference is $0.65\pi$ (m). Taking $\pi\approx3.14$, find the distance the bicycle travels when the wheel turns $100$ times (give your answer to the nearest metre).

::hint
**What you need:** in one turn the wheel covers its circumference; $\pi$ is irrational, so we use an approximation.

**Steps:**
1. Work out the circumference using $\pi\approx3.14$.
2. Multiply by $100$ and round.

::solution
The circumference is $0.65\cdot\pi\approx0.65\cdot3.14=2.041$ (m).

The distance after $100$ turns is $2.041\cdot100=204.1$ (m), which is $204$ m to the nearest metre.

So the bicycle travels about $204$ m.

**Answer.** About $204$ m.
:::

:::exercise Challenge
a) Show that $1.41<\sqrt2<1.42$.

b) Give a rational number and an irrational number, other than $\sqrt2$, that both lie between $1.41$ and $1.42$.

::hint
**What you need:** compare $1.41^2$ and $1.42^2$ with $2$; an irrational number can be built from an infinite decimal with a pattern that never repeats.

**Steps:**
1. a) Work out $1.41^2$ and $1.42^2$.
2. b) Rational: choose a terminating decimal such as $1.415$. Irrational: start with $1.41$ and add digits in a pattern that never repeats.

::solution
a) We have $1.41^2=1.9881<2$, so $1.41<\sqrt2$. We have $1.42^2=2.0164>2$, so $\sqrt2<1.42$.

So $1.41<\sqrt2<1.42$.

b) The number $1.415$ is rational and $1.41<1.415<1.42$.

The number $1.41010010001\ldots$ (the run of $0$s between consecutive $1$s keeps growing) is an infinite non-recurring decimal, so it is irrational, and $1.41<1.41010010001\ldots<1.42$.

So we can choose $1.415$ and $1.41010010001\ldots$.

**Answer.** a) Shown. b) For example $1.415$ and $1.41010010001\ldots$.
:::

## Mini test

:::quiz
::mc NB
Which of these numbers is irrational?
A. $\sqrt7$.
B. $0.25$.
C. $\sqrt{16}$.
D. $0.\dot5$.
::key A
$\sqrt7$ is an infinite non-recurring decimal. A is a terminating decimal, C equals $4$, D is a recurring decimal; all three are rational.

::mc TH
Which of the following statements is **false**?
A. $\mathbb{N}\subset\mathbb{Z}$.
B. $\mathbb{R}\subset\mathbb{Q}$.
C. $\mathbb{I}\subset\mathbb{R}$.
D. $\mathbb{Q}\subset\mathbb{R}$.
::key B
$\mathbb{R}$ contains irrational numbers such as $\sqrt2$, and $\sqrt2\notin\mathbb{Q}$, so $\mathbb{R}$ is not a subset of $\mathbb{Q}$.

::mc TH
Comparing $\sqrt{10}$ with $3.2$, we have
A. $\sqrt{10}=3.2$.
B. $\sqrt{10}>3.2$.
C. $\sqrt{10}<3.2$.
D. they cannot be compared because $\sqrt{10}$ is irrational.
::key C
$3.2^2=10.24>10$, so $\sqrt{10}<3.2$. B compares $10$ with $3.2$ instead of comparing squares, A rounds $\sqrt{10}\approx3.2$ and then treats it as equal, D is wrong because any two real numbers can be compared.

::mc VD
The smallest of the numbers $0$, $-\sqrt6$, $-2.4$, $-2.5$ is
A. $0$.
B. $-\sqrt6$.
C. $-2.4$.
D. $-2.5$.
::key D
$2.4^2=5.76<6<6.25=2.5^2$, so $2.4<\sqrt6<2.5$, hence $-2.5<-\sqrt6<-2.4<0$. B and C come from reversing the order the wrong way when changing signs.

::tf TH TH NB TH
Decide whether each statement is true or false.
a) Every infinite decimal is an irrational number.
b) $\sqrt9$ is a rational number.
c) Every point on the number line represents a real number.
d) The opposite of $\pi$ is a rational number.
::key F T T F
a) False: a recurring decimal such as $0.\dot3$ is rational. b) True: $\sqrt9=3$. c) True: each point on the number line represents a real number. d) False: $-\pi$ is irrational.

::sa TH
How many of the numbers $\sqrt2$, $0.\dot3$, $\sqrt{25}$, $\pi$, $-\sqrt7$, $1.5$ are irrational?
::key 3
The irrational ones are $\sqrt2$, $\pi$, $-\sqrt7$. The others, $0.\dot3$, $\sqrt{25}=5$ and $1.5$, are rational.

::sa VD
What is the sum of the two consecutive integers between which $\sqrt{30}$ lies?
::key 11
Since $25<30<36$, we have $5<\sqrt{30}<6$; the sum is $5+6=11$.
:::
