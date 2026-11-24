---
title: Phương trình, bất phương trình mũ và lôgarit
description: Giải phương trình, bất phương trình mũ và lôgarit bằng cách đưa về cùng cơ số, lấy lôgarit, đặt ẩn phụ và kiểm tra điều kiện; vận dụng vào lãi kép.
minutes: 25
---

:::goals
- Giải được phương trình mũ và lôgarit cơ bản, và các dạng quy về chúng.
- Giải được bất phương trình mũ và lôgarit, chú ý chiều bất đẳng thức theo cơ số.
- Biết chọn phương pháp: đưa về cùng cơ số, lấy lôgarit hai vế, đặt ẩn phụ, và luôn kiểm tra điều kiện xác định.
- Vận dụng vào các bài toán thực tế về lãi kép, giảm giá trị và mức cường độ âm.
:::

Giả sử bác Lan gửi $200$ triệu đồng với lãi suất $7\%$ một năm, lãi kép (số liệu giả định). Sau $t$ năm số tiền là $200\cdot1{,}07^t$ triệu đồng. Bác muốn có ít nhất $300$ triệu đồng để mua một chiếc xe. Phải gửi tối thiểu bao nhiêu năm nguyên?

Đây là bài toán có ẩn ở số mũ. Với hiểu biết về hàm số mũ và lôgarit, ta giải được nó như một bất phương trình mũ. Bài này tổng hợp các phương pháp để giải những bài toán như vậy.

## Khám phá: từ $a^x=b$ đến $x=\log_ab$

Hãy giải ba phương trình sau:

| Phương trình | $2^x=8$ | $2^x=\dfrac14$ | $2^x=5$ |
|---|---|---|---|
| Nghiệm | $x=3$ | $x=-2$ | $x=\,?$ |

Hai phương trình đầu có nghiệm nguyên vì vế phải là luỹ thừa của $2$. Với $2^x=5$, ta không viết được $5$ dưới dạng $2^{\text{số đẹp}}$, nhưng theo định nghĩa lôgarit thì $x=\log_25\approx2{,}32$ là số mũ cần tìm. Đồ thị cho thấy điều đó: đường cong $y=2^x$ cắt đường thẳng $y=5$ tại đúng một điểm.

:::graph Nghiệm của $2^x=5$ là hoành độ giao điểm của $y=2^x$ và $y=5$
alt: Đường cong y bằng 2 mũ x cắt đường nằm ngang y bằng 5 tại đúng một điểm có hoành độ khoảng 2,32
x: -2..4
y: -1..9
plot: 2^x
plot: 5 ; dashed
point: (2.3219, 5) "x = log_2 5" below-right
label: (-1.8, 8) "y = 2^x"
:::

## Phương trình mũ và lôgarit cơ bản

:::theorem Phương trình cơ bản
Với $a>0$, $a\neq1$:
- **Phương trình mũ.** $a^x=b$: nếu $b>0$ thì có đúng một nghiệm $x=\log_ab$; nếu $b\le0$ thì vô nghiệm. Ngoài ra, $a^{f(x)}=a^{g(x)}\Leftrightarrow f(x)=g(x)$.
- **Phương trình lôgarit.** $\log_ax=b$ có đúng một nghiệm $x=a^b$ với mọi số thực $b$. Ngoài ra, $\log_af(x)=\log_ag(x)\Leftrightarrow f(x)=g(x)>0$.
:::

:::theorem Bất phương trình cơ bản
Với $a>0$, $a\neq1$ (ví dụ cho dấu $>$; các dấu khác làm tương tự):
- $a^{f(x)}>a^{g(x)}\Leftrightarrow f(x)>g(x)$ nếu $a>1$; $\Leftrightarrow f(x)<g(x)$ nếu $0<a<1$.
- $\log_af(x)>\log_ag(x)\Leftrightarrow f(x)>g(x)>0$ nếu $a>1$; $\Leftrightarrow0<f(x)<g(x)$ nếu $0<a<1$.
:::

**Vì sao?** Hàm số mũ và hàm số lôgarit đơn điệu, nên mỗi giá trị chỉ nhận một lần: nếu $a^m=a^n$ thì $m=n$, và nếu $\log_ap=\log_aq$ thì $p=q$. Khi $a>1$ hàm đồng biến, bất đẳng thức giữ nguyên chiều; khi $0<a<1$ hàm nghịch biến, bất đẳng thức đảo chiều. Với lôgarit, điều kiện đối số dương luôn phải kèm theo, nên $0<f(x)<g(x)$ (hay $f(x)>g(x)>0$) chứ không chỉ $f<g$.

Bốn phương pháp thường dùng:
- **Đưa về cùng cơ số:** viết hai vế dưới dạng $a^{\ldots}$ rồi bỏ cơ số.
- **Lấy lôgarit:** nếu không đưa được về cùng cơ số thì viết nghiệm bằng $\log$, rồi dùng máy tính để ra số.
- **Đặt ẩn phụ:** ví dụ $t=2^x$ ($t>0$) để chuyển về phương trình bậc hai.
- **Với lôgarit:** gộp các lôgarit thành một, rồi **kiểm tra điều kiện xác định** ở cuối.

## Ví dụ

Ta bắt đầu với cùng cơ số.

:::example Đưa về cùng cơ số
Giải các phương trình:

a) $2^{x^2-3x}=16$.

b) $\left(\dfrac13\right)^{2x-1}=9$.

**Lời giải.** a) Vì $16=2^4$ nên phương trình thành $2^{x^2-3x}=2^4$, suy ra $x^2-3x=4$, tức $x^2-3x-4=0$. Phương trình có hai nghiệm $x=-1$ và $x=4$.

b) Vì $9=\left(\dfrac13\right)^{-2}$ nên $2x-1=-2$, suy ra $x=-\dfrac12$.

**Kiểm tra.** Với $x=4$: $x^2-3x=16-12=4$ ✓. Với $x=-1$: $1+3=4$ ✓.

Vậy a) $x\in\{-1; 4\}$; b) $x=-\dfrac12$.
:::

Khi không đưa được về cùng cơ số, ta lấy lôgarit.

:::example Dùng lôgarit
Giải các phương trình (làm tròn đến hàng phần trăm):

a) $5^x=7$.

b) $3^{2x-1}=10$.

**Lời giải.** a) $x=\log_57=\dfrac{\ln7}{\ln5}\approx1{,}21$.

b) $2x-1=\log_310=\dfrac{\ln10}{\ln3}\approx2{,}096$, suy ra $x=\dfrac{1+2{,}096}{2}\approx1{,}55$.

Vậy a) $x\approx1{,}21$; b) $x\approx1{,}55$.
:::

Một phương trình mũ có thể biến thành bậc hai.

:::example Đặt ẩn phụ
Giải phương trình $4^x-5\cdot2^x+4=0$.

**Lời giải.** Vì $4^x=\left(2^x\right)^2$, đặt $t=2^x$ với $t>0$ thì phương trình thành $t^2-5t+4=0$, tức $(t-1)(t-4)=0$. Cả hai nghiệm $t=1$ và $t=4$ đều dương.

Với $t=1$: $2^x=1$ nên $x=0$. Với $t=4$: $2^x=4$ nên $x=2$.

Vậy $x\in\{0; 2\}$.
:::

Phương trình lôgarit luôn cần kiểm tra điều kiện.

:::example Phương trình lôgarit
Giải phương trình $\log_2(x+1)+\log_2(x-1)=3$.

**Lời giải.** Điều kiện: $x+1>0$ và $x-1>0$, tức $x>1$.

Gộp: $\log_2\left[(x+1)(x-1)\right]=3$, suy ra $x^2-1=2^3=8$, tức $x^2=9$ và $x=\pm3$.

Đối chiếu điều kiện $x>1$: loại $x=-3$, nhận $x=3$.

**Kiểm tra.** $\log_24+\log_22=2+1=3$ ✓.

Vậy $x=3$.
:::

Với bất phương trình, ta chú ý chiều bất đẳng thức.

:::example Bất phương trình
Giải các bất phương trình:

a) $3^{x-1}<27$.

b) $\left(\dfrac13\right)^{2x-1}\ge\dfrac19$.

c) $\log_2(x-1)>3$.

d) $\log_{1/2}(2x+1)\ge-2$.

**Lời giải.** a) $27=3^3$, cơ số $3>1$ nên $x-1<3$, tức $x<4$.

b) $\dfrac19=\left(\dfrac13\right)^2$, cơ số $\dfrac13<1$ nên đảo chiều: $2x-1\le2$, tức $x\le\dfrac32$.

c) Cơ số $2>1$: $x-1>2^3=8$, tức $x>9$ (đã thoả $x-1>0$).

d) Cơ số $\dfrac12<1$, và $-2=\log_{1/2}4$ nên $0<2x+1\le4$, tức $-\dfrac12<x\le\dfrac32$.

Vậy a) $(-\infty; 4)$; b) $\left(-\infty; \dfrac32\right]$; c) $(9; +\infty)$; d) $\left(-\dfrac12; \dfrac32\right]$.
:::

Giờ ta quay lại bài toán gửi tiền ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: bao lâu đạt $300$ triệu đồng?
Giả sử bác Lan gửi $200$ triệu đồng với lãi suất $7\%$ một năm, lãi kép (số liệu giả định). Sau ít nhất bao nhiêu năm nguyên thì số tiền đạt $300$ triệu đồng?

**Lời giải.**

*Hiểu đề.* Cần số năm nguyên nhỏ nhất $t$ để $200\cdot1{,}07^t\ge300$.

*Tìm cách giải.* Chia hai vế cho $200$ được $1{,}07^t\ge1{,}5$. Cơ số $1{,}07>1$ nên hàm đồng biến và bất đẳng thức giữ chiều. Nghiệm biên là $t_0=\log_{1{,}07}1{,}5$.

*Giải.* Ta có
$$t_0=\frac{\ln1{,}5}{\ln1{,}07}\approx\frac{0{,}4055}{0{,}0677}\approx5{,}99.$$
Vậy $t\ge5{,}99$ và số năm nguyên nhỏ nhất là $6$.

*Nhìn lại.* Kết quả có hợp lí không? Thử lại: $200\cdot1{,}07^5\approx280{,}5<300$ và $200\cdot1{,}07^6\approx300{,}1\ge300$. Số tiền chỉ vừa vượt $300$ ở năm thứ $6$, nên kết quả rất sát. Nếu bác muốn đạt $400$ triệu thì sao? Khi đó $1{,}07^t\ge2$, cho $t\ge\dfrac{\ln2}{\ln1{,}07}\approx10{,}2$, tức $11$ năm.
:::

:::warning Những sai lầm thường gặp
- **Bỏ điều kiện của lôgarit.** Sai: giải $\log_2(x+1)+\log_2(x-1)=3$ được $x=\pm3$ và nhận cả hai. Lí do sai: với $x=-3$ thì $x+1=-2<0$, lôgarit không có nghĩa. Đúng: loại $x=-3$, nghiệm là $x=3$.
- **Quên đảo chiều.** Sai: $\left(\dfrac13\right)^{x}>9\Leftrightarrow x>-2$. Lí do sai: cơ số $\dfrac13<1$ nên hàm nghịch biến. Đúng: $\left(\dfrac13\right)^{x}>\left(\dfrac13\right)^{-2}\Leftrightarrow x<-2$.
- **Đặt ẩn phụ mà quên điều kiện.** Sai: $4^x-3\cdot2^x-4=0$ cho $t^2-3t-4=0$, $t\in\{-1; 4\}$ nên có hai nghiệm $x$. Lí do sai: $t=2^x>0$ nên $t=-1$ không cho nghiệm. Đúng: chỉ nhận $t=4$, suy ra $x=2$.
- **Tách tổng thành tổng lôgarit.** Sai: $\log_2(x+4)=\log_2x+\log_24$. Lí do sai: quy tắc chỉ biến tổng lôgarit thành lôgarit của tích, không biến tổng đối số thành tổng lôgarit. Đúng: $\log_2x+\log_24=\log_2(4x)$.
:::

**Kết nối.** Bài này dùng định nghĩa và quy tắc của [lôgarit](lesson:logarithms) và tính đơn điệu của [hàm số mũ và hàm số lôgarit](lesson:exp-log-functions). Tính liên tục từ bài [hàm số liên tục](lesson:continuity) đảm bảo đồ thị liền nét, nên khi hai vế lệch dấu thì phương trình có nghiệm. Trong thực tế, các phương trình này trả lời câu hỏi "bao lâu thì đạt mức nào", như bài gửi tiền ở trên.

## Thuật ngữ

:::terms
- phương trình mũ | exponential equation
- phương trình lôgarit | logarithmic equation
- bất phương trình mũ | exponential inequality
- bất phương trình lôgarit | logarithmic inequality
- điều kiện xác định | domain condition
- đưa về cùng cơ số | reduce to the same base
- đặt ẩn phụ | substitution
- nghiệm ngoại lai | extraneous solution
- tập nghiệm | solution set
- nghiệm | solution
:::

## Tóm tắt

- $a^x=b$ ($b>0$) có nghiệm $x=\log_ab$; $\log_ax=b$ có nghiệm $x=a^b$.
- $a^{f}=a^{g}\Leftrightarrow f=g$; $\log_af=\log_ag\Leftrightarrow f=g>0$.
- Bất phương trình: giữ chiều khi $a>1$, đảo chiều khi $0<a<1$; với lôgarit phải có $f>0$ và $g>0$.
- Phương pháp: cùng cơ số, lấy lôgarit, đặt ẩn phụ $t=a^x>0$; kiểm tra điều kiện xác định để loại nghiệm ngoại lai.
- Thực tế: giải $a^t\ge b$ bằng $t\ge\log_ab$ rồi lấy số nguyên phù hợp.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải các phương trình:

a) $3^{2x-1}=27$.

b) $\left(\dfrac12\right)^{x+1}=8$.

c) $2^x=-3$.

d) $4^x=9$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $a^{f}=a^{g}\Leftrightarrow f=g$; $a^x=b$ ($b>0$) có nghiệm $x=\log_ab$; $a^x>0$ với mọi $x$.

**Gợi ý các bước:**
1. Viết vế phải là luỹ thừa của cơ số (câu a, b).
2. Câu c: nhận xét dấu của vế phải; câu d: dùng $\log_4$.

::solution
a) $27=3^3$ nên $2x-1=3$, suy ra $x=2$.

b) $8=\left(\dfrac12\right)^{-3}$ nên $x+1=-3$, suy ra $x=-4$.

c) $2^x>0$ với mọi $x$ nên phương trình vô nghiệm.

d) $x=\log_49=\dfrac{\ln9}{\ln4}\approx1{,}58$.

Vậy a) $x=2$; b) $x=-4$; c) vô nghiệm; d) $x\approx1{,}58$.

**Đáp số.** a) $2$; b) $-4$; c) vô nghiệm; d) $1{,}58$.
:::

:::exercise
Giải các phương trình bằng cách đặt ẩn phụ:

a) $9^x-4\cdot3^x+3=0$.

b) $2^{2x+1}-5\cdot2^x+2=0$.

::hint
**Kiến thức:** $9^x=\left(3^x\right)^2$ và $2^{2x+1}=2\cdot\left(2^x\right)^2$; ẩn phụ $t=a^x>0$.

**Gợi ý các bước:**
1. Đặt $t$ và đưa về phương trình bậc hai theo $t$.
2. Loại các giá trị $t\le0$, rồi tìm $x$.

::solution
a) Đặt $t=3^x>0$: $t^2-4t+3=0$, suy ra $t=1$ hoặc $t=3$. Vậy $3^x=1$ hoặc $3^x=3$, tức $x=0$ hoặc $x=1$.

b) Đặt $t=2^x>0$: $2t^2-5t+2=0$, suy ra $t=2$ hoặc $t=\dfrac12$ (cả hai dương). Vậy $2^x=2$ hoặc $2^x=\dfrac12$, tức $x=1$ hoặc $x=-1$.

**Đáp số.** a) $x\in\{0; 1\}$; b) $x\in\{-1; 1\}$.
:::

:::exercise
Giải các phương trình lôgarit:

a) $\log_3(2x-1)=2$.

b) $\log_2x+\log_2(x-2)=3$.

c) $\ln(x^2-1)=\ln3$.

d) $\lg(x+3)-\lg(x-1)=1$.

::hint
**Kiến thức:** $\log_ax=b\Leftrightarrow x=a^b$; các quy tắc tính lôgarit; điều kiện đối số dương.

**Gợi ý các bước:**
1. Tìm điều kiện xác định.
2. Gộp lôgarit, giải phương trình, rồi đối chiếu điều kiện.

::solution
a) Từ $2x-1=3^2=9$ ta có $x=5$ (thoả $2x-1>0$).

b) Điều kiện $x>2$. Ta có $\log_2\left[x(x-2)\right]=3$ nên $x^2-2x=8$, tức $x^2-2x-8=0$ và $x=4$ hoặc $x=-2$. Chỉ $x=4$ thoả $x>2$.

c) Điều kiện $x^2-1>0$. Từ $x^2-1=3$ ta có $x=\pm2$; cả hai đều cho $x^2-1=3>0$, nên đều nhận.

d) Điều kiện $x>1$. Ta có $\lg\dfrac{x+3}{x-1}=1$ nên $\dfrac{x+3}{x-1}=10$, suy ra $x+3=10x-10$ và $x=\dfrac{13}{9}$ (thoả $x>1$).

Vậy a) $x=5$; b) $x=4$; c) $x=\pm2$; d) $x=\dfrac{13}{9}$.

**Đáp số.** a) $5$; b) $4$; c) $\pm2$; d) $\dfrac{13}{9}$.
:::

:::exercise
Giải các bất phương trình:

a) $\left(\dfrac13\right)^{x}<9$.

b) $2^{x^2-2x}<8$.

c) $\log_3(x-2)<2$.

d) $\log_{1/2}(x+1)>-1$.

::hint
**Kiến thức:** giữ chiều khi cơ số lớn hơn $1$, đảo chiều khi cơ số nhỏ hơn $1$; với lôgarit cần đối số dương.

**Gợi ý các bước:**
1. Đưa hai vế về cùng cơ số.
2. Xét cơ số rồi giải; với lôgarit viết cả điều kiện đối số dương.

::solution
a) Ta có $9=\left(\dfrac13\right)^{-2}$, nên bất phương trình trở thành $\left(\dfrac13\right)^x<\left(\dfrac13\right)^{-2}$.

Vì cơ số $\dfrac13<1$ nên hàm số mũ nghịch biến; do đó bất phương trình tương đương với $x>-2$ (đổi chiều).

Vậy tập nghiệm là $(-2; +\infty)$.

b) Ta có $8=2^3$, nên bất phương trình trở thành $2^{x^2-2x}<2^3$.

Vì cơ số $2>1$ nên hàm số mũ đồng biến; do đó bất phương trình tương đương với $x^2-2x<3$, tức là $x^2-2x-3<0$. Tam thức $x^2-2x-3=(x+1)(x-3)$ có hai nghiệm $-1$ và $3$ và hệ số $a=1>0$, nên $x^2-2x-3<0$ khi $-1<x<3$.

Vậy tập nghiệm là $(-1; 3)$.

c) Điều kiện xác định: $x-2>0$, tức là $x>2$.

Ta có $2=\log_39$, nên bất phương trình trở thành $\log_3(x-2)<\log_39$. Vì cơ số $3>1$ nên bất phương trình tương đương với $x-2<9$, tức là $x<11$.

Kết hợp với điều kiện $x>2$, ta được $2<x<11$. Vậy tập nghiệm là $(2; 11)$.

d) Điều kiện xác định: $x+1>0$, tức là $x>-1$.

Ta có $-1=\log_{1/2}2$, nên bất phương trình trở thành $\log_{1/2}(x+1)>\log_{1/2}2$. Vì cơ số $\dfrac12\in(0; 1)$ nên hàm lôgarit nghịch biến; do đó bất phương trình tương đương với $x+1<2$, tức là $x<1$.

Kết hợp với điều kiện $x>-1$, ta được $-1<x<1$. Vậy tập nghiệm là $(-1; 1)$.

Vậy các tập nghiệm lần lượt là $(-2; +\infty)$, $(-1; 3)$, $(2; 11)$ và $(-1; 1)$.

**Đáp số.** a) $(-2; +\infty)$; b) $(-1; 3)$; c) $(2; 11)$; d) $(-1; 1)$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) Phương trình $5^x=0$ vô nghiệm.

b) $x=2$ là nghiệm của phương trình $2^x+3^x=5$.

c) Bất phương trình $\log_{1/2}x>1$ có tập nghiệm là $\left(\dfrac12; +\infty\right)$.

d) Phương trình $\log_3(x^2)=4$ có hai nghiệm.

::hint
**Kiến thức:** $a^x>0$; tính đơn điệu; $\log_3(x^2)=4\Leftrightarrow x^2=3^4$.

**Gợi ý các bước:**
1. Thay trực tiếp giá trị vào (câu b).
2. Câu c, đảo chiều khi cơ số nhỏ hơn $1$; câu d, giải $x^2=81$.

::solution
a) **Đúng.** Hàm số mũ $y=5^x$ luôn nhận giá trị dương: $5^x>0$ với mọi $x$. Do đó $5^x=0$ không thể xảy ra, phương trình vô nghiệm.

b) **Sai.** Thay $x=2$ vào vế trái: $2^2+3^2=4+9=13\neq5$. Vậy $x=2$ không là nghiệm.

c) **Sai.** Điều kiện: $x>0$. Ta có $1=\log_{1/2}\dfrac12$, nên $\log_{1/2}x>\log_{1/2}\dfrac12$. Vì cơ số $\dfrac12<1$ nên bất phương trình tương đương với $0<x<\dfrac12$. Tập nghiệm là $\left(0; \dfrac12\right)$, không phải $\left(\dfrac12; +\infty\right)$.

d) **Đúng.** Điều kiện: $x^2>0$, tức là $x\neq0$. Ta có $\log_3\left(x^2\right)=4\Leftrightarrow x^2=3^4=81\Leftrightarrow x=\pm9$. Cả hai giá trị đều thoả $x\neq0$, nên phương trình có hai nghiệm.

Vậy các mệnh đề a), d) đúng; các mệnh đề b), c) sai.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise
Giả sử một chiếc xe giá $600$ triệu đồng và mỗi năm giá trị giảm $12\%$ (số liệu giả định), tức sau $t$ năm giá trị là $V(t)=600\cdot0{,}88^t$ triệu đồng. Sau ít nhất bao nhiêu năm nguyên thì giá trị xe dưới $300$ triệu đồng?

::hint
**Kiến thức:** $0{,}88^t<0{,}5$ với cơ số nhỏ hơn $1$ thì đảo chiều khi lấy lôgarit.

**Gợi ý các bước:**
1. Lập $600\cdot0{,}88^t<300$ và rút gọn.
2. Tính $\log_{0{,}88}0{,}5$, đảo chiều, rồi lấy số nguyên phù hợp.

::solution
Gọi $t$ (năm) là thời gian sử dụng, $t>0$. Giá trị xe là $V(t)=600\cdot0{,}88^t$ (triệu đồng). Cần $V(t)<300$.

Ta có
$$600\cdot0{,}88^t<300\Leftrightarrow0{,}88^t<0{,}5.$$

Vì cơ số $0{,}88<1$ nên hàm số $y=0{,}88^t$ nghịch biến; lấy lôgarit cơ số $0{,}88$ hai vế thì đổi chiều bất đẳng thức:
$$t>\log_{0{,}88}0{,}5=\frac{\ln0{,}5}{\ln0{,}88}\approx5{,}42.$$

Số năm nguyên nhỏ nhất thoả $t>5{,}42$ là $t=6$.

Kiểm tra: $V(5)=600\cdot0{,}88^5\approx316{,}6>300$ và $V(6)=600\cdot0{,}88^6\approx278{,}6<300$.

Vậy sau ít nhất $6$ năm thì giá trị xe dưới $300$ triệu đồng.

**Đáp số.** $6$ năm.
:::

:::exercise
Mức cường độ âm là $L=10\lg\dfrac{I}{I_0}$ (dB), với $I_0=10^{-12}$ W/m² (theo định nghĩa trong vật lí phổ thông). Giả sử một quy định đặt ra mức âm tối đa là $80$ dB (số liệu giả định). Tìm cường độ âm $I$ lớn nhất được phép.

::hint
**Kiến thức:** $\lg u\le8\Leftrightarrow u\le10^8$ vì cơ số $10>1$.

**Gợi ý các bước:**
1. Lập bất phương trình $10\lg\dfrac{I}{I_0}\le80$.
2. Giải rồi nhân với $I_0$.

::solution
Mức cường độ âm là $L=10\lg\dfrac{I}{I_0}$ (dB) với $I_0=10^{-12}$ W/m² và $I>0$. Quy định yêu cầu $L\le80$.

Ta có
$$10\lg\frac{I}{I_0}\le80\Leftrightarrow\lg\frac{I}{I_0}\le8.$$

Vì cơ số $10>1$ nên hàm $y=10^t$ đồng biến; do đó
$$\frac{I}{I_0}\le10^8\Leftrightarrow I\le10^8\cdot10^{-12}=10^{-4}.$$

Vậy cường độ âm lớn nhất được phép là $10^{-4}$ W/m².

**Đáp số.** $10^{-4}$ W/m².
:::

:::exercise
Độ pH được tính bằng $\mathrm{pH}=-\lg[\mathrm{H}^+]$ ($[\mathrm{H}^+]$ tính bằng mol/lít). Một dung dịch giả định có $\mathrm{pH}$ nằm giữa $4$ và $6$, tức $4\le\mathrm{pH}\le6$.

a) Tìm khoảng giá trị của $[\mathrm{H}^+]$.

b) Dung dịch có $\mathrm{pH}<3{,}5$ thì $[\mathrm{H}^+]$ lớn hơn giá trị nào (làm tròn đến dạng $c\cdot10^{-4}$, $c$ đến hàng phần mười)?

::hint
**Kiến thức:** $[\mathrm{H}^+]=10^{-\mathrm{pH}}$, và hàm $10^{-u}$ nghịch biến.

**Gợi ý các bước:**
1. Biến đổi $\mathrm{pH}$ sang $[\mathrm{H}^+]$.
2. Đảo chiều bất đẳng thức vì hàm nghịch biến.

::solution
Ta có $\mathrm{pH}=-\lg[\mathrm{H}^+]$, suy ra $[\mathrm{H}^+]=10^{-\mathrm{pH}}$. Hàm số $y=10^{-p}$ nghịch biến theo $p$ (vì $10^{-p}=\left(\dfrac1{10}\right)^p$ có cơ số nhỏ hơn $1$).

a) Từ $4\le\mathrm{pH}\le6$ suy ra $-6\le-\mathrm{pH}\le-4$. Do hàm mũ cơ số $10$ đồng biến nên
$$10^{-6}\le10^{-\mathrm{pH}}\le10^{-4},\ \text{tức là}\ 10^{-6}\le[\mathrm{H}^+]\le10^{-4}.$$
Vậy $[\mathrm{H}^+]$ nằm trong đoạn $\left[10^{-6}; 10^{-4}\right]$ mol/lít.

b) Từ $\mathrm{pH}<3{,}5$ suy ra $-\mathrm{pH}>-3{,}5$, nên
$$[\mathrm{H}^+]=10^{-\mathrm{pH}}>10^{-3{,}5}\approx3{,}2\cdot10^{-4}.$$
Vậy dung dịch có $\mathrm{pH}<3{,}5$ thì $[\mathrm{H}^+]>3{,}2\cdot10^{-4}$ mol/lít.

**Đáp số.** a) $10^{-6}\le[\mathrm{H}^+]\le10^{-4}$; b) $[\mathrm{H}^+]>3{,}2\cdot10^{-4}$ mol/lít.
:::

:::exercise
Ôn lại hàm số liên tục. Chứng minh phương trình $\ln x=2-x$ có ít nhất một nghiệm trong khoảng $(1; 2)$.

::hint
**Kiến thức:** $g(x)=\ln x+x-2$ liên tục trên $(0; +\infty)$; nếu $g(1)\,g(2)<0$ thì có nghiệm trong $(1; 2)$.

**Gợi ý các bước:**
1. Tính $g(1)$ và $g(2)$.
2. Áp dụng định lí giá trị trung gian.

::solution
Điều kiện xác định của phương trình $\ln x=2-x$ là $x>0$. Phương trình tương đương với $\ln x+x-2=0$.

Xét hàm số $g(x)=\ln x+x-2$. Hàm $g$ là tổng của các hàm số liên tục trên $(0; +\infty)$ nên liên tục trên $(0; +\infty)$, do đó liên tục trên đoạn $[1; 2]$.

Ta có
$$g(1)=\ln1+1-2=0+1-2=-1<0,\qquad g(2)=\ln2+2-2=\ln2>0.$$

Suy ra $g(1)\cdot g(2)<0$. Theo định lí giá trị trung gian, tồn tại $c\in(1; 2)$ sao cho $g(c)=0$, tức là $\ln c+c-2=0$, hay $\ln c=2-c$.

Vậy phương trình $\ln x=2-x$ có ít nhất một nghiệm trong khoảng $(1; 2)$.

**Đáp số.** Phương trình có nghiệm trong $(1; 2)$.
:::

:::exercise Thử thách
Giải phương trình $2^x+3^x=5^x$.

::hint
**Kiến thức:** chia hai vế cho $5^x$ để được tổng của hai hàm nghịch biến; một hàm đơn điệu nhận mỗi giá trị đúng một lần.

**Gợi ý các bước:**
1. Đoán một nghiệm bằng cách thử số nguyên nhỏ.
2. Chia cho $5^x$ và chứng minh nghiệm đó duy nhất.

::solution
Thử $x=1$: $2+3=5$, nên $x=1$ là nghiệm.

Chia hai vế cho $5^x>0$: $\left(\dfrac25\right)^x+\left(\dfrac35\right)^x=1$. Vế trái là tổng của hai hàm nghịch biến (cơ số $\dfrac25$ và $\dfrac35$ đều nhỏ hơn $1$) nên nghịch biến trên $\mathbb{R}$, và nhận giá trị $1$ đúng một lần. Vậy $x=1$ là nghiệm duy nhất.

**Đáp số.** $x=1$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tập nghiệm của phương trình $2^{x^2-1}=8$ là
A. $\{2\}$.
B. $\{-\sqrt2; \sqrt2\}$.
C. $\{-2; 2\}$.
D. $\{4\}$.
::key C
$8=2^3$ nên $x^2-1=3$, suy ra $x^2=4$ và $x=\pm2$. Phương án A bỏ nghiệm âm, B giải $x^2=2$, D nhầm $x^2=4$ thành $x=4$.

::mc TH
Tập nghiệm của bất phương trình $\left(\dfrac12\right)^x>8$ là
A. $(-3; +\infty)$.
B. $(3; +\infty)$.
C. $(-\infty; 3)$.
D. $(-\infty; -3)$.
::key D
$8=\left(\dfrac12\right)^{-3}$, cơ số $\dfrac12<1$ nên đảo chiều: $x<-3$. Phương án A quên đảo chiều, B và C nhầm dấu của số mũ $-3$.

::mc VD
Nghiệm của phương trình $\log_2x+\log_2(x-3)=2$ là
A. $x=4$.
B. $x=-1$ hoặc $x=4$.
C. $x=-1$.
D. phương trình vô nghiệm.
::key A
Điều kiện $x>3$. Ta có $x(x-3)=4$ nên $x^2-3x-4=0$ và $x=-1$ hoặc $x=4$. Chỉ $x=4$ thoả $x>3$. Phương án B quên loại nghiệm ngoại lai $x=-1$.

::mc TH
Tập nghiệm của bất phương trình $\log_3(2x-1)\le2$ là
A. $\left[\dfrac12; 5\right]$.
B. $\left(\dfrac12; 5\right]$.
C. $(-\infty; 5]$.
D. $(5; +\infty)$.
::key B
Cần $0<2x-1\le9$, tức $\dfrac12<x\le5$. Phương án A lấy cả đầu mút $\dfrac12$, C quên điều kiện $2x-1>0$, D đảo chiều.

::tf TH TH VD TH
Xét phương trình $4^x-3\cdot2^x-4=0$. Xét tính đúng sai của các mệnh đề sau:
a) Đặt $t=2^x$ thì phương trình trở thành $t^2-3t-4=0$.
b) Giá trị $t=-1$ cho một nghiệm của phương trình.
c) Phương trình có đúng một nghiệm.
d) Nghiệm của phương trình là $x=4$.
::key Đ S Đ S
a) Đúng: $4^x=\left(2^x\right)^2$. b) Sai: $t=2^x>0$ nên $t=-1$ bị loại. c) Đúng: chỉ $t=4$, tức $x=2$. d) Sai: $2^x=4$ cho $x=2$, không phải $x=4$.

::sa VD
Giả sử số tiền gửi tăng $8\%$ mỗi năm, lãi kép. Sau ít nhất bao nhiêu năm nguyên thì số tiền gấp ba số ban đầu?
::key 15
Cần $1{,}08^t\ge3$, tức $t\ge\dfrac{\ln3}{\ln1{,}08}\approx14{,}3$ nên $t=15$. Thử lại: $1{,}08^{14}\approx2{,}94<3$ và $1{,}08^{15}\approx3{,}17\ge3$.

::sa VD
Nghiệm của phương trình $5^{2x-1}=40$ là bao nhiêu (làm tròn đến hàng phần mười)?
::key 1,6
$2x-1=\log_540\approx2{,}292$, suy ra $x\approx\dfrac{3{,}292}{2}\approx1{,}6$.
:::
