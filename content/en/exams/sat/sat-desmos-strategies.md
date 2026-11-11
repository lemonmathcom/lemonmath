---
title: Desmos and test-taking strategies for the SAT
description: Use the built-in Desmos calculator well, enter student-produced answers correctly, and apply five strategies that save time on SAT Math.
minutes: 30
type: guide
---

:::goals
- Use Desmos to solve equations, systems and quadratics, and to check whether two expressions are equivalent.
- Enter student-produced responses in the format the test accepts.
- Choose between solving directly, plugging in numbers and working backward from the options.
- Use the Bluebook tools (mark for review, answer eliminator, reference sheet) to manage your time.
:::

On the digital SAT, every Math question allows a calculator, and Bluebook has the Desmos graphing calculator built in. Students who learned math in Vietnam are often very fast at algebra by hand, so they ignore Desmos. That is a mistake: Desmos does not replace your algebra, but it checks it in seconds and rescues you when an equation is too messy. This lesson shows when to use it and when not to.

## Five things Desmos does in seconds

| Task | What you type | What you read |
|---|---|---|
| Solve an equation $f(x)=g(x)$ | Both sides as `y=` lines, or the equation itself | The $x$-coordinates of the intersection points |
| Solve a system | Both equations exactly as given | The intersection point |
| Vertex and zeros of a quadratic | The function, e.g. `y=2x^2-12x+10` | Click the gray points: vertex and $x$-intercepts |
| Check equivalent expressions | Each expression as its own `y=` | Equivalent if the graphs lie on top of each other |
| Count solutions | Both sides as graphs | The number of intersection points |

:::example Solving a messy equation
What is the positive solution of $\sqrt{x+7}=x-5$?

**Solution.** By hand: square both sides, solve $x^2-11x+18=0$, get $x=2$ or $x=9$, and reject $x=2$ because $\sqrt9=3\ne-3$. In Desmos: type `y=sqrt(x+7)` and `y=x-5`. The graphs meet at only one point, $(9, 4)$, so the answer is **9**. Desmos never shows the false solution $x=2$, because a graph cannot meet a point that is not on it.
:::

:::tip Sliders
If a question has a constant such as $k$, type the expression with $k$ and Desmos offers a slider. Moving it shows how the graph changes, which helps with questions like "for what value of $k$ does the system have no solution?"
:::

## When not to use Desmos

Desmos is slow for questions that are faster by eye: "if $3x+7=22$, what is $6x+5$?" takes five seconds by hand. A good rule is: **think first for 15 seconds**. If you see the route, do it by hand and use Desmos only to check. If you do not, or the numbers are ugly, graph it.

Desmos also cannot read the question for you. In a word problem, writing the correct equation is still your job.

## Entering student-produced responses

About a quarter of the questions ask you to type the answer. The on-screen directions in Bluebook set the rules; the main ones are:

- A positive answer can use up to 5 characters, a negative answer up to 6 including the minus sign.
- Fractions are fine (`7/2`), and so are decimals (`3.5`). Mixed numbers such as $3\tfrac12$ are not accepted: type `7/2` or `3.5`.
- If a fraction does not fit, enter the decimal; a long decimal may be rounded or cut off to fill the space, for example `0.6666` or `0.6667` for $\tfrac23$.
- Do not type units, percent signs, commas or currency symbols.
- If more than one answer is correct, enter just one.

:::example Entering an answer
The solution of $3x-2=0$ is $x=\dfrac23$. Which entries are accepted?

**Solution.** `2/3`, `.6666`, `.6667`, `0.666` and `0.667` are accepted. `0.67` is too short a decimal when a more precise one fits, and `0.66` is wrong. The safest choice is the fraction `2/3`.
:::

## Strategies that save time

**1. Answer what is asked.** Underline the final question: $x$, $2x$, $x+y$ or "the value of $k$". Many wrong options are the right number for the wrong quantity.

**2. Plug in numbers.** When options are expressions, choose a simple value for the variable (not $0$ or $1$, which hide differences), compute the original expression and test each option.

:::example Plugging in a number
Which expression is equivalent to $(x+3)^2-(x-3)^2$?
A. $0$
B. $18$
C. $12x$
D. $2x^2+18$

**Solution.** Take $x=2$: $25-1=24$. Only option C gives $24$. Algebra confirms it: the difference of squares gives $(2x)(6)=12x$.
:::

**3. Work backward.** When options are numbers and the equation is hard to set up, test the options in the original condition, starting from a middle value.

**4. Estimate first.** A quick estimate removes options that are far too big or too small, and catches calculator slips.

**5. Use the module time wisely.** Questions are roughly ordered from easier to harder. If a question has taken two minutes and you have no plan, choose your best guess, mark it for review, and move on. There is no penalty for wrong answers.

## The Bluebook tools

- **Mark for Review** flags a question; the question navigator shows all flagged ones.
- **Answer eliminator** crosses out options you have ruled out, so you do not reread them.
- **Reference sheet** lists area, volume and triangle facts. Know it before test day, so you do not spend time searching it.
- **Timer** can be hidden, but it shows a warning near the end of the module.

Practice with these tools in the official practice tests in Bluebook, so that test day feels familiar. And remember the most important habit from [Revision that works](lesson:evidence-based-revision): after each practice set, put every wrong answer in your error log, including the ones caused by entering the answer badly.
