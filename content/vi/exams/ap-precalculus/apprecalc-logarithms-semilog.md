---
title: Logarit, hàm ngược và mô hình bán logarit
description: AP Precalculus Unit 2, phần 2: hàm ngược, quy tắc logarit, đồ thị hàm logarit, phương trình mũ và logarit, đồ thị bán logarit.
minutes: 50
---

:::goals
- Tìm và giải thích hàm ngược, coi logarit là hàm ngược của hàm mũ.
- Tính logarit và dùng quy tắc tích, thương, luỹ thừa.
- Phác hoạ đồ thị hàm logarit: tập xác định, tiệm cận đứng, giao điểm với trục và phép biến hình.
- Giải phương trình mũ và phương trình logarit, loại các giá trị nằm ngoài tập xác định.
- Đọc đồ thị bán logarit và chuyển một quan hệ tuyến tính theo $\log y$ thành mô hình hàm mũ.
:::

Logarit trả lời câu hỏi ngược của hàm mũ: "luỹ thừa bao nhiêu?" Trong AP Precalculus, logarit xuất hiện theo ba cách: là hàm ngược, là công cụ giải phương trình có ẩn ở số mũ, và là thang đo đằng sau đồ thị bán logarit. Bài này đi qua cả ba, dựa trên các mô hình hàm mũ của bài trước.

## Hàm ngược và ý nghĩa của logarit

Nếu $f$ biến đầu vào $x$ thành đầu ra $y$ thì **hàm ngược** $f^{-1}$ biến $y$ trở lại $x$. Để tìm hàm ngược, viết $y=f(x)$, đổi chỗ $x$ và $y$, rồi giải tìm $y$. Đồ thị của $f$ và $f^{-1}$ đối xứng nhau qua đường thẳng $y=x$, và tập xác định của hàm này là tập giá trị của hàm kia.

Logarit là hàm ngược của hàm mũ:
$$y=\log_b x \iff b^y=x,\qquad b>0,\ b\ne1,\ x>0.$$
Như vậy $\log_b x$ là số mũ cần nâng $b$ lên để được $x$. Logarit thập phân là $\log x=\log_{10}x$; logarit tự nhiên là $\ln x=\log_e x$.

:::example Một hàm ngược
Với $f(x)=2x+6$, hàm ngược là
A. $f^{-1}(x)=\dfrac{x}{2}-6$
B. $f^{-1}(x)=\dfrac{x-6}{2}$
C. $f^{-1}(x)=\dfrac{1}{2x+6}$
D. $f^{-1}(x)=2x-6$

**Lời giải.** Viết $y=2x+6$ rồi đổi chỗ hai biến: $x=2y+6$.

Giải tìm $y$: $2y=x-6$, nên $y=\dfrac{x-6}{2}$. Kiểm tra: $f(4)=14$ và $f^{-1}(14)=\dfrac{8}{2}=4$.

Vậy $f^{-1}(x)=\dfrac{x-6}{2}$, chọn đáp án **B**. Phương án C là nghịch đảo $\dfrac{1}{f(x)}$, không phải hàm ngược.
:::

## Các quy tắc logarit

Với $b>0$, $b\ne1$ và $M,N>0$:

| Quy tắc | Công thức |
|---|---|
| Tích | $\log_b(MN)=\log_b M+\log_b N$ |
| Thương | $\log_b\dfrac MN=\log_b M-\log_b N$ |
| Luỹ thừa | $\log_b M^k=k\log_b M$ |
| Đổi cơ số | $\log_b M=\dfrac{\ln M}{\ln b}$ |

Các quy tắc này suy ra từ quy tắc luỹ thừa: nhân hai luỹ thừa cùng cơ số thì cộng số mũ, nên logarit của một tích bằng tổng các logarit.

:::example Gộp logarit
Giá trị của $\log_3 54-\log_3 2$ là
A. $3$
B. $\log_3 52$
C. $27$
D. $\dfrac{\log_3 54}{\log_3 2}$

**Lời giải.** Theo quy tắc thương, $\log_3 54-\log_3 2=\log_3\dfrac{54}{2}=\log_3 27$.

Vì $3^3=27$ nên $\log_3 27=3$.

Vậy giá trị cần tìm là $3$, chọn đáp án **A**. Phương án D chia hai logarit thay vì chia hai biểu thức dưới dấu logarit.
:::

## Giải phương trình mũ và phương trình logarit

- **Ẩn ở số mũ:** cô lập luỹ thừa, rồi lấy logarit hai vế (hoặc đưa về cùng cơ số).
- **Ẩn trong logarit:** gộp thành một logarit, viết lại dưới dạng mũ, giải, rồi **kiểm tra điều kiện**: mọi biểu thức dưới dấu logarit phải dương.

:::example Phương trình mũ
Giải các phương trình sau.
a) $5\cdot2^x=40$
b) $3^{x+1}=7$ (làm tròn $x$ đến ba chữ số thập phân)

**Lời giải.** a) Chia hai vế cho $5$, ta được $2^x=8=2^3$, nên $x=3$.

b) Lấy logarit tự nhiên hai vế, ta được $(x+1)\ln3=\ln7$, nên
$$x=\frac{\ln7}{\ln3}-1\approx1{,}771-1=0{,}771.$$

Vậy nghiệm là $x=3$ và $x\approx0{,}771$.
:::

:::example Một phương trình logarit
Giải phương trình $\log_4(x+2)+\log_4(x-4)=2$.

**Lời giải.** Theo quy tắc tích, phương trình trở thành $\log_4\big[(x+2)(x-4)\big]=2$, viết dưới dạng mũ là $(x+2)(x-4)=4^2=16$.

Khai triển: $x^2-2x-8=16$, nên $x^2-2x-24=0$, tức $(x-6)(x+4)=0$, cho $x=6$ hoặc $x=-4$.

Kiểm tra điều kiện: với $x=-4$, biểu thức $x-4=-8$ âm, nên loại $x=-4$; với $x=6$, hai biểu thức $8$ và $2$ đều dương.

Vậy phương trình có nghiệm duy nhất $x=6$.
:::

## Đồ thị hàm logarit và đồ thị bán logarit

Đồ thị $y=\log_b x$ với $b>1$ đi qua $(1,0)$ và $(b,1)$, đồng biến, lõm xuống và có tiệm cận đứng $x=0$. Phép biến hình áp dụng như thường lệ: $y=\log_b(x-h)+k$ có tập xác định $x>h$ và tiệm cận $x=h$.

:::graph Đồ thị $y=\log_2(x-3)+1$
alt: Một đường cong đồng biến bắt đầu sát tiệm cận đứng nét đứt x = 3, cắt trục hoành tại 3,5 và đi qua (4, 1), (7, 3)
x: -1..10
y: -3..4
plot: log(x-3)/log(2)+1 ; 3.01..10
vline: 3 ; dashed
point: (3.5, 0) "3,5" below-right
point: (4, 1) "(4, 1)" above-left
point: (7, 3) "(7, 3)" above-left
:::

Đồ thị trên là $y=\log_2(x-3)+1$: tập xác định $x>3$, tiệm cận $x=3$, và cắt trục hoành tại $x=3{,}5$, vì $\log_2(x-3)=-1$ cho $x-3=\tfrac12$.

Trên **đồ thị bán logarit**, trục tung biểu diễn $\log y$. Khi đó dữ liệu dạng hàm mũ $y=ab^x$ nằm trên một đường thẳng, vì $\log y=\log a+x\log b$: tung độ gốc là $\log a$ và hệ số góc là $\log b$.

:::example Từ đường thẳng bán logarit đến mô hình
Trên một đồ thị bán logarit, dữ liệu nằm trên đường thẳng $\log y=0{,}3x+1$. Mô hình hàm mũ nào phù hợp với dữ liệu?
A. $y=0{,}3\cdot10^x$
B. $y=1+10^{0{,}3x}$
C. $y=10\cdot(1{,}995)^x$
D. $y=0{,}3x+10$

**Lời giải.** Bỏ logarit: $y=10^{0{,}3x+1}=10^1\cdot\left(10^{0{,}3}\right)^x$.

Vì $10^{0{,}3}\approx1{,}995$ nên mô hình là $y\approx10\cdot(1{,}995)^x$: giá trị ban đầu là $10$ và $y$ gần như gấp đôi khi $x$ tăng $1$ đơn vị.

Vậy mô hình là $y=10\cdot(1{,}995)^x$, chọn đáp án **C**.
:::

:::warning Những cái bẫy thường gặp
- **$\log(M+N)$ không bằng $\log M+\log N$:** quy tắc tích nói về $\log(MN)$.
- **Kiểm tra điều kiện** sau khi giải mọi phương trình logarit.
- **Hàm ngược không phải nghịch đảo:** $f^{-1}(x)\ne\dfrac{1}{f(x)}$.
- **Hệ số góc bán logarit:** hệ số góc là $\log b$, nên $b=10^{\text{hệ số góc}}$, không phải chính hệ số góc.
- **Máy tính:** dùng dấu ngoặc, chẳng hạn $\ln(7)/\ln(3)$.
:::

:::terms
- inverse function | hàm ngược
- logarithm | logarit
- common / natural logarithm | logarit thập phân / logarit tự nhiên
- argument | biểu thức dưới dấu logarit
- change of base | đổi cơ số
- vertical asymptote | tiệm cận đứng
- semi-log plot | đồ thị bán logarit
- extraneous solution | nghiệm ngoại lai
:::

## Bài tập tương tự

:::exercise
Tìm hàm ngược của $f(x)=5x-3$ và kiểm tra bằng một giá trị.

::hint
**Kiến thức:** đổi chỗ $x$ và $y$, rồi giải tìm $y$.

::solution
Để tìm hàm ngược, ta viết $y=5x-3$ rồi đổi chỗ hai biến: $x=5y-3$. Khi đó $5y=x+3$, nên $f^{-1}(x)=\dfrac{x+3}{5}$.

Kiểm tra: $f(2)=7$ và $f^{-1}(7)=\dfrac{10}{5}=2$.

Vậy $f^{-1}(x)=\dfrac{x+3}{5}$.

**Đáp số.** $f^{-1}(x)=\dfrac{x+3}{5}$.
:::

:::exercise
Tính $\log_9 27$.

::hint
**Kiến thức:** viết cả $9$ và $27$ dưới dạng luỹ thừa của $3$.

::solution
Theo định nghĩa, $\log_9 27$ là số mũ cần nâng $9$ lên để được $27$. Đặt $\log_9 27=y$, khi đó $9^y=27$. Viết hai vế dưới dạng luỹ thừa của $3$: $3^{2y}=3^3$.

Do đó $2y=3$ và $y=\dfrac32$.

Vậy $\log_9 27=\dfrac32$.

**Đáp số.** $\dfrac32$.
:::

:::exercise
Giải phương trình $e^{2x}=10$, làm tròn $x$ đến ba chữ số thập phân.

::hint
**Kiến thức:** lấy logarit tự nhiên hai vế.

::solution
Ẩn nằm ở số mũ của $e$, nên ta lấy logarit tự nhiên hai vế: $2x=\ln10$, nên $x=\dfrac{\ln10}{2}$.

Vì $\ln10\approx2{,}3026$ nên $x\approx1{,}151$.

Vậy $x\approx1{,}151$.

**Đáp số.** $x\approx1{,}151$.
:::

:::exercise
Giải phương trình $\log_2 x+\log_2(x-2)=3$.

::hint
**Kiến thức:** gộp logarit, viết dưới dạng mũ, rồi kiểm tra điều kiện $x>2$.

::solution
Theo quy tắc tích, $\log_2\big[x(x-2)\big]=3$, nên $x(x-2)=2^3=8$.

Khi đó $x^2-2x-8=0$, tức $(x-4)(x+2)=0$, nên $x=4$ hoặc $x=-2$.

Điều kiện là $x>2$, nên loại $x=-2$.

Vậy phương trình có nghiệm $x=4$.

**Đáp số.** $x=4$.
:::

:::exercise
Nêu tập xác định, tiệm cận đứng và giao điểm với trục hoành của $y=\ln(x+1)-2$.

::hint
**Kiến thức:** biểu thức $x+1$ phải dương; cho $y=0$ để tìm giao điểm.

::solution
Biểu thức dưới dấu logarit phải dương, $x+1>0$, nên tập xác định là $x>-1$ và tiệm cận đứng là $x=-1$.

Cho $y=0$: $\ln(x+1)=2$, nên $x+1=e^2$ và $x=e^2-1\approx6{,}389$.

Vậy tập xác định là $x>-1$, tiệm cận là $x=-1$ và đồ thị cắt trục hoành tại $x=e^2-1\approx6{,}389$.

**Đáp số.** $x>-1$; $x=-1$; $x=e^2-1\approx6{,}389$.
:::

## Bài tập vận dụng

:::exercise
Độ pH của một dung dịch là $\text{pH}=-\log\left[\text{H}^+\right]$. Tính pH của dung dịch có $\left[\text{H}^+\right]=3{,}2\times10^{-4}$.

::hint
**Kiến thức:** $\log\left(3{,}2\times10^{-4}\right)=\log3{,}2-4$.

::solution
Theo quy tắc tích, $\log\left(3{,}2\times10^{-4}\right)=\log3{,}2+\log10^{-4}\approx0{,}5051-4=-3{,}4949$.

Do đó $\text{pH}=-(-3{,}4949)\approx3{,}4949$, làm tròn đến hai chữ số thập phân thành $3{,}49$.

Vậy dung dịch có pH khoảng $3{,}49$: đây là dung dịch axit.

**Đáp số.** Khoảng $3{,}49$.
:::

:::exercise
Một chất phóng xạ có chu kì bán rã $8$ ngày. Sau bao lâu thì chỉ còn $10\%$ lượng chất?

::hint
**Kiến thức:** giải $\left(\tfrac12\right)^{t/8}=0{,}1$ bằng logarit.

::solution
Tỉ lệ còn lại sau $t$ ngày là $\left(\tfrac12\right)^{t/8}$. Cho tỉ lệ này bằng $0{,}1$ rồi lấy logarit:
$$\frac t8\log0{,}5=\log0{,}1,\qquad t=\frac{8\log0{,}1}{\log0{,}5}=\frac{8}{\log2}\approx26{,}6.$$

Vậy sau khoảng $26{,}6$ ngày thì còn $10\%$.

**Đáp số.** Khoảng $26{,}6$ ngày.
:::

:::exercise
Hai trận động đất có độ lớn $7$ và $5$ theo thang đo $M=\log\dfrac{A}{A_0}$, với $A$ là biên độ. Biên độ của trận mạnh hơn lớn gấp bao nhiêu lần?

::hint
**Kiến thức:** $M_1-M_2=\log\dfrac{A_1}{A_2}$.

::solution
Trừ hai công thức, ta được $M_1-M_2=\log A_1-\log A_2=\log\dfrac{A_1}{A_2}$, vì hai số hạng $\log A_0$ triệt tiêu.

Do đó $\log\dfrac{A_1}{A_2}=7-5=2$, và $\dfrac{A_1}{A_2}=10^2=100$.

Vậy biên độ của trận động đất mạnh hơn lớn gấp $100$ lần.

**Đáp số.** $100$ lần.
:::

:::exercise Thử thách
Trên một đồ thị bán logarit (cơ số $10$), dữ liệu nằm trên đường thẳng đi qua $(0,\log5)$ và $(4,\log80)$. Tìm mô hình hàm mũ $y=ab^x$.

::hint
**Kiến thức:** tung độ gốc cho $\log a$; hệ số góc cho $\log b$.

::solution
Vì $\log y=\log a+x\log b$ nên tung độ gốc cho $\log a=\log5$, suy ra $a=5$.

Hệ số góc là $\dfrac{\log80-\log5}{4}=\dfrac{\log16}{4}=\log16^{1/4}=\log2$, nên $b=2$.

Vậy mô hình là $y=5\cdot2^x$. Kiểm tra: $5\cdot2^4=80$.

**Đáp số.** $y=5\cdot2^x$.
:::

:::quiz
::mc
Giá trị của $\log_2 32$ là
A. $16$
B. $5$
C. $6$
D. $64$
::key B
$2^5=32$.

::mc
Biểu thức nào bằng $\log M+\log N-\log P$?
A. $\log(M+N-P)$
B. $\dfrac{\log MN}{\log P}$
C. $\log\dfrac{MN}{P}$
D. $\log(MNP)$
::key C
Dùng quy tắc tích, rồi quy tắc thương.

::mc
Đồ thị $y=\log_3(x+2)$ có tiệm cận đứng là
A. $x=2$
B. $x=-2$
C. $y=-2$
D. $x=0$
::key B
Biểu thức $x+2$ bằng $0$ tại $x=-2$.

::mc
Nếu $f(x)=e^x$ thì $f^{-1}(x)$ là
A. $\ln x$
B. $\dfrac{1}{e^x}$
C. $e^{-x}$
D. $\log x$
::key A
Logarit tự nhiên là hàm ngược của $e^x$.

::tf
Cho $g(x)=\ln x$. Xét tính đúng sai của các mệnh đề sau:
a) Tập xác định của $g$ là $x>0$.
b) $g(1)=0$.
c) Đồ thị $g$ lõm lên.
d) $g(e^3)=3$.
::key T T F T
$\ln x$ đồng biến nhưng đồ thị lõm xuống.

::sa
Tính $\log_3 81$.
::key 4
$3^4=81$.

::sa
Giải phương trình $2^x=64$.
::key 6
$2^6=64$.
:::
