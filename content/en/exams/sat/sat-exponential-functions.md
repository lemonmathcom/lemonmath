---
title: Exponential growth and decay
description: SAT Advanced Math: exponential models a·b^t, percent growth and decay, doubling and half-life, linear versus exponential, and equivalent forms.
minutes: 35
---

:::goals
- Write and interpret exponential models $f(t)=a\cdot b^t$ for growth and decay.
- Convert between a percent rate of change and the growth factor $b$.
- Tell linear change from exponential change in a table, a graph or a description.
- Use doubling time and half-life, and rewrite a model for a different time unit.
:::

Exponential functions are new to many students who learned math in Vietnam before grade 11, yet the SAT uses them in every module, mostly in real-life contexts: populations, savings, prices, medicines and depreciation. The good news is that almost every question comes back to one formula and one idea: **multiply by the same factor in each equal time step**.

## The exponential model

:::theorem Growth and decay
An exponential model has the form $f(t)=a\cdot b^t$ with $a>0$, $b>0$, $b\ne1$:
- $a=f(0)$ is the **initial value**;
- $b$ is the **growth factor**, the number you multiply by in each time step.

If the quantity changes by $r$ percent per step (written as a decimal):
- growth: $b=1+r$, for example $+4\%$ gives $b=1.04$;
- decay: $b=1-r$, for example $-15\%$ gives $b=0.85$.
:::

:::example Interpreting a model
The population of a town $t$ years after 2020 is modeled by $P(t)=1500(1.04)^t$. Which statement is the best interpretation of $1.04$ in this context?
A. The population increases by 1.04 people each year.
B. The population increases by 4% each year.
C. The population in 2020 was 1.04 thousand.
D. The population increases by 104% each year.

**Solution.** $1.04=1+0.04$ is the growth factor: each year the population is multiplied by $1.04$, so it grows by $4\%$. The answer is **B**. Option D confuses the factor with the rate.
:::

:::example Depreciation
A car was bought for 24,000 dollars. Its value decreases by 15% each year. To the nearest dollar, what is the value of the car after 3 years?

**Solution.** The factor is $1-0.15=0.85$:

$$V(3)=24{,}000(0.85)^3=24{,}000\cdot0.614125=14{,}739.$$

You type **14739**. Note that the car loses less money each year (3,600 dollars in the first year, less after that), because 15% is taken from a smaller value.
:::

## Linear or exponential?

:::note The key difference
- **Linear:** the quantity changes by the same **amount** in each equal step (add $m$).
- **Exponential:** the quantity changes by the same **factor** (or percent) in each equal step (multiply by $b$).
:::

:::example Reading a table
| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $y$ | $5$ | $10$ | $20$ | $40$ |

Which equation fits the table?
A. $y=5x+5$
B. $y=5\cdot2^x$
C. $y=2\cdot5^x$
D. $y=10x$

**Solution.** The differences $5, 10, 20$ are not constant, so the relationship is not linear. The ratios are all $2$, so it is exponential with factor $2$ and initial value $5$: $y=5\cdot2^x$. The answer is **B**.
:::

:::graph Linear $y=5+5x$ (straight line) and exponential $y=5\cdot2^x$ (curve) start at the same point
alt: A straight line and an upward curve both starting at (0, 5); the curve rises much faster after x equals 2
x: -1..5
y: -2..60
plot: 5 + 5x
plot: 5*2^x ; -1..3.6
point: (0, 5) "(0, 5)" left
point: (3, 40) "(3, 40)" left
point: (3, 20) "(3, 20)" right
:::

## Doubling time and half-life

When a quantity doubles every $d$ time units, or halves every $d$ time units, the exponent is the number of $d$-periods that have passed, $\dfrac{t}{d}$:

$$f(t)=a\cdot2^{\frac{t}{d}}\qquad\text{or}\qquad f(t)=a\left(\frac12\right)^{\frac{t}{d}}.$$

:::example Half-life
A patient takes 80 milligrams of a medicine. The amount in the body halves every 6 hours. How many milligrams remain after 18 hours?

**Solution.** $18$ hours is $\dfrac{18}{6}=3$ half-lives: $80\left(\dfrac12\right)^3=10$. You type **10**.
:::

## Equivalent forms of a model

The SAT may ask which form of a model shows a rate for a different time unit. Use the law $b^{kt}=\left(b^k\right)^t$.

:::example Changing the time unit
An investment grows according to $f(t)=200(1.21)^t$, where $t$ is in years. Which equivalent form shows the growth rate for each half-year?
A. $f(t)=200(1.105)^{2t}$
B. $f(t)=200(1.1)^{2t}$
C. $f(t)=200(1.21)^{\frac t2}$
D. $f(t)=100(1.21)^{2t}$

**Solution.** Since $1.1^2=1.21$, $(1.21)^t=(1.1^2)^t=(1.1)^{2t}$. In $2t$ half-years the value is multiplied by $1.1$ each half-year, that is $10\%$ per half-year. The answer is **B**. Option A halves the rate, which is wrong: two increases of $10.5\%$ give more than $21\%$.
:::

:::warning Common traps
- **Rate versus factor.** A decrease of $8\%$ is the factor $0.92$, not $0.08$.
- **Adding percents.** Two increases of $10\%$ give $1.1^2=1.21$, an increase of $21\%$, not $20\%$.
- **Forgetting the period.** "Doubles every 3 hours" means $2^{\frac t3}$, not $2^{3t}$.
- **Linear words.** "Increases by 50 each year" is linear; "increases by 50% each year" is exponential.
:::

:::tip Desmos for exponential models
Type `y=24000(0.85)^x` and click the curve at $x=3$ to read the value. To find when a quantity reaches a target, add the horizontal line, for example `y=50`, and click the intersection.
:::

:::terms
- exponential function | hàm số mũ
- initial value | giá trị ban đầu
- growth factor | hệ số tăng trưởng (cơ số)
- exponential growth / decay | tăng trưởng / suy giảm theo hàm mũ
- percent increase / decrease | tăng / giảm theo phần trăm
- compound interest | lãi kép
- doubling time | thời gian nhân đôi
- half-life | chu kì bán rã
- depreciation | khấu hao, mất giá
:::

## Similar exercises

:::exercise Multiple choice
The value, in dollars, of a laptop $t$ years after it was bought is $V(t)=900(0.92)^t$. Which statement is true?
A. The value decreases by 92% each year.
B. The value decreases by 8 dollars each year.
C. The value decreases by 8% each year.
D. The value was 828 dollars when it was bought.

::hint
**What you need:** $b=1-r$ for decay.

**Steps:**
1. $0.92=1-0.08$.
2. Check what $900$ means.

::solution
The factor $0.92$ means a decrease of $8\%$ per year: answer **C**. The value when bought is $V(0)=900$ dollars; 828 dollars is the value after one year.
:::

:::exercise Student-produced response
Mai deposits 2,000 dollars in an account that earns 5% interest per year, compounded once a year. To the nearest dollar, how much is in the account after 4 years?

::hint
**What you need:** $A=a(1+r)^t$.

**Steps:**
1. $a=2{,}000$, $b=1.05$, $t=4$.
2. Compute and round.

::solution
$2{,}000(1.05)^4\approx2{,}431.01$, so about $2{,}431$ dollars.
:::

:::exercise Student-produced response
| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $f(x)$ | $162$ | $54$ | $18$ | $6$ |

The function $f$ is exponential. What is the value of $f(4)$?

::hint
**What you need:** find the constant ratio between consecutive values.

**Steps:**
1. $\dfrac{54}{162}=\dfrac13$.
2. Multiply $f(3)$ by the same factor.

::solution
Each value is $\dfrac13$ of the previous one, so $f(4)=6\cdot\dfrac13=2$.
:::

:::exercise Student-produced response
A culture starts with 400 bacteria, and the number doubles every 3 hours. How many bacteria are there after 12 hours?

::hint
**What you need:** $f(t)=a\cdot2^{\frac{t}{d}}$.

**Steps:**
1. $\dfrac{12}{3}=4$ doubling periods.
2. Compute $400\cdot2^4$.

::solution
$400\cdot2^4=400\cdot16=6{,}400$ bacteria.
:::

:::exercise Multiple choice
Which of the following functions models exponential decay?
A. $y=3(1.2)^x$
B. $y=0.8x+3$
C. $y=3(0.8)^x$
D. $y=3x^{0.8}$

::hint
**What you need:** exponential means the variable is in the exponent; decay means $0<b<1$.

**Steps:**
1. Discard the functions whose variable is not in the exponent.
2. Check the base.

::solution
B is linear and D is a power function. A has $b=1.2>1$, which is growth. C has $b=0.8<1$: answer **C**.
:::

## Application exercises

:::exercise Two price increases
The price of a ticket increases by 10% one year and by 10% again the next year. By what percent did the price increase over the two years?

::hint
**What you need:** multiply the factors.

**Steps:**
1. $1.1\cdot1.1$.
2. Convert the factor back to a percent.

::solution
$1.1^2=1.21$, so the price increased by $21\%$ in total, not $20\%$. For example, 100 dollars becomes 110 dollars, then 121 dollars.
:::

:::exercise Linear or exponential pay
Plan A pays 1,000 dollars plus 100 dollars for each month worked. Plan B pays $10\cdot2^m$ dollars after $m$ months. After how many whole months does plan B first pay more than plan A?

::hint
**What you need:** compare $1{,}000+100m$ with $10\cdot2^m$ month by month, or graph both.

**Steps:**
1. Compute both plans for $m=6, 7, 8$.
2. Find the first month where B is larger.

::solution
| $m$ | $6$ | $7$ | $8$ |
|---|---|---|---|
| Plan A | $1{,}600$ | $1{,}700$ | $1{,}800$ |
| Plan B | $640$ | $1{,}280$ | $2{,}560$ |

Plan B first pays more after $8$ months. Exponential growth starts slowly but eventually overtakes any linear growth.
:::

:::exercise Finding the factor
A population follows $f(t)=a\cdot b^t$, where $t$ is in years. At $t=0$ there are 500 animals and at $t=2$ there are 720. How many animals does the model predict at $t=5$? Round to the nearest whole number.

::hint
**What you need:** $a=f(0)$; divide $f(2)$ by $f(0)$ to get $b^2$.

**Steps:**
1. $b^2=\dfrac{720}{500}=1.44$.
2. $b=1.2$; compute $500(1.2)^5$.

::solution
$a=500$ and $b^2=1.44$, so $b=1.2$ (a growth factor is positive). Then $f(5)=500(1.2)^5=1{,}244.16$, about $1{,}244$ animals.
:::

:::exercise Challenge
A patient is given 200 milligrams of a medicine. Each hour, the body removes 20% of the amount present at the start of that hour. After how many whole hours is the amount first less than 50 milligrams?

::hint
**What you need:** the model $200(0.8)^n$ and a table or Desmos.

**Steps:**
1. Solve $200(0.8)^n<50$, that is $(0.8)^n<0.25$.
2. Test $n=6$ and $n=7$.

::solution
$200(0.8)^6\approx52.4$ milligrams, still above 50; $200(0.8)^7\approx41.9$ milligrams. The amount first falls below 50 milligrams after $7$ hours.
:::

:::quiz
::mc
The function $f$ is defined by $f(x)=3\cdot2^x$. What is the value of $f(4)$?
A. $24$
B. $48$
C. $96$
D. $11$
::key B
$3\cdot2^4=3\cdot16=48$. Option A computes $3\cdot2\cdot4$; option C is $3\cdot2^5$, one doubling too many.

::mc
A quantity is modeled by $y=50(0.7)^t$. Which statement is true?
A. It increases by 70% per unit of time.
B. It decreases by 70% per unit of time.
C. It increases by 30% per unit of time.
D. It decreases by 30% per unit of time.
::key D
$0.7=1-0.3$, a decrease of $30\%$ per unit of time.

::mc
A quantity starts at 4 and triples every day. What is its value after 3 days?
A. $12$
B. $36$
C. $108$
D. $324$
::key C
$4\cdot3^3=108$. Option A is $4\cdot3$, the linear mistake.

::mc
Which expression gives the value of 500 dollars after $t$ years if it grows by 2% each year?
A. $500(1.02)^t$
B. $500(0.02)^t$
C. $500+0.02t$
D. $500(1.2)^t$
::key A
The factor is $1+0.02=1.02$. Option D uses $20\%$.

::tf
The value, in dollars, of a machine $t$ years after it was bought is $V(t)=8{,}000(0.9)^t$.
a) The machine cost 8,000 dollars when it was bought.
b) The value decreases by 10% each year.
c) After 2 years the value is 6,480 dollars.
d) The machine loses 800 dollars of value every year.
::key T T T F
a) True: $V(0)=8{,}000$. b) True: $0.9=1-0.1$. c) True: $8{,}000\cdot0.81=6{,}480$. d) False: it loses 800 dollars only in the first year, then less each year.

::sa
If $3\cdot2^x=96$, what is the value of $x$?
::key 5
$2^x=32=2^5$, so $x=5$.

::sa
A sample of 64 grams has a half-life of 5 days. How many grams remain after 15 days?
::key 8
$15$ days is $3$ half-lives: $64\left(\dfrac12\right)^3=8$.
:::
