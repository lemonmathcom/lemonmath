---
title: Hàm số bậc nhất và đồ thị của hàm số bậc nhất
description: Nhận biết hàm số bậc nhất, tính giá trị, vẽ đồ thị bằng hai điểm và vận dụng vào tình huống thực tế.
minutes: 20
---

:::goals
- Nhận biết hàm số bậc nhất $y=ax+b$ với $a\ne0$ và xác định các hệ số $a$, $b$.
- Tính giá trị của hàm số và kiểm tra một điểm có thuộc đồ thị hay không.
- Vẽ đồ thị hàm số bậc nhất bằng hai điểm phân biệt.
- Dùng hàm số và đồ thị để giải một số bài toán thực tế.
:::

Cửa hàng xe đạp thu 20 nghìn đồng để mở khoá và 15 nghìn đồng mỗi giờ. Thuê $x$ giờ hết $y=15x+20$ nghìn đồng. Sau $3$ giờ, bạn trả bao nhiêu? Các điểm $(x; y)$ tạo thành hình gì?

## Hàm số bậc nhất

### Khám phá: chi phí thuê xe

Ta thay lần lượt vài giá trị của $x$ vào $y=15x+20$:

| $x$ (giờ) | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| $y$ (nghìn đồng) | $20$ | $35$ | $50$ | $65$ |

Mỗi giờ thêm làm chi phí tăng $15$ nghìn đồng. Số $20$ là chi phí ban đầu. Công thức có dạng $y=ax+b$ với $a=15$, $b=20$.

:::definition Hàm số bậc nhất
Hàm số bậc nhất là hàm số được cho bởi công thức
$$y=ax+b,$$
trong đó $a$, $b$ là các số đã cho và $a\ne0$.
:::

Nếu $a=0$ thì $y=b$ không đổi theo $x$: đây là hàm hằng, không phải hàm số bậc nhất. Số $b$ có thể bằng $0$; khi ấy $y=ax$.

:::example Nhận biết hàm số bậc nhất
Trong các hàm số sau, hàm số nào là hàm số bậc nhất? Hãy chỉ ra $a$ và $b$.

a) $y=3x-5$; b) $y=-x$; c) $y=7$; d) $y=x^2+1$.

**Lời giải.** Ta so sánh với $y=ax+b$, $a\ne0$:

- a) $a=3$, $b=-5$: bậc nhất.
- b) $y=(-1)x+0$ có $a=-1$, $b=0$: bậc nhất.
- c) $y=0x+7$ có $a=0$: không bậc nhất.
- d) Có $x^2$: không có dạng $y=ax+b$.

Vậy các hàm số ở a) và b) là hàm số bậc nhất.
:::

Khi đã có công thức, ta tính giá trị của hàm số bằng cách thay giá trị của $x$.

:::example Tính giá trị và kiểm tra điểm
Cho hàm số $y=-2x+7$.

a) Tính $y$ khi $x=3$ và khi $x=-1$.

b) Điểm $A(4; -1)$ và $B(2; 4)$ có thuộc đồ thị của hàm số không?

**Lời giải.** Ta thay hoành độ rồi so sánh với tung độ:

$$\begin{aligned}
x=3&\Rightarrow y=-2\cdot3+7=1;\\
x=-1&\Rightarrow y=-2\cdot(-1)+7=9.
\end{aligned}$$

Với $A$, $-2\cdot4+7=-1$, nên $A$ thuộc đồ thị. Với $B$, $-2\cdot2+7=3\ne4$, nên $B$ không thuộc đồ thị.
:::

## Đồ thị của hàm số bậc nhất

### Khám phá: các điểm có thẳng hàng không?

Với $y=2x+1$, ta được $A(-1; -1)$, $B(0; 1)$, $C(1; 3)$, $D(2; 5)$. Cả bốn điểm nằm trên một đường thẳng.

:::graph Các điểm thuộc đồ thị $y=2x+1$
alt: Bốn điểm A, B, C, D nằm trên đường thẳng biểu diễn hàm số y bằng 2x cộng 1
x: -2..3
y: -2..6
plot: 2x + 1
point: (-1, -1) "A" below-left
point: (0, 1) "B" above-left
point: (1, 3) "C" above-left
point: (2, 5) "D" above-left
:::

:::theorem Đồ thị của hàm số bậc nhất
Đồ thị của hàm số bậc nhất $y=ax+b$ với $a\ne0$ là một đường thẳng. Đường thẳng đó được gọi là đường thẳng $y=ax+b$.

Muốn vẽ đồ thị, ta xác định hai điểm phân biệt thuộc đồ thị rồi vẽ đường thẳng đi qua hai điểm ấy.
:::

Đồ thị $y=ax$ là đường thẳng qua gốc toạ độ. Với cùng $x$, công thức $y=ax+b$ làm tung độ thay đổi thêm $b$. Mọi điểm được dịch theo phương thẳng đứng cùng một đoạn nên vẫn tạo thành đường thẳng.

Hai cách chọn điểm thường thuận tiện là:

- Nếu $b\ne0$, cho $x=0$ được $P(0; b)$; cho $y=0$ được $Q\left(-\dfrac ba; 0\right)$.
- Nếu $b=0$, đồ thị qua $O(0; 0)$. Chọn thêm $x=1$ để được $(1; a)$.

:::example Vẽ đồ thị khi $b\ne0$
Vẽ đồ thị hàm số $y=2x-4$.

**Lời giải.** Ta chọn hai giao điểm có toạ độ nguyên:

$$\begin{aligned}
x=0&\Rightarrow y=-4 &&\Rightarrow P(0; -4);\\
y=0&\Rightarrow 2x-4=0\Rightarrow x=2 &&\Rightarrow Q(2; 0).
\end{aligned}$$

Đồ thị là đường thẳng $PQ$.
:::

:::graph Đồ thị $y=2x-4$
alt: Đường thẳng y bằng 2x trừ 4 đi qua P trên trục tung và Q trên trục hoành
x: -1..4
y: -5..4
plot: 2x - 4
point: (0, -4) "P" below-left
point: (2, 0) "Q" above-right
:::

Khi $b=0$, một trong hai điểm đã biết ngay là gốc toạ độ.

:::example Vẽ đồ thị khi $b=0$
Vẽ đồ thị hàm số $y=-3x$.

**Lời giải.** Cho $x=0$ và $x=1$:

$$x=0\Rightarrow y=0\Rightarrow O(0; 0),\qquad x=1\Rightarrow y=-3\Rightarrow M(1; -3).$$

Đồ thị là đường thẳng $OM$.
:::

:::graph Đồ thị $y=-3x$
alt: Đường thẳng y bằng âm 3x đi qua gốc toạ độ O và điểm M có toạ độ 1, âm 3
x: -2..2
y: -5..5
plot: -3x
point: (0, 0) "O" above-left
point: (1, -3) "M" below-right
:::

Trong bài toán thực tế, điều kiện của đại lượng có thể khiến ta chỉ dùng một phần của đường thẳng.

:::example Bể nước đang được xả
Bể có $90$ lít nước và được xả đều $6$ lít mỗi phút. Gọi $t$ là thời gian, $V$ là lượng còn lại.

a) Viết công thức của $V$ theo $t$.

b) Tìm lượng nước sau $8$ phút và thời điểm bể hết nước. Mô tả đồ thị trong tình huống này.

**Lời giải.** Lượng nước giảm $6$ lít mỗi phút, nên

$$V=90-6t=-6t+90.$$

Sau $8$ phút:

$$V=90-6\cdot8=42\text{ (lít)}.$$

Bể hết nước khi $V=0$:

$$90-6t=0\Rightarrow t=15\text{ (phút)}.$$

Công thức có dạng bậc nhất. Vì $0\le t\le15$, đồ thị thực tế là đoạn nối $(0; 90)$ và $(15; 0)$.
:::

:::warning Những sai lầm thường gặp
- **Quên điều kiện $a\ne0$.** Sai: “$y=5$ là hàm số bậc nhất với $a=0$”. Đúng: đây là hàm hằng.
- **Sai dấu khi thay số âm.** Với $y=-2x+1$ và $x=-3$, phải viết $y=-2\cdot(-3)+1=7$, không phải $-5$.
- **Chỉ xác định một điểm rồi vẽ.** Qua một điểm có nhiều đường thẳng. Ta cần hai điểm phân biệt.
- **Tìm sai giao điểm với trục hoành.** Với $y=2x+6$, cho $y=0$ được $2x+6=0$, nên $x=-3$, không phải $3$.
- **Bỏ qua điều kiện thực tế.** Thời gian thường không âm, nên có thể chỉ dùng một đoạn hoặc một tia.
:::

## Thuật ngữ

:::terms
- hàm số bậc nhất | linear function
- hệ số | coefficient
- đồ thị | graph
- đường thẳng | straight line
- mặt phẳng toạ độ | coordinate plane
- trục hoành | x-axis
- trục tung | y-axis
- giao điểm với trục hoành | x-intercept
- giao điểm với trục tung | y-intercept
:::

## Tóm tắt

- Hàm số bậc nhất có dạng $y=ax+b$, trong đó $a\ne0$.
- Điểm $M(x_0; y_0)$ thuộc đồ thị khi và chỉ khi $y_0=ax_0+b$.
- Đồ thị của hàm số bậc nhất là một đường thẳng. Hai điểm phân biệt xác định đường thẳng đó.
- Khi $b\ne0$, thường chọn hai điểm $P(0; b)$ và $Q\left(-\dfrac ba; 0\right)$.
- Khi $b=0$, đồ thị đi qua $O(0; 0)$; chọn thêm một điểm để vẽ.
- Trong tình huống thực tế, luôn xét điều kiện của biến trước khi chọn phần đồ thị phù hợp.

## Luyện tập

Hãy tự làm từng bài trước khi xem lời giải.

:::exercise
Công thức nào sau đây cho hàm số bậc nhất? Hãy xác định $a$, $b$.

a) $y=4x+1$; b) $y=-3x$; c) $y=6$; d) $y=x^2-4$.

::hint
**Kiến thức:** hàm số bậc nhất có dạng $y=ax+b$ với $a\ne0$.

**Gợi ý các bước:**
1. Đưa về dạng $y=ax+b$ nếu có thể.
2. Loại $a=0$ và công thức chứa $x^2$.

::solution
a) Có $a=4$, $b=1$. b) Có $a=-3$, $b=0$. c) Có $a=0$. d) Chứa $x^2$.

**Đáp số.** a) và b) là hàm số bậc nhất.
:::

:::exercise
Cho hàm số $y=-2x+5$. Tính $y$ khi $x=-1$, $x=0$ và $x=3$.

::hint
**Kiến thức:** thay từng giá trị của $x$ vào công thức.

**Gợi ý các bước:**
1. Giữ dấu ngoặc khi thay số âm.
2. Thực hiện phép nhân trước phép cộng.

::solution
$$x=-1\Rightarrow y=7;\qquad x=0\Rightarrow y=5;\qquad x=3\Rightarrow y=-1.$$

**Đáp số.** $7$, $5$, $-1$.
:::

:::exercise Ôn tập
Điểm nào trong các điểm $A(0; -2)$, $B(1; 1)$, $C(-1; -5)$, $D(2; 5)$ thuộc đồ thị $y=3x-2$?

::hint
**Kiến thức:** điểm thuộc đồ thị khi toạ độ thoả mãn công thức.

**Gợi ý các bước:**
1. Thay từng hoành độ vào $3x-2$.
2. So sánh với tung độ.

::solution
Với $x=0,1,-1,2$, ta được $-2,1,-5,4$. Ba kết quả đầu khớp; điểm $D$ có $5\ne4$.

**Đáp số.** $A$, $B$, $C$.
:::

:::exercise
Vẽ đồ thị hàm số $y=2x+6$ bằng hai giao điểm với các trục toạ độ.

::hint
**Kiến thức:** trên trục tung, $x=0$; trên trục hoành, $y=0$.

**Gợi ý các bước:**
1. Tìm hai điểm $P$, $Q$.
2. Vẽ đường thẳng $PQ$.

::solution
$x=0\Rightarrow y=6$, nên $P(0; 6)$. $y=0\Rightarrow2x+6=0\Rightarrow x=-3$, nên $Q(-3; 0)$. Đồ thị là đường thẳng $PQ$.

**Đáp số.** Đường thẳng qua $(0; 6)$ và $(-3; 0)$.
:::

:::exercise
Vẽ đồ thị hàm số $y=-4x$.

::hint
**Kiến thức:** khi $b=0$, đồ thị đi qua gốc toạ độ.

**Gợi ý các bước:**
1. Chọn $x=0$ và $x=1$.
2. Vẽ đường thẳng qua hai điểm tìm được.

::solution
$x=0\Rightarrow O(0; 0)$. $x=1\Rightarrow M(1; -4)$. Đồ thị là đường thẳng $OM$.

**Đáp số.** Đường thẳng qua $(0; 0)$ và $(1; -4)$.
:::

:::exercise
Không cần vẽ, hãy tìm giao điểm của đồ thị $y=-\dfrac12x+3$ với mỗi trục toạ độ.

::hint
**Kiến thức:** trên trục tung, $x=0$; trên trục hoành, $y=0$.

**Gợi ý các bước:**
1. Cho $x=0$.
2. Giải $-\dfrac12x+3=0$.

::solution
$x=0\Rightarrow y=3$, nên giao điểm với trục tung là $(0; 3)$. Cho $y=0$: $-\dfrac12x+3=0\Rightarrow x=6$.

**Đáp số.** $(0; 3)$ và $(6; 0)$.
:::

:::exercise
Bãi giữ xe thu $12$ nghìn đồng vào cổng và $4$ nghìn đồng mỗi giờ. Gọi $t$ là số giờ, $C$ là chi phí nghìn đồng, với $0\le t\le8$.

a) Viết công thức của $C$ theo $t$. b) Tính phí gửi $5$ giờ. c) Nêu hai đầu mút của phần đồ thị phù hợp với tình huống.

::hint
**Kiến thức:** tổng chi phí bằng phí ban đầu cộng phí theo thời gian.

**Gợi ý các bước:**
1. Lập công thức dạng $C=at+b$.
2. Thay $t=5$, rồi thay hai giá trị biên $t=0$, $t=8$.

::solution
$C=4t+12$. Với $t=5$, $C=4\cdot5+12=32$. Khi $t=0$, $C=12$; khi $t=8$, $C=44$.

**Đáp số.** a) $C=4t+12$; b) $32$ nghìn đồng; c) $(0; 12)$ và $(8; 44)$.
:::

:::exercise
Bể có $72$ lít nước, xả đều $8$ lít mỗi phút. Gọi $t$ là số phút và $V$ là số lít còn lại.

a) Viết $V$ theo $t$. b) Tính $V$ sau $6$ phút. c) Khi nào bể hết nước, và phần đồ thị phù hợp có hai đầu mút nào?

::hint
**Kiến thức:** lượng còn lại bằng lượng ban đầu trừ lượng đã xả.

**Gợi ý các bước:**
1. Viết $V=72-8t$.
2. Thay $t=6$ và giải $V=0$.

::solution
$V=72-8t$. Sau $6$ phút, $V=72-8\cdot6=24$. Bể hết nước khi $72-8t=0\Rightarrow t=9$.

**Đáp số.** a) $V=72-8t$; b) $24$ lít; c) $9$ phút, hai đầu mút $(0; 72)$ và $(9; 0)$.
:::

:::exercise Thử thách
Hai đường thẳng $y=2x-3$ và $y=-x+6$ cắt nhau tại $M$. Không vẽ đồ thị, hãy tìm toạ độ $M$ rồi kiểm tra kết quả.

::hint
**Kiến thức:** tại giao điểm, cùng một hoành độ cho cùng một tung độ.

**Gợi ý các bước:**
1. Giải phương trình $2x-3=-x+6$.
2. Thay $x$ tìm được vào một trong hai công thức.
3. Kiểm tra với công thức còn lại.

::solution
$2x-3=-x+6\Rightarrow3x=9\Rightarrow x=3$. Khi đó $y=2\cdot3-3=3$. Kiểm tra: $-3+6=3$.

**Đáp số.** $M(3; 3)$.
:::

## Kiểm tra mini

:::quiz
::mc
Hàm số nào sau đây là hàm số bậc nhất?
A. $y=x^2-2$.
B. $y=5$.
C. $y=4x-7$.
D. $y=\dfrac3x$.
::key C
A có dạng $y=ax+b$ với $a=4\ne0$. B có $a=0$, còn C và D không có dạng bậc nhất.

::mc
Điểm nào thuộc đồ thị $y=-2x+4$?
A. $(0; -4)$.
B. $(-1; 2)$.
C. $(2; 4)$.
D. $(1; 2)$.
::key D
Với $x=1$, ta có $y=-2+4=2$. Các phương án khác xuất phát từ sai dấu hoặc không thay hoành độ vào công thức.

::mc
Cặp điểm nào thuận tiện để vẽ đồ thị $y=3x+6$ bằng hai giao điểm với các trục?
A. $(0; 6)$ và $(-2; 0)$.
B. $(0; 6)$ và $(2; 0)$.
C. $(0; -6)$ và $(2; 0)$.
D. $(6; 0)$ và $(0; -2)$.
::key A
Cho $x=0$ được $(0; 6)$; cho $y=0$ được $3x+6=0\Rightarrow x=-2$. A và B mắc lỗi về dấu.

::mc
Đồ thị $y=-x+3$ cắt trục hoành tại điểm nào?
A. $(0; 3)$.
B. $(3; 0)$.
C. $(-3; 0)$.
D. $(0; -3)$.
::key B
Trên trục hoành, $y=0$, nên $-x+3=0\Rightarrow x=3$. A là giao điểm với trục tung.

::tf
Cho hàm số $y=2x-4$.
a) Đây là hàm số bậc nhất với $a=2$, $b=-4$.
b) Đồ thị đi qua gốc toạ độ $O$.
c) Điểm $A(2; 0)$ thuộc đồ thị.
d) Đồ thị cắt trục tung tại $(0; 4)$.
::key Đ S Đ S
a) Đúng theo định nghĩa. b) Sai vì khi $x=0$ thì $y=-4$. c) Đúng vì $2\cdot2-4=0$. d) Sai: giao điểm với trục tung là $(0; -4)$.

::sa
Cho $y=-3x+7$. Tính $y$ khi $x=2$.
::key 1
Thay $x=2$: $y=-3\cdot2+7=1$.

::sa
Một chuyến giao hàng có chi phí $C=8x+12$ nghìn đồng, trong đó $x$ là số ki-lô-mét. Chi phí là $60$ nghìn đồng thì quãng đường bằng bao nhiêu ki-lô-mét?
::key 6
Giải $8x+12=60$ được $8x=48$, nên $x=6$ km.
:::
