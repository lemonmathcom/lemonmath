---
title: Tổng Riemann, tích luỹ và định lí cơ bản của giải tích
description: AP Calculus Unit 6, phần 1: tổng Riemann và tổng hình thang từ bảng số, tích phân là lượng tích luỹ, hai phần của định lí cơ bản.
minutes: 50
---

:::goals
- Xấp xỉ tích phân xác định bằng tổng trái, tổng phải, tổng điểm giữa và tổng hình thang, kể cả từ bảng số có khoảng không đều.
- Xác định một giá trị xấp xỉ là lớn hơn hay nhỏ hơn giá trị thật.
- Hiểu $\displaystyle\int_a^b r(t)\,dt$ là lượng thay đổi ròng của một đại lượng, kèm đơn vị.
- Dùng định lí cơ bản của giải tích để tính tích phân và lấy đạo hàm của hàm tích luỹ.
- Khảo sát $g(x)=\displaystyle\int_a^x f(t)\,dt$ từ đồ thị của $f$.
:::

Unit 6 đặt câu hỏi ngược với đạo hàm: thay vì "đại lượng thay đổi nhanh đến mức nào?", ta hỏi "đã tích luỹ được bao nhiêu?". Ý tưởng này có mặt khắp đề AP. Gần như phần tự luận nào cũng mở đầu bằng một tốc độ cho dưới dạng bảng hoặc công thức, rồi hỏi một tổng Riemann, một lượng thay đổi toàn phần hay giá trị của đại lượng ở thời điểm sau. Bài này trình bày phần cốt lõi của unit; bài tiếp theo về kĩ thuật tính tích phân sẽ nói về phép đổi biến và các cách tìm nguyên hàm khác.

## Tổng Riemann từ bảng số

Để xấp xỉ $\displaystyle\int_a^b f(x)\,dx$, chia $[a,b]$ thành các khoảng nhỏ rồi cộng các tích (độ rộng) × (chiều cao). Chiều cao lấy ở đầu mút trái, đầu mút phải hoặc điểm giữa; **tổng hình thang** lấy trung bình chiều cao bên trái và bên phải. Các khoảng nhỏ không cần bằng nhau: bảng số trong đề AP thường có các mốc thời gian không đều.

:::example Nước chảy vào bể
Nước chảy vào một bể với tốc độ $R(t)$ lít mỗi phút. Bảng dưới cho một số giá trị.

| $t$ (phút) | $0$ | $2$ | $5$ | $7$ | $10$ |
|---|---|---|---|---|---|
| $R(t)$ (lít mỗi phút) | $4$ | $7$ | $9$ | $6$ | $5$ |

Dùng tổng hình thang với bốn khoảng trong bảng để xấp xỉ $\displaystyle\int_0^{10}R(t)\,dt$, rồi giải thích ý nghĩa của nó.

**Lời giải.** Độ rộng các khoảng là $2$, $3$, $2$, $3$.
$$2\cdot\frac{4+7}{2}+3\cdot\frac{7+9}{2}+2\cdot\frac{9+6}{2}+3\cdot\frac{6+5}{2}=11+24+15+16{,}5=66{,}5.$$
Khoảng $66{,}5$ lít nước chảy vào bể trong $10$ phút đầu. Để so sánh, tổng trái bằng $65$ và tổng phải bằng $68$.
:::

:::example Lớn hơn hay nhỏ hơn?
Hàm số $f$ đồng biến trên $[0,4]$. Gọi $L$ và $R$ là tổng Riemann trái và phải với bốn khoảng bằng nhau. Khẳng định nào chắc chắn đúng?
A. $L<\displaystyle\int_0^4 f(x)\,dx<R$
B. $R<\displaystyle\int_0^4 f(x)\,dx<L$
C. Cả hai tổng đều lớn hơn tích phân.
D. Cả hai tổng đều nhỏ hơn tích phân.

**Lời giải.** Trên mỗi khoảng nhỏ của một hàm đồng biến, chiều cao bên trái là giá trị nhỏ nhất và chiều cao bên phải là giá trị lớn nhất: đáp án **A**. Với hình thang, tính lồi lõm quyết định: nếu $f$ lõm lên (concave up) thì mỗi dây cung nằm trên đồ thị và tổng hình thang lớn hơn giá trị thật; nếu $f$ lõm xuống thì tổng hình thang nhỏ hơn.
:::

## Định lí cơ bản của giải tích

:::theorem Định lí cơ bản của giải tích
**Phần 1.** Nếu $f$ liên tục thì $\dfrac{d}{dx}\displaystyle\int_a^x f(t)\,dt=f(x)$. Kết hợp quy tắc chuỗi: $\dfrac{d}{dx}\displaystyle\int_a^{u(x)}f(t)\,dt=f\big(u(x)\big)\cdot u'(x)$.

**Phần 2.** Nếu $F'=f$ và $f$ liên tục trên $[a,b]$ thì $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.
:::

:::note Các nguyên hàm cần thuộc lòng
$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\quad\int\frac1x\,dx=\ln|x|+C,$$
$$\int e^x\,dx=e^x+C,\quad\int\cos x\,dx=\sin x+C,\quad\int\sin x\,dx=-\cos x+C,$$
$$\int\sec^2x\,dx=\tan x+C,\quad\int\frac{dx}{1+x^2}=\arctan x+C.$$
:::

:::example Tính tích phân bằng Phần 2
Tích phân $\displaystyle\int_1^3\left(3x^2-2x\right)dx$ bằng
A. $16$
B. $20$
C. $18$
D. $26$

**Lời giải.** Một nguyên hàm là $x^3-x^2$. Tích phân bằng $(27-9)-(1-1)=18$: đáp án **C**.
:::

:::example Lấy đạo hàm bằng Phần 1
Cho $g(x)=\displaystyle\int_0^{x^2}\sin t\,dt$. Tìm $g'(x)$.

**Lời giải.** Cận trên là $u=x^2$, nên $g'(x)=\sin\left(x^2\right)\cdot2x=2x\sin\left(x^2\right)$. Không cần tính tích phân trước.
:::

## Hàm tích luỹ đọc từ đồ thị

:::graph Đồ thị của $f$ trên $[0,6]$, gồm ba đoạn thẳng
alt: Một đoạn nằm ngang ở độ cao 2 từ x = 0 đến 2, rồi một đoạn đi xuống tới -2 tại x = 4, cắt trục hoành tại 3, rồi một đoạn đi lên về 0 tại x = 6
x: -0.5..6.5
y: -2.5..2.5
plot: 2 ; 0..2
plot: 6 - 2x ; 2..4
plot: x - 6 ; 4..6
fill: 2 ; 0 ; 0..2
fill: 6 - 2x ; 0 ; 2..4
fill: x - 6 ; 0 ; 4..6
point: (3, 0) "3" above-right
:::

:::example Đọc diện tích thành giá trị của g
Đồ thị của $f$ cho ở trên. Đặt $g(x)=\displaystyle\int_0^x f(t)\,dt$.

a) Tính $g(2)$, $g(3)$, $g(4)$ và $g(6)$.
b) Trên $[0,6]$, $g$ đạt giá trị lớn nhất tại $x$ nào? Giải thích.

**Lời giải.** a) Phần diện tích phía trên trục hoành mang dấu dương, phía dưới mang dấu âm. $g(2)=4$ (hình chữ nhật). $g(3)=4+1=5$ (tam giác diện tích $1$). $g(4)=5-1=4$. $g(6)=4-2=2$.

b) $g'(x)=f(x)$, chỉ đổi dấu từ dương sang âm tại $x=3$. Các ứng viên: $g(0)=0$, $g(3)=5$, $g(6)=2$. Giá trị lớn nhất là $5$, đạt tại $x=3$.
:::

## Lượng thay đổi ròng và tổng quãng đường

Nếu $r$ là tốc độ thay đổi của đại lượng $Q$ thì $\displaystyle\int_a^b r(t)\,dt=Q(b)-Q(a)$ là **lượng thay đổi ròng**, và $Q(b)=Q(a)+\displaystyle\int_a^b r(t)\,dt$. Với một hạt có vận tốc $v$: $\displaystyle\int_a^b v(t)\,dt$ là độ dời, còn $\displaystyle\int_a^b|v(t)|\,dt$ là tổng quãng đường.

:::example Độ dời và quãng đường
Một hạt có vận tốc $v(t)=t-2$ mét mỗi giây, $0\le t\le5$. Tìm độ dời và tổng quãng đường hạt đi được.

**Lời giải.** Độ dời: $\displaystyle\int_0^5(t-2)\,dt=\left[\frac{t^2}{2}-2t\right]_0^5=12{,}5-10=2{,}5$ mét.

Quãng đường: $v<0$ trên $(0,2)$ và $v>0$ trên $(2,5)$, nên quãng đường bằng $\left|\displaystyle\int_0^2(t-2)\,dt\right|+\displaystyle\int_2^5(t-2)\,dt=2+4{,}5=6{,}5$ mét.
:::

:::warning Những cái bẫy thường gặp
- **Coi các khoảng bằng nhau.** Bảng có $t=0, 2, 5, 7, 10$ thì độ rộng là $2, 3, 2, 3$.
- **Quên lượng ban đầu.** "Lúc $t=10$ trong bể có bao nhiêu nước?" nghĩa là lượng ban đầu cộng với tích phân.
- **Diện tích dưới trục hoành.** Mang dấu âm trong $\displaystyle\int f$, nhưng mang dấu dương khi tính tổng quãng đường.
- **Dùng Phần 1 mà quên quy tắc chuỗi.** $\dfrac{d}{dx}\displaystyle\int_0^{x^2}f(t)\,dt=f\left(x^2\right)\cdot2x$, không phải $f\left(x^2\right)$.
- **Đơn vị.** Nếu $R$ tính bằng lít mỗi phút và $t$ tính bằng phút thì $\displaystyle\int R\,dt$ tính bằng lít.
:::

:::tip Ở phần được dùng máy tính
Khi tốc độ cho bằng công thức trong phần được dùng máy tính, hãy viết tích phân kèm cận trước, ví dụ $\displaystyle\int_0^{10}R(t)\,dt$, rồi mới ghi giá trị chính xác đến ba chữ số thập phân. Riêng việc viết đúng tích phân đã được một điểm.
:::

:::terms
- Riemann sum | tổng Riemann
- left / right / midpoint sum | tổng trái / phải / điểm giữa
- trapezoidal sum | tổng hình thang
- definite integral | tích phân xác định
- accumulation function | hàm tích luỹ
- fundamental theorem of calculus | định lí cơ bản của giải tích
- net change | biến thiên toàn phần (lượng thay đổi ròng)
- antiderivative | nguyên hàm
:::

## Bài tập tương tự

:::exercise Tự luận
Với $f(x)=x^2$ trên $[0,3]$, tính tổng Riemann trái và phải với ba khoảng bằng nhau, rồi so sánh với giá trị đúng của $\displaystyle\int_0^3x^2\,dx$.

::hint
**Cần nhớ:** độ rộng $1$; chiều cao tại $0, 1, 2$ (trái) hoặc $1, 2, 3$ (phải).

**Các bước:**
1. Trái: $0+1+4$. Phải: $1+4+9$.
2. Giá trị đúng: $\left[\dfrac{x^3}{3}\right]_0^3$.

::solution
Tổng trái bằng $5$, tổng phải bằng $14$, giá trị đúng bằng $9$. Đúng như dự đoán với hàm đồng biến: $5<9<14$.
:::

:::exercise Trắc nghiệm
Tích phân $\displaystyle\int_0^{\pi}\sin x\,dx$ bằng
A. $0$
B. $-2$
C. $1$
D. $2$

::hint
**Cần nhớ:** một nguyên hàm của $\sin x$ là $-\cos x$.

**Các bước:**
1. $-\cos\pi-(-\cos0)$.

::solution
$-(-1)+1=2$: đáp án **D**.
:::

:::exercise Tự luận
Cho $F(x)=\displaystyle\int_1^x\left(t^3+1\right)dt$. Tính $F'(2)$ và $F(1)$.

::hint
**Cần nhớ:** Phần 1 của định lí cơ bản, và tích phân từ $1$ đến $1$.

::solution
$F'(x)=x^3+1$, nên $F'(2)=9$. $F(1)=0$ vì khoảng lấy tích phân có độ rộng bằng không.
:::

:::exercise Trắc nghiệm
Nếu $\displaystyle\int_0^5f(x)\,dx=7$ và $\displaystyle\int_0^2f(x)\,dx=3$ thì $\displaystyle\int_2^5\big(2f(x)+1\big)\,dx$ bằng
A. $8$
B. $11$
C. $9$
D. $14$

::hint
**Cần nhớ:** tính cộng theo khoảng và tính tuyến tính của tích phân.

**Các bước:**
1. $\displaystyle\int_2^5f=7-3=4$.
2. $\displaystyle\int_2^51\,dx=3$.

::solution
$2(4)+3=11$: đáp án **B**. Phương án A quên số hạng $+1$.
:::

:::exercise Tự luận
Xấp xỉ $\displaystyle\int_0^4x^2\,dx$ bằng tổng điểm giữa với hai khoảng bằng nhau. Giá trị xấp xỉ lớn hơn hay nhỏ hơn giá trị thật?

::hint
**Cần nhớ:** điểm giữa là $1$ và $3$, độ rộng $2$.

**Các bước:**
1. $2\left(1^2+3^2\right)$.
2. Giá trị đúng: $\dfrac{64}{3}$.

::solution
Tổng điểm giữa bằng $2(1+9)=20$, còn giá trị đúng là $\dfrac{64}{3}\approx21{,}33$, nên giá trị xấp xỉ nhỏ hơn. Với hàm lõm lên, tổng điểm giữa luôn nhỏ hơn giá trị thật.
:::

## Bài tập vận dụng

:::exercise Bể vừa chảy vào vừa chảy ra
Lúc $t=0$, bể chứa $50$ lít nước. Nước chảy vào với tốc độ $E(t)=4t$ lít mỗi phút và chảy ra đều $10$ lít mỗi phút, với $0\le t\le8$.
a) Lúc $t=8$ trong bể có bao nhiêu nước?
b) Lượng nước ít nhất vào lúc nào và bằng bao nhiêu? Giải thích.

::hint
**Cần nhớ:** lượng nước $=50+\displaystyle\int_0^t(4s-10)\,ds$; giá trị nhỏ nhất đạt tại chỗ tốc độ ròng đổi dấu từ âm sang dương.

**Các bước:**
1. $\displaystyle\int_0^8(4t-10)\,dt=\left[2t^2-10t\right]_0^8$.
2. $4t-10=0$ khi $t=2{,}5$.

::solution
a) $50+(128-80)=98$ lít.

b) Tốc độ ròng $4t-10$ đổi dấu từ âm sang dương tại $t=2{,}5$. Các ứng viên: $50$ lúc $t=0$, $50+(12{,}5-25)=37{,}5$ lúc $t=2{,}5$, và $98$ lúc $t=8$. Lượng nước ít nhất là $37{,}5$ lít, lúc $t=2{,}5$ phút.
:::

:::exercise Vị trí từ vận tốc
Một hạt có vận tốc $v(t)=3t^2-12t$ mét mỗi giây, $0\le t\le5$, và $x(0)=4$.
a) Tính $x(5)$.
b) Tính tổng quãng đường hạt đi được.

::hint
**Cần nhớ:** $x(5)=x(0)+\displaystyle\int_0^5v(t)\,dt$; $v<0$ trên $(0,4)$.

**Các bước:**
1. Nguyên hàm: $t^3-6t^2$.
2. Tách quãng đường tại $t=4$.

::solution
a) $\displaystyle\int_0^5v\,dt=125-150=-25$, nên $x(5)=4-25=-21$.

b) $\displaystyle\int_0^4v\,dt=64-96=-32$ và $\displaystyle\int_4^5v\,dt=-25-(-32)=7$. Quãng đường $=32+7=39$ mét.
:::

:::exercise Hai cận đều thay đổi
Cho $F(x)=\displaystyle\int_x^{2x}t^2\,dt$. Tìm $F'(x)$ bằng hai cách: dùng định lí cơ bản, và tính tích phân trước.

::hint
**Cần nhớ:** $\displaystyle\int_x^{2x}=\int_0^{2x}-\int_0^x$.

**Các bước:**
1. Định lí cơ bản: $(2x)^2\cdot2-x^2$.
2. Tính trực tiếp: $F(x)=\dfrac{(2x)^3-x^3}{3}$.

::solution
Định lí cơ bản: $F'(x)=8x^2-x^2=7x^2$. Tính trực tiếp: $F(x)=\dfrac{7x^3}{3}$, nên $F'(x)=7x^2$. Hai cách cho cùng kết quả.
:::

:::exercise Thử thách
Vận tốc của một ô tô, tính bằng mét mỗi giây, được ghi lại sau mỗi $10$ giây.

| $t$ (giây) | $0$ | $10$ | $20$ | $30$ | $40$ |
|---|---|---|---|---|---|
| $v(t)$ (mét mỗi giây) | $0$ | $8$ | $14$ | $18$ | $20$ |

Dùng tổng hình thang để ước lượng quãng đường ô tô đi được trong $40$ giây. Nếu đồ thị của $v$ lõm xuống thì giá trị ước lượng lớn hơn hay nhỏ hơn giá trị thật?

::hint
**Cần nhớ:** bốn hình thang có độ rộng $10$; vị trí của dây cung so với một đồ thị lõm xuống.

::solution
$10\cdot\dfrac{0+8}{2}+10\cdot\dfrac{8+14}{2}+10\cdot\dfrac{14+18}{2}+10\cdot\dfrac{18+20}{2}=40+110+160+190=500$ mét. Với đồ thị lõm xuống, mỗi dây cung nằm dưới đồ thị, nên $500$ mét nhỏ hơn giá trị thật.
:::

:::quiz
::mc
Tích phân $\displaystyle\int_1^4\frac{1}{\sqrt x}\,dx$ bằng
A. $1$
B. $2$
C. $4$
D. $\dfrac32$
::key B
Một nguyên hàm là $2\sqrt x$: $2(2)-2(1)=2$.

::mc
$\dfrac{d}{dx}\displaystyle\int_0^{3x}e^{t^2}\,dt$ bằng
A. $e^{9x^2}$
B. $3e^{3x^2}$
C. $3e^{9x^2}$
D. $6xe^{9x^2}$
::key C
Phần 1 của định lí cơ bản kết hợp quy tắc chuỗi: $e^{(3x)^2}\cdot3$.

::mc
Nếu $f$ nghịch biến trên $[a,b]$ thì tổng Riemann phải của $\displaystyle\int_a^bf(x)\,dx$
A. bằng tích phân
B. lớn hơn tích phân
C. có thể lớn hơn hoặc nhỏ hơn
D. nhỏ hơn tích phân
::key D
Với hàm nghịch biến, đầu mút phải cho chiều cao nhỏ nhất trên mỗi khoảng.

::mc
Tích phân $\displaystyle\int_{-2}^{2}\left(x^3+1\right)dx$ bằng
A. $4$
B. $0$
C. $8$
D. $2$
::key A
$x^3$ là hàm lẻ nên tích phân trên $[-2,2]$ bằng $0$; tích phân của $1$ bằng $4$.

::tf
Cho $g(x)=\displaystyle\int_1^x(t-2)\,dt$.
a) $g(1)=0$.
b) $g'(3)=1$.
c) $g$ đạt cực tiểu tại $x=2$.
d) $g(3)=2$.
::key T T T F
a) Đúng: khoảng có độ rộng bằng không. b) Đúng: $g'(x)=x-2$. c) Đúng: $g'$ đổi dấu từ âm sang dương tại $x=2$. d) Sai: $g(3)=\left[\dfrac{t^2}{2}-2t\right]_1^3=-1{,}5-(-1{,}5)=0$.

::sa
Tính $\displaystyle\int_0^2\left(3x^2+1\right)dx$.
::key 10
$\left[x^3+x\right]_0^2=8+2=10$.

::sa
Hàm số $f$ có $f(0)=1$, $f(1)=3$ và $f(2)=7$. Tính tổng hình thang của $\displaystyle\int_0^2f(x)\,dx$ với hai khoảng.
::key 7
$1\cdot\dfrac{1+3}{2}+1\cdot\dfrac{3+7}{2}=2+5=7$.
:::
