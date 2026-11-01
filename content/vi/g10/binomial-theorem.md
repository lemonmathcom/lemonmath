---
title: Nhị thức Newton
description: Khai triển (a+b)^n bằng tam giác Pascal và hệ số nhị thức, tìm một số hạng hay một hệ số, và dùng công thức để tính tổng hệ số và giá trị gần đúng.
minutes: 16
---

:::goals
- Khai triển $(a+b)^n$ bằng tam giác Pascal và hệ số nhị thức.
- Viết số hạng tổng quát $T_{k+1}$ và tìm một hệ số cho trước hoặc số hạng không chứa $x$.
- Tìm tổng các hệ số bằng phép thế.
- Dùng vài số hạng đầu của khai triển để tính gần đúng các luỹ thừa như $1{,}01^5$.
:::

Bạn đã biết $(a+b)^2=a^2+2ab+b^2$. Còn $(a+b)^5$ thì sao? Nhân năm ngoặc bằng tay vừa chậm vừa dễ sai, nhưng có một quy luật, và nó xuất phát từ việc đếm: mỗi số hạng hình thành khi chọn $a$ hoặc $b$ từ mỗi ngoặc. Đó chính xác là điều các hệ số nhị thức $C_n^k$ đếm.

## Các luỹ thừa nhỏ và tam giác Pascal

$$\begin{aligned}(a+b)^2&=a^2+2ab+b^2\\(a+b)^3&=a^3+3a^2b+3ab^2+b^3\\(a+b)^4&=a^4+4a^3b+6a^2b^2+4ab^3+b^4\end{aligned}$$

Các hệ số $1, 2, 1$ rồi $1, 3, 3, 1$ rồi $1, 4, 6, 4, 1$ tạo thành **tam giác Pascal**: mỗi số bằng tổng hai số ở ngay phía trên, vì $C_n^k+C_n^{k+1}=C_{n+1}^{k+1}$.

$$\begin{array}{ccccccccccccc}
 & & & & & & 1 & & & & & & \\
 & & & & & 1 & & 1 & & & & & \\
 & & & & 1 & & 2 & & 1 & & & & \\
 & & & 1 & & 3 & & 3 & & 1 & & & \\
 & & 1 & & 4 & & 6 & & 4 & & 1 & & \\
 & 1 & & 5 & & 10 & & 10 & & 5 & & 1 & \\
1 & & 6 & & 15 & & 20 & & 15 & & 6 & & 1
\end{array}$$

Hàng thứ $n$ của tam giác liệt kê $C_n^0, C_n^1, \dots, C_n^n$.

## Công thức nhị thức Newton

:::theorem Công thức nhị thức Newton
Với mọi số nguyên dương $n$,
$$(a+b)^n=\sum_{k=0}^{n}C_n^k a^{n-k}b^k=a^n+C_n^1a^{n-1}b+\cdots+C_n^{n-1}ab^{n-1}+b^n.$$
Số hạng thứ $(k+1)$ là $T_{k+1}=C_n^k a^{n-k}b^k$. Khai triển có $n+1$ số hạng.
:::

:::example Khai triển $(x+2)^4$
**Lời giải.** Hàng $4$ là $1, 4, 6, 4, 1$. Khi đó
$$(x+2)^4=x^4+4x^3\cdot2+6x^2\cdot4+4x\cdot8+16=x^4+8x^3+24x^2+32x+16.$$
:::

:::example Có số hạng âm
Khai triển $(2x-3)^3$.

**Lời giải.** Hàng $3$ là $1, 3, 3, 1$ với $a=2x$ và $b=-3$:
$$(2x)^3+3(2x)^2(-3)+3(2x)(-3)^2+(-3)^3=8x^3-36x^2+54x-27.$$
:::

## Chỉ tìm một hệ số

Bạn hiếm khi cần cả khai triển. Hãy viết số hạng tổng quát rồi chọn đúng $k$.

:::example Hệ số của $x^3$
Tìm hệ số của $x^3$ trong $(1+2x)^6$.

**Lời giải.** $T_{k+1}=C_6^k\cdot1^{6-k}(2x)^k=C_6^k2^kx^k$. Cần $k=3$: $C_6^3\cdot2^3=20\cdot8=160$.
:::

:::example Số hạng không chứa $x$
Tìm số hạng không chứa $x$ trong $\left(x+\dfrac2x\right)^6$.

**Lời giải.** $T_{k+1}=C_6^kx^{6-k}\left(\frac2x\right)^k=C_6^k2^kx^{6-2k}$. Số mũ của $x$ bằng $0$ khi $k=3$: $C_6^3\cdot2^3=20\cdot8=160$.
:::

## Tổng các hệ số và giá trị gần đúng

Thay $x=1$ vào một đa thức cho **tổng các hệ số** của nó. Thay $a=b=1$ vào công thức cho $\sum_{k}C_n^k=2^n$.

:::example Tổng các hệ số
Tìm tổng các hệ số của $(3x+1)^5$.

**Lời giải.** Thay $x=1$: $(3+1)^5=4^5=1024$.
:::

:::example Một giá trị gần đúng
Ước lượng $1{,}01^5$.

**Lời giải.** $1{,}01^5=(1+0{,}01)^5=1+5(0{,}01)+10(0{,}01)^2+10(0{,}01)^3+\cdots=1+0{,}05+0{,}001+0{,}00001+\cdots\approx1{,}0510$. (Giá trị chính xác: $1{,}0510100501$.)
:::

:::warning Những sai lầm thường gặp
- Quên luỹ thừa của các số: trong $(2x-3)^3$ cả $2$ và $-3$ đều được nâng lên luỹ thừa.
- Mất dấu: khi $b$ âm thì các số hạng đan dấu.
- Dùng $k$ thay cho $k+1$ khi nói vị trí của một số hạng ($T_{k+1}$ dùng $C_n^k$).
- Viết $(a+b)^n=a^n+b^n$.
:::

## Thuật ngữ

:::terms
- công thức nhị thức Newton | binomial theorem
- hệ số nhị thức | binomial coefficient
- tam giác Pascal | Pascal's triangle
- số hạng tổng quát | general term
- khai triển | expansion
- số hạng không chứa $x$ | constant term
- tổng các hệ số | sum of coefficients
- giá trị gần đúng | approximation
:::

## Tóm tắt

- $(a+b)^n=\sum_{k=0}^nC_n^ka^{n-k}b^k$, có $n+1$ số hạng.
- Các hệ số là hàng thứ $n$ của tam giác Pascal.
- $T_{k+1}=C_n^ka^{n-k}b^k$; cho số mũ của $x$ bằng giá trị cần tìm để suy ra $k$.
- Tổng các hệ số: thay $x=1$. Giá trị gần đúng: dùng vài số hạng đầu.

## Luyện tập

:::practice
1. Khai triển $(x+1)^5$.
2. Khai triển $(x-2)^4$.
3. Tìm hệ số của $x^2$ trong $(3+x)^5$.
4. Tìm số hạng thứ $5$ của $(a+b)^7$.
5. Tìm hệ số của $x^4$ trong $(1-x)^8$.
6. Tìm tổng các hệ số của $(2x-3)^4$.
7. Tính $C_6^0+C_6^1+\cdots+C_6^6$.
8. Tìm số hạng không chứa $x$ trong $\left(x^2+\dfrac1x\right)^6$.
9. Thử thách. Ước lượng $1{,}02^6$ bằng ba số hạng đầu của khai triển.
10. Thử thách. Tìm hệ số của $x^3$ trong $(1+x)^5+(1+x)^6$.
:::

:::solution Xem lời giải
1. Hàng $5$: $1, 5, 10, 10, 5, 1$. $(x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1$.
2. Hàng $4$ với $b=-2$: $x^4-8x^3+24x^2-32x+16$.
3. $T_{k+1}=C_5^k3^{5-k}x^k$. Với $k=2$: $C_5^2\cdot3^3=10\cdot27=270$.
4. $T_5=T_{4+1}=C_7^4a^3b^4=35\,a^3b^4$.
5. $T_{k+1}=C_8^k(-x)^k$. Với $k=4$: $C_8^4=70$ (dấu là $+$ vì $(-1)^4=1$).
6. Thay $x=1$: $(2-3)^4=1$.
7. Đây là $(1+1)^6=2^6=64$.
8. $T_{k+1}=C_6^k(x^2)^{6-k}x^{-k}=C_6^kx^{12-3k}$. Số mũ bằng $0$ khi $k=4$: $C_6^4=15$.
9. $1{,}02^6\approx1+6(0{,}02)+15(0{,}02)^2=1+0{,}12+0{,}006=1{,}126$. (Giá trị chính xác $1{,}1262$ làm tròn đến bốn chữ số thập phân.)
10. Hệ số của $x^3$ là $C_5^3+C_6^3=10+20=30$.
:::
