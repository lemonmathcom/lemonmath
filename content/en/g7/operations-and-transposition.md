---
title: Order of operations. Moving terms across the equals sign
description: Learn the order of operations and the rules for brackets with rational numbers, then use moving terms across the equals sign to find unknowns.
minutes: 30
---

:::goals
- Carry out operations in the correct order in expressions with powers, multiplication, division, addition, subtraction and brackets.
- Use the rule for removing brackets to calculate smartly.
- Use the rule for moving terms across the equals sign to find an unknown rational number.
- Solve real-life problems by forming a calculation or finding an unknown.
:::

Hà and Hùng both work out $\dfrac12+\dfrac13\cdot\dfrac32$. Hà adds first: $\dfrac56\cdot\dfrac32=\dfrac54$. Hùng multiplies first: $\dfrac12+\dfrac12=1$. The two answers differ, yet one expression can have only one value.

Who is right, and why? So that everyone reads an expression the same way, mathematics has an agreed order for the operations. After that we add a very handy tool for finding unknowns: moving terms across the equals sign.

## Order of operations

To find the value of an expression, we work in this order:

:::theorem Order of operations
- Without brackets: powers (indices) first, then multiplication and division (from left to right), then addition and subtraction (from left to right).
- With brackets: work inside the round brackets $(\ )$ first, then the square brackets $[\ ]$, then the braces $\{\ \}$.
:::

By this agreement Hùng is right: multiplication comes before addition, so $\dfrac12+\dfrac13\cdot\dfrac32=\dfrac12+\dfrac12=1$. Hà would be right only if the expression had brackets, $\left(\dfrac12+\dfrac13\right)\cdot\dfrac32$.

:::example Expressions without brackets
Calculate:

a) $\dfrac12+\dfrac13\cdot\dfrac32$.

b) $\dfrac23-\left(-\dfrac12\right)^2\cdot4$.

c) $\left(-\dfrac23\right)^2\div\dfrac49+\dfrac12$.

**Solution.** We do the powers first, then multiplication and division, and addition and subtraction last.

a) Multiply first: $\dfrac13\cdot\dfrac32=\dfrac12$. Then $\dfrac12+\dfrac12=1$.

b) Power first: $\left(-\dfrac12\right)^2=\dfrac14$. Multiply: $\dfrac14\cdot4=1$. Subtract: $\dfrac23-1=-\dfrac13$.

c) Power first: $\left(-\dfrac23\right)^2=\dfrac49$. Divide: $\dfrac49\div\dfrac49=1$. Add: $1+\dfrac12=\dfrac32$.

So a) $1$; b) $-\dfrac13$; c) $\dfrac32$.

**Answer.** a) $1$; b) $-\dfrac13$; c) $\dfrac32$.
:::

:::example Expressions with brackets
Calculate:

a) $\left(\dfrac12+\dfrac13\right)\cdot\dfrac32$.

b) $\left[\dfrac34-\left(\dfrac12-\dfrac13\right)\right]\div\dfrac12$.

c) $\dfrac25\cdot\left[\dfrac12-\left(-\dfrac34\right)\right]$.

**Solution.** We work out the innermost brackets first, then move outwards.

a) Inside the brackets: $\dfrac12+\dfrac13=\dfrac56$. Then $\dfrac56\cdot\dfrac32=\dfrac{15}{12}=\dfrac54$. This is exactly Hà's answer, now that the expression has brackets.

b) Round brackets: $\dfrac12-\dfrac13=\dfrac16$. Square brackets: $\dfrac34-\dfrac16=\dfrac9{12}-\dfrac2{12}=\dfrac7{12}$. Divide: $\dfrac7{12}\div\dfrac12=\dfrac7{12}\cdot2=\dfrac76$.

c) Inside the brackets: $\dfrac12-\left(-\dfrac34\right)=\dfrac12+\dfrac34=\dfrac54$. Multiply: $\dfrac25\cdot\dfrac54=\dfrac12$.

So a) $\dfrac54$; b) $\dfrac76$; c) $\dfrac12$.

**Answer.** a) $\dfrac54$; b) $\dfrac76$; c) $\dfrac12$.
:::

## Removing brackets

:::theorem Rule for removing brackets
When removing brackets:
- With a $+$ in front, keep the signs of all terms inside, $a+(b-c)=a+b-c$.
- With a $-$ in front, change the sign of every term inside, $a-(b-c)=a-b+c$.
:::

**Why?** Subtracting a number is adding its opposite, and the opposite of the sum $(b-c)$ is $-b+c$. For instance, $5-(3-1)=5-2=3$ and $5-3+1=3$: both ways agree. This is where mistakes are most common, so change the signs carefully.

:::example Removing brackets to calculate smartly
Calculate in a smart way:

a) $A=\left(\dfrac37+\dfrac25\right)-\left(\dfrac37-\dfrac35\right)$.

b) $B=-\left(\dfrac56-\dfrac12\right)+\left(\dfrac12-\dfrac16\right)$.

**Solution.** a) We remove the brackets, remembering to change the signs in the second bracket because of the $-$ in front:
$$A=\dfrac37+\dfrac25-\dfrac37+\dfrac35=\left(\dfrac37-\dfrac37\right)+\left(\dfrac25+\dfrac35\right)=0+1=1.$$

b) We remove the first bracket by changing signs, and the second by keeping them:
$$B=-\dfrac56+\dfrac12+\dfrac12-\dfrac16=\left(-\dfrac56-\dfrac16\right)+\left(\dfrac12+\dfrac12\right)=-1+1=0.$$

So $A=1$ and $B=0$.

**Answer.** $A=1$; $B=0$.
:::

## Moving terms across the equals sign

Recall a property of equalities: if $a=b$, then $a+c=b+c$ and $a-c=b-c$. The two sides of an equality stay equal when we add the same number to both or subtract the same number from both.

Suppose $x+\dfrac34=\dfrac16$. Subtracting $\dfrac34$ from both sides gives $x=\dfrac16-\dfrac34$. The term $\dfrac34$ has "moved" to the right-hand side and changed from $+$ to $-$.

:::theorem Moving terms across the equals sign
When a term moves from one side of an equality to the other, it changes sign:
$$a+b=c\ \Rightarrow\ a=c-b,\qquad a-b=c\ \Rightarrow\ a=c+b.$$
:::

:::example Finding unknowns by moving terms
Find $x$ such that:

a) $x+\dfrac34=\dfrac16$.

b) $x-\dfrac25=-\dfrac3{10}$.

c) $\dfrac56-x=\dfrac13$.

**Solution.** We move the known terms to one side and change their signs.

a) Move $\dfrac34$ to the right-hand side: $x=\dfrac16-\dfrac34=\dfrac2{12}-\dfrac9{12}=-\dfrac7{12}$.

b) Move $-\dfrac25$ to the right-hand side, where it becomes $+\dfrac25$: $x=-\dfrac3{10}+\dfrac25=-\dfrac3{10}+\dfrac4{10}=\dfrac1{10}$.

c) Move $\dfrac56$ to the right-hand side: $-x=\dfrac13-\dfrac56=\dfrac2{6}-\dfrac56=-\dfrac12$. So $x=\dfrac12$ (change the sign of both sides).

So a) $x=-\dfrac7{12}$; b) $x=\dfrac1{10}$; c) $x=\dfrac12$.

**Answer.** a) $-\dfrac7{12}$; b) $\dfrac1{10}$; c) $\dfrac12$.
:::

:::graph The solutions $-\dfrac7{12}$ (point a), $\dfrac1{10}$ (point b) and $\dfrac12$ (point c)
alt: A number line from -1 to 1; point a at -7/12, point b at 1/10 close to 0, point c at 1/2
x: -1.2..1.2
y: -1..1
segment: (-1.2, 0) (1.2, 0)
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (-0.5833, 0) "a" above
point: (0.1, 0) "b" above
point: (0.5, 0) "c" above
:::

:::example Moving terms, then dividing
Find $x$ such that:

a) $\dfrac23\cdot x-\dfrac12=\dfrac14$.

b) $\dfrac35-\left(x+\dfrac15\right)=\dfrac12$.

**Solution.** a) Move $-\dfrac12$ to the right-hand side: $\dfrac23\cdot x=\dfrac14+\dfrac12=\dfrac34$. This is a product with an unknown factor, so $x=\dfrac34\div\dfrac23=\dfrac34\cdot\dfrac32=\dfrac98$.

b) Remove the brackets, which have a $-$ in front, so the signs change: $\dfrac35-x-\dfrac15=\dfrac12$, that is, $\dfrac25-x=\dfrac12$. Move $\dfrac25$ to the right-hand side: $-x=\dfrac12-\dfrac25=\dfrac1{10}$. Hence $x=-\dfrac1{10}$.

So a) $x=\dfrac98$; b) $x=-\dfrac1{10}$.

**Answer.** a) $\dfrac98$; b) $-\dfrac1{10}$.
:::

:::example A cyclist's journey
A cyclist rides from A to B in three days (invented data). On the first day they ride $\dfrac25$ of the distance, on the second day $\dfrac14$ of the distance, and on the third day the last $14$ km. Find the distance AB.

**Solution.**

*Understand.* Let $x$ (km) be the distance AB. The first two days cover $\dfrac25x$ and $\dfrac14x$, the third day covers $14$ km, and the three parts add up to the whole distance $x$.

*Plan.* Form the equality $x-\dfrac25x-\dfrac14x=14$, then combine the terms containing $x$.

*Solve.* We have $\left(1-\dfrac25-\dfrac14\right)x=14$. Since $1-\dfrac25-\dfrac14=\dfrac{20-8-5}{20}=\dfrac7{20}$, we get $\dfrac7{20}x=14$. Hence $x=14\div\dfrac7{20}=14\cdot\dfrac{20}7=40$.

*Look back.* Check: on day one the cyclist rides $\dfrac25\cdot40=16$ km, on day two $\dfrac14\cdot40=10$ km, on day three $14$ km, and $16+10+14=40$ km. It all fits.

So the distance AB is $40$ km.

**Answer.** $40$ km.
:::

:::warning Common mistakes
- **Adding first, multiplying second.** Wrong: $\dfrac12+\dfrac13\cdot\dfrac32=\dfrac56\cdot\dfrac32$. Why it is wrong: without brackets, multiplication comes before addition. Right: $\dfrac12+\dfrac12=1$.
- **Removing brackets after a minus without changing signs.** Wrong: $\dfrac34-\left(\dfrac12-\dfrac13\right)=\dfrac34-\dfrac12-\dfrac13$. Why it is wrong: subtracting the whole bracket subtracts $\dfrac12$ but adds $\dfrac13$. Right: $\dfrac34-\dfrac12+\dfrac13$.
- **Moving a term without changing its sign.** Wrong: $x+\dfrac34=\dfrac16\Rightarrow x=\dfrac16+\dfrac34$. Why it is wrong: we must subtract $\dfrac34$ from both sides. Right: $x=\dfrac16-\dfrac34$.
:::

**Connections.** This lesson uses all four operations and the powers from the two previous lessons. Moving terms across the equals sign will become your main tool when you start solving equations in later lessons.

## Key terms

:::terms
- order of operations | thứ tự thực hiện các phép tính
- expression | biểu thức
- round brackets, square brackets, braces | dấu ngoặc tròn, ngoặc vuông, ngoặc nhọn
- rule for removing brackets | quy tắc dấu ngoặc
- rule for moving terms across the equals sign | quy tắc chuyển vế
- left-hand side, right-hand side | vế trái, vế phải
- equality | đẳng thức
- term | số hạng
:::

## Summary

- Without brackets: powers, then multiplication and division, then addition and subtraction. With brackets: round brackets, then square brackets, then braces.
- Removing brackets with a $+$ in front keeps the signs; with a $-$ in front it changes the sign of every term inside.
- Moving a term to the other side changes its sign: $a+b=c\Rightarrow a=c-b$.
- A product with an unknown factor: divide both sides by the known factor.

The opening question has its answer: Hùng is right, and the expression equals $1$. Whenever you work out a long expression, underline the operation to do first before writing the next line.

## Practice

Each exercise comes with what you need and some hints. Try it yourself first, then open the solution.

:::exercise
Calculate:

a) $\dfrac34-\dfrac12\cdot\dfrac23$.

b) $\dfrac12\div\left(-\dfrac14\right)+3$.

c) $\left(-\dfrac12\right)^3+\dfrac34\cdot\dfrac13$.

d) $\dfrac56-\left(\dfrac12\right)^2\div\dfrac32$.

::hint
**What you need:** powers first, then multiplication and division, then addition and subtraction.

**Steps:**
1. Underline the operation to do first in each part.
2. d) Work out $\left(\dfrac12\right)^2=\dfrac14$ and divide by $\dfrac32$ before subtracting.

::solution
a) Multiply first: $\dfrac12\cdot\dfrac23=\dfrac13$. Subtract: $\dfrac34-\dfrac13=\dfrac9{12}-\dfrac4{12}=\dfrac5{12}$.

b) Divide first: $\dfrac12\div\left(-\dfrac14\right)=\dfrac12\cdot(-4)=-2$. Add: $-2+3=1$.

c) Power: $\left(-\dfrac12\right)^3=-\dfrac18$. Multiply: $\dfrac34\cdot\dfrac13=\dfrac14$. Add: $-\dfrac18+\dfrac28=\dfrac18$.

d) Power: $\left(\dfrac12\right)^2=\dfrac14$. Divide: $\dfrac14\div\dfrac32=\dfrac14\cdot\dfrac23=\dfrac16$. Subtract: $\dfrac56-\dfrac16=\dfrac46=\dfrac23$.

So the results are $\dfrac5{12}$; $1$; $\dfrac18$; $\dfrac23$.

**Answer.** a) $\dfrac5{12}$; b) $1$; c) $\dfrac18$; d) $\dfrac23$.
:::

:::exercise
Calculate:

a) $\left(\dfrac23-\dfrac12\right)\cdot6$.

b) $\left[\dfrac12+\left(-\dfrac34\right)\right]\div\dfrac18$.

c) $\dfrac35-\left[\dfrac23-\left(\dfrac13-\dfrac12\right)\right]$.

d) $\left(-\dfrac23\right)^2\cdot\left(\dfrac94-\dfrac32\right)$.

::hint
**What you need:** work out the innermost brackets first, then move outwards.

**Steps:**
1. c) Work out $\dfrac13-\dfrac12$ first, and watch the minus in front of the round brackets.
2. d) Work out the bracket $\dfrac94-\dfrac32$ and the power separately, then multiply.

::solution
a) Inside the brackets: $\dfrac23-\dfrac12=\dfrac16$. Multiply: $\dfrac16\cdot6=1$.

b) Inside the brackets: $\dfrac12-\dfrac34=-\dfrac14$. Divide: $-\dfrac14\div\dfrac18=-\dfrac14\cdot8=-2$.

c) Round brackets: $\dfrac13-\dfrac12=-\dfrac16$. Square brackets: $\dfrac23-\left(-\dfrac16\right)=\dfrac46+\dfrac16=\dfrac56$. Subtract: $\dfrac35-\dfrac56=\dfrac{18}{30}-\dfrac{25}{30}=-\dfrac7{30}$.

d) Power: $\left(-\dfrac23\right)^2=\dfrac49$. Bracket: $\dfrac94-\dfrac64=\dfrac34$. Multiply: $\dfrac49\cdot\dfrac34=\dfrac13$.

So the results are $1$; $-2$; $-\dfrac7{30}$; $\dfrac13$.

**Answer.** a) $1$; b) $-2$; c) $-\dfrac7{30}$; d) $\dfrac13$.
:::

:::exercise
Remove the brackets and calculate smartly:

a) $\left(\dfrac79-\dfrac25\right)-\left(\dfrac79+\dfrac35\right)$.

b) $-\left(\dfrac58-\dfrac23\right)-\left(\dfrac38+\dfrac13\right)$.

::hint
**What you need:** removing brackets with a $-$ in front changes the sign of every term inside.

**Steps:**
1. Remove the brackets, changing signs in the right places.
2. Group terms with the same denominator: $\dfrac79$ with $\dfrac79$, $\dfrac58$ with $\dfrac38$, $\dfrac23$ with $\dfrac13$.

::solution
Removing brackets: when a bracket is preceded by a "$-$" sign, we change the sign of every term inside; when it is preceded by a "$+$" sign, the terms keep their signs.

a) Removing the brackets, we get
$$\left(\dfrac79-\dfrac25\right)-\left(\dfrac79+\dfrac35\right)=\dfrac79-\dfrac25-\dfrac79-\dfrac35.$$

Group the terms with the same denominator:
$$\begin{aligned}
&=\left(\dfrac79-\dfrac79\right)-\left(\dfrac25+\dfrac35\right)\\
&=0-1\\
&=-1.
\end{aligned}$$

b) Removing the brackets, we get
$$-\left(\dfrac58-\dfrac23\right)-\left(\dfrac38+\dfrac13\right)=-\dfrac58+\dfrac23-\dfrac38-\dfrac13.$$

Group the terms with the same denominator:
$$\begin{aligned}
&=\left(-\dfrac58-\dfrac38\right)+\left(\dfrac23-\dfrac13\right)\\
&=-1+\dfrac13\\
&=-\dfrac23.
\end{aligned}$$

So the result of a) is $-1$ and the result of b) is $-\dfrac23$.

**Answer.** a) $-1$; b) $-\dfrac23$.
:::

:::exercise
Find $x$ by moving terms across the equals sign:

a) $x-\dfrac13=\dfrac25$.

b) $x+\dfrac56=-\dfrac12$.

c) $\dfrac34-x=\dfrac18$.

d) $-x+\dfrac12=-\dfrac23$.

::hint
**What you need:** a term that moves to the other side changes its sign.

**Steps:**
1. a), b) Move the known term on the left-hand side to the right-hand side.
2. c), d) Find $-x$ first, then change the sign of both sides.

::solution
Rule for moving terms: when a term is moved from one side of an equation to the other, its sign is changed.

a) Moving $-\dfrac13$ to the right-hand side gives $+\dfrac13$:
$$x=\frac25+\frac13=\frac{6}{15}+\frac{5}{15}=\frac{11}{15}.$$

b) Moving $+\dfrac56$ to the right-hand side gives $-\dfrac56$:
$$x=-\frac12-\frac56=-\frac36-\frac56=-\frac86=-\frac43.$$

c) Moving $-x$ to the right-hand side gives $+x$, and moving $\dfrac18$ to the left-hand side gives $-\dfrac18$. So $x=\dfrac34-\dfrac18$, that is
$$x=\frac34-\frac18=\frac68-\frac18=\frac58.$$

d) Moving $\dfrac12$ to the right-hand side gives $-\dfrac12$:
$$-x=-\frac23-\frac12=-\frac46-\frac36=-\frac76.$$

Hence $x=\dfrac76$.

So a) $\dfrac{11}{15}$; b) $-\dfrac43$; c) $\dfrac58$; d) $\dfrac76$.

**Answer.** a) $\dfrac{11}{15}$; b) $-\dfrac43$; c) $\dfrac58$; d) $\dfrac76$.
:::

:::exercise
Find $x$ such that:

a) $\dfrac35\cdot x=-\dfrac9{10}$.

b) $x\div\dfrac23-\dfrac12=\dfrac14$.

c) $\dfrac12-\left(x-\dfrac13\right)=\dfrac16$.

::hint
**What you need:** an unknown factor is the product divided by the known factor; an unknown dividend is the quotient times the divisor.

**Steps:**
1. b) Move $-\dfrac12$ to the right-hand side to get $x\div\dfrac23=\dfrac34$.
2. c) Remove the brackets, change signs, combine terms, then move terms.

::solution
a) $x=-\dfrac9{10}\div\dfrac35=-\dfrac9{10}\cdot\dfrac53=-\dfrac{45}{30}=-\dfrac32$.

b) Moving terms: $x\div\dfrac23=\dfrac14+\dfrac12=\dfrac34$. Hence $x=\dfrac34\cdot\dfrac23=\dfrac12$.

c) Remove the brackets: $\dfrac12-x+\dfrac13=\dfrac16$, that is, $\dfrac56-x=\dfrac16$. Moving terms: $-x=\dfrac16-\dfrac56=-\dfrac46$, so $x=\dfrac23$.

So a) $x=-\dfrac32$; b) $x=\dfrac12$; c) $x=\dfrac23$.

**Answer.** a) $-\dfrac32$; b) $\dfrac12$; c) $\dfrac23$.
:::

:::exercise
Suppose Hà reads a book over three days. On the first day she reads $\dfrac13$ of the pages, on the second day $\dfrac14$ of the pages, and on the third day the last $15$ pages. How many pages does the book have?

::hint
**What you need:** the three parts she has read add up to the whole book.

**Steps:**
1. Let $x$ be the number of pages and form $x-\dfrac13x-\dfrac14x=15$.
2. Work out $1-\dfrac13-\dfrac14$, then find $x$.

::solution
Let $x$ be the number of pages in the book. We have $x-\dfrac13x-\dfrac14x=15$, that is, $\left(1-\dfrac13-\dfrac14\right)x=15$.

Since $1-\dfrac13-\dfrac14=\dfrac{12-4-3}{12}=\dfrac5{12}$, we get $\dfrac5{12}x=15$, so $x=15\div\dfrac5{12}=15\cdot\dfrac{12}5=36$.

Check: $\dfrac13\cdot36=12$ pages, $\dfrac14\cdot36=9$ pages, and $12+9+15=36$.

So the book has $36$ pages.

**Answer.** $36$ pages.
:::

:::exercise
Suppose the morning temperature is $-\dfrac32\,^\circ\mathrm{C}$ and it rises by $\dfrac34\,^\circ\mathrm{C}$ every hour after that. After how many hours does it reach $3\,^\circ\mathrm{C}$?

::hint
**What you need:** the temperature after $t$ hours is the starting temperature plus $t$ times the hourly rise.

**Steps:**
1. Form the equality $-\dfrac32+\dfrac34\cdot t=3$.
2. Move $-\dfrac32$ to the right-hand side, then divide by $\dfrac34$.

::solution
After $t$ hours the temperature is $-\dfrac32+\dfrac34\cdot t$. We need $-\dfrac32+\dfrac34\cdot t=3$.

Moving terms: $\dfrac34\cdot t=3+\dfrac32=\dfrac92$. Hence $t=\dfrac92\div\dfrac34=\dfrac92\cdot\dfrac43=6$.

Check: $-\dfrac32+\dfrac34\cdot6=-\dfrac32+\dfrac92=3$.

So the temperature reaches $3\,^\circ\mathrm{C}$ after $6$ hours.

**Answer.** $6$ hours.
:::

:::exercise
Hà solves "Find $x$ if $x-\dfrac34=\dfrac12$" like this: $x=\dfrac12-\dfrac34=-\dfrac14$. Where did Hà go wrong? Solve it correctly and check your answer.

::hint
**What you need:** when a term moves to the other side, it changes sign.

**Steps:**
1. Look at the sign of $\dfrac34$ on the left-hand side, and see whether Hà changed it.
2. Substitute your new answer into the original equality to check.

::solution
On the left-hand side, $\dfrac34$ has a $-$ sign. Moving it to the right-hand side should turn it into $+$, but Hà kept the $-$. That is the mistake.

Correct solution: $x=\dfrac12+\dfrac34=\dfrac24+\dfrac34=\dfrac54$.

Check: $\dfrac54-\dfrac34=\dfrac24=\dfrac12$, which matches the right-hand side.

So $x=\dfrac54$.

**Answer.** $x=\dfrac54$.
:::

:::exercise Challenge
Calculate $M=\dfrac12-\dfrac16-\dfrac1{12}-\dfrac1{20}-\dfrac1{30}-\dfrac1{42}$.

::hint
**What you need:** $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$; the denominators $6,12,20,30,42$ are $2\cdot3$, $3\cdot4$, $4\cdot5$, $5\cdot6$, $6\cdot7$.

**Steps:**
1. Write $\dfrac16+\dfrac1{12}+\dfrac1{20}+\dfrac1{30}+\dfrac1{42}$ as a sum of differences of two fractions.
2. The middle terms cancel; then use the rule for brackets to subtract the whole group.

::solution
We have $M=\dfrac12-\left(\dfrac16+\dfrac1{12}+\dfrac1{20}+\dfrac1{30}+\dfrac1{42}\right)$.

Since $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$, the sum in the brackets equals
$$\left(\dfrac12-\dfrac13\right)+\left(\dfrac13-\dfrac14\right)+\left(\dfrac14-\dfrac15\right)+\left(\dfrac15-\dfrac16\right)+\left(\dfrac16-\dfrac17\right)=\dfrac12-\dfrac17=\dfrac5{14}.$$

Hence $M=\dfrac12-\dfrac5{14}=\dfrac7{14}-\dfrac5{14}=\dfrac2{14}=\dfrac17$.

So $M=\dfrac17$.

**Answer.** $\dfrac17$.
:::

## Mini test

:::quiz
::mc TH
The value of $\dfrac12+\dfrac13\cdot\dfrac32$ is
A. $1$.
B. $\dfrac54$.
C. $\dfrac14$.
D. $\dfrac76$.
::key A
Multiply first: $\dfrac13\cdot\dfrac32=\dfrac12$, then $\dfrac12+\dfrac12=1$. B is the result of adding first; C and D come from other slips.

::mc TH
The value of $\dfrac34-\left(\dfrac12-\dfrac13\right)$ is
A. $-\dfrac1{12}$.
B. $\dfrac7{12}$.
C. $\dfrac{11}{12}$.
D. $\dfrac1{12}$.
::key B
Bracket: $\dfrac12-\dfrac13=\dfrac16$, so $\dfrac34-\dfrac16=\dfrac7{12}$. A removes the brackets without changing signs, and C adds instead of subtracting.

::mc TH
The number $x$ that satisfies $x+\dfrac34=\dfrac16$ is
A. $\dfrac{11}{12}$.
B. $\dfrac7{12}$.
C. $-\dfrac7{12}$.
D. $-\dfrac{11}{12}$.
::key C
Moving terms: $x=\dfrac16-\dfrac34=\dfrac2{12}-\dfrac9{12}=-\dfrac7{12}$. A forgets to change the sign when moving the term.

::mc TH
The number $x$ that satisfies $\dfrac56-x=\dfrac13$ is
A. $-\dfrac12$.
B. $\dfrac76$.
C. $-\dfrac76$.
D. $\dfrac12$.
::key D
Moving terms: $-x=\dfrac13-\dfrac56=-\dfrac12$, so $x=\dfrac12$. B adds $\dfrac56$ and $\dfrac13$, and A forgets to change the sign of both sides at the end.

::tf NB TH TH TH
Consider the following steps. Decide whether each statement is true or false.
a) $x-\dfrac12=3\Rightarrow x=3+\dfrac12$.
b) $x+\dfrac34=\dfrac16\Rightarrow x=\dfrac16+\dfrac34$.
c) $-x=\dfrac35\Rightarrow x=\dfrac35$.
d) $\dfrac34-\left(\dfrac12-\dfrac14\right)=\dfrac34-\dfrac12+\dfrac14$.
::key T F F T
a) True: moving $-\dfrac12$ to the right-hand side gives $+\dfrac12$. b) False: it should be $\dfrac16-\dfrac34$. c) False: changing the sign of both sides gives $x=-\dfrac35$. d) True: removing brackets with a $-$ in front changes the sign of every term inside.

::sa VD
Find $x$ such that $x\div\dfrac34+\dfrac12=\dfrac52$, and give the answer as a decimal.
::key 1.5
Moving terms: $x\div\dfrac34=2$, so $x=2\cdot\dfrac34=\dfrac32=1.5$.

::sa VD
Calculate $\left(\dfrac23-\dfrac12\right)\cdot12-\dfrac32$ and give the answer as a decimal.
::key 0.5
Bracket: $\dfrac23-\dfrac12=\dfrac16$. Multiply: $\dfrac16\cdot12=2$. Subtract: $2-\dfrac32=\dfrac12=0.5$.
:::
