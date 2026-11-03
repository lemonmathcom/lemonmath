---
title: Statements (propositions)
description: Learn what a statement is, how to negate it, build implications and equivalences, use quantifiers, and disprove a claim with a counter-example.
minutes: 20
---

:::goals
- Decide whether a sentence is a statement and whether it is true or false.
- Form the negation, the implication, the converse and the equivalence of statements.
- Use the words "necessary", "sufficient" and "necessary and sufficient" correctly.
- Read and negate statements with $\forall$ and $\exists$, and disprove a claim with a counter-example.
:::

An makes a claim: "For every natural number $n$, the number $n^2-n+11$ is prime." He tries $n=0, 1, 2, 3, 4, 5$ and gets $11, 11, 13, 17, 23, 31$, all of them primes. Is An allowed to conclude that his claim is true?

To answer, we need to know exactly what it means for a sentence to be "true" or "false", and how much evidence it takes to prove or to disprove a sentence about **every** number. That is what this lesson is about.

## What is a statement?

Read these four sentences and ask: for which ones can we answer "true" or "false"?

| Sentence | True or false? |
|---|---|
| "$2^{10}=1024$." | True, because $2^{10}=1024$. |
| "$51$ is a prime number." | False, because $51=3\cdot17$. |
| "Is there a test today?" | Cannot answer: it is a question. |
| "$2x-1=7$." | Cannot answer yet: it depends on $x$. |

The first two sentences have a clear truth value. The third one claims nothing. The fourth is true when $x=4$ and false when $x=0$. This sorting leads to the following definition.

:::definition Statement
A **statement** (also called a *proposition*) is a sentence that is either **true** or **false**, but not both.

A sentence containing a variable that has no truth value yet, but becomes a statement once the variable is given a value, is called a **statement with a variable**. We write it as $P(x)$, $Q(n)$, ...
:::

With $P(x)$: "$2x-1=7$", the statement $P(4)$ is true and $P(0)$ is false. Questions, exclamations and commands are not statements.

:::example Is it a statement?
Which of these are statements? For each statement, say whether it is true or false.

(a) $91$ is divisible by $7$. (b) $3^4<80$. (c) Please close the window. (d) $x^2=16$. (e) Vietnam shares a land border with China.

**Solution.** For each sentence we ask whether it claims something that is either true or false.

- (a) A true statement, because $91=7\cdot13$.
- (b) A false statement, because $3^4=81>80$.
- (c) A command, so not a statement.
- (d) A statement with a variable: true for $x=4$, false for $x=1$.
- (e) A true statement.

So (a), (b), (e) are statements; (d) is a statement with a variable; (c) is not a statement.
:::

## Negation

Every statement has a "flip side" that says the opposite. The **negation** of $P$, written $\overline{P}$, is true when $P$ is false and false when $P$ is true.

| $P$ | $\overline{P}$ |
|---|---|
| true | false |
| false | true |

Usually we form $\overline{P}$ by adding (or removing) the word "not". For an inequality, the signs swap in pairs: the negation of $>$ is $\le$, and the negation of $\ge$ is $<$.

:::example Forming negations
Write the negation of each statement and say which of the two is true.

(a) $P$: "$\sqrt{3}$ is irrational." (b) $Q$: "$2^5\ge 33$." (c) $R$: "Every student in class 10A has a bicycle."

**Solution.** We state the opposite, then decide whether the original is true or false.

- (a) $\overline{P}$: "$\sqrt{3}$ is not irrational." $P$ is true, so $\overline{P}$ is false.
- (b) The negation of "$\ge$" is "$<$", so $\overline{Q}$: "$2^5<33$". Since $2^5=32<33$, $Q$ is false and $\overline{Q}$ is true.
- (c) $R$ fails as soon as **one** student has no bicycle, so $\overline{R}$: "At least one student in class 10A has no bicycle."

So $\overline{P}$ is false and $\overline{Q}$ is true; whether $R$ or $\overline{R}$ is true, we would have to ask class 10A.
:::

Part (c) shows that the negation of "every" is not "nobody" but "at least one ... not". We come back to this in the section on $\forall$ and $\exists$.

## Implication and converse

Think of a promise: "If you score $8$ or more, I will give you a book." The promise is broken in only one case: you score $8$ or more and get no book. If you score $6$, the promise says nothing, so whether or not you get a book, the teacher has kept her word.

:::definition Implication
The statement "if $P$ then $Q$", written $P \Rightarrow Q$, **is false only when $P$ is true and $Q$ is false**. In every other case it is true.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | true |
| false | false | true |

The **converse** of $P \Rightarrow Q$ is $Q \Rightarrow P$.
:::

A true implication can have a false converse. The next example shows this.

:::example An implication and its converse
For a real number $a$, consider "If $a>3$ then $a^2>9$". Is it true? State its converse and decide whether the converse is true.

**Solution.** To check $P\Rightarrow Q$ we assume $P$ and see whether $Q$ must follow. Multiply both sides of $a>3$ by the positive number $a$, then use $3a>9$:

$$a>3 \Rightarrow a^2>3a>9.$$

The converse is "If $a^2>9$ then $a>3$". Take $a=-4$:

$$(-4)^2=16>9 \quad\text{but}\quad -4<3.$$

So "If $a>3$ then $a^2>9$" is true, but its converse is false: for $a=-4$ the hypothesis $a^2>9$ holds while the conclusion $a>3$ does not.
:::

### Necessary and sufficient conditions, and equivalence

When $P \Rightarrow Q$ is true, we say:
- $P$ is a **sufficient condition** for $Q$: knowing $P$ is enough to be sure of $Q$;
- $Q$ is a **necessary condition** for $P$: without $Q$, $P$ cannot happen.

:::definition Equivalence
If both $P \Rightarrow Q$ and $Q \Rightarrow P$ are true, we have the equivalence $P \Leftrightarrow Q$, read "$P$ if and only if $Q$". Then $P$ is a **necessary and sufficient condition** for $Q$. The statement $P \Leftrightarrow Q$ is true when $P$ and $Q$ are both true or both false.
:::

To find what kind of condition $P$ is for $Q$, always check **both directions**.

:::example Necessary or sufficient?
(a) Let $P$: "Quadrilateral $ABCD$ is a rectangle" and $Q$: "Quadrilateral $ABCD$ has equal diagonals". What kind of condition is $P$ for $Q$?

(b) For a triangle $ABC$, let $P$: "Triangle $ABC$ has a right angle at $A$" and $Q$: "$BC^2=AB^2+AC^2$".

**Solution.** We check $P\Rightarrow Q$ and then $Q\Rightarrow P$.

- (a) $P\Rightarrow Q$ is true: a rectangle has equal diagonals. $Q\Rightarrow P$ is false: an isosceles trapezium has equal diagonals but is not a rectangle.
- (b) $P\Rightarrow Q$ is true by Pythagoras' theorem. $Q\Rightarrow P$ is true by the converse of Pythagoras' theorem.

So in (a), "is a rectangle" is a **sufficient** (but not necessary) condition for equal diagonals; in (b), $P\Leftrightarrow Q$ is true, so "right angle at $A$" is a **necessary and sufficient** condition for $BC^2=AB^2+AC^2$.
:::

## The symbols "for all" and "there exists"

- $\forall$ reads "for all". The statement $\forall x \in X,\ P(x)$ says that $P(x)$ is true for **every** $x$ in $X$.
- $\exists$ reads "there exists". The statement $\exists x \in X,\ P(x)$ says that **at least one** $x$ in $X$ makes $P(x)$ true.

:::theorem Rule for negation
$$\overline{\forall x \in X,\ P(x)} \ \text{ is } \ \exists x \in X,\ \overline{P(x)}$$
$$\overline{\exists x \in X,\ P(x)} \ \text{ is } \ \forall x \in X,\ \overline{P(x)}$$
:::

**Why?** "Every $x$ has property $P$" is false exactly when at least one $x$ lacks the property. "Some $x$ has property $P$" is false exactly when no $x$ has it, that is, every $x$ fails to have property $P$. In short: swap $\forall$ and $\exists$, and negate the property.

:::example True or false, and the negation
Decide whether each statement is true, then write its negation.

(a) $A$: "$\forall x\in\mathbb{R},\ x^2-4x+5>0$". (b) $B$: "$\exists n\in\mathbb{N},\ n^2=2n$". (c) $C$: "$\forall n\in\mathbb{N},\ 2^n>n^2$".

**Solution.** A "for all" statement needs a general reason; a "there exists" statement needs just one example.

- (a) Write the expression as a square plus a positive number:
$$x^2-4x+5=(x-2)^2+1\ge 1>0.$$
So $A$ is true. $\overline{A}$: "$\exists x\in\mathbb{R},\ x^2-4x+5\le 0$".
- (b) For $n=2$ we have $2^2=4=2\cdot2$, so $B$ is true. $\overline{B}$: "$\forall n\in\mathbb{N},\ n^2\ne 2n$".
- (c) For $n=2$ we have $2^2=4$ and $2^2=4$, so $2^n>n^2$ fails. Hence $C$ is false. $\overline{C}$: "$\exists n\in\mathbb{N},\ 2^n\le n^2$".

So $A$ and $B$ are true, and $C$ is false (hence $\overline{C}$ is true).
:::

## Disproving with a counter-example

To show that "$\forall x,\ P(x)$" is false, **one** value of $x$ that makes $P(x)$ false is enough. Such a value is called a **counter-example**. On the other hand, no number of examples that work can prove a "for all" statement (unless the set $X$ is finite and we try every element). Now we can answer An's question.

:::example An's claim
Claim: "For every natural number $n$, the number $n^2-n+11$ is prime." Is the claim true or false?

**Solution.**

*Understand.* This is a "for all" statement. To disprove it, we need one $n$ for which $n^2-n+11$ is not prime.

*Plan.* The term $11$ suggests choosing $n=11$, because then every term is divisible by $11$.

*Solve.* Substitute $n=11$:
$$11^2-11+11=121=11\cdot 11.$$
The number $121$ has the divisor $11$, other than $1$ and $121$, so it is not prime.

*Look back.* For $n=0, 1, \dots, 10$ we do get primes ($11, 11, 13, 17, 23, 31, 41, 53, 67, 83, 101$), and still the claim is false. Being true in $11$ cases does not make it true in every case.

So An's claim is false, and $n=11$ is a counter-example.
:::

:::warning Common mistakes
- **Wrong sign in a negation.** Writing the negation of "$x>2$" as "$x<2$". This is wrong because it leaves out $x=2$. Right: the negation of "$x>2$" is "$x\le 2$".
- **Negating "every" as "nobody".** Writing the negation of "Every student came to school" as "No student came to school". Wrong: one absent student already makes the original false. Right: "At least one student did not come to school".
- **Mixing up a statement and its converse.** Concluding from "If $a>3$ then $a^2>9$" that "If $a^2>9$ then $a>3$". Wrong: $a=-4$. Each direction must be checked separately.
- **Proving by a few examples.** "True for $5$ numbers, so true for all numbers" is not a proof; An's claim is the example.
:::

## Key terms

:::terms
- statement | mệnh đề
- statement with a variable | mệnh đề chứa biến
- negation | mệnh đề phủ định
- implication | mệnh đề kéo theo
- converse | mệnh đề đảo
- equivalence | mệnh đề tương đương
- necessary condition | điều kiện cần
- sufficient condition | điều kiện đủ
- quantifier | kí hiệu lượng từ
- counter-example | phản ví dụ
:::

## Summary

- **Statement**: a sentence that is either true or false. A sentence with a variable becomes a statement once the variable has a value.
- **Negation** $\overline{P}$: true when $P$ is false. The negation of $>$ is $\le$; of $\ge$ is $<$.
- **Implication** $P\Rightarrow Q$: false only when $P$ is true and $Q$ is false. The converse $Q\Rightarrow P$ must be checked on its own.
- $P\Rightarrow Q$ true: $P$ is **sufficient** for $Q$, $Q$ is **necessary** for $P$. Both directions true: $P\Leftrightarrow Q$, a **necessary and sufficient** condition.
- $\overline{\forall x,\ P(x)}$ is $\exists x,\ \overline{P(x)}$; $\overline{\exists x,\ P(x)}$ is $\forall x,\ \overline{P(x)}$.
- One counter-example disproves a "for all" statement; a few examples do not prove it.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Which of these are statements? For each statement, is it true or false?

(a) $221$ is a prime number. (b) $x-3>0$. (c) What a nice problem! (d) $\sqrt{49}=7$.

::hint
**What you need:** a statement is a sentence that is either true or false; a sentence with a free variable is not yet a statement.

**Steps:**
1. Rule out questions, exclamations and commands.
2. For the rest, check whether they depend on a variable.
3. Compute to decide true or false.

::solution
(a) A false statement, because $221=13\cdot17$. (b) It contains the variable $x$, so it is not yet a statement (true for $x=5$, false for $x=0$). (c) An exclamation, not a statement. (d) A true statement, because $7^2=49$ and $7>0$.

**Answer.** (a) false statement; (b) statement with a variable; (c) not a statement; (d) true statement.
:::

:::exercise
Write the negation of each statement and say which of the two is true.

(a) "$2023$ is divisible by $7$." (b) "$\pi<3.14$." (c) "$-3>-5$."

::hint
**What you need:** $\overline{P}$ is true when $P$ is false. The negation of $<$ is $\ge$, and of $>$ is $\le$.

**Steps:**
1. Write the sentence that says the opposite.
2. Decide whether the original is true.

::solution
(a) "$2023$ is not divisible by $7$". Since $2023=7\cdot289$, the original is true and the negation is false.

(b) "$\pi\ge 3.14$". Since $\pi\approx3.1416$, the original is false and the negation is true.

(c) "$-3\le -5$". The original is true and the negation is false.

**Answer.** The true one is: (a) the original; (b) the negation; (c) the original.
:::

:::exercise
Consider "If quadrilateral $ABCD$ is a rhombus, then its diagonals are perpendicular." Is it true? State the converse and decide whether it is true.

::hint
**What you need:** the converse of $P\Rightarrow Q$ is $Q\Rightarrow P$; to disprove an implication, find a case where $P$ is true and $Q$ is false.

**Steps:**
1. Recall the property of the diagonals of a rhombus.
2. Find a quadrilateral with perpendicular diagonals that is not a rhombus.

::solution
The statement is true: the diagonals of a rhombus are perpendicular. Converse: "If quadrilateral $ABCD$ has perpendicular diagonals, then it is a rhombus." The converse is false: a kite such as $AB=AD=2$, $CB=CD=5$ has perpendicular diagonals, but only one diagonal bisects the other, so it is not a rhombus.

**Answer.** The statement is true; the converse is false.
:::

:::exercise
Fill in "necessary", "sufficient" or "necessary and sufficient".

(a) "$n$ is divisible by $6$" is a ... condition for "$n$ is divisible by $3$".
(b) "$x^2>4$" is a ... condition for "$x>2$".
(c) "The triangle has two equal angles" is a ... condition for "the triangle is isosceles".

::hint
**What you need:** if $P\Rightarrow Q$ is true, then $P$ is sufficient for $Q$ and $Q$ is necessary for $P$.

**Steps:**
1. For each part, check the direction "condition $\Rightarrow$ conclusion".
2. Check the other direction too.

::solution
(a) $6\mid n\Rightarrow 3\mid n$ is true; the other direction is false ($n=3$). So it is **sufficient**.

(b) $x>2\Rightarrow x^2>4$ is true; $x^2>4\Rightarrow x>2$ is false ($x=-3$). So "$x^2>4$" is a **necessary** condition for "$x>2$".

(c) A triangle has two equal angles if and only if it is isosceles, so the condition is **necessary and sufficient**.

**Answer.** (a) sufficient; (b) necessary; (c) necessary and sufficient.
:::

:::exercise
Write the negation of $A$: "$\forall x\in\mathbb{R},\ x^2+x+1>0$" and decide whether $A$ or $\overline{A}$ is true.

::hint
**What you need:** the negation of "$\forall x,\ P(x)$" is "$\exists x,\ \overline{P(x)}$".

**Steps:**
1. Change $\forall$ into $\exists$ and $>$ into $\le$.
2. Write $x^2+x+1$ as a square plus a number.

::solution
$\overline{A}$: "$\exists x\in\mathbb{R},\ x^2+x+1\le 0$". We have
$$x^2+x+1=\left(x+\dfrac12\right)^2+\dfrac34\ge\dfrac34>0$$
for every $x$, so $A$ is true.

**Answer.** $A$ is true, $\overline{A}$ is false.
:::

:::exercise
Let $A$ be the statement "$\exists n\in\mathbb{N},\ n^2+1$ is divisible by $3$". Is each claim true or false?

a) $A$ is a false statement.
b) The negation of $A$ is "$\exists n\in\mathbb{N},\ n^2+1$ is not divisible by $3$".
c) For the statement with a variable $P(n)$: "$n^2+1$ is divisible by $3$", the statement $P(2)$ is true.
d) The statement "$\exists n\in\mathbb{N},\ n^2+1$ is divisible by $5$" is true.

::hint
**What you need:** every natural number has the form $3k$, $3k+1$ or $3k+2$; the negation of $\exists$ is $\forall$.

**Steps:**
1. Find the remainder of $n^2$ on division by $3$ in the three cases.
2. Apply the rule for negation in b).
3. Try small values of $n$ for c) and d).

::solution
a) **True.** If $n=3k$ then $n^2=9k^2$ is divisible by $3$; if $n=3k\pm1$ then $n^2=9k^2\pm6k+1$ leaves remainder $1$. So $n^2+1$ leaves remainder $1$ or $2$ and is never divisible by $3$.

b) **False.** The correct negation is "$\forall n\in\mathbb{N},\ n^2+1$ is not divisible by $3$".

c) **False.** $P(2)$: $2^2+1=5$ is not divisible by $3$.

d) **True.** For $n=2$: $2^2+1=5$ is divisible by $5$.

**Answer.** a) True; b) False; c) False; d) True.
:::

:::exercise
Among the natural numbers $n$ from $1$ to $20$, how many make the statement $P(n)$: "$n^2-1$ is divisible by $8$" true?

::hint
**What you need:** $n^2-1=(n-1)(n+1)$; the product of two consecutive even numbers is divisible by $8$.

**Steps:**
1. Take $n$ even: is $n^2-1$ even or odd?
2. Take $n$ odd: $n-1$ and $n+1$ are consecutive even numbers.
3. Count the odd $n$ from $1$ to $20$.

::solution
If $n$ is even, $n^2-1$ is odd, so not divisible by $8$. If $n$ is odd, $n-1$ and $n+1$ are consecutive even numbers, one of them divisible by $4$, so $(n-1)(n+1)$ is divisible by $2\cdot4=8$. There are $10$ odd numbers from $1$ to $20$.

**Answer.** $10$.
:::

:::exercise
A school rule says: "If a student is more than $15$ minutes late, they must go to the supervisor's office." Four students one morning:

| Student | Minutes late | Went to the office |
|---|---|---|
| An | $0$ | no |
| Binh | $10$ | yes |
| Chi | $20$ | yes |
| Dung | $25$ | no |

Who broke the rule?

::hint
**What you need:** $P\Rightarrow Q$ is false only when $P$ is true and $Q$ is false.

**Steps:**
1. Let $P$: "more than $15$ minutes late", $Q$: "went to the office".
2. For each student, decide whether $P$ and $Q$ are true.
3. Look for the case $P$ true, $Q$ false.

::solution
An: $P$ false, $Q$ false. Binh: $P$ false, $Q$ true (he went anyway, which the rule does not forbid). Chi: $P$ true, $Q$ true. Dung: $P$ true, $Q$ false, the only case that makes $P\Rightarrow Q$ false.

**Answer.** Only Dung broke the rule.
:::

:::exercise
(Review from grade 9) Decide whether each statement is true and write its negation.

(a) $P$: "The equation $x^2-6x+10=0$ has a real root."
(b) $Q$: "$\exists x\in\mathbb{R},\ x^2-7x+10<0$".

::hint
**What you need:** write the equation as $ax^2+bx+c=0$ with $b=2b'$; it has a real root if and only if the reduced discriminant $\Delta'=b'^2-ac$ (a quarter of $\Delta=b^2-4ac$) satisfies $\Delta'\ge 0$; a "there exists" statement needs only one example.

**Steps:**
1. Compute $\Delta'$ for (a).
2. For (b), try a value of $x$ between the roots $2$ and $5$ of $x^2-7x+10=0$.

::solution
(a) $\Delta'=(-3)^2-10=-1<0$, so the equation has no real root: $P$ is false. $\overline{P}$: "The equation $x^2-6x+10=0$ has no real root" is true.

(b) For $x=3$: $9-21+10=-2<0$, so $Q$ is true. $\overline{Q}$: "$\forall x\in\mathbb{R},\ x^2-7x+10\ge 0$" is false.

**Answer.** (a) $P$ false, $\overline{P}$ true; (b) $Q$ true, $\overline{Q}$ false.
:::

:::exercise Challenge
For a natural number $n$, prove that "$n$ is divisible by $3$ $\Leftrightarrow$ $n^2$ is divisible by $3$" is true.

::hint
**What you need:** $P\Leftrightarrow Q$ is true when both $P\Rightarrow Q$ and $Q\Rightarrow P$ are true. To prove $Q\Rightarrow P$, you may prove "if $P$ is false then $Q$ is false".

**Steps:**
1. Forward direction: write $n=3k$.
2. Backward direction: suppose $n$ is not divisible by $3$, so $n=3k+1$ or $n=3k+2$, and compute $n^2$.

::solution
($\Rightarrow$) If $n=3k$ then $n^2=9k^2=3\cdot3k^2$ is divisible by $3$.

($\Leftarrow$) If $n$ is not divisible by $3$, then
$$n=3k+1\Rightarrow n^2=3(3k^2+2k)+1,\qquad n=3k+2\Rightarrow n^2=3(3k^2+4k+1)+1,$$
so $n^2$ leaves remainder $1$. Hence if $n^2$ is divisible by $3$, $n$ must be divisible by $3$.

**Answer.** Both directions hold, so the equivalence is true.
:::

## Mini test

:::quiz
::mc
Which of these is a statement?
A. $x+2>5$.
B. What a lovely day!
C. The number $15$ is divisible by $4$.
D. Have you done your homework?
::key C
C claims something false, so it is a statement (a false one). A still depends on $x$, so it is only a statement with a variable; B is an exclamation and D is a question.

::mc
The negation of "$\exists x\in\mathbb{R},\ x^2<2x$" is
A. "$\forall x\in\mathbb{R},\ x^2>2x$".
B. "$\forall x\in\mathbb{R},\ x^2\ge 2x$".
C. "$\exists x\in\mathbb{R},\ x^2\ge 2x$".
D. "$\exists x\in\mathbb{R},\ x^2>2x$".
::key B
We change $\exists$ into $\forall$ and negate the property: the negation of "$<$" is "$\ge$" (not "$>$"). Option C forgets to change the quantifier.

::mc
Which implication is **false**?
A. If $3>2$ then $9>4$.
B. If $2>3$ then $5$ is even.
C. If $7$ is prime then $7$ is odd.
D. If $4$ is even then $4$ is prime.
::key D
$P\Rightarrow Q$ is false only when $P$ is true and $Q$ is false: in D, "$4$ is even" is true but "$4$ is prime" is false. In option B, $P$ is false, so the implication is still true.

::mc
For a real number $x$, what kind of condition is "$x=2$" for "$x^2=4$"?
A. Necessary but not sufficient.
B. Sufficient but not necessary.
C. Necessary and sufficient.
D. Neither necessary nor sufficient.
::key B
$x=2\Rightarrow x^2=4$ is true, so "$x=2$" is sufficient. The other direction is false because $x=-2$ also gives $x^2=4$, so it is not necessary.

::tf
Consider the statement with a variable $P(x)$: "$x^2-3x+2=0$", where $x\in\mathbb{R}$.
a) $P(1)$ is a true statement.
b) The statement "$\forall x\in\mathbb{R},\ P(x)$" is true.
c) The negation of "$\exists x\in\mathbb{R},\ P(x)$" is "$\forall x\in\mathbb{R},\ x^2-3x+2\ne 0$".
d) "$x=2$" is a necessary condition for $P(x)$ to be true.
::key T F T F
a) True: $1-3+2=0$. b) False: for $x=0$ we get $2\ne 0$ (one counter-example is enough). c) True: change $\exists$ into $\forall$ and "$=$" into "$\ne$". d) False: $P(1)$ is true but $1\ne 2$, so $P(x)\Rightarrow x=2$ is false.

::sa
How many natural numbers $n$ with $1\le n\le 30$ make the statement "$n^2+1$ is divisible by $5$" true?
::key 12
$n^2+1$ is divisible by $5$ when $n$ leaves remainder $2$ or $3$ on division by $5$ (then $n^2$ leaves remainder $4$). Each block of $5$ consecutive numbers contains $2$ such numbers, so from $1$ to $30$ there are $6\cdot 2=12$.

::sa
Consider the claim "For every natural number $n$, the number $n^2+n+41$ is prime". Find the smallest natural number $n$ that is a counter-example to this claim.
::key 40
For $n=40$: $40^2+40+41=40\cdot41+41=41^2=1681$, which is not prime. A computer check of $n=0, 1, \dots, 39$ gives primes every time, so $40$ is the smallest counter-example.
:::
