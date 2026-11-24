---
title: Lôgarit
description: Hiểu lôgarit là phép tìm số mũ, nắm các quy tắc tính và công thức đổi cơ số, rồi vận dụng vào lãi kép, độ pH và mức cường độ âm.
minutes: 25
---

:::goals
- Hiểu định nghĩa lôgarit cơ số $a$ của một số dương và tính được lôgarit đơn giản.
- Dùng các tính chất và quy tắc tính lôgarit của tích, thương, luỹ thừa để rút gọn biểu thức.
- Dùng công thức đổi cơ số, lôgarit thập phân và lôgarit tự nhiên để tính và biểu diễn lôgarit.
- Vận dụng lôgarit vào các bài toán thực tế như lãi kép, độ pH và mức cường độ âm.
:::

Giả sử bạn gửi $100$ triệu đồng với lãi suất $6\%$ một năm, lãi kép (số liệu giả định). Sau $t$ năm, số tiền là $100\cdot1{,}06^t$ triệu đồng. Bạn muốn biết sau bao lâu số tiền thành $200$ triệu đồng. Khi đó phải giải $1{,}06^t=2$.

Ở bài trước, ta biết tính luỹ thừa khi biết số mũ. Bây giờ bài toán đi ngược lại: biết kết quả, phải tìm số mũ. Phép toán ngược đó là **lôgarit**, và nó cho ta cách đọc ra số mũ từ một số đã cho.

## Khám phá: tìm số mũ

Ta thử vài số mũ nguyên của $1{,}06$:

| $t$ | $10$ | $11$ | $12$ |
|---|---|---|---|
| $1{,}06^t$ | $1{,}7908$ | $1{,}8983$ | $2{,}0122$ |

Vì $1{,}8983<2<2{,}0122$ nên $t$ nằm giữa $11$ và $12$. Ta chưa gọi tên được số $t$ đó, nên cần một kí hiệu mới. Hãy bắt đầu với trường hợp dễ hơn: viết các số dưới dạng luỹ thừa của $2$.

| $b$ | $\dfrac18$ | $\dfrac12$ | $1$ | $2$ | $8$ | $32$ |
|---|---|---|---|---|---|---|
| số mũ $\alpha$ để $2^{\alpha}=b$ | $-3$ | $-1$ | $0$ | $1$ | $3$ | $5$ |

Mỗi số dương $b$ có một số mũ $\alpha$ duy nhất sao cho $2^{\alpha}=b$. Số mũ đó ta gọi là lôgarit cơ số $2$ của $b$.

## Định nghĩa lôgarit

:::definition Lôgarit
Cho $a>0$, $a\neq1$ và $b>0$. Số $\alpha$ thoả mãn $a^{\alpha}=b$ gọi là **lôgarit cơ số $a$** của $b$, kí hiệu $\log_a b$. Như vậy
$$\log_a b=\alpha\Leftrightarrow a^{\alpha}=b.$$
:::

**Hiểu sâu hơn.** Lôgarit chỉ là một cách gọi tên số mũ. Ví dụ $\log_2 8=3$ vì $2^3=8$. Có ba điều kiện cần nhớ. Cơ số $a>0$ và $a\neq1$, vì $1^{\alpha}$ luôn bằng $1$ nên không "tìm" được số mũ cho các số khác. Số $b$ phải dương, vì $a^{\alpha}>0$ với mọi $\alpha$. Do đó $\log_2(-4)$ hay $\log_2 0$ không có nghĩa.

Từ định nghĩa, ta suy ra ngay các tính chất sau (với $a>0$, $a\neq1$, $b>0$):

$$\log_a1=0,\qquad\log_aa=1,\qquad a^{\log_ab}=b,\qquad\log_a\left(a^{\alpha}\right)=\alpha.$$

Chẳng hạn $a^{\log_ab}=b$ chính là phát biểu "$\alpha=\log_ab$ thì $a^{\alpha}=b$". Hai hàm "lấy luỹ thừa" và "lấy lôgarit" làm việc ngược nhau, như hình dưới: đồ thị của chúng đối xứng qua đường thẳng $y=x$.

:::graph Đồ thị $y=2^x$ và $y=\log_2x$ đối xứng qua đường thẳng $y=x$
alt: Đường cong y bằng 2 mũ x nét đứt, đường cong y bằng lôgarit cơ số 2 của x nét liền, và đường thẳng y bằng x nét đứt; hai đường cong đối xứng với nhau qua đường thẳng này
x: -2..8
y: -3..8
plot: 2^x ; dashed
plot: ln(x)/ln(2) ; 0.05..8
plot: x ; dashed
point: (1, 0) "" below-right
point: (2, 1) "" below-right
point: (4, 2) "" below-right
label: (2.4, 7) "y = 2^x"
label: (6.2, 3.4) "y = log_2 x"
:::

Hai cơ số đặc biệt hay dùng có kí hiệu riêng. **Lôgarit thập phân** là lôgarit cơ số $10$, viết $\lg b$ (hay $\log b$). **Lôgarit tự nhiên** là lôgarit cơ số $e$, viết $\ln b$, trong đó $e\approx2{,}718$ là số Euler.

## Quy tắc tính lôgarit

:::theorem Quy tắc tính lôgarit
Với $a>0$, $a\neq1$, $M>0$, $N>0$ và mọi số thực $\alpha$:
- $\log_a(MN)=\log_aM+\log_aN$.
- $\log_a\dfrac{M}{N}=\log_aM-\log_aN$.
- $\log_a\left(M^{\alpha}\right)=\alpha\log_aM$.
:::

**Vì sao?** Lôgarit là số mũ, nên các quy tắc này là tính chất của luỹ thừa viết bằng ngôn ngữ khác. Đặt $x=\log_aM$ và $y=\log_aN$, tức là $M=a^x$ và $N=a^y$. Khi đó $MN=a^x\cdot a^y=a^{x+y}$, suy ra $\log_a(MN)=x+y=\log_aM+\log_aN$. Hai quy tắc còn lại chứng minh tương tự từ $\dfrac{a^x}{a^y}=a^{x-y}$ và $(a^x)^{\alpha}=a^{\alpha x}$.

:::theorem Công thức đổi cơ số
Với $a>0$, $a\neq1$, $b>0$, $c>0$, $c\neq1$:
$$\log_ab=\frac{\log_cb}{\log_ca},\qquad\log_ab=\frac{1}{\log_ba}\ (b\neq1).$$
:::

Công thức đổi cơ số cho phép dùng máy tính cầm tay (chỉ có $\lg$ và $\ln$) để tính lôgarit với cơ số bất kì: $\log_ab=\dfrac{\ln b}{\ln a}$. Nó cũng cho ta một hệ quả: $\log_{a^{\alpha}}b=\dfrac1{\alpha}\log_ab$.

## Ví dụ

Ta bắt đầu với định nghĩa.

:::example Tính lôgarit theo định nghĩa
Tính:

a) $\log_2 32$.

b) $\log_3\dfrac{1}{81}$.

c) $\log_{1/2}8$.

d) $\lg0{,}001$.

**Lời giải.** a) Vì $2^5=32$ nên $\log_232=5$.

b) Vì $3^{-4}=\dfrac{1}{81}$ nên $\log_3\dfrac1{81}=-4$.

c) Vì $\left(\dfrac12\right)^{-3}=8$ nên $\log_{1/2}8=-3$.

d) Vì $10^{-3}=0{,}001$ nên $\lg0{,}001=-3$.

Vậy a) $5$; b) $-4$; c) $-3$; d) $-3$.
:::

Tiếp theo ta dùng các tính chất $a^{\log_ab}=b$ và $\log_aa^{\alpha}=\alpha$.

:::example Dùng tính chất cơ bản
Tính:

a) $5^{\log_57}$.

b) $9^{\log_34}$.

c) $\log_48$.

**Lời giải.** a) Ta có $5^{\log_57}=7$.

b) Ta có $9=3^2$ nên $9^{\log_34}=\left(3^{\log_34}\right)^2=4^2=16$.

c) Đặt $x=\log_48$, tức $4^x=8$. Viết $4=2^2$ và $8=2^3$ ta được $2^{2x}=2^3$, suy ra $2x=3$ và $x=\dfrac32$.

Vậy a) $7$; b) $16$; c) $\dfrac32$.
:::

Bây giờ ta rút gọn bằng các quy tắc tính.

:::example Dùng quy tắc tính lôgarit
Tính:

a) $\log_62+\log_63$.

b) $\log_240-\log_25$.

c) $2\log_36-\log_34$.

**Lời giải.** a) Ta có $\log_62+\log_63=\log_6(2\cdot3)=\log_66=1$.

b) Ta có $\log_240-\log_25=\log_2\dfrac{40}{5}=\log_28=3$.

c) Ta có $2\log_36-\log_34=\log_36^2-\log_34=\log_3\dfrac{36}{4}=\log_39=2$.

Vậy a) $1$; b) $3$; c) $2$.
:::

Khi cơ số khác nhau, ta đưa về cùng một cơ số.

:::example Đổi cơ số
Cho $a=\log_23$. Biểu diễn $\log_612$ theo $a$.

**Lời giải.** Đổi sang cơ số $2$ rồi dùng quy tắc tính:

$$\log_612=\frac{\log_212}{\log_26}=\frac{\log_24+\log_23}{\log_22+\log_23}=\frac{2+a}{1+a}.$$

Vậy $\log_612=\dfrac{2+a}{1+a}$.

**Kiểm tra.** Với $a\approx1{,}585$ ta có $\dfrac{3{,}585}{2{,}585}\approx1{,}387$, và máy tính cho $\dfrac{\ln12}{\ln6}\approx1{,}387$.
:::

Giờ ta quay lại bài toán lãi kép ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: bao lâu thì số tiền gấp đôi?
Giả sử bác Hoa gửi $100$ triệu đồng với lãi suất $6\%$ một năm, lãi kép (số liệu giả định). Sau bao nhiêu năm số tiền đạt $200$ triệu đồng (làm tròn đến hàng phần mười)?

**Lời giải.**

*Hiểu đề.* Sau $t$ năm số tiền là $100\cdot1{,}06^t$ triệu đồng. Cần tìm $t$ để số tiền bằng $200$.

*Tìm cách giải.* Phương trình $100\cdot1{,}06^t=200$ rút gọn thành $1{,}06^t=2$. Số mũ $t$ chính là $\log_{1{,}06}2$, và ta tính bằng cách đổi cơ số sang $\ln$.

*Giải.* Ta có

$$t=\log_{1{,}06}2=\frac{\ln2}{\ln1{,}06}\approx\frac{0{,}6931}{0{,}0583}\approx11{,}9.$$

Vậy sau khoảng $11{,}9$ năm số tiền gấp đôi.

*Nhìn lại.* Kết quả có hợp lí không? Ở phần khám phá ta thấy $t$ nằm giữa $11$ và $12$, và $11{,}9$ thoả điều đó; thay lại, $1{,}06^{11{,}9}\approx2{,}0005$. Nếu thay đổi dữ kiện thì sao? Thời gian gấp đôi không phụ thuộc vào số tiền gửi ban đầu, chỉ phụ thuộc lãi suất: gửi $50$ triệu hay $500$ triệu đều gấp đôi sau khoảng $11{,}9$ năm.
:::

Lôgarit cũng xuất hiện trong khoa học. Độ pH của một dung dịch đo tính axit, được định nghĩa bằng $\mathrm{pH}=-\lg[\mathrm{H}^+]$, trong đó $[\mathrm{H}^+]$ là nồng độ ion hiđro (mol/lít).

:::example Vận dụng: độ pH
Một dung dịch có nồng độ ion hiđro $[\mathrm{H}^+]=3\cdot10^{-5}$ mol/lít (số liệu giả định).

a) Tính độ pH của dung dịch (làm tròn đến hàng phần trăm).

b) Dung dịch có $\mathrm{pH}=3$ có nồng độ $[\mathrm{H}^+]$ gấp bao nhiêu lần dung dịch có $\mathrm{pH}=5$?

**Lời giải.** a) Ta có $\lg\left(3\cdot10^{-5}\right)=\lg3+\lg10^{-5}=\lg3-5$. Do đó $\mathrm{pH}=5-\lg3\approx5-0{,}4771\approx4{,}52$.

b) Từ $\mathrm{pH}=-\lg[\mathrm{H}^+]$ ta có $[\mathrm{H}^+]=10^{-\mathrm{pH}}$. Vậy $\mathrm{pH}=3$ cho $[\mathrm{H}^+]=10^{-3}$ và $\mathrm{pH}=5$ cho $[\mathrm{H}^+]=10^{-5}$. Tỉ số là $\dfrac{10^{-3}}{10^{-5}}=10^2=100$.

Vậy a) $\mathrm{pH}\approx4{,}52$; b) gấp $100$ lần.
:::

:::warning Những sai lầm thường gặp
- **Lôgarit của một tổng.** Sai: $\log_2(4+4)=\log_24+\log_24=4$. Lí do sai: quy tắc chỉ có cho tích; $\log_a(M+N)$ không tách được. Đúng: $\log_2(4+4)=\log_28=3$.
- **Lôgarit của thương và thương của lôgarit.** Sai: $\dfrac{\log_28}{\log_24}=\log_2\dfrac84=1$. Lí do sai: $\log_a\dfrac MN=\log_aM-\log_aN$, không phải $\dfrac{\log_aM}{\log_aN}$. Đúng: $\dfrac{\log_28}{\log_24}=\dfrac32$, còn $\log_2\dfrac84=1$.
- **Bỏ qua điều kiện của đối số.** Sai: $\log_2(-4)=-2$ vì $2^{-2}=\dfrac14$. Lí do sai: $2^{-2}=\dfrac14$, không phải $-4$; $a^{\alpha}$ luôn dương nên không có lôgarit của số âm. Đúng: $\log_2(-4)$ không có nghĩa.
- **Cơ số không hợp lệ.** Sai: $\log_1 5=5$. Lí do sai: $1^{\alpha}=1\neq5$ với mọi $\alpha$. Đúng: cơ số phải thoả $a>0$, $a\neq1$.
:::

**Kết nối.** Lôgarit dựa trên luỹ thừa với số mũ thực ở bài [luỹ thừa với số mũ thực](lesson:real-exponents): các quy tắc ở trên là các tính chất của luỹ thừa đọc theo chiều ngược. Nó chuẩn bị cho bài [hàm số mũ và hàm số lôgarit](lesson:exp-log-functions) và bài [phương trình, bất phương trình mũ và lôgarit](lesson:exp-log-equations), nơi ta giải các phương trình có ẩn ở số mũ như $1{,}06^t=2$. Trong thực tế, lôgarit biến những đại lượng trải trên nhiều bậc độ lớn (nồng độ axit, cường độ âm) thành những số dễ đọc như $\mathrm{pH}=4{,}52$.

## Thuật ngữ

:::terms
- lôgarit | logarithm
- cơ số | base
- lôgarit thập phân | common logarithm
- lôgarit tự nhiên | natural logarithm
- đổi cơ số | change of base
- lôgarit của một tích | logarithm of a product
- lôgarit của một thương | logarithm of a quotient
- lôgarit của một luỹ thừa | logarithm of a power
- độ pH | pH
- thời gian gấp đôi | doubling time
:::

## Tóm tắt

- $\log_ab=\alpha\Leftrightarrow a^{\alpha}=b$ với $a>0$, $a\neq1$, $b>0$.
- $\log_a1=0$, $\log_aa=1$, $a^{\log_ab}=b$, $\log_a(a^{\alpha})=\alpha$.
- $\log_a(MN)=\log_aM+\log_aN$; $\log_a\dfrac MN=\log_aM-\log_aN$; $\log_a(M^{\alpha})=\alpha\log_aM$.
- $\log_ab=\dfrac{\log_cb}{\log_ca}$; $\lg$ là cơ số $10$, $\ln$ là cơ số $e$.
- Bài toán thực tế: giải $a^t=b$ bằng $t=\dfrac{\ln b}{\ln a}$; độ pH $=-\lg[\mathrm{H}^+]$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $\log_5125$.

b) $\log_2\dfrac18$.

c) $\log_{1/3}9$.

d) $\ln e^5$.

::hint
**Kiến thức:** $\log_ab=\alpha\Leftrightarrow a^{\alpha}=b$.

**Gợi ý các bước:**
1. Viết số trong dấu lôgarit thành luỹ thừa của cơ số.
2. Đọc số mũ.

::solution
a) Vì $5^3=125$ nên $\log_5125=3$.

b) Vì $2^{-3}=\dfrac18$ nên $\log_2\dfrac18=-3$.

c) Vì $\left(\dfrac13\right)^{-2}=9$ nên $\log_{1/3}9=-2$.

d) Ta có $\ln e^5=\log_ee^5=5$.

Vậy a) $3$; b) $-3$; c) $-2$; d) $5$.

**Đáp số.** a) $3$; b) $-3$; c) $-2$; d) $5$.
:::

:::exercise
Tìm điều kiện của $x$ để mỗi biểu thức sau có nghĩa:

a) $\log_3(x-2)$.

b) $\log_2(5-x)$.

c) $\lg(x^2-4)$.

::hint
**Kiến thức:** $\log_au$ có nghĩa khi $u>0$.

**Gợi ý các bước:**
1. Viết điều kiện $u>0$.
2. Giải bất phương trình nhận được (ở câu c, xét dấu tích $(x-2)(x+2)$).

::solution
Biểu thức $\log_a b$ (với cơ số $a>0$, $a\neq1$) có nghĩa khi và chỉ khi $b>0$. Các cơ số $3$, $2$, $10$ ở đây đều thoả mãn điều kiện của cơ số.

a) Biểu thức $\log_3(x-2)$ có nghĩa khi $x-2>0$, suy ra $x>2$.

b) Biểu thức $\log_2(5-x)$ có nghĩa khi $5-x>0$, suy ra $x<5$.

c) Biểu thức $\lg(x^2-4)$ có nghĩa khi $x^2-4>0$. Phân tích thành nhân tử:
$$x^2-4=(x-2)(x+2)>0.$$
Tích hai thừa số dương khi chúng cùng dấu. Nếu cả hai cùng dương thì $x>2$; nếu cả hai cùng âm thì $x<-2$. Do đó $x<-2$ hoặc $x>2$.

Vậy a) $x>2$; b) $x<5$; c) $x\in(-\infty; -2)\cup(2; +\infty)$.

**Đáp số.** a) $x>2$; b) $x<5$; c) $(-\infty; -2)\cup(2; +\infty)$.
:::

:::exercise
Tính:

a) $4^{\log_23}$.

b) $8^{\log_25}$.

c) $\log_432$.

::hint
**Kiến thức:** $a^{\log_ab}=b$; viết cơ số thành luỹ thừa của $2$.

**Gợi ý các bước:**
1. Ở câu a, b: viết $4=2^2$ và $8=2^3$ rồi dùng $(a^{\alpha})^{\beta}=a^{\alpha\beta}$.
2. Ở câu c: đặt $x=\log_432$ rồi giải $4^x=32$.

::solution
Áp dụng các công thức $\left(a^m\right)^n=a^{mn}$ và $a^{\log_a b}=b$ (với $a>0$, $a\neq1$, $b>0$).

a) Ta có $4=2^2$ nên
$$4^{\log_23}=\left(2^2\right)^{\log_23}=\left(2^{\log_23}\right)^2=3^2=9.$$

b) Ta có $8=2^3$ nên
$$8^{\log_25}=\left(2^3\right)^{\log_25}=\left(2^{\log_25}\right)^3=5^3=125.$$

c) Đặt $x=\log_432$. Theo định nghĩa lôgarit, $4^x=32$. Viết hai vế dưới dạng luỹ thừa cơ số $2$: $2^{2x}=2^5$. Suy ra $2x=5$, do đó $x=\dfrac52$.

Vậy a) $9$; b) $125$; c) $\dfrac52$.

**Đáp số.** a) $9$; b) $125$; c) $\dfrac52$.
:::

:::exercise
Tính:

a) $\log_64+\log_69$.

b) $\log_354-\log_32$.

c) $\log_212-2\log_23+\log_26$.

::hint
**Kiến thức:** $\log_a(MN)=\log_aM+\log_aN$, $\log_a\dfrac MN=\log_aM-\log_aN$, $\alpha\log_aM=\log_aM^{\alpha}$.

**Gợi ý các bước:**
1. Gộp các lôgarit thành một lôgarit.
2. Tính giá trị của biểu thức trong dấu lôgarit.

::solution
Áp dụng các công thức (với các cơ số và các số dương thích hợp):
$$\log_a M+\log_a N=\log_a(MN),\qquad \log_a M-\log_a N=\log_a\frac MN,\qquad k\log_a M=\log_a M^k.$$

a) Ta có $\log_64+\log_69=\log_6(4\cdot9)=\log_636=\log_66^2=2$.

b) Ta có $\log_354-\log_32=\log_3\dfrac{54}{2}=\log_327=\log_33^3=3$.

c) Trước hết $2\log_23=\log_23^2$. Do đó
$$\begin{aligned}
\log_212-2\log_23+\log_26&=\log_212-\log_23^2+\log_26\\
&=\log_2\frac{12\cdot6}{3^2}=\log_28=\log_22^3=3.
\end{aligned}$$

Vậy a) $2$; b) $3$; c) $3$.

**Đáp số.** a) $2$; b) $3$; c) $3$.
:::

:::exercise
Độ pH của một dung dịch được tính bằng $\mathrm{pH}=-\lg[\mathrm{H}^+]$ ($[\mathrm{H}^+]$ tính bằng mol/lít).

a) Một dung dịch có $[\mathrm{H}^+]=2\cdot10^{-4}$ (số liệu giả định). Tính $\mathrm{pH}$ (làm tròn đến hàng phần trăm).

b) Một dung dịch có $\mathrm{pH}=6{,}5$. Tìm $[\mathrm{H}^+]$, viết dưới dạng $c\cdot10^{-7}$ với $c$ làm tròn đến hàng phần mười.

::hint
**Kiến thức:** $\mathrm{pH}=-\lg[\mathrm{H}^+]$ và $[\mathrm{H}^+]=10^{-\mathrm{pH}}$.

**Gợi ý các bước:**
1. a) Tách $\lg\left(2\cdot10^{-4}\right)=\lg2-4$.
2. b) Viết $10^{-6{,}5}=10^{0{,}5}\cdot10^{-7}$.

::solution
Độ pH được tính bằng công thức $\mathrm{pH}=-\lg[\mathrm{H}^+]$, trong đó $[\mathrm{H}^+]$ tính bằng mol/lít.

a) Với $[\mathrm{H}^+]=2\cdot10^{-4}$, ta có
$$\mathrm{pH}=-\lg\left(2\cdot10^{-4}\right)=-\left(\lg2+\lg10^{-4}\right)=-(\lg2-4)=4-\lg2.$$
Dùng máy tính, $\lg2\approx0{,}3010$, nên $\mathrm{pH}\approx4-0{,}3010=3{,}699\approx3{,}70$ (làm tròn đến hàng phần trăm).

b) Với $\mathrm{pH}=6{,}5$, từ $-\lg[\mathrm{H}^+]=6{,}5$ ta có $\lg[\mathrm{H}^+]=-6{,}5$, suy ra
$$[\mathrm{H}^+]=10^{-6{,}5}=10^{0{,}5}\cdot10^{-7}.$$
Dùng máy tính, $10^{0{,}5}=\sqrt{10}\approx3{,}16\approx3{,}2$ (làm tròn đến hàng phần mười), nên $[\mathrm{H}^+]\approx3{,}2\cdot10^{-7}$.

Vậy a) $\mathrm{pH}\approx3{,}70$; b) $[\mathrm{H}^+]\approx3{,}2\cdot10^{-7}$ mol/lít.

**Đáp số.** a) $3{,}70$; b) $3{,}2\cdot10^{-7}$ mol/lít.
:::

:::exercise
Mức cường độ âm được tính bằng $L=10\lg\dfrac{I}{I_0}$ (đơn vị đề-xi-ben, dB), trong đó $I$ là cường độ âm (W/m²) và $I_0=10^{-12}$ W/m² là cường độ âm chuẩn (theo định nghĩa mức cường độ âm trong vật lí phổ thông).

a) Một âm có $I=10^{-5}$ W/m². Tính $L$.

b) Cường độ âm tăng gấp đôi thì mức cường độ âm tăng thêm bao nhiêu dB (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** $\lg\dfrac ab$, $\lg10^k=k$ và $\lg(2I)=\lg2+\lg I$.

**Gợi ý các bước:**
1. a) Tính $\dfrac{I}{I_0}$ rồi lấy $\lg$.
2. b) Tính $L'-L$ với $I'=2I$.

::solution
a) Ta có $\dfrac{I}{I_0}=10^{7}$ nên $L=10\lg10^7=70$ (dB).

b) Ta có $L'-L=10\lg\dfrac{2I}{I_0}-10\lg\dfrac{I}{I_0}=10\lg2\approx3{,}0$ (dB), không phụ thuộc vào $I$.

Vậy a) $L=70$ dB; b) tăng thêm khoảng $3{,}0$ dB.

**Đáp số.** a) $70$ dB; b) khoảng $3{,}0$ dB.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) $\log_28=3$.

b) $\log_2(4+4)=\log_24+\log_24$.

c) $\log_{1/2}4=2$.

d) $\log_35\cdot\log_53=1$.

::hint
**Kiến thức:** định nghĩa lôgarit; quy tắc tính chỉ có cho tích, thương, luỹ thừa; công thức đổi cơ số.

**Gợi ý các bước:**
1. a), c) Kiểm tra $a^{\alpha}=b$.
2. b) Tính hai vế riêng; d) dùng $\log_ab=\dfrac{1}{\log_ba}$.

::solution
a) **Đúng.** Theo định nghĩa, $\log_28=3$ khi và chỉ khi $2^3=8$, mà đẳng thức này đúng.

b) **Sai.** Vế trái là $\log_2(4+4)=\log_28=3$. Vế phải là $\log_24+\log_24=2+2=4$. Vì $3\neq4$ nên đẳng thức sai.

c) **Sai.** Nếu $\log_{1/2}4=2$ thì $\left(\dfrac12\right)^2=4$, nhưng $\left(\dfrac12\right)^2=\dfrac14\neq4$. Thực ra $4=\left(\dfrac12\right)^{-2}$ nên $\log_{1/2}4=-2$.

d) **Đúng.** Theo công thức đổi cơ số, $\log_35=\dfrac{1}{\log_53}$ (với $\log_53\neq0$). Do đó $\log_35\cdot\log_53=1$.

Vậy các mệnh đề a), d) đúng; các mệnh đề b), c) sai.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise
Dùng máy tính cầm tay, tính $\log_23$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $\log_ab=\dfrac{\ln b}{\ln a}$.

**Gợi ý các bước:**
1. Đổi sang cơ số $e$.
2. Bấm máy rồi làm tròn.

::solution
Máy tính cầm tay thường chỉ có phím $\ln$ và $\lg$, nên ta dùng công thức đổi cơ số $\log_ab=\dfrac{\ln b}{\ln a}$.

Ta có
$$\log_23=\frac{\ln3}{\ln2}\approx\frac{1{,}0986}{0{,}6931}\approx1{,}585.$$

Làm tròn đến hàng phần trăm, ta được $\log_23\approx1{,}58$.

Vậy $\log_23\approx1{,}58$.

**Đáp số.** $1{,}58$.
:::

:::exercise
Ôn lại luỹ thừa với số mũ hữu tỉ. Với $a>0$, $a\neq1$, tính:

a) $\log_a\left(a^2\sqrt{a}\right)$.

b) $\log_a\dfrac{a}{\sqrt[3]{a}}$.

::hint
**Kiến thức:** $\sqrt[n]{a}=a^{1/n}$ và $\log_a\left(a^{\alpha}\right)=\alpha$.

**Gợi ý các bước:**
1. Viết biểu thức trong dấu lôgarit dưới dạng $a^{r}$.
2. Đọc số mũ $r$.

::solution
Với $a>0$, $a\neq1$, ta dùng $\sqrt a=a^{\frac12}$, $\sqrt[3]a=a^{\frac13}$, $a^m\cdot a^n=a^{m+n}$, $\dfrac{a^m}{a^n}=a^{m-n}$ và $\log_aa^\alpha=\alpha$.

a) Ta có
$$a^2\sqrt a=a^2\cdot a^{\frac12}=a^{2+\frac12}=a^{\frac52}.$$
Do đó $\log_a\left(a^2\sqrt a\right)=\log_aa^{\frac52}=\dfrac52$.

b) Ta có
$$\frac{a}{\sqrt[3]a}=\frac{a^1}{a^{\frac13}}=a^{1-\frac13}=a^{\frac23}.$$
Do đó $\log_a\dfrac{a}{\sqrt[3]a}=\log_aa^{\frac23}=\dfrac23$.

Vậy a) $\dfrac52$; b) $\dfrac23$.

**Đáp số.** a) $\dfrac52$; b) $\dfrac23$.
:::

:::exercise Thử thách
Chứng minh rằng $\log_23$ là số vô tỉ.

::hint
**Kiến thức:** nếu $\log_23=\dfrac mn$ thì $2^{m/n}=3$; một số chẵn không thể bằng một số lẻ.

**Gợi ý các bước:**
1. Giả sử $\log_23=\dfrac mn$ với $m$, $n$ nguyên dương (vì $\log_23>0$).
2. Đưa về $2^m=3^n$ và xét tính chẵn lẻ.

::solution
Giả sử $\log_23=\dfrac mn$ với $m$, $n$ là các số nguyên dương. Khi đó $2^{m/n}=3$, suy ra $2^m=3^n$.

Vế trái là số chẵn (vì $m\ge1$) còn vế phải là số lẻ. Điều này mâu thuẫn.

Vậy $\log_23$ là số vô tỉ.

**Đáp số.** $\log_23$ là số vô tỉ.
:::

## Kiểm tra mini

:::quiz
::mc TH
Giá trị của $\log_{1/2}8$ bằng
A. $-\dfrac13$.
B. $3$.
C. $-3$.
D. $\dfrac13$.
::key C
Vì $\left(\dfrac12\right)^{-3}=8$ nên $\log_{1/2}8=-3$. Phương án B bỏ qua cơ số nhỏ hơn $1$, A và D lấy nghịch đảo của kết quả.

::mc TH
Tập xác định của hàm số $y=\lg(x^2-1)$ là
A. $(1; +\infty)$.
B. $(-1; 1)$.
C. $\mathbb{R}\setminus\{-1; 1\}$.
D. $(-\infty; -1)\cup(1; +\infty)$.
::key D
Cần $x^2-1>0$, tức $x<-1$ hoặc $x>1$. Phương án A quên nửa âm, B nhầm dấu, C coi điều kiện như điều kiện mẫu khác $0$.

::mc TH
Giá trị của $\log_62+\log_618$ bằng
A. $2$.
B. $\log_620$.
C. $\log_69$.
D. $6$.
::key A
Ta có $\log_62+\log_618=\log_6(2\cdot18)=\log_636=2$. Phương án B cộng các đối số, C chia thay vì nhân, D dừng ở $36$ mà không lấy lôgarit.

::mc VD
Cho $a=\log_23$. Khi đó $\log_618$ bằng
A. $\dfrac{2+a}{1+a}$.
B. $\dfrac{1+2a}{1+a}$.
C. $\dfrac{1+a}{1+2a}$.
D. $\dfrac{2a}{1+a}$.
::key B
$\log_618=\dfrac{\log_218}{\log_26}=\dfrac{1+2\log_23}{1+\log_23}=\dfrac{1+2a}{1+a}$. Phương án A là $\log_612$, C đảo tử và mẫu, D chỉ tính $\log_29$ ở tử.

::tf NB NB TH TH
Độ pH của dung dịch được tính bằng $\mathrm{pH}=-\lg[\mathrm{H}^+]$. Dung dịch A có $[\mathrm{H}^+]=10^{-3}$ mol/lít và dung dịch B có $[\mathrm{H}^+]=10^{-5}$ mol/lít. Xét tính đúng sai của các mệnh đề sau:
a) Độ pH của dung dịch A bằng $-3$.
b) Độ pH của dung dịch B bằng $5$.
c) Nồng độ $[\mathrm{H}^+]$ của dung dịch A gấp $100$ lần của dung dịch B.
d) Độ pH của dung dịch B lớn hơn độ pH của dung dịch A.
::key S Đ Đ Đ
a) Sai: $\mathrm{pH}=-\lg10^{-3}=3$, dấu trừ trong công thức triệt tiêu số mũ âm. b) Đúng: $-\lg10^{-5}=5$. c) Đúng: $\dfrac{10^{-3}}{10^{-5}}=100$. d) Đúng: $5>3$.

::sa VD
Giả sử lãi suất là $6\%$ một năm, lãi kép. Sau bao nhiêu năm số tiền gửi tăng gấp ba (làm tròn kết quả đến hàng phần mười)?
::key 18,9
Cần $1{,}06^t=3$, nên $t=\dfrac{\ln3}{\ln1{,}06}\approx\dfrac{1{,}0986}{0{,}0583}\approx18{,}9$ (năm).

::sa TH
Mức cường độ âm là $L=10\lg\dfrac{I}{I_0}$ (dB) với $I_0=10^{-12}$ W/m². Một âm có $I=3\cdot10^{-6}$ W/m². Tính $L$ (làm tròn kết quả đến hàng phần mười).
::key 64,8
$\dfrac{I}{I_0}=3\cdot10^6$ nên $L=10(\lg3+6)\approx10\cdot6{,}4771\approx64{,}8$ (dB).
:::
