---
title: Counting rules
description: Use the addition rule, the multiplication rule, tree diagrams and the complement trick to count choices, numbers and passwords without listing them.
minutes: 14
---

:::goals
- Decide whether a counting problem needs the addition rule or the multiplication rule.
- Use a tree diagram to organise choices made in several steps.
- Count numbers, passwords and routes with restrictions on digits or letters.
- Count "at least one" and "not ..." situations with the complement trick.
:::

How many different outfits can you make from 4 shirts, 3 pairs of trousers and 2 pairs of shoes? You could list them all, but the list would be long and easy to get wrong. Counting rules let you find the number by thinking about the *structure* of the choice instead of writing everything down. They are the foundation for permutations, combinations and probability.

## The addition rule

Suppose you want to read one book from the shelf. There are 5 maths books and 4 novels. You pick *either* a maths book *or* a novel, never both at once, so there are $5+4=9$ possible choices.

:::definition Addition rule
If a task can be done in one of two ways that **cannot happen together**, with $m$ possibilities for the first way and $n$ for the second, then the task can be done in $m+n$ ways. The same holds for any number of ways: add the numbers.
:::

The key words are "**or**" and "**mutually exclusive**": a single choice belongs to exactly one group.

:::example Choosing one book
A shelf holds 5 maths books, 4 novels and 3 science books. In how many ways can you pick one book to take home?

**Solution.**
1. Every book belongs to exactly one of the three groups, so the groups are mutually exclusive.
2. You pick a maths book **or** a novel **or** a science book, so we add: $5+4+3=12$.

There are 12 ways.
:::

## The multiplication rule

Now suppose you want to pick a snack **and** a drink. The choice happens in successive steps. A tree diagram shows every possibility: from the start you choose a drink (tea or juice), and for each drink you choose a snack (cake, fruit or nuts).

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

Count the right-hand ends of the tree: $3+3=6$, which is the same as $2\times 3$.

:::definition Multiplication rule
If a task is done in **successive steps**, with $n_1$ ways for step 1, and for each of them $n_2$ ways for step 2, and so on up to $n_k$ ways for step $k$, then the whole task can be done in
$$n_1\cdot n_2\cdots n_k$$
ways.
:::

The key word is "**and**": you do step 1 **and** then step 2 **and** then step 3.

:::example Outfits
In how many ways can you choose a shirt, a pair of trousers and a pair of shoes from 4 shirts, 3 pairs of trousers and 2 pairs of shoes?

**Solution.**
1. There are 3 steps: shirt (4 ways), trousers (3 ways), shoes (2 ways).
2. The choices are made one after another and do not restrict each other, so we multiply: $4\cdot 3\cdot 2=24$.

There are 24 outfits.
:::

:::tip Add or multiply?
Ask yourself: "Do I do one thing **or** the other?" Then add. "Do I do one thing **and then** another?" Then multiply. Many problems use both: multiply along a route, then add the different routes.
:::

## Numbers, passwords and routes

### Numbers with restrictions

When a digit has a restriction, **fill the most restricted position first**.

:::example Three-digit numbers with distinct digits
How many three-digit numbers have three different digits? How many of them are even?

**Solution.**
1. *All such numbers.* The hundreds digit cannot be 0: 9 ways. The tens digit can be any digit except the one already used: 9 ways (0 is now allowed). The units digit differs from both: 8 ways. Total $9\cdot 9\cdot 8=648$.
2. *Even numbers.* The units digit decides, so start there. Split into two cases (addition rule).
   - Units digit 0: the hundreds digit has 9 ways, the tens digit 8 ways, giving $9\cdot 8=72$ numbers.
   - Units digit 2, 4, 6 or 8 (4 ways): the hundreds digit cannot be 0 or the units digit, so 8 ways; the tens digit has 8 ways left. This gives $4\cdot 8\cdot 8=256$ numbers.
3. Add the cases: $72+256=328$.

So 648 numbers in all, and 328 of them are even.
:::

### Passwords

:::example A password
A password has 4 characters: first one capital letter (26 choices), then three digits. How many passwords are there if the digits may repeat? How many if the three digits must be all different?

**Solution.**
1. Repeats allowed: $26\cdot 10\cdot 10\cdot 10=26\,000$.
2. All digits different: the first digit has 10 ways, the second 9, the third 8, so $26\cdot 10\cdot 9\cdot 8=18\,720$.
:::

### Routes

:::example Routes between towns
There are 3 roads from town A to town B and 4 roads from B to C. There are also 2 roads going directly from A to C. How many routes lead from A to C?

**Solution.**
1. Through B: 3 roads and then 4 roads, so $3\cdot 4=12$ routes (multiplication rule).
2. Directly: 2 routes.
3. A route goes through B **or** is direct, so we add: $12+2=14$.
:::

## The complement trick

Sometimes it is easier to count what you **do not** want. If $N$ is the total number of possibilities and $M$ of them do not satisfy the condition, then the number that do satisfy it is $N-M$.

:::example At least one digit 7
How many four-digit numbers contain at least one digit 7?

**Solution.**
1. Total four-digit numbers: from 1000 to 9999, that is $9\cdot 10\cdot 10\cdot 10=9000$.
2. Numbers with **no** digit 7: the first digit has 8 choices (not 0, not 7), each other digit has 9 choices (not 7). So $8\cdot 9\cdot 9\cdot 9=5832$.
3. Subtract: $9000-5832=3168$.

There are 3168 such numbers.
:::

## Checking by computer

A short program can check a counting argument by brute force. Here it tests the first example above:

```python
count = 0
for n in range(100, 1000):
    if len(set(str(n))) == 3:
        count += 1
print(count)   # 648
```

:::warning Common mistakes
- Adding when you should multiply (or the other way round). Test with a tiny case you can list by hand, such as 2 shirts and 2 trousers.
- Forgetting that the first digit of a number cannot be 0.
- Counting the same object twice when the cases overlap. The addition rule needs groups with **no overlap**; split into separate cases first.
:::

## Key terms

:::terms
- addition rule | quy tắc cộng
- multiplication rule | quy tắc nhân
- mutually exclusive | xung khắc (không thể xảy ra đồng thời)
- successive steps | các bước liên tiếp
- tree diagram | sơ đồ hình cây
- case | trường hợp
- complement | phần bù (đếm phần còn lại)
- restriction | điều kiện ràng buộc
:::

## Summary

- Addition rule: choices that cannot happen together, add the numbers ("or").
- Multiplication rule: successive steps, multiply the numbers ("and then").
- A tree diagram lists all outcomes and shows why the product works.
- For numbers with restrictions, fill the most restricted position first and split into cases when needed.
- Complement trick: (all) $-$ (the ones you do not want).

## Practice

:::practice
1. A menu has 3 starters, 5 main courses and 2 desserts. How many meals consist of one starter, one main course and one dessert?
2. A library shelf has 6 English books and 4 French books. In how many ways can you pick (a) one book; (b) one English book and one French book?
3. How many three-digit numbers have all digits odd?
4. A code consists of two letters (26 choices each, repeats allowed) followed by three digits (repeats allowed). How many codes are there?
5. How many three-digit numbers with three different digits are divisible by 5?
6. There are 3 roads from A to B, 4 roads from B to C and 2 roads directly from A to C. How many routes go from A to C and back to A if you must return by a **different** road at every stage and may use the direct road in either direction? Count only routes that go A to C by the direct road and return by the direct road, or both by B.
7. A binary string has 8 symbols, each 0 or 1. How many strings are there (a) in total; (b) with at least one 1; (c) beginning with 1 and ending with 0?
8. How many four-digit numbers contain at least one digit 0?
9. Find the number of positive divisors of 360.
10. A flag has 3 horizontal stripes, each coloured with one of 5 colours, and two neighbouring stripes must have different colours. How many flags are possible?
:::

:::solution Show solutions
1. Three successive steps: $3\cdot 5\cdot 2=30$ meals.
2. (a) One book from either group, groups do not overlap: $6+4=10$. (b) One of each, two steps: $6\cdot 4=24$.
3. Each of the 3 digits is chosen from $\{1,3,5,7,9\}$: $5\cdot 5\cdot 5=125$.
4. $26\cdot 26\cdot 10\cdot 10\cdot 10=676\,000$.
5. A number divisible by 5 ends in 0 or 5. Units digit 0: hundreds 9 ways, tens 8 ways, $72$ numbers. Units digit 5: hundreds digit not 0 and not 5, so 8 ways; tens digit 8 ways; $64$ numbers. Total $72+64=136$.
6. One way to read the problem: the outward trip A to C has $3\cdot 4+2=14$ routes. Returning by a different road at every stage is complicated, so here we use the simple version stated at the end of the exercise. Case 1, direct out and direct back: the two direct roads are different, so $2\cdot 1=2$ ways. Case 2, both through B: out $3\cdot 4$, back must use a different road on each stage, so $2\cdot 3=6$... the back trip from C to B has 3 other roads and from B to A has 2 other roads, giving $12\cdot 3\cdot 2=72$. Total $2+72=74$.
7. (a) $2^8=256$. (b) Complement: only the string of all 0s has no 1, so $256-1=255$. (c) First and last symbols are fixed, the 6 middle ones are free: $2^6=64$.
8. Total 9000. With no digit 0: $9^4=6561$. So $9000-6561=2439$.
9. $360=2^3\cdot 3^2\cdot 5$. A divisor is $2^a3^b5^c$ with $a\in\{0,1,2,3\}$, $b\in\{0,1,2\}$, $c\in\{0,1\}$: $4\cdot 3\cdot 2=24$ divisors.
10. The first stripe has 5 colours; each next stripe has 4 colours (anything but the colour next to it): $5\cdot 4\cdot 4=80$.
:::
