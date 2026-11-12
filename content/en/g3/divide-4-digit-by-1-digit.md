---
title: Dividing a four-digit number by a one-digit number
description: Learn to divide a four-digit number by a one-digit number from left to right, with and without a remainder, and check the answer by multiplying.
minutes: 20
---

:::goals
- Divide a four-digit number by a one-digit number, for example $1\,248\div4$.
- Divide correctly when a $0$ appears in the quotient, for example $6\,084\div6$.
- Do a division with a remainder and see that the remainder is always smaller than the divisor.
- Check a division by multiplying, and solve word problems with division.
:::

A primary school (made-up numbers) buys $1\,248$ exercise books and shares them equally among $4$ classes. How many exercise books does each class get?

The number $1\,248$ has four digits, but the divisor has only one. You divide place by place, from the largest place to the smaller ones, and what is left over in one place is exchanged for units of the next place. This lesson shows you how.

## Let's explore

Split $1\,248$ into $12$ hundreds, $4$ tens and $8$ ones. We divide each part by $4$:

- $12$ hundreds $\div4=3$ hundreds.
- $4$ tens $\div4=1$ ten.
- $8$ ones $\div4=2$ ones.

Putting it together: $3$ hundreds $+$ $1$ ten $+$ $2$ ones $=312$. So $1\,248\div4=312$.

Why do we take $12$ hundreds? Because there is only $1$ thousand, and $1$ cannot be divided by $4$. We exchange $1$ thousand for $10$ hundreds and add the $2$ hundreds we already have, which gives $12$ hundreds. In short:

- $12\div4=3$, write $3$. We have $3\times4=12$ and $12-12=0$.
- Bring down $4$: $4\div4=1$, write $1$. We have $1\times4=4$ and $4-4=0$.
- Bring down $8$: $8\div4=2$, write $2$.

Each class gets $312$ books. Check by multiplying: $312\times4=1\,248$. Correct.

## Dividing a four-digit number by a one-digit number

:::theorem How to divide a four-digit number by a one-digit number
To divide a four-digit number by a one-digit number, we work from left to right, one place at a time:
1. Divide the first digit by the divisor. If that digit is smaller than the divisor, take the first two digits.
2. Write the quotient digit, multiply it by the divisor, and subtract to find the remainder.
3. Bring down the next digit next to the remainder, and divide again.
4. Repeat until the ones place. The final remainder is always smaller than the divisor.
:::

If the final remainder is $0$, the division is exact. If it is not $0$, the division has a remainder, and we write "remainder" after the quotient. To check, multiply the quotient by the divisor and add the remainder: the result must equal the dividend.

We start with a division where every digit divides exactly.

:::example Work out $4\,862\div2$
**Solution.** Every digit of the dividend is divisible by $2$:

$4\div2=2$; $8\div2=4$; $6\div2=3$; $2\div2=1$.

So $4\,862\div2=2\,431$.
:::

Now the first digit is smaller than the divisor, so we take the first two digits.

:::example Work out $3\,645\div5$
**Solution.** Since $3<5$, we take $36$ to divide by $5$:

$36\div5=7$ (remainder $1$), because $7\times5=35$. Bring down $4$ to make $14$; $14\div5=2$ (remainder $4$), because $2\times5=10$. Bring down $5$ to make $45$; $45\div5=9$ (remainder $0$).

So $3\,645\div5=729$.
:::

Next, a $0$ appears in the dividend.

:::example Work out $5\,408\div4$
**Solution.** We divide step by step:

$5\div4=1$ (remainder $1$). Bring down $4$ to make $14$; $14\div4=3$ (remainder $2$). Bring down $0$ to make $20$; $20\div4=5$ (remainder $0$). Bring down $8$ to make $8$; $8\div4=2$.

So $5\,408\div4=1\,352$.
:::

Sometimes a $0$ appears in the quotient. Take care not to miss it.

:::example Work out $6\,084\div6$
**Solution.** We divide step by step:

$6\div6=1$ (remainder $0$). Bring down $0$ to make $0$; $0\div6=0$, write $0$ in the quotient. Bring down $8$ to make $8$; $8\div6=1$ (remainder $2$). Bring down $4$ to make $24$; $24\div6=4$.

So $6\,084\div6=1\,014$.

**Check.** $1\,014\times6=6\,084$. Correct.
:::

Now a division with a remainder.

:::example Work out $7\,589\div8$
**Solution.** Since $7<8$, we take $75$ to divide by $8$:

$75\div8=9$ (remainder $3$), because $9\times8=72$. Bring down $8$ to make $38$; $38\div8=4$ (remainder $6$), because $4\times8=32$. Bring down $9$ to make $69$; $69\div8=8$ (remainder $5$), because $8\times8=64$.

So $7\,589\div8=948$ (remainder $5$).

**Check.** $948\times8=7\,584$ and $7\,584+5=7\,589$. Correct, and the remainder $5$ is smaller than the divisor $8$.
:::

Finally, a problem where the remainder matters. We work in four steps: understand, plan, solve, look back.

:::example Packing story books into boxes
A library (made-up numbers) has $4\,003$ story books. They are packed into boxes of $9$ books each. What is the smallest number of boxes needed to pack all the books?

**Understand.** We are told the total number of books and the number of books in each box. We are asked for the smallest number of boxes that holds all of them.

**Plan.** The books are shared into equal boxes, so we divide: $4\,003\div9$. The remainder tells us how many books are left without a box.

**Solve.**

Solution

We have $4\,003\div9=444$ (remainder $7$).

So $444$ boxes are full and $7$ books are left over, which need $1$ more box.

The smallest number of boxes needed is:
$$444+1=445\ \text{(boxes)}.$$
Answer: $445$ boxes.

**Look back.** If we used only the quotient, we would leave out $7$ books. Check: $444\times9=3\,996$ and $3\,996+7=4\,003$. Correct. Think about what happens if the remainder is $0$: then exactly $444$ boxes are enough.
:::

**Connection.** Division is the inverse operation of multiplication: if $a\div b=c$ then $c\times b=a$. You can use this to check a division and to find an unknown factor.

:::warning Mistakes to watch out for
- **Missing a $0$ in the quotient.** Wrong: $6\,084\div6=114$. Why it is wrong: after bringing down $0$, $0$ divided by $6$ is $0$, but the $0$ was not written in the quotient. Right: $6\,084\div6=1\,014$.
- **A remainder that is not smaller than the divisor.** Wrong: $7\,589\div8=947$ (remainder $13$). Why it is wrong: the remainder $13$ can still be divided by $8$, so the quotient must be increased. Right: $7\,589\div8=948$ (remainder $5$).
- **No unit in a word problem.** Wrong: "Answer: $445$". Right: "Answer: $445$ boxes".
:::

## Key terms

:::terms
- division | phép chia
- dividend | số bị chia
- divisor | số chia
- quotient | thương
- remainder | số dư
- exact division | phép chia hết
- division with a remainder | phép chia có dư
- bring down the next digit | hạ chữ số
- multiplication | phép nhân
- check | thử lại
:::

## Summary

- To divide a four-digit number by a one-digit number, work **from left to right**, one place at a time. If the first digit is smaller than the divisor, take the first two digits.
- Each time: write the quotient digit, multiply it by the divisor, subtract to find the remainder, then bring down the next digit.
- When you bring down a $0$, the quotient digit in that place may be $0$: do not leave it out.
- The remainder is always smaller than the divisor. Check: quotient $\times$ divisor $+$ remainder $=$ dividend.

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Work out: $3\,628\div4$.

::hint
**What you need:** divide from left to right, one place at a time.

**Steps:**
1. Divide $36$ by $4$.
2. Bring down each next digit and divide again.

::solution
$36\div4=9$ (remainder $0$). Bring down $2$ to make $2$; $2\div4=0$, write $0$. Bring down $8$ to make $28$; $28\div4=7$.

**Answer.** $907$.
:::

:::exercise
Work out: $8\,436\div6$.

::hint
**What you need:** if the first digit is smaller than the divisor, take the first two digits.

**Steps:**
1. Divide $8$ by $6$.
2. Bring down each digit, and remember to write $0$ in the quotient when needed.

::solution
$8\div6=1$ (remainder $2$). Bring down $4$ to make $24$; $24\div6=4$. Bring down $3$ to make $3$; $3\div6=0$ (remainder $3$), write $0$. Bring down $6$ to make $36$; $36\div6=6$.

**Answer.** $1\,406$.
:::

:::exercise
Work out: $9\,125\div5$.

::hint
**What you need:** check by multiplying.

**Steps:**
1. Divide $9$ by $5$.
2. Bring down each digit, divide again, then check.

::solution
$9\div5=1$ (remainder $4$). Bring down $1$ to make $41$; $41\div5=8$ (remainder $1$). Bring down $2$ to make $12$; $12\div5=2$ (remainder $2$). Bring down $5$ to make $25$; $25\div5=5$.

**Check.** $1\,825\times5=9\,125$. Correct.

**Answer.** $1\,825$.
:::

:::exercise
Work out: $5\,237\div7$.

::hint
**What you need:** the remainder is always smaller than the divisor.

**Steps:**
1. Divide $52$ by $7$.
2. Bring down each digit and write the final remainder.

::solution
$52\div7=7$ (remainder $3$). Bring down $3$ to make $33$; $33\div7=4$ (remainder $5$). Bring down $7$ to make $57$; $57\div7=8$ (remainder $1$).

**Check.** $748\times7=5\,236$ and $5\,236+1=5\,237$. Correct.

**Answer.** $748$ (remainder $1$).
:::

:::exercise
Find $x$: $x\times6=4\,614$.

::hint
**What you need:** an unknown factor equals the product divided by the known factor.

**Steps:**
1. Write $x=4\,614\div6$.
2. Divide, then check.

::solution
$x=4\,614\div6=769$.

**Check.** $769\times6=4\,614$. Correct.

**Answer.** $x=769$.
:::

:::exercise
A water plant (made-up numbers) shares $3\,648$ litres of water equally among $4$ tanks. How many litres of water does each tank get?

::hint
**What you need:** "shares equally" means use division.

**Steps:**
1. What do we know? What is asked?
2. How do we solve it? Divide $3\,648$ by $4$.
3. Check: multiply your answer by $4$.

::solution
Solution

The number of litres in each tank is:
$$3\,648\div4=912\ \text{(litres)}.$$

**Answer.** $912$ litres of water.
:::

:::exercise
A bakery (made-up numbers) has $2\,500$ cakes. They are packed into boxes of $6$ cakes each. What is the smallest number of boxes needed to pack all the cakes?

::hint
**What you need:** the remainder tells you how many cakes are left without a box.

**Steps:**
1. Work out $2\,500\div6$ and read the remainder.
2. The cakes left over need one more box.

::solution
Solution

We have $2\,500\div6=416$ (remainder $4$).

So $416$ boxes are full and $4$ cakes are left over, which need $1$ more box. The smallest number of boxes is:
$$416+1=417\ \text{(boxes)}.$$

**Answer.** $417$ boxes.
:::

:::exercise
Remember the lesson on multiplying a four-digit number by a one-digit number. We know $1\,507\times3=4\,521$. Without setting out, find $4\,521\div3$ and $4\,521\div1\,507$.

::hint
**What you need:** if $a\times b=c$ then $c\div b=a$ and $c\div a=b$.

**Steps:**
1. Name the factors and the product in the given multiplication.
2. Write the two matching divisions.

::solution
Since $1\,507\times3=4\,521$, we have $4\,521\div3=1\,507$ and $4\,521\div1\,507=3$.

**Answer.** $4\,521\div3=1\,507$ and $4\,521\div1\,507=3$.
:::

:::exercise
Lan works out $4\,208\div4=152$. Use multiplication to check Lan's answer. If it is wrong, correct it.

::hint
**What you need:** quotient $\times$ divisor must equal the dividend.

**Steps:**
1. Work out $152\times4$.
2. If it is not $4\,208$, divide again.

::solution
We have $152\times4=608$, which is not $4\,208$, so Lan's answer is wrong. Dividing again: $4\div4=1$; bring down $2$, $2\div4=0$, write $0$; bring down $0$ to make $20$, $20\div4=5$; bring down $8$ to make $8$, $8\div4=2$. So $4\,208\div4=1\,052$.

**Check.** $1\,052\times4=4\,208$. Correct.

**Answer.** Lan is wrong; the correct answer is $1\,052$.
:::

:::exercise Challenge
A number divided by $6$ gives a quotient of $724$ and a remainder of $5$. Find the number.

::hint
**What you need:** dividend equals quotient times divisor, plus the remainder.

**Steps:**
1. Work out $724\times6$.
2. Add the remainder $5$.

::solution
We have $724\times6=4\,344$. The number is:
$$4\,344+5=4\,349.$$

**Check.** $4\,349\div6=724$ (remainder $5$). Correct.

**Answer.** $4\,349$.
:::

## Mini test

:::quiz
::mc
$7\,248\div6$ equals
A. $128$.
B. $1\,280$.
C. $43\,488$.
D. $1\,208$.
::key D
$7\div6=1$ (remainder $1$); $12\div6=2$; $4\div6=0$ (remainder $4$), write $0$; $48\div6=8$. Option A leaves out the $0$, option B puts the $0$ in the wrong place, and option C is the multiplication.

::mc
$5\,000\div8$ equals
A. $625$.
B. $600$ (remainder $200$).
C. $6\,250$.
D. $62$.
::key A
$50\div8=6$ (remainder $2$); $20\div8=2$ (remainder $4$); $40\div8=5$. Option B has a remainder larger than the divisor, option C has an extra $0$, and option D is missing a digit.

::mc
$3\,150$ eggs are shared equally into $9$ trays. Each tray gets
A. $35$ eggs.
B. $350$ eggs.
C. $28\,350$ eggs.
D. $305$ eggs.
::key B
$31\div9=3$ (remainder $4$); $45\div9=5$; $0\div9=0$. So each tray gets $350$ eggs. Option A leaves out the last $0$, option D puts the $0$ in the wrong place, and option C is the multiplication.

::mc
$9\,407\div5$ equals
A. $1\,880$ (remainder $7$).
B. $1\,881$.
C. $1\,881$ (remainder $2$).
D. $1\,882$.
::key C
$9\,407\div5=1\,881$ (remainder $2$), because $1\,881\times5=9\,405$ and $9\,405+2=9\,407$. Option A has a remainder larger than the divisor, option B leaves out the remainder, and option D rounds up.

::tf
Look at the division $7\,305\div5$.
a) The quotient has four digits.
b) $7\,305\div5=1\,416$.
c) This division has a remainder.
d) $1\,461\times5=7\,305$.
::key T F F T
a) True: $7\,305\div5=1\,461$, which has four digits. b) False: $1\,416\times5=7\,080$, which is not $7\,305$. c) False: the final remainder is $0$, so the division is exact. d) True: $1\,461\times5=7\,305$.

::sa
Work out $8\,096\div8$.
::key 1012
$8\div8=1$; $0\div8=0$, write $0$; $9\div8=1$ (remainder $1$); $16\div8=2$. So $8\,096\div8=1\,012$.

::sa
Find the remainder of the division $6\,500\div7$.
::key 4
$6\,500\div7=928$ (remainder $4$), because $928\times7=6\,496$ and $6\,500-6\,496=4$.
:::
