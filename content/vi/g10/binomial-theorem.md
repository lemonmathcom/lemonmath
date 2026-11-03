---
title: Nhị thức Newton
description: Khai triển (a+b)⁴ và (a+b)⁵ bằng tổ hợp và tam giác Pascal, tìm một hệ số, tính tổng hệ số và tính gần đúng các luỹ thừa.
minutes: 20
---

:::goals
- Hiểu vì sao các hệ số của $(a+b)^n$ là các số tổ hợp $C_n^k$.
- Khai triển $(a+b)^4$ và $(a+b)^5$, kể cả khi $a$, $b$ chứa hệ số hoặc dấu trừ.
- Tìm một hệ số hoặc số hạng không chứa $x$ trong khai triển với số mũ $4$ hoặc $5$.
- Tính tổng các hệ số và tính gần đúng các luỹ thừa như $1{,}05^4$.
:::

Bạn Minh gửi tiết kiệm $20$ triệu đồng với lãi suất $5\%$ một năm, lãi được nhập vào gốc sau mỗi năm. Sau $4$ năm, số tiền là $20\cdot1{,}05^4$ triệu đồng. Không có máy tính, làm sao tính $1{,}05^4$ nhanh và chính xác? Và nếu chỉ cần biết số tiền khoảng bao nhiêu triệu, có cách nào ước lượng gọn hơn không?

Ta viết $1{,}05^4=(1+0{,}05)^4$. Vậy câu hỏi trở thành: khai triển $(a+b)^4$ thế nào? Bài này cho ta công thức khai triển $(a+b)^4$ và $(a+b)^5$, và nó đến từ chính các phép đếm trong bài [Hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations).

## Hệ số đến từ đâu?

Hãy nhân $(a+b)^3=(a+b)(a+b)(a+b)$ một cách có hệ thống. Mỗi số hạng của tích được tạo ra bằng cách lấy từ **mỗi ngoặc** một chữ $a$ hoặc một chữ $b$, rồi nhân lại. Chẳng hạn lấy $b$ ở ngoặc thứ hai, $a$ ở hai ngoặc còn lại cho $a\cdot b\cdot a=a^2b$.

| Số ngoặc lấy $b$ | Số hạng | Số cách chọn các ngoặc lấy $b$ |
|---|---|---|
| $0$ | $a^3$ | $C_3^0=1$ |
| $1$ | $a^2b$ | $C_3^1=3$ |
| $2$ | $ab^2$ | $C_3^2=3$ |
| $3$ | $b^3$ | $C_3^3=1$ |

Gom các số hạng giống nhau, ta được đúng hằng đẳng thức quen thuộc:

$$(a+b)^3=a^3+3a^2b+3ab^2+b^3.$$

Hệ số của $a^{3-k}b^k$ chính là số cách chọn $k$ ngoặc (trong $3$ ngoặc) để lấy $b$, tức $C_3^k$. Lập luận này dùng được cho mọi số mũ.

## Công thức khai triển với $n=4$ và $n=5$

:::theorem Nhị thức Newton với $n=4$ và $n=5$
$$\begin{aligned}(a+b)^4&=C_4^0a^4+C_4^1a^3b+C_4^2a^2b^2+C_4^3ab^3+C_4^4b^4\\&=a^4+4a^3b+6a^2b^2+4ab^3+b^4,\\[4pt](a+b)^5&=C_5^0a^5+C_5^1a^4b+C_5^2a^3b^2+C_5^3a^2b^3+C_5^4ab^4+C_5^5b^5\\&=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5.\end{aligned}$$
:::

**Vì sao?** Như với $(a+b)^3$: số hạng $a^{n-k}b^k$ xuất hiện mỗi khi ta chọn $k$ trong $n$ ngoặc để lấy $b$, và có $C_n^k$ cách chọn như vậy. Mỗi khai triển có $n+1$ số hạng; số mũ của $a$ giảm dần từ $n$ về $0$, số mũ của $b$ tăng dần từ $0$ đến $n$, và tổng hai số mũ luôn bằng $n$.

Các hệ số xếp thành **tam giác Pascal**: mỗi số (trừ hai số $1$ ở hai đầu) bằng tổng hai số ngay phía trên nó, vì $C_n^{k-1}+C_n^k=C_{n+1}^k$.

$$\begin{array}{ccccccccccc}
 & & & & & 1 & & & & & \\
 & & & & 1 & & 1 & & & & \\
 & & & 1 & & 2 & & 1 & & & \\
 & & 1 & & 3 & & 3 & & 1 & & \\
 & 1 & & 4 & & 6 & & 4 & & 1 & \\
1 & & 5 & & 10 & & 10 & & 5 & & 1
\end{array}$$

Hàng thứ $n$ (tính từ hàng $0$ ở đỉnh) liệt kê $C_n^0, C_n^1, \dots, C_n^n$.

## Khai triển một nhị thức

Cách làm: xác định $a$ và $b$ (kể cả hệ số và dấu), lấy hàng hệ số trong tam giác Pascal, rồi nâng **cả** $a$ và $b$ lên luỹ thừa.

:::example Khai triển $(x+2)^4$
Khai triển $(x+2)^4$.

**Lời giải.** Áp dụng công thức với $a=x$, $b=2$ và hàng hệ số $1, 4, 6, 4, 1$:

$$\begin{aligned}(x+2)^4&=x^4+4x^3\cdot2+6x^2\cdot2^2+4x\cdot2^3+2^4\\&=x^4+8x^3+24x^2+32x+16.\end{aligned}$$

Vậy $(x+2)^4=x^4+8x^3+24x^2+32x+16$.

**Kiểm tra.** Thay $x=1$: vế trái $3^4=81$, vế phải $1+8+24+32+16=81$.
:::

Khi $b$ âm, các luỹ thừa bậc lẻ của $b$ âm, nên dấu các số hạng đan xen.

:::example Có dấu trừ
Khai triển $(2x-1)^5$.

**Lời giải.** Lấy $a=2x$, $b=-1$ và hàng hệ số $1, 5, 10, 10, 5, 1$. Nâng cả $2$ lẫn $x$ lên luỹ thừa:

$$\begin{aligned}(2x-1)^5&=(2x)^5+5(2x)^4(-1)+10(2x)^3(-1)^2+10(2x)^2(-1)^3+5(2x)(-1)^4+(-1)^5\\&=32x^5-80x^4+80x^3-40x^2+10x-1.\end{aligned}$$

Vậy $(2x-1)^5=32x^5-80x^4+80x^3-40x^2+10x-1$.
:::

## Chỉ tìm một hệ số

Nhiều khi ta chỉ cần một số hạng. Trong $(a+b)^n$, số hạng chứa $b^k$ là $C_n^ka^{n-k}b^k$; ta chọn $k$ cho phù hợp mà không cần viết cả khai triển.

:::example Hệ số của $x^3$
Tìm hệ số của $x^3$ trong khai triển $(1+2x)^5$.

**Lời giải.** Số hạng chứa $(2x)^k$ là $C_5^k\cdot1^{5-k}(2x)^k=C_5^k2^kx^k$. Số mũ của $x$ bằng $3$ khi $k=3$:

$$C_5^3\cdot2^3=10\cdot8=80.$$

Vậy hệ số của $x^3$ là $80$.
:::

Cách làm tương tự khi $b$ chứa $x$ ở mẫu: ta cộng các số mũ của $x$ rồi cho bằng số mũ cần tìm.

:::example Số hạng không chứa $x$
Tìm số hạng không chứa $x$ trong khai triển $\left(x+\dfrac2x\right)^4$ (với $x\ne0$).

**Lời giải.** Số hạng tổng quát là

$$C_4^k\,x^{4-k}\left(\dfrac2x\right)^k=C_4^k\,2^k\,x^{4-2k}.$$

Số hạng không chứa $x$ ứng với $4-2k=0$, tức $k=2$:

$$C_4^2\cdot2^2=6\cdot4=24.$$

Vậy số hạng không chứa $x$ là $24$.
:::

## Tổng các hệ số và tính gần đúng

Thay $x=1$ vào một đa thức thì mỗi số hạng chỉ còn lại hệ số của nó, nên ta được **tổng các hệ số**. Thay $a=b=1$ vào công thức khai triển cho $C_5^0+C_5^1+\cdots+C_5^5=2^5=32$.

:::example Tổng các hệ số
Tính tổng các hệ số trong khai triển $(3x-1)^5$.

**Lời giải.** Không cần khai triển: thay $x=1$ vào cả hai vế của đẳng thức khai triển:

$$(3\cdot1-1)^5=2^5=32.$$

Vậy tổng các hệ số là $32$. (Khai triển đầy đủ là $243x^5-405x^4+270x^3-90x^2+15x-1$, và $243-405+270-90+15-1=32$.)
:::

Bây giờ ta trả lời câu hỏi về khoản tiết kiệm ở đầu bài.

:::example Khoản tiết kiệm của Minh
Tính $1{,}05^4$ bằng công thức khai triển, rồi tính số tiền của Minh sau $4$ năm. Nếu chỉ dùng ba số hạng đầu thì sai lệch bao nhiêu?

**Lời giải.** Viết $1{,}05=1+0{,}05$ và dùng hàng hệ số $1, 4, 6, 4, 1$:

$$\begin{aligned}1{,}05^4&=1+4\cdot0{,}05+6\cdot0{,}05^2+4\cdot0{,}05^3+0{,}05^4\\&=1+0{,}2+0{,}015+0{,}0005+0{,}00000625\\&=1{,}21550625.\end{aligned}$$

Số tiền sau $4$ năm là $20\,000\,000\cdot1{,}21550625=24\,310\,125$ đồng.

Ba số hạng đầu cho $1+0{,}2+0{,}015=1{,}215$, tức $24\,300\,000$ đồng, chỉ lệch $10\,125$ đồng.

Vậy sau $4$ năm Minh có $24\,310\,125$ đồng; ước lượng bằng ba số hạng đầu cho khoảng $24{,}3$ triệu đồng, đủ tốt khi chỉ cần con số tròn.
:::

:::warning Những sai lầm thường gặp
- **Quên nâng hệ số lên luỹ thừa.** Viết số hạng $10(2x)^3(-1)^2$ thành $10\cdot2x^3$. Sai vì $(2x)^3=8x^3$. Đúng: $10\cdot8x^3=80x^3$.
- **Mất dấu.** Trong $(2x-1)^5$ viết mọi số hạng đều dương. Sai vì $(-1)^k$ âm khi $k$ lẻ. Đúng: dấu đan xen $+,-,+,-,+,-$.
- **Viết $(a+b)^n=a^n+b^n$.** Sai: với $a=b=1$, $n=4$ thì vế trái bằng $16$, vế phải bằng $2$. Đúng: phải có đủ $n+1$ số hạng.
- **Nhầm vị trí số hạng.** Số hạng chứa $b^k$ là số hạng **thứ $k+1$** (vì bắt đầu từ $k=0$). Chẳng hạn trong $(a+b)^5$, số hạng thứ ba là $C_5^2a^3b^2=10a^3b^2$.
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

- Hệ số của $a^{n-k}b^k$ trong $(a+b)^n$ là $C_n^k$: số cách chọn $k$ ngoặc để lấy $b$.
- $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.
- $(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$.
- Các hệ số là một hàng của tam giác Pascal; khai triển có $n+1$ số hạng.
- Tìm một hệ số: viết $C_n^ka^{n-k}b^k$, gom số mũ của $x$, chọn $k$.
- Tổng các hệ số: thay $x=1$. Tính gần đúng $(1+h)^n$ với $h$ nhỏ: dùng vài số hạng đầu.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Khai triển $(x+1)^5$.

::hint
**Kiến thức:** hàng $5$ của tam giác Pascal là $1, 5, 10, 10, 5, 1$.

**Gợi ý các bước:**
1. Viết các luỹ thừa giảm dần của $x$.
2. Ghép với hàng hệ số.

::solution
Với $a=x$, $b=1$, mọi luỹ thừa của $b$ đều bằng $1$.

**Đáp số.** $(x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1$.
:::

:::exercise
Khai triển $(x-3)^4$.

::hint
**Kiến thức:** công thức $(a+b)^4$ với $b=-3$; dấu đan xen.

**Gợi ý các bước:**
1. Tính $(-3)^1$, $(-3)^2$, $(-3)^3$, $(-3)^4$.
2. Nhân với hàng hệ số $1, 4, 6, 4, 1$.

::solution
$$(x-3)^4=x^4+4x^3(-3)+6x^2\cdot9+4x(-27)+81.$$

**Đáp số.** $(x-3)^4=x^4-12x^3+54x^2-108x+81$.
:::

:::exercise
Tìm hệ số của $x^2$ trong khai triển $(3+x)^5$.

::hint
**Kiến thức:** số hạng chứa $x^k$ trong $(3+x)^5$ là $C_5^k3^{5-k}x^k$.

**Gợi ý các bước:**
1. Chọn $k=2$.
2. Tính $C_5^2\cdot3^3$.

::solution
$C_5^2\cdot3^3=10\cdot27=270$.

**Đáp số.** $270$.
:::

:::exercise
Rút gọn biểu thức $(x+y)^4+(x-y)^4$.

::hint
**Kiến thức:** trong $(x-y)^4$, các số hạng chứa luỹ thừa lẻ của $y$ đổi dấu.

**Gợi ý các bước:**
1. Khai triển cả hai biểu thức.
2. Cộng lại: các số hạng chứa $y$, $y^3$ triệt tiêu.

::solution
$(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$ và $(x-y)^4=x^4-4x^3y+6x^2y^2-4xy^3+y^4$. Cộng lại, các số hạng $\pm4x^3y$, $\pm4xy^3$ triệt tiêu.

**Đáp số.** $2x^4+12x^2y^2+2y^4$.
:::

:::exercise
Xét khai triển $(1-2x)^5$. Mỗi khẳng định sau đúng hay sai?

a) Khai triển có $6$ số hạng.
b) Hệ số của $x^2$ là $40$.
c) Tổng các hệ số bằng $1$.
d) Số hạng chứa $x^5$ là $32x^5$.

::hint
**Kiến thức:** $(a+b)^5$ có $6$ số hạng; số hạng chứa $x^k$ là $C_5^k(-2x)^k$; tổng các hệ số có được khi thay $x=1$.

**Gợi ý các bước:**
1. Viết số hạng tổng quát $C_5^k(-2)^kx^k$.
2. Thay $k=2$ và $k=5$.
3. Thay $x=1$ để tính tổng hệ số.

::solution
a) **Đúng.** Số mũ $5$ cho $5+1=6$ số hạng.

b) **Đúng.** $C_5^2(-2)^2=10\cdot4=40$.

c) **Sai.** Thay $x=1$: $(1-2)^5=-1$.

d) **Sai.** $C_5^5(-2)^5x^5=-32x^5$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Tìm hệ số của $x^4$ trong khai triển $\left(x^2+\dfrac2x\right)^5$ (với $x\ne0$).

::hint
**Kiến thức:** số hạng tổng quát $C_5^k(x^2)^{5-k}\left(\dfrac2x\right)^k$.

**Gợi ý các bước:**
1. Gom số mũ của $x$: $2(5-k)-k=10-3k$.
2. Giải $10-3k=4$.
3. Tính hệ số.

::solution
$C_5^k(x^2)^{5-k}\left(\dfrac2x\right)^k=C_5^k2^kx^{10-3k}$. Ta cần $10-3k=4$, tức $k=2$: hệ số là $C_5^2\cdot2^2=10\cdot4=40$.

**Đáp số.** $40$.
:::

:::exercise
Một máy lọc nước giá $10$ triệu đồng, mỗi năm giá trị của nó giảm $2\%$ so với năm trước. Dùng ba số hạng đầu của khai triển $(1-0{,}02)^5$ để ước lượng giá trị của máy sau $5$ năm.

::hint
**Kiến thức:** sau $5$ năm giá trị là $10\cdot0{,}98^5$ triệu đồng; $(1+h)^5\approx1+5h+10h^2$ khi $h$ nhỏ.

**Gợi ý các bước:**
1. Viết $0{,}98^5=(1-0{,}02)^5$.
2. Tính $1+5(-0{,}02)+10(-0{,}02)^2$.
3. Nhân với $10$ triệu đồng.

::solution
$$0{,}98^5\approx1-5\cdot0{,}02+10\cdot0{,}02^2=1-0{,}1+0{,}004=0{,}904.$$
Giá trị của máy khoảng $10\,000\,000\cdot0{,}904=9\,040\,000$ đồng. (Giá trị đúng là $9\,039\,207{,}968$ đồng, lệch chưa tới $800$ đồng.)

**Đáp số.** Khoảng $9\,040\,000$ đồng.
:::

:::exercise
(Ôn tập bài [Hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations)) Cho tập $X=\{1; 2; 3; 4; 5\}$.

(a) Với mỗi $k=0, 1, \dots, 5$, tập $X$ có bao nhiêu tập con gồm $k$ phần tử? (b) Dùng công thức khai triển để giải thích vì sao $X$ có tất cả $32$ tập con.

::hint
**Kiến thức:** số tập con $k$ phần tử của tập $5$ phần tử là $C_5^k$; thay $a=b=1$ vào $(a+b)^5$.

**Gợi ý các bước:**
1. Tính $C_5^0, \dots, C_5^5$.
2. Cộng lại và so sánh với $(1+1)^5$.

::solution
(a) $C_5^0=1$, $C_5^1=5$, $C_5^2=10$, $C_5^3=10$, $C_5^4=5$, $C_5^5=1$.

(b) Thay $a=b=1$ vào khai triển $(a+b)^5$:
$$C_5^0+C_5^1+\cdots+C_5^5=(1+1)^5=32.$$

**Đáp số.** (a) $1, 5, 10, 10, 5, 1$; (b) $1+5+10+10+5+1=2^5=32$.
:::

:::exercise Thử thách
Tìm hệ số của $x^2$ trong khai triển của $(1+x)(1+2x)^4$.

::hint
**Kiến thức:** $x^2$ trong tích có được từ $1\cdot(\text{số hạng } x^2)$ và $x\cdot(\text{số hạng } x)$.

**Gợi ý các bước:**
1. Tìm hệ số của $x$ và $x^2$ trong $(1+2x)^4$.
2. Cộng hai đóng góp.

::solution
Trong $(1+2x)^4$: hệ số của $x$ là $C_4^1\cdot2=8$, của $x^2$ là $C_4^2\cdot2^2=24$. Trong tích, $x^2$ đến từ $1\cdot24x^2$ và $x\cdot8x$, nên hệ số là $24+8=32$.

**Đáp số.** $32$.
:::

:::exercise Thử thách
Không dùng máy tính, hãy so sánh $1{,}1^5$ với $1{,}6$.

::hint
**Kiến thức:** $(1+0{,}1)^5$ khai triển theo hàng hệ số $1, 5, 10, 10, 5, 1$; mọi số hạng đều dương.

**Gợi ý các bước:**
1. Tính ba số hạng đầu: đã vượt $1{,}6$ chưa?
2. Nếu cần, tính đủ sáu số hạng.

::solution
$$1{,}1^5=1+5\cdot0{,}1+10\cdot0{,}01+10\cdot0{,}001+5\cdot0{,}0001+0{,}00001=1{,}61051.$$
Ngay ba số hạng đầu đã cho $1+0{,}5+0{,}1=1{,}6$, và các số hạng còn lại đều dương.

**Đáp số.** $1{,}1^5=1{,}61051>1{,}6$.
:::

## Kiểm tra mini

:::quiz
::mc
Khai triển $(x-1)^4$ là
A. $x^4-4x^3+6x^2-4x+1$.
B. $x^4+4x^3+6x^2+4x+1$.
C. $x^4-1$.
D. $x^4-4x^3-6x^2-4x-1$.
::key A
Dùng hàng $1, 4, 6, 4, 1$ với $b=-1$: luỹ thừa lẻ của $-1$ âm, luỹ thừa chẵn dương, nên dấu đan xen. Phương án C là lỗi viết $(a+b)^n=a^n+b^n$.

::mc
Hệ số của $x^3$ trong khai triển $(2x+1)^4$ là
A. $4$.
B. $8$.
C. $24$.
D. $32$.
::key D
Số hạng chứa $x^3$ là $C_4^3(2x)^3\cdot1=4\cdot8x^3=32x^3$. Phương án A quên luỹ thừa hệ số $2$; B quên $C_4^3$; C là hệ số của $x^2$.

::mc
Số hạng không chứa $x$ trong khai triển $\left(x-\dfrac2x\right)^4$ (với $x\ne0$) là
A. $-24$.
B. $6$.
C. $12$.
D. $24$.
::key D
Số hạng tổng quát $C_4^k\,x^{4-k}\left(-\dfrac2x\right)^k=C_4^k(-2)^kx^{4-2k}$. Cần $4-2k=0$, tức $k=2$: $6\cdot(-2)^2=24$ (luỹ thừa chẵn nên dương).

::mc
Tổng các hệ số trong khai triển $(2x-3)^5$ là
A. $-1$.
B. $1$.
C. $3125$.
D. $-243$.
::key A
Thay $x=1$: $(2-3)^5=(-1)^5=-1$. Phương án D là kết quả khi thay $x=0$ (số hạng không chứa $x$), C là $(2+3)^5$ do bỏ dấu trừ.

::tf
Cho khai triển $(1+3x)^4=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$.
a) $a_1=12$.
b) $a_2=18$.
c) $a_0+a_1+a_2+a_3+a_4=256$.
d) Số hạng thứ ba của khai triển là $54x^2$.
::key Đ S Đ Đ
a) Đúng: $C_4^1\cdot3=12$. b) Sai: $a_2=C_4^2\cdot3^2=54$ (giá trị $18$ là do quên bình phương $3$). c) Đúng: thay $x=1$ được $4^4=256$. d) Đúng: số hạng thứ ba ứng với $k=2$, là $54x^2$.

::sa
Tìm hệ số của $x^2$ trong khai triển $(x-2)^5$.
::key -80
Số hạng chứa $x^2$ là $C_5^3x^2(-2)^3=10\cdot(-8)x^2=-80x^2$.

::sa
Tìm hệ số của $x^3$ trong khai triển $(x+2)(x-1)^4$.
::key -2
$(x-1)^4=x^4-4x^3+6x^2-4x+1$. Số hạng $x^3$ của tích đến từ $x\cdot6x^2$ và $2\cdot(-4x^3)$, nên hệ số là $6-8=-2$.
:::
