---
title: Algebraic fractions. The basic property of algebraic fractions
description: Recognise algebraic fractions, find when they are defined, decide when two are equal, use the basic property and simplify them.
minutes: 25
---

:::goals
- Recognise an algebraic fraction, find when it is defined and evaluate it.
- Recognise equal algebraic fractions.
- State and use the basic property of algebraic fractions.
- Simplify algebraic fractions and solve real-life problems that involve them.
:::

Suppose a print shop prints leaflets for a set-up fee of $200\,000$ dong for the printing plate, plus $5\,000$ dong for each leaflet. Printing $x$ leaflets costs $200\,000+5\,000x$ dong in total. The average cost per leaflet is then $\dfrac{200\,000+5\,000x}{x}$ dong.

This expression looks like a fraction, but its numerator and denominator contain letters. How does the average cost per leaflet change when more leaflets are printed? Can we write the expression more simply? This lesson answers questions like these.

## Let's explore

With numerical fractions we know that $\dfrac68=\dfrac34$ because we divide numerator and denominator by $2$. Does this still work when letters appear? Try $\dfrac{2x}{x^2}$ and $\dfrac2x$. Substituting $x=3$ gives $\dfrac{6}{9}=\dfrac23$ and $\dfrac23$. Substituting $x=5$ gives $\dfrac{10}{25}=\dfrac25$ and $\dfrac25$. The two expressions always have the same value. The reason is that in $\dfrac{2x}{x^2}$ we can divide numerator and denominator by $x$, just as we divide $6$ and $8$ by $2$. The next sections state this precisely.

## Algebraic fractions

:::definition Algebraic fraction
An **algebraic fraction** is an expression of the form $\dfrac{A}{B}$, where $A$ and $B$ are polynomials and $B$ is not the zero polynomial. We call $A$ the **numerator** and $B$ the **denominator**.
:::

**Going deeper.** Every polynomial is also an algebraic fraction, since $A=\dfrac{A}{1}$. Every real number is one too. The condition $B\neq0$ is essential: we cannot divide by the zero polynomial. Because the denominator contains letters, it can be $0$ for some values of the letters, and we must exclude those values.

The values of the variable that make the denominator non-zero are the values for which the fraction is **defined**. We only evaluate a fraction for those values.

:::example Recognising algebraic fractions
Which of these expressions are algebraic fractions?

a) $\dfrac{2x}{x-3}$.

b) $\dfrac{x^2+1}{5}$.

c) $\dfrac{3}{x^2+1}$.

d) $\dfrac{4}{0}$.

**Solution.** We check that the numerator and denominator are polynomials and that the denominator is not $0$.

a) The numerator $2x$ and denominator $x-3$ are polynomials, and the denominator is not $0$: it is an algebraic fraction.

b) The numerator $x^2+1$ and the denominator $5$ are polynomials, and $5\neq0$: it is an algebraic fraction.

c) The numerator $3$ and the denominator $x^2+1$ are polynomials, and $x^2+1\neq0$: it is an algebraic fraction.

d) The denominator is $0$, so it is not an algebraic fraction.

So a), b), c) are algebraic fractions.
:::

:::example When it is defined, and its value
Let $P=\dfrac{3x-1}{x-2}$.

a) Find when $P$ is defined.

b) Find the value of $P$ at $x=4$.

**Solution.** a) The fraction is defined when the denominator is not $0$, that is $x-2\neq0$, so $x\neq2$.

b) The value $x=4$ satisfies the condition. Substituting $x=4$ into $P$, we get
$$P=\frac{3\cdot4-1}{4-2}=\frac{11}{2}.$$

So $P$ is defined for $x\neq2$ and $P=\dfrac{11}{2}$ at $x=4$.
:::

## Equal algebraic fractions

Two numerical fractions $\dfrac ab$ and $\dfrac cd$ are equal when $ad=bc$. We use exactly the same rule for algebraic fractions.

:::definition Equal algebraic fractions
Two algebraic fractions $\dfrac{A}{B}$ and $\dfrac{C}{D}$ are **equal** if $A\cdot D=B\cdot C$. We then write $\dfrac{A}{B}=\dfrac{C}{D}$.
:::

:::example Proving that two fractions are equal
Prove that $\dfrac{2x+2}{x^2-1}=\dfrac{2}{x-1}$.

**Solution.** We work out the cross products:
$$(2x+2)(x-1)=2x^2-2,\qquad (x^2-1)\cdot2=2x^2-2.$$
The two products are equal.

So $\dfrac{2x+2}{x^2-1}=\dfrac{2}{x-1}$.
:::

## The basic property of algebraic fractions

:::theorem The basic property of algebraic fractions
- If we multiply the numerator and the denominator of a fraction by the same non-zero polynomial, we get a fraction equal to the original: $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$ ($M$ a non-zero polynomial).
- If we divide the numerator and the denominator by a common factor, we get a fraction equal to the original: $\dfrac{A}{B}=\dfrac{A:N}{B:N}$ ($N$ a common factor).
:::

**Why?** We have $A\cdot(B\cdot M)=B\cdot(A\cdot M)$ because multiplication of polynomials is commutative and associative. By the definition of equal fractions, $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$. The second property is the first read in the other direction.

Multiplying numerator and denominator by $-1$ gives the rule for **changing signs**:
$$\frac{A}{B}=\frac{-A}{-B}.$$

:::example Filling in the missing polynomial
Fill in the missing polynomial:

a) $\dfrac{x+3}{x-1}=\dfrac{\ ?\ }{x^2-1}$.

b) $\dfrac{x^2+2x-3}{x^2-1}=\dfrac{\ ?\ }{x+1}$.

**Solution.** a) Since $x^2-1=(x-1)(x+1)$, we multiply numerator and denominator by $x+1$:
$$\frac{x+3}{x-1}=\frac{(x+3)(x+1)}{(x-1)(x+1)}=\frac{x^2+4x+3}{x^2-1}.$$

b) We have $x^2+2x-3=(x-1)(x+3)$ and $x^2-1=(x-1)(x+1)$. Dividing numerator and denominator by the common factor $x-1$, we get
$$\frac{x^2+2x-3}{x^2-1}=\frac{x+3}{x+1}.$$

So a) $x^2+4x+3$; b) $x+3$.
:::

## Simplifying algebraic fractions

To **simplify** a fraction means to change it into an equal fraction with a simpler numerator and denominator, by dividing both by a common factor. We usually take two steps: factorise the numerator and the denominator, then divide by the common factor.

:::example Simplifying fractions
Simplify the following fractions:

a) $\dfrac{6x^2y}{9xy^2}$.

b) $\dfrac{x^2-4}{2x+4}$.

c) $\dfrac{x^2-4x+4}{x^2-2x}$.

**Solution.** a) The common factor of numerator and denominator is $3xy$:
$$\frac{6x^2y}{9xy^2}=\frac{3xy\cdot2x}{3xy\cdot3y}=\frac{2x}{3y}.$$

b) We have $x^2-4=(x-2)(x+2)$ and $2x+4=2(x+2)$, so
$$\frac{x^2-4}{2x+4}=\frac{(x-2)(x+2)}{2(x+2)}=\frac{x-2}{2}.$$

c) We have $x^2-4x+4=(x-2)^2$ and $x^2-2x=x(x-2)$, so
$$\frac{x^2-4x+4}{x^2-2x}=\frac{(x-2)^2}{x(x-2)}=\frac{x-2}{x}.$$

So a) $\dfrac{2x}{3y}$; b) $\dfrac{x-2}{2}$; c) $\dfrac{x-2}{x}$.
:::

When the common factors differ only in sign, we change signs first.

:::example Simplifying with a change of sign
Simplify $\dfrac{x-3}{9-x^2}$.

**Solution.** We have $9-x^2=(3-x)(3+x)$ and $3-x=-(x-3)$. Hence
$$\frac{x-3}{9-x^2}=\frac{x-3}{-(x-3)(x+3)}=\frac{1}{-(x+3)}=-\frac{1}{x+3}.$$

So $\dfrac{x-3}{9-x^2}=-\dfrac{1}{x+3}$.
:::

Now we return to the print shop at the start, using the four steps of solving a problem.

:::example Average cost per leaflet
The cost of printing $x$ leaflets is $200\,000+5\,000x$ (dong). Simplify the expression for the average cost per leaflet, then find that cost when $100$ leaflets and when $400$ leaflets are printed.

**Solution.**

*Understand.* The average cost per leaflet is the total cost divided by the number of leaflets: $\dfrac{200\,000+5\,000x}{x}$, with $x>0$.

*Plan.* Take out a common factor in the numerator to make the expression simpler, then substitute.

*Solve.* We have $200\,000+5\,000x=5\,000(x+40)$, so the average cost per leaflet is $\dfrac{5\,000(x+40)}{x}$ (dong). For $x=100$: $\dfrac{5\,000\cdot140}{100}=7\,000$ (dong). For $x=400$: $\dfrac{5\,000\cdot440}{400}=5\,500$ (dong).

*Look back.* Check with $x=100$: the total cost is $200\,000+500\,000=700\,000$ and $700\,000\div100=7\,000$. As $x$ grows, the set-up fee is shared among more leaflets, so the average cost keeps falling and approaches $5\,000$ dong.

So the average cost per leaflet is $7\,000$ dong for $100$ leaflets and $5\,500$ dong for $400$ leaflets.
:::

:::warning Mistakes to watch out for
- **Cancelling terms instead of factors.** Wrong: $\dfrac{x+2}{x}=2$ (cancelling $x$ above and below). Why it is wrong: $x+2$ is a sum, not a product with a factor $x$; for $x=1$ we get $\dfrac{3}{1}=3\neq2$. Right: $\dfrac{x+2}{x}$ cannot be simplified.
- **Changing signs wrongly.** Wrong: $\dfrac{x-3}{3-x}=1$. Why it is wrong: $3-x=-(x-3)$. Right: $\dfrac{x-3}{3-x}=-1$.
- **Forgetting when the fraction is defined.** Wrong: saying $\dfrac{x^2-4}{x+2}=x-2$ for every $x$. Why it is wrong: the fraction on the left is not defined when $x=-2$. Right: $\dfrac{x^2-4}{x+2}=x-2$ for $x\neq-2$.
:::

**Connections.** Algebraic fractions extend numerical fractions to expressions with letters: the basic property is exactly that of numerical fractions, so all your factorising skills (special products, taking out a common factor) are used again. The next lesson, [adding and subtracting algebraic fractions](lesson:add-subtract-algebraic-fractions), uses the basic property to write fractions over a common denominator.

## Key terms

:::terms
- algebraic fraction | phân thức đại số
- numerator | tử thức
- denominator | mẫu thức
- polynomial | đa thức
- condition for the fraction to be defined | điều kiện xác định
- equal algebraic fractions | hai phân thức bằng nhau
- basic property | tính chất cơ bản
- common factor | nhân tử chung
- simplifying a fraction | rút gọn phân thức
- changing signs | đổi dấu
:::

## Summary

- An algebraic fraction is an expression $\dfrac{A}{B}$ with $A$, $B$ polynomials and $B\neq0$; it is defined when $B\neq0$.
- $\dfrac{A}{B}=\dfrac{C}{D}$ when $A\cdot D=B\cdot C$.
- Basic property: $\dfrac{A}{B}=\dfrac{A\cdot M}{B\cdot M}$ ($M\neq0$) and $\dfrac{A}{B}=\dfrac{A:N}{B:N}$ ($N$ a common factor).
- Changing signs: $\dfrac{A}{B}=\dfrac{-A}{-B}$; remember $3-x=-(x-3)$.
- To simplify: factorise the numerator and denominator, then divide by the common factor; never cancel terms.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Which of these expressions are algebraic fractions?

a) $\dfrac{x+1}{x^2+1}$.

b) $\dfrac{3x}{0}$.

c) $\dfrac{2x-1}{7}$.

d) $4x-5$.

::hint
**What you need:** an algebraic fraction is $\dfrac{A}{B}$ with $A$, $B$ polynomials and $B\neq0$.

**Steps:**
1. Check that the numerator and denominator are polynomials.
2. Check that the denominator is not $0$.

::solution
a) It is an algebraic fraction. b) The denominator is $0$, so it is not. c) It is an algebraic fraction. d) It is a polynomial, which can be written $\dfrac{4x-5}{1}$, so it is an algebraic fraction.

So a), c), d) are algebraic fractions.

**Answer.** a), c), d).
:::

:::exercise
Find when each of these fractions is defined:

a) $\dfrac{5}{2x-6}$.

b) $\dfrac{x+1}{x^2-25}$.

c) $\dfrac{3}{x^2+4}$.

::hint
**What you need:** the denominator must not be $0$.

**Steps:**
1. Set the denominator equal to $0$ and find the values of $x$ to exclude.
2. For c), look at the sign of $x^2+4$.

::solution
a) $2x-6\neq0$, so $x\neq3$.

b) $x^2-25\neq0$, so $(x-5)(x+5)\neq0$, that is $x\neq5$ and $x\neq-5$.

c) Since $x^2+4\geq4>0$, the denominator is never $0$; the fraction is defined for every $x$.

**Answer.** a) $x\neq3$. b) $x\neq\pm5$. c) every $x$.
:::

:::exercise
Find the value of $\dfrac{x^2-1}{x+2}$ at $x=3$ and at $x=-1$.

::hint
**What you need:** substitute the value of $x$ (one for which the fraction is defined).

**Steps:**
1. The fraction is defined for $x\neq-2$.
2. Substitute the two values in turn.

::solution
The fraction is defined for $x\neq-2$; both values satisfy this. At $x=3$: $\dfrac{9-1}{3+2}=\dfrac85$. At $x=-1$: $\dfrac{1-1}{-1+2}=0$.

So the values are $\dfrac85$ at $x=3$ and $0$ at $x=-1$.

**Answer.** $\dfrac85$; $0$.
:::

:::exercise
Prove that $\dfrac{3x-6}{x^2-4}=\dfrac{3}{x+2}$.

::hint
**What you need:** $\dfrac AB=\dfrac CD$ when $A\cdot D=B\cdot C$.

**Steps:**
1. Work out $(3x-6)(x+2)$.
2. Work out $(x^2-4)\cdot3$ and compare.

::solution
We have $(3x-6)(x+2)=3x^2+6x-6x-12=3x^2-12$ and $(x^2-4)\cdot3=3x^2-12$. The two products are equal.

So $\dfrac{3x-6}{x^2-4}=\dfrac{3}{x+2}$.

**Answer.** Proved.
:::

:::exercise
Fill in the missing polynomial:

a) $\dfrac{x-1}{x+2}=\dfrac{\ ?\ }{x^2+2x}$.

b) $\dfrac{4x^2y}{6xy^2}=\dfrac{2x}{\ ?\ }$.

::hint
**What you need:** the basic property of algebraic fractions.

**Steps:**
1. a) How many times as large is the new denominator?
2. b) Divide numerator and denominator by the common factor $2xy$.

::solution
a) Since $x^2+2x=x(x+2)$, multiply numerator and denominator by $x$: $\dfrac{x-1}{x+2}=\dfrac{x(x-1)}{x(x+2)}=\dfrac{x^2-x}{x^2+2x}$.

b) Divide numerator and denominator by $2xy$: $\dfrac{4x^2y}{6xy^2}=\dfrac{2x}{3y}$.

So a) $x^2-x$; b) $3y$.

**Answer.** a) $x^2-x$. b) $3y$.
:::

:::exercise
Simplify the following fractions:

a) $\dfrac{12x^3y^2}{18x^2y^3}$.

b) $\dfrac{5x+10}{x^2-4}$.

c) $\dfrac{x^2-6x+9}{x^2-9}$.

::hint
**What you need:** factorise numerator and denominator, then divide by the common factor.

**Steps:**
1. a) The common factor is $6x^2y^2$.
2. b) $5x+10=5(x+2)$; c) use special products.

::solution
a) $\dfrac{12x^3y^2}{18x^2y^3}=\dfrac{6x^2y^2\cdot2x}{6x^2y^2\cdot3y}=\dfrac{2x}{3y}$.

b) $\dfrac{5x+10}{x^2-4}=\dfrac{5(x+2)}{(x-2)(x+2)}=\dfrac{5}{x-2}$.

c) $\dfrac{x^2-6x+9}{x^2-9}=\dfrac{(x-3)^2}{(x-3)(x+3)}=\dfrac{x-3}{x+3}$.

So a) $\dfrac{2x}{3y}$; b) $\dfrac{5}{x-2}$; c) $\dfrac{x-3}{x+3}$.

**Answer.** a) $\dfrac{2x}{3y}$. b) $\dfrac{5}{x-2}$. c) $\dfrac{x-3}{x+3}$.
:::

:::exercise
Simplify the fraction $\dfrac{2-x}{x^2-4x+4}$.

::hint
**What you need:** $2-x=-(x-2)$.

**Steps:**
1. Write the denominator as $(x-2)^2$.
2. Change the sign of the numerator, then divide by $x-2$.

::solution
We have $x^2-4x+4=(x-2)^2$ and $2-x=-(x-2)$. Hence
$$\frac{2-x}{x^2-4x+4}=\frac{-(x-2)}{(x-2)^2}=-\frac{1}{x-2}.$$

So $\dfrac{2-x}{x^2-4x+4}=-\dfrac{1}{x-2}$.

**Answer.** $-\dfrac{1}{x-2}$.
:::

:::exercise
A car travels $120$ km at a speed of $x$ km/h. Write a fraction for the time taken. Find the time when $x=40$ and when $x=60$. If the car's speed is $40$ km/h and is then increased by $20$ km/h, by how many hours is the time reduced?

::hint
**What you need:** time equals distance divided by speed.

**Steps:**
1. Write time $=\dfrac{120}{x}$ with $x>0$.
2. Substitute $x=40$ and $x=60$, then subtract.

::solution
The time is $\dfrac{120}{x}$ (hours), $x>0$. For $x=40$: $\dfrac{120}{40}=3$ (hours). For $x=60$: $\dfrac{120}{60}=2$ (hours). The time is reduced by $3-2=1$ (hour).

So the times are $3$ hours and $2$ hours; increasing the speed by $20$ km/h reduces the time by $1$ hour.

**Answer.** $\dfrac{120}{x}$ hours; $3$ hours, $2$ hours; reduced by $1$ hour.
:::

:::exercise
Suppose a taxi company charges a starting fee of $12\,000$ dong plus $14\,000$ dong per kilometre. For a journey of $x$ km ($x>0$), what is the average price per kilometre? Simplify the expression and evaluate it for $x=10$.

::hint
**What you need:** the average price per kilometre is the total fare divided by the number of kilometres.

**Steps:**
1. Write the total fare as $12\,000+14\,000x$.
2. Take out the common factor $2\,000$ in the numerator, then substitute $x=10$.

::solution
The average price per kilometre is $\dfrac{12\,000+14\,000x}{x}=\dfrac{2\,000(6+7x)}{x}$ (dong). For $x=10$: $\dfrac{2\,000\cdot76}{10}=15\,200$ (dong).

Check: the total fare is $12\,000+140\,000=152\,000$ and $152\,000\div10=15\,200$.

So the average price is $\dfrac{2\,000(6+7x)}{x}$ dong per km, and $15\,200$ dong for a $10$ km journey.

**Answer.** $\dfrac{2\,000(6+7x)}{x}$; $15\,200$ dong.
:::

:::exercise Challenge
Simplify $P=\dfrac{x^2-xy}{xy-y^2}$. Find $P$ when $x=6$, $y=4$. Why can $P$ not be evaluated when $x=y$?

::hint
**What you need:** take out common factors in the numerator and denominator.

**Steps:**
1. Write $x^2-xy=x(x-y)$ and $xy-y^2=y(x-y)$.
2. Find when $P$ is defined before simplifying.

::solution
$P$ is defined when $xy-y^2\neq0$, that is $y(x-y)\neq0$, so $y\neq0$ and $x\neq y$. We have
$$P=\frac{x(x-y)}{y(x-y)}=\frac{x}{y}.$$
For $x=6$, $y=4$: $P=\dfrac64=\dfrac32$.

When $x=y$, the denominator $xy-y^2=y(x-y)=0$, so $P$ is not defined, even though the simplified expression $\dfrac xy$ can still be evaluated.

So $P=\dfrac xy$, and $P=\dfrac32$ when $x=6$, $y=4$.

**Answer.** $\dfrac{x}{y}$; $\dfrac32$.
:::

## Mini test

:::quiz
::mc
The fraction $\dfrac{x+1}{x^2-9}$ is defined when
A. $x\neq3$.
B. $x\neq3$ and $x\neq-3$.
C. $x\neq9$.
D. $x\neq-3$.
::key B
$x^2-9=(x-3)(x+3)\neq0$, so $x\neq3$ and $x\neq-3$. A and D exclude only one value, C confuses $x^2=9$ with $x=9$.

::mc
Which fraction is equal to $\dfrac{x+2}{x-1}$?
A. $\dfrac{x+2+x}{x-1+x}$.
B. $\dfrac{x^2+2}{x^2-1}$.
C. $\dfrac{x^2+2x}{x^2-x}$.
D. $\dfrac{x+2}{1-x}$.
::key C
Multiplying numerator and denominator by $x$ gives $\dfrac{x^2+2x}{x^2-x}$. A adds $x$ to numerator and denominator, B squares each term, D changes the sign of the denominator only.

::mc
Simplifying $\dfrac{6x^2y}{9xy^2}$ gives
A. $\dfrac23$.
B. $\dfrac{2y}{3x}$.
C. $\dfrac{2x^2}{3y^2}$.
D. $\dfrac{2x}{3y}$.
::key D
Dividing numerator and denominator by $3xy$ gives $\dfrac{2x}{3y}$. B swaps the letters; C and A divide by the wrong factor.

::mc
For $x\neq3$, the value of $\dfrac{x-3}{3-x}$ is
A. $-1$.
B. $x$.
C. $0$.
D. $1$.
::key A
$3-x=-(x-3)$, so the fraction equals $-1$. A forgets the sign change, C thinks the numerator is $0$.

::tf
Let $P=\dfrac{x^2-4}{x+2}$. Decide whether each statement is true or false.
a) $P$ is defined when $x\neq-2$.
b) $P=x-2$ for every $x\neq-2$.
c) The value of $P$ at $x=3$ is $5$.
d) $P$ and $x-2$ are equal algebraic fractions.
::key T T F T
a) True: $x+2\neq0$. b) True: $\dfrac{(x-2)(x+2)}{x+2}=x-2$. c) False: $\dfrac{9-4}{3+2}=1$, not $5$. d) True: $(x^2-4)\cdot1=(x+2)(x-2)$.

::sa
Find the value of $\dfrac{3x-1}{x-2}$ at $x=4$ (as a decimal).
::key 5.5
$\dfrac{3\cdot4-1}{4-2}=\dfrac{11}{2}=5.5$.

::sa
The cost of printing $x$ leaflets is $200\,000+5\,000x$ dong. What is the average cost per leaflet, in dong, when $400$ leaflets are printed?
::key 5500
$\dfrac{200\,000+5\,000\cdot400}{400}=\dfrac{2\,200\,000}{400}=5\,500$.
:::
