---
title: Computing probabilities in practice
description: A strategy for classical probability problems, using counting rules, combinations, sums of dice and the complement for "at least one".
minutes: 18
---

:::goals
- Follow a four-step strategy for classical probability problems.
- Use combinations to count outcomes when objects are chosen without order.
- Use the complement for "at least one" events.
- Work with realistic contexts: urns, committees, quality control, lotteries and cards.
:::

Is it likely that two randomly chosen students are both girls? How safe is a batch of products if a few are faulty? What are the odds of winning the lottery? These questions are all the same type: **count the favourable outcomes, count all outcomes, divide**. The difficulty is in the counting, and that is where permutations and combinations come in.

## A strategy that works

1. **Define the experiment** and decide whether order matters. Drawing objects "at once" means order does not matter, so use combinations.
2. **Count $n(\Omega)$** with the counting rules.
3. **Count $n(A)$**: split into cases or use the multiplication rule. If the event says "at least one", consider the complement.
4. **Divide** and simplify: $P(A)=\frac{n(A)}{n(\Omega)}$. Check that $0\le P\le 1$.

## Balls from an urn

:::example Two balls at once
An urn has $5$ red and $3$ blue balls. Two balls are drawn at once. Find the probability that (a) both are red, (b) there is one of each colour, (c) at least one is red.

**Solution.** $n(\Omega)=\binom{8}{2}=28$.
- (a) $n(A)=\binom{5}{2}=10$, so $P=\frac{10}{28}=\frac5{14}$.
- (b) One red and one blue: $5\cdot3=15$, so $P=\frac{15}{28}$.
- (c) The complement is "both blue": $\binom{3}{2}=3$. $P=1-\frac3{28}=\frac{25}{28}$.
:::

## Choosing a committee

:::example Boys and girls
A group has $6$ boys and $4$ girls. Three people are chosen at random. Find the probability that (a) all are girls, (b) there are exactly $2$ boys, (c) there is at least one girl.

**Solution.** $n(\Omega)=\binom{10}{3}=120$.
- (a) $\binom{4}{3}=4$: $P=\frac4{120}=\frac1{30}$.
- (b) $\binom{6}{2}\cdot\binom{4}{1}=15\cdot4=60$: $P=\frac{60}{120}=\frac12$.
- (c) The complement is "all boys", $\binom{6}{3}=20$: $P=1-\frac{20}{120}=\frac56$.
:::

## Quality control

:::example Faulty items
A box has $20$ items, $3$ of them faulty. An inspector takes $4$ at random. Find the probability that none is faulty, and that at least one is faulty.

**Solution.** $n(\Omega)=\binom{20}{4}=4845$. "None faulty" means all $4$ come from the $17$ good ones: $\binom{17}{4}=2380$, so $P=\frac{2380}{4845}=\frac{28}{57}$. Then $P(\text{at least one})=1-\frac{28}{57}=\frac{29}{57}\approx0.51$.
:::

## Lotteries and cards

:::example A lottery
In a lottery you choose $6$ numbers out of $45$ and the draw picks $6$ numbers. Find the probability of (a) matching all six, (b) matching exactly five.

**Solution.** $n(\Omega)=\binom{45}{6}=8\,145\,060$.
- (a) Only one favourable choice: $P=\frac1{8\,145\,060}$.
- (b) Choose $5$ of the $6$ winning numbers and $1$ of the $39$ others: $\binom{6}{5}\cdot39=234$. $P=\frac{234}{8\,145\,060}=\frac{39}{1\,357\,510}$.
:::

:::example Two aces
Two cards are drawn from a deck of $52$. Find the probability that both are aces.

**Solution.** $\frac{\binom{4}{2}}{\binom{52}{2}}=\frac{6}{1326}=\frac1{221}$.
:::

:::warning Common mistakes
- Counting $n(\Omega)$ with order and $n(A)$ without order (or the other way round). Be consistent.
- Adding probabilities when the cases overlap.
- Forgetting the complement for "at least one": counting every case separately is long and error-prone.
- Not simplifying fractions, or giving a probability above $1$.
:::

## Key terms

:::terms
- favourable outcomes | kết quả thuận lợi
- at least one | ít nhất một
- complement | biến cố đối
- random selection | chọn ngẫu nhiên
- quality control | kiểm tra chất lượng
- lottery | xổ số
- faulty (defective) | lỗi (phế phẩm)
- urn | hộp (túi) đựng bóng
:::

## Summary

- Strategy: define the experiment, count $n(\Omega)$, count $n(A)$, divide.
- Objects taken "at once" or "without order": combinations.
- "At least one": $P=1-P(\text{none})$.
- Always check that $0\le P\le1$ and simplify.

## Practice

:::practice
1. An urn has $6$ white and $4$ black balls. Two are drawn at once. Find the probability that both are white.
2. In the same urn, find the probability that the two balls have different colours.
3. A class has $12$ boys and $8$ girls. Three students are chosen at random. Find the probability that all three are boys.
4. In the situation of exercise 3, find the probability that at least one girl is chosen.
5. A box has $15$ items, $2$ faulty. Three are taken at random. Find the probability that none is faulty.
6. Two dice are rolled. Find the probability that the product of the numbers is even.
7. Three cards are drawn from a deck of $52$. Find the probability that all are hearts.
8. In a $6$-from-$45$ lottery, a person buys $3$ different tickets. Find the probability that one of them wins the jackpot.
9. Challenge. A group has $5$ boys and $4$ girls. Four people are chosen. Find the probability of exactly $2$ boys and $2$ girls.
10. Challenge. Three dice are rolled. Find the probability that the sum is $9$, and the probability that at least one six appears.
:::

:::solution Show solutions
1. $\frac{\binom{6}{2}}{\binom{10}2}=\frac{15}{45}=\frac13$.
2. $\frac{6\cdot4}{45}=\frac{24}{45}=\frac8{15}$.
3. $\frac{\binom{12}3}{\binom{20}3}=\frac{220}{1140}=\frac{11}{57}$.
4. $1-\frac{11}{57}=\frac{46}{57}$.
5. $\frac{\binom{13}3}{\binom{15}3}=\frac{286}{455}=\frac{22}{35}$.
6. The product is odd only if both numbers are odd: $3\cdot3=9$ of $36$ outcomes. $P(\text{even})=1-\frac9{36}=\frac34$.
7. $\frac{\binom{13}3}{\binom{52}3}=\frac{286}{22\,100}=\frac{11}{850}$.
8. Three favourable tickets out of $\binom{45}{6}$ possible draws: $\frac3{8\,145\,060}=\frac1{2\,715\,020}$.
9. $n(\Omega)=\binom{9}{4}=126$. Favourable: $\binom{5}{2}\binom{4}{2}=10\cdot6=60$. $P=\frac{60}{126}=\frac{10}{21}$.
10. $n(\Omega)=6^3=216$. Sum $9$: there are $25$ ordered triples, so $P=\frac{25}{216}$. No six: $5^3=125$ triples, so $P(\text{at least one six})=1-\frac{125}{216}=\frac{91}{216}$.
:::
