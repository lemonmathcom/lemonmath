---
title: Arc length. Area of a sector and an annulus
description: Find the length of an arc, the area of a sector and the area of an annulus, and use them in real-life problems.
minutes: 20
---

:::goals
- Find the length of an arc of $n^\circ$ on a circle of radius $R$.
- Find the area of a sector and the area of an annulus.
- Use the formulas in real-life problems (wheels, clocks, windscreen wipers).
:::

A car's windscreen wiper turns about a pivot $O$. The rubber blade is fixed on the arm from the point $10$ cm from $O$ to the point $50$ cm from $O$. On each sweep the arm turns through $120^\circ$. How many square centimetres of glass does one sweep clean?

## Arc length

### Explore: split the circle into $360$ parts

A circle of radius $R$ has circumference $C=2\pi R$. The whole circle corresponds to $360^\circ$, so an arc of $1^\circ$ has length $\dfrac{2\pi R}{360}=\dfrac{\pi R}{180}$. An arc of $n^\circ$ is $n$ times as long as an arc of $1^\circ$.

:::theorem Arc length
On a circle of radius $R$, an arc of $n^\circ$ has length
$$l=\frac{\pi Rn}{180}.$$
:::

:::example Finding an arc length
Find the length of an arc of $60^\circ$ on a circle of radius $6$ cm (give your answer to 2 decimal places).

**Solution.** Using the arc-length formula with $R=6$ and $n=60$, we have

$$l=\frac{\pi\cdot6\cdot60}{180}=2\pi\approx6.28\ \text{(cm)}.$$

So the arc is about $6.28$ cm long.
:::

From the formula, when we know $l$ and $R$ we can find $n$.

:::example Finding the measure of an arc
An arc of a circle of radius $9$ cm has length $5\pi$ cm. Find the measure of the arc.

**Solution.** From $l=\dfrac{\pi Rn}{180}$, we have

$$n=\frac{180l}{\pi R}=\frac{180\cdot5\pi}{9\pi}=100.$$

So the arc measures $100^\circ$.
:::

## Area of a sector

A sector is the part of a disc bounded by an arc and the two radii through its end points. A disc of area $\pi R^2$ corresponds to $360^\circ$, so a sector of $n^\circ$ has area $\dfrac{n}{360}$ of the area of the disc.

:::theorem Area of a sector
A sector of radius $R$ with an arc of $n^\circ$ has area
$$S=\frac{\pi R^2n}{360}=\frac{lR}{2},$$
where $l$ is the length of the arc of the sector.
:::

:::diagram The sector $OAB$ of radius $R$ with an arc of $n^\circ$
alt: A sector with centre O bounded by the radii OA and OB and the arc AB, with the angle at the centre marked n degrees
point O 0,0 below-left
point A 4,0 below-right
point B 1.24,3.8 above
circle O 4
segment O A "R"
segment O B
angle A O B "n°"
:::

:::example Area of a sector
Find the area of a sector of radius $10$ cm with an arc of $72^\circ$ (give your answer to 2 decimal places).

**Solution.** Using the formula for the area of a sector, we have

$$S=\frac{\pi\cdot10^2\cdot72}{360}=20\pi\approx62.83\ \text{(cm}^2\text{)}.$$

Another way: the arc has length $l=\dfrac{\pi\cdot10\cdot72}{180}=4\pi$, so $S=\dfrac{lR}{2}=\dfrac{4\pi\cdot10}{2}=20\pi$.

So the area of the sector is about $62.83$ cm².
:::

## Area of an annulus

An annulus is the region between two concentric circles. Its area is the area of the large disc minus the area of the small disc.

:::theorem Area of an annulus
The annulus between the circles $(O, R)$ and $(O, r)$, with $R>r$, has area
$$S=\pi R^2-\pi r^2=\pi\left(R^2-r^2\right).$$
:::

:::diagram An annulus between two concentric circles
alt: Two concentric circles with centre O, large radius R and small radius r; the region between them is an annulus
point O 0,0 below
point A 3,0 right
point B -1.27,1.27 above-left
circle O 3
circle O 1.8
segment O A "R"
segment O B "r"
:::

:::example A path round a lake
A round lake has radius $30$ m. A path $2$ m wide is built all round the lake. Find the area of the path (give your answer to 2 decimal places).

**Solution.** The path is an annulus with $r=30$ m and $R=30+2=32$ m. We have

$$S=\pi\left(32^2-30^2\right)=\pi(1024-900)=124\pi\approx389.56\ \text{(m}^2\text{)}.$$

So the area of the path is about $389.56$ m².
:::

The glass cleaned in the opening problem is the part of an annulus inside an angle of $120^\circ$.

:::example The windscreen wiper
Solve the opening problem (give your answer to the nearest whole number).

**Solution.** The cleaned glass is the sector of radius $50$ cm minus the sector of radius $10$ cm, both with an arc of $120^\circ$:

$$S=\frac{\pi\cdot50^2\cdot120}{360}-\frac{\pi\cdot10^2\cdot120}{360}=\frac{\pi\left(2500-100\right)}{3}=800\pi\approx2513\ \text{(cm}^2\text{)}.$$

So one sweep cleans about $2513$ cm² of glass.
:::

:::warning Common mistakes
- **Mixing up the two formulas.** Wrong: an arc of $90^\circ$ on a circle of radius $4$ has length $\dfrac{\pi\cdot4^2\cdot90}{360}=4\pi$. Why it is wrong: that is the area of the sector. Right: $l=\dfrac{\pi\cdot4\cdot90}{180}=2\pi$.
- **Using the difference of the radii for an annulus.** Wrong: $S=\pi(R-r)^2$. Why it is wrong: we must subtract two areas. Right: $S=\pi\left(R^2-r^2\right)$.
- **Using the diameter instead of the radius.** Read carefully: a wheel "of diameter $70$ cm" has $R=35$ cm.
:::

## Key terms

:::terms
- circumference | độ dài đường tròn
- arc length | độ dài cung tròn
- sector | hình quạt tròn
- annulus | hình vành khuyên
- concentric circles | đường tròn đồng tâm
- segment of a circle | hình viên phân
:::

## Summary

- Circumference $C=2\pi R$; area of a disc $\pi R^2$.
- Arc of $n^\circ$: $l=\dfrac{\pi Rn}{180}$.
- Sector of $n^\circ$: $S=\dfrac{\pi R^2n}{360}=\dfrac{lR}{2}$.
- Annulus: $S=\pi\left(R^2-r^2\right)$.

## Practice

Each exercise comes with what you need and some steps to start. Try it yourself first, then open the solution.

:::exercise
Find the length of an arc of $45^\circ$ on a circle of radius $12$ cm (give your answer to 2 decimal places).

::hint
**What you need:** $l=\dfrac{\pi Rn}{180}$.

**Steps:**
1. Substitute $R=12$ and $n=45$.

::solution
The length $l$ of an arc of $n^\circ$ on a circle of radius $R$ is $l=\dfrac{\pi Rn}{180}$.

With $R=12$ cm and $n=45$, we have
$$l=\frac{\pi\cdot12\cdot45}{180}=3\pi\approx9.42\ \text{(cm)}.$$

So the arc is $3\pi$ cm long, about $9.42$ cm.

**Answer.** $l=3\pi\approx9.42$ cm.
:::

:::exercise
Find the area of a sector of radius $6$ cm with an arc of $150^\circ$ (give your answer to 2 decimal places).

::hint
**What you need:** $S=\dfrac{\pi R^2n}{360}$.

**Steps:**
1. Substitute $R=6$ and $n=150$.

::solution
The area $S$ of a sector of radius $R$ with an arc of $n^\circ$ is $S=\dfrac{\pi R^2n}{360}$.

With $R=6$ cm and $n=150$, we have
$$S=\frac{\pi\cdot6^2\cdot150}{360}=\frac{\pi\cdot36\cdot150}{360}=15\pi\approx47.12\ \text{(cm}^2\text{)}.$$

So the area of the sector is $15\pi$ cm², about $47.12$ cm².

**Answer.** $S=15\pi\approx47.12$ cm².
:::

:::exercise
Find the area of the annulus between two concentric circles of radii $5$ cm and $3$ cm (give your answer to 2 decimal places).

::hint
**What you need:** $S=\pi\left(R^2-r^2\right)$.

**Steps:**
1. Compute $R^2-r^2$ and multiply by $\pi$.

::solution
The area of the annulus between two concentric circles of radii $R$ and $r$ ($R>r$) is the difference of the areas of the two discs:
$$S=\pi R^2-\pi r^2=\pi\left(R^2-r^2\right).$$

With $R=5$ cm and $r=3$ cm, we have
$$S=\pi\left(5^2-3^2\right)=\pi(25-9)=16\pi\approx50.27\ \text{(cm}^2\text{)}.$$

So the area of the annulus is $16\pi$ cm², about $50.27$ cm².

**Answer.** $S=16\pi\approx50.27$ cm².
:::

:::exercise
An arc of $90^\circ$ has length $4\pi$ cm. Find the radius of the circle.

::hint
**What you need:** $l=\dfrac{\pi Rn}{180}$, so $R=\dfrac{180l}{\pi n}$.

**Steps:**
1. Substitute $l=4\pi$ and $n=90$.

::solution
Let $R$ (cm) be the radius of the circle ($R>0$).

Using the arc length formula $l=\dfrac{\pi Rn}{180}$ with $l=4\pi$ and $n=90$, we have
$$\frac{\pi R\cdot90}{180}=4\pi,\ \text{that is}\ \frac{\pi R}{2}=4\pi.$$

It follows that $R=8$.

So the radius of the circle is $8$ cm.

**Answer.** $R=8$ cm.
:::

:::exercise
Nam's bicycle wheel has diameter $70$ cm. How many metres does the bicycle travel when the wheel turns $100$ times (give your answer to 1 decimal place)?

::hint
**What you need:** in one turn, the bicycle travels the circumference $C=\pi d$.

**Steps:**
1. Find the circumference.
2. Multiply by $100$ and convert to metres.

::solution
When the wheel turns once, the bicycle travels a distance equal to the circumference of the wheel.

The circumference of the wheel is
$$C=\pi d=70\pi\ \text{(cm)}.$$

When the wheel turns $100$ times, the bicycle travels
$$100\cdot70\pi=7000\pi\approx21991\ \text{(cm)}\approx219.9\ \text{(m)}.$$

So the bicycle travels about $219.9$ m.

**Answer.** About $219.9$ m.
:::

:::exercise
An annulus has area $40\pi$ cm², and the difference of its two radii is $2$ cm. Find the two radii. (Revise [solving simultaneous linear equations](lesson:solving-simultaneous-equations).)

::hint
**What you need:** $R^2-r^2=(R-r)(R+r)$.

**Steps:**
1. From the area, $(R-r)(R+r)=40$, so $R+r=20$.
2. Solve the simultaneous equations $R+r=20$ and $R-r=2$.

::solution
From the question, $\pi\left(R^2-r^2\right)=40\pi$, so $(R-r)(R+r)=40$. Substituting $R-r=2$, we get $R+r=20$. Solving

$$\begin{cases}R+r=20\\ R-r=2\end{cases}\Rightarrow R=11,\ r=9.$$

So the two radii are $11$ cm and $9$ cm.

**Answer.** $R=11$ cm, $r=9$ cm.
:::

:::exercise
**(1.5 marks)** A clock has a minute hand $10$ cm long and an hour hand $6$ cm long.

a) In $20$ minutes, how far does the tip of the minute hand travel (give your answer to 2 decimal places)?

b) Find the area of the sector swept by the minute hand in those $20$ minutes (give your answer to 2 decimal places).

c) In those $20$ minutes, through how many degrees does the hour hand turn, and how far does its tip travel (give your answer to 2 decimal places)?

::hint
**What you need:** the minute hand turns $6^\circ$ per minute and the hour hand $0.5^\circ$ per minute.

**Steps:**
1. Find the measure of the arc, then use $l=\dfrac{\pi Rn}{180}$.
2. Use $S=\dfrac{\pi R^2n}{360}$.
3. Do the same for the hour hand.

::solution
a) Each minute the minute hand turns through $\dfrac{360^\circ}{60}=6^\circ$. In $20$ minutes it turns through $20\cdot6^\circ=120^\circ$.

The tip of the minute hand traces an arc of $120^\circ$ on a circle of radius $10$ cm. The distance it travels is
$$l=\frac{\pi\cdot10\cdot120}{180}=\frac{20\pi}{3}\approx20.94\ \text{(cm)}.$$

So the tip of the minute hand travels about $20.94$ cm.

b) The minute hand sweeps a sector of radius $10$ cm with an arc of $120^\circ$. The area of this sector is
$$S=\frac{\pi\cdot10^2\cdot120}{360}=\frac{100\pi}{3}\approx104.72\ \text{(cm}^2\text{)}.$$

So the area of the sector is about $104.72$ cm².

c) Each hour the hour hand turns through $\dfrac{360^\circ}{12}=30^\circ$, so each minute it turns through $\dfrac{30^\circ}{60}=0.5^\circ$. In $20$ minutes it turns through $20\cdot0.5^\circ=10^\circ$.

The distance travelled by the tip of the hour hand is
$$l=\frac{\pi\cdot6\cdot10}{180}=\frac{\pi}{3}\approx1.05\ \text{(cm)}.$$

So the hour hand turns through $10^\circ$ and its tip travels about $1.05$ cm.

**Answer.** a) $\dfrac{20\pi}{3}\approx20.94$ cm; b) $\dfrac{100\pi}{3}\approx104.72$ cm²; c) $10^\circ$ and $\dfrac{\pi}{3}\approx1.05$ cm.
:::

:::exercise Challenge
Consider the circle $(O, 6\text{ cm})$ and a chord $AB=6$ cm. Find the area of the segment bounded by the chord $AB$ and the minor arc $AB$ (give your answer to 2 decimal places).

::hint
**What you need:** the area of the segment is the area of the sector $OAB$ minus the area of the triangle $OAB$.

**Steps:**
1. Show that the triangle $OAB$ is equilateral, so the minor arc $AB$ measures $60^\circ$.
2. Find the area of the sector and the area of the equilateral triangle.

::solution
We have $OA=OB=AB=6$ cm, so the triangle $OAB$ is equilateral, hence $\angle AOB=60^\circ$. The sector has area $\dfrac{\pi\cdot36\cdot60}{360}=6\pi$ (cm²). The equilateral triangle with side $6$ cm has height $3\sqrt3$ cm, so its area is $\dfrac12\cdot6\cdot3\sqrt3=9\sqrt3$ (cm²). Hence

$$S=6\pi-9\sqrt3\approx3.26\ \text{(cm}^2\text{)}.$$

So the area of the segment is about $3.26$ cm².

**Answer.** $S=6\pi-9\sqrt3\approx3.26$ cm².
:::

## Mini test

:::quiz
::mc
The length of an arc of $40^\circ$ on a circle of radius $9$ cm is
A. $4\pi$ cm.
B. $2\pi$ cm.
C. $9\pi$ cm.
D. $\pi$ cm.
::key B
$l=\dfrac{\pi\cdot9\cdot40}{180}=2\pi$. A uses $2\pi R$ instead of $\pi R$, C uses the sector-area formula, and D divides by $360$ instead of $180$.

::mc
The area of a sector of radius $4$ cm with an arc of $90^\circ$ is
A. $2\pi$ cm².
B. $16\pi$ cm².
C. $8\pi$ cm².
D. $4\pi$ cm².
::key D
$S=\dfrac{\pi\cdot16\cdot90}{360}=4\pi$. A is the arc length, B is the whole disc, and C divides by $180$ instead of $360$.

::mc
The area of the annulus between two concentric circles of radii $7$ cm and $4$ cm is
A. $33\pi$ cm².
B. $9\pi$ cm².
C. $65\pi$ cm².
D. $6\pi$ cm².
::key A
$S=\pi\left(49-16\right)=33\pi$. B computes $\pi(R-r)^2$, and C adds the two squares.

::mc
A wheel has diameter $60$ cm. The circumference of the wheel is
A. $30\pi$ cm.
B. $60\pi$ cm.
C. $120\pi$ cm.
D. $900\pi$ cm.
::key B
$C=\pi d=60\pi$ cm. C takes $60$ as the radius, and D computes the area.

::tf
Consider a sector of radius $6$ cm with an arc of $120^\circ$. Decide whether each statement is true or false.
a) The arc of the sector has length $4\pi$ cm.
b) The area of the sector is $12\pi$ cm².
c) The area of the sector equals the arc length times the radius.
d) The perimeter of the sector is $(4\pi+12)$ cm.
::key T T F T
a) True: $l=\dfrac{\pi\cdot6\cdot120}{180}=4\pi$. b) True: $S=\dfrac{\pi\cdot36\cdot120}{360}=12\pi$. c) False: $S=\dfrac{lR}{2}$. d) True: the perimeter is the arc plus two radii.

::sa
Find the length (in cm) of an arc of $36^\circ$ on a circle of radius $10$ cm (give your answer to 2 decimal places).
::key 6.28
$l=\dfrac{\pi\cdot10\cdot36}{180}=2\pi\approx6.28$ cm.

::sa
Find the area (in cm²) of the annulus between two concentric circles of radii $6$ cm and $4$ cm (give your answer to the nearest whole number).
::key 63
$S=\pi\left(36-16\right)=20\pi\approx62.83\approx63$ cm².
:::
