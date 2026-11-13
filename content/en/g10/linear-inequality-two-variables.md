---
title: Linear inequalities in two variables
description: Learn to test ordered pairs, draw the solution region of ax+by≤c with a solid or dashed line, and model budget problems with two unknowns.
minutes: 25
---

:::goals
- Recognise a linear inequality in two variables and say whether an ordered pair is a solution.
- Draw the solution region of $ax+by\le c$ (or $<,\ \ge,\ >$) using the boundary line and a test point.
- Decide when the boundary line is solid and when it is dashed.
- Turn a real-life limit (a budget, a ticket price) into an inequality and read answers from the region.
:::

Your class has $300$ thousand dong to buy cinema tickets for a school outing. An adult ticket costs $60$ thousand dong and a student ticket costs $30$ thousand dong. Is there enough money for $3$ adult and $4$ student tickets? What about $4$ adult and $3$ student tickets?

You can answer both questions by multiplying and adding. But what if your teacher asks, "Which ways of buying can we afford?" Notice that each way of buying is a **pair** of numbers: the number of adult tickets and the number of student tickets. Rather than testing pairs one by one for ever, we will find a way to see all the "affordable" pairs at once, and it turns out to be a region of the coordinate plane.

## What is a linear inequality in two variables?

### Trying a few purchases

Let $x$ be the number of adult tickets and $y$ the number of student tickets. Then the cost is $60x+30y$ (thousand dong). Let us try a few pairs and see:

| Pair $(x, y)$ | Cost $60x+30y$ | Is it $\le 300$? |
|---|---|---|
| $(2, 5)$ | $270$ | yes |
| $(5, 0)$ | $300$ | yes (exactly) |
| $(3, 4)$ | $300$ | yes (exactly) |
| $(4, 3)$ | $330$ | no |

Every test comes down to one question: is $60x+30y$ more than $300$ or not? Put briefly, the condition "we can afford it" is exactly $60x+30y\le 300$. This is an inequality with **two** unknowns, each appearing only to the first power. Let us give this kind of inequality a name.

:::definition Linear inequality in two variables
A **linear inequality in two variables** $x, y$ is an inequality of one of the forms
$$ax+by\le c,\qquad ax+by<c,\qquad ax+by\ge c,\qquad ax+by>c,$$
where $a, b, c$ are given numbers and $a, b$ are not both $0$.

A **solution** is an ordered pair $(x_0, y_0)$ such that the inequality becomes a true statement when $x=x_0$ and $y=y_0$.
:::

A small point that is easy to slip on: the pair is ordered. The first number is always $x$ and the second is always $y$, so $(1, 2)$ and $(2, 1)$ are different pairs. The first skill to make really solid is checking whether a pair is a solution: substitute, work it out, compare.

:::example Testing pairs
Which of the pairs $(1, 2)$, $(3, 1)$, $(0, 0)$, $(2, 1)$ are solutions of $2x+y\le 5$?

**Solution.** We substitute each pair into $2x+y$ and compare with $5$:

$$\begin{aligned} (1, 2)&:\ 2\cdot 1+2=4\le 5 \ \text{(true)},\\ (3, 1)&:\ 2\cdot 3+1=7\le 5 \ \text{(false)},\\ (0, 0)&:\ 0\le 5 \ \text{(true)},\\ (2, 1)&:\ 2\cdot 2+1=5\le 5 \ \text{(true, } \le \text{ allows equality)}. \end{aligned}$$

So $(1, 2)$, $(0, 0)$ and $(2, 1)$ are solutions, and $(3, 1)$ is not.
:::

Testing pairs is reliable, but an inequality like this has infinitely many solutions, so we could never list them all. So we do something different: think of each solution as a point in the coordinate plane, and draw them all.

## The solution region

We begin with a very simple inequality: $x+y\le 3$. Its "equals" part, the equation $x+y=3$, is a straight line you already know. This line cuts the plane into two **half-planes**: on one side we always have $x+y<3$, on the other side $x+y>3$.

**Why is that?** Imagine standing at a point on the line, keeping $x$ fixed and stepping upwards, so that $y$ increases. The sum $x+y$ increases too. So anywhere above the line $x+y>3$, and anywhere below it $x+y<3$. Therefore the solutions of $x+y\le 3$ form the lower half-plane together with the line (called the **boundary**).

:::graph The region $x+y\le 3$
alt: A coordinate plane with the line x+y=3 and the half-plane below it shaded, containing the origin
x: -2..6
y: -2..6
region: x + y <= 3
point: (0, 0) "O" below-left
point: (3, 0) "(3, 0)" below
point: (0, 3) "(0, 3)" left
:::

The set of all points whose coordinates are solutions is called the **solution region** of the inequality. Infinitely many solutions now fit into one picture you can see.

The "step up and the sum grows" argument works for $x+y$, but for an expression like $3x-y$, stepping up makes it smaller, and it is easy to get muddled. So we want a method that is always safe and never relies on guessing the side.

### How to draw it: the test-point method

:::definition Steps for drawing the solution region
To draw the solution region of $ax+by\le c$ (or $<, \ge, >$):
1. Draw the **boundary line** $ax+by=c$ through two of its points. Make it **solid** if the sign is $\le$ or $\ge$ (the boundary is included), and **dashed** if it is $<$ or $>$ (the boundary is not included).
2. Choose a **test point** not on the line. The origin $O(0, 0)$ is the easiest, unless the line passes through $O$.
3. Substitute the test point. If the result is true, the region is the half-plane containing that point; if false, it is the other half-plane.
:::

The idea behind step 3 is simple: a whole half-plane is either all "true" or all "false", so asking one representative point tells you about the whole half. In the first example the sign is strict, so watch how the boundary is drawn.

:::example A dashed boundary
Draw the solution region of $x+2y<4$.

**Solution.** We draw the boundary $x+2y=4$ and then test the origin. Put $y=0$ and $x=0$ to find two points of the boundary:

$$y=0\Rightarrow x=4,\qquad x=0\Rightarrow 2y=4\Rightarrow y=2.$$

The boundary passes through $(4, 0)$ and $(0, 2)$; the sign is $<$, so it is dashed. Substitute $O(0, 0)$:

$$0+2\cdot 0=0<4 \quad \text{(true)}.$$

So the solution region is the half-plane with boundary $x+2y=4$ that contains the origin, without the boundary.
:::

:::graph The region $x+2y<4$
alt: The dashed line through (4, 0) and (0, 2) with the half-plane containing the origin shaded
x: -3..7
y: -3..5
region: x + 2y < 4
open: (4, 0) "(4, 0)" below
open: (0, 2) "(0, 2)" left
:::

Don't assume the origin is always in the region. In the next example the test gives "false", and that false result tells us just as clearly which side to shade.

:::example A solid boundary, and the origin is not a solution
Draw the solution region of $3x-y\ge 3$.

**Solution.** The boundary is $3x-y=3$:

$$x=0\Rightarrow y=-3,\qquad y=0\Rightarrow x=1.$$

The boundary passes through $(0, -3)$ and $(1, 0)$; the sign is $\ge$, so it is solid. Substitute $O(0, 0)$:

$$3\cdot 0-0=0\ge 3 \quad \text{(false)}.$$

So the solution region is the half-plane with boundary $3x-y=3$ that does **not** contain the origin (below and to the right of the line), including the boundary.

**Check.** Take $(2, 0)$ on the shaded side: $3\cdot 2-0=6\ge 3$, true.
:::

:::graph The region $3x-y\ge 3$
alt: The solid line through (0, -3) and (1, 0) with the half-plane not containing the origin shaded
x: -2..4
y: -5..3
region: 3x - y >= 3
point: (0, -3) "(0, -3)" left
point: (1, 0) "(1, 0)" above-left
:::

One more case needs care: a boundary through the origin. Then $O$ sits right on the boundary, and substituting it only compares $0$ with $0$, which says nothing about either side. We pick another test point, as long as it is not on the boundary.

:::example A boundary through the origin
Draw the solution region of $2x-3y\le 0$.

**Solution.** The boundary $2x-3y=0$ passes through $O(0, 0)$ and $(3, 2)$, because $2\cdot 3-3\cdot 2=0$. The sign is $\le$, so it is solid. We choose the test point $(1, 0)$, which is not on the boundary:

$$2\cdot 1-3\cdot 0=2\le 0 \quad \text{(false)}.$$

So the solution region is the half-plane with boundary $2x-3y=0$ that does not contain $(1, 0)$, that is, above and to the left of the line, including the boundary.

**Check.** The point $(0, 1)$ is on the shaded side: $0-3=-3\le 0$, true.
:::

:::graph The region $2x-3y\le 0$
alt: The solid line through the origin and the point (3, 2), with the half-plane above and to the left of it shaded
x: -3..5
y: -3..4
region: 2x - 3y <= 0
point: (0, 0) "O" below-right
point: (3, 2) "(3, 2)" below-right
:::

:::warning Common mistakes
- **Wrong:** drawing a solid line for $x+2y<4$. **Why it is wrong:** the point $(4, 0)$ is on the boundary, but $4<4$ is false, so the boundary is not in the region. **Right:** $<$ and $>$ give a dashed line; $\le$ and $\ge$ give a solid line.
- **Wrong:** testing $O(0, 0)$ for $2x-3y\le 0$ and concluding "$0\le 0$ is true, so shade the side of $O$". **Why it is wrong:** $O$ sits right on the boundary and belongs to neither side. **Right:** choose a point not on the boundary, such as $(1, 0)$.
- **Wrong:** guessing the side with "$\le$ means below". **Why it is wrong:** the shortcut sounds handy but cannot be trusted; for $3x-y\ge 3$ the sign is $\ge$, yet the region is below the line. **Right:** always substitute a test point; it takes a few seconds and it is certain.
:::

## Modelling real situations

You now have all the tools to go back to the ticket question from the start. The hard part is usually not the arithmetic but reading the problem and writing the right inequality.

:::example Cinema tickets
An adult ticket costs $60$ thousand dong, a student ticket $30$ thousand dong, and the class has at most $300$ thousand dong. Let $x$ be the number of adult tickets and $y$ the number of student tickets.

a) Write an inequality saying that the class can afford the tickets.

b) Can the class buy $3$ adult and $4$ student tickets? And $4$ adult and $3$ student tickets?

**Solution.** a) The total cost $60x+30y$ is at most $300$. Divide both sides by $30$ (a positive number, so the sign stays):

$$60x+30y\le 300\iff 2x+y\le 10,$$

where $x, y$ are non-negative whole numbers.

b) Substitute each pair into $2x+y$:

$$(3, 4):\ 2\cdot 3+4=10\le 10\ \text{(true)},\qquad (4, 3):\ 2\cdot 4+3=11\le 10\ \text{(false)}.$$

So the class can buy $3$ adult and $4$ student tickets (using exactly $300$ thousand dong), but not $4$ adult and $3$ student tickets (which would cost $330$ thousand dong).
:::

:::graph Possible ticket numbers
alt: The triangle bounded by the axes and the line 2x+y=10 is shaded; the point (3, 4) is on the boundary and (4, 3) is outside
x: -1..7
y: -1..12
region: 2x + y <= 10
region: x >= 0
region: y >= 0
point: (3, 4) "(3, 4)" above-right
open: (4, 3) "(4, 3)" right
:::

One thing to notice when you read the picture: the shaded region holds infinitely many points, but the real answers are only those with whole-number coordinates, because nobody can buy half a ticket.

## Key terms

:::terms
- linear inequality in two variables | bất phương trình bậc nhất hai ẩn
- solution (ordered pair) | nghiệm (cặp số)
- boundary line | đường thẳng biên (bờ)
- half-plane | nửa mặt phẳng
- solution region | miền nghiệm
- test point | điểm kiểm tra
- solid line | nét liền
- dashed line | nét đứt
:::

## Summary

- Linear inequality in two variables: $ax+by\le c$ (or $<, \ge, >$) with $a, b$ not both $0$. A solution is a pair $(x_0, y_0)$ that makes it true.
- The line $ax+by=c$ splits the plane into two halves; the solution region is one half.
- Solid line for $\le, \ge$ (boundary included); dashed line for $<, >$ (boundary excluded).
- Choosing the side: substitute a point **not on the boundary** (usually $O$); if true, take the side containing it.
- Real problems: name the unknowns, write the inequality, and remember $x, y\ge 0$ and whole numbers when needed.

Back to your class's question: every way of buying tickets within the budget is a whole-number point in the shaded triangle. One line and one test point, and we can see every choice at once.

## Practice

Each exercise comes with what you need and some steps to start. Have a go yourself first, even if you are not sure; wherever you go wrong, the solution will show you exactly where.

:::exercise
Which of the pairs $(2, -1)$, $(0, 3)$, $(6, 1)$ are solutions of $x-2y\ge 4$?

::hint
**What you need:** a pair $(x_0, y_0)$ is a solution when substituting it gives a true statement.

**Steps:**
1. Compute $x-2y$ for each pair.
2. Compare with $4$, remembering that $\ge$ allows equality.

::solution
$$(2, -1):\ 2+2=4\ge 4\ \text{(true)};\quad (0, 3):\ 0-6=-6\ge 4\ \text{(false)};\quad (6, 1):\ 6-2=4\ge 4\ \text{(true)}.$$

**Answer.** $(2, -1)$ and $(6, 1)$ are solutions.
:::

:::exercise
Consider the inequality $2x-3y\le 6$. Is each claim true or false?

a) The pair $(0, 0)$ is a solution of the inequality.

b) The boundary line passes through the points $(3, 0)$ and $(0, 2)$.

c) The pair $(1, -2)$ is a solution of the inequality.

d) The solution region is the half-plane containing the origin, including the boundary line.

::hint
**What you need:** substitute a pair to test it; find where the boundary meets the axes by putting $x=0$, then $y=0$.

**Steps:**
1. Substitute $(0, 0)$ and $(1, -2)$ into $2x-3y$.
2. Put $y=0$, then $x=0$, in $2x-3y=6$.
3. Use the result of a) and the type of line for d).

::solution
a) **True:** $2\cdot 0-3\cdot 0=0\le 6$.

b) **False:** putting $x=0$ gives $-3y=6$, so $y=-2$. The boundary passes through $(3, 0)$ and $(0, -2)$, not through $(0, 2)$.

c) **False:** $2\cdot 1-3\cdot(-2)=8$, and $8\le 6$ is false.

d) **True:** $O$ is a solution (part a) and the sign is $\le$, so the boundary is included.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise
Describe the solution region of $2x-y\le 4$: give two points of the boundary, the type of line, the test point and the side to take.

::hint
**What you need:** the test-point method for drawing a solution region.

**Steps:**
1. Find where $2x-y=4$ meets the two axes.
2. Look at the sign to choose solid or dashed.
3. Substitute $O(0, 0)$.

::solution
$$y=0\Rightarrow x=2,\qquad x=0\Rightarrow y=-4.$$
The boundary passes through $(2, 0)$ and $(0, -4)$ and is solid because of $\le$. Substitute $O$: $0\le 4$ is true.

**Answer.** The region is the half-plane with boundary $2x-y=4$ containing the origin, boundary included.
:::

:::exercise
Draw the solution region of $x-y\ge 0$.

::hint
**What you need:** when the boundary passes through the origin, the test point must be different from $O$.

**Steps:**
1. Notice that the boundary $x-y=0$ is the line $y=x$.
2. Test the point $(1, 0)$.

::solution
The boundary $y=x$ passes through $O$ and $(1, 1)$ and is solid. Test $(1, 0)$: $1-0=1\ge 0$, true.

**Answer.** The region is the half-plane with boundary $y=x$ containing $(1, 0)$ (below the line $y=x$), boundary included.
:::

:::exercise
Which of the points $A(1, 1)$, $B(-2, 3)$, $C(4, -1)$ lie in the solution region of $3x+2y>5$?

::hint
**What you need:** a point is in the region when its coordinates are a solution; $>$ does not allow equality.

**Steps:**
1. Compute $3x+2y$ at each point.
2. Compare strictly with $5$.

::solution
$$A:\ 3+2=5;\qquad B:\ -6+6=0;\qquad C:\ 12-2=10.$$
Only $10>5$ is true; at $A$ we get $5>5$, which is false because $A$ lies on the dashed boundary.

**Answer.** Only the point $C$.
:::

:::exercise
A phone plan charges $2000$ dong per minute of calls and $500$ dong per text message. Mai has at most $40000$ dong in her account. Let $x$ be the minutes and $y$ the messages. Write an inequality, then decide whether Mai can make $15$ minutes of calls and send $20$ messages, and whether she can do $18$ minutes and $10$ messages.

::hint
**What you need:** "at most" means "not more than", so we use $\le$.

**Steps:**
1. Write the total cost in terms of $x$ and $y$.
2. Divide both sides by $500$ to simplify.
3. Substitute both pairs.

::solution
$$2000x+500y\le 40000\iff 4x+y\le 80.$$
For $(15, 20)$: $60+20=80\le 80$, true. For $(18, 10)$: $72+10=82\le 80$, false (it would cost $41000$ dong).

**Answer.** $4x+y\le 80$; Mai can do $15$ minutes and $20$ messages, but she cannot afford $18$ minutes and $10$ messages.
:::

:::exercise
How many pairs of non-negative whole numbers $(x, y)$ are solutions of $2x+y\le 4$?

::hint
**What you need:** for a fixed $x$, the value $y$ runs from $0$ to $4-2x$.

**Steps:**
1. Take $x=0, 1, 2$ in turn (for $x\ge 3$ we have $2x>4$).
2. For each $x$, count the whole numbers $y$ from $0$ to $4-2x$.
3. Add up.

::solution
$$x=0:\ 0\le y\le 4\ (5\ \text{pairs});\quad x=1:\ 0\le y\le 2\ (3\ \text{pairs});\quad x=2:\ y=0\ (1\ \text{pair}).$$
In total $5+3+1=9$ pairs.

**Answer.** $9$.
:::

:::exercise Challenge
A student ticket costs $20$ thousand dong and an adult ticket $50$ thousand dong. A group has at most $200$ thousand dong and must buy at least $2$ adult tickets. Write the inequalities and find the largest possible number of people in the group (one ticket each).

::hint
**What you need:** each condition in the problem is an inequality; the unknowns are non-negative whole numbers.

**Steps:**
1. Let $x$ be the student tickets and $y$ the adult tickets; write the money condition and $y\ge 2$.
2. Student tickets are cheaper, so to get many people try small $y$ first.
3. For each $y=2, 3, 4$, find the largest $x$ and compare the totals $x+y$.

::solution
$$20x+50y\le 200\iff 2x+5y\le 20,\qquad y\ge 2,\ x\ge 0.$$
For $y=2$: $2x\le 10$, $x\le 5$, total $7$. For $y=3$: $2x\le 5$, $x\le 2$, total $5$. For $y=4$: $x=0$, total $4$.

**Answer.** At most $7$ people ($5$ students and $2$ adults).
:::

:::exercise Challenge
Find an inequality of the form $ax+by\le c$ whose boundary passes through $(0, 2)$ and $(3, 0)$ and whose solution region contains the origin.

::hint
**What you need:** the line meeting the axes at $(p, 0)$ and $(0, q)$ has equation $\dfrac{x}{p}+\dfrac{y}{q}=1$.

**Steps:**
1. Write the equation of the boundary and clear the fractions.
2. Substitute $O(0, 0)$ to choose the right direction.

::solution
$$\frac{x}{3}+\frac{y}{2}=1\iff 2x+3y=6.$$
At $O$: $2\cdot 0+3\cdot 0=0\le 6$, so the origin lies on the "$\le 6$" side.

**Answer.** $2x+3y\le 6$.
:::

:::exercise
(Revisiting [Statements](lesson:statements).) Consider the statement $P$: "For every real number $x$, the pair $(x, 1)$ is a solution of $2x+y\le 7$." Is $P$ true or false? State the negation of $P$.

::hint
**What you need:** a "$\forall x$" statement is false as soon as there is one counterexample; the negation of "$\forall x, Q(x)$" is "$\exists x, \overline{Q(x)}$".

**Steps:**
1. Put $y=1$ to get an inequality in $x$.
2. Find a value of $x$ that does not satisfy it.
3. Write the negation with "there exists".

::solution
Put $y=1$: $2x+1\le 7\iff x\le 3$. For $x=4$: $2\cdot 4+1=9>7$, so $(4, 1)$ is not a solution and $P$ is false.

**Answer.** $P$ is false (counterexample $x=4$). $\overline{P}$: "There exists a real number $x$ such that $2x+1>7$", that is, some pair $(x, 1)$ is not a solution.
:::

## Mini test

:::quiz
::mc
Which of these is a linear inequality in two variables?
A. $2x-3y\le5$.
B. $x^2+y>1$.
C. $xy\ge2$.
D. $\dfrac1x+y\le2$.
::key A
A linear inequality in two variables has the form $ax+by\le c$ (or $<, \ge, >$): each unknown appears only to the first power. B contains $x^2$, C the product $xy$, and D has $x$ in a denominator.

::mc
Which pair is a solution of $3x-2y>4$?
A. $(2, 1)$.
B. $(0, -3)$.
C. $(1, 0)$.
D. $(3, 3)$.
::key B
$(0, -3)$: $0+6=6>4$, true. For A we get $6-2=4$, and $4>4$ is false: this point is on the boundary, which $>$ does not include. C and D both give $3$, which is not greater than $4$.

::mc
The solution region of $x+3y\ge6$ is
A. the half-plane with boundary $x+3y=6$ containing the origin $O$, boundary included.
B. the half-plane with boundary $x+3y=6$ containing the origin $O$, boundary excluded.
C. the half-plane with boundary $x+3y=6$ not containing the origin $O$, boundary included.
D. the half-plane with boundary $x+3y=6$ not containing the origin $O$, boundary excluded.
::key C
Substitute $O(0, 0)$: $0\ge6$ is false, so we take the half-plane not containing $O$. The sign $\ge$ allows equality, so the boundary belongs to the region (drawn as a solid line).

::mc
The solution region of an inequality is the half-plane whose boundary is the line through $(2, 0)$ and $(0, 4)$, not containing the origin $O$, boundary included. The inequality is
A. $2x+y\le4$.
B. $2x+y\ge4$.
C. $x+2y\ge4$.
D. $2x+y>4$.
::key B
The line through $(2, 0)$ and $(0, 4)$ is $\dfrac x2+\dfrac y4=1\iff 2x+y=4$. At $O$ we get $0<4$, so the side without $O$ is $2x+y\ge4$ ($\ge$ because the boundary is included). Option C swaps the two intercepts; D excludes the boundary.

::tf
A bakery makes $x$ cakes of type I (costing $20$ thousand dong each) and $y$ cakes of type II (costing $30$ thousand dong each), with a total cost of at most $600$ thousand dong.
a) The cost condition is $20x+30y\ge600$.
b) The bakery can make $15$ cakes of type I and $10$ of type II.
c) The bakery can make $20$ cakes of type I and $8$ of type II.
d) If the bakery makes $12$ cakes of type II, it can make at most $12$ cakes of type I.
::key F T F T
The correct condition is $20x+30y\le600\iff 2x+3y\le60$. a) False: "at most" means $\le$. b) True: $30+30=60\le60$. c) False: $40+24=64>60$. d) True: $2x+36\le60\iff x\le12$.

::sa
The point $M(a, 2)$ lies in the solution region of $3x-y\le7$. Find the largest possible value of $a$.
::key 3
Substitute $x=a$, $y=2$: $3a-2\le7\iff a\le3$. So the largest value of $a$ is $3$.

::sa
A student cinema ticket costs $25$ thousand dong and an adult ticket $40$ thousand dong. A group includes $4$ adults and has at most $300$ thousand dong. At most how many student tickets can the group buy?
::key 5
Let $y$ be the number of student tickets: $25y+40\cdot4\le300\iff 25y\le140\iff y\le5.6$. The number of tickets is a whole number, so it is at most $5$.
:::
