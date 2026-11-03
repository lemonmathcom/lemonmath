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

Listing all the codes would take far too long. The **counting rules** let us find the number by looking at the *structure* of the choice instead of writing out every possibility. They are the foundation of permutations, combinations and probability.

## The addition rule

Your class may visit **one** place: either one of $3$ museums or one of $2$ parks. Each place belongs to exactly one group, so the number of choices is $3+2=5$. We just count each group and add.

:::definition Addition rule
If a task can be done by one of two options **with no choice in common**, the first option in $m$ ways and the second in $n$ ways, then the task can be done in $m+n$ ways. The same holds for more options: add the numbers.
:::

The signal is the word "**or**": each choice belongs to exactly one group.

:::example Choosing a book
The class bookshelf holds $7$ comics, $5$ science books and $4$ novels. In how many ways can you choose one book to borrow?

**Solution.** Each book belongs to exactly one of the three groups, and we choose a book from one group **or** another, so we use the addition rule:

$$7+5+4=16.$$

So there are $16$ ways to choose.
:::

## The multiplication rule

Now we choose a drink **and** a snack. The choice happens in two successive steps: choose a drink (tea or juice), then for each drink choose a snack (cake, fruit or nuts). A tree diagram shows every possibility.

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

Count the ends of the branches on the right: $3+3=6$. Each drink opens the same $3$ branches, so we can also write $2\cdot3=6$.

:::definition Multiplication rule
If a task is done in **successive steps**, step 1 in $n_1$ ways, then for each of those step 2 in $n_2$ ways, ..., step $k$ in $n_k$ ways, then the whole task can be done in
$$n_1\cdot n_2\cdots n_k$$
ways.
:::

**Why?** On the tree diagram each branch of step 1 splits into $n_2$ branches, so after two steps there are $n_1$ groups of $n_2$ branches, that is $n_1\cdot n_2$ branches. Repeat for the later steps.

The signal is the word "**and**" (or "then"): do step 1, **then** step 2, **then** step 3.

:::example Choosing an outfit
Lan has $5$ shirts, $4$ pairs of trousers and $2$ pairs of shoes. An outfit is one shirt, one pair of trousers and one pair of shoes. How many different outfits does Lan have?

**Solution.** Choosing an outfit takes three successive steps (shirt, then trousers, then shoes), and the number of ways at each step does not depend on the previous step, so we use the multiplication rule:

$$5\cdot4\cdot2=40.$$

So Lan has $40$ outfits.
:::

:::tip Add or multiply?
Ask yourself: "Do we do this **or** that?" Then add. "Do we do this **and then** that?" Then multiply. Many problems use both: multiply along one option, then add the different options.
:::

## Numbers, codes and routes

When there is a restriction, **fill the most restricted position first**, and split into cases if the number of ways at one step depends on an earlier choice.

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

Now we can answer the question about the library codes from the start of the lesson.

:::example Library card codes
Each card code is one letter from $A, B, C, D, E$ followed by three digits. How many codes are there if digits may repeat? How many if the three digits must be different? Is each enough for $4\,800$ readers?

**Solution.** A code has four positions filled one after another, so we use the multiplication rule.

When digits may repeat, each digit has $10$ choices:

$$5\cdot10\cdot10\cdot10=5\,000.$$

When the three digits are different, each digit has one choice fewer than the one before:

$$5\cdot10\cdot9\cdot8=3\,600.$$

So there are $5\,000$ codes when digits may repeat, enough for $4\,800$ readers; but only $3\,600$ codes when the digits must be different, which is not enough.
:::

The addition and multiplication rules often work together, as in the next route problem.

:::example Routes between towns
There are $4$ roads from town $A$ to town $B$, $2$ roads from $B$ to town $C$, and also $3$ roads going directly from $A$ to $C$. In how many ways can you travel from $A$ to $C$?

**Solution.** A route either passes through $B$ or goes directly. Going through $B$ takes two successive steps, so we use the multiplication rule there:

$$\underbrace{4\cdot2}_{\text{via } B}+\underbrace{3}_{\text{direct}}=8+3=11.$$

So there are $11$ ways to travel from $A$ to $C$.
:::

## Complementary counting

Sometimes it is easier to count the cases we do **not** want. If there are $N$ possibilities in all and $M$ of them fail the condition, then $N-M$ possibilities satisfy it.

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

A short program can check a counting argument by trying every possibility. Here is a check of the example with the digits $0, 1, 2, 3, 4, 5$:

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
- **Multiplying instead of adding.** With $7$, $5$ and $4$ books, writing $7\cdot5\cdot4=140$ ways to choose **one** book. Wrong, because we do not take one book from each group. Right: $7+5+4=16$. Test your method on a small case you can list by hand.
- **Forgetting the leading zero.** Counting three-digit numbers with distinct digits from $0, \dots, 5$ as $6\cdot5\cdot4=120$. Wrong, because it includes "numbers" like $012$. Right: $5\cdot5\cdot4=100$.
- **Not splitting into cases.** Counting the even numbers above as $5\cdot4\cdot3=60$ (hundreds $5$ ways, tens $4$ ways, units $0$, $2$ or $4$). Wrong, because an even digit may already be used in the hundreds or tens place, so the units digit does not always have $3$ choices left. Right: choose the units digit first, split into two cases, and get $52$.
- **Double counting.** Adding two groups that overlap. The addition rule needs options **with no choice in common**.
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

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
The canteen offers $4$ main dishes, $3$ soups and $2$ desserts. A meal is one main dish, one soup and one dessert. How many different meals are there?

::hint
**What you need:** the multiplication rule for successive steps.

**Steps:**
1. Identify the steps of the choice.
2. Multiply the numbers of ways at each step.

::solution
Three successive steps: main dish ($4$ ways), soup ($3$ ways), dessert ($2$ ways): $4\cdot3\cdot2=24$.

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
(a) The presenter is a boy or a girl: $8+6=14$. (b) Choose a boy, then a girl: $8\cdot6=48$.

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
Hundreds digit $4$ ways, tens digit $5$ ways, units digit $5$ ways: $4\cdot5\cdot5=100$.

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
$26\cdot10\cdot10\cdot10\cdot10=260\,000$.

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
Ending in $0$: thousands $9$ ways, hundreds $8$, tens $7$, giving $9\cdot8\cdot7=504$. Ending in $5$: thousands digit not $0$ and not $5$, so $8$ ways, hundreds $8$, tens $7$, giving $8\cdot8\cdot7=448$. Total: $504+448=952$.

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
Going: $2\cdot3=6$ ways. Returning: $C\to B$ has $3-1=2$ ways, $B\to A$ has $2-1=1$ way. Total: $6\cdot2\cdot1=12$.

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
a) **True.** $5\cdot5\cdot5=125$.

b) **True.** $5\cdot4\cdot3=60$.

c) **False.** Units digit $2$ or $4$ ($2$ ways), hundreds $4$ ways, tens $3$ ways: $2\cdot4\cdot3=24$.

d) **False.** The complement of "at least two equal digits" is "three distinct digits", so the number is $125-60=65$.

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
$720=2^4\cdot3^2\cdot5$. The exponent of $2$ has $5$ choices ($0$ to $4$), of $3$ has $3$ choices, of $5$ has $2$ choices: $5\cdot3\cdot2=30$.

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
$n(A)=50$, $n(B)=33$ (since $3\cdot33=99$), $n(A\cap B)=16$ (since $6\cdot16=96$). So $n(A\cup B)=50+33-16=67$.

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
If the last two digits have sum $s$, the tens digit can be $0, 1, \dots, s$, so there are $s+1$ ways. For $a=1, 2, 3, 4, 5$ we get $s=4, 3, 2, 1, 0$, so
$$5+4+3+2+1=15.$$

**Answer.** $15$.
:::

## Mini test

:::quiz
::mc
A box holds $6$ blue pens and $4$ red pens, all different. In how many ways can you take one pen from the box?
A. $10$.
B. $24$.
C. $45$.
D. $6$.
::key A
You take a blue pen **or** a red pen, and the two groups have no pen in common, so we use the addition rule: $6+4=10$. Option B multiplies by mistake (that counts one blue pen **and** one red pen).

::mc
A combination lock has $3$ wheels, each showing the digits $0$ to $9$. How many different codes are there?
A. $30$.
B. $720$.
C. $900$.
D. $1000$.
::key D
Choose a digit for each wheel in turn, $10$ ways each (repeats allowed, and a code may start with $0$): $10\cdot10\cdot10=1000$. Option B requires different digits, and C wrongly leaves out codes starting with $0$.

::mc
How many odd three-digit numbers with distinct digits can be made from the digits $1, 2, 3, 4, 5, 6$?
A. $60$.
B. $120$.
C. $108$.
D. $216$.
::key A
Choose the units digit first ($1$, $3$ or $5$): $3$ ways; then the hundreds digit $5$ ways and the tens digit $4$ ways: $3\cdot5\cdot4=60$. Option B forgets that the number must be odd, and C allows repeated digits.

::mc
There are $3$ roads from town $A$ to town $B$, $4$ roads from $B$ to town $C$, and $2$ roads going directly from $A$ to $C$. The number of ways to travel from $A$ to $C$ is
A. $9$.
B. $24$.
C. $12$.
D. $14$.
::key D
Going via $B$ takes two successive steps: $3\cdot4=12$ ways; going directly: $2$ ways. The two options share no route, so we add: $12+2=14$. Option C forgets the direct roads.

::tf
A team has $7$ boys and $5$ girls.
a) There are $12$ ways to choose one team leader.
b) There are $12$ ways to choose one boy and one girl to sing a duet.
c) There are $144$ ways to choose a leader and a deputy (two different people).
d) There are $90$ ways to choose a leader and a deputy so that at least one of them is a girl.
::key T F F T
a) True: $7+5=12$. b) False: choose a boy **then** a girl, $7\cdot5=35$. c) False: the leader has $12$ choices and the deputy $11$: $132$. d) True: subtract the choices where both are boys, $132-7\cdot6=90$.

::sa
How many three-digit numbers with distinct digits can be made from the digits $0, 1, 2, 3, 4$?
::key 48
The hundreds digit is not $0$: $4$ ways; the tens digit: $4$ ways; the units digit: $3$ ways. So there are $4\cdot4\cdot3=48$ numbers.

::sa
How many four-digit numbers contain at least one digit $0$?
::key 2439
There are $9\cdot10^3=9000$ four-digit numbers in all, and $9^4=6561$ of them contain no $0$. So $9000-6561=2439$ numbers contain at least one $0$.
:::
