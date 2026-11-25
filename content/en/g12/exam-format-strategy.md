---
title: The exam format and how to tackle it
description: Learn the 2025+ format of the Vietnamese graduation maths exam, how each part is marked, how to plan 90 minutes and how to write short answers in 4 boxes.
minutes: 25
---

:::goals
- Describe the three parts of the graduation maths exam and how each part is marked.
- Work out the mark of a paper, especially the mark of a true/false question.
- Plan the 90 minutes and choose a sensible order of work.
- Round and write a short answer in the 4 boxes correctly.
:::

Two students, Hà and Nam, each get $8$ true/false statements right in Part II. Hà gets all $4$ statements right in two questions and none in the other two. Nam gets $2$ statements right in each of the four questions. With the same $8$ right, who scores more?

The answer lies in how Part II is marked, and it directly affects how you should work. This lesson describes the format of the specimen papers published by the Ministry of Education and Training from 2025, and a few habits that stop you losing marks needlessly. The Ministry may adjust the format or the marking from year to year, so follow the official announcement for your exam year.

## Format and marking

The paper has three parts, lasts $90$ minutes, and is marked out of $10$.

| Part | Question type | Questions | Mark each | Total |
|---|---|---|---|---|
| I | Multiple choice (A, B, C, D) | $12$ | $0.25$ | $3$ |
| II | True/false, each with $4$ statements a), b), c), d) | $4$ | up to $1$ | $4$ |
| III | Short answer | $6$ | $0.5$ | $3$ |

:::note The mark for a true/false question
In one Part II question, the number of statements you judge correctly decides the mark:

| Correct statements | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| Mark | $0$ | $0.1$ | $0.25$ | $0.5$ | $1$ |
:::

Look at the end of the table: going from $3$ to $4$ correct statements doubles the mark for the question. That last statement is worth a lot, so every statement deserves a careful check.

:::example Marking a paper
An gets $10$ questions right in Part I. In Part II, An gets $4$, $3$, $2$, $3$ statements right. In Part III, An gets $4$ questions right. Find An's mark.

**Solution.** We work out each part and add:

$$\begin{aligned}
\text{Part I}&: 10\cdot0.25=2.5,\\
\text{Part II}&: 1+0.5+0.25+0.5=2.25,\\
\text{Part III}&: 4\cdot0.5=2.
\end{aligned}$$

So An scores $2.5+2.25+2=6.75$.
:::

Back to the opening question. Hà scores $1+1=2$, while Nam scores $4\cdot0.25=1$. The same $8$ correct statements, but Hà scores twice as much, because the marks reward a question done completely. That is why it pays to make each question solid.

## Part I: multiple choice

Each question has exactly one correct option, and a wrong answer loses nothing. So **never leave a question blank**. Part I questions are usually short and test one formula or one step.

Three quick methods:
- **Solve directly**, then match your result with the options.
- **Work backwards**: put each option into the condition of the question. For example, differentiate an option to check an antiderivative.
- **Eliminate**: wrong options usually come from a familiar mistake (wrong sign, missing coefficient, wrong formula). Once you spot the mistake, you can rule the option out quickly.
You do not need all three methods for every question; pick the one that suits the question in front of you.

:::example Working backwards with the derivative
The family of antiderivatives of $f(x)=2x+e^x$ is
A. $x^2+e^x+C$.
B. $2+e^x+C$.
C. $x^2+\dfrac{e^{x+1}}{x+1}+C$.
D. $\dfrac{x^2}{2}+e^x+C$.

**Solution.** The correct option is the one whose derivative is $f(x)$. Differentiate option A:

$$\left(x^2+e^x+C\right)'=2x+e^x=f(x).$$

So the answer is **A**. Option B is the derivative of $2x$, not an antiderivative; C applies the power rule to $e^x$, which is wrong; D loses the coefficient $2$.
:::

## Part II: true or false

Each question gives a common setting (a function, a figure, a data table) followed by four statements. Later statements are usually harder. So read the common part carefully before you judge any statement.

:::tip Judge each statement on its own
- Read the common stem carefully, and work out first whatever you will use several times (derivative, roots, values at key points).
- Each statement is a separate claim: one being false says nothing about another. There is no rule that "at least one must be false".
- Watch the small words that decide the answer: "distinct", "on the interval", "only", "greatest", units. Many students lose marks here by reading too fast.
:::

:::example A true/false question on a function
Let $f(x)=x^3-3x+2$.
a) $f'(x)=3x^2-3$.
b) The function is increasing on $(-1, 1)$.
c) The local maximum value of the function is $4$.
d) The equation $f(x)=0$ has three distinct roots.

**Solution.** We first work out the derivative and the values we need: $f'(x)=3(x-1)(x+1)$, $f(-1)=4$, $f(1)=0$.

a) **True**: the derivative of $x^3$ is $3x^2$, and of $-3x$ is $-3$.

b) **False**: for $-1<x<1$, $f'(x)<0$, so the function is decreasing on $(-1, 1)$.

c) **True**: $f'$ changes from $+$ to $-$ at $x=-1$, and the local maximum value is $f(-1)=-1+3+2=4$.

d) **False**: factorising, $f(x)=(x-1)^2(x+2)$, so the equation has only two distinct roots, $x=1$ and $x=-2$.

Key: T F T F.
:::

## Part III: short answers and the 4 boxes

Each Part III answer is **one number**, and the answer sheet gives you $4$ boxes to write it in. Many students slip here: the minus sign and the decimal comma **each take a box**, just like a digit. (The Vietnamese sheet uses a comma, not a point, as the decimal separator.)

:::diagram Writing the answer $-0.5$ in 4 boxes
alt: Four adjacent square boxes containing a minus sign, the digit 0, a decimal comma and the digit 5
point P0 0,0 ""
point P1 1,0 ""
point P2 2,0 ""
point P3 3,0 ""
point P4 4,0 ""
point Q0 0,1 ""
point Q1 1,1 ""
point Q2 2,1 ""
point Q3 3,1 ""
point Q4 4,1 ""
polygon P0 P1 Q1 Q0
polygon P1 P2 Q2 Q1
polygon P2 P3 Q3 Q2
polygon P3 P4 Q4 Q3
label 0.5,0.5 "−"
label 1.5,0.5 "0"
label 2.5,0.5 ","
label 3.5,0.5 "5"
:::

:::note Rules for writing an answer
- Round **exactly as the question says** (to the nearest whole number, 1 decimal place, 2 decimal places). Round only at the last step; keep more digits in between so that small errors do not pile up.
- Fill the boxes from the left, one character per box; leave unused boxes empty.
- Do not write a final $0$ after the decimal comma: a result that rounds to $1.10$ is written 1,1, and $2.50$ is written 2,5.
- The intended answer always fits in $4$ boxes. If your result needs $5$ characters or more, you have almost certainly made a calculation or rounding error, so check it again.
:::

Two examples. $\dfrac{7}{4}=1.75$ is written 1,75, which fills all $4$ boxes. $-\dfrac{2}{3}$ to 1 decimal place is $-0.7$, which also fills all $4$ boxes.

:::example A short-answer question with rounding
Find $\displaystyle\int_1^3\frac{1}{x}\,dx$. Give your answer to 2 decimal places.

**Solution.** An antiderivative of $\dfrac1x$ on $(0, +\infty)$ is $\ln x$:

$$\int_1^3\frac1x\,dx=\Big[\ln x\Big]_1^3=\ln 3-\ln 1=\ln 3\approx1.0986.$$

To 2 decimal places this is $1.10$. A final $0$ after the decimal comma is not written on the sheet, so the answer is $1.1$: we write 1,1 (three boxes).
:::

## Time plan and checking

$90$ minutes for $22$ questions is tight, so a plan made beforehand saves you from panic. Here is a suggestion:

| Task | Suggested time |
|---|---|
| Part I ($12$ questions) | about $20$–$25$ minutes |
| Part II ($4$ questions) | about $25$–$30$ minutes |
| Part III ($6$ questions) | about $25$–$30$ minutes |
| Checking, filling in the sheet | about $5$–$10$ minutes |

You do not have to work in question order. Work in order of **difficulty**: on a first pass do every question you are sure of, mark the hard ones, then come back. Why? Because one hard question can eat the time of several easy ones. Do not spend more than $5$ minutes on one Part I question.

Your scientific calculator is a tool to **check** with: evaluate a function at given points, compute definite integrals, solve quadratic and cubic equations. It helps you catch slips, but knowing what to compute still needs your own reasoning.

:::warning Common mistakes
- **Leaving a multiple-choice question blank.** Wrong answers lose nothing, so always choose an option.
- **Guessing true/false "to balance".** Wrong: "the first three are true, so d must be false". Right: check each statement with a calculation.
- **Rounding too early.** Wrong: taking $\ln 3\approx1.1$ and multiplying by $5$ to get $5.5$. Right: $5\ln3\approx5.49$; round at the last step.
- **Wrong use of the boxes.** Wrong: putting the minus sign in the same box as a digit, or using a decimal point. Right: the minus sign takes one box and the comma takes one box.
:::

## Key terms

:::terms
- multiple-choice question | trắc nghiệm nhiều phương án lựa chọn
- true/false question | trắc nghiệm đúng/sai
- short-answer question | trắc nghiệm trả lời ngắn
- statement (claim) | ý (của câu đúng/sai)
- distractor | phương án nhiễu
- round to 1 decimal place | làm tròn đến hàng phần mười
- round to 2 decimal places | làm tròn đến hàng phần trăm
- answer sheet | phiếu trả lời
- scientific calculator | máy tính cầm tay
:::

## Exercises

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution. When you finish, try marking your own work using the table at the start of the lesson.

:::exercise Multiple choice
In one true/false question you judge $3$ statements correctly. What mark do you get for that question?
A. $0.5$.
B. $0.75$.
C. $0.25$.
D. $1$.

::hint
**What you need:** the Part II scale: $1$, $2$, $3$, $4$ correct statements give $0.1$, $0.25$, $0.5$, $1$.

**Steps:**
1. Read off the mark for $3$ correct statements.

::solution
By the marking scale for a true/false question: $1$ correct statement gives $0.1$ marks; $2$ correct statements give $0.25$; $3$ correct statements give $0.5$; all $4$ correct give $1$.

You judge $3$ statements correctly, so you get $0.5$ marks.

So the answer is **A**.

*Remark.* Option B is the mistake $3\cdot0.25=0.75$: the mark does not grow evenly with the number of correct statements. Option C is the mark for $2$ correct statements; option D is the mark for all $4$ correct.

**Answer.** A.
:::

:::exercise Written answer
Bình gets $9$ questions right in Part I; in Part II, $4$, $4$, $2$, $1$ statements right; in Part III, $3$ questions right. Find Bình's mark.

::hint
**What you need:** Part I $0.25$ per question; Part II by the scale; Part III $0.5$ per question.

**Steps:**
1. Work out each part.
2. Add the three parts.

::solution
By the marking scale: each correct Part I question gives $0.25$ marks; each correct Part III question gives $0.5$ marks; each Part II question is marked by the number of correct statements ($1$ statement: $0.1$; $2$: $0.25$; $3$: $0.5$; $4$: $1$ mark).

Part I: Bình gets $9$ questions right, so $9\cdot0.25=2.25$ marks.

Part II: the questions have $4$, $4$, $2$, $1$ statements right, so $1+1+0.25+0.1=2.35$ marks.

Part III: Bình gets $3$ questions right, so $3\cdot0.5=1.5$ marks.

The total is $2.25+2.35+1.5=6.1$ marks.

So Bình's mark is $6.1$.

**Answer.** $2.25+2.35+1.5=6.1$.
:::

:::exercise Short answer
A short-answer question asks for 1 decimal place, and the exact result is $-\dfrac{2}{3}$. What do you write in the 4 boxes? Why does the question not ask for 2 decimal places?

::hint
**What you need:** the minus sign and the comma each take a box.

**Steps:**
1. Work out $-\dfrac23\approx-0.667$ and round to 1 decimal place.
2. Count the characters if rounded to 2 decimal places.

::solution
We compute $-\dfrac23\approx-0.667$.

To 1 decimal place this is $-0.7$. The answer has four characters "−", "0", ",", "7", which exactly fill the four boxes.

To 2 decimal places it would be $-0.67$, with five characters "−", "0", ",", "6", "7", which needs $5$ boxes and cannot be written in $4$.

So you write $-0.7$ in the $4$ boxes; the question does not ask for 2 decimal places because $-0.67$ needs $5$ boxes, while the answer sheet has only $4$.

**Answer.** $-0.7$.
:::

:::exercise Multiple choice
The horizontal asymptote of the graph of $y=\dfrac{2x+1}{x-1}$ is
A. $y=2$.
B. $x=1$.
C. $y=-1$.
D. $x=2$.

::hint
**What you need:** a horizontal asymptote has the form $y=b$ with $b=\lim\limits_{x\to\pm\infty}y$.

**Steps:**
1. Rule out the options of the form $x=\dots$ straight away.
2. Find the limit as $x\to+\infty$.

::solution
The function $y=\dfrac{2x+1}{x-1}$ is defined for all $x\neq1$.

The horizontal asymptote is found from the limit of the function as $x\to\pm\infty$. Dividing the numerator and the denominator by $x$, we have
$$\lim_{x\to\pm\infty}\frac{2x+1}{x-1}=\lim_{x\to\pm\infty}\frac{2+\frac1x}{1-\frac1x}=\frac{2+0}{1-0}=2.$$

Hence the graph has the horizontal asymptote $y=2$.

So the answer is **A**.

*Remark.* Options B and D are vertical lines ($x=1$, $x=2$), so they cannot be horizontal asymptotes. Option C takes the ratio of the constant terms $\dfrac{1}{-1}=-1$, whereas the horizontal asymptote uses the ratio of the coefficients of $x$, that is $\dfrac21$.

**Answer.** A.
:::

:::exercise True/False
Given $\displaystyle\int_0^2 f(x)\,dx=3$ and $\displaystyle\int_0^2 g(x)\,dx=-1$.

a) $\displaystyle\int_0^2\left[f(x)+g(x)\right]dx=2$.

b) $\displaystyle\int_0^2 2f(x)\,dx=6$.

c) $\displaystyle\int_2^0 g(x)\,dx=1$.

d) $\displaystyle\int_0^2 f(x)g(x)\,dx=-3$.

::hint
**What you need:** the integral of a sum is the sum of the integrals; a constant factor comes outside; swapping the limits changes the sign. There is no rule for the integral of a product.

**Steps:**
1. Judge each statement with exactly one property.

::solution
a) **True.** By the property of the integral of a sum,
$$\int_0^2\left[f(x)+g(x)\right]dx=\int_0^2f(x)\,dx+\int_0^2g(x)\,dx=3+(-1)=2.$$

b) **True.** By the property of a constant multiple,
$$\int_0^22f(x)\,dx=2\int_0^2f(x)\,dx=2\cdot3=6.$$

c) **True.** Swapping the limits changes the sign, so
$$\int_2^0g(x)\,dx=-\int_0^2g(x)\,dx=-(-1)=1.$$

d) **False.** The integral of a product is not the product of the integrals, so we cannot conclude that $\displaystyle\int_0^2f(x)g(x)\,dx=3\cdot(-1)=-3$. For instance, $f(x)=\dfrac32$ and $g(x)=-x+\dfrac12$ satisfy the conditions, since $\displaystyle\int_0^2\frac32\,dx=3$ and $\displaystyle\int_0^2\left(-x+\frac12\right)dx=-2+1=-1$; but
$$\int_0^2f(x)g(x)\,dx=\int_0^2\left(-\frac32x+\frac34\right)dx=-3+\frac32=-\frac32\neq-3.$$

So statements a), b), c) are true; statement d) is false.

**Answer.** a) True; b) True; c) True; d) False.
:::

:::exercise Short answer
A car moves with velocity $v(t)=3t^2+2$ (m/s), with $t$ in seconds. Find the distance it travels in the first $3$ seconds, in metres.

::hint
**What you need:** the distance is the integral of the velocity when $v(t)\ge0$.

**Steps:**
1. Write $s=\displaystyle\int_0^3(3t^2+2)\,dt$.
2. Use the antiderivative $t^3+2t$.

::solution
The distance travelled in the first $3$ seconds is the integral of the velocity from $t=0$ to $t=3$. Since $v(t)=3t^2+2>0$ for all $t$, the car never reverses and the distance equals exactly this integral.

An antiderivative of $3t^2+2$ is $t^3+2t$. Hence
$$s=\int_0^3(3t^2+2)\,dt=\Big[t^3+2t\Big]_0^3=(27+6)-0=33.$$

So in the first $3$ seconds the car travels $33$ metres.

**Answer.** $33$.
:::

:::exercise Short answer
Two events $A$, $B$ have $P(A)=0.4$, $P(B\mid A)=0.3$ and $P(B\mid\overline{A})=0.5$. Find $P(B)$.

::hint
**What you need:** the law of total probability $P(B)=P(A)P(B\mid A)+P(\overline A)P(B\mid\overline A)$.

**Steps:**
1. Find $P(\overline A)=1-0.4$.
2. Substitute into the formula.

::solution
The events $A$ and $\overline{A}$ form a partition. We have $P(\overline{A})=1-P(A)=1-0.4=0.6$.

By the law of total probability:
$$P(B)=P(A)\cdot P(B\mid A)+P(\overline{A})\cdot P(B\mid\overline{A}).$$

Substituting, we get
$$P(B)=0.4\cdot0.3+0.6\cdot0.5=0.12+0.3=0.42.$$

So $P(B)=0.42$.

**Answer.** $0.42$.
:::

:::exercise Challenge
Minh plans the $90$-minute paper: the last $5$ minutes for checking, $2$ minutes for each Part I question and $5$ minutes for each Part III question. The remaining time is shared equally among the $4$ Part II questions. How many minutes does each Part II question get?

::hint
**What you need:** Part I has $12$ questions and Part III has $6$.

**Steps:**
1. Work out the time for Parts I and III.
2. Subtract everything from $90$ and divide by $4$.

::solution
Part I has $12$ questions at $2$ minutes each, so it needs $12\cdot2=24$ minutes.

Part III has $6$ questions at $5$ minutes each, so it needs $6\cdot5=30$ minutes.

The time left for Part II is $90-5-24-30=31$ minutes (after taking away the last $5$ minutes for checking).

Shared equally among the $4$ Part II questions, each gets $\dfrac{31}{4}=7.75$ minutes.

So each Part II question gets $7.75$ minutes, that is about $7$ minutes $45$ seconds (since $0.75\cdot60=45$ seconds).

**Answer.** $7.75$ minutes (about $7$ minutes $45$ seconds).
:::

## Mini test

:::quiz
::mc NB
The greatest possible mark for Part II is
A. $3$.
B. $1$.
C. $4$.
D. $2$.
::key C
Part II has $4$ questions worth up to $1$ mark each. Option B is the maximum for one question; option A is the total for Part I or Part III.

::mc VD
The minimum value of $y=x^2-4x+5$ on $[0, 3]$ is
A. $1$.
B. $2$.
C. $5$.
D. $0$.
::key A
$y'=2x-4=0\iff x=2\in(0, 3)$. Compare $y(0)=5$, $y(2)=1$, $y(3)=2$. Option B is $y(3)$, from comparing only the endpoints.

::mc TH
The result of a short-answer question is $\dfrac73$, to be given to 1 decimal place. You write
A. $2.33$.
B. $2.4$.
C. $2$.
D. $2.3$.
::key D
$\dfrac73\approx2.333$; the second decimal digit is $3<5$, so we round down to $2.3$. A rounds to the wrong place, C to the nearest whole number.

::mc TH
The integral $\displaystyle\int_0^1 3x^2\,dx$ equals
A. $-1$.
B. $1$.
C. $6$.
D. $3$.
::key B
$\Big[x^3\Big]_0^1=1$. Option C is the derivative $6x$ at $x=1$; option A computes $F(0)-F(1)$.

::tf NB NB NB TH
In Part II, a student judges $4$, $3$, $1$, $0$ statements correctly in the four questions.
a) The student gets $1$ mark for the first question.
b) The student gets $0.75$ for the second question.
c) The student gets $0.1$ for the third question.
d) The student's total for Part II is $1.6$.
::key T F T T
a) True: $4$ correct statements give $1$ mark. b) False: $3$ correct statements give $0.5$. c) True. d) True: $1+0.5+0.1+0=1.6$.

::sa VD
A student gets $11$ questions right in Part I, exactly $3$ statements right in every Part II question, and $3$ questions right in Part III. What is the student's mark?
::key 6.25
Part I: $11\cdot0.25=2.75$; Part II: $4\cdot0.5=2$; Part III: $3\cdot0.5=1.5$. Total $6.25$.

::sa TH
Find $\displaystyle\int_0^1 e^x\,dx$. Give your answer to 2 decimal places.
::key 1.72
$\Big[e^x\Big]_0^1=e-1\approx1.718$, which rounds to $1.72$.
:::
