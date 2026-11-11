---
title: Statistics and probability
description: ACT Math statistics and probability: mean, median, mode and spread, missing values, counting, probability of combined events, two-way tables, expected value.
minutes: 45
---

:::goals
- Find and compare the mean, median, mode and range, and judge which data set is more spread out.
- Find a missing value from a given mean, including weighted averages.
- Count arrangements and selections with the multiplication principle, permutations and combinations.
- Find probabilities of single and combined events, including conditional probability from a table.
- Calculate an expected value.
:::

Statistics and probability questions on the ACT rarely need long calculations. They test whether you know exactly what each measure means and which counting rule to use. A typical question gives a small data set, a table or a short description, and asks for one number. Write the rule you use before you calculate; it prevents most errors.

## Mean, median, mode and spread

The **mean** is the sum divided by the number of values; the **median** is the middle value of the ordered data (the mean of the two middle values when there is an even number of values); the **mode** is the most frequent value; the **range** is the largest value minus the smallest. The **standard deviation** measures how far the values typically are from the mean: more spread out data has a larger standard deviation.

:::example Three measures of center
For the data $4, 7, 7, 9, 13$, which statement is true?
A. The mean is greater than the median.
B. The median is greater than the mean.
C. The mode is greater than the median.
D. The mean, median and mode are all equal.

**Solution.** The mean is $\dfrac{4+7+7+9+13}{5}=\dfrac{40}{5}=8$.

The data are already in order, so the median is the third value, $7$. The mode is $7$, because it appears twice.

Since $8>7$, the mean is greater than the median.

So statement A is true, answer **A**.
:::

:::example The score needed
Minh's mean score on $5$ tests is $82$. What score does he need on the sixth test to raise his mean to $85$?
A. $85$
B. $88$
C. $95$
D. $100$

**Solution.** The total of the first $5$ scores is $5\times82=410$.

For a mean of $85$ over $6$ tests, the total must be $6\times85=510$.

So the sixth score must be $510-410=100$.

So Minh needs a score of $100$, answer **D**. Option B adds the difference $3$ to $85$ instead of working with totals.
:::

## Counting

By the **multiplication principle**, if one choice can be made in $m$ ways and a second in $n$ ways, both can be made in $mn$ ways. The number of ways to arrange $n$ different objects in a row is $n!$. The number of ways to choose $r$ objects from $n$, when order does not matter, is $\dbinom nr=\dfrac{n!}{r!(n-r)!}$.

:::example Order or no order
A club has $8$ members. In how many ways can a committee of $3$ members be chosen?
A. $336$
B. $56$
C. $24$
D. $512$

**Solution.** The order of the members in a committee does not matter, so we count combinations:
$$\binom83=\frac{8\times7\times6}{3\times2\times1}=56.$$

So there are $56$ possible committees, answer **B**. Option A counts ordered choices, such as president, secretary and treasurer.
:::

## Probability

For equally likely outcomes, $P(A)=\dfrac{\text{number of favorable outcomes}}{\text{number of outcomes}}$. For **independent** events, $P(A\text{ and }B)=P(A)P(B)$. The probability that $A$ does not happen is $1-P(A)$. A **conditional** probability restricts the outcomes to those satisfying the condition.

:::example A coin and a die
A fair coin is tossed and a fair six-sided die is rolled. What is the probability of getting heads and a $6$?
A. $\dfrac{1}{12}$
B. $\dfrac{2}{3}$
C. $\dfrac{1}{8}$
D. $\dfrac{7}{12}$

**Solution.** The coin and the die do not affect each other, so the events are independent:
$$P(\text{heads and }6)=\frac12\times\frac16=\frac{1}{12}.$$

So the probability is $\dfrac{1}{12}$, answer **A**. Option B adds the probabilities instead of multiplying.
:::

:::example Conditional probability from a table
A survey asked $100$ people whether they drink tea and whether they drink coffee.

| | Coffee | No coffee | Total |
|---|---|---|---|
| Tea | $25$ | $15$ | $40$ |
| No tea | $35$ | $25$ | $60$ |
| Total | $60$ | $40$ | $100$ |

If a person who drinks tea is chosen at random, what is the probability that this person also drinks coffee?
A. $\dfrac14$
B. $\dfrac{5}{12}$
C. $\dfrac58$
D. $\dfrac35$

**Solution.** The condition "drinks tea" restricts us to the $40$ people in the Tea row. Of these, $25$ also drink coffee.

So the probability is
$$\frac{25}{40}=\frac58.$$

So the probability is $\dfrac58$, answer **C**. Option A divides by $100$, and option B divides by the $60$ coffee drinkers.
:::

## Expected value

The expected value of a random variable is $E(X)=\sum x\,P(X=x)$: the long-run average result per trial.

:::example Is the game worth playing?
In a game, a player wins $10$ dollars with probability $0.2$ and loses $3$ dollars otherwise. What is the expected gain per game?
A. $7$ dollars
B. $-0.4$ dollars
C. $2$ dollars
D. $0.4$ dollars

**Solution.** The player loses with probability $1-0.2=0.8$. So
$$E=10(0.2)+(-3)(0.8)=2-2.4=-0.4.$$

So the expected gain is $-0.4$ dollars per game, a loss of $40$ cents on average, answer **B**.
:::

:::warning Common traps
- **The median of unordered data:** sort first.
- **Mean problems:** work with totals, not with differences of means.
- **Permutations and combinations:** does order matter? A committee: no; a ranking or different roles: yes.
- **"And" and "or":** multiply for independent "and"; for "or", add and subtract the overlap.
- **The denominator of a conditional probability** is the total of the condition, not the grand total.
:::

:::terms
- mean, median, mode, range | trung bình, trung vị, mốt, khoảng biến thiên
- standard deviation | độ lệch chuẩn
- weighted average | trung bình có trọng số
- multiplication principle | quy tắc nhân
- permutation, combination | hoán vị, tổ hợp
- independent events | biến cố độc lập
- conditional probability | xác suất có điều kiện
- expected value | giá trị kì vọng
:::

## Similar exercises

:::exercise
Find the median of the data $3, 8, 1, 9, 5, 12$.

::hint
**What you need:** sort the data; with an even number of values, take the mean of the two middle values.

::solution
Sorting the data gives $1, 3, 5, 8, 9, 12$.

There are $6$ values, so the median is the mean of the third and fourth values:
$$\frac{5+8}{2}=6.5.$$

So the median of the data is $6.5$.

**Answer.** $6.5$.
:::

:::exercise
The mean of four numbers is $15$. Three of the numbers are $12$, $18$ and $10$. Find the fourth number.

::hint
**What you need:** total $=$ mean $\times$ number of values.

::solution
The total of the four numbers is $4\times15=60$.

The three known numbers add up to $12+18+10=40$.

So the fourth number is $60-40=20$.

So the fourth number is $20$.

**Answer.** $20$.
:::

:::exercise
Two fair six-sided dice are rolled. Find the probability that the sum is $7$.

::hint
**What you need:** there are $36$ equally likely outcomes; list the pairs with sum $7$.

::solution
Each die has $6$ outcomes, so there are $6\times6=36$ equally likely outcomes.

The pairs with sum $7$ are $(1,6)$, $(2,5)$, $(3,4)$, $(4,3)$, $(5,2)$ and $(6,1)$: $6$ outcomes.

So the probability is $\dfrac{6}{36}=\dfrac16$.

**Answer.** $\dfrac16$.
:::

:::exercise
A lock uses a code of $4$ digits from $0$ to $9$. How many codes are possible if digits may be repeated? How many if all four digits must be different?

::hint
**What you need:** the multiplication principle; without repetition, each position has one fewer choice.

::solution
With repetition, each of the $4$ positions has $10$ choices, so there are $10^4=10{,}000$ codes.

Without repetition, the positions have $10$, $9$, $8$ and $7$ choices, so there are $10\times9\times8\times7=5040$ codes.

So there are $10{,}000$ codes with repetition and $5040$ codes with all digits different.

**Answer.** $10{,}000$ and $5040$.
:::

:::exercise
In how many ways can $2$ students be chosen from a group of $6$?

::hint
**What you need:** order does not matter, so use $\dbinom62$.

::solution
Choosing a pair of students does not depend on order, so the number of ways is
$$\binom62=\frac{6\times5}{2\times1}=15.$$

So there are $15$ ways to choose the two students.

**Answer.** $15$.
:::

## Application exercises

:::exercise
A course grade is $60\%$ tests and $40\%$ homework. Hoa's test average is $80$ and her homework average is $95$. Find her course grade.

::hint
**What you need:** a weighted average: multiply each part by its weight and add.

::solution
The course grade is the weighted average
$$0.6\times80+0.4\times95=48+38=86.$$

So Hoa's course grade is $86$.

**Answer.** $86$.
:::

:::exercise
A box contains $20$ light bulbs, of which $3$ are defective. Two bulbs are chosen at random without replacement. Find the probability that both are defective.

::hint
**What you need:** after the first defective bulb is taken, $2$ defective bulbs remain among $19$.

::solution
The probability that the first bulb is defective is $\dfrac{3}{20}$.

If it is, $2$ defective bulbs remain among $19$, so the probability that the second is also defective is $\dfrac{2}{19}$.

Therefore
$$P(\text{both defective})=\frac{3}{20}\times\frac{2}{19}=\frac{6}{380}=\frac{3}{190}.$$

So the probability that both bulbs are defective is $\dfrac{3}{190}$, about $0.016$.

**Answer.** $\dfrac{3}{190}$.
:::

:::exercise
For the students in a class, the line of best fit relating the hours $x$ spent studying each week to the test score $y$ is $y=2.5x+40$. Predict the score of a student who studies $8$ hours a week, and interpret the slope.

::hint
**What you need:** substitute $x=8$; the slope is the change in $y$ for each extra unit of $x$.

::solution
Substituting $x=8$ gives $y=2.5(8)+40=20+40=60$.

The slope $2.5$ means that each extra hour of study per week is associated with a score about $2.5$ points higher.

So the predicted score is $60$, and each extra weekly hour of study adds about $2.5$ points.

**Answer.** $60$ points.
:::

:::exercise Challenge
A fair die is rolled $4$ times. Find the probability of getting at least one $6$.

::hint
**What you need:** use the complement: $P(\text{at least one }6)=1-P(\text{no }6)$.

::solution
The probability of not getting a $6$ on one roll is $\dfrac56$. The rolls are independent, so the probability of no $6$ in $4$ rolls is $\left(\dfrac56\right)^4=\dfrac{625}{1296}$.

Therefore
$$P(\text{at least one }6)=1-\frac{625}{1296}=\frac{671}{1296}\approx0.518.$$

So the probability of at least one $6$ is $\dfrac{671}{1296}$, slightly more than one half.

**Answer.** $\dfrac{671}{1296}\approx0.518$.
:::

:::quiz
::mc
What is the mode of $2, 3, 3, 5, 7, 7, 7$?
A. $3$
B. $5$
C. $7$
D. $4$
::key C
$7$ appears three times, more than any other value.

::mc
A spinner has $8$ equal sections, $3$ of which are blue. What is the probability of landing on blue?
A. $\dfrac38$
B. $\dfrac35$
C. $\dfrac58$
D. $\dfrac13$
::key A
$3$ favorable sections out of $8$.

::mc
In how many ways can $5$ different books be arranged on a shelf?
A. $25$
B. $60$
C. $15$
D. $120$
::key D
$5!=120$.

::mc
What is the mean of $2, 4, 6, 8, 10$?
A. $5$
B. $6$
C. $30$
D. $7$
::key B
$\dfrac{30}{5}=6$.

::tf
Consider the data $1, 2, 2, 3, 10$. Decide whether each statement is true or false.
a) The mean is $3.6$.
b) The median is $2$.
c) The mode is $2$.
d) Removing the value $10$ increases the mean.
::key T T T F
The mean is $\dfrac{18}{5}=3.6$; removing $10$ gives a mean of $2$.

::sa
How many ways are there to choose $2$ items from $5$?
::key 10
$\dbinom52=10$.

::sa
A fair coin is tossed twice. Find the probability of two tails.
::key 0.25
$\dfrac12\times\dfrac12=0.25$.
:::
