---
title: Theorems and mathematical proof
description: Understand hypotheses, conclusions, theorems and proof reasoning, apply the rules in calculations and solve practical problems.
minutes: 25
---

:::goals
- Recognise and describe hypotheses, conclusions, theorems and proof reasoning.
- Explain why the main rule works.
- Carry out the related calculations or reasoning accurately.
- Apply the idea to a practical situation.
:::

Measuring a diagram may suggest that two angles are equal, but a drawing can be inaccurate. A proof uses given facts and established rules to guarantee a conclusion for every diagram satisfying the conditions, not just the one shown.

## hypotheses, conclusions, theorems and proof reasoning

**A short exploration.**
The statement “If an integer is divisible by $4$, then it is even” has hypothesis “divisible by $4$” and conclusion “even”. Writing $n=4k=2(2k)$ proves the conclusion from definitions without testing individual numbers.

:::definition Theorem and structure
A theorem is a mathematical statement proved true. A common form is “If $P$, then $Q$”, where $P$ is the hypothesis and $Q$ the conclusion. The converse swaps them to “If $Q$, then $P$” and must be considered separately.
:::

:::definition Proof and counterexample
A proof is a chain of reasoning from hypotheses through definitions, axioms or known theorems to the conclusion. One counterexample refutes a universal claim, but examples alone cannot prove it true.
:::

**Why does this work?**
Every proof step should answer “on what basis?”. Hypotheses provide the starting point; the conclusion is the target and cannot be used as given information. A “known → therefore → required” map helps prevent circular reasoning.

**How to check your own work.** For a question on this topic, first state in words what is given and what must be found. Next write the rule you will use, substitute values or reason one step at a time, and then check the result in a different way: put it back into the data, estimate its size, or compare it with a diagram or number line. If two methods disagree, locate the first step where they differ instead of changing only the final answer. This habit catches sign errors, missing units and overlooked cases.

**Systems view.** hypotheses, conclusions, theorems and proof reasoning is not an isolated trick. Follow the chain: the data determine a model, the model determines the calculation, and the result must return to the original situation. When one piece of data changes, predict whether the result should increase, decrease or stay unchanged before calculating again.

## Worked examples and applications

:::example Separating hypothesis and conclusion
For “If two angles are vertically opposite, then they are equal”, state the hypothesis and conclusion.

**Solution.**
Hypothesis: the angles are vertically opposite. Conclusion: their measures are equal.

Therefore, H: vertical; C: equal.
:::

:::example Writing a converse
Write the converse of “If a number is divisible by $6$, then it is divisible by $3$”.

**Solution.**
The converse is: “If a number is divisible by $3$, then it is divisible by $6$”.

Therefore, If divisible by $3$, then by $6$.
:::

:::example Refuting a converse
Is that converse true?

**Solution.**
No. Number $9$ is divisible by $3$ but not by $6$; $9$ is a counterexample.

Therefore, false; $9$.
:::

:::example Proof from a definition
Prove that the sum of two even integers is even.

**Solution.**

*Understand.* Record the given data, the required result and any conditions.

*Plan.* Choose the relevant definition or rule, then work in a logical order.

*Solve.* Let the numbers be $2m,2n$ with integers $m,n$. Their sum $2m+2n=2(m+n)$ is $2$ times an integer, so it is even.

*Look back.* Compare the result with the data and use an independent check.

Therefore, even.
:::

## Common mistakes and connections

:::warning What can go wrong?
- **Using the diagram as proof.** Concluding two segments are equal because they look equal. A diagram only illustrates and may not be drawn to scale. Use markings, hypotheses or a theorem to justify equality.
- **Proving the converse instead.** Swapping hypothesis and conclusion without noticing. A statement and its converse may have different truth values. Underline the hypothesis and box the conclusion before proving.
:::

**Connections.** Proof turns isolated rules into a network of reasons. The skill is not limited to geometry: it helps test arguments, uncover hidden assumptions and communicate reliable conclusions. When solving a problem, separate three layers: the data, the mathematical relationship and the conclusion. Before substituting values, state why the chosen rule applies; after each step, check signs, units and conditions. A diagram, small table or simple case often reveals a missing assumption. Estimate before calculating so that you know whether the answer should be large or small, positive or negative. After obtaining a result, use an independent check: substitute it back into the data, measure it on the diagram, or test a boundary case. If one item of data changes, predict which part of the method changes and which part remains valid. This approach turns a formula into a connected system of reasons and makes the idea usable in an unfamiliar situation instead of only in a memorised exercise. It also produces written work that another student can follow, question and verify line by line.

## Key terms

:::terms
- theorem | định lí
- hypothesis | giả thiết
- conclusion | kết luận
- proof | chứng minh
- converse | mệnh đề đảo
- counterexample | phản ví dụ
- axiom | tiên đề
- transitive property | tính chất bắc cầu
- circular reasoning | lập luận vòng tròn
:::

## Summary

- A theorem is a statement that has been proved.
- The hypothesis is given; the conclusion must be deduced.
- Each step needs a definition, property or theorem as justification.
- One counterexample refutes a universal statement.
- A converse must be checked separately.

## Practice

Each exercise includes the knowledge you need and a sequence of hints. Try it before opening the solution.

:::exercise
In a proof, what justifies inferring $AB=AD$ from $AB=AC$ and $AC=AD$?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
This uses the transitive property of equality.

**Answer.** transitive property.
:::

:::exercise
To prove two angles supplementary to the same angle are equal, which equations should start the proof?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Call the angles $x,z$ and the common angle $y$: write $x+y=180^\circ$ and $z+y=180^\circ$.

**Answer.** $x+y=z+y=180^\circ$.
:::

:::exercise
Do checks $2+4=6$, $8+10=18$ prove that every sum of two even integers is even?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
No. They are examples only; a proof uses general even integers $2m,2n$.

**Answer.** no.
:::

:::exercise
Refute “every quadrilateral with four equal sides has four right angles”.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
A non-square rhombus has four equal sides but not four right angles; it is a counterexample.

**Answer.** non-square rhombus.
:::

:::exercise
Two alternate interior angles are equal. State the conclusion and reason.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
The lines are parallel by the equal alternate interior angle criterion.

**Answer.** the lines are parallel.
:::

:::exercise
To prove $A$, a solution says “$A$ is true because $A$ is known”. What is wrong?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
The conclusion is used as its own reason; this is circular reasoning.

**Answer.** circular reasoning.
:::

:::exercise
Prove that the product of an even integer and any integer is even.

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
Let the even number be $2k$ and the other integer be $m$. The product $(2k)m=2(km)$, and $km$ is an integer, so the product is even.

**Answer.** even.
:::

:::exercise Challenge
What is needed to prove “there exists an integer whose square is $49$”?

::hint
**What you need:** The definition and rule from this lesson.

**Steps:**
1. Identify the given information and what is required.
2. Apply the appropriate definition or rule.
3. Check the result against the original information.

::solution
One example is enough: $7^2=49$ or $(-7)^2=49$.

**Answer.** $7$.
:::

## Mini test

:::quiz
::mc
In “If $P$, then $Q$”, $P$ is the
A. conclusion.
B. counterexample.
C. hypothesis.
D. converse.
::key C
$P$ states the given condition.

::mc
To refute “every number has property X”, one needs
A. one counterexample.
B. ten supporting examples.
C. a neat diagram.
D. an approximation.
::key A
One failing case refutes a universal statement.

::mc
The converse of “If $P$, then $Q$” is
A. If not $P$, then not $Q$.
B. If $Q$, then $P$.
C. $P$ and $Q$ are both false.
D. If $P$, then not $Q$.
::key B
The converse swaps hypothesis and conclusion.

::mc
A valid proof must
A. rely only on a diagram.
B. test one example.
C. use the conclusion as given.
D. justify its steps.
::key D
A chain is reliable only when each step is justified.

::tf
Consider these statements about proof.
a) A hypothesis is a starting point.
b) One counterexample can refute a universal statement.
c) Many examples always prove a universal statement.
d) A converse is always true when the original is true.
::key T T F F
a), b) are true. Examples do not replace proof and a converse needs separate checking, so c), d) are false.

::sa
If $n=20$ and $n=4k$, find $k$.
::key 5
$20=4\cdot5$, so $k=5$.

::sa
What is the least positive odd counterexample to “every odd number is greater than $7$”?
::key 1
$1$ is positive and odd, and $1\not>7$.

:::
