---
title: Dấu của tam thức bậc hai
description: Dùng biệt thức và nghiệm để xét dấu của ax²+bx+c, giải bất phương trình bậc hai, kể cả bất phương trình có tham số.
minutes: 20
---

:::goals
- Xác định dấu của $f(x)=ax^2+bx+c$ dựa vào $a$ và $\Delta$.
- Giải bất phương trình bậc hai bằng bảng xét dấu hoặc parabol.
- Giải bất phương trình dạng thương đơn giản và bài toán thực tế.
- Tìm các giá trị của tham số để một tam thức bậc hai giữ nguyên dấu với mọi $x$.
:::

Một quả bóng được ném lên cao. Trong những giây nào bóng cao hơn $15$ m so với mặt đất? "Cao hơn" là một bất phương trình, còn độ cao là một hàm bậc hai theo thời gian. Để trả lời, ta cần biết khi nào tam thức bậc hai **dương** và khi nào **âm**. Parabol kể cho ta toàn bộ câu chuyện.

## Định lí về dấu

:::definition Tam thức bậc hai
**Tam thức bậc hai** là $f(x)=ax^2+bx+c$ với $a\neq 0$. Biệt thức của nó là $\Delta=b^2-4ac$.
:::

:::theorem Dấu của $f(x)=ax^2+bx+c$
- Nếu $\Delta<0$: $f(x)$ **cùng dấu với $a$** với mọi $x$.
- Nếu $\Delta=0$: $f(x)$ cùng dấu với $a$ với mọi $x\neq-\frac{b}{2a}$, và $f\left(-\frac{b}{2a}\right)=0$.
- Nếu $\Delta>0$ với hai nghiệm $x_1<x_2$: $f(x)$ cùng dấu với $a$ khi $x$ **nằm ngoài** $[x_1; x_2]$ và trái dấu với $a$ khi $x$ **nằm giữa** hai nghiệm.
:::

Hãy hình dung: với $a>0$ parabol quay bề lõm lên trên, nên nó nằm phía trên trục hoành ở nơi nó không chui xuống dưới. Dấu chỉ đổi tại các nghiệm.

:::graph Parabol $y=x^2-5x+6$
alt: Parabol quay lên cắt trục hoành tại x bằng 2 và x bằng 3, nằm dưới trục hoành giữa hai nghiệm
x: -1..6
y: -2..8
plot: x^2 - 5x + 6
point: (2, 0) "2" below
point: (3, 0) "3" below
:::

## Giải bất phương trình bậc hai

Phương pháp: (1) chuyển tất cả về một vế; (2) tìm $\Delta$ và các nghiệm; (3) dùng định lí; (4) đọc đáp số.

:::example Hai nghiệm, $a>0$
Giải $x^2-5x+6<0$.

**Lời giải.** $\Delta=25-24=1>0$, các nghiệm $x_1=2$ và $x_2=3$. Vì $a=1>0$ nên $f<0$ khi $x$ nằm giữa hai nghiệm. Tập nghiệm là $S=(2; 3)$.
:::

:::example Hai nghiệm, $a<0$
Giải $-x^2+4x-3\ge 0$.

**Lời giải.** Nghiệm của $-x^2+4x-3=0$ là $x=1$ và $x=3$. Vì $a=-1<0$ nên $f$ cùng dấu với $a$ (âm) khi $x$ nằm ngoài hai nghiệm và **dương khi nằm giữa**. Vậy $f\ge 0$ trên $[1; 3]$, và $S=[1; 3]$.
:::

:::example Vô nghiệm
Giải $x^2+x+1>0$ và $2x^2-3x+5<0$.

**Lời giải.**
- $x^2+x+1$: $\Delta=1-4=-3<0$ và $a=1>0$ nên luôn dương. $S=\mathbb{R}$.
- $2x^2-3x+5$: $\Delta=9-40=-31<0$ và $a=2>0$ nên luôn dương, không bao giờ $<0$. $S=\varnothing$.
:::

:::example Nghiệm kép
Giải $x^2-6x+9\le 0$ và $x^2-6x+9>0$.

**Lời giải.** $x^2-6x+9=(x-3)^2$, $\Delta=0$. Nó luôn $\ge 0$ và chỉ bằng $0$ tại $x=3$.
- $(x-3)^2\le 0$ chỉ đúng khi $x=3$: $S=\{3\}$.
- $(x-3)^2>0$ đúng với mọi $x\neq 3$: $S=\mathbb{R}\setminus\{3\}$.
:::

## Bất phương trình dạng thương

:::example Bảng xét dấu của một phân thức
Giải $\dfrac{x-1}{x+2}\le 0$.

**Lời giải.** Tử bằng $0$ tại $x=1$ và mẫu bằng $0$ tại $x=-2$ (bị loại). Xét dấu trên ba khoảng:
- $x<-2$: tử $<0$, mẫu $<0$, thương $>0$.
- $-2<x<1$: tử $<0$, mẫu $>0$, thương $<0$. ✓
- $x>1$: cả hai dương, thương $>0$.

Tại $x=1$ thương bằng $0$, thoả mãn dấu "$\le$". Vậy $S=(-2; 1]$.
:::

## Bất phương trình có tham số

:::example Tam thức không bao giờ âm
Với giá trị nào của $m$ thì $x^2-2mx+m+2\ge 0$ với mọi số thực $x$?

**Lời giải.** Vì $a=1>0$ nên cần $\Delta'\le 0$ với $\Delta'=m^2-(m+2)=m^2-m-2$ (dùng hệ số $b'$ rút gọn). $m^2-m-2=(m-2)(m+1)\le 0$ cho $-1\le m\le 2$. Vậy $m\in[-1; 2]$.
:::

## Bài toán thực tế

:::example Khi nào bóng đủ cao?
Độ cao của một quả bóng (tính bằng mét) sau $t$ giây là $h=-5t^2+20t$. Khi nào $h>15$?

**Lời giải.** $-5t^2+20t>15$ trở thành $-5t^2+20t-15>0$, tức là $t^2-4t+3<0$. Các nghiệm là $t=1$ và $t=3$, và parabol âm khi nằm giữa chúng. Vậy bóng cao hơn $15$ m khi $1<t<3$: kéo dài hai giây.
:::

:::graph Độ cao của quả bóng
alt: Parabol quay xuống biểu diễn độ cao của quả bóng, có đường ngang nét đứt ở độ cao 15 và các điểm tại t bằng 1 và t bằng 3
x: 0..4
y: -2..22
plot: -5x^2 + 20x
hline: 15 ; dashed
point: (1, 15) "1" below-right
point: (3, 15) "3" below-left
:::

:::warning Những sai lầm thường gặp
- Không chuyển tất cả về một vế trước khi dùng định lí.
- Quên rằng với $a<0$ hình bị lật: dương khi $x$ nằm **giữa** hai nghiệm.
- Viết $S=\varnothing$ hay $S=\mathbb{R}$ mà không kiểm tra $\Delta$ và dấu của $a$.
- Dùng ngoặc đóng tại nghiệm cho bất phương trình chặt (hay ngoặc mở cho $\le$, $\ge$), và lấy cả giá trị làm mẫu bằng $0$.
:::

## Thuật ngữ

:::terms
- tam thức bậc hai | quadratic trinomial
- biệt thức | discriminant
- nghiệm | root
- bảng xét dấu | sign table
- bất phương trình bậc hai | quadratic inequality
- tập nghiệm | solution set
- tham số | parameter
- nghiệm kép | double root
:::

## Tóm tắt

- Dấu của $f(x)=ax^2+bx+c$: $\Delta<0$ thì cùng dấu $a$ với mọi $x$; $\Delta=0$ thì cùng dấu $a$ trừ tại nghiệm; $\Delta>0$ thì cùng dấu $a$ ngoài hai nghiệm và trái dấu $a$ giữa hai nghiệm.
- Giải bất phương trình: một vế bằng $0$, tìm $\Delta$ và nghiệm, rồi áp dụng định lí.
- Với $a>0$: $f\ge 0$ với mọi $x$ $\iff\Delta\le 0$. Với $a<0$: $f\le 0$ với mọi $x$ $\iff\Delta\le 0$.

## Luyện tập

:::practice
1. Giải $x^2-4x+3>0$.
2. Giải $x^2-9\le 0$.
3. Giải $-x^2+2x+8>0$.
4. Giải $2x^2-x-3\ge 0$.
5. Giải $x^2+4x+5>0$.
6. Giải $x^2-4x+4\le 0$.
7. Với giá trị nào của $m$ thì $x^2+mx+4>0$ với mọi số thực $x$?
8. Giải $\dfrac{x+1}{x-3}<0$.
9. Thử thách. Với giá trị nào của $m$ thì $mx^2-4x+m-3<0$ với mọi số thực $x$?
10. Thử thách. Tìm tập xác định của $\sqrt{x^2-3x-4}$.
:::

:::solution Xem lời giải
1. Các nghiệm $1$ và $3$, $a>0$: dương khi nằm ngoài. $S=(-\infty; 1)\cup(3; +\infty)$.
2. $x^2-9=(x-3)(x+3)$, các nghiệm $\pm3$, $a>0$: $\le 0$ khi nằm giữa (kể cả hai nghiệm). $S=[-3; 3]$.
3. $-x^2+2x+8=-(x-4)(x+2)$, các nghiệm $-2$ và $4$, $a<0$: dương khi nằm giữa. $S=(-2; 4)$.
4. $2x^2-x-3=(2x-3)(x+1)$, các nghiệm $-1$ và $\frac32$, $a>0$: $\ge 0$ khi nằm ngoài, kể cả nghiệm. $S=(-\infty; -1]\cup\left[\frac32; +\infty\right)$.
5. $\Delta=16-20=-4<0$, $a>0$: luôn dương. $S=\mathbb{R}$.
6. $(x-2)^2\le 0$ chỉ tại $x=2$. $S=\{2\}$.
7. $a=1>0$, cần $\Delta=m^2-16<0$, suy ra $-4<m<4$.
8. Các giá trị tới hạn $-1$ (tử) và $3$ (bị loại). Xét dấu: $x<-1$: $(-)/(-)>0$; $-1<x<3$: $(+)/(-)<0$ ✓; $x>3$: $(+)/(+)>0$. $S=(-1; 3)$.
9. Cần $a=m<0$ và $\Delta'=4-m(m-3)<0$, tức $m^2-3m-4>0$, tức $(m-4)(m+1)>0$, suy ra $m<-1$ hoặc $m>4$. Kết hợp với $m<0$: $m<-1$. $m\in(-\infty; -1)$.
10. Cần $x^2-3x-4\ge 0$: $(x-4)(x+1)\ge 0$, suy ra $x\le -1$ hoặc $x\ge 4$. Tập xác định $(-\infty; -1]\cup[4; +\infty)$.
:::
