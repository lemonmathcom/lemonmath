---
title: Phương trình quy về phương trình bậc hai
description: Giải phương trình chứa căn bằng cách bình phương hai vế rồi thử lại để loại nghiệm ngoại lai, và áp dụng vào bài toán chiếc thang.
minutes: 25
---

:::goals
- Giải $\sqrt{f(x)}=\sqrt{g(x)}$ bằng cách bình phương rồi thử lại.
- Giải $\sqrt{f(x)}=g(x)$ và giải thích vì sao cần $g(x)\ge 0$.
- Nhận ra và loại bỏ nghiệm ngoại lai.
- Lập và giải bài toán thực tế dẫn đến phương trình chứa căn.
:::

Một chiếc thang dài $10$ m dựa vào tường. Gọi $d$ là khoảng cách từ chân thang đến tường. Theo định lí Pythagore, đầu thang ở độ cao $\sqrt{100-d^2}$ mét. Người thợ muốn đầu thang cao hơn $d$ đúng $2$ m. Chân thang phải đặt cách tường bao xa?

Ta cần giải $\sqrt{100-d^2}=d+2$, một phương trình có ẩn nằm dưới dấu căn. Cách tự nhiên là **bình phương** hai vế để bỏ căn, rồi giải phương trình bậc hai nhận được.

## Vì sao bình phương cần thử lại

### Khám phá: bình phương thêm nghiệm

Xét phương trình $\sqrt{x+6}=x$. Bình phương hai vế:

$$x+6=x^2\iff x^2-x-6=0\iff x=3\ \text{ hoặc }\ x=-2.$$

Thay lại vào phương trình ban đầu:

| $x$ | vế trái $\sqrt{x+6}$ | vế phải $x$ | kết quả |
|---|---|---|---|
| $3$ | $\sqrt9=3$ | $3$ | đúng |
| $-2$ | $\sqrt4=2$ | $-2$ | sai |

Giá trị $x=-2$ thoả mãn phương trình sau khi bình phương, nhưng không thoả mãn phương trình ban đầu. Ta gọi nó là **nghiệm ngoại lai**.

### Nguyên nhân

Nếu $A=B$ thì $A^2=B^2$. Chiều ngược lại sai: $A^2=B^2$ chỉ cho biết $A=B$ **hoặc** $A=-B$. Với $x=-2$ ở trên, $A=2$ và $B=-2$: hai số đối nhau nhưng có cùng bình phương $4$.

Nếu biết thêm $A\ge 0$ và $B\ge 0$ thì trường hợp $A=-B$ chỉ xảy ra khi $A=B=0$. Khi đó bình phương là phép biến đổi tương đương. Từ đó có hai cách giải dưới đây.

:::theorem Cách giải hai dạng phương trình chứa căn
$$\sqrt{f(x)}=\sqrt{g(x)}\iff\begin{cases}f(x)\ge 0\\ f(x)=g(x)\end{cases}\qquad\qquad \sqrt{f(x)}=g(x)\iff\begin{cases}g(x)\ge 0\\ f(x)=[g(x)]^2\end{cases}$$
Trong thực hành, ta giải phương trình sau khi bình phương, rồi **thử lại** từng giá trị vào phương trình ban đầu (hoặc vào điều kiện).
:::

Ở dạng thứ nhất chỉ cần $f(x)\ge 0$, vì khi $f(x)=g(x)$ thì $g(x)\ge 0$ cũng đúng. Ở dạng thứ hai không cần viết $f(x)\ge 0$, vì $f(x)=[g(x)]^2$ đã không âm.

## Phương trình $\sqrt{f(x)}=\sqrt{g(x)}$

Ta bắt đầu với dạng đơn giản nhất: sau khi bình phương chỉ còn một phương trình bậc nhất.

:::example Hai biểu thức bậc nhất dưới dấu căn
Giải $\sqrt{2x-3}=\sqrt{x+1}$.

**Lời giải.** Hai vế là hai căn bậc hai, nên ta bình phương rồi thử lại điều kiện $x+1\ge 0$:

$$2x-3=x+1\iff x=4.$$

Với $x=4$: $x+1=5\ge 0$, và hai vế đều bằng $\sqrt5$.

Vậy phương trình có tập nghiệm $S=\{4\}$.
:::

Khi một vế có $x^2$, phương trình sau khi bình phương là bậc hai, nên có thể có hai giá trị cần thử.

:::example Thử lại cả hai giá trị
Giải $\sqrt{x^2-x-2}=\sqrt{x+1}$.

**Lời giải.** Bình phương hai vế, giải phương trình bậc hai, rồi kiểm tra điều kiện $x+1\ge 0$:

$$x^2-x-2=x+1\iff x^2-2x-3=0\iff x=3\ \text{ hoặc }\ x=-1.$$

Với $x=3$: $x+1=4\ge 0$. Với $x=-1$: $x+1=0\ge 0$, hai vế đều bằng $\sqrt0=0$. Cả hai giá trị đều nhận.

Vậy $S=\{-1; 3\}$.

**Kiểm tra.** Giá trị biên $x=-1$ làm biểu thức dưới căn bằng $0$. Điều kiện là "$\ge 0$" nên giá trị này vẫn được nhận.
:::

## Phương trình $\sqrt{f(x)}=g(x)$

Căn bậc hai không bao giờ âm, nên vế phải $g(x)$ phải không âm. Đây chính là điều kiện giúp loại nghiệm ngoại lai trong phần khám phá.

:::example Một nghiệm bị loại
Giải $\sqrt{2x+1}=x-1$.

**Lời giải.** Ta đặt điều kiện vế phải không âm, rồi bình phương. Chú ý $(x-1)^2=x^2-2x+1$:

$$\begin{aligned} \sqrt{2x+1}=x-1 &\iff \begin{cases}x-1\ge 0\\ 2x+1=x^2-2x+1\end{cases}\\ &\iff \begin{cases}x\ge 1\\ x^2-4x=0\end{cases}\\ &\iff \begin{cases}x\ge 1\\ x=0\ \text{hoặc}\ x=4.\end{cases} \end{aligned}$$

Chỉ $x=4$ thoả mãn $x\ge 1$. Thử lại: $\sqrt9=3=4-1$.

Vậy $S=\{4\}$.
:::

Có khi phương trình sau khi bình phương không có nghiệm nào. Khi đó phương trình ban đầu cũng vô nghiệm.

:::example Phương trình vô nghiệm
Giải $\sqrt{x-1}=x+1$.

**Lời giải.** Với điều kiện $x+1\ge 0$, ta bình phương hai vế:

$$x-1=x^2+2x+1\iff x^2+x+2=0.$$

Phương trình bậc hai này có $\Delta=1^2-4\cdot1\cdot2=-7<0$ nên vô nghiệm.

Vậy phương trình đã cho vô nghiệm, $S=\varnothing$.
:::

## Bài toán chiếc thang

Bây giờ ta trả lời câu hỏi ở đầu bài.

:::diagram Chiếc thang
alt: Tam giác vuông với bức tường là cạnh đứng, mặt đất là cạnh ngang và chiếc thang dài 10 mét là cạnh huyền
point O 0,0 below-left "O"
point F 6,0 below "chân thang"
point T 0,8 left "đỉnh thang"
polygon O F T
right F O T
label 3.4,4.6 "10 m"
label 3,-0.8 "d"
label -0.6,4 "h"
:::

:::example Chiếc thang
Một chiếc thang dài $10$ m dựa vào tường. Đầu thang cao hơn khoảng cách $d$ từ chân thang đến tường là $2$ m. Tìm $d$ và độ cao $h$ của đầu thang.

**Lời giải.** Theo định lí Pythagore $h=\sqrt{100-d^2}$, và đề cho $h=d+2$. Ta giải phương trình chứa căn với điều kiện $d+2\ge 0$:

$$\begin{aligned} \sqrt{100-d^2}=d+2 &\Rightarrow 100-d^2=d^2+4d+4\\ &\iff 2d^2+4d-96=0\\ &\iff d^2+2d-48=0\\ &\iff d=6\ \text{ hoặc }\ d=-8. \end{aligned}$$

Khoảng cách phải dương nên loại $d=-8$, còn $d=6$.

Vậy chân thang cách tường $6$ m và đầu thang ở độ cao $h=8$ m.

**Kiểm tra.** $6^2+8^2=36+64=100=10^2$, đúng với chiếc thang dài $10$ m.
:::

:::warning Những sai lầm thường gặp
- **Không thử lại.** Sai: "$\sqrt{x+6}=x\Rightarrow x^2-x-6=0$, nên $S=\{-2; 3\}$". Lí do sai: bình phương có thể thêm nghiệm; $x=-2$ cho $\sqrt4=2\neq-2$. Đúng: $S=\{3\}$.
- **Bình phương sai một nhị thức.** Sai: $(x-1)^2=x^2-1$. Lí do sai: thiếu số hạng $-2x$. Đúng: $(x-1)^2=x^2-2x+1$.
- **Quên điều kiện vế phải.** Sai: chỉ kiểm tra biểu thức dưới căn $2x+1\ge 0$ rồi nhận cả $x=0$ cho $\sqrt{2x+1}=x-1$. Lí do sai: vế trái không âm nên vế phải cũng phải không âm, mà $0-1<0$. Đúng: cần $x-1\ge 0$, chỉ nhận $x=4$.
:::

## Thuật ngữ

:::terms
- căn bậc hai | square root
- phương trình chứa căn | equation involving square roots
- bình phương hai vế | squaring both sides
- nghiệm ngoại lai | extraneous solution
- điều kiện | condition
- thử lại | check
- định lí Pythagore | Pythagoras' theorem
- cái thang | ladder
:::

## Tóm tắt

- Bình phương hai vế có thể thêm **nghiệm ngoại lai**, vì $A^2=B^2$ chỉ cho $A=\pm B$.
- $\sqrt{f}=\sqrt{g}$: giải $f=g$, giữ nghiệm có $f\ge 0$ (hoặc $g\ge 0$).
- $\sqrt{f}=g$: cần $g\ge 0$, giải $f=g^2$.
- Luôn thử lại mọi giá trị tìm được vào phương trình ban đầu.
- Bài toán thực tế: lập phương trình, giải, rồi chỉ giữ đáp số có ý nghĩa (độ dài dương).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải $\sqrt{x+5}=\sqrt{3x-1}$.

::hint
**Kiến thức:** $\sqrt{f(x)}=\sqrt{g(x)}\iff f(x)=g(x)$ và $f(x)\ge 0$.

**Gợi ý các bước:**
1. Bình phương hai vế, giải phương trình bậc nhất.
2. Thử lại điều kiện dưới dấu căn.

::solution
Bình phương: $x+5=3x-1\iff x=3$. Với $x=3$: $x+5=8\ge 0$, hai vế đều bằng $\sqrt8$.

**Đáp số.** $S=\{3\}$.
:::

:::exercise
Giải $\sqrt{x^2-4}=\sqrt{3x}$.

::hint
**Kiến thức:** sau khi bình phương phải thử lại điều kiện $3x\ge 0$.

**Gợi ý các bước:**
1. Bình phương, đưa về phương trình bậc hai và giải.
2. Loại giá trị làm $3x<0$.

::solution
Bình phương: $x^2-4=3x\iff x^2-3x-4=0\iff x=4$ hoặc $x=-1$. Với $x=-1$ thì $3x=-3<0$, loại. Với $x=4$ hai vế đều bằng $\sqrt{12}$.

**Đáp số.** $S=\{4\}$.
:::

:::exercise
Giải $\sqrt{x+2}=x$.

::hint
**Kiến thức:** $\sqrt{f(x)}=g(x)$ cần $g(x)\ge 0$ và $f(x)=[g(x)]^2$.

**Gợi ý các bước:**
1. Đặt điều kiện $x\ge 0$.
2. Bình phương, giải phương trình bậc hai, chọn nghiệm thoả điều kiện.

::solution
Cần $x\ge 0$. Bình phương: $x+2=x^2\iff x^2-x-2=0\iff x=2$ hoặc $x=-1$. Chỉ $x=2$ thoả mãn. Thử lại: $\sqrt4=2$.

**Đáp số.** $S=\{2\}$.
:::

:::exercise
Giải $\sqrt{x+3}=x-3$.

::hint
**Kiến thức:** $(x-3)^2=x^2-6x+9$; vế phải phải không âm.

**Gợi ý các bước:**
1. Đặt điều kiện $x\ge 3$.
2. Bình phương, giải, chọn nghiệm.

::solution
Cần $x\ge 3$. Bình phương: $x+3=x^2-6x+9\iff x^2-7x+6=0\iff x=1$ hoặc $x=6$. Chỉ $x=6$ thoả mãn. Thử lại: $\sqrt9=3=6-3$.

**Đáp số.** $S=\{6\}$.
:::

:::exercise
Giải $\sqrt{x^2-2x}=\sqrt{x+4}$.

::hint
**Kiến thức:** dạng $\sqrt{f}=\sqrt{g}$: giải $f=g$ rồi kiểm tra $g\ge 0$.

**Gợi ý các bước:**
1. Bình phương, giải phương trình bậc hai.
2. Kiểm tra từng giá trị.

::solution
Bình phương: $x^2-2x=x+4\iff x^2-3x-4=0\iff x=4$ hoặc $x=-1$. Với $x=4$: $x+4=8\ge 0$. Với $x=-1$: $x+4=3\ge 0$. Cả hai đều nhận.

**Đáp số.** $S=\{-1; 4\}$.
:::

:::exercise
Cho phương trình $\sqrt{x+7}=x+1$. Mỗi khẳng định sau đúng hay sai?

a) Điều kiện để vế phải không âm là $x\ge -1$.

b) Bình phương hai vế ta được $x^2+x-6=0$.

c) Phương trình đã cho có hai nghiệm $x=2$ và $x=-3$.

d) Tổng các nghiệm của phương trình đã cho bằng $2$.

::hint
**Kiến thức:** $\sqrt{f(x)}=g(x)\iff g(x)\ge 0$ và $f(x)=[g(x)]^2$.

**Gợi ý các bước:**
1. Viết điều kiện, bình phương và giải phương trình bậc hai.
2. Thử lại từng nghiệm rồi xét từng khẳng định.

::solution
Bình phương: $x+7=x^2+2x+1\iff x^2+x-6=0\iff x=2$ hoặc $x=-3$. Điều kiện $x+1\ge 0\iff x\ge -1$, nên loại $x=-3$.

a) **Đúng**: $x+1\ge 0\iff x\ge -1$.

b) **Đúng**: $x+7=x^2+2x+1\iff x^2+x-6=0$.

c) **Sai**: với $x=-3$, vế trái $\sqrt4=2$, vế phải $-2$.

d) **Đúng**: phương trình chỉ có một nghiệm $x=2$, nên tổng các nghiệm là $2$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Một chiếc thang dài $13$ m dựa vào tường. Đầu thang cao hơn khoảng cách $d$ từ chân thang đến tường là $7$ m. Đầu thang ở độ cao bao nhiêu mét?

::hint
**Kiến thức:** định lí Pythagore: độ cao $h=\sqrt{13^2-d^2}$.

**Gợi ý các bước:**
1. Lập phương trình $\sqrt{169-d^2}=d+7$.
2. Bình phương, giải, giữ nghiệm dương.
3. Tính $h=d+7$.

::solution
Bình phương: $169-d^2=d^2+14d+49\iff d^2+7d-60=0\iff d=5$ hoặc $d=-12$. Khoảng cách dương nên $d=5$, và $h=5+7=12$. Thử lại: $\sqrt{169-25}=\sqrt{144}=12$.

**Đáp số.** $12$.
:::

:::exercise
Một cột ăng-ten cao $12$ m dựng thẳng đứng. Một sợi dây néo nối đỉnh cột với một điểm trên mặt đất cách chân cột $x$ m, và dây dài hơn $x$ đúng $8$ m. Tìm $x$ và chiều dài sợi dây.

::hint
**Kiến thức:** dây néo là cạnh huyền của tam giác vuông có hai cạnh góc vuông $12$ và $x$.

**Gợi ý các bước:**
1. Viết chiều dài dây theo hai cách: $\sqrt{x^2+144}$ và $x+8$.
2. Bình phương; số hạng $x^2$ triệt tiêu.

::solution
Ta có $\sqrt{x^2+144}=x+8$ với $x>0$. Bình phương: $x^2+144=x^2+16x+64\iff 16x=80\iff x=5$. Dây dài $5+8=13$ m. Thử lại: $\sqrt{25+144}=\sqrt{169}=13$.

**Đáp số.** $x=5$ m, dây dài $13$ m.
:::

:::exercise Thử thách
Giải $\sqrt{2x^2-3x-5}=x-1$.

::hint
**Kiến thức:** dạng $\sqrt{f}=g$: cần $g\ge 0$, rồi $f=g^2$.

**Gợi ý các bước:**
1. Đặt điều kiện $x\ge 1$.
2. Bình phương, chuyển vế, giải phương trình bậc hai.
3. Chọn nghiệm và thử lại.

::solution
Cần $x\ge 1$. Bình phương: $2x^2-3x-5=x^2-2x+1\iff x^2-x-6=0\iff x=3$ hoặc $x=-2$. Chỉ $x=3$ thoả mãn. Thử lại: $\sqrt{18-9-5}=\sqrt4=2=3-1$.

**Đáp số.** $S=\{3\}$.
:::

:::exercise Ôn tập
Xét phương trình $\sqrt{x^2-3x}=\sqrt{2x-4}$.

a) Dùng [dấu của tam thức bậc hai](lesson:sign-of-quadratic), tìm tập các giá trị của $x$ làm cả hai căn xác định.

b) Giải phương trình.

::hint
**Kiến thức:** $\sqrt{A}$ xác định khi $A\ge 0$; tam thức $x^2-3x$ có hai nghiệm $0$ và $3$, $a>0$.

**Gợi ý các bước:**
1. Giải $x^2-3x\ge 0$ và $2x-4\ge 0$, lấy phần chung.
2. Bình phương, giải, chọn nghiệm nằm trong tập vừa tìm.

::solution
a) $x^2-3x\ge 0\iff x\le 0$ hoặc $x\ge 3$ (ngoài hai nghiệm, vì $a=1>0$). $2x-4\ge 0\iff x\ge 2$. Phần chung là $x\ge 3$.

b) Bình phương: $x^2-3x=2x-4\iff x^2-5x+4=0\iff x=1$ hoặc $x=4$. Chỉ $x=4$ thoả mãn $x\ge 3$; khi đó hai vế đều bằng $\sqrt4=2$.

**Đáp số.** a) $[3; +\infty)$; b) $S=\{4\}$.
:::

## Kiểm tra mini

:::quiz
::mc
Tập nghiệm của phương trình $\sqrt{3x-2}=\sqrt{x+4}$ là
A. $S=\{3\}$.
B. $S=\{-3\}$.
C. $S=\{1\}$.
D. $S=\varnothing$.
::key A
Bình phương: $3x-2=x+4\iff 2x=6\iff x=3$. Thử lại: $x+4=7\ge0$ và hai vế cùng bằng $\sqrt7$. Phương án B là lỗi chuyển vế sai dấu.

::mc
Tập nghiệm của phương trình $\sqrt{x+1}=x-1$ là
A. $S=\{0; 3\}$.
B. $S=\{3\}$.
C. $S=\{0\}$.
D. $S=\{2\}$.
::key B
Cần $x\ge1$. Bình phương: $x+1=x^2-2x+1\iff x^2-3x=0\iff x=0$ hoặc $x=3$; chỉ $x=3$ thoả mãn. Phương án A quên thử lại; D là lỗi viết $(x-1)^2=x^2-1$.

::mc
Khi giải phương trình $\sqrt{2x+3}=x$ bằng cách bình phương hai vế, giá trị nào là nghiệm ngoại lai?
A. $x=3$.
B. $x=-1$.
C. $x=-3$.
D. $x=1$.
::key B
Bình phương: $x^2-2x-3=0\iff x=3$ hoặc $x=-1$. Với $x=-1$: vế trái $\sqrt1=1$, vế phải $-1$, nên $x=-1$ là nghiệm ngoại lai.

::mc
Tổng các nghiệm của phương trình $\sqrt{x^2+2x+4}=\sqrt{2x+13}$ là
A. $0$.
B. $3$.
C. $-3$.
D. $6$.
::key A
Bình phương: $x^2+2x+4=2x+13\iff x^2=9\iff x=\pm3$. Cả hai đều thoả mãn $2x+13\ge0$ ($19$ và $7$), nên tổng là $0$. Phương án B loại nhầm $x=-3$ chỉ vì nó âm.

::tf
Cho phương trình $\sqrt{x+10}=x-2$.
a) Điều kiện để vế phải không âm là $x\ge2$.
b) Bình phương hai vế ta được $x^2-3x-6=0$.
c) $x=-1$ là một nghiệm của phương trình.
d) Phương trình có đúng một nghiệm và nghiệm đó lớn hơn $5$.
::key Đ S S Đ
a) Đúng. b) Sai: $x+10=x^2-4x+4\iff x^2-5x-6=0$. c) Sai: với $x=-1$, vế trái là $3$, vế phải là $-3$. d) Đúng: $x^2-5x-6=0$ cho $x=6$ hoặc $x=-1$, chỉ giữ $x=6$.

::sa
Giải phương trình $\sqrt{2x+7}=x+2$.
::key 1
Cần $x\ge-2$. Bình phương: $2x+7=x^2+4x+4\iff x^2+2x-3=0\iff x=1$ hoặc $x=-3$. Chỉ $x=1$ thoả mãn; thử lại $\sqrt9=3=1+2$.

::sa
Một con thuyền được kéo vào bờ bằng một sợi dây buộc vào một điểm cao $5$ m so với mặt nước. Khi thuyền cách chân bờ $x$ m thì đoạn dây từ thuyền đến điểm buộc dài hơn $x$ đúng $1$ m. Tìm $x$.
::key 12
Đoạn dây là cạnh huyền: $\sqrt{x^2+25}=x+1$ với $x>0$. Bình phương: $x^2+25=x^2+2x+1\iff 2x=24\iff x=12$. Thử lại: $\sqrt{169}=13=12+1$.
:::
