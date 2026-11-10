---
title: Transforming and simplifying expressions with square roots
description: Take a factor outside or inside the root sign, rationalise denominators and simplify expressions that contain square roots.
minutes: 20
---

:::goals
- Take a factor outside the root sign and move a factor inside it, to calculate and to compare.
- Remove the denominator under a root sign and rationalise a denominator.
- Simplify expressions with square roots, step by step, as in the grade 10 entrance exam.
:::

Mrs Lan has three square plots of land side by side in a row, with areas of $12$ m², $27$ m² and $48$ m². She wants a fence along the front edge of all three plots. How long is the fence? Can we write its exact length in a neat form?

:::diagram Three square plots side by side
alt: Three squares standing next to each other on a straight line, with sides root 12, root 27 and root 48 metres
point A 0,0 ""
point B 3.46,0 ""
point C 8.66,0 ""
point D 15.59,0 ""
point E 0,3.46 ""
point F 3.46,3.46 ""
point G 3.46,5.2 ""
point H 8.66,5.2 ""
point I 8.66,6.93 ""
point K 15.59,6.93 ""
polygon A B F E
polygon B C H G
polygon C D K I
segment A B "√12"
segment B C "√27"
segment C D "√48"
:::

The three sides are $\sqrt{12}$, $\sqrt{27}$ and $\sqrt{48}$ m. There is no rule for adding square roots, but we can transform them so that they share the same "root part".

## Taking factors outside and inside the root sign

### Explore

We split each number under the root sign into a perfect square times another number, then use $\sqrt{ab}=\sqrt a\cdot\sqrt b$:

$$\sqrt{12}=\sqrt{4\cdot3}=2\sqrt3,\qquad \sqrt{27}=\sqrt{9\cdot3}=3\sqrt3,\qquad \sqrt{48}=\sqrt{16\cdot3}=4\sqrt3.$$

The three roots are now multiples of the same number $\sqrt3$. A square root such as $\sqrt3$ that cannot be written as a whole number or a fraction is called a **surd**. Surds that are multiples of the same root are **like surds**, and we add them just as we add like terms.

:::definition Taking a factor outside or inside the root sign
For $B\ge0$:
- **Taking a factor outside the root sign:** $\sqrt{A^2B}=|A|\sqrt B$.
- **Moving a factor inside the root sign:** $A\sqrt B=\sqrt{A^2B}$ if $A\ge0$; $A\sqrt B=-\sqrt{A^2B}$ if $A<0$.
:::

The first formula holds because $\sqrt{A^2B}=\sqrt{A^2}\cdot\sqrt B=|A|\sqrt B$. The second is the first one read backwards; when $A<0$ the number $A\sqrt B$ is negative, so the minus sign must stay outside.

:::example Adding like surds
Find the length of the fence $\sqrt{12}+\sqrt{27}+\sqrt{48}$ (in a neat form, then rounded to two decimal places).

**Solution.** Taking the factors outside the root sign as in the exploration, we have

$$\sqrt{12}+\sqrt{27}+\sqrt{48}=2\sqrt3+3\sqrt3+4\sqrt3=9\sqrt3\approx15.59.$$

So the fence is exactly $9\sqrt3$ m long, about $15.59$ m.
:::

When there are letters under the root sign, remember that $\sqrt{A^2}=|A|$, so we must look at the sign of $A$.

:::example Taking a factor with letters outside
Simplify: a) $\sqrt{50x^2}$ for $x<0$; b) $\sqrt{18a^3}$ for $a\ge0$.

**Solution.** In a), since $x<0$, $|x|=-x$; in b), since $a\ge0$, $|3a|=3a$. We have

$$\sqrt{50x^2}=\sqrt{(5x)^2\cdot2}=5|x|\sqrt2=-5x\sqrt2;\qquad \sqrt{18a^3}=\sqrt{(3a)^2\cdot2a}=3a\sqrt{2a}.$$

So a) equals $-5x\sqrt2$ and b) equals $3a\sqrt{2a}$.
:::

Moving a factor inside the root sign lets us compare two numbers without a calculator.

:::example Comparing by moving factors inside
Compare $3\sqrt5$ and $2\sqrt{11}$.

**Solution.** Moving the factors inside the root sign, we have

$$3\sqrt5=\sqrt{9\cdot5}=\sqrt{45},\qquad 2\sqrt{11}=\sqrt{4\cdot11}=\sqrt{44}.$$

Since $45>44$, $\sqrt{45}>\sqrt{44}$.

So $3\sqrt5>2\sqrt{11}$.
:::

## Removing denominators and rationalising

Numbers like $\dfrac{6}{\sqrt3}$ are hard to estimate because the denominator is irrational. We transform them so that the denominator has no root.

:::theorem The transformations
- **Removing the denominator under the root sign:** $\sqrt{\dfrac AB}=\dfrac{\sqrt{AB}}{|B|}$ for $AB\ge0$, $B\neq0$.
- **Rationalising the denominator:** $\dfrac{A}{\sqrt B}=\dfrac{A\sqrt B}{B}$ for $B>0$.
- For $A\ge0$, $A\neq B^2$: $\dfrac{C}{\sqrt A+B}=\dfrac{C\left(\sqrt A-B\right)}{A-B^2}$ and $\dfrac{C}{\sqrt A-B}=\dfrac{C\left(\sqrt A+B\right)}{A-B^2}$.
- For $A$, $B\ge0$, $A\neq B$: $\dfrac{C}{\sqrt A+\sqrt B}=\dfrac{C\left(\sqrt A-\sqrt B\right)}{A-B}$ and $\dfrac{C}{\sqrt A-\sqrt B}=\dfrac{C\left(\sqrt A+\sqrt B\right)}{A-B}$.
:::

The common idea: multiply the numerator and the denominator by an expression that turns the denominator into the identity $(m+n)(m-n)=m^2-n^2$, where squaring removes the root. The expressions $\sqrt A+\sqrt B$ and $\sqrt A-\sqrt B$ are called **conjugates**.

:::example Rationalising denominators
Rationalise the denominator: a) $\dfrac{6}{\sqrt3}$; b) $\dfrac{4}{\sqrt5-1}$; c) $\dfrac{1}{\sqrt7+\sqrt5}$.

**Solution.** In a), we multiply the numerator and the denominator by $\sqrt3$; in b) and c), we multiply them by the conjugate of the denominator. We have

$$\begin{aligned} \text{a) }& \frac{6}{\sqrt3}=\frac{6\sqrt3}{3}=2\sqrt3;\\ \text{b) }& \frac{4}{\sqrt5-1}=\frac{4\left(\sqrt5+1\right)}{5-1}=\sqrt5+1;\\ \text{c) }& \frac{1}{\sqrt7+\sqrt5}=\frac{\sqrt7-\sqrt5}{7-5}=\frac{\sqrt7-\sqrt5}{2}. \end{aligned}$$

So a) $2\sqrt3$; b) $\sqrt5+1$; c) $\dfrac{\sqrt7-\sqrt5}{2}$.
:::

## Simplifying expressions with square roots

A simplification question in the grade 10 entrance exam usually follows these steps: find the condition for the expression to be defined, factorise the numerators and denominators, write over a common denominator, and collect terms.

:::example Simplifying an expression with $\sqrt x$
Simplify $A=\dfrac{x-\sqrt x}{\sqrt x-1}+\dfrac{x-4}{\sqrt x+2}$ for $x\ge0$, $x\neq1$.

**Solution.** Since $x\ge0$, $x=\left(\sqrt x\right)^2$. Hence $x-\sqrt x=\sqrt x\left(\sqrt x-1\right)$ and $x-4=\left(\sqrt x-2\right)\left(\sqrt x+2\right)$. We have

$$A=\frac{\sqrt x\left(\sqrt x-1\right)}{\sqrt x-1}+\frac{\left(\sqrt x-2\right)\left(\sqrt x+2\right)}{\sqrt x+2}=\sqrt x+\sqrt x-2=2\sqrt x-2.$$

So $A=2\sqrt x-2$ for $x\ge0$, $x\neq1$.
:::

:::warning Common mistakes
- **Adding unlike surds.** Wrong: $\sqrt2+\sqrt3=\sqrt5$. Why it is wrong: a root does not split over addition. Right: $\sqrt2+\sqrt3$ is already simplest; we can only add $a\sqrt3+b\sqrt3=(a+b)\sqrt3$.
- **Moving a negative number inside the root.** Wrong: $-2\sqrt3=\sqrt{12}$. Why it is wrong: the left side is negative and the right side is positive. Right: $-2\sqrt3=-\sqrt{12}$.
- **Multiplying only the denominator by the conjugate.** Wrong: $\dfrac{4}{\sqrt5-1}=\dfrac{4}{4}=1$. Why it is wrong: if the denominator is multiplied by $\sqrt5+1$, so must the numerator be. Right: $\dfrac{4\left(\sqrt5+1\right)}{4}=\sqrt5+1$.
- **Forgetting the conditions when simplifying.** Wrong: simplifying $\dfrac{x-\sqrt x}{\sqrt x-1}$ without writing $x\neq1$. Why it is wrong: at $x=1$ the denominator is $0$. Right: state $x\ge0$, $x\neq1$.
:::

## Key terms

:::terms
- take a factor outside the square root | đưa thừa số ra ngoài dấu căn
- move a factor inside the square root | đưa thừa số vào trong dấu căn
- like surds | căn thức đồng dạng
- remove the denominator under the root sign | khử mẫu của biểu thức lấy căn
- rationalise the denominator | trục căn thức ở mẫu
- conjugate | biểu thức liên hợp
- simplify | rút gọn
- factorise | phân tích thành nhân tử
:::

## Summary

- $\sqrt{A^2B}=|A|\sqrt B$ ($B\ge0$): split off a square and take it outside.
- $A\sqrt B=\sqrt{A^2B}$ when $A\ge0$; $A\sqrt B=-\sqrt{A^2B}$ when $A<0$. Useful for comparing.
- Like surds: $a\sqrt c+b\sqrt c=(a+b)\sqrt c$.
- $\dfrac{A}{\sqrt B}=\dfrac{A\sqrt B}{B}$; with a denominator $\sqrt A\pm B$ or $\sqrt A\pm\sqrt B$, multiply the numerator and the denominator by the conjugate.
- Simplifying: conditions → factorise → common denominator → collect terms → check with one value.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Take the factor outside the root sign: a) $\sqrt{75}$; b) $\sqrt{200}$; c) $\sqrt{28a^2}$ for $a<0$.

::hint
**What you need:** $\sqrt{A^2B}=|A|\sqrt B$.

**Steps:**
1. Find the largest perfect square that divides the number under the root.
2. Take its root outside; with letters, look at the sign.

::solution
a) $\sqrt{75}=\sqrt{25\cdot3}=5\sqrt3$. b) $\sqrt{200}=\sqrt{100\cdot2}=10\sqrt2$. c) $\sqrt{28a^2}=\sqrt{(2a)^2\cdot7}=2|a|\sqrt7=-2a\sqrt7$ (since $a<0$).

**Answer.** a) $5\sqrt3$; b) $10\sqrt2$; c) $-2a\sqrt7$.
:::

:::exercise
Evaluate $\sqrt{20}-\sqrt{45}+3\sqrt5$.

::hint
**What you need:** take factors outside the root sign to get like surds.

**Steps:**
1. Write $\sqrt{20}=2\sqrt5$, $\sqrt{45}=3\sqrt5$.
2. Add and subtract the coefficients.

::solution
We have $\sqrt{20}-\sqrt{45}+3\sqrt5=2\sqrt5-3\sqrt5+3\sqrt5=2\sqrt5$.

**Answer.** $2\sqrt5$.
:::

:::exercise
a) Compare $4\sqrt3$ and $3\sqrt5$.

b) Put in increasing order: $2\sqrt7$, $3\sqrt3$, $4\sqrt2$.

::hint
**What you need:** for $A\ge0$, $A\sqrt B=\sqrt{A^2B}$.

**Steps:**
1. Move the coefficients inside the root sign.
2. Compare the numbers under the roots.

::solution
a) We have $4\sqrt3=\sqrt{48}$ and $3\sqrt5=\sqrt{45}$. Since $48>45$, $4\sqrt3>3\sqrt5$.

b) We have $2\sqrt7=\sqrt{28}$, $3\sqrt3=\sqrt{27}$ and $4\sqrt2=\sqrt{32}$. Since $27<28<32$, $3\sqrt3<2\sqrt7<4\sqrt2$.

**Answer.** a) $4\sqrt3>3\sqrt5$; b) $3\sqrt3<2\sqrt7<4\sqrt2$.
:::

:::exercise
Rationalise the denominator: a) $\dfrac{10}{\sqrt5}$; b) $\dfrac{2}{\sqrt3+1}$; c) $\dfrac{4}{\sqrt7-\sqrt3}$.

::hint
**What you need:** $\dfrac A{\sqrt B}=\dfrac{A\sqrt B}B$; multiply by the conjugate of the denominator.

**Steps:**
1. Choose what to multiply the numerator and the denominator by.
2. Work out the denominator with the identity, then simplify.

::solution
a) $\dfrac{10}{\sqrt5}=\dfrac{10\sqrt5}{5}=2\sqrt5$. b) $\dfrac{2}{\sqrt3+1}=\dfrac{2\left(\sqrt3-1\right)}{3-1}=\sqrt3-1$. c) $\dfrac{4}{\sqrt7-\sqrt3}=\dfrac{4\left(\sqrt7+\sqrt3\right)}{7-3}=\sqrt7+\sqrt3$.

**Answer.** a) $2\sqrt5$; b) $\sqrt3-1$; c) $\sqrt7+\sqrt3$.
:::

:::exercise
Remove the denominator under the root sign: a) $\sqrt{\dfrac23}$; b) $\sqrt{\dfrac58}$.

::hint
**What you need:** $\sqrt{\dfrac AB}=\dfrac{\sqrt{AB}}{|B|}$.

**Steps:**
1. Multiply the numerator and the denominator under the root so that the denominator is a perfect square.
2. Take the root of the denominator.

::solution
a) $\sqrt{\dfrac23}=\sqrt{\dfrac{2\cdot3}{3^2}}=\dfrac{\sqrt6}{3}$. b) $\sqrt{\dfrac58}=\sqrt{\dfrac{5\cdot2}{16}}=\dfrac{\sqrt{10}}{4}$.

**Answer.** a) $\dfrac{\sqrt6}3$; b) $\dfrac{\sqrt{10}}4$.
:::

:::exercise
Evaluate $\left(\sqrt{12}+\sqrt{27}\right)\cdot\sqrt3$.

::hint
**What you need:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$ (see [square roots with multiplication and division](lesson:square-roots-multiply-divide)).

**Steps:**
1. Expand the bracket.
2. Combine into one root and take the root.

::solution
We have $\left(\sqrt{12}+\sqrt{27}\right)\cdot\sqrt3=\sqrt{36}+\sqrt{81}=6+9=15$.

**Answer.** $15$.
:::

:::exercise
Three square garden beds with areas of $18$ m², $32$ m² and $50$ m² are placed side by side in a row. Find the total length of their three sides along the row: write it in a neat form, then round to two decimal places.

::hint
**What you need:** a square of area $S$ has side $\sqrt S$; take factors outside the root sign.

**Steps:**
1. Write the three sides in the form $a\sqrt2$.
2. Add, then use the calculator.

::solution
The three sides are $\sqrt{18}$ m, $\sqrt{32}$ m and $\sqrt{50}$ m. Hence the total length is $\sqrt{18}+\sqrt{32}+\sqrt{50}=3\sqrt2+4\sqrt2+5\sqrt2=12\sqrt2\approx16.97$ (m).

**Answer.** $12\sqrt2$ m, about $16.97$ m.
:::

:::exercise
Simplify the expression $B=\dfrac{a\sqrt b+b\sqrt a}{\sqrt a+\sqrt b}$ for $a>0$, $b>0$.

::hint
**What you need:** $a=\left(\sqrt a\right)^2$ for $a\ge0$; take out a common factor.

**Steps:**
1. Write the numerator as $\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)$.
2. Cancel with the denominator.

::solution
Since $a>0$ and $b>0$, $a\sqrt b+b\sqrt a=\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)$. Hence $B=\dfrac{\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)}{\sqrt a+\sqrt b}=\sqrt{ab}$.

**Answer.** $B=\sqrt{ab}$.
:::

:::exercise
Consider the expression $P=\dfrac{\sqrt x}{\sqrt x-3}-\dfrac{3}{\sqrt x+3}$.

a) Find the condition for $P$ to be defined.

b) Simplify $P$.

c) Find the value of $P$ when $x=36$.

d) Find $x$ such that $P=2$.

::hint
**What you need:** the common denominator is $\left(\sqrt x-3\right)\left(\sqrt x+3\right)=x-9$.

**Steps:**
1. We need $x\ge0$ and $\sqrt x\neq3$.
2. Write over the common denominator and collect the numerator.
3. Substitute $x=36$; solve the equation in d) and check the condition.

::solution
a) The expression is defined when $x\ge0$ and $\sqrt x\neq3$, that is, $x\ge0$, $x\neq9$.

b) For $x\ge0$, $x\neq9$, we have $P=\dfrac{\sqrt x\left(\sqrt x+3\right)-3\left(\sqrt x-3\right)}{x-9}=\dfrac{x+3\sqrt x-3\sqrt x+9}{x-9}=\dfrac{x+9}{x-9}$.

c) Substituting $x=36$ (which satisfies the condition) into $P$, we get $P=\dfrac{36+9}{36-9}=\dfrac{45}{27}=\dfrac53$.

d) We have $P=2\iff\dfrac{x+9}{x-9}=2\iff x+9=2(x-9)\iff x=27$ (which satisfies the condition).

**Answer.** a) $x\ge0$, $x\neq9$; b) $P=\dfrac{x+9}{x-9}$; c) $\dfrac53$; d) $x=27$.
:::

:::exercise Challenge
Evaluate $C=\sqrt{4-2\sqrt3}+\sqrt{4+2\sqrt3}$.

::hint
**What you need:** $\left(\sqrt3\pm1\right)^2=4\pm2\sqrt3$ and $\sqrt{A^2}=|A|$.

**Steps:**
1. Write $4-2\sqrt3=\left(\sqrt3-1\right)^2$ and $4+2\sqrt3=\left(\sqrt3+1\right)^2$.
2. Remove the roots, looking at the sign of $\sqrt3-1$.

::solution
We have $4-2\sqrt3=\left(\sqrt3-1\right)^2$ and $4+2\sqrt3=\left(\sqrt3+1\right)^2$. Hence $C=\left|\sqrt3-1\right|+\left|\sqrt3+1\right|$. Since $\sqrt3>1$, $C=\left(\sqrt3-1\right)+\left(\sqrt3+1\right)=2\sqrt3$.

**Answer.** $C=2\sqrt3$.
:::

## Mini test

:::quiz
::mc
$\sqrt{72}$ equals
A. $6\sqrt2$.
B. $36\sqrt2$.
C. $2\sqrt6$.
D. $3\sqrt2$.
::key A
We have $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Option B forgets to take the root of $36$, C swaps the two numbers, and D splits off only $9$ and loses the factor $4$.

::mc
Rationalising the denominator of $\dfrac{6}{\sqrt2}$ gives
A. $\sqrt3$.
B. $6\sqrt2$.
C. $3\sqrt2$.
D. $3$.
::key C
We have $\dfrac{6}{\sqrt2}=\dfrac{6\sqrt2}{2}=3\sqrt2$. Option B forgets to divide by $2$, A divides $6$ by $2$ under the root sign, and D loses the root in the numerator.

::mc
$\dfrac{1}{\sqrt5-2}$ equals
A. $-\sqrt5-2$.
B. $\sqrt5-2$.
C. $\dfrac{\sqrt5+2}{3}$.
D. $\sqrt5+2$.
::key D
We have $\dfrac{1}{\sqrt5-2}=\dfrac{\sqrt5+2}{5-4}=\sqrt5+2$. Option C works out the denominator as $5-2$ (forgetting to square $2$), and A as $4-5$.

::mc
For $a<0$, $a\sqrt3$ equals
A. $\sqrt{3a^2}$.
B. $-\sqrt{3a^2}$.
C. $\sqrt{3a}$.
D. $-\sqrt{3a}$.
::key B
Since $a<0$, $a\sqrt3<0$, hence $a\sqrt3=-\sqrt{3a^2}$. Option A loses the sign; C and D do not square $a$ (and $\sqrt{3a}$ is not defined when $a<0$).

::tf
Let $A=\sqrt{50}-\sqrt{18}+\sqrt8$. Decide whether each statement is true or false.
a) $\sqrt{50}=5\sqrt2$.
b) $A=\sqrt{40}$.
c) $A\cdot\sqrt2=8$.
d) $\dfrac1A=\dfrac{\sqrt2}{8}$.
::key T F T T
a) True. We have $\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$. b) False. We have $A=5\sqrt2-3\sqrt2+2\sqrt2=4\sqrt2=\sqrt{32}$ (we cannot add and subtract under the root sign). c) True. $A\cdot\sqrt2=4\sqrt2\cdot\sqrt2=8$. d) True. $\dfrac1A=\dfrac{1}{4\sqrt2}=\dfrac{\sqrt2}{8}$.

::sa
Evaluate $\dfrac{\sqrt{75}-\sqrt{12}}{\sqrt3}$.
::key 3
We have $\sqrt{75}-\sqrt{12}=5\sqrt3-2\sqrt3=3\sqrt3$. Hence $\dfrac{\sqrt{75}-\sqrt{12}}{\sqrt3}=\dfrac{3\sqrt3}{\sqrt3}=3$.

::sa
A rectangular plot is $\sqrt{98}$ m long and $\sqrt{32}$ m wide. Find its perimeter in metres (give your answer to 1 decimal place).
::key 31.1
The perimeter is $2\left(\sqrt{98}+\sqrt{32}\right)=2\left(7\sqrt2+4\sqrt2\right)=22\sqrt2\approx31.1$ (m).
:::
