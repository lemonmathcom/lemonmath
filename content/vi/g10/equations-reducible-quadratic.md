---
title: Phương trình quy về phương trình bậc hai
description: Giải phương trình chứa căn bằng cách bình phương hai vế rồi thử lại để loại nghiệm ngoại lai, và áp dụng vào bài toán chiếc thang.
minutes: 16
---

:::goals
- Giải $\sqrt{f(x)}=\sqrt{g(x)}$ bằng cách bình phương rồi thử lại.
- Giải $\sqrt{f(x)}=g(x)$ và giải thích vì sao cần $g(x)\ge 0$.
- Nhận ra và loại bỏ nghiệm ngoại lai.
- Lập và giải bài toán thực tế dẫn đến phương trình chứa căn.
:::

Một chiếc thang dựa vào tường. Chân thang phải cách tường bao xa để đầu thang chạm tới một độ cao cho trước? Định lí Pythagore đưa một căn bậc hai vào phương trình. Để bỏ căn ta **bình phương** hai vế, nhưng bình phương có thể tạo ra nghiệm giả. Bài này chỉ cách bình phương một cách an toàn.

## Vì sao bình phương cần thử lại

Nếu $A=B$ thì $A^2=B^2$. Chiều ngược lại sai: $A^2=B^2$ chỉ cho biết $A=B$ hoặc $A=-B$. Chẳng hạn $x=-3$ không là nghiệm của $x=3$, nhưng bình phương cho $x^2=9$ lại nhận nó. Vì vậy sau khi bình phương ta phải giữ đúng điều kiện hoặc **thử lại mọi giá trị tìm được** vào phương trình ban đầu.

## Phương trình $\sqrt{f(x)}=\sqrt{g(x)}$

Bình phương hai vế được $f(x)=g(x)$. Sau đó chỉ giữ các nghiệm thoả mãn $f(x)\ge 0$ (khi đó $g(x)=f(x)\ge 0$ cũng đúng).

:::example Hai biểu thức dưới dấu căn
Giải $\sqrt{2x-3}=\sqrt{x+1}$.

**Lời giải.** Bình phương: $2x-3=x+1$, suy ra $x=4$. Thử lại: $2\cdot 4-3=5\ge 0$ và $4+1=5$. ✓ $S=\{4\}$.
:::

:::example Hai nghiệm
Giải $\sqrt{x^2-x-2}=\sqrt{x+1}$.

**Lời giải.** Bình phương: $x^2-x-2=x+1$, suy ra $x^2-2x-3=0$, cho $x=3$ hoặc $x=-1$. Kiểm tra điều kiện $x+1\ge 0$:
- $x=3$: $x+1=4\ge 0$ ✓.
- $x=-1$: $x+1=0\ge 0$ ✓ (hai vế đều bằng $\sqrt0=0$).

$S=\{-1; 3\}$.
:::

## Phương trình $\sqrt{f(x)}=g(x)$

Căn bậc hai không bao giờ âm, nên nghiệm cần có $g(x)\ge 0$. Khi đó bình phương là an toàn:
$$\sqrt{f(x)}=g(x)\iff\begin{cases}g(x)\ge 0\\ f(x)=g(x)^2.\end{cases}$$

:::example Một nghiệm bị loại
Giải $\sqrt{x+6}=x$.

**Lời giải.** Cần $x\ge 0$. Bình phương: $x+6=x^2$, suy ra $x^2-x-6=0$ và $x=3$ hoặc $x=-2$. Chỉ $x=3$ thoả mãn $x\ge 0$. Thử lại: $\sqrt9=3$ ✓. $S=\{3\}$.
:::

:::example Điều kiện giữ lại nghiệm đúng
Giải $\sqrt{2x+1}=x-1$.

**Lời giải.** Cần $x-1\ge 0$. Bình phương: $2x+1=x^2-2x+1$, suy ra $x^2-4x=0$ và $x=0$ hoặc $x=4$. Chỉ $x=4$ thoả mãn $x\ge 1$. Thử lại: $\sqrt9=3=4-1$ ✓. $S=\{4\}$.
:::

:::example Vô nghiệm
Giải $\sqrt{x-1}=x+1$.

**Lời giải.** Cần $x+1\ge 0$. Bình phương: $x-1=x^2+2x+1$, suy ra $x^2+x+2=0$. Ở đây $\Delta=1-8<0$: không có nghiệm thực. $S=\varnothing$.
:::

## Bài toán chiếc thang

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
Một chiếc thang dài $10$ m dựa vào tường. Đầu thang cao hơn khoảng cách $d$ từ chân thang đến tường là $2$ m. Tìm $d$.

**Lời giải.** Độ cao là $h=d+2$ và theo Pythagore $h=\sqrt{100-d^2}$. Vậy $\sqrt{100-d^2}=d+2$ với $d+2\ge 0$. Bình phương: $100-d^2=d^2+4d+4$, suy ra $2d^2+4d-96=0$, tức $d^2+2d-48=0$, và $d=6$ hoặc $d=-8$. Khoảng cách là số dương nên $d=6$ m và $h=8$ m. Thử lại: $\sqrt{100-36}=8=6+2$ ✓.
:::

:::warning Những sai lầm thường gặp
- Bình phương mà không thử lại nên giữ nghiệm ngoại lai.
- Bình phương $(x-1)$ sai: $(x-1)^2=x^2-2x+1$ chứ không phải $x^2-1$.
- Quên rằng vế trái $\sqrt{\ }$ là $\ge 0$ nên vế phải cũng phải $\ge 0$.
- Bình phương khi có tổng hai căn; trường hợp đó cần cẩn thận hơn và không nằm trong bài này.
:::

## Thuật ngữ

:::terms
- căn bậc hai | square root
- phương trình chứa căn | equation containing roots
- bình phương hai vế | squaring both sides
- nghiệm ngoại lai | extraneous solution
- điều kiện | condition
- thử lại | check
- định lí Pythagore | Pythagorean theorem
- cái thang | ladder
:::

## Tóm tắt

- $\sqrt{f}=\sqrt{g}\iff f=g$ và $f\ge 0$.
- $\sqrt{f}=g\iff g\ge 0$ và $f=g^2$.
- Luôn thử lại các giá trị tìm được; bình phương có thể thêm nghiệm giả.
- Bài toán thực tế: lập phương trình, giải, rồi chỉ giữ đáp số có ý nghĩa.

## Luyện tập

:::practice
1. Giải $\sqrt{x+5}=\sqrt{3x-1}$.
2. Giải $\sqrt{x^2-4}=\sqrt{3x}$.
3. Giải $\sqrt{x-2}=3$.
4. Giải $\sqrt{x+2}=x$.
5. Giải $\sqrt{2x+3}=x$.
6. Giải $\sqrt{x+3}=x-3$.
7. Giải $\sqrt{2-x}=x+4$.
8. Giải $\sqrt{x^2-2x}=\sqrt{x+4}$.
9. Thử thách. Giải $\sqrt{2x^2-3x-5}=x-1$.
10. Thử thách. Một chiếc thang dài $13$ m dựa vào tường. Đầu thang cao hơn khoảng cách $d$ từ chân thang đến tường là $7$ m. Tìm $d$ và độ cao đầu thang.
:::

:::solution Xem lời giải
1. $x+5=3x-1$ cho $x=3$. Thử lại: $\sqrt8=\sqrt8$ ✓. $S=\{3\}$.
2. $x^2-4=3x$, suy ra $x^2-3x-4=0$ và $x=4$ hoặc $x=-1$. Cần $3x\ge 0$: chỉ $x=4$. Thử lại: $\sqrt{12}=\sqrt{12}$ ✓. $S=\{4\}$.
3. $x-2=9$, suy ra $x=11$. Thử lại: $\sqrt9=3$ ✓.
4. Cần $x\ge 0$. $x+2=x^2$, suy ra $x^2-x-2=0$, $x=2$ hoặc $x=-1$. Chỉ $x=2$. Thử lại: $\sqrt4=2$ ✓.
5. Cần $x\ge 0$. $2x+3=x^2$, suy ra $x^2-2x-3=0$, $x=3$ hoặc $x=-1$. Chỉ $x=3$. Thử lại: $\sqrt9=3$ ✓.
6. Cần $x\ge 3$. $x+3=x^2-6x+9$, suy ra $x^2-7x+6=0$, $x=1$ hoặc $x=6$. Chỉ $x=6$. Thử lại: $\sqrt9=3=6-3$ ✓.
7. Cần $x\ge -4$. $2-x=x^2+8x+16$, suy ra $x^2+9x+14=0$, $x=-2$ hoặc $x=-7$. Chỉ $x=-2$. Thử lại: $\sqrt4=2=-2+4$ ✓.
8. $x^2-2x=x+4$, suy ra $x^2-3x-4=0$ và $x=4$ hoặc $x=-1$. Thử lại: với $x=4$ hai vế đều bằng $\sqrt8$ ✓; với $x=-1$ hai vế đều bằng $\sqrt3$ ✓. $S=\{-1; 4\}$.
9. Cần $x\ge 1$. $2x^2-3x-5=x^2-2x+1$, suy ra $x^2-x-6=0$, $x=3$ hoặc $x=-2$. Chỉ $x=3$. Thử lại: $\sqrt{18-9-5}=\sqrt4=2=3-1$ ✓.
10. $\sqrt{169-d^2}=d+7$. Bình phương: $169-d^2=d^2+14d+49$, suy ra $d^2+7d-60=0$ và $d=5$ hoặc $d=-12$. Vậy $d=5$ m và độ cao là $12$ m. Thử lại: $\sqrt{169-25}=12=5+7$ ✓.
:::
