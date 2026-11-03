---
title: "Revision: trigonometry, exponentials, logarithms and sequences"
description: Revise trigonometric functions and equations, exponentials, logarithms and growth models, arithmetic and geometric sequences and limits, in exam style.
minutes: 40
---

:::goals
- Use the trigonometric identities correctly, solve basic trigonometric equations and count solutions in an interval.
- Manipulate powers and logarithms; solve exponential and logarithmic equations and inequalities with their conditions.
- Set up and solve exponential growth and decay models (compound interest, bacteria, a drug in the blood).
- Use the formulas for arithmetic and geometric sequences, the sum to infinity and basic limits.
:::

These grade 11 topics rarely form one long question, but they are scattered all over the paper. Part I usually has two to four short questions: a trigonometric identity, a logarithmic equation, a term of a sequence, a limit. Part II or Part III often has a real-life model using an exponential or trigonometric function. Altogether these topics are usually worth about $1$ to $1.5$ marks.

This revision lesson recalls the formulas of each area briefly, then works examples exactly like exam questions.

## Trigonometric functions and equations

:::theorem Identities and basic equations
- $\sin^2x+\cos^2x=1$; $\cos2x=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1$; $\sin2x=2\sin x\cos x$.
- $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$.
- $\sin x=\sin\alpha\iff x=\alpha+k2\pi$ or $x=\pi-\alpha+k2\pi$; $\cos x=\cos\alpha\iff x=\pm\alpha+k2\pi$; $\tan x=\tan\alpha\iff x=\alpha+k\pi$ ($k\in\mathbb{Z}$).
- The functions $y=A\sin(\omega x+\varphi)$ and $y=A\cos(\omega x+\varphi)$ have period $\dfrac{2\pi}{|\omega|}$ and take values in $[-|A|, |A|]$.
:::

When a question asks for the number of solutions in an interval, write the general solution and try each integer $k$, or look at the unit circle.

:::example Multiple choice: a basic cosine equation
The solutions of the equation $2\cos x+1=0$ are

**A.** $x=\pm\dfrac{2\pi}{3}+k2\pi$, $k\in\mathbb{Z}$.

**B.** $x=\pm\dfrac{\pi}{3}+k2\pi$, $k\in\mathbb{Z}$.

**C.** $x=\dfrac{2\pi}{3}+k\pi$, $k\in\mathbb{Z}$.

**D.** $x=\pm\dfrac{2\pi}{3}+k\pi$, $k\in\mathbb{Z}$.

**Solution.** We write it in the form $\cos x=\cos\alpha$, using $\cos\dfrac{2\pi}{3}=-\dfrac12$:

$$2\cos x+1=0\iff\cos x=-\frac12=\cos\frac{2\pi}{3}\iff x=\pm\frac{2\pi}{3}+k2\pi.$$

The answer is **A**. Option B corresponds to $\cos x=\dfrac12$ (a lost minus sign); options C and D wrongly use the period $\pi$ of $\tan$.
:::

Trigonometric functions model repeated motion very well, for example a capsule on an observation wheel.

:::graph Height of a capsule $h(t)=22-20\cos\dfrac{\pi t}{10}$ over one turn
alt: A sine-shaped graph from 0 to 20 minutes, starting at a height of 2 metres, rising to a highest point of 42 metres at t equal 10 and returning to 2 metres; a dashed horizontal line is drawn at a height of 32 metres
x: 0..20
y: 0..45
plot: 22 - 20*cos(pi*x/10) ; 0..20
hline: 32 ; dashed
point: (0, 2) "(0, 2)" right
point: (10, 42) "(10, 42)" below
:::

:::example True/false: an observation wheel
An observation wheel turns at a constant speed. The height (in metres) of a capsule above the ground after $t$ minutes is $h(t)=22-20\cos\dfrac{\pi t}{10}$, $t\ge0$.

a) The lowest height of the capsule is $0$ m.

b) One turn of the wheel takes $20$ minutes.

c) At time $t=10$ minutes the capsule is $42$ m high.

d) During one turn, the capsule spends $10$ minutes at a height of $32$ m or more.

**Solution.** We use $-1\le\cos\dfrac{\pi t}{10}\le1$ and the period formula.

a) **False.** When $\cos\dfrac{\pi t}{10}=1$, the lowest height is $22-20=2$ m.

b) **True.** The period is $\dfrac{2\pi}{\pi/10}=20$ minutes.

c) **True.** $h(10)=22-20\cos\pi=22+20=42$ m.

d) **False.** For $t\in[0, 20]$ we solve the inequality:

$$22-20\cos\frac{\pi t}{10}\ge32\iff\cos\frac{\pi t}{10}\le-\frac12\iff\frac{2\pi}{3}\le\frac{\pi t}{10}\le\frac{4\pi}{3}\iff\frac{20}{3}\le t\le\frac{40}{3}.$$

That time is $\dfrac{40}{3}-\dfrac{20}{3}=\dfrac{20}{3}\approx6.67$ minutes, not $10$ minutes.

So the answers are a) False, b) True, c) True, d) False.
:::

## Exponential and logarithmic functions

:::theorem Powers, logarithms and models
- For $0<a\neq1$ and $b, c>0$: $\log_a(bc)=\log_ab+\log_ac$, $\log_a\dfrac bc=\log_ab-\log_ac$, $\log_ab^\alpha=\alpha\log_ab$, $\log_ab=\dfrac{\log_cb}{\log_ca}$.
- $a^x=b\iff x=\log_ab$ (needs $b>0$); $\log_ax=b\iff x=a^b$ (needs $x>0$).
- In inequalities: with $a>1$ keep the direction; with $0<a<1$ **reverse** it.
- Compound interest: $A=A_0(1+r)^n$. Growth or decay: $N(t)=N_0e^{kt}$ or $N(t)=N_0\cdot q^t$ (growth when $q>1$, decay when $0<q<1$).
:::

With a logarithmic equation, the first job is always to **state the conditions**. Skipping this step is the most common way to lose marks.

:::example Multiple choice: a logarithmic equation
The solution set of the equation $\log_2(x-1)+\log_2(x+1)=3$ is

**A.** $\{3\}$.

**B.** $\{-3, 3\}$.

**C.** $\{-3\}$.

**D.** $\{\sqrt7\}$.

**Solution.** The condition is $x>1$. We combine the sum of two logarithms into the logarithm of a product:

$$\log_2\big[(x-1)(x+1)\big]=3\iff x^2-1=2^3=8\iff x=3\ \text{or}\ x=-3.$$

Checking against $x>1$, only $x=3$ is accepted. The answer is **A**. Option B forgets the condition; option D computes $2^3$ as $2\cdot3$.
:::

:::example Short answer: a drug in the blood
After an injection, the concentration of a drug in a patient's blood is $C(t)=40\cdot0.8^t$ (mg/L), where $t$ is the number of hours since the injection. After how many hours has the concentration fallen to $5$ mg/L (to 1 decimal place)?

**Solution.** We solve the exponential equation by taking logarithms:

$$40\cdot0.8^t=5\iff0.8^t=\frac18\iff t=\log_{0.8}\frac18=\frac{\ln0.125}{\ln0.8}\approx9.32.$$

So after about $9.3$ hours (write $9.3$).

**Check.** Each hour $80\%$ of the drug remains, so after $9$ hours there is $40\cdot0.8^9\approx5.4$ mg/L, slightly more than $5$; the answer $9.3$ is sensible.
:::

:::warning Common traps with exponentials and logarithms
- **Forgetting the conditions** of a logarithm and accepting a solution that makes the expression inside the logarithm negative.
- **Not reversing the inequality** when the base is between $0$ and $1$: $\log_{\frac12}x\ge-2\iff0<x\le4$, not $x\ge4$.
- **Using a false rule**: $\log_a(b+c)$ is **not** equal to $\log_ab+\log_ac$.
:::

## Arithmetic and geometric sequences

:::theorem The two kinds of sequence
| | Arithmetic sequence (common difference $d$) | Geometric sequence (common ratio $q$) |
|---|---|---|
| General term | $u_n=u_1+(n-1)d$ | $u_n=u_1\cdot q^{n-1}$ |
| Sum of the first $n$ terms | $S_n=\dfrac{n(u_1+u_n)}{2}=\dfrac{n\big[2u_1+(n-1)d\big]}{2}$ | $S_n=\dfrac{u_1(1-q^n)}{1-q}$ ($q\neq1$) |
| Three consecutive terms | $u_k=\dfrac{u_{k-1}+u_{k+1}}{2}$ | $u_k^2=u_{k-1}\cdot u_{k+1}$ |
:::

Many real-life problems are sequences "in disguise": seats per row increasing steadily form an arithmetic sequence; money growing by a percentage forms a geometric sequence.

:::example Short answer: seats in a hall
A hall has $20$ rows of seats. The first row has $16$ seats, and each row has $2$ seats more than the row in front of it. How many seats does the hall have altogether?

**Solution.** The numbers of seats form an arithmetic sequence with $u_1=16$, $d=2$, $n=20$:

$$S_{20}=\frac{20\big[2\cdot16+19\cdot2\big]}{2}=10\cdot70=700.$$

So the hall has $700$ seats.

**Look back.** The last row has $u_{20}=16+19\cdot2=54$ seats; using $u_1+20d$ is the common "one difference too many" error.
:::

## Limits

:::note Basic limits
- $\lim\dfrac{1}{n^k}=0$ ($k>0$); $\lim q^n=0$ when $|q|<1$.
- The limit of a rational expression in $n$: divide the numerator and the denominator by the highest power of $n$ in the denominator.
- Sum to infinity ($|q|<1$): $S=u_1+u_1q+u_1q^2+\cdots=\dfrac{u_1}{1-q}$.
- A limit of a function of the form $\dfrac00$: factorise and cancel, for example $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}=\lim\limits_{x\to2}(x+2)=4$.
:::

:::example Multiple choice: the limit of a sequence
The value of $\lim\dfrac{2n^2+1}{n^2-3n}$ is

**A.** $0$.

**B.** $-\dfrac13$.

**C.** $2$.

**D.** $+\infty$.

**Solution.** We divide the numerator and the denominator by $n^2$:

$$\lim\frac{2n^2+1}{n^2-3n}=\lim\frac{2+\frac{1}{n^2}}{1-\frac3n}=\frac{2+0}{1-0}=2.$$

The answer is **C**. Option B takes the ratio $\dfrac{1}{-3}$ of the lowest-order coefficients by mistake.
:::

## Key terms

:::terms
- basic trigonometric equation | phương trình lượng giác cơ bản
- period | chu kì
- natural logarithm | lôgarit tự nhiên
- compound interest | lãi kép
- exponential growth | tăng trưởng mũ
- arithmetic sequence | cấp số cộng
- geometric sequence | cấp số nhân
- common difference | công sai
- common ratio | công bội
- convergent geometric series (sum to infinity) | cấp số nhân lùi vô hạn
- limit | giới hạn
:::

## Exercises

The exercises go from easy to hard, and each one states its exam format.

:::exercise Multiple choice
Given $\sin x=\dfrac13$, the value of $\cos2x$ is

**A.** $\dfrac79$. **B.** $\dfrac13$. **C.** $-\dfrac79$. **D.** $\dfrac89$.

::hint
**What you need:** $\cos2x=1-2\sin^2x$.

**Steps:**
1. Find $\sin^2x$.
2. Substitute into the identity.

::solution
$\cos2x=1-2\cdot\dfrac19=\dfrac79$. Option B forgets to square, option C uses $2\sin^2x-1$ by mistake, and option D is $\cos^2x$.

**Answer.** A.
:::

:::exercise Multiple choice
The solutions of the equation $\tan x=\sqrt3$ are

**A.** $x=\dfrac{\pi}{3}+k\pi$. **B.** $x=\dfrac{\pi}{3}+k2\pi$. **C.** $x=\dfrac{\pi}{6}+k\pi$. **D.** $x=\pm\dfrac{\pi}{3}+k\pi$ ($k\in\mathbb{Z}$).

::hint
**What you need:** $\tan x=\tan\alpha\iff x=\alpha+k\pi$; $\tan\dfrac{\pi}{3}=\sqrt3$.

**Steps:**
1. Find $\alpha$ with $\tan\alpha=\sqrt3$.
2. Write the general solution with period $\pi$.

::solution
$\tan x=\tan\dfrac{\pi}{3}\iff x=\dfrac{\pi}{3}+k\pi$. Option B misses half of the solutions; option C uses $\tan\dfrac{\pi}{6}=\dfrac{\sqrt3}{3}$.

**Answer.** A.
:::

:::exercise Multiple choice
Let $a=\log_23$. Then $\log_224$ equals

**A.** $3a$. **B.** $3+a$. **C.** $8+a$. **D.** $1+3a$.

::hint
**What you need:** $\log_2(bc)=\log_2b+\log_2c$.

**Steps:**
1. Write $24=8\cdot3$.
2. Use $\log_28=3$.

::solution
$\log_224=\log_28+\log_23=3+a$. Option A turns the addition into a multiplication; option C forgets to evaluate $\log_28$.

**Answer.** B.
:::

:::exercise True/false
The geometric sequence $(u_n)$ has $u_1=3$ and common ratio $q=2$.

a) $u_5=48$.

b) The sum of the first $5$ terms is $93$.

c) $u_n=3\cdot2^n$ for every $n\ge1$.

d) The number $384$ is the $7$th term of the sequence.

::hint
**What you need:** $u_n=u_1q^{n-1}$; $S_n=\dfrac{u_1(1-q^n)}{1-q}$.

**Steps:**
1. Compute $u_5$ and $S_5$.
2. Solve $3\cdot2^{n-1}=384$.

::solution
a) **True.** $u_5=3\cdot2^4=48$.

b) **True.** $S_5=\dfrac{3(1-2^5)}{1-2}=3\cdot31=93$.

c) **False.** $u_n=3\cdot2^{n-1}$; the formula $3\cdot2^n$ gives $u_1=6$.

d) **False.** $3\cdot2^{n-1}=384\iff2^{n-1}=128\iff n=8$, so $384$ is the $8$th term.

**Answer.** a) True; b) True; c) False; d) False.
:::

:::exercise Short answer
Find the sum of the solutions of the equation $4^x-6\cdot2^x+8=0$.

::hint
**What you need:** $4^x=(2^x)^2$; put $t=2^x>0$.

**Steps:**
1. Solve the quadratic equation in $t$.
2. Find $x$ from $2^x=t$.

::solution
$t^2-6t+8=0\iff t=2$ or $t=4$ (both positive). Then $x=1$ or $x=2$, and the sum is $3$.

**Answer.** $3$.
:::

:::exercise Short answer
How many integer solutions does the inequality $\log_{\frac12}(x-2)\ge-2$ have?

::hint
**What you need:** the base $\dfrac12<1$, so the direction reverses; the condition is $x-2>0$.

**Steps:**
1. Write $-2=\log_{\frac12}4$.
2. Solve $0<x-2\le4$.

::solution
$\log_{\frac12}(x-2)\ge\log_{\frac12}4\iff0<x-2\le4\iff2<x\le6$. The integers are $3$, $4$, $5$, $6$.

**Answer.** $4$.
:::

:::exercise Short answer
Your friend An deposits $100$ million đồng in a bank at $6\%$ interest per year, with the interest added to the balance every year. After at least how many years is the balance $150$ million đồng or more?

::hint
**What you need:** $A=A_0(1+r)^n$; $n$ is a positive integer.

**Steps:**
1. Solve $100\cdot1.06^n\ge150$.
2. Take the least integer that works.

::solution
$1.06^n\ge1.5\iff n\ge\log_{1.06}1.5\approx6.96$. Check: $100\cdot1.06^6\approx141.9$ and $100\cdot1.06^7\approx150.4$ (million đồng).

**Answer.** $7$.
:::

:::exercise Short answer
A culture starts with $1000$ bacteria, and the number doubles every $3$ hours, so after $t$ hours there are $N(t)=1000\cdot2^{\frac t3}$ bacteria. After at least how many whole hours does the number exceed $20\,000$?

::hint
**What you need:** $2^{\frac t3}>20\iff\dfrac t3>\log_220$.

**Steps:**
1. Solve the exponential inequality.
2. Take the least integer that works, then check.

::solution
$t>3\log_220\approx12.97$. Check: $N(12)=1000\cdot2^4=16\,000$ and $N(13)\approx20\,159>20\,000$.

**Answer.** $13$.
:::

:::exercise Written answer
Solve the equation $\sin2x=\cos x$ on $[0, \pi]$.

::hint
**What you need:** $\sin2x=2\sin x\cos x$; turn it into a product equal to zero.

**Steps:**
1. Write $\cos x(2\sin x-1)=0$.
2. Solve each factor and keep the solutions in $[0, \pi]$.

::solution
$2\sin x\cos x-\cos x=0\iff\cos x(2\sin x-1)=0$. On $[0, \pi]$: $\cos x=0\iff x=\dfrac{\pi}{2}$; $\sin x=\dfrac12\iff x=\dfrac{\pi}{6}$ or $x=\dfrac{5\pi}{6}$.

**Answer.** $x\in\left\{\dfrac{\pi}{6}, \dfrac{\pi}{2}, \dfrac{5\pi}{6}\right\}$.
:::

:::exercise Short answer (challenge)
A ball is dropped from a height of $10$ m onto the floor. Each time it hits the floor, it bounces back up to $\dfrac34$ of its previous height. Assuming it bounces like this for ever, find the total distance travelled by the ball (in m).

::hint
**What you need:** the sum to infinity $S=\dfrac{u_1}{1-q}$.

**Steps:**
1. The distance is the first drop of $10$ m, then for each bounce one trip up and an equal trip down.
2. The bounce heights $7.5$, $7.5\cdot\dfrac34$, … form a convergent geometric series.

::solution
The bounce heights add up to $\dfrac{7.5}{1-\frac34}=30$ m. Each height is travelled twice, so the distance is $10+2\cdot30=70$ m.

**Answer.** $70$.
:::

## Mini test

:::quiz
::mc
The period of the function $y=\sin2x$ is
A. $2\pi$.
B. $\pi$.
C. $\dfrac{\pi}{2}$.
D. $4\pi$.
::key B
The period is $\dfrac{2\pi}{2}=\pi$. Option D multiplies by $2$ instead of dividing; option A is the period of $\sin x$.

::mc
The solution of the equation $\log_3(2x-1)=2$ is
A. $x=\dfrac92$.
B. $x=\dfrac72$.
C. $x=5$.
D. $x=\dfrac32$.
::key C
$2x-1=3^2=9\iff x=5$ (and $2x-1>0$ holds). Option A forgets the $-1$, option B computes $3^2=6$, and option D takes $2x-1=2$.

::mc
The arithmetic sequence $(u_n)$ has $u_1=2$ and common difference $d=3$. The term $u_{10}$ is
A. $32$.
B. $26$.
C. $30$.
D. $29$.
::key D
$u_{10}=2+9\cdot3=29$. Option A uses $u_1+10d$ by mistake and option B uses $u_1+8d$.

::mc
The value of $\lim\dfrac{3n-1}{n+2}$ is
A. $3$.
B. $-\dfrac12$.
C. $1$.
D. $+\infty$.
::key A
Divide the numerator and denominator by $n$: $\dfrac{3-\frac1n}{1+\frac2n}\to3$. Option B is the ratio of the two constant terms.

::tf
Consider the function $y=\log_2x$.
a) The domain of the function is $(0, +\infty)$.
b) The function is increasing on its domain.
c) The graph passes through the point $(0, 1)$.
d) $\log_2x<3\iff x<8$.
::key T T F F
a) True: we need $x>0$. b) True: the base $2>1$. c) False: the graph passes through $(1, 0)$; the point $(0, 1)$ is on the graph of $y=2^x$. d) False: the condition is missing; $\log_2x<3\iff0<x<8$.

::sa
Find the sum to infinity $S=6+2+\dfrac23+\dfrac29+\cdots$.
::key 9
$u_1=6$ and $q=\dfrac13$, so $S=\dfrac{6}{1-\frac13}=9$.

::sa
How many solutions does the equation $\sin x=\dfrac12$ have in $[0, 3\pi]$?
::key 4
The solutions are $x=\dfrac{\pi}{6}+k2\pi$ and $x=\dfrac{5\pi}{6}+k2\pi$. In $[0, 3\pi]$ they are $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{13\pi}{6}$, $\dfrac{17\pi}{6}$, that is $4$ solutions.
:::
