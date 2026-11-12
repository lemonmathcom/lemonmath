---
title: Two problems about fractions
description: Find a fraction of a given amount, and find the whole amount when a fraction of it is known; use these for discounts, savings and reading.
minutes: 25
---

:::goals
- Find the fraction $\dfrac{m}{n}$ of a given number $b$.
- Find a number when $\dfrac{m}{n}$ of it is known.
- Decide whether a real-life problem needs multiplication or division.
- Solve multi-step problems with fractions, such as discounts, savings and water use.
:::

A shop puts up a sign: "$\dfrac15$ off every item". Two customers ask two questions.

Ms Mai asks: "This shirt costs $300$ thousand dong. How much do I save?"

Mr Tuấn asks: "I have just paid $240$ thousand dong for these shoes after the discount. What did they cost before?"

The two questions sound very alike, but they are two problems going in opposite directions. The first one knows the "whole" and asks for a part of it. The second one knows a part and asks for the "whole". Recognising which problem you are in is the most important thing in this lesson.

## Problem 1: finding a fraction of a given number

To find $\dfrac35$ of $40$, we split $40$ into $5$ equal parts, each part being $40:5=8$. Taking $3$ such parts gives $3\cdot8=24$.

:::diagram $\dfrac35$ of $40$
alt: A long strip standing for the number 40, split into 5 equal parts of 8 each; the first three parts are shaded, showing that 3/5 of 40 is 24
point A 0,0 ""
point B 10,0 ""
point C 10,1.5 ""
point D 0,1.5 ""
point E 6,0 ""
point F 6,1.5 ""
polygon A E F D
segment A B
segment B C
segment C D
segment D A
point G1 2,0 ""
point H1 2,1.5 ""
point G2 4,0 ""
point H2 4,1.5 ""
point G3 8,0 ""
point H3 8,1.5 ""
segment G1 H1
segment G2 H2
segment E F
segment G3 H3
label 1,0.75 "8"
label 3,0.75 "8"
label 5,0.75 "8"
label 7,0.75 "8"
label 9,0.75 "8"
label 5,2.2 "40"
label 3,-0.6 "24"
:::

The two steps "divide by $5$, then multiply by $3$" together are just multiplying by $\dfrac35$: $40\cdot\dfrac35=24$.

:::theorem Finding a fraction of a number
To find $\dfrac{m}{n}$ of a given number $b$, work out
$$b\cdot\dfrac{m}{n}\qquad(m,\ n\in\mathbb{N},\ n\ne0).$$
:::

For Ms Mai: the saving is $\dfrac15$ of $300$ thousand dong, that is, $300\cdot\dfrac15=60$ thousand dong.

## Problem 2: finding a number when a fraction of it is known

Now the other way round. We know that $\dfrac35$ of a number is $24$; find the number.

Look at the strip again: $3$ parts make $24$, so $1$ part is $24:3=8$, and all $5$ parts make $5\cdot8=40$. The two steps "divide by $3$, then multiply by $5$" together are just multiplying by $\dfrac53$, that is, dividing by $\dfrac35$: $24:\dfrac35=24\cdot\dfrac53=40$.

:::theorem Finding a number from a fraction of it
To find a number when $\dfrac{m}{n}$ of it equals $a$, work out
$$a:\dfrac{m}{n}\qquad(m,\ n\in\mathbb{N}^*).$$
:::

For Mr Tuấn: the original price is the whole, taken as $1$. After $\dfrac15$ is taken off, the price paid is $1-\dfrac15=\dfrac45$ of the original price, and that $\dfrac45$ equals $240$ thousand dong. So the original price is $240:\dfrac45=300$ thousand dong.

:::tip Multiply or divide?
Ask: **do I already know the whole?**
- You know the whole and want a part of it: **multiply** by the fraction.
- You know a part and want the whole: **divide** by the fraction.

A quick check: a part is always smaller than the whole (when the fraction is less than $1$). If your answer is the other way round, you have probably multiplied instead of dividing, or the reverse.
:::

## Examples

We start with problem 1, as pure calculation.

:::example Finding a fraction of a number
Work out:

a) $\dfrac{3}{4}$ of $60$;

b) $\dfrac{2}{3}$ of $\dfrac{3}{8}$.

**Solution.**

a) $\dfrac{3}{4}$ of $60$ is
$$60\cdot\dfrac{3}{4}=\dfrac{60\cdot3}{4}=15\cdot3=45.$$

b) $\dfrac{2}{3}$ of $\dfrac{3}{8}$ is
$$\dfrac{3}{8}\cdot\dfrac{2}{3}=\dfrac{3\cdot2}{8\cdot3}=\dfrac{1}{4}.$$

So a) $45$; b) $\dfrac{1}{4}$.
:::

Now applied to a class.

:::example Boys and girls
Class 6A has $40$ students, and boys make up $\dfrac38$ of the class. Find the number of boys and the number of girls in the class.

**Solution.**

The number of students in the class is known, and we need $\dfrac38$ of it. The number of boys is
$$40\cdot\dfrac{3}{8}=15\ (\text{students}).$$

The number of girls is
$$40-15=25\ (\text{students}).$$

So class 6A has $15$ boys and $25$ girls.
:::

On to problem 2: knowing a part, find the whole.

:::example Finding a number from a fraction of it
Find the number, given that:

a) $\dfrac{2}{3}$ of the number is $18$;

b) $\dfrac{5}{4}$ of the number is $35$.

**Solution.**

a) The number is
$$18:\dfrac{2}{3}=18\cdot\dfrac{3}{2}=27.$$

b) The number is
$$35:\dfrac{5}{4}=35\cdot\dfrac{4}{5}=28.$$

Check: $27\cdot\dfrac23=18$ and $28\cdot\dfrac54=35$, both correct.

So a) $27$; b) $28$.

**Remark.** In part b), the fraction $\dfrac54$ is greater than $1$, so the number ($28$) is smaller than $35$. The rule still works; only the feeling "the part is smaller than the whole" is reversed.
:::

Applied to reading a book.

:::example How many pages does the book have?
An has read $\dfrac25$ of a book, which is $48$ pages. How many pages does the book have, and how many pages does An still have to read?

**Solution.**

We know that $\dfrac25$ of the book is $48$ pages, and we need the whole book. The number of pages in the book is
$$48:\dfrac{2}{5}=48\cdot\dfrac{5}{2}=120\ (\text{pages}).$$

The number of pages An still has to read is
$$120-48=72\ (\text{pages}).$$

So the book has $120$ pages and An still has $72$ pages to read.
:::

Finally, we go back to Mr Tuấn's question, this time set out in full.

:::example The original price of the shoes
A shop takes $\dfrac15$ off the marked price of every item. Mr Tuấn buys a pair of shoes and pays $240$ thousand dong. What is the marked price of the shoes?

**Solution.**

*Understand.* The marked price is unknown. The $240$ thousand dong is the price after the discount, so it is a part of the marked price.

*Plan.* Take the marked price as $1$. Find which fraction of the marked price the $240$ thousand dong is, then use problem 2.

*Solve.* After $\dfrac15$ is taken off, the price paid is
$$1-\dfrac{1}{5}=\dfrac{4}{5}\ (\text{of the marked price}).$$

So $\dfrac45$ of the marked price is $240$ thousand dong. The marked price of the shoes is
$$240:\dfrac{4}{5}=240\cdot\dfrac{5}{4}=300\ (\text{thousand dong}).$$

So the marked price of the shoes is $300$ thousand dong.

*Look back.* A very common wrong method is to add $\dfrac15$ of $240$ to $240$, giving $288$. Checking shows it is wrong: taking $\dfrac15$ off $288$ leaves $288\cdot\dfrac45=230.4$, not $240$. The error is that the $\dfrac15$ is a fraction of the marked price, not of the discounted price.
:::

:::warning Common mistakes
- **Multiplying when you should divide.** Wrong: "$\dfrac23$ of a number is $18$, so the number is $18\cdot\dfrac23=12$." Why it is wrong: $12$ is smaller than $18$, but the whole must be bigger than its part. Right: $18:\dfrac23=27$.
- **Dividing when you should multiply.** Wrong: "$\dfrac35$ of $40$ is $40:\dfrac35=\dfrac{200}{3}$." Why it is wrong: the whole, $40$, is already known; we only need to take a part of it. Right: $40\cdot\dfrac35=24$.
- **Taking the fraction of the wrong quantity.** Wrong: the price after a $\dfrac15$ discount is $240$, so the original price is $240+240\cdot\dfrac15=288$. Why it is wrong: the $\dfrac15$ is of the original price, not of $240$. Right: $240:\dfrac45=300$.
- **Skipping the "remaining part" step.** Wrong: "$\dfrac15$ off, paid $240$ thousand, so the original price is $240:\dfrac15=1200$." Why it is wrong: $240$ thousand matches the part still paid, which is $\dfrac45$, not $\dfrac15$. Right: $240:\dfrac45=300$.
:::

## Key terms

:::terms
- fraction of an amount | giá trị phân số của một số
- finding the whole from a fraction of it | tìm một số khi biết giá trị phân số của nó
- part | phần
- whole | toàn bộ
- marked price | giá niêm yết
- discount | giảm giá
- remaining part | phần còn lại
:::

## Summary

- $\dfrac{m}{n}$ of the number $b$ is $b\cdot\dfrac{m}{n}$ (know the whole, want a part: multiply).
- If $\dfrac{m}{n}$ of a number is $a$, then the number is $a:\dfrac{m}{n}$ (know a part, want the whole: divide).
- In multi-step problems, find which fraction of the whole the given number matches, often the "remaining part" $1-\dfrac{m}{n}$.
- Check by taking the fraction of your answer and seeing whether you get the given number.

Ms Mai saves $60$ thousand dong, and Mr Tuấn's shoes originally cost $300$ thousand dong. Both questions use the fraction $\dfrac15$, but one multiplies and the other divides. Before each problem, pause for a second and ask: "Do I already know the whole?" If you need to revise multiplying and dividing fractions, see [Multiplying and dividing fractions](lesson:g6-multiply-divide-fractions).

## Practice

Each exercise comes with what you need and how to start. Try it yourself first, then open the solution.

:::exercise
Work out:

a) $\dfrac{2}{3}$ of $27$;

b) $\dfrac{5}{8}$ of $64$;

c) $\dfrac{3}{4}$ of $\dfrac{2}{9}$.

::hint
**What you need:** $\dfrac{m}{n}$ of $b$ is $b\cdot\dfrac{m}{n}$.

**Steps:**
1. Write the multiplication.
2. Simplify, then calculate.

::solution
a) $\dfrac{2}{3}$ of $27$ is $27\cdot\dfrac{2}{3}=9\cdot2=18$.

b) $\dfrac{5}{8}$ of $64$ is $64\cdot\dfrac{5}{8}=8\cdot5=40$.

c) $\dfrac{3}{4}$ of $\dfrac{2}{9}$ is
$$\dfrac{2}{9}\cdot\dfrac{3}{4}=\dfrac{2\cdot3}{9\cdot4}=\dfrac{1\cdot1}{3\cdot2}=\dfrac{1}{6}.$$

So the results are $18$; $40$; $\dfrac16$.

**Answer.** a) $18$; b) $40$; c) $\dfrac16$.
:::

:::exercise
Find the number, given that:

a) $\dfrac{3}{5}$ of the number is $24$;

b) $\dfrac{4}{7}$ of the number is $36$;

c) $\dfrac{5}{6}$ of the number is $\dfrac{10}{3}$.

::hint
**What you need:** if $\dfrac{m}{n}$ of a number is $a$, then the number is $a:\dfrac{m}{n}$.

**Steps:**
1. Write the division.
2. Turn it into multiplying by the reciprocal, then calculate.

::solution
a) The number is $24:\dfrac{3}{5}=24\cdot\dfrac{5}{3}=8\cdot5=40$.

b) The number is $36:\dfrac{4}{7}=36\cdot\dfrac{7}{4}=9\cdot7=63$.

c) The number is
$$\dfrac{10}{3}:\dfrac{5}{6}=\dfrac{10}{3}\cdot\dfrac{6}{5}=\dfrac{2\cdot2}{1\cdot1}=4.$$

So the numbers are $40$; $63$; $4$.

**Answer.** a) $40$; b) $63$; c) $4$.
:::

:::exercise
A garden has an area of $360\ \text{m}^2$. $\dfrac{5}{12}$ of the area is used for vegetables, $\dfrac{1}{3}$ for flowers, and the rest for paths. Find the area of each part.

::hint
**What you need:** the area of the whole garden is known, so find each fraction of it by multiplying.

**Steps:**
1. Find the areas for vegetables and for flowers.
2. Subtract them from the area of the whole garden.

::solution
The area for vegetables is
$$360\cdot\dfrac{5}{12}=30\cdot5=150\ (\text{m}^2).$$

The area for flowers is
$$360\cdot\dfrac{1}{3}=120\ (\text{m}^2).$$

The area for paths is
$$360-150-120=90\ (\text{m}^2).$$

So the areas for vegetables, flowers and paths are $150\ \text{m}^2$; $120\ \text{m}^2$; $90\ \text{m}^2$.

**Answer.** Vegetables $150\ \text{m}^2$; flowers $120\ \text{m}^2$; paths $90\ \text{m}^2$.
:::

:::exercise
A class has $36$ students. At the end of term, students graded Very good make up $\dfrac14$ of the class, students graded Good make up $\dfrac49$ of the class, and the rest are graded Pass. Find the number of students in each grade.

::hint
**What you need:** $\dfrac{m}{n}$ of $36$ is $36\cdot\dfrac{m}{n}$.

**Steps:**
1. Find the numbers graded Very good and Good.
2. Subtract from $36$ to find the number graded Pass.

::solution
The number of students graded Very good is
$$36\cdot\dfrac{1}{4}=9\ (\text{students}).$$

The number of students graded Good is
$$36\cdot\dfrac{4}{9}=16\ (\text{students}).$$

The number of students graded Pass is
$$36-9-16=11\ (\text{students}).$$

So the class has $9$ students graded Very good, $16$ graded Good and $11$ graded Pass.

**Answer.** Very good $9$; Good $16$; Pass $11$.
:::

:::exercise
A car has to travel $120$ km. It has already travelled $\dfrac38$ of the distance. How many kilometres does it still have to travel?

::hint
**What you need:** the distance travelled is $\dfrac38$ of $120$ km.

**Steps:**
1. Find the distance travelled.
2. Subtract it from $120$.

::solution
The distance the car has travelled is
$$120\cdot\dfrac{3}{8}=15\cdot3=45\ (\text{km}).$$

The distance still to travel is
$$120-45=75\ (\text{km}).$$

So the car still has $75$ km to travel.

**Answer.** $75$ km.
:::

:::exercise
Hùng is saving up for a bicycle. So far he has $1200$ thousand dong, which is $\dfrac35$ of the price of the bicycle. What is the price of the bicycle, and how much more money does Hùng need?

::hint
**What you need:** $\dfrac35$ of the price is known, so find the whole price by dividing.

**Steps:**
1. Find the price: $1200:\dfrac35$.
2. Subtract the money Hùng already has.

::solution
The price of the bicycle is
$$1200:\dfrac{3}{5}=1200\cdot\dfrac{5}{3}=400\cdot5=2000\ (\text{thousand dong}).$$

The extra money Hùng needs is
$$2000-1200=800\ (\text{thousand dong}).$$

So the bicycle costs $2000$ thousand dong (that is, $2$ million dong), and Hùng needs another $800$ thousand dong.

**Answer.** Price $2000$ thousand dong; another $800$ thousand dong needed.
:::

:::exercise
A shop takes $\dfrac14$ off the marked price. Lan buys a backpack and pays $270$ thousand dong. Find the marked price of the backpack.

::hint
**What you need:** after $\dfrac14$ is taken off, the price paid is $\dfrac34$ of the marked price.

**Steps:**
1. Find the fraction that matches $270$ thousand dong.
2. Use the problem of finding a number from a fraction of it.

::solution
After $\dfrac14$ is taken off, the price paid is
$$1-\dfrac{1}{4}=\dfrac{3}{4}\ (\text{of the marked price}).$$

So $\dfrac34$ of the marked price is $270$ thousand dong. The marked price of the backpack is
$$270:\dfrac{3}{4}=270\cdot\dfrac{4}{3}=360\ (\text{thousand dong}).$$

So the marked price of the backpack is $360$ thousand dong.

**Answer.** $360$ thousand dong.
:::

:::exercise
Compare $\dfrac{3}{4}$ of $80$ with $\dfrac{4}{5}$ of $75$.

::hint
**What you need:** work out each fraction of a number, then compare the two numbers.

**Steps:**
1. Work out $80\cdot\dfrac34$.
2. Work out $75\cdot\dfrac45$, then compare.

::solution
$\dfrac{3}{4}$ of $80$ is $80\cdot\dfrac{3}{4}=60$.

$\dfrac{4}{5}$ of $75$ is $75\cdot\dfrac{4}{5}=60$.

So the two values are equal, both $60$.

**Answer.** Equal (both $60$).
:::

:::exercise Challenge
A family uses water from a tank. On the first day they use $\dfrac13$ of the water in the tank. On the second day they use $\dfrac25$ of the remaining water. After the two days there are $120$ litres left in the tank. How many litres did the tank hold at the start?

::hint
**What you need:** "$\dfrac25$ of the remaining water" is a fraction of what was left after the first day, not of the whole tank.

**Steps:**
1. Find the water left after the first day (as a fraction of the tank).
2. Find the water used on the second day and the water left after two days (as fractions of the tank).
3. Use the problem of finding a number from a fraction of it.

::solution
Take the water at the start as $1$.

After the first day, the water left is
$$1-\dfrac{1}{3}=\dfrac{2}{3}\ (\text{of the tank}).$$

On the second day they use $\dfrac25$ of $\dfrac23$ of the tank, that is,
$$\dfrac{2}{3}\cdot\dfrac{2}{5}=\dfrac{4}{15}\ (\text{of the tank}).$$

After the two days, the water left is
$$\dfrac{2}{3}-\dfrac{4}{15}=\dfrac{10}{15}-\dfrac{4}{15}=\dfrac{6}{15}=\dfrac{2}{5}\ (\text{of the tank}).$$

So $\dfrac25$ of the water at the start is $120$ litres. The water in the tank at the start was
$$120:\dfrac{2}{5}=120\cdot\dfrac{5}{2}=300\ (\text{litres}).$$

Check: on the first day they use $100$ litres, leaving $200$ litres; on the second day they use $200\cdot\dfrac25=80$ litres, leaving $120$ litres. Correct.

So the tank held $300$ litres at the start.

**Answer.** $300$ litres.
:::

## Mini test

:::quiz
::mc
$\dfrac{3}{5}$ of $40$ is
A. $24$.
B. $\dfrac{200}{3}$.
C. $120$.
D. $8$.
::key A
$40\cdot\dfrac35=24$. B divides instead of multiplying; C only multiplies by $3$; D only divides by $5$.

::mc
$\dfrac{2}{3}$ of a number is $12$. The number is
A. $8$.
B. $18$.
C. $36$.
D. $24$.
::key B
$12:\dfrac23=12\cdot\dfrac32=18$. A multiplies instead of dividing; C only multiplies by $3$; D only multiplies by $2$.

::mc
A class has $32$ students, and girls make up $\dfrac38$ of the class. The number of boys is
A. $12$.
B. $8$.
C. $20$.
D. $24$.
::key C
There are $32\cdot\dfrac38=12$ girls, so $32-12=20$ boys. A is the number of girls; B is only $\dfrac14$ of $32$; D takes $\dfrac34$ of $32$.

::mc
After $\dfrac15$ is taken off the marked price, an item costs $400$ thousand dong. The marked price of the item is
A. $480$ thousand dong.
B. $320$ thousand dong.
C. $2000$ thousand dong.
D. $500$ thousand dong.
::key D
$400$ is $\dfrac45$ of the marked price, so the marked price is $400:\dfrac45=500$. A works out $400+80$; B multiplies by $\dfrac45$; C divides by $\dfrac15$.

::tf
A book has $150$ pages. On the first day, An reads $\dfrac25$ of the book. On the second day, An reads $\dfrac13$ of the remaining pages. Decide whether each statement is true or false.
a) On the first day An reads $60$ pages.
b) On the second day An reads $50$ pages.
c) After the two days, An has $40$ pages left to read.
d) The pages An reads on the second day make up $\dfrac13$ of the whole book.
::key T F F F
a) True: $150\cdot\dfrac25=60$. b) False: $90$ pages are left, so on the second day An reads $90\cdot\dfrac13=30$ pages. c) False: $150-60-30=60$ pages are left. d) False: $30$ pages are only $\dfrac15$ of the book.

::sa
Work out $\dfrac{5}{6}$ of $48$.
::key 40
$48\cdot\dfrac56=8\cdot5=40$.

::sa
$\dfrac{3}{4}$ of a journey is $60$ km. How many kilometres long is the whole journey?
::key 80
$60:\dfrac34=60\cdot\dfrac43=80$ (km).
:::
