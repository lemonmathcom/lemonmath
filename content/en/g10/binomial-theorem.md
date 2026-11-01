---
title: The binomial theorem
description: Expand (a+b)^n with Pascal's triangle and binomial coefficients, find a given term or coefficient, and use the theorem for sums and approximations.
minutes: 16
---

:::goals
- Expand $(a+b)^n$ using Pascal's triangle and binomial coefficients.
- Write the general term $T_{k+1}$ and find a given coefficient or the constant term.
- Find the sum of coefficients with a substitution.
- Use the first terms of the expansion to approximate powers such as $1.01^5$.
:::

You know $(a+b)^2=a^2+2ab+b^2$. What about $(a+b)^5$? Multiplying five brackets by hand is slow and error-prone, but there is a pattern, and it comes from counting: each term arises by choosing $a$ or $b$ from each bracket. That is exactly what the binomial coefficients $\binom nk$ count.

## Small powers and Pascal's triangle

$$\begin{aligned}(a+b)^2&=a^2+2ab+b^2\\(a+b)^3&=a^3+3a^2b+3ab^2+b^3\\(a+b)^4&=a^4+4a^3b+6a^2b^2+4ab^3+b^4\end{aligned}$$

The coefficients $1, 2, 1$ then $1, 3, 3, 1$ then $1, 4, 6, 4, 1$ form **Pascal's triangle**: each number is the sum of the two above it, because $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$.

$$\begin{array}{ccccccccccccc}
 & & & & & & 1 & & & & & & \\
 & & & & & 1 & & 1 & & & & & \\
 & & & & 1 & & 2 & & 1 & & & & \\
 & & & 1 & & 3 & & 3 & & 1 & & & \\
 & & 1 & & 4 & & 6 & & 4 & & 1 & & \\
 & 1 & & 5 & & 10 & & 10 & & 5 & & 1 & \\
1 & & 6 & & 15 & & 20 & & 15 & & 6 & & 1
\end{array}$$

Row $n$ of the triangle lists $\binom n0, \binom n1, \dots, \binom nn$.

## The binomial theorem

:::theorem Binomial theorem
For every positive integer $n$,
$$(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k=a^n+\binom n1a^{n-1}b+\cdots+\binom n{n-1}ab^{n-1}+b^n.$$
The $(k+1)$-th term is $T_{k+1}=\binom nk a^{n-k}b^k$. The expansion has $n+1$ terms.
:::

:::example Expand $(x+2)^4$
**Solution.** Row $4$ is $1, 4, 6, 4, 1$. Then
$$(x+2)^4=x^4+4x^3\cdot2+6x^2\cdot4+4x\cdot8+16=x^4+8x^3+24x^2+32x+16.$$
:::

:::example A negative term
Expand $(2x-3)^3$.

**Solution.** Row $3$ is $1, 3, 3, 1$ with $a=2x$ and $b=-3$:
$$(2x)^3+3(2x)^2(-3)+3(2x)(-3)^2+(-3)^3=8x^3-36x^2+54x-27.$$
:::

## One coefficient only

You rarely need the whole expansion. Write the general term and pick the right $k$.

:::example Coefficient of $x^3$
Find the coefficient of $x^3$ in $(1+2x)^6$.

**Solution.** $T_{k+1}=\binom6k\cdot1^{6-k}(2x)^k=\binom6k2^kx^k$. We need $k=3$: $\binom63\cdot2^3=20\cdot8=160$.
:::

:::example The constant term
Find the constant term of $\left(x+\dfrac2x\right)^6$.

**Solution.** $T_{k+1}=\binom6kx^{6-k}\left(\frac2x\right)^k=\binom6k2^kx^{6-2k}$. The power of $x$ is $0$ when $k=3$: $\binom63\cdot2^3=20\cdot8=160$.
:::

## Sum of coefficients and approximations

Putting $x=1$ in a polynomial gives the **sum of its coefficients**. Putting $a=b=1$ in the theorem gives $\sum_{k}\binom nk=2^n$.

:::example Sum of coefficients
Find the sum of the coefficients of $(3x+1)^5$.

**Solution.** Put $x=1$: $(3+1)^5=4^5=1024$.
:::

:::example An approximation
Estimate $1.01^5$.

**Solution.** $1.01^5=(1+0.01)^5=1+5(0.01)+10(0.01)^2+10(0.01)^3+\cdots=1+0.05+0.001+0.00001+\cdots\approx1.0510$. (Exact value: $1.0510100501$.)
:::

:::warning Common mistakes
- Forgetting the powers of the numbers: in $(2x-3)^3$ both $2$ and $-3$ are raised to powers.
- Losing the sign: with $b$ negative, terms alternate in sign.
- Using $k$ instead of $k+1$ for the position of a term ($T_{k+1}$ uses $\binom nk$).
- Writing $(a+b)^n=a^n+b^n$.
:::

## Key terms

:::terms
- binomial theorem | công thức nhị thức Newton
- binomial coefficient | hệ số nhị thức
- Pascal's triangle | tam giác Pascal
- general term | số hạng tổng quát
- expansion | khai triển
- constant term | số hạng không chứa $x$
- sum of coefficients | tổng các hệ số
- approximation | giá trị gần đúng
:::

## Summary

- $(a+b)^n=\sum_{k=0}^n\binom nka^{n-k}b^k$, with $n+1$ terms.
- The coefficients are row $n$ of Pascal's triangle.
- $T_{k+1}=\binom nka^{n-k}b^k$; set the power of $x$ to find $k$.
- Sum of coefficients: put $x=1$. Approximation: use the first few terms.

## Practice

:::practice
1. Expand $(x+1)^5$.
2. Expand $(x-2)^4$.
3. Find the coefficient of $x^2$ in $(3+x)^5$.
4. Find the $5$th term of $(a+b)^7$.
5. Find the coefficient of $x^4$ in $(1-x)^8$.
6. Find the sum of the coefficients of $(2x-3)^4$.
7. Find the value of $\binom60+\binom61+\cdots+\binom66$.
8. Find the constant term of $\left(x^2+\dfrac1x\right)^6$.
9. Challenge. Estimate $1.02^6$ with the first three terms of the expansion.
10. Challenge. Find the coefficient of $x^3$ in $(1+x)^5+(1+x)^6$.
:::

:::solution Show solutions
1. Row $5$: $1, 5, 10, 10, 5, 1$. $(x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1$.
2. Row $4$ with $b=-2$: $x^4-8x^3+24x^2-32x+16$.
3. $T_{k+1}=\binom5k3^{5-k}x^k$. For $k=2$: $\binom52\cdot3^3=10\cdot27=270$.
4. $T_5=T_{4+1}=\binom74a^3b^4=35\,a^3b^4$.
5. $T_{k+1}=\binom8k(-x)^k$. For $k=4$: $\binom84=70$ (the sign is $+$ since $(-1)^4=1$).
6. Put $x=1$: $(2-3)^4=1$.
7. This is $(1+1)^6=2^6=64$.
8. $T_{k+1}=\binom6k(x^2)^{6-k}x^{-k}=\binom6kx^{12-3k}$. The power is $0$ when $k=4$: $\binom64=15$.
9. $1.02^6\approx1+6(0.02)+15(0.02)^2=1+0.12+0.006=1.126$. (Exact value $1.1262$ to four decimals.)
10. The coefficient of $x^3$ is $\binom53+\binom63=10+20=30$.
:::
