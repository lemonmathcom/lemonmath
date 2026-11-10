---
title: Viète's theorem and its applications
description: Understand Viète's theorem on the sum and product of the roots, find roots mentally, find two numbers from their sum and product, and check signs of roots.
minutes: 20
---

:::goals
- Understand and explain Viète's theorem on the sum and product of the roots of a quadratic equation.
- Find the roots mentally when $a+b+c=0$ or $a-b+c=0$.
- Find two numbers given their sum and product.
- Evaluate symmetric expressions in the two roots and find the signs of the roots without solving the equation.
:::

François Viète (1540–1603) was a lawyer, a royal counsellor to King Henry III of France and later worked for King Henry IV. He decoded secret letters sent to King Philip II of Spain, so that Henry IV learnt of his enemy's military plans. In mathematics, he introduced the first systematic algebraic notation: vowels for the unknowns and consonants for the known numbers, which let him write general rules for *every* equation (MacTutor, University of St Andrews). The link between roots and coefficients that we study today bears his name.

Minh tells the class: "The equation $x^2-7x+12=0$ has roots $3$ and $4$. I knew at once, without working out $\Delta$, because $3+4=7$ and $3\cdot4=12$." Was Minh lucky, or is there a rule behind it? And if there is, what can that rule do for us?

## Viète's theorem

### Explore: the sum and product of the roots

We solve a few equations (with the quadratic formula) and work out the sum and product of the roots:

| Equation | Roots | $x_1+x_2$ | $x_1x_2$ |
|---|---|---|---|
| $x^2-5x+6=0$ | $2$; $3$ | $5$ | $6$ |
| $2x^2-7x+3=0$ | $3$; $\frac12$ | $\frac72$ | $\frac32$ |
| $x^2+2x-8=0$ | $2$; $-4$ | $-2$ | $-8$ |

In the second row the sum is $\dfrac72=\dfrac{-(-7)}{2}$ and the product is $\dfrac32$: the sum is always $-\dfrac{b}{a}$ and the product is always $\dfrac{c}{a}$.

:::theorem Viète's theorem
If $x_1$, $x_2$ are the two roots of the equation $ax^2+bx+c=0$ ($a\neq0$), then
$$x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}.$$
:::

**Why?** When $\Delta\geq0$, add and multiply the two roots $\dfrac{-b\pm\sqrt\Delta}{2a}$ (lesson [quadratic equations](lesson:quadratic-equations)); the square roots cancel:

$$x_1+x_2=\frac{-2b}{2a}=-\frac ba,\qquad x_1x_2=\frac{(-b)^2-(\sqrt\Delta)^2}{4a^2}=\frac{b^2-(b^2-4ac)}{4a^2}=\frac ca.$$

**Going deeper.** If $x_1$, $x_2$ are the roots, then $(x-x_1)(x-x_2)=x^2-(x_1+x_2)x+x_1x_2$. Comparing this with $x^2+\dfrac bax+\dfrac ca$ (the equation divided by $a$), we see that Viète's theorem is very natural. But the theorem only talks about roots that **exist**: always check that $\Delta\geq0$ (or that $a$ and $c$ have opposite signs) before using it.

:::example Sum and product without solving
Without solving the equation, find the sum and the product of the roots of $2x^2-9x+4=0$.

**Solution.** We have $\Delta=81-32=49>0$, so the equation has two roots $x_1$, $x_2$. By Viète's theorem,

$$x_1+x_2=\frac92,\qquad x_1x_2=\frac42=2.$$

So the sum of the roots is $\dfrac92$ and the product is $2$.

**Check.** The roots are $4$ and $\dfrac12$: $4+\dfrac12=\dfrac92$ and $4\cdot\dfrac12=2$.
:::

From the sum $S$ and the product $P$ we can work out many "symmetric" expressions (swapping $x_1$ and $x_2$ does not change their value), for example $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=S^2-2P$.

:::example Symmetric expressions in the roots
Let $x_1$, $x_2$ be the roots of the equation $x^2-5x+3=0$. Without solving the equation, find $x_1^2+x_2^2$ and $\dfrac1{x_1}+\dfrac1{x_2}$.

**Solution.** We have $\Delta=25-12=13>0$. By Viète's theorem, $S=x_1+x_2=5$ and $P=x_1x_2=3$. Hence

$$x_1^2+x_2^2=S^2-2P=25-6=19,\qquad \frac1{x_1}+\frac1{x_2}=\frac{x_1+x_2}{x_1x_2}=\frac53.$$

So $x_1^2+x_2^2=19$ and $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac53$.

**Remark.** The roots $\dfrac{5\pm\sqrt{13}}{2}$ involve square roots, yet the symmetric expressions are rational numbers: Viète's theorem lets us avoid calculating with surds altogether.
:::

## Finding the roots mentally

Substituting $x=1$ into $ax^2+bx+c$ gives $a+b+c$; substituting $x=-1$ gives $a-b+c$. Together with the product $x_1x_2=\dfrac ca$, we find the other root at once.

:::theorem Finding roots mentally
- If $a+b+c=0$, the equation $ax^2+bx+c=0$ has the roots $x_1=1$, $x_2=\dfrac ca$.
- If $a-b+c=0$, the equation has the roots $x_1=-1$, $x_2=-\dfrac ca$.
:::

:::example Finding roots mentally
Find the roots of the following equations mentally:

a) $3x^2-8x+5=0$.

b) $2x^2+7x+5=0$.

c) $x^2-2027x+2026=0$.

**Solution.** a) We have $a+b+c=3-8+5=0$, so $x_1=1$ and $x_2=\dfrac53$.

b) We have $a-b+c=2-7+5=0$, so $x_1=-1$ and $x_2=-\dfrac52$.

c) We have $a+b+c=1-2027+2026=0$, so $x_1=1$ and $x_2=2026$.

So a) $x=1$, $x=\dfrac53$; b) $x=-1$, $x=-\dfrac52$; c) $x=1$, $x=2026$.
:::

Part c) shows the power of this method: with the quadratic formula you would have to work out $\Delta=2027^2-4\cdot2026=2025^2$.

## Finding two numbers from their sum and product

Viète's theorem also works backwards: if two numbers $u$, $v$ have $u+v=S$ and $uv=P$, then $(x-u)(x-v)=x^2-Sx+P$, so $u$ and $v$ are the roots of $x^2-Sx+P=0$.

:::theorem Two numbers from their sum and product
If two numbers have sum $S$ and product $P$, then they are the roots of the equation
$$x^2-Sx+P=0.$$
Such numbers exist when $S^2-4P\geq0$.
:::

:::example Two numbers with sum $11$ and product $28$
a) Find two numbers whose sum is $11$ and whose product is $28$.

b) Are there two numbers whose sum is $4$ and whose product is $5$?

**Solution.** a) The required numbers are the roots of $x^2-11x+28=0$. We have $\Delta=121-112=9$, so $x_1=\dfrac{11+3}{2}=7$ and $x_2=\dfrac{11-3}{2}=4$.

b) We have $S^2-4P=16-20=-4<0$, so the equation $x^2-4x+5=0$ has no solutions.

So a) the two numbers are $7$ and $4$; b) there are no such numbers.
:::

:::example Application: the size of a garden
Suppose a rectangular garden has perimeter $34$ m and area $60$ m². Find the dimensions of the garden.

**Solution.**

*Understand.* The perimeter $34$ m tells us the sum of the two sides; the area $60$ m² is their product.

*Plan.* The two sides have sum $S=34\div2=17$ and product $P=60$, so they are the roots of $x^2-17x+60=0$.

*Solve.* We have $\Delta=289-240=49$, so $x_1=\dfrac{17+7}{2}=12$ and $x_2=\dfrac{17-7}{2}=5$. Both are positive.

So the garden is $12$ m long and $5$ m wide.

*Look back.* Is there another method? Let the sides be $x$ and $y$ and solve the simultaneous equations $x+y=17$, $xy=60$ by substitution; we get exactly the same equation. What if the perimeter were only $30$ m? Then $S=15$ and $S^2-4P=225-240<0$: no such garden exists. Indeed, with perimeter $30$ m the square of side $7.5$ m has the largest area, only $56.25$ m² $<60$ m².
:::

:::diagram The garden $12$ m $\times$ $5$ m
alt: A rectangle ABCD of length 12 and width 5, perimeter 34, area 60
point A 0,0 below-left
point B 12,0 below-right
point C 12,5 above-right
point D 0,5 above-left
polygon A B C D
label 6,-0.8 "12 m"
label -1,2.5 "5 m"
label 6,2.5 "60 m²"
:::

## The signs of the roots

Without solving, $S$ and $P$ tell us the signs of the two roots (when the equation has roots):
- $P<0$: the roots have opposite signs (then $a$ and $c$ have opposite signs, so the equation certainly has two roots);
- $\Delta\geq0$, $P>0$, $S>0$: both roots are positive;
- $\Delta\geq0$, $P>0$, $S<0$: both roots are negative.

The reason: a negative product means the numbers have different signs; a positive product means the same sign, and the sum shows which sign.

:::example The signs of the roots
Without solving, find the signs of the roots of each equation:

a) $x^2-5x-6=0$.

b) $3x^2+11x+2=0$.

c) $x^2-7x+4=0$.

**Solution.** a) We have $P=-6<0$, so the equation has two roots of opposite signs.

b) We have $\Delta=121-24=97>0$, $P=\dfrac23>0$ and $S=-\dfrac{11}3<0$, so the equation has two negative roots.

c) We have $\Delta=49-16=33>0$, $P=4>0$ and $S=7>0$, so the equation has two positive roots.

So a) roots of opposite signs; b) two negative roots; c) two positive roots.
:::

:::warning Common mistakes
- **Forgetting to check $\Delta$.** Wrong: for $x^2-2x+5=0$, writing $S=2$, $P=5$, so $x_1^2+x_2^2=4-10=-6$. Why it is wrong: $\Delta'=1-5<0$, so the equation has no solutions (and a sum of two squares cannot be negative anyway). Right: check that $\Delta\geq0$ first.
- **Wrong sign of the sum.** Wrong: $2x^2-9x+4=0$ has $x_1+x_2=-\dfrac92$. Right: $x_1+x_2=-\dfrac ba=\dfrac92$.
- **Mixing up the two mental rules.** When $a-b+c=0$, the second root is $-\dfrac ca$, not $\dfrac ca$.
:::

**Connections.** Viète's theorem follows directly from the quadratic formula and gives a new point of view: instead of finding each root, we work with the pair $(S, P)$. This point of view is used a lot in [solving word problems by forming equations](lesson:g9-equation-word-problems) (rectangle problems), in factorising $ax^2+bx+c=a(x-x_1)(x-x_2)$, and it is a standard question type in the grade 10 entrance exam.

## Key terms

:::terms
- Viète's theorem | định lí Viète
- sum of the roots | tổng hai nghiệm
- product of the roots | tích hai nghiệm
- finding the roots mentally | tính nhẩm nghiệm
- symmetric expression | biểu thức đối xứng
- roots of opposite signs | hai nghiệm trái dấu
- two positive roots | hai nghiệm cùng dương
- two negative roots | hai nghiệm cùng âm
:::

## Summary

- If $\Delta\geq0$: $x_1+x_2=-\dfrac ba$, $x_1x_2=\dfrac ca$.
- $a+b+c=0$: roots $1$ and $\dfrac ca$; $a-b+c=0$: roots $-1$ and $-\dfrac ca$.
- Two numbers with sum $S$ and product $P$ are the roots of $x^2-Sx+P=0$ (need $S^2-4P\geq0$).
- $x_1^2+x_2^2=S^2-2P$; $\dfrac1{x_1}+\dfrac1{x_2}=\dfrac SP$.
- $P<0$: opposite signs; $P>0$, $S>0$: both positive; $P>0$, $S<0$: both negative (when $\Delta\geq0$).

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Without solving, find the sum and the product of the roots (if any) of each equation:

a) $x^2-6x+2=0$.

b) $3x^2+5x-4=0$.

c) $x^2+x+1=0$.

::hint
**What you need:** Viète's theorem, used only when the equation has roots.

**Steps:**
1. Check that $\Delta\geq0$ or that $a$ and $c$ have opposite signs.
2. Work out $-\dfrac ba$ and $\dfrac ca$.

::solution
a) We have $\Delta'=9-2=7>0$, so $x_1+x_2=6$ and $x_1x_2=2$.

b) We have $a=3$ and $c=-4$ of opposite signs, so the equation has two roots, with $x_1+x_2=-\dfrac53$ and $x_1x_2=-\dfrac43$.

c) We have $\Delta=1-4=-3<0$, so the equation has no solutions.

So a) $S=6$, $P=2$; b) $S=-\dfrac53$, $P=-\dfrac43$; c) there are no roots.

**Answer.** a) $6$ and $2$; b) $-\dfrac53$ and $-\dfrac43$; c) the equation has no solutions.
:::

:::exercise
Find the roots of the following equations mentally:

a) $5x^2-3x-2=0$.

b) $x^2+9x+8=0$.

c) $7x^2+4x-3=0$.

::hint
**What you need:** check $a+b+c$ or $a-b+c$.

**Steps:**
1. Work out $a+b+c$; if it is not $0$, work out $a-b+c$.
2. Write the other root $\dfrac ca$ or $-\dfrac ca$.

::solution
a) We have $5-3-2=0$, so $x_1=1$ and $x_2=-\dfrac25$.

b) We have $1-9+8=0$, so $x_1=-1$ and $x_2=-8$.

c) We have $7-4-3=0$, so $x_1=-1$ and $x_2=\dfrac37$.

So a) $1$; $-\dfrac25$. b) $-1$; $-8$. c) $-1$; $\dfrac37$.

**Answer.** a) $1$; $-\dfrac25$. b) $-1$; $-8$. c) $-1$; $\dfrac37$.
:::

:::exercise
The equation $x^2-4x+1=0$ has the root $x_1=2+\sqrt3$. Find the other root. (Revise [rationalising the denominator](lesson:simplifying-root-expressions).)

::hint
**What you need:** $x_1+x_2=4$ (or $x_1x_2=1$).

**Steps:**
1. Work out $x_2=4-x_1$.
2. Check with the product: $x_2=\dfrac1{2+\sqrt3}$.

::solution
By Viète's theorem, $x_1+x_2=4$, so $x_2=4-(2+\sqrt3)=2-\sqrt3$. Check with the product: $(2+\sqrt3)(2-\sqrt3)=4-3=1=\dfrac ca$.

So the other root is $x_2=2-\sqrt3$.

**Answer.** $x_2=2-\sqrt3$.
:::

:::exercise
Find the two numbers $u$, $v$ in each case:

a) $u+v=10$, $uv=21$.

b) $u+v=-3$, $uv=-40$.

c) $u+v=6$, $uv=10$.

::hint
**What you need:** $u$, $v$ are the roots of $x^2-Sx+P=0$, which needs $S^2-4P\geq0$.

**Steps:**
1. Form the equation $x^2-Sx+P=0$.
2. Solve it (or show that it has no solutions).

::solution
a) $u$, $v$ are the roots of $x^2-10x+21=0$. We have $\Delta'=25-21=4$, so $x=5\pm2$, that is $x=7$ or $x=3$.

b) $u$, $v$ are the roots of $x^2+3x-40=0$. We have $\Delta=9+160=169$, so $x=\dfrac{-3\pm13}{2}$, that is $x=5$ or $x=-8$.

c) We have $S^2-4P=36-40=-4<0$, so there are no such numbers.

So a) $\{u, v\}=\{7, 3\}$; b) $\{u, v\}=\{5, -8\}$; c) they do not exist.

**Answer.** a) $7$ and $3$; b) $5$ and $-8$; c) none.
:::

:::exercise
Let $x_1$, $x_2$ be the roots of the equation $x^2-3x-5=0$. Without solving the equation, find:

a) $x_1^2+x_2^2$.

b) $\dfrac1{x_1}+\dfrac1{x_2}$.

c) $x_1^2x_2+x_1x_2^2$.

::hint
**What you need:** $S=x_1+x_2$, $P=x_1x_2$; write each expression in terms of $S$ and $P$.

**Steps:**
1. Check that the equation has two roots and find $S$, $P$.
2. Use $S^2-2P$, $\dfrac SP$ and $x_1x_2(x_1+x_2)=PS$.

::solution
We have $a=1$ and $c=-5$ of opposite signs, so the equation has two roots, with $S=3$ and $P=-5$. Hence

$$x_1^2+x_2^2=9+10=19,\qquad \frac1{x_1}+\frac1{x_2}=\frac{3}{-5}=-\frac35,\qquad x_1^2x_2+x_1x_2^2=PS=-15.$$

So a) $19$; b) $-\dfrac35$; c) $-15$.

**Answer.** a) $19$; b) $-\dfrac35$; c) $-15$.
:::

:::exercise
Without solving, find the signs of the roots of each equation:

a) $2x^2+5x-9=0$.

b) $x^2-10x+7=0$.

c) $x^2+8x+3=0$.

::hint
**What you need:** $P<0$: opposite signs; $\Delta\geq0$ and $P>0$: both have the sign of $S$.

**Steps:**
1. Work out $P$; if $P>0$, check $\Delta'$ and work out $S$.

::solution
a) We have $P=-\dfrac92<0$, so the roots have opposite signs.

b) We have $\Delta'=25-7=18>0$, $P=7>0$ and $S=10>0$, so both roots are positive.

c) We have $\Delta'=16-3=13>0$, $P=3>0$ and $S=-8<0$, so both roots are negative.

So a) opposite signs; b) both positive; c) both negative.

**Answer.** a) Opposite signs; b) two positive roots; c) two negative roots.
:::

:::exercise
Suppose a rectangular outdoor sports court with spectator area has perimeter $120$ m and area $875$ m². Find the length and the width of the pitch.

::hint
**What you need:** the two sides have sum $S=60$ and product $P=875$.

**Steps:**
1. Form the equation $x^2-60x+875=0$.
2. Solve it with the reduced discriminant.

::solution
The two sides of the pitch are the roots of $x^2-60x+875=0$. We have $\Delta'=900-875=25$, so $x=30\pm5$, that is $x=35$ or $x=25$.

So the pitch is $35$ m long and $25$ m wide.

**Answer.** $35$ m and $25$ m.
:::

:::exercise
**(1.5 marks)** Consider the equation $x^2-5x+2=0$.

a) Prove that the equation has two distinct roots $x_1$, $x_2$.

b) Without solving the equation, find $x_1^2+x_2^2$.

c) Find the value of the expression $A=\dfrac{x_1}{x_2}+\dfrac{x_2}{x_1}$.

::hint
**What you need:** $\Delta>0$; $x_1^2+x_2^2=S^2-2P$; over a common denominator $A=\dfrac{x_1^2+x_2^2}{x_1x_2}$.

**Steps:**
1. Work out $\Delta$.
2. Find $S$, $P$, then $S^2-2P$.
3. Use the result of part b) in part c).

::solution
a) We have $\Delta=25-8=17>0$, so the equation has two distinct roots.

b) By Viète's theorem, $S=5$ and $P=2$. Hence $x_1^2+x_2^2=25-4=21$.

c) We have $A=\dfrac{x_1^2+x_2^2}{x_1x_2}=\dfrac{21}{2}$.

So b) $x_1^2+x_2^2=21$; c) $A=\dfrac{21}2$.

**Answer.** a) $\Delta=17>0$; b) $21$; c) $\dfrac{21}{2}$.
:::

:::exercise Challenge
Let $x_1$, $x_2$ be the roots of the equation $x^2-6x+4=0$. Prove that both roots are positive, then find $\sqrt{x_1}+\sqrt{x_2}$.

::hint
**What you need:** the signs of the roots; $(\sqrt{x_1}+\sqrt{x_2})^2=x_1+x_2+2\sqrt{x_1x_2}$.

**Steps:**
1. Work out $\Delta'$, $S$, $P$.
2. Square the required expression and use $S$, $P$.
3. Take the square root, remembering that the expression is positive.

::solution
We have $\Delta'=9-4=5>0$, $S=6>0$ and $P=4>0$, so both roots are positive. Let $T=\sqrt{x_1}+\sqrt{x_2}>0$; then

$$T^2=x_1+x_2+2\sqrt{x_1x_2}=6+2\sqrt4=10.$$

Since $T>0$, $T=\sqrt{10}$.

So $\sqrt{x_1}+\sqrt{x_2}=\sqrt{10}$.

**Answer.** $\sqrt{10}$.
:::

## Mini test

:::quiz
::mc
The sum of the roots of the equation $2x^2-6x-5=0$ is
A. $-3$.
B. $3$.
C. $-\dfrac52$.
D. $6$.
::key B
$a$ and $c$ have opposite signs, so there are two roots; $S=-\dfrac{-6}{2}=3$. A has the wrong sign, C is the product, and D forgets to divide by $a$.

::mc
The product of the roots of the equation $3x^2+7x-6=0$ is
A. $2$.
B. $-6$.
C. $-\dfrac73$.
D. $-2$.
::key D
$P=\dfrac ca=\dfrac{-6}{3}=-2$. A has the wrong sign, C is the sum, and B forgets to divide by $a$.

::mc
The roots of the equation $4x^2-9x+5=0$ are
A. $1$ and $-\dfrac54$.
B. $-1$ and $-\dfrac54$.
C. $1$ and $\dfrac54$.
D. $1$ and $5$.
::key C
$a+b+c=4-9+5=0$, so $x_1=1$ and $x_2=\dfrac ca=\dfrac54$. B uses the rule for $a-b+c=0$ by mistake, A has the wrong sign of $\dfrac ca$, and D forgets to divide by $a$.

::mc
Two numbers with sum $9$ and product $20$ are the roots of the equation
A. $x^2-9x+20=0$.
B. $x^2+9x+20=0$.
C. $x^2-20x+9=0$.
D. $x^2+9x-20=0$.
::key A
The equation is $x^2-Sx+P=0$ with $S=9$, $P=20$. B has the wrong sign of $S$, C swaps $S$ and $P$, and D has the wrong signs of both $S$ and $P$.

::tf
The equation $x^2-3x-10=0$ has two roots $x_1$, $x_2$. Decide whether each statement is true or false.
a) The equation has two roots of opposite signs.
b) $x_1+x_2=-3$.
c) $x_1x_2=-10$.
d) $x_1^2+x_2^2=29$.
::key T F T T
a) True: $P=-10<0$. b) False: $S=3$. c) True. d) True: $9+20=29$.

::sa
Let $x_1$, $x_2$ be the roots of the equation $x^2-7x+2=0$. Find $x_1^2+x_2^2$.
::key 45
$\Delta=41>0$, $S=7$, $P=2$, so $x_1^2+x_2^2=49-4=45$.

::sa
Find mentally the larger root of the equation $2x^2-11x+9=0$ (give your answer as a decimal).
::key 4.5
$a+b+c=2-11+9=0$, so the roots are $1$ and $\dfrac92=4.5$.
:::
