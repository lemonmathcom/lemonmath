---
title: The set of rational numbers
description: Recognise rational numbers, show them on a number line, compare them, and find the opposite and the absolute value of a rational number.
minutes: 30
---

:::goals
- Recognise rational numbers, write them as fractions with a positive denominator, and understand that $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.
- Show a rational number on a number line and read a rational number from a point on a number line.
- Compare two rational numbers.
- Find the opposite and the absolute value of a rational number.
:::

Suppose two classmates on cleaning duty record the water level of a canal relative to a reference level of $0$ m. On Monday morning the first writes $-\dfrac34$ m. On Tuesday morning the second writes $-0.7$ m. One uses a fraction, the other a decimal, and neither number is an integer.

In Year 6 you met [the set of integers](lesson:set-of-integers) and could compare $-3$ with $-5$. But a water level does not only take whole-number values. So which morning had the lower level, and how do we compare $-\dfrac34$ with $-0.7$ in general?

## Rational numbers

### Explore: one number, many ways to write it

Let us write a few familiar numbers as fractions:

| Number | Written as a fraction |
|---|---|
| $0.75$ | $\dfrac{75}{100}=\dfrac34$ |
| $-2$ | $\dfrac{-2}{1}=\dfrac{-6}{3}$ |
| $-0.5$ | $\dfrac{-5}{10}=\dfrac{-1}{2}=\dfrac{1}{-2}$ |
| $1\dfrac35$ | $\dfrac85$ |

In all four rows the number can be written as $\dfrac ab$, where $a$ and $b$ are integers and $b\neq0$. That is exactly what makes a rational number.

:::definition Rational number
A rational number is a number that can be written as a fraction $\dfrac ab$, where $a$ and $b$ are integers and $b\neq0$. The set of rational numbers is written $\mathbb{Q}$.
:::

**Going deeper.** A rational number can be written in many ways, because equal fractions stand for the same number: $\dfrac34=\dfrac68=\dfrac{-3}{-4}$. To keep things tidy, we usually choose the form with a positive denominator. An integer $n$ is also rational, since $n=\dfrac n1$; so are terminating decimals and mixed numbers. Hence $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.

:::diagram How the number sets fit together
alt: Three nested circles with the same centre: the inner one is N containing 5, the middle one is Z containing -2, the outer one is Q containing -3/4
point P 0,0 ""
circle P 0.9
circle P 1.8
circle P 2.7
label 0,0.2 "ℕ"
label 0,-0.4 "5"
label 0,1.35 "ℤ"
label 0,-1.35 "-2"
label 0,2.25 "ℚ"
label 0,-2.25 "-3/4"
:::

Why extend $\mathbb{Z}$ to $\mathbb{Q}$? Because dividing one integer by another does not always give an integer: $3\div4$ is not in $\mathbb{Z}$, but it is the rational number $\dfrac34$.

A rational number greater than $0$ is called a **positive rational number**, and one less than $0$ is a **negative rational number**; $0$ is neither. With a positive denominator, the fraction $\dfrac ab$ is positive if $a>0$ and negative if $a<0$.

:::example Recognising rational numbers
Consider the numbers $-4$; $0.6$; $1\dfrac35$; $\dfrac{5}{-10}$; $0$.

a) Write each number as a fraction with a positive denominator.

b) Fill in $\in$ or $\notin$: $0\ldots\mathbb{N}$; $-4\ldots\mathbb{N}$; $-4\ldots\mathbb{Z}$; $0.6\ldots\mathbb{Z}$; $0.6\ldots\mathbb{Q}$.

**Solution.** a) We have $-4=\dfrac{-4}{1}$ and $0=\dfrac01$.

We have $0.6=\dfrac6{10}=\dfrac35$ and $1\dfrac35=\dfrac{1\cdot5+3}{5}=\dfrac85$.

Multiplying the numerator and denominator of $\dfrac5{-10}$ by $-1$ makes the denominator positive: $\dfrac{-5}{10}=\dfrac{-1}{2}$.

b) Since $0$ is a natural number, $0\in\mathbb{N}$; since $-4$ is negative, $-4\notin\mathbb{N}$, but $-4\in\mathbb{Z}$.

Since $0.6=\dfrac35$ lies between the integers $0$ and $1$, $0.6\notin\mathbb{Z}$; but $0.6$ can be written as $\dfrac35$, so $0.6\in\mathbb{Q}$.

So all five numbers are rational numbers.

**Answer.** a) $\dfrac{-4}{1}$; $\dfrac35$; $\dfrac85$; $\dfrac{-1}{2}$; $\dfrac01$. b) $\in$; $\notin$; $\in$; $\notin$; $\in$.
:::

## Rational numbers on a number line

In Year 6 we showed integers as equally spaced points on a number line. Rational numbers have their place too, in between the integers.

:::note How to show the rational number $\dfrac mn$ ($n>0$)
1. Divide each unit segment into $n$ equal parts; each part has length $\dfrac1n$ of a unit.
2. From the origin $O$, if $m>0$ count $m$ parts to the right; if $m<0$ count $-m$ parts to the left.
:::

This works because each part has length $\dfrac1n$, so counting $m$ parts covers a distance of $\dfrac mn$. The point showing the rational number $x$ is called the point $x$.

:::example Showing numbers on a number line
Show the rational numbers $\dfrac34$ and $-\dfrac54$ on a number line.

**Solution.** Both numbers have the positive denominator $4$, so we divide each unit on the number line into $4$ equal parts, each of length $\dfrac14$.

Since $3>0$, we count $3$ parts to the right of $O$ and get the point $\dfrac34$, between $0$ and $1$.

The number $-\dfrac54=\dfrac{-5}{4}$ has a negative numerator, so we count $5$ parts to the left of $O$: the first $4$ parts reach the point $-1$, and one more part gives the point $-\dfrac54$, between $-2$ and $-1$.

So the two points are shown in the figure.

**Answer.** The point $\dfrac34$ lies between $0$ and $1$; the point $-\dfrac54$ lies between $-2$ and $-1$.
:::

:::graph Showing $\dfrac34$ and $-\dfrac54$ on a number line
alt: Number line with each unit divided into four parts; the point 3/4 lies between 0 and 1 and the point -5/4 lies between -2 and -1
x: -2.5..2.5
y: -1..1
segment: (-2.25, 0) (2.25, 0)
segment: (-2.25, -0.07) (-2.25, 0.07)
segment: (-2, -0.14) (-2, 0.14)
segment: (-1.75, -0.07) (-1.75, 0.07)
segment: (-1.5, -0.07) (-1.5, 0.07)
segment: (-1.25, -0.07) (-1.25, 0.07)
segment: (-1, -0.14) (-1, 0.14)
segment: (-0.75, -0.07) (-0.75, 0.07)
segment: (-0.5, -0.07) (-0.5, 0.07)
segment: (-0.25, -0.07) (-0.25, 0.07)
segment: (0, -0.14) (0, 0.14)
segment: (0.25, -0.07) (0.25, 0.07)
segment: (0.5, -0.07) (0.5, 0.07)
segment: (0.75, -0.07) (0.75, 0.07)
segment: (1, -0.14) (1, 0.14)
segment: (1.25, -0.07) (1.25, 0.07)
segment: (1.5, -0.07) (1.5, 0.07)
segment: (1.75, -0.07) (1.75, 0.07)
segment: (2, -0.14) (2, 0.14)
segment: (2.25, -0.07) (2.25, 0.07)
label: (-2, -0.38) "-2"
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
label: (2, -0.38) "2"
point: (0.75, 0) "3/4" above
point: (-1.25, 0) "-5/4" above
:::

## Comparing two rational numbers

Comparing rational numbers works like comparing fractions in Year 6; we only need to watch the signs.

:::note How to compare two rational numbers
- Write both numbers as fractions with the same positive denominator, then compare the numerators: $\dfrac am<\dfrac bm$ when $a<b$ (with $m>0$).
- A negative rational number is less than $0$, and $0$ is less than a positive rational number; so a negative number is less than a positive one.
- On a horizontal number line, if $x<y$ then the point $x$ lies to the left of the point $y$.
:::

Why does this work? With the same positive denominator $m$, each part has length $\dfrac1m$; counting $a$ parts goes less far than counting $b$ parts, so the point $\dfrac am$ is to the left of the point $\dfrac bm$. Negative numbers lie to the left of $O$ and positive numbers to the right.

:::example Comparing rational numbers
Compare each pair of numbers:

a) $\dfrac25$ and $\dfrac37$.

b) $-0.7$ and $-\dfrac34$.

c) $-\dfrac45$ and $\dfrac17$.

**Solution.** a) Write both fractions over the common denominator $35$: $\dfrac25=\dfrac{14}{35}$ and $\dfrac37=\dfrac{15}{35}$. Since $14<15$, we get $\dfrac25<\dfrac37$.

b) We have $-0.7=\dfrac{-7}{10}=\dfrac{-14}{20}$ and $-\dfrac34=\dfrac{-15}{20}$. Since $-15<-14$, we get $-\dfrac34<-0.7$.

c) We have $-\dfrac45<0$ and $0<\dfrac17$. Hence $-\dfrac45<\dfrac17$.

So $\dfrac25<\dfrac37$; $-\dfrac34<-0.7$; $-\dfrac45<\dfrac17$. In part b), Monday's level ($-\dfrac34$ m) is lower than Tuesday's ($-0.7$ m): that answers the question at the start.

**Answer.** a) $\dfrac25<\dfrac37$. b) $-\dfrac34<-0.7$. c) $-\dfrac45<\dfrac17$.
:::

:::graph Comparing $-\dfrac34$ and $-0.7$ on a number line
alt: Number line from -1 to 0 marked in steps of 0.05; the point -3/4 lies to the left of the point -0.7
x: -1.1..0.1
y: -1..1
segment: (-1.04, 0) (0.04, 0)
segment: (-1, -0.12) (-1, 0.12)
segment: (-0.95, -0.06) (-0.95, 0.06)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.85, -0.06) (-0.85, 0.06)
segment: (-0.8, -0.06) (-0.8, 0.06)
segment: (-0.75, -0.06) (-0.75, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.65, -0.06) (-0.65, 0.06)
segment: (-0.6, -0.06) (-0.6, 0.06)
segment: (-0.55, -0.06) (-0.55, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.45, -0.06) (-0.45, 0.06)
segment: (-0.4, -0.06) (-0.4, 0.06)
segment: (-0.35, -0.06) (-0.35, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.25, -0.06) (-0.25, 0.06)
segment: (-0.2, -0.06) (-0.2, 0.06)
segment: (-0.15, -0.06) (-0.15, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (-0.05, -0.06) (-0.05, 0.06)
segment: (0, -0.12) (0, 0.12)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
point: (-0.75, 0) "-3/4" below
point: (-0.7, 0) "-0.7" above
:::

On the number line the point $-\dfrac34$ lies to the left of the point $-0.7$, just as we found.

:::example Water level in a reservoir
Suppose the water level of a reservoir at $7$ a.m., relative to a reference level of $0$ m, is recorded as follows: Monday $-1.2$ m; Tuesday $-\dfrac{11}{10}$ m; Wednesday $\dfrac3{10}$ m; Thursday $-\dfrac54$ m.

a) On which day is the level lowest?

b) Arrange the four numbers in increasing order.

c) On how many days is the level below the reference level?

**Solution.**

*Understand.* There are four rational numbers written in different forms. The lower the water, the smaller the number, so we need to compare the four numbers.

*Plan.* Write all four numbers as fractions with the same positive denominator. The common denominator of $5$ (from $-1.2=-\dfrac65$), $10$ and $4$ is $20$.

*Solve.* We have $-1.2=\dfrac{-24}{20}$; $-\dfrac{11}{10}=\dfrac{-22}{20}$; $\dfrac3{10}=\dfrac6{20}$; $-\dfrac54=\dfrac{-25}{20}$.

Since $-25<-24<-22<6$, we get $-\dfrac54<-1.2<-\dfrac{11}{10}<\dfrac3{10}$.

a) The smallest number is $-\dfrac54$, so the level is lowest on Thursday.

b) In increasing order: $-\dfrac54$; $-1.2$; $-\dfrac{11}{10}$; $\dfrac3{10}$.

c) Three numbers are negative (Monday, Tuesday, Thursday), so the level is below the reference level on $3$ days.

*Look back.* On the number line, the four points lie in this order from left to right. Is there another way? Convert everything to decimals: $-1.25<-1.2<-1.1<0.3$, which gives the same result. What if Thursday's level were $-\dfrac76$? Then $-\dfrac76=\dfrac{-35}{30}>\dfrac{-36}{30}=-1.2$, so Monday would be the lowest day.

**Answer.** a) Thursday. b) $-\dfrac54<-1.2<-\dfrac{11}{10}<\dfrac3{10}$. c) $3$ days.
:::

:::graph Four days of water level on a number line
alt: Number line with four points: Thu at -1.25, Mon at -1.2, Tue at -1.1 and Wed at 0.3, in order from left to right
x: -1.5..0.5
y: -1..1
segment: (-1.4, 0) (0.4, 0)
segment: (-1.4, -0.06) (-1.4, 0.06)
segment: (-1.3, -0.06) (-1.3, 0.06)
segment: (-1.2, -0.06) (-1.2, 0.06)
segment: (-1.1, -0.06) (-1.1, 0.06)
segment: (-1, -0.12) (-1, 0.12)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.8, -0.06) (-0.8, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.6, -0.06) (-0.6, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.4, -0.06) (-0.4, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.2, -0.06) (-0.2, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (0, -0.12) (0, 0.12)
segment: (0.1, -0.06) (0.1, 0.06)
segment: (0.2, -0.06) (0.2, 0.06)
segment: (0.3, -0.06) (0.3, 0.06)
segment: (0.4, -0.06) (0.4, 0.06)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
point: (-1.2, 0) "Mon" above
point: (-1.1, 0) "Tue" below
point: (0.3, 0) "Wed" above
point: (-1.25, 0) "Thu" below
:::

## The opposite of a rational number

In Year 6, $3$ and $-3$ are opposites: their points lie on either side of $O$ at the same distance from $O$. This is still true for rational numbers.

:::definition Opposite
Two rational numbers are **opposites** if their points on the number line lie on opposite sides of $O$ and at the same distance from $O$. The opposite of $x$ is written $-x$; the opposite of $0$ is $0$.
:::

The opposite of $\dfrac ab$ is $-\dfrac ab=\dfrac{-a}{b}$, and $-(-x)=x$.

:::example Finding opposites
a) Find the opposite of each number: $\dfrac49$; $-\dfrac75$; $0.25$; $0$.

b) Show $\dfrac52$ and its opposite on a number line.

**Solution.** a) The opposite of $\dfrac49$ is $-\dfrac49$.

The opposite of $-\dfrac75$ is $-\left(-\dfrac75\right)=\dfrac75$.

The opposite of $0.25$ is $-0.25$; the opposite of $0$ is $0$.

b) The opposite of $\dfrac52$ is $-\dfrac52$. We divide each unit into $2$ equal parts. The point $\dfrac52$ is five parts to the right of $O$, between $2$ and $3$; the point $-\dfrac52$ is five parts to the left of $O$, between $-3$ and $-2$. The two points are symmetric about $O$.

So we get the result shown in the figure.

**Answer.** a) $-\dfrac49$; $\dfrac75$; $-0.25$; $0$. b) The points $\dfrac52$ and $-\dfrac52$ as in the figure.
:::

:::graph The opposite numbers $\dfrac52$ and $-\dfrac52$
alt: Number line with the points 5/2 and -5/2 on opposite sides of the origin 0 at the same distance from it
x: -3.4..3.4
y: -1..1
segment: (-3.06, 0) (3.06, 0)
segment: (-2.9, -0.07) (-2.9, 0.07)
segment: (-2.4, -0.07) (-2.4, 0.07)
segment: (-1.9, -0.07) (-1.9, 0.07)
segment: (-1.4, -0.07) (-1.4, 0.07)
segment: (-0.9, -0.07) (-0.9, 0.07)
segment: (-0.4, -0.07) (-0.4, 0.07)
segment: (0.1, -0.07) (0.1, 0.07)
segment: (0.6, -0.07) (0.6, 0.07)
segment: (1.1, -0.07) (1.1, 0.07)
segment: (1.6, -0.07) (1.6, 0.07)
segment: (2.1, -0.07) (2.1, 0.07)
segment: (2.6, -0.07) (2.6, 0.07)
label: (-3, -0.38) "-3"
label: (-2, -0.38) "-2"
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
label: (2, -0.38) "2"
label: (3, -0.38) "3"
point: (2.5, 0) "5/2" above
point: (-2.5, 0) "-5/2" above
:::

## The absolute value of a rational number

When we say "owes $12$ thousand đồng", we care about the amount, not the sign. That idea is the absolute value.

:::definition Absolute value
The absolute value of a rational number $x$, written $|x|$, is the distance from the point $x$ to the point $O$ on the number line.
:::

Since a distance is never negative,
$$|x|=\begin{cases}x&\text{if }x\geq0,\\-x&\text{if }x<0.\end{cases}$$
Opposite numbers have the same absolute value: $|x|=|-x|$.

:::example Calculating absolute values
a) Calculate $\left|-\dfrac38\right|$; $|5.2|$; $-\left|-\dfrac25\right|$.

b) Find $x$ if $|x|=\dfrac35$.

**Solution.** a) Since $-\dfrac38<0$, we have $\left|-\dfrac38\right|=-\left(-\dfrac38\right)=\dfrac38$.

Since $5.2>0$, we have $|5.2|=5.2$.

We have $\left|-\dfrac25\right|=\dfrac25$, so $-\left|-\dfrac25\right|=-\dfrac25$.

b) Since $|x|=\dfrac35$, the point $x$ is at distance $\dfrac35$ from $O$. There are two such points, one to the right and one to the left of $O$ (see the figure), so $x=\dfrac35$ or $x=-\dfrac35$.

So $x=\dfrac35$ or $x=-\dfrac35$.

**Answer.** a) $\dfrac38$; $5.2$; $-\dfrac25$. b) $x=\dfrac35$ or $x=-\dfrac35$.
:::

:::graph Points at distance $\dfrac35$ from $O$
alt: Number line with the points 3/5 and -3/5 at the same distance 3/5 from the origin 0, each distance drawn as a segment above the line
x: -1.3..1.3
y: -1..1
segment: (-1.17, 0) (1.17, 0)
segment: (-1.1, -0.06) (-1.1, 0.06)
segment: (-0.9, -0.06) (-0.9, 0.06)
segment: (-0.7, -0.06) (-0.7, 0.06)
segment: (-0.5, -0.06) (-0.5, 0.06)
segment: (-0.3, -0.06) (-0.3, 0.06)
segment: (-0.1, -0.06) (-0.1, 0.06)
segment: (0.1, -0.06) (0.1, 0.06)
segment: (0.3, -0.06) (0.3, 0.06)
segment: (0.5, -0.06) (0.5, 0.06)
segment: (0.7, -0.06) (0.7, 0.06)
segment: (0.9, -0.06) (0.9, 0.06)
segment: (1.1, -0.06) (1.1, 0.06)
label: (-1, -0.38) "-1"
label: (0, -0.38) "0"
label: (1, -0.38) "1"
point: (0.6, 0) "3/5" below
point: (-0.6, 0) "-3/5" below
segment: (0, 0.4) (0.6, 0.4)
segment: (-0.6, 0.4) (0, 0.4)
label: (0.3, 0.62) "3/5"
label: (-0.3, 0.62) "3/5"
:::

:::warning Common mistakes
- **Comparing negative numbers like positive ones.** Wrong: $-0.75>-0.7$ because $0.75>0.7$. Why it is wrong: the further a negative number is to the left of $O$, the smaller it is. Right: $-0.75<-0.7$.
- **Thinking an absolute value can be negative.** Wrong: $\left|-\dfrac25\right|=-\dfrac25$. Why it is wrong: $|x|$ is a distance, so it is never negative. Right: $\left|-\dfrac25\right|=\dfrac25$.
- **Mixing up the opposite of a negative number.** Wrong: the opposite of $-\dfrac35$ is $-\dfrac35$. Why it is wrong: changing the sign of a negative number gives a positive number. Right: the opposite of $-\dfrac35$ is $\dfrac35$.
:::

## Key terms

:::terms
- rational number | số hữu tỉ
- the set of rational numbers | tập hợp các số hữu tỉ
- positive rational number | số hữu tỉ dương
- negative rational number | số hữu tỉ âm
- number line | trục số
- positive denominator | mẫu số dương
- compare | so sánh
- opposite | số đối
- absolute value | giá trị tuyệt đối
:::

## Summary

- A rational number is a number that can be written as $\dfrac ab$ with $a$, $b$ integers and $b\neq0$; they form the set $\mathbb{Q}$, and $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$.
- To show $\dfrac mn$ ($n>0$): divide each unit into $n$ equal parts and count $m$ parts from $O$ (right if $m>0$, left if $m<0$).
- To compare: write over a positive common denominator and compare the numerators; negative numbers are less than $0$ and less than positive numbers; the point further left is the smaller number.
- The opposite of $x$ is $-x$; $|x|$ is the distance from $x$ to $O$ and is never negative.
- The opening question: $-\dfrac34<-0.7$, so Monday's water level was lower.

## Practice

Each exercise comes with what you need and hints. Try it yourself first, then open the solution.

:::exercise
Fill in $\in$ or $\notin$:

a) $0\ldots\mathbb{N}$.

b) $-7\ldots\mathbb{N}$.

c) $-7\ldots\mathbb{Z}$.

d) $\dfrac34\ldots\mathbb{Z}$.

e) $\dfrac{-6}{-3}\ldots\mathbb{Z}$.

f) $-1.5\ldots\mathbb{Q}$.

::hint
**What you need:** $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}$; a number belongs to $\mathbb{Z}$ when it equals an integer.

**Steps:**
1. In part e), work out $\dfrac{-6}{-3}$ before deciding.
2. In part f), write $-1.5$ as the fraction $\dfrac{-3}{2}$.

::solution
a) $0$ is a natural number, so $0\in\mathbb{N}$.

b) $-7$ is negative, so $-7\notin\mathbb{N}$.

c) $-7$ is an integer, so $-7\in\mathbb{Z}$.

d) $\dfrac34$ lies between $0$ and $1$, so it is not an integer: $\dfrac34\notin\mathbb{Z}$.

e) We have $\dfrac{-6}{-3}=2$, so $\dfrac{-6}{-3}\in\mathbb{Z}$.

f) We have $-1.5=\dfrac{-3}{2}$, so $-1.5\in\mathbb{Q}$.

So the symbols to fill in are $\in$; $\notin$; $\in$; $\notin$; $\in$; $\in$.

**Answer.** a) $\in$. b) $\notin$. c) $\in$. d) $\notin$. e) $\in$. f) $\in$.
:::

:::exercise
Write each number as a fraction with a positive denominator (simplify if possible):

a) $-0.35$.

b) $2\dfrac14$.

c) $\dfrac4{-6}$.

d) $-12$.

::hint
**What you need:** a mixed number $a\dfrac bc=\dfrac{a\cdot c+b}{c}$; multiply the numerator and denominator by $-1$ to make the denominator positive.

**Steps:**
1. Part a): write $-0.35=\dfrac{-35}{100}$ and divide by $5$.
2. Part c): multiply the numerator and denominator of $\dfrac4{-6}$ by $-1$, then divide by $2$.

::solution
a) We have $-0.35=\dfrac{-35}{100}=\dfrac{-7}{20}$ (dividing the numerator and denominator by $5$).

b) We have $2\dfrac14=\dfrac{2\cdot4+1}{4}=\dfrac94$.

c) Multiplying the numerator and denominator by $-1$, we get $\dfrac4{-6}=\dfrac{-4}{6}=\dfrac{-2}{3}$ (dividing by $2$).

d) We have $-12=\dfrac{-12}{1}$.

So a) $\dfrac{-7}{20}$; b) $\dfrac94$; c) $\dfrac{-2}{3}$; d) $\dfrac{-12}{1}$.

**Answer.** a) $\dfrac{-7}{20}$. b) $\dfrac94$. c) $\dfrac{-2}{3}$. d) $\dfrac{-12}{1}$.
:::

:::exercise
Each unit of a number line is divided into $6$ equal parts. The point $M$ lies to the right of the origin $O$, five parts from $O$; the point $N$ lies to the left of $O$, eight parts from $O$.

a) Which rational number does each of $M$ and $N$ show?

b) Between which two consecutive integers does $N$ lie?

::hint
**What you need:** each part has length $\dfrac16$ of a unit; points to the right of $O$ are positive, points to the left are negative.

**Steps:**
1. $M$ is five parts from $O$, so it shows $\dfrac56$.
2. $N$ is eight parts to the left of $O$, so it shows $-\dfrac86$; simplify, then compare with $-1$ and $-2$ using the denominator $6$.

::solution
a) Each part has length $\dfrac16$. The point $M$ is five parts to the right of $O$, so $M$ shows $\dfrac56$.

The point $N$ is eight parts to the left of $O$, so $N$ shows $-\dfrac86=-\dfrac43$.

b) We have $-1=\dfrac{-6}{6}$, $-\dfrac43=\dfrac{-8}{6}$ and $-2=\dfrac{-12}{6}$. Since $-12<-8<-6$, we get $-2<-\dfrac43<-1$.

So $N$ shows $-\dfrac43$ and lies between the integers $-2$ and $-1$.

**Answer.** a) $M$: $\dfrac56$; $N$: $-\dfrac43$. b) Between $-2$ and $-1$.
:::

:::exercise
Compare each pair of rational numbers:

a) $-\dfrac58$ and $-\dfrac35$.

b) $-0.4$ and $-\dfrac37$.

c) $-\dfrac7{10}$ and $\dfrac1{1000}$.

::hint
**What you need:** write over the same positive denominator and compare numerators; a negative number is less than a positive number.

**Steps:**
1. Part a): the common denominator of $8$ and $5$ is $40$.
2. Part b): write $-0.4=-\dfrac25$, then use the common denominator $35$.
3. Part c): the numbers have different signs, so no common denominator is needed.

::solution
a) The common denominator is $40$: $-\dfrac58=\dfrac{-25}{40}$ and $-\dfrac35=\dfrac{-24}{40}$. Since $-25<-24$, we get $-\dfrac58<-\dfrac35$.

b) We have $-0.4=-\dfrac25=\dfrac{-14}{35}$ and $-\dfrac37=\dfrac{-15}{35}$. Since $-15<-14$, we get $-\dfrac37<-0.4$.

c) Since $-\dfrac7{10}<0$ and $0<\dfrac1{1000}$, we get $-\dfrac7{10}<\dfrac1{1000}$.

**Answer.** a) $-\dfrac58<-\dfrac35$. b) $-\dfrac37<-0.4$. c) $-\dfrac7{10}<\dfrac1{1000}$.
:::

:::exercise
A class fund book records the money of three students (in thousand đồng; a negative number means the student owes money): Hà $-12.5$; Hùng $7.5$; Lan $-\dfrac{37}4$.

a) Arrange the three numbers in decreasing order.

b) Who owes the most? How many thousand đồng?

::hint
**What you need:** a positive number is greater than a negative one; the amount owed is the absolute value of the negative number.

**Steps:**
1. Convert $-\dfrac{37}4$ to a decimal.
2. Order the numbers, then find the absolute values of the two negative numbers to compare the debts.

::solution
We have $-\dfrac{37}4=-9.25$.

a) Since $7.5>0$, it is the greatest. Of the two negative numbers, the point $-9.25$ lies to the right of the point $-12.5$, so $-9.25>-12.5$. Hence $7.5>-\dfrac{37}4>-12.5$.

b) Hà and Lan owe money. Hà owes $|-12.5|=12.5$; Lan owes $\left|-\dfrac{37}4\right|=9.25$. Since $12.5>9.25$, Hà owes the most.

So Hà owes the most, $12.5$ thousand đồng.

**Answer.** a) $7.5$; $-\dfrac{37}4$; $-12.5$. b) Hà, $12.5$ thousand đồng.
:::

:::exercise
a) Find the opposite of each number: $-\dfrac94$; $\dfrac{-3}{-8}$; $0.6$.

b) Calculate: $\left|-\dfrac94\right|$; $|0.6|$; $-\left|\dfrac{-3}{-8}\right|$.

::hint
**What you need:** the opposite of $x$ is $-x$; $|x|=x$ if $x\geq0$ and $|x|=-x$ if $x<0$.

**Steps:**
1. Rewrite $\dfrac{-3}{-8}$ with a positive denominator before doing the other parts.
2. Decide the sign of the number inside the absolute value, then remove the bars.

::solution
a) The opposite of $-\dfrac94$ is $\dfrac94$.

Since $\dfrac{-3}{-8}=\dfrac38$, its opposite is $-\dfrac38$.

The opposite of $0.6$ is $-0.6$.

b) Since $-\dfrac94<0$, $\left|-\dfrac94\right|=\dfrac94$.

Since $0.6>0$, $|0.6|=0.6$.

Since $\dfrac{-3}{-8}=\dfrac38>0$, $\left|\dfrac{-3}{-8}\right|=\dfrac38$, so $-\left|\dfrac{-3}{-8}\right|=-\dfrac38$.

**Answer.** a) $\dfrac94$; $-\dfrac38$; $-0.6$. b) $\dfrac94$; $0.6$; $-\dfrac38$.
:::

:::exercise
Find $x$ if:

a) $|x|=\dfrac74$.

b) $|x|=0$.

c) $|x|=-\dfrac13$.

::hint
**What you need:** $|x|$ is the distance from the point $x$ to $O$, so it is never negative.

**Steps:**
1. Part a): two points are at distance $\dfrac74$ from $O$, one on each side.
2. Part c): ask whether a distance can equal a negative number.

::solution
a) The point $x$ is at distance $\dfrac74$ from $O$, so $x=\dfrac74$ or $x=-\dfrac74$.

b) The distance from $x$ to $O$ is $0$, so the point $x$ is $O$ itself: $x=0$.

c) Since $|x|\geq0$ for every $x$, but $-\dfrac13<0$, no number $x$ satisfies this.

So a) $x=\pm\dfrac74$; b) $x=0$; c) there is no such $x$.

**Answer.** a) $x=\dfrac74$ or $x=-\dfrac74$. b) $x=0$. c) No such $x$.
:::

:::exercise
Revisit [the set of integers](lesson:set-of-integers). Find all integers $x$ such that $-\dfrac94<x\leq\dfrac53$.

::hint
**What you need:** decide which integers each end-point lies between, then list the integers in between.

**Steps:**
1. Write $-\dfrac94=\dfrac{-9}{4}$ and compare it with $\dfrac{-12}{4}$ and $\dfrac{-8}{4}$.
2. Write $\dfrac53$ and compare it with $\dfrac33$ and $\dfrac63$.

::solution
We have $\dfrac{-12}4<\dfrac{-9}4<\dfrac{-8}4$, so $-3<-\dfrac94<-2$.

We have $\dfrac33<\dfrac53<\dfrac63$, so $1<\dfrac53<2$.

The integer $x$ must be greater than $-\dfrac94$, that is $x\geq-2$, and must satisfy $x\leq\dfrac53$, that is $x\leq1$.

So $x\in\{-2, -1, 0, 1\}$.

**Answer.** $x\in\{-2, -1, 0, 1\}$.
:::

:::exercise Challenge
Find three rational numbers between $\dfrac13$ and $\dfrac12$. How many such numbers can be found? Why?

::hint
**What you need:** if two fractions have the same positive denominator and no integer lies between the numerators, multiply the numerator and denominator by a positive integer to "make room".

**Steps:**
1. Write $\dfrac13$ and $\dfrac12$ over $6$ and notice the numerators $2$ and $3$.
2. Multiply the numerator and denominator by $4$ and list the numerators in between; then try an arbitrary $k$.

::solution
The common denominator is $6$: $\dfrac13=\dfrac26$ and $\dfrac12=\dfrac36$, but no integer lies between the numerators $2$ and $3$. We multiply the numerator and denominator by $4$: $\dfrac13=\dfrac8{24}$ and $\dfrac12=\dfrac{12}{24}$.

Since $8<9<10<11<12$, we get $\dfrac13<\dfrac9{24}<\dfrac{10}{24}<\dfrac{11}{24}<\dfrac12$, that is $\dfrac13<\dfrac38<\dfrac5{12}<\dfrac{11}{24}<\dfrac12$.

In general, multiplying the numerator and denominator by a positive integer $k$ gives numerators $2k$ and $3k$, with $k-1$ integers between them, which gives $k-1$ rational numbers in between. Since $k$ can be as large as we like, there are infinitely many such numbers.

So there are infinitely many rational numbers between $\dfrac13$ and $\dfrac12$.

**Answer.** For example $\dfrac38$; $\dfrac5{12}$; $\dfrac{11}{24}$. There are infinitely many such numbers.
:::

## Mini test

:::quiz
::mc
Which statement is correct?
A. Every rational number is an integer.
B. The number $0$ is not a rational number.
C. Every integer is a rational number.
D. A fraction with a negative denominator is not a rational number.
::key C
An integer $n=\dfrac n1$ is rational. A reverses the relation $\mathbb{Z}\subset\mathbb{Q}$, B forgets $0=\dfrac01$, D forgets that $\dfrac{3}{-4}=\dfrac{-3}{4}$.

::mc
The greatest of the numbers $-\dfrac35$; $-\dfrac23$; $-\dfrac58$; $-\dfrac12$ is
A. $-\dfrac35$.
B. $-\dfrac23$.
C. $-\dfrac58$.
D. $-\dfrac12$.
::key D
Over the common denominator $120$: $\dfrac{-72}{120}$, $\dfrac{-80}{120}$, $\dfrac{-75}{120}$, $\dfrac{-60}{120}$. The greatest is $-\dfrac{60}{120}=-\dfrac12$. B is the smallest; it is chosen by those who think a smaller denominator means a greater number.

::mc
The opposite of $\dfrac{-4}{-9}$ is
A. $-\dfrac49$.
B. $\dfrac49$.
C. $\dfrac94$.
D. $-\dfrac94$.
::key A
We have $\dfrac{-4}{-9}=\dfrac49$, so its opposite is $-\dfrac49$. B is the number itself; C and D confuse the opposite with swapping numerator and denominator.

::mc
Given $|x|=\dfrac56$, $x$ equals
A. $\dfrac56$.
B. $\dfrac56$ or $-\dfrac56$.
C. $-\dfrac56$.
D. $\dfrac65$ or $-\dfrac65$.
::key B
The point $x$ is at distance $\dfrac56$ from $O$, so $x=\pm\dfrac56$. A and C miss one value; D swaps numerator and denominator.

::tf
Let $x=-\dfrac34$ and $y=-0.8$ be two rational numbers. Decide whether each statement is true or false.
a) $x<y$.
b) $|x|<|y|$.
c) The opposite of $y$ is $\dfrac45$.
d) Exactly one rational number lies between $x$ and $y$.
::key F T T F
a) False: $x=-0.75>-0.8=y$. b) True: $|x|=0.75<0.8=|y|$. c) True: $-y=0.8=\dfrac45$. d) False: between two different rational numbers there are infinitely many.

::sa
How many integers $x$ satisfy $|x|<\dfrac72$?
::key 7
We have $|x|<3.5$, so $-3.5<x<3.5$, that is $x\in\{-3, -2, -1, 0, 1, 2, 3\}$: $7$ integers.

::sa
Write the opposite of $-\dfrac7{20}$ as a decimal.
::key 0.35
The opposite of $-\dfrac7{20}$ is $\dfrac7{20}=\dfrac{35}{100}=0.35$.
:::
