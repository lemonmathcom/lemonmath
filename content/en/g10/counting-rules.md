---
title: Counting rules
description: Use the addition rule, the multiplication rule, tree diagrams and complementary counting to count choices, numbers and passwords without listing them.
minutes: 20
---

:::goals
- Recognise whether a counting problem needs the addition rule or the multiplication rule.
- Use a tree diagram to organise choices made in several steps.
- Count numbers, codes and routes with restrictions on digits or letters.
- Count "at least one" situations by counting the complement.
:::

The school library gives each reader a card code made of one letter from the five letters $A, B, C, D, E$, followed by three digits. The library has $4\,800$ readers. Are there enough codes for every reader to get a different one? And what if the three digits in a code must be different?

You could try writing the codes out: $A000$, $A001$, $A002$, … After a few dozen your hand is tired, and it is easy to miss some. A smarter way is to look at *how* a code is made: choose the letter first, then each digit in turn. The **counting rules** in this lesson let us count along that structure without listing anything. Later on, permutations, combinations and probability all stand on these two small rules.

## The addition rule

Your class may visit **one** place: either one of $3$ museums or one of $2$ parks. You go to just one place, and each place belongs to exactly one group, so the number of choices is $3+2=5$. Count each group, then add. That is all.

:::definition Addition rule
If a task can be done by one of two options **with no choice in common**, the first option in $m$ ways and the second in $n$ ways, then the task can be done in $m+n$ ways. The same holds for more options: add the numbers.
:::

When you read a problem, watch for the word "**or**": we choose from this group or that one, and each choice belongs to exactly one group. In that situation, add.

:::example Choosing a book
The class bookshelf holds $7$ comics, $5$ science books and $4$ novels. In how many ways can you choose one book to borrow?

**Solution.** Each book belongs to exactly one of the three groups, and we choose a book from one group **or** another, so we use the addition rule:

$$7+5+4=16.$$

So there are $16$ ways to choose.
:::

## The multiplication rule

Now change the situation a little: at the canteen you choose a drink **and** a snack. This time you are not choosing one thing but two, one after the other: first a drink (tea or juice), then for each drink a snack (cake, fruit or nuts). Drawn as a tree diagram, every possibility is in view.

:::diagram Tree diagram: 2 drinks, then 3 snacks
alt: A tree starting at one point, splitting into two drinks, tea and juice, and each drink splitting into three snacks, giving six branches in total
point S 0,0 left "Start"
point T 3,2 above "Tea"
point J 3,-2 below "Juice"
point T1 6,3 right "Cake"
point T2 6,2 right "Fruit"
point T3 6,1 right "Nuts"
point J1 6,-1 right "Cake"
point J2 6,-2 right "Fruit"
point J3 6,-3 right "Nuts"
segment S T
segment S J
segment T T1
segment T T2
segment T T3
segment J J1
segment J J2
segment J J3
:::

Count the ends of the branches on the right: $3+3=6$. Notice that every drink opens exactly the same $3$ branches, so instead of adding $3$ twice we can write $2\cdot3=6$. That is where the multiplication comes from.

:::definition Multiplication rule
If a task is done in **successive steps**, step 1 in $n_1$ ways, then for each of those step 2 in $n_2$ ways, ..., step $k$ in $n_k$ ways, then the whole task can be done in
$$n_1\cdot n_2\cdots n_k$$
ways.
:::

**Why multiply?** Look at the tree again: each branch of step 1 splits into $n_2$ branches, so after two steps there are $n_1$ groups of $n_2$ branches, that is $n_1\cdot n_2$ branches. Each later step splits every branch again in the same way, so we keep multiplying.

The signal this time is the word "**and**" (or "then"): do step 1, **then** step 2, **then** step 3, and the job is only done when every step is done.

:::example Choosing an outfit
Lan has $5$ shirts, $4$ pairs of trousers and $2$ pairs of shoes. An outfit is one shirt, one pair of trousers and one pair of shoes. How many different outfits does Lan have?

**Solution.** Choosing an outfit takes three successive steps (shirt, then trousers, then shoes), and the number of ways at each step does not depend on the previous step, so we use the multiplication rule:

$$5\cdot4\cdot2=40.$$

So Lan has $40$ outfits.
:::

:::tip Add or multiply?
Before you write any calculation, ask yourself one question: "Do we do this **or** that?" Then add. "Do we do this **and then** that?" Then multiply. Many problems need both: within each option multiply the steps, then add the options.
:::

## Numbers, codes and routes

Real problems usually come with conditions: the first digit cannot be $0$, the number must be even, the digits must be different… The advice here is simple: **fill the fussiest position first**, because if you leave it till last it may have hardly any choices left. And if the number of ways at one step depends on an earlier choice, split into cases and count each one.

:::example Making numbers from given digits
Using the digits $0, 1, 2, 3, 4, 5$, how many three-digit numbers with distinct digits can be made? How many of them are even?

**Solution.** The hundreds digit cannot be $0$, so we choose it first:

$$\underbrace{5}_{\text{hundreds}}\cdot\underbrace{5}_{\text{tens}}\cdot\underbrace{4}_{\text{units}}=100.$$

For an even number, the units digit is $0$, $2$ or $4$. The number of choices for the hundreds digit depends on whether the units digit is $0$, so we split into two cases:
- Units digit $0$: the hundreds digit has $5$ choices, the tens digit $4$, giving $5\cdot4=20$ numbers.
- Units digit $2$ or $4$ ($2$ choices): the hundreds digit is neither $0$ nor the units digit, so $4$ choices; the tens digit has $4$ choices, giving $2\cdot4\cdot4=32$ numbers.

The two cases share no number, so we add: $20+32=52$.

So $100$ three-digit numbers with distinct digits can be made, and $52$ of them are even.
:::

We now have all the tools we need to go back to the library from the start of the lesson.

:::example Library card codes
Each card code is one letter from $A, B, C, D, E$ followed by three digits. How many codes are there if digits may repeat? How many if the three digits must be different? Is each enough for $4\,800$ readers?

**Solution.** A code has four positions filled one after another, so we use the multiplication rule.

When digits may repeat, each digit has $10$ choices:

$$5\cdot10\cdot10\cdot10=5\,000.$$

When the three digits are different, each digit has one choice fewer than the one before:

$$5\cdot10\cdot9\cdot8=3\,600.$$

So there are $5\,000$ codes when digits may repeat, enough for $4\,800$ readers; but only $3\,600$ codes when the digits must be different, which is not enough.
:::

In many problems the two rules do not work alone but together. The route problem below is a familiar example.

:::example Routes between towns
There are $4$ roads from town $A$ to town $B$, $2$ roads from $B$ to town $C$, and also $3$ roads going directly from $A$ to $C$. In how many ways can you travel from $A$ to $C$?

**Solution.** A route either passes through $B$ or goes directly. Going through $B$ takes two successive steps, so we use the multiplication rule there:

$$\underbrace{4\cdot2}_{\text{via } B}+\underbrace{3}_{\text{direct}}=8+3=11.$$

So there are $11$ ways to travel from $A$ to $C$.
:::

## Complementary counting

Some problems are messy to count directly but easy to count the other way round. It is like finding how many classmates have handed in their homework: sometimes it is quicker to count those who have *not*, and take that from the class size. If there are $N$ possibilities in all and $M$ of them fail the condition, then $N-M$ possibilities satisfy it.

:::example At least one even digit
How many three-digit numbers contain at least one even digit?

**Solution.** "At least one" covers several cases (one, two or three even digits), while the complement "no even digit" is a single case. We count everything and subtract the complement.

All three-digit numbers (hundreds digit not $0$):

$$9\cdot10\cdot10=900.$$

Numbers whose three digits are all odd (each chosen from $1, 3, 5, 7, 9$):

$$5\cdot5\cdot5=125.$$

So $900-125=775$ three-digit numbers contain at least one even digit.
:::

## Checking with a computer

Counting mistakes are very common, even for people who have done maths for years. If you have a computer, you can let it try every possibility and compare with your answer. Here is a check of the example with the digits $0, 1, 2, 3, 4, 5$:

```python
count = 0
even = 0
for n in range(100, 1000):
    s = str(n)
    if set(s) <= set("012345") and len(set(s)) == 3:
        count += 1
        if n % 2 == 0:
            even += 1
print(count, even)   # 100 52
```

:::warning Common mistakes
- **Multiplying instead of adding.** With $7$, $5$ and $4$ books, many students write $7\cdot5\cdot4=140$ ways to choose **one** book. Wrong, because we are not taking one book from each group. Right: $7+5+4=16$. When in doubt, test your method on a small case you can list by hand.
- **Forgetting the leading zero.** Counting three-digit numbers with distinct digits from $0, \dots, 5$ as $6\cdot5\cdot4=120$. Wrong, because it includes "numbers" like $012$, which is really a two-digit number. Right: $5\cdot5\cdot4=100$.
- **Not splitting into cases.** Counting the even numbers above as $5\cdot4\cdot3=60$ (hundreds $5$ ways, tens $4$ ways, units $0$, $2$ or $4$). Wrong, because an even digit may already be used in the hundreds or tens place, so the units digit does not always have $3$ choices left. Right: choose the units digit first, split into two cases, and get $52$.
- **Double counting.** If you add two groups that overlap, the overlap is counted twice. The addition rule only works when the options have **no choice in common**.
:::

## Key terms

:::terms
- addition rule | quy tắc cộng
- multiplication rule | quy tắc nhân
- successive steps | các bước liên tiếp
- tree diagram | sơ đồ hình cây
- case | trường hợp
- complement | phần bù (đếm phần còn lại)
- restriction | điều kiện ràng buộc
:::

## Summary

- **Addition rule** ("or"): options with no choice in common, add the numbers of ways.
- **Multiplication rule** ("then"): successive steps, multiply the numbers of ways. A tree diagram shows why.
- With restrictions: fill the most restricted position first (first digit not $0$, last digit even, ...), and split into cases when the number of ways changes.
- **Complementary counting**: ways that satisfy the condition $=$ all ways $-$ ways that fail. Ideal for "at least one".

Think back to the library: without writing a single code, one multiplication $5\cdot10\cdot10\cdot10$ told us whether there were enough. That is the power of counting by structure. When you start a problem, ask yourself "is it *or*, or is it *then*?" first, and the rest becomes much easier.

## Practice

Each exercise comes with the ideas you need and a few steps to get going. Have a go on your own first, and do not worry about mistakes; comparing with the solution afterwards shows you how much you have understood.

:::exercise
The canteen offers $4$ main dishes, $3$ soups and $2$ desserts. A meal is one main dish, one soup and one dessert. How many different meals are there?

::hint
**What you need:** the multiplication rule for successive steps.

**Steps:**
1. Identify the steps of the choice.
2. Multiply the numbers of ways at each step.

::solution
To make a meal, we carry out three stages in turn: choose a main dish, choose a soup, choose a dessert.

- Choose a main dish: $4$ ways.
- For each choice of main dish, choose a soup: $3$ ways.
- For each choice of the first two, choose a dessert: $2$ ways.

By the multiplication rule, the number of different meals is
$$4\cdot3\cdot2=24.$$

So there are $24$ different meals.

**Answer.** $24$ meals.
:::

:::exercise
The class music group has $8$ boys and $6$ girls. In how many ways can you choose (a) one presenter; (b) one boy and one girl to sing a duet?

::hint
**What you need:** "a boy **or** a girl" uses the addition rule; "a boy **and** a girl" uses the multiplication rule.

**Steps:**
1. In (a), each student belongs to exactly one group.
2. In (b), choose the boy, then the girl.

::solution
a) The presenter is either a boy or a girl. There are $8$ ways to choose a boy and $6$ ways to choose a girl, and these options do not overlap. By the addition rule, the number of ways is
$$8+6=14.$$

b) To choose a duet pair, we carry out two stages in turn: choose a boy ($8$ ways), then for each boy choose a girl ($6$ ways). By the multiplication rule, the number of ways is
$$8\cdot6=48.$$

So there are $14$ ways to choose a presenter and $48$ ways to choose a boy and a girl for the duet.

**Answer.** (a) $14$; (b) $48$.
:::

:::exercise
How many three-digit numbers have all three digits even?

::hint
**What you need:** the multiplication rule; the hundreds digit cannot be $0$.

**Steps:**
1. The hundreds digit is one of $2, 4, 6, 8$.
2. The tens and units digits are chosen from $0, 2, 4, 6, 8$.

::solution
Let the number be $\overline{abc}$, where $a$, $b$, $c$ are even digits, that is, they belong to $\{0, 2, 4, 6, 8\}$, and $a\neq0$ because the number has three digits.

- Choose the hundreds digit $a$: $a\in\{2, 4, 6, 8\}$, $4$ ways.
- Choose the tens digit $b$: $b\in\{0, 2, 4, 6, 8\}$, $5$ ways.
- Choose the units digit $c$: $c\in\{0, 2, 4, 6, 8\}$, $5$ ways.

By the multiplication rule, the number of such numbers is
$$4\cdot5\cdot5=100.$$

So there are $100$ three-digit numbers whose three digits are all even.

**Answer.** $100$.
:::

:::exercise
A product code is one letter (from $26$ letters) followed by four digits, and digits may repeat. How many such codes are there?

::hint
**What you need:** the multiplication rule; each digit has $10$ choices when repetition is allowed.

**Steps:**
1. Count the choices for the letter.
2. Multiply by the choices for each digit.

::solution
A product code is made in five stages in turn: choose the letter, then choose the four digits one by one.

- Choose the letter: $26$ ways.
- Choose each of the four digits: since digits may repeat, each position has $10$ ways (from $0$ to $9$).

By the multiplication rule, the number of codes is
$$26\cdot10\cdot10\cdot10\cdot10=26\cdot10^4=260\,000.$$

So there are $260\,000$ such codes.

**Answer.** $260\,000$ codes.
:::

:::exercise
How many four-digit numbers with distinct digits are divisible by $5$?

::hint
**What you need:** a number divisible by $5$ ends in $0$ or $5$; split into cases and use the addition rule.

**Steps:**
1. Case ending in $0$: choose the other three digits.
2. Case ending in $5$: the first digit is neither $0$ nor $5$.
3. Add the two cases.

::solution
Let the number be $\overline{abcd}$ with all digits different and $a\neq0$. A number is divisible by $5$ exactly when $d=0$ or $d=5$. We split into two cases that do not overlap.

Case 1: $d=0$.
- Choose $a$: not $0$, $9$ ways.
- Choose $b$: different from $a$ and $d$, $8$ ways.
- Choose $c$: different from $a$, $b$, $d$, $7$ ways.

This gives $9\cdot8\cdot7=504$ numbers.

Case 2: $d=5$.
- Choose $a$: not $0$ and not $5$, $8$ ways.
- Choose $b$: different from $a$ and $d$ (it may be $0$), $8$ ways.
- Choose $c$: different from $a$, $b$, $d$, $7$ ways.

This gives $8\cdot8\cdot7=448$ numbers.

By the addition rule, the number of such numbers is
$$504+448=952.$$

So there are $952$ four-digit numbers with distinct digits that are divisible by $5$.

**Answer.** $952$.
:::

:::exercise
There are $2$ roads from $A$ to $B$ and $3$ roads from $B$ to $C$. Minh travels from $A$ to $C$ (via $B$) and back to $A$ (via $B$), and on the way back he uses no road he used on the way there. In how many ways can he do this?

::hint
**What you need:** the multiplication rule for four successive legs; each return leg loses one choice.

**Steps:**
1. Count the ways from $A$ to $C$.
2. Return leg $C\to B$: leave out the road already used.
3. Return leg $B\to A$: leave out the road already used.

::solution
The trip has four stages in turn: $A\to B$, $B\to C$ (going) and $C\to B$, $B\to A$ (coming back).

Going:
- Stage $A\to B$: $2$ choices of road.
- Stage $B\to C$: $3$ choices of road.

Coming back, no road used on the way there may be used again:
- Stage $C\to B$: leave out the $B$–$C$ road already used, so $3-1=2$ choices.
- Stage $B\to A$: leave out the $A$–$B$ road already used, so $2-1=1$ choice.

By the multiplication rule, the number of ways is
$$2\cdot3\cdot2\cdot1=12.$$

So there are $12$ such ways.

**Answer.** $12$ ways.
:::

:::exercise
Three-digit numbers are made from the digits $1, 2, 3, 4, 5$. Is each claim true or false?

a) $125$ numbers can be made (digits may repeat).
b) $60$ numbers with distinct digits can be made.
c) $30$ even numbers with distinct digits can be made.
d) $61$ numbers (digits may repeat) have at least two equal digits.

::hint
**What you need:** the multiplication rule; an even number ends in an even digit; complementary counting.

**Steps:**
1. Count with repetition and with distinct digits.
2. For c), choose the units digit first.
3. For d), subtract the numbers with distinct digits from all numbers.

::solution
Let the number be $\overline{abc}$ with $a$, $b$, $c$ in $\{1, 2, 3, 4, 5\}$ (there is no digit $0$, so the hundreds digit has no extra restriction).

a) **True.** Digits may repeat, so each position has $5$ choices. By the multiplication rule there are $5\cdot5\cdot5=125$ numbers.

b) **True.** With distinct digits: $a$ has $5$ choices, $b\neq a$ has $4$ choices, $c$ different from $a$, $b$ has $3$ choices. There are $5\cdot4\cdot3=60$ numbers.

c) **False.** The number is even, so $c\in\{2, 4\}$: $2$ choices. Then $a\neq c$: $4$ choices; $b$ different from $a$, $c$: $3$ choices. There are $2\cdot4\cdot3=24$ numbers, not $30$.

d) **False.** Each of the $125$ numbers in a) either has three different digits or has at least two equal digits. By b), $60$ numbers have three different digits, so $125-60=65$ numbers have at least two equal digits, not $61$.

So claims a), b) are true; claims c), d) are false.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise
How many positive divisors does $720$ have?

::hint
**What you need:** if $n=2^a\cdot3^b\cdot5^c$, every divisor of $n$ has the form $2^x3^y5^z$ with $0\le x\le a$, $0\le y\le b$, $0\le z\le c$.

**Steps:**
1. Write $720$ as a product of primes.
2. Count the choices for each exponent and multiply.

::solution
Write $720$ as a product of primes:
$$720=72\cdot10=2^3\cdot3^2\cdot2\cdot5=2^4\cdot3^2\cdot5.$$

Each positive divisor of $720$ has the form $2^x\cdot3^y\cdot5^z$ where $x$, $y$, $z$ are natural numbers with $x\le4$, $y\le2$, $z\le1$. Different triples $(x, y, z)$ give different divisors.

- Choose $x\in\{0, 1, 2, 3, 4\}$: $5$ ways.
- Choose $y\in\{0, 1, 2\}$: $3$ ways.
- Choose $z\in\{0, 1\}$: $2$ ways.

By the multiplication rule, the number of positive divisors of $720$ is
$$5\cdot3\cdot2=30.$$

So $720$ has $30$ positive divisors.

**Answer.** $30$.
:::

:::exercise
(Review of [Sets and set operations](lesson:sets-and-set-operations)) How many natural numbers from $1$ to $100$ are divisible by $2$ or by $3$?

::hint
**What you need:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$; a number divisible by both $2$ and $3$ is divisible by $6$.

**Steps:**
1. Let $A$, $B$ be the sets of numbers divisible by $2$, by $3$. Find $n(A)$ and $n(B)$.
2. Find $n(A\cap B)$.
3. Apply the formula.

::solution
Let $A$ be the set of numbers from $1$ to $100$ divisible by $2$, and $B$ the set of numbers from $1$ to $100$ divisible by $3$. We need $n(A\cup B)$.

The numbers divisible by $2$ are $2, 4, \dots, 100$, so $n(A)=50$.

The numbers divisible by $3$ are $3, 6, \dots, 99$; since $99=3\cdot33$, $n(B)=33$.

A number is divisible by both $2$ and $3$ exactly when it is divisible by $6$. These are $6, 12, \dots, 96$; since $96=6\cdot16$, $n(A\cap B)=16$.

The numbers in $A\cap B$ are counted twice in $n(A)+n(B)$, so
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)=50+33-16=67.$$

So $67$ numbers from $1$ to $100$ are divisible by $2$ or by $3$.

**Answer.** $67$.
:::

:::exercise Challenge
How many three-digit numbers have digit sum $5$?

::hint
**What you need:** split into cases by the hundreds digit and use the addition rule.

**Steps:**
1. The hundreds digit $a$ runs from $1$ to $5$.
2. For each $a$, count the pairs (tens, units) with sum $5-a$.
3. Add the cases.

::solution
Let the number be $\overline{abc}$ with $a\ge1$ and $a+b+c=5$. Since $a\ge1$, $a\in\{1, 2, 3, 4, 5\}$. We split by the value of $a$; the cases do not overlap.

For each $a$, put $s=5-a$; we must count the pairs of digits $(b, c)$ with $b+c=s$. The digit $b$ can be $0, 1, \dots, s$ (then $c=s-b$ is a digit), so there are $s+1$ ways.

| $a$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $s=5-a$ | $4$ | $3$ | $2$ | $1$ | $0$ |
| Ways to choose $(b, c)$ | $5$ | $4$ | $3$ | $2$ | $1$ |

By the addition rule, the number of such numbers is
$$5+4+3+2+1=15.$$

So there are $15$ three-digit numbers with digit sum $5$.

**Answer.** $15$.
:::

## Mini test

:::quiz
::mc NB
A box holds $6$ blue pens and $4$ red pens, all different. In how many ways can you take one pen from the box?
A. $10$.
B. $24$.
C. $45$.
D. $6$.
::key A
You take a blue pen **or** a red pen, and the two groups have no pen in common, so we use the addition rule: $6+4=10$. Option B multiplies by mistake (that counts one blue pen **and** one red pen).

::mc TH
A combination lock has $3$ wheels, each showing the digits $0$ to $9$. How many different codes are there?
A. $30$.
B. $720$.
C. $900$.
D. $1000$.
::key D
Choose a digit for each wheel in turn, $10$ ways each (repeats allowed, and a code may start with $0$): $10\cdot10\cdot10=1000$. Option B requires different digits, and C wrongly leaves out codes starting with $0$.

::mc VD
How many odd three-digit numbers with distinct digits can be made from the digits $1, 2, 3, 4, 5, 6$?
A. $60$.
B. $120$.
C. $108$.
D. $216$.
::key A
Choose the units digit first ($1$, $3$ or $5$): $3$ ways; then the hundreds digit $5$ ways and the tens digit $4$ ways: $3\cdot5\cdot4=60$. Option B forgets that the number must be odd, and C allows repeated digits.

::mc TH
There are $3$ roads from town $A$ to town $B$, $4$ roads from $B$ to town $C$, and $2$ roads going directly from $A$ to $C$. The number of ways to travel from $A$ to $C$ is
A. $9$.
B. $24$.
C. $12$.
D. $14$.
::key D
Going via $B$ takes two successive steps: $3\cdot4=12$ ways; going directly: $2$ ways. The two options share no route, so we add: $12+2=14$. Option C forgets the direct roads.

::tf NB TH TH VD
A team has $7$ boys and $5$ girls.
a) There are $12$ ways to choose one team leader.
b) There are $12$ ways to choose one boy and one girl to sing a duet.
c) There are $144$ ways to choose a leader and a deputy (two different people).
d) There are $90$ ways to choose a leader and a deputy so that at least one of them is a girl.
::key T F F T
a) True: $7+5=12$. b) False: choose a boy **then** a girl, $7\cdot5=35$. c) False: the leader has $12$ choices and the deputy $11$: $132$. d) True: subtract the choices where both are boys, $132-7\cdot6=90$.

::sa VD
How many three-digit numbers with distinct digits can be made from the digits $0, 1, 2, 3, 4$?
::key 48
The hundreds digit is not $0$: $4$ ways; the tens digit: $4$ ways; the units digit: $3$ ways. So there are $4\cdot4\cdot3=48$ numbers.

::sa VDC
How many four-digit numbers contain at least one digit $0$?
::key 2439
There are $9\cdot10^3=9000$ four-digit numbers in all, and $9^4=6561$ of them contain no $0$. So $9000-6561=2439$ numbers contain at least one $0$.
:::
