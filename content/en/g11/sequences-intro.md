---
title: Sequences
description: Learn what a sequence is, how to define one by a formula, recurrence or description, and how to test whether it is increasing, decreasing or bounded.
minutes: 25
---

:::goals
- State the definition of a sequence, its first term, general term, and finite and infinite sequences.
- Write the first terms of a sequence given by a formula for the general term, by a recurrence relation or by a description.
- Decide whether a sequence is increasing, decreasing or bounded.
- Use sequences to describe quantities that change step by step: savings, a debt, cans stacked in a shape.
:::

Suppose you put money into a piggy bank once a month: $20\,000$ dong in the first month, and each month after that $5\,000$ dong more than the month before. This gives an ordered list of amounts: month $1$, month $2$, month $3$, and so on.

How much do you put in during month $12$? In which month does the amount you put in first go above $100\,000$ dong? Listing every month is long, so we need a short way to talk about "the amount in month $n$" for any $n$.

## The idea of a sequence

### Explore: an ordered list

Let $u_n$ be the amount put into the piggy bank in month $n$ (in thousands of dong). We have the table:

| Month $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $u_n$ | $20$ | $25$ | $30$ | $35$ | $40$ | $45$ |

Each positive integer $n$ gives exactly one value $u_n$, just as each value $x$ gives exactly one value $f(x)$ of a function. The difference is that the variable $n$ takes only the values $1, 2, 3, \dots$ and not every real number.

:::definition Sequence
Every function $u$ defined on the set $\mathbb{N}^*$ of positive integers is called an **infinite sequence** (or just a **sequence**). We write $u_n=u(n)$ and denote the sequence by $(u_n)$. The number $u_1$ is the **first term**, and $u_n$ is the **$n$th term** or **general term**.

A function $u$ defined on the set $\{1, 2, \dots, m\}$ is called a **finite sequence**; $u_1$ is the first term and $u_m$ is the last term.
:::

For example, $u_n=\dfrac1n$ gives the sequence $1, \dfrac12, \dfrac13, \dots$; $u_n=n^2$ gives the square numbers $1, 4, 9, 16, \dots$; $u_n=(-1)^n$ gives $-1, 1, -1, 1, \dots$. The list $1, 3, 5, 7, 9$ is a finite sequence with five terms.

## Ways to define a sequence

To pin down a sequence we must be able to say what any term is, not just the first few. There are four common ways.

:::note Four ways to define a sequence
1. **By a formula for the general term:** $u_n=f(n)$. For example $u_n=15+5n$.
2. **By a recurrence relation:** give the first term (or the first few terms) and a rule for finding the next term from the earlier ones. For example $u_1=20$, $u_{n+1}=u_n+5$.
3. **By a description:** say it in words. For example "$u_n$ is the $n$th prime number": $2, 3, 5, 7, 11, \dots$.
4. **By listing** the terms, used only for small finite sequences or when the pattern is obvious.
:::

A formula for the general term lets us find $u_{100}$ at once, while a recurrence relation forces us to work out the terms one after another. In return, many processes in life are described naturally by recurrence: "this month is last month plus something".

A famous example is the Fibonacci sequence, $u_1=1$, $u_2=1$ and $u_{n+1}=u_n+u_{n-1}$ for $n\ge2$, which gives $1, 1, 2, 3, 5, 8, 13, \dots$. Each term (from the third) is the sum of the two terms just before it. The sequence appears in the problem of counting pairs of rabbits posed by Leonardo of Pisa, known as Fibonacci, in his book *Liber Abaci* in $1202$.

**Going deeper: why are a few terms not enough?** The list $1, 4, 9, 16, \dots$ makes us guess $u_n=n^2$ and the next term $25$. But the sequence $v_n=n^2+(n-1)(n-2)(n-3)(n-4)$ also begins $1, 4, 9, 16$ (the added product is $0$ for $n=1, 2, 3, 4$), and $v_5=25+4\cdot3\cdot2\cdot1=49$. A pattern is certain only when we are given a formula, a recurrence relation or a clear description.

:::example Finding terms from a formula
Let $(u_n)$ be the sequence with $u_n=\dfrac{2n-1}{n+1}$. Write down the first five terms.

**Solution.** Substitute $n=1, 2, 3, 4, 5$ into the formula:
$$u_1=\dfrac{1}{2},\quad u_2=\dfrac{3}{3}=1,\quad u_3=\dfrac{5}{4},\quad u_4=\dfrac{7}{5},\quad u_5=\dfrac{9}{6}=\dfrac32.$$
So the first five terms are $\dfrac12, 1, \dfrac54, \dfrac75, \dfrac32$.
:::

With a recurrence relation, each term is found from the previous one. After finding a few terms we can try to guess a formula for the general term and check it.

:::example A sequence given by a recurrence relation
Let $(u_n)$ be the sequence with $u_1=3$ and $u_{n+1}=2u_n-1$. Write down the first four terms, guess a formula for $u_n$ and check it.

**Solution.** We have
$$u_1=3,\quad u_2=2\cdot3-1=5,\quad u_3=2\cdot5-1=9,\quad u_4=2\cdot9-1=17.$$
The terms $3, 5, 9, 17$ are $2^1+1, 2^2+1, 2^3+1, 2^4+1$. We guess $u_n=2^n+1$.

Check: $u_1=2^1+1=3$ is correct. If $u_n=2^n+1$ then $2u_n-1=2^{n+1}+2-1=2^{n+1}+1$, which is exactly the formula for $u_{n+1}$. So $u_n=2^n+1$ agrees with both the first term and the recurrence relation.
:::

Now we solve the piggy bank problem from the start of the lesson.

:::example Savings
You put $20\,000$ dong in the piggy bank in the first month, and each month after that $5\,000$ dong more than the month before. Let $u_n$ be the amount (in dong) put in during month $n$. Write down the recurrence relation and a formula for the general term $u_n$. Find $u_{12}$ and the first month in which the amount put in exceeds $100\,000$ dong.

**Understand.** The first term is $u_1=20\,000$. Each term is $5\,000$ more than the one before. We need $u_{12}$ and the smallest positive integer $n$ with $u_n>100\,000$.

**Plan.** Write the recurrence relation, then find the general term by looking at the first terms rather than working month by month.

**Solve.** The recurrence relation is $u_1=20\,000$, $u_{n+1}=u_n+5\,000$. The first terms are $20\,000$, $25\,000$, $30\,000$, $35\,000$, ... From $u_1$ to $u_n$ we add $5\,000$ exactly $n-1$ times, so
$$u_n=20\,000+5\,000(n-1)=15\,000+5\,000n.$$
Hence $u_{12}=15\,000+60\,000=75\,000$. Solving $15\,000+5\,000n>100\,000$ gives $n>17$, so $n=18$ and $u_{18}=105\,000$.

So in month $12$ you put in $75\,000$ dong, and month $18$ is the first month in which the amount exceeds $100\,000$ dong.

**Look back.** For $n=17$ we have $u_{17}=100\,000$, exactly the target but not above it, so "exceeds" and "reaches at least" give different answers ($18$ or $17$). The general-term formula gives the answer at once, without listing $18$ months. What if the amount rose by $8\,000$ dong each month instead of $5\,000$? Then $u_n=12\,000+8\,000n$ and the first month above $100\,000$ is month $12$.
:::

Sequences also describe how objects are stacked in rows.

:::example Stacking cans
A shop stacks cans of soft drink in a triangle: the top row has $1$ can and each row below has $1$ more can than the row above. Let $T_n$ be the total number of cans in $n$ rows. Write down a recurrence relation for $T_n$, find $T_{15}$, and say how many full rows can be made with $100$ cans.

**Solution.** Row $n$ has $n$ cans, so adding row $n+1$ adds $n+1$ cans: $T_1=1$ and $T_{n+1}=T_n+(n+1)$. Working out the terms in turn:
$$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120.$$
So $T_{15}=120$. Since $T_{13}=91\le100<105=T_{14}$, with $100$ cans we can make at most $13$ full rows, with $100-91=9$ cans left over.

**Remark.** The numbers $1, 3, 6, 10, 15, \dots$ suggest $T_n=\dfrac{n(n+1)}{2}$: for example $T_{15}=\dfrac{15\cdot16}{2}=120$. We will prove this formula in the lesson on arithmetic progressions.
:::

Finally, the reverse problem: given some terms, find a formula.

:::example Guessing a formula for the general term
Find a formula for the general term of each sequence: a) $2, 5, 8, 11, \dots$; b) $1, -1, 1, -1, \dots$; c) $3, 9, 27, 81, \dots$.

**Solution.** a) Each term is $3$ more than the previous one and $u_1=2$, so $u_n=2+3(n-1)=3n-1$.

b) The signs alternate, starting with $+$ for $n=1$, so $u_n=(-1)^{n+1}$.

c) Each term is $3$ times the previous one and $u_1=3$, so $u_n=3^n$.

So the formulas are $u_n=3n-1$, $u_n=(-1)^{n+1}$ and $u_n=3^n$.

**Remark.** These are the most natural formulas, not the only ones, as the "Going deeper" paragraph showed.
:::

## Increasing, decreasing and bounded sequences

We care about how a sequence changes as $n$ grows, and whether it "runs off to infinity".

:::definition Increasing, decreasing and bounded sequences
- A sequence $(u_n)$ is **increasing** if $u_{n+1}>u_n$ for all $n\in\mathbb{N}^*$, and **decreasing** if $u_{n+1}<u_n$ for all $n\in\mathbb{N}^*$.
- A sequence $(u_n)$ is **bounded above** if there is a number $M$ with $u_n\le M$ for all $n$; **bounded below** if there is a number $m$ with $u_n\ge m$ for all $n$; and **bounded** if it is bounded both above and below.
:::

To decide whether a sequence is increasing or decreasing we look at the sign of the difference $u_{n+1}-u_n$. To decide whether it is bounded we look for numbers $M$ and $m$ as above, usually by rewriting $u_n$ as "a fixed number plus or minus a part that gets small".

:::example Increasing, decreasing and bounded
Decide whether the sequence $(u_n)$ with $u_n=\dfrac{n-1}{n+1}$ is increasing or decreasing, and whether it is bounded.

**Solution.** We have $u_{n+1}=\dfrac{n}{n+2}$, so
$$u_{n+1}-u_n=\dfrac{n}{n+2}-\dfrac{n-1}{n+1}=\dfrac{n(n+1)-(n-1)(n+2)}{(n+1)(n+2)}=\dfrac{2}{(n+1)(n+2)}>0.$$
So $(u_n)$ is increasing.

Write $u_n=\dfrac{(n+1)-2}{n+1}=1-\dfrac{2}{n+1}$. Since $\dfrac{2}{n+1}>0$, we have $u_n<1$. Since $(u_n)$ is increasing, $u_n\ge u_1=0$. So $0\le u_n<1$ for all $n$.

So $(u_n)$ is increasing and bounded.
:::

:::warning Common mistakes
- **Confusing $u_{n+1}$ with $u_n+1$.** Wrong: for $u_n=2n$, $u_{n+1}=2n+1$. Why it is wrong: $u_{n+1}$ is the $(n+1)$th term, found by replacing $n$ by $n+1$ in the formula. Right: $u_{n+1}=2(n+1)=2n+2$.
- **Treating a formula guessed from a few terms as certain.** Wrong: $1, 4, 9, 16$ means $u_5=25$ for every sequence that starts like this. Why it is wrong: the sequence $n^2+(n-1)(n-2)(n-3)(n-4)$ also starts like this, but its fifth term is $49$. Right: draw a conclusion only when a formula, a recurrence relation or a description is given.
- **Thinking an increasing sequence cannot be bounded.** Wrong: an increasing sequence always goes off to infinity. Why it is wrong: $u_n=1-\dfrac1n$ is increasing, but $u_n<1$ for all $n$. Right: an increasing sequence may still be bounded above.
- **Thinking a sequence that is not increasing must be decreasing.** Wrong: $u_n=(-1)^n$ is not increasing, so it is decreasing. Why it is wrong: $u_1=-1<u_2=1$, but $u_2=1>u_3=-1$, so it goes up and down. Right: this sequence is neither increasing nor decreasing, but it is bounded.
:::

**Connections.** A sequence is a function of a positive integer variable, so "increasing", "decreasing" and "bounded" are the discrete versions of monotonicity and of greatest and least values of a function. The next lessons study two special kinds of sequence: arithmetic progressions (each term is a fixed number more than the previous one, like the piggy bank) and geometric progressions. Later, the question "where does the sequence head when $n$ is very large?" leads to the limit of a sequence.

## Key terms

:::terms
- sequence | dãy số
- term | số hạng
- first term | số hạng đầu
- general term ($n$th term) | số hạng tổng quát
- finite sequence | dãy số hữu hạn
- infinite sequence | dãy số vô hạn
- recurrence relation | hệ thức truy hồi
- Fibonacci sequence | dãy Fibonacci
- increasing sequence | dãy số tăng
- decreasing sequence | dãy số giảm
- bounded sequence | dãy số bị chặn
:::

## Summary

- A sequence is a function defined on $\mathbb{N}^*$: $u_n=u(n)$; $u_1$ is the first term and $u_n$ is the general term.
- A sequence can be given by a formula $u_n=f(n)$, by a recurrence relation (the first term and a rule for $u_{n+1}$ in terms of earlier terms), by a description or by a list.
- A few first terms do not determine a sequence uniquely.
- Increasing: $u_{n+1}-u_n>0$; decreasing: $u_{n+1}-u_n<0$ for all $n$.
- Bounded above: $u_n\le M$; bounded below: $u_n\ge m$; bounded: both.
- Increasing does not mean unbounded; not increasing does not mean decreasing.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Let $(u_n)$ be the sequence with $u_n=n^2-3n$. Write down the first five terms. Is $28$ a term of the sequence? If so, which term is it?

::hint
**What you need:** substitute $n$ into the formula; $28$ is a term when $u_n=28$ has a positive integer solution.

**Steps:**
1. Find $u_1, \dots, u_5$.
2. Solve $n^2-3n=28$ and keep the positive integer solution.

::solution
The $n$th term of the sequence is $u_n=n^2-3n$, where $n$ is a positive integer. Substituting $n=1,2,3,4,5$ in turn:
$$u_1=1-3=-2,\quad u_2=4-6=-2,\quad u_3=9-9=0,\quad u_4=16-12=4,\quad u_5=25-15=10.$$

To decide whether $28$ is a term, we solve $u_n=28$ with $n\in\mathbb N^*$:
$$\begin{aligned}n^2-3n&=28\\n^2-3n-28&=0\\ (n-7)(n+4)&=0.\end{aligned}$$

So $n=7$ or $n=-4$. Only $n=7$ is a positive integer (the condition holds); $n=-4$ is rejected. Check: $u_7=49-21=28$.

So the first five terms are $-2, -2, 0, 4, 10$; the number $28$ is a term of the sequence and it is the $7$th term.

**Answer.** $-2, -2, 0, 4, 10$; $28$ is the $7$th term.
:::

:::exercise
Let $(u_n)$ be the sequence with $u_1=-1$ and $u_{n+1}=u_n+2n$. Write down the first five terms.

::hint
**What you need:** work out the terms one by one from the recurrence relation.

**Steps:**
1. $u_2=u_1+2\cdot1$.
2. Continue with $n=2, 3, 4$.

::solution
The sequence is given by the first term $u_1=-1$ and the recurrence relation $u_{n+1}=u_n+2n$. We compute the terms one by one, taking $n=1,2,3,4$:
$$\begin{aligned}u_2&=u_1+2\cdot1=-1+2=1,\\u_3&=u_2+2\cdot2=1+4=5,\\u_4&=u_3+2\cdot3=5+6=11,\\u_5&=u_4+2\cdot4=11+8=19.\end{aligned}$$

So the first five terms of the sequence are $-1, 1, 5, 11, 19$.

**Answer.** $-1, 1, 5, 11, 19$.
:::

:::exercise
Guess a formula for the general term of each sequence: a) $1, 4, 7, 10, 13, \dots$; b) $2, 4, 8, 16, \dots$; c) $\dfrac12, \dfrac23, \dfrac34, \dfrac45, \dots$.

::hint
**What you need:** look at how each term is related to its position $n$.

**Steps:**
1. Part a: what is the difference between consecutive terms?
2. Part b: are the terms powers of $2$?
3. Part c: compare the numerator and denominator with $n$.

::solution
We spot the pattern of each sequence and then check the guessed formula.

a) The sequence $1, 4, 7, 10, 13,\dots$ has $u_1=1$ and each term is $3$ more than the previous one, so it is an arithmetic progression with common difference $3$. Hence
$$u_n=1+3(n-1)=3n-2.$$
Check: $u_5=3\cdot5-2=13$.

b) We have $2=2^1$, $4=2^2$, $8=2^3$, $16=2^4$. The exponent of $2$ equals the position of the term, so $u_n=2^n$.

c) In $\dfrac12,\dfrac23,\dfrac34,\dfrac45,\dots$ the numerator equals the position $n$ and the denominator is $1$ more than the numerator, that is $n+1$. Hence $u_n=\dfrac{n}{n+1}$.

So a) $u_n=3n-2$; b) $u_n=2^n$; c) $u_n=\dfrac{n}{n+1}$.

**Answer.** a) $u_n=3n-2$; b) $u_n=2^n$; c) $u_n=\dfrac{n}{n+1}$.
:::

:::exercise
Decide whether the sequence $(u_n)$ with $u_n=\dfrac{3n-2}{n+1}$ is increasing or decreasing, and whether it is bounded.

::hint
**What you need:** the sign of $u_{n+1}-u_n$; write $u_n=3-\dfrac{5}{n+1}$ to find bounds.

**Steps:**
1. Find $u_{n+1}-u_n$ over a common denominator.
2. Find a number $M$ bounding it above and a number $m$ bounding it below.

::solution
The sequence is defined for every $n\ge1$ (the denominator $n+1>0$).

Monotonicity. We have $u_{n+1}=\dfrac{3(n+1)-2}{(n+1)+1}=\dfrac{3n+1}{n+2}$, so
$$\begin{aligned}u_{n+1}-u_n&=\frac{3n+1}{n+2}-\frac{3n-2}{n+1}\\&=\frac{(3n+1)(n+1)-(3n-2)(n+2)}{(n+1)(n+2)}\\&=\frac{(3n^2+4n+1)-(3n^2+4n-4)}{(n+1)(n+2)}\\&=\frac{5}{(n+1)(n+2)}.\end{aligned}$$
Since $n\ge1$, we have $(n+1)(n+2)>0$, so $u_{n+1}-u_n>0$. Hence $(u_n)$ is an increasing sequence.

Boundedness. Write $u_n=\dfrac{3(n+1)-5}{n+1}=3-\dfrac5{n+1}$. Since $\dfrac5{n+1}>0$, we have $u_n<3$: the sequence is bounded above by $3$. Since the sequence is increasing, $u_n\ge u_1=\dfrac{3-2}{2}=\dfrac12$: the sequence is bounded below by $\dfrac12$. Thus $\dfrac12\le u_n<3$ for all $n$.

So the sequence $(u_n)$ is increasing and bounded (it is bounded both above and below).

**Answer.** The sequence is increasing; $\dfrac12\le u_n<3$, so it is bounded.
:::

:::exercise
An buys a phone for $24$ million dong and pays it off with no interest, $2$ million dong each month. Let $u_n$ be the amount still owed (in millions of dong) after month $n$. Write down a recurrence relation and a formula for the general term $u_n$. After how many months has An paid off the phone?

::hint
**What you need:** each month the debt falls by $2$ million; $u_1=24-2$.

**Steps:**
1. Write $u_1$ and $u_{n+1}$ in terms of $u_n$.
2. Find $u_n$ in terms of $n$, then solve $u_n=0$.

::solution
Let $u_n$ (million dong) be the amount still owed after month $n$ ($n\in\mathbb N^*$). At the start An owes $24$ million dong and pays $2$ million dong each month.

Recurrence relation. After the first month the debt is $u_1=24-2=22$. Each following month the debt drops by $2$ million dong, so
$$u_{n+1}=u_n-2.$$

General term. The sequence $(u_n)$ is an arithmetic progression with first term $u_1=22$ and common difference $-2$. From $u_1$ to $u_n$ we subtract $2$ exactly $n-1$ times, so
$$u_n=22-2(n-1)=24-2n.$$

Time to pay off. An has paid off the phone when $u_n=0$:
$$24-2n=0\iff n=12.$$
The value $n=12$ is a positive integer (the condition holds). Check: $2\cdot12=24$ million dong.

So the recurrence relation is $u_1=22$, $u_{n+1}=u_n-2$; the general term is $u_n=24-2n$; An has paid off the phone after $12$ months.

**Answer.** $u_1=22$, $u_{n+1}=u_n-2$; $u_n=24-2n$; the debt is paid off after $12$ months.
:::

:::exercise
A cinema has $20$ seats in the first row, and each row after that has $2$ more seats than the row before. Let $a_n$ be the number of seats in row $n$. Find a formula for $a_n$. How many seats are in row $15$? Which row has $40$ seats?

::hint
**What you need:** $a_1=20$ and $a_{n+1}=a_n+2$; from $a_1$ to $a_n$ we add $2$ exactly $n-1$ times.

**Steps:**
1. Write $a_n$ in terms of $n$.
2. Find $a_{15}$ and solve $a_n=40$.

::solution
Row $1$ has $a_1=20$ seats and each row after that has $2$ more seats than the row before, that is $a_{n+1}=a_n+2$. So $(a_n)$ is an arithmetic progression with first term $20$ and common difference $2$.

The formula for $a_n$:
$$a_n=a_1+(n-1)\cdot2=20+2(n-1)=18+2n.$$

The number of seats in row $15$:
$$a_{15}=18+2\cdot15=18+30=48.$$

The row with $40$ seats: solve $a_n=40$ with $n\in\mathbb N^*$,
$$18+2n=40\iff2n=22\iff n=11.$$
The value $n=11$ is a positive integer (the condition holds).

So $a_n=18+2n$; row $15$ has $48$ seats; row $11$ has $40$ seats.

**Answer.** $a_n=18+2n$; row $15$ has $48$ seats; row $11$ has $40$ seats.
:::

:::exercise
Let $(u_n)$ be the sequence with $u_n=\dfrac{2n-1}{n}$. Decide whether each statement is true or false.

a) $u_4=\dfrac74$.

b) The sequence $(u_n)$ is increasing.

c) $u_n\ge2$ for all $n$.

d) $1\le u_n<2$ for all $n$.

::hint
**What you need:** $u_n=2-\dfrac1n$; the sign of $u_{n+1}-u_n$.

**Steps:**
1. a) Substitute $n=4$.
2. b) Find $u_{n+1}-u_n=\dfrac1n-\dfrac{1}{n+1}$.
3. c), d) Use $0<\dfrac1n\le1$.

::solution
We have $u_n=\dfrac{2n-1}{n}=2-\dfrac1n$ for $n\in\mathbb N^*$.

a) **True.** Substituting $n=4$, we get
$$u_4=\frac{2\cdot4-1}{4}=\frac74.$$

b) **True.** We have
$$u_{n+1}-u_n=\left(2-\frac1{n+1}\right)-\left(2-\frac1n\right)=\frac1n-\frac1{n+1}=\frac{1}{n(n+1)}.$$
Since $n\ge1$, $\dfrac1{n(n+1)}>0$, so $u_{n+1}>u_n$. Hence $(u_n)$ is an increasing sequence.

c) **False.** Since $\dfrac1n>0$, we have $u_n=2-\dfrac1n<2$ for every $n$. For example $u_1=1<2$, so $u_n\ge2$ does not hold for all $n$.

d) **True.** For $n\ge1$ we have $0<\dfrac1n\le1$, so $-1\le-\dfrac1n<0$. Adding $2$ to each side gives $1\le2-\dfrac1n<2$, that is $1\le u_n<2$.

So statements a), b), d) are true; statement c) is false.

**Answer.** a) True; b) True; c) False; d) True.
:::

:::exercise
The Fibonacci sequence is given by $u_1=1$, $u_2=1$ and $u_{n+1}=u_n+u_{n-1}$ for $n\ge2$. Find $u_{12}$.

::hint
**What you need:** each term (from the third) is the sum of the two terms just before it.

**Steps:**
1. Write the terms one after another.
2. Stop at the $12$th term.

::solution
We have $u_1=1$, $u_2=1$ and $u_{n+1}=u_n+u_{n-1}$ for $n\ge2$, meaning that each term from the third on is the sum of the two terms before it. We compute in turn:
$$\begin{aligned}u_3&=u_2+u_1=1+1=2,\\u_4&=u_3+u_2=2+1=3,\\u_5&=u_4+u_3=3+2=5,\\u_6&=u_5+u_4=5+3=8,\\u_7&=u_6+u_5=8+5=13,\\u_8&=u_7+u_6=13+8=21,\\u_9&=u_8+u_7=21+13=34,\\u_{10}&=u_9+u_8=34+21=55,\\u_{11}&=u_{10}+u_9=55+34=89,\\u_{12}&=u_{11}+u_{10}=89+55=144.\end{aligned}$$

Summary of the terms:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $u_n$ | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 |

So $u_{12}=144$.

**Answer.** $u_{12}=144$.
:::

:::exercise Revision
Let $(u_n)$ be the sequence with $u_n=\sin\dfrac{n\pi}{2}$. Write down the first six terms. Is the sequence bounded? Find $u_{2027}$.

::hint
**What you need:** the function $\sin$ is periodic with period $2\pi$; the angle $\dfrac{n\pi}{2}$ increases by $2\pi$ when $n$ increases by $4$.

**Steps:**
1. Find $\sin\dfrac{\pi}{2}$, $\sin\pi$, $\sin\dfrac{3\pi}{2}$, ...
2. Find the remainder when $2027$ is divided by $4$.

::solution
The first six terms. Substituting $n=1,\dots,6$ into $u_n=\sin\dfrac{n\pi}{2}$:
$$\begin{aligned}u_1&=\sin\frac\pi2=1,&u_2&=\sin\pi=0,&u_3&=\sin\frac{3\pi}2=-1,\\u_4&=\sin2\pi=0,&u_5&=\sin\frac{5\pi}2=1,&u_6&=\sin3\pi=0.\end{aligned}$$

Boundedness. Since $-1\le\sin x\le1$ for all $x$, we have $-1\le u_n\le1$ for all $n$. Hence the sequence is bounded.

Finding $u_{2027}$. We have
$$u_{n+4}=\sin\left(\frac{n\pi}{2}+2\pi\right)=\sin\frac{n\pi}{2}=u_n,$$
so the sequence is periodic with period $4$: $u_n=u_{n+4}=u_{n+8}=\cdots$. Since $2027=4\cdot506+3$, we get $u_{2027}=u_3=-1$.

So the first six terms are $1, 0, -1, 0, 1, 0$; the sequence is bounded; $u_{2027}=-1$.

**Answer.** $1, 0, -1, 0, 1, 0$; the sequence is bounded; $u_{2027}=-1$.
:::

:::exercise Challenge
Let $(u_n)$ be the sequence with $u_n=n+\dfrac1n$. Prove that $(u_n)$ is increasing and bounded below but not bounded above.

::hint
**What you need:** the difference $u_{n+1}-u_n$; the inequality $(n-1)^2\ge0$; $u_n>n$.

**Steps:**
1. Find $u_{n+1}-u_n=1-\dfrac{1}{n(n+1)}$.
2. From $(n-1)^2\ge0$ deduce $n+\dfrac1n\ge2$.
3. For every number $M$, find $n$ with $u_n>M$.

::solution
We prove three properties of $u_n=n+\dfrac1n$ for $n\in\mathbb N^*$.

The sequence is increasing. We have
$$u_{n+1}-u_n=\left(n+1+\frac1{n+1}\right)-\left(n+\frac1n\right)=1+\frac1{n+1}-\frac1n=1-\frac{1}{n(n+1)}.$$
Since $n\ge1$, we have $n(n+1)\ge2$, so $\dfrac1{n(n+1)}\le\dfrac12$. Hence $u_{n+1}-u_n\ge1-\dfrac12=\dfrac12>0$. So $(u_n)$ is an increasing sequence.

The sequence is bounded below. For every real number we have $(n-1)^2\ge0$, that is $n^2-2n+1\ge0$, or $n^2+1\ge2n$. Dividing both sides by $n>0$ (the direction does not change) gives $n+\dfrac1n\ge2$, that is $u_n\ge2$ for all $n$. So the sequence is bounded below by $2$.

The sequence is not bounded above. Suppose there is a number $M$ with $u_n\le M$ for all $n$. Take a positive integer $n>M$. Since $\dfrac1n>0$, we have $u_n=n+\dfrac1n>n>M$, contradicting $u_n\le M$. So no number $M$ bounds the sequence above.

So $(u_n)$ is an increasing sequence, bounded below but not bounded above.

**Answer.** The sequence is increasing, bounded below by $2$, and not bounded above.
:::

## Mini test

:::quiz
::mc NB
Let $(u_n)$ be the sequence with $u_n=n^2-2n$. The term $u_5$ is
A. $23$.
B. $35$.
C. $20$.
D. $15$.
::key D
$u_5=25-10=15$. Option A drops the term $-2n$ and subtracts $2$, option B changes the sign to $n^2+2n$, and option C computes $n(n-1)$.

::mc TH
Let $(u_n)$ be the sequence with $u_1=1$ and $u_{n+1}=2u_n+3$. The term $u_4$ is
A. $29$.
B. $13$.
C. $26$.
D. $16$.
::key A
$u_2=5$, $u_3=13$, $u_4=2\cdot13+3=29$. Option B is $u_3$, option C forgets to add $3$, and option D forgets to multiply by $2$.

::mc TH
Which of the following sequences is increasing?
A. $u_n=(-1)^n$.
B. $u_n=n^2-n$.
C. $u_n=\dfrac1n$.
D. $u_n=5-2n$.
::key B
$u_{n+1}-u_n=2n>0$. Sequence B goes up and down, and sequences C and D are decreasing.

::mc TH
Which of the following sequences is bounded?
A. $u_n=n^2$.
B. $u_n=2^n$.
C. $u_n=\dfrac{n}{n+1}$.
D. $u_n=n+\dfrac1n$.
::key C
$u_n=1-\dfrac{1}{n+1}$, so $\dfrac12\le u_n<1$. Sequences A, B and D all exceed any given number once $n$ is large enough, so they are not bounded above.

::tf TH TH VD TH
Let $(u_n)$ be the sequence with $u_1=2$ and $u_{n+1}=u_n+3$. Decide whether each statement is true or false.
a) $u_3=9$.
b) The sequence $(u_n)$ is decreasing.
c) $u_n=3n-1$ for all $n$.
d) The sequence $(u_n)$ is bounded below by $2$.
::key F F T T
The terms are $2, 5, 8, 11, \dots$ and $u_n=2+3(n-1)=3n-1$. a) False: $u_3=8$. b) False: $u_{n+1}-u_n=3>0$, so the sequence is increasing. c) True. d) True: the sequence is increasing, so $u_n\ge u_1=2$.

::sa VD
Find the least value of the terms of the sequence $(u_n)$ with $u_n=n^2-7n$.
::key -12
$u_n=\left(n-\dfrac72\right)^2-\dfrac{49}{4}$ is least when $n$ is closest to $\dfrac72$, that is $n=3$ or $n=4$: $u_3=u_4=-12$.

::sa VD
A shop stacks cans in a triangle: the top row has $1$ can and each row below has $1$ more can than the row above. How many cans are needed for $10$ rows?
::key 55
$T_{n+1}=T_n+(n+1)$ gives $1, 3, 6, 10, 15, 21, 28, 36, 45, 55$. So $T_{10}=55$.
:::
