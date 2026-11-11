---
title: Hàm mũ: tăng trưởng và suy giảm
description: SAT Advanced Math: mô hình hàm mũ a·b^t, tăng giảm theo phần trăm, thời gian nhân đôi và chu kì bán rã, phân biệt bậc nhất với hàm mũ, các dạng tương đương.
minutes: 35
---

:::goals
- Lập và giải thích mô hình hàm mũ $f(t)=a\cdot b^t$ cho tăng trưởng và suy giảm.
- Chuyển đổi giữa tốc độ thay đổi theo phần trăm và hệ số tăng trưởng $b$.
- Phân biệt thay đổi bậc nhất với thay đổi theo hàm mũ trong bảng, đồ thị hoặc lời mô tả.
- Dùng thời gian nhân đôi, chu kì bán rã và viết lại mô hình theo đơn vị thời gian khác.
:::

Hàm mũ còn mới với nhiều học sinh học Toán ở Việt Nam trước lớp 11, vậy mà SAT dùng nó ở mọi module, chủ yếu trong bối cảnh thực tế: dân số, tiền tiết kiệm, giá cả, thuốc và khấu hao. Tin vui là gần như câu nào cũng quay về một công thức và một ý: **mỗi bước thời gian bằng nhau, nhân với cùng một hệ số**.

## Mô hình hàm mũ

:::theorem Tăng trưởng và suy giảm
Mô hình hàm mũ có dạng $f(t)=a\cdot b^t$ với $a>0$, $b>0$, $b\ne1$:
- $a=f(0)$ là **giá trị ban đầu** (initial value);
- $b$ là **hệ số tăng trưởng** (growth factor), số ta nhân vào sau mỗi bước thời gian.

Nếu đại lượng thay đổi $r$ phần trăm mỗi bước (viết dưới dạng số thập phân):
- tăng: $b=1+r$, ví dụ tăng $4\%$ cho $b=1{,}04$;
- giảm: $b=1-r$, ví dụ giảm $15\%$ cho $b=0{,}85$.
:::

:::example Giải thích một mô hình
Dân số một thị trấn sau $t$ năm kể từ năm 2020 được mô tả bởi $P(t)=1500(1{,}04)^t$. Câu nào giải thích đúng nhất ý nghĩa của $1{,}04$ trong bối cảnh này?
A. Dân số tăng thêm 1,04 người mỗi năm.
B. Dân số tăng 4% mỗi năm.
C. Dân số năm 2020 là 1,04 nghìn người.
D. Dân số tăng 104% mỗi năm.

**Lời giải.** $1{,}04=1+0{,}04$ là hệ số tăng trưởng: mỗi năm dân số được nhân với $1{,}04$, tức là tăng $4\%$. Đáp án là **B**. Phương án D lẫn hệ số với tốc độ.
:::

:::example Khấu hao
Một chiếc ô tô được mua với giá 24.000 đô la. Giá trị của nó giảm 15% mỗi năm. Làm tròn đến đô la, giá trị chiếc xe sau 3 năm là bao nhiêu?

**Lời giải.** Hệ số là $1-0{,}15=0{,}85$:

$$V(3)=24.000\cdot(0{,}85)^3=24.000\cdot0{,}614125=14.739.$$

Bạn gõ **14739**. Chú ý chiếc xe mất ít tiền dần qua từng năm (3.600 đô la ở năm đầu, ít hơn ở các năm sau), vì 15% được tính trên một giá trị nhỏ dần.
:::

## Bậc nhất hay hàm mũ?

:::note Điểm khác nhau cốt lõi
- **Bậc nhất:** sau mỗi bước bằng nhau, đại lượng thay đổi cùng một **lượng** (cộng thêm $m$).
- **Hàm mũ:** sau mỗi bước bằng nhau, đại lượng thay đổi cùng một **hệ số** (hay cùng một phần trăm), tức là nhân với $b$.
:::

:::example Đọc bảng giá trị
| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $y$ | $5$ | $10$ | $20$ | $40$ |

Phương trình nào phù hợp với bảng?
A. $y=5x+5$
B. $y=5\cdot2^x$
C. $y=2\cdot5^x$
D. $y=10x$

**Lời giải.** Các hiệu $5, 10, 20$ không bằng nhau, nên quan hệ không phải bậc nhất. Các tỉ số đều bằng $2$, nên đây là hàm mũ với hệ số $2$ và giá trị ban đầu $5$: $y=5\cdot2^x$. Đáp án là **B**.
:::

:::graph Bậc nhất $y=5+5x$ (đường thẳng) và hàm mũ $y=5\cdot2^x$ (đường cong) xuất phát từ cùng một điểm
alt: Một đường thẳng và một đường cong đi lên cùng xuất phát từ (0, 5); sau x bằng 2 đường cong tăng nhanh hơn nhiều
x: -1..5
y: -2..60
plot: 5 + 5x
plot: 5*2^x ; -1..3.6
point: (0, 5) "(0, 5)" left
point: (3, 40) "(3, 40)" left
point: (3, 20) "(3, 20)" right
:::

## Thời gian nhân đôi và chu kì bán rã

Khi một đại lượng nhân đôi sau mỗi $d$ đơn vị thời gian, hoặc giảm một nửa sau mỗi $d$ đơn vị thời gian, số mũ là số chu kì $d$ đã trôi qua, $\dfrac{t}{d}$:

$$f(t)=a\cdot2^{\frac{t}{d}}\qquad\text{hoặc}\qquad f(t)=a\left(\frac12\right)^{\frac{t}{d}}.$$

:::example Chu kì bán rã
Một bệnh nhân uống 80 mi-li-gam thuốc. Lượng thuốc trong cơ thể giảm một nửa sau mỗi 6 giờ. Sau 18 giờ còn lại bao nhiêu mi-li-gam?

**Lời giải.** $18$ giờ là $\dfrac{18}{6}=3$ chu kì: $80\left(\dfrac12\right)^3=10$. Bạn gõ **10**.
:::

## Các dạng tương đương của mô hình

SAT có thể hỏi dạng nào của mô hình thể hiện tốc độ theo một đơn vị thời gian khác. Hãy dùng quy tắc $b^{kt}=\left(b^k\right)^t$.

:::example Đổi đơn vị thời gian
Một khoản đầu tư tăng theo $f(t)=200(1{,}21)^t$, với $t$ tính bằng năm. Dạng tương đương nào thể hiện tốc độ tăng sau mỗi nửa năm?
A. $f(t)=200(1{,}105)^{2t}$
B. $f(t)=200(1{,}1)^{2t}$
C. $f(t)=200(1{,}21)^{\frac t2}$
D. $f(t)=100(1{,}21)^{2t}$

**Lời giải.** Vì $1{,}1^2=1{,}21$ nên $(1{,}21)^t=(1{,}1^2)^t=(1{,}1)^{2t}$. Trong $2t$ nửa năm, mỗi nửa năm giá trị được nhân với $1{,}1$, tức là tăng $10\%$ mỗi nửa năm. Đáp án là **B**. Phương án A chia đôi tốc độ, điều này sai: hai lần tăng $10{,}5\%$ cho nhiều hơn $21\%$.
:::

:::warning Những cái bẫy thường gặp
- **Tốc độ hay hệ số.** Giảm $8\%$ ứng với hệ số $0{,}92$, không phải $0{,}08$.
- **Cộng phần trăm.** Hai lần tăng $10\%$ cho $1{,}1^2=1{,}21$, tức tăng $21\%$, không phải $20\%$.
- **Quên chu kì.** "Nhân đôi sau mỗi 3 giờ" là $2^{\frac t3}$, không phải $2^{3t}$.
- **Từ ngữ của bậc nhất.** "Tăng thêm 50 mỗi năm" là bậc nhất; "tăng 50% mỗi năm" là hàm mũ.
:::

:::tip Desmos cho mô hình hàm mũ
Gõ `y=24000(0.85)^x` rồi bấm vào đường cong tại $x=3$ để đọc giá trị. Để tìm khi nào đại lượng đạt một mức, hãy thêm đường nằm ngang, ví dụ `y=50`, rồi bấm vào giao điểm. Nhớ rằng Desmos dùng dấu chấm cho số thập phân.
:::

:::terms
- hàm số mũ | exponential function
- giá trị ban đầu | initial value
- hệ số tăng trưởng (cơ số) | growth factor
- tăng trưởng / suy giảm theo hàm mũ | exponential growth / decay
- tăng / giảm theo phần trăm | percent increase / decrease
- lãi kép | compound interest
- thời gian nhân đôi | doubling time
- chu kì bán rã | half-life
- khấu hao, mất giá | depreciation
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Giá trị, tính bằng đô la, của một chiếc máy tính xách tay sau $t$ năm kể từ khi mua là $V(t)=900(0{,}92)^t$. Câu nào đúng?
A. Giá trị giảm 92% mỗi năm.
B. Giá trị giảm 8 đô la mỗi năm.
C. Giá trị giảm 8% mỗi năm.
D. Giá trị lúc mua là 828 đô la.

::hint
**Kiến thức:** với suy giảm, $b=1-r$.

**Gợi ý các bước:**
1. $0{,}92=1-0{,}08$.
2. Xem số $900$ có ý nghĩa gì.

::solution
Hệ số $0{,}92$ nghĩa là giảm $8\%$ mỗi năm: đáp án **C**. Giá trị lúc mua là $V(0)=900$ đô la; 828 đô la là giá trị sau một năm.
:::

:::exercise Câu tự điền đáp số
Mai gửi 2.000 đô la vào một tài khoản có lãi suất 5% mỗi năm, tính lãi kép mỗi năm một lần. Làm tròn đến đô la, sau 4 năm trong tài khoản có bao nhiêu tiền?

::hint
**Kiến thức:** $A=a(1+r)^t$.

**Gợi ý các bước:**
1. $a=2.000$, $b=1{,}05$, $t=4$.
2. Tính rồi làm tròn.

::solution
$2.000\cdot(1{,}05)^4\approx2.431{,}01$, nên khoảng $2.431$ đô la. Khi nhập vào Bluebook, gõ `2431`.
:::

:::exercise Câu tự điền đáp số
| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $f(x)$ | $162$ | $54$ | $18$ | $6$ |

Hàm số $f$ là hàm mũ. Giá trị của $f(4)$ bằng bao nhiêu?

::hint
**Kiến thức:** tìm tỉ số không đổi giữa hai giá trị liên tiếp.

**Gợi ý các bước:**
1. $\dfrac{54}{162}=\dfrac13$.
2. Nhân $f(3)$ với cùng hệ số đó.

::solution
Mỗi giá trị bằng $\dfrac13$ giá trị trước, nên $f(4)=6\cdot\dfrac13=2$.
:::

:::exercise Câu tự điền đáp số
Một mẻ nuôi cấy bắt đầu với 400 vi khuẩn, và số vi khuẩn nhân đôi sau mỗi 3 giờ. Sau 12 giờ có bao nhiêu vi khuẩn?

::hint
**Kiến thức:** $f(t)=a\cdot2^{\frac{t}{d}}$.

**Gợi ý các bước:**
1. $\dfrac{12}{3}=4$ chu kì nhân đôi.
2. Tính $400\cdot2^4$.

::solution
$400\cdot2^4=400\cdot16=6.400$ vi khuẩn.
:::

:::exercise Trắc nghiệm
Hàm số nào sau đây mô tả sự suy giảm theo hàm mũ?
A. $y=3(1{,}2)^x$
B. $y=0{,}8x+3$
C. $y=3(0{,}8)^x$
D. $y=3x^{0{,}8}$

::hint
**Kiến thức:** hàm mũ nghĩa là biến nằm ở số mũ; suy giảm nghĩa là $0<b<1$.

**Gợi ý các bước:**
1. Loại các hàm có biến không nằm ở số mũ.
2. Xét cơ số.

::solution
B là hàm bậc nhất và D là hàm lũy thừa. A có $b=1{,}2>1$, là tăng trưởng. C có $b=0{,}8<1$: đáp án **C**.
:::

## Bài tập vận dụng

:::exercise Hai lần tăng giá
Giá một chiếc vé tăng 10% trong một năm và lại tăng 10% vào năm sau. Sau hai năm, giá vé tăng bao nhiêu phần trăm?

::hint
**Kiến thức:** nhân các hệ số.

**Gợi ý các bước:**
1. $1{,}1\cdot1{,}1$.
2. Đổi hệ số trở lại thành phần trăm.

::solution
$1{,}1^2=1{,}21$, nên giá vé tăng tổng cộng $21\%$, không phải $20\%$. Ví dụ, 100 đô la thành 110 đô la, rồi thành 121 đô la.
:::

:::exercise Trả lương bậc nhất hay hàm mũ
Phương án A trả 1.000 đô la cộng 100 đô la cho mỗi tháng làm việc. Phương án B trả $10\cdot2^m$ đô la sau $m$ tháng. Sau bao nhiêu tháng tròn thì phương án B lần đầu trả nhiều hơn phương án A?

::hint
**Kiến thức:** so sánh $1.000+100m$ với $10\cdot2^m$ theo từng tháng, hoặc vẽ cả hai đồ thị.

**Gợi ý các bước:**
1. Tính cả hai phương án với $m=6, 7, 8$.
2. Tìm tháng đầu tiên B lớn hơn.

::solution
| $m$ | $6$ | $7$ | $8$ |
|---|---|---|---|
| Phương án A | $1.600$ | $1.700$ | $1.800$ |
| Phương án B | $640$ | $1.280$ | $2.560$ |

Phương án B lần đầu trả nhiều hơn sau $8$ tháng. Tăng trưởng hàm mũ khởi đầu chậm nhưng rồi sẽ vượt mọi tăng trưởng bậc nhất.
:::

:::exercise Tìm hệ số
Một quần thể tuân theo $f(t)=a\cdot b^t$, với $t$ tính bằng năm. Tại $t=0$ có 500 con và tại $t=2$ có 720 con. Mô hình dự đoán tại $t=5$ có bao nhiêu con? Làm tròn đến hàng đơn vị.

::hint
**Kiến thức:** $a=f(0)$; chia $f(2)$ cho $f(0)$ được $b^2$.

**Gợi ý các bước:**
1. $b^2=\dfrac{720}{500}=1{,}44$.
2. $b=1{,}2$; tính $500(1{,}2)^5$.

::solution
$a=500$ và $b^2=1{,}44$, nên $b=1{,}2$ (hệ số tăng trưởng dương). Khi đó $f(5)=500(1{,}2)^5=1.244{,}16$, khoảng $1.244$ con.
:::

:::exercise Thử thách
Một bệnh nhân được dùng 200 mi-li-gam thuốc. Mỗi giờ, cơ thể đào thải 20% lượng thuốc có ở đầu giờ đó. Sau bao nhiêu giờ tròn thì lượng thuốc lần đầu ít hơn 50 mi-li-gam?

::hint
**Kiến thức:** mô hình $200(0{,}8)^n$ và một bảng giá trị hoặc Desmos.

**Gợi ý các bước:**
1. Giải $200(0{,}8)^n<50$, tức là $(0{,}8)^n<0{,}25$.
2. Thử $n=6$ và $n=7$.

::solution
$200(0{,}8)^6\approx52{,}4$ mi-li-gam, vẫn trên 50; $200(0{,}8)^7\approx41{,}9$ mi-li-gam. Lượng thuốc lần đầu xuống dưới 50 mi-li-gam sau $7$ giờ.
:::

:::quiz
::mc
Hàm số $f$ được cho bởi $f(x)=3\cdot2^x$. Giá trị của $f(4)$ là
A. $24$
B. $48$
C. $96$
D. $11$
::key B
$3\cdot2^4=3\cdot16=48$. Phương án A tính $3\cdot2\cdot4$; phương án C là $3\cdot2^5$, nhân đôi thừa một lần.

::mc
Một đại lượng được mô tả bởi $y=50(0{,}7)^t$. Câu nào đúng?
A. Đại lượng tăng 70% sau mỗi đơn vị thời gian.
B. Đại lượng giảm 70% sau mỗi đơn vị thời gian.
C. Đại lượng tăng 30% sau mỗi đơn vị thời gian.
D. Đại lượng giảm 30% sau mỗi đơn vị thời gian.
::key D
$0{,}7=1-0{,}3$, tức là giảm $30\%$ sau mỗi đơn vị thời gian.

::mc
Một đại lượng bắt đầu bằng 4 và tăng gấp ba mỗi ngày. Sau 3 ngày giá trị của nó là
A. $12$
B. $36$
C. $108$
D. $324$
::key C
$4\cdot3^3=108$. Phương án A là $4\cdot3$, lỗi nghĩ theo kiểu bậc nhất.

::mc
Biểu thức nào cho giá trị của 500 đô la sau $t$ năm nếu số tiền tăng 2% mỗi năm?
A. $500(1{,}02)^t$
B. $500(0{,}02)^t$
C. $500+0{,}02t$
D. $500(1{,}2)^t$
::key A
Hệ số là $1+0{,}02=1{,}02$. Phương án D dùng $20\%$.

::tf
Giá trị, tính bằng đô la, của một chiếc máy sau $t$ năm kể từ khi mua là $V(t)=8.000\cdot(0{,}9)^t$.
a) Chiếc máy được mua với giá 8.000 đô la.
b) Giá trị giảm 10% mỗi năm.
c) Sau 2 năm, giá trị là 6.480 đô la.
d) Mỗi năm chiếc máy mất 800 đô la giá trị.
::key Đ Đ Đ S
a) Đúng: $V(0)=8.000$. b) Đúng: $0{,}9=1-0{,}1$. c) Đúng: $8.000\cdot0{,}81=6.480$. d) Sai: chỉ năm đầu mất 800 đô la, các năm sau mất ít hơn.

::sa
Nếu $3\cdot2^x=96$ thì giá trị của $x$ bằng bao nhiêu?
::key 5
$2^x=32=2^5$, nên $x=5$.

::sa
Một mẫu chất nặng 64 gam có chu kì bán rã 5 ngày. Sau 15 ngày còn lại bao nhiêu gam?
::key 8
$15$ ngày là $3$ chu kì bán rã: $64\left(\dfrac12\right)^3=8$.
:::
