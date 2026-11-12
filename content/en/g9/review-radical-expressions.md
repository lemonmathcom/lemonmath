---
title: "Topic: simplifying expressions with roots"
description: Revise square-root rules, rationalising denominators and simplifying expressions with roots in grade 10 entrance-exam style, with real-life problems.
minutes: 25
---

:::goals
- Revise the rules for square roots: taking factors out of and into the root, the identity $\sqrt{A^2}=|A|$, and rationalising the denominator.
- Find the condition for an expression to be defined and simplify expressions with roots and fractions.
- Solve the usual exam questions: find the value of an expression, and find $x$ when the value of the expression is given.
- Use square roots in problems about squares, diagonals and areas.
:::

Suppose a square garden has area $50$ m². Its side is $\sqrt{50}$ m and its perimeter is $4\sqrt{50}$ m. A calculator gives $\sqrt{50}\approx7.07$, but to tell the person building the fence we would like a tidier form: $\sqrt{50}=5\sqrt2$, so the perimeter is $20\sqrt2\approx28.3$ m. If there is also a second garden with side $\sqrt{18}$ m, the sum of the two sides is $\sqrt{50}+\sqrt{18}$, and we cannot add two different roots like ordinary numbers. How can we add and simplify expressions like this?

In the grade 10 entrance paper, the first question is often an expression with roots: simplify it, then find a value or find $x$. This is a question where you should aim for full marks, and this lesson revises the tools you need.

## Rules for square roots

### Explore: why can $\sqrt{50}+\sqrt{18}$ be added?

We have $\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$ and $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$. The two roots now have the **same form** $\sqrt2$, so
$$\sqrt{50}+\sqrt{18}=5\sqrt2+3\sqrt2=8\sqrt2.$$
The idea is to bring the roots to the same form and then add them like terms. The tools for this are the rules below.

:::theorem Rules to remember
For expressions $A$ and $B$ we have:
- $\sqrt{A^2}=|A|$ (equal to $A$ if $A\geq0$, equal to $-A$ if $A<0$);
- $\sqrt{AB}=\sqrt A\cdot\sqrt B$ for $A\geq0$, $B\geq0$;
- $\sqrt{\dfrac AB}=\dfrac{\sqrt A}{\sqrt B}$ for $A\geq0$, $B>0$;
- taking a factor out of the root: $\sqrt{A^2B}=|A|\sqrt B$ for $B\geq0$;
- rationalising the denominator: $\dfrac{k}{\sqrt a}=\dfrac{k\sqrt a}{a}$ for $a>0$; $\dfrac{k}{\sqrt a\pm b}=\dfrac{k(\sqrt a\mp b)}{a-b^2}$ for $a\geq0$, $a\neq b^2$.
:::

**Why are they true?** Both sides of $\sqrt{AB}=\sqrt A\cdot\sqrt B$ are non-negative and have equal squares: $(\sqrt A\sqrt B)^2=AB$. And $\sqrt{A^2}=|A|$ because $|A|\geq0$ and $|A|^2=A^2$. The formula for rationalising uses the identity $(\sqrt a-b)(\sqrt a+b)=a-b^2$: multiplying the numerator and the denominator by the **conjugate** of the denominator removes the root from the denominator.

An expression with roots makes sense only when every expression under a root is non-negative and every denominator is non-zero. This is the **condition for the expression to be defined**, and we always state it before transforming.

:::example Transforming and adding roots
Simplify $A=\sqrt{75}-2\sqrt{12}+\sqrt{27}$.

**Solution.** We take factors out of the roots:
$$\sqrt{75}=\sqrt{25\cdot3}=5\sqrt3,\quad 2\sqrt{12}=2\sqrt{4\cdot3}=4\sqrt3,\quad\sqrt{27}=\sqrt{9\cdot3}=3\sqrt3.$$
So $A=5\sqrt3-4\sqrt3+3\sqrt3=4\sqrt3$.

So $A=4\sqrt3$.
:::

:::example Rationalising the denominator
Rationalise the denominator of each expression:

a) $\dfrac{6}{\sqrt3}$;

b) $\dfrac{4}{\sqrt5-1}$;

c) $\dfrac{6}{3+\sqrt3}$.

**Solution.**

a) $\dfrac{6}{\sqrt3}=\dfrac{6\sqrt3}{3}=2\sqrt3$.

b) Multiply the numerator and the denominator by the conjugate $\sqrt5+1$:
$$\frac{4}{\sqrt5-1}=\frac{4(\sqrt5+1)}{(\sqrt5-1)(\sqrt5+1)}=\frac{4(\sqrt5+1)}{5-1}=\sqrt5+1.$$

c) Multiply the numerator and the denominator by $3-\sqrt3$:
$$\frac{6}{3+\sqrt3}=\frac{6(3-\sqrt3)}{9-3}=3-\sqrt3.$$

**Answer.** a) $2\sqrt3$; b) $\sqrt5+1$; c) $3-\sqrt3$.
:::

:::example The identity $\sqrt{A^2}=|A|$
Simplify:

a) $\sqrt{(\sqrt3-2)^2}$;

b) $\sqrt{7-4\sqrt3}$.

**Solution.**

a) We have $\sqrt{(\sqrt3-2)^2}=|\sqrt3-2|$. Since $\sqrt3<2$, we have $\sqrt3-2<0$, so $|\sqrt3-2|=2-\sqrt3$.

b) We write $7-4\sqrt3=4-4\sqrt3+3=(2-\sqrt3)^2$. So $\sqrt{7-4\sqrt3}=|2-\sqrt3|=2-\sqrt3$ (since $2>\sqrt3$).

**Answer.** a) $2-\sqrt3$; b) $2-\sqrt3$.
:::

## Simplifying expressions with fractions

Entrance questions often give an expression with several fractions. We work in this order: **find the condition for the expression to be defined**, **factorise the denominators**, **find a common denominator**, **simplify**, and only then answer the extra parts.

:::example An exam-style question
Given the expression
$$P=\left(\frac{2\sqrt x}{\sqrt x+3}+\frac{\sqrt x}{\sqrt x-3}-\frac{3x+3}{x-9}\right):\left(\frac{2\sqrt x-2}{\sqrt x-3}-1\right)\quad\text{with }x\geq0,\ x\neq9.$$
a) Simplify $P$.

b) Find the value of $P$ when $x=16$.

c) Find $x$ such that $P=-\dfrac35$.

**Solution.**

*Understand.* We must simplify a division of two expressions, then substitute a value and solve an equation with a root. The condition $x\geq0$, $x\neq9$ is given.

*Plan.* The denominator $x-9=(\sqrt x-3)(\sqrt x+3)$, so we use the common denominator $x-9$ in the first bracket and the common denominator $\sqrt x-3$ in the second.

*Solve.*

a) The first bracket has numerator
$$2\sqrt x(\sqrt x-3)+\sqrt x(\sqrt x+3)-(3x+3)=2x-6\sqrt x+x+3\sqrt x-3x-3=-3\sqrt x-3=-3(\sqrt x+1),$$
so the first bracket equals $\dfrac{-3(\sqrt x+1)}{(\sqrt x-3)(\sqrt x+3)}$. The second bracket equals $\dfrac{2\sqrt x-2-(\sqrt x-3)}{\sqrt x-3}=\dfrac{\sqrt x+1}{\sqrt x-3}$. So
$$P=\frac{-3(\sqrt x+1)}{(\sqrt x-3)(\sqrt x+3)}\cdot\frac{\sqrt x-3}{\sqrt x+1}=\frac{-3}{\sqrt x+3}.$$

b) For $x=16$ (which satisfies the condition), $\sqrt x=4$, so $P=\dfrac{-3}{4+3}=-\dfrac37$.

c) $P=-\dfrac35$ means $\dfrac{-3}{\sqrt x+3}=-\dfrac35$, that is $\sqrt x+3=5$, so $\sqrt x=2$ and $x=4$. The value $x=4$ satisfies the condition.

So a) $P=\dfrac{-3}{\sqrt x+3}$; b) $P=-\dfrac37$; c) $x=4$.

*Look back.* Check with $x=4$: the simplified expression gives $\dfrac{-3}{2+3}=-\dfrac35$, as required. Check the original expression at $x=16$: the first bracket is $\dfrac{8}{7}+\dfrac{4}{1}-\dfrac{51}{7}=-\dfrac{15}{7}$ and the second bracket is $\dfrac{6}{1}-1=5$, so $P=-\dfrac{15}{7}\div5=-\dfrac37$, which matches. Two methods give the same result, so we can be confident.
:::

:::example Simple equations with roots
Solve the equations:

a) $\sqrt{2x+1}=3$;

b) $\sqrt{x^2-4x+4}=3$.

**Solution.**

a) The condition is $2x+1\geq0$, that is $x\geq-\dfrac12$. Squaring both sides (both are non-negative), we get $2x+1=9$, so $x=4$, which satisfies the condition.

b) We have $x^2-4x+4=(x-2)^2$, so the equation becomes $|x-2|=3$. So $x-2=3$ or $x-2=-3$, that is $x=5$ or $x=-1$.

**Answer.** a) $x=4$; b) $x=5$ or $x=-1$.
:::

:::example A square pane of glass
Suppose a square pane of glass has area $72$ dm². Find the side, the diagonal and the perimeter of the pane (round to 1 decimal place).

**Solution.** Let the side of the pane be $a$ (dm). We have $a^2=72$, so $a=\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2\approx8.5$ (dm).

The diagonal of the square is $d=a\sqrt2=6\sqrt2\cdot\sqrt2=6\cdot2=12$ (dm).

The perimeter is $4a=24\sqrt2\approx33.9$ (dm).

So the side is $6\sqrt2\approx8.5$ dm, the diagonal is $12$ dm and the perimeter is $24\sqrt2\approx33.9$ dm.
:::

:::warning Common mistakes
- **Splitting the root of a sum.** Wrong: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Why it is wrong: $\sqrt{a+b}\neq\sqrt a+\sqrt b$ (here $\sqrt{25}=5$). Right: we may only split the root of a **product** or a quotient.
- **Forgetting the absolute value.** Wrong: $\sqrt{(\sqrt3-2)^2}=\sqrt3-2$. Why it is wrong: a square root is never negative, but $\sqrt3-2<0$. Right: $\sqrt{(\sqrt3-2)^2}=|\sqrt3-2|=2-\sqrt3$.
- **Taking a factor out wrongly.** Wrong: $\sqrt{18}=9\sqrt2$. Why it is wrong: the factor $9$ must be square-rooted when it comes out. Right: $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$.
- **Forgetting the condition or not checking the roots.** Wrong: solving $\sqrt{x-1}=-2$ by squaring both sides and getting a root. Why it is wrong: a square root is non-negative, so the equation has no solution. Right: state the condition and compare the roots with the conditions of the question (for example $x\neq9$).
- **Wrong sign with the conjugate.** Wrong: $\dfrac{4}{\sqrt5-1}=\dfrac{4(\sqrt5-1)}{5-1}$. Why it is wrong: multiplying by the denominator itself makes the denominator $(\sqrt5-1)^2$, which still has a root. Right: multiply by $\sqrt5+1$.
:::

**Connections.** This lesson uses square roots and identities from grade 9, common denominators of fractions from grade 8, and absolute value. The simplifications here are tools for later topics, especially quadratic equations and Viète's theorem.

## Key terms

:::terms
- square root | căn bậc hai
- expression with roots | biểu thức chứa căn
- condition for the expression to be defined | điều kiện xác định
- taking a factor out of the root | đưa thừa số ra ngoài dấu căn
- rationalising the denominator | trục căn thức ở mẫu
- conjugate expression | biểu thức liên hợp
- absolute value | giá trị tuyệt đối
- simplify | rút gọn
- diagonal | đường chéo
:::

## Summary

- Bring the roots to the same form (take factors out of the root), then add or subtract.
- $\sqrt{A^2}=|A|$; $\sqrt{AB}=\sqrt A\sqrt B$ for $A,B\geq0$.
- Rationalising: $\dfrac{k}{\sqrt a}=\dfrac{k\sqrt a}{a}$; $\dfrac{k}{\sqrt a\pm b}=\dfrac{k(\sqrt a\mp b)}{a-b^2}$.
- Simplifying an expression with fractions: state the condition, factorise the denominators, find a common denominator, simplify.
- In exams: simplify first, then substitute a value or solve an equation, and remember to compare the answer with the condition.
- The diagonal of a square of side $a$ is $a\sqrt2$.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Simplify $A=\sqrt{48}-3\sqrt{12}+\sqrt{75}$.

::hint
**What you need:** taking factors out of the root.

**Steps:**
1. Write $48=16\cdot3$, $12=4\cdot3$, $75=25\cdot3$.
2. Add and subtract the roots of the same form.

::solution
$A=4\sqrt3-3\cdot2\sqrt3+5\sqrt3=4\sqrt3-6\sqrt3+5\sqrt3=3\sqrt3$.

**Answer.** $A=3\sqrt3$.
:::

:::exercise
Simplify:

a) $\sqrt{(1-\sqrt2)^2}$;

b) $\sqrt{9-4\sqrt5}$.

::hint
**What you need:** $\sqrt{A^2}=|A|$; write the expression under the root as a square.

**Steps:**
1. In part a), decide the sign of $1-\sqrt2$.
2. In part b), write $9-4\sqrt5=(\sqrt5-2)^2$.

::solution
a) $\sqrt{(1-\sqrt2)^2}=|1-\sqrt2|=\sqrt2-1$ because $1<\sqrt2$.

b) $9-4\sqrt5=5-4\sqrt5+4=(\sqrt5-2)^2$, so $\sqrt{9-4\sqrt5}=|\sqrt5-2|=\sqrt5-2$ because $\sqrt5>2$.

**Answer.** a) $\sqrt2-1$; b) $\sqrt5-2$.
:::

:::exercise
Rationalise the denominator:

a) $\dfrac{10}{\sqrt5}$;

b) $\dfrac{8}{\sqrt5+1}$;

c) $\dfrac{6}{\sqrt7-\sqrt3}$.

::hint
**What you need:** multiply the numerator and the denominator by the conjugate of the denominator.

**Steps:**
1. Find the conjugate of each denominator.
2. Use $(a-b)(a+b)=a^2-b^2$ for the denominator.

::solution
a) $\dfrac{10}{\sqrt5}=\dfrac{10\sqrt5}{5}=2\sqrt5$.

b) $\dfrac{8}{\sqrt5+1}=\dfrac{8(\sqrt5-1)}{5-1}=2(\sqrt5-1)=2\sqrt5-2$.

c) $\dfrac{6}{\sqrt7-\sqrt3}=\dfrac{6(\sqrt7+\sqrt3)}{7-3}=\dfrac{3(\sqrt7+\sqrt3)}{2}$.

**Answer.** a) $2\sqrt5$; b) $2\sqrt5-2$; c) $\dfrac{3(\sqrt7+\sqrt3)}{2}$.
:::

:::exercise
Given $A=\dfrac{\sqrt x+1}{\sqrt x-2}$ with $x\geq0$, $x\neq4$. a) Find the value of $A$ when $x=9$. b) Find $x$ such that $A=3$.

::hint
**What you need:** substitute a value into the expression; solve an equation in $\sqrt x$.

**Steps:**
1. For $x=9$, find $\sqrt x$.
2. In part b), multiply both sides by $\sqrt x-2$ and find $\sqrt x$.

::solution
a) For $x=9$, $\sqrt x=3$, so $A=\dfrac{3+1}{3-2}=4$.

b) $A=3$ means $\sqrt x+1=3(\sqrt x-2)$, that is $2\sqrt x=7$, so $\sqrt x=\dfrac72$ and $x=\dfrac{49}{4}$. This value satisfies the condition.

**Answer.** a) $A=4$; b) $x=\dfrac{49}4$.
:::

:::exercise
**Question 1.** ($2.0$ marks) Given the expression
$$P=\left(\frac{\sqrt x}{\sqrt x-1}-\frac{1}{x-\sqrt x}\right):\left(\frac1{\sqrt x+1}+\frac2{x-1}\right)\quad\text{with }x>0,\ x\neq1.$$
a) Simplify $P$. b) Find the value of $P$ when $x=4$.

::hint
**What you need:** $x-\sqrt x=\sqrt x(\sqrt x-1)$ and $x-1=(\sqrt x-1)(\sqrt x+1)$.

**Steps:**
1. Use the common denominator $\sqrt x(\sqrt x-1)$ in the first bracket and $x-1$ in the second.
2. Simplify, then carry out the division.

::solution
a) The first bracket equals $\dfrac{x-1}{\sqrt x(\sqrt x-1)}=\dfrac{\sqrt x+1}{\sqrt x}$. The second bracket equals $\dfrac{(\sqrt x-1)+2}{x-1}=\dfrac{\sqrt x+1}{x-1}=\dfrac1{\sqrt x-1}$. So
$$P=\frac{\sqrt x+1}{\sqrt x}\cdot(\sqrt x-1)=\frac{x-1}{\sqrt x}.$$

b) For $x=4$: $P=\dfrac{4-1}{2}=\dfrac32$.

**Answer.** a) $P=\dfrac{x-1}{\sqrt x}$; b) $P=\dfrac32$.
:::

:::exercise
Suppose a square tarpaulin has area $50$ m². Find the side, the diagonal and the perimeter of the tarpaulin (round the perimeter to 1 decimal place).

::hint
**What you need:** side $a=\sqrt S$; diagonal $d=a\sqrt2$.

**Steps:**
1. Find $a$ and simplify $\sqrt{50}$.
2. Find $d$ and the perimeter $4a$.

::solution
The side is $a=\sqrt{50}=5\sqrt2\approx7.1$ (m). The diagonal is $d=5\sqrt2\cdot\sqrt2=10$ (m). The perimeter is $4a=20\sqrt2\approx28.3$ (m).

**Answer.** Side $5\sqrt2$ m; diagonal $10$ m; perimeter $\approx28.3$ m.
:::

:::exercise
Solve the equations:

a) $\sqrt{3x-2}=4$;

b) $\sqrt{x^2-6x+9}=4$.

::hint
**What you need:** the condition for the root; $\sqrt{A^2}=|A|$.

**Steps:**
1. In part a), square both sides and check the condition.
2. In part b), write $x^2-6x+9=(x-3)^2$.

::solution
a) The condition is $x\geq\dfrac23$. Squaring both sides: $3x-2=16$, so $x=6$, which satisfies the condition.

b) The equation becomes $|x-3|=4$, so $x-3=4$ or $x-3=-4$, that is $x=7$ or $x=-1$.

**Answer.** a) $x=6$; b) $x=7$ or $x=-1$.
:::

:::exercise
Compare (without a calculator):

a) $3\sqrt5$ and $2\sqrt{11}$;

b) $\sqrt7+\sqrt3$ and $4$.

::hint
**What you need:** for $a,b\geq0$: $a>b$ if and only if $a^2>b^2$.

**Steps:**
1. Take the factor into the root or square both sides.
2. Compare the two non-negative numbers.

::solution
a) $(3\sqrt5)^2=45$ and $(2\sqrt{11})^2=44$, and $45>44$, so $3\sqrt5>2\sqrt{11}$.

b) $(\sqrt7+\sqrt3)^2=10+2\sqrt{21}$. Since $\sqrt{21}>4$, we have $10+2\sqrt{21}>18>16=4^2$, so $\sqrt7+\sqrt3>4$.

**Answer.** a) $3\sqrt5>2\sqrt{11}$; b) $\sqrt7+\sqrt3>4$.
:::

:::exercise Challenge
Find $B=\dfrac1{1+\sqrt2}+\dfrac1{\sqrt2+\sqrt3}+\dfrac1{\sqrt3+2}+\dots+\dfrac1{\sqrt8+3}$.

::hint
**What you need:** rationalising the denominator: $\dfrac1{\sqrt k+\sqrt{k+1}}=\sqrt{k+1}-\sqrt k$.

**Steps:**
1. Rationalise the denominator of each term.
2. Add up: the middle terms cancel.

::solution
Multiplying the numerator and the denominator by $\sqrt{k+1}-\sqrt k$ gives $\dfrac1{\sqrt k+\sqrt{k+1}}=\dfrac{\sqrt{k+1}-\sqrt k}{(k+1)-k}=\sqrt{k+1}-\sqrt k$. So
$$B=(\sqrt2-1)+(\sqrt3-\sqrt2)+\dots+(3-\sqrt8)=3-1=2.$$

**Answer.** $B=2$.
:::

## Mini test

:::quiz
::mc
The simplified value of $\sqrt{48}-\sqrt{12}$ is
A. $6$.
B. $2\sqrt3$.
C. $2$.
D. $3\sqrt3$.
::key B
$\sqrt{48}-\sqrt{12}=4\sqrt3-2\sqrt3=2\sqrt3$. Option A is $\sqrt{48-12}$ (root of a difference), C is $\sqrt{48}\div\sqrt{12}$, and D is $4\sqrt3-\sqrt3$.

::mc
Rationalising the denominator of $\dfrac{6}{\sqrt5-\sqrt2}$ gives
A. $2\sqrt5-2\sqrt2$.
B. $6(\sqrt5+\sqrt2)$.
C. $2\sqrt5+2\sqrt2$.
D. $\dfrac{\sqrt5+\sqrt2}{2}$.
::key C
$\dfrac{6(\sqrt5+\sqrt2)}{5-2}=2(\sqrt5+\sqrt2)$. Option A has the wrong sign in the conjugate, B forgets to divide by $5-2=3$, and D divides by $12$ by mistake.

::mc
The value of $\sqrt{(\sqrt5-3)^2}$ is
A. $\sqrt5-3$.
B. $3+\sqrt5$.
C. $\sqrt5+3$.
D. $3-\sqrt5$.
::key D
$\sqrt{(\sqrt5-3)^2}=|\sqrt5-3|=3-\sqrt5$ because $\sqrt5<3$. Option A forgets the absolute value, and B and C are different expressions (an addition in place of a subtraction).

::mc
The condition for $\dfrac{1}{\sqrt{x-3}}$ to be defined is
A. $x>3$.
B. $x\geq3$.
C. $x\neq3$.
D. $x>0$.
::key A
The expression under the root must be non-negative and the denominator non-zero, so $x-3>0$. Option B misses the condition that the denominator is non-zero, C misses the condition of the root, and D takes the condition of $\sqrt x$.

::tf
Given $P=\dfrac{2\sqrt x}{\sqrt x+2}$ with $x\geq0$. Decide whether each statement is true or false.
a) $P$ is defined for every $x\geq0$.
b) $P=2$ when $x=0$.
c) $P=1$ when $x=4$.
d) $P=\dfrac12$ when $x=1$.
::key T F T F
a) True: $\sqrt x+2>0$ for every $x\geq0$. b) False: at $x=0$, $P=0$. c) True: $P=\dfrac{4}{4}=1$. d) False: at $x=1$, $P=\dfrac23$.

::sa
Given $P=\dfrac{x-1}{\sqrt x}$ with $x>0$. Find the value of $P$ when $x=4$.
::key 1.5
$P=\dfrac{4-1}{2}=\dfrac32=1.5$.

::sa
A square pane of glass has area $72$ dm². Find the length of its diagonal (in dm).
::key 12
The side is $6\sqrt2$, so the diagonal is $6\sqrt2\cdot\sqrt2=12$.
:::
