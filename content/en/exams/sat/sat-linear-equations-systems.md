---
title: Linear equations and systems
description: SAT Algebra: solve linear equations, decide how many solutions there are, build equations from word problems and solve systems fast.
minutes: 35
---

:::goals
- Solve a linear equation in one variable and say whether it has one solution, no solution or infinitely many.
- Translate a word problem into a linear equation.
- Solve a system of two linear equations by substitution, by elimination and with the SAT shortcut of combining the equations.
- Decide how many solutions a system has by comparing coefficients.
:::

Algebra is the largest domain of SAT Math: about 13 to 15 of the 44 questions. Linear equations and systems appear in both modules, as multiple-choice questions and as student-produced responses. None of the math is beyond grade 9, but the test rewards three habits: reading what is actually asked, setting up equations from English sentences, and choosing the fastest route.

## Linear equations in one variable

A linear equation in one variable can be written as $ax+b=0$. To solve it, expand brackets, collect the $x$ terms on one side and the numbers on the other, then divide.

:::example Solving and answering what is asked
If $4(x-3)+2x=3x+9$, what is the value of $x$?
A. $1$
B. $3$
C. $7$
D. $21$

**Solution.** Expand, then collect like terms.

$$4x-12+2x=3x+9\iff 6x-12=3x+9\iff 3x=21\iff x=7.$$

The answer is **C**. Option D is $3x$, a typical trap for students who stop one step early.
:::

After simplifying, a linear equation falls into exactly one of three cases.

:::theorem How many solutions?
Simplify both sides until the equation reads $ax+b=cx+d$.
- If $a\ne c$: exactly **one** solution.
- If $a=c$ and $b\ne d$: **no** solution (for example $2x+3=2x+5$).
- If $a=c$ and $b=d$: **infinitely many** solutions (both sides are identical).
:::

:::example Infinitely many solutions
In the equation $3(2x+k)=6x+12$, $k$ is a constant. The equation has infinitely many solutions. What is the value of $k$?

**Solution.** The two sides must be identical. Expanding the left side gives $6x+3k$. The $x$ terms already match, so we need $3k=12$, that is $k=4$. You type **4**.
:::

## From words to an equation

About 30% of SAT Math questions are set in a context. Most linear contexts have the same shape:

$$\text{total}=\text{fixed amount}+\text{rate}\times\text{number of units}.$$

Words such as *per*, *each* and *every* mark the rate; words such as *initial*, *one-time* and *flat fee* mark the fixed amount.

:::example A membership
A gym charges a one-time sign-up fee of 40 dollars and 25 dollars per month. Lan has paid the gym 290 dollars in total. For how many months has she been a member?
A. $8$
B. $10$
C. $11$
D. $13$

**Solution.** Let $m$ be the number of months. The fixed amount is $40$ and the rate is $25$ per month:

$$40+25m=290\iff 25m=250\iff m=10.$$

The answer is **B**. Option C comes from forgetting the sign-up fee and rounding $290\div25$.
:::

## Systems of two linear equations

A system asks for the pair $(x, y)$ that satisfies both equations. On a graph, it is the point where the two lines cross.

:::graph The system $2x+3y=17$, $x-y=1$ has the solution $(4, 3)$
alt: Two straight lines in the coordinate plane, one falling and one rising, crossing at the point (4, 3)
x: -1..9
y: -2..7
plot: (17 - 2x)/3
plot: x - 1
point: (4, 3) "(4, 3)" above
:::

- **Substitution**: use it when one variable is already alone, or has coefficient $1$.
- **Elimination**: multiply the equations so that one variable has opposite coefficients, then add.

:::example Substitution
$$2x+3y=17$$
$$x-y=1$$
The solution to the system is $(x, y)$. What is the value of $x+y$?

**Solution.** From the second equation, $x=y+1$. Substitute into the first:

$$2(y+1)+3y=17\iff 5y=15\iff y=3,\qquad x=4.$$

So $x+y=7$. You type **7**.
:::

The SAT often asks for a combination such as $x+y$ or $x-y$ instead of $x$ and $y$ separately. Before solving, look at whether adding or subtracting the two equations gives the combination directly.

:::example The combining shortcut
$$3x+2y=19$$
$$2x+3y=16$$
What is the value of $x+y$?
A. $5$
B. $6$
C. $7$
D. $35$

**Solution.** Add the two equations: $5x+5y=35$. Divide by $5$: $x+y=7$. The answer is **C**, found in one line without knowing $x$ or $y$. (Check: $x=5$, $y=2$ satisfies both equations.)
:::

## How many solutions does a system have?

Write both equations in the form $ax+by=c$ and compare the ratios of the coefficients.

:::theorem Comparing coefficients
For the system $a_1x+b_1y=c_1$ and $a_2x+b_2y=c_2$ (with nonzero coefficients):
- $\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}$: the lines cross, **one** solution.
- $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}$: the lines are parallel, **no** solution.
- $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$: the same line, **infinitely many** solutions.
:::

:::example A system with no solution
$$ax+6y=5$$
$$2x+3y=4$$
In the system, $a$ is a constant. The system has no solution. What is the value of $a$?

**Solution.** No solution means parallel lines: $\dfrac{a}{2}=\dfrac{6}{3}=2$, so $a=4$. We also check that the lines are not identical: $\dfrac54\ne2$. You type **4**.
:::

:::warning Common traps
- **Answering the wrong quantity.** The question asks for $6x+5$ or $x+y$, and the value of $x$ is among the options. Underline what is asked before you start.
- **Losing a sign when expanding.** $-2(x-5)=-2x+10$, not $-2x-10$.
- **Confusing "no solution" and "infinitely many".** In both cases the $x$ terms cancel. Look at the constants: different means no solution, equal means infinitely many.
- **Mixing up the rate and the fixed amount.** The number next to *per* multiplies the variable.
:::

:::tip Checking with Desmos
Type both equations of a system exactly as given, for example `2x+3y=17` and `x-y=1`. Click the crossing point to read the solution. Parallel lines mean no solution; a single line means infinitely many. Use this to check, and to rescue a question when your algebra goes wrong.
:::

:::terms
- linear equation | phương trình bậc nhất
- variable | biến, ẩn
- constant | hằng số
- system of equations | hệ phương trình
- substitution | phương pháp thế
- elimination | phương pháp cộng đại số
- infinitely many solutions | vô số nghiệm
- no solution | vô nghiệm
- student-produced response | câu tự điền đáp số
:::

## Similar exercises

:::exercise Multiple choice
If $5(x-2)-3x=x+4$, what is the value of $x$?
A. $6$
B. $7$
C. $12$
D. $14$

::hint
**What you need:** expand the bracket and collect like terms.

**Steps:**
1. The left side becomes $2x-10$.
2. Move $x$ to the left and $-10$ to the right.

::solution
$5x-10-3x=x+4\iff 2x-10=x+4\iff x=14$. The answer is **D**. Option A comes from computing $10-4$ instead of $10+4$.
:::

:::exercise Student-produced response
In the equation $2(4x+k)=8x+10$, $k$ is a constant. The equation has infinitely many solutions. What is the value of $k$?

::hint
**What you need:** infinitely many solutions means the two sides are identical.

**Steps:**
1. Expand the left side.
2. Match the constants.

::solution
$8x+2k=8x+10$ for every $x$ exactly when $2k=10$, so $k=5$.
:::

:::exercise Multiple choice
A taxi ride costs a flat fee of 3 dollars plus 2 dollars per kilometer. A ride cost 27 dollars. How many kilometers long was the ride?
A. $9$
B. $12$
C. $13.5$
D. $15$

::hint
**What you need:** total = fixed amount + rate × number of units.

**Steps:**
1. Let $d$ be the distance in kilometers.
2. Write $3+2d=27$ and solve.

::solution
$3+2d=27\iff 2d=24\iff d=12$. The answer is **B**. Option C ignores the flat fee; option D adds it instead of subtracting.
:::

:::exercise Student-produced response
$$x+2y=11$$
$$3x-y=5$$
The solution to the system is $(x, y)$. What is the value of $y$?

::hint
**What you need:** substitution, because $y$ has coefficient $-1$ in the second equation.

**Steps:**
1. From the second equation, $y=3x-5$.
2. Substitute into the first equation.

::solution
$x+2(3x-5)=11\iff 7x=21\iff x=3$, so $y=3\cdot3-5=4$. The answer is $4$.
:::

:::exercise Multiple choice
$$4x+y=13$$
$$x+4y=7$$
What is the value of $x+y$?
A. $4$
B. $5$
C. $6$
D. $20$

::hint
**What you need:** the combining shortcut.

**Steps:**
1. Add the two equations.
2. Divide by the common coefficient.

::solution
Adding gives $5x+5y=20$, so $x+y=4$. The answer is **A**. (Check: $x=3$, $y=1$.) Option D forgets to divide by $5$.
:::

## Application exercises

:::exercise Tickets
A school sold 50 tickets for a concert. Adult tickets cost 12 dollars and student tickets cost 8 dollars. The total income was 480 dollars. How many adult tickets were sold?

::hint
**What you need:** two unknowns, two conditions: number of tickets and money.

**Steps:**
1. Let $a$ be the number of adult tickets; then $50-a$ student tickets.
2. Write the income equation and solve.

::solution
$12a+8(50-a)=480\iff 4a+400=480\iff a=20$. Twenty adult tickets were sold. Check: $20\cdot12+30\cdot8=240+240=480$.
:::

:::exercise A system with no solution
$$6x-ky=7$$
$$3x+2y=5$$
In the system, $k$ is a constant. The system has no solution. What is the value of $k$?
A. $-4$
B. $-1$
C. $1$
D. $4$

::hint
**What you need:** no solution means equal ratios of the $x$ and $y$ coefficients, with a different ratio for the constants.

**Steps:**
1. Compute $\dfrac63$.
2. Set $\dfrac{-k}{2}$ equal to it.

::solution
$\dfrac63=2$, so $\dfrac{-k}{2}=2$ and $k=-4$. The constants give $\dfrac75\ne2$, so the lines are parallel and distinct. The answer is **A**. Option D forgets the minus sign in front of $k$.
:::

:::exercise Two data plans
Plan A costs 30 dollars per month plus 2 dollars per gigabyte of data. Plan B costs 10 dollars per month plus 6 dollars per gigabyte. For how many gigabytes in a month do the two plans cost the same, and what is that cost?

::hint
**What you need:** write the cost of each plan as fixed amount + rate × gigabytes, then set them equal.

**Steps:**
1. Plan A: $30+2g$; plan B: $10+6g$.
2. Solve $30+2g=10+6g$.

::solution
$30+2g=10+6g\iff 20=4g\iff g=5$. At 5 gigabytes both plans cost $30+2\cdot5=40$ dollars. Below 5 gigabytes plan B is cheaper; above it plan A is cheaper.
:::

:::exercise Fractions
If $\dfrac{x}{2}+\dfrac{x}{3}=10$, what is the value of $x$?

::hint
**What you need:** clear the fractions by multiplying by the common denominator.

**Steps:**
1. Multiply both sides by $6$.
2. Solve the resulting equation.

::solution
Multiplying by $6$: $3x+2x=60\iff 5x=60\iff x=12$. Check: $6+4=10$.
:::

:::exercise Challenge
$$2x+5y=8$$
$$ax+by=24$$
In the system, $a$ and $b$ are constants. The system has infinitely many solutions. What is the value of $a+b$?

::hint
**What you need:** infinitely many solutions means the second equation is a multiple of the first.

**Steps:**
1. Find the number that turns $8$ into $24$.
2. Multiply the whole first equation by it.

::solution
$24=3\cdot8$, so the second equation must be $3$ times the first: $6x+15y=24$. Hence $a=6$, $b=15$ and $a+b=21$.
:::

:::quiz
::mc
If $7x-5=3x+19$, what is the value of $x$?
A. $4$
B. $6$
C. $7$
D. $14$
::key B
$4x=24$, so $x=6$. Option D is $24-10$, from moving terms with the wrong signs.

::mc
Which equation has no solution?
A. $2x+3=2x+3$
B. $2x+3=3x+2$
C. $2(x+1)=2x+5$
D. $2x=0$
::key C
$2(x+1)=2x+2$, and $2x+2=2x+5$ would require $2=5$. A has infinitely many solutions; B has $x=1$; D has $x=0$.

::mc
If $x+y=10$ and $x-y=4$, what is the value of $x$?
A. $3$
B. $6$
C. $14$
D. $7$
::key D
Adding the equations gives $2x=14$, so $x=7$. Option A is $y$; option C is $2x$.

::mc
A bakery sold muffins for 3 dollars each and cookies for 2 dollars each. It sold 15 items for a total of 36 dollars. How many muffins were sold?
A. $6$
B. $9$
C. $12$
D. $15$
::key A
With $m$ muffins: $3m+2(15-m)=36\iff m+30=36\iff m=6$. Option B is the number of cookies.

::tf
Consider the system $2x+y=7$ and $4x+2y=k$, where $k$ is a constant.
a) If $k=14$, the system has infinitely many solutions.
b) If $k=10$, the system has no solution.
c) If $k=14$, then $(2, 4)$ is a solution of the system.
d) There is a value of $k$ for which the system has exactly one solution.
::key T T F F
a) True: the second equation is twice the first. b) True: the left sides are proportional but $10\ne14$. c) False: $2\cdot2+4=8\ne7$. d) False: the lines are parallel or identical for every $k$.

::sa
If $3(x+4)=2x+20$, what is the value of $x$?
::key 8
$3x+12=2x+20\iff x=8$.

::sa
If $5x+2y=24$ and $2x+5y=18$, what is the value of $x+y$?
::key 6
Adding gives $7x+7y=42$, so $x+y=6$. (Here $x=4$, $y=2$.)
:::
