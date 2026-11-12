---
title: Statistics, correlation and hypothesis tests
description: IB Maths AI: Pearson's and Spearman's correlation, regression lines, chi-squared tests for independence and goodness of fit, and t-tests with the GDC.
minutes: 50
---

:::goals
- Interpret Pearson's correlation coefficient $r$ and use a regression line for predictions within the data.
- Calculate and interpret Spearman's rank correlation coefficient.
- Carry out a $\chi^2$ test for independence and a $\chi^2$ goodness-of-fit test: hypotheses, expected frequencies, degrees of freedom, p-value and conclusion.
- Interpret the result of a $t$-test from the GDC.
:::

Does revising with music help or hurt? Are boys and girls equally likely to choose science? Is this dice fair? Each question can be argued forever with opinions. Statistics lets us argue with data instead: we collect evidence, measure how surprising it would be if nothing interesting were going on, and decide.

In IB Maths AI the GDC does most of the arithmetic in these tests. Your job is to set up the right test, state the hypotheses clearly, and write a conclusion that a non-mathematician could understand. That is a skill worth practising, because it is where most marks are won and lost.

## Correlation and regression

**Pearson's correlation coefficient** $r$ measures the strength of a **linear** relationship, from $-1$ to $1$. Values near $\pm1$ mean strong, near $0$ weak or no linear relationship. The **regression line of $y$ on $x$**, found with the GDC, is used to predict $y$ from $x$, but only **within** the range of the data (interpolation), and only when the correlation is reasonably strong.

**Spearman's rank correlation coefficient** $r_s$ measures how well the relationship is **monotonic**: whether one variable tends to increase as the other does, even if not in a straight line. Rank each variable, then find Pearson's $r$ of the ranks with the GDC. When there are no tied ranks, this equals
$$r_s=1-\frac{6\sum d^2}{n(n^2-1)},$$
where $d$ is the difference between the two ranks of each item.

:::example Two judges
Two judges rank five singers. Judge 1 gives ranks $1,2,3,4,5$ and judge 2 gives $2,1,4,3,5$ to the same singers. Find Spearman's rank correlation coefficient and comment.
A. $r_s=0.8$; the judges agree fairly strongly
B. $r_s=0.2$; the judges hardly agree
C. $r_s=-0.8$; the judges disagree strongly
D. $r_s=1$; the judges agree exactly

**Solution.** The rank differences are $-1,1,-1,1,0$, so $\sum d^2=1+1+1+1+0=4$.

Then $r_s=1-\dfrac{6(4)}{5(25-1)}=1-\dfrac{24}{120}=0.8$.

So $r_s=0.8$: the two judges' rankings agree fairly strongly, answer **A**.
:::

## The $\chi^2$ test for independence

To test whether two categorical variables are related, arrange the data in a **contingency table**.

1. $H_0$: the variables are independent. $H_1$: the variables are not independent.
2. **Expected frequency** of each cell $=\dfrac{\text{row total}\times\text{column total}}{\text{grand total}}$. Each should be at least $5$; if not, combine rows or columns.
3. **Degrees of freedom** $=(\text{rows}-1)(\text{columns}-1)$.
4. The GDC gives $\chi^2_{\text{calc}}=\sum\dfrac{(f_o-f_e)^2}{f_e}$ and the **p-value**.
5. If the p-value is less than the significance level (often $5\%$), reject $H_0$.

:::example Favourite subject
$200$ students were asked their favourite subject.

| | Maths | Science | Arts | Total |
|---|---|---|---|---|
| Male | $30$ | $40$ | $30$ | $100$ |
| Female | $20$ | $35$ | $45$ | $100$ |
| Total | $50$ | $75$ | $75$ | $200$ |

Test at the $5\%$ level whether favourite subject is independent of gender.

**Solution.** $H_0$: favourite subject is independent of gender; $H_1$: favourite subject is not independent of gender.

The expected frequencies are $\dfrac{100\times50}{200}=25$ for Maths and $\dfrac{100\times75}{200}=37.5$ for Science and for Arts, in each row; all are at least $5$. The degrees of freedom are $(2-1)(3-1)=2$.

$\chi^2_{\text{calc}}=\dfrac{5^2}{25}\times2+\dfrac{2.5^2}{37.5}\times2+\dfrac{7.5^2}{37.5}\times2\approx5.33$, and the GDC gives p-value $\approx0.0695$.

Since $0.0695>0.05$, we do not reject $H_0$. So there is not enough evidence at the $5\%$ level that favourite subject depends on gender.
:::

## The $\chi^2$ goodness-of-fit test

To test whether data fit a claimed distribution, compare observed and expected frequencies in each category. $H_0$: the data follow the distribution. Here the degrees of freedom are $(\text{number of categories})-1$ when the expected frequencies come straight from the claim.

:::example Is the dice fair?
A dice is rolled $60$ times, giving the scores $1$ to $6$ with frequencies $8,\ 9,\ 12,\ 11,\ 6,\ 14$. Test at the $5\%$ level whether the dice is fair.

**Solution.** $H_0$: the dice is fair; $H_1$: the dice is not fair. If it is fair, each expected frequency is $\dfrac{60}{6}=10$, and there are $6-1=5$ degrees of freedom.

$\chi^2_{\text{calc}}=\dfrac{4+1+4+1+16+16}{10}=4.2$, and the GDC gives p-value $\approx0.521$.

Since $0.521>0.05$, we do not reject $H_0$. So there is not enough evidence that the dice is unfair.
:::

## The $t$-test

A **$t$-test** compares the means of two independent groups, using raw data entered in the GDC. $H_0$: the population means are equal; $H_1$: they are different, or one is greater, depending on the question. Read the p-value from the GDC and compare it with the significance level.

:::example Reading a $t$-test
A teacher compares the test scores of two classes with a two-tailed $t$-test at the $5\%$ level and obtains a p-value of $0.032$. Which conclusion is correct?
A. Do not reject $H_0$; the means are equal.
B. The difference is $3.2\%$.
C. Reject $H_0$; there is evidence that the mean scores of the two classes differ.
D. Reject $H_0$; class A is better.

**Solution.** The p-value $0.032$ is less than $0.05$, so we reject $H_0$: there is significant evidence that the population mean scores differ.

The test is two-tailed, so it does not by itself say which class is better, and not rejecting $H_0$ would never prove the means are equal.

So the conclusion is C, answer **C**.
:::

:::warning Common traps
- **Correlation is not causation:** a strong $r$ does not show that $x$ causes $y$.
- **Extrapolation:** use the regression line only within the data.
- **Expected frequencies below $5$:** combine categories before the test.
- **Wording:** "do not reject $H_0$", never "accept $H_0$"; give the conclusion in context.
- **Comparing the right numbers:** compare the p-value with the significance level, or $\chi^2_{\text{calc}}$ with the critical value, not one with the other.
:::

:::terms
- Pearson's correlation coefficient | hệ số tương quan Pearson
- Spearman's rank correlation coefficient | hệ số tương quan hạng Spearman
- regression line | đường hồi quy
- interpolation / extrapolation | nội suy / ngoại suy
- contingency table | bảng tiếp liên (bảng hai chiều)
- expected / observed frequency | tần số kì vọng / tần số quan sát
- degrees of freedom | bậc tự do
- goodness of fit | độ phù hợp
- p-value / significance level | giá trị p / mức ý nghĩa
:::

## Similar exercises

:::exercise
For a set of data with $10\le x\le40$, the regression line of $y$ on $x$ is $y=2.4x+15$ and $r=0.92$.
a) Estimate $y$ when $x=10$.
b) Comment on whether this estimate is reliable.

::hint
**What you need:** substitute, then check the strength and the range.

::solution
a) Substituting gives $y=2.4(10)+15=39$.

b) The correlation $r=0.92$ is strong and positive, and $x=10$ lies within the range of the data, so this is interpolation.

So the estimate $y=39$ is reliable.

**Answer.** a) $39$; b) reliable.
:::

:::exercise
Two variables are ranked for four items, giving ranks $1,2,3,4$ and $4,3,1,2$. Calculate Spearman's rank correlation coefficient.

::hint
**What you need:** $r_s=1-\dfrac{6\sum d^2}{n(n^2-1)}$.

::solution
The rank differences are $1-4=-3$, $2-3=-1$, $3-1=2$ and $4-2=2$, so $\sum d^2=9+1+4+4=18$.

Then $r_s=1-\dfrac{6(18)}{4(16-1)}=1-\dfrac{108}{60}=-0.8$.

So $r_s=-0.8$: a fairly strong negative association between the rankings.

**Answer.** $r_s=-0.8$.
:::

:::exercise
In a contingency table with grand total $200$, a cell is in a row with total $80$ and a column with total $50$. Find its expected frequency.

::hint
**What you need:** $\dfrac{\text{row total}\times\text{column total}}{\text{grand total}}$.

::solution
If the two variables were independent, the cell's expected frequency would be $\dfrac{80\times50}{200}=20$.

So the expected frequency is $20$.

**Answer.** $20$.
:::

:::exercise
How many degrees of freedom does a $\chi^2$ test for independence have for a table with $3$ rows and $4$ columns?

::hint
**What you need:** $(r-1)(c-1)$.

::solution
The number of degrees of freedom is $(\text{rows}-1)(\text{columns}-1)=(3-1)(4-1)=2\times3$.

So the test has $6$ degrees of freedom.

**Answer.** $6$.
:::

:::exercise
A researcher wants to test whether the type of phone a student owns is related to the student's age group. State the null and alternative hypotheses.

::hint
**What you need:** $H_0$ for independence says the variables are independent.

::solution
For a $\chi^2$ test for independence, the null hypothesis says there is no relationship, and the alternative says there is one.

So $H_0$: type of phone is independent of age group; $H_1$: type of phone is not independent of age group.

**Answer.** $H_0$: independent; $H_1$: not independent.
:::

## Applied exercises

:::exercise
A shop manager expects the same number of customers each weekday. Over a week she counts $42$, $38$, $35$, $45$ and $40$ customers from Monday to Friday. Test her expectation at the $5\%$ level.

::hint
**What you need:** expected frequency $\dfrac{200}{5}=40$; $4$ degrees of freedom.

::solution
$H_0$: customers are equally likely on each weekday; $H_1$: they are not. The total is $200$, so each expected frequency is $40$, and the degrees of freedom are $5-1=4$.

$\chi^2_{\text{calc}}=\dfrac{2^2+(-2)^2+(-5)^2+5^2+0^2}{40}=\dfrac{58}{40}=1.45$, and the GDC gives p-value $\approx0.835$.

Since $0.835>0.05$, we do not reject $H_0$. So the data are consistent with the same number of customers each weekday.

**Answer.** $\chi^2=1.45$, p-value $\approx0.835$; do not reject $H_0$.
:::

:::exercise
Two teaching methods are compared. With method A, $45$ of $60$ students passed; with method B, $30$ of $60$ passed. Test at the $5\%$ level whether passing is independent of the method.

::hint
**What you need:** a $2\times2$ table; expected frequencies $37.5$ and $22.5$; $1$ degree of freedom.

::solution
$H_0$: passing is independent of the method; $H_1$: it is not. Out of $120$ students, $75$ passed and $45$ failed, so for each method the expected frequencies are $\dfrac{60\times75}{120}=37.5$ passes and $\dfrac{60\times45}{120}=22.5$ fails; df $=(2-1)(2-1)=1$.

$\chi^2_{\text{calc}}=\dfrac{7.5^2}{37.5}\times2+\dfrac{7.5^2}{22.5}\times2=3+5=8$, and the GDC gives p-value $\approx0.00468$.

Since $0.00468<0.05$, we reject $H_0$. So there is evidence that passing depends on the method; method A has the higher pass rate.

**Answer.** $\chi^2=8$, p-value $\approx0.00468$; reject $H_0$.
:::

:::exercise
A $t$-test comparing the mean reaction times of two groups gives a p-value of $0.18$. At the $5\%$ level, what can be concluded?

::hint
**What you need:** compare $0.18$ with $0.05$.

::solution
The p-value $0.18$ is greater than $0.05$, so we do not reject $H_0$.

This means there is not enough evidence that the mean reaction times of the two groups differ. It does not prove that they are equal; the sample may simply be too small to show a difference.

So we do not reject $H_0$.

**Answer.** Do not reject $H_0$; no significant evidence of a difference.
:::

:::exercise Challenge
In a $\chi^2$ test for independence, one expected frequency is $3.2$. Explain the problem and what should be done.

::hint
**What you need:** the condition on expected frequencies.

::solution
The $\chi^2$ test is only reliable when every expected frequency is at least $5$. A cell with expected frequency $3.2$ makes the test statistic unreliable, because small expected values make $\dfrac{(f_o-f_e)^2}{f_e}$ very large for small differences.

The usual remedy is to combine that row or column with a neighbouring one that makes sense in context, then recompute the expected frequencies and degrees of freedom, or to collect more data.

So the categories should be combined (or more data collected) before carrying out the test.

**Answer.** Combine categories or collect more data so that all expected frequencies are at least $5$.
:::

:::quiz
::mc
Pearson's $r=0.05$ for two variables. This means
A. a strong positive linear relationship
B. very little linear relationship
C. a strong negative linear relationship
D. that $x$ causes $y$
::key B
$r$ near $0$ means a weak or no linear relationship.

::mc
How many degrees of freedom does a $\chi^2$ test for independence on a $2\times3$ table have?
A. $6$
B. $5$
C. $3$
D. $2$
::key D
$(2-1)(3-1)=2$.

::mc
A row total is $60$, a column total is $40$ and the grand total is $120$. The expected frequency is
A. $20$
B. $40$
C. $24$
D. $100$
::key A
$\dfrac{60\times40}{120}=20$.

::mc
A test at the $5\%$ level gives a p-value of $0.012$. The conclusion is
A. do not reject $H_0$
B. accept $H_0$
C. reject $H_0$
D. the test is invalid
::key C
$0.012<0.05$.

::tf
Two judges' rankings give $r_s=-0.9$. Decide whether each statement is true or false.
a) The judges' rankings tend to be opposite.
b) The association is strong.
c) $r_s$ can be greater than $1$.
d) Spearman's coefficient uses ranks.
::key T T F T
$-1\le r_s\le1$.

::sa
Find the expected frequency for a row total $60$, column total $30$ and grand total $120$.
::key 15
$\dfrac{60\times30}{120}=15$.

::sa
How many degrees of freedom does a goodness-of-fit test with $5$ categories have?
::key 4
$5-1=4$.
:::
