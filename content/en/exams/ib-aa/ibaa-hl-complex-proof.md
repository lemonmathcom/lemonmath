---
title: Complex numbers, induction and proof
description: IB Maths AA HL: complex numbers in Cartesian, polar and Euler form, De Moivre's theorem, roots, proof by induction, contradiction and counterexample.
minutes: 50
---

:::goals
- Calculate with complex numbers in Cartesian form, including division and conjugates.
- Convert between Cartesian, modulus-argument and Euler forms, and use De Moivre's theorem.
- Find the $n$th roots of a complex number and the complex roots of real polynomials.
- Write proofs by mathematical induction, by contradiction, and disprove statements with a counterexample.
:::

These HL topics appear in Paper 1 and Paper 2, and often in the long Section B questions, where a complex number problem leads into a trigonometric identity or a proof. They reward clean notation: arguments in radians, roots listed completely, and the formal structure of an induction proof written out every time.

## Complex numbers in Cartesian form

A complex number is $z=a+bi$, with $i^2=-1$. Its **conjugate** is $z^*=a-bi$ and its **modulus** is $|z|=\sqrt{a^2+b^2}$. To divide, multiply numerator and denominator by the conjugate of the denominator.

:::example Products and quotients
Let $z=3+4i$ and $w=1-2i$. Find $zw$, $\dfrac zw$ and $|z|$. [5 marks]

**Solution.** $zw=3-6i+4i-8i^2=11-2i$.

$\dfrac zw=\dfrac{(3+4i)(1+2i)}{(1-2i)(1+2i)}=\dfrac{3+6i+4i+8i^2}{5}=\dfrac{-5+10i}{5}=-1+2i$.

$|z|=\sqrt{9+16}=5$.
:::

## Modulus-argument and Euler form

$$z=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta=re^{i\theta},$$
where $r=|z|$ and $\theta=\arg z$, usually taken in $-\pi<\theta\le\pi$. In this form, multiplying multiplies moduli and adds arguments, and **De Moivre's theorem** gives $\left(re^{i\theta}\right)^n=r^ne^{in\theta}$.

:::example A power with De Moivre
Let $z=1+i\sqrt3$.
(a) Write $z$ in the form $re^{i\theta}$. [2 marks]
(b) Hence find $z^6$. [2 marks]

**Solution.** (a) $r=\sqrt{1+3}=2$ and $\theta=\arctan\sqrt3=\dfrac\pi3$ (first quadrant), so $z=2e^{i\pi/3}$.

(b) $z^6=2^6e^{2\pi i}=64$.
:::

## Roots of complex numbers and polynomials

The equation $z^n=re^{i\theta}$ has $n$ distinct roots
$$z=r^{1/n}e^{i(\theta+2k\pi)/n},\quad k=0,1,\dots,n-1.$$
They lie on a circle of radius $r^{1/n}$, equally spaced. A polynomial with **real coefficients** has non-real roots in conjugate pairs: if $2+i$ is a root, so is $2-i$.

:::example Cube roots
Solve $z^3=8i$, giving your answers in the form $a+bi$. [6 marks]

**Solution.** $8i=8e^{i\pi/2}$, so $z=2e^{i(\pi/6+2k\pi/3)}$ for $k=0,1,2$:

$k=0$: $2e^{i\pi/6}=\sqrt3+i$. $k=1$: $2e^{i5\pi/6}=-\sqrt3+i$. $k=2$: $2e^{i3\pi/2}=-2i$.
:::

:::example A cubic with a complex root
Given that $2+i$ is a root of $z^3-5z^2+9z-5=0$, find the other roots. [5 marks]

**Solution.** The coefficients are real, so $2-i$ is also a root, and $(z-2-i)(z-2+i)=z^2-4z+5$ is a factor. Dividing: $z^3-5z^2+9z-5=\left(z^2-4z+5\right)(z-1)$. The roots are $2+i$, $2-i$ and $1$.
:::

## Proof by induction

:::note The four parts graders look for
1. **Basis:** show that the statement is true for the first value, usually $n=1$.
2. **Assumption:** assume it is true for $n=k$.
3. **Inductive step:** use the assumption to prove it for $n=k+1$.
4. **Conclusion:** "Since the statement is true for $n=1$, and true for $n=k+1$ whenever it is true for $n=k$, it is true for all $n\in\mathbb{Z}^+$ by mathematical induction."
:::

:::example A sum by induction
Prove by induction that $\displaystyle\sum_{r=1}^{n}r(r+1)=\frac{n(n+1)(n+2)}{3}$ for all $n\in\mathbb{Z}^+$. [7 marks]

**Solution.** **Basis:** for $n=1$, LHS $=1\cdot2=2$ and RHS $=\dfrac{1\cdot2\cdot3}{3}=2$.

**Assumption:** suppose $\displaystyle\sum_{r=1}^{k}r(r+1)=\frac{k(k+1)(k+2)}{3}$.

**Step:** $\displaystyle\sum_{r=1}^{k+1}r(r+1)=\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)=\frac{(k+1)(k+2)(k+3)}{3}$, which is the formula with $n=k+1$.

**Conclusion:** true for $n=1$, and true for $n=k+1$ whenever true for $n=k$, so true for all $n\in\mathbb{Z}^+$ by induction.
:::

## Contradiction and counterexample

To prove by **contradiction**, assume the statement is false and deduce something impossible. To show a statement is false, one **counterexample** is enough.

:::example A counterexample
Show that the statement "$n^2+n+41$ is prime for every positive integer $n$" is false. [2 marks]

**Solution.** For $n=40$: $40^2+40+41=1681=41^2$, which is not prime. (The expression is prime for $n=1$ to $39$, which is why checking a few cases is not a proof.)
:::

:::warning Common traps
- **Argument in the wrong quadrant.** $\arctan\dfrac ba$ gives the right angle only for $a>0$; draw $z$ on an Argand diagram first.
- **Missing roots.** $z^n=w$ always has $n$ roots; list all of them.
- **Induction without a conclusion**, or with "assume true for all $n$" instead of "for $n=k$".
- **Using the assumption backwards:** start from the $k+1$ case and use the $n=k$ statement inside it.
- **Proof by examples.** Checking cases never proves a "for all" statement.
:::

:::terms
- complex conjugate, modulus, argument | số phức liên hợp, môđun, acgumen
- Argand diagram | mặt phẳng phức (biểu đồ Argand)
- modulus-argument form, Euler form | dạng lượng giác, dạng mũ (Euler)
- De Moivre's theorem | định lí De Moivre
- roots of unity | căn bậc $n$ của đơn vị
- proof by induction | chứng minh quy nạp
- proof by contradiction | chứng minh phản chứng
- counterexample | phản ví dụ
:::

## Similar exercises

:::exercise Cartesian arithmetic
Find $(2-i)^2$ and $\dfrac{1}{2-i}$ in the form $a+bi$. [4 marks]

::hint
**What you need:** expand; multiply by $\dfrac{2+i}{2+i}$.

::solution
$(2-i)^2=4-4i+i^2=3-4i$. $\dfrac{1}{2-i}=\dfrac{2+i}{5}=\dfrac25+\dfrac15i$.
:::

:::exercise Euler form
Write $-2-2i$ in the form $re^{i\theta}$, $-\pi<\theta\le\pi$. [3 marks]

::hint
**What you need:** the point is in the third quadrant.

::solution
$r=\sqrt{8}=2\sqrt2$ and $\theta=-\dfrac{3\pi}{4}$, so $-2-2i=2\sqrt2e^{-3\pi i/4}$.
:::

:::exercise Fourth roots
Solve $z^4=16$. [4 marks]

::hint
**What you need:** $16=16e^{i0}$; four roots spaced by $\dfrac\pi2$.

::solution
$z=2e^{ik\pi/2}$, $k=0,1,2,3$: $2$, $2i$, $-2$, $-2i$.
:::

:::exercise Equating parts
Find $z=a+bi$ such that $z+2z^*=6-i$. [3 marks]

::hint
**What you need:** $z+2z^*=3a-bi$; compare real and imaginary parts.

::solution
$3a=6$ and $-b=-1$, so $z=2+i$.
:::

:::exercise Divisibility by induction
Prove by induction that $3^{2n}-1$ is divisible by $8$ for all $n\in\mathbb{Z}^+$. [6 marks]

::hint
**What you need:** $3^{2(k+1)}-1=9\cdot3^{2k}-1=9\left(3^{2k}-1\right)+8$.

::solution
Basis: $3^2-1=8$. Assume $3^{2k}-1=8m$ for some integer $m$. Then $3^{2k+2}-1=9(8m)+8=8(9m+1)$, a multiple of $8$. Since the statement is true for $n=1$ and true for $n=k+1$ whenever true for $n=k$, it is true for all $n\in\mathbb{Z}^+$ by induction.
:::

## Application exercises

:::exercise A trigonometric identity from De Moivre
Use De Moivre's theorem with $n=3$ to show that $\cos3\theta=4\cos^3\theta-3\cos\theta$. [6 marks]

::hint
**What you need:** expand $(\cos\theta+i\sin\theta)^3$ with the binomial theorem and compare real parts; use $\sin^2\theta=1-\cos^2\theta$.

::solution
Real part of $(c+is)^3$: $c^3-3cs^2=c^3-3c\left(1-c^2\right)=4c^3-3c$, where $c=\cos\theta$ and $s=\sin\theta$. By De Moivre, the real part is also $\cos3\theta$.
:::

:::exercise Roots of unity
Let $\omega=e^{2\pi i/3}$. Show that $1+\omega+\omega^2=0$, and describe the three cube roots of $1$ on an Argand diagram. [4 marks]

::hint
**What you need:** $\omega^3=1$ and $\omega\ne1$; factor $\omega^3-1$.

::solution
$\omega^3-1=(\omega-1)\left(\omega^2+\omega+1\right)=0$ and $\omega\ne1$, so $1+\omega+\omega^2=0$. The roots $1$, $\omega$, $\omega^2$ are the vertices of an equilateral triangle inscribed in the unit circle.
:::

:::exercise Induction with derivatives
Prove by induction that $\dfrac{d^n}{dx^n}\left(xe^x\right)=(x+n)e^x$ for all $n\in\mathbb{Z}^+$. [6 marks]

::hint
**What you need:** differentiate $(x+k)e^x$ with the product rule.

::solution
Basis: $\dfrac{d}{dx}\left(xe^x\right)=e^x+xe^x=(x+1)e^x$. Assume true for $n=k$. Then $\dfrac{d}{dx}\big((x+k)e^x\big)=e^x+(x+k)e^x=(x+k+1)e^x$, the formula for $n=k+1$. Conclusion as in the note above.
:::

:::exercise Challenge: an irrational logarithm
Prove by contradiction that $\log_23$ is irrational. [5 marks]

::hint
**What you need:** suppose $\log_23=\dfrac pq$ with positive integers $p$, $q$; then $2^p=3^q$.

::solution
Assume $\log_23=\dfrac pq$, $p,q\in\mathbb{Z}^+$. Then $2^{p/q}=3$, so $2^p=3^q$. The left side is even and the right side is odd, which is impossible. So $\log_23$ is irrational.
:::

:::quiz
::mc
What is $i^{23}$?
A. $1$
B. $i$
C. $-1$
D. $-i$
::key D
$23=4\cdot5+3$, so $i^{23}=i^3=-i$.

::mc
What is $\arg(-1+i)$?
A. $\dfrac{3\pi}{4}$
B. $\dfrac{\pi}{4}$
C. $-\dfrac{\pi}{4}$
D. $\dfrac{5\pi}{4}$
::key A
The point $(-1,1)$ is in the second quadrant. Option D is outside $-\pi<\theta\le\pi$.

::mc
What are the roots of $z^2-4z+13=0$?
A. $4\pm3i$
B. $-2\pm3i$
C. $2\pm3i$
D. $2\pm9i$
::key C
$z=\dfrac{4\pm\sqrt{16-52}}{2}=\dfrac{4\pm6i}{2}$.

::mc
Which step is not part of a proof by induction?
A. Showing the statement is true for $n=1$
B. Checking the statement for $n=1$ to $n=10$ and concluding
C. Assuming the statement is true for $n=k$
D. Proving the statement for $n=k+1$
::key B
Checking cases is not a proof; the other three are the structure of induction.

::tf
Let $z=2e^{i\pi/4}$.
a) $|z|=2$.
b) $z^2=4i$.
c) $\operatorname{Re}z=2$.
d) $z^4=16$.
::key T T F F
a) True. b) True: $4e^{i\pi/2}=4i$. c) False: $\operatorname{Re}z=2\cos\dfrac\pi4=\sqrt2$. d) False: $z^4=16e^{i\pi}=-16$.

::sa
Find $\left|(1+i)^6\right|$.
::key 8
$|1+i|^6=\left(\sqrt2\right)^6=8$.

::sa
How many distinct roots does $z^5=1$ have?
::key 5
An equation $z^n=w$ with $w\ne0$ has $n$ distinct roots.
:::
