---
title: Adding, subtracting, multiplying and dividing rational numbers
description: Add, subtract, multiply and divide rational numbers using common denominators and sign rules, and use the laws of arithmetic to calculate faster.
minutes: 30
---

:::goals
- Add and subtract two rational numbers by writing them over a common denominator, handling signs and simplifying the result.
- Multiply and divide two rational numbers, use the sign rules, and understand why dividing by a number means multiplying by its reciprocal.
- Use the commutative, associative and distributive laws to calculate quickly.
- Apply the four operations to temperature, profit and loss, and depth.
:::

Imagine an early winter morning in the mountains. At 6 a.m. the thermometer reads $-\dfrac52\ ^\circ\text{C}$. As the sun comes up, the temperature rises by $\dfrac34\ ^\circ\text{C}$ every hour. What is the temperature at 9 a.m., and is it above $0\ ^\circ\text{C}$ yet?

Temperature, profit and loss, and height above sea level all need negative numbers, and "awkward" values such as $\dfrac34$ turn up far more often than whole numbers. This lesson gives you one short set of rules for doing all four operations with both kinds of number at once. Once you have the rules, you no longer have to guess how a negative number behaves.

## Exploring three small calculations

Here are three calculations that you can check with a picture or with everyday life.

**Adding.** Work out $-\dfrac34+\dfrac12$. On the number line we start at $-\dfrac34$ and move $\dfrac12$ to the right. One step is "quarters" and the other is "halves", so it is hard to count. If we cut each unit into $4$ equal parts, then $\dfrac12=\dfrac24$, the move is $2$ parts, and we land on $-\dfrac14$.

:::graph On the number line: $-\dfrac34+\dfrac12=-\dfrac14$
alt: A number line with marks at -1, 0 and 1; the points -3/4 and -1/4 are marked, and the segment below the line joining them has length one half
x: -2..2
y: -1..1
segment: (-2, 0) (2, 0)
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (-0.75, 0) "-3/4" above
point: (-0.25, 0) "-1/4" above
segment: (-0.75, -0.55) (-0.25, -0.55)
label: (-0.5, -0.85) "+1/2"
:::

**Multiplying.** What is half of $\dfrac34$? Split $\dfrac34$ into two equal parts and each part is $\dfrac38$, so $\dfrac12\cdot\dfrac34=\dfrac38$: numerator times numerator, denominator times denominator.

**Dividing.** Work out $\dfrac34\div\dfrac38$, which asks how many times $\dfrac38$ fits into $\dfrac34$. Since $\dfrac34=\dfrac68$ and $\dfrac68$ holds exactly two lots of $\dfrac38$, the answer is $2$. That $2$ is also $\dfrac34\cdot\dfrac83$: dividing by $\dfrac38$ gives the same result as multiplying by $\dfrac83$.

These three calculations hint at the whole rulebook: adding and subtracting need a common denominator, multiplying goes straight across, and dividing turns into multiplying. What is left is to state the rules neatly and to check what happens with negative signs.

## Adding and subtracting rational numbers

A rational number is a number that can be written as a fraction $\dfrac ab$ where $a$ and $b$ are integers and $b\neq0$. Because $\dfrac ab=\dfrac{-a}{-b}$, we can always make the denominator positive.

:::definition Adding and subtracting rational numbers
For two rational numbers $x=\dfrac am$ and $y=\dfrac bm$ (with the same positive denominator $m$):
$$x+y=\dfrac{a+b}{m},\qquad x-y=\dfrac{a-b}{m}.$$
To add or subtract two rational numbers with different denominators, write them over a common denominator, apply the formulas above and simplify the result. Subtracting is the same as adding the opposite: $x-y=x+(-y)$.
:::

**Why do we need a common denominator?** We can only add things of the same kind: $3$ quarters and $2$ quarters make $5$ quarters. A quarter and a third are not yet the same "unit", so we convert both to the same denominator. **Why is subtracting the same as adding the opposite?** Taking away a loss is the same as adding a profit, so $x-(-y)=x+y$.

:::example Adding and subtracting two rational numbers
Calculate:

a) $-\dfrac34+\dfrac56$.

b) $\dfrac16-\left(-\dfrac38\right)$.

c) $-\dfrac5{12}-\dfrac14$.

**Solution.** We write the fractions over a common denominator, then add or subtract the numerators.

a) The lowest common denominator of $4$ and $6$ is $12$. We have
$$-\dfrac34+\dfrac56=-\dfrac9{12}+\dfrac{10}{12}=\dfrac{-9+10}{12}=\dfrac1{12}.$$

b) Subtracting a negative number is the same as adding its opposite, here $\dfrac38$. The common denominator is $24$, so
$$\dfrac16-\left(-\dfrac38\right)=\dfrac16+\dfrac38=\dfrac4{24}+\dfrac9{24}=\dfrac{13}{24}.$$

c) The common denominator is $12$. We have
$$-\dfrac5{12}-\dfrac14=-\dfrac5{12}-\dfrac3{12}=\dfrac{-5-3}{12}=-\dfrac8{12}=-\dfrac23\quad(\text{dividing top and bottom by }4).$$

So a) $\dfrac1{12}$; b) $\dfrac{13}{24}$; c) $-\dfrac23$.
:::

Decimals and fractions with a negative denominator are rational numbers too, so we only need to convert them to fractions with a positive denominator and carry on as before.

:::example Decimals and negative denominators
Calculate:

a) $-1.25+\dfrac76$.

b) $\dfrac3{-8}-\left(-\dfrac56\right)$.

**Solution.** a) We convert $-1.25=-\dfrac{125}{100}=-\dfrac54$. The common denominator of $4$ and $6$ is $12$, so
$$-\dfrac54+\dfrac76=-\dfrac{15}{12}+\dfrac{14}{12}=-\dfrac1{12}.$$

b) Make the denominator positive: $\dfrac3{-8}=-\dfrac38$. Subtracting a negative number is the same as adding its opposite, so
$$-\dfrac38-\left(-\dfrac56\right)=-\dfrac38+\dfrac56=-\dfrac9{24}+\dfrac{20}{24}=\dfrac{11}{24}.$$

So a) $-\dfrac1{12}$; b) $\dfrac{11}{24}$.
:::

## Multiplying and dividing rational numbers

:::definition Multiplying and dividing rational numbers
For $x=\dfrac ab$ and $y=\dfrac cd$ ($b\neq0$, $d\neq0$):
$$x\cdot y=\dfrac{a\cdot c}{b\cdot d}.$$
If $y\neq0$ (that is, $c\neq0$), then
$$x\div y=x\cdot\dfrac dc=\dfrac{a\cdot d}{b\cdot c}.$$
The number $\dfrac dc$ is called the **reciprocal** of $y=\dfrac cd$.

Sign rule: two numbers with the same sign give a positive product and quotient; two numbers with different signs give a negative product and quotient.
:::

**Why is dividing the same as multiplying by the reciprocal?** The quotient $x\div y$ is the number that gives $x$ when multiplied by $y$. The number $x\cdot\dfrac dc$ does exactly that, because $\left(x\cdot\dfrac dc\right)\cdot\dfrac cd=x\cdot1=x$. The signs work just as they do for integers: they depend only on whether the two numbers have the same sign or different signs. So decide the sign first, then multiply or divide the two non-negative numbers. Dividing by $0$ has no meaning.

:::tip Simplify before you multiply
Before multiplying, look for a common factor in a numerator and a denominator and cancel it straight away. Smaller numbers mean fewer slips, and the answer usually comes out already in its simplest form.
:::

:::example Multiplying two rational numbers
Calculate:

a) $\left(-\dfrac34\right)\cdot\dfrac89$.

b) $\left(-\dfrac56\right)\cdot\left(-\dfrac{12}{25}\right)$.

c) $(-0.6)\cdot\dfrac59$.

**Solution.** a) The factors have different signs, so the product is negative. We have
$$\left(-\dfrac34\right)\cdot\dfrac89=-\dfrac{3\cdot8}{4\cdot9}=-\dfrac{24}{36}=-\dfrac23\quad(\text{dividing top and bottom by }12).$$

b) The factors have the same sign, so the product is positive. Cancel $5$ with $25$ (by $5$) and $12$ with $6$ (by $6$):
$$\dfrac{5\cdot12}{6\cdot25}=\dfrac{1\cdot2}{1\cdot5}=\dfrac25.$$

c) Convert $-0.6=-\dfrac35$. The product is negative, and
$$-\dfrac35\cdot\dfrac59=-\dfrac{3\cdot5}{5\cdot9}=-\dfrac39=-\dfrac13.$$

So a) $-\dfrac23$; b) $\dfrac25$; c) $-\dfrac13$.
:::

Division needs one more step, finding the reciprocal, and this is where negative signs tend to cause hesitation. The reciprocal of $-\dfrac{10}9$ is $-\dfrac9{10}$: turn the fraction upside down and keep the sign.

:::example Division and negative signs
Calculate:

a) $\left(-\dfrac56\right)\div\left(-\dfrac{10}9\right)$.

b) $\dfrac7{12}\div\left(-\dfrac73\right)$.

c) $\left(-\dfrac45\right)\div8$.

**Solution.** We turn each division into a multiplication by the reciprocal of the divisor.

a) The reciprocal of $-\dfrac{10}9$ is $-\dfrac9{10}$. The two numbers have the same sign, so the quotient is positive:
$$\left(-\dfrac56\right)\cdot\left(-\dfrac9{10}\right)=\dfrac{45}{60}=\dfrac34.$$

b) The reciprocal of $-\dfrac73$ is $-\dfrac37$. The two numbers have different signs, so the quotient is negative:
$$\dfrac7{12}\cdot\left(-\dfrac37\right)=-\dfrac{7\cdot3}{12\cdot7}=-\dfrac3{12}=-\dfrac14.$$

c) Write $8=\dfrac81$, whose reciprocal is $\dfrac18$. We have
$$\left(-\dfrac45\right)\cdot\dfrac18=-\dfrac4{40}=-\dfrac1{10}.$$

So a) $\dfrac34$; b) $-\dfrac14$; c) $-\dfrac1{10}$.
:::

## Laws of arithmetic and quick calculation

The laws you used with integers still hold for rational numbers.

:::theorem Laws of addition and multiplication for rational numbers
For all rational numbers $x$, $y$, $z$:
- Commutative: $x+y=y+x$; $x\cdot y=y\cdot x$.
- Associative: $(x+y)+z=x+(y+z)$; $(x\cdot y)\cdot z=x\cdot(y\cdot z)$.
- Adding $0$, multiplying by $1$: $x+0=x$; $x\cdot1=x$.
- Opposite and reciprocal: $x+(-x)=0$; $x\cdot\dfrac1x=1$ ($x\neq0$).
- Distributive: $x\cdot(y+z)=x\cdot y+x\cdot z$.
:::

These laws are very practical. When there are many terms, we may reorder and regroup them to pair up numbers that "go together": two with the same denominator, two whose sum is a whole number, two whose product is $1$. When two products share a factor, we take that factor out as a common factor.

:::example Quick calculation
Calculate in a sensible way:

a) $-\dfrac7{12}+\dfrac45+\left(-\dfrac5{12}\right)+\dfrac25$.

b) $\left(-\dfrac37\right)\cdot\dfrac59+\left(-\dfrac37\right)\cdot\dfrac49$.

c) $\left(-\dfrac45\right)\cdot\dfrac7{11}\cdot\left(-\dfrac54\right)$.

**Solution.** a) Using the commutative and associative laws, we group the two terms with denominator $12$ and the two with denominator $5$:
$$\left(-\dfrac7{12}-\dfrac5{12}\right)+\left(\dfrac45+\dfrac25\right)=-\dfrac{12}{12}+\dfrac65=-1+\dfrac65=\dfrac15.$$

b) The two products share the factor $-\dfrac37$. By the distributive law,
$$-\dfrac37\cdot\left(\dfrac59+\dfrac49\right)=-\dfrac37\cdot1=-\dfrac37.$$

c) Reorder so that two factors with product $1$ sit together (because $\left(-\dfrac45\right)\cdot\left(-\dfrac54\right)=1$):
$$\left(-\dfrac45\right)\cdot\left(-\dfrac54\right)\cdot\dfrac7{11}=1\cdot\dfrac7{11}=\dfrac7{11}.$$

So a) $\dfrac15$; b) $-\dfrac37$; c) $\dfrac7{11}$.
:::

## Back to the opening question

In an expression with several operations, the order is the same as for integers: brackets first, then multiplication and division, then addition and subtraction.

:::example A morning in the mountains
At 6 a.m. the temperature is $-\dfrac52\ ^\circ\text{C}$. From then on, the temperature rises by $\dfrac34\ ^\circ\text{C}$ every hour. What is the temperature at 9 a.m., in degrees Celsius? Is it above $0\ ^\circ\text{C}$ by then?

**Solution.**

*Understand.* The starting temperature is $-\dfrac52\ ^\circ\text{C}$; it rises by $\dfrac34\ ^\circ\text{C}$ each hour; we need the temperature after $3$ hours (from 6 a.m. to 9 a.m.).

*Plan.* After $3$ hours the temperature has risen by $3\cdot\dfrac34$. The temperature at 9 a.m. is the starting temperature plus this rise. We multiply first, then add.

*Solve.* Let $T$ ($^\circ\text{C}$) be the temperature at 9 a.m. We have
$$T=-\dfrac52+3\cdot\dfrac34=-\dfrac52+\dfrac94=-\dfrac{10}4+\dfrac94=-\dfrac14.$$

So at 9 a.m. the temperature is $-\dfrac14\ ^\circ\text{C}$ (that is, $-0.25\ ^\circ\text{C}$), still below $0\ ^\circ\text{C}$.

*Look back.* Let us try another way: add hour by hour. At 7 a.m. it is $-\dfrac52+\dfrac34=-\dfrac74$; at 8 a.m. it is $-\dfrac74+\dfrac34=-1$; at 9 a.m. it is $-1+\dfrac34=-\dfrac14$. Both ways give the same result. What if we wait one more hour? At 10 a.m. it is $-\dfrac14+\dfrac34=\dfrac12>0$, so the temperature only rises above $0\ ^\circ\text{C}$ by 10 a.m.
:::

### Common mistakes

:::warning Common mistakes
- **Adding numerators and denominators separately.** Wrong: $\dfrac12+\dfrac13=\dfrac25$. Why it is wrong: $\dfrac25$ is smaller than $\dfrac12$, yet we have just added a positive number. Right: $\dfrac36+\dfrac26=\dfrac56$.
- **Forgetting to change the sign when subtracting a negative.** Wrong: $\dfrac12-\left(-\dfrac14\right)=\dfrac24-\dfrac14=\dfrac14$. Why it is wrong: subtracting a negative number means adding its opposite. Right: $\dfrac24+\dfrac14=\dfrac34$.
- **Turning the wrong number upside down.** Wrong: $\dfrac34\div\dfrac12=\dfrac43\cdot\dfrac12=\dfrac23$. Why it is wrong: only the divisor $\dfrac12$ is inverted; the first number stays as it is. Right: $\dfrac34\cdot2=\dfrac32$.
- **Ignoring the sign of the denominator.** Wrong: treating $\dfrac3{-4}$ as $\dfrac34$ and writing $\dfrac3{-4}+\dfrac14=1$. Why it is wrong: $\dfrac3{-4}=-\dfrac34$. Right: $-\dfrac34+\dfrac14=-\dfrac24=-\dfrac12$.
:::

**Connections.** These four operations build on what you learnt in Grade 6 about integers and fractions, and they are the foundation for the next lessons in this chapter: powers of rational numbers, the rules for brackets and moving terms across an equation. When you meet a problem with negative numbers and fractions, work in this order: make denominators positive, decide the sign, write over a common denominator or cancel, and only then calculate.

## Key terms

:::terms
- rational number | số hữu tỉ
- opposite (additive inverse) | số đối
- reciprocal | số nghịch đảo
- common denominator | mẫu số chung
- write over a common denominator | quy đồng mẫu số
- simplify a fraction | rút gọn phân số
- fraction in its simplest form | phân số tối giản
- commutative law | tính chất giao hoán
- associative law | tính chất kết hợp
- distributive law | tính chất phân phối
:::

## Summary

- Adding and subtracting: make denominators positive, write over a common denominator, add or subtract the numerators, keep the denominator, then simplify. $x-y=x+(-y)$.
- Multiplying: $\dfrac ab\cdot\dfrac cd=\dfrac{ac}{bd}$. Dividing: $\dfrac ab\div\dfrac cd=\dfrac ab\cdot\dfrac dc$ with $c\neq0$.
- Same signs give a positive product and quotient; different signs give a negative one.
- The commutative, associative and distributive laws let you pair up friendly numbers and take out common factors.
- With several operations, do brackets first, then multiplication and division, then addition and subtraction.

The opening question now has its answer: at 9 a.m. the temperature is $-\dfrac14\ ^\circ\text{C}$. Work through the exercises below, and whenever you hesitate over a sign, write the sign down before you calculate.

## Practice

Each exercise comes with what you need and hints; open the solution after trying.

:::exercise
Calculate:

a) $-\dfrac23+\dfrac14$.

b) $\dfrac58-\dfrac7{12}$.

c) $-\dfrac7{10}-\dfrac1{15}$.

::hint
**What you need:** write over a common denominator, add or subtract the numerators, then simplify.

**Steps:**
1. Lowest common denominator: a) $12$; b) $24$; c) $30$.
2. Add or subtract the numerators, then check whether the result simplifies.

::solution
a) The common denominator is $12$. We have $-\dfrac23+\dfrac14=-\dfrac8{12}+\dfrac3{12}=\dfrac{-8+3}{12}=-\dfrac5{12}$.

b) The common denominator is $24$. We have $\dfrac58-\dfrac7{12}=\dfrac{15}{24}-\dfrac{14}{24}=\dfrac1{24}$.

c) The common denominator is $30$. We have $-\dfrac7{10}-\dfrac1{15}=-\dfrac{21}{30}-\dfrac2{30}=-\dfrac{23}{30}$ (it does not simplify because $23$ is prime).

So a) $-\dfrac5{12}$; b) $\dfrac1{24}$; c) $-\dfrac{23}{30}$.

**Answer.** a) $-\dfrac5{12}$; b) $\dfrac1{24}$; c) $-\dfrac{23}{30}$.
:::

:::exercise
Calculate:

a) $\dfrac34-\left(-\dfrac56\right)$.

b) $-0.4+\dfrac7{15}$.

c) $\dfrac2{-5}-\dfrac3{-10}$.

::hint
**What you need:** $x-y=x+(-y)$; convert decimals and negative denominators to fractions with a positive denominator.

**Steps:**
1. a) Change it to adding $\dfrac56$.
2. b) $-0.4=-\dfrac25$.
3. c) $\dfrac2{-5}=-\dfrac25$ and $\dfrac3{-10}=-\dfrac3{10}$.

::solution
a) Subtracting a negative is adding the opposite: $\dfrac34+\dfrac56=\dfrac9{12}+\dfrac{10}{12}=\dfrac{19}{12}$.

b) We have $-0.4=-\dfrac4{10}=-\dfrac25=-\dfrac6{15}$. Hence $-\dfrac6{15}+\dfrac7{15}=\dfrac1{15}$.

c) Make the denominators positive: $-\dfrac25-\left(-\dfrac3{10}\right)=-\dfrac4{10}+\dfrac3{10}=-\dfrac1{10}$.

So a) $\dfrac{19}{12}$; b) $\dfrac1{15}$; c) $-\dfrac1{10}$.

**Answer.** a) $\dfrac{19}{12}$; b) $\dfrac1{15}$; c) $-\dfrac1{10}$.
:::

:::exercise
Calculate:

a) $\left(-\dfrac59\right)\cdot\dfrac3{10}$.

b) $\left(-\dfrac78\right)\cdot\left(-\dfrac{12}{35}\right)$.

c) $(-2.5)\cdot\dfrac4{15}$.

::hint
**What you need:** numerator times numerator, denominator times denominator; decide the sign using the sign rule.

**Steps:**
1. a) Different signs give a negative product; cancel $5$ with $10$ and $3$ with $9$.
2. b) Same signs give a positive product; cancel $7$ with $35$ and $12$ with $8$.
3. c) $-2.5=-\dfrac52$.

::solution
a) The factors have different signs, so the product is negative: $-\dfrac{5\cdot3}{9\cdot10}=-\dfrac{15}{90}=-\dfrac16$.

b) The factors have the same sign, so the product is positive: $\dfrac{7\cdot12}{8\cdot35}=\dfrac{1\cdot3}{2\cdot5}=\dfrac3{10}$ (cancelling $7$ with $35$ by $7$, and $12$ with $8$ by $4$).

c) Convert $-2.5=-\dfrac52$. The product is negative: $-\dfrac{5\cdot4}{2\cdot15}=-\dfrac{20}{30}=-\dfrac23$.

So a) $-\dfrac16$; b) $\dfrac3{10}$; c) $-\dfrac23$.

**Answer.** a) $-\dfrac16$; b) $\dfrac3{10}$; c) $-\dfrac23$.
:::

:::exercise
Calculate:

a) $\left(-\dfrac5{12}\right)\div\dfrac{15}8$.

b) $\left(-\dfrac67\right)\div\left(-\dfrac3{14}\right)$.

c) $\dfrac59\div(-10)$.

::hint
**What you need:** $x\div y=x\cdot\dfrac1y$; invert only the divisor and keep the first number as it is.

**Steps:**
1. a) The reciprocal of $\dfrac{15}8$ is $\dfrac8{15}$.
2. b) The reciprocal of $-\dfrac3{14}$ is $-\dfrac{14}3$.
3. c) The reciprocal of $-10$ is $-\dfrac1{10}$.

::solution
a) We have $\left(-\dfrac5{12}\right)\cdot\dfrac8{15}=-\dfrac{5\cdot8}{12\cdot15}=-\dfrac{40}{180}=-\dfrac29$.

b) We have $\left(-\dfrac67\right)\cdot\left(-\dfrac{14}3\right)=\dfrac{6\cdot14}{7\cdot3}=\dfrac{84}{21}=4$ (the two numbers have the same sign, so the quotient is positive).

c) We have $\dfrac59\cdot\left(-\dfrac1{10}\right)=-\dfrac5{90}=-\dfrac1{18}$.

So a) $-\dfrac29$; b) $4$; c) $-\dfrac1{18}$.

**Answer.** a) $-\dfrac29$; b) $4$; c) $-\dfrac1{18}$.
:::

:::exercise
A drinks stall keeps a record over three days in a row (made-up figures): on the first day it makes a profit of $\dfrac34$ million đồng, on the second day a loss of $\dfrac56$ million đồng, and on the third day a profit of $\dfrac13$ million đồng. After the three days, does the stall have a profit or a loss, and how many thousand đồng is it?

::hint
**What you need:** a profit is a positive number and a loss is a negative number; the sum of the three numbers is the result after three days; $1$ million đồng $=1000$ thousand đồng.

**Steps:**
1. Write the sum $\dfrac34+\left(-\dfrac56\right)+\dfrac13$.
2. Write over the common denominator $12$.
3. Convert the result from million đồng to thousand đồng.

::solution
Let $S$ (million đồng) be the total result of the three days, with profit positive and loss negative. We have
$$S=\dfrac34+\left(-\dfrac56\right)+\dfrac13=\dfrac9{12}-\dfrac{10}{12}+\dfrac4{12}=\dfrac3{12}=\dfrac14.$$

Since $S>0$, the stall has a profit. In thousand đồng: $\dfrac14\cdot1000=250$.

So after three days the stall has a profit of $250$ thousand đồng.

**Answer.** A profit of $250$ thousand đồng.
:::

:::exercise
A shop makes a total loss of $\dfrac92$ million đồng over the first $3$ months of the year, with the same loss each month. How many million đồng does the shop lose each month? Give the answer as a decimal.

::hint
**What you need:** write a loss as a negative number; dividing by $3$ is multiplying by $\dfrac13$.

**Steps:**
1. The total result for the three months is $-\dfrac92$ (million đồng).
2. Calculate $\left(-\dfrac92\right)\div3$, then convert to a decimal.

::solution
A loss is written as a negative number, so the total result for the three months is $-\dfrac92$ (million đồng). The result for each month is
$$\left(-\dfrac92\right)\div3=-\dfrac92\cdot\dfrac13=-\dfrac9{6}=-\dfrac32=-1.5.$$

Check: $3\cdot1.5=4.5=\dfrac92$.

So the shop loses $1.5$ million đồng each month.

**Answer.** A loss of $1.5$ million đồng each month.
:::

:::exercise
A diver starts at sea level (height $0$ m) and descends steadily, going down $\dfrac54$ m every minute. After $6$ minutes the diver rises $\dfrac72$ m. At what height, in metres, relative to sea level, is the diver then?

::hint
**What you need:** a height below sea level is a negative number; descending for $6$ minutes means adding the number $-\dfrac54$ six times.

**Steps:**
1. Find the height after $6$ minutes of descent: $6\cdot\left(-\dfrac54\right)$.
2. Add $\dfrac72$ (rising increases the height).

::solution
After $6$ minutes of descent, the diver's height is
$$6\cdot\left(-\dfrac54\right)=-\dfrac{30}4=-\dfrac{15}2\ (\text{m}).$$

After rising $\dfrac72$ m, the height is
$$-\dfrac{15}2+\dfrac72=-\dfrac82=-4\ (\text{m}).$$

So the diver is then at height $-4$ m, that is, $4$ m below sea level.

**Answer.** $-4$ m.
:::

:::exercise
Calculate in a sensible way:

a) $\dfrac57+\left(-\dfrac3{11}\right)+\dfrac27+\left(-\dfrac5{11}\right)$.

b) $\left(-\dfrac56\right)\cdot\dfrac7{13}+\left(-\dfrac56\right)\cdot\dfrac6{13}$.

c) $\left(-\dfrac34\right)\cdot\dfrac87\cdot\left(-\dfrac75\right)$.

::hint
**What you need:** the commutative, associative and distributive laws.

**Steps:**
1. a) Group the two terms with denominator $7$ and the two with denominator $11$.
2. b) Take the common factor $-\dfrac56$ out.
3. c) Notice that the $7$ in a numerator and the $7$ in a denominator cancel.

::solution
a) Using the commutative and associative laws:
$$\left(\dfrac57+\dfrac27\right)+\left(-\dfrac3{11}-\dfrac5{11}\right)=1+\left(-\dfrac8{11}\right)=\dfrac3{11}.$$

b) By the distributive law:
$$-\dfrac56\cdot\left(\dfrac7{13}+\dfrac6{13}\right)=-\dfrac56\cdot1=-\dfrac56.$$

c) Both $-\dfrac34$ and $-\dfrac75$ are negative, so the product is positive:
$$\left(-\dfrac34\right)\cdot\left(-\dfrac75\right)\cdot\dfrac87=\dfrac{3\cdot7\cdot8}{4\cdot5\cdot7}=\dfrac{3\cdot2}{5}=\dfrac65.$$

So a) $\dfrac3{11}$; b) $-\dfrac56$; c) $\dfrac65$.

**Answer.** a) $\dfrac3{11}$; b) $-\dfrac56$; c) $\dfrac65$.
:::

:::exercise
Let $A=\dfrac12+\dfrac34\div\left(-\dfrac98\right)$.

a) Calculate $A$.

b) Compare $A$ with $-\dfrac15$.

::hint
**What you need:** the order of operations (divide first, then add); compare two rational numbers by writing them over a common denominator.

**Steps:**
1. a) Calculate $\dfrac34\div\left(-\dfrac98\right)$ first, by multiplying by $-\dfrac89$.
2. b) Write $A$ and $-\dfrac15$ over the common denominator $30$.

::solution
a) We do the division first:
$$\dfrac34\div\left(-\dfrac98\right)=\dfrac34\cdot\left(-\dfrac89\right)=-\dfrac{3\cdot8}{4\cdot9}=-\dfrac{24}{36}=-\dfrac23.$$

Hence $A=\dfrac12-\dfrac23=\dfrac36-\dfrac46=-\dfrac16$.

b) Over a common denominator, $-\dfrac16=-\dfrac5{30}$ and $-\dfrac15=-\dfrac6{30}$. Since $-5>-6$, we have $-\dfrac5{30}>-\dfrac6{30}$.

So $A=-\dfrac16$ and $A>-\dfrac15$.

**Answer.** a) $A=-\dfrac16$; b) $A>-\dfrac15$.
:::

:::exercise Challenge
a) Prove that for every positive integer $n$ we have $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$.

b) Calculate $S=\dfrac1{1\cdot2}+\dfrac1{2\cdot3}+\dfrac1{3\cdot4}+\dfrac1{4\cdot5}+\dfrac1{5\cdot6}$.

::hint
**What you need:** write the difference of two fractions over a common denominator; $x+(-x)=0$.

**Steps:**
1. a) Write the right-hand side over the common denominator $n(n+1)$.
2. b) Write each term of $S$ as a difference of two fractions using part a), then cross out the pairs of opposites.

::solution
a) Write the right-hand side over the common denominator $n(n+1)$:
$$\dfrac1n-\dfrac1{n+1}=\dfrac{n+1}{n(n+1)}-\dfrac n{n(n+1)}=\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}.$$
This is exactly the left-hand side, so the identity is proved.

b) Applying part a) with $n=1$, $2$, $3$, $4$, $5$, we get
$$S=\left(1-\dfrac12\right)+\left(\dfrac12-\dfrac13\right)+\left(\dfrac13-\dfrac14\right)+\left(\dfrac14-\dfrac15\right)+\left(\dfrac15-\dfrac16\right).$$

By the associative law and $x+(-x)=0$, the pairs $\dfrac12$, $\dfrac13$, $\dfrac14$, $\dfrac15$ cancel, so $S=1-\dfrac16=\dfrac56$.

So $S=\dfrac56$.

**Answer.** $S=\dfrac56$.
:::

## Mini test

:::quiz
::mc
The value of $-\dfrac56+\dfrac34$ is
A. $-\dfrac1{12}$.
B. $-\dfrac15$.
C. $\dfrac1{12}$.
D. $-\dfrac{19}{12}$.
::key A
The common denominator is $12$: $-\dfrac{10}{12}+\dfrac9{12}=-\dfrac1{12}$. A adds numerators and denominators separately; C has the wrong sign; D subtracts instead of adding.

::mc
The value of $\left(-\dfrac3{10}\right)\div\dfrac65$ is
A. $\dfrac14$.
B. $-\dfrac14$.
C. $-\dfrac9{25}$.
D. $-4$.
::key B
$\left(-\dfrac3{10}\right)\cdot\dfrac56=-\dfrac{15}{60}=-\dfrac14$. A has the wrong sign; B inverts the first number; C forgets to invert the divisor.

::mc
The value of $\dfrac23-\left(-\dfrac14\right)$ is
A. $\dfrac37$.
B. $\dfrac5{12}$.
C. $\dfrac{11}{12}$.
D. $\dfrac{11}{24}$.
::key C
Subtracting a negative is adding the opposite: $\dfrac8{12}+\dfrac3{12}=\dfrac{11}{12}$. B ignores the negative sign; C adds numerators and denominators separately; D adds the two denominators after finding the common denominator.

::mc
The value of $\left(-\dfrac38\right)\cdot\dfrac57+\left(-\dfrac38\right)\cdot\dfrac27$ is
A. $-\dfrac{15}{56}$.
B. $\dfrac38$.
C. $-\dfrac{21}8$.
D. $-\dfrac38$.
::key D
Take out $-\dfrac38$: $-\dfrac38\cdot\left(\dfrac57+\dfrac27\right)=-\dfrac38\cdot1$. A only works out the first term; B has the wrong sign; D forgets the denominator $7$ when adding.

::tf
Let $x=-\dfrac34$ and $y=\dfrac56$. Decide whether each statement is true or false.
a) $x+y=-\dfrac1{12}$.
b) $x-y=-\dfrac{19}{12}$.
c) $x\cdot y=-\dfrac58$.
d) $x\div y=-\dfrac{10}9$.
::key F T T F
a) False: $-\dfrac9{12}+\dfrac{10}{12}=\dfrac1{12}$. b) True: $-\dfrac9{12}-\dfrac{10}{12}=-\dfrac{19}{12}$. c) True: $-\dfrac{15}{24}=-\dfrac58$. d) False: $x\div y=-\dfrac34\cdot\dfrac65=-\dfrac9{10}$; $-\dfrac{10}9$ is $y\div x$.

::sa
Calculate $\left(\dfrac34-\dfrac56\right)\div\left(-\dfrac1{24}\right)$.
::key 2
$\dfrac34-\dfrac56=-\dfrac1{12}$, then $\left(-\dfrac1{12}\right)\cdot(-24)=2$.

::sa
A stall makes a loss of $\dfrac34$ million đồng each day for $3$ days in a row, then a profit of $\dfrac{11}4$ million đồng on the fourth day. After four days, what is the stall's profit in million đồng? (give the answer as a decimal)
::key 0.5
$3\cdot\left(-\dfrac34\right)+\dfrac{11}4=-\dfrac94+\dfrac{11}4=\dfrac24=0.5$.
:::
