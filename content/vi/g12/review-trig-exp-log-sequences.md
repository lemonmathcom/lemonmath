---
title: "Ôn tập: lượng giác, mũ – lôgarit, cấp số"
description: Ôn hàm số và phương trình lượng giác, mũ và lôgarit cùng mô hình tăng trưởng, cấp số cộng, cấp số nhân và giới hạn theo dạng câu hỏi thi tốt nghiệp.
minutes: 40
---

:::goals
- Dùng đúng công thức lượng giác, giải phương trình lượng giác cơ bản và đếm nghiệm trên một đoạn.
- Biến đổi luỹ thừa, lôgarit; giải phương trình, bất phương trình mũ và lôgarit có điều kiện.
- Lập và giải mô hình tăng trưởng, suy giảm theo hàm số mũ (lãi kép, vi khuẩn, thuốc trong máu).
- Dùng công thức cấp số cộng, cấp số nhân, tổng cấp số nhân lùi vô hạn và các giới hạn cơ bản.
:::

Các chủ đề lớp 11 này ít khi đứng thành một câu dài, nhưng xuất hiện rải rác khắp đề. Ở Phần I, thường có hai đến bốn câu hỏi ngắn: một công thức lượng giác, một phương trình lôgarit, một số hạng của cấp số, một giới hạn. Ở Phần II hoặc Phần III, đề hay có một mô hình thực tế dùng hàm số mũ hoặc hàm số lượng giác. Tổng cộng các chủ đề này thường chiếm khoảng $1$ đến $1{,}5$ điểm.

Bài ôn này nhắc lại công thức của từng mảng ngắn gọn, rồi làm ví dụ đúng như câu trong đề.

## Hàm số và phương trình lượng giác

:::theorem Công thức và phương trình cơ bản
- $\sin^2x+\cos^2x=1$; $\cos2x=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1$; $\sin2x=2\sin x\cos x$.
- $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$.
- $\sin x=\sin\alpha\iff x=\alpha+k2\pi$ hoặc $x=\pi-\alpha+k2\pi$; $\cos x=\cos\alpha\iff x=\pm\alpha+k2\pi$; $\tan x=\tan\alpha\iff x=\alpha+k\pi$ ($k\in\mathbb{Z}$).
- Hàm số $y=A\sin(\omega x+\varphi)$ và $y=A\cos(\omega x+\varphi)$ có chu kì $\dfrac{2\pi}{|\omega|}$, giá trị nằm trong $[-|A|; |A|]$.
:::

Khi đề hỏi số nghiệm trên một đoạn, ta viết họ nghiệm rồi thử từng giá trị $k$ nguyên, hoặc nhìn đường tròn lượng giác.

:::example Trắc nghiệm: phương trình côsin cơ bản
Nghiệm của phương trình $2\cos x+1=0$ là

**A.** $x=\pm\dfrac{2\pi}{3}+k2\pi$, $k\in\mathbb{Z}$.

**B.** $x=\pm\dfrac{\pi}{3}+k2\pi$, $k\in\mathbb{Z}$.

**C.** $x=\dfrac{2\pi}{3}+k\pi$, $k\in\mathbb{Z}$.

**D.** $x=\pm\dfrac{2\pi}{3}+k\pi$, $k\in\mathbb{Z}$.

**Lời giải.** Đưa về dạng $\cos x=\cos\alpha$ với $\cos\dfrac{2\pi}{3}=-\dfrac12$:

$$2\cos x+1=0\iff\cos x=-\frac12=\cos\frac{2\pi}{3}\iff x=\pm\frac{2\pi}{3}+k2\pi.$$

Chọn **A**. Phương án B ứng với $\cos x=\dfrac12$ (quên dấu trừ); phương án C và D dùng nhầm chu kì $\pi$ của hàm $\tan$.
:::

Hàm số lượng giác mô tả rất tốt các chuyển động lặp lại, chẳng hạn một cabin vòng quay.

:::graph Độ cao cabin $h(t)=22-20\cos\dfrac{\pi t}{10}$ trong một vòng
alt: Đồ thị hình sin trên đoạn từ 0 đến 20 phút, bắt đầu ở độ cao 2 mét, lên cao nhất 42 mét tại t bằng 10 rồi trở về 2 mét; có đường nét đứt nằm ngang ở độ cao 32 mét
x: 0..20
y: 0..45
plot: 22 - 20*cos(pi*x/10) ; 0..20
hline: 32 ; dashed
point: (0, 2) "(0; 2)" right
point: (10, 42) "(10; 42)" below
:::

:::example Đúng/Sai: vòng quay quan sát
Một vòng quay quan sát quay đều. Độ cao (mét) của một cabin so với mặt đất sau $t$ phút là $h(t)=22-20\cos\dfrac{\pi t}{10}$, $t\ge0$.

a) Độ cao thấp nhất của cabin là $0$ m.

b) Mỗi vòng quay mất $20$ phút.

c) Tại thời điểm $t=10$ phút, cabin ở độ cao $42$ m.

d) Trong một vòng, thời gian cabin ở độ cao từ $32$ m trở lên là $10$ phút.

**Lời giải.** Ta dùng $-1\le\cos\dfrac{\pi t}{10}\le1$ và công thức chu kì.

a) **Sai.** Khi $\cos\dfrac{\pi t}{10}=1$, độ cao thấp nhất là $22-20=2$ m.

b) **Đúng.** Chu kì là $\dfrac{2\pi}{\pi/10}=20$ phút.

c) **Đúng.** $h(10)=22-20\cos\pi=22+20=42$ m.

d) **Sai.** Xét $t\in[0; 20]$, giải bất phương trình:

$$22-20\cos\frac{\pi t}{10}\ge32\iff\cos\frac{\pi t}{10}\le-\frac12\iff\frac{2\pi}{3}\le\frac{\pi t}{10}\le\frac{4\pi}{3}\iff\frac{20}{3}\le t\le\frac{40}{3}.$$

Thời gian đó là $\dfrac{40}{3}-\dfrac{20}{3}=\dfrac{20}{3}\approx6{,}67$ phút, không phải $10$ phút.

Vậy đáp án là a) Sai, b) Đúng, c) Đúng, d) Sai.
:::

## Hàm số mũ và hàm số lôgarit

:::theorem Luỹ thừa, lôgarit và mô hình
- Với $0<a\neq1$, $b, c>0$: $\log_a(bc)=\log_ab+\log_ac$, $\log_a\dfrac bc=\log_ab-\log_ac$, $\log_ab^\alpha=\alpha\log_ab$, $\log_ab=\dfrac{\log_cb}{\log_ca}$.
- $a^x=b\iff x=\log_ab$ (cần $b>0$); $\log_ax=b\iff x=a^b$ (cần $x>0$).
- Khi giải bất phương trình: với $a>1$ giữ nguyên chiều; với $0<a<1$ **đổi chiều**.
- Lãi kép: $A=A_0(1+r)^n$. Tăng trưởng hoặc suy giảm: $N(t)=N_0e^{kt}$ hoặc $N(t)=N_0\cdot q^t$ (tăng khi $q>1$, giảm khi $0<q<1$).
:::

Với phương trình lôgarit, việc đầu tiên luôn là **đặt điều kiện**. Bỏ bước này là cách mất điểm phổ biến nhất.

:::example Trắc nghiệm: phương trình lôgarit
Tập nghiệm của phương trình $\log_2(x-1)+\log_2(x+1)=3$ là

**A.** $\{3\}$.

**B.** $\{-3; 3\}$.

**C.** $\{-3\}$.

**D.** $\{\sqrt7\}$.

**Lời giải.** Điều kiện $x>1$. Gộp tổng hai lôgarit thành lôgarit của một tích:

$$\log_2\big[(x-1)(x+1)\big]=3\iff x^2-1=2^3=8\iff x=3\ \text{hoặc}\ x=-3.$$

Đối chiếu điều kiện $x>1$, chỉ nhận $x=3$. Chọn **A**. Phương án B quên điều kiện; phương án D tính nhầm $2^3$ thành $2\cdot3$.
:::

:::example Trả lời ngắn: thuốc trong máu
Sau khi tiêm, nồng độ một loại thuốc trong máu của bệnh nhân là $C(t)=40\cdot0{,}8^t$ (mg/L), với $t$ là số giờ kể từ lúc tiêm. Sau bao nhiêu giờ thì nồng độ thuốc giảm còn $5$ mg/L (làm tròn kết quả đến hàng phần mười)?

**Lời giải.** Ta giải phương trình mũ bằng cách lấy lôgarit:

$$40\cdot0{,}8^t=5\iff0{,}8^t=\frac18\iff t=\log_{0{,}8}\frac18=\frac{\ln0{,}125}{\ln0{,}8}\approx9{,}32.$$

Vậy sau khoảng $9{,}3$ giờ (ghi $9{,}3$).

**Kiểm tra.** Mỗi giờ nồng độ còn $80\%$, nên sau $9$ giờ còn $40\cdot0{,}8^9\approx5{,}4$ mg/L, hơi lớn hơn $5$; kết quả $9{,}3$ là hợp lí.
:::

:::warning Bẫy thường gặp về mũ và lôgarit
- **Quên điều kiện** của lôgarit, nhận cả nghiệm làm biểu thức trong lôgarit âm.
- **Không đổi chiều** khi cơ số nằm giữa $0$ và $1$: $\log_{\frac12}x\ge-2\iff0<x\le4$, không phải $x\ge4$.
- **Nhầm công thức**: $\log_a(b+c)$ **không** bằng $\log_ab+\log_ac$.
:::

## Cấp số cộng và cấp số nhân

:::theorem Hai loại cấp số
| | Cấp số cộng (công sai $d$) | Cấp số nhân (công bội $q$) |
|---|---|---|
| Số hạng tổng quát | $u_n=u_1+(n-1)d$ | $u_n=u_1\cdot q^{n-1}$ |
| Tổng $n$ số hạng đầu | $S_n=\dfrac{n(u_1+u_n)}{2}=\dfrac{n\big[2u_1+(n-1)d\big]}{2}$ | $S_n=\dfrac{u_1(1-q^n)}{1-q}$ ($q\neq1$) |
| Ba số hạng liên tiếp | $u_k=\dfrac{u_{k-1}+u_{k+1}}{2}$ | $u_k^2=u_{k-1}\cdot u_{k+1}$ |
:::

Nhiều bài thực tế là cấp số "nguỵ trang": số ghế mỗi hàng tăng đều là cấp số cộng; số tiền tăng theo phần trăm là cấp số nhân.

:::example Trả lời ngắn: số ghế trong hội trường
Một hội trường có $20$ hàng ghế. Hàng đầu tiên có $16$ ghế, mỗi hàng sau nhiều hơn hàng ngay trước nó $2$ ghế. Hội trường có tất cả bao nhiêu ghế?

**Lời giải.** Số ghế các hàng lập thành cấp số cộng với $u_1=16$, $d=2$, $n=20$:

$$S_{20}=\frac{20\big[2\cdot16+19\cdot2\big]}{2}=10\cdot70=700.$$

Vậy hội trường có $700$ ghế.

**Nhìn lại.** Hàng cuối có $u_{20}=16+19\cdot2=54$ ghế; dùng $u_1+20d$ là lỗi "thừa một công sai" hay gặp.
:::

## Giới hạn

:::note Các giới hạn cơ bản
- $\lim\dfrac{1}{n^k}=0$ ($k>0$); $\lim q^n=0$ khi $|q|<1$.
- Giới hạn của phân thức theo $n$: chia cả tử và mẫu cho luỹ thừa cao nhất của $n$ ở mẫu.
- Cấp số nhân lùi vô hạn ($|q|<1$): $S=u_1+u_1q+u_1q^2+\cdots=\dfrac{u_1}{1-q}$.
- Giới hạn dạng $\dfrac00$ của hàm số: phân tích thành nhân tử rồi rút gọn, ví dụ $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}=\lim\limits_{x\to2}(x+2)=4$.
:::

:::example Trắc nghiệm: giới hạn của dãy số
Giá trị của $\lim\dfrac{2n^2+1}{n^2-3n}$ là

**A.** $0$.

**B.** $-\dfrac13$.

**C.** $2$.

**D.** $+\infty$.

**Lời giải.** Chia cả tử và mẫu cho $n^2$:

$$\lim\frac{2n^2+1}{n^2-3n}=\lim\frac{2+\frac{1}{n^2}}{1-\frac3n}=\frac{2+0}{1-0}=2.$$

Chọn **C**. Phương án B lấy nhầm tỉ số $\dfrac{1}{-3}$ của các hệ số thấp nhất.
:::

## Thuật ngữ

:::terms
- phương trình lượng giác cơ bản | basic trigonometric equation
- chu kì | period
- lôgarit tự nhiên | natural logarithm
- lãi kép | compound interest
- tăng trưởng mũ | exponential growth
- cấp số cộng | arithmetic sequence
- cấp số nhân | geometric sequence
- công sai | common difference
- công bội | common ratio
- cấp số nhân lùi vô hạn | convergent geometric series (sum to infinity)
- giới hạn | limit
:::

## Bài tập

Các bài được xếp từ dễ đến khó, mỗi bài ghi rõ dạng câu hỏi trong đề thi.

:::exercise Trắc nghiệm
Cho $\sin x=\dfrac13$. Giá trị của $\cos2x$ là

**A.** $\dfrac79$. **B.** $\dfrac13$. **C.** $-\dfrac79$. **D.** $\dfrac89$.

::hint
**Kiến thức:** $\cos2x=1-2\sin^2x$.

**Gợi ý các bước:**
1. Tính $\sin^2x$.
2. Thay vào công thức.

::solution
Áp dụng công thức nhân đôi $\cos2x=1-2\sin^2x$, ta có
$$\cos2x=1-2\cdot\left(\frac13\right)^2=1-\frac29=\frac79.$$

Vậy chọn **A**.

*Nhận xét.* Phương án B quên bình phương $\sin x$; phương án C dùng nhầm công thức $2\sin^2x-1$; phương án D là giá trị của $\cos^2x$.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Nghiệm của phương trình $\tan x=\sqrt3$ là

**A.** $x=\dfrac{\pi}{3}+k\pi$. **B.** $x=\dfrac{\pi}{3}+k2\pi$. **C.** $x=\dfrac{\pi}{6}+k\pi$. **D.** $x=\pm\dfrac{\pi}{3}+k\pi$ ($k\in\mathbb{Z}$).

::hint
**Kiến thức:** $\tan x=\tan\alpha\iff x=\alpha+k\pi$; $\tan\dfrac{\pi}{3}=\sqrt3$.

**Gợi ý các bước:**
1. Tìm $\alpha$ với $\tan\alpha=\sqrt3$.
2. Viết họ nghiệm với chu kì $\pi$.

::solution
Ta có $\sqrt3=\tan\dfrac{\pi}{3}$. Do đó phương trình trở thành
$$\tan x=\tan\frac{\pi}{3}.$$

Hàm số $y=\tan x$ tuần hoàn với chu kì $\pi$, nên
$$\tan x=\tan\frac{\pi}{3}\iff x=\frac{\pi}{3}+k\pi\quad(k\in\mathbb Z).$$

Vậy chọn **A**.

*Nhận xét.* Phương án B dùng chu kì $2\pi$ nên bỏ sót một nửa số nghiệm; phương án C dùng nhầm $\tan\dfrac{\pi}{6}=\dfrac{\sqrt3}{3}$.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Đặt $a=\log_23$. Khi đó $\log_224$ bằng

**A.** $3a$. **B.** $3+a$. **C.** $8+a$. **D.** $1+3a$.

::hint
**Kiến thức:** $\log_2(bc)=\log_2b+\log_2c$.

**Gợi ý các bước:**
1. Viết $24=8\cdot3$.
2. Dùng $\log_28=3$.

::solution
Ta có $24=8\cdot3$. Áp dụng quy tắc lôgarit của một tích, ta được
$$\log_224=\log_2(8\cdot3)=\log_28+\log_23=3+a.$$

Vậy chọn **B**.

*Nhận xét.* Phương án A nhầm phép cộng thành phép nhân; phương án C quên tính $\log_28=3$.

**Đáp số.** B.
:::

:::exercise Đúng/Sai
Cho cấp số nhân $(u_n)$ có $u_1=3$ và công bội $q=2$.

a) $u_5=48$.

b) Tổng $5$ số hạng đầu bằng $93$.

c) $u_n=3\cdot2^n$ với mọi $n\ge1$.

d) Số $384$ là số hạng thứ $7$ của cấp số nhân.

::hint
**Kiến thức:** $u_n=u_1q^{n-1}$; $S_n=\dfrac{u_1(1-q^n)}{1-q}$.

**Gợi ý các bước:**
1. Tính $u_5$ và $S_5$.
2. Giải $3\cdot2^{n-1}=384$.

::solution
Số hạng tổng quát của cấp số nhân là $u_n=u_1q^{n-1}=3\cdot2^{n-1}$.

a) **Đúng.** Ta có $u_5=3\cdot2^{5-1}=3\cdot16=48$.

b) **Đúng.** Tổng $n$ số hạng đầu là $S_n=\dfrac{u_1\left(1-q^n\right)}{1-q}$, nên
$$S_5=\frac{3\left(1-2^5\right)}{1-2}=\frac{3\cdot(-31)}{-1}=93.$$

c) **Sai.** Theo trên, $u_n=3\cdot2^{n-1}$. Công thức $u_n=3\cdot2^n$ cho $u_1=6\neq3$.

d) **Sai.** Ta có $u_n=384\iff3\cdot2^{n-1}=384\iff2^{n-1}=128=2^7\iff n=8$. Vậy $384$ là số hạng thứ $8$, không phải thứ $7$.

Vậy các mệnh đề a), b) đúng; các mệnh đề c), d) sai.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise Trả lời ngắn
Tính tổng các nghiệm của phương trình $4^x-6\cdot2^x+8=0$.

::hint
**Kiến thức:** $4^x=(2^x)^2$; đặt $t=2^x>0$.

**Gợi ý các bước:**
1. Giải phương trình bậc hai theo $t$.
2. Tìm $x$ từ $2^x=t$.

::solution
Ta có $4^x=\left(2^x\right)^2$. Đặt $t=2^x$ ($t>0$), phương trình trở thành
$$t^2-6t+8=0.$$

Ta có $\Delta'=9-8=1$, nên $t=3+1=4$ hoặc $t=3-1=2$. Cả hai giá trị đều thoả mãn $t>0$.

- Với $t=2$: $2^x=2$, suy ra $x=1$.
- Với $t=4$: $2^x=4=2^2$, suy ra $x=2$.

Phương trình có hai nghiệm $x=1$ và $x=2$, nên tổng các nghiệm là $1+2=3$.

Vậy tổng các nghiệm của phương trình bằng $3$.

**Đáp số.** $3$.
:::

:::exercise Trả lời ngắn
Bất phương trình $\log_{\frac12}(x-2)\ge-2$ có bao nhiêu nghiệm nguyên?

::hint
**Kiến thức:** cơ số $\dfrac12<1$ nên đổi chiều; điều kiện $x-2>0$.

**Gợi ý các bước:**
1. Viết $-2=\log_{\frac12}4$.
2. Giải $0<x-2\le4$.

::solution
Điều kiện xác định: $x-2>0$, tức là $x>2$.

Ta có $-2=\log_{\frac12}\left(\dfrac12\right)^{-2}=\log_{\frac12}4$. Bất phương trình trở thành
$$\log_{\frac12}(x-2)\ge\log_{\frac12}4.$$

Vì cơ số $\dfrac12\in(0; 1)$ nên hàm số $y=\log_{\frac12}t$ nghịch biến; do đó bất phương trình tương đương với
$$x-2\le4,\ \text{tức là}\ x\le6.$$

Kết hợp với điều kiện $x>2$, ta được $2<x\le6$. Các nghiệm nguyên là $3$, $4$, $5$, $6$.

Vậy bất phương trình có $4$ nghiệm nguyên.

**Đáp số.** $4$.
:::

:::exercise Trả lời ngắn
Bạn An gửi $100$ triệu đồng vào ngân hàng với lãi suất $6\%$ một năm, lãi hằng năm được nhập vào vốn. Sau ít nhất bao nhiêu năm thì số tiền trong tài khoản đạt từ $150$ triệu đồng trở lên?

::hint
**Kiến thức:** $A=A_0(1+r)^n$; $n$ là số nguyên dương.

**Gợi ý các bước:**
1. Giải $100\cdot1{,}06^n\ge150$.
2. Lấy số nguyên nhỏ nhất thoả mãn.

::solution
Gọi $n$ là số năm gửi ($n$ là số nguyên dương). Theo công thức lãi kép, sau $n$ năm số tiền trong tài khoản là
$$T_n=100\cdot(1+6\%)^n=100\cdot1{,}06^n\ \text{(triệu đồng)}.$$

Số tiền đạt từ $150$ triệu đồng trở lên khi
$$100\cdot1{,}06^n\ge150\iff1{,}06^n\ge1{,}5\iff n\ge\log_{1{,}06}1{,}5\approx6{,}96.$$

Vì $n$ là số nguyên nên $n\ge7$.

Kiểm tra: $100\cdot1{,}06^6\approx141{,}9<150$ và $100\cdot1{,}06^7\approx150{,}4\ge150$ (triệu đồng).

Vậy sau ít nhất $7$ năm thì số tiền đạt từ $150$ triệu đồng trở lên.

**Đáp số.** $7$.
:::

:::exercise Trả lời ngắn
Một mẻ nuôi cấy có $1000$ vi khuẩn, và cứ $3$ giờ số vi khuẩn lại tăng gấp đôi, nên sau $t$ giờ có $N(t)=1000\cdot2^{\frac t3}$ con. Sau ít nhất bao nhiêu giờ (số nguyên) thì số vi khuẩn vượt quá $20\,000$ con?

::hint
**Kiến thức:** $2^{\frac t3}>20\iff\dfrac t3>\log_220$.

**Gợi ý các bước:**
1. Giải bất phương trình mũ.
2. Lấy số nguyên nhỏ nhất thoả mãn, rồi kiểm tra lại.

::solution
Số vi khuẩn vượt quá $20\,000$ con khi
$$1000\cdot2^{\frac t3}>20\,000\iff2^{\frac t3}>20\iff\frac t3>\log_220\iff t>3\log_220\approx12{,}97.$$

Vì $t$ là số nguyên nên $t\ge13$.

Kiểm tra: $N(12)=1000\cdot2^4=16\,000<20\,000$ và $N(13)=1000\cdot2^{\frac{13}{3}}\approx20\,159>20\,000$.

Vậy sau ít nhất $13$ giờ thì số vi khuẩn vượt quá $20\,000$ con.

**Đáp số.** $13$.
:::

:::exercise Tự luận
Giải phương trình $\sin2x=\cos x$ trên đoạn $[0; \pi]$.

::hint
**Kiến thức:** $\sin2x=2\sin x\cos x$; đưa về phương trình tích.

**Gợi ý các bước:**
1. Viết $\cos x(2\sin x-1)=0$.
2. Giải từng phương trình và chọn nghiệm thuộc $[0; \pi]$.

::solution
Áp dụng công thức nhân đôi $\sin2x=2\sin x\cos x$, phương trình trở thành
$$2\sin x\cos x-\cos x=0\iff\cos x\,(2\sin x-1)=0.$$

Do đó $\cos x=0$ hoặc $\sin x=\dfrac12$.

- Trên đoạn $[0; \pi]$, $\cos x=0\iff x=\dfrac{\pi}{2}$.
- Trên đoạn $[0; \pi]$, $\sin x=\dfrac12\iff x=\dfrac{\pi}{6}$ hoặc $x=\dfrac{5\pi}{6}$.

Vậy trên đoạn $[0; \pi]$, phương trình có ba nghiệm $x=\dfrac{\pi}{6}$, $x=\dfrac{\pi}{2}$, $x=\dfrac{5\pi}{6}$.

**Đáp số.** $x\in\left\{\dfrac{\pi}{6}; \dfrac{\pi}{2}; \dfrac{5\pi}{6}\right\}$.
:::

:::exercise Trả lời ngắn (thử thách)
Thả một quả bóng từ độ cao $10$ m xuống sàn. Mỗi lần chạm sàn, bóng nảy lên đến độ cao bằng $\dfrac34$ độ cao ngay trước đó. Giả sử bóng nảy mãi như vậy, tính tổng quãng đường bóng đi được (đơn vị: m).

::hint
**Kiến thức:** tổng cấp số nhân lùi vô hạn $S=\dfrac{u_1}{1-q}$.

**Gợi ý các bước:**
1. Quãng đường gồm lần rơi đầu $10$ m, rồi mỗi lần nảy có một lượt lên và một lượt xuống bằng nhau.
2. Các độ cao nảy là $7{,}5$; $7{,}5\cdot\dfrac34$; … lập cấp số nhân lùi vô hạn.

::solution
Quãng đường bóng đi được gồm lần rơi đầu tiên $10$ m và các lần nảy lên rồi rơi xuống.

Độ cao các lần nảy lên lập thành cấp số nhân với số hạng đầu $u_1=10\cdot\dfrac34=7{,}5$ (m) và công bội $q=\dfrac34$. Vì $|q|<1$ nên tổng các độ cao nảy là
$$S=\frac{u_1}{1-q}=\frac{7{,}5}{1-\frac34}=30\ \text{(m)}.$$

Mỗi lần nảy, bóng đi lên rồi rơi xuống cùng một độ cao, nên mỗi độ cao được đi hai lần. Do đó tổng quãng đường bóng đi được là
$$10+2\cdot30=70\ \text{(m)}.$$

Vậy bóng đi được tổng cộng $70$ m.

**Đáp số.** $70$.
:::

## Kiểm tra mini

:::quiz
::mc
Chu kì của hàm số $y=\sin2x$ là
A. $2\pi$.
B. $\pi$.
C. $\dfrac{\pi}{2}$.
D. $4\pi$.
::key B
Chu kì là $\dfrac{2\pi}{2}=\pi$. Phương án D nhân thay vì chia cho $2$; phương án A là chu kì của $\sin x$.

::mc
Nghiệm của phương trình $\log_3(2x-1)=2$ là
A. $x=\dfrac92$.
B. $x=\dfrac72$.
C. $x=5$.
D. $x=\dfrac32$.
::key C
$2x-1=3^2=9\iff x=5$ (thoả mãn $2x-1>0$). Phương án A quên số $-1$, phương án B tính nhầm $3^2=6$, phương án D lấy $2x-1=2$.

::mc
Cho cấp số cộng $(u_n)$ có $u_1=2$ và công sai $d=3$. Số hạng $u_{10}$ bằng
A. $32$.
B. $26$.
C. $30$.
D. $29$.
::key D
$u_{10}=2+9\cdot3=29$. Phương án A dùng nhầm $u_1+10d$, phương án B dùng $u_1+8d$.

::mc
Giá trị của $\lim\dfrac{3n-1}{n+2}$ là
A. $3$.
B. $-\dfrac12$.
C. $1$.
D. $+\infty$.
::key A
Chia tử và mẫu cho $n$: $\dfrac{3-\frac1n}{1+\frac2n}\to3$. Phương án B là tỉ số của hai hệ số tự do.

::tf
Cho hàm số $y=\log_2x$.
a) Tập xác định của hàm số là $(0; +\infty)$.
b) Hàm số đồng biến trên tập xác định.
c) Đồ thị hàm số đi qua điểm $(0; 1)$.
d) $\log_2x<3\iff x<8$.
::key Đ Đ S S
a) Đúng: cần $x>0$. b) Đúng: cơ số $2>1$. c) Sai: đồ thị đi qua $(1; 0)$; điểm $(0; 1)$ thuộc đồ thị $y=2^x$. d) Sai: phải có thêm điều kiện, $\log_2x<3\iff0<x<8$.

::sa
Tính tổng $S=6+2+\dfrac23+\dfrac29+\cdots$ (cấp số nhân lùi vô hạn).
::key 9
$u_1=6$, $q=\dfrac13$, nên $S=\dfrac{6}{1-\frac13}=9$.

::sa
Phương trình $\sin x=\dfrac12$ có bao nhiêu nghiệm thuộc đoạn $[0; 3\pi]$?
::key 4
Các nghiệm là $x=\dfrac{\pi}{6}+k2\pi$ và $x=\dfrac{5\pi}{6}+k2\pi$. Trên $[0; 3\pi]$ có $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{13\pi}{6}$, $\dfrac{17\pi}{6}$, tức $4$ nghiệm.
:::
