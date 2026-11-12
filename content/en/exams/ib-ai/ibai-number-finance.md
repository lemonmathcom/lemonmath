---
title: Number, approximation and financial maths
description: IB Maths AI: significant figures, bounds and percentage error, arithmetic and geometric sequences in context, compound interest, depreciation and loans.
minutes: 50
---

:::goals
- Round to significant figures, write numbers in standard form, and find upper and lower bounds and percentage errors.
- Use arithmetic and geometric sequences and series to model saving, growth and decay.
- Calculate compound interest and depreciation, by formula and with the TVM solver.
- Find loan repayments and the total interest paid, and compare financial offers.
:::

Two banks offer you a savings account. One pays $6\%$ per year, added once a year. The other pays $5.85\%$, but adds the interest every month. Which one leaves you with more money after eight years? The numbers are close, and the answer is not obvious until you calculate it.

Questions like this are why IB Maths AI starts with number and money. Being able to say exactly what a loan costs, or how much a measurement could be wrong by, is useful long after the exam. The good news is that the mathematics is mostly sequences you already know, with a calculator doing the heavy work. What you need to learn is how to set things up carefully and how to report the answer sensibly.

## Approximation and error

Rounding to **significant figures** keeps the digits that matter: $0.0034567$ to three significant figures is $0.00346$, and $85{,}764$ is $85{,}800$. Very large and very small numbers are written in **standard form** $a\times10^k$ with $1\le a<10$, such as $0.000452=4.52\times10^{-4}$.

A measurement rounded to the nearest unit could be up to half a unit away from the true value. So a length of $12.4$ cm, measured to the nearest millimetre, lies in $12.35\le L<12.45$: these are the **lower and upper bounds**. When an estimate $v_A$ is compared with an exact value $v_E$,
$$\text{percentage error}=\left|\frac{v_A-v_E}{v_E}\right|\times100\%.$$

:::example Percentage error
A student estimates the mass of a bag as $4.8$ kg. Its actual mass is $5.0$ kg. What is the percentage error?
A. $4.2\%$
B. $0.2\%$
C. $4\%$
D. $96\%$

**Solution.** The error is the difference between the estimate and the exact value, compared with the **exact** value:
$$\left|\frac{4.8-5.0}{5.0}\right|\times100\%=\frac{0.2}{5.0}\times100\%=4\%.$$

So the percentage error is $4\%$, answer **C**. Option A divides by the estimate $4.8$ instead of the exact value.
:::

## Sequences in context

When something grows by the **same amount** each step, it is arithmetic; when it grows by the **same factor**, it is geometric.

| | Arithmetic | Geometric |
|---|---|---|
| $n$th term | $u_n=u_1+(n-1)d$ | $u_n=u_1r^{n-1}$ |
| Sum of $n$ terms | $S_n=\dfrac n2\big(2u_1+(n-1)d\big)$ | $S_n=\dfrac{u_1(r^n-1)}{r-1}$ |

:::example Saving a little more each month
Lan saves $200$ dollars in the first month and $25$ dollars more each month than the month before. How much has she saved in total after $2$ years?

**Solution.** The monthly amounts form an arithmetic sequence with $u_1=200$ and $d=25$, and $2$ years is $n=24$ months.

The total is
$$S_{24}=\frac{24}{2}\big(2(200)+23(25)\big)=12(400+575)=11{,}700.$$

So Lan has saved $11{,}700$ dollars after $2$ years.
:::

## Compound interest and depreciation

If a present value $PV$ earns $r\%$ per year, compounded $k$ times a year, then after $n$ years
$$FV=PV\left(1+\frac{r}{100k}\right)^{kn}.$$
Depreciation works the same way with a factor below $1$: a value that falls by $r\%$ per year becomes $PV\left(1-\dfrac{r}{100}\right)^n$.

The **TVM solver** on the GDC does these calculations. Money you pay out is entered as negative and money you receive as positive. The inputs are $N$ (number of periods), $I\%$ (annual rate), $PV$, $PMT$ (regular payment), $FV$, $P/Y$ (payments per year) and $C/Y$ (compounding periods per year). In the exam, write these inputs down: they are your working.

:::example How often interest is added
$2000$ dollars is invested at $3\%$ per year for $10$ years. Find the final value if interest is compounded:
a) annually;
b) quarterly.

**Solution.** a) Compounded annually, $FV=2000(1.03)^{10}\approx2687.83$ dollars.

b) Compounded quarterly, the rate per quarter is $\dfrac{3}{400}$ and there are $40$ quarters, so $FV=2000\left(1+\dfrac{3}{400}\right)^{40}\approx2696.70$ dollars.

So compounding more often gives slightly more: $2696.70$ dollars instead of $2687.83$ dollars.
:::

:::example A car loses value
A car bought for $24{,}000$ dollars depreciates by $15\%$ per year. What is it worth after $5$ years?
A. $6000.00$ dollars
B. $10{,}648.93$ dollars
C. $12{,}526.98$ dollars
D. $20{,}400.00$ dollars

**Solution.** Each year the value is multiplied by $1-0.15=0.85$, so after $5$ years it is
$$24{,}000(0.85)^5\approx10{,}648.93\text{ dollars}.$$

So the car is worth about $10{,}648.93$ dollars, answer **B**. Option A subtracts $15\%$ of the original price each year, which is straight-line depreciation, not what the question describes.
:::

## Loans and amortization

A loan is repaid in equal payments that cover the interest and slowly reduce the amount owed; this is called **amortization**. With the TVM solver, enter the loan as a positive $PV$, set $FV=0$, and solve for $PMT$. The total interest is the total of all payments minus the amount borrowed.

:::example A car loan
Minh borrows $15{,}000$ dollars at $6\%$ per year, compounded monthly, and repays it with equal monthly payments over $5$ years. Find the monthly payment and the total interest paid.

**Solution.** Enter $N=60$, $I\%=6$, $PV=15{,}000$, $FV=0$, $P/Y=C/Y=12$ and solve: $PMT\approx-289.99$, so each payment is $289.99$ dollars.

The total paid is $60\times289.99=17{,}399.40$ dollars, so the interest is $17{,}399.40-15{,}000=2399.40$ dollars.

So Minh pays $289.99$ dollars a month and about $2399.40$ dollars of interest in total.
:::

:::warning Common traps
- **Percentage error:** divide by the exact value, not the estimate.
- **Rate per period:** with monthly compounding, the rate per period is $\dfrac{r}{12}\%$ and the number of periods is $12n$.
- **Signs in the TVM solver:** money out is negative, money in is positive.
- **Rounding money:** two decimal places, and only at the end.
- **"After $n$ years" in sequences:** check whether the first term is year $0$ or year $1$.
:::

:::terms
- significant figures | chữ số có nghĩa
- standard form | dạng chuẩn (kí hiệu khoa học)
- upper / lower bound | cận trên / cận dưới
- percentage error | sai số phần trăm
- compound interest | lãi kép
- depreciation | khấu hao
- present / future value | giá trị hiện tại / giá trị tương lai
- loan / repayment | khoản vay / khoản trả góp
- amortization | trả dần (khấu trừ nợ)
- inflation | lạm phát
:::

## Similar exercises

:::exercise
a) Write $0.000452$ in standard form.
b) Round $85{,}764$ to three significant figures.

::hint
**What you need:** standard form is $a\times10^k$ with $1\le a<10$.

::solution
a) Moving the decimal point $4$ places to the right gives $4.52$, so $0.000452=4.52\times10^{-4}$.

b) The first three significant figures are $8$, $5$ and $7$; the next digit, $6$, rounds the $7$ up, so $85{,}764\approx85{,}800$.

So the answers are $4.52\times10^{-4}$ and $85{,}800$.

**Answer.** a) $4.52\times10^{-4}$; b) $85{,}800$.
:::

:::exercise
The side of a square is $12.4$ cm, measured to the nearest millimetre. Find the lower and upper bounds of its perimeter.

::hint
**What you need:** the side lies in $12.35\le s<12.45$.

::solution
A measurement to the nearest millimetre can be up to $0.05$ cm away, so the side lies in $12.35\le s<12.45$.

The perimeter is $4s$, so it lies in $4(12.35)\le P<4(12.45)$, that is $49.4\le P<49.8$.

So the lower bound is $49.4$ cm and the upper bound is $49.8$ cm.

**Answer.** $49.4$ cm and $49.8$ cm.
:::

:::exercise
A crowd is estimated at $250$ people; the exact number is $236$. Find the percentage error.

::hint
**What you need:** divide by the exact value $236$.

::solution
We compare the estimate $250$ with the exact value $236$, and divide by the exact value. The percentage error is $\left|\dfrac{250-236}{236}\right|\times100\%=\dfrac{14}{236}\times100\%\approx5.93\%$.

So the estimate is about $5.93\%$ too high.

**Answer.** About $5.93\%$.
:::

:::exercise
An arithmetic sequence has $u_1=7$ and $d=4$. Find $u_{20}$ and $S_{20}$.

::hint
**What you need:** $u_n=u_1+(n-1)d$ and $S_n=\dfrac n2(u_1+u_n)$.

::solution
From the first term to the $20$th there are $19$ steps of $4$, so $u_{20}=7+19(4)=83$.

The sum of the first $20$ terms is $S_{20}=\dfrac{20}{2}(7+83)=10\times90=900$.

So $u_{20}=83$ and $S_{20}=900$.

**Answer.** $u_{20}=83$, $S_{20}=900$.
:::

:::exercise
A town of $12{,}000$ people grows by $2.5\%$ each year. Estimate its population after $8$ years, to three significant figures.

::hint
**What you need:** a geometric model with factor $1.025$.

::solution
Each year the population is multiplied by $1.025$, so after $8$ years it is $12{,}000(1.025)^8\approx14{,}620.8$.

To three significant figures this is $14{,}600$ people.

So the population after $8$ years is about $14{,}600$.

**Answer.** About $14{,}600$.
:::

## Applied exercises

:::exercise
Money is invested at $5\%$ per year, compounded annually. After how many whole years will it first be at least double the amount invested?

::hint
**What you need:** solve $1.05^n\ge2$.

::solution
After $n$ years the investment is multiplied by $1.05^n$, so we need $1.05^n\ge2$.

Taking logarithms, $n\ge\dfrac{\ln2}{\ln1.05}\approx14.21$. Since interest is added only at the end of each year, we need $15$ whole years.

So the investment first doubles after $15$ years.

**Answer.** $15$ years.
:::

:::exercise
A family borrows $180{,}000$ dollars to buy a flat, at $4.5\%$ per year compounded monthly, repaid monthly over $20$ years. Find the monthly payment and the total interest.

::hint
**What you need:** $N=240$, $I\%=4.5$, $PV=180{,}000$, $FV=0$, $P/Y=C/Y=12$.

::solution
With $N=240$, $I\%=4.5$, $PV=180{,}000$, $FV=0$ and $P/Y=C/Y=12$, the TVM solver gives $PMT\approx-1138.77$, so each payment is $1138.77$ dollars.

The total paid is $240\times1138.77=273{,}304.80$ dollars, so the interest is $273{,}304.80-180{,}000=93{,}304.80$ dollars.

So the family pays $1138.77$ dollars a month and about $93{,}304.80$ dollars in interest, more than half the amount borrowed.

**Answer.** $1138.77$ dollars per month; about $93{,}304.80$ dollars of interest.
:::

:::exercise
Prices rise by $3\%$ each year. What is the **real value**, in today's money, of $10{,}000$ dollars received in $5$ years?

::hint
**What you need:** divide by $1.03^5$.

::solution
After $5$ years, an item costing $1$ dollar today will cost $1.03^5$ dollars, so money loses value at the same rate.

The real value is $\dfrac{10{,}000}{1.03^5}\approx8626.09$ dollars.

So $10{,}000$ dollars in $5$ years will buy about as much as $8626.09$ dollars today.

**Answer.** About $8626.09$ dollars.
:::

:::exercise Challenge
Return to the two banks at the start. You invest $3000$ dollars for $8$ years. Bank A pays $6\%$ per year compounded annually; bank B pays $5.85\%$ per year compounded monthly. Which bank gives more, and by how much?

::hint
**What you need:** compare $3000(1.06)^8$ with $3000\left(1+\dfrac{0.0585}{12}\right)^{96}$.

::solution
Bank A gives $3000(1.06)^8\approx4781.54$ dollars.

Bank B adds interest $96$ times, each time at $\dfrac{5.85}{12}\%$, so it gives $3000\left(1+\dfrac{0.0585}{12}\right)^{96}\approx4784.95$ dollars.

So bank B gives about $3.41$ dollars more: the more frequent compounding slightly outweighs the lower rate.

**Answer.** Bank B, by about $3.41$ dollars.
:::

:::quiz
::mc
What is $0.0034567$ rounded to three significant figures?
A. $0.003$
B. $0.0035$
C. $0.00345$
D. $0.00346$
::key D
The fourth significant figure, $6$, rounds the $5$ up.

::mc
A length of $8$ cm is measured as $7.6$ cm. What is the percentage error?
A. $5\%$
B. $0.4\%$
C. $5.3\%$
D. $95\%$
::key A
$\dfrac{0.4}{8}\times100\%=5\%$.

::mc
Which expression gives the value of $1000$ dollars after $3$ years at $4\%$ per year compounded monthly?
A. $1000(1.04)^{36}$
B. $1000\left(1+\dfrac{0.04}{12}\right)^{36}$
C. $1000\left(1+\dfrac{0.04}{12}\right)^{3}$
D. $1000(1+0.04\times3)$
::key B
$12$ periods per year for $3$ years, at $\dfrac{4}{12}\%$ each.

::mc
A machine worth $8000$ dollars depreciates by $10\%$ per year. Its value after $2$ years is
A. $6400$ dollars
B. $7200$ dollars
C. $6480$ dollars
D. $6560$ dollars
::key C
$8000(0.9)^2=6480$.

::tf
An arithmetic sequence has $u_1=5$ and $d=3$. Decide whether each statement is true or false.
a) $u_2=8$.
b) $u_{10}=32$.
c) $S_{10}=185$.
d) The sequence is geometric.
::key T T T F
$S_{10}=5(5+32)=185$; the terms increase by a constant difference, not a constant ratio.

::sa
Find $u_{10}$ for the arithmetic sequence $3,\ 7,\ 11,\ \dots$
::key 39
$3+9(4)=39$.

::sa
An annual rate of $6\%$ is compounded monthly. What is the rate per month, in percent?
::key 0.5
$\dfrac{6}{12}=0.5$.
:::
