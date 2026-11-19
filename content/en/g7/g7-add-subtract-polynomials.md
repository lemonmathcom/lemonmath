---
title: Adding and subtracting polynomials in one variable. Multiplying polynomials in one variable
description: Add and subtract polynomials by combining like terms; multiply monomials and polynomials with the distributive property; apply them to area problems.
minutes: 30
---

:::goals
- Add and subtract two polynomials in one variable by removing brackets, combining like terms and arranging the result.
- Multiply a monomial by a monomial and a monomial by a polynomial using the rule for powers and the distributive property.
- Multiply two polynomials in one variable and simplify the result.
- Apply polynomial operations to problems about area, volume and cost.
:::

Mr Hùng's garden is a rectangle $10$ m wide and $15$ m long, so its area is $150$ m². He wants to enlarge it: $2$ m more on the width and $2$ m more on the length. By how many square metres does the area increase? What about a garden of different size: is there one way of working it out for every garden?

For these particular measurements the answer is easy: $12\cdot17-150=54$ (m²). But if we want a formula that works for every width, we need to write the area with a letter, then add, subtract and multiply expressions containing that letter. That is what this lesson is about, and it is the first step in "doing arithmetic with letters" just as you do with numbers.

## Adding and subtracting polynomials

### Explore: combine things of the same kind

Let $A=2x+3$ and $B=x+4$. To add them we combine terms of the same kind: $2x+x=3x$ and $3+4=7$, so $A+B=3x+7$. To subtract: $A-B=(2x+3)-(x+4)=2x+3-x-4=x-1$. We check with a number: put $x=10$, so $A=23$ and $B=14$. We have $A+B=37=3\cdot10+7$ and $A-B=9=10-1$. The results agree; this is a quick check you can use whenever you calculate with polynomials.

:::theorem Rules for adding and subtracting polynomials
- To **add** two polynomials, remove the brackets, then combine the like terms (terms with the same power of the variable) by adding their coefficients.
- To **subtract** a polynomial $B$ from a polynomial $A$, write $A-(B)$, remove the brackets by **changing the sign of every term of $B$**, then combine the like terms.
:::

**Why?** Subtraction is adding the opposite: $A-B=A+(-B)$, and the opposite of a polynomial $B$ is the polynomial with every term's sign changed. For example $-(x^2-3x)=-x^2+3x$. As for combining $2x+x=3x$, that is the distributive property: $2x+x=(2+1)x$.

:::example Adding and subtracting two polynomials
Let $A=3x^3-2x^2+x-5$ and $B=x^3+4x^2-3x+2$. Find $A+B$ and $A-B$.

**Solution.** We have
$$A+B=(3x^3-2x^2+x-5)+(x^3+4x^2-3x+2).$$
Removing the brackets and grouping the like terms, we get
$$A+B=(3x^3+x^3)+(-2x^2+4x^2)+(x-3x)+(-5+2)=4x^3+2x^2-2x-3.$$
For the subtraction, we change the sign of every term of $B$:
$$A-B=3x^3-2x^2+x-5-x^3-4x^2+3x-2=(3x^3-x^3)+(-2x^2-4x^2)+(x+3x)+(-5-2).$$
Hence $A-B=2x^3-6x^2+4x-7$.

So $A+B=4x^3+2x^2-2x-3$ and $A-B=2x^3-6x^2+4x-7$.
:::

When the polynomials have many terms, we can line up like terms in columns, writing $0$ where a term is missing.

:::example Adding and subtracting in columns
Let $P(x)=x^3-2x+1$ and $Q(x)=2x^3+x^2-x-4$. Find $P(x)+Q(x)$ and $P(x)-Q(x)$.

**Solution.** The polynomial $P(x)$ has no $x^2$ term, so we write $P(x)=x^3+0x^2-2x+1$ and line up the columns:
$$\begin{array}{rrrrr} & x^3 & +0x^2 & -2x & +1\\ +\ & 2x^3 & +x^2 & -x & -4\\ \hline & 3x^3 & +x^2 & -3x & -3\end{array}$$
Hence $P(x)+Q(x)=3x^3+x^2-3x-3$.

For the subtraction, we change the sign of every term of $Q(x)$ and combine:
$$P(x)-Q(x)=x^3-2x+1-2x^3-x^2+x+4=-x^3-x^2-x+5.$$

So $P(x)+Q(x)=3x^3+x^2-3x-3$ and $P(x)-Q(x)=-x^3-x^2-x+5$.
:::

## Multiplying polynomials

When multiplying, there are two things to remember: how to multiply powers of the same variable, and the distributive property of multiplication over addition.

**Why is $x^2\cdot x^3=x^5$?** Because $x^2=x\cdot x$ and $x^3=x\cdot x\cdot x$, so $x^2\cdot x^3$ has exactly $2+3=5$ factors of $x$. In general, $x^m\cdot x^n=x^{m+n}$: we **add** the exponents, while the coefficients are **multiplied**.

### Explore: multiplying two binomials with numbers

Try $(x+2)(x+3)$ when $x=10$. The product is $12\cdot13=156$. On the other hand, if we expand to $x^2+5x+6$ and put $x=10$ we get $100+50+6=156$, which is equal. You can see that $5x$ comes from $2x+3x$ and $6$ comes from $2\cdot3$: every term of the first factor is multiplied by every term of the second factor.

:::theorem Rules for multiplying polynomials
- **Monomial by monomial:** multiply the coefficients and multiply the powers of the variable, $ax^m\cdot bx^n=ab\,x^{m+n}$.
- **Monomial by polynomial:** multiply the monomial by each term of the polynomial and add the products, $A(B+C)=AB+AC$.
- **Polynomial by polynomial:** multiply each term of one polynomial by each term of the other and add the products, then combine like terms.
:::

:::example Multiplying monomials
Work out the following products:

a) $(-3x^2)\cdot(2x^3)$.

b) $4x\cdot(x^2-3x+5)$.

**Solution.** a) We multiply the coefficients and add the exponents: $(-3)\cdot2=-6$ and $x^2\cdot x^3=x^5$. Hence $(-3x^2)\cdot(2x^3)=-6x^5$.

b) By the distributive property, we multiply $4x$ by each term in the brackets:
$$4x\cdot(x^2-3x+5)=4x\cdot x^2+4x\cdot(-3x)+4x\cdot5=4x^3-12x^2+20x.$$

So a) $-6x^5$; b) $4x^3-12x^2+20x$.
:::

:::example Multiplying two polynomials
Work out $(x+3)(x^2-2x+4)$.

**Solution.** We multiply each term of $x+3$ by each term of $x^2-2x+4$:
$$(x+3)(x^2-2x+4)=x\cdot x^2+x\cdot(-2x)+x\cdot4+3\cdot x^2+3\cdot(-2x)+3\cdot4.$$
Hence $(x+3)(x^2-2x+4)=x^3-2x^2+4x+3x^2-6x+12$. Combining like terms, we get $x^3+(-2x^2+3x^2)+(4x-6x)+12=x^3+x^2-2x+12$.

Check with $x=1$: the left-hand side is $4\cdot3=12$ and the right-hand side is $1+1-2+12=12$.

So $(x+3)(x^2-2x+4)=x^3+x^2-2x+12$.
:::

Now we answer the question about the garden, going through all four steps. The figure shows the original garden (the smaller rectangle) and the part added.

:::diagram The garden $x(x+5)$ enlarged by $2$ m in each direction
alt: A small rectangle of width x and length x plus 5; the larger rectangle has an extra strip along the top, of width 2, and an extra strip on the right, of width 2
point A 0,0 below-left
point E 11,0 below-right
point F 11,6 above-right
point G 0,6 above-left
point B 9,0 ""
point C 9,4 ""
point D 0,4 ""
polygon A B C D
polygon A E F G
label 4.5,2 "x(x + 5)"
label 4.5,5 "2(x + 5)"
label 10,3 "2(x + 2)"
label 4.5,-0.7 "x + 5"
label 10,-0.7 "2"
label -0.8,2 "x"
label -0.8,5 "2"
:::

:::example Enlarging the garden
A rectangular garden has width $x$ (m) and is $5$ m longer than it is wide. The garden is enlarged by increasing both the length and the width by $2$ m. By how many square metres does the area increase? Work it out for $x=10$.

**Solution.**

*Understand.* The old garden has sides $x$ and $x+5$. The new garden has sides $x+2$ and $x+7$. We need the difference of the two areas.

*Plan.* Write the area of the old garden and of the new garden as two polynomials, multiply out the factors, then subtract the smaller polynomial from the larger.

*Solve.* The area of the old garden is $x(x+5)=x^2+5x$ (m²). The area of the new garden is
$$(x+2)(x+7)=x^2+7x+2x+14=x^2+9x+14\ \text{(m}^2).$$
The increase in area is
$$(x^2+9x+14)-(x^2+5x)=x^2+9x+14-x^2-5x=4x+14\ \text{(m}^2).$$
When $x=10$, the increase is $4\cdot10+14=54$ (m²).

So the area increases by $4x+14$ (m²); for a garden $10$ m wide the increase is $54$ m².

*Look back.* The result $54$ m² agrees with the direct calculation $12\cdot17-10\cdot15=204-150=54$. Is there another way? Yes: from the figure, the added part consists of the top strip (length $x+5$, width $2$) and the right-hand strip (width $2$, height $x+2$), so its area is $2(x+5)+2(x+2)=4x+14$. The two methods agree. The result also shows that the extra area grows steadily by $4$ m² for every extra metre of width.
:::

:::example Simplifying an expression
Simplify the expression $(x+2)(x-3)-x(x-4)$ and find its value at $x=5$.

**Solution.** We expand each product. We have $(x+2)(x-3)=x^2-3x+2x-6=x^2-x-6$ and $x(x-4)=x^2-4x$. Hence
$$(x+2)(x-3)-x(x-4)=x^2-x-6-x^2+4x=3x-6.$$
Substituting $x=5$ into the simplified expression, we get $3\cdot5-6=9$.

So the expression equals $3x-6$, and equals $9$ when $x=5$.
:::

:::warning Common mistakes
- **Forgetting to change signs when subtracting.** Wrong: $(2x^2+3x)-(x^2-3x)=2x^2+3x-x^2-3x=x^2$. Why it is wrong: the minus sign before the bracket changes the sign of both terms inside, so $-(-3x)=+3x$. Right: $2x^2+3x-x^2+3x=x^2+6x$.
- **Combining terms that are not like terms.** Wrong: $3x^2+2x=5x^3$. Why it is wrong: $x^2$ and $x$ are different kinds, and when adding we do not add exponents. Right: leave it as $3x^2+2x$.
- **Adding exponents in a sum, or multiplying exponents in a product.** Wrong: $2x^2\cdot3x^3=6x^6$. Why it is wrong: when multiplying we add the exponents, $2+3=5$. Right: $6x^5$.
- **Missing a term when multiplying.** Wrong: $4x(x^2-3x+5)=4x^3-12x^2+5$. Why it is wrong: the term $5$ must also be multiplied by $4x$. Right: $4x^3-12x^2+20x$.
:::

**Connections.** Adding and subtracting polynomials is combining like terms, which you did with rational numbers, and multiplying polynomials is the distributive property extended. These two operations are used straight away in the next lesson, when we divide polynomials and use multiplication to check the result. As for Mr Hùng's garden: the area increases by $4x+14$, and $54$ m² corresponds to $x=10$.

## Key terms

:::terms
- adding polynomials | cộng đa thức
- subtracting polynomials | trừ đa thức
- like terms | hạng tử đồng dạng
- simplifying a polynomial | thu gọn đa thức
- opposite (negative) of a polynomial | đa thức đối
- multiplying monomials | nhân đơn thức
- distributive property | tính chất phân phối
- multiplying polynomials | nhân đa thức
- power | luỹ thừa
- exponent | số mũ
:::

## Summary

- Adding polynomials: remove the brackets, combine like terms, add the coefficients.
- Subtracting polynomials: change the sign of every term of the polynomial being subtracted, then combine.
- $x^m\cdot x^n=x^{m+n}$: when multiplying, multiply the coefficients and add the exponents.
- $A(B+C)=AB+AC$; to multiply two polynomials, multiply each term by each term, then combine.
- You can check a result by substituting a particular value of the variable, such as $x=1$ or $x=10$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Let $A=4x^2-3x+7$ and $B=x^2+5x-2$. Find $A+B$ and $A-B$.

::hint
**What you need:** to add, combine like terms; to subtract, change the sign of every term of $B$.

**Steps:**
1. Combine $4x^2+x^2$, $-3x+5x$ and $7-2$.
2. For $A-B$, write $-x^2-5x+2$ after removing the brackets.

::solution
We have $A+B=(4x^2+x^2)+(-3x+5x)+(7-2)=5x^2+2x+5$.

We have $A-B=4x^2-3x+7-x^2-5x+2=(4x^2-x^2)+(-3x-5x)+(7+2)=3x^2-8x+9$.

So $A+B=5x^2+2x+5$ and $A-B=3x^2-8x+9$.

**Answer.** $A+B=5x^2+2x+5$; $A-B=3x^2-8x+9$.
:::

:::exercise
Let $A=2x^3-x+5$ and $B=-3x^3+x^2+4x-1$. Find $A+B$ and $A-B$.

::hint
**What you need:** the polynomial $A$ has no $x^2$ term; you can write $A=2x^3+0x^2-x+5$ to line up the columns.

**Steps:**
1. Combine by powers: $x^3$, $x^2$, $x$ and the constant term.
2. When subtracting, change the sign of all four terms of $B$.

::solution
We have $A+B=(2x^3-3x^3)+x^2+(-x+4x)+(5-1)=-x^3+x^2+3x+4$.

We have $A-B=2x^3-x+5+3x^3-x^2-4x+1=(2x^3+3x^3)-x^2+(-x-4x)+(5+1)=5x^3-x^2-5x+6$.

So $A+B=-x^3+x^2+3x+4$ and $A-B=5x^3-x^2-5x+6$.

**Answer.** $A+B=-x^3+x^2+3x+4$; $A-B=5x^3-x^2-5x+6$.
:::

:::exercise
(Revision of the lesson on the value of a polynomial.) Let $A=x^2-2x+3$ and $B=2x^2+x-5$.

a) Find $A-B$.

b) Find the value of $A-B$ at $x=1$.

::hint
**What you need:** subtract by changing the sign of every term of $B$; the value at $x=1$ is the sum of the coefficients.

**Steps:**
1. a) Write $A-B=x^2-2x+3-2x^2-x+5$.
2. b) Substitute $x=1$ into the polynomial you found.

::solution
a) We have $A-B=x^2-2x+3-2x^2-x+5=(x^2-2x^2)+(-2x-x)+(3+5)=-x^2-3x+8$.

b) Substituting $x=1$, we get $-1-3+8=4$. Check: $A(1)=1-2+3=2$, $B(1)=2+1-5=-2$ and $2-(-2)=4$.

So a) $A-B=-x^2-3x+8$; b) the value at $x=1$ is $4$.

**Answer.** a) $-x^2-3x+8$; b) $4$.
:::

:::exercise
Find the polynomial $M$, given that $M+(x^2-3x)=2x^2+x-4$.

::hint
**What you need:** from $M+C=D$ we get $M=D-C$.

**Steps:**
1. Write $M=(2x^2+x-4)-(x^2-3x)$.
2. Remove the brackets, change the signs of the two terms in the second bracket, then combine.

::solution
From $M+(x^2-3x)=2x^2+x-4$ we get $M=(2x^2+x-4)-(x^2-3x)$.

Removing the brackets, we get $M=2x^2+x-4-x^2+3x=(2x^2-x^2)+(x+3x)-4=x^2+4x-4$.

Check: $(x^2+4x-4)+(x^2-3x)=2x^2+x-4$, as required.

So $M=x^2+4x-4$.

**Answer.** $M=x^2+4x-4$.
:::

:::exercise
Work out the following products:

a) $(-2x^2)\cdot(3x^4)$.

b) $3x\cdot(2x^2-x+4)$.

::hint
**What you need:** $ax^m\cdot bx^n=ab\,x^{m+n}$ and $A(B+C)=AB+AC$.

**Steps:**
1. a) Multiply the coefficients $-2$ and $3$, add the exponents $2+4$.
2. b) Multiply $3x$ by each term in the brackets; do not miss the last term.

::solution
a) We have $(-2)\cdot3=-6$ and $x^2\cdot x^4=x^6$, so $(-2x^2)\cdot(3x^4)=-6x^6$.

b) By the distributive property, $3x\cdot(2x^2-x+4)=3x\cdot2x^2+3x\cdot(-x)+3x\cdot4=6x^3-3x^2+12x$.

So a) $-6x^6$; b) $6x^3-3x^2+12x$.

**Answer.** a) $-6x^6$; b) $6x^3-3x^2+12x$.
:::

:::exercise
Work out:

a) $(x-2)(x^2+2x+4)$.

b) $(2x+3)(x-1)$.

::hint
**What you need:** multiply each term of one polynomial by each term of the other, then combine like terms.

**Steps:**
1. a) There are $6$ products; two pairs of terms will cancel.
2. b) There are $4$ products; combine $-2x$ and $3x$.

::solution
a) We have $(x-2)(x^2+2x+4)=x^3+2x^2+4x-2x^2-4x-8$. Combining like terms: $x^3+(2x^2-2x^2)+(4x-4x)-8=x^3-8$.

b) We have $(2x+3)(x-1)=2x^2-2x+3x-3=2x^2+x-3$.

So a) $x^3-8$; b) $2x^2+x-3$.

**Answer.** a) $x^3-8$; b) $2x^2+x-3$.
:::

:::exercise
Show that the value of the expression $(x+4)(x-1)-(x^2+3x)$ does not depend on the value of $x$.

::hint
**What you need:** if after simplifying the expression is just a number, then its value never changes.

**Steps:**
1. Expand $(x+4)(x-1)$.
2. Subtract $x^2+3x$ by changing the sign of both terms.

::solution
We have $(x+4)(x-1)=x^2-x+4x-4=x^2+3x-4$.

Hence $(x+4)(x-1)-(x^2+3x)=x^2+3x-4-x^2-3x=-4$.

The expression always equals $-4$ for every $x$, so its value does not depend on $x$.

**Answer.** The expression always equals $-4$.
:::

:::exercise
Suppose a bakery sells $x$ hundred cakes and takes in $9x$ (million đồng), while its production cost is $x^2+x+4$ (million đồng). Profit equals revenue minus cost.

a) Write the polynomial $L(x)$ for the profit.

b) Find the profit when $x=5$.

::hint
**What you need:** $L(x)=9x-(x^2+x+4)$; removing the brackets means changing the sign of all three terms.

**Steps:**
1. a) Remove the brackets, then combine $9x-x$.
2. b) Substitute $x=5$ into $L(x)$ and compare with $9\cdot5-(25+5+4)$.

::solution
a) We have $L(x)=9x-(x^2+x+4)=9x-x^2-x-4=-x^2+8x-4$.

b) Substituting $x=5$, we get $L(5)=-25+40-4=11$. Check: the revenue is $9\cdot5=45$, the cost is $25+5+4=34$ and $45-34=11$.

So a) $L(x)=-x^2+8x-4$ (million đồng); b) selling $5$ hundred cakes gives a profit of $11$ million đồng.

**Answer.** a) $-x^2+8x-4$; b) $11$ million đồng.
:::

:::exercise
A gift box is a cuboid whose base is $x$ (cm) wide, whose base length is $4$ cm more than the width and whose height is $3$ cm.

a) Write a polynomial for the volume of the box.

b) Find the volume when $x=5$.

::hint
**What you need:** volume equals width times length times height.

**Steps:**
1. a) The base length is $x+4$; write $V=x(x+4)\cdot3$ and multiply out.
2. b) Substitute $x=5$.

::solution
a) The base length is $x+4$ (cm). The volume of the box is $V=x(x+4)\cdot3=3x(x+4)=3x^2+12x$ (cm³).

b) Substituting $x=5$, we get $V=3\cdot25+12\cdot5=75+60=135$ (cm³). Check: $5\cdot9\cdot3=135$.

So a) $V=3x^2+12x$ (cm³); b) when $x=5$ the volume is $135$ cm³.

**Answer.** a) $3x^2+12x$; b) $135$ cm³.
:::

:::exercise Challenge
Prove that $(x+1)(x^2-x+1)=x^3+1$. Then, by putting $x=10$, find the product $11\cdot91$ quickly.

::hint
**What you need:** multiply the two polynomials and combine like terms; note that $x^2-x+1$ at $x=10$ equals $91$.

**Steps:**
1. Expand the left-hand side: six products.
2. Put $x=10$ in both sides: $x+1=11$ and $x^2-x+1=91$.

::solution
We have $(x+1)(x^2-x+1)=x^3-x^2+x+x^2-x+1$. Combining like terms: $x^3+(-x^2+x^2)+(x-x)+1=x^3+1$.

So $(x+1)(x^2-x+1)=x^3+1$.

Putting $x=10$, we have $x+1=11$ and $x^2-x+1=100-10+1=91$. Hence $11\cdot91=10^3+1=1001$.

So $11\cdot91=1001$.

**Answer.** $11\cdot91=1001$.
:::

## Mini test

:::quiz
::mc TH
The result of $(2x^2+3x)-(x^2-5x)$ is
A. $x^2-2x$.
B. $3x^2-2x$.
C. $x^2+8x$.
D. $3x^2+8x$.
::key C
$2x^2+3x-x^2+5x=x^2+8x$. A forgets to change the sign of $-5x$; B and D are results of adding (with sign errors).

::mc TH
The product $(-2x^3)\cdot(4x^2)$ equals
A. $8x^5$.
B. $-8x^6$.
C. $2x^5$.
D. $-8x^5$.
::key D
Multiply the coefficients $-2\cdot4=-8$ and add the exponents $3+2=5$. A has the wrong sign, B multiplies the exponents ($3\cdot2$) and then adds to get $6$, and C adds the two coefficients.

::mc TH
Expanding $(x+2)(x-3)$ gives
A. $x^2-x-6$.
B. $x^2-6$.
C. $x^2+x-6$.
D. $x^2-5x-6$.
::key A
$x^2-3x+2x-6=x^2-x-6$. A leaves out the cross products, C has the wrong sign for the $x$ term and D adds $-3x-2x$ by mistake.

::mc VD
The polynomial $M$ that satisfies $M+(x^2-3x)=2x^2+x-4$ is
A. $x^2-2x-4$.
B. $x^2+4x-4$.
C. $3x^2-2x-4$.
D. $x^2+4x+4$.
::key B
$M=(2x^2+x-4)-(x^2-3x)=x^2+4x-4$. B forgets to change the sign of $-3x$, C adds instead of subtracting and D has the wrong sign for the constant term.

::tf TH TH TH VD
Let $A=x^2+2x-3$ and $B=x^2-x-2$. Decide whether each statement is true or false.
a) $A-B=3x+1$.
b) $A+B=2x^2+x-5$.
c) The polynomial $A-B$ has degree $1$.
d) $x=\dfrac13$ is a root of the polynomial $A-B$.
::key F T T T
a) False: $A-B=x^2+2x-3-x^2+x+2=3x-1$. b) True: $2x^2+x-5$. c) True: $3x-1$ has degree $1$. d) True: $3\cdot\dfrac13-1=0$.

::sa VD
Find the value of the expression $(x+3)(x-2)-x^2$ when $x=4$.
::key -2
The expression equals $x^2+x-6-x^2=x-6$; at $x=4$ it is $-2$.

::sa VD
Find the coefficient of $x^2$ in the product $(x+2)(3x^2-x+1)$.
::key 5
$(x+2)(3x^2-x+1)=3x^3+5x^2-x+2$, where $5x^2$ comes from $-x^2+6x^2$.
:::
