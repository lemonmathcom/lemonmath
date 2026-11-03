---
title: Square roots and square-root expressions
description: Understand the square roots of a non-negative number, use √(A²) = |A| and find when a square-root expression is defined.
minutes: 20
---

:::goals
- Find the square roots of a non-negative number, and tell square roots apart from the principal square root.
- Use the identity $\sqrt{A^2}=|A|$ to evaluate and simplify.
- Find the condition for a square-root expression $\sqrt{A}$ to be defined.
:::

Mr Hùng wants to tile a square drying yard with an area of $49$ m². How long is each side? What if the yard has an area of $50$ m²?

The first question is easy: $7\cdot7=49$, so each side is $7$ m. The second needs a number whose square is $50$. This lesson helps us name, write and calculate numbers like that.

## Square roots of a non-negative number

### Explore: which numbers square to $16$?

We square a few numbers:

| $x$ | $-5$ | $-4$ | $-3$ | $0$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $25$ | $16$ | $9$ | $0$ | $9$ | $16$ | $25$ |

Two numbers square to $16$: $4$ and $-4$. Only one number squares to $0$, namely $0$. No number squares to $-9$, because the square of every number is non-negative.

:::definition Square root
A **square root** of a non-negative real number $a$ is a number $x$ with $x^2=a$.
- A positive number $a$ has exactly two square roots, which are opposites: the positive one is written $\sqrt{a}$, the negative one $-\sqrt{a}$.
- The number $0$ has exactly one square root, $0$.
- A negative number has no square root.

The number $\sqrt{a}$ is called the **principal square root** of $a$. We have $\sqrt{a}\ge0$ and $\left(\sqrt{a}\right)^2=a$.
:::

The picture shows why a positive number has two square roots: the line $y=5$ meets the graph of $y=x^2$ at two points whose $x$-coordinates are opposites.

:::graph The two square roots of $5$
alt: The graph of y equals x squared and the horizontal line y equals 5 meeting at two points with x-coordinates minus root 5 and root 5
x: -3.5..3.5
y: -1..8
plot: x^2
hline: 5 ; dashed
point: (-2.236, 5) "-√5" above-left
point: (2.236, 5) "√5" above-right
:::

:::example Finding square roots
Find the square roots of: a) $81$; b) $\dfrac{9}{16}$; c) $0.36$; d) $-4$.

**Solution.** We have

$$9^2=81,\qquad \left(\frac34\right)^2=\frac{9}{16},\qquad 0.6^2=0.36.$$

So the square roots of $81$ are $9$ and $-9$; of $\dfrac{9}{16}$, $\dfrac34$ and $-\dfrac34$; of $0.36$, $0.6$ and $-0.6$; and $-4$ has no square root (since $-4<0$).
:::

For a number like $50$, no rational number squares to $50$. Then we use a calculator to get an approximate value.

:::example Using a calculator
Answer the question about the $50$ m² yard (rounded to two decimal places).

**Solution.** Let $x$ (m) be the side of the yard ($x>0$). We have $x^2=50$, so $x$ is the principal square root of $50$. Using a calculator, we get

$$x=\sqrt{50}\approx7.0711\approx7.07.$$

So each side of the yard is about $7.07$ m.
:::

To compare two principal square roots we use this property: for non-negative $a$ and $b$, $a<b \iff \sqrt{a}<\sqrt{b}$. For example, $\sqrt{50}<\sqrt{64}=8$.

## The identity $\sqrt{A^2}=|A|$

We have $\sqrt{3^2}=\sqrt9=3$. But $\sqrt{(-3)^2}=\sqrt9=3$, not $-3$. The result is always non-negative: it is exactly the absolute value.

:::theorem The square root of a square
For every real number $a$, $\sqrt{a^2}=|a|$.
:::

Why? The number $|a|$ is non-negative and $|a|^2=a^2$. So $|a|$ is the principal square root of $a^2$.

:::example The square root of a square
Evaluate: a) $\sqrt{(-7)^2}$; b) $\sqrt{\left(2-\sqrt5\right)^2}$.

**Solution.** Using the identity $\sqrt{A^2}=|A|$, we have (in b), since $5>4$, $\sqrt5>\sqrt4=2$, hence $2-\sqrt5<0$):

$$\sqrt{(-7)^2}=|-7|=7,\qquad \sqrt{\left(2-\sqrt5\right)^2}=\left|2-\sqrt5\right|=\sqrt5-2.$$

So a) equals $7$ and b) equals $\sqrt5-2$.
:::

## Square-root expressions

In real life we often meet the square root of an expression with letters. For example, a pebble dropped from a height of $h$ metres hits the ground after about $t=\sqrt{\dfrac{h}{5}}$ seconds.

:::definition Square-root expression
If $A$ is an algebraic expression, we call $\sqrt{A}$ a **square-root expression**, and $A$ the **expression under the root sign**.

$\sqrt{A}$ is **defined** (makes sense) if and only if $A\ge0$.

For every expression $A$, $\sqrt{A^2}=|A|$: that is, $\sqrt{A^2}=A$ when $A\ge0$ and $\sqrt{A^2}=-A$ when $A<0$.
:::

:::example Evaluating a square-root expression
Find the time $t=\sqrt{\dfrac{h}{5}}$ when the pebble is dropped from $h=45$ m and from $h=20$ m.

**Solution.** Substituting $h=45$ and $h=20$ into the formula, we get

$$h=45:\ t=\sqrt{\frac{45}{5}}=\sqrt9=3;\qquad h=20:\ t=\sqrt{\frac{20}{5}}=\sqrt4=2.$$

So the pebble lands after $3$ seconds (from $45$ m) and after $2$ seconds (from $20$ m).
:::

The height is more than twice as great, but the time grows by only $1$ second.

Finding when an expression is defined means solving a linear inequality in one unknown, as in the lesson [linear inequalities in one unknown](lesson:linear-inequalities-one-unknown).

:::example When is it defined?
Find the condition on $x$ for each expression to be defined: a) $\sqrt{2x-6}$; b) $\sqrt{5-x}$; c) $\sqrt{x^2+1}$.

**Solution.** Each expression is defined when the expression under the root sign is non-negative (in b), multiplying both sides by $-1$ reverses the inequality sign). We have

$$\begin{aligned} \text{a) }& 2x-6\ge0\iff 2x\ge6\iff x\ge3;\\ \text{b) }& 5-x\ge0\iff -x\ge-5\iff x\le5;\\ \text{c) }& x^2+1\ge1>0 \text{ for every } x. \end{aligned}$$

So a) $x\ge3$; b) $x\le5$; c) the expression is defined for every real number $x$.
:::

When the expression under the root sign is a square, we remove the root using the absolute value, then use the given condition to remove the absolute value.

:::example Simplifying under a given condition
Simplify $P=\sqrt{(x-3)^2}+x-1$ for $x<3$.

**Solution.** Since $x<3$, $x-3<0$, hence $|x-3|=-(x-3)=3-x$. We have

$$P=|x-3|+x-1=3-x+x-1=2.$$

So $P=2$ for every $x<3$.
:::

:::warning Common mistakes
- **Writing $\sqrt{16}=\pm4$.** Why it is wrong: the symbol $\sqrt{16}$ means the principal square root, which is never negative. Right: $\sqrt{16}=4$; the square roots of $16$ are $4$ and $-4$.
- **Writing $\sqrt{a^2}=a$ for every $a$.** Wrong: $\sqrt{(-3)^2}=-3$. Why it is wrong: the principal square root is non-negative. Right: $\sqrt{(-3)^2}=|-3|=3$.
- **Splitting the root of a sum.** Wrong: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Why it is wrong: a square root does not split over addition. Right: $\sqrt{9+16}=\sqrt{25}=5$.
- **Forgetting to reverse the inequality.** Wrong: $\sqrt{4-2x}$ is defined when $x\ge2$. Why it is wrong: dividing both sides of $-2x\ge-4$ by a negative number reverses the sign. Right: $x\le2$.
:::

## Key terms

:::terms
- square root | căn bậc hai
- principal square root | căn bậc hai số học
- square-root expression | căn thức bậc hai
- expression under the root sign | biểu thức lấy căn
- condition for the expression to be defined | điều kiện xác định
- absolute value | giá trị tuyệt đối
- irrational number | số vô tỉ
- calculator | máy tính cầm tay
:::

## Summary

- $x$ is a square root of $a\ge0$ when $x^2=a$. A positive $a$ has two square roots $\pm\sqrt{a}$; $0$ has one; a negative number has none.
- $\sqrt{a}$ is the principal square root: $\sqrt{a}\ge0$ and $\left(\sqrt{a}\right)^2=a$.
- For $a$, $b\ge0$: $a<b\iff\sqrt{a}<\sqrt{b}$.
- $\sqrt{A^2}=|A|$: it equals $A$ when $A\ge0$ and $-A$ when $A<0$.
- $\sqrt{A}$ is defined $\iff A\ge0$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the square roots of: a) $121$; b) $0.49$; c) $\dfrac{25}{36}$.

::hint
**What you need:** a positive number $a$ has two square roots, $\sqrt{a}$ and $-\sqrt{a}$.

**Steps:**
1. Find the positive number whose square is the given number.
2. Add its opposite.

::solution
We have $11^2=121$, $0.7^2=0.49$, $\left(\dfrac56\right)^2=\dfrac{25}{36}$.

**Answer.** a) $\pm11$; b) $\pm0.7$; c) $\pm\dfrac56$.
:::

:::exercise
Evaluate: a) $\sqrt{0.64}+\sqrt{1.21}$; b) $\left(\sqrt7\right)^2-\sqrt{(-6)^2}$.

::hint
**What you need:** $\left(\sqrt{a}\right)^2=a$ for $a\ge0$; $\sqrt{a^2}=|a|$.

**Steps:**
1. Take each square root.
2. Add or subtract.

::solution
a) We have $\sqrt{0.64}+\sqrt{1.21}=0.8+1.1=1.9$.

b) We have $\left(\sqrt7\right)^2-\sqrt{(-6)^2}=7-|-6|=7-6=1$.

**Answer.** a) $1.9$; b) $1$.
:::

:::exercise
Compare: a) $6$ and $\sqrt{35}$; b) $\sqrt{10}-1$ and $2$.

::hint
**What you need:** for $a$, $b\ge0$: $a<b\iff\sqrt{a}<\sqrt{b}$.

**Steps:**
1. Write the whole number as a square root: $6=\sqrt{36}$, $3=\sqrt9$.
2. Compare the numbers under the root signs.

::solution
a) We have $6=\sqrt{36}$. Since $36>35$, $\sqrt{36}>\sqrt{35}$, hence $6>\sqrt{35}$.

b) We have $3=\sqrt9$. Since $10>9$, $\sqrt{10}>3$. So $\sqrt{10}-1>2$.

**Answer.** a) $6>\sqrt{35}$; b) $\sqrt{10}-1>2$.
:::

:::exercise
Find the condition on $x$ for each expression to be defined: a) $\sqrt{3x-12}$; b) $\sqrt{7-2x}$; c) $\sqrt{x^2+4}$.

::hint
**What you need:** $\sqrt{A}$ is defined when $A\ge0$.

**Steps:**
1. Write the inequality $A\ge0$.
2. Solve it; remember to reverse the sign when dividing by a negative number.

::solution
a) $\sqrt{3x-12}$ is defined when $3x-12\ge0\iff 3x\ge12\iff x\ge4$.

b) $\sqrt{7-2x}$ is defined when $7-2x\ge0\iff -2x\ge-7\iff x\le3.5$.

c) Since $x^2+4\ge4>0$ for every $x$, $\sqrt{x^2+4}$ is defined for every $x$.

**Answer.** a) $x\ge4$; b) $x\le3.5$; c) every $x$.
:::

:::exercise
Simplify the following expressions: a) $\sqrt{\left(\sqrt3-1\right)^2}$; b) $\sqrt{\left(3-\sqrt{11}\right)^2}$.

::hint
**What you need:** $\sqrt{A^2}=|A|$.

**Steps:**
1. Find the sign of the number inside (compare $\sqrt3$ with $1$, and $\sqrt{11}$ with $3$).
2. Remove the absolute value.

::solution
a) Since $\sqrt3>\sqrt1=1$, $\sqrt3-1>0$. Hence $\sqrt{\left(\sqrt3-1\right)^2}=\left|\sqrt3-1\right|=\sqrt3-1$.

b) Since $\sqrt{11}>\sqrt9=3$, $3-\sqrt{11}<0$. Hence $\sqrt{\left(3-\sqrt{11}\right)^2}=\left|3-\sqrt{11}\right|=\sqrt{11}-3$.

**Answer.** a) $\sqrt3-1$; b) $\sqrt{11}-3$.
:::

:::exercise
A square rug has an area of $30$ m². Find its perimeter (rounded to one decimal place).

::hint
**What you need:** a square of area $S$ has side $\sqrt{S}$.

**Steps:**
1. The side is $\sqrt{30}$ m.
2. The perimeter is $4$ times the side; use the calculator and round only at the end.

::solution
The side of the rug is $\sqrt{30}$ m. Hence its perimeter is $4\sqrt{30}\approx21.9$ (m).

**Answer.** About $21.9$ m.
:::

:::exercise
Use the formula $t=\sqrt{\dfrac{h}{5}}$ (seconds) for an object falling freely from a height of $h$ metres.

a) A ball is dropped from a height of $80$ m. How long does it take to hit the ground?

b) A marble takes exactly $2.5$ seconds to fall. From what height was it dropped?

::hint
**What you need:** $t=\sqrt{\dfrac{h}{5}}\iff t^2=\dfrac{h}{5}\iff h=5t^2$ (for $t\ge0$).

**Steps:**
1. Part a: substitute $h=80$.
2. Part b: use $h=5t^2$.

::solution
a) Substituting $h=80$ into the formula, we get $t=\sqrt{\dfrac{80}{5}}=\sqrt{16}=4$.

b) From $t=\sqrt{\dfrac h5}$ we get $h=5t^2=5\cdot2.5^2=31.25$.

**Answer.** a) $4$ seconds; b) $31.25$ m.
:::

:::exercise
Simplify the expression $Q=\sqrt{x^2-6x+9}-x$ for $x\ge3$.

::hint
**What you need:** the identity $(a-b)^2=a^2-2ab+b^2$ (grade 8) and $\sqrt{A^2}=|A|$.

**Steps:**
1. Write $x^2-6x+9=(x-3)^2$.
2. For $x\ge3$, $|x-3|=x-3$.

::solution
We have $Q=\sqrt{(x-3)^2}-x=|x-3|-x$. Since $x\ge3$, $|x-3|=x-3$. Hence $Q=x-3-x=-3$.

**Answer.** $Q=-3$.
:::

:::exercise
Consider the expression $A=\sqrt{4x-8}$.

a) Find the condition for $A$ to be defined.

b) Find the value of $A$ when $x=6$.

c) Find $x$ such that $A=6$.

::hint
**What you need:** $\sqrt{B}$ is defined when $B\ge0$; for $c\ge0$, $\sqrt{B}=c\iff B=c^2$.

**Steps:**
1. Solve $4x-8\ge0$.
2. Substitute $x=6$.
3. Solve $4x-8=36$ and check the condition.

::solution
a) $A$ is defined when $4x-8\ge0\iff x\ge2$.

b) Substituting $x=6$ (which satisfies the condition) into $A$, we get $A=\sqrt{24-8}=\sqrt{16}=4$.

c) We have $A=6\iff 4x-8=36\iff x=11$ (which satisfies the condition).

**Answer.** a) $x\ge2$; b) $A=4$; c) $x=11$.
:::

:::exercise Challenge
Find $x$ given that $\sqrt{x^2}=2x-3$.

::hint
**What you need:** $\sqrt{x^2}=|x|\ge0$, so the right side must also be non-negative.

**Steps:**
1. Condition: $2x-3\ge0$, that is, $x\ge1.5$.
2. Then $x>0$, so $|x|=x$; solve $x=2x-3$.

::solution
Since $\sqrt{x^2}=|x|\ge0$, we need $2x-3\ge0$, that is, $x\ge1.5$. Then $x>0$, so $|x|=x$. Hence $x=2x-3\iff x=3$ (which satisfies the condition).

**Answer.** $x=3$.
:::

## Mini test

:::quiz
::mc
The principal square root of $49$ is
A. $7$.
B. $-7$.
C. $7$ and $-7$.
D. $24.5$.
::key A
We have $7\ge0$ and $7^2=49$, so the principal square root of $49$ is $7$. Option C lists the square roots of $49$, and D divides $49$ by $2$.

::mc
$\sqrt{(-8)^2}$ equals
A. $-8$.
B. $8$.
C. $64$.
D. $\pm8$.
::key B
We have $\sqrt{(-8)^2}=|-8|=8$. Option A forgets the absolute value, and C forgets to take the root.

::mc
The expression $\sqrt{6-3x}$ is defined when
A. $x\ge2$.
B. $x\le2$.
C. $x\ge-2$.
D. $x\le-2$.
::key B
The expression is defined when $6-3x\ge0\iff -3x\ge-6\iff x\le2$ (dividing both sides by $-3$ reverses the sign). Option A forgets to reverse it.

::mc
$\sqrt{\left(\sqrt5-3\right)^2}$ equals
A. $\sqrt5-3$.
B. $3-\sqrt5$.
C. $3+\sqrt5$.
D. $14-6\sqrt5$.
::key B
Since $\sqrt5<\sqrt9=3$, $\sqrt5-3<0$. Hence $\sqrt{\left(\sqrt5-3\right)^2}=\left|\sqrt5-3\right|=3-\sqrt5$. Option A ignores the sign, and D squares instead of taking the root.

::tf
Consider the expression $A=\sqrt{2x+10}$. Decide whether each statement is true or false.
a) $A$ is defined when $x\ge-5$.
b) When $x=3$, $A=4$.
c) When $x=-3$, $A=-2$.
d) $A=0$ when $x=5$.
::key T T F F
a) True. $A$ is defined when $2x+10\ge0\iff x\ge-5$. b) True. When $x=3$, $A=\sqrt{16}=4$. c) False. When $x=-3$, $A=\sqrt4=2$ (a principal square root is non-negative). d) False. We have $A=0\iff 2x+10=0\iff x=-5$.

::sa
Evaluate $\sqrt{0.81}+\sqrt{(-1.2)^2}$.
::key 2.1
We have $\sqrt{0.81}=0.9$ and $\sqrt{(-1.2)^2}=|-1.2|=1.2$. Hence the sum is $0.9+1.2=2.1$.

::sa
The time $t$ (seconds) for an object falling freely from a height of $h$ metres to hit the ground is given by $t=\sqrt{\dfrac{h}{5}}$. An object falls freely from a height of $61.25$ m. After how many seconds does it hit the ground?
::key 3.5
Substituting $h=61.25$ into the formula, we get $t=\sqrt{\dfrac{61.25}{5}}=\sqrt{12.25}=3.5$ (seconds).
:::
