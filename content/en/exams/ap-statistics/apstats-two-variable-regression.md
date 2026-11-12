---
title: Two-variable data and linear regression
description: AP Statistics regression: scatterplots, correlation, the least-squares line, interpreting slope, intercept, residuals and r², and the limits of regression.
minutes: 50
---

:::goals
- Describe a scatterplot by direction, form, strength and unusual features, in context.
- Interpret the correlation $r$ and the coefficient of determination $r^2$.
- Find the least-squares regression line from data or from summary statistics, and interpret its slope and intercept.
- Compute and interpret residuals, and use a residual plot to judge whether a linear model is appropriate.
- Recognise extrapolation and the difference between association and causation.
:::

Regression is Unit 5 of the revised course and has its own set of three multiple-choice questions on the exam, so it is worth secure marks. The arithmetic is light; points come from interpretations written **in context**, with the right words: "predicted", "on average", "for each additional ...". This lesson covers what remains in the course; transformations to achieve linearity and inference for the slope have been removed.

## Scatterplots and correlation

A **scatterplot** shows two quantitative variables measured on the same individuals: the **explanatory** variable $x$ on the horizontal axis and the **response** variable $y$ on the vertical axis. Describe it with four features, in context:

| Feature | What to say |
|---|---|
| Direction | positive or negative |
| Form | linear or curved |
| Strength | strong, moderate or weak |
| Unusual features | points far from the pattern, clusters |

The **correlation** $r$ measures the direction and strength of a **linear** relationship. It satisfies $-1\le r\le1$, has no units, and is not changed by switching $x$ and $y$ or by changing units. A value near $0$ means no linear relationship, not necessarily no relationship.

:::graph Hours studied and test score for $11$ students, with the least-squares line
alt: A scatterplot of 11 points rising from about (1, 52) to (8, 85), close to a straight line drawn through them
x: 0..9
y: 40..95
shape: free
plot: 49.17+4.608*x ; 0..9
point: (1, 52)
point: (2, 58)
point: (2, 61)
point: (3, 63)
point: (4, 65)
point: (4, 70)
point: (5, 72)
point: (6, 74)
point: (6, 79)
point: (7, 83)
point: (8, 85)
:::

## The least-squares regression line

The **least-squares regression line** $\hat y=a+bx$ is the line that makes the sum of squared residuals as small as possible. From summary statistics,
$$b=r\,\frac{s_y}{s_x},\qquad a=\bar y-b\bar x,$$
so the line always passes through $(\bar x,\bar y)$. The hat on $\hat y$ means **predicted** value.

- **Slope:** "For each additional [unit of $x$], the predicted [$y$] increases (decreases) by $b$ [units of $y$]."
- **Intercept:** "The predicted [$y$] when [$x$] $=0$ is $a$." Interpret it only if $x=0$ makes sense.

:::example Interpreting the slope
For the students in the graph, the least-squares line is $\widehat{\text{score}}=49.2+4.61\,(\text{hours})$. Which is the correct interpretation of $4.61$?
A. Each student's score increases by exactly $4.61$ points per hour studied.
B. For each additional hour studied, the predicted score increases by about $4.61$ points.
C. A student who studies $0$ hours will score $4.61$ points.
D. About $4.61\%$ of the variation in scores is explained by hours studied.

**Solution.** The slope describes how the **predicted** response changes when the explanatory variable increases by one unit.

Option A forgets that the line gives predictions, not exact values for each student; option C describes the intercept, and wrongly; option D confuses the slope with $r^2$.

So the slope means that for each additional hour studied, the predicted score increases by about $4.61$ points, answer **B**.
:::

:::example A line from summary statistics
For a set of data, $\bar x=5$, $s_x=2$, $\bar y=40$, $s_y=6$ and $r=0.8$. The least-squares regression line is
A. $\hat y=28+2.4x$
B. $\hat y=40+2.4x$
C. $\hat y=37.3+0.27x$
D. $\hat y=28+0.8x$

**Solution.** The slope is $b=r\,\dfrac{s_y}{s_x}=0.8\cdot\dfrac{6}{2}=2.4$.

The intercept is $a=\bar y-b\bar x=40-2.4(5)=28$, because the line passes through $(\bar x,\bar y)=(5,40)$.

So the line is $\hat y=28+2.4x$, answer **A**. Option C uses $\dfrac{s_x}{s_y}$ instead of $\dfrac{s_y}{s_x}$.
:::

## Residuals and $r^2$

A **residual** is
$$\text{residual}=y-\hat y=\text{actual}-\text{predicted}.$$
A positive residual means the line underestimates that point. A **residual plot** (residuals against $x$) with no pattern supports a linear model; a curved pattern means a linear model is not appropriate.

The **coefficient of determination** $r^2$ is the proportion of the variation in $y$ that is accounted for by the linear model with $x$. The **standard deviation of the residuals** $s$ is the typical size of a prediction error.

:::example Computing a residual
A model for the price of a used car is $\hat y=24-1.8x$, where $x$ is the age in years and $y$ the price in thousands of dollars. A $5$-year-old car sells for $13.5$ thousand dollars. What is its residual?

**Solution.** The predicted price is $\hat y=24-1.8(5)=15$ thousand dollars.

The residual is $y-\hat y=13.5-15=-1.5$ thousand dollars.

So the residual is $-1.5$: the car sold for $1500$ dollars less than the model predicts.
:::

:::example Reading $r^2$
For the hours and scores data, $r^2=0.965$. Which statement is correct?
A. $96.5\%$ of the students' scores are predicted correctly.
B. The slope of the line is $0.965$.
C. $96.5\%$ of the variation in test scores is accounted for by the linear model with hours studied.
D. Studying causes $96.5\%$ of a student's score.

**Solution.** By definition, $r^2$ describes how much of the **variation** in the response is accounted for by the linear relationship with the explanatory variable.

It says nothing about the number of correct predictions or about causation, and it is not the slope.

So the correct statement is C, answer **C**. Since the association is positive, $r=\sqrt{0.965}\approx0.982$.
:::

## Limits of regression

- **Extrapolation:** predicting far outside the range of the $x$-values used to build the line is unreliable.
- **Association is not causation:** an observational data set can show a strong correlation because of a **lurking variable** that affects both $x$ and $y$. Only a well-designed experiment can show cause and effect.
- **Linear form:** $r$ and the least-squares line describe only linear patterns; always look at the scatterplot and the residual plot.

:::warning Common traps
- **"Predicted":** slope and intercept statements must say "predicted" or "on average".
- **Residual sign:** actual minus predicted, never the other way round.
- **$r$ versus $r^2$:** the sign of $r$ is the sign of the slope; $r^2$ is never negative.
- **Context:** name both variables and their units in every interpretation.
- **Removed topics:** inference for the slope and transformations are no longer tested.
:::

:::terms
- explanatory / response variable | biến giải thích / biến phản hồi
- scatterplot | biểu đồ phân tán
- correlation | hệ số tương quan
- least-squares regression line | đường hồi quy bình phương nhỏ nhất
- predicted value | giá trị dự đoán
- residual / residual plot | phần dư / biểu đồ phần dư
- coefficient of determination | hệ số xác định
- extrapolation | ngoại suy
- lurking variable | biến ẩn
:::

## Similar exercises

:::exercise
A used-car model is $\hat y=24-1.8x$, where $x$ is the age in years and $y$ the price in thousands of dollars. Interpret the slope and the intercept in context.

::hint
**What you need:** the slope is the change in predicted $y$ per unit of $x$; the intercept is the predicted $y$ at $x=0$.

::solution
The slope is $-1.8$: for each additional year of age, the predicted price of a used car decreases by $1.8$ thousand dollars.

The intercept is $24$: the predicted price of a car that is $0$ years old, that is a new car, is $24$ thousand dollars. This makes sense if new cars were in the age range of the data.

So the price is predicted to fall by $1800$ dollars per year from a predicted $24{,}000$ dollars when new.

**Answer.** Slope: $-1.8$ thousand dollars per year; intercept: $24$ thousand dollars for a new car.
:::

:::exercise
Using the same model, a $3$-year-old car sells for $20$ thousand dollars. Find and interpret its residual.

::hint
**What you need:** residual $=y-\hat y$.

::solution
The predicted price is $\hat y=24-1.8(3)=18.6$ thousand dollars.

The residual is $20-18.6=1.4$ thousand dollars.

So the residual is $1.4$: this car sold for $1400$ dollars more than the model predicts.

**Answer.** $1.4$ thousand dollars; the model underestimates its price.
:::

:::exercise
For a data set, $\bar x=20$, $s_x=4$, $\bar y=65$, $s_y=10$ and $r=-0.6$. Find the least-squares regression line.

::hint
**What you need:** $b=r\,\dfrac{s_y}{s_x}$ and $a=\bar y-b\bar x$.

::solution
The slope is $b=-0.6\cdot\dfrac{10}{4}=-1.5$.

The line passes through $(20,65)$, so $a=65-(-1.5)(20)=65+30=95$.

So the least-squares regression line is $\hat y=95-1.5x$.

**Answer.** $\hat y=95-1.5x$.
:::

:::exercise
For the data in the previous exercise, find $r^2$ and interpret it in general terms.

::hint
**What you need:** square $r$.

::solution
Squaring the correlation gives $r^2=(-0.6)^2=0.36$.

So $36\%$ of the variation in $y$ is accounted for by the linear model with $x$, and the remaining $64\%$ is due to other factors.

**Answer.** $r^2=0.36$.
:::

:::exercise
A scatterplot of the age of trees, in years, and their trunk diameter, in centimetres, shows points close to an increasing straight line with no unusual points, and $r=0.92$. Describe the relationship.

::hint
**What you need:** direction, form, strength, unusual features, in context.

::solution
Since $r=0.92$ is positive and close to $1$ and the points lie close to a line, the association is strong and positive.

There is a strong, positive, linear relationship between the age of a tree and its trunk diameter, with no unusual points: older trees tend to have wider trunks.

**Answer.** Strong, positive, linear, no unusual features.
:::

## Applied exercises

:::exercise
For a group of adults, height $y$ in cm and arm span $x$ in cm are related by $\hat y=10+0.95x$.
a) Predict the height of a person with arm span $170$ cm.
b) That person is actually $168$ cm tall. Find the residual.

::hint
**What you need:** substitute $x=170$, then compute actual minus predicted.

::solution
a) The predicted height is $\hat y=10+0.95(170)=10+161.5=171.5$ cm.

b) The residual is $168-171.5=-3.5$ cm.

So the predicted height is $171.5$ cm, and the residual of $-3.5$ cm means the model overestimates this person's height.

**Answer.** a) $171.5$ cm; b) $-3.5$ cm.
:::

:::exercise
A model for the height of children aged $2$ to $10$ years is $\hat y=80+6x$, where $x$ is age in years and $y$ height in cm. Use it to predict the height of a $40$-year-old, and comment.

::hint
**What you need:** compare $x=40$ with the range of the data.

::solution
Substituting gives $\hat y=80+6(40)=320$ cm.

A height of $3.2$ m is impossible. The model was built from children aged $2$ to $10$, and growth stops in adulthood, so using it at age $40$ is extrapolation far beyond the data.

So the prediction of $320$ cm is not reliable; the model should only be used for ages $2$ to $10$.

**Answer.** $320$ cm, an unreliable extrapolation.
:::

:::exercise
Data from many towns show a strong positive correlation between monthly ice cream sales and the number of swimming accidents. Does eating ice cream cause swimming accidents? Explain.

::hint
**What you need:** look for a lurking variable.

::solution
No. These are observational data, so they cannot show cause and effect.

A lurking variable, hot weather, increases both ice cream sales and the number of people swimming, and more swimming leads to more accidents. This explains the correlation without ice cream causing accidents.

So the association is real, but it does not show that ice cream causes swimming accidents.

**Answer.** No; hot weather is a lurking variable.
:::

:::exercise Challenge
For two variables, $r=0.8$, $s_x=2$ and $s_y=6$. If a value of $x$ is one standard deviation above $\bar x$, by how much is its predicted $y$ above $\bar y$?

::hint
**What you need:** $b=r\,\dfrac{s_y}{s_x}$ and the line passes through $(\bar x,\bar y)$.

::solution
The slope is $b=0.8\cdot\dfrac{6}{2}=2.4$. An increase of one standard deviation in $x$ is $2$ units, so the predicted $y$ increases by $2.4\times2=4.8$.

In standard deviations of $y$, this is $\dfrac{4.8}{6}=0.8=r$: the prediction moves only $r$ standard deviations, which is why the method is called regression.

So the predicted $y$ is $4.8$ units, that is $0.8$ standard deviations, above $\bar y$.

**Answer.** $4.8$ units.
:::

:::quiz
::mc
A least-squares line has slope $-2.3$. The correlation $r$ is
A. positive
B. equal to $-2.3$
C. negative
D. equal to $0$
::key C
The correlation has the same sign as the slope.

::mc
A residual is computed as
A. actual $y$ minus predicted $y$
B. predicted $y$ minus actual $y$
C. $x$ minus $\bar x$
D. $y$ minus $\bar y$
::key A
Residual $=y-\hat y$.

::mc
Which value of $r$ shows the strongest linear relationship?
A. $0.75$
B. $0.10$
C. $-0.5$
D. $-0.92$
::key D
Strength depends on the size of $|r|$.

::mc
Predicting $y$ for an $x$-value far outside the data is called
A. interpolation
B. extrapolation
C. correlation
D. a residual
::key B
Extrapolation is unreliable.

::tf
A least-squares line is $\hat y=5+2x$ and $r=0.9$. Decide whether each statement is true or false.
a) The line passes through $(\bar x,\bar y)$.
b) The predicted $y$ when $x=3$ is $11$.
c) $r^2=0.81$.
d) The relationship must be causal.
::key T T T F
Correlation does not show causation.

::sa
For $\hat y=5+2x$, find the predicted value when $x=7$.
::key 19
$5+2(7)=19$.

::sa
If $r=0.9$, find $r^2$.
::key 0.81
$0.9^2=0.81$.
:::
