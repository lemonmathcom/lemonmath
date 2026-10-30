---
title: Statements (propositions)
description: Learn what a statement is, how to negate it, build implications and equivalences, use quantifiers, and disprove a claim with a counter-example.
minutes: 15
---

:::goals
- Decide whether a sentence is a statement and whether it is true or false.
- Form the negation, the implication, the converse and the equivalence of statements.
- Use the words "necessary", "sufficient" and "necessary and sufficient" correctly.
- Read and negate statements with $\forall$ and $\exists$, and disprove a claim with a counter-example.
:::

"Our school team will win on Saturday." "Every prime number is odd." "$2+2=5$." Mathematics, like a good argument, is built from sentences that can be judged: either they are right or they are wrong. This lesson gives you the language for saying exactly what you mean, and for checking whether it is true.

## What is a statement?

:::definition Statement
A **statement** (also called a *proposition*) is a sentence that is either **true** or **false**, but not both.
:::

:::example Statement or not?
Which of these are statements? For each statement, say whether it is true or false.

(a) $7$ is a prime number. (b) $3+4=8$. (c) What is the time? (d) $x+1=5$. (e) Hanoi is the capital of Vietnam.

**Solution.**
- (a) A statement, and it is true ($7$ has only the divisors $1$ and $7$).
- (b) A statement, and it is false ($3+4=7$).
- (c) A question. It cannot be called true or false, so it is not a statement.
- (d) Its truth depends on $x$. For $x=4$ it is true, for $x=0$ it is false. Until we know $x$, it is not a statement.
- (e) A statement, and it is true.
:::

A sentence like (d), which contains a variable and becomes a statement once the variable is given a value, is called a **statement containing variables** (in Vietnamese, *mệnh đề chứa biến*). We write it $P(x)$: for example $P(x)$: "$x+1=5$". Then $P(4)$ is true and $P(0)$ is false.

## Negation

The **negation** of a statement $P$, written $\overline{P}$, says the opposite. It is true exactly when $P$ is false, and false exactly when $P$ is true.

| $P$ | $\overline{P}$ |
|---|---|
| true | false |
| false | true |

:::example Negations
Write the negation of each statement and say which of the two is true.

(a) $P$: "$\sqrt{2}$ is a rational number." (b) $Q$: "$5 \ge 3$." (c) $R$: "This triangle is isosceles."

**Solution.**
- (a) $\overline{P}$: "$\sqrt{2}$ is not a rational number." $P$ is false, so $\overline{P}$ is true.
- (b) $\overline{Q}$: "$5 < 3$." $Q$ is true, so $\overline{Q}$ is false. Notice that the negation of $\ge$ is $<$, not $\le$.
- (c) $\overline{R}$: "This triangle is not isosceles."
:::

## Implication and equivalence

Think of a promise: "If you pass the exam, I will buy you a phone." We write it $P \Rightarrow Q$ with $P$: "you pass", $Q$: "I buy you a phone".

:::definition Implication
The statement "if $P$ then $Q$", written $P \Rightarrow Q$, is **false only when $P$ is true and $Q$ is false**. In every other case it is true.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | true |
| false | false | true |
:::

The promise is broken only if you pass and get no phone. If you fail, the promise says nothing, so it is not broken.

The **converse** of $P \Rightarrow Q$ is $Q \Rightarrow P$. A true implication can have a false converse.

:::example An implication and its converse
Consider "If $x=3$ then $x^2=9$." Decide whether it is true and whether its converse is true.

**Solution.**
- Let $P$: "$x=3$" and $Q$: "$x^2=9$". If $x=3$ then $x^2=9$, so $P \Rightarrow Q$ is true.
- The converse is $Q \Rightarrow P$: "If $x^2=9$ then $x=3$." Take $x=-3$: then $x^2=9$ but $x\neq 3$. So the converse is false.
:::

:::definition Equivalence
$P \Leftrightarrow Q$ means that both $P \Rightarrow Q$ and $Q \Rightarrow P$ are true. We read it "$P$ if and only if $Q$". It is true exactly when $P$ and $Q$ are both true or both false.
:::

For example, "a triangle has three equal sides $\Leftrightarrow$ it has three equal angles" is true.

### Necessary and sufficient conditions

When $P \Rightarrow Q$ is true we say:
- $P$ is a **sufficient condition** for $Q$ (knowing $P$ is enough to be sure of $Q$);
- $Q$ is a **necessary condition** for $P$ (if $Q$ fails, $P$ cannot hold).

When $P \Leftrightarrow Q$ is true, each is a **necessary and sufficient condition** for the other.

:::example Reading conditions
Let $P$: "a natural number ends in the digit $0$" and $Q$: "it is divisible by $5$". Describe the relationship.

**Solution.**
- $P \Rightarrow Q$ is true: a number ending in $0$ is a multiple of $10$, hence of $5$.
- $Q \Rightarrow P$ is false: $15$ is divisible by $5$ but ends in $5$.
- So ending in $0$ is a **sufficient** condition for being divisible by $5$, and being divisible by $5$ is a **necessary** condition for ending in $0$. Neither is necessary and sufficient.
:::

:::warning Common mistake
Do not confuse $P \Rightarrow Q$ with $Q \Rightarrow P$. "If it rains, the ground is wet" is true, but "if the ground is wet, it rained" is not (someone may have used a hose).
:::

## Quantifiers: "for all" and "there exists"

- $\forall$ means "for all" (for every). The statement $\forall x \in X,\ P(x)$ says that $P(x)$ holds for every $x$ in $X$.
- $\exists$ means "there exists" (at least one). The statement $\exists x \in X,\ P(x)$ says that at least one $x$ in $X$ makes $P(x)$ true.

:::example True or false?
Decide whether each statement is true, with a reason.

(a) $\forall x \in \mathbb{R},\ x^2 \ge 0$. (b) $\exists x \in \mathbb{R},\ x^2 = -1$. (c) $\forall n \in \mathbb{N},\ n^2 > n$.

**Solution.**
- (a) True: the square of any real number is not negative.
- (b) False: no real number has a negative square.
- (c) False: for $n=1$ we get $1>1$, which is wrong (also $n=0$ fails).
:::

### Negating quantifiers

To show "everything has property $P$" is wrong you need just one thing without it. To show "something has property $P$" is wrong you must show that nothing has it. Hence:

:::theorem Negation rules
$$\overline{\forall x \in X,\ P(x)} \ \text{ is } \ \exists x \in X,\ \overline{P(x)}$$
$$\overline{\exists x \in X,\ P(x)} \ \text{ is } \ \forall x \in X,\ \overline{P(x)}$$
:::

:::example Negating with quantifiers
Negate $A$: "$\forall x \in \mathbb{R},\ x^2-2x+1>0$" and decide which of $A$, $\overline{A}$ is true.

**Solution.**
- $\overline{A}$: "$\exists x \in \mathbb{R},\ x^2-2x+1 \le 0$" (the negation of $>$ is $\le$).
- Since $x^2-2x+1=(x-1)^2$, take $x=1$: it equals $0 \le 0$. So $\overline{A}$ is true and $A$ is false.
:::

## Disproving by a counter-example

To prove that a statement "$\forall x,\ P(x)$" is false, it is enough to give **one** value of $x$ for which $P(x)$ is false. Such a value is a **counter-example**. (Examples never *prove* a "for all" statement, but one counter-example *disproves* it.)

:::example A famous counter-example
Claim: "For every natural number $n$, the number $n^2+n+41$ is prime." It works for $n=0,1,2,\dots,39$. Is it true?

**Solution.**
- Try $n=40$: $40^2+40+41=1600+40+41=1681$.
- But $1681=41\times 41$, which is not prime.
- So $n=40$ is a counter-example and the claim is false.
:::

:::warning Common mistake
"It works for $5$ numbers, so it is true for all" is not a proof. Checking examples can only make a claim *believable*.
:::

## Key terms

:::terms
- statement | mệnh đề
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

- A statement is a sentence that is true or false, never both; a sentence with a variable becomes a statement when the variable gets a value.
- $\overline{P}$ has the opposite truth value of $P$. $P \Rightarrow Q$ is false only when $P$ is true and $Q$ is false.
- $P \Leftrightarrow Q$ means $P \Rightarrow Q$ and $Q \Rightarrow P$. If $P \Rightarrow Q$: $P$ is sufficient for $Q$, $Q$ is necessary for $P$.
- The negation of $\forall$ is $\exists$ and the negation of $\exists$ is $\forall$, with the property negated.
- One counter-example disproves a "for all" statement.

## Practice

:::practice
1. Which of these are statements? If so, are they true or false? (a) $15$ is divisible by $4$. (b) $x+2>0$. (c) Please open the door. (d) $2^3=8$.
2. Write the negation of (a) "$17$ is a prime number", (b) "$5 \ge 3$", (c) "$\sqrt{2}$ is rational". Which is true, the statement or its negation?
3. Let $P$: "$x=3$" and $Q$: "$x^2=9$". Write $Q \Rightarrow P$ in words and decide whether it is true.
4. State the converse of "If a number ends in $0$ then it is divisible by $5$." Is the original true? Is the converse true?
5. Fill in "necessary", "sufficient" or "necessary and sufficient": (a) "ABCD is a square" is a ... condition for "ABCD is a rectangle". (b) "$a=0$" is a ... condition for "$ab=0$". (c) "$x$ is even" is a ... condition for "$x+1$ is odd".
6. Decide whether each is true: (a) $\forall x\in\mathbb{R},\ x^2\ge 0$. (b) $\exists x\in\mathbb{R},\ x^2=-1$. (c) $\exists n\in\mathbb{N},\ n^2=n$. (d) $\forall n\in\mathbb{N},\ n^2>n$.
7. Negate "$\exists x\in\mathbb{R},\ x^2-4x+4<0$" and say which of the two statements is true.
8. Use a counter-example to disprove: (a) "Every prime number is odd." (b) "If $x^2>1$ then $x>1$."
9. Is "$x^2=4 \Leftrightarrow x=2$" true? If not, correct it by changing one side so that it becomes a true equivalence.
10. Challenge: for a natural number $n$, show that "$n$ is even $\Leftrightarrow$ $n^2$ is even" is true.
:::

:::solution Show solutions
1. (a) A statement, false ($15=4\times 3+3$). (b) Not a statement: it depends on $x$. (c) Not a statement: it is a request. (d) A statement, true.
2. (a) "$17$ is not a prime number"; the statement is true, the negation false. (b) "$5<3$"; the statement is true, the negation false. (c) "$\sqrt{2}$ is not rational"; the statement is false, the negation true.
3. $Q \Rightarrow P$: "If $x^2=9$ then $x=3$." It is false: $x=-3$ gives $x^2=9$ but $x\ne 3$.
4. Converse: "If a number is divisible by $5$ then it ends in $0$." The original is true ($10k=5\cdot 2k$). The converse is false: $15$ is a counter-example.
5. (a) "ABCD is a square" $\Rightarrow$ "ABCD is a rectangle" is true, the converse is false, so **sufficient**. (b) $a=0 \Rightarrow ab=0$ is true; $ab=0 \Rightarrow a=0$ is false (take $b=0$, $a=1$), so **sufficient**. (c) $x$ even $\Rightarrow x+1$ odd, and $x+1$ odd $\Rightarrow x$ even, so **necessary and sufficient**.
6. (a) True. (b) False. (c) True: $n=0$ (or $n=1$) gives $n^2=n$. (d) False: $n=1$ gives $1>1$, which is wrong.
7. Negation: "$\forall x\in\mathbb{R},\ x^2-4x+4\ge 0$". Since $x^2-4x+4=(x-2)^2\ge 0$ for all $x$, the negation is true and the original is false.
8. (a) $2$ is prime and even. (b) $x=-2$: $x^2=4>1$ but $x=-2$ is not greater than $1$.
9. It is false: "$\Leftarrow$" holds ($x=2\Rightarrow x^2=4$) but "$\Rightarrow$" fails ($x=-2$). A true version: "$x^2=4 \Leftrightarrow x=2$ or $x=-2$", or "$x^2=4$ and $x>0 \Leftrightarrow x=2$".
10. ($\Rightarrow$) If $n=2k$ then $n^2=4k^2=2\cdot 2k^2$ is even. ($\Leftarrow$) Suppose $n$ is odd, $n=2k+1$. Then $n^2=4k^2+4k+1=2(2k^2+2k)+1$ is odd. So if $n^2$ is even, $n$ cannot be odd, hence $n$ is even. Both directions hold, so the equivalence is true.
:::
