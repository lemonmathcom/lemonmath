---
title: Number and algebra: sequences, logarithms, binomial, proof
description: IB Maths AA topic 1: arithmetic and geometric sequences, compound interest, exponents and logarithms, the binomial theorem and simple proofs, in exam style.
minutes: 45
---

:::goals
- Use the formulas for arithmetic and geometric sequences and series, including the sum to infinity.
- Solve compound interest and growth problems on Paper 2.
- Apply the laws of exponents and logarithms, and solve exponential and logarithmic equations exactly.
- Find a specific term or coefficient with the binomial theorem.
- Write a short deductive proof in the "show that" style.
:::

Topic 1 rarely fills a long Section B question on its own, but it appears in almost every paper: a sequence question in Section A, a logarithm step inside a calculus question, a binomial coefficient in a probability question. The formulas are in the formula booklet; the marks come from choosing the right one, setting up the equations cleanly and writing exact answers on Paper 1.

## Arithmetic and geometric sequences

| | Arithmetic | Geometric |
|---|---|---|
| $n$th term | $u_n=u_1+(n-1)d$ | $u_n=u_1r^{n-1}$ |
| Sum of $n$ terms | $S_n=\dfrac n2\big(2u_1+(n-1)d\big)=\dfrac n2(u_1+u_n)$ | $S_n=\dfrac{u_1\left(r^n-1\right)}{r-1}$, $r\ne1$ |
| Sum to infinity | does not exist (unless all terms are $0$) | $S_\infty=\dfrac{u_1}{1-r}$, only when $|r|<1$ |

When two terms are given, write two equations in $u_1$ and $d$ (or $u_1$ and $r$) and solve them. For geometric sequences, dividing one equation by the other removes $u_1$.

:::example Two terms of an arithmetic sequence
In an arithmetic sequence, $u_3=11$ and $u_8=26$.

(a) Find the common difference and the first term. [3 marks]
(b) Find $S_{20}$. [2 marks]

**Solution.** (a) $u_1+2d=11$ and $u_1+7d=26$. Subtracting: $5d=15$, so $d=3$ and $u_1=5$.

(b) $S_{20}=\dfrac{20}{2}\big(2\cdot5+19\cdot3\big)=10\cdot67=670$.
:::

:::example A sum to infinity
The first term of a geometric sequence is $48$, and the sum to infinity is $64$.

(a) Find the common ratio. [2 marks]
(b) Find the fourth term. [2 marks]

**Solution.** (a) $\dfrac{48}{1-r}=64$, so $1-r=\dfrac34$ and $r=\dfrac14$. This satisfies $|r|<1$, as it must.

(b) $u_4=48\left(\dfrac14\right)^3=\dfrac{48}{64}=\dfrac34$.
:::

## Compound interest and growth (Paper 2)

Money invested at an annual rate of $r\%$, compounded $k$ times per year, grows to
$$FV=PV\left(1+\frac{r}{100k}\right)^{kn}$$
after $n$ years. On Paper 2 you can use the financial solver of your GDC, but write the formula with the numbers substituted: that line earns the method mark.

:::example Monthly compounding
Mai invests $5000$ dollars at an annual interest rate of $3.6\%$, compounded monthly. Find the value of the investment after $4$ years, to the nearest dollar. [3 marks]

**Solution.** $5000\left(1+\dfrac{3.6}{1200}\right)^{12\cdot4}=5000(1.003)^{48}\approx5773.18$, so the investment is worth $5773$ dollars.
:::

## Exponents and logarithms

:::note The laws you use most
$$a^xa^y=a^{x+y},\quad\left(a^x\right)^y=a^{xy},\quad\log_a(xy)=\log_ax+\log_ay,\quad\log_a\frac xy=\log_ax-\log_ay,$$
$$\log_a\left(x^m\right)=m\log_ax,\qquad\log_ax=\frac{\log_bx}{\log_ba},\qquad a^x=b\iff x=\log_ab.$$
:::

:::example An exponential equation, exactly
Solve $2^{x+1}=5^x$, giving your answer in the form $\dfrac{\ln a}{\ln b}$, where $a,b\in\mathbb{Q}$. [4 marks]

**Solution.** Take natural logarithms: $(x+1)\ln2=x\ln5$. Collect the $x$ terms: $x(\ln5-\ln2)=\ln2$, so
$$x=\frac{\ln2}{\ln5-\ln2}=\frac{\ln2}{\ln2.5}.$$
(On Paper 2, $x\approx0.756$.)
:::

:::example A logarithmic equation with a false root
Solve $\log_3x+\log_3(x-8)=2$. [5 marks]

**Solution.** $\log_3\big(x(x-8)\big)=2$, so $x^2-8x=9$, that is $(x-9)(x+1)=0$. The value $x=-1$ is rejected, because $\log_3x$ is not defined for $x\le0$ (this is the R mark). The solution is $x=9$.
:::

## The binomial theorem

$$(a+b)^n=\sum_{r=0}^{n}\binom nr a^{n-r}b^r,\qquad\binom nr=\frac{n!}{r!(n-r)!}.$$
To find one term, write the general term, then decide which $r$ gives the power you want. Keep the signs and coefficients inside the brackets.

:::example A coefficient and a constant term
(a) Find the coefficient of $x^3$ in the expansion of $(2x-3)^5$. [3 marks]
(b) Find the term independent of $x$ in the expansion of $\left(x^2+\dfrac2x\right)^6$. [4 marks]

**Solution.** (a) The term with $x^3$ is $\dbinom53(2x)^3(-3)^2=10\cdot8x^3\cdot9=720x^3$. The coefficient is $720$.

(b) The general term is $\dbinom6r\left(x^2\right)^{6-r}\left(\dfrac2x\right)^r=\dbinom6r2^rx^{12-3r}$. Independent of $x$ when $12-3r=0$, so $r=4$: $\dbinom64\cdot2^4=15\cdot16=240$.
:::

## Proof

At SL, proofs are short and deductive: start from what is known, use algebra, and end with the statement you were asked to prove. Write "LHS $=$" and transform it step by step into the right-hand side, or show that a quantity is a multiple of a number by factoring it out.

:::example A "show that" proof
Show that the sum of any three consecutive integers is a multiple of $3$. [3 marks]

**Solution.** Let the integers be $n-1$, $n$, $n+1$, where $n\in\mathbb{Z}$. Their sum is $(n-1)+n+(n+1)=3n$. Since $n$ is an integer, $3n$ is a multiple of $3$.

Notice the three parts: define the objects in algebra, simplify, and state the conclusion in words.
:::

:::warning Common traps
- **Using $S_\infty$ when $|r|\ge1$.** Check the condition; some questions ask for exactly this check.
- **Forgetting the $-1$** in $u_1+(n-1)d$ or $u_1r^{n-1}$.
- **Inventing log laws.** $\log(x+y)\ne\log x+\log y$, and $\dfrac{\log x}{\log y}\ne\log\dfrac xy$.
- **Not rejecting invalid roots** of logarithmic equations, or rejecting them without a reason.
- **Losing the sign** in binomial terms: $(-3)^2=9$, but $(-3)^3=-27$.
- **Circular proofs:** in a "show that", never start from the statement you have to prove.
:::

:::terms
- arithmetic sequence, common difference | cấp số cộng, công sai
- geometric sequence, common ratio | cấp số nhân, công bội
- sum to infinity | tổng vô hạn
- compound interest, compounded monthly | lãi kép, tính lãi hằng tháng
- logarithm, change of base | logarit, đổi cơ số
- binomial theorem, binomial coefficient | nhị thức Newton, hệ số nhị thức
- term independent of $x$ | số hạng không chứa $x$
- deductive proof | chứng minh suy diễn
:::

## Similar exercises

:::exercise Arithmetic sequence
An arithmetic sequence has first term $7$ and common difference $4$.
(a) Find $n$ such that $u_n=95$. [2 marks]
(b) Find the sum of the first $n$ terms for this value of $n$. [2 marks]

::hint
**What you need:** $u_n=7+4(n-1)$ and $S_n=\dfrac n2(u_1+u_n)$.

::solution
(a) $7+4(n-1)=95$ gives $n-1=22$, so $n=23$.

(b) $S_{23}=\dfrac{23}{2}(7+95)=23\cdot51=1173$.
:::

:::exercise Geometric sequence
In a geometric sequence, $u_2=12$ and $u_5=96$. Find the common ratio, the first term and $S_{10}$. [5 marks]

::hint
**What you need:** divide $u_1r^4=96$ by $u_1r=12$.

::solution
$r^3=8$, so $r=2$ and $u_1=6$. $S_{10}=\dfrac{6\left(2^{10}-1\right)}{2-1}=6\cdot1023=6138$.
:::

:::exercise Logarithmic equation
Solve $\log_2(x+3)+\log_2(x-3)=4$. [5 marks]

::hint
**What you need:** combine into $\log_2\big((x+3)(x-3)\big)$, then write $4=\log_216$.

**Steps:**
1. $x^2-9=16$.
2. Check which root makes both logarithms defined.

::solution
$x^2=25$, so $x=\pm5$. $x=-5$ is rejected because $x-3<0$. The solution is $x=5$.
:::

:::exercise Binomial coefficient
Find the coefficient of $x^2$ in the expansion of $(1+3x)^6$. [3 marks]

::hint
**What you need:** the term $\dbinom62(3x)^2$.

::solution
$\dbinom62\cdot9x^2=15\cdot9x^2=135x^2$. The coefficient is $135$.
:::

:::exercise Proof
Show that $(2n+1)^2-(2n-1)^2$ is a multiple of $8$ for every integer $n$. [3 marks]

::hint
**What you need:** expand, or use $a^2-b^2=(a-b)(a+b)$.

::solution
$(2n+1)^2-(2n-1)^2=\big((2n+1)-(2n-1)\big)\big((2n+1)+(2n-1)\big)=2\cdot4n=8n$, which is a multiple of $8$ because $n$ is an integer.
:::

## Application exercises

:::exercise A growing town
A town has $12{,}000$ residents, and its population grows by $2.5\%$ each year. After how many complete years will the population first exceed $20{,}000$? [4 marks]

::hint
**What you need:** solve $12{,}000(1.025)^n>20{,}000$ with logarithms or a GDC table.

::solution
$1.025^n>\dfrac53$, so $n>\dfrac{\ln(5/3)}{\ln1.025}\approx20.7$. The population first exceeds $20{,}000$ after $21$ years. Check: $12{,}000(1.025)^{20}\approx19{,}663$ and $12{,}000(1.025)^{21}\approx20{,}155$.
:::

:::exercise Salary scale
A teacher's starting salary is $32{,}000$ dollars per year, and it rises by $1500$ dollars every year. Find the total amount earned in the first $10$ years. [3 marks]

::hint
**What you need:** an arithmetic series with $u_1=32{,}000$ and $d=1500$.

::solution
$S_{10}=\dfrac{10}{2}\big(2\cdot32000+9\cdot1500\big)=5\cdot77{,}500=387{,}500$ dollars.
:::

:::exercise A bouncing ball
A ball is dropped from a height of $10$ meters. After each bounce it rises to $70\%$ of its previous height. Find the total vertical distance it travels before coming to rest. [5 marks]

::hint
**What you need:** the ball falls $10$ meters, then every rise is followed by an equal fall; the rises form a geometric series with first term $7$ and ratio $0.7$.

::solution
Total $=10+2\cdot\dfrac{7}{1-0.7}=10+\dfrac{14}{0.3}\approx56.7$ meters.
:::

:::exercise Challenge
The series $1+2x+4x^2+8x^3+\dots$ is geometric.
(a) Find the values of $x$ for which the sum to infinity exists. [2 marks]
(b) Find $x$ if the sum to infinity is $4$. [3 marks]

::hint
**What you need:** the common ratio is $2x$.

::solution
(a) $|2x|<1$, that is $-\dfrac12<x<\dfrac12$.

(b) $\dfrac{1}{1-2x}=4$, so $1-2x=\dfrac14$ and $x=\dfrac38$, which lies in the interval from (a).
:::

:::quiz
::mc
What is the value of $\log_232+\log_3\dfrac19$?
A. $7$
B. $3$
C. $\dfrac{32}{9}$
D. $-3$
::key B
$\log_232=5$ and $\log_3\dfrac19=-2$.

::mc
A geometric sequence begins $3, -6, 12, \dots$ What is $u_6$?
A. $96$
B. $-192$
C. $192$
D. $-96$
::key D
$u_6=3(-2)^5=-96$.

::mc
What is the coefficient of $x^3$ in the expansion of $(1+x)^7$?
A. $35$
B. $21$
C. $7$
D. $343$
::key A
$\dbinom73=35$.

::mc
What is the sum to infinity of $18+12+8+\dots$?
A. $38$
B. $27$
C. $54$
D. $36$
::key C
$r=\dfrac23$, so $S_\infty=\dfrac{18}{1/3}=54$.

::tf
A sequence is defined by $u_n=5+3n$ for $n\ge1$.
a) The sequence is arithmetic.
b) $u_1=8$.
c) The common difference is $5$.
d) $S_{10}=215$.
::key T T F T
a) True: the difference between consecutive terms is constant. b) True. c) False: it is $3$. d) True: $u_{10}=35$ and $S_{10}=\dfrac{10}{2}(8+35)=215$.

::sa
Solve $3^x=81$.
::key 4
$81=3^4$.

::sa
Find the sum $2+5+8+\dots+29$.
::key 155
Ten terms ($29=2+3(n-1)$ gives $n=10$): $\dfrac{10}{2}(2+29)=155$.
:::
