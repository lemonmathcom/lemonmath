---
title: Trigonometric ratios of acute angles
description: Sine, cosine, tangent and cotangent of an acute angle in a right-angled triangle, special-angle values and complementary angles.
minutes: 20
---

:::goals
- Write the sine, cosine, tangent and cotangent of an acute angle in a right-angled triangle.
- Learn the trigonometric ratios of $30^\circ$, $45^\circ$ and $60^\circ$, and use the link between complementary angles.
- Use a calculator to find trigonometric ratios, and to find an angle from a ratio.
:::

Mr Tư leans a $5$ m ladder against a wall, with its foot $3$ m from the bottom of the wall. Safety advice says the angle between a ladder and the ground should be about $75^\circ$. Is Mr Tư's ladder steep enough?

We know two sides of a right-angled triangle, but we need an **angle**. This lesson gives us the tool that links sides to angles: the trigonometric ratios.

:::diagram The ladder against the wall
alt: The ladder is the hypotenuse of a right-angled triangle, its foot is 3 metres from the wall, the ladder is 5 metres long, and the angle between the ladder and the ground is marked alpha
point H 0,0 below-left "H"
point P 3,0 below-right "P"
point T 0,4 above-left "T"
segment H P "3 m"
segment P T "5 m"
segment H T
right P H T
angle T P H "α"
:::

## The trigonometric ratios of an acute angle

### Explore: the ratio does not depend on the size of the triangle

Take two right-angled triangles with the same acute angle $\alpha$ at vertex $B$: the first has sides $3$, $4$, $5$; the second has sides $6$, $8$, $10$ (twice as big). We work out the ratio of the side opposite $\alpha$ to the hypotenuse:

| Triangle | opposite | hypotenuse | opposite : hypotenuse |
|---|---|---|---|
| first | $3$ | $5$ | $0.6$ |
| second | $6$ | $10$ | $0.6$ |

The two triangles are similar (grade 8), so the ratios are the same. The ratio depends only on the angle $\alpha$, not on how big the triangle is.

:::diagram The opposite side, adjacent side and hypotenuse for angle $\alpha$
alt: Triangle ABC with a right angle at A and angle alpha at B; side AC is opposite alpha, side AB is adjacent to alpha, and BC is the hypotenuse
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
polygon A B C
segment A B "adjacent"
segment A C "opposite"
segment B C "hypotenuse"
right B A C
angle C B A "α"
:::

:::definition Trigonometric ratios of an acute angle
In a right-angled triangle with an acute angle $\alpha$:
$$\sin\alpha=\frac{\text{opposite}}{\text{hypotenuse}},\quad \cos\alpha=\frac{\text{adjacent}}{\text{hypotenuse}},\quad \tan\alpha=\frac{\text{opposite}}{\text{adjacent}},\quad \cot\alpha=\frac{\text{adjacent}}{\text{opposite}}.$$
:::

Because the hypotenuse is the longest side, we always have $0<\sin\alpha<1$ and $0<\cos\alpha<1$. A well-known memory aid is **SOH CAH TOA** (Sine = Opposite : Hypotenuse, Cosine = Adjacent : Hypotenuse, Tangent = Opposite : Adjacent); the cotangent is the tangent turned upside down.

:::example Finding the four ratios
Triangle $ABC$ has a right angle at $A$, $AB=8$ cm and $AC=6$ cm. Find the trigonometric ratios of angle $B$.

**Solution.** In the right-angled triangle $ABC$, $BC^2=AB^2+AC^2$ (Pythagoras' theorem). For angle $B$, the opposite side is $AC$ and the adjacent side is $AB$. Hence

$$BC=\sqrt{8^2+6^2}=\sqrt{100}=10;\qquad \sin B=\frac{6}{10}=\frac35,\quad \cos B=\frac{8}{10}=\frac45,\quad \tan B=\frac68=\frac34,\quad \cot B=\frac86=\frac43.$$

So $\sin B=\dfrac35$, $\cos B=\dfrac45$, $\tan B=\dfrac34$, $\cot B=\dfrac43$.
:::

The opposite and adjacent sides change when we look at the other acute angle, so always identify them again before writing a ratio.

:::example The ratios of the other angle
Triangle $ABC$ has a right angle at $A$, $AB=5$ and $AC=12$. Find the trigonometric ratios of angle $C$.

**Solution.** In the right-angled triangle $ABC$, $BC^2=AB^2+AC^2$ (Pythagoras' theorem). For angle $C$, the opposite side is $AB$ and the adjacent side is $AC$. Hence

$$BC=\sqrt{5^2+12^2}=13;\qquad \sin C=\frac{5}{13},\quad \cos C=\frac{12}{13},\quad \tan C=\frac{5}{12},\quad \cot C=\frac{12}{5}.$$

So $\sin C=\dfrac5{13}$, $\cos C=\dfrac{12}{13}$, $\tan C=\dfrac5{12}$, $\cot C=\dfrac{12}5$.
:::

## The ratios of special angles

Half of a square with side $1$ is a right-angled isosceles triangle with two $45^\circ$ angles and hypotenuse $\sqrt2$. Half of an equilateral triangle with side $2$ is a right-angled triangle with angles $30^\circ$ and $60^\circ$ and sides $1$, $\sqrt3$, $2$. These two triangles give the table below.

| $\alpha$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin\alpha$ | $\dfrac12$ | $\dfrac{\sqrt2}2$ | $\dfrac{\sqrt3}2$ |
| $\cos\alpha$ | $\dfrac{\sqrt3}2$ | $\dfrac{\sqrt2}2$ | $\dfrac12$ |
| $\tan\alpha$ | $\dfrac{\sqrt3}3$ | $1$ | $\sqrt3$ |
| $\cot\alpha$ | $\sqrt3$ | $1$ | $\dfrac{\sqrt3}3$ |

For example, $\sin45^\circ=\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{2}$ (rationalising the denominator as in the previous chapter).

:::example Evaluating expressions
Evaluate: a) $A=\sin30^\circ+\cos60^\circ-\tan45^\circ$; b) $B=\sin60^\circ\cdot\cot30^\circ$.

**Solution.** Substituting the values from the table, we get

$$A=\frac12+\frac12-1=0;\qquad B=\frac{\sqrt3}{2}\cdot\sqrt3=\frac32.$$

So $A=0$ and $B=\dfrac32$.
:::

## The ratios of complementary angles

In triangle $ABC$ with a right angle at $A$, angles $B$ and $C$ are complementary: $\angle B+\angle C=90^\circ$. The side opposite $B$ is the side adjacent to $C$, so $\sin B=\dfrac{AC}{BC}=\cos C$.

:::theorem Complementary angles
If $\alpha+\beta=90^\circ$, then
$$\sin\alpha=\cos\beta,\quad \cos\alpha=\sin\beta,\quad \tan\alpha=\cot\beta,\quad \cot\alpha=\tan\beta.$$
:::

:::example Using complementary angles
a) Write $\sin72^\circ$ and $\tan65^\circ$ as trigonometric ratios of angles smaller than $45^\circ$.
b) Without a calculator, evaluate $\dfrac{\sin25^\circ}{\cos65^\circ}$ and $\tan40^\circ\cdot\tan50^\circ$.

**Solution.** We have $72^\circ+18^\circ=90^\circ$, $65^\circ+25^\circ=90^\circ$, $25^\circ+65^\circ=90^\circ$, $40^\circ+50^\circ=90^\circ$ (complementary angles) and $\tan40^\circ\cdot\cot40^\circ=\dfrac{\text{opp}}{\text{adj}}\cdot\dfrac{\text{adj}}{\text{opp}}=1$. Hence

$$\sin72^\circ=\cos18^\circ,\quad \tan65^\circ=\cot25^\circ;\qquad \frac{\sin25^\circ}{\cos65^\circ}=\frac{\sin25^\circ}{\sin25^\circ}=1,\quad \tan40^\circ\cdot\tan50^\circ=\tan40^\circ\cdot\cot40^\circ=1.$$

So a) $\cos18^\circ$ and $\cot25^\circ$; b) both expressions equal $1$.
:::

For any other angle, we use a calculator (set to degree mode, shown as D). The `sin`, `cos` and `tan` keys give the ratio; `SHIFT` + `sin` (or `cos`, `tan`) gives the angle from a ratio. There is no cot key, so we use $\cot\alpha=\dfrac{1}{\tan\alpha}$.

:::example Answering the ladder question
The ladder is $5$ m long and its foot is $3$ m from the wall. Find the angle $\alpha$ between the ladder and the ground (rounded to the nearest degree).

**Solution.** In triangle $HPT$ with a right angle at $H$, for the angle $\alpha$ at the foot $P$ of the ladder, the adjacent side is $HP=3$ m and the hypotenuse is $PT=5$ m. We have

$$\cos\alpha=\frac35=0.6\ \Rightarrow\ \alpha\approx53.13^\circ\approx53^\circ.$$

So the angle between the ladder and the ground is only about $53^\circ$, much less than $75^\circ$, so Mr Tư's ladder is too shallow and may slip.
:::

:::warning Common mistakes
- **Mixing up opposite and adjacent.** Wrong: in a triangle with a right angle at $A$, $\sin C=\dfrac{AC}{BC}$. Why it is wrong: the side opposite $C$ is $AB$. Right: $\sin C=\dfrac{AB}{BC}$.
- **Putting the hypotenuse on top.** Wrong: $\cos B=\dfrac{BC}{AB}$. Why it is wrong: this ratio is greater than $1$, but $\cos B<1$. Right: $\cos B=\dfrac{AB}{BC}$.
- **Mixing up special values.** Wrong: $\sin60^\circ=\dfrac12$. Why it is wrong: that is $\sin30^\circ$ (the side opposite $30^\circ$ is the shortest). Right: $\sin60^\circ=\dfrac{\sqrt3}2$.
- **Using the wrong calculator mode.** Wrong: $\sin30$ gives $-0.988$. Why it is wrong: the calculator is in radian mode. Right: switch to degree mode to get $0.5$.
:::

## Key terms

:::terms
- trigonometric ratio | tỉ số lượng giác
- acute angle | góc nhọn
- hypotenuse | cạnh huyền
- opposite side | cạnh đối
- adjacent side | cạnh kề
- sine, cosine, tangent, cotangent | sin, côsin, tang, côtang
- complementary angles | hai góc phụ nhau
- right-angled isosceles triangle | tam giác vuông cân
:::

## Summary

- $\sin\alpha=\dfrac{\text{opp}}{\text{hyp}}$, $\cos\alpha=\dfrac{\text{adj}}{\text{hyp}}$, $\tan\alpha=\dfrac{\text{opp}}{\text{adj}}$, $\cot\alpha=\dfrac{\text{adj}}{\text{opp}}$.
- The ratios depend only on the angle; $0<\sin\alpha<1$, $0<\cos\alpha<1$; $\tan\alpha\cdot\cot\alpha=1$.
- $\sin30^\circ=\cos60^\circ=\dfrac12$, $\sin45^\circ=\cos45^\circ=\dfrac{\sqrt2}2$, $\sin60^\circ=\cos30^\circ=\dfrac{\sqrt3}2$, $\tan45^\circ=1$, $\tan60^\circ=\sqrt3$, $\tan30^\circ=\dfrac{\sqrt3}3$.
- Complementary angles: the sine of one is the cosine of the other, and the tangent of one is the cotangent of the other.
- Calculator: degree mode; `SHIFT` + `sin`/`cos`/`tan` to find an angle.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Triangle $ABC$ has a right angle at $A$, $AB=3$ and $AC=4$. Find the trigonometric ratios of angle $B$.

::hint
**What you need:** the definitions of the four ratios; Pythagoras' theorem.

**Steps:**
1. Find $BC$.
2. For angle $B$: the opposite side is $AC$, the adjacent side is $AB$.

::solution
In the right-angled triangle $ABC$, $BC=\sqrt{AB^2+AC^2}=\sqrt{9+16}=5$ (Pythagoras' theorem). Hence $\sin B=\dfrac{AC}{BC}=\dfrac45$, $\cos B=\dfrac{AB}{BC}=\dfrac35$, $\tan B=\dfrac{AC}{AB}=\dfrac43$, $\cot B=\dfrac{AB}{AC}=\dfrac34$.

**Answer.** $\dfrac45$; $\dfrac35$; $\dfrac43$; $\dfrac34$.
:::

:::exercise
Triangle $ABC$ has a right angle at $A$, $BC=17$ and $AB=8$. Find the trigonometric ratios of angle $C$.

::hint
**What you need:** $AC^2=BC^2-AB^2$; for angle $C$, the opposite side is $AB$.

**Steps:**
1. Find $AC$.
2. Write the four ratios.

::solution
In the right-angled triangle $ABC$, $AC=\sqrt{BC^2-AB^2}=\sqrt{289-64}=15$ (Pythagoras' theorem). Hence $\sin C=\dfrac{AB}{BC}=\dfrac8{17}$, $\cos C=\dfrac{AC}{BC}=\dfrac{15}{17}$, $\tan C=\dfrac{AB}{AC}=\dfrac8{15}$, $\cot C=\dfrac{AC}{AB}=\dfrac{15}8$.

**Answer.** $\dfrac8{17}$; $\dfrac{15}{17}$; $\dfrac8{15}$; $\dfrac{15}8$.
:::

:::exercise
Evaluate: a) $\sin45^\circ\cdot\cos45^\circ$; b) $\tan60^\circ-\cot30^\circ+\tan45^\circ$.

::hint
**What you need:** the table of special-angle ratios.

**Steps:**
1. Substitute the values.
2. Work it out.

::solution
a) $\sin45^\circ\cdot\cos45^\circ=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt2}2=\dfrac24=\dfrac12$. b) $\tan60^\circ-\cot30^\circ+\tan45^\circ=\sqrt3-\sqrt3+1=1$.

**Answer.** a) $\dfrac12$; b) $1$.
:::

:::exercise
Write as trigonometric ratios of angles smaller than $45^\circ$: $\sin70^\circ$, $\cos58^\circ$, $\tan80^\circ$, $\cot47^\circ$.

::hint
**What you need:** if $\alpha+\beta=90^\circ$, then $\sin\alpha=\cos\beta$ and $\tan\alpha=\cot\beta$.

**Steps:**
1. Find the complement of each angle.
2. Swap sin ↔ cos and tan ↔ cot.

::solution
Since the pairs $70^\circ$ and $20^\circ$, $58^\circ$ and $32^\circ$, $80^\circ$ and $10^\circ$, $47^\circ$ and $43^\circ$ are complementary, $\sin70^\circ=\cos20^\circ$, $\cos58^\circ=\sin32^\circ$, $\tan80^\circ=\cot10^\circ$, $\cot47^\circ=\tan43^\circ$.

**Answer.** $\cos20^\circ$; $\sin32^\circ$; $\cot10^\circ$; $\tan43^\circ$.
:::

:::exercise
Without a calculator, evaluate $M=\dfrac{\sin32^\circ}{\cos58^\circ}+\tan17^\circ\cdot\tan73^\circ$.

::hint
**What you need:** complementary angles and $\tan\alpha\cdot\cot\alpha=1$.

**Steps:**
1. Write $\cos58^\circ=\sin32^\circ$.
2. Write $\tan73^\circ=\cot17^\circ$.

::solution
Since $58^\circ+32^\circ=90^\circ$ and $73^\circ+17^\circ=90^\circ$, $\cos58^\circ=\sin32^\circ$ and $\tan73^\circ=\cot17^\circ$. Hence $M=\dfrac{\sin32^\circ}{\sin32^\circ}+\tan17^\circ\cdot\cot17^\circ=1+1=2$.

**Answer.** $M=2$.
:::

:::exercise
Use a calculator:

a) Find $\sin54^\circ$ and $\tan20^\circ$ (rounded to four decimal places).

b) Find the acute angle $\alpha$ (to the nearest degree) given that $\tan\alpha=2$; given that $\sin\alpha=0.25$.

::hint
**What you need:** degree mode; `SHIFT` + `tan` (or `sin`) to find an angle.

**Steps:**
1. Check that the calculator is in mode D.
2. Key in and round.

::solution
a) Using a calculator, we get $\sin54^\circ\approx0.8090$ and $\tan20^\circ\approx0.3640$.

b) From $\tan\alpha=2$ we get $\alpha\approx63^\circ$. From $\sin\alpha=0.25$ we get $\alpha\approx14^\circ$.

**Answer.** a) $0.8090$; $0.3640$; b) $63^\circ$; $14^\circ$.
:::

:::exercise
A "$10\%$ gradient" road sign means that for every $100$ m horizontally, the road rises $10$ m. Building guidance says a wheelchair ramp should be no steeper than $1:12$ (a rise of $1$ m over $12$ m horizontally). Find the angle each slope makes with the horizontal (to the nearest degree).

::hint
**What you need:** the angle of slope $\alpha$ has $\tan\alpha=\dfrac{\text{rise}}{\text{horizontal distance}}$.

**Steps:**
1. Write $\tan\alpha$ for each slope.
2. Press `SHIFT` `tan`.

::solution
Let $\alpha$ and $\beta$ be the angles of the $10\%$ road and of the wheelchair ramp. We have $\tan\alpha=\dfrac{10}{100}=0.1$, so $\alpha\approx6^\circ$; and $\tan\beta=\dfrac1{12}$, so $\beta\approx5^\circ$.

**Answer.** About $6^\circ$ and $5^\circ$.
:::

:::exercise
Triangle $ABC$ has a right angle at $A$, $BC=10$ cm and $\sin B=0.6$.

a) Find $AC$.

b) Find $AB$.

c) Find $\tan B$ and $\cos C$.

d) Find the size of angle $B$ (to the nearest degree).

::hint
**What you need:** $\sin B=\dfrac{AC}{BC}$; Pythagoras' theorem; $\cos C=\sin B$ because the angles are complementary.

**Steps:**
1. $AC=BC\cdot\sin B$.
2. $AB=\sqrt{BC^2-AC^2}$.
3. Write the ratios; press `SHIFT` `sin` $0.6$.

::solution
a) In the right-angled triangle $ABC$, $\sin B=\dfrac{AC}{BC}$, so $AC=BC\cdot\sin B=10\cdot0.6=6$ (cm).

b) $AB=\sqrt{BC^2-AC^2}=\sqrt{100-36}=8$ (cm) (Pythagoras' theorem).

c) $\tan B=\dfrac{AC}{AB}=\dfrac68=0.75$; $\cos C=\sin B=0.6$ (complementary angles).

d) From $\sin B=0.6$ we get $\angle B\approx37^\circ$.

**Answer.** a) $6$ cm; b) $8$ cm; c) $0.75$ and $0.6$; d) $37^\circ$.
:::

:::exercise
Triangle $ABC$ has a right angle at $A$, $AB=1$ and $AC=2$. Find $\sin B$ and $\cos B$, with denominators free of roots.

::hint
**What you need:** rationalising the denominator (see [transforming and simplifying expressions with square roots](lesson:simplifying-root-expressions)).

**Steps:**
1. Find $BC=\sqrt5$.
2. Write the ratios, then rationalise the denominators.

::solution
In the right-angled triangle $ABC$, $BC=\sqrt{AB^2+AC^2}=\sqrt{1+4}=\sqrt5$ (Pythagoras' theorem). Hence $\sin B=\dfrac{AC}{BC}=\dfrac2{\sqrt5}=\dfrac{2\sqrt5}5$ and $\cos B=\dfrac{AB}{BC}=\dfrac1{\sqrt5}=\dfrac{\sqrt5}5$.

**Answer.** $\sin B=\dfrac{2\sqrt5}5$, $\cos B=\dfrac{\sqrt5}5$.
:::

:::exercise Challenge
Triangle $ABC$ is isosceles with $AB=AC$, $BC=12$ cm and $\angle B=30^\circ$. Draw the altitude $AH$. Find $AH$ and $AB$ (in a neat exact form).

::hint
**What you need:** in an isosceles triangle the altitude is also a median, so $BH=6$ cm; $\tan30^\circ=\dfrac{\sqrt3}3$, $\cos30^\circ=\dfrac{\sqrt3}2$.

**Steps:**
1. In the right-angled triangle $ABH$: $\tan B=\dfrac{AH}{BH}$.
2. $\cos B=\dfrac{BH}{AB}$ gives $AB$; rationalise the denominator.

::solution
Since triangle $ABC$ is isosceles with $AB=AC$, the altitude $AH$ is also a median, hence $BH=\dfrac{BC}2=6$ cm.

In triangle $ABH$ with a right angle at $H$, $AH=BH\cdot\tan B=6\cdot\dfrac{\sqrt3}3=2\sqrt3$ (cm) and $AB=\dfrac{BH}{\cos B}=\dfrac{6\cdot2}{\sqrt3}=\dfrac{12}{\sqrt3}=4\sqrt3$ (cm).

**Answer.** $AH=2\sqrt3$ cm, $AB=4\sqrt3$ cm.
:::

## Mini test

:::quiz
::mc
Triangle $ABC$ has a right angle at $A$. Then $\sin B$ equals
A. $\dfrac{AC}{AB}$.
B. $\dfrac{AB}{BC}$.
C. $\dfrac{AC}{BC}$.
D. $\dfrac{AB}{AC}$.
::key C
The side opposite $B$ is $AC$ and the hypotenuse is $BC$, so $\sin B=\dfrac{AC}{BC}$. Option B is $\cos B$, A is $\tan B$ and D is $\cot B$.

::mc
$\tan60^\circ$ equals
A. $\dfrac{\sqrt3}3$.
B. $\dfrac12$.
C. $\dfrac{\sqrt3}2$.
D. $\sqrt3$.
::key D
We have $\tan60^\circ=\sqrt3$ (in half an equilateral triangle with side $2$, the side opposite $60^\circ$ is $\sqrt3$ and the adjacent side is $1$). Option A is $\tan30^\circ$, and C is $\sin60^\circ$.

::mc
$\cos52^\circ$ equals
A. $\sin52^\circ$.
B. $\cos38^\circ$.
C. $\tan38^\circ$.
D. $\sin38^\circ$.
::key D
Since $52^\circ+38^\circ=90^\circ$ (complementary angles), $\cos52^\circ=\sin38^\circ$. Option B keeps cos when changing to the complementary angle.

::mc
Triangle $ABC$ has a right angle at $A$, $AB=12$ and $BC=13$. Then $\cos B$ equals
A. $\dfrac{12}{13}$.
B. $\dfrac{5}{13}$.
C. $\dfrac{5}{12}$.
D. $\dfrac{13}{12}$.
::key A
We have $\cos B=\dfrac{AB}{BC}=\dfrac{12}{13}$. Option B is $\sin B$ (since $AC=5$), and D puts the hypotenuse on top, giving a value greater than $1$.

::tf
Triangle $ABC$ has a right angle at $A$, $AB=\sqrt3$ and $AC=1$. Decide whether each statement is true or false.
a) $BC=2$.
b) $\sin B=\dfrac12$.
c) $\tan B=\sqrt3$.
d) $\angle C=60^\circ$.
::key T T F T
a) True. $BC=\sqrt{AB^2+AC^2}=\sqrt{3+1}=2$ (Pythagoras' theorem). b) True. $\sin B=\dfrac{AC}{BC}=\dfrac12$. c) False. $\tan B=\dfrac{AC}{AB}=\dfrac{1}{\sqrt3}=\dfrac{\sqrt3}3$. d) True. Since $\sin B=\dfrac12$, $\angle B=30^\circ$, hence $\angle C=90^\circ-30^\circ=60^\circ$.

::sa
Evaluate $2\sin30^\circ+3\tan45^\circ-\cot45^\circ$.
::key 3
We have $2\sin30^\circ+3\tan45^\circ-\cot45^\circ=2\cdot\dfrac12+3\cdot1-1=3$.

::sa
A road has an "$8\%$ gradient" sign. Find the angle the road makes with the horizontal, in degrees (give your answer to 1 decimal place).
::key 4.6
Let $\alpha$ be the angle of the road. We have $\tan\alpha=\dfrac{8}{100}=0.08$, so $\alpha\approx4.6^\circ$.
:::
